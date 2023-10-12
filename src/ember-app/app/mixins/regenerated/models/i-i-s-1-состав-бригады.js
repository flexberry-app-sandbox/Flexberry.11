import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';

export let Model = Mixin.create({
  сотрудник: DS.belongsTo('i-i-s-1-сотрудник', { inverse: null, async: false, polymorphic: true })
});

export let ValidationRules = {
  сотрудник: {
    descriptionKey: 'models.i-i-s-1-состав-бригады.validations.сотрудник.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};
