!function(){var i;(i=jQuery).fn.mPageTransition=function(n){var a=i.extend({color:"#101010",fadeOutTime:400,fadeInTime:820},n),e=i("body"),o=i(e).css("background-color");i(e).css("visibility","visible").hide().fadeIn(a.fadeInTime),i(".transition").click((function(n){var t=this;n.preventDefault(),i(e).animate({"background-color":a.color,opacity:0},a.fadeInTime,(function(){i(e).animate({"background-color":o},a.fadeOutTime,(function(){var n=i(t).attr("href");location.href=n}))}))}))}}();