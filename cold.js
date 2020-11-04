//SpiderMonkey

var line=readline()
var n=parseInt(line)
var count=0
line=readline()
var data=line.split(' ')
for(let i=0;i<n;i++){
    var num=parseInt(data[i])
    if(num<0){
        count++
    }
}
console.log(count)