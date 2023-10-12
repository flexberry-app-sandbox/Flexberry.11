import { Serializer as ГрафикРаботыСотрудникаSerializer } from
  '../mixins/regenerated/serializers/i-i-s-1-график-работы-сотрудника';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ГрафикРаботыСотрудникаSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
