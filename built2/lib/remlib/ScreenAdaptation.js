!function(win,option){function _getNewFontSize(){var scale=designHeight!==0?Math.min(win.innerWidth/designWidth,win.innerHeight/designHeight):win.innerWidth/designWidth;return parseInt(scale*1e4*designFontSize)/1e4}var count=0,designWidth=option.designWidth,designHeight=option.designHeight||0,designFontSize=option.designFontSize||20,callback=option.callback||null,root=document.documentElement,body=document.body,rootWidth,newSize,t,self;win.changeFontSizeNewMicoSite=function(){rootWidth=root.getBoundingClientRect().width,self=self?self:arguments.callee;if(rootWidth!==win.innerWidth&&count<20)win.setTimeout(function(){count++,self()},0);else{newSize=_getNewFontSize();if(newSize+"px"!==getComputedStyle(root)["font-size"])return root.style.fontSize=newSize+"px",callback&&callback(newSize)}},win.changefontSize=function(){var docEl=document.documentElement,clientWidth=docEl.clientWidth;if(!clientWidth)return;20*(clientWidth/320)+"px"!==getComputedStyle(root)["font-size"]&&(docEl.style.fontSize=20*(clientWidth/320)+"px")}}(window,{designWidth:640,designHeight:1008,designFontSize:40,callback:function(argument){}});