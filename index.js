import countries from './countries.json'

const sortedCountries = Object.keys(countries).map(function (ccode) {
  return {
    ccode: ccode,
    cname: countries[ccode]
  }
}).sort(function (a, b) {
  if ( a.cname < b.cname ) return -1
  if ( a.cname > b.cname ) return 1
  return 0
})

exports.sortedCountries = sortedCountries;
