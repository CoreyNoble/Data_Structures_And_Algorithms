/**
 * Converts a number into a roman numeral
 * @param {number} num
 * @return {string}
 */
 const intToRoman = num => {
    // Edge case: No number.
    if (!num) return ''

    // Holds the roman numeral.
    let romanNumeral = ''
    // Holds the re-calculated number value as we progress.
    let calculatedNum = num
    // Maps roman numeral characters to their integer values.
    const dict = {
        M: 1000, CM: 900, D: 500, CD: 400,
        C: 100,  XC: 90,  L: 50,  XL: 40,
        X: 10,   IX: 9,   V: 5,   IV: 4,
        I: 1
    }
         
    // O(13) loop over every character in the roman numeral dictionary.
    for (let key in dict) {     
        /* Determine if the number is large enough to output the current roman numeral character.
           
           This is determined by dividing the number by the value of the current roman numeral.
           After we round down, if the number is positive, the result is how many characters 
           are to be present within the roman numeral string.
           
           For example: num = 58, char = 90.
                            occurence = 0. Do not add a character.
                        num = 58, char = 50.
                            occurence = 1. Add occurence number of 'L' characters. */
        let occurence = Math.floor(calculatedNum / dict[key])
        
        // The number of occurences is positive.
        if (occurence > 0) {
            /* Calculate a new number for the next iteration using the 
               number, modulus the current roman numeral value.
               
               We do this because we want to remove the most significant digit from
               the number, to progress to lower roman numeral characters.
               
               For example: num = 58, dict[key] = 50.
                                calculatedNum = 8 
                                
                            ^ Next iteration in this scenario will use the number 8 */
            calculatedNum = calculatedNum % dict[key]            

            // Append the roman numeral to the string, occurence # of times.
            while (occurence > 0) {
                romanNumeral = romanNumeral + key
                occurence--
            }
        }
    }
    
    // Iteration complete, return the roman numeral string.
    return romanNumeral
}