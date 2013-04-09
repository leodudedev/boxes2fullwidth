# [jQuery box2fullWidth]
#### Animated repositioning of the boxes on the page grid

jQuery box2fullWidth is a plugin for repositioning boxs in grid layout whit transitions in jQuery.


Usage
-----

Just include this script after jQuery. Requires jQuery 1.5+.

``` html

the containet must have width 100%
all boxes must have all the usual width
<div id="content">
    <div style="width:200px"></div>
    <div style="width:200px"></div>
    <div style="width:200px"></div>
    ...
    ...
</div>

<script src="jquery.min.js"></script>
<script src="jquery.box2fullWidth.js"></script>

<script language="javascript">
	$('#content').box2fullWidth({
		minwidth:400,	// Min page width
		who:'div',	// Who should be repositioned within the container. es. div or img or .class
		margin:5,	// Margin between boxes
		duration:500,	// Duration of animation
		boxdelay:0,	// Delay between animation box
		bottomMargin:50, // margin from bottom (if 0 no set #content height)
		positionComplete:function(){}	// Animation end callback
	});
</script>

```

Demo
---------------

http://htmlpreview.github.io/?https://github.com/leodudedev/boxes2fullwidth/blob/master/demo.html

