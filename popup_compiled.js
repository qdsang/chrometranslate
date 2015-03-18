/* Copyright 2014 Google */
(function() {
    var h, aa = aa || {},
        m = this,
        ba = function(a) {
            a = a.split(".");
            for (var b = m, c; c = a.shift();)
                if (null != b[c]) b = b[c];
                else return null;
            return b
        },
        p = function() {},
        q = function(a) {
            a.D = function() {
                return a.eb ? a.eb : a.eb = new a
            }
        },
        ca = function(a) {
            var b = typeof a;
            if ("object" == b)
                if (a) {
                    if (a instanceof Array) return "array";
                    if (a instanceof Object) return b;
                    var c = Object.prototype.toString.call(a);
                    if ("[object Window]" == c) return "object";
                    if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable &&
                        !a.propertyIsEnumerable("splice")) return "array";
                    if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) return "function"
                } else return "null";
            else if ("function" == b && "undefined" == typeof a.call) return "object";
            return b
        },
        r = function(a) {
            return "array" == ca(a)
        },
        da = function(a) {
            var b = ca(a);
            return "array" == b || "object" == b && "number" == typeof a.length
        },
        s = function(a) {
            return "string" == typeof a
        },
        ea = function(a) {
            return "number" == typeof a
        },
        t = function(a) {
            return "function" ==
                ca(a)
        },
        fa = function(a) {
            var b = typeof a;
            return "object" == b && null != a || "function" == b
        },
        ga = "closure_uid_" + (1E9 * Math.random() >>> 0),
        ha = 0,
        ia = function(a, b, c) {
            return a.call.apply(a.bind, arguments)
        },
        ka = function(a, b, c) {
            if (!a) throw Error();
            if (2 < arguments.length) {
                var d = Array.prototype.slice.call(arguments, 2);
                return function() {
                    var c = Array.prototype.slice.call(arguments);
                    Array.prototype.unshift.apply(c, d);
                    return a.apply(b, c)
                }
            }
            return function() {
                return a.apply(b, arguments)
            }
        },
        u = function(a, b, c) {
            u = Function.prototype.bind &&
                -1 != Function.prototype.bind.toString().indexOf("native code") ? ia : ka;
            return u.apply(null, arguments)
        },
        w = function(a, b) {
            var c = Array.prototype.slice.call(arguments, 1);
            return function() {
                var b = c.slice();
                b.push.apply(b, arguments);
                return a.apply(this, b)
            }
        },
        la = Date.now || function() {
            return +new Date
        },
        x = function(a, b) {
            function c() {}
            c.prototype = b.prototype;
            a.h = b.prototype;
            a.prototype = new c;
            a.prototype.constructor = a;
            a.wb = function(a, c, f) {
                return b.prototype[c].apply(a, Array.prototype.slice.call(arguments, 2))
            }
        };
    Function.prototype.bind = Function.prototype.bind || function(a, b) {
        if (1 < arguments.length) {
            var c = Array.prototype.slice.call(arguments, 1);
            c.unshift(this, a);
            return u.apply(null, c)
        }
        return u(this, a)
    };
    var y = function(a) {
        if (Error.captureStackTrace) Error.captureStackTrace(this, y);
        else {
            var b = Error().stack;
            b && (this.stack = b)
        }
        a && (this.message = String(a))
    };
    x(y, Error);
    y.prototype.name = "CustomError";
    var ma;
    var na = function(a, b) {
            for (var c = a.split("%s"), d = "", e = Array.prototype.slice.call(arguments, 1); e.length && 1 < c.length;) d += c.shift() + e.shift();
            return d + c.join("%s")
        },
        va = function(a) {
            if (!oa.test(a)) return a; - 1 != a.indexOf("&") && (a = a.replace(pa, "&amp;")); - 1 != a.indexOf("<") && (a = a.replace(qa, "&lt;")); - 1 != a.indexOf(">") && (a = a.replace(ra, "&gt;")); - 1 != a.indexOf('"') && (a = a.replace(sa, "&quot;")); - 1 != a.indexOf("'") && (a = a.replace(ta, "&#39;")); - 1 != a.indexOf("\x00") && (a = a.replace(ua, "&#0;"));
            return a
        },
        pa = /&/g,
        qa = /</g,
        ra = />/g,
        sa = /"/g,
        ta = /'/g,
        ua = /\x00/g,
        oa = /[\x00&<>"']/,
        wa = function(a, b) {
            return a < b ? -1 : a > b ? 1 : 0
        };
    var xa = function(a, b) {
        b.unshift(a);
        y.call(this, na.apply(null, b));
        b.shift()
    };
    x(xa, y);
    xa.prototype.name = "AssertionError";
    var ya = function(a, b, c, d) {
            var e = "Assertion failed";
            if (c) var e = e + (": " + c),
                f = d;
            else a && (e += ": " + a, f = b);
            throw new xa("" + e, f || []);
        },
        z = function(a, b, c) {
            a || ya("", null, b, Array.prototype.slice.call(arguments, 2))
        },
        za = function(a, b) {
            throw new xa("Failure" + (a ? ": " + a : ""), Array.prototype.slice.call(arguments, 1));
        },
        Aa = function(a, b, c) {
            s(a) || ya("Expected string but got %s: %s.", [ca(a), a], b, Array.prototype.slice.call(arguments, 2));
            return a
        },
        Ba = function(a, b, c) {
            t(a) || ya("Expected function but got %s: %s.", [ca(a), a], b,
                Array.prototype.slice.call(arguments, 2))
        },
        Ca = function(a, b, c, d) {
            a instanceof b || ya("instanceof check failed.", null, c, Array.prototype.slice.call(arguments, 3))
        };
    var A = Array.prototype,
        Da = A.indexOf ? function(a, b, c) {
            z(null != a.length);
            return A.indexOf.call(a, b, c)
        } : function(a, b, c) {
            c = null == c ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
            if (s(a)) return s(b) && 1 == b.length ? a.indexOf(b, c) : -1;
            for (; c < a.length; c++)
                if (c in a && a[c] === b) return c;
            return -1
        },
        B = A.forEach ? function(a, b, c) {
            z(null != a.length);
            A.forEach.call(a, b, c)
        } : function(a, b, c) {
            for (var d = a.length, e = s(a) ? a.split("") : a, f = 0; f < d; f++) f in e && b.call(c, e[f], f, a)
        },
        Ea = A.filter ? function(a, b, c) {
            z(null != a.length);
            return A.filter.call(a, b,
                c)
        } : function(a, b, c) {
            for (var d = a.length, e = [], f = 0, g = s(a) ? a.split("") : a, k = 0; k < d; k++)
                if (k in g) {
                    var n = g[k];
                    b.call(c, n, k, a) && (e[f++] = n)
                }
            return e
        },
        Fa = A.map ? function(a, b, c) {
            z(null != a.length);
            return A.map.call(a, b, c)
        } : function(a, b, c) {
            for (var d = a.length, e = Array(d), f = s(a) ? a.split("") : a, g = 0; g < d; g++) g in f && (e[g] = b.call(c, f[g], g, a));
            return e
        },
        Ga = A.some ? function(a, b, c) {
            z(null != a.length);
            return A.some.call(a, b, c)
        } : function(a, b, c) {
            for (var d = a.length, e = s(a) ? a.split("") : a, f = 0; f < d; f++)
                if (f in e && b.call(c, e[f], f, a)) return !0;
            return !1
        },
        Ha = A.every ? function(a, b, c) {
            z(null != a.length);
            return A.every.call(a, b, c)
        } : function(a, b, c) {
            for (var d = a.length, e = s(a) ? a.split("") : a, f = 0; f < d; f++)
                if (f in e && !b.call(c, e[f], f, a)) return !1;
            return !0
        },
        Ja = function(a) {
            var b;
            t: {
                b = Ia;
                for (var c = a.length, d = s(a) ? a.split("") : a, e = 0; e < c; e++)
                    if (e in d && b.call(void 0, d[e], e, a)) {
                        b = e;
                        break t
                    }
                b = -1
            }
            return 0 > b ? null : s(a) ? a.charAt(b) : a[b]
        },
        C = function(a, b) {
            return 0 <= Da(a, b)
        },
        Ka = function(a, b) {
            var c = Da(a, b),
                d;
            if (d = 0 <= c) z(null != a.length), A.splice.call(a, c, 1);
            return d
        },
        La = function(a) {
            return A.concat.apply(A, arguments)
        },
        Ma = function(a) {
            var b = a.length;
            if (0 < b) {
                for (var c = Array(b), d = 0; d < b; d++) c[d] = a[d];
                return c
            }
            return []
        };
    var Na = function(a, b, c) {
            for (var d in a) b.call(c, a[d], d, a)
        },
        Oa = function(a) {
            var b = [],
                c = 0,
                d;
            for (d in a) b[c++] = a[d];
            return b
        },
        Pa = function(a) {
            var b = [],
                c = 0,
                d;
            for (d in a) b[c++] = d;
            return b
        },
        Qa = function(a, b) {
            for (var c in a)
                if (a[c] == b) return !0;
            return !1
        },
        Ra = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" "),
        Sa = function(a, b) {
            for (var c, d, e = 1; e < arguments.length; e++) {
                d = arguments[e];
                for (c in d) a[c] = d[c];
                for (var f = 0; f < Ra.length; f++) c = Ra[f], Object.prototype.hasOwnProperty.call(d,
                    c) && (a[c] = d[c])
            }
        },
        Ta = function(a) {
            var b = arguments.length;
            if (1 == b && r(arguments[0])) return Ta.apply(null, arguments[0]);
            if (b % 2) throw Error("Uneven number of arguments");
            for (var c = {}, d = 0; d < b; d += 2) c[arguments[d]] = arguments[d + 1];
            return c
        },
        Ua = function(a) {
            var b = arguments.length;
            if (1 == b && r(arguments[0])) return Ua.apply(null, arguments[0]);
            for (var c = {}, d = 0; d < b; d++) c[arguments[d]] = !0;
            return c
        };
    var Va;
    t: {
        var Wa = m.navigator;
        if (Wa) {
            var Xa = Wa.userAgent;
            if (Xa) {
                Va = Xa;
                break t
            }
        }
        Va = ""
    }
    var D = function(a) {
        return -1 != Va.indexOf(a)
    };
    var Ya = D("Opera") || D("OPR"),
        E = D("Trident") || D("MSIE"),
        F = D("Gecko") && -1 == Va.toLowerCase().indexOf("webkit") && !(D("Trident") || D("MSIE")),
        G = -1 != Va.toLowerCase().indexOf("webkit"),
        Za = m.navigator || null,
        H = -1 != (Za && Za.platform || "").indexOf("Mac"),
        $a = function() {
            var a = m.document;
            return a ? a.documentMode : void 0
        },
        ab = function() {
            var a = "",
                b;
            if (Ya && m.opera) return a = m.opera.version, t(a) ? a() : a;
            F ? b = /rv\:([^\);]+)(\)|;)/ : E ? b = /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/ : G && (b = /WebKit\/(\S+)/);
            b && (a = (a = b.exec(Va)) ? a[1] : "");
            return E &&
                (b = $a(), b > parseFloat(a)) ? String(b) : a
        }(),
        bb = {},
        I = function(a) {
            var b;
            if (!(b = bb[a])) {
                b = 0;
                for (var c = String(ab).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), d = String(a).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), e = Math.max(c.length, d.length), f = 0; 0 == b && f < e; f++) {
                    var g = c[f] || "",
                        k = d[f] || "",
                        n = RegExp("(\\d*)(\\D*)", "g"),
                        l = RegExp("(\\d*)(\\D*)", "g");
                    do {
                        var v = n.exec(g) || ["", "", ""],
                            ja = l.exec(k) || ["", "", ""];
                        if (0 == v[0].length && 0 == ja[0].length) break;
                        b = wa(0 == v[1].length ? 0 : parseInt(v[1], 10), 0 == ja[1].length ? 0 :
                            parseInt(ja[1], 10)) || wa(0 == v[2].length, 0 == ja[2].length) || wa(v[2], ja[2])
                    } while (0 == b)
                }
                b = bb[a] = 0 <= b
            }
            return b
        },
        cb = m.document,
        db = cb && E ? $a() || ("CSS1Compat" == cb.compatMode ? parseInt(ab, 10) : 5) : void 0;
    var eb = !E || E && 9 <= db,
        fb = !F && !E || E && E && 9 <= db || F && I("1.9.1"),
        gb = E && !I("9");
    var jb = function(a) {
            return a ? new hb(ib(a)) : ma || (ma = new hb)
        },
        J = function(a) {
            return s(a) ? document.getElementById(a) : a
        },
        lb = function(a, b) {
            var c = b || document,
                d = null;
            c.querySelectorAll && c.querySelector ? d = c.querySelector("." + a) : d = kb(a, b)[0];
            return d || null
        },
        kb = function(a, b) {
            var c, d, e, f;
            c = document;
            c = b || c;
            if (c.querySelectorAll && c.querySelector && a) return c.querySelectorAll("" + (a ? "." + a : ""));
            if (a && c.getElementsByClassName) {
                var g = c.getElementsByClassName(a);
                return g
            }
            g = c.getElementsByTagName("*");
            if (a) {
                f = {};
                for (d =
                    e = 0; c = g[d]; d++) {
                    var k = c.className;
                    "function" == typeof k.split && C(k.split(/\s+/), a) && (f[e++] = c)
                }
                f.length = e;
                return f
            }
            return g
        },
        nb = function(a, b) {
            Na(b, function(b, d) {
                "style" == d ? a.style.cssText = b : "class" == d ? a.className = b : "for" == d ? a.htmlFor = b : d in mb ? a.setAttribute(mb[d], b) : 0 == d.lastIndexOf("aria-", 0) || 0 == d.lastIndexOf("data-", 0) ? a.setAttribute(d, b) : a[d] = b
            })
        },
        mb = {
            cellpadding: "cellPadding",
            cellspacing: "cellSpacing",
            colspan: "colSpan",
            frameborder: "frameBorder",
            height: "height",
            maxlength: "maxLength",
            role: "role",
            rowspan: "rowSpan",
            type: "type",
            usemap: "useMap",
            valign: "vAlign",
            width: "width"
        },
        pb = function(a, b, c, d) {
            function e(c) {
                c && b.appendChild(s(c) ? a.createTextNode(c) : c)
            }
            for (; d < c.length; d++) {
                var f = c[d];
                !da(f) || fa(f) && 0 < f.nodeType ? e(f) : B(ob(f) ? Ma(f) : f, e)
            }
        },
        qb = function(a) {
            a && a.parentNode && a.parentNode.removeChild(a)
        },
        rb = function(a, b) {
            if (a.contains && 1 == b.nodeType) return a == b || a.contains(b);
            if ("undefined" != typeof a.compareDocumentPosition) return a == b || Boolean(a.compareDocumentPosition(b) & 16);
            for (; b && a != b;) b = b.parentNode;
            return b == a
        },
        ib = function(a) {
            z(a, "Node cannot be null or undefined.");
            return 9 == a.nodeType ? a : a.ownerDocument || a.document
        },
        sb = function(a, b) {
            z(null != a, "goog.dom.setTextContent expects a non-null value for node");
            if ("textContent" in a) a.textContent = b;
            else if (3 == a.nodeType) a.data = b;
            else if (a.firstChild && 3 == a.firstChild.nodeType) {
                for (; a.lastChild != a.firstChild;) a.removeChild(a.lastChild);
                a.firstChild.data = b
            } else {
                for (var c; c = a.firstChild;) a.removeChild(c);
                c = ib(a);
                a.appendChild(c.createTextNode(String(b)))
            }
        },
        tb = {
            SCRIPT: 1,
            STYLE: 1,
            HEAD: 1,
            IFRAME: 1,
            OBJECT: 1
        },
        ub = {
            IMG: " ",
            BR: "\n"
        },
        vb = function(a, b) {
            b ? a.tabIndex = 0 : (a.tabIndex = -1, a.removeAttribute("tabIndex"))
        },
        wb = function(a) {
            a = a.getAttributeNode("tabindex");
            return null != a && a.specified
        },
        xb = function(a) {
            a = a.tabIndex;
            return ea(a) && 0 <= a && 32768 > a
        },
        zb = function(a) {
            var b = [];
            yb(a, b, !1);
            return b.join("")
        },
        yb = function(a, b, c) {
            if (!(a.nodeName in tb))
                if (3 == a.nodeType) c ? b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g, "")) : b.push(a.nodeValue);
                else if (a.nodeName in ub) b.push(ub[a.nodeName]);
            else
                for (a = a.firstChild; a;) yb(a, b, c), a = a.nextSibling
        },
        ob = function(a) {
            if (a && "number" == typeof a.length) {
                if (fa(a)) return "function" == typeof a.item || "string" == typeof a.item;
                if (t(a)) return "function" == typeof a.item
            }
            return !1
        },
        hb = function(a) {
            this.a = a || m.document || document
        };
    h = hb.prototype;
    h.i = function(a) {
        return s(a) ? this.a.getElementById(a) : a
    };
    h.Ia = function(a, b, c) {
        var d = this.a,
            e = arguments,
            f = e[0],
            g = e[1];
        if (!eb && g && (g.name || g.type)) {
            f = ["<", f];
            g.name && f.push(' name="', va(g.name), '"');
            if (g.type) {
                f.push(' type="', va(g.type), '"');
                var k = {};
                Sa(k, g);
                delete k.type;
                g = k
            }
            f.push(">");
            f = f.join("")
        }
        f = d.createElement(f);
        g && (s(g) ? f.className = g : r(g) ? f.className = g.join(" ") : nb(f, g));
        2 < e.length && pb(d, f, e, 2);
        return f
    };
    h.ib = function(a, b) {
        pb(ib(a), a, arguments, 1)
    };
    h.getChildren = function(a) {
        return fb && void 0 != a.children ? a.children : Ea(a.childNodes, function(a) {
            return 1 == a.nodeType
        })
    };
    h.contains = rb;
    var Ab = function(a) {
        Ab[" "](a);
        return a
    };
    Ab[" "] = p;
    var Bb = !E || E && 9 <= db,
        Cb = !E || E && 9 <= db,
        Db = E && !I("9");
    !G || I("528");
    F && I("1.9b") || E && I("8") || Ya && I("9.5") || G && I("528");
    F && !I("8") || E && I("9");
    var Eb = function() {
        this.k = this.k;
        this.U = this.U
    };
    Eb.prototype.k = !1;
    Eb.prototype.fa = function() {
        this.k || (this.k = !0, this.p())
    };
    Eb.prototype.p = function() {
        if (this.U)
            for (; this.U.length;) this.U.shift()()
    };
    var K = function(a, b) {
        this.type = a;
        this.b = this.c = b;
        this.d = !1;
        this.Oa = !0
    };
    K.prototype.fa = function() {};
    K.prototype.g = function() {
        this.d = !0
    };
    K.prototype.e = function() {
        this.Oa = !1
    };
    var L = function(a, b) {
        K.call(this, a ? a.type : "");
        this.f = this.b = this.c = null;
        this.keyCode = this.clientY = this.clientX = 0;
        this.k = this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = !1;
        this.a = null;
        if (a) {
            var c = this.type = a.type;
            this.c = a.target || a.srcElement;
            this.b = b;
            var d = a.relatedTarget;
            if (d) {
                if (F) {
                    var e;
                    t: {
                        try {
                            Ab(d.nodeName);
                            e = !0;
                            break t
                        } catch (f) {}
                        e = !1
                    }
                    e || (d = null)
                }
            } else "mouseover" == c ? d = a.fromElement : "mouseout" == c && (d = a.toElement);
            this.f = d;
            this.clientX = void 0 !== a.clientX ? a.clientX : a.pageX;
            this.clientY = void 0 !==
                a.clientY ? a.clientY : a.pageY;
            this.keyCode = a.keyCode || 0;
            this.ctrlKey = a.ctrlKey;
            this.altKey = a.altKey;
            this.shiftKey = a.shiftKey;
            this.metaKey = a.metaKey;
            this.k = H ? a.metaKey : a.ctrlKey;
            this.a = a;
            a.defaultPrevented && this.e()
        }
    };
    x(L, K);
    var Fb = [1, 4, 2],
        Gb = function(a) {
            return Bb ? 0 == a.a.button : "click" == a.type ? !0 : !!(a.a.button & Fb[0])
        };
    L.prototype.g = function() {
        L.h.g.call(this);
        this.a.stopPropagation ? this.a.stopPropagation() : this.a.cancelBubble = !0
    };
    L.prototype.e = function() {
        L.h.e.call(this);
        var a = this.a;
        if (a.preventDefault) a.preventDefault();
        else if (a.returnValue = !1, Db) try {
            if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) a.keyCode = -1
        } catch (b) {}
    };
    var Hb = "closure_listenable_" + (1E6 * Math.random() | 0),
        Ib = 0;
    var Jb = function(a, b, c, d, e) {
            this.W = a;
            this.proxy = null;
            this.src = b;
            this.type = c;
            this.ua = !!d;
            this.za = e;
            this.Sa = ++Ib;
            this.removed = this.va = !1
        },
        Kb = function(a) {
            a.removed = !0;
            a.W = null;
            a.proxy = null;
            a.src = null;
            a.za = null
        };
    var Lb = function(a) {
        this.src = a;
        this.a = {};
        this.b = 0
    };
    Lb.prototype.add = function(a, b, c, d, e) {
        var f = a.toString();
        a = this.a[f];
        a || (a = this.a[f] = [], this.b++);
        var g = Mb(a, b, d, e); - 1 < g ? (b = a[g], c || (b.va = !1)) : (b = new Jb(b, this.src, f, !!d, e), b.va = c, a.push(b));
        return b
    };
    Lb.prototype.remove = function(a, b, c, d) {
        a = a.toString();
        if (!(a in this.a)) return !1;
        var e = this.a[a];
        b = Mb(e, b, c, d);
        return -1 < b ? (Kb(e[b]), z(null != e.length), A.splice.call(e, b, 1), 0 == e.length && (delete this.a[a], this.b--), !0) : !1
    };
    var Nb = function(a, b) {
        var c = b.type;
        if (!(c in a.a)) return !1;
        var d = Ka(a.a[c], b);
        d && (Kb(b), 0 == a.a[c].length && (delete a.a[c], a.b--));
        return d
    };
    Lb.prototype.removeAll = function(a) {
        a = a && a.toString();
        var b = 0,
            c;
        for (c in this.a)
            if (!a || c == a) {
                for (var d = this.a[c], e = 0; e < d.length; e++) ++b, Kb(d[e]);
                delete this.a[c];
                this.b--
            }
        return b
    };
    var Ob = function(a, b, c, d, e) {
            a = a.a[b.toString()];
            b = -1;
            a && (b = Mb(a, c, d, e));
            return -1 < b ? a[b] : null
        },
        Mb = function(a, b, c, d) {
            for (var e = 0; e < a.length; ++e) {
                var f = a[e];
                if (!f.removed && f.W == b && f.ua == !!c && f.za == d) return e
            }
            return -1
        };
    var Pb = "closure_lm_" + (1E6 * Math.random() | 0),
        Qb = {},
        Rb = 0,
        M = function(a, b, c, d, e) {
            if (r(b)) {
                for (var f = 0; f < b.length; f++) M(a, b[f], c, d, e);
                return null
            }
            c = Sb(c);
            if (a && a[Hb]) a = a.listen(b, c, d, e);
            else {
                if (!b) throw Error("Invalid event type");
                var f = !!d,
                    g = Tb(a);
                g || (a[Pb] = g = new Lb(a));
                c = g.add(b, c, !1, d, e);
                c.proxy || (d = Ub(), c.proxy = d, d.src = a, d.W = c, a.addEventListener ? a.addEventListener(b.toString(), d, f) : a.attachEvent(Vb(b.toString()), d), Rb++);
                a = c
            }
            return a
        },
        Ub = function() {
            var a = Wb,
                b = Cb ? function(c) {
                    return a.call(b.src, b.W,
                        c)
                } : function(c) {
                    c = a.call(b.src, b.W, c);
                    if (!c) return c
                };
            return b
        },
        Xb = function(a, b, c, d, e) {
            if (r(b))
                for (var f = 0; f < b.length; f++) Xb(a, b[f], c, d, e);
            else c = Sb(c), a && a[Hb] ? a.J(b, c, d, e) : a && (a = Tb(a)) && (b = Ob(a, b, c, !!d, e)) && Yb(b)
        },
        Yb = function(a) {
            if (ea(a) || !a || a.removed) return !1;
            var b = a.src;
            if (b && b[Hb]) return Nb(b.C, a);
            var c = a.type,
                d = a.proxy;
            b.removeEventListener ? b.removeEventListener(c, d, a.ua) : b.detachEvent && b.detachEvent(Vb(c), d);
            Rb--;
            (c = Tb(b)) ? (Nb(c, a), 0 == c.b && (c.src = null, b[Pb] = null)) : Kb(a);
            return !0
        },
        Vb = function(a) {
            return a in
                Qb ? Qb[a] : Qb[a] = "on" + a
        },
        $b = function(a, b, c, d) {
            var e = 1;
            if (a = Tb(a))
                if (b = a.a[b.toString()])
                    for (b = b.concat(), a = 0; a < b.length; a++) {
                        var f = b[a];
                        f && f.ua == c && !f.removed && (e &= !1 !== Zb(f, d))
                    }
                return Boolean(e)
        },
        Zb = function(a, b) {
            var c = a.W,
                d = a.za || a.src;
            a.va && Yb(a);
            return c.call(d, b)
        },
        Wb = function(a, b) {
            if (a.removed) return !0;
            if (!Cb) {
                var c = b || ba("window.event"),
                    d = new L(c, this),
                    e = !0;
                if (!(0 > c.keyCode || void 0 != c.returnValue)) {
                    t: {
                        var f = !1;
                        if (0 == c.keyCode) try {
                            c.keyCode = -1;
                            break t
                        } catch (g) {
                            f = !0
                        }
                        if (f || void 0 == c.returnValue) c.returnValue = !0
                    }
                    c = [];
                    for (f = d.b; f; f = f.parentNode) c.push(f);
                    for (var f = a.type, k = c.length - 1; !d.d && 0 <= k; k--) d.b = c[k],
                    e &= $b(c[k], f, !0, d);
                    for (k = 0; !d.d && k < c.length; k++) d.b = c[k],
                    e &= $b(c[k], f, !1, d)
                }
                return e
            }
            return Zb(a, new L(b, this))
        },
        Tb = function(a) {
            a = a[Pb];
            return a instanceof Lb ? a : null
        },
        ac = "__closure_events_fn_" + (1E9 * Math.random() >>> 0),
        Sb = function(a) {
            z(a, "Listener can not be null.");
            if (t(a)) return a;
            z(a.handleEvent, "An object listener must have handleEvent method.");
            a[ac] || (a[ac] = function(b) {
                return a.handleEvent(b)
            });
            return a[ac]
        };
    var bc = function(a, b) {
            a.style.display = b ? "" : "none"
        },
        cc = F ? "MozUserSelect" : G ? "WebkitUserSelect" : null;
    var dc = "StopIteration" in m ? m.StopIteration : Error("StopIteration"),
        ec = function() {};
    ec.prototype.next = function() {
        throw dc;
    };
    ec.prototype.ub = function() {
        return this
    };
    var fc = function(a, b) {
        this.b = {};
        this.a = [];
        this.d = this.c = 0;
        var c = arguments.length;
        if (1 < c) {
            if (c % 2) throw Error("Uneven number of arguments");
            for (var d = 0; d < c; d += 2) this.set(arguments[d], arguments[d + 1])
        } else if (a) {
            a instanceof fc ? (c = a.N(), d = a.I()) : (c = Pa(a), d = Oa(a));
            for (var e = 0; e < c.length; e++) this.set(c[e], d[e])
        }
    };
    fc.prototype.I = function() {
        gc(this);
        for (var a = [], b = 0; b < this.a.length; b++) a.push(this.b[this.a[b]]);
        return a
    };
    fc.prototype.N = function() {
        gc(this);
        return this.a.concat()
    };
    fc.prototype.remove = function(a) {
        return hc(this.b, a) ? (delete this.b[a], this.c--, this.d++, this.a.length > 2 * this.c && gc(this), !0) : !1
    };
    var gc = function(a) {
        if (a.c != a.a.length) {
            for (var b = 0, c = 0; b < a.a.length;) {
                var d = a.a[b];
                hc(a.b, d) && (a.a[c++] = d);
                b++
            }
            a.a.length = c
        }
        if (a.c != a.a.length) {
            for (var e = {}, c = b = 0; b < a.a.length;) d = a.a[b], hc(e, d) || (a.a[c++] = d, e[d] = 1), b++;
            a.a.length = c
        }
    };
    h = fc.prototype;
    h.get = function(a, b) {
        return hc(this.b, a) ? this.b[a] : b
    };
    h.set = function(a, b) {
        hc(this.b, a) || (this.c++, this.a.push(a), this.d++);
        this.b[a] = b
    };
    h.forEach = function(a, b) {
        for (var c = this.N(), d = 0; d < c.length; d++) {
            var e = c[d],
                f = this.get(e);
            a.call(b, f, e, this)
        }
    };
    h.clone = function() {
        return new fc(this)
    };
    h.ub = function(a) {
        gc(this);
        var b = 0,
            c = this.a,
            d = this.b,
            e = this.d,
            f = this,
            g = new ec;
        g.next = function() {
            for (;;) {
                if (e != f.d) throw Error("The map has changed since the iterator was created");
                if (b >= c.length) throw dc;
                var g = c[b++];
                return a ? g : d[g]
            }
        };
        return g
    };
    var hc = function(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b)
    };
    var ic = function(a) {
            if ("function" == typeof a.I) return a.I();
            if (s(a)) return a.split("");
            if (da(a)) {
                for (var b = [], c = a.length, d = 0; d < c; d++) b.push(a[d]);
                return b
            }
            return Oa(a)
        },
        jc = function(a, b, c) {
            if ("function" == typeof a.forEach) a.forEach(b, c);
            else if (da(a) || s(a)) B(a, b, c);
            else {
                var d;
                if ("function" == typeof a.N) d = a.N();
                else if ("function" != typeof a.I)
                    if (da(a) || s(a)) {
                        d = [];
                        for (var e = a.length, f = 0; f < e; f++) d.push(f)
                    } else d = Pa(a);
                else d = void 0;
                for (var e = ic(a), f = e.length, g = 0; g < f; g++) b.call(c, e[g], d && d[g], a)
            }
        };
    var kc = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#(.*))?$/,
        lc = G,
        mc = function(a, b) {
            if (lc) {
                lc = !1;
                var c = m.location;
                if (c) {
                    var d = c.href;
                    if (d && (d = (d = mc(3, d)) ? decodeURI(d) : d) && d != c.hostname) throw lc = !0, Error();
                }
            }
            return b.match(kc)[a] || null
        };
    var N = function(a, b, c) {
            this.b = a || null;
            this.d = !!c
        },
        oc = function(a) {
            if (!a.a && (a.a = new fc, a.c = 0, a.b))
                for (var b = a.b.split("&"), c = 0; c < b.length; c++) {
                    var d = b[c].indexOf("="),
                        e = null,
                        f = null;
                    0 <= d ? (e = b[c].substring(0, d), f = b[c].substring(d + 1)) : e = b[c];
                    e = decodeURIComponent(e.replace(/\+/g, " "));
                    e = nc(a, e);
                    a.add(e, f ? decodeURIComponent(f.replace(/\+/g, " ")) : "")
                }
        };
    N.prototype.a = null;
    N.prototype.c = null;
    N.prototype.add = function(a, b) {
        oc(this);
        this.b = null;
        a = nc(this, a);
        var c = this.a.get(a);
        c || this.a.set(a, c = []);
        c.push(b);
        this.c++;
        return this
    };
    N.prototype.remove = function(a) {
        oc(this);
        a = nc(this, a);
        return hc(this.a.b, a) ? (this.b = null, this.c -= this.a.get(a).length, this.a.remove(a)) : !1
    };
    var pc = function(a, b) {
        oc(a);
        b = nc(a, b);
        return hc(a.a.b, b)
    };
    h = N.prototype;
    h.N = function() {
        oc(this);
        for (var a = this.a.I(), b = this.a.N(), c = [], d = 0; d < b.length; d++)
            for (var e = a[d], f = 0; f < e.length; f++) c.push(b[d]);
        return c
    };
    h.I = function(a) {
        oc(this);
        var b = [];
        if (s(a)) pc(this, a) && (b = La(b, this.a.get(nc(this, a))));
        else {
            a = this.a.I();
            for (var c = 0; c < a.length; c++) b = La(b, a[c])
        }
        return b
    };
    h.set = function(a, b) {
        oc(this);
        this.b = null;
        a = nc(this, a);
        pc(this, a) && (this.c -= this.a.get(a).length);
        this.a.set(a, [b]);
        this.c++;
        return this
    };
    h.get = function(a, b) {
        var c = a ? this.I(a) : [];
        return 0 < c.length ? String(c[0]) : b
    };
    h.toString = function() {
        if (this.b) return this.b;
        if (!this.a) return "";
        for (var a = [], b = this.a.N(), c = 0; c < b.length; c++)
            for (var d = b[c], e = encodeURIComponent(String(d)), d = this.I(d), f = 0; f < d.length; f++) {
                var g = e;
                "" !== d[f] && (g += "=" + encodeURIComponent(String(d[f])));
                a.push(g)
            }
        return this.b = a.join("&")
    };
    h.clone = function() {
        var a = new N;
        a.b = this.b;
        this.a && (a.a = this.a.clone(), a.c = this.c);
        return a
    };
    var nc = function(a, b) {
        var c = String(b);
        a.d && (c = c.toLowerCase());
        return c
    };
    N.prototype.e = function(a) {
        for (var b = 0; b < arguments.length; b++) jc(arguments[b], function(a, b) {
            this.add(b, a)
        }, this)
    };
    var qc = function(a) {
            if (a.classList) return a.classList;
            a = a.className;
            return s(a) && a.match(/\S+/g) || []
        },
        rc = function(a, b) {
            return a.classList ? a.classList.contains(b) : C(qc(a), b)
        },
        sc = function(a, b) {
            a.classList ? a.classList.add(b) : rc(a, b) || (a.className += 0 < a.className.length ? " " + b : b)
        },
        tc = function(a, b) {
            if (a.classList) B(b, function(b) {
                sc(a, b)
            });
            else {
                var c = {};
                B(qc(a), function(a) {
                    c[a] = !0
                });
                B(b, function(a) {
                    c[a] = !0
                });
                a.className = "";
                for (var d in c) a.className += 0 < a.className.length ? " " + d : d
            }
        },
        uc = function(a, b) {
            a.classList ?
                a.classList.remove(b) : rc(a, b) && (a.className = Ea(qc(a), function(a) {
                    return a != b
                }).join(" "))
        },
        vc = function(a, b) {
            a.classList ? B(b, function(b) {
                uc(a, b)
            }) : a.className = Ea(qc(a), function(a) {
                return !C(b, a)
            }).join(" ")
        };
    Ua("area base br col command embed hr img input keygen link meta param source track wbr".split(" "));
    var xc = function() {
        this.a = "";
        this.b = wc;
        this.c = null
    };
    xc.prototype.toString = function() {
        return "SafeHtml{" + this.a + "}"
    };
    Ua("action", "cite", "data", "formaction", "href", "manifest", "poster", "src");
    Ua("link", "script", "style");
    var wc = {};
    var yc = {
            od: !0
        },
        zc = {
            nd: !0
        },
        Ac = {
            pd: !0
        },
        O = function() {
            throw Error("Do not instantiate directly");
        };
    O.prototype.ma = null;
    O.prototype.Q = function() {
        return this.content
    };
    O.prototype.toString = function() {
        return this.content
    };
    var Ec = function(a, b) {
            var c = Bc;
            z(c, "Soy template may not be null.");
            a.innerHTML = Cc(c(b || Dc, void 0, void 0))
        },
        Cc = function(a) {
            if (!fa(a)) return String(a);
            if (a instanceof O) {
                if (a.V === yc) return Aa(a.Q());
                if (a.V === Ac) return va(a.Q())
            }
            za("Soy template output is unsafe for use as HTML: " + a);
            return "zSoyz"
        },
        Fc = /^<(body|caption|col|colgroup|head|html|tr|td|tbody|thead|tfoot)>/i,
        Dc = {};
    var Ic = function(a, b, c, d, e) {
            if (!(E || G && I("525"))) return !0;
            if (H && e) return Gc(a);
            if (e && !d) return !1;
            ea(b) && (b = Hc(b));
            if (!c && (17 == b || 18 == b || H && 91 == b)) return !1;
            if (G && d && c) switch (a) {
                case 220:
                case 219:
                case 221:
                case 192:
                case 186:
                case 189:
                case 187:
                case 188:
                case 190:
                case 191:
                case 192:
                case 222:
                    return !1
            }
            if (E && d && b == a) return !1;
            switch (a) {
                case 13:
                    return !0;
                case 27:
                    return !G
            }
            return Gc(a)
        },
        Gc = function(a) {
            if (48 <= a && 57 >= a || 96 <= a && 106 >= a || 65 <= a && 90 >= a || G && 0 == a) return !0;
            switch (a) {
                case 32:
                case 63:
                case 107:
                case 109:
                case 110:
                case 111:
                case 186:
                case 59:
                case 189:
                case 187:
                case 61:
                case 188:
                case 190:
                case 191:
                case 192:
                case 222:
                case 219:
                case 220:
                case 221:
                    return !0;
                default:
                    return !1
            }
        },
        Hc = function(a) {
            if (F) a = Jc(a);
            else if (H && G) t: switch (a) {
                case 93:
                    a = 91;
                    break t
            }
            return a
        },
        Jc = function(a) {
            switch (a) {
                case 61:
                    return 187;
                case 59:
                    return 186;
                case 173:
                    return 189;
                case 224:
                    return 91;
                case 0:
                    return 224;
                default:
                    return a
            }
        };
    var P = function() {
        Eb.call(this);
        this.C = new Lb(this);
        this.jb = this;
        this.T = null
    };
    x(P, Eb);
    P.prototype[Hb] = !0;
    P.prototype.Ha = function(a) {
        this.T = a
    };
    P.prototype.addEventListener = function(a, b, c, d) {
        M(this, a, b, c, d)
    };
    P.prototype.removeEventListener = function(a, b, c, d) {
        Xb(this, a, b, c, d)
    };
    var Q = function(a, b) {
        Kc(a);
        var c, d = a.T;
        if (d) {
            c = [];
            for (var e = 1; d; d = d.T) c.push(d), z(1E3 > ++e, "infinite loop")
        }
        var d = a.jb,
            e = b,
            f = e.type || e;
        if (s(e)) e = new K(e, d);
        else if (e instanceof K) e.c = e.c || d;
        else {
            var g = e,
                e = new K(f, d);
            Sa(e, g)
        }
        var g = !0,
            k;
        if (c)
            for (var n = c.length - 1; !e.d && 0 <= n; n--) k = e.b = c[n], g = Lc(k, f, !0, e) && g;
        e.d || (k = e.b = d, g = Lc(k, f, !0, e) && g, e.d || (g = Lc(k, f, !1, e) && g));
        if (c)
            for (n = 0; !e.d && n < c.length; n++) k = e.b = c[n], g = Lc(k, f, !1, e) && g;
        return g
    };
    P.prototype.p = function() {
        P.h.p.call(this);
        this.C && this.C.removeAll(void 0);
        this.T = null
    };
    P.prototype.listen = function(a, b, c, d) {
        Kc(this);
        return this.C.add(String(a), b, !1, c, d)
    };
    P.prototype.J = function(a, b, c, d) {
        return this.C.remove(String(a), b, c, d)
    };
    var Lc = function(a, b, c, d) {
            b = a.C.a[String(b)];
            if (!b) return !0;
            b = b.concat();
            for (var e = !0, f = 0; f < b.length; ++f) {
                var g = b[f];
                if (g && !g.removed && g.ua == c) {
                    var k = g.W,
                        n = g.za || g.src;
                    g.va && Nb(a.C, g);
                    e = !1 !== k.call(n, d) && e
                }
            }
            return e && 0 != d.Oa
        },
        Kc = function(a) {
            z(a.C, "Event target is not initialized. Did you call the superclass (goog.events.EventTarget) constructor?")
        };
    var Mc = function(a, b) {
        P.call(this);
        a && this.attach(a, b)
    };
    x(Mc, P);
    h = Mc.prototype;
    h.$ = null;
    h.Ba = null;
    h.Na = null;
    h.Ca = null;
    h.u = -1;
    h.R = -1;
    h.Ka = !1;
    var Nc = {
            3: 13,
            12: 144,
            63232: 38,
            63233: 40,
            63234: 37,
            63235: 39,
            63236: 112,
            63237: 113,
            63238: 114,
            63239: 115,
            63240: 116,
            63241: 117,
            63242: 118,
            63243: 119,
            63244: 120,
            63245: 121,
            63246: 122,
            63247: 123,
            63248: 44,
            63272: 46,
            63273: 36,
            63275: 35,
            63276: 33,
            63277: 34,
            63289: 144,
            63302: 45
        },
        Oc = {
            Up: 38,
            Down: 40,
            Left: 37,
            Right: 39,
            Enter: 13,
            F1: 112,
            F2: 113,
            F3: 114,
            F4: 115,
            F5: 116,
            F6: 117,
            F7: 118,
            F8: 119,
            F9: 120,
            F10: 121,
            F11: 122,
            F12: 123,
            "U+007F": 46,
            Home: 36,
            End: 35,
            PageUp: 33,
            PageDown: 34,
            Insert: 45
        },
        Pc = E || G && I("525"),
        Qc = H && F;
    h = Mc.prototype;
    h.mb = function(a) {
        G && (17 == this.u && !a.ctrlKey || 18 == this.u && !a.altKey || H && 91 == this.u && !a.metaKey) && (this.R = this.u = -1); - 1 == this.u && (a.ctrlKey && 17 != a.keyCode ? this.u = 17 : a.altKey && 18 != a.keyCode ? this.u = 18 : a.metaKey && 91 != a.keyCode && (this.u = 91));
        Pc && !Ic(a.keyCode, this.u, a.shiftKey, a.ctrlKey, a.altKey) ? this.handleEvent(a) : (this.R = Hc(a.keyCode), Qc && (this.Ka = a.altKey))
    };
    h.nb = function(a) {
        this.R = this.u = -1;
        this.Ka = a.altKey
    };
    h.handleEvent = function(a) {
        var b = a.a,
            c, d, e = b.altKey;
        E && "keypress" == a.type ? c = this.R : G && "keypress" == a.type ? c = this.R : Ya ? c = this.R : (c = b.keyCode || this.R, d = b.charCode || 0, Qc && (e = this.Ka), H && 63 == d && 224 == c && (c = 191));
        d = c = Hc(c);
        var f = b.keyIdentifier;
        c ? 63232 <= c && c in Nc ? d = Nc[c] : 25 == c && a.shiftKey && (d = 9) : f && f in Oc && (d = Oc[f]);
        this.u = d;
        a = new Rc(d, 0, 0, b);
        a.altKey = e;
        Q(this, a)
    };
    h.i = function() {
        return this.$
    };
    h.attach = function(a, b) {
        this.Ca && Sc(this);
        this.$ = a;
        this.Ba = M(this.$, "keypress", this, b);
        this.Na = M(this.$, "keydown", this.mb, b, this);
        this.Ca = M(this.$, "keyup", this.nb, b, this)
    };
    var Sc = function(a) {
        a.Ba && (Yb(a.Ba), Yb(a.Na), Yb(a.Ca), a.Ba = null, a.Na = null, a.Ca = null);
        a.$ = null;
        a.u = -1;
        a.R = -1
    };
    Mc.prototype.p = function() {
        Mc.h.p.call(this);
        Sc(this)
    };
    var Rc = function(a, b, c, d) {
        L.call(this, d);
        this.type = "key";
        this.keyCode = a
    };
    x(Rc, L);
    var Tc, Uc = {
        xb: "activedescendant",
        Cb: "atomic",
        Db: "autocomplete",
        Fb: "busy",
        tb: "checked",
        Mb: "controls",
        Ob: "describedby",
        Rb: "disabled",
        Tb: "dropeffect",
        Ub: "expanded",
        Vb: "flowto",
        Xb: "grabbed",
        ac: "haspopup",
        cc: "hidden",
        ec: "invalid",
        fc: "label",
        gc: "labelledby",
        hc: "level",
        mc: "live",
        wc: "multiline",
        xc: "multiselectable",
        Bc: "orientation",
        Cc: "owns",
        Dc: "posinset",
        Fc: "pressed",
        Jc: "readonly",
        Lc: "relevant",
        Mc: "required",
        Sc: "selected",
        Uc: "setsize",
        Wc: "sort",
        jd: "valuemax",
        kd: "valuemin",
        ld: "valuenow",
        md: "valuetext"
    };
    var Vc = {
        yb: "alert",
        zb: "alertdialog",
        Ab: "application",
        Bb: "article",
        Eb: "banner",
        Gb: "button",
        Hb: "checkbox",
        Ib: "columnheader",
        Jb: "combobox",
        Kb: "complementary",
        Lb: "contentinfo",
        Nb: "definition",
        Pb: "dialog",
        Qb: "directory",
        Sb: "document",
        Wb: "form",
        Yb: "grid",
        Zb: "gridcell",
        $b: "group",
        bc: "heading",
        dc: "img",
        ic: "link",
        jc: "list",
        kc: "listbox",
        lc: "listitem",
        nc: "log",
        oc: "main",
        pc: "marquee",
        qc: "math",
        rc: "menu",
        sc: "menubar",
        tc: "menuitem",
        uc: "menuitemcheckbox",
        vc: "menuitemradio",
        yc: "navigation",
        zc: "note",
        Ac: "option",
        Ec: "presentation",
        Gc: "progressbar",
        Hc: "radio",
        Ic: "radiogroup",
        Kc: "region",
        Nc: "row",
        Oc: "rowgroup",
        Pc: "rowheader",
        Qc: "scrollbar",
        Rc: "search",
        Tc: "separator",
        Vc: "slider",
        Xc: "spinbutton",
        Yc: "status",
        Zc: "tab",
        $c: "tablist",
        ad: "tabpanel",
        bd: "textbox",
        cd: "timer",
        dd: "toolbar",
        ed: "tooltip",
        fd: "tree",
        gd: "treegrid",
        hd: "treeitem"
    };
    var Wc = function(a, b, c) {
        r(c) && (c = c.join(" "));
        var d;
        z(b, "ARIA attribute cannot be empty.");
        z(Qa(Uc, b), "No such ARIA attribute " + b);
        d = "aria-" + b;
        "" === c || void 0 == c ? (Tc || (Tc = {
            atomic: !1,
            autocomplete: "none",
            dropeffect: "none",
            haspopup: !1,
            live: "off",
            multiline: !1,
            multiselectable: !1,
            orientation: "vertical",
            readonly: !1,
            relevant: "additions text",
            required: !1,
            sort: "none",
            busy: !1,
            disabled: !1,
            hidden: !1,
            invalid: "false"
        }), c = Tc, b in c ? a.setAttribute(d, c[b]) : a.removeAttribute(d)) : a.setAttribute(d, c)
    };
    var Xc = function(a) {
        Eb.call(this);
        this.b = a;
        this.a = {}
    };
    x(Xc, Eb);
    var Yc = [];
    h = Xc.prototype;
    h.listen = function(a, b, c, d) {
        r(b) || (b && (Yc[0] = b.toString()), b = Yc);
        for (var e = 0; e < b.length; e++) {
            var f = M(a, b[e], c || this.handleEvent, d || !1, this.b || this);
            if (!f) break;
            this.a[f.Sa] = f
        }
        return this
    };
    h.J = function(a, b, c, d, e) {
        if (r(b))
            for (var f = 0; f < b.length; f++) this.J(a, b[f], c, d, e);
        else c = c || this.handleEvent, e = e || this.b || this, c = Sb(c), d = !!d, b = a && a[Hb] ? Ob(a.C, String(b), c, d, e) : a ? (a = Tb(a)) ? Ob(a, b, c, d, e) : null : null, b && (Yb(b), delete this.a[b.Sa]);
        return this
    };
    h.removeAll = function() {
        Na(this.a, Yb);
        this.a = {}
    };
    h.p = function() {
        Xc.h.p.call(this);
        this.removeAll()
    };
    h.handleEvent = function() {
        throw Error("EventHandler.handleEvent not implemented");
    };
    var Zc = function() {};
    q(Zc);
    Zc.prototype.a = 0;
    var R = function(a) {
        P.call(this);
        this.e = a || jb();
        this.X = $c;
        this.B = null;
        this.v = !1;
        this.c = null;
        this.P = void 0;
        this.g = this.o = this.d = null;
        this.pa = !1
    };
    x(R, P);
    R.prototype.gb = Zc.D();
    var $c = null,
        ad = function(a, b) {
            switch (a) {
                case 1:
                    return b ? "disable" : "enable";
                case 2:
                    return b ? "highlight" : "unhighlight";
                case 4:
                    return b ? "activate" : "deactivate";
                case 8:
                    return b ? "select" : "unselect";
                case 16:
                    return b ? "check" : "uncheck";
                case 32:
                    return b ? "focus" : "blur";
                case 64:
                    return b ? "open" : "close"
            }
            throw Error("Invalid component state");
        },
        bd = function(a, b) {
            if (a.d && a.d.g) {
                var c = a.d.g,
                    d = a.B;
                d in c && delete c[d];
                c = a.d.g;
                if (b in c) throw Error('The object already contains the key "' + b + '"');
                c[b] = a
            }
            a.B = b
        };
    R.prototype.i = function() {
        return this.c
    };
    var cd = function(a) {
        a.P || (a.P = new Xc(a));
        return a.P
    };
    R.prototype.Ha = function(a) {
        if (this.d && this.d != a) throw Error("Method not supported");
        R.h.Ha.call(this, a)
    };
    R.prototype.aa = function() {
        this.c = this.e.a.createElement("div")
    };
    var dd = function(a, b) {
            if (a.v) throw Error("Component already rendered");
            a.c || a.aa();
            b ? b.insertBefore(a.c, null) : a.e.a.body.appendChild(a.c);
            a.d && !a.d.v || a.H()
        },
        ed = function(a, b) {
            if (a.v) throw Error("Component already rendered");
            if (b && a.Ua(b)) {
                a.pa = !0;
                var c = ib(b);
                a.e && a.e.a == c || (a.e = jb(b));
                a.Ta(b);
                a.H()
            } else throw Error("Invalid element to decorate");
        };
    h = R.prototype;
    h.Ua = function() {
        return !0
    };
    h.Ta = function(a) {
        this.c = a
    };
    h.H = function() {
        this.v = !0;
        fd(this, function(a) {
            !a.v && a.i() && a.H()
        })
    };
    h.ba = function() {
        fd(this, function(a) {
            a.v && a.ba()
        });
        this.P && this.P.removeAll();
        this.v = !1
    };
    h.p = function() {
        this.v && this.ba();
        this.P && (this.P.fa(), delete this.P);
        fd(this, function(a) {
            a.fa()
        });
        !this.pa && this.c && qb(this.c);
        this.d = this.c = this.g = this.o = null;
        R.h.p.call(this)
    };
    var fd = function(a, b) {
        a.o && B(a.o, b, void 0)
    };
    R.prototype.removeChild = function(a, b) {
        if (a) {
            var c = s(a) ? a : a.B || (a.B = ":" + (a.gb.a++).toString(36)),
                d;
            this.g && c ? (d = this.g, d = (c in d ? d[c] : void 0) || null) : d = null;
            a = d;
            if (c && a) {
                d = this.g;
                c in d && delete d[c];
                Ka(this.o, a);
                b && (a.ba(), a.c && qb(a.c));
                c = a;
                if (null == c) throw Error("Unable to set parent component");
                c.d = null;
                R.h.Ha.call(c, null)
            }
        }
        if (!a) throw Error("Child is not in parent component");
        return a
    };
    var S = function() {},
        gd;
    q(S);
    var hd = {
        button: "pressed",
        checkbox: "checked",
        menuitem: "selected",
        menuitemcheckbox: "checked",
        menuitemradio: "checked",
        radio: "checked",
        tab: "selected",
        treeitem: "selected"
    };
    S.prototype.Da = function() {};
    S.prototype.Z = function(a) {
        var b = a.e.Ia("div", id(this, a).join(" "), a.Q());
        jd(this, a, b);
        return b
    };
    var ld = function(a, b, c) {
        if (a = a.i ? a.i() : a) {
            var d = [b];
            E && !I("7") && (d = kd(qc(a), b), d.push(b));
            (c ? tc : vc)(a, d)
        }
    };
    S.prototype.Xa = function() {
        return !0
    };
    S.prototype.A = function(a, b) {
        b.id && bd(a, b.id);
        b && b.firstChild ? md(a, b.firstChild.nextSibling ? Ma(b.childNodes) : b.firstChild) : a.ha = null;
        var c = 0,
            d = this.l(),
            e = this.l(),
            f = !1,
            g = !1,
            k = !1,
            n = Ma(qc(b));
        B(n, function(a) {
            f || a != d ? g || a != e ? c |= nd(this, a) : g = !0 : (f = !0, e == d && (g = !0));
            1 == nd(this, a) && wb(b) && xb(b) && vb(b, !1)
        }, this);
        a.m = c;
        f || (n.push(d), e == d && (g = !0));
        g || n.push(e);
        var l = a.w;
        l && n.push.apply(n, l);
        if (E && !I("7")) {
            var v = kd(n);
            0 < v.length && (n.push.apply(n, v), k = !0)
        }
        if (!f || !g || l || k) b.className = n.join(" ");
        jd(this, a, b);
        return b
    };
    S.prototype.Wa = function(a) {
        if (null == a.X) {
            var b = a.v ? a.c : a.e.a.body,
                c;
            t: {
                c = ib(b);
                if (c.defaultView && c.defaultView.getComputedStyle && (c = c.defaultView.getComputedStyle(b, null))) {
                    c = c.direction || c.getPropertyValue("direction") || "";
                    break t
                }
                c = ""
            }
            c || (c = b.currentStyle ? b.currentStyle.direction : null);
            a.X = "rtl" == (c || b.style && b.style.direction)
        }
        a.X && this.Ra(a.i(), !0);
        a.a() && this.oa(a, a.M)
    };
    var od = function(a, b) {
            var c = a.Da();
            if (c) {
                z(b, "The element passed as a first parameter cannot be null.");
                var d = b.getAttribute("role") || null;
                c != d && (c ? (z(Qa(Vc, c), "No such ARIA role " + c), b.setAttribute("role", c)) : b.removeAttribute("role"))
            }
        },
        jd = function(a, b, c) {
            z(b);
            z(c);
            b.M || Wc(c, "hidden", !b.M);
            b.a() || a.F(c, 1, !b.a());
            b.s & 8 && a.F(c, 8, !!(b.m & 8));
            b.s & 16 && a.F(c, 16, b.Y());
            b.s & 64 && a.F(c, 64, !!(b.m & 64))
        };
    h = S.prototype;
    h.Ja = function(a, b) {
        var c = !b,
            d = E || Ya ? a.getElementsByTagName("*") : null;
        if (cc) {
            if (c = c ? "none" : "", a.style[cc] = c, d)
                for (var e = 0, f; f = d[e]; e++) f.style[cc] = c
        } else if (E || Ya)
            if (c = c ? "on" : "", a.setAttribute("unselectable", c), d)
                for (e = 0; f = d[e]; e++) f.setAttribute("unselectable", c)
    };
    h.Ra = function(a, b) {
        ld(a, this.l() + "-rtl", b)
    };
    h.Qa = function(a) {
        var b;
        return a.s & 32 && (b = a.i()) ? wb(b) && xb(b) : !1
    };
    h.oa = function(a, b) {
        var c;
        if (a.s & 32 && (c = a.i())) {
            if (!b && a.m & 32) {
                try {
                    c.blur()
                } catch (d) {}
                a.m & 32 && a.Va()
            }(wb(c) && xb(c)) != b && vb(c, b)
        }
    };
    h.ka = function(a, b, c) {
        var d = a.i();
        if (d) {
            var e = pd(this, b);
            e && ld(a, e, c);
            this.F(d, b, c)
        }
    };
    h.F = function(a, b, c) {
        gd || (gd = {
            1: "disabled",
            8: "selected",
            16: "checked",
            64: "expanded"
        });
        z(a, "The element passed as a first parameter cannot be null.");
        b = gd[b];
        var d = a.getAttribute("role") || null;
        d && (d = hd[d] || b, b = "checked" == b || "selected" == b ? d : b);
        b && Wc(a, b, c)
    };
    h.l = function() {
        return "goog-control"
    };
    var id = function(a, b) {
            var c = a.l(),
                d = [c],
                e = a.l();
            e != c && d.push(e);
            c = b.getState();
            for (e = []; c;) {
                var f = c & -c;
                e.push(pd(a, f));
                c &= ~f
            }
            d.push.apply(d, e);
            (c = b.w) && d.push.apply(d, c);
            E && !I("7") && d.push.apply(d, kd(d));
            return d
        },
        kd = function(a, b) {
            var c = [];
            b && (a = a.concat([b]));
            B([], function(d) {
                !Ha(d, w(C, a)) || b && !C(d, b) || c.push(d.join("_"))
            });
            return c
        },
        pd = function(a, b) {
            a.a || qd(a);
            return a.a[b]
        },
        nd = function(a, b) {
            if (!a.o) {
                a.a || qd(a);
                var c = a.a,
                    d = {},
                    e;
                for (e in c) d[c[e]] = e;
                a.o = d
            }
            c = parseInt(a.o[b], 10);
            return isNaN(c) ? 0 : c
        },
        qd = function(a) {
            var b = a.l(),
                c = b.replace(/\xa0|\s/g, " ");
            z(-1 == c.indexOf(" "), "ControlRenderer has an invalid css class: '" + b + "'");
            a.a = {
                1: b + "-disabled",
                2: b + "-hover",
                4: b + "-active",
                8: b + "-selected",
                16: b + "-checked",
                32: b + "-focused",
                64: b + "-open"
            }
        };
    var rd = function() {};
    x(rd, S);
    q(rd);
    h = rd.prototype;
    h.Da = function() {
        return "button"
    };
    h.F = function(a, b, c) {
        switch (b) {
            case 8:
            case 16:
                z(a, "The button DOM element cannot be null.");
                Wc(a, "pressed", c);
                break;
            default:
            case 64:
            case 1:
                rd.h.F.call(this, a, b, c)
        }
    };
    h.Z = function(a) {
        var b = rd.h.Z.call(this, a),
            c = a.n;
        b && (c ? b.title = c : b.removeAttribute("title"));
        (c = a.K) && this.Ma(b, c);
        a.s & 16 && this.F(b, 16, a.Y());
        return b
    };
    h.A = function(a, b) {
        b = rd.h.A.call(this, a, b);
        var c = this.La(b);
        a.K = c;
        a.n = b.title;
        a.s & 16 && this.F(b, 16, a.Y());
        return b
    };
    h.La = p;
    h.Ma = p;
    h.l = function() {
        return "goog-button"
    };
    var sd = function(a, b) {
            if (!a) throw Error("Invalid class name " + a);
            if (!t(b)) throw Error("Invalid decorator function " + b);
        },
        td = {};
    var T = function(a, b, c) {
        R.call(this, c);
        if (!b) {
            b = this.constructor;
            for (var d; b;) {
                d = b[ga] || (b[ga] = ++ha);
                if (d = td[d]) break;
                b = b.h ? b.h.constructor : null
            }
            b = d ? t(d.D) ? d.D() : new d : null
        }
        this.b = b;
        this.ha = void 0 !== a ? a : null
    };
    x(T, R);
    h = T.prototype;
    h.ha = null;
    h.m = 0;
    h.s = 39;
    h.ga = 255;
    h.M = !0;
    h.w = null;
    h.ya = !0;
    var vd = function(a) {
            a.v && 0 != a.ya && ud(a, !1);
            a.ya = !1
        },
        wd = function(a, b) {
            b && (a.w ? C(a.w, b) || a.w.push(b) : a.w = [b], ld(a, b, !0))
        };
    T.prototype.aa = function() {
        var a = this.b.Z(this);
        this.c = a;
        od(this.b, a);
        this.b.Ja(a, !1);
        this.M || (bc(a, !1), a && Wc(a, "hidden", !0))
    };
    T.prototype.Ua = function(a) {
        return this.b.Xa(a)
    };
    T.prototype.Ta = function(a) {
        this.c = a = this.b.A(this, a);
        od(this.b, a);
        this.b.Ja(a, !1);
        this.M = "none" != a.style.display
    };
    T.prototype.H = function() {
        T.h.H.call(this);
        this.b.Wa(this);
        if (this.s & -2 && (this.ya && ud(this, !0), this.s & 32)) {
            var a = this.i();
            if (a) {
                var b = this.j || (this.j = new Mc);
                b.attach(a);
                cd(this).listen(b, "key", this.lb).listen(a, "focus", this.kb).listen(a, "blur", this.Va)
            }
        }
    };
    var ud = function(a, b) {
        var c = cd(a),
            d = a.i();
        b ? (c.listen(d, "mouseover", a.ab).listen(d, "mousedown", a.wa).listen(d, "mouseup", a.xa).listen(d, "mouseout", a.$a), a.Aa != p && c.listen(d, "contextmenu", a.Aa), E && c.listen(d, "dblclick", a.Za)) : (c.J(d, "mouseover", a.ab).J(d, "mousedown", a.wa).J(d, "mouseup", a.xa).J(d, "mouseout", a.$a), a.Aa != p && c.J(d, "contextmenu", a.Aa), E && c.J(d, "dblclick", a.Za))
    };
    T.prototype.ba = function() {
        T.h.ba.call(this);
        this.j && Sc(this.j);
        this.M && this.a() && this.b.oa(this, !1)
    };
    T.prototype.p = function() {
        T.h.p.call(this);
        this.j && (this.j.fa(), delete this.j);
        delete this.b;
        this.w = this.ha = null
    };
    T.prototype.Q = function() {
        return this.ha
    };
    var md = function(a, b) {
            a.ha = b
        },
        xd = function(a) {
            a = a.Q();
            if (!a) return "";
            if (!s(a))
                if (r(a)) a = Fa(a, zb).join("");
                else {
                    if (gb && "innerText" in a) a = a.innerText.replace(/(\r\n|\r|\n)/g, "\n");
                    else {
                        var b = [];
                        yb(a, b, !0);
                        a = b.join("")
                    }
                    a = a.replace(/ \xAD /g, " ").replace(/\xAD/g, "");
                    a = a.replace(/\u200B/g, "");
                    gb || (a = a.replace(/ +/g, " "));
                    " " != a && (a = a.replace(/^\s*/, ""))
                }
            return a.replace(/[\t\r\n ]+/g, " ").replace(/^[\t\r\n ]+|[\t\r\n ]+$/g, "")
        };
    T.prototype.a = function() {
        return !(this.m & 1)
    };
    T.prototype.setEnabled = function(a) {
        var b = this.d;
        b && "function" == typeof b.a && !b.a() || !yd(this, 1, !a) || (a || (zd(this, !1), Ad(this, !1)), this.M && this.b.oa(this, a), Bd(this, 1, !a, !0))
    };
    var Ad = function(a, b) {
            yd(a, 2, b) && Bd(a, 2, b)
        },
        zd = function(a, b) {
            yd(a, 4, b) && Bd(a, 4, b)
        };
    T.prototype.Y = function() {
        return !!(this.m & 16)
    };
    T.prototype.Ga = function(a) {
        yd(this, 16, a) && Bd(this, 16, a)
    };
    T.prototype.G = function(a) {
        yd(this, 32, a) && Bd(this, 32, a)
    };
    T.prototype.getState = function() {
        return this.m
    };
    var Bd = function(a, b, c, d) {
            d || 1 != b ? a.s & b && c != !!(a.m & b) && (a.b.ka(a, b, c), a.m = c ? a.m | b : a.m & ~b) : a.setEnabled(!c)
        },
        Cd = function(a) {
            if (a.v && a.m & 32) throw Error("Component already rendered");
            a.m & 32 && Bd(a, 32, !1);
            a.s &= -33
        },
        U = function(a, b) {
            return !!(a.ga & b) && !!(a.s & b)
        },
        yd = function(a, b, c) {
            return !!(a.s & b) && !!(a.m & b) != c && (!(0 & b) || Q(a, ad(b, c))) && !a.k
        };
    h = T.prototype;
    h.ab = function(a) {
        (!a.f || !rb(this.i(), a.f)) && Q(this, "enter") && this.a() && U(this, 2) && Ad(this, !0)
    };
    h.$a = function(a) {
        a.f && rb(this.i(), a.f) || !Q(this, "leave") || (U(this, 4) && zd(this, !1), U(this, 2) && Ad(this, !1))
    };
    h.Aa = p;
    h.wa = function(a) {
        this.a() && (U(this, 2) && Ad(this, !0), !Gb(a) || G && H && a.ctrlKey || (U(this, 4) && zd(this, !0), this.b.Qa(this) && this.i().focus()));
        !Gb(a) || G && H && a.ctrlKey || a.e()
    };
    h.xa = function(a) {
        this.a() && (U(this, 2) && Ad(this, !0), this.m & 4 && this.ia(a) && U(this, 4) && zd(this, !1))
    };
    h.Za = function(a) {
        this.a() && this.ia(a)
    };
    h.ia = function(a) {
        U(this, 16) && this.Ga(!this.Y());
        U(this, 8) && yd(this, 8, !0) && Bd(this, 8, !0);
        if (U(this, 64)) {
            var b = !(this.m & 64);
            yd(this, 64, b) && Bd(this, 64, b)
        }
        b = new K("action", this);
        a && (b.altKey = a.altKey, b.ctrlKey = a.ctrlKey, b.metaKey = a.metaKey, b.shiftKey = a.shiftKey, b.k = a.k);
        return Q(this, b)
    };
    h.kb = function() {
        U(this, 32) && this.G(!0)
    };
    h.Va = function() {
        U(this, 4) && zd(this, !1);
        U(this, 32) && this.G(!1)
    };
    h.lb = function(a) {
        return this.M && this.a() && this.sa(a) ? (a.e(), a.g(), !0) : !1
    };
    h.sa = function(a) {
        return 13 == a.keyCode && this.ia(a)
    };
    if (!t(T)) throw Error("Invalid component class " + T);
    if (!t(S)) throw Error("Invalid renderer class " + S);
    var Dd = T[ga] || (T[ga] = ++ha);
    td[Dd] = S;
    sd("goog-control", function() {
        return new T(null)
    });
    var Ed = function() {};
    x(Ed, rd);
    q(Ed);
    h = Ed.prototype;
    h.Da = function() {};
    h.Z = function(a) {
        vd(a);
        a.ga &= -256;
        Cd(a);
        return a.e.Ia("button", {
            "class": id(this, a).join(" "),
            disabled: !a.a(),
            title: a.n || "",
            value: a.K || ""
        }, xd(a) || "")
    };
    h.Xa = function(a) {
        return "BUTTON" == a.tagName || "INPUT" == a.tagName && ("button" == a.type || "submit" == a.type || "reset" == a.type)
    };
    h.A = function(a, b) {
        vd(a);
        a.ga &= -256;
        Cd(a);
        if (b.disabled) {
            var c = Aa(pd(this, 1));
            sc(b, c)
        }
        return Ed.h.A.call(this, a, b)
    };
    h.Wa = function(a) {
        cd(a).listen(a.i(), "click", a.ia)
    };
    h.Ja = p;
    h.Ra = p;
    h.Qa = function(a) {
        return a.a()
    };
    h.oa = p;
    h.ka = function(a, b, c) {
        Ed.h.ka.call(this, a, b, c);
        (a = a.i()) && 1 == b && (a.disabled = c)
    };
    h.La = function(a) {
        return a.value
    };
    h.Ma = function(a, b) {
        a && (a.value = b)
    };
    h.F = p;
    var V = function(a, b, c) {
        T.call(this, a, b || Ed.D(), c)
    };
    x(V, T);
    V.prototype.p = function() {
        V.h.p.call(this);
        delete this.K;
        delete this.n
    };
    V.prototype.H = function() {
        V.h.H.call(this);
        if (this.s & 32) {
            var a = this.i();
            a && cd(this).listen(a, "keyup", this.sa)
        }
    };
    V.prototype.sa = function(a) {
        return 13 == a.keyCode && "key" == a.type || 32 == a.keyCode && "keyup" == a.type ? this.ia(a) : 32 == a.keyCode
    };
    sd("goog-button", function() {
        return new V(null)
    });
    var Fd = function(a) {
            m.setTimeout(function() {
                throw a;
            }, 0)
        },
        Gd, Hd = function() {
            var a = m.MessageChannel;
            "undefined" === typeof a && "undefined" !== typeof window && window.postMessage && window.addEventListener && (a = function() {
                var a = document.createElement("iframe");
                a.style.display = "none";
                a.src = "";
                document.documentElement.appendChild(a);
                var b = a.contentWindow,
                    a = b.document;
                a.open();
                a.write("");
                a.close();
                var c = "callImmediate" + Math.random(),
                    d = "file:" == b.location.protocol ? "*" : b.location.protocol + "//" + b.location.host,
                    a = u(function(a) {
                        if (a.origin ==
                            d || a.data == c) this.port1.onmessage()
                    }, this);
                b.addEventListener("message", a, !1);
                this.port1 = {};
                this.port2 = {
                    postMessage: function() {
                        b.postMessage(c, d)
                    }
                }
            });
            if ("undefined" !== typeof a && !D("Trident") && !D("MSIE")) {
                var b = new a,
                    c = {},
                    d = c;
                b.port1.onmessage = function() {
                    c = c.next;
                    var a = c.fb;
                    c.fb = null;
                    a()
                };
                return function(a) {
                    d.next = {
                        fb: a
                    };
                    d = d.next;
                    b.port2.postMessage(0)
                }
            }
            return "undefined" !== typeof document && "onreadystatechange" in document.createElement("script") ? function(a) {
                var b = document.createElement("script");
                b.onreadystatechange =
                    function() {
                        b.onreadystatechange = null;
                        b.parentNode.removeChild(b);
                        b = null;
                        a();
                        a = null
                    };
                document.documentElement.appendChild(b)
            } : function(a) {
                m.setTimeout(a, 0)
            }
        };
    var Nd = function(a, b) {
            Id || Jd();
            Kd || (Id(), Kd = !0);
            Ld.push(new Md(a, b))
        },
        Id, Jd = function() {
            if (m.Promise && m.Promise.resolve) {
                var a = m.Promise.resolve();
                Id = function() {
                    a.then(Od)
                }
            } else Id = function() {
                var a = Od;
                !t(m.setImmediate) || m.Window && m.Window.prototype.setImmediate == m.setImmediate ? (Gd || (Gd = Hd()), Gd(a)) : m.setImmediate(a)
            }
        },
        Kd = !1,
        Ld = [],
        Od = function() {
            for (; Ld.length;) {
                var a = Ld;
                Ld = [];
                for (var b = 0; b < a.length; b++) {
                    var c = a[b];
                    try {
                        c.a.call(c.b)
                    } catch (d) {
                        Fd(d)
                    }
                }
            }
            Kd = !1
        },
        Md = function(a, b) {
            this.a = a;
            this.b = b
        };
    var Pd = function(a) {
            a.prototype.then = a.prototype.then;
            a.prototype.$goog_Thenable = !0
        },
        Qd = function(a) {
            if (!a) return !1;
            try {
                return !!a.$goog_Thenable
            } catch (b) {
                return !1
            }
        };
    var Td = function(a, b) {
        this.a = 0;
        this.f = void 0;
        this.b = this.c = null;
        this.d = this.e = !1;
        try {
            var c = this;
            a.call(b, function(a) {
                Rd(c, 2, a)
            }, function(a) {
                if (!(a instanceof Sd)) try {
                    if (a instanceof Error) throw a;
                    throw Error("Promise rejected.");
                } catch (b) {}
                Rd(c, 3, a)
            })
        } catch (d) {
            Rd(this, 3, d)
        }
    };
    Td.prototype.then = function(a, b, c) {
        null != a && Ba(a, "opt_onFulfilled should be a function.");
        null != b && Ba(b, "opt_onRejected should be a function. Did you pass opt_context as the second argument instead of the third?");
        return Ud(this, t(a) ? a : null, t(b) ? b : null, c)
    };
    Pd(Td);
    Td.prototype.cancel = function(a) {
        0 == this.a && Nd(function() {
            var b = new Sd(a);
            Vd(this, b)
        }, this)
    };
    var Vd = function(a, b) {
            if (0 == a.a)
                if (a.c) {
                    var c = a.c;
                    if (c.b) {
                        for (var d = 0, e = -1, f = 0, g; g = c.b[f]; f++)
                            if (g = g.ra)
                                if (d++, g == a && (e = f), 0 <= e && 1 < d) break;
                        0 <= e && (0 == c.a && 1 == d ? Vd(c, b) : (d = c.b.splice(e, 1)[0], Wd(c), d.Fa(b)))
                    }
                } else Rd(a, 3, b)
        },
        Yd = function(a, b) {
            a.b && a.b.length || 2 != a.a && 3 != a.a || Xd(a);
            a.b || (a.b = []);
            a.b.push(b)
        },
        Ud = function(a, b, c, d) {
            var e = {
                ra: null,
                Pa: null,
                Fa: null
            };
            e.ra = new Td(function(a, g) {
                e.Pa = b ? function(c) {
                    try {
                        var e = b.call(d, c);
                        a(e)
                    } catch (l) {
                        g(l)
                    }
                } : a;
                e.Fa = c ? function(b) {
                    try {
                        var e = c.call(d, b);
                        void 0 === e && b instanceof
                        Sd ? g(b) : a(e)
                    } catch (l) {
                        g(l)
                    }
                } : g
            });
            e.ra.c = a;
            Yd(a, e);
            return e.ra
        };
    Td.prototype.g = function(a) {
        z(1 == this.a);
        this.a = 0;
        Rd(this, 2, a)
    };
    Td.prototype.k = function(a) {
        z(1 == this.a);
        this.a = 0;
        Rd(this, 3, a)
    };
    var Rd = function(a, b, c) {
            if (0 == a.a) {
                if (a == c) b = 3, c = new TypeError("Promise cannot resolve to itself");
                else {
                    if (Qd(c)) {
                        a.a = 1;
                        c.then(a.g, a.k, a);
                        return
                    }
                    if (fa(c)) try {
                        var d = c.then;
                        if (t(d)) {
                            Zd(a, c, d);
                            return
                        }
                    } catch (e) {
                        b = 3, c = e
                    }
                }
                a.f = c;
                a.a = b;
                Xd(a);
                3 != b || c instanceof Sd || $d(a, c)
            }
        },
        Zd = function(a, b, c) {
            a.a = 1;
            var d = !1,
                e = function(b) {
                    d || (d = !0, a.g(b))
                },
                f = function(b) {
                    d || (d = !0, a.k(b))
                };
            try {
                c.call(b, e, f)
            } catch (g) {
                f(g)
            }
        },
        Xd = function(a) {
            a.e || (a.e = !0, Nd(a.j, a))
        };
    Td.prototype.j = function() {
        for (; this.b && this.b.length;) {
            var a = this.b;
            this.b = [];
            for (var b = 0; b < a.length; b++) {
                var c = a[b],
                    d = this.f;
                2 == this.a ? c.Pa(d) : (Wd(this), c.Fa(d))
            }
        }
        this.e = !1
    };
    var Wd = function(a) {
            for (; a && a.d; a = a.c) a.d = !1
        },
        $d = function(a, b) {
            a.d = !0;
            Nd(function() {
                a.d && ae.call(null, b)
            })
        },
        ae = Fd,
        Sd = function(a) {
            y.call(this, a)
        };
    x(Sd, y);
    Sd.prototype.name = "cancel";
    var be = function(a, b, c) {
        if (t(a)) c && (a = u(a, c));
        else if (a && "function" == typeof a.handleEvent) a = u(a.handleEvent, a);
        else throw Error("Invalid listener argument");
        return 2147483647 < b ? -1 : m.setTimeout(a, b || 0)
    };
    E && I(8);
    var ce = function(a) {
            if (null != a) switch (a.ma) {
                case 1:
                    return 1;
                case -1:
                    return -1;
                case 0:
                    return 0
            }
            return null
        },
        de = function() {
            O.call(this)
        };
    x(de, O);
    de.prototype.V = yc;
    var W = function(a) {
            if (null != a && a.V === yc) return z(a.constructor === de), a;
            if (a instanceof xc) {
                var b = ee,
                    c;
                a instanceof xc && a.constructor === xc && a.b === wc ? c = a.a : (za("expected object of type SafeHtml, got '" + a + "'"), c = "type_error:SafeHtml");
                a = b(c, a.c)
            } else a = ee(va(String(String(a))), ce(a));
            return a
        },
        fe = function() {
            O.call(this)
        };
    x(fe, O);
    fe.prototype.V = zc;
    fe.prototype.ma = 1;
    var ge = function(a, b) {
        this.content = String(a);
        this.ma = null != b ? b : null
    };
    x(ge, O);
    ge.prototype.V = Ac;
    var ee = function(a) {
        function b(a) {
            this.content = a
        }
        b.prototype = a.prototype;
        return function(a, d) {
            var e = new b(String(a));
            void 0 !== d && (e.ma = d);
            return e
        }
    }(de);
    (function(a) {
        function b(a) {
            this.content = a
        }
        b.prototype = a.prototype;
        return function(a, d) {
            var e = String(a);
            if (!e) return "";
            e = new b(e);
            void 0 !== d && (e.ma = d);
            return e
        }
    })(de);
    var le = function(a) {
            return null != a && a.V === yc ? (z(a.constructor === de), a = String(a.Q()).replace(he, "").replace(ie, "&lt;"), String(a).replace(je, ke)) : va(String(a))
        },
        me = {
            "\x00": "&#0;",
            "\t": "&#9;",
            "\n": "&#10;",
            "\x0B": "&#11;",
            "\f": "&#12;",
            "\r": "&#13;",
            " ": "&#32;",
            '"': "&quot;",
            "&": "&amp;",
            "'": "&#39;",
            "-": "&#45;",
            "/": "&#47;",
            "<": "&lt;",
            "=": "&#61;",
            ">": "&gt;",
            "`": "&#96;",
            "\u0085": "&#133;",
            "\u00a0": "&#160;",
            "\u2028": "&#8232;",
            "\u2029": "&#8233;"
        },
        ke = function(a) {
            return me[a]
        },
        je = /[\x00\x22\x27\x3c\x3e]/g,
        ne = /^(?!style|on|action|archive|background|cite|classid|codebase|data|dsync|href|longdesc|src|usemap)(?:[a-z0-9_$:-]*)$/i,
        he = /<(?:!|\/?([a-zA-Z][a-zA-Z0-9:\-]*))(?:[^>'"]|"[^"]*"|'[^']*')*>/g,
        ie = /</g;
    var oe = function(a) {
        a = a || {};
        var b = ee,
            c = '<div role="button"' + (a.id ? ' id="' + le(a.id) + '"' : "") + ' class="',
            d;
        d = a || {};
        var e = "goog-inline-block jfk-button ";
        switch (d.style) {
            case 0:
                e += "jfk-button-standard";
                break;
            case 2:
                e += "jfk-button-action";
                break;
            case 3:
                e += "jfk-button-primary";
                break;
            case 1:
                e += "jfk-button-default";
                break;
            case 4:
                e += "jfk-button-flat";
                break;
            case 5:
                e += "jfk-button-mini";
                break;
            case 6:
                e += "jfk-button-contrast";
                break;
            default:
                e += "jfk-button-standard"
        }
        e += (1 == d.width ? " jfk-button-narrow" : "") + (d.checked ?
            " jfk-button-checked" : "") + (d.ob ? " " + d.ob : "") + (d.disabled ? " jfk-button-disabled" : "");
        c = c + le(new ge(e, void 0)) + '"' + (a.disabled ? ' aria-disabled="true"' : ' tabindex="' + (a.pb ? le(a.pb) : "0") + '"') + (a.title ? " " + (a.hb ? "data-tooltip" : "title") + '="' + le(a.title) + '"' : "") + (a.value ? ' value="' + le(a.value) + '"' : "");
        a.attributes ? (d = a.attributes, null != d && d.V === zc ? (z(d.constructor === fe), d = d.Q().replace(/([^"'\s])$/, "$1 ")) : (d = String(d), ne.test(d) || (za("Bad value `%s` for |filterHtmlAttributes", [d]), d = "zSoyz")), d = " " + d) :
            d = "";
        return b(c + d + ">" + W(null != a.content ? a.content : "") + "</div>")
    };
    oe.a = "jfk.templates.button.strict";
    var X = function(a, b, c, d) {
        V.call(this, a, pe.D(), b);
        this.L = c || 0;
        this.S = d || 0;
        this.na = !1
    };
    x(X, V);
    X.prototype.setEnabled = function(a) {
        this.a() != a && (X.h.setEnabled.call(this, a), qe(this))
    };
    X.prototype.G = function(a) {
        X.h.G.call(this, a);
        re(this, !1)
    };
    X.prototype.wa = function(a) {
        X.h.wa.call(this, a);
        this.a() && re(this, !0)
    };
    X.prototype.xa = function(a) {
        X.h.xa.call(this, a);
        this.a() && re(this, !0)
    };
    var re = function(a, b) {
            if (a.i()) {
                var c = a.i();
                b ? sc(c, "jfk-button-clear-outline") : uc(c, "jfk-button-clear-outline")
            }
        },
        qe = function(a) {
            a.i() && se(a.b, a)
        },
        ue = function() {
            var a = te("MSG_TRANSLATE");
            return new X(a, void 0, 2)
        },
        pe = function() {
            this.n = this.l() + "-standard";
            this.b = this.l() + "-action";
            this.j = this.l() + "-primary";
            this.e = this.l() + "-default";
            this.f = this.l() + "-flat";
            this.k = this.l() + "-narrow";
            this.g = this.l() + "-mini";
            this.d = this.l() + "-contrast"
        };
    x(pe, rd);
    q(pe);
    h = pe.prototype;
    h.O = function(a, b, c) {
        a && c.L != a && (c.L = a, qe(c));
        b && c.S != b && (c.S = b, qe(c))
    };
    h.l = function() {
        return "jfk-button"
    };
    h.Z = function(a) {
        Ca(a, X, "Button is expected to be instance of jfk.Button");
        var b = a.e,
            c;
        t: {
            var d = {
                disabled: !a.a(),
                checked: a.Y(),
                style: a.L,
                title: a.n,
                hb: a.na,
                value: a.K,
                width: a.S
            };
            z(oe, "Soy template may not be null.");
            c = (b || jb()).a.createElement("DIV");
            var d = Cc(oe(d || Dc)),
                e = d.match(Fc);
            z(!e, "This template starts with a %s, which cannot be a child of a <div>, as required by soy internals. Consider using goog.soy.renderElement instead.\nTemplate output: %s", e && e[0], d);
            c.innerHTML = d;
            if (1 == c.childNodes.length &&
                (d = c.firstChild, 1 == d.nodeType)) {
                c = d;
                break t
            }
        }
        b.ib(c, a.Q());
        this.A(a, c);
        return c
    };
    h.A = function(a, b) {
        pe.h.A.call(this, a, b);
        this.c || (this.c = Ta(this.n, w(this.O, 0, null), this.b, w(this.O, 2, null), this.j, w(this.O, 3, null), this.e, w(this.O, 1, null), this.f, w(this.O, 4, null), this.g, w(this.O, 5, null), this.d, w(this.O, 6, null), this.k, w(this.O, null, 1)));
        for (var c = qc(b), d = 0; d < c.length; ++d) {
            var e = this.c[c[d]];
            e && e(a)
        }
        if (c = b.getAttribute("data-tooltip")) a.n = c, a.na = !0;
        return b
    };
    h.La = function(a) {
        return a.getAttribute("value") || ""
    };
    h.Ma = function(a, b) {
        a && a.setAttribute("value", b)
    };
    h.ka = function(a, b, c) {
        pe.h.ka.call(this, a, b, c);
        if (32 == b) try {
            var d = a.i();
            c ? d.focus() : d.blur()
        } catch (e) {}
    };
    var se = function(a, b) {
        function c(a, b) {
            (a ? d : e).push(b)
        }
        z(b.i(), "Button element must already exist when updating style.");
        var d = [],
            e = [],
            f = b.L;
        c(0 == f, a.n);
        c(2 == f, a.b);
        c(3 == f, a.j);
        c(4 == f, a.f);
        c(5 == f, a.g);
        c(1 == f, a.e);
        c(6 == f, a.d);
        c(1 == b.S, a.k);
        c(!b.a(), a.l() + "-disabled");
        vc(b.i(), e);
        tc(b.i(), d)
    };
    var ve = function() {};
    x(ve, S);
    q(ve);
    ve.prototype.Z = function(a) {
        var b = a.e.Ia("span", id(this, a).join(" "));
        we(this, b, a.f);
        return b
    };
    ve.prototype.A = function(a, b) {
        b = ve.h.A.call(this, a, b);
        z(b);
        var c = qc(b),
            d = !1;
        C(c, xe(this, null)) ? d = null : C(c, xe(this, !0)) ? d = !0 : C(c, xe(this, !1)) && (d = !1);
        a.f = d;
        z(b, "The element cannot be null.");
        Wc(b, "checked", null == d ? "mixed" : 1 == d ? "true" : "false");
        return b
    };
    ve.prototype.Da = function() {
        return "checkbox"
    };
    var we = function(a, b, c) {
        if (b) {
            z(b);
            var d = xe(a, c);
            z(d);
            z(b);
            rc(b, d) || (Na(ye, function(a) {
                a = xe(this, a);
                z(b);
                a == d ? sc(b, a) : uc(b, a)
            }, a), Wc(b, "checked", null == c ? "mixed" : 1 == c ? "true" : "false"))
        }
    };
    ve.prototype.l = function() {
        return "goog-checkbox"
    };
    var xe = function(a, b) {
        var c = a.l();
        if (1 == b) return c + "-checked";
        if (0 == b) return c + "-unchecked";
        if (null == b) return c + "-undetermined";
        throw Error("Invalid checkbox state: " + b);
    };
    var ze = function(a, b, c) {
        c = c || ve.D();
        T.call(this, null, c, b);
        this.f = void 0 !== a ? a : !1
    };
    x(ze, T);
    var ye = {
        tb: !0,
        a: !1,
        b: null
    };
    h = ze.prototype;
    h.Y = function() {
        return 1 == this.f
    };
    h.Ga = function(a) {
        a != this.f && (this.f = a, we(this.b, this.i(), this.f))
    };
    h.H = function() {
        ze.h.H.call(this);
        this.ya && cd(this).listen(this.i(), "click", this.Ya)
    };
    h.setEnabled = function(a) {
        ze.h.setEnabled.call(this, a);
        if (a = this.i()) a.tabIndex = this.a() ? 0 : -1
    };
    h.Ya = function(a) {
        a.g();
        var b = this.f ? "uncheck" : "check";
        this.a() && !a.c.href && Q(this, b) && (a.e(), this.Ga(this.f ? !1 : !0), Q(this, "change"))
    };
    h.sa = function(a) {
        32 == a.keyCode && this.Ya(a);
        return !1
    };
    sd("goog-checkbox", function() {
        return new ze
    });
    var Ae = [0, 100, 80, 50],
        Be = {
            ar: 2,
            zh: 3,
            "zh-cn": 3,
            "zh-tw": 3,
            en: 1,
            fr: 1,
            de: 1,
            it: 1,
            ja: 3,
            ko: 3,
            la: 1,
            pt: 1,
            es: 1,
            af: 1,
            sq: 1,
            hy: 1,
            bs: 1,
            ca: 1,
            hr: 1,
            cs: 1,
            da: 1,
            nl: 1,
            eo: 1,
            fi: 1,
            el: 2,
            ht: 1,
            hi: 2,
            hu: 1,
            is: 1,
            id: 1,
            ku: 1,
            lv: 1,
            mk: 2,
            no: 1,
            pl: 1,
            ro: 1,
            ru: 2,
            sr: 2,
            sk: 1,
            sw: 1,
            sv: 1,
            ta: 2,
            th: 1,
            tr: 1,
            vi: 1,
            cy: 1
        };
    var Ce = function() {
        this.b = [];
        this.a = {};
        this.c = !1;
        this.g = 1;
        this.d = {};
        M(window, "beforeunload", this.f, !1, this)
    };
    q(Ce);
    var De = function(a, b) {
        if (null == b) return "1";
        switch (ca(b)) {
            case "string":
                return encodeURIComponent(String(b));
            case "number":
                return "" + b;
            case "boolean":
                return b ? "1" : "0";
            case "array":
                var c = [],
                    d;
                for (d in b) c.push(De(a, b[d]));
                return c.join(",");
            case "object":
                c = [];
                for (d in b) c.push([encodeURIComponent(String(d)), De(a, b[d])].join("="));
                return c.join(",");
            default:
                return ""
        }
    };
    Ce.prototype.log = function(a, b, c) {
        this.b.push([a, b, c]);
        this.c || (this.c = !0, be(this.e, 0, this))
    };
    Ce.prototype.e = function() {
        for (var a = 0; a < this.b.length; a++) {
            var b = this.b[a];
            Ee(this, b[0], b[1], b[2])
        }
        this.b = [];
        this.c = !1
    };
    var Ee = function(a, b, c, d) {
            Fe(a, (d || "") + "/gen204?" + [encodeURIComponent(String(b)), De(a, c)].join("="))
        },
        Fe = function(a, b) {
            var c = new Image,
                d = a.g++;
            a.d[d] = c;
            c.onload = c.onerror = function() {
                delete Ce.D().d[d]
            };
            c.src = b;
            c = null
        };
    Ce.prototype.f = function() {
        this.e();
        for (var a in this.a)
            if (0 != this.a[a]) {
                var b = a;
                Ee(this, b, this.a[b][1], void 0);
                b in this.a && (m.clearTimeout(this.a[b][0]), delete this.a[b])
            }
    };
    var Ge = function(a) {
        return eval("(" + a + ")")
    };
    var Ie = function(a) {
            var b;
            b || (b = He(a || arguments.callee.caller, []));
            return b
        },
        He = function(a, b) {
            var c = [];
            if (C(b, a)) c.push("[...circular reference...]");
            else if (a && 50 > b.length) {
                c.push(Je(a) + "(");
                for (var d = a.arguments, e = 0; d && e < d.length; e++) {
                    0 < e && c.push(", ");
                    var f;
                    f = d[e];
                    switch (typeof f) {
                        case "object":
                            f = f ? "object" : "null";
                            break;
                        case "string":
                            break;
                        case "number":
                            f = String(f);
                            break;
                        case "boolean":
                            f = f ? "true" : "false";
                            break;
                        case "function":
                            f = (f = Je(f)) ? f : "[fn]";
                            break;
                        default:
                            f = typeof f
                    }
                    40 < f.length && (f = f.substr(0,
                        40) + "...");
                    c.push(f)
                }
                b.push(a);
                c.push(")\n");
                try {
                    c.push(He(a.caller, b))
                } catch (g) {
                    c.push("[exception trying to get caller]\n")
                }
            } else a ? c.push("[...long stack...]") : c.push("[end]");
            return c.join("")
        },
        Je = function(a) {
            if (Ke[a]) return Ke[a];
            a = String(a);
            if (!Ke[a]) {
                var b = /function ([^\(]+)/.exec(a);
                Ke[a] = b ? b[1] : "[Anonymous]"
            }
            return Ke[a]
        },
        Ke = {};
    var Me = function(a, b, c, d, e) {
        "number" == typeof e || Le++;
        d || la();
        this.c = b;
        delete this.b;
        delete this.a
    };
    Me.prototype.b = null;
    Me.prototype.a = null;
    var Le = 0;
    Me.prototype.getMessage = function() {
        return this.c
    };
    var Ne = function() {
            this.b = this.c = this.a = null
        },
        Oe = function(a, b) {
            this.name = a;
            this.value = b
        };
    Oe.prototype.toString = function() {
        return this.name
    };
    var Pe = new Oe("SEVERE", 1E3),
        Qe = new Oe("CONFIG", 700),
        Re = new Oe("FINE", 500);
    Ne.prototype.getChildren = function() {
        this.b || (this.b = {});
        return this.b
    };
    var Se = function(a) {
        if (a.c) return a.c;
        if (a.a) return Se(a.a);
        za("Root logger has no level set.");
        return null
    };
    Ne.prototype.log = function(a, b, c) {
        if (a.value >= Se(this).value)
            for (t(b) && (b = b()), a = "log:" + this.d(0, b, c, Ne.prototype.log).getMessage(), m.console && (m.console.timeStamp ? m.console.timeStamp(a) : m.console.markTimeline && m.console.markTimeline(a)), m.msWriteProfilerMark && m.msWriteProfilerMark(a), a = this; a;) a = a.a
    };
    Ne.prototype.d = function(a, b, c, d) {
        a = new Me(0, String(b));
        if (c) {
            a.b = c;
            var e;
            d = d || Ne.prototype.d;
            try {
                var f;
                var g = ba("window.location.href");
                if (s(c)) f = {
                    message: c,
                    name: "Unknown error",
                    lineNumber: "Not available",
                    fileName: g,
                    stack: "Not available"
                };
                else {
                    var k, n;
                    b = !1;
                    try {
                        k = c.lineNumber || c.vb || "Not available"
                    } catch (l) {
                        k = "Not available", b = !0
                    }
                    try {
                        n = c.fileName || c.filename || c.sourceURL || m.$googDebugFname || g
                    } catch (v) {
                        n = "Not available", b = !0
                    }
                    f = !b && c.lineNumber && c.fileName && c.stack && c.message && c.name ? c : {
                        message: c.message ||
                            "Not available",
                        name: c.name || "UnknownError",
                        lineNumber: k,
                        fileName: n,
                        stack: c.stack || "Not available"
                    }
                }
                e = "Message: " + va(f.message) + '\nUrl: <a href="view-source:' + f.fileName + '" target="_new">' + f.fileName + "</a>\nLine: " + f.lineNumber + "\n\nBrowser stack:\n" + va(f.stack + "-> ") + "[end]\n\nJS stack traversal:\n" + va(Ie(d) + "-> ")
            } catch (ja) {
                e = "Exception trying to expose exception! You win, we lose. " + ja
            }
            a.a = e
        }
        return a
    };
    var Te = {},
        Ue = null,
        Ve = function(a) {
            Ue || (Ue = new Ne, Te[""] = Ue, Ue.c = Qe);
            var b;
            if (!(b = Te[a])) {
                b = new Ne;
                var c = a.lastIndexOf("."),
                    d = a.substr(c + 1),
                    c = Ve(a.substr(0, c));
                c.getChildren()[d] = b;
                b.a = c;
                Te[a] = b
            }
            return b
        };
    var Y = function(a, b) {
        a && a.log(Re, b, void 0)
    };
    var We = function() {};
    We.prototype.a = null;
    var Ye = function(a) {
        var b;
        (b = a.a) || (b = {}, Xe(a) && (b[0] = !0, b[1] = !0), b = a.a = b);
        return b
    };
    var Ze, $e = function() {};
    x($e, We);
    var af = function(a) {
            return (a = Xe(a)) ? new ActiveXObject(a) : new XMLHttpRequest
        },
        Xe = function(a) {
            if (!a.b && "undefined" == typeof XMLHttpRequest && "undefined" != typeof ActiveXObject) {
                for (var b = ["MSXML2.XMLHTTP.6.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], c = 0; c < b.length; c++) {
                    var d = b[c];
                    try {
                        return new ActiveXObject(d), a.b = d
                    } catch (e) {}
                }
                throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");
            }
            return a.b
        };
    Ze = new $e;
    var Z = function(a) {
        P.call(this);
        this.na = new fc;
        this.G = a || null;
        this.b = !1;
        this.o = this.a = null;
        this.f = this.S = this.d = "";
        this.c = this.K = this.j = this.L = !1;
        this.e = 0;
        this.g = null;
        this.aa = "";
        this.n = this.Ea = !1
    };
    x(Z, P);
    var bf = Z.prototype,
        cf = Ve("goog.net.XhrIo");
    bf.t = cf;
    var df = /^https?$/i,
        ef = ["POST", "PUT"],
        ff = [];
    Z.prototype.qa = function() {
        this.fa();
        Ka(ff, this)
    };
    Z.prototype.send = function(a, b, c, d) {
        if (this.a) throw Error("[goog.net.XhrIo] Object is active with another request=" + this.d + "; newUri=" + a);
        b = b ? b.toUpperCase() : "GET";
        this.d = a;
        this.f = "";
        this.S = b;
        this.L = !1;
        this.b = !0;
        this.a = this.G ? af(this.G) : af(Ze);
        this.o = this.G ? Ye(this.G) : Ye(Ze);
        this.a.onreadystatechange = u(this.X, this);
        try {
            Y(this.t, $(this, "Opening Xhr")), this.K = !0, this.a.open(b, String(a), !0), this.K = !1
        } catch (e) {
            Y(this.t, $(this, "Error opening Xhr: " + e.message));
            gf(this, e);
            return
        }
        a = c || "";
        var f = this.na.clone();
        d && jc(d, function(a, b) {
            f.set(b, a)
        });
        d = Ja(f.N());
        c = m.FormData && a instanceof m.FormData;
        !C(ef, b) || d || c || f.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
        f.forEach(function(a, b) {
            this.a.setRequestHeader(b, a)
        }, this);
        this.aa && (this.a.responseType = this.aa);
        "withCredentials" in this.a && (this.a.withCredentials = this.Ea);
        try {
            hf(this), 0 < this.e && (this.n = jf(this.a), Y(this.t, $(this, "Will abort after " + this.e + "ms if incomplete, xhr2 " + this.n)), this.n ? (this.a.timeout = this.e, this.a.ontimeout = u(this.ea,
                this)) : this.g = be(this.ea, this.e, this)), Y(this.t, $(this, "Sending request")), this.j = !0, this.a.send(a), this.j = !1
        } catch (g) {
            Y(this.t, $(this, "Send error: " + g.message)), gf(this, g)
        }
    };
    var jf = function(a) {
            return E && I(9) && ea(a.timeout) && void 0 !== a.ontimeout
        },
        Ia = function(a) {
            return "content-type" == a.toLowerCase()
        };
    Z.prototype.ea = function() {
        "undefined" != typeof aa && this.a && (this.f = "Timed out after " + this.e + "ms, aborting", Y(this.t, $(this, this.f)), Q(this, "timeout"), this.a && this.b && (Y(this.t, $(this, "Aborting")), this.b = !1, this.c = !0, this.a.abort(), this.c = !1, Q(this, "complete"), Q(this, "abort"), kf(this)))
    };
    var gf = function(a, b) {
            a.b = !1;
            a.a && (a.c = !0, a.a.abort(), a.c = !1);
            a.f = b;
            lf(a);
            kf(a)
        },
        lf = function(a) {
            a.L || (a.L = !0, Q(a, "complete"), Q(a, "error"))
        };
    Z.prototype.p = function() {
        this.a && (this.b && (this.b = !1, this.c = !0, this.a.abort(), this.c = !1), kf(this, !0));
        Z.h.p.call(this)
    };
    Z.prototype.X = function() {
        this.k || (this.K || this.j || this.c ? mf(this) : this.pa())
    };
    Z.prototype.pa = function() {
        mf(this)
    };
    var mf = function(a) {
            if (a.b && "undefined" != typeof aa)
                if (a.o[1] && 4 == nf(a) && 2 == of(a)) Y(a.t, $(a, "Local request error detected and ignored"));
                else if (a.j && 4 == nf(a)) be(a.X, 0, a);
            else if (Q(a, "readystatechange"), 4 == nf(a)) {
                Y(a.t, $(a, "Request complete"));
                a.b = !1;
                try {
                    if (pf(a)) Q(a, "complete"), Q(a, "success");
                    else {
                        var b;
                        try {
                            b = 2 < nf(a) ? a.a.statusText : ""
                        } catch (c) {
                            Y(a.t, "Can not get status: " + c.message), b = ""
                        }
                        a.f = b + " [" + of(a) + "]";
                        lf(a)
                    }
                } finally {
                    kf(a)
                }
            }
        },
        kf = function(a, b) {
            if (a.a) {
                hf(a);
                var c = a.a,
                    d = a.o[0] ? p : null;
                a.a = null;
                a.o = null;
                b || Q(a, "ready");
                try {
                    c.onreadystatechange = d
                } catch (e) {
                    (c = a.t) && c.log(Pe, "Problem encountered resetting onreadystatechange: " + e.message, void 0)
                }
            }
        },
        hf = function(a) {
            a.a && a.n && (a.a.ontimeout = null);
            ea(a.g) && (m.clearTimeout(a.g), a.g = null)
        },
        pf = function(a) {
            var b = of(a),
                c;
            t: switch (b) {
                case 200:
                case 201:
                case 202:
                case 204:
                case 206:
                case 304:
                case 1223:
                    c = !0;
                    break t;
                default:
                    c = !1
            }
            if (!c) {
                if (b = 0 === b) a = mc(1, String(a.d)), !a && self.location && (a = self.location.protocol, a = a.substr(0, a.length - 1)), b = !df.test(a ? a.toLowerCase() :
                    "");
                c = b
            }
            return c
        },
        nf = function(a) {
            return a.a ? a.a.readyState : 0
        },
        of = function(a) {
            try {
                return 2 < nf(a) ? a.a.status : -1
            } catch (b) {
                return -1
            }
        },
        qf = function(a) {
            try {
                return a.a ? a.a.responseText : ""
            } catch (b) {
                return Y(a.t, "Can not get responseText: " + b.message), ""
            }
        },
        $ = function(a, b) {
            return b + " [" + a.S + " " + a.d + " " + of(a) + "]"
        };
    var rf = function() {};
    var sf = function(a, b) {
        this.b = a;
        this.a = "";
        b && (this.a = b)
    };
    sf.prototype.c = function(a, b) {
        var c = b.c;
        if (!pf(c) || "[" != qf(c)[0] && "{" != qf(c)[0]) {
            var d = Ce.D(),
                e = String(c.d),
                c = qf(c);
            d.log("invalidResponse", {
                q: e.substring(0, 500),
                ql: e.length,
                r: c.substring(0, 500),
                rl: c.length
            });
            a(null)
        } else {
            d = qf(c);
            c = {
                "class": "trans.common.TranslationAPI",
                func: "handleSingleResult_",
                url: String(c.d)
            };
            try {
                e = Ge(d)
            } catch (f) {
                throw e = Ce.D(), c.js = d, c.error = f.message, e.log("jsonParseErr", c), f;
            }
            r(e) && (e = new rf);
            a(e)
        }
    };
    var tf = function() {
        X.call(this, "", void 0, 4);
        wd(this, "jfk-button-flat");
        wd(this, "gtx-audio-button");
        wd(this, "no-audio");
        this.ea = this.qa = "";
        cd(this).listen(this, "action", this.Ea)
    };
    x(tf, X);
    tf.prototype.Ea = function() {
        chrome.runtime.sendMessage({
            audioSrc: "https://translate.googleapis.com/translate_tts?ie=UTF-8&q=" + encodeURIComponent(String(this.qa)) + "&tl=" + this.ea + "&client=gtx"
        })
    };
    var uf = function(a, b, c) {
        var d = c.toLowerCase();
        d in Be && Ae[Be[d.toLowerCase()]] >= b.length ? (a.w && Ka(a.w, "no-audio") && (0 == a.w.length && (a.w = null), ld(a, "no-audio", !1)), a.qa = b, a.ea = c) : wd(a, "no-audio")
    };
    /*
     Portions of this code are from MochiKit, received by
     The Closure Authors under the MIT license. All other code is Copyright
     2005-2009 The Closure Authors. All Rights Reserved.
    */
    var vf = function(a, b) {
        this.e = [];
        this.T = a;
        this.U = b || null;
        this.d = this.a = !1;
        this.b = void 0;
        this.j = this.n = this.g = !1;
        this.f = 0;
        this.c = null;
        this.k = 0
    };
    vf.prototype.cancel = function(a) {
        if (this.a) this.b instanceof vf && this.b.cancel();
        else {
            if (this.c) {
                var b = this.c;
                delete this.c;
                a ? b.cancel(a) : (b.k--, 0 >= b.k && b.cancel())
            }
            this.T ? this.T.call(this.U, this) : this.j = !0;
            if (!this.a) {
                a = new wf;
                if (this.a) {
                    if (!this.j) throw new xf;
                    this.j = !1
                }
                z(!(a instanceof vf), "An execution sequence may not be initiated with a blocking Deferred.");
                this.a = !0;
                this.b = a;
                this.d = !0;
                yf(this)
            }
        }
    };
    vf.prototype.o = function(a, b) {
        this.g = !1;
        this.a = !0;
        this.b = b;
        this.d = !a;
        yf(this)
    };
    var zf = function(a, b, c) {
        z(!a.n, "Blocking Deferreds can not be re-used");
        a.e.push([b, c, void 0]);
        a.a && yf(a)
    };
    vf.prototype.then = function(a, b, c) {
        var d, e, f = new Td(function(a, b) {
            d = a;
            e = b
        });
        zf(this, d, function(a) {
            a instanceof wf ? f.cancel() : e(a)
        });
        return f.then(a, b, c)
    };
    Pd(vf);
    var Af = function(a) {
            return Ga(a.e, function(a) {
                return t(a[1])
            })
        },
        yf = function(a) {
            if (a.f && a.a && Af(a)) {
                var b = a.f,
                    c = Bf[b];
                c && (m.clearTimeout(c.B), delete Bf[b]);
                a.f = 0
            }
            a.c && (a.c.k--, delete a.c);
            for (var b = a.b, d = c = !1; a.e.length && !a.g;) {
                var e = a.e.shift(),
                    f = e[0],
                    g = e[1],
                    e = e[2];
                if (f = a.d ? g : f) try {
                    var k = f.call(e || a.U, b);
                    void 0 !== k && (a.d = a.d && (k == b || k instanceof Error), a.b = b = k);
                    Qd(b) && (d = !0, a.g = !0)
                } catch (n) {
                    b = n, a.d = !0, Af(a) || (c = !0)
                }
            }
            a.b = b;
            d && (k = u(a.o, a, !0), d = u(a.o, a, !1), b instanceof vf ? (zf(b, k, d), b.n = !0) : b.then(k,
                d));
            c && (b = new Cf(b), Bf[b.B] = b, a.f = b.B)
        },
        xf = function() {
            y.call(this)
        };
    x(xf, y);
    xf.prototype.message = "Deferred has already fired";
    xf.prototype.name = "AlreadyCalledError";
    var wf = function() {
        y.call(this)
    };
    x(wf, y);
    wf.prototype.message = "Deferred was canceled";
    wf.prototype.name = "CanceledError";
    var Cf = function(a) {
        this.B = m.setTimeout(u(this.b, this), 0);
        this.a = a
    };
    Cf.prototype.b = function() {
        z(Bf[this.B], "Cannot throw an error that is not scheduled.");
        delete Bf[this.B];
        throw this.a;
    };
    var Bf = {};
    var Df = function(a) {
            a = String(a).toLowerCase().replace("_", "-");
            if ("zh-cn" == a) return "zh-CN";
            if ("zh-tw" == a) return "zh-TW";
            var b = a.indexOf("-");
            a = 0 <= b ? a.substring(0, b) : a;
            return "zh" == a ? "zh-CN" : a
        },
        te = function(a) {
            a = chrome.i18n.getMessage(a);
            return chrome.i18n.getMessage(a)
        };
    var Ff = function() {
            this.b = [];
            chrome.i18n.getAcceptLanguages(u(this.f, this));
            this.a = "";
            this.d = "1";
            this.c = [];
            this.e = [];
            chrome.storage.local.get(null, u(this.g, this));
            Ef(this)
        },
        Hf = function() {
            var a = Gf;
            if ("" != a.a) a = a.a;
            else t: {
                for (var b = 0; b < a.b.length; b++) {
                    var c = Df(a.b[b]);
                    if (a.c[c]) {
                        a = c;
                        break t
                    }
                }
                a = "en"
            }
            return a
        };
    Ff.prototype.g = function(a) {
        "gtxTargetLang" in a && (this.a = a.gtxTargetLang);
        "gtxShowBubble" in a && (this.d = a.gtxShowBubble);
        "gtxSourceLangList" in a && (this.e = a.gtxSourceLangList);
        "gtxTargetLangList" in a && (this.c = a.gtxTargetLangList);
        this.loaded = !0
    };
    var Ef = function(a) {
        chrome.storage.onChanged.addListener(function(b) {
            b.gtxTargetLang && (a.a = b.gtxTargetLang.newValue);
            b.gtxShowBubble && (a.d = b.gtxShowBubble.newValue)
        })
    };
    Ff.prototype.f = function(a) {
        this.b = a
    };
    var If = function(a) {
        var b = Gf;
        if ("sl" == a) return b.e;
        if ("tl" == a) return b.c;
        throw Error("Invalid input for getLangList()");
    };
    var Bc = function(a) {
        var b = "";
        if (a.query)
            if (a.cb) {
                b += '<div class="gtx-language">' + W(a.rb) + '</div><div class="gtx-source-audio"><div class="jfk-button-img"></div></div><div class="gtx-body">' + W(a.query) + '</div><br><div class="gtx-language">' + W(a.sb) + '</div><div class="gtx-target-audio"><div class="jfk-button-img"></div></div><div class="gtx-body">' + W(a.cb) + "</div>";
                if (a.bb) {
                    for (var b = b + '<table style="width: 95%">', c = a.bb, d = c.length, e = 0; e < d; e++) {
                        var f = c[e],
                            b = b + ('<tr><td class="gtx-td"><div class="gtx-pos">' +
                                W(f.pos) + '</div></td><td class="gtx-td">');
                        if (a.qb)
                            for (var f = f.terms, g = f.length, k = 0; k < g; k++) b += (0 != k ? ", " : "") + W(f[k]);
                        else
                            for (f = f.terms, g = f.length, k = 0; k < g; k++) var n = f[k],
                                b = b + (3 > k ? (0 != k ? ", " : "") + W(n) : "");
                        b += "</td></tr>"
                    }
                    b += "</table>"
                }
                b += "<br>"
            } else b += "No translation results for <b>" + W(a.query) + "</b>.";
        return b
    };
    Bc.a = "extension.translation";
    var Gf = new Ff,
        Jf = function() {};
    q(Jf);
    Jf.prototype.a = function(a, b, c) {
        if (null != b) {
            for (var d = b.src, e = Hf(), f = [], g = [], k = b.sentences, n = 0; n < k.length; n++) f.push(k[n].orig), g.push(k[n].trans);
            var f = f.join(""),
                g = g.join(""),
                l;
            c ? l = c : l = J("translation");
            c = If("sl")[d].toUpperCase();
            k = If("tl")[e].toUpperCase();
            Ec(l, {
                query: window.selection,
                cb: g,
                rb: c,
                sb: k,
                bb: b.dict,
                qb: a
            });
            b = new tf;
            c = lb("gtx-source-audio", l);
            ed(b, c);
            uf(b, f, d);
            b = new tf;
            f = lb("gtx-target-audio", l);
            ed(b, f);
            uf(b, g, e);
            d = "https://translate.google.com/?source=gtx_m#" + d + "/" + e + "/" + encodeURIComponent(window.selection);
            a ? (a = J("more"), a.setAttribute("href", d), l = new X("", void 0, 4), dd(l, J("new-translation")), bc(J("new-translation"), !0), l = J("translate-page"), sb(a, te("MSG_OPEN_IN_TRANSLATE")), l.className = "gtx-a", l.setAttribute("style", "margin-left: 0px;"), bc(a, !0)) : (a = document.createElement("a"), a.id = "off", a.className = "gtx-a", a.setAttribute("target", "_blank"), sb(a, te("MSG_FOOTER_OPTIONS").toUpperCase()), a.setAttribute("href", chrome.runtime.getURL("options.html")), l.appendChild(a), a = document.createElement("a"), a.id = "more",
                a.setAttribute("class", "gtx-a"), a.setAttribute("target", "_blank"), sb(a, te("MSG_MORE")), a.setAttribute("href", d), a.setAttribute("style", "color: #A2A2A2; float: right; padding-top: 16px;"), l.appendChild(a))
        } else sb(J("translation"), te("MSG_TRANSLATION_ERROR"))
    };
    var Kf = Jf.D(),
        Lf = chrome.extension.getBackgroundPage();
    document.addEventListener("DOMContentLoaded", function() {
        chrome.tabs.executeScript({
            code: "disposeWindowBubble();"
        });
        Mf();
        Nf();
        M(J("new-translation"), "click", Of);
        sb(J("options-link"), te("MSG_FOOTER_OPTIONS"));
        sb(J("translate-link"), te("MSG_FOOTER_TRANSLATE"));
        Pf();
        chrome.runtime.connect()
    });
    var Mf = function() {
            var a = J("search-bar"),
                b = ue(),
                c = J("text-input");
            dd(b, a);
            M(b, "action", Qf);
            M(c, "keypress", function(a) {
                13 == a.keyCode && Qf()
            });
            Rf()
        },
        Nf = function() {
            var a = J("translate-page");
            sb(a, te("MSG_TRANSLATE_PAGE"));
            var b;
            chrome.tabs.query({
                active: !0,
                currentWindow: !0
            }, function(a) {
                b = a[0]
            });
            M(a, "click", function() {
                Lf.translate.getTranslateManager().attach(b.id);
                window.close()
            })
        },
        Pf = function() {
            chrome.tabs.executeScript({
                code: "window.getSelection().toString();",
                allFrames: !0
            }, function(a) {
                for (var b = 0; b <
                    a.length; b++)
                    if ("" != a[b]) {
                        Sf(a[b], "popup");
                        break
                    }
            })
        },
        Of = function() {
            Rf();
            bc(J("more"), !1);
            J("text-input").focus()
        },
        Rf = function() {
            J("text-input").value = "";
            bc(J("search-bar"), !0);
            bc(J("new-translation"), !1);
            bc(J("more"), !1);
            Ec(J("translation"))
        },
        Qf = function() {
            Sf(J("text-input").value, "input")
        },
        Sf = function(a, b) {
            if ("" != a.trim()) {
                bc(J("search-bar"), !1);
                var c = u(Kf.a, Kf, !0);
                if ("" != a) {
                    window.selection = a;
                    var d = new sf("gtx", "https://translate.googleapis.com"),
                        e = chrome.i18n.getUILanguage ? chrome.i18n.getUILanguage() :
                        "en",
                        f = Hf(),
                        g = new N("source=" + b),
                        k = window.selection,
                        n = d.a + "/translate_a/single",
                        l = new N,
                        v = new N;
                    l.set("client", d.b);
                    l.set("sl", "auto");
                    l.set("tl", f);
                    l.set("hl", e);
                    e = ["t", "bd"];
                    l.remove("dt");
                    0 < e.length && (l.b = null, l.a.set(nc(l, "dt"), Ma(e)), l.c += e.length);
                    l.set("dj", "1");
                    g && l.e(g);
                    v.set("q", k);
                    g = n;
                    c = u(d.c, d, c);
                    l = l.toString();
                    v = v.toString();
                    d = "POST";
                    g += "?" + l;
                    2E3 > l.length + v.length && (d = "GET", g += "&" + v, v = "");
                    l = g;
                    g = new Z;
                    ff.push(g);
                    c && g.listen("complete", c);
                    g.C.add("ready", g.qa, !0, void 0, void 0);
                    g.e = Math.max(0,
                        1E4);
                    g.send(l, d, v, void 0)
                }
            }
        };
    window.Lf = Lf;
})();