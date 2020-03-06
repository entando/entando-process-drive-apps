export default {
  MORTGAGE_APPLICATION_FORM: {
    $schema: 'http://json-schema.org/draft-07/schema#',
    $id: 'http://entando.org/schemas/MortgageApplicationForm.json',
    title: 'Mortgage Application Form',
    type: 'object',
    properties: {
      personalInformation: {
        title: 'Personal Information',
        description: 'Please fill in your personal information',
        type: 'object',
        required: ['firstName', 'lastName', 'streetName', 'city', 'state', 'country', 'ssn'],
        properties: {
          firstName: {
            type: 'string',
            title: 'First name',
          },
          lastName: {
            type: 'string',
            title: 'Last name',
          },
          fieldOfEmployment: {
            type: 'array',
            title: 'Field of employment',
            items: {
              type: 'string',
              oneOf: [
                {
                  const: 'IT',
                  title: 'IT',
                },
                {
                  const: 'LAW',
                  title: 'Law',
                },
                {
                  const: 'TRANSPORT',
                  title: 'Transportation',
                },
              ],
            },
            uniqueItems: true,
          },
          streetName: {
            type: 'string',
            title: 'Street name',
          },
          city: {
            type: 'string',
            title: 'City',
          },
          state: {
            type: 'string',
            title: 'State',
            enum: ['FIRST_STATE', 'SECOND_STATE', 'THIRD_STATE'],
            enumNames: ['1st state', '2nd state', '3rd state'],
          },
          country: {
            type: 'string',
            title: 'Country',
            enum: ['LT', 'IT', 'US'],
            enumNames: ['Lithuania', 'Italy', 'United States of America'],
          },
          ssn: {
            type: 'string',
            title: 'Social security number',
          },
          dob: {
            type: 'string',
            title: 'Date of Birth',
            format: 'date',
          },
          agreement: {
            type: 'boolean',
            title:
              'Check here to indicate that you have read and agree to the terms and conditions',
          },
        },
      },
      propertyInformation: {
        title: 'Property Information',
        type: 'object',
        required: ['typeOfHome', 'streetName', 'city', 'state', 'country'],
        properties: {
          typeOfHome: {
            type: 'string',
            title: 'Type of Home',
            oneOf: [
              {
                const: 'SINGLE_FAMILY_HOME',
                title: 'Single Family Home',
              },
              {
                const: 'MULTIPLE_FAMILY_DWELLING',
                title: 'Multiple Family Dwelling',
              },
              {
                const: 'APARTMENT_OR_CONDO',
                title: 'Apartment or Condo',
              },
            ],
          },
          rooms: {
            title: 'Rooms',
            type: 'object',
            required: [],
            properties: {
              bedrooms: {
                type: 'string',
                title: 'Bedrooms',
                enum: ['1', '2', '3', '4', '5'],
                enumNames: ['1 bedroom', '2 bedrooms', '3 bedrooms', '4 bedrooms', '5+ bedrooms'],
              },
              bathrooms: {
                type: 'string',
                title: 'Bathrooms',
                enum: [1, 2, 3],
                enumNames: ['1 bathroom', '2 bathrooms', '3 bathrooms'],
              },
            },
          },
          streetName: {
            type: 'string',
            title: 'Street name',
          },
          city: {
            type: 'string',
            title: 'City',
          },
          state: {
            type: 'string',
            title: 'State',
            enum: ['FIRST_STATE', 'SECOND_STATE', 'THIRD_STATE'],
            enumNames: ['1st state', '2nd state', '3rd state'],
          },
          country: {
            type: 'string',
            title: 'Country',
            enum: ['LT', 'IT', 'US'],
            enumNames: ['Lithuania', 'Italy', 'United States of America'],
          },
        },
      },
    },
  },
  ALL_FIELDS: {
    $schema: 'http://json-schema.org/draft-07/schema#',
    $id: 'http://entando.org/schemas/pda-form.json',
    title: 'forms-sample.ProcessSample-taskform.frm',
    type: 'object',
    required: ['__unbound_field_field_6196', '__unbound_field_field_030592'],
    properties: {
      processDocument: {
        type: 'string',
        title: 'Upload a document for the ProcessDocument process variable',
        format: 'data-url',
      },
      processDocumentList: {
        type: 'array',
        title: 'Upload a list of documents to the ProcessDocumentList process variable',
        items: {
          type: 'string',
          format: 'data-url',
        },
      },
      MyObject: {
        title: 'com_myspace_forms_sample_MyObject',
        type: 'object',
        required: ['myString'],
        properties: {
          myDateTime: {
            type: 'string',
            title: 'My Date Time ',
            description: 'My Date Time ',
            format: 'date-time',
          },
          myBoolean: {
            type: 'boolean',
            title: 'My Boolean',
          },
          myString: {
            type: 'string',
            title: 'My String ',
            description: 'My String',
            maxLength: 100,
          },
          myDouble: {
            type: 'number',
            title: 'My Double - Read Only',
            description: 'My Double',
            readOnly: true,
          },
          myInteger: {
            type: 'integer',
            title: 'My Integer',
            description: 'My Integer',
          },
        },
      },
      __unbound_field_field_9814: {
        type: 'string',
        title: 'My Radio Group',
        oneOf: [
          {
            const: 'myValue',
            title: 'myText',
          },
          {
            const: 'anotherValue',
            title: 'anotherText',
          },
          {
            const: 'what?',
            title: 'yup!',
          },
        ],
      },
      __unbound_field_field_9324: {
        type: 'number',
        title: 'Slider',
        minimum: 0.0,
        maximum: 200.0,
        multipleOf: 5.0,
      },
      __unbound_field_field_2802: {
        type: 'number',
        title: 'Slider 0to1',
        minimum: 0.0,
        maximum: 1.0,
        multipleOf: 0.1,
      },
      __unbound_field_field_6196: {
        type: 'string',
        title: 'This is a big text',
        description: 'Write here!',
      },
      __unbound_field_field_4073: {
        type: 'array',
        title: 'My Multiple Selector',
        items: {
          type: 'string',
          oneOf: [
            {
              const: 'first',
              title: 'first',
            },
            {
              const: 'second',
              title: 'second',
            },
            {
              const: 'third',
              title: 'third',
            },
            {
              const: 'last',
              title: 'last',
            },
          ],
        },
        uniqueItems: true,
      },
      __unbound_field_field_653: {
        type: 'string',
        title: 'Combo without default',
        oneOf: [
          {
            const: 'oneValue',
            title: 'one',
          },
          {
            const: 'twoValue',
            title: 'two',
          },
          {
            const: 'threeValue',
            title: 'three',
          },
        ],
      },
      __unbound_field_field_68448: {
        type: 'string',
        title: 'Combo',
        default: 'myValue',
        oneOf: [
          {
            const: 'myValue',
            title: 'myText',
          },
          {
            const: 'anotherValue',
            title: 'anotherText',
          },
          {
            const: 'what?',
            title: 'yup!',
          },
        ],
      },
      processList: {
        type: 'array',
        title: 'ProcessList',
        items: {
          type: 'string',
        },
      },
      __unbound_field_field_030592: {
        type: 'string',
        title: 'My Radio Group with default value',
        default: 'thirdValue',
        oneOf: [
          {
            const: 'firstValue',
            title: 'first',
          },
          {
            const: 'secondValue',
            title: 'second',
          },
          {
            const: 'thirdValue',
            title: 'third',
          },
        ],
      },
    },
  },
  DEFAULT: {
    $schema: 'http://json-schema.org/draft-07/schema#',
    $id: 'http://entando.org/schemas/pda-form.json',
    type: 'object',
    properties: {
      '47078d21-7da5-4d3f-8355-0fcd78b09f39': {
        title: 'PerformanceEvaluation-taskform.frm',
        type: 'object',
        required: ['performance'],
        properties: {
          reason: {
            type: 'string',
            title: 'Reason',
            description: 'Please provide reasons',
          },
          performance: {
            type: 'integer',
            title: 'Performance',
            description: 'Please evaluate performance',
          },
        },
      },
    },
  },
  POSTE_REGISTRATION_FORM: {
    $schema: 'http://json-schema.org/draft-07/schema#',
    $id: 'http://entando.org/schemas/poste-registration-form.json',
    title: 'Registration Data',
    type: 'object',
    properties: {
      organisationDetails: {
        title: 'Organisation Details',
        description: 'Please fill in your personal information',
        type: 'object',
        required: [
          'organisationName',
          'organisationLegalStructure',
          'companyRegistrationNumber',
          'vatNumber',
          'address',
          'postalCode',
          'city',
          'stateCounty',
          'country',
        ],
        properties: {
          organisationName: {
            title: 'Organisation Name',
            type: 'string',
          },
          organisationLegalStructure: {
            title: 'Organisation Legal Structure',
            type: 'string',
          },
          companyRegistrationNumber: {
            title: 'Company Registration Number',
            type: 'string',
          },
          vatNumber: {
            title: 'VAT Number',
            type: 'string',
          },
          mainOrganisationPhoneNumber: {
            title: 'Main Organisation Phone Number',
            type: 'string',
          },
          address: {
            title: 'Address',
            type: 'string',
          },
          postalCode: {
            title: 'Postal Code',
            type: 'string',
          },
          city: {
            title: 'City',
            type: 'string',
          },
          stateCounty: {
            type: 'array',
            title: 'State / County',
            items: {
              type: 'string',
              oneOf: [
                {
                  const: 'FIRST_STATE',
                  title: '1st state',
                },
                {
                  const: 'SECOND_STATE',
                  title: '2nd state',
                },
                {
                  const: 'THIRD_STATE',
                  title: '3rd state',
                },
              ],
            },
            uniqueItems: true,
          },
          country: {
            type: 'array',
            title: 'Country',
            items: {
              type: 'string',
              oneOf: [
                {
                  const: 'LT',
                  title: 'Lithuania',
                },
                {
                  const: 'IT',
                  title: 'Italy',
                },
                {
                  const: 'US',
                  title: 'United States of America',
                },
                {
                  const: 'OTHER',
                  title: 'Other',
                },
              ],
            },
            uniqueItems: true,
          },

          webSite: {
            title: 'Web site',
            type: 'string',
          },
          externalCode: {
            title: 'External Code',
            type: 'string',
          },
        },
      },
      userDetails: {
        title: 'User Details',
        type: 'object',
        required: [
          'lastName',
          'firstName',
          'email',
          'phoneNumber',
          'username',
          'userVerificationQuestion',
          'preferredUiLanguage',
          'timezone',
        ],
        properties: {
          title: {
            type: 'string',
            title: 'Title',
            oneOf: [
              {
                const: 'MR',
                title: 'Mr.',
              },
              {
                const: 'MS',
                title: 'Ms.',
              },
            ],
          },
          lastName: {
            type: 'string',
            title: 'Last Name',
          },
          firstName: {
            type: 'string',
            title: 'First Name',
          },
          email: {
            type: 'string',
            description:
              "IMPORTANT: This email address will be used for access to the site and for all communications. Please ensure you enter the address correctly. Please use ';' (semicolon) to separate multiple addresses.",
            title: 'Email Address',
          },
          phoneNumber: {
            type: 'string',
            title: 'Phone Number',
          },
          mobileNumber: {
            title: 'Mobile Number',
            type: 'string',
            description:
              '(please enter "+" "country code" and "your mobile phone number" with no spaces)',
          },
          faxNumber: {
            type: 'string',
            title: 'Fax Number',
          },
          roleWithinOrganisation: {
            type: 'array',
            title: 'Role within Organisation',
            items: {
              type: 'string',
              oneOf: [
                {
                  const: 'OTHER',
                  title: 'Other',
                },
                {
                  const: 'OWNER',
                  title: 'Owner',
                },
                {
                  const: 'CEO',
                  title: 'CEO',
                },
              ],
            },
            uniqueItems: true,
          },
          username: {
            type: 'string',
            title: 'Username',
            description: '(please do not forget your username)',
          },
          userVerificationQuestion: {
            type: 'string',
            title: 'User Verification Question',
            description:
              "Please specify a question that will help verify your identity should the need arise (e.g. Your mother's maiden name?)",
          },
          userVerificationQuestionAnswer: {
            type: 'string',
            title: 'Answer to Your User Verification Question',
            description:
              '(The helpdesk may request this information in order to verify your identity).',
          },
          preferredContactMethod: {
            type: 'array',
            title: 'Preferred Contact Method',
            items: {
              type: 'string',
              oneOf: [
                {
                  const: 'TEL',
                  title: 'Telephone',
                },
                {
                  const: 'FAX',
                  title: 'Fax',
                },
                {
                  const: 'EMAIL',
                  title: 'Email',
                },
              ],
            },
            uniqueItems: true,
          },
          preferredUiLanguage: {
            type: 'array',
            title: 'Preferred language for use in system interface',
            items: {
              type: 'string',
              oneOf: [
                {
                  const: 'IT',
                  title: 'Italiano',
                },
                {
                  const: 'EN-GB',
                  title: 'ENGLISH',
                },
              ],
            },
            uniqueItems: true,
          },
          timezone: {
            type: 'array',
            title: 'Time Zone',
            items: {
              type: 'string',
              oneOf: [
                {
                  const: 'UTC',
                  title: 'UTC',
                },
                {
                  const: 'UTC+1',
                  title: 'UTC +1',
                },
              ],
            },
            uniqueItems: true,
          },
        },
      },
    },
  },
};
