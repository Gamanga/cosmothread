// jQuery Hover Delay 1.1.0 (20130401)
// By John Terenzio | http://terenz.io/ | MIT License
(function(b){var e=b.fn.hover,d=function(a,d,e){return this.each(function(){var c;b(this).on("mouseenter mouseleave",function(b){var f=this,g="mouseenter"===b.type?a:d;c=c?window.clearTimeout(c):window.setTimeout(function(){c=void 0;g.call(f,b)},e)})})};b.fn.hover=function(){var a=Array.prototype.slice.call(arguments);return 3===a.length&&"number"===typeof a[2]?d.apply(this,a):2===a.length&&"number"===typeof a[1]?d.call(this,a[0],a[0],a[1]):e.apply(this,a)}})(window.jQuery);

//https://github.com/jquery/jquery-color
//The color plugin is only 4kb so much cheaper than the UI library. Of course you'll want to use a decent version of the plugin and not some buggy old thing which doesn't handle Safari and crashes when the transitions are too fast. Since a minified version isn't supplied you might like test various compressors and make your own min version. YUI gets the best compression in this case needing only 2317 bytes and since it is so small - here it is:
(function(d){d.each(["backgroundColor","borderBottomColor","borderLeftColor","borderRightColor","borderTopColor","color","outlineColor"],function(f,e){d.fx.step[e]=function(g){if(!g.colorInit){g.start=c(g.elem,e);g.end=b(g.end);g.colorInit=true}g.elem.style[e]="rgb("+[Math.max(Math.min(parseInt((g.pos*(g.end[0]-g.start[0]))+g.start[0]),255),0),Math.max(Math.min(parseInt((g.pos*(g.end[1]-g.start[1]))+g.start[1]),255),0),Math.max(Math.min(parseInt((g.pos*(g.end[2]-g.start[2]))+g.start[2]),255),0)].join(",")+")"}});function b(f){var e;if(f&&f.constructor==Array&&f.length==3){return f}if(e=/rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(f)){return[parseInt(e[1]),parseInt(e[2]),parseInt(e[3])]}if(e=/rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(f)){return[parseFloat(e[1])*2.55,parseFloat(e[2])*2.55,parseFloat(e[3])*2.55]}if(e=/#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(f)){return[parseInt(e[1],16),parseInt(e[2],16),parseInt(e[3],16)]}if(e=/#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(f)){return[parseInt(e[1]+e[1],16),parseInt(e[2]+e[2],16),parseInt(e[3]+e[3],16)]}if(e=/rgba\(0, 0, 0, 0\)/.exec(f)){return a.transparent}return a[d.trim(f).toLowerCase()]}function c(g,e){var f;do{f=d.css(g,e);if(f!=""&&f!="transparent"||d.nodeName(g,"body")){break}e="backgroundColor"}while(g=g.parentNode);return b(f)}var a={aqua:[0,255,255],azure:[240,255,255],beige:[245,245,220],black:[0,0,0],blue:[0,0,255],brown:[165,42,42],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgrey:[169,169,169],darkgreen:[0,100,0],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkviolet:[148,0,211],fuchsia:[255,0,255],gold:[255,215,0],green:[0,128,0],indigo:[75,0,130],khaki:[240,230,140],lightblue:[173,216,230],lightcyan:[224,255,255],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightyellow:[255,255,224],lime:[0,255,0],magenta:[255,0,255],maroon:[128,0,0],navy:[0,0,128],olive:[128,128,0],orange:[255,165,0],pink:[255,192,203],purple:[128,0,128],violet:[128,0,128],red:[255,0,0],silver:[192,192,192],white:[255,255,255],yellow:[255,255,0],transparent:[255,255,255]}})(jQuery);


/* jQuery Storage API Plugin 1.7.5 https://github.com/julien-maurel/jQuery-Storage-API */
!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):e("object"==typeof exports?require("jquery"):jQuery)}(function(e){function t(t){var r,i,n,o=arguments.length,s=window[t],a=arguments,u=a[1];if(2>o)throw Error("Minimum 2 arguments must be given");if(e.isArray(u)){i={};for(var f in u){r=u[f];try{i[r]=JSON.parse(s.getItem(r))}catch(c){i[r]=s.getItem(r)}}return i}if(2!=o){try{i=JSON.parse(s.getItem(u))}catch(c){throw new ReferenceError(u+" is not defined in this storage")}for(var f=2;o-1>f;f++)if(i=i[a[f]],void 0===i)throw new ReferenceError([].slice.call(a,1,f+1).join(".")+" is not defined in this storage");if(e.isArray(a[f])){n=i,i={};for(var m in a[f])i[a[f][m]]=n[a[f][m]];return i}return i[a[f]]}try{return JSON.parse(s.getItem(u))}catch(c){return s.getItem(u)}}function r(t){var r,i,n=arguments.length,o=window[t],s=arguments,a=s[1],u=s[2],f={};if(2>n||!e.isPlainObject(a)&&3>n)throw Error("Minimum 3 arguments must be given or second parameter must be an object");if(e.isPlainObject(a)){for(var c in a)r=a[c],e.isPlainObject(r)?o.setItem(c,JSON.stringify(r)):o.setItem(c,r);return a}if(3==n)return"object"==typeof u?o.setItem(a,JSON.stringify(u)):o.setItem(a,u),u;try{i=o.getItem(a),null!=i&&(f=JSON.parse(i))}catch(m){}i=f;for(var c=2;n-2>c;c++)r=s[c],i[r]&&e.isPlainObject(i[r])||(i[r]={}),i=i[r];return i[s[c]]=s[c+1],o.setItem(a,JSON.stringify(f)),f}function i(t){var r,i,n=arguments.length,o=window[t],s=arguments,a=s[1];if(2>n)throw Error("Minimum 2 arguments must be given");if(e.isArray(a)){for(var u in a)o.removeItem(a[u]);return!0}if(2==n)return o.removeItem(a),!0;try{r=i=JSON.parse(o.getItem(a))}catch(f){throw new ReferenceError(a+" is not defined in this storage")}for(var u=2;n-1>u;u++)if(i=i[s[u]],void 0===i)throw new ReferenceError([].slice.call(s,1,u).join(".")+" is not defined in this storage");if(e.isArray(s[u]))for(var c in s[u])delete i[s[u][c]];else delete i[s[u]];return o.setItem(a,JSON.stringify(r)),!0}function n(t,r){var n=a(t);for(var o in n)i(t,n[o]);if(r)for(var o in e.namespaceStorages)u(o)}function o(r){var i=arguments.length,n=arguments,s=(window[r],n[1]);if(1==i)return 0==a(r).length;if(e.isArray(s)){for(var u=0;u<s.length;u++)if(!o(r,s[u]))return!1;return!0}try{var f=t.apply(this,arguments);e.isArray(n[i-1])||(f={totest:f});for(var u in f)if(!(e.isPlainObject(f[u])&&e.isEmptyObject(f[u])||e.isArray(f[u])&&!f[u].length)&&f[u])return!1;return!0}catch(c){return!0}}function s(r){var i=arguments.length,n=arguments,o=(window[r],n[1]);if(2>i)throw Error("Minimum 2 arguments must be given");if(e.isArray(o)){for(var a=0;a<o.length;a++)if(!s(r,o[a]))return!1;return!0}try{var u=t.apply(this,arguments);e.isArray(n[i-1])||(u={totest:u});for(var a in u)if(void 0===u[a]||null===u[a])return!1;return!0}catch(f){return!1}}function a(r){var i=arguments.length,n=window[r],o=arguments,s=(o[1],[]),a={};if(a=i>1?t.apply(this,o):n,a._cookie)for(var u in e.cookie())""!=u&&s.push(u.replace(a._prefix,""));else for(var f in a)s.push(f);return s}function u(t){if(!t||"string"!=typeof t)throw Error("First parameter must be a string");g?(window.localStorage.getItem(t)||window.localStorage.setItem(t,"{}"),window.sessionStorage.getItem(t)||window.sessionStorage.setItem(t,"{}")):(window.localCookieStorage.getItem(t)||window.localCookieStorage.setItem(t,"{}"),window.sessionCookieStorage.getItem(t)||window.sessionCookieStorage.setItem(t,"{}"));var r={localStorage:e.extend({},e.localStorage,{_ns:t}),sessionStorage:e.extend({},e.sessionStorage,{_ns:t})};return e.cookie&&(window.cookieStorage.getItem(t)||window.cookieStorage.setItem(t,"{}"),r.cookieStorage=e.extend({},e.cookieStorage,{_ns:t})),e.namespaceStorages[t]=r,r}function f(e){var t="jsapi";try{return window[e]?(window[e].setItem(t,t),window[e].removeItem(t),!0):!1}catch(r){return!1}}var c="ls_",m="ss_",g=f("localStorage"),l={_type:"",_ns:"",_callMethod:function(e,t){var r=[this._type],t=Array.prototype.slice.call(t),i=t[0];return this._ns&&r.push(this._ns),"string"==typeof i&&-1!==i.indexOf(".")&&(t.shift(),[].unshift.apply(t,i.split("."))),[].push.apply(r,t),e.apply(this,r)},get:function(){return this._callMethod(t,arguments)},set:function(){var t=arguments.length,i=arguments,n=i[0];if(1>t||!e.isPlainObject(n)&&2>t)throw Error("Minimum 2 arguments must be given or first parameter must be an object");if(e.isPlainObject(n)&&this._ns){for(var o in n)r(this._type,this._ns,o,n[o]);return n}var s=this._callMethod(r,i);return this._ns?s[n.split(".")[0]]:s},remove:function(){if(arguments.length<1)throw Error("Minimum 1 argument must be given");return this._callMethod(i,arguments)},removeAll:function(e){return this._ns?(r(this._type,this._ns,{}),!0):n(this._type,e)},isEmpty:function(){return this._callMethod(o,arguments)},isSet:function(){if(arguments.length<1)throw Error("Minimum 1 argument must be given");return this._callMethod(s,arguments)},keys:function(){return this._callMethod(a,arguments)}};if(e.cookie){window.name||(window.name=Math.floor(1e8*Math.random()));var h={_cookie:!0,_prefix:"",_expires:null,_path:null,_domain:null,setItem:function(t,r){e.cookie(this._prefix+t,r,{expires:this._expires,path:this._path,domain:this._domain})},getItem:function(t){return e.cookie(this._prefix+t)},removeItem:function(t){return e.removeCookie(this._prefix+t)},clear:function(){for(var t in e.cookie())""!=t&&(!this._prefix&&-1===t.indexOf(c)&&-1===t.indexOf(m)||this._prefix&&0===t.indexOf(this._prefix))&&e.removeCookie(t)},setExpires:function(e){return this._expires=e,this},setPath:function(e){return this._path=e,this},setDomain:function(e){return this._domain=e,this},setConf:function(e){return e.path&&(this._path=e.path),e.domain&&(this._domain=e.domain),e.expires&&(this._expires=e.expires),this},setDefaultConf:function(){this._path=this._domain=this._expires=null}};g||(window.localCookieStorage=e.extend({},h,{_prefix:c,_expires:3650}),window.sessionCookieStorage=e.extend({},h,{_prefix:m+window.name+"_"})),window.cookieStorage=e.extend({},h),e.cookieStorage=e.extend({},l,{_type:"cookieStorage",setExpires:function(e){return window.cookieStorage.setExpires(e),this},setPath:function(e){return window.cookieStorage.setPath(e),this},setDomain:function(e){return window.cookieStorage.setDomain(e),this},setConf:function(e){return window.cookieStorage.setConf(e),this},setDefaultConf:function(){return window.cookieStorage.setDefaultConf(),this}})}e.initNamespaceStorage=function(e){return u(e)},g?(e.localStorage=e.extend({},l,{_type:"localStorage"}),e.sessionStorage=e.extend({},l,{_type:"sessionStorage"})):(e.localStorage=e.extend({},l,{_type:"localCookieStorage"}),e.sessionStorage=e.extend({},l,{_type:"sessionCookieStorage"})),e.namespaceStorages={},e.removeAllStorages=function(t){e.localStorage.removeAll(t),e.sessionStorage.removeAll(t),e.cookieStorage&&e.cookieStorage.removeAll(t),t||(e.namespaceStorages={})}});


// Simple JQuery Draggable Plugin
// https://plus.google.com/108949996304093815163/about
// Usage: $(selector).drags();
(function(a){a.fn.drags=function(c){c=a.extend({handle:"",cursor:"move",draggableClass:"draggable",activeHandleClass:"active-handle"},c);var b=null;var d=(c.handle==="")?this:this.find(c.handle);d/*.css("cursor",c.cursor)*/.on("mousedown",function(j){if(c.handle===""){b=a(this);b.addClass(c.draggableClass)}else{b=a(this).parent();b.addClass(c.draggableClass).find(c.handle).addClass(c.activeHandleClass)}var i=b.outerHeight(),h=b.outerWidth(),f=b.offset().top+i-j.pageY,g=b.offset().left+h-j.pageX;a(document).on("mousemove",function(k){b.offset({top:k.pageY+f-i,left:k.pageX+g-h})}).on("mouseup",function(){a(this).off("mousemove");if(b!==null){b.removeClass(c.draggableClass);b=null}});j.preventDefault()}).on("mouseup",function(){if(c.handle===""){b.removeClass(c.draggableClass)}else{b.removeClass(c.draggableClass).find(c.handle).removeClass(c.activeHandleClass)}b=null});return this}})(jQuery);



//jQuery ismouseover method
(function($){
    $.mlp = {x:0,y:0}; // Mouse Last Position
    function documentHandler(){
        var $current = this === document ? $(this) : $(this).contents();
        $current.mousemove(function(e){jQuery.mlp = {x:e.pageX,y:e.pageY}});
        //$current.find("iframe").load(documentHandler);
    }
    $(documentHandler);
    $.fn.ismouseover = function(overThis) {  
        var result = false;
        this.eq(0).each(function() {  
                //var $current = $(this).is("iframe") ? $(this).contents().find("body") : $(this);
                var $current = $(this);
                var offset = $current.offset();
                result =    offset.left<=$.mlp.x && offset.left + $current.outerWidth() > $.mlp.x &&
                            offset.top<=$.mlp.y && offset.top + $current.outerHeight() > $.mlp.y;
        });  
        return result;
    };  
})(jQuery);


/* http://www.sitepoint.com/getscript-mutiple-scripts/
enhance $.getSctipt to handle mutiple scripts */
var getScript = jQuery.getScript;
jQuery.getScript = function( resources, callback ) {

   var // reference declaration &amp; localization
   length = resources.length,
   handler = function() { counter++; },
   deferreds = [],
   counter = 0,
   idx = 0;

  for ( ; idx < length; idx++ ) {
       deferreds.push(
           getScript( resources[ idx ], handler )
       );
   }

   jQuery.when.apply( null, deferreds ).then(function() {
       callback && callback();
   });
};
/*var arrayUnique = function(a) {
    return a.reduce(function(p, c) {
        if (p.indexOf(c) < 0) p.push(c);
        return p;
    }, []);
};*/


var nullfunc = function() { return undefined; };
var window_width = $(window).width();
var hover_delay_in = 50;
var hover_delay_out = 800;
var min_pc_width = 767;

$(window).resize(function() {
	window_width = $(window).width();
});

function isset(buff) {if (typeof(buff)==='undefined') return false;}

function array_unique(arr) {
	return arr.filter(function(elem, pos) {
		return arr.indexOf(elem) == pos;
	})
}

function removeA(arr) {
    var what, a = arguments, L = a.length, ax;
    while (L > 1 && arr.length) {
        what = a[--L];
        while ((ax= arr.indexOf(what)) !== -1) {
            arr.splice(ax, 1);
        }
    }
    return arr;
}

function get_ext(fn) {
	return fn.substr(fn.lastIndexOf('.') + 1);
}


function thread_save_tags(thread_id,sel2,oncomplete) {
	$.post(ajax_url, { 'act':'edit_tags','thread_id':thread_id,'val':$(sel2).select2("val") }, function(data) {
		check_captcha(data);

		//if(is_admin) alert( JSON.stringify(data) );
		
		if((data)&&(data.ok==1)) {
			//$('#edit_tags').toggle();
			 
			if(data.tags) $(sel2).select2("data",data.tags);
			
			if((data)&&(data.text)) my_notify(data.text);
			
			//$('#edit_message').html('Сохранено.').show();
			
			if(oncomplete) oncomplete(data.tags,data.tags_html);
		} else {
			/*if((data)&&(data.error)) $('#edit_error').html(data.error).show();
				else $('#edit_error').html('Неизвестная ошибка.').show();*/
			if((data)&&(data.text)) my_notify(data.text);
			else my_notify('Неизвестная ошибка.');
		}
	},'json');
}

function stringToColor(str) {
	// str to hash
	for (var i = 0, hash = 0; i < str.length; hash = str.charCodeAt(i++) + ((hash << 5) - hash));
	// int/hash to hex
	for (var i = 0, colour = "#"; i < 3; colour += ("00" + ((hash >> i++ * 8) & 0xFF).toString(16)).slice(-2));
	return colour;
}

function messagebox(text,caption){
	$('#myModalTemplate #modal_caption').html(caption);
	$('#myModalTemplate #modal_text').html(text);
	//document.getElementById("modal_text").innerHTML = data.text;
	$('#myModalTemplate').modal({show:true});
}

/*$(document).ready(function() {
	if(is_admin) {
	//document.body
		$('video.thumbWebm').unveil(200, function () {
			//alert('appear');
			//$(this).attr('preload','metadata');
			if($(this).attr('preload')=='none') $(this).attr('preload','metadata');
		});
	}
});*/

$(function() {

	// Support for AJAX loaded modal window.
	// Focuses on first input textbox after it loads the window.
	/*$('[data-toggle="modal"]').click(function(e) {
		e.preventDefault();
		var url = $(this).attr('data-url');
		if (url.indexOf('#') == 0) {
			$(url).modal('open');
		} else {
			$.get(url, function(data) {
				//if(data.error) 
				//$('<div class="modal hide fade">' + data + '</div>').modal();
				alert(   JSON.stringify({val:data})   );
				
				//alert($("<div/>").html(data.text).text());
				//alert($("<div/>").text(data.text).html());
				
				$('#myModalTemplate #modal_caption').html(data.caption);
				$('#myModalTemplate #modal_text').html(data.text);
				//document.getElementById("modal_text").innerHTML = data.text;
				$('#myModalTemplate').modal({show:true});
				//alert('ok');
				//modal_message
				//alert(data);
			},'json').fail(function() { alert('Ошибка отправки запроса. (?!?!)'); }); //.success(function() { $('input:text:visible:first').focus(); });
		}
	});*/


	// AJAX form send with "data-async" attr
    $('form[data-async]').live('submit', function(event) {
        var $form = $(this);
        var $target = $($form.attr('data-target'));
		
        $.ajax({
            type: $form.attr('method'),
            url: $form.attr('action'),
            data: $form.serialize(),
			
            success: function(data, status) {
				var msg_class = 'alert-info';
				var msg_text = 'Неизвестная ошибка';
				if(data) {
					if((data.ok)&&(data.error='')) msg_class = 'alert-success';
					 else if(data.ok) msg_class = 'alert-info';
					 else msg_class = 'alert-error';
					if(isset(data.msg) && (data.msg!='')) msg_text = data.msg;
					 else if(isset(data.error) && (data.error!='0')) msg_text = data.error;
					 else msg_text = 'No message';
				} else { msg_class = 'alert-error'; msg_text = 'Error validating json.'; }
				$target.html('<div class="alert '+msg_class+'"><button type="button" class="close" data-dismiss="alert">x</button>'+msg_text+'</div>');
                
            }
        });

        event.preventDefault();
    });
	
	$.ajaxSetup({
	beforeSend: function() {
		//$('#page_content').fadeTo("slow",0.4);
		$('#ajax_load_indicator').show();
	},
	complete: function() {
		$('#ajax_load_indicator').hide();
		//$('#page_content').fadeTo("slow",1);
	},
	error: function() {
		$('#ajax_load_indicator').hide();
		//my_notify('Ошибка отправки запроса');
		//$('#page_content').fadeTo("slow",1);
	}
	});
	
	//if(is_admin) {
	//$.cookieStorage.setPath('/');
	//$.cookieStorage.setDomain(document.domain);
	//switch_site_style(get_site_style());
	//switch_thr_style(get_thr_style());
	//}
});

var mm_navbar_visible = 1;
function mm_navbar_can_hide(){
	return mm_navbar_visible && ($(window).scrollTop() > 40+ $('#thread_header').outerHeight()) && 
		(($("#mm_navbar:hover").length === 0) && ($("#thread_header:hover").length === 0) && 
		($(".select2-input:focus").length === 0)&&($("#input_search:focus").length === 0)/*&&($("#select2-drop").length === 0)*/);//(!$('#mm_navbar').ismouseover()); //($.mlp.y - $(window).scrollTop() > 41);
}
/*function mm_navbar_can_show(){
	return ($(window).scrollTop() <= 25);// || ($.mlp.y < 41));
}*/
function mm_navbar_hide() {
	$('#mm_navbar').css({'opacity':'0','z-index':'-100'});
	$('#thread_header').css({'opacity':'0','z-index':'-120'});
}
function mm_navbar_show() {
	$('#mm_navbar').css({'opacity':'1','z-index':'1030'});
	$('#thread_header').css({'opacity':'1','z-index':'1020'});
}
function autohide_mm_navbar() {
//return;
	//var scrolltop = 0;
	
	//$('#thread_header_place').height($('#thread_header').outerHeight()-7);
	
	$('#mm_navbar, #thread_header')/*.mouseenter(function(){ alert('show');
		if(!mm_navbar_visible) {
			$(this).stop(true, false).animate({ top: '0px' });//.css('opacity','1');
			mm_navbar_visible = true;
		}
	})*/.mouseleave(function(){
		
	});
		/*if(($(window).scrollTop() > 80) && mm_navbar_visible) {
			setTimeout(function(){
				if(($(window).scrollTop() > 80) && mm_navbar_visible) {
					//$('#mm_navbar').stop(true, false).animate({ top: '-=41px' });//css('opacity','0');
					mm_navbar_hide();
					//$('#thread_header').hide();
					mm_navbar_visible = false;
				}
			}, 300);
			
		}*/
	
	//if(mm_navbar_can_hide()) $('#mm_navbar').css({ top: '-=41px' });
	if(mm_navbar_can_hide()) $('#mm_navbar').css('opacity','1');
	
	$(document).mousemove(function(e){
		//scrolltop = $(window).scrollTop();
		if(($.mlp.y - $(window).scrollTop() < 40 +$('#thread_header').outerHeight()) && (!mm_navbar_visible)) { /* 40=full */
		
			setTimeout(function(){
				if(($.mlp.y - $(window).scrollTop() < 40) && (!mm_navbar_visible) && ($('body:hover').length != 0)) {
					//$('#mm_navbar').stop(true, false).animate({ top: '0px' });//.css('opacity','1');
					
					$('#thread_header').addClass('thread_header_fixed');
					//alert($('#thread_header').outerHeight());
					$('#thread_header_place').height($('#thread_header').outerHeight(true)-10);
					//$('#thread_header_place').height($('#thread_header').height()-10);
					
					mm_navbar_show();

					//$('#thread_header').show();
					mm_navbar_visible = true;
				}
			}, 250);

		}
		if(($(window).scrollTop() > 80) && mm_navbar_visible) {
			if(($.mlp.y - $(window).scrollTop() > 40+$('#thread_header').outerHeight()) && mm_navbar_can_hide()) {
				setTimeout(function(){
					if(($.mlp.y - $(window).scrollTop() > 40+$('#thread_header').outerHeight()) && mm_navbar_visible && mm_navbar_can_hide()) {
						//$('#mm_navbar').stop(true, false).animate({ top: '-=41px' });//css('opacity','0');

						mm_navbar_hide();
						mm_navbar_visible = false;
					}
				}, 250);
			}
		}
		//console.log($.mlp);
	});
	
	$(window).scroll(function(){ //if(($("#mm_navbar:hover").length > 0)) alert('ismouseover()');
		//var aTop = $('#mm_navbar').height();
		if($(window).scrollTop() <= 40+$('#thread_header').outerHeight()-20){
			if(!mm_navbar_visible) {
				//$('#mm_navbar').stop(true, false).animate({ top: '0px' });//.css('opacity','1'); ///animate({ top: '-=41px' };
				
				$('#thread_header').removeClass('thread_header_fixed');
				$('#thread_header_place').height(0);
				
				mm_navbar_show();
				mm_navbar_visible = true;
			}
		} else 
		//if(mm_navbar_visible && ($(this).scrollTop()>25)){
		if(mm_navbar_visible && mm_navbar_can_hide()){
			//$('#mm_navbar').stop(true, false).animate({ top: '-=41px' });//.css('opacity','0'); 
			

			mm_navbar_hide();
			mm_navbar_visible = false;
		}
	});
}

/*function jq_load_html(ajax_url,selector,post) {
	if($(selector).is(':visible')) { $(selector).hide(); return; }
	$(selector).html('<center><img src="/images/loading.gif"></center>').show();
	if(post) {
		$.post(ajax_url, post, function(data) {
			$(selector).html(data);
		});
	}
	else {
		$.get(ajax_url, function(data) {
			$(selector).html(data);
		});
	}
}*/


var url = window.location.href;
var hash = window.location.hash;
//var index_of_hash = url.indexOf(hash) || url.length;
//var hashless_url = url.substr(0, index_of_hash);
var select2_delimiter = ';';
//var inited_rangepicker = 0;

/*if(document.history.pushState == undefined) {
	document.history.pushState = function(obj,caption,link) {
		window.location.hash = '#'+link;
	}
}*/


function isInt(x) {
  var y=parseInt(x);
  if (isNaN(y)) return false;
  return x==y && x.toString()==y.toString();
}

function isScrolledIntoView(elem) {
	if(!elem) return;
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();
    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();
    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

var cur_zindex=1001;

function post_link_leave(){ 
	if(mouse_on_container) return;
	var id=$(this).attr('id').substr(4); ///console.log('post_link_leave #'+id);
	if(!isInt(id)) return;
	
	if($(this).find('div[fly].post-pinned').length) return;
	
	$(this).find('div[fly]:not(.post-pinned)').remove();
	//$(this).find('div.post_linked#fly_post'+id).remove();
	
	//$('div.post[postid="'+id+'"] .post_comment_body').addClass('visited');
}
function post_link_leave2(){ ///console.log('post_link_leave2');
	var id=$(this).text().substr(2).replace(/\D/g, '');
	if(!isInt(id)) return;
	
	var posts_linked = $('div.post_linked#post'+id+', div.post_linked#fly_post'+id);
	
	//$('div.post_linked[postid='+id+'] a.reply_linked2').removeClass('reply_linked2');
	posts_linked.find('a.reply_linked2').removeClass('reply_linked2');
	
	//$('div.post_linked[postid='+id+']').removeClass('post_linked');
	posts_linked.removeClass('post_linked');
	
	//$('div.post[postid="'+id+'"] .post_comment_body').addClass('visited');
}
function post_link_leave3(){ ///console.log('post_link_leave3');
	if(mouse_on_container) return;
	var id=$(this).attr('postid') || $(this).text().substr(2).replace(/\D/g, '');
	if(!isInt(id)) return;
	//if(!($('div[fly][postid='+id+']').ismouseover() || $('a[class=reply][postid='+id+']').ismouseover()))
	//	$('div[fly][id="post'+id+'"]').remove();
	//if(!($('div#fly_post'+id).ismouseover() || $('a.reply[postid='+id+']').ismouseover()))
	if($(this).find('div[fly].post-pinned').length) return;
	//var a_hov = $(this).parent('.reply[postid='+id+']');
	//var a_hov = $(this).parent('[href=#'+id+']');
	//if(!(($('#fly_post'+id+':hover').length != 0) || ($(':hover[href=#'+id+']').length != 0))) /*|| ((a_hov.length > 0) && (a_hov.is(':hover')))*/ {
	if(!(($('#fly_post'+id+':hover').length != 0) || (!!$('[href=#'+id+']').filter(function() { return $(this).is(":hover"); }).length) )) {
		//if($('#fly_post'+id+':not(.post-pinned)').children('div[fly].post-pinned').length) return;
		//if(!is_admin)
		
		$('#fly_post'+id+':not(.post-pinned)').remove();
	}
	//$('div.post[postid="'+id+'"] .post_comment_body').addClass('visited');
}
function container_link_leave(){ ///console.log('container_link_leave');
	if(mouse_on_container) return;
	var fly_div = $('div[fly]:not(.post-pinned)'); //:hover
	if(fly_div.find('div[fly].post-pinned').length) return;
	//if(fly_div.find('.post-pinned').length) return;
	if(!(!!$(fly_div).filter(function() { return $(this).is(":hover"); }).length)) {
		fly_div.remove();
	}
}
function post_link_enter(){
	var id=$(this).text().substr(2).replace(/\D/g, '');
	if(!isInt(id)) return;
	
	var thr_popup_up = !$(this).parent().hasClass('post_replies');
	
	var parent_id = $(this).parents('div.post').attr('postid');
	//var parent_id = $(this).closest('div.post').attr('postid');
	
	//$(this).parent().find('div[fly][id="post'+id+'"]').remove();
	//$(this).parent().find('div#fly_post'+id).remove();
	
	var old=$('#post'+id+'');
	/*if((old.length==0) || (!isScrolledIntoView(old))) {
		var old=$(this).parents('div.post[postid='+id+']');
	}*/
	
	$(this).addClass('visited');
	
	if((old.length>0) && (isScrolledIntoView(old))) {
		old.addClass('post_linked').find('a:contains(">>'+parent_id+'")').addClass('visited reply_linked2');
		//if(is_admin) $('div[fly]:not(.post_linked)').addClass('post_alpha')
		
		$(this).hover(nullfunc,post_link_leave2,hover_delay_out);
		return;
	} else {
		//var fly_old=$(this).parents('div.post[postid='+id+']');
		//var fly_old=$(this).parents('#fly_post'+id);
		var fly_old=$('#fly_post'+id);
		if(fly_old.length>0) {
			//fly_old.find('.post_comment_body a:contains("'+parent_id+'"), .post_replies a:contains("'+parent_id+'")').css('color','#787878');
			//if(isScrolledIntoView(fly_old)) {
				fly_old.addClass('post_linked').find('a:contains(">>'+parent_id+'")').addClass('visited reply_linked2');
				//if(is_admin) $('div[fly]:not(.post_linked)').addClass('post_alpha')
				
				$(this).hover(nullfunc,post_link_leave2,hover_delay_out);
				return;
			//}
			//alert(fly_old.length);
		}
	}
	
	
	//var this_position = $(this).position();
	var this_width = $(this).outerWidth();
	//var this_width_sm = $(this).width();
	//var this_height = $(this).outerHeight();
	
	$('div#fly_post'+id).remove();
	
	//if(is_admin) {
	var post_clone=old.clone().css({'z-index':cur_zindex++,'margin-top':'-3px','left':($(this).position().left+(thr_popup_up ? this_width/2 : 10))+'px','width':old.width()+'px'}).attr('fly',id).attr('id','fly_post'+id).removeClass('post_linked'); //.addClass('post-fly-anim');
	//} else
	//var post_clone=old.clone().css({'position':'absolute','z-index':cur_zindex++,'margin-top':'-5px','margin-left':($(this).position().left-10)+'px','border':'1px solid #808080'}).attr('fly',id);
	
	post_clone.find('a#'+id).remove();
	post_clone.find('.full_image_container').remove();
	post_clone.find('a:contains(">>'+parent_id+'")').addClass('visited reply_linked');
	
	/*$(this).parents('.post').each(function(){
		post_clone.find('a:contains(">>'+$(this).attr('id').substr(4)+'")').css({'text-decoration':'underline'}); //'color':'#787878',
	});*/
	//post_clone.parent('.post').find('a:contains(">>'+parent_id+'")').css({'text-decoration':'underline'}); //'color':'#787878'
	
	
	post_clone.hover(nullfunc,post_link_leave3,hover_delay_out);
	$(this).hover(nullfunc,post_link_leave3,hover_delay_out);
	//$('span.post_comment div.post_comment_body a:contains(">>"),span.post_replies a.reply').hover(nullfunc,post_link_leave3,hover_delay_out);
	
	post_clone.find('.post_comment_body a:contains(">>"),.post_replies a.reply').hover(post_link_enter,nullfunc,hover_delay_in); //div.post_comment_body 
	post_clone.find('div[fly]').remove();
	//var pin_post_button = $('<a class="pin_post_button" href="#1" onclick="return false">&#8226;</a>');
	var pin_post_button = $('<a class="pin_post_button fly_post_btn" href="#" onclick="pin_post_button_click(this); return false" title="Закрепить"><i class="icon-lock"></i></a>');
	var drag_post_button = $('<a class="drag_post_button fly_post_btn" href="#" onclick="return false" title="Перемещение"><i class="icon-move"></i></a>');
	
	post_clone.find('span.post_id').after(drag_post_button).after(pin_post_button);
	
	//post_clone.drags({handle:'.pin_post_button'});
	//post_clone.drags();
	draggable(drag_post_button, {}, post_clone);
	
	//post_clone.attr('id','newId');
	$(this).after(post_clone);
	
	
	//if(/*(window_width < $(this).offset().left+post_clone.outerWidth()+thread_padding_left) &&*/ /*($(this).offset().left>window_width/2)*) {
	if(($(this).offset().left + old.outerWidth() > window_width) && (($(this).offset().left+this_width/2)>window_width/2)) {
		//console.log('from left');
		
		var max_width = $(this).offset().left + this_width - thread_padding_left;
		if( old.outerWidth() > max_width ) {
			//console.log('WIDTH CORRECTION [max_width='+max_width+'; post_clone.outerWidth()='+post_clone.outerWidth()+']');
			post_clone.width(max_width-3);
		} //else post_clone.width(old.width());
		
		post_clone.offset({ left: $(this).offset().left - post_clone.outerWidth() + this_width });
		
	} else {
		//console.log('from right');
		var needed_width = $(this).offset().left + old.outerWidth() + thread_padding_left*2 + 13;
		if(needed_width > window_width) {
			//console.log('width correction');
			//post_clone.outerWidth(window_width-($(this).offset().left+this_width),true);
			post_clone.width(window_width - $(this).offset().left - thread_padding_left*2 - 13);
		} //else post_clone.width(old.width());
	}
	
	
	if(thr_popup_up) {
		post_clone.css('margin-top',( - $(post_clone).outerHeight() - $(this).outerHeight() - 3 ) + 'px' );
	}
	if(!isScrolledIntoView(post_clone)) {
		(thr_popup_up==0) ? thr_popup_up=1 : thr_popup_up=0;
		if(thr_popup_up) {
			post_clone.css('margin-top',( - $(post_clone).outerHeight() - $(this).outerHeight() - 3 ) + 'px' );
		} else {
			post_clone.css('margin-top','-5px');
		}
	}
}
function pin_post_button_click(elem){
	//$(elem).find('i').toggleClass('icon-lock').toggleClass('icon-remove');
	$(elem).toggleClass('pinned');
	$(elem).closest('.post').toggleClass('post-pinned');
	//$(elem).closest('.post').find('.drag_post_button').eq(0).toggle();
	//$(elem).closest('.post').css('border','5px solid #000');
	///console.log('pin_post_button.click: '+$(elem).prop('outerHTML'));
}


function MultiAjaxAutoComplete(element, url, options, createtag, no_brackets, only_board) {
	if(!createtag) createtag=0;
	if(!no_brackets) no_brackets=0;
	if(!only_board) only_board=0;
	var def_opt={
		/*closeOnSelect: false,*/
		placeholder: "Найти по тегам...",
		minimumInputLength: 0, //1
		separator: select2_delimiter,
		multiple: true,
		id: function(e) { return e.id+":"+e.title; },
		ajax: {
			url: url,
			dataType: 'jsonp',
			data: function(term, page) {
				return {
					act: "tagcomplete",
					create: createtag,
					nobrackets: no_brackets,
					only_board: only_board,
					q: term,
					page: page // page number
				};
			},
			results: function(data, page) {
				return {
					results: data.tags,
					more: data.tags.length >= data.limit
				};
			}
		},
		formatResult: formatResult,
		formatSelection: formatSelection,
		initSelection: function(element, callback) {
			var data = [];
			$(element.val().split(select2_delimiter)).each(function(i) {
				var item = this.split(':');
				data.push({
					id: item[0],
					title: item[1]
				});
			});
			callback(data);
		}
	};
	
	if(options) for (var attrname in options) { def_opt[attrname] = options[attrname]; }
	
	$(element).select2(def_opt);
	
//var defaultData = [{id:1, text:'Item1'},{id:2,text:'Item2'},{id:3,text:'Item3'}];
//$(element).data().select2.updateSelection(defaultData);
}
function toggle_deleted_posts(elem) {
	if ($('div.post_deleted').length) {
		$('a.toggle_deleted_posts').css('font-weight','normal');
		$('div.post_deleted').removeClass('post_deleted').addClass('post_deleted_shown');
	} else {
		if ($('div.post_deleted_shown').length) {
			$('a.toggle_deleted_posts').css('font-weight','bold');
			$('div.post_deleted_shown').removeClass('post_deleted_shown').addClass('post_deleted');
		}
	}
}

function formatResult(tag) {
	return '<div>' + tag.title +(tag.hint?'<span class="tag_hint">'+tag.hint+'</span>':'')+ '</div>';
}
function formatSelection(tag) {
	return tag.title;
}


function in_array(id, array) {
    for(var i = 0; i < array.length; i++) {
        if(array[i]['id'] == id) return true;
    }
    return false;
}

function add_tag_to_filter(tag) {
//alert(  JSON.stringify({val:$("#sel1").select2("data")})   );
//alert(  JSON.stringify({val:tag})   );
	var tmp_data = $("#sel1").select2("data");

		if(!in_array(tag[0].id,tmp_data)) $("#sel1").select2("data", tmp_data.concat(tag));
		$('#sel1').trigger('change');
		
	/*if(in_array(tag[0].id,tmp_data)) { $('#sel1').trigger('change'); }
	 else { $("#sel1").select2("data", tmp_data.concat(tag)); }*/
	
	//alert(  JSON.stringify({val:$("#sel1").select2("data")})   );
}


/*function thread_list_autoscroll(ajax_url,ajax_act,jqselector,callback,thread_list_custom) {
	//if(ajax_act!=scroll_context) { alert('unset old'+scroll_context+'!'); $(window).unbind('scroll'); page_from }
	$(window).scroll(function(){
		
		var mostOfTheWayDown = ($(document).height() - $(window).height()) * 9/10 ;  // * 3 / 4; 9/10 
		if ($(window).scrollTop() >= mostOfTheWayDown)
		{
			$(window).unbind('scroll');
			//alert('test');
			var query = {'act':ajax_act,'from':page_from};
			if(thread_list_custom!=null) query.thread_list_custom = thread_list_custom;
			$.post(ajax_url, query, function(data) {
				//.eq(0) alert(  JSON.stringify({val:data})   );
				if(data) {
					if(data.items_count>0) {
						//history.pushState({from: page_from}, "", "/index/"+page_from+"/");
						page_from+=data.items_count;
						
						var upd=$('<div class="nofuck" id="animate_pattern_'+page_from+'">'+data.html+'</div>');
						//var old_bg=upd.css('background-color');
						//if(!old_bg) var old_bg='#fff';
						//upd.css('background-color','#FFEFA3');
						$(jqselector).append(upd);
						
						var append_body=$('div#animate_pattern_'+page_from);
						//append_body.animate({ 'backgroundColor': old_bg },'slow');
						if(callback) callback(append_body);
						
						thread_list_autoscroll(ajax_url,ajax_act,jqselector,callback,thread_list_custom);
						
						//$('html, body').animate({scrollTop:0}, 'slow');
					}
				}
			},'json');
		}
	});
	$(window).scroll();
}*/


function showVideo(show,hide) {
	$('#'+show).show();
	$('#'+hide).hide();
}
function img_del_btn_hint(id) {
	$('#del_img_btn_'+id).toggleClass('img_del_btn_selected');
}
function img_del_btn_unhint(id) {
	$('#del_img_btn_'+id).toggleClass('img_del_btn_selected');
}

var thread_padding_left = 0;

function thread_popups_create() {
	$(document).ready(function() {
		thread_padding_left = $('body > .container-fluid').css('padding-left').replace(/[^-\d\.]/g, '');
		//$('div.thread_text').hoverIntent( function(){$(this).css({'max-height':'1000px'});}, function(){$(this).css({'max-height':'62px'});} );
		/*$('div.thread_text').hoverIntent(function(){
			$(this).find('div.thread_fulltext_popup').css({'width':$(this).css('width')}).html($(this).html()).show();
		},function(){
			$(this).find('div.thread_fulltext_popup').hide();
		});*/
		
		var replies=[];
		//$('span.post_comment a:contains(">>")').each(function(){
		var op_post = $('div.post:first').attr('postid');
		//if(is_admin) alert(op_post);
		
		$('span.post_comment div.post_comment_body a:contains(">>")').each(function(){
			var atext=$(this).text();
			var id=parseInt(atext.substr(2).replace( /^\D+/g, ''),10);
			if(!isNaN(id)) {
				if(!replies[id]) replies[id]=[];
				var postid = $(this).parents('div.post').attr('postid');
				replies[id].push(postid);
				
				/*
				if(id!=op_post)
					$(this).replaceWith('<a href="'+'#'+id+'">'+atext+'</a>');
				else
					$(this).replaceWith('<a class="op_post" href="'+'#'+id+'">&gt;&gt;'+id+'</a>');
				*/
			} //else alert('parse error');
		});
		
		for (var key in replies) {
			if(replies[key]) {
				//alert(replies[key].join(', '))
				var t=[];
				for (var key2 in replies[key]) {
					t.push('<a class="reply" postid='+replies[key][key2]+' href="'+'#'+replies[key][key2]+'">&gt;&gt;'+replies[key][key2]+'</a>');
				}
				t = array_unique(t);
				$('div#post'+key+' span.post_comment').append('<span class="post_replies"><i>Ответы: </i>'+t.join(', ')+'</span>');
			}
		}
		

		// hover posts
		//$('span.post_comment a,a.reply').mouseenter(post_link_enter);
		$('span.post_comment div.post_comment_body a:contains(">>"),span.post_replies a.reply').hover(post_link_enter,nullfunc,hover_delay_in);
		$('div.post').hover(nullfunc,post_link_leave,hover_delay_out);
		/*$('div.post').mouseleave(function(){
			var id=$(this).attr('id').substr(4);
			if(!isInt(id)) return;
			$(this).find('div[fly]').remove();
		});*/
		
		
		// highlight linked post

		//var highlighted_post='';

		$(window).bind('hashchange', function() {
			$('div.post[fly]').remove();
			$('div.post_linked').removeClass('post_linked');
			//if(highlighted_post!='') $('#post'+highlighted_post).removeClass('post_linked');
			if(location.hash.length) {
				//highlighted_post=location.hash.substr(1);
				$('#post'+location.hash.substr(1)).addClass('post_linked');
			}
		});
		$(window).trigger('hashchange');

		//$("img[src='/icons/preload_blank.png']").attr('src','/images/icons/preload_blank.png');

	});
}

function my_notify(text,title) {
	if(!title) var title='';
	$.pnotify({
	 title:title,
	 text:text
	});
}
function my_notify2(data) {
	if(!data) {
		var title = '';
		var text  = 'Пустой ответ.';
	} else {
		var title = data.title || '';
		var text  = data.text || data.error || '';
	}
	//if(!data.title) var title=''; else var title=data.title;
	if(text)
		$.pnotify({
			title:title,
			text:text
		});
}

function check_captcha(data) {
	if(data.error=='captcha') window.open('/protect/');
	if(data.error=='login') window.location.href='/auth/'; //window.open('/auth/');
}

// *** FAVOURITES ***
function add_fav(id) {
	$.post(ajax_url, {'act':'add_fav','thread_id':id}, function(data) {
		if(data) {
			check_captcha(data);
			if(data.ok) {
				$('a#fav'+id).hide();
				$('a#infav'+id).show();
				/*if(isset(data.fav_count))*/ //$('#fav_count'+id).text(data.fav_count);
			} else my_notify2(data); //else $('a#fav'+id).html('<i class="icon-exclamation-sign"></i>');
		} else alert('error');
	},'json');
}

function del_fav(id) {
	$.post(ajax_url, {'act':'del_fav','thread_id':id}, function(data) {
		if(data) {
			check_captcha(data);
			if(data.ok) {
				$('a#infav'+id).hide();
				$('a#fav'+id).show();
				/*if(isset(data.fav_count))*/ //$('#fav_count'+id).text(data.fav_count);
			} else my_notify2(data); //else $('a#fav'+id).html('<i class="icon-exclamation-sign"></i>');
		} else alert('error');
	},'json');
}

// *** VOTES ***
function thread_vote(id,dir) {
	$.post(ajax_url, {'act':'thread_vote','dir':dir,'thread_id':id}, function(data) {
		if(data) {
			check_captcha(data);
			if(data.ok) {
				if((isInt(data.raiting))) { //thread_raiting_unvoted
					var relem = $('#thread_raiting_'+id);
					relem.text(data.raiting);
					var color='gray';
					if(data.raiting>0) color='green';
					else if(data.raiting<0) color='red';
					relem.css('color',color);
					if(data.raiting!=0) relem.removeClass('thread_raiting_unvoted');
					else relem.addClass('thread_raiting_unvoted');
					
					/*$('#thread_vote_down_btn_'+id).hide();
					$('#thread_vote_up_btn_'+id).hide();*/
					
					if(data.text) my_notify2(data);
					//alert(data.raiting);
				} else alert('Ошибка голосования');
			} else my_notify2(data); //else $('a#fav'+id).html('<i class="icon-exclamation-sign"></i>');
		} else alert('error');
	},'json');
}

// *** IMAGES ***
function delete_image(thread,post,post_image) {
	if (!confirm('Пометить изображение как недопустимое?')) return;
	$.post(ajax_url, {'act':'delete_image','thread_id':thread,'post_id':post,'post_image_id':post_image}, function(data) {
		if(data) {
			check_captcha(data);
			my_notify2(data);
			/*if(data.ok) {
				my_notify2('Ok!');
			} else my_notify2(data);*/ //else $('a#fav'+id).html('<i class="icon-exclamation-sign"></i>');
		} else alert('error');
	},'json');
}

function link_go(url){
	if (($.browser.msie)||((/Trident\/7\./).test(navigator.userAgent))) {
		// ie loses referer in window.open()
		window.open(url); //+ '&_='+Math.random());
	} else {
		// ff needs data:uri  AND meta refresh. Firefox, WebKit and Opera
		//location = 'data:text/html,<html><meta http-equiv="refresh" content="0; url='+ url + '"></html>';
		window.open('data:text/html,<html><meta http-equiv="refresh" content="0; url='+ url + '"></html>');
	}
	return false;
}

function quot_combine(n1,n2){
	return n1+'_'+n2;
}
function expand_image(id,full) { //,preload_only
	/*if(!hidden) { hidden=''; h_resize='onload="parent.resize_frame('+id+',this,this.clientWidth,this.clientHeight);" '; }
	else { hidden=' style="display:none;"'; h_resize=''; }*/
	//if(is_user) {
	//var full = $('#imgv_full_'+id).val();
	//var full = $('#pib_'+id+' a.img_filename').attr('title');
	// if mobile version
	if(window_width<min_pc_width) {
		link_go(full);
		return;
	}
	
	//if(full.indexOf('.webm')==-1) {
	if(video_formats.indexOf(get_ext(full))==-1) {
		var ikr = $('#ikr_'+id);
		if((!ikr.length)) { 
			//if(typeof preload_only === "undefined")
			$('#pib_'+id).prepend('<div id="ikr_'+id+'" class="full_image_container"></div>'); //'+hidden+'   crossorigin="anonymous" 
			//else $('#pib_'+id).prepend('<div id="ikr_'+id+'" class="full_image_container" style="display:none;"></div>');
			var nums = id.split('_');
			document.getElementById('ikr_'+id).innerHTML = ReferrerKiller.htmlString('<img src="' + full + '" onload="parent.resize_frame(parent.quot_combine('+nums[0]+','+nums[1]+'),this,this.clientWidth,this.clientHeight);" onclick="parent.collapse_image(parent.quot_combine('+nums[0]+','+nums[1]+'));"/>',{}); //h_resize
			$('#pib_'+id+' .img_filename').addClass('visited');
			
		} else {
			//if(typeof preload_only === "undefined")
			
			ikr.css({'visibility':'visible','width':'100%','height':'100%'}).show();
			var frame = ikr.find('iframe');
			var img = frame.contents().find('img');
			img.click(function() { collapse_image(id); });
			frame.width(img.width()).height(img.height());
			
		}
		//if(typeof preload_only === "undefined")
		$('#thumb_'+id).hide();

	} else {
		//.attr({'autoplay':'true'});
		//var vthumb = $('video#webm_thumb_'+id);
		/*if(video.css('width')=='auto') {
			video.css('width','250px');
			video.get(0).stop();
		} else*/ {
		//	vthumb.hide();
			//$('#pib_'+id).prepend('<a href="#" onclick="collapse_image('+id+'); return false;">'
			//	+'<video id="webm_control_'+id+'" controls="1" autoplay loop="1" volume="0.5" preload="none" class="expandedWebm" src="'+full+'"></video>');
		}
	}
	/*} else {
		window.open(url,'_blank');
	}*/
}
function collapse_image(id) {
	//$('#pib_'+id).prepend('<div id="ikr_'+id+'"></div>');
	$('#thumb_'+id).show();
	//$('#ikr_'+id).remove();
	//$('#ikr_'+id).hide();
	$('#ikr_'+id).css({'visibility':'hidden','width':'0','height':'0'}).show();
}
/*function collect_images() {
	var html = '';
	$('input.image_index').each(function(){ html+='<img style="display:none;" src="'+$('#imgv_full_'+$(this).val()).val()+'">'; });
	$('body').append(html);
}*/

function resize_frame(id,image,img_width,img_height) {
	if((img_width==0) || (img_height==0)) return;
	//PZDC NAHOOY
	var maxWidth = window_width-50; // Max width for the image
	var maxHeight = $(window).height()-45;    // Max height for the image
	var ratio = 0;  // Used for aspect ratio
	var width = img_width;    // Current image width
	var height = img_height;  // Current image height
	var new_width = img_width;
	var new_height = img_height;

	// Check if the current width is larger than the max
	if(width > maxWidth){
		ratio = maxWidth / width;   // get ratio for scaling image
		//$('#ikr_'+id+' iframe').width(maxWidth); // Set new width
		//$('#ikr_'+id+' iframe').height(height * ratio);  // Scale height based on ratio
		new_width = maxWidth;
		new_height = height * ratio;
		height = height * ratio;    // Reset height to match scaled image
		width = width * ratio;    // Reset width to match scaled image
	}

	// Check if current height is larger than max
	if(height > maxHeight){
		ratio = maxHeight / height; // get ratio for scaling image
		//$('#ikr_'+id+' iframe').height(maxHeight);   // Set new height
		//$('#ikr_'+id+' iframe').width(width * ratio);    // Scale width based on ratio
		new_width = width * ratio;
		new_height = maxHeight;
		width = width * ratio;    // Reset width to match scaled image
	}
	
	// Resize frame to new image sizes
	$('#ikr_'+id+' iframe').width(new_width); // Set new width
	$('#ikr_'+id+' iframe').height(new_height);  // Scale height based on ratio
	
	// Fit image to the frame
	$(image).css({'max-width':'100%','max-height':'100%'});
}

// *** VIDEOS ***
function show_video(elem,video_id, video_url,show_ctrls) {
	if(!show_ctrls) var buttons='';
	else var buttons='<a href="#" onClick="set_video_size(\''+video_id+'\',-200);return false;">[ - ]</a><a href="#" onClick="set_video_size(\''+video_id+'\',200);return false;">[ + ]</a><br>';
	$('#vid_thumb_'+video_id).hide().before('<span id="vid_'+video_id+'">'+buttons+'<iframe id="vid_frame_'+video_id+'" class="post_video" width="'+$(elem).width()+'" height="'+$(elem).height()+'" src="'+video_url+'" frameborder="0" allowfullscreen="true"></iframe><div><a href="#" onClick="unload_video(\''+video_id+'\');return false;"><img title="Закрыть" src="/theme/bootstrap/img/comments_close.png"></a></div></span>');  //<nobr>[ &#215; Закрыть ]</nobr>
}

function unload_video(video_id) {
	$('#vid_'+video_id).remove(); //.html("") for IE
	$('#vid_thumb_'+video_id).show();
}
// [+][-]
function set_video_size(video_id,delta) {
	var frame_width = parseInt($('#vid_frame_'+video_id).attr('width'));
	var frame_height = parseInt($('#vid_frame_'+video_id).attr('height'));
	if(frame_width+delta>200)
		$('#vid_frame_'+video_id).attr('width',frame_width+delta).attr('height',(frame_width+delta)*(frame_height/frame_width));
	/*var frame_width = parseInt($('#vid_frame_'+video_id).attr('width'));
	if(frame_width+delta>200) {
		$('#vid_frame_'+video_id).attr('width',frame_width+delta).attr('height',(frame_width+delta)*3/4);
	}*/
}

function check_errors(img,full_url,ewidth,eheight) {
	//if(is_admin) 
	{ //if((img.width) && (img.height))
		//if($(img).width()==500) alert(img.src); //$(img).attr('src')
		//if(img.width==300) alert(img.src); //$(img).attr('src')
		if((img.naturalWidth==ewidth)&&(img.naturalHeight==eheight)) {
			img.onload = function() { return false; }
			img.src = full_url;
		}
		//if($(img).attr("naturalWidth")==500) alert('voala!');
		//alert($(img).width());
	}
}

/* ARRAYS INTO COOKIES ROUTINES */
function cookie_get_arr(cname) {
	var carr = $.cookie(cname);
	if(carr != null) return carr.split(','); else return [];
}
function cookie_add_arr(cname,val) {
	var carr = cookie_get_arr(cname);
	carr.push(val);
	carr = array_unique(carr);
	$.cookie(cname, carr.join(','), { path: '/', domain: document.domain });
}
function cookie_remove_arr(cname,val) {
	var carr = cookie_get_arr(cname);
	carr = removeA(carr,val);
	$.cookie(cname, carr.join(','), { path: '/', domain: document.domain });
}

function thread_collapse(id){
	cookie_remove_arr('expanded_threads',id);
	cookie_add_arr('collapsed_threads',id);
	$('#thread_row_'+id).addClass('collapsed1');
	$('#thread_collapse_btn_'+id).hide();
	$('#thread_expand_btn_'+id).show();
}
function thread_expand(id){
	cookie_remove_arr('collapsed_threads',id);
	cookie_add_arr('expanded_threads',id);
	$('#thread_row_'+id).removeClass('collapsed1');
	$('#thread_collapse_btn_'+id).show();
	$('#thread_expand_btn_'+id).hide();
}

function toggle_rangepicker(elem,url){
	//if(inited_rangepicker==0) {
	//	inited_rangepicker==1;
	$('#daterange').click();
	//}
	//$('#custom_timerange').toggle(); //toggle show
}

function append_token(id){
	$.post(ajax_url, {'act':'thread_appendtoken','thread_id':id}, function(data) {
		check_captcha(data);
		my_notify2(data);
	},'json');
}
//
function flickr_checkbox_check() {
	//$('#flickr_info,#register_info').
	var register_info = $('#register_info');
	if(register_info.length > 0) {
		$('#register_info').animate({ 'backgroundColor': '#FFE97F' },'slow');
		return false;
	}
	else
		if($('#save_image_bytoken').is(':checked'))
			return confirm('По статистике 148665 удаленных изображений, 79% из них находились на Flickr.\nВы действительно хотите использовать его?\nОсобенно не рекомендуется использовать его для /b/ и тематик спорного содержания.');
}

function dropdown_set_radio(selector) {
	var elem = $(selector);
	elem.parents().eq(1).children().children('.dropdown_radio_active').removeClass('dropdown_radio_active');
	elem.addClass('dropdown_radio_active');
}


function webm_get_volume() {
	return (($.localStorage.get('webm_volume') !== null)?Math.abs($.localStorage.get('webm_volume')):1);
}
function webm_set_volume() {
	$.localStorage.set('webm_volume',container.find('video').prop('volume')*(container.find('video').prop('muted')?-1:1));
}
function webm_get_muted() {
	return ((($.localStorage.get('webm_volume') !== null) && ($.localStorage.get('webm_volume') >= 0))?false:true);
}

function switch_site_style(name) {
	$('#dynamic_site_style').remove();
	if(name)
		$('head').append('<link rel="stylesheet" type="text/css" href="'+theme_dir+'/css/site_styles/'+name+'.css" id="dynamic_site_style">');
	$.localStorage.set("dynamic_site_style", name);
	//alert($.localStorage.get("dynamic_site_style"));
	
	if(!name) name = 0;
	dropdown_set_radio('#switch_site_style_'+name);
}
function get_site_style() {
	return $.localStorage.get("dynamic_site_style");
}
function switch_thr_style(name) {
	$('#dynamic_thr_style').remove();
	if(name)
		$('head').append('<link rel="stylesheet" type="text/css" href="'+theme_dir+'/css/thr_styles/'+name+'.css" id="dynamic_thr_style">');
	$.localStorage.set("dynamic_thr_style", name);
	
	if(!name) name = 0;
	dropdown_set_radio('#switch_thr_style_'+name);
}
function get_thr_style() {
	//if ($.localStorage.get("dynamic_thr_style") === null) { switch_thr_style(''); return ''; } alert($.localStorage.get("dynamic_thr_style"));
	return $.localStorage.get("dynamic_thr_style");
}
function switch_nightmode(nightmode) {
	if(nightmode) {
		switch_site_style('darkstrap');
		switch_thr_style('neutron');
		$.localStorage.set("is_nightmode",1);
		/*$('#switch_nightmode_1').hide();
		$('#switch_nightmode_0').show();*/
	} else {
		switch_site_style('');
		switch_thr_style('');
		$.localStorage.set("is_nightmode",0);
		/*$('#switch_nightmode_0').hide();
		$('#switch_nightmode_1').show();*/
	}
	//alert('#switch_nightmode_'+(+nightmode));
	
	dropdown_set_radio('#switch_nightmode_'+(+nightmode));	
}
function is_nightmode() {
	//if ($.localStorage.get("is_nightmode") === null) { switch_nightmode(0); return 0; }
	return $.localStorage.get("is_nightmode") == 1;
}






/* sorry for copying^^ */
window.Media = {
    processors: [],
    generators: {},
    unloaders: {},
    thumbnailers: {},
    add: function(type, substr, regexp, fields) {
        var regobj = new RegExp(regexp, 'i');
        this.processors.push([type, substr, regobj, fields]);
    },
    addGenerator: function(type, func) {
        this.generators[type] = func;
    },
    addUnloader: function(type, func) {
        this.unloaders[type] = func;
    },
    addThumbnailer: function(type, func) {
        this.thumbnailers[type] = func;
    },
    parse: function(url) {
        var proc_len = this.processors.length;
        var ret;
        for (var i = 0; i < proc_len; i++) {
            var proc = this.processors[i];
            if (url.indexOf(proc[1]) < 0) continue;
            ret = this.getValues(url, proc);
            if (ret) break;
        }
        return ret;
    },
    getValues: function(url, proc) {
        var type = proc[0];
        var regexp = proc[2];
        var fields = proc[3];
        var values = {
            type: type
        };
        var reg_result = regexp.exec(url);
        if (!reg_result) return false;
        for (var field_name in fields) {
            if (!fields.hasOwnProperty(field_name)) continue;
            if (!reg_result.hasOwnProperty(fields[field_name])) return false;
            values[field_name] = reg_result[fields[field_name]];
        }
        return values;
    },
    getEmbedCode: function(type, id, cb) {
        this.generators[type]({
            id: id
        }, cb);
    },
    processLinks: function(el) {
        el.each(function() {
            var el = $(this);
            var url = el.text();
            var obj = Media.parse(url);
            if (!obj) return;
            var post = el.closest('.post');
            var button_expand = $('<span href="#" class="media-expand-button">[Развернуть]</span>');
            var button_hide = $('<span href="#" class="media-hide-button">[Закрыть]</span>');
            var button_loading = $('<span class="media-expand-loading">[Загрузка...]</span>');
            if (Media.thumbnailers.hasOwnProperty(obj.type) /*&& Store.get('old.media_thumbnails', true)*/) {
                var on_hover = true; //Store.get('old.media_thumbnails_on_hover', true);
                var thumbnail = $('<div class="media-thumbnail" ' + (on_hover ? 'style="display:none"' : '') + '>' + Media.thumbnailers[obj.type](obj) + '</div>');
                var mthumbnail = $('#media-thumbnail');
                if (on_hover) {
                    el.hover(function(e) {
                        mthumbnail.append( thumbnail ).css({
                            position: 'absolute',
                            display: 'block',
                            'z-index': '999',
                            top: (e.pageY - 10) + 'px', // fixed
                            left: (e.pageX + 30) + 'px'
                        });
                        thumbnail.show();
                    });
                    el.mouseout(function() {
                        thumbnail.hide();
                        mthumbnail.hide();
                    });
                    el.mousemove(function(e) {
                        mthumbnail.css({
                            top: (e.pageY - 10) + 'px',
                            left: (e.pageX + 30) + 'px'
                        });
                    });
                } else {
                    button_expand.append(thumbnail);
                }
            }
            el.after(button_expand);
            button_expand.click(function() {
                button_expand.hide();
                button_expand.after(button_loading);
                var expanded = post.data('expanded-media-count') || 0;
                expanded++;
                post.data('expanded-media-count', expanded);
                if (expanded == 1 && window.kostyl_class) post.addClass('expanded-media');
                Media.getEmbedCode(obj.type, obj.id, function(html) {
                    button_loading.remove();
                    if (!html) return button_expand.show();
                    var embed = $('<br>' + html + '<br>');
                    el.after(embed);
                    el.after(button_hide);
                    button_hide.click(function() {
                        embed.remove();
                        button_hide.remove();
                        button_expand.show();
                        if (Media.unloaders.hasOwnProperty(obj.type)) Media.unloaders[obj.type](el);
                        var expanded = post.data('expanded-media-count');
                        expanded--;
                        post.data('expanded-media-count', expanded);
                        if (expanded == 0 && window.kostyl_class) post.removeClass('expanded-media');
                        return false;
                    });
                    return false;
                });
                return false;
            });
            if (obj.type == 'twitter') button_expand.click();
        });
    }
};

Media.add('youtube', 'youtube.com', "https?://(?:www\\.)?(?:youtube\\.com/).*(?:\\?|&)v=([\\w-]+)", {id:1});
Media.add('youtube', 'youtu.be', "https?://(?:www\\.)?youtu\\.be/([\\w-]+)", {id:1});
Media.add('vimeo', 'vimeo.com', "https?://(?:www\\.)?vimeo\\.com/([\\d]+)", {id:1});
Media.add('liveleak', 'liveleak.com', "https?://(?:www\\.)?(?:liveleak\\.com/).*(?:\\?|&)i=([\\w]+_\\d+)", {id:1});
Media.add('dailymotion', 'dailymotion.com', "https?://(?:www\\.)?dailymotion\\.com/video/([\\w]+)", {id:1});
Media.add('vocaroo', 'vocaroo.com', "https?://(?:www\\.)?vocaroo\\.com/i/([\\w]+)", {id:1});
Media.add('twitter', 'twitter.com', "https?://(?:www\\.)?twitter\\.com/.+/status/([\\d]+).*", {id:1});
Media.addGenerator('youtube', function(obj, cb) {
	cb('<iframe src="//www.youtube.com/embed/' + obj.id + '?autoplay=1" width="640" height="360" frameborder="0" allowfullscreen></iframe>');
});
Media.addGenerator('vimeo', function(obj, cb) {
	cb('<iframe src="//player.vimeo.com/video/' + obj.id + '?autoplay=1" width="640" height="360" frameborder="0" allowfullscreen></iframe>');
});
Media.addGenerator('liveleak', function(obj, cb) {
	$.get('http://mobile.liveleak.com/view?i=' + obj.id + '&ajax=1', function(data) {
		var regexp = /generate_embed_code_generator_html\('(\w+)'\)/i;
		var match = regexp.exec(data);
		if (!match || !match.hasOwnProperty('1')) return cb();
		cb('<iframe src="http://www.liveleak.com/ll_embed?f=' + match[1] + '&autostart=true" width="640" height="360" frameborder="0" allowfullscreen></iframe>');
	}).fail(function() {
		cb();
	});
});
Media.addGenerator('dailymotion', function(obj, cb) {
	cb('<iframe width="640" height="360" src="//www.dailymotion.com/embed/video/' + obj.id + '?autoplay=1" frameborder="0" allowfullscreen></iframe>');
});
Media.addGenerator('vocaroo', function(obj, cb) {
	cb('<object width="148" height="44"><param name="movie" value="//vocaroo.com/player.swf?playMediaID=' + obj.id + '&autoplay=1"></param><param name="wmode" value="transparent"></param><embed src="//vocaroo.com/player.swf?playMediaID=' + obj.id + '&autoplay=1" width="148" height="44" wmode="transparent" type="application/x-shockwave-flash"></embed></object>');
});
Media.addGenerator('twitter', function(obj, cb) {
	var onsuccess = function(data) {
		cb(data.html);
	};
	var onfail = function() {
		cb();
	};
	$.ajax({
		url: '//api.twitter.com/1/statuses/oembed.json?align=left&lang=ru&maxwidth=700&id=' + obj.id + '&callback=?',
		dataType: 'json',
		timeout: 5000,
		success: onsuccess,
		error: onfail
	});
});
Media.addUnloader('twitter', function(el) {
	$(el).closest('.post_comment_body').find('.twitter-tweet').remove();
});
Media.addThumbnailer('youtube', function(obj) {
	return '<img src="//i.ytimg.com/vi/' + obj.id + '/mqdefault.jpg" width="320" height="180">';
});


/*
	IMAGES EXPANDER
*/

var win, container, container_img_id = '', mouse_on_container, win_width, win_height, container_size_mult = 1, img_width, img_height, cont_width, cont_height, cont_mouse_pos_x, cont_mouse_pos_y, cont_webm, keys_down = {};
var border_offset = 8;
var container_error_counter = 0;

jQuery(function($) {
  //if(window_width>min_pc_width) {
	win = $(window);
	win_width = win.width();
	win_height = win.height();
	
	container = $('#fullscreen-container');
    container.mousemove(function(e) {
        cont_mouse_pos_x = e.clientX;
        cont_mouse_pos_y = e.clientY;
    });
	container.mouseover(function() {
		mouse_on_container = true;
	});
	container.mouseout(function() {
		mouse_on_container = false;
	});
	container.mousedown(function(e) { //click
		if(e.which==2) {
			e.preventDefault();
			//link_go($(this).find('img').attr('src'));
			link_go($(this).find('img').attr('src') || $(this).find('source').attr('src'));
		}
		//e.preventDefault();
	});
	/*container.click(function(e) {
		if (!container_img_id) return;
		if (e.which != 1) return;
		alert('click');
	});*/
	container.hover(nullfunc,container_link_leave,hover_delay_out);
	
	
	draggable(container, {
		click: function() {
			container_hide();
		},
		mousedown: function(e_x, e_y) {
			if (!cont_webm) return;
			var container_top = parseInt(container.css('top'));
			var container_height = container.height();
			if ((container_top + container_height) - e_y < 35) return false;
		}
	});
	
	win.keydown(function(e) {
		if (!container_img_id) return;
		var move;
		var code = e.keyCode || e.which;
		if (code == 37 || code == 65 || code == 97 || code == 1092) {
			if(keys_down[code] != null) return;
			move = -1;
			keys_down[code] = true;
		} else if (code == 39 || code == 68 || code == 100 || code == 1074) {
			if(keys_down[code] != null) return;
			move = 1;
			keys_down[code] = true;
		} else if (code == 27) {
			container_hide();
			return;
		} else {
			return;
		}
        var images = $('.post_image_block');
        var active_index = images.index($('#pib_' + container_img_id));
		var new_index = active_index + move;
		if (new_index < 0) new_index = images.length - 1;
		if (new_index > images.length - 1) new_index = 0;
		var next = images.eq(new_index);
		next.find('a.expand_image').click();
	});
	win.keyup(function(e){
		var code = e.keyCode || e.which;
		keys_down[code] = null;
	});
	win.bind((/Firefox/i.test(navigator.userAgent)) ? "DOMMouseScroll" : "mousewheel", function(e) {
		if (!container_img_id) return;
		if (!mouse_on_container) return;
		e.preventDefault();
		var evt = window.event || e;
		evt = evt.originalEvent ? evt.originalEvent : evt;
		var delta = evt.detail ? evt.detail * (-40) : evt.wheelDelta;
		if (delta > 0) {
			container_resize(container_size_mult + 0.1);
		} else {
			container_resize(container_size_mult - 0.1);
		}
	});
  //}
});


function draggable(el, events, drag_handle) {
    var in_drag = false;
    var moved = 0;
    var last_x, last_y;
    //var win = $(window);
	var draggable_mousemove = function(e){
		var delta_x, delta_y;
		var el_top, el_left;
		var drag_obj = drag_handle ? drag_handle : el;
		if (!in_drag) return;
		delta_x = e.clientX - last_x;
		delta_y = e.clientY - last_y;
		moved += Math.abs(delta_x) + Math.abs(delta_y);
		last_x = e.clientX;
		last_y = e.clientY;
		el_top = parseInt(drag_obj.css('top'));
		el_left = parseInt(drag_obj.css('left'));
		drag_obj.css({
			top: (el_top + delta_y) + 'px',
			left: (el_left + delta_x) + 'px'
		});
	};
    el.mousedown(function(e) {
        if (e.which != 1) return;
        if (events && events.mousedown && events.mousedown(e.clientX, e.clientY) === false) return;
        e.preventDefault();
        in_drag = true;
		win.bind('mousemove', draggable_mousemove);
        moved = 0;
        last_x = e.clientX;
        last_y = e.clientY;
    });
    win.mouseup(function(e) {
        if (!in_drag) return;
        in_drag = false;
		win.unbind('mousemove', draggable_mousemove);
        if (moved < 6 && events && events.click) events.click(last_x, last_y);
    });
}

function container_resize(new_multiplier) {
	if (new_multiplier < 0.1) return;
	if (new_multiplier > 5) return;
	
	var new_cont_width = cont_width * new_multiplier;
	var new_cont_height = cont_height * new_multiplier;
	container.width(new_cont_width).height(new_cont_height);
	container_repos(new_multiplier);
	
	container_size_mult = new_multiplier;
}
function container_repos(new_multiplier, center) {
	var scroll_top = win.scrollTop();
	var scroll_left = win.scrollLeft();
	var container_offset = container.offset();
	var x_on_container;
	var y_on_container;
	if (center) {
		x_on_container = img_width / 2;
		y_on_container = img_height / 2;
	} else {
		x_on_container = (cont_mouse_pos_x - container_offset.left + scroll_left);
		y_on_container = (cont_mouse_pos_y - container_offset.top + scroll_top);
	}
	var container_top = container_offset.top - scroll_top;
	var container_left = container_offset.left - scroll_left;
	var delta_multiplier = new_multiplier - container_size_mult;
	var delta_top = delta_multiplier * y_on_container / container_size_mult;
	var delta_left = delta_multiplier * x_on_container / container_size_mult;
	container.css('left', (container_left - delta_left) + 'px').css('top', (container_top - delta_top) + 'px');
}
function container_show(id,src,new_width,new_height,resize_on_load){
	//cont_webm = (src.substr(-5) == '.webm');
	cont_webm = (video_formats.indexOf(get_ext(src))!=-1);
	container_size_mult = 1;
	mouse_on_container = false;
	container_img_id = id;
	cont_width = new_width;
	cont_height = new_height;
	//parts = src.split("/").pop().split(".");
	//ext = (parts).length > 1 ? parts.pop() : "";
	
	//if (is_admin) console.log($('#thumb_'+id+' > img:eq(0)').attr('src'));
	
	if (!cont_webm) {
		//var cont_html = '<img src="' + src + '" width="100%" height="100%" />'; //onerror="alert(\'error\');"
		//onloadstart="this.abort(); window.stop(); document.execCommand(\'Stop\');" onprogress="this.abort();  window.stop(); document.execCommand(\'Stop\');"
		
		//<img src="' + src + '" style="position:absolute; z-index:1;" width="100%" height="100%"'+(resize_on_load?' onload="expand_resize_img(this)"':'')+'/>'+'
		
		var thumb_src = $('#thumb_'+id+' > img:not(.displayed)');
		if (thumb_src.length)
			thumb_src = thumb_src.addClass('displayed').attr('src');
		else
			thumb_src = false;
		
		if (thumb_src)
			var cont_html = '<img src="' + $('#thumb_'+id+' > img:eq(0)').attr('src') + '" class="preloader" width="100%" height="100%"/>';
		else
			var cont_html = '';
		
		container_error_counter = 0;
		
		cont_html = '<div class="placeholder">' + cont_html + '<img src="' + src + '" class="full" width="100%" height="100%"'+(resize_on_load?' onload="expand_resize_img(this)"':' onload="$(this).prev().hide();"')+' onerror="setTimeout(container_try_reload,container_error_counter*500+10)"/>'+'</div>'; //
		//var cont_html = '<div style="background-image:url(\'' + src + '\'); display:block; width:100%; height:100%;"></div>'; autoplay -> preload="metadata"
	} else {
		var cont_html = '<video id="html5video" controls autoplay loop="1" onvolumechange="webm_set_volume()" width="100%" height="100%"'+(resize_on_load?' onloadedmetadata="expand_resize_webm(this)"':'')+'><source class="video" height="100%" width="100%" type="video/webm" src="' + src + '"></video>';
	}
	container.html(cont_html).css('top', (((win_height - new_height) / 2) - border_offset) + 'px').css('left', (((win_width - new_width) / 2) - border_offset) + 'px').width(cont_width).height(cont_height).show();
	if(webm_get_muted()) {
		container.find('video').prop('muted', webm_get_muted());
		container.find('video').prop('volume', Math.abs(webm_get_volume()));
	} else {
		container.find('video').prop('volume', webm_get_volume());
	}
	
	//window.stop();
}
function container_try_reload(){
	container_error_counter++;
	if (container_error_counter>10) return;
	var cont_image = container.find('img.full');
	var src = cont_image.attr("src");
	cont_image.removeAttr("src").attr("src", src);
}
function container_prep_switch(){
	mouse_on_container = false;
	if(cont_webm) {
		$('#ikr_'+container_img_id).html('').remove();
		//container.find('video').trigger('pause').empty();
	}
	container_img_id = '';
}
function container_hide(){
	container_prep_switch();
	//if(cont_webm)
	//	container.find('video').trigger('pause').empty();//unbind('onloadedmetadata');
	container.html('').hide();
}
function image_error(id) {
	my_notify('Ошибка загрузки изображения.'); //Повтор через 5 секунд...');
	//expand('+nums[0]+'+String.fromCharCode(95)+'+nums[1]+',this.src,this.clientWidth,this.clientHeight);
	//setTimeout(function(){
		//$('#ikr_'+id).remove();
		//$('#pib_'+id).find('a.expand_image').click();
	//}, 5000);
}
function expand_image2(id,full,event) {
	if((event.ctrlKey) || (full.indexOf('abload.de')!=-1)) {
		event.preventDefault();
		return expand_image(id,full);
	}
	
	if(id == container_img_id) return container_hide();
	if(container_img_id) container_prep_switch();
	
	//if(container.is(':visible')) 
	
	//var full = $('#imgv_full_'+id).val();
	//var nums = id.split('_');
	//var full = img_data[nums[0]][nums[1]]['f'];
	//var full = $('#pib_'+id+' a.img_filename').attr('title');
	//if mobile version
	if(window_width<min_pc_width) {
		link_go(full);
		return;
	}
	//var is_webm = (full.substr(-5) == '.webm');
	var is_webm = (video_formats.indexOf(get_ext(full))!=-1);
	
	if(!$('#ikr_'+id).length) {
		$('#ajax_load_indicator').show();
		
		var nums = id.split('_');
		$('#pib_'+id).prepend('<div id="ikr_'+id+'" class="full_image_container" style="visibility:hidden; width:0; height:0;"></div>'); //
		
		if(is_webm) {
			var rk_str = '<video onloadeddata="parent.expand('+nums[0]+'+String.fromCharCode(95)+'+nums[1]+',this.src,this.videoWidth,this.videoHeight);" id="webm_control_'+id+'" volume="0.5" preload="metadata" src="'+full+'" style="width:auto;height:auto;"></video>'; // no autoplay
		} else {
			//if(is_admin)
			//var rk_str = '<img src="' + full + '" />';
			//else
			var rk_str = '<img src="' + full + '" onload="parent.expand('+nums[0]+'+String.fromCharCode(95)+'+nums[1]+',this.src,this.clientWidth,this.clientHeight);" onerror="parent.image_error('+nums[0]+'+String.fromCharCode(95)+'+nums[1]+');"/>';
		}
		
		document.getElementById('ikr_'+id).innerHTML = ReferrerKiller.htmlString(rk_str,{}); //h_resize
		
		/*if(is_admin)
		setTimeout(function(){
			expand(id,full,300,300);
		}, 10); //4 for html5
		*/
		$('#pib_'+id+' .img_filename').addClass('visited');
		
	} else {
		if(is_webm) {
			var ikr_frame_obj = $('#ikr_'+id+' iframe').contents().find('video');
		} else {
			var ikr_frame_obj = $('#ikr_'+id+' iframe').contents().find('img');
		}
		expand(id,ikr_frame_obj.attr('src'),ikr_frame_obj.width(),ikr_frame_obj.height());
	}
}

/*function expand_thumbnail(full) {
	var rk_str = '<img src="' + full + '" onload="parent.expand('+nums[0]+'+String.fromCharCode(95)+'+nums[1]+',this.src,this.clientWidth,this.clientHeight);" onerror="parent.image_error('+nums[0]+'+String.fromCharCode(95)+'+nums[1]+');"/>';

	document.getElementById('ikr_'+id).innerHTML = ReferrerKiller.htmlString(rk_str,{})
}*/


//function expand(num, src, thumb_src, n_w, n_h, o_w, o_h, minimize) {
function expand(num, src, o_w, o_h, resize_only) {
	//$('#ikr_'+num).remove(); // free some memory?..
	$('#ajax_load_indicator').hide();
	
	if((o_w!=0)&&(o_h!=0)) {
		var maxWidth = win_width-border_offset*2; //-50,border_offset*2 Max width for the image
		var maxHeight = win_height-border_offset*2;	//-45 Max height for the image
		var ratio = 0;  // Used for aspect ratio
		var width = o_w;	// Current image width
		var height = o_h;  // Current image height
		var new_width = o_w;
		var new_height = o_h;

		// Check if the current width is larger than the max
		if(width > maxWidth){
			ratio = maxWidth / width;   // get ratio for scaling image
			//$('#ikr_'+id+' iframe').width(maxWidth); // Set new width
			//$('#ikr_'+id+' iframe').height(height * ratio);  // Scale height based on ratio
			new_width = maxWidth;
			new_height = height * ratio;
			height = height * ratio;	// Reset height to match scaled image
			width = width * ratio;	// Reset width to match scaled image
		}

		// Check if current height is larger than max
		if(height > maxHeight){
			ratio = maxHeight / height; // get ratio for scaling image
			new_width = width * ratio;
			new_height = maxHeight;
			width = width * ratio;	// Reset width to match scaled image
		}
		if(resize_only) {
			container_size_mult = 1;
			mouse_on_container = false;
			cont_width = new_width;
			cont_height = new_height;
			container.css('top', (((win_height - new_height) / 2) - border_offset) + 'px').css('left', (((win_width - new_width) / 2) - border_offset) + 'px').width(new_width).height(new_height);
		} else
			container_show(num,src,new_width,new_height);
	} else {
		var new_width = 640;
		var new_height = 360;
		if(!resize_only)
			container_show(num,src,new_width,new_height,1);
	}
	return false;
}
function expand_local(num, src, o_w, o_h, event) {
	if((event.ctrlKey) || (src.indexOf('abload.de')!=-1)) {
		event.preventDefault();
		return expand_image(num,src);
	}
	if(num == container_img_id) return container_hide();
	if(container_img_id) {
		container_prep_switch();
		//container_hide();
		if(cont_webm)
			container.find('video').trigger('pause').empty();
	}
	
	return expand(num, src, o_w, o_h);
}
function expand_resize_img(elem) {
	return expand(container_img_id,$(elem).attr('src'),elem.width,elem.height,1);
}
function expand_resize_webm(elem) {
	if(!$(elem).is(":visible")) {
		//console.log('!visible');
		$(elem).trigger('pause');
		elem.src='';
		elem.load();
		$(elem).empty();
		return false;
	}
	return expand(container_img_id,$(elem).find('video').attr('src'),elem.videoWidth,elem.videoHeight,1);
}

function thread_expand_all_images() {
	var e = jQuery.Event("click");
	e.ctrlKey = true;
	
	$('.post_image_block').each(function(){ $(this).find('a.expand_image').trigger(e); });
	
	$('#image_expander').hide(); $('#image_collapser').show();
}
function thread_collapse_all_images() {
	$('.post_image_block').each(function(){ collapse_image($(this).attr('pib')); });
	
	$('#image_collapser').hide(); $('#image_expander').show();
}







// save page with images to zip functions

function getBase64Image(img) {
    // Create an empty canvas element
    var canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;

    // Copy the image contents to the canvas
    var ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0);

    // Get the data-URL formatted image
    // Firefox supports PNG and JPEG. You could check img.src to
    // guess the original format, but be aware the using "image/jpg"
    // will re-encode the image.
    var dataURL = canvas.toDataURL("image/png");

    return dataURL; //.replace(/^data:image\/(png|jpg);base64,/, "");
    //return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
}
function base64encode(binary) {
	return btoa(unescape(encodeURIComponent(binary)));
}
function save_page_to_zip() {

/*$.get("http://0-focus-opensocial.googleusercontent.com/gadgets/proxy?url=http://image.bayimg.com/5e4cb207eec8eb667015a0ef592cf6b11ec79b38.jpg&container=focus&gadget=a&nocache=1",function(data,status){
    alert("Data: " + data + "\nStatus: " + status);
});
return;*/

/*var ifr_img = $('div.full_image_container iframe').contents().find('img')[ 0 ]; alert(ifr_img.src);
alert(getBase64Image(ifr_img));
return;*/

	$.getScript( [theme_dir+"/js/jszip.min.js",theme_dir+"/js/FileSaver.js"], function() { //function( data, textStatus, jqxhr ) {
		/*if((textStatus != 'success') || (jqxhr.status != 200)) {
			alert('Ошибка загрузки JSZip! (status:'+textStatus+',code:'+jqxhr.status+')'); return;
		}*/
		
		var zip = new JSZip();
		zip.file("Hello.txt", "Hello World\n");
		var img = zip.folder("images");
		
		
image_gets = [];
		alert('//todo'); return;
		$('input.imgv_full').each(function( index ) {
			var src = $(this).val();

			image_gets.push($.ajax("http://0-focus-opensocial.googleusercontent.com/gadgets/proxy?url="+src+"&container=focus&gadget=a&nocache=1",{
				type:'GET',
				processData:false,
				//contentType: "arraybuffer",
				mimeType:'text/plain; charset=x-user-defined',
				//crossDomain: true,
				success:function(data){
					//if(status!='success') alert('Error downloading '+src);
					//else
					//alert(status);		
					//alert(data.length);		
					//var blob = new Blob([data], {type: "image/png"}),
					//u = URL.createObjectURL(blob);
					//img.file( src.split('/').pop(), u, {base64: true});//{binary: true});
					img.file( src.split('/').pop(), (data), {binary: true});//{binary: true});
					//alert("Data: " + data + "\nStatus: " + status);
				}
			}));
		});
$.when.apply($, image_gets).then(function( data, textStatus, jqXHR ) {
	var content = zip.generate({type:"blob"});
	// see FileSaver.js
	saveAs(content, "example.zip");
	//alert( jqXHR.status ); // Alerts 200
});
		
		
		/*$('a.expand_image').click();
		$('div.full_image_container').each(function( index ) {
			$(this).find('iframe').on('load', function(event){
				var ifr_img = $(this).contents().find('img')[ 0 ]; //alert(ifr_img.src);
				//alert(getBase64Image(ifr_img));
				img.file( ifr_img.src.split('/').pop(), getBase64Image(ifr_img), {base64: true});
				console.log(ifr_img.src);
			});
		});
		$('div.full_image_container').hide();
		$('div.post_image').show();*/


		/*$('div.full_image_container').each(function( index ) {
			var ifr_img = $(this).find('iframe').contents().find('img')[ 0 ]; //alert(ifr_img.src);
			alert(getBase64Image(ifr_img));
			img.file( ifr_img.src.split('/').pop(), getBase64Image(ifr_img), {base64: true});
		});*/
		
		
	});
	//theme_dir
	//$('html').html()
}


/*function link_go(url){
	var win=window.open(url, '_blank');
	win.focus();
}*/
