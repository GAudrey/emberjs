import Route from '@ember/routing/route';

export default class BandsBandDetailRoute extends Route {
  model() {
    return this.modelFor('bands.band');
  }
}
