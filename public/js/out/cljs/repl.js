// Compiled by ClojureScript 1.10.764 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__31056){
var map__31057 = p__31056;
var map__31057__$1 = (((((!((map__31057 == null))))?(((((map__31057.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31057.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31057):map__31057);
var m = map__31057__$1;
var n = cljs.core.get.call(null,map__31057__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__31057__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,(function (){var or__4126__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return [(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})());

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__31059_31091 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__31060_31092 = null;
var count__31061_31093 = (0);
var i__31062_31094 = (0);
while(true){
if((i__31062_31094 < count__31061_31093)){
var f_31095 = cljs.core._nth.call(null,chunk__31060_31092,i__31062_31094);
cljs.core.println.call(null,"  ",f_31095);


var G__31096 = seq__31059_31091;
var G__31097 = chunk__31060_31092;
var G__31098 = count__31061_31093;
var G__31099 = (i__31062_31094 + (1));
seq__31059_31091 = G__31096;
chunk__31060_31092 = G__31097;
count__31061_31093 = G__31098;
i__31062_31094 = G__31099;
continue;
} else {
var temp__5735__auto___31100 = cljs.core.seq.call(null,seq__31059_31091);
if(temp__5735__auto___31100){
var seq__31059_31101__$1 = temp__5735__auto___31100;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31059_31101__$1)){
var c__4556__auto___31102 = cljs.core.chunk_first.call(null,seq__31059_31101__$1);
var G__31103 = cljs.core.chunk_rest.call(null,seq__31059_31101__$1);
var G__31104 = c__4556__auto___31102;
var G__31105 = cljs.core.count.call(null,c__4556__auto___31102);
var G__31106 = (0);
seq__31059_31091 = G__31103;
chunk__31060_31092 = G__31104;
count__31061_31093 = G__31105;
i__31062_31094 = G__31106;
continue;
} else {
var f_31107 = cljs.core.first.call(null,seq__31059_31101__$1);
cljs.core.println.call(null,"  ",f_31107);


var G__31108 = cljs.core.next.call(null,seq__31059_31101__$1);
var G__31109 = null;
var G__31110 = (0);
var G__31111 = (0);
seq__31059_31091 = G__31108;
chunk__31060_31092 = G__31109;
count__31061_31093 = G__31110;
i__31062_31094 = G__31111;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_31112 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_31112);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_31112)))?cljs.core.second.call(null,arglists_31112):arglists_31112));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Spec");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__31063_31113 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__31064_31114 = null;
var count__31065_31115 = (0);
var i__31066_31116 = (0);
while(true){
if((i__31066_31116 < count__31065_31115)){
var vec__31077_31117 = cljs.core._nth.call(null,chunk__31064_31114,i__31066_31116);
var name_31118 = cljs.core.nth.call(null,vec__31077_31117,(0),null);
var map__31080_31119 = cljs.core.nth.call(null,vec__31077_31117,(1),null);
var map__31080_31120__$1 = (((((!((map__31080_31119 == null))))?(((((map__31080_31119.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31080_31119.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31080_31119):map__31080_31119);
var doc_31121 = cljs.core.get.call(null,map__31080_31120__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_31122 = cljs.core.get.call(null,map__31080_31120__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_31118);

cljs.core.println.call(null," ",arglists_31122);

if(cljs.core.truth_(doc_31121)){
cljs.core.println.call(null," ",doc_31121);
} else {
}


var G__31123 = seq__31063_31113;
var G__31124 = chunk__31064_31114;
var G__31125 = count__31065_31115;
var G__31126 = (i__31066_31116 + (1));
seq__31063_31113 = G__31123;
chunk__31064_31114 = G__31124;
count__31065_31115 = G__31125;
i__31066_31116 = G__31126;
continue;
} else {
var temp__5735__auto___31127 = cljs.core.seq.call(null,seq__31063_31113);
if(temp__5735__auto___31127){
var seq__31063_31128__$1 = temp__5735__auto___31127;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31063_31128__$1)){
var c__4556__auto___31129 = cljs.core.chunk_first.call(null,seq__31063_31128__$1);
var G__31130 = cljs.core.chunk_rest.call(null,seq__31063_31128__$1);
var G__31131 = c__4556__auto___31129;
var G__31132 = cljs.core.count.call(null,c__4556__auto___31129);
var G__31133 = (0);
seq__31063_31113 = G__31130;
chunk__31064_31114 = G__31131;
count__31065_31115 = G__31132;
i__31066_31116 = G__31133;
continue;
} else {
var vec__31082_31134 = cljs.core.first.call(null,seq__31063_31128__$1);
var name_31135 = cljs.core.nth.call(null,vec__31082_31134,(0),null);
var map__31085_31136 = cljs.core.nth.call(null,vec__31082_31134,(1),null);
var map__31085_31137__$1 = (((((!((map__31085_31136 == null))))?(((((map__31085_31136.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31085_31136.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31085_31136):map__31085_31136);
var doc_31138 = cljs.core.get.call(null,map__31085_31137__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_31139 = cljs.core.get.call(null,map__31085_31137__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_31135);

cljs.core.println.call(null," ",arglists_31139);

if(cljs.core.truth_(doc_31138)){
cljs.core.println.call(null," ",doc_31138);
} else {
}


var G__31140 = cljs.core.next.call(null,seq__31063_31128__$1);
var G__31141 = null;
var G__31142 = (0);
var G__31143 = (0);
seq__31063_31113 = G__31140;
chunk__31064_31114 = G__31141;
count__31065_31115 = G__31142;
i__31066_31116 = G__31143;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5735__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n)),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.call(null,"Spec");

var seq__31087 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__31088 = null;
var count__31089 = (0);
var i__31090 = (0);
while(true){
if((i__31090 < count__31089)){
var role = cljs.core._nth.call(null,chunk__31088,i__31090);
var temp__5735__auto___31144__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5735__auto___31144__$1)){
var spec_31145 = temp__5735__auto___31144__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_31145));
} else {
}


var G__31146 = seq__31087;
var G__31147 = chunk__31088;
var G__31148 = count__31089;
var G__31149 = (i__31090 + (1));
seq__31087 = G__31146;
chunk__31088 = G__31147;
count__31089 = G__31148;
i__31090 = G__31149;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq.call(null,seq__31087);
if(temp__5735__auto____$1){
var seq__31087__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31087__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__31087__$1);
var G__31150 = cljs.core.chunk_rest.call(null,seq__31087__$1);
var G__31151 = c__4556__auto__;
var G__31152 = cljs.core.count.call(null,c__4556__auto__);
var G__31153 = (0);
seq__31087 = G__31150;
chunk__31088 = G__31151;
count__31089 = G__31152;
i__31090 = G__31153;
continue;
} else {
var role = cljs.core.first.call(null,seq__31087__$1);
var temp__5735__auto___31154__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5735__auto___31154__$2)){
var spec_31155 = temp__5735__auto___31154__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_31155));
} else {
}


var G__31156 = cljs.core.next.call(null,seq__31087__$1);
var G__31157 = null;
var G__31158 = (0);
var G__31159 = (0);
seq__31087 = G__31156;
chunk__31088 = G__31157;
count__31089 = G__31158;
i__31090 = G__31159;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof Error))?cljs.core.symbol.call(null,"js",t.name):null
))], null),(function (){var temp__5735__auto__ = cljs.core.ex_message.call(null,t);
if(cljs.core.truth_(temp__5735__auto__)){
var msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data.call(null,t);
if(cljs.core.truth_(temp__5735__auto__)){
var ed = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})());
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__31160 = cljs.core.conj.call(null,via,t);
var G__31161 = cljs.core.ex_cause.call(null,t);
via = G__31160;
t = G__31161;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek.call(null,via);
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec.call(null,cljs.core.map.call(null,base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5735__auto__ = cljs.core.ex_message.call(null,root);
if(cljs.core.truth_(temp__5735__auto__)){
var root_msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data.call(null,root);
if(cljs.core.truth_(temp__5735__auto__)){
var data = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data.call(null,o));
if(cljs.core.truth_(temp__5735__auto__)){
var phase = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})());
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__31164 = datafied_throwable;
var map__31164__$1 = (((((!((map__31164 == null))))?(((((map__31164.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31164.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31164):map__31164);
var via = cljs.core.get.call(null,map__31164__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__31164__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__31164__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__31165 = cljs.core.last.call(null,via);
var map__31165__$1 = (((((!((map__31165 == null))))?(((((map__31165.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31165.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31165):map__31165);
var type = cljs.core.get.call(null,map__31165__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__31165__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__31165__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__31166 = data;
var map__31166__$1 = (((((!((map__31166 == null))))?(((((map__31166.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31166.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31166):map__31166);
var problems = cljs.core.get.call(null,map__31166__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__31166__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__31166__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__31167 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__31167__$1 = (((((!((map__31167 == null))))?(((((map__31167.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31167.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31167):map__31167);
var top_data = map__31167__$1;
var source = cljs.core.get.call(null,map__31167__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__31172 = phase;
var G__31172__$1 = (((G__31172 instanceof cljs.core.Keyword))?G__31172.fqn:null);
switch (G__31172__$1) {
case "read-source":
var map__31173 = data;
var map__31173__$1 = (((((!((map__31173 == null))))?(((((map__31173.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31173.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31173):map__31173);
var line = cljs.core.get.call(null,map__31173__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__31173__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__31175 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__31175__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__31175,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__31175);
var G__31175__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__31175__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__31175__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__31175__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__31175__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__31176 = top_data;
var G__31176__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__31176,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__31176);
var G__31176__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__31176__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__31176__$1);
var G__31176__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__31176__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__31176__$2);
var G__31176__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__31176__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__31176__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__31176__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__31176__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__31177 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__31177,(0),null);
var method = cljs.core.nth.call(null,vec__31177,(1),null);
var file = cljs.core.nth.call(null,vec__31177,(2),null);
var line = cljs.core.nth.call(null,vec__31177,(3),null);
var G__31180 = top_data;
var G__31180__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__31180,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__31180);
var G__31180__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__31180__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__31180__$1);
var G__31180__$3 = (cljs.core.truth_((function (){var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
})())?cljs.core.assoc.call(null,G__31180__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__31180__$2);
var G__31180__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__31180__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__31180__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__31180__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__31180__$4;
}

break;
case "execution":
var vec__31181 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__31181,(0),null);
var method = cljs.core.nth.call(null,vec__31181,(1),null);
var file = cljs.core.nth.call(null,vec__31181,(2),null);
var line = cljs.core.nth.call(null,vec__31181,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,(function (p1__31163_SHARP_){
var or__4126__auto__ = (p1__31163_SHARP_ == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__31163_SHARP_);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return line;
}
})();
var G__31184 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__31184__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__31184,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__31184);
var G__31184__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__31184__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__31184__$1);
var G__31184__$3 = (cljs.core.truth_((function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
}
})())?cljs.core.assoc.call(null,G__31184__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__31184__$2);
var G__31184__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__31184__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__31184__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__31184__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__31184__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31172__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__31188){
var map__31189 = p__31188;
var map__31189__$1 = (((((!((map__31189 == null))))?(((((map__31189.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31189.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31189):map__31189);
var triage_data = map__31189__$1;
var phase = cljs.core.get.call(null,map__31189__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__31189__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__31189__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__31189__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__31189__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__31189__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__31189__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__31189__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = source;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = line;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name.call(null,(function (){var or__4126__auto__ = class$;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__31191 = phase;
var G__31191__$1 = (((G__31191 instanceof cljs.core.Keyword))?G__31191.fqn:null);
switch (G__31191__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__31192_31201 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__31193_31202 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__31194_31203 = true;
var _STAR_print_fn_STAR__temp_val__31195_31204 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__31194_31203);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__31195_31204);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__31186_SHARP_){
return cljs.core.dissoc.call(null,p1__31186_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__31193_31202);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__31192_31201);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})():format.call(null,"%s\n",cause)));

break;
case "macroexpansion":
return format.call(null,"Unexpected error%s macroexpanding %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compile-syntax-check":
return format.call(null,"Syntax error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compilation":
return format.call(null,"Unexpected error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "read-eval-result":
return format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "print-eval-result":
return format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "execution":
if(cljs.core.truth_(spec)){
return format.call(null,"Execution error - invalid arguments to %s at (%s).\n%s",symbol,loc,(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__31196_31205 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__31197_31206 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__31198_31207 = true;
var _STAR_print_fn_STAR__temp_val__31199_31208 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__31198_31207);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__31199_31208);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__31187_SHARP_){
return cljs.core.dissoc.call(null,p1__31187_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__31197_31206);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__31196_31205);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__31191__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map?rel=1595490060484
