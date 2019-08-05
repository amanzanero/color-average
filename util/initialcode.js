/**
 * Find mean of rgb values represented as hex
 * @param {String} val1 - hex value 1
 * @param {String} val2 - hex value 2
 */
const findMean = (val1, val2) => {
  var buff = "";
  for (var i = 0; i < 6; i += 2) {
    var sum = hexSum(val1.substr(i, 2), val2.substr(i, 2));
    var avg = hexAvg(sum);
    buff += avg;
    switch (i) {
      case 0:
        console.log("R:", avg);
        break;
      case 2:
        console.log("G:", avg);
        break;
      default:
        console.log("B:", avg);
    }
  }
  return buff;
};

/**
 *Sums 2 hex strings
 * @param {String} val1
 * @param {String} val2
 */
const hexSum = (val1, val2) => {
  var buff = "";
  var carry = 0;
  for (var i = 1; i >= 0; i--) {
    var space1 = hexMap[val1[i]];
    var space2 = hexMap[val2[i]];
    var sum = space1 + space2 + carry;
    carry = Math.floor(sum / 16);
    buff = hexArr[sum % 16] + buff;
  }
  buff = carry ? hexArr[carry] + buff : buff;
  return buff;
};

/**
 * Returns the avg
 * @param {String} sum
 */
const hexAvg = sum => {
  var baseTen = hexToBaseTen(sum);
  var strToReturn = Math.floor(baseTen / 2).toString(16);
  return strToReturn.length === 2 ? strToReturn : "0" + strToReturn;
};

const hexToBaseTen = hex => {
  var num = 0;
  for (var i = hex.length - 1; i >= 0; i--) {
    num += hexMap[hex[i]] * Math.pow(16, hex.length - 1 - i);
  }
  return num;
};

const hexArr = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f"
];
const hexMap = {
  "0": 0,
  "1": 1,
  "2": 2,
  "3": 3,
  "4": 4,
  "5": 5,
  "6": 6,
  "7": 7,
  "8": 8,
  "9": 9,
  a: 10,
  b: 11,
  c: 12,
  d: 13,
  e: 14,
  f: 15
};

console.log("Total mean:", findMean("fffefe", "123456"));
