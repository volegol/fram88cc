var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

(function($){$(window.document).ready(function(){var autoPlay=true,chromeless=false,skipCounter,skipInterval,skipOffset,skipText;if(Clappr.Browser.isMobile){autoPlay=false;chromeless=false;}
window.app={clappr:{currentTime:function(){return window.Math.round(window.app.clappr.instance.getCurrentTime(),0);},instance:new Clappr.Player({}),isBuffering:function(){return window.app.clappr.instance.core.mediaControl.container.buffering;},resizeCallback:function(){$('div[data-player]').css({width:$(window).innerWidth()+'px',height:$(window).innerHeight()+'px'});},options:{autoPlay:autoPlay,disableKeyboardShortcuts:true,disableVideoTagContextMenu:true,exitFullscreenOnEnd:false,language:"tr-TR",strings:{"tr-TR":{back_to_live:"CanlÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€šÃ‚ÂÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â± yayÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€šÃ‚ÂÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â±na geri dÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬ ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€Â¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¶n",live:"CanlÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€šÃ‚ÂÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â± | TRGoals",playback_not_supported:"TarayÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€šÃ‚ÂÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â±cÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€šÃ‚ÂÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â±nÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€šÃ‚ÂÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â±z bu ortamÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€šÃ‚ÂÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â± oynatamÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€šÃ‚ÂÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â±yor, lÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬ ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€Â¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¼tfen gÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã¢â‚¬ ÃƒÂ¢Ã¢â€šÂ¬Ã¢â€Â¢ÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â¼ncel bir tarayÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€šÃ‚ÂÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â±cÃƒÆ’Ã†â€™Ãƒâ€ Ã¢â‚¬â„¢ÃƒÆ’Ã‚Â¢ÃƒÂ¢Ã¢â‚¬Å¡Ã‚Â¬Ãƒâ€šÃ‚ÂÃƒÆ’Ã†â€™ÃƒÂ¢Ã¢â€šÂ¬Ã…Â¡ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â± ile deneyiniz."},},width:'100%',height:$(window).innerHeight()},},extend:function(defaults,options){return $.extend({},defaults,options);},init:function(){$(window.document.head).append("<style>body{background-color:transparent;"+"font-family:\"Roboto\";overflow:hidden}"+"video{object-fit:fill}</style>");window.config=window.app.extend({adv:{enabled:false,},},window.config);if(window.config.adv.enabled){window.app.initAdv();}else{window.app.initMatch();}
$(window).resize(window.app.clappr.resizeCallback);},initAdv:function(){window.app.initContainer(window.config.adv.parentId);window.config.adv=window.app.extend({link:"",skipOffset:5,skipText:"Reklami gec",skipTextN:"Reklami gecmek icin %d saniye kaldi",playback:{playInline:true,},},window.config.adv);window.app.clappr.instance=new Clappr.Player(window.app.extend(window.app.clappr.options,window.app.extend(window.config.adv,{chromeless:chromeless,})));window.app.initAdvEvents();},initAdvEvents:function(){window.app.clappr.instance.once(Clappr.Events.PLAYER_ENDED,window.app.skip);window.app.clappr.instance.once(Clappr.Events.PLAYER_PLAY,window.app.initSkipButton);window.app.clappr.instance.on(Clappr.Events.PLAYER_TIMEUPDATE,window.app.skipButton);window.app.clappr.instance.setVolume(100);},initContainer:function(selector){if($(selector).length>0){$(selector).remove();}
$(window.document.body).prepend($("<div />").attr("id",selector.match(/\#(.*)/)[1]));},initMatch:function(){window.app.initContainer(window.config.match.parentId);window.app.clappr.instance=new Clappr.Player(window.app.extend(window.app.clappr.options,window.config.match));window.app.initMatchEvents();},initMatchCleanup:function(){window.app.clappr.instance.setVolume(100);if(Clappr.Browser.isMobile){$(".bar-scrubber").css({display:"none",});}else{}
$("[data-watermark-top-left]").css({left:"17px",top:"17px",});$("[data-watermark-top-right]").css({top:"17px",});},initMatchEvents:function(){window.app.clappr.instance.once(Clappr.Events.PLAYER_PLAY,window.app.initMatchCleanup);},initSkipButton:function(){skipOffset=window.config.adv.skipOffset;if(!Clappr.Browser.isMobile){}
$(window.document.body).prepend($("<div data-adv-link />").css({height:"100%",left:0,position:"absolute",top:0,"z-index":9998,width:"100%",}));$("[data-adv-link]").append($("<a />").attr({href:window.config.adv.link,target:"_blank"}).css({display:"inline-block",height:"100%",width:"100%"}))
$(window.document.body).prepend($("<div data-adv />").css({bottom:"25%",position:"absolute",right:0,"z-index":9999,}));skipText=window.config.adv.skipTextN.replace("%d",window.config.adv.skipOffset).toUpperCase();$("[data-adv]").append($("<button />").attr("type","button").css({"background-color":"#000",border:"3px solid #333","border-right":0,color:"#f8f8f8","font-family":"Roboto","font-weight":"bold",padding:"10px 20px",}).text(skipText));},skip:function(){$("[data-adv]").remove();$("[data-adv-link]").remove();window.app.initMatch();window.app.clappr.instance.play();},skipButton:function(){if(window.app.clappr.currentTime()>0){skipCounter=1;skipInterval=setInterval(window.app.skipButtonHandler,1000);window.app.clappr.instance.off(Clappr.Events.PLAYER_TIMEUPDATE,window.app.skipButton);}},skipButtonHandler:function(){if(window.app.clappr.isBuffering()){return false;}else if(skipCounter==skipOffset){skipText=window.config.adv.skipText;$("[data-adv] > button").css({cursor:"pointer",});$("[data-adv] > button").on("click",window.app.skip);clearInterval(skipInterval);}else{skipText=window.config.adv.skipTextN.replace("%d",skipOffset-skipCounter);skipCounter++;}
$("[data-adv] > button").text(skipText.toUpperCase());},};window.app.init();});})(jQuery);


}
/*
     FILE ARCHIVED ON 17:36:40 Apr 02, 2024 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 00:56:17 May 02, 2024.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.633
  exclusion.robots: 0.088
  exclusion.robots.policy: 0.081
  cdx.remote: 0.053
  esindex: 0.008
  LoadShardBlock: 87.763 (3)
  PetaboxLoader3.datanode: 172.397 (4)
  load_resource: 234.711
  PetaboxLoader3.resolve: 128.251
*/