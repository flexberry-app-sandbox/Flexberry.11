import {
  defineNamespace,
  Model as ОтсутствиеСотрудникаMixin
} from '../mixins/regenerated/models/i-i-s-1-отсутствие-сотрудника';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ОтсутствиеСотрудникаMixin, {
});

defineNamespace(Model);

export default Model;
