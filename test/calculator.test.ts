import Calculator from '../src/calculator'
import * as assert from 'power-assert'

describe('Calculator', function () {
  let subject: Calculator

  beforeEach(function () {
    subject = new Calculator()
  })

  it('should add two numbers together', function () {
    const result: number = subject.add(2, 3)
    assert(5 === result)
  })
})
