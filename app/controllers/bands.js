import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action, computed } from '@ember/object';
import { inject as service } from '@ember/service';

export default class BandsController extends Controller {
  @service store;

  @tracked isAddingBand = false;
  @tracked selectBand = {
    name: '',
  };

  @computed('selectBand.name.length')
  get isAddButtonDisabled() {
    return this.selectBand.name.length < 3;
  }

  @action
  addingBand() {
    this.isAddingBand = true;
  }
  @action
  async addBand(e) {
    e.preventDefault();
    this.isAddingBand = false;
    let record = this.store.createRecord('band', this.selectBand);
    await record.save();

    this.selectBand = {
      name: '',
    };
  }
  @action
  cancelBand() {
    this.isAddingBand = false;
  }
}
