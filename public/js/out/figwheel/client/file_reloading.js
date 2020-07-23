// Compiled by ClojureScript 1.10.764 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('goog.html.legacyconversions');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined')){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.debug_loader_QMARK_ = (function figwheel$client$file_reloading$debug_loader_QMARK_(){
return (!((goog.debugLoader_ == null)));
});
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__4126__auto__ = ((cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && ((((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string'))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372))));
if(or__4126__auto__){
return or__4126__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (ns){

return goog.debugLoader_.getPathFromDeps_(ns);
}):(function (ns){

return goog.object.get(goog.dependencies_.nameToPath,ns);
}));
figwheel.client.file_reloading.provided_QMARK_ = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (ns){
return goog.getObjectByName(ns);
}):(function (ns){
return goog.object.get(goog.dependencies_.written,figwheel.client.file_reloading.name__GT_path.call(null,ns));
}));
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(ns){
return ((cljs.core._EQ_.call(null,"goog",ns)) || (cljs.core._EQ_.call(null,"cljs.core",ns)) || (cljs.core._EQ_.call(null,"cljs.nodejs",ns)) || (goog.string.startsWith(ns,"clojure.")) || (goog.string.startsWith(ns,"goog.")));
});
figwheel.client.file_reloading.base_requires_for_ns_path = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (path){
var G__29440 = goog.object.get(goog.debugLoader_.dependencies_,path);
if((G__29440 == null)){
return null;
} else {
return goog.object.get(G__29440,"requires");
}
}):(function (path){
var G__29441 = goog.object.get(goog.dependencies_.requires,path);
if((G__29441 == null)){
return null;
} else {
return goog.object.getKeys(G__29441);
}
}));
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__29442_SHARP_){
return (!(figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__29442_SHARP_)));
}),figwheel.client.file_reloading.base_requires_for_ns_path.call(null,figwheel.client.file_reloading.name__GT_path.call(null,ns))));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependency_data !== 'undefined')){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (_,___$1){
return null;
}):(function (path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
}));
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (){
return null;
}):(function (){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,(function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
}));
}));
figwheel.client.file_reloading.path__GT_name = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (path){
var G__29443 = goog.object.get(goog.debugLoader_.dependencies_,path);
var G__29443__$1 = (((G__29443 == null))?null:goog.object.get(G__29443,"provides"));
if((G__29443__$1 == null)){
return null;
} else {
return cljs.core.set.call(null,G__29443__$1);
}
}):(function (path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
}));
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),parent_ns);
});
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (){
return goog.object.forEach(goog.object.filter(goog.debugLoader_.dependencies_,(function (dep,path,_){
return cljs.core.not.call(null,cljs.core.some.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_,goog.object.get(dep,"provides")));
})),(function (dep,path,_){
var provides = goog.object.get(dep,"provides");
var requires = goog.object.get(dep,"requires");
var seq__29444 = cljs.core.seq.call(null,provides);
var chunk__29445 = null;
var count__29446 = (0);
var i__29447 = (0);
while(true){
if((i__29447 < count__29446)){
var prov = cljs.core._nth.call(null,chunk__29445,i__29447);
var seq__29456_29468 = cljs.core.seq.call(null,requires);
var chunk__29457_29469 = null;
var count__29458_29470 = (0);
var i__29459_29471 = (0);
while(true){
if((i__29459_29471 < count__29458_29470)){
var req_29472 = cljs.core._nth.call(null,chunk__29457_29469,i__29459_29471);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29472,prov);


var G__29473 = seq__29456_29468;
var G__29474 = chunk__29457_29469;
var G__29475 = count__29458_29470;
var G__29476 = (i__29459_29471 + (1));
seq__29456_29468 = G__29473;
chunk__29457_29469 = G__29474;
count__29458_29470 = G__29475;
i__29459_29471 = G__29476;
continue;
} else {
var temp__5735__auto___29477 = cljs.core.seq.call(null,seq__29456_29468);
if(temp__5735__auto___29477){
var seq__29456_29478__$1 = temp__5735__auto___29477;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29456_29478__$1)){
var c__4556__auto___29479 = cljs.core.chunk_first.call(null,seq__29456_29478__$1);
var G__29480 = cljs.core.chunk_rest.call(null,seq__29456_29478__$1);
var G__29481 = c__4556__auto___29479;
var G__29482 = cljs.core.count.call(null,c__4556__auto___29479);
var G__29483 = (0);
seq__29456_29468 = G__29480;
chunk__29457_29469 = G__29481;
count__29458_29470 = G__29482;
i__29459_29471 = G__29483;
continue;
} else {
var req_29484 = cljs.core.first.call(null,seq__29456_29478__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29484,prov);


var G__29485 = cljs.core.next.call(null,seq__29456_29478__$1);
var G__29486 = null;
var G__29487 = (0);
var G__29488 = (0);
seq__29456_29468 = G__29485;
chunk__29457_29469 = G__29486;
count__29458_29470 = G__29487;
i__29459_29471 = G__29488;
continue;
}
} else {
}
}
break;
}


var G__29489 = seq__29444;
var G__29490 = chunk__29445;
var G__29491 = count__29446;
var G__29492 = (i__29447 + (1));
seq__29444 = G__29489;
chunk__29445 = G__29490;
count__29446 = G__29491;
i__29447 = G__29492;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__29444);
if(temp__5735__auto__){
var seq__29444__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29444__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__29444__$1);
var G__29493 = cljs.core.chunk_rest.call(null,seq__29444__$1);
var G__29494 = c__4556__auto__;
var G__29495 = cljs.core.count.call(null,c__4556__auto__);
var G__29496 = (0);
seq__29444 = G__29493;
chunk__29445 = G__29494;
count__29446 = G__29495;
i__29447 = G__29496;
continue;
} else {
var prov = cljs.core.first.call(null,seq__29444__$1);
var seq__29460_29497 = cljs.core.seq.call(null,requires);
var chunk__29461_29498 = null;
var count__29462_29499 = (0);
var i__29463_29500 = (0);
while(true){
if((i__29463_29500 < count__29462_29499)){
var req_29501 = cljs.core._nth.call(null,chunk__29461_29498,i__29463_29500);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29501,prov);


var G__29502 = seq__29460_29497;
var G__29503 = chunk__29461_29498;
var G__29504 = count__29462_29499;
var G__29505 = (i__29463_29500 + (1));
seq__29460_29497 = G__29502;
chunk__29461_29498 = G__29503;
count__29462_29499 = G__29504;
i__29463_29500 = G__29505;
continue;
} else {
var temp__5735__auto___29506__$1 = cljs.core.seq.call(null,seq__29460_29497);
if(temp__5735__auto___29506__$1){
var seq__29460_29507__$1 = temp__5735__auto___29506__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29460_29507__$1)){
var c__4556__auto___29508 = cljs.core.chunk_first.call(null,seq__29460_29507__$1);
var G__29509 = cljs.core.chunk_rest.call(null,seq__29460_29507__$1);
var G__29510 = c__4556__auto___29508;
var G__29511 = cljs.core.count.call(null,c__4556__auto___29508);
var G__29512 = (0);
seq__29460_29497 = G__29509;
chunk__29461_29498 = G__29510;
count__29462_29499 = G__29511;
i__29463_29500 = G__29512;
continue;
} else {
var req_29513 = cljs.core.first.call(null,seq__29460_29507__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29513,prov);


var G__29514 = cljs.core.next.call(null,seq__29460_29507__$1);
var G__29515 = null;
var G__29516 = (0);
var G__29517 = (0);
seq__29460_29497 = G__29514;
chunk__29461_29498 = G__29515;
count__29462_29499 = G__29516;
i__29463_29500 = G__29517;
continue;
}
} else {
}
}
break;
}


