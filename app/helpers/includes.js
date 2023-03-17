import { helper } from '@ember/component/helper';

export default helper(function includes([array, item]) {
  return array.includes(item);
});
