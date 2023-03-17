import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class SongsController extends Controller {
  @action
  deleteSong(song) {
    song.destroyRecord();
  }
}
