//动画函数
	function getStyle(obj, attr){
		if(obj.currentStyle){
			return obj.currentStyle[attr];
		} 
		else {
			return getComputedStyle(obj, null)[attr];
		}
	}
	function animate(obj,json,callback){
		clearInterval(obj.timer);
		obj.timer = setInterval(function(){
			var isStop = true;
			for(var attr in json){
				var now = 0;
				if(attr == 'opacity'){
					now = parseInt(getStyle(obj,attr)*100);
				}
				else{
					now = parseInt(getStyle(obj,attr));
				}
				var speed = (json[attr] - now) / 8;
				speed = speed>0?Math.ceil(speed):Math.floor(speed);
				var cur = now + speed;
				if(attr == 'opacity'){
					obj.style[attr] = cur / 100;
				}
				else{
					obj.style[attr] = cur + 'px';
				}
				if(json[attr] !== cur){
					isStop = false;
				}
			}
			if(isStop){
				clearInterval(obj.timer);
				callback&&callback();
			}
		}, 30)
	}


	var centerUp1 = document.getElementById('centerUp1');
	var centerUp2 = document.getElementById('centerUp2');
	centerUp2.style.marginLeft = 2300 + "px";
	centerUp1.style.marginLeft = 1500 + "px";
	var intervalId1;
	var intervalId2;
	window.onload = function(){
		intervalId1 = setInterval(function(){
			var left1 = parseInt(centerUp1.style.marginLeft);
			left1 = left1 - 4;
			centerUp1.style.marginLeft = left1 + "px";
			if(centerUp1.style.marginLeft==0 +"px"){
				centerUp1.style.marginLeft = 1500 +"px";
			}
		},50)

		intervalId2 = setInterval(function(){
			var left2 = parseInt(centerUp2.style.marginLeft);
			left2 = left2 - 4;
			centerUp2.style.marginLeft = left2 + "px";
			if(centerUp2.style.marginLeft==0 +"px"){
				centerUp2.style.marginLeft = 1800 +"px";
			}
		},50)
	}
	clearInterval(intervalId1);
	clearInterval(intervalId2);

	//轮播图
	
	var box = document.getElementById('box');
	var i = 1;
	var isMoving = false;
	function next(){
		if(!isMoving){
			isMoving = true;
			i++;
			liChange();
			animate(images,{left:-800*i},function(){
				if(i>4){
					images.style.left = "-800px";
					i = 1;
				}
				isMoving = false;
			});
		}
	}
	function prev(){
		if(!isMoving){
			isMoving = true;
			i--;
			liChange();
			animate(images,{left:-800*i},function(){
				if(i==0){
					images.style.left = "-4800px";
					i = 4;
				}
				isMoving = false;
			});
		}
	}
	var timer = setInterval(next,3000);
	box.onmouseover = function(){
		animate(leftNode,{opacity:50});
		animate(rightNode,{opacity:50});
	 	clearInterval(timer);
	}
	box.onmouseout = function(){
		animate(leftNode,{opacity:0});
		animate(rightNode,{opacity:0});
		timer = setInterval(next,3000);
	}
	leftNode.onclick = prev;
	rightNode.onclick = next;
	//小按钮点击
	var li = document.getElementsByTagName('li');
	for(var j = 0;j<li.length;j++){
		li[j].x = j;
		li[j].onclick = function(){
			i = this.x + 1;
			liChange();
			animate(images,{left:-800*i })
		}
	}
	function liChange(){
		for(var j=0;j<li.length;j++){
			li[j].className = ' ';
		}
		if(i>4){
			li[0].className = 'active';
		}
		else if(i==0){
			li[3].className = 'active';
		}
		else{
			li[i-1].className = 'active';
		}	
	}	

	//轮播图图片点击链接
	var nine = document.getElementById('nine');
	var eight = document.getElementById('eight');
	var seven = document.getElementById('seven');
	var six = document.getElementById('six');

	nine.onclick = function(){
		window.open("https://www.iqiyi.com/v_19rqqzitd0.html");
	}
	eight.onclick = function(){
		window.open("http://www.iqiyi.com/zongyi/2018chunwan.html");
	}
	seven.onclick = function(){
		window.open("https://v.qq.com/x/cover/rci6d7oh30msqhm.html");
	}
	six.onclick = function(){
		window.open("https://v.qq.com/x/cover/742q1voqixz2swq.html");
	}
	var ig1 = document.getElementById('ig1');
	var ig2 = document.getElementById('ig2');
	var ig3 = document.getElementById('ig3');
	ig1.onclick = function(){
		window.open("https://www.9ixiangsheng.com/yangshichunwan/");
	}
	ig2.onclick = function(){
		window.open("http://tv.cctv.com/2019/02/05/VIDEfvH7IobmITNZ19adJIKb190205.shtml");
	}
	ig3.onclick = function(){
		window.open("http://www.360doc.com/content/19/0725/08/39515313_850867501.shtml");
	}
    
   

    var btn = document.getElementById('btn');
    btn.onclick = function(){
    	var txt = document.getElementById('txt');
    	txt.value= null;
    	alert("你已许愿成功！祝你2020年一切如愿！");
    }

    var two = document.getElementById('two');
    two.onclick = function(){
    	window.open("zhengchunhong.html");
    }
    var three = document.getElementById('three');
    three.onclick = function(){
    	window.open("lihuichao.html");
    }

    var four = document.getElementById('four');
    four.onclick = function(){
    	window.open("wuwenhang.html");
    }
