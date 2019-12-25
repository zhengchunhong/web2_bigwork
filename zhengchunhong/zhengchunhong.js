
var left = document.getElementById("left");
var rollSpeed = 1
function Scroll(container, object) {
	if (document.getElementById(container) != null) {
		var contObj = document.getElementById(container);
		var obj = document.getElementById(object);
		contObj.style.visibility = "visible";
		contObj.rollSpeed = rollSpeed;
		widthContainer = contObj.offsetWidth;
		obj.style.left = parseInt(widthContainer) + "px";
		widthObject = obj.offsetWidth;
		interval = setInterval("aScroll('" + container + "','" + object
			+ "'," + widthContainer + ")", 20);
	}
}

function aScroll(container, object, widthContainer) {
	var contObj = document.getElementById(container);
	var obj = document.getElementById(object);
	widthObject = obj.offsetWidth;
	if (parseInt(obj.style.left) > (widthObject * (-1))) {
		obj.style.left = parseInt(obj.style.left) - contObj.rollSpeed + "px";
	} else {
		obj.style.left = parseInt(widthContainer) + "px";
	}
}

function goTopEx() {
    var obj = document.getElementById("goTopBtn");
    function getScrollTop() {
        return document.documentElement.scrollTop + document.body.scrollTop;
    }
    function setScrollTop(value) {
        if (document.documentElement.scrollTop) {
            document.documentElement.scrollTop = value;
        } else {
            document.body.scrollTop = value;
        }
    }
    window.onscroll = function() {
        getScrollTop() > 0 ? obj.style.display = "": obj.style.display = "none";
    }
    obj.onclick = function() {
        var goTop = setInterval(scrollMove, 10);
        function scrollMove() {
            setScrollTop(getScrollTop() / 1.1);
            if (getScrollTop() < 1) clearInterval(goTop);
        }
    }
}