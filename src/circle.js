import { FabricObject } from "./object";

class Circle extends FabricObject {
    constructor() {
        this.renderValue = 'i am a circle';
    }
    // override
    render() {
        super.render();
        console.log('internal impl');
    }
}

export { Circle };