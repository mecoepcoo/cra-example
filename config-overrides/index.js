const { override, addLessLoader, adjustStyleLoaders, addPostcssPlugins } = require('customize-cra')

module.exports = {
  webpack: override(
    addLessLoader({
      sourceMap: true,
      modules: true,
    }),
    addPostcssPlugins(
      [
        require('postcss-aspect-ratio-mini')(),
        require('postcss-write-svg')({ utf8: false }),
        require('postcss-px-to-viewport')({
          unitToConvert: 'px',
          viewportWidth: 1080,
          unitPrecision: 5,
          viewportUnit: 'vmin',
          fontViewportUnit: 'vmin',
          selectorBlackList: ['.ignore', '.hairlines'],
          minPixelValue: 1,
          mediaQuery: false,
          replace: true,
          exclude: [],
          landscape: false,
          landscapeUnit: 'vmin',
          landscapeWidth: 375
        }),
        require('cssnano')({
          preset: 'advanced',
          autoprefixer: true,
          'postcss-zindex': false,
        })
      ]
    ),
    adjustStyleLoaders(({ use: [ , css, postcss, resolve, processor] }) => {
      css.options.sourceMap = true
      postcss.options.sourceMap = true
    })
  )
}
