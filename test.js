require('should')
var j = require('./index')

describe('toNepali', function () {
  it('should convert Gregorian to Nepali correctly', function () {
    j.toNepali(1943, 1, 14).should.be.eql({jy: 2000, jm: 1, jd: 1})
    j.toNepali(1953, 5, 1).should.be.eql({jy: 2010, jm: 1, jd: 19})
    j.toNepali(1995, 3, 11).should.be.eql({jy: 2051, jm: 11, jd: 27})
  })

  it('should convert Date object to Nepali', function () {
    j.toNepali(new Date(1981, 8 - 1, 17)).should.be.eql({jy: 1360, jm: 5, jd: 26})
    j.toNepali(new Date(2013, 1 - 1, 10)).should.be.eql({jy: 1391, jm: 10, jd: 21})
    j.toNepali(new Date(2014, 8 - 1, 4)).should.be.eql({jy: 1393, jm: 5, jd: 13})
  })
})

describe('toGregorian', function () {
  it('should convert Nepali to Gregorian correctly', function () {
    j.toGregorian(1360, 5, 26).should.be.eql({gy: 1981, gm: 8, gd: 17})
    j.toGregorian(1391, 10, 21).should.be.eql({gy: 2013, gm: 1, gd: 10})
    j.toGregorian(1393, 5, 13).should.be.eql({gy: 2014, gm: 8, gd: 4})
  })
})

describe('isValidNepaliDate', function () {
  it('should check validity of a Nepali date', function () {
    j.isValidNepaliDate(-62, 12, 29).should.be.false
    j.isValidNepaliDate(-62, 12, 29).should.be.false
    j.isValidNepaliDate(-61, 1, 1).should.be.true
    j.isValidNepaliDate(3178, 1, 1).should.be.false
    j.isValidNepaliDate(3177, 12, 29).should.be.true
    j.isValidNepaliDate(1393, 0, 1).should.be.false
    j.isValidNepaliDate(1393, 13, 1).should.be.false
    j.isValidNepaliDate(1393, 1, 0).should.be.false
    j.isValidNepaliDate(1393, 1, 32).should.be.false
    j.isValidNepaliDate(1393, 1, 31).should.be.true
    j.isValidNepaliDate(1393, 11, 31).should.be.false
    j.isValidNepaliDate(1393, 11, 30).should.be.true
    j.isValidNepaliDate(1393, 12, 30).should.be.false
    j.isValidNepaliDate(1393, 12, 29).should.be.true
    j.isValidNepaliDate(1395, 12, 30).should.be.true
  })
})

describe('isLeapNepaliYear', function () {
  it('should check if a Nepali year is leap or common', function () {
    j.isLeapNepaliYear(1393).should.be.false
    j.isLeapNepaliYear(1394).should.be.false
    j.isLeapNepaliYear(1395).should.be.true
    j.isLeapNepaliYear(1396).should.be.false
  })
})

describe('nepaliMonthLength', function () {
  it('should return number of days in a given Nepali year and month', function () {
    j.nepaliMonthLength(1393, 1).should.be.exactly(31)
    j.nepaliMonthLength(1393, 4).should.be.exactly(31)
    j.nepaliMonthLength(1393, 6).should.be.exactly(31)
    j.nepaliMonthLength(1393, 7).should.be.exactly(30)
    j.nepaliMonthLength(1393, 10).should.be.exactly(30)
    j.nepaliMonthLength(1393, 12).should.be.exactly(29)
    j.nepaliMonthLength(1394, 12).should.be.exactly(29)
    j.nepaliMonthLength(1395, 12).should.be.exactly(30)
  })
})
