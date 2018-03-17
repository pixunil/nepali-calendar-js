# Nepali JavaScript

A few javascript functions for converting Vikram Samvat / Nepali and Gregorian calendar systems to each other.

## About

Vikram Samvat (Hindi: विक्रम सम्वत्, Nepali: विक्रम सम्वत्) (abbreviated as V.S. (or VS) or B.S. (or BS)); About this sound Listen (help·info))is the historical Hindu calendar of India and Nepal. It uses lunar months and solar sidereal year (see: Vedic time keeping). It is used as the official calendar in Nepal. [Read more on Wikipedia](https://en.wikipedia.org/wiki/Vikram_Samvat).

Calendar conversion is based on the data in nepali-calendar.json file

## Install

### Node.js

Use [`npm`](https://npmjs.org) to install:

```sh
$ npm install --save nepali-js
```

Then import it:

```js
var nepali = require('nepali-js')
```


### Browser

Use [`component`](https://github.com/component/component) to install:

```sh
$ component install nepali/nepali-js
```

Then import it:

```js
var nepali = require('nepali-js')
```

## API

### toNepali(gy, gm, gd)

Converts a Gregorian date to Nepali.

```js
nepali.toNepali(2016, 4, 11) // { jy: 1395, jm: 1, jd: 23 }
```

### toNepali(date)

Converts a JavaScript Date object to Nepali.

```js
nepali.toNepali(new Date(2016, 3, 11)) // { jy: 1395, jm: 1, jd: 23 }
```

### toGregorian(jy, jm, jd)

Converts a Nepali date to Gregorian.

```js
nepali.toGregorian(1395, 1, 23) // { gy: 2016, gm: 4, gd: 11 }
```

### isValidNepaliDate(jy, jm, jd)

Checks whether a Nepali date is valid or not.

```js
nepali.isValidNepaliDate(1394, 12, 30) // false
nepali.isValidNepaliDate(1395, 12, 30) // true
```

### isLeapNepaliYear(jy)

Is this a leap year or not?

```js
nepali.isLeapNepaliYear(1394) // false
nepali.isLeapNepaliYear(1395) // true
```

### nepaliMonthLength(jy, jm)

Number of days in a given month in a Nepali year.

```js
nepali.nepaliMonthLength(1394, 12) // 29
nepali.nepaliMonthLength(1395, 12) // 30
```


### j2d(jy, jm, jd)

Converts a date of the Nepali calendar to the Julian Day number.

```js
nepali.j2d(1395, 1, 23) // 2457490
```

### d2j(jdn)

Converts the Julian Day number to a date in the Nepali calendar.

```js
nepali.d2j(2457490) // { jy: 1395, jm: 1, jd: 23 }
```

### g2d(gy, gm, gd)

Calculates the Julian Day number from Gregorian or Julian calendar dates. This integer number corresponds to the noon of the date (i.e. 12 hours of Universal Time). The procedure was tested to be good since 1 March, -100100 (of both calendars) up to a few million years into the future.

```js
nepali.g2d(2016, 4, 11) // 2457490
```

### d2g(jdn)

Calculates Gregorian and Julian calendar dates from the Julian Day number (jdn) for the period since jdn=-34839655 (i.e. the year -100100 of both calendars) to some millions years ahead of the present.

```js
nepali.d2g(2457490) // { gy: 2016, gm: 4, gd: 11 }
```

## License

MIT
