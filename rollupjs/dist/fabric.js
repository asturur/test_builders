(function (exports) {
  'use strict';

  const mixin1 = {
    method1({
      a = 1,
      b = 2
    } = {}) {
      const c = {
        a,
        b
      };
      {
        console.warn('SOME BAD MESSAGE');
      }
      return { ...c
      };
    },

    ...{
      svgExport: () => 'svg_export'
    }
  };
  {
    mixin1.svgExport2 = () => 'svg_export2';
  }
  const anotherMixin = {
    method2({
      a = 1,
      b = 2
    } = {}) {
      const [_b, _a] = [a, b];
      return _a ** _b;
    },

    ...{
      svgExport: () => 'svg_export'
    }
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

  class Rect extends FabricObject {
    constructor() {
      this.renderValue = 'i am a rect';
    } // override


    render() {
      super.render();
      console.log('internal impl');
    }

  }

  class Circle extends FabricObject {
    constructor() {
      this.renderValue = 'i am a circle';
    } // override


    render() {
      super.render();
      console.log('internal impl');
    }

  }

  const svgParser = {
    much: 'code'
  };
  const fabric = {
    Rect,
    Circle,
    ...svgParser,
    version: 6.23123
  };
  exports.fabric = fabric;
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  return exports;
})({});
