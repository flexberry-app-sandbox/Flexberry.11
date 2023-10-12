import {
  defineNamespace,
  Model as БригадаMixin
} from '../mixins/regenerated/models/i-i-s-1-бригада';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(БригадаMixin, {
});

defineNamespace(Model);

export default Model;
