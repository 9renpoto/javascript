import Calculator from '../src/calculator'
import * as assert from 'power-assert'

describe('Calculator', () => {
  let subject: Calculator

  beforeEach(function() {
    subject = new Calculator()
  })

  describe('#add', () => {
    it('should add two numbers together', () => {
      let result: number = subject.add(2, 3)
      assert(5 === result)
    })
  })
})
