import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class BandsBandRoute extends Route {
  @service store;

  model(params) {
    return this.store.findRecord('band', params.band_id, { include: 'songs' });
  }
}
