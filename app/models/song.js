import Model, { attr, belongsTo } from '@ember-data/model';

export default class SongModel extends Model {
  @attr('string') title;
  @attr('number') rating;
  @belongsTo('band') band;
}