var G__29518 = cljs.core.next.call(null,seq__29444__$1);
var G__29519 = null;
var G__29520 = (0);
var G__29521 = (0);
seq__29444 = G__29518;
chunk__29445 = G__29519;
count__29446 = G__29520;
i__29447 = G__29521;
continue;
}
} else {
return null;
}
}
break;
}
}));
}):(function (){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,(function (deps,path,_){
var seq__29464 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,path));
var chunk__29465 = null;
var count__29466 = (0);
var i__29467 = (0);
while(true){
if((i__29467 < count__29466)){
var prov = cljs.core._nth.call(null,chunk__29465,i__29467);
goog.object.forEach(deps,((function (seq__29464,chunk__29465,count__29466,i__29467,prov,requires){
return (function (___$1,req,___$2){
return figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req,prov);
});})(seq__29464,chunk__29465,count__29466,i__29467,prov,requires))
);


var G__29522 = seq__29464;
var G__29523 = chunk__29465;
var G__29524 = count__29466;
var G__29525 = (i__29467 + (1));
seq__29464 = G__29522;
chunk__29465 = G__29523;
count__29466 = G__29524;
i__29467 = G__29525;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__29464);
if(temp__5735__auto__){
var seq__29464__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29464__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__29464__$1);
var G__29526 = cljs.core.chunk_rest.call(null,seq__29464__$1);
var G__29527 = c__4556__auto__;
var G__29528 = cljs.core.count.call(null,c__4556__auto__);
var G__29529 = (0);
seq__29464 = G__29526;
chunk__29465 = G__29527;
count__29466 = G__29528;
i__29467 = G__29529;
continue;
} else {
var prov = cljs.core.first.call(null,seq__29464__$1);
goog.object.forEach(deps,((function (seq__29464,chunk__29465,count__29466,i__29467,prov,seq__29464__$1,temp__5735__auto__,requires){
return (function (___$1,req,___$2){
return figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req,prov);
});})(seq__29464,chunk__29465,count__29466,i__29467,prov,seq__29464__$1,temp__5735__auto__,requires))
);


var G__29530 = cljs.core.next.call(null,seq__29464__$1);
var G__29531 = null;
var G__29532 = (0);
var G__29533 = (0);
seq__29464 = G__29530;
chunk__29465 = G__29531;
count__29466 = G__29532;
i__29467 = G__29533;
continue;
}
} else {
return null;
}
}
break;
}
}));
}));
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.in_upper_level_QMARK_ = (function figwheel$client$file_reloading$in_upper_level_QMARK_(topo_state,current_depth,dep){
return cljs.core.some.call(null,(function (p__29534){
var vec__29535 = p__29534;
var _ = cljs.core.nth.call(null,vec__29535,(0),null);
var v = cljs.core.nth.call(null,vec__29535,(1),null);
var and__4115__auto__ = v;
if(cljs.core.truth_(and__4115__auto__)){
return v.call(null,dep);
} else {
return and__4115__auto__;
}
}),cljs.core.filter.call(null,(function (p__29538){
var vec__29539 = p__29538;
var k = cljs.core.nth.call(null,vec__29539,(0),null);
var v = cljs.core.nth.call(null,vec__29539,(1),null);
return (k > current_depth);
}),topo_state));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});
var topo_sort_STAR_ = (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__29551_29559 = cljs.core.seq.call(null,deps);
var chunk__29552_29560 = null;
var count__29553_29561 = (0);
var i__29554_29562 = (0);
while(true){
if((i__29554_29562 < count__29553_29561)){
var dep_29563 = cljs.core._nth.call(null,chunk__29552_29560,i__29554_29562);
if(cljs.core.truth_((function (){var and__4115__auto__ = dep_29563;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_29563));
} else {
return and__4115__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_29563,(depth + (1)),state);
} else {
}


var G__29564 = seq__29551_29559;
var G__29565 = chunk__29552_29560;
var G__29566 = count__29553_29561;
var G__29567 = (i__29554_29562 + (1));
seq__29551_29559 = G__29564;
chunk__29552_29560 = G__29565;
count__29553_29561 = G__29566;
i__29554_29562 = G__29567;
continue;
} else {
var temp__5735__auto___29568 = cljs.core.seq.call(null,seq__29551_29559);
if(temp__5735__auto___29568){
var seq__29551_29569__$1 = temp__5735__auto___29568;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29551_29569__$1)){
var c__4556__auto___29570 = cljs.core.chunk_first.call(null,seq__29551_29569__$1);
var G__29571 = cljs.core.chunk_rest.call(null,seq__29551_29569__$1);
var G__29572 = c__4556__auto___29570;
var G__29573 = cljs.core.count.call(null,c__4556__auto___29570);
var G__29574 = (0);
seq__29551_29559 = G__29571;
chunk__29552_29560 = G__29572;
count__29553_29561 = G__29573;
i__29554_29562 = G__29574;
continue;
} else {
var dep_29575 = cljs.core.first.call(null,seq__29551_29569__$1);
if(cljs.core.truth_((function (){var and__4115__auto__ = dep_29575;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_29575));
} else {
return and__4115__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_29575,(depth + (1)),state);
} else {
}


var G__29576 = cljs.core.next.call(null,seq__29551_29569__$1);
var G__29577 = null;
var G__29578 = (0);
var G__29579 = (0);
seq__29551_29559 = G__29576;
chunk__29552_29560 = G__29577;
count__29553_29561 = G__29578;
i__29554_29562 = G__29579;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;
var elim_dups_STAR_ = (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__29555){
var vec__29556 = p__29555;
var seq__29557 = cljs.core.seq.call(null,vec__29556);
var first__29558 = cljs.core.first.call(null,seq__29557);
var seq__29557__$1 = cljs.core.next.call(null,seq__29557);
var x = first__29558;
var xs = seq__29557__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,(function (p1__29542_SHARP_){
return clojure.set.difference.call(null,p1__29542_SHARP_,x);
}),xs)));
}
});
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?(function (ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.debugLoader_.written_,path);

return goog.object.remove(goog.debugLoader_.written_,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
}):(function (ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
}));
figwheel.client.file_reloading.resolve_ns = ((figwheel.client.file_reloading.debug_loader_QMARK_.call(null))?figwheel.client.file_reloading.name__GT_path:(function (p1__29580_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,p1__29580_SHARP_))].join('');
}));
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__29581 = cljs.core.seq.call(null,provides);
var chunk__29582 = null;
var count__29583 = (0);
var i__29584 = (0);
while(true){
if((i__29584 < count__29583)){
var prov = cljs.core._nth.call(null,chunk__29582,i__29584);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__29593_29601 = cljs.core.seq.call(null,requires);
var chunk__29594_29602 = null;
var count__29595_29603 = (0);
var i__29596_29604 = (0);
while(true){
if((i__29596_29604 < count__29595_29603)){
var req_29605 = cljs.core._nth.call(null,chunk__29594_29602,i__29596_29604);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29605,prov);


var G__29606 = seq__29593_29601;
var G__29607 = chunk__29594_29602;
var G__29608 = count__29595_29603;
var G__29609 = (i__29596_29604 + (1));
seq__29593_29601 = G__29606;
chunk__29594_29602 = G__29607;
count__29595_29603 = G__29608;
i__29596_29604 = G__29609;
continue;
} else {
var temp__5735__auto___29610 = cljs.core.seq.call(null,seq__29593_29601);
if(temp__5735__auto___29610){
var seq__29593_29611__$1 = temp__5735__auto___29610;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29593_29611__$1)){
var c__4556__auto___29612 = cljs.core.chunk_first.call(null,seq__29593_29611__$1);
var G__29613 = cljs.core.chunk_rest.call(null,seq__29593_29611__$1);
var G__29614 = c__4556__auto___29612;
var G__29615 = cljs.core.count.call(null,c__4556__auto___29612);
var G__29616 = (0);
seq__29593_29601 = G__29613;
chunk__29594_29602 = G__29614;
count__29595_29603 = G__29615;
i__29596_29604 = G__29616;
continue;
} else {
var req_29617 = cljs.core.first.call(null,seq__29593_29611__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29617,prov);


var G__29618 = cljs.core.next.call(null,seq__29593_29611__$1);
var G__29619 = null;
var G__29620 = (0);
var G__29621 = (0);
seq__29593_29601 = G__29618;
chunk__29594_29602 = G__29619;
count__29595_29603 = G__29620;
i__29596_29604 = G__29621;
continue;
}
} else {
}
}
break;
}


