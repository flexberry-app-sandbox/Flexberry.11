import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-1-график-работы-сотрудника', 'Unit | Serializer | i-i-s-1-график-работы-сотрудника', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-1-график-работы-сотрудника',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-1-типы-занятости',

    'transform:i-i-s-1-управляющий-объект-з-с',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
