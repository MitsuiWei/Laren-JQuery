# Laren-JQuery
JQuery的學習筆記 20190510

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
 
