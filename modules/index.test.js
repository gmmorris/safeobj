import safe, { either, Undefined } from './index'

describe('safe', function () {
  it('should make access to unknown properties safe', () => {
    const safeDarthVader = safe({
      name : 'Anakin',
      mother : {
        name : 'Shmi'
      }
    })

    function getFatherName(person) {
      return person.father.name
    }

    function getName(person) {
      return person.name
    }

    let darthVadersFather = either(getFatherName(safeDarthVader), `${getName(safeDarthVader)} has no father`)

    expect(darthVadersFather).toBe('Anakin has no father')
  })

  it('should return Undefined when an undefined property is encountered', () => {
    const safeDarthVader = safe({
      name : 'Anakin',
      mother : {
        name : 'Shmi'
      }
    })

    function getFatherName(person) {
      return person.father.name
    }

    expect(getFatherName(safeDarthVader)).toBe(Undefined)
  })
})

describe('Undefined', function () {
  it('is a proxy which returns itself on every property', () => {
    expect(Undefined.asd).toBe(Undefined)
    expect(Undefined.asd.dfg).toBe(Undefined)
    expect(Undefined.asd.dfg.zxxcv).toBe(Undefined)
  })
})

describe('either', function () {
  it('is a function which returns the first argument, unless thats an Undefined, in which case it returns the second', () => {
    expect(either('hi','there')).toBe('hi')
    expect(either(Undefined,'there')).toBe('there')
  })
})
