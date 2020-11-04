//SpiderMonkey

var line=readline()
var data=line.split(' ')
var max=data[0]
var min=data[1]
max=parseInt(max)
min=parseInt(min)

if(min>max){
    let temp=max
    max=min
    min=temp
}
var count=[]
for(let i=0;i<max+min;i++){
    count.push(0)
}
for(let i=0;i<max;i++){
    for(let j=0;j<min;j++){
        var sum=i+1+j+1
        count[sum]++
        if(count[sum]==min){
            console.log(sum)
        }
    }
}