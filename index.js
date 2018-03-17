/*
  Expose functions.
*/
module.exports =
  { toNepali: toNepali
  , toGregorian: toGregorian
  , isValidNepaliDate: isValidNepaliDate
  , isLeapNepaliYear: isLeapNepaliYear
  , nepaliMonthLength: nepaliMonthLength
  , n2d: n2d
  , d2n: d2n
  , g2d: g2d
  , d2g: d2g
  }

var nepCal = require('./nepali-calendar');
/*
  Converts a Gregorian date to Nepali.
*/
function toNepali(gy, gm, gd) {
  if (Object.prototype.toString.call(gy) === '[object Date]') {
    gd = gy.getDate()
    gm = gy.getMonth() + 1
    gy = gy.getFullYear()
  }
  return d2n(g2d(gy, gm, gd))
}

/*
  Converts a Nepali date to Gregorian.
*/
function toGregorian(ny, nm, nd) {
  return d2g(n2d(ny, nm, nd))
}

/*
  Checks whether a Nepali date is valid or not.
*/
function isValidNepaliDate(ny, nm, nd) {
  return  ny >= 2000 && ny <= 2099 &&
          nm >= 1 && nm <= 12 &&
          nd >= 1 && nd <= nepaliMonthLength(ny, nm)
}

/*
  Is this a leap year or not?
*/
function isLeapNepaliYear(ny) {
  return (nepCal.leapYears.indexOf(ny)!=-1);
}

/*
  Number of days in a given month in a Nepali year.
*/
function nepaliMonthLength(ny, nm) {
  return nepCal[ny][nm-1];
}

/*
  Converts a date of the Nepali calendar to the Julian Day number.

  @param ny Nepali year (1 to 3100)
  @param nm Nepali month (1 to 12)
  @param nd Nepali day (1 to 29/31)
  @return Julian Day number
*/
function n2d(ny, nm, nd) {
  i=ly=nepCal.startYear;
  d=nepCal.startJulianDay-1;
  ly=nepCal.leapYears[0];
  for(j=1;j<nepCal.leapYears.length;j++){
    if(ly>ny) break;
    d+=(ly-i)*365;
    d+=366;
    i=ly+1;
    ly=nepCal.leapYears[j]
  }
  if(ny-i > 1) d+=(ny-i)*365;
  for(i=1;i<nm;i++){
    d+=nepCal[ny][i-1];
  }
  d+=nd;
  return d;
}
/*
  Converts the Julian Day number to a date in the Nepali calendar.

  @param jdn Julian Day number
  @return
    ny: Nepali year (1 to 3100)
    nm: Nepali month (1 to 12)
    nd: Nepali day (1 to 29/31)
*/
function d2n(jdn) {
  jdn=jdn-nepCal.startJulianDay-1+2;
  ny=ly=nepCal.startYear;
  d=td=jdn;
  for(i=0;i<nepCal.leapYears.length;i++){
    td-= (nepCal.leapYears[i]-ny)*365;
    td-= 366;
    if(td<0) break;
    d=td;
    ny = nepCal.leapYears[i]+1;
  }
  while(d > 365){
    d-=365;
    ny++;
  }
  for(nm=1;nm<12;nm++){
    if(d>nepCal[ny][nm])
      d-=nepCal[ny][nm-1];
    else
      break;
  }
  nd=d;

  return  { ny: ny
          , nm: nm
          , nd: nd
          }
}
/*
  Calculates the Julian Day number from Gregorian or Julian
  calendar dates. This integer number corresponds to the noon of
  the date (i.e. 12 hours of Universal Time).
  The procedure was tested to be good since 1 March, -100100 (of both
  calendars) up to a few million years into the future.

  @param gy Calendar year (years BC numbered 0, -1, -2, ...)
  @param gm Calendar month (1 to 12)
  @param gd Calendar day of the month (1 to 28/29/30/31)
  @return Julian Day number
*/
function g2d(gy, gm, gd) {
  var d = div((gy + div(gm - 8, 6) + 100100) * 1461, 4)
      + div(153 * mod(gm + 9, 12) + 2, 5)
      + gd - 34840408
  d = d - div(div(gy + 100100 + div(gm - 8, 6), 100) * 3, 4) + 752
  return d;
}

/*
  Calculates Gregorian and Julian calendar dates from the Julian Day number
  (jdn) for the period since jdn=-34839655 (i.e. the year -100100 of both
  calendars) to some millions years ahead of the present.

  @param jdn Julian Day number
  @return
    gy: Calendar year (years BC numbered 0, -1, -2, ...)
    gm: Calendar month (1 to 12)
    gd: Calendar day of the month M (1 to 28/29/30/31)
*/
function d2g(jdn) {
  var j
    , i
    , gd
    , gm
    , gy
  j = 4 * jdn + 139361631
  j = j + div(div(4 * jdn + 183187720, 146097) * 3, 4) * 4 - 3908
  i = div(mod(j, 1461), 4) * 5 + 308
  gd = div(mod(i, 153), 5) + 1
  gm = mod(div(i, 153), 12) + 1
  gy = div(j, 1461) - 100100 + div(8 - gm, 6)
  return  { gy: gy
          , gm: gm
          , gd: gd
          }
}

/*
  Utility helper functions.
*/

function div(a, b) {
  return ~~(a / b)
}

function mod(a, b) {
  return a - ~~(a / b) * b
}
