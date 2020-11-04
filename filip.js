//SpiderMonkey

var line=readline()
var data=line.split(' ')
var a=data[0]
var b=data[1]

function gira(string){
    return string.split('').reverse().join('')
}

a=gira(a)
b=gira(b)
a=parseInt(a)
b=parseInt(b)
if(a>b){
    console.log(a)
}else{
    console.log(b)
}