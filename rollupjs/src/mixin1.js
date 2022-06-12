const mixin1 = {
    method1({ a = 1, b = 2 } = {}) {
        const c = { a, b };
        if (process.env.NODE_ENV !== 'production') {
            console.warn('SOME BAD MESSAGE');
        }
        return { ...c };
    },
    ...(process.env.WITH_SVG_EXPORT ? {
        svgExport: () => 'svg_export'
    } : {}),
};

if (process.env.WITH_SVG_EXPORT) {
    mixin1.svgExport2 = () => 'svg_export2'
}

export { mixin1 };