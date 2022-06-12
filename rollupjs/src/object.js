import { mixin1 } from './mixin1';
import { anotherMixin } from './anotherMixin';

class FabricObject {
  constructor() {
    this.renderValue = 'i do nothing';
  }
  render() {
    console.log(this.renderValue);
  }
};

Object.assign(FabricObject.prototype, mixin1);
Object.assign(FabricObject.prototype, anotherMixin);

export { FabricObject };