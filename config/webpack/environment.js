const { environment } = require('@rails/webpacker')

//console.log(environment)

const custom = { resolve: {
                      alias: {
                      'vue$': 'vue/dist/vue.esm.js', // 'vue/dist/vue.common.js' for webpack 1
                         //vue: 'vue/dist/vue.js',
                      }
                  }
                }

environment.config.merge(custom)

module.exports = environment
