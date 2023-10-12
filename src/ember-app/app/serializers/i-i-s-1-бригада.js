import { Serializer as БригадаSerializer } from
  '../mixins/regenerated/serializers/i-i-s-1-бригада';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(БригадаSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
