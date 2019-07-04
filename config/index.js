const path = require('path')
const config = {
  projectName: 'demo',
  date: '2019-06-26',
  designWidth: 750,
  deviceRatio: {
    '640': 2.34 / 2,
    '750': 1,
    '828': 1.81 / 2
  },
  sourceRoot: 'src',
  outputRoot: '',
  plugins: {
    babel: {
      sourceMap: true,
      presets: [
        'env'
      ],
      plugins: [
        'transform-decorators-legacy',
        'transform-class-properties',
        'transform-object-rest-spread'
      ]
    },
    sass: {
      importer: function(url) {
        const reg = /^@styles\/(.*)/
        return {
          file: reg.test(url) ? path.resolve(__dirname, '..', 'src/public/style', url.match(reg)[1]) : url
        }
      }
    }
  },
  alias: {
    '@/src': path.resolve(__dirname, '..', 'src'),
    '@/style': path.resolve(__dirname, '..', 'src/public/style')
  },
  defineConstants: {
  },
  copy: {
    patterns: [
    ],
    options: {
    }
  },
  weapp: {
    module: {
      postcss: {
        autoprefixer: {
          enable: true,
          config: {
            browsers: [
              'last 3 versions',
              'Android >= 4.1',
              'ios >= 8'
            ]
          }
        },
        pxtransform: {
          enable: true,
          config: {

          }
        },
        url: {
          enable: true,
          config: {
            limit: 10240 // 设定转换尺寸上限
          }
        }
      }
    }
  },
  h5: {
    publicPath: '/',
    staticDirectory: 'static',
    module: {
      postcss: {
        autoprefixer: {
          enable: true
        }
      }
    }
  }
}

module.exports = function (merge) {
  const env = process.env.NODE_ENV.split('-')
  config.outputRoot = env.length > 1 ? "dist_" + env[0] : "dist_local/alipay"
  return merge({}, config, require('./' + env[0]))
}
