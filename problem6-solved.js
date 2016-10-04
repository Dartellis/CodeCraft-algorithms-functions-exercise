/*
6. Write a function which takes in two arrays and determines if they contain the same number of the same values.
[], [] -> true
[2, 3, 4], [1, 2, 3] -> false
["a", "c", "b"], ["a", "b", "c"] -> true
[1, 1, 1], [1, 1, 1, 1] -> false
*/


// sameNumOfInstances function takes in two arrays and determines if they contain the same number of the same values
function sameNumOfInstances(arr1,arr2){
	// If array lengths are equivelent, continue comparision. Otherwise return false
	if(arr1.length == arr2.length){
		// Initialize object to store key value pairs
		var instances = {};
		// For index i in length of arr1 
		for(var i in arr1){
			// Check if instances of values of arr1 at index i exist
			if(!instances.hasOwnProperty(arr1[i])){
				// If an instance dosn't exist, initialize instance of value as 1
				instances[arr1[i]] = 1;
			}else{
				// If an instance dose exist. Add 1 to its value
				instances[arr1[i]]++;
			}

			// Check if instances of values of arr2 at index i exist
			if(!instances.hasOwnProperty(arr2[i])){
				// If an instance dosn't exist, initialize instance of value as -1
				instances[arr2[i]] = -1;
			}else{
				// If an instance dose exist. Subtract 1 from its value
				instances[arr2[i]]--;
			}
		}

		// If any values are not 0 than there arn't an equivelent number of instances among areas... 
		// because the alteration of the values of instance cancle eachother out
		for(var value in instances){
			if(instances[value]){
				return false; 
			}
		}

		// If all values of instance are 0, the arrays' values have an equivelent number of instances 
		return true;

	}else{
		return false;
	}
}

