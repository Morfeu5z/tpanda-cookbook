// Compiled by ClojureScript 1.10.764 {}
goog.provide('figwheel.connect');
goog.require('cljs.core');
goog.require('figwheel.client');
figwheel.connect.start = (function figwheel$connect$start(){
var config = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__31901__delegate = function (x__31885__auto__){
if(cljs.core.truth_(tpanda_cookbook.core.mount_root)){
return cljs.core.apply.call(null,tpanda_cookbook.core.mount_root,x__31885__auto__);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),["Figwheel: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602))," hook '","tpanda-cookbook.core/mount-root","' is missing"].join(''));
}
};
var G__31901 = function (var_args){
var x__31885__auto__ = null;
if (arguments.length > 0) {
var G__31902__i = 0, G__31902__a = new Array(arguments.length -  0);
while (G__31902__i < G__31902__a.length) {G__31902__a[G__31902__i] = arguments[G__31902__i + 0]; ++G__31902__i;}
  x__31885__auto__ = new cljs.core.IndexedSeq(G__31902__a,0,null);
} 
return G__31901__delegate.call(this,x__31885__auto__);};
G__31901.cljs$lang$maxFixedArity = 0;
G__31901.cljs$lang$applyTo = (function (arglist__31903){
var x__31885__auto__ = cljs.core.seq(arglist__31903);
return G__31901__delegate(x__31885__auto__);
});
G__31901.cljs$core$IFn$_invoke$arity$variadic = G__31901__delegate;
return G__31901;
})()
,new cljs.core.Keyword(null,"open-urls","open-urls",-1478664930),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["http://localhost:3449/index.html"], null),new cljs.core.Keyword(null,"build-id","build-id",1642831089),"app",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null);
figwheel.client.start.call(null,config);

if(cljs.core.truth_(new cljs.core.Keyword(null,"devcards","devcards",365747130).cljs$core$IFn$_invoke$arity$1(config))){
return devcards.core.start_devcard_ui_BANG__STAR_();
} else {
return null;
}
});
goog.exportSymbol('figwheel.connect.start', figwheel.connect.start);

//# sourceMappingURL=connect.js.map?rel=1595490061103
