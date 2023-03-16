import Model, { attr, hasMany } from '@ember-data/model';

export default class BandModel extends Model {
  @attr('string') name;
  @attr('string') description;
  @hasMany('song') songs;
}
