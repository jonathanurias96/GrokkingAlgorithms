// Binary search O(log n) runing in logarithmic time
const binarySearch = (list: number[], itemToFind: number): number | null => {
    let lowestIndex = 0,
        highestIndex = list.length - 1;
    
    while(lowestIndex <= highestIndex) {
        const middleIndex = Math.floor((lowestIndex + highestIndex) / 2),
            guessedItem = list[middleIndex];

        if(itemToFind === guessedItem) {
            return middleIndex;
        } else if(guessedItem > itemToFind) {
            highestIndex = middleIndex - 1;
        } else {
            lowestIndex = middleIndex + 1;
        }
    }
    return null;
}

const numberList = [1, 2, 3, 4, 5, 6, 7];

console.log(binarySearch(numberList, 7))
