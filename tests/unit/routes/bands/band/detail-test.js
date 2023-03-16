import { module, test } from 'qunit';
import { setupTest } from 'training/tests/helpers';

module('Unit | Route | bands/band/detail', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:bands/band/detail');
    assert.ok(route);
  });
});
