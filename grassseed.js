//SpiderMonkey

var line=readline()
var cost=parseFloat(line)
line=readline()
var n=parseInt(line)
var res=0
for(let i=0;i<n;i++){
    line=readline()
    var nums=line.split(' ')
    var a=parseFloat(nums[0])
    var b=parseFloat(nums[1])
    res+=a*b
}
res*=cost
console.log(res)