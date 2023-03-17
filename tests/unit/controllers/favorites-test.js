import { module, test } from 'qunit';
import { setupTest } from 'training/tests/helpers';

module('Unit | Controller | favorites', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let controller = this.owner.lookup('controller:favorites');
    assert.ok(controller);
  });
});
