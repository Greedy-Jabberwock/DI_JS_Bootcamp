function compareAnagramOrNot(str1, str2) {
    let makeOneWord = (some_str) => some_str.trim()
                                    .toLowerCase()
                                    .split(' ')
                                    .join('')
                                    .split('')
                                    .sort()
                                    .join('')
    let result = makeOneWord(str1) === makeOneWord(str2) ? '' : ' not';
    console.log(`"${str1}" is${result} an anagram of "${str2}"`);
}

compareAnagramOrNot('Astronomer', 'Moon starer');
compareAnagramOrNot('School master', 'The classroom');
compareAnagramOrNot('The Morse Code', 'Here come dots');
compareAnagramOrNot('Mona Lisa', 'Sprinter');
