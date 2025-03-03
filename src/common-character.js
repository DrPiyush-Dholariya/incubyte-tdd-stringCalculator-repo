function calculateCommonChar(stringArr) {
    if (!stringArr.length) return [];

    let charCount = [...stringArr[0]].reduce((acc, char) => {
        acc[char] = (acc[char] || 0) + 1;
        return acc;
    }, {});

    for (let i = 1; i < stringArr.length; i++) {
        let tempCount = {};
        for (let char of stringArr[i]) {
            tempCount[char] = (tempCount[char] || 0) + 1;
        }
        for (let char in charCount) {
            if (tempCount[char]) {
                charCount[char] = Math.min(charCount[char], tempCount[char]);
            } else {
                delete charCount[char];
            }
        }
    }
    
    let result = [];
    for (let char in charCount) {
        result.push(...Array(charCount[char]).fill(char));
    }

    return result;
}

module.exports = calculateCommonChar;
