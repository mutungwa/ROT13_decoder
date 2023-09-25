function rot13(str) {
  // Define a function to decode a single character
  function decodeChar(char) {
    // Check if the character is a letter
    if (/[A-Z]/.test(char)) {
      // Decode the letter by shifting it 13 places backward in the alphabet
      const charCodeA = 'A'.charCodeAt(0);
      const decodedCharCode = (char.charCodeAt(0) - charCodeA + 13) % 26 + charCodeA;
      return String.fromCharCode(decodedCharCode);
    }
    // If it's not a letter, return the character unchanged
    return char;
  }

  // Apply the decodeChar function to each character in the input string
  return str.split('').map(decodeChar).join('');
}

console.log(rot13("SERR PBQR PNZC")); // Output: "FREE CODE CAMP"
