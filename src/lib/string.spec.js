import { commaSeparatedToArray } from './string'

describe('lib/string', () => {
  describe('commaSeparatedToArray', () => {
    // it('returns ["a", "b"] for text "a,b"', () => {
    //   const result = commaSeparatedToArray('a,b')
    //   expect(result).toEqual(['a', 'b'])
    // })
    // it('returns ["a", "b"] for text "  a , b   "', () => {
    //   const result = commaSeparatedToArray('  a , b   ')
    //   expect(result).toEqual(['a', 'b'])
    // })
    // it('returns ["a b", "c"] for text "a b, c"', () => {
    //   const result = commaSeparatedToArray('a b, c')
    //   expect(result).toEqual(['a b', 'c'])
    // })
    it('returns ["Jane", "John", "Joe"] for text "Jane, John,Joe"', () => {
      const result = commaSeparatedToArray('Jane, John,Joe')
      expect(result).toEqual(['Jane', 'Joe', 'John'])
    })
    it('returns the array in ascending alphabetical order', () => {
      const result = commaSeparatedToArray('Jerry, John, Oxana, Charles')
      expect(result).toStrictEqual(['Charles', 'Jerry', 'John', 'Oxana'])
    })

    // it.todo('contains each string only once in the resulting array')

    it('returns all items in title case ("john" -> "John")', () => {
      const result = commaSeparatedToArray('john, oxana, jerry')
      expect(result).toEqual(['Jerry', 'John', 'Oxana'])
    })
  })
})
