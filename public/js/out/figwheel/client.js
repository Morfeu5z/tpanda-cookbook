// Compiled by ClojureScript 1.10.764 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.20";
figwheel.client.js_stringify = (((((typeof JSON !== 'undefined')) && ((!((JSON.stringify == null))))))?(function (x){
return ["#js ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return cljs.core.str.cljs$core$IFn$_invoke$arity$1(x);
}catch (e31403){if((e31403 instanceof Error)){
var e = e31403;
return "Error: Unable to stringify";
} else {
throw e31403;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__31406 = arguments.length;
switch (G__31406) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__31404_SHARP_){
if(typeof p1__31404_SHARP_ === 'string'){
return p1__31404_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__31404_SHARP_);
}
}),args)], null)], null));

return null;
}));

(figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
}));

(figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2);

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__4742__auto__ = [];
var len__4736__auto___31409 = arguments.length;
var i__4737__auto___31410 = (0);
while(true){
if((i__4737__auto___31410 < len__4736__auto___31409)){
args__4742__auto__.push((arguments[i__4737__auto___31410]));

var G__31411 = (i__4737__auto___31410 + (1));
i__4737__auto___31410 = G__31411;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
}));

(figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq31408){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31408));
}));

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4742__auto__ = [];
var len__4736__auto___31413 = arguments.length;
var i__4737__auto___31414 = (0);
while(true){
if((i__4737__auto___31414 < len__4736__auto___31413)){
args__4742__auto__.push((arguments[i__4737__auto___31414]));

var G__31415 = (i__4737__auto___31414 + (1));
i__4737__auto___31414 = G__31415;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
}));

(figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq31412){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31412));
}));

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
(cljs.core._STAR_print_newline_STAR_ = false);

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),"Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Figwheel autoloading ",(cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF")].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method.
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 * 
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__31416){
var map__31417 = p__31416;
var map__31417__$1 = (((((!((map__31417 == null))))?(((((map__31417.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31417.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31417):map__31417);
var message = cljs.core.get.call(null,map__31417__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__31417__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__4126__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
if(cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return false;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return ((cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts))));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__27314__auto___31496 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27315__auto__ = (function (){var switch__27219__auto__ = (function (state_31468){
var state_val_31469 = (state_31468[(1)]);
if((state_val_31469 === (7))){
var inst_31464 = (state_31468[(2)]);
var state_31468__$1 = state_31468;
var statearr_31470_31497 = state_31468__$1;
(statearr_31470_31497[(2)] = inst_31464);

(statearr_31470_31497[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31469 === (1))){
var state_31468__$1 = state_31468;
var statearr_31471_31498 = state_31468__$1;
(statearr_31471_31498[(2)] = null);

(statearr_31471_31498[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31469 === (4))){
var inst_31421 = (state_31468[(7)]);
var inst_31421__$1 = (state_31468[(2)]);
var state_31468__$1 = (function (){var statearr_31472 = state_31468;
(statearr_31472[(7)] = inst_31421__$1);

return statearr_31472;
})();
if(cljs.core.truth_(inst_31421__$1)){
var statearr_31473_31499 = state_31468__$1;
(statearr_31473_31499[(1)] = (5));

} else {
var statearr_31474_31500 = state_31468__$1;
(statearr_31474_31500[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31469 === (15))){
var inst_31428 = (state_31468[(8)]);
var inst_31443 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_31428);
var inst_31444 = cljs.core.first.call(null,inst_31443);
var inst_31445 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_31444);
var inst_31446 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_31445)].join('');
var inst_31447 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_31446);
var state_31468__$1 = state_31468;
var statearr_31475_31501 = state_31468__$1;
(statearr_31475_31501[(2)] = inst_31447);

(statearr_31475_31501[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31469 === (13))){
var inst_31452 = (state_31468[(2)]);
var state_31468__$1 = state_31468;
var statearr_31476_31502 = state_31468__$1;
(statearr_31476_31502[(2)] = inst_31452);

(statearr_31476_31502[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31469 === (6))){
var state_31468__$1 = state_31468;
var statearr_31477_31503 = state_31468__$1;
(statearr_31477_31503[(2)] = null);

(statearr_31477_31503[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31469 === (17))){
var inst_31450 = (state_31468[(2)]);
var state_31468__$1 = state_31468;
var statearr_31478_31504 = state_31468__$1;
(statearr_31478_31504[(2)] = inst_31450);

(statearr_31478_31504[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31469 === (3))){
var inst_31466 = (state_31468[(2)]);
var state_31468__$1 = state_31468;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31468__$1,inst_31466);
} else {
if((state_val_31469 === (12))){
var inst_31427 = (state_31468[(9)]);
var inst_31441 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_31427,opts);
var state_31468__$1 = state_31468;
if(inst_31441){
var statearr_31479_31505 = state_31468__$1;
(statearr_31479_31505[(1)] = (15));

} else {
var statearr_31480_31506 = state_31468__$1;
(statearr_31480_31506[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31469 === (2))){
var state_31468__$1 = state_31468;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31468__$1,(4),ch);
} else {
if((state_val_31469 === (11))){
var inst_31428 = (state_31468[(8)]);
var inst_31433 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_31434 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_31428);
var inst_31435 = cljs.core.async.timeout.call(null,(1000));
var inst_31436 = [inst_31434,inst_31435];
var inst_31437 = (new cljs.core.PersistentVector(null,2,(5),inst_31433,inst_31436,null));
var state_31468__$1 = state_31468;
return cljs.core.async.ioc_alts_BANG_.call(null,state_31468__$1,(14),inst_31437);
} else {
if((state_val_31469 === (9))){
var inst_31428 = (state_31468[(8)]);
var inst_31454 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_31455 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_31428);
var inst_31456 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_31455);
var inst_31457 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_31456)].join('');
var inst_31458 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_31457);
var state_31468__$1 = (function (){var statearr_31481 = state_31468;
(statearr_31481[(10)] = inst_31454);

return statearr_31481;
})();
var statearr_31482_31507 = state_31468__$1;
(statearr_31482_31507[(2)] = inst_31458);

(statearr_31482_31507[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31469 === (5))){
var inst_31421 = (state_31468[(7)]);
var inst_31423 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_31424 = (new cljs.core.PersistentArrayMap(null,2,inst_31423,null));
var inst_31425 = (new cljs.core.PersistentHashSet(null,inst_31424,null));
var inst_31426 = figwheel.client.focus_msgs.call(null,inst_31425,inst_31421);
var inst_31427 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_31426);
var inst_31428 = cljs.core.first.call(null,inst_31426);
var inst_31429 = figwheel.client.autoload_QMARK_.call(null);
var state_31468__$1 = (function (){var statearr_31483 = state_31468;
(statearr_31483[(8)] = inst_31428);

(statearr_31483[(9)] = inst_31427);

return statearr_31483;
})();
if(cljs.core.truth_(inst_31429)){
var statearr_31484_31508 = state_31468__$1;
(statearr_31484_31508[(1)] = (8));

} else {
var statearr_31485_31509 = state_31468__$1;
(statearr_31485_31509[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31469 === (14))){
var inst_31439 = (state_31468[(2)]);
var state_31468__$1 = state_31468;
var statearr_31486_31510 = state_31468__$1;
(statearr_31486_31510[(2)] = inst_31439);

(statearr_31486_31510[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31469 === (16))){
var state_31468__$1 = state_31468;
var statearr_31487_31511 = state_31468__$1;
(statearr_31487_31511[(2)] = null);

(statearr_31487_31511[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31469 === (10))){
var inst_31460 = (state_31468[(2)]);
var state_31468__$1 = (function (){var statearr_31488 = state_31468;
(statearr_31488[(11)] = inst_31460);

return statearr_31488;
})();
var statearr_31489_31512 = state_31468__$1;
(statearr_31489_31512[(2)] = null);

(statearr_31489_31512[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31469 === (8))){
var inst_31427 = (state_31468[(9)]);
var inst_31431 = figwheel.client.reload_file_state_QMARK_.call(null,inst_31427,opts);
var state_31468__$1 = state_31468;
if(cljs.core.truth_(inst_31431)){
var statearr_31490_31513 = state_31468__$1;
(statearr_31490_31513[(1)] = (11));

} else {
var statearr_31491_31514 = state_31468__$1;
(statearr_31491_31514[(1)] = (12));

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
});
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__27220__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__27220__auto____0 = (function (){
var statearr_31492 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31492[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__27220__auto__);

(statearr_31492[(1)] = (1));

return statearr_31492;
});
var figwheel$client$file_reloader_plugin_$_state_machine__27220__auto____1 = (function (state_31468){
while(true){
var ret_value__27221__auto__ = (function (){try{while(true){
var result__27222__auto__ = switch__27219__auto__.call(null,state_31468);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27222__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27222__auto__;
}
break;
}
}catch (e31493){if((e31493 instanceof Object)){
var ex__27223__auto__ = e31493;
var statearr_31494_31515 = state_31468;
(statearr_31494_31515[(5)] = ex__27223__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31468);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31493;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27221__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31516 = state_31468;
state_31468 = G__31516;
continue;
} else {
return ret_value__27221__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__27220__auto__ = function(state_31468){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__27220__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__27220__auto____1.call(this,state_31468);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__27220__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__27220__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__27220__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__27220__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__27220__auto__;
})()
})();
var state__27316__auto__ = (function (){var statearr_31495 = f__27315__auto__.call(null);
(statearr_31495[(6)] = c__27314__auto___31496);

return statearr_31495;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27316__auto__);
}));


return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__31517_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__31517_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(figwheel.client.utils.node_env_QMARK_.call(null)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(goog.userAgent.product.SAFARI){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(goog.userAgent.product.CHROME){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(goog.userAgent.product.FIREFOX){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(goog.userAgent.product.IE){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_31523 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__31519 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__31520 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__31521 = true;
var _STAR_print_fn_STAR__temp_val__31522 = (function (x){
return sb.append(x);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__31521);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__31522);

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
var result_value__$1 = (((!(typeof result_value === 'string')))?cljs.core.pr_str.call(null,result_value):result_value);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value__$1], null));
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__31520);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__31519);
}}catch (e31518){if((e31518 instanceof Error)){
var e = e31518;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_31523], null));
} else {
var e = e31518;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return (cljs.user = ({}));
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__31524){
var map__31525 = p__31524;
var map__31525__$1 = (((((!((map__31525 == null))))?(((((map__31525.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31525.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31525):map__31525);
var opts = map__31525__$1;
var build_id = cljs.core.get.call(null,map__31525__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return (function (p__31527){
var vec__31528 = p__31527;
var seq__31529 = cljs.core.seq.call(null,vec__31528);
var first__31530 = cljs.core.first.call(null,seq__31529);
var seq__31529__$1 = cljs.core.next.call(null,seq__31529);
var map__31531 = first__31530;
var map__31531__$1 = (((((!((map__31531 == null))))?(((((map__31531.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31531.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31531):map__31531);
var msg = map__31531__$1;
var msg_name = cljs.core.get.call(null,map__31531__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__31529__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,(function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
}));
} else {
return null;
}
});
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__31533){
var vec__31534 = p__31533;
var seq__31535 = cljs.core.seq.call(null,vec__31534);
var first__31536 = cljs.core.first.call(null,seq__31535);
var seq__31535__$1 = cljs.core.next.call(null,seq__31535);
var map__31537 = first__31536;
var map__31537__$1 = (((((!((map__31537 == null))))?(((((map__31537.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31537.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31537):map__31537);
var msg = map__31537__$1;
var msg_name = cljs.core.get.call(null,map__31537__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__31535__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__31539){
var map__31540 = p__31539;
var map__31540__$1 = (((((!((map__31540 == null))))?(((((map__31540.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31540.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31540):map__31540);
var on_compile_warning = cljs.core.get.call(null,map__31540__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__31540__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return (function (p__31542){
var vec__31543 = p__31542;
var seq__31544 = cljs.core.seq.call(null,vec__31543);
var first__31545 = cljs.core.first.call(null,seq__31544);
var seq__31544__$1 = cljs.core.next.call(null,seq__31544);
var map__31546 = first__31545;
var map__31546__$1 = (((((!((map__31546 == null))))?(((((map__31546.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31546.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31546):map__31546);
var msg = map__31546__$1;
var msg_name = cljs.core.get.call(null,map__31546__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__31544__$1;
var pred__31548 = cljs.core._EQ_;
var expr__31549 = msg_name;
if(cljs.core.truth_(pred__31548.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__31549))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__31548.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__31549))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__27314__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27315__auto__ = (function (){var switch__27219__auto__ = (function (state_31638){
var state_val_31639 = (state_31638[(1)]);
if((state_val_31639 === (7))){
var inst_31558 = (state_31638[(2)]);
var state_31638__$1 = state_31638;
if(cljs.core.truth_(inst_31558)){
var statearr_31640_31687 = state_31638__$1;
(statearr_31640_31687[(1)] = (8));

} else {
var statearr_31641_31688 = state_31638__$1;
(statearr_31641_31688[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31639 === (20))){
var inst_31632 = (state_31638[(2)]);
var state_31638__$1 = state_31638;
var statearr_31642_31689 = state_31638__$1;
(statearr_31642_31689[(2)] = inst_31632);

(statearr_31642_31689[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31639 === (27))){
var inst_31628 = (state_31638[(2)]);
var state_31638__$1 = state_31638;
var statearr_31643_31690 = state_31638__$1;
(statearr_31643_31690[(2)] = inst_31628);

(statearr_31643_31690[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31639 === (1))){
var inst_31551 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_31638__$1 = state_31638;
if(cljs.core.truth_(inst_31551)){
var statearr_31644_31691 = state_31638__$1;
(statearr_31644_31691[(1)] = (2));

} else {
var statearr_31645_31692 = state_31638__$1;
(statearr_31645_31692[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31639 === (24))){
var inst_31630 = (state_31638[(2)]);
var state_31638__$1 = state_31638;
var statearr_31646_31693 = state_31638__$1;
(statearr_31646_31693[(2)] = inst_31630);

(statearr_31646_31693[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31639 === (4))){
var inst_31636 = (state_31638[(2)]);
var state_31638__$1 = state_31638;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31638__$1,inst_31636);
} else {
if((state_val_31639 === (15))){
var inst_31634 = (state_31638[(2)]);
var state_31638__$1 = state_31638;
var statearr_31647_31694 = state_31638__$1;
(statearr_31647_31694[(2)] = inst_31634);

(statearr_31647_31694[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31639 === (21))){
var inst_31587 = (state_31638[(2)]);
var inst_31588 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31589 = figwheel.client.auto_jump_to_error.call(null,opts,inst_31588);
var state_31638__$1 = (function (){var statearr_31648 = state_31638;
(statearr_31648[(7)] = inst_31587);

return statearr_31648;
})();
var statearr_31649_31695 = state_31638__$1;
(statearr_31649_31695[(2)] = inst_31589);

(statearr_31649_31695[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31639 === (31))){
var inst_31617 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_31638__$1 = state_31638;
if(inst_31617){
var statearr_31650_31696 = state_31638__$1;
(statearr_31650_31696[(1)] = (34));

} else {
var statearr_31651_31697 = state_31638__$1;
(statearr_31651_31697[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31639 === (32))){
var inst_31626 = (state_31638[(2)]);
var state_31638__$1 = state_31638;
var statearr_31652_31698 = state_31638__$1;
(statearr_31652_31698[(2)] = inst_31626);

(statearr_31652_31698[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31639 === (33))){
var inst_31613 = (state_31638[(2)]);
var inst_31614 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31615 = figwheel.client.auto_jump_to_error.call(null,opts,inst_31614);
var state_31638__$1 = (function (){var statearr_31653 = state_31638;
(statearr_31653[(8)] = inst_31613);

return statearr_31653;
})();
var statearr_31654_31699 = state_31638__$1;
(statearr_31654_31699[(2)] = inst_31615);

(statearr_31654_31699[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31639 === (13))){
var inst_31572 = figwheel.client.heads_up.clear.call(null);
var state_31638__$1 = state_31638;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31638__$1,(16),inst_31572);
} else {
if((state_val_31639 === (22))){
var inst_31593 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31594 = figwheel.client.heads_up.append_warning_message.call(null,inst_31593);
var state_31638__$1 = state_31638;
var statearr_31655_31700 = state_31638__$1;
(statearr_31655_31700[(2)] = inst_31594);

(statearr_31655_31700[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31639 === (36))){
var inst_31624 = (state_31638[(2)]);
var state_31638__$1 = state_31638;
var statearr_31656_31701 = state_31638__$1;
(statearr_31656_31701[(2)] = inst_31624);

(statearr_31656_31701[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31639 === (29))){
var inst_31604 = (state_31638[(2)]);
var inst_31605 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31606 = figwheel.client.auto_jump_to_error.call(null,opts,inst_31605);
var state_31638__$1 = (function (){var statearr_31657 = state_31638;
(statearr_31657[(9)] = inst_31604);

return statearr_31657;
})();
var statearr_31658_31702 = state_31638__$1;
(statearr_31658_31702[(2)] = inst_31606);

(statearr_31658_31702[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31639 === (6))){
var inst_31553 = (state_31638[(10)]);
var state_31638__$1 = state_31638;
var statearr_31659_31703 = state_31638__$1;
(statearr_31659_31703[(2)] = inst_31553);

(statearr_31659_31703[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31639 === (28))){
var inst_31600 = (state_31638[(2)]);
var inst_31601 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31602 = figwheel.client.heads_up.display_warning.call(null,inst_31601);
var state_31638__$1 = (function (){var statearr_31660 = state_31638;
(statearr_31660[(11)] = inst_31600);

return statearr_31660;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31638__$1,(29),inst_31602);
} else {
if((state_val_31639 === (25))){
var inst_31598 = figwheel.client.heads_up.clear.call(null);
var state_31638__$1 = state_31638;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31638__$1,(28),inst_31598);
} else {
if((state_val_31639 === (34))){
var inst_31619 = figwheel.client.heads_up.flash_loaded.call(null);
var state_31638__$1 = state_31638;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31638__$1,(37),inst_31619);
} else {
if((state_val_31639 === (17))){
var inst_31578 = (state_31638[(2)]);
var inst_31579 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31580 = figwheel.client.auto_jump_to_error.call(null,opts,inst_31579);
var state_31638__$1 = (function (){var statearr_31661 = state_31638;
(statearr_31661[(12)] = inst_31578);

return statearr_31661;
})();
var statearr_31662_31704 = state_31638__$1;
(statearr_31662_31704[(2)] = inst_31580);

(statearr_31662_31704[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31639 === (3))){
var inst_31570 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_31638__$1 = state_31638;
if(inst_31570){
var statearr_31663_31705 = state_31638__$1;
(statearr_31663_31705[(1)] = (13));

} else {
var statearr_31664_31706 = state_31638__$1;
(statearr_31664_31706[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31639 === (12))){
var inst_31566 = (state_31638[(2)]);
var state_31638__$1 = state_31638;
var statearr_31665_31707 = state_31638__$1;
(statearr_31665_31707[(2)] = inst_31566);

(statearr_31665_31707[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31639 === (2))){
var inst_31553 = (state_31638[(10)]);
var inst_31553__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_31638__$1 = (function (){var statearr_31666 = state_31638;
(statearr_31666[(10)] = inst_31553__$1);

return statearr_31666;
})();
if(cljs.core.truth_(inst_31553__$1)){
var statearr_31667_31708 = state_31638__$1;
(statearr_31667_31708[(1)] = (5));

} else {
var statearr_31668_31709 = state_31638__$1;
(statearr_31668_31709[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31639 === (23))){
var inst_31596 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_31638__$1 = state_31638;
if(inst_31596){
var statearr_31669_31710 = state_31638__$1;
(statearr_31669_31710[(1)] = (25));

} else {
var statearr_31670_31711 = state_31638__$1;
(statearr_31670_31711[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31639 === (35))){
var state_31638__$1 = state_31638;
var statearr_31671_31712 = state_31638__$1;
(statearr_31671_31712[(2)] = null);

(statearr_31671_31712[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31639 === (19))){
var inst_31591 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_31638__$1 = state_31638;
if(inst_31591){
var statearr_31672_31713 = state_31638__$1;
(statearr_31672_31713[(1)] = (22));

} else {
var statearr_31673_31714 = state_31638__$1;
(statearr_31673_31714[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31639 === (11))){
var inst_31562 = (state_31638[(2)]);
var state_31638__$1 = state_31638;
var statearr_31674_31715 = state_31638__$1;
(statearr_31674_31715[(2)] = inst_31562);

(statearr_31674_31715[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31639 === (9))){
var inst_31564 = figwheel.client.heads_up.clear.call(null);
var state_31638__$1 = state_31638;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31638__$1,(12),inst_31564);
} else {
if((state_val_31639 === (5))){
var inst_31555 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_31638__$1 = state_31638;
var statearr_31675_31716 = state_31638__$1;
(statearr_31675_31716[(2)] = inst_31555);

(statearr_31675_31716[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31639 === (14))){
var inst_31582 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_31638__$1 = state_31638;
if(inst_31582){
var statearr_31676_31717 = state_31638__$1;
(statearr_31676_31717[(1)] = (18));

} else {
var statearr_31677_31718 = state_31638__$1;
(statearr_31677_31718[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31639 === (26))){
var inst_31608 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_31638__$1 = state_31638;
if(inst_31608){
var statearr_31678_31719 = state_31638__$1;
(statearr_31678_31719[(1)] = (30));

} else {
var statearr_31679_31720 = state_31638__$1;
(statearr_31679_31720[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31639 === (16))){
var inst_31574 = (state_31638[(2)]);
var inst_31575 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31576 = figwheel.client.heads_up.display_exception.call(null,inst_31575);
var state_31638__$1 = (function (){var statearr_31680 = state_31638;
(statearr_31680[(13)] = inst_31574);

return statearr_31680;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31638__$1,(17),inst_31576);
} else {
if((state_val_31639 === (30))){
var inst_31610 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31611 = figwheel.client.heads_up.display_warning.call(null,inst_31610);
var state_31638__$1 = state_31638;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31638__$1,(33),inst_31611);
} else {
if((state_val_31639 === (10))){
var inst_31568 = (state_31638[(2)]);
var state_31638__$1 = state_31638;
var statearr_31681_31721 = state_31638__$1;
(statearr_31681_31721[(2)] = inst_31568);

(statearr_31681_31721[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31639 === (18))){
var inst_31584 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_31585 = figwheel.client.heads_up.display_exception.call(null,inst_31584);
var state_31638__$1 = state_31638;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31638__$1,(21),inst_31585);
} else {
if((state_val_31639 === (37))){
var inst_31621 = (state_31638[(2)]);
var state_31638__$1 = state_31638;
var statearr_31682_31722 = state_31638__$1;
(statearr_31682_31722[(2)] = inst_31621);

(statearr_31682_31722[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31639 === (8))){
var inst_31560 = figwheel.client.heads_up.flash_loaded.call(null);
var state_31638__$1 = state_31638;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31638__$1,(11),inst_31560);
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
});
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27220__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27220__auto____0 = (function (){
var statearr_31683 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31683[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27220__auto__);

(statearr_31683[(1)] = (1));

return statearr_31683;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27220__auto____1 = (function (state_31638){
while(true){
var ret_value__27221__auto__ = (function (){try{while(true){
var result__27222__auto__ = switch__27219__auto__.call(null,state_31638);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27222__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27222__auto__;
}
break;
}
}catch (e31684){if((e31684 instanceof Object)){
var ex__27223__auto__ = e31684;
var statearr_31685_31723 = state_31638;
(statearr_31685_31723[(5)] = ex__27223__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31638);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31684;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27221__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31724 = state_31638;
state_31638 = G__31724;
continue;
} else {
return ret_value__27221__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27220__auto__ = function(state_31638){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27220__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27220__auto____1.call(this,state_31638);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27220__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27220__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27220__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27220__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27220__auto__;
})()
})();
var state__27316__auto__ = (function (){var statearr_31686 = f__27315__auto__.call(null);
(statearr_31686[(6)] = c__27314__auto__);

return statearr_31686;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27316__auto__);
}));

return c__27314__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__27314__auto___31753 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27315__auto__ = (function (){var switch__27219__auto__ = (function (state_31739){
var state_val_31740 = (state_31739[(1)]);
if((state_val_31740 === (1))){
var state_31739__$1 = state_31739;
var statearr_31741_31754 = state_31739__$1;
(statearr_31741_31754[(2)] = null);

(statearr_31741_31754[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31740 === (2))){
var state_31739__$1 = state_31739;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31739__$1,(4),ch);
} else {
if((state_val_31740 === (3))){
var inst_31737 = (state_31739[(2)]);
var state_31739__$1 = state_31739;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31739__$1,inst_31737);
} else {
if((state_val_31740 === (4))){
var inst_31727 = (state_31739[(7)]);
var inst_31727__$1 = (state_31739[(2)]);
var state_31739__$1 = (function (){var statearr_31742 = state_31739;
(statearr_31742[(7)] = inst_31727__$1);

return statearr_31742;
})();
if(cljs.core.truth_(inst_31727__$1)){
var statearr_31743_31755 = state_31739__$1;
(statearr_31743_31755[(1)] = (5));

} else {
var statearr_31744_31756 = state_31739__$1;
(statearr_31744_31756[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31740 === (5))){
var inst_31727 = (state_31739[(7)]);
var inst_31729 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_31727);
var state_31739__$1 = state_31739;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31739__$1,(8),inst_31729);
} else {
if((state_val_31740 === (6))){
var state_31739__$1 = state_31739;
var statearr_31745_31757 = state_31739__$1;
(statearr_31745_31757[(2)] = null);

(statearr_31745_31757[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31740 === (7))){
var inst_31735 = (state_31739[(2)]);
var state_31739__$1 = state_31739;
var statearr_31746_31758 = state_31739__$1;
(statearr_31746_31758[(2)] = inst_31735);

(statearr_31746_31758[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31740 === (8))){
var inst_31731 = (state_31739[(2)]);
var state_31739__$1 = (function (){var statearr_31747 = state_31739;
(statearr_31747[(8)] = inst_31731);

return statearr_31747;
})();
var statearr_31748_31759 = state_31739__$1;
(statearr_31748_31759[(2)] = null);

(statearr_31748_31759[(1)] = (2));


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
});
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__27220__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__27220__auto____0 = (function (){
var statearr_31749 = [null,null,null,null,null,null,null,null,null];
(statearr_31749[(0)] = figwheel$client$heads_up_plugin_$_state_machine__27220__auto__);

(statearr_31749[(1)] = (1));

return statearr_31749;
});
var figwheel$client$heads_up_plugin_$_state_machine__27220__auto____1 = (function (state_31739){
while(true){
var ret_value__27221__auto__ = (function (){try{while(true){
var result__27222__auto__ = switch__27219__auto__.call(null,state_31739);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27222__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27222__auto__;
}
break;
}
}catch (e31750){if((e31750 instanceof Object)){
var ex__27223__auto__ = e31750;
var statearr_31751_31760 = state_31739;
(statearr_31751_31760[(5)] = ex__27223__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31739);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31750;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27221__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31761 = state_31739;
state_31739 = G__31761;
continue;
} else {
return ret_value__27221__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__27220__auto__ = function(state_31739){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__27220__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__27220__auto____1.call(this,state_31739);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__27220__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__27220__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__27220__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__27220__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__27220__auto__;
})()
})();
var state__27316__auto__ = (function (){var statearr_31752 = f__27315__auto__.call(null);
(statearr_31752[(6)] = c__27314__auto___31753);

return statearr_31752;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27316__auto__);
}));


figwheel.client.heads_up.ensure_container.call(null);

return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__27314__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27315__auto__ = (function (){var switch__27219__auto__ = (function (state_31767){
var state_val_31768 = (state_31767[(1)]);
if((state_val_31768 === (1))){
var inst_31762 = cljs.core.async.timeout.call(null,(3000));
var state_31767__$1 = state_31767;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31767__$1,(2),inst_31762);
} else {
if((state_val_31768 === (2))){
var inst_31764 = (state_31767[(2)]);
var inst_31765 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_31767__$1 = (function (){var statearr_31769 = state_31767;
(statearr_31769[(7)] = inst_31764);

return statearr_31769;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31767__$1,inst_31765);
} else {
return null;
}
}
});
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__27220__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__27220__auto____0 = (function (){
var statearr_31770 = [null,null,null,null,null,null,null,null];
(statearr_31770[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__27220__auto__);

(statearr_31770[(1)] = (1));

return statearr_31770;
});
var figwheel$client$enforce_project_plugin_$_state_machine__27220__auto____1 = (function (state_31767){
while(true){
var ret_value__27221__auto__ = (function (){try{while(true){
var result__27222__auto__ = switch__27219__auto__.call(null,state_31767);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27222__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27222__auto__;
}
break;
}
}catch (e31771){if((e31771 instanceof Object)){
var ex__27223__auto__ = e31771;
var statearr_31772_31774 = state_31767;
(statearr_31772_31774[(5)] = ex__27223__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31767);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31771;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27221__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31775 = state_31767;
state_31767 = G__31775;
continue;
} else {
return ret_value__27221__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__27220__auto__ = function(state_31767){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__27220__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__27220__auto____1.call(this,state_31767);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__27220__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__27220__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__27220__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__27220__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__27220__auto__;
})()
})();
var state__27316__auto__ = (function (){var statearr_31773 = f__27315__auto__.call(null);
(statearr_31773[(6)] = c__27314__auto__);

return statearr_31773;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27316__auto__);
}));

return c__27314__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__5735__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__5735__auto__)){
var figwheel_version = temp__5735__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__27314__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27315__auto__ = (function (){var switch__27219__auto__ = (function (state_31782){
var state_val_31783 = (state_31782[(1)]);
if((state_val_31783 === (1))){
var inst_31776 = cljs.core.async.timeout.call(null,(2000));
var state_31782__$1 = state_31782;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31782__$1,(2),inst_31776);
} else {
if((state_val_31783 === (2))){
var inst_31778 = (state_31782[(2)]);
var inst_31779 = ["Figwheel Client Version <strong>",figwheel.client._figwheel_version_,"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_31780 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_31779);
var state_31782__$1 = (function (){var statearr_31784 = state_31782;
(statearr_31784[(7)] = inst_31778);

return statearr_31784;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31782__$1,inst_31780);
} else {
return null;
}
}
});
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27220__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27220__auto____0 = (function (){
var statearr_31785 = [null,null,null,null,null,null,null,null];
(statearr_31785[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27220__auto__);

(statearr_31785[(1)] = (1));

return statearr_31785;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27220__auto____1 = (function (state_31782){
while(true){
var ret_value__27221__auto__ = (function (){try{while(true){
var result__27222__auto__ = switch__27219__auto__.call(null,state_31782);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27222__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27222__auto__;
}
break;
}
}catch (e31786){if((e31786 instanceof Object)){
var ex__27223__auto__ = e31786;
var statearr_31787_31789 = state_31782;
(statearr_31787_31789[(5)] = ex__27223__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31782);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31786;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27221__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31790 = state_31782;
state_31782 = G__31790;
continue;
} else {
return ret_value__27221__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27220__auto__ = function(state_31782){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27220__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27220__auto____1.call(this,state_31782);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27220__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27220__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27220__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27220__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27220__auto__;
})()
})();
var state__27316__auto__ = (function (){var statearr_31788 = f__27315__auto__.call(null);
(statearr_31788[(6)] = c__27314__auto__);

return statearr_31788;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27316__auto__);
}));

return c__27314__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__31791){
var map__31792 = p__31791;
var map__31792__$1 = (((((!((map__31792 == null))))?(((((map__31792.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31792.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31792):map__31792);
var file = cljs.core.get.call(null,map__31792__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__31792__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__31792__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__31794 = "";
var G__31794__$1 = (cljs.core.truth_(file)?[G__31794,"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__31794);
var G__31794__$2 = (cljs.core.truth_(line)?[G__31794__$1," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__31794__$1);
if(cljs.core.truth_((function (){var and__4115__auto__ = line;
if(cljs.core.truth_(and__4115__auto__)){
return column;
} else {
return and__4115__auto__;
}
})())){
return [G__31794__$2,", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__31794__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__31795){
var map__31796 = p__31795;
var map__31796__$1 = (((((!((map__31796 == null))))?(((((map__31796.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31796.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31796):map__31796);
var ed = map__31796__$1;
var exception_data = cljs.core.get.call(null,map__31796__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__31796__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
var message_31799 = (function (){var G__31798 = cljs.core.apply.call(null,cljs.core.str,"Figwheel: Compile Exception ",figwheel.client.format_messages.call(null,exception_data));
if(cljs.core.truth_(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(exception_data))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31798)," Error on ",figwheel.client.file_line_column.call(null,exception_data)].join('');
} else {
return G__31798;
}
})();
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),message_31799);

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__31800){
var map__31801 = p__31800;
var map__31801__$1 = (((((!((map__31801 == null))))?(((((map__31801.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31801.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31801):map__31801);
var w = map__31801__$1;
var message = cljs.core.get.call(null,map__31801__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),["Figwheel: Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))," in ",figwheel.client.file_line_column.call(null,message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.config_defaults !== 'undefined')){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"public\\js\\out\\figwheel\\client.cljs",33,1,362,362,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"public\\js\\out\\figwheel\\client.cljs",30,1,355,355,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(figwheel.client.utils.html_env_QMARK_.call(null)){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = (((!(figwheel.client.utils.html_env_QMARK_.call(null))))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__4115__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__4115__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__4115__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_json_message_watch = (function figwheel$client$add_json_message_watch(key,callback){
return figwheel.client.add_message_watch.call(null,key,cljs.core.comp.call(null,callback,cljs.core.clj__GT_js));
});
goog.exportSymbol('figwheel.client.add_json_message_watch', figwheel.client.add_json_message_watch);
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__31803 = cljs.core.seq.call(null,plugins);
var chunk__31804 = null;
var count__31805 = (0);
var i__31806 = (0);
while(true){
if((i__31806 < count__31805)){
var vec__31813 = cljs.core._nth.call(null,chunk__31804,i__31806);
var k = cljs.core.nth.call(null,vec__31813,(0),null);
var plugin = cljs.core.nth.call(null,vec__31813,(1),null);
if(cljs.core.truth_(plugin)){
var pl_31819 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__31803,chunk__31804,count__31805,i__31806,pl_31819,vec__31813,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_31819.call(null,msg_hist);
});})(seq__31803,chunk__31804,count__31805,i__31806,pl_31819,vec__31813,k,plugin))
);
} else {
}


var G__31820 = seq__31803;
var G__31821 = chunk__31804;
var G__31822 = count__31805;
var G__31823 = (i__31806 + (1));
seq__31803 = G__31820;
chunk__31804 = G__31821;
count__31805 = G__31822;
i__31806 = G__31823;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__31803);
if(temp__5735__auto__){
var seq__31803__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31803__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__31803__$1);
var G__31824 = cljs.core.chunk_rest.call(null,seq__31803__$1);
var G__31825 = c__4556__auto__;
var G__31826 = cljs.core.count.call(null,c__4556__auto__);
var G__31827 = (0);
seq__31803 = G__31824;
chunk__31804 = G__31825;
count__31805 = G__31826;
i__31806 = G__31827;
continue;
} else {
var vec__31816 = cljs.core.first.call(null,seq__31803__$1);
var k = cljs.core.nth.call(null,vec__31816,(0),null);
var plugin = cljs.core.nth.call(null,vec__31816,(1),null);
if(cljs.core.truth_(plugin)){
var pl_31828 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__31803,chunk__31804,count__31805,i__31806,pl_31828,vec__31816,k,plugin,seq__31803__$1,temp__5735__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_31828.call(null,msg_hist);
});})(seq__31803,chunk__31804,count__31805,i__31806,pl_31828,vec__31816,k,plugin,seq__31803__$1,temp__5735__auto__))
);
} else {
}


var G__31829 = cljs.core.next.call(null,seq__31803__$1);
var G__31830 = null;
var G__31831 = (0);
var G__31832 = (0);
seq__31803 = G__31829;
chunk__31804 = G__31830;
count__31805 = G__31831;
i__31806 = G__31832;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var G__31834 = arguments.length;
switch (G__31834) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((((!((goog.dependencies_ == null)))) || ((((!((goog.debugLoader_ == null)))) && ((!((goog.debugLoader_.dependencies_ == null)))))))){
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.__figwheel_start_once__ !== 'undefined')){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
(figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts));

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__31835_31840 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__31836_31841 = null;
var count__31837_31842 = (0);
var i__31838_31843 = (0);
while(true){
if((i__31838_31843 < count__31837_31842)){
var msg_31844 = cljs.core._nth.call(null,chunk__31836_31841,i__31838_31843);
figwheel.client.socket.handle_incoming_message.call(null,msg_31844);


var G__31845 = seq__31835_31840;
var G__31846 = chunk__31836_31841;
var G__31847 = count__31837_31842;
var G__31848 = (i__31838_31843 + (1));
seq__31835_31840 = G__31845;
chunk__31836_31841 = G__31846;
count__31837_31842 = G__31847;
i__31838_31843 = G__31848;
continue;
} else {
var temp__5735__auto___31849 = cljs.core.seq.call(null,seq__31835_31840);
if(temp__5735__auto___31849){
var seq__31835_31850__$1 = temp__5735__auto___31849;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31835_31850__$1)){
var c__4556__auto___31851 = cljs.core.chunk_first.call(null,seq__31835_31850__$1);
var G__31852 = cljs.core.chunk_rest.call(null,seq__31835_31850__$1);
var G__31853 = c__4556__auto___31851;
var G__31854 = cljs.core.count.call(null,c__4556__auto___31851);
var G__31855 = (0);
seq__31835_31840 = G__31852;
chunk__31836_31841 = G__31853;
count__31837_31842 = G__31854;
i__31838_31843 = G__31855;
continue;
} else {
var msg_31856 = cljs.core.first.call(null,seq__31835_31850__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_31856);


var G__31857 = cljs.core.next.call(null,seq__31835_31850__$1);
var G__31858 = null;
var G__31859 = (0);
var G__31860 = (0);
seq__31835_31840 = G__31857;
chunk__31836_31841 = G__31858;
count__31837_31842 = G__31859;
i__31838_31843 = G__31860;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
} else {
return null;
}
}));

(figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
}));

(figwheel.client.start.cljs$lang$maxFixedArity = 1);

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__4742__auto__ = [];
var len__4736__auto___31865 = arguments.length;
var i__4737__auto___31866 = (0);
while(true){
if((i__4737__auto___31866 < len__4736__auto___31865)){
args__4742__auto__.push((arguments[i__4737__auto___31866]));

var G__31867 = (i__4737__auto___31866 + (1));
i__4737__auto___31866 = G__31867;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__31862){
var map__31863 = p__31862;
var map__31863__$1 = (((((!((map__31863 == null))))?(((((map__31863.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31863.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31863):map__31863);
var opts = map__31863__$1;
return figwheel.client.start.call(null,opts);
}));

(figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq31861){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31861));
}));

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e31868){if((e31868 instanceof Error)){
var e = e31868;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e31868;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
(goog.dependencies_ = true);
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),(function (p__31869){
var map__31870 = p__31869;
var map__31870__$1 = (((((!((map__31870 == null))))?(((((map__31870.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31870.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31870):map__31870);
var msg_name = cljs.core.get.call(null,map__31870__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return (location.href = location.href);
} else {
return null;
}
}));
});

//# sourceMappingURL=client.js.map?rel=1595490061013
