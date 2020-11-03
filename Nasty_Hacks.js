//SpiderMonkey

var line=readline()
var n=parseInt(line)
while(line=readline()){
    nums=line.split(' ')
    var a=parseInt(nums[0])
    var b=parseInt(nums[1])
    var c=parseInt(nums[2])
    if(b-a>c){
        console.log('advertise')
    }else if(b-a==c){
        console.log('does not matter')
    }else{
        console.log('do not advertise')
    }
}