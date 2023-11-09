let arr = [10, 24, 56, 72, -10, -88, 100, 564]
let odd_indexes_ele = arr.filter(function(_,i){
  return(i%2==1)
  }
)
let sum = odd_indexes_ele.reduce(function(acc,curent){
  return acc+curent}, 0
)
let average = sum/ odd_indexes_ele.length
console.log(average)