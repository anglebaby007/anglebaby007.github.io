// ==UserScript==
// @name         鼠标点击冒泡
// @namespace    https://djzhao.js.org
// @version      0.1
// @description  一个用JS写的鼠标左击特效
// @description  一些Emoji 😀😃😄😁😆😅😂🤣☺😊😚😙😗😘😍😌😉🙃🙂😇😋😜😝😛🤑🤗🤓😎🤡🤠😖😣☹🙁😕😟😔😞😒😏😫😩😤😠😡😶😐😑😯😦😥😢😨😱😳😵😲😮😧🤤😭😪😴🙄🤔😬🤥🤐💩👺👹👿😈🤕🤒😷🤧🤢👻💀☠👽👾🤖🎃😺😸😹🙏👏🙌👐😾😿🙀😽😼😻
// @author       一碗单炒饭
// @include      /[a-zA-z]+://[^\s]*/
// @run-at       document_start
// ==/UserScript==
onload = function() {
    var click_cnt = 0;
    var $html = document.getElementsByTagName("html")[0];
    var $body = document.getElementsByTagName("body")[0];
    $html.onclick = function(e) {
        var $elem = document.createElement("b");
        $elem.style.color = "#E94F06";
        $elem.style.zIndex = 9999;
        $elem.style.position = "absolute";
        $elem.style.select = "none";
        // 获取s位置信息
        var x = e.pageX;
        var y = e.pageY;

        // 设置位置信息
        $elem.style.left = (x - 10) + "px";
        $elem.style.top = (y - 20) + "px";

        // 清楚动画
        clearInterval(anim);
        switch (++click_cnt) {
            case 10:
                $elem.innerText = "OωO";
                break;
            case 20:
                $elem.innerText = "(๑•́ ∀ •̀๑)";
                break;
            case 30:
                $elem.innerText = "(๑•́ ₃ •̀๑)";
                break;
            case 40:
                $elem.innerText = "(๑•̀_•́๑)";
                break;
            case 50:
                $elem.innerText = "（￣へ￣）";
                break;
            case 60:
                $elem.innerText = "(╯°口°)╯(┴—┴";
                break;
            case 70:
                $elem.innerText = "૮( ᵒ̌皿ᵒ̌ )ა";
                break;
            case 80:
                $elem.innerText = "╮(｡>口<｡)╭";
                break;
            case 90:
                $elem.innerText = "( ง ᵒ̌皿ᵒ̌)ง⁼³₌₃";
                break;
            case 100:
            case 101:
            case 102:
            case 103:
            case 104:
            case 105:
                $elem.innerText = "(ꐦ°᷄д°᷅)";
                break;
            default:
		        $elem.innerText = "❤";
                break;
        }

        // 随机放大
        $elem.style.fontSize = Math.random() * 10 + 8 + "px";
        var increase = 0;  //运动轨迹，8ms +1
        var anim;

        // 添加动画
        setTimeout(function() {
        	anim = setInterval(function() {
	            if (++increase == 150) {
	                clearInterval(anim);
			$body.removeChild($elem);
                }
                // 更新表情的位置信息以及透明度
	            $elem.style.top = y - 20 - increase + "px";
	            $elem.style.opacity = (150 - increase) / 120;
	        }, 8);
        }, 70);
        $body.appendChild($elem);
    };
};
