import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';

export let Model = Mixin.create({
  время: DS.attr('date'),
  времяНачала: DS.attr('date'),
  времяОкончания: DS.attr('date'),
  числоЧасов: DS.attr('decimal'),
  сотрудник: DS.belongsTo('i-i-s-1-сотрудник', { inverse: null, async: false, polymorphic: true }),
  табельСмены: DS.belongsTo('i-i-s-1-табель-смены', { inverse: null, async: false })
});

export let ValidationRules = {
  время: {
    descriptionKey: 'models.i-i-s-1-график-работы-сотрудника.validations.время.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  времяНачала: {
    descriptionKey: 'models.i-i-s-1-график-работы-сотрудника.validations.времяНачала.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  времяОкончания: {
    descriptionKey: 'models.i-i-s-1-график-работы-сотрудника.validations.времяОкончания.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  числоЧасов: {
    descriptionKey: 'models.i-i-s-1-график-работы-сотрудника.validations.числоЧасов.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  сотрудник: {
    descriptionKey: 'models.i-i-s-1-график-работы-сотрудника.validations.сотрудник.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  табельСмены: {
    descriptionKey: 'models.i-i-s-1-график-работы-сотрудника.validations.табельСмены.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};
