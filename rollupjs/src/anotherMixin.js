const anotherMixin = {
    method2({ a = 1, b = 2 } = {}) {
        const [_b, _a] = [a, b];
        return _a ** _b;
    },
};

export { anotherMixin };