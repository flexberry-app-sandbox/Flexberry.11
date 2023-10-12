import { Serializer as СоставБригадыSerializer } from
  '../mixins/regenerated/serializers/i-i-s-1-состав-бригады';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(СоставБригадыSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
