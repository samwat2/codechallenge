// thought process q#1 use the [for/if] funtion at a variable stringy with a set loop of 1's and 0's..THEN call the function using ++ to continuely 
//Q1
//set the strings to be 1 and 0s
// var stringy = '[]';
// Stringy(){
// 	constructor(){
// 	this.stringy = '[]';
// 	}
// $(function(){
// 	if (this.stringy = 1) {				
// 	 	return this.stringy - '[0]';
// 	}
// 	if (this.stringy => 1) {
// 		return this.stringy++;
// 	}
// 	if (this.stringy < 0) {
// 	 	return undefined;
// 	}
// });
	// for (var i = 0; i < this.stringy.length; i++) {				//the loop
	// 	 this.stringy[i]
	// 	}		
//};

		// console.log(stringy(this.stringy[3]));
// stringy ()
// var stringy = new Stringy;
//answer;
function zerosAndOnes (count) {
	let stringThingy = '';
	for (var i = 0; i < count/2; i++) {
		stringThingy += '10';
	}
	return stringThingy;
}
console.log(zerosAndOnes(6));

//Q2

// function(){
// 	var array = [348597];
// 	for (var i = 4; i > this.array.length; i++)
// 		{this.array.length};
// 		console.log(this.array[i].length);
// };
//DEFINE AN ARRAY THEN REVERS THE FOR FUNCTION OF THE ARRAY
//turn into a string, a loop to revers and add each number then trun back into numbers.
function reverseIntoArray(int) {
	let numsAsString = int.toString(); 		//turn into string to make an array
	let newArr = [];											//will hold the reverse array
	for (var i = numsAsString.length-1; i >= 0; i--) {
		//push each string onverted to number into newArr
		newArr.push(parseInt(numsAsString[i]));
	}
	return newArr; //give back reversed array
}
console.log(reverseIntoArray(378407));
//Q3

// function(){
	// var number = 1;
	// for (var i = 0; i < number.length) {
	// 	console.log(number++[i]);
	// }
//}
//NUMBER++ TO CONTINUELY ADD THE NUMBER;
// function fibonacciCreate(fib){
// 	var number = 1;
// 	// var fib = [];
// 	for (var i = 0; i + number; (i+number)++) {
// 		return 
// 	}
// }




//Q4
//
