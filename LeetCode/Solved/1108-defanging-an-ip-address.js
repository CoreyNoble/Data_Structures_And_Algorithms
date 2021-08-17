// Original Solution 

/**
 * Defangs an IP address by converting "." to "[.]".
 * For example: "127.0.0.1" becomes "127[.]0[.]0[.]1".
 *
 * @param {string} address
 * @return {string}
 */
 const defangIPaddr = address => {
    // .split() the string into an array of integers
    // .join() the array back into a string, separating items with "[.]".
    return address.split('.').join('[.]')
}

// "From Scratch" Solution

/**
 * Defangs an IP address by converting "." to "[.]".
 * For example: "127.0.0.1" becomes "127[.]0[.]0[.]1".
 *
 * @param {string} address
 * @return {string}
 */
 const defangIPaddr = address => {
	// Stores the new defanged address.
    let defangedAddr = ''
    
	// O(n) loop over every character within the address.
    for (let i=0; i < address.length; i++) {
		// The character.
        const char = address.charAt(i)
        
		// Character is a period.
        if (char === '.') {
			// Defang the period. Append the defanged character to the new string.
            defangedAddr += '[.]'
        } else {
			// Append the character to the new string.
            defangedAddr += char
        }
        
    }
    
	// Address is now defanged.
    return defangedAddr
}