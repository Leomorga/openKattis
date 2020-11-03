//SpiderMonkey

var line;
line=readline()
line=''
var res=0
while (line = readline()) {
    var nums = line.split(' ');
    var a = parseFloat(nums[0]);
    var b = parseFloat(nums[1]);
    res+=a*b
}
console.log(res)