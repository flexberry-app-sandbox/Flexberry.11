import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  ValidationRules,
  Model as ГрафикРаботыСотрудникаMixin
} from '../mixins/regenerated/models/i-i-s-1-график-работы-сотрудника';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ГрафикРаботыСотрудникаMixin, Validations, {
});

export default Model;
