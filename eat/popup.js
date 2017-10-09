function stops(){
   return false;
}
document.oncontextmenu=stops;

(function($){
	var list = $('content').children, len = list.length, begin = $('begin'), index = 0, interval = null;

	begin.onclick = function(){
		if(this.running)return;
		this.running = true;
		this.remain = 3000 + Math.random() * 5000;
		interval = setInterval(function(){
			if( begin.remain < 200 ){
				begin.running = false;
				//alert( '你抽中了: '+list[index].innerHTML );
				clearInterval(interval);
			}else{
				list[index].className = "";
				list[(index+1) % len].className = "current";
				index = ++index % len;
				begin.remain -= 100;
			}
		},100);
	};

	var mm = 3;

	window.fn = function(){
		//alert(mm);
	};
	mm += 3;

})(function(id){return document.getElementById(id)});
