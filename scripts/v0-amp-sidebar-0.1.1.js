(self.AMP = self.AMP || []).push({
    n: "amp-sidebar",
    v: "2001281851410",
    f: (function(AMP, _) {
        var h, aa = "function" == typeof Object.create ? Object.create : function(a) {
                function b() {}
                b.prototype = a;
                return new b
            },
            n;
        if ("function" == typeof Object.setPrototypeOf) n = Object.setPrototypeOf;
        else {
            var p;
            a: {
                var ba = {
                        a: !0
                    },
                    q = {};
                try {
                    q.__proto__ = ba;
                    p = q.a;
                    break a
                } catch (a) {}
                p = !1
            }
            n = p ? function(a, b) {
                a.__proto__ = b;
                if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
                return a
            } : null
        }
        var r = n;

        function t(a, b) {
            a.prototype = aa(b.prototype);
            a.prototype.constructor = a;
            if (r) r(a, b);
            else
                for (var c in b)
                    if ("prototype" != c)
                        if (Object.defineProperties) {
                            var d = Object.getOwnPropertyDescriptor(b, c);
                            d && Object.defineProperty(a, c, d)
                        } else a[c] = b[c];
            a.Ua = b.prototype
        };

        function u(a, b) {
            b = void 0 === b ? "" : b;
            try {
                return decodeURIComponent(a)
            } catch (c) {
                return b
            }
        };
        var ca = /(?:^[#?]?|&)([^=&]+)(?:=([^&]*))?/g;

        function da(a) {
            return a ? Array.prototype.slice.call(a) : []
        };
        self.__AMP_LOG = self.__AMP_LOG || {
            user: null,
            dev: null,
            userForEmbed: null
        };
        var v = self.__AMP_LOG;

        function ea() {
            if (!v.user) throw Error("failed to call initLogConstructor");
            return v.user
        }

        function fa(a, b) {
            return ea().assert(a, '"toolbar-target" is required', b, void 0, void 0, void 0, void 0, void 0, void 0, void 0, void 0)
        };

        function w() {
            this.l = null
        }
        h = w.prototype;
        h.add = function(a) {
            var b = this;
            this.l || (this.l = []);
            this.l.push(a);
            return function() {
                b.remove(a)
            }
        };
        h.remove = function(a) {
            this.l && (a = this.l.indexOf(a), -1 < a && this.l.splice(a, 1))
        };
        h.removeAll = function() {
            this.l && (this.l.length = 0)
        };
        h.fire = function(a) {
            if (this.l)
                for (var b = this.l, c = 0; c < b.length; c++)(0, b[c])(a)
        };
        h.getHandlerCount = function() {
            return this.l ? this.l.length : 0
        };
        var ha = Object.prototype.hasOwnProperty;

        function ia() {
            var a, b = Object.create(null);
            a && Object.assign(b, a);
            return b
        };

        function ja(a) {
            var b = a.indexOf("#");
            return -1 == b ? a : a.substring(0, b)
        };

        function x(a, b) {
            if (a.__AMP__EXPERIMENT_TOGGLES) var c = a.__AMP__EXPERIMENT_TOGGLES;
            else {
                a.__AMP__EXPERIMENT_TOGGLES = Object.create(null);
                c = a.__AMP__EXPERIMENT_TOGGLES;
                if (a.AMP_CONFIG)
                    for (var d in a.AMP_CONFIG) {
                        var e = a.AMP_CONFIG[d];
                        "number" === typeof e && 0 <= e && 1 >= e && (c[d] = Math.random() < e)
                    }
                if (a.AMP_CONFIG && Array.isArray(a.AMP_CONFIG["allow-doc-opt-in"]) && 0 < a.AMP_CONFIG["allow-doc-opt-in"].length && (d = a.AMP_CONFIG["allow-doc-opt-in"], e = a.document.head.querySelector('meta[name="amp-experiments-opt-in"]'))) {
                    e =
                        e.getAttribute("content").split(",");
                    for (var f = 0; f < e.length; f++) - 1 != d.indexOf(e[f]) && (c[e[f]] = !0)
                }
                Object.assign(c, ka(a));
                if (a.AMP_CONFIG && Array.isArray(a.AMP_CONFIG["allow-url-opt-in"]) && 0 < a.AMP_CONFIG["allow-url-opt-in"].length) {
                    d = a.AMP_CONFIG["allow-url-opt-in"];
                    e = a.location.originalHash || a.location.hash;
                    a = Object.create(null);
                    if (e)
                        for (var g; g = ca.exec(e);) f = u(g[1], g[1]), g = g[2] ? u(g[2].replace(/\+/g, " "), g[2]) : "", a[f] = g;
                    for (e = 0; e < d.length; e++) f = a["e-" + d[e]], "1" == f && (c[d[e]] = !0), "0" == f && (c[d[e]] = !1)
                }
            }
            var l =
                c;
            return !!l[b]
        }

        function ka(a) {
            var b = "";
            try {
                "localStorage" in a && (b = a.localStorage.getItem("amp-experiment-toggles"))
            } catch (e) {
                if (v.dev) a = v.dev;
                else throw Error("failed to call initLogConstructor");
                a.warn("EXPERIMENTS", "Failed to retrieve experiments from localStorage.")
            }
            var c = b ? b.split(/\s*,\s*/g) : [];
            a = Object.create(null);
            for (var d = 0; d < c.length; d++) 0 != c[d].length && ("-" == c[d][0] ? a[c[d].substr(1)] = !1 : a[c[d]] = !0);
            return a
        };
        var la = {},
            z = (la["ampdoc-fie"] = {
                isTrafficEligible: function() {
                    return !0
                },
                branches: [
                    ["21065001"],
                    ["21065002"]
                ]
            }, la);

        function ma(a, b) {
            var c = a.ownerDocument.defaultView,
                d = c.__AMP_TOP || (c.__AMP_TOP = c),
                e = c != d;
            var f = d;
            if (x(f, "ampdoc-fie")) {
                f.__AMP_EXPERIMENT_BRANCHES = f.__AMP_EXPERIMENT_BRANCHES || {};
                for (var g in z)
                    if (ha.call(z, g) && !ha.call(f.__AMP_EXPERIMENT_BRANCHES, g))
                        if (!z[g].isTrafficEligible || !z[g].isTrafficEligible(f)) f.__AMP_EXPERIMENT_BRANCHES[g] = null;
                        else if (!f.__AMP_EXPERIMENT_BRANCHES[g] && x(f, g)) {
                    var l = z[g].branches;
                    f.__AMP_EXPERIMENT_BRANCHES[g] = l[Math.floor(Math.random() * l.length)] || null
                }
                f = "21065002" ===
                    (f.__AMP_EXPERIMENT_BRANCHES ? f.__AMP_EXPERIMENT_BRANCHES["ampdoc-fie"] : null)
            } else f = !1;
            var k = f;
            e && !k ? b = A(c, b) ? B(c, b) : null : (a = C(a), a = na(a), b = A(a, b) ? B(a, b) : null);
            return b
        }

        function D(a, b) {
            a = a.__AMP_TOP || (a.__AMP_TOP = a);
            return B(a, b)
        }

        function E(a, b) {
            var c = C(a);
            c = na(c);
            return B(c, b)
        }

        function C(a) {
            return a.nodeType ? D((a.ownerDocument || a).defaultView, "ampdoc").getAmpDoc(a) : a
        }

        function na(a) {
            a = C(a);
            return a.isSingleDoc() ? a.win : a
        }

        function B(a, b) {
            A(a, b);
            var c = a.__AMP_SERVICES;
            c || (c = a.__AMP_SERVICES = {});
            var d = c;
            a = d[b];
            a.obj || (a.obj = new a.ctor(a.context), a.ctor = null, a.context = null, a.resolve && a.resolve(a.obj));
            return a.obj
        }

        function A(a, b) {
            a = a.__AMP_SERVICES && a.__AMP_SERVICES[b];
            return !(!a || !a.ctor && !a.obj)
        };
        /*
         https://mths.be/cssescape v1.5.1 by @mathias | MIT license */
        var F;

        function oa(a) {
            return ":not([toolbar]) [autoscroll]".replace(/^|,/g, "$&" + a + " ")
        };

        function pa(a) {
            var b = a.isConnected;
            if (void 0 === b) {
                do
                    if (a = qa(a), a.host) a = a.host;
                    else break;
                while (1)
            }
        }

        function qa(a) {
            if (Node.prototype.getRootNode) return a.getRootNode() || a;
            for (; a.parentNode && (!a || "I-AMPHTML-SHADOW-ROOT" != a.tagName && (11 != a.nodeType || "[object ShadowRoot]" !== Object.prototype.toString.call(a))); a = a.parentNode);
            return a
        }

        function ra(a, b) {
            for (var c; a && a !== c; a = a.parentElement)
                if (b(a)) return a;
            return null
        }

        function G(a, b) {
            return a.closest ? a.closest(b) : ra(a, function(a) {
                var c = a.matches || a.webkitMatchesSelector || a.mozMatchesSelector || a.msMatchesSelector || a.oMatchesSelector;
                return c ? c.call(a, b) : !1
            })
        }

        function sa(a) {
            var b = a.body.getAttribute("dir") || a.documentElement.getAttribute("dir") || "ltr";
            return "rtl" == b
        };

        function H(a, b) {
            var c, d = this;
            this.Ca = D(a, "timer");
            this.Ja = b;
            this.Ha = c || 0;
            this.S = -1;
            this.fa = 0;
            this.la = !1;
            this.Ga = function() {
                d.$()
            }
        }
        H.prototype.isPending = function() {
            return -1 != this.S
        };
        H.prototype.schedule = function(a) {
            var b = a || this.Ha;
            this.la && 10 > b && (b = 10);
            var c = Date.now() + b;
            return !this.isPending() || -10 > c - this.fa ? (this.cancel(), this.fa = c, this.S = this.Ca.delay(this.Ga, b), !0) : !1
        };
        H.prototype.$ = function() {
            this.S = -1;
            this.fa = 0;
            this.la = !0;
            this.Ja();
            this.la = !1
        };
        H.prototype.cancel = function() {
            this.isPending() && (this.Ca.cancel(this.S), this.S = -1)
        };

        function ta(a, b) {
            for (var c = 0; c < a.length; c++)
                if (b(a[c], c, a)) return c;
            return -1
        };

        function ua(a, b, c, d) {
            this.type = a;
            this.data = b;
            this.time = c;
            this.event = d
        }

        function va(a, b, c) {
            this.o = a;
            this.c = [];
            this.K = [];
            this.m = [];
            this.h = [];
            this.j = null;
            this.Qa = b;
            this.Ra = c;
            this.ba = !1;
            this.$ = new H(a.ownerDocument.defaultView, this.wa.bind(this));
            this.Aa = new w;
            this.R = Object.create(null);
            this.ua = this.Oa.bind(this);
            this.sa = this.Ma.bind(this);
            this.ta = this.Na.bind(this);
            this.ra = this.La.bind(this);
            this.o.addEventListener("touchstart", this.ua);
            this.o.addEventListener("touchend", this.sa);
            this.o.addEventListener("touchmove", this.ta);
            this.o.addEventListener("touchcancel", this.ra);
            this.ha = !1
        }

        function wa(a) {
            var b = !1,
                c = !0;
            b = void 0 === b ? !1 : b;
            c = void 0 === c ? !1 : c;
            var d = a.__AMP_Gestures;
            d || (d = new va(a, b, c), a.__AMP_Gestures = d);
            return d
        }
        h = va.prototype;
        h.cleanup = function() {
            this.o.removeEventListener("touchstart", this.ua);
            this.o.removeEventListener("touchend", this.sa);
            this.o.removeEventListener("touchmove", this.ta);
            this.o.removeEventListener("touchcancel", this.ra);
            delete this.o.__AMP_Gestures;
            this.$.cancel()
        };
        h.onGesture = function(a, b) {
            var c = new a(this),
                d = c.getType(),
                e = this.R[d];
            e || (this.c.push(c), e = new w, this.R[d] = e);
            return e.add(b)
        };
        h.removeGesture = function(a) {
            var b = (new a(this)).getType();
            if (a = this.R[b]) {
                a.removeAll();
                a = ta(this.c, function(a) {
                    return a.getType() == b
                });
                if (0 > a) return !1;
                this.c.splice(a, 1);
                this.m.splice(a, 1);
                this.h.splice(a, 1);
                this.K.splice(a, 1);
                delete this.R[b];
                return !0
            }
            return !1
        };
        h.onPointerDown = function(a) {
            return this.Aa.add(a)
        };
        h.Oa = function(a) {
            var b = Date.now();
            this.ba = !1;
            this.Aa.fire(a);
            for (var c = 0; c < this.c.length; c++)
                if (!this.m[c] && (this.h[c] && this.h[c] < b && I(this, c), this.c[c].onTouchStart(a))) {
                    var d = c;
                    this.K[d] = !0;
                    this.h[d] = 0
                }
            J(this, a)
        };
        h.Na = function(a) {
            for (var b = Date.now(), c = 0; c < this.c.length; c++) this.K[c] && (this.h[c] && this.h[c] < b ? I(this, c) : this.c[c].onTouchMove(a) || I(this, c));
            J(this, a)
        };
        h.Ma = function(a) {
            for (var b = Date.now(), c = 0; c < this.c.length; c++)
                if (this.K[c])
                    if (this.h[c] && this.h[c] < b) I(this, c);
                    else {
                        this.c[c].onTouchEnd(a);
                        var d = !this.h[c],
                            e = this.h[c] < b,
                            f = this.j == this.c[c];
                        f || !d && !e || I(this, c)
                    }
            J(this, a)
        };
        h.La = function(a) {
            for (var b = 0; b < this.c.length; b++) {
                var c = b;
                this.m[c] = 0;
                I(this, c)
            }
            J(this, a)
        };

        function J(a, b) {
            var c = !!a.j || a.ba;
            a.ba = !1;
            if (!c)
                for (var d = Date.now(), e = 0; e < a.c.length; e++)
                    if (a.m[e] || a.h[e] && a.h[e] >= d) {
                        c = !0;
                        break
                    }
            c ? (b.stopPropagation(), a.Qa || b.preventDefault()) : a.Ra && b.stopPropagation();
            a.ha && (a.ha = !1, a.wa())
        }
        h.wa = function() {
            for (var a = Date.now(), b = -1, c = 0; c < this.c.length; c++)
                if (!this.m[c]) this.h[c] && this.h[c] < a && I(this, c);
                else if (-1 == b || this.m[c] > this.m[b]) b = c;
            if (-1 != b) {
                var d = 0;
                for (c = 0; c < this.c.length; c++) !this.m[c] && this.K[c] && (d = Math.max(d, this.h[c] - a));
                if (2 > d) {
                    a = b;
                    c = this.c[a];
                    for (var e = 0; e < this.c.length; e++)
                        if (e != a) {
                            var f = e;
                            this.m[f] = 0;
                            I(this, f)
                        }
                    this.m[a] = 0;
                    this.h[a] = 0;
                    this.j = c;
                    c.acceptStart()
                } else this.$.schedule(d)
            }
        };

        function I(a, b) {
            a.K[b] = !1;
            a.h[b] = 0;
            a.m[b] || a.c[b].acceptCancel()
        }

        function K(a, b) {
            this.Ta = a;
            this.X = b
        }
        h = K.prototype;
        h.getType = function() {
            return this.Ta
        };
        h.signalReady = function(a) {
            var b = this.X;
            if (b.j) this.acceptCancel();
            else {
                for (var c = Date.now(), d = 0; d < b.c.length; d++) b.c[d] == this && (b.m[d] = c + a, b.h[d] = 0);
                b.ha = !0
            }
        };
        h.signalPending = function(a) {
            var b = this.X;
            if (b.j) this.acceptCancel();
            else
                for (var c = Date.now(), d = 0; d < b.c.length; d++) b.c[d] == this && (b.h[d] = c + a)
        };
        h.signalEnd = function() {
            var a = this.X;
            a.j == this && (a.j = null, a.ba = !0)
        };
        h.signalEmit = function(a, b) {
            var c = this.X.R[this.getType()];
            c && c.fire(new ua(this.getType(), a, Date.now(), b))
        };
        h.acceptStart = function() {};
        h.acceptCancel = function() {};
        h.onTouchStart = function() {
            return !1
        };
        h.onTouchMove = function() {
            return !1
        };
        h.onTouchEnd = function() {};

        function xa(a, b, c) {
            1 > b && (b = 1);
            var d = a / b,
                e = .5 + Math.min(b / 33.34, .5);
            return d * e + c * (1 - e)
        };

        function L(a, b, c, d) {
            K.call(this, a, b);
            this.xa = c;
            this.Fa = d;
            this.j = !1;
            this.oa = this.na = this.ia = this.W = this.Ba = this.ka = this.ja = this.F = this.D = this.J = this.I = 0
        }
        t(L, K);
        h = L.prototype;
        h.onTouchStart = function(a) {
            a = a.touches;
            return this.j && a && 1 < a.length ? !0 : a && 1 == a.length ? (this.Ba = Date.now(), this.I = a[0].clientX, this.J = a[0].clientY, !0) : !1
        };
        h.onTouchMove = function(a) {
            var b = a.touches;
            if (b && 1 <= b.length) {
                var c = b[0];
                b = c.clientX;
                c = c.clientY;
                this.D = b;
                this.F = c;
                if (this.j) M(this, !1, !1, a);
                else if (a = Math.abs(b - this.I), b = Math.abs(c - this.J), this.xa && this.Fa)(8 <= a || 8 <= b) && this.signalReady(-10);
                else if (this.xa)
                    if (8 <= a && a > b) this.signalReady(-10);
                    else {
                        if (8 <= b) return !1
                    } else if (this.Fa)
                    if (8 <= b && b > a) this.signalReady(-10);
                    else {
                        if (8 <= a) return !1
                    } else return !1;
                return !0
            }
            return !1
        };
        h.onTouchEnd = function(a) {
            var b = a.touches;
            b && 0 == b.length && this.j && (this.j = !1, M(this, !1, !0, a), this.signalEnd())
        };
        h.acceptStart = function() {
            this.j = !0;
            this.ja = this.I;
            this.ka = this.J;
            this.ia = this.Ba;
            this.I = this.D;
            this.J = this.F;
            M(this, !0, !1, null)
        };
        h.acceptCancel = function() {
            this.j = !1
        };

        function M(a, b, c, d) {
            a.W = Date.now();
            var e = a.W - a.ia;
            if (!c && 4 < e || c && 16 < e) {
                var f = xa(a.D - a.ja, e, a.na),
                    g = xa(a.F - a.ka, e, a.oa);
                if (!c || 32 < e || 0 != f || 0 != g) a.na = 1E-4 < Math.abs(f) ? f : 0, a.oa = 1E-4 < Math.abs(g) ? g : 0;
                a.ja = a.D;
                a.ka = a.F;
                a.ia = a.W
            }
            a.signalEmit({
                first: b,
                last: c,
                time: a.W,
                deltaX: a.D - a.I,
                deltaY: a.F - a.J,
                startX: a.I,
                startY: a.J,
                lastX: a.D,
                lastY: a.F,
                velocityX: a.na,
                velocityY: a.oa
            }, d)
        }

        function ya(a) {
            L.call(this, "swipe-x", a, !0, !1)
        }
        t(ya, L);

        function N(a, b) {
            var c = D(a, "timer"),
                d = 1;
            return c.promise(d).then(function() {
                return c.promise(b)
            })
        };
        var O, za = "Webkit webkit Moz moz ms O o".split(" ");

        function P(a, b) {
            for (var c in b) {
                var d = a,
                    e = b[c];
                var f = d.style;
                var g = c;
                if (2 > g.length ? 0 : 0 == g.lastIndexOf("--", 0)) f = g;
                else {
                    O || (O = ia());
                    var l = O[g];
                    if (!l) {
                        l = g;
                        if (void 0 === f[g]) {
                            var k = g;
                            k = k.charAt(0).toUpperCase() + k.slice(1);
                            b: {
                                for (var m = 0; m < za.length; m++) {
                                    var y = za[m] + k;
                                    if (void 0 !== f[y]) {
                                        k = y;
                                        break b
                                    }
                                }
                                k = ""
                            }
                            void 0 !== f[k] && (l = k)
                        }
                        O[g] = l
                    }
                    f = l
                }
                f && (d.style[f] = e)
            }
        }

        function Q(a, b) {
            void 0 === b && (b = a.hasAttribute("hidden"));
            b ? a.removeAttribute("hidden") : a.setAttribute("hidden", "")
        };

        function R(a, b, c) {
            this.pa = a;
            this.ea = b;
            this.Pa = c;
            this.da = "backward";
            this.P = "horizontal";
            this.Z = this.B = null
        }

        function S(a) {
            return "horizontal" == a.P ? a.B.offsetWidth : a.B.offsetHeight
        }

        function T(a, b, c) {
            b = "horizontal" == a.P ? b : c;
            return "backward" == a.da ? -Math.min(b, 0) : Math.max(b, 0)
        }

        function U(a, b, c) {
            c = void 0 === c ? "" : c;
            var d = "backward" == a.da ? -b : b;
            return "translate(" + ("horizontal" == a.P ? "" + d + c : 0) + ", " + ("horizontal" == a.P ? 0 : "" + d + c) + ")"
        }
        R.prototype.startSwipe = function(a) {
            var b = a.swipeElement,
                c = a.mask,
                d = a.direction;
            a = a.orientation;
            this.B = b;
            this.Z = c;
            this.da = d;
            this.P = a
        };
        R.prototype.swipeMove = function(a) {
            Aa(this, a, !1)
        };
        R.prototype.endSwipe = function(a) {
            Aa(this, a, !0)
        };

        function Ba(a, b, c) {
            var d = .75 * c;
            P(a.B, {
                transform: U(a, b, "px"),
                transition: d + "ms transform cubic-bezier(0.15, .55, .3, 0.95)"
            });
            return N(a.pa, d)
        }

        function Ca(a, b) {
            var c = .8 * b;
            return a.ea(function() {
                P(a.B, {
                    transform: U(a, 0),
                    transition: c + "ms transform ease-in"
                });
                P(a.Z, {
                    opacity: "",
                    transition: c + "ms opacity ease-in"
                })
            }).then(function() {
                return N(a.pa, c)
            })
        }

        function Da(a, b) {
            var c = S(a) - b,
                d = .75 * c;
            return a.ea(function() {
                P(a.B, {
                    transform: U(a, 100, "%"),
                    transition: d + "ms transform ease-out"
                });
                P(a.Z, {
                    opacity: 0,
                    transition: d + "ms opacity ease-out"
                })
            }).then(function() {
                return N(a.pa, d)
            }).then(function() {
                return a.Pa()
            })
        }

        function Ea(a, b, c) {
            b = void 0 === b ? "" : b;
            c = void 0 === c ? "" : c;
            P(a.B, {
                transform: b,
                transition: ""
            });
            P(a.Z, {
                opacity: c,
                transition: ""
            })
        }

        function Fa(a, b, c, d, e) {
            var f = 22.5 * b,
                g = 22.5 * c,
                l = f + d,
                k = g + e,
                m = T(a, l, k),
                y = T(a, b, c),
                Na = .5 * S(a);
            return m < Na && .65 > y ? Ba(a, m, y).then(function() {
                return Ca(a, m)
            }) : Da(a, m)
        }

        function Aa(a, b, c) {
            var d = b.deltaX,
                e = b.deltaY,
                f = b.velocityX,
                g = b.velocityY;
            a.ea(function() {
                if (c) Fa(a, f, g, d, e).then(function() {
                    Ea(a)
                });
                else {
                    var b = T(a, d, e),
                        k = b / S(a),
                        m = Math.max(0, 1 - k);
                    Ea(a, U(a, b, "px"), m)
                }
            })
        };

        function Ga(a, b) {
            if (void 0 !== F) var c = F;
            else {
                try {
                    var d = b.ownerDocument,
                        e = d.createElement("div"),
                        f = d.createElement("div");
                    e.appendChild(f);
                    c = e.querySelector(":scope div") === f
                } catch (k) {
                    c = !1
                }
                c = F = c
            }
            c ? c = b.querySelector(oa(":scope")) : (b.classList.add("i-amphtml-scoped"), c = oa(".i-amphtml-scoped"), c = b.querySelectorAll(c), b.classList.remove("i-amphtml-scoped"), c = void 0 === c[0] ? null : c[0]);
            if (c) {
                var g = (a.win.getComputedStyle(b) || ia())["overflow-y"];
                if ("scroll" != g && "auto" != g) ea().error("AMP-SIDEBAR", "for 'autoscroll', 'nav [toolbar]' element must be set to overflow\n        'scroll' or 'auto' for 'autoscroll' to work.");
                else {
                    var l = E(a, "viewport");
                    l.animateScrollWithinParent(c, b, "center", 0)
                }
            }
        };

        function Ha(a, b) {
            this.va = b;
            this.w = a;
            this.U = b.getAmpDoc();
            this.Sa = this.w.getAttribute("toolbar");
            this.T = null;
            this.A = void 0;
            this.aa = !1;
            this.w.classList.add("amp-sidebar-toolbar-target-hidden");
            Ia(this)
        }
        Ha.prototype.onLayoutChange = function() {
            var a = this.U.win.matchMedia(this.Sa).matches;
            a ? Ja(this) : Ka(this)
        };

        function Ia(a) {
            a.T = a.w.cloneNode(!0);
            var b = fa(a.w.getAttribute("toolbar-target"), a.w);
            a.U.whenReady().then(function() {
                var c = a.U.getElementById(b);
                if (c) a.A = c, a.T.classList.add("i-amphtml-toolbar"), Q(a.A, !1);
                else throw Error("Could not find the toolbar-target element with an id: " + b);
            })
        }

        function Ja(a) {
            a.aa ? Promise.resolve() : a.va.mutateElement(function() {
                a.A && (Q(a.A, !0), a.A.contains(a.T) || a.A.appendChild(a.T), a.w.classList.add("amp-sidebar-toolbar-target-shown"), a.w.classList.remove("amp-sidebar-toolbar-target-hidden"), a.aa = !0, Ga(a.U, a.T))
            })
        }

        function Ka(a) {
            a.aa && a.va.mutateElement(function() {
                a.A && (Q(a.A, !1), a.w.classList.add("amp-sidebar-toolbar-target-hidden"), a.w.classList.remove("amp-sidebar-toolbar-target-shown"), a.aa = !1)
            })
        };
        var V = [];

        function La(a) {
            var b = [];
            a = Ma(a);
            for (var c = {}, d = 0; d < a.length; c = {
                    M: c.M
                }, d++) c.M = a[d], c.M.parentNode && da(c.M.parentNode.children).filter(function(a) {
                return function(b) {
                    return b != a.M
                }
            }(c)).forEach(function(a) {
                return b.push(a)
            });
            return b
        }

        function Ma(a) {
            for (var b = [], c = a; c; c = c.parentNode || c.host) b.push(c);
            return b
        }

        function Oa(a) {
            for (var b = []; a;) {
                a = qa(a);
                var c = a.querySelectorAll("a[href],area[href],button,details summary,iframe,input,select,textarea,[contenteditable],[draggable],[tabindex]");
                Array.prototype.push.apply(b, c);
                a = a.host
            }
            return b
        }

        function Pa(a) {
            V.every(function(b) {
                return b.element !== a
            });
            pa(a);
            var b = La(a),
                c = Ma(a).filter(function(a) {
                    return a.nodeType == Node.ELEMENT_NODE
                }),
                d = Oa(a),
                e = d.filter(function(b) {
                    return a.contains(b) && void 0 !== b.__AMP_MODAL_SAVED_TAB_INDEX
                }),
                f = d.filter(function(b) {
                    return !a.contains(b) && void 0 === b.__AMP_MODAL_SAVED_TAB_INDEX
                }),
                g = b.concat(c).map(function(a) {
                    return {
                        element: a,
                        prevValue: a.getAttribute("aria-hidden")
                    }
                });
            c.forEach(function(a) {
                return a.removeAttribute("aria-hidden")
            });
            b.forEach(function(a) {
                return a.setAttribute("aria-hidden",
                    "true")
            });
            f.forEach(function(a) {
                a.__AMP_MODAL_SAVED_TAB_INDEX = a.getAttribute("tabindex");
                a.setAttribute("tabindex", "-1")
            });
            e.forEach(function(a) {
                var b = a.__AMP_MODAL_SAVED_TAB_INDEX;
                null === b ? a.removeAttribute("tabindex") : a.setAttribute("tabindex", b)
            });
            V.push({
                element: a,
                hiddenElementInfos: g,
                focusableExternalElements: f,
                focusableInternalElements: e
            })
        }

        function Qa(a) {
            var b = V.pop(),
                c = b.hiddenElementInfos,
                d = b.focusableExternalElements;
            b = b.focusableInternalElements;
            pa(a);
            c.forEach(function(a) {
                var b = a,
                    c = b.prevValue;
                b = b.element;
                var d = c;
                null === d ? b.removeAttribute("aria-hidden") : b.setAttribute("aria-hidden", d)
            });
            b.forEach(function(a) {
                a.setAttribute("tabindex", "-1")
            });
            d.forEach(function(a) {
                var b = a.__AMP_MODAL_SAVED_TAB_INDEX;
                null === b ? a.removeAttribute("tabindex") : a.setAttribute("tabindex", b);
                a.__AMP_MODAL_SAVED_TAB_INDEX = void 0
            })
        };

        function W(a) {
            var b = AMP.BaseElement.call(this, a) || this;
            b.L = null;
            b.ca = null;
            b.Ea = null;
            b.Y = null;
            b.C = b.win.document;
            b.Ia = b.C.documentElement;
            b.H = null;
            b.Da = [];
            var c = D(b.win, "platform");
            b.O = c.isIos();
            b.Ka = c.isSafari();
            b.V = -1;
            b.qa = !1;
            b.N = null;
            b.ga = null;
            b.ya = 0;
            b.G = !1;
            b.za = null;
            b.ma = new R(b.win, function(a) {
                return b.mutateElement(a)
            }, function() {
                return X(b, !0, 3)
            });
            return b
        }
        t(W, AMP.BaseElement);
        W.prototype.buildCallback = function() {
            var a = this,
                b = this.element;
            b.classList.add("i-amphtml-overlay");
            b.classList.add("i-amphtml-scrollable");
            this.H = b.getAttribute("side");
            this.L = this.getViewport();
            this.ca = ma(b, "action");
            "left" != this.H && "right" != this.H && (this.H = Ra(this, sa(this.C) ? "right" : "left"), b.setAttribute("side", this.H));
            Sa(this);
            b.addEventListener("amp:dom-update", function() {
                Sa(a)
            });
            var c = da(b.querySelectorAll("nav[toolbar]"));
            c.forEach(function(b) {
                try {
                    a.Da.push(new Ha(b, a))
                } catch (e) {
                    a.user().error("amp-sidebar toolbar",
                        "Failed to instantiate toolbar", e)
                }
            });
            this.O && Ta(this);
            b.hasAttribute("role") || b.setAttribute("role", "menu");
            b.tabIndex = -1;
            this.Ia.addEventListener("keydown", function(b) {
                "Escape" == b.key && X(a, !1, 3) && b.preventDefault()
            });
            this.N = Ua(this);
            this.N || (this.N = this.createScreenReaderCloseButton(), b.insertBefore(this.N, this.element.firstChild));
            b.appendChild(this.createScreenReaderCloseButton());
            this.registerDefaultAction(function(b) {
                var c = b,
                    d = c.trust,
                    g = c.caller;
                Va(a, d, g)
            }, "open");
            this.registerAction("close",
                function(b) {
                    X(a, !1, b.trust)
                });
            this.registerAction("toggle", function(b) {
                var c = b.trust;
                b = b.caller;
                a.G ? X(a, !1, c) : Va(a, c, b)
            });
            b.addEventListener("click", function(c) {
                if ((c = G(c.target, "A")) && c.href) {
                    var d = ma(b, "url").parse(c.href),
                        f = a.getAmpDoc().getUrl();
                    ja(c.href) == ja(f) && d.hash && X(a, !1, 3)
                }
            }, !0);
            Wa(this, this.element)
        };

        function Sa(a) {
            if (!a.za) {
                var b = a.element.querySelector("amp-nested-menu");
                b && (D(a.win, "extensions").installExtensionForDoc(a.getAmpDoc(), "amp-nested-menu"), a.za = b)
            }
        }

        function Ua(a) {
            for (var b = a.element.querySelectorAll("[on]"), c = 0; c < b.length; c++) {
                var d = b[c],
                    e = a.ca.hasResolvableActionForTarget(d, "tap", a.element, d.parentElement),
                    f = G(d, "[toolbar]");
                if (e && !f) return d
            }
            return null
        }
        W.prototype.createScreenReaderCloseButton = function() {
            var a = this,
                b = this.element.getAttribute("data-close-button-aria-label") || "Close the sidebar",
                c = this.C.createElement("button");
            c.textContent = b;
            c.classList.add("i-amphtml-screen-reader");
            c.tabIndex = -1;
            c.addEventListener("click", function() {
                X(a, !1, 3)
            });
            return c
        };
        W.prototype.onLayoutMeasure = function() {
            var a = this;
            this.getAmpDoc().whenReady().then(function() {
                a.Da.forEach(function(a) {
                    a.onLayoutChange()
                })
            })
        };

        function Y(a, b, c) {
            function d() {
                a.Ea === b && a.mutateElement(b)
            }
            a.Ea = b;
            c ? D(a.win, "timer").delay(d, c) : d()
        }

        function Xa(a, b) {
            Q(a.element, !0);
            Q(Z(a), !0);
            a.L.addToFixedLayer(a.element, !0);
            a.mutateElement(function() {
                Pa(a.element)
            });
            a.O && a.Ka && Ya(a);
            a.element.scrollTop = 1;
            a.element.setAttribute("open", "");
            Z(a).setAttribute("open", "");
            Y(a, function() {
                var c = a.getRealChildren(),
                    d = E(a.element, "owners");
                d.scheduleLayout(a.element, c);
                d.scheduleResume(a.element, c);
                if (!a.O || !E(a.element, "viewer").isEmbedded()) try {
                    a.N.focus()
                } catch (e) {}
                Za(a, "sidebarOpen", b);
                a.element.setAttribute("i-amphtml-sidebar-opened", "");
                Z(a).setAttribute("i-amphtml-sidebar-opened",
                    "")
            }, 350);
            Ga(a.getAmpDoc(), a.element)
        }

        function $a(a, b, c) {
            Z(a).removeAttribute("open");
            Z(a).removeAttribute("i-amphtml-sidebar-opened");
            a.mutateElement(function() {
                Qa(a.element)
            });
            a.element.removeAttribute("open");
            a.element.removeAttribute("i-amphtml-sidebar-opened");
            Y(a, function() {
                Q(a.element, !1);
                Q(Z(a), !1);
                E(a.element, "owners").schedulePause(a.element, a.getRealChildren());
                Za(a, "sidebarClose", c)
            }, b ? 0 : 350)
        }

        function Va(a, b, c) {
            a.G || (a.G = !0, a.L.enterOverlayMode(), Y(a, function() {
                return Xa(a, b)
            }), E(a.getAmpDoc(), "history").push(function() {
                a.O ? X(a, !0, b) : X(a, !1, b)
            }).then(function(b) {
                a.V = b
            }), c && (a.ga = c, a.ya = a.L.getScrollTop()))
        }

        function X(a, b, c) {
            if (!a.G) return !1;
            a.G = !1;
            a.L.leaveOverlayMode();
            var d = a.ya == a.L.getScrollTop(),
                e = a.element.contains(a.C.activeElement);
            Y(a, function() {
                return $a(a, b, c)
            });
            b && (Q(a.element, !1), Q(Z(a), !1)); - 1 != a.V && (E(a.getAmpDoc(), "history").pop(a.V), a.V = -1);
            if (a.ga && e && d && (!a.O || !E(a.element, "viewer").isEmbedded())) try {
                a.ga.focus()
            } catch (f) {}
            return !0
        }

        function Wa(a, b) {
            if (x(a.win, "amp-sidebar-swipe-to-dismiss")) {
                var c = wa(b);
                c.onGesture(ya, function(b) {
                    b = b.data;
                    b.first ? a.ma.startSwipe({
                        swipeElement: a.element,
                        mask: a.Y,
                        direction: "left" == a.H ? "backward" : "forward",
                        orientation: "horizontal"
                    }) : b.last ? a.ma.endSwipe(b) : a.ma.swipeMove(b)
                })
            }
        }

        function Ra(a, b) {
            return G(a.element, "amp-story") ? "left" == b ? "right" : "left" : b
        }

        function Z(a) {
            if (!a.Y) {
                var b = a.C.createElement("div");
                b.classList.add("i-amphtml-sidebar-mask");
                b.addEventListener("click", function() {
                    X(a, !1, 3)
                });
                a.getAmpDoc().getBody().appendChild(b);
                b.addEventListener("touchmove", function(a) {
                    a.preventDefault()
                });
                Wa(a, b);
                a.Y = b
            }
            return a.Y
        }

        function Ta(a) {
            a.element.addEventListener("scroll", function(b) {
                a.G && (1 > a.element.scrollTop ? (a.element.scrollTop = 1, b.preventDefault()) : a.element.scrollHeight == a.element.scrollTop + a.element.offsetHeight && (--a.element.scrollTop, b.preventDefault()))
            })
        }

        function Ya(a) {
            if (!a.qa) {
                var b = a.C.createElement("div");
                P(b, {
                    height: "54px",
                    width: "100%",
                    "background-color": "transparent"
                });
                a.element.appendChild(b);
                a.qa = !0
            }
        }

        function Za(a, b, c) {
            var d = a.win;
            var e = "amp-sidebar toolbar." + b;
            var f = {};
            var g = {
                detail: f
            };
            Object.assign(g, void 0);
            "function" == typeof d.CustomEvent ? e = new d.CustomEvent(e, g) : (d = d.document.createEvent("CustomEvent"), d.initCustomEvent(e, !!g.bubbles, !!g.cancelable, f), e = d);
            a.ca.trigger(a.element, b, e, c)
        }(function(a) {
            a.registerElement("amp-sidebar", W, "amp-sidebar{--story-page-vh:1vh;position:fixed!important;top:0;max-height:100vh!important;height:100vh;max-width:80vw;background-color:#efefef;min-width:45px!important;outline:none;overflow-x:hidden!important;overflow-y:auto!important;z-index:2147483647;-webkit-overflow-scrolling:touch;will-change:transform}amp-sidebar[side=left]{left:0!important;transform:translateX(-100%);animation-name:i-amphtml-sidebar-slide-out-left}amp-sidebar[side=left][open]{animation-name:i-amphtml-sidebar-slide-in-left}amp-sidebar[side=right]{right:0!important;transform:translateX(100%);animation-name:i-amphtml-sidebar-slide-out-right}amp-sidebar[side=right][open]{animation-name:i-amphtml-sidebar-slide-in-right}amp-sidebar[side][i-amphtml-sidebar-opened]{transform:none;animation:none}.i-amphtml-sidebar-mask,amp-sidebar[side]{animation-duration:233ms;animation-timing-function:cubic-bezier(0,0,.21,1);animation-fill-mode:forwards}.i-amphtml-toolbar>ol,.i-amphtml-toolbar>ul{display:-ms-flexbox;display:flex;-ms-flex-pack:start;justify-content:flex-start;-ms-flex-wrap:wrap;flex-wrap:wrap;overflow:auto;list-style-type:none;padding:0;margin:0}.i-amphtml-sidebar-mask{position:fixed!important;top:0!important;left:0!important;width:100vw!important;height:100vh!important;background-image:none!important;background-color:rgba(0,0,0,0.5);animation-name:i-amphtml-sidebar-mask-fade-out;z-index:2147483646}.i-amphtml-sidebar-mask[open]{animation-name:i-amphtml-sidebar-mask-fade-in}.i-amphtml-sidebar-mask[i-amphtml-sidebar-opened]{animation:none}@keyframes i-amphtml-sidebar-slide-in-left{0%{transform:translateX(-100%)}to{transform:translateX(0)}}@keyframes i-amphtml-sidebar-slide-out-left{0%{transform:translateX(0)}to{transform:translateX(-100%)}}@keyframes i-amphtml-sidebar-slide-in-right{0%{transform:translateX(100%)}to{transform:translateX(0)}}@keyframes i-amphtml-sidebar-slide-out-right{0%{transform:translateX(0)}to{transform:translateX(100%)}}@keyframes i-amphtml-sidebar-mask-fade-in{0%{opacity:0}to{opacity:1}}@keyframes i-amphtml-sidebar-mask-fade-out{0%{opacity:1}to{opacity:0}}\n/*# sourceURL=/extensions/amp-sidebar/0.1/amp-sidebar.css*/")
        })(self.AMP);
    })
});