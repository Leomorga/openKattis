//SpiderMonkey

var line=readline()
var n=parseInt(line)
for(let i=0;i<n;i++){
    line=readline()
    var n2=parseInt(line)
    line=readline()
    var used=[line]
    for(let j=0;j<n2-1;j++){
        line=readline()
        for(let k=0;k<used.length+1;k++){
            if(used[k]==line){
                break;       
            }else if(used[k]==null){
                used.push(line)
                break;
            } 
        }
    }
    console.log(used.length)
}