import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-1-должности', 'Unit | Model | i-i-s-1-должности', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-1-бригада',
    'model:i-i-s-1-бригадир',
    'model:i-i-s-1-график-работы-сотрудника',
    'model:i-i-s-1-должности',
    'model:i-i-s-1-отсутствие-сотрудника',
    'model:i-i-s-1-работник',
    'model:i-i-s-1-состав-бригады',
    'model:i-i-s-1-сотрудник',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
