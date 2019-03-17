// axios.get('http://www.app-echo.com/api/sound/info?id=1629723&comment=1',)
//   .then(function (response) {
//     console.log(response);
//   })
//   .catch(function (error) {
//     console.log(error);
//   });
console.log('app init...')

// 登陆博客
let welcome = document.querySelector('#welcome');
let mask = document.querySelector('#mask');

if(sessionStorage.getItem('inline')){
	console.log('她在线哦!')
	// 如果她在线那么就不要在展现登陆界面了
	mask.style.display = 'none';
}




welcome.addEventListener('click',function(e){
	mask.style.opacity=0;
})

mask.addEventListener('transitionend',function(e){
	this.style.display = 'none';
})
// 添加session
if(sessionStorage){
	sessionStorage.setItem('inline',true)
}

document.querySelector('#back_top').addEventListener('click',()=>{
    window.scrollTo(0,0);
})

var upupooConfig = {
	'type':{
		'key':'3',
		'value': '3',
		'Effect': {
		}
	},
	'size' : {
			'key':'true',
			'value': 1
		},
		'transparent' : {
			'key':'false',
			'value': 10
		},
		'speed' : {
			'key':'true',
			'value': 1
		},
		'density' : {
			'key':'true',
			'value': 10
		},
		'color' : {
			'key':'false',
			'value': '#ff0'
		}
}


$(document).snowfall('clear');
$(document).snowfall({
    image: "image/flo_3.png",
    flakeCount:upupooConfig.density.value*1 +10,
    minSize: 5+upupooConfig.size.value*1,
    maxSize: 25+upupooConfig.size.value*1/4,
    minSpeed: 1 + upupooConfig.speed.value*1/10,
    maxSpeed: 10 + upupooConfig.speed.value*1/10
});


