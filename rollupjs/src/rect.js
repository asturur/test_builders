import { FabricObject } from "./object";

class Rect extends FabricObject {
    constructor() {
        this.renderValue = 'i am a rect';
    }
    // override
    render() {
        super.render();
        console.log('internal impl');
    }
}

export { Rect };