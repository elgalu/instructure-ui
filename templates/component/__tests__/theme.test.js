import ${COMPONENT} from '../index'
import { contrast } from '../../../util/color'

describe('${COMPONENT}.theme', () => {
  describe('with the default theme', () => {
    const variables = ${COMPONENT}.generateTheme()

    it('should have a background and text colors that meet 3:1 contrast', () => {
      expect(contrast(variables.background, variables.color)).to.be.above(3)
    })
  })

  describe('with the accessible canvas theme', () => {
    const variables = ${COMPONENT}.generateTheme('canvas-a11y')

    it('should have a background and text colors that meet 4.5:1 contrast', () => {
      expect(contrast(variables.background, variables.color)).to.be.above(4.5)
    })
  })
})
