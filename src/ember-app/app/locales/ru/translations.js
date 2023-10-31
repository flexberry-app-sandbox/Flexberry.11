import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

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
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'ИнтерфейсПользователя',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'ИнтерфейсПользователя',
          title: ''
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },
        'new-folder1': {
          caption: 'NewFolder1',
          title: 'NewFolder1'
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },

  },

});

export default translations;
