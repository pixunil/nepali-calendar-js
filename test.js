require('should')
var n = require('./index')

describe('toNepali', function () {
  it('should convert Gregorian to Nepali correctly', function () {
    n.toNepali(1943, 4, 14).should.be.eql({ny: 2000, nm: 1, nd: 1})
    n.toNepali(1953, 5, 1).should.be.eql({ny: 2010, nm: 1, nd: 19})
    n.toNepali(1995, 3, 11).should.be.eql({ny: 2051, nm: 11, nd: 27})
  })

  it('should convert Date object to Nepali', function () {
    n.toNepali(new Date(1943, 4 - 1, 14)).should.be.eql({ny: 2000, nm: 1, nd: 1})
    n.toNepali(new Date(1953, 5 - 1, 1)).should.be.eql({ny: 2010, nm: 1, nd: 19})
    n.toNepali(new Date(1995, 3 - 1, 11)).should.be.eql({ny: 2051, nm: 11, nd: 27})
  })
})

describe('toGregorian', function () {
  it('should convert Nepali to Gregorian correctly', function () {
    n.toGregorian(2000, 1, 1).should.be.eql({gy: 1943, gm: 4, gd: 14})
    n.toGregorian(2010, 1, 19).should.be.eql({gy: 1953, gm: 5, gd: 1})
    n.toGregorian(2051, 11, 27).should.be.eql({gy: 1995, gm: 3, gd: 11})
  })
})

describe('isValidNepaliDate', function () {
  it('should check validity of a Nepali date', function () {
    n.isValidNepaliDate(2000, 1, 32).should.be.false
    n.isValidNepaliDate(2090, 12,32).should.be.false
    n.isValidNepaliDate(2000, 1, 1).should.be.true
    n.isValidNepaliDate(2051, 12, 19).should.be.false
  })
})

describe('isLeapNepaliYear', function () {
  it('should check if a Nepali year is leap or common', function () {
    n.isLeapNepaliYear(2000).should.be.false
    n.isLeapNepaliYear(2008).should.be.false
    n.isLeapNepaliYear(2003).should.be.true
    n.isLeapNepaliYear(2019).should.be.true
  })
})

describe('nepaliMonthLength', function () {
  it('should return number of days in a given Nepali year and month', function () {
    n.nepaliMonthLength(2000, 1).should.be.exactly(30)
    n.nepaliMonthLength(2010, 4).should.be.exactly(32)
  })
})

console.log(n.toGregorian(new Date(2200, 3 - 1, 11)))