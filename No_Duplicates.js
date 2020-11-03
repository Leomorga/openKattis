//SpiderMonkey

var line=readline()
var phrase=line.split(' ')
var n=phrase.length
var used=[phrase[0]]
for(let i=1;i<n;i++){
    for(let j=0;j<n;j++){
        if(used[j]==phrase[i]){
            break
        }else if(used[j]==null){
            used.push(phrase[i])
            break
        }
    }
}
if(phrase.length==used.length){
    console.log("yes")
}else{
console.log("no")
}