function leapYear(year) {
	if(year < 1582){
	return 'Leap year started in 1582.'
	} else if(year % 4 !== 0){
	return false
    } else if(year % 100 === 0 && year % 400 !== 0){
    return false
    } return true
}

export default leapYear;