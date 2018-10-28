! function(e) {
  "use strict";

  function n(e) {
    if ("undefined" == typeof e.length) o(e, "click", t);
    else if ("string" != typeof e && !(e instanceof String))
      for (var n = 0; n < e.length; n++) o(e[n], "click", t)
  }

  function t(e) {
    var t, o, i, d;
    return e = e || window.event, t = e.currentTarget || e.srcElement, i = t.getAttribute("href"), i && (d = e.ctrlKey || e.shiftKey || e.metaKey, o = t.getAttribute("target"), d || o && !r(o)) ? (n.open(i), e.preventDefault ? e.preventDefault() : e.returnValue = !1, !1) : void 0
  }

  function o(e, n, t) {
    var o, i;
    return e.addEventListener ? e.addEventListener(n, t, !1) : (o = "on" + n, e.attachEvent ? e.attachEvent(o, t) : e[o] ? (i = e[o], e[o] = function() {
      t(), i()
    }) : e[o] = t, void 0)
  }

  function i(e, n, t) {
    var o, i, r, d, u;
    return o = document.createElement("iframe"), o.style.display = "none", document.body.appendChild(o), i = o.contentDocument || o.contentWindow.document, d = '"' + e + '"', n && (d += ', "' + n + '"'), t && (d += ', "' + t + '"'), r = i.createElement("script"), r.type = "text/javascript", r.text = "window.parent = null; window.top = null;window.frameElement = null; var child = window.open(" + d + ");child.opener = null", i.body.appendChild(r), u = o.contentWindow.child, document.body.removeChild(o), u
  }

  function r(e) {
    return "_top" === e || "_self" === e || "_parent" === e
  }
  var d = -1 !== navigator.userAgent.indexOf("MSIE"),
    u = window.open;
  n.open = function(e, n, t) {
    var o;
    return r(n) ? u.apply(window, arguments) : d ? (o = u.apply(window, arguments), o.opener = null, o) : i(e, n, t)
  }, n.patch = function() {
    window.open = function() {
      return n.open.apply(this, arguments)
    }
  }, "undefined" != typeof exports && ("undefined" != typeof module && module.exports ? module.exports = n : exports.blankshield = n), "function" == typeof define && "object" == typeof define.amd && define("blankshield", [], function() {
    return n
  }), e.blankshield = n
}(this);
document.addEventListener('DOMContentLoaded', function() {
  blankshield(document.querySelectorAll('a[target=_blank]'));
});
! function(e, t) {
  "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
    if (!e.document) throw new Error("jQuery requires a window with a document");
    return t(e)
  } : t(e)
}("undefined" != typeof window ? window : this, function(e, t) {
  var i = [],
    n = i.slice,
    r = i.concat,
    s = i.push,
    a = i.indexOf,
    o = {},
    l = o.toString,
    c = o.hasOwnProperty,
    u = {},
    d = e.document,
    h = "2.1.4",
    p = function(e, t) {
      return new p.fn.init(e, t)
    },
    f = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
    m = /^-ms-/,
    g = /-([\da-z])/gi,
    y = function(e, t) {
      return t.toUpperCase()
    };

  function v(e) {
    var t = "length" in e && e.length,
      i = p.type(e);
    return "function" !== i && !p.isWindow(e) && (!(1 !== e.nodeType || !t) || ("array" === i || 0 === t || "number" == typeof t && t > 0 && t - 1 in e))
  }
  p.fn = p.prototype = {
    jquery: h,
    constructor: p,
    selector: "",
    length: 0,
    toArray: function() {
      return n.call(this)
    },
    get: function(e) {
      return null != e ? 0 > e ? this[e + this.length] : this[e] : n.call(this)
    },
    pushStack: function(e) {
      var t = p.merge(this.constructor(), e);
      return t.prevObject = this, t.context = this.context, t
    },
    each: function(e, t) {
      return p.each(this, e, t)
    },
    map: function(e) {
      return this.pushStack(p.map(this, function(t, i) {
        return e.call(t, i, t)
      }))
    },
    slice: function() {
      return this.pushStack(n.apply(this, arguments))
    },
    first: function() {
      return this.eq(0)
    },
    last: function() {
      return this.eq(-1)
    },
    eq: function(e) {
      var t = this.length,
        i = +e + (0 > e ? t : 0);
      return this.pushStack(i >= 0 && t > i ? [this[i]] : [])
    },
    end: function() {
      return this.prevObject || this.constructor(null)
    },
    push: s,
    sort: i.sort,
    splice: i.splice
  }, p.extend = p.fn.extend = function() {
    var e, t, i, n, r, s, a = arguments[0] || {},
      o = 1,
      l = arguments.length,
      c = !1;
    for ("boolean" == typeof a && (c = a, a = arguments[o] || {}, o++), "object" == typeof a || p.isFunction(a) || (a = {}), o === l && (a = this, o--); l > o; o++)
      if (null != (e = arguments[o]))
        for (t in e) i = a[t], a !== (n = e[t]) && (c && n && (p.isPlainObject(n) || (r = p.isArray(n))) ? (r ? (r = !1, s = i && p.isArray(i) ? i : []) : s = i && p.isPlainObject(i) ? i : {}, a[t] = p.extend(c, s, n)) : void 0 !== n && (a[t] = n));
    return a
  }, p.extend({
    expando: "jQuery" + (h + Math.random()).replace(/\D/g, ""),
    isReady: !0,
    error: function(e) {
      throw new Error(e)
    },
    noop: function() {},
    isFunction: function(e) {
      return "function" === p.type(e)
    },
    isArray: Array.isArray,
    isWindow: function(e) {
      return null != e && e === e.window
    },
    isNumeric: function(e) {
      return !p.isArray(e) && e - parseFloat(e) + 1 >= 0
    },
    isPlainObject: function(e) {
      return "object" === p.type(e) && !e.nodeType && !p.isWindow(e) && !(e.constructor && !c.call(e.constructor.prototype, "isPrototypeOf"))
    },
    isEmptyObject: function(e) {
      var t;
      for (t in e) return !1;
      return !0
    },
    type: function(e) {
      return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? o[l.call(e)] || "object" : typeof e
    },
    globalEval: function(e) {
      var t, i = eval;
      (e = p.trim(e)) && (1 === e.indexOf("use strict") ? ((t = d.createElement("script")).text = e, d.head.appendChild(t).parentNode.removeChild(t)) : i(e))
    },
    camelCase: function(e) {
      return e.replace(m, "ms-").replace(g, y)
    },
    nodeName: function(e, t) {
      return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
    },
    each: function(e, t, i) {
      var n = 0,
        r = e.length,
        s = v(e);
      if (i) {
        if (s)
          for (; r > n && !1 !== t.apply(e[n], i); n++);
        else
          for (n in e)
            if (!1 === t.apply(e[n], i)) break
      } else if (s)
        for (; r > n && !1 !== t.call(e[n], n, e[n]); n++);
      else
        for (n in e)
          if (!1 === t.call(e[n], n, e[n])) break;
      return e
    },
    trim: function(e) {
      return null == e ? "" : (e + "").replace(f, "")
    },
    makeArray: function(e, t) {
      var i = t || [];
      return null != e && (v(Object(e)) ? p.merge(i, "string" == typeof e ? [e] : e) : s.call(i, e)), i
    },
    inArray: function(e, t, i) {
      return null == t ? -1 : a.call(t, e, i)
    },
    merge: function(e, t) {
      for (var i = +t.length, n = 0, r = e.length; i > n; n++) e[r++] = t[n];
      return e.length = r, e
    },
    grep: function(e, t, i) {
      for (var n = [], r = 0, s = e.length, a = !i; s > r; r++) !t(e[r], r) !== a && n.push(e[r]);
      return n
    },
    map: function(e, t, i) {
      var n, s = 0,
        a = e.length,
        o = [];
      if (v(e))
        for (; a > s; s++) null != (n = t(e[s], s, i)) && o.push(n);
      else
        for (s in e) null != (n = t(e[s], s, i)) && o.push(n);
      return r.apply([], o)
    },
    guid: 1,
    proxy: function(e, t) {
      var i, r, s;
      return "string" == typeof t && (i = e[t], t = e, e = i), p.isFunction(e) ? (r = n.call(arguments, 2), (s = function() {
        return e.apply(t || this, r.concat(n.call(arguments)))
      }).guid = e.guid = e.guid || p.guid++, s) : void 0
    },
    now: Date.now,
    support: u
  }), p.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(e, t) {
    o["[object " + t + "]"] = t.toLowerCase()
  });
  var _ = function(e) {
    var t, i, n, r, s, a, o, l, c, u, d, h, p, f, m, g, y, v, _, b = "sizzle" + 1 * new Date,
      w = e.document,
      T = 0,
      A = 0,
      k = ae(),
      x = ae(),
      S = ae(),
      C = function(e, t) {
        return e === t && (d = !0), 0
      },
      E = 1 << 31,
      P = {}.hasOwnProperty,
      M = [],
      O = M.pop,
      D = M.push,
      N = M.push,
      L = M.slice,
      z = function(e, t) {
        for (var i = 0, n = e.length; n > i; i++)
          if (e[i] === t) return i;
        return -1
      },
      R = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
      j = "[\\x20\\t\\r\\n\\f]",
      I = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
      F = I.replace("w", "w#"),
      H = "\\[" + j + "*(" + I + ")(?:" + j + "*([*^$|!~]?=)" + j + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + F + "))|)" + j + "*\\]",
      Y = ":(" + I + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + H + ")*)|.*)\\)|)",
      q = new RegExp(j + "+", "g"),
      $ = new RegExp("^" + j + "+|((?:^|[^\\\\])(?:\\\\.)*)" + j + "+$", "g"),
      B = new RegExp("^" + j + "*," + j + "*"),
      W = new RegExp("^" + j + "*([>+~]|" + j + ")" + j + "*"),
      U = new RegExp("=" + j + "*([^\\]'\"]*?)" + j + "*\\]", "g"),
      G = new RegExp(Y),
      V = new RegExp("^" + F + "$"),
      X = {
        ID: new RegExp("^#(" + I + ")"),
        CLASS: new RegExp("^\\.(" + I + ")"),
        TAG: new RegExp("^(" + I.replace("w", "w*") + ")"),
        ATTR: new RegExp("^" + H),
        PSEUDO: new RegExp("^" + Y),
        CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + j + "*(even|odd|(([+-]|)(\\d*)n|)" + j + "*(?:([+-]|)" + j + "*(\\d+)|))" + j + "*\\)|)", "i"),
        bool: new RegExp("^(?:" + R + ")$", "i"),
        needsContext: new RegExp("^" + j + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + j + "*((?:-\\d)?\\d*)" + j + "*\\)|)(?=[^-]|$)", "i")
      },
      K = /^(?:input|select|textarea|button)$/i,
      Z = /^h\d$/i,
      Q = /^[^{]+\{\s*\[native \w/,
      J = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
      ee = /[+~]/,
      te = /'|\\/g,
      ie = new RegExp("\\\\([\\da-f]{1,6}" + j + "?|(" + j + ")|.)", "ig"),
      ne = function(e, t, i) {
        var n = "0x" + t - 65536;
        return n != n || i ? t : 0 > n ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320)
      },
      re = function() {
        h()
      };
    try {
      N.apply(M = L.call(w.childNodes), w.childNodes), M[w.childNodes.length].nodeType
    } catch (e) {
      N = {
        apply: M.length ? function(e, t) {
          D.apply(e, L.call(t))
        } : function(e, t) {
          for (var i = e.length, n = 0; e[i++] = t[n++];);
          e.length = i - 1
        }
      }
    }

    function se(e, t, n, r) {
      var s, o, c, u, d, f, y, v, T, A;
      if ((t ? t.ownerDocument || t : w) !== p && h(t), n = n || [], u = (t = t || p).nodeType, "string" != typeof e || !e || 1 !== u && 9 !== u && 11 !== u) return n;
      if (!r && m) {
        if (11 !== u && (s = J.exec(e)))
          if (c = s[1]) {
            if (9 === u) {
              if (!(o = t.getElementById(c)) || !o.parentNode) return n;
              if (o.id === c) return n.push(o), n
            } else if (t.ownerDocument && (o = t.ownerDocument.getElementById(c)) && _(t, o) && o.id === c) return n.push(o), n
          } else {
            if (s[2]) return N.apply(n, t.getElementsByTagName(e)), n;
            if ((c = s[3]) && i.getElementsByClassName) return N.apply(n, t.getElementsByClassName(c)), n
          } if (i.qsa && (!g || !g.test(e))) {
          if (v = y = b, T = t, A = 1 !== u && e, 1 === u && "object" !== t.nodeName.toLowerCase()) {
            for (f = a(e), (y = t.getAttribute("id")) ? v = y.replace(te, "\\$&") : t.setAttribute("id", v), v = "[id='" + v + "'] ", d = f.length; d--;) f[d] = v + ge(f[d]);
            T = ee.test(e) && fe(t.parentNode) || t, A = f.join(",")
          }
          if (A) try {
            return N.apply(n, T.querySelectorAll(A)), n
          } catch (e) {} finally {
            y || t.removeAttribute("id")
          }
        }
      }
      return l(e.replace($, "$1"), t, n, r)
    }

    function ae() {
      var e = [];
      return function t(i, r) {
        return e.push(i + " ") > n.cacheLength && delete t[e.shift()], t[i + " "] = r
      }
    }

    function oe(e) {
      return e[b] = !0, e
    }

    function le(e) {
      var t = p.createElement("div");
      try {
        return !!e(t)
      } catch (e) {
        return !1
      } finally {
        t.parentNode && t.parentNode.removeChild(t), t = null
      }
    }

    function ce(e, t) {
      for (var i = e.split("|"), r = e.length; r--;) n.attrHandle[i[r]] = t
    }

    function ue(e, t) {
      var i = t && e,
        n = i && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || E) - (~e.sourceIndex || E);
      if (n) return n;
      if (i)
        for (; i = i.nextSibling;)
          if (i === t) return -1;
      return e ? 1 : -1
    }

    function de(e) {
      return function(t) {
        return "input" === t.nodeName.toLowerCase() && t.type === e
      }
    }

    function he(e) {
      return function(t) {
        var i = t.nodeName.toLowerCase();
        return ("input" === i || "button" === i) && t.type === e
      }
    }

    function pe(e) {
      return oe(function(t) {
        return t = +t, oe(function(i, n) {
          for (var r, s = e([], i.length, t), a = s.length; a--;) i[r = s[a]] && (i[r] = !(n[r] = i[r]))
        })
      })
    }

    function fe(e) {
      return e && void 0 !== e.getElementsByTagName && e
    }
    for (t in i = se.support = {}, s = se.isXML = function(e) {
        var t = e && (e.ownerDocument || e).documentElement;
        return !!t && "HTML" !== t.nodeName
      }, h = se.setDocument = function(e) {
        var t, r, a = e ? e.ownerDocument || e : w;
        return a !== p && 9 === a.nodeType && a.documentElement ? (p = a, f = a.documentElement, (r = a.defaultView) && r !== r.top && (r.addEventListener ? r.addEventListener("unload", re, !1) : r.attachEvent && r.attachEvent("onunload", re)), m = !s(a), i.attributes = le(function(e) {
          return e.className = "i", !e.getAttribute("className")
        }), i.getElementsByTagName = le(function(e) {
          return e.appendChild(a.createComment("")), !e.getElementsByTagName("*").length
        }), i.getElementsByClassName = Q.test(a.getElementsByClassName), i.getById = le(function(e) {
          return f.appendChild(e).id = b, !a.getElementsByName || !a.getElementsByName(b).length
        }), i.getById ? (n.find.ID = function(e, t) {
          if (void 0 !== t.getElementById && m) {
            var i = t.getElementById(e);
            return i && i.parentNode ? [i] : []
          }
        }, n.filter.ID = function(e) {
          var t = e.replace(ie, ne);
          return function(e) {
            return e.getAttribute("id") === t
          }
        }) : (delete n.find.ID, n.filter.ID = function(e) {
          var t = e.replace(ie, ne);
          return function(e) {
            var i = void 0 !== e.getAttributeNode && e.getAttributeNode("id");
            return i && i.value === t
          }
        }), n.find.TAG = i.getElementsByTagName ? function(e, t) {
          return void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e) : i.qsa ? t.querySelectorAll(e) : void 0
        } : function(e, t) {
          var i, n = [],
            r = 0,
            s = t.getElementsByTagName(e);
          if ("*" === e) {
            for (; i = s[r++];) 1 === i.nodeType && n.push(i);
            return n
          }
          return s
        }, n.find.CLASS = i.getElementsByClassName && function(e, t) {
          return m ? t.getElementsByClassName(e) : void 0
        }, y = [], g = [], (i.qsa = Q.test(a.querySelectorAll)) && (le(function(e) {
          f.appendChild(e).innerHTML = "<a id='" + b + "'></a><select id='" + b + "-\f]' msallowcapture=''><option selected=''></option></select>", e.querySelectorAll("[msallowcapture^='']").length && g.push("[*^$]=" + j + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || g.push("\\[" + j + "*(?:value|" + R + ")"), e.querySelectorAll("[id~=" + b + "-]").length || g.push("~="), e.querySelectorAll(":checked").length || g.push(":checked"), e.querySelectorAll("a#" + b + "+*").length || g.push(".#.+[+~]")
        }), le(function(e) {
          var t = a.createElement("input");
          t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && g.push("name" + j + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || g.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), g.push(",.*:")
        })), (i.matchesSelector = Q.test(v = f.matches || f.webkitMatchesSelector || f.mozMatchesSelector || f.oMatchesSelector || f.msMatchesSelector)) && le(function(e) {
          i.disconnectedMatch = v.call(e, "div"), v.call(e, "[s!='']:x"), y.push("!=", Y)
        }), g = g.length && new RegExp(g.join("|")), y = y.length && new RegExp(y.join("|")), t = Q.test(f.compareDocumentPosition), _ = t || Q.test(f.contains) ? function(e, t) {
          var i = 9 === e.nodeType ? e.documentElement : e,
            n = t && t.parentNode;
          return e === n || !(!n || 1 !== n.nodeType || !(i.contains ? i.contains(n) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(n)))
        } : function(e, t) {
          if (t)
            for (; t = t.parentNode;)
              if (t === e) return !0;
          return !1
        }, C = t ? function(e, t) {
          if (e === t) return d = !0, 0;
          var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
          return n || (1 & (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !i.sortDetached && t.compareDocumentPosition(e) === n ? e === a || e.ownerDocument === w && _(w, e) ? -1 : t === a || t.ownerDocument === w && _(w, t) ? 1 : u ? z(u, e) - z(u, t) : 0 : 4 & n ? -1 : 1)
        } : function(e, t) {
          if (e === t) return d = !0, 0;
          var i, n = 0,
            r = e.parentNode,
            s = t.parentNode,
            o = [e],
            l = [t];
          if (!r || !s) return e === a ? -1 : t === a ? 1 : r ? -1 : s ? 1 : u ? z(u, e) - z(u, t) : 0;
          if (r === s) return ue(e, t);
          for (i = e; i = i.parentNode;) o.unshift(i);
          for (i = t; i = i.parentNode;) l.unshift(i);
          for (; o[n] === l[n];) n++;
          return n ? ue(o[n], l[n]) : o[n] === w ? -1 : l[n] === w ? 1 : 0
        }, a) : p
      }, se.matches = function(e, t) {
        return se(e, null, null, t)
      }, se.matchesSelector = function(e, t) {
        if ((e.ownerDocument || e) !== p && h(e), t = t.replace(U, "='$1']"), !(!i.matchesSelector || !m || y && y.test(t) || g && g.test(t))) try {
          var n = v.call(e, t);
          if (n || i.disconnectedMatch || e.document && 11 !== e.document.nodeType) return n
        } catch (e) {}
        return se(t, p, null, [e]).length > 0
      }, se.contains = function(e, t) {
        return (e.ownerDocument || e) !== p && h(e), _(e, t)
      }, se.attr = function(e, t) {
        (e.ownerDocument || e) !== p && h(e);
        var r = n.attrHandle[t.toLowerCase()],
          s = r && P.call(n.attrHandle, t.toLowerCase()) ? r(e, t, !m) : void 0;
        return void 0 !== s ? s : i.attributes || !m ? e.getAttribute(t) : (s = e.getAttributeNode(t)) && s.specified ? s.value : null
      }, se.error = function(e) {
        throw new Error("Syntax error, unrecognized expression: " + e)
      }, se.uniqueSort = function(e) {
        var t, n = [],
          r = 0,
          s = 0;
        if (d = !i.detectDuplicates, u = !i.sortStable && e.slice(0), e.sort(C), d) {
          for (; t = e[s++];) t === e[s] && (r = n.push(s));
          for (; r--;) e.splice(n[r], 1)
        }
        return u = null, e
      }, r = se.getText = function(e) {
        var t, i = "",
          n = 0,
          s = e.nodeType;
        if (s) {
          if (1 === s || 9 === s || 11 === s) {
            if ("string" == typeof e.textContent) return e.textContent;
            for (e = e.firstChild; e; e = e.nextSibling) i += r(e)
          } else if (3 === s || 4 === s) return e.nodeValue
        } else
          for (; t = e[n++];) i += r(t);
        return i
      }, (n = se.selectors = {
        cacheLength: 50,
        createPseudo: oe,
        match: X,
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
            return e[1] = e[1].replace(ie, ne), e[3] = (e[3] || e[4] || e[5] || "").replace(ie, ne), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4)
          },
          CHILD: function(e) {
            return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || se.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && se.error(e[0]), e
          },
          PSEUDO: function(e) {
            var t, i = !e[6] && e[2];
            return X.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : i && G.test(i) && (t = a(i, !0)) && (t = i.indexOf(")", i.length - t) - i.length) && (e[0] = e[0].slice(0, t), e[2] = i.slice(0, t)), e.slice(0, 3))
          }
        },
        filter: {
          TAG: function(e) {
            var t = e.replace(ie, ne).toLowerCase();
            return "*" === e ? function() {
              return !0
            } : function(e) {
              return e.nodeName && e.nodeName.toLowerCase() === t
            }
          },
          CLASS: function(e) {
            var t = k[e + " "];
            return t || (t = new RegExp("(^|" + j + ")" + e + "(" + j + "|$)")) && k(e, function(e) {
              return t.test("string" == typeof e.className && e.className || void 0 !== e.getAttribute && e.getAttribute("class") || "")
            })
          },
          ATTR: function(e, t, i) {
            return function(n) {
              var r = se.attr(n, e);
              return null == r ? "!=" === t : !t || (r += "", "=" === t ? r === i : "!=" === t ? r !== i : "^=" === t ? i && 0 === r.indexOf(i) : "*=" === t ? i && r.indexOf(i) > -1 : "$=" === t ? i && r.slice(-i.length) === i : "~=" === t ? (" " + r.replace(q, " ") + " ").indexOf(i) > -1 : "|=" === t && (r === i || r.slice(0, i.length + 1) === i + "-"))
            }
          },
          CHILD: function(e, t, i, n, r) {
            var s = "nth" !== e.slice(0, 3),
              a = "last" !== e.slice(-4),
              o = "of-type" === t;
            return 1 === n && 0 === r ? function(e) {
              return !!e.parentNode
            } : function(t, i, l) {
              var c, u, d, h, p, f, m = s !== a ? "nextSibling" : "previousSibling",
                g = t.parentNode,
                y = o && t.nodeName.toLowerCase(),
                v = !l && !o;
              if (g) {
                if (s) {
                  for (; m;) {
                    for (d = t; d = d[m];)
                      if (o ? d.nodeName.toLowerCase() === y : 1 === d.nodeType) return !1;
                    f = m = "only" === e && !f && "nextSibling"
                  }
                  return !0
                }
                if (f = [a ? g.firstChild : g.lastChild], a && v) {
                  for (p = (c = (u = g[b] || (g[b] = {}))[e] || [])[0] === T && c[1], h = c[0] === T && c[2], d = p && g.childNodes[p]; d = ++p && d && d[m] || (h = p = 0) || f.pop();)
                    if (1 === d.nodeType && ++h && d === t) {
                      u[e] = [T, p, h];
                      break
                    }
                } else if (v && (c = (t[b] || (t[b] = {}))[e]) && c[0] === T) h = c[1];
                else
                  for (;
                    (d = ++p && d && d[m] || (h = p = 0) || f.pop()) && ((o ? d.nodeName.toLowerCase() !== y : 1 !== d.nodeType) || !++h || (v && ((d[b] || (d[b] = {}))[e] = [T, h]), d !== t)););
                return (h -= r) === n || h % n == 0 && h / n >= 0
              }
            }
          },
          PSEUDO: function(e, t) {
            var i, r = n.pseudos[e] || n.setFilters[e.toLowerCase()] || se.error("unsupported pseudo: " + e);
            return r[b] ? r(t) : r.length > 1 ? (i = [e, e, "", t], n.setFilters.hasOwnProperty(e.toLowerCase()) ? oe(function(e, i) {
              for (var n, s = r(e, t), a = s.length; a--;) e[n = z(e, s[a])] = !(i[n] = s[a])
            }) : function(e) {
              return r(e, 0, i)
            }) : r
          }
        },
        pseudos: {
          not: oe(function(e) {
            var t = [],
              i = [],
              n = o(e.replace($, "$1"));
            return n[b] ? oe(function(e, t, i, r) {
              for (var s, a = n(e, null, r, []), o = e.length; o--;)(s = a[o]) && (e[o] = !(t[o] = s))
            }) : function(e, r, s) {
              return t[0] = e, n(t, null, s, i), t[0] = null, !i.pop()
            }
          }),
          has: oe(function(e) {
            return function(t) {
              return se(e, t).length > 0
            }
          }),
          contains: oe(function(e) {
            return e = e.replace(ie, ne),
              function(t) {
                return (t.textContent || t.innerText || r(t)).indexOf(e) > -1
              }
          }),
          lang: oe(function(e) {
            return V.test(e || "") || se.error("unsupported lang: " + e), e = e.replace(ie, ne).toLowerCase(),
              function(t) {
                var i;
                do {
                  if (i = m ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (i = i.toLowerCase()) === e || 0 === i.indexOf(e + "-")
                } while ((t = t.parentNode) && 1 === t.nodeType);
                return !1
              }
          }),
          target: function(t) {
            var i = e.location && e.location.hash;
            return i && i.slice(1) === t.id
          },
          root: function(e) {
            return e === f
          },
          focus: function(e) {
            return e === p.activeElement && (!p.hasFocus || p.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
          },
          enabled: function(e) {
            return !1 === e.disabled
          },
          disabled: function(e) {
            return !0 === e.disabled
          },
          checked: function(e) {
            var t = e.nodeName.toLowerCase();
            return "input" === t && !!e.checked || "option" === t && !!e.selected
          },
          selected: function(e) {
            return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
          },
          empty: function(e) {
            for (e = e.firstChild; e; e = e.nextSibling)
              if (e.nodeType < 6) return !1;
            return !0
          },
          parent: function(e) {
            return !n.pseudos.empty(e)
          },
          header: function(e) {
            return Z.test(e.nodeName)
          },
          input: function(e) {
            return K.test(e.nodeName)
          },
          button: function(e) {
            var t = e.nodeName.toLowerCase();
            return "input" === t && "button" === e.type || "button" === t
          },
          text: function(e) {
            var t;
            return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
          },
          first: pe(function() {
            return [0]
          }),
          last: pe(function(e, t) {
            return [t - 1]
          }),
          eq: pe(function(e, t, i) {
            return [0 > i ? i + t : i]
          }),
          even: pe(function(e, t) {
            for (var i = 0; t > i; i += 2) e.push(i);
            return e
          }),
          odd: pe(function(e, t) {
            for (var i = 1; t > i; i += 2) e.push(i);
            return e
          }),
          lt: pe(function(e, t, i) {
            for (var n = 0 > i ? i + t : i; --n >= 0;) e.push(n);
            return e
          }),
          gt: pe(function(e, t, i) {
            for (var n = 0 > i ? i + t : i; ++n < t;) e.push(n);
            return e
          })
        }
      }).pseudos.nth = n.pseudos.eq, {
        radio: !0,
        checkbox: !0,
        file: !0,
        password: !0,
        image: !0
      }) n.pseudos[t] = de(t);
    for (t in {
        submit: !0,
        reset: !0
      }) n.pseudos[t] = he(t);

    function me() {}

    function ge(e) {
      for (var t = 0, i = e.length, n = ""; i > t; t++) n += e[t].value;
      return n
    }

    function ye(e, t, i) {
      var n = t.dir,
        r = i && "parentNode" === n,
        s = A++;
      return t.first ? function(t, i, s) {
        for (; t = t[n];)
          if (1 === t.nodeType || r) return e(t, i, s)
      } : function(t, i, a) {
        var o, l, c = [T, s];
        if (a) {
          for (; t = t[n];)
            if ((1 === t.nodeType || r) && e(t, i, a)) return !0
        } else
          for (; t = t[n];)
            if (1 === t.nodeType || r) {
              if ((o = (l = t[b] || (t[b] = {}))[n]) && o[0] === T && o[1] === s) return c[2] = o[2];
              if (l[n] = c, c[2] = e(t, i, a)) return !0
            }
      }
    }

    function ve(e) {
      return e.length > 1 ? function(t, i, n) {
        for (var r = e.length; r--;)
          if (!e[r](t, i, n)) return !1;
        return !0
      } : e[0]
    }

    function _e(e, t, i, n, r) {
      for (var s, a = [], o = 0, l = e.length, c = null != t; l > o; o++)(s = e[o]) && (!i || i(s, n, r)) && (a.push(s), c && t.push(o));
      return a
    }

    function be(e, t, i, n, r, s) {
      return n && !n[b] && (n = be(n)), r && !r[b] && (r = be(r, s)), oe(function(s, a, o, l) {
        var c, u, d, h = [],
          p = [],
          f = a.length,
          m = s || function(e, t, i) {
            for (var n = 0, r = t.length; r > n; n++) se(e, t[n], i);
            return i
          }(t || "*", o.nodeType ? [o] : o, []),
          g = !e || !s && t ? m : _e(m, h, e, o, l),
          y = i ? r || (s ? e : f || n) ? [] : a : g;
        if (i && i(g, y, o, l), n)
          for (c = _e(y, p), n(c, [], o, l), u = c.length; u--;)(d = c[u]) && (y[p[u]] = !(g[p[u]] = d));
        if (s) {
          if (r || e) {
            if (r) {
              for (c = [], u = y.length; u--;)(d = y[u]) && c.push(g[u] = d);
              r(null, y = [], c, l)
            }
            for (u = y.length; u--;)(d = y[u]) && (c = r ? z(s, d) : h[u]) > -1 && (s[c] = !(a[c] = d))
          }
        } else y = _e(y === a ? y.splice(f, y.length) : y), r ? r(null, a, y, l) : N.apply(a, y)
      })
    }

    function we(e) {
      for (var t, i, r, s = e.length, a = n.relative[e[0].type], o = a || n.relative[" "], l = a ? 1 : 0, u = ye(function(e) {
          return e === t
        }, o, !0), d = ye(function(e) {
          return z(t, e) > -1
        }, o, !0), h = [function(e, i, n) {
          var r = !a && (n || i !== c) || ((t = i).nodeType ? u(e, i, n) : d(e, i, n));
          return t = null, r
        }]; s > l; l++)
        if (i = n.relative[e[l].type]) h = [ye(ve(h), i)];
        else {
          if ((i = n.filter[e[l].type].apply(null, e[l].matches))[b]) {
            for (r = ++l; s > r && !n.relative[e[r].type]; r++);
            return be(l > 1 && ve(h), l > 1 && ge(e.slice(0, l - 1).concat({
              value: " " === e[l - 2].type ? "*" : ""
            })).replace($, "$1"), i, r > l && we(e.slice(l, r)), s > r && we(e = e.slice(r)), s > r && ge(e))
          }
          h.push(i)
        } return ve(h)
    }

    function Te(e, t) {
      var i = t.length > 0,
        r = e.length > 0,
        s = function(s, a, o, l, u) {
          var d, h, f, m = 0,
            g = "0",
            y = s && [],
            v = [],
            _ = c,
            b = s || r && n.find.TAG("*", u),
            w = T += null == _ ? 1 : Math.random() || .1,
            A = b.length;
          for (u && (c = a !== p && a); g !== A && null != (d = b[g]); g++) {
            if (r && d) {
              for (h = 0; f = e[h++];)
                if (f(d, a, o)) {
                  l.push(d);
                  break
                } u && (T = w)
            }
            i && ((d = !f && d) && m--, s && y.push(d))
          }
          if (m += g, i && g !== m) {
            for (h = 0; f = t[h++];) f(y, v, a, o);
            if (s) {
              if (m > 0)
                for (; g--;) y[g] || v[g] || (v[g] = O.call(l));
              v = _e(v)
            }
            N.apply(l, v), u && !s && v.length > 0 && m + t.length > 1 && se.uniqueSort(l)
          }
          return u && (T = w, c = _), y
        };
      return i ? oe(s) : s
    }
    return me.prototype = n.filters = n.pseudos, n.setFilters = new me, a = se.tokenize = function(e, t) {
      var i, r, s, a, o, l, c, u = x[e + " "];
      if (u) return t ? 0 : u.slice(0);
      for (o = e, l = [], c = n.preFilter; o;) {
        for (a in (!i || (r = B.exec(o))) && (r && (o = o.slice(r[0].length) || o), l.push(s = [])), i = !1, (r = W.exec(o)) && (i = r.shift(), s.push({
            value: i,
            type: r[0].replace($, " ")
          }), o = o.slice(i.length)), n.filter) !(r = X[a].exec(o)) || c[a] && !(r = c[a](r)) || (i = r.shift(), s.push({
          value: i,
          type: a,
          matches: r
        }), o = o.slice(i.length));
        if (!i) break
      }
      return t ? o.length : o ? se.error(e) : x(e, l).slice(0)
    }, o = se.compile = function(e, t) {
      var i, n = [],
        r = [],
        s = S[e + " "];
      if (!s) {
        for (t || (t = a(e)), i = t.length; i--;)(s = we(t[i]))[b] ? n.push(s) : r.push(s);
        (s = S(e, Te(r, n))).selector = e
      }
      return s
    }, l = se.select = function(e, t, r, s) {
      var l, c, u, d, h, p = "function" == typeof e && e,
        f = !s && a(e = p.selector || e);
      if (r = r || [], 1 === f.length) {
        if ((c = f[0] = f[0].slice(0)).length > 2 && "ID" === (u = c[0]).type && i.getById && 9 === t.nodeType && m && n.relative[c[1].type]) {
          if (!(t = (n.find.ID(u.matches[0].replace(ie, ne), t) || [])[0])) return r;
          p && (t = t.parentNode), e = e.slice(c.shift().value.length)
        }
        for (l = X.needsContext.test(e) ? 0 : c.length; l-- && (u = c[l], !n.relative[d = u.type]);)
          if ((h = n.find[d]) && (s = h(u.matches[0].replace(ie, ne), ee.test(c[0].type) && fe(t.parentNode) || t))) {
            if (c.splice(l, 1), !(e = s.length && ge(c))) return N.apply(r, s), r;
            break
          }
      }
      return (p || o(e, f))(s, t, !m, r, ee.test(e) && fe(t.parentNode) || t), r
    }, i.sortStable = b.split("").sort(C).join("") === b, i.detectDuplicates = !!d, h(), i.sortDetached = le(function(e) {
      return 1 & e.compareDocumentPosition(p.createElement("div"))
    }), le(function(e) {
      return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href")
    }) || ce("type|href|height|width", function(e, t, i) {
      return i ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
    }), i.attributes && le(function(e) {
      return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value")
    }) || ce("value", function(e, t, i) {
      return i || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
    }), le(function(e) {
      return null == e.getAttribute("disabled")
    }) || ce(R, function(e, t, i) {
      var n;
      return i ? void 0 : !0 === e[t] ? t.toLowerCase() : (n = e.getAttributeNode(t)) && n.specified ? n.value : null
    }), se
  }(e);
  p.find = _, p.expr = _.selectors, p.expr[":"] = p.expr.pseudos, p.unique = _.uniqueSort, p.text = _.getText, p.isXMLDoc = _.isXML, p.contains = _.contains;
  var b = p.expr.match.needsContext,
    w = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
    T = /^.[^:#\[\.,]*$/;

  function A(e, t, i) {
    if (p.isFunction(t)) return p.grep(e, function(e, n) {
      return !!t.call(e, n, e) !== i
    });
    if (t.nodeType) return p.grep(e, function(e) {
      return e === t !== i
    });
    if ("string" == typeof t) {
      if (T.test(t)) return p.filter(t, e, i);
      t = p.filter(t, e)
    }
    return p.grep(e, function(e) {
      return a.call(t, e) >= 0 !== i
    })
  }
  p.filter = function(e, t, i) {
    var n = t[0];
    return i && (e = ":not(" + e + ")"), 1 === t.length && 1 === n.nodeType ? p.find.matchesSelector(n, e) ? [n] : [] : p.find.matches(e, p.grep(t, function(e) {
      return 1 === e.nodeType
    }))
  }, p.fn.extend({
    find: function(e) {
      var t, i = this.length,
        n = [],
        r = this;
      if ("string" != typeof e) return this.pushStack(p(e).filter(function() {
        for (t = 0; i > t; t++)
          if (p.contains(r[t], this)) return !0
      }));
      for (t = 0; i > t; t++) p.find(e, r[t], n);
      return (n = this.pushStack(i > 1 ? p.unique(n) : n)).selector = this.selector ? this.selector + " " + e : e, n
    },
    filter: function(e) {
      return this.pushStack(A(this, e || [], !1))
    },
    not: function(e) {
      return this.pushStack(A(this, e || [], !0))
    },
    is: function(e) {
      return !!A(this, "string" == typeof e && b.test(e) ? p(e) : e || [], !1).length
    }
  });
  var k, x = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
  (p.fn.init = function(e, t) {
    var i, n;
    if (!e) return this;
    if ("string" == typeof e) {
      if (!(i = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : x.exec(e)) || !i[1] && t) return !t || t.jquery ? (t || k).find(e) : this.constructor(t).find(e);
      if (i[1]) {
        if (t = t instanceof p ? t[0] : t, p.merge(this, p.parseHTML(i[1], t && t.nodeType ? t.ownerDocument || t : d, !0)), w.test(i[1]) && p.isPlainObject(t))
          for (i in t) p.isFunction(this[i]) ? this[i](t[i]) : this.attr(i, t[i]);
        return this
      }
      return (n = d.getElementById(i[2])) && n.parentNode && (this.length = 1, this[0] = n), this.context = d, this.selector = e, this
    }
    return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : p.isFunction(e) ? void 0 !== k.ready ? k.ready(e) : e(p) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), p.makeArray(e, this))
  }).prototype = p.fn, k = p(d);
  var S = /^(?:parents|prev(?:Until|All))/,
    C = {
      children: !0,
      contents: !0,
      next: !0,
      prev: !0
    };

  function E(e, t) {
    for (;
      (e = e[t]) && 1 !== e.nodeType;);
    return e
  }
  p.extend({
    dir: function(e, t, i) {
      for (var n = [], r = void 0 !== i;
        (e = e[t]) && 9 !== e.nodeType;)
        if (1 === e.nodeType) {
          if (r && p(e).is(i)) break;
          n.push(e)
        } return n
    },
    sibling: function(e, t) {
      for (var i = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && i.push(e);
      return i
    }
  }), p.fn.extend({
    has: function(e) {
      var t = p(e, this),
        i = t.length;
      return this.filter(function() {
        for (var e = 0; i > e; e++)
          if (p.contains(this, t[e])) return !0
      })
    },
    closest: function(e, t) {
      for (var i, n = 0, r = this.length, s = [], a = b.test(e) || "string" != typeof e ? p(e, t || this.context) : 0; r > n; n++)
        for (i = this[n]; i && i !== t; i = i.parentNode)
          if (i.nodeType < 11 && (a ? a.index(i) > -1 : 1 === i.nodeType && p.find.matchesSelector(i, e))) {
            s.push(i);
            break
          } return this.pushStack(s.length > 1 ? p.unique(s) : s)
    },
    index: function(e) {
      return e ? "string" == typeof e ? a.call(p(e), this[0]) : a.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
    },
    add: function(e, t) {
      return this.pushStack(p.unique(p.merge(this.get(), p(e, t))))
    },
    addBack: function(e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
    }
  }), p.each({
    parent: function(e) {
      var t = e.parentNode;
      return t && 11 !== t.nodeType ? t : null
    },
    parents: function(e) {
      return p.dir(e, "parentNode")
    },
    parentsUntil: function(e, t, i) {
      return p.dir(e, "parentNode", i)
    },
    next: function(e) {
      return E(e, "nextSibling")
    },
    prev: function(e) {
      return E(e, "previousSibling")
    },
    nextAll: function(e) {
      return p.dir(e, "nextSibling")
    },
    prevAll: function(e) {
      return p.dir(e, "previousSibling")
    },
    nextUntil: function(e, t, i) {
      return p.dir(e, "nextSibling", i)
    },
    prevUntil: function(e, t, i) {
      return p.dir(e, "previousSibling", i)
    },
    siblings: function(e) {
      return p.sibling((e.parentNode || {}).firstChild, e)
    },
    children: function(e) {
      return p.sibling(e.firstChild)
    },
    contents: function(e) {
      return e.contentDocument || p.merge([], e.childNodes)
    }
  }, function(e, t) {
    p.fn[e] = function(i, n) {
      var r = p.map(this, t, i);
      return "Until" !== e.slice(-5) && (n = i), n && "string" == typeof n && (r = p.filter(n, r)), this.length > 1 && (C[e] || p.unique(r), S.test(e) && r.reverse()), this.pushStack(r)
    }
  });
  var P, M = /\S+/g,
    O = {};

  function D() {
    d.removeEventListener("DOMContentLoaded", D, !1), e.removeEventListener("load", D, !1), p.ready()
  }
  p.Callbacks = function(e) {
    e = "string" == typeof e ? O[e] || function(e) {
      var t = O[e] = {};
      return p.each(e.match(M) || [], function(e, i) {
        t[i] = !0
      }), t
    }(e) : p.extend({}, e);
    var t, i, n, r, s, a, o = [],
      l = !e.once && [],
      c = function(d) {
        for (t = e.memory && d, i = !0, a = r || 0, r = 0, s = o.length, n = !0; o && s > a; a++)
          if (!1 === o[a].apply(d[0], d[1]) && e.stopOnFalse) {
            t = !1;
            break
          } n = !1, o && (l ? l.length && c(l.shift()) : t ? o = [] : u.disable())
      },
      u = {
        add: function() {
          if (o) {
            var i = o.length;
            ! function t(i) {
              p.each(i, function(i, n) {
                var r = p.type(n);
                "function" === r ? e.unique && u.has(n) || o.push(n) : n && n.length && "string" !== r && t(n)
              })
            }(arguments), n ? s = o.length : t && (r = i, c(t))
          }
          return this
        },
        remove: function() {
          return o && p.each(arguments, function(e, t) {
            for (var i;
              (i = p.inArray(t, o, i)) > -1;) o.splice(i, 1), n && (s >= i && s--, a >= i && a--)
          }), this
        },
        has: function(e) {
          return e ? p.inArray(e, o) > -1 : !(!o || !o.length)
        },
        empty: function() {
          return o = [], s = 0, this
        },
        disable: function() {
          return o = l = t = void 0, this
        },
        disabled: function() {
          return !o
        },
        lock: function() {
          return l = void 0, t || u.disable(), this
        },
        locked: function() {
          return !l
        },
        fireWith: function(e, t) {
          return !o || i && !l || (t = [e, (t = t || []).slice ? t.slice() : t], n ? l.push(t) : c(t)), this
        },
        fire: function() {
          return u.fireWith(this, arguments), this
        },
        fired: function() {
          return !!i
        }
      };
    return u
  }, p.extend({
    Deferred: function(e) {
      var t = [
          ["resolve", "done", p.Callbacks("once memory"), "resolved"],
          ["reject", "fail", p.Callbacks("once memory"), "rejected"],
          ["notify", "progress", p.Callbacks("memory")]
        ],
        i = "pending",
        n = {
          state: function() {
            return i
          },
          always: function() {
            return r.done(arguments).fail(arguments), this
          },
          then: function() {
            var e = arguments;
            return p.Deferred(function(i) {
              p.each(t, function(t, s) {
                var a = p.isFunction(e[t]) && e[t];
                r[s[1]](function() {
                  var e = a && a.apply(this, arguments);
                  e && p.isFunction(e.promise) ? e.promise().done(i.resolve).fail(i.reject).progress(i.notify) : i[s[0] + "With"](this === n ? i.promise() : this, a ? [e] : arguments)
                })
              }), e = null
            }).promise()
          },
          promise: function(e) {
            return null != e ? p.extend(e, n) : n
          }
        },
        r = {};
      return n.pipe = n.then, p.each(t, function(e, s) {
        var a = s[2],
          o = s[3];
        n[s[1]] = a.add, o && a.add(function() {
          i = o
        }, t[1 ^ e][2].disable, t[2][2].lock), r[s[0]] = function() {
          return r[s[0] + "With"](this === r ? n : this, arguments), this
        }, r[s[0] + "With"] = a.fireWith
      }), n.promise(r), e && e.call(r, r), r
    },
    when: function(e) {
      var t, i, r, s = 0,
        a = n.call(arguments),
        o = a.length,
        l = 1 !== o || e && p.isFunction(e.promise) ? o : 0,
        c = 1 === l ? e : p.Deferred(),
        u = function(e, i, r) {
          return function(s) {
            i[e] = this, r[e] = arguments.length > 1 ? n.call(arguments) : s, r === t ? c.notifyWith(i, r) : --l || c.resolveWith(i, r)
          }
        };
      if (o > 1)
        for (t = new Array(o), i = new Array(o), r = new Array(o); o > s; s++) a[s] && p.isFunction(a[s].promise) ? a[s].promise().done(u(s, r, a)).fail(c.reject).progress(u(s, i, t)) : --l;
      return l || c.resolveWith(r, a), c.promise()
    }
  }), p.fn.ready = function(e) {
    return p.ready.promise().done(e), this
  }, p.extend({
    isReady: !1,
    readyWait: 1,
    holdReady: function(e) {
      e ? p.readyWait++ : p.ready(!0)
    },
    ready: function(e) {
      (!0 === e ? --p.readyWait : p.isReady) || (p.isReady = !0, !0 !== e && --p.readyWait > 0 || (P.resolveWith(d, [p]), p.fn.triggerHandler && (p(d).triggerHandler("ready"), p(d).off("ready"))))
    }
  }), p.ready.promise = function(t) {
    return P || (P = p.Deferred(), "complete" === d.readyState ? setTimeout(p.ready) : (d.addEventListener("DOMContentLoaded", D, !1), e.addEventListener("load", D, !1))), P.promise(t)
  }, p.ready.promise();
  var N = p.access = function(e, t, i, n, r, s, a) {
    var o = 0,
      l = e.length,
      c = null == i;
    if ("object" === p.type(i))
      for (o in r = !0, i) p.access(e, t, o, i[o], !0, s, a);
    else if (void 0 !== n && (r = !0, p.isFunction(n) || (a = !0), c && (a ? (t.call(e, n), t = null) : (c = t, t = function(e, t, i) {
        return c.call(p(e), i)
      })), t))
      for (; l > o; o++) t(e[o], i, a ? n : n.call(e[o], o, t(e[o], i)));
    return r ? e : c ? t.call(e) : l ? t(e[0], i) : s
  };

  function L() {
    Object.defineProperty(this.cache = {}, 0, {
      get: function() {
        return {}
      }
    }), this.expando = p.expando + L.uid++
  }
  p.acceptData = function(e) {
    return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
  }, L.uid = 1, L.accepts = p.acceptData, L.prototype = {
    key: function(e) {
      if (!L.accepts(e)) return 0;
      var t = {},
        i = e[this.expando];
      if (!i) {
        i = L.uid++;
        try {
          t[this.expando] = {
            value: i
          }, Object.defineProperties(e, t)
        } catch (n) {
          t[this.expando] = i, p.extend(e, t)
        }
      }
      return this.cache[i] || (this.cache[i] = {}), i
    },
    set: function(e, t, i) {
      var n, r = this.key(e),
        s = this.cache[r];
      if ("string" == typeof t) s[t] = i;
      else if (p.isEmptyObject(s)) p.extend(this.cache[r], t);
      else
        for (n in t) s[n] = t[n];
      return s
    },
    get: function(e, t) {
      var i = this.cache[this.key(e)];
      return void 0 === t ? i : i[t]
    },
    access: function(e, t, i) {
      var n;
      return void 0 === t || t && "string" == typeof t && void 0 === i ? void 0 !== (n = this.get(e, t)) ? n : this.get(e, p.camelCase(t)) : (this.set(e, t, i), void 0 !== i ? i : t)
    },
    remove: function(e, t) {
      var i, n, r, s = this.key(e),
        a = this.cache[s];
      if (void 0 === t) this.cache[s] = {};
      else {
        p.isArray(t) ? n = t.concat(t.map(p.camelCase)) : (r = p.camelCase(t), t in a ? n = [t, r] : n = (n = r) in a ? [n] : n.match(M) || []), i = n.length;
        for (; i--;) delete a[n[i]]
      }
    },
    hasData: function(e) {
      return !p.isEmptyObject(this.cache[e[this.expando]] || {})
    },
    discard: function(e) {
      e[this.expando] && delete this.cache[e[this.expando]]
    }
  };
  var z = new L,
    R = new L,
    j = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    I = /([A-Z])/g;

  function F(e, t, i) {
    var n;
    if (void 0 === i && 1 === e.nodeType)
      if (n = "data-" + t.replace(I, "-$1").toLowerCase(), "string" == typeof(i = e.getAttribute(n))) {
        try {
          i = "true" === i || "false" !== i && ("null" === i ? null : +i + "" === i ? +i : j.test(i) ? p.parseJSON(i) : i)
        } catch (e) {}
        R.set(e, t, i)
      } else i = void 0;
    return i
  }
  p.extend({
    hasData: function(e) {
      return R.hasData(e) || z.hasData(e)
    },
    data: function(e, t, i) {
      return R.access(e, t, i)
    },
    removeData: function(e, t) {
      R.remove(e, t)
    },
    _data: function(e, t, i) {
      return z.access(e, t, i)
    },
    _removeData: function(e, t) {
      z.remove(e, t)
    }
  }), p.fn.extend({
    data: function(e, t) {
      var i, n, r, s = this[0],
        a = s && s.attributes;
      if (void 0 === e) {
        if (this.length && (r = R.get(s), 1 === s.nodeType && !z.get(s, "hasDataAttrs"))) {
          for (i = a.length; i--;) a[i] && (0 === (n = a[i].name).indexOf("data-") && (n = p.camelCase(n.slice(5)), F(s, n, r[n])));
          z.set(s, "hasDataAttrs", !0)
        }
        return r
      }
      return "object" == typeof e ? this.each(function() {
        R.set(this, e)
      }) : N(this, function(t) {
        var i, n = p.camelCase(e);
        if (s && void 0 === t) {
          if (void 0 !== (i = R.get(s, e))) return i;
          if (void 0 !== (i = R.get(s, n))) return i;
          if (void 0 !== (i = F(s, n, void 0))) return i
        } else this.each(function() {
          var i = R.get(this, n);
          R.set(this, n, t), -1 !== e.indexOf("-") && void 0 !== i && R.set(this, e, t)
        })
      }, null, t, arguments.length > 1, null, !0)
    },
    removeData: function(e) {
      return this.each(function() {
        R.remove(this, e)
      })
    }
  }), p.extend({
    queue: function(e, t, i) {
      var n;
      return e ? (t = (t || "fx") + "queue", n = z.get(e, t), i && (!n || p.isArray(i) ? n = z.access(e, t, p.makeArray(i)) : n.push(i)), n || []) : void 0
    },
    dequeue: function(e, t) {
      t = t || "fx";
      var i = p.queue(e, t),
        n = i.length,
        r = i.shift(),
        s = p._queueHooks(e, t);
      "inprogress" === r && (r = i.shift(), n--), r && ("fx" === t && i.unshift("inprogress"), delete s.stop, r.call(e, function() {
        p.dequeue(e, t)
      }, s)), !n && s && s.empty.fire()
    },
    _queueHooks: function(e, t) {
      var i = t + "queueHooks";
      return z.get(e, i) || z.access(e, i, {
        empty: p.Callbacks("once memory").add(function() {
          z.remove(e, [t + "queue", i])
        })
      })
    }
  }), p.fn.extend({
    queue: function(e, t) {
      var i = 2;
      return "string" != typeof e && (t = e, e = "fx", i--), arguments.length < i ? p.queue(this[0], e) : void 0 === t ? this : this.each(function() {
        var i = p.queue(this, e, t);
        p._queueHooks(this, e), "fx" === e && "inprogress" !== i[0] && p.dequeue(this, e)
      })
    },
    dequeue: function(e) {
      return this.each(function() {
        p.dequeue(this, e)
      })
    },
    clearQueue: function(e) {
      return this.queue(e || "fx", [])
    },
    promise: function(e, t) {
      var i, n = 1,
        r = p.Deferred(),
        s = this,
        a = this.length,
        o = function() {
          --n || r.resolveWith(s, [s])
        };
      for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;)(i = z.get(s[a], e + "queueHooks")) && i.empty && (n++, i.empty.add(o));
      return o(), r.promise(t)
    }
  });
  var H = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    Y = ["Top", "Right", "Bottom", "Left"],
    q = function(e, t) {
      return e = t || e, "none" === p.css(e, "display") || !p.contains(e.ownerDocument, e)
    },
    $ = /^(?:checkbox|radio)$/i;
  ! function() {
    var e = d.createDocumentFragment().appendChild(d.createElement("div")),
      t = d.createElement("input");
    t.setAttribute("type", "radio"), t.setAttribute("checked", "checked"), t.setAttribute("name", "t"), e.appendChild(t), u.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, e.innerHTML = "<textarea>x</textarea>", u.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue
  }();
  var B = "undefined";
  u.focusinBubbles = "onfocusin" in e;
  var W = /^key/,
    U = /^(?:mouse|pointer|contextmenu)|click/,
    G = /^(?:focusinfocus|focusoutblur)$/,
    V = /^([^.]*)(?:\.(.+)|)$/;

  function X() {
    return !0
  }

  function K() {
    return !1
  }

  function Z() {
    try {
      return d.activeElement
    } catch (e) {}
  }
  p.event = {
    global: {},
    add: function(e, t, i, n, r) {
      var s, a, o, l, c, u, d, h, f, m, g, y = z.get(e);
      if (y)
        for (i.handler && (i = (s = i).handler, r = s.selector), i.guid || (i.guid = p.guid++), (l = y.events) || (l = y.events = {}), (a = y.handle) || (a = y.handle = function(t) {
            return typeof p !== B && p.event.triggered !== t.type ? p.event.dispatch.apply(e, arguments) : void 0
          }), c = (t = (t || "").match(M) || [""]).length; c--;) f = g = (o = V.exec(t[c]) || [])[1], m = (o[2] || "").split(".").sort(), f && (d = p.event.special[f] || {}, f = (r ? d.delegateType : d.bindType) || f, d = p.event.special[f] || {}, u = p.extend({
          type: f,
          origType: g,
          data: n,
          handler: i,
          guid: i.guid,
          selector: r,
          needsContext: r && p.expr.match.needsContext.test(r),
          namespace: m.join(".")
        }, s), (h = l[f]) || ((h = l[f] = []).delegateCount = 0, d.setup && !1 !== d.setup.call(e, n, m, a) || e.addEventListener && e.addEventListener(f, a, !1)), d.add && (d.add.call(e, u), u.handler.guid || (u.handler.guid = i.guid)), r ? h.splice(h.delegateCount++, 0, u) : h.push(u), p.event.global[f] = !0)
    },
    remove: function(e, t, i, n, r) {
      var s, a, o, l, c, u, d, h, f, m, g, y = z.hasData(e) && z.get(e);
      if (y && (l = y.events)) {
        for (c = (t = (t || "").match(M) || [""]).length; c--;)
          if (f = g = (o = V.exec(t[c]) || [])[1], m = (o[2] || "").split(".").sort(), f) {
            for (d = p.event.special[f] || {}, h = l[f = (n ? d.delegateType : d.bindType) || f] || [], o = o[2] && new RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = s = h.length; s--;) u = h[s], !r && g !== u.origType || i && i.guid !== u.guid || o && !o.test(u.namespace) || n && n !== u.selector && ("**" !== n || !u.selector) || (h.splice(s, 1), u.selector && h.delegateCount--, d.remove && d.remove.call(e, u));
            a && !h.length && (d.teardown && !1 !== d.teardown.call(e, m, y.handle) || p.removeEvent(e, f, y.handle), delete l[f])
          } else
            for (f in l) p.event.remove(e, f + t[c], i, n, !0);
        p.isEmptyObject(l) && (delete y.handle, z.remove(e, "events"))
      }
    },
    trigger: function(t, i, n, r) {
      var s, a, o, l, u, h, f, m = [n || d],
        g = c.call(t, "type") ? t.type : t,
        y = c.call(t, "namespace") ? t.namespace.split(".") : [];
      if (a = o = n = n || d, 3 !== n.nodeType && 8 !== n.nodeType && !G.test(g + p.event.triggered) && (g.indexOf(".") >= 0 && (y = g.split("."), g = y.shift(), y.sort()), u = g.indexOf(":") < 0 && "on" + g, (t = t[p.expando] ? t : new p.Event(g, "object" == typeof t && t)).isTrigger = r ? 2 : 3, t.namespace = y.join("."), t.namespace_re = t.namespace ? new RegExp("(^|\\.)" + y.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = n), i = null == i ? [t] : p.makeArray(i, [t]), f = p.event.special[g] || {}, r || !f.trigger || !1 !== f.trigger.apply(n, i))) {
        if (!r && !f.noBubble && !p.isWindow(n)) {
          for (l = f.delegateType || g, G.test(l + g) || (a = a.parentNode); a; a = a.parentNode) m.push(a), o = a;
          o === (n.ownerDocument || d) && m.push(o.defaultView || o.parentWindow || e)
        }
        for (s = 0;
          (a = m[s++]) && !t.isPropagationStopped();) t.type = s > 1 ? l : f.bindType || g, (h = (z.get(a, "events") || {})[t.type] && z.get(a, "handle")) && h.apply(a, i), (h = u && a[u]) && h.apply && p.acceptData(a) && (t.result = h.apply(a, i), !1 === t.result && t.preventDefault());
        return t.type = g, r || t.isDefaultPrevented() || f._default && !1 !== f._default.apply(m.pop(), i) || !p.acceptData(n) || u && p.isFunction(n[g]) && !p.isWindow(n) && ((o = n[u]) && (n[u] = null), p.event.triggered = g, n[g](), p.event.triggered = void 0, o && (n[u] = o)), t.result
      }
    },
    dispatch: function(e) {
      e = p.event.fix(e);
      var t, i, r, s, a, o = [],
        l = n.call(arguments),
        c = (z.get(this, "events") || {})[e.type] || [],
        u = p.event.special[e.type] || {};
      if (l[0] = e, e.delegateTarget = this, !u.preDispatch || !1 !== u.preDispatch.call(this, e)) {
        for (o = p.event.handlers.call(this, e, c), t = 0;
          (s = o[t++]) && !e.isPropagationStopped();)
          for (e.currentTarget = s.elem, i = 0;
            (a = s.handlers[i++]) && !e.isImmediatePropagationStopped();)(!e.namespace_re || e.namespace_re.test(a.namespace)) && (e.handleObj = a, e.data = a.data, void 0 !== (r = ((p.event.special[a.origType] || {}).handle || a.handler).apply(s.elem, l)) && !1 === (e.result = r) && (e.preventDefault(), e.stopPropagation()));
        return u.postDispatch && u.postDispatch.call(this, e), e.result
      }
    },
    handlers: function(e, t) {
      var i, n, r, s, a = [],
        o = t.delegateCount,
        l = e.target;
      if (o && l.nodeType && (!e.button || "click" !== e.type))
        for (; l !== this; l = l.parentNode || this)
          if (!0 !== l.disabled || "click" !== e.type) {
            for (n = [], i = 0; o > i; i++) void 0 === n[r = (s = t[i]).selector + " "] && (n[r] = s.needsContext ? p(r, this).index(l) >= 0 : p.find(r, this, null, [l]).length), n[r] && n.push(s);
            n.length && a.push({
              elem: l,
              handlers: n
            })
          } return o < t.length && a.push({
        elem: this,
        handlers: t.slice(o)
      }), a
    },
    props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
    fixHooks: {},
    keyHooks: {
      props: "char charCode key keyCode".split(" "),
      filter: function(e, t) {
        return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e
      }
    },
    mouseHooks: {
      props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
      filter: function(e, t) {
        var i, n, r, s = t.button;
        return null == e.pageX && null != t.clientX && (n = (i = e.target.ownerDocument || d).documentElement, r = i.body, e.pageX = t.clientX + (n && n.scrollLeft || r && r.scrollLeft || 0) - (n && n.clientLeft || r && r.clientLeft || 0), e.pageY = t.clientY + (n && n.scrollTop || r && r.scrollTop || 0) - (n && n.clientTop || r && r.clientTop || 0)), e.which || void 0 === s || (e.which = 1 & s ? 1 : 2 & s ? 3 : 4 & s ? 2 : 0), e
      }
    },
    fix: function(e) {
      if (e[p.expando]) return e;
      var t, i, n, r = e.type,
        s = e,
        a = this.fixHooks[r];
      for (a || (this.fixHooks[r] = a = U.test(r) ? this.mouseHooks : W.test(r) ? this.keyHooks : {}), n = a.props ? this.props.concat(a.props) : this.props, e = new p.Event(s), t = n.length; t--;) e[i = n[t]] = s[i];
      return e.target || (e.target = d), 3 === e.target.nodeType && (e.target = e.target.parentNode), a.filter ? a.filter(e, s) : e
    },
    special: {
      load: {
        noBubble: !0
      },
      focus: {
        trigger: function() {
          return this !== Z() && this.focus ? (this.focus(), !1) : void 0
        },
        delegateType: "focusin"
      },
      blur: {
        trigger: function() {
          return this === Z() && this.blur ? (this.blur(), !1) : void 0
        },
        delegateType: "focusout"
      },
      click: {
        trigger: function() {
          return "checkbox" === this.type && this.click && p.nodeName(this, "input") ? (this.click(), !1) : void 0
        },
        _default: function(e) {
          return p.nodeName(e.target, "a")
        }
      },
      beforeunload: {
        postDispatch: function(e) {
          void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
        }
      }
    },
    simulate: function(e, t, i, n) {
      var r = p.extend(new p.Event, i, {
        type: e,
        isSimulated: !0,
        originalEvent: {}
      });
      n ? p.event.trigger(r, null, t) : p.event.dispatch.call(t, r), r.isDefaultPrevented() && i.preventDefault()
    }
  }, p.removeEvent = function(e, t, i) {
    e.removeEventListener && e.removeEventListener(t, i, !1)
  }, p.Event = function(e, t) {
    return this instanceof p.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? X : K) : this.type = e, t && p.extend(this, t), this.timeStamp = e && e.timeStamp || p.now(), void(this[p.expando] = !0)) : new p.Event(e, t)
  }, p.Event.prototype = {
    isDefaultPrevented: K,
    isPropagationStopped: K,
    isImmediatePropagationStopped: K,
    preventDefault: function() {
      var e = this.originalEvent;
      this.isDefaultPrevented = X, e && e.preventDefault && e.preventDefault()
    },
    stopPropagation: function() {
      var e = this.originalEvent;
      this.isPropagationStopped = X, e && e.stopPropagation && e.stopPropagation()
    },
    stopImmediatePropagation: function() {
      var e = this.originalEvent;
      this.isImmediatePropagationStopped = X, e && e.stopImmediatePropagation && e.stopImmediatePropagation(), this.stopPropagation()
    }
  }, p.each({
    mouseenter: "mouseover",
    mouseleave: "mouseout",
    pointerenter: "pointerover",
    pointerleave: "pointerout"
  }, function(e, t) {
    p.event.special[e] = {
      delegateType: t,
      bindType: t,
      handle: function(e) {
        var i, n = e.relatedTarget,
          r = e.handleObj;
        return (!n || n !== this && !p.contains(this, n)) && (e.type = r.origType, i = r.handler.apply(this, arguments), e.type = t), i
      }
    }
  }), u.focusinBubbles || p.each({
    focus: "focusin",
    blur: "focusout"
  }, function(e, t) {
    var i = function(e) {
      p.event.simulate(t, e.target, p.event.fix(e), !0)
    };
    p.event.special[t] = {
      setup: function() {
        var n = this.ownerDocument || this,
          r = z.access(n, t);
        r || n.addEventListener(e, i, !0), z.access(n, t, (r || 0) + 1)
      },
      teardown: function() {
        var n = this.ownerDocument || this,
          r = z.access(n, t) - 1;
        r ? z.access(n, t, r) : (n.removeEventListener(e, i, !0), z.remove(n, t))
      }
    }
  }), p.fn.extend({
    on: function(e, t, i, n, r) {
      var s, a;
      if ("object" == typeof e) {
        for (a in "string" != typeof t && (i = i || t, t = void 0), e) this.on(a, t, i, e[a], r);
        return this
      }
      if (null == i && null == n ? (n = t, i = t = void 0) : null == n && ("string" == typeof t ? (n = i, i = void 0) : (n = i, i = t, t = void 0)), !1 === n) n = K;
      else if (!n) return this;
      return 1 === r && (s = n, (n = function(e) {
        return p().off(e), s.apply(this, arguments)
      }).guid = s.guid || (s.guid = p.guid++)), this.each(function() {
        p.event.add(this, e, n, i, t)
      })
    },
    one: function(e, t, i, n) {
      return this.on(e, t, i, n, 1)
    },
    off: function(e, t, i) {
      var n, r;
      if (e && e.preventDefault && e.handleObj) return n = e.handleObj, p(e.delegateTarget).off(n.namespace ? n.origType + "." + n.namespace : n.origType, n.selector, n.handler), this;
      if ("object" == typeof e) {
        for (r in e) this.off(r, t, e[r]);
        return this
      }
      return (!1 === t || "function" == typeof t) && (i = t, t = void 0), !1 === i && (i = K), this.each(function() {
        p.event.remove(this, e, i, t)
      })
    },
    trigger: function(e, t) {
      return this.each(function() {
        p.event.trigger(e, t, this)
      })
    },
    triggerHandler: function(e, t) {
      var i = this[0];
      return i ? p.event.trigger(e, t, i, !0) : void 0
    }
  });
  var Q = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
    J = /<([\w:]+)/,
    ee = /<|&#?\w+;/,
    te = /<(?:script|style|link)/i,
    ie = /checked\s*(?:[^=]|=\s*.checked.)/i,
    ne = /^$|\/(?:java|ecma)script/i,
    re = /^true\/(.*)/,
    se = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
    ae = {
      option: [1, "<select multiple='multiple'>", "</select>"],
      thead: [1, "<table>", "</table>"],
      col: [2, "<table><colgroup>", "</colgroup></table>"],
      tr: [2, "<table><tbody>", "</tbody></table>"],
      td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
      _default: [0, "", ""]
    };

  function oe(e, t) {
    return p.nodeName(e, "table") && p.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
  }

  function le(e) {
    return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e
  }

  function ce(e) {
    var t = re.exec(e.type);
    return t ? e.type = t[1] : e.removeAttribute("type"), e
  }

  function ue(e, t) {
    for (var i = 0, n = e.length; n > i; i++) z.set(e[i], "globalEval", !t || z.get(t[i], "globalEval"))
  }

  function de(e, t) {
    var i, n, r, s, a, o, l, c;
    if (1 === t.nodeType) {
      if (z.hasData(e) && (s = z.access(e), a = z.set(t, s), c = s.events))
        for (r in delete a.handle, a.events = {}, c)
          for (i = 0, n = c[r].length; n > i; i++) p.event.add(t, r, c[r][i]);
      R.hasData(e) && (o = R.access(e), l = p.extend({}, o), R.set(t, l))
    }
  }

  function he(e, t) {
    var i = e.getElementsByTagName ? e.getElementsByTagName(t || "*") : e.querySelectorAll ? e.querySelectorAll(t || "*") : [];
    return void 0 === t || t && p.nodeName(e, t) ? p.merge([e], i) : i
  }

  function pe(e, t) {
    var i = t.nodeName.toLowerCase();
    "input" === i && $.test(e.type) ? t.checked = e.checked : ("input" === i || "textarea" === i) && (t.defaultValue = e.defaultValue)
  }
  ae.optgroup = ae.option, ae.tbody = ae.tfoot = ae.colgroup = ae.caption = ae.thead, ae.th = ae.td, p.extend({
    clone: function(e, t, i) {
      var n, r, s, a, o = e.cloneNode(!0),
        l = p.contains(e.ownerDocument, e);
      if (!(u.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || p.isXMLDoc(e)))
        for (a = he(o), n = 0, r = (s = he(e)).length; r > n; n++) pe(s[n], a[n]);
      if (t)
        if (i)
          for (s = s || he(e), a = a || he(o), n = 0, r = s.length; r > n; n++) de(s[n], a[n]);
        else de(e, o);
      return (a = he(o, "script")).length > 0 && ue(a, !l && he(e, "script")), o
    },
    buildFragment: function(e, t, i, n) {
      for (var r, s, a, o, l, c, u = t.createDocumentFragment(), d = [], h = 0, f = e.length; f > h; h++)
        if ((r = e[h]) || 0 === r)
          if ("object" === p.type(r)) p.merge(d, r.nodeType ? [r] : r);
          else if (ee.test(r)) {
        for (s = s || u.appendChild(t.createElement("div")), a = (J.exec(r) || ["", ""])[1].toLowerCase(), o = ae[a] || ae._default, s.innerHTML = o[1] + r.replace(Q, "<$1></$2>") + o[2], c = o[0]; c--;) s = s.lastChild;
        p.merge(d, s.childNodes), (s = u.firstChild).textContent = ""
      } else d.push(t.createTextNode(r));
      for (u.textContent = "", h = 0; r = d[h++];)
        if ((!n || -1 === p.inArray(r, n)) && (l = p.contains(r.ownerDocument, r), s = he(u.appendChild(r), "script"), l && ue(s), i))
          for (c = 0; r = s[c++];) ne.test(r.type || "") && i.push(r);
      return u
    },
    cleanData: function(e) {
      for (var t, i, n, r, s = p.event.special, a = 0; void 0 !== (i = e[a]); a++) {
        if (p.acceptData(i) && ((r = i[z.expando]) && (t = z.cache[r]))) {
          if (t.events)
            for (n in t.events) s[n] ? p.event.remove(i, n) : p.removeEvent(i, n, t.handle);
          z.cache[r] && delete z.cache[r]
        }
        delete R.cache[i[R.expando]]
      }
    }
  }), p.fn.extend({
    text: function(e) {
      return N(this, function(e) {
        return void 0 === e ? p.text(this) : this.empty().each(function() {
          (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = e)
        })
      }, null, e, arguments.length)
    },
    append: function() {
      return this.domManip(arguments, function(e) {
        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || oe(this, e).appendChild(e)
      })
    },
    prepend: function() {
      return this.domManip(arguments, function(e) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var t = oe(this, e);
          t.insertBefore(e, t.firstChild)
        }
      })
    },
    before: function() {
      return this.domManip(arguments, function(e) {
        this.parentNode && this.parentNode.insertBefore(e, this)
      })
    },
    after: function() {
      return this.domManip(arguments, function(e) {
        this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
      })
    },
    remove: function(e, t) {
      for (var i, n = e ? p.filter(e, this) : this, r = 0; null != (i = n[r]); r++) t || 1 !== i.nodeType || p.cleanData(he(i)), i.parentNode && (t && p.contains(i.ownerDocument, i) && ue(he(i, "script")), i.parentNode.removeChild(i));
      return this
    },
    empty: function() {
      for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (p.cleanData(he(e, !1)), e.textContent = "");
      return this
    },
    clone: function(e, t) {
      return e = null != e && e, t = null == t ? e : t, this.map(function() {
        return p.clone(this, e, t)
      })
    },
    html: function(e) {
      return N(this, function(e) {
        var t = this[0] || {},
          i = 0,
          n = this.length;
        if (void 0 === e && 1 === t.nodeType) return t.innerHTML;
        if ("string" == typeof e && !te.test(e) && !ae[(J.exec(e) || ["", ""])[1].toLowerCase()]) {
          e = e.replace(Q, "<$1></$2>");
          try {
            for (; n > i; i++) 1 === (t = this[i] || {}).nodeType && (p.cleanData(he(t, !1)), t.innerHTML = e);
            t = 0
          } catch (e) {}
        }
        t && this.empty().append(e)
      }, null, e, arguments.length)
    },
    replaceWith: function() {
      var e = arguments[0];
      return this.domManip(arguments, function(t) {
        e = this.parentNode, p.cleanData(he(this)), e && e.replaceChild(t, this)
      }), e && (e.length || e.nodeType) ? this : this.remove()
    },
    detach: function(e) {
      return this.remove(e, !0)
    },
    domManip: function(e, t) {
      e = r.apply([], e);
      var i, n, s, a, o, l, c = 0,
        d = this.length,
        h = this,
        f = d - 1,
        m = e[0],
        g = p.isFunction(m);
      if (g || d > 1 && "string" == typeof m && !u.checkClone && ie.test(m)) return this.each(function(i) {
        var n = h.eq(i);
        g && (e[0] = m.call(this, i, n.html())), n.domManip(e, t)
      });
      if (d && (n = (i = p.buildFragment(e, this[0].ownerDocument, !1, this)).firstChild, 1 === i.childNodes.length && (i = n), n)) {
        for (a = (s = p.map(he(i, "script"), le)).length; d > c; c++) o = i, c !== f && (o = p.clone(o, !0, !0), a && p.merge(s, he(o, "script"))), t.call(this[c], o, c);
        if (a)
          for (l = s[s.length - 1].ownerDocument, p.map(s, ce), c = 0; a > c; c++) o = s[c], ne.test(o.type || "") && !z.access(o, "globalEval") && p.contains(l, o) && (o.src ? p._evalUrl && p._evalUrl(o.src) : p.globalEval(o.textContent.replace(se, "")))
      }
      return this
    }
  }), p.each({
    appendTo: "append",
    prependTo: "prepend",
    insertBefore: "before",
    insertAfter: "after",
    replaceAll: "replaceWith"
  }, function(e, t) {
    p.fn[e] = function(e) {
      for (var i, n = [], r = p(e), a = r.length - 1, o = 0; a >= o; o++) i = o === a ? this : this.clone(!0), p(r[o])[t](i), s.apply(n, i.get());
      return this.pushStack(n)
    }
  });
  var fe, me = {};

  function ge(t, i) {
    var n, r = p(i.createElement(t)).appendTo(i.body),
      s = e.getDefaultComputedStyle && (n = e.getDefaultComputedStyle(r[0])) ? n.display : p.css(r[0], "display");
    return r.detach(), s
  }

  function ye(e) {
    var t = d,
      i = me[e];
    return i || ("none" !== (i = ge(e, t)) && i || ((t = (fe = (fe || p("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement))[0].contentDocument).write(), t.close(), i = ge(e, t), fe.detach()), me[e] = i), i
  }
  var ve = /^margin/,
    _e = new RegExp("^(" + H + ")(?!px)[a-z%]+$", "i"),
    be = function(t) {
      return t.ownerDocument.defaultView.opener ? t.ownerDocument.defaultView.getComputedStyle(t, null) : e.getComputedStyle(t, null)
    };

  function we(e, t, i) {
    var n, r, s, a, o = e.style;
    return (i = i || be(e)) && (a = i.getPropertyValue(t) || i[t]), i && ("" !== a || p.contains(e.ownerDocument, e) || (a = p.style(e, t)), _e.test(a) && ve.test(t) && (n = o.width, r = o.minWidth, s = o.maxWidth, o.minWidth = o.maxWidth = o.width = a, a = i.width, o.width = n, o.minWidth = r, o.maxWidth = s)), void 0 !== a ? a + "" : a
  }

  function Te(e, t) {
    return {
      get: function() {
        return e() ? void delete this.get : (this.get = t).apply(this, arguments)
      }
    }
  }! function() {
    var t, i, n = d.documentElement,
      r = d.createElement("div"),
      s = d.createElement("div");
    if (s.style) {
      function a() {
        s.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", s.innerHTML = "", n.appendChild(r);
        var a = e.getComputedStyle(s, null);
        t = "1%" !== a.top, i = "4px" === a.width, n.removeChild(r)
      }
      s.style.backgroundClip = "content-box", s.cloneNode(!0).style.backgroundClip = "", u.clearCloneStyle = "content-box" === s.style.backgroundClip, r.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute", r.appendChild(s), e.getComputedStyle && p.extend(u, {
        pixelPosition: function() {
          return a(), t
        },
        boxSizingReliable: function() {
          return null == i && a(), i
        },
        reliableMarginRight: function() {
          var t, i = s.appendChild(d.createElement("div"));
          return i.style.cssText = s.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", i.style.marginRight = i.style.width = "0", s.style.width = "1px", n.appendChild(r), t = !parseFloat(e.getComputedStyle(i, null).marginRight), n.removeChild(r), s.removeChild(i), t
        }
      })
    }
  }(), p.swap = function(e, t, i, n) {
    var r, s, a = {};
    for (s in t) a[s] = e.style[s], e.style[s] = t[s];
    for (s in r = i.apply(e, n || []), t) e.style[s] = a[s];
    return r
  };
  var Ae = /^(none|table(?!-c[ea]).+)/,
    ke = new RegExp("^(" + H + ")(.*)$", "i"),
    xe = new RegExp("^([+-])=(" + H + ")", "i"),
    Se = {
      position: "absolute",
      visibility: "hidden",
      display: "block"
    },
    Ce = {
      letterSpacing: "0",
      fontWeight: "400"
    },
    Ee = ["Webkit", "O", "Moz", "ms"];

  function Pe(e, t) {
    if (t in e) return t;
    for (var i = t[0].toUpperCase() + t.slice(1), n = t, r = Ee.length; r--;)
      if ((t = Ee[r] + i) in e) return t;
    return n
  }

  function Me(e, t, i) {
    var n = ke.exec(t);
    return n ? Math.max(0, n[1] - (i || 0)) + (n[2] || "px") : t
  }

  function Oe(e, t, i, n, r) {
    for (var s = i === (n ? "border" : "content") ? 4 : "width" === t ? 1 : 0, a = 0; 4 > s; s += 2) "margin" === i && (a += p.css(e, i + Y[s], !0, r)), n ? ("content" === i && (a -= p.css(e, "padding" + Y[s], !0, r)), "margin" !== i && (a -= p.css(e, "border" + Y[s] + "Width", !0, r))) : (a += p.css(e, "padding" + Y[s], !0, r), "padding" !== i && (a += p.css(e, "border" + Y[s] + "Width", !0, r)));
    return a
  }

  function De(e, t, i) {
    var n = !0,
      r = "width" === t ? e.offsetWidth : e.offsetHeight,
      s = be(e),
      a = "border-box" === p.css(e, "boxSizing", !1, s);
    if (0 >= r || null == r) {
      if ((0 > (r = we(e, t, s)) || null == r) && (r = e.style[t]), _e.test(r)) return r;
      n = a && (u.boxSizingReliable() || r === e.style[t]), r = parseFloat(r) || 0
    }
    return r + Oe(e, t, i || (a ? "border" : "content"), n, s) + "px"
  }

  function Ne(e, t) {
    for (var i, n, r, s = [], a = 0, o = e.length; o > a; a++)(n = e[a]).style && (s[a] = z.get(n, "olddisplay"), i = n.style.display, t ? (s[a] || "none" !== i || (n.style.display = ""), "" === n.style.display && q(n) && (s[a] = z.access(n, "olddisplay", ye(n.nodeName)))) : (r = q(n), "none" === i && r || z.set(n, "olddisplay", r ? i : p.css(n, "display"))));
    for (a = 0; o > a; a++)(n = e[a]).style && (t && "none" !== n.style.display && "" !== n.style.display || (n.style.display = t ? s[a] || "" : "none"));
    return e
  }

  function Le(e, t, i, n, r) {
    return new Le.prototype.init(e, t, i, n, r)
  }
  p.extend({
    cssHooks: {
      opacity: {
        get: function(e, t) {
          if (t) {
            var i = we(e, "opacity");
            return "" === i ? "1" : i
          }
        }
      }
    },
    cssNumber: {
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
    cssProps: {
      float: "cssFloat"
    },
    style: function(e, t, i, n) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var r, s, a, o = p.camelCase(t),
          l = e.style;
        return t = p.cssProps[o] || (p.cssProps[o] = Pe(l, o)), a = p.cssHooks[t] || p.cssHooks[o], void 0 === i ? a && "get" in a && void 0 !== (r = a.get(e, !1, n)) ? r : l[t] : ("string" === (s = typeof i) && (r = xe.exec(i)) && (i = (r[1] + 1) * r[2] + parseFloat(p.css(e, t)), s = "number"), void(null != i && i == i && ("number" !== s || p.cssNumber[o] || (i += "px"), u.clearCloneStyle || "" !== i || 0 !== t.indexOf("background") || (l[t] = "inherit"), a && "set" in a && void 0 === (i = a.set(e, i, n)) || (l[t] = i))))
      }
    },
    css: function(e, t, i, n) {
      var r, s, a, o = p.camelCase(t);
      return t = p.cssProps[o] || (p.cssProps[o] = Pe(e.style, o)), (a = p.cssHooks[t] || p.cssHooks[o]) && "get" in a && (r = a.get(e, !0, i)), void 0 === r && (r = we(e, t, n)), "normal" === r && t in Ce && (r = Ce[t]), "" === i || i ? (s = parseFloat(r), !0 === i || p.isNumeric(s) ? s || 0 : r) : r
    }
  }), p.each(["height", "width"], function(e, t) {
    p.cssHooks[t] = {
      get: function(e, i, n) {
        return i ? Ae.test(p.css(e, "display")) && 0 === e.offsetWidth ? p.swap(e, Se, function() {
          return De(e, t, n)
        }) : De(e, t, n) : void 0
      },
      set: function(e, i, n) {
        var r = n && be(e);
        return Me(0, i, n ? Oe(e, t, n, "border-box" === p.css(e, "boxSizing", !1, r), r) : 0)
      }
    }
  }), p.cssHooks.marginRight = Te(u.reliableMarginRight, function(e, t) {
    return t ? p.swap(e, {
      display: "inline-block"
    }, we, [e, "marginRight"]) : void 0
  }), p.each({
    margin: "",
    padding: "",
    border: "Width"
  }, function(e, t) {
    p.cssHooks[e + t] = {
      expand: function(i) {
        for (var n = 0, r = {}, s = "string" == typeof i ? i.split(" ") : [i]; 4 > n; n++) r[e + Y[n] + t] = s[n] || s[n - 2] || s[0];
        return r
      }
    }, ve.test(e) || (p.cssHooks[e + t].set = Me)
  }), p.fn.extend({
    css: function(e, t) {
      return N(this, function(e, t, i) {
        var n, r, s = {},
          a = 0;
        if (p.isArray(t)) {
          for (n = be(e), r = t.length; r > a; a++) s[t[a]] = p.css(e, t[a], !1, n);
          return s
        }
        return void 0 !== i ? p.style(e, t, i) : p.css(e, t)
      }, e, t, arguments.length > 1)
    },
    show: function() {
      return Ne(this, !0)
    },
    hide: function() {
      return Ne(this)
    },
    toggle: function(e) {
      return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
        q(this) ? p(this).show() : p(this).hide()
      })
    }
  }), p.Tween = Le, Le.prototype = {
    constructor: Le,
    init: function(e, t, i, n, r, s) {
      this.elem = e, this.prop = i, this.easing = r || "swing", this.options = t, this.start = this.now = this.cur(), this.end = n, this.unit = s || (p.cssNumber[i] ? "" : "px")
    },
    cur: function() {
      var e = Le.propHooks[this.prop];
      return e && e.get ? e.get(this) : Le.propHooks._default.get(this)
    },
    run: function(e) {
      var t, i = Le.propHooks[this.prop];
      return this.options.duration ? this.pos = t = p.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), i && i.set ? i.set(this) : Le.propHooks._default.set(this), this
    }
  }, Le.prototype.init.prototype = Le.prototype, Le.propHooks = {
    _default: {
      get: function(e) {
        var t;
        return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = p.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0 : e.elem[e.prop]
      },
      set: function(e) {
        p.fx.step[e.prop] ? p.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[p.cssProps[e.prop]] || p.cssHooks[e.prop]) ? p.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
      }
    }
  }, Le.propHooks.scrollTop = Le.propHooks.scrollLeft = {
    set: function(e) {
      e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
    }
  }, p.easing = {
    linear: function(e) {
      return e
    },
    swing: function(e) {
      return .5 - Math.cos(e * Math.PI) / 2
    }
  }, p.fx = Le.prototype.init, p.fx.step = {};
  var ze, Re, je = /^(?:toggle|show|hide)$/,
    Ie = new RegExp("^(?:([+-])=|)(" + H + ")([a-z%]*)$", "i"),
    Fe = /queueHooks$/,
    He = [function(e, t, i) {
      var n, r, s, a, o, l, c, u = this,
        d = {},
        h = e.style,
        f = e.nodeType && q(e),
        m = z.get(e, "fxshow");
      for (n in i.queue || (null == (o = p._queueHooks(e, "fx")).unqueued && (o.unqueued = 0, l = o.empty.fire, o.empty.fire = function() {
          o.unqueued || l()
        }), o.unqueued++, u.always(function() {
          u.always(function() {
            o.unqueued--, p.queue(e, "fx").length || o.empty.fire()
          })
        })), 1 === e.nodeType && ("height" in t || "width" in t) && (i.overflow = [h.overflow, h.overflowX, h.overflowY], c = p.css(e, "display"), "inline" === ("none" === c ? z.get(e, "olddisplay") || ye(e.nodeName) : c) && "none" === p.css(e, "float") && (h.display = "inline-block")), i.overflow && (h.overflow = "hidden", u.always(function() {
          h.overflow = i.overflow[0], h.overflowX = i.overflow[1], h.overflowY = i.overflow[2]
        })), t)
        if (r = t[n], je.exec(r)) {
          if (delete t[n], s = s || "toggle" === r, r === (f ? "hide" : "show")) {
            if ("show" !== r || !m || void 0 === m[n]) continue;
            f = !0
          }
          d[n] = m && m[n] || p.style(e, n)
        } else c = void 0;
      if (p.isEmptyObject(d)) "inline" === ("none" === c ? ye(e.nodeName) : c) && (h.display = c);
      else
        for (n in m ? "hidden" in m && (f = m.hidden) : m = z.access(e, "fxshow", {}), s && (m.hidden = !f), f ? p(e).show() : u.done(function() {
            p(e).hide()
          }), u.done(function() {
            var t;
            for (t in z.remove(e, "fxshow"), d) p.style(e, t, d[t])
          }), d) a = Be(f ? m[n] : 0, n, u), n in m || (m[n] = a.start, f && (a.end = a.start, a.start = "width" === n || "height" === n ? 1 : 0))
    }],
    Ye = {
      "*": [function(e, t) {
        var i = this.createTween(e, t),
          n = i.cur(),
          r = Ie.exec(t),
          s = r && r[3] || (p.cssNumber[e] ? "" : "px"),
          a = (p.cssNumber[e] || "px" !== s && +n) && Ie.exec(p.css(i.elem, e)),
          o = 1,
          l = 20;
        if (a && a[3] !== s) {
          s = s || a[3], r = r || [], a = +n || 1;
          do {
            a /= o = o || ".5", p.style(i.elem, e, a + s)
          } while (o !== (o = i.cur() / n) && 1 !== o && --l)
        }
        return r && (a = i.start = +a || +n || 0, i.unit = s, i.end = r[1] ? a + (r[1] + 1) * r[2] : +r[2]), i
      }]
    };

  function qe() {
    return setTimeout(function() {
      ze = void 0
    }), ze = p.now()
  }

  function $e(e, t) {
    var i, n = 0,
      r = {
        height: e
      };
    for (t = t ? 1 : 0; 4 > n; n += 2 - t) r["margin" + (i = Y[n])] = r["padding" + i] = e;
    return t && (r.opacity = r.width = e), r
  }

  function Be(e, t, i) {
    for (var n, r = (Ye[t] || []).concat(Ye["*"]), s = 0, a = r.length; a > s; s++)
      if (n = r[s].call(i, t, e)) return n
  }

  function We(e, t, i) {
    var n, r, s = 0,
      a = He.length,
      o = p.Deferred().always(function() {
        delete l.elem
      }),
      l = function() {
        if (r) return !1;
        for (var t = ze || qe(), i = Math.max(0, c.startTime + c.duration - t), n = 1 - (i / c.duration || 0), s = 0, a = c.tweens.length; a > s; s++) c.tweens[s].run(n);
        return o.notifyWith(e, [c, n, i]), 1 > n && a ? i : (o.resolveWith(e, [c]), !1)
      },
      c = o.promise({
        elem: e,
        props: p.extend({}, t),
        opts: p.extend(!0, {
          specialEasing: {}
        }, i),
        originalProperties: t,
        originalOptions: i,
        startTime: ze || qe(),
        duration: i.duration,
        tweens: [],
        createTween: function(t, i) {
          var n = p.Tween(e, c.opts, t, i, c.opts.specialEasing[t] || c.opts.easing);
          return c.tweens.push(n), n
        },
        stop: function(t) {
          var i = 0,
            n = t ? c.tweens.length : 0;
          if (r) return this;
          for (r = !0; n > i; i++) c.tweens[i].run(1);
          return t ? o.resolveWith(e, [c, t]) : o.rejectWith(e, [c, t]), this
        }
      }),
      u = c.props;
    for (function(e, t) {
        var i, n, r, s, a;
        for (i in e)
          if (r = t[n = p.camelCase(i)], s = e[i], p.isArray(s) && (r = s[1], s = e[i] = s[0]), i !== n && (e[n] = s, delete e[i]), (a = p.cssHooks[n]) && "expand" in a)
            for (i in s = a.expand(s), delete e[n], s) i in e || (e[i] = s[i], t[i] = r);
          else t[n] = r
      }(u, c.opts.specialEasing); a > s; s++)
      if (n = He[s].call(c, e, u, c.opts)) return n;
    return p.map(u, Be, c), p.isFunction(c.opts.start) && c.opts.start.call(e, c), p.fx.timer(p.extend(l, {
      elem: e,
      anim: c,
      queue: c.opts.queue
    })), c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
  }
  p.Animation = p.extend(We, {
      tweener: function(e, t) {
        p.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
        for (var i, n = 0, r = e.length; r > n; n++) i = e[n], Ye[i] = Ye[i] || [], Ye[i].unshift(t)
      },
      prefilter: function(e, t) {
        t ? He.unshift(e) : He.push(e)
      }
    }), p.speed = function(e, t, i) {
      var n = e && "object" == typeof e ? p.extend({}, e) : {
        complete: i || !i && t || p.isFunction(e) && e,
        duration: e,
        easing: i && t || t && !p.isFunction(t) && t
      };
      return n.duration = p.fx.off ? 0 : "number" == typeof n.duration ? n.duration : n.duration in p.fx.speeds ? p.fx.speeds[n.duration] : p.fx.speeds._default, (null == n.queue || !0 === n.queue) && (n.queue = "fx"), n.old = n.complete, n.complete = function() {
        p.isFunction(n.old) && n.old.call(this), n.queue && p.dequeue(this, n.queue)
      }, n
    }, p.fn.extend({
      fadeTo: function(e, t, i, n) {
        return this.filter(q).css("opacity", 0).show().end().animate({
          opacity: t
        }, e, i, n)
      },
      animate: function(e, t, i, n) {
        var r = p.isEmptyObject(e),
          s = p.speed(t, i, n),
          a = function() {
            var t = We(this, p.extend({}, e), s);
            (r || z.get(this, "finish")) && t.stop(!0)
          };
        return a.finish = a, r || !1 === s.queue ? this.each(a) : this.queue(s.queue, a)
      },
      stop: function(e, t, i) {
        var n = function(e) {
          var t = e.stop;
          delete e.stop, t(i)
        };
        return "string" != typeof e && (i = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), this.each(function() {
          var t = !0,
            r = null != e && e + "queueHooks",
            s = p.timers,
            a = z.get(this);
          if (r) a[r] && a[r].stop && n(a[r]);
          else
            for (r in a) a[r] && a[r].stop && Fe.test(r) && n(a[r]);
          for (r = s.length; r--;) s[r].elem !== this || null != e && s[r].queue !== e || (s[r].anim.stop(i), t = !1, s.splice(r, 1));
          (t || !i) && p.dequeue(this, e)
        })
      },
      finish: function(e) {
        return !1 !== e && (e = e || "fx"), this.each(function() {
          var t, i = z.get(this),
            n = i[e + "queue"],
            r = i[e + "queueHooks"],
            s = p.timers,
            a = n ? n.length : 0;
          for (i.finish = !0, p.queue(this, e, []), r && r.stop && r.stop.call(this, !0), t = s.length; t--;) s[t].elem === this && s[t].queue === e && (s[t].anim.stop(!0), s.splice(t, 1));
          for (t = 0; a > t; t++) n[t] && n[t].finish && n[t].finish.call(this);
          delete i.finish
        })
      }
    }), p.each(["toggle", "show", "hide"], function(e, t) {
      var i = p.fn[t];
      p.fn[t] = function(e, n, r) {
        return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate($e(t, !0), e, n, r)
      }
    }), p.each({
      slideDown: $e("show"),
      slideUp: $e("hide"),
      slideToggle: $e("toggle"),
      fadeIn: {
        opacity: "show"
      },
      fadeOut: {
        opacity: "hide"
      },
      fadeToggle: {
        opacity: "toggle"
      }
    }, function(e, t) {
      p.fn[e] = function(e, i, n) {
        return this.animate(t, e, i, n)
      }
    }), p.timers = [], p.fx.tick = function() {
      var e, t = 0,
        i = p.timers;
      for (ze = p.now(); t < i.length; t++)(e = i[t])() || i[t] !== e || i.splice(t--, 1);
      i.length || p.fx.stop(), ze = void 0
    }, p.fx.timer = function(e) {
      p.timers.push(e), e() ? p.fx.start() : p.timers.pop()
    }, p.fx.interval = 13, p.fx.start = function() {
      Re || (Re = setInterval(p.fx.tick, p.fx.interval))
    }, p.fx.stop = function() {
      clearInterval(Re), Re = null
    }, p.fx.speeds = {
      slow: 600,
      fast: 200,
      _default: 400
    }, p.fn.delay = function(e, t) {
      return e = p.fx && p.fx.speeds[e] || e, t = t || "fx", this.queue(t, function(t, i) {
        var n = setTimeout(t, e);
        i.stop = function() {
          clearTimeout(n)
        }
      })
    },
    function() {
      var e = d.createElement("input"),
        t = d.createElement("select"),
        i = t.appendChild(d.createElement("option"));
      e.type = "checkbox", u.checkOn = "" !== e.value, u.optSelected = i.selected, t.disabled = !0, u.optDisabled = !i.disabled, (e = d.createElement("input")).value = "t", e.type = "radio", u.radioValue = "t" === e.value
    }();
  var Ue, Ge = p.expr.attrHandle;
  p.fn.extend({
    attr: function(e, t) {
      return N(this, p.attr, e, t, arguments.length > 1)
    },
    removeAttr: function(e) {
      return this.each(function() {
        p.removeAttr(this, e)
      })
    }
  }), p.extend({
    attr: function(e, t, i) {
      var n, r, s = e.nodeType;
      if (e && 3 !== s && 8 !== s && 2 !== s) return typeof e.getAttribute === B ? p.prop(e, t, i) : (1 === s && p.isXMLDoc(e) || (t = t.toLowerCase(), n = p.attrHooks[t] || (p.expr.match.bool.test(t) ? Ue : void 0)), void 0 === i ? n && "get" in n && null !== (r = n.get(e, t)) ? r : null == (r = p.find.attr(e, t)) ? void 0 : r : null !== i ? n && "set" in n && void 0 !== (r = n.set(e, i, t)) ? r : (e.setAttribute(t, i + ""), i) : void p.removeAttr(e, t))
    },
    removeAttr: function(e, t) {
      var i, n, r = 0,
        s = t && t.match(M);
      if (s && 1 === e.nodeType)
        for (; i = s[r++];) n = p.propFix[i] || i, p.expr.match.bool.test(i) && (e[n] = !1), e.removeAttribute(i)
    },
    attrHooks: {
      type: {
        set: function(e, t) {
          if (!u.radioValue && "radio" === t && p.nodeName(e, "input")) {
            var i = e.value;
            return e.setAttribute("type", t), i && (e.value = i), t
          }
        }
      }
    }
  }), Ue = {
    set: function(e, t, i) {
      return !1 === t ? p.removeAttr(e, i) : e.setAttribute(i, i), i
    }
  }, p.each(p.expr.match.bool.source.match(/\w+/g), function(e, t) {
    var i = Ge[t] || p.find.attr;
    Ge[t] = function(e, t, n) {
      var r, s;
      return n || (s = Ge[t], Ge[t] = r, r = null != i(e, t, n) ? t.toLowerCase() : null, Ge[t] = s), r
    }
  });
  var Ve = /^(?:input|select|textarea|button)$/i;
  p.fn.extend({
    prop: function(e, t) {
      return N(this, p.prop, e, t, arguments.length > 1)
    },
    removeProp: function(e) {
      return this.each(function() {
        delete this[p.propFix[e] || e]
      })
    }
  }), p.extend({
    propFix: {
      for: "htmlFor",
      class: "className"
    },
    prop: function(e, t, i) {
      var n, r, s = e.nodeType;
      if (e && 3 !== s && 8 !== s && 2 !== s) return (1 !== s || !p.isXMLDoc(e)) && (t = p.propFix[t] || t, r = p.propHooks[t]), void 0 !== i ? r && "set" in r && void 0 !== (n = r.set(e, i, t)) ? n : e[t] = i : r && "get" in r && null !== (n = r.get(e, t)) ? n : e[t]
    },
    propHooks: {
      tabIndex: {
        get: function(e) {
          return e.hasAttribute("tabindex") || Ve.test(e.nodeName) || e.href ? e.tabIndex : -1
        }
      }
    }
  }), u.optSelected || (p.propHooks.selected = {
    get: function(e) {
      var t = e.parentNode;
      return t && t.parentNode && t.parentNode.selectedIndex, null
    }
  }), p.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
    p.propFix[this.toLowerCase()] = this
  });
  var Xe = /[\t\r\n\f]/g;
  p.fn.extend({
    addClass: function(e) {
      var t, i, n, r, s, a, o = "string" == typeof e && e,
        l = 0,
        c = this.length;
      if (p.isFunction(e)) return this.each(function(t) {
        p(this).addClass(e.call(this, t, this.className))
      });
      if (o)
        for (t = (e || "").match(M) || []; c > l; l++)
          if (n = 1 === (i = this[l]).nodeType && (i.className ? (" " + i.className + " ").replace(Xe, " ") : " ")) {
            for (s = 0; r = t[s++];) n.indexOf(" " + r + " ") < 0 && (n += r + " ");
            a = p.trim(n), i.className !== a && (i.className = a)
          } return this
    },
    removeClass: function(e) {
      var t, i, n, r, s, a, o = 0 === arguments.length || "string" == typeof e && e,
        l = 0,
        c = this.length;
      if (p.isFunction(e)) return this.each(function(t) {
        p(this).removeClass(e.call(this, t, this.className))
      });
      if (o)
        for (t = (e || "").match(M) || []; c > l; l++)
          if (n = 1 === (i = this[l]).nodeType && (i.className ? (" " + i.className + " ").replace(Xe, " ") : "")) {
            for (s = 0; r = t[s++];)
              for (; n.indexOf(" " + r + " ") >= 0;) n = n.replace(" " + r + " ", " ");
            a = e ? p.trim(n) : "", i.className !== a && (i.className = a)
          } return this
    },
    toggleClass: function(e, t) {
      var i = typeof e;
      return "boolean" == typeof t && "string" === i ? t ? this.addClass(e) : this.removeClass(e) : this.each(p.isFunction(e) ? function(i) {
        p(this).toggleClass(e.call(this, i, this.className, t), t)
      } : function() {
        if ("string" === i)
          for (var t, n = 0, r = p(this), s = e.match(M) || []; t = s[n++];) r.hasClass(t) ? r.removeClass(t) : r.addClass(t);
        else(i === B || "boolean" === i) && (this.className && z.set(this, "__className__", this.className), this.className = this.className || !1 === e ? "" : z.get(this, "__className__") || "")
      })
    },
    hasClass: function(e) {
      for (var t = " " + e + " ", i = 0, n = this.length; n > i; i++)
        if (1 === this[i].nodeType && (" " + this[i].className + " ").replace(Xe, " ").indexOf(t) >= 0) return !0;
      return !1
    }
  });
  var Ke = /\r/g;
  p.fn.extend({
    val: function(e) {
      var t, i, n, r = this[0];
      return arguments.length ? (n = p.isFunction(e), this.each(function(i) {
        var r;
        1 === this.nodeType && (null == (r = n ? e.call(this, i, p(this).val()) : e) ? r = "" : "number" == typeof r ? r += "" : p.isArray(r) && (r = p.map(r, function(e) {
          return null == e ? "" : e + ""
        })), (t = p.valHooks[this.type] || p.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, r, "value") || (this.value = r))
      })) : r ? (t = p.valHooks[r.type] || p.valHooks[r.nodeName.toLowerCase()]) && "get" in t && void 0 !== (i = t.get(r, "value")) ? i : "string" == typeof(i = r.value) ? i.replace(Ke, "") : null == i ? "" : i : void 0
    }
  }), p.extend({
    valHooks: {
      option: {
        get: function(e) {
          var t = p.find.attr(e, "value");
          return null != t ? t : p.trim(p.text(e))
        }
      },
      select: {
        get: function(e) {
          for (var t, i, n = e.options, r = e.selectedIndex, s = "select-one" === e.type || 0 > r, a = s ? null : [], o = s ? r + 1 : n.length, l = 0 > r ? o : s ? r : 0; o > l; l++)
            if (!(!(i = n[l]).selected && l !== r || (u.optDisabled ? i.disabled : null !== i.getAttribute("disabled")) || i.parentNode.disabled && p.nodeName(i.parentNode, "optgroup"))) {
              if (t = p(i).val(), s) return t;
              a.push(t)
            } return a
        },
        set: function(e, t) {
          for (var i, n, r = e.options, s = p.makeArray(t), a = r.length; a--;)((n = r[a]).selected = p.inArray(n.value, s) >= 0) && (i = !0);
          return i || (e.selectedIndex = -1), s
        }
      }
    }
  }), p.each(["radio", "checkbox"], function() {
    p.valHooks[this] = {
      set: function(e, t) {
        return p.isArray(t) ? e.checked = p.inArray(p(e).val(), t) >= 0 : void 0
      }
    }, u.checkOn || (p.valHooks[this].get = function(e) {
      return null === e.getAttribute("value") ? "on" : e.value
    })
  }), p.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
    p.fn[t] = function(e, i) {
      return arguments.length > 0 ? this.on(t, null, e, i) : this.trigger(t)
    }
  }), p.fn.extend({
    hover: function(e, t) {
      return this.mouseenter(e).mouseleave(t || e)
    },
    bind: function(e, t, i) {
      return this.on(e, null, t, i)
    },
    unbind: function(e, t) {
      return this.off(e, null, t)
    },
    delegate: function(e, t, i, n) {
      return this.on(t, e, i, n)
    },
    undelegate: function(e, t, i) {
      return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", i)
    }
  });
  var Ze = p.now(),
    Qe = /\?/;
  p.parseJSON = function(e) {
    return JSON.parse(e + "")
  }, p.parseXML = function(e) {
    var t;
    if (!e || "string" != typeof e) return null;
    try {
      t = (new DOMParser).parseFromString(e, "text/xml")
    } catch (e) {
      t = void 0
    }
    return (!t || t.getElementsByTagName("parsererror").length) && p.error("Invalid XML: " + e), t
  };
  var Je = /#.*$/,
    et = /([?&])_=[^&]*/,
    tt = /^(.*?):[ \t]*([^\r\n]*)$/gm,
    it = /^(?:GET|HEAD)$/,
    nt = /^\/\//,
    rt = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
    st = {},
    at = {},
    ot = "*/".concat("*"),
    lt = e.location.href,
    ct = rt.exec(lt.toLowerCase()) || [];

  function ut(e) {
    return function(t, i) {
      "string" != typeof t && (i = t, t = "*");
      var n, r = 0,
        s = t.toLowerCase().match(M) || [];
      if (p.isFunction(i))
        for (; n = s[r++];) "+" === n[0] ? (n = n.slice(1) || "*", (e[n] = e[n] || []).unshift(i)) : (e[n] = e[n] || []).push(i)
    }
  }

  function dt(e, t, i, n) {
    var r = {},
      s = e === at;

    function a(o) {
      var l;
      return r[o] = !0, p.each(e[o] || [], function(e, o) {
        var c = o(t, i, n);
        return "string" != typeof c || s || r[c] ? s ? !(l = c) : void 0 : (t.dataTypes.unshift(c), a(c), !1)
      }), l
    }
    return a(t.dataTypes[0]) || !r["*"] && a("*")
  }

  function ht(e, t) {
    var i, n, r = p.ajaxSettings.flatOptions || {};
    for (i in t) void 0 !== t[i] && ((r[i] ? e : n || (n = {}))[i] = t[i]);
    return n && p.extend(!0, e, n), e
  }
  p.extend({
    active: 0,
    lastModified: {},
    etag: {},
    ajaxSettings: {
      url: lt,
      type: "GET",
      isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(ct[1]),
      global: !0,
      processData: !0,
      async: !0,
      contentType: "application/x-www-form-urlencoded; charset=UTF-8",
      accepts: {
        "*": ot,
        text: "text/plain",
        html: "text/html",
        xml: "application/xml, text/xml",
        json: "application/json, text/javascript"
      },
      contents: {
        xml: /xml/,
        html: /html/,
        json: /json/
      },
      responseFields: {
        xml: "responseXML",
        text: "responseText",
        json: "responseJSON"
      },
      converters: {
        "* text": String,
        "text html": !0,
        "text json": p.parseJSON,
        "text xml": p.parseXML
      },
      flatOptions: {
        url: !0,
        context: !0
      }
    },
    ajaxSetup: function(e, t) {
      return t ? ht(ht(e, p.ajaxSettings), t) : ht(p.ajaxSettings, e)
    },
    ajaxPrefilter: ut(st),
    ajaxTransport: ut(at),
    ajax: function(e, t) {
      "object" == typeof e && (t = e, e = void 0), t = t || {};
      var i, n, r, s, a, o, l, c, u = p.ajaxSetup({}, t),
        d = u.context || u,
        h = u.context && (d.nodeType || d.jquery) ? p(d) : p.event,
        f = p.Deferred(),
        m = p.Callbacks("once memory"),
        g = u.statusCode || {},
        y = {},
        v = {},
        _ = 0,
        b = "canceled",
        w = {
          readyState: 0,
          getResponseHeader: function(e) {
            var t;
            if (2 === _) {
              if (!s)
                for (s = {}; t = tt.exec(r);) s[t[1].toLowerCase()] = t[2];
              t = s[e.toLowerCase()]
            }
            return null == t ? null : t
          },
          getAllResponseHeaders: function() {
            return 2 === _ ? r : null
          },
          setRequestHeader: function(e, t) {
            var i = e.toLowerCase();
            return _ || (e = v[i] = v[i] || e, y[e] = t), this
          },
          overrideMimeType: function(e) {
            return _ || (u.mimeType = e), this
          },
          statusCode: function(e) {
            var t;
            if (e)
              if (2 > _)
                for (t in e) g[t] = [g[t], e[t]];
              else w.always(e[w.status]);
            return this
          },
          abort: function(e) {
            var t = e || b;
            return i && i.abort(t), T(0, t), this
          }
        };
      if (f.promise(w).complete = m.add, w.success = w.done, w.error = w.fail, u.url = ((e || u.url || lt) + "").replace(Je, "").replace(nt, ct[1] + "//"), u.type = t.method || t.type || u.method || u.type, u.dataTypes = p.trim(u.dataType || "*").toLowerCase().match(M) || [""], null == u.crossDomain && (o = rt.exec(u.url.toLowerCase()), u.crossDomain = !(!o || o[1] === ct[1] && o[2] === ct[2] && (o[3] || ("http:" === o[1] ? "80" : "443")) === (ct[3] || ("http:" === ct[1] ? "80" : "443")))), u.data && u.processData && "string" != typeof u.data && (u.data = p.param(u.data, u.traditional)), dt(st, u, t, w), 2 === _) return w;
      for (c in (l = p.event && u.global) && 0 == p.active++ && p.event.trigger("ajaxStart"), u.type = u.type.toUpperCase(), u.hasContent = !it.test(u.type), n = u.url, u.hasContent || (u.data && (n = u.url += (Qe.test(n) ? "&" : "?") + u.data, delete u.data), !1 === u.cache && (u.url = et.test(n) ? n.replace(et, "$1_=" + Ze++) : n + (Qe.test(n) ? "&" : "?") + "_=" + Ze++)), u.ifModified && (p.lastModified[n] && w.setRequestHeader("If-Modified-Since", p.lastModified[n]), p.etag[n] && w.setRequestHeader("If-None-Match", p.etag[n])), (u.data && u.hasContent && !1 !== u.contentType || t.contentType) && w.setRequestHeader("Content-Type", u.contentType), w.setRequestHeader("Accept", u.dataTypes[0] && u.accepts[u.dataTypes[0]] ? u.accepts[u.dataTypes[0]] + ("*" !== u.dataTypes[0] ? ", " + ot + "; q=0.01" : "") : u.accepts["*"]), u.headers) w.setRequestHeader(c, u.headers[c]);
      if (u.beforeSend && (!1 === u.beforeSend.call(d, w, u) || 2 === _)) return w.abort();
      for (c in b = "abort", {
          success: 1,
          error: 1,
          complete: 1
        }) w[c](u[c]);
      if (i = dt(at, u, t, w)) {
        w.readyState = 1, l && h.trigger("ajaxSend", [w, u]), u.async && u.timeout > 0 && (a = setTimeout(function() {
          w.abort("timeout")
        }, u.timeout));
        try {
          _ = 1, i.send(y, T)
        } catch (e) {
          if (!(2 > _)) throw e;
          T(-1, e)
        }
      } else T(-1, "No Transport");

      function T(e, t, s, o) {
        var c, y, v, b, T, A = t;
        2 !== _ && (_ = 2, a && clearTimeout(a), i = void 0, r = o || "", w.readyState = e > 0 ? 4 : 0, c = e >= 200 && 300 > e || 304 === e, s && (b = function(e, t, i) {
          for (var n, r, s, a, o = e.contents, l = e.dataTypes;
            "*" === l[0];) l.shift(), void 0 === n && (n = e.mimeType || t.getResponseHeader("Content-Type"));
          if (n)
            for (r in o)
              if (o[r] && o[r].test(n)) {
                l.unshift(r);
                break
              } if (l[0] in i) s = l[0];
          else {
            for (r in i) {
              if (!l[0] || e.converters[r + " " + l[0]]) {
                s = r;
                break
              }
              a || (a = r)
            }
            s = s || a
          }
          return s ? (s !== l[0] && l.unshift(s), i[s]) : void 0
        }(u, w, s)), b = function(e, t, i, n) {
          var r, s, a, o, l, c = {},
            u = e.dataTypes.slice();
          if (u[1])
            for (a in e.converters) c[a.toLowerCase()] = e.converters[a];
          for (s = u.shift(); s;)
            if (e.responseFields[s] && (i[e.responseFields[s]] = t), !l && n && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = s, s = u.shift())
              if ("*" === s) s = l;
              else if ("*" !== l && l !== s) {
            if (!(a = c[l + " " + s] || c["* " + s]))
              for (r in c)
                if ((o = r.split(" "))[1] === s && (a = c[l + " " + o[0]] || c["* " + o[0]])) {
                  !0 === a ? a = c[r] : !0 !== c[r] && (s = o[0], u.unshift(o[1]));
                  break
                } if (!0 !== a)
              if (a && e.throws) t = a(t);
              else try {
                t = a(t)
              } catch (e) {
                return {
                  state: "parsererror",
                  error: a ? e : "No conversion from " + l + " to " + s
                }
              }
          }
          return {
            state: "success",
            data: t
          }
        }(u, b, w, c), c ? (u.ifModified && ((T = w.getResponseHeader("Last-Modified")) && (p.lastModified[n] = T), (T = w.getResponseHeader("etag")) && (p.etag[n] = T)), 204 === e || "HEAD" === u.type ? A = "nocontent" : 304 === e ? A = "notmodified" : (A = b.state, y = b.data, c = !(v = b.error))) : (v = A, (e || !A) && (A = "error", 0 > e && (e = 0))), w.status = e, w.statusText = (t || A) + "", c ? f.resolveWith(d, [y, A, w]) : f.rejectWith(d, [w, A, v]), w.statusCode(g), g = void 0, l && h.trigger(c ? "ajaxSuccess" : "ajaxError", [w, u, c ? y : v]), m.fireWith(d, [w, A]), l && (h.trigger("ajaxComplete", [w, u]), --p.active || p.event.trigger("ajaxStop")))
      }
      return w
    },
    getJSON: function(e, t, i) {
      return p.get(e, t, i, "json")
    },
    getScript: function(e, t) {
      return p.get(e, void 0, t, "script")
    }
  }), p.each(["get", "post"], function(e, t) {
    p[t] = function(e, i, n, r) {
      return p.isFunction(i) && (r = r || n, n = i, i = void 0), p.ajax({
        url: e,
        type: t,
        dataType: r,
        data: i,
        success: n
      })
    }
  }), p._evalUrl = function(e) {
    return p.ajax({
      url: e,
      type: "GET",
      dataType: "script",
      async: !1,
      global: !1,
      throws: !0
    })
  }, p.fn.extend({
    wrapAll: function(e) {
      var t;
      return p.isFunction(e) ? this.each(function(t) {
        p(this).wrapAll(e.call(this, t))
      }) : (this[0] && (t = p(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
        for (var e = this; e.firstElementChild;) e = e.firstElementChild;
        return e
      }).append(this)), this)
    },
    wrapInner: function(e) {
      return this.each(p.isFunction(e) ? function(t) {
        p(this).wrapInner(e.call(this, t))
      } : function() {
        var t = p(this),
          i = t.contents();
        i.length ? i.wrapAll(e) : t.append(e)
      })
    },
    wrap: function(e) {
      var t = p.isFunction(e);
      return this.each(function(i) {
        p(this).wrapAll(t ? e.call(this, i) : e)
      })
    },
    unwrap: function() {
      return this.parent().each(function() {
        p.nodeName(this, "body") || p(this).replaceWith(this.childNodes)
      }).end()
    }
  }), p.expr.filters.hidden = function(e) {
    return e.offsetWidth <= 0 && e.offsetHeight <= 0
  }, p.expr.filters.visible = function(e) {
    return !p.expr.filters.hidden(e)
  };
  var pt = /%20/g,
    ft = /\[\]$/,
    mt = /\r?\n/g,
    gt = /^(?:submit|button|image|reset|file)$/i,
    yt = /^(?:input|select|textarea|keygen)/i;

  function vt(e, t, i, n) {
    var r;
    if (p.isArray(t)) p.each(t, function(t, r) {
      i || ft.test(e) ? n(e, r) : vt(e + "[" + ("object" == typeof r ? t : "") + "]", r, i, n)
    });
    else if (i || "object" !== p.type(t)) n(e, t);
    else
      for (r in t) vt(e + "[" + r + "]", t[r], i, n)
  }
  p.param = function(e, t) {
    var i, n = [],
      r = function(e, t) {
        t = p.isFunction(t) ? t() : null == t ? "" : t, n[n.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
      };
    if (void 0 === t && (t = p.ajaxSettings && p.ajaxSettings.traditional), p.isArray(e) || e.jquery && !p.isPlainObject(e)) p.each(e, function() {
      r(this.name, this.value)
    });
    else
      for (i in e) vt(i, e[i], t, r);
    return n.join("&").replace(pt, "+")
  }, p.fn.extend({
    serialize: function() {
      return p.param(this.serializeArray())
    },
    serializeArray: function() {
      return this.map(function() {
        var e = p.prop(this, "elements");
        return e ? p.makeArray(e) : this
      }).filter(function() {
        var e = this.type;
        return this.name && !p(this).is(":disabled") && yt.test(this.nodeName) && !gt.test(e) && (this.checked || !$.test(e))
      }).map(function(e, t) {
        var i = p(this).val();
        return null == i ? null : p.isArray(i) ? p.map(i, function(e) {
          return {
            name: t.name,
            value: e.replace(mt, "\r\n")
          }
        }) : {
          name: t.name,
          value: i.replace(mt, "\r\n")
        }
      }).get()
    }
  }), p.ajaxSettings.xhr = function() {
    try {
      return new XMLHttpRequest
    } catch (e) {}
  };
  var _t = 0,
    bt = {},
    wt = {
      0: 200,
      1223: 204
    },
    Tt = p.ajaxSettings.xhr();
  e.attachEvent && e.attachEvent("onunload", function() {
    for (var e in bt) bt[e]()
  }), u.cors = !!Tt && "withCredentials" in Tt, u.ajax = Tt = !!Tt, p.ajaxTransport(function(e) {
    var t;
    return u.cors || Tt && !e.crossDomain ? {
      send: function(i, n) {
        var r, s = e.xhr(),
          a = ++_t;
        if (s.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
          for (r in e.xhrFields) s[r] = e.xhrFields[r];
        for (r in e.mimeType && s.overrideMimeType && s.overrideMimeType(e.mimeType), e.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest"), i) s.setRequestHeader(r, i[r]);
        t = function(e) {
          return function() {
            t && (delete bt[a], t = s.onload = s.onerror = null, "abort" === e ? s.abort() : "error" === e ? n(s.status, s.statusText) : n(wt[s.status] || s.status, s.statusText, "string" == typeof s.responseText ? {
              text: s.responseText
            } : void 0, s.getAllResponseHeaders()))
          }
        }, s.onload = t(), s.onerror = t("error"), t = bt[a] = t("abort");
        try {
          s.send(e.hasContent && e.data || null)
        } catch (e) {
          if (t) throw e
        }
      },
      abort: function() {
        t && t()
      }
    } : void 0
  }), p.ajaxSetup({
    accepts: {
      script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
    },
    contents: {
      script: /(?:java|ecma)script/
    },
    converters: {
      "text script": function(e) {
        return p.globalEval(e), e
      }
    }
  }), p.ajaxPrefilter("script", function(e) {
    void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET")
  }), p.ajaxTransport("script", function(e) {
    var t, i;
    if (e.crossDomain) return {
      send: function(n, r) {
        t = p("<script>").prop({
          async: !0,
          charset: e.scriptCharset,
          src: e.url
        }).on("load error", i = function(e) {
          t.remove(), i = null, e && r("error" === e.type ? 404 : 200, e.type)
        }), d.head.appendChild(t[0])
      },
      abort: function() {
        i && i()
      }
    }
  });
  var At = [],
    kt = /(=)\?(?=&|$)|\?\?/;
  p.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function() {
      var e = At.pop() || p.expando + "_" + Ze++;
      return this[e] = !0, e
    }
  }), p.ajaxPrefilter("json jsonp", function(t, i, n) {
    var r, s, a, o = !1 !== t.jsonp && (kt.test(t.url) ? "url" : "string" == typeof t.data && !(t.contentType || "").indexOf("application/x-www-form-urlencoded") && kt.test(t.data) && "data");
    return o || "jsonp" === t.dataTypes[0] ? (r = t.jsonpCallback = p.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, o ? t[o] = t[o].replace(kt, "$1" + r) : !1 !== t.jsonp && (t.url += (Qe.test(t.url) ? "&" : "?") + t.jsonp + "=" + r), t.converters["script json"] = function() {
      return a || p.error(r + " was not called"), a[0]
    }, t.dataTypes[0] = "json", s = e[r], e[r] = function() {
      a = arguments
    }, n.always(function() {
      e[r] = s, t[r] && (t.jsonpCallback = i.jsonpCallback, At.push(r)), a && p.isFunction(s) && s(a[0]), a = s = void 0
    }), "script") : void 0
  }), p.parseHTML = function(e, t, i) {
    if (!e || "string" != typeof e) return null;
    "boolean" == typeof t && (i = t, t = !1), t = t || d;
    var n = w.exec(e),
      r = !i && [];
    return n ? [t.createElement(n[1])] : (n = p.buildFragment([e], t, r), r && r.length && p(r).remove(), p.merge([], n.childNodes))
  };
  var xt = p.fn.load;
  p.fn.load = function(e, t, i) {
    if ("string" != typeof e && xt) return xt.apply(this, arguments);
    var n, r, s, a = this,
      o = e.indexOf(" ");
    return o >= 0 && (n = p.trim(e.slice(o)), e = e.slice(0, o)), p.isFunction(t) ? (i = t, t = void 0) : t && "object" == typeof t && (r = "POST"), a.length > 0 && p.ajax({
      url: e,
      type: r,
      dataType: "html",
      data: t
    }).done(function(e) {
      s = arguments, a.html(n ? p("<div>").append(p.parseHTML(e)).find(n) : e)
    }).complete(i && function(e, t) {
      a.each(i, s || [e.responseText, t, e])
    }), this
  }, p.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
    p.fn[t] = function(e) {
      return this.on(t, e)
    }
  }), p.expr.filters.animated = function(e) {
    return p.grep(p.timers, function(t) {
      return e === t.elem
    }).length
  };
  var St = e.document.documentElement;

  function Ct(e) {
    return p.isWindow(e) ? e : 9 === e.nodeType && e.defaultView
  }
  p.offset = {
    setOffset: function(e, t, i) {
      var n, r, s, a, o, l, c = p.css(e, "position"),
        u = p(e),
        d = {};
      "static" === c && (e.style.position = "relative"), o = u.offset(), s = p.css(e, "top"), l = p.css(e, "left"), ("absolute" === c || "fixed" === c) && (s + l).indexOf("auto") > -1 ? (a = (n = u.position()).top, r = n.left) : (a = parseFloat(s) || 0, r = parseFloat(l) || 0), p.isFunction(t) && (t = t.call(e, i, o)), null != t.top && (d.top = t.top - o.top + a), null != t.left && (d.left = t.left - o.left + r), "using" in t ? t.using.call(e, d) : u.css(d)
    }
  }, p.fn.extend({
    offset: function(e) {
      if (arguments.length) return void 0 === e ? this : this.each(function(t) {
        p.offset.setOffset(this, e, t)
      });
      var t, i, n = this[0],
        r = {
          top: 0,
          left: 0
        },
        s = n && n.ownerDocument;
      return s ? (t = s.documentElement, p.contains(t, n) ? (typeof n.getBoundingClientRect !== B && (r = n.getBoundingClientRect()), i = Ct(s), {
        top: r.top + i.pageYOffset - t.clientTop,
        left: r.left + i.pageXOffset - t.clientLeft
      }) : r) : void 0
    },
    position: function() {
      if (this[0]) {
        var e, t, i = this[0],
          n = {
            top: 0,
            left: 0
          };
        return "fixed" === p.css(i, "position") ? t = i.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), p.nodeName(e[0], "html") || (n = e.offset()), n.top += p.css(e[0], "borderTopWidth", !0), n.left += p.css(e[0], "borderLeftWidth", !0)), {
          top: t.top - n.top - p.css(i, "marginTop", !0),
          left: t.left - n.left - p.css(i, "marginLeft", !0)
        }
      }
    },
    offsetParent: function() {
      return this.map(function() {
        for (var e = this.offsetParent || St; e && !p.nodeName(e, "html") && "static" === p.css(e, "position");) e = e.offsetParent;
        return e || St
      })
    }
  }), p.each({
    scrollLeft: "pageXOffset",
    scrollTop: "pageYOffset"
  }, function(t, i) {
    var n = "pageYOffset" === i;
    p.fn[t] = function(r) {
      return N(this, function(t, r, s) {
        var a = Ct(t);
        return void 0 === s ? a ? a[i] : t[r] : void(a ? a.scrollTo(n ? e.pageXOffset : s, n ? s : e.pageYOffset) : t[r] = s)
      }, t, r, arguments.length, null)
    }
  }), p.each(["top", "left"], function(e, t) {
    p.cssHooks[t] = Te(u.pixelPosition, function(e, i) {
      return i ? (i = we(e, t), _e.test(i) ? p(e).position()[t] + "px" : i) : void 0
    })
  }), p.each({
    Height: "height",
    Width: "width"
  }, function(e, t) {
    p.each({
      padding: "inner" + e,
      content: t,
      "": "outer" + e
    }, function(i, n) {
      p.fn[n] = function(n, r) {
        var s = arguments.length && (i || "boolean" != typeof n),
          a = i || (!0 === n || !0 === r ? "margin" : "border");
        return N(this, function(t, i, n) {
          var r;
          return p.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (r = t.documentElement, Math.max(t.body["scroll" + e], r["scroll" + e], t.body["offset" + e], r["offset" + e], r["client" + e])) : void 0 === n ? p.css(t, i, a) : p.style(t, i, n, a)
        }, t, s ? n : void 0, s, null)
      }
    })
  }), p.fn.size = function() {
    return this.length
  }, p.fn.andSelf = p.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() {
    return p
  });
  var Et = e.jQuery,
    Pt = e.$;
  return p.noConflict = function(t) {
    return e.$ === p && (e.$ = Pt), t && e.jQuery === p && (e.jQuery = Et), p
  }, typeof t === B && (e.jQuery = e.$ = p), p
}),
function(e, t) {
  "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define("Barba", [], t) : "object" == typeof exports ? exports.Barba = t() : e.Barba = t()
}(this, function() {
  return function(e) {
    function t(n) {
      if (i[n]) return i[n].exports;
      var r = i[n] = {
        exports: {},
        id: n,
        loaded: !1
      };
      return e[n].call(r.exports, r, r.exports, t), r.loaded = !0, r.exports
    }
    var i = {};
    return t.m = e, t.c = i, t.p = "http://localhost:8080/dist", t(0)
  }([function(e, t, i) {
    "function" != typeof Promise && (window.Promise = i(1));
    var n = {
      version: "1.0.0",
      BaseTransition: i(4),
      BaseView: i(6),
      BaseCache: i(8),
      Dispatcher: i(7),
      HistoryManager: i(9),
      Pjax: i(10),
      Prefetch: i(13),
      Utils: i(5)
    };
    e.exports = n
  }, function(e, t, i) {
    (function(t) {
      ! function(i) {
        function n() {}

        function r(e) {
          if ("object" != typeof this) throw new TypeError("Promises must be constructed via new");
          if ("function" != typeof e) throw new TypeError("not a function");
          this._state = 0, this._handled = !1, this._value = void 0, this._deferreds = [], u(e, this)
        }

        function s(e, t) {
          for (; 3 === e._state;) e = e._value;
          return 0 === e._state ? void e._deferreds.push(t) : (e._handled = !0, void h(function() {
            var i = 1 === e._state ? t.onFulfilled : t.onRejected;
            if (null !== i) {
              var n;
              try {
                n = i(e._value)
              } catch (e) {
                return void o(t.promise, e)
              }
              a(t.promise, n)
            } else(1 === e._state ? a : o)(t.promise, e._value)
          }))
        }

        function a(e, t) {
          try {
            if (t === e) throw new TypeError("A promise cannot be resolved with itself.");
            if (t && ("object" == typeof t || "function" == typeof t)) {
              var i = t.then;
              if (t instanceof r) return e._state = 3, e._value = t, void l(e);
              if ("function" == typeof i) return void u(function(e, t) {
                return function() {
                  e.apply(t, arguments)
                }
              }(i, t), e)
            }
            e._state = 1, e._value = t, l(e)
          } catch (t) {
            o(e, t)
          }
        }

        function o(e, t) {
          e._state = 2, e._value = t, l(e)
        }

        function l(e) {
          2 === e._state && 0 === e._deferreds.length && h(function() {
            e._handled || p(e._value)
          });
          for (var t = 0, i = e._deferreds.length; t < i; t++) s(e, e._deferreds[t]);
          e._deferreds = null
        }

        function c(e, t, i) {
          this.onFulfilled = "function" == typeof e ? e : null, this.onRejected = "function" == typeof t ? t : null, this.promise = i
        }

        function u(e, t) {
          var i = !1;
          try {
            e(function(e) {
              i || (i = !0, a(t, e))
            }, function(e) {
              i || (i = !0, o(t, e))
            })
          } catch (e) {
            if (i) return;
            i = !0, o(t, e)
          }
        }
        var d = setTimeout,
          h = "function" == typeof t && t || function(e) {
            d(e, 0)
          },
          p = function(e) {
            "undefined" != typeof console && console && console.warn("Possible Unhandled Promise Rejection:", e)
          };
        r.prototype.catch = function(e) {
          return this.then(null, e)
        }, r.prototype.then = function(e, t) {
          var i = new this.constructor(n);
          return s(this, new c(e, t, i)), i
        }, r.all = function(e) {
          var t = Array.prototype.slice.call(e);
          return new r(function(e, i) {
            function n(s, a) {
              try {
                if (a && ("object" == typeof a || "function" == typeof a)) {
                  var o = a.then;
                  if ("function" == typeof o) return void o.call(a, function(e) {
                    n(s, e)
                  }, i)
                }
                t[s] = a, 0 == --r && e(t)
              } catch (e) {
                i(e)
              }
            }
            if (0 === t.length) return e([]);
            for (var r = t.length, s = 0; s < t.length; s++) n(s, t[s])
          })
        }, r.resolve = function(e) {
          return e && "object" == typeof e && e.constructor === r ? e : new r(function(t) {
            t(e)
          })
        }, r.reject = function(e) {
          return new r(function(t, i) {
            i(e)
          })
        }, r.race = function(e) {
          return new r(function(t, i) {
            for (var n = 0, r = e.length; n < r; n++) e[n].then(t, i)
          })
        }, r._setImmediateFn = function(e) {
          h = e
        }, r._setUnhandledRejectionFn = function(e) {
          p = e
        }, void 0 !== e && e.exports ? e.exports = r : i.Promise || (i.Promise = r)
      }(this)
    }).call(t, i(2).setImmediate)
  }, function(e, t, i) {
    (function(e, n) {
      function r(e, t) {
        this._id = e, this._clearFn = t
      }
      var s = i(3).nextTick,
        a = Function.prototype.apply,
        o = Array.prototype.slice,
        l = {},
        c = 0;
      t.setTimeout = function() {
        return new r(a.call(setTimeout, window, arguments), clearTimeout)
      }, t.setInterval = function() {
        return new r(a.call(setInterval, window, arguments), clearInterval)
      }, t.clearTimeout = t.clearInterval = function(e) {
        e.close()
      }, r.prototype.unref = r.prototype.ref = function() {}, r.prototype.close = function() {
        this._clearFn.call(window, this._id)
      }, t.enroll = function(e, t) {
        clearTimeout(e._idleTimeoutId), e._idleTimeout = t
      }, t.unenroll = function(e) {
        clearTimeout(e._idleTimeoutId), e._idleTimeout = -1
      }, t._unrefActive = t.active = function(e) {
        clearTimeout(e._idleTimeoutId);
        var t = e._idleTimeout;
        t >= 0 && (e._idleTimeoutId = setTimeout(function() {
          e._onTimeout && e._onTimeout()
        }, t))
      }, t.setImmediate = "function" == typeof e ? e : function(e) {
        var i = c++,
          n = !(arguments.length < 2) && o.call(arguments, 1);
        return l[i] = !0, s(function() {
          l[i] && (n ? e.apply(null, n) : e.call(null), t.clearImmediate(i))
        }), i
      }, t.clearImmediate = "function" == typeof n ? n : function(e) {
        delete l[e]
      }
    }).call(t, i(2).setImmediate, i(2).clearImmediate)
  }, function(e, t) {
    function i() {
      d && c && (d = !1, c.length ? u = c.concat(u) : h = -1, u.length && n())
    }

    function n() {
      if (!d) {
        var e = a(i);
        d = !0;
        for (var t = u.length; t;) {
          for (c = u, u = []; ++h < t;) c && c[h].run();
          h = -1, t = u.length
        }
        c = null, d = !1, o(e)
      }
    }

    function r(e, t) {
      this.fun = e, this.array = t
    }

    function s() {}
    var a, o, l = e.exports = {};
    ! function() {
      try {
        a = setTimeout
      } catch (e) {
        a = function() {
          throw new Error("setTimeout is not defined")
        }
      }
      try {
        o = clearTimeout
      } catch (e) {
        o = function() {
          throw new Error("clearTimeout is not defined")
        }
      }
    }();
    var c, u = [],
      d = !1,
      h = -1;
    l.nextTick = function(e) {
      var t = new Array(arguments.length - 1);
      if (arguments.length > 1)
        for (var i = 1; i < arguments.length; i++) t[i - 1] = arguments[i];
      u.push(new r(e, t)), 1 !== u.length || d || a(n, 0)
    }, r.prototype.run = function() {
      this.fun.apply(null, this.array)
    }, l.title = "browser", l.browser = !0, l.env = {}, l.argv = [], l.version = "", l.versions = {}, l.on = s, l.addListener = s, l.once = s, l.off = s, l.removeListener = s, l.removeAllListeners = s, l.emit = s, l.binding = function(e) {
      throw new Error("process.binding is not supported")
    }, l.cwd = function() {
      return "/"
    }, l.chdir = function(e) {
      throw new Error("process.chdir is not supported")
    }, l.umask = function() {
      return 0
    }
  }, function(e, t, i) {
    var n = i(5),
      r = {
        oldContainer: void 0,
        newContainer: void 0,
        newContainerLoading: void 0,
        extend: function(e) {
          return n.extend(this, e)
        },
        init: function(e, t) {
          var i = this;
          return this.oldContainer = e, this._newContainerPromise = t, this.deferred = n.deferred(), this.newContainerReady = n.deferred(), this.newContainerLoading = this.newContainerReady.promise, this.start(), this._newContainerPromise.then(function(e) {
            i.newContainer = e, i.newContainerReady.resolve()
          }), this.deferred.promise
        },
        done: function() {
          this.oldContainer.parentNode.removeChild(this.oldContainer), this.newContainer.style.visibility = "visible", this.deferred.resolve()
        },
        start: function() {}
      };
    e.exports = r
  }, function(e, t) {
    var i = {
      getCurrentUrl: function() {
        return window.location.protocol + "//" + window.location.host + window.location.pathname + window.location.search
      },
      cleanLink: function(e) {
        return e.replace(/#.*/, "")
      },
      xhrTimeout: 5e3,
      xhr: function(e) {
        var t = this.deferred(),
          i = new XMLHttpRequest;
        return i.onreadystatechange = function() {
          if (4 === i.readyState) return 200 === i.status ? t.resolve(i.responseText) : t.reject(new Error("xhr: HTTP code is not 200"))
        }, i.ontimeout = function() {
          return t.reject(new Error("xhr: Timeout exceeded"))
        }, i.open("GET", e), i.timeout = this.xhrTimeout, i.setRequestHeader("x-barba", "yes"), i.send(), t.promise
      },
      extend: function(e, t) {
        var i = Object.create(e);
        for (var n in t) t.hasOwnProperty(n) && (i[n] = t[n]);
        return i
      },
      deferred: function() {
        return new function() {
          this.resolve = null, this.reject = null, this.promise = new Promise(function(e, t) {
            this.resolve = e, this.reject = t
          }.bind(this))
        }
      },
      getPort: function(e) {
        var t = void 0 !== e ? e : window.location.port,
          i = window.location.protocol;
        return "" != t ? parseInt(t) : "http:" === i ? 80 : "https:" === i ? 443 : void 0
      }
    };
    e.exports = i
  }, function(e, t, i) {
    var n = i(7),
      r = i(5),
      s = {
        namespace: null,
        extend: function(e) {
          return r.extend(this, e)
        },
        init: function() {
          var e = this;
          n.on("initStateChange", function(t, i) {
            i && i.namespace === e.namespace && e.onLeave()
          }), n.on("newPageReady", function(t, i, n) {
            e.container = n, t.namespace === e.namespace && e.onEnter()
          }), n.on("transitionCompleted", function(t, i) {
            t.namespace === e.namespace && e.onEnterCompleted(), i && i.namespace === e.namespace && e.onLeaveCompleted()
          })
        },
        onEnter: function() {},
        onEnterCompleted: function() {},
        onLeave: function() {},
        onLeaveCompleted: function() {}
      };
    e.exports = s
  }, function(e, t) {
    var i = {
      events: {},
      on: function(e, t) {
        this.events[e] = this.events[e] || [], this.events[e].push(t)
      },
      off: function(e, t) {
        e in this.events != 0 && this.events[e].splice(this.events[e].indexOf(t), 1)
      },
      trigger: function(e) {
        if (e in this.events != 0)
          for (var t = 0; t < this.events[e].length; t++) this.events[e][t].apply(this, Array.prototype.slice.call(arguments, 1))
      }
    };
    e.exports = i
  }, function(e, t, i) {
    var n = i(5),
      r = {
        data: {},
        extend: function(e) {
          return n.extend(this, e)
        },
        set: function(e, t) {
          this.data[e] = t
        },
        get: function(e) {
          return this.data[e]
        },
        reset: function() {
          this.data = {}
        }
      };
    e.exports = r
  }, function(e, t) {
    e.exports = {
      history: [],
      add: function(e, t) {
        t || (t = void 0), this.history.push({
          url: e,
          namespace: t
        })
      },
      currentStatus: function() {
        return this.history[this.history.length - 1]
      },
      prevStatus: function() {
        var e = this.history;
        return e.length < 2 ? null : e[e.length - 2]
      }
    }
  }, function(e, t, i) {
    var n = i(5),
      r = i(7),
      s = i(11),
      a = i(8),
      o = i(9),
      l = {
        Dom: i(12),
        History: o,
        Cache: a,
        cacheEnabled: !0,
        transitionProgress: !1,
        ignoreClassLink: "no-barba",
        start: function() {
          this.init()
        },
        init: function() {
          var e = this.Dom.getContainer();
          this.Dom.getWrapper().setAttribute("aria-live", "polite"), this.History.add(this.getCurrentUrl(), this.Dom.getNamespace(e)), r.trigger("initStateChange", this.History.currentStatus()), r.trigger("newPageReady", this.History.currentStatus(), {}, e, this.Dom.currentHTML), r.trigger("transitionCompleted", this.History.currentStatus()), this.bindEvents()
        },
        bindEvents: function() {
          document.addEventListener("click", this.onLinkClick.bind(this)), window.addEventListener("popstate", this.onStateChange.bind(this))
        },
        getCurrentUrl: function() {
          return n.cleanLink(n.getCurrentUrl())
        },
        goTo: function(e) {
          window.history.pushState(null, null, e), this.onStateChange()
        },
        forceGoTo: function(e) {
          window.location = e
        },
        load: function(e) {
          var t, i = n.deferred(),
            r = this;
          return (t = this.Cache.get(e)) || (t = n.xhr(e), this.Cache.set(e, t)), t.then(function(e) {
            var t = r.Dom.parseResponse(e);
            r.Dom.putContainer(t), r.cacheEnabled || r.Cache.reset(), i.resolve(t)
          }, function() {
            r.forceGoTo(e), i.reject()
          }), i.promise
        },
        getHref: function(e) {
          if (e) return e.getAttribute && "string" == typeof e.getAttribute("xlink:href") ? e.getAttribute("xlink:href") : "string" == typeof e.href ? e.href : void 0
        },
        onLinkClick: function(e) {
          for (var t = e.target; t && !this.getHref(t);) t = t.parentNode;
          if (this.preventCheck(e, t)) {
            e.stopPropagation(), e.preventDefault(), r.trigger("linkClicked", t, e);
            var i = this.getHref(t);
            this.goTo(i)
          }
        },
        preventCheck: function(e, t) {
          if (!window.history.pushState) return !1;
          var i = this.getHref(t);
          return !(!t || !i || e.which > 1 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || t.target && "_blank" === t.target || window.location.protocol !== t.protocol || window.location.hostname !== t.hostname || n.getPort() !== n.getPort(t.port) || i.indexOf("#") > -1 || t.getAttribute && "string" == typeof t.getAttribute("download") || n.cleanLink(i) == n.cleanLink(location.href) || t.classList.contains(this.ignoreClassLink))
        },
        getTransition: function() {
          return s
        },
        onStateChange: function() {
          var e = this.getCurrentUrl();
          if (this.transitionProgress && this.forceGoTo(e), this.History.currentStatus().url === e) return !1;
          this.History.add(e);
          var t = this.load(e),
            i = Object.create(this.getTransition());
          this.transitionProgress = !0, r.trigger("initStateChange", this.History.currentStatus(), this.History.prevStatus());
          var n = i.init(this.Dom.getContainer(), t);
          t.then(this.onNewContainerLoaded.bind(this)), n.then(this.onTransitionEnd.bind(this))
        },
        onNewContainerLoaded: function(e) {
          this.History.currentStatus().namespace = this.Dom.getNamespace(e), r.trigger("newPageReady", this.History.currentStatus(), this.History.prevStatus(), e, this.Dom.currentHTML)
        },
        onTransitionEnd: function() {
          this.transitionProgress = !1, r.trigger("transitionCompleted", this.History.currentStatus(), this.History.prevStatus())
        }
      };
    e.exports = l
  }, function(e, t, i) {
    var n = i(4).extend({
      start: function() {
        this.newContainerLoading.then(this.finish.bind(this))
      },
      finish: function() {
        document.body.scrollTop = 0, this.done()
      }
    });
    e.exports = n
  }, function(e, t) {
    var i = {
      dataNamespace: "namespace",
      wrapperId: "barba-wrapper",
      containerClass: "barba-container",
      currentHTML: document.documentElement.innerHTML,
      parseResponse: function(e) {
        this.currentHTML = e;
        var t = document.createElement("div");
        t.innerHTML = e;
        var i = t.querySelector("title");
        return i && (document.title = i.textContent), this.getContainer(t)
      },
      getWrapper: function() {
        var e = document.getElementById(this.wrapperId);
        if (!e) throw new Error("Barba.js: wrapper not found!");
        return e
      },
      getContainer: function(e) {
        if (e || (e = document.body), !e) throw new Error("Barba.js: DOM not ready!");
        var t = this.parseContainer(e);
        if (t && t.jquery && (t = t[0]), !t) throw new Error("Barba.js: no container found");
        return t
      },
      getNamespace: function(e) {
        return e && e.dataset ? e.dataset[this.dataNamespace] : e ? e.getAttribute("data-" + this.dataNamespace) : null
      },
      putContainer: function(e) {
        e.style.visibility = "hidden", this.getWrapper().appendChild(e)
      },
      parseContainer: function(e) {
        return e.querySelector("." + this.containerClass)
      }
    };
    e.exports = i
  }, function(e, t, i) {
    var n = i(5),
      r = i(10),
      s = {
        ignoreClassLink: "no-barba-prefetch",
        init: function() {
          return !!window.history.pushState && (document.body.addEventListener("mouseover", this.onLinkEnter.bind(this)), void document.body.addEventListener("touchstart", this.onLinkEnter.bind(this)))
        },
        onLinkEnter: function(e) {
          for (var t = e.target; t && !r.getHref(t);) t = t.parentNode;
          if (t && !t.classList.contains(this.ignoreClassLink)) {
            var i = r.getHref(t);
            if (r.preventCheck(e, t) && !r.Cache.get(i)) {
              var s = n.xhr(i);
              r.Cache.set(i, s)
            }
          }
        }
      };
    e.exports = s
  }])
}), window.Modernizr = function(e, t, i) {
  function n(e) {
    m.cssText = e
  }

  function r(e, t) {
    return typeof e === t
  }

  function s(e, t) {
    return !!~("" + e).indexOf(t)
  }

  function a(e, t) {
    for (var n in e) {
      var r = e[n];
      if (!s(r, "-") && m[r] !== i) return "pfx" != t || r
    }
    return !1
  }

  function o(e, t, n) {
    for (var s in e) {
      var a = t[e[s]];
      if (a !== i) return !1 === n ? e[s] : r(a, "function") ? a.bind(n || t) : a
    }
    return !1
  }

  function l(e, t, i) {
    var n = e.charAt(0).toUpperCase() + e.slice(1),
      s = (e + " " + w.join(n + " ") + n).split(" ");
    return r(t, "string") || r(t, "undefined") ? a(s, t) : o(s = (e + " " + T.join(n + " ") + n).split(" "), t, i)
  }
  var c, u, d = {},
    h = t.documentElement,
    p = "modernizr",
    f = t.createElement(p),
    m = f.style,
    g = t.createElement("input"),
    y = ":)",
    v = {}.toString,
    _ = " -webkit- -moz- -o- -ms- ".split(" "),
    b = "Webkit Moz O ms",
    w = b.split(" "),
    T = b.toLowerCase().split(" "),
    A = "http://www.w3.org/2000/svg",
    k = {},
    x = {},
    S = {},
    C = [],
    E = C.slice,
    P = function(e, i, n, r) {
      var s, a, o, l, c = t.createElement("div"),
        u = t.body,
        d = u || t.createElement("body");
      if (parseInt(n, 10))
        for (; n--;)(o = t.createElement("div")).id = r ? r[n] : p + (n + 1), c.appendChild(o);
      return s = ["&#173;", '<style id="s', p, '">', e, "</style>"].join(""), c.id = p, (u ? c : d).innerHTML += s, d.appendChild(c), u || (d.style.background = "", d.style.overflow = "hidden", l = h.style.overflow, h.style.overflow = "hidden", h.appendChild(d)), a = i(c, e), u ? c.parentNode.removeChild(c) : (d.parentNode.removeChild(d), h.style.overflow = l), !!a
    },
    M = function() {
      var e = {
        select: "input",
        change: "input",
        submit: "form",
        reset: "form",
        error: "img",
        load: "img",
        abort: "img"
      };
      return function(n, s) {
        s = s || t.createElement(e[n] || "div");
        var a = (n = "on" + n) in s;
        return a || (s.setAttribute || (s = t.createElement("div")), s.setAttribute && s.removeAttribute && (s.setAttribute(n, ""), a = r(s[n], "function"), r(s[n], "undefined") || (s[n] = i), s.removeAttribute(n))), s = null, a
      }
    }(),
    O = {}.hasOwnProperty;
  for (var D in u = r(O, "undefined") || r(O.call, "undefined") ? function(e, t) {
      return t in e && r(e.constructor.prototype[t], "undefined")
    } : function(e, t) {
      return O.call(e, t)
    }, Function.prototype.bind || (Function.prototype.bind = function(e) {
      var t = this;
      if ("function" != typeof t) throw new TypeError;
      var i = E.call(arguments, 1),
        n = function() {
          if (this instanceof n) {
            var r = function() {};
            r.prototype = t.prototype;
            var s = new r,
              a = t.apply(s, i.concat(E.call(arguments)));
            return Object(a) === a ? a : s
          }
          return t.apply(e, i.concat(E.call(arguments)))
        };
      return n
    }), k.flexbox = function() {
      return l("flexWrap")
    }, k.flexboxlegacy = function() {
      return l("boxDirection")
    }, k.canvas = function() {
      var e = t.createElement("canvas");
      return !(!e.getContext || !e.getContext("2d"))
    }, k.canvastext = function() {
      return !(!d.canvas || !r(t.createElement("canvas").getContext("2d").fillText, "function"))
    }, k.webgl = function() {
      return !!e.WebGLRenderingContext
    }, k.touch = function() {
      var i;
      return "ontouchstart" in e || e.DocumentTouch && t instanceof DocumentTouch ? i = !0 : P(["@media (", _.join("touch-enabled),("), p, ")", "{#modernizr{top:9px;position:absolute}}"].join(""), function(e) {
        i = 9 === e.offsetTop
      }), i
    }, k.geolocation = function() {
      return "geolocation" in navigator
    }, k.postmessage = function() {
      return !!e.postMessage
    }, k.websqldatabase = function() {
      return !!e.openDatabase
    }, k.indexedDB = function() {
      return !!l("indexedDB", e)
    }, k.hashchange = function() {
      return M("hashchange", e) && (t.documentMode === i || t.documentMode > 7)
    }, k.history = function() {
      return !(!e.history || !history.pushState)
    }, k.draganddrop = function() {
      var e = t.createElement("div");
      return "draggable" in e || "ondragstart" in e && "ondrop" in e
    }, k.websockets = function() {
      return "WebSocket" in e || "MozWebSocket" in e
    }, k.rgba = function() {
      return n("background-color:rgba(150,255,150,.5)"), s(m.backgroundColor, "rgba")
    }, k.hsla = function() {
      return n("background-color:hsla(120,40%,100%,.5)"), s(m.backgroundColor, "rgba") || s(m.backgroundColor, "hsla")
    }, k.multiplebgs = function() {
      return n("background:url(https://),url(https://),red url(https://)"), /(url\s*\(.*?){3}/.test(m.background)
    }, k.backgroundsize = function() {
      return l("backgroundSize")
    }, k.borderimage = function() {
      return l("borderImage")
    }, k.borderradius = function() {
      return l("borderRadius")
    }, k.boxshadow = function() {
      return l("boxShadow")
    }, k.textshadow = function() {
      return "" === t.createElement("div").style.textShadow
    }, k.opacity = function() {
      return e = "opacity:.55", n(_.join(e + ";") + (t || "")), /^0.55$/.test(m.opacity);
      var e, t
    }, k.cssanimations = function() {
      return l("animationName")
    }, k.csscolumns = function() {
      return l("columnCount")
    }, k.cssgradients = function() {
      var e = "background-image:";
      return n((e + "-webkit- ".split(" ").join("gradient(linear,left top,right bottom,from(#9f9),to(white));" + e) + _.join("linear-gradient(left top,#9f9, white);" + e)).slice(0, -e.length)), s(m.backgroundImage, "gradient")
    }, k.cssreflections = function() {
      return l("boxReflect")
    }, k.csstransforms = function() {
      return !!l("transform")
    }, k.csstransforms3d = function() {
      var e = !!l("perspective");
      return e && "webkitPerspective" in h.style && P("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}", function(t) {
        e = 9 === t.offsetLeft && 3 === t.offsetHeight
      }), e
    }, k.csstransitions = function() {
      return l("transition")
    }, k.fontface = function() {
      var e;
      return P('@font-face {font-family:"font";src:url("https://")}', function(i, n) {
        var r = t.getElementById("smodernizr"),
          s = r.sheet || r.styleSheet,
          a = s ? s.cssRules && s.cssRules[0] ? s.cssRules[0].cssText : s.cssText || "" : "";
        e = /src/i.test(a) && 0 === a.indexOf(n.split(" ")[0])
      }), e
    }, k.generatedcontent = function() {
      var e;
      return P(["#", p, "{font:0/0 a}#", p, ':after{content:"', y, '";visibility:hidden;font:3px/1 a}'].join(""), function(t) {
        e = t.offsetHeight >= 3
      }), e
    }, k.video = function() {
      var e = t.createElement("video"),
        i = !1;
      try {
        (i = !!e.canPlayType) && ((i = new Boolean(i)).ogg = e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, ""), i.h264 = e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, ""), i.webm = e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, ""))
      } catch (e) {}
      return i
    }, k.audio = function() {
      var e = t.createElement("audio"),
        i = !1;
      try {
        (i = !!e.canPlayType) && ((i = new Boolean(i)).ogg = e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""), i.mp3 = e.canPlayType("audio/mpeg;").replace(/^no$/, ""), i.wav = e.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""), i.m4a = (e.canPlayType("audio/x-m4a;") || e.canPlayType("audio/aac;")).replace(/^no$/, ""))
      } catch (e) {}
      return i
    }, k.localstorage = function() {
      try {
        return localStorage.setItem(p, p), localStorage.removeItem(p), !0
      } catch (e) {
        return !1
      }
    }, k.sessionstorage = function() {
      try {
        return sessionStorage.setItem(p, p), sessionStorage.removeItem(p), !0
      } catch (e) {
        return !1
      }
    }, k.webworkers = function() {
      return !!e.Worker
    }, k.applicationcache = function() {
      return !!e.applicationCache
    }, k.svg = function() {
      return !!t.createElementNS && !!t.createElementNS(A, "svg").createSVGRect
    }, k.inlinesvg = function() {
      var e = t.createElement("div");
      return e.innerHTML = "<svg/>", (e.firstChild && e.firstChild.namespaceURI) == A
    }, k.smil = function() {
      return !!t.createElementNS && /SVGAnimate/.test(v.call(t.createElementNS(A, "animate")))
    }, k.svgclippaths = function() {
      return !!t.createElementNS && /SVGClipPath/.test(v.call(t.createElementNS(A, "clipPath")))
    }, k) u(k, D) && (c = D.toLowerCase(), d[c] = k[D](), C.push((d[c] ? "" : "no-") + c));
  return d.input || (d.input = function(i) {
      for (var n = 0, r = i.length; r > n; n++) S[i[n]] = !!(i[n] in g);
      return S.list && (S.list = !(!t.createElement("datalist") || !e.HTMLDataListElement)), S
    }("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")), d.inputtypes = function(e) {
      for (var n, r, s, a = 0, o = e.length; o > a; a++) g.setAttribute("type", r = e[a]), (n = "text" !== g.type) && (g.value = y, g.style.cssText = "position:absolute;visibility:hidden;", /^range$/.test(r) && g.style.WebkitAppearance !== i ? (h.appendChild(g), n = (s = t.defaultView).getComputedStyle && "textfield" !== s.getComputedStyle(g, null).WebkitAppearance && 0 !== g.offsetHeight, h.removeChild(g)) : /^(search|tel)$/.test(r) || (n = /^(url|email)$/.test(r) ? g.checkValidity && !1 === g.checkValidity() : g.value != y)), x[e[a]] = !!n;
      return x
    }("search tel url email datetime date month week time datetime-local number range color".split(" "))), d.addTest = function(e, t) {
      if ("object" == typeof e)
        for (var n in e) u(e, n) && d.addTest(n, e[n]);
      else {
        if (e = e.toLowerCase(), d[e] !== i) return d;
        t = "function" == typeof t ? t() : t, h.className += " " + (t ? "" : "no-") + e, d[e] = t
      }
      return d
    }, n(""), f = g = null,
    function(e, t) {
      function i() {
        var e = m.elements;
        return "string" == typeof e ? e.split(" ") : e
      }

      function n(e) {
        var t = f[e[h]];
        return t || (t = {}, p++, e[h] = p, f[p] = t), t
      }

      function r(e, i, r) {
        return i || (i = t), l ? i.createElement(e) : (r || (r = n(i)), !(s = r.cache[e] ? r.cache[e].cloneNode() : d.test(e) ? (r.cache[e] = r.createElem(e)).cloneNode() : r.createElem(e)).canHaveChildren || u.test(e) || s.tagUrn ? s : r.frag.appendChild(s));
        var s
      }

      function s(e, t) {
        t.cache || (t.cache = {}, t.createElem = e.createElement, t.createFrag = e.createDocumentFragment, t.frag = t.createFrag()), e.createElement = function(i) {
          return m.shivMethods ? r(i, e, t) : t.createElem(i)
        }, e.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + i().join().replace(/[\w\-]+/g, function(e) {
          return t.createElem(e), t.frag.createElement(e), 'c("' + e + '")'
        }) + ");return n}")(m, t.frag)
      }

      function a(e) {
        e || (e = t);
        var i = n(e);
        return !m.shivCSS || o || i.hasCSS || (i.hasCSS = !! function(e, t) {
          var i = e.createElement("p"),
            n = e.getElementsByTagName("head")[0] || e.documentElement;
          return i.innerHTML = "x<style>" + t + "</style>", n.insertBefore(i.lastChild, n.firstChild)
        }(e, "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")), l || s(e, i), e
      }
      var o, l, c = e.html5 || {},
        u = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
        d = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
        h = "_html5shiv",
        p = 0,
        f = {};
      ! function() {
        try {
          var e = t.createElement("a");
          e.innerHTML = "<xyz></xyz>", o = "hidden" in e, l = 1 == e.childNodes.length || function() {
            t.createElement("a");
            var e = t.createDocumentFragment();
            return void 0 === e.cloneNode || void 0 === e.createDocumentFragment || void 0 === e.createElement
          }()
        } catch (e) {
          o = !0, l = !0
        }
      }();
      var m = {
        elements: c.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",
        version: "3.7.0",
        shivCSS: !1 !== c.shivCSS,
        supportsUnknownElements: l,
        shivMethods: !1 !== c.shivMethods,
        type: "default",
        shivDocument: a,
        createElement: r,
        createDocumentFragment: function(e, r) {
          if (e || (e = t), l) return e.createDocumentFragment();
          for (var s = (r = r || n(e)).frag.cloneNode(), a = 0, o = i(), c = o.length; c > a; a++) s.createElement(o[a]);
          return s
        }
      };
      e.html5 = m, a(t)
    }(this, t), d._version = "2.8.2", d._prefixes = _, d._domPrefixes = T, d._cssomPrefixes = w, d.mq = function(t) {
      var i, n = e.matchMedia || e.msMatchMedia;
      return n ? n(t) && n(t).matches || !1 : (P("@media " + t + " { #" + p + " { position: absolute; } }", function(t) {
        i = "absolute" == (e.getComputedStyle ? getComputedStyle(t, null) : t.currentStyle).position
      }), i)
    }, d.hasEvent = M, d.testProp = function(e) {
      return a([e])
    }, d.testAllProps = l, d.testStyles = P, d.prefixed = function(e, t, i) {
      return t ? l(e, t, i) : l(e, "pfx")
    }, h.className = h.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + " js " + C.join(" "), d
}(this, this.document);
var _gsScope, objectFitImages = function() {
  "use strict";

  function e(e, t, i) {
    var n = function(e, t) {
      return "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='" + e + "' height='" + t + "'%3E%3C/svg%3E"
    }(t || 1, i || 0);
    h.call(e, "src") !== n && p.call(e, "src", n)
  }

  function t(e, i) {
    e.naturalWidth ? i(e) : setTimeout(t, 100, e, i)
  }

  function i(i) {
    var r = function(e) {
        for (var t, i = getComputedStyle(e).fontFamily, n = {}; null !== (t = a.exec(i));) n[t[1]] = t[2];
        return n
      }(i),
      o = i[s];
    if (r["object-fit"] = r["object-fit"] || "fill", !o.img) {
      if ("fill" === r["object-fit"]) return;
      if (!o.skipTest && l && !r["object-position"]) return
    }
    if (!o.img) {
      o.img = new Image(i.width, i.height), o.img.srcset = h.call(i, "data-ofi-srcset") || i.srcset, o.img.src = h.call(i, "data-ofi-src") || i.src, p.call(i, "data-ofi-src", i.src), i.srcset && p.call(i, "data-ofi-srcset", i.srcset), e(i, i.naturalWidth || i.width, i.naturalHeight || i.height), i.srcset && (i.srcset = "");
      try {
        n(i)
      } catch (i) {
        window.console && console.log("http://bit.ly/ofi-old-browser")
      }
    }(function(e) {
      if (e.srcset && !d && window.picturefill) {
        var t = window.picturefill._;
        e[t.ns] && e[t.ns].evaled || t.fillImg(e, {
          reselect: !0
        }), e[t.ns].curSrc || (e[t.ns].supported = !1, t.fillImg(e, {
          reselect: !0
        })), e.currentSrc = e[t.ns].curSrc || e.src
      }
    })(o.img), i.style.backgroundImage = 'url("' + (o.img.currentSrc || o.img.src).replace(/"/g, '\\"') + '")', i.style.backgroundPosition = r["object-position"] || "center", i.style.backgroundRepeat = "no-repeat", /scale-down/.test(r["object-fit"]) ? t(o.img, function() {
      o.img.naturalWidth > i.width || o.img.naturalHeight > i.height ? i.style.backgroundSize = "contain" : i.style.backgroundSize = "auto"
    }) : i.style.backgroundSize = r["object-fit"].replace("none", "auto").replace("fill", "100% 100%"), t(o.img, function(t) {
      e(i, t.naturalWidth, t.naturalHeight)
    })
  }

  function n(e) {
    var t = {
      get: function(t) {
        return e[s].img[t || "src"]
      },
      set: function(t, n) {
        return e[s].img[n || "src"] = t, p.call(e, "data-ofi-" + n, t), i(e), t
      }
    };
    Object.defineProperty(e, "src", t), Object.defineProperty(e, "currentSrc", {
      get: function() {
        return t.get("currentSrc")
      }
    }), Object.defineProperty(e, "srcset", {
      get: function() {
        return t.get("srcset")
      },
      set: function(e) {
        return t.set(e, "srcset")
      }
    })
  }

  function r(e, t) {
    var n = !f && !e;
    if (t = t || {}, e = e || "img", c && !t.skipTest || !u) return !1;
    "string" == typeof e ? e = document.querySelectorAll(e) : "length" in e || (e = [e]);
    for (var a = 0; a < e.length; a++) e[a][s] = e[a][s] || {
      skipTest: t.skipTest
    }, i(e[a]);
    n && (document.body.addEventListener("load", function(e) {
      "IMG" === e.target.tagName && r(e.target, {
        skipTest: t.skipTest
      })
    }, !0), f = !0, e = "img"), t.watchMQ && window.addEventListener("resize", r.bind(null, e, {
      skipTest: t.skipTest
    }))
  }
  var s = "bfred-it:object-fit-images",
    a = /(object-fit|object-position)\s*:\s*([-\w\s%]+)/g,
    o = "undefined" == typeof Image ? {
      style: {
        "object-position": 1
      }
    } : new Image,
    l = "object-fit" in o.style,
    c = "object-position" in o.style,
    u = "background-size" in o.style,
    d = "string" == typeof o.currentSrc,
    h = o.getAttribute,
    p = o.setAttribute,
    f = !1;
  return r.supportsObjectFit = l, r.supportsObjectPosition = c,
    function() {
      function e(e, t) {
        return e[s] && e[s].img && ("src" === t || "srcset" === t) ? e[s].img : e
      }
      c || (HTMLImageElement.prototype.getAttribute = function(t) {
        return h.call(e(this, t), t)
      }, HTMLImageElement.prototype.setAttribute = function(t, i) {
        return p.call(e(this, t), t, String(i))
      })
    }(), r
}();
! function(e, t) {
  "use strict";

  function i(i, n, s, o, l) {
    function c() {
      A = e.devicePixelRatio > 1, u(s), n.delay >= 0 && setTimeout(function() {
        d(!0)
      }, n.delay), (n.delay < 0 || n.combined) && (o.e = function(e, t) {
        var r, s = 0;
        return function(a, o) {
          function l() {
            s = +new Date, t.call(i, a)
          }
          var c = +new Date - s;
          r && clearTimeout(r), c > e || !n.enableThrottle || o ? l() : r = setTimeout(l, e - c)
        }
      }(n.throttle, function(e) {
        "resize" === e.type && (w = T = -1), d(e.all)
      }), o.a = function(e) {
        u(e), s.push.apply(s, e)
      }, o.g = function() {
        return s = r(s).filter(function() {
          return !r(this).data(n.loadedName)
        })
      }, o.f = function(e) {
        for (var t = 0; t < e.length; t++) {
          var i = s.filter(e[t]);
          i.length && d(!1, i)
        }
      }, d(), r(n.appendScroll).on("scroll." + l + " resize." + l, o.e))
    }

    function u(e) {
      for (var s = n.defaultImage, a = n.placeholder, o = n.imageBase, l = n.srcsetAttribute, c = n.loaderAttribute, u = n._f || {}, d = 0, h = (e = r(e).filter(function() {
          var e = r(this),
            i = g(this);
          return !e.data(n.handledName) && (e.attr(n.attribute) || e.attr(l) || e.attr(c) || u[i] !== t)
        }).data("plugin_" + n.name, i)).length; d < h; d++) {
        var p = r(e[d]),
          f = g(e[d]),
          m = p.attr(n.imageBaseAttribute) || o;
        f == C && m && p.attr(l) && p.attr(l, y(p.attr(l), m)), u[f] === t || p.attr(c) || p.attr(c, u[f]), f == C && s && !p.attr(E) ? p.attr(E, s) : f == C || !a || p.css(O) && "none" != p.css(O) || p.css(O, "url('" + a + "')")
      }
    }

    function d(e, t) {
      if (s.length) {
        for (var a = t || s, o = !1, l = n.imageBase || "", c = n.srcsetAttribute, u = n.handledName, d = 0; d < a.length; d++)
          if (e || t || p(a[d])) {
            var f = r(a[d]),
              m = g(a[d]),
              y = f.attr(n.attribute),
              v = f.attr(n.imageBaseAttribute) || l,
              _ = f.attr(n.loaderAttribute);
            f.data(u) || n.visibleOnly && !f.is(":visible") || !((y || f.attr(c)) && (m == C && (v + y != f.attr(E) || f.attr(c) != f.attr(P)) || m != C && v + y != f.css(O)) || _) || (o = !0, f.data(u, !0), h(f, m, v, _))
          } o && (s = r(s).filter(function() {
          return !r(this).data(u)
        }))
      } else n.autoDestroy && i.destroy()
    }

    function h(e, t, i, s) {
      ++b;
      var a = function() {
        _("onError", e), v(), a = r.noop
      };
      _("beforeLoad", e);
      var o = n.attribute,
        l = n.srcsetAttribute,
        c = n.sizesAttribute,
        u = n.retinaAttribute,
        d = n.removeAttribute,
        h = n.loadedName,
        p = e.attr(u);
      if (s) {
        var f = function() {
          d && e.removeAttr(n.loaderAttribute), e.data(h, !0), _(k, e), setTimeout(v, 1), f = r.noop
        };
        e.off(S).one(S, a).one(x, f), _(s, e, function(t) {
          t ? (e.off(x), f()) : (e.off(S), a())
        }) || e.trigger(S)
      } else {
        var m = r(new Image);
        m.one(S, a).one(x, function() {
          e.hide(), t == C ? e.attr(M, m.attr(M)).attr(P, m.attr(P)).attr(E, m.attr(E)) : e.css(O, "url('" + m.attr(E) + "')"), e[n.effect](n.effectTime), d && (e.removeAttr(o + " " + l + " " + u + " " + n.imageBaseAttribute), c !== M && e.removeAttr(c)), e.data(h, !0), _(k, e), m.remove(), v()
        });
        var g = (A && p ? p : e.attr(o)) || "";
        m.attr(M, e.attr(c)).attr(P, e.attr(l)).attr(E, g ? i + g : null), m.complete && m.trigger(x)
      }
    }

    function p(e) {
      var t = e.getBoundingClientRect(),
        i = n.scrollDirection,
        r = n.threshold,
        s = m() + r > t.top && -r < t.bottom,
        a = f() + r > t.left && -r < t.right;
      return "vertical" == i ? s : "horizontal" == i ? a : s && a
    }

    function f() {
      return w >= 0 ? w : w = r(e).width()
    }

    function m() {
      return T >= 0 ? T : T = r(e).height()
    }

    function g(e) {
      return e.tagName.toLowerCase()
    }

    function y(e, t) {
      if (t) {
        var i = e.split(",");
        e = "";
        for (var n = 0, r = i.length; n < r; n++) e += t + i[n].trim() + (n !== r - 1 ? "," : "")
      }
      return e
    }

    function v() {
      --b, s.length || b || _("onFinishedAll")
    }

    function _(e, t, r) {
      return !!(e = n[e]) && (e.apply(i, [].slice.call(arguments, 1)), !0)
    }
    var b = 0,
      w = -1,
      T = -1,
      A = !1,
      k = "afterLoad",
      x = "load",
      S = "error",
      C = "img",
      E = "src",
      P = "srcset",
      M = "sizes",
      O = "background-image";
    "event" == n.bind || a ? c() : r(e).on(x + "." + l, c)
  }

  function n(n, a) {
    var o = this,
      l = r.extend({}, o.config, a),
      c = {},
      u = l.name + "-" + ++s;
    return o.config = function(e, i) {
      return i === t ? l[e] : (l[e] = i, o)
    }, o.addItems = function(e) {
      return c.a && c.a("string" === r.type(e) ? r(e) : e), o
    }, o.getItems = function() {
      return c.g ? c.g() : {}
    }, o.update = function(e) {
      return c.e && c.e({}, !e), o
    }, o.force = function(e) {
      return c.f && c.f("string" === r.type(e) ? r(e) : e), o
    }, o.loadAll = function() {
      return c.e && c.e({
        all: !0
      }, !0), o
    }, o.destroy = function() {
      return r(l.appendScroll).off("." + u, c.e), r(e).off("." + u), c = {}, t
    }, i(o, l, n, c, u), l.chainable ? n : o
  }
  var r = e.jQuery || e.Zepto,
    s = 0,
    a = !1;
  r.fn.Lazy = r.fn.lazy = function(e) {
    return new n(this, e)
  }, r.Lazy = r.lazy = function(e, i, s) {
    if (r.isFunction(i) && (s = i, i = []), r.isFunction(s)) {
      e = r.isArray(e) ? e : [e], i = r.isArray(i) ? i : [i];
      for (var a = n.prototype.config, o = a._f || (a._f = {}), l = 0, c = e.length; l < c; l++)(a[e[l]] === t || r.isFunction(a[e[l]])) && (a[e[l]] = s);
      for (var u = 0, d = i.length; u < d; u++) o[i[u]] = e[0]
    }
  }, n.prototype.config = {
    name: "lazy",
    chainable: !0,
    autoDestroy: !0,
    bind: "load",
    threshold: 500,
    visibleOnly: !1,
    appendScroll: e,
    scrollDirection: "both",
    imageBase: null,
    defaultImage: "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==",
    placeholder: null,
    delay: -1,
    combined: !1,
    attribute: "data-src",
    srcsetAttribute: "data-srcset",
    sizesAttribute: "data-sizes",
    retinaAttribute: "data-retina",
    loaderAttribute: "data-loader",
    imageBaseAttribute: "data-imagebase",
    removeAttribute: !0,
    handledName: "handled",
    loadedName: "loaded",
    effect: "show",
    effectTime: 0,
    enableThrottle: !0,
    throttle: 250,
    beforeLoad: t,
    afterLoad: t,
    onError: t,
    onFinishedAll: t
  }, r(e).on("load", function() {
    a = !0
  })
}(window),
function(e) {
  e.lazy(["av", "audio", "video"], ["audio", "video"], function(t, i) {
    var n = t[0].tagName.toLowerCase();
    if ("audio" == n || "video" == n) {
      var r = "data-src",
        s = t.find(r),
        a = t.find("data-track"),
        o = 0,
        l = function() {
          ++o == s.length && i(!1)
        },
        c = function() {
          var t = e(this),
            i = t[0].tagName.toLowerCase(),
            n = t.prop("attributes"),
            s = e(i == r ? "<source>" : "<track>");
          i == r && s.one("error", l), e.each(n, function(e, t) {
            s.attr(t.name, t.value)
          }), t.replaceWith(s)
        };
      t.one("loadedmetadata", function() {
        i(!0)
      }).off("load error").attr("poster", t.attr("data-poster")), s.length ? s.each(c) : t.attr(r) ? (e.each(t.attr(r).split(","), function(i, n) {
        var r = n.split("|");
        t.append(e("<source>").one("error", l).attr({
          src: r[0].trim(),
          type: r[1].trim()
        }))
      }), this.config("removeAttribute") && t.removeAttr(r)) : i(!1), a.length && a.each(c)
    } else i(!1)
  })
}(window.jQuery || window.Zepto),
function(e) {
  "use strict";
  "function" == typeof define && define.amd ? define(["jquery"], e) : "undefined" != typeof exports ? module.exports = e(require("jquery")) : e(jQuery)
}(function(e) {
  "use strict";
  var t = window.Slick || {};
  (t = function() {
    var t = 0;
    return function(i, n) {
      var r, s = this;
      s.defaults = {
        accessibility: !0,
        adaptiveHeight: !1,
        appendArrows: e(i),
        appendDots: e(i),
        arrows: !0,
        asNavFor: null,
        prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',
        nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',
        autoplay: !1,
        autoplaySpeed: 3e3,
        centerMode: !1,
        centerPadding: "50px",
        cssEase: "ease",
        customPaging: function(t, i) {
          return e('<button type="button" data-role="none" role="button" tabindex="0" />').text(i + 1)
        },
        dots: !1,
        dotsClass: "slick-dots",
        draggable: !0,
        easing: "linear",
        edgeFriction: .35,
        fade: !1,
        focusOnSelect: !1,
        infinite: !0,
        initialSlide: 0,
        lazyLoad: "ondemand",
        mobileFirst: !1,
        pauseOnHover: !0,
        pauseOnFocus: !0,
        pauseOnDotsHover: !1,
        respondTo: "window",
        responsive: null,
        rows: 1,
        rtl: !1,
        slide: "",
        slidesPerRow: 1,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        swipe: !0,
        swipeToSlide: !1,
        touchMove: !0,
        touchThreshold: 5,
        useCSS: !0,
        useTransform: !0,
        variableWidth: !1,
        vertical: !1,
        verticalSwiping: !1,
        waitForAnimate: !0,
        zIndex: 1e3
      }, s.initials = {
        animating: !1,
        dragging: !1,
        autoPlayTimer: null,
        currentDirection: 0,
        currentLeft: null,
        currentSlide: 0,
        direction: 1,
        $dots: null,
        listWidth: null,
        listHeight: null,
        loadIndex: 0,
        $nextArrow: null,
        $prevArrow: null,
        slideCount: null,
        slideWidth: null,
        $slideTrack: null,
        $slides: null,
        sliding: !1,
        slideOffset: 0,
        swipeLeft: null,
        $list: null,
        touchObject: {},
        transformsEnabled: !1,
        unslicked: !1
      }, e.extend(s, s.initials), s.activeBreakpoint = null, s.animType = null, s.animProp = null, s.breakpoints = [], s.breakpointSettings = [], s.cssTransitions = !1, s.focussed = !1, s.interrupted = !1, s.hidden = "hidden", s.paused = !0, s.positionProp = null, s.respondTo = null, s.rowCount = 1, s.shouldClick = !0, s.$slider = e(i), s.$slidesCache = null, s.transformType = null, s.transitionType = null, s.visibilityChange = "visibilitychange", s.windowWidth = 0, s.windowTimer = null, r = e(i).data("slick") || {}, s.options = e.extend({}, s.defaults, n, r), s.currentSlide = s.options.initialSlide, s.originalSettings = s.options, void 0 !== document.mozHidden ? (s.hidden = "mozHidden", s.visibilityChange = "mozvisibilitychange") : void 0 !== document.webkitHidden && (s.hidden = "webkitHidden", s.visibilityChange = "webkitvisibilitychange"), s.autoPlay = e.proxy(s.autoPlay, s), s.autoPlayClear = e.proxy(s.autoPlayClear, s), s.autoPlayIterator = e.proxy(s.autoPlayIterator, s), s.changeSlide = e.proxy(s.changeSlide, s), s.clickHandler = e.proxy(s.clickHandler, s), s.selectHandler = e.proxy(s.selectHandler, s), s.setPosition = e.proxy(s.setPosition, s), s.swipeHandler = e.proxy(s.swipeHandler, s), s.dragHandler = e.proxy(s.dragHandler, s), s.keyHandler = e.proxy(s.keyHandler, s), s.instanceUid = t++, s.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, s.registerBreakpoints(), s.init(!0)
    }
  }()).prototype.activateADA = function() {
    this.$slideTrack.find(".slick-active").attr({
      "aria-hidden": "false"
    }).find("a, input, button, select").attr({
      tabindex: "0"
    })
  }, t.prototype.addSlide = t.prototype.slickAdd = function(t, i, n) {
    var r = this;
    if ("boolean" == typeof i) n = i, i = null;
    else if (0 > i || i >= r.slideCount) return !1;
    r.unload(), "number" == typeof i ? 0 === i && 0 === r.$slides.length ? e(t).appendTo(r.$slideTrack) : n ? e(t).insertBefore(r.$slides.eq(i)) : e(t).insertAfter(r.$slides.eq(i)) : !0 === n ? e(t).prependTo(r.$slideTrack) : e(t).appendTo(r.$slideTrack), r.$slides = r.$slideTrack.children(this.options.slide), r.$slideTrack.children(this.options.slide).detach(), r.$slideTrack.append(r.$slides), r.$slides.each(function(t, i) {
      e(i).attr("data-slick-index", t)
    }), r.$slidesCache = r.$slides, r.reinit()
  }, t.prototype.animateHeight = function() {
    var e = this;
    if (1 === e.options.slidesToShow && !0 === e.options.adaptiveHeight && !1 === e.options.vertical) {
      var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
      e.$list.animate({
        height: t
      }, e.options.speed)
    }
  }, t.prototype.animateSlide = function(t, i) {
    var n = {},
      r = this;
    r.animateHeight(), !0 === r.options.rtl && !1 === r.options.vertical && (t = -t), !1 === r.transformsEnabled ? !1 === r.options.vertical ? r.$slideTrack.animate({
      left: t
    }, r.options.speed, r.options.easing, i) : r.$slideTrack.animate({
      top: t
    }, r.options.speed, r.options.easing, i) : !1 === r.cssTransitions ? (!0 === r.options.rtl && (r.currentLeft = -r.currentLeft), e({
      animStart: r.currentLeft
    }).animate({
      animStart: t
    }, {
      duration: r.options.speed,
      easing: r.options.easing,
      step: function(e) {
        e = Math.ceil(e), !1 === r.options.vertical ? (n[r.animType] = "translate(" + e + "px, 0px)", r.$slideTrack.css(n)) : (n[r.animType] = "translate(0px," + e + "px)", r.$slideTrack.css(n))
      },
      complete: function() {
        i && i.call()
      }
    })) : (r.applyTransition(), t = Math.ceil(t), !1 === r.options.vertical ? n[r.animType] = "translate3d(" + t + "px, 0px, 0px)" : n[r.animType] = "translate3d(0px," + t + "px, 0px)", r.$slideTrack.css(n), i && setTimeout(function() {
      r.disableTransition(), i.call()
    }, r.options.speed))
  }, t.prototype.getNavTarget = function() {
    var t = this.options.asNavFor;
    return t && null !== t && (t = e(t).not(this.$slider)), t
  }, t.prototype.asNavFor = function(t) {
    var i = this.getNavTarget();
    null !== i && "object" == typeof i && i.each(function() {
      var i = e(this).slick("getSlick");
      i.unslicked || i.slideHandler(t, !0)
    })
  }, t.prototype.applyTransition = function(e) {
    var t = this,
      i = {};
    !1 === t.options.fade ? i[t.transitionType] = t.transformType + " " + t.options.speed + "ms " + t.options.cssEase : i[t.transitionType] = "opacity " + t.options.speed + "ms " + t.options.cssEase, !1 === t.options.fade ? t.$slideTrack.css(i) : t.$slides.eq(e).css(i)
  }, t.prototype.autoPlay = function() {
    var e = this;
    e.autoPlayClear(), e.slideCount > e.options.slidesToShow && (e.autoPlayTimer = setInterval(e.autoPlayIterator, e.options.autoplaySpeed))
  }, t.prototype.autoPlayClear = function() {
    this.autoPlayTimer && clearInterval(this.autoPlayTimer)
  }, t.prototype.autoPlayIterator = function() {
    var e = this,
      t = e.currentSlide + e.options.slidesToScroll;
    e.paused || e.interrupted || e.focussed || (!1 === e.options.infinite && (1 === e.direction && e.currentSlide + 1 === e.slideCount - 1 ? e.direction = 0 : 0 === e.direction && (t = e.currentSlide - e.options.slidesToScroll, e.currentSlide - 1 == 0 && (e.direction = 1))), e.slideHandler(t))
  }, t.prototype.buildArrows = function() {
    var t = this;
    !0 === t.options.arrows && (t.$prevArrow = e(t.options.prevArrow).addClass("slick-arrow"), t.$nextArrow = e(t.options.nextArrow).addClass("slick-arrow"), t.slideCount > t.options.slidesToShow ? (t.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), t.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.prependTo(t.options.appendArrows), t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.appendTo(t.options.appendArrows), !0 !== t.options.infinite && t.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : t.$prevArrow.add(t.$nextArrow).addClass("slick-hidden").attr({
      "aria-disabled": "true",
      tabindex: "-1"
    }))
  }, t.prototype.buildDots = function() {
    var t, i, n = this;
    if (!0 === n.options.dots && n.slideCount > n.options.slidesToShow) {
      for (n.$slider.addClass("slick-dotted"), i = e("<ul />").addClass(n.options.dotsClass), t = 0; t <= n.getDotCount(); t += 1) i.append(e("<li />").append(n.options.customPaging.call(this, n, t)));
      n.$dots = i.appendTo(n.options.appendDots), n.$dots.find("li").first().addClass("slick-active").attr("aria-hidden", "false")
    }
  }, t.prototype.buildOut = function() {
    var t = this;
    t.$slides = t.$slider.children(t.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), t.slideCount = t.$slides.length, t.$slides.each(function(t, i) {
      e(i).attr("data-slick-index", t).data("originalStyling", e(i).attr("style") || "")
    }), t.$slider.addClass("slick-slider"), t.$slideTrack = 0 === t.slideCount ? e('<div class="slick-track"/>').appendTo(t.$slider) : t.$slides.wrapAll('<div class="slick-track"/>').parent(), t.$list = t.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(), t.$slideTrack.css("opacity", 0), (!0 === t.options.centerMode || !0 === t.options.swipeToSlide) && (t.options.slidesToScroll = 1), e("img[data-lazy]", t.$slider).not("[src]").addClass("slick-loading"), t.setupInfinite(), t.buildArrows(), t.buildDots(), t.updateDots(), t.setSlideClasses("number" == typeof t.currentSlide ? t.currentSlide : 0), !0 === t.options.draggable && t.$list.addClass("draggable")
  }, t.prototype.buildRows = function() {
    var e, t, i, n, r, s, a, o = this;
    if (n = document.createDocumentFragment(), s = o.$slider.children(), o.options.rows > 1) {
      for (a = o.options.slidesPerRow * o.options.rows, r = Math.ceil(s.length / a), e = 0; r > e; e++) {
        var l = document.createElement("div");
        for (t = 0; t < o.options.rows; t++) {
          var c = document.createElement("div");
          for (i = 0; i < o.options.slidesPerRow; i++) {
            var u = e * a + (t * o.options.slidesPerRow + i);
            s.get(u) && c.appendChild(s.get(u))
          }
          l.appendChild(c)
        }
        n.appendChild(l)
      }
      o.$slider.empty().append(n), o.$slider.children().children().children().css({
        width: 100 / o.options.slidesPerRow + "%",
        display: "inline-block"
      })
    }
  }, t.prototype.checkResponsive = function(t, i) {
    var n, r, s, a = this,
      o = !1,
      l = a.$slider.width(),
      c = window.innerWidth || e(window).width();
    if ("window" === a.respondTo ? s = c : "slider" === a.respondTo ? s = l : "min" === a.respondTo && (s = Math.min(c, l)), a.options.responsive && a.options.responsive.length && null !== a.options.responsive) {
      for (n in r = null, a.breakpoints) a.breakpoints.hasOwnProperty(n) && (!1 === a.originalSettings.mobileFirst ? s < a.breakpoints[n] && (r = a.breakpoints[n]) : s > a.breakpoints[n] && (r = a.breakpoints[n]));
      null !== r ? null !== a.activeBreakpoint ? (r !== a.activeBreakpoint || i) && (a.activeBreakpoint = r, "unslick" === a.breakpointSettings[r] ? a.unslick(r) : (a.options = e.extend({}, a.originalSettings, a.breakpointSettings[r]), !0 === t && (a.currentSlide = a.options.initialSlide), a.refresh(t)), o = r) : (a.activeBreakpoint = r, "unslick" === a.breakpointSettings[r] ? a.unslick(r) : (a.options = e.extend({}, a.originalSettings, a.breakpointSettings[r]), !0 === t && (a.currentSlide = a.options.initialSlide), a.refresh(t)), o = r) : null !== a.activeBreakpoint && (a.activeBreakpoint = null, a.options = a.originalSettings, !0 === t && (a.currentSlide = a.options.initialSlide), a.refresh(t), o = r), t || !1 === o || a.$slider.trigger("breakpoint", [a, o])
    }
  }, t.prototype.changeSlide = function(t, i) {
    var n, r, s = this,
      a = e(t.currentTarget);
    switch (a.is("a") && t.preventDefault(), a.is("li") || (a = a.closest("li")), n = s.slideCount % s.options.slidesToScroll != 0 ? 0 : (s.slideCount - s.currentSlide) % s.options.slidesToScroll, t.data.message) {
      case "previous":
        r = 0 === n ? s.options.slidesToScroll : s.options.slidesToShow - n, s.slideCount > s.options.slidesToShow && s.slideHandler(s.currentSlide - r, !1, i);
        break;
      case "next":
        r = 0 === n ? s.options.slidesToScroll : n, s.slideCount > s.options.slidesToShow && s.slideHandler(s.currentSlide + r, !1, i);
        break;
      case "index":
        var o = 0 === t.data.index ? 0 : t.data.index || a.index() * s.options.slidesToScroll;
        s.slideHandler(s.checkNavigable(o), !1, i), a.children().trigger("focus");
        break;
      default:
        return
    }
  }, t.prototype.checkNavigable = function(e) {
    var t, i;
    if (i = 0, e > (t = this.getNavigableIndexes())[t.length - 1]) e = t[t.length - 1];
    else
      for (var n in t) {
        if (e < t[n]) {
          e = i;
          break
        }
        i = t[n]
      }
    return e
  }, t.prototype.cleanUpEvents = function() {
    var t = this;
    t.options.dots && null !== t.$dots && e("li", t.$dots).off("click.slick", t.changeSlide).off("mouseenter.slick", e.proxy(t.interrupt, t, !0)).off("mouseleave.slick", e.proxy(t.interrupt, t, !1)), t.$slider.off("focus.slick blur.slick"), !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && (t.$prevArrow && t.$prevArrow.off("click.slick", t.changeSlide), t.$nextArrow && t.$nextArrow.off("click.slick", t.changeSlide)), t.$list.off("touchstart.slick mousedown.slick", t.swipeHandler), t.$list.off("touchmove.slick mousemove.slick", t.swipeHandler), t.$list.off("touchend.slick mouseup.slick", t.swipeHandler), t.$list.off("touchcancel.slick mouseleave.slick", t.swipeHandler), t.$list.off("click.slick", t.clickHandler), e(document).off(t.visibilityChange, t.visibility), t.cleanUpSlideEvents(), !0 === t.options.accessibility && t.$list.off("keydown.slick", t.keyHandler), !0 === t.options.focusOnSelect && e(t.$slideTrack).children().off("click.slick", t.selectHandler), e(window).off("orientationchange.slick.slick-" + t.instanceUid, t.orientationChange), e(window).off("resize.slick.slick-" + t.instanceUid, t.resize), e("[draggable!=true]", t.$slideTrack).off("dragstart", t.preventDefault), e(window).off("load.slick.slick-" + t.instanceUid, t.setPosition), e(document).off("ready.slick.slick-" + t.instanceUid, t.setPosition)
  }, t.prototype.cleanUpSlideEvents = function() {
    var t = this;
    t.$list.off("mouseenter.slick", e.proxy(t.interrupt, t, !0)), t.$list.off("mouseleave.slick", e.proxy(t.interrupt, t, !1))
  }, t.prototype.cleanUpRows = function() {
    var e, t = this;
    t.options.rows > 1 && ((e = t.$slides.children().children()).removeAttr("style"), t.$slider.empty().append(e))
  }, t.prototype.clickHandler = function(e) {
    !1 === this.shouldClick && (e.stopImmediatePropagation(), e.stopPropagation(), e.preventDefault())
  }, t.prototype.destroy = function(t) {
    var i = this;
    i.autoPlayClear(), i.touchObject = {}, i.cleanUpEvents(), e(".slick-cloned", i.$slider).detach(), i.$dots && i.$dots.remove(), i.$prevArrow && i.$prevArrow.length && (i.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), i.htmlExpr.test(i.options.prevArrow) && i.$prevArrow.remove()), i.$nextArrow && i.$nextArrow.length && (i.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), i.htmlExpr.test(i.options.nextArrow) && i.$nextArrow.remove()), i.$slides && (i.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function() {
      e(this).attr("style", e(this).data("originalStyling"))
    }), i.$slideTrack.children(this.options.slide).detach(), i.$slideTrack.detach(), i.$list.detach(), i.$slider.append(i.$slides)), i.cleanUpRows(), i.$slider.removeClass("slick-slider"), i.$slider.removeClass("slick-initialized"), i.$slider.removeClass("slick-dotted"), i.unslicked = !0, t || i.$slider.trigger("destroy", [i])
  }, t.prototype.disableTransition = function(e) {
    var t = this,
      i = {};
    i[t.transitionType] = "", !1 === t.options.fade ? t.$slideTrack.css(i) : t.$slides.eq(e).css(i)
  }, t.prototype.fadeSlide = function(e, t) {
    var i = this;
    !1 === i.cssTransitions ? (i.$slides.eq(e).css({
      zIndex: i.options.zIndex
    }), i.$slides.eq(e).animate({
      opacity: 1
    }, i.options.speed, i.options.easing, t)) : (i.applyTransition(e), i.$slides.eq(e).css({
      opacity: 1,
      zIndex: i.options.zIndex
    }), t && setTimeout(function() {
      i.disableTransition(e), t.call()
    }, i.options.speed))
  }, t.prototype.fadeSlideOut = function(e) {
    var t = this;
    !1 === t.cssTransitions ? t.$slides.eq(e).animate({
      opacity: 0,
      zIndex: t.options.zIndex - 2
    }, t.options.speed, t.options.easing) : (t.applyTransition(e), t.$slides.eq(e).css({
      opacity: 0,
      zIndex: t.options.zIndex - 2
    }))
  }, t.prototype.filterSlides = t.prototype.slickFilter = function(e) {
    var t = this;
    null !== e && (t.$slidesCache = t.$slides, t.unload(), t.$slideTrack.children(this.options.slide).detach(), t.$slidesCache.filter(e).appendTo(t.$slideTrack), t.reinit())
  }, t.prototype.focusHandler = function() {
    var t = this;
    t.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*:not(.slick-arrow)", function(i) {
      i.stopImmediatePropagation();
      var n = e(this);
      setTimeout(function() {
        t.options.pauseOnFocus && (t.focussed = n.is(":focus"), t.autoPlay())
      }, 0)
    })
  }, t.prototype.getCurrent = t.prototype.slickCurrentSlide = function() {
    return this.currentSlide
  }, t.prototype.getDotCount = function() {
    var e = this,
      t = 0,
      i = 0,
      n = 0;
    if (!0 === e.options.infinite)
      for (; t < e.slideCount;) ++n, t = i + e.options.slidesToScroll, i += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
    else if (!0 === e.options.centerMode) n = e.slideCount;
    else if (e.options.asNavFor)
      for (; t < e.slideCount;) ++n, t = i + e.options.slidesToScroll, i += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
    else n = 1 + Math.ceil((e.slideCount - e.options.slidesToShow) / e.options.slidesToScroll);
    return n - 1
  }, t.prototype.getLeft = function(e) {
    var t, i, n, r = this,
      s = 0;
    return r.slideOffset = 0, i = r.$slides.first().outerHeight(!0), !0 === r.options.infinite ? (r.slideCount > r.options.slidesToShow && (r.slideOffset = r.slideWidth * r.options.slidesToShow * -1, s = i * r.options.slidesToShow * -1), r.slideCount % r.options.slidesToScroll != 0 && e + r.options.slidesToScroll > r.slideCount && r.slideCount > r.options.slidesToShow && (e > r.slideCount ? (r.slideOffset = (r.options.slidesToShow - (e - r.slideCount)) * r.slideWidth * -1, s = (r.options.slidesToShow - (e - r.slideCount)) * i * -1) : (r.slideOffset = r.slideCount % r.options.slidesToScroll * r.slideWidth * -1, s = r.slideCount % r.options.slidesToScroll * i * -1))) : e + r.options.slidesToShow > r.slideCount && (r.slideOffset = (e + r.options.slidesToShow - r.slideCount) * r.slideWidth, s = (e + r.options.slidesToShow - r.slideCount) * i), r.slideCount <= r.options.slidesToShow && (r.slideOffset = 0, s = 0), !0 === r.options.centerMode && !0 === r.options.infinite ? r.slideOffset += r.slideWidth * Math.floor(r.options.slidesToShow / 2) - r.slideWidth : !0 === r.options.centerMode && (r.slideOffset = 0, r.slideOffset += r.slideWidth * Math.floor(r.options.slidesToShow / 2)), t = !1 === r.options.vertical ? e * r.slideWidth * -1 + r.slideOffset : e * i * -1 + s, !0 === r.options.variableWidth && (n = r.slideCount <= r.options.slidesToShow || !1 === r.options.infinite ? r.$slideTrack.children(".slick-slide").eq(e) : r.$slideTrack.children(".slick-slide").eq(e + r.options.slidesToShow), t = !0 === r.options.rtl ? n[0] ? -1 * (r.$slideTrack.width() - n[0].offsetLeft - n.width()) : 0 : n[0] ? -1 * n[0].offsetLeft : 0, !0 === r.options.centerMode && (n = r.slideCount <= r.options.slidesToShow || !1 === r.options.infinite ? r.$slideTrack.children(".slick-slide").eq(e) : r.$slideTrack.children(".slick-slide").eq(e + r.options.slidesToShow + 1), t = !0 === r.options.rtl ? n[0] ? -1 * (r.$slideTrack.width() - n[0].offsetLeft - n.width()) : 0 : n[0] ? -1 * n[0].offsetLeft : 0, t += (r.$list.width() - n.outerWidth()) / 2)), t
  }, t.prototype.getOption = t.prototype.slickGetOption = function(e) {
    return this.options[e]
  }, t.prototype.getNavigableIndexes = function() {
    var e, t = this,
      i = 0,
      n = 0,
      r = [];
    for (!1 === t.options.infinite ? e = t.slideCount : (i = -1 * t.options.slidesToScroll, n = -1 * t.options.slidesToScroll, e = 2 * t.slideCount); e > i;) r.push(i), i = n + t.options.slidesToScroll, n += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow;
    return r
  }, t.prototype.getSlick = function() {
    return this
  }, t.prototype.getSlideCount = function() {
    var t, i, n = this;
    return i = !0 === n.options.centerMode ? n.slideWidth * Math.floor(n.options.slidesToShow / 2) : 0, !0 === n.options.swipeToSlide ? (n.$slideTrack.find(".slick-slide").each(function(r, s) {
      return s.offsetLeft - i + e(s).outerWidth() / 2 > -1 * n.swipeLeft ? (t = s, !1) : void 0
    }), Math.abs(e(t).attr("data-slick-index") - n.currentSlide) || 1) : n.options.slidesToScroll
  }, t.prototype.goTo = t.prototype.slickGoTo = function(e, t) {
    this.changeSlide({
      data: {
        message: "index",
        index: parseInt(e)
      }
    }, t)
  }, t.prototype.init = function(t) {
    var i = this;
    e(i.$slider).hasClass("slick-initialized") || (e(i.$slider).addClass("slick-initialized"), i.buildRows(), i.buildOut(), i.setProps(), i.startLoad(), i.loadSlider(), i.initializeEvents(), i.updateArrows(), i.updateDots(), i.checkResponsive(!0), i.focusHandler()), t && i.$slider.trigger("init", [i]), !0 === i.options.accessibility && i.initADA(), i.options.autoplay && (i.paused = !1, i.autoPlay())
  }, t.prototype.initADA = function() {
    var t = this;
    t.$slides.add(t.$slideTrack.find(".slick-cloned")).attr({
      "aria-hidden": "true",
      tabindex: "-1"
    }).find("a, input, button, select").attr({
      tabindex: "-1"
    }), t.$slideTrack.attr("role", "listbox"), t.$slides.not(t.$slideTrack.find(".slick-cloned")).each(function(i) {
      e(this).attr({
        role: "option",
        "aria-describedby": "slick-slide" + t.instanceUid + i
      })
    }), null !== t.$dots && t.$dots.attr("role", "tablist").find("li").each(function(i) {
      e(this).attr({
        role: "presentation",
        "aria-selected": "false",
        "aria-controls": "navigation" + t.instanceUid + i,
        id: "slick-slide" + t.instanceUid + i
      })
    }).first().attr("aria-selected", "true").end().find("button").attr("role", "button").end().closest("div").attr("role", "toolbar"), t.activateADA()
  }, t.prototype.initArrowEvents = function() {
    var e = this;
    !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.off("click.slick").on("click.slick", {
      message: "previous"
    }, e.changeSlide), e.$nextArrow.off("click.slick").on("click.slick", {
      message: "next"
    }, e.changeSlide))
  }, t.prototype.initDotEvents = function() {
    var t = this;
    !0 === t.options.dots && t.slideCount > t.options.slidesToShow && e("li", t.$dots).on("click.slick", {
      message: "index"
    }, t.changeSlide), !0 === t.options.dots && !0 === t.options.pauseOnDotsHover && e("li", t.$dots).on("mouseenter.slick", e.proxy(t.interrupt, t, !0)).on("mouseleave.slick", e.proxy(t.interrupt, t, !1))
  }, t.prototype.initSlideEvents = function() {
    var t = this;
    t.options.pauseOnHover && (t.$list.on("mouseenter.slick", e.proxy(t.interrupt, t, !0)), t.$list.on("mouseleave.slick", e.proxy(t.interrupt, t, !1)))
  }, t.prototype.initializeEvents = function() {
    var t = this;
    t.initArrowEvents(), t.initDotEvents(), t.initSlideEvents(), t.$list.on("touchstart.slick mousedown.slick", {
      action: "start"
    }, t.swipeHandler), t.$list.on("touchmove.slick mousemove.slick", {
      action: "move"
    }, t.swipeHandler), t.$list.on("touchend.slick mouseup.slick", {
      action: "end"
    }, t.swipeHandler), t.$list.on("touchcancel.slick mouseleave.slick", {
      action: "end"
    }, t.swipeHandler), t.$list.on("click.slick", t.clickHandler), e(document).on(t.visibilityChange, e.proxy(t.visibility, t)), !0 === t.options.accessibility && t.$list.on("keydown.slick", t.keyHandler), !0 === t.options.focusOnSelect && e(t.$slideTrack).children().on("click.slick", t.selectHandler), e(window).on("orientationchange.slick.slick-" + t.instanceUid, e.proxy(t.orientationChange, t)), e(window).on("resize.slick.slick-" + t.instanceUid, e.proxy(t.resize, t)), e("[draggable!=true]", t.$slideTrack).on("dragstart", t.preventDefault), e(window).on("load.slick.slick-" + t.instanceUid, t.setPosition), e(document).on("ready.slick.slick-" + t.instanceUid, t.setPosition)
  }, t.prototype.initUI = function() {
    var e = this;
    !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.show(), e.$nextArrow.show()), !0 === e.options.dots && e.slideCount > e.options.slidesToShow && e.$dots.show()
  }, t.prototype.keyHandler = function(e) {
    var t = this;
    e.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === e.keyCode && !0 === t.options.accessibility ? t.changeSlide({
      data: {
        message: !0 === t.options.rtl ? "next" : "previous"
      }
    }) : 39 === e.keyCode && !0 === t.options.accessibility && t.changeSlide({
      data: {
        message: !0 === t.options.rtl ? "previous" : "next"
      }
    }))
  }, t.prototype.lazyLoad = function() {
    function t(t) {
      e("img[data-lazy]", t).each(function() {
        var t = e(this),
          i = e(this).attr("data-lazy"),
          n = document.createElement("img");
        n.onload = function() {
          t.animate({
            opacity: 0
          }, 100, function() {
            t.attr("src", i).animate({
              opacity: 1
            }, 200, function() {
              t.removeAttr("data-lazy").removeClass("slick-loading")
            }), r.$slider.trigger("lazyLoaded", [r, t, i])
          })
        }, n.onerror = function() {
          t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), r.$slider.trigger("lazyLoadError", [r, t, i])
        }, n.src = i
      })
    }
    var i, n, r = this;
    !0 === r.options.centerMode ? !0 === r.options.infinite ? n = (i = r.currentSlide + (r.options.slidesToShow / 2 + 1)) + r.options.slidesToShow + 2 : (i = Math.max(0, r.currentSlide - (r.options.slidesToShow / 2 + 1)), n = r.options.slidesToShow / 2 + 1 + 2 + r.currentSlide) : (i = r.options.infinite ? r.options.slidesToShow + r.currentSlide : r.currentSlide, n = Math.ceil(i + r.options.slidesToShow), !0 === r.options.fade && (i > 0 && i--, n <= r.slideCount && n++)), t(r.$slider.find(".slick-slide").slice(i, n)), r.slideCount <= r.options.slidesToShow ? t(r.$slider.find(".slick-slide")) : r.currentSlide >= r.slideCount - r.options.slidesToShow ? t(r.$slider.find(".slick-cloned").slice(0, r.options.slidesToShow)) : 0 === r.currentSlide && t(r.$slider.find(".slick-cloned").slice(-1 * r.options.slidesToShow))
  }, t.prototype.loadSlider = function() {
    var e = this;
    e.setPosition(), e.$slideTrack.css({
      opacity: 1
    }), e.$slider.removeClass("slick-loading"), e.initUI(), "progressive" === e.options.lazyLoad && e.progressiveLazyLoad()
  }, t.prototype.next = t.prototype.slickNext = function() {
    this.changeSlide({
      data: {
        message: "next"
      }
    })
  }, t.prototype.orientationChange = function() {
    this.checkResponsive(), this.setPosition()
  }, t.prototype.pause = t.prototype.slickPause = function() {
    this.autoPlayClear(), this.paused = !0
  }, t.prototype.play = t.prototype.slickPlay = function() {
    var e = this;
    e.autoPlay(), e.options.autoplay = !0, e.paused = !1, e.focussed = !1, e.interrupted = !1
  }, t.prototype.postSlide = function(e) {
    var t = this;
    t.unslicked || (t.$slider.trigger("afterChange", [t, e]), t.animating = !1, t.setPosition(), t.swipeLeft = null, t.options.autoplay && t.autoPlay(), !0 === t.options.accessibility && t.initADA())
  }, t.prototype.prev = t.prototype.slickPrev = function() {
    this.changeSlide({
      data: {
        message: "previous"
      }
    })
  }, t.prototype.preventDefault = function(e) {
    e.preventDefault()
  }, t.prototype.progressiveLazyLoad = function(t) {
    t = t || 1;
    var i, n, r, s = this,
      a = e("img[data-lazy]", s.$slider);
    a.length ? (i = a.first(), n = i.attr("data-lazy"), (r = document.createElement("img")).onload = function() {
      i.attr("src", n).removeAttr("data-lazy").removeClass("slick-loading"), !0 === s.options.adaptiveHeight && s.setPosition(), s.$slider.trigger("lazyLoaded", [s, i, n]), s.progressiveLazyLoad()
    }, r.onerror = function() {
      3 > t ? setTimeout(function() {
        s.progressiveLazyLoad(t + 1)
      }, 500) : (i.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), s.$slider.trigger("lazyLoadError", [s, i, n]), s.progressiveLazyLoad())
    }, r.src = n) : s.$slider.trigger("allImagesLoaded", [s])
  }, t.prototype.refresh = function(t) {
    var i, n, r = this;
    n = r.slideCount - r.options.slidesToShow, !r.options.infinite && r.currentSlide > n && (r.currentSlide = n), r.slideCount <= r.options.slidesToShow && (r.currentSlide = 0), i = r.currentSlide, r.destroy(!0), e.extend(r, r.initials, {
      currentSlide: i
    }), r.init(), t || r.changeSlide({
      data: {
        message: "index",
        index: i
      }
    }, !1)
  }, t.prototype.registerBreakpoints = function() {
    var t, i, n, r = this,
      s = r.options.responsive || null;
    if ("array" === e.type(s) && s.length) {
      for (t in r.respondTo = r.options.respondTo || "window", s)
        if (n = r.breakpoints.length - 1, i = s[t].breakpoint, s.hasOwnProperty(t)) {
          for (; n >= 0;) r.breakpoints[n] && r.breakpoints[n] === i && r.breakpoints.splice(n, 1), n--;
          r.breakpoints.push(i), r.breakpointSettings[i] = s[t].settings
        } r.breakpoints.sort(function(e, t) {
        return r.options.mobileFirst ? e - t : t - e
      })
    }
  }, t.prototype.reinit = function() {
    var t = this;
    t.$slides = t.$slideTrack.children(t.options.slide).addClass("slick-slide"), t.slideCount = t.$slides.length, t.currentSlide >= t.slideCount && 0 !== t.currentSlide && (t.currentSlide = t.currentSlide - t.options.slidesToScroll), t.slideCount <= t.options.slidesToShow && (t.currentSlide = 0), t.registerBreakpoints(), t.setProps(), t.setupInfinite(), t.buildArrows(), t.updateArrows(), t.initArrowEvents(), t.buildDots(), t.updateDots(), t.initDotEvents(), t.cleanUpSlideEvents(), t.initSlideEvents(), t.checkResponsive(!1, !0), !0 === t.options.focusOnSelect && e(t.$slideTrack).children().on("click.slick", t.selectHandler), t.setSlideClasses("number" == typeof t.currentSlide ? t.currentSlide : 0), t.setPosition(), t.focusHandler(), t.paused = !t.options.autoplay, t.autoPlay(), t.$slider.trigger("reInit", [t])
  }, t.prototype.resize = function() {
    var t = this;
    e(window).width() !== t.windowWidth && (clearTimeout(t.windowDelay), t.windowDelay = window.setTimeout(function() {
      t.windowWidth = e(window).width(), t.checkResponsive(), t.unslicked || t.setPosition()
    }, 50))
  }, t.prototype.removeSlide = t.prototype.slickRemove = function(e, t, i) {
    var n = this;
    return "boolean" == typeof e ? e = !0 === (t = e) ? 0 : n.slideCount - 1 : e = !0 === t ? --e : e, !(n.slideCount < 1 || 0 > e || e > n.slideCount - 1) && (n.unload(), !0 === i ? n.$slideTrack.children().remove() : n.$slideTrack.children(this.options.slide).eq(e).remove(), n.$slides = n.$slideTrack.children(this.options.slide), n.$slideTrack.children(this.options.slide).detach(), n.$slideTrack.append(n.$slides), n.$slidesCache = n.$slides, void n.reinit())
  }, t.prototype.setCSS = function(e) {
    var t, i, n = this,
      r = {};
    !0 === n.options.rtl && (e = -e), t = "left" == n.positionProp ? Math.ceil(e) + "px" : "0px", i = "top" == n.positionProp ? Math.ceil(e) + "px" : "0px", r[n.positionProp] = e, !1 === n.transformsEnabled ? n.$slideTrack.css(r) : (r = {}, !1 === n.cssTransitions ? (r[n.animType] = "translate(" + t + ", " + i + ")", n.$slideTrack.css(r)) : (r[n.animType] = "translate3d(" + t + ", " + i + ", 0px)", n.$slideTrack.css(r)))
  }, t.prototype.setDimensions = function() {
    var e = this;
    !1 === e.options.vertical ? !0 === e.options.centerMode && e.$list.css({
      padding: "0px " + e.options.centerPadding
    }) : (e.$list.height(e.$slides.first().outerHeight(!0) * e.options.slidesToShow), !0 === e.options.centerMode && e.$list.css({
      padding: e.options.centerPadding + " 0px"
    })), e.listWidth = e.$list.width(), e.listHeight = e.$list.height(), !1 === e.options.vertical && !1 === e.options.variableWidth ? (e.slideWidth = Math.ceil(e.listWidth / e.options.slidesToShow), e.$slideTrack.width(Math.ceil(e.slideWidth * e.$slideTrack.children(".slick-slide").length))) : !0 === e.options.variableWidth ? e.$slideTrack.width(5e3 * e.slideCount) : (e.slideWidth = Math.ceil(e.listWidth), e.$slideTrack.height(Math.ceil(e.$slides.first().outerHeight(!0) * e.$slideTrack.children(".slick-slide").length)));
    var t = e.$slides.first().outerWidth(!0) - e.$slides.first().width();
    !1 === e.options.variableWidth && e.$slideTrack.children(".slick-slide").width(e.slideWidth - t)
  }, t.prototype.setFade = function() {
    var t, i = this;
    i.$slides.each(function(n, r) {
      t = i.slideWidth * n * -1, !0 === i.options.rtl ? e(r).css({
        position: "relative",
        right: t,
        top: 0,
        zIndex: i.options.zIndex - 2,
        opacity: 0
      }) : e(r).css({
        position: "relative",
        left: t,
        top: 0,
        zIndex: i.options.zIndex - 2,
        opacity: 0
      })
    }), i.$slides.eq(i.currentSlide).css({
      zIndex: i.options.zIndex - 1,
      opacity: 1
    })
  }, t.prototype.setHeight = function() {
    var e = this;
    if (1 === e.options.slidesToShow && !0 === e.options.adaptiveHeight && !1 === e.options.vertical) {
      var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
      e.$list.css("height", t)
    }
  }, t.prototype.setOption = t.prototype.slickSetOption = function() {
    var t, i, n, r, s, a = this,
      o = !1;
    if ("object" === e.type(arguments[0]) ? (n = arguments[0], o = arguments[1], s = "multiple") : "string" === e.type(arguments[0]) && (n = arguments[0], r = arguments[1], o = arguments[2], "responsive" === arguments[0] && "array" === e.type(arguments[1]) ? s = "responsive" : void 0 !== arguments[1] && (s = "single")), "single" === s) a.options[n] = r;
    else if ("multiple" === s) e.each(n, function(e, t) {
      a.options[e] = t
    });
    else if ("responsive" === s)
      for (i in r)
        if ("array" !== e.type(a.options.responsive)) a.options.responsive = [r[i]];
        else {
          for (t = a.options.responsive.length - 1; t >= 0;) a.options.responsive[t].breakpoint === r[i].breakpoint && a.options.responsive.splice(t, 1), t--;
          a.options.responsive.push(r[i])
        } o && (a.unload(), a.reinit())
  }, t.prototype.setPosition = function() {
    var e = this;
    e.setDimensions(), e.setHeight(), !1 === e.options.fade ? e.setCSS(e.getLeft(e.currentSlide)) : e.setFade(), e.$slider.trigger("setPosition", [e])
  }, t.prototype.setProps = function() {
    var e = this,
      t = document.body.style;
    e.positionProp = !0 === e.options.vertical ? "top" : "left", "top" === e.positionProp ? e.$slider.addClass("slick-vertical") : e.$slider.removeClass("slick-vertical"), (void 0 !== t.WebkitTransition || void 0 !== t.MozTransition || void 0 !== t.msTransition) && !0 === e.options.useCSS && (e.cssTransitions = !0), e.options.fade && ("number" == typeof e.options.zIndex ? e.options.zIndex < 3 && (e.options.zIndex = 3) : e.options.zIndex = e.defaults.zIndex), void 0 !== t.OTransform && (e.animType = "OTransform", e.transformType = "-o-transform", e.transitionType = "OTransition", void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)), void 0 !== t.MozTransform && (e.animType = "MozTransform", e.transformType = "-moz-transform", e.transitionType = "MozTransition", void 0 === t.perspectiveProperty && void 0 === t.MozPerspective && (e.animType = !1)), void 0 !== t.webkitTransform && (e.animType = "webkitTransform", e.transformType = "-webkit-transform", e.transitionType = "webkitTransition", void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)), void 0 !== t.msTransform && (e.animType = "msTransform", e.transformType = "-ms-transform", e.transitionType = "msTransition", void 0 === t.msTransform && (e.animType = !1)), void 0 !== t.transform && !1 !== e.animType && (e.animType = "transform", e.transformType = "transform", e.transitionType = "transition"), e.transformsEnabled = e.options.useTransform && null !== e.animType && !1 !== e.animType
  }, t.prototype.setSlideClasses = function(e) {
    var t, i, n, r, s = this;
    i = s.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), s.$slides.eq(e).addClass("slick-current"), !0 === s.options.centerMode ? (t = Math.floor(s.options.slidesToShow / 2), !0 === s.options.infinite && (e >= t && e <= s.slideCount - 1 - t ? s.$slides.slice(e - t, e + t + 1).addClass("slick-active").attr("aria-hidden", "false") : (n = s.options.slidesToShow + e, i.slice(n - t + 1, n + t + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === e ? i.eq(i.length - 1 - s.options.slidesToShow).addClass("slick-center") : e === s.slideCount - 1 && i.eq(s.options.slidesToShow).addClass("slick-center")), s.$slides.eq(e).addClass("slick-center")) : e >= 0 && e <= s.slideCount - s.options.slidesToShow ? s.$slides.slice(e, e + s.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : i.length <= s.options.slidesToShow ? i.addClass("slick-active").attr("aria-hidden", "false") : (r = s.slideCount % s.options.slidesToShow, n = !0 === s.options.infinite ? s.options.slidesToShow + e : e, s.options.slidesToShow == s.options.slidesToScroll && s.slideCount - e < s.options.slidesToShow ? i.slice(n - (s.options.slidesToShow - r), n + r).addClass("slick-active").attr("aria-hidden", "false") : i.slice(n, n + s.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false")), "ondemand" === s.options.lazyLoad && s.lazyLoad()
  }, t.prototype.setupInfinite = function() {
    var t, i, n, r = this;
    if (!0 === r.options.fade && (r.options.centerMode = !1), !0 === r.options.infinite && !1 === r.options.fade && (i = null, r.slideCount > r.options.slidesToShow)) {
      for (n = !0 === r.options.centerMode ? r.options.slidesToShow + 1 : r.options.slidesToShow, t = r.slideCount; t > r.slideCount - n; t -= 1) i = t - 1, e(r.$slides[i]).clone(!0).attr("id", "").attr("data-slick-index", i - r.slideCount).prependTo(r.$slideTrack).addClass("slick-cloned");
      for (t = 0; n > t; t += 1) i = t, e(r.$slides[i]).clone(!0).attr("id", "").attr("data-slick-index", i + r.slideCount).appendTo(r.$slideTrack).addClass("slick-cloned");
      r.$slideTrack.find(".slick-cloned").find("[id]").each(function() {
        e(this).attr("id", "")
      })
    }
  }, t.prototype.interrupt = function(e) {
    e || this.autoPlay(), this.interrupted = e
  }, t.prototype.selectHandler = function(t) {
    var i = this,
      n = e(t.target).is(".slick-slide") ? e(t.target) : e(t.target).parents(".slick-slide"),
      r = parseInt(n.attr("data-slick-index"));
    return r || (r = 0), i.slideCount <= i.options.slidesToShow ? (i.setSlideClasses(r), void i.asNavFor(r)) : void i.slideHandler(r)
  }, t.prototype.slideHandler = function(e, t, i) {
    var n, r, s, a, o, l = null,
      c = this;
    return t = t || !1, !0 === c.animating && !0 === c.options.waitForAnimate || !0 === c.options.fade && c.currentSlide === e || c.slideCount <= c.options.slidesToShow ? void 0 : (!1 === t && c.asNavFor(e), n = e, l = c.getLeft(n), a = c.getLeft(c.currentSlide), c.currentLeft = null === c.swipeLeft ? a : c.swipeLeft, !1 === c.options.infinite && !1 === c.options.centerMode && (0 > e || e > c.getDotCount() * c.options.slidesToScroll) ? void(!1 === c.options.fade && (n = c.currentSlide, !0 !== i ? c.animateSlide(a, function() {
      c.postSlide(n)
    }) : c.postSlide(n))) : !1 === c.options.infinite && !0 === c.options.centerMode && (0 > e || e > c.slideCount - c.options.slidesToScroll) ? void(!1 === c.options.fade && (n = c.currentSlide, !0 !== i ? c.animateSlide(a, function() {
      c.postSlide(n)
    }) : c.postSlide(n))) : (c.options.autoplay && clearInterval(c.autoPlayTimer), r = 0 > n ? c.slideCount % c.options.slidesToScroll != 0 ? c.slideCount - c.slideCount % c.options.slidesToScroll : c.slideCount + n : n >= c.slideCount ? c.slideCount % c.options.slidesToScroll != 0 ? 0 : n - c.slideCount : n, c.animating = !0, c.$slider.trigger("beforeChange", [c, c.currentSlide, r]), s = c.currentSlide, c.currentSlide = r, c.setSlideClasses(c.currentSlide), c.options.asNavFor && ((o = (o = c.getNavTarget()).slick("getSlick")).slideCount <= o.options.slidesToShow && o.setSlideClasses(c.currentSlide)), c.updateDots(), c.updateArrows(), !0 === c.options.fade ? (!0 !== i ? (c.fadeSlideOut(s), c.fadeSlide(r, function() {
      c.postSlide(r)
    })) : c.postSlide(r), void c.animateHeight()) : void(!0 !== i ? c.animateSlide(l, function() {
      c.postSlide(r)
    }) : c.postSlide(r))))
  }, t.prototype.startLoad = function() {
    var e = this;
    !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow.hide(), e.$nextArrow.hide()), !0 === e.options.dots && e.slideCount > e.options.slidesToShow && e.$dots.hide(), e.$slider.addClass("slick-loading")
  }, t.prototype.swipeDirection = function() {
    var e, t, i, n, r = this;
    return e = r.touchObject.startX - r.touchObject.curX, t = r.touchObject.startY - r.touchObject.curY, i = Math.atan2(t, e), 0 > (n = Math.round(180 * i / Math.PI)) && (n = 360 - Math.abs(n)), 45 >= n && n >= 0 ? !1 === r.options.rtl ? "left" : "right" : 360 >= n && n >= 315 ? !1 === r.options.rtl ? "left" : "right" : n >= 135 && 225 >= n ? !1 === r.options.rtl ? "right" : "left" : !0 === r.options.verticalSwiping ? n >= 35 && 135 >= n ? "down" : "up" : "vertical"
  }, t.prototype.swipeEnd = function(e) {
    var t, i, n = this;
    if (n.dragging = !1, n.interrupted = !1, n.shouldClick = !(n.touchObject.swipeLength > 10), void 0 === n.touchObject.curX) return !1;
    if (!0 === n.touchObject.edgeHit && n.$slider.trigger("edge", [n, n.swipeDirection()]), n.touchObject.swipeLength >= n.touchObject.minSwipe) {
      switch (i = n.swipeDirection()) {
        case "left":
        case "down":
          t = n.options.swipeToSlide ? n.checkNavigable(n.currentSlide + n.getSlideCount()) : n.currentSlide + n.getSlideCount(), n.currentDirection = 0;
          break;
        case "right":
        case "up":
          t = n.options.swipeToSlide ? n.checkNavigable(n.currentSlide - n.getSlideCount()) : n.currentSlide - n.getSlideCount(), n.currentDirection = 1
      }
      "vertical" != i && (n.slideHandler(t), n.touchObject = {}, n.$slider.trigger("swipe", [n, i]))
    } else n.touchObject.startX !== n.touchObject.curX && (n.slideHandler(n.currentSlide), n.touchObject = {})
  }, t.prototype.swipeHandler = function(e) {
    var t = this;
    if (!(!1 === t.options.swipe || "ontouchend" in document && !1 === t.options.swipe || !1 === t.options.draggable && -1 !== e.type.indexOf("mouse"))) switch (t.touchObject.fingerCount = e.originalEvent && void 0 !== e.originalEvent.touches ? e.originalEvent.touches.length : 1, t.touchObject.minSwipe = t.listWidth / t.options.touchThreshold, !0 === t.options.verticalSwiping && (t.touchObject.minSwipe = t.listHeight / t.options.touchThreshold), e.data.action) {
      case "start":
        t.swipeStart(e);
        break;
      case "move":
        t.swipeMove(e);
        break;
      case "end":
        t.swipeEnd(e)
    }
  }, t.prototype.swipeMove = function(e) {
    var t, i, n, r, s, a = this;
    return s = void 0 !== e.originalEvent ? e.originalEvent.touches : null, !(!a.dragging || s && 1 !== s.length) && (t = a.getLeft(a.currentSlide), a.touchObject.curX = void 0 !== s ? s[0].pageX : e.clientX, a.touchObject.curY = void 0 !== s ? s[0].pageY : e.clientY, a.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(a.touchObject.curX - a.touchObject.startX, 2))), !0 === a.options.verticalSwiping && (a.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(a.touchObject.curY - a.touchObject.startY, 2)))), "vertical" !== (i = a.swipeDirection()) ? (void 0 !== e.originalEvent && a.touchObject.swipeLength > 4 && e.preventDefault(), r = (!1 === a.options.rtl ? 1 : -1) * (a.touchObject.curX > a.touchObject.startX ? 1 : -1), !0 === a.options.verticalSwiping && (r = a.touchObject.curY > a.touchObject.startY ? 1 : -1), n = a.touchObject.swipeLength, a.touchObject.edgeHit = !1, !1 === a.options.infinite && (0 === a.currentSlide && "right" === i || a.currentSlide >= a.getDotCount() && "left" === i) && (n = a.touchObject.swipeLength * a.options.edgeFriction, a.touchObject.edgeHit = !0), !1 === a.options.vertical ? a.swipeLeft = t + n * r : a.swipeLeft = t + n * (a.$list.height() / a.listWidth) * r, !0 === a.options.verticalSwiping && (a.swipeLeft = t + n * r), !0 !== a.options.fade && !1 !== a.options.touchMove && (!0 === a.animating ? (a.swipeLeft = null, !1) : void a.setCSS(a.swipeLeft))) : void 0)
  }, t.prototype.swipeStart = function(e) {
    var t, i = this;
    return i.interrupted = !0, 1 !== i.touchObject.fingerCount || i.slideCount <= i.options.slidesToShow ? (i.touchObject = {}, !1) : (void 0 !== e.originalEvent && void 0 !== e.originalEvent.touches && (t = e.originalEvent.touches[0]), i.touchObject.startX = i.touchObject.curX = void 0 !== t ? t.pageX : e.clientX, i.touchObject.startY = i.touchObject.curY = void 0 !== t ? t.pageY : e.clientY, void(i.dragging = !0))
  }, t.prototype.unfilterSlides = t.prototype.slickUnfilter = function() {
    var e = this;
    null !== e.$slidesCache && (e.unload(), e.$slideTrack.children(this.options.slide).detach(), e.$slidesCache.appendTo(e.$slideTrack), e.reinit())
  }, t.prototype.unload = function() {
    var t = this;
    e(".slick-cloned", t.$slider).remove(), t.$dots && t.$dots.remove(), t.$prevArrow && t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.remove(), t.$nextArrow && t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.remove(), t.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
  }, t.prototype.unslick = function(e) {
    var t = this;
    t.$slider.trigger("unslick", [t, e]), t.destroy()
  }, t.prototype.updateArrows = function() {
    var e = this;
    Math.floor(e.options.slidesToShow / 2), !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && !e.options.infinite && (e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === e.currentSlide ? (e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : e.currentSlide >= e.slideCount - e.options.slidesToShow && !1 === e.options.centerMode ? (e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : e.currentSlide >= e.slideCount - 1 && !0 === e.options.centerMode && (e.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
  }, t.prototype.updateDots = function() {
    var e = this;
    null !== e.$dots && (e.$dots.find("li").removeClass("slick-active").attr("aria-hidden", "true"), e.$dots.find("li").eq(Math.floor(e.currentSlide / e.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden", "false"))
  }, t.prototype.visibility = function() {
    var e = this;
    e.options.autoplay && (document[e.hidden] ? e.interrupted = !0 : e.interrupted = !1)
  }, e.fn.slick = function() {
    var e, i, n = this,
      r = arguments[0],
      s = Array.prototype.slice.call(arguments, 1),
      a = n.length;
    for (e = 0; a > e; e++)
      if ("object" == typeof r || void 0 === r ? n[e].slick = new t(n[e], r) : i = n[e].slick[r].apply(n[e].slick, s), void 0 !== i) return i;
    return n
  }
}),
function(e, t) {
  "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.moment = t()
}(this, function() {
  "use strict";
  var e, t;

  function i() {
    return e.apply(null, arguments)
  }

  function n(e) {
    return e instanceof Array || "[object Array]" === Object.prototype.toString.call(e)
  }

  function r(e) {
    return null != e && "[object Object]" === Object.prototype.toString.call(e)
  }

  function s(e) {
    return void 0 === e
  }

  function a(e) {
    return "number" == typeof e || "[object Number]" === Object.prototype.toString.call(e)
  }

  function o(e) {
    return e instanceof Date || "[object Date]" === Object.prototype.toString.call(e)
  }

  function l(e, t) {
    var i, n = [];
    for (i = 0; i < e.length; ++i) n.push(t(e[i], i));
    return n
  }

  function c(e, t) {
    return Object.prototype.hasOwnProperty.call(e, t)
  }

  function u(e, t) {
    for (var i in t) c(t, i) && (e[i] = t[i]);
    return c(t, "toString") && (e.toString = t.toString), c(t, "valueOf") && (e.valueOf = t.valueOf), e
  }

  function d(e, t, i, n) {
    return xt(e, t, i, n, !0).utc()
  }

  function h(e) {
    return null == e._pf && (e._pf = {
      empty: !1,
      unusedTokens: [],
      unusedInput: [],
      overflow: -2,
      charsLeftOver: 0,
      nullInput: !1,
      invalidMonth: null,
      invalidFormat: !1,
      userInvalidated: !1,
      iso: !1,
      parsedDateParts: [],
      meridiem: null,
      rfc2822: !1,
      weekdayMismatch: !1
    }), e._pf
  }

  function p(e) {
    if (null == e._isValid) {
      var i = h(e),
        n = t.call(i.parsedDateParts, function(e) {
          return null != e
        }),
        r = !isNaN(e._d.getTime()) && i.overflow < 0 && !i.empty && !i.invalidMonth && !i.invalidWeekday && !i.weekdayMismatch && !i.nullInput && !i.invalidFormat && !i.userInvalidated && (!i.meridiem || i.meridiem && n);
      if (e._strict && (r = r && 0 === i.charsLeftOver && 0 === i.unusedTokens.length && void 0 === i.bigHour), null != Object.isFrozen && Object.isFrozen(e)) return r;
      e._isValid = r
    }
    return e._isValid
  }

  function f(e) {
    var t = d(NaN);
    return null != e ? u(h(t), e) : h(t).userInvalidated = !0, t
  }
  t = Array.prototype.some ? Array.prototype.some : function(e) {
    for (var t = Object(this), i = t.length >>> 0, n = 0; n < i; n++)
      if (n in t && e.call(this, t[n], n, t)) return !0;
    return !1
  };
  var m = i.momentProperties = [];

  function g(e, t) {
    var i, n, r;
    if (s(t._isAMomentObject) || (e._isAMomentObject = t._isAMomentObject), s(t._i) || (e._i = t._i), s(t._f) || (e._f = t._f), s(t._l) || (e._l = t._l), s(t._strict) || (e._strict = t._strict), s(t._tzm) || (e._tzm = t._tzm), s(t._isUTC) || (e._isUTC = t._isUTC), s(t._offset) || (e._offset = t._offset), s(t._pf) || (e._pf = h(t)), s(t._locale) || (e._locale = t._locale), 0 < m.length)
      for (i = 0; i < m.length; i++) s(r = t[n = m[i]]) || (e[n] = r);
    return e
  }
  var y = !1;

  function v(e) {
    g(this, e), this._d = new Date(null != e._d ? e._d.getTime() : NaN), this.isValid() || (this._d = new Date(NaN)), !1 === y && (y = !0, i.updateOffset(this), y = !1)
  }

  function _(e) {
    return e instanceof v || null != e && null != e._isAMomentObject
  }

  function b(e) {
    return e < 0 ? Math.ceil(e) || 0 : Math.floor(e)
  }

  function w(e) {
    var t = +e,
      i = 0;
    return 0 !== t && isFinite(t) && (i = b(t)), i
  }

  function T(e, t, i) {
    var n, r = Math.min(e.length, t.length),
      s = Math.abs(e.length - t.length),
      a = 0;
    for (n = 0; n < r; n++)(i && e[n] !== t[n] || !i && w(e[n]) !== w(t[n])) && a++;
    return a + s
  }

  function A(e) {
    !1 === i.suppressDeprecationWarnings && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + e)
  }

  function k(e, t) {
    var n = !0;
    return u(function() {
      if (null != i.deprecationHandler && i.deprecationHandler(null, e), n) {
        for (var r, s = [], a = 0; a < arguments.length; a++) {
          if (r = "", "object" == typeof arguments[a]) {
            for (var o in r += "\n[" + a + "] ", arguments[0]) r += o + ": " + arguments[0][o] + ", ";
            r = r.slice(0, -2)
          } else r = arguments[a];
          s.push(r)
        }
        A(e + "\nArguments: " + Array.prototype.slice.call(s).join("") + "\n" + (new Error).stack), n = !1
      }
      return t.apply(this, arguments)
    }, t)
  }
  var x, S = {};

  function C(e, t) {
    null != i.deprecationHandler && i.deprecationHandler(e, t), S[e] || (A(t), S[e] = !0)
  }

  function E(e) {
    return e instanceof Function || "[object Function]" === Object.prototype.toString.call(e)
  }

  function P(e, t) {
    var i, n = u({}, e);
    for (i in t) c(t, i) && (r(e[i]) && r(t[i]) ? (n[i] = {}, u(n[i], e[i]), u(n[i], t[i])) : null != t[i] ? n[i] = t[i] : delete n[i]);
    for (i in e) c(e, i) && !c(t, i) && r(e[i]) && (n[i] = u({}, n[i]));
    return n
  }

  function M(e) {
    null != e && this.set(e)
  }
  i.suppressDeprecationWarnings = !1, i.deprecationHandler = null, x = Object.keys ? Object.keys : function(e) {
    var t, i = [];
    for (t in e) c(e, t) && i.push(t);
    return i
  };
  var O = {};

  function D(e, t) {
    var i = e.toLowerCase();
    O[i] = O[i + "s"] = O[t] = e
  }

  function N(e) {
    return "string" == typeof e ? O[e] || O[e.toLowerCase()] : void 0
  }

  function L(e) {
    var t, i, n = {};
    for (i in e) c(e, i) && (t = N(i)) && (n[t] = e[i]);
    return n
  }
  var z = {};

  function R(e, t) {
    z[e] = t
  }

  function j(e, t, i) {
    var n = "" + Math.abs(e),
      r = t - n.length;
    return (0 <= e ? i ? "+" : "" : "-") + Math.pow(10, Math.max(0, r)).toString().substr(1) + n
  }
  var I = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
    F = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
    H = {},
    Y = {};

  function q(e, t, i, n) {
    var r = n;
    "string" == typeof n && (r = function() {
      return this[n]()
    }), e && (Y[e] = r), t && (Y[t[0]] = function() {
      return j(r.apply(this, arguments), t[1], t[2])
    }), i && (Y[i] = function() {
      return this.localeData().ordinal(r.apply(this, arguments), e)
    })
  }

  function $(e, t) {
    return e.isValid() ? (t = B(t, e.localeData()), H[t] = H[t] || function(e) {
      var t, i, n, r = e.match(I);
      for (t = 0, i = r.length; t < i; t++) Y[r[t]] ? r[t] = Y[r[t]] : r[t] = (n = r[t]).match(/\[[\s\S]/) ? n.replace(/^\[|\]$/g, "") : n.replace(/\\/g, "");
      return function(t) {
        var n, s = "";
        for (n = 0; n < i; n++) s += E(r[n]) ? r[n].call(t, e) : r[n];
        return s
      }
    }(t), H[t](e)) : e.localeData().invalidDate()
  }

  function B(e, t) {
    var i = 5;

    function n(e) {
      return t.longDateFormat(e) || e
    }
    for (F.lastIndex = 0; 0 <= i && F.test(e);) e = e.replace(F, n), F.lastIndex = 0, i -= 1;
    return e
  }
  var W = /\d/,
    U = /\d\d/,
    G = /\d{3}/,
    V = /\d{4}/,
    X = /[+-]?\d{6}/,
    K = /\d\d?/,
    Z = /\d\d\d\d?/,
    Q = /\d\d\d\d\d\d?/,
    J = /\d{1,3}/,
    ee = /\d{1,4}/,
    te = /[+-]?\d{1,6}/,
    ie = /\d+/,
    ne = /[+-]?\d+/,
    re = /Z|[+-]\d\d:?\d\d/gi,
    se = /Z|[+-]\d\d(?::?\d\d)?/gi,
    ae = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,
    oe = {};

  function le(e, t, i) {
    oe[e] = E(t) ? t : function(e, n) {
      return e && i ? i : t
    }
  }

  function ce(e, t) {
    return c(oe, e) ? oe[e](t._strict, t._locale) : new RegExp(ue(e.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function(e, t, i, n, r) {
      return t || i || n || r
    })))
  }

  function ue(e) {
    return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
  }
  var de = {};

  function he(e, t) {
    var i, n = t;
    for ("string" == typeof e && (e = [e]), a(t) && (n = function(e, i) {
        i[t] = w(e)
      }), i = 0; i < e.length; i++) de[e[i]] = n
  }

  function pe(e, t) {
    he(e, function(e, i, n, r) {
      n._w = n._w || {}, t(e, n._w, n, r)
    })
  }
  var fe = 0,
    me = 1,
    ge = 2,
    ye = 3,
    ve = 4,
    _e = 5,
    be = 6,
    we = 7,
    Te = 8;

  function Ae(e) {
    return ke(e) ? 366 : 365
  }

  function ke(e) {
    return e % 4 == 0 && e % 100 != 0 || e % 400 == 0
  }
  q("Y", 0, 0, function() {
    var e = this.year();
    return e <= 9999 ? "" + e : "+" + e
  }), q(0, ["YY", 2], 0, function() {
    return this.year() % 100
  }), q(0, ["YYYY", 4], 0, "year"), q(0, ["YYYYY", 5], 0, "year"), q(0, ["YYYYYY", 6, !0], 0, "year"), D("year", "y"), R("year", 1), le("Y", ne), le("YY", K, U), le("YYYY", ee, V), le("YYYYY", te, X), le("YYYYYY", te, X), he(["YYYYY", "YYYYYY"], fe), he("YYYY", function(e, t) {
    t[fe] = 2 === e.length ? i.parseTwoDigitYear(e) : w(e)
  }), he("YY", function(e, t) {
    t[fe] = i.parseTwoDigitYear(e)
  }), he("Y", function(e, t) {
    t[fe] = parseInt(e, 10)
  }), i.parseTwoDigitYear = function(e) {
    return w(e) + (68 < w(e) ? 1900 : 2e3)
  };
  var xe, Se = Ce("FullYear", !0);

  function Ce(e, t) {
    return function(n) {
      return null != n ? (Pe(this, e, n), i.updateOffset(this, t), this) : Ee(this, e)
    }
  }

  function Ee(e, t) {
    return e.isValid() ? e._d["get" + (e._isUTC ? "UTC" : "") + t]() : NaN
  }

  function Pe(e, t, i) {
    e.isValid() && !isNaN(i) && ("FullYear" === t && ke(e.year()) && 1 === e.month() && 29 === e.date() ? e._d["set" + (e._isUTC ? "UTC" : "") + t](i, e.month(), Me(i, e.month())) : e._d["set" + (e._isUTC ? "UTC" : "") + t](i))
  }

  function Me(e, t) {
    if (isNaN(e) || isNaN(t)) return NaN;
    var i = (t % 12 + 12) % 12;
    return e += (t - i) / 12, 1 === i ? ke(e) ? 29 : 28 : 31 - i % 7 % 2
  }
  xe = Array.prototype.indexOf ? Array.prototype.indexOf : function(e) {
    var t;
    for (t = 0; t < this.length; ++t)
      if (this[t] === e) return t;
    return -1
  }, q("M", ["MM", 2], "Mo", function() {
    return this.month() + 1
  }), q("MMM", 0, 0, function(e) {
    return this.localeData().monthsShort(this, e)
  }), q("MMMM", 0, 0, function(e) {
    return this.localeData().months(this, e)
  }), D("month", "M"), R("month", 8), le("M", K), le("MM", K, U), le("MMM", function(e, t) {
    return t.monthsShortRegex(e)
  }), le("MMMM", function(e, t) {
    return t.monthsRegex(e)
  }), he(["M", "MM"], function(e, t) {
    t[me] = w(e) - 1
  }), he(["MMM", "MMMM"], function(e, t, i, n) {
    var r = i._locale.monthsParse(e, n, i._strict);
    null != r ? t[me] = r : h(i).invalidMonth = e
  });
  var Oe = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
    De = "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
    Ne = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_");

  function Le(e, t) {
    var i;
    if (!e.isValid()) return e;
    if ("string" == typeof t)
      if (/^\d+$/.test(t)) t = w(t);
      else if (!a(t = e.localeData().monthsParse(t))) return e;
    return i = Math.min(e.date(), Me(e.year(), t)), e._d["set" + (e._isUTC ? "UTC" : "") + "Month"](t, i), e
  }

  function ze(e) {
    return null != e ? (Le(this, e), i.updateOffset(this, !0), this) : Ee(this, "Month")
  }
  var Re = ae,
    je = ae;

  function Ie() {
    function e(e, t) {
      return t.length - e.length
    }
    var t, i, n = [],
      r = [],
      s = [];
    for (t = 0; t < 12; t++) i = d([2e3, t]), n.push(this.monthsShort(i, "")), r.push(this.months(i, "")), s.push(this.months(i, "")), s.push(this.monthsShort(i, ""));
    for (n.sort(e), r.sort(e), s.sort(e), t = 0; t < 12; t++) n[t] = ue(n[t]), r[t] = ue(r[t]);
    for (t = 0; t < 24; t++) s[t] = ue(s[t]);
    this._monthsRegex = new RegExp("^(" + s.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp("^(" + r.join("|") + ")", "i"), this._monthsShortStrictRegex = new RegExp("^(" + n.join("|") + ")", "i")
  }

  function Fe(e) {
    var t = new Date(Date.UTC.apply(null, arguments));
    return e < 100 && 0 <= e && isFinite(t.getUTCFullYear()) && t.setUTCFullYear(e), t
  }

  function He(e, t, i) {
    var n = 7 + t - i;
    return -(7 + Fe(e, 0, n).getUTCDay() - t) % 7 + n - 1
  }

  function Ye(e, t, i, n, r) {
    var s, a, o = 1 + 7 * (t - 1) + (7 + i - n) % 7 + He(e, n, r);
    return o <= 0 ? a = Ae(s = e - 1) + o : o > Ae(e) ? (s = e + 1, a = o - Ae(e)) : (s = e, a = o), {
      year: s,
      dayOfYear: a
    }
  }

  function qe(e, t, i) {
    var n, r, s = He(e.year(), t, i),
      a = Math.floor((e.dayOfYear() - s - 1) / 7) + 1;
    return a < 1 ? n = a + $e(r = e.year() - 1, t, i) : a > $e(e.year(), t, i) ? (n = a - $e(e.year(), t, i), r = e.year() + 1) : (r = e.year(), n = a), {
      week: n,
      year: r
    }
  }

  function $e(e, t, i) {
    var n = He(e, t, i),
      r = He(e + 1, t, i);
    return (Ae(e) - n + r) / 7
  }
  q("w", ["ww", 2], "wo", "week"), q("W", ["WW", 2], "Wo", "isoWeek"), D("week", "w"), D("isoWeek", "W"), R("week", 5), R("isoWeek", 5), le("w", K), le("ww", K, U), le("W", K), le("WW", K, U), pe(["w", "ww", "W", "WW"], function(e, t, i, n) {
    t[n.substr(0, 1)] = w(e)
  }), q("d", 0, "do", "day"), q("dd", 0, 0, function(e) {
    return this.localeData().weekdaysMin(this, e)
  }), q("ddd", 0, 0, function(e) {
    return this.localeData().weekdaysShort(this, e)
  }), q("dddd", 0, 0, function(e) {
    return this.localeData().weekdays(this, e)
  }), q("e", 0, 0, "weekday"), q("E", 0, 0, "isoWeekday"), D("day", "d"), D("weekday", "e"), D("isoWeekday", "E"), R("day", 11), R("weekday", 11), R("isoWeekday", 11), le("d", K), le("e", K), le("E", K), le("dd", function(e, t) {
    return t.weekdaysMinRegex(e)
  }), le("ddd", function(e, t) {
    return t.weekdaysShortRegex(e)
  }), le("dddd", function(e, t) {
    return t.weekdaysRegex(e)
  }), pe(["dd", "ddd", "dddd"], function(e, t, i, n) {
    var r = i._locale.weekdaysParse(e, n, i._strict);
    null != r ? t.d = r : h(i).invalidWeekday = e
  }), pe(["d", "e", "E"], function(e, t, i, n) {
    t[n] = w(e)
  });
  var Be = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
    We = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
    Ue = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
    Ge = ae,
    Ve = ae,
    Xe = ae;

  function Ke() {
    function e(e, t) {
      return t.length - e.length
    }
    var t, i, n, r, s, a = [],
      o = [],
      l = [],
      c = [];
    for (t = 0; t < 7; t++) i = d([2e3, 1]).day(t), n = this.weekdaysMin(i, ""), r = this.weekdaysShort(i, ""), s = this.weekdays(i, ""), a.push(n), o.push(r), l.push(s), c.push(n), c.push(r), c.push(s);
    for (a.sort(e), o.sort(e), l.sort(e), c.sort(e), t = 0; t < 7; t++) o[t] = ue(o[t]), l[t] = ue(l[t]), c[t] = ue(c[t]);
    this._weekdaysRegex = new RegExp("^(" + c.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp("^(" + l.join("|") + ")", "i"), this._weekdaysShortStrictRegex = new RegExp("^(" + o.join("|") + ")", "i"), this._weekdaysMinStrictRegex = new RegExp("^(" + a.join("|") + ")", "i")
  }

  function Ze() {
    return this.hours() % 12 || 12
  }

  function Qe(e, t) {
    q(e, 0, 0, function() {
      return this.localeData().meridiem(this.hours(), this.minutes(), t)
    })
  }

  function Je(e, t) {
    return t._meridiemParse
  }
  q("H", ["HH", 2], 0, "hour"), q("h", ["hh", 2], 0, Ze), q("k", ["kk", 2], 0, function() {
    return this.hours() || 24
  }), q("hmm", 0, 0, function() {
    return "" + Ze.apply(this) + j(this.minutes(), 2)
  }), q("hmmss", 0, 0, function() {
    return "" + Ze.apply(this) + j(this.minutes(), 2) + j(this.seconds(), 2)
  }), q("Hmm", 0, 0, function() {
    return "" + this.hours() + j(this.minutes(), 2)
  }), q("Hmmss", 0, 0, function() {
    return "" + this.hours() + j(this.minutes(), 2) + j(this.seconds(), 2)
  }), Qe("a", !0), Qe("A", !1), D("hour", "h"), R("hour", 13), le("a", Je), le("A", Je), le("H", K), le("h", K), le("k", K), le("HH", K, U), le("hh", K, U), le("kk", K, U), le("hmm", Z), le("hmmss", Q), le("Hmm", Z), le("Hmmss", Q), he(["H", "HH"], ye), he(["k", "kk"], function(e, t, i) {
    var n = w(e);
    t[ye] = 24 === n ? 0 : n
  }), he(["a", "A"], function(e, t, i) {
    i._isPm = i._locale.isPM(e), i._meridiem = e
  }), he(["h", "hh"], function(e, t, i) {
    t[ye] = w(e), h(i).bigHour = !0
  }), he("hmm", function(e, t, i) {
    var n = e.length - 2;
    t[ye] = w(e.substr(0, n)), t[ve] = w(e.substr(n)), h(i).bigHour = !0
  }), he("hmmss", function(e, t, i) {
    var n = e.length - 4,
      r = e.length - 2;
    t[ye] = w(e.substr(0, n)), t[ve] = w(e.substr(n, 2)), t[_e] = w(e.substr(r)), h(i).bigHour = !0
  }), he("Hmm", function(e, t, i) {
    var n = e.length - 2;
    t[ye] = w(e.substr(0, n)), t[ve] = w(e.substr(n))
  }), he("Hmmss", function(e, t, i) {
    var n = e.length - 4,
      r = e.length - 2;
    t[ye] = w(e.substr(0, n)), t[ve] = w(e.substr(n, 2)), t[_e] = w(e.substr(r))
  });
  var et, tt = Ce("Hours", !0),
    it = {
      calendar: {
        sameDay: "[Today at] LT",
        nextDay: "[Tomorrow at] LT",
        nextWeek: "dddd [at] LT",
        lastDay: "[Yesterday at] LT",
        lastWeek: "[Last] dddd [at] LT",
        sameElse: "L"
      },
      longDateFormat: {
        LTS: "h:mm:ss A",
        LT: "h:mm A",
        L: "MM/DD/YYYY",
        LL: "MMMM D, YYYY",
        LLL: "MMMM D, YYYY h:mm A",
        LLLL: "dddd, MMMM D, YYYY h:mm A"
      },
      invalidDate: "Invalid date",
      ordinal: "%d",
      dayOfMonthOrdinalParse: /\d{1,2}/,
      relativeTime: {
        future: "in %s",
        past: "%s ago",
        s: "a few seconds",
        ss: "%d seconds",
        m: "a minute",
        mm: "%d minutes",
        h: "an hour",
        hh: "%d hours",
        d: "a day",
        dd: "%d days",
        M: "a month",
        MM: "%d months",
        y: "a year",
        yy: "%d years"
      },
      months: De,
      monthsShort: Ne,
      week: {
        dow: 0,
        doy: 6
      },
      weekdays: Be,
      weekdaysMin: Ue,
      weekdaysShort: We,
      meridiemParse: /[ap]\.?m?\.?/i
    },
    nt = {},
    rt = {};

  function st(e) {
    return e ? e.toLowerCase().replace("_", "-") : e
  }

  function at(e) {
    var t = null;
    if (!nt[e] && "undefined" != typeof module && module && module.exports) try {
      t = et._abbr, require("./locale/" + e), ot(t)
    } catch (e) {}
    return nt[e]
  }

  function ot(e, t) {
    var i;
    return e && ((i = s(t) ? ct(e) : lt(e, t)) ? et = i : "undefined" != typeof console && console.warn && console.warn("Locale " + e + " not found. Did you forget to load it?")), et._abbr
  }

  function lt(e, t) {
    if (null !== t) {
      var i, n = it;
      if (t.abbr = e, null != nt[e]) C("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."), n = nt[e]._config;
      else if (null != t.parentLocale)
        if (null != nt[t.parentLocale]) n = nt[t.parentLocale]._config;
        else {
          if (null == (i = at(t.parentLocale))) return rt[t.parentLocale] || (rt[t.parentLocale] = []), rt[t.parentLocale].push({
            name: e,
            config: t
          }), null;
          n = i._config
        } return nt[e] = new M(P(n, t)), rt[e] && rt[e].forEach(function(e) {
        lt(e.name, e.config)
      }), ot(e), nt[e]
    }
    return delete nt[e], null
  }

  function ct(e) {
    var t;
    if (e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e) return et;
    if (!n(e)) {
      if (t = at(e)) return t;
      e = [e]
    }
    return function(e) {
      for (var t, i, n, r, s = 0; s < e.length;) {
        for (t = (r = st(e[s]).split("-")).length, i = (i = st(e[s + 1])) ? i.split("-") : null; 0 < t;) {
          if (n = at(r.slice(0, t).join("-"))) return n;
          if (i && i.length >= t && T(r, i, !0) >= t - 1) break;
          t--
        }
        s++
      }
      return et
    }(e)
  }

  function ut(e) {
    var t, i = e._a;
    return i && -2 === h(e).overflow && (t = i[me] < 0 || 11 < i[me] ? me : i[ge] < 1 || i[ge] > Me(i[fe], i[me]) ? ge : i[ye] < 0 || 24 < i[ye] || 24 === i[ye] && (0 !== i[ve] || 0 !== i[_e] || 0 !== i[be]) ? ye : i[ve] < 0 || 59 < i[ve] ? ve : i[_e] < 0 || 59 < i[_e] ? _e : i[be] < 0 || 999 < i[be] ? be : -1, h(e)._overflowDayOfYear && (t < fe || ge < t) && (t = ge), h(e)._overflowWeeks && -1 === t && (t = we), h(e)._overflowWeekday && -1 === t && (t = Te), h(e).overflow = t), e
  }

  function dt(e, t, i) {
    return null != e ? e : null != t ? t : i
  }

  function ht(e) {
    var t, n, r, s, a, o = [];
    if (!e._d) {
      var l, c;
      for (l = e, c = new Date(i.now()), r = l._useUTC ? [c.getUTCFullYear(), c.getUTCMonth(), c.getUTCDate()] : [c.getFullYear(), c.getMonth(), c.getDate()], e._w && null == e._a[ge] && null == e._a[me] && function(e) {
          var t, i, n, r, s, a, o, l;
          if (null != (t = e._w).GG || null != t.W || null != t.E) s = 1, a = 4, i = dt(t.GG, e._a[fe], qe(St(), 1, 4).year), n = dt(t.W, 1), ((r = dt(t.E, 1)) < 1 || 7 < r) && (l = !0);
          else {
            s = e._locale._week.dow, a = e._locale._week.doy;
            var c = qe(St(), s, a);
            i = dt(t.gg, e._a[fe], c.year), n = dt(t.w, c.week), null != t.d ? ((r = t.d) < 0 || 6 < r) && (l = !0) : null != t.e ? (r = t.e + s, (t.e < 0 || 6 < t.e) && (l = !0)) : r = s
          }
          n < 1 || n > $e(i, s, a) ? h(e)._overflowWeeks = !0 : null != l ? h(e)._overflowWeekday = !0 : (o = Ye(i, n, r, s, a), e._a[fe] = o.year, e._dayOfYear = o.dayOfYear)
        }(e), null != e._dayOfYear && (a = dt(e._a[fe], r[fe]), (e._dayOfYear > Ae(a) || 0 === e._dayOfYear) && (h(e)._overflowDayOfYear = !0), n = Fe(a, 0, e._dayOfYear), e._a[me] = n.getUTCMonth(), e._a[ge] = n.getUTCDate()), t = 0; t < 3 && null == e._a[t]; ++t) e._a[t] = o[t] = r[t];
      for (; t < 7; t++) e._a[t] = o[t] = null == e._a[t] ? 2 === t ? 1 : 0 : e._a[t];
      24 === e._a[ye] && 0 === e._a[ve] && 0 === e._a[_e] && 0 === e._a[be] && (e._nextDay = !0, e._a[ye] = 0), e._d = (e._useUTC ? Fe : function(e, t, i, n, r, s, a) {
        var o = new Date(e, t, i, n, r, s, a);
        return e < 100 && 0 <= e && isFinite(o.getFullYear()) && o.setFullYear(e), o
      }).apply(null, o), s = e._useUTC ? e._d.getUTCDay() : e._d.getDay(), null != e._tzm && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), e._nextDay && (e._a[ye] = 24), e._w && void 0 !== e._w.d && e._w.d !== s && (h(e).weekdayMismatch = !0)
    }
  }
  var pt = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
    ft = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
    mt = /Z|[+-]\d\d(?::?\d\d)?/,
    gt = [
      ["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
      ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
      ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
      ["GGGG-[W]WW", /\d{4}-W\d\d/, !1],
      ["YYYY-DDD", /\d{4}-\d{3}/],
      ["YYYY-MM", /\d{4}-\d\d/, !1],
      ["YYYYYYMMDD", /[+-]\d{10}/],
      ["YYYYMMDD", /\d{8}/],
      ["GGGG[W]WWE", /\d{4}W\d{3}/],
      ["GGGG[W]WW", /\d{4}W\d{2}/, !1],
      ["YYYYDDD", /\d{7}/]
    ],
    yt = [
      ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
      ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
      ["HH:mm:ss", /\d\d:\d\d:\d\d/],
      ["HH:mm", /\d\d:\d\d/],
      ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
      ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
      ["HHmmss", /\d\d\d\d\d\d/],
      ["HHmm", /\d\d\d\d/],
      ["HH", /\d\d/]
    ],
    vt = /^\/?Date\((\-?\d+)/i;

  function _t(e) {
    var t, i, n, r, s, a, o = e._i,
      l = pt.exec(o) || ft.exec(o);
    if (l) {
      for (h(e).iso = !0, t = 0, i = gt.length; t < i; t++)
        if (gt[t][1].exec(l[1])) {
          r = gt[t][0], n = !1 !== gt[t][2];
          break
        } if (null == r) return void(e._isValid = !1);
      if (l[3]) {
        for (t = 0, i = yt.length; t < i; t++)
          if (yt[t][1].exec(l[3])) {
            s = (l[2] || " ") + yt[t][0];
            break
          } if (null == s) return void(e._isValid = !1)
      }
      if (!n && null != s) return void(e._isValid = !1);
      if (l[4]) {
        if (!mt.exec(l[4])) return void(e._isValid = !1);
        a = "Z"
      }
      e._f = r + (s || "") + (a || ""), At(e)
    } else e._isValid = !1
  }
  var bt = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/;
  var wt = {
    UT: 0,
    GMT: 0,
    EDT: -240,
    EST: -300,
    CDT: -300,
    CST: -360,
    MDT: -360,
    MST: -420,
    PDT: -420,
    PST: -480
  };

  function Tt(e) {
    var t, i, n, r = bt.exec(e._i.replace(/\([^)]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").trim());
    if (r) {
      var s = function(e, t, i, n, r, s) {
        var a = [function(e) {
          var t = parseInt(e, 10);
          return t <= 49 ? 2e3 + t : t <= 999 ? 1900 + t : t
        }(e), Ne.indexOf(t), parseInt(i, 10), parseInt(n, 10), parseInt(r, 10)];
        return s && a.push(parseInt(s, 10)), a
      }(r[4], r[3], r[2], r[5], r[6], r[7]);
      if (i = s, n = e, (t = r[1]) && We.indexOf(t) !== new Date(i[0], i[1], i[2]).getDay() && (h(n).weekdayMismatch = !0, !(n._isValid = !1))) return;
      e._a = s, e._tzm = function(e, t, i) {
        if (e) return wt[e];
        if (t) return 0;
        var n = parseInt(i, 10),
          r = n % 100;
        return (n - r) / 100 * 60 + r
      }(r[8], r[9], r[10]), e._d = Fe.apply(null, e._a), e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), h(e).rfc2822 = !0
    } else e._isValid = !1
  }

  function At(e) {
    if (e._f !== i.ISO_8601)
      if (e._f !== i.RFC_2822) {
        e._a = [], h(e).empty = !0;
        var t, n, r, s, a, o, l, u, d = "" + e._i,
          p = d.length,
          f = 0;
        for (r = B(e._f, e._locale).match(I) || [], t = 0; t < r.length; t++) s = r[t], (n = (d.match(ce(s, e)) || [])[0]) && (0 < (a = d.substr(0, d.indexOf(n))).length && h(e).unusedInput.push(a), d = d.slice(d.indexOf(n) + n.length), f += n.length), Y[s] ? (n ? h(e).empty = !1 : h(e).unusedTokens.push(s), o = s, u = e, null != (l = n) && c(de, o) && de[o](l, u._a, u, o)) : e._strict && !n && h(e).unusedTokens.push(s);
        h(e).charsLeftOver = p - f, 0 < d.length && h(e).unusedInput.push(d), e._a[ye] <= 12 && !0 === h(e).bigHour && 0 < e._a[ye] && (h(e).bigHour = void 0), h(e).parsedDateParts = e._a.slice(0), h(e).meridiem = e._meridiem, e._a[ye] = function(e, t, i) {
          var n;
          return null == i ? t : null != e.meridiemHour ? e.meridiemHour(t, i) : (null != e.isPM && ((n = e.isPM(i)) && t < 12 && (t += 12), n || 12 !== t || (t = 0)), t)
        }(e._locale, e._a[ye], e._meridiem), ht(e), ut(e)
      } else Tt(e);
    else _t(e)
  }

  function kt(e) {
    var t, c, d, m, y = e._i,
      b = e._f;
    return e._locale = e._locale || ct(e._l), null === y || void 0 === b && "" === y ? f({
      nullInput: !0
    }) : ("string" == typeof y && (e._i = y = e._locale.preparse(y)), _(y) ? new v(ut(y)) : (o(y) ? e._d = y : n(b) ? function(e) {
      var t, i, n, r, s;
      if (0 === e._f.length) return h(e).invalidFormat = !0, e._d = new Date(NaN);
      for (r = 0; r < e._f.length; r++) s = 0, t = g({}, e), null != e._useUTC && (t._useUTC = e._useUTC), t._f = e._f[r], At(t), p(t) && (s += h(t).charsLeftOver, s += 10 * h(t).unusedTokens.length, h(t).score = s, (null == n || s < n) && (n = s, i = t));
      u(e, i || t)
    }(e) : b ? At(e) : s(c = (t = e)._i) ? t._d = new Date(i.now()) : o(c) ? t._d = new Date(c.valueOf()) : "string" == typeof c ? (d = t, null === (m = vt.exec(d._i)) ? (_t(d), !1 === d._isValid && (delete d._isValid, Tt(d), !1 === d._isValid && (delete d._isValid, i.createFromInputFallback(d)))) : d._d = new Date(+m[1])) : n(c) ? (t._a = l(c.slice(0), function(e) {
      return parseInt(e, 10)
    }), ht(t)) : r(c) ? function(e) {
      if (!e._d) {
        var t = L(e._i);
        e._a = l([t.year, t.month, t.day || t.date, t.hour, t.minute, t.second, t.millisecond], function(e) {
          return e && parseInt(e, 10)
        }), ht(e)
      }
    }(t) : a(c) ? t._d = new Date(c) : i.createFromInputFallback(t), p(e) || (e._d = null), e))
  }

  function xt(e, t, i, s, a) {
    var o, l = {};
    return !0 !== i && !1 !== i || (s = i, i = void 0), (r(e) && function(e) {
      if (Object.getOwnPropertyNames) return 0 === Object.getOwnPropertyNames(e).length;
      var t;
      for (t in e)
        if (e.hasOwnProperty(t)) return !1;
      return !0
    }(e) || n(e) && 0 === e.length) && (e = void 0), l._isAMomentObject = !0, l._useUTC = l._isUTC = a, l._l = i, l._i = e, l._f = t, l._strict = s, (o = new v(ut(kt(l))))._nextDay && (o.add(1, "d"), o._nextDay = void 0), o
  }

  function St(e, t, i, n) {
    return xt(e, t, i, n, !1)
  }
  i.createFromInputFallback = k("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.", function(e) {
    e._d = new Date(e._i + (e._useUTC ? " UTC" : ""))
  }), i.ISO_8601 = function() {}, i.RFC_2822 = function() {};
  var Ct = k("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/", function() {
      var e = St.apply(null, arguments);
      return this.isValid() && e.isValid() ? e < this ? this : e : f()
    }),
    Et = k("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/", function() {
      var e = St.apply(null, arguments);
      return this.isValid() && e.isValid() ? this < e ? this : e : f()
    });

  function Pt(e, t) {
    var i, r;
    if (1 === t.length && n(t[0]) && (t = t[0]), !t.length) return St();
    for (i = t[0], r = 1; r < t.length; ++r) t[r].isValid() && !t[r][e](i) || (i = t[r]);
    return i
  }
  var Mt = ["year", "quarter", "month", "week", "day", "hour", "minute", "second", "millisecond"];

  function Ot(e) {
    var t = L(e),
      i = t.year || 0,
      n = t.quarter || 0,
      r = t.month || 0,
      s = t.week || 0,
      a = t.day || 0,
      o = t.hour || 0,
      l = t.minute || 0,
      c = t.second || 0,
      u = t.millisecond || 0;
    this._isValid = function(e) {
      for (var t in e)
        if (-1 === xe.call(Mt, t) || null != e[t] && isNaN(e[t])) return !1;
      for (var i = !1, n = 0; n < Mt.length; ++n)
        if (e[Mt[n]]) {
          if (i) return !1;
          parseFloat(e[Mt[n]]) !== w(e[Mt[n]]) && (i = !0)
        } return !0
    }(t), this._milliseconds = +u + 1e3 * c + 6e4 * l + 1e3 * o * 60 * 60, this._days = +a + 7 * s, this._months = +r + 3 * n + 12 * i, this._data = {}, this._locale = ct(), this._bubble()
  }

  function Dt(e) {
    return e instanceof Ot
  }

  function Nt(e) {
    return e < 0 ? -1 * Math.round(-1 * e) : Math.round(e)
  }

  function Lt(e, t) {
    q(e, 0, 0, function() {
      var e = this.utcOffset(),
        i = "+";
      return e < 0 && (e = -e, i = "-"), i + j(~~(e / 60), 2) + t + j(~~e % 60, 2)
    })
  }
  Lt("Z", ":"), Lt("ZZ", ""), le("Z", se), le("ZZ", se), he(["Z", "ZZ"], function(e, t, i) {
    i._useUTC = !0, i._tzm = Rt(se, e)
  });
  var zt = /([\+\-]|\d\d)/gi;

  function Rt(e, t) {
    var i = (t || "").match(e);
    if (null === i) return null;
    var n = ((i[i.length - 1] || []) + "").match(zt) || ["-", 0, 0],
      r = 60 * n[1] + w(n[2]);
    return 0 === r ? 0 : "+" === n[0] ? r : -r
  }

  function jt(e, t) {
    var n, r;
    return t._isUTC ? (n = t.clone(), r = (_(e) || o(e) ? e.valueOf() : St(e).valueOf()) - n.valueOf(), n._d.setTime(n._d.valueOf() + r), i.updateOffset(n, !1), n) : St(e).local()
  }

  function It(e) {
    return 15 * -Math.round(e._d.getTimezoneOffset() / 15)
  }

  function Ft() {
    return !!this.isValid() && this._isUTC && 0 === this._offset
  }
  i.updateOffset = function() {};
  var Ht = /^(\-|\+)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/,
    Yt = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;

  function qt(e, t) {
    var i, n, r, s = e,
      o = null;
    return Dt(e) ? s = {
      ms: e._milliseconds,
      d: e._days,
      M: e._months
    } : a(e) ? (s = {}, t ? s[t] = e : s.milliseconds = e) : (o = Ht.exec(e)) ? (i = "-" === o[1] ? -1 : 1, s = {
      y: 0,
      d: w(o[ge]) * i,
      h: w(o[ye]) * i,
      m: w(o[ve]) * i,
      s: w(o[_e]) * i,
      ms: w(Nt(1e3 * o[be])) * i
    }) : (o = Yt.exec(e)) ? (i = "-" === o[1] ? -1 : (o[1], 1), s = {
      y: $t(o[2], i),
      M: $t(o[3], i),
      w: $t(o[4], i),
      d: $t(o[5], i),
      h: $t(o[6], i),
      m: $t(o[7], i),
      s: $t(o[8], i)
    }) : null == s ? s = {} : "object" == typeof s && ("from" in s || "to" in s) && (r = function(e, t) {
      var i;
      return e.isValid() && t.isValid() ? (t = jt(t, e), e.isBefore(t) ? i = Bt(e, t) : ((i = Bt(t, e)).milliseconds = -i.milliseconds, i.months = -i.months), i) : {
        milliseconds: 0,
        months: 0
      }
    }(St(s.from), St(s.to)), (s = {}).ms = r.milliseconds, s.M = r.months), n = new Ot(s), Dt(e) && c(e, "_locale") && (n._locale = e._locale), n
  }

  function $t(e, t) {
    var i = e && parseFloat(e.replace(",", "."));
    return (isNaN(i) ? 0 : i) * t
  }

  function Bt(e, t) {
    var i = {
      milliseconds: 0,
      months: 0
    };
    return i.months = t.month() - e.month() + 12 * (t.year() - e.year()), e.clone().add(i.months, "M").isAfter(t) && --i.months, i.milliseconds = +t - +e.clone().add(i.months, "M"), i
  }

  function Wt(e, t) {
    return function(i, n) {
      var r;
      return null === n || isNaN(+n) || (C(t, "moment()." + t + "(period, number) is deprecated. Please use moment()." + t + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."), r = i, i = n, n = r), Ut(this, qt(i = "string" == typeof i ? +i : i, n), e), this
    }
  }

  function Ut(e, t, n, r) {
    var s = t._milliseconds,
      a = Nt(t._days),
      o = Nt(t._months);
    e.isValid() && (r = null == r || r, o && Le(e, Ee(e, "Month") + o * n), a && Pe(e, "Date", Ee(e, "Date") + a * n), s && e._d.setTime(e._d.valueOf() + s * n), r && i.updateOffset(e, a || o))
  }
  qt.fn = Ot.prototype, qt.invalid = function() {
    return qt(NaN)
  };
  var Gt = Wt(1, "add"),
    Vt = Wt(-1, "subtract");

  function Xt(e, t) {
    var i = 12 * (t.year() - e.year()) + (t.month() - e.month()),
      n = e.clone().add(i, "months");
    return -(i + (t - n < 0 ? (t - n) / (n - e.clone().add(i - 1, "months")) : (t - n) / (e.clone().add(i + 1, "months") - n))) || 0
  }

  function Kt(e) {
    var t;
    return void 0 === e ? this._locale._abbr : (null != (t = ct(e)) && (this._locale = t), this)
  }
  i.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ", i.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
  var Zt = k("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function(e) {
    return void 0 === e ? this.localeData() : this.locale(e)
  });

  function Qt() {
    return this._locale
  }

  function Jt(e, t) {
    q(0, [e, e.length], 0, t)
  }

  function ei(e, t, i, n, r) {
    var s;
    return null == e ? qe(this, n, r).year : ((s = $e(e, n, r)) < t && (t = s), function(e, t, i, n, r) {
      var s = Ye(e, t, i, n, r),
        a = Fe(s.year, 0, s.dayOfYear);
      return this.year(a.getUTCFullYear()), this.month(a.getUTCMonth()), this.date(a.getUTCDate()), this
    }.call(this, e, t, i, n, r))
  }
  q(0, ["gg", 2], 0, function() {
    return this.weekYear() % 100
  }), q(0, ["GG", 2], 0, function() {
    return this.isoWeekYear() % 100
  }), Jt("gggg", "weekYear"), Jt("ggggg", "weekYear"), Jt("GGGG", "isoWeekYear"), Jt("GGGGG", "isoWeekYear"), D("weekYear", "gg"), D("isoWeekYear", "GG"), R("weekYear", 1), R("isoWeekYear", 1), le("G", ne), le("g", ne), le("GG", K, U), le("gg", K, U), le("GGGG", ee, V), le("gggg", ee, V), le("GGGGG", te, X), le("ggggg", te, X), pe(["gggg", "ggggg", "GGGG", "GGGGG"], function(e, t, i, n) {
    t[n.substr(0, 2)] = w(e)
  }), pe(["gg", "GG"], function(e, t, n, r) {
    t[r] = i.parseTwoDigitYear(e)
  }), q("Q", 0, "Qo", "quarter"), D("quarter", "Q"), R("quarter", 7), le("Q", W), he("Q", function(e, t) {
    t[me] = 3 * (w(e) - 1)
  }), q("D", ["DD", 2], "Do", "date"), D("date", "D"), R("date", 9), le("D", K), le("DD", K, U), le("Do", function(e, t) {
    return e ? t._dayOfMonthOrdinalParse || t._ordinalParse : t._dayOfMonthOrdinalParseLenient
  }), he(["D", "DD"], ge), he("Do", function(e, t) {
    t[ge] = w(e.match(K)[0])
  });
  var ti = Ce("Date", !0);
  q("DDD", ["DDDD", 3], "DDDo", "dayOfYear"), D("dayOfYear", "DDD"), R("dayOfYear", 4), le("DDD", J), le("DDDD", G), he(["DDD", "DDDD"], function(e, t, i) {
    i._dayOfYear = w(e)
  }), q("m", ["mm", 2], 0, "minute"), D("minute", "m"), R("minute", 14), le("m", K), le("mm", K, U), he(["m", "mm"], ve);
  var ii = Ce("Minutes", !1);
  q("s", ["ss", 2], 0, "second"), D("second", "s"), R("second", 15), le("s", K), le("ss", K, U), he(["s", "ss"], _e);
  var ni, ri = Ce("Seconds", !1);
  for (q("S", 0, 0, function() {
      return ~~(this.millisecond() / 100)
    }), q(0, ["SS", 2], 0, function() {
      return ~~(this.millisecond() / 10)
    }), q(0, ["SSS", 3], 0, "millisecond"), q(0, ["SSSS", 4], 0, function() {
      return 10 * this.millisecond()
    }), q(0, ["SSSSS", 5], 0, function() {
      return 100 * this.millisecond()
    }), q(0, ["SSSSSS", 6], 0, function() {
      return 1e3 * this.millisecond()
    }), q(0, ["SSSSSSS", 7], 0, function() {
      return 1e4 * this.millisecond()
    }), q(0, ["SSSSSSSS", 8], 0, function() {
      return 1e5 * this.millisecond()
    }), q(0, ["SSSSSSSSS", 9], 0, function() {
      return 1e6 * this.millisecond()
    }), D("millisecond", "ms"), R("millisecond", 16), le("S", J, W), le("SS", J, U), le("SSS", J, G), ni = "SSSS"; ni.length <= 9; ni += "S") le(ni, ie);

  function si(e, t) {
    t[be] = w(1e3 * ("0." + e))
  }
  for (ni = "S"; ni.length <= 9; ni += "S") he(ni, si);
  var ai = Ce("Milliseconds", !1);
  q("z", 0, 0, "zoneAbbr"), q("zz", 0, 0, "zoneName");
  var oi = v.prototype;

  function li(e) {
    return e
  }
  oi.add = Gt, oi.calendar = function(e, t) {
    var n = e || St(),
      r = jt(n, this).startOf("day"),
      s = i.calendarFormat(this, r) || "sameElse",
      a = t && (E(t[s]) ? t[s].call(this, n) : t[s]);
    return this.format(a || this.localeData().calendar(s, this, St(n)))
  }, oi.clone = function() {
    return new v(this)
  }, oi.diff = function(e, t, i) {
    var n, r, s;
    if (!this.isValid()) return NaN;
    if (!(n = jt(e, this)).isValid()) return NaN;
    switch (r = 6e4 * (n.utcOffset() - this.utcOffset()), t = N(t)) {
      case "year":
        s = Xt(this, n) / 12;
        break;
      case "month":
        s = Xt(this, n);
        break;
      case "quarter":
        s = Xt(this, n) / 3;
        break;
      case "second":
        s = (this - n) / 1e3;
        break;
      case "minute":
        s = (this - n) / 6e4;
        break;
      case "hour":
        s = (this - n) / 36e5;
        break;
      case "day":
        s = (this - n - r) / 864e5;
        break;
      case "week":
        s = (this - n - r) / 6048e5;
        break;
      default:
        s = this - n
    }
    return i ? s : b(s)
  }, oi.endOf = function(e) {
    return void 0 === (e = N(e)) || "millisecond" === e ? this : ("date" === e && (e = "day"), this.startOf(e).add(1, "isoWeek" === e ? "week" : e).subtract(1, "ms"))
  }, oi.format = function(e) {
    e || (e = this.isUtc() ? i.defaultFormatUtc : i.defaultFormat);
    var t = $(this, e);
    return this.localeData().postformat(t)
  }, oi.from = function(e, t) {
    return this.isValid() && (_(e) && e.isValid() || St(e).isValid()) ? qt({
      to: this,
      from: e
    }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate()
  }, oi.fromNow = function(e) {
    return this.from(St(), e)
  }, oi.to = function(e, t) {
    return this.isValid() && (_(e) && e.isValid() || St(e).isValid()) ? qt({
      from: this,
      to: e
    }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate()
  }, oi.toNow = function(e) {
    return this.to(St(), e)
  }, oi.get = function(e) {
    return E(this[e = N(e)]) ? this[e]() : this
  }, oi.invalidAt = function() {
    return h(this).overflow
  }, oi.isAfter = function(e, t) {
    var i = _(e) ? e : St(e);
    return !(!this.isValid() || !i.isValid()) && ("millisecond" === (t = N(s(t) ? "millisecond" : t)) ? this.valueOf() > i.valueOf() : i.valueOf() < this.clone().startOf(t).valueOf())
  }, oi.isBefore = function(e, t) {
    var i = _(e) ? e : St(e);
    return !(!this.isValid() || !i.isValid()) && ("millisecond" === (t = N(s(t) ? "millisecond" : t)) ? this.valueOf() < i.valueOf() : this.clone().endOf(t).valueOf() < i.valueOf())
  }, oi.isBetween = function(e, t, i, n) {
    return ("(" === (n = n || "()")[0] ? this.isAfter(e, i) : !this.isBefore(e, i)) && (")" === n[1] ? this.isBefore(t, i) : !this.isAfter(t, i))
  }, oi.isSame = function(e, t) {
    var i, n = _(e) ? e : St(e);
    return !(!this.isValid() || !n.isValid()) && ("millisecond" === (t = N(t || "millisecond")) ? this.valueOf() === n.valueOf() : (i = n.valueOf(), this.clone().startOf(t).valueOf() <= i && i <= this.clone().endOf(t).valueOf()))
  }, oi.isSameOrAfter = function(e, t) {
    return this.isSame(e, t) || this.isAfter(e, t)
  }, oi.isSameOrBefore = function(e, t) {
    return this.isSame(e, t) || this.isBefore(e, t)
  }, oi.isValid = function() {
    return p(this)
  }, oi.lang = Zt, oi.locale = Kt, oi.localeData = Qt, oi.max = Et, oi.min = Ct, oi.parsingFlags = function() {
    return u({}, h(this))
  }, oi.set = function(e, t) {
    if ("object" == typeof e)
      for (var i = function(e) {
          var t = [];
          for (var i in e) t.push({
            unit: i,
            priority: z[i]
          });
          return t.sort(function(e, t) {
            return e.priority - t.priority
          }), t
        }(e = L(e)), n = 0; n < i.length; n++) this[i[n].unit](e[i[n].unit]);
    else if (E(this[e = N(e)])) return this[e](t);
    return this
  }, oi.startOf = function(e) {
    switch (e = N(e)) {
      case "year":
        this.month(0);
      case "quarter":
      case "month":
        this.date(1);
      case "week":
      case "isoWeek":
      case "day":
      case "date":
        this.hours(0);
      case "hour":
        this.minutes(0);
      case "minute":
        this.seconds(0);
      case "second":
        this.milliseconds(0)
    }
    return "week" === e && this.weekday(0), "isoWeek" === e && this.isoWeekday(1), "quarter" === e && this.month(3 * Math.floor(this.month() / 3)), this
  }, oi.subtract = Vt, oi.toArray = function() {
    var e = this;
    return [e.year(), e.month(), e.date(), e.hour(), e.minute(), e.second(), e.millisecond()]
  }, oi.toObject = function() {
    var e = this;
    return {
      years: e.year(),
      months: e.month(),
      date: e.date(),
      hours: e.hours(),
      minutes: e.minutes(),
      seconds: e.seconds(),
      milliseconds: e.milliseconds()
    }
  }, oi.toDate = function() {
    return new Date(this.valueOf())
  }, oi.toISOString = function(e) {
    if (!this.isValid()) return null;
    var t = !0 !== e,
      i = t ? this.clone().utc() : this;
    return i.year() < 0 || 9999 < i.year() ? $(i, t ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ") : E(Date.prototype.toISOString) ? t ? this.toDate().toISOString() : new Date(this.valueOf() + 60 * this.utcOffset() * 1e3).toISOString().replace("Z", $(i, "Z")) : $(i, t ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ")
  }, oi.inspect = function() {
    if (!this.isValid()) return "moment.invalid(/* " + this._i + " */)";
    var e = "moment",
      t = "";
    this.isLocal() || (e = 0 === this.utcOffset() ? "moment.utc" : "moment.parseZone", t = "Z");
    var i = "[" + e + '("]',
      n = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY",
      r = t + '[")]';
    return this.format(i + n + "-MM-DD[T]HH:mm:ss.SSS" + r)
  }, oi.toJSON = function() {
    return this.isValid() ? this.toISOString() : null
  }, oi.toString = function() {
    return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
  }, oi.unix = function() {
    return Math.floor(this.valueOf() / 1e3)
  }, oi.valueOf = function() {
    return this._d.valueOf() - 6e4 * (this._offset || 0)
  }, oi.creationData = function() {
    return {
      input: this._i,
      format: this._f,
      locale: this._locale,
      isUTC: this._isUTC,
      strict: this._strict
    }
  }, oi.year = Se, oi.isLeapYear = function() {
    return ke(this.year())
  }, oi.weekYear = function(e) {
    return ei.call(this, e, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy)
  }, oi.isoWeekYear = function(e) {
    return ei.call(this, e, this.isoWeek(), this.isoWeekday(), 1, 4)
  }, oi.quarter = oi.quarters = function(e) {
    return null == e ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (e - 1) + this.month() % 3)
  }, oi.month = ze, oi.daysInMonth = function() {
    return Me(this.year(), this.month())
  }, oi.week = oi.weeks = function(e) {
    var t = this.localeData().week(this);
    return null == e ? t : this.add(7 * (e - t), "d")
  }, oi.isoWeek = oi.isoWeeks = function(e) {
    var t = qe(this, 1, 4).week;
    return null == e ? t : this.add(7 * (e - t), "d")
  }, oi.weeksInYear = function() {
    var e = this.localeData()._week;
    return $e(this.year(), e.dow, e.doy)
  }, oi.isoWeeksInYear = function() {
    return $e(this.year(), 1, 4)
  }, oi.date = ti, oi.day = oi.days = function(e) {
    if (!this.isValid()) return null != e ? this : NaN;
    var t, i, n = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
    return null != e ? (t = e, i = this.localeData(), e = "string" != typeof t ? t : isNaN(t) ? "number" == typeof(t = i.weekdaysParse(t)) ? t : null : parseInt(t, 10), this.add(e - n, "d")) : n
  }, oi.weekday = function(e) {
    if (!this.isValid()) return null != e ? this : NaN;
    var t = (this.day() + 7 - this.localeData()._week.dow) % 7;
    return null == e ? t : this.add(e - t, "d")
  }, oi.isoWeekday = function(e) {
    if (!this.isValid()) return null != e ? this : NaN;
    if (null != e) {
      var t = (i = e, n = this.localeData(), "string" == typeof i ? n.weekdaysParse(i) % 7 || 7 : isNaN(i) ? null : i);
      return this.day(this.day() % 7 ? t : t - 7)
    }
    return this.day() || 7;
    var i, n
  }, oi.dayOfYear = function(e) {
    var t = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
    return null == e ? t : this.add(e - t, "d")
  }, oi.hour = oi.hours = tt, oi.minute = oi.minutes = ii, oi.second = oi.seconds = ri, oi.millisecond = oi.milliseconds = ai, oi.utcOffset = function(e, t, n) {
    var r, s = this._offset || 0;
    if (!this.isValid()) return null != e ? this : NaN;
    if (null != e) {
      if ("string" == typeof e) {
        if (null === (e = Rt(se, e))) return this
      } else Math.abs(e) < 16 && !n && (e *= 60);
      return !this._isUTC && t && (r = It(this)), this._offset = e, this._isUTC = !0, null != r && this.add(r, "m"), s !== e && (!t || this._changeInProgress ? Ut(this, qt(e - s, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, i.updateOffset(this, !0), this._changeInProgress = null)), this
    }
    return this._isUTC ? s : It(this)
  }, oi.utc = function(e) {
    return this.utcOffset(0, e)
  }, oi.local = function(e) {
    return this._isUTC && (this.utcOffset(0, e), this._isUTC = !1, e && this.subtract(It(this), "m")), this
  }, oi.parseZone = function() {
    if (null != this._tzm) this.utcOffset(this._tzm, !1, !0);
    else if ("string" == typeof this._i) {
      var e = Rt(re, this._i);
      null != e ? this.utcOffset(e) : this.utcOffset(0, !0)
    }
    return this
  }, oi.hasAlignedHourOffset = function(e) {
    return !!this.isValid() && (e = e ? St(e).utcOffset() : 0, (this.utcOffset() - e) % 60 == 0)
  }, oi.isDST = function() {
    return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset()
  }, oi.isLocal = function() {
    return !!this.isValid() && !this._isUTC
  }, oi.isUtcOffset = function() {
    return !!this.isValid() && this._isUTC
  }, oi.isUtc = Ft, oi.isUTC = Ft, oi.zoneAbbr = function() {
    return this._isUTC ? "UTC" : ""
  }, oi.zoneName = function() {
    return this._isUTC ? "Coordinated Universal Time" : ""
  }, oi.dates = k("dates accessor is deprecated. Use date instead.", ti), oi.months = k("months accessor is deprecated. Use month instead", ze), oi.years = k("years accessor is deprecated. Use year instead", Se), oi.zone = k("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/", function(e, t) {
    return null != e ? ("string" != typeof e && (e = -e), this.utcOffset(e, t), this) : -this.utcOffset()
  }), oi.isDSTShifted = k("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information", function() {
    if (!s(this._isDSTShifted)) return this._isDSTShifted;
    var e = {};
    if (g(e, this), (e = kt(e))._a) {
      var t = e._isUTC ? d(e._a) : St(e._a);
      this._isDSTShifted = this.isValid() && 0 < T(e._a, t.toArray())
    } else this._isDSTShifted = !1;
    return this._isDSTShifted
  });
  var ci = M.prototype;

  function ui(e, t, i, n) {
    var r = ct(),
      s = d().set(n, t);
    return r[i](s, e)
  }

  function di(e, t, i) {
    if (a(e) && (t = e, e = void 0), e = e || "", null != t) return ui(e, t, i, "month");
    var n, r = [];
    for (n = 0; n < 12; n++) r[n] = ui(e, n, i, "month");
    return r
  }

  function hi(e, t, i, n) {
    "boolean" == typeof e ? a(t) && (i = t, t = void 0) : (t = e, e = !1, a(i = t) && (i = t, t = void 0)), t = t || "";
    var r, s = ct(),
      o = e ? s._week.dow : 0;
    if (null != i) return ui(t, (i + o) % 7, n, "day");
    var l = [];
    for (r = 0; r < 7; r++) l[r] = ui(t, (r + o) % 7, n, "day");
    return l
  }
  ci.calendar = function(e, t, i) {
    var n = this._calendar[e] || this._calendar.sameElse;
    return E(n) ? n.call(t, i) : n
  }, ci.longDateFormat = function(e) {
    var t = this._longDateFormat[e],
      i = this._longDateFormat[e.toUpperCase()];
    return t || !i ? t : (this._longDateFormat[e] = i.replace(/MMMM|MM|DD|dddd/g, function(e) {
      return e.slice(1)
    }), this._longDateFormat[e])
  }, ci.invalidDate = function() {
    return this._invalidDate
  }, ci.ordinal = function(e) {
    return this._ordinal.replace("%d", e)
  }, ci.preparse = li, ci.postformat = li, ci.relativeTime = function(e, t, i, n) {
    var r = this._relativeTime[i];
    return E(r) ? r(e, t, i, n) : r.replace(/%d/i, e)
  }, ci.pastFuture = function(e, t) {
    var i = this._relativeTime[0 < e ? "future" : "past"];
    return E(i) ? i(t) : i.replace(/%s/i, t)
  }, ci.set = function(e) {
    var t, i;
    for (i in e) E(t = e[i]) ? this[i] = t : this["_" + i] = t;
    this._config = e, this._dayOfMonthOrdinalParseLenient = new RegExp((this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source)
  }, ci.months = function(e, t) {
    return e ? n(this._months) ? this._months[e.month()] : this._months[(this._months.isFormat || Oe).test(t) ? "format" : "standalone"][e.month()] : n(this._months) ? this._months : this._months.standalone
  }, ci.monthsShort = function(e, t) {
    return e ? n(this._monthsShort) ? this._monthsShort[e.month()] : this._monthsShort[Oe.test(t) ? "format" : "standalone"][e.month()] : n(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone
  }, ci.monthsParse = function(e, t, i) {
    var n, r, s;
    if (this._monthsParseExact) return function(e, t, i) {
      var n, r, s, a = e.toLocaleLowerCase();
      if (!this._monthsParse)
        for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], n = 0; n < 12; ++n) s = d([2e3, n]), this._shortMonthsParse[n] = this.monthsShort(s, "").toLocaleLowerCase(), this._longMonthsParse[n] = this.months(s, "").toLocaleLowerCase();
      return i ? "MMM" === t ? -1 !== (r = xe.call(this._shortMonthsParse, a)) ? r : null : -1 !== (r = xe.call(this._longMonthsParse, a)) ? r : null : "MMM" === t ? -1 !== (r = xe.call(this._shortMonthsParse, a)) ? r : -1 !== (r = xe.call(this._longMonthsParse, a)) ? r : null : -1 !== (r = xe.call(this._longMonthsParse, a)) ? r : -1 !== (r = xe.call(this._shortMonthsParse, a)) ? r : null
    }.call(this, e, t, i);
    for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), n = 0; n < 12; n++) {
      if (r = d([2e3, n]), i && !this._longMonthsParse[n] && (this._longMonthsParse[n] = new RegExp("^" + this.months(r, "").replace(".", "") + "$", "i"), this._shortMonthsParse[n] = new RegExp("^" + this.monthsShort(r, "").replace(".", "") + "$", "i")), i || this._monthsParse[n] || (s = "^" + this.months(r, "") + "|^" + this.monthsShort(r, ""), this._monthsParse[n] = new RegExp(s.replace(".", ""), "i")), i && "MMMM" === t && this._longMonthsParse[n].test(e)) return n;
      if (i && "MMM" === t && this._shortMonthsParse[n].test(e)) return n;
      if (!i && this._monthsParse[n].test(e)) return n
    }
  }, ci.monthsRegex = function(e) {
    return this._monthsParseExact ? (c(this, "_monthsRegex") || Ie.call(this), e ? this._monthsStrictRegex : this._monthsRegex) : (c(this, "_monthsRegex") || (this._monthsRegex = je), this._monthsStrictRegex && e ? this._monthsStrictRegex : this._monthsRegex)
  }, ci.monthsShortRegex = function(e) {
    return this._monthsParseExact ? (c(this, "_monthsRegex") || Ie.call(this), e ? this._monthsShortStrictRegex : this._monthsShortRegex) : (c(this, "_monthsShortRegex") || (this._monthsShortRegex = Re), this._monthsShortStrictRegex && e ? this._monthsShortStrictRegex : this._monthsShortRegex)
  }, ci.week = function(e) {
    return qe(e, this._week.dow, this._week.doy).week
  }, ci.firstDayOfYear = function() {
    return this._week.doy
  }, ci.firstDayOfWeek = function() {
    return this._week.dow
  }, ci.weekdays = function(e, t) {
    return e ? n(this._weekdays) ? this._weekdays[e.day()] : this._weekdays[this._weekdays.isFormat.test(t) ? "format" : "standalone"][e.day()] : n(this._weekdays) ? this._weekdays : this._weekdays.standalone
  }, ci.weekdaysMin = function(e) {
    return e ? this._weekdaysMin[e.day()] : this._weekdaysMin
  }, ci.weekdaysShort = function(e) {
    return e ? this._weekdaysShort[e.day()] : this._weekdaysShort
  }, ci.weekdaysParse = function(e, t, i) {
    var n, r, s;
    if (this._weekdaysParseExact) return function(e, t, i) {
      var n, r, s, a = e.toLocaleLowerCase();
      if (!this._weekdaysParse)
        for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], n = 0; n < 7; ++n) s = d([2e3, 1]).day(n), this._minWeekdaysParse[n] = this.weekdaysMin(s, "").toLocaleLowerCase(), this._shortWeekdaysParse[n] = this.weekdaysShort(s, "").toLocaleLowerCase(), this._weekdaysParse[n] = this.weekdays(s, "").toLocaleLowerCase();
      return i ? "dddd" === t ? -1 !== (r = xe.call(this._weekdaysParse, a)) ? r : null : "ddd" === t ? -1 !== (r = xe.call(this._shortWeekdaysParse, a)) ? r : null : -1 !== (r = xe.call(this._minWeekdaysParse, a)) ? r : null : "dddd" === t ? -1 !== (r = xe.call(this._weekdaysParse, a)) ? r : -1 !== (r = xe.call(this._shortWeekdaysParse, a)) ? r : -1 !== (r = xe.call(this._minWeekdaysParse, a)) ? r : null : "ddd" === t ? -1 !== (r = xe.call(this._shortWeekdaysParse, a)) ? r : -1 !== (r = xe.call(this._weekdaysParse, a)) ? r : -1 !== (r = xe.call(this._minWeekdaysParse, a)) ? r : null : -1 !== (r = xe.call(this._minWeekdaysParse, a)) ? r : -1 !== (r = xe.call(this._weekdaysParse, a)) ? r : -1 !== (r = xe.call(this._shortWeekdaysParse, a)) ? r : null
    }.call(this, e, t, i);
    for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), n = 0; n < 7; n++) {
      if (r = d([2e3, 1]).day(n), i && !this._fullWeekdaysParse[n] && (this._fullWeekdaysParse[n] = new RegExp("^" + this.weekdays(r, "").replace(".", ".?") + "$", "i"), this._shortWeekdaysParse[n] = new RegExp("^" + this.weekdaysShort(r, "").replace(".", ".?") + "$", "i"), this._minWeekdaysParse[n] = new RegExp("^" + this.weekdaysMin(r, "").replace(".", ".?") + "$", "i")), this._weekdaysParse[n] || (s = "^" + this.weekdays(r, "") + "|^" + this.weekdaysShort(r, "") + "|^" + this.weekdaysMin(r, ""), this._weekdaysParse[n] = new RegExp(s.replace(".", ""), "i")), i && "dddd" === t && this._fullWeekdaysParse[n].test(e)) return n;
      if (i && "ddd" === t && this._shortWeekdaysParse[n].test(e)) return n;
      if (i && "dd" === t && this._minWeekdaysParse[n].test(e)) return n;
      if (!i && this._weekdaysParse[n].test(e)) return n
    }
  }, ci.weekdaysRegex = function(e) {
    return this._weekdaysParseExact ? (c(this, "_weekdaysRegex") || Ke.call(this), e ? this._weekdaysStrictRegex : this._weekdaysRegex) : (c(this, "_weekdaysRegex") || (this._weekdaysRegex = Ge), this._weekdaysStrictRegex && e ? this._weekdaysStrictRegex : this._weekdaysRegex)
  }, ci.weekdaysShortRegex = function(e) {
    return this._weekdaysParseExact ? (c(this, "_weekdaysRegex") || Ke.call(this), e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (c(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = Ve), this._weekdaysShortStrictRegex && e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex)
  }, ci.weekdaysMinRegex = function(e) {
    return this._weekdaysParseExact ? (c(this, "_weekdaysRegex") || Ke.call(this), e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (c(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = Xe), this._weekdaysMinStrictRegex && e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex)
  }, ci.isPM = function(e) {
    return "p" === (e + "").toLowerCase().charAt(0)
  }, ci.meridiem = function(e, t, i) {
    return 11 < e ? i ? "pm" : "PM" : i ? "am" : "AM"
  }, ot("en", {
    dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
    ordinal: function(e) {
      var t = e % 10;
      return e + (1 === w(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th")
    }
  }), i.lang = k("moment.lang is deprecated. Use moment.locale instead.", ot), i.langData = k("moment.langData is deprecated. Use moment.localeData instead.", ct);
  var pi = Math.abs;

  function fi(e, t, i, n) {
    var r = qt(t, i);
    return e._milliseconds += n * r._milliseconds, e._days += n * r._days, e._months += n * r._months, e._bubble()
  }

  function mi(e) {
    return e < 0 ? Math.floor(e) : Math.ceil(e)
  }

  function gi(e) {
    return 4800 * e / 146097
  }

  function yi(e) {
    return 146097 * e / 4800
  }

  function vi(e) {
    return function() {
      return this.as(e)
    }
  }
  var _i = vi("ms"),
    bi = vi("s"),
    wi = vi("m"),
    Ti = vi("h"),
    Ai = vi("d"),
    ki = vi("w"),
    xi = vi("M"),
    Si = vi("y");

  function Ci(e) {
    return function() {
      return this.isValid() ? this._data[e] : NaN
    }
  }
  var Ei = Ci("milliseconds"),
    Pi = Ci("seconds"),
    Mi = Ci("minutes"),
    Oi = Ci("hours"),
    Di = Ci("days"),
    Ni = Ci("months"),
    Li = Ci("years"),
    zi = Math.round,
    Ri = {
      ss: 44,
      s: 45,
      m: 45,
      h: 22,
      d: 26,
      M: 11
    },
    ji = Math.abs;

  function Ii(e) {
    return (0 < e) - (e < 0) || +e
  }

  function Fi() {
    if (!this.isValid()) return this.localeData().invalidDate();
    var e, t, i = ji(this._milliseconds) / 1e3,
      n = ji(this._days),
      r = ji(this._months);
    t = b((e = b(i / 60)) / 60), i %= 60, e %= 60;
    var s = b(r / 12),
      a = r %= 12,
      o = n,
      l = t,
      c = e,
      u = i ? i.toFixed(3).replace(/\.?0+$/, "") : "",
      d = this.asSeconds();
    if (!d) return "P0D";
    var h = d < 0 ? "-" : "",
      p = Ii(this._months) !== Ii(d) ? "-" : "",
      f = Ii(this._days) !== Ii(d) ? "-" : "",
      m = Ii(this._milliseconds) !== Ii(d) ? "-" : "";
    return h + "P" + (s ? p + s + "Y" : "") + (a ? p + a + "M" : "") + (o ? f + o + "D" : "") + (l || c || u ? "T" : "") + (l ? m + l + "H" : "") + (c ? m + c + "M" : "") + (u ? m + u + "S" : "")
  }
  var Hi = Ot.prototype;
  return Hi.isValid = function() {
    return this._isValid
  }, Hi.abs = function() {
    var e = this._data;
    return this._milliseconds = pi(this._milliseconds), this._days = pi(this._days), this._months = pi(this._months), e.milliseconds = pi(e.milliseconds), e.seconds = pi(e.seconds), e.minutes = pi(e.minutes), e.hours = pi(e.hours), e.months = pi(e.months), e.years = pi(e.years), this
  }, Hi.add = function(e, t) {
    return fi(this, e, t, 1)
  }, Hi.subtract = function(e, t) {
    return fi(this, e, t, -1)
  }, Hi.as = function(e) {
    if (!this.isValid()) return NaN;
    var t, i, n = this._milliseconds;
    if ("month" === (e = N(e)) || "year" === e) return t = this._days + n / 864e5, i = this._months + gi(t), "month" === e ? i : i / 12;
    switch (t = this._days + Math.round(yi(this._months)), e) {
      case "week":
        return t / 7 + n / 6048e5;
      case "day":
        return t + n / 864e5;
      case "hour":
        return 24 * t + n / 36e5;
      case "minute":
        return 1440 * t + n / 6e4;
      case "second":
        return 86400 * t + n / 1e3;
      case "millisecond":
        return Math.floor(864e5 * t) + n;
      default:
        throw new Error("Unknown unit " + e)
    }
  }, Hi.asMilliseconds = _i, Hi.asSeconds = bi, Hi.asMinutes = wi, Hi.asHours = Ti, Hi.asDays = Ai, Hi.asWeeks = ki, Hi.asMonths = xi, Hi.asYears = Si, Hi.valueOf = function() {
    return this.isValid() ? this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * w(this._months / 12) : NaN
  }, Hi._bubble = function() {
    var e, t, i, n, r, s = this._milliseconds,
      a = this._days,
      o = this._months,
      l = this._data;
    return 0 <= s && 0 <= a && 0 <= o || s <= 0 && a <= 0 && o <= 0 || (s += 864e5 * mi(yi(o) + a), o = a = 0), l.milliseconds = s % 1e3, e = b(s / 1e3), l.seconds = e % 60, t = b(e / 60), l.minutes = t % 60, i = b(t / 60), l.hours = i % 24, o += r = b(gi(a += b(i / 24))), a -= mi(yi(r)), n = b(o / 12), o %= 12, l.days = a, l.months = o, l.years = n, this
  }, Hi.clone = function() {
    return qt(this)
  }, Hi.get = function(e) {
    return e = N(e), this.isValid() ? this[e + "s"]() : NaN
  }, Hi.milliseconds = Ei, Hi.seconds = Pi, Hi.minutes = Mi, Hi.hours = Oi, Hi.days = Di, Hi.weeks = function() {
    return b(this.days() / 7)
  }, Hi.months = Ni, Hi.years = Li, Hi.humanize = function(e) {
    if (!this.isValid()) return this.localeData().invalidDate();
    var t, i, n, r, s, a, o, l, c, u, d = this.localeData(),
      h = (t = !e, i = d, n = qt(this).abs(), r = zi(n.as("s")), s = zi(n.as("m")), a = zi(n.as("h")), o = zi(n.as("d")), l = zi(n.as("M")), c = zi(n.as("y")), (u = r <= Ri.ss && ["s", r] || r < Ri.s && ["ss", r] || s <= 1 && ["m"] || s < Ri.m && ["mm", s] || a <= 1 && ["h"] || a < Ri.h && ["hh", a] || o <= 1 && ["d"] || o < Ri.d && ["dd", o] || l <= 1 && ["M"] || l < Ri.M && ["MM", l] || c <= 1 && ["y"] || ["yy", c])[2] = t, u[3] = 0 < +this, u[4] = i, function(e, t, i, n, r) {
        return r.relativeTime(t || 1, !!i, e, n)
      }.apply(null, u));
    return e && (h = d.pastFuture(+this, h)), d.postformat(h)
  }, Hi.toISOString = Fi, Hi.toString = Fi, Hi.toJSON = Fi, Hi.locale = Kt, Hi.localeData = Qt, Hi.toIsoString = k("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", Fi), Hi.lang = Zt, q("X", 0, 0, "unix"), q("x", 0, 0, "valueOf"), le("x", ne), le("X", /[+-]?\d+(\.\d{1,3})?/), he("X", function(e, t, i) {
    i._d = new Date(1e3 * parseFloat(e, 10))
  }), he("x", function(e, t, i) {
    i._d = new Date(w(e))
  }), i.version = "2.22.1", e = St, i.fn = oi, i.min = function() {
    return Pt("isBefore", [].slice.call(arguments, 0))
  }, i.max = function() {
    return Pt("isAfter", [].slice.call(arguments, 0))
  }, i.now = function() {
    return Date.now ? Date.now() : +new Date
  }, i.utc = d, i.unix = function(e) {
    return St(1e3 * e)
  }, i.months = function(e, t) {
    return di(e, t, "months")
  }, i.isDate = o, i.locale = ot, i.invalid = f, i.duration = qt, i.isMoment = _, i.weekdays = function(e, t, i) {
    return hi(e, t, i, "weekdays")
  }, i.parseZone = function() {
    return St.apply(null, arguments).parseZone()
  }, i.localeData = ct, i.isDuration = Dt, i.monthsShort = function(e, t) {
    return di(e, t, "monthsShort")
  }, i.weekdaysMin = function(e, t, i) {
    return hi(e, t, i, "weekdaysMin")
  }, i.defineLocale = lt, i.updateLocale = function(e, t) {
    if (null != t) {
      var i, n, r = it;
      null != (n = at(e)) && (r = n._config), (i = new M(t = P(r, t))).parentLocale = nt[e], nt[e] = i, ot(e)
    } else null != nt[e] && (null != nt[e].parentLocale ? nt[e] = nt[e].parentLocale : null != nt[e] && delete nt[e]);
    return nt[e]
  }, i.locales = function() {
    return x(nt)
  }, i.weekdaysShort = function(e, t, i) {
    return hi(e, t, i, "weekdaysShort")
  }, i.normalizeUnits = N, i.relativeTimeRounding = function(e) {
    return void 0 === e ? zi : "function" == typeof e && (zi = e, !0)
  }, i.relativeTimeThreshold = function(e, t) {
    return void 0 !== Ri[e] && (void 0 === t ? Ri[e] : (Ri[e] = t, "s" === e && (Ri.ss = t - 1), !0))
  }, i.calendarFormat = function(e, t) {
    var i = e.diff(t, "days", !0);
    return i < -6 ? "sameElse" : i < -1 ? "lastWeek" : i < 0 ? "lastDay" : i < 1 ? "sameDay" : i < 2 ? "nextDay" : i < 7 ? "nextWeek" : "sameElse"
  }, i.prototype = oi, i.HTML5_FMT = {
    DATETIME_LOCAL: "YYYY-MM-DDTHH:mm",
    DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss",
    DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS",
    DATE: "YYYY-MM-DD",
    TIME: "HH:mm",
    TIME_SECONDS: "HH:mm:ss",
    TIME_MS: "HH:mm:ss.SSS",
    WEEK: "YYYY-[W]WW",
    MONTH: "YYYY-MM"
  }, i
}),
function(e, t) {
  "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define("Plyr", t) : e.Plyr = t()
}(this, function() {
  "use strict";
  "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self && self;
  var e, t, i = (function(e, t) {
      var i;
      i = function() {
        var e = function() {},
          t = {},
          i = {},
          n = {};

        function r(e, t) {
          if (e) {
            var r = n[e];
            if (i[e] = t, r)
              for (; r.length;) r[0](e, t), r.splice(0, 1)
          }
        }

        function s(t, i) {
          t.call && (t = {
            success: t
          }), i.length ? (t.error || e)(i) : (t.success || e)(t)
        }

        function a(t, i, n, r) {
          var s, o, l = document,
            c = n.async,
            u = (n.numRetries || 0) + 1,
            d = n.before || e,
            h = t.replace(/^(css|img)!/, "");
          r = r || 0, /(^css!|\.css$)/.test(t) ? (s = !0, (o = l.createElement("link")).rel = "stylesheet", o.href = h) : /(^img!|\.(png|gif|jpg|svg)$)/.test(t) ? (o = l.createElement("img")).src = h : ((o = l.createElement("script")).src = t, o.async = void 0 === c || c), o.onload = o.onerror = o.onbeforeload = function(e) {
            var l = e.type[0];
            if (s && "hideFocus" in o) try {
              o.sheet.cssText.length || (l = "e")
            } catch (e) {
              l = "e"
            }
            if ("e" == l && (r += 1) < u) return a(t, i, n, r);
            i(t, l, e.defaultPrevented)
          }, !1 !== d(t, o) && l.head.appendChild(o)
        }

        function o(e, i, n) {
          var o, l;
          if (i && i.trim && (o = i), l = (o ? n : i) || {}, o) {
            if (o in t) throw "LoadJS";
            t[o] = !0
          }! function(e, t, i) {
            var n, r, s = (e = e.push ? e : [e]).length,
              o = s,
              l = [];
            for (n = function(e, i, n) {
                if ("e" == i && l.push(e), "b" == i) {
                  if (!n) return;
                  l.push(e)
                }--s || t(l)
              }, r = 0; r < o; r++) a(e[r], n, i)
          }(e, function(e) {
            s(l, e), r(o, e)
          }, l)
        }
        return o.ready = function(e, t) {
          return function(e, t) {
            var r, s, a, o = [],
              l = (e = e.push ? e : [e]).length,
              c = l;
            for (r = function(e, i) {
                i.length && o.push(e), --c || t(o)
              }; l--;) s = e[l], (a = i[s]) ? r(s, a) : (n[s] = n[s] || []).push(r)
          }(e, function(e) {
            s(t, e)
          }), o
        }, o.done = function(e) {
          r(e, [])
        }, o.reset = function() {
          t = {}, i = {}, n = {}
        }, o.isDefined = function(e) {
          return e in t
        }, o
      }, e.exports = i()
    }(e = {
      exports: {}
    }), e.exports),
    n = {
      html5: "html5",
      youtube: "youtube",
      vimeo: "vimeo"
    },
    r = {
      audio: "audio",
      video: "video"
    },
    s = function(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    },
    a = function() {
      function e(e, t) {
        for (var i = 0; i < t.length; i++) {
          var n = t[i];
          n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
        }
      }
      return function(t, i, n) {
        return i && e(t.prototype, i), n && e(t, n), t
      }
    }(),
    o = function(e, t, i) {
      return t in e ? Object.defineProperty(e, t, {
        value: i,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = i, e
    },
    l = function(e, t) {
      if (Array.isArray(e)) return e;
      if (Symbol.iterator in Object(e)) return function(e, t) {
        var i = [],
          n = !0,
          r = !1,
          s = void 0;
        try {
          for (var a, o = e[Symbol.iterator](); !(n = (a = o.next()).done) && (i.push(a.value), !t || i.length !== t); n = !0);
        } catch (e) {
          r = !0, s = e
        } finally {
          try {
            !n && o.return && o.return()
          } finally {
            if (r) throw s
          }
        }
        return i
      }(e, t);
      throw new TypeError("Invalid attempt to destructure non-iterable instance")
    },
    c = {
      is: {
        object: function(e) {
          return this.getConstructor(e) === Object
        },
        number: function(e) {
          return this.getConstructor(e) === Number && !Number.isNaN(e)
        },
        string: function(e) {
          return this.getConstructor(e) === String
        },
        boolean: function(e) {
          return this.getConstructor(e) === Boolean
        },
        function: function(e) {
          return this.getConstructor(e) === Function
        },
        array: function(e) {
          return !this.nullOrUndefined(e) && Array.isArray(e)
        },
        weakMap: function(e) {
          return this.instanceof(e, WeakMap)
        },
        nodeList: function(e) {
          return this.instanceof(e, NodeList)
        },
        element: function(e) {
          return this.instanceof(e, Element)
        },
        textNode: function(e) {
          return this.getConstructor(e) === Text
        },
        event: function(e) {
          return this.instanceof(e, Event)
        },
        cue: function(e) {
          return this.instanceof(e, TextTrackCue) || this.instanceof(e, VTTCue)
        },
        track: function(e) {
          return this.instanceof(e, TextTrack) || !this.nullOrUndefined(e) && this.string(e.kind)
        },
        url: function(e) {
          return !this.nullOrUndefined(e) && /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/.test(e)
        },
        nullOrUndefined: function(e) {
          return null == e
        },
        empty: function(e) {
          return this.nullOrUndefined(e) || (this.string(e) || this.array(e) || this.nodeList(e)) && !e.length || this.object(e) && !Object.keys(e).length
        },
        instanceof: function(e, t) {
          return Boolean(e && t && e instanceof t)
        },
        getConstructor: function(e) {
          return this.nullOrUndefined(e) ? null : e.constructor
        }
      },
      getBrowser: function() {
        return {
          isIE: !!document.documentMode,
          isWebkit: "WebkitAppearance" in document.documentElement.style && !/Edge/.test(navigator.userAgent),
          isIPhone: /(iPhone|iPod)/gi.test(navigator.platform),
          isIos: /(iPad|iPhone|iPod)/gi.test(navigator.platform)
        }
      },
      fetch: function(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "text";
        return new Promise(function(i, n) {
          try {
            var r = new XMLHttpRequest;
            if (!("withCredentials" in r)) return;
            r.addEventListener("load", function() {
              if ("text" === t) try {
                i(JSON.parse(r.responseText))
              } catch (e) {
                i(r.responseText)
              } else i(r.response)
            }), r.addEventListener("error", function() {
              throw new Error(r.statusText)
            }), r.open("GET", e, !0), r.responseType = t, r.send()
          } catch (e) {
            n(e)
          }
        })
      },
      loadScript: function(e) {
        return new Promise(function(t, n) {
          i(e, {
            success: t,
            error: n
          })
        })
      },
      loadSprite: function(e, t) {
        if (c.is.string(e)) {
          var i = c.is.string(t),
            n = function() {
              return document.querySelectorAll("#" + t).length
            };
          if (!i || !n()) {
            var r = document.createElement("div");
            if (c.toggleHidden(r, !0), i && r.setAttribute("id", t), u.storage) {
              var s = window.localStorage.getItem("cache-" + t);
              if (null !== s) {
                var a = JSON.parse(s);
                return void o.call(r, a.content)
              }
            }
            c.fetch(e).then(function(e) {
              c.is.empty(e) || (u.storage && window.localStorage.setItem("cache-" + t, JSON.stringify({
                content: e
              })), o.call(r, e))
            }).catch(function() {})
          }
        }

        function o(e) {
          i && n() || (this.innerHTML = e, document.body.insertBefore(this, document.body.childNodes[0]))
        }
      },
      generateId: function(e) {
        return e + "-" + Math.floor(1e4 * Math.random())
      },
      wrap: function(e, t) {
        var i = e.length ? e : [e];
        Array.from(i).reverse().forEach(function(e, i) {
          var n = i > 0 ? t.cloneNode(!0) : t,
            r = e.parentNode,
            s = e.nextSibling;
          n.appendChild(e), s ? r.insertBefore(n, s) : r.appendChild(n)
        })
      },
      createElement: function(e, t, i) {
        var n = document.createElement(e);
        return c.is.object(t) && c.setAttributes(n, t), c.is.string(i) && (n.textContent = i), n
      },
      insertAfter: function(e, t) {
        t.parentNode.insertBefore(e, t.nextSibling)
      },
      insertElement: function(e, t, i, n) {
        t.appendChild(c.createElement(e, i, n))
      },
      removeElement: function(e) {
        c.is.nodeList(e) || c.is.array(e) ? Array.from(e).forEach(c.removeElement) : c.is.element(e) && c.is.element(e.parentNode) && e.parentNode.removeChild(e)
      },
      emptyElement: function(e) {
        for (var t = e.childNodes.length; t > 0;) e.removeChild(e.lastChild), t -= 1
      },
      replaceElement: function(e, t) {
        return c.is.element(t) && c.is.element(t.parentNode) && c.is.element(e) ? (t.parentNode.replaceChild(e, t), e) : null
      },
      setAttributes: function(e, t) {
        c.is.element(e) && !c.is.empty(t) && Object.entries(t).forEach(function(t) {
          var i = l(t, 2),
            n = i[0],
            r = i[1];
          e.setAttribute(n, r)
        })
      },
      getAttributesFromSelector: function(e, t) {
        if (!c.is.string(e) || c.is.empty(e)) return {};
        var i = {},
          n = t;
        return e.split(",").forEach(function(e) {
          var t = e.trim(),
            r = t.replace(".", ""),
            s = t.replace(/[[\]]/g, "").split("="),
            a = s[0],
            o = s.length > 1 ? s[1].replace(/["']/g, "") : "";
          switch (t.charAt(0)) {
            case ".":
              c.is.object(n) && c.is.string(n.class) && (n.class += " " + r), i.class = r;
              break;
            case "#":
              i.id = t.replace("#", "");
              break;
            case "[":
              i[a] = o
          }
        }), i
      },
      toggleHidden: function(e, t) {
        if (c.is.element(e)) {
          var i = t;
          c.is.boolean(i) || (i = !e.hasAttribute("hidden")), i ? e.setAttribute("hidden", "") : e.removeAttribute("hidden")
        }
      },
      toggleClass: function(e, t, i) {
        if (c.is.element(e)) {
          var n = e.classList.contains(t);
          return e.classList[i ? "add" : "remove"](t), i && !n || !i && n
        }
        return null
      },
      hasClass: function(e, t) {
        return c.is.element(e) && e.classList.contains(t)
      },
      matches: function(e, t) {
        var i = {
          Element: Element
        };
        return (i.matches || i.webkitMatchesSelector || i.mozMatchesSelector || i.msMatchesSelector || function() {
          return Array.from(document.querySelectorAll(t)).includes(this)
        }).call(e, t)
      },
      getElements: function(e) {
        return this.elements.container.querySelectorAll(e)
      },
      getElement: function(e) {
        return this.elements.container.querySelector(e)
      },
      getFocusElement: function() {
        var e = document.activeElement;
        return e && e !== document.body ? document.querySelector(":focus") : null
      },
      trapFocus: function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (c.is.element(e)) {
          var i = c.getElements.call(this, "button:not(:disabled), input:not(:disabled), [tabindex]"),
            n = i[0],
            r = i[i.length - 1],
            s = function(e) {
              if ("Tab" === e.key && 9 === e.keyCode) {
                var t = c.getFocusElement();
                t !== r || e.shiftKey ? t === n && e.shiftKey && (r.focus(), e.preventDefault()) : (n.focus(), e.preventDefault())
              }
            };
          t ? c.on(this.elements.container, "keydown", s, !1) : c.off(this.elements.container, "keydown", s, !1)
        }
      },
      toggleListener: function(e, t, i) {
        var n = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
          r = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
          s = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
        if (!c.is.empty(e) && !c.is.empty(t) && c.is.function(i))
          if (c.is.nodeList(e) || c.is.array(e)) Array.from(e).forEach(function(e) {
            e instanceof Node && c.toggleListener.call(null, e, t, i, n, r, s)
          });
          else {
            var a = t.split(" "),
              o = s;
            u.passiveListeners && (o = {
              passive: r,
              capture: s
            }), a.forEach(function(t) {
              e[n ? "addEventListener" : "removeEventListener"](t, i, o)
            })
          }
      },
      on: function(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
          i = arguments[2],
          n = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
          r = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        c.toggleListener(e, t, i, !0, n, r)
      },
      off: function(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
          i = arguments[2],
          n = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
          r = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
        c.toggleListener(e, t, i, !1, n, r)
      },
      dispatchEvent: function(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
          i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
          n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
        if (c.is.element(e) && !c.is.empty(t)) {
          var r = new CustomEvent(t, {
            bubbles: i,
            detail: Object.assign({}, n, {
              plyr: this
            })
          });
          e.dispatchEvent(r)
        }
      },
      toggleState: function(e, t) {
        if (c.is.array(e) || c.is.nodeList(e)) Array.from(e).forEach(function(e) {
          return c.toggleState(e, t)
        });
        else if (c.is.element(e)) {
          var i = "true" === e.getAttribute("aria-pressed"),
            n = c.is.boolean(t) ? t : !i;
          e.setAttribute("aria-pressed", n)
        }
      },
      format: function(e) {
        for (var t = arguments.length, i = Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) i[n - 1] = arguments[n];
        return c.is.empty(e) ? e : e.toString().replace(/{(\d+)}/g, function(e, t) {
          return c.is.string(i[t]) ? i[t] : ""
        })
      },
      getPercentage: function(e, t) {
        return 0 === e || 0 === t || Number.isNaN(e) || Number.isNaN(t) ? 0 : (e / t * 100).toFixed(2)
      },
      getHours: function(e) {
        return parseInt(e / 60 / 60 % 60, 10)
      },
      getMinutes: function(e) {
        return parseInt(e / 60 % 60, 10)
      },
      getSeconds: function(e) {
        return parseInt(e % 60, 10)
      },
      formatTime: function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
          t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (!c.is.number(e)) return this.formatTime(null, t, i);
        var n = function(e) {
            return ("0" + e).slice(-2)
          },
          r = this.getHours(e),
          s = this.getMinutes(e),
          a = this.getSeconds(e);
        return t || r > 0 ? r += ":" : r = "", (i ? "-" : "") + r + n(s) + ":" + n(a)
      },
      replaceAll: function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
          t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
          i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "";
        return e.replace(new RegExp(t.toString().replace(/([.*+?^=!:${}()|[\]\/\\])/g, "\\$1"), "g"), i.toString())
      },
      toTitleCase: function() {
        return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "").toString().replace(/\w\S*/g, function(e) {
          return e.charAt(0).toUpperCase() + e.substr(1).toLowerCase()
        })
      },
      toPascalCase: function() {
        var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "").toString();
        return e = c.replaceAll(e, "-", " "), e = c.replaceAll(e, "_", " "), e = c.toTitleCase(e), c.replaceAll(e, " ", "")
      },
      toCamelCase: function() {
        var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "").toString();
        return (e = c.toPascalCase(e)).charAt(0).toLowerCase() + e.slice(1)
      },
      extend: function() {
        for (var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = arguments.length, i = Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) i[n - 1] = arguments[n];
        if (!i.length) return e;
        var r = i.shift();
        return c.is.object(r) ? (Object.keys(r).forEach(function(t) {
          c.is.object(r[t]) ? (Object.keys(e).includes(t) || Object.assign(e, o({}, t, {})), c.extend(e[t], r[t])) : Object.assign(e, o({}, t, r[t]))
        }), c.extend.apply(c, [e].concat(function(e) {
          if (Array.isArray(e)) {
            for (var t = 0, i = Array(e.length); t < e.length; t++) i[t] = e[t];
            return i
          }
          return Array.from(e)
        }(i)))) : e
      },
      dedupe: function(e) {
        return c.is.array(e) ? e.filter(function(t, i) {
          return e.indexOf(t) === i
        }) : e
      },
      closest: function(e, t) {
        return c.is.array(e) && e.length ? e.reduce(function(e, i) {
          return Math.abs(i - t) < Math.abs(e - t) ? i : e
        }) : null
      },
      getProviderByUrl: function(e) {
        return /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.?be)\/.+$/.test(e) ? n.youtube : /^https?:\/\/player.vimeo.com\/video\/\d{0,9}(?=\b|\/)/.test(e) ? n.vimeo : null
      },
      parseYouTubeId: function(e) {
        return c.is.empty(e) ? null : e.match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/) ? RegExp.$2 : e
      },
      parseVimeoId: function(e) {
        return c.is.empty(e) ? null : c.is.number(Number(e)) ? e : e.match(/^.*(vimeo.com\/|video\/)(\d+).*/) ? RegExp.$2 : e
      },
      parseUrl: function(e) {
        var t = document.createElement("a");
        return t.href = e, t
      },
      getUrlParams: function(e) {
        var t = e;
        return (e.startsWith("http://") || e.startsWith("https://")) && (t = this.parseUrl(e).search), this.is.empty(t) ? null : t.slice(t.indexOf("?") + 1).split("&").reduce(function(e, t) {
          var i = t.split("="),
            n = l(i, 2),
            r = n[0],
            s = n[1];
          return Object.assign(e, o({}, r, decodeURIComponent(s)))
        }, {})
      },
      buildUrlParams: function(e) {
        return c.is.object(e) ? Object.keys(e).map(function(t) {
          return encodeURIComponent(t) + "=" + encodeURIComponent(e[t])
        }).join("&") : ""
      },
      stripHTML: function(e) {
        var t = document.createDocumentFragment(),
          i = document.createElement("div");
        return t.appendChild(i), i.innerHTML = e, t.firstChild.innerText
      },
      getAspectRatio: function(e, t) {
        var i = function e(t, i) {
          return 0 === i ? t : e(i, t % i)
        }(e, t);
        return e / i + ":" + t / i
      },
      get transitionEndEvent() {
        var e = document.createElement("span"),
          t = {
            WebkitTransition: "webkitTransitionEnd",
            MozTransition: "transitionend",
            OTransition: "oTransitionEnd otransitionend",
            transition: "transitionend"
          },
          i = Object.keys(t).find(function(t) {
            return void 0 !== e.style[t]
          });
        return !!c.is.string(i) && t[i]
      },
      repaint: function(e) {
        setTimeout(function() {
          c.toggleHidden(e, !0), e.offsetHeight, c.toggleHidden(e, !1)
        }, 0)
      }
    },
    u = {
      audio: "canPlayType" in document.createElement("audio"),
      video: "canPlayType" in document.createElement("video"),
      check: function(e, t, i) {
        var n = !1,
          r = !1,
          s = c.getBrowser(),
          a = s.isIPhone && i && u.playsinline;
        switch (t + ":" + e) {
          case "html5:video":
            r = (n = u.video) && u.rangeInput && (!s.isIPhone || a);
            break;
          case "html5:audio":
            r = (n = u.audio) && u.rangeInput;
            break;
          case "youtube:video":
          case "vimeo:video":
            n = !0, r = u.rangeInput && (!s.isIPhone || a);
            break;
          default:
            r = (n = u.audio && u.video) && u.rangeInput
        }
        return {
          api: n,
          ui: r
        }
      },
      pip: !c.getBrowser().isIPhone && c.is.function(c.createElement("video").webkitSetPresentationMode),
      airplay: c.is.function(window.WebKitPlaybackTargetAvailabilityEvent),
      playsinline: "playsInline" in document.createElement("video"),
      mime: function(e) {
        var t = this.media;
        try {
          if (!this.isHTML5 || !c.is.function(t.canPlayType)) return !1;
          if (e.includes("codecs=")) return t.canPlayType(e).replace(/no/, "");
          if (this.isVideo) switch (e) {
            case "video/webm":
              return t.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/no/, "");
            case "video/mp4":
              return t.canPlayType('video/mp4; codecs="avc1.42E01E, mp4a.40.2"').replace(/no/, "");
            case "video/ogg":
              return t.canPlayType('video/ogg; codecs="theora"').replace(/no/, "");
            default:
              return !1
          } else if (this.isAudio) switch (e) {
            case "audio/mpeg":
              return t.canPlayType("audio/mpeg;").replace(/no/, "");
            case "audio/ogg":
              return t.canPlayType('audio/ogg; codecs="vorbis"').replace(/no/, "");
            case "audio/wav":
              return t.canPlayType('audio/wav; codecs="1"').replace(/no/, "");
            default:
              return !1
          }
        } catch (e) {
          return !1
        }
        return !1
      },
      textTracks: "textTracks" in document.createElement("video"),
      passiveListeners: function() {
        var e = !1;
        try {
          var t = Object.defineProperty({}, "passive", {
            get: function() {
              return e = !0, null
            }
          });
          window.addEventListener("test", null, t)
        } catch (e) {}
        return e
      }(),
      rangeInput: (t = document.createElement("input"), t.type = "range", "range" === t.type),
      touch: "ontouchstart" in document.documentElement,
      transitions: !1 !== c.transitionEndEvent,
      reducedMotion: "matchMedia" in window && window.matchMedia("(prefers-reduced-motion)").matches
    },
    d = {
      getSources: function() {
        return this.isHTML5 ? this.media.querySelectorAll("source") : null
      },
      getQualityOptions: function() {
        if (!this.isHTML5) return null;
        var e = d.getSources.call(this);
        if (c.is.empty(e)) return null;
        var t = Array.from(e).filter(function(e) {
          return !c.is.empty(e.getAttribute("size"))
        });
        return c.is.empty(t) ? null : c.dedupe(t.map(function(e) {
          return Number(e.getAttribute("size"))
        }))
      },
      extend: function() {
        if (this.isHTML5) {
          var e = this;
          Object.defineProperty(e.media, "quality", {
            get: function() {
              var t = d.getSources.call(e);
              if (c.is.empty(t)) return null;
              var i = Array.from(t).filter(function(t) {
                return t.getAttribute("src") === e.source
              });
              return c.is.empty(i) ? null : Number(i[0].getAttribute("size"))
            },
            set: function(t) {
              var i = d.getSources.call(e);
              if (!c.is.empty(i)) {
                var n = Array.from(i).filter(function(e) {
                  return Number(e.getAttribute("size")) === t
                });
                if (!c.is.empty(n)) {
                  var r = n.filter(function(t) {
                    return u.mime.call(e, t.getAttribute("type"))
                  });
                  if (!c.is.empty(r)) {
                    c.dispatchEvent.call(e, e.media, "qualityrequested", !1, {
                      quality: t
                    });
                    var s = e.currentTime,
                      a = e.playing;
                    e.media.src = r[0].getAttribute("src"), e.media.load(), a && e.play(), e.currentTime = s, c.dispatchEvent.call(e, e.media, "qualitychange", !1, {
                      quality: t
                    })
                  }
                }
              }
            }
          })
        }
      },
      cancelRequests: function() {
        this.isHTML5 && (c.removeElement(d.getSources()), this.media.setAttribute("src", this.config.blankVideo), this.media.load(), this.debug.log("Cancelled network requests"))
      }
    },
    h = function() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      if (c.is.empty(e) || c.is.empty(t) || !Object.keys(t.i18n).includes(e)) return "";
      var i = t.i18n[e],
        n = {
          "{seektime}": t.seekTime,
          "{title}": t.title
        };
      return Object.entries(n).forEach(function(e) {
        var t = l(e, 2),
          n = t[0],
          r = t[1];
        i = c.replaceAll(i, n, r)
      }), i
    },
    p = c.getBrowser(),
    f = {
      addStyleHook: function() {
        c.toggleClass(this.elements.container, this.config.selectors.container.replace(".", ""), !0), c.toggleClass(this.elements.container, this.config.classNames.uiSupported, this.supported.ui)
      },
      toggleNativeControls: function() {
        arguments.length > 0 && void 0 !== arguments[0] && arguments[0] && this.isHTML5 ? this.media.setAttribute("controls", "") : this.media.removeAttribute("controls")
      },
      build: function() {
        var e = this;
        if (this.listeners.media(), !this.supported.ui) return this.debug.warn("Basic support only for " + this.provider + " " + this.type), void f.toggleNativeControls.call(this, !0);
        c.is.element(this.elements.controls) || (g.inject.call(this), this.listeners.controls()), f.toggleNativeControls.call(this), y.setup.call(this), this.volume = null, this.muted = null, this.speed = null, this.loop = null, this.quality = null, f.updateVolume.call(this), f.timeUpdate.call(this), f.checkPlaying.call(this), c.toggleClass(this.elements.container, this.config.classNames.pip.supported, u.pip && this.isHTML5 && this.isVideo), c.toggleClass(this.elements.container, this.config.classNames.airplay.supported, u.airplay && this.isHTML5), c.toggleClass(this.elements.container, this.config.classNames.isIos, p.isIos), c.toggleClass(this.elements.container, this.config.classNames.isTouch, this.touch), this.ready = !0, setTimeout(function() {
          c.dispatchEvent.call(e, e.media, "ready")
        }, 0), f.setTitle.call(this), f.setPoster.call(this)
      },
      setTitle: function() {
        var e = h("play", this.config);
        if (c.is.string(this.config.title) && !c.is.empty(this.config.title) && (e += ", " + this.config.title, this.elements.container.setAttribute("aria-label", this.config.title)), c.is.nodeList(this.elements.buttons.play) && Array.from(this.elements.buttons.play).forEach(function(t) {
            t.setAttribute("aria-label", e)
          }), this.isEmbed) {
          var t = c.getElement.call(this, "iframe");
          if (!c.is.element(t)) return;
          var i = c.is.empty(this.config.title) ? "video" : this.config.title,
            n = h("frameTitle", this.config);
          t.setAttribute("title", n.replace("{title}", i))
        }
      },
      setPoster: function() {
        if (c.is.element(this.elements.poster) && !c.is.empty(this.poster)) {
          var e = this.poster.split(",");
          this.elements.poster.style.backgroundImage = e.map(function(e) {
            return "url('" + e + "')"
          }).join(",")
        }
      },
      checkPlaying: function(e) {
        c.toggleClass(this.elements.container, this.config.classNames.playing, this.playing), c.toggleClass(this.elements.container, this.config.classNames.paused, this.paused), c.toggleClass(this.elements.container, this.config.classNames.stopped, this.stopped), c.toggleState(this.elements.buttons.play, this.playing), c.is.event(e) && "timeupdate" === e.type || this.toggleControls(!this.playing)
      },
      checkLoading: function(e) {
        var t = this;
        this.loading = ["stalled", "waiting"].includes(e.type), clearTimeout(this.timers.loading), this.timers.loading = setTimeout(function() {
          c.toggleClass(t.elements.container, t.config.classNames.loading, t.loading), t.toggleControls(t.loading)
        }, this.loading ? 250 : 0)
      },
      checkFailed: function() {
        var e = this;
        this.failed = 3 === this.media.networkState, this.failed && (c.toggleClass(this.elements.container, this.config.classNames.loading, !1), c.toggleClass(this.elements.container, this.config.classNames.error, !0)), clearTimeout(this.timers.failed), this.timers.loading = setTimeout(function() {
          c.toggleClass(e.elements.container, e.config.classNames.loading, e.loading), e.toggleControls(e.loading)
        }, this.loading ? 250 : 0)
      },
      updateVolume: function() {
        this.supported.ui && (c.is.element(this.elements.inputs.volume) && f.setRange.call(this, this.elements.inputs.volume, this.muted ? 0 : this.volume), c.is.element(this.elements.buttons.mute) && c.toggleState(this.elements.buttons.mute, this.muted || 0 === this.volume))
      },
      setRange: function(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
        c.is.element(e) && (e.value = t, g.updateRangeFill.call(this, e))
      },
      setProgress: function(e, t) {
        var i = c.is.number(t) ? t : 0,
          n = c.is.element(e) ? e : this.elements.display.buffer;
        if (c.is.element(n)) {
          n.value = i;
          var r = n.getElementsByTagName("span")[0];
          c.is.element(r) && (r.childNodes[0].nodeValue = i)
        }
      },
      updateProgress: function(e) {
        if (this.supported.ui && c.is.event(e)) {
          var t = 0;
          if (e) switch (e.type) {
            case "timeupdate":
            case "seeking":
              t = c.getPercentage(this.currentTime, this.duration), "timeupdate" === e.type && f.setRange.call(this, this.elements.inputs.seek, t);
              break;
            case "playing":
            case "progress":
              f.setProgress.call(this, this.elements.display.buffer, 100 * this.buffered)
          }
        }
      },
      updateTimeDisplay: function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
          t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (c.is.element(e) && c.is.number(t)) {
          var n = c.getHours(this.duration) > 0;
          e.textContent = c.formatTime(t, n, i)
        }
      },
      timeUpdate: function(e) {
        var t = !c.is.element(this.elements.display.duration) && this.config.invertTime;
        f.updateTimeDisplay.call(this, this.elements.display.currentTime, t ? this.duration - this.currentTime : this.currentTime, t), e && "timeupdate" === e.type && this.media.seeking || f.updateProgress.call(this, e)
      },
      durationUpdate: function() {
        if (this.supported.ui) {
          var e = c.is.element(this.elements.display.duration);
          !e && this.config.displayDuration && this.paused && f.updateTimeDisplay.call(this, this.elements.display.currentTime, this.duration), e && f.updateTimeDisplay.call(this, this.elements.display.duration, this.duration), g.updateSeekTooltip.call(this)
        }
      }
    },
    m = c.getBrowser(),
    g = {
      updateRangeFill: function(e) {
        var t = c.is.event(e) ? e.target : e;
        c.is.element(t) && "range" === t.getAttribute("type") && (t.setAttribute("aria-valuenow", t.value), m.isWebkit && t.style.setProperty("--value", t.value / t.max * 100 + "%"))
      },
      getIconUrl: function() {
        var e = new URL(this.config.iconUrl, window.location).host !== window.location.host || m.isIE && !window.svg4everybody;
        return {
          url: this.config.iconUrl,
          cors: e
        }
      },
      findElements: function() {
        try {
          return this.elements.controls = c.getElement.call(this, this.config.selectors.controls.wrapper), this.elements.buttons = {
            play: c.getElements.call(this, this.config.selectors.buttons.play),
            pause: c.getElement.call(this, this.config.selectors.buttons.pause),
            restart: c.getElement.call(this, this.config.selectors.buttons.restart),
            rewind: c.getElement.call(this, this.config.selectors.buttons.rewind),
            fastForward: c.getElement.call(this, this.config.selectors.buttons.fastForward),
            mute: c.getElement.call(this, this.config.selectors.buttons.mute),
            pip: c.getElement.call(this, this.config.selectors.buttons.pip),
            airplay: c.getElement.call(this, this.config.selectors.buttons.airplay),
            settings: c.getElement.call(this, this.config.selectors.buttons.settings),
            captions: c.getElement.call(this, this.config.selectors.buttons.captions),
            fullscreen: c.getElement.call(this, this.config.selectors.buttons.fullscreen)
          }, this.elements.progress = c.getElement.call(this, this.config.selectors.progress), this.elements.inputs = {
            seek: c.getElement.call(this, this.config.selectors.inputs.seek),
            volume: c.getElement.call(this, this.config.selectors.inputs.volume)
          }, this.elements.display = {
            buffer: c.getElement.call(this, this.config.selectors.display.buffer),
            currentTime: c.getElement.call(this, this.config.selectors.display.currentTime),
            duration: c.getElement.call(this, this.config.selectors.display.duration)
          }, c.is.element(this.elements.progress) && (this.elements.display.seekTooltip = this.elements.progress.querySelector("." + this.config.classNames.tooltip)), !0
        } catch (e) {
          return this.debug.warn("It looks like there is a problem with your custom controls HTML", e), this.toggleNativeControls(!0), !1
        }
      },
      createIcon: function(e, t) {
        var i = g.getIconUrl.call(this),
          n = (i.cors ? "" : i.url) + "#" + this.config.iconPrefix,
          r = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        c.setAttributes(r, c.extend(t, {
          role: "presentation",
          focusable: "false"
        }));
        var s = document.createElementNS("http://www.w3.org/2000/svg", "use"),
          a = n + "-" + e;
        return "href" in s ? s.setAttributeNS("http://www.w3.org/1999/xlink", "href", a) : s.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", a), r.appendChild(s), r
      },
      createLabel: function(e, t) {
        var i = h(e, this.config),
          n = Object.assign({}, t);
        switch (e) {
          case "pip":
            i = "PIP";
            break;
          case "airplay":
            i = "AirPlay"
        }
        return "class" in n ? n.class += " " + this.config.classNames.hidden : n.class = this.config.classNames.hidden, c.createElement("span", n, i)
      },
      createBadge: function(e) {
        if (c.is.empty(e)) return null;
        var t = c.createElement("span", {
          class: this.config.classNames.menu.value
        });
        return t.appendChild(c.createElement("span", {
          class: this.config.classNames.menu.badge
        }, e)), t
      },
      createButton: function(e, t) {
        var i = c.createElement("button"),
          n = Object.assign({}, t),
          r = c.toCamelCase(e),
          s = !1,
          a = void 0,
          o = void 0,
          l = void 0,
          u = void 0;
        switch ("type" in n || (n.type = "button"), "class" in n ? n.class.includes(this.config.classNames.control) && (n.class += " " + this.config.classNames.control) : n.class = this.config.classNames.control, e) {
          case "play":
            s = !0, a = "play", l = "pause", o = "play", u = "pause";
            break;
          case "mute":
            s = !0, a = "mute", l = "unmute", o = "volume", u = "muted";
            break;
          case "captions":
            s = !0, a = "enableCaptions", l = "disableCaptions", o = "captions-off", u = "captions-on";
            break;
          case "fullscreen":
            s = !0, a = "enterFullscreen", l = "exitFullscreen", o = "enter-fullscreen", u = "exit-fullscreen";
            break;
          case "play-large":
            n.class += " " + this.config.classNames.control + "--overlaid", r = "play", a = "play", o = "play";
            break;
          default:
            a = r, o = e
        }
        return s ? (i.appendChild(g.createIcon.call(this, u, {
          class: "icon--pressed"
        })), i.appendChild(g.createIcon.call(this, o, {
          class: "icon--not-pressed"
        })), i.appendChild(g.createLabel.call(this, l, {
          class: "label--pressed"
        })), i.appendChild(g.createLabel.call(this, a, {
          class: "label--not-pressed"
        })), n["aria-pressed"] = !1) : (i.appendChild(g.createIcon.call(this, o)), i.appendChild(g.createLabel.call(this, a))), c.extend(n, c.getAttributesFromSelector(this.config.selectors.buttons[r], n)), c.setAttributes(i, n), "play" === r ? (c.is.array(this.elements.buttons[r]) || (this.elements.buttons[r] = []), this.elements.buttons[r].push(i)) : this.elements.buttons[r] = i, i
      },
      createRange: function(e, t) {
        var i = c.createElement("label", {
            for: t.id,
            id: t.id + "-label",
            class: this.config.classNames.hidden
          }, h(e, this.config)),
          n = c.createElement("input", c.extend(c.getAttributesFromSelector(this.config.selectors.inputs[e]), {
            type: "range",
            min: 0,
            max: 100,
            step: .01,
            value: 0,
            autocomplete: "off",
            role: "slider",
            "aria-labelledby": t.id + "-label",
            "aria-valuemin": 0,
            "aria-valuemax": 100,
            "aria-valuenow": 0
          }, t));
        return this.elements.inputs[e] = n, g.updateRangeFill.call(this, n), {
          label: i,
          input: n
        }
      },
      createProgress: function(e, t) {
        var i = c.createElement("progress", c.extend(c.getAttributesFromSelector(this.config.selectors.display[e]), {
          min: 0,
          max: 100,
          value: 0,
          role: "presentation",
          "aria-hidden": !0
        }, t));
        if ("volume" !== e) {
          i.appendChild(c.createElement("span", null, "0"));
          var n = "";
          switch (e) {
            case "played":
              n = h("played", this.config);
              break;
            case "buffer":
              n = h("buffered", this.config)
          }
          i.textContent = "% " + n.toLowerCase()
        }
        return this.elements.display[e] = i, i
      },
      createTime: function(e) {
        var t = c.getAttributesFromSelector(this.config.selectors.display[e]),
          i = c.createElement("div", c.extend(t, {
            class: "plyr__time " + t.class,
            "aria-label": h(e, this.config)
          }), "00:00");
        return this.elements.display[e] = i, i
      },
      createMenuItem: function(e, t, i, n) {
        var r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
          s = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
          a = c.createElement("li"),
          o = c.createElement("label", {
            class: this.config.classNames.control
          }),
          l = c.createElement("input", c.extend(c.getAttributesFromSelector(this.config.selectors.inputs[i]), {
            type: "radio",
            name: "plyr-" + i,
            value: e,
            checked: s,
            class: "plyr__sr-only"
          })),
          u = c.createElement("span", {
            hidden: ""
          });
        o.appendChild(l), o.appendChild(u), o.insertAdjacentHTML("beforeend", n), c.is.element(r) && o.appendChild(r), a.appendChild(o), t.appendChild(a)
      },
      updateSeekTooltip: function(e) {
        var t = this;
        if (this.config.tooltips.seek && c.is.element(this.elements.inputs.seek) && c.is.element(this.elements.display.seekTooltip) && 0 !== this.duration) {
          var i = 0,
            n = this.elements.inputs.seek.getBoundingClientRect(),
            r = this.config.classNames.tooltip + "--visible",
            s = function(e) {
              c.toggleClass(t.elements.display.seekTooltip, r, e)
            };
          if (this.touch) s(!1);
          else {
            if (c.is.event(e)) i = 100 / n.width * (e.pageX - n.left);
            else {
              if (!c.hasClass(this.elements.display.seekTooltip, r)) return;
              i = parseFloat(this.elements.display.seekTooltip.style.left, 10)
            }
            i < 0 ? i = 0 : i > 100 && (i = 100), f.updateTimeDisplay.call(this, this.elements.display.seekTooltip, this.duration / 100 * i), this.elements.display.seekTooltip.style.left = i + "%", c.is.event(e) && ["mouseenter", "mouseleave"].includes(e.type) && s("mouseenter" === e.type)
          }
        }
      },
      toggleTab: function(e, t) {
        c.toggleHidden(this.elements.settings.tabs[e], !t)
      },
      setQualityMenu: function(e) {
        var t = this;
        if (c.is.element(this.elements.settings.panes.quality)) {
          var i = this.elements.settings.panes.quality.querySelector("ul");
          c.is.array(e) && (this.options.quality = e.filter(function(e) {
            return t.config.quality.options.includes(e)
          }));
          var n = !c.is.empty(this.options.quality) && this.options.quality.length > 1;
          g.toggleTab.call(this, "quality", n), g.checkMenu.call(this), n && (c.emptyElement(i), this.options.quality.sort(function(e, i) {
            var n = t.config.quality.options;
            return n.indexOf(e) > n.indexOf(i) ? 1 : -1
          }).forEach(function(e) {
            var n = g.getLabel.call(t, "quality", e);
            g.createMenuItem.call(t, e, i, "quality", n, function(e) {
              var i = "";
              switch (e) {
                case 2160:
                  i = "4K";
                  break;
                case 1440:
                case 1080:
                case 720:
                  i = "HD";
                  break;
                case 576:
                case 480:
                  i = "SD"
              }
              return i.length ? g.createBadge.call(t, i) : null
            }(e))
          }), g.updateSetting.call(this, "quality", i))
        }
      },
      getLabel: function(e, t) {
        switch (e) {
          case "speed":
            return 1 === t ? h("normal", this.config) : t + "&times;";
          case "quality":
            return c.is.number(t) ? t + "p" : c.toTitleCase(t);
          case "captions":
            return y.getLabel.call(this);
          default:
            return null
        }
      },
      updateSetting: function(e, t, i) {
        var n = this.elements.settings.panes[e],
          r = null,
          s = t;
        switch (e) {
          case "captions":
            r = this.captions.active ? this.options.captions.length > 2 || !this.options.captions.some(function(e) {
              return "enabled" === e
            }) ? this.captions.language : "enabled" : "";
            break;
          default:
            if (r = c.is.empty(i) ? this[e] : i, c.is.empty(r) && (r = this.config[e].default), !c.is.empty(this.options[e]) && !this.options[e].includes(r)) return void this.debug.warn("Unsupported value of '" + r + "' for " + e);
            if (!this.config[e].options.includes(r)) return void this.debug.warn("Disabled value of '" + r + "' for " + e)
        }
        if (c.is.element(s) || (s = n && n.querySelector("ul")), c.is.element(s)) {
          this.elements.settings.tabs[e].querySelector("." + this.config.classNames.menu.value).innerHTML = g.getLabel.call(this, e, r);
          var a = s && s.querySelector('input[value="' + r + '"]');
          c.is.element(a) && (a.checked = !0)
        }
      },
      setCaptionsMenu: function() {
        var e = this,
          t = this.elements.settings.panes.captions.querySelector("ul"),
          i = y.getTracks.call(this).length;
        if (g.toggleTab.call(this, "captions", i), c.emptyElement(t), g.checkMenu.call(this), i) {
          var n = y.getTracks.call(this).map(function(t) {
            return {
              language: c.is.empty(t.language) ? "enabled" : t.language,
              label: y.getLabel.call(e, t)
            }
          });
          n.unshift({
            language: "",
            label: h("disabled", this.config)
          }), n.forEach(function(i) {
            g.createMenuItem.call(e, i.language, t, "language", i.label, "enabled" !== i.language ? g.createBadge.call(e, i.language.toUpperCase()) : null, i.language.toLowerCase() === e.captions.language.toLowerCase())
          }), this.options.captions = n.map(function(e) {
            return e.language
          }), g.updateSetting.call(this, "captions", t)
        }
      },
      setSpeedMenu: function(e) {
        var t = this;
        if (this.config.controls.includes("settings") && this.config.settings.includes("speed") && c.is.element(this.elements.settings.panes.speed)) {
          c.is.array(e) ? this.options.speed = e : (this.isHTML5 || this.isVimeo) && (this.options.speed = [.5, .75, 1, 1.25, 1.5, 1.75, 2]), this.options.speed = this.options.speed.filter(function(e) {
            return t.config.speed.options.includes(e)
          });
          var i = !c.is.empty(this.options.speed) && this.options.speed.length > 1;
          if (g.toggleTab.call(this, "speed", i), g.checkMenu.call(this), i) {
            var n = this.elements.settings.panes.speed.querySelector("ul");
            c.emptyElement(n), this.options.speed.forEach(function(e) {
              var i = g.getLabel.call(t, "speed", e);
              g.createMenuItem.call(t, e, n, "speed", i)
            }), g.updateSetting.call(this, "speed", n)
          }
        }
      },
      checkMenu: function() {
        var e = this.elements.settings.tabs,
          t = !c.is.empty(e) && Object.values(e).some(function(e) {
            return !e.hidden
          });
        c.toggleHidden(this.elements.settings.menu, !t)
      },
      toggleMenu: function(e) {
        var t = this.elements.settings.form,
          i = this.elements.buttons.settings;
        if (c.is.element(t) && c.is.element(i)) {
          var n = c.is.boolean(e) ? e : c.is.element(t) && t.hasAttribute("hidden");
          if (c.is.event(e)) {
            var r = c.is.element(t) && t.contains(e.target),
              s = e.target === this.elements.buttons.settings;
            if (r || !r && !s && n) return;
            s && e.stopPropagation()
          }
          c.is.element(i) && i.setAttribute("aria-expanded", n), c.is.element(t) && (c.toggleHidden(t, !n), c.toggleClass(this.elements.container, this.config.classNames.menu.open, n), n ? t.removeAttribute("tabindex") : t.setAttribute("tabindex", -1))
        }
      },
      getTabSize: function(e) {
        var t = e.cloneNode(!0);
        t.style.position = "absolute", t.style.opacity = 0, t.removeAttribute("hidden"), Array.from(t.querySelectorAll("input[name]")).forEach(function(e) {
          var t = e.getAttribute("name");
          e.setAttribute("name", t + "-clone")
        }), e.parentNode.appendChild(t);
        var i = t.scrollWidth,
          n = t.scrollHeight;
        return c.removeElement(t), {
          width: i,
          height: n
        }
      },
      showTab: function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
          t = this.elements.settings.menu,
          i = document.getElementById(e);
        if (c.is.element(i) && "tabpanel" === i.getAttribute("role")) {
          var n = t.querySelector('[role="tabpanel"]:not([hidden])'),
            r = n.parentNode;
          if (Array.from(t.querySelectorAll('[aria-controls="' + n.getAttribute("id") + '"]')).forEach(function(e) {
              e.setAttribute("aria-expanded", !1)
            }), u.transitions && !u.reducedMotion) {
            r.style.width = n.scrollWidth + "px", r.style.height = n.scrollHeight + "px";
            var s = g.getTabSize.call(this, i);
            c.on(r, c.transitionEndEvent, function e(t) {
              t.target === r && ["width", "height"].includes(t.propertyName) && (r.style.width = "", r.style.height = "", c.off(r, c.transitionEndEvent, e))
            }), r.style.width = s.width + "px", r.style.height = s.height + "px"
          }
          c.toggleHidden(n, !0), n.setAttribute("tabindex", -1), c.toggleHidden(i, !1);
          var a = c.getElements.call(this, '[aria-controls="' + e + '"]');
          Array.from(a).forEach(function(e) {
            e.setAttribute("aria-expanded", !0)
          }), i.removeAttribute("tabindex"), i.querySelectorAll("button:not(:disabled), input:not(:disabled), [tabindex]")[0].focus()
        }
      },
      create: function(e) {
        var t = this;
        if (c.is.empty(this.config.controls)) return null;
        var i = c.createElement("div", c.getAttributesFromSelector(this.config.selectors.controls.wrapper));
        if (this.config.controls.includes("restart") && i.appendChild(g.createButton.call(this, "restart")), this.config.controls.includes("rewind") && i.appendChild(g.createButton.call(this, "rewind")), this.config.controls.includes("play") && i.appendChild(g.createButton.call(this, "play")), this.config.controls.includes("fast-forward") && i.appendChild(g.createButton.call(this, "fast-forward")), this.config.controls.includes("progress")) {
          var n = c.createElement("div", c.getAttributesFromSelector(this.config.selectors.progress)),
            r = g.createRange.call(this, "seek", {
              id: "plyr-seek-" + e.id
            });
          if (n.appendChild(r.label), n.appendChild(r.input), n.appendChild(g.createProgress.call(this, "buffer")), this.config.tooltips.seek) {
            var s = c.createElement("span", {
              role: "tooltip",
              class: this.config.classNames.tooltip
            }, "00:00");
            n.appendChild(s), this.elements.display.seekTooltip = s
          }
          this.elements.progress = n, i.appendChild(this.elements.progress)
        }
        if (this.config.controls.includes("current-time") && i.appendChild(g.createTime.call(this, "currentTime")), this.config.controls.includes("duration") && i.appendChild(g.createTime.call(this, "duration")), this.config.controls.includes("mute") && i.appendChild(g.createButton.call(this, "mute")), this.config.controls.includes("volume")) {
          var a = c.createElement("div", {
              class: "plyr__volume"
            }),
            o = {
              max: 1,
              step: .05,
              value: this.config.volume
            },
            l = g.createRange.call(this, "volume", c.extend(o, {
              id: "plyr-volume-" + e.id
            }));
          a.appendChild(l.label), a.appendChild(l.input), this.elements.volume = a, i.appendChild(a)
        }
        if (this.config.controls.includes("captions") && i.appendChild(g.createButton.call(this, "captions")), this.config.controls.includes("settings") && !c.is.empty(this.config.settings)) {
          var p = c.createElement("div", {
            class: "plyr__menu",
            hidden: ""
          });
          p.appendChild(g.createButton.call(this, "settings", {
            id: "plyr-settings-toggle-" + e.id,
            "aria-haspopup": !0,
            "aria-controls": "plyr-settings-" + e.id,
            "aria-expanded": !1
          }));
          var f = c.createElement("form", {
              class: "plyr__menu__container",
              id: "plyr-settings-" + e.id,
              hidden: "",
              "aria-labelled-by": "plyr-settings-toggle-" + e.id,
              role: "tablist",
              tabindex: -1
            }),
            m = c.createElement("div"),
            y = c.createElement("div", {
              id: "plyr-settings-" + e.id + "-home",
              "aria-labelled-by": "plyr-settings-toggle-" + e.id,
              role: "tabpanel"
            }),
            v = c.createElement("ul", {
              role: "tablist"
            });
          this.config.settings.forEach(function(i) {
            var n = c.createElement("li", {
                role: "tab",
                hidden: ""
              }),
              r = c.createElement("button", c.extend(c.getAttributesFromSelector(t.config.selectors.buttons.settings), {
                type: "button",
                class: t.config.classNames.control + " " + t.config.classNames.control + "--forward",
                id: "plyr-settings-" + e.id + "-" + i + "-tab",
                "aria-haspopup": !0,
                "aria-controls": "plyr-settings-" + e.id + "-" + i,
                "aria-expanded": !1
              }), h(i, t.config)),
              s = c.createElement("span", {
                class: t.config.classNames.menu.value
              });
            s.innerHTML = e[i], r.appendChild(s), n.appendChild(r), v.appendChild(n), t.elements.settings.tabs[i] = n
          }), y.appendChild(v), m.appendChild(y), this.config.settings.forEach(function(i) {
            var n = c.createElement("div", {
                id: "plyr-settings-" + e.id + "-" + i,
                hidden: "",
                "aria-labelled-by": "plyr-settings-" + e.id + "-" + i + "-tab",
                role: "tabpanel",
                tabindex: -1
              }),
              r = c.createElement("button", {
                type: "button",
                class: t.config.classNames.control + " " + t.config.classNames.control + "--back",
                "aria-haspopup": !0,
                "aria-controls": "plyr-settings-" + e.id + "-home",
                "aria-expanded": !1
              }, h(i, t.config));
            n.appendChild(r);
            var s = c.createElement("ul");
            n.appendChild(s), m.appendChild(n), t.elements.settings.panes[i] = n
          }), f.appendChild(m), p.appendChild(f), i.appendChild(p), this.elements.settings.form = f, this.elements.settings.menu = p
        }
        return this.config.controls.includes("pip") && u.pip && i.appendChild(g.createButton.call(this, "pip")), this.config.controls.includes("airplay") && u.airplay && i.appendChild(g.createButton.call(this, "airplay")), this.config.controls.includes("fullscreen") && i.appendChild(g.createButton.call(this, "fullscreen")), this.config.controls.includes("play-large") && this.elements.container.appendChild(g.createButton.call(this, "play-large")), this.elements.controls = i, this.isHTML5 && g.setQualityMenu.call(this, d.getQualityOptions.call(this)), g.setSpeedMenu.call(this), i
      },
      inject: function() {
        var e = this;
        if (this.config.loadSprite) {
          var t = g.getIconUrl.call(this);
          t.cors && c.loadSprite(t.url, "sprite-plyr")
        }
        this.id = Math.floor(1e4 * Math.random());
        var i = null;
        this.elements.controls = null;
        var n = {
            id: this.id,
            seektime: this.config.seekTime,
            title: this.config.title
          },
          r = !0;
        c.is.string(this.config.controls) || c.is.element(this.config.controls) ? i = this.config.controls : c.is.function(this.config.controls) ? i = this.config.controls.call(this, n) : (i = g.create.call(this, {
          id: this.id,
          seektime: this.config.seekTime,
          speed: this.speed,
          quality: this.quality,
          captions: y.getLabel.call(this)
        }), r = !1);
        var s = function(e) {
          var t = e;
          return Object.entries(n).forEach(function(e) {
            var i = l(e, 2),
              n = i[0],
              r = i[1];
            t = c.replaceAll(t, "{" + n + "}", r)
          }), t
        };
        r && (c.is.string(this.config.controls) ? i = s(i) : c.is.element(i) && (i.innerHTML = s(i.innerHTML)));
        var a = void 0;
        if (c.is.string(this.config.selectors.controls.container) && (a = document.querySelector(this.config.selectors.controls.container)), c.is.element(a) || (a = this.elements.container), c.is.element(i) ? a.appendChild(i) : i && a.insertAdjacentHTML("beforeend", i), c.is.element(this.elements.controls) || g.findElements.call(this), window.navigator.userAgent.includes("Edge") && c.repaint(a), this.config.tooltips.controls) {
          var o = c.getElements.call(this, [this.config.selectors.controls.wrapper, " ", this.config.selectors.labels, " .", this.config.classNames.hidden].join(""));
          Array.from(o).forEach(function(t) {
            c.toggleClass(t, e.config.classNames.hidden, !1), c.toggleClass(t, e.config.classNames.tooltip, !0), t.setAttribute("role", "tooltip")
          })
        }
      }
    },
    y = {
      setup: function() {
        if (this.supported.ui) {
          var e = this.storage.get("language");
          if (c.is.empty(e) || (this.captions.language = e), c.is.empty(this.captions.language) && (this.captions.language = this.config.captions.language.toLowerCase()), !c.is.boolean(this.captions.active)) {
            var t = this.storage.get("captions");
            c.is.boolean(t) ? this.captions.active = t : this.captions.active = this.config.captions.active
          }
          if (!this.isVideo || this.isYouTube || this.isHTML5 && !u.textTracks) c.is.array(this.config.controls) && this.config.controls.includes("settings") && this.config.settings.includes("captions") && g.setCaptionsMenu.call(this);
          else {
            c.is.element(this.elements.captions) || (this.elements.captions = c.createElement("div", c.getAttributesFromSelector(this.config.selectors.captions)), c.insertAfter(this.elements.captions, this.elements.wrapper)), c.toggleClass(this.elements.container, this.config.classNames.captions.enabled, !c.is.empty(y.getTracks.call(this)));
            var i = y.getTracks.call(this);
            if (!c.is.empty(i)) {
              if (c.getBrowser().isIE && window.URL) {
                var n = this.media.querySelectorAll("track");
                Array.from(n).forEach(function(e) {
                  var t = e.getAttribute("src"),
                    i = c.parseUrl(t);
                  i.hostname !== window.location.href.hostname && ["http:", "https:"].includes(i.protocol) && c.fetch(t, "blob").then(function(t) {
                    e.setAttribute("src", window.URL.createObjectURL(t))
                  }).catch(function() {
                    c.removeElement(e)
                  })
                })
              }
              y.setLanguage.call(this), y.show.call(this), c.is.array(this.config.controls) && this.config.controls.includes("settings") && this.config.settings.includes("captions") && g.setCaptionsMenu.call(this)
            }
          }
        }
      },
      setLanguage: function() {
        var e = this;
        if (this.isHTML5 && this.isVideo) {
          y.getTracks.call(this).forEach(function(t) {
            c.on(t, "cuechange", function(t) {
              return y.setCue.call(e, t)
            }), t.mode = "hidden"
          });
          var t = y.getCurrentTrack.call(this);
          c.is.track(t) && Array.from(t.activeCues || []).length && y.setCue.call(this, t)
        } else this.isVimeo && this.captions.active && this.embed.enableTextTrack(this.language)
      },
      getTracks: function() {
        return c.is.nullOrUndefined(this.media) ? [] : Array.from(this.media.textTracks || []).filter(function(e) {
          return ["captions", "subtitles"].includes(e.kind)
        })
      },
      getCurrentTrack: function() {
        var e = this,
          t = y.getTracks.call(this);
        if (!t.length) return null;
        var i = t.find(function(t) {
          return t.language.toLowerCase() === e.language
        });
        return i || (i = c.getElement.call(this, "track[default]")), i || (i = l(t, 1)[0]), i
      },
      getLabel: function(e) {
        var t = e;
        return !c.is.track(t) && u.textTracks && this.captions.active && (t = y.getCurrentTrack.call(this)), c.is.track(t) ? c.is.empty(t.label) ? c.is.empty(t.language) ? h("enabled", this.config) : e.language.toUpperCase() : t.label : h("disabled", this.config)
      },
      setCue: function(e) {
        var t = c.is.event(e) ? e.target : e,
          i = t.activeCues,
          n = i.length && i[0];
        t === y.getCurrentTrack.call(this) && (c.is.cue(n) ? y.setText.call(this, n.getCueAsHTML()) : y.setText.call(this, null), c.dispatchEvent.call(this, this.media, "cuechange"))
      },
      setText: function(e) {
        if (this.supported.ui)
          if (c.is.element(this.elements.captions)) {
            var t = c.createElement("span");
            c.emptyElement(this.elements.captions);
            var i = c.is.nullOrUndefined(e) ? "" : e;
            c.is.string(i) ? t.textContent = i.trim() : t.appendChild(i), this.elements.captions.appendChild(t)
          } else this.debug.warn("No captions element to render to")
      },
      show: function() {
        var e = this.storage.get("captions");
        c.is.boolean(e) ? this.captions.active = e : e = this.config.captions.active, e && (c.toggleClass(this.elements.container, this.config.classNames.captions.active, !0), c.toggleState(this.elements.buttons.captions, !0))
      }
    },
    v = function() {},
    _ = function() {
      function e() {
        var t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        s(this, e), this.enabled = window.console && t, this.enabled && this.log("Debugging enabled")
      }
      return a(e, [{
        key: "log",
        get: function() {
          return this.enabled ? Function.prototype.bind.call(console.log, console) : v
        }
      }, {
        key: "warn",
        get: function() {
          return this.enabled ? Function.prototype.bind.call(console.warn, console) : v
        }
      }, {
        key: "error",
        get: function() {
          return this.enabled ? Function.prototype.bind.call(console.error, console) : v
        }
      }]), e
    }(),
    b = {
      enabled: !0,
      title: "",
      debug: !1,
      autoplay: !1,
      autopause: !0,
      seekTime: 10,
      volume: 1,
      muted: !1,
      duration: null,
      displayDuration: !0,
      invertTime: !0,
      toggleInvert: !0,
      ratio: "16:9",
      clickToPlay: !0,
      hideControls: !0,
      resetOnEnd: !1,
      disableContextMenu: !0,
      loadSprite: !0,
      iconPrefix: "plyr",
      iconUrl: "https://cdn.plyr.io/3.3.7/plyr.svg",
      blankVideo: "https://cdn.plyr.io/static/blank.mp4",
      quality: {
        default: 576,
        options: [4320, 2880, 2160, 1440, 1080, 720, 576, 480, 360, 240, "default"]
      },
      loop: {
        active: !1
      },
      speed: {
        selected: 1,
        options: [.5, .75, 1, 1.25, 1.5, 1.75, 2]
      },
      keyboard: {
        focused: !0,
        global: !1
      },
      tooltips: {
        controls: !1,
        seek: !0
      },
      captions: {
        active: !1,
        language: (navigator.language || navigator.userLanguage).split("-")[0]
      },
      fullscreen: {
        enabled: !0,
        fallback: !0,
        iosNative: !1
      },
      storage: {
        enabled: !0,
        key: "plyr"
      },
      controls: ["play-large", "play", "progress", "current-time", "mute", "volume", "captions", "settings", "pip", "airplay", "fullscreen"],
      settings: ["captions", "quality", "speed"],
      i18n: {
        restart: "Restart",
        rewind: "Rewind {seektime}s",
        play: "Play",
        pause: "Pause",
        fastForward: "Forward {seektime}s",
        seek: "Seek",
        played: "Played",
        buffered: "Buffered",
        currentTime: "Current time",
        duration: "Duration",
        volume: "Volume",
        mute: "Mute",
        unmute: "Unmute",
        enableCaptions: "Enable captions",
        disableCaptions: "Disable captions",
        enterFullscreen: "Enter fullscreen",
        exitFullscreen: "Exit fullscreen",
        frameTitle: "Player for {title}",
        captions: "Captions",
        settings: "Settings",
        speed: "Speed",
        normal: "Normal",
        quality: "Quality",
        loop: "Loop",
        start: "Start",
        end: "End",
        all: "All",
        reset: "Reset",
        disabled: "Disabled",
        enabled: "Enabled",
        advertisement: "Ad"
      },
      urls: {
        vimeo: {
          sdk: "https://player.vimeo.com/api/player.js",
          iframe: "https://player.vimeo.com/video/{0}?{1}",
          api: "https://vimeo.com/api/v2/video/{0}.json"
        },
        youtube: {
          sdk: "https://www.youtube.com/iframe_api",
          api: "https://www.googleapis.com/youtube/v3/videos?id={0}&key={1}&fields=items(snippet(title))&part=snippet",
          poster: "https://img.youtube.com/vi/{0}/maxresdefault.jpg,https://img.youtube.com/vi/{0}/hqdefault.jpg"
        },
        googleIMA: {
          sdk: "https://imasdk.googleapis.com/js/sdkloader/ima3.js"
        }
      },
      listeners: {
        seek: null,
        play: null,
        pause: null,
        restart: null,
        rewind: null,
        fastForward: null,
        mute: null,
        volume: null,
        captions: null,
        fullscreen: null,
        pip: null,
        airplay: null,
        speed: null,
        quality: null,
        loop: null,
        language: null
      },
      events: ["ended", "progress", "stalled", "playing", "waiting", "canplay", "canplaythrough", "loadstart", "loadeddata", "loadedmetadata", "timeupdate", "volumechange", "play", "pause", "error", "seeking", "seeked", "emptied", "ratechange", "cuechange", "enterfullscreen", "exitfullscreen", "captionsenabled", "captionsdisabled", "languagechange", "controlshidden", "controlsshown", "ready", "statechange", "qualitychange", "qualityrequested", "adsloaded", "adscontentpause", "adscontentresume", "adstarted", "adsmidpoint", "adscomplete", "adsallcomplete", "adsimpression", "adsclick"],
      selectors: {
        editable: "input, textarea, select, [contenteditable]",
        container: ".plyr",
        controls: {
          container: null,
          wrapper: ".plyr__controls"
        },
        labels: "[data-plyr]",
        buttons: {
          play: '[data-plyr="play"]',
          pause: '[data-plyr="pause"]',
          restart: '[data-plyr="restart"]',
          rewind: '[data-plyr="rewind"]',
          fastForward: '[data-plyr="fast-forward"]',
          mute: '[data-plyr="mute"]',
          captions: '[data-plyr="captions"]',
          fullscreen: '[data-plyr="fullscreen"]',
          pip: '[data-plyr="pip"]',
          airplay: '[data-plyr="airplay"]',
          settings: '[data-plyr="settings"]',
          loop: '[data-plyr="loop"]'
        },
        inputs: {
          seek: '[data-plyr="seek"]',
          volume: '[data-plyr="volume"]',
          speed: '[data-plyr="speed"]',
          language: '[data-plyr="language"]',
          quality: '[data-plyr="quality"]'
        },
        display: {
          currentTime: ".plyr__time--current",
          duration: ".plyr__time--duration",
          buffer: ".plyr__progress--buffer",
          played: ".plyr__progress--played",
          loop: ".plyr__progress--loop",
          volume: ".plyr__volume--display"
        },
        progress: ".plyr__progress",
        captions: ".plyr__captions",
        menu: {
          quality: ".js-plyr__menu__list--quality"
        }
      },
      classNames: {
        type: "plyr--{0}",
        provider: "plyr--{0}",
        video: "plyr__video-wrapper",
        embed: "plyr__video-embed",
        embedContainer: "plyr__video-embed__container",
        poster: "plyr__poster",
        ads: "plyr__ads",
        control: "plyr__control",
        playing: "plyr--playing",
        paused: "plyr--paused",
        stopped: "plyr--stopped",
        loading: "plyr--loading",
        error: "plyr--has-error",
        hover: "plyr--hover",
        tooltip: "plyr__tooltip",
        cues: "plyr__cues",
        hidden: "plyr__sr-only",
        hideControls: "plyr--hide-controls",
        isIos: "plyr--is-ios",
        isTouch: "plyr--is-touch",
        uiSupported: "plyr--full-ui",
        noTransition: "plyr--no-transition",
        menu: {
          value: "plyr__menu__value",
          badge: "plyr__badge",
          open: "plyr--menu-open"
        },
        captions: {
          enabled: "plyr--captions-enabled",
          active: "plyr--captions-active"
        },
        fullscreen: {
          enabled: "plyr--fullscreen-enabled",
          fallback: "plyr--fullscreen-fallback"
        },
        pip: {
          supported: "plyr--pip-supported",
          active: "plyr--pip-active"
        },
        airplay: {
          supported: "plyr--airplay-supported",
          active: "plyr--airplay-active"
        },
        tabFocus: "plyr__tab-focus"
      },
      attributes: {
        embed: {
          provider: "data-plyr-provider",
          id: "data-plyr-embed-id"
        }
      },
      keys: {
        google: null
      },
      ads: {
        enabled: !1,
        publisherId: ""
      }
    },
    w = c.getBrowser();

  function T() {
    if (this.enabled) {
      var e = this.player.elements.buttons.fullscreen;
      c.is.element(e) && c.toggleState(e, this.active), c.dispatchEvent.call(this.player, this.target, this.active ? "enterfullscreen" : "exitfullscreen", !0), w.isIos || c.trapFocus.call(this.player, this.target, this.active)
    }
  }

  function A() {
    var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    e ? this.scrollPosition = {
      x: window.scrollX || 0,
      y: window.scrollY || 0
    } : window.scrollTo(this.scrollPosition.x, this.scrollPosition.y), document.body.style.overflow = e ? "hidden" : "", c.toggleClass(this.target, this.player.config.classNames.fullscreen.fallback, e), T.call(this)
  }
  var k = function() {
      function e(t) {
        var i = this;
        s(this, e), this.player = t, this.prefix = e.prefix, this.property = e.property, this.scrollPosition = {
          x: 0,
          y: 0
        }, c.on(document, "ms" === this.prefix ? "MSFullscreenChange" : this.prefix + "fullscreenchange", function() {
          T.call(i)
        }), c.on(this.player.elements.container, "dblclick", function(e) {
          c.is.element(i.player.elements.controls) && i.player.elements.controls.contains(e.target) || i.toggle()
        }), this.update()
      }
      return a(e, [{
        key: "update",
        value: function() {
          this.enabled ? this.player.debug.log((e.native ? "Native" : "Fallback") + " fullscreen enabled") : this.player.debug.log("Fullscreen not supported and fallback disabled"), c.toggleClass(this.player.elements.container, this.player.config.classNames.fullscreen.enabled, this.enabled)
        }
      }, {
        key: "enter",
        value: function() {
          this.enabled && (w.isIos && this.player.config.fullscreen.iosNative ? this.player.playing && this.target.webkitEnterFullscreen() : e.native ? this.prefix ? c.is.empty(this.prefix) || this.target[this.prefix + "Request" + this.property]() : this.target.requestFullscreen() : A.call(this, !0))
        }
      }, {
        key: "exit",
        value: function() {
          if (this.enabled)
            if (w.isIos && this.player.config.fullscreen.iosNative) this.target.webkitExitFullscreen(), this.player.play();
            else if (e.native)
            if (this.prefix) {
              if (!c.is.empty(this.prefix)) {
                var t = "moz" === this.prefix ? "Cancel" : "Exit";
                document["" + this.prefix + t + this.property]()
              }
            } else(document.cancelFullScreen || document.exitFullscreen).call(document);
          else A.call(this, !1)
        }
      }, {
        key: "toggle",
        value: function() {
          this.active ? this.exit() : this.enter()
        }
      }, {
        key: "enabled",
        get: function() {
          return (e.native || this.player.config.fullscreen.fallback) && this.player.config.fullscreen.enabled && this.player.supported.ui && this.player.isVideo
        }
      }, {
        key: "active",
        get: function() {
          return !!this.enabled && (e.native ? (this.prefix ? document["" + this.prefix + this.property + "Element"] : document.fullscreenElement) === this.target : c.hasClass(this.target, this.player.config.classNames.fullscreen.fallback))
        }
      }, {
        key: "target",
        get: function() {
          return w.isIos && this.player.config.fullscreen.iosNative ? this.player.media : this.player.elements.container
        }
      }], [{
        key: "native",
        get: function() {
          return !!(document.fullscreenEnabled || document.webkitFullscreenEnabled || document.mozFullScreenEnabled || document.msFullscreenEnabled)
        }
      }, {
        key: "prefix",
        get: function() {
          if (c.is.function(document.exitFullscreen)) return "";
          var e = "";
          return ["webkit", "moz", "ms"].some(function(t) {
            return !(!c.is.function(document[t + "ExitFullscreen"]) && !c.is.function(document[t + "CancelFullScreen"]) || (e = t, 0))
          }), e
        }
      }, {
        key: "property",
        get: function() {
          return "moz" === this.prefix ? "FullScreen" : "Fullscreen"
        }
      }]), e
    }(),
    x = c.getBrowser(),
    S = function() {
      function e(t) {
        s(this, e), this.player = t, this.lastKey = null, this.handleKey = this.handleKey.bind(this), this.toggleMenu = this.toggleMenu.bind(this), this.firstTouch = this.firstTouch.bind(this)
      }
      return a(e, [{
        key: "handleKey",
        value: function(e) {
          var t = e.keyCode ? e.keyCode : e.which,
            i = "keydown" === e.type,
            n = i && t === this.lastKey;
          if (!(e.altKey || e.ctrlKey || e.metaKey || e.shiftKey) && c.is.number(t))
            if (i) {
              var r = c.getFocusElement();
              if (c.is.element(r) && c.matches(r, this.player.config.selectors.editable)) return;
              switch ([48, 49, 50, 51, 52, 53, 54, 56, 57, 32, 75, 38, 40, 77, 39, 37, 70, 67, 73, 76, 79].includes(t) && (e.preventDefault(), e.stopPropagation()), t) {
                case 48:
                case 49:
                case 50:
                case 51:
                case 52:
                case 53:
                case 54:
                case 55:
                case 56:
                case 57:
                  n || (this.player.currentTime = this.player.duration / 10 * (t - 48));
                  break;
                case 32:
                case 75:
                  n || this.player.togglePlay();
                  break;
                case 38:
                  this.player.increaseVolume(.1);
                  break;
                case 40:
                  this.player.decreaseVolume(.1);
                  break;
                case 77:
                  n || (this.player.muted = !this.player.muted);
                  break;
                case 39:
                  this.player.forward();
                  break;
                case 37:
                  this.player.rewind();
                  break;
                case 70:
                  this.player.fullscreen.toggle();
                  break;
                case 67:
                  n || this.player.toggleCaptions();
                  break;
                case 76:
                  this.player.loop = !this.player.loop
              }!this.player.fullscreen.enabled && this.player.fullscreen.active && 27 === t && this.player.fullscreen.toggle(), this.lastKey = t
            } else this.lastKey = null
        }
      }, {
        key: "toggleMenu",
        value: function(e) {
          g.toggleMenu.call(this.player, e)
        }
      }, {
        key: "firstTouch",
        value: function() {
          this.player.touch = !0, c.toggleClass(this.player.elements.container, this.player.config.classNames.isTouch, !0), c.off(document.body, "touchstart", this.firstTouch)
        }
      }, {
        key: "global",
        value: function() {
          var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
          this.player.config.keyboard.global && c.toggleListener(window, "keydown keyup", this.handleKey, e, !1), c.toggleListener(document.body, "click", this.toggleMenu, e), c.on(document.body, "touchstart", this.firstTouch)
        }
      }, {
        key: "container",
        value: function() {
          var e = this;
          !this.player.config.keyboard.global && this.player.config.keyboard.focused && c.on(this.player.elements.container, "keydown keyup", this.handleKey, !1), c.on(this.player.elements.container, "focusout", function(t) {
            c.toggleClass(t.target, e.player.config.classNames.tabFocus, !1)
          }), c.on(this.player.elements.container, "keydown", function(t) {
            9 === t.keyCode && setTimeout(function() {
              c.toggleClass(c.getFocusElement(), e.player.config.classNames.tabFocus, !0)
            }, 0)
          }), this.player.config.hideControls && c.on(this.player.elements.container, "mouseenter mouseleave mousemove touchstart touchend touchmove enterfullscreen exitfullscreen", function(t) {
            e.player.toggleControls(t)
          })
        }
      }, {
        key: "media",
        value: function() {
          var e = this;
          if (c.on(this.player.media, "timeupdate seeking", function(t) {
              return f.timeUpdate.call(e.player, t)
            }), c.on(this.player.media, "durationchange loadeddata loadedmetadata", function(t) {
              return f.durationUpdate.call(e.player, t)
            }), c.on(this.player.media, "loadeddata", function() {
              c.toggleHidden(e.player.elements.volume, !e.player.hasAudio), c.toggleHidden(e.player.elements.buttons.mute, !e.player.hasAudio)
            }), c.on(this.player.media, "ended", function() {
              e.player.isHTML5 && e.player.isVideo && e.player.config.resetOnEnd && e.player.restart()
            }), c.on(this.player.media, "progress playing", function(t) {
              return f.updateProgress.call(e.player, t)
            }), c.on(this.player.media, "volumechange", function(t) {
              return f.updateVolume.call(e.player, t)
            }), c.on(this.player.media, "playing play pause ended emptied timeupdate", function(t) {
              return f.checkPlaying.call(e.player, t)
            }), c.on(this.player.media, "waiting canplay seeked playing", function(t) {
              return f.checkLoading.call(e.player, t)
            }), c.on(this.player.media, "playing", function() {
              e.player.ads && e.player.ads.enabled && !e.player.ads.initialized && e.player.ads.managerPromise.then(function() {
                return e.player.ads.play()
              }).catch(function() {
                return e.player.play()
              })
            }), this.player.supported.ui && this.player.config.clickToPlay && !this.player.isAudio) {
            var t = c.getElement.call(this.player, "." + this.player.config.classNames.video);
            if (!c.is.element(t)) return;
            c.on(t, "click", function() {
              e.player.config.hideControls && e.player.touch && !e.player.paused || (e.player.paused ? e.player.play() : e.player.ended ? (e.player.restart(), e.player.play()) : e.player.pause())
            })
          }
          this.player.supported.ui && this.player.config.disableContextMenu && c.on(this.player.elements.wrapper, "contextmenu", function(e) {
            e.preventDefault()
          }, !1), c.on(this.player.media, "volumechange", function() {
            e.player.storage.set({
              volume: e.player.volume,
              muted: e.player.muted
            })
          }), c.on(this.player.media, "ratechange", function() {
            g.updateSetting.call(e.player, "speed"), e.player.storage.set({
              speed: e.player.speed
            })
          }), c.on(this.player.media, "qualityrequested", function(t) {
            e.player.storage.set({
              quality: t.detail.quality
            })
          }), c.on(this.player.media, "qualitychange", function(t) {
            g.updateSetting.call(e.player, "quality", null, t.detail.quality)
          }), c.on(this.player.media, "languagechange", function() {
            g.updateSetting.call(e.player, "captions"), e.player.storage.set({
              language: e.player.language
            })
          }), c.on(this.player.media, "captionsenabled captionsdisabled", function() {
            g.updateSetting.call(e.player, "captions"), e.player.storage.set({
              captions: e.player.captions.active
            })
          }), c.on(this.player.media, this.player.config.events.concat(["keyup", "keydown"]).join(" "), function(t) {
            var i = {};
            "error" === t.type && (i = e.player.media.error), c.dispatchEvent.call(e.player, e.player.elements.container, t.type, !0, i)
          })
        }
      }, {
        key: "controls",
        value: function() {
          var e = this,
            t = x.isIE ? "change" : "input",
            i = function(t, i, n) {
              var r = e.player.config.listeners[n],
                s = !0;
              c.is.function(r) && (s = r.call(e.player, t)), s && c.is.function(i) && i.call(e.player, t)
            },
            n = function(t, n, r, s) {
              var a = !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4],
                o = e.player.config.listeners[s],
                l = c.is.function(o);
              c.on(t, n, function(e) {
                return i(e, r, s)
              }, a && !l)
            };
          n(this.player.elements.buttons.play, "click", this.player.togglePlay, "play"), n(this.player.elements.buttons.restart, "click", this.player.restart, "restart"), n(this.player.elements.buttons.rewind, "click", this.player.rewind, "rewind"), n(this.player.elements.buttons.fastForward, "click", this.player.forward, "fastForward"), n(this.player.elements.buttons.mute, "click", function() {
            e.player.muted = !e.player.muted
          }, "mute"), n(this.player.elements.buttons.captions, "click", this.player.toggleCaptions), n(this.player.elements.buttons.fullscreen, "click", function() {
            e.player.fullscreen.toggle()
          }, "fullscreen"), n(this.player.elements.buttons.pip, "click", function() {
            e.player.pip = "toggle"
          }, "pip"), n(this.player.elements.buttons.airplay, "click", this.player.airplay, "airplay"), n(this.player.elements.buttons.settings, "click", function(t) {
            g.toggleMenu.call(e.player, t)
          }), n(this.player.elements.settings.form, "click", function(t) {
            t.stopPropagation();
            var n = function() {
              var t = "plyr-settings-" + e.player.id + "-home";
              g.showTab.call(e.player, t)
            };
            if (c.matches(t.target, e.player.config.selectors.inputs.language)) i(t, function() {
              e.player.language = t.target.value, n()
            }, "language");
            else if (c.matches(t.target, e.player.config.selectors.inputs.quality)) i(t, function() {
              e.player.quality = t.target.value, n()
            }, "quality");
            else if (c.matches(t.target, e.player.config.selectors.inputs.speed)) i(t, function() {
              e.player.speed = parseFloat(t.target.value), n()
            }, "speed");
            else {
              var r = t.target;
              g.showTab.call(e.player, r.getAttribute("aria-controls"))
            }
          }), n(this.player.elements.inputs.seek, t, function(t) {
            e.player.currentTime = t.target.value / t.target.max * e.player.duration
          }, "seek"), this.player.config.toggleInvert && !c.is.element(this.player.elements.display.duration) && n(this.player.elements.display.currentTime, "click", function() {
            0 !== e.player.currentTime && (e.player.config.invertTime = !e.player.config.invertTime, f.timeUpdate.call(e.player))
          }), n(this.player.elements.inputs.volume, t, function(t) {
            e.player.volume = t.target.value
          }, "volume"), x.isWebkit && n(c.getElements.call(this.player, 'input[type="range"]'), "input", function(t) {
            g.updateRangeFill.call(e.player, t.target)
          }), n(this.player.elements.progress, "mouseenter mouseleave mousemove", function(t) {
            return g.updateSeekTooltip.call(e.player, t)
          }), this.player.config.hideControls && (n(this.player.elements.controls, "mouseenter mouseleave", function(t) {
            e.player.elements.controls.hover = !e.player.touch && "mouseenter" === t.type
          }), n(this.player.elements.controls, "mousedown mouseup touchstart touchend touchcancel", function(t) {
            e.player.elements.controls.pressed = ["mousedown", "touchstart"].includes(t.type)
          }), n(this.player.elements.controls, "focusin focusout", function(t) {
            e.player.toggleControls(t)
          })), n(this.player.elements.inputs.volume, "wheel", function(t) {
            var i = t.webkitDirectionInvertedFromDevice,
              n = 0;
            (t.deltaY < 0 || t.deltaX > 0) && (i ? (e.player.decreaseVolume(.02), n = -1) : (e.player.increaseVolume(.02), n = 1)), (t.deltaY > 0 || t.deltaX < 0) && (i ? (e.player.increaseVolume(.02), n = 1) : (e.player.decreaseVolume(.02), n = -1)), (1 === n && e.player.media.volume < 1 || -1 === n && e.player.media.volume > 0) && t.preventDefault()
          }, "volume", !1)
        }
      }, {
        key: "clear",
        value: function() {
          this.global(!1)
        }
      }]), e
    }(),
    C = {
      setup: function() {
        var e = this;
        c.toggleClass(this.elements.wrapper, this.config.classNames.embed, !0), C.setAspectRatio.call(this), c.is.object(window.Vimeo) ? C.ready.call(this) : c.loadScript(this.config.urls.vimeo.sdk).then(function() {
          C.ready.call(e)
        }).catch(function(t) {
          e.debug.warn("Vimeo API failed to load", t)
        })
      },
      setAspectRatio: function(e) {
        var t = c.is.string(e) ? e.split(":") : this.config.ratio.split(":"),
          i = 100 / t[0] * t[1];
        if (this.elements.wrapper.style.paddingBottom = i + "%", this.supported.ui) {
          var n = (240 - i) / 4.8;
          this.media.style.transform = "translateY(-" + n + "%)"
        }
      },
      ready: function() {
        var e = this,
          t = this,
          i = {
            loop: t.config.loop.active,
            autoplay: t.autoplay,
            byline: !1,
            portrait: !1,
            title: !1,
            speed: !0,
            transparent: 0,
            gesture: "media",
            playsinline: !this.config.fullscreen.iosNative
          },
          n = c.buildUrlParams(i),
          r = t.media.getAttribute("src");
        c.is.empty(r) && (r = t.media.getAttribute(t.config.attributes.embed.id));
        var s = c.parseVimeoId(r),
          a = c.createElement("iframe"),
          o = c.format(t.config.urls.vimeo.iframe, s, n);
        a.setAttribute("src", o), a.setAttribute("allowfullscreen", ""), a.setAttribute("allowtransparency", ""), a.setAttribute("allow", "autoplay");
        var l = c.createElement("div", {
          class: t.config.classNames.embedContainer
        });
        l.appendChild(a), t.media = c.replaceElement(l, t.media), c.fetch(c.format(t.config.urls.vimeo.api, s), "json").then(function(e) {
          if (!c.is.empty(e)) {
            var i = new URL(e[0].thumbnail_large);
            i.pathname = i.pathname.split("_")[0] + ".jpg", t.media.setAttribute("poster", i.href), f.setPoster.call(t)
          }
        }), t.embed = new window.Vimeo.Player(a, {
          autopause: t.config.autopause,
          muted: t.muted
        }), t.media.paused = !0, t.media.currentTime = 0, t.supported.ui && t.embed.disableTextTrack(), t.media.play = function() {
          t.embed.play().then(function() {
            t.media.paused = !1
          })
        }, t.media.pause = function() {
          t.embed.pause().then(function() {
            t.media.paused = !0
          })
        }, t.media.stop = function() {
          t.pause(), t.currentTime = 0
        };
        var u = t.media.currentTime;
        Object.defineProperty(t.media, "currentTime", {
          get: function() {
            return u
          },
          set: function(e) {
            var i = t.media.paused;
            t.media.seeking = !0, c.dispatchEvent.call(t, t.media, "seeking"), t.embed.setCurrentTime(e).catch(function() {}), i && t.pause()
          }
        });
        var d = t.config.speed.selected;
        Object.defineProperty(t.media, "playbackRate", {
          get: function() {
            return d
          },
          set: function(e) {
            t.embed.setPlaybackRate(e).then(function() {
              d = e, c.dispatchEvent.call(t, t.media, "ratechange")
            }).catch(function(e) {
              "Error" === e.name && g.setSpeedMenu.call(t, [])
            })
          }
        });
        var h = t.config.volume;
        Object.defineProperty(t.media, "volume", {
          get: function() {
            return h
          },
          set: function(e) {
            t.embed.setVolume(e).then(function() {
              h = e, c.dispatchEvent.call(t, t.media, "volumechange")
            })
          }
        });
        var p = t.config.muted;
        Object.defineProperty(t.media, "muted", {
          get: function() {
            return p
          },
          set: function(e) {
            var i = !!c.is.boolean(e) && e;
            t.embed.setVolume(i ? 0 : t.config.volume).then(function() {
              p = i, c.dispatchEvent.call(t, t.media, "volumechange")
            })
          }
        });
        var m = t.config.loop;
        Object.defineProperty(t.media, "loop", {
          get: function() {
            return m
          },
          set: function(e) {
            var i = c.is.boolean(e) ? e : t.config.loop.active;
            t.embed.setLoop(i).then(function() {
              m = i
            })
          }
        });
        var v = void 0;
        t.embed.getVideoUrl().then(function(e) {
          v = e
        }).catch(function(t) {
          e.debug.warn(t)
        }), Object.defineProperty(t.media, "currentSrc", {
          get: function() {
            return v
          }
        }), Object.defineProperty(t.media, "ended", {
          get: function() {
            return t.currentTime === t.duration
          }
        }), Promise.all([t.embed.getVideoWidth(), t.embed.getVideoHeight()]).then(function(t) {
          var i = c.getAspectRatio(t[0], t[1]);
          C.setAspectRatio.call(e, i)
        }), t.embed.setAutopause(t.config.autopause).then(function(e) {
          t.config.autopause = e
        }), t.embed.getVideoTitle().then(function(i) {
          t.config.title = i, f.setTitle.call(e)
        }), t.embed.getCurrentTime().then(function(e) {
          u = e, c.dispatchEvent.call(t, t.media, "timeupdate")
        }), t.embed.getDuration().then(function(e) {
          t.media.duration = e, c.dispatchEvent.call(t, t.media, "durationchange")
        }), t.embed.getTextTracks().then(function(e) {
          t.media.textTracks = e, y.setup.call(t)
        }), t.embed.on("cuechange", function(e) {
          var i = null;
          e.cues.length && (i = c.stripHTML(e.cues[0].text)), y.setText.call(t, i)
        }), t.embed.on("loaded", function() {
          c.is.element(t.embed.element) && t.supported.ui && t.embed.element.setAttribute("tabindex", -1)
        }), t.embed.on("play", function() {
          t.media.paused && c.dispatchEvent.call(t, t.media, "play"), t.media.paused = !1, c.dispatchEvent.call(t, t.media, "playing")
        }), t.embed.on("pause", function() {
          t.media.paused = !0, c.dispatchEvent.call(t, t.media, "pause")
        }), t.embed.on("timeupdate", function(e) {
          t.media.seeking = !1, u = e.seconds, c.dispatchEvent.call(t, t.media, "timeupdate")
        }), t.embed.on("progress", function(e) {
          t.media.buffered = e.percent, c.dispatchEvent.call(t, t.media, "progress"), 1 === parseInt(e.percent, 10) && c.dispatchEvent.call(t, t.media, "canplaythrough"), t.embed.getDuration().then(function(e) {
            e !== t.media.duration && (t.media.duration = e, c.dispatchEvent.call(t, t.media, "durationchange"))
          })
        }), t.embed.on("seeked", function() {
          t.media.seeking = !1, c.dispatchEvent.call(t, t.media, "seeked"), c.dispatchEvent.call(t, t.media, "play")
        }), t.embed.on("ended", function() {
          t.media.paused = !0, c.dispatchEvent.call(t, t.media, "ended")
        }), t.embed.on("error", function(e) {
          t.media.error = e, c.dispatchEvent.call(t, t.media, "error")
        }), setTimeout(function() {
          return f.build.call(t)
        }, 0)
      }
    };

  function E(e) {
    switch (e) {
      case "hd2160":
        return 2160;
      case 2160:
        return "hd2160";
      case "hd1440":
        return 1440;
      case 1440:
        return "hd1440";
      case "hd1080":
        return 1080;
      case 1080:
        return "hd1080";
      case "hd720":
        return 720;
      case 720:
        return "hd720";
      case "large":
        return 480;
      case 480:
        return "large";
      case "medium":
        return 360;
      case 360:
        return "medium";
      case "small":
        return 240;
      case 240:
        return "small";
      default:
        return "default"
    }
  }
  var P = {
      setup: function() {
        var e = this;
        c.toggleClass(this.elements.wrapper, this.config.classNames.embed, !0), P.setAspectRatio.call(this), c.is.object(window.YT) && c.is.function(window.YT.Player) ? P.ready.call(this) : (c.loadScript(this.config.urls.youtube.sdk).catch(function(t) {
          e.debug.warn("YouTube API failed to load", t)
        }), window.onYouTubeReadyCallbacks = window.onYouTubeReadyCallbacks || [], window.onYouTubeReadyCallbacks.push(function() {
          P.ready.call(e)
        }), window.onYouTubeIframeAPIReady = function() {
          window.onYouTubeReadyCallbacks.forEach(function(e) {
            e()
          })
        })
      },
      getTitle: function(e) {
        var t = this;
        if (c.is.function(this.embed.getVideoData)) {
          var i = this.embed.getVideoData().title;
          if (c.is.empty(i)) return this.config.title = i, void f.setTitle.call(this)
        }
        var n = this.config.keys.google;
        if (c.is.string(n) && !c.is.empty(n)) {
          var r = c.format(this.config.urls.youtube.api, e, n);
          c.fetch(r).then(function(e) {
            c.is.object(e) && (t.config.title = e.items[0].snippet.title, f.setTitle.call(t))
          }).catch(function() {})
        }
      },
      setAspectRatio: function() {
        var e = this.config.ratio.split(":");
        this.elements.wrapper.style.paddingBottom = 100 / e[0] * e[1] + "%"
      },
      ready: function() {
        var e = this,
          t = e.media.getAttribute("id");
        if (c.is.empty(t) || !t.startsWith("youtube-")) {
          var i = e.media.getAttribute("src");
          c.is.empty(i) && (i = e.media.getAttribute(this.config.attributes.embed.id));
          var n = c.parseYouTubeId(i),
            r = c.generateId(e.provider),
            s = c.createElement("div", {
              id: r
            });
          e.media = c.replaceElement(s, e.media), e.media.setAttribute("poster", c.format(e.config.urls.youtube.poster, n)), e.embed = new window.YT.Player(r, {
            videoId: n,
            playerVars: {
              autoplay: e.config.autoplay ? 1 : 0,
              controls: e.supported.ui ? 0 : 1,
              rel: 0,
              showinfo: 0,
              iv_load_policy: 3,
              modestbranding: 1,
              disablekb: 1,
              playsinline: 1,
              widget_referrer: window ? window.location.href : null,
              cc_load_policy: e.captions.active ? 1 : 0,
              cc_lang_pref: e.config.captions.language
            },
            events: {
              onError: function(t) {
                if (!c.is.object(e.media.error)) {
                  var i = {
                    code: t.data
                  };
                  switch (t.data) {
                    case 2:
                      i.message = "The request contains an invalid parameter value. For example, this error occurs if you specify a video ID that does not have 11 characters, or if the video ID contains invalid characters, such as exclamation points or asterisks.";
                      break;
                    case 5:
                      i.message = "The requested content cannot be played in an HTML5 player or another error related to the HTML5 player has occurred.";
                      break;
                    case 100:
                      i.message = "The video requested was not found. This error occurs when a video has been removed (for any reason) or has been marked as private.";
                      break;
                    case 101:
                    case 150:
                      i.message = "The owner of the requested video does not allow it to be played in embedded players.";
                      break;
                    default:
                      i.message = "An unknown error occured"
                  }
                  e.media.error = i, c.dispatchEvent.call(e, e.media, "error")
                }
              },
              onPlaybackQualityChange: function() {
                c.dispatchEvent.call(e, e.media, "qualitychange", !1, {
                  quality: e.media.quality
                })
              },
              onPlaybackRateChange: function(t) {
                var i = t.target;
                e.media.playbackRate = i.getPlaybackRate(), c.dispatchEvent.call(e, e.media, "ratechange")
              },
              onReady: function(t) {
                var i = t.target;
                P.getTitle.call(e, n), e.media.play = function() {
                  i.playVideo()
                }, e.media.pause = function() {
                  i.pauseVideo()
                }, e.media.stop = function() {
                  i.stopVideo()
                }, e.media.duration = i.getDuration(), e.media.paused = !0, e.media.currentTime = 0, Object.defineProperty(e.media, "currentTime", {
                  get: function() {
                    return Number(i.getCurrentTime())
                  },
                  set: function(t) {
                    var n = e.media.paused;
                    e.media.seeking = !0, c.dispatchEvent.call(e, e.media, "seeking"), i.seekTo(t), n && e.pause()
                  }
                }), Object.defineProperty(e.media, "playbackRate", {
                  get: function() {
                    return i.getPlaybackRate()
                  },
                  set: function(e) {
                    i.setPlaybackRate(e)
                  }
                }), Object.defineProperty(e.media, "quality", {
                  get: function() {
                    return E(i.getPlaybackQuality())
                  },
                  set: function(t) {
                    var n = t;
                    i.setPlaybackQuality(E(n)), c.dispatchEvent.call(e, e.media, "qualityrequested", !1, {
                      quality: n
                    })
                  }
                });
                var r = e.config.volume;
                Object.defineProperty(e.media, "volume", {
                  get: function() {
                    return r
                  },
                  set: function(t) {
                    r = t, i.setVolume(100 * r), c.dispatchEvent.call(e, e.media, "volumechange")
                  }
                });
                var s = e.config.muted;
                Object.defineProperty(e.media, "muted", {
                  get: function() {
                    return s
                  },
                  set: function(t) {
                    var n = c.is.boolean(t) ? t : s;
                    s = n, i[n ? "mute" : "unMute"](), c.dispatchEvent.call(e, e.media, "volumechange")
                  }
                }), Object.defineProperty(e.media, "currentSrc", {
                  get: function() {
                    return i.getVideoUrl()
                  }
                }), Object.defineProperty(e.media, "ended", {
                  get: function() {
                    return e.currentTime === e.duration
                  }
                }), e.options.speed = i.getAvailablePlaybackRates(), e.supported.ui && e.media.setAttribute("tabindex", -1), c.dispatchEvent.call(e, e.media, "timeupdate"), c.dispatchEvent.call(e, e.media, "durationchange"), clearInterval(e.timers.buffering), e.timers.buffering = setInterval(function() {
                  e.media.buffered = i.getVideoLoadedFraction(), (null === e.media.lastBuffered || e.media.lastBuffered < e.media.buffered) && c.dispatchEvent.call(e, e.media, "progress"), e.media.lastBuffered = e.media.buffered, 1 === e.media.buffered && (clearInterval(e.timers.buffering), c.dispatchEvent.call(e, e.media, "canplaythrough"))
                }, 200), setTimeout(function() {
                  return f.build.call(e)
                }, 50)
              },
              onStateChange: function(t) {
                var i, n = t.target;
                switch (clearInterval(e.timers.playing), t.data) {
                  case -1:
                    c.dispatchEvent.call(e, e.media, "timeupdate"), e.media.buffered = n.getVideoLoadedFraction(), c.dispatchEvent.call(e, e.media, "progress");
                    break;
                  case 0:
                    e.media.paused = !0, e.media.loop ? (n.stopVideo(), n.playVideo()) : c.dispatchEvent.call(e, e.media, "ended");
                    break;
                  case 1:
                    e.media.seeking && c.dispatchEvent.call(e, e.media, "seeked"), e.media.seeking = !1, e.media.paused && c.dispatchEvent.call(e, e.media, "play"), e.media.paused = !1, c.dispatchEvent.call(e, e.media, "playing"), e.timers.playing = setInterval(function() {
                      c.dispatchEvent.call(e, e.media, "timeupdate")
                    }, 50), e.media.duration !== n.getDuration() && (e.media.duration = n.getDuration(), c.dispatchEvent.call(e, e.media, "durationchange")), g.setQualityMenu.call(e, (i = n.getAvailableQualityLevels(), c.is.empty(i) ? i : c.dedupe(i.map(function(e) {
                      return E(e)
                    }))));
                    break;
                  case 2:
                    e.media.paused = !0, c.dispatchEvent.call(e, e.media, "pause")
                }
                c.dispatchEvent.call(e, e.elements.container, "statechange", !1, {
                  code: t.data
                })
              }
            }
          })
        }
      }
    },
    M = {
      setup: function() {
        if (this.media)
          if (c.toggleClass(this.elements.container, this.config.classNames.type.replace("{0}", this.type), !0), c.toggleClass(this.elements.container, this.config.classNames.provider.replace("{0}", this.provider), !0), this.isEmbed && c.toggleClass(this.elements.container, this.config.classNames.type.replace("{0}", "video"), !0), this.isVideo && (this.elements.wrapper = c.createElement("div", {
              class: this.config.classNames.video
            }), c.wrap(this.media, this.elements.wrapper), this.elements.poster = c.createElement("div", {
              class: this.config.classNames.poster
            }), this.elements.wrapper.appendChild(this.elements.poster)), this.isEmbed) switch (this.provider) {
            case "youtube":
              P.setup.call(this);
              break;
            case "vimeo":
              C.setup.call(this)
          } else this.isHTML5 && d.extend.call(this);
          else this.debug.warn("No media element found!")
      }
    },
    O = function() {
      function e(t) {
        var i = this;
        s(this, e), this.player = t, this.publisherId = t.config.ads.publisherId, this.playing = !1, this.initialized = !1, this.elements = {
          container: null,
          displayContainer: null
        }, this.manager = null, this.loader = null, this.cuePoints = null, this.events = {}, this.safetyTimer = null, this.countdownTimer = null, this.managerPromise = new Promise(function(e, t) {
          i.on("loaded", e), i.on("error", t)
        }), this.load()
      }
      return a(e, [{
        key: "load",
        value: function() {
          var e = this;
          this.enabled && (c.is.object(window.google) && c.is.object(window.google.ima) ? this.ready() : c.loadScript(this.player.config.urls.googleIMA.sdk).then(function() {
            e.ready()
          }).catch(function() {
            e.trigger("error", new Error("Google IMA SDK failed to load"))
          }))
        }
      }, {
        key: "ready",
        value: function() {
          var e = this;
          this.startSafetyTimer(12e3, "ready()"), this.managerPromise.then(function() {
            e.clearSafetyTimer("onAdsManagerLoaded()")
          }), this.listeners(), this.setupIMA()
        }
      }, {
        key: "setupIMA",
        value: function() {
          this.elements.container = c.createElement("div", {
            class: this.player.config.classNames.ads
          }), this.player.elements.container.appendChild(this.elements.container), google.ima.settings.setVpaidMode(google.ima.ImaSdkSettings.VpaidMode.ENABLED), google.ima.settings.setLocale(this.player.config.ads.language), this.elements.displayContainer = new google.ima.AdDisplayContainer(this.elements.container), this.requestAds()
        }
      }, {
        key: "requestAds",
        value: function() {
          var e = this,
            t = this.player.elements.container;
          try {
            this.loader = new google.ima.AdsLoader(this.elements.displayContainer), this.loader.addEventListener(google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED, function(t) {
              return e.onAdsManagerLoaded(t)
            }, !1), this.loader.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, function(t) {
              return e.onAdError(t)
            }, !1);
            var i = new google.ima.AdsRequest;
            i.adTagUrl = this.tagUrl, i.linearAdSlotWidth = t.offsetWidth, i.linearAdSlotHeight = t.offsetHeight, i.nonLinearAdSlotWidth = t.offsetWidth, i.nonLinearAdSlotHeight = t.offsetHeight, i.forceNonLinearFullSlot = !1, i.setAdWillPlayMuted(!this.player.muted), this.loader.requestAds(i)
          } catch (e) {
            this.onAdError(e)
          }
        }
      }, {
        key: "pollCountdown",
        value: function() {
          var e = this;
          if (!(arguments.length > 0 && void 0 !== arguments[0] && arguments[0])) return clearInterval(this.countdownTimer), void this.elements.container.removeAttribute("data-badge-text");
          this.countdownTimer = setInterval(function() {
            var t = c.formatTime(Math.max(e.manager.getRemainingTime(), 0)),
              i = h("advertisement", e.player.config) + " - " + t;
            e.elements.container.setAttribute("data-badge-text", i)
          }, 100)
        }
      }, {
        key: "onAdsManagerLoaded",
        value: function(e) {
          var t = this,
            i = new google.ima.AdsRenderingSettings;
          i.restoreCustomPlaybackStateOnAdBreakComplete = !0, i.enablePreloading = !0, this.manager = e.getAdsManager(this.player, i), this.cuePoints = this.manager.getCuePoints(), c.is.empty(this.cuePoints) || this.cuePoints.forEach(function(e) {
            if (0 !== e && -1 !== e && e < t.player.duration) {
              var i = t.player.elements.progress;
              if (c.is.element(i)) {
                var n = 100 / t.player.duration * e,
                  r = c.createElement("span", {
                    class: t.player.config.classNames.cues
                  });
                r.style.left = n.toString() + "%", i.appendChild(r)
              }
            }
          }), this.manager.setVolume(this.player.volume), this.manager.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, function(e) {
            return t.onAdError(e)
          }), Object.keys(google.ima.AdEvent.Type).forEach(function(e) {
            t.manager.addEventListener(google.ima.AdEvent.Type[e], function(e) {
              return t.onAdEvent(e)
            })
          }), this.trigger("loaded")
        }
      }, {
        key: "onAdEvent",
        value: function(e) {
          var t = this,
            i = this.player.elements.container,
            n = e.getAd(),
            r = function(e) {
              var i = "ads" + e.replace(/_/g, "").toLowerCase();
              c.dispatchEvent.call(t.player, t.player.media, i)
            };
          switch (e.type) {
            case google.ima.AdEvent.Type.LOADED:
              this.trigger("loaded"), r(e.type), this.pollCountdown(!0), n.isLinear() || (n.width = i.offsetWidth, n.height = i.offsetHeight);
              break;
            case google.ima.AdEvent.Type.ALL_ADS_COMPLETED:
              r(e.type), this.loadAds();
              break;
            case google.ima.AdEvent.Type.CONTENT_PAUSE_REQUESTED:
              r(e.type), this.pauseContent();
              break;
            case google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED:
              r(e.type), this.pollCountdown(), this.resumeContent();
              break;
            case google.ima.AdEvent.Type.STARTED:
            case google.ima.AdEvent.Type.MIDPOINT:
            case google.ima.AdEvent.Type.COMPLETE:
            case google.ima.AdEvent.Type.IMPRESSION:
            case google.ima.AdEvent.Type.CLICK:
              r(e.type)
          }
        }
      }, {
        key: "onAdError",
        value: function(e) {
          this.cancel(), this.player.debug.warn("Ads error", e)
        }
      }, {
        key: "listeners",
        value: function() {
          var e = this,
            t = this.player.elements.container,
            i = void 0;
          this.player.on("ended", function() {
            e.loader.contentComplete()
          }), this.player.on("seeking", function() {
            return i = e.player.currentTime
          }), this.player.on("seeked", function() {
            var t = e.player.currentTime;
            c.is.empty(e.cuePoints) || e.cuePoints.forEach(function(n, r) {
              i < n && n < t && (e.manager.discardAdBreak(), e.cuePoints.splice(r, 1))
            })
          }), window.addEventListener("resize", function() {
            e.manager && e.manager.resize(t.offsetWidth, t.offsetHeight, google.ima.ViewMode.NORMAL)
          })
        }
      }, {
        key: "play",
        value: function() {
          var e = this,
            t = this.player.elements.container;
          this.managerPromise || this.resumeContent(), this.managerPromise.then(function() {
            e.elements.displayContainer.initialize();
            try {
              e.initialized || (e.manager.init(t.offsetWidth, t.offsetHeight, google.ima.ViewMode.NORMAL), e.manager.start()), e.initialized = !0
            } catch (t) {
              e.onAdError(t)
            }
          }).catch(function() {})
        }
      }, {
        key: "resumeContent",
        value: function() {
          this.elements.container.style.zIndex = "", this.playing = !1, this.player.currentTime < this.player.duration && this.player.play()
        }
      }, {
        key: "pauseContent",
        value: function() {
          this.elements.container.style.zIndex = 3, this.playing = !0, this.player.pause()
        }
      }, {
        key: "cancel",
        value: function() {
          this.initialized && this.resumeContent(), this.trigger("error"), this.loadAds()
        }
      }, {
        key: "loadAds",
        value: function() {
          var e = this;
          this.managerPromise.then(function() {
            e.manager && e.manager.destroy(), e.managerPromise = new Promise(function(t) {
              e.on("loaded", t), e.player.debug.log(e.manager)
            }), e.requestAds()
          }).catch(function() {})
        }
      }, {
        key: "trigger",
        value: function(e) {
          for (var t = this, i = arguments.length, n = Array(i > 1 ? i - 1 : 0), r = 1; r < i; r++) n[r - 1] = arguments[r];
          var s = this.events[e];
          c.is.array(s) && s.forEach(function(e) {
            c.is.function(e) && e.apply(t, n)
          })
        }
      }, {
        key: "on",
        value: function(e, t) {
          return c.is.array(this.events[e]) || (this.events[e] = []), this.events[e].push(t), this
        }
      }, {
        key: "startSafetyTimer",
        value: function(e, t) {
          var i = this;
          this.player.debug.log("Safety timer invoked from: " + t), this.safetyTimer = setTimeout(function() {
            i.cancel(), i.clearSafetyTimer("startSafetyTimer()")
          }, e)
        }
      }, {
        key: "clearSafetyTimer",
        value: function(e) {
          c.is.nullOrUndefined(this.safetyTimer) || (this.player.debug.log("Safety timer cleared from: " + e), clearTimeout(this.safetyTimer), this.safetyTimer = null)
        }
      }, {
        key: "enabled",
        get: function() {
          return this.player.isVideo && this.player.config.ads.enabled && !c.is.empty(this.publisherId)
        }
      }, {
        key: "tagUrl",
        get: function() {
          var e = {
            AV_PUBLISHERID: "58c25bb0073ef448b1087ad6",
            AV_CHANNELID: "5a0458dc28a06145e4519d21",
            AV_URL: location.hostname,
            cb: Date.now(),
            AV_WIDTH: 640,
            AV_HEIGHT: 480,
            AV_CDIM2: this.publisherId
          };
          return "https://go.aniview.com/api/adserver6/vast/?" + c.buildUrlParams(e)
        }
      }]), e
    }(),
    D = {
      insertElements: function(e, t) {
        var i = this;
        c.is.string(t) ? c.insertElement(e, this.media, {
          src: t
        }) : c.is.array(t) && t.forEach(function(t) {
          c.insertElement(e, i.media, t)
        })
      },
      change: function(e) {
        var t = this;
        c.is.object(e) && "sources" in e && e.sources.length ? (d.cancelRequests.call(this), this.destroy.call(this, function() {
          switch (t.options.quality = [], c.removeElement(t.media), t.media = null, c.is.element(t.elements.container) && t.elements.container.removeAttribute("class"), t.type = e.type, t.provider = c.is.empty(e.sources[0].provider) ? n.html5 : e.sources[0].provider, t.supported = u.check(t.type, t.provider, t.config.playsinline), t.provider + ":" + t.type) {
            case "html5:video":
              t.media = c.createElement("video");
              break;
            case "html5:audio":
              t.media = c.createElement("audio");
              break;
            case "youtube:video":
            case "vimeo:video":
              t.media = c.createElement("div", {
                src: e.sources[0].src
              })
          }
          t.elements.container.appendChild(t.media), c.is.boolean(e.autoplay) && (t.config.autoplay = e.autoplay), t.isHTML5 && (t.config.crossorigin && t.media.setAttribute("crossorigin", ""), t.config.autoplay && t.media.setAttribute("autoplay", ""), c.is.empty(e.poster) || (t.poster = e.poster), t.config.loop.active && t.media.setAttribute("loop", ""), t.config.muted && t.media.setAttribute("muted", ""), t.config.playsinline && t.media.setAttribute("playsinline", "")), f.addStyleHook.call(t), t.isHTML5 && D.insertElements.call(t, "source", e.sources), t.config.title = e.title, M.setup.call(t), t.isHTML5 && ("tracks" in e && D.insertElements.call(t, "track", e.tracks), t.media.load()), (t.isHTML5 || t.isEmbed && !t.supported.ui) && f.build.call(t), t.fullscreen.update()
        }, !0)) : this.debug.warn("Invalid source format")
      }
    },
    N = function() {
      function e(t) {
        s(this, e), this.enabled = t.config.storage.enabled, this.key = t.config.storage.key
      }
      return a(e, [{
        key: "get",
        value: function(t) {
          if (!e.supported) return null;
          var i = window.localStorage.getItem(this.key);
          if (c.is.empty(i)) return null;
          var n = JSON.parse(i);
          return c.is.string(t) && t.length ? n[t] : n
        }
      }, {
        key: "set",
        value: function(t) {
          if (e.supported && this.enabled && c.is.object(t)) {
            var i = this.get();
            c.is.empty(i) && (i = {}), c.extend(i, t), window.localStorage.setItem(this.key, JSON.stringify(i))
          }
        }
      }], [{
        key: "supported",
        get: function() {
          try {
            return "localStorage" in window && (window.localStorage.setItem("___test", "___test"), window.localStorage.removeItem("___test"), !0)
          } catch (e) {
            return !1
          }
        }
      }]), e
    }();
  return function() {
    function e(t, i) {
      var a = this;
      if (s(this, e), this.timers = {}, this.ready = !1, this.loading = !1, this.failed = !1, this.touch = u.touch, this.media = t, c.is.string(this.media) && (this.media = document.querySelectorAll(this.media)), (window.jQuery && this.media instanceof jQuery || c.is.nodeList(this.media) || c.is.array(this.media)) && (this.media = this.media[0]), this.config = c.extend({}, b, i || {}, function() {
          try {
            return JSON.parse(a.media.getAttribute("data-plyr-config"))
          } catch (e) {
            return {}
          }
        }()), this.elements = {
          container: null,
          buttons: {},
          display: {},
          progress: {},
          inputs: {},
          settings: {
            menu: null,
            panes: {},
            tabs: {}
          },
          captions: null
        }, this.captions = {
          active: null,
          currentTrack: null
        }, this.fullscreen = {
          active: !1
        }, this.options = {
          speed: [],
          quality: [],
          captions: []
        }, this.debug = new _(this.config.debug), this.debug.log("Config", this.config), this.debug.log("Support", u), !c.is.nullOrUndefined(this.media) && c.is.element(this.media))
        if (this.media.plyr) this.debug.warn("Target already setup");
        else if (this.config.enabled)
        if (u.check().api) {
          var o = this.media.cloneNode(!0);
          o.autoplay = !1, this.elements.original = o;
          var l = this.media.tagName.toLowerCase(),
            d = null,
            h = null,
            p = null;
          switch (l) {
            case "div":
              if (d = this.media.querySelector("iframe"), c.is.element(d)) {
                if (h = d.getAttribute("src"), this.provider = c.getProviderByUrl(h), this.elements.container = this.media, this.media = d, this.elements.container.className = "", p = c.getUrlParams(h), !c.is.empty(p)) {
                  var m = ["1", "true"];
                  m.includes(p.autoplay) && (this.config.autoplay = !0), m.includes(p.loop) && (this.config.loop.active = !0), this.isYouTube ? this.config.playsinline = m.includes(p.playsinline) : this.config.playsinline = !0
                }
              } else this.provider = this.media.getAttribute(this.config.attributes.embed.provider), this.media.removeAttribute(this.config.attributes.embed.provider);
              if (c.is.empty(this.provider) || !Object.keys(n).includes(this.provider)) return void this.debug.error("Setup failed: Invalid provider");
              this.type = r.video;
              break;
            case "video":
            case "audio":
              this.type = l, this.provider = n.html5, this.media.hasAttribute("crossorigin") && (this.config.crossorigin = !0), this.media.hasAttribute("autoplay") && (this.config.autoplay = !0), this.media.hasAttribute("playsinline") && (this.config.playsinline = !0), this.media.hasAttribute("muted") && (this.config.muted = !0), this.media.hasAttribute("loop") && (this.config.loop.active = !0);
              break;
            default:
              return void this.debug.error("Setup failed: unsupported type")
          }
          this.supported = u.check(this.type, this.provider, this.config.playsinline), this.supported.api ? (this.listeners = new S(this), this.storage = new N(this), this.media.plyr = this, c.is.element(this.elements.container) || (this.elements.container = c.createElement("div"), c.wrap(this.media, this.elements.container)), this.elements.container.setAttribute("tabindex", 0), f.addStyleHook.call(this), M.setup.call(this), this.config.debug && c.on(this.elements.container, this.config.events.join(" "), function(e) {
            a.debug.log("event: " + e.type)
          }), (this.isHTML5 || this.isEmbed && !this.supported.ui) && f.build.call(this), this.listeners.container(), this.listeners.global(), this.fullscreen = new k(this), this.ads = new O(this), this.config.autoplay && this.play()) : this.debug.error("Setup failed: no support")
        } else this.debug.error("Setup failed: no support");
      else this.debug.error("Setup failed: disabled by config");
      else this.debug.error("Setup failed: no suitable element passed")
    }
    return a(e, [{
      key: "play",
      value: function() {
        return c.is.function(this.media.play) ? this.media.play() : null
      }
    }, {
      key: "pause",
      value: function() {
        this.playing && c.is.function(this.media.pause) && this.media.pause()
      }
    }, {
      key: "togglePlay",
      value: function(e) {
        (c.is.boolean(e) ? e : !this.playing) ? this.play(): this.pause()
      }
    }, {
      key: "stop",
      value: function() {
        this.isHTML5 ? (this.pause(), this.restart()) : c.is.function(this.media.stop) && this.media.stop()
      }
    }, {
      key: "restart",
      value: function() {
        this.currentTime = 0
      }
    }, {
      key: "rewind",
      value: function(e) {
        this.currentTime = this.currentTime - (c.is.number(e) ? e : this.config.seekTime)
      }
    }, {
      key: "forward",
      value: function(e) {
        this.currentTime = this.currentTime + (c.is.number(e) ? e : this.config.seekTime)
      }
    }, {
      key: "increaseVolume",
      value: function(e) {
        var t = this.media.muted ? 0 : this.volume;
        this.volume = t + (c.is.number(e) ? e : 1)
      }
    }, {
      key: "decreaseVolume",
      value: function(e) {
        var t = this.media.muted ? 0 : this.volume;
        this.volume = t - (c.is.number(e) ? e : 1)
      }
    }, {
      key: "toggleCaptions",
      value: function(e) {
        if (this.supported.ui) {
          var t = c.is.boolean(e) ? e : !this.elements.container.classList.contains(this.config.classNames.captions.active);
          this.captions.active !== t && (this.captions.active = t, c.toggleState(this.elements.buttons.captions, this.captions.active), c.toggleClass(this.elements.container, this.config.classNames.captions.active, this.captions.active), c.dispatchEvent.call(this, this.media, this.captions.active ? "captionsenabled" : "captionsdisabled"))
        }
      }
    }, {
      key: "airplay",
      value: function() {
        u.airplay && this.media.webkitShowPlaybackTargetPicker()
      }
    }, {
      key: "toggleControls",
      value: function(e) {
        var t = this;
        if (c.is.element(this.elements.controls) && this.supported.ui && !this.isAudio) {
          var i = 0,
            n = e,
            r = !1;
          if (c.is.boolean(e) || (c.is.event(e) ? (r = "enterfullscreen" === e.type, n = ["touchstart", "touchmove", "mouseenter", "mousemove", "focusin"].includes(e.type), ["touchmove", "touchend", "mousemove"].includes(e.type) && (i = 2e3), this.touch || "focusin" !== e.type || (i = 3e3, c.toggleClass(this.elements.controls, this.config.classNames.noTransition, !0))) : n = c.hasClass(this.elements.container, this.config.classNames.hideControls)), clearTimeout(this.timers.controls), n || this.paused || this.loading) {
            if (c.toggleClass(this.elements.container, this.config.classNames.hideControls, !1) && c.dispatchEvent.call(this, this.media, "controlsshown"), this.paused || this.loading) return;
            this.touch && (i = 3e3)
          }
          n && !this.playing || (this.timers.controls = setTimeout(function() {
            c.is.element(t.elements.controls) && (!t.elements.controls.pressed && !t.elements.controls.hover || r) && (c.hasClass(t.elements.container, t.config.classNames.hideControls) || c.toggleClass(t.elements.controls, t.config.classNames.noTransition, !1), c.toggleClass(t.elements.container, t.config.classNames.hideControls, t.config.hideControls) && (c.dispatchEvent.call(t, t.media, "controlshidden"), t.config.controls.includes("settings") && !c.is.empty(t.config.settings) && g.toggleMenu.call(t, !1)))
          }, i))
        }
      }
    }, {
      key: "on",
      value: function(e, t) {
        c.on(this.elements.container, e, t)
      }
    }, {
      key: "off",
      value: function(e, t) {
        c.off(this.elements.container, e, t)
      }
    }, {
      key: "destroy",
      value: function(e) {
        var t = this,
          i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        if (this.ready) {
          var n = function() {
            document.body.style.overflow = "", t.embed = null, i ? (Object.keys(t.elements).length && (c.removeElement(t.elements.buttons.play), c.removeElement(t.elements.captions), c.removeElement(t.elements.controls), c.removeElement(t.elements.wrapper), t.elements.buttons.play = null, t.elements.captions = null, t.elements.controls = null, t.elements.wrapper = null), c.is.function(e) && e()) : (t.listeners.clear(), c.replaceElement(t.elements.original, t.elements.container), c.dispatchEvent.call(t, t.elements.original, "destroyed", !0), c.is.function(e) && e.call(t.elements.original), t.ready = !1, setTimeout(function() {
              t.elements = null, t.media = null
            }, 200))
          };
          switch (this.stop(), this.provider + ":" + this.type) {
            case "html5:video":
            case "html5:audio":
              clearTimeout(this.timers.loading), f.toggleNativeControls.call(this, !0), n();
              break;
            case "youtube:video":
              clearInterval(this.timers.buffering), clearInterval(this.timers.playing), null !== this.embed && c.is.function(this.embed.destroy) && this.embed.destroy(), n();
              break;
            case "vimeo:video":
              null !== this.embed && this.embed.unload().then(n), setTimeout(n, 200)
          }
        }
      }
    }, {
      key: "supports",
      value: function(e) {
        return u.mime.call(this, e)
      }
    }, {
      key: "isHTML5",
      get: function() {
        return Boolean(this.provider === n.html5)
      }
    }, {
      key: "isEmbed",
      get: function() {
        return Boolean(this.isYouTube || this.isVimeo)
      }
    }, {
      key: "isYouTube",
      get: function() {
        return Boolean(this.provider === n.youtube)
      }
    }, {
      key: "isVimeo",
      get: function() {
        return Boolean(this.provider === n.vimeo)
      }
    }, {
      key: "isVideo",
      get: function() {
        return Boolean(this.type === r.video)
      }
    }, {
      key: "isAudio",
      get: function() {
        return Boolean(this.type === r.audio)
      }
    }, {
      key: "playing",
      get: function() {
        return Boolean(this.ready && !this.paused && !this.ended)
      }
    }, {
      key: "paused",
      get: function() {
        return Boolean(this.media.paused)
      }
    }, {
      key: "stopped",
      get: function() {
        return Boolean(this.paused && 0 === this.currentTime)
      }
    }, {
      key: "ended",
      get: function() {
        return Boolean(this.media.ended)
      }
    }, {
      key: "currentTime",
      set: function(e) {
        var t = 0;
        c.is.number(e) && (t = e), t < 0 ? t = 0 : t > this.duration && (t = this.duration), this.media.currentTime = t, this.debug.log("Seeking to " + this.currentTime + " seconds")
      },
      get: function() {
        return Number(this.media.currentTime)
      }
    }, {
      key: "buffered",
      get: function() {
        var e = this.media.buffered;
        return c.is.number(e) ? e : e && e.length && this.duration > 0 ? e.end(0) / this.duration : 0
      }
    }, {
      key: "seeking",
      get: function() {
        return Boolean(this.media.seeking)
      }
    }, {
      key: "duration",
      get: function() {
        var e = parseFloat(this.config.duration),
          t = this.media ? Number(this.media.duration) : 0;
        return Number.isNaN(e) ? t : e
      }
    }, {
      key: "volume",
      set: function(e) {
        var t = e;
        c.is.string(t) && (t = Number(t)), c.is.number(t) || (t = this.storage.get("volume")), c.is.number(t) || (t = this.config.volume), t > 1 && (t = 1), t < 0 && (t = 0), this.config.volume = t, this.media.volume = t, !c.is.empty(e) && this.muted && t > 0 && (this.muted = !1)
      },
      get: function() {
        return Number(this.media.volume)
      }
    }, {
      key: "muted",
      set: function(e) {
        var t = e;
        c.is.boolean(t) || (t = this.storage.get("muted")), c.is.boolean(t) || (t = this.config.muted), this.config.muted = t, this.media.muted = t
      },
      get: function() {
        return Boolean(this.media.muted)
      }
    }, {
      key: "hasAudio",
      get: function() {
        return !this.isHTML5 || !!this.isAudio || Boolean(this.media.mozHasAudio) || Boolean(this.media.webkitAudioDecodedByteCount) || Boolean(this.media.audioTracks && this.media.audioTracks.length)
      }
    }, {
      key: "speed",
      set: function(e) {
        var t = null;
        c.is.number(e) && (t = e), c.is.number(t) || (t = this.storage.get("speed")), c.is.number(t) || (t = this.config.speed.selected), t < .1 && (t = .1), t > 2 && (t = 2), this.config.speed.options.includes(t) ? (this.config.speed.selected = t, this.media.playbackRate = t) : this.debug.warn("Unsupported speed (" + t + ")")
      },
      get: function() {
        return Number(this.media.playbackRate)
      }
    }, {
      key: "quality",
      set: function(e) {
        var t = null;
        if (c.is.empty(e) || (t = Number(e)), c.is.number(t) && 0 !== t || (t = this.storage.get("quality")), c.is.number(t) || (t = this.config.quality.selected), c.is.number(t) || (t = this.config.quality.default), this.options.quality.length) {
          if (!this.options.quality.includes(t)) {
            var i = c.closest(this.options.quality, t);
            this.debug.warn("Unsupported quality option: " + t + ", using " + i + " instead"), t = i
          }
          this.config.quality.selected = t, this.media.quality = t
        }
      },
      get: function() {
        return this.media.quality
      }
    }, {
      key: "loop",
      set: function(e) {
        var t = c.is.boolean(e) ? e : this.config.loop.active;
        this.config.loop.active = t, this.media.loop = t
      },
      get: function() {
        return Boolean(this.media.loop)
      }
    }, {
      key: "source",
      set: function(e) {
        D.change.call(this, e)
      },
      get: function() {
        return this.media.currentSrc
      }
    }, {
      key: "poster",
      set: function(e) {
        this.isVideo ? c.is.string(e) && (this.media.setAttribute("poster", e), f.setPoster.call(this)) : this.debug.warn("Poster can only be set for video")
      },
      get: function() {
        return this.isVideo ? this.media.getAttribute("poster") : null
      }
    }, {
      key: "autoplay",
      set: function(e) {
        var t = c.is.boolean(e) ? e : this.config.autoplay;
        this.config.autoplay = t
      },
      get: function() {
        return Boolean(this.config.autoplay)
      }
    }, {
      key: "language",
      set: function(e) {
        if (c.is.string(e))
          if (c.is.empty(e)) this.toggleCaptions(!1);
          else {
            var t = e.toLowerCase();
            this.options.captions.includes(t) ? (this.toggleCaptions(!0), "enabled" !== t && this.language !== t && (this.captions.language = t, y.setText.call(this, null), y.setLanguage.call(this), c.dispatchEvent.call(this, this.media, "languagechange"))) : this.debug.warn("Unsupported language option: " + t)
          }
      },
      get: function() {
        return this.captions.language
      }
    }, {
      key: "pip",
      set: function(e) {
        var t = "inline";
        if (u.pip) {
          var i = c.is.boolean(e) ? e : this.pip === t;
          this.media.webkitSetPresentationMode(i ? "picture-in-picture" : t)
        }
      },
      get: function() {
        return u.pip ? this.media.webkitPresentationMode : null
      }
    }], [{
      key: "supported",
      value: function(e, t, i) {
        return u.check(e, t, i)
      }
    }, {
      key: "loadSprite",
      value: function(e, t) {
        return c.loadSprite(e, t)
      }
    }, {
      key: "setup",
      value: function(t) {
        var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          n = null;
        return c.is.string(t) ? n = Array.from(document.querySelectorAll(t)) : c.is.nodeList(t) ? n = Array.from(t) : c.is.array(t) && (n = t.filter(function(e) {
          return c.is.element(e)
        })), c.is.empty(n) ? null : n.map(function(t) {
          return new e(t, i)
        })
      }
    }]), e
  }()
}),
function(e, t) {
  "use strict";
  "function" == typeof define && define.amd ? define(["moment"], t) : "object" == typeof module && module.exports ? module.exports = t(require("moment")) : t(e.moment)
}(this, function(e) {
  "use strict";
  var t, i = {},
    n = {},
    r = {},
    s = {},
    a = e.version.split("."),
    o = +a[0],
    l = +a[1];

  function c(e) {
    return 96 < e ? e - 87 : 64 < e ? e - 29 : e - 48
  }

  function u(e) {
    var t = 0,
      i = e.split("."),
      n = i[0],
      r = i[1] || "",
      s = 1,
      a = 0,
      o = 1;
    for (45 === e.charCodeAt(0) && (o = -(t = 1)); t < n.length; t++) a = 60 * a + c(n.charCodeAt(t));
    for (t = 0; t < r.length; t++) s /= 60, a += c(r.charCodeAt(t)) * s;
    return a * o
  }

  function d(e) {
    for (var t = 0; t < e.length; t++) e[t] = u(e[t])
  }

  function h(e, t) {
    var i, n = [];
    for (i = 0; i < t.length; i++) n[i] = e[t[i]];
    return n
  }

  function p(e) {
    var t = e.split("|"),
      i = t[2].split(" "),
      n = t[3].split(""),
      r = t[4].split(" ");
    return d(i), d(n), d(r),
      function(e, t) {
        for (var i = 0; i < t; i++) e[i] = Math.round((e[i - 1] || 0) + 6e4 * e[i]);
        e[t - 1] = 1 / 0
      }(r, n.length), {
        name: t[0],
        abbrs: h(t[1].split(" "), n),
        offsets: h(i, n),
        untils: r,
        population: 0 | t[5]
      }
  }

  function f(e) {
    e && this._set(p(e))
  }

  function m(e) {
    var t = e.toTimeString(),
      i = t.match(/\([a-z ]+\)/i);
    "GMT" === (i = i && i[0] ? (i = i[0].match(/[A-Z]/g)) ? i.join("") : void 0 : (i = t.match(/[A-Z]{3,5}/g)) ? i[0] : void 0) && (i = void 0), this.at = +e, this.abbr = i, this.offset = e.getTimezoneOffset()
  }

  function g(e) {
    this.zone = e, this.offsetScore = 0, this.abbrScore = 0
  }

  function y(e, t) {
    for (var i, n; n = 6e4 * ((t.at - e.at) / 12e4 | 0);)(i = new m(new Date(e.at + n))).offset === e.offset ? e = i : t = i;
    return e
  }

  function v(e, t) {
    return e.offsetScore !== t.offsetScore ? e.offsetScore - t.offsetScore : e.abbrScore !== t.abbrScore ? e.abbrScore - t.abbrScore : t.zone.population - e.zone.population
  }

  function _(e, t) {
    var i, n;
    for (d(t), i = 0; i < t.length; i++) n = t[i], s[n] = s[n] || {}, s[n][e] = !0
  }

  function b(e) {
    return (e || "").toLowerCase().replace(/\//g, "_")
  }

  function w(e) {
    var t, n, s, a;
    for ("string" == typeof e && (e = [e]), t = 0; t < e.length; t++) a = b(n = (s = e[t].split("|"))[0]), i[a] = e[t], r[a] = n, _(a, s[2].split(" "))
  }

  function T(e, t) {
    e = b(e);
    var s, a = i[e];
    return a instanceof f ? a : "string" == typeof a ? (a = new f(a), i[e] = a) : n[e] && t !== T && (s = T(n[e], T)) ? ((a = i[e] = new f)._set(s), a.name = r[e], a) : null
  }

  function A(e) {
    var t, i, s, a;
    for ("string" == typeof e && (e = [e]), t = 0; t < e.length; t++) s = b((i = e[t].split("|"))[0]), a = b(i[1]), n[s] = a, r[s] = i[0], n[a] = s, r[a] = i[1]
  }

  function k(e) {
    w(e.zones), A(e.links), C.dataVersion = e.version
  }

  function x(e) {
    var t = "X" === e._f || "x" === e._f;
    return !(!e._a || void 0 !== e._tzm || t)
  }

  function S(e) {
    "undefined" != typeof console && "function" == typeof console.error && console.error(e)
  }

  function C(t) {
    var i = Array.prototype.slice.call(arguments, 0, -1),
      n = arguments[arguments.length - 1],
      r = T(n),
      s = e.utc.apply(null, i);
    return r && !e.isMoment(t) && x(s) && s.add(r.parse(s), "minutes"), s.tz(n), s
  }(o < 2 || 2 === o && l < 6) && S("Moment Timezone requires Moment.js >= 2.6.0. You are using Moment.js " + e.version + ". See momentjs.com"), f.prototype = {
    _set: function(e) {
      this.name = e.name, this.abbrs = e.abbrs, this.untils = e.untils, this.offsets = e.offsets, this.population = e.population
    },
    _index: function(e) {
      var t, i = +e,
        n = this.untils;
      for (t = 0; t < n.length; t++)
        if (i < n[t]) return t
    },
    parse: function(e) {
      var t, i, n, r, s = +e,
        a = this.offsets,
        o = this.untils,
        l = o.length - 1;
      for (r = 0; r < l; r++)
        if (t = a[r], i = a[r + 1], n = a[r ? r - 1 : r], t < i && C.moveAmbiguousForward ? t = i : n < t && C.moveInvalidForward && (t = n), s < o[r] - 6e4 * t) return a[r];
      return a[l]
    },
    abbr: function(e) {
      return this.abbrs[this._index(e)]
    },
    offset: function(e) {
      return S("zone.offset has been deprecated in favor of zone.utcOffset"), this.offsets[this._index(e)]
    },
    utcOffset: function(e) {
      return this.offsets[this._index(e)]
    }
  }, g.prototype.scoreOffsetAt = function(e) {
    this.offsetScore += Math.abs(this.zone.utcOffset(e.at) - e.offset), this.zone.abbr(e.at).replace(/[^A-Z]/g, "") !== e.abbr && this.abbrScore++
  }, C.version = "0.5.16", C.dataVersion = "", C._zones = i, C._links = n, C._names = r, C.add = w, C.link = A, C.load = k, C.zone = T, C.zoneExists = function e(t) {
    return e.didShowError || (e.didShowError = !0, S("moment.tz.zoneExists('" + t + "') has been deprecated in favor of !moment.tz.zone('" + t + "')")), !!T(t)
  }, C.guess = function(e) {
    return t && !e || (t = function() {
      try {
        var e = Intl.DateTimeFormat().resolvedOptions().timeZone;
        if (e && 3 < e.length) {
          var t = r[b(e)];
          if (t) return t;
          S("Moment Timezone found " + e + " from the Intl api, but did not have that data loaded.")
        }
      } catch (e) {}
      var i, n, a, o = function() {
          var e, t, i, n = (new Date).getFullYear() - 2,
            r = new m(new Date(n, 0, 1)),
            s = [r];
          for (i = 1; i < 48; i++)(t = new m(new Date(n, i, 1))).offset !== r.offset && (e = y(r, t), s.push(e), s.push(new m(new Date(e.at + 6e4)))), r = t;
          for (i = 0; i < 4; i++) s.push(new m(new Date(n + i, 0, 1))), s.push(new m(new Date(n + i, 6, 1)));
          return s
        }(),
        l = o.length,
        c = function(e) {
          var t, i, n, a = e.length,
            o = {},
            l = [];
          for (t = 0; t < a; t++)
            for (i in n = s[e[t].offset] || {}) n.hasOwnProperty(i) && (o[i] = !0);
          for (t in o) o.hasOwnProperty(t) && l.push(r[t]);
          return l
        }(o),
        u = [];
      for (n = 0; n < c.length; n++) {
        for (i = new g(T(c[n]), l), a = 0; a < l; a++) i.scoreOffsetAt(o[a]);
        u.push(i)
      }
      return u.sort(v), 0 < u.length ? u[0].zone.name : void 0
    }()), t
  }, C.names = function() {
    var e, t = [];
    for (e in r) r.hasOwnProperty(e) && (i[e] || i[n[e]]) && r[e] && t.push(r[e]);
    return t.sort()
  }, C.Zone = f, C.unpack = p, C.unpackBase60 = u, C.needsOffset = x, C.moveInvalidForward = !0, C.moveAmbiguousForward = !1;
  var E, P = e.fn;

  function M(e) {
    return function() {
      return this._z ? this._z.abbr(this) : e.call(this)
    }
  }
  e.tz = C, e.defaultZone = null, e.updateOffset = function(t, i) {
    var n, r = e.defaultZone;
    void 0 === t._z && (r && x(t) && !t._isUTC && (t._d = e.utc(t._a)._d, t.utc().add(r.parse(t), "minutes")), t._z = r), t._z && (n = t._z.utcOffset(t), Math.abs(n) < 16 && (n /= 60), void 0 !== t.utcOffset ? t.utcOffset(-n, i) : t.zone(n, i))
  }, P.tz = function(t, i) {
    return t ? (this._z = T(t), this._z ? e.updateOffset(this, i) : S("Moment Timezone has no data for " + t + ". See http://momentjs.com/timezone/docs/#/data-loading/."), this) : this._z ? this._z.name : void 0
  }, P.zoneName = M(P.zoneName), P.zoneAbbr = M(P.zoneAbbr), P.utc = (E = P.utc, function() {
    return this._z = null, E.apply(this, arguments)
  }), e.tz.setDefault = function(t) {
    return (o < 2 || 2 === o && l < 9) && S("Moment Timezone setDefault() requires Moment.js >= 2.9.0. You are using Moment.js " + e.version + "."), e.defaultZone = t ? T(t) : null, e
  };
  var O = e.momentProperties;
  return "[object Array]" === Object.prototype.toString.call(O) ? (O.push("_z"), O.push("_a")) : O && (O._z = null), k({
    version: "2018d",
    zones: ["Africa/Abidjan|GMT|0|0||48e5", "Africa/Nairobi|EAT|-30|0||47e5", "Africa/Algiers|CET|-10|0||26e5", "Africa/Lagos|WAT|-10|0||17e6", "Africa/Maputo|CAT|-20|0||26e5", "Africa/Cairo|EET EEST|-20 -30|01010|1M2m0 gL0 e10 mn0|15e6", "Africa/Casablanca|WET WEST|0 -10|0101010101010101010101010101010101010101010|1H3C0 wM0 co0 go0 1o00 s00 dA0 vc0 11A0 A00 e00 y00 11A0 uM0 e00 Dc0 11A0 s00 e00 IM0 WM0 mo0 gM0 LA0 WM0 jA0 e00 Rc0 11A0 e00 e00 U00 11A0 8o0 e00 11A0 11A0 5A0 e00 17c0 1fA0 1a00|32e5", "Europe/Paris|CET CEST|-10 -20|01010101010101010101010|1GNB0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0|11e6", "Africa/Johannesburg|SAST|-20|0||84e5", "Africa/Khartoum|EAT CAT|-30 -20|01|1Usl0|51e5", "Africa/Sao_Tome|GMT WAT|0 -10|01|1UQN0", "Africa/Tripoli|EET CET CEST|-20 -10 -20|0120|1IlA0 TA0 1o00|11e5", "Africa/Windhoek|WAST WAT CAT|-20 -10 -20|0101010101012|1GQo0 11B0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0|32e4", "America/Adak|HST HDT|a0 90|01010101010101010101010|1GIc0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0|326", "America/Anchorage|AKST AKDT|90 80|01010101010101010101010|1GIb0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0|30e4", "America/Santo_Domingo|AST|40|0||29e5", "America/Araguaina|-03 -02|30 20|010|1IdD0 Lz0|14e4", "America/Fortaleza|-03|30|0||34e5", "America/Asuncion|-03 -04|30 40|01010101010101010101010|1GTf0 1cN0 17b0 1ip0 17b0 1ip0 17b0 1ip0 19X0 1fB0 19X0 1fB0 19X0 1ip0 17b0 1ip0 17b0 1ip0 19X0 1fB0 19X0 1fB0|28e5", "America/Panama|EST|50|0||15e5", "America/Mexico_City|CST CDT|60 50|01010101010101010101010|1GQw0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0|20e6", "America/Bahia|-02 -03|20 30|01|1GCq0|27e5", "America/Managua|CST|60|0||22e5", "America/La_Paz|-04|40|0||19e5", "America/Lima|-05|50|0||11e6", "America/Denver|MST MDT|70 60|01010101010101010101010|1GI90 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0|26e5", "America/Campo_Grande|-03 -04|30 40|01010101010101010101010|1GCr0 1zd0 Lz0 1C10 Lz0 1C10 On0 1zd0 On0 1zd0 On0 1zd0 On0 1HB0 FX0 1HB0 FX0 1HB0 IL0 1HB0 FX0 1HB0|77e4", "America/Cancun|CST CDT EST|60 50 50|01010102|1GQw0 1nX0 14p0 1lb0 14p0 1lb0 Dd0|63e4", "America/Caracas|-0430 -04|4u 40|01|1QMT0|29e5", "America/Chicago|CST CDT|60 50|01010101010101010101010|1GI80 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0|92e5", "America/Chihuahua|MST MDT|70 60|01010101010101010101010|1GQx0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0|81e4", "America/Phoenix|MST|70|0||42e5", "America/Los_Angeles|PST PDT|80 70|01010101010101010101010|1GIa0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0|15e6", "America/New_York|EST EDT|50 40|01010101010101010101010|1GI70 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0|21e6", "America/Rio_Branco|-04 -05|40 50|01|1KLE0|31e4", "America/Fort_Nelson|PST PDT MST|80 70 70|01010102|1GIa0 1zb0 Op0 1zb0 Op0 1zb0 Op0|39e2", "America/Halifax|AST ADT|40 30|01010101010101010101010|1GI60 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0|39e4", "America/Godthab|-03 -02|30 20|01010101010101010101010|1GNB0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0|17e3", "America/Grand_Turk|EST EDT AST|50 40 40|0101010121010101010|1GI70 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 5Ip0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0|37e2", "America/Havana|CST CDT|50 40|01010101010101010101010|1GQt0 1qM0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0|21e5", "America/Metlakatla|PST AKST AKDT|80 90 80|0121212121212121|1PAa0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0|14e2", "America/Miquelon|-03 -02|30 20|01010101010101010101010|1GI50 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0|61e2", "America/Montevideo|-02 -03|20 30|01010101|1GI40 1o10 11z0 1o10 11z0 1o10 11z0|17e5", "America/Noronha|-02|20|0||30e2", "America/Port-au-Prince|EST EDT|50 40|010101010101010101010|1GI70 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 3iN0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0|23e5", "Antarctica/Palmer|-03 -04|30 40|010101010|1H3D0 Op0 1zb0 Rd0 1wn0 Rd0 46n0 Ap0|40", "America/Santiago|-03 -04|30 40|010101010101010101010|1H3D0 Op0 1zb0 Rd0 1wn0 Rd0 46n0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Dd0 1Nb0 Ap0|62e5", "America/Sao_Paulo|-02 -03|20 30|01010101010101010101010|1GCq0 1zd0 Lz0 1C10 Lz0 1C10 On0 1zd0 On0 1zd0 On0 1zd0 On0 1HB0 FX0 1HB0 FX0 1HB0 IL0 1HB0 FX0 1HB0|20e6", "Atlantic/Azores|-01 +00|10 0|01010101010101010101010|1GNB0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0|25e4", "America/St_Johns|NST NDT|3u 2u|01010101010101010101010|1GI5u 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0|11e4", "Antarctica/Casey|+11 +08|-b0 -80|0101|1GAF0 blz0 3m10|10", "Antarctica/Davis|+05 +07|-50 -70|01|1GAI0|70", "Pacific/Port_Moresby|+10|-a0|0||25e4", "Pacific/Guadalcanal|+11|-b0|0||11e4", "Asia/Tashkent|+05|-50|0||23e5", "Pacific/Auckland|NZDT NZST|-d0 -c0|01010101010101010101010|1GQe0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00|14e5", "Asia/Baghdad|+03|-30|0||66e5", "Antarctica/Troll|+00 +02|0 -20|01010101010101010101010|1GNB0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0|40", "Asia/Dhaka|+06|-60|0||16e6", "Asia/Amman|EET EEST|-20 -30|010101010101010101010|1GPy0 4bX0 Dd0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 11A0 1o00|25e5", "Asia/Kamchatka|+12|-c0|0||18e4", "Asia/Baku|+04 +05|-40 -50|010101010|1GNA0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00|27e5", "Asia/Bangkok|+07|-70|0||15e6", "Asia/Barnaul|+07 +06|-70 -60|010|1N7v0 3rd0", "Asia/Beirut|EET EEST|-20 -30|01010101010101010101010|1GNy0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0|22e5", "Asia/Manila|+08|-80|0||24e6", "Asia/Kolkata|IST|-5u|0||15e6", "Asia/Chita|+10 +08 +09|-a0 -80 -90|012|1N7s0 3re0|33e4", "Asia/Ulaanbaatar|+08 +09|-80 -90|01010|1O8G0 1cJ0 1cP0 1cJ0|12e5", "Asia/Shanghai|CST|-80|0||23e6", "Asia/Colombo|+0530|-5u|0||22e5", "Asia/Damascus|EET EEST|-20 -30|01010101010101010101010|1GPy0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0|26e5", "Asia/Dili|+09|-90|0||19e4", "Asia/Dubai|+04|-40|0||39e5", "Asia/Famagusta|EET EEST +03|-20 -30 -30|0101010101201010101010|1GNB0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 15U0 2Ks0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0", "Asia/Gaza|EET EEST|-20 -30|01010101010101010101010|1GPy0 1a00 1fA0 1cL0 1cN0 1nX0 1210 1nz0 1220 1qL0 WN0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1qL0 WN0 1qL0 WN0 1qL0|18e5", "Asia/Hong_Kong|HKT|-80|0||73e5", "Asia/Hovd|+07 +08|-70 -80|01010|1O8H0 1cJ0 1cP0 1cJ0|81e3", "Asia/Irkutsk|+09 +08|-90 -80|01|1N7t0|60e4", "Europe/Istanbul|EET EEST +03|-20 -30 -30|01010101012|1GNB0 1qM0 11A0 1o00 1200 1nA0 11A0 1tA0 U00 15w0|13e6", "Asia/Jakarta|WIB|-70|0||31e6", "Asia/Jayapura|WIT|-90|0||26e4", "Asia/Jerusalem|IST IDT|-20 -30|01010101010101010101010|1GPA0 1aL0 1eN0 1oL0 10N0 1oL0 10N0 1oL0 10N0 1rz0 W10 1rz0 W10 1rz0 10N0 1oL0 10N0 1oL0 10N0 1rz0 W10 1rz0|81e4", "Asia/Kabul|+0430|-4u|0||46e5", "Asia/Karachi|PKT|-50|0||24e6", "Asia/Kathmandu|+0545|-5J|0||12e5", "Asia/Yakutsk|+10 +09|-a0 -90|01|1N7s0|28e4", "Asia/Krasnoyarsk|+08 +07|-80 -70|01|1N7u0|10e5", "Asia/Magadan|+12 +10 +11|-c0 -a0 -b0|012|1N7q0 3Cq0|95e3", "Asia/Makassar|WITA|-80|0||15e5", "Europe/Athens|EET EEST|-20 -30|01010101010101010101010|1GNB0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0|35e5", "Asia/Novosibirsk|+07 +06|-70 -60|010|1N7v0 4eN0|15e5", "Asia/Omsk|+07 +06|-70 -60|01|1N7v0|12e5", "Asia/Pyongyang|KST KST|-90 -8u|01|1P4D0|29e5", "Asia/Rangoon|+0630|-6u|0||48e5", "Asia/Sakhalin|+11 +10|-b0 -a0|010|1N7r0 3rd0|58e4", "Asia/Seoul|KST|-90|0||23e6", "Asia/Srednekolymsk|+12 +11|-c0 -b0|01|1N7q0|35e2", "Asia/Tehran|+0330 +0430|-3u -4u|01010101010101010101010|1GLUu 1dz0 1cN0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0 1cN0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0 1cN0 1dz0 1cp0 1dz0|14e6", "Asia/Tokyo|JST|-90|0||38e6", "Asia/Tomsk|+07 +06|-70 -60|010|1N7v0 3Qp0|10e5", "Asia/Vladivostok|+11 +10|-b0 -a0|01|1N7r0|60e4", "Asia/Yekaterinburg|+06 +05|-60 -50|01|1N7w0|14e5", "Europe/Lisbon|WET WEST|0 -10|01010101010101010101010|1GNB0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0|27e5", "Atlantic/Cape_Verde|-01|10|0||50e4", "Australia/Sydney|AEDT AEST|-b0 -a0|01010101010101010101010|1GQg0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0|40e5", "Australia/Adelaide|ACDT ACST|-au -9u|01010101010101010101010|1GQgu 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0|11e5", "Australia/Brisbane|AEST|-a0|0||20e5", "Australia/Darwin|ACST|-9u|0||12e4", "Australia/Eucla|+0845|-8J|0||368", "Australia/Lord_Howe|+11 +1030|-b0 -au|01010101010101010101010|1GQf0 1fAu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1fAu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu|347", "Australia/Perth|AWST|-80|0||18e5", "Pacific/Easter|-05 -06|50 60|010101010101010101010|1H3D0 Op0 1zb0 Rd0 1wn0 Rd0 46n0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Dd0 1Nb0 Ap0|30e2", "Europe/Dublin|GMT IST|0 -10|01010101010101010101010|1GNB0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0|12e5", "Etc/GMT-1|+01|-10|0|", "Pacific/Fakaofo|+13|-d0|0||483", "Pacific/Kiritimati|+14|-e0|0||51e2", "Etc/GMT-2|+02|-20|0|", "Pacific/Tahiti|-10|a0|0||18e4", "Pacific/Niue|-11|b0|0||12e2", "Etc/GMT+12|-12|c0|0|", "Pacific/Galapagos|-06|60|0||25e3", "Etc/GMT+7|-07|70|0|", "Pacific/Pitcairn|-08|80|0||56", "Pacific/Gambier|-09|90|0||125", "Etc/UCT|UCT|0|0|", "Etc/UTC|UTC|0|0|", "Europe/Astrakhan|+04 +03|-40 -30|010|1N7y0 3rd0", "Europe/London|GMT BST|0 -10|01010101010101010101010|1GNB0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0|10e6", "Europe/Chisinau|EET EEST|-20 -30|01010101010101010101010|1GNA0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0|67e4", "Europe/Kaliningrad|+03 EET|-30 -20|01|1N7z0|44e4", "Europe/Volgograd|+04 +03|-40 -30|01|1N7y0|10e5", "Europe/Moscow|MSK MSK|-40 -30|01|1N7y0|16e6", "Europe/Saratov|+04 +03|-40 -30|010|1N7y0 5810", "Europe/Simferopol|EET EEST MSK MSK|-20 -30 -40 -30|0101023|1GNB0 1qM0 11A0 1o00 11z0 1nW0|33e4", "Pacific/Honolulu|HST|a0|0||37e4", "MET|MET MEST|-10 -20|01010101010101010101010|1GNB0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0", "Pacific/Chatham|+1345 +1245|-dJ -cJ|01010101010101010101010|1GQe0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00|600", "Pacific/Apia|+14 +13|-e0 -d0|01010101010101010101010|1GQe0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00|37e3", "Pacific/Bougainville|+10 +11|-a0 -b0|01|1NwE0|18e4", "Pacific/Fiji|+13 +12|-d0 -c0|01010101010101010101010|1Goe0 1Nc0 Ao0 1Q00 xz0 1SN0 uM0 1SM0 uM0 1VA0 s00 1VA0 s00 1VA0 uM0 1SM0 uM0 1SM0 uM0 1VA0 s00 1VA0|88e4", "Pacific/Guam|ChST|-a0|0||17e4", "Pacific/Marquesas|-0930|9u|0||86e2", "Pacific/Pago_Pago|SST|b0|0||37e2", "Pacific/Norfolk|+1130 +11|-bu -b0|01|1PoCu|25e4", "Pacific/Tongatapu|+13 +14|-d0 -e0|010|1S4d0 s00|75e3"],
    links: ["Africa/Abidjan|Africa/Accra", "Africa/Abidjan|Africa/Bamako", "Africa/Abidjan|Africa/Banjul", "Africa/Abidjan|Africa/Bissau", "Africa/Abidjan|Africa/Conakry", "Africa/Abidjan|Africa/Dakar", "Africa/Abidjan|Africa/Freetown", "Africa/Abidjan|Africa/Lome", "Africa/Abidjan|Africa/Monrovia", "Africa/Abidjan|Africa/Nouakchott", "Africa/Abidjan|Africa/Ouagadougou", "Africa/Abidjan|Africa/Timbuktu", "Africa/Abidjan|America/Danmarkshavn", "Africa/Abidjan|Atlantic/Reykjavik", "Africa/Abidjan|Atlantic/St_Helena", "Africa/Abidjan|Etc/GMT", "Africa/Abidjan|Etc/GMT+0", "Africa/Abidjan|Etc/GMT-0", "Africa/Abidjan|Etc/GMT0", "Africa/Abidjan|Etc/Greenwich", "Africa/Abidjan|GMT", "Africa/Abidjan|GMT+0", "Africa/Abidjan|GMT-0", "Africa/Abidjan|GMT0", "Africa/Abidjan|Greenwich", "Africa/Abidjan|Iceland", "Africa/Algiers|Africa/Tunis", "Africa/Cairo|Egypt", "Africa/Casablanca|Africa/El_Aaiun", "Africa/Johannesburg|Africa/Maseru", "Africa/Johannesburg|Africa/Mbabane", "Africa/Lagos|Africa/Bangui", "Africa/Lagos|Africa/Brazzaville", "Africa/Lagos|Africa/Douala", "Africa/Lagos|Africa/Kinshasa", "Africa/Lagos|Africa/Libreville", "Africa/Lagos|Africa/Luanda", "Africa/Lagos|Africa/Malabo", "Africa/Lagos|Africa/Ndjamena", "Africa/Lagos|Africa/Niamey", "Africa/Lagos|Africa/Porto-Novo", "Africa/Maputo|Africa/Blantyre", "Africa/Maputo|Africa/Bujumbura", "Africa/Maputo|Africa/Gaborone", "Africa/Maputo|Africa/Harare", "Africa/Maputo|Africa/Kigali", "Africa/Maputo|Africa/Lubumbashi", "Africa/Maputo|Africa/Lusaka", "Africa/Nairobi|Africa/Addis_Ababa", "Africa/Nairobi|Africa/Asmara", "Africa/Nairobi|Africa/Asmera", "Africa/Nairobi|Africa/Dar_es_Salaam", "Africa/Nairobi|Africa/Djibouti", "Africa/Nairobi|Africa/Juba", "Africa/Nairobi|Africa/Kampala", "Africa/Nairobi|Africa/Mogadishu", "Africa/Nairobi|Indian/Antananarivo", "Africa/Nairobi|Indian/Comoro", "Africa/Nairobi|Indian/Mayotte", "Africa/Tripoli|Libya", "America/Adak|America/Atka", "America/Adak|US/Aleutian", "America/Anchorage|America/Juneau", "America/Anchorage|America/Nome", "America/Anchorage|America/Sitka", "America/Anchorage|America/Yakutat", "America/Anchorage|US/Alaska", "America/Campo_Grande|America/Cuiaba", "America/Chicago|America/Indiana/Knox", "America/Chicago|America/Indiana/Tell_City", "America/Chicago|America/Knox_IN", "America/Chicago|America/Matamoros", "America/Chicago|America/Menominee", "America/Chicago|America/North_Dakota/Beulah", "America/Chicago|America/North_Dakota/Center", "America/Chicago|America/North_Dakota/New_Salem", "America/Chicago|America/Rainy_River", "America/Chicago|America/Rankin_Inlet", "America/Chicago|America/Resolute", "America/Chicago|America/Winnipeg", "America/Chicago|CST6CDT", "America/Chicago|Canada/Central", "America/Chicago|US/Central", "America/Chicago|US/Indiana-Starke", "America/Chihuahua|America/Mazatlan", "America/Chihuahua|Mexico/BajaSur", "America/Denver|America/Boise", "America/Denver|America/Cambridge_Bay", "America/Denver|America/Edmonton", "America/Denver|America/Inuvik", "America/Denver|America/Ojinaga", "America/Denver|America/Shiprock", "America/Denver|America/Yellowknife", "America/Denver|Canada/Mountain", "America/Denver|MST7MDT", "America/Denver|Navajo", "America/Denver|US/Mountain", "America/Fortaleza|America/Argentina/Buenos_Aires", "America/Fortaleza|America/Argentina/Catamarca", "America/Fortaleza|America/Argentina/ComodRivadavia", "America/Fortaleza|America/Argentina/Cordoba", "America/Fortaleza|America/Argentina/Jujuy", "America/Fortaleza|America/Argentina/La_Rioja", "America/Fortaleza|America/Argentina/Mendoza", "America/Fortaleza|America/Argentina/Rio_Gallegos", "America/Fortaleza|America/Argentina/Salta", "America/Fortaleza|America/Argentina/San_Juan", "America/Fortaleza|America/Argentina/San_Luis", "America/Fortaleza|America/Argentina/Tucuman", "America/Fortaleza|America/Argentina/Ushuaia", "America/Fortaleza|America/Belem", "America/Fortaleza|America/Buenos_Aires", "America/Fortaleza|America/Catamarca", "America/Fortaleza|America/Cayenne", "America/Fortaleza|America/Cordoba", "America/Fortaleza|America/Jujuy", "America/Fortaleza|America/Maceio", "America/Fortaleza|America/Mendoza", "America/Fortaleza|America/Paramaribo", "America/Fortaleza|America/Recife", "America/Fortaleza|America/Rosario", "America/Fortaleza|America/Santarem", "America/Fortaleza|Antarctica/Rothera", "America/Fortaleza|Atlantic/Stanley", "America/Fortaleza|Etc/GMT+3", "America/Halifax|America/Glace_Bay", "America/Halifax|America/Goose_Bay", "America/Halifax|America/Moncton", "America/Halifax|America/Thule", "America/Halifax|Atlantic/Bermuda", "America/Halifax|Canada/Atlantic", "America/Havana|Cuba", "America/La_Paz|America/Boa_Vista", "America/La_Paz|America/Guyana", "America/La_Paz|America/Manaus", "America/La_Paz|America/Porto_Velho", "America/La_Paz|Brazil/West", "America/La_Paz|Etc/GMT+4", "America/Lima|America/Bogota", "America/Lima|America/Guayaquil", "America/Lima|Etc/GMT+5", "America/Los_Angeles|America/Dawson", "America/Los_Angeles|America/Ensenada", "America/Los_Angeles|America/Santa_Isabel", "America/Los_Angeles|America/Tijuana", "America/Los_Angeles|America/Vancouver", "America/Los_Angeles|America/Whitehorse", "America/Los_Angeles|Canada/Pacific", "America/Los_Angeles|Canada/Yukon", "America/Los_Angeles|Mexico/BajaNorte", "America/Los_Angeles|PST8PDT", "America/Los_Angeles|US/Pacific", "America/Los_Angeles|US/Pacific-New", "America/Managua|America/Belize", "America/Managua|America/Costa_Rica", "America/Managua|America/El_Salvador", "America/Managua|America/Guatemala", "America/Managua|America/Regina", "America/Managua|America/Swift_Current", "America/Managua|America/Tegucigalpa", "America/Managua|Canada/Saskatchewan", "America/Mexico_City|America/Bahia_Banderas", "America/Mexico_City|America/Merida", "America/Mexico_City|America/Monterrey", "America/Mexico_City|Mexico/General", "America/New_York|America/Detroit", "America/New_York|America/Fort_Wayne", "America/New_York|America/Indiana/Indianapolis", "America/New_York|America/Indiana/Marengo", "America/New_York|America/Indiana/Petersburg", "America/New_York|America/Indiana/Vevay", "America/New_York|America/Indiana/Vincennes", "America/New_York|America/Indiana/Winamac", "America/New_York|America/Indianapolis", "America/New_York|America/Iqaluit", "America/New_York|America/Kentucky/Louisville", "America/New_York|America/Kentucky/Monticello", "America/New_York|America/Louisville", "America/New_York|America/Montreal", "America/New_York|America/Nassau", "America/New_York|America/Nipigon", "America/New_York|America/Pangnirtung", "America/New_York|America/Thunder_Bay", "America/New_York|America/Toronto", "America/New_York|Canada/Eastern", "America/New_York|EST5EDT", "America/New_York|US/East-Indiana", "America/New_York|US/Eastern", "America/New_York|US/Michigan", "America/Noronha|Atlantic/South_Georgia", "America/Noronha|Brazil/DeNoronha", "America/Noronha|Etc/GMT+2", "America/Panama|America/Atikokan", "America/Panama|America/Cayman", "America/Panama|America/Coral_Harbour", "America/Panama|America/Jamaica", "America/Panama|EST", "America/Panama|Jamaica", "America/Phoenix|America/Creston", "America/Phoenix|America/Dawson_Creek", "America/Phoenix|America/Hermosillo", "America/Phoenix|MST", "America/Phoenix|US/Arizona", "America/Rio_Branco|America/Eirunepe", "America/Rio_Branco|America/Porto_Acre", "America/Rio_Branco|Brazil/Acre", "America/Santiago|Chile/Continental", "America/Santo_Domingo|America/Anguilla", "America/Santo_Domingo|America/Antigua", "America/Santo_Domingo|America/Aruba", "America/Santo_Domingo|America/Barbados", "America/Santo_Domingo|America/Blanc-Sablon", "America/Santo_Domingo|America/Curacao", "America/Santo_Domingo|America/Dominica", "America/Santo_Domingo|America/Grenada", "America/Santo_Domingo|America/Guadeloupe", "America/Santo_Domingo|America/Kralendijk", "America/Santo_Domingo|America/Lower_Princes", "America/Santo_Domingo|America/Marigot", "America/Santo_Domingo|America/Martinique", "America/Santo_Domingo|America/Montserrat", "America/Santo_Domingo|America/Port_of_Spain", "America/Santo_Domingo|America/Puerto_Rico", "America/Santo_Domingo|America/St_Barthelemy", "America/Santo_Domingo|America/St_Kitts", "America/Santo_Domingo|America/St_Lucia", "America/Santo_Domingo|America/St_Thomas", "America/Santo_Domingo|America/St_Vincent", "America/Santo_Domingo|America/Tortola", "America/Santo_Domingo|America/Virgin", "America/Sao_Paulo|Brazil/East", "America/St_Johns|Canada/Newfoundland", "Antarctica/Palmer|America/Punta_Arenas", "Asia/Baghdad|Antarctica/Syowa", "Asia/Baghdad|Asia/Aden", "Asia/Baghdad|Asia/Bahrain", "Asia/Baghdad|Asia/Kuwait", "Asia/Baghdad|Asia/Qatar", "Asia/Baghdad|Asia/Riyadh", "Asia/Baghdad|Etc/GMT-3", "Asia/Baghdad|Europe/Minsk", "Asia/Bangkok|Asia/Ho_Chi_Minh", "Asia/Bangkok|Asia/Novokuznetsk", "Asia/Bangkok|Asia/Phnom_Penh", "Asia/Bangkok|Asia/Saigon", "Asia/Bangkok|Asia/Vientiane", "Asia/Bangkok|Etc/GMT-7", "Asia/Bangkok|Indian/Christmas", "Asia/Dhaka|Antarctica/Vostok", "Asia/Dhaka|Asia/Almaty", "Asia/Dhaka|Asia/Bishkek", "Asia/Dhaka|Asia/Dacca", "Asia/Dhaka|Asia/Kashgar", "Asia/Dhaka|Asia/Qyzylorda", "Asia/Dhaka|Asia/Thimbu", "Asia/Dhaka|Asia/Thimphu", "Asia/Dhaka|Asia/Urumqi", "Asia/Dhaka|Etc/GMT-6", "Asia/Dhaka|Indian/Chagos", "Asia/Dili|Etc/GMT-9", "Asia/Dili|Pacific/Palau", "Asia/Dubai|Asia/Muscat", "Asia/Dubai|Asia/Tbilisi", "Asia/Dubai|Asia/Yerevan", "Asia/Dubai|Etc/GMT-4", "Asia/Dubai|Europe/Samara", "Asia/Dubai|Indian/Mahe", "Asia/Dubai|Indian/Mauritius", "Asia/Dubai|Indian/Reunion", "Asia/Gaza|Asia/Hebron", "Asia/Hong_Kong|Hongkong", "Asia/Jakarta|Asia/Pontianak", "Asia/Jerusalem|Asia/Tel_Aviv", "Asia/Jerusalem|Israel", "Asia/Kamchatka|Asia/Anadyr", "Asia/Kamchatka|Etc/GMT-12", "Asia/Kamchatka|Kwajalein", "Asia/Kamchatka|Pacific/Funafuti", "Asia/Kamchatka|Pacific/Kwajalein", "Asia/Kamchatka|Pacific/Majuro", "Asia/Kamchatka|Pacific/Nauru", "Asia/Kamchatka|Pacific/Tarawa", "Asia/Kamchatka|Pacific/Wake", "Asia/Kamchatka|Pacific/Wallis", "Asia/Kathmandu|Asia/Katmandu", "Asia/Kolkata|Asia/Calcutta", "Asia/Makassar|Asia/Ujung_Pandang", "Asia/Manila|Asia/Brunei", "Asia/Manila|Asia/Kuala_Lumpur", "Asia/Manila|Asia/Kuching", "Asia/Manila|Asia/Singapore", "Asia/Manila|Etc/GMT-8", "Asia/Manila|Singapore", "Asia/Rangoon|Asia/Yangon", "Asia/Rangoon|Indian/Cocos", "Asia/Seoul|ROK", "Asia/Shanghai|Asia/Chongqing", "Asia/Shanghai|Asia/Chungking", "Asia/Shanghai|Asia/Harbin", "Asia/Shanghai|Asia/Macao", "Asia/Shanghai|Asia/Macau", "Asia/Shanghai|Asia/Taipei", "Asia/Shanghai|PRC", "Asia/Shanghai|ROC", "Asia/Tashkent|Antarctica/Mawson", "Asia/Tashkent|Asia/Aqtau", "Asia/Tashkent|Asia/Aqtobe", "Asia/Tashkent|Asia/Ashgabat", "Asia/Tashkent|Asia/Ashkhabad", "Asia/Tashkent|Asia/Atyrau", "Asia/Tashkent|Asia/Dushanbe", "Asia/Tashkent|Asia/Oral", "Asia/Tashkent|Asia/Samarkand", "Asia/Tashkent|Etc/GMT-5", "Asia/Tashkent|Indian/Kerguelen", "Asia/Tashkent|Indian/Maldives", "Asia/Tehran|Iran", "Asia/Tokyo|Japan", "Asia/Ulaanbaatar|Asia/Choibalsan", "Asia/Ulaanbaatar|Asia/Ulan_Bator", "Asia/Vladivostok|Asia/Ust-Nera", "Asia/Yakutsk|Asia/Khandyga", "Atlantic/Azores|America/Scoresbysund", "Atlantic/Cape_Verde|Etc/GMT+1", "Australia/Adelaide|Australia/Broken_Hill", "Australia/Adelaide|Australia/South", "Australia/Adelaide|Australia/Yancowinna", "Australia/Brisbane|Australia/Lindeman", "Australia/Brisbane|Australia/Queensland", "Australia/Darwin|Australia/North", "Australia/Lord_Howe|Australia/LHI", "Australia/Perth|Australia/West", "Australia/Sydney|Australia/ACT", "Australia/Sydney|Australia/Canberra", "Australia/Sydney|Australia/Currie", "Australia/Sydney|Australia/Hobart", "Australia/Sydney|Australia/Melbourne", "Australia/Sydney|Australia/NSW", "Australia/Sydney|Australia/Tasmania", "Australia/Sydney|Australia/Victoria", "Etc/UCT|UCT", "Etc/UTC|Etc/Universal", "Etc/UTC|Etc/Zulu", "Etc/UTC|UTC", "Etc/UTC|Universal", "Etc/UTC|Zulu", "Europe/Astrakhan|Europe/Ulyanovsk", "Europe/Athens|Asia/Nicosia", "Europe/Athens|EET", "Europe/Athens|Europe/Bucharest", "Europe/Athens|Europe/Helsinki", "Europe/Athens|Europe/Kiev", "Europe/Athens|Europe/Mariehamn", "Europe/Athens|Europe/Nicosia", "Europe/Athens|Europe/Riga", "Europe/Athens|Europe/Sofia", "Europe/Athens|Europe/Tallinn", "Europe/Athens|Europe/Uzhgorod", "Europe/Athens|Europe/Vilnius", "Europe/Athens|Europe/Zaporozhye", "Europe/Chisinau|Europe/Tiraspol", "Europe/Dublin|Eire", "Europe/Istanbul|Asia/Istanbul", "Europe/Istanbul|Turkey", "Europe/Lisbon|Atlantic/Canary", "Europe/Lisbon|Atlantic/Faeroe", "Europe/Lisbon|Atlantic/Faroe", "Europe/Lisbon|Atlantic/Madeira", "Europe/Lisbon|Portugal", "Europe/Lisbon|WET", "Europe/London|Europe/Belfast", "Europe/London|Europe/Guernsey", "Europe/London|Europe/Isle_of_Man", "Europe/London|Europe/Jersey", "Europe/London|GB", "Europe/London|GB-Eire", "Europe/Moscow|W-SU", "Europe/Paris|Africa/Ceuta", "Europe/Paris|Arctic/Longyearbyen", "Europe/Paris|Atlantic/Jan_Mayen", "Europe/Paris|CET", "Europe/Paris|Europe/Amsterdam", "Europe/Paris|Europe/Andorra", "Europe/Paris|Europe/Belgrade", "Europe/Paris|Europe/Berlin", "Europe/Paris|Europe/Bratislava", "Europe/Paris|Europe/Brussels", "Europe/Paris|Europe/Budapest", "Europe/Paris|Europe/Busingen", "Europe/Paris|Europe/Copenhagen", "Europe/Paris|Europe/Gibraltar", "Europe/Paris|Europe/Ljubljana", "Europe/Paris|Europe/Luxembourg", "Europe/Paris|Europe/Madrid", "Europe/Paris|Europe/Malta", "Europe/Paris|Europe/Monaco", "Europe/Paris|Europe/Oslo", "Europe/Paris|Europe/Podgorica", "Europe/Paris|Europe/Prague", "Europe/Paris|Europe/Rome", "Europe/Paris|Europe/San_Marino", "Europe/Paris|Europe/Sarajevo", "Europe/Paris|Europe/Skopje", "Europe/Paris|Europe/Stockholm", "Europe/Paris|Europe/Tirane", "Europe/Paris|Europe/Vaduz", "Europe/Paris|Europe/Vatican", "Europe/Paris|Europe/Vienna", "Europe/Paris|Europe/Warsaw", "Europe/Paris|Europe/Zagreb", "Europe/Paris|Europe/Zurich", "Europe/Paris|Poland", "Europe/Volgograd|Europe/Kirov", "Pacific/Auckland|Antarctica/McMurdo", "Pacific/Auckland|Antarctica/South_Pole", "Pacific/Auckland|NZ", "Pacific/Chatham|NZ-CHAT", "Pacific/Easter|Chile/EasterIsland", "Pacific/Fakaofo|Etc/GMT-13", "Pacific/Fakaofo|Pacific/Enderbury", "Pacific/Galapagos|Etc/GMT+6", "Pacific/Gambier|Etc/GMT+9", "Pacific/Guadalcanal|Antarctica/Macquarie", "Pacific/Guadalcanal|Etc/GMT-11", "Pacific/Guadalcanal|Pacific/Efate", "Pacific/Guadalcanal|Pacific/Kosrae", "Pacific/Guadalcanal|Pacific/Noumea", "Pacific/Guadalcanal|Pacific/Pohnpei", "Pacific/Guadalcanal|Pacific/Ponape", "Pacific/Guam|Pacific/Saipan", "Pacific/Honolulu|HST", "Pacific/Honolulu|Pacific/Johnston", "Pacific/Honolulu|US/Hawaii", "Pacific/Kiritimati|Etc/GMT-14", "Pacific/Niue|Etc/GMT+11", "Pacific/Pago_Pago|Pacific/Midway", "Pacific/Pago_Pago|Pacific/Samoa", "Pacific/Pago_Pago|US/Samoa", "Pacific/Pitcairn|Etc/GMT+8", "Pacific/Port_Moresby|Antarctica/DumontDUrville", "Pacific/Port_Moresby|Etc/GMT-10", "Pacific/Port_Moresby|Pacific/Chuuk", "Pacific/Port_Moresby|Pacific/Truk", "Pacific/Port_Moresby|Pacific/Yap", "Pacific/Tahiti|Etc/GMT+10", "Pacific/Tahiti|Pacific/Rarotonga"]
  }), e
}), ((_gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window)._gsQueue || (_gsScope._gsQueue = [])).push(function() {
    "use strict";
    var e, t, i, n, r, s, a, o, l, c, u, d, h, p, f, m;
    _gsScope._gsDefine("TweenMax", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(e, t, i) {
        var n = function(e) {
            var t, i = [],
              n = e.length;
            for (t = 0; t !== n; i.push(e[t++]));
            return i
          },
          r = function(e, t, i) {
            var n, r, s = e.cycle;
            for (n in s) r = s[n], e[n] = "function" == typeof r ? r.call(t[i], i) : r[i % r.length];
            delete e.cycle
          },
          s = function(e, t, n) {
            i.call(this, e, t, n), this._cycle = 0, this._yoyo = !0 === this.vars.yoyo, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._dirty = !0, this.render = s.prototype.render
          },
          a = 1e-10,
          o = i._internals,
          l = o.isSelector,
          c = o.isArray,
          u = s.prototype = i.to({}, .1, {}),
          d = [];
        s.version = "1.18.5", u.constructor = s, u.kill()._gc = !1, s.killTweensOf = s.killDelayedCallsTo = i.killTweensOf, s.getTweensOf = i.getTweensOf, s.lagSmoothing = i.lagSmoothing, s.ticker = i.ticker, s.render = i.render, u.invalidate = function() {
          return this._yoyo = !0 === this.vars.yoyo, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), i.prototype.invalidate.call(this)
        }, u.updateTo = function(e, t) {
          var n, r = this.ratio,
            s = this.vars.immediateRender || e.immediateRender;
          for (n in t && this._startTime < this._timeline._time && (this._startTime = this._timeline._time, this._uncache(!1), this._gc ? this._enabled(!0, !1) : this._timeline.insert(this, this._startTime - this._delay)), e) this.vars[n] = e[n];
          if (this._initted || s)
            if (t) this._initted = !1, s && this.render(0, !0, !0);
            else if (this._gc && this._enabled(!0, !1), this._notifyPluginsOfEnabled && this._firstPT && i._onPluginEvent("_onDisable", this), this._time / this._duration > .998) {
            var a = this._totalTime;
            this.render(0, !0, !1), this._initted = !1, this.render(a, !0, !1)
          } else if (this._initted = !1, this._init(), this._time > 0 || s)
            for (var o, l = 1 / (1 - r), c = this._firstPT; c;) o = c.s + c.c, c.c *= l, c.s = o - c.c, c = c._next;
          return this
        }, u.render = function(e, t, i) {
          this._initted || 0 === this._duration && this.vars.repeat && this.invalidate();
          var n, r, s, l, c, u, d, h, p = this._dirty ? this.totalDuration() : this._totalDuration,
            f = this._time,
            m = this._totalTime,
            g = this._cycle,
            y = this._duration,
            v = this._rawPrevTime;
          if (e >= p - 1e-7 ? (this._totalTime = p, this._cycle = this._repeat, this._yoyo && 0 != (1 & this._cycle) ? (this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0) : (this._time = y, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1), this._reversed || (n = !0, r = "onComplete", i = i || this._timeline.autoRemoveChildren), 0 === y && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (e = 0), (0 > v || 0 >= e && e >= -1e-7 || v === a && "isPause" !== this.data) && v !== e && (i = !0, v > a && (r = "onReverseComplete")), this._rawPrevTime = h = !t || e || v === e ? e : a)) : 1e-7 > e ? (this._totalTime = this._time = this._cycle = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== m || 0 === y && v > 0) && (r = "onReverseComplete", n = this._reversed), 0 > e && (this._active = !1, 0 === y && (this._initted || !this.vars.lazy || i) && (v >= 0 && (i = !0), this._rawPrevTime = h = !t || e || v === e ? e : a)), this._initted || (i = !0)) : (this._totalTime = this._time = e, 0 !== this._repeat && (l = y + this._repeatDelay, this._cycle = this._totalTime / l >> 0, 0 !== this._cycle && this._cycle === this._totalTime / l && e >= m && this._cycle--, this._time = this._totalTime - this._cycle * l, this._yoyo && 0 != (1 & this._cycle) && (this._time = y - this._time), this._time > y ? this._time = y : this._time < 0 && (this._time = 0)), this._easeType ? (c = this._time / y, (1 === (u = this._easeType) || 3 === u && c >= .5) && (c = 1 - c), 3 === u && (c *= 2), 1 === (d = this._easePower) ? c *= c : 2 === d ? c *= c * c : 3 === d ? c *= c * c * c : 4 === d && (c *= c * c * c * c), 1 === u ? this.ratio = 1 - c : 2 === u ? this.ratio = c : this._time / y < .5 ? this.ratio = c / 2 : this.ratio = 1 - c / 2) : this.ratio = this._ease.getRatio(this._time / y)), f !== this._time || i || g !== this._cycle) {
            if (!this._initted) {
              if (this._init(), !this._initted || this._gc) return;
              if (!i && this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration)) return this._time = f, this._totalTime = m, this._rawPrevTime = v, this._cycle = g, o.lazyTweens.push(this), void(this._lazy = [e, t]);
              this._time && !n ? this.ratio = this._ease.getRatio(this._time / y) : n && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
            }
            for (!1 !== this._lazy && (this._lazy = !1), this._active || !this._paused && this._time !== f && e >= 0 && (this._active = !0), 0 === m && (2 === this._initted && e > 0 && this._init(), this._startAt && (e >= 0 ? this._startAt.render(e, t, i) : r || (r = "_dummyGS")), this.vars.onStart && (0 !== this._totalTime || 0 === y) && (t || this._callback("onStart"))), s = this._firstPT; s;) s.f ? s.t[s.p](s.c * this.ratio + s.s) : s.t[s.p] = s.c * this.ratio + s.s, s = s._next;
            this._onUpdate && (0 > e && this._startAt && this._startTime && this._startAt.render(e, t, i), t || (this._totalTime !== m || r) && this._callback("onUpdate")), this._cycle !== g && (t || this._gc || this.vars.onRepeat && this._callback("onRepeat")), r && (!this._gc || i) && (0 > e && this._startAt && !this._onUpdate && this._startTime && this._startAt.render(e, t, i), n && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !t && this.vars[r] && this._callback(r), 0 === y && this._rawPrevTime === a && h !== a && (this._rawPrevTime = 0))
          } else m !== this._totalTime && this._onUpdate && (t || this._callback("onUpdate"))
        }, s.to = function(e, t, i) {
          return new s(e, t, i)
        }, s.from = function(e, t, i) {
          return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new s(e, t, i)
        }, s.fromTo = function(e, t, i, n) {
          return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, new s(e, t, n)
        }, s.staggerTo = s.allTo = function(e, t, a, o, u, h, p) {
          o = o || 0;
          var f, m, g, y, v = 0,
            _ = [],
            b = function() {
              a.onComplete && a.onComplete.apply(a.onCompleteScope || this, arguments), u.apply(p || a.callbackScope || this, h || d)
            },
            w = a.cycle,
            T = a.startAt && a.startAt.cycle;
          for (c(e) || ("string" == typeof e && (e = i.selector(e) || e), l(e) && (e = n(e))), e = e || [], 0 > o && ((e = n(e)).reverse(), o *= -1), f = e.length - 1, g = 0; f >= g; g++) {
            for (y in m = {}, a) m[y] = a[y];
            if (w && (r(m, e, g), null != m.duration && (t = m.duration, delete m.duration)), T) {
              for (y in T = m.startAt = {}, a.startAt) T[y] = a.startAt[y];
              r(m.startAt, e, g)
            }
            m.delay = v + (m.delay || 0), g === f && u && (m.onComplete = b), _[g] = new s(e[g], t, m), v += o
          }
          return _
        }, s.staggerFrom = s.allFrom = function(e, t, i, n, r, a, o) {
          return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, s.staggerTo(e, t, i, n, r, a, o)
        }, s.staggerFromTo = s.allFromTo = function(e, t, i, n, r, a, o, l) {
          return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, s.staggerTo(e, t, n, r, a, o, l)
        }, s.delayedCall = function(e, t, i, n, r) {
          return new s(t, 0, {
            delay: e,
            onComplete: t,
            onCompleteParams: i,
            callbackScope: n,
            onReverseComplete: t,
            onReverseCompleteParams: i,
            immediateRender: !1,
            useFrames: r,
            overwrite: 0
          })
        }, s.set = function(e, t) {
          return new s(e, 0, t)
        }, s.isTweening = function(e) {
          return i.getTweensOf(e, !0).length > 0
        };
        var h = function(e, t) {
            for (var n = [], r = 0, s = e._first; s;) s instanceof i ? n[r++] = s : (t && (n[r++] = s), r = (n = n.concat(h(s, t))).length), s = s._next;
            return n
          },
          p = s.getAllTweens = function(t) {
            return h(e._rootTimeline, t).concat(h(e._rootFramesTimeline, t))
          };
        s.killAll = function(e, i, n, r) {
          null == i && (i = !0), null == n && (n = !0);
          var s, a, o, l = p(0 != r),
            c = l.length,
            u = i && n && r;
          for (o = 0; c > o; o++) a = l[o], (u || a instanceof t || (s = a.target === a.vars.onComplete) && n || i && !s) && (e ? a.totalTime(a._reversed ? 0 : a.totalDuration()) : a._enabled(!1, !1))
        }, s.killChildTweensOf = function(e, t) {
          if (null != e) {
            var r, a, u, d, h, p = o.tweenLookup;
            if ("string" == typeof e && (e = i.selector(e) || e), l(e) && (e = n(e)), c(e))
              for (d = e.length; --d > -1;) s.killChildTweensOf(e[d], t);
            else {
              for (u in r = [], p)
                for (a = p[u].target.parentNode; a;) a === e && (r = r.concat(p[u].tweens)), a = a.parentNode;
              for (h = r.length, d = 0; h > d; d++) t && r[d].totalTime(r[d].totalDuration()), r[d]._enabled(!1, !1)
            }
          }
        };
        var f = function(e, i, n, r) {
          i = !1 !== i, n = !1 !== n;
          for (var s, a, o = p(r = !1 !== r), l = i && n && r, c = o.length; --c > -1;) a = o[c], (l || a instanceof t || (s = a.target === a.vars.onComplete) && n || i && !s) && a.paused(e)
        };
        return s.pauseAll = function(e, t, i) {
          f(!0, e, t, i)
        }, s.resumeAll = function(e, t, i) {
          f(!1, e, t, i)
        }, s.globalTimeScale = function(t) {
          var n = e._rootTimeline,
            r = i.ticker.time;
          return arguments.length ? (t = t || a, n._startTime = r - (r - n._startTime) * n._timeScale / t, n = e._rootFramesTimeline, r = i.ticker.frame, n._startTime = r - (r - n._startTime) * n._timeScale / t, n._timeScale = e._rootTimeline._timeScale = t, t) : n._timeScale
        }, u.progress = function(e, t) {
          return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 != (1 & this._cycle) ? 1 - e : e) + this._cycle * (this._duration + this._repeatDelay), t) : this._time / this.duration()
        }, u.totalProgress = function(e, t) {
          return arguments.length ? this.totalTime(this.totalDuration() * e, t) : this._totalTime / this.totalDuration()
        }, u.time = function(e, t) {
          return arguments.length ? (this._dirty && this.totalDuration(), e > this._duration && (e = this._duration), this._yoyo && 0 != (1 & this._cycle) ? e = this._duration - e + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (e += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(e, t)) : this._time
        }, u.duration = function(t) {
          return arguments.length ? e.prototype.duration.call(this, t) : this._duration
        }, u.totalDuration = function(e) {
          return arguments.length ? -1 === this._repeat ? this : this.duration((e - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat, this._dirty = !1), this._totalDuration)
        }, u.repeat = function(e) {
          return arguments.length ? (this._repeat = e, this._uncache(!0)) : this._repeat
        }, u.repeatDelay = function(e) {
          return arguments.length ? (this._repeatDelay = e, this._uncache(!0)) : this._repeatDelay
        }, u.yoyo = function(e) {
          return arguments.length ? (this._yoyo = e, this) : this._yoyo
        }, s
      }, !0), _gsScope._gsDefine("TimelineLite", ["core.Animation", "core.SimpleTimeline", "TweenLite"], function(e, t, i) {
        var n = function(e) {
            t.call(this, e), this._labels = {}, this.autoRemoveChildren = !0 === this.vars.autoRemoveChildren, this.smoothChildTiming = !0 === this.vars.smoothChildTiming, this._sortChildren = !0, this._onUpdate = this.vars.onUpdate;
            var i, n, r = this.vars;
            for (n in r) i = r[n], l(i) && -1 !== i.join("").indexOf("{self}") && (r[n] = this._swapSelfInParams(i));
            l(r.tweens) && this.add(r.tweens, 0, r.align, r.stagger)
          },
          r = 1e-10,
          s = i._internals,
          a = n._internals = {},
          o = s.isSelector,
          l = s.isArray,
          c = s.lazyTweens,
          u = s.lazyRender,
          d = _gsScope._gsDefine.globals,
          h = function(e) {
            var t, i = {};
            for (t in e) i[t] = e[t];
            return i
          },
          p = function(e, t, i) {
            var n, r, s = e.cycle;
            for (n in s) r = s[n], e[n] = "function" == typeof r ? r.call(t[i], i) : r[i % r.length];
            delete e.cycle
          },
          f = a.pauseCallback = function() {},
          m = function(e) {
            var t, i = [],
              n = e.length;
            for (t = 0; t !== n; i.push(e[t++]));
            return i
          },
          g = n.prototype = new t;
        return n.version = "1.18.5", g.constructor = n, g.kill()._gc = g._forcingPlayhead = g._hasPause = !1, g.to = function(e, t, n, r) {
          var s = n.repeat && d.TweenMax || i;
          return t ? this.add(new s(e, t, n), r) : this.set(e, n, r)
        }, g.from = function(e, t, n, r) {
          return this.add((n.repeat && d.TweenMax || i).from(e, t, n), r)
        }, g.fromTo = function(e, t, n, r, s) {
          var a = r.repeat && d.TweenMax || i;
          return t ? this.add(a.fromTo(e, t, n, r), s) : this.set(e, r, s)
        }, g.staggerTo = function(e, t, r, s, a, l, c, u) {
          var d, f, g = new n({
              onComplete: l,
              onCompleteParams: c,
              callbackScope: u,
              smoothChildTiming: this.smoothChildTiming
            }),
            y = r.cycle;
          for ("string" == typeof e && (e = i.selector(e) || e), o(e = e || []) && (e = m(e)), 0 > (s = s || 0) && ((e = m(e)).reverse(), s *= -1), f = 0; f < e.length; f++)(d = h(r)).startAt && (d.startAt = h(d.startAt), d.startAt.cycle && p(d.startAt, e, f)), y && (p(d, e, f), null != d.duration && (t = d.duration, delete d.duration)), g.to(e[f], t, d, f * s);
          return this.add(g, a)
        }, g.staggerFrom = function(e, t, i, n, r, s, a, o) {
          return i.immediateRender = 0 != i.immediateRender, i.runBackwards = !0, this.staggerTo(e, t, i, n, r, s, a, o)
        }, g.staggerFromTo = function(e, t, i, n, r, s, a, o, l) {
          return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, this.staggerTo(e, t, n, r, s, a, o, l)
        }, g.call = function(e, t, n, r) {
          return this.add(i.delayedCall(0, e, t, n), r)
        }, g.set = function(e, t, n) {
          return n = this._parseTimeOrLabel(n, 0, !0), null == t.immediateRender && (t.immediateRender = n === this._time && !this._paused), this.add(new i(e, 0, t), n)
        }, n.exportRoot = function(e, t) {
          null == (e = e || {}).smoothChildTiming && (e.smoothChildTiming = !0);
          var r, s, a = new n(e),
            o = a._timeline;
          for (null == t && (t = !0), o._remove(a, !0), a._startTime = 0, a._rawPrevTime = a._time = a._totalTime = o._time, r = o._first; r;) s = r._next, t && r instanceof i && r.target === r.vars.onComplete || a.add(r, r._startTime - r._delay), r = s;
          return o.add(a, 0), a
        }, g.add = function(r, s, a, o) {
          var c, u, d, h, p, f;
          if ("number" != typeof s && (s = this._parseTimeOrLabel(s, 0, !0, r)), !(r instanceof e)) {
            if (r instanceof Array || r && r.push && l(r)) {
              for (a = a || "normal", o = o || 0, c = s, u = r.length, d = 0; u > d; d++) l(h = r[d]) && (h = new n({
                tweens: h
              })), this.add(h, c), "string" != typeof h && "function" != typeof h && ("sequence" === a ? c = h._startTime + h.totalDuration() / h._timeScale : "start" === a && (h._startTime -= h.delay())), c += o;
              return this._uncache(!0)
            }
            if ("string" == typeof r) return this.addLabel(r, s);
            if ("function" != typeof r) throw "Cannot add " + r + " into the timeline; it is not a tween, timeline, function, or string.";
            r = i.delayedCall(0, r)
          }
          if (t.prototype.add.call(this, r, s), (this._gc || this._time === this._duration) && !this._paused && this._duration < this.duration())
            for (f = (p = this).rawTime() > r._startTime; p._timeline;) f && p._timeline.smoothChildTiming ? p.totalTime(p._totalTime, !0) : p._gc && p._enabled(!0, !1), p = p._timeline;
          return this
        }, g.remove = function(t) {
          if (t instanceof e) {
            this._remove(t, !1);
            var i = t._timeline = t.vars.useFrames ? e._rootFramesTimeline : e._rootTimeline;
            return t._startTime = (t._paused ? t._pauseTime : i._time) - (t._reversed ? t.totalDuration() - t._totalTime : t._totalTime) / t._timeScale, this
          }
          if (t instanceof Array || t && t.push && l(t)) {
            for (var n = t.length; --n > -1;) this.remove(t[n]);
            return this
          }
          return "string" == typeof t ? this.removeLabel(t) : this.kill(null, t)
        }, g._remove = function(e, i) {
          t.prototype._remove.call(this, e, i);
          var n = this._last;
          return n ? this._time > n._startTime + n._totalDuration / n._timeScale && (this._time = this.duration(), this._totalTime = this._totalDuration) : this._time = this._totalTime = this._duration = this._totalDuration = 0, this
        }, g.append = function(e, t) {
          return this.add(e, this._parseTimeOrLabel(null, t, !0, e))
        }, g.insert = g.insertMultiple = function(e, t, i, n) {
          return this.add(e, t || 0, i, n)
        }, g.appendMultiple = function(e, t, i, n) {
          return this.add(e, this._parseTimeOrLabel(null, t, !0, e), i, n)
        }, g.addLabel = function(e, t) {
          return this._labels[e] = this._parseTimeOrLabel(t), this
        }, g.addPause = function(e, t, n, r) {
          var s = i.delayedCall(0, f, n, r || this);
          return s.vars.onComplete = s.vars.onReverseComplete = t, s.data = "isPause", this._hasPause = !0, this.add(s, e)
        }, g.removeLabel = function(e) {
          return delete this._labels[e], this
        }, g.getLabelTime = function(e) {
          return null != this._labels[e] ? this._labels[e] : -1
        }, g._parseTimeOrLabel = function(t, i, n, r) {
          var s;
          if (r instanceof e && r.timeline === this) this.remove(r);
          else if (r && (r instanceof Array || r.push && l(r)))
            for (s = r.length; --s > -1;) r[s] instanceof e && r[s].timeline === this && this.remove(r[s]);
          if ("string" == typeof i) return this._parseTimeOrLabel(i, n && "number" == typeof t && null == this._labels[i] ? t - this.duration() : 0, n);
          if (i = i || 0, "string" != typeof t || !isNaN(t) && null == this._labels[t]) null == t && (t = this.duration());
          else {
            if (-1 === (s = t.indexOf("="))) return null == this._labels[t] ? n ? this._labels[t] = this.duration() + i : i : this._labels[t] + i;
            i = parseInt(t.charAt(s - 1) + "1", 10) * Number(t.substr(s + 1)), t = s > 1 ? this._parseTimeOrLabel(t.substr(0, s - 1), 0, n) : this.duration()
          }
          return Number(t) + i
        }, g.seek = function(e, t) {
          return this.totalTime("number" == typeof e ? e : this._parseTimeOrLabel(e), !1 !== t)
        }, g.stop = function() {
          return this.paused(!0)
        }, g.gotoAndPlay = function(e, t) {
          return this.play(e, t)
        }, g.gotoAndStop = function(e, t) {
          return this.pause(e, t)
        }, g.render = function(e, t, i) {
          this._gc && this._enabled(!0, !1);
          var n, s, a, o, l, d, h, p = this._dirty ? this.totalDuration() : this._totalDuration,
            f = this._time,
            m = this._startTime,
            g = this._timeScale,
            y = this._paused;
          if (e >= p - 1e-7) this._totalTime = this._time = p, this._reversed || this._hasPausedChild() || (s = !0, o = "onComplete", l = !!this._timeline.autoRemoveChildren, 0 === this._duration && (0 >= e && e >= -1e-7 || this._rawPrevTime < 0 || this._rawPrevTime === r) && this._rawPrevTime !== e && this._first && (l = !0, this._rawPrevTime > r && (o = "onReverseComplete"))), this._rawPrevTime = this._duration || !t || e || this._rawPrevTime === e ? e : r, e = p + 1e-4;
          else if (1e-7 > e)
            if (this._totalTime = this._time = 0, (0 !== f || 0 === this._duration && this._rawPrevTime !== r && (this._rawPrevTime > 0 || 0 > e && this._rawPrevTime >= 0)) && (o = "onReverseComplete", s = this._reversed), 0 > e) this._active = !1, this._timeline.autoRemoveChildren && this._reversed ? (l = s = !0, o = "onReverseComplete") : this._rawPrevTime >= 0 && this._first && (l = !0), this._rawPrevTime = e;
            else {
              if (this._rawPrevTime = this._duration || !t || e || this._rawPrevTime === e ? e : r, 0 === e && s)
                for (n = this._first; n && 0 === n._startTime;) n._duration || (s = !1), n = n._next;
              e = 0, this._initted || (l = !0)
            }
          else {
            if (this._hasPause && !this._forcingPlayhead && !t) {
              if (e >= f)
                for (n = this._first; n && n._startTime <= e && !d;) n._duration || "isPause" !== n.data || n.ratio || 0 === n._startTime && 0 === this._rawPrevTime || (d = n), n = n._next;
              else
                for (n = this._last; n && n._startTime >= e && !d;) n._duration || "isPause" === n.data && n._rawPrevTime > 0 && (d = n), n = n._prev;
              d && (this._time = e = d._startTime, this._totalTime = e + this._cycle * (this._totalDuration + this._repeatDelay))
            }
            this._totalTime = this._time = this._rawPrevTime = e
          }
          if (this._time !== f && this._first || i || l || d) {
            if (this._initted || (this._initted = !0), this._active || !this._paused && this._time !== f && e > 0 && (this._active = !0), 0 === f && this.vars.onStart && (0 === this._time && this._duration || t || this._callback("onStart")), (h = this._time) >= f)
              for (n = this._first; n && (a = n._next, h === this._time && (!this._paused || y));)(n._active || n._startTime <= h && !n._paused && !n._gc) && (d === n && this.pause(), n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (e - n._startTime) * n._timeScale, t, i) : n.render((e - n._startTime) * n._timeScale, t, i)), n = a;
            else
              for (n = this._last; n && (a = n._prev, h === this._time && (!this._paused || y));) {
                if (n._active || n._startTime <= f && !n._paused && !n._gc) {
                  if (d === n) {
                    for (d = n._prev; d && d.endTime() > this._time;) d.render(d._reversed ? d.totalDuration() - (e - d._startTime) * d._timeScale : (e - d._startTime) * d._timeScale, t, i), d = d._prev;
                    d = null, this.pause()
                  }
                  n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (e - n._startTime) * n._timeScale, t, i) : n.render((e - n._startTime) * n._timeScale, t, i)
                }
                n = a
              }
            this._onUpdate && (t || (c.length && u(), this._callback("onUpdate"))), o && (this._gc || (m === this._startTime || g !== this._timeScale) && (0 === this._time || p >= this.totalDuration()) && (s && (c.length && u(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !t && this.vars[o] && this._callback(o)))
          }
        }, g._hasPausedChild = function() {
          for (var e = this._first; e;) {
            if (e._paused || e instanceof n && e._hasPausedChild()) return !0;
            e = e._next
          }
          return !1
        }, g.getChildren = function(e, t, n, r) {
          r = r || -9999999999;
          for (var s = [], a = this._first, o = 0; a;) a._startTime < r || (a instanceof i ? !1 !== t && (s[o++] = a) : (!1 !== n && (s[o++] = a), !1 !== e && (o = (s = s.concat(a.getChildren(!0, t, n))).length))), a = a._next;
          return s
        }, g.getTweensOf = function(e, t) {
          var n, r, s = this._gc,
            a = [],
            o = 0;
          for (s && this._enabled(!0, !0), r = (n = i.getTweensOf(e)).length; --r > -1;)(n[r].timeline === this || t && this._contains(n[r])) && (a[o++] = n[r]);
          return s && this._enabled(!1, !0), a
        }, g.recent = function() {
          return this._recent
        }, g._contains = function(e) {
          for (var t = e.timeline; t;) {
            if (t === this) return !0;
            t = t.timeline
          }
          return !1
        }, g.shiftChildren = function(e, t, i) {
          i = i || 0;
          for (var n, r = this._first, s = this._labels; r;) r._startTime >= i && (r._startTime += e), r = r._next;
          if (t)
            for (n in s) s[n] >= i && (s[n] += e);
          return this._uncache(!0)
        }, g._kill = function(e, t) {
          if (!e && !t) return this._enabled(!1, !1);
          for (var i = t ? this.getTweensOf(t) : this.getChildren(!0, !0, !1), n = i.length, r = !1; --n > -1;) i[n]._kill(e, t) && (r = !0);
          return r
        }, g.clear = function(e) {
          var t = this.getChildren(!1, !0, !0),
            i = t.length;
          for (this._time = this._totalTime = 0; --i > -1;) t[i]._enabled(!1, !1);
          return !1 !== e && (this._labels = {}), this._uncache(!0)
        }, g.invalidate = function() {
          for (var t = this._first; t;) t.invalidate(), t = t._next;
          return e.prototype.invalidate.call(this)
        }, g._enabled = function(e, i) {
          if (e === this._gc)
            for (var n = this._first; n;) n._enabled(e, !0), n = n._next;
          return t.prototype._enabled.call(this, e, i)
        }, g.totalTime = function(t, i, n) {
          this._forcingPlayhead = !0;
          var r = e.prototype.totalTime.apply(this, arguments);
          return this._forcingPlayhead = !1, r
        }, g.duration = function(e) {
          return arguments.length ? (0 !== this.duration() && 0 !== e && this.timeScale(this._duration / e), this) : (this._dirty && this.totalDuration(), this._duration)
        }, g.totalDuration = function(e) {
          if (!arguments.length) {
            if (this._dirty) {
              for (var t, i, n = 0, r = this._last, s = 999999999999; r;) t = r._prev, r._dirty && r.totalDuration(), r._startTime > s && this._sortChildren && !r._paused ? this.add(r, r._startTime - r._delay) : s = r._startTime, r._startTime < 0 && !r._paused && (n -= r._startTime, this._timeline.smoothChildTiming && (this._startTime += r._startTime / this._timeScale), this.shiftChildren(-r._startTime, !1, -9999999999), s = 0), (i = r._startTime + r._totalDuration / r._timeScale) > n && (n = i), r = t;
              this._duration = this._totalDuration = n, this._dirty = !1
            }
            return this._totalDuration
          }
          return e && this.totalDuration() ? this.timeScale(this._totalDuration / e) : this
        }, g.paused = function(t) {
          if (!t)
            for (var i = this._first, n = this._time; i;) i._startTime === n && "isPause" === i.data && (i._rawPrevTime = 0), i = i._next;
          return e.prototype.paused.apply(this, arguments)
        }, g.usesFrames = function() {
          for (var t = this._timeline; t._timeline;) t = t._timeline;
          return t === e._rootFramesTimeline
        }, g.rawTime = function() {
          return this._paused ? this._totalTime : (this._timeline.rawTime() - this._startTime) * this._timeScale
        }, n
      }, !0), _gsScope._gsDefine("TimelineMax", ["TimelineLite", "TweenLite", "easing.Ease"], function(e, t, i) {
        var n = function(t) {
            e.call(this, t), this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._cycle = 0, this._yoyo = !0 === this.vars.yoyo, this._dirty = !0
          },
          r = 1e-10,
          s = t._internals,
          a = s.lazyTweens,
          o = s.lazyRender,
          l = new i(null, null, 1, 0),
          c = n.prototype = new e;
        return c.constructor = n, c.kill()._gc = !1, n.version = "1.18.5", c.invalidate = function() {
          return this._yoyo = !0 === this.vars.yoyo, this._repeat = this.vars.repeat || 0, this._repeatDelay = this.vars.repeatDelay || 0, this._uncache(!0), e.prototype.invalidate.call(this)
        }, c.addCallback = function(e, i, n, r) {
          return this.add(t.delayedCall(0, e, n, r), i)
        }, c.removeCallback = function(e, t) {
          if (e)
            if (null == t) this._kill(null, e);
            else
              for (var i = this.getTweensOf(e, !1), n = i.length, r = this._parseTimeOrLabel(t); --n > -1;) i[n]._startTime === r && i[n]._enabled(!1, !1);
          return this
        }, c.removePause = function(t) {
          return this.removeCallback(e._internals.pauseCallback, t)
        }, c.tweenTo = function(e, i) {
          i = i || {};
          var n, r, s, a = {
            ease: l,
            useFrames: this.usesFrames(),
            immediateRender: !1
          };
          for (r in i) a[r] = i[r];
          return a.time = this._parseTimeOrLabel(e), n = Math.abs(Number(a.time) - this._time) / this._timeScale || .001, s = new t(this, n, a), a.onStart = function() {
            s.target.paused(!0), s.vars.time !== s.target.time() && n === s.duration() && s.duration(Math.abs(s.vars.time - s.target.time()) / s.target._timeScale), i.onStart && s._callback("onStart")
          }, s
        }, c.tweenFromTo = function(e, t, i) {
          i = i || {}, e = this._parseTimeOrLabel(e), i.startAt = {
            onComplete: this.seek,
            onCompleteParams: [e],
            callbackScope: this
          }, i.immediateRender = !1 !== i.immediateRender;
          var n = this.tweenTo(t, i);
          return n.duration(Math.abs(n.vars.time - e) / this._timeScale || .001)
        }, c.render = function(e, t, i) {
          this._gc && this._enabled(!0, !1);
          var n, s, l, c, u, d, h, p, f = this._dirty ? this.totalDuration() : this._totalDuration,
            m = this._duration,
            g = this._time,
            y = this._totalTime,
            v = this._startTime,
            _ = this._timeScale,
            b = this._rawPrevTime,
            w = this._paused,
            T = this._cycle;
          if (e >= f - 1e-7) this._locked || (this._totalTime = f, this._cycle = this._repeat), this._reversed || this._hasPausedChild() || (s = !0, c = "onComplete", u = !!this._timeline.autoRemoveChildren, 0 === this._duration && (0 >= e && e >= -1e-7 || 0 > b || b === r) && b !== e && this._first && (u = !0, b > r && (c = "onReverseComplete"))), this._rawPrevTime = this._duration || !t || e || this._rawPrevTime === e ? e : r, this._yoyo && 0 != (1 & this._cycle) ? this._time = e = 0 : (this._time = m, e = m + 1e-4);
          else if (1e-7 > e)
            if (this._locked || (this._totalTime = this._cycle = 0), this._time = 0, (0 !== g || 0 === m && b !== r && (b > 0 || 0 > e && b >= 0) && !this._locked) && (c = "onReverseComplete", s = this._reversed), 0 > e) this._active = !1, this._timeline.autoRemoveChildren && this._reversed ? (u = s = !0, c = "onReverseComplete") : b >= 0 && this._first && (u = !0), this._rawPrevTime = e;
            else {
              if (this._rawPrevTime = m || !t || e || this._rawPrevTime === e ? e : r, 0 === e && s)
                for (n = this._first; n && 0 === n._startTime;) n._duration || (s = !1), n = n._next;
              e = 0, this._initted || (u = !0)
            }
          else if (0 === m && 0 > b && (u = !0), this._time = this._rawPrevTime = e, this._locked || (this._totalTime = e, 0 !== this._repeat && (d = m + this._repeatDelay, this._cycle = this._totalTime / d >> 0, 0 !== this._cycle && this._cycle === this._totalTime / d && e >= y && this._cycle--, this._time = this._totalTime - this._cycle * d, this._yoyo && 0 != (1 & this._cycle) && (this._time = m - this._time), this._time > m ? (this._time = m, e = m + 1e-4) : this._time < 0 ? this._time = e = 0 : e = this._time)), this._hasPause && !this._forcingPlayhead && !t) {
            if ((e = this._time) >= g)
              for (n = this._first; n && n._startTime <= e && !h;) n._duration || "isPause" !== n.data || n.ratio || 0 === n._startTime && 0 === this._rawPrevTime || (h = n), n = n._next;
            else
              for (n = this._last; n && n._startTime >= e && !h;) n._duration || "isPause" === n.data && n._rawPrevTime > 0 && (h = n), n = n._prev;
            h && (this._time = e = h._startTime, this._totalTime = e + this._cycle * (this._totalDuration + this._repeatDelay))
          }
          if (this._cycle !== T && !this._locked) {
            var A = this._yoyo && 0 != (1 & T),
              k = A === (this._yoyo && 0 != (1 & this._cycle)),
              x = this._totalTime,
              S = this._cycle,
              C = this._rawPrevTime,
              E = this._time;
            if (this._totalTime = T * m, this._cycle < T ? A = !A : this._totalTime += m, this._time = g, this._rawPrevTime = 0 === m ? b - 1e-4 : b, this._cycle = T, this._locked = !0, g = A ? 0 : m, this.render(g, t, 0 === m), t || this._gc || this.vars.onRepeat && this._callback("onRepeat"), g !== this._time) return;
            if (k && (g = A ? m + 1e-4 : -1e-4, this.render(g, !0, !1)), this._locked = !1, this._paused && !w) return;
            this._time = E, this._totalTime = x, this._cycle = S, this._rawPrevTime = C
          }
          if (this._time !== g && this._first || i || u || h) {
            if (this._initted || (this._initted = !0), this._active || !this._paused && this._totalTime !== y && e > 0 && (this._active = !0), 0 === y && this.vars.onStart && (0 === this._totalTime && this._totalDuration || t || this._callback("onStart")), (p = this._time) >= g)
              for (n = this._first; n && (l = n._next, p === this._time && (!this._paused || w));)(n._active || n._startTime <= this._time && !n._paused && !n._gc) && (h === n && this.pause(), n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (e - n._startTime) * n._timeScale, t, i) : n.render((e - n._startTime) * n._timeScale, t, i)), n = l;
            else
              for (n = this._last; n && (l = n._prev, p === this._time && (!this._paused || w));) {
                if (n._active || n._startTime <= g && !n._paused && !n._gc) {
                  if (h === n) {
                    for (h = n._prev; h && h.endTime() > this._time;) h.render(h._reversed ? h.totalDuration() - (e - h._startTime) * h._timeScale : (e - h._startTime) * h._timeScale, t, i), h = h._prev;
                    h = null, this.pause()
                  }
                  n._reversed ? n.render((n._dirty ? n.totalDuration() : n._totalDuration) - (e - n._startTime) * n._timeScale, t, i) : n.render((e - n._startTime) * n._timeScale, t, i)
                }
                n = l
              }
            this._onUpdate && (t || (a.length && o(), this._callback("onUpdate"))), c && (this._locked || this._gc || (v === this._startTime || _ !== this._timeScale) && (0 === this._time || f >= this.totalDuration()) && (s && (a.length && o(), this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !t && this.vars[c] && this._callback(c)))
          } else y !== this._totalTime && this._onUpdate && (t || this._callback("onUpdate"))
        }, c.getActive = function(e, t, i) {
          null == e && (e = !0), null == t && (t = !0), null == i && (i = !1);
          var n, r, s = [],
            a = this.getChildren(e, t, i),
            o = 0,
            l = a.length;
          for (n = 0; l > n; n++)(r = a[n]).isActive() && (s[o++] = r);
          return s
        }, c.getLabelAfter = function(e) {
          e || 0 !== e && (e = this._time);
          var t, i = this.getLabelsArray(),
            n = i.length;
          for (t = 0; n > t; t++)
            if (i[t].time > e) return i[t].name;
          return null
        }, c.getLabelBefore = function(e) {
          null == e && (e = this._time);
          for (var t = this.getLabelsArray(), i = t.length; --i > -1;)
            if (t[i].time < e) return t[i].name;
          return null
        }, c.getLabelsArray = function() {
          var e, t = [],
            i = 0;
          for (e in this._labels) t[i++] = {
            time: this._labels[e],
            name: e
          };
          return t.sort(function(e, t) {
            return e.time - t.time
          }), t
        }, c.progress = function(e, t) {
          return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 != (1 & this._cycle) ? 1 - e : e) + this._cycle * (this._duration + this._repeatDelay), t) : this._time / this.duration()
        }, c.totalProgress = function(e, t) {
          return arguments.length ? this.totalTime(this.totalDuration() * e, t) : this._totalTime / this.totalDuration()
        }, c.totalDuration = function(t) {
          return arguments.length ? -1 !== this._repeat && t ? this.timeScale(this.totalDuration() / t) : this : (this._dirty && (e.prototype.totalDuration.call(this), this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat), this._totalDuration)
        }, c.time = function(e, t) {
          return arguments.length ? (this._dirty && this.totalDuration(), e > this._duration && (e = this._duration), this._yoyo && 0 != (1 & this._cycle) ? e = this._duration - e + this._cycle * (this._duration + this._repeatDelay) : 0 !== this._repeat && (e += this._cycle * (this._duration + this._repeatDelay)), this.totalTime(e, t)) : this._time
        }, c.repeat = function(e) {
          return arguments.length ? (this._repeat = e, this._uncache(!0)) : this._repeat
        }, c.repeatDelay = function(e) {
          return arguments.length ? (this._repeatDelay = e, this._uncache(!0)) : this._repeatDelay
        }, c.yoyo = function(e) {
          return arguments.length ? (this._yoyo = e, this) : this._yoyo
        }, c.currentLabel = function(e) {
          return arguments.length ? this.seek(e, !0) : this.getLabelBefore(this._time + 1e-8)
        }, n
      }, !0), e = 180 / Math.PI, t = [], i = [], n = [], r = {}, s = _gsScope._gsDefine.globals, a = function(e, t, i, n) {
        i === n && (i = n - (n - t) / 1e6), e === t && (t = e + (i - e) / 1e6), this.a = e, this.b = t, this.c = i, this.d = n, this.da = n - e, this.ca = i - e, this.ba = t - e
      }, o = function(e, t, i, n) {
        var r = {
            a: e
          },
          s = {},
          a = {},
          o = {
            c: n
          },
          l = (e + t) / 2,
          c = (t + i) / 2,
          u = (i + n) / 2,
          d = (l + c) / 2,
          h = (c + u) / 2,
          p = (h - d) / 8;
        return r.b = l + (e - l) / 4, s.b = d + p, r.c = s.a = (r.b + s.b) / 2, s.c = a.a = (d + h) / 2, a.b = h - p, o.b = u + (n - u) / 4, a.c = o.a = (a.b + o.b) / 2, [r, s, a, o]
      }, l = function(e, r, s, a, l) {
        var c, u, d, h, p, f, m, g, y, v, _, b, w, T = e.length - 1,
          A = 0,
          k = e[0].a;
        for (c = 0; T > c; c++) u = (p = e[A]).a, d = p.d, h = e[A + 1].d, l ? (_ = t[c], w = ((b = i[c]) + _) * r * .25 / (a ? .5 : n[c] || .5), g = d - ((f = d - (d - u) * (a ? .5 * r : 0 !== _ ? w / _ : 0)) + (((m = d + (h - d) * (a ? .5 * r : 0 !== b ? w / b : 0)) - f) * (3 * _ / (_ + b) + .5) / 4 || 0))) : g = d - ((f = d - (d - u) * r * .5) + (m = d + (h - d) * r * .5)) / 2, f += g, m += g, p.c = y = f, p.b = 0 !== c ? k : k = p.a + .6 * (p.c - p.a), p.da = d - u, p.ca = y - u, p.ba = k - u, s ? (v = o(u, k, y, d), e.splice(A, 1, v[0], v[1], v[2], v[3]), A += 4) : A++, k = m;
        (p = e[A]).b = k, p.c = k + .4 * (p.d - k), p.da = p.d - p.a, p.ca = p.c - p.a, p.ba = k - p.a, s && (v = o(p.a, k, p.c, p.d), e.splice(A, 1, v[0], v[1], v[2], v[3]))
      }, c = function(e, n, r, s) {
        var o, l, c, u, d, h, p = [];
        if (s)
          for (l = (e = [s].concat(e)).length; --l > -1;) "string" == typeof(h = e[l][n]) && "=" === h.charAt(1) && (e[l][n] = s[n] + Number(h.charAt(0) + h.substr(2)));
        if (0 > (o = e.length - 2)) return p[0] = new a(e[0][n], 0, 0, e[-1 > o ? 0 : 1][n]), p;
        for (l = 0; o > l; l++) c = e[l][n], u = e[l + 1][n], p[l] = new a(c, 0, 0, u), r && (d = e[l + 2][n], t[l] = (t[l] || 0) + (u - c) * (u - c), i[l] = (i[l] || 0) + (d - u) * (d - u));
        return p[l] = new a(e[l][n], 0, 0, e[l + 1][n]), p
      }, u = function(e, s, a, o, u, d) {
        var h, p, f, m, g, y, v, _, b = {},
          w = [],
          T = d || e[0];
        for (p in u = "string" == typeof u ? "," + u + "," : ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,", null == s && (s = 1), e[0]) w.push(p);
        if (e.length > 1) {
          for (_ = e[e.length - 1], v = !0, h = w.length; --h > -1;)
            if (p = w[h], Math.abs(T[p] - _[p]) > .05) {
              v = !1;
              break
            } v && (e = e.concat(), d && e.unshift(d), e.push(e[1]), d = e[e.length - 3])
        }
        for (t.length = i.length = n.length = 0, h = w.length; --h > -1;) p = w[h], r[p] = -1 !== u.indexOf("," + p + ","), b[p] = c(e, p, r[p], d);
        for (h = t.length; --h > -1;) t[h] = Math.sqrt(t[h]), i[h] = Math.sqrt(i[h]);
        if (!o) {
          for (h = w.length; --h > -1;)
            if (r[p])
              for (y = (f = b[w[h]]).length - 1, m = 0; y > m; m++) g = f[m + 1].da / i[m] + f[m].da / t[m] || 0, n[m] = (n[m] || 0) + g * g;
          for (h = n.length; --h > -1;) n[h] = Math.sqrt(n[h])
        }
        for (h = w.length, m = a ? 4 : 1; --h > -1;) f = b[p = w[h]], l(f, s, a, o, r[p]), v && (f.splice(0, m), f.splice(f.length - m, m));
        return b
      }, d = function(e, t, i) {
        var n, r, s, o, l, c, u, d, h, p, f, m = {},
          g = "cubic" === (t = t || "soft") ? 3 : 2,
          y = "soft" === t,
          v = [];
        if (y && i && (e = [i].concat(e)), null == e || e.length < g + 1) throw "invalid Bezier data";
        for (h in e[0]) v.push(h);
        for (c = v.length; --c > -1;) {
          for (m[h = v[c]] = l = [], p = 0, d = e.length, u = 0; d > u; u++) n = null == i ? e[u][h] : "string" == typeof(f = e[u][h]) && "=" === f.charAt(1) ? i[h] + Number(f.charAt(0) + f.substr(2)) : Number(f), y && u > 1 && d - 1 > u && (l[p++] = (n + l[p - 2]) / 2), l[p++] = n;
          for (d = p - g + 1, p = 0, u = 0; d > u; u += g) n = l[u], r = l[u + 1], s = l[u + 2], o = 2 === g ? 0 : l[u + 3], l[p++] = f = 3 === g ? new a(n, r, s, o) : new a(n, (2 * r + n) / 3, (2 * r + s) / 3, s);
          l.length = p
        }
        return m
      }, h = function(e, t, i) {
        for (var n, r, s, a, o, l, c, u, d, h, p, f = 1 / i, m = e.length; --m > -1;)
          for (s = (h = e[m]).a, a = h.d - s, o = h.c - s, l = h.b - s, n = r = 0, u = 1; i >= u; u++) n = r - (r = ((c = f * u) * c * a + 3 * (d = 1 - c) * (c * o + d * l)) * c), t[p = m * i + u - 1] = (t[p] || 0) + n * n
      }, p = function(e, t) {
        var i, n, r, s, a = [],
          o = [],
          l = 0,
          c = 0,
          u = (t = t >> 0 || 6) - 1,
          d = [],
          p = [];
        for (i in e) h(e[i], a, t);
        for (r = a.length, n = 0; r > n; n++) l += Math.sqrt(a[n]), p[s = n % t] = l, s === u && (c += l, d[s = n / t >> 0] = p, o[s] = c, l = 0, p = []);
        return {
          length: c,
          lengths: o,
          segments: d
        }
      }, f = _gsScope._gsDefine.plugin({
        propName: "bezier",
        priority: -1,
        version: "1.3.6",
        API: 2,
        global: !0,
        init: function(e, t, i) {
          this._target = e, t instanceof Array && (t = {
            values: t
          }), this._func = {}, this._round = {}, this._props = [], this._timeRes = null == t.timeResolution ? 6 : parseInt(t.timeResolution, 10);
          var n, r, s, a, o, l = t.values || [],
            c = {},
            h = l[0],
            f = t.autoRotate || i.vars.orientToBezier;
          for (n in this._autoRotate = f ? f instanceof Array ? f : [
              ["x", "y", "rotation", !0 === f ? 0 : Number(f) || 0]
            ] : null, h) this._props.push(n);
          for (s = this._props.length; --s > -1;) n = this._props[s], this._overwriteProps.push(n), r = this._func[n] = "function" == typeof e[n], c[n] = r ? e[n.indexOf("set") || "function" != typeof e["get" + n.substr(3)] ? n : "get" + n.substr(3)]() : parseFloat(e[n]), o || c[n] !== l[0][n] && (o = c);
          if (this._beziers = "cubic" !== t.type && "quadratic" !== t.type && "soft" !== t.type ? u(l, isNaN(t.curviness) ? 1 : t.curviness, !1, "thruBasic" === t.type, t.correlate, o) : d(l, t.type, c), this._segCount = this._beziers[n].length, this._timeRes) {
            var m = p(this._beziers, this._timeRes);
            this._length = m.length, this._lengths = m.lengths, this._segments = m.segments, this._l1 = this._li = this._s1 = this._si = 0, this._l2 = this._lengths[0], this._curSeg = this._segments[0], this._s2 = this._curSeg[0], this._prec = 1 / this._curSeg.length
          }
          if (f = this._autoRotate)
            for (this._initialRotations = [], f[0] instanceof Array || (this._autoRotate = f = [f]), s = f.length; --s > -1;) {
              for (a = 0; 3 > a; a++) n = f[s][a], this._func[n] = "function" == typeof e[n] && e[n.indexOf("set") || "function" != typeof e["get" + n.substr(3)] ? n : "get" + n.substr(3)];
              n = f[s][2], this._initialRotations[s] = (this._func[n] ? this._func[n].call(this._target) : this._target[n]) || 0
            }
          return this._startRatio = i.vars.runBackwards ? 1 : 0, !0
        },
        set: function(t) {
          var i, n, r, s, a, o, l, c, u, d, h = this._segCount,
            p = this._func,
            f = this._target,
            m = t !== this._startRatio;
          if (this._timeRes) {
            if (u = this._lengths, d = this._curSeg, t *= this._length, r = this._li, t > this._l2 && h - 1 > r) {
              for (c = h - 1; c > r && (this._l2 = u[++r]) <= t;);
              this._l1 = u[r - 1], this._li = r, this._curSeg = d = this._segments[r], this._s2 = d[this._s1 = this._si = 0]
            } else if (t < this._l1 && r > 0) {
              for (; r > 0 && (this._l1 = u[--r]) >= t;);
              0 === r && t < this._l1 ? this._l1 = 0 : r++, this._l2 = u[r], this._li = r, this._curSeg = d = this._segments[r], this._s1 = d[(this._si = d.length - 1) - 1] || 0, this._s2 = d[this._si]
            }
            if (i = r, t -= this._l1, r = this._si, t > this._s2 && r < d.length - 1) {
              for (c = d.length - 1; c > r && (this._s2 = d[++r]) <= t;);
              this._s1 = d[r - 1], this._si = r
            } else if (t < this._s1 && r > 0) {
              for (; r > 0 && (this._s1 = d[--r]) >= t;);
              0 === r && t < this._s1 ? this._s1 = 0 : r++, this._s2 = d[r], this._si = r
            }
            o = (r + (t - this._s1) / (this._s2 - this._s1)) * this._prec || 0
          } else o = (t - (i = 0 > t ? 0 : t >= 1 ? h - 1 : h * t >> 0) * (1 / h)) * h;
          for (n = 1 - o, r = this._props.length; --r > -1;) s = this._props[r], l = (o * o * (a = this._beziers[s][i]).da + 3 * n * (o * a.ca + n * a.ba)) * o + a.a, this._round[s] && (l = Math.round(l)), p[s] ? f[s](l) : f[s] = l;
          if (this._autoRotate) {
            var g, y, v, _, b, w, T, A = this._autoRotate;
            for (r = A.length; --r > -1;) s = A[r][2], w = A[r][3] || 0, T = !0 === A[r][4] ? 1 : e, a = this._beziers[A[r][0]], g = this._beziers[A[r][1]], a && g && (a = a[i], g = g[i], y = a.a + (a.b - a.a) * o, y += ((_ = a.b + (a.c - a.b) * o) - y) * o, _ += (a.c + (a.d - a.c) * o - _) * o, v = g.a + (g.b - g.a) * o, v += ((b = g.b + (g.c - g.b) * o) - v) * o, b += (g.c + (g.d - g.c) * o - b) * o, l = m ? Math.atan2(b - v, _ - y) * T + w : this._initialRotations[r], p[s] ? f[s](l) : f[s] = l)
          }
        }
      }), m = f.prototype, f.bezierThrough = u, f.cubicToQuadratic = o, f._autoCSS = !0, f.quadraticToCubic = function(e, t, i) {
        return new a(e, (2 * t + e) / 3, (2 * t + i) / 3, i)
      }, f._cssRegister = function() {
        var e = s.CSSPlugin;
        if (e) {
          var t = e._internals,
            i = t._parseToProxy,
            n = t._setPluginRatio,
            r = t.CSSPropTween;
          t._registerComplexSpecialProp("bezier", {
            parser: function(e, t, s, a, o, l) {
              t instanceof Array && (t = {
                values: t
              }), l = new f;
              var c, u, d, h = t.values,
                p = h.length - 1,
                m = [],
                g = {};
              if (0 > p) return o;
              for (c = 0; p >= c; c++) d = i(e, h[c], a, o, l, p !== c), m[c] = d.end;
              for (u in t) g[u] = t[u];
              return g.values = m, (o = new r(e, "bezier", 0, 0, d.pt, 2)).data = d, o.plugin = l, o.setRatio = n, 0 === g.autoRotate && (g.autoRotate = !0), !g.autoRotate || g.autoRotate instanceof Array || (c = !0 === g.autoRotate ? 0 : Number(g.autoRotate), g.autoRotate = null != d.end.left ? [
                ["left", "top", "rotation", c, !1]
              ] : null != d.end.x && [
                ["x", "y", "rotation", c, !1]
              ]), g.autoRotate && (a._transform || a._enableTransforms(!1), d.autoRotate = a._target._gsTransform, d.proxy.rotation = d.autoRotate.rotation || 0), l._onInitTween(d.proxy, g, a._tween), o
            }
          })
        }
      }, m._roundProps = function(e, t) {
        for (var i = this._overwriteProps, n = i.length; --n > -1;)(e[i[n]] || e.bezier || e.bezierThrough) && (this._round[i[n]] = t)
      }, m._kill = function(e) {
        var t, i, n = this._props;
        for (t in this._beziers)
          if (t in e)
            for (delete this._beziers[t], delete this._func[t], i = n.length; --i > -1;) n[i] === t && n.splice(i, 1);
        return this._super._kill.call(this, e)
      }, _gsScope._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"], function(e, t) {
        var i, n, r, s, a = function() {
            e.call(this, "css"), this._overwriteProps.length = 0, this.setRatio = a.prototype.setRatio
          },
          o = _gsScope._gsDefine.globals,
          l = {},
          c = a.prototype = new e("css");
        c.constructor = a, a.version = "1.18.5", a.API = 2, a.defaultTransformPerspective = 0, a.defaultSkewType = "compensated", a.defaultSmoothOrigin = !0, c = "px", a.suffixMap = {
          top: c,
          right: c,
          bottom: c,
          left: c,
          width: c,
          height: c,
          fontSize: c,
          padding: c,
          margin: c,
          perspective: c,
          lineHeight: ""
        };
        var u, d, h, p, f, m, g = /(?:\-|\.|\b)(\d|\.|e\-)+/g,
          y = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
          v = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,
          _ = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,
          b = /(?:\d|\-|\+|=|#|\.)*/g,
          w = /opacity *= *([^)]*)/i,
          T = /opacity:([^;]*)/i,
          A = /alpha\(opacity *=.+?\)/i,
          k = /^(rgb|hsl)/,
          x = /([A-Z])/g,
          S = /-([a-z])/gi,
          C = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,
          E = function(e, t) {
            return t.toUpperCase()
          },
          P = /(?:Left|Right|Width)/i,
          M = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
          O = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
          D = /,(?=[^\)]*(?:\(|$))/gi,
          N = /[\s,\(]/i,
          L = Math.PI / 180,
          z = 180 / Math.PI,
          R = {},
          j = document,
          I = function(e) {
            return j.createElementNS ? j.createElementNS("http://www.w3.org/1999/xhtml", e) : j.createElement(e)
          },
          F = I("div"),
          H = I("img"),
          Y = a._internals = {
            _specialProps: l
          },
          q = navigator.userAgent,
          $ = function() {
            var e = q.indexOf("Android"),
              t = I("a");
            return h = -1 !== q.indexOf("Safari") && -1 === q.indexOf("Chrome") && (-1 === e || Number(q.substr(e + 8, 1)) > 3), f = h && Number(q.substr(q.indexOf("Version/") + 8, 1)) < 6, p = -1 !== q.indexOf("Firefox"), (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(q) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(q)) && (m = parseFloat(RegExp.$1)), !!t && (t.style.cssText = "top:1px;opacity:.55;", /^0.55/.test(t.style.opacity))
          }(),
          B = function(e) {
            return w.test("string" == typeof e ? e : (e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1
          },
          W = function(e) {
            window.console && console.log(e)
          },
          U = "",
          G = "",
          V = function(e, t) {
            var i, n, r = (t = t || F).style;
            if (void 0 !== r[e]) return e;
            for (e = e.charAt(0).toUpperCase() + e.substr(1), i = ["O", "Moz", "ms", "Ms", "Webkit"], n = 5; --n > -1 && void 0 === r[i[n] + e];);
            return n >= 0 ? (U = "-" + (G = 3 === n ? "ms" : i[n]).toLowerCase() + "-", G + e) : null
          },
          X = j.defaultView ? j.defaultView.getComputedStyle : function() {},
          K = a.getStyle = function(e, t, i, n, r) {
            var s;
            return $ || "opacity" !== t ? (!n && e.style[t] ? s = e.style[t] : (i = i || X(e)) ? s = i[t] || i.getPropertyValue(t) || i.getPropertyValue(t.replace(x, "-$1").toLowerCase()) : e.currentStyle && (s = e.currentStyle[t]), null == r || s && "none" !== s && "auto" !== s && "auto auto" !== s ? s : r) : B(e)
          },
          Z = Y.convertToPixels = function(e, i, n, r, s) {
            if ("px" === r || !r) return n;
            if ("auto" === r || !n) return 0;
            var o, l, c, u = P.test(i),
              d = e,
              h = F.style,
              p = 0 > n,
              f = 1 === n;
            if (p && (n = -n), f && (n *= 100), "%" === r && -1 !== i.indexOf("border")) o = n / 100 * (u ? e.clientWidth : e.clientHeight);
            else {
              if (h.cssText = "border:0 solid red;position:" + K(e, "position") + ";line-height:0;", "%" !== r && d.appendChild && "v" !== r.charAt(0) && "rem" !== r) h[u ? "borderLeftWidth" : "borderTopWidth"] = n + r;
              else {
                if (l = (d = e.parentNode || j.body)._gsCache, c = t.ticker.frame, l && u && l.time === c) return l.width * n / 100;
                h[u ? "width" : "height"] = n + r
              }
              d.appendChild(F), o = parseFloat(F[u ? "offsetWidth" : "offsetHeight"]), d.removeChild(F), u && "%" === r && !1 !== a.cacheWidths && ((l = d._gsCache = d._gsCache || {}).time = c, l.width = o / n * 100), 0 !== o || s || (o = Z(e, i, n, r, !0))
            }
            return f && (o /= 100), p ? -o : o
          },
          Q = Y.calculateOffset = function(e, t, i) {
            if ("absolute" !== K(e, "position", i)) return 0;
            var n = "left" === t ? "Left" : "Top",
              r = K(e, "margin" + n, i);
            return e["offset" + n] - (Z(e, t, parseFloat(r), r.replace(b, "")) || 0)
          },
          J = function(e, t) {
            var i, n, r, s = {};
            if (t = t || X(e, null))
              if (i = t.length)
                for (; --i > -1;)(-1 === (r = t[i]).indexOf("-transform") || Se === r) && (s[r.replace(S, E)] = t.getPropertyValue(r));
              else
                for (i in t)(-1 === i.indexOf("Transform") || xe === i) && (s[i] = t[i]);
            else if (t = e.currentStyle || e.style)
              for (i in t) "string" == typeof i && void 0 === s[i] && (s[i.replace(S, E)] = t[i]);
            return $ || (s.opacity = B(e)), n = Ie(e, t, !1), s.rotation = n.rotation, s.skewX = n.skewX, s.scaleX = n.scaleX, s.scaleY = n.scaleY, s.x = n.x, s.y = n.y, Ee && (s.z = n.z, s.rotationX = n.rotationX, s.rotationY = n.rotationY, s.scaleZ = n.scaleZ), s.filters && delete s.filters, s
          },
          ee = function(e, t, i, n, r) {
            var s, a, o, l = {},
              c = e.style;
            for (a in i) "cssText" !== a && "length" !== a && isNaN(a) && (t[a] !== (s = i[a]) || r && r[a]) && -1 === a.indexOf("Origin") && ("number" == typeof s || "string" == typeof s) && (l[a] = "auto" !== s || "left" !== a && "top" !== a ? "" !== s && "auto" !== s && "none" !== s || "string" != typeof t[a] || "" === t[a].replace(_, "") ? s : 0 : Q(e, a), void 0 !== c[a] && (o = new me(c, a, c[a], o)));
            if (n)
              for (a in n) "className" !== a && (l[a] = n[a]);
            return {
              difs: l,
              firstMPT: o
            }
          },
          te = {
            width: ["Left", "Right"],
            height: ["Top", "Bottom"]
          },
          ie = ["marginLeft", "marginRight", "marginTop", "marginBottom"],
          ne = function(e, t, i) {
            if ("svg" === (e.nodeName + "").toLowerCase()) return (i || X(e))[t] || 0;
            if (e.getBBox && ze(e)) return e.getBBox()[t] || 0;
            var n = parseFloat("width" === t ? e.offsetWidth : e.offsetHeight),
              r = te[t],
              s = r.length;
            for (i = i || X(e, null); --s > -1;) n -= parseFloat(K(e, "padding" + r[s], i, !0)) || 0, n -= parseFloat(K(e, "border" + r[s] + "Width", i, !0)) || 0;
            return n
          },
          re = function(e, t) {
            if ("contain" === e || "auto" === e || "auto auto" === e) return e + " ";
            (null == e || "" === e) && (e = "0 0");
            var i, n = e.split(" "),
              r = -1 !== e.indexOf("left") ? "0%" : -1 !== e.indexOf("right") ? "100%" : n[0],
              s = -1 !== e.indexOf("top") ? "0%" : -1 !== e.indexOf("bottom") ? "100%" : n[1];
            if (n.length > 3 && !t) {
              for (n = e.split(", ").join(",").split(","), e = [], i = 0; i < n.length; i++) e.push(re(n[i]));
              return e.join(",")
            }
            return null == s ? s = "center" === r ? "50%" : "0" : "center" === s && (s = "50%"), ("center" === r || isNaN(parseFloat(r)) && -1 === (r + "").indexOf("=")) && (r = "50%"), e = r + " " + s + (n.length > 2 ? " " + n[2] : ""), t && (t.oxp = -1 !== r.indexOf("%"), t.oyp = -1 !== s.indexOf("%"), t.oxr = "=" === r.charAt(1), t.oyr = "=" === s.charAt(1), t.ox = parseFloat(r.replace(_, "")), t.oy = parseFloat(s.replace(_, "")), t.v = e), t || e
          },
          se = function(e, t) {
            return "string" == typeof e && "=" === e.charAt(1) ? parseInt(e.charAt(0) + "1", 10) * parseFloat(e.substr(2)) : parseFloat(e) - parseFloat(t) || 0
          },
          ae = function(e, t) {
            return null == e ? t : "string" == typeof e && "=" === e.charAt(1) ? parseInt(e.charAt(0) + "1", 10) * parseFloat(e.substr(2)) + t : parseFloat(e) || 0
          },
          oe = function(e, t, i, n) {
            var r, s, a, o, l;
            return null == e ? o = t : "number" == typeof e ? o = e : (r = 360, s = e.split("_"), a = ((l = "=" === e.charAt(1)) ? parseInt(e.charAt(0) + "1", 10) * parseFloat(s[0].substr(2)) : parseFloat(s[0])) * (-1 === e.indexOf("rad") ? 1 : z) - (l ? 0 : t), s.length && (n && (n[i] = t + a), -1 !== e.indexOf("short") && ((a %= r) !== a % 180 && (a = 0 > a ? a + r : a - r)), -1 !== e.indexOf("_cw") && 0 > a ? a = (a + 9999999999 * r) % r - (a / r | 0) * r : -1 !== e.indexOf("ccw") && a > 0 && (a = (a - 9999999999 * r) % r - (a / r | 0) * r)), o = t + a), 1e-6 > o && o > -1e-6 && (o = 0), o
          },
          le = {
            aqua: [0, 255, 255],
            lime: [0, 255, 0],
            silver: [192, 192, 192],
            black: [0, 0, 0],
            maroon: [128, 0, 0],
            teal: [0, 128, 128],
            blue: [0, 0, 255],
            navy: [0, 0, 128],
            white: [255, 255, 255],
            fuchsia: [255, 0, 255],
            olive: [128, 128, 0],
            yellow: [255, 255, 0],
            orange: [255, 165, 0],
            gray: [128, 128, 128],
            purple: [128, 0, 128],
            green: [0, 128, 0],
            red: [255, 0, 0],
            pink: [255, 192, 203],
            cyan: [0, 255, 255],
            transparent: [255, 255, 255, 0]
          },
          ce = function(e, t, i) {
            return 255 * (1 > 6 * (e = 0 > e ? e + 1 : e > 1 ? e - 1 : e) ? t + (i - t) * e * 6 : .5 > e ? i : 2 > 3 * e ? t + (i - t) * (2 / 3 - e) * 6 : t) + .5 | 0
          },
          ue = a.parseColor = function(e, t) {
            var i, n, r, s, a, o, l, c, u, d, h;
            if (e)
              if ("number" == typeof e) i = [e >> 16, e >> 8 & 255, 255 & e];
              else {
                if ("," === e.charAt(e.length - 1) && (e = e.substr(0, e.length - 1)), le[e]) i = le[e];
                else if ("#" === e.charAt(0)) 4 === e.length && (n = e.charAt(1), r = e.charAt(2), s = e.charAt(3), e = "#" + n + n + r + r + s + s), i = [(e = parseInt(e.substr(1), 16)) >> 16, e >> 8 & 255, 255 & e];
                else if ("hsl" === e.substr(0, 3))
                  if (i = h = e.match(g), t) {
                    if (-1 !== e.indexOf("=")) return e.match(y)
                  } else a = Number(i[0]) % 360 / 360, o = Number(i[1]) / 100, n = 2 * (l = Number(i[2]) / 100) - (r = .5 >= l ? l * (o + 1) : l + o - l * o), i.length > 3 && (i[3] = Number(e[3])), i[0] = ce(a + 1 / 3, n, r), i[1] = ce(a, n, r), i[2] = ce(a - 1 / 3, n, r);
                else i = e.match(g) || le.transparent;
                i[0] = Number(i[0]), i[1] = Number(i[1]), i[2] = Number(i[2]), i.length > 3 && (i[3] = Number(i[3]))
              }
            else i = le.black;
            return t && !h && (n = i[0] / 255, r = i[1] / 255, s = i[2] / 255, l = ((c = Math.max(n, r, s)) + (u = Math.min(n, r, s))) / 2, c === u ? a = o = 0 : (d = c - u, o = l > .5 ? d / (2 - c - u) : d / (c + u), a = c === n ? (r - s) / d + (s > r ? 6 : 0) : c === r ? (s - n) / d + 2 : (n - r) / d + 4, a *= 60), i[0] = a + .5 | 0, i[1] = 100 * o + .5 | 0, i[2] = 100 * l + .5 | 0), i
          },
          de = function(e, t) {
            var i, n, r, s = e.match(he) || [],
              a = 0,
              o = s.length ? "" : e;
            for (i = 0; i < s.length; i++) n = s[i], a += (r = e.substr(a, e.indexOf(n, a) - a)).length + n.length, 3 === (n = ue(n, t)).length && n.push(1), o += r + (t ? "hsla(" + n[0] + "," + n[1] + "%," + n[2] + "%," + n[3] : "rgba(" + n.join(",")) + ")";
            return o + e.substr(a)
          },
          he = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";
        for (c in le) he += "|" + c + "\\b";
        he = new RegExp(he + ")", "gi"), a.colorStringFilter = function(e) {
          var t, i = e[0] + e[1];
          he.test(i) && (t = -1 !== i.indexOf("hsl(") || -1 !== i.indexOf("hsla("), e[0] = de(e[0], t), e[1] = de(e[1], t)), he.lastIndex = 0
        }, t.defaultStringFilter || (t.defaultStringFilter = a.colorStringFilter);
        var pe = function(e, t, i, n) {
            if (null == e) return function(e) {
              return e
            };
            var r, s = t ? (e.match(he) || [""])[0] : "",
              a = e.split(s).join("").match(v) || [],
              o = e.substr(0, e.indexOf(a[0])),
              l = ")" === e.charAt(e.length - 1) ? ")" : "",
              c = -1 !== e.indexOf(" ") ? " " : ",",
              u = a.length,
              d = u > 0 ? a[0].replace(g, "") : "";
            return u ? r = t ? function(e) {
              var t, h, p, f;
              if ("number" == typeof e) e += d;
              else if (n && D.test(e)) {
                for (f = e.replace(D, "|").split("|"), p = 0; p < f.length; p++) f[p] = r(f[p]);
                return f.join(",")
              }
              if (t = (e.match(he) || [s])[0], p = (h = e.split(t).join("").match(v) || []).length, u > p--)
                for (; ++p < u;) h[p] = i ? h[(p - 1) / 2 | 0] : a[p];
              return o + h.join(c) + c + t + l + (-1 !== e.indexOf("inset") ? " inset" : "")
            } : function(e) {
              var t, s, h;
              if ("number" == typeof e) e += d;
              else if (n && D.test(e)) {
                for (s = e.replace(D, "|").split("|"), h = 0; h < s.length; h++) s[h] = r(s[h]);
                return s.join(",")
              }
              if (h = (t = e.match(v) || []).length, u > h--)
                for (; ++h < u;) t[h] = i ? t[(h - 1) / 2 | 0] : a[h];
              return o + t.join(c) + l
            } : function(e) {
              return e
            }
          },
          fe = function(e) {
            return e = e.split(","),
              function(t, i, n, r, s, a, o) {
                var l, c = (i + "").split(" ");
                for (o = {}, l = 0; 4 > l; l++) o[e[l]] = c[l] = c[l] || c[(l - 1) / 2 >> 0];
                return r.parse(t, o, s, a)
              }
          },
          me = (Y._setPluginRatio = function(e) {
            this.plugin.setRatio(e);
            for (var t, i, n, r, s, a = this.data, o = a.proxy, l = a.firstMPT; l;) t = o[l.v], l.r ? t = Math.round(t) : 1e-6 > t && t > -1e-6 && (t = 0), l.t[l.p] = t, l = l._next;
            if (a.autoRotate && (a.autoRotate.rotation = o.rotation), 1 === e || 0 === e)
              for (l = a.firstMPT, s = 1 === e ? "e" : "b"; l;) {
                if ((i = l.t).type) {
                  if (1 === i.type) {
                    for (r = i.xs0 + i.s + i.xs1, n = 1; n < i.l; n++) r += i["xn" + n] + i["xs" + (n + 1)];
                    i[s] = r
                  }
                } else i[s] = i.s + i.xs0;
                l = l._next
              }
          }, function(e, t, i, n, r) {
            this.t = e, this.p = t, this.v = i, this.r = r, n && (n._prev = this, this._next = n)
          }),
          ge = (Y._parseToProxy = function(e, t, i, n, r, s) {
            var a, o, l, c, u, d = n,
              h = {},
              p = {},
              f = i._transform,
              m = R;
            for (i._transform = null, R = t, n = u = i.parse(e, t, n, r), R = m, s && (i._transform = f, d && (d._prev = null, d._prev && (d._prev._next = null))); n && n !== d;) {
              if (n.type <= 1 && (p[o = n.p] = n.s + n.c, h[o] = n.s, s || (c = new me(n, "s", o, c, n.r), n.c = 0), 1 === n.type))
                for (a = n.l; --a > 0;) l = "xn" + a, p[o = n.p + "_" + l] = n.data[l], h[o] = n[l], s || (c = new me(n, l, o, c, n.rxp[l]));
              n = n._next
            }
            return {
              proxy: h,
              end: p,
              firstMPT: c,
              pt: u
            }
          }, Y.CSSPropTween = function(e, t, n, r, a, o, l, c, u, d, h) {
            this.t = e, this.p = t, this.s = n, this.c = r, this.n = l || t, e instanceof ge || s.push(this.n), this.r = c, this.type = o || 0, u && (this.pr = u, i = !0), this.b = void 0 === d ? n : d, this.e = void 0 === h ? n + r : h, a && (this._next = a, a._prev = this)
          }),
          ye = function(e, t, i, n, r, s) {
            var a = new ge(e, t, i, n - i, r, -1, s);
            return a.b = i, a.e = a.xs0 = n, a
          },
          ve = a.parseComplex = function(e, t, i, n, r, s, o, l, c, d) {
            o = new ge(e, t, 0, 0, o, d ? 2 : 1, null, !1, l, i = i || s || "", n), n += "", r && he.test(n + i) && (n = [i, n], a.colorStringFilter(n), i = n[0], n = n[1]);
            var h, p, f, m, v, _, b, w, T, A, k, x, S, C = i.split(", ").join(",").split(" "),
              E = n.split(", ").join(",").split(" "),
              P = C.length,
              M = !1 !== u;
            for ((-1 !== n.indexOf(",") || -1 !== i.indexOf(",")) && (C = C.join(" ").replace(D, ", ").split(" "), E = E.join(" ").replace(D, ", ").split(" "), P = C.length), P !== E.length && (P = (C = (s || "").split(" ")).length), o.plugin = c, o.setRatio = d, he.lastIndex = 0, h = 0; P > h; h++)
              if (m = C[h], v = E[h], (w = parseFloat(m)) || 0 === w) o.appendXtra("", w, se(v, w), v.replace(y, ""), M && -1 !== v.indexOf("px"), !0);
              else if (r && he.test(m)) x = ")" + ((x = v.indexOf(")") + 1) ? v.substr(x) : ""), S = -1 !== v.indexOf("hsl") && $, m = ue(m, S), v = ue(v, S), (T = m.length + v.length > 6) && !$ && 0 === v[3] ? (o["xs" + o.l] += o.l ? " transparent" : "transparent", o.e = o.e.split(E[h]).join("transparent")) : ($ || (T = !1), S ? o.appendXtra(T ? "hsla(" : "hsl(", m[0], se(v[0], m[0]), ",", !1, !0).appendXtra("", m[1], se(v[1], m[1]), "%,", !1).appendXtra("", m[2], se(v[2], m[2]), T ? "%," : "%" + x, !1) : o.appendXtra(T ? "rgba(" : "rgb(", m[0], v[0] - m[0], ",", !0, !0).appendXtra("", m[1], v[1] - m[1], ",", !0).appendXtra("", m[2], v[2] - m[2], T ? "," : x, !0), T && (m = m.length < 4 ? 1 : m[3], o.appendXtra("", m, (v.length < 4 ? 1 : v[3]) - m, x, !1))), he.lastIndex = 0;
            else if (_ = m.match(g)) {
              if (!(b = v.match(y)) || b.length !== _.length) return o;
              for (f = 0, p = 0; p < _.length; p++) k = _[p], A = m.indexOf(k, f), o.appendXtra(m.substr(f, A - f), Number(k), se(b[p], k), "", M && "px" === m.substr(A + k.length, 2), 0 === p), f = A + k.length;
              o["xs" + o.l] += m.substr(f)
            } else o["xs" + o.l] += o.l || o["xs" + o.l] ? " " + v : v;
            if (-1 !== n.indexOf("=") && o.data) {
              for (x = o.xs0 + o.data.s, h = 1; h < o.l; h++) x += o["xs" + h] + o.data["xn" + h];
              o.e = x + o["xs" + h]
            }
            return o.l || (o.type = -1, o.xs0 = o.e), o.xfirst || o
          },
          _e = 9;
        for ((c = ge.prototype).l = c.pr = 0; --_e > 0;) c["xn" + _e] = 0, c["xs" + _e] = "";
        c.xs0 = "", c._next = c._prev = c.xfirst = c.data = c.plugin = c.setRatio = c.rxp = null, c.appendXtra = function(e, t, i, n, r, s) {
          var a = this,
            o = a.l;
          return a["xs" + o] += s && (o || a["xs" + o]) ? " " + e : e || "", i || 0 === o || a.plugin ? (a.l++, a.type = a.setRatio ? 2 : 1, a["xs" + a.l] = n || "", o > 0 ? (a.data["xn" + o] = t + i, a.rxp["xn" + o] = r, a["xn" + o] = t, a.plugin || (a.xfirst = new ge(a, "xn" + o, t, i, a.xfirst || a, 0, a.n, r, a.pr), a.xfirst.xs0 = 0), a) : (a.data = {
            s: t + i
          }, a.rxp = {}, a.s = t, a.c = i, a.r = r, a)) : (a["xs" + o] += t + (n || ""), a)
        };
        var be = function(e, t) {
            t = t || {}, this.p = t.prefix && V(e) || e, l[e] = l[this.p] = this, this.format = t.formatter || pe(t.defaultValue, t.color, t.collapsible, t.multi), t.parser && (this.parse = t.parser), this.clrs = t.color, this.multi = t.multi, this.keyword = t.keyword, this.dflt = t.defaultValue, this.pr = t.priority || 0
          },
          we = Y._registerComplexSpecialProp = function(e, t, i) {
            "object" != typeof t && (t = {
              parser: i
            });
            var n, r = e.split(","),
              s = t.defaultValue;
            for (i = i || [s], n = 0; n < r.length; n++) t.prefix = 0 === n && t.prefix, t.defaultValue = i[n] || s, new be(r[n], t)
          },
          Te = function(e) {
            if (!l[e]) {
              var t = e.charAt(0).toUpperCase() + e.substr(1) + "Plugin";
              we(e, {
                parser: function(e, i, n, r, s, a, c) {
                  var u = o.com.greensock.plugins[t];
                  return u ? (u._cssRegister(), l[n].parse(e, i, n, r, s, a, c)) : (W("Error: " + t + " js file not loaded."), s)
                }
              })
            }
          };
        (c = be.prototype).parseComplex = function(e, t, i, n, r, s) {
          var a, o, l, c, u, d, h = this.keyword;
          if (this.multi && (D.test(i) || D.test(t) ? (o = t.replace(D, "|").split("|"), l = i.replace(D, "|").split("|")) : h && (o = [t], l = [i])), l) {
            for (c = l.length > o.length ? l.length : o.length, a = 0; c > a; a++) t = o[a] = o[a] || this.dflt, i = l[a] = l[a] || this.dflt, h && ((u = t.indexOf(h)) !== (d = i.indexOf(h)) && (-1 === d ? o[a] = o[a].split(h).join("") : -1 === u && (o[a] += " " + h)));
            t = o.join(", "), i = l.join(", ")
          }
          return ve(e, this.p, t, i, this.clrs, this.dflt, n, this.pr, r, s)
        }, c.parse = function(e, t, i, n, s, a, o) {
          return this.parseComplex(e.style, this.format(K(e, this.p, r, !1, this.dflt)), this.format(t), s, a)
        }, a.registerSpecialProp = function(e, t, i) {
          we(e, {
            parser: function(e, n, r, s, a, o, l) {
              var c = new ge(e, r, 0, 0, a, 2, r, !1, i);
              return c.plugin = o, c.setRatio = t(e, n, s._tween, r), c
            },
            priority: i
          })
        }, a.useSVGTransformAttr = h || p;
        var Ae, ke = "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),
          xe = V("transform"),
          Se = U + "transform",
          Ce = V("transformOrigin"),
          Ee = null !== V("perspective"),
          Pe = Y.Transform = function() {
            this.perspective = parseFloat(a.defaultTransformPerspective) || 0, this.force3D = !(!1 === a.defaultForce3D || !Ee) && (a.defaultForce3D || "auto")
          },
          Me = window.SVGElement,
          Oe = function(e, t, i) {
            var n, r = j.createElementNS("http://www.w3.org/2000/svg", e),
              s = /([a-z])([A-Z])/g;
            for (n in i) r.setAttributeNS(null, n.replace(s, "$1-$2").toLowerCase(), i[n]);
            return t.appendChild(r), r
          },
          De = j.documentElement,
          Ne = function() {
            var e, t, i, n = m || /Android/i.test(q) && !window.chrome;
            return j.createElementNS && !n && (e = Oe("svg", De), i = (t = Oe("rect", e, {
              width: 100,
              height: 50,
              x: 100
            })).getBoundingClientRect().width, t.style[Ce] = "50% 50%", t.style[xe] = "scaleX(0.5)", n = i === t.getBoundingClientRect().width && !(p && Ee), De.removeChild(e)), n
          }(),
          Le = function(e, t, i, n, r, s) {
            var o, l, c, u, d, h, p, f, m, g, y, v, _, b, w = e._gsTransform,
              T = je(e, !0);
            w && (_ = w.xOrigin, b = w.yOrigin), (!n || (o = n.split(" ")).length < 2) && (p = e.getBBox(), o = [(-1 !== (t = re(t).split(" "))[0].indexOf("%") ? parseFloat(t[0]) / 100 * p.width : parseFloat(t[0])) + p.x, (-1 !== t[1].indexOf("%") ? parseFloat(t[1]) / 100 * p.height : parseFloat(t[1])) + p.y]), i.xOrigin = u = parseFloat(o[0]), i.yOrigin = d = parseFloat(o[1]), n && T !== Re && (h = T[0], p = T[1], f = T[2], m = T[3], g = T[4], l = u * (m / (v = h * m - p * f)) + d * (-f / v) + (f * (y = T[5]) - m * g) / v, c = u * (-p / v) + d * (h / v) - (h * y - p * g) / v, u = i.xOrigin = o[0] = l, d = i.yOrigin = o[1] = c), w && (s && (i.xOffset = w.xOffset, i.yOffset = w.yOffset, w = i), r || !1 !== r && !1 !== a.defaultSmoothOrigin ? (l = u - _, c = d - b, w.xOffset += l * T[0] + c * T[2] - l, w.yOffset += l * T[1] + c * T[3] - c) : w.xOffset = w.yOffset = 0), s || e.setAttribute("data-svg-origin", o.join(" "))
          },
          ze = function(e) {
            return !!(Me && e.getBBox && e.getCTM && function(e) {
              try {
                return e.getBBox()
              } catch (e) {}
            }(e) && (!e.parentNode || e.parentNode.getBBox && e.parentNode.getCTM))
          },
          Re = [1, 0, 0, 1, 0, 0],
          je = function(e, t) {
            var i, n, r, s, a, o, l = e._gsTransform || new Pe,
              c = e.style;
            if (xe ? n = K(e, Se, null, !0) : e.currentStyle && (n = (n = e.currentStyle.filter.match(M)) && 4 === n.length ? [n[0].substr(4), Number(n[2].substr(4)), Number(n[1].substr(4)), n[3].substr(4), l.x || 0, l.y || 0].join(",") : ""), (i = !n || "none" === n || "matrix(1, 0, 0, 1, 0, 0)" === n) && xe && ((o = "none" === X(e).display) || !e.parentNode) && (o && (s = c.display, c.display = "block"), e.parentNode || (a = 1, De.appendChild(e)), i = !(n = K(e, Se, null, !0)) || "none" === n || "matrix(1, 0, 0, 1, 0, 0)" === n, s ? c.display = s : o && qe(c, "display"), a && De.removeChild(e)), (l.svg || e.getBBox && ze(e)) && (i && -1 !== (c[xe] + "").indexOf("matrix") && (n = c[xe], i = 0), r = e.getAttribute("transform"), i && r && (-1 !== r.indexOf("matrix") ? (n = r, i = 0) : -1 !== r.indexOf("translate") && (n = "matrix(1,0,0,1," + r.match(/(?:\-|\b)[\d\-\.e]+\b/gi).join(",") + ")", i = 0))), i) return Re;
            for (r = (n || "").match(g) || [], _e = r.length; --_e > -1;) s = Number(r[_e]), r[_e] = (a = s - (s |= 0)) ? (1e5 * a + (0 > a ? -.5 : .5) | 0) / 1e5 + s : s;
            return t && r.length > 6 ? [r[0], r[1], r[4], r[5], r[12], r[13]] : r
          },
          Ie = Y.getTransform = function(e, i, n, r) {
            if (e._gsTransform && n && !r) return e._gsTransform;
            var s, o, l, c, u, d, h = n && e._gsTransform || new Pe,
              p = h.scaleX < 0,
              f = 1e5,
              m = Ee && (parseFloat(K(e, Ce, i, !1, "0 0 0").split(" ")[2]) || h.zOrigin) || 0,
              g = parseFloat(a.defaultTransformPerspective) || 0;
            if (h.svg = !(!e.getBBox || !ze(e)), h.svg && (Le(e, K(e, Ce, i, !1, "50% 50%") + "", h, e.getAttribute("data-svg-origin")), Ae = a.useSVGTransformAttr || Ne), (s = je(e)) !== Re) {
              if (16 === s.length) {
                var y, v, _, b, w, T = s[0],
                  A = s[1],
                  k = s[2],
                  x = s[3],
                  S = s[4],
                  C = s[5],
                  E = s[6],
                  P = s[7],
                  M = s[8],
                  O = s[9],
                  D = s[10],
                  N = s[12],
                  L = s[13],
                  R = s[14],
                  j = s[11],
                  I = Math.atan2(E, D);
                h.zOrigin && (N = M * (R = -h.zOrigin) - s[12], L = O * R - s[13], R = D * R + h.zOrigin - s[14]), h.rotationX = I * z, I && (y = S * (b = Math.cos(-I)) + M * (w = Math.sin(-I)), v = C * b + O * w, _ = E * b + D * w, M = S * -w + M * b, O = C * -w + O * b, D = E * -w + D * b, j = P * -w + j * b, S = y, C = v, E = _), I = Math.atan2(-k, D), h.rotationY = I * z, I && (v = A * (b = Math.cos(-I)) - O * (w = Math.sin(-I)), _ = k * b - D * w, O = A * w + O * b, D = k * w + D * b, j = x * w + j * b, T = y = T * b - M * w, A = v, k = _), I = Math.atan2(A, T), h.rotation = I * z, I && (T = T * (b = Math.cos(-I)) + S * (w = Math.sin(-I)), v = A * b + C * w, C = A * -w + C * b, E = k * -w + E * b, A = v), h.rotationX && Math.abs(h.rotationX) + Math.abs(h.rotation) > 359.9 && (h.rotationX = h.rotation = 0, h.rotationY = 180 - h.rotationY), h.scaleX = (Math.sqrt(T * T + A * A) * f + .5 | 0) / f, h.scaleY = (Math.sqrt(C * C + O * O) * f + .5 | 0) / f, h.scaleZ = (Math.sqrt(E * E + D * D) * f + .5 | 0) / f, h.rotationX || h.rotationY ? h.skewX = 0 : (h.skewX = S || C ? Math.atan2(S, C) * z + h.rotation : h.skewX || 0, Math.abs(h.skewX) > 90 && Math.abs(h.skewX) < 270 && (p ? (h.scaleX *= -1, h.skewX += h.rotation <= 0 ? 180 : -180, h.rotation += h.rotation <= 0 ? 180 : -180) : (h.scaleY *= -1, h.skewX += h.skewX <= 0 ? 180 : -180))), h.perspective = j ? 1 / (0 > j ? -j : j) : 0, h.x = N, h.y = L, h.z = R, h.svg && (h.x -= h.xOrigin - (h.xOrigin * T - h.yOrigin * S), h.y -= h.yOrigin - (h.yOrigin * A - h.xOrigin * C))
              } else if (!Ee || r || !s.length || h.x !== s[4] || h.y !== s[5] || !h.rotationX && !h.rotationY) {
                var F = s.length >= 6,
                  H = F ? s[0] : 1,
                  Y = s[1] || 0,
                  q = s[2] || 0,
                  $ = F ? s[3] : 1;
                h.x = s[4] || 0, h.y = s[5] || 0, l = Math.sqrt(H * H + Y * Y), c = Math.sqrt($ * $ + q * q), u = H || Y ? Math.atan2(Y, H) * z : h.rotation || 0, d = q || $ ? Math.atan2(q, $) * z + u : h.skewX || 0, Math.abs(d) > 90 && Math.abs(d) < 270 && (p ? (l *= -1, d += 0 >= u ? 180 : -180, u += 0 >= u ? 180 : -180) : (c *= -1, d += 0 >= d ? 180 : -180)), h.scaleX = l, h.scaleY = c, h.rotation = u, h.skewX = d, Ee && (h.rotationX = h.rotationY = h.z = 0, h.perspective = g, h.scaleZ = 1), h.svg && (h.x -= h.xOrigin - (h.xOrigin * H + h.yOrigin * q), h.y -= h.yOrigin - (h.xOrigin * Y + h.yOrigin * $))
              }
              for (o in h.zOrigin = m, h) h[o] < 2e-5 && h[o] > -2e-5 && (h[o] = 0)
            }
            return n && (e._gsTransform = h, h.svg && (Ae && e.style[xe] ? t.delayedCall(.001, function() {
              qe(e.style, xe)
            }) : !Ae && e.getAttribute("transform") && t.delayedCall(.001, function() {
              e.removeAttribute("transform")
            }))), h
          },
          Fe = function(e) {
            var t, i, n = this.data,
              r = -n.rotation * L,
              s = r + n.skewX * L,
              a = 1e5,
              o = (Math.cos(r) * n.scaleX * a | 0) / a,
              l = (Math.sin(r) * n.scaleX * a | 0) / a,
              c = (Math.sin(s) * -n.scaleY * a | 0) / a,
              u = (Math.cos(s) * n.scaleY * a | 0) / a,
              d = this.t.style,
              h = this.t.currentStyle;
            if (h) {
              i = l, l = -c, c = -i, t = h.filter, d.filter = "";
              var p, f, g = this.t.offsetWidth,
                y = this.t.offsetHeight,
                v = "absolute" !== h.position,
                _ = "progid:DXImageTransform.Microsoft.Matrix(M11=" + o + ", M12=" + l + ", M21=" + c + ", M22=" + u,
                T = n.x + g * n.xPercent / 100,
                A = n.y + y * n.yPercent / 100;
              if (null != n.ox && (T += (p = (n.oxp ? g * n.ox * .01 : n.ox) - g / 2) - (p * o + (f = (n.oyp ? y * n.oy * .01 : n.oy) - y / 2) * l), A += f - (p * c + f * u)), v ? _ += ", Dx=" + ((p = g / 2) - (p * o + (f = y / 2) * l) + T) + ", Dy=" + (f - (p * c + f * u) + A) + ")" : _ += ", sizingMethod='auto expand')", -1 !== t.indexOf("DXImageTransform.Microsoft.Matrix(") ? d.filter = t.replace(O, _) : d.filter = _ + " " + t, (0 === e || 1 === e) && 1 === o && 0 === l && 0 === c && 1 === u && (v && -1 === _.indexOf("Dx=0, Dy=0") || w.test(t) && 100 !== parseFloat(RegExp.$1) || -1 === t.indexOf(t.indexOf("Alpha")) && d.removeAttribute("filter")), !v) {
                var k, x, S, C = 8 > m ? 1 : -1;
                for (p = n.ieOffsetX || 0, f = n.ieOffsetY || 0, n.ieOffsetX = Math.round((g - ((0 > o ? -o : o) * g + (0 > l ? -l : l) * y)) / 2 + T), n.ieOffsetY = Math.round((y - ((0 > u ? -u : u) * y + (0 > c ? -c : c) * g)) / 2 + A), _e = 0; 4 > _e; _e++) S = (i = -1 !== (k = h[x = ie[_e]]).indexOf("px") ? parseFloat(k) : Z(this.t, x, parseFloat(k), k.replace(b, "")) || 0) !== n[x] ? 2 > _e ? -n.ieOffsetX : -n.ieOffsetY : 2 > _e ? p - n.ieOffsetX : f - n.ieOffsetY, d[x] = (n[x] = Math.round(i - S * (0 === _e || 2 === _e ? 1 : C))) + "px"
              }
            }
          },
          He = Y.set3DTransformRatio = Y.setTransformRatio = function(e) {
            var t, i, n, r, s, a, o, l, c, u, d, h, f, m, g, y, v, _, b, w, T, A, k, x = this.data,
              S = this.t.style,
              C = x.rotation,
              E = x.rotationX,
              P = x.rotationY,
              M = x.scaleX,
              O = x.scaleY,
              D = x.scaleZ,
              N = x.x,
              z = x.y,
              R = x.z,
              j = x.svg,
              I = x.perspective,
              F = x.force3D;
            if (!((1 !== e && 0 !== e || "auto" !== F || this.tween._totalTime !== this.tween._totalDuration && this.tween._totalTime) && F || R || I || P || E || 1 !== D) || Ae && j || !Ee) C || x.skewX || j ? (C *= L, A = x.skewX * L, k = 1e5, t = Math.cos(C) * M, r = Math.sin(C) * M, i = Math.sin(C - A) * -O, s = Math.cos(C - A) * O, A && "simple" === x.skewType && (v = Math.tan(A), i *= v = Math.sqrt(1 + v * v), s *= v, x.skewY && (t *= v, r *= v)), j && (N += x.xOrigin - (x.xOrigin * t + x.yOrigin * i) + x.xOffset, z += x.yOrigin - (x.xOrigin * r + x.yOrigin * s) + x.yOffset, Ae && (x.xPercent || x.yPercent) && (m = this.t.getBBox(), N += .01 * x.xPercent * m.width, z += .01 * x.yPercent * m.height), (m = 1e-6) > N && N > -m && (N = 0), m > z && z > -m && (z = 0)), b = (t * k | 0) / k + "," + (r * k | 0) / k + "," + (i * k | 0) / k + "," + (s * k | 0) / k + "," + N + "," + z + ")", j && Ae ? this.t.setAttribute("transform", "matrix(" + b) : S[xe] = (x.xPercent || x.yPercent ? "translate(" + x.xPercent + "%," + x.yPercent + "%) matrix(" : "matrix(") + b) : S[xe] = (x.xPercent || x.yPercent ? "translate(" + x.xPercent + "%," + x.yPercent + "%) matrix(" : "matrix(") + M + ",0,0," + O + "," + N + "," + z + ")";
            else {
              if (p && ((m = 1e-4) > M && M > -m && (M = D = 2e-5), m > O && O > -m && (O = D = 2e-5), !I || x.z || x.rotationX || x.rotationY || (I = 0)), C || x.skewX) C *= L, g = t = Math.cos(C), y = r = Math.sin(C), x.skewX && (C -= x.skewX * L, g = Math.cos(C), y = Math.sin(C), "simple" === x.skewType && (v = Math.tan(x.skewX * L), g *= v = Math.sqrt(1 + v * v), y *= v, x.skewY && (t *= v, r *= v))), i = -y, s = g;
              else {
                if (!(P || E || 1 !== D || I || j)) return void(S[xe] = (x.xPercent || x.yPercent ? "translate(" + x.xPercent + "%," + x.yPercent + "%) translate3d(" : "translate3d(") + N + "px," + z + "px," + R + "px)" + (1 !== M || 1 !== O ? " scale(" + M + "," + O + ")" : ""));
                t = s = 1, i = r = 0
              }
              c = 1, n = a = o = l = u = d = 0, h = I ? -1 / I : 0, f = x.zOrigin, m = 1e-6, w = ",", T = "0", (C = P * L) && (g = Math.cos(C), o = -(y = Math.sin(C)), u = h * -y, n = t * y, a = r * y, c = g, h *= g, t *= g, r *= g), (C = E * L) && (v = i * (g = Math.cos(C)) + n * (y = Math.sin(C)), _ = s * g + a * y, l = c * y, d = h * y, n = i * -y + n * g, a = s * -y + a * g, c *= g, h *= g, i = v, s = _), 1 !== D && (n *= D, a *= D, c *= D, h *= D), 1 !== O && (i *= O, s *= O, l *= O, d *= O), 1 !== M && (t *= M, r *= M, o *= M, u *= M), (f || j) && (f && (N += n * -f, z += a * -f, R += c * -f + f), j && (N += x.xOrigin - (x.xOrigin * t + x.yOrigin * i) + x.xOffset, z += x.yOrigin - (x.xOrigin * r + x.yOrigin * s) + x.yOffset), m > N && N > -m && (N = T), m > z && z > -m && (z = T), m > R && R > -m && (R = 0)), b = x.xPercent || x.yPercent ? "translate(" + x.xPercent + "%," + x.yPercent + "%) matrix3d(" : "matrix3d(", b += (m > t && t > -m ? T : t) + w + (m > r && r > -m ? T : r) + w + (m > o && o > -m ? T : o), b += w + (m > u && u > -m ? T : u) + w + (m > i && i > -m ? T : i) + w + (m > s && s > -m ? T : s), E || P || 1 !== D ? (b += w + (m > l && l > -m ? T : l) + w + (m > d && d > -m ? T : d) + w + (m > n && n > -m ? T : n), b += w + (m > a && a > -m ? T : a) + w + (m > c && c > -m ? T : c) + w + (m > h && h > -m ? T : h) + w) : b += ",0,0,0,0,1,0,", b += N + w + z + w + R + w + (I ? 1 + -R / I : 1) + ")", S[xe] = b
            }
          };
        (c = Pe.prototype).x = c.y = c.z = c.skewX = c.skewY = c.rotation = c.rotationX = c.rotationY = c.zOrigin = c.xPercent = c.yPercent = c.xOffset = c.yOffset = 0, c.scaleX = c.scaleY = c.scaleZ = 1, we("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin", {
          parser: function(e, t, i, n, s, o, l) {
            if (n._lastParsedTransform === l) return s;
            n._lastParsedTransform = l;
            var c, u, d, h, p, f, m, g, y, v = e._gsTransform,
              _ = e.style,
              b = ke.length,
              w = l,
              T = {},
              A = "transformOrigin",
              k = Ie(e, r, !0, l.parseTransform);
            if (n._transform = k, "string" == typeof w.transform && xe)(u = F.style)[xe] = w.transform, u.display = "block", u.position = "absolute", j.body.appendChild(F), c = Ie(F, null, !1), k.svg && (m = k.xOrigin, g = k.yOrigin, c.x -= k.xOffset, c.y -= k.yOffset, (w.transformOrigin || w.svgOrigin) && (d = {}, Le(e, re(w.transformOrigin), d, w.svgOrigin, w.smoothOrigin, !0), m = d.xOrigin, g = d.yOrigin, c.x -= d.xOffset - k.xOffset, c.y -= d.yOffset - k.yOffset), (m || g) && (y = je(F, !0), c.x -= m - (m * y[0] + g * y[2]), c.y -= g - (m * y[1] + g * y[3]))), j.body.removeChild(F), c.perspective || (c.perspective = k.perspective), null != w.xPercent && (c.xPercent = ae(w.xPercent, k.xPercent)), null != w.yPercent && (c.yPercent = ae(w.yPercent, k.yPercent));
            else if ("object" == typeof w) {
              if (c = {
                  scaleX: ae(null != w.scaleX ? w.scaleX : w.scale, k.scaleX),
                  scaleY: ae(null != w.scaleY ? w.scaleY : w.scale, k.scaleY),
                  scaleZ: ae(w.scaleZ, k.scaleZ),
                  x: ae(w.x, k.x),
                  y: ae(w.y, k.y),
                  z: ae(w.z, k.z),
                  xPercent: ae(w.xPercent, k.xPercent),
                  yPercent: ae(w.yPercent, k.yPercent),
                  perspective: ae(w.transformPerspective, k.perspective)
                }, null != (f = w.directionalRotation))
                if ("object" == typeof f)
                  for (u in f) w[u] = f[u];
                else w.rotation = f;
              "string" == typeof w.x && -1 !== w.x.indexOf("%") && (c.x = 0, c.xPercent = ae(w.x, k.xPercent)), "string" == typeof w.y && -1 !== w.y.indexOf("%") && (c.y = 0, c.yPercent = ae(w.y, k.yPercent)), c.rotation = oe("rotation" in w ? w.rotation : "shortRotation" in w ? w.shortRotation + "_short" : "rotationZ" in w ? w.rotationZ : k.rotation - k.skewY, k.rotation - k.skewY, "rotation", T), Ee && (c.rotationX = oe("rotationX" in w ? w.rotationX : "shortRotationX" in w ? w.shortRotationX + "_short" : k.rotationX || 0, k.rotationX, "rotationX", T), c.rotationY = oe("rotationY" in w ? w.rotationY : "shortRotationY" in w ? w.shortRotationY + "_short" : k.rotationY || 0, k.rotationY, "rotationY", T)), c.skewX = oe(w.skewX, k.skewX - k.skewY), (c.skewY = oe(w.skewY, k.skewY)) && (c.skewX += c.skewY, c.rotation += c.skewY)
            }
            for (Ee && null != w.force3D && (k.force3D = w.force3D, p = !0), k.skewType = w.skewType || k.skewType || a.defaultSkewType, (h = k.force3D || k.z || k.rotationX || k.rotationY || c.z || c.rotationX || c.rotationY || c.perspective) || null == w.scale || (c.scaleZ = 1); --b > -1;)((d = c[i = ke[b]] - k[i]) > 1e-6 || -1e-6 > d || null != w[i] || null != R[i]) && (p = !0, s = new ge(k, i, k[i], d, s), i in T && (s.e = T[i]), s.xs0 = 0, s.plugin = o, n._overwriteProps.push(s.n));
            return d = w.transformOrigin, k.svg && (d || w.svgOrigin) && (m = k.xOffset, g = k.yOffset, Le(e, re(d), c, w.svgOrigin, w.smoothOrigin), s = ye(k, "xOrigin", (v ? k : c).xOrigin, c.xOrigin, s, A), s = ye(k, "yOrigin", (v ? k : c).yOrigin, c.yOrigin, s, A), (m !== k.xOffset || g !== k.yOffset) && (s = ye(k, "xOffset", v ? m : k.xOffset, k.xOffset, s, A), s = ye(k, "yOffset", v ? g : k.yOffset, k.yOffset, s, A)), d = Ae ? null : "0px 0px"), (d || Ee && h && k.zOrigin) && (xe ? (p = !0, i = Ce, d = (d || K(e, i, r, !1, "50% 50%")) + "", (s = new ge(_, i, 0, 0, s, -1, A)).b = _[i], s.plugin = o, Ee ? (u = k.zOrigin, d = d.split(" "), k.zOrigin = (d.length > 2 && (0 === u || "0px" !== d[2]) ? parseFloat(d[2]) : u) || 0, s.xs0 = s.e = d[0] + " " + (d[1] || "50%") + " 0px", (s = new ge(k, "zOrigin", 0, 0, s, -1, s.n)).b = u, s.xs0 = s.e = k.zOrigin) : s.xs0 = s.e = d) : re(d + "", k)), p && (n._transformType = k.svg && Ae || !h && 3 !== this._transformType ? 2 : 3), s
          },
          prefix: !0
        }), we("boxShadow", {
          defaultValue: "0px 0px 0px 0px #999",
          prefix: !0,
          color: !0,
          multi: !0,
          keyword: "inset"
        }), we("borderRadius", {
          defaultValue: "0px",
          parser: function(e, t, i, s, a, o) {
            t = this.format(t);
            var l, c, u, d, h, p, f, m, g, y, v, _, b, w, T, A, k = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"],
              x = e.style;
            for (g = parseFloat(e.offsetWidth), y = parseFloat(e.offsetHeight), l = t.split(" "), c = 0; c < k.length; c++) this.p.indexOf("border") && (k[c] = V(k[c])), -1 !== (h = d = K(e, k[c], r, !1, "0px")).indexOf(" ") && (d = h.split(" "), h = d[0], d = d[1]), p = u = l[c], f = parseFloat(h), _ = h.substr((f + "").length), (b = "=" === p.charAt(1)) ? (m = parseInt(p.charAt(0) + "1", 10), p = p.substr(2), m *= parseFloat(p), v = p.substr((m + "").length - (0 > m ? 1 : 0)) || "") : (m = parseFloat(p), v = p.substr((m + "").length)), "" === v && (v = n[i] || _), v !== _ && (w = Z(e, "borderLeft", f, _), T = Z(e, "borderTop", f, _), "%" === v ? (h = w / g * 100 + "%", d = T / y * 100 + "%") : "em" === v ? (h = w / (A = Z(e, "borderLeft", 1, "em")) + "em", d = T / A + "em") : (h = w + "px", d = T + "px"), b && (p = parseFloat(h) + m + v, u = parseFloat(d) + m + v)), a = ve(x, k[c], h + " " + d, p + " " + u, !1, "0px", a);
            return a
          },
          prefix: !0,
          formatter: pe("0px 0px 0px 0px", !1, !0)
        }), we("borderBottomLeftRadius,borderBottomRightRadius,borderTopLeftRadius,borderTopRightRadius", {
          defaultValue: "0px",
          parser: function(e, t, i, n, s, a) {
            return ve(e.style, i, this.format(K(e, i, r, !1, "0px 0px")), this.format(t), !1, "0px", s)
          },
          prefix: !0,
          formatter: pe("0px 0px", !1, !0)
        }), we("backgroundPosition", {
          defaultValue: "0 0",
          parser: function(e, t, i, n, s, a) {
            var o, l, c, u, d, h, p = "background-position",
              f = r || X(e, null),
              g = this.format((f ? m ? f.getPropertyValue(p + "-x") + " " + f.getPropertyValue(p + "-y") : f.getPropertyValue(p) : e.currentStyle.backgroundPositionX + " " + e.currentStyle.backgroundPositionY) || "0 0"),
              y = this.format(t);
            if (-1 !== g.indexOf("%") != (-1 !== y.indexOf("%")) && y.split(",").length < 2 && ((h = K(e, "backgroundImage").replace(C, "")) && "none" !== h)) {
              for (o = g.split(" "), l = y.split(" "), H.setAttribute("src", h), c = 2; --c > -1;)(u = -1 !== (g = o[c]).indexOf("%")) !== (-1 !== l[c].indexOf("%")) && (d = 0 === c ? e.offsetWidth - H.width : e.offsetHeight - H.height, o[c] = u ? parseFloat(g) / 100 * d + "px" : parseFloat(g) / d * 100 + "%");
              g = o.join(" ")
            }
            return this.parseComplex(e.style, g, y, s, a)
          },
          formatter: re
        }), we("backgroundSize", {
          defaultValue: "0 0",
          formatter: re
        }), we("perspective", {
          defaultValue: "0px",
          prefix: !0
        }), we("perspectiveOrigin", {
          defaultValue: "50% 50%",
          prefix: !0
        }), we("transformStyle", {
          prefix: !0
        }), we("backfaceVisibility", {
          prefix: !0
        }), we("userSelect", {
          prefix: !0
        }), we("margin", {
          parser: fe("marginTop,marginRight,marginBottom,marginLeft")
        }), we("padding", {
          parser: fe("paddingTop,paddingRight,paddingBottom,paddingLeft")
        }), we("clip", {
          defaultValue: "rect(0px,0px,0px,0px)",
          parser: function(e, t, i, n, s, a) {
            var o, l, c;
            return 9 > m ? (l = e.currentStyle, c = 8 > m ? " " : ",", o = "rect(" + l.clipTop + c + l.clipRight + c + l.clipBottom + c + l.clipLeft + ")", t = this.format(t).split(",").join(c)) : (o = this.format(K(e, this.p, r, !1, this.dflt)), t = this.format(t)), this.parseComplex(e.style, o, t, s, a)
          }
        }), we("textShadow", {
          defaultValue: "0px 0px 0px #999",
          color: !0,
          multi: !0
        }), we("autoRound,strictUnits", {
          parser: function(e, t, i, n, r) {
            return r
          }
        }), we("border", {
          defaultValue: "0px solid #000",
          parser: function(e, t, i, n, s, a) {
            var o = K(e, "borderTopWidth", r, !1, "0px"),
              l = this.format(t).split(" "),
              c = l[0].replace(b, "");
            return "px" !== c && (o = parseFloat(o) / Z(e, "borderTopWidth", 1, c) + c), this.parseComplex(e.style, this.format(o + " " + K(e, "borderTopStyle", r, !1, "solid") + " " + K(e, "borderTopColor", r, !1, "#000")), l.join(" "), s, a)
          },
          color: !0,
          formatter: function(e) {
            var t = e.split(" ");
            return t[0] + " " + (t[1] || "solid") + " " + (e.match(he) || ["#000"])[0]
          }
        }), we("borderWidth", {
          parser: fe("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")
        }), we("float,cssFloat,styleFloat", {
          parser: function(e, t, i, n, r, s) {
            var a = e.style,
              o = "cssFloat" in a ? "cssFloat" : "styleFloat";
            return new ge(a, o, 0, 0, r, -1, i, !1, 0, a[o], t)
          }
        });
        var Ye = function(e) {
          var t, i = this.t,
            n = i.filter || K(this.data, "filter") || "",
            r = this.s + this.c * e | 0;
          100 === r && (-1 === n.indexOf("atrix(") && -1 === n.indexOf("radient(") && -1 === n.indexOf("oader(") ? (i.removeAttribute("filter"), t = !K(this.data, "filter")) : (i.filter = n.replace(A, ""), t = !0)), t || (this.xn1 && (i.filter = n = n || "alpha(opacity=" + r + ")"), -1 === n.indexOf("pacity") ? 0 === r && this.xn1 || (i.filter = n + " alpha(opacity=" + r + ")") : i.filter = n.replace(w, "opacity=" + r))
        };
        we("opacity,alpha,autoAlpha", {
          defaultValue: "1",
          parser: function(e, t, i, n, s, a) {
            var o = parseFloat(K(e, "opacity", r, !1, "1")),
              l = e.style,
              c = "autoAlpha" === i;
            return "string" == typeof t && "=" === t.charAt(1) && (t = ("-" === t.charAt(0) ? -1 : 1) * parseFloat(t.substr(2)) + o), c && 1 === o && "hidden" === K(e, "visibility", r) && 0 !== t && (o = 0), $ ? s = new ge(l, "opacity", o, t - o, s) : ((s = new ge(l, "opacity", 100 * o, 100 * (t - o), s)).xn1 = c ? 1 : 0, l.zoom = 1, s.type = 2, s.b = "alpha(opacity=" + s.s + ")", s.e = "alpha(opacity=" + (s.s + s.c) + ")", s.data = e, s.plugin = a, s.setRatio = Ye), c && ((s = new ge(l, "visibility", 0, 0, s, -1, null, !1, 0, 0 !== o ? "inherit" : "hidden", 0 === t ? "hidden" : "inherit")).xs0 = "inherit", n._overwriteProps.push(s.n), n._overwriteProps.push(i)), s
          }
        });
        var qe = function(e, t) {
            t && (e.removeProperty ? (("ms" === t.substr(0, 2) || "webkit" === t.substr(0, 6)) && (t = "-" + t), e.removeProperty(t.replace(x, "-$1").toLowerCase())) : e.removeAttribute(t))
          },
          $e = function(e) {
            if (this.t._gsClassPT = this, 1 === e || 0 === e) {
              this.t.setAttribute("class", 0 === e ? this.b : this.e);
              for (var t = this.data, i = this.t.style; t;) t.v ? i[t.p] = t.v : qe(i, t.p), t = t._next;
              1 === e && this.t._gsClassPT === this && (this.t._gsClassPT = null)
            } else this.t.getAttribute("class") !== this.e && this.t.setAttribute("class", this.e)
          };
        we("className", {
          parser: function(e, t, n, s, a, o, l) {
            var c, u, d, h, p, f = e.getAttribute("class") || "",
              m = e.style.cssText;
            if ((a = s._classNamePT = new ge(e, n, 0, 0, a, 2)).setRatio = $e, a.pr = -11, i = !0, a.b = f, u = J(e, r), d = e._gsClassPT) {
              for (h = {}, p = d.data; p;) h[p.p] = 1, p = p._next;
              d.setRatio(1)
            }
            return e._gsClassPT = a, a.e = "=" !== t.charAt(1) ? t : f.replace(new RegExp("(?:\\s|^)" + t.substr(2) + "(?![\\w-])"), "") + ("+" === t.charAt(0) ? " " + t.substr(2) : ""), e.setAttribute("class", a.e), c = ee(e, u, J(e), l, h), e.setAttribute("class", f), a.data = c.firstMPT, e.style.cssText = m, a.xfirst = s.parse(e, c.difs, a, o)
          }
        });
        var Be = function(e) {
          if ((1 === e || 0 === e) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data) {
            var t, i, n, r, s, a = this.t.style,
              o = l.transform.parse;
            if ("all" === this.e) a.cssText = "", r = !0;
            else
              for (n = (t = this.e.split(" ").join("").split(",")).length; --n > -1;) i = t[n], l[i] && (l[i].parse === o ? r = !0 : i = "transformOrigin" === i ? Ce : l[i].p), qe(a, i);
            r && (qe(a, xe), (s = this.t._gsTransform) && (s.svg && (this.t.removeAttribute("data-svg-origin"), this.t.removeAttribute("transform")), delete this.t._gsTransform))
          }
        };
        for (we("clearProps", {
            parser: function(e, t, n, r, s) {
              return (s = new ge(e, n, 0, 0, s, 2)).setRatio = Be, s.e = t, s.pr = -10, s.data = r._tween, i = !0, s
            }
          }), c = "bezier,throwProps,physicsProps,physics2D".split(","), _e = c.length; _e--;) Te(c[_e]);
        (c = a.prototype)._firstPT = c._lastParsedTransform = c._transform = null, c._onInitTween = function(e, t, o) {
          if (!e.nodeType) return !1;
          this._target = e, this._tween = o, this._vars = t, u = t.autoRound, i = !1, n = t.suffixMap || a.suffixMap, r = X(e, ""), s = this._overwriteProps;
          var c, p, m, g, y, v, _, b, w, A = e.style;
          if (d && "" === A.zIndex && (("auto" === (c = K(e, "zIndex", r)) || "" === c) && this._addLazySet(A, "zIndex", 0)), "string" == typeof t && (g = A.cssText, c = J(e, r), A.cssText = g + ";" + t, c = ee(e, c, J(e)).difs, !$ && T.test(t) && (c.opacity = parseFloat(RegExp.$1)), t = c, A.cssText = g), t.className ? this._firstPT = p = l.className.parse(e, t.className, "className", this, null, null, t) : this._firstPT = p = this.parse(e, t, null), this._transformType) {
            for (w = 3 === this._transformType, xe ? h && (d = !0, "" === A.zIndex && (("auto" === (_ = K(e, "zIndex", r)) || "" === _) && this._addLazySet(A, "zIndex", 0)), f && this._addLazySet(A, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (w ? "visible" : "hidden"))) : A.zoom = 1, m = p; m && m._next;) m = m._next;
            b = new ge(e, "transform", 0, 0, null, 2), this._linkCSSP(b, null, m), b.setRatio = xe ? He : Fe, b.data = this._transform || Ie(e, r, !0), b.tween = o, b.pr = -1, s.pop()
          }
          if (i) {
            for (; p;) {
              for (v = p._next, m = g; m && m.pr > p.pr;) m = m._next;
              (p._prev = m ? m._prev : y) ? p._prev._next = p: g = p, (p._next = m) ? m._prev = p : y = p, p = v
            }
            this._firstPT = g
          }
          return !0
        }, c.parse = function(e, t, i, s) {
          var a, o, c, d, h, p, f, m, g, y, v = e.style;
          for (a in t) p = t[a], (o = l[a]) ? i = o.parse(e, p, a, this, i, s, t) : (h = K(e, a, r) + "", g = "string" == typeof p, "color" === a || "fill" === a || "stroke" === a || -1 !== a.indexOf("Color") || g && k.test(p) ? (g || (p = ((p = ue(p)).length > 3 ? "rgba(" : "rgb(") + p.join(",") + ")"), i = ve(v, a, h, p, !0, "transparent", i, 0, s)) : g && N.test(p) ? i = ve(v, a, h, p, !0, null, i, 0, s) : (f = (c = parseFloat(h)) || 0 === c ? h.substr((c + "").length) : "", ("" === h || "auto" === h) && ("width" === a || "height" === a ? (c = ne(e, a, r), f = "px") : "left" === a || "top" === a ? (c = Q(e, a, r), f = "px") : (c = "opacity" !== a ? 0 : 1, f = "")), (y = g && "=" === p.charAt(1)) ? (d = parseInt(p.charAt(0) + "1", 10), p = p.substr(2), d *= parseFloat(p), m = p.replace(b, "")) : (d = parseFloat(p), m = g ? p.replace(b, "") : ""), "" === m && (m = a in n ? n[a] : f), p = d || 0 === d ? (y ? d + c : d) + m : t[a], f !== m && "" !== m && (d || 0 === d) && c && (c = Z(e, a, c, f), "%" === m ? (c /= Z(e, a, 100, "%") / 100, !0 !== t.strictUnits && (h = c + "%")) : "em" === m || "rem" === m || "vw" === m || "vh" === m ? c /= Z(e, a, 1, m) : "px" !== m && (d = Z(e, a, d, m), m = "px"), y && (d || 0 === d) && (p = d + c + m)), y && (d += c), !c && 0 !== c || !d && 0 !== d ? void 0 !== v[a] && (p || p + "" != "NaN" && null != p) ? (i = new ge(v, a, d || c || 0, 0, i, -1, a, !1, 0, h, p)).xs0 = "none" !== p || "display" !== a && -1 === a.indexOf("Style") ? p : h : W("invalid " + a + " tween value: " + t[a]) : (i = new ge(v, a, c, d - c, i, 0, a, !1 !== u && ("px" === m || "zIndex" === a), 0, h, p)).xs0 = m)), s && i && !i.plugin && (i.plugin = s);
          return i
        }, c.setRatio = function(e) {
          var t, i, n, r = this._firstPT;
          if (1 !== e || this._tween._time !== this._tween._duration && 0 !== this._tween._time)
            if (e || this._tween._time !== this._tween._duration && 0 !== this._tween._time || -1e-6 === this._tween._rawPrevTime)
              for (; r;) {
                if (t = r.c * e + r.s, r.r ? t = Math.round(t) : 1e-6 > t && t > -1e-6 && (t = 0), r.type)
                  if (1 === r.type)
                    if (2 === (n = r.l)) r.t[r.p] = r.xs0 + t + r.xs1 + r.xn1 + r.xs2;
                    else if (3 === n) r.t[r.p] = r.xs0 + t + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3;
                else if (4 === n) r.t[r.p] = r.xs0 + t + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3 + r.xn3 + r.xs4;
                else if (5 === n) r.t[r.p] = r.xs0 + t + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3 + r.xn3 + r.xs4 + r.xn4 + r.xs5;
                else {
                  for (i = r.xs0 + t + r.xs1, n = 1; n < r.l; n++) i += r["xn" + n] + r["xs" + (n + 1)];
                  r.t[r.p] = i
                } else -1 === r.type ? r.t[r.p] = r.xs0 : r.setRatio && r.setRatio(e);
                else r.t[r.p] = t + r.xs0;
                r = r._next
              } else
                for (; r;) 2 !== r.type ? r.t[r.p] = r.b : r.setRatio(e), r = r._next;
            else
              for (; r;) {
                if (2 !== r.type)
                  if (r.r && -1 !== r.type)
                    if (t = Math.round(r.s + r.c), r.type) {
                      if (1 === r.type) {
                        for (n = r.l, i = r.xs0 + t + r.xs1, n = 1; n < r.l; n++) i += r["xn" + n] + r["xs" + (n + 1)];
                        r.t[r.p] = i
                      }
                    } else r.t[r.p] = t + r.xs0;
                else r.t[r.p] = r.e;
                else r.setRatio(e);
                r = r._next
              }
        }, c._enableTransforms = function(e) {
          this._transform = this._transform || Ie(this._target, r, !0), this._transformType = this._transform.svg && Ae || !e && 3 !== this._transformType ? 2 : 3
        };
        var We = function(e) {
          this.t[this.p] = this.e, this.data._linkCSSP(this, this._next, null, !0)
        };
        c._addLazySet = function(e, t, i) {
          var n = this._firstPT = new ge(e, t, 0, 0, this._firstPT, 2);
          n.e = i, n.setRatio = We, n.data = this
        }, c._linkCSSP = function(e, t, i, n) {
          return e && (t && (t._prev = e), e._next && (e._next._prev = e._prev), e._prev ? e._prev._next = e._next : this._firstPT === e && (this._firstPT = e._next, n = !0), i ? i._next = e : n || null !== this._firstPT || (this._firstPT = e), e._next = t, e._prev = i), e
        }, c._kill = function(t) {
          var i, n, r, s = t;
          if (t.autoAlpha || t.alpha) {
            for (n in s = {}, t) s[n] = t[n];
            s.opacity = 1, s.autoAlpha && (s.visibility = 1)
          }
          return t.className && (i = this._classNamePT) && ((r = i.xfirst) && r._prev ? this._linkCSSP(r._prev, i._next, r._prev._prev) : r === this._firstPT && (this._firstPT = i._next), i._next && this._linkCSSP(i._next, i._next._next, r._prev), this._classNamePT = null), e.prototype._kill.call(this, s)
        };
        var Ue = function(e, t, i) {
          var n, r, s, a;
          if (e.slice)
            for (r = e.length; --r > -1;) Ue(e[r], t, i);
          else
            for (r = (n = e.childNodes).length; --r > -1;) a = (s = n[r]).type, s.style && (t.push(J(s)), i && i.push(s)), 1 !== a && 9 !== a && 11 !== a || !s.childNodes.length || Ue(s, t, i)
        };
        return a.cascadeTo = function(e, i, n) {
          var r, s, a, o, l = t.to(e, i, n),
            c = [l],
            u = [],
            d = [],
            h = [],
            p = t._internals.reservedProps;
          for (e = l._targets || l.target, Ue(e, u, h), l.render(i, !0, !0), Ue(e, d), l.render(0, !0, !0), l._enabled(!0), r = h.length; --r > -1;)
            if ((s = ee(h[r], u[r], d[r])).firstMPT) {
              for (a in s = s.difs, n) p[a] && (s[a] = n[a]);
              for (a in o = {}, s) o[a] = u[r][a];
              c.push(t.fromTo(h[r], i, o, s))
            } return c
        }, e.activate([a]), a
      }, !0),
      function() {
        var e = _gsScope._gsDefine.plugin({
            propName: "roundProps",
            version: "1.5",
            priority: -1,
            API: 2,
            init: function(e, t, i) {
              return this._tween = i, !0
            }
          }),
          t = function(e) {
            for (; e;) e.f || e.blob || (e.r = 1), e = e._next
          },
          i = e.prototype;
        i._onInitAllProps = function() {
          for (var e, i, n, r = this._tween, s = r.vars.roundProps.join ? r.vars.roundProps : r.vars.roundProps.split(","), a = s.length, o = {}, l = r._propLookup.roundProps; --a > -1;) o[s[a]] = 1;
          for (a = s.length; --a > -1;)
            for (e = s[a], i = r._firstPT; i;) n = i._next, i.pg ? i.t._roundProps(o, !0) : i.n === e && (2 === i.f && i.t ? t(i.t._firstPT) : (this._add(i.t, e, i.s, i.c), n && (n._prev = i._prev), i._prev ? i._prev._next = n : r._firstPT === i && (r._firstPT = n), i._next = i._prev = null, r._propLookup[e] = l)), i = n;
          return !1
        }, i._add = function(e, t, i, n) {
          this._addTween(e, t, i, i + n, t, !0), this._overwriteProps.push(t)
        }
      }(), _gsScope._gsDefine.plugin({
        propName: "attr",
        API: 2,
        version: "0.5.0",
        init: function(e, t, i) {
          var n;
          if ("function" != typeof e.setAttribute) return !1;
          for (n in t) this._addTween(e, "setAttribute", e.getAttribute(n) + "", t[n] + "", n, !1, n), this._overwriteProps.push(n);
          return !0
        }
      }), _gsScope._gsDefine.plugin({
        propName: "directionalRotation",
        version: "0.2.1",
        API: 2,
        init: function(e, t, i) {
          "object" != typeof t && (t = {
            rotation: t
          }), this.finals = {};
          var n, r, s, a, o, l = !0 === t.useRadians ? 2 * Math.PI : 360;
          for (n in t) "useRadians" !== n && (r = (o = (t[n] + "").split("_"))[0], s = parseFloat("function" != typeof e[n] ? e[n] : e[n.indexOf("set") || "function" != typeof e["get" + n.substr(3)] ? n : "get" + n.substr(3)]()), a = (this.finals[n] = "string" == typeof r && "=" === r.charAt(1) ? s + parseInt(r.charAt(0) + "1", 10) * Number(r.substr(2)) : Number(r) || 0) - s, o.length && (-1 !== (r = o.join("_")).indexOf("short") && ((a %= l) !== a % (l / 2) && (a = 0 > a ? a + l : a - l)), -1 !== r.indexOf("_cw") && 0 > a ? a = (a + 9999999999 * l) % l - (a / l | 0) * l : -1 !== r.indexOf("ccw") && a > 0 && (a = (a - 9999999999 * l) % l - (a / l | 0) * l)), (a > 1e-6 || -1e-6 > a) && (this._addTween(e, n, s, s + a, n), this._overwriteProps.push(n)));
          return !0
        },
        set: function(e) {
          var t;
          if (1 !== e) this._super.setRatio.call(this, e);
          else
            for (t = this._firstPT; t;) t.f ? t.t[t.p](this.finals[t.p]) : t.t[t.p] = this.finals[t.p], t = t._next
        }
      })._autoCSS = !0, _gsScope._gsDefine("easing.Back", ["easing.Ease"], function(e) {
        var t, i, n, r = _gsScope.GreenSockGlobals || _gsScope,
          s = r.com.greensock,
          a = 2 * Math.PI,
          o = Math.PI / 2,
          l = s._class,
          c = function(t, i) {
            var n = l("easing." + t, function() {}, !0),
              r = n.prototype = new e;
            return r.constructor = n, r.getRatio = i, n
          },
          u = e.register || function() {},
          d = function(e, t, i, n, r) {
            var s = l("easing." + e, {
              easeOut: new t,
              easeIn: new i,
              easeInOut: new n
            }, !0);
            return u(s, e), s
          },
          h = function(e, t, i) {
            this.t = e, this.v = t, i && (this.next = i, i.prev = this, this.c = i.v - t, this.gap = i.t - e)
          },
          p = function(t, i) {
            var n = l("easing." + t, function(e) {
                this._p1 = e || 0 === e ? e : 1.70158, this._p2 = 1.525 * this._p1
              }, !0),
              r = n.prototype = new e;
            return r.constructor = n, r.getRatio = i, r.config = function(e) {
              return new n(e)
            }, n
          },
          f = d("Back", p("BackOut", function(e) {
            return (e -= 1) * e * ((this._p1 + 1) * e + this._p1) + 1
          }), p("BackIn", function(e) {
            return e * e * ((this._p1 + 1) * e - this._p1)
          }), p("BackInOut", function(e) {
            return (e *= 2) < 1 ? .5 * e * e * ((this._p2 + 1) * e - this._p2) : .5 * ((e -= 2) * e * ((this._p2 + 1) * e + this._p2) + 2)
          })),
          m = l("easing.SlowMo", function(e, t, i) {
            t = t || 0 === t ? t : .7, null == e ? e = .7 : e > 1 && (e = 1), this._p = 1 !== e ? t : 0, this._p1 = (1 - e) / 2, this._p2 = e, this._p3 = this._p1 + this._p2, this._calcEnd = !0 === i
          }, !0),
          g = m.prototype = new e;
        return g.constructor = m, g.getRatio = function(e) {
          var t = e + (.5 - e) * this._p;
          return e < this._p1 ? this._calcEnd ? 1 - (e = 1 - e / this._p1) * e : t - (e = 1 - e / this._p1) * e * e * e * t : e > this._p3 ? this._calcEnd ? 1 - (e = (e - this._p3) / this._p1) * e : t + (e - t) * (e = (e - this._p3) / this._p1) * e * e * e : this._calcEnd ? 1 : t
        }, m.ease = new m(.7, .7), g.config = m.config = function(e, t, i) {
          return new m(e, t, i)
        }, (g = (t = l("easing.SteppedEase", function(e) {
          e = e || 1, this._p1 = 1 / e, this._p2 = e + 1
        }, !0)).prototype = new e).constructor = t, g.getRatio = function(e) {
          return 0 > e ? e = 0 : e >= 1 && (e = .999999999), (this._p2 * e >> 0) * this._p1
        }, g.config = t.config = function(e) {
          return new t(e)
        }, i = l("easing.RoughEase", function(t) {
          for (var i, n, r, s, a, o, l = (t = t || {}).taper || "none", c = [], u = 0, d = 0 | (t.points || 20), p = d, f = !1 !== t.randomize, m = !0 === t.clamp, g = t.template instanceof e ? t.template : null, y = "number" == typeof t.strength ? .4 * t.strength : .4; --p > -1;) i = f ? Math.random() : 1 / d * p, n = g ? g.getRatio(i) : i, "none" === l ? r = y : "out" === l ? r = (s = 1 - i) * s * y : "in" === l ? r = i * i * y : .5 > i ? r = (s = 2 * i) * s * .5 * y : r = (s = 2 * (1 - i)) * s * .5 * y, f ? n += Math.random() * r - .5 * r : p % 2 ? n += .5 * r : n -= .5 * r, m && (n > 1 ? n = 1 : 0 > n && (n = 0)), c[u++] = {
            x: i,
            y: n
          };
          for (c.sort(function(e, t) {
              return e.x - t.x
            }), o = new h(1, 1, null), p = d; --p > -1;) a = c[p], o = new h(a.x, a.y, o);
          this._prev = new h(0, 0, 0 !== o.t ? o : o.next)
        }, !0), (g = i.prototype = new e).constructor = i, g.getRatio = function(e) {
          var t = this._prev;
          if (e > t.t) {
            for (; t.next && e >= t.t;) t = t.next;
            t = t.prev
          } else
            for (; t.prev && e <= t.t;) t = t.prev;
          return this._prev = t, t.v + (e - t.t) / t.gap * t.c
        }, g.config = function(e) {
          return new i(e)
        }, i.ease = new i, d("Bounce", c("BounceOut", function(e) {
          return 1 / 2.75 > e ? 7.5625 * e * e : 2 / 2.75 > e ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : 2.5 / 2.75 > e ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
        }), c("BounceIn", function(e) {
          return (e = 1 - e) < 1 / 2.75 ? 1 - 7.5625 * e * e : 2 / 2.75 > e ? 1 - (7.5625 * (e -= 1.5 / 2.75) * e + .75) : 2.5 / 2.75 > e ? 1 - (7.5625 * (e -= 2.25 / 2.75) * e + .9375) : 1 - (7.5625 * (e -= 2.625 / 2.75) * e + .984375)
        }), c("BounceInOut", function(e) {
          var t = .5 > e;
          return e = 1 / 2.75 > (e = t ? 1 - 2 * e : 2 * e - 1) ? 7.5625 * e * e : 2 / 2.75 > e ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : 2.5 / 2.75 > e ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375, t ? .5 * (1 - e) : .5 * e + .5
        })), d("Circ", c("CircOut", function(e) {
          return Math.sqrt(1 - (e -= 1) * e)
        }), c("CircIn", function(e) {
          return -(Math.sqrt(1 - e * e) - 1)
        }), c("CircInOut", function(e) {
          return (e *= 2) < 1 ? -.5 * (Math.sqrt(1 - e * e) - 1) : .5 * (Math.sqrt(1 - (e -= 2) * e) + 1)
        })), d("Elastic", (n = function(t, i, n) {
          var r = l("easing." + t, function(e, t) {
              this._p1 = e >= 1 ? e : 1, this._p2 = (t || n) / (1 > e ? e : 1), this._p3 = this._p2 / a * (Math.asin(1 / this._p1) || 0), this._p2 = a / this._p2
            }, !0),
            s = r.prototype = new e;
          return s.constructor = r, s.getRatio = i, s.config = function(e, t) {
            return new r(e, t)
          }, r
        })("ElasticOut", function(e) {
          return this._p1 * Math.pow(2, -10 * e) * Math.sin((e - this._p3) * this._p2) + 1
        }, .3), n("ElasticIn", function(e) {
          return -this._p1 * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - this._p3) * this._p2)
        }, .3), n("ElasticInOut", function(e) {
          return (e *= 2) < 1 ? this._p1 * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - this._p3) * this._p2) * -.5 : this._p1 * Math.pow(2, -10 * (e -= 1)) * Math.sin((e - this._p3) * this._p2) * .5 + 1
        }, .45)), d("Expo", c("ExpoOut", function(e) {
          return 1 - Math.pow(2, -10 * e)
        }), c("ExpoIn", function(e) {
          return Math.pow(2, 10 * (e - 1)) - .001
        }), c("ExpoInOut", function(e) {
          return (e *= 2) < 1 ? .5 * Math.pow(2, 10 * (e - 1)) : .5 * (2 - Math.pow(2, -10 * (e - 1)))
        })), d("Sine", c("SineOut", function(e) {
          return Math.sin(e * o)
        }), c("SineIn", function(e) {
          return 1 - Math.cos(e * o)
        }), c("SineInOut", function(e) {
          return -.5 * (Math.cos(Math.PI * e) - 1)
        })), l("easing.EaseLookup", {
          find: function(t) {
            return e.map[t]
          }
        }, !0), u(r.SlowMo, "SlowMo", "ease,"), u(i, "RoughEase", "ease,"), u(t, "SteppedEase", "ease,"), f
      }, !0)
  }), _gsScope._gsDefine && _gsScope._gsQueue.pop()(),
  function(e, t) {
    "use strict";
    var i = {},
      n = e.GreenSockGlobals = e.GreenSockGlobals || e;
    if (!n.TweenLite) {
      var r, s, a, o, l, c = function(e) {
          var t, i = e.split("."),
            r = n;
          for (t = 0; t < i.length; t++) r[i[t]] = r = r[i[t]] || {};
          return r
        },
        u = c("com.greensock"),
        d = 1e-10,
        h = function(e) {
          var t, i = [],
            n = e.length;
          for (t = 0; t !== n; i.push(e[t++]));
          return i
        },
        p = function() {},
        f = function() {
          var e = Object.prototype.toString,
            t = e.call([]);
          return function(i) {
            return null != i && (i instanceof Array || "object" == typeof i && !!i.push && e.call(i) === t)
          }
        }(),
        m = {},
        g = function(r, s, a, o) {
          this.sc = m[r] ? m[r].sc : [], m[r] = this, this.gsClass = null, this.func = a;
          var l = [];
          this.check = function(u) {
            for (var d, h, p, f, y, v = s.length, _ = v; --v > -1;)(d = m[s[v]] || new g(s[v], [])).gsClass ? (l[v] = d.gsClass, _--) : u && d.sc.push(this);
            if (0 === _ && a) {
              if (p = (h = ("com.greensock." + r).split(".")).pop(), f = c(h.join("."))[p] = this.gsClass = a.apply(a, l), o)
                if (n[p] = f, !(y = "undefined" != typeof module && module.exports) && "function" == typeof define && define.amd) define((e.GreenSockAMDPath ? e.GreenSockAMDPath + "/" : "") + r.split(".").pop(), [], function() {
                  return f
                });
                else if (y)
                if (r === t)
                  for (v in module.exports = i[t] = f, i) f[v] = i[v];
                else i[t] && (i[t][p] = f);
              for (v = 0; v < this.sc.length; v++) this.sc[v].check()
            }
          }, this.check(!0)
        },
        y = e._gsDefine = function(e, t, i, n) {
          return new g(e, t, i, n)
        },
        v = u._class = function(e, t, i) {
          return t = t || function() {}, y(e, [], function() {
            return t
          }, i), t
        };
      y.globals = n;
      var _ = [0, 0, 1, 1],
        b = [],
        w = v("easing.Ease", function(e, t, i, n) {
          this._func = e, this._type = i || 0, this._power = n || 0, this._params = t ? _.concat(t) : _
        }, !0),
        T = w.map = {},
        A = w.register = function(e, t, i, n) {
          for (var r, s, a, o, l = t.split(","), c = l.length, d = (i || "easeIn,easeOut,easeInOut").split(","); --c > -1;)
            for (s = l[c], r = n ? v("easing." + s, null, !0) : u.easing[s] || {}, a = d.length; --a > -1;) o = d[a], T[s + "." + o] = T[o + s] = r[o] = e.getRatio ? e : e[o] || new e
        };
      for ((a = w.prototype)._calcEnd = !1, a.getRatio = function(e) {
          if (this._func) return this._params[0] = e, this._func.apply(null, this._params);
          var t = this._type,
            i = this._power,
            n = 1 === t ? 1 - e : 2 === t ? e : .5 > e ? 2 * e : 2 * (1 - e);
          return 1 === i ? n *= n : 2 === i ? n *= n * n : 3 === i ? n *= n * n * n : 4 === i && (n *= n * n * n * n), 1 === t ? 1 - n : 2 === t ? n : .5 > e ? n / 2 : 1 - n / 2
        }, s = (r = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"]).length; --s > -1;) a = r[s] + ",Power" + s, A(new w(null, null, 1, s), a, "easeOut", !0), A(new w(null, null, 2, s), a, "easeIn" + (0 === s ? ",easeNone" : "")), A(new w(null, null, 3, s), a, "easeInOut");
      T.linear = u.easing.Linear.easeIn, T.swing = u.easing.Quad.easeInOut;
      var k = v("events.EventDispatcher", function(e) {
        this._listeners = {}, this._eventTarget = e || this
      });
      (a = k.prototype).addEventListener = function(e, t, i, n, r) {
        r = r || 0;
        var s, a, c = this._listeners[e],
          u = 0;
        for (this !== o || l || o.wake(), null == c && (this._listeners[e] = c = []), a = c.length; --a > -1;)(s = c[a]).c === t && s.s === i ? c.splice(a, 1) : 0 === u && s.pr < r && (u = a + 1);
        c.splice(u, 0, {
          c: t,
          s: i,
          up: n,
          pr: r
        })
      }, a.removeEventListener = function(e, t) {
        var i, n = this._listeners[e];
        if (n)
          for (i = n.length; --i > -1;)
            if (n[i].c === t) return void n.splice(i, 1)
      }, a.dispatchEvent = function(e) {
        var t, i, n, r = this._listeners[e];
        if (r)
          for (t = r.length, i = this._eventTarget; --t > -1;)(n = r[t]) && (n.up ? n.c.call(n.s || i, {
            type: e,
            target: i
          }) : n.c.call(n.s || i))
      };
      var x = e.requestAnimationFrame,
        S = e.cancelAnimationFrame,
        C = Date.now || function() {
          return (new Date).getTime()
        },
        E = C();
      for (s = (r = ["ms", "moz", "webkit", "o"]).length; --s > -1 && !x;) x = e[r[s] + "RequestAnimationFrame"], S = e[r[s] + "CancelAnimationFrame"] || e[r[s] + "CancelRequestAnimationFrame"];
      v("Ticker", function(e, t) {
        var i, n, r, s, a, c = this,
          u = C(),
          h = !(!1 === t || !x) && "auto",
          f = 500,
          m = 33,
          g = function(e) {
            var t, o, l = C() - E;
            l > f && (u += l - m), E += l, c.time = (E - u) / 1e3, t = c.time - a, (!i || t > 0 || !0 === e) && (c.frame++, a += t + (t >= s ? .004 : s - t), o = !0), !0 !== e && (r = n(g)), o && c.dispatchEvent("tick")
          };
        k.call(c), c.time = c.frame = 0, c.tick = function() {
          g(!0)
        }, c.lagSmoothing = function(e, t) {
          f = e || 1 / d, m = Math.min(t, f, 0)
        }, c.sleep = function() {
          null != r && (h && S ? S(r) : clearTimeout(r), n = p, r = null, c === o && (l = !1))
        }, c.wake = function(e) {
          null !== r ? c.sleep() : e ? u += -E + (E = C()) : c.frame > 10 && (E = C() - f + 5), n = 0 === i ? p : h && x ? x : function(e) {
            return setTimeout(e, 1e3 * (a - c.time) + 1 | 0)
          }, c === o && (l = !0), g(2)
        }, c.fps = function(e) {
          return arguments.length ? (s = 1 / ((i = e) || 60), a = this.time + s, void c.wake()) : i
        }, c.useRAF = function(e) {
          return arguments.length ? (c.sleep(), h = e, void c.fps(i)) : h
        }, c.fps(e), setTimeout(function() {
          "auto" === h && c.frame < 5 && "hidden" !== document.visibilityState && c.useRAF(!1)
        }, 1500)
      }), (a = u.Ticker.prototype = new u.events.EventDispatcher).constructor = u.Ticker;
      var P = v("core.Animation", function(e, t) {
        if (this.vars = t = t || {}, this._duration = this._totalDuration = e || 0, this._delay = Number(t.delay) || 0, this._timeScale = 1, this._active = !0 === t.immediateRender, this.data = t.data, this._reversed = !0 === t.reversed, G) {
          l || o.wake();
          var i = this.vars.useFrames ? U : G;
          i.add(this, i._time), this.vars.paused && this.paused(!0)
        }
      });
      o = P.ticker = new u.Ticker, (a = P.prototype)._dirty = a._gc = a._initted = a._paused = !1, a._totalTime = a._time = 0, a._rawPrevTime = -1, a._next = a._last = a._onUpdate = a._timeline = a.timeline = null, a._paused = !1;
      var M = function() {
        l && C() - E > 2e3 && o.wake(), setTimeout(M, 2e3)
      };
      M(), a.play = function(e, t) {
        return null != e && this.seek(e, t), this.reversed(!1).paused(!1)
      }, a.pause = function(e, t) {
        return null != e && this.seek(e, t), this.paused(!0)
      }, a.resume = function(e, t) {
        return null != e && this.seek(e, t), this.paused(!1)
      }, a.seek = function(e, t) {
        return this.totalTime(Number(e), !1 !== t)
      }, a.restart = function(e, t) {
        return this.reversed(!1).paused(!1).totalTime(e ? -this._delay : 0, !1 !== t, !0)
      }, a.reverse = function(e, t) {
        return null != e && this.seek(e || this.totalDuration(), t), this.reversed(!0).paused(!1)
      }, a.render = function(e, t, i) {}, a.invalidate = function() {
        return this._time = this._totalTime = 0, this._initted = this._gc = !1, this._rawPrevTime = -1, (this._gc || !this.timeline) && this._enabled(!0), this
      }, a.isActive = function() {
        var e, t = this._timeline,
          i = this._startTime;
        return !t || !this._gc && !this._paused && t.isActive() && (e = t.rawTime()) >= i && e < i + this.totalDuration() / this._timeScale
      }, a._enabled = function(e, t) {
        return l || o.wake(), this._gc = !e, this._active = this.isActive(), !0 !== t && (e && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !e && this.timeline && this._timeline._remove(this, !0)), !1
      }, a._kill = function(e, t) {
        return this._enabled(!1, !1)
      }, a.kill = function(e, t) {
        return this._kill(e, t), this
      }, a._uncache = function(e) {
        for (var t = e ? this : this.timeline; t;) t._dirty = !0, t = t.timeline;
        return this
      }, a._swapSelfInParams = function(e) {
        for (var t = e.length, i = e.concat(); --t > -1;) "{self}" === e[t] && (i[t] = this);
        return i
      }, a._callback = function(e) {
        var t = this.vars;
        t[e].apply(t[e + "Scope"] || t.callbackScope || this, t[e + "Params"] || b)
      }, a.eventCallback = function(e, t, i, n) {
        if ("on" === (e || "").substr(0, 2)) {
          var r = this.vars;
          if (1 === arguments.length) return r[e];
          null == t ? delete r[e] : (r[e] = t, r[e + "Params"] = f(i) && -1 !== i.join("").indexOf("{self}") ? this._swapSelfInParams(i) : i, r[e + "Scope"] = n), "onUpdate" === e && (this._onUpdate = t)
        }
        return this
      }, a.delay = function(e) {
        return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + e - this._delay), this._delay = e, this) : this._delay
      }, a.duration = function(e) {
        return arguments.length ? (this._duration = this._totalDuration = e, this._uncache(!0), this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== e && this.totalTime(this._totalTime * (e / this._duration), !0), this) : (this._dirty = !1, this._duration)
      }, a.totalDuration = function(e) {
        return this._dirty = !1, arguments.length ? this.duration(e) : this._totalDuration
      }, a.time = function(e, t) {
        return arguments.length ? (this._dirty && this.totalDuration(), this.totalTime(e > this._duration ? this._duration : e, t)) : this._time
      }, a.totalTime = function(e, t, i) {
        if (l || o.wake(), !arguments.length) return this._totalTime;
        if (this._timeline) {
          if (0 > e && !i && (e += this.totalDuration()), this._timeline.smoothChildTiming) {
            this._dirty && this.totalDuration();
            var n = this._totalDuration,
              r = this._timeline;
            if (e > n && !i && (e = n), this._startTime = (this._paused ? this._pauseTime : r._time) - (this._reversed ? n - e : e) / this._timeScale, r._dirty || this._uncache(!1), r._timeline)
              for (; r._timeline;) r._timeline._time !== (r._startTime + r._totalTime) / r._timeScale && r.totalTime(r._totalTime, !0), r = r._timeline
          }
          this._gc && this._enabled(!0, !1), (this._totalTime !== e || 0 === this._duration) && (L.length && X(), this.render(e, t, !1), L.length && X())
        }
        return this
      }, a.progress = a.totalProgress = function(e, t) {
        var i = this.duration();
        return arguments.length ? this.totalTime(i * e, t) : i ? this._time / i : this.ratio
      }, a.startTime = function(e) {
        return arguments.length ? (e !== this._startTime && (this._startTime = e, this.timeline && this.timeline._sortChildren && this.timeline.add(this, e - this._delay)), this) : this._startTime
      }, a.endTime = function(e) {
        return this._startTime + (0 != e ? this.totalDuration() : this.duration()) / this._timeScale
      }, a.timeScale = function(e) {
        if (!arguments.length) return this._timeScale;
        if (e = e || d, this._timeline && this._timeline.smoothChildTiming) {
          var t = this._pauseTime,
            i = t || 0 === t ? t : this._timeline.totalTime();
          this._startTime = i - (i - this._startTime) * this._timeScale / e
        }
        return this._timeScale = e, this._uncache(!1)
      }, a.reversed = function(e) {
        return arguments.length ? (e != this._reversed && (this._reversed = e, this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)), this) : this._reversed
      }, a.paused = function(e) {
        if (!arguments.length) return this._paused;
        var t, i, n = this._timeline;
        return e != this._paused && n && (l || e || o.wake(), i = (t = n.rawTime()) - this._pauseTime, !e && n.smoothChildTiming && (this._startTime += i, this._uncache(!1)), this._pauseTime = e ? t : null, this._paused = e, this._active = this.isActive(), !e && 0 !== i && this._initted && this.duration() && (t = n.smoothChildTiming ? this._totalTime : (t - this._startTime) / this._timeScale, this.render(t, t === this._totalTime, !0))), this._gc && !e && this._enabled(!0, !1), this
      };
      var O = v("core.SimpleTimeline", function(e) {
        P.call(this, 0, e), this.autoRemoveChildren = this.smoothChildTiming = !0
      });
      (a = O.prototype = new P).constructor = O, a.kill()._gc = !1, a._first = a._last = a._recent = null, a._sortChildren = !1, a.add = a.insert = function(e, t, i, n) {
        var r, s;
        if (e._startTime = Number(t || 0) + e._delay, e._paused && this !== e._timeline && (e._pauseTime = e._startTime + (this.rawTime() - e._startTime) / e._timeScale), e.timeline && e.timeline._remove(e, !0), e.timeline = e._timeline = this, e._gc && e._enabled(!0, !0), r = this._last, this._sortChildren)
          for (s = e._startTime; r && r._startTime > s;) r = r._prev;
        return r ? (e._next = r._next, r._next = e) : (e._next = this._first, this._first = e), e._next ? e._next._prev = e : this._last = e, e._prev = r, this._recent = e, this._timeline && this._uncache(!0), this
      }, a._remove = function(e, t) {
        return e.timeline === this && (t || e._enabled(!1, !0), e._prev ? e._prev._next = e._next : this._first === e && (this._first = e._next), e._next ? e._next._prev = e._prev : this._last === e && (this._last = e._prev), e._next = e._prev = e.timeline = null, e === this._recent && (this._recent = this._last), this._timeline && this._uncache(!0)), this
      }, a.render = function(e, t, i) {
        var n, r = this._first;
        for (this._totalTime = this._time = this._rawPrevTime = e; r;) n = r._next, (r._active || e >= r._startTime && !r._paused) && (r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (e - r._startTime) * r._timeScale, t, i) : r.render((e - r._startTime) * r._timeScale, t, i)), r = n
      }, a.rawTime = function() {
        return l || o.wake(), this._totalTime
      };
      var D = v("TweenLite", function(t, i, n) {
          if (P.call(this, i, n), this.render = D.prototype.render, null == t) throw "Cannot tween a null target.";
          this.target = t = "string" != typeof t ? t : D.selector(t) || t;
          var r, s, a, o = t.jquery || t.length && t !== e && t[0] && (t[0] === e || t[0].nodeType && t[0].style && !t.nodeType),
            l = this.vars.overwrite;
          if (this._overwrite = l = null == l ? W[D.defaultOverwrite] : "number" == typeof l ? l >> 0 : W[l], (o || t instanceof Array || t.push && f(t)) && "number" != typeof t[0])
            for (this._targets = a = h(t), this._propLookup = [], this._siblings = [], r = 0; r < a.length; r++)(s = a[r]) ? "string" != typeof s ? s.length && s !== e && s[0] && (s[0] === e || s[0].nodeType && s[0].style && !s.nodeType) ? (a.splice(r--, 1), this._targets = a = a.concat(h(s))) : (this._siblings[r] = K(s, this, !1), 1 === l && this._siblings[r].length > 1 && Q(s, this, null, 1, this._siblings[r])) : "string" == typeof(s = a[r--] = D.selector(s)) && a.splice(r + 1, 1) : a.splice(r--, 1);
          else this._propLookup = {}, this._siblings = K(t, this, !1), 1 === l && this._siblings.length > 1 && Q(t, this, null, 1, this._siblings);
          (this.vars.immediateRender || 0 === i && 0 === this._delay && !1 !== this.vars.immediateRender) && (this._time = -d, this.render(Math.min(0, -this._delay)))
        }, !0),
        N = function(t) {
          return t && t.length && t !== e && t[0] && (t[0] === e || t[0].nodeType && t[0].style && !t.nodeType)
        };
      (a = D.prototype = new P).constructor = D, a.kill()._gc = !1, a.ratio = 0, a._firstPT = a._targets = a._overwrittenProps = a._startAt = null, a._notifyPluginsOfEnabled = a._lazy = !1, D.version = "1.18.5", D.defaultEase = a._ease = new w(null, null, 1, 1), D.defaultOverwrite = "auto", D.ticker = o, D.autoSleep = 120, D.lagSmoothing = function(e, t) {
        o.lagSmoothing(e, t)
      }, D.selector = e.$ || e.jQuery || function(t) {
        var i = e.$ || e.jQuery;
        return i ? (D.selector = i, i(t)) : "undefined" == typeof document ? t : document.querySelectorAll ? document.querySelectorAll(t) : document.getElementById("#" === t.charAt(0) ? t.substr(1) : t)
      };
      var L = [],
        z = {},
        R = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,
        j = function(e) {
          for (var t, i = this._firstPT; i;) t = i.blob ? e ? this.join("") : this.start : i.c * e + i.s, i.r ? t = Math.round(t) : 1e-6 > t && t > -1e-6 && (t = 0), i.f ? i.fp ? i.t[i.p](i.fp, t) : i.t[i.p](t) : i.t[i.p] = t, i = i._next
        },
        I = function(e, t, i, n) {
          var r, s, a, o, l, c, u, d = [e, t],
            h = 0,
            p = "",
            f = 0;
          for (d.start = e, i && (i(d), e = d[0], t = d[1]), d.length = 0, r = e.match(R) || [], s = t.match(R) || [], n && (n._next = null, n.blob = 1, d._firstPT = n), l = s.length, o = 0; l > o; o++) u = s[o], p += (c = t.substr(h, t.indexOf(u, h) - h)) || !o ? c : ",", h += c.length, f ? f = (f + 1) % 5 : "rgba(" === c.substr(-5) && (f = 1), u === r[o] || r.length <= o ? p += u : (p && (d.push(p), p = ""), a = parseFloat(r[o]), d.push(a), d._firstPT = {
            _next: d._firstPT,
            t: d,
            p: d.length - 1,
            s: a,
            c: ("=" === u.charAt(1) ? parseInt(u.charAt(0) + "1", 10) * parseFloat(u.substr(2)) : parseFloat(u) - a) || 0,
            f: 0,
            r: f && 4 > f
          }), h += u.length;
          return (p += t.substr(h)) && d.push(p), d.setRatio = j, d
        },
        F = function(e, t, i, n, r, s, a, o) {
          var l, c = "get" === i ? e[t] : i,
            u = typeof e[t],
            d = "string" == typeof n && "=" === n.charAt(1),
            h = {
              t: e,
              p: t,
              s: c,
              f: "function" === u,
              pg: 0,
              n: r || t,
              r: s,
              pr: 0,
              c: d ? parseInt(n.charAt(0) + "1", 10) * parseFloat(n.substr(2)) : parseFloat(n) - c || 0
            };
          return "number" !== u && ("function" === u && "get" === i && (l = t.indexOf("set") || "function" != typeof e["get" + t.substr(3)] ? t : "get" + t.substr(3), h.s = c = a ? e[l](a) : e[l]()), "string" == typeof c && (a || isNaN(c)) ? (h.fp = a, h = {
            t: I(c, n, o || D.defaultStringFilter, h),
            p: "setRatio",
            s: 0,
            c: 1,
            f: 2,
            pg: 0,
            n: r || t,
            pr: 0
          }) : d || (h.s = parseFloat(c), h.c = parseFloat(n) - h.s || 0)), h.c ? ((h._next = this._firstPT) && (h._next._prev = h), this._firstPT = h, h) : void 0
        },
        H = D._internals = {
          isArray: f,
          isSelector: N,
          lazyTweens: L,
          blobDif: I
        },
        Y = D._plugins = {},
        q = H.tweenLookup = {},
        $ = 0,
        B = H.reservedProps = {
          ease: 1,
          delay: 1,
          overwrite: 1,
          onComplete: 1,
          onCompleteParams: 1,
          onCompleteScope: 1,
          useFrames: 1,
          runBackwards: 1,
          startAt: 1,
          onUpdate: 1,
          onUpdateParams: 1,
          onUpdateScope: 1,
          onStart: 1,
          onStartParams: 1,
          onStartScope: 1,
          onReverseComplete: 1,
          onReverseCompleteParams: 1,
          onReverseCompleteScope: 1,
          onRepeat: 1,
          onRepeatParams: 1,
          onRepeatScope: 1,
          easeParams: 1,
          yoyo: 1,
          immediateRender: 1,
          repeat: 1,
          repeatDelay: 1,
          data: 1,
          paused: 1,
          reversed: 1,
          autoCSS: 1,
          lazy: 1,
          onOverwrite: 1,
          callbackScope: 1,
          stringFilter: 1,
          id: 1
        },
        W = {
          none: 0,
          all: 1,
          auto: 2,
          concurrent: 3,
          allOnStart: 4,
          preexisting: 5,
          true: 1,
          false: 0
        },
        U = P._rootFramesTimeline = new O,
        G = P._rootTimeline = new O,
        V = 30,
        X = H.lazyRender = function() {
          var e, t = L.length;
          for (z = {}; --t > -1;)(e = L[t]) && !1 !== e._lazy && (e.render(e._lazy[0], e._lazy[1], !0), e._lazy = !1);
          L.length = 0
        };
      G._startTime = o.time, U._startTime = o.frame, G._active = U._active = !0, setTimeout(X, 1), P._updateRoot = D.render = function() {
        var e, t, i;
        if (L.length && X(), G.render((o.time - G._startTime) * G._timeScale, !1, !1), U.render((o.frame - U._startTime) * U._timeScale, !1, !1), L.length && X(), o.frame >= V) {
          for (i in V = o.frame + (parseInt(D.autoSleep, 10) || 120), q) {
            for (e = (t = q[i].tweens).length; --e > -1;) t[e]._gc && t.splice(e, 1);
            0 === t.length && delete q[i]
          }
          if ((!(i = G._first) || i._paused) && D.autoSleep && !U._first && 1 === o._listeners.tick.length) {
            for (; i && i._paused;) i = i._next;
            i || o.sleep()
          }
        }
      }, o.addEventListener("tick", P._updateRoot);
      var K = function(e, t, i) {
          var n, r, s = e._gsTweenID;
          if (q[s || (e._gsTweenID = s = "t" + $++)] || (q[s] = {
              target: e,
              tweens: []
            }), t && ((n = q[s].tweens)[r = n.length] = t, i))
            for (; --r > -1;) n[r] === t && n.splice(r, 1);
          return q[s].tweens
        },
        Z = function(e, t, i, n) {
          var r, s, a = e.vars.onOverwrite;
          return a && (r = a(e, t, i, n)), (a = D.onOverwrite) && (s = a(e, t, i, n)), !1 !== r && !1 !== s
        },
        Q = function(e, t, i, n, r) {
          var s, a, o, l;
          if (1 === n || n >= 4) {
            for (l = r.length, s = 0; l > s; s++)
              if ((o = r[s]) !== t) o._gc || o._kill(null, e, t) && (a = !0);
              else if (5 === n) break;
            return a
          }
          var c, u = t._startTime + d,
            h = [],
            p = 0,
            f = 0 === t._duration;
          for (s = r.length; --s > -1;)(o = r[s]) === t || o._gc || o._paused || (o._timeline !== t._timeline ? (c = c || J(t, 0, f), 0 === J(o, c, f) && (h[p++] = o)) : o._startTime <= u && o._startTime + o.totalDuration() / o._timeScale > u && ((f || !o._initted) && u - o._startTime <= 2e-10 || (h[p++] = o)));
          for (s = p; --s > -1;)
            if (o = h[s], 2 === n && o._kill(i, e, t) && (a = !0), 2 !== n || !o._firstPT && o._initted) {
              if (2 !== n && !Z(o, t)) continue;
              o._enabled(!1, !1) && (a = !0)
            } return a
        },
        J = function(e, t, i) {
          for (var n = e._timeline, r = n._timeScale, s = e._startTime; n._timeline;) {
            if (s += n._startTime, r *= n._timeScale, n._paused) return -100;
            n = n._timeline
          }
          return (s /= r) > t ? s - t : i && s === t || !e._initted && 2 * d > s - t ? d : (s += e.totalDuration() / e._timeScale / r) > t + d ? 0 : s - t - d
        };
      a._init = function() {
        var e, t, i, n, r, s = this.vars,
          a = this._overwrittenProps,
          o = this._duration,
          l = !!s.immediateRender,
          c = s.ease;
        if (s.startAt) {
          for (n in this._startAt && (this._startAt.render(-1, !0), this._startAt.kill()), r = {}, s.startAt) r[n] = s.startAt[n];
          if (r.overwrite = !1, r.immediateRender = !0, r.lazy = l && !1 !== s.lazy, r.startAt = r.delay = null, this._startAt = D.to(this.target, 0, r), l)
            if (this._time > 0) this._startAt = null;
            else if (0 !== o) return
        } else if (s.runBackwards && 0 !== o)
          if (this._startAt) this._startAt.render(-1, !0), this._startAt.kill(), this._startAt = null;
          else {
            for (n in 0 !== this._time && (l = !1), i = {}, s) B[n] && "autoCSS" !== n || (i[n] = s[n]);
            if (i.overwrite = 0, i.data = "isFromStart", i.lazy = l && !1 !== s.lazy, i.immediateRender = l, this._startAt = D.to(this.target, 0, i), l) {
              if (0 === this._time) return
            } else this._startAt._init(), this._startAt._enabled(!1), this.vars.immediateRender && (this._startAt = null)
          } if (this._ease = c = c ? c instanceof w ? c : "function" == typeof c ? new w(c, s.easeParams) : T[c] || D.defaultEase : D.defaultEase, s.easeParams instanceof Array && c.config && (this._ease = c.config.apply(c, s.easeParams)), this._easeType = this._ease._type, this._easePower = this._ease._power, this._firstPT = null, this._targets)
          for (e = this._targets.length; --e > -1;) this._initProps(this._targets[e], this._propLookup[e] = {}, this._siblings[e], a ? a[e] : null) && (t = !0);
        else t = this._initProps(this.target, this._propLookup, this._siblings, a);
        if (t && D._onPluginEvent("_onInitAllProps", this), a && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)), s.runBackwards)
          for (i = this._firstPT; i;) i.s += i.c, i.c = -i.c, i = i._next;
        this._onUpdate = s.onUpdate, this._initted = !0
      }, a._initProps = function(t, i, n, r) {
        var s, a, o, l, c, u;
        if (null == t) return !1;
        for (s in z[t._gsTweenID] && X(), this.vars.css || t.style && t !== e && t.nodeType && Y.css && !1 !== this.vars.autoCSS && function(e, t) {
            var i, n = {};
            for (i in e) B[i] || i in t && "transform" !== i && "x" !== i && "y" !== i && "width" !== i && "height" !== i && "className" !== i && "border" !== i || !(!Y[i] || Y[i] && Y[i]._autoCSS) || (n[i] = e[i], delete e[i]);
            e.css = n
          }(this.vars, t), this.vars)
          if (u = this.vars[s], B[s]) u && (u instanceof Array || u.push && f(u)) && -1 !== u.join("").indexOf("{self}") && (this.vars[s] = u = this._swapSelfInParams(u, this));
          else if (Y[s] && (l = new Y[s])._onInitTween(t, this.vars[s], this)) {
          for (this._firstPT = c = {
              _next: this._firstPT,
              t: l,
              p: "setRatio",
              s: 0,
              c: 1,
              f: 1,
              n: s,
              pg: 1,
              pr: l._priority
            }, a = l._overwriteProps.length; --a > -1;) i[l._overwriteProps[a]] = this._firstPT;
          (l._priority || l._onInitAllProps) && (o = !0), (l._onDisable || l._onEnable) && (this._notifyPluginsOfEnabled = !0), c._next && (c._next._prev = c)
        } else i[s] = F.call(this, t, s, "get", u, s, 0, null, this.vars.stringFilter);
        return r && this._kill(r, t) ? this._initProps(t, i, n, r) : this._overwrite > 1 && this._firstPT && n.length > 1 && Q(t, this, i, this._overwrite, n) ? (this._kill(i, t), this._initProps(t, i, n, r)) : (this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration) && (z[t._gsTweenID] = !0), o)
      }, a.render = function(e, t, i) {
        var n, r, s, a, o = this._time,
          l = this._duration,
          c = this._rawPrevTime;
        if (e >= l - 1e-7) this._totalTime = this._time = l, this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1, this._reversed || (n = !0, r = "onComplete", i = i || this._timeline.autoRemoveChildren), 0 === l && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (e = 0), (0 > c || 0 >= e && e >= -1e-7 || c === d && "isPause" !== this.data) && c !== e && (i = !0, c > d && (r = "onReverseComplete")), this._rawPrevTime = a = !t || e || c === e ? e : d);
        else if (1e-7 > e) this._totalTime = this._time = 0, this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0, (0 !== o || 0 === l && c > 0) && (r = "onReverseComplete", n = this._reversed), 0 > e && (this._active = !1, 0 === l && (this._initted || !this.vars.lazy || i) && (c >= 0 && (c !== d || "isPause" !== this.data) && (i = !0), this._rawPrevTime = a = !t || e || c === e ? e : d)), this._initted || (i = !0);
        else if (this._totalTime = this._time = e, this._easeType) {
          var u = e / l,
            h = this._easeType,
            p = this._easePower;
          (1 === h || 3 === h && u >= .5) && (u = 1 - u), 3 === h && (u *= 2), 1 === p ? u *= u : 2 === p ? u *= u * u : 3 === p ? u *= u * u * u : 4 === p && (u *= u * u * u * u), this.ratio = 1 === h ? 1 - u : 2 === h ? u : .5 > e / l ? u / 2 : 1 - u / 2
        } else this.ratio = this._ease.getRatio(e / l);
        if (this._time !== o || i) {
          if (!this._initted) {
            if (this._init(), !this._initted || this._gc) return;
            if (!i && this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration)) return this._time = this._totalTime = o, this._rawPrevTime = c, L.push(this), void(this._lazy = [e, t]);
            this._time && !n ? this.ratio = this._ease.getRatio(this._time / l) : n && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
          }
          for (!1 !== this._lazy && (this._lazy = !1), this._active || !this._paused && this._time !== o && e >= 0 && (this._active = !0), 0 === o && (this._startAt && (e >= 0 ? this._startAt.render(e, t, i) : r || (r = "_dummyGS")), this.vars.onStart && (0 !== this._time || 0 === l) && (t || this._callback("onStart"))), s = this._firstPT; s;) s.f ? s.t[s.p](s.c * this.ratio + s.s) : s.t[s.p] = s.c * this.ratio + s.s, s = s._next;
          this._onUpdate && (0 > e && this._startAt && -1e-4 !== e && this._startAt.render(e, t, i), t || (this._time !== o || n || i) && this._callback("onUpdate")), r && (!this._gc || i) && (0 > e && this._startAt && !this._onUpdate && -1e-4 !== e && this._startAt.render(e, t, i), n && (this._timeline.autoRemoveChildren && this._enabled(!1, !1), this._active = !1), !t && this.vars[r] && this._callback(r), 0 === l && this._rawPrevTime === d && a !== d && (this._rawPrevTime = 0))
        }
      }, a._kill = function(e, t, i) {
        if ("all" === e && (e = null), null == e && (null == t || t === this.target)) return this._lazy = !1, this._enabled(!1, !1);
        t = "string" != typeof t ? t || this._targets || this.target : D.selector(t) || t;
        var n, r, s, a, o, l, c, u, d, h = i && this._time && i._startTime === this._startTime && this._timeline === i._timeline;
        if ((f(t) || N(t)) && "number" != typeof t[0])
          for (n = t.length; --n > -1;) this._kill(e, t[n], i) && (l = !0);
        else {
          if (this._targets) {
            for (n = this._targets.length; --n > -1;)
              if (t === this._targets[n]) {
                o = this._propLookup[n] || {}, this._overwrittenProps = this._overwrittenProps || [], r = this._overwrittenProps[n] = e ? this._overwrittenProps[n] || {} : "all";
                break
              }
          } else {
            if (t !== this.target) return !1;
            o = this._propLookup, r = this._overwrittenProps = e ? this._overwrittenProps || {} : "all"
          }
          if (o) {
            if (c = e || o, u = e !== r && "all" !== r && e !== o && ("object" != typeof e || !e._tempKill), i && (D.onOverwrite || this.vars.onOverwrite)) {
              for (s in c) o[s] && (d || (d = []), d.push(s));
              if ((d || !e) && !Z(this, i, t, d)) return !1
            }
            for (s in c)(a = o[s]) && (h && (a.f ? a.t[a.p](a.s) : a.t[a.p] = a.s, l = !0), a.pg && a.t._kill(c) && (l = !0), a.pg && 0 !== a.t._overwriteProps.length || (a._prev ? a._prev._next = a._next : a === this._firstPT && (this._firstPT = a._next), a._next && (a._next._prev = a._prev), a._next = a._prev = null), delete o[s]), u && (r[s] = 1);
            !this._firstPT && this._initted && this._enabled(!1, !1)
          }
        }
        return l
      }, a.invalidate = function() {
        return this._notifyPluginsOfEnabled && D._onPluginEvent("_onDisable", this), this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null, this._notifyPluginsOfEnabled = this._active = this._lazy = !1, this._propLookup = this._targets ? {} : [], P.prototype.invalidate.call(this), this.vars.immediateRender && (this._time = -d, this.render(Math.min(0, -this._delay))), this
      }, a._enabled = function(e, t) {
        if (l || o.wake(), e && this._gc) {
          var i, n = this._targets;
          if (n)
            for (i = n.length; --i > -1;) this._siblings[i] = K(n[i], this, !0);
          else this._siblings = K(this.target, this, !0)
        }
        return P.prototype._enabled.call(this, e, t), !(!this._notifyPluginsOfEnabled || !this._firstPT) && D._onPluginEvent(e ? "_onEnable" : "_onDisable", this)
      }, D.to = function(e, t, i) {
        return new D(e, t, i)
      }, D.from = function(e, t, i) {
        return i.runBackwards = !0, i.immediateRender = 0 != i.immediateRender, new D(e, t, i)
      }, D.fromTo = function(e, t, i, n) {
        return n.startAt = i, n.immediateRender = 0 != n.immediateRender && 0 != i.immediateRender, new D(e, t, n)
      }, D.delayedCall = function(e, t, i, n, r) {
        return new D(t, 0, {
          delay: e,
          onComplete: t,
          onCompleteParams: i,
          callbackScope: n,
          onReverseComplete: t,
          onReverseCompleteParams: i,
          immediateRender: !1,
          lazy: !1,
          useFrames: r,
          overwrite: 0
        })
      }, D.set = function(e, t) {
        return new D(e, 0, t)
      }, D.getTweensOf = function(e, t) {
        if (null == e) return [];
        var i, n, r, s;
        if (e = "string" != typeof e ? e : D.selector(e) || e, (f(e) || N(e)) && "number" != typeof e[0]) {
          for (i = e.length, n = []; --i > -1;) n = n.concat(D.getTweensOf(e[i], t));
          for (i = n.length; --i > -1;)
            for (s = n[i], r = i; --r > -1;) s === n[r] && n.splice(i, 1)
        } else
          for (i = (n = K(e).concat()).length; --i > -1;)(n[i]._gc || t && !n[i].isActive()) && n.splice(i, 1);
        return n
      }, D.killTweensOf = D.killDelayedCallsTo = function(e, t, i) {
        "object" == typeof t && (i = t, t = !1);
        for (var n = D.getTweensOf(e, t), r = n.length; --r > -1;) n[r]._kill(i, e)
      };
      var ee = v("plugins.TweenPlugin", function(e, t) {
        this._overwriteProps = (e || "").split(","), this._propName = this._overwriteProps[0], this._priority = t || 0, this._super = ee.prototype
      }, !0);
      if (a = ee.prototype, ee.version = "1.18.0", ee.API = 2, a._firstPT = null, a._addTween = F, a.setRatio = j, a._kill = function(e) {
          var t, i = this._overwriteProps,
            n = this._firstPT;
          if (null != e[this._propName]) this._overwriteProps = [];
          else
            for (t = i.length; --t > -1;) null != e[i[t]] && i.splice(t, 1);
          for (; n;) null != e[n.n] && (n._next && (n._next._prev = n._prev), n._prev ? (n._prev._next = n._next, n._prev = null) : this._firstPT === n && (this._firstPT = n._next)), n = n._next;
          return !1
        }, a._roundProps = function(e, t) {
          for (var i = this._firstPT; i;)(e[this._propName] || null != i.n && e[i.n.split(this._propName + "_").join("")]) && (i.r = t), i = i._next
        }, D._onPluginEvent = function(e, t) {
          var i, n, r, s, a, o = t._firstPT;
          if ("_onInitAllProps" === e) {
            for (; o;) {
              for (a = o._next, n = r; n && n.pr > o.pr;) n = n._next;
              (o._prev = n ? n._prev : s) ? o._prev._next = o: r = o, (o._next = n) ? n._prev = o : s = o, o = a
            }
            o = t._firstPT = r
          }
          for (; o;) o.pg && "function" == typeof o.t[e] && o.t[e]() && (i = !0), o = o._next;
          return i
        }, ee.activate = function(e) {
          for (var t = e.length; --t > -1;) e[t].API === ee.API && (Y[(new e[t])._propName] = e[t]);
          return !0
        }, y.plugin = function(e) {
          if (!(e && e.propName && e.init && e.API)) throw "illegal plugin definition.";
          var t, i = e.propName,
            n = e.priority || 0,
            r = e.overwriteProps,
            s = {
              init: "_onInitTween",
              set: "setRatio",
              kill: "_kill",
              round: "_roundProps",
              initAll: "_onInitAllProps"
            },
            a = v("plugins." + i.charAt(0).toUpperCase() + i.substr(1) + "Plugin", function() {
              ee.call(this, i, n), this._overwriteProps = r || []
            }, !0 === e.global),
            o = a.prototype = new ee(i);
          for (t in o.constructor = a, a.API = e.API, s) "function" == typeof e[t] && (o[s[t]] = e[t]);
          return a.version = e.version, ee.activate([a]), a
        }, r = e._gsQueue) {
        for (s = 0; s < r.length; s++) r[s]();
        for (a in m) m[a].func || e.console.log("GSAP encountered missing dependency: com.greensock." + a)
      }
      l = !1
    }
  }("undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window, "TweenMax"), ((_gsScope = "undefined" != typeof module && module.exports && "undefined" != typeof global ? global : this || window)._gsQueue || (_gsScope._gsQueue = [])).push(function() {
    "use strict";
    var e = document.documentElement,
      t = window,
      i = function(i, n) {
        var r = "x" === n ? "Width" : "Height",
          s = "scroll" + r,
          a = "client" + r,
          o = document.body;
        return i === t || i === e || i === o ? Math.max(e[s], o[s]) - (t["inner" + r] || e[a] || o[a]) : i[s] - i["offset" + r]
      },
      n = _gsScope._gsDefine.plugin({
        propName: "scrollTo",
        API: 2,
        version: "1.7.5",
        init: function(e, n, r) {
          return this._wdw = e === t, this._target = e, this._tween = r, "object" != typeof n && (n = {
            y: n
          }), this.vars = n, this._autoKill = !1 !== n.autoKill, this.x = this.xPrev = this.getX(), this.y = this.yPrev = this.getY(), null != n.x ? (this._addTween(this, "x", this.x, "max" === n.x ? i(e, "x") : n.x, "scrollTo_x", !0), this._overwriteProps.push("scrollTo_x")) : this.skipX = !0, null != n.y ? (this._addTween(this, "y", this.y, "max" === n.y ? i(e, "y") : n.y, "scrollTo_y", !0), this._overwriteProps.push("scrollTo_y")) : this.skipY = !0, !0
        },
        set: function(e) {
          this._super.setRatio.call(this, e);
          var n = this._wdw || !this.skipX ? this.getX() : this.xPrev,
            r = this._wdw || !this.skipY ? this.getY() : this.yPrev,
            s = r - this.yPrev,
            a = n - this.xPrev;
          this._autoKill && (!this.skipX && (a > 7 || -7 > a) && i(this._target, "x") > n && (this.skipX = !0), !this.skipY && (s > 7 || -7 > s) && i(this._target, "y") > r && (this.skipY = !0), this.skipX && this.skipY && (this._tween.kill(), this.vars.onAutoKill && this.vars.onAutoKill.apply(this.vars.onAutoKillScope || this._tween, this.vars.onAutoKillParams || []))), this._wdw ? t.scrollTo(this.skipX ? n : this.x, this.skipY ? r : this.y) : (this.skipY || (this._target.scrollTop = this.y), this.skipX || (this._target.scrollLeft = this.x)), this.xPrev = this.x, this.yPrev = this.y
        }
      }),
      r = n.prototype;
    n.max = i, r.getX = function() {
      return this._wdw ? null != t.pageXOffset ? t.pageXOffset : null != e.scrollLeft ? e.scrollLeft : document.body.scrollLeft : this._target.scrollLeft
    }, r.getY = function() {
      return this._wdw ? null != t.pageYOffset ? t.pageYOffset : null != e.scrollTop ? e.scrollTop : document.body.scrollTop : this._target.scrollTop
    }, r._kill = function(e) {
      return e.scrollTo_x && (this.skipX = !0), e.scrollTo_y && (this.skipY = !0), this._super._kill.call(this, e)
    }
  }), _gsScope._gsDefine && _gsScope._gsQueue.pop()(),
  function(e, t, i, n) {
    var r = new TimelineMax({
      paused: !0,
      reverse: !0,
      onStart: function() {
        window.onload = function() {
          setTimeout(function() {
            window.scrollTo(0, 0)
          }, 0)
        }, TweenLite.set("html", {
          "overflow-y": "hidden"
        }), TweenLite.set(".header", {
          y: -200
        }), TweenLite.set(".barba-container", {
          y: 200,
          opacity: 0
        }), TweenLite.set(".home-circle-wrapper", {
          y: 200,
          x: 200,
          opacity: 0
        }), TweenLite.set(".menu-opener", {
          y: 200,
          opacity: 0
        })
      },
      onComplete: function() {
        TweenLite.set("html", {
          "overflow-y": "auto"
        }), TweenLite.set(".header, .barba-container", {
          clearProps: "all"
        }), e(".preloader").remove()
      }
    });
    e("body").hasClass("page-template-page-work") ? r.add("start").to(".preloader", .5, {
      opacity: 0,
      ease: Circ.easeOut
    }, "start").to("#root", .5, {
      opacity: 1,
      ease: Expo.easeOut
    }, "start").to(".home-circle-wrapper", 1, {
      y: 0,
      x: 0,
      opacity: 1,
      ease: Expo.easeOut
    }, "start+=0.3").to(".header", 1, {
      y: 0,
      ease: Expo.easeOut
    }, "start+=0.3").to(".barba-container", 1, {
      y: 0,
      opacity: 1,
      ease: Expo.easeOut
    }, "start+=0.8").to(".menu-opener", 1, {
      y: 0,
      opacity: 1,
      ease: Expo.easeOut
    }, "start+=1") : r.add("start").to(".preloader", .5, {
      opacity: 0,
      ease: Circ.easeOut
    }, "start").to("#root", .5, {
      opacity: 1,
      ease: Expo.easeOut
    }, "start").to(".header", 1, {
      y: 0,
      ease: Expo.easeOut
    }, "start+=0.3").to(".barba-container", 1, {
      y: 0,
      opacity: 1,
      ease: Expo.easeOut
    }, "start+=0.8").to(".menu-opener", 1, {
      y: 0,
      opacity: 1,
      ease: Expo.easeOut
    }, "start+=1");
    var s, a, o, l, c = e("html"),
      u = e(window),
      d = e(document),
      h = (c = e("html"), e("body"), e("#root"), e(".header")),
      p = e(".footer"),
      f = u.width(),
      m = u.height(),
      g = "#484848",
      y = 0,
      v = e(".time-1"),
      _ = e(".time-2"),
      b = e(".home-circle"),
      w = e(".home-circle-wrapper"),
      T = (window, function(e) {
        e.preventDefault ? e.preventDefault() : e.returnValue = !1
      }),
      A = function(e, t, i) {
        var n, r;
        return t || (t = 200),
          function() {
            var s = i || this,
              a = +new Date,
              o = arguments;
            n && a < n + t ? (clearTimeout(r), r = setTimeout(function() {
              n = a, e.apply(s, o)
            }, t)) : (n = a, e.apply(s, o))
          }
      },
      k = function() {
        var e = moment().tz("America/Chicago"),
          t = e.format("dddd, MMM D YYYY"),
          i = e.format("LTS");
        v.html(t), _.html(i), setTimeout(k, 1e3)
      },
      x = function() {
        var e = m / 100 * 85;
        TweenLite.set(w, {
          width: e,
          height: e
        })
      };
    manageSlider = function() {
      e(".image-slider").each(function() {
        $_this = e(this), $_this.not(".slick-initialized").slick({
          lazyLoad: "progressive",
          slidesToShow: 1,
          infinite: !0,
          prevArrow: '<div class="prev"><div><a href="#"><span class="icon-arrow-right"></span></a></div></div>',
          nextArrow: '<div class="next"><div><a href="#"><span class="icon-arrow-right"></span></a></div></div>',
          dots: !0,
          dotsClass: "image-slider-index",
          customPaging: function(e, t) {
            return ' \t\t\t\t\t\t\t\t\t<div class="current">' + (t + 1) + '</div> \t\t\t\t\t\t\t\t\t<div class="divider"> / </div> \t\t\t\t\t\t\t\t\t<div class="total">' + e.slideCount + "</div> \t\t\t\t\t\t\t\t "
          },
          focusOnSelect: !0,
          variableWidth: !1,
          adaptiveHeight: !1,
          centerMode: !0,
          centerPadding: "10%",
          responsive: [{
            breakpoint: 1024,
            settings: {}
          }, {
            breakpoint: 768,
            settings: {
              focusOnSelect: !1,
              variableWidth: !1,
              adaptiveHeight: !1,
              centerMode: !0,
              centerPadding: "30px"
            }
          }]
        })
      })
    }, menuMobile = function() {
      var t = new TimelineMax({
        paused: !0,
        reverse: !0,
        onComplete: function() {
          TweenLite.set(".menu-mobile", {
            "pointer-events": "auto"
          })
        },
        onReverseComplete: function() {
          TweenLite.set("html", {
            "overflow-y": "auto"
          }), TweenLite.set("#barba-wrapper", {
            "pointer-events": "auto"
          }), TweenLite.set(".menu-mobile", {
            "pointer-events": "none",
            opacity: 0
          })
        }
      });
      t.add("open").fromTo("#barba-wrapper", .5, {
        opacity: 1,
        ease: Expo.easeOut
      }, {
        opacity: 0,
        ease: Expo.easeOut
      }).staggerFromTo(".menu-mobile .border", .5, {
        width: "0%",
        ease: Expo.easeOut
      }, {
        width: "100%",
        ease: Expo.easeOut
      }, .2, "-=0.5").staggerFromTo(".menu-mobile ul li a", .5, {
        y: 0,
        x: -40,
        opacity: 0,
        ease: Expo.easeOut
      }, {
        y: 0,
        x: 0,
        opacity: 1,
        ease: Expo.easeOut
      }, .2, "-=1.2"), e(".menu-opener").on("click", function() {
        e(".menu-opener").toggleClass("open"), e(".menu-opener").hasClass("open") ? (TweenLite.set("html", {
          "overflow-y": "hidden"
        }), TweenLite.set("#barba-wrapper", {
          "pointer-events": "none"
        }), TweenLite.set(".menu-mobile", {
          opacity: 1
        }), e(".header").removeClass("is-scrolled"), "page-work" === e(".barba-container").attr("data-namespace") && TweenLite.to(".home-circle-wrapper", 1, {
          y: 200,
          x: 200,
          opacity: 0,
          ease: Expo.easeOut
        }), t.play()) : (t.reverse(), "page-work" === e(".barba-container").attr("data-namespace") && setTimeout(function() {
          TweenLite.to(".home-circle-wrapper", 1, {
            y: 0,
            x: 0,
            opacity: 1,
            ease: Expo.easeOut
          })
        }, 1500))
      }), e(".menu-mobile ul li a").on("click", function() {
        var i = e(this);
        t.reverse(), setTimeout(function() {
          e(".menu-opener").removeClass("open"), e(".menu-mobile ul li").removeClass("current-page"), i.parent().addClass("current-page")
        }, 1500)
      }), u.width() < 768 && e(".header .logo a").on("click", function() {
        t.reverse(), setTimeout(function() {
          e(".menu-opener").removeClass("open"), e(".menu-mobile ul li").removeClass("current-page")
        }, 1500)
      })
    }, timelinePromise = function(e) {
      return new Promise(function(t) {
        e.eventCallback("onComplete", function() {
          t(!0)
        })
      })
    }, barba = function() {
      Barba.Pjax.start(), Barba.Prefetch.init();
      var t = Barba.BaseTransition.extend({
        getNewPageFile: function() {
          return Barba.HistoryManager.currentStatus().url.split("/").pop()
        },
        start: function() {
          Promise.all([this.newContainerLoading, this.scrollTop()]).then(this.display.bind(this))
        },
        scrollTop: function() {
          var e = Barba.Utils.deferred(),
            t = window.pageYOffset,
            i = new TimelineMax({
              paused: !0,
              onComplete: function() {
                e.resolve(), i = null
              }
            });
          return TweenLite.set(c, {
            "pointer-events": "none"
          }), TweenLite.set(p, {
            visibility: "hidden"
          }), t > 1 ? (i.to(window, .8, {
            scrollTo: {
              y: 0,
              autoKill: !1
            },
            ease: Power2.easeInOut
          }), i.play()) : (e.resolve(), i = null), e.promise
        },
        display: function() {
          var t = this,
            i = (e(t.oldContainer).attr("data-namespace"), e(t.newContainer).attr("data-namespace")),
            n = new TimelineMax({
              paused: !0,
              onComplete: function() {
                TweenLite.set("html, .header, .footer", {
                  clearProps: "all"
                }), TweenLite.set(t.newContainer, {
                  clearProps: "all"
                }), t.done(), n = null, "page-work" !== i && e("body").unbind("mousemove"), "page-work" === i && e("body").bind("mousemove"), barbaFn(i)
              }
            });
          return TweenLite.set(this.oldContainer, {
            position: "fixed",
            visibility: "visible",
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            opacity: 1
          }), TweenLite.set(this.newContainer, {
            visibility: "visible",
            opacity: 0,
            y: 200
          }), "page-work" === i && (x(), n.add("start").set(b, {
            backgroundImage: "linear-gradient( to right, " + g + ", " + g + ")"
          }).to(this.oldContainer, .5, {
            y: 200,
            opacity: 0,
            ease: Expo.easeOut
          }, "start").to(w, 1, {
            y: 0,
            x: 0,
            opacity: 1,
            ease: Expo.easeOut
          }, "start+=1").to(h, .5, {
            y: -200,
            ease: Expo.easeOut
          }, "start+=0.5").to(h, 1, {
            y: 0,
            ease: Expo.easeOut
          }, "start+=1").to(this.newContainer, 1, {
            y: 0,
            opacity: 1,
            ease: Expo.easeOut
          }, "start+=1")), "page-work" !== i && n.add("start").to(w, .5, {
            y: 200,
            x: 200,
            opacity: 0,
            ease: Expo.easeOut
          }, "start").to(this.oldContainer, .5, {
            y: 200,
            opacity: 0,
            ease: Expo.easeOut
          }, "start").to(h, .5, {
            y: -200,
            ease: Expo.easeOut
          }, "start+=0.5").to(h, 1, {
            y: 0,
            ease: Expo.easeOut
          }, "start+=1").to(this.newContainer, 1, {
            y: 0,
            opacity: 1,
            ease: Expo.easeOut
          }, "start+=1"), n.play()
        }
      });
      Barba.Pjax.getTransition = function() {
        return t
      }, Barba.Dispatcher.on("newPageReady", function(t, i, n, r) {
        var s = r.replace(/(<\/?)body( .+?)?>/gi, "$1notbody$2>", r),
          a = e(s).filter("notbody").attr("class");
        e("body").attr("class", a);
        var o = e(s).find(".top-menu-wrapper").html();
        e(".top-menu-wrapper").html(o)
      }), Barba.Dispatcher.on("initStateChange", function() {
        "function" == typeof ga && (ga("set", "anonymizeIp", !0), ga("send", "pageview", location.pathname)), "function" == typeof gtag && (gtag("set", "anonymizeIp", !0), gtag("send", "pageview", location.pathname))
      })
    }, homeVideo = function() {
      if (!window.player) {
        var t = new Plyr("#home-video", {});
        window.homePlayer = t
      }
      t.on("pause", function() {
        e(".home-video").removeClass("video-playing")
      }), e(".home-video__play").on("click", function() {
        e(".home-video").addClass("video-playing"), t.play()
      }), t.on("ended", function() {
        e(".home-video").removeClass("video-playing")
      })
    }, barbaFn = function() {
      homeVideo(), e(".lazy").lazy({
        enableThrottle: !0,
        throttle: 250,
        afterLoad: function(e) {
          e.addClass("loaded")
        }
      }), manageSlider()
    }, documentReadyFn = function() {
      var t;
      objectFitImages(), -1 != (t = navigator.userAgent.toLowerCase()).indexOf("safari") && (t.indexOf("chrome") > -1 ? e(".bg").addClass("show-bg") : e(".bg").remove()), TweenLite.set(b, {
        backgroundImage: "linear-gradient( to right, " + g + ", " + g + ")"
      }), barba(), barbaFn(), k(), f < 768 && c.hasClass("touch") && menuMobile(), x(), c.addClass("ready")
    }, d.ready(function() {
      documentReadyFn(), d.on("mousemove", ".page-template-page-work", function(e) {
        var t = (e.clientX - w[0].getBoundingClientRect().x - w.outerWidth()) / 100 * 20,
          i = (e.clientY - w[0].getBoundingClientRect().y - w.outerHeight()) / 100 * 10;
        ! function(e, t) {
          TweenLite.to(w, 1, {
            x: e,
            y: t,
            ease: Expo.easeOut
          })
        }(t, i)
      }).on("mouseenter", ".home-row", A(function() {
        var t = e(this),
          i = JSON.parse(t.attr("data-color"));
        ! function(t) {
          e(".home-title").addClass("not-hover"), t.find(".home-title").removeClass("not-hover"), t.find(".home-title").addClass("is-hover")
        }(t),
        function(e) {
          1 === e.colors.length ? TweenLite.to(b, 2, {
            backgroundImage: "linear-gradient( to right, " + e.colors[0] + ", " + e.colors[0] + ")",
            ease: Expo.easeOut
          }) : TweenLite.to(b, 2, {
            backgroundImage: "linear-gradient( to right, " + e.colors[0] + ", " + e.colors[1] + ")",
            ease: Expo.easeOut
          })
        }(i)
      })).on("mouseleave", ".home-row", A(function() {
        e(".home-title").removeClass("not-hover"), e(".home-title").removeClass("is-hover"), TweenLite.to(b, 2, {
          backgroundImage: "linear-gradient( to right, " + g + ", " + g + ")",
          ease: Expo.easeOut
        })
      })).on("mouseenter", ".journal-title a", A(function() {
        e(".journal-title").addClass("not-hover"), e(this).parent().removeClass("not-hover")
      })).on("mouseleave", ".journal-title a", A(function() {
        e(".journal-title").removeClass("not-hover")
      })).on("mouseenter", ".contact-text a", function() {
        e(".contact-text").addClass("not-hover"), e(this).parent().removeClass("not-hover")
      }).on("mouseleave", ".contact-text a", function() {
        e(".contact-text").removeClass("not-hover")
      }).on("mousemove", ".slick-arrow", function(t) {
        var i = e(this).find("a"),
          n = 0,
          r = 0;
        i[0].getBoundingClientRect(), n = (t.clientX - i[0].getBoundingClientRect().x - i.outerWidth()) / 100 * 50, r = (t.clientY - i[0].getBoundingClientRect().y - i.outerHeight()) / 100 * 80,
          function(e, t, i) {
            TweenLite.to(e, 1, {
              x: t,
              y: i,
              scale: 1.3,
              ease: Expo.easeOut
            })
          }(i, n, r)
      }).on("mouseleave", ".slick-arrow", function(t) {
        var i = e(this).find("a");
        ! function(e) {
          TweenLite.to(e, 1, {
            x: 0,
            y: 0,
            scale: 1,
            ease: Expo.easeOut
          })
        }(i)
      }).on("mousemove", ".image-slider", function(t) {
        var i = e(this);
        ! function(e, t) {
          e.pageX < 3 * f / 10 ? t.find(".prev").addClass("hover") : e.pageX > 7 * f / 10 ? t.find(".next").addClass("hover") : (t.find(".prev").removeClass("hover"), t.find(".next").removeClass("hover"))
        }(t, i)
      }), setTimeout(function() {
        r.play()
      }, 2e3)
    }).on("click", "a", function(e) {
      var t = this.href;
      /#/.test(t) && T(e), t === window.location.href && (T(e), e.stopPropagation())
    }).on("keydown", function(e) {
      e.keyCode, e.keyCode, e.keyCode
    }), u.resize((s = function() {
      f = u.width(), m = u.height(), x()
    }, function() {
      var e = this,
        t = arguments,
        i = o && !l;
      clearTimeout(l), l = setTimeout(function() {
        l = null, o || s.apply(e, t)
      }, a), i && s.apply(e, t)
    })).scroll(A(function() {
      var e = u.scrollTop();
      e > 200 ? e < y ? h.removeClass("is-scrolled") : h.addClass("is-scrolled") : h.removeClass("is-scrolled"), y = e
    }))
  }(jQuery, window, document);
