# Laren-JQuery
                                          JQuery的學習筆記 20190512

Jquery 安裝方式<br>
1.http://jquery.com 先到官方網站下載<br>
2.在<head>當中插入<script src="js/jquery-3.4.1.min.js"></script> 讓檔案讀取jquery的檔案<br>
3.創建一個all.js(裡面主要為我們要寫的js內容)。<script src="js/all.js"></script><br>


day1簡單的互動效果<br>

index.html的內容


```html
	<!DOCTYPE html>
	<html>
	<head>
		<meta charset="utf-8">
		<title></title>
		<script src="js/jquery-3.4.1.min.js"></script>
		<script src="js/all.js"></script>
	</head>
	<body>
	<div>
		<button id="show">顯示</button>
		<button id="hide">隱藏</button>
		<h1>1234</h1>
	</div>
	</body>
	</html>
```

all.js內容
```js
	jQuery(document).ready(function($) {
		$('#hide').click(function(event) {
			$('h1').hide();
		});

		$('#show').click(function(event) {
			$('h1').show();
		});
	});
```
 
                                          JQuery的學習筆記 20190513
JQuery當中還有許多動畫特效<br>
例如:slideToggle但是這些方式是控制css 達到動畫的效果 所以會造成電腦大量的耗能<br>

toggleClass可以動態增加class 在使新增的class吃到一開始就做好的設定<br>
```
jQuery(document).ready(function($) {
	$(".post2").click(function(event) {
		$(".text2").toggleClass('active');
	});
});
```
按鈕觸發.text2新增一個active的class<br>
再讓那個active吃到“顯示”的css<br>

```
.text2.active{
			display: block;
		}
```
這樣就可以達成點擊按鈕出現某元件的效果了！<br>

如果想要造成fadeIn和fadeOut的漸層效果的話
可以使用opacity + transition
```
		.text2.active{
			opacity: 1;
		}

		.text2{
			opacity: 0;  
			transition: all 3s;
		}
```

詳情請看看day2的code<br>
