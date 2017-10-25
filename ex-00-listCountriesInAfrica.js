/**
 * Use `.filter()` to filter all of the country objects that are in Africa
 *
 *   The data is already stored as an array in a variable called `countriesDataList`
 *
 *   The output of the .filter method should go into an array called
 *   `countriesInAfricaList`
**/

var countriesInAfricaList = countriesDataList.filter(function(countryObj){
  if(countryObj.region === 'Africa'){
    return true
  } else {
    return false
  }
})

// console.log(countriesInAfricaList)

// -----  TEST Assertions ------
console.assert(typeof countriesInAfricaList !== 'undefined')
console.assert(Array.isArray(countriesInAfricaList)=== true)
console.assert(countriesInAfricaList.length === 60)
