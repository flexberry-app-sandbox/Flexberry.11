import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import ТипыЗанятостиEnum from '../enums/i-i-s-1-типы-занятости';

export default FlexberryEnum.extend({
  enum: ТипыЗанятостиEnum,
  sourceType: 'IIS.1.ТипыЗанятости'
});
