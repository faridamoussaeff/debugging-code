const average = function(list) {
  let sum = 0;

  for (let num of list) {
    sum += num;
  }

  return sum / list.length;
};

console.log(average([4, 5, 7]));
