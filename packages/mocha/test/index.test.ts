import 'mocha'
import Calculator from '../src'
import * as assert from 'power-assert'

describe('Calculator', () => {
  let subject: Calculator

  beforeEach(() => {
    subject = new Calculator()
  })

  describe('#add', () => {
    it('should add two numbers together', () => {
      const result: number = subject.add(2, 3)
      assert(result === 5)
    })
  })
})
