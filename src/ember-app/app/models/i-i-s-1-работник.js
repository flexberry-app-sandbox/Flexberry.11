import $ from 'jquery';
import { buildValidations } from 'ember-cp-validations';

import {
  defineBaseModel,
  ValidationRules,
  Model as РаботникMixin
} from '../mixins/regenerated/models/i-i-s-1-работник';

import СотрудникModel from './i-i-s-1-сотрудник';
import { ValidationRules as ParentValidationRules } from '../mixins/regenerated/models/i-i-s-1-сотрудник';

const Validations = buildValidations($.extend({}, ParentValidationRules, ValidationRules), {
  dependentKeys: ['model.i18n.locale'],
});

let Model = СотрудникModel.extend(РаботникMixin, Validations, {
});

defineBaseModel(Model);

export default Model;
