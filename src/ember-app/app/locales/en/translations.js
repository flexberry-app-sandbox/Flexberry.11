import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IIS1БригадаModel from './models/i-i-s-1-бригада';
import IIS1БригадирModel from './models/i-i-s-1-бригадир';
import IIS1ГрафикРаботыСотрудникаModel from './models/i-i-s-1-график-работы-сотрудника';
import IIS1ДолжностиModel from './models/i-i-s-1-должности';
import IIS1ОтсутствиеСотрудникаModel from './models/i-i-s-1-отсутствие-сотрудника';
import IIS1РаботникModel from './models/i-i-s-1-работник';
import IIS1СоставБригадыModel from './models/i-i-s-1-состав-бригады';
import IIS1СотрудникModel from './models/i-i-s-1-сотрудник';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-1-бригада': IIS1БригадаModel,
    'i-i-s-1-бригадир': IIS1БригадирModel,
    'i-i-s-1-график-работы-сотрудника': IIS1ГрафикРаботыСотрудникаModel,
    'i-i-s-1-должности': IIS1ДолжностиModel,
    'i-i-s-1-отсутствие-сотрудника': IIS1ОтсутствиеСотрудникаModel,
    'i-i-s-1-работник': IIS1РаботникModel,
    'i-i-s-1-состав-бригады': IIS1СоставБригадыModel,
    'i-i-s-1-сотрудник': IIS1СотрудникModel
  },

  'application-name': 'ИнтерфейсПользователя',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'ИнтерфейсПользователя',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'ИнтерфейсПользователя',
          title: 'ИнтерфейсПользователя'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },

      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },

  },

});

export default translations;
