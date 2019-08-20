module.exports = {
  presets: [
    [
      '@vue/app',
      {
        useBuiltIns: 'entry'
      }
    ],
    [
      '@vue/babel-preset-jsx',
      {
        injectH: false
      }
    ]
  ]
}
//@vue/babel-preset-jsx vue-cli3中使用jsx http://www.likecs.com/show-60896.html
