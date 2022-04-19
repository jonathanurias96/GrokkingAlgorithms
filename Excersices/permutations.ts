/**
 * Counts the numer of permutations for a string
 * @param word - string to permutate
 * @returns - the number of permutations for that string
 */
const permutations = (word: string): string | string[] => {
    if(!word || typeof word !== 'string') {
        return "";
    } else if(word.length === 1){
        return word;
    }

    const permutationArray: string[] = [];

    for(let i = 0; i < word.length; i++) {
        const char = word[i];

        if(word.indexOf(char) !== i) {
            continue;
        }

        const remainingChars = word.slice(0, i) + word.slice(i + 1, word.length);

        for(let permutation of permutations(remainingChars)) {
            permutationArray.push(char + permutation)
        }
    }

    return permutationArray;
}

console.log(permutations('aaab'));

// Review and understand permutations function

