// eslint-disable-next-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions
import Locale from 'lib/util/locale'

describe('browserLocale', () => {
  it('returns the navigator language if a navigator is explicity passed', () => {
    const navigator = { language: 'de' }
    expect(Locale.browserLocale(navigator)).to.equal('de')
  })

  it('returns the browser locale if no navigator is passed, or "en" if no browser locale is set', () => {
    const expectedLanguage = navigator ? navigator.language : 'en'
    expect(Locale.browserLocale()).to.equal(expectedLanguage)
  })
})
