const del = require('del')

module.exports = async function cleanOutDir(bundler) {
  return await del(bundler.options.outDir)
}
