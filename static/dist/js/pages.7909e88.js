! function(n) {
	var r = {};

	function i(e) {
		var t;
		return (r[e] || (t = r[e] = {
			i: e,
			l: !1,
			exports: {}
		}, n[e].call(t.exports, t, t.exports, i), t.l = !0, t)).exports
	}
	i.m = n, i.c = r, i.d = function(e, t, n) {
		i.o(e, t) || Object.defineProperty(e, t, {
			enumerable: !0,
			get: n
		})
	}, i.r = function(e) {
		"undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
			value: "Module"
		}), Object.defineProperty(e, "__esModule", {
			value: !0
		})
	}, i.t = function(t, e) {
		if (1 & e && (t = i(t)), 8 & e) return t;
		if (4 & e && "object" == typeof t && t && t.__esModule) return t;
		var n = Object.create(null);
		if (i.r(n), Object.defineProperty(n, "default", {
				enumerable: !0,
				value: t
			}), 2 & e && "string" != typeof t)
			for (var r in t) i.d(n, r, function(e) {
				return t[e]
			}.bind(null, r));
		return n
	}, i.n = function(e) {
		var t = e && e.__esModule ? function() {
			return e.default
		} : function() {
			return e
		};
		return i.d(t, "a", t), t
	}, i.o = function(e, t) {
		return Object.prototype.hasOwnProperty.call(e, t)
	}, i.p = "", i(i.s = 449)
}({
	284: function(e, t) {
		var n, r, i, o, l, a;

		function c() {
			document.querySelectorAll("a.anchor").forEach(function(e) {
				var t, n;
				(t = (e = e).getAttribute("name")) && (e = e.getBoundingClientRect().y, i(e)) && (n = !1, document.querySelectorAll('.sidebar .sidebar__menu__item a[href$="#' + t + '"]').forEach(function(e) {
					e.parentElement.classList.add("sidebar__menu__item--active"), o(e), n = !0
				}), n) && r(t)
			})
		}
		0 != document.querySelectorAll(".sidebar").length && (0 !== (a = document.querySelectorAll(".sidebar")).length && (l = function() {
			a.forEach(function(e) {
				var t = e,
					n = t.getBoundingClientRect(),
					r = t.parentElement,
					i = r.getBoundingClientRect(),
					o = getComputedStyle(t),
					r = getComputedStyle(r),
					r = (t.style.width = i.width - parseFloat(r.paddingLeft) - parseFloat(r.paddingRight) + "px", o.getPropertyValue("--max-height-offset")),
					o = (t.style.maxHeight = "calc(100vh - " + n.top + "px " + (r ? "-" + r : "") + ")", Math.abs(n.bottom - i.bottom));
				n.bottom > i.bottom ? t.style.height = n.height - o + "px" : t.style.height = n.height + o + "px";
				r = e.querySelector(".sidebar__menu__item--active");
				r && (void 0 === (i = r).scrollIntoViewIfNeeded ? i.scrollIntoView() : i.scrollIntoViewIfNeeded())
			})
		}, window.addEventListener("scroll", l), window.addEventListener("resize", l), void 0 !== window.ResizeObserver && new window.ResizeObserver(l).observe(document.body), l()), r = function(e) {
			document.querySelectorAll('.sidebar .sidebar__menu__item a[href]:not([href$="#' + e + '"])').forEach(function(e) {
				e.parentElement.classList.remove("sidebar__menu__item--active")
			})
		}, i = function(e) {
			return e <= .1 * window.innerHeight
		}, o = function(e) {
			var t = e.parentElement.parentElement.scrollTop,
				t = e.parentElement.parentElement.parentElement.clientHeight + t,
				n = e.getBoundingClientRect(),
				r = n.y;
			(r <= n.height || t < r) && e.scrollIntoView()
		}, window.addEventListener("scroll", c), c(), (n = document.querySelectorAll(".main-sidebar__sidebar")).forEach(function(e) {
			e.addEventListener("click", function(e) {
				e.target === this && this.classList.toggle("main-sidebar__sidebar--display")
			})
		}), document.querySelectorAll(".main-sidebar__backdrop").forEach(function(e) {
			e.addEventListener("click", function() {
				n.forEach(function(e) {
					e.classList.remove("main-sidebar__sidebar--display")
				})
			})
		}))
	},
	449: function(e, t, n) {
		"use strict";
		n.r(t);
		n(450), n(284)
	},
	450: function(e, t, n) {}
});