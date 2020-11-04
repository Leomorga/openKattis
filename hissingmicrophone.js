//SpiderMonkey

var line=readline()
var phrase=line.split('')
var check=false
for(let i=0;i<phrase.length;i++){

    if(phrase[i]=='s'&&!check){
        if(phrase[i+1]=='s'){
            check=true
            console.log('hiss')
        }
    }
}
if(!check){
    console.log('no hiss')
}