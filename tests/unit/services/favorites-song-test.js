import { module, test } from 'qunit';
import { setupTest } from 'training/tests/helpers';

module('Unit | Service | favorites-song', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let service = this.owner.lookup('service:favorites-song');
    assert.ok(service);
  });
});
