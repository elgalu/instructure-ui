import React from 'react'
import ToggleFacade from '../index'

describe('<ToggleFacade />', function () {
  const testbed = createTestbed(<ToggleFacade />)

  /* example test (replace me) */
  it('should render', function () {
    const subject = testbed.render(/* override default props here */)

    expect(subject.dom()).to.exist
  })

  it('should have tests')

  it('should meet a11y standards', function (done) {
    const subject = testbed.render()

    subject.should.be.accessible(done, {
      ignores: [  /* add a11y standards rules to ignore here (https://dequeuniversity.com/rules/axe) */ ]
    })
  })
})