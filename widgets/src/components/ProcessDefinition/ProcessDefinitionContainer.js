import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Skeleton from '@material-ui/lab/Skeleton';

import { getProcesses, getProcessForm, postProcessForm } from 'api/pda/processes';
import { getPageWidget } from 'api/app-builder/pages';
import theme from 'theme';
import CustomEventContext from 'components/common/CustomEventContext';
import WidgetBox from 'components/common/WidgetBox';
import JSONForm from 'components/common/form/JSONForm';
import Select from 'components/common/form/widgets/SelectWidget';
import Notification from 'components/common/Notification';
import withAuth from 'components/common/auth/withAuth';

class ProcessDefinitionContainer extends React.Component {
  state = {
    config: null,
    processList: [],
    selectedProcess: '',
    loading: false,
    submitting: false,
    formSchema: null,
    errorMessage: '',
  };

  componentDidMount() {
    this.setState({ loading: true }, async () => {
      const config = await this.fetchWidgetConfigs();
      if (config) {
        this.setState({ config }, async () => {
          const processList = await this.fetchProcess();
          this.setState({ processList, loading: false });
        });
      }
    });
  }

  fetchWidgetConfigs = async () => {
    const { pageCode, frameId } = this.props;
    try {
      // config will be fetched from app-builder
      const widgetConfigs = await getPageWidget(pageCode, frameId, 'PROCESS_DEFINITION');
      if (widgetConfigs.errors && widgetConfigs.errors.length) {
        throw widgetConfigs.errors[0];
      }
      const { config } = widgetConfigs.payload;

      return {
        ...config,
      };
    } catch (error) {
      this.handleError(error.message);
    }
    return null;
  };

  closeNotification = () => {
    this.setState({ errorMessage: '' });
  };

  fetchProcess = async () => {
    const { config } = this.state;

    const connection = (config && config.knowledgeSource) || '';

    try {
      const processList = await getProcesses(connection);
      const { payload, errors } = processList;
      if (errors && errors.length) {
        throw errors[0];
      }
      return payload.map(proc => ({
        label: proc['process-name'],
        value: `${proc['process-id']}@${proc['container-id']}`,
      }));
    } catch (error) {
      this.handleError(error.message);
    }
    return null;
  };

  fetchSchema = async () => {
    const { config, selectedProcess } = this.state;

    const connection = (config && config.knowledgeSource) || '';

    try {
      const formSchema = await getProcessForm(connection, selectedProcess);
      return formSchema;
    } catch (error) {
      this.handleError(error.message);
    }
    return null;
  };

  submitProcessForm = form => {
    this.setState({ submitting: true }, async () => {
      const { config, selectedProcess } = this.state;
      const { onSubmitForm } = this.props;

      const connection = (config && config.knowledgeSource) || '';

      try {
        const response = await postProcessForm(connection, selectedProcess, form.formData);
        onSubmitForm({ ...form, response });
      } catch (error) {
        this.handleError(error.message);
      } finally {
        this.setState({ submitting: false, selectedProcess: '' });
      }
    });
  };

  handleProcessChange = (_, selectedProcess) => {
    this.setState({ selectedProcess }, async () => {
      const formSchema = await this.fetchSchema();
      this.setState({ formSchema });
    });
  };

  handleError = errorMessage => {
    this.setState({ errorMessage });
    const { onError } = this.props;
    onError(errorMessage);
  };

  render() {
    const {
      loading,
      formSchema,
      config,
      submitting,
      errorMessage,
      processList,
      selectedProcess,
    } = this.state;
    const { onError } = this.props;

    const uiSchema = (config && config.settings && config.settings.uiSchema) || {};

    return (
      <CustomEventContext.Provider
        value={{
          onSubmitForm: this.submitProcessForm,
          onError,
        }}
      >
        <ThemeProvider theme={theme}>
          <Container disableGutters>
            <WidgetBox title="Process Definition">
              {loading ? (
                <Skeleton variant="rect" height={35} />
              ) : processList.length ? (
                <div>
                  <Typography>Select a process definition</Typography>
                  <Select
                    id="processDefinition"
                    label="Select a Process Definition"
                    options={{ enumOptions: processList }}
                    onChange={this.handleProcessChange}
                    value={selectedProcess}
                  />
                </div>
              ) : (
                <Typography>There is no processes to be defined</Typography>
              )}
              {selectedProcess && (
                <div>
                  <hr />
                  <JSONForm
                    loading={loading}
                    formSchema={formSchema}
                    uiSchema={uiSchema}
                    submitting={submitting}
                  />
                </div>
              )}
            </WidgetBox>
          </Container>
          <Notification message={errorMessage} type="error" onClose={this.closeNotification} />
        </ThemeProvider>
      </CustomEventContext.Provider>
    );
  }
}

ProcessDefinitionContainer.propTypes = {
  onError: PropTypes.func,
  onSubmitForm: PropTypes.func,
  pageCode: PropTypes.string,
  frameId: PropTypes.string,
};

ProcessDefinitionContainer.defaultProps = {
  onError: () => {},
  onSubmitForm: () => {},
  pageCode: '',
  frameId: '',
};

export default withAuth(ProcessDefinitionContainer, [
  'process-definition-form-get',
  'process-definition-form-submit',
]);