var EthUtil = require("ethereumjs-util")
// console.log(`0:${process.argv[0]}\n1:${process.argv[1]}\n2:${process.argv[2]}`)

var hexToBytes = function(hex) {
  for (var bytes = [], c = 0; c < hex.length; c += 2)
  bytes.push(parseInt(hex.subtr(c, 2), 16));
  return bytes;
}
