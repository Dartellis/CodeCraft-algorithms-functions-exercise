/*
4. Write a function which takes an array of integers and returns an array with any duplicate integers removed.
[1,1,2,3,1,2,3] -> [1,2,3]
[1,4,4,4,2,2,4,4,4] -> [1,4,2]
*/

function withoutDuplicates(arr){
	// Initialize new array to store provided array without duplicates 
	var newArr = [];

	// Initialize boolean variable monitor wether a value is new or already exists
	var newValue = true;

	// For value n of provided array arr...
	for(var n of arr){
		// This value is new until proven otherwise
		newValue = true;

		// Compare every value c of new array to n, the current value of arr
		for(var c of newArr){
			if(c === n){
				// If a value in newArray is equivelent to a value in provided array, it is not a new value
				newValue = false;
			}
		}

		// If the number is a new value, add it to the new array 
		if(newNumber){
			newArr.push(n);
		}
	}

	return newArr;
}