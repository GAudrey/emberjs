import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class SongsRoute extends Route {
  @service store;

  model() {
    return this.store.findAll('song', { include: 'band' });
  }
}
