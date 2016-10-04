/*
7. Write a function which takes in an array of numbers and a max cutoff value, and returns a new array with elements limited by the cutoff value.
[1,2,3,4,5,6,7,8], 4 -> [1,2,3,4,4,4,4,4]
[1,5,7,3,1,5,7], 3 -> [1,3,3,3,1,3,3]
*/

function limit(arr,max){
	// For index i in length of array
	for(var i in arr){
		// If the value of array at index i is larger than the max...
		if(arr[i] > max){
			// set array at index i to max 
			arr[i] = max;
		}
	}
	// return limited array
	return arr;
}


