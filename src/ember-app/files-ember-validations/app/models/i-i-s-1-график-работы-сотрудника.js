import {
  defineNamespace,
  Model as ГрафикРаботыСотрудникаMixin
} from '../mixins/regenerated/models/i-i-s-1-график-работы-сотрудника';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ГрафикРаботыСотрудникаMixin, {
});

defineNamespace(Model);

export default Model;
