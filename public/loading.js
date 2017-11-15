
	var div_full = document.createElement("div");			// 화면 덮는 div
	var div_center = document.createElement("div");			// 센터 텍스트 담는 div
	var div_center2 = document.createElement("div");		// 센터 반투명 div
	var loading_text = document.createElement("p");			// 텍스트 p
	var img_lo = document.createElement("span");
  img_lo.innerHTML = "<img id=\"img_lo\" src=\"viewLoading.gif\" width=\"40\" height=\"40\">";

var loading = function(d) {	//변수 -> 이름,포지션 -> 높이,넓이 -> 마진,패딩 -> 위치 -> 기타

if(d == 1) {
	div_full = document.createElement("div");			// 화면 덮는 div
	div_center = document.createElement("div");			// 센터 텍스트 담는 div
	div_center2 = document.createElement("div");		// 센터 반투명 div
	loading_text = document.createElement("p");			// 텍스트 p

	div_full.onclick = function() { alert("처리중 입니다. 잠시만 기다려주세요.") }
	div_center.onclick = function() { alert("처리중 입니다. 잠시만 기다려주세요.") }

	//var w = 0, h = 0;					// 크로스브라우징 높이,넓이 조절
	var w = '50%', h = '50%';
/*
		if (typeof (window.innerWidth) == 'number') { //Chrome
			 w = window.innerWidth / 2;
			 h = window.innerHeight / 2;
		} else if (document.documentElement && (document.documentElement.clientWidth || document.documentElement.clientHeight)) {
			 w = document.documentElement.clientWidth / 2;
			 h = document.documentElement.clientHeight / 2;
		} else if (document.body && (document.body.clientWidth || document.body.clientHeight)) { //IE9
			 w = document.body.clientWidth / 2;
			 h = document.body.clientHeight / 2;
		}
*/
	// 텍스트 태그 생성
	loading_text.style.height = "30";
	loading_text.style.width = "200";
	//loading_text.style.margin = "20px 0px 20px 0px";
	loading_text.style.margin = "15px 0px 15px 0px";
	loading_text.style.fontWeight = "bold";
	loading_text.innerHTML = "데이터 처리 중입니다.잠시 기다려주십시오.";

	//전체 투명레이어
	div_full.style.position = "absolute";
	div_full.style.height = "100%";
	div_full.style.width = "100%";
	div_full.style.top = "0";
	div_full.style.left = "0";
	div_full.style.background = "#000000";
	div_full.style.opacity = "0.0";
	div_full.style.filter = "alpha(opacity=00)";
	div_full.style.zIndex = "9995";

	//이미지 중앙에 배치할 레이어
	div_center.style.position = "absolute";
	div_center.style.height = "100";
	div_center.style.width = "200";
	div_center.style.top = h;
	div_center.style.left = w;
	div_center.style.marginLeft = "-100px";
	div_center.style.marginTop = "-50px";
	div_center.style.textAlign = "center";
	div_center.style.zIndex = "9998";

	div_center2.style.position = "absolute";
	div_center2.style.height = "100";
	div_center2.style.width = "200";
	div_center2.style.top = h;
	div_center2.style.left = w;
	div_center2.style.marginLeft = "-100px";
	div_center2.style.marginTop = "-50px";
	div_center2.style.background = "#ffffff";
	div_center2.style.opacity = "0.8";
	div_center2.style.filter = "alpha(opacity=80)";
	div_center2.style.zIndex = "9996";

	//포함시키기
	div_center.appendChild(img_lo);
	div_center.appendChild(loading_text);

	document.body.appendChild(div_full);
	document.body.appendChild(div_center2); // 이미지는 투명도를 없애기 위해 다른 레이어를 바디에 포함.
	document.body.appendChild(div_center); // 이미지는 투명도를 없애기 위해 다른 레이어를 바디에 포함.

} else if(d == 0) {
	div_full.parentNode.removeChild(div_full);
	div_center2.parentNode.removeChild(div_center2);
	div_center.parentNode.removeChild(div_center);
}

}
