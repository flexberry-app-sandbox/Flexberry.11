import { Serializer as РаботникSerializer } from
  '../mixins/regenerated/serializers/i-i-s-1-работник';
import СотрудникSerializer from './i-i-s-1-сотрудник';

export default СотрудникSerializer.extend(РаботникSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
