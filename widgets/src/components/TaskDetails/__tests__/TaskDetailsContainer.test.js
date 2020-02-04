import { render, wait } from '@testing-library/react';
import React from 'react';
import 'mocks/i18nMock';

import mockKeycloak from 'mocks/auth/keycloak';
import WIDGET_CONFIGS from 'mocks/app-builder/widgets';
import MOCKED_GET_TASK_RESPONSE from 'mocks/taskDetails/getTask';
import { getTask } from 'api/pda/tasks';
import { getPageWidget } from 'api/app-builder/pages';

import TaskDetailsContainer from 'components/TaskDetails/TaskDetailsContainer';

mockKeycloak();
jest.mock('api/app-builder/pages');
jest.mock('api/pda/tasks');

beforeEach(() => {
  getPageWidget.mockClear();
  getTask.mockClear();
});

describe('<TaskDetailsContainer />', () => {
  getPageWidget.mockImplementation(() => Promise.resolve(WIDGET_CONFIGS.TASK_DETAILS.configs));
  getTask.mockImplementation(() => Promise.resolve(MOCKED_GET_TASK_RESPONSE));

  const fixedDate = new Date(2020, 0, 1);
  global.Date = jest.fn(() => fixedDate);
  global.Date.now = jest.fn(() => fixedDate);

  it('renders snapshot correctly', async () => {
    const { container } = render(
      <TaskDetailsContainer
        taskId={WIDGET_CONFIGS.TASK_DETAILS.taskId}
        pageCode={WIDGET_CONFIGS.TASK_DETAILS.pageCode}
        frameId={WIDGET_CONFIGS.TASK_DETAILS.frameId}
        widgetCode={WIDGET_CONFIGS.TASK_DETAILS.widgetCode}
      />
    );

    await wait(() => {
      expect(container).toMatchSnapshot();
    });
  });
});
