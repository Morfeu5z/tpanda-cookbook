// Compiled by ClojureScript 1.10.764 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__27374 = arguments.length;
switch (G__27374) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async27375 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27375 = (function (f,blockable,meta27376){
this.f = f;
this.blockable = blockable;
this.meta27376 = meta27376;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async27375.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27377,meta27376__$1){
var self__ = this;
var _27377__$1 = this;
return (new cljs.core.async.t_cljs$core$async27375(self__.f,self__.blockable,meta27376__$1));
}));

(cljs.core.async.t_cljs$core$async27375.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27377){
var self__ = this;
var _27377__$1 = this;
return self__.meta27376;
}));

(cljs.core.async.t_cljs$core$async27375.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async27375.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async27375.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async27375.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async27375.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta27376","meta27376",-1934027464,null)], null);
}));

(cljs.core.async.t_cljs$core$async27375.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async27375.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27375");

(cljs.core.async.t_cljs$core$async27375.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async27375");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27375.
 */
cljs.core.async.__GT_t_cljs$core$async27375 = (function cljs$core$async$__GT_t_cljs$core$async27375(f__$1,blockable__$1,meta27376){
return (new cljs.core.async.t_cljs$core$async27375(f__$1,blockable__$1,meta27376));
});

}

return (new cljs.core.async.t_cljs$core$async27375(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__27381 = arguments.length;
switch (G__27381) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__27384 = arguments.length;
switch (G__27384) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__27387 = arguments.length;
switch (G__27387) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_27389 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_27389);
} else {
cljs.core.async.impl.dispatch.run.call(null,(function (){
return fn1.call(null,val_27389);
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__27391 = arguments.length;
switch (G__27391) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,(function (){
return fn1.call(null,ret);
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4613__auto___27393 = n;
var x_27394 = (0);
while(true){
if((x_27394 < n__4613__auto___27393)){
(a[x_27394] = (0));

var G__27395 = (x_27394 + (1));
x_27394 = G__27395;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__27396 = (i + (1));
i = G__27396;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async27397 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27397 = (function (flag,meta27398){
this.flag = flag;
this.meta27398 = meta27398;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async27397.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27399,meta27398__$1){
var self__ = this;
var _27399__$1 = this;
return (new cljs.core.async.t_cljs$core$async27397(self__.flag,meta27398__$1));
}));

(cljs.core.async.t_cljs$core$async27397.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27399){
var self__ = this;
var _27399__$1 = this;
return self__.meta27398;
}));

(cljs.core.async.t_cljs$core$async27397.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async27397.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async27397.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async27397.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async27397.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta27398","meta27398",487647027,null)], null);
}));

(cljs.core.async.t_cljs$core$async27397.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async27397.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27397");

(cljs.core.async.t_cljs$core$async27397.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async27397");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27397.
 */
cljs.core.async.__GT_t_cljs$core$async27397 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async27397(flag__$1,meta27398){
return (new cljs.core.async.t_cljs$core$async27397(flag__$1,meta27398));
});

}

return (new cljs.core.async.t_cljs$core$async27397(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async27400 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27400 = (function (flag,cb,meta27401){
this.flag = flag;
this.cb = cb;
this.meta27401 = meta27401;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async27400.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27402,meta27401__$1){
var self__ = this;
var _27402__$1 = this;
return (new cljs.core.async.t_cljs$core$async27400(self__.flag,self__.cb,meta27401__$1));
}));

(cljs.core.async.t_cljs$core$async27400.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27402){
var self__ = this;
var _27402__$1 = this;
return self__.meta27401;
}));

(cljs.core.async.t_cljs$core$async27400.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async27400.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
}));

(cljs.core.async.t_cljs$core$async27400.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async27400.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async27400.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta27401","meta27401",-791250219,null)], null);
}));

(cljs.core.async.t_cljs$core$async27400.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async27400.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27400");

(cljs.core.async.t_cljs$core$async27400.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async27400");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27400.
 */
cljs.core.async.__GT_t_cljs$core$async27400 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async27400(flag__$1,cb__$1,meta27401){
return (new cljs.core.async.t_cljs$core$async27400(flag__$1,cb__$1,meta27401));
});

}

