/*!
 * jQuery Box to Full Width - Animated repositioning of the boxes on the page grid
 * Leonardo Pinori <leodudedev@gmail.com>
 * MIT Licensed.
 *
 * http://github.com/leodudedev/
 */
(function($){
	$.fn.box2fullWidth=function(options){
	
		var settings = $.extend({
			minwidth:400,
			who:'div',
			margin:5,
			duration:500,
			boxdelay:0,
			positionComplete:function(){}
		},options);

		return this.each(function(i,e){
		
		
			var vecRow=new Array();
			var _this=e;
			var _timeout=null;
			var fixwh=200;
			
			function anim(t,cent,cord,index){
				if(cord==undefined||cord==''||cord==null){t.remove(); return;}
				var cx=(((fixwh+settings.margin)*cord.c)+settings.margin+cent);
				var cy=settings.margin;
				if(cord.r>0){
					cy=$(vecRow[cord.r-1][cord.c]).position().top+$(vecRow[cord.r-1][cord.c]).height()+settings.margin;
					cy=cord.yt+settings.margin;
				}
				t.removeClass('b2fw_moved').stop().delay(settings.boxdelay*index).animate({left:cx,top:cy,opacity:1},settings.duration,function(){
					$(this).addClass('b2fw_moved');
					if($('.b2fw_moved').length==$(_this).children(settings.who).length){
						settings.positionComplete();
					}
				});
			}
			function getFree(p,vecRow){
				for(var i=0; i< vecRow.length ;i++){
					for(var u=0; u<vecRow[i].length;u++){
						if(vecRow[i][u]=='x'){
							vecRow[i][u]=p;
							var y=0;
							if(i>0){
								for(var t=(i-1);t>=0;t--){
									y+=$(vecRow[t][u]).height()+settings.margin;
								}
							}
							return new Object({r:i,c:u,yt:y});
						}
					}
				}	
			}
			
			function repos(){
				var tgtw=$(_this).width(), addmin=0;
				if($(_this).width()<settings.minwidth){
					tgtw=settings.minwidth;
					addmin=parseInt((settings.minwidth-$(_this).width())/2);
				}
				var tile=parseInt(tgtw/(fixwh+settings.margin));
				var cent=((($(_this).width()-tile*(fixwh+settings.margin))-settings.margin)/2)+addmin;
				vecRow=new Array();
				for(var i=0; i<=parseInt($(_this).children(settings.who).length/tile)+20;i++){
					var vecCol=new Array();
					for(var u=1; u<=tile;u++){vecCol.push('x');}
					vecRow.push(vecCol);
				}
				$(_this).children(settings.who).each(function(i,e){
					anim($(this),cent,getFree($(this),vecRow),i)
				});
			}
			$(window).resize(function(){
				clearTimeout(_timeout);
				_timeout=setTimeout(function(){repos();},200);
			});
			$(_this).children(settings.who).each(function(i,e){
				$(e).css('position','absolute');
			});
			repos();
		});
	};
})(jQuery);



