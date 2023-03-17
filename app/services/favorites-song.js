import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class FavoritesSongService extends Service {
  @tracked items = [];

  add(item) {
    this.items.pushObject(item);
  }
  delete(item) {
    this.items.removeObject(item);
  }
}
