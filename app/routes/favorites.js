import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class FavoritesRoute extends Route {
  @service favoritesSong;

  model() {
    return this.favoritesSong.items;
  }
}
