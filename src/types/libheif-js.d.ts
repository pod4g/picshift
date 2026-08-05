declare module 'libheif-js'

declare module 'libheif-js/libheif-wasm/libheif-bundle.mjs' {
  const createLibheif: () => any | Promise<any>
  export default createLibheif
}
