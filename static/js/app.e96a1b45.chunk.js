(this.webpackJsonp=this.webpackJsonp||[]).push([[0],{1364:function(t,e,n){"use strict";n(1365),n(1479)},1562:function(t,e,n){"use strict";n.r(e),function(t){var e=n(1),o=n(30),r=n(283),i=n(11),a=n(69),c=n(83),u=n(947),s=o.a.get("window").width;Object(r.storiesOf)("Demo",t).addDecorator(i.withKnobs).addDecorator(u.a).add("Default",(function(){var t,n=e.createElement(c.d,{count:Object(i.number)("count",200,{},"Props"),origin:{x:Object(i.number)("origin.x",-10,{},"Props"),y:Object(i.number)("origin.y",-10,{},"Props")},explosionSpeed:Object(i.number)("explosionSpeed",c.b,{},"Props"),fallSpeed:Object(i.number)("fallSpeed",c.c,{},"Props"),fadeOut:Object(i.boolean)("fadeOut",!1,"Props"),colors:Object(i.array)("colors",c.a,",","Props"),autoStart:Object(i.boolean)("autoStart",!0,"Props"),autoStartDelay:Object(i.number)("autoStartDelay",1e3,{},"Props"),onAnimationStart:Object(a.action)("onAnimationStart"),onAnimationStop:Object(a.action)("onAnimationStop"),onAnimationResume:Object(a.action)("onAnimationResume"),onAnimationEnd:Object(a.action)("onAnimationEnd"),ref:function(e){return t=e}});return Object(i.button)("Start",(function(){return t.start()}),"Methods"),Object(i.button)("Stop",(function(){return t.stop()}),"Methods"),Object(i.button)("Resume",(function(){return t.resume()}),"Methods"),n})).add("Multiple",(function(){var t,n,o=e.createElement(e.Fragment,null,e.createElement(c.d,{count:Object(i.number)("count",100,{},"Props (left)"),origin:{x:Object(i.number)("origin.x",-10,{},"Props (left)"),y:Object(i.number)("origin.y",-10,{},"Props (left)")},explosionSpeed:Object(i.number)("explosionSpeed",c.b,{},"Props (left)"),fallSpeed:Object(i.number)("fallSpeed",c.c,{},"Props (left)"),fadeOut:Object(i.boolean)("fadeOut",!1,"Props (left)"),colors:Object(i.array)("colors",c.a,",","Props (left)"),autoStart:Object(i.boolean)("autoStart",!0,"Props (left)"),autoStartDelay:Object(i.number)("autoStartDelay",0,{},"Props (left)"),onAnimationStart:function(){Object(a.action)("onAnimationStart (left)"),setTimeout(n.start,c.b)},onAnimationStop:Object(a.action)("onAnimationStop (left)"),onAnimationResume:Object(a.action)("onAnimationResume (left)"),onAnimationEnd:Object(a.action)("onAnimationEnd (left)"),ref:function(e){return t=e}}),e.createElement(c.d,{count:Object(i.number)("count",100,{},"Props (right)"),origin:{x:Object(i.number)("origin.x",s+10,{},"Props (right)"),y:Object(i.number)("origin.y",-10,{},"Props (right)")},explosionSpeed:Object(i.number)("explosionSpeed",c.b,{},"Props (right)"),fallSpeed:Object(i.number)("fallSpeed",c.c,{},"Props (right)"),fadeOut:Object(i.boolean)("fadeOut",!1,"Props (right)"),colors:Object(i.array)("colors",c.a,",","Props (right)"),autoStart:Object(i.boolean)("autoStart",!1,"Props (right)"),autoStartDelay:Object(i.number)("autoStartDelay",0,{},"Props (right)"),onAnimationStart:Object(a.action)("onAnimationStart (right)"),onAnimationStop:Object(a.action)("onAnimationStop (right)"),onAnimationResume:Object(a.action)("onAnimationResume (right)"),onAnimationEnd:Object(a.action)("onAnimationEnd (right)"),ref:function(t){return n=t}}));return Object(i.button)("Start",(function(){return t.start()}),"Methods (left)"),Object(i.button)("Stop",(function(){return t.stop()}),"Methods (left)"),Object(i.button)("Resume",(function(){return t.resume()}),"Methods (left)"),Object(i.button)("Start",(function(){return n.start()}),"Methods (right)"),Object(i.button)("Stop",(function(){return n.stop()}),"Methods (right)"),Object(i.button)("Resume",(function(){return n.resume()}),"Methods (right)"),o}))}.call(this,n(578)(t))},926:function(t,e,n){"use strict";var o=n(927);e.a=o.a},927:function(t,e,n){"use strict";(function(t){var o=n(283);n(1364);Object(o.configure)((function(){n(1562)}),t);var r=Object(o.getStorybookUI)({});e.a=r}).call(this,n(578)(t))},947:function(t,e,n){"use strict";var o=n(1),r=n(4),i=n(3),a=r.a.create({container:{flex:1,overflow:"hidden"}});e.a=function(t){return o.createElement(i.a,{style:a.container},t())}},948:function(t,e,n){n(949),n(950),t.exports=n(1564)},949:function(t,e){"serviceWorker"in navigator&&window.addEventListener("load",(function(){navigator.serviceWorker.register("/react-native-confetti-cannon/expo-service-worker.js",{scope:"/react-native-confetti-cannon/"}).then((function(t){})).catch((function(t){console.info("Failed to register service-worker",t)}))}))}},[[948,1,2]]]);
//# sourceMappingURL=app.e96a1b45.chunk.js.map