//SpiderMonkey

var line=readline()
var n=parseInt(line)
for(let i=0;i<n;i++){
    line=readline()
    var data=line.split(' ')
    var b=parseInt(data[0])
    var p=parseFloat(data[1])
    minabpm=(60*(b-1))/p
    bpm=60*b/p
    maxabpm=(60*(b+1))/p
    console.log(minabpm+' '+bpm+' '+maxabpm)
}