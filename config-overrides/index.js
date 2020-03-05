const { override, addLessLoader } = require('customize-cra')

module.exports = {
  webpack: override(
    addLessLoader({
      sourceMap: true,
      modules: true,
    })
  )
}
