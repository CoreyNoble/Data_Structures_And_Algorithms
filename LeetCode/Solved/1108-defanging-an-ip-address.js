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