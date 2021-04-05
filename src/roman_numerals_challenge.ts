// Constraints
// 1 <= s.length <= 15
// s contains only the characters('I', 'V', 'X', 'L', 'C', 'D', 'M').
// It is guaranteed that s is a valid roman numeral in the range[1, 3999].

function romanToInt(s: string): number {
    /// define map of valid roman numerals
    let rMap: Map<string, number> = new Map<string, number>([
        ['M', 1000],
        ['C', 100],
        ['L', 50],
        ['X', 10],
        ['V', 5],
        ['I', 1],
    ]);

    if (s == '' || s == null) {
        /// case 1 - null or empty string
        return 0;
    } else {
        /// case 2 - multiple digit roman numeral
        let total: number = 0;
        /// convert string to array
        let arr: Array<string> = s.split('');
        /// loop through array
        for (let r = 0; r < arr.length; r++) {
            /// get current roman numeral string representation
            let strR: string = arr[r];
            let nextR: string = arr[r + 1];
            let numR: number | undefined = rMap.get(strR);
            let nextN: number | undefined = rMap.get(nextR);

            if (numR == undefined) {
                /// case 3.1 - invalid character
                return 0;
            }

            if (r == arr.length - 1) {
                /// case 3.2 - last character
                total += numR;
            } else {
                /// case 3.3 - first || middle characters 
                if (nextN == undefined) {
                    /// check if next number is a valid character
                    return 0;
                }
                /// determine to add or subtract from total                
                if (numR < nextN) {
                    /// case 3.2.1 - subtract to total
                    total -= numR;
                } else {
                    /// case 3.2.1 - add to total
                    total += numR;
                }

            }
        }
        return total;
    }
}


/// valid
console.log(romanToInt('X'));
console.log(romanToInt('V'));
console.log(romanToInt('I'));
console.log(romanToInt('XVI'));
console.log(romanToInt('XIV'));

// Code to try and assess whether a roman numeral is valid or not.
// /// function isValid
// function isValidRoman(roman: string | null): Number | String {
//     /// define map of valid roman numerals
//     let rMap: Map<string, number> = new Map<string, number>([
//         /// case 4: 3999 - 1000
//         ['MMM', 3000],
//         ['MM', 2000],
//         ['M', 1000],
//         /// case 3: 999 - 100
//         ['CM', 900],
//         ['DCCC', 800],
//         ['DCC', 700],
//         ['DC', 600],
//         ['D', 500],
//         ['CD', 4000],
//         ['CCC', 300],
//         ['CC', 200],
//         ['C', 100],
//         /// case 2: 99 - 10
//         ['XC', 90],
//         ['LXXX', 80],
//         ['LXX', 70],
//         ['LX', 60],
//         ['L', 50],
//         ['XL', 40],
//         ['XXX', 30],
//         ['XX', 20],
//         ['X', 10],
//         /// case 1: 9 - 1
//         ['IX', 9],
//         ['VIII', 8],
//         ['VII', 7],
//         ['VI', 6],
//         ['V', 5],
//         ['IV', 4],
//         ['III', 3],
//         ['II', 2],
//         ['I', 1],
//     ]);

//     if (roman == '' || roman == null) {
//         /// case 1 - null or empty string
//         return `no roman numeral provided`;
//     } else {
//         /// case 2 - value provided

//         let total: number = 0;

//         /// convert string to array
//         let arr: Array<string> = roman.split('');

//         let lookupValue: string = '';

//         /// reverse loop through array
//         for (let r = arr.length - 1; r > -1; r--) {

//             /// get current roman numeral string representation
//             let currentR: string = arr[r];

//             /// check for invalid numeral
//             if (rMap.get(currentR) == undefined) {
//                 return `${currentR} at postion ${r} is not a roman numeral`;
//             }

//             /// case 1 - 0 to 9
//             if (total <= 10) {

//                 /// append current roman to lookup roman
//                 lookupValue = lookupValue + currentR;

//                 let lookupNumber: number | undefined = rMap.get(lookupValue);

//                 if (lookupNumber == undefined) {
//                     return 'undefined';
//                 }

//                 total = lookupNumber;


//             }

//             /// case 2 - 10 to 99

//             /// case 3 - 100 to 999

//             /// case 4 - 1000 to 3999

//             /// case 5 - invalid

//         }

//         return total;
//     }
// }


// /// invalid
// console.log(isValidRoman(''));

// /// invalid
// console.log(isValidRoman('XaV'));
// console.log(isValidRoman('XiX'));
// console.log(isValidRoman('XXIz'))

// /// invalid
// console.log(isValidRoman('XVV'));
// console.log(isValidRoman('XVX'));
// console.log(isValidRoman('XXIC'))
