angular.module("youtube-embed",[]).service("youtubeEmbedUtils",["$window","$rootScope",function(e,t){function r(e,t){return e.indexOf(t)>-1}function a(){t.$apply(function(){n.ready=!0})}var n={},i=/https?:\/\/(?:[0-9A-Z-]+\.)?(?:youtu\.be\/|youtube(?:-nocookie)?\.com\S*[^\w\s-])([\w-]{11})(?=[^\w-]|$)(?![?=&+%\w.-]*(?:['"][^<>]*>|<\/a>))[?=&+%\w.-]*/gi,o=/t=(\d+)[ms]?(\d+)?s?/;return n.getIdFromURL=function(e){var t=e.replace(i,"$1");if(r(t,";")){var a=t.split(";");if(r(a[1],"%")){var n=decodeURIComponent(a[1]);t=("http://youtube.com"+n).replace(i,"$1")}else t=a[0]}else r(t,"#")&&(t=t.split("#")[0]);return t},n.getTimeFromURL=function(e){e=e||"";var t=e.match(o);if(!t)return 0;var a=t[0],n=t[1],i=t[2];return"undefined"!=typeof i?(i=parseInt(i,10),n=parseInt(n,10)):r(a,"m")?(n=parseInt(n,10),i=0):(i=parseInt(n,10),n=0),i+60*n},n.ready=!1,"undefined"==typeof YT?(e.onYouTubeIframeAPIReady=a,console.log("Unable to find YouTube iframe library on this page.")):YT.loaded?n.ready=!0:YT.ready(a),n}]).directive("youtubeVideo",["$window","youtubeEmbedUtils",function(e,t){var r=1,a={"-1":"unstarted",0:"ended",1:"playing",2:"paused",3:"buffering",5:"queued"},n="youtube.player.";return e.YTConfig={host:"https://www.youtube.com"},{restrict:"EA",scope:{videoId:"=?",videoUrl:"=?",player:"=?",playerVars:"=?",playerHeight:"=?",playerWidth:"=?"},link:function(e,i,o){function u(){var t=Array.prototype.slice.call(arguments);e.$apply(function(){e.$emit.apply(e,t)})}function d(t){var r=a[t.data];"undefined"!=typeof r&&u(n+r,e.player,t),e.$apply(function(){e.player.currentState=r})}function l(t){u(n+"ready",e.player,t)}function y(t){u(n+"error",e.player,t)}function p(){var t=angular.copy(e.playerVars);t.start=t.start||e.urlStartTime;var r=new YT.Player(c,{height:e.playerHeight,width:e.playerWidth,videoId:e.videoId,playerVars:t,events:{onReady:l,onStateChange:d,onError:y}});return r.id=c,r}function f(){(e.videoId||e.playerVars.list)&&(e.player&&"function"==typeof e.player.destroy&&e.player.destroy(),e.player=p())}e.utils=t;var c=o.playerId||i[0].id||"unique-youtube-embed-id-"+r++;i[0].id=c,e.playerHeight=e.playerHeight||390,e.playerWidth=e.playerWidth||640,e.playerVars=e.playerVars||{};var s=e.$watch(function(){return e.utils.ready&&("undefined"!=typeof e.videoUrl||"undefined"!=typeof e.videoId||"undefined"!=typeof e.playerVars.list)},function(t){t&&(s(),"undefined"!=typeof e.videoUrl?e.$watch("videoUrl",function(t){e.videoId=e.utils.getIdFromURL(t),e.urlStartTime=e.utils.getTimeFromURL(t),f()}):"undefined"!=typeof e.videoId?e.$watch("videoId",function(){e.urlStartTime=null,f()}):e.$watch("playerVars.list",function(){e.urlStartTime=null,f()}))});e.$watchCollection(["playerHeight","playerWidth"],function(){e.player&&e.player.setSize(e.playerWidth,e.playerHeight)}),e.$on("$destroy",function(){e.player&&e.player.destroy()})}}}]);
