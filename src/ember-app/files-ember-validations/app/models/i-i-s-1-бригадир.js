import {
  defineNamespace,
  defineBaseModel,
  Model as БригадирMixin
} from '../mixins/regenerated/models/i-i-s-1-бригадир';

import СотрудникModel from './i-i-s-1-сотрудник';

let Model = СотрудникModel.extend(БригадирMixin, {
});

defineNamespace(Model);
defineBaseModel(Model);

export default Model;
