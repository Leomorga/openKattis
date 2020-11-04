//SpiderMonkey

var line=readline()
var data=line.split(' ')
var fizz=parseInt(data[0])
var buzz=parseInt(data[1])
var n=parseInt(data[2])
for(let i=0;i<n;i++){
    if((i+1)%fizz==0&&(i+1)%buzz==0)
        console.log('FizzBuzz')
    else if((i+1)%fizz==0)
        console.log('Fizz')
    else if((i+1)%buzz==0)
        console.log('Buzz')
    else
        console.log(i+1)
} 