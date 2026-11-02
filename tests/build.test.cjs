const test = require('node:test')
const assert = require('node:assert/strict')
const fs = require('node:fs')
const vm = require('node:vm')
const path = require('node:path')
const source = fs.readFileSync(path.join(__dirname, '../template/build/build.js'), 'utf8')

function run(hasErrors) {
  const messages = []
  const process = { env: {}, stdout: { write() {} }, exitCode: undefined }
  const dependencies = {
    './check-versions': () => {},
    ora: () => ({ start() {}, stop() {} }),
    rimraf: (_, callback) => callback(null),
    path,
    chalk: { cyan: x => x, yellow: x => x, red: x => x },
    webpack: (_, callback) => callback(null, { hasErrors: () => hasErrors, toString: () => '' }),
    '../config': { build: { assetsRoot: '/tmp/build-test', assetsSubDirectory: 'static' } },
    './webpack.prod.conf': {}
  }
  vm.runInNewContext(source, { require: name => dependencies[name], process, console: { log: x => messages.push(x) } })
  return { process, messages }
}
test('compilation errors fail the build rather than report success', () => {
  const { process, messages } = run(true)
  assert.equal(process.exitCode, 1)
  assert.ok(!messages.some(x => x.includes('Build complete')))
})
test('successful compilations still report completion', () => {
  const { process, messages } = run(false)
  assert.equal(process.exitCode, undefined)
  assert.ok(messages.some(x => x.includes('Build complete')))
})
