//轮播图
var swiper = new Swiper('.swiper-container', {

	loop: true,
	autoplay: 2000,
	pagination: ".swiper-pagination",
	nextButton: ".swiper-button-next",
	prevButton: ".swiper-button-prev",
	pagination: ".swiper-pagination",
	autoplayDisableOnInteraction: false
})



function qiehuan(left,right,mou) {
	var num = 0;
//		左按钮
	$(left).click(function() {
			num--;
			if(num <= -3) {
				num = -2
				console.log(num)
			} else {
				console.log(num)
				$(mou).animate({
					"left": 280 * num + "px"
				}, 300)
			}
		})
//		右按钮
	$(right).click(function() {
		num++;

		if(num >= 1) {
			num = 0
			console.log(num)
		} else {
			console.log(num)
			$(mou).animate({
				"left": 280 * num + "px"
			}, 300)
		}

	})
}
//四个左右切换
qiehuan("#minleft1","#minright1","#xiaoul1")
qiehuan("#minleft2","#minright2","#xiaoul2")
qiehuan("#minleft3","#minright3","#xiaoul3")
qiehuan("#minleft4","#minright4","#xiaoul4")
