export default {
    input: 'index.js',
    output: [
        {
            format: 'umd',
            name: 'PrimevueMandatory',
            file: 'dist/primevue-mandatory.js'
        },
        {
            format: 'esm',
            file: 'dist/primevue-mandatory.esm.js'
        }
    ]
}