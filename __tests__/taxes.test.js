import applyTaxes from '../katas/taxes'

describe ("applyTaxes", () => {
  describe("from 0.00 to R$ 2000.00", () => {
    test("applies no taxes and returns 'Isento'", () => {
      expect(applyTaxes(3)).toEqual('Isento')
      expect(applyTaxes(1345)).toEqual('Isento')
      expect(applyTaxes(2000.00)).toEqual('Isento')
    })
  })

  describe("from R$2.000,01 to R$ 3.000,00", () => {
    test("applies 8% in taxes", () => {
      expect(applyTaxes(2010)).toEqual('R$ 0.80')
      expect(applyTaxes(3000)).toEqual('R$ 80.00')
    })
  })

  describe("from R$3.000,01 to R$4.500,00", () => {
    test("applies 18% in taxes", () => {
      expect(applyTaxes(3001)).toEqual('R$ 80.18')
      expect(applyTaxes(4500)).toEqual('R$ 350.00')
    })
  })
  
  describe("from R$4.500,01", () => {
    test("applies 28% in taxes", () => {
      expect(applyTaxes(4501)).toEqual('R$ 350.28')
      expect(applyTaxes(4520)).toEqual('R$ 355.60')
    })
  }) 
})