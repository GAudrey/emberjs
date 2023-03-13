import { Factory } from 'ember-cli-mirage';
import faker from 'Faker';

export default Factory.extend({
  title() {
    return faker.Name.firstName();
  },

  rating() {
    return Math.round(Math.random() * 10);
  },
});
