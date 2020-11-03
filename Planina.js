//SpiderMonkey

var line=readline()
var n=parseInt(line)
var res=0
var a=2
for(let i=0;i<n;i++){
    a+=(a-1)
}
res=Math.pow(a,2)
console.log(res)