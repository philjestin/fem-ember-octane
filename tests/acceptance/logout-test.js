import { module, test } from 'qunit';
import { visit, currentURL, click } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import MockAuthService from '../stubs/auth.service';

module('Acceptance | logging out', function(hooks) {
  setupApplicationTest(hooks);

  hooks.beforeEach(function() {
    this.owner.register('service:auth', MockAuthService);
  });

  test('Visiting /teams and clicking "Logout"', async function(assert) {
    this.owner.lookup('service:auth').currentUserId = '1';

    // Go to the /teams urls
    await visit('/teams');
    assert.equal(currentURL(), '/teams');

    // Click logout button
    await click('.team-sidebar__logout-button');
    assert.equal(currentURL(), '/login');
  });
});
