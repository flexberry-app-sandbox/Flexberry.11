import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  ValidationRules,
  Model as ОтсутствиеСотрудникаMixin
} from '../mixins/regenerated/models/i-i-s-1-отсутствие-сотрудника';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ОтсутствиеСотрудникаMixin, Validations, {
});

export default Model;
