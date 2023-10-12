import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  ValidationRules,
  Model as СоставБригадыMixin
} from '../mixins/regenerated/models/i-i-s-1-состав-бригады';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(СоставБригадыMixin, Validations, {
});

export default Model;
