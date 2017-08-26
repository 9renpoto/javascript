import Calculator from '../src'

describe('Calculator', () => {
  let subject: Calculator

  beforeEach(() => {
    subject = new Calculator()
  })

  describe('#add', () => {
    it('should add two numbers together', () => {
      const result: number = subject.add(2, 3)
      expect(result).toBe(5)
    })
  })
})
