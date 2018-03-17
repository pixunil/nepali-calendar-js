var j = require('./index')
  , n = 1000000,
  nepCal = require('./nepali-calendar');

console.log('Benchmarking, %s times', n)

console.time('toGregorian')
toGregorianBench()
console.timeEnd('toGregorian')

console.time('toNepali')
toNepaliBench()
console.timeEnd('toNepali')

console.time('isLeapNepaliYear')
isLeapNepaliYearBench()
console.timeEnd('isLeapNepaliYear')

console.time('isValidNepaliDate')
isValidNepaliDateBench()
console.timeEnd('isValidNepaliDate')

function toGregorianBench() {
  var count = n
    , f = j.toGregorian
  while (true)
    for (var y = nepCal.startYear; y <= nepCal.endYear; y += 1)
      for (var m = 1; m <= 12; m += 1)
        for (var d = 1; d <= 32; d += 1) {
          f(y, m, d)
          if (--count === 0) return
        }
}

function toNepaliBench() {
  var count = n
    , f = j.toNepali
  while (true)
    for (var y = 1944; y <= 2032; y += 1)
      for (var m = 1; m <= 12; m += 1)
        for (var d = 1; d <= 30; d += 1) {
          f(y, m, d)
          if (--count === 0) return
        }
}

function isLeapNepaliYearBench() {
  var count = n
    , f = j.isLeapNepaliYear
  while (true)
    for (var y = nepCal.startYear; y <= nepCal.endYear; y += 1) {
      f(y)
      if (--count === 0) return
    }
}

function isValidNepaliDateBench() {
  var count = n
    , f = j.isValidNepaliDate
  while (true)
    for (var y = 1; y <= 2090; y += 1)
      for (var m = 1; m <= 13; m += 1)
        for (var d = 1; d <= 32; d += 1) {
          f(y, m, d)
          if (--count === 0) return
        }
}
