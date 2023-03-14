import Route from '@ember/routing/route';

export default class BandsBandSongsRoute extends Route {
  model() {
    return this.modelFor('bands.band');
  }
}
