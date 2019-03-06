// Given a credit card number, this function should return a string with the
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy!
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long

  // Once you've read this, go ahead and try to implement this function, then return to the console.

  // Amex
  let prefix = cardNumber.slice(0, 2);
  let prefix3 = cardNumber.slice(0, 3);
  let prefix4 = cardNumber.slice(0, 4);
  let prefix6 = cardNumber.slice(0, 6);
  let len = cardNumber.length;

  if ((prefix === "38" || prefix === "39") && cardNumber.length === 14)
    return "Diner's Club";
  if ((prefix === "34" || prefix === "37") && cardNumber.length === 15)
    return "American Express";

  // Switch

  let switchPrefix = [
    "4903",
    "4905",
    "4911",
    "4936",
    "564182",
    "633110",
    "6333",
    "6759"
  ];
  if (
    (switchPrefix.includes(prefix4) || switchPrefix.includes(prefix6)) &&
    len <= 19 &&
    len >= 16
  )
    return "Switch";

  // Visa
  if (
    prefix[0] === "4" &&
    (cardNumber.length === 13 ||
      cardNumber.length === 16 ||
      cardNumber.length === 19)
  )
    return "Visa";

  // MasterCard
  if (
    (prefix === "51" ||
      prefix === "52" ||
      prefix === "53" ||
      prefix === "54" ||
      prefix === "55") &&
    cardNumber.length === 16
  )
    return "MasterCard";

  // Discover

  let discoverPrefix = ["644", "645", "646", "647", "648", "649"];
  if (
    (cardNumber.slice(0, 4) === "6011" ||
      discoverPrefix.includes(cardNumber.slice(0, 3)) ||
      prefix === "65") &&
    (cardNumber.length === 16 || cardNumber.length === 19)
  )
    return "Discover";

  // Maestro

  let maestroPrefix = ["5018", "5020", "5038", "6304"];
  let maestroLengths = [12, 13, 14, 15, 16, 17, 18, 19];
  if (
    maestroPrefix.includes(cardNumber.slice(0, 4)) &&
    maestroLengths.includes(cardNumber.length)
  )
    return "Maestro";

  // China UnionPay

  if (
    ((Number(prefix6) >= 622126 && Number(prefix6) <= 622925) ||
      (prefix3 >= 624 && prefix3 <= 626) ||
      (prefix4 >= 6282 && prefix4 <= 6288)) &&
    (len >= 16 && len <= 19)
  )
    return "China UnionPay";
};
