import { Model, hasMany, attr } from 'ember-cli-mirage';

export default Model.extend({
  name: attr,
  songs: hasMany('song'),
});
