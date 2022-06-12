const mixin1 = {
    method1({ a = 1, b = 2 } = {}) {
        const c = { a, b };
        return { ...c };
    },
};

export { mixin1 };