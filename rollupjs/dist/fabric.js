(function (exports) {
    'use strict';

    const mixin1 = {
        method1({ a = 1, b = 2 } = {}) {
            const c = { a, b };
            return { ...c };
        },
    };

    const anotherMixin = {
        method2({ a = 1, b = 2 } = {}) {
            const [_b, _a] = [a, b];
            return _a ** _b;
        },
    };

    class FabricObject {
      constructor() {
        this.renderValue = 'i do nothing';
      }
      render() {
        console.log(this.renderValue);
      }
    }
    Object.assign(FabricObject.prototype, mixin1);
    Object.assign(FabricObject.prototype, anotherMixin);

    const fabric = {
      FabricObject,
      version: 6.23123,
    };

    exports.fabric = fabric;

    Object.defineProperty(exports, '__esModule', { value: true });

    return exports;

})({});