var G__29622 = seq__29581;
var G__29623 = chunk__29582;
var G__29624 = count__29583;
var G__29625 = (i__29584 + (1));
seq__29581 = G__29622;
chunk__29582 = G__29623;
count__29583 = G__29624;
i__29584 = G__29625;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__29581);
if(temp__5735__auto__){
var seq__29581__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29581__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__29581__$1);
var G__29626 = cljs.core.chunk_rest.call(null,seq__29581__$1);
var G__29627 = c__4556__auto__;
var G__29628 = cljs.core.count.call(null,c__4556__auto__);
var G__29629 = (0);
seq__29581 = G__29626;
chunk__29582 = G__29627;
count__29583 = G__29628;
i__29584 = G__29629;
continue;
} else {
var prov = cljs.core.first.call(null,seq__29581__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__29597_29630 = cljs.core.seq.call(null,requires);
var chunk__29598_29631 = null;
var count__29599_29632 = (0);
var i__29600_29633 = (0);
while(true){
if((i__29600_29633 < count__29599_29632)){
var req_29634 = cljs.core._nth.call(null,chunk__29598_29631,i__29600_29633);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29634,prov);


var G__29635 = seq__29597_29630;
var G__29636 = chunk__29598_29631;
var G__29637 = count__29599_29632;
var G__29638 = (i__29600_29633 + (1));
seq__29597_29630 = G__29635;
chunk__29598_29631 = G__29636;
count__29599_29632 = G__29637;
i__29600_29633 = G__29638;
continue;
} else {
var temp__5735__auto___29639__$1 = cljs.core.seq.call(null,seq__29597_29630);
if(temp__5735__auto___29639__$1){
var seq__29597_29640__$1 = temp__5735__auto___29639__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29597_29640__$1)){
var c__4556__auto___29641 = cljs.core.chunk_first.call(null,seq__29597_29640__$1);
var G__29642 = cljs.core.chunk_rest.call(null,seq__29597_29640__$1);
var G__29643 = c__4556__auto___29641;
var G__29644 = cljs.core.count.call(null,c__4556__auto___29641);
var G__29645 = (0);
seq__29597_29630 = G__29642;
chunk__29598_29631 = G__29643;
count__29599_29632 = G__29644;
i__29600_29633 = G__29645;
continue;
} else {
var req_29646 = cljs.core.first.call(null,seq__29597_29640__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_29646,prov);


var G__29647 = cljs.core.next.call(null,seq__29597_29640__$1);
var G__29648 = null;
var G__29649 = (0);
var G__29650 = (0);
seq__29597_29630 = G__29647;
chunk__29598_29631 = G__29648;
count__29599_29632 = G__29649;
i__29600_29633 = G__29650;
continue;
}
} else {
}
}
break;
}


var G__29651 = cljs.core.next.call(null,seq__29581__$1);
var G__29652 = null;
var G__29653 = (0);
var G__29654 = (0);
seq__29581 = G__29651;
chunk__29582 = G__29652;
count__29583 = G__29653;
i__29584 = G__29654;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
(goog.require = figwheel.client.file_reloading.figwheel_require);

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__29655_29659 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__29656_29660 = null;
var count__29657_29661 = (0);
var i__29658_29662 = (0);
while(true){
if((i__29658_29662 < count__29657_29661)){
var ns_29663 = cljs.core._nth.call(null,chunk__29656_29660,i__29658_29662);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_29663);


var G__29664 = seq__29655_29659;
var G__29665 = chunk__29656_29660;
var G__29666 = count__29657_29661;
var G__29667 = (i__29658_29662 + (1));
seq__29655_29659 = G__29664;
chunk__29656_29660 = G__29665;
count__29657_29661 = G__29666;
i__29658_29662 = G__29667;
continue;
} else {
var temp__5735__auto___29668 = cljs.core.seq.call(null,seq__29655_29659);
if(temp__5735__auto___29668){
var seq__29655_29669__$1 = temp__5735__auto___29668;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29655_29669__$1)){
var c__4556__auto___29670 = cljs.core.chunk_first.call(null,seq__29655_29669__$1);
var G__29671 = cljs.core.chunk_rest.call(null,seq__29655_29669__$1);
var G__29672 = c__4556__auto___29670;
var G__29673 = cljs.core.count.call(null,c__4556__auto___29670);
var G__29674 = (0);
seq__29655_29659 = G__29671;
chunk__29656_29660 = G__29672;
count__29657_29661 = G__29673;
i__29658_29662 = G__29674;
continue;
} else {
var ns_29675 = cljs.core.first.call(null,seq__29655_29669__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_29675);


var G__29676 = cljs.core.next.call(null,seq__29655_29669__$1);
var G__29677 = null;
var G__29678 = (0);
var G__29679 = (0);
seq__29655_29659 = G__29676;
chunk__29656_29660 = G__29677;
count__29657_29661 = G__29678;
i__29658_29662 = G__29679;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
(goog.require_figwheel_backup_ = (function (){var or__4126__auto__ = goog.require__;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return goog.require;
}
})());

(goog.isProvided_ = (function (name){
return false;
}));

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

(goog.addDependency_figwheel_backup_ = goog.addDependency);

(goog.addDependency = (function() { 
var G__29680__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__29680 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29681__i = 0, G__29681__a = new Array(arguments.length -  0);
while (G__29681__i < G__29681__a.length) {G__29681__a[G__29681__i] = arguments[G__29681__i + 0]; ++G__29681__i;}
  args = new cljs.core.IndexedSeq(G__29681__a,0,null);
} 
return G__29680__delegate.call(this,args);};
G__29680.cljs$lang$maxFixedArity = 0;
G__29680.cljs$lang$applyTo = (function (arglist__29682){
var args = cljs.core.seq(arglist__29682);
return G__29680__delegate(args);
});
G__29680.cljs$core$IFn$_invoke$arity$variadic = G__29680__delegate;
return G__29680;
})()
);

goog.constructNamespace_("cljs.user");

(goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload);

