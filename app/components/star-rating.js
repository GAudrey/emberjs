import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class StarRatingComponent extends Component {
  get stars() {
    const stars = [];
    // this.args permet de récup les arguments reçus de mon component
    const rating = this.args.rating;

    for (let i = 1; i <= 10; i++) {
      stars.push({
        rating: i,
        isFull: rating >= i,
      });
    }
    return stars;
  }

  @action
  setRating(selectRating) {
    if (this.args.updateSongRating) {
      this.args.updateSongRating({
        song: this.args.song,
        rating: selectRating,
      });
      return;
    }
    this.args.song.set('rating', selectRating);
    this.args.song.save();
  }
}
