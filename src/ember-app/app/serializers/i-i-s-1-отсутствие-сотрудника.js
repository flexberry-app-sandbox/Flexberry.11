import { Serializer as ОтсутствиеСотрудникаSerializer } from
  '../mixins/regenerated/serializers/i-i-s-1-отсутствие-сотрудника';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ОтсутствиеСотрудникаSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
