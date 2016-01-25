import assert from 'power-assert'

import foo from '../src/foo'

describe('sample', () => {
  it('sample', () => {
    assert.ok(true)
  })

  it('foo', () => {
    console.log(foo)
  })
})
