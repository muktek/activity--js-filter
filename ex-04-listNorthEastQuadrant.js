
/**
 * Use `.filter()` to filter  countries in the top,right quadrant of the globe.
 *
 *   The data is already stored as an array in a var called `countriesDataList`
 *
 *   The output of the filter method should go into an array called
 *   `northEastQuadrantList`
 *
 *   Hint: look at the values for lat long to solve this question.
 *         and read :
 *         https://stackoverflow.com/questions/4536996/positive-negative-latitude-and-longitude-values-vs-cardinal-directions
**/




// -----  TEST Assertions ------
console.assert(typeof northEastQuadrantList !== 'undefined')
console.assert(Array.isArray(northEastQuadrantList)=== true)
console.assert(northEastQuadrantList.length === 118)