return (new cljs.core.async.t_cljs$core$async27400(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__27403_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27403_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__27404_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27404_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__4126__auto__ = wport;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return port;
}
})()], null));
} else {
var G__27405 = (i + (1));
i = G__27405;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4126__auto__ = ret;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4115__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___27411 = arguments.length;
var i__4737__auto___27412 = (0);
while(true){
if((i__4737__auto___27412 < len__4736__auto___27411)){
args__4742__auto__.push((arguments[i__4737__auto___27412]));

var G__27413 = (i__4737__auto___27412 + (1));
i__4737__auto___27412 = G__27413;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__27408){
var map__27409 = p__27408;
var map__27409__$1 = (((((!((map__27409 == null))))?(((((map__27409.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27409.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27409):map__27409);
var opts = map__27409__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq27406){
var G__27407 = cljs.core.first.call(null,seq27406);
var seq27406__$1 = cljs.core.next.call(null,seq27406);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__27407,seq27406__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__27415 = arguments.length;
switch (G__27415) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__27314__auto___27461 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27315__auto__ = (function (){var switch__27219__auto__ = (function (state_27439){
var state_val_27440 = (state_27439[(1)]);
if((state_val_27440 === (7))){
var inst_27435 = (state_27439[(2)]);
var state_27439__$1 = state_27439;
var statearr_27441_27462 = state_27439__$1;
(statearr_27441_27462[(2)] = inst_27435);

(statearr_27441_27462[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27440 === (1))){
var state_27439__$1 = state_27439;
var statearr_27442_27463 = state_27439__$1;
(statearr_27442_27463[(2)] = null);

(statearr_27442_27463[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27440 === (4))){
var inst_27418 = (state_27439[(7)]);
var inst_27418__$1 = (state_27439[(2)]);
var inst_27419 = (inst_27418__$1 == null);
var state_27439__$1 = (function (){var statearr_27443 = state_27439;
(statearr_27443[(7)] = inst_27418__$1);

return statearr_27443;
})();
if(cljs.core.truth_(inst_27419)){
var statearr_27444_27464 = state_27439__$1;
(statearr_27444_27464[(1)] = (5));

} else {
var statearr_27445_27465 = state_27439__$1;
(statearr_27445_27465[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27440 === (13))){
var state_27439__$1 = state_27439;
var statearr_27446_27466 = state_27439__$1;
(statearr_27446_27466[(2)] = null);

(statearr_27446_27466[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27440 === (6))){
var inst_27418 = (state_27439[(7)]);
var state_27439__$1 = state_27439;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27439__$1,(11),to,inst_27418);
} else {
if((state_val_27440 === (3))){
var inst_27437 = (state_27439[(2)]);
var state_27439__$1 = state_27439;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27439__$1,inst_27437);
} else {
if((state_val_27440 === (12))){
var state_27439__$1 = state_27439;
var statearr_27447_27467 = state_27439__$1;
(statearr_27447_27467[(2)] = null);

(statearr_27447_27467[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27440 === (2))){
var state_27439__$1 = state_27439;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27439__$1,(4),from);
} else {
if((state_val_27440 === (11))){
var inst_27428 = (state_27439[(2)]);
var state_27439__$1 = state_27439;
if(cljs.core.truth_(inst_27428)){
var statearr_27448_27468 = state_27439__$1;
(statearr_27448_27468[(1)] = (12));

} else {
var statearr_27449_27469 = state_27439__$1;
(statearr_27449_27469[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27440 === (9))){
var state_27439__$1 = state_27439;
var statearr_27450_27470 = state_27439__$1;
(statearr_27450_27470[(2)] = null);

(statearr_27450_27470[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27440 === (5))){
var state_27439__$1 = state_27439;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27451_27471 = state_27439__$1;
(statearr_27451_27471[(1)] = (8));

} else {
var statearr_27452_27472 = state_27439__$1;
(statearr_27452_27472[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27440 === (14))){
var inst_27433 = (state_27439[(2)]);
var state_27439__$1 = state_27439;
var statearr_27453_27473 = state_27439__$1;
(statearr_27453_27473[(2)] = inst_27433);

(statearr_27453_27473[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27440 === (10))){
var inst_27425 = (state_27439[(2)]);
var state_27439__$1 = state_27439;
var statearr_27454_27474 = state_27439__$1;
(statearr_27454_27474[(2)] = inst_27425);

(statearr_27454_27474[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27440 === (8))){
var inst_27422 = cljs.core.async.close_BANG_.call(null,to);
var state_27439__$1 = state_27439;
var statearr_27455_27475 = state_27439__$1;
(statearr_27455_27475[(2)] = inst_27422);

(statearr_27455_27475[(1)] = (10));


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
});
return (function() {
var cljs$core$async$state_machine__27220__auto__ = null;
var cljs$core$async$state_machine__27220__auto____0 = (function (){
var statearr_27456 = [null,null,null,null,null,null,null,null];
(statearr_27456[(0)] = cljs$core$async$state_machine__27220__auto__);

(statearr_27456[(1)] = (1));

return statearr_27456;
});
var cljs$core$async$state_machine__27220__auto____1 = (function (state_27439){
while(true){
var ret_value__27221__auto__ = (function (){try{while(true){
var result__27222__auto__ = switch__27219__auto__.call(null,state_27439);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27222__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27222__auto__;
}
break;
}
}catch (e27457){if((e27457 instanceof Object)){
var ex__27223__auto__ = e27457;
var statearr_27458_27476 = state_27439;
(statearr_27458_27476[(5)] = ex__27223__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27439);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27457;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27221__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27477 = state_27439;
state_27439 = G__27477;
continue;
} else {
return ret_value__27221__auto__;
}
break;
}
});
cljs$core$async$state_machine__27220__auto__ = function(state_27439){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27220__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27220__auto____1.call(this,state_27439);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27220__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27220__auto____0;
cljs$core$async$state_machine__27220__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27220__auto____1;
return cljs$core$async$state_machine__27220__auto__;
})()
})();
var state__27316__auto__ = (function (){var statearr_27459 = f__27315__auto__.call(null);
(statearr_27459[(6)] = c__27314__auto___27461);

return statearr_27459;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27316__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = (function (p__27478){
var vec__27479 = p__27478;
var v = cljs.core.nth.call(null,vec__27479,(0),null);
var p = cljs.core.nth.call(null,vec__27479,(1),null);
var job = vec__27479;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__27314__auto___27650 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27315__auto__ = (function (){var switch__27219__auto__ = (function (state_27486){
var state_val_27487 = (state_27486[(1)]);
if((state_val_27487 === (1))){
var state_27486__$1 = state_27486;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27486__$1,(2),res,v);
} else {
if((state_val_27487 === (2))){
var inst_27483 = (state_27486[(2)]);
var inst_27484 = cljs.core.async.close_BANG_.call(null,res);
var state_27486__$1 = (function (){var statearr_27488 = state_27486;
(statearr_27488[(7)] = inst_27483);

return statearr_27488;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27486__$1,inst_27484);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27220__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27220__auto____0 = (function (){
var statearr_27489 = [null,null,null,null,null,null,null,null];
(statearr_27489[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27220__auto__);

(statearr_27489[(1)] = (1));

return statearr_27489;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27220__auto____1 = (function (state_27486){
while(true){
var ret_value__27221__auto__ = (function (){try{while(true){
var result__27222__auto__ = switch__27219__auto__.call(null,state_27486);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27222__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27222__auto__;
}
break;
}
}catch (e27490){if((e27490 instanceof Object)){
var ex__27223__auto__ = e27490;
var statearr_27491_27651 = state_27486;
(statearr_27491_27651[(5)] = ex__27223__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27486);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27490;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27221__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27652 = state_27486;
state_27486 = G__27652;
continue;
} else {
return ret_value__27221__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27220__auto__ = function(state_27486){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27220__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27220__auto____1.call(this,state_27486);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27220__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27220__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27220__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27220__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27220__auto__;
})()
})();
var state__27316__auto__ = (function (){var statearr_27492 = f__27315__auto__.call(null);
(statearr_27492[(6)] = c__27314__auto___27650);

return statearr_27492;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27316__auto__);
}));


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});
var async = (function (p__27493){
var vec__27494 = p__27493;
var v = cljs.core.nth.call(null,vec__27494,(0),null);
var p = cljs.core.nth.call(null,vec__27494,(1),null);
var job = vec__27494;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});
var n__4613__auto___27653 = n;
var __27654 = (0);
while(true){
if((__27654 < n__4613__auto___27653)){
var G__27497_27655 = type;
var G__27497_27656__$1 = (((G__27497_27655 instanceof cljs.core.Keyword))?G__27497_27655.fqn:null);
switch (G__27497_27656__$1) {
case "compute":
var c__27314__auto___27658 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__27654,c__27314__auto___27658,G__27497_27655,G__27497_27656__$1,n__4613__auto___27653,jobs,results,process,async){
return (function (){
var f__27315__auto__ = (function (){var switch__27219__auto__ = ((function (__27654,c__27314__auto___27658,G__27497_27655,G__27497_27656__$1,n__4613__auto___27653,jobs,results,process,async){
return (function (state_27510){
var state_val_27511 = (state_27510[(1)]);
if((state_val_27511 === (1))){
var state_27510__$1 = state_27510;
var statearr_27512_27659 = state_27510__$1;
(statearr_27512_27659[(2)] = null);

(statearr_27512_27659[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27511 === (2))){
var state_27510__$1 = state_27510;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27510__$1,(4),jobs);
} else {
if((state_val_27511 === (3))){
var inst_27508 = (state_27510[(2)]);
var state_27510__$1 = state_27510;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27510__$1,inst_27508);
} else {
if((state_val_27511 === (4))){
var inst_27500 = (state_27510[(2)]);
var inst_27501 = process.call(null,inst_27500);
var state_27510__$1 = state_27510;
if(cljs.core.truth_(inst_27501)){
var statearr_27513_27660 = state_27510__$1;
(statearr_27513_27660[(1)] = (5));

} else {
var statearr_27514_27661 = state_27510__$1;
(statearr_27514_27661[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27511 === (5))){
var state_27510__$1 = state_27510;
var statearr_27515_27662 = state_27510__$1;
(statearr_27515_27662[(2)] = null);

(statearr_27515_27662[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27511 === (6))){
var state_27510__$1 = state_27510;
var statearr_27516_27663 = state_27510__$1;
(statearr_27516_27663[(2)] = null);

(statearr_27516_27663[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27511 === (7))){
var inst_27506 = (state_27510[(2)]);
var state_27510__$1 = state_27510;
var statearr_27517_27664 = state_27510__$1;
(statearr_27517_27664[(2)] = inst_27506);

(statearr_27517_27664[(1)] = (3));


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
});})(__27654,c__27314__auto___27658,G__27497_27655,G__27497_27656__$1,n__4613__auto___27653,jobs,results,process,async))
;
return ((function (__27654,switch__27219__auto__,c__27314__auto___27658,G__27497_27655,G__27497_27656__$1,n__4613__auto___27653,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27220__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27220__auto____0 = (function (){
var statearr_27518 = [null,null,null,null,null,null,null];
(statearr_27518[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27220__auto__);

(statearr_27518[(1)] = (1));

return statearr_27518;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27220__auto____1 = (function (state_27510){
while(true){
var ret_value__27221__auto__ = (function (){try{while(true){
var result__27222__auto__ = switch__27219__auto__.call(null,state_27510);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27222__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27222__auto__;
}
break;
}
}catch (e27519){if((e27519 instanceof Object)){
var ex__27223__auto__ = e27519;
var statearr_27520_27665 = state_27510;
(statearr_27520_27665[(5)] = ex__27223__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27510);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27519;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27221__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27666 = state_27510;
state_27510 = G__27666;
continue;
} else {
return ret_value__27221__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27220__auto__ = function(state_27510){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27220__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27220__auto____1.call(this,state_27510);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27220__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27220__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27220__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27220__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27220__auto__;
})()
;})(__27654,switch__27219__auto__,c__27314__auto___27658,G__27497_27655,G__27497_27656__$1,n__4613__auto___27653,jobs,results,process,async))
})();
var state__27316__auto__ = (function (){var statearr_27521 = f__27315__auto__.call(null);
(statearr_27521[(6)] = c__27314__auto___27658);

return statearr_27521;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27316__auto__);
});})(__27654,c__27314__auto___27658,G__27497_27655,G__27497_27656__$1,n__4613__auto___27653,jobs,results,process,async))
);


break;
case "async":
var c__27314__auto___27667 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__27654,c__27314__auto___27667,G__27497_27655,G__27497_27656__$1,n__4613__auto___27653,jobs,results,process,async){
return (function (){
var f__27315__auto__ = (function (){var switch__27219__auto__ = ((function (__27654,c__27314__auto___27667,G__27497_27655,G__27497_27656__$1,n__4613__auto___27653,jobs,results,process,async){
return (function (state_27534){
var state_val_27535 = (state_27534[(1)]);
if((state_val_27535 === (1))){
var state_27534__$1 = state_27534;
var statearr_27536_27668 = state_27534__$1;
(statearr_27536_27668[(2)] = null);

(statearr_27536_27668[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27535 === (2))){
var state_27534__$1 = state_27534;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27534__$1,(4),jobs);
} else {
if((state_val_27535 === (3))){
var inst_27532 = (state_27534[(2)]);
var state_27534__$1 = state_27534;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27534__$1,inst_27532);
} else {
if((state_val_27535 === (4))){
var inst_27524 = (state_27534[(2)]);
var inst_27525 = async.call(null,inst_27524);
var state_27534__$1 = state_27534;
if(cljs.core.truth_(inst_27525)){
var statearr_27537_27669 = state_27534__$1;
(statearr_27537_27669[(1)] = (5));

} else {
var statearr_27538_27670 = state_27534__$1;
(statearr_27538_27670[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27535 === (5))){
var state_27534__$1 = state_27534;
var statearr_27539_27671 = state_27534__$1;
(statearr_27539_27671[(2)] = null);

(statearr_27539_27671[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27535 === (6))){
var state_27534__$1 = state_27534;
var statearr_27540_27672 = state_27534__$1;
(statearr_27540_27672[(2)] = null);

(statearr_27540_27672[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27535 === (7))){
var inst_27530 = (state_27534[(2)]);
var state_27534__$1 = state_27534;
var statearr_27541_27673 = state_27534__$1;
(statearr_27541_27673[(2)] = inst_27530);

(statearr_27541_27673[(1)] = (3));


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
});})(__27654,c__27314__auto___27667,G__27497_27655,G__27497_27656__$1,n__4613__auto___27653,jobs,results,process,async))
;
return ((function (__27654,switch__27219__auto__,c__27314__auto___27667,G__27497_27655,G__27497_27656__$1,n__4613__auto___27653,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27220__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27220__auto____0 = (function (){
var statearr_27542 = [null,null,null,null,null,null,null];
(statearr_27542[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27220__auto__);

(statearr_27542[(1)] = (1));

return statearr_27542;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27220__auto____1 = (function (state_27534){
while(true){
var ret_value__27221__auto__ = (function (){try{while(true){
var result__27222__auto__ = switch__27219__auto__.call(null,state_27534);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27222__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27222__auto__;
}
break;
}
}catch (e27543){if((e27543 instanceof Object)){
var ex__27223__auto__ = e27543;
var statearr_27544_27674 = state_27534;
(statearr_27544_27674[(5)] = ex__27223__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27534);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27543;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27221__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27675 = state_27534;
state_27534 = G__27675;
continue;
} else {
return ret_value__27221__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27220__auto__ = function(state_27534){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27220__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27220__auto____1.call(this,state_27534);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27220__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27220__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27220__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27220__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27220__auto__;
})()
;})(__27654,switch__27219__auto__,c__27314__auto___27667,G__27497_27655,G__27497_27656__$1,n__4613__auto___27653,jobs,results,process,async))
})();
var state__27316__auto__ = (function (){var statearr_27545 = f__27315__auto__.call(null);
(statearr_27545[(6)] = c__27314__auto___27667);

return statearr_27545;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27316__auto__);
});})(__27654,c__27314__auto___27667,G__27497_27655,G__27497_27656__$1,n__4613__auto___27653,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__27497_27656__$1)].join('')));

}

var G__27676 = (__27654 + (1));
__27654 = G__27676;
continue;
} else {
}
break;
}

var c__27314__auto___27677 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27315__auto__ = (function (){var switch__27219__auto__ = (function (state_27567){
var state_val_27568 = (state_27567[(1)]);
if((state_val_27568 === (7))){
var inst_27563 = (state_27567[(2)]);
var state_27567__$1 = state_27567;
var statearr_27569_27678 = state_27567__$1;
(statearr_27569_27678[(2)] = inst_27563);

(statearr_27569_27678[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27568 === (1))){
var state_27567__$1 = state_27567;
var statearr_27570_27679 = state_27567__$1;
(statearr_27570_27679[(2)] = null);

(statearr_27570_27679[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27568 === (4))){
var inst_27548 = (state_27567[(7)]);
var inst_27548__$1 = (state_27567[(2)]);
var inst_27549 = (inst_27548__$1 == null);
var state_27567__$1 = (function (){var statearr_27571 = state_27567;
(statearr_27571[(7)] = inst_27548__$1);

return statearr_27571;
})();
if(cljs.core.truth_(inst_27549)){
var statearr_27572_27680 = state_27567__$1;
(statearr_27572_27680[(1)] = (5));

} else {
var statearr_27573_27681 = state_27567__$1;
(statearr_27573_27681[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27568 === (6))){
var inst_27548 = (state_27567[(7)]);
var inst_27553 = (state_27567[(8)]);
var inst_27553__$1 = cljs.core.async.chan.call(null,(1));
var inst_27554 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_27555 = [inst_27548,inst_27553__$1];
var inst_27556 = (new cljs.core.PersistentVector(null,2,(5),inst_27554,inst_27555,null));
var state_27567__$1 = (function (){var statearr_27574 = state_27567;
(statearr_27574[(8)] = inst_27553__$1);

return statearr_27574;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27567__$1,(8),jobs,inst_27556);
} else {
if((state_val_27568 === (3))){
var inst_27565 = (state_27567[(2)]);
var state_27567__$1 = state_27567;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27567__$1,inst_27565);
} else {
if((state_val_27568 === (2))){
var state_27567__$1 = state_27567;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27567__$1,(4),from);
} else {
if((state_val_27568 === (9))){
var inst_27560 = (state_27567[(2)]);
var state_27567__$1 = (function (){var statearr_27575 = state_27567;
(statearr_27575[(9)] = inst_27560);

return statearr_27575;
})();
var statearr_27576_27682 = state_27567__$1;
(statearr_27576_27682[(2)] = null);

(statearr_27576_27682[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27568 === (5))){
var inst_27551 = cljs.core.async.close_BANG_.call(null,jobs);
var state_27567__$1 = state_27567;
var statearr_27577_27683 = state_27567__$1;
(statearr_27577_27683[(2)] = inst_27551);

(statearr_27577_27683[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27568 === (8))){
var inst_27553 = (state_27567[(8)]);
var inst_27558 = (state_27567[(2)]);
var state_27567__$1 = (function (){var statearr_27578 = state_27567;
(statearr_27578[(10)] = inst_27558);

return statearr_27578;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27567__$1,(9),results,inst_27553);
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
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27220__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27220__auto____0 = (function (){
var statearr_27579 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27579[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27220__auto__);

(statearr_27579[(1)] = (1));

return statearr_27579;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27220__auto____1 = (function (state_27567){
while(true){
var ret_value__27221__auto__ = (function (){try{while(true){
var result__27222__auto__ = switch__27219__auto__.call(null,state_27567);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27222__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27222__auto__;
}
break;
}
}catch (e27580){if((e27580 instanceof Object)){
var ex__27223__auto__ = e27580;
var statearr_27581_27684 = state_27567;
(statearr_27581_27684[(5)] = ex__27223__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27567);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27580;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27221__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27685 = state_27567;
state_27567 = G__27685;
continue;
} else {
return ret_value__27221__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27220__auto__ = function(state_27567){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27220__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27220__auto____1.call(this,state_27567);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27220__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27220__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27220__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27220__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27220__auto__;
})()
})();
var state__27316__auto__ = (function (){var statearr_27582 = f__27315__auto__.call(null);
(statearr_27582[(6)] = c__27314__auto___27677);

return statearr_27582;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27316__auto__);
}));


var c__27314__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27315__auto__ = (function (){var switch__27219__auto__ = (function (state_27620){
var state_val_27621 = (state_27620[(1)]);
if((state_val_27621 === (7))){
var inst_27616 = (state_27620[(2)]);
var state_27620__$1 = state_27620;
var statearr_27622_27686 = state_27620__$1;
(statearr_27622_27686[(2)] = inst_27616);

(statearr_27622_27686[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27621 === (20))){
var state_27620__$1 = state_27620;
var statearr_27623_27687 = state_27620__$1;
(statearr_27623_27687[(2)] = null);

(statearr_27623_27687[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27621 === (1))){
var state_27620__$1 = state_27620;
var statearr_27624_27688 = state_27620__$1;
(statearr_27624_27688[(2)] = null);

(statearr_27624_27688[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27621 === (4))){
var inst_27585 = (state_27620[(7)]);
var inst_27585__$1 = (state_27620[(2)]);
var inst_27586 = (inst_27585__$1 == null);
var state_27620__$1 = (function (){var statearr_27625 = state_27620;
(statearr_27625[(7)] = inst_27585__$1);

return statearr_27625;
})();
if(cljs.core.truth_(inst_27586)){
var statearr_27626_27689 = state_27620__$1;
(statearr_27626_27689[(1)] = (5));

} else {
var statearr_27627_27690 = state_27620__$1;
(statearr_27627_27690[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27621 === (15))){
var inst_27598 = (state_27620[(8)]);
var state_27620__$1 = state_27620;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27620__$1,(18),to,inst_27598);
} else {
if((state_val_27621 === (21))){
var inst_27611 = (state_27620[(2)]);
var state_27620__$1 = state_27620;
var statearr_27628_27691 = state_27620__$1;
(statearr_27628_27691[(2)] = inst_27611);

(statearr_27628_27691[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27621 === (13))){
var inst_27613 = (state_27620[(2)]);
var state_27620__$1 = (function (){var statearr_27629 = state_27620;
(statearr_27629[(9)] = inst_27613);

return statearr_27629;
})();
var statearr_27630_27692 = state_27620__$1;
(statearr_27630_27692[(2)] = null);

(statearr_27630_27692[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27621 === (6))){
var inst_27585 = (state_27620[(7)]);
var state_27620__$1 = state_27620;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27620__$1,(11),inst_27585);
} else {
if((state_val_27621 === (17))){
var inst_27606 = (state_27620[(2)]);
var state_27620__$1 = state_27620;
if(cljs.core.truth_(inst_27606)){
var statearr_27631_27693 = state_27620__$1;
(statearr_27631_27693[(1)] = (19));

} else {
var statearr_27632_27694 = state_27620__$1;
(statearr_27632_27694[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27621 === (3))){
var inst_27618 = (state_27620[(2)]);
var state_27620__$1 = state_27620;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27620__$1,inst_27618);
} else {
if((state_val_27621 === (12))){
var inst_27595 = (state_27620[(10)]);
var state_27620__$1 = state_27620;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27620__$1,(14),inst_27595);
} else {
if((state_val_27621 === (2))){
var state_27620__$1 = state_27620;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27620__$1,(4),results);
} else {
if((state_val_27621 === (19))){
var state_27620__$1 = state_27620;
var statearr_27633_27695 = state_27620__$1;
(statearr_27633_27695[(2)] = null);

(statearr_27633_27695[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27621 === (11))){
var inst_27595 = (state_27620[(2)]);
var state_27620__$1 = (function (){var statearr_27634 = state_27620;
(statearr_27634[(10)] = inst_27595);

return statearr_27634;
})();
var statearr_27635_27696 = state_27620__$1;
(statearr_27635_27696[(2)] = null);

(statearr_27635_27696[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27621 === (9))){
var state_27620__$1 = state_27620;
var statearr_27636_27697 = state_27620__$1;
(statearr_27636_27697[(2)] = null);

(statearr_27636_27697[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27621 === (5))){
var state_27620__$1 = state_27620;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27637_27698 = state_27620__$1;
(statearr_27637_27698[(1)] = (8));

} else {
var statearr_27638_27699 = state_27620__$1;
(statearr_27638_27699[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27621 === (14))){
var inst_27598 = (state_27620[(8)]);
var inst_27598__$1 = (state_27620[(2)]);
var inst_27599 = (inst_27598__$1 == null);
var inst_27600 = cljs.core.not.call(null,inst_27599);
var state_27620__$1 = (function (){var statearr_27639 = state_27620;
(statearr_27639[(8)] = inst_27598__$1);

return statearr_27639;
})();
if(inst_27600){
var statearr_27640_27700 = state_27620__$1;
(statearr_27640_27700[(1)] = (15));

} else {
var statearr_27641_27701 = state_27620__$1;
(statearr_27641_27701[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27621 === (16))){
var state_27620__$1 = state_27620;
var statearr_27642_27702 = state_27620__$1;
(statearr_27642_27702[(2)] = false);

(statearr_27642_27702[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27621 === (10))){
var inst_27592 = (state_27620[(2)]);
var state_27620__$1 = state_27620;
var statearr_27643_27703 = state_27620__$1;
(statearr_27643_27703[(2)] = inst_27592);

(statearr_27643_27703[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27621 === (18))){
var inst_27603 = (state_27620[(2)]);
var state_27620__$1 = state_27620;
var statearr_27644_27704 = state_27620__$1;
(statearr_27644_27704[(2)] = inst_27603);

(statearr_27644_27704[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27621 === (8))){
var inst_27589 = cljs.core.async.close_BANG_.call(null,to);
var state_27620__$1 = state_27620;
var statearr_27645_27705 = state_27620__$1;
(statearr_27645_27705[(2)] = inst_27589);

(statearr_27645_27705[(1)] = (10));


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
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__27220__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__27220__auto____0 = (function (){
var statearr_27646 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27646[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__27220__auto__);

(statearr_27646[(1)] = (1));

return statearr_27646;
});
var cljs$core$async$pipeline_STAR__$_state_machine__27220__auto____1 = (function (state_27620){
while(true){
var ret_value__27221__auto__ = (function (){try{while(true){
var result__27222__auto__ = switch__27219__auto__.call(null,state_27620);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27222__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27222__auto__;
}
break;
}
}catch (e27647){if((e27647 instanceof Object)){
var ex__27223__auto__ = e27647;
var statearr_27648_27706 = state_27620;
(statearr_27648_27706[(5)] = ex__27223__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27620);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27647;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27221__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27707 = state_27620;
state_27620 = G__27707;
continue;
} else {
return ret_value__27221__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__27220__auto__ = function(state_27620){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__27220__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__27220__auto____1.call(this,state_27620);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__27220__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__27220__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__27220__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__27220__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__27220__auto__;
})()
})();
var state__27316__auto__ = (function (){var statearr_27649 = f__27315__auto__.call(null);
(statearr_27649[(6)] = c__27314__auto__);

return statearr_27649;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27316__auto__);
}));

return c__27314__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__27709 = arguments.length;
switch (G__27709) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__27712 = arguments.length;
switch (G__27712) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__27715 = arguments.length;
switch (G__27715) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__27314__auto___27764 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27315__auto__ = (function (){var switch__27219__auto__ = (function (state_27741){
var state_val_27742 = (state_27741[(1)]);
if((state_val_27742 === (7))){
var inst_27737 = (state_27741[(2)]);
var state_27741__$1 = state_27741;
var statearr_27743_27765 = state_27741__$1;
(statearr_27743_27765[(2)] = inst_27737);

(statearr_27743_27765[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27742 === (1))){
var state_27741__$1 = state_27741;
var statearr_27744_27766 = state_27741__$1;
(statearr_27744_27766[(2)] = null);

(statearr_27744_27766[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27742 === (4))){
var inst_27718 = (state_27741[(7)]);
var inst_27718__$1 = (state_27741[(2)]);
var inst_27719 = (inst_27718__$1 == null);
var state_27741__$1 = (function (){var statearr_27745 = state_27741;
(statearr_27745[(7)] = inst_27718__$1);

return statearr_27745;
})();
if(cljs.core.truth_(inst_27719)){
var statearr_27746_27767 = state_27741__$1;
(statearr_27746_27767[(1)] = (5));

} else {
var statearr_27747_27768 = state_27741__$1;
(statearr_27747_27768[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27742 === (13))){
var state_27741__$1 = state_27741;
var statearr_27748_27769 = state_27741__$1;
(statearr_27748_27769[(2)] = null);

(statearr_27748_27769[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27742 === (6))){
var inst_27718 = (state_27741[(7)]);
var inst_27724 = p.call(null,inst_27718);
var state_27741__$1 = state_27741;
if(cljs.core.truth_(inst_27724)){
var statearr_27749_27770 = state_27741__$1;
(statearr_27749_27770[(1)] = (9));

} else {
var statearr_27750_27771 = state_27741__$1;
(statearr_27750_27771[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27742 === (3))){
var inst_27739 = (state_27741[(2)]);
var state_27741__$1 = state_27741;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27741__$1,inst_27739);
} else {
if((state_val_27742 === (12))){
var state_27741__$1 = state_27741;
var statearr_27751_27772 = state_27741__$1;
(statearr_27751_27772[(2)] = null);

(statearr_27751_27772[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27742 === (2))){
var state_27741__$1 = state_27741;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27741__$1,(4),ch);
} else {
if((state_val_27742 === (11))){
var inst_27718 = (state_27741[(7)]);
var inst_27728 = (state_27741[(2)]);
var state_27741__$1 = state_27741;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27741__$1,(8),inst_27728,inst_27718);
} else {
if((state_val_27742 === (9))){
var state_27741__$1 = state_27741;
var statearr_27752_27773 = state_27741__$1;
(statearr_27752_27773[(2)] = tc);

(statearr_27752_27773[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27742 === (5))){
var inst_27721 = cljs.core.async.close_BANG_.call(null,tc);
var inst_27722 = cljs.core.async.close_BANG_.call(null,fc);
var state_27741__$1 = (function (){var statearr_27753 = state_27741;
(statearr_27753[(8)] = inst_27721);

return statearr_27753;
})();
var statearr_27754_27774 = state_27741__$1;
(statearr_27754_27774[(2)] = inst_27722);

(statearr_27754_27774[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27742 === (14))){
var inst_27735 = (state_27741[(2)]);
var state_27741__$1 = state_27741;
var statearr_27755_27775 = state_27741__$1;
(statearr_27755_27775[(2)] = inst_27735);

(statearr_27755_27775[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27742 === (10))){
var state_27741__$1 = state_27741;
var statearr_27756_27776 = state_27741__$1;
(statearr_27756_27776[(2)] = fc);

(statearr_27756_27776[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27742 === (8))){
var inst_27730 = (state_27741[(2)]);
var state_27741__$1 = state_27741;
if(cljs.core.truth_(inst_27730)){
var statearr_27757_27777 = state_27741__$1;
(statearr_27757_27777[(1)] = (12));

} else {
var statearr_27758_27778 = state_27741__$1;
(statearr_27758_27778[(1)] = (13));

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
});
return (function() {
var cljs$core$async$state_machine__27220__auto__ = null;
var cljs$core$async$state_machine__27220__auto____0 = (function (){
var statearr_27759 = [null,null,null,null,null,null,null,null,null];
(statearr_27759[(0)] = cljs$core$async$state_machine__27220__auto__);

(statearr_27759[(1)] = (1));

return statearr_27759;
});
var cljs$core$async$state_machine__27220__auto____1 = (function (state_27741){
while(true){
var ret_value__27221__auto__ = (function (){try{while(true){
var result__27222__auto__ = switch__27219__auto__.call(null,state_27741);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27222__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27222__auto__;
}
break;
}
}catch (e27760){if((e27760 instanceof Object)){
var ex__27223__auto__ = e27760;
var statearr_27761_27779 = state_27741;
(statearr_27761_27779[(5)] = ex__27223__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27741);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27760;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27221__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27780 = state_27741;
state_27741 = G__27780;
continue;
} else {
return ret_value__27221__auto__;
}
break;
}
});
cljs$core$async$state_machine__27220__auto__ = function(state_27741){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27220__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27220__auto____1.call(this,state_27741);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27220__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27220__auto____0;
cljs$core$async$state_machine__27220__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27220__auto____1;
return cljs$core$async$state_machine__27220__auto__;
})()
})();
var state__27316__auto__ = (function (){var statearr_27762 = f__27315__auto__.call(null);
(statearr_27762[(6)] = c__27314__auto___27764);

return statearr_27762;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27316__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__27314__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27315__auto__ = (function (){var switch__27219__auto__ = (function (state_27801){
var state_val_27802 = (state_27801[(1)]);
if((state_val_27802 === (7))){
var inst_27797 = (state_27801[(2)]);
var state_27801__$1 = state_27801;
var statearr_27803_27821 = state_27801__$1;
(statearr_27803_27821[(2)] = inst_27797);

(statearr_27803_27821[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27802 === (1))){
var inst_27781 = init;
var state_27801__$1 = (function (){var statearr_27804 = state_27801;
(statearr_27804[(7)] = inst_27781);

return statearr_27804;
})();
var statearr_27805_27822 = state_27801__$1;
(statearr_27805_27822[(2)] = null);

(statearr_27805_27822[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27802 === (4))){
var inst_27784 = (state_27801[(8)]);
var inst_27784__$1 = (state_27801[(2)]);
var inst_27785 = (inst_27784__$1 == null);
var state_27801__$1 = (function (){var statearr_27806 = state_27801;
(statearr_27806[(8)] = inst_27784__$1);

return statearr_27806;
})();
if(cljs.core.truth_(inst_27785)){
var statearr_27807_27823 = state_27801__$1;
(statearr_27807_27823[(1)] = (5));

} else {
var statearr_27808_27824 = state_27801__$1;
(statearr_27808_27824[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27802 === (6))){
var inst_27781 = (state_27801[(7)]);
var inst_27784 = (state_27801[(8)]);
var inst_27788 = (state_27801[(9)]);
var inst_27788__$1 = f.call(null,inst_27781,inst_27784);
var inst_27789 = cljs.core.reduced_QMARK_.call(null,inst_27788__$1);
var state_27801__$1 = (function (){var statearr_27809 = state_27801;
(statearr_27809[(9)] = inst_27788__$1);

return statearr_27809;
})();
if(inst_27789){
var statearr_27810_27825 = state_27801__$1;
(statearr_27810_27825[(1)] = (8));

} else {
var statearr_27811_27826 = state_27801__$1;
(statearr_27811_27826[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27802 === (3))){
var inst_27799 = (state_27801[(2)]);
var state_27801__$1 = state_27801;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27801__$1,inst_27799);
} else {
if((state_val_27802 === (2))){
var state_27801__$1 = state_27801;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27801__$1,(4),ch);
} else {
if((state_val_27802 === (9))){
var inst_27788 = (state_27801[(9)]);
var inst_27781 = inst_27788;
var state_27801__$1 = (function (){var statearr_27812 = state_27801;
(statearr_27812[(7)] = inst_27781);

return statearr_27812;
})();
var statearr_27813_27827 = state_27801__$1;
(statearr_27813_27827[(2)] = null);

(statearr_27813_27827[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27802 === (5))){
var inst_27781 = (state_27801[(7)]);
var state_27801__$1 = state_27801;
var statearr_27814_27828 = state_27801__$1;
(statearr_27814_27828[(2)] = inst_27781);

(statearr_27814_27828[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27802 === (10))){
var inst_27795 = (state_27801[(2)]);
var state_27801__$1 = state_27801;
var statearr_27815_27829 = state_27801__$1;
(statearr_27815_27829[(2)] = inst_27795);

(statearr_27815_27829[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27802 === (8))){
var inst_27788 = (state_27801[(9)]);
var inst_27791 = cljs.core.deref.call(null,inst_27788);
var state_27801__$1 = state_27801;
var statearr_27816_27830 = state_27801__$1;
(statearr_27816_27830[(2)] = inst_27791);

(statearr_27816_27830[(1)] = (10));


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
});
return (function() {
var cljs$core$async$reduce_$_state_machine__27220__auto__ = null;
var cljs$core$async$reduce_$_state_machine__27220__auto____0 = (function (){
var statearr_27817 = [null,null,null,null,null,null,null,null,null,null];
(statearr_27817[(0)] = cljs$core$async$reduce_$_state_machine__27220__auto__);

(statearr_27817[(1)] = (1));

return statearr_27817;
});
var cljs$core$async$reduce_$_state_machine__27220__auto____1 = (function (state_27801){
while(true){
var ret_value__27221__auto__ = (function (){try{while(true){
var result__27222__auto__ = switch__27219__auto__.call(null,state_27801);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27222__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27222__auto__;
}
break;
}
}catch (e27818){if((e27818 instanceof Object)){
var ex__27223__auto__ = e27818;
var statearr_27819_27831 = state_27801;
(statearr_27819_27831[(5)] = ex__27223__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27801);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27818;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27221__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27832 = state_27801;
state_27801 = G__27832;
continue;
} else {
return ret_value__27221__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__27220__auto__ = function(state_27801){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__27220__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__27220__auto____1.call(this,state_27801);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__27220__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__27220__auto____0;
cljs$core$async$reduce_$_state_machine__27220__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__27220__auto____1;
return cljs$core$async$reduce_$_state_machine__27220__auto__;
})()
})();
var state__27316__auto__ = (function (){var statearr_27820 = f__27315__auto__.call(null);
(statearr_27820[(6)] = c__27314__auto__);

return statearr_27820;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27316__auto__);
}));

return c__27314__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__27314__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27315__auto__ = (function (){var switch__27219__auto__ = (function (state_27838){
var state_val_27839 = (state_27838[(1)]);
if((state_val_27839 === (1))){
var inst_27833 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_27838__$1 = state_27838;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27838__$1,(2),inst_27833);
} else {
if((state_val_27839 === (2))){
var inst_27835 = (state_27838[(2)]);
var inst_27836 = f__$1.call(null,inst_27835);
var state_27838__$1 = state_27838;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27838__$1,inst_27836);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__27220__auto__ = null;
var cljs$core$async$transduce_$_state_machine__27220__auto____0 = (function (){
var statearr_27840 = [null,null,null,null,null,null,null];
(statearr_27840[(0)] = cljs$core$async$transduce_$_state_machine__27220__auto__);

(statearr_27840[(1)] = (1));

return statearr_27840;
});
var cljs$core$async$transduce_$_state_machine__27220__auto____1 = (function (state_27838){
while(true){
var ret_value__27221__auto__ = (function (){try{while(true){
var result__27222__auto__ = switch__27219__auto__.call(null,state_27838);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27222__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27222__auto__;
}
break;
}
}catch (e27841){if((e27841 instanceof Object)){
var ex__27223__auto__ = e27841;
var statearr_27842_27844 = state_27838;
(statearr_27842_27844[(5)] = ex__27223__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27838);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27841;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27221__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27845 = state_27838;
state_27838 = G__27845;
continue;
} else {
return ret_value__27221__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__27220__auto__ = function(state_27838){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__27220__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__27220__auto____1.call(this,state_27838);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__27220__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__27220__auto____0;
cljs$core$async$transduce_$_state_machine__27220__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__27220__auto____1;
return cljs$core$async$transduce_$_state_machine__27220__auto__;
})()
})();
var state__27316__auto__ = (function (){var statearr_27843 = f__27315__auto__.call(null);
(statearr_27843[(6)] = c__27314__auto__);

return statearr_27843;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27316__auto__);
}));

return c__27314__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__27847 = arguments.length;
switch (G__27847) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__27314__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27315__auto__ = (function (){var switch__27219__auto__ = (function (state_27872){
var state_val_27873 = (state_27872[(1)]);
if((state_val_27873 === (7))){
var inst_27854 = (state_27872[(2)]);
var state_27872__$1 = state_27872;
var statearr_27874_27895 = state_27872__$1;
(statearr_27874_27895[(2)] = inst_27854);

(statearr_27874_27895[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27873 === (1))){
var inst_27848 = cljs.core.seq.call(null,coll);
var inst_27849 = inst_27848;
var state_27872__$1 = (function (){var statearr_27875 = state_27872;
(statearr_27875[(7)] = inst_27849);

return statearr_27875;
})();
var statearr_27876_27896 = state_27872__$1;
(statearr_27876_27896[(2)] = null);

(statearr_27876_27896[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27873 === (4))){
var inst_27849 = (state_27872[(7)]);
var inst_27852 = cljs.core.first.call(null,inst_27849);
var state_27872__$1 = state_27872;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27872__$1,(7),ch,inst_27852);
} else {
if((state_val_27873 === (13))){
var inst_27866 = (state_27872[(2)]);
var state_27872__$1 = state_27872;
var statearr_27877_27897 = state_27872__$1;
(statearr_27877_27897[(2)] = inst_27866);

(statearr_27877_27897[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27873 === (6))){
var inst_27857 = (state_27872[(2)]);
var state_27872__$1 = state_27872;
if(cljs.core.truth_(inst_27857)){
var statearr_27878_27898 = state_27872__$1;
(statearr_27878_27898[(1)] = (8));

} else {
var statearr_27879_27899 = state_27872__$1;
(statearr_27879_27899[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27873 === (3))){
var inst_27870 = (state_27872[(2)]);
var state_27872__$1 = state_27872;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27872__$1,inst_27870);
} else {
if((state_val_27873 === (12))){
var state_27872__$1 = state_27872;
var statearr_27880_27900 = state_27872__$1;
(statearr_27880_27900[(2)] = null);

(statearr_27880_27900[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27873 === (2))){
var inst_27849 = (state_27872[(7)]);
var state_27872__$1 = state_27872;
if(cljs.core.truth_(inst_27849)){
var statearr_27881_27901 = state_27872__$1;
(statearr_27881_27901[(1)] = (4));

} else {
var statearr_27882_27902 = state_27872__$1;
(statearr_27882_27902[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27873 === (11))){
var inst_27863 = cljs.core.async.close_BANG_.call(null,ch);
var state_27872__$1 = state_27872;
var statearr_27883_27903 = state_27872__$1;
(statearr_27883_27903[(2)] = inst_27863);

(statearr_27883_27903[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27873 === (9))){
var state_27872__$1 = state_27872;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27884_27904 = state_27872__$1;
(statearr_27884_27904[(1)] = (11));

} else {
var statearr_27885_27905 = state_27872__$1;
(statearr_27885_27905[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27873 === (5))){
var inst_27849 = (state_27872[(7)]);
var state_27872__$1 = state_27872;
var statearr_27886_27906 = state_27872__$1;
(statearr_27886_27906[(2)] = inst_27849);

(statearr_27886_27906[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27873 === (10))){
var inst_27868 = (state_27872[(2)]);
var state_27872__$1 = state_27872;
var statearr_27887_27907 = state_27872__$1;
(statearr_27887_27907[(2)] = inst_27868);

(statearr_27887_27907[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27873 === (8))){
var inst_27849 = (state_27872[(7)]);
var inst_27859 = cljs.core.next.call(null,inst_27849);
var inst_27849__$1 = inst_27859;
var state_27872__$1 = (function (){var statearr_27888 = state_27872;
(statearr_27888[(7)] = inst_27849__$1);

return statearr_27888;
})();
var statearr_27889_27908 = state_27872__$1;
(statearr_27889_27908[(2)] = null);

(statearr_27889_27908[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__27220__auto__ = null;
var cljs$core$async$state_machine__27220__auto____0 = (function (){
var statearr_27890 = [null,null,null,null,null,null,null,null];
(statearr_27890[(0)] = cljs$core$async$state_machine__27220__auto__);

(statearr_27890[(1)] = (1));

return statearr_27890;
});
var cljs$core$async$state_machine__27220__auto____1 = (function (state_27872){
while(true){
var ret_value__27221__auto__ = (function (){try{while(true){
var result__27222__auto__ = switch__27219__auto__.call(null,state_27872);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27222__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27222__auto__;
}
break;
}
}catch (e27891){if((e27891 instanceof Object)){
var ex__27223__auto__ = e27891;
var statearr_27892_27909 = state_27872;
(statearr_27892_27909[(5)] = ex__27223__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27872);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27891;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27221__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27910 = state_27872;
state_27872 = G__27910;
continue;
} else {
return ret_value__27221__auto__;
}
break;
}
});
cljs$core$async$state_machine__27220__auto__ = function(state_27872){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27220__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27220__auto____1.call(this,state_27872);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27220__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27220__auto____0;
cljs$core$async$state_machine__27220__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27220__auto____1;
return cljs$core$async$state_machine__27220__auto__;
})()
})();
var state__27316__auto__ = (function (){var statearr_27893 = f__27315__auto__.call(null);
(statearr_27893[(6)] = c__27314__auto__);

return statearr_27893;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27316__auto__);
}));

return c__27314__auto__;
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_27911 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,_);
} else {
var m__4426__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_27911.call(null,_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_27912 = (function (m,ch,close_QMARK_){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__4426__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_27912.call(null,m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_27913 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m,ch);
} else {
var m__4426__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_27913.call(null,m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_27914 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m);
} else {
var m__4426__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_27914.call(null,m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async27915 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27915 = (function (ch,cs,meta27916){
this.ch = ch;
this.cs = cs;
this.meta27916 = meta27916;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async27915.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27917,meta27916__$1){
var self__ = this;
var _27917__$1 = this;
return (new cljs.core.async.t_cljs$core$async27915(self__.ch,self__.cs,meta27916__$1));
}));

(cljs.core.async.t_cljs$core$async27915.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27917){
var self__ = this;
var _27917__$1 = this;
return self__.meta27916;
}));

(cljs.core.async.t_cljs$core$async27915.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async27915.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async27915.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async27915.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async27915.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async27915.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async27915.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta27916","meta27916",1497138662,null)], null);
}));

(cljs.core.async.t_cljs$core$async27915.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async27915.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27915");

(cljs.core.async.t_cljs$core$async27915.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async27915");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27915.
 */
cljs.core.async.__GT_t_cljs$core$async27915 = (function cljs$core$async$mult_$___GT_t_cljs$core$async27915(ch__$1,cs__$1,meta27916){
return (new cljs.core.async.t_cljs$core$async27915(ch__$1,cs__$1,meta27916));
});

}

return (new cljs.core.async.t_cljs$core$async27915(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});
var c__27314__auto___28137 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27315__auto__ = (function (){var switch__27219__auto__ = (function (state_28052){
var state_val_28053 = (state_28052[(1)]);
if((state_val_28053 === (7))){
var inst_28048 = (state_28052[(2)]);
var state_28052__$1 = state_28052;
var statearr_28054_28138 = state_28052__$1;
(statearr_28054_28138[(2)] = inst_28048);

(statearr_28054_28138[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28053 === (20))){
var inst_27951 = (state_28052[(7)]);
var inst_27963 = cljs.core.first.call(null,inst_27951);
var inst_27964 = cljs.core.nth.call(null,inst_27963,(0),null);
var inst_27965 = cljs.core.nth.call(null,inst_27963,(1),null);
var state_28052__$1 = (function (){var statearr_28055 = state_28052;
(statearr_28055[(8)] = inst_27964);

return statearr_28055;
})();
if(cljs.core.truth_(inst_27965)){
var statearr_28056_28139 = state_28052__$1;
(statearr_28056_28139[(1)] = (22));

} else {
var statearr_28057_28140 = state_28052__$1;
(statearr_28057_28140[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28053 === (27))){
var inst_28000 = (state_28052[(9)]);
var inst_27995 = (state_28052[(10)]);
var inst_27993 = (state_28052[(11)]);
var inst_27920 = (state_28052[(12)]);
var inst_28000__$1 = cljs.core._nth.call(null,inst_27993,inst_27995);
var inst_28001 = cljs.core.async.put_BANG_.call(null,inst_28000__$1,inst_27920,done);
var state_28052__$1 = (function (){var statearr_28058 = state_28052;
(statearr_28058[(9)] = inst_28000__$1);

return statearr_28058;
})();
if(cljs.core.truth_(inst_28001)){
var statearr_28059_28141 = state_28052__$1;
(statearr_28059_28141[(1)] = (30));

} else {
var statearr_28060_28142 = state_28052__$1;
(statearr_28060_28142[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28053 === (1))){
var state_28052__$1 = state_28052;
var statearr_28061_28143 = state_28052__$1;
(statearr_28061_28143[(2)] = null);

(statearr_28061_28143[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28053 === (24))){
var inst_27951 = (state_28052[(7)]);
var inst_27970 = (state_28052[(2)]);
var inst_27971 = cljs.core.next.call(null,inst_27951);
var inst_27929 = inst_27971;
var inst_27930 = null;
var inst_27931 = (0);
var inst_27932 = (0);
var state_28052__$1 = (function (){var statearr_28062 = state_28052;
(statearr_28062[(13)] = inst_27929);

(statearr_28062[(14)] = inst_27932);

(statearr_28062[(15)] = inst_27970);

(statearr_28062[(16)] = inst_27931);

(statearr_28062[(17)] = inst_27930);

return statearr_28062;
})();
var statearr_28063_28144 = state_28052__$1;
(statearr_28063_28144[(2)] = null);

(statearr_28063_28144[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28053 === (39))){
var state_28052__$1 = state_28052;
var statearr_28067_28145 = state_28052__$1;
(statearr_28067_28145[(2)] = null);

(statearr_28067_28145[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28053 === (4))){
var inst_27920 = (state_28052[(12)]);
var inst_27920__$1 = (state_28052[(2)]);
var inst_27921 = (inst_27920__$1 == null);
var state_28052__$1 = (function (){var statearr_28068 = state_28052;
(statearr_28068[(12)] = inst_27920__$1);

return statearr_28068;
})();
if(cljs.core.truth_(inst_27921)){
var statearr_28069_28146 = state_28052__$1;
(statearr_28069_28146[(1)] = (5));

} else {
var statearr_28070_28147 = state_28052__$1;
(statearr_28070_28147[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28053 === (15))){
var inst_27929 = (state_28052[(13)]);
var inst_27932 = (state_28052[(14)]);
var inst_27931 = (state_28052[(16)]);
var inst_27930 = (state_28052[(17)]);
var inst_27947 = (state_28052[(2)]);
var inst_27948 = (inst_27932 + (1));
var tmp28064 = inst_27929;
var tmp28065 = inst_27931;
var tmp28066 = inst_27930;
var inst_27929__$1 = tmp28064;
var inst_27930__$1 = tmp28066;
var inst_27931__$1 = tmp28065;
var inst_27932__$1 = inst_27948;
var state_28052__$1 = (function (){var statearr_28071 = state_28052;
(statearr_28071[(13)] = inst_27929__$1);

(statearr_28071[(14)] = inst_27932__$1);

(statearr_28071[(16)] = inst_27931__$1);

(statearr_28071[(17)] = inst_27930__$1);

(statearr_28071[(18)] = inst_27947);

return statearr_28071;
})();
var statearr_28072_28148 = state_28052__$1;
(statearr_28072_28148[(2)] = null);

(statearr_28072_28148[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28053 === (21))){
var inst_27974 = (state_28052[(2)]);
var state_28052__$1 = state_28052;
var statearr_28076_28149 = state_28052__$1;
(statearr_28076_28149[(2)] = inst_27974);

(statearr_28076_28149[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28053 === (31))){
var inst_28000 = (state_28052[(9)]);
var inst_28004 = done.call(null,null);
var inst_28005 = cljs.core.async.untap_STAR_.call(null,m,inst_28000);
var state_28052__$1 = (function (){var statearr_28077 = state_28052;
(statearr_28077[(19)] = inst_28004);

return statearr_28077;
})();
var statearr_28078_28150 = state_28052__$1;
(statearr_28078_28150[(2)] = inst_28005);

(statearr_28078_28150[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28053 === (32))){
var inst_27995 = (state_28052[(10)]);
var inst_27994 = (state_28052[(20)]);
var inst_27993 = (state_28052[(11)]);
var inst_27992 = (state_28052[(21)]);
var inst_28007 = (state_28052[(2)]);
var inst_28008 = (inst_27995 + (1));
var tmp28073 = inst_27994;
var tmp28074 = inst_27993;
var tmp28075 = inst_27992;
var inst_27992__$1 = tmp28075;
var inst_27993__$1 = tmp28074;
var inst_27994__$1 = tmp28073;
var inst_27995__$1 = inst_28008;
var state_28052__$1 = (function (){var statearr_28079 = state_28052;
(statearr_28079[(22)] = inst_28007);

(statearr_28079[(10)] = inst_27995__$1);

(statearr_28079[(20)] = inst_27994__$1);

(statearr_28079[(11)] = inst_27993__$1);

(statearr_28079[(21)] = inst_27992__$1);

return statearr_28079;
})();
var statearr_28080_28151 = state_28052__$1;
(statearr_28080_28151[(2)] = null);

(statearr_28080_28151[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28053 === (40))){
var inst_28020 = (state_28052[(23)]);
var inst_28024 = done.call(null,null);
var inst_28025 = cljs.core.async.untap_STAR_.call(null,m,inst_28020);
var state_28052__$1 = (function (){var statearr_28081 = state_28052;
(statearr_28081[(24)] = inst_28024);

return statearr_28081;
})();
var statearr_28082_28152 = state_28052__$1;
(statearr_28082_28152[(2)] = inst_28025);

(statearr_28082_28152[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28053 === (33))){
var inst_28011 = (state_28052[(25)]);
var inst_28013 = cljs.core.chunked_seq_QMARK_.call(null,inst_28011);
var state_28052__$1 = state_28052;
if(inst_28013){
var statearr_28083_28153 = state_28052__$1;
(statearr_28083_28153[(1)] = (36));

} else {
var statearr_28084_28154 = state_28052__$1;
(statearr_28084_28154[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28053 === (13))){
var inst_27941 = (state_28052[(26)]);
var inst_27944 = cljs.core.async.close_BANG_.call(null,inst_27941);
var state_28052__$1 = state_28052;
var statearr_28085_28155 = state_28052__$1;
(statearr_28085_28155[(2)] = inst_27944);

(statearr_28085_28155[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28053 === (22))){
var inst_27964 = (state_28052[(8)]);
var inst_27967 = cljs.core.async.close_BANG_.call(null,inst_27964);
var state_28052__$1 = state_28052;
var statearr_28086_28156 = state_28052__$1;
(statearr_28086_28156[(2)] = inst_27967);

(statearr_28086_28156[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28053 === (36))){
var inst_28011 = (state_28052[(25)]);
var inst_28015 = cljs.core.chunk_first.call(null,inst_28011);
var inst_28016 = cljs.core.chunk_rest.call(null,inst_28011);
var inst_28017 = cljs.core.count.call(null,inst_28015);
var inst_27992 = inst_28016;
var inst_27993 = inst_28015;
var inst_27994 = inst_28017;
var inst_27995 = (0);
var state_28052__$1 = (function (){var statearr_28087 = state_28052;
(statearr_28087[(10)] = inst_27995);

(statearr_28087[(20)] = inst_27994);

(statearr_28087[(11)] = inst_27993);

(statearr_28087[(21)] = inst_27992);

return statearr_28087;
})();
var statearr_28088_28157 = state_28052__$1;
(statearr_28088_28157[(2)] = null);

(statearr_28088_28157[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28053 === (41))){
var inst_28011 = (state_28052[(25)]);
var inst_28027 = (state_28052[(2)]);
var inst_28028 = cljs.core.next.call(null,inst_28011);
var inst_27992 = inst_28028;
var inst_27993 = null;
var inst_27994 = (0);
var inst_27995 = (0);
var state_28052__$1 = (function (){var statearr_28089 = state_28052;
(statearr_28089[(10)] = inst_27995);

(statearr_28089[(20)] = inst_27994);

(statearr_28089[(27)] = inst_28027);

(statearr_28089[(11)] = inst_27993);

(statearr_28089[(21)] = inst_27992);

return statearr_28089;
})();
var statearr_28090_28158 = state_28052__$1;
(statearr_28090_28158[(2)] = null);

(statearr_28090_28158[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28053 === (43))){
var state_28052__$1 = state_28052;
var statearr_28091_28159 = state_28052__$1;
(statearr_28091_28159[(2)] = null);

(statearr_28091_28159[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28053 === (29))){
var inst_28036 = (state_28052[(2)]);
var state_28052__$1 = state_28052;
var statearr_28092_28160 = state_28052__$1;
(statearr_28092_28160[(2)] = inst_28036);

(statearr_28092_28160[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28053 === (44))){
var inst_28045 = (state_28052[(2)]);
var state_28052__$1 = (function (){var statearr_28093 = state_28052;
(statearr_28093[(28)] = inst_28045);

return statearr_28093;
})();
var statearr_28094_28161 = state_28052__$1;
(statearr_28094_28161[(2)] = null);

(statearr_28094_28161[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28053 === (6))){
var inst_27984 = (state_28052[(29)]);
var inst_27983 = cljs.core.deref.call(null,cs);
var inst_27984__$1 = cljs.core.keys.call(null,inst_27983);
var inst_27985 = cljs.core.count.call(null,inst_27984__$1);
var inst_27986 = cljs.core.reset_BANG_.call(null,dctr,inst_27985);
var inst_27991 = cljs.core.seq.call(null,inst_27984__$1);
var inst_27992 = inst_27991;
var inst_27993 = null;
var inst_27994 = (0);
var inst_27995 = (0);
var state_28052__$1 = (function (){var statearr_28095 = state_28052;
(statearr_28095[(10)] = inst_27995);

(statearr_28095[(20)] = inst_27994);

(statearr_28095[(29)] = inst_27984__$1);

(statearr_28095[(11)] = inst_27993);

(statearr_28095[(21)] = inst_27992);

(statearr_28095[(30)] = inst_27986);

return statearr_28095;
})();
var statearr_28096_28162 = state_28052__$1;
(statearr_28096_28162[(2)] = null);

(statearr_28096_28162[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28053 === (28))){
var inst_28011 = (state_28052[(25)]);
var inst_27992 = (state_28052[(21)]);
var inst_28011__$1 = cljs.core.seq.call(null,inst_27992);
var state_28052__$1 = (function (){var statearr_28097 = state_28052;
(statearr_28097[(25)] = inst_28011__$1);

return statearr_28097;
})();
if(inst_28011__$1){
var statearr_28098_28163 = state_28052__$1;
(statearr_28098_28163[(1)] = (33));

} else {
var statearr_28099_28164 = state_28052__$1;
(statearr_28099_28164[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28053 === (25))){
var inst_27995 = (state_28052[(10)]);
var inst_27994 = (state_28052[(20)]);
var inst_27997 = (inst_27995 < inst_27994);
var inst_27998 = inst_27997;
var state_28052__$1 = state_28052;
if(cljs.core.truth_(inst_27998)){
var statearr_28100_28165 = state_28052__$1;
(statearr_28100_28165[(1)] = (27));

} else {
var statearr_28101_28166 = state_28052__$1;
(statearr_28101_28166[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28053 === (34))){
var state_28052__$1 = state_28052;
var statearr_28102_28167 = state_28052__$1;
(statearr_28102_28167[(2)] = null);

(statearr_28102_28167[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28053 === (17))){
var state_28052__$1 = state_28052;
var statearr_28103_28168 = state_28052__$1;
(statearr_28103_28168[(2)] = null);

(statearr_28103_28168[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28053 === (3))){
var inst_28050 = (state_28052[(2)]);
var state_28052__$1 = state_28052;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28052__$1,inst_28050);
} else {
if((state_val_28053 === (12))){
var inst_27979 = (state_28052[(2)]);
var state_28052__$1 = state_28052;
var statearr_28104_28169 = state_28052__$1;
(statearr_28104_28169[(2)] = inst_27979);

(statearr_28104_28169[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28053 === (2))){
var state_28052__$1 = state_28052;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28052__$1,(4),ch);
} else {
if((state_val_28053 === (23))){
var state_28052__$1 = state_28052;
var statearr_28105_28170 = state_28052__$1;
(statearr_28105_28170[(2)] = null);

(statearr_28105_28170[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28053 === (35))){
var inst_28034 = (state_28052[(2)]);
var state_28052__$1 = state_28052;
var statearr_28106_28171 = state_28052__$1;
(statearr_28106_28171[(2)] = inst_28034);

(statearr_28106_28171[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28053 === (19))){
var inst_27951 = (state_28052[(7)]);
var inst_27955 = cljs.core.chunk_first.call(null,inst_27951);
var inst_27956 = cljs.core.chunk_rest.call(null,inst_27951);
var inst_27957 = cljs.core.count.call(null,inst_27955);
var inst_27929 = inst_27956;
var inst_27930 = inst_27955;
var inst_27931 = inst_27957;
var inst_27932 = (0);
var state_28052__$1 = (function (){var statearr_28107 = state_28052;
(statearr_28107[(13)] = inst_27929);

(statearr_28107[(14)] = inst_27932);

(statearr_28107[(16)] = inst_27931);

(statearr_28107[(17)] = inst_27930);

return statearr_28107;
})();
var statearr_28108_28172 = state_28052__$1;
(statearr_28108_28172[(2)] = null);

(statearr_28108_28172[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28053 === (11))){
var inst_27929 = (state_28052[(13)]);
var inst_27951 = (state_28052[(7)]);
var inst_27951__$1 = cljs.core.seq.call(null,inst_27929);
var state_28052__$1 = (function (){var statearr_28109 = state_28052;
(statearr_28109[(7)] = inst_27951__$1);

return statearr_28109;
})();
if(inst_27951__$1){
var statearr_28110_28173 = state_28052__$1;
(statearr_28110_28173[(1)] = (16));

} else {
var statearr_28111_28174 = state_28052__$1;
(statearr_28111_28174[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28053 === (9))){
var inst_27981 = (state_28052[(2)]);
var state_28052__$1 = state_28052;
var statearr_28112_28175 = state_28052__$1;
(statearr_28112_28175[(2)] = inst_27981);

(statearr_28112_28175[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28053 === (5))){
var inst_27927 = cljs.core.deref.call(null,cs);
var inst_27928 = cljs.core.seq.call(null,inst_27927);
var inst_27929 = inst_27928;
var inst_27930 = null;
var inst_27931 = (0);
var inst_27932 = (0);
var state_28052__$1 = (function (){var statearr_28113 = state_28052;
(statearr_28113[(13)] = inst_27929);

(statearr_28113[(14)] = inst_27932);

(statearr_28113[(16)] = inst_27931);

(statearr_28113[(17)] = inst_27930);

return statearr_28113;
})();
var statearr_28114_28176 = state_28052__$1;
(statearr_28114_28176[(2)] = null);

(statearr_28114_28176[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28053 === (14))){
var state_28052__$1 = state_28052;
var statearr_28115_28177 = state_28052__$1;
(statearr_28115_28177[(2)] = null);

(statearr_28115_28177[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28053 === (45))){
var inst_28042 = (state_28052[(2)]);
var state_28052__$1 = state_28052;
var statearr_28116_28178 = state_28052__$1;
(statearr_28116_28178[(2)] = inst_28042);

(statearr_28116_28178[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28053 === (26))){
var inst_27984 = (state_28052[(29)]);
var inst_28038 = (state_28052[(2)]);
var inst_28039 = cljs.core.seq.call(null,inst_27984);
var state_28052__$1 = (function (){var statearr_28117 = state_28052;
(statearr_28117[(31)] = inst_28038);

return statearr_28117;
})();
if(inst_28039){
var statearr_28118_28179 = state_28052__$1;
(statearr_28118_28179[(1)] = (42));

} else {
var statearr_28119_28180 = state_28052__$1;
(statearr_28119_28180[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28053 === (16))){
var inst_27951 = (state_28052[(7)]);
var inst_27953 = cljs.core.chunked_seq_QMARK_.call(null,inst_27951);
var state_28052__$1 = state_28052;
if(inst_27953){
var statearr_28120_28181 = state_28052__$1;
(statearr_28120_28181[(1)] = (19));

} else {
var statearr_28121_28182 = state_28052__$1;
(statearr_28121_28182[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28053 === (38))){
var inst_28031 = (state_28052[(2)]);
var state_28052__$1 = state_28052;
var statearr_28122_28183 = state_28052__$1;
(statearr_28122_28183[(2)] = inst_28031);

(statearr_28122_28183[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28053 === (30))){
var state_28052__$1 = state_28052;
var statearr_28123_28184 = state_28052__$1;
(statearr_28123_28184[(2)] = null);

(statearr_28123_28184[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28053 === (10))){
var inst_27932 = (state_28052[(14)]);
var inst_27930 = (state_28052[(17)]);
var inst_27940 = cljs.core._nth.call(null,inst_27930,inst_27932);
var inst_27941 = cljs.core.nth.call(null,inst_27940,(0),null);
var inst_27942 = cljs.core.nth.call(null,inst_27940,(1),null);
var state_28052__$1 = (function (){var statearr_28124 = state_28052;
(statearr_28124[(26)] = inst_27941);

return statearr_28124;
})();
if(cljs.core.truth_(inst_27942)){
var statearr_28125_28185 = state_28052__$1;
(statearr_28125_28185[(1)] = (13));

} else {
var statearr_28126_28186 = state_28052__$1;
(statearr_28126_28186[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28053 === (18))){
var inst_27977 = (state_28052[(2)]);
var state_28052__$1 = state_28052;
var statearr_28127_28187 = state_28052__$1;
(statearr_28127_28187[(2)] = inst_27977);

(statearr_28127_28187[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28053 === (42))){
var state_28052__$1 = state_28052;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28052__$1,(45),dchan);
} else {
if((state_val_28053 === (37))){
var inst_28011 = (state_28052[(25)]);
var inst_28020 = (state_28052[(23)]);
var inst_27920 = (state_28052[(12)]);
var inst_28020__$1 = cljs.core.first.call(null,inst_28011);
var inst_28021 = cljs.core.async.put_BANG_.call(null,inst_28020__$1,inst_27920,done);
var state_28052__$1 = (function (){var statearr_28128 = state_28052;
(statearr_28128[(23)] = inst_28020__$1);

return statearr_28128;
})();
if(cljs.core.truth_(inst_28021)){
var statearr_28129_28188 = state_28052__$1;
(statearr_28129_28188[(1)] = (39));

} else {
var statearr_28130_28189 = state_28052__$1;
(statearr_28130_28189[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28053 === (8))){
var inst_27932 = (state_28052[(14)]);
var inst_27931 = (state_28052[(16)]);
var inst_27934 = (inst_27932 < inst_27931);
var inst_27935 = inst_27934;
var state_28052__$1 = state_28052;
if(cljs.core.truth_(inst_27935)){
var statearr_28131_28190 = state_28052__$1;
(statearr_28131_28190[(1)] = (10));

} else {
var statearr_28132_28191 = state_28052__$1;
(statearr_28132_28191[(1)] = (11));

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
});
return (function() {
var cljs$core$async$mult_$_state_machine__27220__auto__ = null;
var cljs$core$async$mult_$_state_machine__27220__auto____0 = (function (){
var statearr_28133 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28133[(0)] = cljs$core$async$mult_$_state_machine__27220__auto__);

(statearr_28133[(1)] = (1));

return statearr_28133;
});
var cljs$core$async$mult_$_state_machine__27220__auto____1 = (function (state_28052){
while(true){
var ret_value__27221__auto__ = (function (){try{while(true){
var result__27222__auto__ = switch__27219__auto__.call(null,state_28052);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27222__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27222__auto__;
}
break;
}
}catch (e28134){if((e28134 instanceof Object)){
var ex__27223__auto__ = e28134;
var statearr_28135_28192 = state_28052;
(statearr_28135_28192[(5)] = ex__27223__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28052);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28134;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27221__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28193 = state_28052;
state_28052 = G__28193;
continue;
} else {
return ret_value__27221__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__27220__auto__ = function(state_28052){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__27220__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__27220__auto____1.call(this,state_28052);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__27220__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__27220__auto____0;
cljs$core$async$mult_$_state_machine__27220__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__27220__auto____1;
return cljs$core$async$mult_$_state_machine__27220__auto__;
})()
})();
var state__27316__auto__ = (function (){var statearr_28136 = f__27315__auto__.call(null);
(statearr_28136[(6)] = c__27314__auto___28137);

return statearr_28136;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27316__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__28195 = arguments.length;
switch (G__28195) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_28197 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m,ch);
} else {
var m__4426__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_28197.call(null,m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_28198 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m,ch);
} else {
var m__4426__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_28198.call(null,m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_28199 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m);
} else {
var m__4426__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_28199.call(null,m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_28200 = (function (m,state_map){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m,state_map);
} else {
var m__4426__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_28200.call(null,m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_28201 = (function (m,mode){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,m,mode);
} else {
var m__4426__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_28201.call(null,m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___28212 = arguments.length;
var i__4737__auto___28213 = (0);
while(true){
if((i__4737__auto___28213 < len__4736__auto___28212)){
args__4742__auto__.push((arguments[i__4737__auto___28213]));

var G__28214 = (i__4737__auto___28213 + (1));
i__4737__auto___28213 = G__28214;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__28206){
var map__28207 = p__28206;
var map__28207__$1 = (((((!((map__28207 == null))))?(((((map__28207.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28207.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28207):map__28207);
var opts = map__28207__$1;
var statearr_28209_28215 = state;
(statearr_28209_28215[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts.call(null,(function (val){
var statearr_28210_28216 = state;
(statearr_28210_28216[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_28211_28217 = state;
(statearr_28211_28217[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq28202){
var G__28203 = cljs.core.first.call(null,seq28202);
var seq28202__$1 = cljs.core.next.call(null,seq28202);
var G__28204 = cljs.core.first.call(null,seq28202__$1);
var seq28202__$2 = cljs.core.next.call(null,seq28202__$1);
var G__28205 = cljs.core.first.call(null,seq28202__$2);
var seq28202__$3 = cljs.core.next.call(null,seq28202__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28203,G__28204,G__28205,seq28202__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv.call(null,(function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_.call(null,solos))))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28218 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28218 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta28219){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta28219 = meta28219;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async28218.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28220,meta28219__$1){
var self__ = this;
var _28220__$1 = this;
return (new cljs.core.async.t_cljs$core$async28218(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta28219__$1));
}));

(cljs.core.async.t_cljs$core$async28218.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28220){
var self__ = this;
var _28220__$1 = this;
return self__.meta28219;
}));

(cljs.core.async.t_cljs$core$async28218.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28218.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async28218.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28218.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async28218.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async28218.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async28218.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async28218.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
}));

(cljs.core.async.t_cljs$core$async28218.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta28219","meta28219",-1303350649,null)], null);
}));

(cljs.core.async.t_cljs$core$async28218.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async28218.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28218");

(cljs.core.async.t_cljs$core$async28218.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async28218");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28218.
 */
cljs.core.async.__GT_t_cljs$core$async28218 = (function cljs$core$async$mix_$___GT_t_cljs$core$async28218(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta28219){
return (new cljs.core.async.t_cljs$core$async28218(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta28219));
});

}

return (new cljs.core.async.t_cljs$core$async28218(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__27314__auto___28382 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27315__auto__ = (function (){var switch__27219__auto__ = (function (state_28322){
var state_val_28323 = (state_28322[(1)]);
if((state_val_28323 === (7))){
var inst_28237 = (state_28322[(2)]);
var state_28322__$1 = state_28322;
var statearr_28324_28383 = state_28322__$1;
(statearr_28324_28383[(2)] = inst_28237);

(statearr_28324_28383[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28323 === (20))){
var inst_28249 = (state_28322[(7)]);
var state_28322__$1 = state_28322;
var statearr_28325_28384 = state_28322__$1;
(statearr_28325_28384[(2)] = inst_28249);

(statearr_28325_28384[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28323 === (27))){
var state_28322__$1 = state_28322;
var statearr_28326_28385 = state_28322__$1;
(statearr_28326_28385[(2)] = null);

(statearr_28326_28385[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28323 === (1))){
var inst_28224 = (state_28322[(8)]);
var inst_28224__$1 = calc_state.call(null);
var inst_28226 = (inst_28224__$1 == null);
var inst_28227 = cljs.core.not.call(null,inst_28226);
var state_28322__$1 = (function (){var statearr_28327 = state_28322;
(statearr_28327[(8)] = inst_28224__$1);

return statearr_28327;
})();
if(inst_28227){
var statearr_28328_28386 = state_28322__$1;
(statearr_28328_28386[(1)] = (2));

} else {
var statearr_28329_28387 = state_28322__$1;
(statearr_28329_28387[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28323 === (24))){
var inst_28296 = (state_28322[(9)]);
var inst_28273 = (state_28322[(10)]);
var inst_28282 = (state_28322[(11)]);
var inst_28296__$1 = inst_28273.call(null,inst_28282);
var state_28322__$1 = (function (){var statearr_28330 = state_28322;
(statearr_28330[(9)] = inst_28296__$1);

return statearr_28330;
})();
if(cljs.core.truth_(inst_28296__$1)){
var statearr_28331_28388 = state_28322__$1;
(statearr_28331_28388[(1)] = (29));

} else {
var statearr_28332_28389 = state_28322__$1;
(statearr_28332_28389[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28323 === (4))){
var inst_28240 = (state_28322[(2)]);
var state_28322__$1 = state_28322;
if(cljs.core.truth_(inst_28240)){
var statearr_28333_28390 = state_28322__$1;
(statearr_28333_28390[(1)] = (8));

} else {
var statearr_28334_28391 = state_28322__$1;
(statearr_28334_28391[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28323 === (15))){
var inst_28267 = (state_28322[(2)]);
var state_28322__$1 = state_28322;
if(cljs.core.truth_(inst_28267)){
var statearr_28335_28392 = state_28322__$1;
(statearr_28335_28392[(1)] = (19));

} else {
var statearr_28336_28393 = state_28322__$1;
(statearr_28336_28393[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28323 === (21))){
var inst_28272 = (state_28322[(12)]);
var inst_28272__$1 = (state_28322[(2)]);
var inst_28273 = cljs.core.get.call(null,inst_28272__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_28274 = cljs.core.get.call(null,inst_28272__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_28275 = cljs.core.get.call(null,inst_28272__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_28322__$1 = (function (){var statearr_28337 = state_28322;
(statearr_28337[(10)] = inst_28273);

(statearr_28337[(12)] = inst_28272__$1);

(statearr_28337[(13)] = inst_28274);

return statearr_28337;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_28322__$1,(22),inst_28275);
} else {
if((state_val_28323 === (31))){
var inst_28304 = (state_28322[(2)]);
var state_28322__$1 = state_28322;
if(cljs.core.truth_(inst_28304)){
var statearr_28338_28394 = state_28322__$1;
(statearr_28338_28394[(1)] = (32));

} else {
var statearr_28339_28395 = state_28322__$1;
(statearr_28339_28395[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28323 === (32))){
var inst_28281 = (state_28322[(14)]);
var state_28322__$1 = state_28322;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28322__$1,(35),out,inst_28281);
} else {
if((state_val_28323 === (33))){
var inst_28272 = (state_28322[(12)]);
var inst_28249 = inst_28272;
var state_28322__$1 = (function (){var statearr_28340 = state_28322;
(statearr_28340[(7)] = inst_28249);

return statearr_28340;
})();
var statearr_28341_28396 = state_28322__$1;
(statearr_28341_28396[(2)] = null);

(statearr_28341_28396[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28323 === (13))){
var inst_28249 = (state_28322[(7)]);
var inst_28256 = inst_28249.cljs$lang$protocol_mask$partition0$;
var inst_28257 = (inst_28256 & (64));
var inst_28258 = inst_28249.cljs$core$ISeq$;
var inst_28259 = (cljs.core.PROTOCOL_SENTINEL === inst_28258);
var inst_28260 = ((inst_28257) || (inst_28259));
var state_28322__$1 = state_28322;
if(cljs.core.truth_(inst_28260)){
var statearr_28342_28397 = state_28322__$1;
(statearr_28342_28397[(1)] = (16));

} else {
var statearr_28343_28398 = state_28322__$1;
(statearr_28343_28398[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28323 === (22))){
var inst_28281 = (state_28322[(14)]);
var inst_28282 = (state_28322[(11)]);
var inst_28280 = (state_28322[(2)]);
var inst_28281__$1 = cljs.core.nth.call(null,inst_28280,(0),null);
var inst_28282__$1 = cljs.core.nth.call(null,inst_28280,(1),null);
var inst_28283 = (inst_28281__$1 == null);
var inst_28284 = cljs.core._EQ_.call(null,inst_28282__$1,change);
var inst_28285 = ((inst_28283) || (inst_28284));
var state_28322__$1 = (function (){var statearr_28344 = state_28322;
(statearr_28344[(14)] = inst_28281__$1);

(statearr_28344[(11)] = inst_28282__$1);

return statearr_28344;
})();
if(cljs.core.truth_(inst_28285)){
var statearr_28345_28399 = state_28322__$1;
(statearr_28345_28399[(1)] = (23));

} else {
var statearr_28346_28400 = state_28322__$1;
(statearr_28346_28400[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28323 === (36))){
var inst_28272 = (state_28322[(12)]);
var inst_28249 = inst_28272;
var state_28322__$1 = (function (){var statearr_28347 = state_28322;
(statearr_28347[(7)] = inst_28249);

return statearr_28347;
})();
var statearr_28348_28401 = state_28322__$1;
(statearr_28348_28401[(2)] = null);

(statearr_28348_28401[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28323 === (29))){
var inst_28296 = (state_28322[(9)]);
var state_28322__$1 = state_28322;
var statearr_28349_28402 = state_28322__$1;
(statearr_28349_28402[(2)] = inst_28296);

(statearr_28349_28402[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28323 === (6))){
var state_28322__$1 = state_28322;
var statearr_28350_28403 = state_28322__$1;
(statearr_28350_28403[(2)] = false);

(statearr_28350_28403[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28323 === (28))){
var inst_28292 = (state_28322[(2)]);
var inst_28293 = calc_state.call(null);
var inst_28249 = inst_28293;
var state_28322__$1 = (function (){var statearr_28351 = state_28322;
(statearr_28351[(15)] = inst_28292);

(statearr_28351[(7)] = inst_28249);

return statearr_28351;
})();
var statearr_28352_28404 = state_28322__$1;
(statearr_28352_28404[(2)] = null);

(statearr_28352_28404[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28323 === (25))){
var inst_28318 = (state_28322[(2)]);
var state_28322__$1 = state_28322;
var statearr_28353_28405 = state_28322__$1;
(statearr_28353_28405[(2)] = inst_28318);

(statearr_28353_28405[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28323 === (34))){
var inst_28316 = (state_28322[(2)]);
var state_28322__$1 = state_28322;
var statearr_28354_28406 = state_28322__$1;
(statearr_28354_28406[(2)] = inst_28316);

(statearr_28354_28406[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28323 === (17))){
var state_28322__$1 = state_28322;
var statearr_28355_28407 = state_28322__$1;
(statearr_28355_28407[(2)] = false);

(statearr_28355_28407[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28323 === (3))){
var state_28322__$1 = state_28322;
var statearr_28356_28408 = state_28322__$1;
(statearr_28356_28408[(2)] = false);

(statearr_28356_28408[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28323 === (12))){
var inst_28320 = (state_28322[(2)]);
var state_28322__$1 = state_28322;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28322__$1,inst_28320);
} else {
if((state_val_28323 === (2))){
var inst_28224 = (state_28322[(8)]);
var inst_28229 = inst_28224.cljs$lang$protocol_mask$partition0$;
var inst_28230 = (inst_28229 & (64));
var inst_28231 = inst_28224.cljs$core$ISeq$;
var inst_28232 = (cljs.core.PROTOCOL_SENTINEL === inst_28231);
var inst_28233 = ((inst_28230) || (inst_28232));
var state_28322__$1 = state_28322;
if(cljs.core.truth_(inst_28233)){
var statearr_28357_28409 = state_28322__$1;
(statearr_28357_28409[(1)] = (5));

} else {
var statearr_28358_28410 = state_28322__$1;
(statearr_28358_28410[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28323 === (23))){
var inst_28281 = (state_28322[(14)]);
var inst_28287 = (inst_28281 == null);
var state_28322__$1 = state_28322;
if(cljs.core.truth_(inst_28287)){
var statearr_28359_28411 = state_28322__$1;
(statearr_28359_28411[(1)] = (26));

} else {
var statearr_28360_28412 = state_28322__$1;
(statearr_28360_28412[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28323 === (35))){
var inst_28307 = (state_28322[(2)]);
var state_28322__$1 = state_28322;
if(cljs.core.truth_(inst_28307)){
var statearr_28361_28413 = state_28322__$1;
(statearr_28361_28413[(1)] = (36));

} else {
var statearr_28362_28414 = state_28322__$1;
(statearr_28362_28414[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28323 === (19))){
var inst_28249 = (state_28322[(7)]);
var inst_28269 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28249);
var state_28322__$1 = state_28322;
var statearr_28363_28415 = state_28322__$1;
(statearr_28363_28415[(2)] = inst_28269);

(statearr_28363_28415[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28323 === (11))){
var inst_28249 = (state_28322[(7)]);
var inst_28253 = (inst_28249 == null);
var inst_28254 = cljs.core.not.call(null,inst_28253);
var state_28322__$1 = state_28322;
if(inst_28254){
var statearr_28364_28416 = state_28322__$1;
(statearr_28364_28416[(1)] = (13));

} else {
var statearr_28365_28417 = state_28322__$1;
(statearr_28365_28417[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28323 === (9))){
var inst_28224 = (state_28322[(8)]);
var state_28322__$1 = state_28322;
var statearr_28366_28418 = state_28322__$1;
(statearr_28366_28418[(2)] = inst_28224);

(statearr_28366_28418[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28323 === (5))){
var state_28322__$1 = state_28322;
var statearr_28367_28419 = state_28322__$1;
(statearr_28367_28419[(2)] = true);

(statearr_28367_28419[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28323 === (14))){
var state_28322__$1 = state_28322;
var statearr_28368_28420 = state_28322__$1;
(statearr_28368_28420[(2)] = false);

(statearr_28368_28420[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28323 === (26))){
var inst_28282 = (state_28322[(11)]);
var inst_28289 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_28282);
var state_28322__$1 = state_28322;
var statearr_28369_28421 = state_28322__$1;
(statearr_28369_28421[(2)] = inst_28289);

(statearr_28369_28421[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28323 === (16))){
var state_28322__$1 = state_28322;
var statearr_28370_28422 = state_28322__$1;
(statearr_28370_28422[(2)] = true);

(statearr_28370_28422[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28323 === (38))){
var inst_28312 = (state_28322[(2)]);
var state_28322__$1 = state_28322;
var statearr_28371_28423 = state_28322__$1;
(statearr_28371_28423[(2)] = inst_28312);

(statearr_28371_28423[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28323 === (30))){
var inst_28273 = (state_28322[(10)]);
var inst_28282 = (state_28322[(11)]);
var inst_28274 = (state_28322[(13)]);
var inst_28299 = cljs.core.empty_QMARK_.call(null,inst_28273);
var inst_28300 = inst_28274.call(null,inst_28282);
var inst_28301 = cljs.core.not.call(null,inst_28300);
var inst_28302 = ((inst_28299) && (inst_28301));
var state_28322__$1 = state_28322;
var statearr_28372_28424 = state_28322__$1;
(statearr_28372_28424[(2)] = inst_28302);

(statearr_28372_28424[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28323 === (10))){
var inst_28224 = (state_28322[(8)]);
var inst_28245 = (state_28322[(2)]);
var inst_28246 = cljs.core.get.call(null,inst_28245,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_28247 = cljs.core.get.call(null,inst_28245,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_28248 = cljs.core.get.call(null,inst_28245,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_28249 = inst_28224;
var state_28322__$1 = (function (){var statearr_28373 = state_28322;
(statearr_28373[(16)] = inst_28246);

(statearr_28373[(17)] = inst_28247);

(statearr_28373[(7)] = inst_28249);

(statearr_28373[(18)] = inst_28248);

return statearr_28373;
})();
var statearr_28374_28425 = state_28322__$1;
(statearr_28374_28425[(2)] = null);

(statearr_28374_28425[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28323 === (18))){
var inst_28264 = (state_28322[(2)]);
var state_28322__$1 = state_28322;
var statearr_28375_28426 = state_28322__$1;
(statearr_28375_28426[(2)] = inst_28264);

(statearr_28375_28426[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28323 === (37))){
var state_28322__$1 = state_28322;
var statearr_28376_28427 = state_28322__$1;
(statearr_28376_28427[(2)] = null);

(statearr_28376_28427[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28323 === (8))){
var inst_28224 = (state_28322[(8)]);
var inst_28242 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28224);
var state_28322__$1 = state_28322;
var statearr_28377_28428 = state_28322__$1;
(statearr_28377_28428[(2)] = inst_28242);

(statearr_28377_28428[(1)] = (10));


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
});
return (function() {
var cljs$core$async$mix_$_state_machine__27220__auto__ = null;
var cljs$core$async$mix_$_state_machine__27220__auto____0 = (function (){
var statearr_28378 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28378[(0)] = cljs$core$async$mix_$_state_machine__27220__auto__);

(statearr_28378[(1)] = (1));

return statearr_28378;
});
var cljs$core$async$mix_$_state_machine__27220__auto____1 = (function (state_28322){
while(true){
var ret_value__27221__auto__ = (function (){try{while(true){
var result__27222__auto__ = switch__27219__auto__.call(null,state_28322);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27222__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27222__auto__;
}
break;
}
}catch (e28379){if((e28379 instanceof Object)){
var ex__27223__auto__ = e28379;
var statearr_28380_28429 = state_28322;
(statearr_28380_28429[(5)] = ex__27223__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28322);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28379;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27221__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28430 = state_28322;
state_28322 = G__28430;
continue;
} else {
return ret_value__27221__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__27220__auto__ = function(state_28322){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__27220__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__27220__auto____1.call(this,state_28322);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__27220__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__27220__auto____0;
cljs$core$async$mix_$_state_machine__27220__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__27220__auto____1;
return cljs$core$async$mix_$_state_machine__27220__auto__;
})()
})();
var state__27316__auto__ = (function (){var statearr_28381 = f__27315__auto__.call(null);
(statearr_28381[(6)] = c__27314__auto___28382);

return statearr_28381;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27316__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_28433 = (function (p,v,ch,close_QMARK_){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__4426__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_28433.call(null,p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_28434 = (function (p,v,ch){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,p,v,ch);
} else {
var m__4426__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_28434.call(null,p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_28435 = (function() {
var G__28436 = null;
var G__28436__1 = (function (p){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,p);
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
});
var G__28436__2 = (function (p,v){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return m__4429__auto__.call(null,p,v);
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return m__4426__auto__.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
});
G__28436 = function(p,v){
switch(arguments.length){
case 1:
return G__28436__1.call(this,p);
case 2:
return G__28436__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__28436.cljs$core$IFn$_invoke$arity$1 = G__28436__1;
G__28436.cljs$core$IFn$_invoke$arity$2 = G__28436__2;
return G__28436;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__28432 = arguments.length;
switch (G__28432) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_28435.call(null,p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_28435.call(null,p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__28440 = arguments.length;
switch (G__28440) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,(function (p1__28438_SHARP_){
if(cljs.core.truth_(p1__28438_SHARP_.call(null,topic))){
return p1__28438_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__28438_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28441 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28441 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta28442){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta28442 = meta28442;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async28441.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28443,meta28442__$1){
var self__ = this;
var _28443__$1 = this;
return (new cljs.core.async.t_cljs$core$async28441(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta28442__$1));
}));

(cljs.core.async.t_cljs$core$async28441.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28443){
var self__ = this;
var _28443__$1 = this;
return self__.meta28442;
}));

(cljs.core.async.t_cljs$core$async28441.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28441.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async28441.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28441.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async28441.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async28441.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async28441.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async28441.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta28442","meta28442",421209000,null)], null);
}));

(cljs.core.async.t_cljs$core$async28441.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async28441.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28441");

(cljs.core.async.t_cljs$core$async28441.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async28441");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28441.
 */
cljs.core.async.__GT_t_cljs$core$async28441 = (function cljs$core$async$__GT_t_cljs$core$async28441(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta28442){
return (new cljs.core.async.t_cljs$core$async28441(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta28442));
});

}

return (new cljs.core.async.t_cljs$core$async28441(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__27314__auto___28561 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27315__auto__ = (function (){var switch__27219__auto__ = (function (state_28515){
var state_val_28516 = (state_28515[(1)]);
if((state_val_28516 === (7))){
var inst_28511 = (state_28515[(2)]);
var state_28515__$1 = state_28515;
var statearr_28517_28562 = state_28515__$1;
(statearr_28517_28562[(2)] = inst_28511);

(statearr_28517_28562[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28516 === (20))){
var state_28515__$1 = state_28515;
var statearr_28518_28563 = state_28515__$1;
(statearr_28518_28563[(2)] = null);

(statearr_28518_28563[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28516 === (1))){
var state_28515__$1 = state_28515;
var statearr_28519_28564 = state_28515__$1;
(statearr_28519_28564[(2)] = null);

(statearr_28519_28564[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28516 === (24))){
var inst_28494 = (state_28515[(7)]);
var inst_28503 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_28494);
var state_28515__$1 = state_28515;
var statearr_28520_28565 = state_28515__$1;
(statearr_28520_28565[(2)] = inst_28503);

(statearr_28520_28565[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28516 === (4))){
var inst_28446 = (state_28515[(8)]);
var inst_28446__$1 = (state_28515[(2)]);
var inst_28447 = (inst_28446__$1 == null);
var state_28515__$1 = (function (){var statearr_28521 = state_28515;
(statearr_28521[(8)] = inst_28446__$1);

return statearr_28521;
})();
if(cljs.core.truth_(inst_28447)){
var statearr_28522_28566 = state_28515__$1;
(statearr_28522_28566[(1)] = (5));

} else {
var statearr_28523_28567 = state_28515__$1;
(statearr_28523_28567[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28516 === (15))){
var inst_28488 = (state_28515[(2)]);
var state_28515__$1 = state_28515;
var statearr_28524_28568 = state_28515__$1;
(statearr_28524_28568[(2)] = inst_28488);

(statearr_28524_28568[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28516 === (21))){
var inst_28508 = (state_28515[(2)]);
var state_28515__$1 = (function (){var statearr_28525 = state_28515;
(statearr_28525[(9)] = inst_28508);

return statearr_28525;
})();
var statearr_28526_28569 = state_28515__$1;
(statearr_28526_28569[(2)] = null);

(statearr_28526_28569[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28516 === (13))){
var inst_28470 = (state_28515[(10)]);
var inst_28472 = cljs.core.chunked_seq_QMARK_.call(null,inst_28470);
var state_28515__$1 = state_28515;
if(inst_28472){
var statearr_28527_28570 = state_28515__$1;
(statearr_28527_28570[(1)] = (16));

} else {
var statearr_28528_28571 = state_28515__$1;
(statearr_28528_28571[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28516 === (22))){
var inst_28500 = (state_28515[(2)]);
var state_28515__$1 = state_28515;
if(cljs.core.truth_(inst_28500)){
var statearr_28529_28572 = state_28515__$1;
(statearr_28529_28572[(1)] = (23));

} else {
var statearr_28530_28573 = state_28515__$1;
(statearr_28530_28573[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28516 === (6))){
var inst_28494 = (state_28515[(7)]);
var inst_28446 = (state_28515[(8)]);
var inst_28496 = (state_28515[(11)]);
var inst_28494__$1 = topic_fn.call(null,inst_28446);
var inst_28495 = cljs.core.deref.call(null,mults);
var inst_28496__$1 = cljs.core.get.call(null,inst_28495,inst_28494__$1);
var state_28515__$1 = (function (){var statearr_28531 = state_28515;
(statearr_28531[(7)] = inst_28494__$1);

(statearr_28531[(11)] = inst_28496__$1);

return statearr_28531;
})();
if(cljs.core.truth_(inst_28496__$1)){
var statearr_28532_28574 = state_28515__$1;
(statearr_28532_28574[(1)] = (19));

} else {
var statearr_28533_28575 = state_28515__$1;
(statearr_28533_28575[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28516 === (25))){
var inst_28505 = (state_28515[(2)]);
var state_28515__$1 = state_28515;
var statearr_28534_28576 = state_28515__$1;
(statearr_28534_28576[(2)] = inst_28505);

(statearr_28534_28576[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28516 === (17))){
var inst_28470 = (state_28515[(10)]);
var inst_28479 = cljs.core.first.call(null,inst_28470);
var inst_28480 = cljs.core.async.muxch_STAR_.call(null,inst_28479);
var inst_28481 = cljs.core.async.close_BANG_.call(null,inst_28480);
var inst_28482 = cljs.core.next.call(null,inst_28470);
var inst_28456 = inst_28482;
var inst_28457 = null;
var inst_28458 = (0);
var inst_28459 = (0);
var state_28515__$1 = (function (){var statearr_28535 = state_28515;
(statearr_28535[(12)] = inst_28459);

(statearr_28535[(13)] = inst_28457);

(statearr_28535[(14)] = inst_28456);

(statearr_28535[(15)] = inst_28481);

(statearr_28535[(16)] = inst_28458);

return statearr_28535;
})();
var statearr_28536_28577 = state_28515__$1;
(statearr_28536_28577[(2)] = null);

(statearr_28536_28577[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28516 === (3))){
var inst_28513 = (state_28515[(2)]);
var state_28515__$1 = state_28515;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28515__$1,inst_28513);
} else {
if((state_val_28516 === (12))){
var inst_28490 = (state_28515[(2)]);
var state_28515__$1 = state_28515;
var statearr_28537_28578 = state_28515__$1;
(statearr_28537_28578[(2)] = inst_28490);

(statearr_28537_28578[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28516 === (2))){
var state_28515__$1 = state_28515;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28515__$1,(4),ch);
} else {
if((state_val_28516 === (23))){
var state_28515__$1 = state_28515;
var statearr_28538_28579 = state_28515__$1;
(statearr_28538_28579[(2)] = null);

(statearr_28538_28579[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28516 === (19))){
var inst_28446 = (state_28515[(8)]);
var inst_28496 = (state_28515[(11)]);
var inst_28498 = cljs.core.async.muxch_STAR_.call(null,inst_28496);
var state_28515__$1 = state_28515;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28515__$1,(22),inst_28498,inst_28446);
} else {
if((state_val_28516 === (11))){
var inst_28470 = (state_28515[(10)]);
var inst_28456 = (state_28515[(14)]);
var inst_28470__$1 = cljs.core.seq.call(null,inst_28456);
var state_28515__$1 = (function (){var statearr_28539 = state_28515;
(statearr_28539[(10)] = inst_28470__$1);

return statearr_28539;
})();
if(inst_28470__$1){
var statearr_28540_28580 = state_28515__$1;
(statearr_28540_28580[(1)] = (13));

} else {
var statearr_28541_28581 = state_28515__$1;
(statearr_28541_28581[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28516 === (9))){
var inst_28492 = (state_28515[(2)]);
var state_28515__$1 = state_28515;
var statearr_28542_28582 = state_28515__$1;
(statearr_28542_28582[(2)] = inst_28492);

(statearr_28542_28582[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28516 === (5))){
var inst_28453 = cljs.core.deref.call(null,mults);
var inst_28454 = cljs.core.vals.call(null,inst_28453);
var inst_28455 = cljs.core.seq.call(null,inst_28454);
var inst_28456 = inst_28455;
var inst_28457 = null;
var inst_28458 = (0);
var inst_28459 = (0);
var state_28515__$1 = (function (){var statearr_28543 = state_28515;
(statearr_28543[(12)] = inst_28459);

(statearr_28543[(13)] = inst_28457);

(statearr_28543[(14)] = inst_28456);

(statearr_28543[(16)] = inst_28458);

return statearr_28543;
})();
var statearr_28544_28583 = state_28515__$1;
(statearr_28544_28583[(2)] = null);

(statearr_28544_28583[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28516 === (14))){
var state_28515__$1 = state_28515;
var statearr_28548_28584 = state_28515__$1;
(statearr_28548_28584[(2)] = null);

(statearr_28548_28584[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28516 === (16))){
var inst_28470 = (state_28515[(10)]);
var inst_28474 = cljs.core.chunk_first.call(null,inst_28470);
var inst_28475 = cljs.core.chunk_rest.call(null,inst_28470);
var inst_28476 = cljs.core.count.call(null,inst_28474);
var inst_28456 = inst_28475;
var inst_28457 = inst_28474;
var inst_28458 = inst_28476;
var inst_28459 = (0);
var state_28515__$1 = (function (){var statearr_28549 = state_28515;
(statearr_28549[(12)] = inst_28459);

(statearr_28549[(13)] = inst_28457);

(statearr_28549[(14)] = inst_28456);

(statearr_28549[(16)] = inst_28458);

return statearr_28549;
})();
var statearr_28550_28585 = state_28515__$1;
(statearr_28550_28585[(2)] = null);

(statearr_28550_28585[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28516 === (10))){
var inst_28459 = (state_28515[(12)]);
var inst_28457 = (state_28515[(13)]);
var inst_28456 = (state_28515[(14)]);
var inst_28458 = (state_28515[(16)]);
var inst_28464 = cljs.core._nth.call(null,inst_28457,inst_28459);
var inst_28465 = cljs.core.async.muxch_STAR_.call(null,inst_28464);
var inst_28466 = cljs.core.async.close_BANG_.call(null,inst_28465);
var inst_28467 = (inst_28459 + (1));
var tmp28545 = inst_28457;
var tmp28546 = inst_28456;
var tmp28547 = inst_28458;
var inst_28456__$1 = tmp28546;
var inst_28457__$1 = tmp28545;
var inst_28458__$1 = tmp28547;
var inst_28459__$1 = inst_28467;
var state_28515__$1 = (function (){var statearr_28551 = state_28515;
(statearr_28551[(12)] = inst_28459__$1);

(statearr_28551[(13)] = inst_28457__$1);

(statearr_28551[(14)] = inst_28456__$1);

(statearr_28551[(16)] = inst_28458__$1);

(statearr_28551[(17)] = inst_28466);

return statearr_28551;
})();
var statearr_28552_28586 = state_28515__$1;
(statearr_28552_28586[(2)] = null);

(statearr_28552_28586[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28516 === (18))){
var inst_28485 = (state_28515[(2)]);
var state_28515__$1 = state_28515;
var statearr_28553_28587 = state_28515__$1;
(statearr_28553_28587[(2)] = inst_28485);

(statearr_28553_28587[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28516 === (8))){
var inst_28459 = (state_28515[(12)]);
var inst_28458 = (state_28515[(16)]);
var inst_28461 = (inst_28459 < inst_28458);
var inst_28462 = inst_28461;
var state_28515__$1 = state_28515;
if(cljs.core.truth_(inst_28462)){
var statearr_28554_28588 = state_28515__$1;
(statearr_28554_28588[(1)] = (10));

} else {
var statearr_28555_28589 = state_28515__$1;
(statearr_28555_28589[(1)] = (11));

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
});
return (function() {
var cljs$core$async$state_machine__27220__auto__ = null;
var cljs$core$async$state_machine__27220__auto____0 = (function (){
var statearr_28556 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28556[(0)] = cljs$core$async$state_machine__27220__auto__);

(statearr_28556[(1)] = (1));

return statearr_28556;
});
var cljs$core$async$state_machine__27220__auto____1 = (function (state_28515){
while(true){
var ret_value__27221__auto__ = (function (){try{while(true){
var result__27222__auto__ = switch__27219__auto__.call(null,state_28515);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27222__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27222__auto__;
}
break;
}
}catch (e28557){if((e28557 instanceof Object)){
var ex__27223__auto__ = e28557;
var statearr_28558_28590 = state_28515;
(statearr_28558_28590[(5)] = ex__27223__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28515);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28557;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27221__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28591 = state_28515;
state_28515 = G__28591;
continue;
} else {
return ret_value__27221__auto__;
}
break;
}
});
cljs$core$async$state_machine__27220__auto__ = function(state_28515){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27220__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27220__auto____1.call(this,state_28515);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27220__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27220__auto____0;
cljs$core$async$state_machine__27220__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27220__auto____1;
return cljs$core$async$state_machine__27220__auto__;
})()
})();
var state__27316__auto__ = (function (){var statearr_28559 = f__27315__auto__.call(null);
(statearr_28559[(6)] = c__27314__auto___28561);

return statearr_28559;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27316__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__28593 = arguments.length;
switch (G__28593) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__28596 = arguments.length;
switch (G__28596) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__28599 = arguments.length;
switch (G__28599) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,(function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.call(null,cnt));
var c__27314__auto___28666 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27315__auto__ = (function (){var switch__27219__auto__ = (function (state_28638){
var state_val_28639 = (state_28638[(1)]);
if((state_val_28639 === (7))){
var state_28638__$1 = state_28638;
var statearr_28640_28667 = state_28638__$1;
(statearr_28640_28667[(2)] = null);

(statearr_28640_28667[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28639 === (1))){
var state_28638__$1 = state_28638;
var statearr_28641_28668 = state_28638__$1;
(statearr_28641_28668[(2)] = null);

(statearr_28641_28668[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28639 === (4))){
var inst_28602 = (state_28638[(7)]);
var inst_28604 = (inst_28602 < cnt);
var state_28638__$1 = state_28638;
if(cljs.core.truth_(inst_28604)){
var statearr_28642_28669 = state_28638__$1;
(statearr_28642_28669[(1)] = (6));

} else {
var statearr_28643_28670 = state_28638__$1;
(statearr_28643_28670[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28639 === (15))){
var inst_28634 = (state_28638[(2)]);
var state_28638__$1 = state_28638;
var statearr_28644_28671 = state_28638__$1;
(statearr_28644_28671[(2)] = inst_28634);

(statearr_28644_28671[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28639 === (13))){
var inst_28627 = cljs.core.async.close_BANG_.call(null,out);
var state_28638__$1 = state_28638;
var statearr_28645_28672 = state_28638__$1;
(statearr_28645_28672[(2)] = inst_28627);

(statearr_28645_28672[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28639 === (6))){
var state_28638__$1 = state_28638;
var statearr_28646_28673 = state_28638__$1;
(statearr_28646_28673[(2)] = null);

(statearr_28646_28673[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28639 === (3))){
var inst_28636 = (state_28638[(2)]);
var state_28638__$1 = state_28638;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28638__$1,inst_28636);
} else {
if((state_val_28639 === (12))){
var inst_28624 = (state_28638[(8)]);
var inst_28624__$1 = (state_28638[(2)]);
var inst_28625 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_28624__$1);
var state_28638__$1 = (function (){var statearr_28647 = state_28638;
(statearr_28647[(8)] = inst_28624__$1);

return statearr_28647;
})();
if(cljs.core.truth_(inst_28625)){
var statearr_28648_28674 = state_28638__$1;
(statearr_28648_28674[(1)] = (13));

} else {
var statearr_28649_28675 = state_28638__$1;
(statearr_28649_28675[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28639 === (2))){
var inst_28601 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_28602 = (0);
var state_28638__$1 = (function (){var statearr_28650 = state_28638;
(statearr_28650[(7)] = inst_28602);

(statearr_28650[(9)] = inst_28601);

return statearr_28650;
})();
var statearr_28651_28676 = state_28638__$1;
(statearr_28651_28676[(2)] = null);

(statearr_28651_28676[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28639 === (11))){
var inst_28602 = (state_28638[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_28638,(10),Object,null,(9));
var inst_28611 = chs__$1.call(null,inst_28602);
var inst_28612 = done.call(null,inst_28602);
var inst_28613 = cljs.core.async.take_BANG_.call(null,inst_28611,inst_28612);
var state_28638__$1 = state_28638;
var statearr_28652_28677 = state_28638__$1;
(statearr_28652_28677[(2)] = inst_28613);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28638__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28639 === (9))){
var inst_28602 = (state_28638[(7)]);
var inst_28615 = (state_28638[(2)]);
var inst_28616 = (inst_28602 + (1));
var inst_28602__$1 = inst_28616;
var state_28638__$1 = (function (){var statearr_28653 = state_28638;
(statearr_28653[(7)] = inst_28602__$1);

(statearr_28653[(10)] = inst_28615);

return statearr_28653;
})();
var statearr_28654_28678 = state_28638__$1;
(statearr_28654_28678[(2)] = null);

(statearr_28654_28678[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28639 === (5))){
var inst_28622 = (state_28638[(2)]);
var state_28638__$1 = (function (){var statearr_28655 = state_28638;
(statearr_28655[(11)] = inst_28622);

return statearr_28655;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28638__$1,(12),dchan);
} else {
if((state_val_28639 === (14))){
var inst_28624 = (state_28638[(8)]);
var inst_28629 = cljs.core.apply.call(null,f,inst_28624);
var state_28638__$1 = state_28638;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28638__$1,(16),out,inst_28629);
} else {
if((state_val_28639 === (16))){
var inst_28631 = (state_28638[(2)]);
var state_28638__$1 = (function (){var statearr_28656 = state_28638;
(statearr_28656[(12)] = inst_28631);

return statearr_28656;
})();
var statearr_28657_28679 = state_28638__$1;
(statearr_28657_28679[(2)] = null);

(statearr_28657_28679[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28639 === (10))){
var inst_28606 = (state_28638[(2)]);
var inst_28607 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_28638__$1 = (function (){var statearr_28658 = state_28638;
(statearr_28658[(13)] = inst_28606);

return statearr_28658;
})();
var statearr_28659_28680 = state_28638__$1;
(statearr_28659_28680[(2)] = inst_28607);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28638__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28639 === (8))){
var inst_28620 = (state_28638[(2)]);
var state_28638__$1 = state_28638;
var statearr_28660_28681 = state_28638__$1;
(statearr_28660_28681[(2)] = inst_28620);

(statearr_28660_28681[(1)] = (5));


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
});
return (function() {
var cljs$core$async$state_machine__27220__auto__ = null;
var cljs$core$async$state_machine__27220__auto____0 = (function (){
var statearr_28661 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28661[(0)] = cljs$core$async$state_machine__27220__auto__);

(statearr_28661[(1)] = (1));

return statearr_28661;
});
var cljs$core$async$state_machine__27220__auto____1 = (function (state_28638){
while(true){
var ret_value__27221__auto__ = (function (){try{while(true){
var result__27222__auto__ = switch__27219__auto__.call(null,state_28638);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27222__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27222__auto__;
}
break;
}
}catch (e28662){if((e28662 instanceof Object)){
var ex__27223__auto__ = e28662;
var statearr_28663_28682 = state_28638;
(statearr_28663_28682[(5)] = ex__27223__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28638);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28662;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27221__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28683 = state_28638;
state_28638 = G__28683;
continue;
} else {
return ret_value__27221__auto__;
}
break;
}
});
cljs$core$async$state_machine__27220__auto__ = function(state_28638){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27220__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27220__auto____1.call(this,state_28638);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27220__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27220__auto____0;
cljs$core$async$state_machine__27220__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27220__auto____1;
return cljs$core$async$state_machine__27220__auto__;
})()
})();
var state__27316__auto__ = (function (){var statearr_28664 = f__27315__auto__.call(null);
(statearr_28664[(6)] = c__27314__auto___28666);

return statearr_28664;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27316__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__28686 = arguments.length;
switch (G__28686) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27314__auto___28740 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27315__auto__ = (function (){var switch__27219__auto__ = (function (state_28718){
var state_val_28719 = (state_28718[(1)]);
if((state_val_28719 === (7))){
var inst_28698 = (state_28718[(7)]);
var inst_28697 = (state_28718[(8)]);
var inst_28697__$1 = (state_28718[(2)]);
var inst_28698__$1 = cljs.core.nth.call(null,inst_28697__$1,(0),null);
var inst_28699 = cljs.core.nth.call(null,inst_28697__$1,(1),null);
var inst_28700 = (inst_28698__$1 == null);
var state_28718__$1 = (function (){var statearr_28720 = state_28718;
(statearr_28720[(9)] = inst_28699);

(statearr_28720[(7)] = inst_28698__$1);

(statearr_28720[(8)] = inst_28697__$1);

return statearr_28720;
})();
if(cljs.core.truth_(inst_28700)){
var statearr_28721_28741 = state_28718__$1;
(statearr_28721_28741[(1)] = (8));

} else {
var statearr_28722_28742 = state_28718__$1;
(statearr_28722_28742[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28719 === (1))){
var inst_28687 = cljs.core.vec.call(null,chs);
var inst_28688 = inst_28687;
var state_28718__$1 = (function (){var statearr_28723 = state_28718;
(statearr_28723[(10)] = inst_28688);

return statearr_28723;
})();
var statearr_28724_28743 = state_28718__$1;
(statearr_28724_28743[(2)] = null);

(statearr_28724_28743[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28719 === (4))){
var inst_28688 = (state_28718[(10)]);
var state_28718__$1 = state_28718;
return cljs.core.async.ioc_alts_BANG_.call(null,state_28718__$1,(7),inst_28688);
} else {
if((state_val_28719 === (6))){
var inst_28714 = (state_28718[(2)]);
var state_28718__$1 = state_28718;
var statearr_28725_28744 = state_28718__$1;
(statearr_28725_28744[(2)] = inst_28714);

(statearr_28725_28744[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28719 === (3))){
var inst_28716 = (state_28718[(2)]);
var state_28718__$1 = state_28718;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28718__$1,inst_28716);
} else {
if((state_val_28719 === (2))){
var inst_28688 = (state_28718[(10)]);
var inst_28690 = cljs.core.count.call(null,inst_28688);
var inst_28691 = (inst_28690 > (0));
var state_28718__$1 = state_28718;
if(cljs.core.truth_(inst_28691)){
var statearr_28727_28745 = state_28718__$1;
(statearr_28727_28745[(1)] = (4));

} else {
var statearr_28728_28746 = state_28718__$1;
(statearr_28728_28746[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28719 === (11))){
var inst_28688 = (state_28718[(10)]);
var inst_28707 = (state_28718[(2)]);
var tmp28726 = inst_28688;
var inst_28688__$1 = tmp28726;
var state_28718__$1 = (function (){var statearr_28729 = state_28718;
(statearr_28729[(11)] = inst_28707);

(statearr_28729[(10)] = inst_28688__$1);

return statearr_28729;
})();
var statearr_28730_28747 = state_28718__$1;
(statearr_28730_28747[(2)] = null);

(statearr_28730_28747[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28719 === (9))){
var inst_28698 = (state_28718[(7)]);
var state_28718__$1 = state_28718;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28718__$1,(11),out,inst_28698);
} else {
if((state_val_28719 === (5))){
var inst_28712 = cljs.core.async.close_BANG_.call(null,out);
var state_28718__$1 = state_28718;
var statearr_28731_28748 = state_28718__$1;
(statearr_28731_28748[(2)] = inst_28712);

(statearr_28731_28748[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28719 === (10))){
var inst_28710 = (state_28718[(2)]);
var state_28718__$1 = state_28718;
var statearr_28732_28749 = state_28718__$1;
(statearr_28732_28749[(2)] = inst_28710);

(statearr_28732_28749[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28719 === (8))){
var inst_28699 = (state_28718[(9)]);
var inst_28698 = (state_28718[(7)]);
var inst_28688 = (state_28718[(10)]);
var inst_28697 = (state_28718[(8)]);
var inst_28702 = (function (){var cs = inst_28688;
var vec__28693 = inst_28697;
var v = inst_28698;
var c = inst_28699;
return (function (p1__28684_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__28684_SHARP_);
});
})();
var inst_28703 = cljs.core.filterv.call(null,inst_28702,inst_28688);
var inst_28688__$1 = inst_28703;
var state_28718__$1 = (function (){var statearr_28733 = state_28718;
(statearr_28733[(10)] = inst_28688__$1);

return statearr_28733;
})();
var statearr_28734_28750 = state_28718__$1;
(statearr_28734_28750[(2)] = null);

(statearr_28734_28750[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__27220__auto__ = null;
var cljs$core$async$state_machine__27220__auto____0 = (function (){
var statearr_28735 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28735[(0)] = cljs$core$async$state_machine__27220__auto__);

(statearr_28735[(1)] = (1));

return statearr_28735;
});
var cljs$core$async$state_machine__27220__auto____1 = (function (state_28718){
while(true){
var ret_value__27221__auto__ = (function (){try{while(true){
var result__27222__auto__ = switch__27219__auto__.call(null,state_28718);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27222__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27222__auto__;
}
break;
}
}catch (e28736){if((e28736 instanceof Object)){
var ex__27223__auto__ = e28736;
var statearr_28737_28751 = state_28718;
(statearr_28737_28751[(5)] = ex__27223__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28718);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28736;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27221__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28752 = state_28718;
state_28718 = G__28752;
continue;
} else {
return ret_value__27221__auto__;
}
break;
}
});
cljs$core$async$state_machine__27220__auto__ = function(state_28718){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27220__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27220__auto____1.call(this,state_28718);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27220__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27220__auto____0;
cljs$core$async$state_machine__27220__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27220__auto____1;
return cljs$core$async$state_machine__27220__auto__;
})()
})();
var state__27316__auto__ = (function (){var statearr_28738 = f__27315__auto__.call(null);
(statearr_28738[(6)] = c__27314__auto___28740);

return statearr_28738;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27316__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__28754 = arguments.length;
switch (G__28754) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27314__auto___28799 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27315__auto__ = (function (){var switch__27219__auto__ = (function (state_28778){
var state_val_28779 = (state_28778[(1)]);
if((state_val_28779 === (7))){
var inst_28760 = (state_28778[(7)]);
var inst_28760__$1 = (state_28778[(2)]);
var inst_28761 = (inst_28760__$1 == null);
var inst_28762 = cljs.core.not.call(null,inst_28761);
var state_28778__$1 = (function (){var statearr_28780 = state_28778;
(statearr_28780[(7)] = inst_28760__$1);

return statearr_28780;
})();
if(inst_28762){
var statearr_28781_28800 = state_28778__$1;
(statearr_28781_28800[(1)] = (8));

} else {
var statearr_28782_28801 = state_28778__$1;
(statearr_28782_28801[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28779 === (1))){
var inst_28755 = (0);
var state_28778__$1 = (function (){var statearr_28783 = state_28778;
(statearr_28783[(8)] = inst_28755);

return statearr_28783;
})();
var statearr_28784_28802 = state_28778__$1;
(statearr_28784_28802[(2)] = null);

(statearr_28784_28802[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28779 === (4))){
var state_28778__$1 = state_28778;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28778__$1,(7),ch);
} else {
if((state_val_28779 === (6))){
var inst_28773 = (state_28778[(2)]);
var state_28778__$1 = state_28778;
var statearr_28785_28803 = state_28778__$1;
(statearr_28785_28803[(2)] = inst_28773);

(statearr_28785_28803[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28779 === (3))){
var inst_28775 = (state_28778[(2)]);
var inst_28776 = cljs.core.async.close_BANG_.call(null,out);
var state_28778__$1 = (function (){var statearr_28786 = state_28778;
(statearr_28786[(9)] = inst_28775);

return statearr_28786;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28778__$1,inst_28776);
} else {
if((state_val_28779 === (2))){
var inst_28755 = (state_28778[(8)]);
var inst_28757 = (inst_28755 < n);
var state_28778__$1 = state_28778;
if(cljs.core.truth_(inst_28757)){
var statearr_28787_28804 = state_28778__$1;
(statearr_28787_28804[(1)] = (4));

} else {
var statearr_28788_28805 = state_28778__$1;
(statearr_28788_28805[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28779 === (11))){
var inst_28755 = (state_28778[(8)]);
var inst_28765 = (state_28778[(2)]);
var inst_28766 = (inst_28755 + (1));
var inst_28755__$1 = inst_28766;
var state_28778__$1 = (function (){var statearr_28789 = state_28778;
(statearr_28789[(10)] = inst_28765);

(statearr_28789[(8)] = inst_28755__$1);

return statearr_28789;
})();
var statearr_28790_28806 = state_28778__$1;
(statearr_28790_28806[(2)] = null);

(statearr_28790_28806[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28779 === (9))){
var state_28778__$1 = state_28778;
var statearr_28791_28807 = state_28778__$1;
(statearr_28791_28807[(2)] = null);

(statearr_28791_28807[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28779 === (5))){
var state_28778__$1 = state_28778;
var statearr_28792_28808 = state_28778__$1;
(statearr_28792_28808[(2)] = null);

(statearr_28792_28808[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28779 === (10))){
var inst_28770 = (state_28778[(2)]);
var state_28778__$1 = state_28778;
var statearr_28793_28809 = state_28778__$1;
(statearr_28793_28809[(2)] = inst_28770);

(statearr_28793_28809[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28779 === (8))){
var inst_28760 = (state_28778[(7)]);
var state_28778__$1 = state_28778;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28778__$1,(11),out,inst_28760);
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
});
return (function() {
var cljs$core$async$state_machine__27220__auto__ = null;
var cljs$core$async$state_machine__27220__auto____0 = (function (){
var statearr_28794 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28794[(0)] = cljs$core$async$state_machine__27220__auto__);

(statearr_28794[(1)] = (1));

return statearr_28794;
});
var cljs$core$async$state_machine__27220__auto____1 = (function (state_28778){
while(true){
var ret_value__27221__auto__ = (function (){try{while(true){
var result__27222__auto__ = switch__27219__auto__.call(null,state_28778);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27222__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27222__auto__;
}
break;
}
}catch (e28795){if((e28795 instanceof Object)){
var ex__27223__auto__ = e28795;
var statearr_28796_28810 = state_28778;
(statearr_28796_28810[(5)] = ex__27223__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28778);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28795;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27221__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28811 = state_28778;
state_28778 = G__28811;
continue;
} else {
return ret_value__27221__auto__;
}
break;
}
});
cljs$core$async$state_machine__27220__auto__ = function(state_28778){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27220__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27220__auto____1.call(this,state_28778);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27220__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27220__auto____0;
cljs$core$async$state_machine__27220__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27220__auto____1;
return cljs$core$async$state_machine__27220__auto__;
})()
})();
var state__27316__auto__ = (function (){var statearr_28797 = f__27315__auto__.call(null);
(statearr_28797[(6)] = c__27314__auto___28799);

return statearr_28797;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27316__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28813 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28813 = (function (f,ch,meta28814){
this.f = f;
this.ch = ch;
this.meta28814 = meta28814;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async28813.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28815,meta28814__$1){
var self__ = this;
var _28815__$1 = this;
return (new cljs.core.async.t_cljs$core$async28813(self__.f,self__.ch,meta28814__$1));
}));

(cljs.core.async.t_cljs$core$async28813.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28815){
var self__ = this;
var _28815__$1 = this;
return self__.meta28814;
}));

(cljs.core.async.t_cljs$core$async28813.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28813.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async28813.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async28813.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28813.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28816 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28816 = (function (f,ch,meta28814,_,fn1,meta28817){
this.f = f;
this.ch = ch;
this.meta28814 = meta28814;
this._ = _;
this.fn1 = fn1;
this.meta28817 = meta28817;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async28816.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28818,meta28817__$1){
var self__ = this;
var _28818__$1 = this;
return (new cljs.core.async.t_cljs$core$async28816(self__.f,self__.ch,self__.meta28814,self__._,self__.fn1,meta28817__$1));
}));

(cljs.core.async.t_cljs$core$async28816.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28818){
var self__ = this;
var _28818__$1 = this;
return self__.meta28817;
}));

(cljs.core.async.t_cljs$core$async28816.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28816.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
}));

(cljs.core.async.t_cljs$core$async28816.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async28816.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return (function (p1__28812_SHARP_){
return f1.call(null,(((p1__28812_SHARP_ == null))?null:self__.f.call(null,p1__28812_SHARP_)));
});
}));

(cljs.core.async.t_cljs$core$async28816.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28814","meta28814",-1700648031,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async28813","cljs.core.async/t_cljs$core$async28813",1748347059,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta28817","meta28817",-746421753,null)], null);
}));

(cljs.core.async.t_cljs$core$async28816.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async28816.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28816");

(cljs.core.async.t_cljs$core$async28816.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async28816");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28816.
 */
cljs.core.async.__GT_t_cljs$core$async28816 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async28816(f__$1,ch__$1,meta28814__$1,___$2,fn1__$1,meta28817){
return (new cljs.core.async.t_cljs$core$async28816(f__$1,ch__$1,meta28814__$1,___$2,fn1__$1,meta28817));
});

}

return (new cljs.core.async.t_cljs$core$async28816(self__.f,self__.ch,self__.meta28814,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4115__auto__ = ret;
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.deref.call(null,ret) == null)));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async28813.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28813.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async28813.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28814","meta28814",-1700648031,null)], null);
}));

(cljs.core.async.t_cljs$core$async28813.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async28813.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28813");

(cljs.core.async.t_cljs$core$async28813.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async28813");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28813.
 */
cljs.core.async.__GT_t_cljs$core$async28813 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async28813(f__$1,ch__$1,meta28814){
return (new cljs.core.async.t_cljs$core$async28813(f__$1,ch__$1,meta28814));
});

}

return (new cljs.core.async.t_cljs$core$async28813(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28819 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28819 = (function (f,ch,meta28820){
this.f = f;
this.ch = ch;
this.meta28820 = meta28820;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async28819.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28821,meta28820__$1){
var self__ = this;
var _28821__$1 = this;
return (new cljs.core.async.t_cljs$core$async28819(self__.f,self__.ch,meta28820__$1));
}));

(cljs.core.async.t_cljs$core$async28819.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28821){
var self__ = this;
var _28821__$1 = this;
return self__.meta28820;
}));

(cljs.core.async.t_cljs$core$async28819.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28819.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async28819.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28819.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async28819.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28819.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
}));

(cljs.core.async.t_cljs$core$async28819.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28820","meta28820",249879848,null)], null);
}));

(cljs.core.async.t_cljs$core$async28819.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async28819.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28819");

(cljs.core.async.t_cljs$core$async28819.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async28819");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28819.
 */
cljs.core.async.__GT_t_cljs$core$async28819 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async28819(f__$1,ch__$1,meta28820){
return (new cljs.core.async.t_cljs$core$async28819(f__$1,ch__$1,meta28820));
});

}

return (new cljs.core.async.t_cljs$core$async28819(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28822 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28822 = (function (p,ch,meta28823){
this.p = p;
this.ch = ch;
this.meta28823 = meta28823;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async28822.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28824,meta28823__$1){
var self__ = this;
var _28824__$1 = this;
return (new cljs.core.async.t_cljs$core$async28822(self__.p,self__.ch,meta28823__$1));
}));

(cljs.core.async.t_cljs$core$async28822.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28824){
var self__ = this;
var _28824__$1 = this;
return self__.meta28823;
}));

(cljs.core.async.t_cljs$core$async28822.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28822.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async28822.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
}));

(cljs.core.async.t_cljs$core$async28822.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28822.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async28822.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28822.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async28822.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28823","meta28823",1755287088,null)], null);
}));

(cljs.core.async.t_cljs$core$async28822.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async28822.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28822");

(cljs.core.async.t_cljs$core$async28822.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write.call(null,writer__4370__auto__,"cljs.core.async/t_cljs$core$async28822");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28822.
 */
cljs.core.async.__GT_t_cljs$core$async28822 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async28822(p__$1,ch__$1,meta28823){
return (new cljs.core.async.t_cljs$core$async28822(p__$1,ch__$1,meta28823));
});

}

return (new cljs.core.async.t_cljs$core$async28822(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__28826 = arguments.length;
switch (G__28826) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27314__auto___28866 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27315__auto__ = (function (){var switch__27219__auto__ = (function (state_28847){
var state_val_28848 = (state_28847[(1)]);
if((state_val_28848 === (7))){
var inst_28843 = (state_28847[(2)]);
var state_28847__$1 = state_28847;
var statearr_28849_28867 = state_28847__$1;
(statearr_28849_28867[(2)] = inst_28843);

(statearr_28849_28867[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28848 === (1))){
var state_28847__$1 = state_28847;
var statearr_28850_28868 = state_28847__$1;
(statearr_28850_28868[(2)] = null);

(statearr_28850_28868[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28848 === (4))){
var inst_28829 = (state_28847[(7)]);
var inst_28829__$1 = (state_28847[(2)]);
var inst_28830 = (inst_28829__$1 == null);
var state_28847__$1 = (function (){var statearr_28851 = state_28847;
(statearr_28851[(7)] = inst_28829__$1);

return statearr_28851;
})();
if(cljs.core.truth_(inst_28830)){
var statearr_28852_28869 = state_28847__$1;
(statearr_28852_28869[(1)] = (5));

} else {
var statearr_28853_28870 = state_28847__$1;
(statearr_28853_28870[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28848 === (6))){
var inst_28829 = (state_28847[(7)]);
var inst_28834 = p.call(null,inst_28829);
var state_28847__$1 = state_28847;
if(cljs.core.truth_(inst_28834)){
var statearr_28854_28871 = state_28847__$1;
(statearr_28854_28871[(1)] = (8));

} else {
var statearr_28855_28872 = state_28847__$1;
(statearr_28855_28872[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28848 === (3))){
var inst_28845 = (state_28847[(2)]);
var state_28847__$1 = state_28847;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28847__$1,inst_28845);
} else {
if((state_val_28848 === (2))){
var state_28847__$1 = state_28847;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28847__$1,(4),ch);
} else {
if((state_val_28848 === (11))){
var inst_28837 = (state_28847[(2)]);
var state_28847__$1 = state_28847;
var statearr_28856_28873 = state_28847__$1;
(statearr_28856_28873[(2)] = inst_28837);

(statearr_28856_28873[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28848 === (9))){
var state_28847__$1 = state_28847;
var statearr_28857_28874 = state_28847__$1;
(statearr_28857_28874[(2)] = null);

(statearr_28857_28874[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28848 === (5))){
var inst_28832 = cljs.core.async.close_BANG_.call(null,out);
var state_28847__$1 = state_28847;
var statearr_28858_28875 = state_28847__$1;
(statearr_28858_28875[(2)] = inst_28832);

(statearr_28858_28875[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28848 === (10))){
var inst_28840 = (state_28847[(2)]);
var state_28847__$1 = (function (){var statearr_28859 = state_28847;
(statearr_28859[(8)] = inst_28840);

return statearr_28859;
})();
var statearr_28860_28876 = state_28847__$1;
(statearr_28860_28876[(2)] = null);

(statearr_28860_28876[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28848 === (8))){
var inst_28829 = (state_28847[(7)]);
var state_28847__$1 = state_28847;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28847__$1,(11),out,inst_28829);
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
});
return (function() {
var cljs$core$async$state_machine__27220__auto__ = null;
var cljs$core$async$state_machine__27220__auto____0 = (function (){
var statearr_28861 = [null,null,null,null,null,null,null,null,null];
(statearr_28861[(0)] = cljs$core$async$state_machine__27220__auto__);

(statearr_28861[(1)] = (1));

return statearr_28861;
});
var cljs$core$async$state_machine__27220__auto____1 = (function (state_28847){
while(true){
var ret_value__27221__auto__ = (function (){try{while(true){
var result__27222__auto__ = switch__27219__auto__.call(null,state_28847);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27222__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27222__auto__;
}
break;
}
}catch (e28862){if((e28862 instanceof Object)){
var ex__27223__auto__ = e28862;
var statearr_28863_28877 = state_28847;
(statearr_28863_28877[(5)] = ex__27223__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28847);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28862;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27221__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28878 = state_28847;
state_28847 = G__28878;
continue;
} else {
return ret_value__27221__auto__;
}
break;
}
});
cljs$core$async$state_machine__27220__auto__ = function(state_28847){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27220__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27220__auto____1.call(this,state_28847);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27220__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27220__auto____0;
cljs$core$async$state_machine__27220__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27220__auto____1;
return cljs$core$async$state_machine__27220__auto__;
})()
})();
var state__27316__auto__ = (function (){var statearr_28864 = f__27315__auto__.call(null);
(statearr_28864[(6)] = c__27314__auto___28866);

return statearr_28864;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27316__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__28880 = arguments.length;
switch (G__28880) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__27314__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27315__auto__ = (function (){var switch__27219__auto__ = (function (state_28943){
var state_val_28944 = (state_28943[(1)]);
if((state_val_28944 === (7))){
var inst_28939 = (state_28943[(2)]);
var state_28943__$1 = state_28943;
var statearr_28945_28983 = state_28943__$1;
(statearr_28945_28983[(2)] = inst_28939);

(statearr_28945_28983[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28944 === (20))){
var inst_28909 = (state_28943[(7)]);
var inst_28920 = (state_28943[(2)]);
var inst_28921 = cljs.core.next.call(null,inst_28909);
var inst_28895 = inst_28921;
var inst_28896 = null;
var inst_28897 = (0);
var inst_28898 = (0);
var state_28943__$1 = (function (){var statearr_28946 = state_28943;
(statearr_28946[(8)] = inst_28897);

(statearr_28946[(9)] = inst_28895);

(statearr_28946[(10)] = inst_28896);

(statearr_28946[(11)] = inst_28920);

(statearr_28946[(12)] = inst_28898);

return statearr_28946;
})();
var statearr_28947_28984 = state_28943__$1;
(statearr_28947_28984[(2)] = null);

(statearr_28947_28984[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28944 === (1))){
var state_28943__$1 = state_28943;
var statearr_28948_28985 = state_28943__$1;
(statearr_28948_28985[(2)] = null);

(statearr_28948_28985[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28944 === (4))){
var inst_28884 = (state_28943[(13)]);
var inst_28884__$1 = (state_28943[(2)]);
var inst_28885 = (inst_28884__$1 == null);
var state_28943__$1 = (function (){var statearr_28949 = state_28943;
(statearr_28949[(13)] = inst_28884__$1);

return statearr_28949;
})();
if(cljs.core.truth_(inst_28885)){
var statearr_28950_28986 = state_28943__$1;
(statearr_28950_28986[(1)] = (5));

} else {
var statearr_28951_28987 = state_28943__$1;
(statearr_28951_28987[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28944 === (15))){
var state_28943__$1 = state_28943;
var statearr_28955_28988 = state_28943__$1;
(statearr_28955_28988[(2)] = null);

(statearr_28955_28988[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28944 === (21))){
var state_28943__$1 = state_28943;
var statearr_28956_28989 = state_28943__$1;
(statearr_28956_28989[(2)] = null);

(statearr_28956_28989[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28944 === (13))){
var inst_28897 = (state_28943[(8)]);
var inst_28895 = (state_28943[(9)]);
var inst_28896 = (state_28943[(10)]);
var inst_28898 = (state_28943[(12)]);
var inst_28905 = (state_28943[(2)]);
var inst_28906 = (inst_28898 + (1));
var tmp28952 = inst_28897;
var tmp28953 = inst_28895;
var tmp28954 = inst_28896;
var inst_28895__$1 = tmp28953;
var inst_28896__$1 = tmp28954;
var inst_28897__$1 = tmp28952;
var inst_28898__$1 = inst_28906;
var state_28943__$1 = (function (){var statearr_28957 = state_28943;
(statearr_28957[(8)] = inst_28897__$1);

(statearr_28957[(9)] = inst_28895__$1);

(statearr_28957[(10)] = inst_28896__$1);

(statearr_28957[(14)] = inst_28905);

(statearr_28957[(12)] = inst_28898__$1);

return statearr_28957;
})();
var statearr_28958_28990 = state_28943__$1;
(statearr_28958_28990[(2)] = null);

(statearr_28958_28990[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28944 === (22))){
var state_28943__$1 = state_28943;
var statearr_28959_28991 = state_28943__$1;
(statearr_28959_28991[(2)] = null);

(statearr_28959_28991[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28944 === (6))){
var inst_28884 = (state_28943[(13)]);
var inst_28893 = f.call(null,inst_28884);
var inst_28894 = cljs.core.seq.call(null,inst_28893);
var inst_28895 = inst_28894;
var inst_28896 = null;
var inst_28897 = (0);
var inst_28898 = (0);
var state_28943__$1 = (function (){var statearr_28960 = state_28943;
(statearr_28960[(8)] = inst_28897);

(statearr_28960[(9)] = inst_28895);

(statearr_28960[(10)] = inst_28896);

(statearr_28960[(12)] = inst_28898);

return statearr_28960;
})();
var statearr_28961_28992 = state_28943__$1;
(statearr_28961_28992[(2)] = null);

(statearr_28961_28992[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28944 === (17))){
var inst_28909 = (state_28943[(7)]);
var inst_28913 = cljs.core.chunk_first.call(null,inst_28909);
var inst_28914 = cljs.core.chunk_rest.call(null,inst_28909);
var inst_28915 = cljs.core.count.call(null,inst_28913);
var inst_28895 = inst_28914;
var inst_28896 = inst_28913;
var inst_28897 = inst_28915;
var inst_28898 = (0);
var state_28943__$1 = (function (){var statearr_28962 = state_28943;
(statearr_28962[(8)] = inst_28897);

(statearr_28962[(9)] = inst_28895);

(statearr_28962[(10)] = inst_28896);

(statearr_28962[(12)] = inst_28898);

return statearr_28962;
})();
var statearr_28963_28993 = state_28943__$1;
(statearr_28963_28993[(2)] = null);

(statearr_28963_28993[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28944 === (3))){
var inst_28941 = (state_28943[(2)]);
var state_28943__$1 = state_28943;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28943__$1,inst_28941);
} else {
if((state_val_28944 === (12))){
var inst_28929 = (state_28943[(2)]);
var state_28943__$1 = state_28943;
var statearr_28964_28994 = state_28943__$1;
(statearr_28964_28994[(2)] = inst_28929);

(statearr_28964_28994[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28944 === (2))){
var state_28943__$1 = state_28943;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28943__$1,(4),in$);
} else {
if((state_val_28944 === (23))){
var inst_28937 = (state_28943[(2)]);
var state_28943__$1 = state_28943;
var statearr_28965_28995 = state_28943__$1;
(statearr_28965_28995[(2)] = inst_28937);

(statearr_28965_28995[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28944 === (19))){
var inst_28924 = (state_28943[(2)]);
var state_28943__$1 = state_28943;
var statearr_28966_28996 = state_28943__$1;
(statearr_28966_28996[(2)] = inst_28924);

(statearr_28966_28996[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28944 === (11))){
var inst_28895 = (state_28943[(9)]);
var inst_28909 = (state_28943[(7)]);
var inst_28909__$1 = cljs.core.seq.call(null,inst_28895);
var state_28943__$1 = (function (){var statearr_28967 = state_28943;
(statearr_28967[(7)] = inst_28909__$1);

return statearr_28967;
})();
if(inst_28909__$1){
var statearr_28968_28997 = state_28943__$1;
(statearr_28968_28997[(1)] = (14));

} else {
var statearr_28969_28998 = state_28943__$1;
(statearr_28969_28998[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28944 === (9))){
var inst_28931 = (state_28943[(2)]);
var inst_28932 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_28943__$1 = (function (){var statearr_28970 = state_28943;
(statearr_28970[(15)] = inst_28931);

return statearr_28970;
})();
if(cljs.core.truth_(inst_28932)){
var statearr_28971_28999 = state_28943__$1;
(statearr_28971_28999[(1)] = (21));

} else {
var statearr_28972_29000 = state_28943__$1;
(statearr_28972_29000[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28944 === (5))){
var inst_28887 = cljs.core.async.close_BANG_.call(null,out);
var state_28943__$1 = state_28943;
var statearr_28973_29001 = state_28943__$1;
(statearr_28973_29001[(2)] = inst_28887);

(statearr_28973_29001[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28944 === (14))){
var inst_28909 = (state_28943[(7)]);
var inst_28911 = cljs.core.chunked_seq_QMARK_.call(null,inst_28909);
var state_28943__$1 = state_28943;
if(inst_28911){
var statearr_28974_29002 = state_28943__$1;
(statearr_28974_29002[(1)] = (17));

} else {
var statearr_28975_29003 = state_28943__$1;
(statearr_28975_29003[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28944 === (16))){
var inst_28927 = (state_28943[(2)]);
var state_28943__$1 = state_28943;
var statearr_28976_29004 = state_28943__$1;
(statearr_28976_29004[(2)] = inst_28927);

(statearr_28976_29004[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28944 === (10))){
var inst_28896 = (state_28943[(10)]);
var inst_28898 = (state_28943[(12)]);
var inst_28903 = cljs.core._nth.call(null,inst_28896,inst_28898);
var state_28943__$1 = state_28943;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28943__$1,(13),out,inst_28903);
} else {
if((state_val_28944 === (18))){
var inst_28909 = (state_28943[(7)]);
var inst_28918 = cljs.core.first.call(null,inst_28909);
var state_28943__$1 = state_28943;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28943__$1,(20),out,inst_28918);
} else {
if((state_val_28944 === (8))){
var inst_28897 = (state_28943[(8)]);
var inst_28898 = (state_28943[(12)]);
var inst_28900 = (inst_28898 < inst_28897);
var inst_28901 = inst_28900;
var state_28943__$1 = state_28943;
if(cljs.core.truth_(inst_28901)){
var statearr_28977_29005 = state_28943__$1;
(statearr_28977_29005[(1)] = (10));

} else {
var statearr_28978_29006 = state_28943__$1;
(statearr_28978_29006[(1)] = (11));

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
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__27220__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__27220__auto____0 = (function (){
var statearr_28979 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28979[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__27220__auto__);

(statearr_28979[(1)] = (1));

return statearr_28979;
});
var cljs$core$async$mapcat_STAR__$_state_machine__27220__auto____1 = (function (state_28943){
while(true){
var ret_value__27221__auto__ = (function (){try{while(true){
var result__27222__auto__ = switch__27219__auto__.call(null,state_28943);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27222__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27222__auto__;
}
break;
}
}catch (e28980){if((e28980 instanceof Object)){
var ex__27223__auto__ = e28980;
var statearr_28981_29007 = state_28943;
(statearr_28981_29007[(5)] = ex__27223__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28943);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28980;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27221__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29008 = state_28943;
state_28943 = G__29008;
continue;
} else {
return ret_value__27221__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__27220__auto__ = function(state_28943){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__27220__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__27220__auto____1.call(this,state_28943);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__27220__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__27220__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__27220__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__27220__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__27220__auto__;
})()
})();
var state__27316__auto__ = (function (){var statearr_28982 = f__27315__auto__.call(null);
(statearr_28982[(6)] = c__27314__auto__);

return statearr_28982;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27316__auto__);
}));

return c__27314__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__29010 = arguments.length;
switch (G__29010) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__29013 = arguments.length;
switch (G__29013) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__29016 = arguments.length;
switch (G__29016) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27314__auto___29063 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27315__auto__ = (function (){var switch__27219__auto__ = (function (state_29040){
var state_val_29041 = (state_29040[(1)]);
if((state_val_29041 === (7))){
var inst_29035 = (state_29040[(2)]);
var state_29040__$1 = state_29040;
var statearr_29042_29064 = state_29040__$1;
(statearr_29042_29064[(2)] = inst_29035);

(statearr_29042_29064[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29041 === (1))){
var inst_29017 = null;
var state_29040__$1 = (function (){var statearr_29043 = state_29040;
(statearr_29043[(7)] = inst_29017);

return statearr_29043;
})();
var statearr_29044_29065 = state_29040__$1;
(statearr_29044_29065[(2)] = null);

(statearr_29044_29065[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29041 === (4))){
var inst_29020 = (state_29040[(8)]);
var inst_29020__$1 = (state_29040[(2)]);
var inst_29021 = (inst_29020__$1 == null);
var inst_29022 = cljs.core.not.call(null,inst_29021);
var state_29040__$1 = (function (){var statearr_29045 = state_29040;
(statearr_29045[(8)] = inst_29020__$1);

return statearr_29045;
})();
if(inst_29022){
var statearr_29046_29066 = state_29040__$1;
(statearr_29046_29066[(1)] = (5));

} else {
var statearr_29047_29067 = state_29040__$1;
(statearr_29047_29067[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29041 === (6))){
var state_29040__$1 = state_29040;
var statearr_29048_29068 = state_29040__$1;
(statearr_29048_29068[(2)] = null);

(statearr_29048_29068[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29041 === (3))){
var inst_29037 = (state_29040[(2)]);
var inst_29038 = cljs.core.async.close_BANG_.call(null,out);
var state_29040__$1 = (function (){var statearr_29049 = state_29040;
(statearr_29049[(9)] = inst_29037);

return statearr_29049;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29040__$1,inst_29038);
} else {
if((state_val_29041 === (2))){
var state_29040__$1 = state_29040;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29040__$1,(4),ch);
} else {
if((state_val_29041 === (11))){
var inst_29020 = (state_29040[(8)]);
var inst_29029 = (state_29040[(2)]);
var inst_29017 = inst_29020;
var state_29040__$1 = (function (){var statearr_29050 = state_29040;
(statearr_29050[(10)] = inst_29029);

(statearr_29050[(7)] = inst_29017);

return statearr_29050;
})();
var statearr_29051_29069 = state_29040__$1;
(statearr_29051_29069[(2)] = null);

(statearr_29051_29069[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29041 === (9))){
var inst_29020 = (state_29040[(8)]);
var state_29040__$1 = state_29040;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29040__$1,(11),out,inst_29020);
} else {
if((state_val_29041 === (5))){
var inst_29020 = (state_29040[(8)]);
var inst_29017 = (state_29040[(7)]);
var inst_29024 = cljs.core._EQ_.call(null,inst_29020,inst_29017);
var state_29040__$1 = state_29040;
if(inst_29024){
var statearr_29053_29070 = state_29040__$1;
(statearr_29053_29070[(1)] = (8));

} else {
var statearr_29054_29071 = state_29040__$1;
(statearr_29054_29071[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29041 === (10))){
var inst_29032 = (state_29040[(2)]);
var state_29040__$1 = state_29040;
var statearr_29055_29072 = state_29040__$1;
(statearr_29055_29072[(2)] = inst_29032);

(statearr_29055_29072[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29041 === (8))){
var inst_29017 = (state_29040[(7)]);
var tmp29052 = inst_29017;
var inst_29017__$1 = tmp29052;
var state_29040__$1 = (function (){var statearr_29056 = state_29040;
(statearr_29056[(7)] = inst_29017__$1);

return statearr_29056;
})();
var statearr_29057_29073 = state_29040__$1;
(statearr_29057_29073[(2)] = null);

(statearr_29057_29073[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__27220__auto__ = null;
var cljs$core$async$state_machine__27220__auto____0 = (function (){
var statearr_29058 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29058[(0)] = cljs$core$async$state_machine__27220__auto__);

(statearr_29058[(1)] = (1));

return statearr_29058;
});
var cljs$core$async$state_machine__27220__auto____1 = (function (state_29040){
while(true){
var ret_value__27221__auto__ = (function (){try{while(true){
var result__27222__auto__ = switch__27219__auto__.call(null,state_29040);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27222__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27222__auto__;
}
break;
}
}catch (e29059){if((e29059 instanceof Object)){
var ex__27223__auto__ = e29059;
var statearr_29060_29074 = state_29040;
(statearr_29060_29074[(5)] = ex__27223__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29040);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29059;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27221__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29075 = state_29040;
state_29040 = G__29075;
continue;
} else {
return ret_value__27221__auto__;
}
break;
}
});
cljs$core$async$state_machine__27220__auto__ = function(state_29040){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27220__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27220__auto____1.call(this,state_29040);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27220__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27220__auto____0;
cljs$core$async$state_machine__27220__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27220__auto____1;
return cljs$core$async$state_machine__27220__auto__;
})()
})();
var state__27316__auto__ = (function (){var statearr_29061 = f__27315__auto__.call(null);
(statearr_29061[(6)] = c__27314__auto___29063);

return statearr_29061;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27316__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__29077 = arguments.length;
switch (G__29077) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27314__auto___29143 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27315__auto__ = (function (){var switch__27219__auto__ = (function (state_29115){
var state_val_29116 = (state_29115[(1)]);
if((state_val_29116 === (7))){
var inst_29111 = (state_29115[(2)]);
var state_29115__$1 = state_29115;
var statearr_29117_29144 = state_29115__$1;
(statearr_29117_29144[(2)] = inst_29111);

(statearr_29117_29144[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29116 === (1))){
var inst_29078 = (new Array(n));
var inst_29079 = inst_29078;
var inst_29080 = (0);
var state_29115__$1 = (function (){var statearr_29118 = state_29115;
(statearr_29118[(7)] = inst_29080);

(statearr_29118[(8)] = inst_29079);

return statearr_29118;
})();
var statearr_29119_29145 = state_29115__$1;
(statearr_29119_29145[(2)] = null);

(statearr_29119_29145[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29116 === (4))){
var inst_29083 = (state_29115[(9)]);
var inst_29083__$1 = (state_29115[(2)]);
var inst_29084 = (inst_29083__$1 == null);
var inst_29085 = cljs.core.not.call(null,inst_29084);
var state_29115__$1 = (function (){var statearr_29120 = state_29115;
(statearr_29120[(9)] = inst_29083__$1);

return statearr_29120;
})();
if(inst_29085){
var statearr_29121_29146 = state_29115__$1;
(statearr_29121_29146[(1)] = (5));

} else {
var statearr_29122_29147 = state_29115__$1;
(statearr_29122_29147[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29116 === (15))){
var inst_29105 = (state_29115[(2)]);
var state_29115__$1 = state_29115;
var statearr_29123_29148 = state_29115__$1;
(statearr_29123_29148[(2)] = inst_29105);

(statearr_29123_29148[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29116 === (13))){
var state_29115__$1 = state_29115;
var statearr_29124_29149 = state_29115__$1;
(statearr_29124_29149[(2)] = null);

(statearr_29124_29149[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29116 === (6))){
var inst_29080 = (state_29115[(7)]);
var inst_29101 = (inst_29080 > (0));
var state_29115__$1 = state_29115;
if(cljs.core.truth_(inst_29101)){
var statearr_29125_29150 = state_29115__$1;
(statearr_29125_29150[(1)] = (12));

} else {
var statearr_29126_29151 = state_29115__$1;
(statearr_29126_29151[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29116 === (3))){
var inst_29113 = (state_29115[(2)]);
var state_29115__$1 = state_29115;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29115__$1,inst_29113);
} else {
if((state_val_29116 === (12))){
var inst_29079 = (state_29115[(8)]);
var inst_29103 = cljs.core.vec.call(null,inst_29079);
var state_29115__$1 = state_29115;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29115__$1,(15),out,inst_29103);
} else {
if((state_val_29116 === (2))){
var state_29115__$1 = state_29115;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29115__$1,(4),ch);
} else {
if((state_val_29116 === (11))){
var inst_29095 = (state_29115[(2)]);
var inst_29096 = (new Array(n));
var inst_29079 = inst_29096;
var inst_29080 = (0);
var state_29115__$1 = (function (){var statearr_29127 = state_29115;
(statearr_29127[(7)] = inst_29080);

(statearr_29127[(10)] = inst_29095);

(statearr_29127[(8)] = inst_29079);

return statearr_29127;
})();
var statearr_29128_29152 = state_29115__$1;
(statearr_29128_29152[(2)] = null);

(statearr_29128_29152[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29116 === (9))){
var inst_29079 = (state_29115[(8)]);
var inst_29093 = cljs.core.vec.call(null,inst_29079);
var state_29115__$1 = state_29115;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29115__$1,(11),out,inst_29093);
} else {
if((state_val_29116 === (5))){
var inst_29083 = (state_29115[(9)]);
var inst_29080 = (state_29115[(7)]);
var inst_29088 = (state_29115[(11)]);
var inst_29079 = (state_29115[(8)]);
var inst_29087 = (inst_29079[inst_29080] = inst_29083);
var inst_29088__$1 = (inst_29080 + (1));
var inst_29089 = (inst_29088__$1 < n);
var state_29115__$1 = (function (){var statearr_29129 = state_29115;
(statearr_29129[(12)] = inst_29087);

(statearr_29129[(11)] = inst_29088__$1);

return statearr_29129;
})();
if(cljs.core.truth_(inst_29089)){
var statearr_29130_29153 = state_29115__$1;
(statearr_29130_29153[(1)] = (8));

} else {
var statearr_29131_29154 = state_29115__$1;
(statearr_29131_29154[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29116 === (14))){
var inst_29108 = (state_29115[(2)]);
var inst_29109 = cljs.core.async.close_BANG_.call(null,out);
var state_29115__$1 = (function (){var statearr_29133 = state_29115;
(statearr_29133[(13)] = inst_29108);

return statearr_29133;
})();
var statearr_29134_29155 = state_29115__$1;
(statearr_29134_29155[(2)] = inst_29109);

(statearr_29134_29155[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29116 === (10))){
var inst_29099 = (state_29115[(2)]);
var state_29115__$1 = state_29115;
var statearr_29135_29156 = state_29115__$1;
(statearr_29135_29156[(2)] = inst_29099);

(statearr_29135_29156[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29116 === (8))){
var inst_29088 = (state_29115[(11)]);
var inst_29079 = (state_29115[(8)]);
var tmp29132 = inst_29079;
var inst_29079__$1 = tmp29132;
var inst_29080 = inst_29088;
var state_29115__$1 = (function (){var statearr_29136 = state_29115;
(statearr_29136[(7)] = inst_29080);

(statearr_29136[(8)] = inst_29079__$1);

return statearr_29136;
})();
var statearr_29137_29157 = state_29115__$1;
(statearr_29137_29157[(2)] = null);

(statearr_29137_29157[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__27220__auto__ = null;
var cljs$core$async$state_machine__27220__auto____0 = (function (){
var statearr_29138 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29138[(0)] = cljs$core$async$state_machine__27220__auto__);

(statearr_29138[(1)] = (1));

return statearr_29138;
});
var cljs$core$async$state_machine__27220__auto____1 = (function (state_29115){
while(true){
var ret_value__27221__auto__ = (function (){try{while(true){
var result__27222__auto__ = switch__27219__auto__.call(null,state_29115);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27222__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27222__auto__;
}
break;
}
}catch (e29139){if((e29139 instanceof Object)){
var ex__27223__auto__ = e29139;
var statearr_29140_29158 = state_29115;
(statearr_29140_29158[(5)] = ex__27223__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29115);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29139;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27221__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29159 = state_29115;
state_29115 = G__29159;
continue;
} else {
return ret_value__27221__auto__;
}
break;
}
});
cljs$core$async$state_machine__27220__auto__ = function(state_29115){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27220__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27220__auto____1.call(this,state_29115);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27220__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27220__auto____0;
cljs$core$async$state_machine__27220__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27220__auto____1;
return cljs$core$async$state_machine__27220__auto__;
})()
})();
var state__27316__auto__ = (function (){var statearr_29141 = f__27315__auto__.call(null);
(statearr_29141[(6)] = c__27314__auto___29143);

return statearr_29141;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27316__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__29161 = arguments.length;
switch (G__29161) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__27314__auto___29231 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,(function (){
var f__27315__auto__ = (function (){var switch__27219__auto__ = (function (state_29203){
var state_val_29204 = (state_29203[(1)]);
if((state_val_29204 === (7))){
var inst_29199 = (state_29203[(2)]);
var state_29203__$1 = state_29203;
var statearr_29205_29232 = state_29203__$1;
(statearr_29205_29232[(2)] = inst_29199);

(statearr_29205_29232[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29204 === (1))){
var inst_29162 = [];
var inst_29163 = inst_29162;
var inst_29164 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_29203__$1 = (function (){var statearr_29206 = state_29203;
(statearr_29206[(7)] = inst_29164);

(statearr_29206[(8)] = inst_29163);

return statearr_29206;
})();
var statearr_29207_29233 = state_29203__$1;
(statearr_29207_29233[(2)] = null);

(statearr_29207_29233[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29204 === (4))){
var inst_29167 = (state_29203[(9)]);
var inst_29167__$1 = (state_29203[(2)]);
var inst_29168 = (inst_29167__$1 == null);
var inst_29169 = cljs.core.not.call(null,inst_29168);
var state_29203__$1 = (function (){var statearr_29208 = state_29203;
(statearr_29208[(9)] = inst_29167__$1);

return statearr_29208;
})();
if(inst_29169){
var statearr_29209_29234 = state_29203__$1;
(statearr_29209_29234[(1)] = (5));

} else {
var statearr_29210_29235 = state_29203__$1;
(statearr_29210_29235[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29204 === (15))){
var inst_29193 = (state_29203[(2)]);
var state_29203__$1 = state_29203;
var statearr_29211_29236 = state_29203__$1;
(statearr_29211_29236[(2)] = inst_29193);

(statearr_29211_29236[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29204 === (13))){
var state_29203__$1 = state_29203;
var statearr_29212_29237 = state_29203__$1;
(statearr_29212_29237[(2)] = null);

(statearr_29212_29237[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29204 === (6))){
var inst_29163 = (state_29203[(8)]);
var inst_29188 = inst_29163.length;
var inst_29189 = (inst_29188 > (0));
var state_29203__$1 = state_29203;
if(cljs.core.truth_(inst_29189)){
var statearr_29213_29238 = state_29203__$1;
(statearr_29213_29238[(1)] = (12));

} else {
var statearr_29214_29239 = state_29203__$1;
(statearr_29214_29239[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29204 === (3))){
var inst_29201 = (state_29203[(2)]);
var state_29203__$1 = state_29203;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29203__$1,inst_29201);
} else {
if((state_val_29204 === (12))){
var inst_29163 = (state_29203[(8)]);
var inst_29191 = cljs.core.vec.call(null,inst_29163);
var state_29203__$1 = state_29203;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29203__$1,(15),out,inst_29191);
} else {
if((state_val_29204 === (2))){
var state_29203__$1 = state_29203;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29203__$1,(4),ch);
} else {
if((state_val_29204 === (11))){
var inst_29171 = (state_29203[(10)]);
var inst_29167 = (state_29203[(9)]);
var inst_29181 = (state_29203[(2)]);
var inst_29182 = [];
var inst_29183 = inst_29182.push(inst_29167);
var inst_29163 = inst_29182;
var inst_29164 = inst_29171;
var state_29203__$1 = (function (){var statearr_29215 = state_29203;
(statearr_29215[(11)] = inst_29181);

(statearr_29215[(12)] = inst_29183);

(statearr_29215[(7)] = inst_29164);

(statearr_29215[(8)] = inst_29163);

return statearr_29215;
})();
var statearr_29216_29240 = state_29203__$1;
(statearr_29216_29240[(2)] = null);

(statearr_29216_29240[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29204 === (9))){
var inst_29163 = (state_29203[(8)]);
var inst_29179 = cljs.core.vec.call(null,inst_29163);
var state_29203__$1 = state_29203;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29203__$1,(11),out,inst_29179);
} else {
if((state_val_29204 === (5))){
var inst_29171 = (state_29203[(10)]);
var inst_29167 = (state_29203[(9)]);
var inst_29164 = (state_29203[(7)]);
var inst_29171__$1 = f.call(null,inst_29167);
var inst_29172 = cljs.core._EQ_.call(null,inst_29171__$1,inst_29164);
var inst_29173 = cljs.core.keyword_identical_QMARK_.call(null,inst_29164,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_29174 = ((inst_29172) || (inst_29173));
var state_29203__$1 = (function (){var statearr_29217 = state_29203;
(statearr_29217[(10)] = inst_29171__$1);

return statearr_29217;
})();
if(cljs.core.truth_(inst_29174)){
var statearr_29218_29241 = state_29203__$1;
(statearr_29218_29241[(1)] = (8));

} else {
var statearr_29219_29242 = state_29203__$1;
(statearr_29219_29242[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29204 === (14))){
var inst_29196 = (state_29203[(2)]);
var inst_29197 = cljs.core.async.close_BANG_.call(null,out);
var state_29203__$1 = (function (){var statearr_29221 = state_29203;
(statearr_29221[(13)] = inst_29196);

return statearr_29221;
})();
var statearr_29222_29243 = state_29203__$1;
(statearr_29222_29243[(2)] = inst_29197);

(statearr_29222_29243[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29204 === (10))){
var inst_29186 = (state_29203[(2)]);
var state_29203__$1 = state_29203;
var statearr_29223_29244 = state_29203__$1;
(statearr_29223_29244[(2)] = inst_29186);

(statearr_29223_29244[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29204 === (8))){
var inst_29171 = (state_29203[(10)]);
var inst_29167 = (state_29203[(9)]);
var inst_29163 = (state_29203[(8)]);
var inst_29176 = inst_29163.push(inst_29167);
var tmp29220 = inst_29163;
var inst_29163__$1 = tmp29220;
var inst_29164 = inst_29171;
var state_29203__$1 = (function (){var statearr_29224 = state_29203;
(statearr_29224[(14)] = inst_29176);

(statearr_29224[(7)] = inst_29164);

(statearr_29224[(8)] = inst_29163__$1);

return statearr_29224;
})();
var statearr_29225_29245 = state_29203__$1;
(statearr_29225_29245[(2)] = null);

(statearr_29225_29245[(1)] = (2));


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
});
return (function() {
var cljs$core$async$state_machine__27220__auto__ = null;
var cljs$core$async$state_machine__27220__auto____0 = (function (){
var statearr_29226 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29226[(0)] = cljs$core$async$state_machine__27220__auto__);

(statearr_29226[(1)] = (1));

return statearr_29226;
});
var cljs$core$async$state_machine__27220__auto____1 = (function (state_29203){
while(true){
var ret_value__27221__auto__ = (function (){try{while(true){
var result__27222__auto__ = switch__27219__auto__.call(null,state_29203);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27222__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27222__auto__;
}
break;
}
}catch (e29227){if((e29227 instanceof Object)){
var ex__27223__auto__ = e29227;
var statearr_29228_29246 = state_29203;
(statearr_29228_29246[(5)] = ex__27223__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29203);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29227;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27221__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29247 = state_29203;
state_29203 = G__29247;
continue;
} else {
return ret_value__27221__auto__;
}
break;
}
});
cljs$core$async$state_machine__27220__auto__ = function(state_29203){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__27220__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__27220__auto____1.call(this,state_29203);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__27220__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__27220__auto____0;
cljs$core$async$state_machine__27220__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__27220__auto____1;
return cljs$core$async$state_machine__27220__auto__;
})()
})();
var state__27316__auto__ = (function (){var statearr_29229 = f__27315__auto__.call(null);
(statearr_29229[(6)] = c__27314__auto___29231);

return statearr_29229;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__27316__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=async.js.map?rel=1595490058587
