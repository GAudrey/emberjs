import { Factory } from 'ember-cli-mirage';
import faker from 'Faker';

export default Factory.extend({
  name() {
    return faker.Name.firstName();
  },
  description() {
    return faker.Lorem.sentences(3);
  },
});
