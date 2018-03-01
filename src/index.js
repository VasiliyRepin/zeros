module.exports = function getZerosCount(number) {
  // your implementation
  
        var sum =0;
        while (number >= 5)
        {
            number = parseInt(number / 5);
            sum = sum + number;
        }
            return sum;
}
