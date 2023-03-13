import { Model, belongsTo, attr } from 'ember-cli-mirage';

export default Model.extend({
  name: attr,
  band: belongsTo('band'),
});
