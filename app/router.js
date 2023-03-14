import EmberRouter from '@ember/routing/router';
import config from 'training/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('bands', function () {
    this.route('band', { path: ':band_id' }, function () {
      this.route('songs');
    });
  });
  this.route('songs');
});
