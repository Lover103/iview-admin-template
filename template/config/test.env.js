'use strict'
const merge = require('webpack-merge')
const devEnv = require('./dev.env')

module.exports = merge(devEnv, {
  NODE_ENV: '"testing"',

  BASE_API: '"5a3251cbb0f19500bd00873d"',
})
