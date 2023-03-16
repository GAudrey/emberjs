import { Model, hasMany, attr } from 'ember-cli-mirage';

export default Model.extend({
  name: attr,
  description: attr,
  songs: hasMany('song'),
});
