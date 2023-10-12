import {
  defineNamespace,
  defineBaseModel,
  Model as РаботникMixin
} from '../mixins/regenerated/models/i-i-s-1-работник';

import СотрудникModel from './i-i-s-1-сотрудник';

let Model = СотрудникModel.extend(РаботникMixin, {
});

defineNamespace(Model);
defineBaseModel(Model);

export default Model;
