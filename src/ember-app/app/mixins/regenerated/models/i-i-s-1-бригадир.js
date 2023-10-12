import Mixin from '@ember/object/mixin';
import $ from 'jquery';

export let Model = Mixin.create({});

export let ValidationRules = {};

export let defineBaseModel = function (modelClass) {
  modelClass.reopenClass({
    _parentModelName: 'i-i-s-1-сотрудник'
  });
};
