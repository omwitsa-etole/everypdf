var apiServer = "https://api.webdocedit.com"

!function(n) {
    var i = {};
    function r(e) {
        var t;
        return (i[e] || (t = i[e] = {
            i: e,
            l: !1,
            exports: {}
        },
        n[e].call(t.exports, t, t.exports, r),
        t.l = !0,
        t)).exports
    }
    r.m = n,
    r.c = i,
    r.d = function(e, t, n) {
        r.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: n
        })
    }
    ,
    r.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }),
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }
    ,
    r.t = function(t, e) {
        if (1 & e && (t = r(t)),
        8 & e)
            return t;
        if (4 & e && "object" == typeof t && t && t.__esModule)
            return t;
        var n = Object.create(null);
        if (r.r(n),
        Object.defineProperty(n, "default", {
            enumerable: !0,
            value: t
        }),
        2 & e && "string" != typeof t)
            for (var i in t)
                r.d(n, i, function(e) {
                    return t[e]
                }
                .bind(null, i));
        return n
    }
    ,
    r.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        }
        : function() {
            return e
        }
        ;
        return r.d(t, "a", t),
        t
    }
    ,
    r.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }
    ,
    r.p = "",
    r(r.s = 448)
}([function(e, t, n) {
    "use strict";
    n.d(t, "b", function() {
        return r
    }),
    n.d(t, "a", function() {
        return o
    }),
    n.d(t, "d", function() {
        return a
    }),
    n.d(t, "f", function() {
        return s
    }),
    n.d(t, "c", function() {
        return c
    }),
    n.d(t, "e", function() {
        return u
    });
    var i = function(e, t) {
        return (i = Object.setPrototypeOf || ({
            __proto__: []
        }instanceof Array ? function(e, t) {
            e.__proto__ = t
        }
        : function(e, t) {
            for (var n in t)
                t.hasOwnProperty(n) && (e[n] = t[n])
        }
        ))(e, t)
    };
    function r(e, t) {
        function n() {
            this.constructor = e
        }
        i(e, t),
        e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype,
        new n)
    }
    var o = function() {
        return (o = Object.assign || function(e) {
            for (var t, n = 1, i = arguments.length; n < i; n++)
                for (var r in t = arguments[n])
                    Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
            return e
        }
        ).apply(this, arguments)
    };
    function a(e, t) {
        var n = {};
        for (r in e)
            Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols)
            for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
                t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]);
        return n
    }
    function s(e) {
        var t = "function" == typeof Symbol && Symbol.iterator
          , n = t && e[t]
          , i = 0;
        if (n)
            return n.call(e);
        if (e && "number" == typeof e.length)
            return {
                next: function() {
                    return {
                        value: (e = e && i >= e.length ? void 0 : e) && e[i++],
                        done: !e
                    }
                }
            };
        throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
    }
    function c(e, t) {
        var n = "function" == typeof Symbol && e[Symbol.iterator];
        if (!n)
            return e;
        var i, r, o = n.call(e), a = [];
        try {
            for (; (void 0 === t || 0 < t--) && !(i = o.next()).done; )
                a.push(i.value)
        } catch (e) {
            r = {
                error: e
            }
        } finally {
            try {
                i && !i.done && (n = o.return) && n.call(o)
            } finally {
                if (r)
                    throw r.error
            }
        }
        return a
    }
    function u() {
        for (var e = [], t = 0; t < arguments.length; t++)
            e = e.concat(c(arguments[t]));
        return e
    }
}
, function(t, e, n) {
    !function(e) {
        t.exports = e.jQuery = n(83)
    }
    .call(this, n(31))
}
, function(e, t, n) {
    "use strict";
    function i(e) {
        switch (Object.prototype.toString.call(e)) {
        case "[object Error]":
        case "[object Exception]":
        case "[object DOMException]":
            return !0;
        default:
            return m(e, Error)
        }
    }
    function r(e) {
        return "[object ErrorEvent]" === Object.prototype.toString.call(e)
    }
    function o(e) {
        return "[object DOMError]" === Object.prototype.toString.call(e)
    }
    function a(e) {
        return "[object DOMException]" === Object.prototype.toString.call(e)
    }
    function s(e) {
        return "[object String]" === Object.prototype.toString.call(e)
    }
    function c(e) {
        return null === e || "object" != typeof e && "function" != typeof e
    }
    function u(e) {
        return "[object Object]" === Object.prototype.toString.call(e)
    }
    function l(e) {
        return "undefined" != typeof Event && m(e, Event)
    }
    function d(e) {
        return "undefined" != typeof Element && m(e, Element)
    }
    function f(e) {
        return "[object RegExp]" === Object.prototype.toString.call(e)
    }
    function p(e) {
        return Boolean(e && e.then && "function" == typeof e.then)
    }
    function h(e) {
        return u(e) && "nativeEvent"in e && "preventDefault"in e && "stopPropagation"in e
    }
    function m(e, t) {
        try {
            return e instanceof t
        } catch (e) {
            return !1
        }
    }
    n.d(t, "d", function() {
        return i
    }),
    n.d(t, "e", function() {
        return r
    }),
    n.d(t, "a", function() {
        return o
    }),
    n.d(t, "b", function() {
        return a
    }),
    n.d(t, "k", function() {
        return s
    }),
    n.d(t, "i", function() {
        return c
    }),
    n.d(t, "h", function() {
        return u
    }),
    n.d(t, "f", function() {
        return l
    }),
    n.d(t, "c", function() {
        return d
    }),
    n.d(t, "j", function() {
        return f
    }),
    n.d(t, "m", function() {
        return p
    }),
    n.d(t, "l", function() {
        return h
    }),
    n.d(t, "g", function() {
        return m
    })
}
, function(e, p, h) {
    "use strict";
    !function(e) {
        h.d(p, "e", function() {
            return o
        }),
        h.d(p, "i", function() {
            return i
        }),
        h.d(p, "h", function() {
            return r
        }),
        h.d(p, "d", function() {
            return a
        }),
        h.d(p, "c", function() {
            return s
        }),
        h.d(p, "b", function() {
            return c
        }),
        h.d(p, "a", function() {
            return u
        }),
        h.d(p, "f", function() {
            return l
        }),
        h.d(p, "g", function() {
            return f
        });
        var t = h(39)
          , n = (h(23),
        {});
        function o() {
            return Object(t.b)() ? e : "undefined" != typeof window ? window : "undefined" != typeof self ? self : n
        }
        function i() {
            var e, t = o(), t = t.crypto || t.msCrypto;
            return void 0 !== t && t.getRandomValues ? (e = new Uint16Array(8),
            t.getRandomValues(e),
            e[3] = 4095 & e[3] | 16384,
            e[4] = 16383 & e[4] | 32768,
            (t = function(e) {
                for (var t = e.toString(16); t.length < 4; )
                    t = "0" + t;
                return t
            }
            )(e[0]) + t(e[1]) + t(e[2]) + t(e[3]) + t(e[4]) + t(e[5]) + t(e[6]) + t(e[7])) : "xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g, function(e) {
                var t = 16 * Math.random() | 0;
                return ("x" === e ? t : 3 & t | 8).toString(16)
            })
        }
        function r(e) {
            var t, n;
            return (e = e && e.match(/^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/)) ? (t = e[6] || "",
            n = e[8] || "",
            {
                host: e[4],
                path: e[5],
                protocol: e[2],
                relative: e[5] + t + n
            }) : {}
        }
        function a(e) {
            var t;
            return e.message || (e.exception && e.exception.values && e.exception.values[0] ? (t = e.exception.values[0]).type && t.value ? t.type + ": " + t.value : t.type || t.value || e.event_id || "<unknown>" : e.event_id || "<unknown>")
        }
        function s(e) {
            var t, n, i, r = o();
            return "console"in r ? (t = r.console,
            n = {},
            ["debug", "info", "warn", "error", "log", "assert"].forEach(function(e) {
                e in r.console && t[e].__sentry_original__ && (n[e] = t[e],
                t[e] = t[e].__sentry_original__)
            }),
            i = e(),
            Object.keys(n).forEach(function(e) {
                t[e] = n[e]
            }),
            i) : e()
        }
        function c(e, t, n) {
            e.exception = e.exception || {},
            e.exception.values = e.exception.values || [],
            e.exception.values[0] = e.exception.values[0] || {},
            e.exception.values[0].value = e.exception.values[0].value || t || "",
            e.exception.values[0].type = e.exception.values[0].type || n || "Error"
        }
        function u(t, n) {
            void 0 === n && (n = {});
            try {
                t.exception.values[0].mechanism = t.exception.values[0].mechanism || {},
                Object.keys(n).forEach(function(e) {
                    t.exception.values[0].mechanism[e] = n[e]
                })
            } catch (e) {}
        }
        function l() {
            try {
                return document.location.href
            } catch (e) {
                return ""
            }
        }
        var d = 6e4;
        function f(e, t) {
            var n;
            return t ? (n = parseInt("" + t, 10),
            isNaN(n) ? (t = Date.parse("" + t),
            isNaN(t) ? d : t - e) : 1e3 * n) : d
        }
    }
    .call(this, h(31))
}
, , function(e, g, y) {
    "use strict";
    !function(n) {
        y.d(g, "c", function() {
            return e
        }),
        y.d(g, "f", function() {
            return t
        }),
        y.d(g, "e", function() {
            return s
        }),
        y.d(g, "d", function() {
            return h
        }),
        y.d(g, "b", function() {
            return m
        }),
        y.d(g, "a", function() {
            return v
        });
        var c = y(0)
          , a = y(40)
          , u = y(2)
          , l = y(72)
          , i = y(19)
          , o = y(23);
        function e(e, t, n) {
            if (t in e) {
                var i = e[t]
                  , n = n(i);
                if ("function" == typeof n)
                    try {
                        n.prototype = n.prototype || {},
                        Object.defineProperties(n, {
                            __sentry_original__: {
                                enumerable: !1,
                                value: i
                            }
                        })
                    } catch (e) {}
                e[t] = n
            }
        }
        function t(t) {
            return Object.keys(t).map(function(e) {
                return encodeURIComponent(e) + "=" + encodeURIComponent(t[e])
            }).join("&")
        }
        function d(e) {
            if (Object(u.d)(e)) {
                var t = e
                  , n = {
                    message: t.message,
                    name: t.name,
                    stack: t.stack
                };
                for (i in t)
                    Object.prototype.hasOwnProperty.call(t, i) && (n[i] = t[i]);
                return n
            }
            if (Object(u.f)(e)) {
                var i, r = e, o = {};
                o.type = r.type;
                try {
                    o.target = Object(u.c)(r.target) ? Object(a.a)(r.target) : Object.prototype.toString.call(r.target)
                } catch (e) {
                    o.target = "<unknown>"
                }
                try {
                    o.currentTarget = Object(u.c)(r.currentTarget) ? Object(a.a)(r.currentTarget) : Object.prototype.toString.call(r.currentTarget)
                } catch (e) {
                    o.currentTarget = "<unknown>"
                }
                for (i in "undefined" != typeof CustomEvent && Object(u.g)(e, CustomEvent) && (o.detail = r.detail),
                r)
                    Object.prototype.hasOwnProperty.call(r, i) && (o[i] = r);
                return o
            }
            return e
        }
        function r(e) {
            return e = JSON.stringify(e),
            ~-encodeURI(e).split(/%..|./).length
        }
        function s(e, t, n) {
            void 0 === n && (n = 102400);
            var i = h(e, t = void 0 === t ? 3 : t);
            return r(i) > n ? s(e, t - 1, n) : i
        }
        function f(e, t) {
            return "domain" === t && e && "object" == typeof e && e._events ? "[Domain]" : "domainEmitter" === t ? "[DomainEmitter]" : void 0 !== n && e === n ? "[Global]" : "undefined" != typeof window && e === window ? "[Window]" : "undefined" != typeof document && e === document ? "[Document]" : Object(u.l)(e) ? "[SyntheticEvent]" : "number" == typeof e && e != e ? "[NaN]" : void 0 === e ? "[undefined]" : "function" == typeof e ? "[Function: " + Object(i.a)(e) + "]" : "symbol" == typeof e ? "[" + String(e) + "]" : "bigint" == typeof e ? "[BigInt: " + String(e) + "]" : e
        }
        function p(e, t, n, i) {
            if (void 0 === n && (n = 1 / 0),
            void 0 === i && (i = new l.a),
            0 === n)
                return o = t,
                r = Object.prototype.toString.call(o),
                "string" == typeof o ? o : "[object Object]" === r ? "[Object]" : "[object Array]" === r ? "[Array]" : (o = f(o),
                Object(u.i)(o) ? o : r);
            var r;
            if (null != t && "function" == typeof t.toJSON)
                return t.toJSON();
            var o = f(t, e);
            if (Object(u.i)(o))
                return o;
            var a, s = d(t), c = Array.isArray(t) ? [] : {};
            if (i.memoize(t))
                return "[Circular ~]";
            for (a in s)
                Object.prototype.hasOwnProperty.call(s, a) && (c[a] = p(a, s[a], n - 1, i));
            return i.unmemoize(t),
            c
        }
        function h(e, n) {
            try {
                return JSON.parse(JSON.stringify(e, function(e, t) {
                    return p(e, t, n)
                }))
            } catch (e) {
                return "**non-serializable**"
            }
        }
        function m(e, t) {
            void 0 === t && (t = 40);
            var n = Object.keys(d(e));
            if (n.sort(),
            !n.length)
                return "[object has no keys]";
            if (n[0].length >= t)
                return Object(o.d)(n[0], t);
            for (var i = n.length; 0 < i; i--) {
                var r = n.slice(0, i).join(", ");
                if (!(r.length > t))
                    return i === n.length ? r : Object(o.d)(r, t)
            }
            return ""
        }
        function v(e) {
            var t, n;
            if (Object(u.h)(e)) {
                var i = e
                  , r = {};
                try {
                    for (var o = Object(c.f)(Object.keys(i)), a = o.next(); !a.done; a = o.next()) {
                        var s = a.value;
                        void 0 !== i[s] && (r[s] = v(i[s]))
                    }
                } catch (e) {
                    t = {
                        error: e
                    }
                } finally {
                    try {
                        a && !a.done && (n = o.return) && n.call(o)
                    } finally {
                        if (t)
                            throw t.error
                    }
                }
                return r
            }
            return Array.isArray(e) ? e.map(v) : e
        }
    }
    .call(this, y(31))
}
, function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
        return h
    }),
    n.d(t, "d", function() {
        return g
    }),
    n.d(t, "b", function() {
        return y
    }),
    n.d(t, "c", function() {
        return b
    });
    var s = n(0)
      , c = n(3)
      , u = n(104)
      , r = n(12)
      , i = n(39)
      , o = n(36)
      , a = n(78)
      , l = n(5)
      , d = (f.prototype.update = function(e) {
        (e = void 0 === e ? {} : e).user && (e.user.ip_address && (this.ipAddress = e.user.ip_address),
        e.did || (this.did = e.user.id || e.user.email || e.user.username)),
        this.timestamp = e.timestamp || Date.now(),
        e.sid && (this.sid = 32 === e.sid.length ? e.sid : Object(c.i)()),
        e.did && (this.did = "" + e.did),
        "number" == typeof e.started && (this.started = e.started),
        "number" == typeof e.duration ? this.duration = e.duration : this.duration = this.timestamp - this.started,
        e.release && (this.release = e.release),
        e.environment && (this.environment = e.environment),
        e.ipAddress && (this.ipAddress = e.ipAddress),
        e.userAgent && (this.userAgent = e.userAgent),
        "number" == typeof e.errors && (this.errors = e.errors),
        e.status && (this.status = e.status)
    }
    ,
    f.prototype.close = function(e) {
        e ? this.update({
            status: e
        }) : this.status === a.a.Ok ? this.update({
            status: a.a.Exited
        }) : this.update()
    }
    ,
    f.prototype.toJSON = function() {
        return Object(l.a)({
            sid: "" + this.sid,
            init: !0,
            started: new Date(this.started).toISOString(),
            timestamp: new Date(this.timestamp).toISOString(),
            status: this.status,
            errors: this.errors,
            did: "number" == typeof this.did || "string" == typeof this.did ? "" + this.did : void 0,
            duration: this.duration,
            attrs: Object(l.a)({
                release: this.release,
                environment: this.environment,
                ip_address: this.ipAddress,
                user_agent: this.userAgent
            })
        })
    }
    ,
    f);
    function f(e) {
        this.errors = 0,
        this.sid = Object(c.i)(),
        this.timestamp = Date.now(),
        this.started = Date.now(),
        this.duration = 0,
        this.status = a.a.Ok,
        e && this.update(e)
    }
    var p = 3
      , h = (m.prototype.isOlderThan = function(e) {
        return this._version < e
    }
    ,
    m.prototype.bindClient = function(e) {
        (this.getStackTop().client = e) && e.setupIntegrations && e.setupIntegrations()
    }
    ,
    m.prototype.pushScope = function() {
        var e = o.a.clone(this.getScope());
        return this.getStack().push({
            client: this.getClient(),
            scope: e
        }),
        e
    }
    ,
    m.prototype.popScope = function() {
        return !(this.getStack().length <= 1 || !this.getStack().pop())
    }
    ,
    m.prototype.withScope = function(e) {
        var t = this.pushScope();
        try {
            e(t)
        } finally {
            this.popScope()
        }
    }
    ,
    m.prototype.getClient = function() {
        return this.getStackTop().client
    }
    ,
    m.prototype.getScope = function() {
        return this.getStackTop().scope
    }
    ,
    m.prototype.getStack = function() {
        return this._stack
    }
    ,
    m.prototype.getStackTop = function() {
        return this._stack[this._stack.length - 1]
    }
    ,
    m.prototype.captureException = function(e, t) {
        var n = this._lastEventId = Object(c.i)()
          , i = t;
        if (!t) {
            t = void 0;
            try {
                throw new Error("Sentry syntheticException")
            } catch (e) {
                t = e
            }
            i = {
                originalException: e,
                syntheticException: t
            }
        }
        return this._invokeClient("captureException", e, Object(s.a)(Object(s.a)({}, i), {
            event_id: n
        })),
        n
    }
    ,
    m.prototype.captureMessage = function(e, t, n) {
        var i = this._lastEventId = Object(c.i)()
          , r = n;
        if (!n) {
            n = void 0;
            try {
                throw new Error(e)
            } catch (e) {
                n = e
            }
            r = {
                originalException: e,
                syntheticException: n
            }
        }
        return this._invokeClient("captureMessage", e, t, Object(s.a)(Object(s.a)({}, r), {
            event_id: i
        })),
        i
    }
    ,
    m.prototype.captureEvent = function(e, t) {
        var n = this._lastEventId = Object(c.i)();
        return this._invokeClient("captureEvent", e, Object(s.a)(Object(s.a)({}, t), {
            event_id: n
        })),
        n
    }
    ,
    m.prototype.lastEventId = function() {
        return this._lastEventId
    }
    ,
    m.prototype.addBreadcrumb = function(e, t) {
        var n, i, r, o = this.getStackTop(), a = o.scope, o = o.client;
        a && o && (r = (o = o.getOptions && o.getOptions() || {}).beforeBreadcrumb,
        n = void 0 === r ? null : r,
        (o = void 0 === (r = o.maxBreadcrumbs) ? 100 : r) <= 0 || (r = Object(u.a)(),
        i = Object(s.a)({
            timestamp: r
        }, e),
        null !== (r = n ? Object(c.c)(function() {
            return n(i, t)
        }) : i) && a.addBreadcrumb(r, Math.min(o, 100))))
    }
    ,
    m.prototype.setUser = function(e) {
        var t = this.getScope();
        t && t.setUser(e)
    }
    ,
    m.prototype.setTags = function(e) {
        var t = this.getScope();
        t && t.setTags(e)
    }
    ,
    m.prototype.setExtras = function(e) {
        var t = this.getScope();
        t && t.setExtras(e)
    }
    ,
    m.prototype.setTag = function(e, t) {
        var n = this.getScope();
        n && n.setTag(e, t)
    }
    ,
    m.prototype.setExtra = function(e, t) {
        var n = this.getScope();
        n && n.setExtra(e, t)
    }
    ,
    m.prototype.setContext = function(e, t) {
        var n = this.getScope();
        n && n.setContext(e, t)
    }
    ,
    m.prototype.configureScope = function(e) {
        var t = this.getStackTop()
          , n = t.scope
          , t = t.client;
        n && t && e(n)
    }
    ,
    m.prototype.run = function(e) {
        var t = g(this);
        try {
            e(this)
        } finally {
            g(t)
        }
    }
    ,
    m.prototype.getIntegration = function(t) {
        var e = this.getClient();
        if (!e)
            return null;
        try {
            return e.getIntegration(t)
        } catch (e) {
            return r.a.warn("Cannot retrieve integration " + t.id + " from the current Hub"),
            null
        }
    }
    ,
    m.prototype.startSpan = function(e) {
        return this._callExtensionMethod("startSpan", e)
    }
    ,
    m.prototype.startTransaction = function(e, t) {
        return this._callExtensionMethod("startTransaction", e, t)
    }
    ,
    m.prototype.traceHeaders = function() {
        return this._callExtensionMethod("traceHeaders")
    }
    ,
    m.prototype.startSession = function(e) {
        this.endSession();
        var t = this.getStackTop()
          , n = t.scope
          , t = t.client
          , t = t && t.getOptions() || {}
          , i = t.release
          , t = t.environment
          , i = new d(Object(s.a)(Object(s.a)({
            release: i,
            environment: t
        }, n && {
            user: n.getUser()
        }), e));
        return n && n.setSession(i),
        i
    }
    ,
    m.prototype.endSession = function() {
        var e, t = this.getStackTop(), n = t.scope, t = t.client;
        n && (e = n.getSession && n.getSession()) && (e.close(),
        t && t.captureSession && t.captureSession(e),
        n.setSession())
    }
    ,
    m.prototype._invokeClient = function(e) {
        for (var t = [], n = 1; n < arguments.length; n++)
            t[n - 1] = arguments[n];
        var i = this.getStackTop()
          , r = i.scope
          , i = i.client;
        i && i[e] && i[e].apply(i, Object(s.e)(t, [r]))
    }
    ,
    m.prototype._callExtensionMethod = function(e) {
        for (var t = [], n = 1; n < arguments.length; n++)
            t[n - 1] = arguments[n];
        var i = v().__SENTRY__;
        if (i && i.extensions && "function" == typeof i.extensions[e])
            return i.extensions[e].apply(this, t);
        r.a.warn("Extension method " + e + " couldn't be found, doing nothing.")
    }
    ,
    m);
    function m(e, t, n) {
        void 0 === t && (t = new o.a),
        this._version = n = void 0 === n ? p : n,
        this._stack = [{}],
        this.getStackTop().scope = t,
        this.bindClient(e)
    }
    function v() {
        var e = Object(c.e)();
        return e.__SENTRY__ = e.__SENTRY__ || {
            extensions: {},
            hub: void 0
        },
        e
    }
    function g(e) {
        var t = v()
          , n = b(t);
        return w(t, e),
        n
    }
    function y() {
        var t = v();
        if (_(t) && !b(t).isOlderThan(p) || w(t, new h),
        !Object(i.b)())
            return b(t);
        try {
            var e, n = function() {
                var e = v().__SENTRY__;
                return e && e.extensions && e.extensions.domain && e.extensions.domain.active
            }();
            return n ? (_(n) && !b(n).isOlderThan(p) || (e = b(t).getStackTop(),
            w(n, new h(e.client,o.a.clone(e.scope)))),
            b(n)) : b(t)
        } catch (e) {
            return b(t)
        }
    }
    function _(e) {
        return e && e.__SENTRY__ && e.__SENTRY__.hub
    }
    function b(e) {
        return e && e.__SENTRY__ && e.__SENTRY__.hub || (e.__SENTRY__ = e.__SENTRY__ || {},
        e.__SENTRY__.hub = new h),
        e.__SENTRY__.hub
    }
    function w(e, t) {
        e && (e.__SENTRY__ = e.__SENTRY__ || {},
        e.__SENTRY__.hub = t)
    }
}
, function(e, a, s) {
    "use strict";
    !function(n) {
        var i = this && this.__createBinding || (Object.create ? function(e, t, n, i) {
            void 0 === i && (i = n),
            Object.defineProperty(e, i, {
                enumerable: !0,
                get: function() {
                    return t[n]
                }
            })
        }
        : function(e, t, n, i) {
            e[i = void 0 === i ? n : i] = t[n]
        }
        )
          , r = this && this.__setModuleDefault || (Object.create ? function(e, t) {
            Object.defineProperty(e, "default", {
                enumerable: !0,
                value: t
            })
        }
        : function(e, t) {
            e.default = t
        }
        )
          , e = this && this.__importStar || function(e) {
            if (e && e.__esModule)
                return e;
            var t = {};
            if (null != e)
                for (var n in e)
                    "default" !== n && Object.hasOwnProperty.call(e, n) && i(t, e, n);
            return r(t, e),
            t
        }
          , t = (Object.defineProperty(a, "__esModule", {
            value: !0
        }),
        a.Lang = void 0,
        e(s(87)));
        function o() {}
        o.t = function(e, t) {
            var n = "iloveLang";
            return t && t.source && (n = t.source),
            window[n] && window[n][e] && (e = window[n][e]),
            e = this.tr(e, t)
        }
        ,
        o.tr = function(n, i) {
            return null != i && Object.keys(i).forEach(function(e) {
                var t = i[e];
                n = (n = n.replace("${" + e + "}", t)).replace("{" + e + "}", t)
            }),
            n
        }
        ,
        o.w = function(e, t) {
            n("." + (e = void 0 === e ? "translate" : e)).each(function() {
                var e = n(this).html();
                n(this).html(o.t(e, t))
            }),
            n("#" + e).each(function() {
                var e = n(this).html();
                n(this).html(o.t(e, t))
            })
        }
        ,
        o.fontsForWritingSystem = function(e) {
            switch (e) {
            case "latin":
                return ["arial", "verdana", "courier", "comic", "times-new-roman", "impact", "arial-unicode-ms"];
            case "indic":
                return ["lohit-marathi", "lohit-devanagari", "arial-unicode-ms"];
            default:
                return ["arial-unicode-ms"]
            }
        }
        ,
        o.getFontsInfo = function() {
            var e = window.fonts;
            if (e)
                return e;
            throw "[Lang Service] You have to load the fonts information from the backend to use this method"
        }
        ,
        o.loadAllFonts = function() {
            for (var e in window.fonts)
                window.fonts.hasOwnProperty(e) && "arial" != e && this.loadFont(e)
        }
        ,
        o.loadFont = function(e) {
            e in this.loadedFonts || (t.lazyloadCss("/font/" + e + ".css"),
            this.loadedFonts[e] = !0)
        }
        ,
        o.hasHindiCharacters = function(e) {
            return 0 < e.split("").filter(function(e) {
                e = e.charCodeAt();
                return 2309 <= e && e <= 2361
            }).length
        }
        ,
        o.hasJapanCharacters = function(e) {
            return /[\u3000-\u303f]|[\u3040-\u309f]|[\u30a0-\u30ff]|[\uff00-\uff9f]|[\u4e00-\u9faf]|[\u3400-\u4dbf]/.test(e)
        }
        ,
        o.hasChineseCharacters = function(e) {
            return /[\u4e00-\u9fff]|[\u3400-\u4dbf]|[\uf900-\ufaff]|[\u3300-\u33ff]|[\ufe30-\ufe4f]|[\uf900-\ufaff]/.test(e)
        }
        ,
        o.hasKoreanCharacters = function(e) {
            return /[\uac00-\uafff]|[\ub000-\ubfff]/.test(e)
        }
        ,
        o.hasArabicCharacters = function(e) {
            return /[\u0600-\u06FF]|[\u0750-\u077F]/.test(e)
        }
        ,
        o.hasGreekCharacters = function(e) {
            return /[\u0370-\u03FF]|[\u1F00-\u1FFF]/.test(e)
        }
        ,
        o.hasCyrillicCharacters = function(e) {
            return /[\u0400-\u04FF]|[\u0500-\u052F]/.test(e)
        }
        ,
        o.hasCommonLatinCharacters = function(e) {
            return !1
        }
        ,
        o.keyCodeToWritingSystem = function(e) {
            for (var t in this.writingSystemCharacterRanges)
                for (var n = this.writingSystemCharacterRanges[t], i = 0; i < n.length; i++) {
                    var r = n[i]
                      , o = r[0]
                      , r = r[1];
                    if (o <= e && e <= r)
                        return t
                }
            return "unknown"
        }
        ,
        o.detectWritingSystems = function(e) {
            if (0 === e.length)
                return [];
            for (var t = {}, n = 0; n < e.length; n++)
                t[this.keyCodeToWritingSystem(e.charCodeAt(n))] = !0;
            return Object.keys(t)
        }
        ,
        o.loadedFonts = {},
        o.FALLBACK_FONT_FAMILY = "arial-unicode-ms",
        o.writingSystemCharacterRanges = {
            latin: [[0, 127], [128, 255], [256, 383], [384, 591], [7680, 7935], [9312, 9471], [11360, 11391], [42784, 43007], [64256, 64335], [65104, 65135]],
            indic: [[2304, 2431], [43232, 43263]]
        },
        a.Lang = o
    }
    .call(this, s(1))
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.IloveEvent = void 0,
    t.IloveEvent = function(e, t) {
        void 0 === t && (t = null),
        this.name = e,
        this.detail = t
    }
}
, function(e, t, n) {
    "use strict";
    n.d(t, "c", function() {
        return i
    }),
    n.d(t, "d", function() {
        return s
    }),
    n.d(t, "b", function() {
        return c
    }),
    n.d(t, "e", function() {
        return u
    }),
    n.d(t, "a", function() {
        return l
    }),
    n.d(t, "f", function() {
        return d
    }),
    n.d(t, "h", function() {
        return f
    }),
    n.d(t, "j", function() {
        return p
    }),
    n.d(t, "g", function() {
        return h
    }),
    n.d(t, "i", function() {
        return m
    }),
    n.d(t, "k", function() {
        return v
    }),
    n.d(t, "m", function() {
        return g
    }),
    n.d(t, "l", function() {
        return y
    });
    var r = n(0)
      , o = n(6);
    function a(e) {
        for (var t = [], n = 1; n < arguments.length; n++)
            t[n - 1] = arguments[n];
        var i = Object(o.b)();
        if (i && i[e])
            return i[e].apply(i, Object(r.e)(t));
        throw new Error("No hub defined or " + e + " was not found on the hub, please open a bug report.")
    }
    function i(e, t) {
        var n;
        try {
            throw new Error("Sentry syntheticException")
        } catch (e) {
            n = e
        }
        return a("captureException", e, {
            captureContext: t,
            originalException: e,
            syntheticException: n
        })
    }
    function s(e, t) {
        var n;
        try {
            throw new Error(e)
        } catch (e) {
            n = e
        }
        var i = "string" != typeof t ? {
            captureContext: t
        } : void 0;
        return a("captureMessage", e, "string" == typeof t ? t : void 0, Object(r.a)({
            originalException: e,
            syntheticException: n
        }, i))
    }
    function c(e) {
        return a("captureEvent", e)
    }
    function u(e) {
        a("configureScope", e)
    }
    function l(e) {
        a("addBreadcrumb", e)
    }
    function d(e, t) {
        a("setContext", e, t)
    }
    function f(e) {
        a("setExtras", e)
    }
    function p(e) {
        a("setTags", e)
    }
    function h(e, t) {
        a("setExtra", e, t)
    }
    function m(e, t) {
        a("setTag", e, t)
    }
    function v(e) {
        a("setUser", e)
    }
    function g(e) {
        a("withScope", e)
    }
    function y(e, t) {
        return a("startTransaction", Object(r.a)({}, e), t)
    }
}
, function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
        return r
    });
    var i, r = {}, o = (n.r(r),
    n.d(r, "FunctionToString", function() {
        return o
    }),
    n.d(r, "InboundFilters", function() {
        return h
    }),
    a.prototype.setupOnce = function() {
        i = Function.prototype.toString,
        Function.prototype.toString = function() {
            for (var e = [], t = 0; t < arguments.length; t++)
                e[t] = arguments[t];
            var n = this.__sentry_original__ || this;
            return i.apply(n, e)
        }
    }
    ,
    a.id = "FunctionToString",
    a);
    function a() {
        this.name = a.id
    }
    var s = n(0)
      , c = n(36)
      , u = n(6)
      , l = n(12)
      , d = n(3)
      , f = n(23)
      , p = [/^Script error\.?$/, /^Javascript error: Script error\.? on line 0$/]
      , h = (m.prototype.setupOnce = function() {
        Object(c.b)(function(e) {
            var t = Object(u.b)();
            if (t) {
                var n = t.getIntegration(m);
                if (n) {
                    t = t.getClient(),
                    t = t ? t.getOptions() : {},
                    t = n._mergeOptions(t);
                    if (n._shouldDropEvent(e, t))
                        return null
                }
            }
            return e
        })
    }
    ,
    m.prototype._shouldDropEvent = function(e, t) {
        return this._isSentryError(e, t) ? (l.a.warn("Event dropped due to being internal Sentry Error.\nEvent: " + Object(d.d)(e)),
        !0) : this._isIgnoredError(e, t) ? (l.a.warn("Event dropped due to being matched by `ignoreErrors` option.\nEvent: " + Object(d.d)(e)),
        !0) : this._isDeniedUrl(e, t) ? (l.a.warn("Event dropped due to being matched by `denyUrls` option.\nEvent: " + Object(d.d)(e) + ".\nUrl: " + this._getEventFilterUrl(e)),
        !0) : !this._isAllowedUrl(e, t) && (l.a.warn("Event dropped due to not being matched by `allowUrls` option.\nEvent: " + Object(d.d)(e) + ".\nUrl: " + this._getEventFilterUrl(e)),
        !0)
    }
    ,
    m.prototype._isSentryError = function(e, t) {
        if (!t.ignoreInternal)
            return !1;
        try {
            return e && e.exception && e.exception.values && e.exception.values[0] && "SentryError" === e.exception.values[0].type || !1
        } catch (e) {
            return !1
        }
    }
    ,
    m.prototype._isIgnoredError = function(e, n) {
        return !(!n.ignoreErrors || !n.ignoreErrors.length) && this._getPossibleEventMessages(e).some(function(t) {
            return n.ignoreErrors.some(function(e) {
                return Object(f.a)(t, e)
            })
        })
    }
    ,
    m.prototype._isDeniedUrl = function(e, t) {
        var n;
        return !(!t.denyUrls || !t.denyUrls.length || !(n = this._getEventFilterUrl(e))) && t.denyUrls.some(function(e) {
            return Object(f.a)(n, e)
        })
    }
    ,
    m.prototype._isAllowedUrl = function(e, t) {
        var n;
        return !t.allowUrls || !t.allowUrls.length || !(n = this._getEventFilterUrl(e)) || t.allowUrls.some(function(e) {
            return Object(f.a)(n, e)
        })
    }
    ,
    m.prototype._mergeOptions = function(e) {
        return void 0 === e && (e = {}),
        {
            allowUrls: Object(s.e)(this._options.whitelistUrls || [], this._options.allowUrls || [], e.whitelistUrls || [], e.allowUrls || []),
            denyUrls: Object(s.e)(this._options.blacklistUrls || [], this._options.denyUrls || [], e.blacklistUrls || [], e.denyUrls || []),
            ignoreErrors: Object(s.e)(this._options.ignoreErrors || [], e.ignoreErrors || [], p),
            ignoreInternal: void 0 === this._options.ignoreInternal || this._options.ignoreInternal
        }
    }
    ,
    m.prototype._getPossibleEventMessages = function(t) {
        if (t.message)
            return [t.message];
        if (t.exception)
            try {
                var e = t.exception.values && t.exception.values[0] || {}
                  , n = e.type
                  , i = void 0 === n ? "" : n
                  , r = e.value
                  , o = void 0 === r ? "" : r;
                return ["" + o, i + ": " + o]
            } catch (e) {
                l.a.error("Cannot extract message for event " + Object(d.d)(t))
            }
        return []
    }
    ,
    m.prototype._getEventFilterUrl = function(t) {
        try {
            var e, n;
            return t.stacktrace ? (e = t.stacktrace.frames) && e[e.length - 1].filename || null : t.exception && (n = t.exception.values && t.exception.values[0].stacktrace && t.exception.values[0].stacktrace.frames) && n[n.length - 1].filename || null
        } catch (e) {
            return l.a.error("Cannot extract url for event " + Object(d.d)(t)),
            null
        }
    }
    ,
    m.id = "InboundFilters",
    m);
    function m(e) {
        this._options = e = void 0 === e ? {} : e,
        this.name = m.id
    }
}
, function(e, t, n) {
    "use strict";
    n.d(t, "b", function() {
        return u
    }),
    n.d(t, "c", function() {
        return l
    }),
    n.d(t, "a", function() {
        return d
    });
    var o = n(0)
      , a = n(9)
      , i = n(50)
      , s = n(3)
      , r = n(12)
      , c = 0;
    function u() {
        return 0 < c
    }
    function l(t, i, r) {
        if (void 0 === i && (i = {}),
        "function" != typeof t)
            return t;
        try {
            if (t.__sentry__)
                return t;
            if (t.__sentry_wrapped__)
                return t.__sentry_wrapped__
        } catch (e) {
            return t
        }
        function e() {
            var n = Array.prototype.slice.call(arguments);
            try {
                r && "function" == typeof r && r.apply(this, arguments);
                var e = n.map(function(e) {
                    return l(e, i)
                });
                return t.handleEvent ? t.handleEvent.apply(this, e) : t.apply(this, e)
            } catch (t) {
                throw c += 1,
                setTimeout(function() {
                    --c
                }),
                Object(a.m)(function(e) {
                    e.addEventProcessor(function(e) {
                        e = Object(o.a)({}, e);
                        return i.mechanism && (Object(s.b)(e, void 0, void 0),
                        Object(s.a)(e, i.mechanism)),
                        e.extra = Object(o.a)(Object(o.a)({}, e.extra), {
                            arguments: n
                        }),
                        e
                    }),
                    Object(a.c)(t)
                }),
                t
            }
        }
        try {
            for (var n in t)
                Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
        } catch (e) {}
        t.prototype = t.prototype || {},
        e.prototype = t.prototype,
        Object.defineProperty(t, "__sentry_wrapped__", {
            enumerable: !1,
            value: e
        }),
        Object.defineProperties(e, {
            __sentry__: {
                enumerable: !1,
                value: !0
            },
            __sentry_original__: {
                enumerable: !1,
                value: t
            }
        });
        try {
            Object.getOwnPropertyDescriptor(e, "name").configurable && Object.defineProperty(e, "name", {
                get: function() {
                    return t.name
                }
            })
        } catch (e) {}
        return e
    }
    function d(e) {
        var t;
        (e = void 0 === e ? {} : e).eventId ? e.dsn ? ((t = document.createElement("script")).async = !0,
        t.src = new i.a(e.dsn).getReportDialogEndpoint(e),
        e.onLoad && (t.onload = e.onLoad),
        (document.head || document.body).appendChild(t)) : r.a.error("Missing dsn option in showReportDialog call") : r.a.error("Missing eventId option in showReportDialog call")
    }
}
, function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
        return s
    });
    var i = n(3)
      , r = Object(i.e)()
      , o = "Sentry Logger "
      , t = (a.prototype.disable = function() {
        this._enabled = !1
    }
    ,
    a.prototype.enable = function() {
        this._enabled = !0
    }
    ,
    a.prototype.log = function() {
        for (var e = [], t = 0; t < arguments.length; t++)
            e[t] = arguments[t];
        this._enabled && Object(i.c)(function() {
            r.console.log(o + "[Log]: " + e.join(" "))
        })
    }
    ,
    a.prototype.warn = function() {
        for (var e = [], t = 0; t < arguments.length; t++)
            e[t] = arguments[t];
        this._enabled && Object(i.c)(function() {
            r.console.warn(o + "[Warn]: " + e.join(" "))
        })
    }
    ,
    a.prototype.error = function() {
        for (var e = [], t = 0; t < arguments.length; t++)
            e[t] = arguments[t];
        this._enabled && Object(i.c)(function() {
            r.console.error(o + "[Error]: " + e.join(" "))
        })
    }
    ,
    a);
    function a() {
        this._enabled = !1
    }
    r.__SENTRY__ = r.__SENTRY__ || {};
    var s = r.__SENTRY__.logger || (r.__SENTRY__.logger = new t)
}
, function(e, t, n) {
    "use strict";
    n.r(t),
    n.d(t, "LogLevel", function() {
        return i
    }),
    n.d(t, "SessionStatus", function() {
        return o.a
    }),
    n.d(t, "Severity", function() {
        return a.a
    }),
    n.d(t, "Status", function() {
        return s.a
    }),
    n.d(t, "TransactionSamplingMethod", function() {
        return r
    }),
    (t = i = i || {})[t.None = 0] = "None",
    t[t.Error = 1] = "Error",
    t[t.Debug = 2] = "Debug",
    t[t.Verbose = 3] = "Verbose";
    var i, r, o = n(78), a = n(32), s = n(58);
    (t = r = r || {}).Explicit = "explicitly_set",
    t.Sampler = "client_sampler",
    t.Rate = "client_rate",
    t.Inheritance = "inheritance"
}
, function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
        return o
    });
    var i, r = n(2), o = ((t = i = i || {}).PENDING = "PENDING",
    t.RESOLVED = "RESOLVED",
    t.REJECTED = "REJECTED",
    a.resolve = function(t) {
        return new a(function(e) {
            e(t)
        }
        )
    }
    ,
    a.reject = function(n) {
        return new a(function(e, t) {
            t(n)
        }
        )
    }
    ,
    a.all = function(e) {
        return new a(function(n, i) {
            var r, o;
            Array.isArray(e) ? 0 === e.length ? n([]) : (r = e.length,
            o = [],
            e.forEach(function(e, t) {
                a.resolve(e).then(function(e) {
                    o[t] = e,
                    0 == --r && n(o)
                }).then(null, i)
            })) : i(new TypeError("Promise.all requires an array as input."))
        }
        )
    }
    ,
    a.prototype.then = function(i, r) {
        var e = this;
        return new a(function(t, n) {
            e._attachHandler({
                done: !1,
                onfulfilled: function(e) {
                    if (i)
                        try {
                            t(i(e))
                        } catch (e) {
                            n(e)
                        }
                    else
                        t(e)
                },
                onrejected: function(e) {
                    if (r)
                        try {
                            t(r(e))
                        } catch (e) {
                            n(e)
                        }
                    else
                        n(e)
                }
            })
        }
        )
    }
    ,
    a.prototype.catch = function(e) {
        return this.then(function(e) {
            return e
        }, e)
    }
    ,
    a.prototype.finally = function(r) {
        var o = this;
        return new a(function(e, t) {
            var n, i;
            o.then(function(e) {
                i = !1,
                n = e,
                r && r()
            }, function(e) {
                i = !0,
                n = e,
                r && r()
            }).then(function() {
                (i ? t : e)(n)
            })
        }
        )
    }
    ,
    a.prototype.toString = function() {
        return "[object SyncPromise]"
    }
    ,
    a);
    function a(e) {
        var n = this;
        this._state = i.PENDING,
        this._handlers = [],
        this._resolve = function(e) {
            n._setResult(i.RESOLVED, e)
        }
        ,
        this._reject = function(e) {
            n._setResult(i.REJECTED, e)
        }
        ,
        this._setResult = function(e, t) {
            n._state === i.PENDING && (Object(r.m)(t) ? t.then(n._resolve, n._reject) : (n._state = e,
            n._value = t,
            n._executeHandlers()))
        }
        ,
        this._attachHandler = function(e) {
            n._handlers = n._handlers.concat(e),
            n._executeHandlers()
        }
        ,
        this._executeHandlers = function() {
            var e;
            n._state !== i.PENDING && (e = n._handlers.slice(),
            n._handlers = [],
            e.forEach(function(e) {
                e.done || (n._state === i.RESOLVED && e.onfulfilled && e.onfulfilled(n._value),
                n._state === i.REJECTED && e.onrejected && e.onrejected(n._value),
                e.done = !0)
            }))
        }
        ;
        try {
            e(this._resolve, this._reject)
        } catch (e) {
            this._reject(e)
        }
    }
}
, function(e, t, n) {
    "use strict";
    n.r(t),
    n.d(t, "Severity", function() {
        return i.a
    }),
    n.d(t, "Status", function() {
        return r.a
    }),
    n.d(t, "addGlobalEventProcessor", function() {
        return o.b
    }),
    n.d(t, "addBreadcrumb", function() {
        return a.a
    }),
    n.d(t, "captureException", function() {
        return a.c
    }),
    n.d(t, "captureEvent", function() {
        return a.b
    }),
    n.d(t, "captureMessage", function() {
        return a.d
    }),
    n.d(t, "configureScope", function() {
        return a.e
    }),
    n.d(t, "getHubFromCarrier", function() {
        return s.c
    }),
    n.d(t, "getCurrentHub", function() {
        return s.b
    }),
    n.d(t, "Hub", function() {
        return s.a
    }),
    n.d(t, "makeMain", function() {
        return s.d
    }),
    n.d(t, "Scope", function() {
        return o.a
    }),
    n.d(t, "startTransaction", function() {
        return a.l
    }),
    n.d(t, "setContext", function() {
        return a.f
    }),
    n.d(t, "setExtra", function() {
        return a.g
    }),
    n.d(t, "setExtras", function() {
        return a.h
    }),
    n.d(t, "setTag", function() {
        return a.i
    }),
    n.d(t, "setTags", function() {
        return a.j
    }),
    n.d(t, "setUser", function() {
        return a.k
    }),
    n.d(t, "withScope", function() {
        return a.m
    }),
    n.d(t, "BrowserClient", function() {
        return c.a
    }),
    n.d(t, "injectReportDialog", function() {
        return u.a
    }),
    n.d(t, "eventFromException", function() {
        return l.a
    }),
    n.d(t, "eventFromMessage", function() {
        return l.b
    }),
    n.d(t, "defaultIntegrations", function() {
        return d.b
    }),
    n.d(t, "forceLoad", function() {
        return d.d
    }),
    n.d(t, "init", function() {
        return d.e
    }),
    n.d(t, "lastEventId", function() {
        return d.f
    }),
    n.d(t, "onLoad", function() {
        return d.g
    }),
    n.d(t, "showReportDialog", function() {
        return d.h
    }),
    n.d(t, "flush", function() {
        return d.c
    }),
    n.d(t, "close", function() {
        return d.a
    }),
    n.d(t, "wrap", function() {
        return d.i
    }),
    n.d(t, "SDK_NAME", function() {
        return f.a
    }),
    n.d(t, "SDK_VERSION", function() {
        return f.b
    }),
    n.d(t, "Integrations", function() {
        return g
    }),
    n.d(t, "Transports", function() {
        return v
    });
    var t = n(0)
      , i = n(32)
      , r = n(58)
      , o = n(36)
      , a = n(9)
      , s = n(6)
      , c = n(43)
      , u = n(11)
      , l = n(22)
      , d = n(18)
      , f = n(26)
      , p = n(10)
      , h = n(3)
      , m = n(42)
      , v = n(49)
      , n = {}
      , h = Object(h.e)()
      , g = (h.Sentry && h.Sentry.Integrations && (n = h.Sentry.Integrations),
    Object(t.a)(Object(t.a)(Object(t.a)({}, n), p.a), m))
}
, function(e, n, t) {
    "use strict";
    !function(r) {
        var e = this && this.__awaiter || function(e, a, s, c) {
            return new (s = s || Promise)(function(n, t) {
                function i(e) {
                    try {
                        o(c.next(e))
                    } catch (e) {
                        t(e)
                    }
                }
                function r(e) {
                    try {
                        o(c.throw(e))
                    } catch (e) {
                        t(e)
                    }
                }
                function o(e) {
                    var t;
                    e.done ? n(e.value) : ((t = e.value)instanceof s ? t : new s(function(e) {
                        e(t)
                    }
                    )).then(i, r)
                }
                o((c = c.apply(e, a || [])).next())
            }
            )
        }
          , o = this && this.__generator || function(i, r) {
            var o, a, s, c = {
                label: 0,
                sent: function() {
                    if (1 & s[0])
                        throw s[1];
                    return s[1]
                },
                trys: [],
                ops: []
            }, e = {
                next: t(0),
                throw: t(1),
                return: t(2)
            };
            return "function" == typeof Symbol && (e[Symbol.iterator] = function() {
                return this
            }
            ),
            e;
            function t(n) {
                return function(e) {
                    var t = [n, e];
                    if (o)
                        throw new TypeError("Generator is already executing.");
                    for (; c; )
                        try {
                            if (o = 1,
                            a && (s = 2 & t[0] ? a.return : t[0] ? a.throw || ((s = a.return) && s.call(a),
                            0) : a.next) && !(s = s.call(a, t[1])).done)
                                return s;
                            switch (a = 0,
                            (t = s ? [2 & t[0], s.value] : t)[0]) {
                            case 0:
                            case 1:
                                s = t;
                                break;
                            case 4:
                                return c.label++,
                                {
                                    value: t[1],
                                    done: !1
                                };
                            case 5:
                                c.label++,
                                a = t[1],
                                t = [0];
                                continue;
                            case 7:
                                t = c.ops.pop(),
                                c.trys.pop();
                                continue;
                            default:
                                if (!(s = 0 < (s = c.trys).length && s[s.length - 1]) && (6 === t[0] || 2 === t[0])) {
                                    c = 0;
                                    continue
                                }
                                if (3 === t[0] && (!s || t[1] > s[0] && t[1] < s[3]))
                                    c.label = t[1];
                                else if (6 === t[0] && c.label < s[1])
                                    c.label = s[1],
                                    s = t;
                                else {
                                    if (!(s && c.label < s[2])) {
                                        s[2] && c.ops.pop(),
                                        c.trys.pop();
                                        continue
                                    }
                                    c.label = s[2],
                                    c.ops.push(t)
                                }
                            }
                            t = r.call(i, c)
                        } catch (e) {
                            t = [6, e],
                            a = 0
                        } finally {
                            o = s = 0
                        }
                    if (5 & t[0])
                        throw t[1];
                    return {
                        value: t[0] ? t[1] : void 0,
                        done: !0
                    }
                }
            }
        }
          , t = (Object.defineProperty(n, "__esModule", {
            value: !0
        }),
        n.UserModel = void 0,
        Object.defineProperty(a, "userType", {
            get: function() {
                return a.isPremium() ? "premium" : a.isUser() ? "user" : "guest"
            },
            enumerable: !1,
            configurable: !0
        }),
        a.isTeamManaged = function() {
            var e = window.userModel;
            return e && null != e.team_role && "owner" != e.team_role
        }
        ,
        a.hasSubscription = function() {
            var e = window.userModel;
            return "object" == typeof e && null != e && null != e.current_subscription
        }
        ,
        a.prototype.login = function(n) {
            var i = "//" + this.domain + "/" + this.loginUrl;
            return new Promise(function(t, e) {
                r.post(i, n, function(e) {
                    window.ilovepdfConfig && (window.ilovepdfConfig.fileLimits = e.user.limits,
                    window.ilovepdfConfig.userToken = e.token),
                    t(e)
                }).fail(e)
            }
            )
        }
        ,
        a.prototype.register = function(n) {
            var i = "//" + this.domain + "/" + this.registerUrl;
            return new Promise(function(t, e) {
                r.post(i, n, function(e) {
                    t(e)
                }).fail(e)
            }
            )
        }
        ,
        a.prototype.sendResetPasswordEmail = function(n) {
            var i = "//" + this.domain + "/" + this.sendResetPasswordEmailUrl;
            return new Promise(function(t, e) {
                r.post(i, n, function(e) {
                    t(e)
                }).fail(e)
            }
            )
        }
        ,
        a.isLoggedIn = function() {
            return !!window.userModel
        }
        ,
        a.get = function() {
            return window.userModel
        }
        ,
        a.set = function(e) {
            window.userModel = e
        }
        ,
        a.logout = function() {
            document.location.href = r(".logout").attr("href")
        }
        ,
        a.isUser = function() {
            var e = a.get();
            return "object" == typeof e && null != e
        }
        ,
        a.isPremium = function() {
            return a.isRealPremium()
        }
        ,
        a.isPremiumTemp = function() {
            return window.ilovepdfConfig && "premium" == window.ilovepdfConfig.levelTemp
        }
        ,
        a.isTempPremium = function() {
            return a.isPremiumTemp()
        }
        ,
        a.isRealPremium = function() {
            var e = window.userModel;
            return "object" == typeof e && null != e && e.premium
        }
        ,
        a.canDoTrial = function() {
            var e = window.userModel;
            return "object" == typeof e && null != e ? e.can_trial : !!window.uct
        }
        ,
        a.refresh = function(r) {
            return void 0 === r && (r = null),
            e(this, void 0, void 0, function() {
                var t, n, i;
                return o(this, function(e) {
                    switch (e.label) {
                    case 0:
                        return [4, fetch(r ? "/user/info/" + r : "/user/info")];
                    case 1:
                        return t = e.sent(),
                        i = (n = JSON).parse,
                        [4, t.json()];
                    case 2:
                        return t = i.apply(n, [e.sent()]),
                        a.set(t.user),
                        [2]
                    }
                })
            })
        }
        ,
        a.removeAds = function() {
            var e = document.getElementsByClassName("add");
            e && Array.from(e).forEach(function(e) {
                e.remove()
            })
        }
        ,
        a.updateUser = function(e) {
            window.userModel = e,
            window.ilovepdfConfig && (window.ilovepdfConfig.user = e),
            1 == a.isRealPremium() && a.removeAds()
        }
        ,
        a.serviceToken = function() {
            var e = window.userModel;
            return e ? e.token : null
        }
        ,
        a);
        function a(e) {
            void 0 === e && (e = {}),
            this.loginUrl = "auth",
            this.registerUrl = "signup",
            this.sendResetPasswordEmailUrl = "login/forgetpassword",
            Object.assign(this, e);
            e = "en-US" == window.lang ? "" : "/" + window.lang;
            this.domain = window.location.hostname + e
        }
        n.UserModel = t
    }
    .call(this, t(1))
}
, function(e, r, o) {
    "use strict";
    !function(i) {
        Object.defineProperty(r, "__esModule", {
            value: !0
        }),
        r.Tools = void 0;
        var t = o(7);
        function n() {}
        n.isRtlPage = function() {
            var e = null != document.dir ? document.dir : document.getElementsByTagName("html")[0].getAttribute("dir");
            return "rtl" == e
        }
        ,
        n.sleep = function(n) {
            return new Promise(function(e, t) {
                setTimeout(e, n)
            }
            )
        }
        ,
        n.bytesToSize = function(e) {
            var t;
            return 0 == e ? "0 Byte" : (t = Math.floor(Math.log(e) / Math.log(1024)),
            (e / Math.pow(1024, t)).toFixed(2) + " " + ["Bytes", "KB", "MB", "GB", "TB"][t])
        }
        ,
        n.mbytesToSize = function(e) {
            return n.bytesToSize(1e6 * e)
        }
        ,
        n.convertPointsToPixels = function(e) {
            return e * (1 + 1 / 3)
        }
        ,
        n.strCapitalize = function(e) {
            return e.charAt(0).toUpperCase() + e.slice(1)
        }
        ,
        n.isRTL = function() {
            return i("body").hasClass("rtl")
        }
        ,
        n.isTextRTL = function(e) {
            return new RegExp("^[^A-Za-zÀ-ÖØ-öø-ʸ̀-֐ࠀ-῿Ⰰ-﬜﷾-﹯﻽-￿]*[֑-߿יִ-﷽ﹰ-ﻼ]").test(e)
        }
        ,
        Object.defineProperty(n, "textDirection", {
            get: function() {
                return n.isRTL() ? "right" : "left"
            },
            enumerable: !1,
            configurable: !0
        }),
        n.getClosestNumber = function(e, t) {
            for (var n = Math.abs(t[0] - e), i = 0, r = 1; r < t.length; r++) {
                var o = Math.abs(t[r] - e);
                o < n && (i = r,
                n = o)
            }
            return t[i]
        }
        ,
        n.modalView = function(e) {
            var t = '<div class="modal fade" id="' + e.id + '" aria-labelledby="' + e.id + 'Modal" tabindex="-1" role="dialog" aria-hidden="true"><div class="modal-dialog ' + (e.size ? "modal-" + e.size : "") + '" role="document"><div class="modal-content">'
              , n = '<div class="dialog__close" data-dismiss="modal" aria-label="Close"></div>';
            return "title"in e && (t = t + ('<div class="dialog__header"><h4 class="dialog__title">' + e.title) + "</h4>" + n + "</div>"),
            "content"in e ? t = t + ('<div class="dialog__body">' + (e.title ? "" : n) + e.content) + "</div>" : t += '<div class="dialog__body"></div>',
            "btn"in e && (t = t + ('<div class="dialog__footer"><button type="button" class="btn" data-dismiss="modal">' + e.btn) + "</button></div>"),
            t += "</div></div></div>"
        }
        ,
        n.modalViewOk = function(e) {
            return e.btn = t.Lang.t("Ok"),
            n.modalView(e)
        }
        ,
        n.dialogViewOk = function(e) {
            return e.btn = t.Lang.t("Ok"),
            n.dialogView(e)
        }
        ,
        n.dialogView = function(e) {
            var t = e.title
              , n = e.content
              , i = e.btn
              , r = "<div>"
              , o = '<div class="dialog__close"></div>';
            return "title"in e && (r = r + '<div class="dialog__header"><h4 class="dialog__title">' + t + "</h4>" + o + "</div>"),
            "content"in e ? r = r + '<div class="dialog__body">' + (t ? "" : o) + n + "</div>" : r += '<div class="dialog__body"></div>',
            "btn"in e && (r = r + '<div class="dialog__footer"><button data-action=\'close\' type="button" class="btn">' + i + "</button></div>"),
            r += "</div>"
        }
        ,
        n.setInputCursorAtTheEnd = function(e) {
            var t = e.val().length;
            e.focus(),
            e[0].setSelectionRange(t, t)
        }
        ,
        n.svgClose = function() {
            return n.svgRemove(12, 12)
        }
        ,
        n.svgRotate = function(e, t) {
            return '<svg xmlns="http://www.w3.org/2000/svg" width="' + (e = void 0 === e ? 14 : e) + '" height="' + (t = void 0 === t ? 16 : t) + '" viewBox="0 0 14 16"><path d="M11.328 6.364l1.24-1.2c.79.98 1.283 2.113 1.433 3.288h-1.775c-.123-.735-.43-1.454-.896-2.088zm.896 3.778H14c-.15 1.175-.633 2.308-1.424 3.288l-1.24-1.2c.457-.634.765-1.344.888-2.088zm-.888 4.497C10.318 15.4 9.13 15.856 7.9 16v-1.716a5.31 5.31 0 0 0 2.162-.871l1.266 1.226zM6.152 2.595V0l4 3.846-4 3.76V4.302c-2.496.406-4.394 2.485-4.394 4.995s1.898 4.59 4.394 4.995V16C2.68 15.586 0 12.746 0 9.297s2.68-6.29 6.152-6.703z" fill="#47474F" fill-rule="evenodd"/></svg>'
        }
        ,
        n.svgRemove = function(e, t) {
            return '<svg xmlns="http://www.w3.org/2000/svg" width="' + (e = void 0 === e ? 12 : e) + '" height="' + (t = void 0 === t ? 12 : t) + '" viewBox="0 0 12 12"><polygon fill="#47474F" fill-rule="evenodd" points="12 1.208 10.79 0 6 4.792 1.21 0 0 1.208 4.79 6 0 10.792 1.21 12 6 7.208 10.79 12 12 10.792 7.21 6"/></svg>'
        }
        ,
        n.svgArrowRight = function(e, t) {
            return '<svg xmlns="http://www.w3.org/2000/svg" width="' + (e = void 0 === e ? 12 : e) + '" height="' + (t = void 0 === t ? 12 : t) + '" viewBox="0 0 448 512"><path d="M313.94 216H12c-6.627 0-12 5.373-12 12v56c0 6.627 5.373 12 12 12h301.94v46.06c0 21.382 25.85 32.1 40.97 16.97l86.06-86.06c9.373-9.373 9.373-24.57 0-33.94l-86.06-86.06c-15.12-15.12-40.97-4.41-40.97 16.97V216z"/></svg>'
        }
        ,
        n.svgHome = function() {
            return '<svg xmlns="http://www.w3.org/2000/svg" width="26" height="21"><path d="M22.028 12.67v6.468a1.08 1.08 0 0 1-1.083 1.083h-5.236c-.298 0-.542-.244-.542-.542v-5.056c0-.298-.244-.542-.542-.542h-3.25c-.298 0-.542.244-.542.542v5.056c0 .298-.244.542-.542.542H5.056a1.08 1.08 0 0 1-1.083-1.083V12.67a.54.54 0 0 1 .199-.42l8.486-6.987a.55.55 0 0 1 .691 0l8.486 6.987c.122.104.194.257.194.42zm3.774-2.75l-3.774-3.1V.56c0-.298-.244-.542-.542-.542h-2.528c-.298 0-.542.244-.542.542v3.277L14.377.5c-.8-.66-1.955-.66-2.753 0L.2 9.922c-.23.2-.262.533-.072.763l1.15 1.4c.2.23.533.262.763.072l10.617-8.743a.55.55 0 0 1 .691 0l10.617 8.743c.23.2.573.158.763-.072l1.15-1.4c.2-.235.153-.573-.077-.763z"/></svg>'
        }
        ,
        n.randomId = function() {
            for (var e = ""; e.length < 8; )
                e += Math.random().toString(36).replace(/[^a-z]+/g, "");
            return e.slice(0, 8)
        }
        ,
        n.uuid = function() {
            return Date.now() + "-" + Math.floor(Math.random() * Date.now() / 100)
        }
        ,
        n.actionId = function() {
            return window.aid = window.aid || n.uuid(),
            window.aid
        }
        ,
        n.colorpicker = function(t) {
            var e = null
              , e = 1 == i(t).data("limit") ? {
                preferredFormat: "hex",
                showPaletteOnly: !0,
                color: "blanchedalmond",
                palette: [["#000", "#444", "#666", "#999", "#ccc", "#eee", "#f3f3f3", "#fff"], ["#f00", "#f90", "#ff0", "#0f0", "#0ff", "#00f", "#90f", "#f0f"], ["#f4cccc", "#fce5cd", "#fff2cc", "#d9ead3", "#d0e0e3", "#cfe2f3", "#d9d2e9", "#ead1dc"], ["#ea9999", "#f9cb9c", "#ffe599", "#b6d7a8", "#a2c4c9", "#9fc5e8", "#b4a7d6", "#d5a6bd"], ["#e06666", "#f6b26b", "#ffd966", "#93c47d", "#76a5af", "#6fa8dc", "#8e7cc3", "#c27ba0"], ["#c00", "#e69138", "#f1c232", "#6aa84f", "#45818e", "#3d85c6", "#674ea7", "#a64d79"], ["#900", "#b45f06", "#bf9000", "#38761d", "#134f5c", "#0b5394", "#351c75", "#741b47"], ["#600", "#783f04", "#7f6000", "#274e13", "#0c343d", "#073763", "#20124d", "#4c1130"]]
            } : {
                allowEmpty: !0,
                showInitial: !0,
                preferredFormat: "hex"
            };
            1 == i(t).data("input") && (e.showInput = !0),
            1 == i(t).data("empty") && (e.allowEmpty = !0,
            1 == i(t).data("limit") && e.palette.push(["transparent"]),
            e.change = function(e) {
                e = 0 === e._a ? "transparent" : e.toHexString(),
                i(t).val(e)
            }
            ),
            1 == i(t).data("inline") && (e.flat = !0),
            1 == i(t).data("aplha") && (e.showAlpha = !0),
            e.clickoutFiresChange = !0;
            try {
                i(t).spectrum(e)
            } catch (t) {}
        }
        ,
        n.isElementInView = function(e, t) {
            return void 0 === t && (t = !1),
            0 != e.length && (0 == t ? e.offset().top < i(window).height() && 60 < e.offset().top + e.height() : e.offset().top + e.height() < i(window).height() && 60 < e.offset().top)
        }
        ,
        n.keepInNumericBounds = function(e, t, n) {
            return null !== e && n < e && (n = e),
            n = null !== t && t < n ? t : n
        }
        ,
        n.scrollControl = function(t, n, i) {
            var r = 0;
            t.scroll(function() {
                var e = t.scrollTop();
                r < e && "function" == typeof i && i(),
                e < r && "function" == typeof n && n(),
                r = e
            })
        }
        ,
        n.loadingFromPreviousStart = function() {
            var e = i(".fromPrevious");
            0 <= e.length || (e = i('<div class="wait fromPrevious">' + t.Lang.t("previousTaskLoading") + "</div>"),
            i(".main").append(e)),
            e.css("display", "flex")
        }
        ,
        n.loadingFromPreviousFail = function() {
            var e = "<div><p>" + t.Lang.t("previousFail") + '</p><p></p><p><button class="btn" onclick="window.history.go(-1); return false;">' + t.Lang.t("previousFailBack") + '</button> <button class="btn btn--red" id="closePrevious">' + t.Lang.t("previousFailContinue") + "</button></p></div>";
            i(".fromPrevious").html(e).css("background-image", "none")
        }
        ,
        n.loadingFromPreviousEnd = function() {
            i(".fromPrevious").remove()
        }
        ,
        n.serializeFormData = function(e) {
            var t = {};
            try {
                for (var n = 0, i = e.entries(); n < i.length; n++) {
                    var r = i[n]
                      , o = r[0]
                      , a = r[1];
                    t[o] = a
                }
            } catch (e) {}
            return t = {
                info: "form data serialize failed"
            }
        }
        ,
        n.parseTemplate = function(n, e, t) {
            return void 0 === t && (t = "simple"),
            null != (e = void 0 === e ? null : e) && ("simple" == t && i.each(e, function(e, t) {
                n = n.replace("{" + e + "}", t)
            }),
            "dollar" == t) && i.each(e, function(e, t) {
                n = n.replace("${" + e + "}", t)
            }),
            n
        }
        ,
        n.isEmail = function(e) {
            return !!/^\w+([\+\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w+)+$/.test(e)
        }
        ,
        n.getBrowserTimezone = function() {
            var e, t = "UTC";
            return t = window.Intl && window.Intl.DateTimeFormat() && (e = window.Intl.DateTimeFormat().resolvedOptions().timeZone) ? e : t
        }
        ,
        r.Tools = n
    }
    .call(this, o(1))
}
, function(e, t, n) {
    "use strict";
    n.d(t, "b", function() {
        return h
    }),
    n.d(t, "e", function() {
        return u
    }),
    n.d(t, "h", function() {
        return m
    }),
    n.d(t, "f", function() {
        return v
    }),
    n.d(t, "d", function() {
        return g
    }),
    n.d(t, "g", function() {
        return y
    }),
    n.d(t, "c", function() {
        return _
    }),
    n.d(t, "a", function() {
        return b
    }),
    n.d(t, "i", function() {
        return w
    });
    var t = n(10)
      , l = n(56)
      , d = n(6)
      , f = n(3)
      , i = n(14)
      , p = n(43)
      , r = n(11)
      , o = n(52)
      , a = n(51)
      , s = n(53)
      , c = n(54)
      , n = n(55)
      , h = [new t.a.InboundFilters, new t.a.FunctionToString, new o.a, new a.a, new s.a, new c.a, new n.a];
    function u(e) {
        var t;
        if (void 0 === (e = void 0 === e ? {} : e).defaultIntegrations && (e.defaultIntegrations = h),
        void 0 === e.release && (t = Object(f.e)()).SENTRY_RELEASE && t.SENTRY_RELEASE.id && (e.release = t.SENTRY_RELEASE.id),
        void 0 === e.autoSessionTracking && (e.autoSessionTracking = !1),
        Object(l.a)(p.a, e),
        e.autoSessionTracking) {
            function n() {
                s && a && o.endSession()
            }
            function i() {
                a = !0,
                n(),
                r.removeEventListener("load", i)
            }
            var r = Object(f.e)()
              , o = Object(d.b)()
              , a = "complete" === document.readyState
              , s = !1;
            o.startSession(),
            a || r.addEventListener("load", i);
            try {
                var c = new PerformanceObserver(function(e, t) {
                    e.getEntries().forEach(function(e) {
                        "first-contentful-paint" === e.name && e.startTime < u && (t.disconnect(),
                        s = !0,
                        n())
                    })
                }
                )
                  , u = "hidden" === document.visibilityState ? 0 : 1 / 0;
                document.addEventListener("visibilitychange", function(e) {
                    u = Math.min(u, e.timeStamp)
                }, {
                    once: !0
                }),
                c.observe({
                    type: "paint",
                    buffered: !0
                })
            } catch (e) {
                s = !0,
                n()
            }
        }
    }
    function m(e) {
        (e = void 0 === e ? {} : e).eventId || (e.eventId = Object(d.b)().lastEventId());
        var t = Object(d.b)().getClient();
        t && t.showReportDialog(e)
    }
    function v() {
        return Object(d.b)().lastEventId()
    }
    function g() {}
    function y(e) {
        e()
    }
    function _(e) {
        var t = Object(d.b)().getClient();
        return t ? t.flush(e) : i.a.reject(!1)
    }
    function b(e) {
        var t = Object(d.b)().getClient();
        return t ? t.close(e) : i.a.reject(!1)
    }
    function w(e) {
        return Object(r.c)(e)()
    }
}
, function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
        return r
    });
    var i = "<anonymous>";
    function r(e) {
        try {
            return e && "function" == typeof e ? e.name || i : i
        } catch (e) {
            return i
        }
    }
}
, function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
        return o
    });
    var t = n(0)
      , i = Object.setPrototypeOf || ({
        __proto__: []
    }instanceof Array ? function(e, t) {
        return e.__proto__ = t,
        e
    }
    : function(e, t) {
        for (var n in t)
            e.hasOwnProperty(n) || (e[n] = t[n]);
        return e
    }
    );
    r = Error,
    Object(t.b)(a, r);
    var r, o = a;
    function a(e) {
        var t = this.constructor
          , n = r.call(this, e) || this;
        return n.message = e,
        n.name = t.prototype.constructor.name,
        i(n, t.prototype),
        n
    }
}
, function(e, t, n) {
    "use strict";
    var i = this && this.__createBinding || (Object.create ? function(e, t, n, i) {
        void 0 === i && (i = n),
        Object.defineProperty(e, i, {
            enumerable: !0,
            get: function() {
                return t[n]
            }
        })
    }
    : function(e, t, n, i) {
        e[i = void 0 === i ? n : i] = t[n]
    }
    )
      , r = this && this.__setModuleDefault || (Object.create ? function(e, t) {
        Object.defineProperty(e, "default", {
            enumerable: !0,
            value: t
        })
    }
    : function(e, t) {
        e.default = t
    }
    )
      , o = this && this.__importStar || function(e) {
        if (e && e.__esModule)
            return e;
        var t = {};
        if (null != e)
            for (var n in e)
                "default" !== n && Object.hasOwnProperty.call(e, n) && i(t, e, n);
        return r(t, e),
        t
    }
      , a = this && this.__awaiter || function(e, a, s, c) {
        return new (s = s || Promise)(function(n, t) {
            function i(e) {
                try {
                    o(c.next(e))
                } catch (e) {
                    t(e)
                }
            }
            function r(e) {
                try {
                    o(c.throw(e))
                } catch (e) {
                    t(e)
                }
            }
            function o(e) {
                var t;
                e.done ? n(e.value) : ((t = e.value)instanceof s ? t : new s(function(e) {
                    e(t)
                }
                )).then(i, r)
            }
            o((c = c.apply(e, a || [])).next())
        }
        )
    }
      , s = this && this.__generator || function(i, r) {
        var o, a, s, c = {
            label: 0,
            sent: function() {
                if (1 & s[0])
                    throw s[1];
                return s[1]
            },
            trys: [],
            ops: []
        }, e = {
            next: t(0),
            throw: t(1),
            return: t(2)
        };
        return "function" == typeof Symbol && (e[Symbol.iterator] = function() {
            return this
        }
        ),
        e;
        function t(n) {
            return function(e) {
                var t = [n, e];
                if (o)
                    throw new TypeError("Generator is already executing.");
                for (; c; )
                    try {
                        if (o = 1,
                        a && (s = 2 & t[0] ? a.return : t[0] ? a.throw || ((s = a.return) && s.call(a),
                        0) : a.next) && !(s = s.call(a, t[1])).done)
                            return s;
                        switch (a = 0,
                        (t = s ? [2 & t[0], s.value] : t)[0]) {
                        case 0:
                        case 1:
                            s = t;
                            break;
                        case 4:
                            return c.label++,
                            {
                                value: t[1],
                                done: !1
                            };
                        case 5:
                            c.label++,
                            a = t[1],
                            t = [0];
                            continue;
                        case 7:
                            t = c.ops.pop(),
                            c.trys.pop();
                            continue;
                        default:
                            if (!(s = 0 < (s = c.trys).length && s[s.length - 1]) && (6 === t[0] || 2 === t[0])) {
                                c = 0;
                                continue
                            }
                            if (3 === t[0] && (!s || t[1] > s[0] && t[1] < s[3]))
                                c.label = t[1];
                            else if (6 === t[0] && c.label < s[1])
                                c.label = s[1],
                                s = t;
                            else {
                                if (!(s && c.label < s[2])) {
                                    s[2] && c.ops.pop(),
                                    c.trys.pop();
                                    continue
                                }
                                c.label = s[2],
                                c.ops.push(t)
                            }
                        }
                        t = r.call(i, c)
                    } catch (e) {
                        t = [6, e],
                        a = 0
                    } finally {
                        o = s = 0
                    }
                if (5 & t[0])
                    throw t[1];
                return {
                    value: t[0] ? t[1] : void 0,
                    done: !0
                }
            }
        }
    }
      , c = (Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.StateBase = void 0,
    n(7))
      , u = n(25)
      , l = n(8)
      , d = n(34)
      , f = o(n(15));
    function p() {
        var r = this;
        this.wasDomReadyExecutedBefore = !1,
        this.loadingElem = null,
        this.backdropElem = null,
        this.runTooltip = !0,
        this.showBackdrop = function(e, t, n) {
            var i = r.appendBackdropElement()
              , e = (i.innerHTML = "",
            e.classList.add("ilove-backdrop__content"),
            i.appendChild(e),
            i.querySelector(".ilove-backdrop__title"))
              , t = (e.querySelector(".ilove-backdrop__title__text").innerHTML = null != t ? t : "",
            i.querySelector(".ilove-backdrop__subtitle"));
            t.querySelector(".ilove-backdrop__subtitle__text").innerHTML = null != n ? n : "",
            i.classList.add("ilove-backdrop--visible"),
            r.domRoot.style.overflow = "hidden",
            e.addEventListener("click", function() {
                r._backdrop_click_callback1 && r._backdrop_click_callback1()
            }),
            t.addEventListener("click", function() {
                r._backdrop_click_callback2 && r._backdrop_click_callback2()
            })
        }
        ,
        this.setBackdropCallback = function(e, t) {
            r._backdrop_click_callback1 = e,
            r._backdrop_click_callback2 = t
        }
        ,
        this.clearBackdrop = function() {
            var e;
            null != (e = r.backdropElem) && e.classList.remove("ilove-backdrop--visible"),
            r.domRoot.style.overflow = "",
            r.setBackdropCallback(null, null)
        }
        ,
        this._onLayoutTemplateLoaded = function() {
            r.ctx._onDomReady(r.domRoot),
            r.dispatchEvent(new l.IloveEvent("unsetContentAbandonment")),
            !0 === r.runTooltip && d.Tooltip.init(),
            r.onDomReady(),
            r.wasDomReadyExecutedBefore = !0
        }
        ,
        this.showLoadingScreen = function() {
            r.appendLoadingElement().classList.add("wait--visible"),
            r.domRoot.style.overflow = "hidden"
        }
        ,
        this.clearLoadingScreen = function() {
            var e;
            null != (e = r.loadingElem) && e.classList.remove("wait--visible"),
            r.domRoot.style.overflow = ""
        }
        ,
        this.deleteLoadingElements = function() {
            r.domRoot.parentNode.querySelectorAll("state-wait").forEach(function(e) {
                return e.parentElement.removeChild(e)
            })
        }
        ,
        this.cleanup = function() {
            var e = r.loadingElem;
            e && e.parentElement && e.parentElement.removeChild(e)
        }
        ,
        this.goToPreviousStateButtonIsVisible = function() {
            var e = r.domStateRoot.querySelector(".dialog__back");
            return !!e && !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
        }
        ,
        this.t = function(e, t) {
            if (r._t) {
                if (e in r._t)
                    return c.Lang.tr(r._t[e], t);
                throw "Key '" + e + "' not found"
            }
            var n = r.domRoot.querySelector("[data-state='" + r.name + "'] .text-translations");
            if (!n)
                throw "Text translations for state '" + r.name + "' not found";
            if ("html" === n.dataset.format) {
                var i = n.querySelector("[data-key=" + e + "]");
                if (i)
                    return i = i.innerHTML,
                    c.Lang.tr(i, t);
                throw "Key '" + e + "' not found"
            }
            if (r._t = JSON.parse(n.textContent),
            "object" != typeof r._t)
                throw "Translation object not found";
            return r.t(e, t)
        }
        ,
        this.eventEmitter = new u.ILoveEventEmitter
    }
    p.prototype.render = function(e, t) {
        var n = this;
        void 0 === t && (t = {}),
        this.domRoot = e,
        this.ctx.isInline ? (this.showCurrentStateScreens(),
        this._onLayoutTemplateLoaded()) : this.getTemplateParameters(this.LAYOUT_TEMPLATE_NAME).then(function(e) {
            e = Object.assign({}, e, t);
            n.loadTemplateOn(n.LAYOUT_TEMPLATE_NAME, n.domRoot, e).then(function() {
                n.showLoadingScreen(),
                n.showCurrentStateScreens().then(n._onLayoutTemplateLoaded).catch(function(e) {
                    throw e
                })
            }).catch(function(e) {
                e = "Problem loading template " + n.LAYOUT_TEMPLATE_NAME + ": " + e;
                throw f.captureMessage(e),
                e
            })
        }).catch(function(e) {
            e = "Problem getting template params. Reason: " + e;
            throw f.captureMessage(e),
            e
        })
    }
    ,
    p.prototype.reset = function() {}
    ,
    p.prototype.getTemplateParameters = function(e) {
        return a(this, void 0, void 0, function() {
            return s(this, function(e) {
                return [2, {
                    cache: !0,
                    queryParams: null
                }]
            })
        })
    }
    ,
    p.prototype.appendLoadingElement = function() {
        var e = this.domRoot;
        return this.loadingElem || (this.loadingElem = document.createElement("div"),
        this.loadingElem.classList.add("state-wait", "wait", "wait--animated", "wait--sm"),
        e.parentNode.appendChild(this.loadingElem)),
        this.loadingElem
    }
    ,
    p.prototype.appendBackdropElement = function() {
        var e = this.domRoot;
        return this.backdropElem || (this.backdropElem = document.createElement("div"),
        this.backdropElem.classList.add("ilove-backdrop", "ilove-backdrop--animated", "ilove-backdrop--sm"),
        e.parentNode.appendChild(this.backdropElem)),
        this.backdropElem
    }
    ,
    p.prototype.isTemplateAppended = function(e) {
        return this.ctx.appendedTemplates.includes(e)
    }
    ,
    p.prototype.loadTemplateOn = function(i, r, e) {
        var o = this
          , t = this.isTemplateAppended(i)
          , n = e && !0 === e.cache
          , a = e && !0 === (null == e ? void 0 : e.clearDom);
        return n && t ? (a && (r.innerHTML = this.ctx.getCachedTemplateHtml(i)),
        Promise.resolve()) : new Promise(function(t, n) {
            o.ctx.getTemplateViaAjax(i, e.queryParams, {
                useCache: e.cache
            }).then(function(e) {
                o.ctx.appendedTemplates.includes(i) || o.ctx.appendedTemplates.push(i),
                r.innerHTML = e,
                t()
            }, function(e) {
                n()
            })
        }
        )
    }
    ,
    p.prototype.showCurrentStateScreens = function() {
        return a(this, void 0, void 0, function() {
            var t, n, i;
            return s(this, function(e) {
                switch (e.label) {
                case 0:
                    if (this.domRoot.querySelectorAll("[data-state]").forEach(function(e) {
                        return e.style.display = "none"
                    }),
                    t = this.domRoot.querySelector("[data-state='" + this.name + "']"))
                        return t.style.display = "",
                        (n = t.getAttribute("data-template-name")) ? [4, this.getTemplateParameters(n)] : [3, 2];
                    throw "Template container for '" + this.name + "' state not found";
                case 1:
                    return i = e.sent(),
                    [2, this.loadTemplateOn(n, t, i)];
                case 2:
                    return [2, Promise.resolve()]
                }
            })
        })
    }
    ,
    p.prototype.changeScreen = function(e) {
        this.domRoot.querySelectorAll("[data-state='" + this.name + "'] [data-screen]").forEach(function(e) {
            e.style.display = "none"
        });
        var t = this.domRoot.querySelector("[data-state=" + this.name + "] [data-screen='" + e + "']");
        if (!t)
            throw "Screen '" + e + "' for state '" + this.name + "' not found";
        t.style.display = "",
        this.currentScreen = t
    }
    ,
    p.prototype.setContext = function(e) {
        this.ctx = e
    }
    ,
    Object.defineProperty(p.prototype, "domStateRoot", {
        get: function() {
            var e = this.domRoot.querySelector("[data-state=" + this.name + "]");
            if (e)
                return e;
            throw "Dom State root for " + this.name + " not found"
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(p.prototype, "dialogCloseBtn", {
        get: function() {
            return this.domStateRoot.querySelector(".dialog__close")
        },
        enumerable: !1,
        configurable: !0
    }),
    p.prototype.dispatchEvent = function(e) {
        return this.eventEmitter.dispatchEvent(e)
    }
    ,
    p.prototype.addEventListener = function(e, t) {
        return this.eventEmitter.addEventListener(e, t)
    }
    ,
    t.StateBase = p
}
, function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
        return i
    }),
    n.d(t, "b", function() {
        return d
    }),
    n.d(t, "c", function() {
        return f
    });
    var a = n(0)
      , r = n(32)
      , s = n(3)
      , o = n(14)
      , c = n(2)
      , u = n(28)
      , l = n(24);
    function i(e, t, n) {
        t = f(t, n && n.syntheticException || void 0, {
            attachStacktrace: e.attachStacktrace
        });
        return Object(s.a)(t, {
            handled: !0,
            type: "generic"
        }),
        t.level = r.a.Error,
        n && n.event_id && (t.event_id = n.event_id),
        o.a.resolve(t)
    }
    function d(e, t, n, i) {
        void 0 === n && (n = r.a.Info);
        t = p(t, i && i.syntheticException || void 0, {
            attachStacktrace: e.attachStacktrace
        });
        return t.level = n,
        i && i.event_id && (t.event_id = i.event_id),
        o.a.resolve(t)
    }
    function f(e, t, n) {
        var i, r, o;
        if (void 0 === n && (n = {}),
        Object(c.e)(e) && e.error)
            return e = e.error,
            r = Object(u.b)(Object(l.a)(e));
        if (Object(c.a)(e) || Object(c.b)(e))
            o = (i = e).name || (Object(c.a)(i) ? "DOMError" : "DOMException"),
            r = p(o = i.message ? o + ": " + i.message : o, t, n),
            Object(s.b)(r, o),
            "code"in i && (r.tags = Object(a.a)(Object(a.a)({}, r.tags), {
                "DOMException.code": "" + i.code
            }));
        else {
            if (Object(c.d)(e))
                return r = Object(u.b)(Object(l.a)(e));
            Object(c.h)(e) || Object(c.f)(e) ? (o = e,
            r = Object(u.a)(o, t, n.rejection)) : (r = p(e, t, n),
            Object(s.b)(r, "" + e, void 0)),
            Object(s.a)(r, {
                synthetic: !0
            })
        }
        return r
    }
    function p(e, t, n) {
        e = {
            message: e
        };
        return (n = void 0 === n ? {} : n).attachStacktrace && t && (n = Object(l.a)(t),
        t = Object(u.d)(n.stack),
        e.stacktrace = {
            frames: t
        }),
        e
    }
}
, function(e, t, n) {
    "use strict";
    n.d(t, "d", function() {
        return r
    }),
    n.d(t, "c", function() {
        return o
    }),
    n.d(t, "b", function() {
        return a
    }),
    n.d(t, "a", function() {
        return s
    });
    var i = n(2);
    function r(e, t) {
        return void 0 === t && (t = 0),
        "string" != typeof e || 0 === t || e.length <= t ? e : e.substr(0, t) + "..."
    }
    function o(e, t) {
        var n, i = e.length;
        return i <= 150 || (i < t && (t = i),
        (t = Math.max(t - 60, 0)) < 5 && (t = 0),
        (n = i - 5 < (n = Math.min(t + 140, i)) ? i : n) === i && (t = Math.max(n - 140, 0)),
        e = e.slice(t, n),
        0 < t && (e = "'{snip} " + e),
        n < i && (e += " {snip}")),
        e
    }
    function a(e, t) {
        if (!Array.isArray(e))
            return "";
        for (var n = [], i = 0; i < e.length; i++) {
            var r = e[i];
            try {
                n.push(String(r))
            } catch (e) {
                n.push("[value cannot be serialized]")
            }
        }
        return n.join(t)
    }
    function s(e, t) {
        return !!Object(i.k)(e) && (Object(i.j)(t) ? t.test(e) : "string" == typeof t && -1 !== e.indexOf(t))
    }
}
, function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
        return o
    });
    var i = n(0)
      , u = "?"
      , s = /^\s*at (?:(.*?) ?\()?((?:file|https?|blob|chrome-extension|address|native|eval|webpack|<anonymous>|[-a-z]+:|.*bundle|\/).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i
      , c = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:file|https?|blob|chrome|webpack|resource|moz-extension|capacitor).*?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i
      , l = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i
      , d = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i
      , f = /\((\S*)(?::(\d+))(?::(\d+))\)/
      , r = /Minified React error #\d+;/i;
    function o(e) {
        var t = null
          , n = 0;
        e && ("number" == typeof e.framesToPop ? n = e.framesToPop : r.test(e.message) && (n = 1));
        try {
            if (t = function(e) {
                if (!e || !e.stacktrace)
                    return null;
                for (var t, n = e.stacktrace, i = / line (\d+).*script (?:in )?(\S+)(?:: in function (\S+))?$/i, r = / line (\d+), column (\d+)\s*(?:in (?:<anonymous function: ([^>]+)>|([^)]+))\((.*)\))? in (.*):\s*$/i, o = n.split("\n"), a = [], s = 0; s < o.length; s += 2) {
                    var c = null;
                    (t = i.exec(o[s])) ? c = {
                        url: t[2],
                        func: t[3],
                        args: [],
                        line: +t[1],
                        column: null
                    } : (t = r.exec(o[s])) && (c = {
                        url: t[6],
                        func: t[3] || t[4],
                        args: t[5] ? t[5].split(",") : [],
                        line: +t[1],
                        column: +t[2]
                    }),
                    c && (!c.func && c.line && (c.func = u),
                    a.push(c))
                }
                return a.length ? {
                    message: p(e),
                    name: e.name,
                    stack: a
                } : null
            }(e))
                return a(t, n)
        } catch (e) {}
        try {
            if (t = function(e) {
                if (!e || !e.stack)
                    return null;
                for (var t, n, i = [], r = e.stack.split("\n"), o = 0; o < r.length; ++o) {
                    if (n = s.exec(r[o])) {
                        var a = n[2] && 0 === n[2].indexOf("native");
                        n[2] && 0 === n[2].indexOf("eval") && (t = f.exec(n[2])) && (n[2] = t[1],
                        n[3] = t[2],
                        n[4] = t[3]),
                        a = {
                            url: n[2] && 0 === n[2].indexOf("address at ") ? n[2].substr("address at ".length) : n[2],
                            func: n[1] || u,
                            args: a ? [n[2]] : [],
                            line: n[3] ? +n[3] : null,
                            column: n[4] ? +n[4] : null
                        }
                    } else if (n = l.exec(r[o]))
                        a = {
                            url: n[2],
                            func: n[1] || u,
                            args: [],
                            line: +n[3],
                            column: n[4] ? +n[4] : null
                        };
                    else {
                        if (!(n = c.exec(r[o])))
                            continue;
                        n[3] && -1 < n[3].indexOf(" > eval") && (t = d.exec(n[3])) ? (n[1] = n[1] || "eval",
                        n[3] = t[1],
                        n[4] = t[2],
                        n[5] = "") : 0 !== o || n[5] || void 0 === e.columnNumber || (i[0].column = e.columnNumber + 1),
                        a = {
                            url: n[3],
                            func: n[1] || u,
                            args: n[2] ? n[2].split(",") : [],
                            line: n[4] ? +n[4] : null,
                            column: n[5] ? +n[5] : null
                        }
                    }
                    !a.func && a.line && (a.func = u),
                    i.push(a)
                }
                return i.length ? {
                    message: p(e),
                    name: e.name,
                    stack: i
                } : null
            }(e))
                return a(t, n)
        } catch (e) {}
        return {
            message: p(e),
            name: e && e.name,
            stack: [],
            failed: !0
        }
    }
    function a(t, e) {
        try {
            return Object(i.a)(Object(i.a)({}, t), {
                stack: t.stack.slice(e)
            })
        } catch (e) {
            return t
        }
    }
    function p(e) {
        e = e && e.message;
        return e ? e.error && "string" == typeof e.error.message ? e.error.message : e : "No error message"
    }
}
, function(e, t, n) {
    "use strict";
    function i() {
        this._eventEmitterCallbacks = {}
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.ILoveEventEmitter = void 0,
    i.prototype.addEventListener = function(e, t) {
        e in this._eventEmitterCallbacks || (this._eventEmitterCallbacks[e] = []),
        this._eventEmitterCallbacks[e].push(t)
    }
    ,
    i.prototype.dispatchEvent = function(t) {
        t.name in this._eventEmitterCallbacks && this._eventEmitterCallbacks[t.name].forEach(function(e) {
            return e(t)
        });
        var e = new Event(t.name);
        document.dispatchEvent(e)
    }
    ,
    t.ILoveEventEmitter = i
}
, function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
        return i
    }),
    n.d(t, "b", function() {
        return r
    });
    var i = "sentry.javascript.browser"
      , r = "5.30.0"
}
, function(e, t, n) {
    "use strict";
    n.d(t, "b", function() {
        return i
    }),
    n.d(t, "a", function() {
        return r
    });
    var o = n(0);
    function i(e, t) {
        return {
            body: JSON.stringify({
                sent_at: (new Date).toISOString()
            }) + "\n" + JSON.stringify({
                type: "session"
            }) + "\n" + JSON.stringify(e),
            type: "session",
            url: t.getEnvelopeEndpointWithUrlEncodedAuth()
        }
    }
    function r(e, t) {
        var n = e.tags || {}
          , i = n.__sentry_samplingMethod
          , r = n.__sentry_sampleRate
          , n = Object(o.d)(n, ["__sentry_samplingMethod", "__sentry_sampleRate"])
          , n = (e.tags = n,
        "transaction" === e.type)
          , t = {
            body: JSON.stringify(e),
            type: e.type || "event",
            url: n ? t.getEnvelopeEndpointWithUrlEncodedAuth() : t.getStoreEndpointWithUrlEncodedAuth()
        };
        return n && (n = JSON.stringify({
            event_id: e.event_id,
            sent_at: (new Date).toISOString()
        }),
        e = JSON.stringify({
            type: e.type,
            sample_rates: [{
                id: i,
                rate: r
            }]
        }),
        t.body = n + "\n" + e + "\n" + t.body),
        t
    }
}
, function(e, t, n) {
    "use strict";
    n.d(t, "c", function() {
        return s
    }),
    n.d(t, "a", function() {
        return c
    }),
    n.d(t, "b", function() {
        return u
    }),
    n.d(t, "d", function() {
        return l
    });
    var i = n(2)
      , r = n(5)
      , o = n(24)
      , a = 50;
    function s(e) {
        var t = l(e.stack)
          , e = {
            type: e.name,
            value: e.message
        };
        return t && t.length && (e.stacktrace = {
            frames: t
        }),
        void 0 === e.type && "" === e.value && (e.value = "Unrecoverable error caught"),
        e
    }
    function c(e, t, n) {
        n = {
            exception: {
                values: [{
                    type: Object(i.f)(e) ? e.constructor.name : n ? "UnhandledRejection" : "Error",
                    value: "Non-Error " + (n ? "promise rejection" : "exception") + " captured with keys: " + Object(r.b)(e)
                }]
            },
            extra: {
                __serialized__: Object(r.e)(e)
            }
        };
        return t && (e = l(Object(o.a)(t).stack),
        n.stacktrace = {
            frames: e
        }),
        n
    }
    function u(e) {
        return {
            exception: {
                values: [s(e)]
            }
        }
    }
    function l(e) {
        var t, n;
        return e && e.length ? (e = (t = e)[0].func || "",
        n = t[t.length - 1].func || "",
        -1 === e.indexOf("captureMessage") && -1 === e.indexOf("captureException") || (t = t.slice(1)),
        (t = -1 !== n.indexOf("sentryWrapped") ? t.slice(0, -1) : t).slice(0, a).map(function(e) {
            return {
                colno: null === e.column ? void 0 : e.column,
                filename: e.url || t[0].url,
                function: e.func || "?",
                in_app: !0,
                lineno: null === e.line ? void 0 : e.line
            }
        }).reverse()) : []
    }
}
, function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
        return a
    });
    var o, c = n(0), u = n(2), l = n(12), t = n(3), d = n(5), s = n(19), r = n(44), f = Object(t.e)(), p = {}, h = {};
    function i(e) {
        var i, a, s, t;
        if (!h[e])
            switch (h[e] = !0,
            e) {
            case "console":
                "console"in f && ["debug", "info", "warn", "error", "log", "assert"].forEach(function(i) {
                    i in f.console && Object(d.c)(f.console, i, function(n) {
                        return function() {
                            for (var e = [], t = 0; t < arguments.length; t++)
                                e[t] = arguments[t];
                            m("console", {
                                args: e,
                                level: i
                            }),
                            n && Function.prototype.apply.call(n, f.console, e)
                        }
                    })
                });
                break;
            case "dom":
                "document"in f && (f.document.addEventListener("click", b("click", m.bind(null, "dom")), !1),
                f.document.addEventListener("keypress", w(m.bind(null, "dom")), !1),
                ["EventTarget", "Node"].forEach(function(e) {
                    e = f[e] && f[e].prototype;
                    e && e.hasOwnProperty && e.hasOwnProperty("addEventListener") && (Object(d.c)(e, "addEventListener", function(i) {
                        return function(e, t, n) {
                            return t && t.handleEvent ? ("click" === e && Object(d.c)(t, "handleEvent", function(t) {
                                return function(e) {
                                    return b("click", m.bind(null, "dom"))(e),
                                    t.call(this, e)
                                }
                            }),
                            "keypress" === e && Object(d.c)(t, "handleEvent", function(t) {
                                return function(e) {
                                    return w(m.bind(null, "dom"))(e),
                                    t.call(this, e)
                                }
                            })) : ("click" === e && b("click", m.bind(null, "dom"), !0)(this),
                            "keypress" === e && w(m.bind(null, "dom"))(this)),
                            i.call(this, e, t, n)
                        }
                    }),
                    Object(d.c)(e, "removeEventListener", function(i) {
                        return function(e, t, n) {
                            try {
                                i.call(this, e, t.__sentry_wrapped__, n)
                            } catch (e) {}
                            return i.call(this, e, t, n)
                        }
                    }))
                }));
                break;
            case "xhr":
                "XMLHttpRequest"in f && (a = [],
                s = [],
                t = XMLHttpRequest.prototype,
                Object(d.c)(t, "open", function(o) {
                    return function() {
                        for (var n = [], e = 0; e < arguments.length; e++)
                            n[e] = arguments[e];
                        function i() {
                            if (4 === r.readyState) {
                                try {
                                    r.__sentry_xhr__ && (r.__sentry_xhr__.status_code = r.status)
                                } catch (e) {}
                                try {
                                    var e, t = a.indexOf(r);
                                    -1 !== t && (a.splice(t),
                                    e = s.splice(t)[0],
                                    r.__sentry_xhr__) && void 0 !== e[0] && (r.__sentry_xhr__.body = e[0])
                                } catch (e) {}
                                m("xhr", {
                                    args: n,
                                    endTimestamp: Date.now(),
                                    startTimestamp: Date.now(),
                                    xhr: r
                                })
                            }
                        }
                        var r = this
                          , t = n[1];
                        r.__sentry_xhr__ = {
                            method: Object(u.k)(n[0]) ? n[0].toUpperCase() : n[0],
                            url: n[1]
                        },
                        Object(u.k)(t) && "POST" === r.__sentry_xhr__.method && t.match(/sentry_key/) && (r.__sentry_own_request__ = !0);
                        return "onreadystatechange"in r && "function" == typeof r.onreadystatechange ? Object(d.c)(r, "onreadystatechange", function(n) {
                            return function() {
                                for (var e = [], t = 0; t < arguments.length; t++)
                                    e[t] = arguments[t];
                                return i(),
                                n.apply(r, e)
                            }
                        }) : r.addEventListener("readystatechange", i),
                        o.apply(r, n)
                    }
                }),
                Object(d.c)(t, "send", function(n) {
                    return function() {
                        for (var e = [], t = 0; t < arguments.length; t++)
                            e[t] = arguments[t];
                        return a.push(this),
                        s.push(e),
                        m("xhr", {
                            args: e,
                            startTimestamp: Date.now(),
                            xhr: this
                        }),
                        n.apply(this, e)
                    }
                }));
                break;
            case "fetch":
                Object(r.c)() && Object(d.c)(f, "fetch", function(i) {
                    return function() {
                        for (var e = [], t = 0; t < arguments.length; t++)
                            e[t] = arguments[t];
                        var n = {
                            args: e,
                            fetchData: {
                                method: function(e) {
                                    void 0 === e && (e = []);
                                    if ("Request"in f && Object(u.g)(e[0], Request) && e[0].method)
                                        return String(e[0].method).toUpperCase();
                                    if (e[1] && e[1].method)
                                        return String(e[1].method).toUpperCase();
                                    return "GET"
                                }(e),
                                url: function(e) {
                                    void 0 === e && (e = []);
                                    if ("string" == typeof e[0])
                                        return e[0];
                                    if ("Request"in f && Object(u.g)(e[0], Request))
                                        return e[0].url;
                                    return String(e[0])
                                }(e)
                            },
                            startTimestamp: Date.now()
                        };
                        return m("fetch", Object(c.a)({}, n)),
                        i.apply(f, e).then(function(e) {
                            return m("fetch", Object(c.a)(Object(c.a)({}, n), {
                                endTimestamp: Date.now(),
                                response: e
                            })),
                            e
                        }, function(e) {
                            throw m("fetch", Object(c.a)(Object(c.a)({}, n), {
                                endTimestamp: Date.now(),
                                error: e
                            })),
                            e
                        })
                    }
                });
                break;
            case "history":
                Object(r.b)() && (i = f.onpopstate,
                f.onpopstate = function() {
                    for (var e = [], t = 0; t < arguments.length; t++)
                        e[t] = arguments[t];
                    var n = f.location.href;
                    if (m("history", {
                        from: o,
                        to: o = n
                    }),
                    i)
                        return i.apply(this, e)
                }
                ,
                Object(d.c)(f.history, "pushState", n),
                Object(d.c)(f.history, "replaceState", n));
                break;
            case "error":
                E = f.onerror,
                f.onerror = function(e, t, n, i, r) {
                    return m("error", {
                        column: i,
                        error: r,
                        line: n,
                        msg: e,
                        url: t
                    }),
                    !!E && E.apply(this, arguments)
                }
                ;
                break;
            case "unhandledrejection":
                S = f.onunhandledrejection,
                f.onunhandledrejection = function(e) {
                    return m("unhandledrejection", e),
                    !S || S.apply(this, arguments)
                }
                ;
                break;
            default:
                l.a.warn("unknown instrumentation type:", e)
            }
        function n(r) {
            return function() {
                for (var e = [], t = 0; t < arguments.length; t++)
                    e[t] = arguments[t];
                var n, i = 2 < e.length ? e[2] : void 0;
                return i && (n = o,
                i = String(i),
                m("history", {
                    from: n,
                    to: o = i
                })),
                r.apply(this, e)
            }
        }
    }
    function a(e) {
        e && "string" == typeof e.type && "function" == typeof e.callback && (p[e.type] = p[e.type] || [],
        p[e.type].push(e.callback),
        i(e.type))
    }
    function m(t, e) {
        var n, i;
        if (t && p[t])
            try {
                for (var r = Object(c.f)(p[t] || []), o = r.next(); !o.done; o = r.next()) {
                    var a = o.value;
                    try {
                        a(e)
                    } catch (e) {
                        l.a.error("Error while triggering instrumentation handler.\nType: " + t + "\nName: " + Object(s.a)(a) + "\nError: " + e)
                    }
                }
            } catch (e) {
                n = {
                    error: e
                }
            } finally {
                try {
                    o && !o.done && (i = r.return) && i.call(r)
                } finally {
                    if (n)
                        throw n.error
                }
            }
    }
    var v, g, y = 1e3, _ = 0;
    function b(t, n, i) {
        return void 0 === i && (i = !1),
        function(e) {
            v = void 0,
            e && g !== e && (g = e,
            _ && clearTimeout(_),
            i ? _ = setTimeout(function() {
                n({
                    event: e,
                    name: t
                })
            }) : n({
                event: e,
                name: t
            }))
        }
    }
    function w(i) {
        return function(e) {
            var t;
            try {
                t = e.target
            } catch (e) {
                return
            }
            var n = t && t.tagName;
            n && ("INPUT" === n || "TEXTAREA" === n || t.isContentEditable) && (v || b("input", i)(e),
            clearTimeout(v),
            v = setTimeout(function() {
                v = void 0
            }, y))
        }
    }
    var E = null;
    var S = null
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.lazyload = void 0,
    t.lazyload = function(e, t, n) {
        void 0 === t && (t = {}),
        void 0 === n && (n = "async");
        for (var i = document.getElementsByTagName("script"), r = i.length; r--; )
            if (i[r].src.match(e))
                return !0;
        var o, a, s = document.createElement("script");
        for (o in s.type = "text/javascript",
        0 in document.createElement("script"),
        "defer"in document.createElement("script") && (s.defer = !0),
        s.src = e,
        t)
            t.hasOwnProperty(o) && (a = t[o],
            s.setAttribute(o, a));
        return (n = document.getElementsByTagName("script")[0]).parentNode.insertBefore(s, n),
        !0
    }
}
, function(e, t) {
    var n = function() {
        return this
    }();
    try {
        n = n || new Function("return this")()
    } catch (e) {
        "object" == typeof window && (n = window)
    }
    e.exports = n
}
, function(e, t, n) {
    "use strict";
    var i, r;
    n.d(t, "a", function() {
        return i
    }),
    (n = i = i || {}).Fatal = "fatal",
    n.Error = "error",
    n.Warning = "warning",
    n.Log = "log",
    n.Info = "info",
    n.Debug = "debug",
    n.Critical = "critical",
    (r = i = i || {}).fromString = function(e) {
        switch (e) {
        case "debug":
            return r.Debug;
        case "info":
            return r.Info;
        case "warn":
        case "warning":
            return r.Warning;
        case "error":
            return r.Error;
        case "fatal":
            return r.Fatal;
        case "critical":
            return r.Critical;
        default:
            return r.Log
        }
    }
}
, , function(e, s, c) {
    "use strict";
    !function(i) {
        var r = this && this.__createBinding || (Object.create ? function(e, t, n, i) {
            void 0 === i && (i = n),
            Object.defineProperty(e, i, {
                enumerable: !0,
                get: function() {
                    return t[n]
                }
            })
        }
        : function(e, t, n, i) {
            e[i = void 0 === i ? n : i] = t[n]
        }
        )
          , o = this && this.__setModuleDefault || (Object.create ? function(e, t) {
            Object.defineProperty(e, "default", {
                enumerable: !0,
                value: t
            })
        }
        : function(e, t) {
            e.default = t
        }
        )
          , e = this && this.__importStar || function(e) {
            if (e && e.__esModule)
                return e;
            var t = {};
            if (null != e)
                for (var n in e)
                    "default" !== n && Object.hasOwnProperty.call(e, n) && r(t, e, n);
            return o(t, e),
            t
        }
          , t = (Object.defineProperty(s, "__esModule", {
            value: !0
        }),
        s.Tooltip = void 0,
        e(c(30)))
          , n = c(73)
          , e = (a.compat = function() {
            (-1 !== navigator.appVersion.indexOf("MSIE 10") || 0 <= navigator.userAgent.indexOf(" UCBrowser/") || 0 <= navigator.userAgent.indexOf("Opera Mini") || 0 <= navigator.userAgent.indexOf("Android") && 4.4 < parseFloat(navigator.userAgent.slice(navigator.userAgent.indexOf("Android") + 8))) && t.lazyload("//cdn.jsdelivr.net/npm/mutationobserver-shim/dist/mutationobserver.min.js")
        }
        ,
        a.init = function(e) {
            void 0 === e && (e = null),
            window.tippy && (i(e = null == e ? ".tooltip" : e).each(function(e, t) {
                i(t)[0]._tippy || (window._tippyInstances = window._tippyInstances || [],
                t = window.tippy(i(t)[0], a.getOptions(t)),
                window._tippyInstances.push(t))
            }),
            n.LinkTitle.disable(e),
            i(e).hover(function() {
                if (i(this).hasClass("rotate") || i(this).hasClass("remove"))
                    try {
                        var e = i(this).parent().parent()[0]._tippy;
                        e && (e.hide(),
                        e.disable())
                    } catch (e) {}
            }, function() {
                if (i(this).hasClass("rotate") || i(this).hasClass("remove"))
                    try {
                        var e = i(this).parent().parent()[0]._tippy;
                        e && e.enable()
                    } catch (e) {}
            }),
            i(".tooltip").on("mouseenter", function(e) {
                e.preventDefault()
            }))
        }
        ,
        a.getOptions = function(e) {
            var t = {
                animation: "fade",
                delay: [0, 0],
                offset: [0, 20],
                allowHTML: !0,
                content: i(e).is("[data-title]") ? i(e).attr("data-title") : i(e).attr("title"),
                arrow: !0,
                placement: a.getPlacement(e),
                showOnCreate: i(e).hasClass("tooltip--show"),
                hideOnClick: !i(e).hasClass("tooltip--fixed"),
                theme: i(e).is("[data-theme]") ? i(e).attr("data-theme") : ""
            };
            return i(e).is("[data-z]") && (t.zIndex = i(e).attr("data-z")),
            t
        }
        ,
        a.getPlacement = function(e) {
            e = i(e);
            return e.hasClass("tooltip--top") ? "top" : e.hasClass("tooltip--top-start") ? "top-start" : e.hasClass("tooltip--top-end") ? "top-end" : e.hasClass("tooltip--bottom") ? "bottom" : e.hasClass("tooltip--left") ? "left" : e.hasClass("tooltip--right") ? "right" : "top"
        }
        ,
        a.setContent = function(e, n) {
            if (1 == i(e).length)
                return i(e).attr("title", n),
                i(e).attr("data-title", n),
                i(e)[0]._tippy ? (i(e)[0]._tippy.hide(),
                void i(e)[0]._tippy.setContent(n)) : void a.init(e);
            i(e).each(function(e, t) {
                a.setContent(t, n)
            })
        }
        ,
        a.show = function(e, t) {
            void 0 === t && (t = null);
            var n;
            i(e)[0];
            0 != i(e).length && ("_tippy"in i(e)[0] || a.init(i(e)),
            n = i(e)[0]._tippy,
            i(e).is(":disabled") ? (i(e).attr("disabled", !1),
            n.show(),
            setTimeout(function() {
                i(e).attr("disabled", !0)
            }, 100)) : n.show(),
            null != t) && setTimeout(function() {
                i(e)[0]._tippy.hide()
            }, t)
        }
        ,
        a.shake = function(e) {
            var t = i(e)[0]._tippy;
            window.setTimeout(function() {
                i(t.popper).children().addClass("shake")
            }, 500)
        }
        ,
        a.hide = function(e) {
            try {
                i(e)[0]._tippy.hide()
            } catch (e) {}
        }
        ,
        a.enable = function(e) {
            if (1 == i(e).length)
                try {
                    i(e)[0]._tippy.enable()
                } catch (e) {}
            else
                i(e).each(function(e, t) {
                    a.enable(t)
                })
        }
        ,
        a.disable = function(e) {
            if (1 == i(e).length)
                try {
                    i(e)[0]._tippy.hide(),
                    i(e)[0]._tippy.disable()
                } catch (e) {}
            else
                i(e).each(function(e, t) {
                    a.disable(t)
                })
        }
        ,
        a.destroy = function(e) {
            if (1 == i(e).length)
                try {
                    i(e)
                } catch (e) {}
            else
                i(e).each(function(e, t) {
                    a.destroy(t)
                })
        }
        ,
        a.wrapDisabled = function(e) {
            i(e).wrap("<div class='tootlip-wrap'></div>")
        }
        ,
        a);
        function a() {}
        s.Tooltip = e,
        window.tootip = e
    }
    .call(this, c(1))
}
, function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
        return l
    });
    var m = n(0)
      , i = n(50)
      , a = n(58)
      , r = n(20)
      , o = n(14)
      , s = (c.prototype.isReady = function() {
        return void 0 === this._limit || this.length() < this._limit
    }
    ,
    c.prototype.add = function(e) {
        var t = this;
        return this.isReady() ? (-1 === this._buffer.indexOf(e) && this._buffer.push(e),
        e.then(function() {
            return t.remove(e)
        }).then(null, function() {
            return t.remove(e).then(null, function() {})
        }),
        e) : o.a.reject(new r.a("Not adding Promise due to buffer limit reached."))
    }
    ,
    c.prototype.remove = function(e) {
        return this._buffer.splice(this._buffer.indexOf(e), 1)[0]
    }
    ,
    c.prototype.length = function() {
        return this._buffer.length
    }
    ,
    c.prototype.drain = function(n) {
        var i = this;
        return new o.a(function(e) {
            var t = setTimeout(function() {
                n && 0 < n && e(!1)
            }, n);
            o.a.all(i._buffer).then(function() {
                clearTimeout(t),
                e(!0)
            }).then(null, function() {
                e(!0)
            })
        }
        )
    }
    ,
    c);
    function c(e) {
        this._limit = e,
        this._buffer = []
    }
    var u = n(12)
      , v = n(3)
      , l = (d.prototype.sendEvent = function(e) {
        throw new r.a("Transport Class has to implement `sendEvent` method")
    }
    ,
    d.prototype.close = function(e) {
        return this._buffer.drain(e)
    }
    ,
    d.prototype._handleResponse = function(e) {
        var t = e.requestType
          , n = e.response
          , i = e.headers
          , r = e.resolve
          , e = e.reject
          , o = a.a.fromHttpCode(n.status);
        this._handleRateLimit(i) && u.a.warn("Too many requests, backing off until: " + this._disabledUntil(t)),
        o === a.a.Success ? r({
            status: o
        }) : e(n)
    }
    ,
    d.prototype._disabledUntil = function(e) {
        return this._rateLimits[e] || this._rateLimits.all
    }
    ,
    d.prototype._isRateLimited = function(e) {
        return this._disabledUntil(e) > new Date(Date.now())
    }
    ,
    d.prototype._handleRateLimit = function(e) {
        var t, n, i, r, o = Date.now(), a = e["x-sentry-rate-limits"], e = e["retry-after"];
        if (a) {
            try {
                for (var s = Object(m.f)(a.trim().split(",")), c = s.next(); !c.done; c = s.next()) {
                    var u = c.value.split(":", 2)
                      , l = parseInt(u[0], 10)
                      , d = 1e3 * (isNaN(l) ? 60 : l);
                    try {
                        i = void 0;
                        for (var f = Object(m.f)(u[1].split(";")), p = f.next(); !p.done; p = f.next()) {
                            var h = p.value;
                            this._rateLimits[h || "all"] = new Date(o + d)
                        }
                    } catch (e) {
                        i = {
                            error: e
                        }
                    } finally {
                        try {
                            p && !p.done && (r = f.return) && r.call(f)
                        } finally {
                            if (i)
                                throw i.error
                        }
                    }
                }
            } catch (e) {
                t = {
                    error: e
                }
            } finally {
                try {
                    c && !c.done && (n = s.return) && n.call(s)
                } finally {
                    if (t)
                        throw t.error
                }
            }
            return !0
        }
        return !!e && (this._rateLimits.all = new Date(o + Object(v.g)(o, e)),
        !0)
    }
    ,
    d);
    function d(e) {
        this.options = e,
        this._buffer = new s(30),
        this._rateLimits = {},
        this._api = new i.a(this.options.dsn),
        this.url = this._api.getStoreEndpointWithUrlEncodedAuth()
    }
}
, function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
        return o
    }),
    n.d(t, "b", function() {
        return d
    });
    var c = n(0)
      , u = n(2)
      , i = n(104)
      , l = n(14)
      , r = n(3)
      , o = (a.clone = function(e) {
        var t = new a;
        return e && (t._breadcrumbs = Object(c.e)(e._breadcrumbs),
        t._tags = Object(c.a)({}, e._tags),
        t._extra = Object(c.a)({}, e._extra),
        t._contexts = Object(c.a)({}, e._contexts),
        t._user = e._user,
        t._level = e._level,
        t._span = e._span,
        t._session = e._session,
        t._transactionName = e._transactionName,
        t._fingerprint = e._fingerprint,
        t._eventProcessors = Object(c.e)(e._eventProcessors)),
        t
    }
    ,
    a.prototype.addScopeListener = function(e) {
        this._scopeListeners.push(e)
    }
    ,
    a.prototype.addEventProcessor = function(e) {
        return this._eventProcessors.push(e),
        this
    }
    ,
    a.prototype.setUser = function(e) {
        return this._user = e || {},
        this._session && this._session.update({
            user: e
        }),
        this._notifyScopeListeners(),
        this
    }
    ,
    a.prototype.getUser = function() {
        return this._user
    }
    ,
    a.prototype.setTags = function(e) {
        return this._tags = Object(c.a)(Object(c.a)({}, this._tags), e),
        this._notifyScopeListeners(),
        this
    }
    ,
    a.prototype.setTag = function(e, t) {
        var n;
        return this._tags = Object(c.a)(Object(c.a)({}, this._tags), ((n = {})[e] = t,
        n)),
        this._notifyScopeListeners(),
        this
    }
    ,
    a.prototype.setExtras = function(e) {
        return this._extra = Object(c.a)(Object(c.a)({}, this._extra), e),
        this._notifyScopeListeners(),
        this
    }
    ,
    a.prototype.setExtra = function(e, t) {
        var n;
        return this._extra = Object(c.a)(Object(c.a)({}, this._extra), ((n = {})[e] = t,
        n)),
        this._notifyScopeListeners(),
        this
    }
    ,
    a.prototype.setFingerprint = function(e) {
        return this._fingerprint = e,
        this._notifyScopeListeners(),
        this
    }
    ,
    a.prototype.setLevel = function(e) {
        return this._level = e,
        this._notifyScopeListeners(),
        this
    }
    ,
    a.prototype.setTransactionName = function(e) {
        return this._transactionName = e,
        this._notifyScopeListeners(),
        this
    }
    ,
    a.prototype.setTransaction = function(e) {
        return this.setTransactionName(e)
    }
    ,
    a.prototype.setContext = function(e, t) {
        var n;
        return null === t ? delete this._contexts[e] : this._contexts = Object(c.a)(Object(c.a)({}, this._contexts), ((n = {})[e] = t,
        n)),
        this._notifyScopeListeners(),
        this
    }
    ,
    a.prototype.setSpan = function(e) {
        return this._span = e,
        this._notifyScopeListeners(),
        this
    }
    ,
    a.prototype.getSpan = function() {
        return this._span
    }
    ,
    a.prototype.getTransaction = function() {
        var e, t = this.getSpan();
        return null != (e = t) && e.transaction ? null == (e = t) ? void 0 : e.transaction : null != (e = null == (e = t) ? void 0 : e.spanRecorder) && e.spans[0] ? t.spanRecorder.spans[0] : void 0
    }
    ,
    a.prototype.setSession = function(e) {
        return e ? this._session = e : delete this._session,
        this._notifyScopeListeners(),
        this
    }
    ,
    a.prototype.getSession = function() {
        return this._session
    }
    ,
    a.prototype.update = function(e) {
        if (e) {
            var t;
            if ("function" == typeof e)
                return (t = e(this))instanceof a ? t : this;
            e instanceof a ? (this._tags = Object(c.a)(Object(c.a)({}, this._tags), e._tags),
            this._extra = Object(c.a)(Object(c.a)({}, this._extra), e._extra),
            this._contexts = Object(c.a)(Object(c.a)({}, this._contexts), e._contexts),
            e._user && Object.keys(e._user).length && (this._user = e._user),
            e._level && (this._level = e._level),
            e._fingerprint && (this._fingerprint = e._fingerprint)) : Object(u.h)(e) && (this._tags = Object(c.a)(Object(c.a)({}, this._tags), e.tags),
            this._extra = Object(c.a)(Object(c.a)({}, this._extra), e.extra),
            this._contexts = Object(c.a)(Object(c.a)({}, this._contexts), e.contexts),
            e.user && (this._user = e.user),
            e.level && (this._level = e.level),
            e.fingerprint) && (this._fingerprint = e.fingerprint)
        }
        return this
    }
    ,
    a.prototype.clear = function() {
        return this._breadcrumbs = [],
        this._tags = {},
        this._extra = {},
        this._user = {},
        this._contexts = {},
        this._level = void 0,
        this._transactionName = void 0,
        this._fingerprint = void 0,
        this._span = void 0,
        this._session = void 0,
        this._notifyScopeListeners(),
        this
    }
    ,
    a.prototype.addBreadcrumb = function(e, t) {
        e = Object(c.a)({
            timestamp: Object(i.a)()
        }, e);
        return this._breadcrumbs = void 0 !== t && 0 <= t ? Object(c.e)(this._breadcrumbs, [e]).slice(-t) : Object(c.e)(this._breadcrumbs, [e]),
        this._notifyScopeListeners(),
        this
    }
    ,
    a.prototype.clearBreadcrumbs = function() {
        return this._breadcrumbs = [],
        this._notifyScopeListeners(),
        this
    }
    ,
    a.prototype.applyToEvent = function(e, t) {
        var n;
        return this._extra && Object.keys(this._extra).length && (e.extra = Object(c.a)(Object(c.a)({}, this._extra), e.extra)),
        this._tags && Object.keys(this._tags).length && (e.tags = Object(c.a)(Object(c.a)({}, this._tags), e.tags)),
        this._user && Object.keys(this._user).length && (e.user = Object(c.a)(Object(c.a)({}, this._user), e.user)),
        this._contexts && Object.keys(this._contexts).length && (e.contexts = Object(c.a)(Object(c.a)({}, this._contexts), e.contexts)),
        this._level && (e.level = this._level),
        this._transactionName && (e.transaction = this._transactionName),
        this._span && (e.contexts = Object(c.a)({
            trace: this._span.getTraceContext()
        }, e.contexts),
        n = null == (n = this._span.transaction) ? void 0 : n.name) && (e.tags = Object(c.a)({
            transaction: n
        }, e.tags)),
        this._applyFingerprint(e),
        e.breadcrumbs = Object(c.e)(e.breadcrumbs || [], this._breadcrumbs),
        e.breadcrumbs = 0 < e.breadcrumbs.length ? e.breadcrumbs : void 0,
        this._notifyEventProcessors(Object(c.e)(s(), this._eventProcessors), e, t)
    }
    ,
    a.prototype._notifyEventProcessors = function(i, r, o, a) {
        var s = this;
        return void 0 === a && (a = 0),
        new l.a(function(t, e) {
            var n = i[a];
            null === r || "function" != typeof n ? t(r) : (n = n(Object(c.a)({}, r), o),
            (Object(u.m)(n) ? n.then(function(e) {
                return s._notifyEventProcessors(i, e, o, a + 1).then(t)
            }) : s._notifyEventProcessors(i, n, o, a + 1).then(t)).then(null, e))
        }
        )
    }
    ,
    a.prototype._notifyScopeListeners = function() {
        var t = this;
        this._notifyingListeners || (this._notifyingListeners = !0,
        this._scopeListeners.forEach(function(e) {
            e(t)
        }),
        this._notifyingListeners = !1)
    }
    ,
    a.prototype._applyFingerprint = function(e) {
        e.fingerprint = e.fingerprint ? Array.isArray(e.fingerprint) ? e.fingerprint : [e.fingerprint] : [],
        this._fingerprint && (e.fingerprint = e.fingerprint.concat(this._fingerprint)),
        e.fingerprint && !e.fingerprint.length && delete e.fingerprint
    }
    ,
    a);
    function a() {
        this._notifyingListeners = !1,
        this._scopeListeners = [],
        this._eventProcessors = [],
        this._breadcrumbs = [],
        this._user = {},
        this._tags = {},
        this._extra = {},
        this._contexts = {}
    }
    function s() {
        var e = Object(r.e)();
        return e.__SENTRY__ = e.__SENTRY__ || {},
        e.__SENTRY__.globalEventProcessors = e.__SENTRY__.globalEventProcessors || [],
        e.__SENTRY__.globalEventProcessors
    }
    function d(e) {
        s().push(e)
    }
}
, , , function(e, r, o) {
    "use strict";
    !function(e, t) {
        o.d(r, "b", function() {
            return n
        }),
        o.d(r, "a", function() {
            return i
        });
        o(2),
        o(5);
        function n() {
            return "[object process]" === Object.prototype.toString.call(void 0 !== e ? e : 0)
        }
        function i(e, t) {
            return e.require(t)
        }
    }
    .call(this, o(102), o(67)(e))
}
, function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
        return i
    });
    var c = n(2);
    function i(e) {
        try {
            for (var t, n = e, i = [], r = 0, o = 0, a = " > ".length; n && r++ < 5 && !("html" === (t = function(e) {
                var t, n, i, r, o = e, a = [];
                if (!o || !o.tagName)
                    return "";
                a.push(o.tagName.toLowerCase()),
                o.id && a.push("#" + o.id);
                if ((e = o.className) && Object(c.k)(e))
                    for (t = e.split(/\s+/),
                    r = 0; r < t.length; r++)
                        a.push("." + t[r]);
                var s = ["type", "name", "title", "alt"];
                for (r = 0; r < s.length; r++)
                    n = s[r],
                    (i = o.getAttribute(n)) && a.push("[" + n + '="' + i + '"]');
                return a.join("")
            }(n)) || 1 < r && 80 <= o + i.length * a + t.length); )
                i.push(t),
                o += t.length,
                n = n.parentNode;
            return i.reverse().join(" > ")
        } catch (e) {
            return "<unknown>"
        }
    }
}
, function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
        return o
    });
    var i = n(58)
      , r = n(14)
      , o = (a.prototype.sendEvent = function(e) {
        return r.a.resolve({
            reason: "NoopTransport: Event has been skipped because no Dsn is configured.",
            status: i.a.Skipped
        })
    }
    ,
    a.prototype.close = function(e) {
        return r.a.resolve(!0)
    }
    ,
    a);
    function a() {}
}
, function(e, t, n) {
    "use strict";
    n.r(t);
    var i = n(53)
      , r = (n.d(t, "GlobalHandlers", function() {
        return i.a
    }),
    n(52))
      , o = (n.d(t, "TryCatch", function() {
        return r.a
    }),
    n(51))
      , a = (n.d(t, "Breadcrumbs", function() {
        return o.a
    }),
    n(54))
      , s = (n.d(t, "LinkedErrors", function() {
        return a.a
    }),
    n(55));
    n.d(t, "UserAgent", function() {
        return s.a
    })
}
, function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
        return _
    });
    var i, r = n(0), t = n(71), o = n(3), a = n(12), s = n(70), c = n(32), u = n(44), l = n(22), d = n(68), f = n(69), p = (i = s.a,
    Object(r.b)(h, i),
    h.prototype.eventFromException = function(e, t) {
        return Object(l.a)(this._options, e, t)
    }
    ,
    h.prototype.eventFromMessage = function(e, t, n) {
        return void 0 === t && (t = c.a.Info),
        Object(l.b)(this._options, e, t, n)
    }
    ,
    h.prototype._setupTransport = function() {
        var e;
        return this._options.dsn ? (e = Object(r.a)(Object(r.a)({}, this._options.transportOptions), {
            dsn: this._options.dsn
        }),
        new (this._options.transport || (Object(u.a)() ? d : f).a)(e)) : i.prototype._setupTransport.call(this)
    }
    ,
    h);
    function h() {
        return null !== i && i.apply(this, arguments) || this
    }
    var m, v = n(11), g = n(51), y = n(26), _ = (m = t.a,
    Object(r.b)(b, m),
    b.prototype.showReportDialog = function(e) {
        void 0 === e && (e = {}),
        Object(o.e)().document && (this._isEnabled() ? Object(v.a)(Object(r.a)(Object(r.a)({}, e), {
            dsn: e.dsn || this.getDsn()
        })) : a.a.error("Trying to call showReportDialog with Sentry Client disabled"))
    }
    ,
    b.prototype._prepareEvent = function(e, t, n) {
        return e.platform = e.platform || "javascript",
        e.sdk = Object(r.a)(Object(r.a)({}, e.sdk), {
            name: y.a,
            packages: Object(r.e)(e.sdk && e.sdk.packages || [], [{
                name: "npm:@sentry/browser",
                version: y.b
            }]),
            version: y.b
        }),
        m.prototype._prepareEvent.call(this, e, t, n)
    }
    ,
    b.prototype._sendEvent = function(e) {
        var t = this.getIntegration(g.a);
        t && t.addSentryBreadcrumb(e),
        m.prototype._sendEvent.call(this, e)
    }
    ,
    b);
    function b(e) {
        return m.call(this, p, e = void 0 === e ? {} : e) || this
    }
}
, function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
        return o
    }),
    n.d(t, "c", function() {
        return s
    }),
    n.d(t, "d", function() {
        return c
    }),
    n.d(t, "b", function() {
        return u
    });
    var i = n(12)
      , r = n(3);
    function o() {
        if (!("fetch"in Object(r.e)()))
            return !1;
        try {
            return new Headers,
            new Request(""),
            new Response,
            !0
        } catch (e) {
            return !1
        }
    }
    function a(e) {
        return e && /^function fetch\(\)\s+\{\s+\[native code\]\s+\}$/.test(e.toString())
    }
    function s() {
        if (!o())
            return !1;
        var e = Object(r.e)();
        if (a(e.fetch))
            return !0;
        var t = !1
          , e = e.document;
        if (e && "function" == typeof e.createElement)
            try {
                var n = e.createElement("iframe");
                n.hidden = !0,
                e.head.appendChild(n),
                n.contentWindow && n.contentWindow.fetch && (t = a(n.contentWindow.fetch)),
                e.head.removeChild(n)
            } catch (e) {
                i.a.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ", e)
            }
        return t
    }
    function c() {
        if (!o())
            return !1;
        try {
            return new Request("_",{
                referrerPolicy: "origin"
            }),
            !0
        } catch (e) {
            return !1
        }
    }
    function u() {
        var e = Object(r.e)()
          , t = e.chrome
          , t = t && t.app && t.app.runtime
          , e = "history"in e && !!e.history.pushState && !!e.history.replaceState;
        return !t && e
    }
}
, function(e, t, n) {
    "use strict";
    var i = this && this.__createBinding || (Object.create ? function(e, t, n, i) {
        void 0 === i && (i = n),
        Object.defineProperty(e, i, {
            enumerable: !0,
            get: function() {
                return t[n]
            }
        })
    }
    : function(e, t, n, i) {
        e[i = void 0 === i ? n : i] = t[n]
    }
    )
      , r = this && this.__setModuleDefault || (Object.create ? function(e, t) {
        Object.defineProperty(e, "default", {
            enumerable: !0,
            value: t
        })
    }
    : function(e, t) {
        e.default = t
    }
    )
      , o = this && this.__importStar || function(e) {
        if (e && e.__esModule)
            return e;
        var t = {};
        if (null != e)
            for (var n in e)
                "default" !== n && Object.hasOwnProperty.call(e, n) && i(t, e, n);
        return r(t, e),
        t
    }
      , a = (Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.Settings = void 0,
    o(n(107)));
    function s() {}
    s.get = function(e) {
        var t = "production";
        return a[t][e]
    }
    ,
    s.mode = function() {
        var e = "production";
        return e
    }
    ,
    s.env = function() {
        return "production"
    }
    ,
    t.Settings = s
}
, , function(e, t, n) {
    "use strict";
    var a = this && this.__awaiter || function(e, a, s, c) {
        return new (s = s || Promise)(function(n, t) {
            function i(e) {
                try {
                    o(c.next(e))
                } catch (e) {
                    t(e)
                }
            }
            function r(e) {
                try {
                    o(c.throw(e))
                } catch (e) {
                    t(e)
                }
            }
            function o(e) {
                var t;
                e.done ? n(e.value) : ((t = e.value)instanceof s ? t : new s(function(e) {
                    e(t)
                }
                )).then(i, r)
            }
            o((c = c.apply(e, a || [])).next())
        }
        )
    }
      , s = this && this.__generator || function(i, r) {
        var o, a, s, c = {
            label: 0,
            sent: function() {
                if (1 & s[0])
                    throw s[1];
                return s[1]
            },
            trys: [],
            ops: []
        }, e = {
            next: t(0),
            throw: t(1),
            return: t(2)
        };
        return "function" == typeof Symbol && (e[Symbol.iterator] = function() {
            return this
        }
        ),
        e;
        function t(n) {
            return function(e) {
                var t = [n, e];
                if (o)
                    throw new TypeError("Generator is already executing.");
                for (; c; )
                    try {
                        if (o = 1,
                        a && (s = 2 & t[0] ? a.return : t[0] ? a.throw || ((s = a.return) && s.call(a),
                        0) : a.next) && !(s = s.call(a, t[1])).done)
                            return s;
                        switch (a = 0,
                        (t = s ? [2 & t[0], s.value] : t)[0]) {
                        case 0:
                        case 1:
                            s = t;
                            break;
                        case 4:
                            return c.label++,
                            {
                                value: t[1],
                                done: !1
                            };
                        case 5:
                            c.label++,
                            a = t[1],
                            t = [0];
                            continue;
                        case 7:
                            t = c.ops.pop(),
                            c.trys.pop();
                            continue;
                        default:
                            if (!(s = 0 < (s = c.trys).length && s[s.length - 1]) && (6 === t[0] || 2 === t[0])) {
                                c = 0;
                                continue
                            }
                            if (3 === t[0] && (!s || t[1] > s[0] && t[1] < s[3]))
                                c.label = t[1];
                            else if (6 === t[0] && c.label < s[1])
                                c.label = s[1],
                                s = t;
                            else {
                                if (!(s && c.label < s[2])) {
                                    s[2] && c.ops.pop(),
                                    c.trys.pop();
                                    continue
                                }
                                c.label = s[2],
                                c.ops.push(t)
                            }
                        }
                        t = r.call(i, c)
                    } catch (e) {
                        t = [6, e],
                        a = 0
                    } finally {
                        o = s = 0
                    }
                if (5 & t[0])
                    throw t[1];
                return {
                    value: t[0] ? t[1] : void 0,
                    done: !0
                }
            }
        }
    }
      , i = (Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.ContextBase = void 0,
    n(16))
      , r = n(108)
      , c = n(61)
      , o = n(25)
      , u = n(8)
      , n = (l.prototype.setContextPlacement = function(e) {
        this._ctxPlacement = e
    }
    ,
    l.prototype.getContextPlacement = function() {
        return this._ctxPlacement
    }
    ,
    l.prototype.render = function(e, t) {
        void 0 === t && (t = {}),
        this.state || (this.state = this.getInitialState(),
        this.changeState(this.state)),
        this.state.render(e, t)
    }
    ,
    Object.defineProperty(l.prototype, "isInline", {
        get: function() {
            return this._isInline
        },
        enumerable: !1,
        configurable: !0
    }),
    l.prototype.getState = function() {
        return this.state
    }
    ,
    l.prototype.changeState = function(e) {
        if (!e)
            throw "State cannot be empty";
        if (this._inEndState)
            throw "Context is in end state; Cannot transition to state '" + e.name + "'";
        this.state && this.state.cleanup(),
        this.state = e,
        this.state.setContext(this),
        this.stateHistory.push(this.state),
        this.listenToEvents(this.state)
    }
    ,
    l.prototype.canGoToAPreviousState = function() {
        return !(this.stateHistory.length < 2)
    }
    ,
    l.prototype.goToPreviousState = function() {
        var e;
        if (this.canGoToAPreviousState())
            return this.stateHistory.pop(),
            e = this.stateHistory.pop(),
            this.changeState(e),
            e;
        throw "Cannot transition to previous state"
    }
    ,
    l.prototype.getTemplateViaAjax = function(i, r, o) {
        return void 0 === r && (r = {}),
        a(this, void 0, void 0, function() {
            var t, n;
            return s(this, function(e) {
                switch (e.label) {
                case 0:
                    return n = o.useCache,
                    t = "template_" + i,
                    n && l.cache.existsEntry(t) ? [2, l.cache.getEntry(t)] : [4, c.AjaxTemplate.load(i, r)];
                case 1:
                    return n = e.sent(),
                    l.cache.setEntry(t, n),
                    [2, n]
                }
            })
        })
    }
    ,
    l.prototype.getCachedTemplateHtml = function(e) {
        return l.cache.getEntry("template_" + e)
    }
    ,
    l.prototype.getStateHistory = function() {
        return this.stateHistory.map(function(e) {
            return e.name
        })
    }
    ,
    l.prototype.wasUserLoggedOnInitialization = function() {
        return this._wasUserLoggedOnInitialization
    }
    ,
    l.prototype.reset = function() {
        this.state && this.state.reset()
    }
    ,
    Object.defineProperty(l.prototype, "userType", {
        get: function() {
            var e = i.UserModel.userType;
            return 1 != i.UserModel.isTeamManaged() && "premium" == e && 0 == i.UserModel.hasSubscription() ? "user" : e
        },
        enumerable: !1,
        configurable: !0
    }),
    l.prototype.canUserDoTrial = function() {
        switch (this.userType) {
        case "guest":
        case "user":
            return i.UserModel.canDoTrial();
        case "premium":
            return !1;
        default:
            throw "Unknown userType " + this.userType + " to determine if can do trial"
        }
    }
    ,
    l.prototype.isTeamManaged = function() {
        return i.UserModel.isPremium() && i.UserModel.isTeamManaged()
    }
    ,
    l.prototype.isTrialEnabledForThisTool = function() {
        return !(window.ilovepdfConfig && "dtr"in window.ilovepdfConfig && window.ilovepdfConfig.dtr)
    }
    ,
    l.prototype.isLoggedIn = function() {
        return "guest" !== this.userType
    }
    ,
    Object.defineProperty(l.prototype, "user", {
        get: function() {
            return i.UserModel.get()
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(l.prototype, "userCurrentPaymentMethod", {
        get: function() {
            var e = this.user.last_payment;
            return e && e.provider ? e : null
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(l.prototype, "userCurrentSubscription", {
        get: function() {
            return this.user && this.user.current_subscription || null
        },
        enumerable: !1,
        configurable: !0
    }),
    l.prototype.dispatchEvent = function(e) {
        return this.eventEmitter.dispatchEvent(e)
    }
    ,
    l.prototype.addEventListener = function(e, t) {
        return this.eventEmitter.addEventListener(e, t)
    }
    ,
    l.prototype.getInstanceID = function() {
        return this._instanceID
    }
    ,
    l.cache = new r.Cache,
    l._static_instanceID = 0,
    l);
    function l(e) {
        var t = this;
        void 0 === e && (e = {}),
        this.state = null,
        this.stateHistory = [],
        this.objsListeningTo = new WeakMap,
        this.appendedTemplates = [],
        this._isInline = !1,
        this._ctxPlacement = "dom",
        this._inEndState = !1,
        this.setEndState = function() {
            t._inEndState = !0
        }
        ,
        this.isInEndState = function() {
            return t._inEndState
        }
        ,
        this.listenToEvents = function(e) {
            t.objsListeningTo.has(e) && !0 === t.objsListeningTo.get(e) || (e.addEventListener("end", function(e) {
                t.setEndState(),
                t.dispatchEvent(new u.IloveEvent("end",e.detail))
            }),
            e.addEventListener("disableContentAbandonment", function(e) {
                return t.dispatchEvent(new u.IloveEvent("disableContentAbandonment"))
            }),
            e.addEventListener("unsetContentAbandonment", function(e) {
                return t.dispatchEvent(new u.IloveEvent("unsetContentAbandonment"))
            }),
            t.objsListeningTo.set(e, !0))
        }
        ,
        this.notifyOfContainerClosing = function() {
            t.dispatchEvent(new u.IloveEvent("contextContainerClosed")),
            t.isInEndState() && t.dispatchEvent(new u.IloveEvent("end"))
        }
        ,
        this._onDomReady = function(e) {
            t.dispatchEvent(new u.IloveEvent("domReady",{
                domRoot: e
            }))
        }
        ,
        this.eventEmitter = new o.ILoveEventEmitter,
        this._instanceID = ++l._static_instanceID,
        this._wasUserLoggedOnInitialization = this.isLoggedIn(),
        this._isInline = e.isInline || !1
    }
    t.ContextBase = n
}
, function(e, s, u) {
    "use strict";
    !function(r) {
        var o = this && this.__assign || function() {
            return (o = Object.assign || function(e) {
                for (var t, n = 1, i = arguments.length; n < i; n++)
                    for (var r in t = arguments[n])
                        Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                return e
            }
            ).apply(this, arguments)
        }
          , e = this && this.__awaiter || function(e, a, s, c) {
            return new (s = s || Promise)(function(n, t) {
                function i(e) {
                    try {
                        o(c.next(e))
                    } catch (e) {
                        t(e)
                    }
                }
                function r(e) {
                    try {
                        o(c.throw(e))
                    } catch (e) {
                        t(e)
                    }
                }
                function o(e) {
                    var t;
                    e.done ? n(e.value) : ((t = e.value)instanceof s ? t : new s(function(e) {
                        e(t)
                    }
                    )).then(i, r)
                }
                o((c = c.apply(e, a || [])).next())
            }
            )
        }
          , c = this && this.__generator || function(i, r) {
            var o, a, s, c = {
                label: 0,
                sent: function() {
                    if (1 & s[0])
                        throw s[1];
                    return s[1]
                },
                trys: [],
                ops: []
            }, e = {
                next: t(0),
                throw: t(1),
                return: t(2)
            };
            return "function" == typeof Symbol && (e[Symbol.iterator] = function() {
                return this
            }
            ),
            e;
            function t(n) {
                return function(e) {
                    var t = [n, e];
                    if (o)
                        throw new TypeError("Generator is already executing.");
                    for (; c; )
                        try {
                            if (o = 1,
                            a && (s = 2 & t[0] ? a.return : t[0] ? a.throw || ((s = a.return) && s.call(a),
                            0) : a.next) && !(s = s.call(a, t[1])).done)
                                return s;
                            switch (a = 0,
                            (t = s ? [2 & t[0], s.value] : t)[0]) {
                            case 0:
                            case 1:
                                s = t;
                                break;
                            case 4:
                                return c.label++,
                                {
                                    value: t[1],
                                    done: !1
                                };
                            case 5:
                                c.label++,
                                a = t[1],
                                t = [0];
                                continue;
                            case 7:
                                t = c.ops.pop(),
                                c.trys.pop();
                                continue;
                            default:
                                if (!(s = 0 < (s = c.trys).length && s[s.length - 1]) && (6 === t[0] || 2 === t[0])) {
                                    c = 0;
                                    continue
                                }
                                if (3 === t[0] && (!s || t[1] > s[0] && t[1] < s[3]))
                                    c.label = t[1];
                                else if (6 === t[0] && c.label < s[1])
                                    c.label = s[1],
                                    s = t;
                                else {
                                    if (!(s && c.label < s[2])) {
                                        s[2] && c.ops.pop(),
                                        c.trys.pop();
                                        continue
                                    }
                                    c.label = s[2],
                                    c.ops.push(t)
                                }
                            }
                            t = r.call(i, c)
                        } catch (e) {
                            t = [6, e],
                            a = 0
                        } finally {
                            o = s = 0
                        }
                    if (5 & t[0])
                        throw t[1];
                    return {
                        value: t[0] ? t[1] : void 0,
                        done: !0
                    }
                }
            }
        }
          , a = (Object.defineProperty(s, "__esModule", {
            value: !0
        }),
        s.Api = s.APP_VERSION = s.API_VERSION = void 0,
        u(62))
          , t = u(45)
          , n = (s.API_VERSION = "v1",
        s.APP_VERSION = "web.0",
        Object.defineProperty(i.prototype, "userToken", {
            get: function() {
                return "function" == typeof this._userToken ? this._userToken() : this._userToken
            },
            set: function(e) {
                this._userToken = e
            },
            enumerable: !1,
            configurable: !0
        }),
        i.ping = function(o, a) {
            return void 0 === a && (a = !1),
            new Promise(function(e, t) {
                var n = new XMLHttpRequest
                  , i = 0
                  , r = 0;
                n.open("GET", o, !0),
                n.onreadystatechange = function() {
                    4 == n.readyState && (200 == n.status || 0 == i && 0 == r && 0 != n.status && 1 == a ? e({}) : t())
                }
                ,
                n.ontimeout = function() {
                    i = 1
                }
                ,
                n.onerror = function(e) {
                    r = 1
                }
                ,
                n.send()
            }
            )
        }
        ,
        i.prototype.pingService = function() {
            return i.ping(this.serviceServer + "/ping")
        }
        ,
        i.prototype.sendRequest = function(e, t, n, i, r) {
            void 0 === n && (n = null),
            void 0 === i && (i = !1),
            void 0 === r && (r = !1);
            var o = new XMLHttpRequest;
            return o.open(e, /*this.workerServer*/apiServer + "/" + this.apiVersion + "/" + t, !0),
            o.setRequestHeader("Authorization", "Bearer " + this.token),
            o.setRequestHeader("Accept", "application/json"),
            1 == r && o.setRequestHeader("Content-Type", "application/json"),
            i && (o.responseType = "blob"),
            1 == r ? o.send(JSON.stringify(n)) : o.send(n),
            o
        }
        ,
        i.prototype.sendServiceRequest = function(e, t, n, i, r) {
            void 0 === n && (n = null),
            void 0 === i && (i = !1),
            void 0 === r && (r = !1);
            var o = new XMLHttpRequest;
            return o.open(e, this.serviceServer + "/" + t, !0),
            o.setRequestHeader("Authorization", "Bearer " + this.userToken),
            o.setRequestHeader("Accept", "application/json"),
            1 == r && o.setRequestHeader("Content-Type", "application/json"),
            i && (o.responseType = "blob"),
            1 == r ? o.send(JSON.stringify(n)) : o.send(n),
            o
        }
        ,
        i.prototype.query = function(e, r, o, a, s, c) {
            void 0 === o && (o = null),
            void 0 === a && (a = !1),
            void 0 === s && (s = !1),
            void 0 === c && (c = "api");
            var u = this;
            return new Promise(function(t, n) {
                var i = null;
                if ("api" == c)
                    i = u.sendRequest(e, r, o, a, s);
                else {
                    if ("service" != c)
                        throw new Error("invalid target api");
                    i = u.sendServiceRequest(e, r, o, a, s)
                }
                i.onerror = function(e) {
                    n({
                        status: -1
                    })
                }
                ,
                i.onload = function() {
                    if (4 == i.readyState)
                        if (200 == i.status)
                            try {
                                t(JSON.parse(i.responseText))
                            } catch (e) {
                                n({
                                    error: "invalidJSONResponse",
                                    status: 500,
                                    response: i.responseText
                                })
                            }
                        else if (400 == i.status || 500 == i.status)
                            try {
                                (e = JSON.parse(i.responseText)).status = i.status,
                                n(e)
                            } catch (e) {
                                n({
                                    error: "invalidJSONResponse",
                                    status: 500,
                                    response: i.responseText
                                })
                            }
                        else {
                            var e = {};
                            try {
                                e = JSON.parse(i.responseText)
                            } catch (e) {}
                            e.status = i.status,
                            n(e)
                        }
                }
            }
            )
        }
        ,
        i.prototype.process = function(e) {
            return this.query("POST", "process", e)
        }
        ,
        i.prototype.getSigner = function(e) {
            return this.query("GET", "signature/signer/" + e)
        }
        ,
        i.prototype.request = function(e, t, n) {
            n = a.FormDataHelper.jsonToFormData(n);
            return this.query(e, t, n)
        }
        ,
        i.prototype.getTask = function() {
            var i = this;
            return new Promise(function(e, t) {
                var n = i.sendRequest("GET", "task/" + i.taskId);
                n.onreadystatechange = function() {
                    4 == n.readyState && (200 == n.status ? e(JSON.parse(n.responseText)) : (400 != n.status && n.status,
                    window.ev("event", "send", "download_deleted", /*i.workerServer*/apiServer),
                    t(n.responseText)))
                }
            }
            )
        }
        ,
        i.prototype.getLink = function(e) {
            return /*this.workerServer*/apiServer + "/" + this.apiVersion + "/" + e
        }
        ,
        i.prototype.deleteTask = function() {
            return this.request("delete", "task/" + this.taskId, {})
        }
        ,
        i.prototype.resetTask = function(r) {
            return e(this, void 0, void 0, function() {
                var t, n, i;
                return c(this, function(e) {
                    switch (e.label) {
                    case 0:
                        for (n in (t = new FormData).append("task", this.taskId),
                        r)
                            i = r[n],
                            t.append(n, i);
                        return [4, fetch(this.getLink("task/reset"), {
                            method: "POST",
                            body: t,
                            headers: {
                                Authorization: "Bearer " + this.token
                            }
                        })];
                    case 1:
                        return [2, e.sent()]
                    }
                })
            })
        }
        ,
        i.prototype.oneStepTask = function(s) {
            return e(this, void 0, void 0, function() {
                var t, n, i, r, o, a;
                return c(this, function(e) {
                    switch (e.label) {
                    case 0:
                        return t = s.tool,
                        n = s.file,
                        i = s.filename,
                        r = s.download,
                        o = /*this.workerServer*/apiServer + "/run",
                        (a = new FormData).append("tool", t),
                        a.append("file", n),
                        a.append("name", i),
                        !1 === r && a.append("download", "0"),
                        [4, fetch(o, {
                            method: "POST",
                            body: a,
                            headers: {
                                Authorization: "Bearer " + this.token
                            }
                        })];
                    case 1:
                        return [2, e.sent()]
                    }
                })
            })
        }
        ,
        i.prototype.oneStep_copyTask = function(r) {
            return e(this, void 0, void 0, function() {
                var t, n, i;
                return c(this, function(e) {
                    return t = r.file,
                    n = r.filename,
                    i = r.download,
                    [2, this.oneStepTask({
                        file: t,
                        filename: n,
                        tool: "copy",
                        download: i
                    })]
                })
            })
        }
        ,
        i.prototype.copyTask = function(s) {
            return e(this, void 0, void 0, function() {
                var t, n, i, r, o, a;
                return c(this, function(e) {
                    switch (e.label) {
                    case 0:
                        for (t = s.taskId,
                        n = s.files,
                        i = s.keepInputFile,
                        this.getLink("process/"),
                        (r = new FormData).append("tool", "copy"),
                        r.append("task", t),
                        i && r.append("keep", "1"),
                        o = 0; o < n.length; o++)
                            a = n[o],
                            r.append("files[" + o + "][server_filename]", a.server_filename),
                            r.append("files[" + o + "][filename]", a.name),
                            r.append("files[" + o + "][pages]", a.pages);
                        return [4, this.query("POST", "process", r)];
                    case 1:
                        return [2, e.sent()]
                    }
                })
            })
        }
        ,
        i.prototype.getSubdomain = function(e) {
            return e.split("/")[2].split(".")[0]
        }
        ,
        i.prototype.getDomain = function(e) {
            return e.split("/")[2]
        }
        ,
        i.prototype.uploadFromUrl = function(e) {
            var t = new FormData;
            return t.append("cloud_file", e),
            t.append("cloud_source", "public"),
            t.append("task", this.taskId),
            this.query("post", "upload", t)
        }
        ,
        i.prototype.getPreview = function(e, t) {
            var n, i = new FormData;
            for (n in i.append("server_filename", e),
            i.append("task", this.taskId),
            delete t.output_filename,
            delete t.packaged_filename,
            t)
                t.hasOwnProperty(n) && i.append(n, t[n]);
            return this.query("post", "preview", i)
        }
        ,
        i.prototype.upscale = function(n, i) {
            return e(this, void 0, void 0, function() {
                var t;
                return c(this, function(e) {
                    switch (e.label) {
                    case 0:
                        return (t = new FormData).append("task", this.taskId),
                        t.append("server_filename", n),
                        t.append("scale", "" + i),
                        [4, fetch(this.getLink("upscale"), {
                            method: "POST",
                            body: t,
                            headers: {
                                Authorization: "Bearer " + this.token
                            }
                        })];
                    case 1:
                        return [4, e.sent().blob()];
                    case 2:
                        return [2, e.sent()]
                    }
                })
            })
        }
        ,
        i.prototype.removeBackground = function(n) {
            return e(this, void 0, void 0, function() {
                var t;
                return c(this, function(e) {
                    switch (e.label) {
                    case 0:
                        return (t = new FormData).append("task", this.taskId),
                        t.append("server_filename", n),
                        [4, fetch(this.getLink("removebackground"), {
                            method: "POST",
                            body: t,
                            headers: {
                                Authorization: "Bearer " + this.token
                            }
                        })];
                    case 1:
                        return [4, e.sent().blob()];
                    case 2:
                        return [2, e.sent()]
                    }
                })
            })
        }
        ,
        i.prototype.detectFaces = function(n, i, r) {
            return e(this, void 0, void 0, function() {
                var t;
                return c(this, function(e) {
                    switch (e.label) {
                    case 0:
                        return t = a.FormDataHelper.jsonToFormData(o({
                            task: this.taskId,
                            level: n,
                            fileArray: i
                        }, void 0 !== r ? {
                            face: r
                        } : {})),
                        [4, this.query("post", "detectfaces", t)];
                    case 1:
                        return [2, e.sent().data.coordArray]
                    }
                })
            })
        }
        ,
        i.prototype.removeFile = function(i) {
            var r = this
              , o = new FormData;
            return new Promise(function(e, t) {
                var n = r.sendRequest("delete", "upload/" + r.taskId + "/" + i, o);
                n.onreadystatechange = function() {
                    4 == n.readyState && (404 != n.status && (400 == n.status || 500 == n.status) ? t() : e({}))
                }
            }
            )
        }
        ,
        i.prototype.next = function(e, t, n) {
            var i = new FormData;
            return i.append("task", e),
            i.append("tool", t),
            i.append("worker", n),
            i.append("thumbnails", "1"),
            this.query("post", "task/next", i)
        }
        ,
        i.prototype.nextFile = function(e, t) {
            return /*this.workerServer*/apiServer + "/thumbnails/" + e + "/" + t
        }
        ,
        i.prototype.info = function() {
            return this.query("get", "info")
        }
        ,
        i.prototype.getStatus = function(n, i) {
            return void 0 === i && (i = 0),
            n = (n = void 0 === n ? null : n) || /*this.workerServer*/apiServer,
            new Promise(function(t, e) {
                r.ajax({
                    url: n + "/status.json",
                    dataType: "json",
                    success: function(e) {
                        t(e)
                    },
                    timeout: i,
                    error: function() {
                        e()
                    }
                })
            }
            )
        }
        ,
        i.prototype.getFilePreviewInfo = function(e, t, n, i) {
            void 0 === i && (i = null),
            n = (n = void 0 === n ? 150 : n) || 150;
            i = "pdfrender/" + e + "/" + t.replace(".pdf", "");
            return this.query("get", i)
        }
        ,
        i.prototype.saveToolConfig = function(e, t, n) {
            e = a.FormDataHelper.jsonToFormData({
                tool: e,
                options: t
            });
            return this.userToken = n,
            this.query("post", "tool/save", e, !1, !1, "service")
        }
        ,
        i.prototype.touchTask = function(e) {
            return this.query("get", "task/touch/" + e)
        }
        ,
        i);
        function i(e) {
            this.taskId = null,
            this.tool = null,
            this.preWorker = null,
            this.serviceServer = t.Settings.get("service"),
            this.workerServer = null,
            this.downloadUrl = "",
            this.apiVersion = s.API_VERSION,
            this.appVersion = s.APP_VERSION,
            this.token = null,
            this.encrypted = !1,
            this.encryptKey = null,
            Object.assign(this, e)
        }
        s.Api = n
    }
    .call(this, u(1))
}
, function(e, t, n) {
    "use strict";
    n.r(t);
    var i = n(35)
      , r = (n.d(t, "BaseTransport", function() {
        return i.a
    }),
    n(68))
      , o = (n.d(t, "FetchTransport", function() {
        return r.a
    }),
    n(69));
    n.d(t, "XHRTransport", function() {
        return o.a
    })
}
, function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
        return o
    });
    var i = n(105)
      , r = n(5)
      , o = (a.prototype.getDsn = function() {
        return this._dsnObject
    }
    ,
    a.prototype.getBaseApiEndpoint = function() {
        var e = this._dsnObject
          , t = e.protocol ? e.protocol + ":" : ""
          , n = e.port ? ":" + e.port : "";
        return t + "//" + e.host + n + (e.path ? "/" + e.path : "") + "/api/"
    }
    ,
    a.prototype.getStoreEndpoint = function() {
        return this._getIngestEndpoint("store")
    }
    ,
    a.prototype.getStoreEndpointWithUrlEncodedAuth = function() {
        return this.getStoreEndpoint() + "?" + this._encodedAuth()
    }
    ,
    a.prototype.getEnvelopeEndpointWithUrlEncodedAuth = function() {
        return this._getEnvelopeEndpoint() + "?" + this._encodedAuth()
    }
    ,
    a.prototype.getStoreEndpointPath = function() {
        var e = this._dsnObject;
        return (e.path ? "/" + e.path : "") + "/api/" + e.projectId + "/store/"
    }
    ,
    a.prototype.getRequestHeaders = function(e, t) {
        var n = this._dsnObject
          , i = ["Sentry sentry_version=7"];
        return i.push("sentry_client=" + e + "/" + t),
        i.push("sentry_key=" + n.user),
        n.pass && i.push("sentry_secret=" + n.pass),
        {
            "Content-Type": "application/json",
            "X-Sentry-Auth": i.join(", ")
        }
    }
    ,
    a.prototype.getReportDialogEndpoint = function(e) {
        void 0 === e && (e = {});
        var t, n = this._dsnObject, i = this.getBaseApiEndpoint() + "embed/error-page/", r = [];
        for (t in r.push("dsn=" + n.toString()),
        e)
            "dsn" !== t && ("user" === t ? e.user && (e.user.name && r.push("name=" + encodeURIComponent(e.user.name)),
            e.user.email) && r.push("email=" + encodeURIComponent(e.user.email)) : r.push(encodeURIComponent(t) + "=" + encodeURIComponent(e[t])));
        return r.length ? i + "?" + r.join("&") : i
    }
    ,
    a.prototype._getEnvelopeEndpoint = function() {
        return this._getIngestEndpoint("envelope")
    }
    ,
    a.prototype._getIngestEndpoint = function(e) {
        return "" + this.getBaseApiEndpoint() + this._dsnObject.projectId + "/" + e + "/"
    }
    ,
    a.prototype._encodedAuth = function() {
        var e = {
            sentry_key: this._dsnObject.user,
            sentry_version: "7"
        };
        return Object(r.f)(e)
    }
    ,
    a);
    function a(e) {
        this.dsn = e,
        this._dsnObject = new i.a(e)
    }
}
, function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
        return l
    });
    var i = n(0)
      , o = n(6)
      , r = n(32)
      , a = n(3)
      , s = n(29)
      , c = n(23)
      , u = n(40)
      , l = (d.prototype.addSentryBreadcrumb = function(e) {
        this._options.sentry && Object(o.b)().addBreadcrumb({
            category: "sentry." + ("transaction" === e.type ? "transaction" : "event"),
            event_id: e.event_id,
            level: e.level,
            message: Object(a.d)(e)
        }, {
            event: e
        })
    }
    ,
    d.prototype.setupOnce = function() {
        var n = this;
        this._options.console && Object(s.a)({
            callback: function() {
                for (var e = [], t = 0; t < arguments.length; t++)
                    e[t] = arguments[t];
                n._consoleBreadcrumb.apply(n, Object(i.e)(e))
            },
            type: "console"
        }),
        this._options.dom && Object(s.a)({
            callback: function() {
                for (var e = [], t = 0; t < arguments.length; t++)
                    e[t] = arguments[t];
                n._domBreadcrumb.apply(n, Object(i.e)(e))
            },
            type: "dom"
        }),
        this._options.xhr && Object(s.a)({
            callback: function() {
                for (var e = [], t = 0; t < arguments.length; t++)
                    e[t] = arguments[t];
                n._xhrBreadcrumb.apply(n, Object(i.e)(e))
            },
            type: "xhr"
        }),
        this._options.fetch && Object(s.a)({
            callback: function() {
                for (var e = [], t = 0; t < arguments.length; t++)
                    e[t] = arguments[t];
                n._fetchBreadcrumb.apply(n, Object(i.e)(e))
            },
            type: "fetch"
        }),
        this._options.history && Object(s.a)({
            callback: function() {
                for (var e = [], t = 0; t < arguments.length; t++)
                    e[t] = arguments[t];
                n._historyBreadcrumb.apply(n, Object(i.e)(e))
            },
            type: "history"
        })
    }
    ,
    d.prototype._consoleBreadcrumb = function(e) {
        var t = {
            category: "console",
            data: {
                arguments: e.args,
                logger: "console"
            },
            level: r.a.fromString(e.level),
            message: Object(c.b)(e.args, " ")
        };
        if ("assert" === e.level) {
            if (!1 !== e.args[0])
                return;
            t.message = "Assertion failed: " + (Object(c.b)(e.args.slice(1), " ") || "console.assert"),
            t.data.arguments = e.args.slice(1)
        }
        Object(o.b)().addBreadcrumb(t, {
            input: e.args,
            level: e.level
        })
    }
    ,
    d.prototype._domBreadcrumb = function(e) {
        var t;
        try {
            t = e.event.target ? Object(u.a)(e.event.target) : Object(u.a)(e.event)
        } catch (e) {
            t = "<unknown>"
        }
        0 !== t.length && Object(o.b)().addBreadcrumb({
            category: "ui." + e.name,
            message: t
        }, {
            event: e.event,
            name: e.name
        })
    }
    ,
    d.prototype._xhrBreadcrumb = function(e) {
        var t, n, i, r;
        e.endTimestamp && !e.xhr.__sentry_own_request__ && (t = (r = e.xhr.__sentry_xhr__ || {}).method,
        n = r.url,
        i = r.status_code,
        r = r.body,
        Object(o.b)().addBreadcrumb({
            category: "xhr",
            data: {
                method: t,
                url: n,
                status_code: i
            },
            type: "http"
        }, {
            xhr: e.xhr,
            input: r
        }))
    }
    ,
    d.prototype._fetchBreadcrumb = function(e) {
        !e.endTimestamp || e.fetchData.url.match(/sentry_key/) && "POST" === e.fetchData.method || (e.error ? Object(o.b)().addBreadcrumb({
            category: "fetch",
            data: e.fetchData,
            level: r.a.Error,
            type: "http"
        }, {
            data: e.error,
            input: e.args
        }) : Object(o.b)().addBreadcrumb({
            category: "fetch",
            data: Object(i.a)(Object(i.a)({}, e.fetchData), {
                status_code: e.response.status
            }),
            type: "http"
        }, {
            input: e.args,
            response: e.response
        }))
    }
    ,
    d.prototype._historyBreadcrumb = function(e) {
        var t = Object(a.e)()
          , n = e.from
          , e = e.to
          , t = Object(a.h)(t.location.href)
          , i = Object(a.h)(n)
          , r = Object(a.h)(e);
        i.path || (i = t),
        t.protocol === r.protocol && t.host === r.host && (e = r.relative),
        t.protocol === i.protocol && t.host === i.host && (n = i.relative),
        Object(o.b)().addBreadcrumb({
            category: "navigation",
            data: {
                from: n,
                to: e
            }
        })
    }
    ,
    d.id = "Breadcrumbs",
    d);
    function d(e) {
        this.name = d.id,
        this._options = Object(i.a)({
            console: !0,
            dom: !0,
            fetch: !0,
            history: !0,
            sentry: !0,
            xhr: !0
        }, e)
    }
}
, function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
        return u
    });
    var i = n(0)
      , o = n(3)
      , a = n(5)
      , s = n(19)
      , c = n(11)
      , r = ["EventTarget", "Window", "Node", "ApplicationCache", "AudioTrackList", "ChannelMergerNode", "CryptoOperation", "EventSource", "FileReader", "HTMLUnknownElement", "IDBDatabase", "IDBRequest", "IDBTransaction", "KeyOperation", "MediaController", "MessagePort", "ModalWindow", "Notification", "SVGElementInstance", "Screen", "TextTrack", "TextTrackCue", "TextTrackList", "WebSocket", "WebSocketWorker", "Worker", "XMLHttpRequest", "XMLHttpRequestEventTarget", "XMLHttpRequestUpload"]
      , u = (l.prototype.setupOnce = function() {
        var e = Object(o.e)();
        this._options.setTimeout && Object(a.c)(e, "setTimeout", this._wrapTimeFunction.bind(this)),
        this._options.setInterval && Object(a.c)(e, "setInterval", this._wrapTimeFunction.bind(this)),
        this._options.requestAnimationFrame && Object(a.c)(e, "requestAnimationFrame", this._wrapRAF.bind(this)),
        this._options.XMLHttpRequest && "XMLHttpRequest"in e && Object(a.c)(XMLHttpRequest.prototype, "send", this._wrapXHR.bind(this)),
        this._options.eventTarget && (Array.isArray(this._options.eventTarget) ? this._options.eventTarget : r).forEach(this._wrapEventTarget.bind(this))
    }
    ,
    l.prototype._wrapTimeFunction = function(i) {
        return function() {
            for (var e = [], t = 0; t < arguments.length; t++)
                e[t] = arguments[t];
            var n = e[0];
            return e[0] = Object(c.c)(n, {
                mechanism: {
                    data: {
                        function: Object(s.a)(i)
                    },
                    handled: !0,
                    type: "instrument"
                }
            }),
            i.apply(this, e)
        }
    }
    ,
    l.prototype._wrapRAF = function(t) {
        return function(e) {
            return t.call(this, Object(c.c)(e, {
                mechanism: {
                    data: {
                        function: "requestAnimationFrame",
                        handler: Object(s.a)(t)
                    },
                    handled: !0,
                    type: "instrument"
                }
            }))
        }
    }
    ,
    l.prototype._wrapEventTarget = function(r) {
        var e = Object(o.e)()
          , e = e[r] && e[r].prototype;
        e && e.hasOwnProperty && e.hasOwnProperty("addEventListener") && (Object(a.c)(e, "addEventListener", function(i) {
            return function(e, t, n) {
                try {
                    "function" == typeof t.handleEvent && (t.handleEvent = Object(c.c)(t.handleEvent.bind(t), {
                        mechanism: {
                            data: {
                                function: "handleEvent",
                                handler: Object(s.a)(t),
                                target: r
                            },
                            handled: !0,
                            type: "instrument"
                        }
                    }))
                } catch (e) {}
                return i.call(this, e, Object(c.c)(t, {
                    mechanism: {
                        data: {
                            function: "addEventListener",
                            handler: Object(s.a)(t),
                            target: r
                        },
                        handled: !0,
                        type: "instrument"
                    }
                }), n)
            }
        }),
        Object(a.c)(e, "removeEventListener", function(o) {
            return function(e, t, n) {
                var i;
                try {
                    var r = null == (i = t) ? void 0 : i.__sentry_wrapped__;
                    r && o.call(this, e, r, n)
                } catch (e) {}
                return o.call(this, e, t, n)
            }
        }))
    }
    ,
    l.prototype._wrapXHR = function(n) {
        return function() {
            for (var e = [], t = 0; t < arguments.length; t++)
                e[t] = arguments[t];
            var i = this;
            return ["onload", "onerror", "onprogress", "onreadystatechange"].forEach(function(n) {
                n in i && "function" == typeof i[n] && Object(a.c)(i, n, function(e) {
                    var t = {
                        mechanism: {
                            data: {
                                function: n,
                                handler: Object(s.a)(e)
                            },
                            handled: !0,
                            type: "instrument"
                        }
                    };
                    return e.__sentry_original__ && (t.mechanism.data.handler = Object(s.a)(e.__sentry_original__)),
                    Object(c.c)(e, t)
                })
            }),
            n.apply(this, e)
        }
    }
    ,
    l.id = "TryCatch",
    l);
    function l(e) {
        this.name = l.id,
        this._options = Object(i.a)({
            XMLHttpRequest: !0,
            eventTarget: !0,
            requestAnimationFrame: !0,
            setInterval: !0,
            setTimeout: !0
        }, e)
    }
}
, function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
        return f
    });
    var i = n(0)
      , a = n(6)
      , o = n(32)
      , r = n(12)
      , s = n(29)
      , c = n(2)
      , u = n(3)
      , l = n(22)
      , d = n(11)
      , f = (p.prototype.setupOnce = function() {
        Error.stackTraceLimit = 50,
        this._options.onerror && (r.a.log("Global Handler attached: onerror"),
        this._installGlobalOnErrorHandler()),
        this._options.onunhandledrejection && (r.a.log("Global Handler attached: onunhandledrejection"),
        this._installGlobalOnUnhandledRejectionHandler())
    }
    ,
    p.prototype._installGlobalOnErrorHandler = function() {
        var o = this;
        this._onErrorHandlerInstalled || (Object(s.a)({
            callback: function(e) {
                var t = e.error
                  , n = Object(a.b)()
                  , i = n.getIntegration(p)
                  , r = t && !0 === t.__sentry_own_request__;
                !i || Object(d.b)() || r || (i = n.getClient(),
                r = Object(c.i)(t) ? o._eventFromIncompleteOnError(e.msg, e.url, e.line, e.column) : o._enhanceEventWithInitialFrame(Object(l.c)(t, void 0, {
                    attachStacktrace: i && i.getOptions().attachStacktrace,
                    rejection: !1
                }), e.url, e.line, e.column),
                Object(u.a)(r, {
                    handled: !1,
                    type: "onerror"
                }),
                n.captureEvent(r, {
                    originalException: t
                }))
            },
            type: "error"
        }),
        this._onErrorHandlerInstalled = !0)
    }
    ,
    p.prototype._installGlobalOnUnhandledRejectionHandler = function() {
        var r = this;
        this._onUnhandledRejectionHandlerInstalled || (Object(s.a)({
            callback: function(e) {
                var t = e;
                try {
                    "reason"in e ? t = e.reason : "detail"in e && "reason"in e.detail && (t = e.detail.reason)
                } catch (e) {}
                var e = Object(a.b)()
                  , n = e.getIntegration(p)
                  , i = t && !0 === t.__sentry_own_request__;
                if (!n || Object(d.b)() || i)
                    return !0;
                n = e.getClient(),
                i = Object(c.i)(t) ? r._eventFromRejectionWithPrimitive(t) : Object(l.c)(t, void 0, {
                    attachStacktrace: n && n.getOptions().attachStacktrace,
                    rejection: !0
                });
                i.level = o.a.Error,
                Object(u.a)(i, {
                    handled: !1,
                    type: "onunhandledrejection"
                }),
                e.captureEvent(i, {
                    originalException: t
                })
            },
            type: "unhandledrejection"
        }),
        this._onUnhandledRejectionHandlerInstalled = !0)
    }
    ,
    p.prototype._eventFromIncompleteOnError = function(e, t, n, i) {
        var r, e = Object(c.e)(e) ? e.message : e, o = (Object(c.k)(e) && (o = e.match(/^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i)) && (r = o[1],
        e = o[2]),
        {
            exception: {
                values: [{
                    type: r || "Error",
                    value: e
                }]
            }
        });
        return this._enhanceEventWithInitialFrame(o, t, n, i)
    }
    ,
    p.prototype._eventFromRejectionWithPrimitive = function(e) {
        return {
            exception: {
                values: [{
                    type: "UnhandledRejection",
                    value: "Non-Error promise rejection captured with value: " + String(e)
                }]
            }
        }
    }
    ,
    p.prototype._enhanceEventWithInitialFrame = function(e, t, n, i) {
        e.exception = e.exception || {},
        e.exception.values = e.exception.values || [],
        e.exception.values[0] = e.exception.values[0] || {},
        e.exception.values[0].stacktrace = e.exception.values[0].stacktrace || {},
        e.exception.values[0].stacktrace.frames = e.exception.values[0].stacktrace.frames || [];
        i = isNaN(parseInt(i, 10)) ? void 0 : i,
        n = isNaN(parseInt(n, 10)) ? void 0 : n,
        t = Object(c.k)(t) && 0 < t.length ? t : Object(u.f)();
        return 0 === e.exception.values[0].stacktrace.frames.length && e.exception.values[0].stacktrace.frames.push({
            colno: i,
            filename: t,
            function: "?",
            in_app: !0,
            lineno: n
        }),
        e
    }
    ,
    p.id = "GlobalHandlers",
    p);
    function p(e) {
        this.name = p.id,
        this._onErrorHandlerInstalled = !1,
        this._onUnhandledRejectionHandlerInstalled = !1,
        this._options = Object(i.a)({
            onerror: !0,
            onunhandledrejection: !0
        }, e)
    }
}
, function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
        return u
    });
    var r = n(0)
      , i = n(36)
      , o = n(6)
      , a = n(2)
      , s = n(28)
      , c = n(24)
      , u = (l.prototype.setupOnce = function() {
        Object(i.b)(function(e, t) {
            var n = Object(o.b)().getIntegration(l);
            return n ? n._handler(e, t) : e
        })
    }
    ,
    l.prototype._handler = function(e, t) {
        return e.exception && e.exception.values && t && Object(a.g)(t.originalException, Error) && (t = this._walkErrorTree(t.originalException, this._key),
        e.exception.values = Object(r.e)(t, e.exception.values)),
        e
    }
    ,
    l.prototype._walkErrorTree = function(e, t, n) {
        var i;
        return void 0 === n && (n = []),
        !Object(a.g)(e[t], Error) || n.length + 1 >= this._limit ? n : (i = Object(c.a)(e[t]),
        i = Object(s.c)(i),
        this._walkErrorTree(e[t], t, Object(r.e)([i], n)))
    }
    ,
    l.id = "LinkedErrors",
    l);
    function l(e) {
        void 0 === e && (e = {}),
        this.name = l.id,
        this._key = e.key || "cause",
        this._limit = e.limit || 5
    }
}
, function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
        return r
    });
    var o = n(0)
      , i = n(36)
      , a = n(6)
      , t = n(3)
      , s = Object(t.e)()
      , r = (c.prototype.setupOnce = function() {
        Object(i.b)(function(e) {
            var t, n, i, r;
            return Object(a.b)().getIntegration(c) && (s.navigator || s.location || s.document) ? (t = (null == (t = e.request) ? void 0 : t.url) || (null == (t = s.location) ? void 0 : t.href),
            r = (s.document || {}).referrer,
            n = (s.navigator || {}).userAgent,
            i = Object(o.a)(Object(o.a)(Object(o.a)({}, null == (i = e.request) ? void 0 : i.headers), r && {
                Referer: r
            }), n && {
                "User-Agent": n
            }),
            r = Object(o.a)(Object(o.a)({}, t && {
                url: t
            }), {
                headers: i
            }),
            Object(o.a)(Object(o.a)({}, e), {
                request: r
            })) : e
        })
    }
    ,
    c.id = "UserAgent",
    c);
    function c() {
        this.name = c.id
    }
}
, function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
        return o
    });
    var i = n(6)
      , r = n(12);
    function o(e, t) {
        !0 === t.debug && r.a.enable();
        var n = Object(i.b)()
          , e = new e(t);
        n.bindClient(e)
    }
}
, function(e, t, o) {
    "use strict";
    !function(n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }),
        t.UserAuth = void 0;
        var i = o(16);
        function r(e) {
            var t = this;
            this.onLoginSucess = null,
            this.onLoginError = null,
            this.onRegisterSuccess = null,
            this.onRegisterError = null,
            this.loginSuccess = function(e) {
                e.token && (e.user.token = e.token),
                window.userModel = e.user,
                window.ilovepdfConfig && (r.updateUserMenu(e.content),
                r.updateUser(e.user)),
                null === t.onLoginSucess || "function" != typeof t.onLoginSucess && "object" != typeof t.onLoginSucess || t.onLoginSucess(e.user)
            }
            ,
            this.registerSuccess = function(e) {
                r.updateUserMenu(e.content),
                r.updateUser(e.user),
                e.token && (e.user.token = e.token),
                n(".user-menu__item--premium").remove(),
                r.sendGA_registered(t.runningFrom),
                "function" == typeof t.onRegisterSuccess && t.onRegisterSuccess(e)
            }
            ,
            this.registerError = function(e) {
                "function" == typeof t.onRegisterError && t.onRegisterError(e)
            }
            ,
            Object.assign(this, e),
            this.userModel = new i.UserModel
        }
        r.initActions = function() {
            n(".logout").click(function(e) {
                e.preventDefault(),
                i.UserModel.logout()
            })
        }
        ,
        r.sendGA_registered = function(e) {
            window.ev("send", "event", "user", "registered", e),
            window.ev("event", "sign_up", {
                mode: e
            })
        }
        ,
        r.prototype.login = function(t) {
            var n = this;
            (t = void 0 === t ? null : t) || this.extraLoginParams && this.extraLoginParams.forEach(function(e) {
                t.push(e)
            }),
            this.userModel.login(t).then(this.loginSuccess, function(e) {
                return n.loginError(e.responseJSON)
            })
        }
        ,
        r.prototype.sendResetPasswordEmail = function(e) {
            return this.userModel.sendResetPasswordEmail(e)
        }
        ,
        r.prototype.loginError = function(e) {
            "function" == typeof this.onLoginError && this.onLoginError(e)
        }
        ,
        r.updateUser = function(e) {
            window.userModel = e,
            window.ilovepdfConfig && (window.ilovepdfConfig.user = e),
            i.UserModel.updateUser(e),
            r.initActions()
        }
        ,
        r.updateUserMenu = function(e) {
            var t, n = document.querySelector(".header .actions");
            n && (t = n.querySelectorAll(":scope > a"),
            n.querySelector(".avatar") || (t.forEach(function(e) {
                e.remove()
            }),
            n.innerHTML = e + n.innerHTML))
        }
        ,
        r.prototype.register = function(e) {
            e = this.userModel.register(e);
            return e.then(this.registerSuccess, this.registerError),
            e
        }
        ,
        r.sendEventUserAuth = function() {
            var e = new CustomEvent("userAuth");
            window.dispatchEvent(e)
        }
        ,
        t.UserAuth = r
    }
    .call(this, o(1))
}
, function(e, t, n) {
    "use strict";
    var i, r;
    n.d(t, "a", function() {
        return i
    }),
    (n = i = i || {}).Unknown = "unknown",
    n.Skipped = "skipped",
    n.Success = "success",
    n.RateLimit = "rate_limit",
    n.Invalid = "invalid",
    n.Failed = "failed",
    (r = i = i || {}).fromHttpCode = function(e) {
        return 200 <= e && e < 300 ? r.Success : 429 === e ? r.RateLimit : 400 <= e && e < 500 ? r.Invalid : 500 <= e ? r.Failed : r.Unknown
    }
}
, function(e, l, d) {
    "use strict";
    !function(t) {
        var i, e, n = this && this.__extends || (i = function(e, t) {
            return (i = Object.setPrototypeOf || ({
                __proto__: []
            }instanceof Array ? function(e, t) {
                e.__proto__ = t
            }
            : function(e, t) {
                for (var n in t)
                    t.hasOwnProperty(n) && (e[n] = t[n])
            }
            ))(e, t)
        }
        ,
        function(e, t) {
            function n() {
                this.constructor = e
            }
            i(e, t),
            e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype,
            new n)
        }
        ), r = (Object.defineProperty(l, "__esModule", {
            value: !0
        }),
        l.TemporaryDialog = void 0,
        d(8)), o = d(25), a = d(80), s = (e = a.Dialog,
        n(c, e),
        c);
        function c() {
            return null !== e && e.apply(this, arguments) || this
        }
        function u(e) {
            var n = this;
            void 0 === e && (e = {}),
            this.isShown = !1,
            this.setTemplate = function(e, t) {
                return void 0 === t && (t = null),
                n.contentBuilderFn = null,
                n.template = e,
                n.onTemplateRenderFn = t,
                n
            }
            ,
            this.show = function() {
                var e;
                if (!n.isShown)
                    return t(".modal:visible").removeAttr("tabindex"),
                    (e = new s(n.dialogProps)).addEventListener("closed", function() {
                        n.currentDialog = null,
                        n.dispatchEvent(new r.IloveEvent("closed"))
                    }),
                    e.addEventListener("hidden", function() {
                        n.isShown = !1,
                        e.destroy(),
                        n.dispatchEvent(new r.IloveEvent("hidden"))
                    }),
                    e.addEventListener("shown", function() {
                        n.dispatchEvent(new r.IloveEvent("shown"))
                    }),
                    n.fillDialog(e),
                    (n.currentDialog = e).show(),
                    n.isShown = !0,
                    e
            }
            ,
            this.close = function() {
                n.currentDialog && (n.currentDialog.close(),
                n.currentDialog = null)
            }
            ,
            this.setContentBuilder = function(e) {
                return n.template = null,
                n.onTemplateRenderFn = null,
                n.contentBuilderFn = e,
                n
            }
            ,
            this.eventEmitter = new o.ILoveEventEmitter,
            this.dialogProps = e
        }
        l.TemporaryDialog = s,
        u.prototype.isClosedOrInProcessOfClosing = function() {
            return !this.currentDialog || this.currentDialog.isClosedOrInProcessOfClosing()
        }
        ,
        u.prototype.fillDialog = function(e) {
            if (this.contentBuilderFn)
                e.setContent(this.contentBuilderFn());
            else {
                if (!this.template)
                    throw "Unknown DisposableDialog creation mechanism";
                var t;
                this.template.content ? (t = this.template.content.cloneNode(!0),
                e.domRoot.appendChild(t)) : (this.template,
                e.domRoot.innerHTML = this.template.innerHTML),
                this.onTemplateRenderFn && this.onTemplateRenderFn(e.domRoot)
            }
        }
        ,
        u.prototype.dispatchEvent = function(e) {
            return this.eventEmitter.dispatchEvent(e)
        }
        ,
        u.prototype.addEventListener = function(e, t) {
            return this.eventEmitter.addEventListener(e, t)
        }
        ,
        Object.defineProperty(u.prototype, "domRoot", {
            get: function() {
                var e;
                return null == (e = this.currentDialog) ? void 0 : e.domRoot
            },
            enumerable: !1,
            configurable: !0
        }),
        l.default = u
    }
    .call(this, d(1))
}
, function(e, n, o) {
    "use strict";
    !function(i) {
        Object.defineProperty(n, "__esModule", {
            value: !0
        }),
        n.Limits = n.REASON = void 0;
        var s, u = o(16), c = o(7), r = o(17), e = ((e = s = n.REASON || (n.REASON = {})).ERROR_FEATURE = "this feature is for premium only",
        e.ERROR_SIZE = "file size too big",
        e.ERROR_FILES = "too much files",
        e.ERROR_EXTENSION = "invalid filetype",
        e.ERROR_PAGES = "too much pages",
        e.ERROR_PXSIZE = "file pixels too big",
        t.prototype.getTool = function() {
            return this.concreteTool || (this.tool == this.subtool ? this.tool : -1 !== this.tool.indexOf("image") && -1 === this.subtool.indexOf("image") ? this.tool.replace("image", this.subtool) : this.subtool)
        }
        ,
        t.prototype.addIgnoredFile = function(e) {
            this.ignored.push(e)
        }
        ,
        t.prototype.getIgnoredFiles = function() {
            return this.ignored
        }
        ,
        t.prototype.getLimitedFiles = function() {
            return this.files.limited
        }
        ,
        t.prototype.getLimitedFilenames = function() {
            var t = this
              , e = this.getLimitedFiles()
              , n = [];
            return e.forEach(function(e) {
                var e = t.files.getFile(e);
                e && (e = e.name.substring(0, 20) + (20 < e.name.length ? "..." : ""),
                n.push(e))
            }),
            n
        }
        ,
        t.prototype.isIgnored = function(e) {
            return -1 != this.ignored.indexOf(e)
        }
        ,
        t.prototype.isLimited = function(e) {
            return -1 !== this.files.limited.indexOf(e)
        }
        ,
        t.prototype.setFileLimits = function() {
            var n, i, r, o, a = this, e = (this.fileLimits = window.ilovepdfConfig.fileLimits,
            u.UserModel.get());
            e && 1 == e.premium && (this.fileLimits = e.limits),
            this.files.resetLimitedFiles(),
            this.checkHasLimits() && (r = i = n = 0,
            o = !1,
            this.files.files.forEach(function(e) {
                var t;
                !1 === o ? (n++,
                e.size && (i += parseInt(e.size)),
                e.file && e.file.numPages && (r += e.file.numPages),
                t = e.width * e.height,
                null !== a.checkFileLimits(i, n, r, t) && (o = !0,
                a.files.limitFile(e.id))) : a.files.limitFile(e.id)
            }))
        }
        ,
        t.prototype.checkFileLimits = function(e, t, n, i) {
            void 0 === t && (t = null),
            void 0 === n && (n = null),
            void 0 === i && (i = null),
            e = (e = void 0 === e ? null : e) || this.files.getFileSizeNotIgnored(),
            t = t || this.files.countNotIgnored(),
            n = n || this.files.getFilePagesNotIgnored(),
            i = i || this.files.getFilePxsizeNotIgnored(),
            this.fileLimits = window.ilovepdfConfig.fileLimits;
            var r, o, a, s, c = u.UserModel.get();
            if (c && 1 == c.premium && (this.fileLimits = c.limits),
            this.checkHasLimits()) {
                if (null !== (r = this.checkSizeLimit(e)) && this.hasSurpasedLimits(r))
                    return r;
                if (null !== (o = this.checkPagesLimit(n)) && this.hasSurpasedLimits(o))
                    return o;
                if (null !== (a = this.checkFilesLimit(t)) && this.hasSurpasedLimits(a))
                    return a;
                if (null !== (s = this.checkPxsizeLimit(i)) && this.hasSurpasedLimits(s))
                    return s
            }
            return r || o || a || s || null
        }
        ,
        t.prototype.resetEventSent = function() {
            this.eventSent = !1
        }
        ,
        t.prototype.checkHasLimits = function(e) {
            
            try{
                return void 0 === e && (e = null),
                this.fileLimits[this.concreteTool] ? null == e || this.fileLimits[this.concreteTool].hasOwnProperty(e) : null
            }catch(er){
                console.log(er)
                return null;
            }
            
        }
        ,
        t.prototype.checkSizeLimit = function(e) {
            return (e = (e = void 0 === e ? null : e) || this.files.getFileSizeNotIgnored()) > 1024 * parseInt(this.fileLimits[this.concreteTool].mb) * 1024 ? (e = Math.floor(e / 1024 / 1024),
            !0 !== this.eventSent && 0 == i(".download").length && (this.eventSent = !0,
            window.ev("sendOnce", "event", "limits", "filesize-exceeded", this.concreteTool, e),
            window.ev("eventOnce", "limit", {
                reason: "filesize",
                tool: this.concreteTool,
                quantity: e
            })),
            s.ERROR_SIZE) : null
        }
        ,
        t.prototype.checkFilesLimit = function(e) {
            return (e = (e = void 0 === e ? null : e) || this.files.countNotIgnored()) > this.fileLimits[this.concreteTool].files ? (!0 !== this.eventSent && 0 == i(".download").length && (this.eventSent = !0,
            window.ev) && (window.ev("sendOnce", "event", "limits", "filenumber-exceeded", this.concreteTool, e),
            window.ev("eventOnce", "limit", {
                reason: "filenumber",
                tool: this.concreteTool,
                quantity: e
            })),
            s.ERROR_FILES) : null
        }
        ,
        t.prototype.checkPagesLimit = function(e) {
            return e = (e = void 0 === e ? null : e) || this.files.getFilePagesNotIgnored(),
            this.fileLimits[this.concreteTool].pages && e > this.fileLimits[this.concreteTool].pages ? (!0 !== this.eventSent && 0 == i(".download").length && (this.eventSent = !0,
            window.ev("sendOnce", "event", "limits", "pages-exceeded", this.concreteTool, e),
            window.ev("eventOnce", "limit", {
                reason: "pages",
                tool: this.concreteTool,
                quantity: e
            })),
            s.ERROR_PAGES) : null
        }
        ,
        t.prototype.checkPxsizeLimit = function(e) {
            return e = e || this.files.getFilePxsizeNotIgnored(),
            this.fileLimits[this.concreteTool].pxsize && e > this.fileLimits[this.concreteTool].pxsize ? (!0 !== this.eventSent && 0 == i(".download").length && (this.eventSent = !0,
            window.ev("sendOnce", "event", "limits", "pxsize-exceeded", this.concreteTool, e),
            window.ev("eventOnce", "limit", {
                reason: "pxsize",
                tool: this.concreteTool,
                quantity: e
            })),
            s.ERROR_PXSIZE) : null
        }
        ,
        t.prototype.findNextLevelLimit = function(e, t, n) {
            for (var i in this.allFileLimits)
                if (this.allFileLimits.hasOwnProperty(i)) {
                    var r = this.allFileLimits[i];
                    if (r.hasOwnProperty(e)) {
                        r = r[e];
                        if (r.hasOwnProperty(t) && r[t] >= n)
                            return i
                    }
                }
            return !1
        }
        ,
        t.prototype.getPremiumLimitByTool = function(e, t) {
            return this.allFileLimits.premium_limits[e][t]
        }
        ,
        t.prototype.getLevelLimit = function(e, t, n) {
            return 0 == n && (n = this.LEVEL_PREMIUM),
            this.allFileLimits[n][e][t]
        }
        ,
        t.prototype.makeErrorData = function(e, t, n, i, r) {
            var o = this;
            function a(e, t) {
                return 1 == e ? "files" == t ? c.Lang.t("1 file") : c.Lang.t("1 mb") : ("mb" == t && 1e3 <= e && (e /= 1e3,
                t = "Gb"),
                c.Lang.t("${limit} " + t.toLowerCase(), {
                    limit: e
                }))
            }
            function s(e) {
                return e == o.LEVEL_REGISTERED ? c.Lang.t("registeredLevel") : e == o.LEVEL_PREMIUM ? c.Lang.t("premiumLevel") : c.Lang.t("publicLevel")
            }
            return {
                currentLimit: a(t, e),
                currentLevel: s(n).ucFirst(),
                nextLimit: a(i, e),
                nextLevel: s(r).ucFirst()
            }
        }
        ,
        t.prototype.getLimitData = function(e, t) {
            return 1 == e ? "files" == t ? c.Lang.t("1 file") : "pages" == t ? c.Lang.t("1 page") : c.Lang.t("1 mb") : ("mb" == t && 1e3 <= e && (e /= 1e3,
            t = "Gb"),
            c.Lang.t("${limit} " + t.toLowerCase(), {
                limit: e
            }))
        }
        ,
        t.prototype.limitErrorText = function(e) {
            return c.Lang.t("limitTaskMsg", e)
        }
        ,
        t.prototype.setLimit = function(e) {
            this.err = e;
            var t, n = this.getNextLimit(e);
            return 0 == n.nextLevel ? (t = this.getPremiumLimitByTool(this.concreteTool, n.name),
            0 == i("#superlimit").length && (e = r.Tools.modalView({
                id: "superlimit",
                title: "",
                content: ""
            }),
            (e = i(e)).find(".modal-dialog").addClass("modal-dialog-centered"),
            e.appendTo(i("body"))),
            setTimeout(function() {
                "files" == n.name ? (i("#superlimit .modal-title").html(c.Lang.t("File number exceeded")),
                i("#superlimit .modal-body").html(c.Lang.t("Sorry, we are not ready for that.") + "<br>\n                         \x3c!--" + c.Lang.t("limitFiles", {
                    files: t
                }) + "<br>--\x3e\n                         " + c.Lang.t("superlimitWhoa") + "<br>\n                         " + c.Lang.t("superlimitDownload"))) : (i("#superlimit .modal-title").html(c.Lang.t("File size exceeded")),
                i("#superlimit .modal-body").html(c.Lang.t("Sorry, we are not ready for that.") + "<br>\n                         \x3c!--" + c.Lang.t("limitMb", {
                    mb: t
                }) + "<br>--\x3e\n                         " + c.Lang.t("superlimitWhoa") + "<br>\n                         " + c.Lang.t("superlimitDownload"))),
                i("#superlimit").modal("toggle")
            }, 500),
            null) : n.nextLevel == this.LEVEL_PUBLIC ? null : {
                limitName: n.name,
                limitValue: n.currentValue,
                nextLevelLimit: n.nextLevel,
                nextLimit: n.nextValue
            }
        }
        ,
        t.prototype.getCurrentLimitsLevel = function() {
            var e = this.LEVEL_PUBLIC;
            return e = u.UserModel.isUser() && (e = this.LEVEL_REGISTERED,
            u.UserModel.isPremium()) ? this.LEVEL_PREMIUM : e
        }
        ,
        t.prototype.getLimitTexts = function() {
            var e, t, n = this.checkFileLimits(), i = [this.fileLimits[this.getTool()], this.allFileLimits.premium_limits[this.getTool()]], r = i[0], o = i[1], a = null;
            switch (n) {
            case s.ERROR_FILES:
                e = c.Lang.t("limitFree") + " " + c.Lang.t("limitFiles", {
                    n: r.files
                }),
                t = c.Lang.t("limitPremium") + " " + c.Lang.t("limitFiles", {
                    n: o.files
                }),
                a = "files";
                break;
            case s.ERROR_SIZE:
                e = c.Lang.t("limitFree") + " " + c.Lang.t("limitSize", {
                    n: r.mb
                }),
                t = c.Lang.t("limitPremium") + " " + c.Lang.t("limitSize", {
                    n: o.mb
                }),
                a = "size";
                break;
            case s.ERROR_PAGES:
                e = c.Lang.t("limitFree") + " " + c.Lang.t("limitPages", {
                    n: r.pages
                }),
                t = c.Lang.t("limitPremium") + " " + c.Lang.t("limitPages", {
                    n: o.pages
                }),
                a = "pages";
                break;
            case s.ERROR_PXSIZE:
                e = c.Lang.t("limitFree") + " " + c.Lang.t("limitPxsize", {
                    n: r.pxsize
                }),
                t = c.Lang.t("limitPremium") + " " + c.Lang.t("limitPxsize", {
                    n: o.pxsize
                }),
                a = "pxsize"
            }
            return {
                current: e,
                premium: t,
                limit: a
            }
        }
        ,
        t.prototype.getNextLimit = function(e, t) {
            var n, i;
            switch (null == (t = void 0 === t ? null : t) && (t = this.getTool()),
            e) {
            case s.ERROR_SIZE:
                n = "mb",
                i = this.files.getFileSizeNotIgnored() / 1024 / 1024;
                break;
            case s.ERROR_FILES:
                n = "files",
                i = this.files.countNotIgnored();
                break;
            case s.ERROR_PAGES:
                n = "pages",
                i = this.files.getFilePagesNotIgnored();
                break;
            case s.ERROR_PXSIZE:
                n = "pxsize",
                i = this.files.getFilePxsizeNotIgnored()
            }
            return {
                name: n,
                currentValue: i,
                nextValue: 0 != (e = this.findNextLevelLimit(t, n, i)) && this.getLevelLimit(t, n, e),
                nextLevel: e
            }
        }
        ,
        t.prototype.getNextLevelLimit = function(e) {
            return this.getNextLimit(e).nextLevel
        }
        ,
        t.prototype.hasSurpasedLimits = function(e) {
            return !1 === this.getNextLevelLimit(e)
        }
        ,
        t.prototype.sendEventLimitsChanged = function() {
            var e = new CustomEvent("limitsChanged");
            window.dispatchEvent(e)
        }
        ,
        t.prototype.canContinueWithoutPremium = function() {
            for (var e = !0, t = 0; t < this.minFiles; t++)
                1 == this.files.files[t].limited && (e = !1);
            return e
        }
        ,
        t);
        function t(e) {
            this.minFiles = 1,
            this.LEVEL_PREMIUM = "premium_limits",
            this.LEVEL_REGISTERED = "registered_limits",
            this.LEVEL_PUBLIC = "limits",
            this.err = null,
            this.files = null,
            this.fileLimits = null,
            this.allFileLimits = null,
            this.tool = null,
            this.subtool = null,
            this.ignored = [],
            this.userLevel = "public",
            Object.assign(this, e),
            this.concreteTool = this.getTool()
        }
        n.Limits = e
    }
    .call(this, o(1))
}
, function(e, t, n) {
    "use strict";
    var i = this && this.__awaiter || function(e, a, s, c) {
        return new (s = s || Promise)(function(n, t) {
            function i(e) {
                try {
                    o(c.next(e))
                } catch (e) {
                    t(e)
                }
            }
            function r(e) {
                try {
                    o(c.throw(e))
                } catch (e) {
                    t(e)
                }
            }
            function o(e) {
                var t;
                e.done ? n(e.value) : ((t = e.value)instanceof s ? t : new s(function(e) {
                    e(t)
                }
                )).then(i, r)
            }
            o((c = c.apply(e, a || [])).next())
        }
        )
    }
      , c = this && this.__generator || function(i, r) {
        var o, a, s, c = {
            label: 0,
            sent: function() {
                if (1 & s[0])
                    throw s[1];
                return s[1]
            },
            trys: [],
            ops: []
        }, e = {
            next: t(0),
            throw: t(1),
            return: t(2)
        };
        return "function" == typeof Symbol && (e[Symbol.iterator] = function() {
            return this
        }
        ),
        e;
        function t(n) {
            return function(e) {
                var t = [n, e];
                if (o)
                    throw new TypeError("Generator is already executing.");
                for (; c; )
                    try {
                        if (o = 1,
                        a && (s = 2 & t[0] ? a.return : t[0] ? a.throw || ((s = a.return) && s.call(a),
                        0) : a.next) && !(s = s.call(a, t[1])).done)
                            return s;
                        switch (a = 0,
                        (t = s ? [2 & t[0], s.value] : t)[0]) {
                        case 0:
                        case 1:
                            s = t;
                            break;
                        case 4:
                            return c.label++,
                            {
                                value: t[1],
                                done: !1
                            };
                        case 5:
                            c.label++,
                            a = t[1],
                            t = [0];
                            continue;
                        case 7:
                            t = c.ops.pop(),
                            c.trys.pop();
                            continue;
                        default:
                            if (!(s = 0 < (s = c.trys).length && s[s.length - 1]) && (6 === t[0] || 2 === t[0])) {
                                c = 0;
                                continue
                            }
                            if (3 === t[0] && (!s || t[1] > s[0] && t[1] < s[3]))
                                c.label = t[1];
                            else if (6 === t[0] && c.label < s[1])
                                c.label = s[1],
                                s = t;
                            else {
                                if (!(s && c.label < s[2])) {
                                    s[2] && c.ops.pop(),
                                    c.trys.pop();
                                    continue
                                }
                                c.label = s[2],
                                c.ops.push(t)
                            }
                        }
                        t = r.call(i, c)
                    } catch (e) {
                        t = [6, e],
                        a = 0
                    } finally {
                        o = s = 0
                    }
                if (5 & t[0])
                    throw t[1];
                return {
                    value: t[0] ? t[1] : void 0,
                    done: !0
                }
            }
        }
    }
      , r = (Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.AjaxTemplate = void 0,
    u.load = function(a, s) {
        return void 0 === s && (s = {}),
        i(this, void 0, void 0, function() {
            var n, t, i, r, o;
            return c(this, function(e) {
                return s = s || {},
                n = new XMLHttpRequest,
                i = t = !1,
                r = function(e) {
                    return !t && !i && 200 === e.status
                }
                ,
                o = this.buildQueryParams(s),
                o = o ? a + "?" + o : a,
                n.open("GET", u.getLangBaseUrl() + "/" + o, !0),
                n.setRequestHeader("X-Requested-With", "XMLHttpRequest"),
                n.setRequestHeader("Accept", "text/html"),
                n.ontimeout = function() {
                    return t = !0
                }
                ,
                n.onerror = function() {
                    return i = !0
                }
                ,
                [2, new Promise(function(e, t) {
                    n.onreadystatechange = function() {
                        4 === n.readyState && (r(n) ? e(n.responseText) : t(n.response))
                    }
                    ,
                    n.send()
                }
                )]
            })
        })
    }
    ,
    u.getLangBaseUrl = function() {
        var e = window.lang;
        return "en-US" == e ? "/" + u.BASE_URL : "/" + e + "/" + u.BASE_URL
    }
    ,
    u.buildQueryParams = function(e) {
        if (0 === Object.keys(e).length)
            return null;
        var t, n = [];
        for (t in e)
            n.push(t + "=" + encodeURIComponent(e[t]));
        return n.join("&")
    }
    ,
    u.BASE_URL = "templates",
    u);
    function u() {}
    t.AjaxTemplate = r
}
, function(e, t, n) {
    "use strict";
    function r() {}
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.FormDataHelper = void 0,
    r.buildFormData = function(t, n, i) {
        void 0 === i && (i = null),
        !n || "object" != typeof n || n instanceof Date || n instanceof File ? t.append(i, null == n ? "" : n) : Object.keys(n).forEach(function(e) {
            r.buildFormData(t, n[e], null != i ? i + "[" + e + "]" : e)
        })
    }
    ,
    r.jsonToFormData = function(e) {
        var t = new FormData;
        return r.buildFormData(t, e),
        t
    }
    ,
    t.FormDataHelper = r
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.checkPreloadIsNeeded = t.get_browser = t.isSafari = t.isIE11 = t.isEdgeBrowser = void 0;
    var i = n(79);
    function r(e) {
        return void 0 === e && (e = i.getUserAgent()),
        /^((?!chrome|android|crios).)*safari/i.test(e)
    }
    function o() {
        var e, t = navigator.userAgent, n = t.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
        return /trident/i.test(n[1]) ? {
            name: "IE",
            version: (e = /\brv[ :]+(\d+)/g.exec(t) || [])[1] || ""
        } : "Chrome" === n[1] && null != (e = t.match(/\bOPR|Edge\/(\d+)/)) ? {
            name: "Opera",
            version: e[1]
        } : (n = n[2] ? [n[1], n[2]] : [navigator.appName, navigator.appVersion, "-?"],
        null != (e = t.match(/version\/(\d+)/i)) && n.splice(1, 1, e[1]),
        {
            name: n[0],
            version: n[1]
        })
    }
    t.isEdgeBrowser = function(e) {
        return void 0 === e && (e = i.getUserAgent()),
        /Edge/i.test(e)
    }
    ,
    t.isIE11 = function() {
        return !!window.MSInputMethodContext && !!document.documentMode
    }
    ,
    t.isSafari = r,
    t.get_browser = o,
    t.checkPreloadIsNeeded = function() {
        var e;
        return !(!i.isIos() && !r()) || "Chrome" == (e = o()).name && e.version <= 73 || "Firefox" == e.name && e.version <= 94 || "Edge" == e.name && e.version <= 18 || "Yandex" == e.name
    }
}
, function(e, t, n) {
    var i, r;
    void 0 !== (n = "function" == typeof (i = r = function() {
        function s() {
            for (var e = 0, t = {}; e < arguments.length; e++) {
                var n, i = arguments[e];
                for (n in i)
                    t[n] = i[n]
            }
            return t
        }
        function u(e) {
            return e.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent)
        }
        return function e(c) {
            function a() {}
            function n(e, t, n) {
                if ("undefined" != typeof document) {
                    "number" == typeof (n = s({
                        path: "/"
                    }, a.defaults, n)).expires && (n.expires = new Date(+new Date + 864e5 * n.expires)),
                    n.expires = n.expires ? n.expires.toUTCString() : "";
                    try {
                        var i = JSON.stringify(t);
                        /^[\{\[]/.test(i) && (t = i)
                    } catch (e) {}
                    t = c.write ? c.write(t, e) : encodeURIComponent(String(t)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent),
                    e = encodeURIComponent(String(e)).replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent).replace(/[\(\)]/g, escape);
                    var r, o = "";
                    for (r in n)
                        n[r] && (o += "; " + r,
                        !0 !== n[r]) && (o += "=" + n[r].split(";")[0]);
                    return document.cookie = e + "=" + t + o
                }
            }
            function t(e, t) {
                if ("undefined" != typeof document) {
                    for (var n = {}, i = document.cookie ? document.cookie.split("; ") : [], r = 0; r < i.length; r++) {
                        var o = i[r].split("=")
                          , a = o.slice(1).join("=");
                        t || '"' !== a.charAt(0) || (a = a.slice(1, -1));
                        try {
                            var s = u(o[0])
                              , a = (c.read || c)(a, s) || u(a);
                            if (t)
                                try {
                                    a = JSON.parse(a)
                                } catch (e) {}
                            if (n[s] = a,
                            e === s)
                                break
                        } catch (e) {}
                    }
                    return e ? n[e] : n
                }
            }
            return a.set = n,
            a.get = function(e) {
                return t(e, !1)
            }
            ,
            a.getJSON = function(e) {
                return t(e, !0)
            }
            ,
            a.remove = function(e, t) {
                n(e, "", s(t, {
                    expires: -1
                }))
            }
            ,
            a.defaults = {},
            a.withConverter = e,
            a
        }(function() {})
    }
    ) ? i.call(t, n, t, e) : i) && (e.exports = n),
    e.exports = r()
}
, function(e, t, n) {
    "use strict";
    var i, r, o = this && this.__extends || (i = function(e, t) {
        return (i = Object.setPrototypeOf || ({
            __proto__: []
        }instanceof Array ? function(e, t) {
            e.__proto__ = t
        }
        : function(e, t) {
            for (var n in t)
                t.hasOwnProperty(n) && (e[n] = t[n])
        }
        ))(e, t)
    }
    ,
    function(e, t) {
        function n() {
            this.constructor = e
        }
        i(e, t),
        e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype,
        new n)
    }
    ), a = this && this.__awaiter || function(e, a, s, c) {
        return new (s = s || Promise)(function(n, t) {
            function i(e) {
                try {
                    o(c.next(e))
                } catch (e) {
                    t(e)
                }
            }
            function r(e) {
                try {
                    o(c.throw(e))
                } catch (e) {
                    t(e)
                }
            }
            function o(e) {
                var t;
                e.done ? n(e.value) : ((t = e.value)instanceof s ? t : new s(function(e) {
                    e(t)
                }
                )).then(i, r)
            }
            o((c = c.apply(e, a || [])).next())
        }
        )
    }
    , s = this && this.__generator || function(i, r) {
        var o, a, s, c = {
            label: 0,
            sent: function() {
                if (1 & s[0])
                    throw s[1];
                return s[1]
            },
            trys: [],
            ops: []
        }, e = {
            next: t(0),
            throw: t(1),
            return: t(2)
        };
        return "function" == typeof Symbol && (e[Symbol.iterator] = function() {
            return this
        }
        ),
        e;
        function t(n) {
            return function(e) {
                var t = [n, e];
                if (o)
                    throw new TypeError("Generator is already executing.");
                for (; c; )
                    try {
                        if (o = 1,
                        a && (s = 2 & t[0] ? a.return : t[0] ? a.throw || ((s = a.return) && s.call(a),
                        0) : a.next) && !(s = s.call(a, t[1])).done)
                            return s;
                        switch (a = 0,
                        (t = s ? [2 & t[0], s.value] : t)[0]) {
                        case 0:
                        case 1:
                            s = t;
                            break;
                        case 4:
                            return c.label++,
                            {
                                value: t[1],
                                done: !1
                            };
                        case 5:
                            c.label++,
                            a = t[1],
                            t = [0];
                            continue;
                        case 7:
                            t = c.ops.pop(),
                            c.trys.pop();
                            continue;
                        default:
                            if (!(s = 0 < (s = c.trys).length && s[s.length - 1]) && (6 === t[0] || 2 === t[0])) {
                                c = 0;
                                continue
                            }
                            if (3 === t[0] && (!s || t[1] > s[0] && t[1] < s[3]))
                                c.label = t[1];
                            else if (6 === t[0] && c.label < s[1])
                                c.label = s[1],
                                s = t;
                            else {
                                if (!(s && c.label < s[2])) {
                                    s[2] && c.ops.pop(),
                                    c.trys.pop();
                                    continue
                                }
                                c.label = s[2],
                                c.ops.push(t)
                            }
                        }
                        t = r.call(i, c)
                    } catch (e) {
                        t = [6, e],
                        a = 0
                    } finally {
                        o = s = 0
                    }
                if (5 & t[0])
                    throw t[1];
                return {
                    value: t[0] ? t[1] : void 0,
                    done: !0
                }
            }
        }
    }
    , c = (Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.AbstractPaymentState = void 0,
    n(21)), u = n(82), p = n(8), n = (r = c.StateBase,
    o(l, r),
    l.prototype.initAbstractPayment = function(n) {
        var i;
        return a(this, void 0, void 0, function() {
            var t = this;
            return s(this, function(e) {
                switch (e.label) {
                case 0:
                    if (this.ctx.canGoToAPreviousState() && this.goToPreviousStateButtonIsVisible() ? (this.dispatchEvent(new p.IloveEvent("disableContentAbandonment")),
                    this.dialogCloseBtn && (this.dialogCloseBtn.style.display = "none")) : this.dialogCloseBtn && (this.dialogCloseBtn.style.display = ""),
                    this.abstractPaymentInited)
                        return [2];
                    if (this.userPayment = n.userPayment || new u.UserPayment,
                    this.abstractPaymentInited = !0,
                    Object.assign(this, n),
                    "gui" === (null == (i = this.paymentInterval) ? void 0 : i.type))
                        switch (this.paymentInterval.gui) {
                        case "radio":
                            break;
                        case "boxes":
                            this.initPaymentIntervalSelectorButtons();
                            break;
                        default:
                            throw "Unknown way to determine paymentInterval '" + this.paymentInterval.type + "'"
                        }
                    return [4, this.initUserPayment(this.userPayment).then(function() {
                        t.userPayment.addEventListener("UserPayment:ActionButtonClicked", t._abstractOnPayButtonClicked),
                        t.userPayment.addEventListener("UserPayment:BeforeExternalAction", function(e) {
                            return t._onExternalPaymentAction("UserPayment:BeforeExternalAction", e)
                        }),
                        t.userPayment.addEventListener("UserPayment:AfterExternalAction", function(e) {
                            return t._onExternalPaymentAction("UserPayment:AfterExternalAction", e)
                        })
                    })];
                case 1:
                    return e.sent(),
                    [2]
                }
            })
        })
    }
    ,
    l.prototype.initAbstractCard = function(n) {
        return a(this, void 0, void 0, function() {
            var t = this;
            return s(this, function(e) {
                switch (e.label) {
                case 0:
                    return this.abstractPaymentInited = !0,
                    Object.assign(this, n),
                    this.userPayment = n.userPayment || new u.UserPayment,
                    [4, this.initUserPayment(this.userPayment).then(function() {
                        t.userPayment.addEventListener("UserPayment:ActionButtonClicked", t._abstractOnPayButtonClicked)
                    })];
                case 1:
                    return e.sent(),
                    [2]
                }
            })
        })
    }
    ,
    Object.defineProperty(l.prototype, "stripeViewParams", {
        get: function() {
            return {
                paymentButtonText: this.paymentProviderProps.find(function(e) {
                    return "stripe" === e.name
                }).paymentButtonText,
                currentPaymentMethod: this.currentPaymentMethod
            }
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(l.prototype, "paypalViewParams", {
        get: function() {
            function e() {
                return !(n.ctx.isTrialEnabledForThisTool() && n.ctx.canUserDoTrial())
            }
            var t, n = this;
            this.paymentProviderProps.find(function(e) {
                return "paypal" === e.name
            });
            switch (this.paymentAction) {
            case "become_premium":
            case "subsc_update":
                t = {
                    actionName: "become_premium" === this.paymentAction ? "PaySubscription" : "UpdateSubscription",
                    actionParams: {
                        subscriptionInterval: function() {
                            return n.selectedPaymentInterval
                        },
                        numUsers: function() {
                            return n.numUsers ? n.numUsers() : n.paymentNumUsersDefault
                        },
                        numDigitalSignatures: function() {
                            return n.numSignatures ? n.numSignatures() : void 0
                        },
                        disableTrial: e
                    }
                };
                break;
            case "pay_package":
                t = {
                    actionName: "PayPackage",
                    actionParams: {
                        packageName: function() {
                            return n.package.name
                        },
                        quantity: function() {
                            return n.package.qty
                        },
                        disableTrial: e
                    }
                };
                break;
            default:
                throw "Unknown paypal paymentAction '" + this.paymentAction + "'"
            }
            return {
                action: t
            }
        },
        enumerable: !1,
        configurable: !0
    }),
    l.prototype._executePaymentAction = function(e, t) {
        var n = this
          , i = this.selectedPaymentProvider
          , r = this.paymentAction
          , o = this.paymentInterval ? this.selectedPaymentInterval : void 0
          , a = this.numUsers ? this.numUsers() : this.paymentNumUsersDefault
          , s = (this.showLoadingScreen(),
        this.userPayment.disableActionButton(i),
        this.dispatchEvent(new p.IloveEvent("disableContentAbandonment")),
        !(this.ctx.isTrialEnabledForThisTool() && this.ctx.canUserDoTrial()))
          , c = this.couponCode ? this.couponCode() : void 0;
        switch (r) {
        case "become_premium":
            l = this.userPayment.paySubscription({
                numUsers: a,
                provider: i,
                subscriptionInterval: o,
                disableTrial: s,
                couponCode: c
            });
            break;
        case "subsc_update":
            var u = this.numSignatures()
              , l = this.userPayment.updateSubscription({
                numSignatures: u,
                numUsers: a,
                provider: i,
                subscriptionInterval: o,
                disableTrial: s,
                couponCode: c
            });
            break;
        case "pay_package":
            var u = this.package.name
              , d = this.package.qty;
            l = this.userPayment.payPackage({
                packageName: u,
                packageQuantity: d,
                provider: i,
                disableTrial: s
            });
            break;
        case "update_card":
            u = this.userPayment.stripeService.view.card;
            l = this.userPayment.updateCard({
                provider: i,
                element: u
            })
        }
        l.then(function(e) {
            return n._abstractOnPaymentSuccess(i, e)
        }),
        l.catch(function(e) {
            return n._abstractOnPaymentFailed(i, e)
        });
        function f(e) {
            n.clearLoadingScreen(),
            n.userPayment.enableActionButton(i),
            n.dispatchEvent(new p.IloveEvent("unsetContentAbandonment"))
        }
        return l.then(f, f),
        l
    }
    ,
    l.prototype.initUserPayment = function(i) {
        var r;
        return a(this, void 0, void 0, function() {
            var t, n;
            return s(this, function(e) {
                switch (e.label) {
                case 0:
                    return (t = this.initializedPaymentProviders).includes("stripe") ? [4, i.mountView("stripe", this.stripeViewMountPoint, this.stripeViewParams)] : [3, 2];
                case 1:
                    e.sent(),
                    e.label = 2;
                case 2:
                    return t.includes("paypal") ? [4, i.mountView("paypal", this.paypalViewMountPoint, this.paypalViewParams)] : [3, 4];
                case 3:
                    e.sent(),
                    e.label = 4;
                case 4:
                    return n = null != (r = null == (r = this.currentPaymentMethod) ? void 0 : r.provider) ? r : this.DEFAULT_SELECTED_PROVIDER_BTN,
                    this.initPaymentProviderSelectorButtons(),
                    this.clickProviderButton(n),
                    [2]
                }
            })
        })
    }
    ,
    Object.defineProperty(l.prototype, "initializedPaymentProviders", {
        get: function() {
            return this.paymentProviderProps.map(function(e) {
                return e.name
            })
        },
        enumerable: !1,
        configurable: !0
    }),
    l.prototype.initPaymentIntervalSelectorButtons = function() {
        var e = this.domStateRoot.querySelectorAll(".payment__interval-selector__select-box")
          , t = function() {
            e.forEach(function(e) {
                return e.setAttribute("data-selected", "false")
            })
        };
        e.forEach(function(e) {
            return e.addEventListener("click", function(e) {
                return e = e.currentTarget,
                t(),
                void e.setAttribute("data-selected", "true")
            })
        })
    }
    ,
    l.prototype.clickProviderButton = function(t) {
        var e = this
          , n = this.domRoot
          , i = (n.querySelector(".payment__provider-views"),
        n.querySelector(".payment__provider-selector"))
          , n = (n.querySelectorAll(".payment__provider-selector .payment__provider-selector__item"),
        Array.from(i.querySelectorAll(".payment__provider-selector__item")))
          , i = (n.forEach(function(e) {
            return e.setAttribute("data-checked", "false")
        }),
        n.find(function(e) {
            return e.dataset.value === t
        }));
        i.setAttribute("data-checked", "true");
        n = i.getAttribute("data-value");
        e.domRoot.querySelectorAll(".payment__provider-views .payment__provider-views__item").forEach(function(e) {
            return e.classList.remove("payment__provider-views__item--appeared")
        }),
        (n = e.domRoot.querySelector('.payment__provider-views .payment__provider-views__item[data-provider-name="' + n + '"]')) && n.classList.add("payment__provider-views__item--appeared")
    }
    ,
    l.prototype.initPaymentProviderSelectorButtons = function() {
        var n = this
          , e = this.domRoot
          , t = e.querySelector(".payment__provider-selector").querySelectorAll(".payment__provider-selector__item")
          , e = e.querySelectorAll(".payment__provider-selector .payment__provider-selector__item")
          , i = (t.forEach(function(t) {
            t.addEventListener("click", function(e) {
                n.clickProviderButton(t.dataset.value)
            })
        }),
        this.initializedPaymentProviders);
        e.forEach(function(e) {
            var t = e.getAttribute("data-value");
            if (!t)
                throw "Provider selector button is missing data-value attribute";
            i.includes(t) || (e.style.display = "none")
        })
    }
    ,
    Object.defineProperty(l.prototype, "stripeViewMountPoint", {
        get: function() {
            var e = this.domRoot.querySelector(".payment__stripe-view");
            if (e)
                return e;
            throw "Mountpoint for Stripe view not found"
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(l.prototype, "paypalViewMountPoint", {
        get: function() {
            var e = this.domRoot.querySelector(".payment__paypal-view");
            if (e)
                return e;
            throw "Mountpoint for Paypal view not found"
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(l.prototype, "selectedPaymentProvider", {
        get: function() {
            return 1 == this.paymentProviderProps.length ? this.paymentProviderProps[0].name : this.domRoot.querySelector(".payment__provider-selector .payment__provider-selector__item[data-checked='true']").getAttribute("data-value")
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(l.prototype, "selectedPaymentInterval", {
        get: function() {
            if ("gui" === this.paymentInterval.type) {
                if ("boxes" === this.paymentInterval.gui)
                    return this.selected_paymentInterval_boxes;
                if ("radio" === this.paymentInterval.gui)
                    return this.selected_paymentInterval_radio
            } else if ("predefined" === this.paymentInterval.type)
                return this.paymentInterval.value;
            throw "Unknown way to determine paymentInterval '" + this.paymentInterval.type + "'"
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(l.prototype, "selected_paymentInterval_radio", {
        get: function() {
            var e = Array.from(this.domRoot.querySelectorAll(".payment__interval-selector [name='paymentInterval']"));
            if (0 === e.length)
                throw "Radio buttons for payment interval not found";
            for (var t = 0; t < e.length; t++)
                if (e[t].checked)
                    return e[t].value;
            return null
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(l.prototype, "selected_paymentInterval_boxes", {
        get: function() {
            var e = this.domStateRoot.querySelector(".payment__interval-selector__select-box[data-selected='true']");
            if (e)
                return e.getAttribute("data-value");
            throw "No selected interval box found"
        },
        enumerable: !1,
        configurable: !0
    }),
    l);
    function l() {
        var n = null !== r && r.apply(this, arguments) || this;
        return n.abstractPaymentInited = !1,
        n.paymentNumUsersDefault = 1,
        n.DEFAULT_SELECTED_PROVIDER_BTN = "stripe",
        n._onExternalPaymentAction = function(e, t) {
            t = t.detail;
            "UserPayment:AfterExternalAction" === e && n._onPaymentSuccess(t.provider, t)
        }
        ,
        n._abstractOnPayButtonClicked = function(e) {
            n._executePaymentAction("payButton", e)
        }
        ,
        n._abstractOnPaymentSuccess = function(e, t) {
            n._onPaymentSuccess(e, t)
        }
        ,
        n._abstractOnPaymentFailed = function(e, t) {
            n.userPayment.notifyPaymentError(e, t, n.paymentAction),
            n._onPaymentFailed(e, t)
        }
        ,
        n
    }
    t.AbstractPaymentState = n
}
, , function(e, t) {
    e.exports = function(e) {
        var t;
        return e.webpackPolyfill || ((t = Object.create(e)).children || (t.children = []),
        Object.defineProperty(t, "loaded", {
            enumerable: !0,
            get: function() {
                return t.l
            }
        }),
        Object.defineProperty(t, "id", {
            enumerable: !0,
            get: function() {
                return t.i
            }
        }),
        Object.defineProperty(t, "exports", {
            enumerable: !0
        }),
        t.webpackPolyfill = 1),
        t
    }
}
, function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
        return u
    });
    var i, t = n(0), r = n(27), o = n(3), a = n(44), s = n(14), n = n(35), c = Object(o.e)(), u = (i = n.a,
    Object(t.b)(l, i),
    l.prototype.sendEvent = function(e) {
        return this._sendRequest(Object(r.a)(e, this._api), e)
    }
    ,
    l.prototype.sendSession = function(e) {
        return this._sendRequest(Object(r.b)(e, this._api), e)
    }
    ,
    l.prototype._sendRequest = function(r, e) {
        var t, o = this;
        return this._isRateLimited(r.type) ? Promise.reject({
            event: e,
            type: r.type,
            reason: "Transport locked till " + this._disabledUntil(r.type) + " due to too many requests.",
            status: 429
        }) : (t = {
            body: r.body,
            method: "POST",
            referrerPolicy: Object(a.d)() ? "origin" : ""
        },
        void 0 !== this.options.fetchParameters && Object.assign(t, this.options.fetchParameters),
        void 0 !== this.options.headers && (t.headers = this.options.headers),
        this._buffer.add(new s.a(function(n, i) {
            c.fetch(r.url, t).then(function(e) {
                var t = {
                    "x-sentry-rate-limits": e.headers.get("X-Sentry-Rate-Limits"),
                    "retry-after": e.headers.get("Retry-After")
                };
                o._handleResponse({
                    requestType: r.type,
                    response: e,
                    headers: t,
                    resolve: n,
                    reject: i
                })
            }).catch(i)
        }
        )))
    }
    ,
    l);
    function l() {
        return null !== i && i.apply(this, arguments) || this
    }
}
, function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
        return o
    });
    var i, t = n(0), r = n(27), a = n(14), n = n(35), o = (i = n.a,
    Object(t.b)(s, i),
    s.prototype.sendEvent = function(e) {
        return this._sendRequest(Object(r.a)(e, this._api), e)
    }
    ,
    s.prototype.sendSession = function(e) {
        return this._sendRequest(Object(r.b)(e, this._api), e)
    }
    ,
    s.prototype._sendRequest = function(r, e) {
        var o = this;
        return this._isRateLimited(r.type) ? Promise.reject({
            event: e,
            type: r.type,
            reason: "Transport locked till " + this._disabledUntil(r.type) + " due to too many requests.",
            status: 429
        }) : this._buffer.add(new a.a(function(t, n) {
            var e, i = new XMLHttpRequest;
            for (e in i.onreadystatechange = function() {
                var e;
                4 === i.readyState && (e = {
                    "x-sentry-rate-limits": i.getResponseHeader("X-Sentry-Rate-Limits"),
                    "retry-after": i.getResponseHeader("Retry-After")
                },
                o._handleResponse({
                    requestType: r.type,
                    response: i,
                    headers: e,
                    resolve: t,
                    reject: n
                }))
            }
            ,
            i.open("POST", r.url),
            o.options.headers)
                o.options.headers.hasOwnProperty(e) && i.setRequestHeader(e, o.options.headers[e]);
            i.send(r.body)
        }
        ))
    }
    ,
    s);
    function s() {
        return null !== i && i.apply(this, arguments) || this
    }
}
, function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
        return a
    });
    var i = n(12)
      , r = n(20)
      , o = n(41)
      , a = (s.prototype.eventFromException = function(e, t) {
        throw new r.a("Backend has to implement `eventFromException` method")
    }
    ,
    s.prototype.eventFromMessage = function(e, t, n) {
        throw new r.a("Backend has to implement `eventFromMessage` method")
    }
    ,
    s.prototype.sendEvent = function(e) {
        this._transport.sendEvent(e).then(null, function(e) {
            i.a.error("Error while sending event: " + e)
        })
    }
    ,
    s.prototype.sendSession = function(e) {
        this._transport.sendSession ? this._transport.sendSession(e).then(null, function(e) {
            i.a.error("Error while sending session: " + e)
        }) : i.a.warn("Dropping session because custom transport doesn't implement sendSession")
    }
    ,
    s.prototype.getTransport = function() {
        return this._transport
    }
    ,
    s.prototype._setupTransport = function() {
        return new o.a
    }
    ,
    s);
    function s(e) {
        this._options = e,
        this._options.dsn || i.a.warn("No DSN provided, backend will not do anything."),
        this._transport = this._setupTransport()
    }
}
, function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
        return y
    });
    var p = n(0)
      , a = n(36)
      , h = n(78)
      , i = n(105)
      , s = n(2)
      , c = n(12)
      , u = n(14)
      , l = n(3)
      , d = n(104)
      , r = n(5)
      , f = n(23)
      , m = n(20)
      , v = n(6)
      , g = [];
    function o(e) {
        var t, n, i, r, o = {};
        return i = (e = e).defaultIntegrations && Object(p.e)(e.defaultIntegrations) || [],
        e = e.integrations,
        r = [],
        Array.isArray(e) ? (t = e.map(function(e) {
            return e.name
        }),
        n = [],
        i.forEach(function(e) {
            -1 === t.indexOf(e.name) && -1 === n.indexOf(e.name) && (r.push(e),
            n.push(e.name))
        }),
        e.forEach(function(e) {
            -1 === n.indexOf(e.name) && (r.push(e),
            n.push(e.name))
        })) : r = "function" == typeof e ? (r = e(i),
        Array.isArray(r) ? r : [r]) : Object(p.e)(i),
        -1 !== (e = r.map(function(e) {
            return e.name
        })).indexOf("Debug") && r.push.apply(r, Object(p.e)(r.splice(e.indexOf("Debug"), 1))),
        r.forEach(function(e) {
            o[e.name] = e,
            e = e,
            -1 === g.indexOf(e.name) && (e.setupOnce(a.b, v.b),
            g.push(e.name),
            c.a.log("Integration installed: " + e.name))
        }),
        o
    }
    _.prototype.captureException = function(e, t, n) {
        var i = this
          , r = t && t.event_id;
        return this._process(this._getBackend().eventFromException(e, t).then(function(e) {
            return i._captureEvent(e, t, n)
        }).then(function(e) {
            r = e
        })),
        r
    }
    ,
    _.prototype.captureMessage = function(e, t, n, i) {
        var r = this
          , o = n && n.event_id
          , t = Object(s.i)(e) ? this._getBackend().eventFromMessage(String(e), t, n) : this._getBackend().eventFromException(e, n);
        return this._process(t.then(function(e) {
            return r._captureEvent(e, n, i)
        }).then(function(e) {
            o = e
        })),
        o
    }
    ,
    _.prototype.captureEvent = function(e, t, n) {
        var i = t && t.event_id;
        return this._process(this._captureEvent(e, t, n).then(function(e) {
            i = e
        })),
        i
    }
    ,
    _.prototype.captureSession = function(e) {
        e.release ? this._sendSession(e) : c.a.warn("Discarded session because of missing release")
    }
    ,
    _.prototype.getDsn = function() {
        return this._dsn
    }
    ,
    _.prototype.getOptions = function() {
        return this._options
    }
    ,
    _.prototype.flush = function(e) {
        var n = this;
        return this._isClientProcessing(e).then(function(t) {
            return n._getBackend().getTransport().close(e).then(function(e) {
                return t && e
            })
        })
    }
    ,
    _.prototype.close = function(e) {
        var t = this;
        return this.flush(e).then(function(e) {
            return t.getOptions().enabled = !1,
            e
        })
    }
    ,
    _.prototype.setupIntegrations = function() {
        this._isEnabled() && (this._integrations = o(this._options))
    }
    ,
    _.prototype.getIntegration = function(t) {
        try {
            return this._integrations[t.id] || null
        } catch (e) {
            return c.a.warn("Cannot retrieve integration " + t.id + " from the current Client"),
            null
        }
    }
    ,
    _.prototype._updateSessionFromEvent = function(e, t) {
        var n, i, r, o = !1, a = !1, s = t.exception && t.exception.values;
        if (s) {
            a = !0;
            try {
                for (var c = Object(p.f)(s), u = c.next(); !u.done; u = c.next()) {
                    var l = u.value.mechanism;
                    if (l && !1 === l.handled) {
                        o = !0;
                        break
                    }
                }
            } catch (e) {
                n = {
                    error: e
                }
            } finally {
                try {
                    u && !u.done && (i = c.return) && i.call(c)
                } finally {
                    if (n)
                        throw n.error
                }
            }
        }
        s = t.user;
        if (!e.userAgent) {
            var d, f = t.request ? t.request.headers : {};
            for (d in f)
                if ("user-agent" === d.toLowerCase()) {
                    r = f[d];
                    break
                }
        }
        e.update(Object(p.a)(Object(p.a)({}, o && {
            status: h.a.Crashed
        }), {
            user: s,
            userAgent: r,
            errors: e.errors + Number(a || o)
        }))
    }
    ,
    _.prototype._sendSession = function(e) {
        this._getBackend().sendSession(e)
    }
    ,
    _.prototype._isClientProcessing = function(i) {
        var r = this;
        return new u.a(function(e) {
            var t = 0
              , n = setInterval(function() {
                0 == r._processing ? (clearInterval(n),
                e(!0)) : (t += 1,
                i && i <= t && (clearInterval(n),
                e(!1)))
            }, 1)
        }
        )
    }
    ,
    _.prototype._getBackend = function() {
        return this._backend
    }
    ,
    _.prototype._isEnabled = function() {
        return !1 !== this.getOptions().enabled && void 0 !== this._dsn
    }
    ,
    _.prototype._prepareEvent = function(e, t, n) {
        var i = this
          , r = this.getOptions().normalizeDepth
          , o = void 0 === r ? 3 : r
          , r = Object(p.a)(Object(p.a)({}, e), {
            event_id: e.event_id || (n && n.event_id ? n.event_id : Object(l.i)()),
            timestamp: e.timestamp || Object(d.a)()
        })
          , e = (this._applyClientOptions(r),
        this._applyIntegrationsMetadata(r),
        t)
          , t = (n && n.captureContext && (e = a.a.clone(e).update(n.captureContext)),
        u.a.resolve(r));
        return (t = e ? e.applyToEvent(r, n) : t).then(function(e) {
            return "number" == typeof o && 0 < o ? i._normalizeEvent(e, o) : e
        })
    }
    ,
    _.prototype._normalizeEvent = function(e, t) {
        var n;
        return e ? (n = Object(p.a)(Object(p.a)(Object(p.a)(Object(p.a)(Object(p.a)({}, e), e.breadcrumbs && {
            breadcrumbs: e.breadcrumbs.map(function(e) {
                return Object(p.a)(Object(p.a)({}, e), e.data && {
                    data: Object(r.d)(e.data, t)
                })
            })
        }), e.user && {
            user: Object(r.d)(e.user, t)
        }), e.contexts && {
            contexts: Object(r.d)(e.contexts, t)
        }), e.extra && {
            extra: Object(r.d)(e.extra, t)
        }),
        e.contexts && e.contexts.trace && (n.contexts.trace = e.contexts.trace),
        n) : null
    }
    ,
    _.prototype._applyClientOptions = function(e) {
        var t = this.getOptions()
          , n = t.environment
          , i = t.release
          , r = t.dist
          , o = t.maxValueLength
          , o = void 0 === o ? 250 : o
          , t = ("environment"in e || (e.environment = "environment"in t ? n : "production"),
        void 0 === e.release && void 0 !== i && (e.release = i),
        void 0 === e.dist && void 0 !== r && (e.dist = r),
        e.message && (e.message = Object(f.d)(e.message, o)),
        e.exception && e.exception.values && e.exception.values[0])
          , n = (t && t.value && (t.value = Object(f.d)(t.value, o)),
        e.request);
        n && n.url && (n.url = Object(f.d)(n.url, o))
    }
    ,
    _.prototype._applyIntegrationsMetadata = function(e) {
        var e = e.sdk
          , t = Object.keys(this._integrations);
        e && 0 < t.length && (e.integrations = t)
    }
    ,
    _.prototype._sendEvent = function(e) {
        this._getBackend().sendEvent(e)
    }
    ,
    _.prototype._captureEvent = function(e, t, n) {
        return this._processEvent(e, t, n).then(function(e) {
            return e.event_id
        }, function(e) {
            c.a.error(e)
        })
    }
    ,
    _.prototype._processEvent = function(e, t, n) {
        var i, r = this, o = this.getOptions(), a = o.beforeSend, o = o.sampleRate;
        return this._isEnabled() ? !(i = "transaction" === e.type) && "number" == typeof o && Math.random() > o ? u.a.reject(new m.a("Discarding event because it's not included in the random sample (sampling rate = " + o + ")")) : this._prepareEvent(e, n, t).then(function(e) {
            if (null === e)
                throw new m.a("An event processor returned null, will not send event.");
            if (t && t.data && !0 === t.data.__sentry__ || i || !a)
                return e;
            e = a(e, t);
            if (void 0 === e)
                throw new m.a("`beforeSend` method has to return `null` or a valid event.");
            return Object(s.m)(e) ? e.then(function(e) {
                return e
            }, function(e) {
                throw new m.a("beforeSend rejected with " + e)
            }) : e
        }).then(function(e) {
            if (null === e)
                throw new m.a("`beforeSend` returned `null`, will not send event.");
            var t = n && n.getSession && n.getSession();
            return !i && t && r._updateSessionFromEvent(t, e),
            r._sendEvent(e),
            e
        }).then(null, function(e) {
            if (e instanceof m.a)
                throw e;
            throw r.captureException(e, {
                data: {
                    __sentry__: !0
                },
                originalException: e
            }),
            new m.a("Event processing pipeline threw an error, original event will not be sent. Details have been sent as a new event.\nReason: " + e)
        }) : u.a.reject(new m.a("SDK not enabled, will not send event."))
    }
    ,
    _.prototype._process = function(e) {
        var t = this;
        this._processing += 1,
        e.then(function(e) {
            return --t._processing,
            e
        }, function(e) {
            return --t._processing,
            e
        })
    }
    ;
    var y = _;
    function _(e, t) {
        this._integrations = {},
        this._processing = 0,
        this._backend = new e(t),
        (this._options = t).dsn && (this._dsn = new i.a(t.dsn))
    }
}
, function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
        return i
    });
    r.prototype.memoize = function(e) {
        if (this._hasWeakSet)
            return !!this._inner.has(e) || (this._inner.add(e),
            !1);
        for (var t = 0; t < this._inner.length; t++)
            if (this._inner[t] === e)
                return !0;
        return this._inner.push(e),
        !1
    }
    ,
    r.prototype.unmemoize = function(e) {
        if (this._hasWeakSet)
            this._inner.delete(e);
        else
            for (var t = 0; t < this._inner.length; t++)
                if (this._inner[t] === e) {
                    this._inner.splice(t, 1);
                    break
                }
    }
    ;
    var i = r;
    function r() {
        this._hasWeakSet = "function" == typeof WeakSet,
        this._inner = this._hasWeakSet ? new WeakSet : []
    }
}
, function(e, n, t) {
    "use strict";
    !function(t) {
        function e() {}
        Object.defineProperty(n, "__esModule", {
            value: !0
        }),
        n.LinkTitle = void 0,
        e.disable = function(e) {
            t(e).hover(function() {
                var e = t(this).attr("data-title");
                void 0 !== e && !1 !== e || (e = t(this).attr("title"),
                t(this).attr("data-title", e)),
                t(this).attr("title", "")
            }, function() {
                var e = t(this).attr("data-title");
                t(this).attr("title", e)
            })
        }
        ,
        n.LinkTitle = e
    }
    .call(this, t(1))
}
, function(e, t, n) {
    "use strict";
    var i, r, o = this && this.__extends || (i = function(e, t) {
        return (i = Object.setPrototypeOf || ({
            __proto__: []
        }instanceof Array ? function(e, t) {
            e.__proto__ = t
        }
        : function(e, t) {
            for (var n in t)
                t.hasOwnProperty(n) && (e[n] = t[n])
        }
        ))(e, t)
    }
    ,
    function(e, t) {
        function n() {
            this.constructor = e
        }
        i(e, t),
        e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype,
        new n)
    }
    ), d = (Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.PremiumContext = void 0,
    n(7)), f = n(60), a = n(47), s = n(119), c = n(120), u = n(122), l = n(124), n = (r = a.ContextBase,
    o(p, r),
    p.prototype.initAllFeaturesTooltip = function(e) {
        if (!this.tooltipRoot) {
            if (this.tooltipRoot = e.querySelector(".new-premium__all-features-tooltip"),
            !this.tooltipRoot)
                throw "'All features' dom element not found";
            e = e.querySelector(".new-premium__all-features-tooltip__html-template");
            if (!e)
                throw "htmlTemplate not found for 'All features' tooltip";
            window.tippy(this.tooltipRoot, {
                allowHTML: !0,
                theme: "light new-premium-all-features-tooltip",
                content: e.innerHTML,
                placement: "bottom",
                arrow: !0,
                animation: "fade",
                trigger: "mouseenter",
                interactive: !0
            })
        }
    }
    ,
    p.prototype.initOCRTooltip = function(e) {
        if (!this.tooltipRoot_OCR) {
            if (this.tooltipRoot_OCR = e.querySelector(".new-premium__ocr-tooltip"),
            !this.tooltipRoot_OCR)
                throw "'OCR' dom element not found";
            e = e.querySelector(".new-premium__ocr-features-tooltip__html-template");
            if (!e)
                throw "htmlTemplate not found for 'OCR' tooltip";
            window.tippy(this.tooltipRoot_OCR, {
                allowHTML: !0,
                theme: "light new-premium__ocr-tooltip",
                content: e.innerHTML,
                placement: "bottom",
                arrow: !0,
                animation: "fade",
                trigger: "mouseenter",
                interactive: !0
            })
        }
    }
    ,
    p.prototype.updateTitleText = function(e) {
        var t = e.querySelector(".dialog__title");
        if (!t)
            throw "'Title' element not found";
        var n = this.isTrialEnabledForThisTool() && this.canUserDoTrial();
        switch (this.userType) {
        case "guest":
        case "user":
            return void (t.innerHTML = n ? this.getTranslation(e, "title_canTrial") : this.getTranslation(e, "title_cannotTrial"));
        case "premium":
            return;
        default:
            throw "Unhandled userType '" + this.userType + "' for updateTitleText"
        }
    }
    ,
    p.prototype.updateTriggerReasonText = function(e) {
        var t, n, i = e.querySelector(".new-premium__trigger-reason_sub1"), r = e.querySelector(".new-premium__trigger-reason_sub2");
        if (!i)
            throw "'Trigger Reason subtitle1' element not found";
        if (!r)
            throw "'Trigger Reason subtitle2' element not found";
        var o, a, s = null != (n = this.tool) ? n : null == (n = this.limits) ? void 0 : n.tool, c = null == (n = window.ilovepdfConfig) ? void 0 : n.subtool, u = !1;
        switch (this.triggerReason) {
        case f.REASON.ERROR_FEATURE:
            var l = "triggerReason_errorFeature";
            switch (s) {
            case "sign":
            case "pdfa":
            case "pdfoffice":
                l += "_" + s
            }
            ["pdfexcel", "pdfword"].includes(c) && (l += "_" + c),
            this.premiumFeatureName && (l += "_" + this.premiumFeatureName),
            i.innerHTML = this.getTranslation(e, l + "_subtitle1"),
            "ocr" === this.premiumFeatureName && "pdfoffice" === s && (u = !0,
            i.innerHTML = i.innerHTML.replace("OCR", '<span class="new-premium__ocr-tooltip" data-template="new-premium__ocr-features-tooltip__html-template">OCR</span>')),
            r.innerHTML = this.getTranslation(e, l + "_subtitle2");
            break;
        case f.REASON.ERROR_FILES:
            if (!this.limits)
                throw "Limits object is needed to translate subtitles' text";
            o = (a = [this.limits.fileLimits[this.tool], this.limits.allFileLimits.premium_limits[this.tool]])[0],
            a = a[1],
            i.innerHTML = d.Lang.tr(this.getTranslation(e, "triggerReason_errorFilesNum_subtitle1"), {
                n: o.files
            }),
            r.innerHTML = d.Lang.tr(this.getTranslation(e, "triggerReason_errorFilesNum_subtitle2"), {
                n: a.files
            });
            break;
        case f.REASON.ERROR_SIZE:
            if (!this.limits)
                throw "Limits object is needed to translate subtitles' text";
            o = (t = [this.limits.fileLimits[this.tool], this.limits.allFileLimits.premium_limits[this.tool]])[0],
            a = t[1],
            i.innerHTML = d.Lang.tr(this.getTranslation(e, "triggerReason_errorFilesSize_subtitle1"), {
                n: o.mb
            }),
            r.innerHTML = d.Lang.tr(this.getTranslation(e, "triggerReason_errorFilesSize_subtitle2"), {
                n: a.mb / 1e3
            });
            break;
        case f.REASON.ERROR_PAGES:
            if (!this.limits)
                throw "Limits object is needed to translate subtitles' text";
            o = (t = [this.limits.fileLimits[this.tool], this.limits.allFileLimits.premium_limits[this.tool]])[0],
            a = t[1],
            i.innerHTML = d.Lang.tr(this.getTranslation(e, "triggerReason_errorFilesPages_subtitle1"), {
                n: o.pages
            }),
            r.innerHTML = d.Lang.tr(this.getTranslation(e, "triggerReason_errorFilesPages_subtitle2"), {
                n: a.pages
            });
            break;
        case null:
            i.style.display = "none",
            r.style.display = "none";
            break;
        default:
            throw "Unknown triggerReason '" + this.triggerReason + "'"
        }
        this.initAllFeaturesTooltip(e),
        u && this.initOCRTooltip(e)
    }
    ,
    p.prototype.getTranslation = function(e, t, n) {
        if (void 0 === n && (n = {}),
        this._translations) {
            if (t in this._translations)
                return this._translations[t];
            throw "Translation for key '" + t + "' not found"
        }
        n = e.querySelector(".new-premium__text-translations");
        if (!n)
            throw "'Text translations' DOM not found";
        if ("html" !== n.dataset.format)
            return this._translations = JSON.parse(n.innerHTML),
            this._translations ? this.getTranslation(e, t) : null;
        e = n.querySelector("[data-key=" + t + "]");
        if (e)
            return e.innerHTML;
        throw "Key '" + t + "' not found"
    }
    ,
    p.prototype.getInitialState = function() {
        return this.isLoggedIn() ? this._getInitialState() : new s.AuthState
    }
    ,
    p.prototype._getInitialState = function() {
        switch (this.userType) {
        case "guest":
            return new s.AuthState;
        case "user":
            return new (this.canUserDoTrial() && this.isTrialEnabledForThisTool() ? u.CanTrialState : c.CannotTrialState);
        case "premium":
            return new l.PremiumState;
        default:
            throw "Not implemented 'initialState' when userType is " + this.userType
        }
    }
    ,
    p);
    function p(e) {
        var t = r.call(this, e) || this;
        return t.contentName = "PremiumContext",
        t.onDomReadyCalledOnce = !1,
        t._onDomReady = function(e) {
            t.onDomReadyCalledOnce || t.updateTriggerReasonText(e),
            t.onDomReadyCalledOnce = !0,
            t.updateTitleText(e)
        }
        ,
        t.triggerReason = "triggerReason"in e ? e.triggerReason : void 0,
        t.limits = "limits"in e ? e.limits : void 0,
        t.premiumFeatureName = "premiumFeatureName"in e ? e.premiumFeatureName : void 0,
        t.tool = e.tool,
        t
    }
    t.PremiumContext = n
}
, function(e, n, o) {
    "use strict";
    !function(a) {
        var i = this && this.__createBinding || (Object.create ? function(e, t, n, i) {
            void 0 === i && (i = n),
            Object.defineProperty(e, i, {
                enumerable: !0,
                get: function() {
                    return t[n]
                }
            })
        }
        : function(e, t, n, i) {
            e[i = void 0 === i ? n : i] = t[n]
        }
        )
          , r = this && this.__setModuleDefault || (Object.create ? function(e, t) {
            Object.defineProperty(e, "default", {
                enumerable: !0,
                value: t
            })
        }
        : function(e, t) {
            e.default = t
        }
        )
          , e = this && this.__importStar || function(e) {
            if (e && e.__esModule)
                return e;
            var t = {};
            if (null != e)
                for (var n in e)
                    "default" !== n && Object.hasOwnProperty.call(e, n) && i(t, e, n);
            return r(t, e),
            t
        }
          , t = (Object.defineProperty(n, "__esModule", {
            value: !0
        }),
        n.Banner = void 0,
        e(o(15)));
        function s() {}
        s.preventClickAds = function() {
            s.preventClick("ad"),
            s.preventClick("adsq")
        }
        ,
        s.sendEvent = function(e) {
            return function() {
                return t.captureMessage(e)
            }
        }
        ,
        s.preventClick = function(e) {
            void 0 === e && (e = "ad");
            var t = document.getElementById(e)
              , n = (a(window).width(),
            "prvnt" + e)
              , i = 1100
              , r = "ac";
            if (document.body.classList.contains("download") && (i = 500),
            "adsq" == e && (r = "acsq"),
            null == document.getElementById(n) && t && 0 != t.getBoundingClientRect().height) {
                t.style.position = "relative";
                var o = document.createElement("div");
                o.setAttribute("id", n),
                o.style.position = "absolute",
                o.style.top = "0px",
                o.style.left = "0px",
                o.style.width = t.getBoundingClientRect().width + "px",
                o.style.height = t.getBoundingClientRect().height + "px",
                o.style.zIndex = "9",
                o.style.background = "hsl(0,0%,100%,.01)",
                o.addEventListener("click", s.sendEvent(r));
                try {
                    t.prepend(o)
                } catch (e) {
                    t.appendChild(o)
                }
                window.setTimeout(function() {
                    o.removeEventListener("click", s.sendEvent(r)),
                    o.remove()
                }, i)
            }
        }
        ,
        n.Banner = s
    }
    .call(this, o(1))
}
, , function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.FileStack = t.File = void 0;
    var i = n(7)
      , n = (t.File = function(e) {
        void 0 === e && (e = {}),
        this.reUploaded = !1,
        this.server_filename = null,
        this.filename = null,
        this.rotate = null,
        this.password = null,
        this.file = null,
        this.elementArray = [],
        this.processed = !0,
        Object.assign(this, e),
        null != this.filename && (this.filename = this.filename.replace(/[\u00A0\u1680​\u180e\u2000-\u2009\u200a​\u200b​\u202f\u205f​\u3000\ufeff]/g, " ").trim())
    }
    ,
    r.prototype.addFile = function(e) {
        e = this.cleanName(e),
        this.files.push(e),
        this.onFileAdd()
    }
    ,
    r.prototype.getFile = function(t) {
        return this.files.find(function(e) {
            return e.id == t
        })
    }
    ,
    r.prototype.getFileIndex = function(t) {
        return this.files.findIndex(function(e) {
            return e.id == t
        })
    }
    ,
    r.prototype.swapFilesPositionsByIndex = function(e, t) {
        var n;
        e != t && this.files[e] && this.files[t] && (n = [this.files[t], this.files[e]],
        this.files[e] = n[0],
        this.files[t] = n[1])
    }
    ,
    r.prototype.move = function(e, t) {
        for (; e < 0; )
            e += this.files.length;
        for (; t < 0; )
            t += this.files.length;
        if (t >= this.files.length)
            for (var n = t - this.files.length; 1 + n--; )
                this.files.push(void 0);
        this.files.splice(t, 0, this.files.splice(e, 1)[0])
    }
    ,
    r.prototype.getFileByServerFilename = function(t) {
        return this.files.find(function(e) {
            return e.server_filename == t
        })
    }
    ,
    r.prototype.getFirst = function() {
        return this.files[0]
    }
    ,
    r.prototype.getLast = function() {
        return this.files[this.files.length - 1]
    }
    ,
    r.prototype.onFileAdd = function() {
        var e, t = this;
        try {
            null != (e = document.querySelectorAll(".numPages")) && e.forEach(function(e) {
                t.files[0].numPages && (e.innerHTML = t.files[0].numPages.toString())
            })
        } catch (e) {}
    }
    ,
    r.prototype.updateFile = function(e, t) {
        e = this.getFile(e);
        return e && (t = this.cleanName(t),
        Object.assign(e, t)),
        e
    }
    ,
    r.prototype.removeFile = function(n, i) {
        var r = this;
        void 0 === i && (i = !1),
        this.files.forEach(function(e, t) {
            e && e.id == n && (e.removed = !0,
            r.removed.push(n),
            -1 < t && r.files.splice(t, 1),
            0 == i) && (e = new CustomEvent("fileRemoved",{
                detail: {
                    fileId: n
                }
            }),
            window.dispatchEvent(e))
        })
    }
    ,
    r.prototype.removeFilesExcept = function(n) {
        var i = this;
        this.files.forEach(function(e, t) {
            (null == e ? void 0 : e.id) !== n && -1 < t && i.files.splice(t, 1)
        })
    }
    ,
    r.prototype.removeAllFiles = function(t) {
        var n = this;
        void 0 === t && (t = !1),
        this.files.forEach(function(e) {
            n.removeFile(e.id, t)
        })
    }
    ,
    r.prototype.limitFile = function(e, t) {
        void 0 === t && (t = !1);
        var n = this.getFile(e);
        n && (this.limited.push(e),
        n.limited = !0,
        window.plupload && (n.status = window.plupload.FAILED,
        n.error = window.plupload.GENERIC_ERROR),
        0 == t) && (n = new CustomEvent("fileLimited",{
            detail: {
                fileId: e
            }
        }),
        window.dispatchEvent(n))
    }
    ,
    r.prototype.resetLimitedFiles = function() {
        this.files.forEach(function(e) {
            1 == (null == e ? void 0 : e.limited) && (delete e.limited,
            e.status == window.plupload.FAILED) && e.error == window.plupload.GENERIC_ERROR && (e.status = window.plupload.QUEUED,
            delete e.error)
        }),
        this.limited = []
    }
    ,
    r.prototype.removeLimitedFiles = function(e) {
        var t = this
          , n = (void 0 === e && (e = !1),
        this.files = this.files.filter(function(e) {
            return -1 === t.limited.indexOf(e.id)
        }),
        [].concat(this.limited));
        this.limited = [],
        !0 !== e && n.forEach(function(e) {
            e = new CustomEvent("fileRemoved",{
                detail: {
                    fileId: e
                }
            });
            window.dispatchEvent(e)
        })
    }
    ,
    r.prototype.count = function() {
        return this.files.length
    }
    ,
    r.prototype.countNotIgnored = function(t) {
        return void 0 === t && (t = !1),
        this.files.filter(function(e) {
            return !(1 == t && 1 == e.limited) && 1 != e.ignored
        }).length
    }
    ,
    r.prototype.countNotLimited = function() {
        return this.files.filter(function(e) {
            return !0 !== e.limited
        }).length
    }
    ,
    r.prototype.countIgnored = function() {
        return this.files.filter(function(e) {
            return 1 == e.ignored
        }).length
    }
    ,
    r.prototype.countLimited = function() {
        return this.files.filter(function(e) {
            return 1 == e.limited
        }).length
    }
    ,
    r.prototype.size = function() {
        var t = 0;
        return this.files.forEach(function(e) {
            t += parseInt(e.size)
        }),
        t
    }
    ,
    r.prototype.fileSize = function(e) {
        var n = this
          , i = 0;
        return e instanceof Array ? e.forEach(function(e, t) {
            i += n.fileSize(e)
        }) : (e = this.getFile(e),
        i = parseInt(e.size)),
        i
    }
    ,
    r.prototype.getFileSizeNotIgnored = function(n) {
        void 0 === n && (n = !1);
        var i = 0;
        return this.files.forEach(function(e, t) {
            e && (1 != n || 1 != e.limited) && 1 != e.ignored && e.size && (i += parseInt(e.size.toString()))
        }),
        i
    }
    ,
    r.prototype.getFilePagesNotIgnored = function(n) {
        void 0 === n && (n = !1);
        var i = 0;
        return this.files.forEach(function(e, t) {
            e && (1 != n || 1 != e.limited) && 1 != e.ignored && e.file && e.file.numPages && (i += e.file.numPages ? parseInt(e.file.numPages.toString()) : 0)
        }),
        i
    }
    ,
    r.prototype.cleanName = function(e) {
        return "filename"in e && null != e.filename && (e.filename,
        e.filename.replace(/[\u00A0\u1680​\u180e\u2000-\u2009\u200a​\u200b​\u202f\u205f​\u3000\ufeff]/g, " ").trim(),
        e.filename = e.filename.replace(/"/g, "")),
        "name"in e && null != e.name && (e.name,
        e.name.replace(/[\u00A0\u1680​\u180e\u2000-\u2009\u200a​\u200b​\u202f\u205f​\u3000\ufeff]/g, " ").trim(),
        e.name = e.name.replace(/"/g, "")),
        e
    }
    ,
    r.prototype.onUploaded = function() {
        return new Promise(function(e, t) {}
        )
    }
    ,
    r.prototype.checkFilesUploaded = function() {
        var t = !0
          , n = this;
        return this.files.forEach(function(e) {
            if (null == e)
                return !0;
            if ("percent"in e && !(e.percent < 100) && ("server_filename"in e || "error"in e && !("error"in e && 0 == e.error)) || (t = !1),
            1 == e.error) {
                t = !1;
                try {
                    window.Toastr.error(i.Lang.t(e.errorData.error.param.type[0]) + "<br>" + e.name, i.Lang.t("Wops"), {
                        timeOut: 5e3,
                        positionClass: "toast-top-left"
                    })
                } catch (e) {}
                n.removeFile(e.id)
            }
        }),
        t
    }
    ,
    r.prototype.getUploadedFiles = function() {
        var n = {};
        return this.files.forEach(function(e) {
            var t = {
                filename: e.name,
                server_filename: e.server_filename
            };
            e.rename && (t.filename = e.rename),
            e.password && (t.password = e.password),
            e.pages && (t.pages = e.pages),
            e.rotate && (t.rotate = e.rotate),
            e.elementArray && (t.elementArray = e.elementArray),
            e.processed && (t.processed = e.processed),
            n[e.id] = t
        }),
        n
    }
    ,
    r);
    function r() {
        var e = this;
        this.getFilePxsizeNotIgnored = function(t) {
            void 0 === t && (t = !1);
            var n = 0;
            return e.files.forEach(function(e) {
                !e || 1 == t && 1 == e.limited || 1 == e.ignored || (n = Math.max(e.width * e.height, n))
            }),
            n
        }
        ,
        this.files = [],
        this.ignored = [],
        this.removed = [],
        this.limited = []
    }
    t.FileStack = n
}
, function(e, t, n) {
    "use strict";
    var i;
    n.d(t, "a", function() {
        return i
    }),
    (n = i = i || {}).Ok = "ok",
    n.Exited = "exited",
    n.Crashed = "crashed",
    n.Abnormal = "abnormal"
}
, function(e, t, n) {
    "use strict";
    function i() {
        return window.navigator.mockUserAgent || window.navigator.userAgent
    }
    function r() {
        return !0 === window.navigator.standalone || window.matchMedia("(display-mode: standalone)").matches
    }
    function o(e) {
        return -1 !== (e = void 0 === e ? i() : e).indexOf("FBAN") || -1 !== e.indexOf("FBAV")
    }
    function a(e) {
        return void 0 === e && (e = i()),
        /FxiOS/i.test(e)
    }
    function s(e) {
        return void 0 === e && (e = i()),
        /EdgiOS/i.test(e)
    }
    function c(e) {
        return -1 < (e = void 0 === e ? i() : e).indexOf("Opera Mini")
    }
    function u(e) {
        return void 0 === e && (e = i()),
        /Android/.test(e)
    }
    function l(e) {
        return void 0 === e && (e = i()),
        /iPhone|iPod|iPad/.test(e)
    }
    function d(e) {
        return void 0 === e && (e = i()),
        /\bGSA\b/.test(e)
    }
    function f(e) {
        return void 0 === e && (e = i()),
        /QQBrowser/.test(e)
    }
    function p(e) {
        return !!l(e = void 0 === e ? i() : e) && (!!d(e) || /.+AppleWebKit(?!.*Safari)/.test(e))
    }
    function h(e) {
        return !!u(e = void 0 === e ? i() : e) && /Version\/[\d.]+/.test(e) && !c(e)
    }
    function m() {
        var e = i();
        return /Macintosh.*AppleWebKit(?!.*Safari)/i.test(e)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.supportsPopups = t.isMacOsCna = t.isIEIntranet = t.isIECompHeader = t.isIE = t.isWebView = t.isAndroidWebview = t.isIosWebview = t.isQQBrowser = t.isGoogleSearchApp = t.isIos = t.isAndroid = t.isOperaMini = t.isEdgeIOS = t.isFirefoxIOS = t.isFacebookWebView = t.isStandAlone = t.isDevice = t.getUserAgent = void 0,
    t.getUserAgent = i,
    t.isDevice = function() {
        return !!i().match(/Android|webOS|iPhone|iPad|iPod|bada|Symbian|Palm|CriOS|BlackBerry|IEMobile|WindowsMobile|Opera Mini/i)
    }
    ,
    t.isStandAlone = r,
    t.isFacebookWebView = o,
    t.isFirefoxIOS = a,
    t.isEdgeIOS = s,
    t.isOperaMini = c,
    t.isAndroid = u,
    t.isIos = l,
    t.isGoogleSearchApp = d,
    t.isQQBrowser = f,
    t.isIosWebview = p,
    t.isAndroidWebview = h,
    t.isWebView = function() {
        return o() || p() || h()
    }
    ,
    t.isIE = function() {
        return !!window.document.documentMode || Boolean(window.navigator && window.navigator.userAgent && /Edge|MSIE/i.test(window.navigator.userAgent))
    }
    ,
    t.isIECompHeader = function() {
        var e = window.document.querySelector('meta[http-equiv="X-UA-Compatible"]')
          , t = window.document.querySelector('meta[content="IE=edge"]');
        return !(!e || !t)
    }
    ,
    t.isIEIntranet = function() {
        if (window.document.documentMode)
            try {
                var e = window.status;
                return (window.status = "testIntranetMode") === window.status ? (window.status = e,
                !0) : !1
            } catch (e) {}
        return !1
    }
    ,
    t.isMacOsCna = m,
    t.supportsPopups = function(e) {
        return !(p(e = void 0 === e ? i() : e) || h(e) || c(e) || a(e) || s(e) || o(e) || f(e) || m() || r())
    }
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.Dialog = void 0;
    var r = n(8)
      , o = n(25)
      , a = n(75)
      , n = (s.getVisibleDialogs = function() {
        return Array.from(this.visibleDialogs).filter(function(e) {
            return !e.isClosing()
        })
    }
    ,
    s.prototype.canBeClosedByUser = function() {
        return void 0 !== this._canBeClosedByUser ? this._canBeClosedByUser : this.props.canBeClosedByUser
    }
    ,
    s.prototype.isClosedOrInProcessOfClosing = function() {
        return this.isClosing() || !this.isShown
    }
    ,
    s.prototype.isClosing = function() {
        return this._isClosing
    }
    ,
    s.prototype.listenToEvents = function(e) {
        var t = this;
        -1 === this.contentsListeningTo.indexOf(e.getInstanceID()) && (e.addEventListener("end", function() {
            t.isClosedOrInProcessOfClosing() || t.close()
        }),
        e.addEventListener("disableContentAbandonment", function() {
            return t._canBeClosedByUser = !1
        }),
        e.addEventListener("unsetContentAbandonment", function() {
            return t._canBeClosedByUser = void 0
        }),
        this.contentsListeningTo.push(e.getInstanceID()))
    }
    ,
    Object.defineProperty(s.prototype, "dialog", {
        get: function() {
            var e, t, n, i = this;
            return this._dialog || (t = this.createDialogContainer(),
            n = this.createDialogElement(),
            t.appendChild(n),
            n = this.createDialogBackdrop(),
            this._dialog = document.createElement("div"),
            this.props.dialogName && this._dialog.setAttribute("data-dialog-name", this.props.dialogName),
            this._dialog.classList.add("dialog"),
            0 < (null == (e = this.props.classes) ? void 0 : e.length) && this.props.classes.forEach(function(e) {
                return i._dialog.classList.add(e)
            }),
            this._dialog.appendChild(t),
            this._dialog.appendChild(n),
            this.props.enableCloseBtn && this.initCloseBtn(),
            this._dialog.style.display = "none",
            document.body.appendChild(this._dialog)),
            this._dialog
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(s.prototype, "domRoot", {
        get: function() {
            return this.element
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(s.prototype, "element", {
        get: function() {
            return this.dialog.children[0].children[0]
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(s.prototype, "elementContainer", {
        get: function() {
            return this.dialog.querySelector(".dialog__container")
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(s.prototype, "backdrop", {
        get: function() {
            return this.dialog.children[1]
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(s.prototype, "closeBtn", {
        get: function() {
            return this.dialog.querySelector(".dialog__close")
        },
        enumerable: !1,
        configurable: !0
    }),
    s.prototype.mergeWithDefaultPropValues = function(e) {
        var t = null == (t = e.canBeClosedByUser) || t
          , n = null != (n = e.clickAwayClose) && n
          , i = null != (i = e.enableCloseBtn) ? i : t
          , r = null != (r = e.classes) ? r : [];
        return {
            dialogName: e.dialogName,
            canBeClosedByUser: t,
            clickAwayClose: n,
            escapeKeyClose: t,
            enableCloseBtn: i,
            classes: r
        }
    }
    ,
    s.prototype.getContent = function() {
        return this.content
    }
    ,
    s.prototype.dispatchEvent = function(e) {
        return this.eventEmitter.dispatchEvent(e)
    }
    ,
    s.prototype.addEventListener = function(e, t) {
        return this.eventEmitter.addEventListener(e, t)
    }
    ,
    s.visibleDialogs = new Set,
    s);
    function s(e) {
        var i = this;
        void 0 === e && (e = {}),
        this.isShown = !1,
        this.contentsListeningTo = new Array,
        this.destroyed = !1,
        this._canBeClosedByUser = void 0,
        this._isClosing = !1,
        this.show = function() {
            if (i.destroyed)
                throw "This dialog was destroyed. It's no longer usable";
            var e, t, n;
            document.body.style.overflow = "hidden",
            i.isShown || (e = i.element,
            t = i.backdrop,
            n = i.closeBtn,
            i.content && i.content.reset(),
            0 == i.props.enableCloseBtn && n && (n.style.display = "none"),
            i.dialog.style.display = "",
            i.elementContainer,
            e.offsetWidth,
            i.elementContainer.classList.add("dialog__container--appeared"),
            t.offsetWidth,
            t.classList.add("dialog__backdrop--appeared"),
            i.isShown = !0,
            s.visibleDialogs.add(i),
            i.dispatchEvent(new r.IloveEvent("shown")))
        }
        ,
        this.close = function() {
            if (i.destroyed)
                throw "This dialog was destroyed. It's no longer usable";
            i.isShown && (i.elementContainer.classList.remove("dialog__container--appeared"),
            i.backdrop.classList.remove("dialog__backdrop--appeared"),
            i._isClosing = !0,
            setTimeout(function() {
                i._dialog && (i.dialog.style.display = "none"),
                i.isShown = !1,
                i._isClosing = !1,
                document.body.style.overflow = "",
                s.visibleDialogs.delete(i),
                i.dispatchEvent(new r.IloveEvent("hidden"))
            }, 250),
            i.dispatchEvent(new r.IloveEvent("closed")),
            i.content) && i.content.notifyOfContainerClosing()
        }
        ,
        this.getDialogName = function() {
            return i.props.dialogName
        }
        ,
        this.destroy = function() {
            i.destroyed || (i._dialog && (i._dialog.parentNode.removeChild(i._dialog),
            i._dialog = void 0),
            i.destroyed = !0)
        }
        ,
        this.setContent = function(e) {
            if (i.destroyed)
                throw "This dialog was destroyed. It's no longer usable";
            return (i.content = e).setContextPlacement("dialog"),
            e.render(i.domRoot),
            i.listenToEvents(e),
            i
        }
        ,
        this._closeOnEscapeKey = function(e) {
            "Escape" === e.key && i.close()
        }
        ,
        this.createDialogContainer = function() {
            var e = document.createElement("div");
            return e.classList.add("dialog__container"),
            e
        }
        ,
        this.createDialogElement = function() {
            var e = document.createElement("div");
            return e.classList.add("dialog__element"),
            e
        }
        ,
        this.createDialogBackdrop = function() {
            var e = document.createElement("div");
            return e.classList.add("dialog__backdrop"),
            i.props.clickAwayClose && e.addEventListener("click", function() {
                i.canBeClosedByUser() && i.close()
            }),
            e
        }
        ,
        this.initCloseBtn = function() {
            i.dialog.addEventListener("click", function(e) {
                e.target.classList.contains("dialog__close") && i.canBeClosedByUser() && (a.Banner.preventClickAds(),
                i.close())
            })
        }
        ,
        this.eventEmitter = new o.ILoveEventEmitter,
        this.props = this.mergeWithDefaultPropValues(e)
    }
    t.Dialog = n
}
, , function(e, h, m) {
    "use strict";
    !function(u) {
        var l, i = this && this.__createBinding || (Object.create ? function(e, t, n, i) {
            void 0 === i && (i = n),
            Object.defineProperty(e, i, {
                enumerable: !0,
                get: function() {
                    return t[n]
                }
            })
        }
        : function(e, t, n, i) {
            e[i = void 0 === i ? n : i] = t[n]
        }
        ), r = this && this.__setModuleDefault || (Object.create ? function(e, t) {
            Object.defineProperty(e, "default", {
                enumerable: !0,
                value: t
            })
        }
        : function(e, t) {
            e.default = t
        }
        ), e = this && this.__importStar || function(e) {
            if (e && e.__esModule)
                return e;
            var t = {};
            if (null != e)
                for (var n in e)
                    "default" !== n && Object.hasOwnProperty.call(e, n) && i(t, e, n);
            return r(t, e),
            t
        }
        , t = this && this.__awaiter || function(e, a, s, c) {
            return new (s = s || Promise)(function(n, t) {
                function i(e) {
                    try {
                        o(c.next(e))
                    } catch (e) {
                        t(e)
                    }
                }
                function r(e) {
                    try {
                        o(c.throw(e))
                    } catch (e) {
                        t(e)
                    }
                }
                function o(e) {
                    var t;
                    e.done ? n(e.value) : ((t = e.value)instanceof s ? t : new s(function(e) {
                        e(t)
                    }
                    )).then(i, r)
                }
                o((c = c.apply(e, a || [])).next())
            }
            )
        }
        , d = this && this.__generator || function(i, r) {
            var o, a, s, c = {
                label: 0,
                sent: function() {
                    if (1 & s[0])
                        throw s[1];
                    return s[1]
                },
                trys: [],
                ops: []
            }, e = {
                next: t(0),
                throw: t(1),
                return: t(2)
            };
            return "function" == typeof Symbol && (e[Symbol.iterator] = function() {
                return this
            }
            ),
            e;
            function t(n) {
                return function(e) {
                    var t = [n, e];
                    if (o)
                        throw new TypeError("Generator is already executing.");
                    for (; c; )
                        try {
                            if (o = 1,
                            a && (s = 2 & t[0] ? a.return : t[0] ? a.throw || ((s = a.return) && s.call(a),
                            0) : a.next) && !(s = s.call(a, t[1])).done)
                                return s;
                            switch (a = 0,
                            (t = s ? [2 & t[0], s.value] : t)[0]) {
                            case 0:
                            case 1:
                                s = t;
                                break;
                            case 4:
                                return c.label++,
                                {
                                    value: t[1],
                                    done: !1
                                };
                            case 5:
                                c.label++,
                                a = t[1],
                                t = [0];
                                continue;
                            case 7:
                                t = c.ops.pop(),
                                c.trys.pop();
                                continue;
                            default:
                                if (!(s = 0 < (s = c.trys).length && s[s.length - 1]) && (6 === t[0] || 2 === t[0])) {
                                    c = 0;
                                    continue
                                }
                                if (3 === t[0] && (!s || t[1] > s[0] && t[1] < s[3]))
                                    c.label = t[1];
                                else if (6 === t[0] && c.label < s[1])
                                    c.label = s[1],
                                    s = t;
                                else {
                                    if (!(s && c.label < s[2])) {
                                        s[2] && c.ops.pop(),
                                        c.trys.pop();
                                        continue
                                    }
                                    c.label = s[2],
                                    c.ops.push(t)
                                }
                            }
                            t = r.call(i, c)
                        } catch (e) {
                            t = [6, e],
                            a = 0
                        } finally {
                            o = s = 0
                        }
                    if (5 & t[0])
                        throw t[1];
                    return {
                        value: t[0] ? t[1] : void 0,
                        done: !0
                    }
                }
            }
        }
        , n = (Object.defineProperty(h, "__esModule", {
            value: !0
        }),
        h.UserPayment = void 0,
        m(109)), f = e(m(15)), o = m(112), p = m(8), a = m(25), s = m(57), e = ((e = l = l || {}).SUMMARY_INFO = "/<locale?>/purchase-summary/info",
        e.CANCEL_SUBSCRIPTION = "/user/subscription/cancel",
        e.CANCEL_SUBSCRIPTION_REASON = "/user/subscription/cancel/reason",
        e.CANCEL_SUBSCR_OFFER = "/user/subscription/canceloffer",
        e.REACTIVATE_SUBSCRIPTION = "/user/subscription/reactivate",
        e.REMOVE_PAYMENT_DATA = "/user/subscription/payment-remove",
        c.prototype.notifyPaymentError = function(e, t, n) {
            var i, r = "generic_payment_error";
            "update_card" === n && (r = "generic_card_update_error");
            try {
                var o = JSON.parse(t.responseText).msg;
                return void ("stripe" === e ? this.stripeService.view.notifyCardErrorMsg(o) : "paypal" === e && this.paypalService.notifyErrorMsg(o))
            } catch (e) {}
            "stripe" === e ? (i = (null == (n = null == t ? void 0 : t.error) ? void 0 : n.message) || this.stripeService.view.getTranslationText(r),
            this.stripeService.view.notifyCardErrorMsg(i)) : "paypal" === e && (i = this.paypalService.getTranslationText(r),
            this.paypalService.notifyErrorMsg(i))
        }
        ,
        c.prototype.clearPaymentError = function(e) {
            function t() {
                i.paypalService.clearErrorMsg()
            }
            function n() {
                i.stripeService.view.clearCardErrorMsg()
            }
            var i = this;
            if (null === (e = void 0 === e ? null : e))
                t(),
                n();
            else if ("paypal" === e)
                t();
            else {
                if ("stripe" !== e)
                    throw "Unknown provider " + e;
                n()
            }
        }
        ,
        c.prototype.enableActionButton = function(e) {
            if ("stripe" === e)
                this.stripeService.view.enableActionButton();
            else if ("paypal" !== e)
                throw "Not implemented provider"
        }
        ,
        c.prototype.disableActionButton = function(e) {
            if ("stripe" === e)
                this.stripeService.view.disableActionButton();
            else if ("paypal" !== e)
                throw "Not implemented provider"
        }
        ,
        c.prototype.initEventListenersOnProviders = function() {
            var t = this;
            this.stripeService.addEventListener("View:ActionButtonClicked", function() {
                t.dispatchEvent(new p.IloveEvent("UserPayment:ActionButtonClicked"))
            }),
            this.paypalService.addEventListener("onPaymentInited", function(e) {
                e = Object.assign({
                    provider: "paypal"
                }, e.detail);
                t.dispatchEvent(new p.IloveEvent("UserPayment:BeforeExternalAction",e))
            }),
            this.paypalService.addEventListener("onPaymentAuthorized", function(e) {
                e = Object.assign({
                    provider: "paypal"
                }, e.detail);
                t.updateUser(e.response),
                t.dispatchEvent(new p.IloveEvent("UserPayment:AfterExternalAction",e))
            }),
            this.paypalService.addEventListener("onPaymentInited_error", function(e) {
                e = Object.assign({
                    provider: "paypal"
                }, e.detail);
                t.dispatchEvent(new p.IloveEvent("UserPayment:Error",e))
            }),
            this.paypalService.addEventListener("onPaymentAuthorized_error", function(e) {
                e = Object.assign({
                    provider: "paypal"
                }, e.detail);
                t.dispatchEvent(new p.IloveEvent("UserPayment:Error",e))
            })
        }
        ,
        c.prototype.updateCard = function(i) {
            return t(this, void 0, void 0, function() {
                var t, n;
                return d(this, function(e) {
                    switch (e.label) {
                    case 0:
                        if ("stripe" !== i.provider)
                            return [3, 5];
                        t = void 0,
                        e.label = 1;
                    case 1:
                        return e.trys.push([1, 3, , 4]),
                        [4, this.stripeService.updateCard(i.element)];
                    case 2:
                        return t = e.sent(),
                        [3, 4];
                    case 3:
                        throw n = e.sent(),
                        f.configureScope(function(e) {
                            e.setExtra("error", {
                                err: null != (e = null == n ? void 0 : n.responseText) ? e : n,
                                params: i
                            })
                        }),
                        f.captureMessage("Failed Stripe updateCard"),
                        n;
                    case 4:
                        return this.updateUser(t),
                        [2, t];
                    case 5:
                        throw "'Update card' is not implemented for provider '" + i.provider + "'"
                    }
                })
            })
        }
        ,
        c.prototype.payPackage = function(o) {
            return t(this, void 0, void 0, function() {
                var t, n, i, r;
                return d(this, function(e) {
                    switch (e.label) {
                    case 0:
                        if ("paypal" === o.provider)
                            throw "This action is performed by PaypalService by mounting the view";
                        if (t = "payPackage",
                        n = null,
                        "stripe" !== o.provider)
                            return [3, 5];
                        i = this.stripeService.paymentVia,
                        i = {
                            paymentVia: i,
                            packageName: o.packageName,
                            quantity: o.packageQuantity,
                            disableTrial: o.disableTrial
                        },
                        this.dispatchEvent(new p.IloveEvent("UserPayment:BeforeAction",{
                            action: t,
                            params: o
                        })),
                        e.label = 1;
                    case 1:
                        return e.trys.push([1, 3, , 4]),
                        [4, this.stripeService.payPackage(i)];
                    case 2:
                        return n = e.sent(),
                        [3, 4];
                    case 3:
                        throw r = e.sent(),
                        f.configureScope(function(e) {
                            e.setExtra("error", {
                                err: null != (e = null == r ? void 0 : r.responseText) ? e : r,
                                params: o
                            })
                        }),
                        f.captureMessage("Failed Stripe payPackage"),
                        r;
                    case 4:
                        return this.updateUser(n),
                        this.dispatchEvent(new p.IloveEvent("UserPayment:AfterAction",{
                            action: t,
                            params: o,
                            response: n
                        })),
                        [2, n];
                    case 5:
                        throw "Unknown provider " + o.provider
                    }
                })
            })
        }
        ,
        c.prototype.subscribeNextMonthsWithDiscount = function() {
            return t(this, void 0, void 0, function() {
                var t, n, i, r, o, a, s;
                return d(this, function(e) {
                    switch (e.label) {
                    case 0:
                        t = "subscribeNextMonthsWithDiscount",
                        this.dispatchEvent(new p.IloveEvent("UserPayment:BeforeAction",{
                            action: t,
                            params: null
                        })),
                        n = u.post(l.CANCEL_SUBSCR_OFFER),
                        e.label = 1;
                    case 1:
                        return e.trys.push([1, 3, , 4]),
                        o = (r = JSON).parse,
                        [4, n.promise()];
                    case 2:
                        return i = o.apply(r, [e.sent()]),
                        [3, 4];
                    case 3:
                        throw a = e.sent(),
                        f.configureScope(function(e) {
                            e.setExtra("error", {
                                err: null != (e = null == a ? void 0 : a.responseText) ? e : a,
                                params: null
                            })
                        }),
                        f.captureMessage("Failed subscribeNextMonthsWithDiscount"),
                        a;
                    case 4:
                        return s = i.data,
                        this.updateUser(i),
                        this.dispatchEvent(new p.IloveEvent("UserPayment:AfterAction",{
                            action: t,
                            params: null,
                            response: i
                        })),
                        [2, s]
                    }
                })
            })
        }
        ,
        c.prototype.cancelSubscription = function() {
            return t(this, void 0, void 0, function() {
                var t, n, i, r, o, a, s;
                return d(this, function(e) {
                    switch (e.label) {
                    case 0:
                        t = "cancelSubscription",
                        this.dispatchEvent(new p.IloveEvent("UserPayment:BeforeAction",{
                            action: t,
                            params: null
                        })),
                        n = u.post(l.CANCEL_SUBSCRIPTION),
                        e.label = 1;
                    case 1:
                        return e.trys.push([1, 3, , 4]),
                        o = (r = JSON).parse,
                        [4, n.promise()];
                    case 2:
                        return i = o.apply(r, [e.sent()]),
                        [3, 4];
                    case 3:
                        throw a = e.sent(),
                        f.configureScope(function(e) {
                            e.setExtra("error", {
                                err: null != (e = null == a ? void 0 : a.responseText) ? e : a,
                                params: null
                            })
                        }),
                        f.captureMessage("Failed cancelSubscription"),
                        a;
                    case 4:
                        return s = i.data,
                        this.updateUser(i),
                        this.dispatchEvent(new p.IloveEvent("UserPayment:AfterAction",{
                            action: t,
                            params: null,
                            response: i
                        })),
                        [2, s]
                    }
                })
            })
        }
        ,
        c.prototype.reactivateSubscription = function() {
            return t(this, void 0, void 0, function() {
                var t, n, i, r, o, a, s;
                return d(this, function(e) {
                    switch (e.label) {
                    case 0:
                        t = "reactivateSubscription",
                        this.dispatchEvent(new p.IloveEvent("UserPayment:BeforeAction",{
                            action: t,
                            params: null
                        })),
                        n = u.post(l.REACTIVATE_SUBSCRIPTION),
                        e.label = 1;
                    case 1:
                        return e.trys.push([1, 3, , 4]),
                        o = (r = JSON).parse,
                        [4, n.promise()];
                    case 2:
                        return i = o.apply(r, [e.sent()]),
                        [3, 4];
                    case 3:
                        throw a = e.sent(),
                        f.configureScope(function(e) {
                            e.setExtra("error", {
                                err: null != (e = null == a ? void 0 : a.responseText) ? e : a,
                                params: null
                            })
                        }),
                        f.captureMessage("Failed reactivateSubscription"),
                        a;
                    case 4:
                        return s = i.data,
                        this.updateUser(i),
                        this.dispatchEvent(new p.IloveEvent("UserPayment:AfterAction",{
                            action: t,
                            params: null,
                            response: i
                        })),
                        [2, s]
                    }
                })
            })
        }
        ,
        c.prototype.cancelSubscriptionReason = function(c) {
            return t(this, void 0, void 0, function() {
                var t, n, i, r, o, a, s;
                return d(this, function(e) {
                    switch (e.label) {
                    case 0:
                        t = "cancelSubscriptionReason",
                        n = {
                            reason: c.reason,
                            message: c.message
                        },
                        this.dispatchEvent(new p.IloveEvent("UserPayment:BeforeAction",{
                            action: t,
                            params: c
                        })),
                        n = u.post(l.CANCEL_SUBSCRIPTION_REASON, n),
                        e.label = 1;
                    case 1:
                        return e.trys.push([1, 3, , 4]),
                        o = (r = JSON).parse,
                        [4, n.promise()];
                    case 2:
                        return i = o.apply(r, [e.sent()]),
                        [3, 4];
                    case 3:
                        throw a = e.sent(),
                        f.configureScope(function(e) {
                            e.setExtra("error", {
                                err: null != (e = null == a ? void 0 : a.responseText) ? e : a,
                                params: c
                            })
                        }),
                        f.captureMessage("Failed cancelSubscriptionReason"),
                        a;
                    case 4:
                        return s = i.data,
                        this.updateUser(i),
                        this.dispatchEvent(new p.IloveEvent("UserPayment:AfterAction",{
                            action: t,
                            params: null,
                            response: i
                        })),
                        [2, s]
                    }
                })
            })
        }
        ,
        c.prototype.paySubscription = function(o) {
            return t(this, void 0, void 0, function() {
                var t, n, i, r;
                return d(this, function(e) {
                    switch (e.label) {
                    case 0:
                        if ("paypal" === o.provider)
                            throw "This action is performed by PaypalService by mounting the view";
                        if (n = "paySubscription",
                        "stripe" !== o.provider)
                            return [3, 5];
                        i = this.stripeService.paymentVia,
                        i = {
                            paymentVia: i,
                            numUsers: o.numUsers,
                            subscriptionInterval: o.subscriptionInterval,
                            disableTrial: o.disableTrial,
                            couponCode: o.couponCode
                        },
                        this.dispatchEvent(new p.IloveEvent("UserPayment:BeforeAction",{
                            detail: {
                                action: n,
                                params: o
                            }
                        })),
                        e.label = 1;
                    case 1:
                        return e.trys.push([1, 3, , 4]),
                        [4, this.stripeService.paySubscription(i)];
                    case 2:
                        return t = e.sent(),
                        [3, 4];
                    case 3:
                        throw r = e.sent(),
                        f.configureScope(function(e) {
                            e.setExtra("error", {
                                err: null != (e = null == r ? void 0 : r.responseText) ? e : r,
                                params: o
                            })
                        }),
                        f.captureMessage("Failed Stripe PaySubscription"),
                        r;
                    case 4:
                        return this.updateUser(t),
                        this.dispatchEvent(new p.IloveEvent("UserPayment:AfterAction",{
                            detail: {
                                action: n,
                                params: null,
                                response: t
                            }
                        })),
                        [2, t];
                    case 5:
                        throw "Unknown provider " + o.provider
                    }
                })
            })
        }
        ,
        c.prototype.updateSubscription = function(o) {
            return t(this, void 0, void 0, function() {
                var t, n, i, r;
                return d(this, function(e) {
                    switch (e.label) {
                    case 0:
                        if ("paypal" === o.provider)
                            throw "This action is performed by PaypalService by mounting the view";
                        if (t = "updateSubscription",
                        "stripe" !== o.provider)
                            return [3, 5];
                        i = this.stripeService.paymentVia,
                        n = void 0,
                        i = {
                            paymentVia: i,
                            numDigitalSignatures: o.numSignatures,
                            numUsers: o.numUsers,
                            subscriptionInterval: o.subscriptionInterval,
                            disableTrial: o.disableTrial,
                            couponCode: o.couponCode
                        },
                        this.dispatchEvent(new p.IloveEvent("UserPayment:BeforeAction",{
                            action: t,
                            params: o
                        })),
                        e.label = 1;
                    case 1:
                        return e.trys.push([1, 3, , 4]),
                        [4, this.stripeService.paySubscription(i)];
                    case 2:
                        return n = e.sent(),
                        [3, 4];
                    case 3:
                        throw r = e.sent(),
                        f.configureScope(function(e) {
                            e.setExtra("error", {
                                err: null != (e = null == r ? void 0 : r.responseText) ? e : r,
                                params: o
                            })
                        }),
                        f.captureMessage("Failed Stripe UpdateSubscription"),
                        r;
                    case 4:
                        return this.updateUser(n),
                        this.dispatchEvent(new p.IloveEvent("UserPayment:AfterAction",{
                            action: t,
                            params: null,
                            response: n
                        })),
                        [2, n];
                    case 5:
                        throw "Unknown provider " + o.provider
                    }
                })
            })
        }
        ,
        c.prototype.paymentRemove = function() {
            return t(this, void 0, void 0, function() {
                var t, n, i, r, o, a, s;
                return d(this, function(e) {
                    switch (e.label) {
                    case 0:
                        t = "paymentRemove",
                        this.dispatchEvent(new p.IloveEvent("UserPayment:BeforeAction",{
                            detail: {
                                action: t,
                                params: null
                            }
                        })),
                        n = u.post(l.REMOVE_PAYMENT_DATA),
                        e.label = 1;
                    case 1:
                        return e.trys.push([1, 3, , 4]),
                        o = (r = JSON).parse,
                        [4, n.promise()];
                    case 2:
                        return i = o.apply(r, [e.sent()]),
                        [3, 4];
                    case 3:
                        throw a = e.sent(),
                        f.configureScope(function(e) {
                            e.setExtra("error", {
                                err: null != (e = null == a ? void 0 : a.responseText) ? e : a,
                                params: null
                            })
                        }),
                        f.captureMessage("Failed paymentRemove"),
                        a;
                    case 4:
                        return s = i.data,
                        this.updateUser(i),
                        this.dispatchEvent(new p.IloveEvent("UserPayment:AfterAction",{
                            detail: {
                                action: t,
                                params: null,
                                response: i
                            }
                        })),
                        [2, s]
                    }
                })
            })
        }
        ,
        c.prototype.getPaymentSummary_updateSubscription = function(e, t, n, i) {
            return this._getPaymentSummary({
                type: "subscription",
                numDigitalSignatures: e,
                numUsers: t,
                subscriptionInterval: n,
                subscriptionPlan: void 0,
                couponCode: i
            })
        }
        ,
        c.prototype.getPaymentSummary_package = function(e, t) {
            return this._getPaymentSummary({
                type: "package",
                package: e,
                quantity: t
            })
        }
        ,
        c.prototype._getPaymentSummary = function(e) {
            var t = l.SUMMARY_INFO
              , t = "en-US" === window.lang ? t.replace("/<locale?>", "") : t.replace("<locale?>", window.lang)
              , n = null;
            return "subscription" === e.type ? n = u.post(t, {
                type: "subscription",
                users: e.numUsers,
                signatures: e.numDigitalSignatures,
                interval: e.subscriptionInterval,
                code: e.couponCode
            }) : "package" === e.type && (n = u.post(t, {
                type: "package",
                package: e.package,
                quantity: e.quantity
            })),
            new Promise(function(t, i) {
                n.done(function(e) {
                    e = JSON.parse(e);
                    t(e)
                }).fail(function(t, e, n) {
                    f.configureScope(function(e) {
                        e.setExtra("error", t.responseText)
                    }),
                    f.captureMessage("Error while fetching payment summary"),
                    i(t.responseText)
                })
            }
            )
        }
        ,
        c.prototype.mountView = function(o, a, s) {
            return t(this, void 0, void 0, function() {
                var t, n, i, r;
                return d(this, function(e) {
                    switch (e.label) {
                    case 0:
                        switch (o) {
                        case "stripe":
                            return [3, 1];
                        case "paypal":
                            return [3, 3]
                        }
                        return [3, 5];
                    case 1:
                        return t = this.views,
                        n = "stripe",
                        [4, this.stripeService.view.mount(a, s)];
                    case 2:
                        return t[n] = e.sent(),
                        [2, this.views.stripe];
                    case 3:
                        return i = this.views,
                        r = "paypal",
                        [4, this.paypalService.mountView(a, s)];
                    case 4:
                        return i[r] = e.sent(),
                        [2, this.views.paypal];
                    case 5:
                        return [2]
                    }
                })
            })
        }
        ,
        c.prototype.updateUser = function(e) {
            s.UserAuth.updateUser(e.user),
            e.content && s.UserAuth.updateUserMenu(e.content)
        }
        ,
        c.prototype.dispatchEvent = function(e) {
            return this.eventEmitter.dispatchEvent(e)
        }
        ,
        c.prototype.addEventListener = function(e, t) {
            return this.eventEmitter.addEventListener(e, t)
        }
        ,
        c);
        function c(e) {
            void 0 === e && (e = {}),
            this.views = {},
            this.eventEmitter = new a.ILoveEventEmitter,
            Object.assign(this, e),
            this.stripeService = new n.StripeService,
            this.paypalService = new o.PaypalService,
            this.initEventListenersOnProviders()
        }
        h.UserPayment = e
    }
    .call(this, m(1))
}
, function(t, e, n) {
    !function(e) {
        t.exports = e.$ = n(84)
    }
    .call(this, n(31))
}
, function(Qt, $t, e) {
    var Jt;
    !function(e, t) {
        "use strict";
        "object" == typeof Qt.exports ? Qt.exports = e.document ? t(e, !0) : function(e) {
            if (e.document)
                return t(e);
            throw new Error("jQuery requires a window with a document")
        }
        : t(e)
    }("undefined" != typeof window ? window : this, function(w, R) {
        "use strict";
        function y(e) {
            return "function" == typeof e && "number" != typeof e.nodeType
        }
        function m(e) {
            return null != e && e === e.window
        }
        var e = []
          , E = w.document
          , M = Object.getPrototypeOf
          , s = e.slice
          , F = e.concat
          , B = e.push
          , U = e.indexOf
          , H = {}
          , q = H.toString
          , W = H.hasOwnProperty
          , V = W.toString
          , z = V.call(Object)
          , v = {}
          , G = {
            type: !0,
            src: !0,
            noModule: !0
        };
        function Y(e, t, n) {
            var i, r = (t = t || E).createElement("script");
            if (r.text = e,
            n)
                for (i in G)
                    n[i] && (r[i] = n[i]);
            t.head.appendChild(r).parentNode.removeChild(r)
        }
        function h(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? H[q.call(e)] || "object" : typeof e
        }
        var S = function(e, t) {
            return new S.fn.init(e,t)
        }
          , K = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
        function X(e) {
            var t = !!e && "length"in e && e.length
              , n = h(e);
            return !y(e) && !m(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
        }
        S.fn = S.prototype = {
            jquery: "3.3.1",
            constructor: S,
            length: 0,
            toArray: function() {
                return s.call(this)
            },
            get: function(e) {
                return null == e ? s.call(this) : e < 0 ? this[e + this.length] : this[e]
            },
            pushStack: function(e) {
                e = S.merge(this.constructor(), e);
                return e.prevObject = this,
                e
            },
            each: function(e) {
                return S.each(this, e)
            },
            map: function(n) {
                return this.pushStack(S.map(this, function(e, t) {
                    return n.call(e, t, e)
                }))
            },
            slice: function() {
                return this.pushStack(s.apply(this, arguments))
            },
            first: function() {
                return this.eq(0)
            },
            last: function() {
                return this.eq(-1)
            },
            eq: function(e) {
                var t = this.length
                  , e = +e + (e < 0 ? t : 0);
                return this.pushStack(0 <= e && e < t ? [this[e]] : [])
            },
            end: function() {
                return this.prevObject || this.constructor()
            },
            push: B,
            sort: e.sort,
            splice: e.splice
        },
        S.extend = S.fn.extend = function() {
            var e, t, n, i, r, o = arguments[0] || {}, a = 1, s = arguments.length, c = !1;
            for ("boolean" == typeof o && (c = o,
            o = arguments[a] || {},
            a++),
            "object" == typeof o || y(o) || (o = {}),
            a === s && (o = this,
            a--); a < s; a++)
                if (null != (e = arguments[a]))
                    for (t in e)
                        r = o[t],
                        o !== (n = e[t]) && (c && n && (S.isPlainObject(n) || (i = Array.isArray(n))) ? (r = i ? (i = !1,
                        r && Array.isArray(r) ? r : []) : r && S.isPlainObject(r) ? r : {},
                        o[t] = S.extend(c, r, n)) : void 0 !== n && (o[t] = n));
            return o
        }
        ,
        S.extend({
            expando: "jQuery" + ("3.3.1" + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function(e) {
                throw new Error(e)
            },
            noop: function() {},
            isPlainObject: function(e) {
                return !(!e || "[object Object]" !== q.call(e) || (e = M(e)) && ("function" != typeof (e = W.call(e, "constructor") && e.constructor) || V.call(e) !== z))
            },
            isEmptyObject: function(e) {
                for (var t in e)
                    return !1;
                return !0
            },
            globalEval: function(e) {
                Y(e)
            },
            each: function(e, t) {
                var n, i = 0;
                if (X(e))
                    for (n = e.length; i < n && !1 !== t.call(e[i], i, e[i]); i++)
                        ;
                else
                    for (i in e)
                        if (!1 === t.call(e[i], i, e[i]))
                            break;
                return e
            },
            trim: function(e) {
                return null == e ? "" : (e + "").replace(K, "")
            },
            makeArray: function(e, t) {
                t = t || [];
                return null != e && (X(Object(e)) ? S.merge(t, "string" == typeof e ? [e] : e) : B.call(t, e)),
                t
            },
            inArray: function(e, t, n) {
                return null == t ? -1 : U.call(t, e, n)
            },
            merge: function(e, t) {
                for (var n = +t.length, i = 0, r = e.length; i < n; i++)
                    e[r++] = t[i];
                return e.length = r,
                e
            },
            grep: function(e, t, n) {
                for (var i = [], r = 0, o = e.length, a = !n; r < o; r++)
                    !t(e[r], r) != a && i.push(e[r]);
                return i
            },
            map: function(e, t, n) {
                var i, r, o = 0, a = [];
                if (X(e))
                    for (i = e.length; o < i; o++)
                        null != (r = t(e[o], o, n)) && a.push(r);
                else
                    for (o in e)
                        null != (r = t(e[o], o, n)) && a.push(r);
                return F.apply([], a)
            },
            guid: 1,
            support: v
        }),
        "function" == typeof Symbol && (S.fn[Symbol.iterator] = e[Symbol.iterator]),
        S.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
            H["[object " + t + "]"] = t.toLowerCase()
        });
        function i(e, t, n) {
            for (var i = [], r = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
                if (1 === e.nodeType) {
                    if (r && S(e).is(n))
                        break;
                    i.push(e)
                }
            return i
        }
        function Q(e, t) {
            for (var n = []; e; e = e.nextSibling)
                1 === e.nodeType && e !== t && n.push(e);
            return n
        }
        var e = function(R) {
            function d(e, t, n) {
                var i = "0x" + t - 65536;
                return i != i || n ? t : i < 0 ? String.fromCharCode(65536 + i) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
            }
            function M(e, t) {
                return t ? "\0" === e ? "�" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
            }
            function F() {
                E()
            }
            var e, p, b, o, B, h, U, H, w, c, u, E, S, n, T, m, i, r, v, O = "sizzle" + +new Date, g = R.document, x = 0, q = 0, W = de(), V = de(), y = de(), z = function(e, t) {
                return e === t && (u = !0),
                0
            }, G = {}.hasOwnProperty, t = [], Y = t.pop, K = t.push, C = t.push, X = t.slice, _ = function(e, t) {
                for (var n = 0, i = e.length; n < i; n++)
                    if (e[n] === t)
                        return n;
                return -1
            }, Q = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", a = "[\\x20\\t\\r\\n\\f]", s = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+", $ = "\\[" + a + "*(" + s + ")(?:" + a + "*([*^$|!~]?=)" + a + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + s + "))|)" + a + "*\\]", J = ":(" + s + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + $ + ")*)|.*)\\)|)", Z = new RegExp(a + "+","g"), A = new RegExp("^" + a + "+|((?:^|[^\\\\])(?:\\\\.)*)" + a + "+$","g"), ee = new RegExp("^" + a + "*," + a + "*"), te = new RegExp("^" + a + "*([>+~]|" + a + ")" + a + "*"), ne = new RegExp("=" + a + "*([^\\]'\"]*?)" + a + "*\\]","g"), ie = new RegExp(J), re = new RegExp("^" + s + "$"), f = {
                ID: new RegExp("^#(" + s + ")"),
                CLASS: new RegExp("^\\.(" + s + ")"),
                TAG: new RegExp("^(" + s + "|[*])"),
                ATTR: new RegExp("^" + $),
                PSEUDO: new RegExp("^" + J),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + a + "*(even|odd|(([+-]|)(\\d*)n|)" + a + "*(?:([+-]|)" + a + "*(\\d+)|))" + a + "*\\)|)","i"),
                bool: new RegExp("^(?:" + Q + ")$","i"),
                needsContext: new RegExp("^" + a + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + a + "*((?:-\\d)?\\d*)" + a + "*\\)|)(?=[^-]|$)","i")
            }, oe = /^(?:input|select|textarea|button)$/i, ae = /^h\d$/i, l = /^[^{]+\{\s*\[native \w/, se = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ce = /[+~]/, P = new RegExp("\\\\([\\da-f]{1,6}" + a + "?|(" + a + ")|.)","ig"), ue = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, le = N(function(e) {
                return !0 === e.disabled && ("form"in e || "label"in e)
            }, {
                dir: "parentNode",
                next: "legend"
            });
            try {
                C.apply(t = X.call(g.childNodes), g.childNodes),
                t[g.childNodes.length].nodeType
            } catch (e) {
                C = {
                    apply: t.length ? function(e, t) {
                        K.apply(e, X.call(t))
                    }
                    : function(e, t) {
                        for (var n = e.length, i = 0; e[n++] = t[i++]; )
                            ;
                        e.length = n - 1
                    }
                }
            }
            function I(e, t, n, i) {
                var r, o, a, s, c, u, l, d = t && t.ownerDocument, f = t ? t.nodeType : 9;
                if (n = n || [],
                "string" != typeof e || !e || 1 !== f && 9 !== f && 11 !== f)
                    return n;
                if (!i && ((t ? t.ownerDocument || t : g) !== S && E(t),
                t = t || S,
                T)) {
                    if (11 !== f && (c = se.exec(e)))
                        if (r = c[1]) {
                            if (9 === f) {
                                if (!(a = t.getElementById(r)))
                                    return n;
                                if (a.id === r)
                                    return n.push(a),
                                    n
                            } else if (d && (a = d.getElementById(r)) && v(t, a) && a.id === r)
                                return n.push(a),
                                n
                        } else {
                            if (c[2])
                                return C.apply(n, t.getElementsByTagName(e)),
                                n;
                            if ((r = c[3]) && p.getElementsByClassName && t.getElementsByClassName)
                                return C.apply(n, t.getElementsByClassName(r)),
                                n
                        }
                    if (p.qsa && !y[e + " "] && (!m || !m.test(e))) {
                        if (1 !== f)
                            d = t,
                            l = e;
                        else if ("object" !== t.nodeName.toLowerCase()) {
                            for ((s = t.getAttribute("id")) ? s = s.replace(ue, M) : t.setAttribute("id", s = O),
                            o = (u = h(e)).length; o--; )
                                u[o] = "#" + s + " " + D(u[o]);
                            l = u.join(","),
                            d = ce.test(e) && me(t.parentNode) || t
                        }
                        if (l)
                            try {
                                return C.apply(n, d.querySelectorAll(l)),
                                n
                            } catch (e) {} finally {
                                s === O && t.removeAttribute("id")
                            }
                    }
                }
                return H(e.replace(A, "$1"), t, n, i)
            }
            function de() {
                var n = [];
                function i(e, t) {
                    return n.push(e + " ") > b.cacheLength && delete i[n.shift()],
                    i[e + " "] = t
                }
                return i
            }
            function k(e) {
                return e[O] = !0,
                e
            }
            function L(e) {
                var t = S.createElement("fieldset");
                try {
                    return !!e(t)
                } catch (e) {
                    return !1
                } finally {
                    t.parentNode && t.parentNode.removeChild(t)
                }
            }
            function fe(e, t) {
                for (var n = e.split("|"), i = n.length; i--; )
                    b.attrHandle[n[i]] = t
            }
            function pe(e, t) {
                var n = t && e
                  , i = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
                if (i)
                    return i;
                if (n)
                    for (; n = n.nextSibling; )
                        if (n === t)
                            return -1;
                return e ? 1 : -1
            }
            function he(t) {
                return function(e) {
                    return "form"in e ? e.parentNode && !1 === e.disabled ? "label"in e ? "label"in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && le(e) === t : e.disabled === t : "label"in e && e.disabled === t
                }
            }
            function j(a) {
                return k(function(o) {
                    return o = +o,
                    k(function(e, t) {
                        for (var n, i = a([], e.length, o), r = i.length; r--; )
                            e[n = i[r]] && (e[n] = !(t[n] = e[n]))
                    })
                })
            }
            function me(e) {
                return e && void 0 !== e.getElementsByTagName && e
            }
            for (e in p = I.support = {},
            B = I.isXML = function(e) {
                e = e && (e.ownerDocument || e).documentElement;
                return !!e && "HTML" !== e.nodeName
            }
            ,
            E = I.setDocument = function(e) {
                var e = e ? e.ownerDocument || e : g;
                return e !== S && 9 === e.nodeType && e.documentElement && (n = (S = e).documentElement,
                T = !B(S),
                g !== S && (e = S.defaultView) && e.top !== e && (e.addEventListener ? e.addEventListener("unload", F, !1) : e.attachEvent && e.attachEvent("onunload", F)),
                p.attributes = L(function(e) {
                    return e.className = "i",
                    !e.getAttribute("className")
                }),
                p.getElementsByTagName = L(function(e) {
                    return e.appendChild(S.createComment("")),
                    !e.getElementsByTagName("*").length
                }),
                p.getElementsByClassName = l.test(S.getElementsByClassName),
                p.getById = L(function(e) {
                    return n.appendChild(e).id = O,
                    !S.getElementsByName || !S.getElementsByName(O).length
                }),
                p.getById ? (b.filter.ID = function(e) {
                    var t = e.replace(P, d);
                    return function(e) {
                        return e.getAttribute("id") === t
                    }
                }
                ,
                b.find.ID = function(e, t) {
                    if (void 0 !== t.getElementById && T)
                        return (t = t.getElementById(e)) ? [t] : []
                }
                ) : (b.filter.ID = function(e) {
                    var t = e.replace(P, d);
                    return function(e) {
                        e = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
                        return e && e.value === t
                    }
                }
                ,
                b.find.ID = function(e, t) {
                    if (void 0 !== t.getElementById && T) {
                        var n, i, r, o = t.getElementById(e);
                        if (o) {
                            if ((n = o.getAttributeNode("id")) && n.value === e)
                                return [o];
                            for (r = t.getElementsByName(e),
                            i = 0; o = r[i++]; )
                                if ((n = o.getAttributeNode("id")) && n.value === e)
                                    return [o]
                        }
                        return []
                    }
                }
                ),
                b.find.TAG = p.getElementsByTagName ? function(e, t) {
                    return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : p.qsa ? t.querySelectorAll(e) : void 0
                }
                : function(e, t) {
                    var n, i = [], r = 0, o = t.getElementsByTagName(e);
                    if ("*" !== e)
                        return o;
                    for (; n = o[r++]; )
                        1 === n.nodeType && i.push(n);
                    return i
                }
                ,
                b.find.CLASS = p.getElementsByClassName && function(e, t) {
                    if (void 0 !== t.getElementsByClassName && T)
                        return t.getElementsByClassName(e)
                }
                ,
                i = [],
                m = [],
                (p.qsa = l.test(S.querySelectorAll)) && (L(function(e) {
                    n.appendChild(e).innerHTML = "<a id='" + O + "'></a><select id='" + O + "-\r\\' msallowcapture=''><option selected=''></option></select>",
                    e.querySelectorAll("[msallowcapture^='']").length && m.push("[*^$]=" + a + "*(?:''|\"\")"),
                    e.querySelectorAll("[selected]").length || m.push("\\[" + a + "*(?:value|" + Q + ")"),
                    e.querySelectorAll("[id~=" + O + "-]").length || m.push("~="),
                    e.querySelectorAll(":checked").length || m.push(":checked"),
                    e.querySelectorAll("a#" + O + "+*").length || m.push(".#.+[+~]")
                }),
                L(function(e) {
                    e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                    var t = S.createElement("input");
                    t.setAttribute("type", "hidden"),
                    e.appendChild(t).setAttribute("name", "D"),
                    e.querySelectorAll("[name=d]").length && m.push("name" + a + "*[*^$|!~]?="),
                    2 !== e.querySelectorAll(":enabled").length && m.push(":enabled", ":disabled"),
                    n.appendChild(e).disabled = !0,
                    2 !== e.querySelectorAll(":disabled").length && m.push(":enabled", ":disabled"),
                    e.querySelectorAll("*,:x"),
                    m.push(",.*:")
                })),
                (p.matchesSelector = l.test(r = n.matches || n.webkitMatchesSelector || n.mozMatchesSelector || n.oMatchesSelector || n.msMatchesSelector)) && L(function(e) {
                    p.disconnectedMatch = r.call(e, "*"),
                    r.call(e, "[s!='']:x"),
                    i.push("!=", J)
                }),
                m = m.length && new RegExp(m.join("|")),
                i = i.length && new RegExp(i.join("|")),
                e = l.test(n.compareDocumentPosition),
                v = e || l.test(n.contains) ? function(e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e
                      , t = t && t.parentNode;
                    return e === t || !(!t || 1 !== t.nodeType || !(n.contains ? n.contains(t) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(t)))
                }
                : function(e, t) {
                    if (t)
                        for (; t = t.parentNode; )
                            if (t === e)
                                return !0;
                    return !1
                }
                ,
                z = e ? function(e, t) {
                    var n;
                    return e === t ? (u = !0,
                    0) : (n = !e.compareDocumentPosition - !t.compareDocumentPosition) || (1 & (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !p.sortDetached && t.compareDocumentPosition(e) === n ? e === S || e.ownerDocument === g && v(g, e) ? -1 : t === S || t.ownerDocument === g && v(g, t) ? 1 : c ? _(c, e) - _(c, t) : 0 : 4 & n ? -1 : 1)
                }
                : function(e, t) {
                    if (e === t)
                        return u = !0,
                        0;
                    var n, i = 0, r = e.parentNode, o = t.parentNode, a = [e], s = [t];
                    if (!r || !o)
                        return e === S ? -1 : t === S ? 1 : r ? -1 : o ? 1 : c ? _(c, e) - _(c, t) : 0;
                    if (r === o)
                        return pe(e, t);
                    for (n = e; n = n.parentNode; )
                        a.unshift(n);
                    for (n = t; n = n.parentNode; )
                        s.unshift(n);
                    for (; a[i] === s[i]; )
                        i++;
                    return i ? pe(a[i], s[i]) : a[i] === g ? -1 : s[i] === g ? 1 : 0
                }
                ),
                S
            }
            ,
            I.matches = function(e, t) {
                return I(e, null, null, t)
            }
            ,
            I.matchesSelector = function(e, t) {
                if ((e.ownerDocument || e) !== S && E(e),
                t = t.replace(ne, "='$1']"),
                p.matchesSelector && T && !y[t + " "] && (!i || !i.test(t)) && (!m || !m.test(t)))
                    try {
                        var n = r.call(e, t);
                        if (n || p.disconnectedMatch || e.document && 11 !== e.document.nodeType)
                            return n
                    } catch (e) {}
                return 0 < I(t, S, null, [e]).length
            }
            ,
            I.contains = function(e, t) {
                return (e.ownerDocument || e) !== S && E(e),
                v(e, t)
            }
            ,
            I.attr = function(e, t) {
                (e.ownerDocument || e) !== S && E(e);
                var n = b.attrHandle[t.toLowerCase()]
                  , n = n && G.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !T) : void 0;
                return void 0 !== n ? n : p.attributes || !T ? e.getAttribute(t) : (n = e.getAttributeNode(t)) && n.specified ? n.value : null
            }
            ,
            I.escape = function(e) {
                return (e + "").replace(ue, M)
            }
            ,
            I.error = function(e) {
                throw new Error("Syntax error, unrecognized expression: " + e)
            }
            ,
            I.uniqueSort = function(e) {
                var t, n = [], i = 0, r = 0;
                if (u = !p.detectDuplicates,
                c = !p.sortStable && e.slice(0),
                e.sort(z),
                u) {
                    for (; t = e[r++]; )
                        t === e[r] && (i = n.push(r));
                    for (; i--; )
                        e.splice(n[i], 1)
                }
                return c = null,
                e
            }
            ,
            o = I.getText = function(e) {
                var t, n = "", i = 0, r = e.nodeType;
                if (r) {
                    if (1 === r || 9 === r || 11 === r) {
                        if ("string" == typeof e.textContent)
                            return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling)
                            n += o(e)
                    } else if (3 === r || 4 === r)
                        return e.nodeValue
                } else
                    for (; t = e[i++]; )
                        n += o(t);
                return n
            }
            ,
            (b = I.selectors = {
                cacheLength: 50,
                createPseudo: k,
                match: f,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(e) {
                        return e[1] = e[1].replace(P, d),
                        e[3] = (e[3] || e[4] || e[5] || "").replace(P, d),
                        "~=" === e[2] && (e[3] = " " + e[3] + " "),
                        e.slice(0, 4)
                    },
                    CHILD: function(e) {
                        return e[1] = e[1].toLowerCase(),
                        "nth" === e[1].slice(0, 3) ? (e[3] || I.error(e[0]),
                        e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])),
                        e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && I.error(e[0]),
                        e
                    },
                    PSEUDO: function(e) {
                        var t, n = !e[6] && e[2];
                        return f.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && ie.test(n) && (t = (t = h(n, !0)) && n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t),
                        e[2] = n.slice(0, t)),
                        e.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(e) {
                        var t = e.replace(P, d).toLowerCase();
                        return "*" === e ? function() {
                            return !0
                        }
                        : function(e) {
                            return e.nodeName && e.nodeName.toLowerCase() === t
                        }
                    },
                    CLASS: function(e) {
                        var t = W[e + " "];
                        return t || (t = new RegExp("(^|" + a + ")" + e + "(" + a + "|$)")) && W(e, function(e) {
                            return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(t, n, i) {
                        return function(e) {
                            e = I.attr(e, t);
                            return null == e ? "!=" === n : !n || (e += "",
                            "=" === n ? e === i : "!=" === n ? e !== i : "^=" === n ? i && 0 === e.indexOf(i) : "*=" === n ? i && -1 < e.indexOf(i) : "$=" === n ? i && e.slice(-i.length) === i : "~=" === n ? -1 < (" " + e.replace(Z, " ") + " ").indexOf(i) : "|=" === n && (e === i || e.slice(0, i.length + 1) === i + "-"))
                        }
                    },
                    CHILD: function(h, e, t, m, v) {
                        var g = "nth" !== h.slice(0, 3)
                          , y = "last" !== h.slice(-4)
                          , _ = "of-type" === e;
                        return 1 === m && 0 === v ? function(e) {
                            return !!e.parentNode
                        }
                        : function(e, t, n) {
                            var i, r, o, a, s, c, u = g != y ? "nextSibling" : "previousSibling", l = e.parentNode, d = _ && e.nodeName.toLowerCase(), f = !n && !_, p = !1;
                            if (l) {
                                if (g) {
                                    for (; u; ) {
                                        for (a = e; a = a[u]; )
                                            if (_ ? a.nodeName.toLowerCase() === d : 1 === a.nodeType)
                                                return !1;
                                        c = u = "only" === h && !c && "nextSibling"
                                    }
                                    return !0
                                }
                                if (c = [y ? l.firstChild : l.lastChild],
                                y && f) {
                                    for (p = (s = (i = (r = (o = (a = l)[O] || (a[O] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === x && i[1]) && i[2],
                                    a = s && l.childNodes[s]; a = ++s && a && a[u] || (p = s = 0,
                                    c.pop()); )
                                        if (1 === a.nodeType && ++p && a === e) {
                                            r[h] = [x, s, p];
                                            break
                                        }
                                } else if (!1 === (p = f ? s = (i = (r = (o = (a = e)[O] || (a[O] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === x && i[1] : p))
                                    for (; (a = ++s && a && a[u] || (p = s = 0,
                                    c.pop())) && ((_ ? a.nodeName.toLowerCase() !== d : 1 !== a.nodeType) || !++p || (f && ((r = (o = a[O] || (a[O] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] = [x, p]),
                                    a !== e)); )
                                        ;
                                return (p -= v) === m || p % m == 0 && 0 <= p / m
                            }
                        }
                    },
                    PSEUDO: function(e, o) {
                        var t, a = b.pseudos[e] || b.setFilters[e.toLowerCase()] || I.error("unsupported pseudo: " + e);
                        return a[O] ? a(o) : 1 < a.length ? (t = [e, e, "", o],
                        b.setFilters.hasOwnProperty(e.toLowerCase()) ? k(function(e, t) {
                            for (var n, i = a(e, o), r = i.length; r--; )
                                e[n = _(e, i[r])] = !(t[n] = i[r])
                        }) : function(e) {
                            return a(e, 0, t)
                        }
                        ) : a
                    }
                },
                pseudos: {
                    not: k(function(e) {
                        var i = []
                          , r = []
                          , s = U(e.replace(A, "$1"));
                        return s[O] ? k(function(e, t, n, i) {
                            for (var r, o = s(e, null, i, []), a = e.length; a--; )
                                (r = o[a]) && (e[a] = !(t[a] = r))
                        }) : function(e, t, n) {
                            return i[0] = e,
                            s(i, null, n, r),
                            i[0] = null,
                            !r.pop()
                        }
                    }),
                    has: k(function(t) {
                        return function(e) {
                            return 0 < I(t, e).length
                        }
                    }),
                    contains: k(function(t) {
                        return t = t.replace(P, d),
                        function(e) {
                            return -1 < (e.textContent || e.innerText || o(e)).indexOf(t)
                        }
                    }),
                    lang: k(function(n) {
                        return re.test(n || "") || I.error("unsupported lang: " + n),
                        n = n.replace(P, d).toLowerCase(),
                        function(e) {
                            var t;
                            do {
                                if (t = T ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang"))
                                    return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
                            } while ((e = e.parentNode) && 1 === e.nodeType);
                            return !1
                        }
                    }),
                    target: function(e) {
                        var t = R.location && R.location.hash;
                        return t && t.slice(1) === e.id
                    },
                    root: function(e) {
                        return e === n
                    },
                    focus: function(e) {
                        return e === S.activeElement && (!S.hasFocus || S.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                    },
                    enabled: he(!1),
                    disabled: he(!0),
                    checked: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && !!e.checked || "option" === t && !!e.selected
                    },
                    selected: function(e) {
                        return e.parentNode && e.parentNode.selectedIndex,
                        !0 === e.selected
                    },
                    empty: function(e) {
                        for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeType < 6)
                                return !1;
                        return !0
                    },
                    parent: function(e) {
                        return !b.pseudos.empty(e)
                    },
                    header: function(e) {
                        return ae.test(e.nodeName)
                    },
                    input: function(e) {
                        return oe.test(e.nodeName)
                    },
                    button: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && "button" === e.type || "button" === t
                    },
                    text: function(e) {
                        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (e = e.getAttribute("type")) || "text" === e.toLowerCase())
                    },
                    first: j(function() {
                        return [0]
                    }),
                    last: j(function(e, t) {
                        return [t - 1]
                    }),
                    eq: j(function(e, t, n) {
                        return [n < 0 ? n + t : n]
                    }),
                    even: j(function(e, t) {
                        for (var n = 0; n < t; n += 2)
                            e.push(n);
                        return e
                    }),
                    odd: j(function(e, t) {
                        for (var n = 1; n < t; n += 2)
                            e.push(n);
                        return e
                    }),
                    lt: j(function(e, t, n) {
                        for (var i = n < 0 ? n + t : n; 0 <= --i; )
                            e.push(i);
                        return e
                    }),
                    gt: j(function(e, t, n) {
                        for (var i = n < 0 ? n + t : n; ++i < t; )
                            e.push(i);
                        return e
                    })
                }
            }).pseudos.nth = b.pseudos.eq,
            {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            })
                b.pseudos[e] = function(t) {
                    return function(e) {
                        return "input" === e.nodeName.toLowerCase() && e.type === t
                    }
                }(e);
            for (e in {
                submit: !0,
                reset: !0
            })
                b.pseudos[e] = function(n) {
                    return function(e) {
                        var t = e.nodeName.toLowerCase();
                        return ("input" === t || "button" === t) && e.type === n
                    }
                }(e);
            function ve() {}
            function D(e) {
                for (var t = 0, n = e.length, i = ""; t < n; t++)
                    i += e[t].value;
                return i
            }
            function N(a, e, t) {
                var s = e.dir
                  , c = e.next
                  , u = c || s
                  , l = t && "parentNode" === u
                  , d = q++;
                return e.first ? function(e, t, n) {
                    for (; e = e[s]; )
                        if (1 === e.nodeType || l)
                            return a(e, t, n);
                    return !1
                }
                : function(e, t, n) {
                    var i, r, o = [x, d];
                    if (n) {
                        for (; e = e[s]; )
                            if ((1 === e.nodeType || l) && a(e, t, n))
                                return !0
                    } else
                        for (; e = e[s]; )
                            if (1 === e.nodeType || l)
                                if (r = (r = e[O] || (e[O] = {}))[e.uniqueID] || (r[e.uniqueID] = {}),
                                c && c === e.nodeName.toLowerCase())
                                    e = e[s] || e;
                                else {
                                    if ((i = r[u]) && i[0] === x && i[1] === d)
                                        return o[2] = i[2];
                                    if ((r[u] = o)[2] = a(e, t, n))
                                        return !0
                                }
                    return !1
                }
            }
            function ge(r) {
                return 1 < r.length ? function(e, t, n) {
                    for (var i = r.length; i--; )
                        if (!r[i](e, t, n))
                            return !1;
                    return !0
                }
                : r[0]
            }
            function ye(e, t, n, i, r) {
                for (var o, a = [], s = 0, c = e.length, u = null != t; s < c; s++)
                    !(o = e[s]) || n && !n(o, i, r) || (a.push(o),
                    u && t.push(s));
                return a
            }
            function _e(p, h, m, v, g, e) {
                return v && !v[O] && (v = _e(v)),
                g && !g[O] && (g = _e(g, e)),
                k(function(e, t, n, i) {
                    var r, o, a, s = [], c = [], u = t.length, l = e || function(e, t, n) {
                        for (var i = 0, r = t.length; i < r; i++)
                            I(e, t[i], n);
                        return n
                    }(h || "*", n.nodeType ? [n] : n, []), d = !p || !e && h ? l : ye(l, s, p, n, i), f = m ? g || (e ? p : u || v) ? [] : t : d;
                    if (m && m(d, f, n, i),
                    v)
                        for (r = ye(f, c),
                        v(r, [], n, i),
                        o = r.length; o--; )
                            (a = r[o]) && (f[c[o]] = !(d[c[o]] = a));
                    if (e) {
                        if (g || p) {
                            if (g) {
                                for (r = [],
                                o = f.length; o--; )
                                    (a = f[o]) && r.push(d[o] = a);
                                g(null, f = [], r, i)
                            }
                            for (o = f.length; o--; )
                                (a = f[o]) && -1 < (r = g ? _(e, a) : s[o]) && (e[r] = !(t[r] = a))
                        }
                    } else
                        f = ye(f === t ? f.splice(u, f.length) : f),
                        g ? g(null, t, f, i) : C.apply(t, f)
                })
            }
            function be(v, g) {
                function e(e, t, n, i, r) {
                    var o, a, s, c = 0, u = "0", l = e && [], d = [], f = w, p = e || _ && b.find.TAG("*", r), h = x += null == f ? 1 : Math.random() || .1, m = p.length;
                    for (r && (w = t === S || t || r); u !== m && null != (o = p[u]); u++) {
                        if (_ && o) {
                            for (a = 0,
                            t || o.ownerDocument === S || (E(o),
                            n = !T); s = v[a++]; )
                                if (s(o, t || S, n)) {
                                    i.push(o);
                                    break
                                }
                            r && (x = h)
                        }
                        y && ((o = !s && o) && c--,
                        e) && l.push(o)
                    }
                    if (c += u,
                    y && u !== c) {
                        for (a = 0; s = g[a++]; )
                            s(l, d, t, n);
                        if (e) {
                            if (0 < c)
                                for (; u--; )
                                    l[u] || d[u] || (d[u] = Y.call(i));
                            d = ye(d)
                        }
                        C.apply(i, d),
                        r && !e && 0 < d.length && 1 < c + g.length && I.uniqueSort(i)
                    }
                    return r && (x = h,
                    w = f),
                    l
                }
                var y = 0 < g.length
                  , _ = 0 < v.length;
                return y ? k(e) : e
            }
            return ve.prototype = b.filters = b.pseudos,
            b.setFilters = new ve,
            h = I.tokenize = function(e, t) {
                var n, i, r, o, a, s, c, u = V[e + " "];
                if (u)
                    return t ? 0 : u.slice(0);
                for (a = e,
                s = [],
                c = b.preFilter; a; ) {
                    for (o in n && !(i = ee.exec(a)) || (i && (a = a.slice(i[0].length) || a),
                    s.push(r = [])),
                    n = !1,
                    (i = te.exec(a)) && (n = i.shift(),
                    r.push({
                        value: n,
                        type: i[0].replace(A, " ")
                    }),
                    a = a.slice(n.length)),
                    b.filter)
                        !(i = f[o].exec(a)) || c[o] && !(i = c[o](i)) || (n = i.shift(),
                        r.push({
                            value: n,
                            type: o,
                            matches: i
                        }),
                        a = a.slice(n.length));
                    if (!n)
                        break
                }
                return t ? a.length : a ? I.error(e) : V(e, s).slice(0)
            }
            ,
            U = I.compile = function(e, t) {
                var n, i = [], r = [], o = y[e + " "];
                if (!o) {
                    for (n = (t = t || h(e)).length; n--; )
                        ((o = function e(t) {
                            for (var i, n, r, o = t.length, a = b.relative[t[0].type], s = a || b.relative[" "], c = a ? 1 : 0, u = N(function(e) {
                                return e === i
                            }, s, !0), l = N(function(e) {
                                return -1 < _(i, e)
                            }, s, !0), d = [function(e, t, n) {
                                return e = !a && (n || t !== w) || ((i = t).nodeType ? u : l)(e, t, n),
                                i = null,
                                e
                            }
                            ]; c < o; c++)
                                if (n = b.relative[t[c].type])
                                    d = [N(ge(d), n)];
                                else {
                                    if ((n = b.filter[t[c].type].apply(null, t[c].matches))[O]) {
                                        for (r = ++c; r < o && !b.relative[t[r].type]; r++)
                                            ;
                                        return _e(1 < c && ge(d), 1 < c && D(t.slice(0, c - 1).concat({
                                            value: " " === t[c - 2].type ? "*" : ""
                                        })).replace(A, "$1"), n, c < r && e(t.slice(c, r)), r < o && e(t = t.slice(r)), r < o && D(t))
                                    }
                                    d.push(n)
                                }
                            return ge(d)
                        }(t[n]))[O] ? i : r).push(o);
                    (o = y(e, be(r, i))).selector = e
                }
                return o
            }
            ,
            H = I.select = function(e, t, n, i) {
                var r, o, a, s, c, u = "function" == typeof e && e, l = !i && h(e = u.selector || e);
                if (n = n || [],
                1 === l.length) {
                    if (2 < (o = l[0] = l[0].slice(0)).length && "ID" === (a = o[0]).type && 9 === t.nodeType && T && b.relative[o[1].type]) {
                        if (!(t = (b.find.ID(a.matches[0].replace(P, d), t) || [])[0]))
                            return n;
                        u && (t = t.parentNode),
                        e = e.slice(o.shift().value.length)
                    }
                    for (r = f.needsContext.test(e) ? 0 : o.length; r-- && (a = o[r],
                    !b.relative[s = a.type]); )
                        if ((c = b.find[s]) && (i = c(a.matches[0].replace(P, d), ce.test(o[0].type) && me(t.parentNode) || t))) {
                            if (o.splice(r, 1),
                            e = i.length && D(o))
                                break;
                            return C.apply(n, i),
                            n
                        }
                }
                return (u || U(e, l))(i, t, !T, n, !t || ce.test(e) && me(t.parentNode) || t),
                n
            }
            ,
            p.sortStable = O.split("").sort(z).join("") === O,
            p.detectDuplicates = !!u,
            E(),
            p.sortDetached = L(function(e) {
                return 1 & e.compareDocumentPosition(S.createElement("fieldset"))
            }),
            L(function(e) {
                return e.innerHTML = "<a href='#'></a>",
                "#" === e.firstChild.getAttribute("href")
            }) || fe("type|href|height|width", function(e, t, n) {
                if (!n)
                    return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
            }),
            p.attributes && L(function(e) {
                return e.innerHTML = "<input/>",
                e.firstChild.setAttribute("value", ""),
                "" === e.firstChild.getAttribute("value")
            }) || fe("value", function(e, t, n) {
                if (!n && "input" === e.nodeName.toLowerCase())
                    return e.defaultValue
            }),
            L(function(e) {
                return null == e.getAttribute("disabled")
            }) || fe(Q, function(e, t, n) {
                if (!n)
                    return !0 === e[t] ? t.toLowerCase() : (n = e.getAttributeNode(t)) && n.specified ? n.value : null
            }),
            I
        }(w)
          , $ = (S.find = e,
        S.expr = e.selectors,
        S.expr[":"] = S.expr.pseudos,
        S.uniqueSort = S.unique = e.uniqueSort,
        S.text = e.getText,
        S.isXMLDoc = e.isXML,
        S.contains = e.contains,
        S.escapeSelector = e.escape,
        S.expr.match.needsContext);
        function c(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        }
        var J = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
        function Z(e, n, i) {
            return y(n) ? S.grep(e, function(e, t) {
                return !!n.call(e, t, e) !== i
            }) : n.nodeType ? S.grep(e, function(e) {
                return e === n !== i
            }) : "string" != typeof n ? S.grep(e, function(e) {
                return -1 < U.call(n, e) !== i
            }) : S.filter(n, e, i)
        }
        S.filter = function(e, t, n) {
            var i = t[0];
            return n && (e = ":not(" + e + ")"),
            1 === t.length && 1 === i.nodeType ? S.find.matchesSelector(i, e) ? [i] : [] : S.find.matches(e, S.grep(t, function(e) {
                return 1 === e.nodeType
            }))
        }
        ,
        S.fn.extend({
            find: function(e) {
                var t, n, i = this.length, r = this;
                if ("string" != typeof e)
                    return this.pushStack(S(e).filter(function() {
                        for (t = 0; t < i; t++)
                            if (S.contains(r[t], this))
                                return !0
                    }));
                for (n = this.pushStack([]),
                t = 0; t < i; t++)
                    S.find(e, r[t], n);
                return 1 < i ? S.uniqueSort(n) : n
            },
            filter: function(e) {
                return this.pushStack(Z(this, e || [], !1))
            },
            not: function(e) {
                return this.pushStack(Z(this, e || [], !0))
            },
            is: function(e) {
                return !!Z(this, "string" == typeof e && $.test(e) ? S(e) : e || [], !1).length
            }
        });
        var ee, te = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/, ne = ((S.fn.init = function(e, t, n) {
            if (e) {
                if (n = n || ee,
                "string" != typeof e)
                    return e.nodeType ? (this[0] = e,
                    this.length = 1,
                    this) : y(e) ? void 0 !== n.ready ? n.ready(e) : e(S) : S.makeArray(e, this);
                if (!(i = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : te.exec(e)) || !i[1] && t)
                    return (!t || t.jquery ? t || n : this.constructor(t)).find(e);
                if (i[1]) {
                    if (t = t instanceof S ? t[0] : t,
                    S.merge(this, S.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : E, !0)),
                    J.test(i[1]) && S.isPlainObject(t))
                        for (var i in t)
                            y(this[i]) ? this[i](t[i]) : this.attr(i, t[i])
                } else
                    (n = E.getElementById(i[2])) && (this[0] = n,
                    this.length = 1)
            }
            return this
        }
        ).prototype = S.fn,
        ee = S(E),
        /^(?:parents|prev(?:Until|All))/), ie = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
        function re(e, t) {
            for (; (e = e[t]) && 1 !== e.nodeType; )
                ;
            return e
        }
        S.fn.extend({
            has: function(e) {
                var t = S(e, this)
                  , n = t.length;
                return this.filter(function() {
                    for (var e = 0; e < n; e++)
                        if (S.contains(this, t[e]))
                            return !0
                })
            },
            closest: function(e, t) {
                var n, i = 0, r = this.length, o = [], a = "string" != typeof e && S(e);
                if (!$.test(e))
                    for (; i < r; i++)
                        for (n = this[i]; n && n !== t; n = n.parentNode)
                            if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && S.find.matchesSelector(n, e))) {
                                o.push(n);
                                break
                            }
                return this.pushStack(1 < o.length ? S.uniqueSort(o) : o)
            },
            index: function(e) {
                return e ? "string" == typeof e ? U.call(S(e), this[0]) : U.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            },
            add: function(e, t) {
                return this.pushStack(S.uniqueSort(S.merge(this.get(), S(e, t))))
            },
            addBack: function(e) {
                return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
            }
        }),
        S.each({
            parent: function(e) {
                e = e.parentNode;
                return e && 11 !== e.nodeType ? e : null
            },
            parents: function(e) {
                return i(e, "parentNode")
            },
            parentsUntil: function(e, t, n) {
                return i(e, "parentNode", n)
            },
            next: function(e) {
                return re(e, "nextSibling")
            },
            prev: function(e) {
                return re(e, "previousSibling")
            },
            nextAll: function(e) {
                return i(e, "nextSibling")
            },
            prevAll: function(e) {
                return i(e, "previousSibling")
            },
            nextUntil: function(e, t, n) {
                return i(e, "nextSibling", n)
            },
            prevUntil: function(e, t, n) {
                return i(e, "previousSibling", n)
            },
            siblings: function(e) {
                return Q((e.parentNode || {}).firstChild, e)
            },
            children: function(e) {
                return Q(e.firstChild)
            },
            contents: function(e) {
                return c(e, "iframe") ? e.contentDocument : (c(e, "template") && (e = e.content || e),
                S.merge([], e.childNodes))
            }
        }, function(i, r) {
            S.fn[i] = function(e, t) {
                var n = S.map(this, r, e);
                return (t = "Until" !== i.slice(-5) ? e : t) && "string" == typeof t && (n = S.filter(t, n)),
                1 < this.length && (ie[i] || S.uniqueSort(n),
                ne.test(i)) && n.reverse(),
                this.pushStack(n)
            }
        });
        var T = /[^\x20\t\r\n\f]+/g;
        function l(e) {
            return e
        }
        function oe(e) {
            throw e
        }
        function ae(e, t, n, i) {
            var r;
            try {
                e && y(r = e.promise) ? r.call(e).done(t).fail(n) : e && y(r = e.then) ? r.call(e, t, n) : t.apply(void 0, [e].slice(i))
            } catch (e) {
                n.apply(void 0, [e])
            }
        }
        S.Callbacks = function(i) {
            var e, n;
            i = "string" == typeof i ? (e = i,
            n = {},
            S.each(e.match(T) || [], function(e, t) {
                n[t] = !0
            }),
            n) : S.extend({}, i);
            function r() {
                for (s = s || i.once,
                a = o = !0; u.length; l = -1)
                    for (t = u.shift(); ++l < c.length; )
                        !1 === c[l].apply(t[0], t[1]) && i.stopOnFalse && (l = c.length,
                        t = !1);
                i.memory || (t = !1),
                o = !1,
                s && (c = t ? [] : "")
            }
            var o, t, a, s, c = [], u = [], l = -1, d = {
                add: function() {
                    return c && (t && !o && (l = c.length - 1,
                    u.push(t)),
                    function n(e) {
                        S.each(e, function(e, t) {
                            y(t) ? i.unique && d.has(t) || c.push(t) : t && t.length && "string" !== h(t) && n(t)
                        })
                    }(arguments),
                    t) && !o && r(),
                    this
                },
                remove: function() {
                    return S.each(arguments, function(e, t) {
                        for (var n; -1 < (n = S.inArray(t, c, n)); )
                            c.splice(n, 1),
                            n <= l && l--
                    }),
                    this
                },
                has: function(e) {
                    return e ? -1 < S.inArray(e, c) : 0 < c.length
                },
                empty: function() {
                    return c = c && [],
                    this
                },
                disable: function() {
                    return s = u = [],
                    c = t = "",
                    this
                },
                disabled: function() {
                    return !c
                },
                lock: function() {
                    return s = u = [],
                    t || o || (c = t = ""),
                    this
                },
                locked: function() {
                    return !!s
                },
                fireWith: function(e, t) {
                    return s || (t = [e, (t = t || []).slice ? t.slice() : t],
                    u.push(t),
                    o) || r(),
                    this
                },
                fire: function() {
                    return d.fireWith(this, arguments),
                    this
                },
                fired: function() {
                    return !!a
                }
            };
            return d
        }
        ,
        S.extend({
            Deferred: function(e) {
                var o = [["notify", "progress", S.Callbacks("memory"), S.Callbacks("memory"), 2], ["resolve", "done", S.Callbacks("once memory"), S.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", S.Callbacks("once memory"), S.Callbacks("once memory"), 1, "rejected"]]
                  , r = "pending"
                  , a = {
                    state: function() {
                        return r
                    },
                    always: function() {
                        return s.done(arguments).fail(arguments),
                        this
                    },
                    catch: function(e) {
                        return a.then(null, e)
                    },
                    pipe: function() {
                        var r = arguments;
                        return S.Deferred(function(i) {
                            S.each(o, function(e, t) {
                                var n = y(r[t[4]]) && r[t[4]];
                                s[t[1]](function() {
                                    var e = n && n.apply(this, arguments);
                                    e && y(e.promise) ? e.promise().progress(i.notify).done(i.resolve).fail(i.reject) : i[t[0] + "With"](this, n ? [e] : arguments)
                                })
                            }),
                            r = null
                        }).promise()
                    },
                    then: function(t, n, i) {
                        var c = 0;
                        function u(r, o, a, s) {
                            return function() {
                                function e() {
                                    var e, t;
                                    if (!(r < c)) {
                                        if ((e = a.apply(n, i)) === o.promise())
                                            throw new TypeError("Thenable self-resolution");
                                        t = e && ("object" == typeof e || "function" == typeof e) && e.then,
                                        y(t) ? s ? t.call(e, u(c, o, l, s), u(c, o, oe, s)) : (c++,
                                        t.call(e, u(c, o, l, s), u(c, o, oe, s), u(c, o, l, o.notifyWith))) : (a !== l && (n = void 0,
                                        i = [e]),
                                        (s || o.resolveWith)(n, i))
                                    }
                                }
                                var n = this
                                  , i = arguments
                                  , t = s ? e : function() {
                                    try {
                                        e()
                                    } catch (e) {
                                        S.Deferred.exceptionHook && S.Deferred.exceptionHook(e, t.stackTrace),
                                        c <= r + 1 && (a !== oe && (n = void 0,
                                        i = [e]),
                                        o.rejectWith(n, i))
                                    }
                                }
                                ;
                                r ? t() : (S.Deferred.getStackHook && (t.stackTrace = S.Deferred.getStackHook()),
                                w.setTimeout(t))
                            }
                        }
                        return S.Deferred(function(e) {
                            o[0][3].add(u(0, e, y(i) ? i : l, e.notifyWith)),
                            o[1][3].add(u(0, e, y(t) ? t : l)),
                            o[2][3].add(u(0, e, y(n) ? n : oe))
                        }).promise()
                    },
                    promise: function(e) {
                        return null != e ? S.extend(e, a) : a
                    }
                }
                  , s = {};
                return S.each(o, function(e, t) {
                    var n = t[2]
                      , i = t[5];
                    a[t[1]] = n.add,
                    i && n.add(function() {
                        r = i
                    }, o[3 - e][2].disable, o[3 - e][3].disable, o[0][2].lock, o[0][3].lock),
                    n.add(t[3].fire),
                    s[t[0]] = function() {
                        return s[t[0] + "With"](this === s ? void 0 : this, arguments),
                        this
                    }
                    ,
                    s[t[0] + "With"] = n.fireWith
                }),
                a.promise(s),
                e && e.call(s, s),
                s
            },
            when: function(e) {
                function t(t) {
                    return function(e) {
                        r[t] = this,
                        o[t] = 1 < arguments.length ? s.call(arguments) : e,
                        --n || a.resolveWith(r, o)
                    }
                }
                var n = arguments.length
                  , i = n
                  , r = Array(i)
                  , o = s.call(arguments)
                  , a = S.Deferred();
                if (n <= 1 && (ae(e, a.done(t(i)).resolve, a.reject, !n),
                "pending" === a.state() || y(o[i] && o[i].then)))
                    return a.then();
                for (; i--; )
                    ae(o[i], t(i), a.reject);
                return a.promise()
            }
        });
        var se = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/
          , ce = (S.Deferred.exceptionHook = function(e, t) {
            w.console && w.console.warn && e && se.test(e.name) && w.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
        }
        ,
        S.readyException = function(e) {
            w.setTimeout(function() {
                throw e
            })
        }
        ,
        S.Deferred());
        function ue() {
            E.removeEventListener("DOMContentLoaded", ue),
            w.removeEventListener("load", ue),
            S.ready()
        }
        S.fn.ready = function(e) {
            return ce.then(e).catch(function(e) {
                S.readyException(e)
            }),
            this
        }
        ,
        S.extend({
            isReady: !1,
            readyWait: 1,
            ready: function(e) {
                (!0 === e ? --S.readyWait : S.isReady) || (S.isReady = !0) !== e && 0 < --S.readyWait || ce.resolveWith(E, [S])
            }
        }),
        S.ready.then = ce.then,
        "complete" === E.readyState || "loading" !== E.readyState && !E.documentElement.doScroll ? w.setTimeout(S.ready) : (E.addEventListener("DOMContentLoaded", ue),
        w.addEventListener("load", ue));
        function d(e, t, n, i, r, o, a) {
            var s = 0
              , c = e.length
              , u = null == n;
            if ("object" === h(n))
                for (s in r = !0,
                n)
                    d(e, t, s, n[s], !0, o, a);
            else if (void 0 !== i && (r = !0,
            y(i) || (a = !0),
            t = u ? a ? (t.call(e, i),
            null) : (u = t,
            function(e, t, n) {
                return u.call(S(e), n)
            }
            ) : t))
                for (; s < c; s++)
                    t(e[s], n, a ? i : i.call(e[s], s, t(e[s], n)));
            return r ? e : u ? t.call(e) : c ? t(e[0], n) : o
        }
        var le = /^-ms-/
          , de = /-([a-z])/g;
        function fe(e, t) {
            return t.toUpperCase()
        }
        function _(e) {
            return e.replace(le, "ms-").replace(de, fe)
        }
        function pe(e) {
            return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
        }
        function t() {
            this.expando = S.expando + t.uid++
        }
        t.uid = 1,
        t.prototype = {
            cache: function(e) {
                var t = e[this.expando];
                return t || (t = {},
                pe(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                    value: t,
                    configurable: !0
                }))),
                t
            },
            set: function(e, t, n) {
                var i, r = this.cache(e);
                if ("string" == typeof t)
                    r[_(t)] = n;
                else
                    for (i in t)
                        r[_(i)] = t[i];
                return r
            },
            get: function(e, t) {
                return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][_(t)]
            },
            access: function(e, t, n) {
                return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n),
                void 0 !== n ? n : t)
            },
            remove: function(e, t) {
                var n, i = e[this.expando];
                if (void 0 !== i) {
                    if (void 0 !== t) {
                        n = (t = Array.isArray(t) ? t.map(_) : (t = _(t))in i ? [t] : t.match(T) || []).length;
                        for (; n--; )
                            delete i[t[n]]
                    }
                    void 0 !== t && !S.isEmptyObject(i) || (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
                }
            },
            hasData: function(e) {
                e = e[this.expando];
                return void 0 !== e && !S.isEmptyObject(e)
            }
        };
        var g = new t
          , u = new t
          , he = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
          , me = /[A-Z]/g;
        function ve(e, t, n) {
            var i, r;
            if (void 0 === n && 1 === e.nodeType)
                if (i = "data-" + t.replace(me, "-$&").toLowerCase(),
                "string" == typeof (n = e.getAttribute(i))) {
                    try {
                        n = "true" === (r = n) || "false" !== r && ("null" === r ? null : r === +r + "" ? +r : he.test(r) ? JSON.parse(r) : r)
                    } catch (e) {}
                    u.set(e, t, n)
                } else
                    n = void 0;
            return n
        }
        S.extend({
            hasData: function(e) {
                return u.hasData(e) || g.hasData(e)
            },
            data: function(e, t, n) {
                return u.access(e, t, n)
            },
            removeData: function(e, t) {
                u.remove(e, t)
            },
            _data: function(e, t, n) {
                return g.access(e, t, n)
            },
            _removeData: function(e, t) {
                g.remove(e, t)
            }
        }),
        S.fn.extend({
            data: function(n, e) {
                var t, i, r, o = this[0], a = o && o.attributes;
                if (void 0 !== n)
                    return "object" == typeof n ? this.each(function() {
                        u.set(this, n)
                    }) : d(this, function(e) {
                        var t;
                        if (o && void 0 === e)
                            return void 0 !== (t = u.get(o, n)) || void 0 !== (t = ve(o, n)) ? t : void 0;
                        this.each(function() {
                            u.set(this, n, e)
                        })
                    }, null, e, 1 < arguments.length, null, !0);
                if (this.length && (r = u.get(o),
                1 === o.nodeType) && !g.get(o, "hasDataAttrs")) {
                    for (t = a.length; t--; )
                        a[t] && 0 === (i = a[t].name).indexOf("data-") && (i = _(i.slice(5)),
                        ve(o, i, r[i]));
                    g.set(o, "hasDataAttrs", !0)
                }
                return r
            },
            removeData: function(e) {
                return this.each(function() {
                    u.remove(this, e)
                })
            }
        }),
        S.extend({
            queue: function(e, t, n) {
                var i;
                if (e)
                    return i = g.get(e, t = (t || "fx") + "queue"),
                    n && (!i || Array.isArray(n) ? i = g.access(e, t, S.makeArray(n)) : i.push(n)),
                    i || []
            },
            dequeue: function(e, t) {
                t = t || "fx";
                var n = S.queue(e, t)
                  , i = n.length
                  , r = n.shift()
                  , o = S._queueHooks(e, t);
                "inprogress" === r && (r = n.shift(),
                i--),
                r && ("fx" === t && n.unshift("inprogress"),
                delete o.stop,
                r.call(e, function() {
                    S.dequeue(e, t)
                }, o)),
                !i && o && o.empty.fire()
            },
            _queueHooks: function(e, t) {
                var n = t + "queueHooks";
                return g.get(e, n) || g.access(e, n, {
                    empty: S.Callbacks("once memory").add(function() {
                        g.remove(e, [t + "queue", n])
                    })
                })
            }
        }),
        S.fn.extend({
            queue: function(t, n) {
                var e = 2;
                return "string" != typeof t && (n = t,
                t = "fx",
                e--),
                arguments.length < e ? S.queue(this[0], t) : void 0 === n ? this : this.each(function() {
                    var e = S.queue(this, t, n);
                    S._queueHooks(this, t),
                    "fx" === t && "inprogress" !== e[0] && S.dequeue(this, t)
                })
            },
            dequeue: function(e) {
                return this.each(function() {
                    S.dequeue(this, e)
                })
            },
            clearQueue: function(e) {
                return this.queue(e || "fx", [])
            },
            promise: function(e, t) {
                function n() {
                    --r || o.resolveWith(a, [a])
                }
                var i, r = 1, o = S.Deferred(), a = this, s = this.length;
                for ("string" != typeof e && (t = e,
                e = void 0),
                e = e || "fx"; s--; )
                    (i = g.get(a[s], e + "queueHooks")) && i.empty && (r++,
                    i.empty.add(n));
                return n(),
                o.promise(t)
            }
        });
        function ge(e, t) {
            return "none" === (e = t || e).style.display || "" === e.style.display && S.contains(e.ownerDocument, e) && "none" === S.css(e, "display")
        }
        function ye(e, t, n, i) {
            var r, o = {};
            for (r in t)
                o[r] = e.style[r],
                e.style[r] = t[r];
            for (r in n = n.apply(e, i || []),
            t)
                e.style[r] = o[r];
            return n
        }
        var e = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
          , f = new RegExp("^(?:([+-])=|)(" + e + ")([a-z%]*)$","i")
          , p = ["Top", "Right", "Bottom", "Left"];
        function _e(e, t, n, i) {
            var r, o, a = 20, s = i ? function() {
                return i.cur()
            }
            : function() {
                return S.css(e, t, "")
            }
            , c = s(), u = n && n[3] || (S.cssNumber[t] ? "" : "px"), l = (S.cssNumber[t] || "px" !== u && +c) && f.exec(S.css(e, t));
            if (l && l[3] !== u) {
                for (u = u || l[3],
                l = +(c /= 2) || 1; a--; )
                    S.style(e, t, l + u),
                    (1 - o) * (1 - (o = s() / c || .5)) <= 0 && (a = 0),
                    l /= o;
                S.style(e, t, (l *= 2) + u),
                n = n || []
            }
            return n && (l = +l || +c || 0,
            r = n[1] ? l + (n[1] + 1) * n[2] : +n[2],
            i) && (i.unit = u,
            i.start = l,
            i.end = r),
            r
        }
        var be = {};
        function b(e, t) {
            for (var n, i, r, o, a, s = [], c = 0, u = e.length; c < u; c++)
                (i = e[c]).style && (n = i.style.display,
                t ? ("none" === n && (s[c] = g.get(i, "display") || null,
                s[c] || (i.style.display = "")),
                "" === i.style.display && ge(i) && (s[c] = (a = o = void 0,
                o = (r = i).ownerDocument,
                r = r.nodeName,
                (a = be[r]) || (o = o.body.appendChild(o.createElement(r)),
                a = S.css(o, "display"),
                o.parentNode.removeChild(o),
                be[r] = a = "none" === a ? "block" : a),
                a))) : "none" !== n && (s[c] = "none",
                g.set(i, "display", n)));
            for (c = 0; c < u; c++)
                null != s[c] && (e[c].style.display = s[c]);
            return e
        }
        S.fn.extend({
            show: function() {
                return b(this, !0)
            },
            hide: function() {
                return b(this)
            },
            toggle: function(e) {
                return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                    ge(this) ? S(this).show() : S(this).hide()
                })
            }
        });
        var we = /^(?:checkbox|radio)$/i
          , Ee = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i
          , Se = /^$|^module$|\/(?:java|ecma)script/i
          , O = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
        function x(e, t) {
            var n = void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t || "*") : void 0 !== e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
            return void 0 === t || t && c(e, t) ? S.merge([e], n) : n
        }
        function Te(e, t) {
            for (var n = 0, i = e.length; n < i; n++)
                g.set(e[n], "globalEval", !t || g.get(t[n], "globalEval"))
        }
        O.optgroup = O.option,
        O.tbody = O.tfoot = O.colgroup = O.caption = O.thead,
        O.th = O.td;
        var Oe = /<|&#?\w+;/;
        function xe(e, t, n, i, r) {
            for (var o, a, s, c, u, l = t.createDocumentFragment(), d = [], f = 0, p = e.length; f < p; f++)
                if ((o = e[f]) || 0 === o)
                    if ("object" === h(o))
                        S.merge(d, o.nodeType ? [o] : o);
                    else if (Oe.test(o)) {
                        for (a = a || l.appendChild(t.createElement("div")),
                        s = (Ee.exec(o) || ["", ""])[1].toLowerCase(),
                        s = O[s] || O._default,
                        a.innerHTML = s[1] + S.htmlPrefilter(o) + s[2],
                        u = s[0]; u--; )
                            a = a.lastChild;
                        S.merge(d, a.childNodes),
                        (a = l.firstChild).textContent = ""
                    } else
                        d.push(t.createTextNode(o));
            for (l.textContent = "",
            f = 0; o = d[f++]; )
                if (i && -1 < S.inArray(o, i))
                    r && r.push(o);
                else if (c = S.contains(o.ownerDocument, o),
                a = x(l.appendChild(o), "script"),
                c && Te(a),
                n)
                    for (u = 0; o = a[u++]; )
                        Se.test(o.type || "") && n.push(o);
            return l
        }
        k = E.createDocumentFragment().appendChild(E.createElement("div")),
        (a = E.createElement("input")).setAttribute("type", "radio"),
        a.setAttribute("checked", "checked"),
        a.setAttribute("name", "t"),
        k.appendChild(a),
        v.checkClone = k.cloneNode(!0).cloneNode(!0).lastChild.checked,
        k.innerHTML = "<textarea>x</textarea>",
        v.noCloneChecked = !!k.cloneNode(!0).lastChild.defaultValue;
        var Ce = E.documentElement
          , Ae = /^key/
          , Pe = /^(?:mouse|pointer|contextmenu|drag|drop)|click/
          , Ie = /^([^.]*)(?:\.(.+)|)/;
        function ke() {
            return !0
        }
        function C() {
            return !1
        }
        function Le() {
            try {
                return E.activeElement
            } catch (e) {}
        }
        function je(e, t, n, i, r, o) {
            var a, s;
            if ("object" == typeof t) {
                for (s in "string" != typeof n && (i = i || n,
                n = void 0),
                t)
                    je(e, s, n, i, t[s], o);
                return e
            }
            if (null == i && null == r ? (r = n,
            i = n = void 0) : null == r && ("string" == typeof n ? (r = i,
            i = void 0) : (r = i,
            i = n,
            n = void 0)),
            !1 === r)
                r = C;
            else if (!r)
                return e;
            return 1 === o && (a = r,
            (r = function(e) {
                return S().off(e),
                a.apply(this, arguments)
            }
            ).guid = a.guid || (a.guid = S.guid++)),
            e.each(function() {
                S.event.add(this, t, r, i, n)
            })
        }
        S.event = {
            global: {},
            add: function(t, e, n, i, r) {
                var o, a, s, c, u, l, d, f, p, h = g.get(t);
                if (h)
                    for (n.handler && (n = (o = n).handler,
                    r = o.selector),
                    r && S.find.matchesSelector(Ce, r),
                    n.guid || (n.guid = S.guid++),
                    s = (s = h.events) || (h.events = {}),
                    a = (a = h.handle) || (h.handle = function(e) {
                        return void 0 !== S && S.event.triggered !== e.type ? S.event.dispatch.apply(t, arguments) : void 0
                    }
                    ),
                    c = (e = (e || "").match(T) || [""]).length; c--; )
                        d = p = (f = Ie.exec(e[c]) || [])[1],
                        f = (f[2] || "").split(".").sort(),
                        d && (u = S.event.special[d] || {},
                        d = (r ? u.delegateType : u.bindType) || d,
                        u = S.event.special[d] || {},
                        p = S.extend({
                            type: d,
                            origType: p,
                            data: i,
                            handler: n,
                            guid: n.guid,
                            selector: r,
                            needsContext: r && S.expr.match.needsContext.test(r),
                            namespace: f.join(".")
                        }, o),
                        (l = s[d]) || ((l = s[d] = []).delegateCount = 0,
                        u.setup && !1 !== u.setup.call(t, i, f, a)) || t.addEventListener && t.addEventListener(d, a),
                        u.add && (u.add.call(t, p),
                        p.handler.guid || (p.handler.guid = n.guid)),
                        r ? l.splice(l.delegateCount++, 0, p) : l.push(p),
                        S.event.global[d] = !0)
            },
            remove: function(e, t, n, i, r) {
                var o, a, s, c, u, l, d, f, p, h, m, v = g.hasData(e) && g.get(e);
                if (v && (c = v.events)) {
                    for (u = (t = (t || "").match(T) || [""]).length; u--; )
                        if (p = m = (s = Ie.exec(t[u]) || [])[1],
                        h = (s[2] || "").split(".").sort(),
                        p) {
                            for (d = S.event.special[p] || {},
                            f = c[p = (i ? d.delegateType : d.bindType) || p] || [],
                            s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                            a = o = f.length; o--; )
                                l = f[o],
                                !r && m !== l.origType || n && n.guid !== l.guid || s && !s.test(l.namespace) || i && i !== l.selector && ("**" !== i || !l.selector) || (f.splice(o, 1),
                                l.selector && f.delegateCount--,
                                d.remove && d.remove.call(e, l));
                            a && !f.length && (d.teardown && !1 !== d.teardown.call(e, h, v.handle) || S.removeEvent(e, p, v.handle),
                            delete c[p])
                        } else
                            for (p in c)
                                S.event.remove(e, p + t[u], n, i, !0);
                    S.isEmptyObject(c) && g.remove(e, "handle events")
                }
            },
            dispatch: function(e) {
                var t, n, i, r, o, a = S.event.fix(e), s = new Array(arguments.length), e = (g.get(this, "events") || {})[a.type] || [], c = S.event.special[a.type] || {};
                for (s[0] = a,
                t = 1; t < arguments.length; t++)
                    s[t] = arguments[t];
                if (a.delegateTarget = this,
                !c.preDispatch || !1 !== c.preDispatch.call(this, a)) {
                    for (o = S.event.handlers.call(this, a, e),
                    t = 0; (i = o[t++]) && !a.isPropagationStopped(); )
                        for (a.currentTarget = i.elem,
                        n = 0; (r = i.handlers[n++]) && !a.isImmediatePropagationStopped(); )
                            a.rnamespace && !a.rnamespace.test(r.namespace) || (a.handleObj = r,
                            a.data = r.data,
                            void 0 !== (r = ((S.event.special[r.origType] || {}).handle || r.handler).apply(i.elem, s)) && !1 === (a.result = r) && (a.preventDefault(),
                            a.stopPropagation()));
                    return c.postDispatch && c.postDispatch.call(this, a),
                    a.result
                }
            },
            handlers: function(e, t) {
                var n, i, r, o, a, s = [], c = t.delegateCount, u = e.target;
                if (c && u.nodeType && !("click" === e.type && 1 <= e.button))
                    for (; u !== this; u = u.parentNode || this)
                        if (1 === u.nodeType && ("click" !== e.type || !0 !== u.disabled)) {
                            for (o = [],
                            a = {},
                            n = 0; n < c; n++)
                                void 0 === a[r = (i = t[n]).selector + " "] && (a[r] = i.needsContext ? -1 < S(r, this).index(u) : S.find(r, this, null, [u]).length),
                                a[r] && o.push(i);
                            o.length && s.push({
                                elem: u,
                                handlers: o
                            })
                        }
                return u = this,
                c < t.length && s.push({
                    elem: u,
                    handlers: t.slice(c)
                }),
                s
            },
            addProp: function(t, e) {
                Object.defineProperty(S.Event.prototype, t, {
                    enumerable: !0,
                    configurable: !0,
                    get: y(e) ? function() {
                        if (this.originalEvent)
                            return e(this.originalEvent)
                    }
                    : function() {
                        if (this.originalEvent)
                            return this.originalEvent[t]
                    }
                    ,
                    set: function(e) {
                        Object.defineProperty(this, t, {
                            enumerable: !0,
                            configurable: !0,
                            writable: !0,
                            value: e
                        })
                    }
                })
            },
            fix: function(e) {
                return e[S.expando] ? e : new S.Event(e)
            },
            special: {
                load: {
                    noBubble: !0
                },
                focus: {
                    trigger: function() {
                        if (this !== Le() && this.focus)
                            return this.focus(),
                            !1
                    },
                    delegateType: "focusin"
                },
                blur: {
                    trigger: function() {
                        if (this === Le() && this.blur)
                            return this.blur(),
                            !1
                    },
                    delegateType: "focusout"
                },
                click: {
                    trigger: function() {
                        if ("checkbox" === this.type && this.click && c(this, "input"))
                            return this.click(),
                            !1
                    },
                    _default: function(e) {
                        return c(e.target, "a")
                    }
                },
                beforeunload: {
                    postDispatch: function(e) {
                        void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                    }
                }
            }
        },
        S.removeEvent = function(e, t, n) {
            e.removeEventListener && e.removeEventListener(t, n)
        }
        ,
        S.Event = function(e, t) {
            if (!(this instanceof S.Event))
                return new S.Event(e,t);
            e && e.type ? (this.originalEvent = e,
            this.type = e.type,
            this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? ke : C,
            this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target,
            this.currentTarget = e.currentTarget,
            this.relatedTarget = e.relatedTarget) : this.type = e,
            t && S.extend(this, t),
            this.timeStamp = e && e.timeStamp || Date.now(),
            this[S.expando] = !0
        }
        ,
        S.Event.prototype = {
            constructor: S.Event,
            isDefaultPrevented: C,
            isPropagationStopped: C,
            isImmediatePropagationStopped: C,
            isSimulated: !1,
            preventDefault: function() {
                var e = this.originalEvent;
                this.isDefaultPrevented = ke,
                e && !this.isSimulated && e.preventDefault()
            },
            stopPropagation: function() {
                var e = this.originalEvent;
                this.isPropagationStopped = ke,
                e && !this.isSimulated && e.stopPropagation()
            },
            stopImmediatePropagation: function() {
                var e = this.originalEvent;
                this.isImmediatePropagationStopped = ke,
                e && !this.isSimulated && e.stopImmediatePropagation(),
                this.stopPropagation()
            }
        },
        S.each({
            altKey: !0,
            bubbles: !0,
            cancelable: !0,
            changedTouches: !0,
            ctrlKey: !0,
            detail: !0,
            eventPhase: !0,
            metaKey: !0,
            pageX: !0,
            pageY: !0,
            shiftKey: !0,
            view: !0,
            char: !0,
            charCode: !0,
            key: !0,
            keyCode: !0,
            button: !0,
            buttons: !0,
            clientX: !0,
            clientY: !0,
            offsetX: !0,
            offsetY: !0,
            pointerId: !0,
            pointerType: !0,
            screenX: !0,
            screenY: !0,
            targetTouches: !0,
            toElement: !0,
            touches: !0,
            which: function(e) {
                var t = e.button;
                return null == e.which && Ae.test(e.type) ? null != e.charCode ? e.charCode : e.keyCode : !e.which && void 0 !== t && Pe.test(e.type) ? 1 & t ? 1 : 2 & t ? 3 : 4 & t ? 2 : 0 : e.which
            }
        }, S.event.addProp),
        S.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, function(e, r) {
            S.event.special[e] = {
                delegateType: r,
                bindType: r,
                handle: function(e) {
                    var t, n = e.relatedTarget, i = e.handleObj;
                    return n && (n === this || S.contains(this, n)) || (e.type = i.origType,
                    t = i.handler.apply(this, arguments),
                    e.type = r),
                    t
                }
            }
        }),
        S.fn.extend({
            on: function(e, t, n, i) {
                return je(this, e, t, n, i)
            },
            one: function(e, t, n, i) {
                return je(this, e, t, n, i, 1)
            },
            off: function(e, t, n) {
                var i, r;
                if (e && e.preventDefault && e.handleObj)
                    i = e.handleObj,
                    S(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler);
                else {
                    if ("object" != typeof e)
                        return !1 !== t && "function" != typeof t || (n = t,
                        t = void 0),
                        !1 === n && (n = C),
                        this.each(function() {
                            S.event.remove(this, e, n, t)
                        });
                    for (r in e)
                        this.off(r, t, e[r])
                }
                return this
            }
        });
        var De = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi
          , Ne = /<script|<style|<link/i
          , Re = /checked\s*(?:[^=]|=\s*.checked.)/i
          , Me = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
        function Fe(e, t) {
            return c(e, "table") && c(11 !== t.nodeType ? t : t.firstChild, "tr") && S(e).children("tbody")[0] || e
        }
        function Be(e) {
            return e.type = (null !== e.getAttribute("type")) + "/" + e.type,
            e
        }
        function Ue(e) {
            return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"),
            e
        }
        function He(e, t) {
            var n, i, r, o, a, s;
            if (1 === t.nodeType) {
                if (g.hasData(e) && (o = g.access(e),
                a = g.set(t, o),
                s = o.events))
                    for (r in delete a.handle,
                    a.events = {},
                    s)
                        for (n = 0,
                        i = s[r].length; n < i; n++)
                            S.event.add(t, r, s[r][n]);
                u.hasData(e) && (o = u.access(e),
                a = S.extend({}, o),
                u.set(t, a))
            }
        }
        function A(n, i, r, o) {
            i = F.apply([], i);
            var e, t, a, s, c, u, l = 0, d = n.length, f = d - 1, p = i[0], h = y(p);
            if (h || 1 < d && "string" == typeof p && !v.checkClone && Re.test(p))
                return n.each(function(e) {
                    var t = n.eq(e);
                    h && (i[0] = p.call(this, e, t.html())),
                    A(t, i, r, o)
                });
            if (d && (t = (e = xe(i, n[0].ownerDocument, !1, n, o)).firstChild,
            1 === e.childNodes.length && (e = t),
            t || o)) {
                for (s = (a = S.map(x(e, "script"), Be)).length; l < d; l++)
                    c = e,
                    l !== f && (c = S.clone(c, !0, !0),
                    s) && S.merge(a, x(c, "script")),
                    r.call(n[l], c, l);
                if (s)
                    for (u = a[a.length - 1].ownerDocument,
                    S.map(a, Ue),
                    l = 0; l < s; l++)
                        c = a[l],
                        Se.test(c.type || "") && !g.access(c, "globalEval") && S.contains(u, c) && (c.src && "module" !== (c.type || "").toLowerCase() ? S._evalUrl && S._evalUrl(c.src) : Y(c.textContent.replace(Me, ""), u, c))
            }
            return n
        }
        function qe(e, t, n) {
            for (var i, r = t ? S.filter(t, e) : e, o = 0; null != (i = r[o]); o++)
                n || 1 !== i.nodeType || S.cleanData(x(i)),
                i.parentNode && (n && S.contains(i.ownerDocument, i) && Te(x(i, "script")),
                i.parentNode.removeChild(i));
            return e
        }
        S.extend({
            htmlPrefilter: function(e) {
                return e.replace(De, "<$1></$2>")
            },
            clone: function(e, t, n) {
                var i, r, o, a, s, c, u, l = e.cloneNode(!0), d = S.contains(e.ownerDocument, e);
                if (!(v.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || S.isXMLDoc(e)))
                    for (a = x(l),
                    i = 0,
                    r = (o = x(e)).length; i < r; i++)
                        s = o[i],
                        c = a[i],
                        u = void 0,
                        "input" === (u = c.nodeName.toLowerCase()) && we.test(s.type) ? c.checked = s.checked : "input" !== u && "textarea" !== u || (c.defaultValue = s.defaultValue);
                if (t)
                    if (n)
                        for (o = o || x(e),
                        a = a || x(l),
                        i = 0,
                        r = o.length; i < r; i++)
                            He(o[i], a[i]);
                    else
                        He(e, l);
                return 0 < (a = x(l, "script")).length && Te(a, !d && x(e, "script")),
                l
            },
            cleanData: function(e) {
                for (var t, n, i, r = S.event.special, o = 0; void 0 !== (n = e[o]); o++)
                    if (pe(n)) {
                        if (t = n[g.expando]) {
                            if (t.events)
                                for (i in t.events)
                                    r[i] ? S.event.remove(n, i) : S.removeEvent(n, i, t.handle);
                            n[g.expando] = void 0
                        }
                        n[u.expando] && (n[u.expando] = void 0)
                    }
            }
        }),
        S.fn.extend({
            detach: function(e) {
                return qe(this, e, !0)
            },
            remove: function(e) {
                return qe(this, e)
            },
            text: function(e) {
                return d(this, function(e) {
                    return void 0 === e ? S.text(this) : this.empty().each(function() {
                        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                    })
                }, null, e, arguments.length)
            },
            append: function() {
                return A(this, arguments, function(e) {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Fe(this, e).appendChild(e)
                })
            },
            prepend: function() {
                return A(this, arguments, function(e) {
                    var t;
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (t = Fe(this, e)).insertBefore(e, t.firstChild)
                })
            },
            before: function() {
                return A(this, arguments, function(e) {
                    this.parentNode && this.parentNode.insertBefore(e, this)
                })
            },
            after: function() {
                return A(this, arguments, function(e) {
                    this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                })
            },
            empty: function() {
                for (var e, t = 0; null != (e = this[t]); t++)
                    1 === e.nodeType && (S.cleanData(x(e, !1)),
                    e.textContent = "");
                return this
            },
            clone: function(e, t) {
                return e = null != e && e,
                t = null == t ? e : t,
                this.map(function() {
                    return S.clone(this, e, t)
                })
            },
            html: function(e) {
                return d(this, function(e) {
                    var t = this[0] || {}
                      , n = 0
                      , i = this.length;
                    if (void 0 === e && 1 === t.nodeType)
                        return t.innerHTML;
                    if ("string" == typeof e && !Ne.test(e) && !O[(Ee.exec(e) || ["", ""])[1].toLowerCase()]) {
                        e = S.htmlPrefilter(e);
                        try {
                            for (; n < i; n++)
                                1 === (t = this[n] || {}).nodeType && (S.cleanData(x(t, !1)),
                                t.innerHTML = e);
                            t = 0
                        } catch (e) {}
                    }
                    t && this.empty().append(e)
                }, null, e, arguments.length)
            },
            replaceWith: function() {
                var n = [];
                return A(this, arguments, function(e) {
                    var t = this.parentNode;
                    S.inArray(this, n) < 0 && (S.cleanData(x(this)),
                    t) && t.replaceChild(e, this)
                }, n)
            }
        }),
        S.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function(e, a) {
            S.fn[e] = function(e) {
                for (var t, n = [], i = S(e), r = i.length - 1, o = 0; o <= r; o++)
                    t = o === r ? this : this.clone(!0),
                    S(i[o])[a](t),
                    B.apply(n, t.get());
                return this.pushStack(n)
            }
        });
        function We(e) {
            var t = e.ownerDocument.defaultView;
            return (t = t && t.opener ? t : w).getComputedStyle(e)
        }
        var Ve, ze, Ge, Ye, Ke, Xe, n, Qe = new RegExp("^(" + e + ")(?!px)[a-z%]+$","i"), $e = new RegExp(p.join("|"),"i");
        function r() {
            var e;
            n && (Xe.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",
            n.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",
            Ce.appendChild(Xe).appendChild(n),
            e = w.getComputedStyle(n),
            Ve = "1%" !== e.top,
            Ke = 12 === Je(e.marginLeft),
            n.style.right = "60%",
            Ye = 36 === Je(e.right),
            ze = 36 === Je(e.width),
            n.style.position = "absolute",
            Ge = 36 === n.offsetWidth || "absolute",
            Ce.removeChild(Xe),
            n = null)
        }
        function Je(e) {
            return Math.round(parseFloat(e))
        }
        function P(e, t, n) {
            var i, r, o = e.style;
            return (n = n || We(e)) && ("" !== (r = n.getPropertyValue(t) || n[t]) || S.contains(e.ownerDocument, e) || (r = S.style(e, t)),
            !v.pixelBoxStyles()) && Qe.test(r) && $e.test(t) && (e = o.width,
            t = o.minWidth,
            i = o.maxWidth,
            o.minWidth = o.maxWidth = o.width = r,
            r = n.width,
            o.width = e,
            o.minWidth = t,
            o.maxWidth = i),
            void 0 !== r ? r + "" : r
        }
        function Ze(e, t) {
            return {
                get: function() {
                    if (!e())
                        return (this.get = t).apply(this, arguments);
                    delete this.get
                }
            }
        }
        Xe = E.createElement("div"),
        (n = E.createElement("div")).style && (n.style.backgroundClip = "content-box",
        n.cloneNode(!0).style.backgroundClip = "",
        v.clearCloneStyle = "content-box" === n.style.backgroundClip,
        S.extend(v, {
            boxSizingReliable: function() {
                return r(),
                ze
            },
            pixelBoxStyles: function() {
                return r(),
                Ye
            },
            pixelPosition: function() {
                return r(),
                Ve
            },
            reliableMarginLeft: function() {
                return r(),
                Ke
            },
            scrollboxSize: function() {
                return r(),
                Ge
            }
        }));
        var et = /^(none|table(?!-c[ea]).+)/
          , tt = /^--/
          , nt = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        }
          , it = {
            letterSpacing: "0",
            fontWeight: "400"
        }
          , rt = ["Webkit", "Moz", "ms"]
          , ot = E.createElement("div").style;
        function at(e) {
            return S.cssProps[e] || (S.cssProps[e] = function(e) {
                if (e in ot)
                    return e;
                for (var t = e[0].toUpperCase() + e.slice(1), n = rt.length; n--; )
                    if ((e = rt[n] + t)in ot)
                        return e
            }(e) || e)
        }
        function st(e, t, n) {
            var i = f.exec(t);
            return i ? Math.max(0, i[2] - (n || 0)) + (i[3] || "px") : t
        }
        function ct(e, t, n, i, r, o) {
            var a = "width" === t ? 1 : 0
              , s = 0
              , c = 0;
            if (n === (i ? "border" : "content"))
                return 0;
            for (; a < 4; a += 2)
                "margin" === n && (c += S.css(e, n + p[a], !0, r)),
                i ? ("content" === n && (c -= S.css(e, "padding" + p[a], !0, r)),
                "margin" !== n && (c -= S.css(e, "border" + p[a] + "Width", !0, r))) : (c += S.css(e, "padding" + p[a], !0, r),
                "padding" !== n ? c += S.css(e, "border" + p[a] + "Width", !0, r) : s += S.css(e, "border" + p[a] + "Width", !0, r));
            return !i && 0 <= o && (c += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - c - s - .5))),
            c
        }
        function ut(e, t, n) {
            var i = We(e)
              , r = P(e, t, i)
              , o = "border-box" === S.css(e, "boxSizing", !1, i)
              , a = o;
            if (Qe.test(r)) {
                if (!n)
                    return r;
                r = "auto"
            }
            return a = a && (v.boxSizingReliable() || r === e.style[t]),
            "auto" !== r && (parseFloat(r) || "inline" !== S.css(e, "display", !1, i)) || (r = e["offset" + t[0].toUpperCase() + t.slice(1)],
            a = !0),
            (r = parseFloat(r) || 0) + ct(e, t, n || (o ? "border" : "content"), a, i, r) + "px"
        }
        function o(e, t, n, i, r) {
            return new o.prototype.init(e,t,n,i,r)
        }
        S.extend({
            cssHooks: {
                opacity: {
                    get: function(e, t) {
                        if (t)
                            return "" === (t = P(e, "opacity")) ? "1" : t
                    }
                }
            },
            cssNumber: {
                animationIterationCount: !0,
                columnCount: !0,
                fillOpacity: !0,
                flexGrow: !0,
                flexShrink: !0,
                fontWeight: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {},
            style: function(e, t, n, i) {
                if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                    var r, o, a, s = _(t), c = tt.test(t), u = e.style;
                    if (c || (t = at(s)),
                    a = S.cssHooks[t] || S.cssHooks[s],
                    void 0 === n)
                        return a && "get"in a && void 0 !== (r = a.get(e, !1, i)) ? r : u[t];
                    "string" === (o = typeof n) && (r = f.exec(n)) && r[1] && (n = _e(e, t, r),
                    o = "number"),
                    null == n || n != n || ("number" === o && (n += r && r[3] || (S.cssNumber[s] ? "" : "px")),
                    v.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"),
                    a && "set"in a && void 0 === (n = a.set(e, n, i))) || (c ? u.setProperty(t, n) : u[t] = n)
                }
            },
            css: function(e, t, n, i) {
                var r, o = _(t);
                return tt.test(t) || (t = at(o)),
                "normal" === (r = void 0 === (r = (o = S.cssHooks[t] || S.cssHooks[o]) && "get"in o ? o.get(e, !0, n) : r) ? P(e, t, i) : r) && t in it && (r = it[t]),
                ("" === n || n) && (o = parseFloat(r),
                !0 === n || isFinite(o)) ? o || 0 : r
            }
        }),
        S.each(["height", "width"], function(e, o) {
            S.cssHooks[o] = {
                get: function(e, t, n) {
                    if (t)
                        return !et.test(S.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? ut(e, o, n) : ye(e, nt, function() {
                            return ut(e, o, n)
                        })
                },
                set: function(e, t, n) {
                    var i = We(e)
                      , r = "border-box" === S.css(e, "boxSizing", !1, i)
                      , n = n && ct(e, o, n, r, i);
                    return r && v.scrollboxSize() === i.position && (n -= Math.ceil(e["offset" + o[0].toUpperCase() + o.slice(1)] - parseFloat(i[o]) - ct(e, o, "border", !1, i) - .5)),
                    n && (r = f.exec(t)) && "px" !== (r[3] || "px") && (e.style[o] = t,
                    t = S.css(e, o)),
                    st(0, t, n)
                }
            }
        }),
        S.cssHooks.marginLeft = Ze(v.reliableMarginLeft, function(e, t) {
            if (t)
                return (parseFloat(P(e, "marginLeft")) || e.getBoundingClientRect().left - ye(e, {
                    marginLeft: 0
                }, function() {
                    return e.getBoundingClientRect().left
                })) + "px"
        }),
        S.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function(r, o) {
            S.cssHooks[r + o] = {
                expand: function(e) {
                    for (var t = 0, n = {}, i = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++)
                        n[r + p[t] + o] = i[t] || i[t - 2] || i[0];
                    return n
                }
            },
            "margin" !== r && (S.cssHooks[r + o].set = st)
        }),
        S.fn.extend({
            css: function(e, t) {
                return d(this, function(e, t, n) {
                    var i, r, o = {}, a = 0;
                    if (Array.isArray(t)) {
                        for (i = We(e),
                        r = t.length; a < r; a++)
                            o[t[a]] = S.css(e, t[a], !1, i);
                        return o
                    }
                    return void 0 !== n ? S.style(e, t, n) : S.css(e, t)
                }, e, t, 1 < arguments.length)
            }
        }),
        ((S.Tween = o).prototype = {
            constructor: o,
            init: function(e, t, n, i, r, o) {
                this.elem = e,
                this.prop = n,
                this.easing = r || S.easing._default,
                this.options = t,
                this.start = this.now = this.cur(),
                this.end = i,
                this.unit = o || (S.cssNumber[n] ? "" : "px")
            },
            cur: function() {
                var e = o.propHooks[this.prop];
                return (e && e.get ? e : o.propHooks._default).get(this)
            },
            run: function(e) {
                var t, n = o.propHooks[this.prop];
                return this.options.duration ? this.pos = t = S.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e,
                this.now = (this.end - this.start) * t + this.start,
                this.options.step && this.options.step.call(this.elem, this.now, this),
                (n && n.set ? n : o.propHooks._default).set(this),
                this
            }
        }).init.prototype = o.prototype,
        (o.propHooks = {
            _default: {
                get: function(e) {
                    return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (e = S.css(e.elem, e.prop, "")) && "auto" !== e ? e : 0
                },
                set: function(e) {
                    S.fx.step[e.prop] ? S.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[S.cssProps[e.prop]] && !S.cssHooks[e.prop] ? e.elem[e.prop] = e.now : S.style(e.elem, e.prop, e.now + e.unit)
                }
            }
        }).scrollTop = o.propHooks.scrollLeft = {
            set: function(e) {
                e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
            }
        },
        S.easing = {
            linear: function(e) {
                return e
            },
            swing: function(e) {
                return .5 - Math.cos(e * Math.PI) / 2
            },
            _default: "swing"
        },
        S.fx = o.prototype.init,
        S.fx.step = {};
        var I, lt, a, k, dt = /^(?:toggle|show|hide)$/, ft = /queueHooks$/;
        function pt() {
            lt && (!1 === E.hidden && w.requestAnimationFrame ? w.requestAnimationFrame(pt) : w.setTimeout(pt, S.fx.interval),
            S.fx.tick())
        }
        function ht() {
            return w.setTimeout(function() {
                I = void 0
            }),
            I = Date.now()
        }
        function mt(e, t) {
            var n, i = 0, r = {
                height: e
            };
            for (t = t ? 1 : 0; i < 4; i += 2 - t)
                r["margin" + (n = p[i])] = r["padding" + n] = e;
            return t && (r.opacity = r.width = e),
            r
        }
        function vt(e, t, n) {
            for (var i, r = (L.tweeners[t] || []).concat(L.tweeners["*"]), o = 0, a = r.length; o < a; o++)
                if (i = r[o].call(n, t, e))
                    return i
        }
        function L(r, e, t) {
            var n, o, i, a, s, c, u, l = 0, d = L.prefilters.length, f = S.Deferred().always(function() {
                delete p.elem
            }), p = function() {
                if (!o) {
                    for (var e = I || ht(), e = Math.max(0, h.startTime + h.duration - e), t = 1 - (e / h.duration || 0), n = 0, i = h.tweens.length; n < i; n++)
                        h.tweens[n].run(t);
                    if (f.notifyWith(r, [h, t, e]),
                    t < 1 && i)
                        return e;
                    i || f.notifyWith(r, [h, 1, 0]),
                    f.resolveWith(r, [h])
                }
                return !1
            }, h = f.promise({
                elem: r,
                props: S.extend({}, e),
                opts: S.extend(!0, {
                    specialEasing: {},
                    easing: S.easing._default
                }, t),
                originalProperties: e,
                originalOptions: t,
                startTime: I || ht(),
                duration: t.duration,
                tweens: [],
                createTween: function(e, t) {
                    t = S.Tween(r, h.opts, e, t, h.opts.specialEasing[e] || h.opts.easing);
                    return h.tweens.push(t),
                    t
                },
                stop: function(e) {
                    var t = 0
                      , n = e ? h.tweens.length : 0;
                    if (!o) {
                        for (o = !0; t < n; t++)
                            h.tweens[t].run(1);
                        e ? (f.notifyWith(r, [h, 1, 0]),
                        f.resolveWith(r, [h, e])) : f.rejectWith(r, [h, e])
                    }
                    return this
                }
            }), m = h.props, v = m, g = h.opts.specialEasing;
            for (i in v)
                if (s = g[a = _(i)],
                c = v[i],
                Array.isArray(c) && (s = c[1],
                c = v[i] = c[0]),
                i !== a && (v[a] = c,
                delete v[i]),
                (u = S.cssHooks[a]) && "expand"in u)
                    for (i in c = u.expand(c),
                    delete v[a],
                    c)
                        i in v || (v[i] = c[i],
                        g[i] = s);
                else
                    g[a] = s;
            for (; l < d; l++)
                if (n = L.prefilters[l].call(h, r, m, h.opts))
                    return y(n.stop) && (S._queueHooks(h.elem, h.opts.queue).stop = n.stop.bind(n)),
                    n;
            return S.map(m, vt, h),
            y(h.opts.start) && h.opts.start.call(r, h),
            h.progress(h.opts.progress).done(h.opts.done, h.opts.complete).fail(h.opts.fail).always(h.opts.always),
            S.fx.timer(S.extend(p, {
                elem: r,
                anim: h,
                queue: h.opts.queue
            })),
            h
        }
        S.Animation = S.extend(L, {
            tweeners: {
                "*": [function(e, t) {
                    var n = this.createTween(e, t);
                    return _e(n.elem, e, f.exec(t), n),
                    n
                }
                ]
            },
            tweener: function(e, t) {
                for (var n, i = 0, r = (e = y(e) ? (t = e,
                ["*"]) : e.match(T)).length; i < r; i++)
                    n = e[i],
                    L.tweeners[n] = L.tweeners[n] || [],
                    L.tweeners[n].unshift(t)
            },
            prefilters: [function(e, t, n) {
                var i, r, o, a, s, c, u, l = "width"in t || "height"in t, d = this, f = {}, p = e.style, h = e.nodeType && ge(e), m = g.get(e, "fxshow");
                for (i in n.queue || (null == (a = S._queueHooks(e, "fx")).unqueued && (a.unqueued = 0,
                s = a.empty.fire,
                a.empty.fire = function() {
                    a.unqueued || s()
                }
                ),
                a.unqueued++,
                d.always(function() {
                    d.always(function() {
                        a.unqueued--,
                        S.queue(e, "fx").length || a.empty.fire()
                    })
                })),
                t)
                    if (r = t[i],
                    dt.test(r)) {
                        if (delete t[i],
                        o = o || "toggle" === r,
                        r === (h ? "hide" : "show")) {
                            if ("show" !== r || !m || void 0 === m[i])
                                continue;
                            h = !0
                        }
                        f[i] = m && m[i] || S.style(e, i)
                    }
                if ((c = !S.isEmptyObject(t)) || !S.isEmptyObject(f))
                    for (i in l && 1 === e.nodeType && (n.overflow = [p.overflow, p.overflowX, p.overflowY],
                    null == (u = m && m.display) && (u = g.get(e, "display")),
                    "none" === (l = S.css(e, "display")) && (u ? l = u : (b([e], !0),
                    u = e.style.display || u,
                    l = S.css(e, "display"),
                    b([e]))),
                    "inline" === l || "inline-block" === l && null != u) && "none" === S.css(e, "float") && (c || (d.done(function() {
                        p.display = u
                    }),
                    null == u && (l = p.display,
                    u = "none" === l ? "" : l)),
                    p.display = "inline-block"),
                    n.overflow && (p.overflow = "hidden",
                    d.always(function() {
                        p.overflow = n.overflow[0],
                        p.overflowX = n.overflow[1],
                        p.overflowY = n.overflow[2]
                    })),
                    c = !1,
                    f)
                        c || (m ? "hidden"in m && (h = m.hidden) : m = g.access(e, "fxshow", {
                            display: u
                        }),
                        o && (m.hidden = !h),
                        h && b([e], !0),
                        d.done(function() {
                            for (i in h || b([e]),
                            g.remove(e, "fxshow"),
                            f)
                                S.style(e, i, f[i])
                        })),
                        c = vt(h ? m[i] : 0, i, d),
                        i in m || (m[i] = c.start,
                        h && (c.end = c.start,
                        c.start = 0))
            }
            ],
            prefilter: function(e, t) {
                t ? L.prefilters.unshift(e) : L.prefilters.push(e)
            }
        }),
        S.speed = function(e, t, n) {
            var i = e && "object" == typeof e ? S.extend({}, e) : {
                complete: n || !n && t || y(e) && e,
                duration: e,
                easing: n && t || t && !y(t) && t
            };
            return S.fx.off ? i.duration = 0 : "number" != typeof i.duration && (i.duration in S.fx.speeds ? i.duration = S.fx.speeds[i.duration] : i.duration = S.fx.speeds._default),
            null != i.queue && !0 !== i.queue || (i.queue = "fx"),
            i.old = i.complete,
            i.complete = function() {
                y(i.old) && i.old.call(this),
                i.queue && S.dequeue(this, i.queue)
            }
            ,
            i
        }
        ,
        S.fn.extend({
            fadeTo: function(e, t, n, i) {
                return this.filter(ge).css("opacity", 0).show().end().animate({
                    opacity: t
                }, e, n, i)
            },
            animate: function(t, e, n, i) {
                function r() {
                    var e = L(this, S.extend({}, t), a);
                    (o || g.get(this, "finish")) && e.stop(!0)
                }
                var o = S.isEmptyObject(t)
                  , a = S.speed(e, n, i);
                return r.finish = r,
                o || !1 === a.queue ? this.each(r) : this.queue(a.queue, r)
            },
            stop: function(r, e, o) {
                function a(e) {
                    var t = e.stop;
                    delete e.stop,
                    t(o)
                }
                return "string" != typeof r && (o = e,
                e = r,
                r = void 0),
                e && !1 !== r && this.queue(r || "fx", []),
                this.each(function() {
                    var e = !0
                      , t = null != r && r + "queueHooks"
                      , n = S.timers
                      , i = g.get(this);
                    if (t)
                        i[t] && i[t].stop && a(i[t]);
                    else
                        for (t in i)
                            i[t] && i[t].stop && ft.test(t) && a(i[t]);
                    for (t = n.length; t--; )
                        n[t].elem !== this || null != r && n[t].queue !== r || (n[t].anim.stop(o),
                        e = !1,
                        n.splice(t, 1));
                    !e && o || S.dequeue(this, r)
                })
            },
            finish: function(a) {
                return !1 !== a && (a = a || "fx"),
                this.each(function() {
                    var e, t = g.get(this), n = t[a + "queue"], i = t[a + "queueHooks"], r = S.timers, o = n ? n.length : 0;
                    for (t.finish = !0,
                    S.queue(this, a, []),
                    i && i.stop && i.stop.call(this, !0),
                    e = r.length; e--; )
                        r[e].elem === this && r[e].queue === a && (r[e].anim.stop(!0),
                        r.splice(e, 1));
                    for (e = 0; e < o; e++)
                        n[e] && n[e].finish && n[e].finish.call(this);
                    delete t.finish
                })
            }
        }),
        S.each(["toggle", "show", "hide"], function(e, i) {
            var r = S.fn[i];
            S.fn[i] = function(e, t, n) {
                return null == e || "boolean" == typeof e ? r.apply(this, arguments) : this.animate(mt(i, !0), e, t, n)
            }
        }),
        S.each({
            slideDown: mt("show"),
            slideUp: mt("hide"),
            slideToggle: mt("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(e, i) {
            S.fn[e] = function(e, t, n) {
                return this.animate(i, e, t, n)
            }
        }),
        S.timers = [],
        S.fx.tick = function() {
            var e, t = 0, n = S.timers;
            for (I = Date.now(); t < n.length; t++)
                (e = n[t])() || n[t] !== e || n.splice(t--, 1);
            n.length || S.fx.stop(),
            I = void 0
        }
        ,
        S.fx.timer = function(e) {
            S.timers.push(e),
            S.fx.start()
        }
        ,
        S.fx.interval = 13,
        S.fx.start = function() {
            lt || (lt = !0,
            pt())
        }
        ,
        S.fx.stop = function() {
            lt = null
        }
        ,
        S.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        },
        S.fn.delay = function(i, e) {
            return i = S.fx && S.fx.speeds[i] || i,
            this.queue(e = e || "fx", function(e, t) {
                var n = w.setTimeout(e, i);
                t.stop = function() {
                    w.clearTimeout(n)
                }
            })
        }
        ,
        a = E.createElement("input"),
        k = E.createElement("select").appendChild(E.createElement("option")),
        a.type = "checkbox",
        v.checkOn = "" !== a.value,
        v.optSelected = k.selected,
        (a = E.createElement("input")).value = "t",
        a.type = "radio",
        v.radioValue = "t" === a.value;
        var gt, j = S.expr.attrHandle, yt = (S.fn.extend({
            attr: function(e, t) {
                return d(this, S.attr, e, t, 1 < arguments.length)
            },
            removeAttr: function(e) {
                return this.each(function() {
                    S.removeAttr(this, e)
                })
            }
        }),
        S.extend({
            attr: function(e, t, n) {
                var i, r, o = e.nodeType;
                if (3 !== o && 8 !== o && 2 !== o)
                    return void 0 === e.getAttribute ? S.prop(e, t, n) : (1 === o && S.isXMLDoc(e) || (r = S.attrHooks[t.toLowerCase()] || (S.expr.match.bool.test(t) ? gt : void 0)),
                    void 0 !== n ? null === n ? void S.removeAttr(e, t) : r && "set"in r && void 0 !== (i = r.set(e, n, t)) ? i : (e.setAttribute(t, n + ""),
                    n) : !(r && "get"in r && null !== (i = r.get(e, t))) && null == (i = S.find.attr(e, t)) ? void 0 : i)
            },
            attrHooks: {
                type: {
                    set: function(e, t) {
                        var n;
                        if (!v.radioValue && "radio" === t && c(e, "input"))
                            return n = e.value,
                            e.setAttribute("type", t),
                            n && (e.value = n),
                            t
                    }
                }
            },
            removeAttr: function(e, t) {
                var n, i = 0, r = t && t.match(T);
                if (r && 1 === e.nodeType)
                    for (; n = r[i++]; )
                        e.removeAttribute(n)
            }
        }),
        gt = {
            set: function(e, t, n) {
                return !1 === t ? S.removeAttr(e, n) : e.setAttribute(n, n),
                n
            }
        },
        S.each(S.expr.match.bool.source.match(/\w+/g), function(e, t) {
            var a = j[t] || S.find.attr;
            j[t] = function(e, t, n) {
                var i, r, o = t.toLowerCase();
                return n || (r = j[o],
                j[o] = i,
                i = null != a(e, t, n) ? o : null,
                j[o] = r),
                i
            }
        }),
        /^(?:input|select|textarea|button)$/i), _t = /^(?:a|area)$/i;
        function D(e) {
            return (e.match(T) || []).join(" ")
        }
        function N(e) {
            return e.getAttribute && e.getAttribute("class") || ""
        }
        function bt(e) {
            return Array.isArray(e) ? e : "string" == typeof e && e.match(T) || []
        }
        S.fn.extend({
            prop: function(e, t) {
                return d(this, S.prop, e, t, 1 < arguments.length)
            },
            removeProp: function(e) {
                return this.each(function() {
                    delete this[S.propFix[e] || e]
                })
            }
        }),
        S.extend({
            prop: function(e, t, n) {
                var i, r, o = e.nodeType;
                if (3 !== o && 8 !== o && 2 !== o)
                    return 1 === o && S.isXMLDoc(e) || (t = S.propFix[t] || t,
                    r = S.propHooks[t]),
                    void 0 !== n ? r && "set"in r && void 0 !== (i = r.set(e, n, t)) ? i : e[t] = n : r && "get"in r && null !== (i = r.get(e, t)) ? i : e[t]
            },
            propHooks: {
                tabIndex: {
                    get: function(e) {
                        var t = S.find.attr(e, "tabindex");
                        return t ? parseInt(t, 10) : yt.test(e.nodeName) || _t.test(e.nodeName) && e.href ? 0 : -1
                    }
                }
            },
            propFix: {
                for: "htmlFor",
                class: "className"
            }
        }),
        v.optSelected || (S.propHooks.selected = {
            get: function(e) {
                e = e.parentNode;
                return e && e.parentNode && e.parentNode.selectedIndex,
                null
            },
            set: function(e) {
                e = e.parentNode;
                e && (e.selectedIndex,
                e.parentNode) && e.parentNode.selectedIndex
            }
        }),
        S.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
            S.propFix[this.toLowerCase()] = this
        }),
        S.fn.extend({
            addClass: function(t) {
                var e, n, i, r, o, a, s = 0;
                if (y(t))
                    return this.each(function(e) {
                        S(this).addClass(t.call(this, e, N(this)))
                    });
                if ((e = bt(t)).length)
                    for (; n = this[s++]; )
                        if (a = N(n),
                        i = 1 === n.nodeType && " " + D(a) + " ") {
                            for (o = 0; r = e[o++]; )
                                i.indexOf(" " + r + " ") < 0 && (i += r + " ");
                            a !== (a = D(i)) && n.setAttribute("class", a)
                        }
                return this
            },
            removeClass: function(t) {
                var e, n, i, r, o, a, s = 0;
                if (y(t))
                    return this.each(function(e) {
                        S(this).removeClass(t.call(this, e, N(this)))
                    });
                if (!arguments.length)
                    return this.attr("class", "");
                if ((e = bt(t)).length)
                    for (; n = this[s++]; )
                        if (a = N(n),
                        i = 1 === n.nodeType && " " + D(a) + " ") {
                            for (o = 0; r = e[o++]; )
                                for (; -1 < i.indexOf(" " + r + " "); )
                                    i = i.replace(" " + r + " ", " ");
                            a !== (a = D(i)) && n.setAttribute("class", a)
                        }
                return this
            },
            toggleClass: function(r, t) {
                var o = typeof r
                  , a = "string" == o || Array.isArray(r);
                return "boolean" == typeof t && a ? t ? this.addClass(r) : this.removeClass(r) : y(r) ? this.each(function(e) {
                    S(this).toggleClass(r.call(this, e, N(this), t), t)
                }) : this.each(function() {
                    var e, t, n, i;
                    if (a)
                        for (t = 0,
                        n = S(this),
                        i = bt(r); e = i[t++]; )
                            n.hasClass(e) ? n.removeClass(e) : n.addClass(e);
                    else
                        void 0 !== r && "boolean" != o || ((e = N(this)) && g.set(this, "__className__", e),
                        this.setAttribute && this.setAttribute("class", !e && !1 !== r && g.get(this, "__className__") || ""))
                })
            },
            hasClass: function(e) {
                for (var t, n = 0, i = " " + e + " "; t = this[n++]; )
                    if (1 === t.nodeType && -1 < (" " + D(N(t)) + " ").indexOf(i))
                        return !0;
                return !1
            }
        });
        function wt(e) {
            e.stopPropagation()
        }
        var Et = /\r/g
          , St = (S.fn.extend({
            val: function(t) {
                var n, e, i, r = this[0];
                return arguments.length ? (i = y(t),
                this.each(function(e) {
                    1 !== this.nodeType || (null == (e = i ? t.call(this, e, S(this).val()) : t) ? e = "" : "number" == typeof e ? e += "" : Array.isArray(e) && (e = S.map(e, function(e) {
                        return null == e ? "" : e + ""
                    })),
                    (n = S.valHooks[this.type] || S.valHooks[this.nodeName.toLowerCase()]) && "set"in n && void 0 !== n.set(this, e, "value")) || (this.value = e)
                })) : r ? (n = S.valHooks[r.type] || S.valHooks[r.nodeName.toLowerCase()]) && "get"in n && void 0 !== (e = n.get(r, "value")) ? e : "string" == typeof (e = r.value) ? e.replace(Et, "") : null == e ? "" : e : void 0
            }
        }),
        S.extend({
            valHooks: {
                option: {
                    get: function(e) {
                        var t = S.find.attr(e, "value");
                        return null != t ? t : D(S.text(e))
                    }
                },
                select: {
                    get: function(e) {
                        for (var t, n = e.options, i = e.selectedIndex, r = "select-one" === e.type, o = r ? null : [], a = r ? i + 1 : n.length, s = i < 0 ? a : r ? i : 0; s < a; s++)
                            if (((t = n[s]).selected || s === i) && !t.disabled && (!t.parentNode.disabled || !c(t.parentNode, "optgroup"))) {
                                if (t = S(t).val(),
                                r)
                                    return t;
                                o.push(t)
                            }
                        return o
                    },
                    set: function(e, t) {
                        for (var n, i, r = e.options, o = S.makeArray(t), a = r.length; a--; )
                            ((i = r[a]).selected = -1 < S.inArray(S.valHooks.option.get(i), o)) && (n = !0);
                        return n || (e.selectedIndex = -1),
                        o
                    }
                }
            }
        }),
        S.each(["radio", "checkbox"], function() {
            S.valHooks[this] = {
                set: function(e, t) {
                    if (Array.isArray(t))
                        return e.checked = -1 < S.inArray(S(e).val(), t)
                }
            },
            v.checkOn || (S.valHooks[this].get = function(e) {
                return null === e.getAttribute("value") ? "on" : e.value
            }
            )
        }),
        v.focusin = "onfocusin"in w,
        /^(?:focusinfocus|focusoutblur)$/)
          , Tt = (S.extend(S.event, {
            trigger: function(e, t, n, i) {
                var r, o, a, s, c, u, l, d = [n || E], f = W.call(e, "type") ? e.type : e, p = W.call(e, "namespace") ? e.namespace.split(".") : [], h = l = o = n = n || E;
                if (3 !== n.nodeType && 8 !== n.nodeType && !St.test(f + S.event.triggered) && (-1 < f.indexOf(".") && (f = (p = f.split(".")).shift(),
                p.sort()),
                s = f.indexOf(":") < 0 && "on" + f,
                (e = e[S.expando] ? e : new S.Event(f,"object" == typeof e && e)).isTrigger = i ? 2 : 3,
                e.namespace = p.join("."),
                e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
                e.result = void 0,
                e.target || (e.target = n),
                t = null == t ? [e] : S.makeArray(t, [e]),
                u = S.event.special[f] || {},
                i || !u.trigger || !1 !== u.trigger.apply(n, t))) {
                    if (!i && !u.noBubble && !m(n)) {
                        for (a = u.delegateType || f,
                        St.test(a + f) || (h = h.parentNode); h; h = h.parentNode)
                            d.push(h),
                            o = h;
                        o === (n.ownerDocument || E) && d.push(o.defaultView || o.parentWindow || w)
                    }
                    for (r = 0; (h = d[r++]) && !e.isPropagationStopped(); )
                        l = h,
                        e.type = 1 < r ? a : u.bindType || f,
                        (c = (g.get(h, "events") || {})[e.type] && g.get(h, "handle")) && c.apply(h, t),
                        (c = s && h[s]) && c.apply && pe(h) && (e.result = c.apply(h, t),
                        !1 === e.result) && e.preventDefault();
                    return e.type = f,
                    i || e.isDefaultPrevented() || u._default && !1 !== u._default.apply(d.pop(), t) || !pe(n) || s && y(n[f]) && !m(n) && ((o = n[s]) && (n[s] = null),
                    S.event.triggered = f,
                    e.isPropagationStopped() && l.addEventListener(f, wt),
                    n[f](),
                    e.isPropagationStopped() && l.removeEventListener(f, wt),
                    S.event.triggered = void 0,
                    o) && (n[s] = o),
                    e.result
                }
            },
            simulate: function(e, t, n) {
                n = S.extend(new S.Event, n, {
                    type: e,
                    isSimulated: !0
                });
                S.event.trigger(n, null, t)
            }
        }),
        S.fn.extend({
            trigger: function(e, t) {
                return this.each(function() {
                    S.event.trigger(e, t, this)
                })
            },
            triggerHandler: function(e, t) {
                var n = this[0];
                if (n)
                    return S.event.trigger(e, t, n, !0)
            }
        }),
        v.focusin || S.each({
            focus: "focusin",
            blur: "focusout"
        }, function(n, i) {
            function r(e) {
                S.event.simulate(i, e.target, S.event.fix(e))
            }
            S.event.special[i] = {
                setup: function() {
                    var e = this.ownerDocument || this
                      , t = g.access(e, i);
                    t || e.addEventListener(n, r, !0),
                    g.access(e, i, (t || 0) + 1)
                },
                teardown: function() {
                    var e = this.ownerDocument || this
                      , t = g.access(e, i) - 1;
                    t ? g.access(e, i, t) : (e.removeEventListener(n, r, !0),
                    g.remove(e, i))
                }
            }
        }),
        w.location)
          , Ot = Date.now()
          , xt = /\?/
          , Ct = (S.parseXML = function(e) {
            var t;
            if (!e || "string" != typeof e)
                return null;
            try {
                t = (new w.DOMParser).parseFromString(e, "text/xml")
            } catch (e) {
                t = void 0
            }
            return t && !t.getElementsByTagName("parsererror").length || S.error("Invalid XML: " + e),
            t
        }
        ,
        /\[\]$/)
          , At = /\r?\n/g
          , Pt = /^(?:submit|button|image|reset|file)$/i
          , It = /^(?:input|select|textarea|keygen)/i;
        S.param = function(e, t) {
            function n(e, t) {
                t = y(t) ? t() : t,
                r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == t ? "" : t)
            }
            var i, r = [];
            if (Array.isArray(e) || e.jquery && !S.isPlainObject(e))
                S.each(e, function() {
                    n(this.name, this.value)
                });
            else
                for (i in e)
                    !function n(i, e, r, o) {
                        if (Array.isArray(e))
                            S.each(e, function(e, t) {
                                r || Ct.test(i) ? o(i, t) : n(i + "[" + ("object" == typeof t && null != t ? e : "") + "]", t, r, o)
                            });
                        else if (r || "object" !== h(e))
                            o(i, e);
                        else
                            for (var t in e)
                                n(i + "[" + t + "]", e[t], r, o)
                    }(i, e[i], t, n);
            return r.join("&")
        }
        ,
        S.fn.extend({
            serialize: function() {
                return S.param(this.serializeArray())
            },
            serializeArray: function() {
                return this.map(function() {
                    var e = S.prop(this, "elements");
                    return e ? S.makeArray(e) : this
                }).filter(function() {
                    var e = this.type;
                    return this.name && !S(this).is(":disabled") && It.test(this.nodeName) && !Pt.test(e) && (this.checked || !we.test(e))
                }).map(function(e, t) {
                    var n = S(this).val();
                    return null == n ? null : Array.isArray(n) ? S.map(n, function(e) {
                        return {
                            name: t.name,
                            value: e.replace(At, "\r\n")
                        }
                    }) : {
                        name: t.name,
                        value: n.replace(At, "\r\n")
                    }
                }).get()
            }
        });
        var kt = /%20/g
          , Lt = /#.*$/
          , jt = /([?&])_=[^&]*/
          , Dt = /^(.*?):[ \t]*([^\r\n]*)$/gm
          , Nt = /^(?:GET|HEAD)$/
          , Rt = /^\/\//
          , Mt = {}
          , Ft = {}
          , Bt = "*/".concat("*")
          , Ut = E.createElement("a");
        function Ht(o) {
            return function(e, t) {
                "string" != typeof e && (t = e,
                e = "*");
                var n, i = 0, r = e.toLowerCase().match(T) || [];
                if (y(t))
                    for (; n = r[i++]; )
                        "+" === n[0] ? (n = n.slice(1) || "*",
                        (o[n] = o[n] || []).unshift(t)) : (o[n] = o[n] || []).push(t)
            }
        }
        function qt(t, i, r, o) {
            var a = {}
              , s = t === Ft;
            function c(e) {
                var n;
                return a[e] = !0,
                S.each(t[e] || [], function(e, t) {
                    t = t(i, r, o);
                    return "string" != typeof t || s || a[t] ? s ? !(n = t) : void 0 : (i.dataTypes.unshift(t),
                    c(t),
                    !1)
                }),
                n
            }
            return c(i.dataTypes[0]) || !a["*"] && c("*")
        }
        function Wt(e, t) {
            var n, i, r = S.ajaxSettings.flatOptions || {};
            for (n in t)
                void 0 !== t[n] && ((r[n] ? e : i = i || {})[n] = t[n]);
            return i && S.extend(!0, e, i),
            e
        }
        Ut.href = Tt.href,
        S.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: Tt.href,
                type: "GET",
                isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Tt.protocol),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": Bt,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {
                    xml: /\bxml\b/,
                    html: /\bhtml/,
                    json: /\bjson\b/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText",
                    json: "responseJSON"
                },
                converters: {
                    "* text": String,
                    "text html": !0,
                    "text json": JSON.parse,
                    "text xml": S.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function(e, t) {
                return t ? Wt(Wt(e, S.ajaxSettings), t) : Wt(S.ajaxSettings, e)
            },
            ajaxPrefilter: Ht(Mt),
            ajaxTransport: Ht(Ft),
            ajax: function(e, t) {
                "object" == typeof e && (t = e,
                e = void 0);
                var c, u, l, n, d, f, p, i, h = S.ajaxSetup({}, t = t || {}), m = h.context || h, v = h.context && (m.nodeType || m.jquery) ? S(m) : S.event, g = S.Deferred(), y = S.Callbacks("once memory"), _ = h.statusCode || {}, r = {}, o = {}, a = "canceled", b = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (f) {
                            if (!n)
                                for (n = {}; t = Dt.exec(l); )
                                    n[t[1].toLowerCase()] = t[2];
                            t = n[e.toLowerCase()]
                        }
                        return null == t ? null : t
                    },
                    getAllResponseHeaders: function() {
                        return f ? l : null
                    },
                    setRequestHeader: function(e, t) {
                        return null == f && (e = o[e.toLowerCase()] = o[e.toLowerCase()] || e,
                        r[e] = t),
                        this
                    },
                    overrideMimeType: function(e) {
                        return null == f && (h.mimeType = e),
                        this
                    },
                    statusCode: function(e) {
                        if (e)
                            if (f)
                                b.always(e[b.status]);
                            else
                                for (var t in e)
                                    _[t] = [_[t], e[t]];
                        return this
                    },
                    abort: function(e) {
                        e = e || a;
                        return c && c.abort(e),
                        s(0, e),
                        this
                    }
                };
                if (g.promise(b),
                h.url = ((e || h.url || Tt.href) + "").replace(Rt, Tt.protocol + "//"),
                h.type = t.method || t.type || h.method || h.type,
                h.dataTypes = (h.dataType || "*").toLowerCase().match(T) || [""],
                null == h.crossDomain) {
                    e = E.createElement("a");
                    try {
                        e.href = h.url,
                        e.href = e.href,
                        h.crossDomain = Ut.protocol + "//" + Ut.host != e.protocol + "//" + e.host
                    } catch (e) {
                        h.crossDomain = !0
                    }
                }
                if (h.data && h.processData && "string" != typeof h.data && (h.data = S.param(h.data, h.traditional)),
                qt(Mt, h, t, b),
                !f) {
                    for (i in (p = S.event && h.global) && 0 == S.active++ && S.event.trigger("ajaxStart"),
                    h.type = h.type.toUpperCase(),
                    h.hasContent = !Nt.test(h.type),
                    u = h.url.replace(Lt, ""),
                    h.hasContent ? h.data && h.processData && 0 === (h.contentType || "").indexOf("application/x-www-form-urlencoded") && (h.data = h.data.replace(kt, "+")) : (e = h.url.slice(u.length),
                    h.data && (h.processData || "string" == typeof h.data) && (u += (xt.test(u) ? "&" : "?") + h.data,
                    delete h.data),
                    !1 === h.cache && (u = u.replace(jt, "$1"),
                    e = (xt.test(u) ? "&" : "?") + "_=" + Ot++ + e),
                    h.url = u + e),
                    h.ifModified && (S.lastModified[u] && b.setRequestHeader("If-Modified-Since", S.lastModified[u]),
                    S.etag[u]) && b.setRequestHeader("If-None-Match", S.etag[u]),
                    (h.data && h.hasContent && !1 !== h.contentType || t.contentType) && b.setRequestHeader("Content-Type", h.contentType),
                    b.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + Bt + "; q=0.01" : "") : h.accepts["*"]),
                    h.headers)
                        b.setRequestHeader(i, h.headers[i]);
                    if (h.beforeSend && (!1 === h.beforeSend.call(m, b, h) || f))
                        return b.abort();
                    if (a = "abort",
                    y.add(h.complete),
                    b.done(h.success),
                    b.fail(h.error),
                    c = qt(Ft, h, t, b)) {
                        if (b.readyState = 1,
                        p && v.trigger("ajaxSend", [b, h]),
                        f)
                            return b;
                        h.async && 0 < h.timeout && (d = w.setTimeout(function() {
                            b.abort("timeout")
                        }, h.timeout));
                        try {
                            f = !1,
                            c.send(r, s)
                        } catch (e) {
                            if (f)
                                throw e;
                            s(-1, e)
                        }
                    } else
                        s(-1, "No Transport")
                }
                return b;
                function s(e, t, n, i) {
                    var r, o, a, s = t;
                    f || (f = !0,
                    d && w.clearTimeout(d),
                    c = void 0,
                    l = i || "",
                    b.readyState = 0 < e ? 4 : 0,
                    i = 200 <= e && e < 300 || 304 === e,
                    n && (a = function(e, t, n) {
                        for (var i, r, o, a, s = e.contents, c = e.dataTypes; "*" === c[0]; )
                            c.shift(),
                            void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
                        if (i)
                            for (r in s)
                                if (s[r] && s[r].test(i)) {
                                    c.unshift(r);
                                    break
                                }
                        if (c[0]in n)
                            o = c[0];
                        else {
                            for (r in n) {
                                if (!c[0] || e.converters[r + " " + c[0]]) {
                                    o = r;
                                    break
                                }
                                a = a || r
                            }
                            o = o || a
                        }
                        if (o)
                            return o !== c[0] && c.unshift(o),
                            n[o]
                    }(h, b, n)),
                    a = function(e, t, n, i) {
                        var r, o, a, s, c, u = {}, l = e.dataTypes.slice();
                        if (l[1])
                            for (a in e.converters)
                                u[a.toLowerCase()] = e.converters[a];
                        for (o = l.shift(); o; )
                            if (e.responseFields[o] && (n[e.responseFields[o]] = t),
                            !c && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
                            c = o,
                            o = l.shift())
                                if ("*" === o)
                                    o = c;
                                else if ("*" !== c && c !== o) {
                                    if (!(a = u[c + " " + o] || u["* " + o]))
                                        for (r in u)
                                            if ((s = r.split(" "))[1] === o && (a = u[c + " " + s[0]] || u["* " + s[0]])) {
                                                !0 === a ? a = u[r] : !0 !== u[r] && (o = s[0],
                                                l.unshift(s[1]));
                                                break
                                            }
                                    if (!0 !== a)
                                        if (a && e.throws)
                                            t = a(t);
                                        else
                                            try {
                                                t = a(t)
                                            } catch (e) {
                                                return {
                                                    state: "parsererror",
                                                    error: a ? e : "No conversion from " + c + " to " + o
                                                }
                                            }
                                }
                        return {
                            state: "success",
                            data: t
                        }
                    }(h, a, b, i),
                    i ? (h.ifModified && ((n = b.getResponseHeader("Last-Modified")) && (S.lastModified[u] = n),
                    n = b.getResponseHeader("etag")) && (S.etag[u] = n),
                    204 === e || "HEAD" === h.type ? s = "nocontent" : 304 === e ? s = "notmodified" : (s = a.state,
                    r = a.data,
                    i = !(o = a.error))) : (o = s,
                    !e && s || (s = "error",
                    e < 0 && (e = 0))),
                    b.status = e,
                    b.statusText = (t || s) + "",
                    i ? g.resolveWith(m, [r, s, b]) : g.rejectWith(m, [b, s, o]),
                    b.statusCode(_),
                    _ = void 0,
                    p && v.trigger(i ? "ajaxSuccess" : "ajaxError", [b, h, i ? r : o]),
                    y.fireWith(m, [b, s]),
                    p && (v.trigger("ajaxComplete", [b, h]),
                    --S.active || S.event.trigger("ajaxStop")))
                }
            },
            getJSON: function(e, t, n) {
                return S.get(e, t, n, "json")
            },
            getScript: function(e, t) {
                return S.get(e, void 0, t, "script")
            }
        }),
        S.each(["get", "post"], function(e, r) {
            S[r] = function(e, t, n, i) {
                return y(t) && (i = i || n,
                n = t,
                t = void 0),
                S.ajax(S.extend({
                    url: e,
                    type: r,
                    dataType: i,
                    data: t,
                    success: n
                }, S.isPlainObject(e) && e))
            }
        }),
        S._evalUrl = function(e) {
            return S.ajax({
                url: e,
                type: "GET",
                dataType: "script",
                cache: !0,
                async: !1,
                global: !1,
                throws: !0
            })
        }
        ,
        S.fn.extend({
            wrapAll: function(e) {
                return this[0] && (y(e) && (e = e.call(this[0])),
                e = S(e, this[0].ownerDocument).eq(0).clone(!0),
                this[0].parentNode && e.insertBefore(this[0]),
                e.map(function() {
                    for (var e = this; e.firstElementChild; )
                        e = e.firstElementChild;
                    return e
                }).append(this)),
                this
            },
            wrapInner: function(n) {
                return y(n) ? this.each(function(e) {
                    S(this).wrapInner(n.call(this, e))
                }) : this.each(function() {
                    var e = S(this)
                      , t = e.contents();
                    t.length ? t.wrapAll(n) : e.append(n)
                })
            },
            wrap: function(t) {
                var n = y(t);
                return this.each(function(e) {
                    S(this).wrapAll(n ? t.call(this, e) : t)
                })
            },
            unwrap: function(e) {
                return this.parent(e).not("body").each(function() {
                    S(this).replaceWith(this.childNodes)
                }),
                this
            }
        }),
        S.expr.pseudos.hidden = function(e) {
            return !S.expr.pseudos.visible(e)
        }
        ,
        S.expr.pseudos.visible = function(e) {
            return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
        }
        ,
        S.ajaxSettings.xhr = function() {
            try {
                return new w.XMLHttpRequest
            } catch (e) {}
        }
        ;
        var Vt = {
            0: 200,
            1223: 204
        }
          , zt = S.ajaxSettings.xhr()
          , Gt = (v.cors = !!zt && "withCredentials"in zt,
        v.ajax = zt = !!zt,
        S.ajaxTransport(function(r) {
            var o, a;
            if (v.cors || zt && !r.crossDomain)
                return {
                    send: function(e, t) {
                        var n, i = r.xhr();
                        if (i.open(r.type, r.url, r.async, r.username, r.password),
                        r.xhrFields)
                            for (n in r.xhrFields)
                                i[n] = r.xhrFields[n];
                        for (n in r.mimeType && i.overrideMimeType && i.overrideMimeType(r.mimeType),
                        r.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"),
                        e)
                            i.setRequestHeader(n, e[n]);
                        o = function(e) {
                            return function() {
                                o && (o = a = i.onload = i.onerror = i.onabort = i.ontimeout = i.onreadystatechange = null,
                                "abort" === e ? i.abort() : "error" === e ? "number" != typeof i.status ? t(0, "error") : t(i.status, i.statusText) : t(Vt[i.status] || i.status, i.statusText, "text" !== (i.responseType || "text") || "string" != typeof i.responseText ? {
                                    binary: i.response
                                } : {
                                    text: i.responseText
                                }, i.getAllResponseHeaders()))
                            }
                        }
                        ,
                        i.onload = o(),
                        a = i.onerror = i.ontimeout = o("error"),
                        void 0 !== i.onabort ? i.onabort = a : i.onreadystatechange = function() {
                            4 === i.readyState && w.setTimeout(function() {
                                o && a()
                            })
                        }
                        ,
                        o = o("abort");
                        try {
                            i.send(r.hasContent && r.data || null)
                        } catch (e) {
                            if (o)
                                throw e
                        }
                    },
                    abort: function() {
                        o && o()
                    }
                }
        }),
        S.ajaxPrefilter(function(e) {
            e.crossDomain && (e.contents.script = !1)
        }),
        S.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /\b(?:java|ecma)script\b/
            },
            converters: {
                "text script": function(e) {
                    return S.globalEval(e),
                    e
                }
            }
        }),
        S.ajaxPrefilter("script", function(e) {
            void 0 === e.cache && (e.cache = !1),
            e.crossDomain && (e.type = "GET")
        }),
        S.ajaxTransport("script", function(n) {
            var i, r;
            if (n.crossDomain)
                return {
                    send: function(e, t) {
                        i = S("<script>").prop({
                            charset: n.scriptCharset,
                            src: n.url
                        }).on("load error", r = function(e) {
                            i.remove(),
                            r = null,
                            e && t("error" === e.type ? 404 : 200, e.type)
                        }
                        ),
                        E.head.appendChild(i[0])
                    },
                    abort: function() {
                        r && r()
                    }
                }
        }),
        [])
          , Yt = /(=)\?(?=&|$)|\?\?/
          , Kt = (S.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                var e = Gt.pop() || S.expando + "_" + Ot++;
                return this[e] = !0,
                e
            }
        }),
        S.ajaxPrefilter("json jsonp", function(e, t, n) {
            var i, r, o, a = !1 !== e.jsonp && (Yt.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Yt.test(e.data) && "data");
            if (a || "jsonp" === e.dataTypes[0])
                return i = e.jsonpCallback = y(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback,
                a ? e[a] = e[a].replace(Yt, "$1" + i) : !1 !== e.jsonp && (e.url += (xt.test(e.url) ? "&" : "?") + e.jsonp + "=" + i),
                e.converters["script json"] = function() {
                    return o || S.error(i + " was not called"),
                    o[0]
                }
                ,
                e.dataTypes[0] = "json",
                r = w[i],
                w[i] = function() {
                    o = arguments
                }
                ,
                n.always(function() {
                    void 0 === r ? S(w).removeProp(i) : w[i] = r,
                    e[i] && (e.jsonpCallback = t.jsonpCallback,
                    Gt.push(i)),
                    o && y(r) && r(o[0]),
                    o = r = void 0
                }),
                "script"
        }),
        v.createHTMLDocument = ((e = E.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>",
        2 === e.childNodes.length),
        S.parseHTML = function(e, t, n) {
            var i;
            return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t,
            t = !1),
            t || (v.createHTMLDocument ? ((i = (t = E.implementation.createHTMLDocument("")).createElement("base")).href = E.location.href,
            t.head.appendChild(i)) : t = E),
            i = !n && [],
            (n = J.exec(e)) ? [t.createElement(n[1])] : (n = xe([e], t, i),
            i && i.length && S(i).remove(),
            S.merge([], n.childNodes)))
        }
        ,
        S.fn.load = function(e, t, n) {
            var i, r, o, a = this, s = e.indexOf(" ");
            return -1 < s && (i = D(e.slice(s)),
            e = e.slice(0, s)),
            y(t) ? (n = t,
            t = void 0) : t && "object" == typeof t && (r = "POST"),
            0 < a.length && S.ajax({
                url: e,
                type: r || "GET",
                dataType: "html",
                data: t
            }).done(function(e) {
                o = arguments,
                a.html(i ? S("<div>").append(S.parseHTML(e)).find(i) : e)
            }).always(n && function(e, t) {
                a.each(function() {
                    n.apply(this, o || [e.responseText, t, e])
                })
            }
            ),
            this
        }
        ,
        S.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
            S.fn[t] = function(e) {
                return this.on(t, e)
            }
        }),
        S.expr.pseudos.animated = function(t) {
            return S.grep(S.timers, function(e) {
                return t === e.elem
            }).length
        }
        ,
        S.offset = {
            setOffset: function(e, t, n) {
                var i, r, o, a, s = S.css(e, "position"), c = S(e), u = {};
                "static" === s && (e.style.position = "relative"),
                o = c.offset(),
                i = S.css(e, "top"),
                a = S.css(e, "left"),
                s = ("absolute" === s || "fixed" === s) && -1 < (i + a).indexOf("auto") ? (r = (s = c.position()).top,
                s.left) : (r = parseFloat(i) || 0,
                parseFloat(a) || 0),
                null != (t = y(t) ? t.call(e, n, S.extend({}, o)) : t).top && (u.top = t.top - o.top + r),
                null != t.left && (u.left = t.left - o.left + s),
                "using"in t ? t.using.call(e, u) : c.css(u)
            }
        },
        S.fn.extend({
            offset: function(t) {
                var e, n;
                return arguments.length ? void 0 === t ? this : this.each(function(e) {
                    S.offset.setOffset(this, t, e)
                }) : (n = this[0]) ? n.getClientRects().length ? (e = n.getBoundingClientRect(),
                n = n.ownerDocument.defaultView,
                {
                    top: e.top + n.pageYOffset,
                    left: e.left + n.pageXOffset
                }) : {
                    top: 0,
                    left: 0
                } : void 0
            },
            position: function() {
                if (this[0]) {
                    var e, t, n, i = this[0], r = {
                        top: 0,
                        left: 0
                    };
                    if ("fixed" === S.css(i, "position"))
                        t = i.getBoundingClientRect();
                    else {
                        for (t = this.offset(),
                        n = i.ownerDocument,
                        e = i.offsetParent || n.documentElement; e && (e === n.body || e === n.documentElement) && "static" === S.css(e, "position"); )
                            e = e.parentNode;
                        e && e !== i && 1 === e.nodeType && ((r = S(e).offset()).top += S.css(e, "borderTopWidth", !0),
                        r.left += S.css(e, "borderLeftWidth", !0))
                    }
                    return {
                        top: t.top - r.top - S.css(i, "marginTop", !0),
                        left: t.left - r.left - S.css(i, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function() {
                return this.map(function() {
                    for (var e = this.offsetParent; e && "static" === S.css(e, "position"); )
                        e = e.offsetParent;
                    return e || Ce
                })
            }
        }),
        S.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function(t, r) {
            var o = "pageYOffset" === r;
            S.fn[t] = function(e) {
                return d(this, function(e, t, n) {
                    var i;
                    if (m(e) ? i = e : 9 === e.nodeType && (i = e.defaultView),
                    void 0 === n)
                        return i ? i[r] : e[t];
                    i ? i.scrollTo(o ? i.pageXOffset : n, o ? n : i.pageYOffset) : e[t] = n
                }, t, e, arguments.length)
            }
        }),
        S.each(["top", "left"], function(e, n) {
            S.cssHooks[n] = Ze(v.pixelPosition, function(e, t) {
                if (t)
                    return t = P(e, n),
                    Qe.test(t) ? S(e).position()[n] + "px" : t
            })
        }),
        S.each({
            Height: "height",
            Width: "width"
        }, function(a, s) {
            S.each({
                padding: "inner" + a,
                content: s,
                "": "outer" + a
            }, function(i, o) {
                S.fn[o] = function(e, t) {
                    var n = arguments.length && (i || "boolean" != typeof e)
                      , r = i || (!0 === e || !0 === t ? "margin" : "border");
                    return d(this, function(e, t, n) {
                        var i;
                        return m(e) ? 0 === o.indexOf("outer") ? e["inner" + a] : e.document.documentElement["client" + a] : 9 === e.nodeType ? (i = e.documentElement,
                        Math.max(e.body["scroll" + a], i["scroll" + a], e.body["offset" + a], i["offset" + a], i["client" + a])) : void 0 === n ? S.css(e, t, r) : S.style(e, t, n, r)
                    }, s, n ? e : void 0, n)
                }
            })
        }),
        S.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, n) {
            S.fn[n] = function(e, t) {
                return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n)
            }
        }),
        S.fn.extend({
            hover: function(e, t) {
                return this.mouseenter(e).mouseleave(t || e)
            }
        }),
        S.fn.extend({
            bind: function(e, t, n) {
                return this.on(e, null, t, n)
            },
            unbind: function(e, t) {
                return this.off(e, null, t)
            },
            delegate: function(e, t, n, i) {
                return this.on(t, e, n, i)
            },
            undelegate: function(e, t, n) {
                return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
            }
        }),
        S.proxy = function(e, t) {
            var n, i;
            if ("string" == typeof t && (i = e[t],
            t = e,
            e = i),
            y(e))
                return n = s.call(arguments, 2),
                (i = function() {
                    return e.apply(t || this, n.concat(s.call(arguments)))
                }
                ).guid = e.guid = e.guid || S.guid++,
                i
        }
        ,
        S.holdReady = function(e) {
            e ? S.readyWait++ : S.ready(!0)
        }
        ,
        S.isArray = Array.isArray,
        S.parseJSON = JSON.parse,
        S.nodeName = c,
        S.isFunction = y,
        S.isWindow = m,
        S.camelCase = _,
        S.type = h,
        S.now = Date.now,
        S.isNumeric = function(e) {
            var t = S.type(e);
            return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
        }
        ,
        void 0 !== (Jt = function() {
            return S
        }
        .apply($t, [])) && (Qt.exports = Jt),
        w.jQuery)
          , Xt = w.$;
        return S.noConflict = function(e) {
            return w.$ === S && (w.$ = Xt),
            e && w.jQuery === S && (w.jQuery = Kt),
            S
        }
        ,
        R || (w.jQuery = w.$ = S),
        S
    })
}
, , function(e, r, o) {
    "use strict";
    !function(i) {
        Object.defineProperty(r, "__esModule", {
            value: !0
        }),
        r.Tools = void 0;
        var t = o(99);
        function n() {}
        n.bytesToSize = function(e) {
            var t;
            return 0 == e ? "0 Byte" : (t = Math.floor(Math.log(e) / Math.log(1024)),
            (e / Math.pow(1024, t)).toFixed(2) + " " + ["Bytes", "KB", "MB", "GB", "TB"][t])
        }
        ,
        n.mbytesToSize = function(e) {
            return n.bytesToSize(1e6 * e)
        }
        ,
        n.convertPointsToPixels = function(e) {
            return e * (1 + 1 / 3)
        }
        ,
        n.strCapitalize = function(e) {
            return e.charAt(0).toUpperCase() + e.slice(1)
        }
        ,
        n.isRtlPage = function() {
            var e = null != document.dir ? document.dir : document.getElementsByTagName("html")[0].getAttribute("dir");
            return "rtl" == e
        }
        ,
        n.isRTL = function() {
            return i("body").hasClass("rtl")
        }
        ,
        Object.defineProperty(n, "textDirection", {
            get: function() {
                return n.isRTL() ? "right" : "left"
            },
            enumerable: !1,
            configurable: !0
        }),
        n.getClosestNumber = function(e, t) {
            for (var n = Math.abs(t[0] - e), i = 0, r = 1; r < t.length; r++) {
                var o = Math.abs(t[r] - e);
                o < n && (i = r,
                n = o)
            }
            return t[i]
        }
        ,
        n.createHTMLFromText = function(e) {
            var t = document.createElement("div");
            return t.innerHTML = e.trim(),
            t.firstChild
        }
        ,
        n.modalView = function(e) {
            var t = '<div class="modal fade" id="' + e.id + '" aria-labelledby="' + e.id + 'Modal" tabindex="-1" role="dialog" aria-hidden="true"><div class="modal-dialog" role="document"><div class="modal-content">'
              , t = "title"in e ? t + ('<div class="modal-header"><h4 class="modal-title">' + e.title + '</h4><button type="button" class="close" data-dismiss="modal">' + n.svgClose()) + "</button></div>" : t + ('<div class="modal-header"><button type="button" class="close" data-dismiss="modal" aria-label="Close">' + n.svgClose()) + "</button></div>";
            return "content"in e ? t = t + ('<div class="modal-body">' + e.content) + "</div>" : t += '<div class="modal-body"></div>',
            "btn"in e && (t = t + ('<div class="modal-footer"><button type="button" class="btn btn-link" data-dismiss="modal">' + e.btn) + "</button></div>"),
            t += "</div></div></div>"
        }
        ,
        n.feedbackModalView = function(e) {
            var t = e.id
              , n = e.title
              , n = void 0 === n ? "" : n
              , i = e.content
              , i = void 0 === i ? "" : i
              , r = e.img
              , r = void 0 === r ? "" : r
              , o = e.primaryBtn
              , e = e.secondaryBtn
              , a = ""
              , s = "";
            return ('\n            <div class="modal modal--alert" id="' + t + '" aria-labelledby="' + t + 'Modal" tabindex="-1" role="dialog"\n            aria-hidden="true">\n                <div class="modal-dialog modal-dialog-centered" role="document">\n                    <div class="modal-content modal-content--alert">\n                        <div class="dialog__content">\n                            <div class="dialog__body">\n                                ' + (a = n ? (r ? '<img id="' + t + '-img" src=' + r + ' alt="Visual feedback" />' : "") + '<div id="' + t + '-title" class="dialog__title">' + n + "</div>" : a) + "\n\n                                " + (s = i ? '<div id="' + t + '-content">' + i + "</div>" : s) + '\n                                <div class="dialog__actions">\n                                    <button id="' + t + '-secondary-btn" type="button" class="btn btn--secondary" data-dismiss="modal">' + (void 0 === e ? "No" : e) + '</button>\n                                    <button id="' + t + '-primary-btn" type="button" class="btn" data-dismiss="modal">' + (void 0 === o ? "Yes" : o) + "</button>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        ").trim()
        }
        ,
        n.codeModalView = function(e) {
            return ('\n        <div class="modal fade" id="' + e.id + '" aria-labelledby="' + e.id + 'Modal" tabindex="-1" role="dialog"\n        aria-hidden="true">\n            <div class="modal-dialog modal-dialog-centered" role="document">\n                <div class="modal-content modal-content--code">\n                    <div class="code-editor code-editor--light">\n                        <div class="code-editor__libraries">\n                            <div class="code-editor__libraries__title black-3">\n                                <span>' + e.title + '</span>\n                            </div>\n                        </div>\n                        <div class="code-editor__content">\n                            <textarea class="code-editor__content__textarea" data-mode="javascript" readonly>\n' + e.code + "\n                            </textarea>\n                        </div>\n                    </div>\n\n                </div>\n            </div>\n        </div>\n        ").trim()
        }
        ,
        n.modalViewOk = function(e) {
            return e.btn = t.Lang.t("Ok"),
            n.modalView(e)
        }
        ,
        n.setInputCursorAtTheEnd = function(e) {
            var t = e.val().length;
            e.focus(),
            e[0].setSelectionRange(t, t)
        }
        ,
        n.svgClose = function() {
            return n.svgRemove(12, 12)
        }
        ,
        n.svgRotate = function(e, t) {
            return '<svg xmlns="http://www.w3.org/2000/svg" width="' + (e = void 0 === e ? 14 : e) + '" height="' + (t = void 0 === t ? 16 : t) + '" viewBox="0 0 14 16"><path d="M11.328 6.364l1.24-1.2c.79.98 1.283 2.113 1.433 3.288h-1.775c-.123-.735-.43-1.454-.896-2.088zm.896 3.778H14c-.15 1.175-.633 2.308-1.424 3.288l-1.24-1.2c.457-.634.765-1.344.888-2.088zm-.888 4.497C10.318 15.4 9.13 15.856 7.9 16v-1.716a5.31 5.31 0 0 0 2.162-.871l1.266 1.226zM6.152 2.595V0l4 3.846-4 3.76V4.302c-2.496.406-4.394 2.485-4.394 4.995s1.898 4.59 4.394 4.995V16C2.68 15.586 0 12.746 0 9.297s2.68-6.29 6.152-6.703z" fill="#47474F" fill-rule="evenodd"/></svg>'
        }
        ,
        n.svgRemove = function(e, t) {
            return '<svg xmlns="http://www.w3.org/2000/svg" width="' + (e = void 0 === e ? 12 : e) + '" height="' + (t = void 0 === t ? 12 : t) + '" viewBox="0 0 12 12"><polygon fill="#47474F" fill-rule="evenodd" points="12 1.208 10.79 0 6 4.792 1.21 0 0 1.208 4.79 6 0 10.792 1.21 12 6 7.208 10.79 12 12 10.792 7.21 6"/></svg>'
        }
        ,
        n.svgArrowRight = function(e, t) {
            return '<svg xmlns="http://www.w3.org/2000/svg" width="' + (e = void 0 === e ? 12 : e) + '" height="' + (t = void 0 === t ? 12 : t) + '" viewBox="0 0 448 512"><path d="M313.94 216H12c-6.627 0-12 5.373-12 12v56c0 6.627 5.373 12 12 12h301.94v46.06c0 21.382 25.85 32.1 40.97 16.97l86.06-86.06c9.373-9.373 9.373-24.57 0-33.94l-86.06-86.06c-15.12-15.12-40.97-4.41-40.97 16.97V216z"/></svg>'
        }
        ,
        n.svgHome = function() {
            return '<svg xmlns="http://www.w3.org/2000/svg" width="26" height="21"><path d="M22.028 12.67v6.468a1.08 1.08 0 0 1-1.083 1.083h-5.236c-.298 0-.542-.244-.542-.542v-5.056c0-.298-.244-.542-.542-.542h-3.25c-.298 0-.542.244-.542.542v5.056c0 .298-.244.542-.542.542H5.056a1.08 1.08 0 0 1-1.083-1.083V12.67a.54.54 0 0 1 .199-.42l8.486-6.987a.55.55 0 0 1 .691 0l8.486 6.987c.122.104.194.257.194.42zm3.774-2.75l-3.774-3.1V.56c0-.298-.244-.542-.542-.542h-2.528c-.298 0-.542.244-.542.542v3.277L14.377.5c-.8-.66-1.955-.66-2.753 0L.2 9.922c-.23.2-.262.533-.072.763l1.15 1.4c.2.23.533.262.763.072l10.617-8.743a.55.55 0 0 1 .691 0l10.617 8.743c.23.2.573.158.763-.072l1.15-1.4c.2-.235.153-.573-.077-.763z"/></svg>'
        }
        ,
        n.randomId = function() {
            return Math.random().toString(36).replace(/[^a-z]+/g, "").substr(2, 10)
        }
        ,
        n.colorpicker = function(t) {
            var e = null
              , e = 1 == i(t).data("limit") ? {
                preferredFormat: "hex",
                showPaletteOnly: !0,
                color: "blanchedalmond",
                palette: [["#000", "#444", "#666", "#999", "#ccc", "#eee", "#f3f3f3", "#fff"], ["#f00", "#f90", "#ff0", "#0f0", "#0ff", "#00f", "#90f", "#f0f"], ["#f4cccc", "#fce5cd", "#fff2cc", "#d9ead3", "#d0e0e3", "#cfe2f3", "#d9d2e9", "#ead1dc"], ["#ea9999", "#f9cb9c", "#ffe599", "#b6d7a8", "#a2c4c9", "#9fc5e8", "#b4a7d6", "#d5a6bd"], ["#e06666", "#f6b26b", "#ffd966", "#93c47d", "#76a5af", "#6fa8dc", "#8e7cc3", "#c27ba0"], ["#c00", "#e69138", "#f1c232", "#6aa84f", "#45818e", "#3d85c6", "#674ea7", "#a64d79"], ["#900", "#b45f06", "#bf9000", "#38761d", "#134f5c", "#0b5394", "#351c75", "#741b47"], ["#600", "#783f04", "#7f6000", "#274e13", "#0c343d", "#073763", "#20124d", "#4c1130"]]
            } : {
                allowEmpty: !0,
                showInitial: !0,
                preferredFormat: "hex"
            };
            1 == i(t).data("input") && (e.showInput = !0),
            1 == i(t).data("empty") && (e.allowEmpty = !0,
            1 == i(t).data("limit") && e.palette.push(["transparent"]),
            e.change = function(e) {
                e = 0 === e._a ? "transparent" : e.toHexString(),
                i(t).val(e)
            }
            ),
            1 == i(t).data("inline") && (e.flat = !0),
            1 == i(t).data("aplha") && (e.showAlpha = !0),
            e.clickoutFiresChange = !0;
            try {
                i(t).spectrum(e)
            } catch (t) {}
        }
        ,
        n.isElementInView = function(e, t) {
            return void 0 === t && (t = !1),
            0 != e.length && (0 == t ? e.offset().top < i(window).height() && 60 < e.offset().top + e.height() : e.offset().top + e.height() < i(window).height() && 60 < e.offset().top)
        }
        ,
        n.keepInNumericBounds = function(e, t, n) {
            return null !== e && n < e && (n = e),
            n = null !== t && t < n ? t : n
        }
        ,
        n.scrollControl = function(t, n, i) {
            var r = 0;
            t.scroll(function() {
                var e = t.scrollTop();
                r < e && "function" == typeof i && i(),
                e < r && "function" == typeof n && n(),
                r = e
            })
        }
        ,
        n.loadingFromPreviousStart = function() {
            var e = i(".fromPrevious");
            0 <= e.length || (e = i('<div class="wait fromPrevious">' + t.Lang.t("previousTaskLoading") + "</div>"),
            i(".main").append(e)),
            e.css("display", "flex")
        }
        ,
        n.loadingFromPreviousFail = function() {
            var e = "<div><p>" + t.Lang.t("previousFail") + '</p><p></p><p><button class="btn" onclick="window.history.go(-1); return false;">' + t.Lang.t("previousFailBack") + '</button> <button class="btn btn--red" id="closePrevious">' + t.Lang.t("previousFailContinue") + "</button></p></div>";
            i(".fromPrevious").html(e).css("background-image", "none")
        }
        ,
        n.loadingFromPreviousEnd = function() {
            i(".fromPrevious").remove()
        }
        ,
        n.serializeFormData = function(e) {
            var t = {};
            try {
                for (var n = 0, i = e.entries(); n < i.length; n++) {
                    var r = i[n]
                      , o = r[0]
                      , a = r[1];
                    t[o] = a
                }
            } catch (e) {}
            return t = {
                info: "form data serialize failed"
            }
        }
        ,
        n.parseTemplate = function(n, e, t) {
            return void 0 === t && (t = "simple"),
            null != (e = void 0 === e ? null : e) && ("simple" == t && i.each(e, function(e, t) {
                n = n.replace("{" + e + "}", t)
            }),
            "dollar" == t) && i.each(e, function(e, t) {
                n = n.replace("${" + e + "}", t)
            }),
            n
        }
        ,
        n.isEmail = function(e) {
            return !!/^\w+([\+\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e)
        }
        ,
        r.Tools = n
    }
    .call(this, o(1))
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.lazyloadCss = void 0,
    t.lazyloadCss = function(e, t) {
        void 0 === t && (t = {});
        for (var n = document.getElementsByTagName("link"), i = n.length; i--; )
            if (n[i].hasAttribute("href") && n[i].href.match(e))
                return !0;
        var r, o, a = document.createElement("link");
        for (r in a.rel = "stylesheet",
        a.href = e,
        t)
            t.hasOwnProperty(r) && (o = t[r],
            a.setAttribute(r, o));
        var s = document.getElementsByTagName("link")[0];
        return s.parentNode.insertBefore(a, s),
        !0
    }
}
, function(e, l, d) {
    "use strict";
    !function(i) {
        var r, e, t = this && this.__extends || (r = function(e, t) {
            return (r = Object.setPrototypeOf || ({
                __proto__: []
            }instanceof Array ? function(e, t) {
                e.__proto__ = t
            }
            : function(e, t) {
                for (var n in t)
                    t.hasOwnProperty(n) && (e[n] = t[n])
            }
            ))(e, t)
        }
        ,
        function(e, t) {
            function n() {
                this.constructor = e
            }
            r(e, t),
            e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype,
            new n)
        }
        ), o = (Object.defineProperty(l, "__esModule", {
            value: !0
        }),
        l.AbstractAuthState = void 0,
        d(57)), n = d(21), u = d(103), a = d(8), s = d(17), n = (e = n.StateBase,
        t(c, e),
        c.prototype.initAbstractAuth = function() {
            var t, n = this;
            this.abstractAuthInited || (t = this.domStateRoot,
            this.ELEMENTS_TO_HIDE_IN_TEMPLATE.forEach(function(e) {
                return n.hideHtmlElement(t, e)
            }),
            this.setSocialAuthLinkContextPlacement(),
            u.SocialAuthPopup.addEventListener("auth:success", this._onSocialAuthSuccess),
            this.userAuth = new o.UserAuth({
                onLoginSucess: this._abstractOnLoginSuccess,
                onRegisterSuccess: this._abstractOnRegisterSuccess,
                onLoginError: this._abstractOnLoginError,
                onRegisterError: this._abstractOnRegisterError,
                runningFrom: "dialog" === this.ctx.getContextPlacement() ? "popup" : "auth"
            }),
            this.setUserTimeZoneInCookie(),
            this.initOverrideFormActions(),
            this.init2FactorAuth(),
            this.abstractAuthInited = !0)
        }
        ,
        c.prototype.showFlashMessage = function(e) {
            var t = document.createElement("div");
            t.classList.add("flash"),
            t.innerText = e,
            this.currentScreen.querySelector(".social-auth").appendChild(t)
        }
        ,
        c.prototype.clearFlashMessage = function() {
            this.domStateRoot.querySelectorAll(".flash").forEach(function(e) {
                return e.remove()
            })
        }
        ,
        Object.defineProperty(c.prototype, "extraLoginParams", {
            set: function(e) {
                (this._extraLoginParams = e) || (this.userAuth.extraLoginParams = null);
                var t, n = [];
                for (t in e)
                    n.push({
                        name: t,
                        value: e[t]
                    });
                this.userAuth.extraLoginParams = n
            },
            enumerable: !1,
            configurable: !0
        }),
        c.prototype.initOverrideFormActions = function() {
            var t = this
              , e = this.domRoot;
            e.querySelectorAll("form").forEach(function(e) {
                e.addEventListener("submit", function(e) {
                    e.preventDefault(),
                    t.clearFlashMessage()
                })
            }),
            e.querySelectorAll("a").forEach(function(e) {
                e.getAttribute("href").startsWith("javascript") || (e.setAttribute("data-a-href", e.href),
                e.href = "javascript:;")
            }),
            this.goRegisterScreenBtn.addEventListener("click", function(e) {
                return t.changeScreen("register")
            }),
            this.goLoginScreenBtn.addEventListener("click", function(e) {
                return t.changeScreen("login")
            }),
            this.goForgetPasswordBtn.addEventListener("click", function(e) {
                return t.changeScreen("reset")
            }),
            this.goBackFromResetScreenBtn.addEventListener("click", function(e) {
                return t.changeScreen("login")
            }),
            this.okResetSuccessBtn.addEventListener("click", function(e) {
                return t.dispatchEvent(new a.IloveEvent("end"))
            }),
            this.redefineActionsForLoginScreen(),
            this.redefineActionsForRegisterScreen(),
            this.redefineActionsForResetScreen()
        }
        ,
        Object.defineProperty(c.prototype, "goBackFromResetScreenBtn", {
            get: function() {
                var e = this.domRoot.querySelector("#goBackReset");
                if (e)
                    return e;
                throw "'Go back from reset screen' button not found"
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(c.prototype, "okResetSuccessBtn", {
            get: function() {
                var e = this.domRoot.querySelector("#resetSuccessBtn");
                if (e)
                    return e;
                throw "'OkResetSuccessBtn' button not found"
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(c.prototype, "goRegisterScreenBtn", {
            get: function() {
                var e = this.domRoot.querySelector("#goRegister");
                if (e)
                    return e;
                throw "'Go register screen' button not found"
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(c.prototype, "goLoginScreenBtn", {
            get: function() {
                var e = this.domRoot.querySelector("#goLogin");
                if (e)
                    return e;
                throw "'Go login screen' button not found"
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(c.prototype, "goForgetPasswordBtn", {
            get: function() {
                var e = this.domRoot.querySelector("#forget-password");
                if (e)
                    return e;
                throw "'Go forget password screen' button not found"
            },
            enumerable: !1,
            configurable: !0
        }),
        c.prototype.redefineActionsForLoginScreen = function() {
            this.domRoot.querySelector('[data-screen="login"]').querySelector("form").addEventListener("submit", this._abstractOnLoginSubmit)
        }
        ,
        c.prototype.redefineActionsForResetScreen = function() {
            var e = this
              , t = this.domRoot.querySelector('[data-screen="reset"]')
              , t = (t.querySelector("form").addEventListener("submit", this._abstractOnResetSubmit),
            t.querySelector("form #userpasswordresetform-email"));
            if (!t)
                throw "Reset password email input not found";
            t.addEventListener("input", function() {
                return e.resetPasswordErrorDom.innerHTML = ""
            })
        }
        ,
        Object.defineProperty(c.prototype, "resetPasswordErrorDom", {
            get: function() {
                var e = this.domStateRoot.querySelector("[data-screen='reset'] span.error");
                if (e)
                    return e;
                throw "Error div not found"
            },
            enumerable: !1,
            configurable: !0
        }),
        c.prototype.redefineActionsForRegisterScreen = function() {
            var e = this.domRoot.querySelector('[data-screen="register"]').querySelector("form")
              , t = e.querySelector("#signupform-timezone")
              , n = s.Tools.getBrowserTimezone();
            "UTC" !== n && (t.value = n),
            e.addEventListener("submit", this._abstractOnRegisterSubmit)
        }
        ,
        c.prototype.hideHtmlElement = function(e, t) {
            e.querySelectorAll(t).forEach(function(e) {
                e.style.display = "none"
            })
        }
        ,
        c.prototype.dispatchEvent = function(e) {
            return this.eventEmitter.dispatchEvent(e)
        }
        ,
        c.prototype.addEventListener = function(e, t) {
            return this.eventEmitter.addEventListener(e, t)
        }
        ,
        c.prototype.init2FactorAuth = function() {
            this.domRoot.querySelector(".field-loginform-google_authenticator_code").style.display = "none"
        }
        ,
        c.prototype.check2FactorError = function(e) {
            "gacIsEmpty" == e && (this.domRoot.querySelector(".field-loginform-google_authenticator_code").style.display = "block",
            this.domRoot.querySelector(".field-loginEmail").style.display = "none",
            this.domRoot.querySelector(".field-inputPasswordAuth").style.display = "none")
        }
        ,
        c);
        function c() {
            var c = null !== e && e.apply(this, arguments) || this;
            return c.abstractAuthInited = !1,
            c.INITIAL_SCREEN = "register",
            c.ELEMENTS_TO_HIDE_IN_TEMPLATE = [".form__title", ".brand"],
            c.setUserTimeZoneInCookie = function() {
                var e = s.Tools.getBrowserTimezone();
                "UTC" !== e && window.Cookies.set("auth_tz", e)
            }
            ,
            c._onSocialAuthSuccess = function(e) {
                !0 === e.detail.socialAuth_isNewUser ? c._abstractOnRegisterSuccess({
                    from_auth_social_login: !0
                }) : c._abstractOnLoginSuccess({
                    from_auth_social_login: !0
                })
            }
            ,
            c.setSocialAuthLinkContextPlacement = function() {
                var e = c.domRoot.querySelectorAll(".auth-link")
                  , a = "dialog" === c.ctx.getContextPlacement() ? "popup" : "auth"
                  , s = u.SocialAuthPopup.runningFromAttr;
                e.forEach(function(n) {
                    n.setAttribute(s, a),
                    n.removeAttribute("onclick"),
                    n.removeAttribute("href");
                    var i = n.getAttribute("data-provider")
                      , e = c.t("social_provider_" + i)
                      , t = n.getAttribute("data-auth-action")
                      , r = c.t("login" === t ? "backdrop_social_signin_title" : "backdrop_social_signup_title", {
                        social_provider: e
                    })
                      , o = c.t("backdrop_social_subtitle");
                    n.addEventListener("click", function() {
                        var e = c.domStateRoot.querySelector(".auth-screens__backdrop--social")
                          , t = document.createElement("div");
                        t.innerHTML = e.innerHTML,
                        c.showBackdrop(t, r, o),
                        c.setBackdropCallback(function() {
                            u.SocialAuthPopup.focusWindow()
                        }, function() {
                            u.SocialAuthPopup.closeWindow(),
                            c.clearBackdrop()
                        }),
                        u.SocialAuthPopup.open(i, {}, n).then(c.clearBackdrop, function(e) {
                            c.clearBackdrop(),
                            e.errors && c.showFlashMessage(e.errors[0])
                        })
                    })
                })
            }
            ,
            c.clearInputs = function() {
                c.domStateRoot.querySelectorAll("input").forEach(function(e) {
                    return e.value = ""
                })
            }
            ,
            c._abstractOnResetSubmit = function(e) {
                var t = c.domRoot.querySelector('[data-screen="reset"] form')
                  , t = i(t).serializeArray();
                c.showLoadingScreen(),
                c.userAuth.sendResetPasswordEmail(t).then(function(e) {
                    var t = c.domStateRoot.querySelector(".reset-password-success-msg");
                    if (!t)
                        throw "'Reset password success' element not found";
                    t.innerHTML = e.data.status_msg,
                    c.changeScreen("reset-success"),
                    c.clearLoadingScreen()
                }, function(e) {
                    c.clearLoadingScreen();
                    var t, n = null == (n = null == e ? void 0 : e.responseJSON) ? void 0 : n.data;
                    throw null != (t = null == n ? void 0 : n.errors) && t.email ? c.resetPasswordErrorDom.innerHTML = n.errors.email.join(",") : c.resetPasswordErrorDom.innerHTML = null != (t = null == (n = null == (t = null == e ? void 0 : e.responseJSON) ? void 0 : t.data) ? void 0 : n.status_msg) ? t : "",
                    e
                })
            }
            ,
            c._abstractOnLoginSubmit = function(e) {
                var t = c.domRoot.querySelector('[data-screen="login"] form')
                  , n = i(t).serializeArray();
                c.userAuth.extraLoginParams && c.userAuth.extraLoginParams.forEach(function(e) {
                    n.push(e)
                }),
                c.showLoadingScreen(),
                c.userAuth.login(n)
            }
            ,
            c._abstractOnRegisterSubmit = function(e) {
                var t = c.domRoot.querySelector('[data-screen="register"] form')
                  , t = i(t).serializeArray();
                c.showLoadingScreen(),
                c.userAuth.register(t)
            }
            ,
            c._abstractOnLoginSuccess = function(e) {
                c.clearLoadingScreen(),
                !0 !== (null == e ? void 0 : e.from_auth_social_login) && o.UserAuth.sendEventUserAuth(),
                c._onLoginSuccess(e),
                c.dispatchEvent(new a.IloveEvent("login:success"))
            }
            ,
            c._abstractOnRegisterSuccess = function(e) {
                c.clearLoadingScreen(),
                !0 !== (null == e ? void 0 : e.from_auth_social_login) && o.UserAuth.sendEventUserAuth(),
                c._onRegisterSuccess(e),
                c.dispatchEvent(new a.IloveEvent("register:success"))
            }
            ,
            c._abstractOnLoginError = function(e) {
                c.genericAuthErrorHandler(e)
            }
            ,
            c._abstractOnRegisterError = function(e) {
                c.genericAuthErrorHandler(e)
            }
            ,
            c.genericAuthErrorHandler = function(e) {
                c.clearLoadingScreen(),
                c.clearFlashMessage();
                var t = e.responseJSON;
                (t = t || "object" != typeof e ? t : e) && (t = t[e = Object.keys(t)[0]][0],
                c.showFlashMessage(t),
                c.check2FactorError(e))
            }
            ,
            c
        }
        l.AbstractAuthState = n
    }
    .call(this, d(1))
}
, , , , , , , , , , , function(e, a, s) {
    "use strict";
    !function(i) {
        var r = this && this.__createBinding || (Object.create ? function(e, t, n, i) {
            void 0 === i && (i = n),
            Object.defineProperty(e, i, {
                enumerable: !0,
                get: function() {
                    return t[n]
                }
            })
        }
        : function(e, t, n, i) {
            e[i = void 0 === i ? n : i] = t[n]
        }
        )
          , o = this && this.__setModuleDefault || (Object.create ? function(e, t) {
            Object.defineProperty(e, "default", {
                enumerable: !0,
                value: t
            })
        }
        : function(e, t) {
            e.default = t
        }
        )
          , e = this && this.__importStar || function(e) {
            if (e && e.__esModule)
                return e;
            var t = {};
            if (null != e)
                for (var n in e)
                    "default" !== n && Object.hasOwnProperty.call(e, n) && r(t, e, n);
            return o(t, e),
            t
        }
          , t = (Object.defineProperty(a, "__esModule", {
            value: !0
        }),
        a.Lang = void 0,
        e(s(113)));
        function n() {}
        n.t = function(n, e) {
            var t = "iloveLang";
            return e && e.source && (t = e.source),
            window[t] && window[t][n] && (n = window[t][n]),
            null != e && i.each(e, function(e, t) {
                n = n.replace("${" + e + "}", t)
            }),
            n
        }
        ,
        n.w = function(e, t) {
            i("." + (e = void 0 === e ? "translate" : e)).each(function() {
                var e = i(this).html();
                i(this).html(n.t(e, t))
            }),
            i("#" + e).each(function() {
                var e = i(this).html();
                i(this).html(n.t(e, t))
            })
        }
        ,
        n.fontsForWritingSystem = function(e) {
            switch (e) {
            case "latin":
                return ["arial", "verdana", "courier", "comic", "times-new-roman", "impact", "arial-unicode-ms"];
            case "indic":
                return ["lohit-marathi", "lohit-devanagari", "arial-unicode-ms"];
            default:
                return ["arial-unicode-ms"]
            }
        }
        ,
        n.getFontsInfo = function() {
            var e = window.fonts;
            if (e)
                return e;
            throw "[Lang Service] You have to load the fonts information from the backend to use this method"
        }
        ,
        n.loadAllFonts = function() {
            for (var e in window.fonts)
                window.fonts.hasOwnProperty(e) && "arial" != e && this.loadFont(e)
        }
        ,
        n.loadFont = function(e) {
            e in this.loadedFonts || (t.lazyloadCss("/font/" + e + ".css"),
            this.loadedFonts[e] = !0)
        }
        ,
        n.hasHindiCharacters = function(e) {
            return 0 < e.split("").filter(function(e) {
                e = e.charCodeAt();
                return 2309 <= e && e <= 2361
            }).length
        }
        ,
        n.hasJapanCharacters = function(e) {
            return /[\u3000-\u303f]|[\u3040-\u309f]|[\u30a0-\u30ff]|[\uff00-\uff9f]|[\u4e00-\u9faf]|[\u3400-\u4dbf]/.test(e)
        }
        ,
        n.hasChineseCharacters = function(e) {
            return /[\u4e00-\u9fff]|[\u3400-\u4dbf]|[\uf900-\ufaff]|[\u3300-\u33ff]|[\ufe30-\ufe4f]|[\uf900-\ufaff]/.test(e)
        }
        ,
        n.hasKoreanCharacters = function(e) {
            return /[\uac00-\uafff]|[\ub000-\ubfff]/.test(e)
        }
        ,
        n.hasArabicCharacters = function(e) {
            return /[\u0600-\u06FF]|[\u0750-\u077F]/.test(e)
        }
        ,
        n.hasGreekCharacters = function(e) {
            return /[\u0370-\u03FF]|[\u1F00-\u1FFF]/.test(e)
        }
        ,
        n.hasCyrillicCharacters = function(e) {
            return /[\u0400-\u04FF]|[\u0500-\u052F]/.test(e)
        }
        ,
        n.hasCommonLatinCharacters = function(e) {
            return !1
        }
        ,
        n.keyCodeToWritingSystem = function(e) {
            for (var t in this.writingSystemCharacterRanges)
                for (var n = this.writingSystemCharacterRanges[t], i = 0; i < n.length; i++) {
                    var r = n[i]
                      , o = r[0]
                      , r = r[1];
                    if (o <= e && e <= r)
                        return t
                }
            return "unknown"
        }
        ,
        n.detectWritingSystems = function(e) {
            if (0 === e.length)
                return [];
            for (var t = {}, n = 0; n < e.length; n++)
                t[this.keyCodeToWritingSystem(e.charCodeAt(n))] = !0;
            return Object.keys(t)
        }
        ,
        n.loadedFonts = {},
        n.writingSystemCharacterRanges = {
            latin: [[0, 127], [128, 255], [256, 383], [384, 591], [7680, 7935], [9312, 9471], [11360, 11391], [42784, 43007], [64256, 64335], [65104, 65135]],
            indic: [[2304, 2431], [43232, 43263]]
        },
        a.Lang = n
    }
    .call(this, s(1))
}
, , function(e, t, n) {
    "use strict";
    function i(e) {
        this.tool = null,
        this.subtool = null,
        this.config = null,
        Object.assign(this, e)
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.Config = void 0,
    i.prototype.getConfig = function(e) {
        return (this.subtool in this.config && e in this.config[this.subtool] ? this.config[this.subtool] : this.tool in this.config && e in this.config[this.tool] ? this.config[this.tool] : this.config.default)[e]
    }
    ,
    t.Config = i
}
, function(e, t) {
    var n, i, e = e.exports = {};
    function r() {
        throw new Error("setTimeout has not been defined")
    }
    function o() {
        throw new Error("clearTimeout has not been defined")
    }
    try {
        n = "function" == typeof setTimeout ? setTimeout : r
    } catch (e) {
        n = r
    }
    try {
        i = "function" == typeof clearTimeout ? clearTimeout : o
    } catch (e) {
        i = o
    }
    function a(t) {
        if (n === setTimeout)
            return setTimeout(t, 0);
        if ((n === r || !n) && setTimeout)
            return (n = setTimeout)(t, 0);
        try {
            return n(t, 0)
        } catch (e) {
            try {
                return n.call(null, t, 0)
            } catch (e) {
                return n.call(this, t, 0)
            }
        }
    }
    var s, c = [], u = !1, l = -1;
    function d() {
        u && s && (u = !1,
        s.length ? c = s.concat(c) : l = -1,
        c.length) && f()
    }
    function f() {
        if (!u) {
            for (var e = a(d), t = (u = !0,
            c.length); t; ) {
                for (s = c,
                c = []; ++l < t; )
                    s && s[l].run();
                l = -1,
                t = c.length
            }
            s = null,
            u = !1,
            !function(t) {
                if (i === clearTimeout)
                    return clearTimeout(t);
                if ((i === o || !i) && clearTimeout)
                    return (i = clearTimeout)(t);
                try {
                    i(t)
                } catch (e) {
                    try {
                        return i.call(null, t)
                    } catch (e) {
                        return i.call(this, t)
                    }
                }
            }(e)
        }
    }
    function p(e, t) {
        this.fun = e,
        this.array = t
    }
    function h() {}
    e.nextTick = function(e) {
        var t = new Array(arguments.length - 1);
        if (1 < arguments.length)
            for (var n = 1; n < arguments.length; n++)
                t[n - 1] = arguments[n];
        c.push(new p(e,t)),
        1 !== c.length || u || a(f)
    }
    ,
    p.prototype.run = function() {
        this.fun.apply(null, this.array)
    }
    ,
    e.title = "browser",
    e.browser = !0,
    e.env = {},
    e.argv = [],
    e.version = "",
    e.versions = {},
    e.on = h,
    e.addListener = h,
    e.once = h,
    e.off = h,
    e.removeListener = h,
    e.removeAllListeners = h,
    e.emit = h,
    e.prependListener = h,
    e.prependOnceListener = h,
    e.listeners = function(e) {
        return []
    }
    ,
    e.binding = function(e) {
        throw new Error("process.binding is not supported")
    }
    ,
    e.cwd = function() {
        return "/"
    }
    ,
    e.chdir = function(e) {
        throw new Error("process.chdir is not supported")
    }
    ,
    e.umask = function() {
        return 0
    }
}
, function(e, n, i) {
    "use strict";
    !function(t) {
        Object.defineProperty(n, "__esModule", {
            value: !0
        }),
        n.SocialAuthPopup = void 0;
        var o = i(8)
          , e = i(25)
          , a = i(57);
        function l() {
            var t = this;
            this.eventEmitter = new e.ILoveEventEmitter,
            this.dispatchEvent = function(e) {
                return t.eventEmitter.dispatchEvent(e)
            }
        }
        l.open = function(e, t, n) {
            void 0 === t && (t = {});
            function s() {
                window.ilove_socialAuthPopupStatus;
                var e = window.ilove_socialAuthPopupNewUser;
                window.ilove_socialAuthPopupOpened = !1,
                window.ilove_socialAuthPopupStatus = void 0,
                window.ilove_socialAuthPopupNewUser = void 0,
                c.popupInterval = null,
                c.onPopupClosed(e, n),
                c.popup = null
            }
            var c = l.instance
              , t = (c.popup && (clearInterval(c.popupInterval),
            c.popupInterval = null,
            c.popup.close(),
            c.popup = null),
            c.mergeWindowFeatureProps(t, !0))
              , e = "/auth/auth?authclient=" + String(e)
              , u = (c.popup = window.open(e, "social_auth_popup", t),
            c.popup);
            window.ilove_socialAuthPopupStatus = void 0,
            window.ilove_socialAuthPopupOpened = !0;
            return new Promise(function(o, a) {
                c.popupInterval = setInterval(function() {
                    var e, t = c.popup && !c.popup.closed, n = !1;
                    try {
                        var i = c.popup.location.hostname
                          , r = null !== c.popup.location.href.match("social-login-redirect")
                          , n = i === window.location.hostname && !r
                    } catch (e) {}
                    t && u === c.popup && !n || (clearInterval(c.popupInterval),
                    n ? e = setInterval(function() {
                        c.popup.addEventListener && (clearInterval(e),
                        c.popup.addEventListener("DOMContentLoaded", function() {
                            var e = null == (e = null == (e = c.popup) ? void 0 : e.document) ? void 0 : e.body
                              , e = (e.style.display = "none",
                            Array.from(e.querySelectorAll(".flash")).map(function(e) {
                                return e.innerText
                            }));
                            c.popup.close(),
                            s(),
                            a({
                                errors: e
                            })
                        }))
                    }) : (s(),
                    o({})))
                })
            }
            )
        }
        ,
        l.focusWindow = function() {
            var e;
            null != (e = l.instance.popup) && e.focus()
        }
        ,
        l.closeWindow = function() {
            var e;
            null != (e = l.instance.popup) && e.close()
        }
        ,
        l.prototype.onPopupClosed = function(n, e) {
            var i = this
              , r = null != (e = null == e ? void 0 : e.getAttribute(l.runningFromAttr)) ? e : "auth";
            n && a.UserAuth.sendGA_registered(r),
            t.get("/login").done(function(e) {
                i.userAuth = new a.UserAuth({
                    runningFrom: r
                }),
                i.userAuth.loginSuccess(e);
                var e = {
                    socialAuth_isNewUser: n
                }
                  , t = new CustomEvent("userAuth",{
                    detail: e
                });
                window.dispatchEvent(t),
                i.dispatchEvent(new o.IloveEvent("auth:success",e))
            }).fail(function(e, t, n) {})
        }
        ,
        Object.defineProperty(l, "instance", {
            get: function() {
                return window.ilove_socialAuthPopupInstance || (window.ilove_socialAuthPopupInstance = new l),
                window.ilove_socialAuthPopupInstance
            },
            enumerable: !1,
            configurable: !0
        }),
        l.prototype.mergeWindowFeatureProps = function(e, t) {
            void 0 === t && (t = !1);
            var n = Object.assign({
                resizable: "yes",
                scrollbars: "no",
                toolbar: "no",
                menubar: "no",
                location: "no",
                directories: "no",
                status: "yes",
                width: 450,
                height: 380,
                left: null,
                top: null
            }, e);
            if (n.left = (window.innerWidth - n.width) / 2,
            n.top = (window.innerHeight - n.height) / 2,
            t) {
                var i, r = [];
                for (i in n)
                    n.hasOwnProperty(i) && r.push(i + "=" + n[i]);
                return r.join(",")
            }
            return n
        }
        ,
        l.runningFromAttr = "data-running-from",
        l.addEventListener = function(e, t) {
            return l.instance.eventEmitter.addEventListener(e, t)
        }
        ,
        n.SocialAuthPopup = l
    }
    .call(this, i(1))
}
, function(e, s, c) {
    "use strict";
    !function(e) {
        c.d(s, "a", function() {
            return a
        });
        var t = c(3)
          , n = c(39)
          , i = {
            nowSeconds: function() {
                return Date.now() / 1e3
            }
        };
        var r = (Object(n.b)() ? function() {
            try {
                return Object(n.a)(e, "perf_hooks").performance
            } catch (e) {}
        }
        : function() {
            var e = Object(t.e)().performance;
            if (e && e.now)
                return {
                    now: function() {
                        return e.now()
                    },
                    timeOrigin: Date.now() - e.now()
                }
        }
        )()
          , o = void 0 === r ? i : {
            nowSeconds: function() {
                return (r.timeOrigin + r.now()) / 1e3
            }
        }
          , a = i.nowSeconds.bind(i);
        o.nowSeconds.bind(o),
        function() {
            var e = Object(t.e)().performance;
            if (e)
                e.timeOrigin || e.timing && e.timing.navigationStart || Date.now()
        }()
    }
    .call(this, c(67)(e))
}
, function(e, t, n) {
    "use strict";
    n.d(t, "a", function() {
        return i
    });
    var c = n(0)
      , u = n(20)
      , l = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+))?@)([\w.-]+)(?::(\d+))?\/(.+)/
      , d = "Invalid Dsn"
      , i = (r.prototype.toString = function(e) {
        var t = this.host
          , n = this.path
          , i = this.pass
          , r = this.port
          , o = this.projectId;
        return this.protocol + "://" + this.user + ((e = void 0 === e ? !1 : e) && i ? ":" + i : "") + "@" + t + (r ? ":" + r : "") + "/" + (n && n + "/") + o
    }
    ,
    r.prototype._fromString = function(e) {
        e = l.exec(e);
        if (!e)
            throw new u.a(d);
        var e = Object(c.c)(e.slice(1), 6)
          , t = e[0]
          , n = e[1]
          , i = e[2]
          , i = void 0 === i ? "" : i
          , r = e[3]
          , o = e[4]
          , o = void 0 === o ? "" : o
          , a = ""
          , e = e[5]
          , s = e.split("/");
        1 < s.length && (a = s.slice(0, -1).join("/"),
        e = s.pop()),
        e && (s = e.match(/^\d+/)) && (e = s[0]),
        this._fromComponents({
            host: r,
            pass: i,
            path: a,
            projectId: e,
            port: o,
            protocol: t,
            user: n
        })
    }
    ,
    r.prototype._fromComponents = function(e) {
        this.protocol = e.protocol,
        this.user = e.user,
        this.pass = e.pass || "",
        this.host = e.host,
        this.port = e.port || "",
        this.path = e.path || "",
        this.projectId = e.projectId
    }
    ,
    r.prototype._validate = function() {
        var t = this;
        if (["protocol", "user", "host", "projectId"].forEach(function(e) {
            if (!t[e])
                throw new u.a(d + ": " + e + " missing")
        }),
        !this.projectId.match(/^\d+$/))
            throw new u.a(d + ": Invalid projectId " + this.projectId);
        if ("http" !== this.protocol && "https" !== this.protocol)
            throw new u.a(d + ": Invalid protocol " + this.protocol);
        if (this.port && isNaN(parseInt(this.port, 10)))
            throw new u.a(d + ": Invalid port " + this.port)
    }
    ,
    r);
    function r(e) {
        "string" == typeof e ? this._fromString(e) : this._fromComponents(e),
        this._validate()
    }
}
, function(e, t, n) {
    !function(n) {
        var e;
        String.prototype.ucFirst = function() {
            return this.charAt(0).toUpperCase() + this.slice(1)
        }
        ,
        String.prototype.camelCase = function() {
            return this.replace(/-([a-z])/gi, function(e, t) {
                return t.toUpperCase()
            })
        }
        ,
        n.fn.exchangePositionWith = function(e) {
            var e = n(e)
              , t = n("<span>").hide();
            this.before(t),
            e.before(this),
            t.replaceWith(e)
        }
        ,
        Array.prototype.move = function(e, t) {
            if (t >= this.length)
                for (var n = t - this.length; 1 + n--; )
                    this.push(void 0);
            return this.splice(t, 0, this.splice(e, 1)[0]),
            this
        }
        ,
        String.prototype.trunc = function(e) {
            return this.substr(0, e - 1) + (this.length > e ? "&hellip;" : "")
        }
        ,
        String.prototype.trim || (e = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        String.prototype.trim = function() {
            return this.replace(e, "")
        }
        ),
        String.prototype.ltrim || (String.prototype.ltrim = function() {
            return this.replace(/^\s+/g, "")
        }
        )
    }
    .call(this, n(1))
}
, function(e) {
    e.exports = JSON.parse('{"development":{"service":"https://servicedev.ilovepdf.com","service_subdomain":"servicedev","web_prefix":"dev","api_sufix":"dev","stripe_key":"pk_test_3QB411Rie7QKjMhfSA0oiEOx","paypal_env":"sandbox","paypal_sandbox_key":"AZ1YHzR1wxJRRmfpqDHyoTwxfOwxB3UTlewVDk-1o6iZQX9SOCVHUpurugviVCowIPGCQ-SsTfbN8ubr","paypal_production_key":"AZRtaJu6iBHsygDFp5OMdCQabjEStco4pfXUdP1SnMGLnpLQdl84xBjXYIMyqY-6pyVKAj-muy5ZeMpv"},"staging":{"service":"https://servicestaging.ilovepdf.com","service_subdomain":"servicestaging","web_prefix":"staging","api_sufix":"dev","stripe_key":"pk_test_3QB411Rie7QKjMhfSA0oiEOx","stripe_key_api":"pk_test_mDCbsVuNmGS4QIePyxrnLexu","paypal_env":"sandbox","paypal_sandbox_key":"AZ1YHzR1wxJRRmfpqDHyoTwxfOwxB3UTlewVDk-1o6iZQX9SOCVHUpurugviVCowIPGCQ-SsTfbN8ubr","paypal_production_key":"AZRtaJu6iBHsygDFp5OMdCQabjEStco4pfXUdP1SnMGLnpLQdl84xBjXYIMyqY-6pyVKAj-muy5ZeMpv"},"production":{"service":"https://service.ilovepdf.com","service_subdomain":"service","web_prefix":"www","api_sufix":"","stripe_key":"pk_live_515AzAgBqa3pLeb3yKIZljNwrbjfrFpMsuvoEEZncp68ao0mQUKZgEY3Ddfh3JUMH4tIKBuFDsLt9Ot29l3d3KIey00O1gzlSiu","stripe_key_api":"pk_live_epWBEsOopGb3Oo75Y6YzAbTP","paypal_env":"production","paypal_sandbox_key":"AZ1YHzR1wxJRRmfpqDHyoTwxfOwxB3UTlewVDk-1o6iZQX9SOCVHUpurugviVCowIPGCQ-SsTfbN8ubr","paypal_production_key":"AZRtaJu6iBHsygDFp5OMdCQabjEStco4pfXUdP1SnMGLnpLQdl84xBjXYIMyqY-6pyVKAj-muy5ZeMpv"}}')
}
, function(e, t, n) {
    "use strict";
    function i() {
        this._cache = {}
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.Cache = void 0,
    i.prototype.existsEntry = function(e) {
        return "template_" + e in this._cache
    }
    ,
    i.prototype.setEntry = function(e, t) {
        return this._cache[e] = t
    }
    ,
    i.prototype.getEntry = function(e) {
        return this._cache[e]
    }
    ,
    i.prototype.clearEntry = function(e) {
        delete this._cache[e]
    }
    ,
    t.Cache = i
}
, function(e, h, m) {
    "use strict";
    !function(u) {
        var l, i = this && this.__createBinding || (Object.create ? function(e, t, n, i) {
            void 0 === i && (i = n),
            Object.defineProperty(e, i, {
                enumerable: !0,
                get: function() {
                    return t[n]
                }
            })
        }
        : function(e, t, n, i) {
            e[i = void 0 === i ? n : i] = t[n]
        }
        ), r = this && this.__setModuleDefault || (Object.create ? function(e, t) {
            Object.defineProperty(e, "default", {
                enumerable: !0,
                value: t
            })
        }
        : function(e, t) {
            e.default = t
        }
        ), e = this && this.__importStar || function(e) {
            if (e && e.__esModule)
                return e;
            var t = {};
            if (null != e)
                for (var n in e)
                    "default" !== n && Object.hasOwnProperty.call(e, n) && i(t, e, n);
            return r(t, e),
            t
        }
        , t = this && this.__awaiter || function(e, a, s, c) {
            return new (s = s || Promise)(function(n, t) {
                function i(e) {
                    try {
                        o(c.next(e))
                    } catch (e) {
                        t(e)
                    }
                }
                function r(e) {
                    try {
                        o(c.throw(e))
                    } catch (e) {
                        t(e)
                    }
                }
                function o(e) {
                    var t;
                    e.done ? n(e.value) : ((t = e.value)instanceof s ? t : new s(function(e) {
                        e(t)
                    }
                    )).then(i, r)
                }
                o((c = c.apply(e, a || [])).next())
            }
            )
        }
        , d = this && this.__generator || function(i, r) {
            var o, a, s, c = {
                label: 0,
                sent: function() {
                    if (1 & s[0])
                        throw s[1];
                    return s[1]
                },
                trys: [],
                ops: []
            }, e = {
                next: t(0),
                throw: t(1),
                return: t(2)
            };
            return "function" == typeof Symbol && (e[Symbol.iterator] = function() {
                return this
            }
            ),
            e;
            function t(n) {
                return function(e) {
                    var t = [n, e];
                    if (o)
                        throw new TypeError("Generator is already executing.");
                    for (; c; )
                        try {
                            if (o = 1,
                            a && (s = 2 & t[0] ? a.return : t[0] ? a.throw || ((s = a.return) && s.call(a),
                            0) : a.next) && !(s = s.call(a, t[1])).done)
                                return s;
                            switch (a = 0,
                            (t = s ? [2 & t[0], s.value] : t)[0]) {
                            case 0:
                            case 1:
                                s = t;
                                break;
                            case 4:
                                return c.label++,
                                {
                                    value: t[1],
                                    done: !1
                                };
                            case 5:
                                c.label++,
                                a = t[1],
                                t = [0];
                                continue;
                            case 7:
                                t = c.ops.pop(),
                                c.trys.pop();
                                continue;
                            default:
                                if (!(s = 0 < (s = c.trys).length && s[s.length - 1]) && (6 === t[0] || 2 === t[0])) {
                                    c = 0;
                                    continue
                                }
                                if (3 === t[0] && (!s || t[1] > s[0] && t[1] < s[3]))
                                    c.label = t[1];
                                else if (6 === t[0] && c.label < s[1])
                                    c.label = s[1],
                                    s = t;
                                else {
                                    if (!(s && c.label < s[2])) {
                                        s[2] && c.ops.pop(),
                                        c.trys.pop();
                                        continue
                                    }
                                    c.label = s[2],
                                    c.ops.push(t)
                                }
                            }
                            t = r.call(i, c)
                        } catch (e) {
                            t = [6, e],
                            a = 0
                        } finally {
                            o = s = 0
                        }
                    if (5 & t[0])
                        throw t[1];
                    return {
                        value: t[0] ? t[1] : void 0,
                        done: !0
                    }
                }
            }
        }
        , n = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        , o = (Object.defineProperty(h, "__esModule", {
            value: !0
        }),
        h.StripeService = void 0,
        e(m(30))), e = m(45), a = m(110), s = m(25), c = m(8), f = n(m(111)), n = ((n = l = l || {}).CONFIRM_3DSECURE_PAYMENT = "/stripe/confirm-payment",
        n.EXECUTE_PAYMENT = "/stripe/execute",
        n.BUY_PACKAGE = "/stripe/buy",
        n.UPDATE_CARD = "/stripe/update-card",
        p.prototype.updateCard = function(s) {
            return t(this, void 0, void 0, function() {
                var t, n, i, r, o, a;
                return d(this, function(e) {
                    switch (e.label) {
                    case 0:
                        return [4, this.getPaymentCardToken(s)];
                    case 1:
                        return t = e.sent(),
                        t = t.id,
                        o = u.post(l.UPDATE_CARD, {
                            token: t
                        }).promise(),
                        r = (i = JSON).parse,
                        [4, o.promise()];
                    case 2:
                        return (n = r.apply(i, [e.sent()]),
                        o = {
                            type: "update",
                            notifyParams: {
                                token: t
                            }
                        },
                        this.needs3DSecure(n)) ? [4, this._resolve3DSecure(n, o)] : [3, 4];
                    case 3:
                        return a = e.sent(),
                        [3, 5];
                    case 4:
                        a = n,
                        e.label = 5;
                    case 5:
                        return [2, a]
                    }
                })
            })
        }
        ,
        p.prototype.setPaymentVia = function(e) {
            this._paymentVia = e
        }
        ,
        p.prototype.paySubscription = function(c) {
            return t(this, void 0, void 0, function() {
                var t, n, i, r, o, a, s;
                return d(this, function(e) {
                    switch (e.label) {
                    case 0:
                        return t = {
                            interval: c.subscriptionInterval,
                            users: c.numUsers,
                            signatures: c.numDigitalSignatures,
                            token: void 0,
                            dtr: c.disableTrial,
                            verifyCode: "",
                            code: c.couponCode
                        },
                        this.captcha || (this.captcha = new f.default(document.body)),
                        [4, this.captcha.execute()];
                    case 1:
                        return n = e.sent(),
                        t.verifyCode = n,
                        [4, this._setupPaymentVia(t, c.paymentVia)];
                    case 2:
                        return e.sent(),
                        n = u.post(l.EXECUTE_PAYMENT, t),
                        o = (r = JSON).parse,
                        [4, n.promise()];
                    case 3:
                        return (i = o.apply(r, [e.sent()]),
                        a = {
                            type: "subscription",
                            notifyParams: t
                        },
                        this.needs3DSecure(i)) ? [4, this._resolve3DSecure(i, a)] : [3, 5];
                    case 4:
                        return s = e.sent(),
                        [3, 6];
                    case 5:
                        s = i,
                        e.label = 6;
                    case 6:
                        return [2, s]
                    }
                })
            })
        }
        ,
        p.prototype.payPackage = function(c) {
            return t(this, void 0, void 0, function() {
                var t, n, i, r, o, a, s;
                return d(this, function(e) {
                    switch (e.label) {
                    case 0:
                        return t = {
                            package: c.packageName,
                            quantity: c.quantity,
                            token: void 0,
                            dtr: c.disableTrial,
                            verifyCode: ""
                        },
                        this.captcha || (this.captcha = new f.default(document.body)),
                        [4, this.captcha.execute()];
                    case 1:
                        return n = e.sent(),
                        t.verifyCode = n,
                        [4, this._setupPaymentVia(t, c.paymentVia)];
                    case 2:
                        return e.sent(),
                        n = u.post(l.BUY_PACKAGE, t),
                        o = (r = JSON).parse,
                        [4, n.promise()];
                    case 3:
                        return (i = o.apply(r, [e.sent()]),
                        a = {
                            type: "package",
                            notifyParams: t
                        },
                        this.needs3DSecure(i)) ? [4, this._resolve3DSecure(i, a)] : [3, 5];
                    case 4:
                        return s = e.sent(),
                        [3, 6];
                    case 5:
                        s = i,
                        e.label = 6;
                    case 6:
                        return [2, s]
                    }
                })
            })
        }
        ,
        p.prototype._setupPaymentVia = function(i, r) {
            return t(this, void 0, void 0, function() {
                var t, n;
                return d(this, function(e) {
                    switch (e.label) {
                    case 0:
                        switch (n = r.type,
                        r.type) {
                        case "stripeElement":
                            return [3, 1];
                        case "stripeElementUpdateCard":
                            return [3, 3];
                        case "paymentMethod":
                            return [3, 5]
                        }
                        return [3, 6];
                    case 1:
                        return [4, this.getPaymentCardToken(r.cardElement)];
                    case 2:
                        return t = e.sent(),
                        i.token = t.id,
                        [3, 7];
                    case 3:
                        return [4, this.getPaymentCardToken(r.cardElement)];
                    case 4:
                        return t = e.sent(),
                        i.token = t.id,
                        i.updatecard = !0,
                        [3, 7];
                    case 5:
                        return r.info,
                        [3, 7];
                    case 6:
                        throw "Unknown paymentVia type '" + n + "'";
                    case 7:
                        return [2]
                    }
                })
            })
        }
        ,
        p.prototype._resolve3DSecure = function(r, o) {
            return t(this, void 0, void 0, function() {
                var t, n, i;
                return d(this, function(e) {
                    switch (e.label) {
                    case 0:
                        return this.needs3DSecure(r) ? (t = this.extractIntentInfo(r),
                        [4, this.show3DSecureScreenToUser(t)]) : [2, r];
                    case 1:
                        switch (n = e.sent(),
                        t.intentType) {
                        case "setup_intent":
                            return [3, 2];
                        case "payment_intent":
                            return [3, 3]
                        }
                        return [3, 5];
                    case 2:
                        return [2, r];
                    case 3:
                        return i = n.paymentIntent.id,
                        [4, this.confirmPayment3DSecure(i, o)];
                    case 4:
                        return [2, r = e.sent()];
                    case 5:
                        throw "Unknown intent type " + t.intentType
                    }
                })
            })
        }
        ,
        p.prototype.needs3DSecure = function(e) {
            return !(!e || !e.user) && ("payment_intent"in e.user || "setup_intent"in e.user)
        }
        ,
        p.prototype.extractIntentInfo = function(e) {
            var t;
            if (e.user.payment_intent)
                t = "payment_intent";
            else {
                if (!e.user.setup_intent)
                    throw "Unknown IntentType";
                t = "setup_intent"
            }
            return {
                intentType: t,
                intentSecret: "payment_intent" === t ? e.user.payment_intent : e.user.setup_intent
            }
        }
        ,
        p.prototype.confirmPayment3DSecure = function(r, o) {
            return t(this, void 0, void 0, function() {
                var t, n, i;
                return d(this, function(e) {
                    switch (e.label) {
                    case 0:
                        return t = Object.assign({}, {
                            payment_intent_id: r
                        }, o, o.notifyParams),
                        t = u.post(l.CONFIRM_3DSECURE_PAYMENT, t),
                        i = (n = JSON).parse,
                        [4, t.promise()];
                    case 1:
                        return [2, i.apply(n, [e.sent()])]
                    }
                })
            })
        }
        ,
        p.prototype.show3DSecureScreenToUser = function(i) {
            return t(this, void 0, void 0, function() {
                var t, n;
                return d(this, function(e) {
                    switch (e.label) {
                    case 0:
                        return [4, this.stripe];
                    case 1:
                        switch (t = e.sent(),
                        i.intentType) {
                        case "setup_intent":
                            return [3, 2];
                        case "payment_intent":
                            return [3, 4]
                        }
                        return [3, 6];
                    case 2:
                        return [4, t.confirmCardSetup(i.intentSecret)];
                    case 3:
                        return n = e.sent(),
                        [3, 7];
                    case 4:
                        return [4, t.confirmCardPayment(i.intentSecret)];
                    case 5:
                        return n = e.sent(),
                        [3, 7];
                    case 6:
                        throw "Unknown secretType " + i.intentType;
                    case 7:
                        if ("error"in n && n.error)
                            throw n;
                        return [2, n]
                    }
                })
            })
        }
        ,
        p.prototype.getPaymentCardToken = function(i) {
            return t(this, void 0, void 0, function() {
                var t, n;
                return d(this, function(e) {
                    switch (e.label) {
                    case 0:
                        return [4, this.stripe];
                    case 1:
                        t = e.sent(),
                        e.label = 2;
                    case 2:
                        return e.trys.push([2, 4, , 5]),
                        [4, t.createToken(i)];
                    case 3:
                        return n = e.sent(),
                        [3, 5];
                    case 4:
                        throw e.sent();
                    case 5:
                        if (n.error)
                            throw this.view.notifyCardErrorMsg(n.error.message),
                            n;
                        return [2, n.token]
                    }
                })
            })
        }
        ,
        Object.defineProperty(p.prototype, "stripe", {
            get: function() {
                var n = this;
                return this._stripe ? Promise.resolve(this._stripe) : new Promise(function(t, e) {
                    n.createStripeInstance().then(function(e) {
                        n._stripe = e,
                        t(n._stripe)
                    })
                }
                )
            },
            enumerable: !1,
            configurable: !0
        }),
        p.prototype.loadStripeLibrary = function() {
            return t(this, void 0, void 0, function() {
                var i = this;
                return d(this, function(e) {
                    switch (e.label) {
                    case 0:
                        return this.isStripeLibLoaded ? (this.captcha || (this.captcha = new f.default(document.body)),
                        [2, window.Stripe]) : [4, new Promise(function(e, t) {
                            o.lazyload(p.stripeLibSrc);
                            var n = window.setInterval(function() {
                                i.isStripeLibLoaded && (clearInterval(n),
                                i.captcha = new f.default(document.body),
                                e(window.Stripe))
                            }, 100)
                        }
                        )];
                    case 1:
                        return [2, e.sent()]
                    }
                })
            })
        }
        ,
        p.prototype.createStripeInstance = function() {
            return t(this, void 0, void 0, function() {
                var t, i, r = this;
                return d(this, function(e) {
                    switch (e.label) {
                    case 0:
                        return [4, this.loadStripeLibrary()];
                    case 1:
                        return t = e.sent(),
                        i = t(p.stripeKey, {
                            locale: window.lang
                        }),
                        this.isStripeInstanceReady(i) ? [2, i] : [4, new Promise(function(e, t) {
                            var n = window.setInterval(function() {
                                r.isStripeInstanceReady(i) && (window.clearInterval(n),
                                e(i))
                            }, 100)
                        }
                        )];
                    case 2:
                        return [2, e.sent()]
                    }
                })
            })
        }
        ,
        p.prototype.isStripeInstanceReady = function(e) {
            return "object" == typeof e
        }
        ,
        Object.defineProperty(p.prototype, "isStripeLibLoaded", {
            get: function() {
                return null !== window.Stripe && "function" == typeof window.Stripe
            },
            enumerable: !1,
            configurable: !0
        }),
        Object.defineProperty(p.prototype, "paymentVia", {
            get: function() {
                return this._paymentVia
            },
            enumerable: !1,
            configurable: !0
        }),
        p.prototype.dispatchEvent = function(e) {
            return this.eventEmitter.dispatchEvent(e)
        }
        ,
        p.prototype.addEventListener = function(e, t) {
            return this.eventEmitter.addEventListener(e, t)
        }
        ,
        p.stripeKey = e.Settings.get("stripe_key"),
        p.stripeLibSrc = "https://js.stripe.com/v3/",
        p);
        function p(e) {
            var t = this;
            void 0 === e && (e = {}),
            this.eventEmitter = new s.ILoveEventEmitter,
            this.view = new a.StripeView(this,{
                onActionButtonClicked: function() {
                    t.dispatchEvent(new c.IloveEvent("View:ActionButtonClicked"))
                }
            })
        }
        h.StripeService = n
    }
    .call(this, m(1))
}
, function(e, t, n) {
    "use strict";
    var r = this && this.__awaiter || function(e, a, s, c) {
        return new (s = s || Promise)(function(n, t) {
            function i(e) {
                try {
                    o(c.next(e))
                } catch (e) {
                    t(e)
                }
            }
            function r(e) {
                try {
                    o(c.throw(e))
                } catch (e) {
                    t(e)
                }
            }
            function o(e) {
                var t;
                e.done ? n(e.value) : ((t = e.value)instanceof s ? t : new s(function(e) {
                    e(t)
                }
                )).then(i, r)
            }
            o((c = c.apply(e, a || [])).next())
        }
        )
    }
      , u = this && this.__generator || function(i, r) {
        var o, a, s, c = {
            label: 0,
            sent: function() {
                if (1 & s[0])
                    throw s[1];
                return s[1]
            },
            trys: [],
            ops: []
        }, e = {
            next: t(0),
            throw: t(1),
            return: t(2)
        };
        return "function" == typeof Symbol && (e[Symbol.iterator] = function() {
            return this
        }
        ),
        e;
        function t(n) {
            return function(e) {
                var t = [n, e];
                if (o)
                    throw new TypeError("Generator is already executing.");
                for (; c; )
                    try {
                        if (o = 1,
                        a && (s = 2 & t[0] ? a.return : t[0] ? a.throw || ((s = a.return) && s.call(a),
                        0) : a.next) && !(s = s.call(a, t[1])).done)
                            return s;
                        switch (a = 0,
                        (t = s ? [2 & t[0], s.value] : t)[0]) {
                        case 0:
                        case 1:
                            s = t;
                            break;
                        case 4:
                            return c.label++,
                            {
                                value: t[1],
                                done: !1
                            };
                        case 5:
                            c.label++,
                            a = t[1],
                            t = [0];
                            continue;
                        case 7:
                            t = c.ops.pop(),
                            c.trys.pop();
                            continue;
                        default:
                            if (!(s = 0 < (s = c.trys).length && s[s.length - 1]) && (6 === t[0] || 2 === t[0])) {
                                c = 0;
                                continue
                            }
                            if (3 === t[0] && (!s || t[1] > s[0] && t[1] < s[3]))
                                c.label = t[1];
                            else if (6 === t[0] && c.label < s[1])
                                c.label = s[1],
                                s = t;
                            else {
                                if (!(s && c.label < s[2])) {
                                    s[2] && c.ops.pop(),
                                    c.trys.pop();
                                    continue
                                }
                                c.label = s[2],
                                c.ops.push(t)
                            }
                        }
                        t = r.call(i, c)
                    } catch (e) {
                        t = [6, e],
                        a = 0
                    } finally {
                        o = s = 0
                    }
                if (5 & t[0])
                    throw t[1];
                return {
                    value: t[0] ? t[1] : void 0,
                    done: !0
                }
            }
        }
    }
      , l = (Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.StripeView = void 0,
    n(61))
      , c = n(7);
    function d(e, t) {
        var r = this;
        this._onKeepPaymentMethodBtnClicked = function(e, t) {
            if ("stripe" !== t.provider)
                throw "Payment method is not from provider Stripe";
            var n = r.currentPaymentMethodView
              , i = r.newPaymentMethodView;
            r.stripeService.setPaymentVia({
                type: "paymentMethod",
                info: t
            }),
            r.payButton.disabled = !1,
            n.style.display = "",
            i.style.display = "none"
        }
        ,
        this._onChangePaymentMethodBtnClicked = function(e, t) {
            var n = r.currentPaymentMethodView
              , i = r.newPaymentMethodView;
            r.stripeService.setPaymentVia({
                type: "stripeElementUpdateCard",
                cardElement: t
            }),
            r.payButton.disabled = !1,
            n.style.display = "none",
            i.style.display = ""
        }
        ,
        this._onPayButtonClicked = function() {
            r.callback_onActionButtonClicked()
        }
        ,
        this._onStripeNewCardChange = function(e) {
            e.error ? r.notifyCardErrorMsg(e.error.message) : r.clearCardErrorMsg(),
            r.payButton.disabled = !1
        }
        ,
        this.stripeService = e,
        this.callback_onActionButtonClicked = t.onActionButtonClicked
    }
    d.prototype.getTranslationText = function(e) {
        var t = this.view.querySelector(".stripe__text-translations");
        if (!t)
            throw "Stripe text translations not found";
        if (e in (t = JSON.parse(t.textContent)))
            return t[e];
        throw "Stripe translation for key " + e + " not found"
    }
    ,
    d.prototype.disableActionButton = function() {
        this.view && (this.payButton.disabled = !1)
    }
    ,
    d.prototype.enableActionButton = function() {
        this.view && (this.payButton.disabled = !1)
    }
    ,
    d.prototype.mount = function(a, s) {
        var c;
        return r(this, void 0, void 0, function() {
            var t, n, i, r, o;
            return u(this, function(e) {
                switch (e.label) {
                case 0:
                    return this.view ? [2, this.view] : [4, l.AjaxTemplate.load(d.TEMPLATE_NAME)];
                case 1:
                    if (t = e.sent(),
                    (o = document.createElement("div")).innerHTML = t,
                    this.view = o,
                    a.appendChild(this.view),
                    t = this.view.querySelector(d.cardMountPointSelector))
                        return n = this.currentPaymentMethodView,
                        i = this.newPaymentMethodView,
                        [4, (r = this).mountCardOn(t)];
                    throw "Mount point for Stripe card not found";
                case 2:
                    return r.card = e.sent(),
                    (o = "currentPaymentMethod"in s && "stripe" === (null == (c = null == s ? void 0 : s.currentPaymentMethod) ? void 0 : c.provider) && s.currentPaymentMethod.last_card) ? i.style.display = "none" : n.style.display = "none",
                    o ? (this.setupViewCurrentPaymentMethod(s.currentPaymentMethod, this.card),
                    this.payButton.disabled = !1,
                    this.stripeService.setPaymentVia({
                        type: "paymentMethod",
                        info: s.currentPaymentMethod
                    })) : this.stripeService.setPaymentVia({
                        type: "stripeElement",
                        cardElement: this.card
                    }),
                    this.payButton.innerHTML = s.paymentButtonText,
                    this.payButton.addEventListener("click", this._onPayButtonClicked),
                    [2, this.view]
                }
            })
        })
    }
    ,
    d.prototype.setupViewCurrentPaymentMethod = function(t, n) {
        var i = this;
        if ("stripe" !== t.provider)
            throw "Payment method is not from provider Stripe";
        var e = this.currentPaymentMethodView
          , r = this.newPaymentMethodView
          , o = e.querySelector(".payment__card-details__text");
        if (!o)
            throw "Stripe - Card Details text not found";
        var a = o.querySelector(".payment__card-details__text__brand")
          , o = o.querySelector(".payment__card-details__text__expires")
          , s = a.innerHTML.replace("${cardBrand}", "<span class='payment__card-brand'>${cardBrand}</span>")
          , a = (a.innerHTML = c.Lang.tr(s, {
            cardBrand: t.brand_card || "",
            cardLast4Digits: t.last_card
        }),
        o.innerHTML = c.Lang.tr(o.innerHTML, {
            expMonthCard: t.exp_month_card,
            expYearCard: t.exp_year_card
        }),
        e.querySelector(".payment__card-details__change-btn"));
        if (!a)
            throw "Change button for Stripe - CurrentPaymentMethod view not found";
        a.addEventListener("click", function(e) {
            i._onChangePaymentMethodBtnClicked(e, n)
        });
        s = r.querySelector(".payment__card-details__keep-card-btn");
        if (s.style.display = "",
        !s)
            throw "'Keep payment method' button for Stripe not found";
        s.innerHTML = c.Lang.tr(s.innerHTML, {
            cardBrand: t.brand_card || "",
            cardLast4Digits: t.last_card
        }),
        s.addEventListener("click", function(e) {
            i._onKeepPaymentMethodBtnClicked(e, t)
        })
    }
    ,
    Object.defineProperty(d.prototype, "currentPaymentMethodView", {
        get: function() {
            var e = this.view.querySelector(".payment__stripe-view__current-payment-method-view");
            if (e)
                return e;
            throw "Stripe - Current Payment Method view not found"
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(d.prototype, "newPaymentMethodView", {
        get: function() {
            var e = this.view.querySelector(".payment__stripe-view__new-payment-method-view");
            if (e)
                return e;
            throw "Stripe - New Payment Method view not found"
        },
        enumerable: !1,
        configurable: !0
    }),
    d.prototype.mountCardOn = function(i) {
        return r(this, void 0, void 0, function() {
            var t, n;
            return u(this, function(e) {
                switch (e.label) {
                case 0:
                    return [4, this.stripeService.stripe];
                case 1:
                    return n = e.sent().elements(),
                    t = {
                        base: {
                            color: "#32325d",
                            lineHeight: "24px",
                            fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
                            fontSmoothing: "antialiased",
                            fontSize: "16px",
                            "::placeholder": {
                                color: "#aab7c4"
                            }
                        },
                        invalid: {
                            color: "#fa755a",
                            iconColor: "#fa755a"
                        }
                    },
                    (n = n.create("card", {
                        style: t,
                        hidePostalCode: !0
                    })).mount(i),
                    n.addEventListener("change", this._onStripeNewCardChange),
                    [2, n]
                }
            })
        })
    }
    ,
    d.prototype.notifyCardErrorMsg = function(t) {
        this.cardErrorMsgDom.forEach(function(e) {
            e.classList.remove("payment__card-error--hidden"),
            e.textContent = t
        })
    }
    ,
    d.prototype.clearCardErrorMsg = function() {
        this.cardErrorMsgDom.forEach(function(e) {
            e.classList.add("payment__card-error--hidden"),
            e.innerHTML = "&nbsp;"
        })
    }
    ,
    Object.defineProperty(d.prototype, "payButton", {
        get: function() {
            var e = this.view.querySelector(".payment__pay-btn");
            if (e)
                return e;
            throw "Submit button not found"
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(d.prototype, "cardErrorMsgDom", {
        get: function() {
            var e = Array.from(this.view.querySelectorAll(".payment__card-error"));
            if (0 === e.length)
                throw "Card Error Msg DOM not found";
            return e
        },
        enumerable: !1,
        configurable: !0
    }),
    d.TEMPLATE_NAME = "stripe",
    d.cardMountPointSelector = ".payment__stripe-view__card-binding",
    t.StripeView = d
}
, function(e, t, n) {
    "use strict";
    var i = this && this.__createBinding || (Object.create ? function(e, t, n, i) {
        void 0 === i && (i = n),
        Object.defineProperty(e, i, {
            enumerable: !0,
            get: function() {
                return t[n]
            }
        })
    }
    : function(e, t, n, i) {
        e[i = void 0 === i ? n : i] = t[n]
    }
    )
      , r = this && this.__setModuleDefault || (Object.create ? function(e, t) {
        Object.defineProperty(e, "default", {
            enumerable: !0,
            value: t
        })
    }
    : function(e, t) {
        e.default = t
    }
    )
      , o = this && this.__importStar || function(e) {
        if (e && e.__esModule)
            return e;
        var t = {};
        if (null != e)
            for (var n in e)
                "default" !== n && Object.hasOwnProperty.call(e, n) && i(t, e, n);
        return r(t, e),
        t
    }
      , a = (Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    o(n(30)))
      , s = n(16)
      , c = n(17)
      , u = "6LfLe9sbAAAAAO7MEsSovv3Na0tNlRReITiueEu8";
    function l(e, t) {
        var n = this;
        void 0 === t && (t = null),
        this.onCaptchaValue = function(e) {
            n.value = e,
            n.onCaptchaExecuted && n.onCaptchaExecuted(n.value)
        }
        ,
        0 != this.captchaNeeded() && (t && (this.onCaptchaExecuted = t),
        this.elementRoot = e,
        this.appendToElement(),
        this.loadCaptchaJs())
    }
    l.prototype.loadCaptchaJs = function() {
        var n = this
          , i = this;
        return new Promise(function(e, t) {
            if (window.grecaptcha)
                return n.grecaptcha = window.grecaptcha,
                e();
            a.lazyload("https://www.google.com/recaptcha/api.js?render=" + u),
            n.captchaLoadInterval = window.setInterval(function() {
                null !== window.grecaptcha && "object" == typeof window.grecaptcha && (window.grecaptcha.ready(function() {
                    return n.grecaptcha = window.grecaptcha,
                    e()
                }),
                clearInterval(i.captchaLoadInterval))
            }, 100)
        }
        )
    }
    ,
    l.prototype.appendToElement = function() {
        var e;
        document.getElementById("recaptcha") || ((e = document.createElement("div")).setAttribute("id", "recaptcha"),
        e.setAttribute("class", "g-recaptcha"),
        e.setAttribute("data-sitekey", u),
        e.setAttribute("data-callback", "onCaptchaValue"),
        e.setAttribute("data-size", "invisible"),
        this.elementRoot.appendChild(e),
        window.onCaptchaValue = this.onCaptchaValue)
    }
    ,
    l.prototype._execute = function(e) {
        return void 0 === e && (e = null),
        self.grecaptcha.execute()
    }
    ,
    l.prototype.execute = function(e) {
        var n = this;
        return void 0 === e && (e = null),
        0 == this.captchaNeeded() ? (this.value = c.Tools.randomId(),
        Promise.resolve(this.value)) : (e && (this.onCaptchaExecuted = e),
        new Promise(function(t, e) {
            n.captchaInterval = window.setInterval(function() {
                n.grecaptcha && (clearInterval(n.captchaInterval),
                n._execute().then(function(e) {
                    t(e)
                }))
            }, 100)
        }
        ))
    }
    ,
    l.prototype.captchaNeeded = function() {
        var e = s.UserModel.get();
        return e && 1 == e.sus_rbt
    }
    ,
    t.default = l
}
, function(e, t, n) {
    "use strict";
    var s, c = this && this.__assign || function() {
        return (c = Object.assign || function(e) {
            for (var t, n = 1, i = arguments.length; n < i; n++)
                for (var r in t = arguments[n])
                    Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
            return e
        }
        ).apply(this, arguments)
    }
    , i = this && this.__createBinding || (Object.create ? function(e, t, n, i) {
        void 0 === i && (i = n),
        Object.defineProperty(e, i, {
            enumerable: !0,
            get: function() {
                return t[n]
            }
        })
    }
    : function(e, t, n, i) {
        e[i = void 0 === i ? n : i] = t[n]
    }
    ), r = this && this.__setModuleDefault || (Object.create ? function(e, t) {
        Object.defineProperty(e, "default", {
            enumerable: !0,
            value: t
        })
    }
    : function(e, t) {
        e.default = t
    }
    ), o = this && this.__importStar || function(e) {
        if (e && e.__esModule)
            return e;
        var t = {};
        if (null != e)
            for (var n in e)
                "default" !== n && Object.hasOwnProperty.call(e, n) && i(t, e, n);
        return r(t, e),
        t
    }
    , a = this && this.__awaiter || function(e, a, s, c) {
        return new (s = s || Promise)(function(n, t) {
            function i(e) {
                try {
                    o(c.next(e))
                } catch (e) {
                    t(e)
                }
            }
            function r(e) {
                try {
                    o(c.throw(e))
                } catch (e) {
                    t(e)
                }
            }
            function o(e) {
                var t;
                e.done ? n(e.value) : ((t = e.value)instanceof s ? t : new s(function(e) {
                    e(t)
                }
                )).then(i, r)
            }
            o((c = c.apply(e, a || [])).next())
        }
        )
    }
    , u = this && this.__generator || function(i, r) {
        var o, a, s, c = {
            label: 0,
            sent: function() {
                if (1 & s[0])
                    throw s[1];
                return s[1]
            },
            trys: [],
            ops: []
        }, e = {
            next: t(0),
            throw: t(1),
            return: t(2)
        };
        return "function" == typeof Symbol && (e[Symbol.iterator] = function() {
            return this
        }
        ),
        e;
        function t(n) {
            return function(e) {
                var t = [n, e];
                if (o)
                    throw new TypeError("Generator is already executing.");
                for (; c; )
                    try {
                        if (o = 1,
                        a && (s = 2 & t[0] ? a.return : t[0] ? a.throw || ((s = a.return) && s.call(a),
                        0) : a.next) && !(s = s.call(a, t[1])).done)
                            return s;
                        switch (a = 0,
                        (t = s ? [2 & t[0], s.value] : t)[0]) {
                        case 0:
                        case 1:
                            s = t;
                            break;
                        case 4:
                            return c.label++,
                            {
                                value: t[1],
                                done: !1
                            };
                        case 5:
                            c.label++,
                            a = t[1],
                            t = [0];
                            continue;
                        case 7:
                            t = c.ops.pop(),
                            c.trys.pop();
                            continue;
                        default:
                            if (!(s = 0 < (s = c.trys).length && s[s.length - 1]) && (6 === t[0] || 2 === t[0])) {
                                c = 0;
                                continue
                            }
                            if (3 === t[0] && (!s || t[1] > s[0] && t[1] < s[3]))
                                c.label = t[1];
                            else if (6 === t[0] && c.label < s[1])
                                c.label = s[1],
                                s = t;
                            else {
                                if (!(s && c.label < s[2])) {
                                    s[2] && c.ops.pop(),
                                    c.trys.pop();
                                    continue
                                }
                                c.label = s[2],
                                c.ops.push(t)
                            }
                        }
                        t = r.call(i, c)
                    } catch (e) {
                        t = [6, e],
                        a = 0
                    } finally {
                        o = s = 0
                    }
                if (5 & t[0])
                    throw t[1];
                return {
                    value: t[0] ? t[1] : void 0,
                    done: !0
                }
            }
        }
    }
    , l = (Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.PaypalService = void 0,
    o(n(30))), d = o(n(79)), f = n(45), p = n(25), h = n(8), m = n(61), v = n(86), g = o(n(15)), n = ((o = s = s || {}).CREATE_PAYMENT_SUBSC = "/paypal/create",
    o.EXECUTE_PAYMENT_SUBSC = "/paypal/execute",
    o.CREATE_PAYMENT_PKG = "/paypal/createbuy",
    o.EXECUTE_PAYMENT_PKG = "/paypal/executebuy",
    y.prototype.notifyErrorMsg = function(e) {
        this.errorMsgDom.classList.remove("payment__method-error--hidden"),
        this.errorMsgDom.innerHTML = e
    }
    ,
    y.prototype.clearErrorMsg = function() {
        this.errorMsgDom.classList.add("payment__method-error--hidden"),
        this.errorMsgDom.innerHTML = "&nbsp;"
    }
    ,
    y.prototype.getTranslationText = function(e) {
        var t = this.view.querySelector(".paypal__text-translations");
        if (!t)
            throw "Paypal text translations not found";
        if (e in (t = JSON.parse(t.textContent)))
            return t[e];
        throw "Paypal translation for key " + e + " not found"
    }
    ,
    Object.defineProperty(y.prototype, "errorMsgDom", {
        get: function() {
            var e = this.view.querySelector(".payment__method-error");
            if (e)
                return e;
            throw "Missing Paypal Error message DOM not found"
        },
        enumerable: !1,
        configurable: !0
    }),
    y.prototype.mountView = function(r, o) {
        return a(this, void 0, void 0, function() {
            var t, n, i;
            return u(this, function(e) {
                switch (e.label) {
                case 0:
                    return this.view ? [2, this.view] : [4, m.AjaxTemplate.load(y.TEMPLATE_NAME)];
                case 1:
                    if (t = e.sent(),
                    (n = document.createElement("div")).innerHTML = t,
                    this.view = n,
                    r.appendChild(this.view),
                    !(i = this.view.querySelector(y.buttonMountPointSelector)))
                        throw "Mount point for Paypal button not found";
                    switch (o.action.actionName) {
                    case "PaySubscription":
                        this.mountPaySubscription(i, o.action.actionParams);
                        break;
                    case "PayPackage":
                        this.mountPayPackage(i, o.action.actionParams);
                        break;
                    case "UpdateSubscription":
                        this.mountUpdateSubscription(i, o.action.actionParams);
                        break;
                    default:
                        throw "Unknown Paypal action for Paypal mountPoint func"
                    }
                    return [2, this.view]
                }
            })
        })
    }
    ,
    y.prototype.mountPayPackage = function(i, r) {
        return a(this, void 0, void 0, function() {
            var t, n;
            return u(this, function(e) {
                switch (e.label) {
                case 0:
                    return this.packageParams = r,
                    [4, this.loadPaypalLibrary()];
                case 1:
                    return e.sent(),
                    t = this._onPaymentInit_package,
                    n = this._onAuthorize_package,
                    this.mountPaypalButton(i, {
                        payment: t,
                        onAuthorize: n
                    }),
                    [2]
                }
            })
        })
    }
    ,
    y.prototype.mountPaySubscription = function(i, r) {
        return a(this, void 0, void 0, function() {
            var t, n;
            return u(this, function(e) {
                switch (e.label) {
                case 0:
                    return this.subscriptionParams = r,
                    [4, this.loadPaypalLibrary()];
                case 1:
                    return e.sent(),
                    t = this._onPaymentInit_subsc,
                    n = this._onAuthorize_subsc,
                    this.mountPaypalButton(i, {
                        payment: t,
                        onAuthorize: n
                    }),
                    [2]
                }
            })
        })
    }
    ,
    y.prototype.mountUpdateSubscription = function(t, n) {
        return a(this, void 0, void 0, function() {
            return u(this, function(e) {
                return [2, this.mountPaySubscription(t, n)]
            })
        })
    }
    ,
    y.prototype.mountPaypalButton = function(n, i) {
        return a(this, void 0, void 0, function() {
            var t;
            return u(this, function(e) {
                switch (e.label) {
                case 0:
                    return [4, this.loadPaypalLibrary()];
                case 1:
                    return t = e.sent(),
                    n.getAttribute("id") || n.setAttribute("id", v.Tools.randomId()),
                    t.Button.render({
                        env: f.Settings.get("paypal_env"),
                        locale: this.assignedLocale,
                        commit: !0,
                        style: {
                            label: "paypal",
                            size: "medium",
                            shape: "rect",
                            color: "blue",
                            tagline: !1
                        },
                        client: {
                            sandbox: f.Settings.get("paypal_sandbox_key"),
                            production: f.Settings.get("paypal_production_key")
                        },
                        payment: i.payment,
                        onAuthorize: i.onAuthorize,
                        onCancel: this._onCancel
                    }, "#" + n.getAttribute("id")),
                    [2]
                }
            })
        })
    }
    ,
    y.prototype.removeUndefinedValuesFromObject = function(e) {
        var t, n = {};
        for (t in e)
            void 0 === e[t] || (n[t] = e[t]);
        return n
    }
    ,
    y.prototype.loadPaypalLibrary = function() {
        return a(this, void 0, void 0, function() {
            var i = this;
            return u(this, function(e) {
                switch (e.label) {
                case 0:
                    return this.isPaypalLibLoaded ? [2, window.paypal] : [4, new Promise(function(e, t) {
                        l.lazyload(y.paypalLibSrc);
                        var n = window.setInterval(function() {
                            i.isPaypalLibLoaded && (clearInterval(n),
                            e(window.paypal))
                        }, 100)
                    }
                    )];
                case 1:
                    return [2, e.sent()]
                }
            })
        })
    }
    ,
    Object.defineProperty(y.prototype, "paypal", {
        get: function() {
            var n = this;
            return new Promise(function(t, e) {
                n.loadPaypalLibrary().then(function(e) {
                    return t(e)
                })
            }
            )
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(y.prototype, "isPaypalLibLoaded", {
        get: function() {
            return null !== window.paypal && "object" == typeof window.paypal
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(y.prototype, "assignedLocale", {
        get: function() {
            var e = "en_US";
            switch (window.lang) {
            case "en-US":
                e = "en_US";
                break;
            case "es":
                e = "es_ES";
                break;
            case "it":
                e = "it_IT";
                break;
            case "fr":
                e = "fr_FR";
                break;
            case "de":
                e = "de_DE";
                break;
            case "pt":
                e = "pt_BR";
                break;
            case "zh-cn":
                e = "zh_CN";
                break;
            case "id":
                e = "id_ID";
                break;
            case "ja":
                e = "ja_JP";
                break;
            case "nl":
                e = "nl_NL";
                break;
            case "pl":
                e = "pl_PL";
                break;
            case "ru":
                e = "ru_RU";
                break;
            case "sv":
                e = "sv_SE";
                break;
            case "th":
                e = "th_TH";
                break;
            case "zh-tw":
                e = "zh_TW"
            }
            return e
        },
        enumerable: !1,
        configurable: !0
    }),
    y.prototype.dispatchEvent = function(e) {
        return this.eventEmitter.dispatchEvent(e)
    }
    ,
    y.prototype.addEventListener = function(e, t) {
        return this.eventEmitter.addEventListener(e, t)
    }
    ,
    y.paypalLibSrc = "https://www.paypalobjects.com/api/checkout.js",
    y.TEMPLATE_NAME = "paypal",
    y.buttonMountPointSelector = ".payment__paypal-view__button-binding",
    y);
    function y(e) {
        var a = this;
        if (void 0 === e && (e = {}),
        this._onPaymentInit_package = function() {
            a._onPaypalButtonClicked();
            var n = a
              , i = "payPackage"
              , r = a.packageParams;
            return window.paypal.request.post(s.CREATE_PAYMENT_PKG, {
                package: r.packageName(),
                quantity: r.quantity(),
                dtr: r.disableTrial()
            }).then(function(e) {
                return n.dispatchEvent(new h.IloveEvent("onPaymentInited",{
                    action: i,
                    params: r,
                    response: e
                })),
                e
            }, function(t) {
                g.configureScope(function(e) {
                    e.setExtra("error", JSON.parse(t))
                }),
                g.captureMessage("Paypal: error on create payment package"),
                n.dispatchEvent(new h.IloveEvent("onPaymentInited_error",{
                    action: i,
                    params: r,
                    error: JSON.parse(t)
                }))
            })
        }
        ,
        this._onAuthorize_package = function(e) {
            var n = a
              , i = "payPackage"
              , r = a.packageParams;
            return window.paypal.request.post(s.EXECUTE_PAYMENT_PKG, {
                token: e.paymentToken,
                payment_id: e.paymentID,
                payer_id: e.payerID,
                package: r.packageName(),
                quantity: r.quantity(),
                dtr: r.disableTrial()
            }).then(function(e) {
                n.dispatchEvent(new h.IloveEvent("onPaymentAuthorized",{
                    action: i,
                    params: r,
                    response: e
                }))
            }, function(t) {
                g.configureScope(function(e) {
                    e.setExtra("error", JSON.parse(t))
                }),
                g.captureMessage("Paypal: error on execute payment package"),
                n.dispatchEvent(new h.IloveEvent("onPaymentAuthorized_error",{
                    action: i,
                    params: r,
                    error: JSON.parse(t)
                }))
            })
        }
        ,
        this._onPaymentInit_subsc = function() {
            a._onPaypalButtonClicked();
            var n = a
              , i = "paySubscription"
              , e = window.paypal
              , r = a.subscriptionParams
              , t = a.removeUndefinedValuesFromObject({
                interval: r.subscriptionInterval(),
                users: r.numUsers(),
                signatures: r.numDigitalSignatures(),
                dtr: r.disableTrial()
            });
            return e.request.post(s.CREATE_PAYMENT_SUBSC, t).then(function(e) {
                return n.dispatchEvent(new h.IloveEvent("onPaymentInited",{
                    action: i,
                    params: r,
                    response: e
                })),
                e
            }, function(t) {
                g.configureScope(function(e) {
                    e.setExtra("error", JSON.parse(t))
                }),
                g.captureMessage("Paypal: error on create payment subscription"),
                n.dispatchEvent(new h.IloveEvent("onPaymentInited_error",{
                    action: i,
                    params: r,
                    error: JSON.parse(t)
                }))
            })
        }
        ,
        this._onPaypalButtonClicked = function() {
            a.clearErrorMsg()
        }
        ,
        this._onAuthorize_subsc = function(e) {
            var n = a
              , i = "paySubscription"
              , t = window.paypal
              , r = a.subscriptionParams
              , o = a.removeUndefinedValuesFromObject({
                interval: r.subscriptionInterval(),
                users: r.numUsers(),
                signatures: r.numDigitalSignatures(),
                dtr: r.disableTrial()
            });
            return t.request.post(s.EXECUTE_PAYMENT_SUBSC, c({
                token: e.paymentToken,
                payment_id: e.paymentID,
                payer_id: e.payerID
            }, o)).then(function(e) {
                n.dispatchEvent(new h.IloveEvent("onPaymentAuthorized",{
                    action: i,
                    params: r,
                    response: e
                }))
            }, function(t) {
                g.configureScope(function(e) {
                    e.setExtra("error", JSON.parse(t))
                }),
                g.captureMessage("Paypal: error on execute payment subscription"),
                n.dispatchEvent(new h.IloveEvent("onPaymentAuthorized_error",{
                    action: i,
                    params: r,
                    error: JSON.parse(t)
                }))
            })
        }
        ,
        this._onCancel = function(e) {}
        ,
        this.eventEmitter = new p.ILoveEventEmitter,
        d.isIEIntranet())
            throw "Is IE Intranet"
    }
    t.PaypalService = n
}
, function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.lazyloadCss = void 0,
    t.lazyloadCss = function(e, t) {
        void 0 === t && (t = {});
        for (var n = document.getElementsByTagName("link"), i = n.length; i--; )
            if (n[i].hasAttribute("href") && n[i].href.match(e))
                return !0;
        var r, o, a = document.createElement("link");
        for (r in a.rel = "stylesheet",
        a.href = e,
        t)
            t.hasOwnProperty(r) && (o = t[r],
            a.setAttribute(r, o));
        var s = document.getElementsByTagName("link")[0];
        return s.parentNode.insertBefore(a, s),
        !0
    }
}
, , , , function(e) {
    e.exports = JSON.parse('{"default":{"mimeTypes":[{"title":"Pdf files","extensions":"pdf"}],"multiSelection":true},"editpdf":{"maxFiles":1,"mimeTypes":[{"title":"Pdf files","extensions":"pdf"}],"multiSelection":false},"sign":{"mimeTypes":[{"title":"Pdf files","extensions":"pdf"}],"multiSelection":true},"organize":{"mimeTypes":[{"title":"Pdf files","extensions":"pdf"}],"multiSelection":true},"split":{"maxFiles":1,"mimeTypes":[{"title":"Pdf files","extensions":"pdf"}],"multiSelection":false},"imagepdf":{"mimeTypes":[{"title":"Image files","extensions":"jpg,jpeg,png,tif,tiff","mime":"image/jpeg,image/jpg,image/png,image/tiff"}]},"watermarkimage":{"mimeTypes":[{"title":"Image files","extensions":"jpg,jpeg,png,gif","mime":"image/jpeg,image/jpg,image/png,image/gif"}],"multiSelection":true},"officepdf":{"mimeTypes":[{"title":"Word files","extensions":"doc,docx,odt,ott,stw,sdw,sxw"},{"title":"Excel files","extensions":"xls,xlsx,ods,ots,sdc,sxc"},{"title":"Powerpoint files","extensions":"ppt,pptx,odp,pps,ppsx,sxi"}]},"wordpdf":{"mimeTypes":[{"title":"Word files","extensions":"doc,docx,odt,ott,stw,sdw,sxw"}]},"powerpointpdf":{"mimeTypes":[{"title":"Powerpoint files","extensions":"ppt,pptx,odp,pps,ppsx,sxi"}]},"excelpdf":{"mimeTypes":[{"title":"Excel files","extensions":"xls,xlsx,ods,ots,sdc,sxc"}]},"pdfcompare":{"mimeTypes":[{"title":"Pdf files","extensions":"pdf"}],"multiSelection":true},"redact":{"maxFiles":1,"mimeTypes":[{"title":"Pdf files","extensions":"pdf"}],"multiSelection":false},"resizeimage":{"mimeTypes":[{"title":"Image files","extensions":"jpg,jpeg,gif,png,svg","mime":"image/jpeg,image/jpg,image/gif,image/png,image/svg+xml"}],"multiSelection":true},"cropimage":{"mimeTypes":[{"title":"Image files","extensions":"jpg,jpeg,gif,png","mime":"image/jpeg,image/jpg,image/gif,image/png"}],"multiSelection":false},"fromjpg":{"mimeTypes":[{"title":"Image files","extensions":"jpg,jpeg","mime":"image/jpeg,image/jpg"}],"multiSelection":true},"tojpg":{"mimeTypes":[{"title":"Image files","extensions":"gif,tif,tiff,png,crw,cr2,dng,raf,nef,nrw,orf,rw2,pef,arw,srf,sr2,raw,psd,svg,webp,heic","mime":"image/png,image/x-sony-arw,image/x-canon-cr2,image/x-canon-crw,image/x-kodak-dcr,image/x-adobe-dng,image/x-epson-erf,image/x-kodak-k25,image/x-kodak-kdc,image/x-minolta-mrw,image/x-nikon-nef,image/x-olympus-orf,image/x-pentax-pef,image/x-fuji-raf,image/x-panasonic-raw,image/x-sony-sr2,image/x-sony-srf,image/x-sigma-x3f,image/svg+xml,mage/vnd.adobe.photoshop,application/x-photoshop,image/webp,image/heic"}],"multiSelection":true},"memeimage":{"mimeTypes":[{"title":"Image files","extensions":"jpg,jpeg,png,gif","mime":"image/jpeg,image/jpg,image/png,image/gif"}],"multiSelection":false},"compressimage":{"mimeTypes":[{"title":"Image files","extensions":"jpg,jpeg,png,gif,svg","mime":"image/jpeg,image/jpg,image/png,image/gif,image/svg"}],"multiSelection":true}}')
}
, function(e, t, n) {
    !function(i, e) {
        e.fn.preventDoubleSubmission = function(n) {
            return i(this).on("submit", function(e) {
                var t = i(this);
                !0 === t.data("submitted") ? (e.preventDefault(),
                t.find('[type="submit"]').attr("disabled", !0)) : (t.data("submitted", !0),
                1 < n && (t.find('[type="submit"]').attr("disabled", !0),
                window.setTimeout(function() {
                    t.data("submitted", !1),
                    t.find('[type="submit"]').attr("disabled", null)
                }, n)))
            }),
            this
        }
    }
    .call(this, n(1), n(1))
}
, function(e, t, n) {
    "use strict";
    var i, r, o = this && this.__extends || (i = function(e, t) {
        return (i = Object.setPrototypeOf || ({
            __proto__: []
        }instanceof Array ? function(e, t) {
            e.__proto__ = t
        }
        : function(e, t) {
            for (var n in t)
                t.hasOwnProperty(n) && (e[n] = t[n])
        }
        ))(e, t)
    }
    ,
    function(e, t) {
        function n() {
            this.constructor = e
        }
        i(e, t),
        e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype,
        new n)
    }
    ), n = (Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.AuthState = void 0,
    n(88)), n = (r = n.AbstractAuthState,
    o(a, r),
    a);
    function a() {
        var t = null !== r && r.apply(this, arguments) || this;
        return t.name = "AuthState",
        t.LAYOUT_TEMPLATE_NAME = "new-premium",
        t.onDomReady = function() {
            t.initAbstractAuth(),
            t.ctx.tool && (t.extraLoginParams = {
                tool: t.ctx.tool
            }),
            t.changeScreen(t.INITIAL_SCREEN),
            t.clearLoadingScreen()
        }
        ,
        t._onLoginSuccess = function() {
            t.executeAfterLoginOrRegisterSuccess()
        }
        ,
        t._onRegisterSuccess = function() {
            t.executeAfterLoginOrRegisterSuccess()
        }
        ,
        t.executeAfterLoginOrRegisterSuccess = function() {
            var e = t.ctx._getInitialState();
            t.ctx.changeState(e),
            e.render(t.domRoot)
        }
        ,
        t
    }
    t.AuthState = n
}
, function(e, t, n) {
    "use strict";
    var i, r, o = this && this.__extends || (i = function(e, t) {
        return (i = Object.setPrototypeOf || ({
            __proto__: []
        }instanceof Array ? function(e, t) {
            e.__proto__ = t
        }
        : function(e, t) {
            for (var n in t)
                t.hasOwnProperty(n) && (e[n] = t[n])
        }
        ))(e, t)
    }
    ,
    function(e, t) {
        function n() {
            this.constructor = e
        }
        i(e, t),
        e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype,
        new n)
    }
    ), a = (Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.CannotTrialState = void 0,
    n(121)), n = n(65), n = (r = n.AbstractPaymentState,
    o(s, r),
    s);
    function s() {
        var n = null !== r && r.apply(this, arguments) || this;
        return n.name = "CannotTrialState",
        n.LAYOUT_TEMPLATE_NAME = "new-premium",
        n.INITIAL_SCREEN = "default",
        n.onDomReady = function() {
            n.changeScreen(n.INITIAL_SCREEN),
            n.initAbstractPayment({
                paymentAction: "become_premium",
                paymentInterval: {
                    type: "gui",
                    gui: "boxes"
                },
                currentPaymentMethod: n.ctx.userCurrentPaymentMethod,
                paymentProviderProps: [{
                    name: "stripe",
                    paymentButtonText: n.t("paymentButtonText")
                }, {
                    name: "paypal"
                }]
            }).then(n._onAbstractPaymentInited)
        }
        ,
        n._onPaymentSuccess = function(e) {
            var t = "dialog" === n.ctx.getContextPlacement() ? "popup" : "auth"
              , t = (window.ev("send", "event", "user", "premium", t),
            window.ev("event", "premium", {
                origin: t
            }),
            new a.SubscriptionSuccessState);
            n.ctx.changeState(t),
            t.render(n.domRoot)
        }
        ,
        n._onPaymentFailed = function(e) {}
        ,
        n._onAbstractPaymentInited = function() {
            setTimeout(n.clearLoadingScreen, 150)
        }
        ,
        n
    }
    t.CannotTrialState = n
}
, function(e, t, n) {
    "use strict";
    var i, r, o = this && this.__extends || (i = function(e, t) {
        return (i = Object.setPrototypeOf || ({
            __proto__: []
        }instanceof Array ? function(e, t) {
            e.__proto__ = t
        }
        : function(e, t) {
            for (var n in t)
                t.hasOwnProperty(n) && (e[n] = t[n])
        }
        ))(e, t)
    }
    ,
    function(e, t) {
        function n() {
            this.constructor = e
        }
        i(e, t),
        e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype,
        new n)
    }
    ), a = (Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.SubscriptionSuccessState = void 0,
    n(8)), s = n(7), c = n(16), n = n(21), n = (r = n.StateBase,
    o(u, r),
    u.prototype.init = function() {
        this.actionBtn.addEventListener("click", this._onDoneButtonClick);
        var e = this.dialogSubtitle;
        e.innerHTML = e.innerHTML.replace("${email}", "<b>${email}</b>"),
        e.innerHTML = s.Lang.tr(e.innerHTML, {
            email: this.authenticatedUserEmail
        })
    }
    ,
    u.prototype.hideHeaderAndFooter = function() {
        var e = this.domRoot.querySelector(".dialog__header");
        if (!e)
            throw "Header not found";
        var t = this.domRoot.querySelector(".dialog__footer");
        if (!t)
            throw "Footer not found";
        e.style.display = "none",
        t.style.display = "none"
    }
    ,
    Object.defineProperty(u.prototype, "dialogSubtitle", {
        get: function() {
            var e = this.domStateRoot.querySelector(".dialog__subtitle");
            if (e)
                return e;
            throw "Description elem not found"
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(u.prototype, "authenticatedUserEmail", {
        get: function() {
            var e = c.UserModel.get();
            if (e)
                return e.email;
            throw "Authenticated user not found!"
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(u.prototype, "actionBtn", {
        get: function() {
            var e = this.domStateRoot.querySelector(".dialog__action [next-from-payment-completed]");
            if (e)
                return e;
            throw "'Done' button not found"
        },
        enumerable: !1,
        configurable: !0
    }),
    u);
    function u() {
        var e = null !== r && r.apply(this, arguments) || this;
        return e.name = "SubscriptionSuccessState",
        e.LAYOUT_TEMPLATE_NAME = "new-premium",
        e.INITIAL_SCREEN = "default",
        e.onDomReady = function() {
            e.ctx.setEndState(),
            e.changeScreen(e.INITIAL_SCREEN),
            e.init(),
            e.hideHeaderAndFooter(),
            e.clearLoadingScreen()
        }
        ,
        e._onDoneButtonClick = function() {
            e.dispatchEvent(new a.IloveEvent("end"))
        }
        ,
        e
    }
    t.SubscriptionSuccessState = n
}
, function(e, t, n) {
    "use strict";
    var i, r, o = this && this.__extends || (i = function(e, t) {
        return (i = Object.setPrototypeOf || ({
            __proto__: []
        }instanceof Array ? function(e, t) {
            e.__proto__ = t
        }
        : function(e, t) {
            for (var n in t)
                t.hasOwnProperty(n) && (e[n] = t[n])
        }
        ))(e, t)
    }
    ,
    function(e, t) {
        function n() {
            this.constructor = e
        }
        i(e, t),
        e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype,
        new n)
    }
    ), a = (Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.CanTrialState = void 0,
    n(65)), s = n(123), n = (r = a.AbstractPaymentState,
    o(c, r),
    c);
    function c() {
        var i = null !== r && r.apply(this, arguments) || this;
        return i.name = "CanTrialState",
        i.LAYOUT_TEMPLATE_NAME = "new-premium",
        i.INITIAL_SCREEN = "default",
        i.onDomReady = function() {
            i.changeScreen(i.INITIAL_SCREEN),
            i.initAbstractPayment({
                paymentAction: "become_premium",
                paymentInterval: {
                    type: "gui",
                    gui: "radio"
                },
                currentPaymentMethod: i.ctx.userCurrentPaymentMethod,
                paymentProviderProps: [{
                    name: "stripe",
                    paymentButtonText: i.t("paymentButtonText")
                }, {
                    name: "paypal"
                }]
            }).then(i._onAbstractPaymentInited)
        }
        ,
        i._onPaymentSuccess = function(e, t) {
            var n = "dialog" === i.ctx.getContextPlacement() ? "popup" : "auth"
              , n = (window.ev("send", "event", "user", "premium", n),
            window.ev("event", "premium", {
                origin: n
            }),
            new s.TrialSuccessState);
            i.ctx.changeState(n),
            n.render(i.domRoot)
        }
        ,
        i._onPaymentFailed = function(e, t) {}
        ,
        i._onAbstractPaymentInited = function() {
            setTimeout(i.clearLoadingScreen, 150)
        }
        ,
        i
    }
    t.CanTrialState = n
}
, function(e, t, n) {
    "use strict";
    var i, r, o = this && this.__extends || (i = function(e, t) {
        return (i = Object.setPrototypeOf || ({
            __proto__: []
        }instanceof Array ? function(e, t) {
            e.__proto__ = t
        }
        : function(e, t) {
            for (var n in t)
                t.hasOwnProperty(n) && (e[n] = t[n])
        }
        ))(e, t)
    }
    ,
    function(e, t) {
        function n() {
            this.constructor = e
        }
        i(e, t),
        e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype,
        new n)
    }
    ), a = (Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.TrialSuccessState = void 0,
    n(8)), s = n(7), c = n(16), n = n(21), n = (r = n.StateBase,
    o(u, r),
    u.prototype.init = function() {
        this.actionBtn.addEventListener("click", this._onDoneButtonClick);
        var e = this.dialogSubtitle;
        e.innerHTML = e.innerHTML.replace("${email}", "<b>${email}</b>"),
        e.innerHTML = s.Lang.tr(e.innerHTML, {
            email: this.authenticatedUserEmail
        })
    }
    ,
    u.prototype.hideHeaderAndFooter = function() {
        var e = this.domRoot.querySelector(".dialog__header");
        if (!e)
            throw "Header not found";
        var t = this.domRoot.querySelector(".dialog__footer");
        if (!t)
            throw "Footer not found";
        e.style.display = "none",
        t.style.display = "none"
    }
    ,
    Object.defineProperty(u.prototype, "dialogSubtitle", {
        get: function() {
            var e = this.domStateRoot.querySelector(".dialog__subtitle");
            if (e)
                return e;
            throw "Description elem not found"
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(u.prototype, "authenticatedUserEmail", {
        get: function() {
            var e = c.UserModel.get();
            if (e)
                return e.email;
            throw "Authenticated user not found!"
        },
        enumerable: !1,
        configurable: !0
    }),
    Object.defineProperty(u.prototype, "actionBtn", {
        get: function() {
            var e = this.domStateRoot.querySelector(".dialog__action [next-from-payment-completed]");
            if (e)
                return e;
            throw "'Done' button not found"
        },
        enumerable: !1,
        configurable: !0
    }),
    u);
    function u() {
        var e = null !== r && r.apply(this, arguments) || this;
        return e.name = "TrialSuccessState",
        e.LAYOUT_TEMPLATE_NAME = "new-premium",
        e.INITIAL_SCREEN = "default",
        e.onDomReady = function() {
            e.ctx.setEndState(),
            e.changeScreen(e.INITIAL_SCREEN),
            e.init(),
            e.hideHeaderAndFooter(),
            e.clearLoadingScreen()
        }
        ,
        e._onDoneButtonClick = function() {
            e.dispatchEvent(new a.IloveEvent("end"))
        }
        ,
        e
    }
    t.TrialSuccessState = n
}
, function(e, t, n) {
    "use strict";
    var i, r, o = this && this.__extends || (i = function(e, t) {
        return (i = Object.setPrototypeOf || ({
            __proto__: []
        }instanceof Array ? function(e, t) {
            e.__proto__ = t
        }
        : function(e, t) {
            for (var n in t)
                t.hasOwnProperty(n) && (e[n] = t[n])
        }
        ))(e, t)
    }
    ,
    function(e, t) {
        function n() {
            this.constructor = e
        }
        i(e, t),
        e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype,
        new n)
    }
    ), a = (Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.PremiumState = void 0,
    n(8)), n = n(21), n = (r = n.StateBase,
    o(s, r),
    s.prototype.render = function(e) {
        this.dispatchEvent(new a.IloveEvent("end"))
    }
    ,
    s);
    function s() {
        var e = null !== r && r.apply(this, arguments) || this;
        return e.name = "PremiumState",
        e.LAYOUT_TEMPLATE_NAME = "new-premium",
        e.INITIAL_SCREEN = "default",
        e.onDomReady = function() {}
        ,
        e
    }
    t.PremiumState = n
}
, function(e, t) {
    function n(e, t) {
        t = t || {
            bubbles: !1,
            cancelable: !1,
            detail: void 0
        };
        var n = document.createEvent("CustomEvent");
        return n.initCustomEvent(e, t.bubbles, t.cancelable, t.detail),
        n
    }
    "function" != typeof window.CustomEvent && (n.prototype = window.Event.prototype,
    window.CustomEvent = n)
}
, , , , function(e, t, n) {
    "use strict";
    var i = this && this.__createBinding || (Object.create ? function(e, t, n, i) {
        void 0 === i && (i = n),
        Object.defineProperty(e, i, {
            enumerable: !0,
            get: function() {
                return t[n]
            }
        })
    }
    : function(e, t, n, i) {
        e[i = void 0 === i ? n : i] = t[n]
    }
    )
      , r = this && this.__setModuleDefault || (Object.create ? function(e, t) {
        Object.defineProperty(e, "default", {
            enumerable: !0,
            value: t
        })
    }
    : function(e, t) {
        e.default = t
    }
    )
      , o = this && this.__importStar || function(e) {
        if (e && e.__esModule)
            return e;
        var t = {};
        if (null != e)
            for (var n in e)
                "default" !== n && Object.hasOwnProperty.call(e, n) && i(t, e, n);
        return r(t, e),
        t
    }
      , a = (Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.DriveService = void 0,
    o(n(30)))
      , s = n(63);
    function c(e) {
        var t = this;
        void 0 === e && (e = {}),
        this.init = function() {
            t.startLoadingBtn(),
            t.load().then(function() {
                setTimeout(function() {
                    t.endLoadingBtn(),
                    t.drive()
                }, 500)
            }, function() {})
        }
        ,
        this.srcApi = "https://apis.google.com/js/platform.js",
        this.srcGsi = "https://accounts.google.com/gsi/client",
        this.appId = "391438661644",
        this.developerKey = "AIzaSyAscL1olxYauMLc0sj0LXpCWL2Jmztr8dA",
        this.clientId = "391438661644-2uum636mg2ckariol0if8h3364a1h6dc.apps.googleusercontent.com",
        this.scope = "https://www.googleapis.com/auth/userinfo.email https://www.googleapis.com/auth/drive",
        this.URL_API = "https://www.googleapis.com/drive/v3/",
        this.preloadSrc = s.checkPreloadIsNeeded(),
        Object.assign(this, e)
    }
    c.prototype.start = function() {
        1 == this.preloadSrc ? this.init() : this.waitForClickToInit()
    }
    ,
    c.prototype.waitForClickToInit = function() {
        document.getElementById(this.id).addEventListener("click", this.init)
    }
    ,
    c.prototype.startLoadingBtn = function() {
        var e = document.getElementById(this.id);
        1 == this.preloadSrc ? e.classList.remove("active") : e.classList.add("load")
    }
    ,
    c.prototype.endLoadingBtn = function() {
        var e = document.getElementById(this.id);
        1 == this.preloadSrc ? (e.classList.add("active"),
        document.getElementById(this.id).addEventListener("click", this.init)) : e.classList.remove("load")
    }
    ,
    c.prototype.load = function() {
        var i = this;
        return new Promise(function(e, t) {
            if (null === window.gapi || void 0 !== window.gapi)
                return e(!0);
            a.lazyload(i.srcApi),
            a.lazyload(i.srcGsi);
            var n = window.setInterval(function() {
                if (null !== window.gapi && "object" == typeof window.gapi && null !== window.google && "object" == typeof window.google)
                    return clearInterval(n),
                    e(!0)
            }, 100)
        }
        )
    }
    ,
    c.prototype.drive = function() {}
    ,
    t.DriveService = c
}
, function(e, t, n) {
    "use strict";
    var i = this && this.__createBinding || (Object.create ? function(e, t, n, i) {
        void 0 === i && (i = n),
        Object.defineProperty(e, i, {
            enumerable: !0,
            get: function() {
                return t[n]
            }
        })
    }
    : function(e, t, n, i) {
        e[i = void 0 === i ? n : i] = t[n]
    }
    )
      , r = this && this.__setModuleDefault || (Object.create ? function(e, t) {
        Object.defineProperty(e, "default", {
            enumerable: !0,
            value: t
        })
    }
    : function(e, t) {
        e.default = t
    }
    )
      , o = this && this.__importStar || function(e) {
        if (e && e.__esModule)
            return e;
        var t = {};
        if (null != e)
            for (var n in e)
                "default" !== n && Object.hasOwnProperty.call(e, n) && i(t, e, n);
        return r(t, e),
        t
    }
      , a = (Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.DropboxService = void 0,
    o(n(30)))
      , s = n(63);
    function c(e) {
        var t = this;
        void 0 === e && (e = {}),
        this.init = function() {
            t.startLoadingBtn(),
            t.load().then(function() {
                setTimeout(function() {
                    t.endLoadingBtn(),
                    t.initDropbox()
                }, 500)
            }, function() {})
        }
        ,
        this.dropbox = function() {}
        ,
        this.src = "https://www.dropbox.com/static/api/2/dropins.js",
        this.appKey = "xntw8za866940lz",
        this.id = null,
        this.preloadSrc = s.checkPreloadIsNeeded(),
        Object.assign(this, e)
    }
    c.prototype.start = function() {
        1 == this.preloadSrc ? this.init() : this.waitForClickToInit()
    }
    ,
    c.prototype.waitForClickToInit = function() {
        document.getElementById(this.id).addEventListener("click", this.init)
    }
    ,
    c.prototype.startLoadingBtn = function() {
        var e = document.getElementById(this.id);
        1 == this.preloadSrc ? e.classList.remove("active") : e.classList.add("load")
    }
    ,
    c.prototype.endLoadingBtn = function() {
        var e = document.getElementById(this.id);
        1 == this.preloadSrc ? e.classList.add("active") : e.classList.remove("load")
    }
    ,
    c.prototype.load = function() {
        var i = this;
        return new Promise(function(e, t) {
            if (null === window.Dropbox || void 0 !== window.Dropbox)
                return e(!0);
            a.lazyload(i.src, {
                "data-app-key": i.appKey,
                id: "dropboxjs"
            });
            var n = window.setInterval(function() {
                if (null !== window.Dropbox && "object" == typeof window.Dropbox || "function" == typeof window.Dropbox)
                    return clearInterval(n),
                    e(!0)
            }, 100)
        }
        )
    }
    ,
    c.prototype.initDropbox = function() {
        1 == this.preloadSrc ? document.getElementById(this.id).addEventListener("click", this.dropbox) : (document.getElementById(this.id).removeEventListener("click", this.init),
        document.getElementById(this.id).addEventListener("click", this.dropbox),
        this.dropbox())
    }
    ,
    t.DropboxService = c
}
, , , , , , , , , , , , , , , , , , function(e, ee, t) {
    "use strict";
    t.r(ee),
    function(R) {
        var n = "undefined" != typeof window && "undefined" != typeof document && "undefined" != typeof navigator
          , M = function() {
            for (var e = ["Edge", "Trident", "Firefox"], t = 0; t < e.length; t += 1)
                if (n && 0 <= navigator.userAgent.indexOf(e[t]))
                    return 1;
            return 0
        }();
        var F = n && window.Promise ? function(e) {
            var t = !1;
            return function() {
                t || (t = !0,
                window.Promise.resolve().then(function() {
                    t = !1,
                    e()
                }))
            }
        }
        : function(e) {
            var t = !1;
            return function() {
                t || (t = !0,
                setTimeout(function() {
                    t = !1,
                    e()
                }, M))
            }
        }
        ;
        function a(e) {
            return e && "[object Function]" === {}.toString.call(e)
        }
        function d(e, t) {
            return 1 !== e.nodeType ? [] : (e = e.ownerDocument.defaultView.getComputedStyle(e, null),
            t ? e[t] : e)
        }
        function c(e) {
            return "HTML" === e.nodeName ? e : e.parentNode || e.host
        }
        function l(e) {
            if (!e)
                return document.body;
            switch (e.nodeName) {
            case "HTML":
            case "BODY":
                return e.ownerDocument.body;
            case "#document":
                return e.body
            }
            var t = d(e)
              , n = t.overflow
              , i = t.overflowX
              , t = t.overflowY;
            return /(auto|scroll|overlay)/.test(n + t + i) ? e : l(c(e))
        }
        function u(e) {
            return e && e.referenceNode ? e.referenceNode : e
        }
        var t = n && !(!window.MSInputMethodContext || !document.documentMode)
          , B = n && /MSIE 10/.test(navigator.userAgent);
        function f(e) {
            return 11 === e ? t : 10 !== e && t || B
        }
        function p(e) {
            if (!e)
                return document.documentElement;
            for (var t = f(10) ? document.body : null, n = e.offsetParent || null; n === t && e.nextElementSibling; )
                n = (e = e.nextElementSibling).offsetParent;
            var i = n && n.nodeName;
            return i && "BODY" !== i && "HTML" !== i ? -1 !== ["TH", "TD", "TABLE"].indexOf(n.nodeName) && "static" === d(n, "position") ? p(n) : n : (e ? e.ownerDocument : document).documentElement
        }
        function o(e) {
            return null !== e.parentNode ? o(e.parentNode) : e
        }
        function h(e, t) {
            var n, i, r;
            return e && e.nodeType && t && t.nodeType ? (i = (r = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING) ? e : t,
            r = r ? t : e,
            (n = document.createRange()).setStart(i, 0),
            n.setEnd(r, 0),
            e !== (n = n.commonAncestorContainer) && t !== n || i.contains(r) ? "BODY" === (r = (i = n).nodeName) || "HTML" !== r && p(i.firstElementChild) !== i ? p(n) : n : (r = o(e)).host ? h(r.host, t) : h(e, o(t).host)) : document.documentElement
        }
        function m(e, t) {
            var t = "top" === (1 < arguments.length && void 0 !== t ? t : "top") ? "scrollTop" : "scrollLeft"
              , n = e.nodeName;
            return ("BODY" === n || "HTML" === n ? (n = e.ownerDocument.documentElement,
            e.ownerDocument.scrollingElement || n) : e)[t]
        }
        function r(e, t) {
            var t = "x" === t ? "Left" : "Top"
              , n = "Left" == t ? "Right" : "Bottom";
            return parseFloat(e["border" + t + "Width"]) + parseFloat(e["border" + n + "Width"])
        }
        function i(e, t, n, i) {
            return Math.max(t["offset" + e], t["scroll" + e], n["client" + e], n["offset" + e], n["scroll" + e], f(10) ? parseInt(n["offset" + e]) + parseInt(i["margin" + ("Height" === e ? "Top" : "Left")]) + parseInt(i["margin" + ("Height" === e ? "Bottom" : "Right")]) : 0)
        }
        function v(e) {
            var t = e.body
              , e = e.documentElement
              , n = f(10) && getComputedStyle(e);
            return {
                height: i("Height", t, e, n),
                width: i("Width", t, e, n)
            }
        }
        var e = function(e, t, n) {
            return t && s(e.prototype, t),
            n && s(e, n),
            e
        };
        function s(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || !1,
                i.configurable = !0,
                "value"in i && (i.writable = !0),
                Object.defineProperty(e, i.key, i)
            }
        }
        function g(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        var y = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n, i = arguments[t];
                for (n in i)
                    Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n])
            }
            return e
        }
        ;
        function _(e) {
            return y({}, e, {
                right: e.left + e.width,
                bottom: e.top + e.height
            })
        }
        function b(e) {
            var t = {};
            try {
                f(10) ? (t = e.getBoundingClientRect(),
                n = m(e, "top"),
                i = m(e, "left"),
                t.top += n,
                t.left += i,
                t.bottom += n,
                t.right += i) : t = e.getBoundingClientRect()
            } catch (e) {}
            var n = {
                left: t.left,
                top: t.top,
                width: t.right - t.left,
                height: t.bottom - t.top
            }
              , i = "HTML" === e.nodeName ? v(e.ownerDocument) : {}
              , t = i.width || e.clientWidth || n.width
              , i = i.height || e.clientHeight || n.height
              , t = e.offsetWidth - t
              , i = e.offsetHeight - i;
            return (t || i) && (t -= r(e = d(e), "x"),
            i -= r(e, "y"),
            n.width -= t,
            n.height -= i),
            _(n)
        }
        function w(e, t, n) {
            var n = 2 < arguments.length && void 0 !== n && n
              , i = f(10)
              , r = "HTML" === t.nodeName
              , o = b(e)
              , a = b(t)
              , e = l(e)
              , s = d(t)
              , c = parseFloat(s.borderTopWidth)
              , u = parseFloat(s.borderLeftWidth)
              , a = (n && r && (a.top = Math.max(a.top, 0),
            a.left = Math.max(a.left, 0)),
            _({
                top: o.top - a.top - c,
                left: o.left - a.left - u,
                width: o.width,
                height: o.height
            }));
            return a.marginTop = 0,
            a.marginLeft = 0,
            !i && r && (o = parseFloat(s.marginTop),
            r = parseFloat(s.marginLeft),
            a.top -= c - o,
            a.bottom -= c - o,
            a.left -= u - r,
            a.right -= u - r,
            a.marginTop = o,
            a.marginLeft = r),
            a = (i && !n ? t.contains(e) : t === e && "BODY" !== e.nodeName) ? function(e, t, n) {
                var n = 2 < arguments.length && void 0 !== n && n
                  , i = m(t, "top")
                  , t = m(t, "left")
                  , n = n ? -1 : 1;
                return e.top += i * n,
                e.bottom += i * n,
                e.left += t * n,
                e.right += t * n,
                e
            }(a, t) : a
        }
        function E(e) {
            if (!e || !e.parentElement || f())
                return document.documentElement;
            for (var t = e.parentElement; t && "none" === d(t, "transform"); )
                t = t.parentElement;
            return t || document.documentElement
        }
        function S(e, t, n, i, r) {
            var o, r = 4 < arguments.length && void 0 !== r && r, a = {
                top: 0,
                left: 0
            }, s = r ? E(e) : h(e, u(t)), s = ("viewport" === i ? a = function(e, t) {
                var t = 1 < arguments.length && void 0 !== t && t
                  , n = e.ownerDocument.documentElement
                  , e = w(e, n)
                  , i = Math.max(n.clientWidth, window.innerWidth || 0)
                  , r = Math.max(n.clientHeight, window.innerHeight || 0)
                  , o = t ? 0 : m(n)
                  , t = t ? 0 : m(n, "left");
                return _({
                    top: o - e.top + e.marginTop,
                    left: t - e.left + e.marginLeft,
                    width: i,
                    height: r
                })
            }(s, r) : (o = void 0,
            "scrollParent" === i ? "BODY" === (o = l(c(t))).nodeName && (o = e.ownerDocument.documentElement) : o = "window" === i ? e.ownerDocument.documentElement : i,
            t = w(o, s, r),
            "HTML" !== o.nodeName || function e(t) {
                var n = t.nodeName;
                return "BODY" !== n && "HTML" !== n && ("fixed" === d(t, "position") || !!(n = c(t)) && e(n))
            }(s) ? a = t : (r = (i = v(e.ownerDocument)).height,
            o = i.width,
            a.top += t.top - t.marginTop,
            a.bottom = r + t.top,
            a.left += t.left - t.marginLeft,
            a.right = o + t.left)),
            "number" == typeof (n = n || 0));
            return a.left += s ? n : n.left || 0,
            a.top += s ? n : n.top || 0,
            a.right -= s ? n : n.right || 0,
            a.bottom -= s ? n : n.bottom || 0,
            a
        }
        function T(e, t, n, i, r, o) {
            var a, o = 5 < arguments.length && void 0 !== o ? o : 0;
            return -1 === e.indexOf("auto") ? e : (i = S(n, i, o, r),
            a = {
                top: {
                    width: i.width,
                    height: t.top - i.top
                },
                right: {
                    width: i.right - t.right,
                    height: i.height
                },
                bottom: {
                    width: i.width,
                    height: i.bottom - t.bottom
                },
                left: {
                    width: t.left - i.left,
                    height: i.height
                }
            },
            (0 < (r = (o = Object.keys(a).map(function(e) {
                return y({
                    key: e
                }, a[e], {
                    area: (e = a[e]).width * e.height
                })
            }).sort(function(e, t) {
                return t.area - e.area
            })).filter(function(e) {
                var t = e.width
                  , e = e.height;
                return t >= n.clientWidth && e >= n.clientHeight
            })).length ? r : o)[0].key + ((t = e.split("-")[1]) ? "-" + t : ""))
        }
        function O(e, t, n, i) {
            i = 3 < arguments.length && void 0 !== i ? i : null;
            return w(n, i ? E(t) : h(t, u(n)), i)
        }
        function x(e) {
            var t = e.ownerDocument.defaultView.getComputedStyle(e)
              , n = parseFloat(t.marginTop || 0) + parseFloat(t.marginBottom || 0)
              , t = parseFloat(t.marginLeft || 0) + parseFloat(t.marginRight || 0);
            return {
                width: e.offsetWidth + t,
                height: e.offsetHeight + n
            }
        }
        function C(e) {
            var t = {
                left: "right",
                right: "left",
                bottom: "top",
                top: "bottom"
            };
            return e.replace(/left|right|bottom|top/g, function(e) {
                return t[e]
            })
        }
        function A(e, t, n) {
            n = n.split("-")[0];
            var e = x(e)
              , i = {
                width: e.width,
                height: e.height
            }
              , r = -1 !== ["right", "left"].indexOf(n)
              , o = r ? "top" : "left"
              , a = r ? "left" : "top"
              , s = r ? "height" : "width"
              , r = r ? "width" : "height";
            return i[o] = t[o] + t[s] / 2 - e[s] / 2,
            i[a] = n === a ? t[a] - e[r] : t[C(a)],
            i
        }
        function P(e, t) {
            return Array.prototype.find ? e.find(t) : e.filter(t)[0]
        }
        function I(e, n, t) {
            var i, r;
            return (void 0 === t ? e : e.slice(0, (e = e,
            i = "name",
            r = t,
            Array.prototype.findIndex ? e.findIndex(function(e) {
                return e[i] === r
            }) : (t = P(e, function(e) {
                return e[i] === r
            }),
            e.indexOf(t))))).forEach(function(e) {
                e.function;
                var t = e.function || e.fn;
                e.enabled && a(t) && (n.offsets.popper = _(n.offsets.popper),
                n.offsets.reference = _(n.offsets.reference),
                n = t(n, e))
            }),
            n
        }
        function U(e, n) {
            return e.some(function(e) {
                var t = e.name;
                return e.enabled && t === n
            })
        }
        function k(e) {
            for (var t = [!1, "ms", "Webkit", "Moz", "O"], n = e.charAt(0).toUpperCase() + e.slice(1), i = 0; i < t.length; i++) {
                var r = t[i]
                  , r = r ? "" + r + n : e;
                if (void 0 !== document.body.style[r])
                    return r
            }
            return null
        }
        function H(e) {
            e = e.ownerDocument;
            return e ? e.defaultView : window
        }
        function q(e, t, n, i) {
            n.updateBound = i,
            H(e).addEventListener("resize", n.updateBound, {
                passive: !0
            });
            i = l(e);
            return function e(t, n, i, r) {
                var o = "BODY" === t.nodeName
                  , t = o ? t.ownerDocument.defaultView : t;
                t.addEventListener(n, i, {
                    passive: !0
                }),
                o || e(l(t.parentNode), n, i, r),
                r.push(t)
            }(i, "scroll", n.updateBound, n.scrollParents),
            n.scrollElement = i,
            n.eventsEnabled = !0,
            n
        }
        function W() {
            var e, t;
            this.state.eventsEnabled && (cancelAnimationFrame(this.scheduleUpdate),
            this.state = (e = this.reference,
            t = this.state,
            H(e).removeEventListener("resize", t.updateBound),
            t.scrollParents.forEach(function(e) {
                e.removeEventListener("scroll", t.updateBound)
            }),
            t.updateBound = null,
            t.scrollParents = [],
            t.scrollElement = null,
            t.eventsEnabled = !1,
            t))
        }
        function L(e) {
            return "" !== e && !isNaN(parseFloat(e)) && isFinite(e)
        }
        function j(n, i) {
            Object.keys(i).forEach(function(e) {
                var t = "";
                -1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(e) && L(i[e]) && (t = "px"),
                n.style[e] = i[e] + t
            })
        }
        function V(e, t) {
            function n(e) {
                return e
            }
            var i = e.offsets
              , r = i.popper
              , i = i.reference
              , o = Math.round
              , a = Math.floor
              , i = o(i.width)
              , s = o(r.width)
              , c = -1 !== ["left", "right"].indexOf(e.placement)
              , e = -1 !== e.placement.indexOf("-")
              , c = t ? c || e || i % 2 == s % 2 ? o : a : n
              , a = t ? o : n;
            return {
                left: c(i % 2 == 1 && s % 2 == 1 && !e && t ? r.left - 1 : r.left),
                top: a(r.top),
                bottom: a(r.bottom),
                right: c(r.right)
            }
        }
        var z = n && /Firefox/i.test(navigator.userAgent);
        function G(e, t, n) {
            var i = P(e, function(e) {
                return e.name === t
            })
              , e = !!i && e.some(function(e) {
                return e.name === n && e.enabled && e.order < i.order
            });
            return e || 0,
            e
        }
        var Y = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"]
          , D = Y.slice(3);
        function K(e, t) {
            t = 1 < arguments.length && void 0 !== t && t,
            e = D.indexOf(e),
            e = D.slice(e + 1).concat(D.slice(0, e));
            return t ? e.reverse() : e
        }
        var X = "flip"
          , Q = "clockwise"
          , $ = "counterclockwise";
        function J(e, s, c, t) {
            var r = [0, 0]
              , i = -1 !== ["right", "left"].indexOf(t)
              , t = e.split(/(\+|\-)/).map(function(e) {
                return e.trim()
            })
              , e = t.indexOf(P(t, function(e) {
                return -1 !== e.search(/,|\s/)
            }))
              , n = (t[e] && t[e].indexOf(","),
            /\s*,\s*|\s+/);
            return (-1 !== e ? [t.slice(0, e).concat([t[e].split(n)[0]]), [t[e].split(n)[1]].concat(t.slice(e + 1))] : [t]).map(function(e, t) {
                var a = (1 === t ? !i : i) ? "height" : "width"
                  , n = !1;
                return e.reduce(function(e, t) {
                    return "" === e[e.length - 1] && -1 !== ["+", "-"].indexOf(t) ? (e[e.length - 1] = t,
                    n = !0,
                    e) : n ? (e[e.length - 1] += t,
                    n = !1,
                    e) : e.concat(t)
                }, []).map(function(e) {
                    return t = a,
                    n = s,
                    i = c,
                    r = +(o = (e = e).match(/((?:\-|\+)?\d*\.?\d*)(.*)/))[1],
                    o = o[2],
                    r ? 0 === o.indexOf("%") ? _("%p" === o ? n : i)[t] / 100 * r : "vh" === o || "vw" === o ? ("vh" === o ? Math.max(document.documentElement.clientHeight, window.innerHeight || 0) : Math.max(document.documentElement.clientWidth, window.innerWidth || 0)) / 100 * r : r : e;
                    var t, n, i, r, o
                })
            }).forEach(function(n, i) {
                n.forEach(function(e, t) {
                    L(e) && (r[i] += e * ("-" === n[t - 1] ? -1 : 1))
                })
            }),
            r
        }
        var Z = {
            placement: "bottom",
            positionFixed: !1,
            eventsEnabled: !0,
            removeOnDestroy: !1,
            onCreate: function() {},
            onUpdate: function() {},
            modifiers: {
                shift: {
                    order: 100,
                    enabled: !0,
                    fn: function(e) {
                        var t, n, i, r = e.placement, o = r.split("-")[0];
                        return (r = r.split("-")[1]) && (t = (n = e.offsets).reference,
                        n = n.popper,
                        i = (o = -1 !== ["bottom", "top"].indexOf(o)) ? "width" : "height",
                        o = {
                            start: g({}, o = o ? "left" : "top", t[o]),
                            end: g({}, o, t[o] + t[i] - n[i])
                        },
                        e.offsets.popper = y({}, n, o[r])),
                        e
                    }
                },
                offset: {
                    order: 200,
                    enabled: !0,
                    fn: function(e, t) {
                        var t = t.offset
                          , n = e.placement
                          , i = (r = e.offsets).popper
                          , r = r.reference
                          , n = n.split("-")[0]
                          , o = void 0
                          , o = L(+t) ? [+t, 0] : J(t, i, r, n);
                        return "left" === n ? (i.top += o[0],
                        i.left -= o[1]) : "right" === n ? (i.top += o[0],
                        i.left += o[1]) : "top" === n ? (i.left += o[0],
                        i.top -= o[1]) : "bottom" === n && (i.left += o[0],
                        i.top += o[1]),
                        e.popper = i,
                        e
                    },
                    offset: 0
                },
                preventOverflow: {
                    order: 300,
                    enabled: !0,
                    fn: function(e, i) {
                        var t = i.boundariesElement || p(e.instance.popper)
                          , n = (e.instance.reference === t && (t = p(t)),
                        k("transform"))
                          , r = e.instance.popper.style
                          , o = r.top
                          , a = r.left
                          , s = r[n]
                          , c = (r.top = "",
                        r.left = "",
                        r[n] = "",
                        S(e.instance.popper, e.instance.reference, i.padding, t, e.positionFixed))
                          , t = (r.top = o,
                        r.left = a,
                        r[n] = s,
                        i.boundaries = c,
                        i.priority)
                          , u = e.offsets.popper
                          , l = {
                            primary: function(e) {
                                var t = u[e];
                                return u[e] < c[e] && !i.escapeWithReference && (t = Math.max(u[e], c[e])),
                                g({}, e, t)
                            },
                            secondary: function(e) {
                                var t = "right" === e ? "left" : "top"
                                  , n = u[t];
                                return u[e] > c[e] && !i.escapeWithReference && (n = Math.min(u[t], c[e] - ("right" === e ? u.width : u.height))),
                                g({}, t, n)
                            }
                        };
                        return t.forEach(function(e) {
                            var t = -1 !== ["left", "top"].indexOf(e) ? "primary" : "secondary";
                            u = y({}, u, l[t](e))
                        }),
                        e.offsets.popper = u,
                        e
                    },
                    priority: ["left", "right", "top", "bottom"],
                    padding: 5,
                    boundariesElement: "scrollParent"
                },
                keepTogether: {
                    order: 400,
                    enabled: !0,
                    fn: function(e) {
                        var t = (n = e.offsets).popper
                          , n = n.reference
                          , i = e.placement.split("-")[0]
                          , r = Math.floor
                          , o = (i = -1 !== ["top", "bottom"].indexOf(i)) ? "right" : "bottom"
                          , a = i ? "left" : "top"
                          , i = i ? "width" : "height";
                        return t[o] < r(n[a]) && (e.offsets.popper[a] = r(n[a]) - t[i]),
                        t[a] > r(n[o]) && (e.offsets.popper[a] = r(n[o])),
                        e
                    }
                },
                arrow: {
                    order: 500,
                    enabled: !0,
                    fn: function(e, t) {
                        if (G(e.instance.modifiers, "arrow", "keepTogether")) {
                            t = t.element;
                            if ("string" == typeof t) {
                                if (!(t = e.instance.popper.querySelector(t)))
                                    return e
                            } else if (!e.instance.popper.contains(t))
                                return e;
                            var n = e.placement.split("-")[0]
                              , i = e.offsets
                              , r = i.popper
                              , i = i.reference
                              , n = -1 !== ["left", "right"].indexOf(n)
                              , o = n ? "height" : "width"
                              , a = n ? "Top" : "Left"
                              , s = a.toLowerCase()
                              , c = n ? "left" : "top"
                              , n = n ? "bottom" : "right"
                              , u = x(t)[o]
                              , n = (i[n] - u < r[s] && (e.offsets.popper[s] -= r[s] - (i[n] - u)),
                            i[s] + u > r[n] && (e.offsets.popper[s] += i[s] + u - r[n]),
                            e.offsets.popper = _(e.offsets.popper),
                            i[s] + i[o] / 2 - u / 2)
                              , i = d(e.instance.popper)
                              , l = parseFloat(i["margin" + a])
                              , i = parseFloat(i["border" + a + "Width"])
                              , a = n - e.offsets.popper[s] - l - i
                              , a = Math.max(Math.min(r[o] - u, a), 0);
                            e.arrowElement = t,
                            e.offsets.arrow = (g(n = {}, s, Math.round(a)),
                            g(n, c, ""),
                            n)
                        }
                        return e
                    },
                    element: "[x-arrow]"
                },
                flip: {
                    order: 600,
                    enabled: !0,
                    fn: function(u, l) {
                        if (!(U(u.instance.modifiers, "inner") || u.flipped && u.placement === u.originalPlacement)) {
                            var d = S(u.instance.popper, u.instance.reference, l.padding, l.boundariesElement, u.positionFixed)
                              , f = u.placement.split("-")[0]
                              , p = C(f)
                              , h = u.placement.split("-")[1] || ""
                              , m = [];
                            switch (l.behavior) {
                            case X:
                                m = [f, p];
                                break;
                            case Q:
                                m = K(f);
                                break;
                            case $:
                                m = K(f, !0);
                                break;
                            default:
                                m = l.behavior
                            }
                            m.forEach(function(e, t) {
                                if (f !== e || m.length === t + 1)
                                    return u;
                                f = u.placement.split("-")[0],
                                p = C(f);
                                var e = u.offsets.popper
                                  , n = u.offsets.reference
                                  , i = Math.floor
                                  , n = "left" === f && i(e.right) > i(n.left) || "right" === f && i(e.left) < i(n.right) || "top" === f && i(e.bottom) > i(n.top) || "bottom" === f && i(e.top) < i(n.bottom)
                                  , r = i(e.left) < i(d.left)
                                  , o = i(e.right) > i(d.right)
                                  , a = i(e.top) < i(d.top)
                                  , e = i(e.bottom) > i(d.bottom)
                                  , i = "left" === f && r || "right" === f && o || "top" === f && a || "bottom" === f && e
                                  , s = -1 !== ["top", "bottom"].indexOf(f)
                                  , c = !!l.flipVariations && (s && "start" === h && r || s && "end" === h && o || !s && "start" === h && a || !s && "end" === h && e)
                                  , o = !!l.flipVariationsByContent && (s && "start" === h && o || s && "end" === h && r || !s && "start" === h && e || !s && "end" === h && a)
                                  , r = c || o;
                                (n || i || r) && (u.flipped = !0,
                                (n || i) && (f = m[t + 1]),
                                r && (h = "end" === (e = h) ? "start" : "start" === e ? "end" : e),
                                u.placement = f + (h ? "-" + h : ""),
                                u.offsets.popper = y({}, u.offsets.popper, A(u.instance.popper, u.offsets.reference, u.placement)),
                                u = I(u.instance.modifiers, u, "flip"))
                            })
                        }
                        return u
                    },
                    behavior: "flip",
                    padding: 5,
                    boundariesElement: "viewport",
                    flipVariations: !1,
                    flipVariationsByContent: !1
                },
                inner: {
                    order: 700,
                    enabled: !1,
                    fn: function(e) {
                        var t = e.placement
                          , n = t.split("-")[0]
                          , i = (r = e.offsets).popper
                          , r = r.reference
                          , o = -1 !== ["left", "right"].indexOf(n)
                          , a = -1 === ["top", "left"].indexOf(n);
                        return i[o ? "left" : "top"] = r[n] - (a ? i[o ? "width" : "height"] : 0),
                        e.placement = C(t),
                        e.offsets.popper = _(i),
                        e
                    }
                },
                hide: {
                    order: 800,
                    enabled: !0,
                    fn: function(e) {
                        if (G(e.instance.modifiers, "hide", "preventOverflow")) {
                            var t = e.offsets.reference
                              , n = P(e.instance.modifiers, function(e) {
                                return "preventOverflow" === e.name
                            }).boundaries;
                            if (t.bottom < n.top || t.left > n.right || t.top > n.bottom || t.right < n.left) {
                                if (!0 === e.hide)
                                    return e;
                                e.hide = !0,
                                e.attributes["x-out-of-boundaries"] = ""
                            } else {
                                if (!1 === e.hide)
                                    return e;
                                e.hide = !1,
                                e.attributes["x-out-of-boundaries"] = !1
                            }
                        }
                        return e
                    }
                },
                computeStyle: {
                    order: 850,
                    enabled: !0,
                    fn: function(e, t) {
                        var n = t.x
                          , i = t.y
                          , r = e.offsets.popper
                          , o = void 0 !== (o = P(e.instance.modifiers, function(e) {
                            return "applyStyle" === e.name
                        }).gpuAcceleration) ? o : t.gpuAcceleration
                          , a = b(t = p(e.instance.popper))
                          , r = {
                            position: r.position
                        }
                          , s = V(e, window.devicePixelRatio < 2 || !z)
                          , n = "bottom" === n ? "top" : "bottom"
                          , i = "right" === i ? "left" : "right"
                          , c = k("transform")
                          , u = void 0
                          , l = void 0
                          , l = "bottom" == n ? "HTML" === t.nodeName ? -t.clientHeight + s.bottom : -a.height + s.bottom : s.top
                          , u = "right" == i ? "HTML" === t.nodeName ? -t.clientWidth + s.right : -a.width + s.right : s.left
                          , a = (o && c ? (r[c] = "translate3d(" + u + "px, " + l + "px, 0)",
                        r[n] = 0,
                        r[i] = 0,
                        r.willChange = "transform") : (t = "right" == i ? -1 : 1,
                        r[n] = l * ("bottom" == n ? -1 : 1),
                        r[i] = u * t,
                        r.willChange = n + ", " + i),
                        {
                            "x-placement": e.placement
                        });
                        return e.attributes = y({}, a, e.attributes),
                        e.styles = y({}, r, e.styles),
                        e.arrowStyles = y({}, e.offsets.arrow, e.arrowStyles),
                        e
                    },
                    gpuAcceleration: !0,
                    x: "bottom",
                    y: "right"
                },
                applyStyle: {
                    order: 900,
                    enabled: !0,
                    fn: function(e) {
                        var t, n;
                        return j(e.instance.popper, e.styles),
                        t = e.instance.popper,
                        n = e.attributes,
                        Object.keys(n).forEach(function(e) {
                            !1 !== n[e] ? t.setAttribute(e, n[e]) : t.removeAttribute(e)
                        }),
                        e.arrowElement && Object.keys(e.arrowStyles).length && j(e.arrowElement, e.arrowStyles),
                        e
                    },
                    onLoad: function(e, t, n, i, r) {
                        return r = O(r, t, e, n.positionFixed),
                        r = T(n.placement, r, t, e, n.modifiers.flip.boundariesElement, n.modifiers.flip.padding),
                        t.setAttribute("x-placement", r),
                        j(t, {
                            position: n.positionFixed ? "fixed" : "absolute"
                        }),
                        n
                    },
                    gpuAcceleration: void 0
                }
            }
        }
          , e = (e(N, [{
            key: "update",
            value: function() {
                return function() {
                    var e;
                    this.state.isDestroyed || ((e = {
                        instance: this,
                        styles: {},
                        arrowStyles: {},
                        attributes: {},
                        flipped: !1,
                        offsets: {}
                    }).offsets.reference = O(this.state, this.popper, this.reference, this.options.positionFixed),
                    e.placement = T(this.options.placement, e.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding),
                    e.originalPlacement = e.placement,
                    e.positionFixed = this.options.positionFixed,
                    e.offsets.popper = A(this.popper, e.offsets.reference, e.placement),
                    e.offsets.popper.position = this.options.positionFixed ? "fixed" : "absolute",
                    e = I(this.modifiers, e),
                    this.state.isCreated ? this.options.onUpdate(e) : (this.state.isCreated = !0,
                    this.options.onCreate(e)))
                }
                .call(this)
            }
        }, {
            key: "destroy",
            value: function() {
                return function() {
                    return this.state.isDestroyed = !0,
                    U(this.modifiers, "applyStyle") && (this.popper.removeAttribute("x-placement"),
                    this.popper.style.position = "",
                    this.popper.style.top = "",
                    this.popper.style.left = "",
                    this.popper.style.right = "",
                    this.popper.style.bottom = "",
                    this.popper.style.willChange = "",
                    this.popper.style[k("transform")] = ""),
                    this.disableEventListeners(),
                    this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper),
                    this
                }
                .call(this)
            }
        }, {
            key: "enableEventListeners",
            value: function() {
                return function() {
                    this.state.eventsEnabled || (this.state = q(this.reference, this.options, this.state, this.scheduleUpdate))
                }
                .call(this)
            }
        }, {
            key: "disableEventListeners",
            value: function() {
                return W.call(this)
            }
        }]),
        N);
        function N(e, t) {
            var n = this
              , i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {}
              , r = this
              , o = N;
            if (!(r instanceof o))
                throw new TypeError("Cannot call a class as a function");
            this.scheduleUpdate = function() {
                return requestAnimationFrame(n.update)
            }
            ,
            this.update = F(this.update.bind(this)),
            this.options = y({}, N.Defaults, i),
            this.state = {
                isDestroyed: !1,
                isCreated: !1,
                scrollParents: []
            },
            this.reference = e && e.jquery ? e[0] : e,
            this.popper = t && t.jquery ? t[0] : t,
            this.options.modifiers = {},
            Object.keys(y({}, N.Defaults.modifiers, i.modifiers)).forEach(function(e) {
                n.options.modifiers[e] = y({}, N.Defaults.modifiers[e] || {}, i.modifiers ? i.modifiers[e] : {})
            }),
            this.modifiers = Object.keys(this.options.modifiers).map(function(e) {
                return y({
                    name: e
                }, n.options.modifiers[e])
            }).sort(function(e, t) {
                return e.order - t.order
            }),
            this.modifiers.forEach(function(e) {
                e.enabled && a(e.onLoad) && e.onLoad(n.reference, n.popper, n.options, e, n.state)
            }),
            this.update();
            r = this.options.eventsEnabled;
            r && this.enableEventListeners(),
            this.state.eventsEnabled = r
        }
        e.Utils = ("undefined" != typeof window ? window : R).PopperUtils,
        e.placements = Y,
        e.Defaults = Z,
        ee.default = e
    }
    .call(this, t(31))
}
, , , , , , , , , , , , , , , , , function(e, t, n) {
    !function(e, f, v) {
        "use strict";
        function R(e, t) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n];
                i.enumerable = i.enumerable || false;
                i.configurable = true;
                if ("value"in i)
                    i.writable = true;
                Object.defineProperty(e, i.key, i)
            }
        }
        function o(e, t, n) {
            if (t)
                R(e.prototype, t);
            if (n)
                R(e, n);
            return e
        }
        function M(e, t, n) {
            if (t in e)
                Object.defineProperty(e, t, {
                    value: n,
                    enumerable: true,
                    configurable: true,
                    writable: true
                });
            else
                e[t] = n;
            return e
        }
        function s(t) {
            for (var e = 1; e < arguments.length; e++) {
                var n = arguments[e] != null ? arguments[e] : {};
                var i = Object.keys(n);
                if (typeof Object.getOwnPropertySymbols === "function")
                    i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    }));
                i.forEach(function(e) {
                    M(t, e, n[e])
                })
            }
            return t
        }
        function F(e, t) {
            e.prototype = Object.create(t.prototype);
            e.prototype.constructor = e;
            e.__proto__ = t
        }
        f = f && f.hasOwnProperty("default") ? f["default"] : f,
        v = v && v.hasOwnProperty("default") ? v["default"] : v;
        var B = "transitionend"
          , U = 1e6
          , H = 1e3;
        function q(e) {
            return {}.toString.call(e).match(/\s([a-z]+)/i)[1].toLowerCase()
        }
        function W() {
            return {
                bindType: B,
                delegateType: B,
                handle: function e(t) {
                    if (v(t.target).is(this))
                        return t.handleObj.handler.apply(this, arguments);
                    return undefined
                }
            }
        }
        function V(e) {
            var t = this;
            var n = false;
            v(this).one(g.TRANSITION_END, function() {
                n = true
            });
            setTimeout(function() {
                if (!n)
                    g.triggerTransitionEnd(t)
            }, e);
            return this
        }
        function z() {
            v.fn.emulateTransitionEnd = V;
            v.event.special[g.TRANSITION_END] = W()
        }
        var g = {
            TRANSITION_END: "bsTransitionEnd",
            getUID: function e(t) {
                do {
                    t += ~~(Math.random() * U)
                } while (document.getElementById(t));
                return t
            },
            getSelectorFromElement: function e(t) {
                var n = t.getAttribute("data-target");
                if (!n || n === "#") {
                    var i = t.getAttribute("href");
                    n = i && i !== "#" ? i.trim() : ""
                }
                return n && document.querySelector(n) ? n : null
            },
            getTransitionDurationFromElement: function e(t) {
                if (!t)
                    return 0;
                var n = v(t).css("transition-duration");
                var i = v(t).css("transition-delay");
                var r = parseFloat(n);
                var o = parseFloat(i);
                if (!r && !o)
                    return 0;
                n = n.split(",")[0];
                i = i.split(",")[0];
                return (parseFloat(n) + parseFloat(i)) * H
            },
            reflow: function e(t) {
                return t.offsetHeight
            },
            triggerTransitionEnd: function e(t) {
                v(t).trigger(B)
            },
            supportsTransitionEnd: function e() {
                return Boolean(B)
            },
            isElement: function e(t) {
                return (t[0] || t).nodeType
            },
            typeCheckConfig: function e(t, n, i) {
                for (var r in i)
                    if (Object.prototype.hasOwnProperty.call(i, r)) {
                        var o = i[r];
                        var a = n[r];
                        var s = a && g.isElement(a) ? "element" : q(a);
                        if (!new RegExp(o).test(s))
                            throw new Error(t.toUpperCase() + ": " + ('Option "' + r + '" provided type "' + s + '" ') + ('but expected type "' + o + '".'))
                    }
            },
            findShadowRoot: function e(t) {
                if (!document.documentElement.attachShadow)
                    return null;
                if (typeof t.getRootNode === "function") {
                    var n = t.getRootNode();
                    return n instanceof ShadowRoot ? n : null
                }
                if (t instanceof ShadowRoot)
                    return t;
                if (!t.parentNode)
                    return null;
                return g.findShadowRoot(t.parentNode)
            }
        }, G = (z(),
        "alert"), Y = "4.2.1", K = "bs.alert", X = "." + K, Q, $ = v.fn[G], J = {
            DISMISS: '[data-dismiss="alert"]'
        }, Z = {
            CLOSE: "close" + X,
            CLOSED: "closed" + X,
            CLICK_DATA_API: "click" + X + ".data-api"
        }, ee = {
            ALERT: "alert",
            FADE: "fade",
            SHOW: "show"
        }, te = function() {
            function i(e) {
                this._element = e
            }
            var e = i.prototype;
            e.close = function e(t) {
                var n = this._element;
                if (t)
                    n = this._getRootElement(t);
                var i = this._triggerCloseEvent(n);
                if (i.isDefaultPrevented())
                    return;
                this._removeElement(n)
            }
            ;
            e.dispose = function e() {
                v.removeData(this._element, K);
                this._element = null
            }
            ;
            e._getRootElement = function e(t) {
                var n = g.getSelectorFromElement(t);
                var i = false;
                if (n)
                    i = document.querySelector(n);
                if (!i)
                    i = v(t).closest("." + ee.ALERT)[0];
                return i
            }
            ;
            e._triggerCloseEvent = function e(t) {
                var n = v.Event(Z.CLOSE);
                v(t).trigger(n);
                return n
            }
            ;
            e._removeElement = function e(t) {
                var n = this;
                v(t).removeClass(ee.SHOW);
                if (!v(t).hasClass(ee.FADE)) {
                    this._destroyElement(t);
                    return
                }
                var i = g.getTransitionDurationFromElement(t);
                v(t).one(g.TRANSITION_END, function(e) {
                    return n._destroyElement(t, e)
                }).emulateTransitionEnd(i)
            }
            ;
            e._destroyElement = function e(t) {
                v(t).detach().trigger(Z.CLOSED).remove()
            }
            ;
            i._jQueryInterface = function e(n) {
                return this.each(function() {
                    var e = v(this);
                    var t = e.data(K);
                    if (!t) {
                        t = new i(this);
                        e.data(K, t)
                    }
                    if (n === "close")
                        t[n](this)
                })
            }
            ;
            i._handleDismiss = function e(t) {
                return function(e) {
                    if (e)
                        e.preventDefault();
                    t.close(this)
                }
            }
            ;
            o(i, null, [{
                key: "VERSION",
                get: function e() {
                    return Y
                }
            }]);
            return i
        }(), ne = (v(document).on(Z.CLICK_DATA_API, J.DISMISS, te._handleDismiss(new te)),
        v.fn[G] = te._jQueryInterface,
        v.fn[G].Constructor = te,
        v.fn[G].noConflict = function() {
            v.fn[G] = $;
            return te._jQueryInterface
        }
        ,
        "button"), ie = "4.2.1", re = "bs.button", oe = "." + re, ae = ".data-api", se = v.fn[ne], a = {
            ACTIVE: "active",
            BUTTON: "btn",
            FOCUS: "focus"
        }, c = {
            DATA_TOGGLE_CARROT: '[data-toggle^="button"]',
            DATA_TOGGLE: '[data-toggle="buttons"]',
            INPUT: 'input:not([type="hidden"])',
            ACTIVE: ".active",
            BUTTON: ".btn"
        }, ce = {
            CLICK_DATA_API: "click" + oe + ae,
            FOCUS_BLUR_DATA_API: "focus" + oe + ae + " " + ("blur" + oe + ae)
        }, ue = function() {
            function n(e) {
                this._element = e
            }
            var e = n.prototype;
            e.toggle = function e() {
                var t = true;
                var n = true;
                var i = v(this._element).closest(c.DATA_TOGGLE)[0];
                if (i) {
                    var r = this._element.querySelector(c.INPUT);
                    if (r) {
                        if (r.type === "radio")
                            if (r.checked && this._element.classList.contains(a.ACTIVE))
                                t = false;
                            else {
                                var o = i.querySelector(c.ACTIVE);
                                if (o)
                                    v(o).removeClass(a.ACTIVE)
                            }
                        if (t) {
                            if (r.hasAttribute("disabled") || i.hasAttribute("disabled") || r.classList.contains("disabled") || i.classList.contains("disabled"))
                                return;
                            r.checked = !this._element.classList.contains(a.ACTIVE);
                            v(r).trigger("change")
                        }
                        r.focus();
                        n = false
                    }
                }
                if (n)
                    this._element.setAttribute("aria-pressed", !this._element.classList.contains(a.ACTIVE));
                if (t)
                    v(this._element).toggleClass(a.ACTIVE)
            }
            ;
            e.dispose = function e() {
                v.removeData(this._element, re);
                this._element = null
            }
            ;
            n._jQueryInterface = function e(t) {
                return this.each(function() {
                    var e = v(this).data(re);
                    if (!e) {
                        e = new n(this);
                        v(this).data(re, e)
                    }
                    if (t === "toggle")
                        e[t]()
                })
            }
            ;
            o(n, null, [{
                key: "VERSION",
                get: function e() {
                    return ie
                }
            }]);
            return n
        }(), le = (v(document).on(ce.CLICK_DATA_API, c.DATA_TOGGLE_CARROT, function(e) {
            e.preventDefault();
            var t = e.target;
            if (!v(t).hasClass(a.BUTTON))
                t = v(t).closest(c.BUTTON);
            ue._jQueryInterface.call(v(t), "toggle")
        }).on(ce.FOCUS_BLUR_DATA_API, c.DATA_TOGGLE_CARROT, function(e) {
            var t = v(e.target).closest(c.BUTTON)[0];
            v(t).toggleClass(a.FOCUS, /^focus(in)?$/.test(e.type))
        }),
        v.fn[ne] = ue._jQueryInterface,
        v.fn[ne].Constructor = ue,
        v.fn[ne].noConflict = function() {
            v.fn[ne] = se;
            return ue._jQueryInterface
        }
        ,
        "carousel"), de = "4.2.1", fe = "bs.carousel", t = "." + fe, pe = ".data-api", he = v.fn[le], me = 37, ve = 39, ge = 500, ye = 40, _e = {
            interval: 5e3,
            keyboard: true,
            slide: false,
            pause: "hover",
            wrap: true,
            touch: true
        }, be = {
            interval: "(number|boolean)",
            keyboard: "boolean",
            slide: "(boolean|string)",
            pause: "(string|boolean)",
            wrap: "boolean",
            touch: "boolean"
        }, y = {
            NEXT: "next",
            PREV: "prev",
            LEFT: "left",
            RIGHT: "right"
        }, _ = {
            SLIDE: "slide" + t,
            SLID: "slid" + t,
            KEYDOWN: "keydown" + t,
            MOUSEENTER: "mouseenter" + t,
            MOUSELEAVE: "mouseleave" + t,
            TOUCHSTART: "touchstart" + t,
            TOUCHMOVE: "touchmove" + t,
            TOUCHEND: "touchend" + t,
            POINTERDOWN: "pointerdown" + t,
            POINTERUP: "pointerup" + t,
            DRAG_START: "dragstart" + t,
            LOAD_DATA_API: "load" + t + pe,
            CLICK_DATA_API: "click" + t + pe
        }, b = {
            CAROUSEL: "carousel",
            ACTIVE: "active",
            SLIDE: "slide",
            RIGHT: "carousel-item-right",
            LEFT: "carousel-item-left",
            NEXT: "carousel-item-next",
            PREV: "carousel-item-prev",
            ITEM: "carousel-item",
            POINTER_EVENT: "pointer-event"
        }, w = {
            ACTIVE: ".active",
            ACTIVE_ITEM: ".active.carousel-item",
            ITEM: ".carousel-item",
            ITEM_IMG: ".carousel-item img",
            NEXT_PREV: ".carousel-item-next, .carousel-item-prev",
            INDICATORS: ".carousel-indicators",
            DATA_SLIDE: "[data-slide], [data-slide-to]",
            DATA_RIDE: '[data-ride="carousel"]'
        }, we = {
            TOUCH: "touch",
            PEN: "pen"
        }, Ee = function() {
            function a(e, t) {
                this._items = null;
                this._interval = null;
                this._activeElement = null;
                this._isPaused = false;
                this._isSliding = false;
                this.touchTimeout = null;
                this.touchStartX = 0;
                this.touchDeltaX = 0;
                this._config = this._getConfig(t);
                this._element = e;
                this._indicatorsElement = this._element.querySelector(w.INDICATORS);
                this._touchSupported = "ontouchstart"in document.documentElement || navigator.maxTouchPoints > 0;
                this._pointerEvent = Boolean(window.PointerEvent || window.MSPointerEvent);
                this._addEventListeners()
            }
            var e = a.prototype;
            e.next = function e() {
                if (!this._isSliding)
                    this._slide(y.NEXT)
            }
            ;
            e.nextWhenVisible = function e() {
                if (!document.hidden && v(this._element).is(":visible") && v(this._element).css("visibility") !== "hidden")
                    this.next()
            }
            ;
            e.prev = function e() {
                if (!this._isSliding)
                    this._slide(y.PREV)
            }
            ;
            e.pause = function e(t) {
                if (!t)
                    this._isPaused = true;
                if (this._element.querySelector(w.NEXT_PREV)) {
                    g.triggerTransitionEnd(this._element);
                    this.cycle(true)
                }
                clearInterval(this._interval);
                this._interval = null
            }
            ;
            e.cycle = function e(t) {
                if (!t)
                    this._isPaused = false;
                if (this._interval) {
                    clearInterval(this._interval);
                    this._interval = null
                }
                if (this._config.interval && !this._isPaused)
                    this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval)
            }
            ;
            e.to = function e(t) {
                var n = this;
                this._activeElement = this._element.querySelector(w.ACTIVE_ITEM);
                var i = this._getItemIndex(this._activeElement);
                if (t > this._items.length - 1 || t < 0)
                    return;
                if (this._isSliding) {
                    v(this._element).one(_.SLID, function() {
                        return n.to(t)
                    });
                    return
                }
                if (i === t) {
                    this.pause();
                    this.cycle();
                    return
                }
                var r = t > i ? y.NEXT : y.PREV;
                this._slide(r, this._items[t])
            }
            ;
            e.dispose = function e() {
                v(this._element).off(t);
                v.removeData(this._element, fe);
                this._items = null;
                this._config = null;
                this._element = null;
                this._interval = null;
                this._isPaused = null;
                this._isSliding = null;
                this._activeElement = null;
                this._indicatorsElement = null
            }
            ;
            e._getConfig = function e(t) {
                t = s({}, _e, t);
                g.typeCheckConfig(le, t, be);
                return t
            }
            ;
            e._handleSwipe = function e() {
                var t = Math.abs(this.touchDeltaX);
                if (t <= ye)
                    return;
                var n = t / this.touchDeltaX;
                if (n > 0)
                    this.prev();
                if (n < 0)
                    this.next()
            }
            ;
            e._addEventListeners = function e() {
                var t = this;
                if (this._config.keyboard)
                    v(this._element).on(_.KEYDOWN, function(e) {
                        return t._keydown(e)
                    });
                if (this._config.pause === "hover")
                    v(this._element).on(_.MOUSEENTER, function(e) {
                        return t.pause(e)
                    }).on(_.MOUSELEAVE, function(e) {
                        return t.cycle(e)
                    });
                this._addTouchEventListeners()
            }
            ;
            e._addTouchEventListeners = function e() {
                var n = this;
                if (!this._touchSupported)
                    return;
                var t = function e(t) {
                    if (n._pointerEvent && we[t.originalEvent.pointerType.toUpperCase()])
                        n.touchStartX = t.originalEvent.clientX;
                    else if (!n._pointerEvent)
                        n.touchStartX = t.originalEvent.touches[0].clientX
                };
                var i = function e(t) {
                    if (t.originalEvent.touches && t.originalEvent.touches.length > 1)
                        n.touchDeltaX = 0;
                    else
                        n.touchDeltaX = t.originalEvent.touches[0].clientX - n.touchStartX
                };
                var r = function e(t) {
                    if (n._pointerEvent && we[t.originalEvent.pointerType.toUpperCase()])
                        n.touchDeltaX = t.originalEvent.clientX - n.touchStartX;
                    n._handleSwipe();
                    if (n._config.pause === "hover") {
                        n.pause();
                        if (n.touchTimeout)
                            clearTimeout(n.touchTimeout);
                        n.touchTimeout = setTimeout(function(e) {
                            return n.cycle(e)
                        }, ge + n._config.interval)
                    }
                };
                v(this._element.querySelectorAll(w.ITEM_IMG)).on(_.DRAG_START, function(e) {
                    return e.preventDefault()
                });
                if (this._pointerEvent) {
                    v(this._element).on(_.POINTERDOWN, function(e) {
                        return t(e)
                    });
                    v(this._element).on(_.POINTERUP, function(e) {
                        return r(e)
                    });
                    this._element.classList.add(b.POINTER_EVENT)
                } else {
                    v(this._element).on(_.TOUCHSTART, function(e) {
                        return t(e)
                    });
                    v(this._element).on(_.TOUCHMOVE, function(e) {
                        return i(e)
                    });
                    v(this._element).on(_.TOUCHEND, function(e) {
                        return r(e)
                    })
                }
            }
            ;
            e._keydown = function e(t) {
                if (/input|textarea/i.test(t.target.tagName))
                    return;
                switch (t.which) {
                case me:
                    t.preventDefault();
                    this.prev();
                    break;
                case ve:
                    t.preventDefault();
                    this.next();
                    break;
                default:
                }
            }
            ;
            e._getItemIndex = function e(t) {
                this._items = t && t.parentNode ? [].slice.call(t.parentNode.querySelectorAll(w.ITEM)) : [];
                return this._items.indexOf(t)
            }
            ;
            e._getItemByDirection = function e(t, n) {
                var i = t === y.NEXT;
                var r = t === y.PREV;
                var o = this._getItemIndex(n);
                var a = this._items.length - 1;
                var s = r && o === 0 || i && o === a;
                if (s && !this._config.wrap)
                    return n;
                var c = t === y.PREV ? -1 : 1;
                var u = (o + c) % this._items.length;
                return u === -1 ? this._items[this._items.length - 1] : this._items[u]
            }
            ;
            e._triggerSlideEvent = function e(t, n) {
                var i = this._getItemIndex(t);
                var r = this._getItemIndex(this._element.querySelector(w.ACTIVE_ITEM));
                var o = v.Event(_.SLIDE, {
                    relatedTarget: t,
                    direction: n,
                    from: r,
                    to: i
                });
                v(this._element).trigger(o);
                return o
            }
            ;
            e._setActiveIndicatorElement = function e(t) {
                if (this._indicatorsElement) {
                    var n = [].slice.call(this._indicatorsElement.querySelectorAll(w.ACTIVE));
                    v(n).removeClass(b.ACTIVE);
                    var i = this._indicatorsElement.children[this._getItemIndex(t)];
                    if (i)
                        v(i).addClass(b.ACTIVE)
                }
            }
            ;
            e._slide = function e(t, n) {
                var i = this;
                var r = this._element.querySelector(w.ACTIVE_ITEM);
                var o = this._getItemIndex(r);
                var a = n || r && this._getItemByDirection(t, r);
                var s = this._getItemIndex(a);
                var c = Boolean(this._interval);
                var u;
                var l;
                var d;
                if (t === y.NEXT) {
                    u = b.LEFT;
                    l = b.NEXT;
                    d = y.LEFT
                } else {
                    u = b.RIGHT;
                    l = b.PREV;
                    d = y.RIGHT
                }
                if (a && v(a).hasClass(b.ACTIVE)) {
                    this._isSliding = false;
                    return
                }
                var f = this._triggerSlideEvent(a, d);
                if (f.isDefaultPrevented())
                    return;
                if (!r || !a)
                    return;
                this._isSliding = true;
                if (c)
                    this.pause();
                this._setActiveIndicatorElement(a);
                var p = v.Event(_.SLID, {
                    relatedTarget: a,
                    direction: d,
                    from: o,
                    to: s
                });
                if (v(this._element).hasClass(b.SLIDE)) {
                    v(a).addClass(l);
                    g.reflow(a);
                    v(r).addClass(u);
                    v(a).addClass(u);
                    var h = parseInt(a.getAttribute("data-interval"), 10);
                    if (h) {
                        this._config.defaultInterval = this._config.defaultInterval || this._config.interval;
                        this._config.interval = h
                    } else
                        this._config.interval = this._config.defaultInterval || this._config.interval;
                    var m = g.getTransitionDurationFromElement(r);
                    v(r).one(g.TRANSITION_END, function() {
                        v(a).removeClass(u + " " + l).addClass(b.ACTIVE);
                        v(r).removeClass(b.ACTIVE + " " + l + " " + u);
                        i._isSliding = false;
                        setTimeout(function() {
                            return v(i._element).trigger(p)
                        }, 0)
                    }).emulateTransitionEnd(m)
                } else {
                    v(r).removeClass(b.ACTIVE);
                    v(a).addClass(b.ACTIVE);
                    this._isSliding = false;
                    v(this._element).trigger(p)
                }
                if (c)
                    this.cycle()
            }
            ;
            a._jQueryInterface = function e(i) {
                return this.each(function() {
                    var e = v(this).data(fe);
                    var t = s({}, _e, v(this).data());
                    if (typeof i === "object")
                        t = s({}, t, i);
                    var n = typeof i === "string" ? i : t.slide;
                    if (!e) {
                        e = new a(this,t);
                        v(this).data(fe, e)
                    }
                    if (typeof i === "number")
                        e.to(i);
                    else if (typeof n === "string") {
                        if (typeof e[n] === "undefined")
                            throw new TypeError('No method named "' + n + '"');
                        e[n]()
                    } else if (t.interval) {
                        e.pause();
                        e.cycle()
                    }
                })
            }
            ;
            a._dataApiClickHandler = function e(t) {
                var n = g.getSelectorFromElement(this);
                if (!n)
                    return;
                var i = v(n)[0];
                if (!i || !v(i).hasClass(b.CAROUSEL))
                    return;
                var r = s({}, v(i).data(), v(this).data());
                var o = this.getAttribute("data-slide-to");
                if (o)
                    r.interval = false;
                a._jQueryInterface.call(v(i), r);
                if (o)
                    v(i).data(fe).to(o);
                t.preventDefault()
            }
            ;
            o(a, null, [{
                key: "VERSION",
                get: function e() {
                    return de
                }
            }, {
                key: "Default",
                get: function e() {
                    return _e
                }
            }]);
            return a
        }(), Se = (v(document).on(_.CLICK_DATA_API, w.DATA_SLIDE, Ee._dataApiClickHandler),
        v(window).on(_.LOAD_DATA_API, function() {
            var e = [].slice.call(document.querySelectorAll(w.DATA_RIDE));
            for (var t = 0, n = e.length; t < n; t++) {
                var i = v(e[t]);
                Ee._jQueryInterface.call(i, i.data())
            }
        }),
        v.fn[le] = Ee._jQueryInterface,
        v.fn[le].Constructor = Ee,
        v.fn[le].noConflict = function() {
            v.fn[le] = he;
            return Ee._jQueryInterface
        }
        ,
        "collapse"), Te = "4.2.1", d = "bs.collapse", Oe = "." + d, xe, Ce = v.fn[Se], Ae = {
            toggle: true,
            parent: ""
        }, Pe = {
            toggle: "boolean",
            parent: "(string|element)"
        }, Ie = {
            SHOW: "show" + Oe,
            SHOWN: "shown" + Oe,
            HIDE: "hide" + Oe,
            HIDDEN: "hidden" + Oe,
            CLICK_DATA_API: "click" + Oe + ".data-api"
        }, p = {
            SHOW: "show",
            COLLAPSE: "collapse",
            COLLAPSING: "collapsing",
            COLLAPSED: "collapsed"
        }, ke = {
            WIDTH: "width",
            HEIGHT: "height"
        }, Le = {
            ACTIVES: ".show, .collapsing",
            DATA_TOGGLE: '[data-toggle="collapse"]'
        }, je = function() {
            function l(t, e) {
                this._isTransitioning = false;
                this._element = t;
                this._config = this._getConfig(e);
                this._triggerArray = [].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#' + t.id + '"],' + ('[data-toggle="collapse"][data-target="#' + t.id + '"]')));
                var n = [].slice.call(document.querySelectorAll(Le.DATA_TOGGLE));
                for (var i = 0, r = n.length; i < r; i++) {
                    var o = n[i];
                    var a = g.getSelectorFromElement(o);
                    var s = [].slice.call(document.querySelectorAll(a)).filter(function(e) {
                        return e === t
                    });
                    if (a !== null && s.length > 0) {
                        this._selector = a;
                        this._triggerArray.push(o)
                    }
                }
                this._parent = this._config.parent ? this._getParent() : null;
                if (!this._config.parent)
                    this._addAriaAndCollapsedClass(this._element, this._triggerArray);
                if (this._config.toggle)
                    this.toggle()
            }
            var e = l.prototype;
            e.toggle = function e() {
                if (v(this._element).hasClass(p.SHOW))
                    this.hide();
                else
                    this.show()
            }
            ;
            e.show = function e() {
                var t = this;
                if (this._isTransitioning || v(this._element).hasClass(p.SHOW))
                    return;
                var n;
                var i;
                if (this._parent) {
                    n = [].slice.call(this._parent.querySelectorAll(Le.ACTIVES)).filter(function(e) {
                        if (typeof t._config.parent === "string")
                            return e.getAttribute("data-parent") === t._config.parent;
                        return e.classList.contains(p.COLLAPSE)
                    });
                    if (n.length === 0)
                        n = null
                }
                if (n) {
                    i = v(n).not(this._selector).data(d);
                    if (i && i._isTransitioning)
                        return
                }
                var r = v.Event(Ie.SHOW);
                v(this._element).trigger(r);
                if (r.isDefaultPrevented())
                    return;
                if (n) {
                    l._jQueryInterface.call(v(n).not(this._selector), "hide");
                    if (!i)
                        v(n).data(d, null)
                }
                var o = this._getDimension();
                v(this._element).removeClass(p.COLLAPSE).addClass(p.COLLAPSING);
                this._element.style[o] = 0;
                if (this._triggerArray.length)
                    v(this._triggerArray).removeClass(p.COLLAPSED).attr("aria-expanded", true);
                this.setTransitioning(true);
                var a = function e() {
                    v(t._element).removeClass(p.COLLAPSING).addClass(p.COLLAPSE).addClass(p.SHOW);
                    t._element.style[o] = "";
                    t.setTransitioning(false);
                    v(t._element).trigger(Ie.SHOWN)
                };
                var s = o[0].toUpperCase() + o.slice(1);
                var c = "scroll" + s;
                var u = g.getTransitionDurationFromElement(this._element);
                v(this._element).one(g.TRANSITION_END, a).emulateTransitionEnd(u);
                this._element.style[o] = this._element[c] + "px"
            }
            ;
            e.hide = function e() {
                var t = this;
                if (this._isTransitioning || !v(this._element).hasClass(p.SHOW))
                    return;
                var n = v.Event(Ie.HIDE);
                v(this._element).trigger(n);
                if (n.isDefaultPrevented())
                    return;
                var i = this._getDimension();
                this._element.style[i] = this._element.getBoundingClientRect()[i] + "px";
                g.reflow(this._element);
                v(this._element).addClass(p.COLLAPSING).removeClass(p.COLLAPSE).removeClass(p.SHOW);
                var r = this._triggerArray.length;
                if (r > 0)
                    for (var o = 0; o < r; o++) {
                        var a = this._triggerArray[o];
                        var s = g.getSelectorFromElement(a);
                        if (s !== null) {
                            var c = v([].slice.call(document.querySelectorAll(s)));
                            if (!c.hasClass(p.SHOW))
                                v(a).addClass(p.COLLAPSED).attr("aria-expanded", false)
                        }
                    }
                this.setTransitioning(true);
                var u = function e() {
                    t.setTransitioning(false);
                    v(t._element).removeClass(p.COLLAPSING).addClass(p.COLLAPSE).trigger(Ie.HIDDEN)
                };
                this._element.style[i] = "";
                var l = g.getTransitionDurationFromElement(this._element);
                v(this._element).one(g.TRANSITION_END, u).emulateTransitionEnd(l)
            }
            ;
            e.setTransitioning = function e(t) {
                this._isTransitioning = t
            }
            ;
            e.dispose = function e() {
                v.removeData(this._element, d);
                this._config = null;
                this._parent = null;
                this._element = null;
                this._triggerArray = null;
                this._isTransitioning = null
            }
            ;
            e._getConfig = function e(t) {
                t = s({}, Ae, t);
                t.toggle = Boolean(t.toggle);
                g.typeCheckConfig(Se, t, Pe);
                return t
            }
            ;
            e._getDimension = function e() {
                var t = v(this._element).hasClass(ke.WIDTH);
                return t ? ke.WIDTH : ke.HEIGHT
            }
            ;
            e._getParent = function e() {
                var n = this;
                var t;
                if (g.isElement(this._config.parent)) {
                    t = this._config.parent;
                    if (typeof this._config.parent.jquery !== "undefined")
                        t = this._config.parent[0]
                } else
                    t = document.querySelector(this._config.parent);
                var i = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]';
                var r = [].slice.call(t.querySelectorAll(i));
                v(r).each(function(e, t) {
                    n._addAriaAndCollapsedClass(l._getTargetFromElement(t), [t])
                });
                return t
            }
            ;
            e._addAriaAndCollapsedClass = function e(t, n) {
                var i = v(t).hasClass(p.SHOW);
                if (n.length)
                    v(n).toggleClass(p.COLLAPSED, !i).attr("aria-expanded", i)
            }
            ;
            l._getTargetFromElement = function e(t) {
                var n = g.getSelectorFromElement(t);
                return n ? document.querySelector(n) : null
            }
            ;
            l._jQueryInterface = function e(i) {
                return this.each(function() {
                    var e = v(this);
                    var t = e.data(d);
                    var n = s({}, Ae, e.data(), typeof i === "object" && i ? i : {});
                    if (!t && n.toggle && /show|hide/.test(i))
                        n.toggle = false;
                    if (!t) {
                        t = new l(this,n);
                        e.data(d, t)
                    }
                    if (typeof i === "string") {
                        if (typeof t[i] === "undefined")
                            throw new TypeError('No method named "' + i + '"');
                        t[i]()
                    }
                })
            }
            ;
            o(l, null, [{
                key: "VERSION",
                get: function e() {
                    return Te
                }
            }, {
                key: "Default",
                get: function e() {
                    return Ae
                }
            }]);
            return l
        }(), De = (v(document).on(Ie.CLICK_DATA_API, Le.DATA_TOGGLE, function(e) {
            if (e.currentTarget.tagName === "A")
                e.preventDefault();
            var i = v(this);
            var t = g.getSelectorFromElement(this);
            var n = [].slice.call(document.querySelectorAll(t));
            v(n).each(function() {
                var e = v(this);
                var t = e.data(d);
                var n = t ? "toggle" : i.data();
                je._jQueryInterface.call(e, n)
            })
        }),
        v.fn[Se] = je._jQueryInterface,
        v.fn[Se].Constructor = je,
        v.fn[Se].noConflict = function() {
            v.fn[Se] = Ce;
            return je._jQueryInterface
        }
        ,
        "dropdown"), Ne = "4.2.1", Re = "bs.dropdown", n = "." + Re, Me = ".data-api", Fe = v.fn[De], Be = 27, Ue = 32, He = 9, qe = 38, We = 40, Ve = 3, ze = new RegExp(qe + "|" + We + "|" + Be), h = {
            HIDE: "hide" + n,
            HIDDEN: "hidden" + n,
            SHOW: "show" + n,
            SHOWN: "shown" + n,
            CLICK: "click" + n,
            CLICK_DATA_API: "click" + n + Me,
            KEYDOWN_DATA_API: "keydown" + n + Me,
            KEYUP_DATA_API: "keyup" + n + Me
        }, m = {
            DISABLED: "disabled",
            SHOW: "show",
            DROPUP: "dropup",
            DROPRIGHT: "dropright",
            DROPLEFT: "dropleft",
            MENURIGHT: "dropdown-menu-right",
            MENULEFT: "dropdown-menu-left",
            POSITION_STATIC: "position-static"
        }, E = {
            DATA_TOGGLE: '[data-toggle="dropdown"]',
            FORM_CHILD: ".dropdown form",
            MENU: ".dropdown-menu",
            NAVBAR_NAV: ".navbar-nav",
            VISIBLE_ITEMS: ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)"
        }, Ge = {
            TOP: "top-start",
            TOPEND: "top-end",
            BOTTOM: "bottom-start",
            BOTTOMEND: "bottom-end",
            RIGHT: "right-start",
            RIGHTEND: "right-end",
            LEFT: "left-start",
            LEFTEND: "left-end"
        }, Ye = {
            offset: 0,
            flip: true,
            boundary: "scrollParent",
            reference: "toggle",
            display: "dynamic"
        }, Ke = {
            offset: "(number|string|function)",
            flip: "boolean",
            boundary: "(string|element)",
            reference: "(string|element)",
            display: "string"
        }, i = function() {
            function l(e, t) {
                this._element = e;
                this._popper = null;
                this._config = this._getConfig(t);
                this._menu = this._getMenuElement();
                this._inNavbar = this._detectNavbar();
                this._addEventListeners()
            }
            var e = l.prototype;
            e.toggle = function e() {
                if (this._element.disabled || v(this._element).hasClass(m.DISABLED))
                    return;
                var t = l._getParentFromElement(this._element);
                var n = v(this._menu).hasClass(m.SHOW);
                l._clearMenus();
                if (n)
                    return;
                var i = {
                    relatedTarget: this._element
                };
                var r = v.Event(h.SHOW, i);
                v(t).trigger(r);
                if (r.isDefaultPrevented())
                    return;
                if (!this._inNavbar) {
                    if (typeof f === "undefined")
                        throw new TypeError("Bootstrap's dropdowns require Popper.js (https://popper.js.org/)");
                    var o = this._element;
                    if (this._config.reference === "parent")
                        o = t;
                    else if (g.isElement(this._config.reference)) {
                        o = this._config.reference;
                        if (typeof this._config.reference.jquery !== "undefined")
                            o = this._config.reference[0]
                    }
                    if (this._config.boundary !== "scrollParent")
                        v(t).addClass(m.POSITION_STATIC);
                    this._popper = new f(o,this._menu,this._getPopperConfig())
                }
                if ("ontouchstart"in document.documentElement && v(t).closest(E.NAVBAR_NAV).length === 0)
                    v(document.body).children().on("mouseover", null, v.noop);
                this._element.focus();
                this._element.setAttribute("aria-expanded", true);
                v(this._menu).toggleClass(m.SHOW);
                v(t).toggleClass(m.SHOW).trigger(v.Event(h.SHOWN, i))
            }
            ;
            e.show = function e() {
                if (this._element.disabled || v(this._element).hasClass(m.DISABLED) || v(this._menu).hasClass(m.SHOW))
                    return;
                var t = {
                    relatedTarget: this._element
                };
                var n = v.Event(h.SHOW, t);
                var i = l._getParentFromElement(this._element);
                v(i).trigger(n);
                if (n.isDefaultPrevented())
                    return;
                v(this._menu).toggleClass(m.SHOW);
                v(i).toggleClass(m.SHOW).trigger(v.Event(h.SHOWN, t))
            }
            ;
            e.hide = function e() {
                if (this._element.disabled || v(this._element).hasClass(m.DISABLED) || !v(this._menu).hasClass(m.SHOW))
                    return;
                var t = {
                    relatedTarget: this._element
                };
                var n = v.Event(h.HIDE, t);
                var i = l._getParentFromElement(this._element);
                v(i).trigger(n);
                if (n.isDefaultPrevented())
                    return;
                v(this._menu).toggleClass(m.SHOW);
                v(i).toggleClass(m.SHOW).trigger(v.Event(h.HIDDEN, t))
            }
            ;
            e.dispose = function e() {
                v.removeData(this._element, Re);
                v(this._element).off(n);
                this._element = null;
                this._menu = null;
                if (this._popper !== null) {
                    this._popper.destroy();
                    this._popper = null
                }
            }
            ;
            e.update = function e() {
                this._inNavbar = this._detectNavbar();
                if (this._popper !== null)
                    this._popper.scheduleUpdate()
            }
            ;
            e._addEventListeners = function e() {
                var t = this;
                v(this._element).on(h.CLICK, function(e) {
                    e.preventDefault();
                    e.stopPropagation();
                    t.toggle()
                })
            }
            ;
            e._getConfig = function e(t) {
                t = s({}, this.constructor.Default, v(this._element).data(), t);
                g.typeCheckConfig(De, t, this.constructor.DefaultType);
                return t
            }
            ;
            e._getMenuElement = function e() {
                if (!this._menu) {
                    var t = l._getParentFromElement(this._element);
                    if (t)
                        this._menu = t.querySelector(E.MENU)
                }
                return this._menu
            }
            ;
            e._getPlacement = function e() {
                var t = v(this._element.parentNode);
                var n = Ge.BOTTOM;
                if (t.hasClass(m.DROPUP)) {
                    n = Ge.TOP;
                    if (v(this._menu).hasClass(m.MENURIGHT))
                        n = Ge.TOPEND
                } else if (t.hasClass(m.DROPRIGHT))
                    n = Ge.RIGHT;
                else if (t.hasClass(m.DROPLEFT))
                    n = Ge.LEFT;
                else if (v(this._menu).hasClass(m.MENURIGHT))
                    n = Ge.BOTTOMEND;
                return n
            }
            ;
            e._detectNavbar = function e() {
                return v(this._element).closest(".navbar").length > 0
            }
            ;
            e._getPopperConfig = function e() {
                var t = this;
                var n = {};
                if (typeof this._config.offset === "function")
                    n.fn = function(e) {
                        e.offsets = s({}, e.offsets, t._config.offset(e.offsets) || {});
                        return e
                    }
                    ;
                else
                    n.offset = this._config.offset;
                var i = {
                    placement: this._getPlacement(),
                    modifiers: {
                        offset: n,
                        flip: {
                            enabled: this._config.flip
                        },
                        preventOverflow: {
                            boundariesElement: this._config.boundary
                        }
                    }
                };
                if (this._config.display === "static")
                    i.modifiers.applyStyle = {
                        enabled: false
                    };
                return i
            }
            ;
            l._jQueryInterface = function e(n) {
                return this.each(function() {
                    var e = v(this).data(Re);
                    var t = typeof n === "object" ? n : null;
                    if (!e) {
                        e = new l(this,t);
                        v(this).data(Re, e)
                    }
                    if (typeof n === "string") {
                        if (typeof e[n] === "undefined")
                            throw new TypeError('No method named "' + n + '"');
                        e[n]()
                    }
                })
            }
            ;
            l._clearMenus = function e(t) {
                if (t && (t.which === Ve || t.type === "keyup" && t.which !== He))
                    return;
                var n = [].slice.call(document.querySelectorAll(E.DATA_TOGGLE));
                for (var i = 0, r = n.length; i < r; i++) {
                    var o = l._getParentFromElement(n[i]);
                    var a = v(n[i]).data(Re);
                    var s = {
                        relatedTarget: n[i]
                    };
                    if (t && t.type === "click")
                        s.clickEvent = t;
                    if (!a)
                        continue;
                    var c = a._menu;
                    if (!v(o).hasClass(m.SHOW))
                        continue;
                    if (t && (t.type === "click" && /input|textarea/i.test(t.target.tagName) || t.type === "keyup" && t.which === He) && v.contains(o, t.target))
                        continue;
                    var u = v.Event(h.HIDE, s);
                    v(o).trigger(u);
                    if (u.isDefaultPrevented())
                        continue;
                    if ("ontouchstart"in document.documentElement)
                        v(document.body).children().off("mouseover", null, v.noop);
                    n[i].setAttribute("aria-expanded", "false");
                    v(c).removeClass(m.SHOW);
                    v(o).removeClass(m.SHOW).trigger(v.Event(h.HIDDEN, s))
                }
            }
            ;
            l._getParentFromElement = function e(t) {
                var n;
                var i = g.getSelectorFromElement(t);
                if (i)
                    n = document.querySelector(i);
                return n || t.parentNode
            }
            ;
            l._dataApiKeydownHandler = function e(t) {
                if (/input|textarea/i.test(t.target.tagName) ? t.which === Ue || t.which !== Be && (t.which !== We && t.which !== qe || v(t.target).closest(E.MENU).length) : !ze.test(t.which))
                    return;
                t.preventDefault();
                t.stopPropagation();
                if (this.disabled || v(this).hasClass(m.DISABLED))
                    return;
                var n = l._getParentFromElement(this);
                var i = v(n).hasClass(m.SHOW);
                if (!i || i && (t.which === Be || t.which === Ue)) {
                    if (t.which === Be) {
                        var r = n.querySelector(E.DATA_TOGGLE);
                        v(r).trigger("focus")
                    }
                    v(this).trigger("click");
                    return
                }
                var o = [].slice.call(n.querySelectorAll(E.VISIBLE_ITEMS));
                if (o.length === 0)
                    return;
                var a = o.indexOf(t.target);
                if (t.which === qe && a > 0)
                    a--;
                if (t.which === We && a < o.length - 1)
                    a++;
                if (a < 0)
                    a = 0;
                o[a].focus()
            }
            ;
            o(l, null, [{
                key: "VERSION",
                get: function e() {
                    return Ne
                }
            }, {
                key: "Default",
                get: function e() {
                    return Ye
                }
            }, {
                key: "DefaultType",
                get: function e() {
                    return Ke
                }
            }]);
            return l
        }(), Xe = (v(document).on(h.KEYDOWN_DATA_API, E.DATA_TOGGLE, i._dataApiKeydownHandler).on(h.KEYDOWN_DATA_API, E.MENU, i._dataApiKeydownHandler).on(h.CLICK_DATA_API + " " + h.KEYUP_DATA_API, i._clearMenus).on(h.CLICK_DATA_API, E.DATA_TOGGLE, function(e) {
            e.preventDefault();
            e.stopPropagation();
            i._jQueryInterface.call(v(this), "toggle")
        }).on(h.CLICK_DATA_API, E.FORM_CHILD, function(e) {
            e.stopPropagation()
        }),
        v.fn[De] = i._jQueryInterface,
        v.fn[De].Constructor = i,
        v.fn[De].noConflict = function() {
            v.fn[De] = Fe;
            return i._jQueryInterface
        }
        ,
        "modal"), Qe = "4.2.1", $e = "bs.modal", u = "." + $e, Je, Ze = v.fn[Xe], et = 27, tt = {
            backdrop: true,
            keyboard: true,
            focus: true,
            show: true
        }, nt = {
            backdrop: "(boolean|string)",
            keyboard: "boolean",
            focus: "boolean",
            show: "boolean"
        }, l = {
            HIDE: "hide" + u,
            HIDDEN: "hidden" + u,
            SHOW: "show" + u,
            SHOWN: "shown" + u,
            FOCUSIN: "focusin" + u,
            RESIZE: "resize" + u,
            CLICK_DISMISS: "click.dismiss" + u,
            KEYDOWN_DISMISS: "keydown.dismiss" + u,
            MOUSEUP_DISMISS: "mouseup.dismiss" + u,
            MOUSEDOWN_DISMISS: "mousedown.dismiss" + u,
            CLICK_DATA_API: "click" + u + ".data-api"
        }, S = {
            SCROLLBAR_MEASURER: "modal-scrollbar-measure",
            BACKDROP: "modal-backdrop",
            OPEN: "modal-open",
            FADE: "fade",
            SHOW: "show"
        }, T = {
            DIALOG: ".modal-dialog",
            DATA_TOGGLE: '[data-toggle="modal"]',
            DATA_DISMISS: '[data-dismiss="modal"]',
            FIXED_CONTENT: ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
            STICKY_CONTENT: ".sticky-top"
        }, it = function() {
            function r(e, t) {
                this._config = this._getConfig(t);
                this._element = e;
                this._dialog = e.querySelector(T.DIALOG);
                this._backdrop = null;
                this._isShown = false;
                this._isBodyOverflowing = false;
                this._ignoreBackdropClick = false;
                this._isTransitioning = false;
                this._scrollbarWidth = 0
            }
            var e = r.prototype;
            e.toggle = function e(t) {
                return this._isShown ? this.hide() : this.show(t)
            }
            ;
            e.show = function e(t) {
                var n = this;
                if (this._isShown || this._isTransitioning)
                    return;
                if (v(this._element).hasClass(S.FADE))
                    this._isTransitioning = true;
                var i = v.Event(l.SHOW, {
                    relatedTarget: t
                });
                v(this._element).trigger(i);
                if (this._isShown || i.isDefaultPrevented())
                    return;
                this._isShown = true;
                this._checkScrollbar();
                this._setScrollbar();
                this._adjustDialog();
                this._setEscapeEvent();
                this._setResizeEvent();
                v(this._element).on(l.CLICK_DISMISS, T.DATA_DISMISS, function(e) {
                    return n.hide(e)
                });
                v(this._dialog).on(l.MOUSEDOWN_DISMISS, function() {
                    v(n._element).one(l.MOUSEUP_DISMISS, function(e) {
                        if (v(e.target).is(n._element))
                            n._ignoreBackdropClick = true
                    })
                });
                this._showBackdrop(function() {
                    return n._showElement(t)
                })
            }
            ;
            e.hide = function e(t) {
                var n = this;
                if (t)
                    t.preventDefault();
                if (!this._isShown || this._isTransitioning)
                    return;
                var i = v.Event(l.HIDE);
                v(this._element).trigger(i);
                if (!this._isShown || i.isDefaultPrevented())
                    return;
                this._isShown = false;
                var r = v(this._element).hasClass(S.FADE);
                if (r)
                    this._isTransitioning = true;
                this._setEscapeEvent();
                this._setResizeEvent();
                v(document).off(l.FOCUSIN);
                v(this._element).removeClass(S.SHOW);
                v(this._element).off(l.CLICK_DISMISS);
                v(this._dialog).off(l.MOUSEDOWN_DISMISS);
                if (r) {
                    var o = g.getTransitionDurationFromElement(this._element);
                    v(this._element).one(g.TRANSITION_END, function(e) {
                        return n._hideModal(e)
                    }).emulateTransitionEnd(o)
                } else
                    this._hideModal()
            }
            ;
            e.dispose = function e() {
                [window, this._element, this._dialog].forEach(function(e) {
                    return v(e).off(u)
                });
                v(document).off(l.FOCUSIN);
                v.removeData(this._element, $e);
                this._config = null;
                this._element = null;
                this._dialog = null;
                this._backdrop = null;
                this._isShown = null;
                this._isBodyOverflowing = null;
                this._ignoreBackdropClick = null;
                this._isTransitioning = null;
                this._scrollbarWidth = null
            }
            ;
            e.handleUpdate = function e() {
                this._adjustDialog()
            }
            ;
            e._getConfig = function e(t) {
                t = s({}, tt, t);
                g.typeCheckConfig(Xe, t, nt);
                return t
            }
            ;
            e._showElement = function e(t) {
                var n = this;
                var i = v(this._element).hasClass(S.FADE);
                if (!this._element.parentNode || this._element.parentNode.nodeType !== Node.ELEMENT_NODE)
                    document.body.appendChild(this._element);
                this._element.style.display = "block";
                this._element.removeAttribute("aria-hidden");
                this._element.setAttribute("aria-modal", true);
                this._element.scrollTop = 0;
                if (i)
                    g.reflow(this._element);
                v(this._element).addClass(S.SHOW);
                if (this._config.focus)
                    this._enforceFocus();
                var r = v.Event(l.SHOWN, {
                    relatedTarget: t
                });
                var o = function e() {
                    if (n._config.focus)
                        n._element.focus();
                    n._isTransitioning = false;
                    v(n._element).trigger(r)
                };
                if (i) {
                    var a = g.getTransitionDurationFromElement(this._dialog);
                    v(this._dialog).one(g.TRANSITION_END, o).emulateTransitionEnd(a)
                } else
                    o()
            }
            ;
            e._enforceFocus = function e() {
                var t = this;
                v(document).off(l.FOCUSIN).on(l.FOCUSIN, function(e) {
                    if (document !== e.target && t._element !== e.target && v(t._element).has(e.target).length === 0)
                        t._element.focus()
                })
            }
            ;
            e._setEscapeEvent = function e() {
                var t = this;
                if (this._isShown && this._config.keyboard)
                    v(this._element).on(l.KEYDOWN_DISMISS, function(e) {
                        if (e.which === et) {
                            e.preventDefault();
                            t.hide()
                        }
                    });
                else if (!this._isShown)
                    v(this._element).off(l.KEYDOWN_DISMISS)
            }
            ;
            e._setResizeEvent = function e() {
                var t = this;
                if (this._isShown)
                    v(window).on(l.RESIZE, function(e) {
                        return t.handleUpdate(e)
                    });
                else
                    v(window).off(l.RESIZE)
            }
            ;
            e._hideModal = function e() {
                var t = this;
                this._element.style.display = "none";
                this._element.setAttribute("aria-hidden", true);
                this._element.removeAttribute("aria-modal");
                this._isTransitioning = false;
                this._showBackdrop(function() {
                    v(document.body).removeClass(S.OPEN);
                    t._resetAdjustments();
                    t._resetScrollbar();
                    v(t._element).trigger(l.HIDDEN)
                })
            }
            ;
            e._removeBackdrop = function e() {
                if (this._backdrop) {
                    v(this._backdrop).remove();
                    this._backdrop = null
                }
            }
            ;
            e._showBackdrop = function e(t) {
                var n = this;
                var i = v(this._element).hasClass(S.FADE) ? S.FADE : "";
                if (this._isShown && this._config.backdrop) {
                    this._backdrop = document.createElement("div");
                    this._backdrop.className = S.BACKDROP;
                    if (i)
                        this._backdrop.classList.add(i);
                    v(this._backdrop).appendTo(document.body);
                    v(this._element).on(l.CLICK_DISMISS, function(e) {
                        if (n._ignoreBackdropClick) {
                            n._ignoreBackdropClick = false;
                            return
                        }
                        if (e.target !== e.currentTarget)
                            return;
                        if (n._config.backdrop === "static")
                            n._element.focus();
                        else
                            n.hide()
                    });
                    if (i)
                        g.reflow(this._backdrop);
                    v(this._backdrop).addClass(S.SHOW);
                    if (!t)
                        return;
                    if (!i) {
                        t();
                        return
                    }
                    var r = g.getTransitionDurationFromElement(this._backdrop);
                    v(this._backdrop).one(g.TRANSITION_END, t).emulateTransitionEnd(r)
                } else if (!this._isShown && this._backdrop) {
                    v(this._backdrop).removeClass(S.SHOW);
                    var o = function e() {
                        n._removeBackdrop();
                        if (t)
                            t()
                    };
                    if (v(this._element).hasClass(S.FADE)) {
                        var a = g.getTransitionDurationFromElement(this._backdrop);
                        v(this._backdrop).one(g.TRANSITION_END, o).emulateTransitionEnd(a)
                    } else
                        o()
                } else if (t)
                    t()
            }
            ;
            e._adjustDialog = function e() {
                var t = this._element.scrollHeight > document.documentElement.clientHeight;
                if (!this._isBodyOverflowing && t)
                    this._element.style.paddingLeft = this._scrollbarWidth + "px";
                if (this._isBodyOverflowing && !t)
                    this._element.style.paddingRight = this._scrollbarWidth + "px"
            }
            ;
            e._resetAdjustments = function e() {
                this._element.style.paddingLeft = "";
                this._element.style.paddingRight = ""
            }
            ;
            e._checkScrollbar = function e() {
                var t = document.body.getBoundingClientRect();
                this._isBodyOverflowing = t.left + t.right < window.innerWidth;
                this._scrollbarWidth = this._getScrollbarWidth()
            }
            ;
            e._setScrollbar = function e() {
                var r = this;
                if (this._isBodyOverflowing) {
                    var t = [].slice.call(document.querySelectorAll(T.FIXED_CONTENT));
                    var n = [].slice.call(document.querySelectorAll(T.STICKY_CONTENT));
                    v(t).each(function(e, t) {
                        var n = t.style.paddingRight;
                        var i = v(t).css("padding-right");
                        v(t).data("padding-right", n).css("padding-right", parseFloat(i) + r._scrollbarWidth + "px")
                    });
                    v(n).each(function(e, t) {
                        var n = t.style.marginRight;
                        var i = v(t).css("margin-right");
                        v(t).data("margin-right", n).css("margin-right", parseFloat(i) - r._scrollbarWidth + "px")
                    });
                    var i = document.body.style.paddingRight;
                    var o = v(document.body).css("padding-right");
                    v(document.body).data("padding-right", i).css("padding-right", parseFloat(o) + this._scrollbarWidth + "px")
                }
                v(document.body).addClass(S.OPEN)
            }
            ;
            e._resetScrollbar = function e() {
                var t = [].slice.call(document.querySelectorAll(T.FIXED_CONTENT));
                v(t).each(function(e, t) {
                    var n = v(t).data("padding-right");
                    v(t).removeData("padding-right");
                    t.style.paddingRight = n ? n : ""
                });
                var n = [].slice.call(document.querySelectorAll("" + T.STICKY_CONTENT));
                v(n).each(function(e, t) {
                    var n = v(t).data("margin-right");
                    if (typeof n !== "undefined")
                        v(t).css("margin-right", n).removeData("margin-right")
                });
                var i = v(document.body).data("padding-right");
                v(document.body).removeData("padding-right");
                document.body.style.paddingRight = i ? i : ""
            }
            ;
            e._getScrollbarWidth = function e() {
                var t = document.createElement("div");
                t.className = S.SCROLLBAR_MEASURER;
                document.body.appendChild(t);
                var n = t.getBoundingClientRect().width - t.clientWidth;
                document.body.removeChild(t);
                return n
            }
            ;
            r._jQueryInterface = function e(n, i) {
                return this.each(function() {
                    var e = v(this).data($e);
                    var t = s({}, tt, v(this).data(), typeof n === "object" && n ? n : {});
                    if (!e) {
                        e = new r(this,t);
                        v(this).data($e, e)
                    }
                    if (typeof n === "string") {
                        if (typeof e[n] === "undefined")
                            throw new TypeError('No method named "' + n + '"');
                        e[n](i)
                    } else if (t.show)
                        e.show(i)
                })
            }
            ;
            o(r, null, [{
                key: "VERSION",
                get: function e() {
                    return Qe
                }
            }, {
                key: "Default",
                get: function e() {
                    return tt
                }
            }]);
            return r
        }(), r = (v(document).on(l.CLICK_DATA_API, T.DATA_TOGGLE, function(e) {
            var t = this;
            var n;
            var i = g.getSelectorFromElement(this);
            if (i)
                n = document.querySelector(i);
            var r = v(n).data($e) ? "toggle" : s({}, v(n).data(), v(this).data());
            if (this.tagName === "A" || this.tagName === "AREA")
                e.preventDefault();
            var o = v(n).one(l.SHOW, function(e) {
                if (e.isDefaultPrevented())
                    return;
                o.one(l.HIDDEN, function() {
                    if (v(t).is(":visible"))
                        t.focus()
                })
            });
            it._jQueryInterface.call(v(n), r, this)
        }),
        v.fn[Xe] = it._jQueryInterface,
        v.fn[Xe].Constructor = it,
        v.fn[Xe].noConflict = function() {
            v.fn[Xe] = Ze;
            return it._jQueryInterface
        }
        ,
        "tooltip"), rt = "4.2.1", ot = "bs.tooltip", O = "." + ot, at = v.fn[r], st = "bs-tooltip", ct = new RegExp("(^|\\s)" + st + "\\S+","g"), ut = {
            animation: "boolean",
            template: "string",
            title: "(string|element|function)",
            trigger: "string",
            delay: "(number|object)",
            html: "boolean",
            selector: "(string|boolean)",
            placement: "(string|function)",
            offset: "(number|string)",
            container: "(string|element|boolean)",
            fallbackPlacement: "(string|array)",
            boundary: "(string|element)"
        }, lt = {
            AUTO: "auto",
            TOP: "top",
            RIGHT: "right",
            BOTTOM: "bottom",
            LEFT: "left"
        }, dt = {
            animation: true,
            template: '<div class="tooltip" role="tooltip">' + '<div class="arrow"></div>' + '<div class="tooltip-inner"></div></div>',
            trigger: "hover focus",
            title: "",
            delay: 0,
            html: false,
            selector: false,
            placement: "top",
            offset: 0,
            container: false,
            fallbackPlacement: "flip",
            boundary: "scrollParent"
        }, x = {
            SHOW: "show",
            OUT: "out"
        }, ft = {
            HIDE: "hide" + O,
            HIDDEN: "hidden" + O,
            SHOW: "show" + O,
            SHOWN: "shown" + O,
            INSERTED: "inserted" + O,
            CLICK: "click" + O,
            FOCUSIN: "focusin" + O,
            FOCUSOUT: "focusout" + O,
            MOUSEENTER: "mouseenter" + O,
            MOUSELEAVE: "mouseleave" + O
        }, C = {
            FADE: "fade",
            SHOW: "show"
        }, pt = {
            TOOLTIP: ".tooltip",
            TOOLTIP_INNER: ".tooltip-inner",
            ARROW: ".arrow"
        }, A = {
            HOVER: "hover",
            FOCUS: "focus",
            CLICK: "click",
            MANUAL: "manual"
        }, P = function() {
            function i(e, t) {
                if (typeof f === "undefined")
                    throw new TypeError("Bootstrap's tooltips require Popper.js (https://popper.js.org/)");
                this._isEnabled = true;
                this._timeout = 0;
                this._hoverState = "";
                this._activeTrigger = {};
                this._popper = null;
                this.element = e;
                this.config = this._getConfig(t);
                this.tip = null;
                this._setListeners()
            }
            var e = i.prototype;
            e.enable = function e() {
                this._isEnabled = true
            }
            ;
            e.disable = function e() {
                this._isEnabled = false
            }
            ;
            e.toggleEnabled = function e() {
                this._isEnabled = !this._isEnabled
            }
            ;
            e.toggle = function e(t) {
                if (!this._isEnabled)
                    return;
                if (t) {
                    var n = this.constructor.DATA_KEY;
                    var i = v(t.currentTarget).data(n);
                    if (!i) {
                        i = new this.constructor(t.currentTarget,this._getDelegateConfig());
                        v(t.currentTarget).data(n, i)
                    }
                    i._activeTrigger.click = !i._activeTrigger.click;
                    if (i._isWithActiveTrigger())
                        i._enter(null, i);
                    else
                        i._leave(null, i)
                } else {
                    if (v(this.getTipElement()).hasClass(C.SHOW)) {
                        this._leave(null, this);
                        return
                    }
                    this._enter(null, this)
                }
            }
            ;
            e.dispose = function e() {
                clearTimeout(this._timeout);
                v.removeData(this.element, this.constructor.DATA_KEY);
                v(this.element).off(this.constructor.EVENT_KEY);
                v(this.element).closest(".modal").off("hide.bs.modal");
                if (this.tip)
                    v(this.tip).remove();
                this._isEnabled = null;
                this._timeout = null;
                this._hoverState = null;
                this._activeTrigger = null;
                if (this._popper !== null)
                    this._popper.destroy();
                this._popper = null;
                this.element = null;
                this.config = null;
                this.tip = null
            }
            ;
            e.show = function e() {
                var n = this;
                if (v(this.element).css("display") === "none")
                    throw new Error("Please use show on visible elements");
                var t = v.Event(this.constructor.Event.SHOW);
                if (this.isWithContent() && this._isEnabled) {
                    v(this.element).trigger(t);
                    var i = g.findShadowRoot(this.element);
                    var r = v.contains(i !== null ? i : this.element.ownerDocument.documentElement, this.element);
                    if (t.isDefaultPrevented() || !r)
                        return;
                    var o = this.getTipElement();
                    var a = g.getUID(this.constructor.NAME);
                    o.setAttribute("id", a);
                    this.element.setAttribute("aria-describedby", a);
                    this.setContent();
                    if (this.config.animation)
                        v(o).addClass(C.FADE);
                    var s = typeof this.config.placement === "function" ? this.config.placement.call(this, o, this.element) : this.config.placement;
                    var c = this._getAttachment(s);
                    this.addAttachmentClass(c);
                    var u = this._getContainer();
                    v(o).data(this.constructor.DATA_KEY, this);
                    if (!v.contains(this.element.ownerDocument.documentElement, this.tip))
                        v(o).appendTo(u);
                    v(this.element).trigger(this.constructor.Event.INSERTED);
                    this._popper = new f(this.element,o,{
                        placement: c,
                        modifiers: {
                            offset: {
                                offset: this.config.offset
                            },
                            flip: {
                                behavior: this.config.fallbackPlacement
                            },
                            arrow: {
                                element: pt.ARROW
                            },
                            preventOverflow: {
                                boundariesElement: this.config.boundary
                            }
                        },
                        onCreate: function e(t) {
                            if (t.originalPlacement !== t.placement)
                                n._handlePopperPlacementChange(t)
                        },
                        onUpdate: function e(t) {
                            return n._handlePopperPlacementChange(t)
                        }
                    });
                    v(o).addClass(C.SHOW);
                    if ("ontouchstart"in document.documentElement)
                        v(document.body).children().on("mouseover", null, v.noop);
                    var l = function e() {
                        if (n.config.animation)
                            n._fixTransition();
                        var t = n._hoverState;
                        n._hoverState = null;
                        v(n.element).trigger(n.constructor.Event.SHOWN);
                        if (t === x.OUT)
                            n._leave(null, n)
                    };
                    if (v(this.tip).hasClass(C.FADE)) {
                        var d = g.getTransitionDurationFromElement(this.tip);
                        v(this.tip).one(g.TRANSITION_END, l).emulateTransitionEnd(d)
                    } else
                        l()
                }
            }
            ;
            e.hide = function e(t) {
                var n = this;
                var i = this.getTipElement();
                var r = v.Event(this.constructor.Event.HIDE);
                var o = function e() {
                    if (n._hoverState !== x.SHOW && i.parentNode)
                        i.parentNode.removeChild(i);
                    n._cleanTipClass();
                    n.element.removeAttribute("aria-describedby");
                    v(n.element).trigger(n.constructor.Event.HIDDEN);
                    if (n._popper !== null)
                        n._popper.destroy();
                    if (t)
                        t()
                };
                v(this.element).trigger(r);
                if (r.isDefaultPrevented())
                    return;
                v(i).removeClass(C.SHOW);
                if ("ontouchstart"in document.documentElement)
                    v(document.body).children().off("mouseover", null, v.noop);
                this._activeTrigger[A.CLICK] = false;
                this._activeTrigger[A.FOCUS] = false;
                this._activeTrigger[A.HOVER] = false;
                if (v(this.tip).hasClass(C.FADE)) {
                    var a = g.getTransitionDurationFromElement(i);
                    v(i).one(g.TRANSITION_END, o).emulateTransitionEnd(a)
                } else
                    o();
                this._hoverState = ""
            }
            ;
            e.update = function e() {
                if (this._popper !== null)
                    this._popper.scheduleUpdate()
            }
            ;
            e.isWithContent = function e() {
                return Boolean(this.getTitle())
            }
            ;
            e.addAttachmentClass = function e(t) {
                v(this.getTipElement()).addClass(st + "-" + t)
            }
            ;
            e.getTipElement = function e() {
                this.tip = this.tip || v(this.config.template)[0];
                return this.tip
            }
            ;
            e.setContent = function e() {
                var t = this.getTipElement();
                this.setElementContent(v(t.querySelectorAll(pt.TOOLTIP_INNER)), this.getTitle());
                v(t).removeClass(C.FADE + " " + C.SHOW)
            }
            ;
            e.setElementContent = function e(t, n) {
                var i = this.config.html;
                if (typeof n === "object" && (n.nodeType || n.jquery))
                    if (i) {
                        if (!v(n).parent().is(t))
                            t.empty().append(n)
                    } else
                        t.text(v(n).text());
                else
                    t[i ? "html" : "text"](n)
            }
            ;
            e.getTitle = function e() {
                var t = this.element.getAttribute("data-original-title");
                if (!t)
                    t = typeof this.config.title === "function" ? this.config.title.call(this.element) : this.config.title;
                return t
            }
            ;
            e._getContainer = function e() {
                if (this.config.container === false)
                    return document.body;
                if (g.isElement(this.config.container))
                    return v(this.config.container);
                return v(document).find(this.config.container)
            }
            ;
            e._getAttachment = function e(t) {
                return lt[t.toUpperCase()]
            }
            ;
            e._setListeners = function e() {
                var i = this;
                var t = this.config.trigger.split(" ");
                t.forEach(function(e) {
                    if (e === "click")
                        v(i.element).on(i.constructor.Event.CLICK, i.config.selector, function(e) {
                            return i.toggle(e)
                        });
                    else if (e !== A.MANUAL) {
                        var t = e === A.HOVER ? i.constructor.Event.MOUSEENTER : i.constructor.Event.FOCUSIN;
                        var n = e === A.HOVER ? i.constructor.Event.MOUSELEAVE : i.constructor.Event.FOCUSOUT;
                        v(i.element).on(t, i.config.selector, function(e) {
                            return i._enter(e)
                        }).on(n, i.config.selector, function(e) {
                            return i._leave(e)
                        })
                    }
                });
                v(this.element).closest(".modal").on("hide.bs.modal", function() {
                    if (i.element)
                        i.hide()
                });
                if (this.config.selector)
                    this.config = s({}, this.config, {
                        trigger: "manual",
                        selector: ""
                    });
                else
                    this._fixTitle()
            }
            ;
            e._fixTitle = function e() {
                var t = typeof this.element.getAttribute("data-original-title");
                if (this.element.getAttribute("title") || t !== "string") {
                    this.element.setAttribute("data-original-title", this.element.getAttribute("title") || "");
                    this.element.setAttribute("title", "")
                }
            }
            ;
            e._enter = function e(t, n) {
                var i = this.constructor.DATA_KEY;
                n = n || v(t.currentTarget).data(i);
                if (!n) {
                    n = new this.constructor(t.currentTarget,this._getDelegateConfig());
                    v(t.currentTarget).data(i, n)
                }
                if (t)
                    n._activeTrigger[t.type === "focusin" ? A.FOCUS : A.HOVER] = true;
                if (v(n.getTipElement()).hasClass(C.SHOW) || n._hoverState === x.SHOW) {
                    n._hoverState = x.SHOW;
                    return
                }
                clearTimeout(n._timeout);
                n._hoverState = x.SHOW;
                if (!n.config.delay || !n.config.delay.show) {
                    n.show();
                    return
                }
                n._timeout = setTimeout(function() {
                    if (n._hoverState === x.SHOW)
                        n.show()
                }, n.config.delay.show)
            }
            ;
            e._leave = function e(t, n) {
                var i = this.constructor.DATA_KEY;
                n = n || v(t.currentTarget).data(i);
                if (!n) {
                    n = new this.constructor(t.currentTarget,this._getDelegateConfig());
                    v(t.currentTarget).data(i, n)
                }
                if (t)
                    n._activeTrigger[t.type === "focusout" ? A.FOCUS : A.HOVER] = false;
                if (n._isWithActiveTrigger())
                    return;
                clearTimeout(n._timeout);
                n._hoverState = x.OUT;
                if (!n.config.delay || !n.config.delay.hide) {
                    n.hide();
                    return
                }
                n._timeout = setTimeout(function() {
                    if (n._hoverState === x.OUT)
                        n.hide()
                }, n.config.delay.hide)
            }
            ;
            e._isWithActiveTrigger = function e() {
                for (var t in this._activeTrigger)
                    if (this._activeTrigger[t])
                        return true;
                return false
            }
            ;
            e._getConfig = function e(t) {
                t = s({}, this.constructor.Default, v(this.element).data(), typeof t === "object" && t ? t : {});
                if (typeof t.delay === "number")
                    t.delay = {
                        show: t.delay,
                        hide: t.delay
                    };
                if (typeof t.title === "number")
                    t.title = t.title.toString();
                if (typeof t.content === "number")
                    t.content = t.content.toString();
                g.typeCheckConfig(r, t, this.constructor.DefaultType);
                return t
            }
            ;
            e._getDelegateConfig = function e() {
                var t = {};
                if (this.config)
                    for (var n in this.config)
                        if (this.constructor.Default[n] !== this.config[n])
                            t[n] = this.config[n];
                return t
            }
            ;
            e._cleanTipClass = function e() {
                var t = v(this.getTipElement());
                var n = t.attr("class").match(ct);
                if (n !== null && n.length)
                    t.removeClass(n.join(""))
            }
            ;
            e._handlePopperPlacementChange = function e(t) {
                var n = t.instance;
                this.tip = n.popper;
                this._cleanTipClass();
                this.addAttachmentClass(this._getAttachment(t.placement))
            }
            ;
            e._fixTransition = function e() {
                var t = this.getTipElement();
                var n = this.config.animation;
                if (t.getAttribute("x-placement") !== null)
                    return;
                v(t).removeClass(C.FADE);
                this.config.animation = false;
                this.hide();
                this.show();
                this.config.animation = n
            }
            ;
            i._jQueryInterface = function e(n) {
                return this.each(function() {
                    var e = v(this).data(ot);
                    var t = typeof n === "object" && n;
                    if (!e && /dispose|hide/.test(n))
                        return;
                    if (!e) {
                        e = new i(this,t);
                        v(this).data(ot, e)
                    }
                    if (typeof n === "string") {
                        if (typeof e[n] === "undefined")
                            throw new TypeError('No method named "' + n + '"');
                        e[n]()
                    }
                })
            }
            ;
            o(i, null, [{
                key: "VERSION",
                get: function e() {
                    return rt
                }
            }, {
                key: "Default",
                get: function e() {
                    return dt
                }
            }, {
                key: "NAME",
                get: function e() {
                    return r
                }
            }, {
                key: "DATA_KEY",
                get: function e() {
                    return ot
                }
            }, {
                key: "Event",
                get: function e() {
                    return ft
                }
            }, {
                key: "EVENT_KEY",
                get: function e() {
                    return O
                }
            }, {
                key: "DefaultType",
                get: function e() {
                    return ut
                }
            }]);
            return i
        }(), ht = (v.fn[r] = P._jQueryInterface,
        v.fn[r].Constructor = P,
        v.fn[r].noConflict = function() {
            v.fn[r] = at;
            return P._jQueryInterface
        }
        ,
        "popover"), mt = "4.2.1", vt = "bs.popover", I = "." + vt, gt = v.fn[ht], yt = "bs-popover", _t = new RegExp("(^|\\s)" + yt + "\\S+","g"), bt = s({}, P.Default, {
            placement: "right",
            trigger: "click",
            content: "",
            template: '<div class="popover" role="tooltip">' + '<div class="arrow"></div>' + '<h3 class="popover-header"></h3>' + '<div class="popover-body"></div></div>'
        }), wt = s({}, P.DefaultType, {
            content: "(string|element|function)"
        }), Et = {
            FADE: "fade",
            SHOW: "show"
        }, St = {
            TITLE: ".popover-header",
            CONTENT: ".popover-body"
        }, Tt = {
            HIDE: "hide" + I,
            HIDDEN: "hidden" + I,
            SHOW: "show" + I,
            SHOWN: "shown" + I,
            INSERTED: "inserted" + I,
            CLICK: "click" + I,
            FOCUSIN: "focusin" + I,
            FOCUSOUT: "focusout" + I,
            MOUSEENTER: "mouseenter" + I,
            MOUSELEAVE: "mouseleave" + I
        }, Ot = function(e) {
            F(i, e);
            function i() {
                return e.apply(this, arguments) || this
            }
            var t = i.prototype;
            t.isWithContent = function e() {
                return this.getTitle() || this._getContent()
            }
            ;
            t.addAttachmentClass = function e(t) {
                v(this.getTipElement()).addClass(yt + "-" + t)
            }
            ;
            t.getTipElement = function e() {
                this.tip = this.tip || v(this.config.template)[0];
                return this.tip
            }
            ;
            t.setContent = function e() {
                var t = v(this.getTipElement());
                this.setElementContent(t.find(St.TITLE), this.getTitle());
                var n = this._getContent();
                if (typeof n === "function")
                    n = n.call(this.element);
                this.setElementContent(t.find(St.CONTENT), n);
                t.removeClass(Et.FADE + " " + Et.SHOW)
            }
            ;
            t._getContent = function e() {
                return this.element.getAttribute("data-content") || this.config.content
            }
            ;
            t._cleanTipClass = function e() {
                var t = v(this.getTipElement());
                var n = t.attr("class").match(_t);
                if (n !== null && n.length > 0)
                    t.removeClass(n.join(""))
            }
            ;
            i._jQueryInterface = function e(n) {
                return this.each(function() {
                    var e = v(this).data(vt);
                    var t = typeof n === "object" ? n : null;
                    if (!e && /dispose|hide/.test(n))
                        return;
                    if (!e) {
                        e = new i(this,t);
                        v(this).data(vt, e)
                    }
                    if (typeof n === "string") {
                        if (typeof e[n] === "undefined")
                            throw new TypeError('No method named "' + n + '"');
                        e[n]()
                    }
                })
            }
            ;
            o(i, null, [{
                key: "VERSION",
                get: function e() {
                    return mt
                }
            }, {
                key: "Default",
                get: function e() {
                    return bt
                }
            }, {
                key: "NAME",
                get: function e() {
                    return ht
                }
            }, {
                key: "DATA_KEY",
                get: function e() {
                    return vt
                }
            }, {
                key: "Event",
                get: function e() {
                    return Tt
                }
            }, {
                key: "EVENT_KEY",
                get: function e() {
                    return I
                }
            }, {
                key: "DefaultType",
                get: function e() {
                    return wt
                }
            }]);
            return i
        }(P), xt = (v.fn[ht] = Ot._jQueryInterface,
        v.fn[ht].Constructor = Ot,
        v.fn[ht].noConflict = function() {
            v.fn[ht] = gt;
            return Ot._jQueryInterface
        }
        ,
        "scrollspy"), Ct = "4.2.1", At = "bs.scrollspy", Pt = "." + At, It, kt = v.fn[xt], Lt = {
            offset: 10,
            method: "auto",
            target: ""
        }, jt = {
            offset: "number",
            method: "string",
            target: "(string|element)"
        }, Dt = {
            ACTIVATE: "activate" + Pt,
            SCROLL: "scroll" + Pt,
            LOAD_DATA_API: "load" + Pt + ".data-api"
        }, k = {
            DROPDOWN_ITEM: "dropdown-item",
            DROPDOWN_MENU: "dropdown-menu",
            ACTIVE: "active"
        }, L = {
            DATA_SPY: '[data-spy="scroll"]',
            ACTIVE: ".active",
            NAV_LIST_GROUP: ".nav, .list-group",
            NAV_LINKS: ".nav-link",
            NAV_ITEMS: ".nav-item",
            LIST_ITEMS: ".list-group-item",
            DROPDOWN: ".dropdown",
            DROPDOWN_ITEMS: ".dropdown-item",
            DROPDOWN_TOGGLE: ".dropdown-toggle"
        }, Nt = {
            OFFSET: "offset",
            POSITION: "position"
        }, Rt = function() {
            function i(e, t) {
                var n = this;
                this._element = e;
                this._scrollElement = e.tagName === "BODY" ? window : e;
                this._config = this._getConfig(t);
                this._selector = this._config.target + " " + L.NAV_LINKS + "," + (this._config.target + " " + L.LIST_ITEMS + ",") + (this._config.target + " " + L.DROPDOWN_ITEMS);
                this._offsets = [];
                this._targets = [];
                this._activeTarget = null;
                this._scrollHeight = 0;
                v(this._scrollElement).on(Dt.SCROLL, function(e) {
                    return n._process(e)
                });
                this.refresh();
                this._process()
            }
            var e = i.prototype;
            e.refresh = function e() {
                var t = this;
                var n = this._scrollElement === this._scrollElement.window ? Nt.OFFSET : Nt.POSITION;
                var r = this._config.method === "auto" ? n : this._config.method;
                var o = r === Nt.POSITION ? this._getScrollTop() : 0;
                this._offsets = [];
                this._targets = [];
                this._scrollHeight = this._getScrollHeight();
                var i = [].slice.call(document.querySelectorAll(this._selector));
                i.map(function(e) {
                    var t;
                    var n = g.getSelectorFromElement(e);
                    if (n)
                        t = document.querySelector(n);
                    if (t) {
                        var i = t.getBoundingClientRect();
                        if (i.width || i.height)
                            return [v(t)[r]().top + o, n]
                    }
                    return null
                }).filter(function(e) {
                    return e
                }).sort(function(e, t) {
                    return e[0] - t[0]
                }).forEach(function(e) {
                    t._offsets.push(e[0]);
                    t._targets.push(e[1])
                })
            }
            ;
            e.dispose = function e() {
                v.removeData(this._element, At);
                v(this._scrollElement).off(Pt);
                this._element = null;
                this._scrollElement = null;
                this._config = null;
                this._selector = null;
                this._offsets = null;
                this._targets = null;
                this._activeTarget = null;
                this._scrollHeight = null
            }
            ;
            e._getConfig = function e(t) {
                t = s({}, Lt, typeof t === "object" && t ? t : {});
                if (typeof t.target !== "string") {
                    var n = v(t.target).attr("id");
                    if (!n) {
                        n = g.getUID(xt);
                        v(t.target).attr("id", n)
                    }
                    t.target = "#" + n
                }
                g.typeCheckConfig(xt, t, jt);
                return t
            }
            ;
            e._getScrollTop = function e() {
                return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
            }
            ;
            e._getScrollHeight = function e() {
                return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
            }
            ;
            e._getOffsetHeight = function e() {
                return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height
            }
            ;
            e._process = function e() {
                var t = this._getScrollTop() + this._config.offset;
                var n = this._getScrollHeight();
                var i = this._config.offset + n - this._getOffsetHeight();
                if (this._scrollHeight !== n)
                    this.refresh();
                if (t >= i) {
                    var r = this._targets[this._targets.length - 1];
                    if (this._activeTarget !== r)
                        this._activate(r);
                    return
                }
                if (this._activeTarget && t < this._offsets[0] && this._offsets[0] > 0) {
                    this._activeTarget = null;
                    this._clear();
                    return
                }
                var o = this._offsets.length;
                for (var a = o; a--; ) {
                    var s = this._activeTarget !== this._targets[a] && t >= this._offsets[a] && (typeof this._offsets[a + 1] === "undefined" || t < this._offsets[a + 1]);
                    if (s)
                        this._activate(this._targets[a])
                }
            }
            ;
            e._activate = function e(t) {
                this._activeTarget = t;
                this._clear();
                var n = this._selector.split(",").map(function(e) {
                    return e + '[data-target="' + t + '"],' + e + '[href="' + t + '"]'
                });
                var i = v([].slice.call(document.querySelectorAll(n.join(","))));
                if (i.hasClass(k.DROPDOWN_ITEM)) {
                    i.closest(L.DROPDOWN).find(L.DROPDOWN_TOGGLE).addClass(k.ACTIVE);
                    i.addClass(k.ACTIVE)
                } else {
                    i.addClass(k.ACTIVE);
                    i.parents(L.NAV_LIST_GROUP).prev(L.NAV_LINKS + ", " + L.LIST_ITEMS).addClass(k.ACTIVE);
                    i.parents(L.NAV_LIST_GROUP).prev(L.NAV_ITEMS).children(L.NAV_LINKS).addClass(k.ACTIVE)
                }
                v(this._scrollElement).trigger(Dt.ACTIVATE, {
                    relatedTarget: t
                })
            }
            ;
            e._clear = function e() {
                [].slice.call(document.querySelectorAll(this._selector)).filter(function(e) {
                    return e.classList.contains(k.ACTIVE)
                }).forEach(function(e) {
                    return e.classList.remove(k.ACTIVE)
                })
            }
            ;
            i._jQueryInterface = function e(n) {
                return this.each(function() {
                    var e = v(this).data(At);
                    var t = typeof n === "object" && n;
                    if (!e) {
                        e = new i(this,t);
                        v(this).data(At, e)
                    }
                    if (typeof n === "string") {
                        if (typeof e[n] === "undefined")
                            throw new TypeError('No method named "' + n + '"');
                        e[n]()
                    }
                })
            }
            ;
            o(i, null, [{
                key: "VERSION",
                get: function e() {
                    return Ct
                }
            }, {
                key: "Default",
                get: function e() {
                    return Lt
                }
            }]);
            return i
        }(), Mt = (v(window).on(Dt.LOAD_DATA_API, function() {
            var e = [].slice.call(document.querySelectorAll(L.DATA_SPY));
            var t = e.length;
            for (var n = t; n--; ) {
                var i = v(e[n]);
                Rt._jQueryInterface.call(i, i.data())
            }
        }),
        v.fn[xt] = Rt._jQueryInterface,
        v.fn[xt].Constructor = Rt,
        v.fn[xt].noConflict = function() {
            v.fn[xt] = kt;
            return Rt._jQueryInterface
        }
        ,
        "tab"), Ft = "4.2.1", Bt = "bs.tab", Ut = "." + Bt, Ht, qt = v.fn[Mt], Wt = {
            HIDE: "hide" + Ut,
            HIDDEN: "hidden" + Ut,
            SHOW: "show" + Ut,
            SHOWN: "shown" + Ut,
            CLICK_DATA_API: "click" + Ut + ".data-api"
        }, j = {
            DROPDOWN_MENU: "dropdown-menu",
            ACTIVE: "active",
            DISABLED: "disabled",
            FADE: "fade",
            SHOW: "show"
        }, D = {
            DROPDOWN: ".dropdown",
            NAV_LIST_GROUP: ".nav, .list-group",
            ACTIVE: ".active",
            ACTIVE_UL: "> li > .active",
            DATA_TOGGLE: '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',
            DROPDOWN_TOGGLE: ".dropdown-toggle",
            DROPDOWN_ACTIVE_CHILD: "> .dropdown-menu .active"
        }, Vt = function() {
            function i(e) {
                this._element = e
            }
            var e = i.prototype;
            e.show = function e() {
                var i = this;
                if (this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && v(this._element).hasClass(j.ACTIVE) || v(this._element).hasClass(j.DISABLED))
                    return;
                var t;
                var r;
                var n = v(this._element).closest(D.NAV_LIST_GROUP)[0];
                var o = g.getSelectorFromElement(this._element);
                if (n) {
                    var a = n.nodeName === "UL" || n.nodeName === "OL" ? D.ACTIVE_UL : D.ACTIVE;
                    r = v.makeArray(v(n).find(a));
                    r = r[r.length - 1]
                }
                var s = v.Event(Wt.HIDE, {
                    relatedTarget: this._element
                });
                var c = v.Event(Wt.SHOW, {
                    relatedTarget: r
                });
                if (r)
                    v(r).trigger(s);
                v(this._element).trigger(c);
                if (c.isDefaultPrevented() || s.isDefaultPrevented())
                    return;
                if (o)
                    t = document.querySelector(o);
                this._activate(this._element, n);
                var u = function e() {
                    var t = v.Event(Wt.HIDDEN, {
                        relatedTarget: i._element
                    });
                    var n = v.Event(Wt.SHOWN, {
                        relatedTarget: r
                    });
                    v(r).trigger(t);
                    v(i._element).trigger(n)
                };
                if (t)
                    this._activate(t, t.parentNode, u);
                else
                    u()
            }
            ;
            e.dispose = function e() {
                v.removeData(this._element, Bt);
                this._element = null
            }
            ;
            e._activate = function e(t, n, i) {
                var r = this;
                var o = n && (n.nodeName === "UL" || n.nodeName === "OL") ? v(n).find(D.ACTIVE_UL) : v(n).children(D.ACTIVE);
                var a = o[0];
                var s = i && a && v(a).hasClass(j.FADE);
                var c = function e() {
                    return r._transitionComplete(t, a, i)
                };
                if (a && s) {
                    var u = g.getTransitionDurationFromElement(a);
                    v(a).removeClass(j.SHOW).one(g.TRANSITION_END, c).emulateTransitionEnd(u)
                } else
                    c()
            }
            ;
            e._transitionComplete = function e(t, n, i) {
                if (n) {
                    v(n).removeClass(j.ACTIVE);
                    var r = v(n.parentNode).find(D.DROPDOWN_ACTIVE_CHILD)[0];
                    if (r)
                        v(r).removeClass(j.ACTIVE);
                    if (n.getAttribute("role") === "tab")
                        n.setAttribute("aria-selected", false)
                }
                v(t).addClass(j.ACTIVE);
                if (t.getAttribute("role") === "tab")
                    t.setAttribute("aria-selected", true);
                g.reflow(t);
                v(t).addClass(j.SHOW);
                if (t.parentNode && v(t.parentNode).hasClass(j.DROPDOWN_MENU)) {
                    var o = v(t).closest(D.DROPDOWN)[0];
                    if (o) {
                        var a = [].slice.call(o.querySelectorAll(D.DROPDOWN_TOGGLE));
                        v(a).addClass(j.ACTIVE)
                    }
                    t.setAttribute("aria-expanded", true)
                }
                if (i)
                    i()
            }
            ;
            i._jQueryInterface = function e(n) {
                return this.each(function() {
                    var e = v(this);
                    var t = e.data(Bt);
                    if (!t) {
                        t = new i(this);
                        e.data(Bt, t)
                    }
                    if (typeof n === "string") {
                        if (typeof t[n] === "undefined")
                            throw new TypeError('No method named "' + n + '"');
                        t[n]()
                    }
                })
            }
            ;
            o(i, null, [{
                key: "VERSION",
                get: function e() {
                    return Ft
                }
            }]);
            return i
        }(), zt = (v(document).on(Wt.CLICK_DATA_API, D.DATA_TOGGLE, function(e) {
            e.preventDefault();
            Vt._jQueryInterface.call(v(this), "show")
        }),
        v.fn[Mt] = Vt._jQueryInterface,
        v.fn[Mt].Constructor = Vt,
        v.fn[Mt].noConflict = function() {
            v.fn[Mt] = qt;
            return Vt._jQueryInterface
        }
        ,
        "toast"), Gt = "4.2.1", Yt = "bs.toast", Kt = "." + Yt, Xt = v.fn[zt], Qt = {
            CLICK_DISMISS: "click.dismiss" + Kt,
            HIDE: "hide" + Kt,
            HIDDEN: "hidden" + Kt,
            SHOW: "show" + Kt,
            SHOWN: "shown" + Kt
        }, N = {
            FADE: "fade",
            HIDE: "hide",
            SHOW: "show",
            SHOWING: "showing"
        }, $t = {
            animation: "boolean",
            autohide: "boolean",
            delay: "number"
        }, Jt = {
            animation: true,
            autohide: true,
            delay: 500
        }, Zt = {
            DATA_DISMISS: '[data-dismiss="toast"]'
        }, en = function() {
            function r(e, t) {
                this._element = e;
                this._config = this._getConfig(t);
                this._timeout = null;
                this._setListeners()
            }
            var e = r.prototype;
            e.show = function e() {
                var t = this;
                v(this._element).trigger(Qt.SHOW);
                if (this._config.animation)
                    this._element.classList.add(N.FADE);
                var n = function e() {
                    t._element.classList.remove(N.SHOWING);
                    t._element.classList.add(N.SHOW);
                    v(t._element).trigger(Qt.SHOWN);
                    if (t._config.autohide)
                        t.hide()
                };
                this._element.classList.remove(N.HIDE);
                this._element.classList.add(N.SHOWING);
                if (this._config.animation) {
                    var i = g.getTransitionDurationFromElement(this._element);
                    v(this._element).one(g.TRANSITION_END, n).emulateTransitionEnd(i)
                } else
                    n()
            }
            ;
            e.hide = function e(t) {
                var n = this;
                if (!this._element.classList.contains(N.SHOW))
                    return;
                v(this._element).trigger(Qt.HIDE);
                if (t)
                    this._close();
                else
                    this._timeout = setTimeout(function() {
                        n._close()
                    }, this._config.delay)
            }
            ;
            e.dispose = function e() {
                clearTimeout(this._timeout);
                this._timeout = null;
                if (this._element.classList.contains(N.SHOW))
                    this._element.classList.remove(N.SHOW);
                v(this._element).off(Qt.CLICK_DISMISS);
                v.removeData(this._element, Yt);
                this._element = null;
                this._config = null
            }
            ;
            e._getConfig = function e(t) {
                t = s({}, Jt, v(this._element).data(), typeof t === "object" && t ? t : {});
                g.typeCheckConfig(zt, t, this.constructor.DefaultType);
                return t
            }
            ;
            e._setListeners = function e() {
                var t = this;
                v(this._element).on(Qt.CLICK_DISMISS, Zt.DATA_DISMISS, function() {
                    return t.hide(true)
                })
            }
            ;
            e._close = function e() {
                var t = this;
                var n = function e() {
                    t._element.classList.add(N.HIDE);
                    v(t._element).trigger(Qt.HIDDEN)
                };
                this._element.classList.remove(N.SHOW);
                if (this._config.animation) {
                    var i = g.getTransitionDurationFromElement(this._element);
                    v(this._element).one(g.TRANSITION_END, n).emulateTransitionEnd(i)
                } else
                    n()
            }
            ;
            r._jQueryInterface = function e(i) {
                return this.each(function() {
                    var e = v(this);
                    var t = e.data(Yt);
                    var n = typeof i === "object" && i;
                    if (!t) {
                        t = new r(this,n);
                        e.data(Yt, t)
                    }
                    if (typeof i === "string") {
                        if (typeof t[i] === "undefined")
                            throw new TypeError('No method named "' + i + '"');
                        t[i](this)
                    }
                })
            }
            ;
            o(r, null, [{
                key: "VERSION",
                get: function e() {
                    return Gt
                }
            }, {
                key: "DefaultType",
                get: function e() {
                    return $t
                }
            }]);
            return r
        }();
        if (v.fn[zt] = en._jQueryInterface,
        v.fn[zt].Constructor = en,
        v.fn[zt].noConflict = function() {
            v.fn[zt] = Xt;
            return en._jQueryInterface
        }
        ,
        typeof v === "undefined")
            throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
        var tn = v.fn.jquery.split(" ")[0].split(".")
          , nn = 1
          , rn = 2
          , on = 9
          , an = 1
          , sn = 4;
        if (tn[0] < rn && tn[1] < on || tn[0] === nn && tn[1] === on && tn[2] < an || tn[0] >= sn)
            throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0");
        e.Util = g,
        e.Alert = te,
        e.Button = ue,
        e.Carousel = Ee,
        e.Collapse = je,
        e.Dropdown = i,
        e.Modal = it,
        e.Popover = Ot,
        e.Scrollspy = Rt,
        e.Tab = Vt,
        e.Toast = en,
        e.Tooltip = P,
        Object.defineProperty(e, "__esModule", {
            value: true
        })
    }(t, n(148), n(1))
}
, , , , , function(e, t, n) {
    var i, r;
    !function() {
        "use strict";
        r = [n(1), n(171)],
        void 0 !== (r = "function" == typeof (i = function(e, o) {
            "use strict";
            e.tinysort = {
                defaults: o.defaults
            },
            e.fn.extend({
                tinysort: function() {
                    var e = Array.prototype.slice.call(arguments), t, n;
                    e.unshift(this);
                    t = o.apply(null, e);
                    n = t.length;
                    for (var i = 0, r = this.length; i < r; i++)
                        if (i < n)
                            this[i] = t[i];
                        else
                            delete this[i];
                    this.length = n;
                    return this
                }
            }),
            e.fn.tsort = e.fn.tinysort
        }
        ) ? i.apply(t, r) : i) && (e.exports = r)
    }()
}
, function(t, n, i) {
    var r;
    !function(e) {
        "use strict";
        void 0 !== (r = "function" == typeof (r = function() {
            return e
        }
        ) ? r.call(n, i, n, t) : r) && (t.exports = r)
    }(function() {
        "use strict";
        var w, e = window, E = e.document, S = parseFloat, T = /(-?\d+\.?\d*)\s*$/g, O = /(\d+\.?\d*)\s*$/g, x = [], C = 0, A = 0, P = String.fromCharCode(4095), I = {
            selector: null,
            order: "asc",
            attr: null,
            data: null,
            useVal: !1,
            place: "org",
            returns: !1,
            cases: !1,
            natural: !1,
            forceStrings: !1,
            ignoreDashes: !1,
            sortFunction: null,
            useFlex: !1,
            emptyEnd: !1
        };
        function k(e, t) {
            for (var n, i = e.length, r = i; r--; )
                t(e[n = i - r - 1], n)
        }
        function L(e, t, n) {
            for (var i in t)
                !n && e[i] !== w || (e[i] = t[i]);
            return e
        }
        function t(e, t, n) {
            x.push({
                prepare: e,
                sort: t,
                sortBy: n
            })
        }
        return e.Element && ((e = Element.prototype).matchesSelector = e.matchesSelector || e.mozMatchesSelector || e.msMatchesSelector || e.oMatchesSelector || e.webkitMatchesSelector || function(e) {
            for (var t = (this.parentNode || this.document).querySelectorAll(e), n = -1; t[++n] && t[n] != this; )
                ;
            return !!t[n]
        }
        ),
        L(t, {
            loop: k
        }),
        L(function(e, t) {
            (e = b(e) ? E.querySelectorAll(e) : e).length;
            var n, r, i, o, a = E.createDocumentFragment(), s = [], c = [], u = [], d = [], l = !0, f = e.length && e[0].parentNode, p = f.rootNode !== document, t = e.length && (t === w || !1 !== t.useFlex) && !p && -1 !== getComputedStyle(f, null).display.indexOf("flex"), p = (!function() {
                0 === arguments.length ? h({}) : k(arguments, function(e) {
                    h(b(e) ? {
                        selector: e
                    } : e)
                });
                C = d.length
            }
            .apply(null, Array.prototype.slice.call(arguments, 1)),
            k(e, function(e, t) {
                r ? r !== e.parentNode && (l = !1) : r = e.parentNode;
                var n = d[0]
                  , i = n.hasFilter
                  , n = n.selector
                  , i = !n || i && e.matchesSelector(n) || n && e.querySelector(n) ? c : u
                  , n = {
                    elm: e,
                    pos: t,
                    posn: i.length
                };
                s.push(n),
                i.push(n)
            }),
            n = c.slice(0),
            c.sort(function(e, t) {
                var n = 0;
                0 !== A && (A = 0);
                for (; 0 === n && A < C; ) {
                    var i, r, o, a, s, c, u = d[A], l = u.ignoreDashes ? O : T;
                    k(x, function(e) {
                        e = e.prepare;
                        e && e(u)
                    }),
                    n = u.sortFunction ? u.sortFunction(e, t) : "rand" == u.order ? Math.random() < .5 ? 1 : -1 : (i = !1,
                    r = _(e, u),
                    o = _(t, u),
                    s = "" === r || r === w,
                    a = "" === o || o === w,
                    r === o ? 0 : u.emptyEnd && (s || a) ? s && a ? 0 : s ? 1 : -1 : (u.forceStrings || (a = !!b(r) && r && r.match(l),
                    s = !!b(o) && o && o.match(l),
                    a && s && (l = r.substr(0, r.length - a[0].length),
                    c = o.substr(0, o.length - s[0].length),
                    l == c) && (i = !0,
                    r = S(a[0]),
                    o = S(s[0]))),
                    r === w || o === w ? 0 : u.natural && (isNaN(r) || isNaN(o)) ? function(e, t, n) {
                        for (var i = n(e.toString()), r = n(t.toString()), o = 0; i[o] && r[o]; o++) {
                            var a, s;
                            if (i[o] !== r[o])
                                return a = Number(i[o]),
                                s = Number(r[o]),
                                a == i[o] && s == r[o] ? a - s : i[o] > r[o] ? 1 : -1
                        }
                        return i.length - r.length
                    }(r, o, m) : r < o ? -1 : o < r ? 1 : 0)),
                    k(x, function(e) {
                        e = e.sort;
                        e && (n = e(u, i, r, o, n))
                    }),
                    0 === (n *= u.sortReturnNumber) && A++
                }
                0 === n && (n = e.pos > t.pos ? 1 : -1);
                return n
            }),
            c.length === s.length);
            function h(e) {
                var t = !!e.selector
                  , n = t && ":" === e.selector[0]
                  , e = L(e || {}, I);
                d.push(L({
                    hasSelector: t,
                    hasAttr: !(null === e.attr || "" === e.attr),
                    hasData: null !== e.data,
                    hasFilter: n,
                    sortReturnNumber: "asc" === e.order ? 1 : -1
                }, e))
            }
            function m(e) {
                for (var t, n = [], i = 0, r = -1, o = 0; a = (t = e.charAt(i++)).charCodeAt(0); ) {
                    var a = 46 == a || 48 <= a && a <= 57;
                    a !== o && (n[++r] = "",
                    o = a),
                    n[r] += t
                }
                return n
            }
            function v() {
                return c.forEach(function(e) {
                    a.appendChild(e.elm)
                }),
                a
            }
            function g(e) {
                var t = e.elm
                  , n = E.createElement("div");
                return e.ghost = n,
                t.parentNode.insertBefore(n, t),
                e
            }
            function y(e, t) {
                var n = e.ghost
                  , i = n.parentNode;
                i.insertBefore(t, n),
                i.removeChild(n),
                delete e.ghost
            }
            function _(e, t) {
                var n, e = e.elm;
                return t.selector && (t.hasFilter ? e.matchesSelector(t.selector) || (e = null) : e = e.querySelector(t.selector)),
                t.hasAttr ? n = e.getAttribute(t.attr) : t.useVal ? n = e.value || e.getAttribute("value") : t.hasData ? n = e.getAttribute("data-" + t.data) : e && (n = e.textContent),
                n = null === (n = b(n) ? (n = t.cases ? n : n.toLowerCase()).replace(/\s+/g, " ") : n) ? P : n
            }
            function b(e) {
                return "string" == typeof e
            }
            return l && p ? t ? c.forEach(function(e, t) {
                e.elm.style.order = t
            }) : r && r.appendChild(v()) : (p = d[0].place,
            f = "start" === p,
            e = "end" === p,
            t = "first" === p,
            i = "last" === p,
            "org" === p ? (c.forEach(g),
            c.forEach(function(e, t) {
                y(n[t], e.elm)
            })) : f || e ? (p = n[f ? 0 : n.length - 1],
            o = p && p.elm.parentNode,
            (f = o && (f && o.firstChild || o.lastChild)) && (g(p = f !== p.elm ? {
                elm: f
            } : p),
            e && o.appendChild(p.ghost),
            y(p, v()))) : (t || i) && y(g(n[t ? 0 : n.length - 1]), v())),
            c.map(function(e) {
                return e.elm
            })
        }, {
            plugin: t,
            defaults: I
        })
    }())
}
, , , , , , , , , , , , , , function(e, t, n) {}
, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(e, t, n) {
    "use strict";
    var i, r, o = this && this.__extends || (i = function(e, t) {
        return (i = Object.setPrototypeOf || ({
            __proto__: []
        }instanceof Array ? function(e, t) {
            e.__proto__ = t
        }
        : function(e, t) {
            for (var n in t)
                t.hasOwnProperty(n) && (e[n] = t[n])
        }
        ))(e, t)
    }
    ,
    function(e, t) {
        function n() {
            this.constructor = e
        }
        i(e, t),
        e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype,
        new n)
    }
    ), a = this && this.__createBinding || (Object.create ? function(e, t, n, i) {
        void 0 === i && (i = n),
        Object.defineProperty(e, i, {
            enumerable: !0,
            get: function() {
                return t[n]
            }
        })
    }
    : function(e, t, n, i) {
        e[i = void 0 === i ? n : i] = t[n]
    }
    ), s = this && this.__setModuleDefault || (Object.create ? function(e, t) {
        Object.defineProperty(e, "default", {
            enumerable: !0,
            value: t
        })
    }
    : function(e, t) {
        e.default = t
    }
    ), c = this && this.__importStar || function(e) {
        if (e && e.__esModule)
            return e;
        var t = {};
        if (null != e)
            for (var n in e)
                "default" !== n && Object.hasOwnProperty.call(e, n) && a(t, e, n);
        return s(t, e),
        t
    }
    , u = this && this.__awaiter || function(e, a, s, c) {
        return new (s = s || Promise)(function(n, t) {
            function i(e) {
                try {
                    o(c.next(e))
                } catch (e) {
                    t(e)
                }
            }
            function r(e) {
                try {
                    o(c.throw(e))
                } catch (e) {
                    t(e)
                }
            }
            function o(e) {
                var t;
                e.done ? n(e.value) : ((t = e.value)instanceof s ? t : new s(function(e) {
                    e(t)
                }
                )).then(i, r)
            }
            o((c = c.apply(e, a || [])).next())
        }
        )
    }
    , l = this && this.__generator || function(i, r) {
        var o, a, s, c = {
            label: 0,
            sent: function() {
                if (1 & s[0])
                    throw s[1];
                return s[1]
            },
            trys: [],
            ops: []
        }, e = {
            next: t(0),
            throw: t(1),
            return: t(2)
        };
        return "function" == typeof Symbol && (e[Symbol.iterator] = function() {
            return this
        }
        ),
        e;
        function t(n) {
            return function(e) {
                var t = [n, e];
                if (o)
                    throw new TypeError("Generator is already executing.");
                for (; c; )
                    try {
                        if (o = 1,
                        a && (s = 2 & t[0] ? a.return : t[0] ? a.throw || ((s = a.return) && s.call(a),
                        0) : a.next) && !(s = s.call(a, t[1])).done)
                            return s;
                        switch (a = 0,
                        (t = s ? [2 & t[0], s.value] : t)[0]) {
                        case 0:
                        case 1:
                            s = t;
                            break;
                        case 4:
                            return c.label++,
                            {
                                value: t[1],
                                done: !1
                            };
                        case 5:
                            c.label++,
                            a = t[1],
                            t = [0];
                            continue;
                        case 7:
                            t = c.ops.pop(),
                            c.trys.pop();
                            continue;
                        default:
                            if (!(s = 0 < (s = c.trys).length && s[s.length - 1]) && (6 === t[0] || 2 === t[0])) {
                                c = 0;
                                continue
                            }
                            if (3 === t[0] && (!s || t[1] > s[0] && t[1] < s[3]))
                                c.label = t[1];
                            else if (6 === t[0] && c.label < s[1])
                                c.label = s[1],
                                s = t;
                            else {
                                if (!(s && c.label < s[2])) {
                                    s[2] && c.ops.pop(),
                                    c.trys.pop();
                                    continue
                                }
                                c.label = s[2],
                                c.ops.push(t)
                            }
                        }
                        t = r.call(i, c)
                    } catch (e) {
                        t = [6, e],
                        a = 0
                    } finally {
                        o = s = 0
                    }
                if (5 & t[0])
                    throw t[1];
                return {
                    value: t[0] ? t[1] : void 0,
                    done: !0
                }
            }
        }
    }
    , d = this && this.__importDefault || function(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    , f = (Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.DriveDownload = void 0,
    n(129)), p = n(7), h = n(17), m = c(n(15)), v = d(n(59)), c = (r = f.DriveService,
    o(g, r),
    g.prototype.closeWindow = function() {
        var e = this.tokenClient;
        if (e)
            for (var t = Object.getOwnPropertyNames(e), n = 0; n < t.length; n++) {
                var i = e[t[n]];
                if (i && i.close && "function" == typeof i.close) {
                    i.close(),
                    this.tokenClient = null;
                    break
                }
            }
        this.downloadDialog && this.downloadDialog.close()
    }
    ,
    g.prototype.drive = function() {
        var n, e, t, i, r;
        1 == this.preloadSrc ? this.preloadSrc = !1 : (e = (n = this).scope,
        t = this.clientId,
        this.developerKey,
        this.appId,
        r = null,
        i = window.google.accounts.oauth2.initTokenClient({
            client_id: t,
            scope: e,
            callback: ""
        }),
        n.tokenClient = i,
        0 || function() {
            var e = this;
            i.callback = function(t) {
                return u(e, void 0, void 0, function() {
                    return l(this, function(e) {
                        if (n.tokenClient = null,
                        void 0 !== t.error)
                            throw t;
                        return r = t.access_token,
                        n.oauthToken = r,
                        n.download(),
                        [2]
                    })
                })
            }
            ,
            i.requestAccessToken()
        }())
    }
    ,
    g.prototype.download = function() {
        var n = this;
        this.downloadDialog && this.downloadDialog.close(),
        this.downloadDialog = this.getNewDownloadDialog(),
        this.downloadDialog.show(),
        setTimeout(function() {
            n.api.request("POST", "download", {
                task: n.api.taskId,
                drive_token: n.oauthToken
            }).then(function(e) {
                var t = n.downloadDialog.isClosedOrInProcessOfClosing() ? n.getNewDownloadDialog() : n.downloadDialog;
                t.show(),
                t.domRoot.querySelectorAll(".dialog__body").forEach(function(e) {
                    return e.innerHTML = n.driveSaved()
                }),
                setTimeout(function() {
                    t.close()
                }, 5e3)
            }, function(t) {
                var e = n.downloadDialog.isClosedOrInProcessOfClosing() ? n.getNewDownloadDialog() : n.downloadDialog;
                e.show(),
                e.domRoot.querySelectorAll(".dialog__body").forEach(function(e) {
                    return e.innerHTML = n.driveError()
                }),
                setTimeout(function() {
                    e.close()
                }, 5e3),
                m.configureScope(function(e) {
                    e.setExtra("error", t),
                    e.setExtra("data", n.api)
                }),
                m.captureMessage("Drive download error")
            })
        }, 1e3)
    }
    ,
    g.prototype.driveSaving = function() {
        return '<div style="text-align: center;"><img style="margin-bottom: 24px" src="/img/svg_icons/preload.svg"><p>' + p.Lang.t("Wait a moment, please...") + "</p></div>"
    }
    ,
    g.prototype.driveSaved = function() {
        return '<div style="text-align: center;"><p>' + p.Lang.t("Your file has been saved to Drive!") + '</p><img width="100" height="100" src="/img/ok.gif"><p>' + p.Lang.t("Find it into iLovePDF folder") + "</p></div>"
    }
    ,
    g.prototype.driveError = function() {
        return '<div style="text-align: center;"><p>' + p.Lang.t("We’re sorry. Something went wrong.") + "</p>"
    }
    ,
    g);
    function g(e) {
        var i = r.call(this, e = void 0 === e ? {} : e) || this;
        return i.id = "gdrive_file_selector",
        i.getNewDownloadDialog = function() {
            var e = h.Tools.dialogViewOk({
                title: p.Lang.t("Save to Drive"),
                content: i.driveSaving()
            })
              , t = document.createElement("template")
              , n = (t.innerHTML = e,
            new v.default({
                canBeClosedByUser: !0,
                clickAwayClose: !0
            }));
            return i.downloadDialog && i.downloadDialog.close(),
            (i.downloadDialog = n).setTemplate(t),
            n.addEventListener("shown", function() {
                n.domRoot.querySelectorAll('[data-action="close"]').forEach(function(e) {
                    return e.addEventListener("click", function() {
                        return n.close()
                    })
                })
            }),
            n
        }
        ,
        i.api = null,
        i.oauthToken = null,
        i.userEmail = null,
        i.token = null,
        Object.assign(i, e),
        i.start(),
        i
    }
    t.DriveDownload = c
}
, function(e, t, n) {
    "use strict";
    var i, r, o = this && this.__extends || (i = function(e, t) {
        return (i = Object.setPrototypeOf || ({
            __proto__: []
        }instanceof Array ? function(e, t) {
            e.__proto__ = t
        }
        : function(e, t) {
            for (var n in t)
                t.hasOwnProperty(n) && (e[n] = t[n])
        }
        ))(e, t)
    }
    ,
    function(e, t) {
        function n() {
            this.constructor = e
        }
        i(e, t),
        e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype,
        new n)
    }
    ), a = this && this.__createBinding || (Object.create ? function(e, t, n, i) {
        void 0 === i && (i = n),
        Object.defineProperty(e, i, {
            enumerable: !0,
            get: function() {
                return t[n]
            }
        })
    }
    : function(e, t, n, i) {
        e[i = void 0 === i ? n : i] = t[n]
    }
    ), s = this && this.__setModuleDefault || (Object.create ? function(e, t) {
        Object.defineProperty(e, "default", {
            enumerable: !0,
            value: t
        })
    }
    : function(e, t) {
        e.default = t
    }
    ), c = this && this.__importStar || function(e) {
        if (e && e.__esModule)
            return e;
        var t = {};
        if (null != e)
            for (var n in e)
                "default" !== n && Object.hasOwnProperty.call(e, n) && a(t, e, n);
        return s(t, e),
        t
    }
    , u = (Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    t.DropboxDownload = void 0,
    n(130)), l = c(n(15)), d = n(13), c = (r = u.DropboxService,
    o(f, r),
    f);
    function f(e) {
        var t = r.call(this, e = void 0 === e ? {} : e) || this;
        return t.dropbox = function() {
            t.window = null;
            var e = t
              , e = (document.getElementById(e.id).removeEventListener("click", e.init),
            window.Dropbox.save(e.fileUrl, e.fileName, {
                success: function() {},
                progress: function(e) {},
                cancel: function() {},
                error: function(t) {
                    l.configureScope(function(e) {
                        e.setExtra("error", t)
                    }),
                    l.captureMessage("Dropbox download error", d.Severity.Error)
                }
            }));
            t.window = e
        }
        ,
        t.closeWindow = function() {
            t.window && (t.window.close(),
            t.window = null)
        }
        ,
        t.api = null,
        t.workerServer = null,
        t.oauthToken = null,
        t.userEmail = null,
        t.modal = null,
        t.fileUrl = null,
        t.fileName = null,
        Object.assign(t, e),
        t.start(),
        t
    }
    t.DropboxDownload = c
}
, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(e, g, y) {
    "use strict";
    !function(f) {
        var e = this && this.__importDefault || function(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
          , i = (Object.defineProperty(g, "__esModule", {
            value: !0
        }),
        g.Download = void 0,
        y(285))
          , r = y(286)
          , p = y(7)
          , h = y(17)
          , n = y(48)
          , c = y(60)
          , o = y(101)
          , a = y(77)
          , s = y(74)
          , t = e(y(59))
          , u = y(75)
          , l = y(34)
          , d = y(16)
          , m = e(y(64));
        function v(e) {
            window.Cookies || (window.Cookies = m.default),
            this.taskId = null,
            this.startServer = null,
            this.workerServer = null,
            this.api = null,
            this.token = null,
            this.tool = null,
            this.subtool = null,
            this.realTool = null,
            this.taskData = null,
            this.drive = null,
            this.dropbox = null,
            this.countDownInterval = null,
            this.autoDownInterval = null,
            this.level = "user",
            this.allFileLimits = null,
            this.files = new a.FileStack,
            Object.assign(this, e);
            try {
                this.userCookie = m.default.getJSON(this.taskId)
            } catch (e) {}
            null != this.userCookie && (this.setVariableUserLevel(),
            m.default.remove(this.taskId))
        }
        v.prototype.setVariableUserLevel = function() {
            var e = window.ilovepdfConfig.fp
              , t = "fp"
              , n = ("upscaleimage" == this.tool && (t = "fpu"),
            !1);
            try {
                for (var i = 0; i < e; i++) {
                    var r = m.default.get(t + i);
                    1 == n ? m.default.remove(t + i) : null == r && (n = !0,
                    m.default.set(t + i, i.toString(), {
                        expires: window.ilovepdfConfig.fpt
                    }))
                }
            } catch (e) {}
        }
        ,
        v.prototype.initChained = function(e) {
            this.addSeeMoreListener();
            var t = f(".chained__list__link").length;
            if (0 != t) {
                this.dataChain = e,
                this.numFiles = e.output_filenumber,
                this.sizeFiles = e.output_filesize,
                this.limits = new c.Limits({
                    files: this.files,
                    fileLimits: this.fileLimits,
                    allFileLimits: this.allFileLimits,
                    tool: null,
                    subtool: null
                }),
                this.limits.files = this.files;
                for (var n = this.numFiles; 0 < n; n--)
                    this.files.addFile(new a.File({
                        size: Math.floor(this.sizeFiles / this.numFiles)
                    }));
                this.checkChainedLimits(),
                this.checkChainedExtensions(),
                this.checkHiddenTools(),
                this.checkSeeMore(),
                this.setChainedUpgradeEvents(),
                f(".chained").css("visibility", "visible")
            }
        }
        ,
        v.prototype.addSeeMoreListener = function() {
            var e = document.querySelector(".chained__more > button");
            null != e && e.addEventListener("click", function() {
                e.classList.add("hidden"),
                document.querySelectorAll(".chained__list > li").forEach(function(e) {
                    return e.classList.remove("hidden")
                })
            })
        }
        ,
        v.prototype.checkHiddenTools = function() {
            for (var e = document.querySelectorAll(".chained__list > li.hidden"), t = document.querySelectorAll(".chained__list > li:not(.hidden)").length, n = 0; n < e.length && t < 6; )
                e[n].classList.remove("hidden"),
                t++,
                n++
        }
        ,
        v.prototype.checkSeeMore = function() {
            0 === document.querySelectorAll(".chained__list > li.hidden").length && document.querySelector(".chained__more > button").classList.add("hidden")
        }
        ,
        v.prototype.setChainedUpgradeEvents = function() {
            var n, i = this, r = new t.default;
            r.addEventListener("closed", function() {
                d.UserModel.isPremium() && (i.cleanChainedEvents(),
                i.checkChainedLimits(),
                i.setChainedUpgradeEvents())
            }),
            f(".upgrade").on("click", function(e) {
                e.preventDefault();
                var e = f(e.target)
                  , t = ((e = e.hasClass("upgrade") ? e : e.closest(".upgrade")).attr("data-limit"),
                e.attr("data-tool"));
                i.limits.concreteTool = i.limits.tool = i.limits.subtool = t,
                n = function() {
                    return new s.PremiumContext({
                        tool: t,
                        limits: i.limits,
                        triggerReason: i.limits.err
                    })
                }
                ,
                r.setContentBuilder(n).show()
            })
        }
        ,
        v.prototype.cleanChainedEvents = function() {
            f(".upgrade").off("click")
        }
        ,
        v.prototype.checkChainedLimits = function() {
            var s = this;
            f(".chained__list__link").removeAttr("data-limit").removeClass("upgrade").removeClass("nextLevelNeeded"),
            f(".chained__list__link").each(function(e, t) {
                var n, i, r, o = f(t).attr("data-tool"), a = (l.Tooltip && l.Tooltip.setContent(f(t)[0], f(t).attr("title")),
                s.limits.tool = s.limits.subtool = s.limits.concreteTool = o,
                s.limits.checkFileLimits(s.files.getFileSizeNotIgnored(), s.files.countNotIgnored(), s.files.getFilePagesNotIgnored()));
                a && (r = s.limits.getNextLimit(a, o),
                n = r.name,
                r.currentValue,
                0 != r.nextLevel ? (r = s.limits.setLimit(a),
                f(t).addClass("upgrade").addClass("nextLevelNeeded").attr("data-limit", a),
                f(".nextLevelNeeded").on("click", function() {
                    var e = a == c.REASON.ERROR_SIZE ? "filesize-exceeded" : "filenumber-exceeded";
                    window.ev("send", "event", "limits", e, "download"),
                    window.ev("event", "limit", {
                        reason: n,
                        tool: o
                    })
                }),
                i = s.limits.getCurrentLimitsLevel(),
                i = s.limits.getLevelLimit(s.limits.concreteTool, n, i),
                i = s.limits.limitErrorText(s.limits.makeErrorData(n, i, s.limits.getCurrentLimitsLevel(), r.nextLimit, r.nextLevelLimit)),
                f(t).attr("data-limit-msg", i),
                r = p.Lang.t("File size exceeded"),
                "files" == n && (r = p.Lang.t("File number exceeded")),
                i = "<strong>" + f(t).attr("title") + "</strong><hr>" + r + ". " + i,
                f(t)[0]._tippy && f(t)[0]._tippy.setContent(i)) : f(t.parentElement).remove())
            })
        }
        ,
        v.prototype.checkChainedExtensions = function() {
            var i = this
              , r = this;
            f(".chained__list__link").each(function(e, t) {
                var n = f(t).attr("data-tool");
                "output_extensions"in r.dataChain || (r.dataChain.output_extensions = [],
                f.each(r.dataChain.files, function(e, t) {
                    var n;
                    "server_filename"in t && (n = t.server_filename.split(".").pop(),
                    r.dataChain.output_extensions.push(n)),
                    "name"in t && (n = t.name.split(".").pop(),
                    r.dataChain.output_extensions.push(n))
                })),
                "string" == typeof r.dataChain.output_extensions && (r.dataChain.output_extensions = JSON.parse(r.dataChain.output_extensions)),
                0 == i.checkHasValidExtensions(n, r.dataChain.output_extensions) && f(t.parentElement).remove()
            })
        }
        ,
        v.prototype.checkHasValidExtensions = function(e, t) {
            e = e.replace("convert", "");
            e = new o.Config({
                tool: e,
                config: window.configData
            }).getConfig("mimeTypes")[0];
            if ("extensions"in e) {
                var n = e.extensions.split(",");
                try {
                    f.each(t, function(e, t) {
                        if (!n.includes(t))
                            throw !1
                    })
                } catch (e) {
                    return e
                }
            }
            return !0
        }
        ,
        v.prototype.showPage = function() {
            var e, t = this;
            f(".downloader__btn").on("click", function(e) {
                f(".downloader__btn").hasClass("active") || e.preventDefault()
            }),
            this.userCookie && this.userCookie.server && (/*t.workerServer*/apiServer = this.userCookie.server,
            0 == /*t.workerServer*/apiServer.indexOf("//") && (/*t.workerServer*/apiServer = "https:" + t.workerServer),
            e = this.userCookie.toolUrl.split("?")[0],
            f(".downloader__extra__btn--black").attr("href", e)),
            f(".downloader__extra__btn--black").css("display", "flex"),
            t.api = new n.Api({
                taskId: t.taskId,
                tool: null,
                workerServer: /*t.workerServer*/apiServer,
                token: t.token
            }),
            this.userCookie ? (t.showDownloadFromCookie(this.userCookie),
            "TaskSuccessWithWarnings" === this.userCookie.status && t.api.getTask().then(function(e) {
                t.showDownload(e)
            }, function(e) {
                t.showDownload({
                    status: "TaskDeleted"
                })
            })) : t.api.getTask().then(function(e) {
                t.showDownload(e)
            }, function(e) {
                t.showDownload({
                    status: "TaskDeleted"
                })
            }),
            this.initActions()
        }
        ,
        v.prototype.initActions = function() {
            var e = this;
            f("#autoCopy").on("click", function() {
                e.copyLink()
            })
        }
        ,
        v.prototype.showDownloadFromCookie = function(e) {
            e.status = e.status_message,
            this.showDownload(e)
        }
        ,
        v.prototype.showDownload = function(e) {
            var t, n = this;
            "TaskDeleted" == (n.taskData = e).status ? (f(".chained").remove(),
            f("h1.title2").html(window.downloadMessages[e.status]),
            (t = f(".downloader__btn")).attr("href", "/" + ("en-US" != window.lang ? window.lang : "")),
            t.html(h.Tools.svgHome() + " " + p.Lang.t("Back to homepage")),
            t.addClass("active"),
            f("#sharelink, #delete, #gdrive_file_selector, #dropbox_file_selector").hide()) : "TaskError" == e.status ? (f("h1.title2").html(window.downloadMessages[e.status]),
            f(".downloader__btn").hide(),
            f(".chained").remove(),
            f("#sharelink, #delete, #gdrive_file_selector, #dropbox_file_selector").hide()) : (n.initAutoDownload(),
            f("h1.title2").html(window.downloadMessages[e.status]),
            /*f(".downloader__btn").attr("href", n.api.getLink("download") + "/" + n.taskId).addClass("active").on("click", function() {
                clearTimeout(n.autoDownInterval)
            }),*/
            n.callDownloadActions(e.tool, e),
            this.initChained(e),
            n.initLink(),
            n.initDelete(),
            n.drive = new i.DriveDownload({
                api: n.api
            }),
            e.download_filename,
            n.dropbox = new r.DropboxDownload({
                id: "dropbox_file_selector",
                workerServer: /*e.server*/apiServer,
                api: n.api,
                taskId: n.taskId,
                fileUrl: n.api.getLink("download") + "/" + n.taskId,
                fileName: e.download_filename
            }),
            f("#btnDelete").on("click", function() {
                n.stopCountDown(),
                n.api.deleteTask().then(function() {
                    window.location.href = window.location.pathname
                }, function(e) {
                    window.location.href = window.location.pathname
                })
            }),
            f("body").on("click", function() {
                clearTimeout(n.autoDownInterval)
            }),
            "TaskSuccessWithWarnings" === e.status && f.each(e.files, function(e, t) {
                var n;
                "RepairedFile" == t.status && (f(".downloader__warning").show(),
                f(".repaired").show(),
                "filename"in t) && (n = '<li class="damaged__file">\n                                <span class="damaged__file__name">' + t.filename + '</span>\n                                <span class="damaged__file__info tooltip tooltip--top">' + p.Lang.t("Repaired File") + "</span>\n                            </li>",
                f(".repaired__list").append(n)),
                "DamagedFile" == t.status && (f(".downloader__warning").show(),
                f(".damaged").show(),
                "filename"in t) && (n = '<li class="damaged__file">\n                                <span class="damaged__file__name">' + t.filename + '</span>\n                                <span class="damaged__file__info tooltip tooltip--top">' + p.Lang.t("Damaged/Corrupted File") + "</span>\n                            </li>",
                f(".damaged__list").append(n)),
                "ConformanceDowngraded" == t.status && (f(".downloader__warning").show(),
                f(".conformance").show(),
                "filename"in t) && (n = '<li class="damaged__file">\n                                <span class="damaged__file__name">' + t.filename + '</span>\n                                <span class="damaged__file__info tooltip tooltip--top">' + p.Lang.t("Downgraded Conformance") + "</span>\n                            </li>",
                f(".conformance__list").append(n))
            }),
            "warnings"in e && f.each(e.warnings, function(e, t) {
                var n;
                "RepairedFile" == t.error && (f(".downloader__warning").show(),
                f(".repaired").show(),
                "filename"in t) && (n = '<li class="damaged__file">\n                                <span class="damaged__file__name">' + t.filename + '</span>\n                                <span class="damaged__file__info tooltip tooltip--top">' + p.Lang.t("Repaired File") + "</span>\n                            </li>",
                f(".repaired__list").append(n)),
                "DamagedFile" == t.error && (f(".downloader__warning").show(),
                f(".damaged").show(),
                "filename"in t) && (n = '<li class="damaged__file">\n                                <span class="damaged__file__name">' + t.filename + '</span>\n                                <span class="damaged__file__info tooltip tooltip--top">' + p.Lang.t("Damaged/Corrupted File") + "</span>\n                            </li>",
                f(".damaged__list").append(n)),
                "ConformanceDowngraded" == t.error && (f(".downloader__warning").show(),
                f(".conformance").show(),
                "filename"in t) && (n = '<li class="damaged__file">\n                                <span class="damaged__file__name">' + t.filename + '</span>\n                                <span class="damaged__file__info tooltip tooltip--top">' + p.Lang.t("Downgraded Conformance") + "</span>\n                            </li>",
                f(".conformance__list").append(n))
            }),
            n.initCountdown())
        }
        ,
        v.prototype.callDownloadActions = function(e, t) {
            null != e && (e = "action" + e.camelCase().ucFirst())in this && this[e](t)
        }
        ,
        v.prototype.initLink = function() {
            var e = this;
            f("#sharelink").addClass("active").on("click", function() {
                e.showLink()
            }),
            f("#linkModal").on("hide.bs.modal", function() {
                u.Banner.preventClickAds()
            })
        }
        ,
        v.prototype.showLink = function() {
            f("#dlink").val(window.location.href),
            f("#linkModal").modal()
        }
        ,
        v.prototype.initDelete = function() {
            var e = this;
            f("#delete").addClass("active").on("click", function() {
                e.showDelete()
            }),
            f("#deleteModal").on("hide.bs.modal", function() {
                u.Banner.preventClickAds()
            })
        }
        ,
        v.prototype.showDelete = function() {
            f("#dlink").val(window.location.href),
            f("#deleteModal").modal()
        }
        ,
        v.prototype.initCountdown = function() {
            var o = null
              , o = this.taskData.process_start ? -1 !== this.taskData.process_start.indexOf("GMT") ? new Date(this.taskData.process_start).getTime() + 72e5 : new Date(this.taskData.process_start.replace(/-/g, "/") + " GMT+000").getTime() + 72e5 : (new Date).getTime() + 72e5
              , a = this;
            this.countDownInterval = setInterval(function() {
                var e = (new Date).getTime()
                  , e = o - e
                  , t = (Math.floor(e / 864e5),
                Math.floor(e % 864e5 / 36e5))
                  , n = Math.floor(e % 36e5 / 6e4)
                  , i = Math.floor(e % 6e4 / 1e3)
                  , r = f(".countdown__item__time");
                f(r[0]).html(t.toString()),
                f(r[1]).html(n.toString()),
                f(r[2]).html(i.toString()),
                e < 0 && a.endCountDown()
            }, 1e3)
        }
        ,
        v.prototype.stopCountDown = function() {
            clearInterval(this.countDownInterval)
        }
        ,
        v.prototype.endCountDown = function() {
            clearInterval(this.countDownInterval),
            f("#deleteModal .modal-body").html("EXPIRED")
        }
        ,
        v.prototype.hideChained = function() {
            setTimeout(function() {
                f(".chained").html()
            }, 5e3)
        }
        ,
        v.prototype.initAutoDownload = function() {
            this.userCookie && this.userCookie.server && (/*this.workerServer*/apiServer = this.userCookie.server,
            this.autoDownInterval = setTimeout(function() {
                window.location = f(".downloader__btn").attr("href")
            }, 5e3))
        }
        ,
        v.prototype.stopAutoDownload = function() {
            clearTimeout(this.autoDownInterval)
        }
        ,
        v.prototype.actionCompressimage = function(e) {
            this.showFileSize(e, "Compress Image", "Image", "#4D90FE")
        }
        ,
        v.prototype.actionCompress = function(e) {
            this.showFileSize(e, "Compress PDF", "PDF")
        }
        ,
        v.prototype.showFileSize = function(e, t, n, i) {
            var r, o, a, s, c, u, l, d;
            void 0 === i && (i = "#e4312c"),
            0 < f(".downloader__info__content svg").length || (o = r = 0,
            "filesize"in e ? (r = parseInt(e.filesize),
            o = parseInt(e.output_filesize)) : f.each(e.files, function(e, t) {
                r += parseInt(t.filesize),
                o += parseInt(t.output_filesize)
            }),
            r < o ? (f(".downloader__info").hide(),
            f(".downloader__warning").html(p.Lang.t("alreadyCompressed")).show(),
            clearTimeout(this.autoDownInterval)) : (e = 100 - parseInt((100 * o / r).toString()),
            a = h.Tools.bytesToSize(r),
            s = h.Tools.bytesToSize(o),
            f(".downloader__info").html('<div class="downloader__info__content">' + p.Lang.t("Your ${fileType} is now ${percent}% smaller!", {
                fileType: p.Lang.t(n),
                percent: e
            }) + "<p><strong>" + a + " " + h.Tools.svgArrowRight(8, 12) + " " + s + "</strong></p></div>"),
            window.MSInputMethodContext && document.documentMode || (n = '<svg width="100" height="100" viewBox="0 0 42 42" class="donut" id="donut"><circle class="donut-hole" cx="21" cy="21" r="15.91549430918954" fill="transparent"></circle><circle class="donut-ring" cx="21" cy="21" r="15.91549430918954" fill="transparent" stroke="#d2d3d4" stroke-width="3"></circle><circle class="donut-segment" id="donut-segment" cx="21" cy="21" r="15.91549430918954" fill="transparent" stroke="' + i + '"  stroke-width="3" stroke-dasharray="0 100" stroke-dashoffset="25"></circle><g class="chart-text"><text x="50%" y="50%" class="chart-number">0%</text><text x="50%" y="50%" class="chart-label">' + p.Lang.t("Saved") + "</text></g></svg>",
            f(".downloader__info").prepend(n),
            c = e,
            u = f("#donut-segment"),
            l = f(".chart-number"),
            d = 0,
            window.timer = window.setInterval(function() {
                c <= d && (window.clearInterval(window.timer),
                u.css("stroke-dasharray", c + " " + (100 - c))),
                l.html(d + "%"),
                d++
            }, 10))))
        }
        ,
        v.prototype.copyLink = function() {
            var e = document.getElementById("dlink");
            e.select(),
            document.execCommand("Copy")
        }
        ,
        g.Download = v
    }
    .call(this, y(1))
}
, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(e, t, i) {
    "use strict";
    i.r(t),
    function(e) {
        i(185),
        i(170),
        i(165),
        i(106);
        var t = i(64)
          , t = i.n(t)
          , n = i(382);
        i(118),
        i(125),
        e.Cookies = t.a,
        window.site = "ilovepdf",
        1 != window.downloadOld && (window.ilovepdfConfig || (window.ilovepdfConfig = {}),
        window.configData = window.ilovepdfConfig.configData = i(117),
        window.ilovepdf = new n.Download(window.ilovepdfConfig),
        window.ilovepdf.showPage(),
        window.userModel = window.ilovepdfConfig.user)
    }
    .call(this, i(31))
}
]);
