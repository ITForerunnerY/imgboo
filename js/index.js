var imgs=["img/lzn01.jpg","img/lzn02.jpg","img/lzn03.jpeg","img/lzn04.png"];
var z = 999999;
var index = 0;
var box = document.getElementById("box");
boom(10,10);
function boom(l,t){
	var oParentNode = document.createElement("div");
	oParentNode.style.zIndex = z;
	z--;
	box.appendChild(oParentNode);
	var x = l,y = t;
	for(var i = 0; i < y; i++){
		for (var j = 0; j < x; j++) {
			var oDiv = document.createElement("div");
			oDiv.style.background = "url("+imgs[index]+")";
			oDiv.style.width = box.clientWidth/x+"px";
			oDiv.style.height = box.clientHeight/y+"px";
			oDiv.style.left = (box.clientWidth/x)*j+"px";
			oDiv.style.top = (box.clientHeight/y)*i+"px";
			oDiv.style.backgroundPositionX = (box.clientWidth/x)*-j+"px";
			oDiv.style.backgroundPositionY = (box.clientHeight/y)*-i+"px";
			oDiv.style.transition = (Math.random()*1+0.5)+"s";
			oParentNode.appendChild(oDiv);
		}
	};
	var allDiv = oParentNode.children;
	setTimeout(()=>{
		index++;
		index==imgs.length && (index = 0);
		
		boom(l,t);
		for (var i = 0; i < allDiv.length; i++) {
			allDiv[i].style.transform = "perspective(800px) rotateX("+(Math.random()*500-250)+"deg) rotateY("+(Math.random()*500-250)+"deg) translateX("+(Math.random()*500-250)+"px) translateY("+(Math.random()*500-250)+"px) translateZ("+(Math.random()*1000-500)+"px)";
			allDiv[i].style.opacity = 0;
		};
	},2000);
	
	setTimeout(function(){
		oParentNode.remove();
	},3500)
}