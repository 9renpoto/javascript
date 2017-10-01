import 'mocha'
import { browser } from 'protractor'
import { expect } from 'chai'

describe('protractor', () => {
  beforeEach(() => {
    browser.url('http://opapy.ch')
  })

  it('should have the right title - the fancy generator way', () => {
    expect(browser.getTitle()).to.be.equal('Opapy of Legends')
  })
})
