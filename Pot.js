//SpiderMonkey

var line;
line=readline()
line=0
var res=0
while(line=readline()){
    var pow=line.slice(line.length-1)
    var number=line.slice(0,(line.length)-1)
    res+=Math.pow(number,pow)
}
console.log(res)