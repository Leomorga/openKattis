var line='AB'
var moves=line.split('')
var cup1=true
var cup2=false
var cup3=false
var temp
for(let i=0;i<moves.length;i++){
    switch(moves[i]){
        case 'A':
            temp=cup1
            cup1=cup2
            cup2=temp
            break
        case 'B':
            temp=cup2
            cup2=cup3
            cup3=temp
            break
        case 'C':
            temp=cup1
            cup1=cup3
            cup3=temp
            break
    }
}
if(cup1){
    console.log('1')
}else if(cup2){
    console.log('2')
}else if(cup3){
    console.log('3')
}