return (goog.require = figwheel.client.file_reloading.figwheel_require);
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined')){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.gloader = (((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.safeLoad !== 'undefined'))?(function (p1__29683_SHARP_,p2__29684_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__29683_SHARP_)),p2__29684_SHARP_);
}):(((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.load !== 'undefined'))?(function (p1__29685_SHARP_,p2__29686_SHARP_){
return goog.net.jsloader.load(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__29685_SHARP_),p2__29686_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__29687 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__29687.addCallback((function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
}));

G__29687.addErrback((function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
}));

return G__29687;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e29688){if((e29688 instanceof Error)){
var e = e29688;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e29688;

}
}})());
});
goog.exportSymbol('figwheel.client.file_reloading.worker_import_script', figwheel.client.file_reloading.worker_import_script);
figwheel.client.file_reloading.create_node_script_import_fn = (function figwheel$client$file_reloading$create_node_script_import_fn(){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,(function (v,k,o){
return goog.string.endsWith(k,util_pattern);
}));
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e29689){if((e29689 instanceof Error)){
var e = e29689;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e29689;

}
}})());
});
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__29690 = cljs.core._EQ_;
var expr__29691 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__29690.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__29691))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__29690.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__29691))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__29690.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__29691))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return (function (a,b){
throw "Reload not defined for this platform";
});
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__29693,callback){
var map__29694 = p__29693;
var map__29694__$1 = (((((!((map__29694 == null))))?(((((map__29694.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29694.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29694):map__29694);
var file_msg = map__29694__$1;
var request_url = cljs.core.get.call(null,map__29694__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__4126__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,(function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
}));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_chan !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined')){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined')){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),(function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
}));

return out;
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reloader_loop !== 'undefined')){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__27314__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27315__auto__ = (function (){var switch__27219__auto__ = (function (state_29732){
var state_val_29733 = (state_29732[(1)]);
if((state_val_29733 === (7))){
var inst_29728 = (state_29732[(2)]);
var state_29732__$1 = state_29732;
var statearr_29734_29760 = state_29732__$1;
(statearr_29734_29760[(2)] = inst_29728);

(statearr_29734_29760[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29733 === (1))){
var state_29732__$1 = state_29732;
var statearr_29735_29761 = state_29732__$1;
(statearr_29735_29761[(2)] = null);

(statearr_29735_29761[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29733 === (4))){
var inst_29698 = (state_29732[(7)]);
var inst_29698__$1 = (state_29732[(2)]);
var state_29732__$1 = (function (){var statearr_29736 = state_29732;
(statearr_29736[(7)] = inst_29698__$1);

return statearr_29736;
})();
if(cljs.core.truth_(inst_29698__$1)){
var statearr_29737_29762 = state_29732__$1;
(statearr_29737_29762[(1)] = (5));

} else {
var statearr_29738_29763 = state_29732__$1;
(statearr_29738_29763[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29733 === (15))){
var inst_29713 = (state_29732[(8)]);
var inst_29711 = (state_29732[(9)]);
var inst_29715 = inst_29713.call(null,inst_29711);
var state_29732__$1 = state_29732;
var statearr_29739_29764 = state_29732__$1;
(statearr_29739_29764[(2)] = inst_29715);

(statearr_29739_29764[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29733 === (13))){
var inst_29722 = (state_29732[(2)]);
var state_29732__$1 = state_29732;
var statearr_29740_29765 = state_29732__$1;
(statearr_29740_29765[(2)] = inst_29722);

(statearr_29740_29765[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29733 === (6))){
var state_29732__$1 = state_29732;
var statearr_29741_29766 = state_29732__$1;
(statearr_29741_29766[(2)] = null);

(statearr_29741_29766[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29733 === (17))){
var inst_29719 = (state_29732[(2)]);
var state_29732__$1 = state_29732;
var statearr_29742_29767 = state_29732__$1;
(statearr_29742_29767[(2)] = inst_29719);

(statearr_29742_29767[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29733 === (3))){
var inst_29730 = (state_29732[(2)]);
var state_29732__$1 = state_29732;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29732__$1,inst_29730);
} else {
if((state_val_29733 === (12))){
var state_29732__$1 = state_29732;
var statearr_29743_29768 = state_29732__$1;
(statearr_29743_29768[(2)] = null);

(statearr_29743_29768[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29733 === (2))){
var state_29732__$1 = state_29732;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29732__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_29733 === (11))){
var inst_29703 = (state_29732[(10)]);
var inst_29709 = figwheel.client.file_reloading.blocking_load.call(null,inst_29703);
var state_29732__$1 = state_29732;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29732__$1,(14),inst_29709);
} else {
if((state_val_29733 === (9))){
var inst_29703 = (state_29732[(10)]);
var state_29732__$1 = state_29732;
if(cljs.core.truth_(inst_29703)){
var statearr_29744_29769 = state_29732__$1;
(statearr_29744_29769[(1)] = (11));

} else {
var statearr_29745_29770 = state_29732__$1;
(statearr_29745_29770[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29733 === (5))){
var inst_29698 = (state_29732[(7)]);
var inst_29704 = (state_29732[(11)]);
var inst_29703 = cljs.core.nth.call(null,inst_29698,(0),null);
var inst_29704__$1 = cljs.core.nth.call(null,inst_29698,(1),null);
var state_29732__$1 = (function (){var statearr_29746 = state_29732;
(statearr_29746[(10)] = inst_29703);

(statearr_29746[(11)] = inst_29704__$1);

return statearr_29746;
})();
if(cljs.core.truth_(inst_29704__$1)){
var statearr_29747_29771 = state_29732__$1;
(statearr_29747_29771[(1)] = (8));

} else {
var statearr_29748_29772 = state_29732__$1;
(statearr_29748_29772[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29733 === (14))){
var inst_29713 = (state_29732[(8)]);
var inst_29703 = (state_29732[(10)]);
var inst_29711 = (state_29732[(2)]);
var inst_29712 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_29713__$1 = cljs.core.get.call(null,inst_29712,inst_29703);
var state_29732__$1 = (function (){var statearr_29749 = state_29732;
(statearr_29749[(8)] = inst_29713__$1);

(statearr_29749[(9)] = inst_29711);

return statearr_29749;
})();
if(cljs.core.truth_(inst_29713__$1)){
var statearr_29750_29773 = state_29732__$1;
(statearr_29750_29773[(1)] = (15));

} else {
var statearr_29751_29774 = state_29732__$1;
(statearr_29751_29774[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29733 === (16))){
var inst_29711 = (state_29732[(9)]);
var inst_29717 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_29711);
var state_29732__$1 = state_29732;
var statearr_29752_29775 = state_29732__$1;
(statearr_29752_29775[(2)] = inst_29717);

(statearr_29752_29775[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29733 === (10))){
var inst_29724 = (state_29732[(2)]);
var state_29732__$1 = (function (){var statearr_29753 = state_29732;
(statearr_29753[(12)] = inst_29724);

return statearr_29753;
})();
var statearr_29754_29776 = state_29732__$1;
(statearr_29754_29776[(2)] = null);

(statearr_29754_29776[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29733 === (8))){
var inst_29704 = (state_29732[(11)]);
var inst_29706 = eval(inst_29704);
var state_29732__$1 = state_29732;
var statearr_29755_29777 = state_29732__$1;
(statearr_29755_29777[(2)] = inst_29706);

(statearr_29755_29777[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var figwheel$client$file_reloading$state_machine__27220__auto__ = null;
var figwheel$client$file_reloading$state_machine__27220__auto____0 = (function (){
var statearr_29756 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29756[(0)] = figwheel$client$file_reloading$state_machine__27220__auto__);

(statearr_29756[(1)] = (1));

return statearr_29756;
});
var figwheel$client$file_reloading$state_machine__27220__auto____1 = (function (state_29732){
while(true){
var ret_value__27221__auto__ = (function (){try{while(true){
var result__27222__auto__ = switch__27219__auto__.call(null,state_29732);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27222__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27222__auto__;
}
break;
}
}catch (e29757){if((e29757 instanceof Object)){
var ex__27223__auto__ = e29757;
var statearr_29758_29778 = state_29732;
(statearr_29758_29778[(5)] = ex__27223__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29732);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29757;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27221__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29779 = state_29732;
state_29732 = G__29779;
continue;
} else {
return ret_value__27221__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__27220__auto__ = function(state_29732){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__27220__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__27220__auto____1.call(this,state_29732);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__27220__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__27220__auto____0;
figwheel$client$file_reloading$state_machine__27220__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__27220__auto____1;
return figwheel$client$file_reloading$state_machine__27220__auto__;
})()
})();
var state__27316__auto__ = (function (){var statearr_29759 = f__27315__auto__.call(null);
(statearr_29759[(6)] = c__27314__auto__);

return statearr_29759;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27316__auto__);
}));

return c__27314__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__29781 = arguments.length;
switch (G__29781) {
case 1:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1 = (function (url){
return figwheel.client.file_reloading.queued_file_reload.call(null,url,null);
}));

(figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2 = (function (url,opt_source_text){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [url,opt_source_text], null));
}));

(figwheel.client.file_reloading.queued_file_reload.cljs$lang$maxFixedArity = 2);

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__29783,callback){
var map__29784 = p__29783;
var map__29784__$1 = (((((!((map__29784 == null))))?(((((map__29784.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29784.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29784):map__29784);
var file_msg = map__29784__$1;
var namespace = cljs.core.get.call(null,map__29784__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,(function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
}));

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__29786){
var map__29787 = p__29786;
var map__29787__$1 = (((((!((map__29787 == null))))?(((((map__29787.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29787.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29787):map__29787);
var file_msg = map__29787__$1;
var namespace = cljs.core.get.call(null,map__29787__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return (!((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null)));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__29789){
var map__29790 = p__29789;
var map__29790__$1 = (((((!((map__29790 == null))))?(((((map__29790.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29790.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29790):map__29790);
var file_msg = map__29790__$1;
var namespace = cljs.core.get.call(null,map__29790__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if(cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg))){
var or__4126__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
var or__4126__auto____$2 = figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
if(cljs.core.truth_(or__4126__auto____$2)){
return or__4126__auto____$2;
} else {
return figwheel.client.file_reloading.ns_exists_QMARK_.call(null,namespace);
}
}
}
} else {
return false;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__29792,callback){
var map__29793 = p__29792;
var map__29793__$1 = (((((!((map__29793 == null))))?(((((map__29793.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29793.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29793):map__29793);
var file_msg = map__29793__$1;
var request_url = cljs.core.get.call(null,map__29793__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__29793__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,["Figwheel: Not trying to load file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,(function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
}));

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__27314__auto___29843 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27315__auto__ = (function (){var switch__27219__auto__ = (function (state_29828){
var state_val_29829 = (state_29828[(1)]);
if((state_val_29829 === (1))){
var inst_29802 = cljs.core.seq.call(null,files);
var inst_29803 = cljs.core.first.call(null,inst_29802);
var inst_29804 = cljs.core.next.call(null,inst_29802);
var inst_29805 = files;
var state_29828__$1 = (function (){var statearr_29830 = state_29828;
(statearr_29830[(7)] = inst_29805);

(statearr_29830[(8)] = inst_29804);

(statearr_29830[(9)] = inst_29803);

return statearr_29830;
})();
var statearr_29831_29844 = state_29828__$1;
(statearr_29831_29844[(2)] = null);

(statearr_29831_29844[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29829 === (2))){
var inst_29805 = (state_29828[(7)]);
var inst_29811 = (state_29828[(10)]);
var inst_29810 = cljs.core.seq.call(null,inst_29805);
var inst_29811__$1 = cljs.core.first.call(null,inst_29810);
var inst_29812 = cljs.core.next.call(null,inst_29810);
var inst_29813 = (inst_29811__$1 == null);
var inst_29814 = cljs.core.not.call(null,inst_29813);
var state_29828__$1 = (function (){var statearr_29832 = state_29828;
(statearr_29832[(11)] = inst_29812);

(statearr_29832[(10)] = inst_29811__$1);

return statearr_29832;
})();
if(inst_29814){
var statearr_29833_29845 = state_29828__$1;
(statearr_29833_29845[(1)] = (4));

} else {
var statearr_29834_29846 = state_29828__$1;
(statearr_29834_29846[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29829 === (3))){
var inst_29826 = (state_29828[(2)]);
var state_29828__$1 = state_29828;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29828__$1,inst_29826);
} else {
if((state_val_29829 === (4))){
var inst_29811 = (state_29828[(10)]);
var inst_29816 = figwheel.client.file_reloading.reload_js_file.call(null,inst_29811);
var state_29828__$1 = state_29828;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29828__$1,(7),inst_29816);
} else {
if((state_val_29829 === (5))){
var inst_29822 = cljs.core.async.close_BANG_.call(null,out);
var state_29828__$1 = state_29828;
var statearr_29835_29847 = state_29828__$1;
(statearr_29835_29847[(2)] = inst_29822);

(statearr_29835_29847[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29829 === (6))){
var inst_29824 = (state_29828[(2)]);
var state_29828__$1 = state_29828;
var statearr_29836_29848 = state_29828__$1;
(statearr_29836_29848[(2)] = inst_29824);

(statearr_29836_29848[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29829 === (7))){
var inst_29812 = (state_29828[(11)]);
var inst_29818 = (state_29828[(2)]);
var inst_29819 = cljs.core.async.put_BANG_.call(null,out,inst_29818);
var inst_29805 = inst_29812;
var state_29828__$1 = (function (){var statearr_29837 = state_29828;
(statearr_29837[(7)] = inst_29805);

(statearr_29837[(12)] = inst_29819);

return statearr_29837;
})();
var statearr_29838_29849 = state_29828__$1;
(statearr_29838_29849[(2)] = null);

(statearr_29838_29849[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__27220__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__27220__auto____0 = (function (){
var statearr_29839 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29839[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__27220__auto__);

(statearr_29839[(1)] = (1));

return statearr_29839;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__27220__auto____1 = (function (state_29828){
while(true){
var ret_value__27221__auto__ = (function (){try{while(true){
var result__27222__auto__ = switch__27219__auto__.call(null,state_29828);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27222__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27222__auto__;
}
break;
}
}catch (e29840){if((e29840 instanceof Object)){
var ex__27223__auto__ = e29840;
var statearr_29841_29850 = state_29828;
(statearr_29841_29850[(5)] = ex__27223__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29828);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29840;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27221__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29851 = state_29828;
state_29828 = G__29851;
continue;
} else {
return ret_value__27221__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__27220__auto__ = function(state_29828){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__27220__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__27220__auto____1.call(this,state_29828);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__27220__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__27220__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__27220__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__27220__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__27220__auto__;
})()
})();
var state__27316__auto__ = (function (){var statearr_29842 = f__27315__auto__.call(null);
(statearr_29842[(6)] = c__27314__auto___29843);

return statearr_29842;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27316__auto__);
}));


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__29852,opts){
var map__29853 = p__29852;
var map__29853__$1 = (((((!((map__29853 == null))))?(((((map__29853.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29853.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29853):map__29853);
var eval_body = cljs.core.get.call(null,map__29853__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__29853__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__4115__auto__ = eval_body;
if(cljs.core.truth_(and__4115__auto__)){
return typeof eval_body === 'string';
} else {
return and__4115__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e29855){var e = e29855;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,(function (n){
var temp__5733__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__29856_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__29856_SHARP_),n);
}),files));
if(cljs.core.truth_(temp__5733__auto__)){
var file_msg = temp__5733__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
}),deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__29857){
var vec__29858 = p__29857;
var k = cljs.core.nth.call(null,vec__29858,(0),null);
var v = cljs.core.nth.call(null,vec__29858,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__29861){
var vec__29862 = p__29861;
var k = cljs.core.nth.call(null,vec__29862,(0),null);
var v = cljs.core.nth.call(null,vec__29862,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__29868,p__29869){
var map__29870 = p__29868;
var map__29870__$1 = (((((!((map__29870 == null))))?(((((map__29870.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29870.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29870):map__29870);
var opts = map__29870__$1;
var before_jsload = cljs.core.get.call(null,map__29870__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__29870__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__29870__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__29871 = p__29869;
var map__29871__$1 = (((((!((map__29871 == null))))?(((((map__29871.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29871.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29871):map__29871);
var msg = map__29871__$1;
var files = cljs.core.get.call(null,map__29871__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__29871__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__29871__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__27314__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27315__auto__ = (function (){var switch__27219__auto__ = (function (state_30025){
var state_val_30026 = (state_30025[(1)]);
if((state_val_30026 === (7))){
var inst_29888 = (state_30025[(7)]);
var inst_29887 = (state_30025[(8)]);
var inst_29885 = (state_30025[(9)]);
var inst_29886 = (state_30025[(10)]);
var inst_29893 = cljs.core._nth.call(null,inst_29886,inst_29888);
var inst_29894 = figwheel.client.file_reloading.eval_body.call(null,inst_29893,opts);
var inst_29895 = (inst_29888 + (1));
var tmp30027 = inst_29887;
var tmp30028 = inst_29885;
var tmp30029 = inst_29886;
var inst_29885__$1 = tmp30028;
var inst_29886__$1 = tmp30029;
var inst_29887__$1 = tmp30027;
var inst_29888__$1 = inst_29895;
var state_30025__$1 = (function (){var statearr_30030 = state_30025;
(statearr_30030[(7)] = inst_29888__$1);

(statearr_30030[(8)] = inst_29887__$1);

(statearr_30030[(9)] = inst_29885__$1);

(statearr_30030[(11)] = inst_29894);

(statearr_30030[(10)] = inst_29886__$1);

return statearr_30030;
})();
var statearr_30031_30114 = state_30025__$1;
(statearr_30031_30114[(2)] = null);

(statearr_30031_30114[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30026 === (20))){
var inst_29928 = (state_30025[(12)]);
var inst_29936 = figwheel.client.file_reloading.sort_files.call(null,inst_29928);
var state_30025__$1 = state_30025;
var statearr_30032_30115 = state_30025__$1;
(statearr_30032_30115[(2)] = inst_29936);

(statearr_30032_30115[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30026 === (27))){
var state_30025__$1 = state_30025;
var statearr_30033_30116 = state_30025__$1;
(statearr_30033_30116[(2)] = null);

(statearr_30033_30116[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30026 === (1))){
var inst_29877 = (state_30025[(13)]);
var inst_29874 = before_jsload.call(null,files);
var inst_29875 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_29876 = (function (){return (function (p1__29865_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__29865_SHARP_);
});
})();
var inst_29877__$1 = cljs.core.filter.call(null,inst_29876,files);
var inst_29878 = cljs.core.not_empty.call(null,inst_29877__$1);
var state_30025__$1 = (function (){var statearr_30034 = state_30025;
(statearr_30034[(14)] = inst_29875);

(statearr_30034[(15)] = inst_29874);

(statearr_30034[(13)] = inst_29877__$1);

return statearr_30034;
})();
if(cljs.core.truth_(inst_29878)){
var statearr_30035_30117 = state_30025__$1;
(statearr_30035_30117[(1)] = (2));

} else {
var statearr_30036_30118 = state_30025__$1;
(statearr_30036_30118[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30026 === (24))){
var state_30025__$1 = state_30025;
var statearr_30037_30119 = state_30025__$1;
(statearr_30037_30119[(2)] = null);

(statearr_30037_30119[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30026 === (39))){
var inst_29978 = (state_30025[(16)]);
var state_30025__$1 = state_30025;
var statearr_30038_30120 = state_30025__$1;
(statearr_30038_30120[(2)] = inst_29978);

(statearr_30038_30120[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30026 === (46))){
var inst_30020 = (state_30025[(2)]);
var state_30025__$1 = state_30025;
var statearr_30039_30121 = state_30025__$1;
(statearr_30039_30121[(2)] = inst_30020);

(statearr_30039_30121[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30026 === (4))){
var inst_29922 = (state_30025[(2)]);
var inst_29923 = cljs.core.List.EMPTY;
var inst_29924 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_29923);
var inst_29925 = (function (){return (function (p1__29866_SHARP_){
var and__4115__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__29866_SHARP_);
if(cljs.core.truth_(and__4115__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__29866_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__29866_SHARP_))));
} else {
return and__4115__auto__;
}
});
})();
var inst_29926 = cljs.core.filter.call(null,inst_29925,files);
var inst_29927 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_29928 = cljs.core.concat.call(null,inst_29926,inst_29927);
var state_30025__$1 = (function (){var statearr_30040 = state_30025;
(statearr_30040[(17)] = inst_29922);

(statearr_30040[(12)] = inst_29928);

(statearr_30040[(18)] = inst_29924);

return statearr_30040;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_30041_30122 = state_30025__$1;
(statearr_30041_30122[(1)] = (16));

} else {
var statearr_30042_30123 = state_30025__$1;
(statearr_30042_30123[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30026 === (15))){
var inst_29912 = (state_30025[(2)]);
var state_30025__$1 = state_30025;
var statearr_30043_30124 = state_30025__$1;
(statearr_30043_30124[(2)] = inst_29912);

(statearr_30043_30124[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30026 === (21))){
var inst_29938 = (state_30025[(19)]);
var inst_29938__$1 = (state_30025[(2)]);
var inst_29939 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_29938__$1);
var state_30025__$1 = (function (){var statearr_30044 = state_30025;
(statearr_30044[(19)] = inst_29938__$1);

return statearr_30044;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30025__$1,(22),inst_29939);
} else {
if((state_val_30026 === (31))){
var inst_30023 = (state_30025[(2)]);
var state_30025__$1 = state_30025;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30025__$1,inst_30023);
} else {
if((state_val_30026 === (32))){
var inst_29978 = (state_30025[(16)]);
var inst_29983 = inst_29978.cljs$lang$protocol_mask$partition0$;
var inst_29984 = (inst_29983 & (64));
var inst_29985 = inst_29978.cljs$core$ISeq$;
var inst_29986 = (cljs.core.PROTOCOL_SENTINEL === inst_29985);
var inst_29987 = ((inst_29984) || (inst_29986));
var state_30025__$1 = state_30025;
if(cljs.core.truth_(inst_29987)){
var statearr_30045_30125 = state_30025__$1;
(statearr_30045_30125[(1)] = (35));

} else {
var statearr_30046_30126 = state_30025__$1;
(statearr_30046_30126[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30026 === (40))){
var inst_30000 = (state_30025[(20)]);
var inst_29999 = (state_30025[(2)]);
var inst_30000__$1 = cljs.core.get.call(null,inst_29999,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_30001 = cljs.core.get.call(null,inst_29999,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_30002 = cljs.core.not_empty.call(null,inst_30000__$1);
var state_30025__$1 = (function (){var statearr_30047 = state_30025;
(statearr_30047[(21)] = inst_30001);

(statearr_30047[(20)] = inst_30000__$1);

return statearr_30047;
})();
if(cljs.core.truth_(inst_30002)){
var statearr_30048_30127 = state_30025__$1;
(statearr_30048_30127[(1)] = (41));

} else {
var statearr_30049_30128 = state_30025__$1;
(statearr_30049_30128[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30026 === (33))){
var state_30025__$1 = state_30025;
var statearr_30050_30129 = state_30025__$1;
(statearr_30050_30129[(2)] = false);

(statearr_30050_30129[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30026 === (13))){
var inst_29898 = (state_30025[(22)]);
var inst_29902 = cljs.core.chunk_first.call(null,inst_29898);
var inst_29903 = cljs.core.chunk_rest.call(null,inst_29898);
var inst_29904 = cljs.core.count.call(null,inst_29902);
var inst_29885 = inst_29903;
var inst_29886 = inst_29902;
var inst_29887 = inst_29904;
var inst_29888 = (0);
var state_30025__$1 = (function (){var statearr_30051 = state_30025;
(statearr_30051[(7)] = inst_29888);

(statearr_30051[(8)] = inst_29887);

(statearr_30051[(9)] = inst_29885);

(statearr_30051[(10)] = inst_29886);

return statearr_30051;
})();
var statearr_30052_30130 = state_30025__$1;
(statearr_30052_30130[(2)] = null);

(statearr_30052_30130[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30026 === (22))){
var inst_29946 = (state_30025[(23)]);
var inst_29941 = (state_30025[(24)]);
var inst_29938 = (state_30025[(19)]);
var inst_29942 = (state_30025[(25)]);
var inst_29941__$1 = (state_30025[(2)]);
var inst_29942__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_29941__$1);
var inst_29943 = (function (){var all_files = inst_29938;
var res_SINGLEQUOTE_ = inst_29941__$1;
var res = inst_29942__$1;
return (function (p1__29867_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__29867_SHARP_));
});
})();
var inst_29944 = cljs.core.filter.call(null,inst_29943,inst_29941__$1);
var inst_29945 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_29946__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_29945);
var inst_29947 = cljs.core.not_empty.call(null,inst_29946__$1);
var state_30025__$1 = (function (){var statearr_30053 = state_30025;
(statearr_30053[(23)] = inst_29946__$1);

(statearr_30053[(24)] = inst_29941__$1);

(statearr_30053[(26)] = inst_29944);

(statearr_30053[(25)] = inst_29942__$1);

return statearr_30053;
})();
if(cljs.core.truth_(inst_29947)){
var statearr_30054_30131 = state_30025__$1;
(statearr_30054_30131[(1)] = (23));

} else {
var statearr_30055_30132 = state_30025__$1;
(statearr_30055_30132[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30026 === (36))){
var state_30025__$1 = state_30025;
var statearr_30056_30133 = state_30025__$1;
(statearr_30056_30133[(2)] = false);

(statearr_30056_30133[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30026 === (41))){
var inst_30000 = (state_30025[(20)]);
var inst_30004 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_30005 = cljs.core.map.call(null,inst_30004,inst_30000);
var inst_30006 = cljs.core.pr_str.call(null,inst_30005);
var inst_30007 = ["figwheel-no-load meta-data: ",inst_30006].join('');
var inst_30008 = figwheel.client.utils.log.call(null,inst_30007);
var state_30025__$1 = state_30025;
var statearr_30057_30134 = state_30025__$1;
(statearr_30057_30134[(2)] = inst_30008);

(statearr_30057_30134[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30026 === (43))){
var inst_30001 = (state_30025[(21)]);
var inst_30011 = (state_30025[(2)]);
var inst_30012 = cljs.core.not_empty.call(null,inst_30001);
var state_30025__$1 = (function (){var statearr_30058 = state_30025;
(statearr_30058[(27)] = inst_30011);

return statearr_30058;
})();
if(cljs.core.truth_(inst_30012)){
var statearr_30059_30135 = state_30025__$1;
(statearr_30059_30135[(1)] = (44));

} else {
var statearr_30060_30136 = state_30025__$1;
(statearr_30060_30136[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30026 === (29))){
var inst_29946 = (state_30025[(23)]);
var inst_29941 = (state_30025[(24)]);
var inst_29944 = (state_30025[(26)]);
var inst_29938 = (state_30025[(19)]);
var inst_29942 = (state_30025[(25)]);
var inst_29978 = (state_30025[(16)]);
var inst_29974 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_29977 = (function (){var all_files = inst_29938;
var res_SINGLEQUOTE_ = inst_29941;
var res = inst_29942;
var files_not_loaded = inst_29944;
var dependencies_that_loaded = inst_29946;
return (function (p__29976){
var map__30061 = p__29976;
var map__30061__$1 = (((((!((map__30061 == null))))?(((((map__30061.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30061.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30061):map__30061);
var namespace = cljs.core.get.call(null,map__30061__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
})();
var inst_29978__$1 = cljs.core.group_by.call(null,inst_29977,inst_29944);
var inst_29980 = (inst_29978__$1 == null);
var inst_29981 = cljs.core.not.call(null,inst_29980);
var state_30025__$1 = (function (){var statearr_30063 = state_30025;
(statearr_30063[(16)] = inst_29978__$1);

(statearr_30063[(28)] = inst_29974);

return statearr_30063;
})();
if(inst_29981){
var statearr_30064_30137 = state_30025__$1;
(statearr_30064_30137[(1)] = (32));

} else {
var statearr_30065_30138 = state_30025__$1;
(statearr_30065_30138[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30026 === (44))){
var inst_30001 = (state_30025[(21)]);
var inst_30014 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_30001);
var inst_30015 = cljs.core.pr_str.call(null,inst_30014);
var inst_30016 = ["not required: ",inst_30015].join('');
var inst_30017 = figwheel.client.utils.log.call(null,inst_30016);
var state_30025__$1 = state_30025;
var statearr_30066_30139 = state_30025__$1;
(statearr_30066_30139[(2)] = inst_30017);

(statearr_30066_30139[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30026 === (6))){
var inst_29919 = (state_30025[(2)]);
var state_30025__$1 = state_30025;
var statearr_30067_30140 = state_30025__$1;
(statearr_30067_30140[(2)] = inst_29919);

(statearr_30067_30140[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30026 === (28))){
var inst_29944 = (state_30025[(26)]);
var inst_29971 = (state_30025[(2)]);
var inst_29972 = cljs.core.not_empty.call(null,inst_29944);
var state_30025__$1 = (function (){var statearr_30068 = state_30025;
(statearr_30068[(29)] = inst_29971);

return statearr_30068;
})();
if(cljs.core.truth_(inst_29972)){
var statearr_30069_30141 = state_30025__$1;
(statearr_30069_30141[(1)] = (29));

} else {
var statearr_30070_30142 = state_30025__$1;
(statearr_30070_30142[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30026 === (25))){
var inst_29942 = (state_30025[(25)]);
var inst_29958 = (state_30025[(2)]);
var inst_29959 = cljs.core.not_empty.call(null,inst_29942);
var state_30025__$1 = (function (){var statearr_30071 = state_30025;
(statearr_30071[(30)] = inst_29958);

return statearr_30071;
})();
if(cljs.core.truth_(inst_29959)){
var statearr_30072_30143 = state_30025__$1;
(statearr_30072_30143[(1)] = (26));

} else {
var statearr_30073_30144 = state_30025__$1;
(statearr_30073_30144[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30026 === (34))){
var inst_29994 = (state_30025[(2)]);
var state_30025__$1 = state_30025;
if(cljs.core.truth_(inst_29994)){
var statearr_30074_30145 = state_30025__$1;
(statearr_30074_30145[(1)] = (38));

} else {
var statearr_30075_30146 = state_30025__$1;
(statearr_30075_30146[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30026 === (17))){
var state_30025__$1 = state_30025;
var statearr_30076_30147 = state_30025__$1;
(statearr_30076_30147[(2)] = recompile_dependents);

(statearr_30076_30147[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30026 === (3))){
var state_30025__$1 = state_30025;
var statearr_30077_30148 = state_30025__$1;
(statearr_30077_30148[(2)] = null);

(statearr_30077_30148[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30026 === (12))){
var inst_29915 = (state_30025[(2)]);
var state_30025__$1 = state_30025;
var statearr_30078_30149 = state_30025__$1;
(statearr_30078_30149[(2)] = inst_29915);

(statearr_30078_30149[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30026 === (2))){
var inst_29877 = (state_30025[(13)]);
var inst_29884 = cljs.core.seq.call(null,inst_29877);
var inst_29885 = inst_29884;
var inst_29886 = null;
var inst_29887 = (0);
var inst_29888 = (0);
var state_30025__$1 = (function (){var statearr_30079 = state_30025;
(statearr_30079[(7)] = inst_29888);

(statearr_30079[(8)] = inst_29887);

(statearr_30079[(9)] = inst_29885);

(statearr_30079[(10)] = inst_29886);

return statearr_30079;
})();
var statearr_30080_30150 = state_30025__$1;
(statearr_30080_30150[(2)] = null);

(statearr_30080_30150[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30026 === (23))){
var inst_29946 = (state_30025[(23)]);
var inst_29941 = (state_30025[(24)]);
var inst_29944 = (state_30025[(26)]);
var inst_29938 = (state_30025[(19)]);
var inst_29942 = (state_30025[(25)]);
var inst_29949 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_29951 = (function (){var all_files = inst_29938;
var res_SINGLEQUOTE_ = inst_29941;
var res = inst_29942;
var files_not_loaded = inst_29944;
var dependencies_that_loaded = inst_29946;
return (function (p__29950){
var map__30081 = p__29950;
var map__30081__$1 = (((((!((map__30081 == null))))?(((((map__30081.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30081.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30081):map__30081);
var request_url = cljs.core.get.call(null,map__30081__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
})();
var inst_29952 = cljs.core.reverse.call(null,inst_29946);
var inst_29953 = cljs.core.map.call(null,inst_29951,inst_29952);
var inst_29954 = cljs.core.pr_str.call(null,inst_29953);
var inst_29955 = figwheel.client.utils.log.call(null,inst_29954);
var state_30025__$1 = (function (){var statearr_30083 = state_30025;
(statearr_30083[(31)] = inst_29949);

return statearr_30083;
})();
var statearr_30084_30151 = state_30025__$1;
(statearr_30084_30151[(2)] = inst_29955);

(statearr_30084_30151[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30026 === (35))){
var state_30025__$1 = state_30025;
var statearr_30085_30152 = state_30025__$1;
(statearr_30085_30152[(2)] = true);

(statearr_30085_30152[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30026 === (19))){
var inst_29928 = (state_30025[(12)]);
var inst_29934 = figwheel.client.file_reloading.expand_files.call(null,inst_29928);
var state_30025__$1 = state_30025;
var statearr_30086_30153 = state_30025__$1;
(statearr_30086_30153[(2)] = inst_29934);

(statearr_30086_30153[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30026 === (11))){
var state_30025__$1 = state_30025;
var statearr_30087_30154 = state_30025__$1;
(statearr_30087_30154[(2)] = null);

(statearr_30087_30154[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30026 === (9))){
var inst_29917 = (state_30025[(2)]);
var state_30025__$1 = state_30025;
var statearr_30088_30155 = state_30025__$1;
(statearr_30088_30155[(2)] = inst_29917);

(statearr_30088_30155[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30026 === (5))){
var inst_29888 = (state_30025[(7)]);
var inst_29887 = (state_30025[(8)]);
var inst_29890 = (inst_29888 < inst_29887);
var inst_29891 = inst_29890;
var state_30025__$1 = state_30025;
if(cljs.core.truth_(inst_29891)){
var statearr_30089_30156 = state_30025__$1;
(statearr_30089_30156[(1)] = (7));

} else {
var statearr_30090_30157 = state_30025__$1;
(statearr_30090_30157[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30026 === (14))){
var inst_29898 = (state_30025[(22)]);
var inst_29907 = cljs.core.first.call(null,inst_29898);
var inst_29908 = figwheel.client.file_reloading.eval_body.call(null,inst_29907,opts);
var inst_29909 = cljs.core.next.call(null,inst_29898);
var inst_29885 = inst_29909;
var inst_29886 = null;
var inst_29887 = (0);
var inst_29888 = (0);
var state_30025__$1 = (function (){var statearr_30091 = state_30025;
(statearr_30091[(7)] = inst_29888);

(statearr_30091[(8)] = inst_29887);

(statearr_30091[(9)] = inst_29885);

(statearr_30091[(32)] = inst_29908);

(statearr_30091[(10)] = inst_29886);

return statearr_30091;
})();
var statearr_30092_30158 = state_30025__$1;
(statearr_30092_30158[(2)] = null);

(statearr_30092_30158[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30026 === (45))){
var state_30025__$1 = state_30025;
var statearr_30093_30159 = state_30025__$1;
(statearr_30093_30159[(2)] = null);

(statearr_30093_30159[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30026 === (26))){
var inst_29946 = (state_30025[(23)]);
var inst_29941 = (state_30025[(24)]);
var inst_29944 = (state_30025[(26)]);
var inst_29938 = (state_30025[(19)]);
var inst_29942 = (state_30025[(25)]);
var inst_29961 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_29963 = (function (){var all_files = inst_29938;
var res_SINGLEQUOTE_ = inst_29941;
var res = inst_29942;
var files_not_loaded = inst_29944;
var dependencies_that_loaded = inst_29946;
return (function (p__29962){
var map__30094 = p__29962;
var map__30094__$1 = (((((!((map__30094 == null))))?(((((map__30094.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30094.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30094):map__30094);
var namespace = cljs.core.get.call(null,map__30094__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__30094__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
})();
var inst_29964 = cljs.core.map.call(null,inst_29963,inst_29942);
var inst_29965 = cljs.core.pr_str.call(null,inst_29964);
var inst_29966 = figwheel.client.utils.log.call(null,inst_29965);
var inst_29967 = (function (){var all_files = inst_29938;
var res_SINGLEQUOTE_ = inst_29941;
var res = inst_29942;
var files_not_loaded = inst_29944;
var dependencies_that_loaded = inst_29946;
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
})();
var inst_29968 = setTimeout(inst_29967,(10));
var state_30025__$1 = (function (){var statearr_30096 = state_30025;
(statearr_30096[(33)] = inst_29966);

(statearr_30096[(34)] = inst_29961);

return statearr_30096;
})();
var statearr_30097_30160 = state_30025__$1;
(statearr_30097_30160[(2)] = inst_29968);

(statearr_30097_30160[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30026 === (16))){
var state_30025__$1 = state_30025;
var statearr_30098_30161 = state_30025__$1;
(statearr_30098_30161[(2)] = reload_dependents);

(statearr_30098_30161[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30026 === (38))){
var inst_29978 = (state_30025[(16)]);
var inst_29996 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29978);
var state_30025__$1 = state_30025;
var statearr_30099_30162 = state_30025__$1;
(statearr_30099_30162[(2)] = inst_29996);

(statearr_30099_30162[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30026 === (30))){
var state_30025__$1 = state_30025;
var statearr_30100_30163 = state_30025__$1;
(statearr_30100_30163[(2)] = null);

(statearr_30100_30163[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30026 === (10))){
var inst_29898 = (state_30025[(22)]);
var inst_29900 = cljs.core.chunked_seq_QMARK_.call(null,inst_29898);
var state_30025__$1 = state_30025;
if(inst_29900){
var statearr_30101_30164 = state_30025__$1;
(statearr_30101_30164[(1)] = (13));

} else {
var statearr_30102_30165 = state_30025__$1;
(statearr_30102_30165[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30026 === (18))){
var inst_29932 = (state_30025[(2)]);
var state_30025__$1 = state_30025;
if(cljs.core.truth_(inst_29932)){
var statearr_30103_30166 = state_30025__$1;
(statearr_30103_30166[(1)] = (19));

} else {
var statearr_30104_30167 = state_30025__$1;
(statearr_30104_30167[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30026 === (42))){
var state_30025__$1 = state_30025;
var statearr_30105_30168 = state_30025__$1;
(statearr_30105_30168[(2)] = null);

(statearr_30105_30168[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30026 === (37))){
var inst_29991 = (state_30025[(2)]);
var state_30025__$1 = state_30025;
var statearr_30106_30169 = state_30025__$1;
(statearr_30106_30169[(2)] = inst_29991);

(statearr_30106_30169[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30026 === (8))){
var inst_29885 = (state_30025[(9)]);
var inst_29898 = (state_30025[(22)]);
var inst_29898__$1 = cljs.core.seq.call(null,inst_29885);
var state_30025__$1 = (function (){var statearr_30107 = state_30025;
(statearr_30107[(22)] = inst_29898__$1);

return statearr_30107;
})();
if(inst_29898__$1){
var statearr_30108_30170 = state_30025__$1;
(statearr_30108_30170[(1)] = (10));

} else {
var statearr_30109_30171 = state_30025__$1;
(statearr_30109_30171[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__27220__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__27220__auto____0 = (function (){
var statearr_30110 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30110[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__27220__auto__);

(statearr_30110[(1)] = (1));

return statearr_30110;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__27220__auto____1 = (function (state_30025){
while(true){
var ret_value__27221__auto__ = (function (){try{while(true){
var result__27222__auto__ = switch__27219__auto__.call(null,state_30025);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27222__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27222__auto__;
}
break;
}
}catch (e30111){if((e30111 instanceof Object)){
var ex__27223__auto__ = e30111;
var statearr_30112_30172 = state_30025;
(statearr_30112_30172[(5)] = ex__27223__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30025);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30111;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27221__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30173 = state_30025;
state_30025 = G__30173;
continue;
} else {
return ret_value__27221__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__27220__auto__ = function(state_30025){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__27220__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__27220__auto____1.call(this,state_30025);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__27220__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__27220__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__27220__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__27220__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__27220__auto__;
})()
})();
var state__27316__auto__ = (function (){var statearr_30113 = f__27315__auto__.call(null);
(statearr_30113[(6)] = c__27314__auto__);

return statearr_30113;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27316__auto__);
}));

return c__27314__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__30176,link){
var map__30177 = p__30176;
var map__30177__$1 = (((((!((map__30177 == null))))?(((((map__30177.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30177.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30177):map__30177);
var file = cljs.core.get.call(null,map__30177__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5735__auto__ = link.href;
if(cljs.core.truth_(temp__5735__auto__)){
var link_href = temp__5735__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,(function (p1__30174_SHARP_,p2__30175_SHARP_){
if(cljs.core._EQ_.call(null,p1__30174_SHARP_,p2__30175_SHARP_)){
return p1__30174_SHARP_;
} else {
return false;
}
}),cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = ((match).length);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),((figwheel.client.file_reloading.truncate_url.call(null,link_href)).length)], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__5735__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__30180){
var map__30181 = p__30180;
var map__30181__$1 = (((((!((map__30181 == null))))?(((((map__30181.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30181.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30181):map__30181);
var match_length = cljs.core.get.call(null,map__30181__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__30181__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__30179_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__30179_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__5735__auto__)){
var res = temp__5735__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
(clone.rel = "stylesheet");

(clone.media = link.media);

(clone.disabled = link.disabled);

(clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url));

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
(link.rel = "stylesheet");

(link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url));

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__30183_SHARP_,p2__30184_SHARP_){
return cljs.core.assoc.call(null,p1__30183_SHARP_,cljs.core.get.call(null,p2__30184_SHARP_,key),p2__30184_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout((function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
}),(300));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__5733__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__5733__auto__)){
var link = temp__5733__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),(function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
}));
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_30185 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_30185);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_30185);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__30186,p__30187){
var map__30188 = p__30186;
var map__30188__$1 = (((((!((map__30188 == null))))?(((((map__30188.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30188.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30188):map__30188);
var on_cssload = cljs.core.get.call(null,map__30188__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__30189 = p__30187;
var map__30189__$1 = (((((!((map__30189 == null))))?(((((map__30189.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30189.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30189):map__30189);
var files_msg = map__30189__$1;
var files = cljs.core.get.call(null,map__30189__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(figwheel.client.utils.html_env_QMARK_.call(null)){
var temp__5735__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__5735__auto__)){
var f_datas = temp__5735__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1595490059293
