import {
  defineNamespace,
  Model as СоставБригадыMixin
} from '../mixins/regenerated/models/i-i-s-1-состав-бригады';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(СоставБригадыMixin, {
});

defineNamespace(Model);

export default Model;
