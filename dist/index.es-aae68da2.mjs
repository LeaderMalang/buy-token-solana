import { e as Mi, r as ji, f as jy, h as re, i as Ur, j as zy, w as xl, k as Il, m as uc, t as la, o as Uy, p as Hy, q as mi, D as ky, s as Ky, N as Z, u as Vy, v as rc, x as By, V as Gy, R as Wy, F as bh, K as Jy, y as Qy, L as Yy, z as Eh, $ as Zy, A as Xy, B as Gs, Z as xh, J as e1, X as t1, E as hc, _ as Sl, C as Nr, G as r1, H as i1, I as cs, M as Ft, U as er, O as yi, P as cr, Q as s1, S as us, T as Pl, W as n1, Y as a1, a0 as o1, a1 as Cl, a2 as c1, a3 as Al, a4 as Ol, a5 as ls, a6 as ic, a7 as na, a8 as fs, a9 as u1, aa, ab as h1, ac as l1, ad as f1, ae as ta, af as p1, ag as d1, ah as zo, ai as Ih, aj as g1, ak as v1, al as y1, am as Sh, an as m1, ao as w1, ap as _1, aq as b1, ar as E1, as as x1, at as I1, au as ks, av as Rl, aw as Uo, ax as S1, ay as P1 } from "./index-560d1e7a.mjs";
import { s as lc, i as Ph, c as C1, a as A1, b as Tl, f as fc, p as O1, J as ii, d as pc, e as dc, g as gc, h as vi, j as ri, k as Bs, l as R1, m as T1, H as bi } from "./http-c2368082.mjs";
import "react";
import "react-dom";
var fa = {}, Ws = {};
Object.defineProperty(Ws, "__esModule", { value: !0 });
function N1(h) {
  if (typeof h != "string")
    throw new Error(`Cannot safe json parse value of type ${typeof h}`);
  try {
    return JSON.parse(h);
  } catch {
    return h;
  }
}
Ws.safeJsonParse = N1;
function F1(h) {
  return typeof h == "string" ? h : JSON.stringify(h, (i, r) => typeof r > "u" ? null : r);
}
Ws.safeJsonStringify = F1;
var Fs = { exports: {} }, Ch;
function $1() {
  return Ch || (Ch = 1, function() {
    let h;
    function i() {
    }
    h = i, h.prototype.getItem = function(r) {
      return this.hasOwnProperty(r) ? String(this[r]) : null;
    }, h.prototype.setItem = function(r, n) {
      this[r] = String(n);
    }, h.prototype.removeItem = function(r) {
      delete this[r];
    }, h.prototype.clear = function() {
      const r = this;
      Object.keys(r).forEach(function(n) {
        r[n] = void 0, delete r[n];
      });
    }, h.prototype.key = function(r) {
      return r = r || 0, Object.keys(this)[r];
    }, h.prototype.__defineGetter__("length", function() {
      return Object.keys(this).length;
    }), typeof Mi < "u" && Mi.localStorage ? Fs.exports = Mi.localStorage : typeof window < "u" && window.localStorage ? Fs.exports = window.localStorage : Fs.exports = new i();
  }()), Fs.exports;
}
var Ho = {}, $s = {}, Ah;
function D1() {
  if (Ah)
    return $s;
  Ah = 1, Object.defineProperty($s, "__esModule", { value: !0 }), $s.IKeyValueStorage = void 0;
  class h {
  }
  return $s.IKeyValueStorage = h, $s;
}
var Ds = {}, Oh;
function q1() {
  if (Oh)
    return Ds;
  Oh = 1, Object.defineProperty(Ds, "__esModule", { value: !0 }), Ds.parseEntry = void 0;
  const h = Ws;
  function i(r) {
    var n;
    return [r[0], h.safeJsonParse((n = r[1]) !== null && n !== void 0 ? n : "")];
  }
  return Ds.parseEntry = i, Ds;
}
var Rh;
function L1() {
  return Rh || (Rh = 1, function(h) {
    Object.defineProperty(h, "__esModule", { value: !0 });
    const i = ji;
    i.__exportStar(D1(), h), i.__exportStar(q1(), h);
  }(Ho)), Ho;
}
Object.defineProperty(fa, "__esModule", { value: !0 });
fa.KeyValueStorage = void 0;
const hs = ji, Th = Ws, M1 = hs.__importDefault($1()), j1 = L1();
class Nl {
  constructor() {
    this.localStorage = M1.default;
  }
  getKeys() {
    return hs.__awaiter(this, void 0, void 0, function* () {
      return Object.keys(this.localStorage);
    });
  }
  getEntries() {
    return hs.__awaiter(this, void 0, void 0, function* () {
      return Object.entries(this.localStorage).map(j1.parseEntry);
    });
  }
  getItem(i) {
    return hs.__awaiter(this, void 0, void 0, function* () {
      const r = this.localStorage.getItem(i);
      if (r !== null)
        return Th.safeJsonParse(r);
    });
  }
  setItem(i, r) {
    return hs.__awaiter(this, void 0, void 0, function* () {
      this.localStorage.setItem(i, Th.safeJsonStringify(r));
    });
  }
  removeItem(i) {
    return hs.__awaiter(this, void 0, void 0, function* () {
      this.localStorage.removeItem(i);
    });
  }
}
fa.KeyValueStorage = Nl;
var z1 = fa.default = Nl, ps = {}, qs = {}, ko = {}, Ls = {};
class zi {
}
const U1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  IEvents: zi
}, Symbol.toStringTag, { value: "Module" })), H1 = /* @__PURE__ */ jy(U1);
var Nh;
function k1() {
  if (Nh)
    return Ls;
  Nh = 1, Object.defineProperty(Ls, "__esModule", { value: !0 }), Ls.IHeartBeat = void 0;
  const h = H1;
  class i extends h.IEvents {
    constructor(n) {
      super();
    }
  }
  return Ls.IHeartBeat = i, Ls;
}
var Fh;
function Fl() {
  return Fh || (Fh = 1, function(h) {
    Object.defineProperty(h, "__esModule", { value: !0 }), ji.__exportStar(k1(), h);
  }(ko)), ko;
}
var Ko = {}, qi = {}, $h;
function K1() {
  if ($h)
    return qi;
  $h = 1, Object.defineProperty(qi, "__esModule", { value: !0 }), qi.HEARTBEAT_EVENTS = qi.HEARTBEAT_INTERVAL = void 0;
  const h = re;
  return qi.HEARTBEAT_INTERVAL = h.FIVE_SECONDS, qi.HEARTBEAT_EVENTS = {
    pulse: "heartbeat_pulse"
  }, qi;
}
var Dh;
function $l() {
  return Dh || (Dh = 1, function(h) {
    Object.defineProperty(h, "__esModule", { value: !0 }), ji.__exportStar(K1(), h);
  }(Ko)), Ko;
}
var qh;
function V1() {
  if (qh)
    return qs;
  qh = 1, Object.defineProperty(qs, "__esModule", { value: !0 }), qs.HeartBeat = void 0;
  const h = ji, i = Ur, r = re, n = Fl(), a = $l();
  class l extends n.IHeartBeat {
    constructor(v) {
      super(v), this.events = new i.EventEmitter(), this.interval = a.HEARTBEAT_INTERVAL, this.interval = (v == null ? void 0 : v.interval) || a.HEARTBEAT_INTERVAL;
    }
    static init(v) {
      return h.__awaiter(this, void 0, void 0, function* () {
        const w = new l(v);
        return yield w.init(), w;
      });
    }
    init() {
      return h.__awaiter(this, void 0, void 0, function* () {
        yield this.initialize();
      });
    }
    stop() {
      clearInterval(this.intervalRef);
    }
    on(v, w) {
      this.events.on(v, w);
    }
    once(v, w) {
      this.events.once(v, w);
    }
    off(v, w) {
      this.events.off(v, w);
    }
    removeListener(v, w) {
      this.events.removeListener(v, w);
    }
    initialize() {
      return h.__awaiter(this, void 0, void 0, function* () {
        this.intervalRef = setInterval(() => this.pulse(), r.toMiliseconds(this.interval));
      });
    }
    pulse() {
      this.events.emit(a.HEARTBEAT_EVENTS.pulse);
    }
  }
  return qs.HeartBeat = l, qs;
}
(function(h) {
  Object.defineProperty(h, "__esModule", { value: !0 });
  const i = ji;
  i.__exportStar(V1(), h), i.__exportStar(Fl(), h), i.__exportStar($l(), h);
})(ps);
var Ae = {}, Vo, Lh;
function B1() {
  if (Lh)
    return Vo;
  Lh = 1;
  function h(r) {
    try {
      return JSON.stringify(r);
    } catch {
      return '"[Circular]"';
    }
  }
  Vo = i;
  function i(r, n, a) {
    var l = a && a.stringify || h, d = 1;
    if (typeof r == "object" && r !== null) {
      var v = n.length + d;
      if (v === 1)
        return r;
      var w = new Array(v);
      w[0] = l(r);
      for (var I = 1; I < v; I++)
        w[I] = l(n[I]);
      return w.join(" ");
    }
    if (typeof r != "string")
      return r;
    var F = n.length;
    if (F === 0)
      return r;
    for (var U = "", H = 1 - d, k = -1, z = r && r.length || 0, G = 0; G < z; ) {
      if (r.charCodeAt(G) === 37 && G + 1 < z) {
        switch (k = k > -1 ? k : 0, r.charCodeAt(G + 1)) {
          case 100:
          case 102:
            if (H >= F || n[H] == null)
              break;
            k < G && (U += r.slice(k, G)), U += Number(n[H]), k = G + 2, G++;
            break;
          case 105:
            if (H >= F || n[H] == null)
              break;
            k < G && (U += r.slice(k, G)), U += Math.floor(Number(n[H])), k = G + 2, G++;
            break;
          case 79:
          case 111:
          case 106:
            if (H >= F || n[H] === void 0)
              break;
            k < G && (U += r.slice(k, G));
            var ae = typeof n[H];
            if (ae === "string") {
              U += "'" + n[H] + "'", k = G + 2, G++;
              break;
            }
            if (ae === "function") {
              U += n[H].name || "<anonymous>", k = G + 2, G++;
              break;
            }
            U += l(n[H]), k = G + 2, G++;
            break;
          case 115:
            if (H >= F)
              break;
            k < G && (U += r.slice(k, G)), U += String(n[H]), k = G + 2, G++;
            break;
          case 37:
            k < G && (U += r.slice(k, G)), U += "%", k = G + 2, G++, H--;
            break;
        }
        ++H;
      }
      ++G;
    }
    return k === -1 ? r : (k < z && (U += r.slice(k)), U);
  }
  return Vo;
}
var Bo, Mh;
function G1() {
  if (Mh)
    return Bo;
  Mh = 1;
  const h = B1();
  Bo = a;
  const i = he().console || {}, r = {
    mapHttpRequest: z,
    mapHttpResponse: z,
    wrapRequestSerializer: G,
    wrapResponseSerializer: G,
    wrapErrorSerializer: G,
    req: z,
    res: z,
    err: H
  };
  function n(R, M) {
    return Array.isArray(R) ? R.filter(function(ge) {
      return ge !== "!stdSerializers.err";
    }) : R === !0 ? Object.keys(M) : !1;
  }
  function a(R) {
    R = R || {}, R.browser = R.browser || {};
    const M = R.browser.transmit;
    if (M && typeof M.send != "function")
      throw Error("pino: transmit option must have a send function");
    const W = R.browser.write || i;
    R.browser.write && (R.browser.asObject = !0);
    const ge = R.serializers || {}, te = n(R.browser.serialize, ge);
    let Ee = R.browser.serialize;
    Array.isArray(R.browser.serialize) && R.browser.serialize.indexOf("!stdSerializers.err") > -1 && (Ee = !1);
    const Oe = ["error", "fatal", "warn", "info", "debug", "trace"];
    typeof W == "function" && (W.error = W.fatal = W.warn = W.info = W.debug = W.trace = W), R.enabled === !1 && (R.level = "silent");
    const et = R.level || "info", C = Object.create(W);
    C.log || (C.log = ae), Object.defineProperty(C, "levelVal", {
      get: je
    }), Object.defineProperty(C, "level", {
      get: Re,
      set: J
    });
    const D = {
      transmit: M,
      serialize: te,
      asObject: R.browser.asObject,
      levels: Oe,
      timestamp: k(R)
    };
    C.levels = a.levels, C.level = et, C.setMaxListeners = C.getMaxListeners = C.emit = C.addListener = C.on = C.prependListener = C.once = C.prependOnceListener = C.removeListener = C.removeAllListeners = C.listeners = C.listenerCount = C.eventNames = C.write = C.flush = ae, C.serializers = ge, C._serialize = te, C._stdErrSerialize = Ee, C.child = K, M && (C._logEvent = U());
    function je() {
      return this.level === "silent" ? 1 / 0 : this.levels.values[this.level];
    }
    function Re() {
      return this._level;
    }
    function J(j) {
      if (j !== "silent" && !this.levels.values[j])
        throw Error("unknown level " + j);
      this._level = j, l(D, C, "error", "log"), l(D, C, "fatal", "error"), l(D, C, "warn", "error"), l(D, C, "info", "log"), l(D, C, "debug", "log"), l(D, C, "trace", "log");
    }
    function K(j, V) {
      if (!j)
        throw new Error("missing bindings for child Pino");
      V = V || {}, te && j.serializers && (V.serializers = j.serializers);
      const ut = V.serializers;
      if (te && ut) {
        var He = Object.assign({}, ge, ut), Fr = R.browser.serialize === !0 ? Object.keys(He) : te;
        delete j.serializers, w([j], Fr, He, this._stdErrSerialize);
      }
      function we(xt) {
        this._childLevel = (xt._childLevel | 0) + 1, this.error = I(xt, j, "error"), this.fatal = I(xt, j, "fatal"), this.warn = I(xt, j, "warn"), this.info = I(xt, j, "info"), this.debug = I(xt, j, "debug"), this.trace = I(xt, j, "trace"), He && (this.serializers = He, this._serialize = Fr), M && (this._logEvent = U(
          [].concat(xt._logEvent.bindings, j)
        ));
      }
      return we.prototype = this, new we(this);
    }
    return C;
  }
  a.levels = {
    values: {
      fatal: 60,
      error: 50,
      warn: 40,
      info: 30,
      debug: 20,
      trace: 10
    },
    labels: {
      10: "trace",
      20: "debug",
      30: "info",
      40: "warn",
      50: "error",
      60: "fatal"
    }
  }, a.stdSerializers = r, a.stdTimeFunctions = Object.assign({}, { nullTime: be, epochTime: de, unixTime: pe, isoTime: ue });
  function l(R, M, W, ge) {
    const te = Object.getPrototypeOf(M);
    M[W] = M.levelVal > M.levels.values[W] ? ae : te[W] ? te[W] : i[W] || i[ge] || ae, d(R, M, W);
  }
  function d(R, M, W) {
    !R.transmit && M[W] === ae || (M[W] = function(ge) {
      return function() {
        const Ee = R.timestamp(), Oe = new Array(arguments.length), et = Object.getPrototypeOf && Object.getPrototypeOf(this) === i ? i : this;
        for (var C = 0; C < Oe.length; C++)
          Oe[C] = arguments[C];
        if (R.serialize && !R.asObject && w(Oe, this._serialize, this.serializers, this._stdErrSerialize), R.asObject ? ge.call(et, v(this, W, Oe, Ee)) : ge.apply(et, Oe), R.transmit) {
          const D = R.transmit.level || M.level, je = a.levels.values[D], Re = a.levels.values[W];
          if (Re < je)
            return;
          F(this, {
            ts: Ee,
            methodLevel: W,
            methodValue: Re,
            transmitLevel: D,
            transmitValue: a.levels.values[R.transmit.level || M.level],
            send: R.transmit.send,
            val: M.levelVal
          }, Oe);
        }
      };
    }(M[W]));
  }
  function v(R, M, W, ge) {
    R._serialize && w(W, R._serialize, R.serializers, R._stdErrSerialize);
    const te = W.slice();
    let Ee = te[0];
    const Oe = {};
    ge && (Oe.time = ge), Oe.level = a.levels.values[M];
    let et = (R._childLevel | 0) + 1;
    if (et < 1 && (et = 1), Ee !== null && typeof Ee == "object") {
      for (; et-- && typeof te[0] == "object"; )
        Object.assign(Oe, te.shift());
      Ee = te.length ? h(te.shift(), te) : void 0;
    } else
      typeof Ee == "string" && (Ee = h(te.shift(), te));
    return Ee !== void 0 && (Oe.msg = Ee), Oe;
  }
  function w(R, M, W, ge) {
    for (const te in R)
      if (ge && R[te] instanceof Error)
        R[te] = a.stdSerializers.err(R[te]);
      else if (typeof R[te] == "object" && !Array.isArray(R[te]))
        for (const Ee in R[te])
          M && M.indexOf(Ee) > -1 && Ee in W && (R[te][Ee] = W[Ee](R[te][Ee]));
  }
  function I(R, M, W) {
    return function() {
      const ge = new Array(1 + arguments.length);
      ge[0] = M;
      for (var te = 1; te < ge.length; te++)
        ge[te] = arguments[te - 1];
      return R[W].apply(this, ge);
    };
  }
  function F(R, M, W) {
    const ge = M.send, te = M.ts, Ee = M.methodLevel, Oe = M.methodValue, et = M.val, C = R._logEvent.bindings;
    w(
      W,
      R._serialize || Object.keys(R.serializers),
      R.serializers,
      R._stdErrSerialize === void 0 ? !0 : R._stdErrSerialize
    ), R._logEvent.ts = te, R._logEvent.messages = W.filter(function(D) {
      return C.indexOf(D) === -1;
    }), R._logEvent.level.label = Ee, R._logEvent.level.value = Oe, ge(Ee, R._logEvent, et), R._logEvent = U(C);
  }
  function U(R) {
    return {
      ts: 0,
      messages: [],
      bindings: R || [],
      level: { label: "", value: 0 }
    };
  }
  function H(R) {
    const M = {
      type: R.constructor.name,
      msg: R.message,
      stack: R.stack
    };
    for (const W in R)
      M[W] === void 0 && (M[W] = R[W]);
    return M;
  }
  function k(R) {
    return typeof R.timestamp == "function" ? R.timestamp : R.timestamp === !1 ? be : de;
  }
  function z() {
    return {};
  }
  function G(R) {
    return R;
  }
  function ae() {
  }
  function be() {
    return !1;
  }
  function de() {
    return Date.now();
  }
  function pe() {
    return Math.round(Date.now() / 1e3);
  }
  function ue() {
    return new Date(Date.now()).toISOString();
  }
  function he() {
    function R(M) {
      return typeof M < "u" && M;
    }
    try {
      return typeof globalThis < "u" || Object.defineProperty(Object.prototype, "globalThis", {
        get: function() {
          return delete Object.prototype.globalThis, this.globalThis = this;
        },
        configurable: !0
      }), globalThis;
    } catch {
      return R(self) || R(window) || R(this) || {};
    }
  }
  return Bo;
}
var Li = {}, jh;
function Dl() {
  return jh || (jh = 1, Object.defineProperty(Li, "__esModule", { value: !0 }), Li.PINO_CUSTOM_CONTEXT_KEY = Li.PINO_LOGGER_DEFAULTS = void 0, Li.PINO_LOGGER_DEFAULTS = {
    level: "info"
  }, Li.PINO_CUSTOM_CONTEXT_KEY = "custom_context"), Li;
}
var Xt = {}, zh;
function W1() {
  if (zh)
    return Xt;
  zh = 1, Object.defineProperty(Xt, "__esModule", { value: !0 }), Xt.generateChildLogger = Xt.formatChildLoggerContext = Xt.getLoggerContext = Xt.setBrowserLoggerContext = Xt.getBrowserLoggerContext = Xt.getDefaultLoggerOptions = void 0;
  const h = Dl();
  function i(v) {
    return Object.assign(Object.assign({}, v), { level: (v == null ? void 0 : v.level) || h.PINO_LOGGER_DEFAULTS.level });
  }
  Xt.getDefaultLoggerOptions = i;
  function r(v, w = h.PINO_CUSTOM_CONTEXT_KEY) {
    return v[w] || "";
  }
  Xt.getBrowserLoggerContext = r;
  function n(v, w, I = h.PINO_CUSTOM_CONTEXT_KEY) {
    return v[I] = w, v;
  }
  Xt.setBrowserLoggerContext = n;
  function a(v, w = h.PINO_CUSTOM_CONTEXT_KEY) {
    let I = "";
    return typeof v.bindings > "u" ? I = r(v, w) : I = v.bindings().context || "", I;
  }
  Xt.getLoggerContext = a;
  function l(v, w, I = h.PINO_CUSTOM_CONTEXT_KEY) {
    const F = a(v, I);
    return F.trim() ? `${F}/${w}` : w;
  }
  Xt.formatChildLoggerContext = l;
  function d(v, w, I = h.PINO_CUSTOM_CONTEXT_KEY) {
    const F = l(v, w, I), U = v.child({ context: F });
    return n(U, F, I);
  }
  return Xt.generateChildLogger = d, Xt;
}
(function(h) {
  Object.defineProperty(h, "__esModule", { value: !0 }), h.pino = void 0;
  const i = ji, r = i.__importDefault(G1());
  Object.defineProperty(h, "pino", { enumerable: !0, get: function() {
    return r.default;
  } }), i.__exportStar(Dl(), h), i.__exportStar(W1(), h);
})(Ae);
class J1 extends zi {
  constructor(i) {
    super(), this.opts = i, this.protocol = "wc", this.version = 2;
  }
}
class Q1 extends zi {
  constructor(i, r) {
    super(), this.core = i, this.logger = r, this.records = /* @__PURE__ */ new Map();
  }
}
class Y1 {
  constructor(i, r) {
    this.logger = i, this.core = r;
  }
}
let Z1 = class extends zi {
  constructor(i, r) {
    super(), this.relayer = i, this.logger = r;
  }
}, X1 = class extends zi {
  constructor(i) {
    super();
  }
}, em = class {
  constructor(i, r, n, a) {
    this.core = i, this.logger = r, this.name = n;
  }
};
class tm extends zi {
  constructor(i, r) {
    super(), this.relayer = i, this.logger = r;
  }
}
let rm = class extends zi {
  constructor(i, r) {
    super(), this.core = i, this.logger = r;
  }
}, im = class {
  constructor(i, r) {
    this.projectId = i, this.logger = r;
  }
}, sm = class {
  constructor(i) {
    this.opts = i, this.protocol = "wc", this.version = 2;
  }
}, nm = class {
  constructor(i) {
    this.client = i;
  }
};
var vc = {}, ql = {};
(function(h) {
  Object.defineProperty(h, "__esModule", { value: !0 });
  var i = zy, r = xl;
  h.DIGEST_LENGTH = 64, h.BLOCK_SIZE = 128;
  var n = (
    /** @class */
    function() {
      function v() {
        this.digestLength = h.DIGEST_LENGTH, this.blockSize = h.BLOCK_SIZE, this._stateHi = new Int32Array(8), this._stateLo = new Int32Array(8), this._tempHi = new Int32Array(16), this._tempLo = new Int32Array(16), this._buffer = new Uint8Array(256), this._bufferLength = 0, this._bytesHashed = 0, this._finished = !1, this.reset();
      }
      return v.prototype._initState = function() {
        this._stateHi[0] = 1779033703, this._stateHi[1] = 3144134277, this._stateHi[2] = 1013904242, this._stateHi[3] = 2773480762, this._stateHi[4] = 1359893119, this._stateHi[5] = 2600822924, this._stateHi[6] = 528734635, this._stateHi[7] = 1541459225, this._stateLo[0] = 4089235720, this._stateLo[1] = 2227873595, this._stateLo[2] = 4271175723, this._stateLo[3] = 1595750129, this._stateLo[4] = 2917565137, this._stateLo[5] = 725511199, this._stateLo[6] = 4215389547, this._stateLo[7] = 327033209;
      }, v.prototype.reset = function() {
        return this._initState(), this._bufferLength = 0, this._bytesHashed = 0, this._finished = !1, this;
      }, v.prototype.clean = function() {
        r.wipe(this._buffer), r.wipe(this._tempHi), r.wipe(this._tempLo), this.reset();
      }, v.prototype.update = function(w, I) {
        if (I === void 0 && (I = w.length), this._finished)
          throw new Error("SHA512: can't update because hash was finished.");
        var F = 0;
        if (this._bytesHashed += I, this._bufferLength > 0) {
          for (; this._bufferLength < h.BLOCK_SIZE && I > 0; )
            this._buffer[this._bufferLength++] = w[F++], I--;
          this._bufferLength === this.blockSize && (l(this._tempHi, this._tempLo, this._stateHi, this._stateLo, this._buffer, 0, this.blockSize), this._bufferLength = 0);
        }
        for (I >= this.blockSize && (F = l(this._tempHi, this._tempLo, this._stateHi, this._stateLo, w, F, I), I %= this.blockSize); I > 0; )
          this._buffer[this._bufferLength++] = w[F++], I--;
        return this;
      }, v.prototype.finish = function(w) {
        if (!this._finished) {
          var I = this._bytesHashed, F = this._bufferLength, U = I / 536870912 | 0, H = I << 3, k = I % 128 < 112 ? 128 : 256;
          this._buffer[F] = 128;
          for (var z = F + 1; z < k - 8; z++)
            this._buffer[z] = 0;
          i.writeUint32BE(U, this._buffer, k - 8), i.writeUint32BE(H, this._buffer, k - 4), l(this._tempHi, this._tempLo, this._stateHi, this._stateLo, this._buffer, 0, k), this._finished = !0;
        }
        for (var z = 0; z < this.digestLength / 8; z++)
          i.writeUint32BE(this._stateHi[z], w, z * 8), i.writeUint32BE(this._stateLo[z], w, z * 8 + 4);
        return this;
      }, v.prototype.digest = function() {
        var w = new Uint8Array(this.digestLength);
        return this.finish(w), w;
      }, v.prototype.saveState = function() {
        if (this._finished)
          throw new Error("SHA256: cannot save finished state");
        return {
          stateHi: new Int32Array(this._stateHi),
          stateLo: new Int32Array(this._stateLo),
          buffer: this._bufferLength > 0 ? new Uint8Array(this._buffer) : void 0,
          bufferLength: this._bufferLength,
          bytesHashed: this._bytesHashed
        };
      }, v.prototype.restoreState = function(w) {
        return this._stateHi.set(w.stateHi), this._stateLo.set(w.stateLo), this._bufferLength = w.bufferLength, w.buffer && this._buffer.set(w.buffer), this._bytesHashed = w.bytesHashed, this._finished = !1, this;
      }, v.prototype.cleanSavedState = function(w) {
        r.wipe(w.stateHi), r.wipe(w.stateLo), w.buffer && r.wipe(w.buffer), w.bufferLength = 0, w.bytesHashed = 0;
      }, v;
    }()
  );
  h.SHA512 = n;
  var a = new Int32Array([
    1116352408,
    3609767458,
    1899447441,
    602891725,
    3049323471,
    3964484399,
    3921009573,
    2173295548,
    961987163,
    4081628472,
    1508970993,
    3053834265,
    2453635748,
    2937671579,
    2870763221,
    3664609560,
    3624381080,
    2734883394,
    310598401,
    1164996542,
    607225278,
    1323610764,
    1426881987,
    3590304994,
    1925078388,
    4068182383,
    2162078206,
    991336113,
    2614888103,
    633803317,
    3248222580,
    3479774868,
    3835390401,
    2666613458,
    4022224774,
    944711139,
    264347078,
    2341262773,
    604807628,
    2007800933,
    770255983,
    1495990901,
    1249150122,
    1856431235,
    1555081692,
    3175218132,
    1996064986,
    2198950837,
    2554220882,
    3999719339,
    2821834349,
    766784016,
    2952996808,
    2566594879,
    3210313671,
    3203337956,
    3336571891,
    1034457026,
    3584528711,
    2466948901,
    113926993,
    3758326383,
    338241895,
    168717936,
    666307205,
    1188179964,
    773529912,
    1546045734,
    1294757372,
    1522805485,
    1396182291,
    2643833823,
    1695183700,
    2343527390,
    1986661051,
    1014477480,
    2177026350,
    1206759142,
    2456956037,
    344077627,
    2730485921,
    1290863460,
    2820302411,
    3158454273,
    3259730800,
    3505952657,
    3345764771,
    106217008,
    3516065817,
    3606008344,
    3600352804,
    1432725776,
    4094571909,
    1467031594,
    275423344,
    851169720,
    430227734,
    3100823752,
    506948616,
    1363258195,
    659060556,
    3750685593,
    883997877,
    3785050280,
    958139571,
    3318307427,
    1322822218,
    3812723403,
    1537002063,
    2003034995,
    1747873779,
    3602036899,
    1955562222,
    1575990012,
    2024104815,
    1125592928,
    2227730452,
    2716904306,
    2361852424,
    442776044,
    2428436474,
    593698344,
    2756734187,
    3733110249,
    3204031479,
    2999351573,
    3329325298,
    3815920427,
    3391569614,
    3928383900,
    3515267271,
    566280711,
    3940187606,
    3454069534,
    4118630271,
    4000239992,
    116418474,
    1914138554,
    174292421,
    2731055270,
    289380356,
    3203993006,
    460393269,
    320620315,
    685471733,
    587496836,
    852142971,
    1086792851,
    1017036298,
    365543100,
    1126000580,
    2618297676,
    1288033470,
    3409855158,
    1501505948,
    4234509866,
    1607167915,
    987167468,
    1816402316,
    1246189591
  ]);
  function l(v, w, I, F, U, H, k) {
    for (var z = I[0], G = I[1], ae = I[2], be = I[3], de = I[4], pe = I[5], ue = I[6], he = I[7], R = F[0], M = F[1], W = F[2], ge = F[3], te = F[4], Ee = F[5], Oe = F[6], et = F[7], C, D, je, Re, J, K, j, V; k >= 128; ) {
      for (var ut = 0; ut < 16; ut++) {
        var He = 8 * ut + H;
        v[ut] = i.readUint32BE(U, He), w[ut] = i.readUint32BE(U, He + 4);
      }
      for (var ut = 0; ut < 80; ut++) {
        var Fr = z, we = G, xt = ae, O = be, A = de, S = pe, c = ue, _ = he, X = R, oe = M, ye = W, Te = ge, Fe = te, Ie = Ee, It = Oe, mt = et;
        if (C = he, D = et, J = D & 65535, K = D >>> 16, j = C & 65535, V = C >>> 16, C = (de >>> 14 | te << 32 - 14) ^ (de >>> 18 | te << 32 - 18) ^ (te >>> 41 - 32 | de << 32 - (41 - 32)), D = (te >>> 14 | de << 32 - 14) ^ (te >>> 18 | de << 32 - 18) ^ (de >>> 41 - 32 | te << 32 - (41 - 32)), J += D & 65535, K += D >>> 16, j += C & 65535, V += C >>> 16, C = de & pe ^ ~de & ue, D = te & Ee ^ ~te & Oe, J += D & 65535, K += D >>> 16, j += C & 65535, V += C >>> 16, C = a[ut * 2], D = a[ut * 2 + 1], J += D & 65535, K += D >>> 16, j += C & 65535, V += C >>> 16, C = v[ut % 16], D = w[ut % 16], J += D & 65535, K += D >>> 16, j += C & 65535, V += C >>> 16, K += J >>> 16, j += K >>> 16, V += j >>> 16, je = j & 65535 | V << 16, Re = J & 65535 | K << 16, C = je, D = Re, J = D & 65535, K = D >>> 16, j = C & 65535, V = C >>> 16, C = (z >>> 28 | R << 32 - 28) ^ (R >>> 34 - 32 | z << 32 - (34 - 32)) ^ (R >>> 39 - 32 | z << 32 - (39 - 32)), D = (R >>> 28 | z << 32 - 28) ^ (z >>> 34 - 32 | R << 32 - (34 - 32)) ^ (z >>> 39 - 32 | R << 32 - (39 - 32)), J += D & 65535, K += D >>> 16, j += C & 65535, V += C >>> 16, C = z & G ^ z & ae ^ G & ae, D = R & M ^ R & W ^ M & W, J += D & 65535, K += D >>> 16, j += C & 65535, V += C >>> 16, K += J >>> 16, j += K >>> 16, V += j >>> 16, _ = j & 65535 | V << 16, mt = J & 65535 | K << 16, C = O, D = Te, J = D & 65535, K = D >>> 16, j = C & 65535, V = C >>> 16, C = je, D = Re, J += D & 65535, K += D >>> 16, j += C & 65535, V += C >>> 16, K += J >>> 16, j += K >>> 16, V += j >>> 16, O = j & 65535 | V << 16, Te = J & 65535 | K << 16, G = Fr, ae = we, be = xt, de = O, pe = A, ue = S, he = c, z = _, M = X, W = oe, ge = ye, te = Te, Ee = Fe, Oe = Ie, et = It, R = mt, ut % 16 === 15)
          for (var He = 0; He < 16; He++)
            C = v[He], D = w[He], J = D & 65535, K = D >>> 16, j = C & 65535, V = C >>> 16, C = v[(He + 9) % 16], D = w[(He + 9) % 16], J += D & 65535, K += D >>> 16, j += C & 65535, V += C >>> 16, je = v[(He + 1) % 16], Re = w[(He + 1) % 16], C = (je >>> 1 | Re << 32 - 1) ^ (je >>> 8 | Re << 32 - 8) ^ je >>> 7, D = (Re >>> 1 | je << 32 - 1) ^ (Re >>> 8 | je << 32 - 8) ^ (Re >>> 7 | je << 32 - 7), J += D & 65535, K += D >>> 16, j += C & 65535, V += C >>> 16, je = v[(He + 14) % 16], Re = w[(He + 14) % 16], C = (je >>> 19 | Re << 32 - 19) ^ (Re >>> 61 - 32 | je << 32 - (61 - 32)) ^ je >>> 6, D = (Re >>> 19 | je << 32 - 19) ^ (je >>> 61 - 32 | Re << 32 - (61 - 32)) ^ (Re >>> 6 | je << 32 - 6), J += D & 65535, K += D >>> 16, j += C & 65535, V += C >>> 16, K += J >>> 16, j += K >>> 16, V += j >>> 16, v[He] = j & 65535 | V << 16, w[He] = J & 65535 | K << 16;
      }
      C = z, D = R, J = D & 65535, K = D >>> 16, j = C & 65535, V = C >>> 16, C = I[0], D = F[0], J += D & 65535, K += D >>> 16, j += C & 65535, V += C >>> 16, K += J >>> 16, j += K >>> 16, V += j >>> 16, I[0] = z = j & 65535 | V << 16, F[0] = R = J & 65535 | K << 16, C = G, D = M, J = D & 65535, K = D >>> 16, j = C & 65535, V = C >>> 16, C = I[1], D = F[1], J += D & 65535, K += D >>> 16, j += C & 65535, V += C >>> 16, K += J >>> 16, j += K >>> 16, V += j >>> 16, I[1] = G = j & 65535 | V << 16, F[1] = M = J & 65535 | K << 16, C = ae, D = W, J = D & 65535, K = D >>> 16, j = C & 65535, V = C >>> 16, C = I[2], D = F[2], J += D & 65535, K += D >>> 16, j += C & 65535, V += C >>> 16, K += J >>> 16, j += K >>> 16, V += j >>> 16, I[2] = ae = j & 65535 | V << 16, F[2] = W = J & 65535 | K << 16, C = be, D = ge, J = D & 65535, K = D >>> 16, j = C & 65535, V = C >>> 16, C = I[3], D = F[3], J += D & 65535, K += D >>> 16, j += C & 65535, V += C >>> 16, K += J >>> 16, j += K >>> 16, V += j >>> 16, I[3] = be = j & 65535 | V << 16, F[3] = ge = J & 65535 | K << 16, C = de, D = te, J = D & 65535, K = D >>> 16, j = C & 65535, V = C >>> 16, C = I[4], D = F[4], J += D & 65535, K += D >>> 16, j += C & 65535, V += C >>> 16, K += J >>> 16, j += K >>> 16, V += j >>> 16, I[4] = de = j & 65535 | V << 16, F[4] = te = J & 65535 | K << 16, C = pe, D = Ee, J = D & 65535, K = D >>> 16, j = C & 65535, V = C >>> 16, C = I[5], D = F[5], J += D & 65535, K += D >>> 16, j += C & 65535, V += C >>> 16, K += J >>> 16, j += K >>> 16, V += j >>> 16, I[5] = pe = j & 65535 | V << 16, F[5] = Ee = J & 65535 | K << 16, C = ue, D = Oe, J = D & 65535, K = D >>> 16, j = C & 65535, V = C >>> 16, C = I[6], D = F[6], J += D & 65535, K += D >>> 16, j += C & 65535, V += C >>> 16, K += J >>> 16, j += K >>> 16, V += j >>> 16, I[6] = ue = j & 65535 | V << 16, F[6] = Oe = J & 65535 | K << 16, C = he, D = et, J = D & 65535, K = D >>> 16, j = C & 65535, V = C >>> 16, C = I[7], D = F[7], J += D & 65535, K += D >>> 16, j += C & 65535, V += C >>> 16, K += J >>> 16, j += K >>> 16, V += j >>> 16, I[7] = he = j & 65535 | V << 16, F[7] = et = J & 65535 | K << 16, H += 128, k -= 128;
    }
    return H;
  }
  function d(v) {
    var w = new n();
    w.update(v);
    var I = w.digest();
    return w.clean(), I;
  }
  h.hash = d;
})(ql);
(function(h) {
  Object.defineProperty(h, "__esModule", { value: !0 }), h.convertSecretKeyToX25519 = h.convertPublicKeyToX25519 = h.verify = h.sign = h.extractPublicKeyFromSecretKey = h.generateKeyPair = h.generateKeyPairFromSeed = h.SEED_LENGTH = h.SECRET_KEY_LENGTH = h.PUBLIC_KEY_LENGTH = h.SIGNATURE_LENGTH = void 0;
  const i = Il, r = ql, n = xl;
  h.SIGNATURE_LENGTH = 64, h.PUBLIC_KEY_LENGTH = 32, h.SECRET_KEY_LENGTH = 64, h.SEED_LENGTH = 32;
  function a(O) {
    const A = new Float64Array(16);
    if (O)
      for (let S = 0; S < O.length; S++)
        A[S] = O[S];
    return A;
  }
  const l = new Uint8Array(32);
  l[0] = 9;
  const d = a(), v = a([1]), w = a([
    30883,
    4953,
    19914,
    30187,
    55467,
    16705,
    2637,
    112,
    59544,
    30585,
    16505,
    36039,
    65139,
    11119,
    27886,
    20995
  ]), I = a([
    61785,
    9906,
    39828,
    60374,
    45398,
    33411,
    5274,
    224,
    53552,
    61171,
    33010,
    6542,
    64743,
    22239,
    55772,
    9222
  ]), F = a([
    54554,
    36645,
    11616,
    51542,
    42930,
    38181,
    51040,
    26924,
    56412,
    64982,
    57905,
    49316,
    21502,
    52590,
    14035,
    8553
  ]), U = a([
    26200,
    26214,
    26214,
    26214,
    26214,
    26214,
    26214,
    26214,
    26214,
    26214,
    26214,
    26214,
    26214,
    26214,
    26214,
    26214
  ]), H = a([
    41136,
    18958,
    6951,
    50414,
    58488,
    44335,
    6150,
    12099,
    55207,
    15867,
    153,
    11085,
    57099,
    20417,
    9344,
    11139
  ]);
  function k(O, A) {
    for (let S = 0; S < 16; S++)
      O[S] = A[S] | 0;
  }
  function z(O) {
    let A = 1;
    for (let S = 0; S < 16; S++) {
      let c = O[S] + A + 65535;
      A = Math.floor(c / 65536), O[S] = c - A * 65536;
    }
    O[0] += A - 1 + 37 * (A - 1);
  }
  function G(O, A, S) {
    const c = ~(S - 1);
    for (let _ = 0; _ < 16; _++) {
      const X = c & (O[_] ^ A[_]);
      O[_] ^= X, A[_] ^= X;
    }
  }
  function ae(O, A) {
    const S = a(), c = a();
    for (let _ = 0; _ < 16; _++)
      c[_] = A[_];
    z(c), z(c), z(c);
    for (let _ = 0; _ < 2; _++) {
      S[0] = c[0] - 65517;
      for (let oe = 1; oe < 15; oe++)
        S[oe] = c[oe] - 65535 - (S[oe - 1] >> 16 & 1), S[oe - 1] &= 65535;
      S[15] = c[15] - 32767 - (S[14] >> 16 & 1);
      const X = S[15] >> 16 & 1;
      S[14] &= 65535, G(c, S, 1 - X);
    }
    for (let _ = 0; _ < 16; _++)
      O[2 * _] = c[_] & 255, O[2 * _ + 1] = c[_] >> 8;
  }
  function be(O, A) {
    let S = 0;
    for (let c = 0; c < 32; c++)
      S |= O[c] ^ A[c];
    return (1 & S - 1 >>> 8) - 1;
  }
  function de(O, A) {
    const S = new Uint8Array(32), c = new Uint8Array(32);
    return ae(S, O), ae(c, A), be(S, c);
  }
  function pe(O) {
    const A = new Uint8Array(32);
    return ae(A, O), A[0] & 1;
  }
  function ue(O, A) {
    for (let S = 0; S < 16; S++)
      O[S] = A[2 * S] + (A[2 * S + 1] << 8);
    O[15] &= 32767;
  }
  function he(O, A, S) {
    for (let c = 0; c < 16; c++)
      O[c] = A[c] + S[c];
  }
  function R(O, A, S) {
    for (let c = 0; c < 16; c++)
      O[c] = A[c] - S[c];
  }
  function M(O, A, S) {
    let c, _, X = 0, oe = 0, ye = 0, Te = 0, Fe = 0, Ie = 0, It = 0, mt = 0, nt = 0, De = 0, Je = 0, Qe = 0, at = 0, ze = 0, Ye = 0, Ne = 0, ke = 0, ht = 0, Le = 0, St = 0, $t = 0, zt = 0, Ut = 0, Lt = 0, Gt = 0, tr = 0, $r = 0, Wt = 0, Hr = 0, ni = 0, Ei = 0, lt = S[0], tt = S[1], ft = S[2], pt = S[3], ot = S[4], rt = S[5], Pt = S[6], Ct = S[7], dt = S[8], At = S[9], gt = S[10], wt = S[11], vt = S[12], We = S[13], Ot = S[14], Rt = S[15];
    c = A[0], X += c * lt, oe += c * tt, ye += c * ft, Te += c * pt, Fe += c * ot, Ie += c * rt, It += c * Pt, mt += c * Ct, nt += c * dt, De += c * At, Je += c * gt, Qe += c * wt, at += c * vt, ze += c * We, Ye += c * Ot, Ne += c * Rt, c = A[1], oe += c * lt, ye += c * tt, Te += c * ft, Fe += c * pt, Ie += c * ot, It += c * rt, mt += c * Pt, nt += c * Ct, De += c * dt, Je += c * At, Qe += c * gt, at += c * wt, ze += c * vt, Ye += c * We, Ne += c * Ot, ke += c * Rt, c = A[2], ye += c * lt, Te += c * tt, Fe += c * ft, Ie += c * pt, It += c * ot, mt += c * rt, nt += c * Pt, De += c * Ct, Je += c * dt, Qe += c * At, at += c * gt, ze += c * wt, Ye += c * vt, Ne += c * We, ke += c * Ot, ht += c * Rt, c = A[3], Te += c * lt, Fe += c * tt, Ie += c * ft, It += c * pt, mt += c * ot, nt += c * rt, De += c * Pt, Je += c * Ct, Qe += c * dt, at += c * At, ze += c * gt, Ye += c * wt, Ne += c * vt, ke += c * We, ht += c * Ot, Le += c * Rt, c = A[4], Fe += c * lt, Ie += c * tt, It += c * ft, mt += c * pt, nt += c * ot, De += c * rt, Je += c * Pt, Qe += c * Ct, at += c * dt, ze += c * At, Ye += c * gt, Ne += c * wt, ke += c * vt, ht += c * We, Le += c * Ot, St += c * Rt, c = A[5], Ie += c * lt, It += c * tt, mt += c * ft, nt += c * pt, De += c * ot, Je += c * rt, Qe += c * Pt, at += c * Ct, ze += c * dt, Ye += c * At, Ne += c * gt, ke += c * wt, ht += c * vt, Le += c * We, St += c * Ot, $t += c * Rt, c = A[6], It += c * lt, mt += c * tt, nt += c * ft, De += c * pt, Je += c * ot, Qe += c * rt, at += c * Pt, ze += c * Ct, Ye += c * dt, Ne += c * At, ke += c * gt, ht += c * wt, Le += c * vt, St += c * We, $t += c * Ot, zt += c * Rt, c = A[7], mt += c * lt, nt += c * tt, De += c * ft, Je += c * pt, Qe += c * ot, at += c * rt, ze += c * Pt, Ye += c * Ct, Ne += c * dt, ke += c * At, ht += c * gt, Le += c * wt, St += c * vt, $t += c * We, zt += c * Ot, Ut += c * Rt, c = A[8], nt += c * lt, De += c * tt, Je += c * ft, Qe += c * pt, at += c * ot, ze += c * rt, Ye += c * Pt, Ne += c * Ct, ke += c * dt, ht += c * At, Le += c * gt, St += c * wt, $t += c * vt, zt += c * We, Ut += c * Ot, Lt += c * Rt, c = A[9], De += c * lt, Je += c * tt, Qe += c * ft, at += c * pt, ze += c * ot, Ye += c * rt, Ne += c * Pt, ke += c * Ct, ht += c * dt, Le += c * At, St += c * gt, $t += c * wt, zt += c * vt, Ut += c * We, Lt += c * Ot, Gt += c * Rt, c = A[10], Je += c * lt, Qe += c * tt, at += c * ft, ze += c * pt, Ye += c * ot, Ne += c * rt, ke += c * Pt, ht += c * Ct, Le += c * dt, St += c * At, $t += c * gt, zt += c * wt, Ut += c * vt, Lt += c * We, Gt += c * Ot, tr += c * Rt, c = A[11], Qe += c * lt, at += c * tt, ze += c * ft, Ye += c * pt, Ne += c * ot, ke += c * rt, ht += c * Pt, Le += c * Ct, St += c * dt, $t += c * At, zt += c * gt, Ut += c * wt, Lt += c * vt, Gt += c * We, tr += c * Ot, $r += c * Rt, c = A[12], at += c * lt, ze += c * tt, Ye += c * ft, Ne += c * pt, ke += c * ot, ht += c * rt, Le += c * Pt, St += c * Ct, $t += c * dt, zt += c * At, Ut += c * gt, Lt += c * wt, Gt += c * vt, tr += c * We, $r += c * Ot, Wt += c * Rt, c = A[13], ze += c * lt, Ye += c * tt, Ne += c * ft, ke += c * pt, ht += c * ot, Le += c * rt, St += c * Pt, $t += c * Ct, zt += c * dt, Ut += c * At, Lt += c * gt, Gt += c * wt, tr += c * vt, $r += c * We, Wt += c * Ot, Hr += c * Rt, c = A[14], Ye += c * lt, Ne += c * tt, ke += c * ft, ht += c * pt, Le += c * ot, St += c * rt, $t += c * Pt, zt += c * Ct, Ut += c * dt, Lt += c * At, Gt += c * gt, tr += c * wt, $r += c * vt, Wt += c * We, Hr += c * Ot, ni += c * Rt, c = A[15], Ne += c * lt, ke += c * tt, ht += c * ft, Le += c * pt, St += c * ot, $t += c * rt, zt += c * Pt, Ut += c * Ct, Lt += c * dt, Gt += c * At, tr += c * gt, $r += c * wt, Wt += c * vt, Hr += c * We, ni += c * Ot, Ei += c * Rt, X += 38 * ke, oe += 38 * ht, ye += 38 * Le, Te += 38 * St, Fe += 38 * $t, Ie += 38 * zt, It += 38 * Ut, mt += 38 * Lt, nt += 38 * Gt, De += 38 * tr, Je += 38 * $r, Qe += 38 * Wt, at += 38 * Hr, ze += 38 * ni, Ye += 38 * Ei, _ = 1, c = X + _ + 65535, _ = Math.floor(c / 65536), X = c - _ * 65536, c = oe + _ + 65535, _ = Math.floor(c / 65536), oe = c - _ * 65536, c = ye + _ + 65535, _ = Math.floor(c / 65536), ye = c - _ * 65536, c = Te + _ + 65535, _ = Math.floor(c / 65536), Te = c - _ * 65536, c = Fe + _ + 65535, _ = Math.floor(c / 65536), Fe = c - _ * 65536, c = Ie + _ + 65535, _ = Math.floor(c / 65536), Ie = c - _ * 65536, c = It + _ + 65535, _ = Math.floor(c / 65536), It = c - _ * 65536, c = mt + _ + 65535, _ = Math.floor(c / 65536), mt = c - _ * 65536, c = nt + _ + 65535, _ = Math.floor(c / 65536), nt = c - _ * 65536, c = De + _ + 65535, _ = Math.floor(c / 65536), De = c - _ * 65536, c = Je + _ + 65535, _ = Math.floor(c / 65536), Je = c - _ * 65536, c = Qe + _ + 65535, _ = Math.floor(c / 65536), Qe = c - _ * 65536, c = at + _ + 65535, _ = Math.floor(c / 65536), at = c - _ * 65536, c = ze + _ + 65535, _ = Math.floor(c / 65536), ze = c - _ * 65536, c = Ye + _ + 65535, _ = Math.floor(c / 65536), Ye = c - _ * 65536, c = Ne + _ + 65535, _ = Math.floor(c / 65536), Ne = c - _ * 65536, X += _ - 1 + 37 * (_ - 1), _ = 1, c = X + _ + 65535, _ = Math.floor(c / 65536), X = c - _ * 65536, c = oe + _ + 65535, _ = Math.floor(c / 65536), oe = c - _ * 65536, c = ye + _ + 65535, _ = Math.floor(c / 65536), ye = c - _ * 65536, c = Te + _ + 65535, _ = Math.floor(c / 65536), Te = c - _ * 65536, c = Fe + _ + 65535, _ = Math.floor(c / 65536), Fe = c - _ * 65536, c = Ie + _ + 65535, _ = Math.floor(c / 65536), Ie = c - _ * 65536, c = It + _ + 65535, _ = Math.floor(c / 65536), It = c - _ * 65536, c = mt + _ + 65535, _ = Math.floor(c / 65536), mt = c - _ * 65536, c = nt + _ + 65535, _ = Math.floor(c / 65536), nt = c - _ * 65536, c = De + _ + 65535, _ = Math.floor(c / 65536), De = c - _ * 65536, c = Je + _ + 65535, _ = Math.floor(c / 65536), Je = c - _ * 65536, c = Qe + _ + 65535, _ = Math.floor(c / 65536), Qe = c - _ * 65536, c = at + _ + 65535, _ = Math.floor(c / 65536), at = c - _ * 65536, c = ze + _ + 65535, _ = Math.floor(c / 65536), ze = c - _ * 65536, c = Ye + _ + 65535, _ = Math.floor(c / 65536), Ye = c - _ * 65536, c = Ne + _ + 65535, _ = Math.floor(c / 65536), Ne = c - _ * 65536, X += _ - 1 + 37 * (_ - 1), O[0] = X, O[1] = oe, O[2] = ye, O[3] = Te, O[4] = Fe, O[5] = Ie, O[6] = It, O[7] = mt, O[8] = nt, O[9] = De, O[10] = Je, O[11] = Qe, O[12] = at, O[13] = ze, O[14] = Ye, O[15] = Ne;
  }
  function W(O, A) {
    M(O, A, A);
  }
  function ge(O, A) {
    const S = a();
    let c;
    for (c = 0; c < 16; c++)
      S[c] = A[c];
    for (c = 253; c >= 0; c--)
      W(S, S), c !== 2 && c !== 4 && M(S, S, A);
    for (c = 0; c < 16; c++)
      O[c] = S[c];
  }
  function te(O, A) {
    const S = a();
    let c;
    for (c = 0; c < 16; c++)
      S[c] = A[c];
    for (c = 250; c >= 0; c--)
      W(S, S), c !== 1 && M(S, S, A);
    for (c = 0; c < 16; c++)
      O[c] = S[c];
  }
  function Ee(O, A) {
    const S = a(), c = a(), _ = a(), X = a(), oe = a(), ye = a(), Te = a(), Fe = a(), Ie = a();
    R(S, O[1], O[0]), R(Ie, A[1], A[0]), M(S, S, Ie), he(c, O[0], O[1]), he(Ie, A[0], A[1]), M(c, c, Ie), M(_, O[3], A[3]), M(_, _, I), M(X, O[2], A[2]), he(X, X, X), R(oe, c, S), R(ye, X, _), he(Te, X, _), he(Fe, c, S), M(O[0], oe, ye), M(O[1], Fe, Te), M(O[2], Te, ye), M(O[3], oe, Fe);
  }
  function Oe(O, A, S) {
    for (let c = 0; c < 4; c++)
      G(O[c], A[c], S);
  }
  function et(O, A) {
    const S = a(), c = a(), _ = a();
    ge(_, A[2]), M(S, A[0], _), M(c, A[1], _), ae(O, c), O[31] ^= pe(S) << 7;
  }
  function C(O, A, S) {
    k(O[0], d), k(O[1], v), k(O[2], v), k(O[3], d);
    for (let c = 255; c >= 0; --c) {
      const _ = S[c / 8 | 0] >> (c & 7) & 1;
      Oe(O, A, _), Ee(A, O), Ee(O, O), Oe(O, A, _);
    }
  }
  function D(O, A) {
    const S = [a(), a(), a(), a()];
    k(S[0], F), k(S[1], U), k(S[2], v), M(S[3], F, U), C(O, S, A);
  }
  function je(O) {
    if (O.length !== h.SEED_LENGTH)
      throw new Error(`ed25519: seed must be ${h.SEED_LENGTH} bytes`);
    const A = (0, r.hash)(O);
    A[0] &= 248, A[31] &= 127, A[31] |= 64;
    const S = new Uint8Array(32), c = [a(), a(), a(), a()];
    D(c, A), et(S, c);
    const _ = new Uint8Array(64);
    return _.set(O), _.set(S, 32), {
      publicKey: S,
      secretKey: _
    };
  }
  h.generateKeyPairFromSeed = je;
  function Re(O) {
    const A = (0, i.randomBytes)(32, O), S = je(A);
    return (0, n.wipe)(A), S;
  }
  h.generateKeyPair = Re;
  function J(O) {
    if (O.length !== h.SECRET_KEY_LENGTH)
      throw new Error(`ed25519: secret key must be ${h.SECRET_KEY_LENGTH} bytes`);
    return new Uint8Array(O.subarray(32));
  }
  h.extractPublicKeyFromSecretKey = J;
  const K = new Float64Array([
    237,
    211,
    245,
    92,
    26,
    99,
    18,
    88,
    214,
    156,
    247,
    162,
    222,
    249,
    222,
    20,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    16
  ]);
  function j(O, A) {
    let S, c, _, X;
    for (c = 63; c >= 32; --c) {
      for (S = 0, _ = c - 32, X = c - 12; _ < X; ++_)
        A[_] += S - 16 * A[c] * K[_ - (c - 32)], S = Math.floor((A[_] + 128) / 256), A[_] -= S * 256;
      A[_] += S, A[c] = 0;
    }
    for (S = 0, _ = 0; _ < 32; _++)
      A[_] += S - (A[31] >> 4) * K[_], S = A[_] >> 8, A[_] &= 255;
    for (_ = 0; _ < 32; _++)
      A[_] -= S * K[_];
    for (c = 0; c < 32; c++)
      A[c + 1] += A[c] >> 8, O[c] = A[c] & 255;
  }
  function V(O) {
    const A = new Float64Array(64);
    for (let S = 0; S < 64; S++)
      A[S] = O[S];
    for (let S = 0; S < 64; S++)
      O[S] = 0;
    j(O, A);
  }
  function ut(O, A) {
    const S = new Float64Array(64), c = [a(), a(), a(), a()], _ = (0, r.hash)(O.subarray(0, 32));
    _[0] &= 248, _[31] &= 127, _[31] |= 64;
    const X = new Uint8Array(64);
    X.set(_.subarray(32), 32);
    const oe = new r.SHA512();
    oe.update(X.subarray(32)), oe.update(A);
    const ye = oe.digest();
    oe.clean(), V(ye), D(c, ye), et(X, c), oe.reset(), oe.update(X.subarray(0, 32)), oe.update(O.subarray(32)), oe.update(A);
    const Te = oe.digest();
    V(Te);
    for (let Fe = 0; Fe < 32; Fe++)
      S[Fe] = ye[Fe];
    for (let Fe = 0; Fe < 32; Fe++)
      for (let Ie = 0; Ie < 32; Ie++)
        S[Fe + Ie] += Te[Fe] * _[Ie];
    return j(X.subarray(32), S), X;
  }
  h.sign = ut;
  function He(O, A) {
    const S = a(), c = a(), _ = a(), X = a(), oe = a(), ye = a(), Te = a();
    return k(O[2], v), ue(O[1], A), W(_, O[1]), M(X, _, w), R(_, _, O[2]), he(X, O[2], X), W(oe, X), W(ye, oe), M(Te, ye, oe), M(S, Te, _), M(S, S, X), te(S, S), M(S, S, _), M(S, S, X), M(S, S, X), M(O[0], S, X), W(c, O[0]), M(c, c, X), de(c, _) && M(O[0], O[0], H), W(c, O[0]), M(c, c, X), de(c, _) ? -1 : (pe(O[0]) === A[31] >> 7 && R(O[0], d, O[0]), M(O[3], O[0], O[1]), 0);
  }
  function Fr(O, A, S) {
    const c = new Uint8Array(32), _ = [a(), a(), a(), a()], X = [a(), a(), a(), a()];
    if (S.length !== h.SIGNATURE_LENGTH)
      throw new Error(`ed25519: signature must be ${h.SIGNATURE_LENGTH} bytes`);
    if (He(X, O))
      return !1;
    const oe = new r.SHA512();
    oe.update(S.subarray(0, 32)), oe.update(O), oe.update(A);
    const ye = oe.digest();
    return V(ye), C(_, X, ye), D(X, S.subarray(32)), Ee(_, X), et(c, _), !be(S, c);
  }
  h.verify = Fr;
  function we(O) {
    let A = [a(), a(), a(), a()];
    if (He(A, O))
      throw new Error("Ed25519: invalid public key");
    let S = a(), c = a(), _ = A[1];
    he(S, v, _), R(c, v, _), ge(c, c), M(S, S, c);
    let X = new Uint8Array(32);
    return ae(X, S), X;
  }
  h.convertPublicKeyToX25519 = we;
  function xt(O) {
    const A = (0, r.hash)(O.subarray(0, 32));
    A[0] &= 248, A[31] &= 127, A[31] |= 64;
    const S = new Uint8Array(A.subarray(0, 32));
    return (0, n.wipe)(A), S;
  }
  h.convertSecretKeyToX25519 = xt;
})(vc);
const am = "EdDSA", om = "JWT", Ll = ".", Ml = "base64url", cm = "utf8", um = "utf8", hm = ":", lm = "did", fm = "key", Uh = "base58btc", pm = "z", dm = "K36", gm = 32;
function ca(h) {
  return la(uc(lc(h), cm), Ml);
}
function jl(h) {
  const i = uc(dm, Uh), r = pm + la(Uy([i, h]), Uh);
  return [lm, fm, r].join(hm);
}
function vm(h) {
  return la(h, Ml);
}
function ym(h) {
  return uc([ca(h.header), ca(h.payload)].join(Ll), um);
}
function mm(h) {
  return [
    ca(h.header),
    ca(h.payload),
    vm(h.signature)
  ].join(Ll);
}
function Hh(h = Il.randomBytes(gm)) {
  return vc.generateKeyPairFromSeed(h);
}
async function wm(h, i, r, n, a = re.fromMiliseconds(Date.now())) {
  const l = { alg: am, typ: om }, d = jl(n.publicKey), v = a + r, w = { iss: d, sub: h, aud: i, iat: a, exp: v }, I = ym({ header: l, payload: w }), F = vc.sign(n.secretKey, I);
  return mm({ header: l, payload: w, signature: F });
}
const _m = () => typeof WebSocket < "u" ? WebSocket : typeof global < "u" && typeof global.WebSocket < "u" ? global.WebSocket : typeof window < "u" && typeof window.WebSocket < "u" ? window.WebSocket : typeof self < "u" && typeof self.WebSocket < "u" ? self.WebSocket : require("ws"), bm = () => typeof WebSocket < "u" || typeof global < "u" && typeof global.WebSocket < "u" || typeof window < "u" && typeof window.WebSocket < "u" || typeof self < "u" && typeof self.WebSocket < "u", kh = (h) => h.split("?")[0], Kh = 10, Em = _m();
class xm {
  constructor(i) {
    if (this.url = i, this.events = new Ur.EventEmitter(), this.registering = !1, !Ph(i))
      throw new Error(`Provided URL is not compatible with WebSocket connection: ${i}`);
    this.url = i;
  }
  get connected() {
    return typeof this.socket < "u";
  }
  get connecting() {
    return this.registering;
  }
  on(i, r) {
    this.events.on(i, r);
  }
  once(i, r) {
    this.events.once(i, r);
  }
  off(i, r) {
    this.events.off(i, r);
  }
  removeListener(i, r) {
    this.events.removeListener(i, r);
  }
  async open(i = this.url) {
    await this.register(i);
  }
  async close() {
    return new Promise((i, r) => {
      if (typeof this.socket > "u") {
        r(new Error("Connection already closed"));
        return;
      }
      this.socket.onclose = (n) => {
        this.onClose(n), i();
      }, this.socket.close();
    });
  }
  async send(i, r) {
    typeof this.socket > "u" && (this.socket = await this.register());
    try {
      this.socket.send(lc(i));
    } catch (n) {
      this.onError(i.id, n);
    }
  }
  register(i = this.url) {
    if (!Ph(i))
      throw new Error(`Provided URL is not compatible with WebSocket connection: ${i}`);
    if (this.registering) {
      const r = this.events.getMaxListeners();
      return (this.events.listenerCount("register_error") >= r || this.events.listenerCount("open") >= r) && this.events.setMaxListeners(r + 1), new Promise((n, a) => {
        this.events.once("register_error", (l) => {
          this.resetMaxListeners(), a(l);
        }), this.events.once("open", () => {
          if (this.resetMaxListeners(), typeof this.socket > "u")
            return a(new Error("WebSocket connection is missing or invalid"));
          n(this.socket);
        });
      });
    }
    return this.url = i, this.registering = !0, new Promise((r, n) => {
      const a = C1.isReactNative() ? void 0 : { rejectUnauthorized: !A1(i) }, l = new Em(i, [], a);
      bm() ? l.onerror = (d) => {
        const v = d;
        n(this.emitError(v.error));
      } : l.on("error", (d) => {
        n(this.emitError(d));
      }), l.onopen = () => {
        this.onOpen(l), r(l);
      };
    });
  }
  onOpen(i) {
    i.onmessage = (r) => this.onPayload(r), i.onclose = (r) => this.onClose(r), this.socket = i, this.registering = !1, this.events.emit("open");
  }
  onClose(i) {
    this.socket = void 0, this.registering = !1, this.events.emit("close", i);
  }
  onPayload(i) {
    if (typeof i.data > "u")
      return;
    const r = typeof i.data == "string" ? Tl(i.data) : i.data;
    this.events.emit("payload", r);
  }
  onError(i, r) {
    const n = this.parseError(r), a = n.message || n.toString(), l = fc(i, a);
    this.events.emit("payload", l);
  }
  parseError(i, r = this.url) {
    return O1(i, kh(r), "WS");
  }
  resetMaxListeners() {
    this.events.getMaxListeners() > Kh && this.events.setMaxListeners(Kh);
  }
  emitError(i) {
    const r = this.parseError(new Error((i == null ? void 0 : i.message) || `WebSocket connection failed for host: ${kh(this.url)}`));
    return this.events.emit("register_error", r), r;
  }
}
var ua = { exports: {} };
ua.exports;
(function(h, i) {
  var r = 200, n = "__lodash_hash_undefined__", a = 1, l = 2, d = 9007199254740991, v = "[object Arguments]", w = "[object Array]", I = "[object AsyncFunction]", F = "[object Boolean]", U = "[object Date]", H = "[object Error]", k = "[object Function]", z = "[object GeneratorFunction]", G = "[object Map]", ae = "[object Number]", be = "[object Null]", de = "[object Object]", pe = "[object Promise]", ue = "[object Proxy]", he = "[object RegExp]", R = "[object Set]", M = "[object String]", W = "[object Symbol]", ge = "[object Undefined]", te = "[object WeakMap]", Ee = "[object ArrayBuffer]", Oe = "[object DataView]", et = "[object Float32Array]", C = "[object Float64Array]", D = "[object Int8Array]", je = "[object Int16Array]", Re = "[object Int32Array]", J = "[object Uint8Array]", K = "[object Uint8ClampedArray]", j = "[object Uint16Array]", V = "[object Uint32Array]", ut = /[\\^$.*+?()[\]{}|]/g, He = /^\[object .+?Constructor\]$/, Fr = /^(?:0|[1-9]\d*)$/, we = {};
  we[et] = we[C] = we[D] = we[je] = we[Re] = we[J] = we[K] = we[j] = we[V] = !0, we[v] = we[w] = we[Ee] = we[F] = we[Oe] = we[U] = we[H] = we[k] = we[G] = we[ae] = we[de] = we[he] = we[R] = we[M] = we[te] = !1;
  var xt = typeof Mi == "object" && Mi && Mi.Object === Object && Mi, O = typeof self == "object" && self && self.Object === Object && self, A = xt || O || Function("return this")(), S = i && !i.nodeType && i, c = S && !0 && h && !h.nodeType && h, _ = c && c.exports === S, X = _ && xt.process, oe = function() {
    try {
      return X && X.binding && X.binding("util");
    } catch {
    }
  }(), ye = oe && oe.isTypedArray;
  function Te(g, b) {
    for (var q = -1, Q = g == null ? 0 : g.length, Ve = 0, le = []; ++q < Q; ) {
      var Ze = g[q];
      b(Ze, q, g) && (le[Ve++] = Ze);
    }
    return le;
  }
  function Fe(g, b) {
    for (var q = -1, Q = b.length, Ve = g.length; ++q < Q; )
      g[Ve + q] = b[q];
    return g;
  }
  function Ie(g, b) {
    for (var q = -1, Q = g == null ? 0 : g.length; ++q < Q; )
      if (b(g[q], q, g))
        return !0;
    return !1;
  }
  function It(g, b) {
    for (var q = -1, Q = Array(g); ++q < g; )
      Q[q] = b(q);
    return Q;
  }
  function mt(g) {
    return function(b) {
      return g(b);
    };
  }
  function nt(g, b) {
    return g.has(b);
  }
  function De(g, b) {
    return g == null ? void 0 : g[b];
  }
  function Je(g) {
    var b = -1, q = Array(g.size);
    return g.forEach(function(Q, Ve) {
      q[++b] = [Ve, Q];
    }), q;
  }
  function Qe(g, b) {
    return function(q) {
      return g(b(q));
    };
  }
  function at(g) {
    var b = -1, q = Array(g.size);
    return g.forEach(function(Q) {
      q[++b] = Q;
    }), q;
  }
  var ze = Array.prototype, Ye = Function.prototype, Ne = Object.prototype, ke = A["__core-js_shared__"], ht = Ye.toString, Le = Ne.hasOwnProperty, St = function() {
    var g = /[^.]+$/.exec(ke && ke.keys && ke.keys.IE_PROTO || "");
    return g ? "Symbol(src)_1." + g : "";
  }(), $t = Ne.toString, zt = RegExp(
    "^" + ht.call(Le).replace(ut, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  ), Ut = _ ? A.Buffer : void 0, Lt = A.Symbol, Gt = A.Uint8Array, tr = Ne.propertyIsEnumerable, $r = ze.splice, Wt = Lt ? Lt.toStringTag : void 0, Hr = Object.getOwnPropertySymbols, ni = Ut ? Ut.isBuffer : void 0, Ei = Qe(Object.keys, Object), lt = ur(A, "DataView"), tt = ur(A, "Map"), ft = ur(A, "Promise"), pt = ur(A, "Set"), ot = ur(A, "WeakMap"), rt = ur(Object, "create"), Pt = Kr(lt), Ct = Kr(tt), dt = Kr(ft), At = Kr(pt), gt = Kr(ot), wt = Lt ? Lt.prototype : void 0, vt = wt ? wt.valueOf : void 0;
  function We(g) {
    var b = -1, q = g == null ? 0 : g.length;
    for (this.clear(); ++b < q; ) {
      var Q = g[b];
      this.set(Q[0], Q[1]);
    }
  }
  function Ot() {
    this.__data__ = rt ? rt(null) : {}, this.size = 0;
  }
  function Rt(g) {
    var b = this.has(g) && delete this.__data__[g];
    return this.size -= b ? 1 : 0, b;
  }
  function ga(g) {
    var b = this.__data__;
    if (rt) {
      var q = b[g];
      return q === n ? void 0 : q;
    }
    return Le.call(b, g) ? b[g] : void 0;
  }
  function va(g) {
    var b = this.__data__;
    return rt ? b[g] !== void 0 : Le.call(b, g);
  }
  function ya(g, b) {
    var q = this.__data__;
    return this.size += this.has(g) ? 0 : 1, q[g] = rt && b === void 0 ? n : b, this;
  }
  We.prototype.clear = Ot, We.prototype.delete = Rt, We.prototype.get = ga, We.prototype.has = va, We.prototype.set = ya;
  function gr(g) {
    var b = -1, q = g == null ? 0 : g.length;
    for (this.clear(); ++b < q; ) {
      var Q = g[b];
      this.set(Q[0], Q[1]);
    }
  }
  function ma() {
    this.__data__ = [], this.size = 0;
  }
  function wa(g) {
    var b = this.__data__, q = xi(b, g);
    if (q < 0)
      return !1;
    var Q = b.length - 1;
    return q == Q ? b.pop() : $r.call(b, q, 1), --this.size, !0;
  }
  function _a(g) {
    var b = this.__data__, q = xi(b, g);
    return q < 0 ? void 0 : b[q][1];
  }
  function ba(g) {
    return xi(this.__data__, g) > -1;
  }
  function Ea(g, b) {
    var q = this.__data__, Q = xi(q, g);
    return Q < 0 ? (++this.size, q.push([g, b])) : q[Q][1] = b, this;
  }
  gr.prototype.clear = ma, gr.prototype.delete = wa, gr.prototype.get = _a, gr.prototype.has = ba, gr.prototype.set = Ea;
  function kr(g) {
    var b = -1, q = g == null ? 0 : g.length;
    for (this.clear(); ++b < q; ) {
      var Q = g[b];
      this.set(Q[0], Q[1]);
    }
  }
  function Hi() {
    this.size = 0, this.__data__ = {
      hash: new We(),
      map: new (tt || gr)(),
      string: new We()
    };
  }
  function xa(g) {
    var b = ai(this, g).delete(g);
    return this.size -= b ? 1 : 0, b;
  }
  function ki(g) {
    return ai(this, g).get(g);
  }
  function Ia(g) {
    return ai(this, g).has(g);
  }
  function Sa(g, b) {
    var q = ai(this, g), Q = q.size;
    return q.set(g, b), this.size += q.size == Q ? 0 : 1, this;
  }
  kr.prototype.clear = Hi, kr.prototype.delete = xa, kr.prototype.get = ki, kr.prototype.has = Ia, kr.prototype.set = Sa;
  function Ki(g) {
    var b = -1, q = g == null ? 0 : g.length;
    for (this.__data__ = new kr(); ++b < q; )
      this.add(g[b]);
  }
  function Qs(g) {
    return this.__data__.set(g, n), this;
  }
  function Ys(g) {
    return this.__data__.has(g);
  }
  Ki.prototype.add = Ki.prototype.push = Qs, Ki.prototype.has = Ys;
  function Sr(g) {
    var b = this.__data__ = new gr(g);
    this.size = b.size;
  }
  function Pa() {
    this.__data__ = new gr(), this.size = 0;
  }
  function Ca(g) {
    var b = this.__data__, q = b.delete(g);
    return this.size = b.size, q;
  }
  function Aa(g) {
    return this.__data__.get(g);
  }
  function Oa(g) {
    return this.__data__.has(g);
  }
  function Zs(g, b) {
    var q = this.__data__;
    if (q instanceof gr) {
      var Q = q.__data__;
      if (!tt || Q.length < r - 1)
        return Q.push([g, b]), this.size = ++q.size, this;
      q = this.__data__ = new kr(Q);
    }
    return q.set(g, b), this.size = q.size, this;
  }
  Sr.prototype.clear = Pa, Sr.prototype.delete = Ca, Sr.prototype.get = Aa, Sr.prototype.has = Oa, Sr.prototype.set = Zs;
  function Xs(g, b) {
    var q = Gi(g), Q = !q && fn(g), Ve = !q && !Q && vs(g), le = !q && !Q && !Ve && gn(g), Ze = q || Q || Ve || le, Tt = Ze ? It(g.length, String) : [], Pe = Tt.length;
    for (var Be in g)
      (b || Le.call(g, Be)) && !(Ze && // Safari 9 has enumerable `arguments.length` in strict mode.
      (Be == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
      Ve && (Be == "offset" || Be == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
      le && (Be == "buffer" || Be == "byteLength" || Be == "byteOffset") || // Skip index properties.
      on(Be, Pe))) && Tt.push(Be);
    return Tt;
  }
  function xi(g, b) {
    for (var q = g.length; q--; )
      if (ln(g[q][0], b))
        return q;
    return -1;
  }
  function ds(g, b, q) {
    var Q = b(g);
    return Gi(g) ? Q : Fe(Q, q(g));
  }
  function Ii(g) {
    return g == null ? g === void 0 ? ge : be : Wt && Wt in Object(g) ? nn(g) : Na(g);
  }
  function gs(g) {
    return Pi(g) && Ii(g) == v;
  }
  function Si(g, b, q, Q, Ve) {
    return g === b ? !0 : g == null || b == null || !Pi(g) && !Pi(b) ? g !== g && b !== b : en(g, b, q, Q, Si, Ve);
  }
  function en(g, b, q, Q, Ve, le) {
    var Ze = Gi(g), Tt = Gi(b), Pe = Ze ? w : Dr(g), Be = Tt ? w : Dr(b);
    Pe = Pe == v ? de : Pe, Be = Be == v ? de : Be;
    var _t = Pe == de, rr = Be == de, Nt = Pe == Be;
    if (Nt && vs(g)) {
      if (!vs(b))
        return !1;
      Ze = !0, _t = !1;
    }
    if (Nt && !_t)
      return le || (le = new Sr()), Ze || gn(g) ? Vi(g, b, q, Q, Ve, le) : Ta(g, b, Pe, q, Q, Ve, le);
    if (!(q & a)) {
      var Xe = _t && Le.call(g, "__wrapped__"), Jt = rr && Le.call(b, "__wrapped__");
      if (Xe || Jt) {
        var Pr = Xe ? g.value() : g, vr = Jt ? b.value() : b;
        return le || (le = new Sr()), Ve(Pr, vr, q, Q, le);
      }
    }
    return Nt ? (le || (le = new Sr()), sn(g, b, q, Q, Ve, le)) : !1;
  }
  function Ra(g) {
    if (!dn(g) || un(g))
      return !1;
    var b = Wi(g) ? zt : He;
    return b.test(Kr(g));
  }
  function tn(g) {
    return Pi(g) && pn(g.length) && !!we[Ii(g)];
  }
  function rn(g) {
    if (!hn(g))
      return Ei(g);
    var b = [];
    for (var q in Object(g))
      Le.call(g, q) && q != "constructor" && b.push(q);
    return b;
  }
  function Vi(g, b, q, Q, Ve, le) {
    var Ze = q & a, Tt = g.length, Pe = b.length;
    if (Tt != Pe && !(Ze && Pe > Tt))
      return !1;
    var Be = le.get(g);
    if (Be && le.get(b))
      return Be == b;
    var _t = -1, rr = !0, Nt = q & l ? new Ki() : void 0;
    for (le.set(g, b), le.set(b, g); ++_t < Tt; ) {
      var Xe = g[_t], Jt = b[_t];
      if (Q)
        var Pr = Ze ? Q(Jt, Xe, _t, b, g, le) : Q(Xe, Jt, _t, g, b, le);
      if (Pr !== void 0) {
        if (Pr)
          continue;
        rr = !1;
        break;
      }
      if (Nt) {
        if (!Ie(b, function(vr, qr) {
          if (!nt(Nt, qr) && (Xe === vr || Ve(Xe, vr, q, Q, le)))
            return Nt.push(qr);
        })) {
          rr = !1;
          break;
        }
      } else if (!(Xe === Jt || Ve(Xe, Jt, q, Q, le))) {
        rr = !1;
        break;
      }
    }
    return le.delete(g), le.delete(b), rr;
  }
  function Ta(g, b, q, Q, Ve, le, Ze) {
    switch (q) {
      case Oe:
        if (g.byteLength != b.byteLength || g.byteOffset != b.byteOffset)
          return !1;
        g = g.buffer, b = b.buffer;
      case Ee:
        return !(g.byteLength != b.byteLength || !le(new Gt(g), new Gt(b)));
      case F:
      case U:
      case ae:
        return ln(+g, +b);
      case H:
        return g.name == b.name && g.message == b.message;
      case he:
      case M:
        return g == b + "";
      case G:
        var Tt = Je;
      case R:
        var Pe = Q & a;
        if (Tt || (Tt = at), g.size != b.size && !Pe)
          return !1;
        var Be = Ze.get(g);
        if (Be)
          return Be == b;
        Q |= l, Ze.set(g, b);
        var _t = Vi(Tt(g), Tt(b), Q, Ve, le, Ze);
        return Ze.delete(g), _t;
      case W:
        if (vt)
          return vt.call(g) == vt.call(b);
    }
    return !1;
  }
  function sn(g, b, q, Q, Ve, le) {
    var Ze = q & a, Tt = Bi(g), Pe = Tt.length, Be = Bi(b), _t = Be.length;
    if (Pe != _t && !Ze)
      return !1;
    for (var rr = Pe; rr--; ) {
      var Nt = Tt[rr];
      if (!(Ze ? Nt in b : Le.call(b, Nt)))
        return !1;
    }
    var Xe = le.get(g);
    if (Xe && le.get(b))
      return Xe == b;
    var Jt = !0;
    le.set(g, b), le.set(b, g);
    for (var Pr = Ze; ++rr < Pe; ) {
      Nt = Tt[rr];
      var vr = g[Nt], qr = b[Nt];
      if (Q)
        var ys = Ze ? Q(qr, vr, Nt, b, g, le) : Q(vr, qr, Nt, g, b, le);
      if (!(ys === void 0 ? vr === qr || Ve(vr, qr, q, Q, le) : ys)) {
        Jt = !1;
        break;
      }
      Pr || (Pr = Nt == "constructor");
    }
    if (Jt && !Pr) {
      var Ci = g.constructor, Mt = b.constructor;
      Ci != Mt && "constructor" in g && "constructor" in b && !(typeof Ci == "function" && Ci instanceof Ci && typeof Mt == "function" && Mt instanceof Mt) && (Jt = !1);
    }
    return le.delete(g), le.delete(b), Jt;
  }
  function Bi(g) {
    return ds(g, Da, an);
  }
  function ai(g, b) {
    var q = g.__data__;
    return cn(b) ? q[typeof b == "string" ? "string" : "hash"] : q.map;
  }
  function ur(g, b) {
    var q = De(g, b);
    return Ra(q) ? q : void 0;
  }
  function nn(g) {
    var b = Le.call(g, Wt), q = g[Wt];
    try {
      g[Wt] = void 0;
      var Q = !0;
    } catch {
    }
    var Ve = $t.call(g);
    return Q && (b ? g[Wt] = q : delete g[Wt]), Ve;
  }
  var an = Hr ? function(g) {
    return g == null ? [] : (g = Object(g), Te(Hr(g), function(b) {
      return tr.call(g, b);
    }));
  } : Ke, Dr = Ii;
  (lt && Dr(new lt(new ArrayBuffer(1))) != Oe || tt && Dr(new tt()) != G || ft && Dr(ft.resolve()) != pe || pt && Dr(new pt()) != R || ot && Dr(new ot()) != te) && (Dr = function(g) {
    var b = Ii(g), q = b == de ? g.constructor : void 0, Q = q ? Kr(q) : "";
    if (Q)
      switch (Q) {
        case Pt:
          return Oe;
        case Ct:
          return G;
        case dt:
          return pe;
        case At:
          return R;
        case gt:
          return te;
      }
    return b;
  });
  function on(g, b) {
    return b = b ?? d, !!b && (typeof g == "number" || Fr.test(g)) && g > -1 && g % 1 == 0 && g < b;
  }
  function cn(g) {
    var b = typeof g;
    return b == "string" || b == "number" || b == "symbol" || b == "boolean" ? g !== "__proto__" : g === null;
  }
  function un(g) {
    return !!St && St in g;
  }
  function hn(g) {
    var b = g && g.constructor, q = typeof b == "function" && b.prototype || Ne;
    return g === q;
  }
  function Na(g) {
    return $t.call(g);
  }
  function Kr(g) {
    if (g != null) {
      try {
        return ht.call(g);
      } catch {
      }
      try {
        return g + "";
      } catch {
      }
    }
    return "";
  }
  function ln(g, b) {
    return g === b || g !== g && b !== b;
  }
  var fn = gs(function() {
    return arguments;
  }()) ? gs : function(g) {
    return Pi(g) && Le.call(g, "callee") && !tr.call(g, "callee");
  }, Gi = Array.isArray;
  function Fa(g) {
    return g != null && pn(g.length) && !Wi(g);
  }
  var vs = ni || Ue;
  function $a(g, b) {
    return Si(g, b);
  }
  function Wi(g) {
    if (!dn(g))
      return !1;
    var b = Ii(g);
    return b == k || b == z || b == I || b == ue;
  }
  function pn(g) {
    return typeof g == "number" && g > -1 && g % 1 == 0 && g <= d;
  }
  function dn(g) {
    var b = typeof g;
    return g != null && (b == "object" || b == "function");
  }
  function Pi(g) {
    return g != null && typeof g == "object";
  }
  var gn = ye ? mt(ye) : tn;
  function Da(g) {
    return Fa(g) ? Xs(g) : rn(g);
  }
  function Ke() {
    return [];
  }
  function Ue() {
    return !1;
  }
  h.exports = $a;
})(ua, ua.exports);
var Im = ua.exports;
const Sm = /* @__PURE__ */ Hy(Im);
function Pm(h, i) {
  if (h.length >= 255)
    throw new TypeError("Alphabet too long");
  for (var r = new Uint8Array(256), n = 0; n < r.length; n++)
    r[n] = 255;
  for (var a = 0; a < h.length; a++) {
    var l = h.charAt(a), d = l.charCodeAt(0);
    if (r[d] !== 255)
      throw new TypeError(l + " is ambiguous");
    r[d] = a;
  }
  var v = h.length, w = h.charAt(0), I = Math.log(v) / Math.log(256), F = Math.log(256) / Math.log(v);
  function U(z) {
    if (z instanceof Uint8Array || (ArrayBuffer.isView(z) ? z = new Uint8Array(z.buffer, z.byteOffset, z.byteLength) : Array.isArray(z) && (z = Uint8Array.from(z))), !(z instanceof Uint8Array))
      throw new TypeError("Expected Uint8Array");
    if (z.length === 0)
      return "";
    for (var G = 0, ae = 0, be = 0, de = z.length; be !== de && z[be] === 0; )
      be++, G++;
    for (var pe = (de - be) * F + 1 >>> 0, ue = new Uint8Array(pe); be !== de; ) {
      for (var he = z[be], R = 0, M = pe - 1; (he !== 0 || R < ae) && M !== -1; M--, R++)
        he += 256 * ue[M] >>> 0, ue[M] = he % v >>> 0, he = he / v >>> 0;
      if (he !== 0)
        throw new Error("Non-zero carry");
      ae = R, be++;
    }
    for (var W = pe - ae; W !== pe && ue[W] === 0; )
      W++;
    for (var ge = w.repeat(G); W < pe; ++W)
      ge += h.charAt(ue[W]);
    return ge;
  }
  function H(z) {
    if (typeof z != "string")
      throw new TypeError("Expected String");
    if (z.length === 0)
      return new Uint8Array();
    var G = 0;
    if (z[G] !== " ") {
      for (var ae = 0, be = 0; z[G] === w; )
        ae++, G++;
      for (var de = (z.length - G) * I + 1 >>> 0, pe = new Uint8Array(de); z[G]; ) {
        var ue = r[z.charCodeAt(G)];
        if (ue === 255)
          return;
        for (var he = 0, R = de - 1; (ue !== 0 || he < be) && R !== -1; R--, he++)
          ue += v * pe[R] >>> 0, pe[R] = ue % 256 >>> 0, ue = ue / 256 >>> 0;
        if (ue !== 0)
          throw new Error("Non-zero carry");
        be = he, G++;
      }
      if (z[G] !== " ") {
        for (var M = de - be; M !== de && pe[M] === 0; )
          M++;
        for (var W = new Uint8Array(ae + (de - M)), ge = ae; M !== de; )
          W[ge++] = pe[M++];
        return W;
      }
    }
  }
  function k(z) {
    var G = H(z);
    if (G)
      return G;
    throw new Error(`Non-${i} character`);
  }
  return { encode: U, decodeUnsafe: H, decode: k };
}
var Cm = Pm, Am = Cm;
const zl = (h) => {
  if (h instanceof Uint8Array && h.constructor.name === "Uint8Array")
    return h;
  if (h instanceof ArrayBuffer)
    return new Uint8Array(h);
  if (ArrayBuffer.isView(h))
    return new Uint8Array(h.buffer, h.byteOffset, h.byteLength);
  throw new Error("Unknown type, must be binary type");
}, Om = (h) => new TextEncoder().encode(h), Rm = (h) => new TextDecoder().decode(h);
class Tm {
  constructor(i, r, n) {
    this.name = i, this.prefix = r, this.baseEncode = n;
  }
  encode(i) {
    if (i instanceof Uint8Array)
      return `${this.prefix}${this.baseEncode(i)}`;
    throw Error("Unknown type, must be binary type");
  }
}
class Nm {
  constructor(i, r, n) {
    if (this.name = i, this.prefix = r, r.codePointAt(0) === void 0)
      throw new Error("Invalid prefix character");
    this.prefixCodePoint = r.codePointAt(0), this.baseDecode = n;
  }
  decode(i) {
    if (typeof i == "string") {
      if (i.codePointAt(0) !== this.prefixCodePoint)
        throw Error(`Unable to decode multibase string ${JSON.stringify(i)}, ${this.name} decoder only supports inputs prefixed with ${this.prefix}`);
      return this.baseDecode(i.slice(this.prefix.length));
    } else
      throw Error("Can only multibase decode strings");
  }
  or(i) {
    return Ul(this, i);
  }
}
class Fm {
  constructor(i) {
    this.decoders = i;
  }
  or(i) {
    return Ul(this, i);
  }
  decode(i) {
    const r = i[0], n = this.decoders[r];
    if (n)
      return n.decode(i);
    throw RangeError(`Unable to decode multibase string ${JSON.stringify(i)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`);
  }
}
const Ul = (h, i) => new Fm({ ...h.decoders || { [h.prefix]: h }, ...i.decoders || { [i.prefix]: i } });
class $m {
  constructor(i, r, n, a) {
    this.name = i, this.prefix = r, this.baseEncode = n, this.baseDecode = a, this.encoder = new Tm(i, r, n), this.decoder = new Nm(i, r, a);
  }
  encode(i) {
    return this.encoder.encode(i);
  }
  decode(i) {
    return this.decoder.decode(i);
  }
}
const pa = ({ name: h, prefix: i, encode: r, decode: n }) => new $m(h, i, r, n), Js = ({ prefix: h, name: i, alphabet: r }) => {
  const { encode: n, decode: a } = Am(r, i);
  return pa({ prefix: h, name: i, encode: n, decode: (l) => zl(a(l)) });
}, Dm = (h, i, r, n) => {
  const a = {};
  for (let F = 0; F < i.length; ++F)
    a[i[F]] = F;
  let l = h.length;
  for (; h[l - 1] === "="; )
    --l;
  const d = new Uint8Array(l * r / 8 | 0);
  let v = 0, w = 0, I = 0;
  for (let F = 0; F < l; ++F) {
    const U = a[h[F]];
    if (U === void 0)
      throw new SyntaxError(`Non-${n} character`);
    w = w << r | U, v += r, v >= 8 && (v -= 8, d[I++] = 255 & w >> v);
  }
  if (v >= r || 255 & w << 8 - v)
    throw new SyntaxError("Unexpected end of data");
  return d;
}, qm = (h, i, r) => {
  const n = i[i.length - 1] === "=", a = (1 << r) - 1;
  let l = "", d = 0, v = 0;
  for (let w = 0; w < h.length; ++w)
    for (v = v << 8 | h[w], d += 8; d > r; )
      d -= r, l += i[a & v >> d];
  if (d && (l += i[a & v << r - d]), n)
    for (; l.length * r & 7; )
      l += "=";
  return l;
}, kt = ({ name: h, prefix: i, bitsPerChar: r, alphabet: n }) => pa({ prefix: i, name: h, encode(a) {
  return qm(a, n, r);
}, decode(a) {
  return Dm(a, n, r, h);
} }), Lm = pa({ prefix: "\0", name: "identity", encode: (h) => Rm(h), decode: (h) => Om(h) });
var Mm = Object.freeze({ __proto__: null, identity: Lm });
const jm = kt({ prefix: "0", name: "base2", alphabet: "01", bitsPerChar: 1 });
var zm = Object.freeze({ __proto__: null, base2: jm });
const Um = kt({ prefix: "7", name: "base8", alphabet: "01234567", bitsPerChar: 3 });
var Hm = Object.freeze({ __proto__: null, base8: Um });
const km = Js({ prefix: "9", name: "base10", alphabet: "0123456789" });
var Km = Object.freeze({ __proto__: null, base10: km });
const Vm = kt({ prefix: "f", name: "base16", alphabet: "0123456789abcdef", bitsPerChar: 4 }), Bm = kt({ prefix: "F", name: "base16upper", alphabet: "0123456789ABCDEF", bitsPerChar: 4 });
var Gm = Object.freeze({ __proto__: null, base16: Vm, base16upper: Bm });
const Wm = kt({ prefix: "b", name: "base32", alphabet: "abcdefghijklmnopqrstuvwxyz234567", bitsPerChar: 5 }), Jm = kt({ prefix: "B", name: "base32upper", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567", bitsPerChar: 5 }), Qm = kt({ prefix: "c", name: "base32pad", alphabet: "abcdefghijklmnopqrstuvwxyz234567=", bitsPerChar: 5 }), Ym = kt({ prefix: "C", name: "base32padupper", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=", bitsPerChar: 5 }), Zm = kt({ prefix: "v", name: "base32hex", alphabet: "0123456789abcdefghijklmnopqrstuv", bitsPerChar: 5 }), Xm = kt({ prefix: "V", name: "base32hexupper", alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV", bitsPerChar: 5 }), ew = kt({ prefix: "t", name: "base32hexpad", alphabet: "0123456789abcdefghijklmnopqrstuv=", bitsPerChar: 5 }), tw = kt({ prefix: "T", name: "base32hexpadupper", alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=", bitsPerChar: 5 }), rw = kt({ prefix: "h", name: "base32z", alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769", bitsPerChar: 5 });
var iw = Object.freeze({ __proto__: null, base32: Wm, base32upper: Jm, base32pad: Qm, base32padupper: Ym, base32hex: Zm, base32hexupper: Xm, base32hexpad: ew, base32hexpadupper: tw, base32z: rw });
const sw = Js({ prefix: "k", name: "base36", alphabet: "0123456789abcdefghijklmnopqrstuvwxyz" }), nw = Js({ prefix: "K", name: "base36upper", alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ" });
var aw = Object.freeze({ __proto__: null, base36: sw, base36upper: nw });
const ow = Js({ name: "base58btc", prefix: "z", alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz" }), cw = Js({ name: "base58flickr", prefix: "Z", alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ" });
var uw = Object.freeze({ __proto__: null, base58btc: ow, base58flickr: cw });
const hw = kt({ prefix: "m", name: "base64", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", bitsPerChar: 6 }), lw = kt({ prefix: "M", name: "base64pad", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", bitsPerChar: 6 }), fw = kt({ prefix: "u", name: "base64url", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_", bitsPerChar: 6 }), pw = kt({ prefix: "U", name: "base64urlpad", alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=", bitsPerChar: 6 });
var dw = Object.freeze({ __proto__: null, base64: hw, base64pad: lw, base64url: fw, base64urlpad: pw });
const Hl = Array.from("🚀🪐☄🛰🌌🌑🌒🌓🌔🌕🌖🌗🌘🌍🌏🌎🐉☀💻🖥💾💿😂❤😍🤣😊🙏💕😭😘👍😅👏😁🔥🥰💔💖💙😢🤔😆🙄💪😉☺👌🤗💜😔😎😇🌹🤦🎉💞✌✨🤷😱😌🌸🙌😋💗💚😏💛🙂💓🤩😄😀🖤😃💯🙈👇🎶😒🤭❣😜💋👀😪😑💥🙋😞😩😡🤪👊🥳😥🤤👉💃😳✋😚😝😴🌟😬🙃🍀🌷😻😓⭐✅🥺🌈😈🤘💦✔😣🏃💐☹🎊💘😠☝😕🌺🎂🌻😐🖕💝🙊😹🗣💫💀👑🎵🤞😛🔴😤🌼😫⚽🤙☕🏆🤫👈😮🙆🍻🍃🐶💁😲🌿🧡🎁⚡🌞🎈❌✊👋😰🤨😶🤝🚶💰🍓💢🤟🙁🚨💨🤬✈🎀🍺🤓😙💟🌱😖👶🥴▶➡❓💎💸⬇😨🌚🦋😷🕺⚠🙅😟😵👎🤲🤠🤧📌🔵💅🧐🐾🍒😗🤑🌊🤯🐷☎💧😯💆👆🎤🙇🍑❄🌴💣🐸💌📍🥀🤢👅💡💩👐📸👻🤐🤮🎼🥵🚩🍎🍊👼💍📣🥂"), gw = Hl.reduce((h, i, r) => (h[r] = i, h), []), vw = Hl.reduce((h, i, r) => (h[i.codePointAt(0)] = r, h), []);
function yw(h) {
  return h.reduce((i, r) => (i += gw[r], i), "");
}
function mw(h) {
  const i = [];
  for (const r of h) {
    const n = vw[r.codePointAt(0)];
    if (n === void 0)
      throw new Error(`Non-base256emoji character: ${r}`);
    i.push(n);
  }
  return new Uint8Array(i);
}
const ww = pa({ prefix: "🚀", name: "base256emoji", encode: yw, decode: mw });
var _w = Object.freeze({ __proto__: null, base256emoji: ww }), bw = kl, Vh = 128, Ew = 127, xw = ~Ew, Iw = Math.pow(2, 31);
function kl(h, i, r) {
  i = i || [], r = r || 0;
  for (var n = r; h >= Iw; )
    i[r++] = h & 255 | Vh, h /= 128;
  for (; h & xw; )
    i[r++] = h & 255 | Vh, h >>>= 7;
  return i[r] = h | 0, kl.bytes = r - n + 1, i;
}
var Sw = sc, Pw = 128, Bh = 127;
function sc(h, n) {
  var r = 0, n = n || 0, a = 0, l = n, d, v = h.length;
  do {
    if (l >= v)
      throw sc.bytes = 0, new RangeError("Could not decode varint");
    d = h[l++], r += a < 28 ? (d & Bh) << a : (d & Bh) * Math.pow(2, a), a += 7;
  } while (d >= Pw);
  return sc.bytes = l - n, r;
}
var Cw = Math.pow(2, 7), Aw = Math.pow(2, 14), Ow = Math.pow(2, 21), Rw = Math.pow(2, 28), Tw = Math.pow(2, 35), Nw = Math.pow(2, 42), Fw = Math.pow(2, 49), $w = Math.pow(2, 56), Dw = Math.pow(2, 63), qw = function(h) {
  return h < Cw ? 1 : h < Aw ? 2 : h < Ow ? 3 : h < Rw ? 4 : h < Tw ? 5 : h < Nw ? 6 : h < Fw ? 7 : h < $w ? 8 : h < Dw ? 9 : 10;
}, Lw = { encode: bw, decode: Sw, encodingLength: qw }, Kl = Lw;
const Gh = (h, i, r = 0) => (Kl.encode(h, i, r), i), Wh = (h) => Kl.encodingLength(h), nc = (h, i) => {
  const r = i.byteLength, n = Wh(h), a = n + Wh(r), l = new Uint8Array(a + r);
  return Gh(h, l, 0), Gh(r, l, n), l.set(i, a), new Mw(h, r, i, l);
};
class Mw {
  constructor(i, r, n, a) {
    this.code = i, this.size = r, this.digest = n, this.bytes = a;
  }
}
const Vl = ({ name: h, code: i, encode: r }) => new jw(h, i, r);
class jw {
  constructor(i, r, n) {
    this.name = i, this.code = r, this.encode = n;
  }
  digest(i) {
    if (i instanceof Uint8Array) {
      const r = this.encode(i);
      return r instanceof Uint8Array ? nc(this.code, r) : r.then((n) => nc(this.code, n));
    } else
      throw Error("Unknown type, must be binary type");
  }
}
const Bl = (h) => async (i) => new Uint8Array(await crypto.subtle.digest(h, i)), zw = Vl({ name: "sha2-256", code: 18, encode: Bl("SHA-256") }), Uw = Vl({ name: "sha2-512", code: 19, encode: Bl("SHA-512") });
var Hw = Object.freeze({ __proto__: null, sha256: zw, sha512: Uw });
const Gl = 0, kw = "identity", Wl = zl, Kw = (h) => nc(Gl, Wl(h)), Vw = { code: Gl, name: kw, encode: Wl, digest: Kw };
var Bw = Object.freeze({ __proto__: null, identity: Vw });
new TextEncoder(), new TextDecoder();
const Jh = { ...Mm, ...zm, ...Hm, ...Km, ...Gm, ...iw, ...aw, ...uw, ...dw, ..._w };
({ ...Hw, ...Bw });
function Jl(h) {
  return globalThis.Buffer != null ? new Uint8Array(h.buffer, h.byteOffset, h.byteLength) : h;
}
function Gw(h = 0) {
  return globalThis.Buffer != null && globalThis.Buffer.allocUnsafe != null ? Jl(globalThis.Buffer.allocUnsafe(h)) : new Uint8Array(h);
}
function Ql(h, i, r, n) {
  return { name: h, prefix: i, encoder: { name: h, prefix: i, encode: r }, decoder: { decode: n } };
}
const Qh = Ql("utf8", "u", (h) => "u" + new TextDecoder("utf8").decode(h), (h) => new TextEncoder().encode(h.substring(1))), Go = Ql("ascii", "a", (h) => {
  let i = "a";
  for (let r = 0; r < h.length; r++)
    i += String.fromCharCode(h[r]);
  return i;
}, (h) => {
  h = h.substring(1);
  const i = Gw(h.length);
  for (let r = 0; r < h.length; r++)
    i[r] = h.charCodeAt(r);
  return i;
}), Ww = { utf8: Qh, "utf-8": Qh, hex: Jh.base16, latin1: Go, ascii: Go, binary: Go, ...Jh };
function Jw(h, i = "utf8") {
  const r = Ww[i];
  if (!r)
    throw new Error(`Unsupported encoding "${i}"`);
  return (i === "utf8" || i === "utf-8") && globalThis.Buffer != null && globalThis.Buffer.from != null ? Jl(globalThis.Buffer.from(h, "utf-8")) : r.decoder.decode(`${r.prefix}${h}`);
}
const Yl = "wc", Qw = 2, yc = "core", wi = `${Yl}@2:${yc}:`, Yw = { name: yc, logger: "error" }, Zw = { database: ":memory:" }, Xw = "crypto", Yh = "client_ed25519_seed", e_ = re.ONE_DAY, t_ = "keychain", r_ = "0.3", i_ = "messages", s_ = "0.3", n_ = re.SIX_HOURS, a_ = "publisher", Zl = "irn", o_ = "error", Xl = "wss://relay.walletconnect.com", Zh = "wss://relay.walletconnect.org", c_ = "relayer", Bt = { message: "relayer_message", message_ack: "relayer_message_ack", connect: "relayer_connect", disconnect: "relayer_disconnect", error: "relayer_error", connection_stalled: "relayer_connection_stalled", transport_closed: "relayer_transport_closed", publish: "relayer_publish" }, u_ = "_subscription", ei = { payload: "payload", connect: "connect", disconnect: "disconnect", error: "error" }, h_ = re.ONE_SECOND, l_ = "2.10.2", f_ = 1e4, p_ = "0.3", d_ = "WALLETCONNECT_CLIENT_ID", Tr = { created: "subscription_created", deleted: "subscription_deleted", expired: "subscription_expired", disabled: "subscription_disabled", sync: "subscription_sync", resubscribed: "subscription_resubscribed" }, g_ = "subscription", v_ = "0.3", y_ = re.FIVE_SECONDS * 1e3, m_ = "pairing", w_ = "0.3", Ms = { wc_pairingDelete: { req: { ttl: re.ONE_DAY, prompt: !1, tag: 1e3 }, res: { ttl: re.ONE_DAY, prompt: !1, tag: 1001 } }, wc_pairingPing: { req: { ttl: re.THIRTY_SECONDS, prompt: !1, tag: 1002 }, res: { ttl: re.THIRTY_SECONDS, prompt: !1, tag: 1003 } }, unregistered_method: { req: { ttl: re.ONE_DAY, prompt: !1, tag: 0 }, res: { ttl: re.ONE_DAY, prompt: !1, tag: 0 } } }, Ks = { create: "pairing_create", expire: "pairing_expire", delete: "pairing_delete", ping: "pairing_ping" }, zr = { created: "history_created", updated: "history_updated", deleted: "history_deleted", sync: "history_sync" }, __ = "history", b_ = "0.3", E_ = "expirer", Ir = { created: "expirer_created", deleted: "expirer_deleted", expired: "expirer_expired", sync: "expirer_sync" }, x_ = "0.3", Wo = "verify-api", oa = "https://verify.walletconnect.com", Xh = "https://verify.walletconnect.org";
class I_ {
  constructor(i, r) {
    this.core = i, this.logger = r, this.keychain = /* @__PURE__ */ new Map(), this.name = t_, this.version = r_, this.initialized = !1, this.storagePrefix = wi, this.init = async () => {
      if (!this.initialized) {
        const n = await this.getKeyChain();
        typeof n < "u" && (this.keychain = n), this.initialized = !0;
      }
    }, this.has = (n) => (this.isInitialized(), this.keychain.has(n)), this.set = async (n, a) => {
      this.isInitialized(), this.keychain.set(n, a), await this.persist();
    }, this.get = (n) => {
      this.isInitialized();
      const a = this.keychain.get(n);
      if (typeof a > "u") {
        const { message: l } = Z("NO_MATCHING_KEY", `${this.name}: ${n}`);
        throw new Error(l);
      }
      return a;
    }, this.del = async (n) => {
      this.isInitialized(), this.keychain.delete(n), await this.persist();
    }, this.core = i, this.logger = Ae.generateChildLogger(r, this.name);
  }
  get context() {
    return Ae.getLoggerContext(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name;
  }
  async setKeyChain(i) {
    await this.core.storage.setItem(this.storageKey, Al(i));
  }
  async getKeyChain() {
    const i = await this.core.storage.getItem(this.storageKey);
    return typeof i < "u" ? Ol(i) : void 0;
  }
  async persist() {
    await this.setKeyChain(this.keychain);
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: i } = Z("NOT_INITIALIZED", this.name);
      throw new Error(i);
    }
  }
}
class S_ {
  constructor(i, r, n) {
    this.core = i, this.logger = r, this.name = Xw, this.initialized = !1, this.init = async () => {
      this.initialized || (await this.keychain.init(), this.initialized = !0);
    }, this.hasKeys = (a) => (this.isInitialized(), this.keychain.has(a)), this.getClientId = async () => {
      this.isInitialized();
      const a = await this.getClientSeed(), l = Hh(a);
      return jl(l.publicKey);
    }, this.generateKeyPair = () => {
      this.isInitialized();
      const a = Vy();
      return this.setPrivateKey(a.publicKey, a.privateKey);
    }, this.signJWT = async (a) => {
      this.isInitialized();
      const l = await this.getClientSeed(), d = Hh(l), v = rc();
      return await wm(v, a, e_, d);
    }, this.generateSharedKey = (a, l, d) => {
      this.isInitialized();
      const v = this.getPrivateKey(a), w = By(v, l);
      return this.setSymKey(w, d);
    }, this.setSymKey = async (a, l) => {
      this.isInitialized();
      const d = l || Gy(a);
      return await this.keychain.set(d, a), d;
    }, this.deleteKeyPair = async (a) => {
      this.isInitialized(), await this.keychain.del(a);
    }, this.deleteSymKey = async (a) => {
      this.isInitialized(), await this.keychain.del(a);
    }, this.encode = async (a, l, d) => {
      this.isInitialized();
      const v = Wy(d), w = lc(l);
      if (bh(v)) {
        const H = v.senderPublicKey, k = v.receiverPublicKey;
        a = await this.generateSharedKey(H, k);
      }
      const I = this.getSymKey(a), { type: F, senderPublicKey: U } = v;
      return Jy({ type: F, symKey: I, message: w, senderPublicKey: U });
    }, this.decode = async (a, l, d) => {
      this.isInitialized();
      const v = Qy(l, d);
      if (bh(v)) {
        const w = v.receiverPublicKey, I = v.senderPublicKey;
        a = await this.generateSharedKey(w, I);
      }
      try {
        const w = this.getSymKey(a), I = Yy({ symKey: w, encoded: l });
        return Tl(I);
      } catch (w) {
        this.logger.error(`Failed to decode message from topic: '${a}', clientId: '${await this.getClientId()}'`), this.logger.error(w);
      }
    }, this.getPayloadType = (a) => {
      const l = Eh(a);
      return Zy(l.type);
    }, this.getPayloadSenderPublicKey = (a) => {
      const l = Eh(a);
      return l.senderPublicKey ? la(l.senderPublicKey, Xy) : void 0;
    }, this.core = i, this.logger = Ae.generateChildLogger(r, this.name), this.keychain = n || new I_(this.core, this.logger);
  }
  get context() {
    return Ae.getLoggerContext(this.logger);
  }
  async setPrivateKey(i, r) {
    return await this.keychain.set(i, r), i;
  }
  getPrivateKey(i) {
    return this.keychain.get(i);
  }
  async getClientSeed() {
    let i = "";
    try {
      i = this.keychain.get(Yh);
    } catch {
      i = rc(), await this.keychain.set(Yh, i);
    }
    return Jw(i, "base16");
  }
  getSymKey(i) {
    return this.keychain.get(i);
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: i } = Z("NOT_INITIALIZED", this.name);
      throw new Error(i);
    }
  }
}
class P_ extends Y1 {
  constructor(i, r) {
    super(i, r), this.logger = i, this.core = r, this.messages = /* @__PURE__ */ new Map(), this.name = i_, this.version = s_, this.initialized = !1, this.storagePrefix = wi, this.init = async () => {
      if (!this.initialized) {
        this.logger.trace("Initialized");
        try {
          const n = await this.getRelayerMessages();
          typeof n < "u" && (this.messages = n), this.logger.debug(`Successfully Restored records for ${this.name}`), this.logger.trace({ type: "method", method: "restore", size: this.messages.size });
        } catch (n) {
          this.logger.debug(`Failed to Restore records for ${this.name}`), this.logger.error(n);
        } finally {
          this.initialized = !0;
        }
      }
    }, this.set = async (n, a) => {
      this.isInitialized();
      const l = ls(a);
      let d = this.messages.get(n);
      return typeof d > "u" && (d = {}), typeof d[l] < "u" || (d[l] = a, this.messages.set(n, d), await this.persist()), l;
    }, this.get = (n) => {
      this.isInitialized();
      let a = this.messages.get(n);
      return typeof a > "u" && (a = {}), a;
    }, this.has = (n, a) => {
      this.isInitialized();
      const l = this.get(n), d = ls(a);
      return typeof l[d] < "u";
    }, this.del = async (n) => {
      this.isInitialized(), this.messages.delete(n), await this.persist();
    }, this.logger = Ae.generateChildLogger(i, this.name), this.core = r;
  }
  get context() {
    return Ae.getLoggerContext(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name;
  }
  async setRelayerMessages(i) {
    await this.core.storage.setItem(this.storageKey, Al(i));
  }
  async getRelayerMessages() {
    const i = await this.core.storage.getItem(this.storageKey);
    return typeof i < "u" ? Ol(i) : void 0;
  }
  async persist() {
    await this.setRelayerMessages(this.messages);
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: i } = Z("NOT_INITIALIZED", this.name);
      throw new Error(i);
    }
  }
}
class C_ extends Z1 {
  constructor(i, r) {
    super(i, r), this.relayer = i, this.logger = r, this.events = new Ur.EventEmitter(), this.name = a_, this.queue = /* @__PURE__ */ new Map(), this.publishTimeout = re.toMiliseconds(re.TEN_SECONDS), this.needsTransportRestart = !1, this.publish = async (n, a, l) => {
      var d;
      this.logger.debug("Publishing Payload"), this.logger.trace({ type: "method", method: "publish", params: { topic: n, message: a, opts: l } });
      try {
        const v = (l == null ? void 0 : l.ttl) || n_, w = ic(l), I = (l == null ? void 0 : l.prompt) || !1, F = (l == null ? void 0 : l.tag) || 0, U = (l == null ? void 0 : l.id) || R1().toString(), H = { topic: n, message: a, opts: { ttl: v, relay: w, prompt: I, tag: F, id: U } }, k = setTimeout(() => this.queue.set(U, H), this.publishTimeout);
        try {
          await await Gs(this.rpcPublish(n, a, v, w, I, F, U), this.publishTimeout, "Failed to publish payload, please try again."), this.removeRequestFromQueue(U), this.relayer.events.emit(Bt.publish, H);
        } catch (z) {
          if (this.logger.debug("Publishing Payload stalled"), this.needsTransportRestart = !0, (d = l == null ? void 0 : l.internal) != null && d.throwOnFailedPublish)
            throw this.removeRequestFromQueue(U), z;
          return;
        } finally {
          clearTimeout(k);
        }
        this.logger.debug("Successfully Published Payload"), this.logger.trace({ type: "method", method: "publish", params: { topic: n, message: a, opts: l } });
      } catch (v) {
        throw this.logger.debug("Failed to Publish Payload"), this.logger.error(v), v;
      }
    }, this.on = (n, a) => {
      this.events.on(n, a);
    }, this.once = (n, a) => {
      this.events.once(n, a);
    }, this.off = (n, a) => {
      this.events.off(n, a);
    }, this.removeListener = (n, a) => {
      this.events.removeListener(n, a);
    }, this.relayer = i, this.logger = Ae.generateChildLogger(r, this.name), this.registerEventListeners();
  }
  get context() {
    return Ae.getLoggerContext(this.logger);
  }
  rpcPublish(i, r, n, a, l, d, v) {
    var w, I, F, U;
    const H = { method: na(a.protocol).publish, params: { topic: i, message: r, ttl: n, prompt: l, tag: d }, id: v };
    return mi((w = H.params) == null ? void 0 : w.prompt) && ((I = H.params) == null || delete I.prompt), mi((F = H.params) == null ? void 0 : F.tag) && ((U = H.params) == null || delete U.tag), this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "message", direction: "outgoing", request: H }), this.relayer.request(H);
  }
  removeRequestFromQueue(i) {
    this.queue.delete(i);
  }
  checkQueue() {
    this.queue.forEach(async (i) => {
      const { topic: r, message: n, opts: a } = i;
      await this.publish(r, n, a);
    });
  }
  registerEventListeners() {
    this.relayer.core.heartbeat.on(ps.HEARTBEAT_EVENTS.pulse, () => {
      if (this.needsTransportRestart) {
        this.needsTransportRestart = !1, this.relayer.events.emit(Bt.connection_stalled);
        return;
      }
      this.checkQueue();
    }), this.relayer.on(Bt.message_ack, (i) => {
      this.removeRequestFromQueue(i.id.toString());
    });
  }
}
class A_ {
  constructor() {
    this.map = /* @__PURE__ */ new Map(), this.set = (i, r) => {
      const n = this.get(i);
      this.exists(i, r) || this.map.set(i, [...n, r]);
    }, this.get = (i) => this.map.get(i) || [], this.exists = (i, r) => this.get(i).includes(r), this.delete = (i, r) => {
      if (typeof r > "u") {
        this.map.delete(i);
        return;
      }
      if (!this.map.has(i))
        return;
      const n = this.get(i);
      if (!this.exists(i, r))
        return;
      const a = n.filter((l) => l !== r);
      if (!a.length) {
        this.map.delete(i);
        return;
      }
      this.map.set(i, a);
    }, this.clear = () => {
      this.map.clear();
    };
  }
  get topics() {
    return Array.from(this.map.keys());
  }
}
var O_ = Object.defineProperty, R_ = Object.defineProperties, T_ = Object.getOwnPropertyDescriptors, el = Object.getOwnPropertySymbols, N_ = Object.prototype.hasOwnProperty, F_ = Object.prototype.propertyIsEnumerable, tl = (h, i, r) => i in h ? O_(h, i, { enumerable: !0, configurable: !0, writable: !0, value: r }) : h[i] = r, js = (h, i) => {
  for (var r in i || (i = {}))
    N_.call(i, r) && tl(h, r, i[r]);
  if (el)
    for (var r of el(i))
      F_.call(i, r) && tl(h, r, i[r]);
  return h;
}, Jo = (h, i) => R_(h, T_(i));
class $_ extends tm {
  constructor(i, r) {
    super(i, r), this.relayer = i, this.logger = r, this.subscriptions = /* @__PURE__ */ new Map(), this.topicMap = new A_(), this.events = new Ur.EventEmitter(), this.name = g_, this.version = v_, this.pending = /* @__PURE__ */ new Map(), this.cached = [], this.initialized = !1, this.pendingSubscriptionWatchLabel = "pending_sub_watch_label", this.pollingInterval = 20, this.storagePrefix = wi, this.subscribeTimeout = 1e4, this.restartInProgress = !1, this.batchSubscribeTopicsLimit = 500, this.init = async () => {
      this.initialized || (this.logger.trace("Initialized"), this.registerEventListeners(), this.clientId = await this.relayer.core.crypto.getClientId());
    }, this.subscribe = async (n, a) => {
      await this.restartToComplete(), this.isInitialized(), this.logger.debug("Subscribing Topic"), this.logger.trace({ type: "method", method: "subscribe", params: { topic: n, opts: a } });
      try {
        const l = ic(a), d = { topic: n, relay: l };
        this.pending.set(n, d);
        const v = await this.rpcSubscribe(n, l);
        return this.onSubscribe(v, d), this.logger.debug("Successfully Subscribed Topic"), this.logger.trace({ type: "method", method: "subscribe", params: { topic: n, opts: a } }), v;
      } catch (l) {
        throw this.logger.debug("Failed to Subscribe Topic"), this.logger.error(l), l;
      }
    }, this.unsubscribe = async (n, a) => {
      await this.restartToComplete(), this.isInitialized(), typeof (a == null ? void 0 : a.id) < "u" ? await this.unsubscribeById(n, a.id, a) : await this.unsubscribeByTopic(n, a);
    }, this.isSubscribed = async (n) => this.topics.includes(n) ? !0 : await new Promise((a, l) => {
      const d = new re.Watch();
      d.start(this.pendingSubscriptionWatchLabel);
      const v = setInterval(() => {
        !this.pending.has(n) && this.topics.includes(n) && (clearInterval(v), d.stop(this.pendingSubscriptionWatchLabel), a(!0)), d.elapsed(this.pendingSubscriptionWatchLabel) >= y_ && (clearInterval(v), d.stop(this.pendingSubscriptionWatchLabel), l(new Error("Subscription resolution timeout")));
      }, this.pollingInterval);
    }).catch(() => !1), this.on = (n, a) => {
      this.events.on(n, a);
    }, this.once = (n, a) => {
      this.events.once(n, a);
    }, this.off = (n, a) => {
      this.events.off(n, a);
    }, this.removeListener = (n, a) => {
      this.events.removeListener(n, a);
    }, this.restart = async () => {
      this.restartInProgress = !0, await this.restore(), await this.reset(), this.restartInProgress = !1;
    }, this.relayer = i, this.logger = Ae.generateChildLogger(r, this.name), this.clientId = "";
  }
  get context() {
    return Ae.getLoggerContext(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + this.relayer.core.customStoragePrefix + "//" + this.name;
  }
  get length() {
    return this.subscriptions.size;
  }
  get ids() {
    return Array.from(this.subscriptions.keys());
  }
  get values() {
    return Array.from(this.subscriptions.values());
  }
  get topics() {
    return this.topicMap.topics;
  }
  hasSubscription(i, r) {
    let n = !1;
    try {
      n = this.getSubscription(i).topic === r;
    } catch {
    }
    return n;
  }
  onEnable() {
    this.cached = [], this.initialized = !0;
  }
  onDisable() {
    this.cached = this.values, this.subscriptions.clear(), this.topicMap.clear();
  }
  async unsubscribeByTopic(i, r) {
    const n = this.topicMap.get(i);
    await Promise.all(n.map(async (a) => await this.unsubscribeById(i, a, r)));
  }
  async unsubscribeById(i, r, n) {
    this.logger.debug("Unsubscribing Topic"), this.logger.trace({ type: "method", method: "unsubscribe", params: { topic: i, id: r, opts: n } });
    try {
      const a = ic(n);
      await this.rpcUnsubscribe(i, r, a);
      const l = er("USER_DISCONNECTED", `${this.name}, ${i}`);
      await this.onUnsubscribe(i, r, l), this.logger.debug("Successfully Unsubscribed Topic"), this.logger.trace({ type: "method", method: "unsubscribe", params: { topic: i, id: r, opts: n } });
    } catch (a) {
      throw this.logger.debug("Failed to Unsubscribe Topic"), this.logger.error(a), a;
    }
  }
  async rpcSubscribe(i, r) {
    const n = { method: na(r.protocol).subscribe, params: { topic: i } };
    this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "payload", direction: "outgoing", request: n });
    try {
      await await Gs(this.relayer.request(n), this.subscribeTimeout);
    } catch {
      this.logger.debug("Outgoing Relay Subscribe Payload stalled"), this.relayer.events.emit(Bt.connection_stalled);
    }
    return ls(i + this.clientId);
  }
  async rpcBatchSubscribe(i) {
    if (!i.length)
      return;
    const r = i[0].relay, n = { method: na(r.protocol).batchSubscribe, params: { topics: i.map((a) => a.topic) } };
    this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "payload", direction: "outgoing", request: n });
    try {
      return await await Gs(this.relayer.request(n), this.subscribeTimeout);
    } catch {
      this.logger.debug("Outgoing Relay Payload stalled"), this.relayer.events.emit(Bt.connection_stalled);
    }
  }
  rpcUnsubscribe(i, r, n) {
    const a = { method: na(n.protocol).unsubscribe, params: { topic: i, id: r } };
    return this.logger.debug("Outgoing Relay Payload"), this.logger.trace({ type: "payload", direction: "outgoing", request: a }), this.relayer.request(a);
  }
  onSubscribe(i, r) {
    this.setSubscription(i, Jo(js({}, r), { id: i })), this.pending.delete(r.topic);
  }
  onBatchSubscribe(i) {
    i.length && i.forEach((r) => {
      this.setSubscription(r.id, js({}, r)), this.pending.delete(r.topic);
    });
  }
  async onUnsubscribe(i, r, n) {
    this.events.removeAllListeners(r), this.hasSubscription(r, i) && this.deleteSubscription(r, n), await this.relayer.messages.del(i);
  }
  async setRelayerSubscriptions(i) {
    await this.relayer.core.storage.setItem(this.storageKey, i);
  }
  async getRelayerSubscriptions() {
    return await this.relayer.core.storage.getItem(this.storageKey);
  }
  setSubscription(i, r) {
    this.subscriptions.has(i) || (this.logger.debug("Setting subscription"), this.logger.trace({ type: "method", method: "setSubscription", id: i, subscription: r }), this.addSubscription(i, r));
  }
  addSubscription(i, r) {
    this.subscriptions.set(i, js({}, r)), this.topicMap.set(r.topic, i), this.events.emit(Tr.created, r);
  }
  getSubscription(i) {
    this.logger.debug("Getting subscription"), this.logger.trace({ type: "method", method: "getSubscription", id: i });
    const r = this.subscriptions.get(i);
    if (!r) {
      const { message: n } = Z("NO_MATCHING_KEY", `${this.name}: ${i}`);
      throw new Error(n);
    }
    return r;
  }
  deleteSubscription(i, r) {
    this.logger.debug("Deleting subscription"), this.logger.trace({ type: "method", method: "deleteSubscription", id: i, reason: r });
    const n = this.getSubscription(i);
    this.subscriptions.delete(i), this.topicMap.delete(n.topic, i), this.events.emit(Tr.deleted, Jo(js({}, n), { reason: r }));
  }
  async persist() {
    await this.setRelayerSubscriptions(this.values), this.events.emit(Tr.sync);
  }
  async reset() {
    if (this.cached.length) {
      const i = Math.ceil(this.cached.length / this.batchSubscribeTopicsLimit);
      for (let r = 0; r < i; r++) {
        const n = this.cached.splice(0, this.batchSubscribeTopicsLimit);
        await this.batchSubscribe(n);
      }
    }
    this.events.emit(Tr.resubscribed);
  }
  async restore() {
    try {
      const i = await this.getRelayerSubscriptions();
      if (typeof i > "u" || !i.length)
        return;
      if (this.subscriptions.size) {
        const { message: r } = Z("RESTORE_WILL_OVERRIDE", this.name);
        throw this.logger.error(r), this.logger.error(`${this.name}: ${JSON.stringify(this.values)}`), new Error(r);
      }
      this.cached = i, this.logger.debug(`Successfully Restored subscriptions for ${this.name}`), this.logger.trace({ type: "method", method: "restore", subscriptions: this.values });
    } catch (i) {
      this.logger.debug(`Failed to Restore subscriptions for ${this.name}`), this.logger.error(i);
    }
  }
  async batchSubscribe(i) {
    if (!i.length)
      return;
    const r = await this.rpcBatchSubscribe(i);
    fs(r) && this.onBatchSubscribe(r.map((n, a) => Jo(js({}, i[a]), { id: n })));
  }
  async onConnect() {
    this.restartInProgress || (await this.restart(), this.onEnable());
  }
  onDisconnect() {
    this.onDisable();
  }
  async checkPending() {
    if (!this.initialized || this.relayer.transportExplicitlyClosed)
      return;
    const i = [];
    this.pending.forEach((r) => {
      i.push(r);
    }), await this.batchSubscribe(i);
  }
  registerEventListeners() {
    this.relayer.core.heartbeat.on(ps.HEARTBEAT_EVENTS.pulse, async () => {
      await this.checkPending();
    }), this.relayer.on(Bt.connect, async () => {
      await this.onConnect();
    }), this.relayer.on(Bt.disconnect, () => {
      this.onDisconnect();
    }), this.events.on(Tr.created, async (i) => {
      const r = Tr.created;
      this.logger.info(`Emitting ${r}`), this.logger.debug({ type: "event", event: r, data: i }), await this.persist();
    }), this.events.on(Tr.deleted, async (i) => {
      const r = Tr.deleted;
      this.logger.info(`Emitting ${r}`), this.logger.debug({ type: "event", event: r, data: i }), await this.persist();
    });
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: i } = Z("NOT_INITIALIZED", this.name);
      throw new Error(i);
    }
  }
  async restartToComplete() {
    this.restartInProgress && await new Promise((i) => {
      const r = setInterval(() => {
        this.restartInProgress || (clearInterval(r), i());
      }, this.pollingInterval);
    });
  }
}
var D_ = Object.defineProperty, rl = Object.getOwnPropertySymbols, q_ = Object.prototype.hasOwnProperty, L_ = Object.prototype.propertyIsEnumerable, il = (h, i, r) => i in h ? D_(h, i, { enumerable: !0, configurable: !0, writable: !0, value: r }) : h[i] = r, M_ = (h, i) => {
  for (var r in i || (i = {}))
    q_.call(i, r) && il(h, r, i[r]);
  if (rl)
    for (var r of rl(i))
      L_.call(i, r) && il(h, r, i[r]);
  return h;
};
class j_ extends X1 {
  constructor(i) {
    super(i), this.protocol = "wc", this.version = 2, this.events = new Ur.EventEmitter(), this.name = c_, this.transportExplicitlyClosed = !1, this.initialized = !1, this.connectionAttemptInProgress = !1, this.connectionStatusPollingInterval = 20, this.staleConnectionErrors = ["socket hang up", "socket stalled"], this.hasExperiencedNetworkDisruption = !1, this.request = async (r) => {
      this.logger.debug("Publishing Request Payload");
      try {
        return await this.toEstablishConnection(), await this.provider.request(r);
      } catch (n) {
        throw this.logger.debug("Failed to Publish Request"), this.logger.error(n), n;
      }
    }, this.onPayloadHandler = (r) => {
      this.onProviderPayload(r);
    }, this.onConnectHandler = () => {
      this.events.emit(Bt.connect);
    }, this.onDisconnectHandler = () => {
      this.onProviderDisconnect();
    }, this.onProviderErrorHandler = (r) => {
      this.logger.error(r), this.events.emit(Bt.error, r), this.logger.info("Fatal socket error received, closing transport"), this.transportClose();
    }, this.registerProviderListeners = () => {
      this.provider.on(ei.payload, this.onPayloadHandler), this.provider.on(ei.connect, this.onConnectHandler), this.provider.on(ei.disconnect, this.onDisconnectHandler), this.provider.on(ei.error, this.onProviderErrorHandler);
    }, this.core = i.core, this.logger = typeof i.logger < "u" && typeof i.logger != "string" ? Ae.generateChildLogger(i.logger, this.name) : Ae.pino(Ae.getDefaultLoggerOptions({ level: i.logger || o_ })), this.messages = new P_(this.logger, i.core), this.subscriber = new $_(this, this.logger), this.publisher = new C_(this, this.logger), this.relayUrl = (i == null ? void 0 : i.relayUrl) || Xl, this.projectId = i.projectId, this.provider = {};
  }
  async init() {
    this.logger.trace("Initialized"), this.registerEventListeners(), await this.createProvider(), await Promise.all([this.messages.init(), this.subscriber.init()]);
    try {
      await this.transportOpen();
    } catch {
      this.logger.warn(`Connection via ${this.relayUrl} failed, attempting to connect via failover domain ${Zh}...`), await this.restartTransport(Zh);
    }
    this.initialized = !0, setTimeout(async () => {
      this.subscriber.topics.length === 0 && (this.logger.info("No topics subscribed to after init, closing transport"), await this.transportClose(), this.transportExplicitlyClosed = !1);
    }, f_);
  }
  get context() {
    return Ae.getLoggerContext(this.logger);
  }
  get connected() {
    return this.provider.connection.connected;
  }
  get connecting() {
    return this.provider.connection.connecting;
  }
  async publish(i, r, n) {
    this.isInitialized(), await this.publisher.publish(i, r, n), await this.recordMessageEvent({ topic: i, message: r, publishedAt: Date.now() });
  }
  async subscribe(i, r) {
    var n;
    this.isInitialized();
    let a = ((n = this.subscriber.topicMap.get(i)) == null ? void 0 : n[0]) || "";
    if (a)
      return a;
    let l;
    const d = (v) => {
      v.topic === i && (this.subscriber.off(Tr.created, d), l());
    };
    return await Promise.all([new Promise((v) => {
      l = v, this.subscriber.on(Tr.created, d);
    }), new Promise(async (v) => {
      a = await this.subscriber.subscribe(i, r), v();
    })]), a;
  }
  async unsubscribe(i, r) {
    this.isInitialized(), await this.subscriber.unsubscribe(i, r);
  }
  on(i, r) {
    this.events.on(i, r);
  }
  once(i, r) {
    this.events.once(i, r);
  }
  off(i, r) {
    this.events.off(i, r);
  }
  removeListener(i, r) {
    this.events.removeListener(i, r);
  }
  async transportClose() {
    this.transportExplicitlyClosed = !0, this.hasExperiencedNetworkDisruption && this.connected ? await Gs(this.provider.disconnect(), 1e3, "provider.disconnect()").catch(() => this.onProviderDisconnect()) : this.connected && await this.provider.disconnect();
  }
  async transportOpen(i) {
    if (this.transportExplicitlyClosed = !1, await this.confirmOnlineStateOrThrow(), !this.connectionAttemptInProgress) {
      i && i !== this.relayUrl && (this.relayUrl = i, await this.transportClose(), await this.createProvider()), this.connectionAttemptInProgress = !0;
      try {
        await Promise.all([new Promise((r) => {
          if (!this.initialized)
            return r();
          this.subscriber.once(Tr.resubscribed, () => {
            r();
          });
        }), new Promise(async (r, n) => {
          try {
            await Gs(this.provider.connect(), 1e4, `Socket stalled when trying to connect to ${this.relayUrl}`);
          } catch (a) {
            n(a);
            return;
          }
          r();
        })]);
      } catch (r) {
        this.logger.error(r);
        const n = r;
        if (!this.isConnectionStalled(n.message))
          throw r;
        this.provider.events.emit(ei.disconnect);
      } finally {
        this.connectionAttemptInProgress = !1, this.hasExperiencedNetworkDisruption = !1;
      }
    }
  }
  async restartTransport(i) {
    await this.confirmOnlineStateOrThrow(), !this.connectionAttemptInProgress && (this.relayUrl = i || this.relayUrl, await this.transportClose(), await this.createProvider(), await this.transportOpen());
  }
  async confirmOnlineStateOrThrow() {
    if (!await xh())
      throw new Error("No internet connection detected. Please restart your network and try again.");
  }
  isConnectionStalled(i) {
    return this.staleConnectionErrors.some((r) => i.includes(r));
  }
  async createProvider() {
    this.provider.connection && this.unregisterProviderListeners();
    const i = await this.core.crypto.signJWT(this.relayUrl);
    this.provider = new ii(new xm(e1({ sdkVersion: l_, protocol: this.protocol, version: this.version, relayUrl: this.relayUrl, projectId: this.projectId, auth: i, useOnCloseEvent: !0 }))), this.registerProviderListeners();
  }
  async recordMessageEvent(i) {
    const { topic: r, message: n } = i;
    await this.messages.set(r, n);
  }
  async shouldIgnoreMessageEvent(i) {
    const { topic: r, message: n } = i;
    if (!n || n.length === 0)
      return this.logger.debug(`Ignoring invalid/empty message: ${n}`), !0;
    if (!await this.subscriber.isSubscribed(r))
      return this.logger.debug(`Ignoring message for non-subscribed topic ${r}`), !0;
    const a = this.messages.has(r, n);
    return a && this.logger.debug(`Ignoring duplicate message: ${n}`), a;
  }
  async onProviderPayload(i) {
    if (this.logger.debug("Incoming Relay Payload"), this.logger.trace({ type: "payload", direction: "incoming", payload: i }), pc(i)) {
      if (!i.method.endsWith(u_))
        return;
      const r = i.params, { topic: n, message: a, publishedAt: l } = r.data, d = { topic: n, message: a, publishedAt: l };
      this.logger.debug("Emitting Relayer Payload"), this.logger.trace(M_({ type: "event", event: r.id }, d)), this.events.emit(r.id, d), await this.acknowledgePayload(i), await this.onMessageEvent(d);
    } else
      dc(i) && this.events.emit(Bt.message_ack, i);
  }
  async onMessageEvent(i) {
    await this.shouldIgnoreMessageEvent(i) || (this.events.emit(Bt.message, i), await this.recordMessageEvent(i));
  }
  async acknowledgePayload(i) {
    const r = gc(i.id, !0);
    await this.provider.connection.send(r);
  }
  unregisterProviderListeners() {
    this.provider.off(ei.payload, this.onPayloadHandler), this.provider.off(ei.connect, this.onConnectHandler), this.provider.off(ei.disconnect, this.onDisconnectHandler), this.provider.off(ei.error, this.onProviderErrorHandler);
  }
  async registerEventListeners() {
    this.events.on(Bt.connection_stalled, () => {
      this.restartTransport().catch((r) => this.logger.error(r));
    });
    let i = await xh();
    t1(async (r) => {
      this.initialized && i !== r && (i = r, r ? await this.restartTransport().catch((n) => this.logger.error(n)) : (this.hasExperiencedNetworkDisruption = !0, await this.transportClose().catch((n) => this.logger.error(n))));
    });
  }
  onProviderDisconnect() {
    this.events.emit(Bt.disconnect), this.attemptToReconnect();
  }
  attemptToReconnect() {
    this.transportExplicitlyClosed || (this.logger.info("attemptToReconnect called. Connecting..."), setTimeout(async () => {
      await this.restartTransport().catch((i) => this.logger.error(i));
    }, re.toMiliseconds(h_)));
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: i } = Z("NOT_INITIALIZED", this.name);
      throw new Error(i);
    }
  }
  async toEstablishConnection() {
    if (await this.confirmOnlineStateOrThrow(), !this.connected) {
      if (this.connectionAttemptInProgress)
        return await new Promise((i) => {
          const r = setInterval(() => {
            this.connected && (clearInterval(r), i());
          }, this.connectionStatusPollingInterval);
        });
      await this.restartTransport();
    }
  }
}
var z_ = Object.defineProperty, sl = Object.getOwnPropertySymbols, U_ = Object.prototype.hasOwnProperty, H_ = Object.prototype.propertyIsEnumerable, nl = (h, i, r) => i in h ? z_(h, i, { enumerable: !0, configurable: !0, writable: !0, value: r }) : h[i] = r, al = (h, i) => {
  for (var r in i || (i = {}))
    U_.call(i, r) && nl(h, r, i[r]);
  if (sl)
    for (var r of sl(i))
      H_.call(i, r) && nl(h, r, i[r]);
  return h;
};
class da extends em {
  constructor(i, r, n, a = wi, l = void 0) {
    super(i, r, n, a), this.core = i, this.logger = r, this.name = n, this.map = /* @__PURE__ */ new Map(), this.version = p_, this.cached = [], this.initialized = !1, this.storagePrefix = wi, this.init = async () => {
      this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach((d) => {
        this.getKey && d !== null && !mi(d) ? this.map.set(this.getKey(d), d) : ky(d) ? this.map.set(d.id, d) : Ky(d) && this.map.set(d.topic, d);
      }), this.cached = [], this.initialized = !0);
    }, this.set = async (d, v) => {
      this.isInitialized(), this.map.has(d) ? await this.update(d, v) : (this.logger.debug("Setting value"), this.logger.trace({ type: "method", method: "set", key: d, value: v }), this.map.set(d, v), await this.persist());
    }, this.get = (d) => (this.isInitialized(), this.logger.debug("Getting value"), this.logger.trace({ type: "method", method: "get", key: d }), this.getData(d)), this.getAll = (d) => (this.isInitialized(), d ? this.values.filter((v) => Object.keys(d).every((w) => Sm(v[w], d[w]))) : this.values), this.update = async (d, v) => {
      this.isInitialized(), this.logger.debug("Updating value"), this.logger.trace({ type: "method", method: "update", key: d, update: v });
      const w = al(al({}, this.getData(d)), v);
      this.map.set(d, w), await this.persist();
    }, this.delete = async (d, v) => {
      this.isInitialized(), this.map.has(d) && (this.logger.debug("Deleting value"), this.logger.trace({ type: "method", method: "delete", key: d, reason: v }), this.map.delete(d), await this.persist());
    }, this.logger = Ae.generateChildLogger(r, this.name), this.storagePrefix = a, this.getKey = l;
  }
  get context() {
    return Ae.getLoggerContext(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name;
  }
  get length() {
    return this.map.size;
  }
  get keys() {
    return Array.from(this.map.keys());
  }
  get values() {
    return Array.from(this.map.values());
  }
  async setDataStore(i) {
    await this.core.storage.setItem(this.storageKey, i);
  }
  async getDataStore() {
    return await this.core.storage.getItem(this.storageKey);
  }
  getData(i) {
    const r = this.map.get(i);
    if (!r) {
      const { message: n } = Z("NO_MATCHING_KEY", `${this.name}: ${i}`);
      throw this.logger.error(n), new Error(n);
    }
    return r;
  }
  async persist() {
    await this.setDataStore(this.values);
  }
  async restore() {
    try {
      const i = await this.getDataStore();
      if (typeof i > "u" || !i.length)
        return;
      if (this.map.size) {
        const { message: r } = Z("RESTORE_WILL_OVERRIDE", this.name);
        throw this.logger.error(r), new Error(r);
      }
      this.cached = i, this.logger.debug(`Successfully Restored value for ${this.name}`), this.logger.trace({ type: "method", method: "restore", value: this.values });
    } catch (i) {
      this.logger.debug(`Failed to Restore value for ${this.name}`), this.logger.error(i);
    }
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: i } = Z("NOT_INITIALIZED", this.name);
      throw new Error(i);
    }
  }
}
class k_ {
  constructor(i, r) {
    this.core = i, this.logger = r, this.name = m_, this.version = w_, this.events = new hc(), this.initialized = !1, this.storagePrefix = wi, this.ignoredPayloadTypes = [Sl], this.registeredMethods = [], this.init = async () => {
      this.initialized || (await this.pairings.init(), await this.cleanup(), this.registerRelayerEvents(), this.registerExpirerEvents(), this.initialized = !0, this.logger.trace("Initialized"));
    }, this.register = ({ methods: n }) => {
      this.isInitialized(), this.registeredMethods = [.../* @__PURE__ */ new Set([...this.registeredMethods, ...n])];
    }, this.create = async () => {
      this.isInitialized();
      const n = rc(), a = await this.core.crypto.setSymKey(n), l = Nr(re.FIVE_MINUTES), d = { protocol: Zl }, v = { topic: a, expiry: l, relay: d, active: !1 }, w = r1({ protocol: this.core.protocol, version: this.core.version, topic: a, symKey: n, relay: d });
      return await this.pairings.set(a, v), await this.core.relayer.subscribe(a), this.core.expirer.set(a, l), { topic: a, uri: w };
    }, this.pair = async (n) => {
      this.isInitialized(), this.isValidPair(n);
      const { topic: a, symKey: l, relay: d } = i1(n.uri);
      let v;
      if (this.pairings.keys.includes(a) && (v = this.pairings.get(a), v.active))
        throw new Error(`Pairing already exists: ${a}. Please try again with a new connection URI.`);
      this.core.crypto.keychain.has(a) || (await this.core.crypto.setSymKey(l, a), await this.core.relayer.subscribe(a, { relay: d }));
      const w = Nr(re.FIVE_MINUTES), I = { topic: a, relay: d, expiry: w, active: !1 };
      return await this.pairings.set(a, I), this.core.expirer.set(a, w), n.activatePairing && await this.activate({ topic: a }), this.events.emit(Ks.create, I), I;
    }, this.activate = async ({ topic: n }) => {
      this.isInitialized();
      const a = Nr(re.THIRTY_DAYS);
      await this.pairings.update(n, { active: !0, expiry: a }), this.core.expirer.set(n, a);
    }, this.ping = async (n) => {
      this.isInitialized(), await this.isValidPing(n);
      const { topic: a } = n;
      if (this.pairings.keys.includes(a)) {
        const l = await this.sendRequest(a, "wc_pairingPing", {}), { done: d, resolve: v, reject: w } = cs();
        this.events.once(Ft("pairing_ping", l), ({ error: I }) => {
          I ? w(I) : v();
        }), await d();
      }
    }, this.updateExpiry = async ({ topic: n, expiry: a }) => {
      this.isInitialized(), await this.pairings.update(n, { expiry: a });
    }, this.updateMetadata = async ({ topic: n, metadata: a }) => {
      this.isInitialized(), await this.pairings.update(n, { peerMetadata: a });
    }, this.getPairings = () => (this.isInitialized(), this.pairings.values), this.disconnect = async (n) => {
      this.isInitialized(), await this.isValidDisconnect(n);
      const { topic: a } = n;
      this.pairings.keys.includes(a) && (await this.sendRequest(a, "wc_pairingDelete", er("USER_DISCONNECTED")), await this.deletePairing(a));
    }, this.sendRequest = async (n, a, l) => {
      const d = Bs(a, l), v = await this.core.crypto.encode(n, d), w = Ms[a].req;
      return this.core.history.set(n, d), this.core.relayer.publish(n, v, w), d.id;
    }, this.sendResult = async (n, a, l) => {
      const d = gc(n, l), v = await this.core.crypto.encode(a, d), w = await this.core.history.get(a, n), I = Ms[w.request.method].res;
      await this.core.relayer.publish(a, v, I), await this.core.history.resolve(d);
    }, this.sendError = async (n, a, l) => {
      const d = fc(n, l), v = await this.core.crypto.encode(a, d), w = await this.core.history.get(a, n), I = Ms[w.request.method] ? Ms[w.request.method].res : Ms.unregistered_method.res;
      await this.core.relayer.publish(a, v, I), await this.core.history.resolve(d);
    }, this.deletePairing = async (n, a) => {
      await this.core.relayer.unsubscribe(n), await Promise.all([this.pairings.delete(n, er("USER_DISCONNECTED")), this.core.crypto.deleteSymKey(n), a ? Promise.resolve() : this.core.expirer.del(n)]);
    }, this.cleanup = async () => {
      const n = this.pairings.getAll().filter((a) => yi(a.expiry));
      await Promise.all(n.map((a) => this.deletePairing(a.topic)));
    }, this.onRelayEventRequest = (n) => {
      const { topic: a, payload: l } = n;
      switch (l.method) {
        case "wc_pairingPing":
          return this.onPairingPingRequest(a, l);
        case "wc_pairingDelete":
          return this.onPairingDeleteRequest(a, l);
        default:
          return this.onUnknownRpcMethodRequest(a, l);
      }
    }, this.onRelayEventResponse = async (n) => {
      const { topic: a, payload: l } = n, d = (await this.core.history.get(a, l.id)).request.method;
      switch (d) {
        case "wc_pairingPing":
          return this.onPairingPingResponse(a, l);
        default:
          return this.onUnknownRpcMethodResponse(d);
      }
    }, this.onPairingPingRequest = async (n, a) => {
      const { id: l } = a;
      try {
        this.isValidPing({ topic: n }), await this.sendResult(l, n, !0), this.events.emit(Ks.ping, { id: l, topic: n });
      } catch (d) {
        await this.sendError(l, n, d), this.logger.error(d);
      }
    }, this.onPairingPingResponse = (n, a) => {
      const { id: l } = a;
      setTimeout(() => {
        vi(a) ? this.events.emit(Ft("pairing_ping", l), {}) : ri(a) && this.events.emit(Ft("pairing_ping", l), { error: a.error });
      }, 500);
    }, this.onPairingDeleteRequest = async (n, a) => {
      const { id: l } = a;
      try {
        this.isValidDisconnect({ topic: n }), await this.deletePairing(n), this.events.emit(Ks.delete, { id: l, topic: n });
      } catch (d) {
        await this.sendError(l, n, d), this.logger.error(d);
      }
    }, this.onUnknownRpcMethodRequest = async (n, a) => {
      const { id: l, method: d } = a;
      try {
        if (this.registeredMethods.includes(d))
          return;
        const v = er("WC_METHOD_UNSUPPORTED", d);
        await this.sendError(l, n, v), this.logger.error(v);
      } catch (v) {
        await this.sendError(l, n, v), this.logger.error(v);
      }
    }, this.onUnknownRpcMethodResponse = (n) => {
      this.registeredMethods.includes(n) || this.logger.error(er("WC_METHOD_UNSUPPORTED", n));
    }, this.isValidPair = (n) => {
      if (!cr(n)) {
        const { message: a } = Z("MISSING_OR_INVALID", `pair() params: ${n}`);
        throw new Error(a);
      }
      if (!s1(n.uri)) {
        const { message: a } = Z("MISSING_OR_INVALID", `pair() uri: ${n.uri}`);
        throw new Error(a);
      }
    }, this.isValidPing = async (n) => {
      if (!cr(n)) {
        const { message: l } = Z("MISSING_OR_INVALID", `ping() params: ${n}`);
        throw new Error(l);
      }
      const { topic: a } = n;
      await this.isValidPairingTopic(a);
    }, this.isValidDisconnect = async (n) => {
      if (!cr(n)) {
        const { message: l } = Z("MISSING_OR_INVALID", `disconnect() params: ${n}`);
        throw new Error(l);
      }
      const { topic: a } = n;
      await this.isValidPairingTopic(a);
    }, this.isValidPairingTopic = async (n) => {
      if (!us(n, !1)) {
        const { message: a } = Z("MISSING_OR_INVALID", `pairing topic should be a string: ${n}`);
        throw new Error(a);
      }
      if (!this.pairings.keys.includes(n)) {
        const { message: a } = Z("NO_MATCHING_KEY", `pairing topic doesn't exist: ${n}`);
        throw new Error(a);
      }
      if (yi(this.pairings.get(n).expiry)) {
        await this.deletePairing(n);
        const { message: a } = Z("EXPIRED", `pairing topic: ${n}`);
        throw new Error(a);
      }
    }, this.core = i, this.logger = Ae.generateChildLogger(r, this.name), this.pairings = new da(this.core, this.logger, this.name, this.storagePrefix);
  }
  get context() {
    return Ae.getLoggerContext(this.logger);
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: i } = Z("NOT_INITIALIZED", this.name);
      throw new Error(i);
    }
  }
  registerRelayerEvents() {
    this.core.relayer.on(Bt.message, async (i) => {
      const { topic: r, message: n } = i;
      if (!this.pairings.keys.includes(r) || this.ignoredPayloadTypes.includes(this.core.crypto.getPayloadType(n)))
        return;
      const a = await this.core.crypto.decode(r, n);
      try {
        pc(a) ? (this.core.history.set(r, a), this.onRelayEventRequest({ topic: r, payload: a })) : dc(a) && (await this.core.history.resolve(a), await this.onRelayEventResponse({ topic: r, payload: a }), this.core.history.delete(r, a.id));
      } catch (l) {
        this.logger.error(l);
      }
    });
  }
  registerExpirerEvents() {
    this.core.expirer.on(Ir.expired, async (i) => {
      const { topic: r } = Pl(i.target);
      r && this.pairings.keys.includes(r) && (await this.deletePairing(r, !0), this.events.emit(Ks.expire, { topic: r }));
    });
  }
}
class K_ extends Q1 {
  constructor(i, r) {
    super(i, r), this.core = i, this.logger = r, this.records = /* @__PURE__ */ new Map(), this.events = new Ur.EventEmitter(), this.name = __, this.version = b_, this.cached = [], this.initialized = !1, this.storagePrefix = wi, this.init = async () => {
      this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach((n) => this.records.set(n.id, n)), this.cached = [], this.registerEventListeners(), this.initialized = !0);
    }, this.set = (n, a, l) => {
      if (this.isInitialized(), this.logger.debug("Setting JSON-RPC request history record"), this.logger.trace({ type: "method", method: "set", topic: n, request: a, chainId: l }), this.records.has(a.id))
        return;
      const d = { id: a.id, topic: n, request: { method: a.method, params: a.params || null }, chainId: l, expiry: Nr(re.THIRTY_DAYS) };
      this.records.set(d.id, d), this.events.emit(zr.created, d);
    }, this.resolve = async (n) => {
      if (this.isInitialized(), this.logger.debug("Updating JSON-RPC response history record"), this.logger.trace({ type: "method", method: "update", response: n }), !this.records.has(n.id))
        return;
      const a = await this.getRecord(n.id);
      typeof a.response > "u" && (a.response = ri(n) ? { error: n.error } : { result: n.result }, this.records.set(a.id, a), this.events.emit(zr.updated, a));
    }, this.get = async (n, a) => (this.isInitialized(), this.logger.debug("Getting record"), this.logger.trace({ type: "method", method: "get", topic: n, id: a }), await this.getRecord(a)), this.delete = (n, a) => {
      this.isInitialized(), this.logger.debug("Deleting record"), this.logger.trace({ type: "method", method: "delete", id: a }), this.values.forEach((l) => {
        if (l.topic === n) {
          if (typeof a < "u" && l.id !== a)
            return;
          this.records.delete(l.id), this.events.emit(zr.deleted, l);
        }
      });
    }, this.exists = async (n, a) => (this.isInitialized(), this.records.has(a) ? (await this.getRecord(a)).topic === n : !1), this.on = (n, a) => {
      this.events.on(n, a);
    }, this.once = (n, a) => {
      this.events.once(n, a);
    }, this.off = (n, a) => {
      this.events.off(n, a);
    }, this.removeListener = (n, a) => {
      this.events.removeListener(n, a);
    }, this.logger = Ae.generateChildLogger(r, this.name);
  }
  get context() {
    return Ae.getLoggerContext(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name;
  }
  get size() {
    return this.records.size;
  }
  get keys() {
    return Array.from(this.records.keys());
  }
  get values() {
    return Array.from(this.records.values());
  }
  get pending() {
    const i = [];
    return this.values.forEach((r) => {
      if (typeof r.response < "u")
        return;
      const n = { topic: r.topic, request: Bs(r.request.method, r.request.params, r.id), chainId: r.chainId };
      return i.push(n);
    }), i;
  }
  async setJsonRpcRecords(i) {
    await this.core.storage.setItem(this.storageKey, i);
  }
  async getJsonRpcRecords() {
    return await this.core.storage.getItem(this.storageKey);
  }
  getRecord(i) {
    this.isInitialized();
    const r = this.records.get(i);
    if (!r) {
      const { message: n } = Z("NO_MATCHING_KEY", `${this.name}: ${i}`);
      throw new Error(n);
    }
    return r;
  }
  async persist() {
    await this.setJsonRpcRecords(this.values), this.events.emit(zr.sync);
  }
  async restore() {
    try {
      const i = await this.getJsonRpcRecords();
      if (typeof i > "u" || !i.length)
        return;
      if (this.records.size) {
        const { message: r } = Z("RESTORE_WILL_OVERRIDE", this.name);
        throw this.logger.error(r), new Error(r);
      }
      this.cached = i, this.logger.debug(`Successfully Restored records for ${this.name}`), this.logger.trace({ type: "method", method: "restore", records: this.values });
    } catch (i) {
      this.logger.debug(`Failed to Restore records for ${this.name}`), this.logger.error(i);
    }
  }
  registerEventListeners() {
    this.events.on(zr.created, (i) => {
      const r = zr.created;
      this.logger.info(`Emitting ${r}`), this.logger.debug({ type: "event", event: r, record: i }), this.persist();
    }), this.events.on(zr.updated, (i) => {
      const r = zr.updated;
      this.logger.info(`Emitting ${r}`), this.logger.debug({ type: "event", event: r, record: i }), this.persist();
    }), this.events.on(zr.deleted, (i) => {
      const r = zr.deleted;
      this.logger.info(`Emitting ${r}`), this.logger.debug({ type: "event", event: r, record: i }), this.persist();
    }), this.core.heartbeat.on(ps.HEARTBEAT_EVENTS.pulse, () => {
      this.cleanup();
    });
  }
  cleanup() {
    try {
      this.records.forEach((i) => {
        re.toMiliseconds(i.expiry || 0) - Date.now() <= 0 && (this.logger.info(`Deleting expired history log: ${i.id}`), this.delete(i.topic, i.id));
      });
    } catch (i) {
      this.logger.warn(i);
    }
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: i } = Z("NOT_INITIALIZED", this.name);
      throw new Error(i);
    }
  }
}
class V_ extends rm {
  constructor(i, r) {
    super(i, r), this.core = i, this.logger = r, this.expirations = /* @__PURE__ */ new Map(), this.events = new Ur.EventEmitter(), this.name = E_, this.version = x_, this.cached = [], this.initialized = !1, this.storagePrefix = wi, this.init = async () => {
      this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach((n) => this.expirations.set(n.target, n)), this.cached = [], this.registerEventListeners(), this.initialized = !0);
    }, this.has = (n) => {
      try {
        const a = this.formatTarget(n);
        return typeof this.getExpiration(a) < "u";
      } catch {
        return !1;
      }
    }, this.set = (n, a) => {
      this.isInitialized();
      const l = this.formatTarget(n), d = { target: l, expiry: a };
      this.expirations.set(l, d), this.checkExpiry(l, d), this.events.emit(Ir.created, { target: l, expiration: d });
    }, this.get = (n) => {
      this.isInitialized();
      const a = this.formatTarget(n);
      return this.getExpiration(a);
    }, this.del = (n) => {
      if (this.isInitialized(), this.has(n)) {
        const a = this.formatTarget(n), l = this.getExpiration(a);
        this.expirations.delete(a), this.events.emit(Ir.deleted, { target: a, expiration: l });
      }
    }, this.on = (n, a) => {
      this.events.on(n, a);
    }, this.once = (n, a) => {
      this.events.once(n, a);
    }, this.off = (n, a) => {
      this.events.off(n, a);
    }, this.removeListener = (n, a) => {
      this.events.removeListener(n, a);
    }, this.logger = Ae.generateChildLogger(r, this.name);
  }
  get context() {
    return Ae.getLoggerContext(this.logger);
  }
  get storageKey() {
    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name;
  }
  get length() {
    return this.expirations.size;
  }
  get keys() {
    return Array.from(this.expirations.keys());
  }
  get values() {
    return Array.from(this.expirations.values());
  }
  formatTarget(i) {
    if (typeof i == "string")
      return n1(i);
    if (typeof i == "number")
      return a1(i);
    const { message: r } = Z("UNKNOWN_TYPE", `Target type: ${typeof i}`);
    throw new Error(r);
  }
  async setExpirations(i) {
    await this.core.storage.setItem(this.storageKey, i);
  }
  async getExpirations() {
    return await this.core.storage.getItem(this.storageKey);
  }
  async persist() {
    await this.setExpirations(this.values), this.events.emit(Ir.sync);
  }
  async restore() {
    try {
      const i = await this.getExpirations();
      if (typeof i > "u" || !i.length)
        return;
      if (this.expirations.size) {
        const { message: r } = Z("RESTORE_WILL_OVERRIDE", this.name);
        throw this.logger.error(r), new Error(r);
      }
      this.cached = i, this.logger.debug(`Successfully Restored expirations for ${this.name}`), this.logger.trace({ type: "method", method: "restore", expirations: this.values });
    } catch (i) {
      this.logger.debug(`Failed to Restore expirations for ${this.name}`), this.logger.error(i);
    }
  }
  getExpiration(i) {
    const r = this.expirations.get(i);
    if (!r) {
      const { message: n } = Z("NO_MATCHING_KEY", `${this.name}: ${i}`);
      throw this.logger.error(n), new Error(n);
    }
    return r;
  }
  checkExpiry(i, r) {
    const { expiry: n } = r;
    re.toMiliseconds(n) - Date.now() <= 0 && this.expire(i, r);
  }
  expire(i, r) {
    this.expirations.delete(i), this.events.emit(Ir.expired, { target: i, expiration: r });
  }
  checkExpirations() {
    this.core.relayer.connected && this.expirations.forEach((i, r) => this.checkExpiry(r, i));
  }
  registerEventListeners() {
    this.core.heartbeat.on(ps.HEARTBEAT_EVENTS.pulse, () => this.checkExpirations()), this.events.on(Ir.created, (i) => {
      const r = Ir.created;
      this.logger.info(`Emitting ${r}`), this.logger.debug({ type: "event", event: r, data: i }), this.persist();
    }), this.events.on(Ir.expired, (i) => {
      const r = Ir.expired;
      this.logger.info(`Emitting ${r}`), this.logger.debug({ type: "event", event: r, data: i }), this.persist();
    }), this.events.on(Ir.deleted, (i) => {
      const r = Ir.deleted;
      this.logger.info(`Emitting ${r}`), this.logger.debug({ type: "event", event: r, data: i }), this.persist();
    });
  }
  isInitialized() {
    if (!this.initialized) {
      const { message: i } = Z("NOT_INITIALIZED", this.name);
      throw new Error(i);
    }
  }
}
class B_ extends im {
  constructor(i, r) {
    super(i, r), this.projectId = i, this.logger = r, this.name = Wo, this.initialized = !1, this.queue = [], this.verifyDisabled = !1, this.init = async () => {
      if (this.verifyDisabled || o1() || !Cl())
        return;
      const n = oa;
      this.verifyUrl !== n && this.removeIframe(), this.verifyUrl = n;
      try {
        await this.createIframe();
      } catch (a) {
        this.logger.info(`Verify iframe failed to load: ${this.verifyUrl}`), this.logger.info(a);
      }
      if (!this.initialized) {
        this.removeIframe(), this.verifyUrl = Xh;
        try {
          await this.createIframe();
        } catch (a) {
          this.logger.info(`Verify iframe failed to load: ${this.verifyUrl}`), this.logger.info(a), this.verifyDisabled = !0;
        }
      }
    }, this.register = async (n) => {
      this.initialized ? this.sendPost(n.attestationId) : (this.addToQueue(n.attestationId), await this.init());
    }, this.resolve = async (n) => {
      if (this.isDevEnv)
        return "";
      const a = (n == null ? void 0 : n.verifyUrl) || oa;
      let l;
      try {
        l = await this.fetchAttestation(n.attestationId, a);
      } catch (d) {
        this.logger.info(`failed to resolve attestation: ${n.attestationId} from url: ${a}`), this.logger.info(d), l = await this.fetchAttestation(n.attestationId, Xh);
      }
      return l;
    }, this.fetchAttestation = async (n, a) => {
      this.logger.info(`resolving attestation: ${n} from url: ${a}`);
      const l = this.startAbortTimer(re.ONE_SECOND * 2), d = await fetch(`${a}/attestation/${n}`, { signal: this.abortController.signal });
      return clearTimeout(l), d.status === 200 ? await d.json() : void 0;
    }, this.addToQueue = (n) => {
      this.queue.push(n);
    }, this.processQueue = () => {
      this.queue.length !== 0 && (this.queue.forEach((n) => this.sendPost(n)), this.queue = []);
    }, this.sendPost = (n) => {
      var a;
      try {
        if (!this.iframe)
          return;
        (a = this.iframe.contentWindow) == null || a.postMessage(n, "*"), this.logger.info(`postMessage sent: ${n} ${this.verifyUrl}`);
      } catch {
      }
    }, this.createIframe = async () => {
      let n;
      const a = (l) => {
        l.data === "verify_ready" && (this.initialized = !0, this.processQueue(), window.removeEventListener("message", a), n());
      };
      await Promise.race([new Promise((l) => {
        if (document.getElementById(Wo))
          return l();
        window.addEventListener("message", a);
        const d = document.createElement("iframe");
        d.id = Wo, d.src = `${this.verifyUrl}/${this.projectId}`, d.style.display = "none", document.body.append(d), this.iframe = d, n = l;
      }), new Promise((l, d) => setTimeout(() => {
        window.removeEventListener("message", a), d("verify iframe load timeout");
      }, re.toMiliseconds(re.FIVE_SECONDS)))]);
    }, this.removeIframe = () => {
      this.iframe && (this.iframe.remove(), this.iframe = void 0, this.initialized = !1);
    }, this.logger = Ae.generateChildLogger(r, this.name), this.verifyUrl = oa, this.abortController = new AbortController(), this.isDevEnv = c1() && process.env.IS_VITEST;
  }
  get context() {
    return Ae.getLoggerContext(this.logger);
  }
  startAbortTimer(i) {
    return this.abortController = new AbortController(), setTimeout(() => this.abortController.abort(), re.toMiliseconds(i));
  }
}
var G_ = Object.defineProperty, ol = Object.getOwnPropertySymbols, W_ = Object.prototype.hasOwnProperty, J_ = Object.prototype.propertyIsEnumerable, cl = (h, i, r) => i in h ? G_(h, i, { enumerable: !0, configurable: !0, writable: !0, value: r }) : h[i] = r, ul = (h, i) => {
  for (var r in i || (i = {}))
    W_.call(i, r) && cl(h, r, i[r]);
  if (ol)
    for (var r of ol(i))
      J_.call(i, r) && cl(h, r, i[r]);
  return h;
};
class mc extends J1 {
  constructor(i) {
    super(i), this.protocol = Yl, this.version = Qw, this.name = yc, this.events = new Ur.EventEmitter(), this.initialized = !1, this.on = (n, a) => this.events.on(n, a), this.once = (n, a) => this.events.once(n, a), this.off = (n, a) => this.events.off(n, a), this.removeListener = (n, a) => this.events.removeListener(n, a), this.projectId = i == null ? void 0 : i.projectId, this.relayUrl = (i == null ? void 0 : i.relayUrl) || Xl, this.customStoragePrefix = i != null && i.customStoragePrefix ? `:${i.customStoragePrefix}` : "";
    const r = typeof (i == null ? void 0 : i.logger) < "u" && typeof (i == null ? void 0 : i.logger) != "string" ? i.logger : Ae.pino(Ae.getDefaultLoggerOptions({ level: (i == null ? void 0 : i.logger) || Yw.logger }));
    this.logger = Ae.generateChildLogger(r, this.name), this.heartbeat = new ps.HeartBeat(), this.crypto = new S_(this, this.logger, i == null ? void 0 : i.keychain), this.history = new K_(this, this.logger), this.expirer = new V_(this, this.logger), this.storage = i != null && i.storage ? i.storage : new z1(ul(ul({}, Zw), i == null ? void 0 : i.storageOptions)), this.relayer = new j_({ core: this, logger: this.logger, relayUrl: this.relayUrl, projectId: this.projectId }), this.pairing = new k_(this, this.logger), this.verify = new B_(this.projectId || "", this.logger);
  }
  static async init(i) {
    const r = new mc(i);
    await r.initialize();
    const n = await r.crypto.getClientId();
    return await r.storage.setItem(d_, n), r;
  }
  get context() {
    return Ae.getLoggerContext(this.logger);
  }
  async start() {
    this.initialized || await this.initialize();
  }
  async initialize() {
    this.logger.trace("Initialized");
    try {
      await this.crypto.init(), await this.history.init(), await this.expirer.init(), await this.relayer.init(), await this.heartbeat.init(), await this.pairing.init(), this.initialized = !0, this.logger.info("Core Initialization Success");
    } catch (i) {
      throw this.logger.warn(`Core Initialization Failure at epoch ${Date.now()}`, i), this.logger.error(i.message), i;
    }
  }
}
const Q_ = mc, ef = "wc", tf = 2, rf = "client", wc = `${ef}@${tf}:${rf}:`, Qo = { name: rf, logger: "error", controller: !1, relayUrl: "wss://relay.walletconnect.com" }, hl = "WALLETCONNECT_DEEPLINK_CHOICE", Y_ = "proposal", sf = "Proposal expired", Z_ = "session", ra = re.SEVEN_DAYS, X_ = "engine", zs = { wc_sessionPropose: { req: { ttl: re.FIVE_MINUTES, prompt: !0, tag: 1100 }, res: { ttl: re.FIVE_MINUTES, prompt: !1, tag: 1101 } }, wc_sessionSettle: { req: { ttl: re.FIVE_MINUTES, prompt: !1, tag: 1102 }, res: { ttl: re.FIVE_MINUTES, prompt: !1, tag: 1103 } }, wc_sessionUpdate: { req: { ttl: re.ONE_DAY, prompt: !1, tag: 1104 }, res: { ttl: re.ONE_DAY, prompt: !1, tag: 1105 } }, wc_sessionExtend: { req: { ttl: re.ONE_DAY, prompt: !1, tag: 1106 }, res: { ttl: re.ONE_DAY, prompt: !1, tag: 1107 } }, wc_sessionRequest: { req: { ttl: re.FIVE_MINUTES, prompt: !0, tag: 1108 }, res: { ttl: re.FIVE_MINUTES, prompt: !1, tag: 1109 } }, wc_sessionEvent: { req: { ttl: re.FIVE_MINUTES, prompt: !0, tag: 1110 }, res: { ttl: re.FIVE_MINUTES, prompt: !1, tag: 1111 } }, wc_sessionDelete: { req: { ttl: re.ONE_DAY, prompt: !1, tag: 1112 }, res: { ttl: re.ONE_DAY, prompt: !1, tag: 1113 } }, wc_sessionPing: { req: { ttl: re.THIRTY_SECONDS, prompt: !1, tag: 1114 }, res: { ttl: re.THIRTY_SECONDS, prompt: !1, tag: 1115 } } }, Yo = { min: re.FIVE_MINUTES, max: re.SEVEN_DAYS }, ti = { idle: "IDLE", active: "ACTIVE" }, eb = "request", tb = ["wc_sessionPropose", "wc_sessionRequest", "wc_authRequest"];
var rb = Object.defineProperty, ib = Object.defineProperties, sb = Object.getOwnPropertyDescriptors, ll = Object.getOwnPropertySymbols, nb = Object.prototype.hasOwnProperty, ab = Object.prototype.propertyIsEnumerable, fl = (h, i, r) => i in h ? rb(h, i, { enumerable: !0, configurable: !0, writable: !0, value: r }) : h[i] = r, or = (h, i) => {
  for (var r in i || (i = {}))
    nb.call(i, r) && fl(h, r, i[r]);
  if (ll)
    for (var r of ll(i))
      ab.call(i, r) && fl(h, r, i[r]);
  return h;
}, Us = (h, i) => ib(h, sb(i));
class ob extends nm {
  constructor(i) {
    super(i), this.name = X_, this.events = new hc(), this.initialized = !1, this.ignoredPayloadTypes = [Sl], this.requestQueue = { state: ti.idle, queue: [] }, this.sessionRequestQueue = { state: ti.idle, queue: [] }, this.requestQueueDelay = re.ONE_SECOND, this.init = async () => {
      this.initialized || (await this.cleanup(), this.registerRelayerEvents(), this.registerExpirerEvents(), this.registerPairingEvents(), this.client.core.pairing.register({ methods: Object.keys(zs) }), this.initialized = !0, setTimeout(() => {
        this.sessionRequestQueue.queue = this.getPendingSessionRequests(), this.processSessionRequestQueue();
      }, re.toMiliseconds(this.requestQueueDelay)));
    }, this.connect = async (r) => {
      await this.isInitialized();
      const n = Us(or({}, r), { requiredNamespaces: r.requiredNamespaces || {}, optionalNamespaces: r.optionalNamespaces || {} });
      await this.isValidConnect(n);
      const { pairingTopic: a, requiredNamespaces: l, optionalNamespaces: d, sessionProperties: v, relays: w } = n;
      let I = a, F, U = !1;
      if (I && (U = this.client.core.pairing.pairings.get(I).active), !I || !U) {
        const { topic: pe, uri: ue } = await this.client.core.pairing.create();
        I = pe, F = ue;
      }
      const H = await this.client.core.crypto.generateKeyPair(), k = or({ requiredNamespaces: l, optionalNamespaces: d, relays: w ?? [{ protocol: Zl }], proposer: { publicKey: H, metadata: this.client.metadata } }, v && { sessionProperties: v }), { reject: z, resolve: G, done: ae } = cs(re.FIVE_MINUTES, sf);
      if (this.events.once(Ft("session_connect"), async ({ error: pe, session: ue }) => {
        if (pe)
          z(pe);
        else if (ue) {
          ue.self.publicKey = H;
          const he = Us(or({}, ue), { requiredNamespaces: ue.requiredNamespaces, optionalNamespaces: ue.optionalNamespaces });
          await this.client.session.set(ue.topic, he), await this.setExpiry(ue.topic, ue.expiry), I && await this.client.core.pairing.updateMetadata({ topic: I, metadata: ue.peer.metadata }), G(he);
        }
      }), !I) {
        const { message: pe } = Z("NO_MATCHING_KEY", `connect() pairing topic: ${I}`);
        throw new Error(pe);
      }
      const be = await this.sendRequest({ topic: I, method: "wc_sessionPropose", params: k }), de = Nr(re.FIVE_MINUTES);
      return await this.setProposal(be, or({ id: be, expiry: de }, k)), { uri: F, approval: ae };
    }, this.pair = async (r) => (await this.isInitialized(), await this.client.core.pairing.pair(r)), this.approve = async (r) => {
      await this.isInitialized(), await this.isValidApprove(r);
      const { id: n, relayProtocol: a, namespaces: l, sessionProperties: d } = r, v = this.client.proposal.get(n);
      let { pairingTopic: w, proposer: I, requiredNamespaces: F, optionalNamespaces: U } = v;
      w = w || "", aa(F) || (F = h1(l, "approve()"));
      const H = await this.client.core.crypto.generateKeyPair(), k = I.publicKey, z = await this.client.core.crypto.generateSharedKey(H, k);
      w && n && (await this.client.core.pairing.updateMetadata({ topic: w, metadata: I.metadata }), await this.sendResult({ id: n, topic: w, result: { relay: { protocol: a ?? "irn" }, responderPublicKey: H } }), await this.client.proposal.delete(n, er("USER_DISCONNECTED")), await this.client.core.pairing.activate({ topic: w }));
      const G = or({ relay: { protocol: a ?? "irn" }, namespaces: l, requiredNamespaces: F, optionalNamespaces: U, pairingTopic: w, controller: { publicKey: H, metadata: this.client.metadata }, expiry: Nr(ra) }, d && { sessionProperties: d });
      await this.client.core.relayer.subscribe(z), await this.sendRequest({ topic: z, method: "wc_sessionSettle", params: G, throwOnFailedPublish: !0 });
      const ae = Us(or({}, G), { topic: z, pairingTopic: w, acknowledged: !1, self: G.controller, peer: { publicKey: I.publicKey, metadata: I.metadata }, controller: H });
      return await this.client.session.set(z, ae), await this.setExpiry(z, Nr(ra)), { topic: z, acknowledged: () => new Promise((be) => setTimeout(() => be(this.client.session.get(z)), 500)) };
    }, this.reject = async (r) => {
      await this.isInitialized(), await this.isValidReject(r);
      const { id: n, reason: a } = r, { pairingTopic: l } = this.client.proposal.get(n);
      l && (await this.sendError(n, l, a), await this.client.proposal.delete(n, er("USER_DISCONNECTED")));
    }, this.update = async (r) => {
      await this.isInitialized(), await this.isValidUpdate(r);
      const { topic: n, namespaces: a } = r, l = await this.sendRequest({ topic: n, method: "wc_sessionUpdate", params: { namespaces: a } }), { done: d, resolve: v, reject: w } = cs();
      return this.events.once(Ft("session_update", l), ({ error: I }) => {
        I ? w(I) : v();
      }), await this.client.session.update(n, { namespaces: a }), { acknowledged: d };
    }, this.extend = async (r) => {
      await this.isInitialized(), await this.isValidExtend(r);
      const { topic: n } = r, a = await this.sendRequest({ topic: n, method: "wc_sessionExtend", params: {} }), { done: l, resolve: d, reject: v } = cs();
      return this.events.once(Ft("session_extend", a), ({ error: w }) => {
        w ? v(w) : d();
      }), await this.setExpiry(n, Nr(ra)), { acknowledged: l };
    }, this.request = async (r) => {
      await this.isInitialized(), await this.isValidRequest(r);
      const { chainId: n, request: a, topic: l, expiry: d } = r, v = T1(), { done: w, resolve: I, reject: F } = cs(d, "Request expired. Please try again.");
      return this.events.once(Ft("session_request", v), ({ error: U, result: H }) => {
        U ? F(U) : I(H);
      }), await Promise.all([new Promise(async (U) => {
        await this.sendRequest({ clientRpcId: v, topic: l, method: "wc_sessionRequest", params: { request: a, chainId: n }, expiry: d, throwOnFailedPublish: !0 }).catch((H) => F(H)), this.client.events.emit("session_request_sent", { topic: l, request: a, chainId: n, id: v }), U();
      }), new Promise(async (U) => {
        const H = await this.client.core.storage.getItem(hl);
        l1({ id: v, topic: l, wcDeepLink: H }), U();
      }), w()]).then((U) => U[2]);
    }, this.respond = async (r) => {
      await this.isInitialized(), await this.isValidRespond(r);
      const { topic: n, response: a } = r, { id: l } = a;
      vi(a) ? await this.sendResult({ id: l, topic: n, result: a.result, throwOnFailedPublish: !0 }) : ri(a) && await this.sendError(l, n, a.error), this.cleanupAfterResponse(r);
    }, this.ping = async (r) => {
      await this.isInitialized(), await this.isValidPing(r);
      const { topic: n } = r;
      if (this.client.session.keys.includes(n)) {
        const a = await this.sendRequest({ topic: n, method: "wc_sessionPing", params: {} }), { done: l, resolve: d, reject: v } = cs();
        this.events.once(Ft("session_ping", a), ({ error: w }) => {
          w ? v(w) : d();
        }), await l();
      } else
        this.client.core.pairing.pairings.keys.includes(n) && await this.client.core.pairing.ping({ topic: n });
    }, this.emit = async (r) => {
      await this.isInitialized(), await this.isValidEmit(r);
      const { topic: n, event: a, chainId: l } = r;
      await this.sendRequest({ topic: n, method: "wc_sessionEvent", params: { event: a, chainId: l } });
    }, this.disconnect = async (r) => {
      await this.isInitialized(), await this.isValidDisconnect(r);
      const { topic: n } = r;
      this.client.session.keys.includes(n) ? (await this.sendRequest({ topic: n, method: "wc_sessionDelete", params: er("USER_DISCONNECTED"), throwOnFailedPublish: !0 }), await this.deleteSession(n)) : await this.client.core.pairing.disconnect({ topic: n });
    }, this.find = (r) => (this.isInitialized(), this.client.session.getAll().filter((n) => f1(n, r))), this.getPendingSessionRequests = () => (this.isInitialized(), this.client.pendingRequest.getAll()), this.cleanupDuplicatePairings = async (r) => {
      if (r.pairingTopic)
        try {
          const n = this.client.core.pairing.pairings.get(r.pairingTopic), a = this.client.core.pairing.pairings.getAll().filter((l) => {
            var d, v;
            return ((d = l.peerMetadata) == null ? void 0 : d.url) && ((v = l.peerMetadata) == null ? void 0 : v.url) === r.peer.metadata.url && l.topic && l.topic !== n.topic;
          });
          if (a.length === 0)
            return;
          this.client.logger.info(`Cleaning up ${a.length} duplicate pairing(s)`), await Promise.all(a.map((l) => this.client.core.pairing.disconnect({ topic: l.topic }))), this.client.logger.info("Duplicate pairings clean up finished");
        } catch (n) {
          this.client.logger.error(n);
        }
    }, this.deleteSession = async (r, n) => {
      const { self: a } = this.client.session.get(r);
      await this.client.core.relayer.unsubscribe(r), this.client.session.delete(r, er("USER_DISCONNECTED")), this.client.core.crypto.keychain.has(a.publicKey) && await this.client.core.crypto.deleteKeyPair(a.publicKey), this.client.core.crypto.keychain.has(r) && await this.client.core.crypto.deleteSymKey(r), n || this.client.core.expirer.del(r), this.client.core.storage.removeItem(hl).catch((l) => this.client.logger.warn(l));
    }, this.deleteProposal = async (r, n) => {
      await Promise.all([this.client.proposal.delete(r, er("USER_DISCONNECTED")), n ? Promise.resolve() : this.client.core.expirer.del(r)]);
    }, this.deletePendingSessionRequest = async (r, n, a = !1) => {
      await Promise.all([this.client.pendingRequest.delete(r, n), a ? Promise.resolve() : this.client.core.expirer.del(r)]), this.sessionRequestQueue.queue = this.sessionRequestQueue.queue.filter((l) => l.id !== r), a && (this.sessionRequestQueue.state = ti.idle);
    }, this.setExpiry = async (r, n) => {
      this.client.session.keys.includes(r) && await this.client.session.update(r, { expiry: n }), this.client.core.expirer.set(r, n);
    }, this.setProposal = async (r, n) => {
      await this.client.proposal.set(r, n), this.client.core.expirer.set(r, n.expiry);
    }, this.setPendingSessionRequest = async (r) => {
      const n = zs.wc_sessionRequest.req.ttl, { id: a, topic: l, params: d, verifyContext: v } = r;
      await this.client.pendingRequest.set(a, { id: a, topic: l, params: d, verifyContext: v }), n && this.client.core.expirer.set(a, Nr(n));
    }, this.sendRequest = async (r) => {
      const { topic: n, method: a, params: l, expiry: d, relayRpcId: v, clientRpcId: w, throwOnFailedPublish: I } = r, F = Bs(a, l, w);
      if (Cl() && tb.includes(a)) {
        const k = ls(JSON.stringify(F));
        this.client.core.verify.register({ attestationId: k });
      }
      const U = await this.client.core.crypto.encode(n, F), H = zs[a].req;
      return d && (H.ttl = d), v && (H.id = v), this.client.core.history.set(n, F), I ? (H.internal = Us(or({}, H.internal), { throwOnFailedPublish: !0 }), await this.client.core.relayer.publish(n, U, H)) : this.client.core.relayer.publish(n, U, H).catch((k) => this.client.logger.error(k)), F.id;
    }, this.sendResult = async (r) => {
      const { id: n, topic: a, result: l, throwOnFailedPublish: d } = r, v = gc(n, l), w = await this.client.core.crypto.encode(a, v), I = await this.client.core.history.get(a, n), F = zs[I.request.method].res;
      d ? (F.internal = Us(or({}, F.internal), { throwOnFailedPublish: !0 }), await this.client.core.relayer.publish(a, w, F)) : this.client.core.relayer.publish(a, w, F).catch((U) => this.client.logger.error(U)), await this.client.core.history.resolve(v);
    }, this.sendError = async (r, n, a) => {
      const l = fc(r, a), d = await this.client.core.crypto.encode(n, l), v = await this.client.core.history.get(n, r), w = zs[v.request.method].res;
      this.client.core.relayer.publish(n, d, w), await this.client.core.history.resolve(l);
    }, this.cleanup = async () => {
      const r = [], n = [];
      this.client.session.getAll().forEach((a) => {
        yi(a.expiry) && r.push(a.topic);
      }), this.client.proposal.getAll().forEach((a) => {
        yi(a.expiry) && n.push(a.id);
      }), await Promise.all([...r.map((a) => this.deleteSession(a)), ...n.map((a) => this.deleteProposal(a))]);
    }, this.onRelayEventRequest = async (r) => {
      this.requestQueue.queue.push(r), await this.processRequestsQueue();
    }, this.processRequestsQueue = async () => {
      if (this.requestQueue.state === ti.active) {
        this.client.logger.info("Request queue already active, skipping...");
        return;
      }
      for (this.client.logger.info(`Request queue starting with ${this.requestQueue.queue.length} requests`); this.requestQueue.queue.length > 0; ) {
        this.requestQueue.state = ti.active;
        const r = this.requestQueue.queue.shift();
        if (r)
          try {
            this.processRequest(r), await new Promise((n) => setTimeout(n, 300));
          } catch (n) {
            this.client.logger.warn(n);
          }
      }
      this.requestQueue.state = ti.idle;
    }, this.processRequest = (r) => {
      const { topic: n, payload: a } = r, l = a.method;
      switch (l) {
        case "wc_sessionPropose":
          return this.onSessionProposeRequest(n, a);
        case "wc_sessionSettle":
          return this.onSessionSettleRequest(n, a);
        case "wc_sessionUpdate":
          return this.onSessionUpdateRequest(n, a);
        case "wc_sessionExtend":
          return this.onSessionExtendRequest(n, a);
        case "wc_sessionPing":
          return this.onSessionPingRequest(n, a);
        case "wc_sessionDelete":
          return this.onSessionDeleteRequest(n, a);
        case "wc_sessionRequest":
          return this.onSessionRequest(n, a);
        case "wc_sessionEvent":
          return this.onSessionEventRequest(n, a);
        default:
          return this.client.logger.info(`Unsupported request method ${l}`);
      }
    }, this.onRelayEventResponse = async (r) => {
      const { topic: n, payload: a } = r, l = (await this.client.core.history.get(n, a.id)).request.method;
      switch (l) {
        case "wc_sessionPropose":
          return this.onSessionProposeResponse(n, a);
        case "wc_sessionSettle":
          return this.onSessionSettleResponse(n, a);
        case "wc_sessionUpdate":
          return this.onSessionUpdateResponse(n, a);
        case "wc_sessionExtend":
          return this.onSessionExtendResponse(n, a);
        case "wc_sessionPing":
          return this.onSessionPingResponse(n, a);
        case "wc_sessionRequest":
          return this.onSessionRequestResponse(n, a);
        default:
          return this.client.logger.info(`Unsupported response method ${l}`);
      }
    }, this.onRelayEventUnknownPayload = (r) => {
      const { topic: n } = r, { message: a } = Z("MISSING_OR_INVALID", `Decoded payload on topic ${n} is not identifiable as a JSON-RPC request or a response.`);
      throw new Error(a);
    }, this.onSessionProposeRequest = async (r, n) => {
      const { params: a, id: l } = n;
      try {
        this.isValidConnect(or({}, n.params));
        const d = Nr(re.FIVE_MINUTES), v = or({ id: l, pairingTopic: r, expiry: d }, a);
        await this.setProposal(l, v);
        const w = ls(JSON.stringify(n)), I = await this.getVerifyContext(w, v.proposer.metadata);
        this.client.events.emit("session_proposal", { id: l, params: v, verifyContext: I });
      } catch (d) {
        await this.sendError(l, r, d), this.client.logger.error(d);
      }
    }, this.onSessionProposeResponse = async (r, n) => {
      const { id: a } = n;
      if (vi(n)) {
        const { result: l } = n;
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", result: l });
        const d = this.client.proposal.get(a);
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", proposal: d });
        const v = d.proposer.publicKey;
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", selfPublicKey: v });
        const w = l.responderPublicKey;
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", peerPublicKey: w });
        const I = await this.client.core.crypto.generateSharedKey(v, w);
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", sessionTopic: I });
        const F = await this.client.core.relayer.subscribe(I);
        this.client.logger.trace({ type: "method", method: "onSessionProposeResponse", subscriptionId: F }), await this.client.core.pairing.activate({ topic: r });
      } else
        ri(n) && (await this.client.proposal.delete(a, er("USER_DISCONNECTED")), this.events.emit(Ft("session_connect"), { error: n.error }));
    }, this.onSessionSettleRequest = async (r, n) => {
      const { id: a, params: l } = n;
      try {
        this.isValidSessionSettleRequest(l);
        const { relay: d, controller: v, expiry: w, namespaces: I, requiredNamespaces: F, optionalNamespaces: U, sessionProperties: H, pairingTopic: k } = n.params, z = or({ topic: r, relay: d, expiry: w, namespaces: I, acknowledged: !0, pairingTopic: k, requiredNamespaces: F, optionalNamespaces: U, controller: v.publicKey, self: { publicKey: "", metadata: this.client.metadata }, peer: { publicKey: v.publicKey, metadata: v.metadata } }, H && { sessionProperties: H });
        await this.sendResult({ id: n.id, topic: r, result: !0 }), this.events.emit(Ft("session_connect"), { session: z }), this.cleanupDuplicatePairings(z);
      } catch (d) {
        await this.sendError(a, r, d), this.client.logger.error(d);
      }
    }, this.onSessionSettleResponse = async (r, n) => {
      const { id: a } = n;
      vi(n) ? (await this.client.session.update(r, { acknowledged: !0 }), this.events.emit(Ft("session_approve", a), {})) : ri(n) && (await this.client.session.delete(r, er("USER_DISCONNECTED")), this.events.emit(Ft("session_approve", a), { error: n.error }));
    }, this.onSessionUpdateRequest = async (r, n) => {
      const { params: a, id: l } = n;
      try {
        const d = `${r}_session_update`, v = ta.get(d);
        if (v && this.isRequestOutOfSync(v, l)) {
          this.client.logger.info(`Discarding out of sync request - ${l}`);
          return;
        }
        this.isValidUpdate(or({ topic: r }, a)), await this.client.session.update(r, { namespaces: a.namespaces }), await this.sendResult({ id: l, topic: r, result: !0 }), this.client.events.emit("session_update", { id: l, topic: r, params: a }), ta.set(d, l);
      } catch (d) {
        await this.sendError(l, r, d), this.client.logger.error(d);
      }
    }, this.isRequestOutOfSync = (r, n) => parseInt(n.toString().slice(0, -3)) <= parseInt(r.toString().slice(0, -3)), this.onSessionUpdateResponse = (r, n) => {
      const { id: a } = n;
      vi(n) ? this.events.emit(Ft("session_update", a), {}) : ri(n) && this.events.emit(Ft("session_update", a), { error: n.error });
    }, this.onSessionExtendRequest = async (r, n) => {
      const { id: a } = n;
      try {
        this.isValidExtend({ topic: r }), await this.setExpiry(r, Nr(ra)), await this.sendResult({ id: a, topic: r, result: !0 }), this.client.events.emit("session_extend", { id: a, topic: r });
      } catch (l) {
        await this.sendError(a, r, l), this.client.logger.error(l);
      }
    }, this.onSessionExtendResponse = (r, n) => {
      const { id: a } = n;
      vi(n) ? this.events.emit(Ft("session_extend", a), {}) : ri(n) && this.events.emit(Ft("session_extend", a), { error: n.error });
    }, this.onSessionPingRequest = async (r, n) => {
      const { id: a } = n;
      try {
        this.isValidPing({ topic: r }), await this.sendResult({ id: a, topic: r, result: !0 }), this.client.events.emit("session_ping", { id: a, topic: r });
      } catch (l) {
        await this.sendError(a, r, l), this.client.logger.error(l);
      }
    }, this.onSessionPingResponse = (r, n) => {
      const { id: a } = n;
      setTimeout(() => {
        vi(n) ? this.events.emit(Ft("session_ping", a), {}) : ri(n) && this.events.emit(Ft("session_ping", a), { error: n.error });
      }, 500);
    }, this.onSessionDeleteRequest = async (r, n) => {
      const { id: a } = n;
      try {
        this.isValidDisconnect({ topic: r, reason: n.params }), await Promise.all([new Promise((l) => {
          this.client.core.relayer.once(Bt.publish, async () => {
            l(await this.deleteSession(r));
          });
        }), this.sendResult({ id: a, topic: r, result: !0 })]), this.client.events.emit("session_delete", { id: a, topic: r });
      } catch (l) {
        this.client.logger.error(l);
      }
    }, this.onSessionRequest = async (r, n) => {
      const { id: a, params: l } = n;
      try {
        this.isValidRequest(or({ topic: r }, l));
        const d = ls(JSON.stringify(Bs("wc_sessionRequest", l, a))), v = this.client.session.get(r), w = await this.getVerifyContext(d, v.peer.metadata), I = { id: a, topic: r, params: l, verifyContext: w };
        await this.setPendingSessionRequest(I), this.addSessionRequestToSessionRequestQueue(I), this.processSessionRequestQueue();
      } catch (d) {
        await this.sendError(a, r, d), this.client.logger.error(d);
      }
    }, this.onSessionRequestResponse = (r, n) => {
      const { id: a } = n;
      vi(n) ? this.events.emit(Ft("session_request", a), { result: n.result }) : ri(n) && this.events.emit(Ft("session_request", a), { error: n.error });
    }, this.onSessionEventRequest = async (r, n) => {
      const { id: a, params: l } = n;
      try {
        const d = `${r}_session_event_${l.event.name}`, v = ta.get(d);
        if (v && this.isRequestOutOfSync(v, a)) {
          this.client.logger.info(`Discarding out of sync request - ${a}`);
          return;
        }
        this.isValidEmit(or({ topic: r }, l)), this.client.events.emit("session_event", { id: a, topic: r, params: l }), ta.set(d, a);
      } catch (d) {
        await this.sendError(a, r, d), this.client.logger.error(d);
      }
    }, this.addSessionRequestToSessionRequestQueue = (r) => {
      this.sessionRequestQueue.queue.push(r);
    }, this.cleanupAfterResponse = (r) => {
      this.deletePendingSessionRequest(r.response.id, { message: "fulfilled", code: 0 }), setTimeout(() => {
        this.sessionRequestQueue.state = ti.idle, this.processSessionRequestQueue();
      }, re.toMiliseconds(this.requestQueueDelay));
    }, this.processSessionRequestQueue = () => {
      if (this.sessionRequestQueue.state === ti.active) {
        this.client.logger.info("session request queue is already active.");
        return;
      }
      const r = this.sessionRequestQueue.queue[0];
      if (!r) {
        this.client.logger.info("session request queue is empty.");
        return;
      }
      try {
        this.sessionRequestQueue.state = ti.active, this.client.events.emit("session_request", r);
      } catch (n) {
        this.client.logger.error(n);
      }
    }, this.onPairingCreated = (r) => {
      if (r.active)
        return;
      const n = this.client.proposal.getAll().find((a) => a.pairingTopic === r.topic);
      n && this.onSessionProposeRequest(r.topic, Bs("wc_sessionPropose", { requiredNamespaces: n.requiredNamespaces, optionalNamespaces: n.optionalNamespaces, relays: n.relays, proposer: n.proposer }, n.id));
    }, this.isValidConnect = async (r) => {
      if (!cr(r)) {
        const { message: w } = Z("MISSING_OR_INVALID", `connect() params: ${JSON.stringify(r)}`);
        throw new Error(w);
      }
      const { pairingTopic: n, requiredNamespaces: a, optionalNamespaces: l, sessionProperties: d, relays: v } = r;
      if (mi(n) || await this.isValidPairingTopic(n), !p1(v, !0)) {
        const { message: w } = Z("MISSING_OR_INVALID", `connect() relays: ${v}`);
        throw new Error(w);
      }
      !mi(a) && aa(a) !== 0 && this.validateNamespaces(a, "requiredNamespaces"), !mi(l) && aa(l) !== 0 && this.validateNamespaces(l, "optionalNamespaces"), mi(d) || this.validateSessionProps(d, "sessionProperties");
    }, this.validateNamespaces = (r, n) => {
      const a = d1(r, "connect()", n);
      if (a)
        throw new Error(a.message);
    }, this.isValidApprove = async (r) => {
      if (!cr(r))
        throw new Error(Z("MISSING_OR_INVALID", `approve() params: ${r}`).message);
      const { id: n, namespaces: a, relayProtocol: l, sessionProperties: d } = r;
      await this.isValidProposalId(n);
      const v = this.client.proposal.get(n), w = zo(a, "approve()");
      if (w)
        throw new Error(w.message);
      const I = Ih(v.requiredNamespaces, a, "approve()");
      if (I)
        throw new Error(I.message);
      if (!us(l, !0)) {
        const { message: F } = Z("MISSING_OR_INVALID", `approve() relayProtocol: ${l}`);
        throw new Error(F);
      }
      mi(d) || this.validateSessionProps(d, "sessionProperties");
    }, this.isValidReject = async (r) => {
      if (!cr(r)) {
        const { message: l } = Z("MISSING_OR_INVALID", `reject() params: ${r}`);
        throw new Error(l);
      }
      const { id: n, reason: a } = r;
      if (await this.isValidProposalId(n), !g1(a)) {
        const { message: l } = Z("MISSING_OR_INVALID", `reject() reason: ${JSON.stringify(a)}`);
        throw new Error(l);
      }
    }, this.isValidSessionSettleRequest = (r) => {
      if (!cr(r)) {
        const { message: I } = Z("MISSING_OR_INVALID", `onSessionSettleRequest() params: ${r}`);
        throw new Error(I);
      }
      const { relay: n, controller: a, namespaces: l, expiry: d } = r;
      if (!v1(n)) {
        const { message: I } = Z("MISSING_OR_INVALID", "onSessionSettleRequest() relay protocol should be a string");
        throw new Error(I);
      }
      const v = y1(a, "onSessionSettleRequest()");
      if (v)
        throw new Error(v.message);
      const w = zo(l, "onSessionSettleRequest()");
      if (w)
        throw new Error(w.message);
      if (yi(d)) {
        const { message: I } = Z("EXPIRED", "onSessionSettleRequest()");
        throw new Error(I);
      }
    }, this.isValidUpdate = async (r) => {
      if (!cr(r)) {
        const { message: w } = Z("MISSING_OR_INVALID", `update() params: ${r}`);
        throw new Error(w);
      }
      const { topic: n, namespaces: a } = r;
      await this.isValidSessionTopic(n);
      const l = this.client.session.get(n), d = zo(a, "update()");
      if (d)
        throw new Error(d.message);
      const v = Ih(l.requiredNamespaces, a, "update()");
      if (v)
        throw new Error(v.message);
    }, this.isValidExtend = async (r) => {
      if (!cr(r)) {
        const { message: a } = Z("MISSING_OR_INVALID", `extend() params: ${r}`);
        throw new Error(a);
      }
      const { topic: n } = r;
      await this.isValidSessionTopic(n);
    }, this.isValidRequest = async (r) => {
      if (!cr(r)) {
        const { message: w } = Z("MISSING_OR_INVALID", `request() params: ${r}`);
        throw new Error(w);
      }
      const { topic: n, request: a, chainId: l, expiry: d } = r;
      await this.isValidSessionTopic(n);
      const { namespaces: v } = this.client.session.get(n);
      if (!Sh(v, l)) {
        const { message: w } = Z("MISSING_OR_INVALID", `request() chainId: ${l}`);
        throw new Error(w);
      }
      if (!m1(a)) {
        const { message: w } = Z("MISSING_OR_INVALID", `request() ${JSON.stringify(a)}`);
        throw new Error(w);
      }
      if (!w1(v, l, a.method)) {
        const { message: w } = Z("MISSING_OR_INVALID", `request() method: ${a.method}`);
        throw new Error(w);
      }
      if (d && !_1(d, Yo)) {
        const { message: w } = Z("MISSING_OR_INVALID", `request() expiry: ${d}. Expiry must be a number (in seconds) between ${Yo.min} and ${Yo.max}`);
        throw new Error(w);
      }
    }, this.isValidRespond = async (r) => {
      if (!cr(r)) {
        const { message: l } = Z("MISSING_OR_INVALID", `respond() params: ${r}`);
        throw new Error(l);
      }
      const { topic: n, response: a } = r;
      if (await this.isValidSessionTopic(n), !b1(a)) {
        const { message: l } = Z("MISSING_OR_INVALID", `respond() response: ${JSON.stringify(a)}`);
        throw new Error(l);
      }
    }, this.isValidPing = async (r) => {
      if (!cr(r)) {
        const { message: a } = Z("MISSING_OR_INVALID", `ping() params: ${r}`);
        throw new Error(a);
      }
      const { topic: n } = r;
      await this.isValidSessionOrPairingTopic(n);
    }, this.isValidEmit = async (r) => {
      if (!cr(r)) {
        const { message: v } = Z("MISSING_OR_INVALID", `emit() params: ${r}`);
        throw new Error(v);
      }
      const { topic: n, event: a, chainId: l } = r;
      await this.isValidSessionTopic(n);
      const { namespaces: d } = this.client.session.get(n);
      if (!Sh(d, l)) {
        const { message: v } = Z("MISSING_OR_INVALID", `emit() chainId: ${l}`);
        throw new Error(v);
      }
      if (!E1(a)) {
        const { message: v } = Z("MISSING_OR_INVALID", `emit() event: ${JSON.stringify(a)}`);
        throw new Error(v);
      }
      if (!x1(d, l, a.name)) {
        const { message: v } = Z("MISSING_OR_INVALID", `emit() event: ${JSON.stringify(a)}`);
        throw new Error(v);
      }
    }, this.isValidDisconnect = async (r) => {
      if (!cr(r)) {
        const { message: a } = Z("MISSING_OR_INVALID", `disconnect() params: ${r}`);
        throw new Error(a);
      }
      const { topic: n } = r;
      await this.isValidSessionOrPairingTopic(n);
    }, this.getVerifyContext = async (r, n) => {
      const a = { verified: { verifyUrl: n.verifyUrl || oa, validation: "UNKNOWN", origin: n.url || "" } };
      try {
        const l = await this.client.core.verify.resolve({ attestationId: r, verifyUrl: n.verifyUrl });
        l && (a.verified.origin = l.origin, a.verified.isScam = l.isScam, a.verified.validation = l.origin === new URL(n.url).origin ? "VALID" : "INVALID");
      } catch (l) {
        this.client.logger.info(l);
      }
      return this.client.logger.info(`Verify context: ${JSON.stringify(a)}`), a;
    }, this.validateSessionProps = (r, n) => {
      Object.values(r).forEach((a) => {
        if (!us(a, !1)) {
          const { message: l } = Z("MISSING_OR_INVALID", `${n} must be in Record<string, string> format. Received: ${JSON.stringify(a)}`);
          throw new Error(l);
        }
      });
    };
  }
  async isInitialized() {
    if (!this.initialized) {
      const { message: i } = Z("NOT_INITIALIZED", this.name);
      throw new Error(i);
    }
    await this.client.core.relayer.confirmOnlineStateOrThrow();
  }
  registerRelayerEvents() {
    this.client.core.relayer.on(Bt.message, async (i) => {
      const { topic: r, message: n } = i;
      if (this.ignoredPayloadTypes.includes(this.client.core.crypto.getPayloadType(n)))
        return;
      const a = await this.client.core.crypto.decode(r, n);
      try {
        pc(a) ? (this.client.core.history.set(r, a), this.onRelayEventRequest({ topic: r, payload: a })) : dc(a) ? (await this.client.core.history.resolve(a), await this.onRelayEventResponse({ topic: r, payload: a }), this.client.core.history.delete(r, a.id)) : this.onRelayEventUnknownPayload({ topic: r, payload: a });
      } catch (l) {
        this.client.logger.error(l);
      }
    });
  }
  registerExpirerEvents() {
    this.client.core.expirer.on(Ir.expired, async (i) => {
      const { topic: r, id: n } = Pl(i.target);
      if (n && this.client.pendingRequest.keys.includes(n))
        return await this.deletePendingSessionRequest(n, Z("EXPIRED"), !0);
      r ? this.client.session.keys.includes(r) && (await this.deleteSession(r, !0), this.client.events.emit("session_expire", { topic: r })) : n && (await this.deleteProposal(n, !0), this.client.events.emit("proposal_expire", { id: n }));
    });
  }
  registerPairingEvents() {
    this.client.core.pairing.events.on(Ks.create, (i) => this.onPairingCreated(i));
  }
  isValidPairingTopic(i) {
    if (!us(i, !1)) {
      const { message: r } = Z("MISSING_OR_INVALID", `pairing topic should be a string: ${i}`);
      throw new Error(r);
    }
    if (!this.client.core.pairing.pairings.keys.includes(i)) {
      const { message: r } = Z("NO_MATCHING_KEY", `pairing topic doesn't exist: ${i}`);
      throw new Error(r);
    }
    if (yi(this.client.core.pairing.pairings.get(i).expiry)) {
      const { message: r } = Z("EXPIRED", `pairing topic: ${i}`);
      throw new Error(r);
    }
  }
  async isValidSessionTopic(i) {
    if (!us(i, !1)) {
      const { message: r } = Z("MISSING_OR_INVALID", `session topic should be a string: ${i}`);
      throw new Error(r);
    }
    if (!this.client.session.keys.includes(i)) {
      const { message: r } = Z("NO_MATCHING_KEY", `session topic doesn't exist: ${i}`);
      throw new Error(r);
    }
    if (yi(this.client.session.get(i).expiry)) {
      await this.deleteSession(i);
      const { message: r } = Z("EXPIRED", `session topic: ${i}`);
      throw new Error(r);
    }
  }
  async isValidSessionOrPairingTopic(i) {
    if (this.client.session.keys.includes(i))
      await this.isValidSessionTopic(i);
    else if (this.client.core.pairing.pairings.keys.includes(i))
      this.isValidPairingTopic(i);
    else if (us(i, !1)) {
      const { message: r } = Z("NO_MATCHING_KEY", `session or pairing topic doesn't exist: ${i}`);
      throw new Error(r);
    } else {
      const { message: r } = Z("MISSING_OR_INVALID", `session or pairing topic should be a string: ${i}`);
      throw new Error(r);
    }
  }
  async isValidProposalId(i) {
    if (!I1(i)) {
      const { message: r } = Z("MISSING_OR_INVALID", `proposal id should be a number: ${i}`);
      throw new Error(r);
    }
    if (!this.client.proposal.keys.includes(i)) {
      const { message: r } = Z("NO_MATCHING_KEY", `proposal id doesn't exist: ${i}`);
      throw new Error(r);
    }
    if (yi(this.client.proposal.get(i).expiry)) {
      await this.deleteProposal(i);
      const { message: r } = Z("EXPIRED", `proposal id: ${i}`);
      throw new Error(r);
    }
  }
}
class cb extends da {
  constructor(i, r) {
    super(i, r, Y_, wc), this.core = i, this.logger = r;
  }
}
class ub extends da {
  constructor(i, r) {
    super(i, r, Z_, wc), this.core = i, this.logger = r;
  }
}
class hb extends da {
  constructor(i, r) {
    super(i, r, eb, wc, (n) => n.id), this.core = i, this.logger = r;
  }
}
let lb = class nf extends sm {
  constructor(i) {
    super(i), this.protocol = ef, this.version = tf, this.name = Qo.name, this.events = new Ur.EventEmitter(), this.on = (n, a) => this.events.on(n, a), this.once = (n, a) => this.events.once(n, a), this.off = (n, a) => this.events.off(n, a), this.removeListener = (n, a) => this.events.removeListener(n, a), this.removeAllListeners = (n) => this.events.removeAllListeners(n), this.connect = async (n) => {
      try {
        return await this.engine.connect(n);
      } catch (a) {
        throw this.logger.error(a.message), a;
      }
    }, this.pair = async (n) => {
      try {
        return await this.engine.pair(n);
      } catch (a) {
        throw this.logger.error(a.message), a;
      }
    }, this.approve = async (n) => {
      try {
        return await this.engine.approve(n);
      } catch (a) {
        throw this.logger.error(a.message), a;
      }
    }, this.reject = async (n) => {
      try {
        return await this.engine.reject(n);
      } catch (a) {
        throw this.logger.error(a.message), a;
      }
    }, this.update = async (n) => {
      try {
        return await this.engine.update(n);
      } catch (a) {
        throw this.logger.error(a.message), a;
      }
    }, this.extend = async (n) => {
      try {
        return await this.engine.extend(n);
      } catch (a) {
        throw this.logger.error(a.message), a;
      }
    }, this.request = async (n) => {
      try {
        return await this.engine.request(n);
      } catch (a) {
        throw this.logger.error(a.message), a;
      }
    }, this.respond = async (n) => {
      try {
        return await this.engine.respond(n);
      } catch (a) {
        throw this.logger.error(a.message), a;
      }
    }, this.ping = async (n) => {
      try {
        return await this.engine.ping(n);
      } catch (a) {
        throw this.logger.error(a.message), a;
      }
    }, this.emit = async (n) => {
      try {
        return await this.engine.emit(n);
      } catch (a) {
        throw this.logger.error(a.message), a;
      }
    }, this.disconnect = async (n) => {
      try {
        return await this.engine.disconnect(n);
      } catch (a) {
        throw this.logger.error(a.message), a;
      }
    }, this.find = (n) => {
      try {
        return this.engine.find(n);
      } catch (a) {
        throw this.logger.error(a.message), a;
      }
    }, this.getPendingSessionRequests = () => {
      try {
        return this.engine.getPendingSessionRequests();
      } catch (n) {
        throw this.logger.error(n.message), n;
      }
    }, this.name = (i == null ? void 0 : i.name) || Qo.name, this.metadata = (i == null ? void 0 : i.metadata) || u1();
    const r = typeof (i == null ? void 0 : i.logger) < "u" && typeof (i == null ? void 0 : i.logger) != "string" ? i.logger : Ae.pino(Ae.getDefaultLoggerOptions({ level: (i == null ? void 0 : i.logger) || Qo.logger }));
    this.core = (i == null ? void 0 : i.core) || new Q_(i), this.logger = Ae.generateChildLogger(r, this.name), this.session = new ub(this.core, this.logger), this.proposal = new cb(this.core, this.logger), this.pendingRequest = new hb(this.core, this.logger), this.engine = new ob(this);
  }
  static async init(i) {
    const r = new nf(i);
    return await r.initialize(), r;
  }
  get context() {
    return Ae.getLoggerContext(this.logger);
  }
  get pairing() {
    return this.core.pairing.pairings;
  }
  async initialize() {
    this.logger.trace("Initialized");
    try {
      await this.core.start(), await this.session.init(), await this.proposal.init(), await this.pendingRequest.init(), await this.engine.init(), this.core.verify.init({ verifyUrl: this.metadata.verifyUrl }), this.logger.info("SignClient Initialization Success");
    } catch (i) {
      throw this.logger.info("SignClient Initialization Failure"), this.logger.error(i.message), i;
    }
  }
};
const pl = "error", fb = "wss://relay.walletconnect.com", pb = "wc", db = "universal_provider", dl = `${pb}@2:${db}:`, gb = "https://rpc.walletconnect.com/v1/", si = { DEFAULT_CHAIN_CHANGED: "default_chain_changed" };
var Hs = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, ac = { exports: {} };
/**
* @license
* Lodash <https://lodash.com/>
* Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
* Released under MIT license <https://lodash.com/license>
* Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
* Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
*/
(function(h, i) {
  (function() {
    var r, n = "4.17.21", a = 200, l = "Unsupported core-js use. Try https://npms.io/search?q=ponyfill.", d = "Expected a function", v = "Invalid `variable` option passed into `_.template`", w = "__lodash_hash_undefined__", I = 500, F = "__lodash_placeholder__", U = 1, H = 2, k = 4, z = 1, G = 2, ae = 1, be = 2, de = 4, pe = 8, ue = 16, he = 32, R = 64, M = 128, W = 256, ge = 512, te = 30, Ee = "...", Oe = 800, et = 16, C = 1, D = 2, je = 3, Re = 1 / 0, J = 9007199254740991, K = 17976931348623157e292, j = 0 / 0, V = 4294967295, ut = V - 1, He = V >>> 1, Fr = [["ary", M], ["bind", ae], ["bindKey", be], ["curry", pe], ["curryRight", ue], ["flip", ge], ["partial", he], ["partialRight", R], ["rearg", W]], we = "[object Arguments]", xt = "[object Array]", O = "[object AsyncFunction]", A = "[object Boolean]", S = "[object Date]", c = "[object DOMException]", _ = "[object Error]", X = "[object Function]", oe = "[object GeneratorFunction]", ye = "[object Map]", Te = "[object Number]", Fe = "[object Null]", Ie = "[object Object]", It = "[object Promise]", mt = "[object Proxy]", nt = "[object RegExp]", De = "[object Set]", Je = "[object String]", Qe = "[object Symbol]", at = "[object Undefined]", ze = "[object WeakMap]", Ye = "[object WeakSet]", Ne = "[object ArrayBuffer]", ke = "[object DataView]", ht = "[object Float32Array]", Le = "[object Float64Array]", St = "[object Int8Array]", $t = "[object Int16Array]", zt = "[object Int32Array]", Ut = "[object Uint8Array]", Lt = "[object Uint8ClampedArray]", Gt = "[object Uint16Array]", tr = "[object Uint32Array]", $r = /\b__p \+= '';/g, Wt = /\b(__p \+=) '' \+/g, Hr = /(__e\(.*?\)|\b__t\)) \+\n'';/g, ni = /&(?:amp|lt|gt|quot|#39);/g, Ei = /[&<>"']/g, lt = RegExp(ni.source), tt = RegExp(Ei.source), ft = /<%-([\s\S]+?)%>/g, pt = /<%([\s\S]+?)%>/g, ot = /<%=([\s\S]+?)%>/g, rt = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Pt = /^\w*$/, Ct = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, dt = /[\\^$.*+?()[\]{}|]/g, At = RegExp(dt.source), gt = /^\s+/, wt = /\s/, vt = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/, We = /\{\n\/\* \[wrapped with (.+)\] \*/, Ot = /,? & /, Rt = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g, ga = /[()=,{}\[\]\/\s]/, va = /\\(\\)?/g, ya = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, gr = /\w*$/, ma = /^[-+]0x[0-9a-f]+$/i, wa = /^0b[01]+$/i, _a = /^\[object .+?Constructor\]$/, ba = /^0o[0-7]+$/i, Ea = /^(?:0|[1-9]\d*)$/, kr = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g, Hi = /($^)/, xa = /['\n\r\u2028\u2029\\]/g, ki = "\\ud800-\\udfff", Ia = "\\u0300-\\u036f", Sa = "\\ufe20-\\ufe2f", Ki = "\\u20d0-\\u20ff", Qs = Ia + Sa + Ki, Ys = "\\u2700-\\u27bf", Sr = "a-z\\xdf-\\xf6\\xf8-\\xff", Pa = "\\xac\\xb1\\xd7\\xf7", Ca = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf", Aa = "\\u2000-\\u206f", Oa = " \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000", Zs = "A-Z\\xc0-\\xd6\\xd8-\\xde", Xs = "\\ufe0e\\ufe0f", xi = Pa + Ca + Aa + Oa, ds = "['’]", Ii = "[" + ki + "]", gs = "[" + xi + "]", Si = "[" + Qs + "]", en = "\\d+", Ra = "[" + Ys + "]", tn = "[" + Sr + "]", rn = "[^" + ki + xi + en + Ys + Sr + Zs + "]", Vi = "\\ud83c[\\udffb-\\udfff]", Ta = "(?:" + Si + "|" + Vi + ")", sn = "[^" + ki + "]", Bi = "(?:\\ud83c[\\udde6-\\uddff]){2}", ai = "[\\ud800-\\udbff][\\udc00-\\udfff]", ur = "[" + Zs + "]", nn = "\\u200d", an = "(?:" + tn + "|" + rn + ")", Dr = "(?:" + ur + "|" + rn + ")", on = "(?:" + ds + "(?:d|ll|m|re|s|t|ve))?", cn = "(?:" + ds + "(?:D|LL|M|RE|S|T|VE))?", un = Ta + "?", hn = "[" + Xs + "]?", Na = "(?:" + nn + "(?:" + [sn, Bi, ai].join("|") + ")" + hn + un + ")*", Kr = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", ln = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", fn = hn + un + Na, Gi = "(?:" + [Ra, Bi, ai].join("|") + ")" + fn, Fa = "(?:" + [sn + Si + "?", Si, Bi, ai, Ii].join("|") + ")", vs = RegExp(ds, "g"), $a = RegExp(Si, "g"), Wi = RegExp(Vi + "(?=" + Vi + ")|" + Fa + fn, "g"), pn = RegExp([ur + "?" + tn + "+" + on + "(?=" + [gs, ur, "$"].join("|") + ")", Dr + "+" + cn + "(?=" + [gs, ur + an, "$"].join("|") + ")", ur + "?" + an + "+" + on, ur + "+" + cn, ln, Kr, en, Gi].join("|"), "g"), dn = RegExp("[" + nn + ki + Qs + Xs + "]"), Pi = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/, gn = ["Array", "Buffer", "DataView", "Date", "Error", "Float32Array", "Float64Array", "Function", "Int8Array", "Int16Array", "Int32Array", "Map", "Math", "Object", "Promise", "RegExp", "Set", "String", "Symbol", "TypeError", "Uint8Array", "Uint8ClampedArray", "Uint16Array", "Uint32Array", "WeakMap", "_", "clearTimeout", "isFinite", "parseInt", "setTimeout"], Da = -1, Ke = {};
    Ke[ht] = Ke[Le] = Ke[St] = Ke[$t] = Ke[zt] = Ke[Ut] = Ke[Lt] = Ke[Gt] = Ke[tr] = !0, Ke[we] = Ke[xt] = Ke[Ne] = Ke[A] = Ke[ke] = Ke[S] = Ke[_] = Ke[X] = Ke[ye] = Ke[Te] = Ke[Ie] = Ke[nt] = Ke[De] = Ke[Je] = Ke[ze] = !1;
    var Ue = {};
    Ue[we] = Ue[xt] = Ue[Ne] = Ue[ke] = Ue[A] = Ue[S] = Ue[ht] = Ue[Le] = Ue[St] = Ue[$t] = Ue[zt] = Ue[ye] = Ue[Te] = Ue[Ie] = Ue[nt] = Ue[De] = Ue[Je] = Ue[Qe] = Ue[Ut] = Ue[Lt] = Ue[Gt] = Ue[tr] = !0, Ue[_] = Ue[X] = Ue[ze] = !1;
    var g = { À: "A", Á: "A", Â: "A", Ã: "A", Ä: "A", Å: "A", à: "a", á: "a", â: "a", ã: "a", ä: "a", å: "a", Ç: "C", ç: "c", Ð: "D", ð: "d", È: "E", É: "E", Ê: "E", Ë: "E", è: "e", é: "e", ê: "e", ë: "e", Ì: "I", Í: "I", Î: "I", Ï: "I", ì: "i", í: "i", î: "i", ï: "i", Ñ: "N", ñ: "n", Ò: "O", Ó: "O", Ô: "O", Õ: "O", Ö: "O", Ø: "O", ò: "o", ó: "o", ô: "o", õ: "o", ö: "o", ø: "o", Ù: "U", Ú: "U", Û: "U", Ü: "U", ù: "u", ú: "u", û: "u", ü: "u", Ý: "Y", ý: "y", ÿ: "y", Æ: "Ae", æ: "ae", Þ: "Th", þ: "th", ß: "ss", Ā: "A", Ă: "A", Ą: "A", ā: "a", ă: "a", ą: "a", Ć: "C", Ĉ: "C", Ċ: "C", Č: "C", ć: "c", ĉ: "c", ċ: "c", č: "c", Ď: "D", Đ: "D", ď: "d", đ: "d", Ē: "E", Ĕ: "E", Ė: "E", Ę: "E", Ě: "E", ē: "e", ĕ: "e", ė: "e", ę: "e", ě: "e", Ĝ: "G", Ğ: "G", Ġ: "G", Ģ: "G", ĝ: "g", ğ: "g", ġ: "g", ģ: "g", Ĥ: "H", Ħ: "H", ĥ: "h", ħ: "h", Ĩ: "I", Ī: "I", Ĭ: "I", Į: "I", İ: "I", ĩ: "i", ī: "i", ĭ: "i", į: "i", ı: "i", Ĵ: "J", ĵ: "j", Ķ: "K", ķ: "k", ĸ: "k", Ĺ: "L", Ļ: "L", Ľ: "L", Ŀ: "L", Ł: "L", ĺ: "l", ļ: "l", ľ: "l", ŀ: "l", ł: "l", Ń: "N", Ņ: "N", Ň: "N", Ŋ: "N", ń: "n", ņ: "n", ň: "n", ŋ: "n", Ō: "O", Ŏ: "O", Ő: "O", ō: "o", ŏ: "o", ő: "o", Ŕ: "R", Ŗ: "R", Ř: "R", ŕ: "r", ŗ: "r", ř: "r", Ś: "S", Ŝ: "S", Ş: "S", Š: "S", ś: "s", ŝ: "s", ş: "s", š: "s", Ţ: "T", Ť: "T", Ŧ: "T", ţ: "t", ť: "t", ŧ: "t", Ũ: "U", Ū: "U", Ŭ: "U", Ů: "U", Ű: "U", Ų: "U", ũ: "u", ū: "u", ŭ: "u", ů: "u", ű: "u", ų: "u", Ŵ: "W", ŵ: "w", Ŷ: "Y", ŷ: "y", Ÿ: "Y", Ź: "Z", Ż: "Z", Ž: "Z", ź: "z", ż: "z", ž: "z", Ĳ: "IJ", ĳ: "ij", Œ: "Oe", œ: "oe", ŉ: "'n", ſ: "s" }, b = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }, q = { "&amp;": "&", "&lt;": "<", "&gt;": ">", "&quot;": '"', "&#39;": "'" }, Q = { "\\": "\\", "'": "'", "\n": "n", "\r": "r", "\u2028": "u2028", "\u2029": "u2029" }, Ve = parseFloat, le = parseInt, Ze = typeof Hs == "object" && Hs && Hs.Object === Object && Hs, Tt = typeof self == "object" && self && self.Object === Object && self, Pe = Ze || Tt || Function("return this")(), Be = i && !i.nodeType && i, _t = Be && !0 && h && !h.nodeType && h, rr = _t && _t.exports === Be, Nt = rr && Ze.process, Xe = function() {
      try {
        var E = _t && _t.require && _t.require("util").types;
        return E || Nt && Nt.binding && Nt.binding("util");
      } catch {
      }
    }(), Jt = Xe && Xe.isArrayBuffer, Pr = Xe && Xe.isDate, vr = Xe && Xe.isMap, qr = Xe && Xe.isRegExp, ys = Xe && Xe.isSet, Ci = Xe && Xe.isTypedArray;
    function Mt(E, T, P) {
      switch (P.length) {
        case 0:
          return E.call(T);
        case 1:
          return E.call(T, P[0]);
        case 2:
          return E.call(T, P[0], P[1]);
        case 3:
          return E.call(T, P[0], P[1], P[2]);
      }
      return E.apply(T, P);
    }
    function cf(E, T, P, Y) {
      for (var ce = -1, $e = E == null ? 0 : E.length; ++ce < $e; ) {
        var Dt = E[ce];
        T(Y, Dt, P(Dt), E);
      }
      return Y;
    }
    function yr(E, T) {
      for (var P = -1, Y = E == null ? 0 : E.length; ++P < Y && T(E[P], P, E) !== !1; )
        ;
      return E;
    }
    function uf(E, T) {
      for (var P = E == null ? 0 : E.length; P-- && T(E[P], P, E) !== !1; )
        ;
      return E;
    }
    function Ec(E, T) {
      for (var P = -1, Y = E == null ? 0 : E.length; ++P < Y; )
        if (!T(E[P], P, E))
          return !1;
      return !0;
    }
    function oi(E, T) {
      for (var P = -1, Y = E == null ? 0 : E.length, ce = 0, $e = []; ++P < Y; ) {
        var Dt = E[P];
        T(Dt, P, E) && ($e[ce++] = Dt);
      }
      return $e;
    }
    function vn(E, T) {
      var P = E == null ? 0 : E.length;
      return !!P && Ji(E, T, 0) > -1;
    }
    function qa(E, T, P) {
      for (var Y = -1, ce = E == null ? 0 : E.length; ++Y < ce; )
        if (P(T, E[Y]))
          return !0;
      return !1;
    }
    function it(E, T) {
      for (var P = -1, Y = E == null ? 0 : E.length, ce = Array(Y); ++P < Y; )
        ce[P] = T(E[P], P, E);
      return ce;
    }
    function ci(E, T) {
      for (var P = -1, Y = T.length, ce = E.length; ++P < Y; )
        E[ce + P] = T[P];
      return E;
    }
    function La(E, T, P, Y) {
      var ce = -1, $e = E == null ? 0 : E.length;
      for (Y && $e && (P = E[++ce]); ++ce < $e; )
        P = T(P, E[ce], ce, E);
      return P;
    }
    function hf(E, T, P, Y) {
      var ce = E == null ? 0 : E.length;
      for (Y && ce && (P = E[--ce]); ce--; )
        P = T(P, E[ce], ce, E);
      return P;
    }
    function Ma(E, T) {
      for (var P = -1, Y = E == null ? 0 : E.length; ++P < Y; )
        if (T(E[P], P, E))
          return !0;
      return !1;
    }
    var lf = ja("length");
    function ff(E) {
      return E.split("");
    }
    function pf(E) {
      return E.match(Rt) || [];
    }
    function xc(E, T, P) {
      var Y;
      return P(E, function(ce, $e, Dt) {
        if (T(ce, $e, Dt))
          return Y = $e, !1;
      }), Y;
    }
    function yn(E, T, P, Y) {
      for (var ce = E.length, $e = P + (Y ? 1 : -1); Y ? $e-- : ++$e < ce; )
        if (T(E[$e], $e, E))
          return $e;
      return -1;
    }
    function Ji(E, T, P) {
      return T === T ? Sf(E, T, P) : yn(E, Ic, P);
    }
    function df(E, T, P, Y) {
      for (var ce = P - 1, $e = E.length; ++ce < $e; )
        if (Y(E[ce], T))
          return ce;
      return -1;
    }
    function Ic(E) {
      return E !== E;
    }
    function Sc(E, T) {
      var P = E == null ? 0 : E.length;
      return P ? Ua(E, T) / P : j;
    }
    function ja(E) {
      return function(T) {
        return T == null ? r : T[E];
      };
    }
    function za(E) {
      return function(T) {
        return E == null ? r : E[T];
      };
    }
    function Pc(E, T, P, Y, ce) {
      return ce(E, function($e, Dt, Ge) {
        P = Y ? (Y = !1, $e) : T(P, $e, Dt, Ge);
      }), P;
    }
    function gf(E, T) {
      var P = E.length;
      for (E.sort(T); P--; )
        E[P] = E[P].value;
      return E;
    }
    function Ua(E, T) {
      for (var P, Y = -1, ce = E.length; ++Y < ce; ) {
        var $e = T(E[Y]);
        $e !== r && (P = P === r ? $e : P + $e);
      }
      return P;
    }
    function Ha(E, T) {
      for (var P = -1, Y = Array(E); ++P < E; )
        Y[P] = T(P);
      return Y;
    }
    function vf(E, T) {
      return it(T, function(P) {
        return [P, E[P]];
      });
    }
    function Cc(E) {
      return E && E.slice(0, Tc(E) + 1).replace(gt, "");
    }
    function hr(E) {
      return function(T) {
        return E(T);
      };
    }
    function ka(E, T) {
      return it(T, function(P) {
        return E[P];
      });
    }
    function ms(E, T) {
      return E.has(T);
    }
    function Ac(E, T) {
      for (var P = -1, Y = E.length; ++P < Y && Ji(T, E[P], 0) > -1; )
        ;
      return P;
    }
    function Oc(E, T) {
      for (var P = E.length; P-- && Ji(T, E[P], 0) > -1; )
        ;
      return P;
    }
    function yf(E, T) {
      for (var P = E.length, Y = 0; P--; )
        E[P] === T && ++Y;
      return Y;
    }
    var mf = za(g), wf = za(b);
    function _f(E) {
      return "\\" + Q[E];
    }
    function bf(E, T) {
      return E == null ? r : E[T];
    }
    function Qi(E) {
      return dn.test(E);
    }
    function Ef(E) {
      return Pi.test(E);
    }
    function xf(E) {
      for (var T, P = []; !(T = E.next()).done; )
        P.push(T.value);
      return P;
    }
    function Ka(E) {
      var T = -1, P = Array(E.size);
      return E.forEach(function(Y, ce) {
        P[++T] = [ce, Y];
      }), P;
    }
    function Rc(E, T) {
      return function(P) {
        return E(T(P));
      };
    }
    function ui(E, T) {
      for (var P = -1, Y = E.length, ce = 0, $e = []; ++P < Y; ) {
        var Dt = E[P];
        (Dt === T || Dt === F) && (E[P] = F, $e[ce++] = P);
      }
      return $e;
    }
    function mn(E) {
      var T = -1, P = Array(E.size);
      return E.forEach(function(Y) {
        P[++T] = Y;
      }), P;
    }
    function If(E) {
      var T = -1, P = Array(E.size);
      return E.forEach(function(Y) {
        P[++T] = [Y, Y];
      }), P;
    }
    function Sf(E, T, P) {
      for (var Y = P - 1, ce = E.length; ++Y < ce; )
        if (E[Y] === T)
          return Y;
      return -1;
    }
    function Pf(E, T, P) {
      for (var Y = P + 1; Y--; )
        if (E[Y] === T)
          return Y;
      return Y;
    }
    function Yi(E) {
      return Qi(E) ? Af(E) : lf(E);
    }
    function Cr(E) {
      return Qi(E) ? Of(E) : ff(E);
    }
    function Tc(E) {
      for (var T = E.length; T-- && wt.test(E.charAt(T)); )
        ;
      return T;
    }
    var Cf = za(q);
    function Af(E) {
      for (var T = Wi.lastIndex = 0; Wi.test(E); )
        ++T;
      return T;
    }
    function Of(E) {
      return E.match(Wi) || [];
    }
    function Rf(E) {
      return E.match(pn) || [];
    }
    var Tf = function E(T) {
      T = T == null ? Pe : Zi.defaults(Pe.Object(), T, Zi.pick(Pe, gn));
      var P = T.Array, Y = T.Date, ce = T.Error, $e = T.Function, Dt = T.Math, Ge = T.Object, Va = T.RegExp, Nf = T.String, mr = T.TypeError, wn = P.prototype, Ff = $e.prototype, Xi = Ge.prototype, _n = T["__core-js_shared__"], bn = Ff.toString, Me = Xi.hasOwnProperty, $f = 0, Nc = function() {
        var e = /[^.]+$/.exec(_n && _n.keys && _n.keys.IE_PROTO || "");
        return e ? "Symbol(src)_1." + e : "";
      }(), En = Xi.toString, Df = bn.call(Ge), qf = Pe._, Lf = Va("^" + bn.call(Me).replace(dt, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"), xn = rr ? T.Buffer : r, hi = T.Symbol, In = T.Uint8Array, Fc = xn ? xn.allocUnsafe : r, Sn = Rc(Ge.getPrototypeOf, Ge), $c = Ge.create, Dc = Xi.propertyIsEnumerable, Pn = wn.splice, qc = hi ? hi.isConcatSpreadable : r, ws = hi ? hi.iterator : r, Ai = hi ? hi.toStringTag : r, Cn = function() {
        try {
          var e = Fi(Ge, "defineProperty");
          return e({}, "", {}), e;
        } catch {
        }
      }(), Mf = T.clearTimeout !== Pe.clearTimeout && T.clearTimeout, jf = Y && Y.now !== Pe.Date.now && Y.now, zf = T.setTimeout !== Pe.setTimeout && T.setTimeout, An = Dt.ceil, On = Dt.floor, Ba = Ge.getOwnPropertySymbols, Uf = xn ? xn.isBuffer : r, Lc = T.isFinite, Hf = wn.join, kf = Rc(Ge.keys, Ge), qt = Dt.max, Kt = Dt.min, Kf = Y.now, Vf = T.parseInt, Mc = Dt.random, Bf = wn.reverse, Ga = Fi(T, "DataView"), _s = Fi(T, "Map"), Wa = Fi(T, "Promise"), es = Fi(T, "Set"), bs = Fi(T, "WeakMap"), Es = Fi(Ge, "create"), Rn = bs && new bs(), ts = {}, Gf = $i(Ga), Wf = $i(_s), Jf = $i(Wa), Qf = $i(es), Yf = $i(bs), Tn = hi ? hi.prototype : r, xs = Tn ? Tn.valueOf : r, jc = Tn ? Tn.toString : r;
      function f(e) {
        if (yt(e) && !fe(e) && !(e instanceof Se)) {
          if (e instanceof wr)
            return e;
          if (Me.call(e, "__wrapped__"))
            return zu(e);
        }
        return new wr(e);
      }
      var rs = function() {
        function e() {
        }
        return function(t) {
          if (!ct(t))
            return {};
          if ($c)
            return $c(t);
          e.prototype = t;
          var s = new e();
          return e.prototype = r, s;
        };
      }();
      function Nn() {
      }
      function wr(e, t) {
        this.__wrapped__ = e, this.__actions__ = [], this.__chain__ = !!t, this.__index__ = 0, this.__values__ = r;
      }
      f.templateSettings = { escape: ft, evaluate: pt, interpolate: ot, variable: "", imports: { _: f } }, f.prototype = Nn.prototype, f.prototype.constructor = f, wr.prototype = rs(Nn.prototype), wr.prototype.constructor = wr;
      function Se(e) {
        this.__wrapped__ = e, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = V, this.__views__ = [];
      }
      function Zf() {
        var e = new Se(this.__wrapped__);
        return e.__actions__ = ir(this.__actions__), e.__dir__ = this.__dir__, e.__filtered__ = this.__filtered__, e.__iteratees__ = ir(this.__iteratees__), e.__takeCount__ = this.__takeCount__, e.__views__ = ir(this.__views__), e;
      }
      function Xf() {
        if (this.__filtered__) {
          var e = new Se(this);
          e.__dir__ = -1, e.__filtered__ = !0;
        } else
          e = this.clone(), e.__dir__ *= -1;
        return e;
      }
      function ep() {
        var e = this.__wrapped__.value(), t = this.__dir__, s = fe(e), o = t < 0, u = s ? e.length : 0, p = fd(0, u, this.__views__), y = p.start, m = p.end, x = m - y, N = o ? m : y - 1, $ = this.__iteratees__, L = $.length, B = 0, ee = Kt(x, this.__takeCount__);
        if (!s || !o && u == x && ee == x)
          return uu(e, this.__actions__);
        var se = [];
        e:
          for (; x-- && B < ee; ) {
            N += t;
            for (var me = -1, ne = e[N]; ++me < L; ) {
              var xe = $[me], Ce = xe.iteratee, pr = xe.type, Zt = Ce(ne);
              if (pr == D)
                ne = Zt;
              else if (!Zt) {
                if (pr == C)
                  continue e;
                break e;
              }
            }
            se[B++] = ne;
          }
        return se;
      }
      Se.prototype = rs(Nn.prototype), Se.prototype.constructor = Se;
      function Oi(e) {
        var t = -1, s = e == null ? 0 : e.length;
        for (this.clear(); ++t < s; ) {
          var o = e[t];
          this.set(o[0], o[1]);
        }
      }
      function tp() {
        this.__data__ = Es ? Es(null) : {}, this.size = 0;
      }
      function rp(e) {
        var t = this.has(e) && delete this.__data__[e];
        return this.size -= t ? 1 : 0, t;
      }
      function ip(e) {
        var t = this.__data__;
        if (Es) {
          var s = t[e];
          return s === w ? r : s;
        }
        return Me.call(t, e) ? t[e] : r;
      }
      function sp(e) {
        var t = this.__data__;
        return Es ? t[e] !== r : Me.call(t, e);
      }
      function np(e, t) {
        var s = this.__data__;
        return this.size += this.has(e) ? 0 : 1, s[e] = Es && t === r ? w : t, this;
      }
      Oi.prototype.clear = tp, Oi.prototype.delete = rp, Oi.prototype.get = ip, Oi.prototype.has = sp, Oi.prototype.set = np;
      function Vr(e) {
        var t = -1, s = e == null ? 0 : e.length;
        for (this.clear(); ++t < s; ) {
          var o = e[t];
          this.set(o[0], o[1]);
        }
      }
      function ap() {
        this.__data__ = [], this.size = 0;
      }
      function op(e) {
        var t = this.__data__, s = Fn(t, e);
        if (s < 0)
          return !1;
        var o = t.length - 1;
        return s == o ? t.pop() : Pn.call(t, s, 1), --this.size, !0;
      }
      function cp(e) {
        var t = this.__data__, s = Fn(t, e);
        return s < 0 ? r : t[s][1];
      }
      function up(e) {
        return Fn(this.__data__, e) > -1;
      }
      function hp(e, t) {
        var s = this.__data__, o = Fn(s, e);
        return o < 0 ? (++this.size, s.push([e, t])) : s[o][1] = t, this;
      }
      Vr.prototype.clear = ap, Vr.prototype.delete = op, Vr.prototype.get = cp, Vr.prototype.has = up, Vr.prototype.set = hp;
      function Br(e) {
        var t = -1, s = e == null ? 0 : e.length;
        for (this.clear(); ++t < s; ) {
          var o = e[t];
          this.set(o[0], o[1]);
        }
      }
      function lp() {
        this.size = 0, this.__data__ = { hash: new Oi(), map: new (_s || Vr)(), string: new Oi() };
      }
      function fp(e) {
        var t = Vn(this, e).delete(e);
        return this.size -= t ? 1 : 0, t;
      }
      function pp(e) {
        return Vn(this, e).get(e);
      }
      function dp(e) {
        return Vn(this, e).has(e);
      }
      function gp(e, t) {
        var s = Vn(this, e), o = s.size;
        return s.set(e, t), this.size += s.size == o ? 0 : 1, this;
      }
      Br.prototype.clear = lp, Br.prototype.delete = fp, Br.prototype.get = pp, Br.prototype.has = dp, Br.prototype.set = gp;
      function Ri(e) {
        var t = -1, s = e == null ? 0 : e.length;
        for (this.__data__ = new Br(); ++t < s; )
          this.add(e[t]);
      }
      function vp(e) {
        return this.__data__.set(e, w), this;
      }
      function yp(e) {
        return this.__data__.has(e);
      }
      Ri.prototype.add = Ri.prototype.push = vp, Ri.prototype.has = yp;
      function Ar(e) {
        var t = this.__data__ = new Vr(e);
        this.size = t.size;
      }
      function mp() {
        this.__data__ = new Vr(), this.size = 0;
      }
      function wp(e) {
        var t = this.__data__, s = t.delete(e);
        return this.size = t.size, s;
      }
      function _p(e) {
        return this.__data__.get(e);
      }
      function bp(e) {
        return this.__data__.has(e);
      }
      function Ep(e, t) {
        var s = this.__data__;
        if (s instanceof Vr) {
          var o = s.__data__;
          if (!_s || o.length < a - 1)
            return o.push([e, t]), this.size = ++s.size, this;
          s = this.__data__ = new Br(o);
        }
        return s.set(e, t), this.size = s.size, this;
      }
      Ar.prototype.clear = mp, Ar.prototype.delete = wp, Ar.prototype.get = _p, Ar.prototype.has = bp, Ar.prototype.set = Ep;
      function zc(e, t) {
        var s = fe(e), o = !s && Di(e), u = !s && !o && gi(e), p = !s && !o && !u && as(e), y = s || o || u || p, m = y ? Ha(e.length, Nf) : [], x = m.length;
        for (var N in e)
          (t || Me.call(e, N)) && !(y && (N == "length" || u && (N == "offset" || N == "parent") || p && (N == "buffer" || N == "byteLength" || N == "byteOffset") || Qr(N, x))) && m.push(N);
        return m;
      }
      function Uc(e) {
        var t = e.length;
        return t ? e[no(0, t - 1)] : r;
      }
      function xp(e, t) {
        return Bn(ir(e), Ti(t, 0, e.length));
      }
      function Ip(e) {
        return Bn(ir(e));
      }
      function Ja(e, t, s) {
        (s !== r && !Or(e[t], s) || s === r && !(t in e)) && Gr(e, t, s);
      }
      function Is(e, t, s) {
        var o = e[t];
        (!(Me.call(e, t) && Or(o, s)) || s === r && !(t in e)) && Gr(e, t, s);
      }
      function Fn(e, t) {
        for (var s = e.length; s--; )
          if (Or(e[s][0], t))
            return s;
        return -1;
      }
      function Sp(e, t, s, o) {
        return li(e, function(u, p, y) {
          t(o, u, s(u), y);
        }), o;
      }
      function Hc(e, t) {
        return e && Mr(t, jt(t), e);
      }
      function Pp(e, t) {
        return e && Mr(t, nr(t), e);
      }
      function Gr(e, t, s) {
        t == "__proto__" && Cn ? Cn(e, t, { configurable: !0, enumerable: !0, value: s, writable: !0 }) : e[t] = s;
      }
      function Qa(e, t) {
        for (var s = -1, o = t.length, u = P(o), p = e == null; ++s < o; )
          u[s] = p ? r : To(e, t[s]);
        return u;
      }
      function Ti(e, t, s) {
        return e === e && (s !== r && (e = e <= s ? e : s), t !== r && (e = e >= t ? e : t)), e;
      }
      function _r(e, t, s, o, u, p) {
        var y, m = t & U, x = t & H, N = t & k;
        if (s && (y = u ? s(e, o, u, p) : s(e)), y !== r)
          return y;
        if (!ct(e))
          return e;
        var $ = fe(e);
        if ($) {
          if (y = dd(e), !m)
            return ir(e, y);
        } else {
          var L = Vt(e), B = L == X || L == oe;
          if (gi(e))
            return fu(e, m);
          if (L == Ie || L == we || B && !u) {
            if (y = x || B ? {} : Tu(e), !m)
              return x ? id(e, Pp(y, e)) : rd(e, Hc(y, e));
          } else {
            if (!Ue[L])
              return u ? e : {};
            y = gd(e, L, m);
          }
        }
        p || (p = new Ar());
        var ee = p.get(e);
        if (ee)
          return ee;
        p.set(e, y), ah(e) ? e.forEach(function(ne) {
          y.add(_r(ne, t, s, ne, e, p));
        }) : sh(e) && e.forEach(function(ne, xe) {
          y.set(xe, _r(ne, t, s, xe, e, p));
        });
        var se = N ? x ? yo : vo : x ? nr : jt, me = $ ? r : se(e);
        return yr(me || e, function(ne, xe) {
          me && (xe = ne, ne = e[xe]), Is(y, xe, _r(ne, t, s, xe, e, p));
        }), y;
      }
      function Cp(e) {
        var t = jt(e);
        return function(s) {
          return kc(s, e, t);
        };
      }
      function kc(e, t, s) {
        var o = s.length;
        if (e == null)
          return !o;
        for (e = Ge(e); o--; ) {
          var u = s[o], p = t[u], y = e[u];
          if (y === r && !(u in e) || !p(y))
            return !1;
        }
        return !0;
      }
      function Kc(e, t, s) {
        if (typeof e != "function")
          throw new mr(d);
        return Ts(function() {
          e.apply(r, s);
        }, t);
      }
      function Ss(e, t, s, o) {
        var u = -1, p = vn, y = !0, m = e.length, x = [], N = t.length;
        if (!m)
          return x;
        s && (t = it(t, hr(s))), o ? (p = qa, y = !1) : t.length >= a && (p = ms, y = !1, t = new Ri(t));
        e:
          for (; ++u < m; ) {
            var $ = e[u], L = s == null ? $ : s($);
            if ($ = o || $ !== 0 ? $ : 0, y && L === L) {
              for (var B = N; B--; )
                if (t[B] === L)
                  continue e;
              x.push($);
            } else
              p(t, L, o) || x.push($);
          }
        return x;
      }
      var li = yu(Lr), Vc = yu(Za, !0);
      function Ap(e, t) {
        var s = !0;
        return li(e, function(o, u, p) {
          return s = !!t(o, u, p), s;
        }), s;
      }
      function $n(e, t, s) {
        for (var o = -1, u = e.length; ++o < u; ) {
          var p = e[o], y = t(p);
          if (y != null && (m === r ? y === y && !fr(y) : s(y, m)))
            var m = y, x = p;
        }
        return x;
      }
      function Op(e, t, s, o) {
        var u = e.length;
        for (s = ve(s), s < 0 && (s = -s > u ? 0 : u + s), o = o === r || o > u ? u : ve(o), o < 0 && (o += u), o = s > o ? 0 : ch(o); s < o; )
          e[s++] = t;
        return e;
      }
      function Bc(e, t) {
        var s = [];
        return li(e, function(o, u, p) {
          t(o, u, p) && s.push(o);
        }), s;
      }
      function Ht(e, t, s, o, u) {
        var p = -1, y = e.length;
        for (s || (s = yd), u || (u = []); ++p < y; ) {
          var m = e[p];
          t > 0 && s(m) ? t > 1 ? Ht(m, t - 1, s, o, u) : ci(u, m) : o || (u[u.length] = m);
        }
        return u;
      }
      var Ya = mu(), Gc = mu(!0);
      function Lr(e, t) {
        return e && Ya(e, t, jt);
      }
      function Za(e, t) {
        return e && Gc(e, t, jt);
      }
      function Dn(e, t) {
        return oi(t, function(s) {
          return Yr(e[s]);
        });
      }
      function Ni(e, t) {
        t = pi(t, e);
        for (var s = 0, o = t.length; e != null && s < o; )
          e = e[jr(t[s++])];
        return s && s == o ? e : r;
      }
      function Wc(e, t, s) {
        var o = t(e);
        return fe(e) ? o : ci(o, s(e));
      }
      function Qt(e) {
        return e == null ? e === r ? at : Fe : Ai && Ai in Ge(e) ? ld(e) : Id(e);
      }
      function Xa(e, t) {
        return e > t;
      }
      function Rp(e, t) {
        return e != null && Me.call(e, t);
      }
      function Tp(e, t) {
        return e != null && t in Ge(e);
      }
      function Np(e, t, s) {
        return e >= Kt(t, s) && e < qt(t, s);
      }
      function eo(e, t, s) {
        for (var o = s ? qa : vn, u = e[0].length, p = e.length, y = p, m = P(p), x = 1 / 0, N = []; y--; ) {
          var $ = e[y];
          y && t && ($ = it($, hr(t))), x = Kt($.length, x), m[y] = !s && (t || u >= 120 && $.length >= 120) ? new Ri(y && $) : r;
        }
        $ = e[0];
        var L = -1, B = m[0];
        e:
          for (; ++L < u && N.length < x; ) {
            var ee = $[L], se = t ? t(ee) : ee;
            if (ee = s || ee !== 0 ? ee : 0, !(B ? ms(B, se) : o(N, se, s))) {
              for (y = p; --y; ) {
                var me = m[y];
                if (!(me ? ms(me, se) : o(e[y], se, s)))
                  continue e;
              }
              B && B.push(se), N.push(ee);
            }
          }
        return N;
      }
      function Fp(e, t, s, o) {
        return Lr(e, function(u, p, y) {
          t(o, s(u), p, y);
        }), o;
      }
      function Ps(e, t, s) {
        t = pi(t, e), e = Du(e, t);
        var o = e == null ? e : e[jr(Er(t))];
        return o == null ? r : Mt(o, e, s);
      }
      function Jc(e) {
        return yt(e) && Qt(e) == we;
      }
      function $p(e) {
        return yt(e) && Qt(e) == Ne;
      }
      function Dp(e) {
        return yt(e) && Qt(e) == S;
      }
      function Cs(e, t, s, o, u) {
        return e === t ? !0 : e == null || t == null || !yt(e) && !yt(t) ? e !== e && t !== t : qp(e, t, s, o, Cs, u);
      }
      function qp(e, t, s, o, u, p) {
        var y = fe(e), m = fe(t), x = y ? xt : Vt(e), N = m ? xt : Vt(t);
        x = x == we ? Ie : x, N = N == we ? Ie : N;
        var $ = x == Ie, L = N == Ie, B = x == N;
        if (B && gi(e)) {
          if (!gi(t))
            return !1;
          y = !0, $ = !1;
        }
        if (B && !$)
          return p || (p = new Ar()), y || as(e) ? Au(e, t, s, o, u, p) : ud(e, t, x, s, o, u, p);
        if (!(s & z)) {
          var ee = $ && Me.call(e, "__wrapped__"), se = L && Me.call(t, "__wrapped__");
          if (ee || se) {
            var me = ee ? e.value() : e, ne = se ? t.value() : t;
            return p || (p = new Ar()), u(me, ne, s, o, p);
          }
        }
        return B ? (p || (p = new Ar()), hd(e, t, s, o, u, p)) : !1;
      }
      function Lp(e) {
        return yt(e) && Vt(e) == ye;
      }
      function to(e, t, s, o) {
        var u = s.length, p = u, y = !o;
        if (e == null)
          return !p;
        for (e = Ge(e); u--; ) {
          var m = s[u];
          if (y && m[2] ? m[1] !== e[m[0]] : !(m[0] in e))
            return !1;
        }
        for (; ++u < p; ) {
          m = s[u];
          var x = m[0], N = e[x], $ = m[1];
          if (y && m[2]) {
            if (N === r && !(x in e))
              return !1;
          } else {
            var L = new Ar();
            if (o)
              var B = o(N, $, x, e, t, L);
            if (!(B === r ? Cs($, N, z | G, o, L) : B))
              return !1;
          }
        }
        return !0;
      }
      function Qc(e) {
        if (!ct(e) || wd(e))
          return !1;
        var t = Yr(e) ? Lf : _a;
        return t.test($i(e));
      }
      function Mp(e) {
        return yt(e) && Qt(e) == nt;
      }
      function jp(e) {
        return yt(e) && Vt(e) == De;
      }
      function zp(e) {
        return yt(e) && Zn(e.length) && !!Ke[Qt(e)];
      }
      function Yc(e) {
        return typeof e == "function" ? e : e == null ? ar : typeof e == "object" ? fe(e) ? eu(e[0], e[1]) : Xc(e) : wh(e);
      }
      function ro(e) {
        if (!Rs(e))
          return kf(e);
        var t = [];
        for (var s in Ge(e))
          Me.call(e, s) && s != "constructor" && t.push(s);
        return t;
      }
      function Up(e) {
        if (!ct(e))
          return xd(e);
        var t = Rs(e), s = [];
        for (var o in e)
          o == "constructor" && (t || !Me.call(e, o)) || s.push(o);
        return s;
      }
      function io(e, t) {
        return e < t;
      }
      function Zc(e, t) {
        var s = -1, o = sr(e) ? P(e.length) : [];
        return li(e, function(u, p, y) {
          o[++s] = t(u, p, y);
        }), o;
      }
      function Xc(e) {
        var t = wo(e);
        return t.length == 1 && t[0][2] ? Fu(t[0][0], t[0][1]) : function(s) {
          return s === e || to(s, e, t);
        };
      }
      function eu(e, t) {
        return bo(e) && Nu(t) ? Fu(jr(e), t) : function(s) {
          var o = To(s, e);
          return o === r && o === t ? No(s, e) : Cs(t, o, z | G);
        };
      }
      function qn(e, t, s, o, u) {
        e !== t && Ya(t, function(p, y) {
          if (u || (u = new Ar()), ct(p))
            Hp(e, t, y, s, qn, o, u);
          else {
            var m = o ? o(xo(e, y), p, y + "", e, t, u) : r;
            m === r && (m = p), Ja(e, y, m);
          }
        }, nr);
      }
      function Hp(e, t, s, o, u, p, y) {
        var m = xo(e, s), x = xo(t, s), N = y.get(x);
        if (N) {
          Ja(e, s, N);
          return;
        }
        var $ = p ? p(m, x, s + "", e, t, y) : r, L = $ === r;
        if (L) {
          var B = fe(x), ee = !B && gi(x), se = !B && !ee && as(x);
          $ = x, B || ee || se ? fe(m) ? $ = m : bt(m) ? $ = ir(m) : ee ? (L = !1, $ = fu(x, !0)) : se ? (L = !1, $ = pu(x, !0)) : $ = [] : Ns(x) || Di(x) ? ($ = m, Di(m) ? $ = uh(m) : (!ct(m) || Yr(m)) && ($ = Tu(x))) : L = !1;
        }
        L && (y.set(x, $), u($, x, o, p, y), y.delete(x)), Ja(e, s, $);
      }
      function tu(e, t) {
        var s = e.length;
        if (s)
          return t += t < 0 ? s : 0, Qr(t, s) ? e[t] : r;
      }
      function ru(e, t, s) {
        t.length ? t = it(t, function(p) {
          return fe(p) ? function(y) {
            return Ni(y, p.length === 1 ? p[0] : p);
          } : p;
        }) : t = [ar];
        var o = -1;
        t = it(t, hr(ie()));
        var u = Zc(e, function(p, y, m) {
          var x = it(t, function(N) {
            return N(p);
          });
          return { criteria: x, index: ++o, value: p };
        });
        return gf(u, function(p, y) {
          return td(p, y, s);
        });
      }
      function kp(e, t) {
        return iu(e, t, function(s, o) {
          return No(e, o);
        });
      }
      function iu(e, t, s) {
        for (var o = -1, u = t.length, p = {}; ++o < u; ) {
          var y = t[o], m = Ni(e, y);
          s(m, y) && As(p, pi(y, e), m);
        }
        return p;
      }
      function Kp(e) {
        return function(t) {
          return Ni(t, e);
        };
      }
      function so(e, t, s, o) {
        var u = o ? df : Ji, p = -1, y = t.length, m = e;
        for (e === t && (t = ir(t)), s && (m = it(e, hr(s))); ++p < y; )
          for (var x = 0, N = t[p], $ = s ? s(N) : N; (x = u(m, $, x, o)) > -1; )
            m !== e && Pn.call(m, x, 1), Pn.call(e, x, 1);
        return e;
      }
      function su(e, t) {
        for (var s = e ? t.length : 0, o = s - 1; s--; ) {
          var u = t[s];
          if (s == o || u !== p) {
            var p = u;
            Qr(u) ? Pn.call(e, u, 1) : co(e, u);
          }
        }
        return e;
      }
      function no(e, t) {
        return e + On(Mc() * (t - e + 1));
      }
      function Vp(e, t, s, o) {
        for (var u = -1, p = qt(An((t - e) / (s || 1)), 0), y = P(p); p--; )
          y[o ? p : ++u] = e, e += s;
        return y;
      }
      function ao(e, t) {
        var s = "";
        if (!e || t < 1 || t > J)
          return s;
        do
          t % 2 && (s += e), t = On(t / 2), t && (e += e);
        while (t);
        return s;
      }
      function _e(e, t) {
        return Io($u(e, t, ar), e + "");
      }
      function Bp(e) {
        return Uc(os(e));
      }
      function Gp(e, t) {
        var s = os(e);
        return Bn(s, Ti(t, 0, s.length));
      }
      function As(e, t, s, o) {
        if (!ct(e))
          return e;
        t = pi(t, e);
        for (var u = -1, p = t.length, y = p - 1, m = e; m != null && ++u < p; ) {
          var x = jr(t[u]), N = s;
          if (x === "__proto__" || x === "constructor" || x === "prototype")
            return e;
          if (u != y) {
            var $ = m[x];
            N = o ? o($, x, m) : r, N === r && (N = ct($) ? $ : Qr(t[u + 1]) ? [] : {});
          }
          Is(m, x, N), m = m[x];
        }
        return e;
      }
      var nu = Rn ? function(e, t) {
        return Rn.set(e, t), e;
      } : ar, Wp = Cn ? function(e, t) {
        return Cn(e, "toString", { configurable: !0, enumerable: !1, value: $o(t), writable: !0 });
      } : ar;
      function Jp(e) {
        return Bn(os(e));
      }
      function br(e, t, s) {
        var o = -1, u = e.length;
        t < 0 && (t = -t > u ? 0 : u + t), s = s > u ? u : s, s < 0 && (s += u), u = t > s ? 0 : s - t >>> 0, t >>>= 0;
        for (var p = P(u); ++o < u; )
          p[o] = e[o + t];
        return p;
      }
      function Qp(e, t) {
        var s;
        return li(e, function(o, u, p) {
          return s = t(o, u, p), !s;
        }), !!s;
      }
      function Ln(e, t, s) {
        var o = 0, u = e == null ? o : e.length;
        if (typeof t == "number" && t === t && u <= He) {
          for (; o < u; ) {
            var p = o + u >>> 1, y = e[p];
            y !== null && !fr(y) && (s ? y <= t : y < t) ? o = p + 1 : u = p;
          }
          return u;
        }
        return oo(e, t, ar, s);
      }
      function oo(e, t, s, o) {
        var u = 0, p = e == null ? 0 : e.length;
        if (p === 0)
          return 0;
        t = s(t);
        for (var y = t !== t, m = t === null, x = fr(t), N = t === r; u < p; ) {
          var $ = On((u + p) / 2), L = s(e[$]), B = L !== r, ee = L === null, se = L === L, me = fr(L);
          if (y)
            var ne = o || se;
          else
            N ? ne = se && (o || B) : m ? ne = se && B && (o || !ee) : x ? ne = se && B && !ee && (o || !me) : ee || me ? ne = !1 : ne = o ? L <= t : L < t;
          ne ? u = $ + 1 : p = $;
        }
        return Kt(p, ut);
      }
      function au(e, t) {
        for (var s = -1, o = e.length, u = 0, p = []; ++s < o; ) {
          var y = e[s], m = t ? t(y) : y;
          if (!s || !Or(m, x)) {
            var x = m;
            p[u++] = y === 0 ? 0 : y;
          }
        }
        return p;
      }
      function ou(e) {
        return typeof e == "number" ? e : fr(e) ? j : +e;
      }
      function lr(e) {
        if (typeof e == "string")
          return e;
        if (fe(e))
          return it(e, lr) + "";
        if (fr(e))
          return jc ? jc.call(e) : "";
        var t = e + "";
        return t == "0" && 1 / e == -Re ? "-0" : t;
      }
      function fi(e, t, s) {
        var o = -1, u = vn, p = e.length, y = !0, m = [], x = m;
        if (s)
          y = !1, u = qa;
        else if (p >= a) {
          var N = t ? null : od(e);
          if (N)
            return mn(N);
          y = !1, u = ms, x = new Ri();
        } else
          x = t ? [] : m;
        e:
          for (; ++o < p; ) {
            var $ = e[o], L = t ? t($) : $;
            if ($ = s || $ !== 0 ? $ : 0, y && L === L) {
              for (var B = x.length; B--; )
                if (x[B] === L)
                  continue e;
              t && x.push(L), m.push($);
            } else
              u(x, L, s) || (x !== m && x.push(L), m.push($));
          }
        return m;
      }
      function co(e, t) {
        return t = pi(t, e), e = Du(e, t), e == null || delete e[jr(Er(t))];
      }
      function cu(e, t, s, o) {
        return As(e, t, s(Ni(e, t)), o);
      }
      function Mn(e, t, s, o) {
        for (var u = e.length, p = o ? u : -1; (o ? p-- : ++p < u) && t(e[p], p, e); )
          ;
        return s ? br(e, o ? 0 : p, o ? p + 1 : u) : br(e, o ? p + 1 : 0, o ? u : p);
      }
      function uu(e, t) {
        var s = e;
        return s instanceof Se && (s = s.value()), La(t, function(o, u) {
          return u.func.apply(u.thisArg, ci([o], u.args));
        }, s);
      }
      function uo(e, t, s) {
        var o = e.length;
        if (o < 2)
          return o ? fi(e[0]) : [];
        for (var u = -1, p = P(o); ++u < o; )
          for (var y = e[u], m = -1; ++m < o; )
            m != u && (p[u] = Ss(p[u] || y, e[m], t, s));
        return fi(Ht(p, 1), t, s);
      }
      function hu(e, t, s) {
        for (var o = -1, u = e.length, p = t.length, y = {}; ++o < u; ) {
          var m = o < p ? t[o] : r;
          s(y, e[o], m);
        }
        return y;
      }
      function ho(e) {
        return bt(e) ? e : [];
      }
      function lo(e) {
        return typeof e == "function" ? e : ar;
      }
      function pi(e, t) {
        return fe(e) ? e : bo(e, t) ? [e] : ju(qe(e));
      }
      var Yp = _e;
      function di(e, t, s) {
        var o = e.length;
        return s = s === r ? o : s, !t && s >= o ? e : br(e, t, s);
      }
      var lu = Mf || function(e) {
        return Pe.clearTimeout(e);
      };
      function fu(e, t) {
        if (t)
          return e.slice();
        var s = e.length, o = Fc ? Fc(s) : new e.constructor(s);
        return e.copy(o), o;
      }
      function fo(e) {
        var t = new e.constructor(e.byteLength);
        return new In(t).set(new In(e)), t;
      }
      function Zp(e, t) {
        var s = t ? fo(e.buffer) : e.buffer;
        return new e.constructor(s, e.byteOffset, e.byteLength);
      }
      function Xp(e) {
        var t = new e.constructor(e.source, gr.exec(e));
        return t.lastIndex = e.lastIndex, t;
      }
      function ed(e) {
        return xs ? Ge(xs.call(e)) : {};
      }
      function pu(e, t) {
        var s = t ? fo(e.buffer) : e.buffer;
        return new e.constructor(s, e.byteOffset, e.length);
      }
      function du(e, t) {
        if (e !== t) {
          var s = e !== r, o = e === null, u = e === e, p = fr(e), y = t !== r, m = t === null, x = t === t, N = fr(t);
          if (!m && !N && !p && e > t || p && y && x && !m && !N || o && y && x || !s && x || !u)
            return 1;
          if (!o && !p && !N && e < t || N && s && u && !o && !p || m && s && u || !y && u || !x)
            return -1;
        }
        return 0;
      }
      function td(e, t, s) {
        for (var o = -1, u = e.criteria, p = t.criteria, y = u.length, m = s.length; ++o < y; ) {
          var x = du(u[o], p[o]);
          if (x) {
            if (o >= m)
              return x;
            var N = s[o];
            return x * (N == "desc" ? -1 : 1);
          }
        }
        return e.index - t.index;
      }
      function gu(e, t, s, o) {
        for (var u = -1, p = e.length, y = s.length, m = -1, x = t.length, N = qt(p - y, 0), $ = P(x + N), L = !o; ++m < x; )
          $[m] = t[m];
        for (; ++u < y; )
          (L || u < p) && ($[s[u]] = e[u]);
        for (; N--; )
          $[m++] = e[u++];
        return $;
      }
      function vu(e, t, s, o) {
        for (var u = -1, p = e.length, y = -1, m = s.length, x = -1, N = t.length, $ = qt(p - m, 0), L = P($ + N), B = !o; ++u < $; )
          L[u] = e[u];
        for (var ee = u; ++x < N; )
          L[ee + x] = t[x];
        for (; ++y < m; )
          (B || u < p) && (L[ee + s[y]] = e[u++]);
        return L;
      }
      function ir(e, t) {
        var s = -1, o = e.length;
        for (t || (t = P(o)); ++s < o; )
          t[s] = e[s];
        return t;
      }
      function Mr(e, t, s, o) {
        var u = !s;
        s || (s = {});
        for (var p = -1, y = t.length; ++p < y; ) {
          var m = t[p], x = o ? o(s[m], e[m], m, s, e) : r;
          x === r && (x = e[m]), u ? Gr(s, m, x) : Is(s, m, x);
        }
        return s;
      }
      function rd(e, t) {
        return Mr(e, _o(e), t);
      }
      function id(e, t) {
        return Mr(e, Ou(e), t);
      }
      function jn(e, t) {
        return function(s, o) {
          var u = fe(s) ? cf : Sp, p = t ? t() : {};
          return u(s, e, ie(o, 2), p);
        };
      }
      function is(e) {
        return _e(function(t, s) {
          var o = -1, u = s.length, p = u > 1 ? s[u - 1] : r, y = u > 2 ? s[2] : r;
          for (p = e.length > 3 && typeof p == "function" ? (u--, p) : r, y && Yt(s[0], s[1], y) && (p = u < 3 ? r : p, u = 1), t = Ge(t); ++o < u; ) {
            var m = s[o];
            m && e(t, m, o, p);
          }
          return t;
        });
      }
      function yu(e, t) {
        return function(s, o) {
          if (s == null)
            return s;
          if (!sr(s))
            return e(s, o);
          for (var u = s.length, p = t ? u : -1, y = Ge(s); (t ? p-- : ++p < u) && o(y[p], p, y) !== !1; )
            ;
          return s;
        };
      }
      function mu(e) {
        return function(t, s, o) {
          for (var u = -1, p = Ge(t), y = o(t), m = y.length; m--; ) {
            var x = y[e ? m : ++u];
            if (s(p[x], x, p) === !1)
              break;
          }
          return t;
        };
      }
      function sd(e, t, s) {
        var o = t & ae, u = Os(e);
        function p() {
          var y = this && this !== Pe && this instanceof p ? u : e;
          return y.apply(o ? s : this, arguments);
        }
        return p;
      }
      function wu(e) {
        return function(t) {
          t = qe(t);
          var s = Qi(t) ? Cr(t) : r, o = s ? s[0] : t.charAt(0), u = s ? di(s, 1).join("") : t.slice(1);
          return o[e]() + u;
        };
      }
      function ss(e) {
        return function(t) {
          return La(yh(vh(t).replace(vs, "")), e, "");
        };
      }
      function Os(e) {
        return function() {
          var t = arguments;
          switch (t.length) {
            case 0:
              return new e();
            case 1:
              return new e(t[0]);
            case 2:
              return new e(t[0], t[1]);
            case 3:
              return new e(t[0], t[1], t[2]);
            case 4:
              return new e(t[0], t[1], t[2], t[3]);
            case 5:
              return new e(t[0], t[1], t[2], t[3], t[4]);
            case 6:
              return new e(t[0], t[1], t[2], t[3], t[4], t[5]);
            case 7:
              return new e(t[0], t[1], t[2], t[3], t[4], t[5], t[6]);
          }
          var s = rs(e.prototype), o = e.apply(s, t);
          return ct(o) ? o : s;
        };
      }
      function nd(e, t, s) {
        var o = Os(e);
        function u() {
          for (var p = arguments.length, y = P(p), m = p, x = ns(u); m--; )
            y[m] = arguments[m];
          var N = p < 3 && y[0] !== x && y[p - 1] !== x ? [] : ui(y, x);
          if (p -= N.length, p < s)
            return Iu(e, t, zn, u.placeholder, r, y, N, r, r, s - p);
          var $ = this && this !== Pe && this instanceof u ? o : e;
          return Mt($, this, y);
        }
        return u;
      }
      function _u(e) {
        return function(t, s, o) {
          var u = Ge(t);
          if (!sr(t)) {
            var p = ie(s, 3);
            t = jt(t), s = function(m) {
              return p(u[m], m, u);
            };
          }
          var y = e(t, s, o);
          return y > -1 ? u[p ? t[y] : y] : r;
        };
      }
      function bu(e) {
        return Jr(function(t) {
          var s = t.length, o = s, u = wr.prototype.thru;
          for (e && t.reverse(); o--; ) {
            var p = t[o];
            if (typeof p != "function")
              throw new mr(d);
            if (u && !y && Kn(p) == "wrapper")
              var y = new wr([], !0);
          }
          for (o = y ? o : s; ++o < s; ) {
            p = t[o];
            var m = Kn(p), x = m == "wrapper" ? mo(p) : r;
            x && Eo(x[0]) && x[1] == (M | pe | he | W) && !x[4].length && x[9] == 1 ? y = y[Kn(x[0])].apply(y, x[3]) : y = p.length == 1 && Eo(p) ? y[m]() : y.thru(p);
          }
          return function() {
            var N = arguments, $ = N[0];
            if (y && N.length == 1 && fe($))
              return y.plant($).value();
            for (var L = 0, B = s ? t[L].apply(this, N) : $; ++L < s; )
              B = t[L].call(this, B);
            return B;
          };
        });
      }
      function zn(e, t, s, o, u, p, y, m, x, N) {
        var $ = t & M, L = t & ae, B = t & be, ee = t & (pe | ue), se = t & ge, me = B ? r : Os(e);
        function ne() {
          for (var xe = arguments.length, Ce = P(xe), pr = xe; pr--; )
            Ce[pr] = arguments[pr];
          if (ee)
            var Zt = ns(ne), dr = yf(Ce, Zt);
          if (o && (Ce = gu(Ce, o, u, ee)), p && (Ce = vu(Ce, p, y, ee)), xe -= dr, ee && xe < N) {
            var Et = ui(Ce, Zt);
            return Iu(e, t, zn, ne.placeholder, s, Ce, Et, m, x, N - xe);
          }
          var Rr = L ? s : this, Xr = B ? Rr[e] : e;
          return xe = Ce.length, m ? Ce = Sd(Ce, m) : se && xe > 1 && Ce.reverse(), $ && x < xe && (Ce.length = x), this && this !== Pe && this instanceof ne && (Xr = me || Os(Xr)), Xr.apply(Rr, Ce);
        }
        return ne;
      }
      function Eu(e, t) {
        return function(s, o) {
          return Fp(s, e, t(o), {});
        };
      }
      function Un(e, t) {
        return function(s, o) {
          var u;
          if (s === r && o === r)
            return t;
          if (s !== r && (u = s), o !== r) {
            if (u === r)
              return o;
            typeof s == "string" || typeof o == "string" ? (s = lr(s), o = lr(o)) : (s = ou(s), o = ou(o)), u = e(s, o);
          }
          return u;
        };
      }
      function po(e) {
        return Jr(function(t) {
          return t = it(t, hr(ie())), _e(function(s) {
            var o = this;
            return e(t, function(u) {
              return Mt(u, o, s);
            });
          });
        });
      }
      function Hn(e, t) {
        t = t === r ? " " : lr(t);
        var s = t.length;
        if (s < 2)
          return s ? ao(t, e) : t;
        var o = ao(t, An(e / Yi(t)));
        return Qi(t) ? di(Cr(o), 0, e).join("") : o.slice(0, e);
      }
      function ad(e, t, s, o) {
        var u = t & ae, p = Os(e);
        function y() {
          for (var m = -1, x = arguments.length, N = -1, $ = o.length, L = P($ + x), B = this && this !== Pe && this instanceof y ? p : e; ++N < $; )
            L[N] = o[N];
          for (; x--; )
            L[N++] = arguments[++m];
          return Mt(B, u ? s : this, L);
        }
        return y;
      }
      function xu(e) {
        return function(t, s, o) {
          return o && typeof o != "number" && Yt(t, s, o) && (s = o = r), t = Zr(t), s === r ? (s = t, t = 0) : s = Zr(s), o = o === r ? t < s ? 1 : -1 : Zr(o), Vp(t, s, o, e);
        };
      }
      function kn(e) {
        return function(t, s) {
          return typeof t == "string" && typeof s == "string" || (t = xr(t), s = xr(s)), e(t, s);
        };
      }
      function Iu(e, t, s, o, u, p, y, m, x, N) {
        var $ = t & pe, L = $ ? y : r, B = $ ? r : y, ee = $ ? p : r, se = $ ? r : p;
        t |= $ ? he : R, t &= ~($ ? R : he), t & de || (t &= ~(ae | be));
        var me = [e, t, u, ee, L, se, B, m, x, N], ne = s.apply(r, me);
        return Eo(e) && qu(ne, me), ne.placeholder = o, Lu(ne, e, t);
      }
      function go(e) {
        var t = Dt[e];
        return function(s, o) {
          if (s = xr(s), o = o == null ? 0 : Kt(ve(o), 292), o && Lc(s)) {
            var u = (qe(s) + "e").split("e"), p = t(u[0] + "e" + (+u[1] + o));
            return u = (qe(p) + "e").split("e"), +(u[0] + "e" + (+u[1] - o));
          }
          return t(s);
        };
      }
      var od = es && 1 / mn(new es([, -0]))[1] == Re ? function(e) {
        return new es(e);
      } : Lo;
      function Su(e) {
        return function(t) {
          var s = Vt(t);
          return s == ye ? Ka(t) : s == De ? If(t) : vf(t, e(t));
        };
      }
      function Wr(e, t, s, o, u, p, y, m) {
        var x = t & be;
        if (!x && typeof e != "function")
          throw new mr(d);
        var N = o ? o.length : 0;
        if (N || (t &= ~(he | R), o = u = r), y = y === r ? y : qt(ve(y), 0), m = m === r ? m : ve(m), N -= u ? u.length : 0, t & R) {
          var $ = o, L = u;
          o = u = r;
        }
        var B = x ? r : mo(e), ee = [e, t, s, o, u, $, L, p, y, m];
        if (B && Ed(ee, B), e = ee[0], t = ee[1], s = ee[2], o = ee[3], u = ee[4], m = ee[9] = ee[9] === r ? x ? 0 : e.length : qt(ee[9] - N, 0), !m && t & (pe | ue) && (t &= ~(pe | ue)), !t || t == ae)
          var se = sd(e, t, s);
        else
          t == pe || t == ue ? se = nd(e, t, m) : (t == he || t == (ae | he)) && !u.length ? se = ad(e, t, s, o) : se = zn.apply(r, ee);
        var me = B ? nu : qu;
        return Lu(me(se, ee), e, t);
      }
      function Pu(e, t, s, o) {
        return e === r || Or(e, Xi[s]) && !Me.call(o, s) ? t : e;
      }
      function Cu(e, t, s, o, u, p) {
        return ct(e) && ct(t) && (p.set(t, e), qn(e, t, r, Cu, p), p.delete(t)), e;
      }
      function cd(e) {
        return Ns(e) ? r : e;
      }
      function Au(e, t, s, o, u, p) {
        var y = s & z, m = e.length, x = t.length;
        if (m != x && !(y && x > m))
          return !1;
        var N = p.get(e), $ = p.get(t);
        if (N && $)
          return N == t && $ == e;
        var L = -1, B = !0, ee = s & G ? new Ri() : r;
        for (p.set(e, t), p.set(t, e); ++L < m; ) {
          var se = e[L], me = t[L];
          if (o)
            var ne = y ? o(me, se, L, t, e, p) : o(se, me, L, e, t, p);
          if (ne !== r) {
            if (ne)
              continue;
            B = !1;
            break;
          }
          if (ee) {
            if (!Ma(t, function(xe, Ce) {
              if (!ms(ee, Ce) && (se === xe || u(se, xe, s, o, p)))
                return ee.push(Ce);
            })) {
              B = !1;
              break;
            }
          } else if (!(se === me || u(se, me, s, o, p))) {
            B = !1;
            break;
          }
        }
        return p.delete(e), p.delete(t), B;
      }
      function ud(e, t, s, o, u, p, y) {
        switch (s) {
          case ke:
            if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
              return !1;
            e = e.buffer, t = t.buffer;
          case Ne:
            return !(e.byteLength != t.byteLength || !p(new In(e), new In(t)));
          case A:
          case S:
          case Te:
            return Or(+e, +t);
          case _:
            return e.name == t.name && e.message == t.message;
          case nt:
          case Je:
            return e == t + "";
          case ye:
            var m = Ka;
          case De:
            var x = o & z;
            if (m || (m = mn), e.size != t.size && !x)
              return !1;
            var N = y.get(e);
            if (N)
              return N == t;
            o |= G, y.set(e, t);
            var $ = Au(m(e), m(t), o, u, p, y);
            return y.delete(e), $;
          case Qe:
            if (xs)
              return xs.call(e) == xs.call(t);
        }
        return !1;
      }
      function hd(e, t, s, o, u, p) {
        var y = s & z, m = vo(e), x = m.length, N = vo(t), $ = N.length;
        if (x != $ && !y)
          return !1;
        for (var L = x; L--; ) {
          var B = m[L];
          if (!(y ? B in t : Me.call(t, B)))
            return !1;
        }
        var ee = p.get(e), se = p.get(t);
        if (ee && se)
          return ee == t && se == e;
        var me = !0;
        p.set(e, t), p.set(t, e);
        for (var ne = y; ++L < x; ) {
          B = m[L];
          var xe = e[B], Ce = t[B];
          if (o)
            var pr = y ? o(Ce, xe, B, t, e, p) : o(xe, Ce, B, e, t, p);
          if (!(pr === r ? xe === Ce || u(xe, Ce, s, o, p) : pr)) {
            me = !1;
            break;
          }
          ne || (ne = B == "constructor");
        }
        if (me && !ne) {
          var Zt = e.constructor, dr = t.constructor;
          Zt != dr && "constructor" in e && "constructor" in t && !(typeof Zt == "function" && Zt instanceof Zt && typeof dr == "function" && dr instanceof dr) && (me = !1);
        }
        return p.delete(e), p.delete(t), me;
      }
      function Jr(e) {
        return Io($u(e, r, ku), e + "");
      }
      function vo(e) {
        return Wc(e, jt, _o);
      }
      function yo(e) {
        return Wc(e, nr, Ou);
      }
      var mo = Rn ? function(e) {
        return Rn.get(e);
      } : Lo;
      function Kn(e) {
        for (var t = e.name + "", s = ts[t], o = Me.call(ts, t) ? s.length : 0; o--; ) {
          var u = s[o], p = u.func;
          if (p == null || p == e)
            return u.name;
        }
        return t;
      }
      function ns(e) {
        var t = Me.call(f, "placeholder") ? f : e;
        return t.placeholder;
      }
      function ie() {
        var e = f.iteratee || Do;
        return e = e === Do ? Yc : e, arguments.length ? e(arguments[0], arguments[1]) : e;
      }
      function Vn(e, t) {
        var s = e.__data__;
        return md(t) ? s[typeof t == "string" ? "string" : "hash"] : s.map;
      }
      function wo(e) {
        for (var t = jt(e), s = t.length; s--; ) {
          var o = t[s], u = e[o];
          t[s] = [o, u, Nu(u)];
        }
        return t;
      }
      function Fi(e, t) {
        var s = bf(e, t);
        return Qc(s) ? s : r;
      }
      function ld(e) {
        var t = Me.call(e, Ai), s = e[Ai];
        try {
          e[Ai] = r;
          var o = !0;
        } catch {
        }
        var u = En.call(e);
        return o && (t ? e[Ai] = s : delete e[Ai]), u;
      }
      var _o = Ba ? function(e) {
        return e == null ? [] : (e = Ge(e), oi(Ba(e), function(t) {
          return Dc.call(e, t);
        }));
      } : Mo, Ou = Ba ? function(e) {
        for (var t = []; e; )
          ci(t, _o(e)), e = Sn(e);
        return t;
      } : Mo, Vt = Qt;
      (Ga && Vt(new Ga(new ArrayBuffer(1))) != ke || _s && Vt(new _s()) != ye || Wa && Vt(Wa.resolve()) != It || es && Vt(new es()) != De || bs && Vt(new bs()) != ze) && (Vt = function(e) {
        var t = Qt(e), s = t == Ie ? e.constructor : r, o = s ? $i(s) : "";
        if (o)
          switch (o) {
            case Gf:
              return ke;
            case Wf:
              return ye;
            case Jf:
              return It;
            case Qf:
              return De;
            case Yf:
              return ze;
          }
        return t;
      });
      function fd(e, t, s) {
        for (var o = -1, u = s.length; ++o < u; ) {
          var p = s[o], y = p.size;
          switch (p.type) {
            case "drop":
              e += y;
              break;
            case "dropRight":
              t -= y;
              break;
            case "take":
              t = Kt(t, e + y);
              break;
            case "takeRight":
              e = qt(e, t - y);
              break;
          }
        }
        return { start: e, end: t };
      }
      function pd(e) {
        var t = e.match(We);
        return t ? t[1].split(Ot) : [];
      }
      function Ru(e, t, s) {
        t = pi(t, e);
        for (var o = -1, u = t.length, p = !1; ++o < u; ) {
          var y = jr(t[o]);
          if (!(p = e != null && s(e, y)))
            break;
          e = e[y];
        }
        return p || ++o != u ? p : (u = e == null ? 0 : e.length, !!u && Zn(u) && Qr(y, u) && (fe(e) || Di(e)));
      }
      function dd(e) {
        var t = e.length, s = new e.constructor(t);
        return t && typeof e[0] == "string" && Me.call(e, "index") && (s.index = e.index, s.input = e.input), s;
      }
      function Tu(e) {
        return typeof e.constructor == "function" && !Rs(e) ? rs(Sn(e)) : {};
      }
      function gd(e, t, s) {
        var o = e.constructor;
        switch (t) {
          case Ne:
            return fo(e);
          case A:
          case S:
            return new o(+e);
          case ke:
            return Zp(e, s);
          case ht:
          case Le:
          case St:
          case $t:
          case zt:
          case Ut:
          case Lt:
          case Gt:
          case tr:
            return pu(e, s);
          case ye:
            return new o();
          case Te:
          case Je:
            return new o(e);
          case nt:
            return Xp(e);
          case De:
            return new o();
          case Qe:
            return ed(e);
        }
      }
      function vd(e, t) {
        var s = t.length;
        if (!s)
          return e;
        var o = s - 1;
        return t[o] = (s > 1 ? "& " : "") + t[o], t = t.join(s > 2 ? ", " : " "), e.replace(vt, `{
/* [wrapped with ` + t + `] */
`);
      }
      function yd(e) {
        return fe(e) || Di(e) || !!(qc && e && e[qc]);
      }
      function Qr(e, t) {
        var s = typeof e;
        return t = t ?? J, !!t && (s == "number" || s != "symbol" && Ea.test(e)) && e > -1 && e % 1 == 0 && e < t;
      }
      function Yt(e, t, s) {
        if (!ct(s))
          return !1;
        var o = typeof t;
        return (o == "number" ? sr(s) && Qr(t, s.length) : o == "string" && t in s) ? Or(s[t], e) : !1;
      }
      function bo(e, t) {
        if (fe(e))
          return !1;
        var s = typeof e;
        return s == "number" || s == "symbol" || s == "boolean" || e == null || fr(e) ? !0 : Pt.test(e) || !rt.test(e) || t != null && e in Ge(t);
      }
      function md(e) {
        var t = typeof e;
        return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
      }
      function Eo(e) {
        var t = Kn(e), s = f[t];
        if (typeof s != "function" || !(t in Se.prototype))
          return !1;
        if (e === s)
          return !0;
        var o = mo(s);
        return !!o && e === o[0];
      }
      function wd(e) {
        return !!Nc && Nc in e;
      }
      var _d = _n ? Yr : jo;
      function Rs(e) {
        var t = e && e.constructor, s = typeof t == "function" && t.prototype || Xi;
        return e === s;
      }
      function Nu(e) {
        return e === e && !ct(e);
      }
      function Fu(e, t) {
        return function(s) {
          return s == null ? !1 : s[e] === t && (t !== r || e in Ge(s));
        };
      }
      function bd(e) {
        var t = Qn(e, function(o) {
          return s.size === I && s.clear(), o;
        }), s = t.cache;
        return t;
      }
      function Ed(e, t) {
        var s = e[1], o = t[1], u = s | o, p = u < (ae | be | M), y = o == M && s == pe || o == M && s == W && e[7].length <= t[8] || o == (M | W) && t[7].length <= t[8] && s == pe;
        if (!(p || y))
          return e;
        o & ae && (e[2] = t[2], u |= s & ae ? 0 : de);
        var m = t[3];
        if (m) {
          var x = e[3];
          e[3] = x ? gu(x, m, t[4]) : m, e[4] = x ? ui(e[3], F) : t[4];
        }
        return m = t[5], m && (x = e[5], e[5] = x ? vu(x, m, t[6]) : m, e[6] = x ? ui(e[5], F) : t[6]), m = t[7], m && (e[7] = m), o & M && (e[8] = e[8] == null ? t[8] : Kt(e[8], t[8])), e[9] == null && (e[9] = t[9]), e[0] = t[0], e[1] = u, e;
      }
      function xd(e) {
        var t = [];
        if (e != null)
          for (var s in Ge(e))
            t.push(s);
        return t;
      }
      function Id(e) {
        return En.call(e);
      }
      function $u(e, t, s) {
        return t = qt(t === r ? e.length - 1 : t, 0), function() {
          for (var o = arguments, u = -1, p = qt(o.length - t, 0), y = P(p); ++u < p; )
            y[u] = o[t + u];
          u = -1;
          for (var m = P(t + 1); ++u < t; )
            m[u] = o[u];
          return m[t] = s(y), Mt(e, this, m);
        };
      }
      function Du(e, t) {
        return t.length < 2 ? e : Ni(e, br(t, 0, -1));
      }
      function Sd(e, t) {
        for (var s = e.length, o = Kt(t.length, s), u = ir(e); o--; ) {
          var p = t[o];
          e[o] = Qr(p, s) ? u[p] : r;
        }
        return e;
      }
      function xo(e, t) {
        if (!(t === "constructor" && typeof e[t] == "function") && t != "__proto__")
          return e[t];
      }
      var qu = Mu(nu), Ts = zf || function(e, t) {
        return Pe.setTimeout(e, t);
      }, Io = Mu(Wp);
      function Lu(e, t, s) {
        var o = t + "";
        return Io(e, vd(o, Pd(pd(o), s)));
      }
      function Mu(e) {
        var t = 0, s = 0;
        return function() {
          var o = Kf(), u = et - (o - s);
          if (s = o, u > 0) {
            if (++t >= Oe)
              return arguments[0];
          } else
            t = 0;
          return e.apply(r, arguments);
        };
      }
      function Bn(e, t) {
        var s = -1, o = e.length, u = o - 1;
        for (t = t === r ? o : t; ++s < t; ) {
          var p = no(s, u), y = e[p];
          e[p] = e[s], e[s] = y;
        }
        return e.length = t, e;
      }
      var ju = bd(function(e) {
        var t = [];
        return e.charCodeAt(0) === 46 && t.push(""), e.replace(Ct, function(s, o, u, p) {
          t.push(u ? p.replace(va, "$1") : o || s);
        }), t;
      });
      function jr(e) {
        if (typeof e == "string" || fr(e))
          return e;
        var t = e + "";
        return t == "0" && 1 / e == -Re ? "-0" : t;
      }
      function $i(e) {
        if (e != null) {
          try {
            return bn.call(e);
          } catch {
          }
          try {
            return e + "";
          } catch {
          }
        }
        return "";
      }
      function Pd(e, t) {
        return yr(Fr, function(s) {
          var o = "_." + s[0];
          t & s[1] && !vn(e, o) && e.push(o);
        }), e.sort();
      }
      function zu(e) {
        if (e instanceof Se)
          return e.clone();
        var t = new wr(e.__wrapped__, e.__chain__);
        return t.__actions__ = ir(e.__actions__), t.__index__ = e.__index__, t.__values__ = e.__values__, t;
      }
      function Cd(e, t, s) {
        (s ? Yt(e, t, s) : t === r) ? t = 1 : t = qt(ve(t), 0);
        var o = e == null ? 0 : e.length;
        if (!o || t < 1)
          return [];
        for (var u = 0, p = 0, y = P(An(o / t)); u < o; )
          y[p++] = br(e, u, u += t);
        return y;
      }
      function Ad(e) {
        for (var t = -1, s = e == null ? 0 : e.length, o = 0, u = []; ++t < s; ) {
          var p = e[t];
          p && (u[o++] = p);
        }
        return u;
      }
      function Od() {
        var e = arguments.length;
        if (!e)
          return [];
        for (var t = P(e - 1), s = arguments[0], o = e; o--; )
          t[o - 1] = arguments[o];
        return ci(fe(s) ? ir(s) : [s], Ht(t, 1));
      }
      var Rd = _e(function(e, t) {
        return bt(e) ? Ss(e, Ht(t, 1, bt, !0)) : [];
      }), Td = _e(function(e, t) {
        var s = Er(t);
        return bt(s) && (s = r), bt(e) ? Ss(e, Ht(t, 1, bt, !0), ie(s, 2)) : [];
      }), Nd = _e(function(e, t) {
        var s = Er(t);
        return bt(s) && (s = r), bt(e) ? Ss(e, Ht(t, 1, bt, !0), r, s) : [];
      });
      function Fd(e, t, s) {
        var o = e == null ? 0 : e.length;
        return o ? (t = s || t === r ? 1 : ve(t), br(e, t < 0 ? 0 : t, o)) : [];
      }
      function $d(e, t, s) {
        var o = e == null ? 0 : e.length;
        return o ? (t = s || t === r ? 1 : ve(t), t = o - t, br(e, 0, t < 0 ? 0 : t)) : [];
      }
      function Dd(e, t) {
        return e && e.length ? Mn(e, ie(t, 3), !0, !0) : [];
      }
      function qd(e, t) {
        return e && e.length ? Mn(e, ie(t, 3), !0) : [];
      }
      function Ld(e, t, s, o) {
        var u = e == null ? 0 : e.length;
        return u ? (s && typeof s != "number" && Yt(e, t, s) && (s = 0, o = u), Op(e, t, s, o)) : [];
      }
      function Uu(e, t, s) {
        var o = e == null ? 0 : e.length;
        if (!o)
          return -1;
        var u = s == null ? 0 : ve(s);
        return u < 0 && (u = qt(o + u, 0)), yn(e, ie(t, 3), u);
      }
      function Hu(e, t, s) {
        var o = e == null ? 0 : e.length;
        if (!o)
          return -1;
        var u = o - 1;
        return s !== r && (u = ve(s), u = s < 0 ? qt(o + u, 0) : Kt(u, o - 1)), yn(e, ie(t, 3), u, !0);
      }
      function ku(e) {
        var t = e == null ? 0 : e.length;
        return t ? Ht(e, 1) : [];
      }
      function Md(e) {
        var t = e == null ? 0 : e.length;
        return t ? Ht(e, Re) : [];
      }
      function jd(e, t) {
        var s = e == null ? 0 : e.length;
        return s ? (t = t === r ? 1 : ve(t), Ht(e, t)) : [];
      }
      function zd(e) {
        for (var t = -1, s = e == null ? 0 : e.length, o = {}; ++t < s; ) {
          var u = e[t];
          o[u[0]] = u[1];
        }
        return o;
      }
      function Ku(e) {
        return e && e.length ? e[0] : r;
      }
      function Ud(e, t, s) {
        var o = e == null ? 0 : e.length;
        if (!o)
          return -1;
        var u = s == null ? 0 : ve(s);
        return u < 0 && (u = qt(o + u, 0)), Ji(e, t, u);
      }
      function Hd(e) {
        var t = e == null ? 0 : e.length;
        return t ? br(e, 0, -1) : [];
      }
      var kd = _e(function(e) {
        var t = it(e, ho);
        return t.length && t[0] === e[0] ? eo(t) : [];
      }), Kd = _e(function(e) {
        var t = Er(e), s = it(e, ho);
        return t === Er(s) ? t = r : s.pop(), s.length && s[0] === e[0] ? eo(s, ie(t, 2)) : [];
      }), Vd = _e(function(e) {
        var t = Er(e), s = it(e, ho);
        return t = typeof t == "function" ? t : r, t && s.pop(), s.length && s[0] === e[0] ? eo(s, r, t) : [];
      });
      function Bd(e, t) {
        return e == null ? "" : Hf.call(e, t);
      }
      function Er(e) {
        var t = e == null ? 0 : e.length;
        return t ? e[t - 1] : r;
      }
      function Gd(e, t, s) {
        var o = e == null ? 0 : e.length;
        if (!o)
          return -1;
        var u = o;
        return s !== r && (u = ve(s), u = u < 0 ? qt(o + u, 0) : Kt(u, o - 1)), t === t ? Pf(e, t, u) : yn(e, Ic, u, !0);
      }
      function Wd(e, t) {
        return e && e.length ? tu(e, ve(t)) : r;
      }
      var Jd = _e(Vu);
      function Vu(e, t) {
        return e && e.length && t && t.length ? so(e, t) : e;
      }
      function Qd(e, t, s) {
        return e && e.length && t && t.length ? so(e, t, ie(s, 2)) : e;
      }
      function Yd(e, t, s) {
        return e && e.length && t && t.length ? so(e, t, r, s) : e;
      }
      var Zd = Jr(function(e, t) {
        var s = e == null ? 0 : e.length, o = Qa(e, t);
        return su(e, it(t, function(u) {
          return Qr(u, s) ? +u : u;
        }).sort(du)), o;
      });
      function Xd(e, t) {
        var s = [];
        if (!(e && e.length))
          return s;
        var o = -1, u = [], p = e.length;
        for (t = ie(t, 3); ++o < p; ) {
          var y = e[o];
          t(y, o, e) && (s.push(y), u.push(o));
        }
        return su(e, u), s;
      }
      function So(e) {
        return e == null ? e : Bf.call(e);
      }
      function eg(e, t, s) {
        var o = e == null ? 0 : e.length;
        return o ? (s && typeof s != "number" && Yt(e, t, s) ? (t = 0, s = o) : (t = t == null ? 0 : ve(t), s = s === r ? o : ve(s)), br(e, t, s)) : [];
      }
      function tg(e, t) {
        return Ln(e, t);
      }
      function rg(e, t, s) {
        return oo(e, t, ie(s, 2));
      }
      function ig(e, t) {
        var s = e == null ? 0 : e.length;
        if (s) {
          var o = Ln(e, t);
          if (o < s && Or(e[o], t))
            return o;
        }
        return -1;
      }
      function sg(e, t) {
        return Ln(e, t, !0);
      }
      function ng(e, t, s) {
        return oo(e, t, ie(s, 2), !0);
      }
      function ag(e, t) {
        var s = e == null ? 0 : e.length;
        if (s) {
          var o = Ln(e, t, !0) - 1;
          if (Or(e[o], t))
            return o;
        }
        return -1;
      }
      function og(e) {
        return e && e.length ? au(e) : [];
      }
      function cg(e, t) {
        return e && e.length ? au(e, ie(t, 2)) : [];
      }
      function ug(e) {
        var t = e == null ? 0 : e.length;
        return t ? br(e, 1, t) : [];
      }
      function hg(e, t, s) {
        return e && e.length ? (t = s || t === r ? 1 : ve(t), br(e, 0, t < 0 ? 0 : t)) : [];
      }
      function lg(e, t, s) {
        var o = e == null ? 0 : e.length;
        return o ? (t = s || t === r ? 1 : ve(t), t = o - t, br(e, t < 0 ? 0 : t, o)) : [];
      }
      function fg(e, t) {
        return e && e.length ? Mn(e, ie(t, 3), !1, !0) : [];
      }
      function pg(e, t) {
        return e && e.length ? Mn(e, ie(t, 3)) : [];
      }
      var dg = _e(function(e) {
        return fi(Ht(e, 1, bt, !0));
      }), gg = _e(function(e) {
        var t = Er(e);
        return bt(t) && (t = r), fi(Ht(e, 1, bt, !0), ie(t, 2));
      }), vg = _e(function(e) {
        var t = Er(e);
        return t = typeof t == "function" ? t : r, fi(Ht(e, 1, bt, !0), r, t);
      });
      function yg(e) {
        return e && e.length ? fi(e) : [];
      }
      function mg(e, t) {
        return e && e.length ? fi(e, ie(t, 2)) : [];
      }
      function wg(e, t) {
        return t = typeof t == "function" ? t : r, e && e.length ? fi(e, r, t) : [];
      }
      function Po(e) {
        if (!(e && e.length))
          return [];
        var t = 0;
        return e = oi(e, function(s) {
          if (bt(s))
            return t = qt(s.length, t), !0;
        }), Ha(t, function(s) {
          return it(e, ja(s));
        });
      }
      function Bu(e, t) {
        if (!(e && e.length))
          return [];
        var s = Po(e);
        return t == null ? s : it(s, function(o) {
          return Mt(t, r, o);
        });
      }
      var _g = _e(function(e, t) {
        return bt(e) ? Ss(e, t) : [];
      }), bg = _e(function(e) {
        return uo(oi(e, bt));
      }), Eg = _e(function(e) {
        var t = Er(e);
        return bt(t) && (t = r), uo(oi(e, bt), ie(t, 2));
      }), xg = _e(function(e) {
        var t = Er(e);
        return t = typeof t == "function" ? t : r, uo(oi(e, bt), r, t);
      }), Ig = _e(Po);
      function Sg(e, t) {
        return hu(e || [], t || [], Is);
      }
      function Pg(e, t) {
        return hu(e || [], t || [], As);
      }
      var Cg = _e(function(e) {
        var t = e.length, s = t > 1 ? e[t - 1] : r;
        return s = typeof s == "function" ? (e.pop(), s) : r, Bu(e, s);
      });
      function Gu(e) {
        var t = f(e);
        return t.__chain__ = !0, t;
      }
      function Ag(e, t) {
        return t(e), e;
      }
      function Gn(e, t) {
        return t(e);
      }
      var Og = Jr(function(e) {
        var t = e.length, s = t ? e[0] : 0, o = this.__wrapped__, u = function(p) {
          return Qa(p, e);
        };
        return t > 1 || this.__actions__.length || !(o instanceof Se) || !Qr(s) ? this.thru(u) : (o = o.slice(s, +s + (t ? 1 : 0)), o.__actions__.push({ func: Gn, args: [u], thisArg: r }), new wr(o, this.__chain__).thru(function(p) {
          return t && !p.length && p.push(r), p;
        }));
      });
      function Rg() {
        return Gu(this);
      }
      function Tg() {
        return new wr(this.value(), this.__chain__);
      }
      function Ng() {
        this.__values__ === r && (this.__values__ = oh(this.value()));
        var e = this.__index__ >= this.__values__.length, t = e ? r : this.__values__[this.__index__++];
        return { done: e, value: t };
      }
      function Fg() {
        return this;
      }
      function $g(e) {
        for (var t, s = this; s instanceof Nn; ) {
          var o = zu(s);
          o.__index__ = 0, o.__values__ = r, t ? u.__wrapped__ = o : t = o;
          var u = o;
          s = s.__wrapped__;
        }
        return u.__wrapped__ = e, t;
      }
      function Dg() {
        var e = this.__wrapped__;
        if (e instanceof Se) {
          var t = e;
          return this.__actions__.length && (t = new Se(this)), t = t.reverse(), t.__actions__.push({ func: Gn, args: [So], thisArg: r }), new wr(t, this.__chain__);
        }
        return this.thru(So);
      }
      function qg() {
        return uu(this.__wrapped__, this.__actions__);
      }
      var Lg = jn(function(e, t, s) {
        Me.call(e, s) ? ++e[s] : Gr(e, s, 1);
      });
      function Mg(e, t, s) {
        var o = fe(e) ? Ec : Ap;
        return s && Yt(e, t, s) && (t = r), o(e, ie(t, 3));
      }
      function jg(e, t) {
        var s = fe(e) ? oi : Bc;
        return s(e, ie(t, 3));
      }
      var zg = _u(Uu), Ug = _u(Hu);
      function Hg(e, t) {
        return Ht(Wn(e, t), 1);
      }
      function kg(e, t) {
        return Ht(Wn(e, t), Re);
      }
      function Kg(e, t, s) {
        return s = s === r ? 1 : ve(s), Ht(Wn(e, t), s);
      }
      function Wu(e, t) {
        var s = fe(e) ? yr : li;
        return s(e, ie(t, 3));
      }
      function Ju(e, t) {
        var s = fe(e) ? uf : Vc;
        return s(e, ie(t, 3));
      }
      var Vg = jn(function(e, t, s) {
        Me.call(e, s) ? e[s].push(t) : Gr(e, s, [t]);
      });
      function Bg(e, t, s, o) {
        e = sr(e) ? e : os(e), s = s && !o ? ve(s) : 0;
        var u = e.length;
        return s < 0 && (s = qt(u + s, 0)), Xn(e) ? s <= u && e.indexOf(t, s) > -1 : !!u && Ji(e, t, s) > -1;
      }
      var Gg = _e(function(e, t, s) {
        var o = -1, u = typeof t == "function", p = sr(e) ? P(e.length) : [];
        return li(e, function(y) {
          p[++o] = u ? Mt(t, y, s) : Ps(y, t, s);
        }), p;
      }), Wg = jn(function(e, t, s) {
        Gr(e, s, t);
      });
      function Wn(e, t) {
        var s = fe(e) ? it : Zc;
        return s(e, ie(t, 3));
      }
      function Jg(e, t, s, o) {
        return e == null ? [] : (fe(t) || (t = t == null ? [] : [t]), s = o ? r : s, fe(s) || (s = s == null ? [] : [s]), ru(e, t, s));
      }
      var Qg = jn(function(e, t, s) {
        e[s ? 0 : 1].push(t);
      }, function() {
        return [[], []];
      });
      function Yg(e, t, s) {
        var o = fe(e) ? La : Pc, u = arguments.length < 3;
        return o(e, ie(t, 4), s, u, li);
      }
      function Zg(e, t, s) {
        var o = fe(e) ? hf : Pc, u = arguments.length < 3;
        return o(e, ie(t, 4), s, u, Vc);
      }
      function Xg(e, t) {
        var s = fe(e) ? oi : Bc;
        return s(e, Yn(ie(t, 3)));
      }
      function e0(e) {
        var t = fe(e) ? Uc : Bp;
        return t(e);
      }
      function t0(e, t, s) {
        (s ? Yt(e, t, s) : t === r) ? t = 1 : t = ve(t);
        var o = fe(e) ? xp : Gp;
        return o(e, t);
      }
      function r0(e) {
        var t = fe(e) ? Ip : Jp;
        return t(e);
      }
      function i0(e) {
        if (e == null)
          return 0;
        if (sr(e))
          return Xn(e) ? Yi(e) : e.length;
        var t = Vt(e);
        return t == ye || t == De ? e.size : ro(e).length;
      }
      function s0(e, t, s) {
        var o = fe(e) ? Ma : Qp;
        return s && Yt(e, t, s) && (t = r), o(e, ie(t, 3));
      }
      var n0 = _e(function(e, t) {
        if (e == null)
          return [];
        var s = t.length;
        return s > 1 && Yt(e, t[0], t[1]) ? t = [] : s > 2 && Yt(t[0], t[1], t[2]) && (t = [t[0]]), ru(e, Ht(t, 1), []);
      }), Jn = jf || function() {
        return Pe.Date.now();
      };
      function a0(e, t) {
        if (typeof t != "function")
          throw new mr(d);
        return e = ve(e), function() {
          if (--e < 1)
            return t.apply(this, arguments);
        };
      }
      function Qu(e, t, s) {
        return t = s ? r : t, t = e && t == null ? e.length : t, Wr(e, M, r, r, r, r, t);
      }
      function Yu(e, t) {
        var s;
        if (typeof t != "function")
          throw new mr(d);
        return e = ve(e), function() {
          return --e > 0 && (s = t.apply(this, arguments)), e <= 1 && (t = r), s;
        };
      }
      var Co = _e(function(e, t, s) {
        var o = ae;
        if (s.length) {
          var u = ui(s, ns(Co));
          o |= he;
        }
        return Wr(e, o, t, s, u);
      }), Zu = _e(function(e, t, s) {
        var o = ae | be;
        if (s.length) {
          var u = ui(s, ns(Zu));
          o |= he;
        }
        return Wr(t, o, e, s, u);
      });
      function Xu(e, t, s) {
        t = s ? r : t;
        var o = Wr(e, pe, r, r, r, r, r, t);
        return o.placeholder = Xu.placeholder, o;
      }
      function eh(e, t, s) {
        t = s ? r : t;
        var o = Wr(e, ue, r, r, r, r, r, t);
        return o.placeholder = eh.placeholder, o;
      }
      function th(e, t, s) {
        var o, u, p, y, m, x, N = 0, $ = !1, L = !1, B = !0;
        if (typeof e != "function")
          throw new mr(d);
        t = xr(t) || 0, ct(s) && ($ = !!s.leading, L = "maxWait" in s, p = L ? qt(xr(s.maxWait) || 0, t) : p, B = "trailing" in s ? !!s.trailing : B);
        function ee(Et) {
          var Rr = o, Xr = u;
          return o = u = r, N = Et, y = e.apply(Xr, Rr), y;
        }
        function se(Et) {
          return N = Et, m = Ts(xe, t), $ ? ee(Et) : y;
        }
        function me(Et) {
          var Rr = Et - x, Xr = Et - N, _h = t - Rr;
          return L ? Kt(_h, p - Xr) : _h;
        }
        function ne(Et) {
          var Rr = Et - x, Xr = Et - N;
          return x === r || Rr >= t || Rr < 0 || L && Xr >= p;
        }
        function xe() {
          var Et = Jn();
          if (ne(Et))
            return Ce(Et);
          m = Ts(xe, me(Et));
        }
        function Ce(Et) {
          return m = r, B && o ? ee(Et) : (o = u = r, y);
        }
        function pr() {
          m !== r && lu(m), N = 0, o = x = u = m = r;
        }
        function Zt() {
          return m === r ? y : Ce(Jn());
        }
        function dr() {
          var Et = Jn(), Rr = ne(Et);
          if (o = arguments, u = this, x = Et, Rr) {
            if (m === r)
              return se(x);
            if (L)
              return lu(m), m = Ts(xe, t), ee(x);
          }
          return m === r && (m = Ts(xe, t)), y;
        }
        return dr.cancel = pr, dr.flush = Zt, dr;
      }
      var o0 = _e(function(e, t) {
        return Kc(e, 1, t);
      }), c0 = _e(function(e, t, s) {
        return Kc(e, xr(t) || 0, s);
      });
      function u0(e) {
        return Wr(e, ge);
      }
      function Qn(e, t) {
        if (typeof e != "function" || t != null && typeof t != "function")
          throw new mr(d);
        var s = function() {
          var o = arguments, u = t ? t.apply(this, o) : o[0], p = s.cache;
          if (p.has(u))
            return p.get(u);
          var y = e.apply(this, o);
          return s.cache = p.set(u, y) || p, y;
        };
        return s.cache = new (Qn.Cache || Br)(), s;
      }
      Qn.Cache = Br;
      function Yn(e) {
        if (typeof e != "function")
          throw new mr(d);
        return function() {
          var t = arguments;
          switch (t.length) {
            case 0:
              return !e.call(this);
            case 1:
              return !e.call(this, t[0]);
            case 2:
              return !e.call(this, t[0], t[1]);
            case 3:
              return !e.call(this, t[0], t[1], t[2]);
          }
          return !e.apply(this, t);
        };
      }
      function h0(e) {
        return Yu(2, e);
      }
      var l0 = Yp(function(e, t) {
        t = t.length == 1 && fe(t[0]) ? it(t[0], hr(ie())) : it(Ht(t, 1), hr(ie()));
        var s = t.length;
        return _e(function(o) {
          for (var u = -1, p = Kt(o.length, s); ++u < p; )
            o[u] = t[u].call(this, o[u]);
          return Mt(e, this, o);
        });
      }), Ao = _e(function(e, t) {
        var s = ui(t, ns(Ao));
        return Wr(e, he, r, t, s);
      }), rh = _e(function(e, t) {
        var s = ui(t, ns(rh));
        return Wr(e, R, r, t, s);
      }), f0 = Jr(function(e, t) {
        return Wr(e, W, r, r, r, t);
      });
      function p0(e, t) {
        if (typeof e != "function")
          throw new mr(d);
        return t = t === r ? t : ve(t), _e(e, t);
      }
      function d0(e, t) {
        if (typeof e != "function")
          throw new mr(d);
        return t = t == null ? 0 : qt(ve(t), 0), _e(function(s) {
          var o = s[t], u = di(s, 0, t);
          return o && ci(u, o), Mt(e, this, u);
        });
      }
      function g0(e, t, s) {
        var o = !0, u = !0;
        if (typeof e != "function")
          throw new mr(d);
        return ct(s) && (o = "leading" in s ? !!s.leading : o, u = "trailing" in s ? !!s.trailing : u), th(e, t, { leading: o, maxWait: t, trailing: u });
      }
      function v0(e) {
        return Qu(e, 1);
      }
      function y0(e, t) {
        return Ao(lo(t), e);
      }
      function m0() {
        if (!arguments.length)
          return [];
        var e = arguments[0];
        return fe(e) ? e : [e];
      }
      function w0(e) {
        return _r(e, k);
      }
      function _0(e, t) {
        return t = typeof t == "function" ? t : r, _r(e, k, t);
      }
      function b0(e) {
        return _r(e, U | k);
      }
      function E0(e, t) {
        return t = typeof t == "function" ? t : r, _r(e, U | k, t);
      }
      function x0(e, t) {
        return t == null || kc(e, t, jt(t));
      }
      function Or(e, t) {
        return e === t || e !== e && t !== t;
      }
      var I0 = kn(Xa), S0 = kn(function(e, t) {
        return e >= t;
      }), Di = Jc(function() {
        return arguments;
      }()) ? Jc : function(e) {
        return yt(e) && Me.call(e, "callee") && !Dc.call(e, "callee");
      }, fe = P.isArray, P0 = Jt ? hr(Jt) : $p;
      function sr(e) {
        return e != null && Zn(e.length) && !Yr(e);
      }
      function bt(e) {
        return yt(e) && sr(e);
      }
      function C0(e) {
        return e === !0 || e === !1 || yt(e) && Qt(e) == A;
      }
      var gi = Uf || jo, A0 = Pr ? hr(Pr) : Dp;
      function O0(e) {
        return yt(e) && e.nodeType === 1 && !Ns(e);
      }
      function R0(e) {
        if (e == null)
          return !0;
        if (sr(e) && (fe(e) || typeof e == "string" || typeof e.splice == "function" || gi(e) || as(e) || Di(e)))
          return !e.length;
        var t = Vt(e);
        if (t == ye || t == De)
          return !e.size;
        if (Rs(e))
          return !ro(e).length;
        for (var s in e)
          if (Me.call(e, s))
            return !1;
        return !0;
      }
      function T0(e, t) {
        return Cs(e, t);
      }
      function N0(e, t, s) {
        s = typeof s == "function" ? s : r;
        var o = s ? s(e, t) : r;
        return o === r ? Cs(e, t, r, s) : !!o;
      }
      function Oo(e) {
        if (!yt(e))
          return !1;
        var t = Qt(e);
        return t == _ || t == c || typeof e.message == "string" && typeof e.name == "string" && !Ns(e);
      }
      function F0(e) {
        return typeof e == "number" && Lc(e);
      }
      function Yr(e) {
        if (!ct(e))
          return !1;
        var t = Qt(e);
        return t == X || t == oe || t == O || t == mt;
      }
      function ih(e) {
        return typeof e == "number" && e == ve(e);
      }
      function Zn(e) {
        return typeof e == "number" && e > -1 && e % 1 == 0 && e <= J;
      }
      function ct(e) {
        var t = typeof e;
        return e != null && (t == "object" || t == "function");
      }
      function yt(e) {
        return e != null && typeof e == "object";
      }
      var sh = vr ? hr(vr) : Lp;
      function $0(e, t) {
        return e === t || to(e, t, wo(t));
      }
      function D0(e, t, s) {
        return s = typeof s == "function" ? s : r, to(e, t, wo(t), s);
      }
      function q0(e) {
        return nh(e) && e != +e;
      }
      function L0(e) {
        if (_d(e))
          throw new ce(l);
        return Qc(e);
      }
      function M0(e) {
        return e === null;
      }
      function j0(e) {
        return e == null;
      }
      function nh(e) {
        return typeof e == "number" || yt(e) && Qt(e) == Te;
      }
      function Ns(e) {
        if (!yt(e) || Qt(e) != Ie)
          return !1;
        var t = Sn(e);
        if (t === null)
          return !0;
        var s = Me.call(t, "constructor") && t.constructor;
        return typeof s == "function" && s instanceof s && bn.call(s) == Df;
      }
      var Ro = qr ? hr(qr) : Mp;
      function z0(e) {
        return ih(e) && e >= -J && e <= J;
      }
      var ah = ys ? hr(ys) : jp;
      function Xn(e) {
        return typeof e == "string" || !fe(e) && yt(e) && Qt(e) == Je;
      }
      function fr(e) {
        return typeof e == "symbol" || yt(e) && Qt(e) == Qe;
      }
      var as = Ci ? hr(Ci) : zp;
      function U0(e) {
        return e === r;
      }
      function H0(e) {
        return yt(e) && Vt(e) == ze;
      }
      function k0(e) {
        return yt(e) && Qt(e) == Ye;
      }
      var K0 = kn(io), V0 = kn(function(e, t) {
        return e <= t;
      });
      function oh(e) {
        if (!e)
          return [];
        if (sr(e))
          return Xn(e) ? Cr(e) : ir(e);
        if (ws && e[ws])
          return xf(e[ws]());
        var t = Vt(e), s = t == ye ? Ka : t == De ? mn : os;
        return s(e);
      }
      function Zr(e) {
        if (!e)
          return e === 0 ? e : 0;
        if (e = xr(e), e === Re || e === -Re) {
          var t = e < 0 ? -1 : 1;
          return t * K;
        }
        return e === e ? e : 0;
      }
      function ve(e) {
        var t = Zr(e), s = t % 1;
        return t === t ? s ? t - s : t : 0;
      }
      function ch(e) {
        return e ? Ti(ve(e), 0, V) : 0;
      }
      function xr(e) {
        if (typeof e == "number")
          return e;
        if (fr(e))
          return j;
        if (ct(e)) {
          var t = typeof e.valueOf == "function" ? e.valueOf() : e;
          e = ct(t) ? t + "" : t;
        }
        if (typeof e != "string")
          return e === 0 ? e : +e;
        e = Cc(e);
        var s = wa.test(e);
        return s || ba.test(e) ? le(e.slice(2), s ? 2 : 8) : ma.test(e) ? j : +e;
      }
      function uh(e) {
        return Mr(e, nr(e));
      }
      function B0(e) {
        return e ? Ti(ve(e), -J, J) : e === 0 ? e : 0;
      }
      function qe(e) {
        return e == null ? "" : lr(e);
      }
      var G0 = is(function(e, t) {
        if (Rs(t) || sr(t)) {
          Mr(t, jt(t), e);
          return;
        }
        for (var s in t)
          Me.call(t, s) && Is(e, s, t[s]);
      }), hh = is(function(e, t) {
        Mr(t, nr(t), e);
      }), ea = is(function(e, t, s, o) {
        Mr(t, nr(t), e, o);
      }), W0 = is(function(e, t, s, o) {
        Mr(t, jt(t), e, o);
      }), J0 = Jr(Qa);
      function Q0(e, t) {
        var s = rs(e);
        return t == null ? s : Hc(s, t);
      }
      var Y0 = _e(function(e, t) {
        e = Ge(e);
        var s = -1, o = t.length, u = o > 2 ? t[2] : r;
        for (u && Yt(t[0], t[1], u) && (o = 1); ++s < o; )
          for (var p = t[s], y = nr(p), m = -1, x = y.length; ++m < x; ) {
            var N = y[m], $ = e[N];
            ($ === r || Or($, Xi[N]) && !Me.call(e, N)) && (e[N] = p[N]);
          }
        return e;
      }), Z0 = _e(function(e) {
        return e.push(r, Cu), Mt(lh, r, e);
      });
      function X0(e, t) {
        return xc(e, ie(t, 3), Lr);
      }
      function ev(e, t) {
        return xc(e, ie(t, 3), Za);
      }
      function tv(e, t) {
        return e == null ? e : Ya(e, ie(t, 3), nr);
      }
      function rv(e, t) {
        return e == null ? e : Gc(e, ie(t, 3), nr);
      }
      function iv(e, t) {
        return e && Lr(e, ie(t, 3));
      }
      function sv(e, t) {
        return e && Za(e, ie(t, 3));
      }
      function nv(e) {
        return e == null ? [] : Dn(e, jt(e));
      }
      function av(e) {
        return e == null ? [] : Dn(e, nr(e));
      }
      function To(e, t, s) {
        var o = e == null ? r : Ni(e, t);
        return o === r ? s : o;
      }
      function ov(e, t) {
        return e != null && Ru(e, t, Rp);
      }
      function No(e, t) {
        return e != null && Ru(e, t, Tp);
      }
      var cv = Eu(function(e, t, s) {
        t != null && typeof t.toString != "function" && (t = En.call(t)), e[t] = s;
      }, $o(ar)), uv = Eu(function(e, t, s) {
        t != null && typeof t.toString != "function" && (t = En.call(t)), Me.call(e, t) ? e[t].push(s) : e[t] = [s];
      }, ie), hv = _e(Ps);
      function jt(e) {
        return sr(e) ? zc(e) : ro(e);
      }
      function nr(e) {
        return sr(e) ? zc(e, !0) : Up(e);
      }
      function lv(e, t) {
        var s = {};
        return t = ie(t, 3), Lr(e, function(o, u, p) {
          Gr(s, t(o, u, p), o);
        }), s;
      }
      function fv(e, t) {
        var s = {};
        return t = ie(t, 3), Lr(e, function(o, u, p) {
          Gr(s, u, t(o, u, p));
        }), s;
      }
      var pv = is(function(e, t, s) {
        qn(e, t, s);
      }), lh = is(function(e, t, s, o) {
        qn(e, t, s, o);
      }), dv = Jr(function(e, t) {
        var s = {};
        if (e == null)
          return s;
        var o = !1;
        t = it(t, function(p) {
          return p = pi(p, e), o || (o = p.length > 1), p;
        }), Mr(e, yo(e), s), o && (s = _r(s, U | H | k, cd));
        for (var u = t.length; u--; )
          co(s, t[u]);
        return s;
      });
      function gv(e, t) {
        return fh(e, Yn(ie(t)));
      }
      var vv = Jr(function(e, t) {
        return e == null ? {} : kp(e, t);
      });
      function fh(e, t) {
        if (e == null)
          return {};
        var s = it(yo(e), function(o) {
          return [o];
        });
        return t = ie(t), iu(e, s, function(o, u) {
          return t(o, u[0]);
        });
      }
      function yv(e, t, s) {
        t = pi(t, e);
        var o = -1, u = t.length;
        for (u || (u = 1, e = r); ++o < u; ) {
          var p = e == null ? r : e[jr(t[o])];
          p === r && (o = u, p = s), e = Yr(p) ? p.call(e) : p;
        }
        return e;
      }
      function mv(e, t, s) {
        return e == null ? e : As(e, t, s);
      }
      function wv(e, t, s, o) {
        return o = typeof o == "function" ? o : r, e == null ? e : As(e, t, s, o);
      }
      var ph = Su(jt), dh = Su(nr);
      function _v(e, t, s) {
        var o = fe(e), u = o || gi(e) || as(e);
        if (t = ie(t, 4), s == null) {
          var p = e && e.constructor;
          u ? s = o ? new p() : [] : ct(e) ? s = Yr(p) ? rs(Sn(e)) : {} : s = {};
        }
        return (u ? yr : Lr)(e, function(y, m, x) {
          return t(s, y, m, x);
        }), s;
      }
      function bv(e, t) {
        return e == null ? !0 : co(e, t);
      }
      function Ev(e, t, s) {
        return e == null ? e : cu(e, t, lo(s));
      }
      function xv(e, t, s, o) {
        return o = typeof o == "function" ? o : r, e == null ? e : cu(e, t, lo(s), o);
      }
      function os(e) {
        return e == null ? [] : ka(e, jt(e));
      }
      function Iv(e) {
        return e == null ? [] : ka(e, nr(e));
      }
      function Sv(e, t, s) {
        return s === r && (s = t, t = r), s !== r && (s = xr(s), s = s === s ? s : 0), t !== r && (t = xr(t), t = t === t ? t : 0), Ti(xr(e), t, s);
      }
      function Pv(e, t, s) {
        return t = Zr(t), s === r ? (s = t, t = 0) : s = Zr(s), e = xr(e), Np(e, t, s);
      }
      function Cv(e, t, s) {
        if (s && typeof s != "boolean" && Yt(e, t, s) && (t = s = r), s === r && (typeof t == "boolean" ? (s = t, t = r) : typeof e == "boolean" && (s = e, e = r)), e === r && t === r ? (e = 0, t = 1) : (e = Zr(e), t === r ? (t = e, e = 0) : t = Zr(t)), e > t) {
          var o = e;
          e = t, t = o;
        }
        if (s || e % 1 || t % 1) {
          var u = Mc();
          return Kt(e + u * (t - e + Ve("1e-" + ((u + "").length - 1))), t);
        }
        return no(e, t);
      }
      var Av = ss(function(e, t, s) {
        return t = t.toLowerCase(), e + (s ? gh(t) : t);
      });
      function gh(e) {
        return Fo(qe(e).toLowerCase());
      }
      function vh(e) {
        return e = qe(e), e && e.replace(kr, mf).replace($a, "");
      }
      function Ov(e, t, s) {
        e = qe(e), t = lr(t);
        var o = e.length;
        s = s === r ? o : Ti(ve(s), 0, o);
        var u = s;
        return s -= t.length, s >= 0 && e.slice(s, u) == t;
      }
      function Rv(e) {
        return e = qe(e), e && tt.test(e) ? e.replace(Ei, wf) : e;
      }
      function Tv(e) {
        return e = qe(e), e && At.test(e) ? e.replace(dt, "\\$&") : e;
      }
      var Nv = ss(function(e, t, s) {
        return e + (s ? "-" : "") + t.toLowerCase();
      }), Fv = ss(function(e, t, s) {
        return e + (s ? " " : "") + t.toLowerCase();
      }), $v = wu("toLowerCase");
      function Dv(e, t, s) {
        e = qe(e), t = ve(t);
        var o = t ? Yi(e) : 0;
        if (!t || o >= t)
          return e;
        var u = (t - o) / 2;
        return Hn(On(u), s) + e + Hn(An(u), s);
      }
      function qv(e, t, s) {
        e = qe(e), t = ve(t);
        var o = t ? Yi(e) : 0;
        return t && o < t ? e + Hn(t - o, s) : e;
      }
      function Lv(e, t, s) {
        e = qe(e), t = ve(t);
        var o = t ? Yi(e) : 0;
        return t && o < t ? Hn(t - o, s) + e : e;
      }
      function Mv(e, t, s) {
        return s || t == null ? t = 0 : t && (t = +t), Vf(qe(e).replace(gt, ""), t || 0);
      }
      function jv(e, t, s) {
        return (s ? Yt(e, t, s) : t === r) ? t = 1 : t = ve(t), ao(qe(e), t);
      }
      function zv() {
        var e = arguments, t = qe(e[0]);
        return e.length < 3 ? t : t.replace(e[1], e[2]);
      }
      var Uv = ss(function(e, t, s) {
        return e + (s ? "_" : "") + t.toLowerCase();
      });
      function Hv(e, t, s) {
        return s && typeof s != "number" && Yt(e, t, s) && (t = s = r), s = s === r ? V : s >>> 0, s ? (e = qe(e), e && (typeof t == "string" || t != null && !Ro(t)) && (t = lr(t), !t && Qi(e)) ? di(Cr(e), 0, s) : e.split(t, s)) : [];
      }
      var kv = ss(function(e, t, s) {
        return e + (s ? " " : "") + Fo(t);
      });
      function Kv(e, t, s) {
        return e = qe(e), s = s == null ? 0 : Ti(ve(s), 0, e.length), t = lr(t), e.slice(s, s + t.length) == t;
      }
      function Vv(e, t, s) {
        var o = f.templateSettings;
        s && Yt(e, t, s) && (t = r), e = qe(e), t = ea({}, t, o, Pu);
        var u = ea({}, t.imports, o.imports, Pu), p = jt(u), y = ka(u, p), m, x, N = 0, $ = t.interpolate || Hi, L = "__p += '", B = Va((t.escape || Hi).source + "|" + $.source + "|" + ($ === ot ? ya : Hi).source + "|" + (t.evaluate || Hi).source + "|$", "g"), ee = "//# sourceURL=" + (Me.call(t, "sourceURL") ? (t.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++Da + "]") + `
`;
        e.replace(B, function(ne, xe, Ce, pr, Zt, dr) {
          return Ce || (Ce = pr), L += e.slice(N, dr).replace(xa, _f), xe && (m = !0, L += `' +
__e(` + xe + `) +
'`), Zt && (x = !0, L += `';
` + Zt + `;
__p += '`), Ce && (L += `' +
((__t = (` + Ce + `)) == null ? '' : __t) +
'`), N = dr + ne.length, ne;
        }), L += `';
`;
        var se = Me.call(t, "variable") && t.variable;
        if (!se)
          L = `with (obj) {
` + L + `
}
`;
        else if (ga.test(se))
          throw new ce(v);
        L = (x ? L.replace($r, "") : L).replace(Wt, "$1").replace(Hr, "$1;"), L = "function(" + (se || "obj") + `) {
` + (se ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (m ? ", __e = _.escape" : "") + (x ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + L + `return __p
}`;
        var me = mh(function() {
          return $e(p, ee + "return " + L).apply(r, y);
        });
        if (me.source = L, Oo(me))
          throw me;
        return me;
      }
      function Bv(e) {
        return qe(e).toLowerCase();
      }
      function Gv(e) {
        return qe(e).toUpperCase();
      }
      function Wv(e, t, s) {
        if (e = qe(e), e && (s || t === r))
          return Cc(e);
        if (!e || !(t = lr(t)))
          return e;
        var o = Cr(e), u = Cr(t), p = Ac(o, u), y = Oc(o, u) + 1;
        return di(o, p, y).join("");
      }
      function Jv(e, t, s) {
        if (e = qe(e), e && (s || t === r))
          return e.slice(0, Tc(e) + 1);
        if (!e || !(t = lr(t)))
          return e;
        var o = Cr(e), u = Oc(o, Cr(t)) + 1;
        return di(o, 0, u).join("");
      }
      function Qv(e, t, s) {
        if (e = qe(e), e && (s || t === r))
          return e.replace(gt, "");
        if (!e || !(t = lr(t)))
          return e;
        var o = Cr(e), u = Ac(o, Cr(t));
        return di(o, u).join("");
      }
      function Yv(e, t) {
        var s = te, o = Ee;
        if (ct(t)) {
          var u = "separator" in t ? t.separator : u;
          s = "length" in t ? ve(t.length) : s, o = "omission" in t ? lr(t.omission) : o;
        }
        e = qe(e);
        var p = e.length;
        if (Qi(e)) {
          var y = Cr(e);
          p = y.length;
        }
        if (s >= p)
          return e;
        var m = s - Yi(o);
        if (m < 1)
          return o;
        var x = y ? di(y, 0, m).join("") : e.slice(0, m);
        if (u === r)
          return x + o;
        if (y && (m += x.length - m), Ro(u)) {
          if (e.slice(m).search(u)) {
            var N, $ = x;
            for (u.global || (u = Va(u.source, qe(gr.exec(u)) + "g")), u.lastIndex = 0; N = u.exec($); )
              var L = N.index;
            x = x.slice(0, L === r ? m : L);
          }
        } else if (e.indexOf(lr(u), m) != m) {
          var B = x.lastIndexOf(u);
          B > -1 && (x = x.slice(0, B));
        }
        return x + o;
      }
      function Zv(e) {
        return e = qe(e), e && lt.test(e) ? e.replace(ni, Cf) : e;
      }
      var Xv = ss(function(e, t, s) {
        return e + (s ? " " : "") + t.toUpperCase();
      }), Fo = wu("toUpperCase");
      function yh(e, t, s) {
        return e = qe(e), t = s ? r : t, t === r ? Ef(e) ? Rf(e) : pf(e) : e.match(t) || [];
      }
      var mh = _e(function(e, t) {
        try {
          return Mt(e, r, t);
        } catch (s) {
          return Oo(s) ? s : new ce(s);
        }
      }), ey = Jr(function(e, t) {
        return yr(t, function(s) {
          s = jr(s), Gr(e, s, Co(e[s], e));
        }), e;
      });
      function ty(e) {
        var t = e == null ? 0 : e.length, s = ie();
        return e = t ? it(e, function(o) {
          if (typeof o[1] != "function")
            throw new mr(d);
          return [s(o[0]), o[1]];
        }) : [], _e(function(o) {
          for (var u = -1; ++u < t; ) {
            var p = e[u];
            if (Mt(p[0], this, o))
              return Mt(p[1], this, o);
          }
        });
      }
      function ry(e) {
        return Cp(_r(e, U));
      }
      function $o(e) {
        return function() {
          return e;
        };
      }
      function iy(e, t) {
        return e == null || e !== e ? t : e;
      }
      var sy = bu(), ny = bu(!0);
      function ar(e) {
        return e;
      }
      function Do(e) {
        return Yc(typeof e == "function" ? e : _r(e, U));
      }
      function ay(e) {
        return Xc(_r(e, U));
      }
      function oy(e, t) {
        return eu(e, _r(t, U));
      }
      var cy = _e(function(e, t) {
        return function(s) {
          return Ps(s, e, t);
        };
      }), uy = _e(function(e, t) {
        return function(s) {
          return Ps(e, s, t);
        };
      });
      function qo(e, t, s) {
        var o = jt(t), u = Dn(t, o);
        s == null && !(ct(t) && (u.length || !o.length)) && (s = t, t = e, e = this, u = Dn(t, jt(t)));
        var p = !(ct(s) && "chain" in s) || !!s.chain, y = Yr(e);
        return yr(u, function(m) {
          var x = t[m];
          e[m] = x, y && (e.prototype[m] = function() {
            var N = this.__chain__;
            if (p || N) {
              var $ = e(this.__wrapped__), L = $.__actions__ = ir(this.__actions__);
              return L.push({ func: x, args: arguments, thisArg: e }), $.__chain__ = N, $;
            }
            return x.apply(e, ci([this.value()], arguments));
          });
        }), e;
      }
      function hy() {
        return Pe._ === this && (Pe._ = qf), this;
      }
      function Lo() {
      }
      function ly(e) {
        return e = ve(e), _e(function(t) {
          return tu(t, e);
        });
      }
      var fy = po(it), py = po(Ec), dy = po(Ma);
      function wh(e) {
        return bo(e) ? ja(jr(e)) : Kp(e);
      }
      function gy(e) {
        return function(t) {
          return e == null ? r : Ni(e, t);
        };
      }
      var vy = xu(), yy = xu(!0);
      function Mo() {
        return [];
      }
      function jo() {
        return !1;
      }
      function my() {
        return {};
      }
      function wy() {
        return "";
      }
      function _y() {
        return !0;
      }
      function by(e, t) {
        if (e = ve(e), e < 1 || e > J)
          return [];
        var s = V, o = Kt(e, V);
        t = ie(t), e -= V;
        for (var u = Ha(o, t); ++s < e; )
          t(s);
        return u;
      }
      function Ey(e) {
        return fe(e) ? it(e, jr) : fr(e) ? [e] : ir(ju(qe(e)));
      }
      function xy(e) {
        var t = ++$f;
        return qe(e) + t;
      }
      var Iy = Un(function(e, t) {
        return e + t;
      }, 0), Sy = go("ceil"), Py = Un(function(e, t) {
        return e / t;
      }, 1), Cy = go("floor");
      function Ay(e) {
        return e && e.length ? $n(e, ar, Xa) : r;
      }
      function Oy(e, t) {
        return e && e.length ? $n(e, ie(t, 2), Xa) : r;
      }
      function Ry(e) {
        return Sc(e, ar);
      }
      function Ty(e, t) {
        return Sc(e, ie(t, 2));
      }
      function Ny(e) {
        return e && e.length ? $n(e, ar, io) : r;
      }
      function Fy(e, t) {
        return e && e.length ? $n(e, ie(t, 2), io) : r;
      }
      var $y = Un(function(e, t) {
        return e * t;
      }, 1), Dy = go("round"), qy = Un(function(e, t) {
        return e - t;
      }, 0);
      function Ly(e) {
        return e && e.length ? Ua(e, ar) : 0;
      }
      function My(e, t) {
        return e && e.length ? Ua(e, ie(t, 2)) : 0;
      }
      return f.after = a0, f.ary = Qu, f.assign = G0, f.assignIn = hh, f.assignInWith = ea, f.assignWith = W0, f.at = J0, f.before = Yu, f.bind = Co, f.bindAll = ey, f.bindKey = Zu, f.castArray = m0, f.chain = Gu, f.chunk = Cd, f.compact = Ad, f.concat = Od, f.cond = ty, f.conforms = ry, f.constant = $o, f.countBy = Lg, f.create = Q0, f.curry = Xu, f.curryRight = eh, f.debounce = th, f.defaults = Y0, f.defaultsDeep = Z0, f.defer = o0, f.delay = c0, f.difference = Rd, f.differenceBy = Td, f.differenceWith = Nd, f.drop = Fd, f.dropRight = $d, f.dropRightWhile = Dd, f.dropWhile = qd, f.fill = Ld, f.filter = jg, f.flatMap = Hg, f.flatMapDeep = kg, f.flatMapDepth = Kg, f.flatten = ku, f.flattenDeep = Md, f.flattenDepth = jd, f.flip = u0, f.flow = sy, f.flowRight = ny, f.fromPairs = zd, f.functions = nv, f.functionsIn = av, f.groupBy = Vg, f.initial = Hd, f.intersection = kd, f.intersectionBy = Kd, f.intersectionWith = Vd, f.invert = cv, f.invertBy = uv, f.invokeMap = Gg, f.iteratee = Do, f.keyBy = Wg, f.keys = jt, f.keysIn = nr, f.map = Wn, f.mapKeys = lv, f.mapValues = fv, f.matches = ay, f.matchesProperty = oy, f.memoize = Qn, f.merge = pv, f.mergeWith = lh, f.method = cy, f.methodOf = uy, f.mixin = qo, f.negate = Yn, f.nthArg = ly, f.omit = dv, f.omitBy = gv, f.once = h0, f.orderBy = Jg, f.over = fy, f.overArgs = l0, f.overEvery = py, f.overSome = dy, f.partial = Ao, f.partialRight = rh, f.partition = Qg, f.pick = vv, f.pickBy = fh, f.property = wh, f.propertyOf = gy, f.pull = Jd, f.pullAll = Vu, f.pullAllBy = Qd, f.pullAllWith = Yd, f.pullAt = Zd, f.range = vy, f.rangeRight = yy, f.rearg = f0, f.reject = Xg, f.remove = Xd, f.rest = p0, f.reverse = So, f.sampleSize = t0, f.set = mv, f.setWith = wv, f.shuffle = r0, f.slice = eg, f.sortBy = n0, f.sortedUniq = og, f.sortedUniqBy = cg, f.split = Hv, f.spread = d0, f.tail = ug, f.take = hg, f.takeRight = lg, f.takeRightWhile = fg, f.takeWhile = pg, f.tap = Ag, f.throttle = g0, f.thru = Gn, f.toArray = oh, f.toPairs = ph, f.toPairsIn = dh, f.toPath = Ey, f.toPlainObject = uh, f.transform = _v, f.unary = v0, f.union = dg, f.unionBy = gg, f.unionWith = vg, f.uniq = yg, f.uniqBy = mg, f.uniqWith = wg, f.unset = bv, f.unzip = Po, f.unzipWith = Bu, f.update = Ev, f.updateWith = xv, f.values = os, f.valuesIn = Iv, f.without = _g, f.words = yh, f.wrap = y0, f.xor = bg, f.xorBy = Eg, f.xorWith = xg, f.zip = Ig, f.zipObject = Sg, f.zipObjectDeep = Pg, f.zipWith = Cg, f.entries = ph, f.entriesIn = dh, f.extend = hh, f.extendWith = ea, qo(f, f), f.add = Iy, f.attempt = mh, f.camelCase = Av, f.capitalize = gh, f.ceil = Sy, f.clamp = Sv, f.clone = w0, f.cloneDeep = b0, f.cloneDeepWith = E0, f.cloneWith = _0, f.conformsTo = x0, f.deburr = vh, f.defaultTo = iy, f.divide = Py, f.endsWith = Ov, f.eq = Or, f.escape = Rv, f.escapeRegExp = Tv, f.every = Mg, f.find = zg, f.findIndex = Uu, f.findKey = X0, f.findLast = Ug, f.findLastIndex = Hu, f.findLastKey = ev, f.floor = Cy, f.forEach = Wu, f.forEachRight = Ju, f.forIn = tv, f.forInRight = rv, f.forOwn = iv, f.forOwnRight = sv, f.get = To, f.gt = I0, f.gte = S0, f.has = ov, f.hasIn = No, f.head = Ku, f.identity = ar, f.includes = Bg, f.indexOf = Ud, f.inRange = Pv, f.invoke = hv, f.isArguments = Di, f.isArray = fe, f.isArrayBuffer = P0, f.isArrayLike = sr, f.isArrayLikeObject = bt, f.isBoolean = C0, f.isBuffer = gi, f.isDate = A0, f.isElement = O0, f.isEmpty = R0, f.isEqual = T0, f.isEqualWith = N0, f.isError = Oo, f.isFinite = F0, f.isFunction = Yr, f.isInteger = ih, f.isLength = Zn, f.isMap = sh, f.isMatch = $0, f.isMatchWith = D0, f.isNaN = q0, f.isNative = L0, f.isNil = j0, f.isNull = M0, f.isNumber = nh, f.isObject = ct, f.isObjectLike = yt, f.isPlainObject = Ns, f.isRegExp = Ro, f.isSafeInteger = z0, f.isSet = ah, f.isString = Xn, f.isSymbol = fr, f.isTypedArray = as, f.isUndefined = U0, f.isWeakMap = H0, f.isWeakSet = k0, f.join = Bd, f.kebabCase = Nv, f.last = Er, f.lastIndexOf = Gd, f.lowerCase = Fv, f.lowerFirst = $v, f.lt = K0, f.lte = V0, f.max = Ay, f.maxBy = Oy, f.mean = Ry, f.meanBy = Ty, f.min = Ny, f.minBy = Fy, f.stubArray = Mo, f.stubFalse = jo, f.stubObject = my, f.stubString = wy, f.stubTrue = _y, f.multiply = $y, f.nth = Wd, f.noConflict = hy, f.noop = Lo, f.now = Jn, f.pad = Dv, f.padEnd = qv, f.padStart = Lv, f.parseInt = Mv, f.random = Cv, f.reduce = Yg, f.reduceRight = Zg, f.repeat = jv, f.replace = zv, f.result = yv, f.round = Dy, f.runInContext = E, f.sample = e0, f.size = i0, f.snakeCase = Uv, f.some = s0, f.sortedIndex = tg, f.sortedIndexBy = rg, f.sortedIndexOf = ig, f.sortedLastIndex = sg, f.sortedLastIndexBy = ng, f.sortedLastIndexOf = ag, f.startCase = kv, f.startsWith = Kv, f.subtract = qy, f.sum = Ly, f.sumBy = My, f.template = Vv, f.times = by, f.toFinite = Zr, f.toInteger = ve, f.toLength = ch, f.toLower = Bv, f.toNumber = xr, f.toSafeInteger = B0, f.toString = qe, f.toUpper = Gv, f.trim = Wv, f.trimEnd = Jv, f.trimStart = Qv, f.truncate = Yv, f.unescape = Zv, f.uniqueId = xy, f.upperCase = Xv, f.upperFirst = Fo, f.each = Wu, f.eachRight = Ju, f.first = Ku, qo(f, function() {
        var e = {};
        return Lr(f, function(t, s) {
          Me.call(f.prototype, s) || (e[s] = t);
        }), e;
      }(), { chain: !1 }), f.VERSION = n, yr(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(e) {
        f[e].placeholder = f;
      }), yr(["drop", "take"], function(e, t) {
        Se.prototype[e] = function(s) {
          s = s === r ? 1 : qt(ve(s), 0);
          var o = this.__filtered__ && !t ? new Se(this) : this.clone();
          return o.__filtered__ ? o.__takeCount__ = Kt(s, o.__takeCount__) : o.__views__.push({ size: Kt(s, V), type: e + (o.__dir__ < 0 ? "Right" : "") }), o;
        }, Se.prototype[e + "Right"] = function(s) {
          return this.reverse()[e](s).reverse();
        };
      }), yr(["filter", "map", "takeWhile"], function(e, t) {
        var s = t + 1, o = s == C || s == je;
        Se.prototype[e] = function(u) {
          var p = this.clone();
          return p.__iteratees__.push({ iteratee: ie(u, 3), type: s }), p.__filtered__ = p.__filtered__ || o, p;
        };
      }), yr(["head", "last"], function(e, t) {
        var s = "take" + (t ? "Right" : "");
        Se.prototype[e] = function() {
          return this[s](1).value()[0];
        };
      }), yr(["initial", "tail"], function(e, t) {
        var s = "drop" + (t ? "" : "Right");
        Se.prototype[e] = function() {
          return this.__filtered__ ? new Se(this) : this[s](1);
        };
      }), Se.prototype.compact = function() {
        return this.filter(ar);
      }, Se.prototype.find = function(e) {
        return this.filter(e).head();
      }, Se.prototype.findLast = function(e) {
        return this.reverse().find(e);
      }, Se.prototype.invokeMap = _e(function(e, t) {
        return typeof e == "function" ? new Se(this) : this.map(function(s) {
          return Ps(s, e, t);
        });
      }), Se.prototype.reject = function(e) {
        return this.filter(Yn(ie(e)));
      }, Se.prototype.slice = function(e, t) {
        e = ve(e);
        var s = this;
        return s.__filtered__ && (e > 0 || t < 0) ? new Se(s) : (e < 0 ? s = s.takeRight(-e) : e && (s = s.drop(e)), t !== r && (t = ve(t), s = t < 0 ? s.dropRight(-t) : s.take(t - e)), s);
      }, Se.prototype.takeRightWhile = function(e) {
        return this.reverse().takeWhile(e).reverse();
      }, Se.prototype.toArray = function() {
        return this.take(V);
      }, Lr(Se.prototype, function(e, t) {
        var s = /^(?:filter|find|map|reject)|While$/.test(t), o = /^(?:head|last)$/.test(t), u = f[o ? "take" + (t == "last" ? "Right" : "") : t], p = o || /^find/.test(t);
        u && (f.prototype[t] = function() {
          var y = this.__wrapped__, m = o ? [1] : arguments, x = y instanceof Se, N = m[0], $ = x || fe(y), L = function(xe) {
            var Ce = u.apply(f, ci([xe], m));
            return o && B ? Ce[0] : Ce;
          };
          $ && s && typeof N == "function" && N.length != 1 && (x = $ = !1);
          var B = this.__chain__, ee = !!this.__actions__.length, se = p && !B, me = x && !ee;
          if (!p && $) {
            y = me ? y : new Se(this);
            var ne = e.apply(y, m);
            return ne.__actions__.push({ func: Gn, args: [L], thisArg: r }), new wr(ne, B);
          }
          return se && me ? e.apply(this, m) : (ne = this.thru(L), se ? o ? ne.value()[0] : ne.value() : ne);
        });
      }), yr(["pop", "push", "shift", "sort", "splice", "unshift"], function(e) {
        var t = wn[e], s = /^(?:push|sort|unshift)$/.test(e) ? "tap" : "thru", o = /^(?:pop|shift)$/.test(e);
        f.prototype[e] = function() {
          var u = arguments;
          if (o && !this.__chain__) {
            var p = this.value();
            return t.apply(fe(p) ? p : [], u);
          }
          return this[s](function(y) {
            return t.apply(fe(y) ? y : [], u);
          });
        };
      }), Lr(Se.prototype, function(e, t) {
        var s = f[t];
        if (s) {
          var o = s.name + "";
          Me.call(ts, o) || (ts[o] = []), ts[o].push({ name: t, func: s });
        }
      }), ts[zn(r, be).name] = [{ name: "wrapper", func: r }], Se.prototype.clone = Zf, Se.prototype.reverse = Xf, Se.prototype.value = ep, f.prototype.at = Og, f.prototype.chain = Rg, f.prototype.commit = Tg, f.prototype.next = Ng, f.prototype.plant = $g, f.prototype.reverse = Dg, f.prototype.toJSON = f.prototype.valueOf = f.prototype.value = qg, f.prototype.first = f.prototype.head, ws && (f.prototype[ws] = Fg), f;
    }, Zi = Tf();
    _t ? ((_t.exports = Zi)._ = Zi, Be._ = Zi) : Pe._ = Zi;
  }).call(Hs);
})(ac, ac.exports);
var vb = Object.defineProperty, yb = Object.defineProperties, mb = Object.getOwnPropertyDescriptors, gl = Object.getOwnPropertySymbols, wb = Object.prototype.hasOwnProperty, _b = Object.prototype.propertyIsEnumerable, vl = (h, i, r) => i in h ? vb(h, i, { enumerable: !0, configurable: !0, writable: !0, value: r }) : h[i] = r, ia = (h, i) => {
  for (var r in i || (i = {}))
    wb.call(i, r) && vl(h, r, i[r]);
  if (gl)
    for (var r of gl(i))
      _b.call(i, r) && vl(h, r, i[r]);
  return h;
}, bb = (h, i) => yb(h, mb(i));
function _i(h, i, r) {
  var n;
  const a = S1(h);
  return ((n = i.rpcMap) == null ? void 0 : n[a.reference]) || `${gb}?chainId=${a.namespace}:${a.reference}&projectId=${r}`;
}
function Ui(h) {
  return h.includes(":") ? h.split(":")[1] : h;
}
function af(h) {
  return h.map((i) => `${i.split(":")[0]}:${i.split(":")[1]}`);
}
function Eb(h, i) {
  const r = Object.keys(i.namespaces).filter((a) => a.includes(h));
  if (!r.length)
    return [];
  const n = [];
  return r.forEach((a) => {
    const l = i.namespaces[a].accounts;
    n.push(...l);
  }), n;
}
function xb(h = {}, i = {}) {
  const r = yl(h), n = yl(i);
  return ac.exports.merge(r, n);
}
function yl(h) {
  var i, r, n, a;
  const l = {};
  if (!aa(h))
    return l;
  for (const [d, v] of Object.entries(h)) {
    const w = Rl(d) ? [d] : v.chains, I = v.methods || [], F = v.events || [], U = v.rpcMap || {}, H = ks(d);
    l[H] = bb(ia(ia({}, l[H]), v), { chains: Uo(w, (i = l[H]) == null ? void 0 : i.chains), methods: Uo(I, (r = l[H]) == null ? void 0 : r.methods), events: Uo(F, (n = l[H]) == null ? void 0 : n.events), rpcMap: ia(ia({}, U), (a = l[H]) == null ? void 0 : a.rpcMap) });
  }
  return l;
}
function Ib(h) {
  return h.includes(":") ? h.split(":")[2] : h;
}
function Sb(h) {
  const i = {};
  for (const [r, n] of Object.entries(h)) {
    const a = n.methods || [], l = n.events || [], d = n.accounts || [], v = Rl(r) ? [r] : n.chains ? n.chains : af(n.accounts);
    i[r] = { chains: v, methods: a, events: l, accounts: d };
  }
  return i;
}
function Zo(h) {
  return typeof h == "number" ? h : h.includes("0x") ? parseInt(h, 16) : h.includes(":") ? Number(h.split(":")[1]) : Number(h);
}
const of = {}, st = (h) => of[h], Xo = (h, i) => {
  of[h] = i;
};
class Pb {
  constructor(i) {
    this.name = "polkadot", this.namespace = i.namespace, this.events = st("events"), this.client = st("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders();
  }
  updateNamespace(i) {
    this.namespace = Object.assign(this.namespace, i);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  getDefaultChain() {
    if (this.chainId)
      return this.chainId;
    if (this.namespace.defaultChain)
      return this.namespace.defaultChain;
    const i = this.namespace.chains[0];
    if (!i)
      throw new Error("ChainId not found");
    return i.split(":")[1];
  }
  request(i) {
    return this.namespace.methods.includes(i.request.method) ? this.client.request(i) : this.getHttpProvider().request(i.request);
  }
  setDefaultChain(i, r) {
    this.httpProviders[i] || this.setHttpProvider(i, r), this.chainId = i, this.events.emit(si.DEFAULT_CHAIN_CHANGED, `${this.name}:${i}`);
  }
  getAccounts() {
    const i = this.namespace.accounts;
    return i ? i.filter((r) => r.split(":")[1] === this.chainId.toString()).map((r) => r.split(":")[2]) || [] : [];
  }
  createHttpProviders() {
    const i = {};
    return this.namespace.chains.forEach((r) => {
      var n;
      const a = Ui(r);
      i[a] = this.createHttpProvider(a, (n = this.namespace.rpcMap) == null ? void 0 : n[r]);
    }), i;
  }
  getHttpProvider() {
    const i = `${this.name}:${this.chainId}`, r = this.httpProviders[i];
    if (typeof r > "u")
      throw new Error(`JSON-RPC provider for ${i} not found`);
    return r;
  }
  setHttpProvider(i, r) {
    const n = this.createHttpProvider(i, r);
    n && (this.httpProviders[i] = n);
  }
  createHttpProvider(i, r) {
    const n = r || _i(i, this.namespace, this.client.core.projectId);
    if (!n)
      throw new Error(`No RPC url provided for chainId: ${i}`);
    return new ii(new bi(n, st("disableProviderPing")));
  }
}
class Cb {
  constructor(i) {
    this.name = "eip155", this.namespace = i.namespace, this.events = st("events"), this.client = st("client"), this.httpProviders = this.createHttpProviders(), this.chainId = parseInt(this.getDefaultChain());
  }
  async request(i) {
    switch (i.request.method) {
      case "eth_requestAccounts":
        return this.getAccounts();
      case "eth_accounts":
        return this.getAccounts();
      case "wallet_switchEthereumChain":
        return await this.handleSwitchChain(i);
      case "eth_chainId":
        return parseInt(this.getDefaultChain());
    }
    return this.namespace.methods.includes(i.request.method) ? await this.client.request(i) : this.getHttpProvider().request(i.request);
  }
  updateNamespace(i) {
    this.namespace = Object.assign(this.namespace, i);
  }
  setDefaultChain(i, r) {
    this.httpProviders[i] || this.setHttpProvider(parseInt(i), r), this.chainId = parseInt(i), this.events.emit(si.DEFAULT_CHAIN_CHANGED, `${this.name}:${i}`);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  getDefaultChain() {
    if (this.chainId)
      return this.chainId.toString();
    if (this.namespace.defaultChain)
      return this.namespace.defaultChain;
    const i = this.namespace.chains[0];
    if (!i)
      throw new Error("ChainId not found");
    return i.split(":")[1];
  }
  createHttpProvider(i, r) {
    const n = r || _i(`${this.name}:${i}`, this.namespace, this.client.core.projectId);
    if (!n)
      throw new Error(`No RPC url provided for chainId: ${i}`);
    return new ii(new bi(n, st("disableProviderPing")));
  }
  setHttpProvider(i, r) {
    const n = this.createHttpProvider(i, r);
    n && (this.httpProviders[i] = n);
  }
  createHttpProviders() {
    const i = {};
    return this.namespace.chains.forEach((r) => {
      var n;
      const a = parseInt(Ui(r));
      i[a] = this.createHttpProvider(a, (n = this.namespace.rpcMap) == null ? void 0 : n[r]);
    }), i;
  }
  getAccounts() {
    const i = this.namespace.accounts;
    return i ? [...new Set(i.filter((r) => r.split(":")[1] === this.chainId.toString()).map((r) => r.split(":")[2]))] : [];
  }
  getHttpProvider() {
    const i = this.chainId, r = this.httpProviders[i];
    if (typeof r > "u")
      throw new Error(`JSON-RPC provider for ${i} not found`);
    return r;
  }
  async handleSwitchChain(i) {
    var r, n;
    let a = i.request.params ? (r = i.request.params[0]) == null ? void 0 : r.chainId : "0x0";
    a = a.startsWith("0x") ? a : `0x${a}`;
    const l = parseInt(a, 16);
    if (this.isChainApproved(l))
      this.setDefaultChain(`${l}`);
    else if (this.namespace.methods.includes("wallet_switchEthereumChain"))
      await this.client.request({ topic: i.topic, request: { method: i.request.method, params: [{ chainId: a }] }, chainId: (n = this.namespace.chains) == null ? void 0 : n[0] }), this.setDefaultChain(`${l}`);
    else
      throw new Error(`Failed to switch to chain 'eip155:${l}'. The chain is not approved or the wallet does not support 'wallet_switchEthereumChain' method.`);
    return null;
  }
  isChainApproved(i) {
    return this.namespace.chains.includes(`${this.name}:${i}`);
  }
}
class Ab {
  constructor(i) {
    this.name = "solana", this.namespace = i.namespace, this.events = st("events"), this.client = st("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders();
  }
  updateNamespace(i) {
    this.namespace = Object.assign(this.namespace, i);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  request(i) {
    return this.namespace.methods.includes(i.request.method) ? this.client.request(i) : this.getHttpProvider().request(i.request);
  }
  setDefaultChain(i, r) {
    this.httpProviders[i] || this.setHttpProvider(i, r), this.chainId = i, this.events.emit(si.DEFAULT_CHAIN_CHANGED, `${this.name}:${i}`);
  }
  getDefaultChain() {
    if (this.chainId)
      return this.chainId;
    if (this.namespace.defaultChain)
      return this.namespace.defaultChain;
    const i = this.namespace.chains[0];
    if (!i)
      throw new Error("ChainId not found");
    return i.split(":")[1];
  }
  getAccounts() {
    const i = this.namespace.accounts;
    return i ? [...new Set(i.filter((r) => r.split(":")[1] === this.chainId.toString()).map((r) => r.split(":")[2]))] : [];
  }
  createHttpProviders() {
    const i = {};
    return this.namespace.chains.forEach((r) => {
      var n;
      const a = Ui(r);
      i[a] = this.createHttpProvider(a, (n = this.namespace.rpcMap) == null ? void 0 : n[r]);
    }), i;
  }
  getHttpProvider() {
    const i = `${this.name}:${this.chainId}`, r = this.httpProviders[i];
    if (typeof r > "u")
      throw new Error(`JSON-RPC provider for ${i} not found`);
    return r;
  }
  setHttpProvider(i, r) {
    const n = this.createHttpProvider(i, r);
    n && (this.httpProviders[i] = n);
  }
  createHttpProvider(i, r) {
    const n = r || _i(i, this.namespace, this.client.core.projectId);
    if (!n)
      throw new Error(`No RPC url provided for chainId: ${i}`);
    return new ii(new bi(n, st("disableProviderPing")));
  }
}
class Ob {
  constructor(i) {
    this.name = "cosmos", this.namespace = i.namespace, this.events = st("events"), this.client = st("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders();
  }
  updateNamespace(i) {
    this.namespace = Object.assign(this.namespace, i);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  getDefaultChain() {
    if (this.chainId)
      return this.chainId;
    if (this.namespace.defaultChain)
      return this.namespace.defaultChain;
    const i = this.namespace.chains[0];
    if (!i)
      throw new Error("ChainId not found");
    return i.split(":")[1];
  }
  request(i) {
    return this.namespace.methods.includes(i.request.method) ? this.client.request(i) : this.getHttpProvider().request(i.request);
  }
  setDefaultChain(i, r) {
    this.httpProviders[i] || this.setHttpProvider(i, r), this.chainId = i, this.events.emit(si.DEFAULT_CHAIN_CHANGED, `${this.name}:${this.chainId}`);
  }
  getAccounts() {
    const i = this.namespace.accounts;
    return i ? [...new Set(i.filter((r) => r.split(":")[1] === this.chainId.toString()).map((r) => r.split(":")[2]))] : [];
  }
  createHttpProviders() {
    const i = {};
    return this.namespace.chains.forEach((r) => {
      var n;
      const a = Ui(r);
      i[a] = this.createHttpProvider(a, (n = this.namespace.rpcMap) == null ? void 0 : n[r]);
    }), i;
  }
  getHttpProvider() {
    const i = `${this.name}:${this.chainId}`, r = this.httpProviders[i];
    if (typeof r > "u")
      throw new Error(`JSON-RPC provider for ${i} not found`);
    return r;
  }
  setHttpProvider(i, r) {
    const n = this.createHttpProvider(i, r);
    n && (this.httpProviders[i] = n);
  }
  createHttpProvider(i, r) {
    const n = r || _i(i, this.namespace, this.client.core.projectId);
    if (!n)
      throw new Error(`No RPC url provided for chainId: ${i}`);
    return new ii(new bi(n, st("disableProviderPing")));
  }
}
class Rb {
  constructor(i) {
    this.name = "cip34", this.namespace = i.namespace, this.events = st("events"), this.client = st("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders();
  }
  updateNamespace(i) {
    this.namespace = Object.assign(this.namespace, i);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  getDefaultChain() {
    if (this.chainId)
      return this.chainId;
    if (this.namespace.defaultChain)
      return this.namespace.defaultChain;
    const i = this.namespace.chains[0];
    if (!i)
      throw new Error("ChainId not found");
    return i.split(":")[1];
  }
  request(i) {
    return this.namespace.methods.includes(i.request.method) ? this.client.request(i) : this.getHttpProvider().request(i.request);
  }
  setDefaultChain(i, r) {
    this.httpProviders[i] || this.setHttpProvider(i, r), this.chainId = i, this.events.emit(si.DEFAULT_CHAIN_CHANGED, `${this.name}:${this.chainId}`);
  }
  getAccounts() {
    const i = this.namespace.accounts;
    return i ? [...new Set(i.filter((r) => r.split(":")[1] === this.chainId.toString()).map((r) => r.split(":")[2]))] : [];
  }
  createHttpProviders() {
    const i = {};
    return this.namespace.chains.forEach((r) => {
      const n = this.getCardanoRPCUrl(r), a = Ui(r);
      i[a] = this.createHttpProvider(a, n);
    }), i;
  }
  getHttpProvider() {
    const i = `${this.name}:${this.chainId}`, r = this.httpProviders[i];
    if (typeof r > "u")
      throw new Error(`JSON-RPC provider for ${i} not found`);
    return r;
  }
  getCardanoRPCUrl(i) {
    const r = this.namespace.rpcMap;
    if (r)
      return r[i];
  }
  setHttpProvider(i, r) {
    const n = this.createHttpProvider(i, r);
    n && (this.httpProviders[i] = n);
  }
  createHttpProvider(i, r) {
    const n = r || this.getCardanoRPCUrl(i);
    if (!n)
      throw new Error(`No RPC url provided for chainId: ${i}`);
    return new ii(new bi(n, st("disableProviderPing")));
  }
}
class Tb {
  constructor(i) {
    this.name = "elrond", this.namespace = i.namespace, this.events = st("events"), this.client = st("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders();
  }
  updateNamespace(i) {
    this.namespace = Object.assign(this.namespace, i);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  request(i) {
    return this.namespace.methods.includes(i.request.method) ? this.client.request(i) : this.getHttpProvider().request(i.request);
  }
  setDefaultChain(i, r) {
    this.httpProviders[i] || this.setHttpProvider(i, r), this.chainId = i, this.events.emit(si.DEFAULT_CHAIN_CHANGED, `${this.name}:${i}`);
  }
  getDefaultChain() {
    if (this.chainId)
      return this.chainId;
    if (this.namespace.defaultChain)
      return this.namespace.defaultChain;
    const i = this.namespace.chains[0];
    if (!i)
      throw new Error("ChainId not found");
    return i.split(":")[1];
  }
  getAccounts() {
    const i = this.namespace.accounts;
    return i ? [...new Set(i.filter((r) => r.split(":")[1] === this.chainId.toString()).map((r) => r.split(":")[2]))] : [];
  }
  createHttpProviders() {
    const i = {};
    return this.namespace.chains.forEach((r) => {
      var n;
      const a = Ui(r);
      i[a] = this.createHttpProvider(a, (n = this.namespace.rpcMap) == null ? void 0 : n[r]);
    }), i;
  }
  getHttpProvider() {
    const i = `${this.name}:${this.chainId}`, r = this.httpProviders[i];
    if (typeof r > "u")
      throw new Error(`JSON-RPC provider for ${i} not found`);
    return r;
  }
  setHttpProvider(i, r) {
    const n = this.createHttpProvider(i, r);
    n && (this.httpProviders[i] = n);
  }
  createHttpProvider(i, r) {
    const n = r || _i(i, this.namespace, this.client.core.projectId);
    if (!n)
      throw new Error(`No RPC url provided for chainId: ${i}`);
    return new ii(new bi(n, st("disableProviderPing")));
  }
}
class Nb {
  constructor(i) {
    this.name = "multiversx", this.namespace = i.namespace, this.events = st("events"), this.client = st("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders();
  }
  updateNamespace(i) {
    this.namespace = Object.assign(this.namespace, i);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  request(i) {
    return this.namespace.methods.includes(i.request.method) ? this.client.request(i) : this.getHttpProvider().request(i.request);
  }
  setDefaultChain(i, r) {
    this.httpProviders[i] || this.setHttpProvider(i, r), this.chainId = i, this.events.emit(si.DEFAULT_CHAIN_CHANGED, `${this.name}:${i}`);
  }
  getDefaultChain() {
    if (this.chainId)
      return this.chainId;
    if (this.namespace.defaultChain)
      return this.namespace.defaultChain;
    const i = this.namespace.chains[0];
    if (!i)
      throw new Error("ChainId not found");
    return i.split(":")[1];
  }
  getAccounts() {
    const i = this.namespace.accounts;
    return i ? [...new Set(i.filter((r) => r.split(":")[1] === this.chainId.toString()).map((r) => r.split(":")[2]))] : [];
  }
  createHttpProviders() {
    const i = {};
    return this.namespace.chains.forEach((r) => {
      var n;
      const a = Ui(r);
      i[a] = this.createHttpProvider(a, (n = this.namespace.rpcMap) == null ? void 0 : n[r]);
    }), i;
  }
  getHttpProvider() {
    const i = `${this.name}:${this.chainId}`, r = this.httpProviders[i];
    if (typeof r > "u")
      throw new Error(`JSON-RPC provider for ${i} not found`);
    return r;
  }
  setHttpProvider(i, r) {
    const n = this.createHttpProvider(i, r);
    n && (this.httpProviders[i] = n);
  }
  createHttpProvider(i, r) {
    const n = r || _i(i, this.namespace, this.client.core.projectId);
    if (!n)
      throw new Error(`No RPC url provided for chainId: ${i}`);
    return new ii(new bi(n, st("disableProviderPing")));
  }
}
class Fb {
  constructor(i) {
    this.name = "near", this.namespace = i.namespace, this.events = st("events"), this.client = st("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders();
  }
  updateNamespace(i) {
    this.namespace = Object.assign(this.namespace, i);
  }
  requestAccounts() {
    return this.getAccounts();
  }
  getDefaultChain() {
    if (this.chainId)
      return this.chainId;
    if (this.namespace.defaultChain)
      return this.namespace.defaultChain;
    const i = this.namespace.chains[0];
    if (!i)
      throw new Error("ChainId not found");
    return i.split(":")[1];
  }
  request(i) {
    return this.namespace.methods.includes(i.request.method) ? this.client.request(i) : this.getHttpProvider().request(i.request);
  }
  setDefaultChain(i, r) {
    if (this.chainId = i, !this.httpProviders[i]) {
      const n = r || _i(`${this.name}:${i}`, this.namespace);
      if (!n)
        throw new Error(`No RPC url provided for chainId: ${i}`);
      this.setHttpProvider(i, n);
    }
    this.events.emit(si.DEFAULT_CHAIN_CHANGED, `${this.name}:${this.chainId}`);
  }
  getAccounts() {
    const i = this.namespace.accounts;
    return i ? i.filter((r) => r.split(":")[1] === this.chainId.toString()).map((r) => r.split(":")[2]) || [] : [];
  }
  createHttpProviders() {
    const i = {};
    return this.namespace.chains.forEach((r) => {
      var n;
      i[r] = this.createHttpProvider(r, (n = this.namespace.rpcMap) == null ? void 0 : n[r]);
    }), i;
  }
  getHttpProvider() {
    const i = `${this.name}:${this.chainId}`, r = this.httpProviders[i];
    if (typeof r > "u")
      throw new Error(`JSON-RPC provider for ${i} not found`);
    return r;
  }
  setHttpProvider(i, r) {
    const n = this.createHttpProvider(i, r);
    n && (this.httpProviders[i] = n);
  }
  createHttpProvider(i, r) {
    const n = r || _i(i, this.namespace);
    return typeof n > "u" ? void 0 : new ii(new bi(n, st("disableProviderPing")));
  }
}
var $b = Object.defineProperty, Db = Object.defineProperties, qb = Object.getOwnPropertyDescriptors, ml = Object.getOwnPropertySymbols, Lb = Object.prototype.hasOwnProperty, Mb = Object.prototype.propertyIsEnumerable, wl = (h, i, r) => i in h ? $b(h, i, { enumerable: !0, configurable: !0, writable: !0, value: r }) : h[i] = r, sa = (h, i) => {
  for (var r in i || (i = {}))
    Lb.call(i, r) && wl(h, r, i[r]);
  if (ml)
    for (var r of ml(i))
      Mb.call(i, r) && wl(h, r, i[r]);
  return h;
}, ec = (h, i) => Db(h, qb(i));
class _c {
  constructor(i) {
    this.events = new hc(), this.rpcProviders = {}, this.shouldAbortPairingAttempt = !1, this.maxPairingAttempts = 10, this.disableProviderPing = !1, this.providerOpts = i, this.logger = typeof (i == null ? void 0 : i.logger) < "u" && typeof (i == null ? void 0 : i.logger) != "string" ? i.logger : Ae.pino(Ae.getDefaultLoggerOptions({ level: (i == null ? void 0 : i.logger) || pl })), this.disableProviderPing = (i == null ? void 0 : i.disableProviderPing) || !1;
  }
  static async init(i) {
    const r = new _c(i);
    return await r.initialize(), r;
  }
  async request(i, r) {
    const [n, a] = this.validateChain(r);
    if (!this.session)
      throw new Error("Please call connect() before request()");
    return await this.getProvider(n).request({ request: sa({}, i), chainId: `${n}:${a}`, topic: this.session.topic });
  }
  sendAsync(i, r, n) {
    this.request(i, n).then((a) => r(null, a)).catch((a) => r(a, void 0));
  }
  async enable() {
    if (!this.client)
      throw new Error("Sign Client not initialized");
    return this.session || await this.connect({ namespaces: this.namespaces, optionalNamespaces: this.optionalNamespaces, sessionProperties: this.sessionProperties }), await this.requestAccounts();
  }
  async disconnect() {
    var i;
    if (!this.session)
      throw new Error("Please call connect() before enable()");
    await this.client.disconnect({ topic: (i = this.session) == null ? void 0 : i.topic, reason: er("USER_DISCONNECTED") }), await this.cleanup();
  }
  async connect(i) {
    if (!this.client)
      throw new Error("Sign Client not initialized");
    if (this.setNamespaces(i), await this.cleanupPendingPairings(), !i.skipPairing)
      return await this.pair(i.pairingTopic);
  }
  on(i, r) {
    this.events.on(i, r);
  }
  once(i, r) {
    this.events.once(i, r);
  }
  removeListener(i, r) {
    this.events.removeListener(i, r);
  }
  off(i, r) {
    this.events.off(i, r);
  }
  get isWalletConnect() {
    return !0;
  }
  async pair(i) {
    this.shouldAbortPairingAttempt = !1;
    let r = 0;
    do {
      if (this.shouldAbortPairingAttempt)
        throw new Error("Pairing aborted");
      if (r >= this.maxPairingAttempts)
        throw new Error("Max auto pairing attempts reached");
      const { uri: n, approval: a } = await this.client.connect({ pairingTopic: i, requiredNamespaces: this.namespaces, optionalNamespaces: this.optionalNamespaces, sessionProperties: this.sessionProperties });
      n && (this.uri = n, this.events.emit("display_uri", n)), await a().then((l) => {
        this.session = l, this.namespaces || (this.namespaces = Sb(l.namespaces), this.persist("namespaces", this.namespaces));
      }).catch((l) => {
        if (l.message !== sf)
          throw l;
        r++;
      });
    } while (!this.session);
    return this.onConnect(), this.session;
  }
  setDefaultChain(i, r) {
    try {
      if (!this.session)
        return;
      const [n, a] = this.validateChain(i);
      this.getProvider(n).setDefaultChain(a, r);
    } catch (n) {
      if (!/Please call connect/.test(n.message))
        throw n;
    }
  }
  async cleanupPendingPairings(i = {}) {
    this.logger.info("Cleaning up inactive pairings...");
    const r = this.client.pairing.getAll();
    if (fs(r)) {
      for (const n of r)
        i.deletePairings ? this.client.core.expirer.set(n.topic, 0) : await this.client.core.relayer.subscriber.unsubscribe(n.topic);
      this.logger.info(`Inactive pairings cleared: ${r.length}`);
    }
  }
  abortPairingAttempt() {
    this.shouldAbortPairingAttempt = !0;
  }
  async checkStorage() {
    if (this.namespaces = await this.getFromStore("namespaces"), this.optionalNamespaces = await this.getFromStore("optionalNamespaces") || {}, this.client.session.length) {
      const i = this.client.session.keys.length - 1;
      this.session = this.client.session.get(this.client.session.keys[i]), this.createProviders();
    }
  }
  async initialize() {
    this.logger.trace("Initialized"), await this.createClient(), await this.checkStorage(), this.registerEventListeners();
  }
  async createClient() {
    this.client = this.providerOpts.client || await lb.init({ logger: this.providerOpts.logger || pl, relayUrl: this.providerOpts.relayUrl || fb, projectId: this.providerOpts.projectId, metadata: this.providerOpts.metadata, storageOptions: this.providerOpts.storageOptions, storage: this.providerOpts.storage, name: this.providerOpts.name }), this.logger.trace("SignClient Initialized");
  }
  createProviders() {
    if (!this.client)
      throw new Error("Sign Client not initialized");
    if (!this.session)
      throw new Error("Session not initialized. Please call connect() before enable()");
    const i = [...new Set(Object.keys(this.session.namespaces).map((r) => ks(r)))];
    Xo("client", this.client), Xo("events", this.events), Xo("disableProviderPing", this.disableProviderPing), i.forEach((r) => {
      if (!this.session)
        return;
      const n = Eb(r, this.session), a = af(n), l = xb(this.namespaces, this.optionalNamespaces), d = ec(sa({}, l[r]), { accounts: n, chains: a });
      switch (r) {
        case "eip155":
          this.rpcProviders[r] = new Cb({ namespace: d });
          break;
        case "solana":
          this.rpcProviders[r] = new Ab({ namespace: d });
          break;
        case "cosmos":
          this.rpcProviders[r] = new Ob({ namespace: d });
          break;
        case "polkadot":
          this.rpcProviders[r] = new Pb({ namespace: d });
          break;
        case "cip34":
          this.rpcProviders[r] = new Rb({ namespace: d });
          break;
        case "elrond":
          this.rpcProviders[r] = new Tb({ namespace: d });
          break;
        case "multiversx":
          this.rpcProviders[r] = new Nb({ namespace: d });
          break;
        case "near":
          this.rpcProviders[r] = new Fb({ namespace: d });
          break;
      }
    });
  }
  registerEventListeners() {
    if (typeof this.client > "u")
      throw new Error("Sign Client is not initialized");
    this.client.on("session_ping", (i) => {
      this.events.emit("session_ping", i);
    }), this.client.on("session_event", (i) => {
      const { params: r } = i, { event: n } = r;
      if (n.name === "accountsChanged") {
        const a = n.data;
        a && fs(a) && this.events.emit("accountsChanged", a.map(Ib));
      } else if (n.name === "chainChanged") {
        const a = r.chainId, l = r.event.data, d = ks(a), v = Zo(a) !== Zo(l) ? `${d}:${Zo(l)}` : a;
        this.onChainChanged(v);
      } else
        this.events.emit(n.name, n.data);
      this.events.emit("session_event", i);
    }), this.client.on("session_update", ({ topic: i, params: r }) => {
      var n;
      const { namespaces: a } = r, l = (n = this.client) == null ? void 0 : n.session.get(i);
      this.session = ec(sa({}, l), { namespaces: a }), this.onSessionUpdate(), this.events.emit("session_update", { topic: i, params: r });
    }), this.client.on("session_delete", async (i) => {
      await this.cleanup(), this.events.emit("session_delete", i), this.events.emit("disconnect", ec(sa({}, er("USER_DISCONNECTED")), { data: i.topic }));
    }), this.on(si.DEFAULT_CHAIN_CHANGED, (i) => {
      this.onChainChanged(i, !0);
    });
  }
  getProvider(i) {
    if (!this.rpcProviders[i])
      throw new Error(`Provider not found: ${i}`);
    return this.rpcProviders[i];
  }
  onSessionUpdate() {
    Object.keys(this.rpcProviders).forEach((i) => {
      var r;
      this.getProvider(i).updateNamespace((r = this.session) == null ? void 0 : r.namespaces[i]);
    });
  }
  setNamespaces(i) {
    const { namespaces: r, optionalNamespaces: n, sessionProperties: a } = i;
    r && Object.keys(r).length && (this.namespaces = r), n && Object.keys(n).length && (this.optionalNamespaces = n), this.sessionProperties = a, this.persist("namespaces", r), this.persist("optionalNamespaces", n);
  }
  validateChain(i) {
    const [r, n] = (i == null ? void 0 : i.split(":")) || ["", ""];
    if (!this.namespaces || !Object.keys(this.namespaces).length)
      return [r, n];
    if (r && !Object.keys(this.namespaces || {}).map((d) => ks(d)).includes(r))
      throw new Error(`Namespace '${r}' is not configured. Please call connect() first with namespace config.`);
    if (r && n)
      return [r, n];
    const a = ks(Object.keys(this.namespaces)[0]), l = this.rpcProviders[a].getDefaultChain();
    return [a, l];
  }
  async requestAccounts() {
    const [i] = this.validateChain();
    return await this.getProvider(i).requestAccounts();
  }
  onChainChanged(i, r = !1) {
    var n;
    if (!this.namespaces)
      return;
    const [a, l] = this.validateChain(i);
    r || this.getProvider(a).setDefaultChain(l), ((n = this.namespaces[a]) != null ? n : this.namespaces[`${a}:${l}`]).defaultChain = l, this.persist("namespaces", this.namespaces), this.events.emit("chainChanged", l);
  }
  onConnect() {
    this.createProviders(), this.events.emit("connect", { session: this.session });
  }
  async cleanup() {
    this.session = void 0, this.namespaces = void 0, this.optionalNamespaces = void 0, this.sessionProperties = void 0, this.persist("namespaces", void 0), this.persist("optionalNamespaces", void 0), this.persist("sessionProperties", void 0), await this.cleanupPendingPairings({ deletePairings: !0 });
  }
  persist(i, r) {
    this.client.core.storage.setItem(`${dl}/${i}`, r);
  }
  async getFromStore(i) {
    return await this.client.core.storage.getItem(`${dl}/${i}`);
  }
}
const jb = _c, zb = "wc", Ub = "ethereum_provider", Hb = `${zb}@2:${Ub}:`, kb = "https://rpc.walletconnect.com/v1/", oc = ["eth_sendTransaction", "personal_sign"], Kb = ["eth_accounts", "eth_requestAccounts", "eth_sendRawTransaction", "eth_sign", "eth_signTransaction", "eth_signTypedData", "eth_signTypedData_v3", "eth_signTypedData_v4", "eth_sendTransaction", "personal_sign", "wallet_switchEthereumChain", "wallet_addEthereumChain", "wallet_getPermissions", "wallet_requestPermissions", "wallet_registerOnboarding", "wallet_watchAsset", "wallet_scanQRCode"], cc = ["chainChanged", "accountsChanged"], Vb = ["chainChanged", "accountsChanged", "message", "disconnect", "connect"];
var Bb = Object.defineProperty, Gb = Object.defineProperties, Wb = Object.getOwnPropertyDescriptors, _l = Object.getOwnPropertySymbols, Jb = Object.prototype.hasOwnProperty, Qb = Object.prototype.propertyIsEnumerable, bl = (h, i, r) => i in h ? Bb(h, i, { enumerable: !0, configurable: !0, writable: !0, value: r }) : h[i] = r, Vs = (h, i) => {
  for (var r in i || (i = {}))
    Jb.call(i, r) && bl(h, r, i[r]);
  if (_l)
    for (var r of _l(i))
      Qb.call(i, r) && bl(h, r, i[r]);
  return h;
}, El = (h, i) => Gb(h, Wb(i));
function ha(h) {
  return Number(h[0].split(":")[1]);
}
function tc(h) {
  return `0x${h.toString(16)}`;
}
function Yb(h) {
  const { chains: i, optionalChains: r, methods: n, optionalMethods: a, events: l, optionalEvents: d, rpcMap: v } = h;
  if (!fs(i))
    throw new Error("Invalid chains");
  const w = { chains: i, methods: n || oc, events: l || cc, rpcMap: Vs({}, i.length ? { [ha(i)]: v[ha(i)] } : {}) }, I = l == null ? void 0 : l.filter((k) => !cc.includes(k)), F = n == null ? void 0 : n.filter((k) => !oc.includes(k));
  if (!r && !d && !a && !(I != null && I.length) && !(F != null && F.length))
    return { required: i.length ? w : void 0 };
  const U = (I == null ? void 0 : I.length) && (F == null ? void 0 : F.length) || !r, H = { chains: [...new Set(U ? w.chains.concat(r || []) : r)], methods: [...new Set(w.methods.concat(a != null && a.length ? a : Kb))], events: [...new Set(w.events.concat(d != null && d.length ? d : Vb))], rpcMap: v };
  return { required: i.length ? w : void 0, optional: r.length ? H : void 0 };
}
class bc {
  constructor() {
    this.events = new Ur.EventEmitter(), this.namespace = "eip155", this.accounts = [], this.chainId = 1, this.STORAGE_KEY = Hb, this.on = (i, r) => (this.events.on(i, r), this), this.once = (i, r) => (this.events.once(i, r), this), this.removeListener = (i, r) => (this.events.removeListener(i, r), this), this.off = (i, r) => (this.events.off(i, r), this), this.parseAccount = (i) => this.isCompatibleChainId(i) ? this.parseAccountId(i).address : i, this.signer = {}, this.rpc = {};
  }
  static async init(i) {
    const r = new bc();
    return await r.initialize(i), r;
  }
  async request(i) {
    return await this.signer.request(i, this.formatChainId(this.chainId));
  }
  sendAsync(i, r) {
    this.signer.sendAsync(i, r, this.formatChainId(this.chainId));
  }
  get connected() {
    return this.signer.client ? this.signer.client.core.relayer.connected : !1;
  }
  get connecting() {
    return this.signer.client ? this.signer.client.core.relayer.connecting : !1;
  }
  async enable() {
    return this.session || await this.connect(), await this.request({ method: "eth_requestAccounts" });
  }
  async connect(i) {
    if (!this.signer.client)
      throw new Error("Provider not initialized. Call init() first");
    this.loadConnectOpts(i);
    const { required: r, optional: n } = Yb(this.rpc);
    try {
      const a = await new Promise(async (d, v) => {
        var w;
        this.rpc.showQrModal && ((w = this.modal) == null || w.subscribeModal((I) => {
          !I.open && !this.signer.session && (this.signer.abortPairingAttempt(), v(new Error("Connection request reset. Please try again.")));
        })), await this.signer.connect(El(Vs({ namespaces: Vs({}, r && { [this.namespace]: r }) }, n && { optionalNamespaces: { [this.namespace]: n } }), { pairingTopic: i == null ? void 0 : i.pairingTopic })).then((I) => {
          d(I);
        }).catch((I) => {
          v(new Error(I.message));
        });
      });
      if (!a)
        return;
      const l = P1(a.namespaces, [this.namespace]);
      this.setChainIds(this.rpc.chains.length ? this.rpc.chains : l), this.setAccounts(l), this.events.emit("connect", { chainId: tc(this.chainId) });
    } catch (a) {
      throw this.signer.logger.error(a), a;
    } finally {
      this.modal && this.modal.closeModal();
    }
  }
  async disconnect() {
    this.session && await this.signer.disconnect(), this.reset();
  }
  get isWalletConnect() {
    return !0;
  }
  get session() {
    return this.signer.session;
  }
  registerEventListeners() {
    this.signer.on("session_event", (i) => {
      const { params: r } = i, { event: n } = r;
      n.name === "accountsChanged" ? (this.accounts = this.parseAccounts(n.data), this.events.emit("accountsChanged", this.accounts)) : n.name === "chainChanged" ? this.setChainId(this.formatChainId(n.data)) : this.events.emit(n.name, n.data), this.events.emit("session_event", i);
    }), this.signer.on("chainChanged", (i) => {
      const r = parseInt(i);
      this.chainId = r, this.events.emit("chainChanged", tc(this.chainId)), this.persist();
    }), this.signer.on("session_update", (i) => {
      this.events.emit("session_update", i);
    }), this.signer.on("session_delete", (i) => {
      this.reset(), this.events.emit("session_delete", i), this.events.emit("disconnect", El(Vs({}, er("USER_DISCONNECTED")), { data: i.topic, name: "USER_DISCONNECTED" }));
    }), this.signer.on("display_uri", (i) => {
      var r, n;
      this.rpc.showQrModal && ((r = this.modal) == null || r.closeModal(), (n = this.modal) == null || n.openModal({ uri: i })), this.events.emit("display_uri", i);
    });
  }
  switchEthereumChain(i) {
    this.request({ method: "wallet_switchEthereumChain", params: [{ chainId: i.toString(16) }] });
  }
  isCompatibleChainId(i) {
    return typeof i == "string" ? i.startsWith(`${this.namespace}:`) : !1;
  }
  formatChainId(i) {
    return `${this.namespace}:${i}`;
  }
  parseChainId(i) {
    return Number(i.split(":")[1]);
  }
  setChainIds(i) {
    const r = i.filter((n) => this.isCompatibleChainId(n)).map((n) => this.parseChainId(n));
    r.length && (this.chainId = r[0], this.events.emit("chainChanged", tc(this.chainId)), this.persist());
  }
  setChainId(i) {
    if (this.isCompatibleChainId(i)) {
      const r = this.parseChainId(i);
      this.chainId = r, this.switchEthereumChain(r);
    }
  }
  parseAccountId(i) {
    const [r, n, a] = i.split(":");
    return { chainId: `${r}:${n}`, address: a };
  }
  setAccounts(i) {
    this.accounts = i.filter((r) => this.parseChainId(this.parseAccountId(r).chainId) === this.chainId).map((r) => this.parseAccountId(r).address), this.events.emit("accountsChanged", this.accounts);
  }
  getRpcConfig(i) {
    var r, n;
    const a = (r = i == null ? void 0 : i.chains) != null ? r : [], l = (n = i == null ? void 0 : i.optionalChains) != null ? n : [], d = a.concat(l);
    if (!d.length)
      throw new Error("No chains specified in either `chains` or `optionalChains`");
    const v = a.length ? (i == null ? void 0 : i.methods) || oc : [], w = a.length ? (i == null ? void 0 : i.events) || cc : [], I = (i == null ? void 0 : i.optionalMethods) || [], F = (i == null ? void 0 : i.optionalEvents) || [], U = (i == null ? void 0 : i.rpcMap) || this.buildRpcMap(d, i.projectId), H = (i == null ? void 0 : i.qrModalOptions) || void 0;
    return { chains: a == null ? void 0 : a.map((k) => this.formatChainId(k)), optionalChains: l.map((k) => this.formatChainId(k)), methods: v, events: w, optionalMethods: I, optionalEvents: F, rpcMap: U, showQrModal: !!(i != null && i.showQrModal), qrModalOptions: H, projectId: i.projectId, metadata: i.metadata };
  }
  buildRpcMap(i, r) {
    const n = {};
    return i.forEach((a) => {
      n[a] = this.getRpcUrl(a, r);
    }), n;
  }
  async initialize(i) {
    if (this.rpc = this.getRpcConfig(i), this.chainId = this.rpc.chains.length ? ha(this.rpc.chains) : ha(this.rpc.optionalChains), this.signer = await jb.init({ projectId: this.rpc.projectId, metadata: this.rpc.metadata, disableProviderPing: i.disableProviderPing, relayUrl: i.relayUrl, storageOptions: i.storageOptions }), this.registerEventListeners(), await this.loadPersistedSession(), this.rpc.showQrModal) {
      let r;
      try {
        const { WalletConnectModal: n } = await import("./index-851dc219.mjs").then((a) => a.i);
        r = n;
      } catch {
        throw new Error("To use QR modal, please install @walletconnect/modal package");
      }
      if (r)
        try {
          this.modal = new r(Vs({ walletConnectVersion: 2, projectId: this.rpc.projectId, standaloneChains: this.rpc.chains }, this.rpc.qrModalOptions));
        } catch (n) {
          throw this.signer.logger.error(n), new Error("Could not generate WalletConnectModal Instance");
        }
    }
  }
  loadConnectOpts(i) {
    if (!i)
      return;
    const { chains: r, optionalChains: n, rpcMap: a } = i;
    r && fs(r) && (this.rpc.chains = r.map((l) => this.formatChainId(l)), r.forEach((l) => {
      this.rpc.rpcMap[l] = (a == null ? void 0 : a[l]) || this.getRpcUrl(l);
    })), n && fs(n) && (this.rpc.optionalChains = [], this.rpc.optionalChains = n == null ? void 0 : n.map((l) => this.formatChainId(l)), n.forEach((l) => {
      this.rpc.rpcMap[l] = (a == null ? void 0 : a[l]) || this.getRpcUrl(l);
    }));
  }
  getRpcUrl(i, r) {
    var n;
    return ((n = this.rpc.rpcMap) == null ? void 0 : n[i]) || `${kb}?chainId=eip155:${i}&projectId=${r || this.rpc.projectId}`;
  }
  async loadPersistedSession() {
    if (!this.session)
      return;
    const i = await this.signer.client.core.storage.getItem(`${this.STORAGE_KEY}/chainId`), r = this.session.namespaces[`${this.namespace}:${i}`] ? this.session.namespaces[`${this.namespace}:${i}`] : this.session.namespaces[this.namespace];
    this.setChainIds(i ? [this.formatChainId(i)] : r == null ? void 0 : r.accounts), this.setAccounts(r == null ? void 0 : r.accounts);
  }
  reset() {
    this.chainId = 1, this.accounts = [];
  }
  persist() {
    this.session && this.signer.client.core.storage.setItem(`${this.STORAGE_KEY}/chainId`, this.chainId);
  }
  parseAccounts(i) {
    return typeof i == "string" || i instanceof String ? [this.parseAccount(i)] : i.map((r) => this.parseAccount(r));
  }
}
const uE = bc;
export {
  uE as EthereumProvider,
  Vb as OPTIONAL_EVENTS,
  Kb as OPTIONAL_METHODS,
  cc as REQUIRED_EVENTS,
  oc as REQUIRED_METHODS,
  bc as default
};
