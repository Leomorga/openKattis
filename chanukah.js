//SpiderMonkey

var line=readline()
var n=parseInt(line)
for(let i=0;i<n;i++){
    line=readline()
    var data=line.split(' ')
    var useless=parseInt(data[0])
    var days=parseInt(data[1])
    var count=0
    for(let j=0;j<days;j++){
        count+=j+1
    }
    count+=days
    console.log(useless+' '+count)
}