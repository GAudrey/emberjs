/* eslint-disable ember/no-computed-properties-in-native-classes */
import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action, computed } from '@ember/object';
import { inject as service } from '@ember/service';

export default class BandsBandSongsController extends Controller {
  @service store;

  @tracked isAddingSong = false;
  @tracked selectSong = {
    title: '',
  };

  @computed('selectSong.title.length')
  get isAddingButtonDisabled() {
    return this.selectSong.title.length < 3;
  }

  @action
  addingSong() {
    this.isAddingSong = true;
  }
  @action
  async addSong(e) {
    e.preventDefault();
    this.isAddingSong = false;
    let record = this.store.createRecord('song', {
      ...this.selectSong,
      rating: 0,
      band: this.model,
    });
    await record.save();

    this.selectSong = {
      title: '',
    };
  }
  @action
  cancelSong() {
    this.addingSong = false;
  }
  @action
  updateSongRating(params) {
    const { song, rating } = params;
    song.set('rating', rating);
    song.save();
  }
}
