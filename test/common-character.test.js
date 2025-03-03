const calculateCommonChar = require('../src/common-character');

describe("Common Characters Tests", () => {
    test("should return ['e', 'l', 'l']", () => {
        expect(calculateCommonChar(["bella", "label", "roller"])).toEqual(["e", "l", "l"]);
    });

    test("should return ['a', 'a', 'a']", () => {
        expect(calculateCommonChar(["aaa","aaa","aaa"])).toEqual(['a', 'a', 'a']);
    });

    test("should return ['a', 'a']", () => {
        expect(calculateCommonChar(["aa","aaa","aaa"])).toEqual(['a', 'a']);
    });

});
