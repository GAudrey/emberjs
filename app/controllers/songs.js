import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class SongsController extends Controller {
  @service favoritesSong;

  @action
  deleteSong(song) {
    if (this.favoritesSong.items.includes(song)) {
      this.favoritesSong.delete(song);
    }
    song.destroyRecord();
  }
  @action
  toggleFavorite(song) {
    if (this.favoritesSong.items.includes(song)) {
      this.favoritesSong.delete(song);
    } else {
      this.favoritesSong.add(song);
    }
  }
}
