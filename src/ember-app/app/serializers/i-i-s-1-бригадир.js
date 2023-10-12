import { Serializer as БригадирSerializer } from
  '../mixins/regenerated/serializers/i-i-s-1-бригадир';
import СотрудникSerializer from './i-i-s-1-сотрудник';

export default СотрудникSerializer.extend(БригадирSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
