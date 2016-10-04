/* 
3. Write a function which takes an array of integers > 0 and returns the first integer which does not appear in that array.
[1,2,5] -> 3
[1,2,3,4,5] -> 6
[3,4,5] -> 1
*/

//Assuming the array is ordered at time supplie
function firstIntNotInArray(arr){
	// Initialize key variable to be incremented and compared to numbers of array
	var key = 1;

	for(var i in arr){
		if(arr[i] != key){
			// If array at i is not equivelent to key, the value is out of sequence and key is returned as the first number to not appear.
			return key;
		}

		// Increment key after a succsessful comparision
		key++;
	}

	// Return key after succsesfull consecutive comparision to all numbers in array as key will be 1 greater than the final value stored in array
	return key;
}