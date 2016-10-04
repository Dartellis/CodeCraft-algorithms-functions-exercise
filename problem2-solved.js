/* 
2. Write a funciton which, given a year as a number, returns whether that number is a leap year.

2000 -> true  
1900 -> false
2016 -> true

*/

function isLeapYear(year){

	// Acording to google, 1752 was the first leap year.
	// Since leap years happen every 4 years after that point ... 
	// I can use its remainder after dividing by 4 to determin if its a leap year.

	if(year >= 1752){
		if((year-1752)%4 == 0){
			return true;
		}else{
			return false;
		}
	}else{
		return false;
	}

}