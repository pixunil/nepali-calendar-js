# Nepali Calendar JavaScript

A few javascript functions for converting Vikram Samvat / Nepali and Gregorian calendar systems to each other.

## About

Vikram Samvat (Hindi: विक्रम सम्वत्, Nepali: विक्रम सम्वत्) (abbreviated as V.S. (or VS) or B.S. (or BS)) is the historical Hindu calendar of India and Nepal. It uses lunar months and solar sidereal year (see: Vedic time keeping). It is used as the official calendar in Nepal. [Read more on Wikipedia](https://en.wikipedia.org/wiki/Vikram_Samvat).

Calendar conversion is based on the data in nepali-calendar.json file

## Limitations
Calendar range from 2000 BS to 2090 BS

## Future Enhancement
 
1. Add more tests
2. Adding support for more years
3. Removing the json file and automating calendar conversions using some algorithm. Currently exploring : www.cc.kyoto-su.ac.jp/~yanom/sanskrit/pancanga/ for this purpose.

## Request to other developers

Please send your pull requests in so that this library can become better and more useful.

## Install

### Node.js

Use [`npm`](https://npmjs.org) to install:

```sh
$ npm install --save nepali-calendar-js
```

Then import it:

```js
var nepali = require('nepali-calendar-js')
```


### Browser

Use [`component`](https://github.com/component/component) to install:

```sh
$ component install nepali/nepali-calendar-js
```

Then import it:

```js
var nepali = require('nepali-calendar-js')
```

## API

### toNepali(gy, gm, gd)

Converts a Gregorian date to Nepali.

```js
nepali.toNepali(1943,4, 14) // { ny: 2000, nm: 1, nd: 1 }
```

### toNepali(date)

Converts a JavaScript Date object to Nepali.

```js
nepali.toNepali(new Date(1995, 3, 11)) // { ny: 2051, nm: 11, nd: 27 }
```

### toGregorian(ny, nm, nd)

Converts a Nepali date to Gregorian.

```js
nepali.toGregorian(2010, 1, 19) // { gy: 1953, gm: 5, gd: 1 }
```

### isValidNepaliDate(ny, nm, nd)

Checks whether a Nepali date is valid or not.

```js
nepali.isValidNepaliDate(2000, 1, 32) // false
nepali.isValidNepaliDate(2050, 12, 19) // true
```

### isLeapNepaliYear(ny)

Is this a leap year or not?

```js
nepali.isLeapNepaliYear(2008) // false
nepali.isLeapNepaliYear(2019) // true
```

### nepaliMonthLength(ny, nm)

Number of days in a given month in a Nepali year.

```js
nepali.nepaliMonthLength(2000, 12) // 31
nepali.nepaliMonthLength(2090, 12) // 30
```


### j2d(ny, nm, nd)

Converts a date of the Nepali calendar to the Julian Day number.

```js
nepali.j2d(2010, 1, 19) // 2434499
```

### d2j(ndn)

Converts the Julian Day number to a date in the Nepali calendar.

```js
nepali.d2j(2434499) // { ny: 2010, nm: 1, nd: 19 }
```

### g2d(gy, gm, gd)

Calculates the Julian Day number from Gregorian or Julian calendar dates. This integer number corresponds to the noon of the date (i.e. 12 hours of Universal Time). The procedure was tested to be good since 1 March, -100100 (of both calendars) up to a few million years into the future.

```js
nepali.g2d(2016, 4, 11) // 2457490
```

### d2g(ndn)

Calculates Gregorian and Julian calendar dates from the Julian Day number (ndn) for the period since ndn=-34839655 (i.e. the year -100100 of both calendars) to some millions years ahead of the present.

```js
nepali.d2g(2457490) // { gy: 2016, gm: 4, gd: 11 }
```

## Acknowledgement
This project was built from the great work done by @behrang who is behind jalaali-js project.

## License

MIT
