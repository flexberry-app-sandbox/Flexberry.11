import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';

export let Model = Mixin.create({
  датаНачала: DS.attr('date'),
  датаОкончания: DS.attr('date'),
  причина: DS.attr('i-i-s-1-типы-занятости'),
  сотрудник: DS.belongsTo('i-i-s-1-сотрудник', { inverse: null, async: false, polymorphic: true })
});

export let ValidationRules = {
  датаНачала: {
    descriptionKey: 'models.i-i-s-1-отсутствие-сотрудника.validations.датаНачала.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  датаОкончания: {
    descriptionKey: 'models.i-i-s-1-отсутствие-сотрудника.validations.датаОкончания.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  причина: {
    descriptionKey: 'models.i-i-s-1-отсутствие-сотрудника.validations.причина.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  сотрудник: {
    descriptionKey: 'models.i-i-s-1-отсутствие-сотрудника.validations.сотрудник.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};
