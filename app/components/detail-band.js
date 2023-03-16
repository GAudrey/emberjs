import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class DetailBandComponent extends Component {
  @tracked isEditing = false;

  @action
  toggleEditing() {
    this.isEditing = !this.isEditing;
  }
  @action
  saveDetail() {
    this.args.band.set('description', this.args.description);
    this.args.band.save();

    this.isEditing = false;
  }
}
