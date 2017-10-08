var container = document.getElementById('container'),
li = document.getElementsByTagName('li'),
aa = document.getElementById('start'),
pp = document.getElementById('pp'),
timer = null;

console.log(aa, 'add');
function start(){
var i = 0;
var num = Math.floor(Math.random() * li.length) + 20;
if(i<num){
timer = setInterval(function(){
for(var j=0;j<li.length;j++){
 li[j].className = '';
}
li[i%li.length].className = 'active';
i++;
if(i === num){
 clearInterval(timer);
 if(num%li.length === 0){
 pp.innerHTML += "恭喜您中了：8 等奖" + '<br/>';
 }else{
 pp.innerHTML += "恭喜您中了："+ parseInt(num%li.length) + " 等奖"+ '<br/>';
 }
}
},130);
}
}
aa.onclick = function(){
start();
}
