arr = [3,4,5,6,7]
let out = arr.filter(function(el,i)
                     {
                       return (i%2==0)
                     }
                    )
let str = ""
out.forEach(function(element){
  str = str+"-"+element+" "
}
            )
console.log(str)
