// Compiled by ClojureScript 1.10.764 {}
goog.provide('tpanda_cookbook.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('reagent.dom');
tpanda_cookbook.core.flextest = (function tpanda_cookbook$core$flextest(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.fcontainer.frow.farround","div.fcontainer.frow.farround",-1693389552),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Text1"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Text2"], null)], null)], null);
});
tpanda_cookbook.core.container = (function tpanda_cookbook$core$container(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.fcontainer.frow.fmiddle","div.fcontainer.frow.fmiddle",1220890001),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"main"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-load","on-load",1415151594),(function (e){
return console.log(e.target);
})], null),"Hello world!"], null)], null);
});
tpanda_cookbook.core.body_space = (function tpanda_cookbook$core$body_space(){
return tpanda_cookbook.core.container;
});
tpanda_cookbook.core.mount_root = (function tpanda_cookbook$core$mount_root(){
return reagent.dom.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tpanda_cookbook.core.body_space], null),document.getElementById("app"));
});
tpanda_cookbook.core.init_BANG_ = (function tpanda_cookbook$core$init_BANG_(){
return tpanda_cookbook.core.mount_root.call(null);
});

//# sourceMappingURL=core.js.map?rel=1595505585014
