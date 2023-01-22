console.log('****** Part Supply *******');
// REQUIRED FEATURES

// 1. Create a variable called 'partsNeeded' with a value of the number 40 
//    & console.log the variable

let partsNeeded = 40
console.log('1. Number of partsNeeded:', partsNeeded);

// 2. Create a variable call 'supplyChanges' set it to an array containing
//    the following numbers: 3, 5, -6, 0, 7, 11

let supplyChanges = [3, 5, -6, 0, 7, 11];
//output = 3, 5, -6, 0, 7, 11
console.log('2. Array of supplyChanges:', supplyChanges);

// 3. Console log the value of the second item in the 'supplyChanges' array
// output = 5
console.log('3. Second supplyChange is:', supplyChanges[i=1]);

// 4. The last item was added by mistake. Remove it from the 'supplyChanges' 
//    array & console.log the value removed.
// output = 3, 5, -6, 0, 7
supplyChanges.pop()
console.log('4. Removed item:', supplyChanges);

// 5. A delivery of 25 more parts arrived. Add the value 25 to the end of the array
// output= 3, 5, -6, 0, 7, 25

supplyChanges.push(25)
console.log('5. Adding 25 to supplyChanges.', supplyChanges);

// 6. Write a `for` loop that shows each value in the 'supplyChanges' array
//    Use a console.log formatted as follows, where x is the value from the array
//    - if it is a positive number (greater than 0), log 'Added x parts.' output = Should show 3, 5, 7, 25
//    - if the value is 0, log 'No Change.' = output should say 'No Change'
//    - if the value is negative, format the log as 'Removed x parts.' = output should be 'Removed 6 parts'
console.log('6. Showing supplyChanges...')


for (i=0; i < supplyChanges.length; i++) {
    if (supplyChanges[i] > 0) {
        console.log('Added', supplyChanges[i], 'parts');
    }
    if (supplyChanges[i] == 0) {
        console.log('No Change');
    }
    if  (supplyChanges[i] < 0) {
        console.log('Removed', Math.abs(supplyChanges[i]), 'parts'); // Looked up how to log aboslute value of number in array to make the console log pretty 
    }
} 

// STRETCH GOALS
console.log('---  Stretch Goals  ---');
// 7. Rewrite the `for` loop from #6 as a `for of` loop. 
console.log('7. Showing supplyChanges with "for of" loop');

for (let number of supplyChanges) {
    if (number > 0) {
        console.log('Added', number, 'parts');
    }
    if (number == 0) {
        console.log('No change');
    }
    if (number <0 ) {
        console.log('Removed', Math.abs(number), 'parts');
    }
}

// 8. Write a loop to determine the total number of parts available by
//    adding up all the numbers in the 'supplyChanges' array.
console.log('8. Total supplies available is:');

let total = 0
for (let number of supplyChanges) {
    total+=number
}
console.log(total);


// 9. We have a large stash of parts in our warehouse that we 
//    need to box up and get ready for shipment. 
//    There are 572 parts in total, and each box holds 7 parts.
//    Use a `while` loop to keep adding parts to boxes until
//    no more boxes can be filled.
//    Then log how many boxes were filled, and how many parts are left over.
console.log('9. Filling boxes with a "while" loop');

let totalParts = 572
let totalBox = 0

while (totalParts >= 7) {
    totalParts -= 7
    totalBox += 1 
}
console.log(totalBox, totalParts)

// Thought about how to divide 572 by 7 and log the remainder. Then how to add a box for every time the division process worked, and show the leftovers 