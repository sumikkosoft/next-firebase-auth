const path = require('path') // eslint-disable-line no-undef

module.exports = {
  env: {
    QIITA_TOKEN: process.env.QIITA_TOKEN
  },
  webpack(config) {
    config.resolve.alias['@'] = path.join(__dirname, 'src')
    return config
  }
}
