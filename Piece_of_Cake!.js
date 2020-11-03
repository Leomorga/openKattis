//SpiderMonkey

var line=readline()
var nums=line.split(' ')
var n=parseInt(nums[0])
var h=parseInt(nums[1])
var v=parseInt(nums[2])
if(h>n-h){
    if(v>n-v){
        console.log(v*h*4)
    }
    else{
        console.log((n-v)*h*4)
    }
}else{
    if(v>n-v){
        console.log(v*(n-h)*4)
    }
    else{
        console.log((n-v)*(n-h)*4)
    }
}