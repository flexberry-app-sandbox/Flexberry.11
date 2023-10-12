import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';

export let Model = Mixin.create({
  датаНачалаБригады: DS.attr('date'),
  датаРаспадаБригады: DS.attr('date'),
  код: DS.attr('string')
});

export let ValidationRules = {
  датаНачалаБригады: {
    descriptionKey: 'models.i-i-s-1-бригада.validations.датаНачалаБригады.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  датаРаспадаБригады: {
    descriptionKey: 'models.i-i-s-1-бригада.validations.датаРаспадаБригады.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  код: {
    descriptionKey: 'models.i-i-s-1-бригада.validations.код.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};
