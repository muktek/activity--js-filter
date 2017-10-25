# Filter

### Explanation
You will need to use the `.filter()` Array method to complete these exercises.


### Setup
```sh
# (1) cd into warmup folder and make directory
cd ~/Documents/muktek/warmups
mkdir js-filter
cd js-filter

# (2) curl and unzip the install files
curl https://raw.githubusercontent.com/muktek/activity--js-filter/master/warmup-files.zip > warmup-files.zip

unzip warmup-files.zip

#(3) Complete the exercises in the .js files!
```

### Reminder
The filter method is executed on an array and returns a limited set of the original array.

It accepts a function as an argument.

The function-argument that you pass to `.filter()` will be executed on each element in the array.

Inside the function-argument, you will need to return the boolean `true` or `false`. If the value returned is `true` then the value from the original array is added to the returned array. If the value returned is `false` then the value from the original array is not added to the returned array.


```js
let originalArray = ['wow', 'cool', 'superb', 'hello', 'hi']

let filteredArray = originalArray.filter(function(arrayElement, index, originalArray){
   if(arrayElement.length < 5){
     return true
   } else {
     return false
   }
})

originalArray //=> ['wow', 'cool', 'superb', 'hello', 'hi']
someNewArray //=> ['wow', 'cool', 'hi']
```
