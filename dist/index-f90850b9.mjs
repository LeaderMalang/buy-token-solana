import { i as xc, az as Ot, e as G, aA as Cc, aB as ms, f as Wr, aC as L, p as A0 } from "./index-560d1e7a.mjs";
import { p as T0, h as M0 } from "./hooks.module-75eb3fb8.mjs";
var Xf = {}, si = {}, vs = {};
Object.defineProperty(vs, "__esModule", { value: !0 });
vs.walletLogo = void 0;
const O0 = (t, e) => {
  let r;
  switch (t) {
    case "standard":
      return r = e, `data:image/svg+xml,%3Csvg width='${e}' height='${r}' viewBox='0 0 1024 1024' fill='none' xmlns='http://www.w3.org/2000/svg'%3E %3Crect width='1024' height='1024' fill='%230052FF'/%3E %3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M152 512C152 710.823 313.177 872 512 872C710.823 872 872 710.823 872 512C872 313.177 710.823 152 512 152C313.177 152 152 313.177 152 512ZM420 396C406.745 396 396 406.745 396 420V604C396 617.255 406.745 628 420 628H604C617.255 628 628 617.255 628 604V420C628 406.745 617.255 396 604 396H420Z' fill='white'/%3E %3C/svg%3E `;
    case "circle":
      return r = e, `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='${e}' height='${r}' viewBox='0 0 999.81 999.81'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%230052fe;%7D.cls-2%7Bfill:%23fefefe;%7D.cls-3%7Bfill:%230152fe;%7D%3C/style%3E%3C/defs%3E%3Cpath class='cls-1' d='M655-115.9h56c.83,1.59,2.36.88,3.56,1a478,478,0,0,1,75.06,10.42C891.4-81.76,978.33-32.58,1049.19,44q116.7,126,131.94,297.61c.38,4.14-.34,8.53,1.78,12.45v59c-1.58.84-.91,2.35-1,3.56a482.05,482.05,0,0,1-10.38,74.05c-24,106.72-76.64,196.76-158.83,268.93s-178.18,112.82-287.2,122.6c-4.83.43-9.86-.25-14.51,1.77H654c-1-1.68-2.69-.91-4.06-1a496.89,496.89,0,0,1-105.9-18.59c-93.54-27.42-172.78-77.59-236.91-150.94Q199.34,590.1,184.87,426.58c-.47-5.19.25-10.56-1.77-15.59V355c1.68-1,.91-2.7,1-4.06a498.12,498.12,0,0,1,18.58-105.9c26-88.75,72.64-164.9,140.6-227.57q126-116.27,297.21-131.61C645.32-114.57,650.35-113.88,655-115.9Zm377.92,500c0-192.44-156.31-349.49-347.56-350.15-194.13-.68-350.94,155.13-352.29,347.42-1.37,194.55,155.51,352.1,348.56,352.47C876.15,734.23,1032.93,577.84,1032.93,384.11Z' transform='translate(-183.1 115.9)'/%3E%3Cpath class='cls-2' d='M1032.93,384.11c0,193.73-156.78,350.12-351.29,349.74-193-.37-349.93-157.92-348.56-352.47C334.43,189.09,491.24,33.28,685.37,34,876.62,34.62,1032.94,191.67,1032.93,384.11ZM683,496.81q43.74,0,87.48,0c15.55,0,25.32-9.72,25.33-25.21q0-87.48,0-175c0-15.83-9.68-25.46-25.59-25.46H595.77c-15.88,0-25.57,9.64-25.58,25.46q0,87.23,0,174.45c0,16.18,9.59,25.7,25.84,25.71Z' transform='translate(-183.1 115.9)'/%3E%3Cpath class='cls-3' d='M683,496.81H596c-16.25,0-25.84-9.53-25.84-25.71q0-87.23,0-174.45c0-15.82,9.7-25.46,25.58-25.46H770.22c15.91,0,25.59,9.63,25.59,25.46q0,87.47,0,175c0,15.49-9.78,25.2-25.33,25.21Q726.74,496.84,683,496.81Z' transform='translate(-183.1 115.9)'/%3E%3C/svg%3E`;
    case "text":
      return r = (0.1 * e).toFixed(2), `data:image/svg+xml,%3Csvg width='${e}' height='${r}' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 528.15 53.64'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%230052ff;%7D%3C/style%3E%3C/defs%3E%3Ctitle%3ECoinbase_Wordmark_SubBrands_ALL%3C/title%3E%3Cpath class='cls-1' d='M164.45,15a15,15,0,0,0-11.74,5.4V0h-8.64V52.92h8.5V48a15,15,0,0,0,11.88,5.62c10.37,0,18.21-8.21,18.21-19.3S174.67,15,164.45,15Zm-1.3,30.67c-6.19,0-10.73-4.83-10.73-11.31S157,23,163.22,23s10.66,4.82,10.66,11.37S169.34,45.65,163.15,45.65Zm83.31-14.91-6.34-.93c-3-.43-5.18-1.44-5.18-3.82,0-2.59,2.8-3.89,6.62-3.89,4.18,0,6.84,1.8,7.42,4.76h8.35c-.94-7.49-6.7-11.88-15.55-11.88-9.15,0-15.2,4.68-15.2,11.3,0,6.34,4,10,12,11.16l6.33.94c3.1.43,4.83,1.65,4.83,4,0,2.95-3,4.17-7.2,4.17-5.12,0-8-2.09-8.43-5.25h-8.49c.79,7.27,6.48,12.38,16.84,12.38,9.44,0,15.7-4.32,15.7-11.74C258.12,35.28,253.58,31.82,246.46,30.74Zm-27.65-2.3c0-8.06-4.9-13.46-15.27-13.46-9.79,0-15.26,5-16.34,12.6h8.57c.43-3,2.73-5.4,7.63-5.4,4.39,0,6.55,1.94,6.55,4.32,0,3.09-4,3.88-8.85,4.39-6.63.72-14.84,3-14.84,11.66,0,6.7,5,11,12.89,11,6.19,0,10.08-2.59,12-6.7.28,3.67,3,6.05,6.84,6.05h5v-7.7h-4.25Zm-8.5,9.36c0,5-4.32,8.64-9.57,8.64-3.24,0-6-1.37-6-4.25,0-3.67,4.39-4.68,8.42-5.11s6-1.22,7.13-2.88ZM281.09,15c-11.09,0-19.23,8.35-19.23,19.36,0,11.6,8.72,19.3,19.37,19.3,9,0,16.06-5.33,17.86-12.89h-9c-1.3,3.31-4.47,5.19-8.71,5.19-5.55,0-9.72-3.46-10.66-9.51H299.3V33.12C299.3,22.46,291.53,15,281.09,15Zm-9.87,15.26c1.37-5.18,5.26-7.7,9.72-7.7,4.9,0,8.64,2.8,9.51,7.7ZM19.3,23a9.84,9.84,0,0,1,9.5,7h9.14c-1.65-8.93-9-15-18.57-15A19,19,0,0,0,0,34.34c0,11.09,8.28,19.3,19.37,19.3,9.36,0,16.85-6,18.5-15H28.8a9.75,9.75,0,0,1-9.43,7.06c-6.27,0-10.66-4.83-10.66-11.31S13,23,19.3,23Zm41.11-8A19,19,0,0,0,41,34.34c0,11.09,8.28,19.3,19.37,19.3A19,19,0,0,0,79.92,34.27C79.92,23.33,71.64,15,60.41,15Zm.07,30.67c-6.19,0-10.73-4.83-10.73-11.31S54.22,23,60.41,23s10.8,4.89,10.8,11.37S66.67,45.65,60.48,45.65ZM123.41,15c-5.62,0-9.29,2.3-11.45,5.54V15.7h-8.57V52.92H112V32.69C112,27,115.63,23,121,23c5,0,8.06,3.53,8.06,8.64V52.92h8.64V31C137.66,21.6,132.84,15,123.41,15ZM92,.36a5.36,5.36,0,0,0-5.55,5.47,5.55,5.55,0,0,0,11.09,0A5.35,5.35,0,0,0,92,.36Zm-9.72,23h5.4V52.92h8.64V15.7h-14Zm298.17-7.7L366.2,52.92H372L375.29,44H392l3.33,8.88h6L386.87,15.7ZM377,39.23l6.45-17.56h.1l6.56,17.56ZM362.66,15.7l-7.88,29h-.11l-8.14-29H341l-8,28.93h-.1l-8-28.87H319L329.82,53h5.45l8.19-29.24h.11L352,53h5.66L368.1,15.7Zm135.25,0v4.86h12.32V52.92h5.6V20.56h12.32V15.7ZM467.82,52.92h25.54V48.06H473.43v-12h18.35V31.35H473.43V20.56h19.93V15.7H467.82ZM443,15.7h-5.6V52.92h24.32V48.06H443Zm-30.45,0h-5.61V52.92h24.32V48.06H412.52Z'/%3E%3C/svg%3E`;
    case "textWithLogo":
      return r = (0.25 * e).toFixed(2), `data:image/svg+xml,%3Csvg width='${e}' height='${r}' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 308.44 77.61'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%230052ff;%7D%3C/style%3E%3C/defs%3E%3Cpath class='cls-1' d='M142.94,20.2l-7.88,29H135l-8.15-29h-5.55l-8,28.93h-.11l-8-28.87H99.27l10.84,37.27h5.44l8.2-29.24h.1l8.41,29.24h5.66L148.39,20.2Zm17.82,0L146.48,57.42h5.82l3.28-8.88h16.65l3.34,8.88h6L167.16,20.2Zm-3.44,23.52,6.45-17.55h.11l6.56,17.55ZM278.2,20.2v4.86h12.32V57.42h5.6V25.06h12.32V20.2ZM248.11,57.42h25.54V52.55H253.71V40.61h18.35V35.85H253.71V25.06h19.94V20.2H248.11ZM223.26,20.2h-5.61V57.42H242V52.55H223.26Zm-30.46,0h-5.6V57.42h24.32V52.55H192.8Zm-154,38A19.41,19.41,0,1,1,57.92,35.57H77.47a38.81,38.81,0,1,0,0,6.47H57.92A19.39,19.39,0,0,1,38.81,58.21Z'/%3E%3C/svg%3E`;
    case "textLight":
      return r = (0.1 * e).toFixed(2), `data:image/svg+xml,%3Csvg width='${e}' height='${r}' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 528.15 53.64'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%23fefefe;%7D%3C/style%3E%3C/defs%3E%3Ctitle%3ECoinbase_Wordmark_SubBrands_ALL%3C/title%3E%3Cpath class='cls-1' d='M164.45,15a15,15,0,0,0-11.74,5.4V0h-8.64V52.92h8.5V48a15,15,0,0,0,11.88,5.62c10.37,0,18.21-8.21,18.21-19.3S174.67,15,164.45,15Zm-1.3,30.67c-6.19,0-10.73-4.83-10.73-11.31S157,23,163.22,23s10.66,4.82,10.66,11.37S169.34,45.65,163.15,45.65Zm83.31-14.91-6.34-.93c-3-.43-5.18-1.44-5.18-3.82,0-2.59,2.8-3.89,6.62-3.89,4.18,0,6.84,1.8,7.42,4.76h8.35c-.94-7.49-6.7-11.88-15.55-11.88-9.15,0-15.2,4.68-15.2,11.3,0,6.34,4,10,12,11.16l6.33.94c3.1.43,4.83,1.65,4.83,4,0,2.95-3,4.17-7.2,4.17-5.12,0-8-2.09-8.43-5.25h-8.49c.79,7.27,6.48,12.38,16.84,12.38,9.44,0,15.7-4.32,15.7-11.74C258.12,35.28,253.58,31.82,246.46,30.74Zm-27.65-2.3c0-8.06-4.9-13.46-15.27-13.46-9.79,0-15.26,5-16.34,12.6h8.57c.43-3,2.73-5.4,7.63-5.4,4.39,0,6.55,1.94,6.55,4.32,0,3.09-4,3.88-8.85,4.39-6.63.72-14.84,3-14.84,11.66,0,6.7,5,11,12.89,11,6.19,0,10.08-2.59,12-6.7.28,3.67,3,6.05,6.84,6.05h5v-7.7h-4.25Zm-8.5,9.36c0,5-4.32,8.64-9.57,8.64-3.24,0-6-1.37-6-4.25,0-3.67,4.39-4.68,8.42-5.11s6-1.22,7.13-2.88ZM281.09,15c-11.09,0-19.23,8.35-19.23,19.36,0,11.6,8.72,19.3,19.37,19.3,9,0,16.06-5.33,17.86-12.89h-9c-1.3,3.31-4.47,5.19-8.71,5.19-5.55,0-9.72-3.46-10.66-9.51H299.3V33.12C299.3,22.46,291.53,15,281.09,15Zm-9.87,15.26c1.37-5.18,5.26-7.7,9.72-7.7,4.9,0,8.64,2.8,9.51,7.7ZM19.3,23a9.84,9.84,0,0,1,9.5,7h9.14c-1.65-8.93-9-15-18.57-15A19,19,0,0,0,0,34.34c0,11.09,8.28,19.3,19.37,19.3,9.36,0,16.85-6,18.5-15H28.8a9.75,9.75,0,0,1-9.43,7.06c-6.27,0-10.66-4.83-10.66-11.31S13,23,19.3,23Zm41.11-8A19,19,0,0,0,41,34.34c0,11.09,8.28,19.3,19.37,19.3A19,19,0,0,0,79.92,34.27C79.92,23.33,71.64,15,60.41,15Zm.07,30.67c-6.19,0-10.73-4.83-10.73-11.31S54.22,23,60.41,23s10.8,4.89,10.8,11.37S66.67,45.65,60.48,45.65ZM123.41,15c-5.62,0-9.29,2.3-11.45,5.54V15.7h-8.57V52.92H112V32.69C112,27,115.63,23,121,23c5,0,8.06,3.53,8.06,8.64V52.92h8.64V31C137.66,21.6,132.84,15,123.41,15ZM92,.36a5.36,5.36,0,0,0-5.55,5.47,5.55,5.55,0,0,0,11.09,0A5.35,5.35,0,0,0,92,.36Zm-9.72,23h5.4V52.92h8.64V15.7h-14Zm298.17-7.7L366.2,52.92H372L375.29,44H392l3.33,8.88h6L386.87,15.7ZM377,39.23l6.45-17.56h.1l6.56,17.56ZM362.66,15.7l-7.88,29h-.11l-8.14-29H341l-8,28.93h-.1l-8-28.87H319L329.82,53h5.45l8.19-29.24h.11L352,53h5.66L368.1,15.7Zm135.25,0v4.86h12.32V52.92h5.6V20.56h12.32V15.7ZM467.82,52.92h25.54V48.06H473.43v-12h18.35V31.35H473.43V20.56h19.93V15.7H467.82ZM443,15.7h-5.6V52.92h24.32V48.06H443Zm-30.45,0h-5.61V52.92h24.32V48.06H412.52Z'/%3E%3C/svg%3E`;
    case "textWithLogoLight":
      return r = (0.25 * e).toFixed(2), `data:image/svg+xml,%3Csvg width='${e}' height='${r}' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 308.44 77.61'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%23fefefe;%7D%3C/style%3E%3C/defs%3E%3Cpath class='cls-1' d='M142.94,20.2l-7.88,29H135l-8.15-29h-5.55l-8,28.93h-.11l-8-28.87H99.27l10.84,37.27h5.44l8.2-29.24h.1l8.41,29.24h5.66L148.39,20.2Zm17.82,0L146.48,57.42h5.82l3.28-8.88h16.65l3.34,8.88h6L167.16,20.2Zm-3.44,23.52,6.45-17.55h.11l6.56,17.55ZM278.2,20.2v4.86h12.32V57.42h5.6V25.06h12.32V20.2ZM248.11,57.42h25.54V52.55H253.71V40.61h18.35V35.85H253.71V25.06h19.94V20.2H248.11ZM223.26,20.2h-5.61V57.42H242V52.55H223.26Zm-30.46,0h-5.6V57.42h24.32V52.55H192.8Zm-154,38A19.41,19.41,0,1,1,57.92,35.57H77.47a38.81,38.81,0,1,0,0,6.47H57.92A19.39,19.39,0,0,1,38.81,58.21Z'/%3E%3C/svg%3E`;
    default:
      return r = e, `data:image/svg+xml,%3Csvg width='${e}' height='${r}' viewBox='0 0 1024 1024' fill='none' xmlns='http://www.w3.org/2000/svg'%3E %3Crect width='1024' height='1024' fill='%230052FF'/%3E %3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M152 512C152 710.823 313.177 872 512 872C710.823 872 872 710.823 872 512C872 313.177 710.823 152 512 152C313.177 152 152 313.177 152 512ZM420 396C406.745 396 396 406.745 396 420V604C396 617.255 406.745 628 420 628H604C617.255 628 628 617.255 628 604V420C628 406.745 617.255 396 604 396H420Z' fill='white'/%3E %3C/svg%3E `;
  }
};
vs.walletLogo = O0;
var ws = {};
Object.defineProperty(ws, "__esModule", { value: !0 });
ws.LINK_API_URL = void 0;
ws.LINK_API_URL = "https://www.walletlink.org";
var _s = {};
Object.defineProperty(_s, "__esModule", { value: !0 });
_s.ScopedLocalStorage = void 0;
class k0 {
  constructor(e) {
    this.scope = e;
  }
  setItem(e, r) {
    localStorage.setItem(this.scopedKey(e), r);
  }
  getItem(e) {
    return localStorage.getItem(this.scopedKey(e));
  }
  removeItem(e) {
    localStorage.removeItem(this.scopedKey(e));
  }
  clear() {
    const e = this.scopedKey(""), r = [];
    for (let n = 0; n < localStorage.length; n++) {
      const i = localStorage.key(n);
      typeof i == "string" && i.startsWith(e) && r.push(i);
    }
    r.forEach((n) => localStorage.removeItem(n));
  }
  scopedKey(e) {
    return `${this.scope}:${e}`;
  }
}
_s.ScopedLocalStorage = k0;
var bn = {}, Vr = {};
Object.defineProperty(Vr, "__esModule", { value: !0 });
const N0 = xc;
function Bu(t, e, r) {
  try {
    Reflect.apply(t, e, r);
  } catch (n) {
    setTimeout(() => {
      throw n;
    });
  }
}
function L0(t) {
  const e = t.length, r = new Array(e);
  for (let n = 0; n < e; n += 1)
    r[n] = t[n];
  return r;
}
let P0 = class extends N0.EventEmitter {
  emit(e, ...r) {
    let n = e === "error";
    const i = this._events;
    if (i !== void 0)
      n = n && i.error === void 0;
    else if (!n)
      return !1;
    if (n) {
      let o;
      if (r.length > 0 && ([o] = r), o instanceof Error)
        throw o;
      const a = new Error(`Unhandled error.${o ? ` (${o.message})` : ""}`);
      throw a.context = o, a;
    }
    const s = i[e];
    if (s === void 0)
      return !1;
    if (typeof s == "function")
      Bu(s, this, r);
    else {
      const o = s.length, a = L0(s);
      for (let c = 0; c < o; c += 1)
        Bu(a[c], this, r);
    }
    return !0;
  }
};
Vr.default = P0;
var On = {};
Object.defineProperty(On, "__esModule", { value: !0 });
On.EVENTS = void 0;
On.EVENTS = {
  STARTED_CONNECTING: "walletlink_sdk.started.connecting",
  CONNECTED_STATE_CHANGE: "walletlink_sdk.connected",
  DISCONNECTED: "walletlink_sdk.disconnected",
  METADATA_DESTROYED: "walletlink_sdk_metadata_destroyed",
  LINKED: "walletlink_sdk.linked",
  FAILURE: "walletlink_sdk.generic_failure",
  SESSION_CONFIG_RECEIVED: "walletlink_sdk.session_config_event_received",
  ETH_ACCOUNTS_STATE: "walletlink_sdk.eth_accounts_state",
  SESSION_STATE_CHANGE: "walletlink_sdk.session_state_change",
  UNLINKED_ERROR_STATE: "walletlink_sdk.unlinked_error_state",
  SKIPPED_CLEARING_SESSION: "walletlink_sdk.skipped_clearing_session",
  GENERAL_ERROR: "walletlink_sdk.general_error",
  WEB3_REQUEST: "walletlink_sdk.web3.request",
  WEB3_REQUEST_PUBLISHED: "walletlink_sdk.web3.request_published",
  WEB3_RESPONSE: "walletlink_sdk.web3.response",
  UNKNOWN_ADDRESS_ENCOUNTERED: "walletlink_sdk.unknown_address_encountered"
};
var hi = {}, eh = {}, br = {}, th = oi;
oi.default = oi;
oi.stable = ih;
oi.stableStringify = ih;
var ns = "[...]", rh = "[Circular]", $r = [], kr = [];
function nh() {
  return {
    depthLimit: Number.MAX_SAFE_INTEGER,
    edgesLimit: Number.MAX_SAFE_INTEGER
  };
}
function oi(t, e, r, n) {
  typeof n > "u" && (n = nh()), Xa(t, "", 0, [], void 0, 0, n);
  var i;
  try {
    kr.length === 0 ? i = JSON.stringify(t, e, r) : i = JSON.stringify(t, sh(e), r);
  } catch {
    return JSON.stringify("[unable to serialize, circular reference is too complex to analyze]");
  } finally {
    for (; $r.length !== 0; ) {
      var s = $r.pop();
      s.length === 4 ? Object.defineProperty(s[0], s[1], s[3]) : s[0][s[1]] = s[2];
    }
  }
  return i;
}
function ln(t, e, r, n) {
  var i = Object.getOwnPropertyDescriptor(n, r);
  i.get !== void 0 ? i.configurable ? (Object.defineProperty(n, r, { value: t }), $r.push([n, r, e, i])) : kr.push([e, r, t]) : (n[r] = t, $r.push([n, r, e]));
}
function Xa(t, e, r, n, i, s, o) {
  s += 1;
  var a;
  if (typeof t == "object" && t !== null) {
    for (a = 0; a < n.length; a++)
      if (n[a] === t) {
        ln(rh, t, e, i);
        return;
      }
    if (typeof o.depthLimit < "u" && s > o.depthLimit) {
      ln(ns, t, e, i);
      return;
    }
    if (typeof o.edgesLimit < "u" && r + 1 > o.edgesLimit) {
      ln(ns, t, e, i);
      return;
    }
    if (n.push(t), Array.isArray(t))
      for (a = 0; a < t.length; a++)
        Xa(t[a], a, a, n, t, s, o);
    else {
      var c = Object.keys(t);
      for (a = 0; a < c.length; a++) {
        var u = c[a];
        Xa(t[u], u, a, n, t, s, o);
      }
    }
    n.pop();
  }
}
function B0(t, e) {
  return t < e ? -1 : t > e ? 1 : 0;
}
function ih(t, e, r, n) {
  typeof n > "u" && (n = nh());
  var i = ec(t, "", 0, [], void 0, 0, n) || t, s;
  try {
    kr.length === 0 ? s = JSON.stringify(i, e, r) : s = JSON.stringify(i, sh(e), r);
  } catch {
    return JSON.stringify("[unable to serialize, circular reference is too complex to analyze]");
  } finally {
    for (; $r.length !== 0; ) {
      var o = $r.pop();
      o.length === 4 ? Object.defineProperty(o[0], o[1], o[3]) : o[0][o[1]] = o[2];
    }
  }
  return s;
}
function ec(t, e, r, n, i, s, o) {
  s += 1;
  var a;
  if (typeof t == "object" && t !== null) {
    for (a = 0; a < n.length; a++)
      if (n[a] === t) {
        ln(rh, t, e, i);
        return;
      }
    try {
      if (typeof t.toJSON == "function")
        return;
    } catch {
      return;
    }
    if (typeof o.depthLimit < "u" && s > o.depthLimit) {
      ln(ns, t, e, i);
      return;
    }
    if (typeof o.edgesLimit < "u" && r + 1 > o.edgesLimit) {
      ln(ns, t, e, i);
      return;
    }
    if (n.push(t), Array.isArray(t))
      for (a = 0; a < t.length; a++)
        ec(t[a], a, a, n, t, s, o);
    else {
      var c = {}, u = Object.keys(t).sort(B0);
      for (a = 0; a < u.length; a++) {
        var h = u[a];
        ec(t[h], h, a, n, t, s, o), c[h] = t[h];
      }
      if (typeof i < "u")
        $r.push([i, e, t]), i[e] = c;
      else
        return c;
    }
    n.pop();
  }
}
function sh(t) {
  return t = typeof t < "u" ? t : function(e, r) {
    return r;
  }, function(e, r) {
    if (kr.length > 0)
      for (var n = 0; n < kr.length; n++) {
        var i = kr[n];
        if (i[1] === e && i[0] === r) {
          r = i[2], kr.splice(n, 1);
          break;
        }
      }
    return t.call(this, e, r);
  };
}
Object.defineProperty(br, "__esModule", { value: !0 });
br.EthereumProviderError = br.EthereumRpcError = void 0;
const $0 = th;
let oh = class extends Error {
  constructor(e, r, n) {
    if (!Number.isInteger(e))
      throw new Error('"code" must be an integer.');
    if (!r || typeof r != "string")
      throw new Error('"message" must be a nonempty string.');
    super(r), this.code = e, n !== void 0 && (this.data = n);
  }
  /**
   * Returns a plain object with all public class properties.
   */
  serialize() {
    const e = {
      code: this.code,
      message: this.message
    };
    return this.data !== void 0 && (e.data = this.data), this.stack && (e.stack = this.stack), e;
  }
  /**
   * Return a string representation of the serialized error, omitting
   * any circular references.
   */
  toString() {
    return $0.default(this.serialize(), j0, 2);
  }
};
br.EthereumRpcError = oh;
let D0 = class extends oh {
  /**
   * Create an Ethereum Provider JSON-RPC error.
   * `code` must be an integer in the 1000 <= 4999 range.
   */
  constructor(e, r, n) {
    if (!F0(e))
      throw new Error('"code" must be an integer such that: 1000 <= code <= 4999');
    super(e, r, n);
  }
};
br.EthereumProviderError = D0;
function F0(t) {
  return Number.isInteger(t) && t >= 1e3 && t <= 4999;
}
function j0(t, e) {
  if (e !== "[Circular]")
    return e;
}
var Ic = {}, yr = {};
Object.defineProperty(yr, "__esModule", { value: !0 });
yr.errorValues = yr.errorCodes = void 0;
yr.errorCodes = {
  rpc: {
    invalidInput: -32e3,
    resourceNotFound: -32001,
    resourceUnavailable: -32002,
    transactionRejected: -32003,
    methodNotSupported: -32004,
    limitExceeded: -32005,
    parse: -32700,
    invalidRequest: -32600,
    methodNotFound: -32601,
    invalidParams: -32602,
    internal: -32603
  },
  provider: {
    userRejectedRequest: 4001,
    unauthorized: 4100,
    unsupportedMethod: 4200,
    disconnected: 4900,
    chainDisconnected: 4901
  }
};
yr.errorValues = {
  "-32700": {
    standard: "JSON RPC 2.0",
    message: "Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text."
  },
  "-32600": {
    standard: "JSON RPC 2.0",
    message: "The JSON sent is not a valid Request object."
  },
  "-32601": {
    standard: "JSON RPC 2.0",
    message: "The method does not exist / is not available."
  },
  "-32602": {
    standard: "JSON RPC 2.0",
    message: "Invalid method parameter(s)."
  },
  "-32603": {
    standard: "JSON RPC 2.0",
    message: "Internal JSON-RPC error."
  },
  "-32000": {
    standard: "EIP-1474",
    message: "Invalid input."
  },
  "-32001": {
    standard: "EIP-1474",
    message: "Resource not found."
  },
  "-32002": {
    standard: "EIP-1474",
    message: "Resource unavailable."
  },
  "-32003": {
    standard: "EIP-1474",
    message: "Transaction rejected."
  },
  "-32004": {
    standard: "EIP-1474",
    message: "Method not supported."
  },
  "-32005": {
    standard: "EIP-1474",
    message: "Request limit exceeded."
  },
  4001: {
    standard: "EIP-1193",
    message: "User rejected the request."
  },
  4100: {
    standard: "EIP-1193",
    message: "The requested account and/or method has not been authorized by the user."
  },
  4200: {
    standard: "EIP-1193",
    message: "The requested method is not supported by this Ethereum provider."
  },
  4900: {
    standard: "EIP-1193",
    message: "The provider is disconnected from all chains."
  },
  4901: {
    standard: "EIP-1193",
    message: "The provider is disconnected from the specified chain."
  }
};
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.serializeError = t.isValidCode = t.getMessageFromCode = t.JSON_RPC_SERVER_ERROR_MESSAGE = void 0;
  const e = yr, r = br, n = e.errorCodes.rpc.internal, i = "Unspecified error message. This is a bug, please report it.", s = {
    code: n,
    message: o(n)
  };
  t.JSON_RPC_SERVER_ERROR_MESSAGE = "Unspecified server error.";
  function o(p, v = i) {
    if (Number.isInteger(p)) {
      const _ = p.toString();
      if (d(e.errorValues, _))
        return e.errorValues[_].message;
      if (u(p))
        return t.JSON_RPC_SERVER_ERROR_MESSAGE;
    }
    return v;
  }
  t.getMessageFromCode = o;
  function a(p) {
    if (!Number.isInteger(p))
      return !1;
    const v = p.toString();
    return !!(e.errorValues[v] || u(p));
  }
  t.isValidCode = a;
  function c(p, { fallbackError: v = s, shouldIncludeStack: _ = !1 } = {}) {
    var A, R;
    if (!v || !Number.isInteger(v.code) || typeof v.message != "string")
      throw new Error("Must provide fallback error with integer number code and string message.");
    if (p instanceof r.EthereumRpcError)
      return p.serialize();
    const y = {};
    if (p && typeof p == "object" && !Array.isArray(p) && d(p, "code") && a(p.code)) {
      const x = p;
      y.code = x.code, x.message && typeof x.message == "string" ? (y.message = x.message, d(x, "data") && (y.data = x.data)) : (y.message = o(y.code), y.data = { originalError: h(p) });
    } else {
      y.code = v.code;
      const x = (A = p) === null || A === void 0 ? void 0 : A.message;
      y.message = x && typeof x == "string" ? x : v.message, y.data = { originalError: h(p) };
    }
    const E = (R = p) === null || R === void 0 ? void 0 : R.stack;
    return _ && p && E && typeof E == "string" && (y.stack = E), y;
  }
  t.serializeError = c;
  function u(p) {
    return p >= -32099 && p <= -32e3;
  }
  function h(p) {
    return p && typeof p == "object" && !Array.isArray(p) ? Object.assign({}, p) : p;
  }
  function d(p, v) {
    return Object.prototype.hasOwnProperty.call(p, v);
  }
})(Ic);
var Es = {};
Object.defineProperty(Es, "__esModule", { value: !0 });
Es.ethErrors = void 0;
const Rc = br, ah = Ic, Qe = yr;
Es.ethErrors = {
  rpc: {
    /**
     * Get a JSON RPC 2.0 Parse (-32700) error.
     */
    parse: (t) => ht(Qe.errorCodes.rpc.parse, t),
    /**
     * Get a JSON RPC 2.0 Invalid Request (-32600) error.
     */
    invalidRequest: (t) => ht(Qe.errorCodes.rpc.invalidRequest, t),
    /**
     * Get a JSON RPC 2.0 Invalid Params (-32602) error.
     */
    invalidParams: (t) => ht(Qe.errorCodes.rpc.invalidParams, t),
    /**
     * Get a JSON RPC 2.0 Method Not Found (-32601) error.
     */
    methodNotFound: (t) => ht(Qe.errorCodes.rpc.methodNotFound, t),
    /**
     * Get a JSON RPC 2.0 Internal (-32603) error.
     */
    internal: (t) => ht(Qe.errorCodes.rpc.internal, t),
    /**
     * Get a JSON RPC 2.0 Server error.
     * Permits integer error codes in the [ -32099 <= -32005 ] range.
     * Codes -32000 through -32004 are reserved by EIP-1474.
     */
    server: (t) => {
      if (!t || typeof t != "object" || Array.isArray(t))
        throw new Error("Ethereum RPC Server errors must provide single object argument.");
      const { code: e } = t;
      if (!Number.isInteger(e) || e > -32005 || e < -32099)
        throw new Error('"code" must be an integer such that: -32099 <= code <= -32005');
      return ht(e, t);
    },
    /**
     * Get an Ethereum JSON RPC Invalid Input (-32000) error.
     */
    invalidInput: (t) => ht(Qe.errorCodes.rpc.invalidInput, t),
    /**
     * Get an Ethereum JSON RPC Resource Not Found (-32001) error.
     */
    resourceNotFound: (t) => ht(Qe.errorCodes.rpc.resourceNotFound, t),
    /**
     * Get an Ethereum JSON RPC Resource Unavailable (-32002) error.
     */
    resourceUnavailable: (t) => ht(Qe.errorCodes.rpc.resourceUnavailable, t),
    /**
     * Get an Ethereum JSON RPC Transaction Rejected (-32003) error.
     */
    transactionRejected: (t) => ht(Qe.errorCodes.rpc.transactionRejected, t),
    /**
     * Get an Ethereum JSON RPC Method Not Supported (-32004) error.
     */
    methodNotSupported: (t) => ht(Qe.errorCodes.rpc.methodNotSupported, t),
    /**
     * Get an Ethereum JSON RPC Limit Exceeded (-32005) error.
     */
    limitExceeded: (t) => ht(Qe.errorCodes.rpc.limitExceeded, t)
  },
  provider: {
    /**
     * Get an Ethereum Provider User Rejected Request (4001) error.
     */
    userRejectedRequest: (t) => Hn(Qe.errorCodes.provider.userRejectedRequest, t),
    /**
     * Get an Ethereum Provider Unauthorized (4100) error.
     */
    unauthorized: (t) => Hn(Qe.errorCodes.provider.unauthorized, t),
    /**
     * Get an Ethereum Provider Unsupported Method (4200) error.
     */
    unsupportedMethod: (t) => Hn(Qe.errorCodes.provider.unsupportedMethod, t),
    /**
     * Get an Ethereum Provider Not Connected (4900) error.
     */
    disconnected: (t) => Hn(Qe.errorCodes.provider.disconnected, t),
    /**
     * Get an Ethereum Provider Chain Not Connected (4901) error.
     */
    chainDisconnected: (t) => Hn(Qe.errorCodes.provider.chainDisconnected, t),
    /**
     * Get a custom Ethereum Provider error.
     */
    custom: (t) => {
      if (!t || typeof t != "object" || Array.isArray(t))
        throw new Error("Ethereum Provider custom errors must provide single object argument.");
      const { code: e, message: r, data: n } = t;
      if (!r || typeof r != "string")
        throw new Error('"message" must be a nonempty string');
      return new Rc.EthereumProviderError(e, r, n);
    }
  }
};
function ht(t, e) {
  const [r, n] = ch(e);
  return new Rc.EthereumRpcError(t, r || ah.getMessageFromCode(t), n);
}
function Hn(t, e) {
  const [r, n] = ch(e);
  return new Rc.EthereumProviderError(t, r || ah.getMessageFromCode(t), n);
}
function ch(t) {
  if (t) {
    if (typeof t == "string")
      return [t];
    if (typeof t == "object" && !Array.isArray(t)) {
      const { message: e, data: r } = t;
      if (e && typeof e != "string")
        throw new Error("Must specify string message.");
      return [e || void 0, r];
    }
  }
  return [];
}
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.getMessageFromCode = t.serializeError = t.EthereumProviderError = t.EthereumRpcError = t.ethErrors = t.errorCodes = void 0;
  const e = br;
  Object.defineProperty(t, "EthereumRpcError", { enumerable: !0, get: function() {
    return e.EthereumRpcError;
  } }), Object.defineProperty(t, "EthereumProviderError", { enumerable: !0, get: function() {
    return e.EthereumProviderError;
  } });
  const r = Ic;
  Object.defineProperty(t, "serializeError", { enumerable: !0, get: function() {
    return r.serializeError;
  } }), Object.defineProperty(t, "getMessageFromCode", { enumerable: !0, get: function() {
    return r.getMessageFromCode;
  } });
  const n = Es;
  Object.defineProperty(t, "ethErrors", { enumerable: !0, get: function() {
    return n.ethErrors;
  } });
  const i = yr;
  Object.defineProperty(t, "errorCodes", { enumerable: !0, get: function() {
    return i.errorCodes;
  } });
})(eh);
var Ie = {}, Ss = {};
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.Web3Method = void 0, function(e) {
    e.requestEthereumAccounts = "requestEthereumAccounts", e.signEthereumMessage = "signEthereumMessage", e.signEthereumTransaction = "signEthereumTransaction", e.submitEthereumTransaction = "submitEthereumTransaction", e.ethereumAddressFromSignedMessage = "ethereumAddressFromSignedMessage", e.scanQRCode = "scanQRCode", e.generic = "generic", e.childRequestEthereumAccounts = "childRequestEthereumAccounts", e.addEthereumChain = "addEthereumChain", e.switchEthereumChain = "switchEthereumChain", e.makeEthereumJSONRPCRequest = "makeEthereumJSONRPCRequest", e.watchAsset = "watchAsset", e.selectProvider = "selectProvider";
  }(t.Web3Method || (t.Web3Method = {}));
})(Ss);
Object.defineProperty(Ie, "__esModule", { value: !0 });
Ie.EthereumAddressFromSignedMessageResponse = Ie.SubmitEthereumTransactionResponse = Ie.SignEthereumTransactionResponse = Ie.SignEthereumMessageResponse = Ie.isRequestEthereumAccountsResponse = Ie.SelectProviderResponse = Ie.WatchAssetReponse = Ie.RequestEthereumAccountsResponse = Ie.SwitchEthereumChainResponse = Ie.AddEthereumChainResponse = Ie.isErrorResponse = void 0;
const Qt = Ss;
function U0(t) {
  var e, r;
  return ((e = t) === null || e === void 0 ? void 0 : e.method) !== void 0 && ((r = t) === null || r === void 0 ? void 0 : r.errorMessage) !== void 0;
}
Ie.isErrorResponse = U0;
function W0(t) {
  return {
    method: Qt.Web3Method.addEthereumChain,
    result: t
  };
}
Ie.AddEthereumChainResponse = W0;
function V0(t) {
  return {
    method: Qt.Web3Method.switchEthereumChain,
    result: t
  };
}
Ie.SwitchEthereumChainResponse = V0;
function H0(t) {
  return { method: Qt.Web3Method.requestEthereumAccounts, result: t };
}
Ie.RequestEthereumAccountsResponse = H0;
function z0(t) {
  return { method: Qt.Web3Method.watchAsset, result: t };
}
Ie.WatchAssetReponse = z0;
function q0(t) {
  return { method: Qt.Web3Method.selectProvider, result: t };
}
Ie.SelectProviderResponse = q0;
function G0(t) {
  return t && t.method === Qt.Web3Method.requestEthereumAccounts;
}
Ie.isRequestEthereumAccountsResponse = G0;
function J0(t) {
  return { method: Qt.Web3Method.signEthereumMessage, result: t };
}
Ie.SignEthereumMessageResponse = J0;
function Q0(t) {
  return { method: Qt.Web3Method.signEthereumTransaction, result: t };
}
Ie.SignEthereumTransactionResponse = Q0;
function Z0(t) {
  return { method: Qt.Web3Method.submitEthereumTransaction, result: t };
}
Ie.SubmitEthereumTransactionResponse = Z0;
function Y0(t) {
  return {
    method: Qt.Web3Method.ethereumAddressFromSignedMessage,
    result: t
  };
}
Ie.EthereumAddressFromSignedMessageResponse = Y0;
var kn = {};
Object.defineProperty(kn, "__esModule", { value: !0 });
kn.LIB_VERSION = void 0;
kn.LIB_VERSION = "3.7.2";
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.getErrorCode = t.serializeError = t.standardErrors = t.standardErrorMessage = t.standardErrorCodes = void 0;
  const e = eh, r = Ie, n = kn;
  t.standardErrorCodes = Object.freeze(Object.assign(Object.assign({}, e.errorCodes), { provider: Object.freeze(Object.assign(Object.assign({}, e.errorCodes.provider), { unsupportedChain: 4902 })) }));
  function i(h) {
    return h !== void 0 ? (0, e.getMessageFromCode)(h) : "Unknown error";
  }
  t.standardErrorMessage = i, t.standardErrors = Object.freeze(Object.assign(Object.assign({}, e.ethErrors), { provider: Object.freeze(Object.assign(Object.assign({}, e.ethErrors.provider), { unsupportedChain: (h = "") => e.ethErrors.provider.custom({
    code: t.standardErrorCodes.provider.unsupportedChain,
    message: `Unrecognized chain ID ${h}. Try adding the chain using wallet_addEthereumChain first.`
  }) })) }));
  function s(h, d) {
    const p = (0, e.serializeError)(o(h), {
      shouldIncludeStack: !0
    }), v = new URL("https://docs.cloud.coinbase.com/wallet-sdk/docs/errors");
    v.searchParams.set("version", n.LIB_VERSION), v.searchParams.set("code", p.code.toString());
    const _ = a(p.data, d);
    return _ && v.searchParams.set("method", _), v.searchParams.set("message", p.message), Object.assign(Object.assign({}, p), { docUrl: v.href });
  }
  t.serializeError = s;
  function o(h) {
    return typeof h == "string" ? {
      message: h,
      code: t.standardErrorCodes.rpc.internal
    } : (0, r.isErrorResponse)(h) ? Object.assign(Object.assign({}, h), { message: h.errorMessage, code: h.errorCode, data: { method: h.method, result: h.result } }) : h;
  }
  function a(h, d) {
    var p;
    const v = (p = h) === null || p === void 0 ? void 0 : p.method;
    if (v)
      return v;
    if (d !== void 0)
      return typeof d == "string" ? d : Array.isArray(d) ? d.length > 0 ? d[0].method : void 0 : d.method;
  }
  function c(h) {
    var d;
    if (typeof h == "number")
      return h;
    if (u(h))
      return (d = h.code) !== null && d !== void 0 ? d : h.errorCode;
  }
  t.getErrorCode = c;
  function u(h) {
    return typeof h == "object" && h !== null && (typeof h.code == "number" || typeof h.errorCode == "number");
  }
})(hi);
var Nn = {}, uh = { exports: {} }, tc = { exports: {} }, di = {}, xs = {};
xs.byteLength = eg;
xs.toByteArray = rg;
xs.fromByteArray = sg;
var Vt = [], bt = [], K0 = typeof Uint8Array < "u" ? Uint8Array : Array, la = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
for (var Yr = 0, X0 = la.length; Yr < X0; ++Yr)
  Vt[Yr] = la[Yr], bt[la.charCodeAt(Yr)] = Yr;
bt["-".charCodeAt(0)] = 62;
bt["_".charCodeAt(0)] = 63;
function lh(t) {
  var e = t.length;
  if (e % 4 > 0)
    throw new Error("Invalid string. Length must be a multiple of 4");
  var r = t.indexOf("=");
  r === -1 && (r = e);
  var n = r === e ? 0 : 4 - r % 4;
  return [r, n];
}
function eg(t) {
  var e = lh(t), r = e[0], n = e[1];
  return (r + n) * 3 / 4 - n;
}
function tg(t, e, r) {
  return (e + r) * 3 / 4 - r;
}
function rg(t) {
  var e, r = lh(t), n = r[0], i = r[1], s = new K0(tg(t, n, i)), o = 0, a = i > 0 ? n - 4 : n, c;
  for (c = 0; c < a; c += 4)
    e = bt[t.charCodeAt(c)] << 18 | bt[t.charCodeAt(c + 1)] << 12 | bt[t.charCodeAt(c + 2)] << 6 | bt[t.charCodeAt(c + 3)], s[o++] = e >> 16 & 255, s[o++] = e >> 8 & 255, s[o++] = e & 255;
  return i === 2 && (e = bt[t.charCodeAt(c)] << 2 | bt[t.charCodeAt(c + 1)] >> 4, s[o++] = e & 255), i === 1 && (e = bt[t.charCodeAt(c)] << 10 | bt[t.charCodeAt(c + 1)] << 4 | bt[t.charCodeAt(c + 2)] >> 2, s[o++] = e >> 8 & 255, s[o++] = e & 255), s;
}
function ng(t) {
  return Vt[t >> 18 & 63] + Vt[t >> 12 & 63] + Vt[t >> 6 & 63] + Vt[t & 63];
}
function ig(t, e, r) {
  for (var n, i = [], s = e; s < r; s += 3)
    n = (t[s] << 16 & 16711680) + (t[s + 1] << 8 & 65280) + (t[s + 2] & 255), i.push(ng(n));
  return i.join("");
}
function sg(t) {
  for (var e, r = t.length, n = r % 3, i = [], s = 16383, o = 0, a = r - n; o < a; o += s)
    i.push(ig(t, o, o + s > a ? a : o + s));
  return n === 1 ? (e = t[r - 1], i.push(
    Vt[e >> 2] + Vt[e << 4 & 63] + "=="
  )) : n === 2 && (e = (t[r - 2] << 8) + t[r - 1], i.push(
    Vt[e >> 10] + Vt[e >> 4 & 63] + Vt[e << 2 & 63] + "="
  )), i.join("");
}
var Ac = {};
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
Ac.read = function(t, e, r, n, i) {
  var s, o, a = i * 8 - n - 1, c = (1 << a) - 1, u = c >> 1, h = -7, d = r ? i - 1 : 0, p = r ? -1 : 1, v = t[e + d];
  for (d += p, s = v & (1 << -h) - 1, v >>= -h, h += a; h > 0; s = s * 256 + t[e + d], d += p, h -= 8)
    ;
  for (o = s & (1 << -h) - 1, s >>= -h, h += n; h > 0; o = o * 256 + t[e + d], d += p, h -= 8)
    ;
  if (s === 0)
    s = 1 - u;
  else {
    if (s === c)
      return o ? NaN : (v ? -1 : 1) * (1 / 0);
    o = o + Math.pow(2, n), s = s - u;
  }
  return (v ? -1 : 1) * o * Math.pow(2, s - n);
};
Ac.write = function(t, e, r, n, i, s) {
  var o, a, c, u = s * 8 - i - 1, h = (1 << u) - 1, d = h >> 1, p = i === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0, v = n ? 0 : s - 1, _ = n ? 1 : -1, A = e < 0 || e === 0 && 1 / e < 0 ? 1 : 0;
  for (e = Math.abs(e), isNaN(e) || e === 1 / 0 ? (a = isNaN(e) ? 1 : 0, o = h) : (o = Math.floor(Math.log(e) / Math.LN2), e * (c = Math.pow(2, -o)) < 1 && (o--, c *= 2), o + d >= 1 ? e += p / c : e += p * Math.pow(2, 1 - d), e * c >= 2 && (o++, c /= 2), o + d >= h ? (a = 0, o = h) : o + d >= 1 ? (a = (e * c - 1) * Math.pow(2, i), o = o + d) : (a = e * Math.pow(2, d - 1) * Math.pow(2, i), o = 0)); i >= 8; t[r + v] = a & 255, v += _, a /= 256, i -= 8)
    ;
  for (o = o << i | a, u += i; u > 0; t[r + v] = o & 255, v += _, o /= 256, u -= 8)
    ;
  t[r + v - _] |= A * 128;
};
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
(function(t) {
  const e = xs, r = Ac, n = typeof Symbol == "function" && typeof Symbol.for == "function" ? Symbol.for("nodejs.util.inspect.custom") : null;
  t.Buffer = a, t.SlowBuffer = E, t.INSPECT_MAX_BYTES = 50;
  const i = 2147483647;
  t.kMaxLength = i, a.TYPED_ARRAY_SUPPORT = s(), !a.TYPED_ARRAY_SUPPORT && typeof console < "u" && typeof console.error == "function" && console.error(
    "This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."
  );
  function s() {
    try {
      const g = new Uint8Array(1), l = { foo: function() {
        return 42;
      } };
      return Object.setPrototypeOf(l, Uint8Array.prototype), Object.setPrototypeOf(g, l), g.foo() === 42;
    } catch {
      return !1;
    }
  }
  Object.defineProperty(a.prototype, "parent", {
    enumerable: !0,
    get: function() {
      if (a.isBuffer(this))
        return this.buffer;
    }
  }), Object.defineProperty(a.prototype, "offset", {
    enumerable: !0,
    get: function() {
      if (a.isBuffer(this))
        return this.byteOffset;
    }
  });
  function o(g) {
    if (g > i)
      throw new RangeError('The value "' + g + '" is invalid for option "size"');
    const l = new Uint8Array(g);
    return Object.setPrototypeOf(l, a.prototype), l;
  }
  function a(g, l, f) {
    if (typeof g == "number") {
      if (typeof l == "string")
        throw new TypeError(
          'The "string" argument must be of type string. Received type number'
        );
      return d(g);
    }
    return c(g, l, f);
  }
  a.poolSize = 8192;
  function c(g, l, f) {
    if (typeof g == "string")
      return p(g, l);
    if (ArrayBuffer.isView(g))
      return _(g);
    if (g == null)
      throw new TypeError(
        "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof g
      );
    if (Je(g, ArrayBuffer) || g && Je(g.buffer, ArrayBuffer) || typeof SharedArrayBuffer < "u" && (Je(g, SharedArrayBuffer) || g && Je(g.buffer, SharedArrayBuffer)))
      return A(g, l, f);
    if (typeof g == "number")
      throw new TypeError(
        'The "value" argument must not be of type number. Received type number'
      );
    const b = g.valueOf && g.valueOf();
    if (b != null && b !== g)
      return a.from(b, l, f);
    const S = R(g);
    if (S)
      return S;
    if (typeof Symbol < "u" && Symbol.toPrimitive != null && typeof g[Symbol.toPrimitive] == "function")
      return a.from(g[Symbol.toPrimitive]("string"), l, f);
    throw new TypeError(
      "The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof g
    );
  }
  a.from = function(g, l, f) {
    return c(g, l, f);
  }, Object.setPrototypeOf(a.prototype, Uint8Array.prototype), Object.setPrototypeOf(a, Uint8Array);
  function u(g) {
    if (typeof g != "number")
      throw new TypeError('"size" argument must be of type number');
    if (g < 0)
      throw new RangeError('The value "' + g + '" is invalid for option "size"');
  }
  function h(g, l, f) {
    return u(g), g <= 0 ? o(g) : l !== void 0 ? typeof f == "string" ? o(g).fill(l, f) : o(g).fill(l) : o(g);
  }
  a.alloc = function(g, l, f) {
    return h(g, l, f);
  };
  function d(g) {
    return u(g), o(g < 0 ? 0 : y(g) | 0);
  }
  a.allocUnsafe = function(g) {
    return d(g);
  }, a.allocUnsafeSlow = function(g) {
    return d(g);
  };
  function p(g, l) {
    if ((typeof l != "string" || l === "") && (l = "utf8"), !a.isEncoding(l))
      throw new TypeError("Unknown encoding: " + l);
    const f = x(g, l) | 0;
    let b = o(f);
    const S = b.write(g, l);
    return S !== f && (b = b.slice(0, S)), b;
  }
  function v(g) {
    const l = g.length < 0 ? 0 : y(g.length) | 0, f = o(l);
    for (let b = 0; b < l; b += 1)
      f[b] = g[b] & 255;
    return f;
  }
  function _(g) {
    if (Je(g, Uint8Array)) {
      const l = new Uint8Array(g);
      return A(l.buffer, l.byteOffset, l.byteLength);
    }
    return v(g);
  }
  function A(g, l, f) {
    if (l < 0 || g.byteLength < l)
      throw new RangeError('"offset" is outside of buffer bounds');
    if (g.byteLength < l + (f || 0))
      throw new RangeError('"length" is outside of buffer bounds');
    let b;
    return l === void 0 && f === void 0 ? b = new Uint8Array(g) : f === void 0 ? b = new Uint8Array(g, l) : b = new Uint8Array(g, l, f), Object.setPrototypeOf(b, a.prototype), b;
  }
  function R(g) {
    if (a.isBuffer(g)) {
      const l = y(g.length) | 0, f = o(l);
      return f.length === 0 || g.copy(f, 0, 0, l), f;
    }
    if (g.length !== void 0)
      return typeof g.length != "number" || Lt(g.length) ? o(0) : v(g);
    if (g.type === "Buffer" && Array.isArray(g.data))
      return v(g.data);
  }
  function y(g) {
    if (g >= i)
      throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + i.toString(16) + " bytes");
    return g | 0;
  }
  function E(g) {
    return +g != g && (g = 0), a.alloc(+g);
  }
  a.isBuffer = function(l) {
    return l != null && l._isBuffer === !0 && l !== a.prototype;
  }, a.compare = function(l, f) {
    if (Je(l, Uint8Array) && (l = a.from(l, l.offset, l.byteLength)), Je(f, Uint8Array) && (f = a.from(f, f.offset, f.byteLength)), !a.isBuffer(l) || !a.isBuffer(f))
      throw new TypeError(
        'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
      );
    if (l === f)
      return 0;
    let b = l.length, S = f.length;
    for (let T = 0, k = Math.min(b, S); T < k; ++T)
      if (l[T] !== f[T]) {
        b = l[T], S = f[T];
        break;
      }
    return b < S ? -1 : S < b ? 1 : 0;
  }, a.isEncoding = function(l) {
    switch (String(l).toLowerCase()) {
      case "hex":
      case "utf8":
      case "utf-8":
      case "ascii":
      case "latin1":
      case "binary":
      case "base64":
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return !0;
      default:
        return !1;
    }
  }, a.concat = function(l, f) {
    if (!Array.isArray(l))
      throw new TypeError('"list" argument must be an Array of Buffers');
    if (l.length === 0)
      return a.alloc(0);
    let b;
    if (f === void 0)
      for (f = 0, b = 0; b < l.length; ++b)
        f += l[b].length;
    const S = a.allocUnsafe(f);
    let T = 0;
    for (b = 0; b < l.length; ++b) {
      let k = l[b];
      if (Je(k, Uint8Array))
        T + k.length > S.length ? (a.isBuffer(k) || (k = a.from(k)), k.copy(S, T)) : Uint8Array.prototype.set.call(
          S,
          k,
          T
        );
      else if (a.isBuffer(k))
        k.copy(S, T);
      else
        throw new TypeError('"list" argument must be an Array of Buffers');
      T += k.length;
    }
    return S;
  };
  function x(g, l) {
    if (a.isBuffer(g))
      return g.length;
    if (ArrayBuffer.isView(g) || Je(g, ArrayBuffer))
      return g.byteLength;
    if (typeof g != "string")
      throw new TypeError(
        'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof g
      );
    const f = g.length, b = arguments.length > 2 && arguments[2] === !0;
    if (!b && f === 0)
      return 0;
    let S = !1;
    for (; ; )
      switch (l) {
        case "ascii":
        case "latin1":
        case "binary":
          return f;
        case "utf8":
        case "utf-8":
          return pe(g).length;
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return f * 2;
        case "hex":
          return f >>> 1;
        case "base64":
          return or(g).length;
        default:
          if (S)
            return b ? -1 : pe(g).length;
          l = ("" + l).toLowerCase(), S = !0;
      }
  }
  a.byteLength = x;
  function O(g, l, f) {
    let b = !1;
    if ((l === void 0 || l < 0) && (l = 0), l > this.length || ((f === void 0 || f > this.length) && (f = this.length), f <= 0) || (f >>>= 0, l >>>= 0, f <= l))
      return "";
    for (g || (g = "utf8"); ; )
      switch (g) {
        case "hex":
          return Q(this, l, f);
        case "utf8":
        case "utf-8":
          return B(this, l, f);
        case "ascii":
          return z(this, l, f);
        case "latin1":
        case "binary":
          return V(this, l, f);
        case "base64":
          return P(this, l, f);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return ie(this, l, f);
        default:
          if (b)
            throw new TypeError("Unknown encoding: " + g);
          g = (g + "").toLowerCase(), b = !0;
      }
  }
  a.prototype._isBuffer = !0;
  function M(g, l, f) {
    const b = g[l];
    g[l] = g[f], g[f] = b;
  }
  a.prototype.swap16 = function() {
    const l = this.length;
    if (l % 2 !== 0)
      throw new RangeError("Buffer size must be a multiple of 16-bits");
    for (let f = 0; f < l; f += 2)
      M(this, f, f + 1);
    return this;
  }, a.prototype.swap32 = function() {
    const l = this.length;
    if (l % 4 !== 0)
      throw new RangeError("Buffer size must be a multiple of 32-bits");
    for (let f = 0; f < l; f += 4)
      M(this, f, f + 3), M(this, f + 1, f + 2);
    return this;
  }, a.prototype.swap64 = function() {
    const l = this.length;
    if (l % 8 !== 0)
      throw new RangeError("Buffer size must be a multiple of 64-bits");
    for (let f = 0; f < l; f += 8)
      M(this, f, f + 7), M(this, f + 1, f + 6), M(this, f + 2, f + 5), M(this, f + 3, f + 4);
    return this;
  }, a.prototype.toString = function() {
    const l = this.length;
    return l === 0 ? "" : arguments.length === 0 ? B(this, 0, l) : O.apply(this, arguments);
  }, a.prototype.toLocaleString = a.prototype.toString, a.prototype.equals = function(l) {
    if (!a.isBuffer(l))
      throw new TypeError("Argument must be a Buffer");
    return this === l ? !0 : a.compare(this, l) === 0;
  }, a.prototype.inspect = function() {
    let l = "";
    const f = t.INSPECT_MAX_BYTES;
    return l = this.toString("hex", 0, f).replace(/(.{2})/g, "$1 ").trim(), this.length > f && (l += " ... "), "<Buffer " + l + ">";
  }, n && (a.prototype[n] = a.prototype.inspect), a.prototype.compare = function(l, f, b, S, T) {
    if (Je(l, Uint8Array) && (l = a.from(l, l.offset, l.byteLength)), !a.isBuffer(l))
      throw new TypeError(
        'The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof l
      );
    if (f === void 0 && (f = 0), b === void 0 && (b = l ? l.length : 0), S === void 0 && (S = 0), T === void 0 && (T = this.length), f < 0 || b > l.length || S < 0 || T > this.length)
      throw new RangeError("out of range index");
    if (S >= T && f >= b)
      return 0;
    if (S >= T)
      return -1;
    if (f >= b)
      return 1;
    if (f >>>= 0, b >>>= 0, S >>>= 0, T >>>= 0, this === l)
      return 0;
    let k = T - S, se = b - f;
    const xe = Math.min(k, se), _e = this.slice(S, T), Ce = l.slice(f, b);
    for (let me = 0; me < xe; ++me)
      if (_e[me] !== Ce[me]) {
        k = _e[me], se = Ce[me];
        break;
      }
    return k < se ? -1 : se < k ? 1 : 0;
  };
  function D(g, l, f, b, S) {
    if (g.length === 0)
      return -1;
    if (typeof f == "string" ? (b = f, f = 0) : f > 2147483647 ? f = 2147483647 : f < -2147483648 && (f = -2147483648), f = +f, Lt(f) && (f = S ? 0 : g.length - 1), f < 0 && (f = g.length + f), f >= g.length) {
      if (S)
        return -1;
      f = g.length - 1;
    } else if (f < 0)
      if (S)
        f = 0;
      else
        return -1;
    if (typeof l == "string" && (l = a.from(l, b)), a.isBuffer(l))
      return l.length === 0 ? -1 : J(g, l, f, b, S);
    if (typeof l == "number")
      return l = l & 255, typeof Uint8Array.prototype.indexOf == "function" ? S ? Uint8Array.prototype.indexOf.call(g, l, f) : Uint8Array.prototype.lastIndexOf.call(g, l, f) : J(g, [l], f, b, S);
    throw new TypeError("val must be string, number or Buffer");
  }
  function J(g, l, f, b, S) {
    let T = 1, k = g.length, se = l.length;
    if (b !== void 0 && (b = String(b).toLowerCase(), b === "ucs2" || b === "ucs-2" || b === "utf16le" || b === "utf-16le")) {
      if (g.length < 2 || l.length < 2)
        return -1;
      T = 2, k /= 2, se /= 2, f /= 2;
    }
    function xe(Ce, me) {
      return T === 1 ? Ce[me] : Ce.readUInt16BE(me * T);
    }
    let _e;
    if (S) {
      let Ce = -1;
      for (_e = f; _e < k; _e++)
        if (xe(g, _e) === xe(l, Ce === -1 ? 0 : _e - Ce)) {
          if (Ce === -1 && (Ce = _e), _e - Ce + 1 === se)
            return Ce * T;
        } else
          Ce !== -1 && (_e -= _e - Ce), Ce = -1;
    } else
      for (f + se > k && (f = k - se), _e = f; _e >= 0; _e--) {
        let Ce = !0;
        for (let me = 0; me < se; me++)
          if (xe(g, _e + me) !== xe(l, me)) {
            Ce = !1;
            break;
          }
        if (Ce)
          return _e;
      }
    return -1;
  }
  a.prototype.includes = function(l, f, b) {
    return this.indexOf(l, f, b) !== -1;
  }, a.prototype.indexOf = function(l, f, b) {
    return D(this, l, f, b, !0);
  }, a.prototype.lastIndexOf = function(l, f, b) {
    return D(this, l, f, b, !1);
  };
  function H(g, l, f, b) {
    f = Number(f) || 0;
    const S = g.length - f;
    b ? (b = Number(b), b > S && (b = S)) : b = S;
    const T = l.length;
    b > T / 2 && (b = T / 2);
    let k;
    for (k = 0; k < b; ++k) {
      const se = parseInt(l.substr(k * 2, 2), 16);
      if (Lt(se))
        return k;
      g[f + k] = se;
    }
    return k;
  }
  function F(g, l, f, b) {
    return Yt(pe(l, g.length - f), g, f, b);
  }
  function X(g, l, f, b) {
    return Yt(xt(l), g, f, b);
  }
  function de(g, l, f, b) {
    return Yt(or(l), g, f, b);
  }
  function re(g, l, f, b) {
    return Yt(Zt(l, g.length - f), g, f, b);
  }
  a.prototype.write = function(l, f, b, S) {
    if (f === void 0)
      S = "utf8", b = this.length, f = 0;
    else if (b === void 0 && typeof f == "string")
      S = f, b = this.length, f = 0;
    else if (isFinite(f))
      f = f >>> 0, isFinite(b) ? (b = b >>> 0, S === void 0 && (S = "utf8")) : (S = b, b = void 0);
    else
      throw new Error(
        "Buffer.write(string, encoding, offset[, length]) is no longer supported"
      );
    const T = this.length - f;
    if ((b === void 0 || b > T) && (b = T), l.length > 0 && (b < 0 || f < 0) || f > this.length)
      throw new RangeError("Attempt to write outside buffer bounds");
    S || (S = "utf8");
    let k = !1;
    for (; ; )
      switch (S) {
        case "hex":
          return H(this, l, f, b);
        case "utf8":
        case "utf-8":
          return F(this, l, f, b);
        case "ascii":
        case "latin1":
        case "binary":
          return X(this, l, f, b);
        case "base64":
          return de(this, l, f, b);
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return re(this, l, f, b);
        default:
          if (k)
            throw new TypeError("Unknown encoding: " + S);
          S = ("" + S).toLowerCase(), k = !0;
      }
  }, a.prototype.toJSON = function() {
    return {
      type: "Buffer",
      data: Array.prototype.slice.call(this._arr || this, 0)
    };
  };
  function P(g, l, f) {
    return l === 0 && f === g.length ? e.fromByteArray(g) : e.fromByteArray(g.slice(l, f));
  }
  function B(g, l, f) {
    f = Math.min(g.length, f);
    const b = [];
    let S = l;
    for (; S < f; ) {
      const T = g[S];
      let k = null, se = T > 239 ? 4 : T > 223 ? 3 : T > 191 ? 2 : 1;
      if (S + se <= f) {
        let xe, _e, Ce, me;
        switch (se) {
          case 1:
            T < 128 && (k = T);
            break;
          case 2:
            xe = g[S + 1], (xe & 192) === 128 && (me = (T & 31) << 6 | xe & 63, me > 127 && (k = me));
            break;
          case 3:
            xe = g[S + 1], _e = g[S + 2], (xe & 192) === 128 && (_e & 192) === 128 && (me = (T & 15) << 12 | (xe & 63) << 6 | _e & 63, me > 2047 && (me < 55296 || me > 57343) && (k = me));
            break;
          case 4:
            xe = g[S + 1], _e = g[S + 2], Ce = g[S + 3], (xe & 192) === 128 && (_e & 192) === 128 && (Ce & 192) === 128 && (me = (T & 15) << 18 | (xe & 63) << 12 | (_e & 63) << 6 | Ce & 63, me > 65535 && me < 1114112 && (k = me));
        }
      }
      k === null ? (k = 65533, se = 1) : k > 65535 && (k -= 65536, b.push(k >>> 10 & 1023 | 55296), k = 56320 | k & 1023), b.push(k), S += se;
    }
    return W(b);
  }
  const U = 4096;
  function W(g) {
    const l = g.length;
    if (l <= U)
      return String.fromCharCode.apply(String, g);
    let f = "", b = 0;
    for (; b < l; )
      f += String.fromCharCode.apply(
        String,
        g.slice(b, b += U)
      );
    return f;
  }
  function z(g, l, f) {
    let b = "";
    f = Math.min(g.length, f);
    for (let S = l; S < f; ++S)
      b += String.fromCharCode(g[S] & 127);
    return b;
  }
  function V(g, l, f) {
    let b = "";
    f = Math.min(g.length, f);
    for (let S = l; S < f; ++S)
      b += String.fromCharCode(g[S]);
    return b;
  }
  function Q(g, l, f) {
    const b = g.length;
    (!l || l < 0) && (l = 0), (!f || f < 0 || f > b) && (f = b);
    let S = "";
    for (let T = l; T < f; ++T)
      S += ar[g[T]];
    return S;
  }
  function ie(g, l, f) {
    const b = g.slice(l, f);
    let S = "";
    for (let T = 0; T < b.length - 1; T += 2)
      S += String.fromCharCode(b[T] + b[T + 1] * 256);
    return S;
  }
  a.prototype.slice = function(l, f) {
    const b = this.length;
    l = ~~l, f = f === void 0 ? b : ~~f, l < 0 ? (l += b, l < 0 && (l = 0)) : l > b && (l = b), f < 0 ? (f += b, f < 0 && (f = 0)) : f > b && (f = b), f < l && (f = l);
    const S = this.subarray(l, f);
    return Object.setPrototypeOf(S, a.prototype), S;
  };
  function q(g, l, f) {
    if (g % 1 !== 0 || g < 0)
      throw new RangeError("offset is not uint");
    if (g + l > f)
      throw new RangeError("Trying to access beyond buffer length");
  }
  a.prototype.readUintLE = a.prototype.readUIntLE = function(l, f, b) {
    l = l >>> 0, f = f >>> 0, b || q(l, f, this.length);
    let S = this[l], T = 1, k = 0;
    for (; ++k < f && (T *= 256); )
      S += this[l + k] * T;
    return S;
  }, a.prototype.readUintBE = a.prototype.readUIntBE = function(l, f, b) {
    l = l >>> 0, f = f >>> 0, b || q(l, f, this.length);
    let S = this[l + --f], T = 1;
    for (; f > 0 && (T *= 256); )
      S += this[l + --f] * T;
    return S;
  }, a.prototype.readUint8 = a.prototype.readUInt8 = function(l, f) {
    return l = l >>> 0, f || q(l, 1, this.length), this[l];
  }, a.prototype.readUint16LE = a.prototype.readUInt16LE = function(l, f) {
    return l = l >>> 0, f || q(l, 2, this.length), this[l] | this[l + 1] << 8;
  }, a.prototype.readUint16BE = a.prototype.readUInt16BE = function(l, f) {
    return l = l >>> 0, f || q(l, 2, this.length), this[l] << 8 | this[l + 1];
  }, a.prototype.readUint32LE = a.prototype.readUInt32LE = function(l, f) {
    return l = l >>> 0, f || q(l, 4, this.length), (this[l] | this[l + 1] << 8 | this[l + 2] << 16) + this[l + 3] * 16777216;
  }, a.prototype.readUint32BE = a.prototype.readUInt32BE = function(l, f) {
    return l = l >>> 0, f || q(l, 4, this.length), this[l] * 16777216 + (this[l + 1] << 16 | this[l + 2] << 8 | this[l + 3]);
  }, a.prototype.readBigUInt64LE = et(function(l) {
    l = l >>> 0, N(l, "offset");
    const f = this[l], b = this[l + 7];
    (f === void 0 || b === void 0) && j(l, this.length - 8);
    const S = f + this[++l] * 2 ** 8 + this[++l] * 2 ** 16 + this[++l] * 2 ** 24, T = this[++l] + this[++l] * 2 ** 8 + this[++l] * 2 ** 16 + b * 2 ** 24;
    return BigInt(S) + (BigInt(T) << BigInt(32));
  }), a.prototype.readBigUInt64BE = et(function(l) {
    l = l >>> 0, N(l, "offset");
    const f = this[l], b = this[l + 7];
    (f === void 0 || b === void 0) && j(l, this.length - 8);
    const S = f * 2 ** 24 + this[++l] * 2 ** 16 + this[++l] * 2 ** 8 + this[++l], T = this[++l] * 2 ** 24 + this[++l] * 2 ** 16 + this[++l] * 2 ** 8 + b;
    return (BigInt(S) << BigInt(32)) + BigInt(T);
  }), a.prototype.readIntLE = function(l, f, b) {
    l = l >>> 0, f = f >>> 0, b || q(l, f, this.length);
    let S = this[l], T = 1, k = 0;
    for (; ++k < f && (T *= 256); )
      S += this[l + k] * T;
    return T *= 128, S >= T && (S -= Math.pow(2, 8 * f)), S;
  }, a.prototype.readIntBE = function(l, f, b) {
    l = l >>> 0, f = f >>> 0, b || q(l, f, this.length);
    let S = f, T = 1, k = this[l + --S];
    for (; S > 0 && (T *= 256); )
      k += this[l + --S] * T;
    return T *= 128, k >= T && (k -= Math.pow(2, 8 * f)), k;
  }, a.prototype.readInt8 = function(l, f) {
    return l = l >>> 0, f || q(l, 1, this.length), this[l] & 128 ? (255 - this[l] + 1) * -1 : this[l];
  }, a.prototype.readInt16LE = function(l, f) {
    l = l >>> 0, f || q(l, 2, this.length);
    const b = this[l] | this[l + 1] << 8;
    return b & 32768 ? b | 4294901760 : b;
  }, a.prototype.readInt16BE = function(l, f) {
    l = l >>> 0, f || q(l, 2, this.length);
    const b = this[l + 1] | this[l] << 8;
    return b & 32768 ? b | 4294901760 : b;
  }, a.prototype.readInt32LE = function(l, f) {
    return l = l >>> 0, f || q(l, 4, this.length), this[l] | this[l + 1] << 8 | this[l + 2] << 16 | this[l + 3] << 24;
  }, a.prototype.readInt32BE = function(l, f) {
    return l = l >>> 0, f || q(l, 4, this.length), this[l] << 24 | this[l + 1] << 16 | this[l + 2] << 8 | this[l + 3];
  }, a.prototype.readBigInt64LE = et(function(l) {
    l = l >>> 0, N(l, "offset");
    const f = this[l], b = this[l + 7];
    (f === void 0 || b === void 0) && j(l, this.length - 8);
    const S = this[l + 4] + this[l + 5] * 2 ** 8 + this[l + 6] * 2 ** 16 + (b << 24);
    return (BigInt(S) << BigInt(32)) + BigInt(f + this[++l] * 2 ** 8 + this[++l] * 2 ** 16 + this[++l] * 2 ** 24);
  }), a.prototype.readBigInt64BE = et(function(l) {
    l = l >>> 0, N(l, "offset");
    const f = this[l], b = this[l + 7];
    (f === void 0 || b === void 0) && j(l, this.length - 8);
    const S = (f << 24) + // Overflow
    this[++l] * 2 ** 16 + this[++l] * 2 ** 8 + this[++l];
    return (BigInt(S) << BigInt(32)) + BigInt(this[++l] * 2 ** 24 + this[++l] * 2 ** 16 + this[++l] * 2 ** 8 + b);
  }), a.prototype.readFloatLE = function(l, f) {
    return l = l >>> 0, f || q(l, 4, this.length), r.read(this, l, !0, 23, 4);
  }, a.prototype.readFloatBE = function(l, f) {
    return l = l >>> 0, f || q(l, 4, this.length), r.read(this, l, !1, 23, 4);
  }, a.prototype.readDoubleLE = function(l, f) {
    return l = l >>> 0, f || q(l, 8, this.length), r.read(this, l, !0, 52, 8);
  }, a.prototype.readDoubleBE = function(l, f) {
    return l = l >>> 0, f || q(l, 8, this.length), r.read(this, l, !1, 52, 8);
  };
  function te(g, l, f, b, S, T) {
    if (!a.isBuffer(g))
      throw new TypeError('"buffer" argument must be a Buffer instance');
    if (l > S || l < T)
      throw new RangeError('"value" argument is out of bounds');
    if (f + b > g.length)
      throw new RangeError("Index out of range");
  }
  a.prototype.writeUintLE = a.prototype.writeUIntLE = function(l, f, b, S) {
    if (l = +l, f = f >>> 0, b = b >>> 0, !S) {
      const se = Math.pow(2, 8 * b) - 1;
      te(this, l, f, b, se, 0);
    }
    let T = 1, k = 0;
    for (this[f] = l & 255; ++k < b && (T *= 256); )
      this[f + k] = l / T & 255;
    return f + b;
  }, a.prototype.writeUintBE = a.prototype.writeUIntBE = function(l, f, b, S) {
    if (l = +l, f = f >>> 0, b = b >>> 0, !S) {
      const se = Math.pow(2, 8 * b) - 1;
      te(this, l, f, b, se, 0);
    }
    let T = b - 1, k = 1;
    for (this[f + T] = l & 255; --T >= 0 && (k *= 256); )
      this[f + T] = l / k & 255;
    return f + b;
  }, a.prototype.writeUint8 = a.prototype.writeUInt8 = function(l, f, b) {
    return l = +l, f = f >>> 0, b || te(this, l, f, 1, 255, 0), this[f] = l & 255, f + 1;
  }, a.prototype.writeUint16LE = a.prototype.writeUInt16LE = function(l, f, b) {
    return l = +l, f = f >>> 0, b || te(this, l, f, 2, 65535, 0), this[f] = l & 255, this[f + 1] = l >>> 8, f + 2;
  }, a.prototype.writeUint16BE = a.prototype.writeUInt16BE = function(l, f, b) {
    return l = +l, f = f >>> 0, b || te(this, l, f, 2, 65535, 0), this[f] = l >>> 8, this[f + 1] = l & 255, f + 2;
  }, a.prototype.writeUint32LE = a.prototype.writeUInt32LE = function(l, f, b) {
    return l = +l, f = f >>> 0, b || te(this, l, f, 4, 4294967295, 0), this[f + 3] = l >>> 24, this[f + 2] = l >>> 16, this[f + 1] = l >>> 8, this[f] = l & 255, f + 4;
  }, a.prototype.writeUint32BE = a.prototype.writeUInt32BE = function(l, f, b) {
    return l = +l, f = f >>> 0, b || te(this, l, f, 4, 4294967295, 0), this[f] = l >>> 24, this[f + 1] = l >>> 16, this[f + 2] = l >>> 8, this[f + 3] = l & 255, f + 4;
  };
  function ve(g, l, f, b, S) {
    w(l, b, S, g, f, 7);
    let T = Number(l & BigInt(4294967295));
    g[f++] = T, T = T >> 8, g[f++] = T, T = T >> 8, g[f++] = T, T = T >> 8, g[f++] = T;
    let k = Number(l >> BigInt(32) & BigInt(4294967295));
    return g[f++] = k, k = k >> 8, g[f++] = k, k = k >> 8, g[f++] = k, k = k >> 8, g[f++] = k, f;
  }
  function be(g, l, f, b, S) {
    w(l, b, S, g, f, 7);
    let T = Number(l & BigInt(4294967295));
    g[f + 7] = T, T = T >> 8, g[f + 6] = T, T = T >> 8, g[f + 5] = T, T = T >> 8, g[f + 4] = T;
    let k = Number(l >> BigInt(32) & BigInt(4294967295));
    return g[f + 3] = k, k = k >> 8, g[f + 2] = k, k = k >> 8, g[f + 1] = k, k = k >> 8, g[f] = k, f + 8;
  }
  a.prototype.writeBigUInt64LE = et(function(l, f = 0) {
    return ve(this, l, f, BigInt(0), BigInt("0xffffffffffffffff"));
  }), a.prototype.writeBigUInt64BE = et(function(l, f = 0) {
    return be(this, l, f, BigInt(0), BigInt("0xffffffffffffffff"));
  }), a.prototype.writeIntLE = function(l, f, b, S) {
    if (l = +l, f = f >>> 0, !S) {
      const xe = Math.pow(2, 8 * b - 1);
      te(this, l, f, b, xe - 1, -xe);
    }
    let T = 0, k = 1, se = 0;
    for (this[f] = l & 255; ++T < b && (k *= 256); )
      l < 0 && se === 0 && this[f + T - 1] !== 0 && (se = 1), this[f + T] = (l / k >> 0) - se & 255;
    return f + b;
  }, a.prototype.writeIntBE = function(l, f, b, S) {
    if (l = +l, f = f >>> 0, !S) {
      const xe = Math.pow(2, 8 * b - 1);
      te(this, l, f, b, xe - 1, -xe);
    }
    let T = b - 1, k = 1, se = 0;
    for (this[f + T] = l & 255; --T >= 0 && (k *= 256); )
      l < 0 && se === 0 && this[f + T + 1] !== 0 && (se = 1), this[f + T] = (l / k >> 0) - se & 255;
    return f + b;
  }, a.prototype.writeInt8 = function(l, f, b) {
    return l = +l, f = f >>> 0, b || te(this, l, f, 1, 127, -128), l < 0 && (l = 255 + l + 1), this[f] = l & 255, f + 1;
  }, a.prototype.writeInt16LE = function(l, f, b) {
    return l = +l, f = f >>> 0, b || te(this, l, f, 2, 32767, -32768), this[f] = l & 255, this[f + 1] = l >>> 8, f + 2;
  }, a.prototype.writeInt16BE = function(l, f, b) {
    return l = +l, f = f >>> 0, b || te(this, l, f, 2, 32767, -32768), this[f] = l >>> 8, this[f + 1] = l & 255, f + 2;
  }, a.prototype.writeInt32LE = function(l, f, b) {
    return l = +l, f = f >>> 0, b || te(this, l, f, 4, 2147483647, -2147483648), this[f] = l & 255, this[f + 1] = l >>> 8, this[f + 2] = l >>> 16, this[f + 3] = l >>> 24, f + 4;
  }, a.prototype.writeInt32BE = function(l, f, b) {
    return l = +l, f = f >>> 0, b || te(this, l, f, 4, 2147483647, -2147483648), l < 0 && (l = 4294967295 + l + 1), this[f] = l >>> 24, this[f + 1] = l >>> 16, this[f + 2] = l >>> 8, this[f + 3] = l & 255, f + 4;
  }, a.prototype.writeBigInt64LE = et(function(l, f = 0) {
    return ve(this, l, f, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
  }), a.prototype.writeBigInt64BE = et(function(l, f = 0) {
    return be(this, l, f, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"));
  });
  function De(g, l, f, b, S, T) {
    if (f + b > g.length)
      throw new RangeError("Index out of range");
    if (f < 0)
      throw new RangeError("Index out of range");
  }
  function C(g, l, f, b, S) {
    return l = +l, f = f >>> 0, S || De(g, l, f, 4), r.write(g, l, f, b, 23, 4), f + 4;
  }
  a.prototype.writeFloatLE = function(l, f, b) {
    return C(this, l, f, !0, b);
  }, a.prototype.writeFloatBE = function(l, f, b) {
    return C(this, l, f, !1, b);
  };
  function I(g, l, f, b, S) {
    return l = +l, f = f >>> 0, S || De(g, l, f, 8), r.write(g, l, f, b, 52, 8), f + 8;
  }
  a.prototype.writeDoubleLE = function(l, f, b) {
    return I(this, l, f, !0, b);
  }, a.prototype.writeDoubleBE = function(l, f, b) {
    return I(this, l, f, !1, b);
  }, a.prototype.copy = function(l, f, b, S) {
    if (!a.isBuffer(l))
      throw new TypeError("argument should be a Buffer");
    if (b || (b = 0), !S && S !== 0 && (S = this.length), f >= l.length && (f = l.length), f || (f = 0), S > 0 && S < b && (S = b), S === b || l.length === 0 || this.length === 0)
      return 0;
    if (f < 0)
      throw new RangeError("targetStart out of bounds");
    if (b < 0 || b >= this.length)
      throw new RangeError("Index out of range");
    if (S < 0)
      throw new RangeError("sourceEnd out of bounds");
    S > this.length && (S = this.length), l.length - f < S - b && (S = l.length - f + b);
    const T = S - b;
    return this === l && typeof Uint8Array.prototype.copyWithin == "function" ? this.copyWithin(f, b, S) : Uint8Array.prototype.set.call(
      l,
      this.subarray(b, S),
      f
    ), T;
  }, a.prototype.fill = function(l, f, b, S) {
    if (typeof l == "string") {
      if (typeof f == "string" ? (S = f, f = 0, b = this.length) : typeof b == "string" && (S = b, b = this.length), S !== void 0 && typeof S != "string")
        throw new TypeError("encoding must be a string");
      if (typeof S == "string" && !a.isEncoding(S))
        throw new TypeError("Unknown encoding: " + S);
      if (l.length === 1) {
        const k = l.charCodeAt(0);
        (S === "utf8" && k < 128 || S === "latin1") && (l = k);
      }
    } else
      typeof l == "number" ? l = l & 255 : typeof l == "boolean" && (l = Number(l));
    if (f < 0 || this.length < f || this.length < b)
      throw new RangeError("Out of range index");
    if (b <= f)
      return this;
    f = f >>> 0, b = b === void 0 ? this.length : b >>> 0, l || (l = 0);
    let T;
    if (typeof l == "number")
      for (T = f; T < b; ++T)
        this[T] = l;
    else {
      const k = a.isBuffer(l) ? l : a.from(l, S), se = k.length;
      if (se === 0)
        throw new TypeError('The value "' + l + '" is invalid for argument "value"');
      for (T = 0; T < b - f; ++T)
        this[T + f] = k[T % se];
    }
    return this;
  };
  const $ = {};
  function Y(g, l, f) {
    $[g] = class extends f {
      constructor() {
        super(), Object.defineProperty(this, "message", {
          value: l.apply(this, arguments),
          writable: !0,
          configurable: !0
        }), this.name = `${this.name} [${g}]`, this.stack, delete this.name;
      }
      get code() {
        return g;
      }
      set code(S) {
        Object.defineProperty(this, "code", {
          configurable: !0,
          enumerable: !0,
          value: S,
          writable: !0
        });
      }
      toString() {
        return `${this.name} [${g}]: ${this.message}`;
      }
    };
  }
  Y(
    "ERR_BUFFER_OUT_OF_BOUNDS",
    function(g) {
      return g ? `${g} is outside of buffer bounds` : "Attempt to access memory outside buffer bounds";
    },
    RangeError
  ), Y(
    "ERR_INVALID_ARG_TYPE",
    function(g, l) {
      return `The "${g}" argument must be of type number. Received type ${typeof l}`;
    },
    TypeError
  ), Y(
    "ERR_OUT_OF_RANGE",
    function(g, l, f) {
      let b = `The value of "${g}" is out of range.`, S = f;
      return Number.isInteger(f) && Math.abs(f) > 2 ** 32 ? S = oe(String(f)) : typeof f == "bigint" && (S = String(f), (f > BigInt(2) ** BigInt(32) || f < -(BigInt(2) ** BigInt(32))) && (S = oe(S)), S += "n"), b += ` It must be ${l}. Received ${S}`, b;
    },
    RangeError
  );
  function oe(g) {
    let l = "", f = g.length;
    const b = g[0] === "-" ? 1 : 0;
    for (; f >= b + 4; f -= 3)
      l = `_${g.slice(f - 3, f)}${l}`;
    return `${g.slice(0, f)}${l}`;
  }
  function m(g, l, f) {
    N(l, "offset"), (g[l] === void 0 || g[l + f] === void 0) && j(l, g.length - (f + 1));
  }
  function w(g, l, f, b, S, T) {
    if (g > f || g < l) {
      const k = typeof l == "bigint" ? "n" : "";
      let se;
      throw T > 3 ? l === 0 || l === BigInt(0) ? se = `>= 0${k} and < 2${k} ** ${(T + 1) * 8}${k}` : se = `>= -(2${k} ** ${(T + 1) * 8 - 1}${k}) and < 2 ** ${(T + 1) * 8 - 1}${k}` : se = `>= ${l}${k} and <= ${f}${k}`, new $.ERR_OUT_OF_RANGE("value", se, g);
    }
    m(b, S, T);
  }
  function N(g, l) {
    if (typeof g != "number")
      throw new $.ERR_INVALID_ARG_TYPE(l, "number", g);
  }
  function j(g, l, f) {
    throw Math.floor(g) !== g ? (N(g, f), new $.ERR_OUT_OF_RANGE(f || "offset", "an integer", g)) : l < 0 ? new $.ERR_BUFFER_OUT_OF_BOUNDS() : new $.ERR_OUT_OF_RANGE(
      f || "offset",
      `>= ${f ? 1 : 0} and <= ${l}`,
      g
    );
  }
  const Ee = /[^+/0-9A-Za-z-_]/g;
  function ae(g) {
    if (g = g.split("=")[0], g = g.trim().replace(Ee, ""), g.length < 2)
      return "";
    for (; g.length % 4 !== 0; )
      g = g + "=";
    return g;
  }
  function pe(g, l) {
    l = l || 1 / 0;
    let f;
    const b = g.length;
    let S = null;
    const T = [];
    for (let k = 0; k < b; ++k) {
      if (f = g.charCodeAt(k), f > 55295 && f < 57344) {
        if (!S) {
          if (f > 56319) {
            (l -= 3) > -1 && T.push(239, 191, 189);
            continue;
          } else if (k + 1 === b) {
            (l -= 3) > -1 && T.push(239, 191, 189);
            continue;
          }
          S = f;
          continue;
        }
        if (f < 56320) {
          (l -= 3) > -1 && T.push(239, 191, 189), S = f;
          continue;
        }
        f = (S - 55296 << 10 | f - 56320) + 65536;
      } else
        S && (l -= 3) > -1 && T.push(239, 191, 189);
      if (S = null, f < 128) {
        if ((l -= 1) < 0)
          break;
        T.push(f);
      } else if (f < 2048) {
        if ((l -= 2) < 0)
          break;
        T.push(
          f >> 6 | 192,
          f & 63 | 128
        );
      } else if (f < 65536) {
        if ((l -= 3) < 0)
          break;
        T.push(
          f >> 12 | 224,
          f >> 6 & 63 | 128,
          f & 63 | 128
        );
      } else if (f < 1114112) {
        if ((l -= 4) < 0)
          break;
        T.push(
          f >> 18 | 240,
          f >> 12 & 63 | 128,
          f >> 6 & 63 | 128,
          f & 63 | 128
        );
      } else
        throw new Error("Invalid code point");
    }
    return T;
  }
  function xt(g) {
    const l = [];
    for (let f = 0; f < g.length; ++f)
      l.push(g.charCodeAt(f) & 255);
    return l;
  }
  function Zt(g, l) {
    let f, b, S;
    const T = [];
    for (let k = 0; k < g.length && !((l -= 2) < 0); ++k)
      f = g.charCodeAt(k), b = f >> 8, S = f % 256, T.push(S), T.push(b);
    return T;
  }
  function or(g) {
    return e.toByteArray(ae(g));
  }
  function Yt(g, l, f, b) {
    let S;
    for (S = 0; S < b && !(S + f >= l.length || S >= g.length); ++S)
      l[S + f] = g[S];
    return S;
  }
  function Je(g, l) {
    return g instanceof l || g != null && g.constructor != null && g.constructor.name != null && g.constructor.name === l.name;
  }
  function Lt(g) {
    return g !== g;
  }
  const ar = function() {
    const g = "0123456789abcdef", l = new Array(256);
    for (let f = 0; f < 16; ++f) {
      const b = f * 16;
      for (let S = 0; S < 16; ++S)
        l[b + S] = g[f] + g[S];
    }
    return l;
  }();
  function et(g) {
    return typeof BigInt > "u" ? Pt : g;
  }
  function Pt() {
    throw new Error("BigInt not supported");
  }
})(di);
/*! safe-buffer. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */
(function(t, e) {
  var r = di, n = r.Buffer;
  function i(o, a) {
    for (var c in o)
      a[c] = o[c];
  }
  n.from && n.alloc && n.allocUnsafe && n.allocUnsafeSlow ? t.exports = r : (i(r, e), e.Buffer = s);
  function s(o, a, c) {
    return n(o, a, c);
  }
  s.prototype = Object.create(n.prototype), i(n, s), s.from = function(o, a, c) {
    if (typeof o == "number")
      throw new TypeError("Argument must not be a number");
    return n(o, a, c);
  }, s.alloc = function(o, a, c) {
    if (typeof o != "number")
      throw new TypeError("Argument must be a number");
    var u = n(o);
    return a !== void 0 ? typeof c == "string" ? u.fill(a, c) : u.fill(a) : u.fill(0), u;
  }, s.allocUnsafe = function(o) {
    if (typeof o != "number")
      throw new TypeError("Argument must be a number");
    return n(o);
  }, s.allocUnsafeSlow = function(o) {
    if (typeof o != "number")
      throw new TypeError("Argument must be a number");
    return r.SlowBuffer(o);
  };
})(tc, tc.exports);
var Sr = tc.exports, fh = Sr.Buffer;
function Cs(t, e) {
  this._block = fh.alloc(t), this._finalSize = e, this._blockSize = t, this._len = 0;
}
Cs.prototype.update = function(t, e) {
  typeof t == "string" && (e = e || "utf8", t = fh.from(t, e));
  for (var r = this._block, n = this._blockSize, i = t.length, s = this._len, o = 0; o < i; ) {
    for (var a = s % n, c = Math.min(i - o, n - a), u = 0; u < c; u++)
      r[a + u] = t[o + u];
    s += c, o += c, s % n === 0 && this._update(r);
  }
  return this._len += i, this;
};
Cs.prototype.digest = function(t) {
  var e = this._len % this._blockSize;
  this._block[e] = 128, this._block.fill(0, e + 1), e >= this._finalSize && (this._update(this._block), this._block.fill(0));
  var r = this._len * 8;
  if (r <= 4294967295)
    this._block.writeUInt32BE(r, this._blockSize - 4);
  else {
    var n = (r & 4294967295) >>> 0, i = (r - n) / 4294967296;
    this._block.writeUInt32BE(i, this._blockSize - 8), this._block.writeUInt32BE(n, this._blockSize - 4);
  }
  this._update(this._block);
  var s = this._hash();
  return t ? s.toString(t) : s;
};
Cs.prototype._update = function() {
  throw new Error("_update must be implemented by subclass");
};
var Ln = Cs, og = Ot, hh = Ln, ag = Sr.Buffer, cg = [
  1518500249,
  1859775393,
  -1894007588,
  -899497514
], ug = new Array(80);
function pi() {
  this.init(), this._w = ug, hh.call(this, 64, 56);
}
og(pi, hh);
pi.prototype.init = function() {
  return this._a = 1732584193, this._b = 4023233417, this._c = 2562383102, this._d = 271733878, this._e = 3285377520, this;
};
function lg(t) {
  return t << 5 | t >>> 27;
}
function fg(t) {
  return t << 30 | t >>> 2;
}
function hg(t, e, r, n) {
  return t === 0 ? e & r | ~e & n : t === 2 ? e & r | e & n | r & n : e ^ r ^ n;
}
pi.prototype._update = function(t) {
  for (var e = this._w, r = this._a | 0, n = this._b | 0, i = this._c | 0, s = this._d | 0, o = this._e | 0, a = 0; a < 16; ++a)
    e[a] = t.readInt32BE(a * 4);
  for (; a < 80; ++a)
    e[a] = e[a - 3] ^ e[a - 8] ^ e[a - 14] ^ e[a - 16];
  for (var c = 0; c < 80; ++c) {
    var u = ~~(c / 20), h = lg(r) + hg(u, n, i, s) + o + e[c] + cg[u] | 0;
    o = s, s = i, i = fg(n), n = r, r = h;
  }
  this._a = r + this._a | 0, this._b = n + this._b | 0, this._c = i + this._c | 0, this._d = s + this._d | 0, this._e = o + this._e | 0;
};
pi.prototype._hash = function() {
  var t = ag.allocUnsafe(20);
  return t.writeInt32BE(this._a | 0, 0), t.writeInt32BE(this._b | 0, 4), t.writeInt32BE(this._c | 0, 8), t.writeInt32BE(this._d | 0, 12), t.writeInt32BE(this._e | 0, 16), t;
};
var dg = pi, pg = Ot, dh = Ln, gg = Sr.Buffer, bg = [
  1518500249,
  1859775393,
  -1894007588,
  -899497514
], yg = new Array(80);
function gi() {
  this.init(), this._w = yg, dh.call(this, 64, 56);
}
pg(gi, dh);
gi.prototype.init = function() {
  return this._a = 1732584193, this._b = 4023233417, this._c = 2562383102, this._d = 271733878, this._e = 3285377520, this;
};
function mg(t) {
  return t << 1 | t >>> 31;
}
function vg(t) {
  return t << 5 | t >>> 27;
}
function wg(t) {
  return t << 30 | t >>> 2;
}
function _g(t, e, r, n) {
  return t === 0 ? e & r | ~e & n : t === 2 ? e & r | e & n | r & n : e ^ r ^ n;
}
gi.prototype._update = function(t) {
  for (var e = this._w, r = this._a | 0, n = this._b | 0, i = this._c | 0, s = this._d | 0, o = this._e | 0, a = 0; a < 16; ++a)
    e[a] = t.readInt32BE(a * 4);
  for (; a < 80; ++a)
    e[a] = mg(e[a - 3] ^ e[a - 8] ^ e[a - 14] ^ e[a - 16]);
  for (var c = 0; c < 80; ++c) {
    var u = ~~(c / 20), h = vg(r) + _g(u, n, i, s) + o + e[c] + bg[u] | 0;
    o = s, s = i, i = wg(n), n = r, r = h;
  }
  this._a = r + this._a | 0, this._b = n + this._b | 0, this._c = i + this._c | 0, this._d = s + this._d | 0, this._e = o + this._e | 0;
};
gi.prototype._hash = function() {
  var t = gg.allocUnsafe(20);
  return t.writeInt32BE(this._a | 0, 0), t.writeInt32BE(this._b | 0, 4), t.writeInt32BE(this._c | 0, 8), t.writeInt32BE(this._d | 0, 12), t.writeInt32BE(this._e | 0, 16), t;
};
var Eg = gi, Sg = Ot, ph = Ln, xg = Sr.Buffer, Cg = [
  1116352408,
  1899447441,
  3049323471,
  3921009573,
  961987163,
  1508970993,
  2453635748,
  2870763221,
  3624381080,
  310598401,
  607225278,
  1426881987,
  1925078388,
  2162078206,
  2614888103,
  3248222580,
  3835390401,
  4022224774,
  264347078,
  604807628,
  770255983,
  1249150122,
  1555081692,
  1996064986,
  2554220882,
  2821834349,
  2952996808,
  3210313671,
  3336571891,
  3584528711,
  113926993,
  338241895,
  666307205,
  773529912,
  1294757372,
  1396182291,
  1695183700,
  1986661051,
  2177026350,
  2456956037,
  2730485921,
  2820302411,
  3259730800,
  3345764771,
  3516065817,
  3600352804,
  4094571909,
  275423344,
  430227734,
  506948616,
  659060556,
  883997877,
  958139571,
  1322822218,
  1537002063,
  1747873779,
  1955562222,
  2024104815,
  2227730452,
  2361852424,
  2428436474,
  2756734187,
  3204031479,
  3329325298
], Ig = new Array(64);
function bi() {
  this.init(), this._w = Ig, ph.call(this, 64, 56);
}
Sg(bi, ph);
bi.prototype.init = function() {
  return this._a = 1779033703, this._b = 3144134277, this._c = 1013904242, this._d = 2773480762, this._e = 1359893119, this._f = 2600822924, this._g = 528734635, this._h = 1541459225, this;
};
function Rg(t, e, r) {
  return r ^ t & (e ^ r);
}
function Ag(t, e, r) {
  return t & e | r & (t | e);
}
function Tg(t) {
  return (t >>> 2 | t << 30) ^ (t >>> 13 | t << 19) ^ (t >>> 22 | t << 10);
}
function Mg(t) {
  return (t >>> 6 | t << 26) ^ (t >>> 11 | t << 21) ^ (t >>> 25 | t << 7);
}
function Og(t) {
  return (t >>> 7 | t << 25) ^ (t >>> 18 | t << 14) ^ t >>> 3;
}
function kg(t) {
  return (t >>> 17 | t << 15) ^ (t >>> 19 | t << 13) ^ t >>> 10;
}
bi.prototype._update = function(t) {
  for (var e = this._w, r = this._a | 0, n = this._b | 0, i = this._c | 0, s = this._d | 0, o = this._e | 0, a = this._f | 0, c = this._g | 0, u = this._h | 0, h = 0; h < 16; ++h)
    e[h] = t.readInt32BE(h * 4);
  for (; h < 64; ++h)
    e[h] = kg(e[h - 2]) + e[h - 7] + Og(e[h - 15]) + e[h - 16] | 0;
  for (var d = 0; d < 64; ++d) {
    var p = u + Mg(o) + Rg(o, a, c) + Cg[d] + e[d] | 0, v = Tg(r) + Ag(r, n, i) | 0;
    u = c, c = a, a = o, o = s + p | 0, s = i, i = n, n = r, r = p + v | 0;
  }
  this._a = r + this._a | 0, this._b = n + this._b | 0, this._c = i + this._c | 0, this._d = s + this._d | 0, this._e = o + this._e | 0, this._f = a + this._f | 0, this._g = c + this._g | 0, this._h = u + this._h | 0;
};
bi.prototype._hash = function() {
  var t = xg.allocUnsafe(32);
  return t.writeInt32BE(this._a, 0), t.writeInt32BE(this._b, 4), t.writeInt32BE(this._c, 8), t.writeInt32BE(this._d, 12), t.writeInt32BE(this._e, 16), t.writeInt32BE(this._f, 20), t.writeInt32BE(this._g, 24), t.writeInt32BE(this._h, 28), t;
};
var gh = bi, Ng = Ot, Lg = gh, Pg = Ln, Bg = Sr.Buffer, $g = new Array(64);
function Is() {
  this.init(), this._w = $g, Pg.call(this, 64, 56);
}
Ng(Is, Lg);
Is.prototype.init = function() {
  return this._a = 3238371032, this._b = 914150663, this._c = 812702999, this._d = 4144912697, this._e = 4290775857, this._f = 1750603025, this._g = 1694076839, this._h = 3204075428, this;
};
Is.prototype._hash = function() {
  var t = Bg.allocUnsafe(28);
  return t.writeInt32BE(this._a, 0), t.writeInt32BE(this._b, 4), t.writeInt32BE(this._c, 8), t.writeInt32BE(this._d, 12), t.writeInt32BE(this._e, 16), t.writeInt32BE(this._f, 20), t.writeInt32BE(this._g, 24), t;
};
var Dg = Is, Fg = Ot, bh = Ln, jg = Sr.Buffer, $u = [
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
], Ug = new Array(160);
function yi() {
  this.init(), this._w = Ug, bh.call(this, 128, 112);
}
Fg(yi, bh);
yi.prototype.init = function() {
  return this._ah = 1779033703, this._bh = 3144134277, this._ch = 1013904242, this._dh = 2773480762, this._eh = 1359893119, this._fh = 2600822924, this._gh = 528734635, this._hh = 1541459225, this._al = 4089235720, this._bl = 2227873595, this._cl = 4271175723, this._dl = 1595750129, this._el = 2917565137, this._fl = 725511199, this._gl = 4215389547, this._hl = 327033209, this;
};
function Du(t, e, r) {
  return r ^ t & (e ^ r);
}
function Fu(t, e, r) {
  return t & e | r & (t | e);
}
function ju(t, e) {
  return (t >>> 28 | e << 4) ^ (e >>> 2 | t << 30) ^ (e >>> 7 | t << 25);
}
function Uu(t, e) {
  return (t >>> 14 | e << 18) ^ (t >>> 18 | e << 14) ^ (e >>> 9 | t << 23);
}
function Wg(t, e) {
  return (t >>> 1 | e << 31) ^ (t >>> 8 | e << 24) ^ t >>> 7;
}
function Vg(t, e) {
  return (t >>> 1 | e << 31) ^ (t >>> 8 | e << 24) ^ (t >>> 7 | e << 25);
}
function Hg(t, e) {
  return (t >>> 19 | e << 13) ^ (e >>> 29 | t << 3) ^ t >>> 6;
}
function zg(t, e) {
  return (t >>> 19 | e << 13) ^ (e >>> 29 | t << 3) ^ (t >>> 6 | e << 26);
}
function Fe(t, e) {
  return t >>> 0 < e >>> 0 ? 1 : 0;
}
yi.prototype._update = function(t) {
  for (var e = this._w, r = this._ah | 0, n = this._bh | 0, i = this._ch | 0, s = this._dh | 0, o = this._eh | 0, a = this._fh | 0, c = this._gh | 0, u = this._hh | 0, h = this._al | 0, d = this._bl | 0, p = this._cl | 0, v = this._dl | 0, _ = this._el | 0, A = this._fl | 0, R = this._gl | 0, y = this._hl | 0, E = 0; E < 32; E += 2)
    e[E] = t.readInt32BE(E * 4), e[E + 1] = t.readInt32BE(E * 4 + 4);
  for (; E < 160; E += 2) {
    var x = e[E - 30], O = e[E - 15 * 2 + 1], M = Wg(x, O), D = Vg(O, x);
    x = e[E - 2 * 2], O = e[E - 2 * 2 + 1];
    var J = Hg(x, O), H = zg(O, x), F = e[E - 7 * 2], X = e[E - 7 * 2 + 1], de = e[E - 16 * 2], re = e[E - 16 * 2 + 1], P = D + X | 0, B = M + F + Fe(P, D) | 0;
    P = P + H | 0, B = B + J + Fe(P, H) | 0, P = P + re | 0, B = B + de + Fe(P, re) | 0, e[E] = B, e[E + 1] = P;
  }
  for (var U = 0; U < 160; U += 2) {
    B = e[U], P = e[U + 1];
    var W = Fu(r, n, i), z = Fu(h, d, p), V = ju(r, h), Q = ju(h, r), ie = Uu(o, _), q = Uu(_, o), te = $u[U], ve = $u[U + 1], be = Du(o, a, c), De = Du(_, A, R), C = y + q | 0, I = u + ie + Fe(C, y) | 0;
    C = C + De | 0, I = I + be + Fe(C, De) | 0, C = C + ve | 0, I = I + te + Fe(C, ve) | 0, C = C + P | 0, I = I + B + Fe(C, P) | 0;
    var $ = Q + z | 0, Y = V + W + Fe($, Q) | 0;
    u = c, y = R, c = a, R = A, a = o, A = _, _ = v + C | 0, o = s + I + Fe(_, v) | 0, s = i, v = p, i = n, p = d, n = r, d = h, h = C + $ | 0, r = I + Y + Fe(h, C) | 0;
  }
  this._al = this._al + h | 0, this._bl = this._bl + d | 0, this._cl = this._cl + p | 0, this._dl = this._dl + v | 0, this._el = this._el + _ | 0, this._fl = this._fl + A | 0, this._gl = this._gl + R | 0, this._hl = this._hl + y | 0, this._ah = this._ah + r + Fe(this._al, h) | 0, this._bh = this._bh + n + Fe(this._bl, d) | 0, this._ch = this._ch + i + Fe(this._cl, p) | 0, this._dh = this._dh + s + Fe(this._dl, v) | 0, this._eh = this._eh + o + Fe(this._el, _) | 0, this._fh = this._fh + a + Fe(this._fl, A) | 0, this._gh = this._gh + c + Fe(this._gl, R) | 0, this._hh = this._hh + u + Fe(this._hl, y) | 0;
};
yi.prototype._hash = function() {
  var t = jg.allocUnsafe(64);
  function e(r, n, i) {
    t.writeInt32BE(r, i), t.writeInt32BE(n, i + 4);
  }
  return e(this._ah, this._al, 0), e(this._bh, this._bl, 8), e(this._ch, this._cl, 16), e(this._dh, this._dl, 24), e(this._eh, this._el, 32), e(this._fh, this._fl, 40), e(this._gh, this._gl, 48), e(this._hh, this._hl, 56), t;
};
var yh = yi, qg = Ot, Gg = yh, Jg = Ln, Qg = Sr.Buffer, Zg = new Array(160);
function Rs() {
  this.init(), this._w = Zg, Jg.call(this, 128, 112);
}
qg(Rs, Gg);
Rs.prototype.init = function() {
  return this._ah = 3418070365, this._bh = 1654270250, this._ch = 2438529370, this._dh = 355462360, this._eh = 1731405415, this._fh = 2394180231, this._gh = 3675008525, this._hh = 1203062813, this._al = 3238371032, this._bl = 914150663, this._cl = 812702999, this._dl = 4144912697, this._el = 4290775857, this._fl = 1750603025, this._gl = 1694076839, this._hl = 3204075428, this;
};
Rs.prototype._hash = function() {
  var t = Qg.allocUnsafe(48);
  function e(r, n, i) {
    t.writeInt32BE(r, i), t.writeInt32BE(n, i + 4);
  }
  return e(this._ah, this._al, 0), e(this._bh, this._bl, 8), e(this._ch, this._cl, 16), e(this._dh, this._dl, 24), e(this._eh, this._el, 32), e(this._fh, this._fl, 40), t;
};
var Yg = Rs, Hr = uh.exports = function(e) {
  e = e.toLowerCase();
  var r = Hr[e];
  if (!r)
    throw new Error(e + " is not supported (we accept pull requests)");
  return new r();
};
Hr.sha = dg;
Hr.sha1 = Eg;
Hr.sha224 = Dg;
Hr.sha256 = gh;
Hr.sha384 = Yg;
Hr.sha512 = yh;
var Kg = uh.exports, Z = {}, Xg = function() {
  if (typeof Symbol != "function" || typeof Object.getOwnPropertySymbols != "function")
    return !1;
  if (typeof Symbol.iterator == "symbol")
    return !0;
  var e = {}, r = Symbol("test"), n = Object(r);
  if (typeof r == "string" || Object.prototype.toString.call(r) !== "[object Symbol]" || Object.prototype.toString.call(n) !== "[object Symbol]")
    return !1;
  var i = 42;
  e[r] = i;
  for (r in e)
    return !1;
  if (typeof Object.keys == "function" && Object.keys(e).length !== 0 || typeof Object.getOwnPropertyNames == "function" && Object.getOwnPropertyNames(e).length !== 0)
    return !1;
  var s = Object.getOwnPropertySymbols(e);
  if (s.length !== 1 || s[0] !== r || !Object.prototype.propertyIsEnumerable.call(e, r))
    return !1;
  if (typeof Object.getOwnPropertyDescriptor == "function") {
    var o = Object.getOwnPropertyDescriptor(e, r);
    if (o.value !== i || o.enumerable !== !0)
      return !1;
  }
  return !0;
}, Wu = typeof Symbol < "u" && Symbol, eb = Xg, tb = function() {
  return typeof Wu != "function" || typeof Symbol != "function" || typeof Wu("foo") != "symbol" || typeof Symbol("bar") != "symbol" ? !1 : eb();
}, Vu = {
  foo: {}
}, rb = Object, nb = function() {
  return { __proto__: Vu }.foo === Vu.foo && !({ __proto__: null } instanceof rb);
}, ib = "Function.prototype.bind called on incompatible ", sb = Object.prototype.toString, ob = Math.max, ab = "[object Function]", Hu = function(e, r) {
  for (var n = [], i = 0; i < e.length; i += 1)
    n[i] = e[i];
  for (var s = 0; s < r.length; s += 1)
    n[s + e.length] = r[s];
  return n;
}, cb = function(e, r) {
  for (var n = [], i = r || 0, s = 0; i < e.length; i += 1, s += 1)
    n[s] = e[i];
  return n;
}, ub = function(t, e) {
  for (var r = "", n = 0; n < t.length; n += 1)
    r += t[n], n + 1 < t.length && (r += e);
  return r;
}, lb = function(e) {
  var r = this;
  if (typeof r != "function" || sb.apply(r) !== ab)
    throw new TypeError(ib + r);
  for (var n = cb(arguments, 1), i, s = function() {
    if (this instanceof i) {
      var h = r.apply(
        this,
        Hu(n, arguments)
      );
      return Object(h) === h ? h : this;
    }
    return r.apply(
      e,
      Hu(n, arguments)
    );
  }, o = ob(0, r.length - n.length), a = [], c = 0; c < o; c++)
    a[c] = "$" + c;
  if (i = Function("binder", "return function (" + ub(a, ",") + "){ return binder.apply(this,arguments); }")(s), r.prototype) {
    var u = function() {
    };
    u.prototype = r.prototype, i.prototype = new u(), u.prototype = null;
  }
  return i;
}, fb = lb, Tc = Function.prototype.bind || fb, hb = Function.prototype.call, db = Object.prototype.hasOwnProperty, pb = Tc, gb = pb.call(hb, db), fe, yn = SyntaxError, mh = Function, fn = TypeError, fa = function(t) {
  try {
    return mh('"use strict"; return (' + t + ").constructor;")();
  } catch {
  }
}, Pr = Object.getOwnPropertyDescriptor;
if (Pr)
  try {
    Pr({}, "");
  } catch {
    Pr = null;
  }
var ha = function() {
  throw new fn();
}, bb = Pr ? function() {
  try {
    return arguments.callee, ha;
  } catch {
    try {
      return Pr(arguments, "callee").get;
    } catch {
      return ha;
    }
  }
}() : ha, Kr = tb(), yb = nb(), We = Object.getPrototypeOf || (yb ? function(t) {
  return t.__proto__;
} : null), on = {}, mb = typeof Uint8Array > "u" || !We ? fe : We(Uint8Array), Br = {
  "%AggregateError%": typeof AggregateError > "u" ? fe : AggregateError,
  "%Array%": Array,
  "%ArrayBuffer%": typeof ArrayBuffer > "u" ? fe : ArrayBuffer,
  "%ArrayIteratorPrototype%": Kr && We ? We([][Symbol.iterator]()) : fe,
  "%AsyncFromSyncIteratorPrototype%": fe,
  "%AsyncFunction%": on,
  "%AsyncGenerator%": on,
  "%AsyncGeneratorFunction%": on,
  "%AsyncIteratorPrototype%": on,
  "%Atomics%": typeof Atomics > "u" ? fe : Atomics,
  "%BigInt%": typeof BigInt > "u" ? fe : BigInt,
  "%BigInt64Array%": typeof BigInt64Array > "u" ? fe : BigInt64Array,
  "%BigUint64Array%": typeof BigUint64Array > "u" ? fe : BigUint64Array,
  "%Boolean%": Boolean,
  "%DataView%": typeof DataView > "u" ? fe : DataView,
  "%Date%": Date,
  "%decodeURI%": decodeURI,
  "%decodeURIComponent%": decodeURIComponent,
  "%encodeURI%": encodeURI,
  "%encodeURIComponent%": encodeURIComponent,
  "%Error%": Error,
  "%eval%": eval,
  // eslint-disable-line no-eval
  "%EvalError%": EvalError,
  "%Float32Array%": typeof Float32Array > "u" ? fe : Float32Array,
  "%Float64Array%": typeof Float64Array > "u" ? fe : Float64Array,
  "%FinalizationRegistry%": typeof FinalizationRegistry > "u" ? fe : FinalizationRegistry,
  "%Function%": mh,
  "%GeneratorFunction%": on,
  "%Int8Array%": typeof Int8Array > "u" ? fe : Int8Array,
  "%Int16Array%": typeof Int16Array > "u" ? fe : Int16Array,
  "%Int32Array%": typeof Int32Array > "u" ? fe : Int32Array,
  "%isFinite%": isFinite,
  "%isNaN%": isNaN,
  "%IteratorPrototype%": Kr && We ? We(We([][Symbol.iterator]())) : fe,
  "%JSON%": typeof JSON == "object" ? JSON : fe,
  "%Map%": typeof Map > "u" ? fe : Map,
  "%MapIteratorPrototype%": typeof Map > "u" || !Kr || !We ? fe : We((/* @__PURE__ */ new Map())[Symbol.iterator]()),
  "%Math%": Math,
  "%Number%": Number,
  "%Object%": Object,
  "%parseFloat%": parseFloat,
  "%parseInt%": parseInt,
  "%Promise%": typeof Promise > "u" ? fe : Promise,
  "%Proxy%": typeof Proxy > "u" ? fe : Proxy,
  "%RangeError%": RangeError,
  "%ReferenceError%": ReferenceError,
  "%Reflect%": typeof Reflect > "u" ? fe : Reflect,
  "%RegExp%": RegExp,
  "%Set%": typeof Set > "u" ? fe : Set,
  "%SetIteratorPrototype%": typeof Set > "u" || !Kr || !We ? fe : We((/* @__PURE__ */ new Set())[Symbol.iterator]()),
  "%SharedArrayBuffer%": typeof SharedArrayBuffer > "u" ? fe : SharedArrayBuffer,
  "%String%": String,
  "%StringIteratorPrototype%": Kr && We ? We(""[Symbol.iterator]()) : fe,
  "%Symbol%": Kr ? Symbol : fe,
  "%SyntaxError%": yn,
  "%ThrowTypeError%": bb,
  "%TypedArray%": mb,
  "%TypeError%": fn,
  "%Uint8Array%": typeof Uint8Array > "u" ? fe : Uint8Array,
  "%Uint8ClampedArray%": typeof Uint8ClampedArray > "u" ? fe : Uint8ClampedArray,
  "%Uint16Array%": typeof Uint16Array > "u" ? fe : Uint16Array,
  "%Uint32Array%": typeof Uint32Array > "u" ? fe : Uint32Array,
  "%URIError%": URIError,
  "%WeakMap%": typeof WeakMap > "u" ? fe : WeakMap,
  "%WeakRef%": typeof WeakRef > "u" ? fe : WeakRef,
  "%WeakSet%": typeof WeakSet > "u" ? fe : WeakSet
};
if (We)
  try {
    null.error;
  } catch (t) {
    var vb = We(We(t));
    Br["%Error.prototype%"] = vb;
  }
var wb = function t(e) {
  var r;
  if (e === "%AsyncFunction%")
    r = fa("async function () {}");
  else if (e === "%GeneratorFunction%")
    r = fa("function* () {}");
  else if (e === "%AsyncGeneratorFunction%")
    r = fa("async function* () {}");
  else if (e === "%AsyncGenerator%") {
    var n = t("%AsyncGeneratorFunction%");
    n && (r = n.prototype);
  } else if (e === "%AsyncIteratorPrototype%") {
    var i = t("%AsyncGenerator%");
    i && We && (r = We(i.prototype));
  }
  return Br[e] = r, r;
}, zu = {
  "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
  "%ArrayPrototype%": ["Array", "prototype"],
  "%ArrayProto_entries%": ["Array", "prototype", "entries"],
  "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
  "%ArrayProto_keys%": ["Array", "prototype", "keys"],
  "%ArrayProto_values%": ["Array", "prototype", "values"],
  "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
  "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
  "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"],
  "%BooleanPrototype%": ["Boolean", "prototype"],
  "%DataViewPrototype%": ["DataView", "prototype"],
  "%DatePrototype%": ["Date", "prototype"],
  "%ErrorPrototype%": ["Error", "prototype"],
  "%EvalErrorPrototype%": ["EvalError", "prototype"],
  "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
  "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
  "%FunctionPrototype%": ["Function", "prototype"],
  "%Generator%": ["GeneratorFunction", "prototype"],
  "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
  "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
  "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
  "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
  "%JSONParse%": ["JSON", "parse"],
  "%JSONStringify%": ["JSON", "stringify"],
  "%MapPrototype%": ["Map", "prototype"],
  "%NumberPrototype%": ["Number", "prototype"],
  "%ObjectPrototype%": ["Object", "prototype"],
  "%ObjProto_toString%": ["Object", "prototype", "toString"],
  "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
  "%PromisePrototype%": ["Promise", "prototype"],
  "%PromiseProto_then%": ["Promise", "prototype", "then"],
  "%Promise_all%": ["Promise", "all"],
  "%Promise_reject%": ["Promise", "reject"],
  "%Promise_resolve%": ["Promise", "resolve"],
  "%RangeErrorPrototype%": ["RangeError", "prototype"],
  "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
  "%RegExpPrototype%": ["RegExp", "prototype"],
  "%SetPrototype%": ["Set", "prototype"],
  "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
  "%StringPrototype%": ["String", "prototype"],
  "%SymbolPrototype%": ["Symbol", "prototype"],
  "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
  "%TypedArrayPrototype%": ["TypedArray", "prototype"],
  "%TypeErrorPrototype%": ["TypeError", "prototype"],
  "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
  "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
  "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
  "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
  "%URIErrorPrototype%": ["URIError", "prototype"],
  "%WeakMapPrototype%": ["WeakMap", "prototype"],
  "%WeakSetPrototype%": ["WeakSet", "prototype"]
}, mi = Tc, is = gb, _b = mi.call(Function.call, Array.prototype.concat), Eb = mi.call(Function.apply, Array.prototype.splice), qu = mi.call(Function.call, String.prototype.replace), ss = mi.call(Function.call, String.prototype.slice), Sb = mi.call(Function.call, RegExp.prototype.exec), xb = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g, Cb = /\\(\\)?/g, Ib = function(e) {
  var r = ss(e, 0, 1), n = ss(e, -1);
  if (r === "%" && n !== "%")
    throw new yn("invalid intrinsic syntax, expected closing `%`");
  if (n === "%" && r !== "%")
    throw new yn("invalid intrinsic syntax, expected opening `%`");
  var i = [];
  return qu(e, xb, function(s, o, a, c) {
    i[i.length] = a ? qu(c, Cb, "$1") : o || s;
  }), i;
}, Rb = function(e, r) {
  var n = e, i;
  if (is(zu, n) && (i = zu[n], n = "%" + i[0] + "%"), is(Br, n)) {
    var s = Br[n];
    if (s === on && (s = wb(n)), typeof s > "u" && !r)
      throw new fn("intrinsic " + e + " exists, but is not available. Please file an issue!");
    return {
      alias: i,
      name: n,
      value: s
    };
  }
  throw new yn("intrinsic " + e + " does not exist!");
}, zr = function(e, r) {
  if (typeof e != "string" || e.length === 0)
    throw new fn("intrinsic name must be a non-empty string");
  if (arguments.length > 1 && typeof r != "boolean")
    throw new fn('"allowMissing" argument must be a boolean');
  if (Sb(/^%?[^%]*%?$/, e) === null)
    throw new yn("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
  var n = Ib(e), i = n.length > 0 ? n[0] : "", s = Rb("%" + i + "%", r), o = s.name, a = s.value, c = !1, u = s.alias;
  u && (i = u[0], Eb(n, _b([0, 1], u)));
  for (var h = 1, d = !0; h < n.length; h += 1) {
    var p = n[h], v = ss(p, 0, 1), _ = ss(p, -1);
    if ((v === '"' || v === "'" || v === "`" || _ === '"' || _ === "'" || _ === "`") && v !== _)
      throw new yn("property names with quotes must have matching quotes");
    if ((p === "constructor" || !d) && (c = !0), i += "." + p, o = "%" + i + "%", is(Br, o))
      a = Br[o];
    else if (a != null) {
      if (!(p in a)) {
        if (!r)
          throw new fn("base intrinsic for " + e + " exists, but the property is not available.");
        return;
      }
      if (Pr && h + 1 >= n.length) {
        var A = Pr(a, p);
        d = !!A, d && "get" in A && !("originalValue" in A.get) ? a = A.get : a = a[p];
      } else
        d = is(a, p), a = a[p];
      d && !c && (Br[o] = a);
    }
  }
  return a;
}, vh = { exports: {} }, Ab = zr, rc = Ab("%Object.defineProperty%", !0), nc = function() {
  if (rc)
    try {
      return rc({}, "a", { value: 1 }), !0;
    } catch {
      return !1;
    }
  return !1;
};
nc.hasArrayLengthDefineBug = function() {
  if (!nc())
    return null;
  try {
    return rc([], "length", { value: 1 }).length !== 1;
  } catch {
    return !0;
  }
};
var wh = nc, Tb = zr, Ki = Tb("%Object.getOwnPropertyDescriptor%", !0);
if (Ki)
  try {
    Ki([], "length");
  } catch {
    Ki = null;
  }
var _h = Ki, Mb = wh(), Mc = zr, Kn = Mb && Mc("%Object.defineProperty%", !0);
if (Kn)
  try {
    Kn({}, "a", { value: 1 });
  } catch {
    Kn = !1;
  }
var Ob = Mc("%SyntaxError%"), Xr = Mc("%TypeError%"), Gu = _h, kb = function(e, r, n) {
  if (!e || typeof e != "object" && typeof e != "function")
    throw new Xr("`obj` must be an object or a function`");
  if (typeof r != "string" && typeof r != "symbol")
    throw new Xr("`property` must be a string or a symbol`");
  if (arguments.length > 3 && typeof arguments[3] != "boolean" && arguments[3] !== null)
    throw new Xr("`nonEnumerable`, if provided, must be a boolean or null");
  if (arguments.length > 4 && typeof arguments[4] != "boolean" && arguments[4] !== null)
    throw new Xr("`nonWritable`, if provided, must be a boolean or null");
  if (arguments.length > 5 && typeof arguments[5] != "boolean" && arguments[5] !== null)
    throw new Xr("`nonConfigurable`, if provided, must be a boolean or null");
  if (arguments.length > 6 && typeof arguments[6] != "boolean")
    throw new Xr("`loose`, if provided, must be a boolean");
  var i = arguments.length > 3 ? arguments[3] : null, s = arguments.length > 4 ? arguments[4] : null, o = arguments.length > 5 ? arguments[5] : null, a = arguments.length > 6 ? arguments[6] : !1, c = !!Gu && Gu(e, r);
  if (Kn)
    Kn(e, r, {
      configurable: o === null && c ? c.configurable : !o,
      enumerable: i === null && c ? c.enumerable : !i,
      value: n,
      writable: s === null && c ? c.writable : !s
    });
  else if (a || !i && !s && !o)
    e[r] = n;
  else
    throw new Ob("This environment does not support defining a property as non-configurable, non-writable, or non-enumerable.");
}, Eh = zr, Ju = kb, Nb = wh(), Qu = _h, Zu = Eh("%TypeError%"), Lb = Eh("%Math.floor%"), Pb = function(e, r) {
  if (typeof e != "function")
    throw new Zu("`fn` is not a function");
  if (typeof r != "number" || r < 0 || r > 4294967295 || Lb(r) !== r)
    throw new Zu("`length` must be a positive 32-bit integer");
  var n = arguments.length > 2 && !!arguments[2], i = !0, s = !0;
  if ("length" in e && Qu) {
    var o = Qu(e, "length");
    o && !o.configurable && (i = !1), o && !o.writable && (s = !1);
  }
  return (i || s || !n) && (Nb ? Ju(e, "length", r, !0, !0) : Ju(e, "length", r)), e;
};
(function(t) {
  var e = Tc, r = zr, n = Pb, i = r("%TypeError%"), s = r("%Function.prototype.apply%"), o = r("%Function.prototype.call%"), a = r("%Reflect.apply%", !0) || e.call(o, s), c = r("%Object.defineProperty%", !0), u = r("%Math.max%");
  if (c)
    try {
      c({}, "a", { value: 1 });
    } catch {
      c = null;
    }
  t.exports = function(p) {
    if (typeof p != "function")
      throw new i("a function is required");
    var v = a(e, o, arguments);
    return n(
      v,
      1 + u(0, p.length - (arguments.length - 1)),
      !0
    );
  };
  var h = function() {
    return a(e, s, arguments);
  };
  c ? c(t.exports, "apply", { value: h }) : t.exports.apply = h;
})(vh);
var Bb = vh.exports, Sh = zr, xh = Bb, $b = xh(Sh("String.prototype.indexOf")), Db = function(e, r) {
  var n = Sh(e, !!r);
  return typeof n == "function" && $b(e, ".prototype.") > -1 ? xh(n) : n;
}, Oc = typeof Map == "function" && Map.prototype, da = Object.getOwnPropertyDescriptor && Oc ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null, os = Oc && da && typeof da.get == "function" ? da.get : null, Yu = Oc && Map.prototype.forEach, kc = typeof Set == "function" && Set.prototype, pa = Object.getOwnPropertyDescriptor && kc ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null, as = kc && pa && typeof pa.get == "function" ? pa.get : null, Ku = kc && Set.prototype.forEach, Fb = typeof WeakMap == "function" && WeakMap.prototype, Xn = Fb ? WeakMap.prototype.has : null, jb = typeof WeakSet == "function" && WeakSet.prototype, ei = jb ? WeakSet.prototype.has : null, Ub = typeof WeakRef == "function" && WeakRef.prototype, Xu = Ub ? WeakRef.prototype.deref : null, Wb = Boolean.prototype.valueOf, Vb = Object.prototype.toString, Hb = Function.prototype.toString, zb = String.prototype.match, Nc = String.prototype.slice, pr = String.prototype.replace, qb = String.prototype.toUpperCase, el = String.prototype.toLowerCase, Ch = RegExp.prototype.test, tl = Array.prototype.concat, Wt = Array.prototype.join, Gb = Array.prototype.slice, rl = Math.floor, ic = typeof BigInt == "function" ? BigInt.prototype.valueOf : null, ga = Object.getOwnPropertySymbols, sc = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Symbol.prototype.toString : null, mn = typeof Symbol == "function" && typeof Symbol.iterator == "object", Xe = typeof Symbol == "function" && Symbol.toStringTag && (typeof Symbol.toStringTag === mn || "symbol") ? Symbol.toStringTag : null, Ih = Object.prototype.propertyIsEnumerable, nl = (typeof Reflect == "function" ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype ? function(t) {
  return t.__proto__;
} : null);
function il(t, e) {
  if (t === 1 / 0 || t === -1 / 0 || t !== t || t && t > -1e3 && t < 1e3 || Ch.call(/e/, e))
    return e;
  var r = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
  if (typeof t == "number") {
    var n = t < 0 ? -rl(-t) : rl(t);
    if (n !== t) {
      var i = String(n), s = Nc.call(e, i.length + 1);
      return pr.call(i, r, "$&_") + "." + pr.call(pr.call(s, /([0-9]{3})/g, "$&_"), /_$/, "");
    }
  }
  return pr.call(e, r, "$&_");
}
var oc = Cc, sl = oc.custom, ol = Ah(sl) ? sl : null, Jb = function t(e, r, n, i) {
  var s = r || {};
  if (fr(s, "quoteStyle") && s.quoteStyle !== "single" && s.quoteStyle !== "double")
    throw new TypeError('option "quoteStyle" must be "single" or "double"');
  if (fr(s, "maxStringLength") && (typeof s.maxStringLength == "number" ? s.maxStringLength < 0 && s.maxStringLength !== 1 / 0 : s.maxStringLength !== null))
    throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
  var o = fr(s, "customInspect") ? s.customInspect : !0;
  if (typeof o != "boolean" && o !== "symbol")
    throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
  if (fr(s, "indent") && s.indent !== null && s.indent !== "	" && !(parseInt(s.indent, 10) === s.indent && s.indent > 0))
    throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
  if (fr(s, "numericSeparator") && typeof s.numericSeparator != "boolean")
    throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
  var a = s.numericSeparator;
  if (typeof e > "u")
    return "undefined";
  if (e === null)
    return "null";
  if (typeof e == "boolean")
    return e ? "true" : "false";
  if (typeof e == "string")
    return Mh(e, s);
  if (typeof e == "number") {
    if (e === 0)
      return 1 / 0 / e > 0 ? "0" : "-0";
    var c = String(e);
    return a ? il(e, c) : c;
  }
  if (typeof e == "bigint") {
    var u = String(e) + "n";
    return a ? il(e, u) : u;
  }
  var h = typeof s.depth > "u" ? 5 : s.depth;
  if (typeof n > "u" && (n = 0), n >= h && h > 0 && typeof e == "object")
    return ac(e) ? "[Array]" : "[Object]";
  var d = hy(s, n);
  if (typeof i > "u")
    i = [];
  else if (Th(i, e) >= 0)
    return "[Circular]";
  function p(P, B, U) {
    if (B && (i = Gb.call(i), i.push(B)), U) {
      var W = {
        depth: s.depth
      };
      return fr(s, "quoteStyle") && (W.quoteStyle = s.quoteStyle), t(P, W, n + 1, i);
    }
    return t(P, s, n + 1, i);
  }
  if (typeof e == "function" && !al(e)) {
    var v = ny(e), _ = $i(e, p);
    return "[Function" + (v ? ": " + v : " (anonymous)") + "]" + (_.length > 0 ? " { " + Wt.call(_, ", ") + " }" : "");
  }
  if (Ah(e)) {
    var A = mn ? pr.call(String(e), /^(Symbol\(.*\))_[^)]*$/, "$1") : sc.call(e);
    return typeof e == "object" && !mn ? zn(A) : A;
  }
  if (uy(e)) {
    for (var R = "<" + el.call(String(e.nodeName)), y = e.attributes || [], E = 0; E < y.length; E++)
      R += " " + y[E].name + "=" + Rh(Qb(y[E].value), "double", s);
    return R += ">", e.childNodes && e.childNodes.length && (R += "..."), R += "</" + el.call(String(e.nodeName)) + ">", R;
  }
  if (ac(e)) {
    if (e.length === 0)
      return "[]";
    var x = $i(e, p);
    return d && !fy(x) ? "[" + cc(x, d) + "]" : "[ " + Wt.call(x, ", ") + " ]";
  }
  if (Yb(e)) {
    var O = $i(e, p);
    return !("cause" in Error.prototype) && "cause" in e && !Ih.call(e, "cause") ? "{ [" + String(e) + "] " + Wt.call(tl.call("[cause]: " + p(e.cause), O), ", ") + " }" : O.length === 0 ? "[" + String(e) + "]" : "{ [" + String(e) + "] " + Wt.call(O, ", ") + " }";
  }
  if (typeof e == "object" && o) {
    if (ol && typeof e[ol] == "function" && oc)
      return oc(e, { depth: h - n });
    if (o !== "symbol" && typeof e.inspect == "function")
      return e.inspect();
  }
  if (iy(e)) {
    var M = [];
    return Yu && Yu.call(e, function(P, B) {
      M.push(p(B, e, !0) + " => " + p(P, e));
    }), cl("Map", os.call(e), M, d);
  }
  if (ay(e)) {
    var D = [];
    return Ku && Ku.call(e, function(P) {
      D.push(p(P, e));
    }), cl("Set", as.call(e), D, d);
  }
  if (sy(e))
    return ba("WeakMap");
  if (cy(e))
    return ba("WeakSet");
  if (oy(e))
    return ba("WeakRef");
  if (Xb(e))
    return zn(p(Number(e)));
  if (ty(e))
    return zn(p(ic.call(e)));
  if (ey(e))
    return zn(Wb.call(e));
  if (Kb(e))
    return zn(p(String(e)));
  if (typeof window < "u" && e === window)
    return "{ [object Window] }";
  if (e === G)
    return "{ [object globalThis] }";
  if (!Zb(e) && !al(e)) {
    var J = $i(e, p), H = nl ? nl(e) === Object.prototype : e instanceof Object || e.constructor === Object, F = e instanceof Object ? "" : "null prototype", X = !H && Xe && Object(e) === e && Xe in e ? Nc.call(xr(e), 8, -1) : F ? "Object" : "", de = H || typeof e.constructor != "function" ? "" : e.constructor.name ? e.constructor.name + " " : "", re = de + (X || F ? "[" + Wt.call(tl.call([], X || [], F || []), ": ") + "] " : "");
    return J.length === 0 ? re + "{}" : d ? re + "{" + cc(J, d) + "}" : re + "{ " + Wt.call(J, ", ") + " }";
  }
  return String(e);
};
function Rh(t, e, r) {
  var n = (r.quoteStyle || e) === "double" ? '"' : "'";
  return n + t + n;
}
function Qb(t) {
  return pr.call(String(t), /"/g, "&quot;");
}
function ac(t) {
  return xr(t) === "[object Array]" && (!Xe || !(typeof t == "object" && Xe in t));
}
function Zb(t) {
  return xr(t) === "[object Date]" && (!Xe || !(typeof t == "object" && Xe in t));
}
function al(t) {
  return xr(t) === "[object RegExp]" && (!Xe || !(typeof t == "object" && Xe in t));
}
function Yb(t) {
  return xr(t) === "[object Error]" && (!Xe || !(typeof t == "object" && Xe in t));
}
function Kb(t) {
  return xr(t) === "[object String]" && (!Xe || !(typeof t == "object" && Xe in t));
}
function Xb(t) {
  return xr(t) === "[object Number]" && (!Xe || !(typeof t == "object" && Xe in t));
}
function ey(t) {
  return xr(t) === "[object Boolean]" && (!Xe || !(typeof t == "object" && Xe in t));
}
function Ah(t) {
  if (mn)
    return t && typeof t == "object" && t instanceof Symbol;
  if (typeof t == "symbol")
    return !0;
  if (!t || typeof t != "object" || !sc)
    return !1;
  try {
    return sc.call(t), !0;
  } catch {
  }
  return !1;
}
function ty(t) {
  if (!t || typeof t != "object" || !ic)
    return !1;
  try {
    return ic.call(t), !0;
  } catch {
  }
  return !1;
}
var ry = Object.prototype.hasOwnProperty || function(t) {
  return t in this;
};
function fr(t, e) {
  return ry.call(t, e);
}
function xr(t) {
  return Vb.call(t);
}
function ny(t) {
  if (t.name)
    return t.name;
  var e = zb.call(Hb.call(t), /^function\s*([\w$]+)/);
  return e ? e[1] : null;
}
function Th(t, e) {
  if (t.indexOf)
    return t.indexOf(e);
  for (var r = 0, n = t.length; r < n; r++)
    if (t[r] === e)
      return r;
  return -1;
}
function iy(t) {
  if (!os || !t || typeof t != "object")
    return !1;
  try {
    os.call(t);
    try {
      as.call(t);
    } catch {
      return !0;
    }
    return t instanceof Map;
  } catch {
  }
  return !1;
}
function sy(t) {
  if (!Xn || !t || typeof t != "object")
    return !1;
  try {
    Xn.call(t, Xn);
    try {
      ei.call(t, ei);
    } catch {
      return !0;
    }
    return t instanceof WeakMap;
  } catch {
  }
  return !1;
}
function oy(t) {
  if (!Xu || !t || typeof t != "object")
    return !1;
  try {
    return Xu.call(t), !0;
  } catch {
  }
  return !1;
}
function ay(t) {
  if (!as || !t || typeof t != "object")
    return !1;
  try {
    as.call(t);
    try {
      os.call(t);
    } catch {
      return !0;
    }
    return t instanceof Set;
  } catch {
  }
  return !1;
}
function cy(t) {
  if (!ei || !t || typeof t != "object")
    return !1;
  try {
    ei.call(t, ei);
    try {
      Xn.call(t, Xn);
    } catch {
      return !0;
    }
    return t instanceof WeakSet;
  } catch {
  }
  return !1;
}
function uy(t) {
  return !t || typeof t != "object" ? !1 : typeof HTMLElement < "u" && t instanceof HTMLElement ? !0 : typeof t.nodeName == "string" && typeof t.getAttribute == "function";
}
function Mh(t, e) {
  if (t.length > e.maxStringLength) {
    var r = t.length - e.maxStringLength, n = "... " + r + " more character" + (r > 1 ? "s" : "");
    return Mh(Nc.call(t, 0, e.maxStringLength), e) + n;
  }
  var i = pr.call(pr.call(t, /(['\\])/g, "\\$1"), /[\x00-\x1f]/g, ly);
  return Rh(i, "single", e);
}
function ly(t) {
  var e = t.charCodeAt(0), r = {
    8: "b",
    9: "t",
    10: "n",
    12: "f",
    13: "r"
  }[e];
  return r ? "\\" + r : "\\x" + (e < 16 ? "0" : "") + qb.call(e.toString(16));
}
function zn(t) {
  return "Object(" + t + ")";
}
function ba(t) {
  return t + " { ? }";
}
function cl(t, e, r, n) {
  var i = n ? cc(r, n) : Wt.call(r, ", ");
  return t + " (" + e + ") {" + i + "}";
}
function fy(t) {
  for (var e = 0; e < t.length; e++)
    if (Th(t[e], `
`) >= 0)
      return !1;
  return !0;
}
function hy(t, e) {
  var r;
  if (t.indent === "	")
    r = "	";
  else if (typeof t.indent == "number" && t.indent > 0)
    r = Wt.call(Array(t.indent + 1), " ");
  else
    return null;
  return {
    base: r,
    prev: Wt.call(Array(e + 1), r)
  };
}
function cc(t, e) {
  if (t.length === 0)
    return "";
  var r = `
` + e.prev + e.base;
  return r + Wt.call(t, "," + r) + `
` + e.prev;
}
function $i(t, e) {
  var r = ac(t), n = [];
  if (r) {
    n.length = t.length;
    for (var i = 0; i < t.length; i++)
      n[i] = fr(t, i) ? e(t[i], t) : "";
  }
  var s = typeof ga == "function" ? ga(t) : [], o;
  if (mn) {
    o = {};
    for (var a = 0; a < s.length; a++)
      o["$" + s[a]] = s[a];
  }
  for (var c in t)
    fr(t, c) && (r && String(Number(c)) === c && c < t.length || mn && o["$" + c] instanceof Symbol || (Ch.call(/[^\w$]/, c) ? n.push(e(c, t) + ": " + e(t[c], t)) : n.push(c + ": " + e(t[c], t))));
  if (typeof ga == "function")
    for (var u = 0; u < s.length; u++)
      Ih.call(t, s[u]) && n.push("[" + e(s[u]) + "]: " + e(t[s[u]], t));
  return n;
}
var Lc = zr, Pn = Db, dy = Jb, py = Lc("%TypeError%"), Di = Lc("%WeakMap%", !0), Fi = Lc("%Map%", !0), gy = Pn("WeakMap.prototype.get", !0), by = Pn("WeakMap.prototype.set", !0), yy = Pn("WeakMap.prototype.has", !0), my = Pn("Map.prototype.get", !0), vy = Pn("Map.prototype.set", !0), wy = Pn("Map.prototype.has", !0), Pc = function(t, e) {
  for (var r = t, n; (n = r.next) !== null; r = n)
    if (n.key === e)
      return r.next = n.next, n.next = t.next, t.next = n, n;
}, _y = function(t, e) {
  var r = Pc(t, e);
  return r && r.value;
}, Ey = function(t, e, r) {
  var n = Pc(t, e);
  n ? n.value = r : t.next = {
    // eslint-disable-line no-param-reassign
    key: e,
    next: t.next,
    value: r
  };
}, Sy = function(t, e) {
  return !!Pc(t, e);
}, xy = function() {
  var e, r, n, i = {
    assert: function(s) {
      if (!i.has(s))
        throw new py("Side channel does not contain " + dy(s));
    },
    get: function(s) {
      if (Di && s && (typeof s == "object" || typeof s == "function")) {
        if (e)
          return gy(e, s);
      } else if (Fi) {
        if (r)
          return my(r, s);
      } else if (n)
        return _y(n, s);
    },
    has: function(s) {
      if (Di && s && (typeof s == "object" || typeof s == "function")) {
        if (e)
          return yy(e, s);
      } else if (Fi) {
        if (r)
          return wy(r, s);
      } else if (n)
        return Sy(n, s);
      return !1;
    },
    set: function(s, o) {
      Di && s && (typeof s == "object" || typeof s == "function") ? (e || (e = new Di()), by(e, s, o)) : Fi ? (r || (r = new Fi()), vy(r, s, o)) : (n || (n = { key: {}, next: null }), Ey(n, s, o));
    }
  };
  return i;
}, Cy = String.prototype.replace, Iy = /%20/g, ya = {
  RFC1738: "RFC1738",
  RFC3986: "RFC3986"
}, Bc = {
  default: ya.RFC3986,
  formatters: {
    RFC1738: function(t) {
      return Cy.call(t, Iy, "+");
    },
    RFC3986: function(t) {
      return String(t);
    }
  },
  RFC1738: ya.RFC1738,
  RFC3986: ya.RFC3986
}, Ry = Bc, ma = Object.prototype.hasOwnProperty, Ar = Array.isArray, Bt = function() {
  for (var t = [], e = 0; e < 256; ++e)
    t.push("%" + ((e < 16 ? "0" : "") + e.toString(16)).toUpperCase());
  return t;
}(), Ay = function(e) {
  for (; e.length > 1; ) {
    var r = e.pop(), n = r.obj[r.prop];
    if (Ar(n)) {
      for (var i = [], s = 0; s < n.length; ++s)
        typeof n[s] < "u" && i.push(n[s]);
      r.obj[r.prop] = i;
    }
  }
}, Oh = function(e, r) {
  for (var n = r && r.plainObjects ? /* @__PURE__ */ Object.create(null) : {}, i = 0; i < e.length; ++i)
    typeof e[i] < "u" && (n[i] = e[i]);
  return n;
}, Ty = function t(e, r, n) {
  if (!r)
    return e;
  if (typeof r != "object") {
    if (Ar(e))
      e.push(r);
    else if (e && typeof e == "object")
      (n && (n.plainObjects || n.allowPrototypes) || !ma.call(Object.prototype, r)) && (e[r] = !0);
    else
      return [e, r];
    return e;
  }
  if (!e || typeof e != "object")
    return [e].concat(r);
  var i = e;
  return Ar(e) && !Ar(r) && (i = Oh(e, n)), Ar(e) && Ar(r) ? (r.forEach(function(s, o) {
    if (ma.call(e, o)) {
      var a = e[o];
      a && typeof a == "object" && s && typeof s == "object" ? e[o] = t(a, s, n) : e.push(s);
    } else
      e[o] = s;
  }), e) : Object.keys(r).reduce(function(s, o) {
    var a = r[o];
    return ma.call(s, o) ? s[o] = t(s[o], a, n) : s[o] = a, s;
  }, i);
}, My = function(e, r) {
  return Object.keys(r).reduce(function(n, i) {
    return n[i] = r[i], n;
  }, e);
}, Oy = function(t, e, r) {
  var n = t.replace(/\+/g, " ");
  if (r === "iso-8859-1")
    return n.replace(/%[0-9a-f]{2}/gi, unescape);
  try {
    return decodeURIComponent(n);
  } catch {
    return n;
  }
}, ky = function(e, r, n, i, s) {
  if (e.length === 0)
    return e;
  var o = e;
  if (typeof e == "symbol" ? o = Symbol.prototype.toString.call(e) : typeof e != "string" && (o = String(e)), n === "iso-8859-1")
    return escape(o).replace(/%u[0-9a-f]{4}/gi, function(h) {
      return "%26%23" + parseInt(h.slice(2), 16) + "%3B";
    });
  for (var a = "", c = 0; c < o.length; ++c) {
    var u = o.charCodeAt(c);
    if (u === 45 || u === 46 || u === 95 || u === 126 || u >= 48 && u <= 57 || u >= 65 && u <= 90 || u >= 97 && u <= 122 || s === Ry.RFC1738 && (u === 40 || u === 41)) {
      a += o.charAt(c);
      continue;
    }
    if (u < 128) {
      a = a + Bt[u];
      continue;
    }
    if (u < 2048) {
      a = a + (Bt[192 | u >> 6] + Bt[128 | u & 63]);
      continue;
    }
    if (u < 55296 || u >= 57344) {
      a = a + (Bt[224 | u >> 12] + Bt[128 | u >> 6 & 63] + Bt[128 | u & 63]);
      continue;
    }
    c += 1, u = 65536 + ((u & 1023) << 10 | o.charCodeAt(c) & 1023), a += Bt[240 | u >> 18] + Bt[128 | u >> 12 & 63] + Bt[128 | u >> 6 & 63] + Bt[128 | u & 63];
  }
  return a;
}, Ny = function(e) {
  for (var r = [{ obj: { o: e }, prop: "o" }], n = [], i = 0; i < r.length; ++i)
    for (var s = r[i], o = s.obj[s.prop], a = Object.keys(o), c = 0; c < a.length; ++c) {
      var u = a[c], h = o[u];
      typeof h == "object" && h !== null && n.indexOf(h) === -1 && (r.push({ obj: o, prop: u }), n.push(h));
    }
  return Ay(r), e;
}, Ly = function(e) {
  return Object.prototype.toString.call(e) === "[object RegExp]";
}, Py = function(e) {
  return !e || typeof e != "object" ? !1 : !!(e.constructor && e.constructor.isBuffer && e.constructor.isBuffer(e));
}, By = function(e, r) {
  return [].concat(e, r);
}, $y = function(e, r) {
  if (Ar(e)) {
    for (var n = [], i = 0; i < e.length; i += 1)
      n.push(r(e[i]));
    return n;
  }
  return r(e);
}, kh = {
  arrayToObject: Oh,
  assign: My,
  combine: By,
  compact: Ny,
  decode: Oy,
  encode: ky,
  isBuffer: Py,
  isRegExp: Ly,
  maybeMap: $y,
  merge: Ty
}, Nh = xy, Xi = kh, ti = Bc, Dy = Object.prototype.hasOwnProperty, ul = {
  brackets: function(e) {
    return e + "[]";
  },
  comma: "comma",
  indices: function(e, r) {
    return e + "[" + r + "]";
  },
  repeat: function(e) {
    return e;
  }
}, er = Array.isArray, Fy = Array.prototype.push, Lh = function(t, e) {
  Fy.apply(t, er(e) ? e : [e]);
}, jy = Date.prototype.toISOString, ll = ti.default, Ke = {
  addQueryPrefix: !1,
  allowDots: !1,
  charset: "utf-8",
  charsetSentinel: !1,
  delimiter: "&",
  encode: !0,
  encoder: Xi.encode,
  encodeValuesOnly: !1,
  format: ll,
  formatter: ti.formatters[ll],
  // deprecated
  indices: !1,
  serializeDate: function(e) {
    return jy.call(e);
  },
  skipNulls: !1,
  strictNullHandling: !1
}, Uy = function(e) {
  return typeof e == "string" || typeof e == "number" || typeof e == "boolean" || typeof e == "symbol" || typeof e == "bigint";
}, va = {}, Wy = function t(e, r, n, i, s, o, a, c, u, h, d, p, v, _, A, R) {
  for (var y = e, E = R, x = 0, O = !1; (E = E.get(va)) !== void 0 && !O; ) {
    var M = E.get(e);
    if (x += 1, typeof M < "u") {
      if (M === x)
        throw new RangeError("Cyclic object value");
      O = !0;
    }
    typeof E.get(va) > "u" && (x = 0);
  }
  if (typeof c == "function" ? y = c(r, y) : y instanceof Date ? y = d(y) : n === "comma" && er(y) && (y = Xi.maybeMap(y, function(W) {
    return W instanceof Date ? d(W) : W;
  })), y === null) {
    if (s)
      return a && !_ ? a(r, Ke.encoder, A, "key", p) : r;
    y = "";
  }
  if (Uy(y) || Xi.isBuffer(y)) {
    if (a) {
      var D = _ ? r : a(r, Ke.encoder, A, "key", p);
      return [v(D) + "=" + v(a(y, Ke.encoder, A, "value", p))];
    }
    return [v(r) + "=" + v(String(y))];
  }
  var J = [];
  if (typeof y > "u")
    return J;
  var H;
  if (n === "comma" && er(y))
    _ && a && (y = Xi.maybeMap(y, a)), H = [{ value: y.length > 0 ? y.join(",") || null : void 0 }];
  else if (er(c))
    H = c;
  else {
    var F = Object.keys(y);
    H = u ? F.sort(u) : F;
  }
  for (var X = i && er(y) && y.length === 1 ? r + "[]" : r, de = 0; de < H.length; ++de) {
    var re = H[de], P = typeof re == "object" && typeof re.value < "u" ? re.value : y[re];
    if (!(o && P === null)) {
      var B = er(y) ? typeof n == "function" ? n(X, re) : X : X + (h ? "." + re : "[" + re + "]");
      R.set(e, x);
      var U = Nh();
      U.set(va, R), Lh(J, t(
        P,
        B,
        n,
        i,
        s,
        o,
        n === "comma" && _ && er(y) ? null : a,
        c,
        u,
        h,
        d,
        p,
        v,
        _,
        A,
        U
      ));
    }
  }
  return J;
}, Vy = function(e) {
  if (!e)
    return Ke;
  if (e.encoder !== null && typeof e.encoder < "u" && typeof e.encoder != "function")
    throw new TypeError("Encoder has to be a function.");
  var r = e.charset || Ke.charset;
  if (typeof e.charset < "u" && e.charset !== "utf-8" && e.charset !== "iso-8859-1")
    throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
  var n = ti.default;
  if (typeof e.format < "u") {
    if (!Dy.call(ti.formatters, e.format))
      throw new TypeError("Unknown format option provided.");
    n = e.format;
  }
  var i = ti.formatters[n], s = Ke.filter;
  return (typeof e.filter == "function" || er(e.filter)) && (s = e.filter), {
    addQueryPrefix: typeof e.addQueryPrefix == "boolean" ? e.addQueryPrefix : Ke.addQueryPrefix,
    allowDots: typeof e.allowDots > "u" ? Ke.allowDots : !!e.allowDots,
    charset: r,
    charsetSentinel: typeof e.charsetSentinel == "boolean" ? e.charsetSentinel : Ke.charsetSentinel,
    delimiter: typeof e.delimiter > "u" ? Ke.delimiter : e.delimiter,
    encode: typeof e.encode == "boolean" ? e.encode : Ke.encode,
    encoder: typeof e.encoder == "function" ? e.encoder : Ke.encoder,
    encodeValuesOnly: typeof e.encodeValuesOnly == "boolean" ? e.encodeValuesOnly : Ke.encodeValuesOnly,
    filter: s,
    format: n,
    formatter: i,
    serializeDate: typeof e.serializeDate == "function" ? e.serializeDate : Ke.serializeDate,
    skipNulls: typeof e.skipNulls == "boolean" ? e.skipNulls : Ke.skipNulls,
    sort: typeof e.sort == "function" ? e.sort : null,
    strictNullHandling: typeof e.strictNullHandling == "boolean" ? e.strictNullHandling : Ke.strictNullHandling
  };
}, Hy = function(t, e) {
  var r = t, n = Vy(e), i, s;
  typeof n.filter == "function" ? (s = n.filter, r = s("", r)) : er(n.filter) && (s = n.filter, i = s);
  var o = [];
  if (typeof r != "object" || r === null)
    return "";
  var a;
  e && e.arrayFormat in ul ? a = e.arrayFormat : e && "indices" in e ? a = e.indices ? "indices" : "repeat" : a = "indices";
  var c = ul[a];
  if (e && "commaRoundTrip" in e && typeof e.commaRoundTrip != "boolean")
    throw new TypeError("`commaRoundTrip` must be a boolean, or absent");
  var u = c === "comma" && e && e.commaRoundTrip;
  i || (i = Object.keys(r)), n.sort && i.sort(n.sort);
  for (var h = Nh(), d = 0; d < i.length; ++d) {
    var p = i[d];
    n.skipNulls && r[p] === null || Lh(o, Wy(
      r[p],
      p,
      c,
      u,
      n.strictNullHandling,
      n.skipNulls,
      n.encode ? n.encoder : null,
      n.filter,
      n.sort,
      n.allowDots,
      n.serializeDate,
      n.format,
      n.formatter,
      n.encodeValuesOnly,
      n.charset,
      h
    ));
  }
  var v = o.join(n.delimiter), _ = n.addQueryPrefix === !0 ? "?" : "";
  return n.charsetSentinel && (n.charset === "iso-8859-1" ? _ += "utf8=%26%2310003%3B&" : _ += "utf8=%E2%9C%93&"), v.length > 0 ? _ + v : "";
}, vn = kh, uc = Object.prototype.hasOwnProperty, zy = Array.isArray, je = {
  allowDots: !1,
  allowPrototypes: !1,
  allowSparse: !1,
  arrayLimit: 20,
  charset: "utf-8",
  charsetSentinel: !1,
  comma: !1,
  decoder: vn.decode,
  delimiter: "&",
  depth: 5,
  ignoreQueryPrefix: !1,
  interpretNumericEntities: !1,
  parameterLimit: 1e3,
  parseArrays: !0,
  plainObjects: !1,
  strictNullHandling: !1
}, qy = function(t) {
  return t.replace(/&#(\d+);/g, function(e, r) {
    return String.fromCharCode(parseInt(r, 10));
  });
}, Ph = function(t, e) {
  return t && typeof t == "string" && e.comma && t.indexOf(",") > -1 ? t.split(",") : t;
}, Gy = "utf8=%26%2310003%3B", Jy = "utf8=%E2%9C%93", Qy = function(e, r) {
  var n = { __proto__: null }, i = r.ignoreQueryPrefix ? e.replace(/^\?/, "") : e, s = r.parameterLimit === 1 / 0 ? void 0 : r.parameterLimit, o = i.split(r.delimiter, s), a = -1, c, u = r.charset;
  if (r.charsetSentinel)
    for (c = 0; c < o.length; ++c)
      o[c].indexOf("utf8=") === 0 && (o[c] === Jy ? u = "utf-8" : o[c] === Gy && (u = "iso-8859-1"), a = c, c = o.length);
  for (c = 0; c < o.length; ++c)
    if (c !== a) {
      var h = o[c], d = h.indexOf("]="), p = d === -1 ? h.indexOf("=") : d + 1, v, _;
      p === -1 ? (v = r.decoder(h, je.decoder, u, "key"), _ = r.strictNullHandling ? null : "") : (v = r.decoder(h.slice(0, p), je.decoder, u, "key"), _ = vn.maybeMap(
        Ph(h.slice(p + 1), r),
        function(A) {
          return r.decoder(A, je.decoder, u, "value");
        }
      )), _ && r.interpretNumericEntities && u === "iso-8859-1" && (_ = qy(_)), h.indexOf("[]=") > -1 && (_ = zy(_) ? [_] : _), uc.call(n, v) ? n[v] = vn.combine(n[v], _) : n[v] = _;
    }
  return n;
}, Zy = function(t, e, r, n) {
  for (var i = n ? e : Ph(e, r), s = t.length - 1; s >= 0; --s) {
    var o, a = t[s];
    if (a === "[]" && r.parseArrays)
      o = [].concat(i);
    else {
      o = r.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
      var c = a.charAt(0) === "[" && a.charAt(a.length - 1) === "]" ? a.slice(1, -1) : a, u = parseInt(c, 10);
      !r.parseArrays && c === "" ? o = { 0: i } : !isNaN(u) && a !== c && String(u) === c && u >= 0 && r.parseArrays && u <= r.arrayLimit ? (o = [], o[u] = i) : c !== "__proto__" && (o[c] = i);
    }
    i = o;
  }
  return i;
}, Yy = function(e, r, n, i) {
  if (e) {
    var s = n.allowDots ? e.replace(/\.([^.[]+)/g, "[$1]") : e, o = /(\[[^[\]]*])/, a = /(\[[^[\]]*])/g, c = n.depth > 0 && o.exec(s), u = c ? s.slice(0, c.index) : s, h = [];
    if (u) {
      if (!n.plainObjects && uc.call(Object.prototype, u) && !n.allowPrototypes)
        return;
      h.push(u);
    }
    for (var d = 0; n.depth > 0 && (c = a.exec(s)) !== null && d < n.depth; ) {
      if (d += 1, !n.plainObjects && uc.call(Object.prototype, c[1].slice(1, -1)) && !n.allowPrototypes)
        return;
      h.push(c[1]);
    }
    return c && h.push("[" + s.slice(c.index) + "]"), Zy(h, r, n, i);
  }
}, Ky = function(e) {
  if (!e)
    return je;
  if (e.decoder !== null && e.decoder !== void 0 && typeof e.decoder != "function")
    throw new TypeError("Decoder has to be a function.");
  if (typeof e.charset < "u" && e.charset !== "utf-8" && e.charset !== "iso-8859-1")
    throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
  var r = typeof e.charset > "u" ? je.charset : e.charset;
  return {
    allowDots: typeof e.allowDots > "u" ? je.allowDots : !!e.allowDots,
    allowPrototypes: typeof e.allowPrototypes == "boolean" ? e.allowPrototypes : je.allowPrototypes,
    allowSparse: typeof e.allowSparse == "boolean" ? e.allowSparse : je.allowSparse,
    arrayLimit: typeof e.arrayLimit == "number" ? e.arrayLimit : je.arrayLimit,
    charset: r,
    charsetSentinel: typeof e.charsetSentinel == "boolean" ? e.charsetSentinel : je.charsetSentinel,
    comma: typeof e.comma == "boolean" ? e.comma : je.comma,
    decoder: typeof e.decoder == "function" ? e.decoder : je.decoder,
    delimiter: typeof e.delimiter == "string" || vn.isRegExp(e.delimiter) ? e.delimiter : je.delimiter,
    // eslint-disable-next-line no-implicit-coercion, no-extra-parens
    depth: typeof e.depth == "number" || e.depth === !1 ? +e.depth : je.depth,
    ignoreQueryPrefix: e.ignoreQueryPrefix === !0,
    interpretNumericEntities: typeof e.interpretNumericEntities == "boolean" ? e.interpretNumericEntities : je.interpretNumericEntities,
    parameterLimit: typeof e.parameterLimit == "number" ? e.parameterLimit : je.parameterLimit,
    parseArrays: e.parseArrays !== !1,
    plainObjects: typeof e.plainObjects == "boolean" ? e.plainObjects : je.plainObjects,
    strictNullHandling: typeof e.strictNullHandling == "boolean" ? e.strictNullHandling : je.strictNullHandling
  };
}, Xy = function(t, e) {
  var r = Ky(e);
  if (t === "" || t === null || typeof t > "u")
    return r.plainObjects ? /* @__PURE__ */ Object.create(null) : {};
  for (var n = typeof t == "string" ? Qy(t, r) : t, i = r.plainObjects ? /* @__PURE__ */ Object.create(null) : {}, s = Object.keys(n), o = 0; o < s.length; ++o) {
    var a = s[o], c = Yy(a, n[a], r, typeof t == "string");
    i = vn.merge(i, c, r);
  }
  return r.allowSparse === !0 ? i : vn.compact(i);
}, e1 = Hy, t1 = Xy, r1 = Bc, n1 = {
  formats: r1,
  parse: t1,
  stringify: e1
}, vi = {};
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.ProviderType = t.RegExpString = t.IntNumber = t.BigIntString = t.AddressString = t.HexString = t.OpaqueType = void 0;
  function e() {
    return (n) => n;
  }
  t.OpaqueType = e, t.HexString = e(), t.AddressString = e(), t.BigIntString = e();
  function r(n) {
    return Math.floor(n);
  }
  t.IntNumber = r, t.RegExpString = e(), function(n) {
    n.CoinbaseWallet = "CoinbaseWallet", n.MetaMask = "MetaMask", n.Unselected = "";
  }(t.ProviderType || (t.ProviderType = {}));
})(vi);
var i1 = G && G.__importDefault || function(t) {
  return t && t.__esModule ? t : { default: t };
};
Object.defineProperty(Z, "__esModule", { value: !0 });
Z.isInIFrame = Z.createQrUrl = Z.getFavicon = Z.range = Z.isBigNumber = Z.ensureParsedJSONObject = Z.ensureBN = Z.ensureRegExpString = Z.ensureIntNumber = Z.ensureBuffer = Z.ensureAddressString = Z.ensureEvenLengthHexString = Z.ensureHexString = Z.isHexString = Z.prepend0x = Z.strip0x = Z.has0xPrefix = Z.hexStringFromIntNumber = Z.intNumberFromHexString = Z.bigIntStringFromBN = Z.hexStringFromBuffer = Z.hexStringToUint8Array = Z.uint8ArrayToHex = Z.randomBytesHex = void 0;
const hr = i1(ms), s1 = n1, qr = hi, wt = vi, Bh = /^[0-9]*$/, $h = /^[a-f0-9]*$/;
function o1(t) {
  return Dh(crypto.getRandomValues(new Uint8Array(t)));
}
Z.randomBytesHex = o1;
function Dh(t) {
  return [...t].map((e) => e.toString(16).padStart(2, "0")).join("");
}
Z.uint8ArrayToHex = Dh;
function a1(t) {
  return new Uint8Array(t.match(/.{1,2}/g).map((e) => parseInt(e, 16)));
}
Z.hexStringToUint8Array = a1;
function c1(t, e = !1) {
  const r = t.toString("hex");
  return (0, wt.HexString)(e ? "0x" + r : r);
}
Z.hexStringFromBuffer = c1;
function u1(t) {
  return (0, wt.BigIntString)(t.toString(10));
}
Z.bigIntStringFromBN = u1;
function l1(t) {
  return (0, wt.IntNumber)(new hr.default(_i(t, !1), 16).toNumber());
}
Z.intNumberFromHexString = l1;
function f1(t) {
  return (0, wt.HexString)("0x" + new hr.default(t).toString(16));
}
Z.hexStringFromIntNumber = f1;
function $c(t) {
  return t.startsWith("0x") || t.startsWith("0X");
}
Z.has0xPrefix = $c;
function As(t) {
  return $c(t) ? t.slice(2) : t;
}
Z.strip0x = As;
function Fh(t) {
  return $c(t) ? "0x" + t.slice(2) : "0x" + t;
}
Z.prepend0x = Fh;
function wi(t) {
  if (typeof t != "string")
    return !1;
  const e = As(t).toLowerCase();
  return $h.test(e);
}
Z.isHexString = wi;
function jh(t, e = !1) {
  if (typeof t == "string") {
    const r = As(t).toLowerCase();
    if ($h.test(r))
      return (0, wt.HexString)(e ? "0x" + r : r);
  }
  throw qr.standardErrors.rpc.invalidParams(`"${String(t)}" is not a hexadecimal string`);
}
Z.ensureHexString = jh;
function _i(t, e = !1) {
  let r = jh(t, !1);
  return r.length % 2 === 1 && (r = (0, wt.HexString)("0" + r)), e ? (0, wt.HexString)("0x" + r) : r;
}
Z.ensureEvenLengthHexString = _i;
function h1(t) {
  if (typeof t == "string") {
    const e = As(t).toLowerCase();
    if (wi(e) && e.length === 40)
      return (0, wt.AddressString)(Fh(e));
  }
  throw qr.standardErrors.rpc.invalidParams(`Invalid Ethereum address: ${String(t)}`);
}
Z.ensureAddressString = h1;
function d1(t) {
  if (Buffer.isBuffer(t))
    return t;
  if (typeof t == "string")
    if (wi(t)) {
      const e = _i(t, !1);
      return Buffer.from(e, "hex");
    } else
      return Buffer.from(t, "utf8");
  throw qr.standardErrors.rpc.invalidParams(`Not binary data: ${String(t)}`);
}
Z.ensureBuffer = d1;
function Uh(t) {
  if (typeof t == "number" && Number.isInteger(t))
    return (0, wt.IntNumber)(t);
  if (typeof t == "string") {
    if (Bh.test(t))
      return (0, wt.IntNumber)(Number(t));
    if (wi(t))
      return (0, wt.IntNumber)(new hr.default(_i(t, !1), 16).toNumber());
  }
  throw qr.standardErrors.rpc.invalidParams(`Not an integer: ${String(t)}`);
}
Z.ensureIntNumber = Uh;
function p1(t) {
  if (t instanceof RegExp)
    return (0, wt.RegExpString)(t.toString());
  throw qr.standardErrors.rpc.invalidParams(`Not a RegExp: ${String(t)}`);
}
Z.ensureRegExpString = p1;
function g1(t) {
  if (t !== null && (hr.default.isBN(t) || Wh(t)))
    return new hr.default(t.toString(10), 10);
  if (typeof t == "number")
    return new hr.default(Uh(t));
  if (typeof t == "string") {
    if (Bh.test(t))
      return new hr.default(t, 10);
    if (wi(t))
      return new hr.default(_i(t, !1), 16);
  }
  throw qr.standardErrors.rpc.invalidParams(`Not an integer: ${String(t)}`);
}
Z.ensureBN = g1;
function b1(t) {
  if (typeof t == "string")
    return JSON.parse(t);
  if (typeof t == "object")
    return t;
  throw qr.standardErrors.rpc.invalidParams(`Not a JSON string or an object: ${String(t)}`);
}
Z.ensureParsedJSONObject = b1;
function Wh(t) {
  if (t == null || typeof t.constructor != "function")
    return !1;
  const { constructor: e } = t;
  return typeof e.config == "function" && typeof e.EUCLID == "number";
}
Z.isBigNumber = Wh;
function y1(t, e) {
  return Array.from({ length: e - t }, (r, n) => t + n);
}
Z.range = y1;
function m1() {
  const t = document.querySelector('link[sizes="192x192"]') || document.querySelector('link[sizes="180x180"]') || document.querySelector('link[rel="icon"]') || document.querySelector('link[rel="shortcut icon"]'), { protocol: e, host: r } = document.location, n = t ? t.getAttribute("href") : null;
  return !n || n.startsWith("javascript:") ? null : n.startsWith("http://") || n.startsWith("https://") || n.startsWith("data:") ? n : n.startsWith("//") ? e + n : `${e}//${r}${n}`;
}
Z.getFavicon = m1;
function v1(t, e, r, n, i, s) {
  const o = n ? "parent-id" : "id", a = (0, s1.stringify)({
    [o]: t,
    secret: e,
    server: r,
    v: i,
    chainId: s
  });
  return `${r}/#/link?${a}`;
}
Z.createQrUrl = v1;
function w1() {
  try {
    return window.frameElement !== null;
  } catch {
    return !1;
  }
}
Z.isInIFrame = w1;
Object.defineProperty(Nn, "__esModule", { value: !0 });
Nn.Session = void 0;
const fl = Kg, hl = Z, dl = "session:id", pl = "session:secret", gl = "session:linked";
class Dc {
  constructor(e, r, n, i) {
    this._storage = e, this._id = r || (0, hl.randomBytesHex)(16), this._secret = n || (0, hl.randomBytesHex)(32), this._key = new fl.sha256().update(`${this._id}, ${this._secret} WalletLink`).digest("hex"), this._linked = !!i;
  }
  static load(e) {
    const r = e.getItem(dl), n = e.getItem(gl), i = e.getItem(pl);
    return r && i ? new Dc(e, r, i, n === "1") : null;
  }
  /**
   * Takes in a session ID and returns the sha256 hash of it.
   * @param sessionId session ID
   */
  static hash(e) {
    return new fl.sha256().update(e).digest("hex");
  }
  get id() {
    return this._id;
  }
  get secret() {
    return this._secret;
  }
  get key() {
    return this._key;
  }
  get linked() {
    return this._linked;
  }
  set linked(e) {
    this._linked = e, this.persistLinked();
  }
  save() {
    return this._storage.setItem(dl, this._id), this._storage.setItem(pl, this._secret), this.persistLinked(), this;
  }
  persistLinked() {
    this._storage.setItem(gl, this._linked ? "1" : "0");
  }
}
Nn.Session = Dc;
var Mt = {};
Object.defineProperty(Mt, "__esModule", { value: !0 });
Mt.WalletSDKRelayAbstract = Mt.APP_VERSION_KEY = Mt.LOCAL_STORAGE_ADDRESSES_KEY = Mt.WALLET_USER_NAME_KEY = void 0;
const bl = hi;
Mt.WALLET_USER_NAME_KEY = "walletUsername";
Mt.LOCAL_STORAGE_ADDRESSES_KEY = "Addresses";
Mt.APP_VERSION_KEY = "AppVersion";
class _1 {
  async makeEthereumJSONRPCRequest(e, r) {
    if (!r)
      throw new Error("Error: No jsonRpcUrl provided");
    return window.fetch(r, {
      method: "POST",
      body: JSON.stringify(e),
      mode: "cors",
      headers: { "Content-Type": "application/json" }
    }).then((n) => n.json()).then((n) => {
      if (!n)
        throw bl.standardErrors.rpc.parse({});
      const i = n, { error: s } = i;
      if (s)
        throw (0, bl.serializeError)(s, e.method);
      return i;
    });
  }
}
Mt.WalletSDKRelayAbstract = _1;
var lc = { exports: {} }, Vh = xc.EventEmitter, wa, yl;
function E1() {
  if (yl)
    return wa;
  yl = 1;
  function t(_, A) {
    var R = Object.keys(_);
    if (Object.getOwnPropertySymbols) {
      var y = Object.getOwnPropertySymbols(_);
      A && (y = y.filter(function(E) {
        return Object.getOwnPropertyDescriptor(_, E).enumerable;
      })), R.push.apply(R, y);
    }
    return R;
  }
  function e(_) {
    for (var A = 1; A < arguments.length; A++) {
      var R = arguments[A] != null ? arguments[A] : {};
      A % 2 ? t(Object(R), !0).forEach(function(y) {
        r(_, y, R[y]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(_, Object.getOwnPropertyDescriptors(R)) : t(Object(R)).forEach(function(y) {
        Object.defineProperty(_, y, Object.getOwnPropertyDescriptor(R, y));
      });
    }
    return _;
  }
  function r(_, A, R) {
    return A = o(A), A in _ ? Object.defineProperty(_, A, { value: R, enumerable: !0, configurable: !0, writable: !0 }) : _[A] = R, _;
  }
  function n(_, A) {
    if (!(_ instanceof A))
      throw new TypeError("Cannot call a class as a function");
  }
  function i(_, A) {
    for (var R = 0; R < A.length; R++) {
      var y = A[R];
      y.enumerable = y.enumerable || !1, y.configurable = !0, "value" in y && (y.writable = !0), Object.defineProperty(_, o(y.key), y);
    }
  }
  function s(_, A, R) {
    return A && i(_.prototype, A), R && i(_, R), Object.defineProperty(_, "prototype", { writable: !1 }), _;
  }
  function o(_) {
    var A = a(_, "string");
    return typeof A == "symbol" ? A : String(A);
  }
  function a(_, A) {
    if (typeof _ != "object" || _ === null)
      return _;
    var R = _[Symbol.toPrimitive];
    if (R !== void 0) {
      var y = R.call(_, A || "default");
      if (typeof y != "object")
        return y;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (A === "string" ? String : Number)(_);
  }
  var c = di, u = c.Buffer, h = Cc, d = h.inspect, p = d && d.custom || "inspect";
  function v(_, A, R) {
    u.prototype.copy.call(_, A, R);
  }
  return wa = /* @__PURE__ */ function() {
    function _() {
      n(this, _), this.head = null, this.tail = null, this.length = 0;
    }
    return s(_, [{
      key: "push",
      value: function(R) {
        var y = {
          data: R,
          next: null
        };
        this.length > 0 ? this.tail.next = y : this.head = y, this.tail = y, ++this.length;
      }
    }, {
      key: "unshift",
      value: function(R) {
        var y = {
          data: R,
          next: this.head
        };
        this.length === 0 && (this.tail = y), this.head = y, ++this.length;
      }
    }, {
      key: "shift",
      value: function() {
        if (this.length !== 0) {
          var R = this.head.data;
          return this.length === 1 ? this.head = this.tail = null : this.head = this.head.next, --this.length, R;
        }
      }
    }, {
      key: "clear",
      value: function() {
        this.head = this.tail = null, this.length = 0;
      }
    }, {
      key: "join",
      value: function(R) {
        if (this.length === 0)
          return "";
        for (var y = this.head, E = "" + y.data; y = y.next; )
          E += R + y.data;
        return E;
      }
    }, {
      key: "concat",
      value: function(R) {
        if (this.length === 0)
          return u.alloc(0);
        for (var y = u.allocUnsafe(R >>> 0), E = this.head, x = 0; E; )
          v(E.data, y, x), x += E.data.length, E = E.next;
        return y;
      }
      // Consumes a specified amount of bytes or characters from the buffered data.
    }, {
      key: "consume",
      value: function(R, y) {
        var E;
        return R < this.head.data.length ? (E = this.head.data.slice(0, R), this.head.data = this.head.data.slice(R)) : R === this.head.data.length ? E = this.shift() : E = y ? this._getString(R) : this._getBuffer(R), E;
      }
    }, {
      key: "first",
      value: function() {
        return this.head.data;
      }
      // Consumes a specified amount of characters from the buffered data.
    }, {
      key: "_getString",
      value: function(R) {
        var y = this.head, E = 1, x = y.data;
        for (R -= x.length; y = y.next; ) {
          var O = y.data, M = R > O.length ? O.length : R;
          if (M === O.length ? x += O : x += O.slice(0, R), R -= M, R === 0) {
            M === O.length ? (++E, y.next ? this.head = y.next : this.head = this.tail = null) : (this.head = y, y.data = O.slice(M));
            break;
          }
          ++E;
        }
        return this.length -= E, x;
      }
      // Consumes a specified amount of bytes from the buffered data.
    }, {
      key: "_getBuffer",
      value: function(R) {
        var y = u.allocUnsafe(R), E = this.head, x = 1;
        for (E.data.copy(y), R -= E.data.length; E = E.next; ) {
          var O = E.data, M = R > O.length ? O.length : R;
          if (O.copy(y, y.length - R, 0, M), R -= M, R === 0) {
            M === O.length ? (++x, E.next ? this.head = E.next : this.head = this.tail = null) : (this.head = E, E.data = O.slice(M));
            break;
          }
          ++x;
        }
        return this.length -= x, y;
      }
      // Make sure the linked list only shows the minimal necessary information.
    }, {
      key: p,
      value: function(R, y) {
        return d(this, e(e({}, y), {}, {
          // Only inspect one level.
          depth: 0,
          // It should not recurse.
          customInspect: !1
        }));
      }
    }]), _;
  }(), wa;
}
function S1(t, e) {
  var r = this, n = this._readableState && this._readableState.destroyed, i = this._writableState && this._writableState.destroyed;
  return n || i ? (e ? e(t) : t && (this._writableState ? this._writableState.errorEmitted || (this._writableState.errorEmitted = !0, process.nextTick(fc, this, t)) : process.nextTick(fc, this, t)), this) : (this._readableState && (this._readableState.destroyed = !0), this._writableState && (this._writableState.destroyed = !0), this._destroy(t || null, function(s) {
    !e && s ? r._writableState ? r._writableState.errorEmitted ? process.nextTick(es, r) : (r._writableState.errorEmitted = !0, process.nextTick(ml, r, s)) : process.nextTick(ml, r, s) : e ? (process.nextTick(es, r), e(s)) : process.nextTick(es, r);
  }), this);
}
function ml(t, e) {
  fc(t, e), es(t);
}
function es(t) {
  t._writableState && !t._writableState.emitClose || t._readableState && !t._readableState.emitClose || t.emit("close");
}
function x1() {
  this._readableState && (this._readableState.destroyed = !1, this._readableState.reading = !1, this._readableState.ended = !1, this._readableState.endEmitted = !1), this._writableState && (this._writableState.destroyed = !1, this._writableState.ended = !1, this._writableState.ending = !1, this._writableState.finalCalled = !1, this._writableState.prefinished = !1, this._writableState.finished = !1, this._writableState.errorEmitted = !1);
}
function fc(t, e) {
  t.emit("error", e);
}
function C1(t, e) {
  var r = t._readableState, n = t._writableState;
  r && r.autoDestroy || n && n.autoDestroy ? t.destroy(e) : t.emit("error", e);
}
var Hh = {
  destroy: S1,
  undestroy: x1,
  errorOrDestroy: C1
}, Gr = {};
function I1(t, e) {
  t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t.__proto__ = e;
}
var zh = {};
function Et(t, e, r) {
  r || (r = Error);
  function n(s, o, a) {
    return typeof e == "string" ? e : e(s, o, a);
  }
  var i = /* @__PURE__ */ function(s) {
    I1(o, s);
    function o(a, c, u) {
      return s.call(this, n(a, c, u)) || this;
    }
    return o;
  }(r);
  i.prototype.name = r.name, i.prototype.code = t, zh[t] = i;
}
function vl(t, e) {
  if (Array.isArray(t)) {
    var r = t.length;
    return t = t.map(function(n) {
      return String(n);
    }), r > 2 ? "one of ".concat(e, " ").concat(t.slice(0, r - 1).join(", "), ", or ") + t[r - 1] : r === 2 ? "one of ".concat(e, " ").concat(t[0], " or ").concat(t[1]) : "of ".concat(e, " ").concat(t[0]);
  } else
    return "of ".concat(e, " ").concat(String(t));
}
function R1(t, e, r) {
  return t.substr(!r || r < 0 ? 0 : +r, e.length) === e;
}
function A1(t, e, r) {
  return (r === void 0 || r > t.length) && (r = t.length), t.substring(r - e.length, r) === e;
}
function T1(t, e, r) {
  return typeof r != "number" && (r = 0), r + e.length > t.length ? !1 : t.indexOf(e, r) !== -1;
}
Et("ERR_INVALID_OPT_VALUE", function(t, e) {
  return 'The value "' + e + '" is invalid for option "' + t + '"';
}, TypeError);
Et("ERR_INVALID_ARG_TYPE", function(t, e, r) {
  var n;
  typeof e == "string" && R1(e, "not ") ? (n = "must not be", e = e.replace(/^not /, "")) : n = "must be";
  var i;
  if (A1(t, " argument"))
    i = "The ".concat(t, " ").concat(n, " ").concat(vl(e, "type"));
  else {
    var s = T1(t, ".") ? "property" : "argument";
    i = 'The "'.concat(t, '" ').concat(s, " ").concat(n, " ").concat(vl(e, "type"));
  }
  return i += ". Received type ".concat(typeof r), i;
}, TypeError);
Et("ERR_STREAM_PUSH_AFTER_EOF", "stream.push() after EOF");
Et("ERR_METHOD_NOT_IMPLEMENTED", function(t) {
  return "The " + t + " method is not implemented";
});
Et("ERR_STREAM_PREMATURE_CLOSE", "Premature close");
Et("ERR_STREAM_DESTROYED", function(t) {
  return "Cannot call " + t + " after a stream was destroyed";
});
Et("ERR_MULTIPLE_CALLBACK", "Callback called multiple times");
Et("ERR_STREAM_CANNOT_PIPE", "Cannot pipe, not readable");
Et("ERR_STREAM_WRITE_AFTER_END", "write after end");
Et("ERR_STREAM_NULL_VALUES", "May not write null values to stream", TypeError);
Et("ERR_UNKNOWN_ENCODING", function(t) {
  return "Unknown encoding: " + t;
}, TypeError);
Et("ERR_STREAM_UNSHIFT_AFTER_END_EVENT", "stream.unshift() after end event");
Gr.codes = zh;
var M1 = Gr.codes.ERR_INVALID_OPT_VALUE;
function O1(t, e, r) {
  return t.highWaterMark != null ? t.highWaterMark : e ? t[r] : null;
}
function k1(t, e, r, n) {
  var i = O1(e, n, r);
  if (i != null) {
    if (!(isFinite(i) && Math.floor(i) === i) || i < 0) {
      var s = n ? r : "highWaterMark";
      throw new M1(s, i);
    }
    return Math.floor(i);
  }
  return t.objectMode ? 16 : 16 * 1024;
}
var qh = {
  getHighWaterMark: k1
}, N1 = L1;
function L1(t, e) {
  if (_a("noDeprecation"))
    return t;
  var r = !1;
  function n() {
    if (!r) {
      if (_a("throwDeprecation"))
        throw new Error(e);
      _a("traceDeprecation") ? console.trace(e) : console.warn(e), r = !0;
    }
    return t.apply(this, arguments);
  }
  return n;
}
function _a(t) {
  try {
    if (!G.localStorage)
      return !1;
  } catch {
    return !1;
  }
  var e = G.localStorage[t];
  return e == null ? !1 : String(e).toLowerCase() === "true";
}
var Ea, wl;
function Gh() {
  if (wl)
    return Ea;
  wl = 1, Ea = H;
  function t(C) {
    var I = this;
    this.next = null, this.entry = null, this.finish = function() {
      De(I, C);
    };
  }
  var e;
  H.WritableState = D;
  var r = {
    deprecate: N1
  }, n = Vh, i = di.Buffer, s = (typeof G < "u" ? G : typeof window < "u" ? window : typeof self < "u" ? self : {}).Uint8Array || function() {
  };
  function o(C) {
    return i.from(C);
  }
  function a(C) {
    return i.isBuffer(C) || C instanceof s;
  }
  var c = Hh, u = qh, h = u.getHighWaterMark, d = Gr.codes, p = d.ERR_INVALID_ARG_TYPE, v = d.ERR_METHOD_NOT_IMPLEMENTED, _ = d.ERR_MULTIPLE_CALLBACK, A = d.ERR_STREAM_CANNOT_PIPE, R = d.ERR_STREAM_DESTROYED, y = d.ERR_STREAM_NULL_VALUES, E = d.ERR_STREAM_WRITE_AFTER_END, x = d.ERR_UNKNOWN_ENCODING, O = c.errorOrDestroy;
  Ot(H, n);
  function M() {
  }
  function D(C, I, $) {
    e = e || wn(), C = C || {}, typeof $ != "boolean" && ($ = I instanceof e), this.objectMode = !!C.objectMode, $ && (this.objectMode = this.objectMode || !!C.writableObjectMode), this.highWaterMark = h(this, C, "writableHighWaterMark", $), this.finalCalled = !1, this.needDrain = !1, this.ending = !1, this.ended = !1, this.finished = !1, this.destroyed = !1;
    var Y = C.decodeStrings === !1;
    this.decodeStrings = !Y, this.defaultEncoding = C.defaultEncoding || "utf8", this.length = 0, this.writing = !1, this.corked = 0, this.sync = !0, this.bufferProcessing = !1, this.onwrite = function(oe) {
      W(I, oe);
    }, this.writecb = null, this.writelen = 0, this.bufferedRequest = null, this.lastBufferedRequest = null, this.pendingcb = 0, this.prefinished = !1, this.errorEmitted = !1, this.emitClose = C.emitClose !== !1, this.autoDestroy = !!C.autoDestroy, this.bufferedRequestCount = 0, this.corkedRequestsFree = new t(this);
  }
  D.prototype.getBuffer = function() {
    for (var I = this.bufferedRequest, $ = []; I; )
      $.push(I), I = I.next;
    return $;
  }, function() {
    try {
      Object.defineProperty(D.prototype, "buffer", {
        get: r.deprecate(function() {
          return this.getBuffer();
        }, "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.", "DEP0003")
      });
    } catch {
    }
  }();
  var J;
  typeof Symbol == "function" && Symbol.hasInstance && typeof Function.prototype[Symbol.hasInstance] == "function" ? (J = Function.prototype[Symbol.hasInstance], Object.defineProperty(H, Symbol.hasInstance, {
    value: function(I) {
      return J.call(this, I) ? !0 : this !== H ? !1 : I && I._writableState instanceof D;
    }
  })) : J = function(I) {
    return I instanceof this;
  };
  function H(C) {
    e = e || wn();
    var I = this instanceof e;
    if (!I && !J.call(H, this))
      return new H(C);
    this._writableState = new D(C, this, I), this.writable = !0, C && (typeof C.write == "function" && (this._write = C.write), typeof C.writev == "function" && (this._writev = C.writev), typeof C.destroy == "function" && (this._destroy = C.destroy), typeof C.final == "function" && (this._final = C.final)), n.call(this);
  }
  H.prototype.pipe = function() {
    O(this, new A());
  };
  function F(C, I) {
    var $ = new E();
    O(C, $), process.nextTick(I, $);
  }
  function X(C, I, $, Y) {
    var oe;
    return $ === null ? oe = new y() : typeof $ != "string" && !I.objectMode && (oe = new p("chunk", ["string", "Buffer"], $)), oe ? (O(C, oe), process.nextTick(Y, oe), !1) : !0;
  }
  H.prototype.write = function(C, I, $) {
    var Y = this._writableState, oe = !1, m = !Y.objectMode && a(C);
    return m && !i.isBuffer(C) && (C = o(C)), typeof I == "function" && ($ = I, I = null), m ? I = "buffer" : I || (I = Y.defaultEncoding), typeof $ != "function" && ($ = M), Y.ending ? F(this, $) : (m || X(this, Y, C, $)) && (Y.pendingcb++, oe = re(this, Y, m, C, I, $)), oe;
  }, H.prototype.cork = function() {
    this._writableState.corked++;
  }, H.prototype.uncork = function() {
    var C = this._writableState;
    C.corked && (C.corked--, !C.writing && !C.corked && !C.bufferProcessing && C.bufferedRequest && Q(this, C));
  }, H.prototype.setDefaultEncoding = function(I) {
    if (typeof I == "string" && (I = I.toLowerCase()), !(["hex", "utf8", "utf-8", "ascii", "binary", "base64", "ucs2", "ucs-2", "utf16le", "utf-16le", "raw"].indexOf((I + "").toLowerCase()) > -1))
      throw new x(I);
    return this._writableState.defaultEncoding = I, this;
  }, Object.defineProperty(H.prototype, "writableBuffer", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: !1,
    get: function() {
      return this._writableState && this._writableState.getBuffer();
    }
  });
  function de(C, I, $) {
    return !C.objectMode && C.decodeStrings !== !1 && typeof I == "string" && (I = i.from(I, $)), I;
  }
  Object.defineProperty(H.prototype, "writableHighWaterMark", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: !1,
    get: function() {
      return this._writableState.highWaterMark;
    }
  });
  function re(C, I, $, Y, oe, m) {
    if (!$) {
      var w = de(I, Y, oe);
      Y !== w && ($ = !0, oe = "buffer", Y = w);
    }
    var N = I.objectMode ? 1 : Y.length;
    I.length += N;
    var j = I.length < I.highWaterMark;
    if (j || (I.needDrain = !0), I.writing || I.corked) {
      var Ee = I.lastBufferedRequest;
      I.lastBufferedRequest = {
        chunk: Y,
        encoding: oe,
        isBuf: $,
        callback: m,
        next: null
      }, Ee ? Ee.next = I.lastBufferedRequest : I.bufferedRequest = I.lastBufferedRequest, I.bufferedRequestCount += 1;
    } else
      P(C, I, !1, N, Y, oe, m);
    return j;
  }
  function P(C, I, $, Y, oe, m, w) {
    I.writelen = Y, I.writecb = w, I.writing = !0, I.sync = !0, I.destroyed ? I.onwrite(new R("write")) : $ ? C._writev(oe, I.onwrite) : C._write(oe, m, I.onwrite), I.sync = !1;
  }
  function B(C, I, $, Y, oe) {
    --I.pendingcb, $ ? (process.nextTick(oe, Y), process.nextTick(ve, C, I), C._writableState.errorEmitted = !0, O(C, Y)) : (oe(Y), C._writableState.errorEmitted = !0, O(C, Y), ve(C, I));
  }
  function U(C) {
    C.writing = !1, C.writecb = null, C.length -= C.writelen, C.writelen = 0;
  }
  function W(C, I) {
    var $ = C._writableState, Y = $.sync, oe = $.writecb;
    if (typeof oe != "function")
      throw new _();
    if (U($), I)
      B(C, $, Y, I, oe);
    else {
      var m = ie($) || C.destroyed;
      !m && !$.corked && !$.bufferProcessing && $.bufferedRequest && Q(C, $), Y ? process.nextTick(z, C, $, m, oe) : z(C, $, m, oe);
    }
  }
  function z(C, I, $, Y) {
    $ || V(C, I), I.pendingcb--, Y(), ve(C, I);
  }
  function V(C, I) {
    I.length === 0 && I.needDrain && (I.needDrain = !1, C.emit("drain"));
  }
  function Q(C, I) {
    I.bufferProcessing = !0;
    var $ = I.bufferedRequest;
    if (C._writev && $ && $.next) {
      var Y = I.bufferedRequestCount, oe = new Array(Y), m = I.corkedRequestsFree;
      m.entry = $;
      for (var w = 0, N = !0; $; )
        oe[w] = $, $.isBuf || (N = !1), $ = $.next, w += 1;
      oe.allBuffers = N, P(C, I, !0, I.length, oe, "", m.finish), I.pendingcb++, I.lastBufferedRequest = null, m.next ? (I.corkedRequestsFree = m.next, m.next = null) : I.corkedRequestsFree = new t(I), I.bufferedRequestCount = 0;
    } else {
      for (; $; ) {
        var j = $.chunk, Ee = $.encoding, ae = $.callback, pe = I.objectMode ? 1 : j.length;
        if (P(C, I, !1, pe, j, Ee, ae), $ = $.next, I.bufferedRequestCount--, I.writing)
          break;
      }
      $ === null && (I.lastBufferedRequest = null);
    }
    I.bufferedRequest = $, I.bufferProcessing = !1;
  }
  H.prototype._write = function(C, I, $) {
    $(new v("_write()"));
  }, H.prototype._writev = null, H.prototype.end = function(C, I, $) {
    var Y = this._writableState;
    return typeof C == "function" ? ($ = C, C = null, I = null) : typeof I == "function" && ($ = I, I = null), C != null && this.write(C, I), Y.corked && (Y.corked = 1, this.uncork()), Y.ending || be(this, Y, $), this;
  }, Object.defineProperty(H.prototype, "writableLength", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: !1,
    get: function() {
      return this._writableState.length;
    }
  });
  function ie(C) {
    return C.ending && C.length === 0 && C.bufferedRequest === null && !C.finished && !C.writing;
  }
  function q(C, I) {
    C._final(function($) {
      I.pendingcb--, $ && O(C, $), I.prefinished = !0, C.emit("prefinish"), ve(C, I);
    });
  }
  function te(C, I) {
    !I.prefinished && !I.finalCalled && (typeof C._final == "function" && !I.destroyed ? (I.pendingcb++, I.finalCalled = !0, process.nextTick(q, C, I)) : (I.prefinished = !0, C.emit("prefinish")));
  }
  function ve(C, I) {
    var $ = ie(I);
    if ($ && (te(C, I), I.pendingcb === 0 && (I.finished = !0, C.emit("finish"), I.autoDestroy))) {
      var Y = C._readableState;
      (!Y || Y.autoDestroy && Y.endEmitted) && C.destroy();
    }
    return $;
  }
  function be(C, I, $) {
    I.ending = !0, ve(C, I), $ && (I.finished ? process.nextTick($) : C.once("finish", $)), I.ended = !0, C.writable = !1;
  }
  function De(C, I, $) {
    var Y = C.entry;
    for (C.entry = null; Y; ) {
      var oe = Y.callback;
      I.pendingcb--, oe($), Y = Y.next;
    }
    I.corkedRequestsFree.next = C;
  }
  return Object.defineProperty(H.prototype, "destroyed", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: !1,
    get: function() {
      return this._writableState === void 0 ? !1 : this._writableState.destroyed;
    },
    set: function(I) {
      this._writableState && (this._writableState.destroyed = I);
    }
  }), H.prototype.destroy = c.destroy, H.prototype._undestroy = c.undestroy, H.prototype._destroy = function(C, I) {
    I(C);
  }, Ea;
}
var Sa, _l;
function wn() {
  if (_l)
    return Sa;
  _l = 1;
  var t = Object.keys || function(u) {
    var h = [];
    for (var d in u)
      h.push(d);
    return h;
  };
  Sa = o;
  var e = Qh(), r = Gh();
  Ot(o, e);
  for (var n = t(r.prototype), i = 0; i < n.length; i++) {
    var s = n[i];
    o.prototype[s] || (o.prototype[s] = r.prototype[s]);
  }
  function o(u) {
    if (!(this instanceof o))
      return new o(u);
    e.call(this, u), r.call(this, u), this.allowHalfOpen = !0, u && (u.readable === !1 && (this.readable = !1), u.writable === !1 && (this.writable = !1), u.allowHalfOpen === !1 && (this.allowHalfOpen = !1, this.once("end", a)));
  }
  Object.defineProperty(o.prototype, "writableHighWaterMark", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: !1,
    get: function() {
      return this._writableState.highWaterMark;
    }
  }), Object.defineProperty(o.prototype, "writableBuffer", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: !1,
    get: function() {
      return this._writableState && this._writableState.getBuffer();
    }
  }), Object.defineProperty(o.prototype, "writableLength", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: !1,
    get: function() {
      return this._writableState.length;
    }
  });
  function a() {
    this._writableState.ended || process.nextTick(c, this);
  }
  function c(u) {
    u.end();
  }
  return Object.defineProperty(o.prototype, "destroyed", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: !1,
    get: function() {
      return this._readableState === void 0 || this._writableState === void 0 ? !1 : this._readableState.destroyed && this._writableState.destroyed;
    },
    set: function(h) {
      this._readableState === void 0 || this._writableState === void 0 || (this._readableState.destroyed = h, this._writableState.destroyed = h);
    }
  }), Sa;
}
var xa = {}, El;
function Sl() {
  if (El)
    return xa;
  El = 1;
  var t = Sr.Buffer, e = t.isEncoding || function(y) {
    switch (y = "" + y, y && y.toLowerCase()) {
      case "hex":
      case "utf8":
      case "utf-8":
      case "ascii":
      case "binary":
      case "base64":
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
      case "raw":
        return !0;
      default:
        return !1;
    }
  };
  function r(y) {
    if (!y)
      return "utf8";
    for (var E; ; )
      switch (y) {
        case "utf8":
        case "utf-8":
          return "utf8";
        case "ucs2":
        case "ucs-2":
        case "utf16le":
        case "utf-16le":
          return "utf16le";
        case "latin1":
        case "binary":
          return "latin1";
        case "base64":
        case "ascii":
        case "hex":
          return y;
        default:
          if (E)
            return;
          y = ("" + y).toLowerCase(), E = !0;
      }
  }
  function n(y) {
    var E = r(y);
    if (typeof E != "string" && (t.isEncoding === e || !e(y)))
      throw new Error("Unknown encoding: " + y);
    return E || y;
  }
  xa.StringDecoder = i;
  function i(y) {
    this.encoding = n(y);
    var E;
    switch (this.encoding) {
      case "utf16le":
        this.text = d, this.end = p, E = 4;
        break;
      case "utf8":
        this.fillLast = c, E = 4;
        break;
      case "base64":
        this.text = v, this.end = _, E = 3;
        break;
      default:
        this.write = A, this.end = R;
        return;
    }
    this.lastNeed = 0, this.lastTotal = 0, this.lastChar = t.allocUnsafe(E);
  }
  i.prototype.write = function(y) {
    if (y.length === 0)
      return "";
    var E, x;
    if (this.lastNeed) {
      if (E = this.fillLast(y), E === void 0)
        return "";
      x = this.lastNeed, this.lastNeed = 0;
    } else
      x = 0;
    return x < y.length ? E ? E + this.text(y, x) : this.text(y, x) : E || "";
  }, i.prototype.end = h, i.prototype.text = u, i.prototype.fillLast = function(y) {
    if (this.lastNeed <= y.length)
      return y.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal);
    y.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, y.length), this.lastNeed -= y.length;
  };
  function s(y) {
    return y <= 127 ? 0 : y >> 5 === 6 ? 2 : y >> 4 === 14 ? 3 : y >> 3 === 30 ? 4 : y >> 6 === 2 ? -1 : -2;
  }
  function o(y, E, x) {
    var O = E.length - 1;
    if (O < x)
      return 0;
    var M = s(E[O]);
    return M >= 0 ? (M > 0 && (y.lastNeed = M - 1), M) : --O < x || M === -2 ? 0 : (M = s(E[O]), M >= 0 ? (M > 0 && (y.lastNeed = M - 2), M) : --O < x || M === -2 ? 0 : (M = s(E[O]), M >= 0 ? (M > 0 && (M === 2 ? M = 0 : y.lastNeed = M - 3), M) : 0));
  }
  function a(y, E, x) {
    if ((E[0] & 192) !== 128)
      return y.lastNeed = 0, "�";
    if (y.lastNeed > 1 && E.length > 1) {
      if ((E[1] & 192) !== 128)
        return y.lastNeed = 1, "�";
      if (y.lastNeed > 2 && E.length > 2 && (E[2] & 192) !== 128)
        return y.lastNeed = 2, "�";
    }
  }
  function c(y) {
    var E = this.lastTotal - this.lastNeed, x = a(this, y);
    if (x !== void 0)
      return x;
    if (this.lastNeed <= y.length)
      return y.copy(this.lastChar, E, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal);
    y.copy(this.lastChar, E, 0, y.length), this.lastNeed -= y.length;
  }
  function u(y, E) {
    var x = o(this, y, E);
    if (!this.lastNeed)
      return y.toString("utf8", E);
    this.lastTotal = x;
    var O = y.length - (x - this.lastNeed);
    return y.copy(this.lastChar, 0, O), y.toString("utf8", E, O);
  }
  function h(y) {
    var E = y && y.length ? this.write(y) : "";
    return this.lastNeed ? E + "�" : E;
  }
  function d(y, E) {
    if ((y.length - E) % 2 === 0) {
      var x = y.toString("utf16le", E);
      if (x) {
        var O = x.charCodeAt(x.length - 1);
        if (O >= 55296 && O <= 56319)
          return this.lastNeed = 2, this.lastTotal = 4, this.lastChar[0] = y[y.length - 2], this.lastChar[1] = y[y.length - 1], x.slice(0, -1);
      }
      return x;
    }
    return this.lastNeed = 1, this.lastTotal = 2, this.lastChar[0] = y[y.length - 1], y.toString("utf16le", E, y.length - 1);
  }
  function p(y) {
    var E = y && y.length ? this.write(y) : "";
    if (this.lastNeed) {
      var x = this.lastTotal - this.lastNeed;
      return E + this.lastChar.toString("utf16le", 0, x);
    }
    return E;
  }
  function v(y, E) {
    var x = (y.length - E) % 3;
    return x === 0 ? y.toString("base64", E) : (this.lastNeed = 3 - x, this.lastTotal = 3, x === 1 ? this.lastChar[0] = y[y.length - 1] : (this.lastChar[0] = y[y.length - 2], this.lastChar[1] = y[y.length - 1]), y.toString("base64", E, y.length - x));
  }
  function _(y) {
    var E = y && y.length ? this.write(y) : "";
    return this.lastNeed ? E + this.lastChar.toString("base64", 0, 3 - this.lastNeed) : E;
  }
  function A(y) {
    return y.toString(this.encoding);
  }
  function R(y) {
    return y && y.length ? this.write(y) : "";
  }
  return xa;
}
var xl = Gr.codes.ERR_STREAM_PREMATURE_CLOSE;
function P1(t) {
  var e = !1;
  return function() {
    if (!e) {
      e = !0;
      for (var r = arguments.length, n = new Array(r), i = 0; i < r; i++)
        n[i] = arguments[i];
      t.apply(this, n);
    }
  };
}
function B1() {
}
function $1(t) {
  return t.setHeader && typeof t.abort == "function";
}
function Jh(t, e, r) {
  if (typeof e == "function")
    return Jh(t, null, e);
  e || (e = {}), r = P1(r || B1);
  var n = e.readable || e.readable !== !1 && t.readable, i = e.writable || e.writable !== !1 && t.writable, s = function() {
    t.writable || a();
  }, o = t._writableState && t._writableState.finished, a = function() {
    i = !1, o = !0, n || r.call(t);
  }, c = t._readableState && t._readableState.endEmitted, u = function() {
    n = !1, c = !0, i || r.call(t);
  }, h = function(_) {
    r.call(t, _);
  }, d = function() {
    var _;
    if (n && !c)
      return (!t._readableState || !t._readableState.ended) && (_ = new xl()), r.call(t, _);
    if (i && !o)
      return (!t._writableState || !t._writableState.ended) && (_ = new xl()), r.call(t, _);
  }, p = function() {
    t.req.on("finish", a);
  };
  return $1(t) ? (t.on("complete", a), t.on("abort", d), t.req ? p() : t.on("request", p)) : i && !t._writableState && (t.on("end", s), t.on("close", s)), t.on("end", u), t.on("finish", a), e.error !== !1 && t.on("error", h), t.on("close", d), function() {
    t.removeListener("complete", a), t.removeListener("abort", d), t.removeListener("request", p), t.req && t.req.removeListener("finish", a), t.removeListener("end", s), t.removeListener("close", s), t.removeListener("finish", a), t.removeListener("end", u), t.removeListener("error", h), t.removeListener("close", d);
  };
}
var Fc = Jh, Ca, Cl;
function D1() {
  if (Cl)
    return Ca;
  Cl = 1;
  var t;
  function e(x, O, M) {
    return O = r(O), O in x ? Object.defineProperty(x, O, { value: M, enumerable: !0, configurable: !0, writable: !0 }) : x[O] = M, x;
  }
  function r(x) {
    var O = n(x, "string");
    return typeof O == "symbol" ? O : String(O);
  }
  function n(x, O) {
    if (typeof x != "object" || x === null)
      return x;
    var M = x[Symbol.toPrimitive];
    if (M !== void 0) {
      var D = M.call(x, O || "default");
      if (typeof D != "object")
        return D;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (O === "string" ? String : Number)(x);
  }
  var i = Fc, s = Symbol("lastResolve"), o = Symbol("lastReject"), a = Symbol("error"), c = Symbol("ended"), u = Symbol("lastPromise"), h = Symbol("handlePromise"), d = Symbol("stream");
  function p(x, O) {
    return {
      value: x,
      done: O
    };
  }
  function v(x) {
    var O = x[s];
    if (O !== null) {
      var M = x[d].read();
      M !== null && (x[u] = null, x[s] = null, x[o] = null, O(p(M, !1)));
    }
  }
  function _(x) {
    process.nextTick(v, x);
  }
  function A(x, O) {
    return function(M, D) {
      x.then(function() {
        if (O[c]) {
          M(p(void 0, !0));
          return;
        }
        O[h](M, D);
      }, D);
    };
  }
  var R = Object.getPrototypeOf(function() {
  }), y = Object.setPrototypeOf((t = {
    get stream() {
      return this[d];
    },
    next: function() {
      var O = this, M = this[a];
      if (M !== null)
        return Promise.reject(M);
      if (this[c])
        return Promise.resolve(p(void 0, !0));
      if (this[d].destroyed)
        return new Promise(function(F, X) {
          process.nextTick(function() {
            O[a] ? X(O[a]) : F(p(void 0, !0));
          });
        });
      var D = this[u], J;
      if (D)
        J = new Promise(A(D, this));
      else {
        var H = this[d].read();
        if (H !== null)
          return Promise.resolve(p(H, !1));
        J = new Promise(this[h]);
      }
      return this[u] = J, J;
    }
  }, e(t, Symbol.asyncIterator, function() {
    return this;
  }), e(t, "return", function() {
    var O = this;
    return new Promise(function(M, D) {
      O[d].destroy(null, function(J) {
        if (J) {
          D(J);
          return;
        }
        M(p(void 0, !0));
      });
    });
  }), t), R), E = function(O) {
    var M, D = Object.create(y, (M = {}, e(M, d, {
      value: O,
      writable: !0
    }), e(M, s, {
      value: null,
      writable: !0
    }), e(M, o, {
      value: null,
      writable: !0
    }), e(M, a, {
      value: null,
      writable: !0
    }), e(M, c, {
      value: O._readableState.endEmitted,
      writable: !0
    }), e(M, h, {
      value: function(H, F) {
        var X = D[d].read();
        X ? (D[u] = null, D[s] = null, D[o] = null, H(p(X, !1))) : (D[s] = H, D[o] = F);
      },
      writable: !0
    }), M));
    return D[u] = null, i(O, function(J) {
      if (J && J.code !== "ERR_STREAM_PREMATURE_CLOSE") {
        var H = D[o];
        H !== null && (D[u] = null, D[s] = null, D[o] = null, H(J)), D[a] = J;
        return;
      }
      var F = D[s];
      F !== null && (D[u] = null, D[s] = null, D[o] = null, F(p(void 0, !0))), D[c] = !0;
    }), O.on("readable", _.bind(null, D)), D;
  };
  return Ca = E, Ca;
}
var Ia, Il;
function F1() {
  return Il || (Il = 1, Ia = function() {
    throw new Error("Readable.from is not available in the browser");
  }), Ia;
}
var Ra, Rl;
function Qh() {
  if (Rl)
    return Ra;
  Rl = 1, Ra = F;
  var t;
  F.ReadableState = H, xc.EventEmitter;
  var e = function(w, N) {
    return w.listeners(N).length;
  }, r = Vh, n = di.Buffer, i = (typeof G < "u" ? G : typeof window < "u" ? window : typeof self < "u" ? self : {}).Uint8Array || function() {
  };
  function s(m) {
    return n.from(m);
  }
  function o(m) {
    return n.isBuffer(m) || m instanceof i;
  }
  var a = Cc, c;
  a && a.debuglog ? c = a.debuglog("stream") : c = function() {
  };
  var u = E1(), h = Hh, d = qh, p = d.getHighWaterMark, v = Gr.codes, _ = v.ERR_INVALID_ARG_TYPE, A = v.ERR_STREAM_PUSH_AFTER_EOF, R = v.ERR_METHOD_NOT_IMPLEMENTED, y = v.ERR_STREAM_UNSHIFT_AFTER_END_EVENT, E, x, O;
  Ot(F, r);
  var M = h.errorOrDestroy, D = ["error", "close", "destroy", "pause", "resume"];
  function J(m, w, N) {
    if (typeof m.prependListener == "function")
      return m.prependListener(w, N);
    !m._events || !m._events[w] ? m.on(w, N) : Array.isArray(m._events[w]) ? m._events[w].unshift(N) : m._events[w] = [N, m._events[w]];
  }
  function H(m, w, N) {
    t = t || wn(), m = m || {}, typeof N != "boolean" && (N = w instanceof t), this.objectMode = !!m.objectMode, N && (this.objectMode = this.objectMode || !!m.readableObjectMode), this.highWaterMark = p(this, m, "readableHighWaterMark", N), this.buffer = new u(), this.length = 0, this.pipes = null, this.pipesCount = 0, this.flowing = null, this.ended = !1, this.endEmitted = !1, this.reading = !1, this.sync = !0, this.needReadable = !1, this.emittedReadable = !1, this.readableListening = !1, this.resumeScheduled = !1, this.paused = !0, this.emitClose = m.emitClose !== !1, this.autoDestroy = !!m.autoDestroy, this.destroyed = !1, this.defaultEncoding = m.defaultEncoding || "utf8", this.awaitDrain = 0, this.readingMore = !1, this.decoder = null, this.encoding = null, m.encoding && (E || (E = Sl().StringDecoder), this.decoder = new E(m.encoding), this.encoding = m.encoding);
  }
  function F(m) {
    if (t = t || wn(), !(this instanceof F))
      return new F(m);
    var w = this instanceof t;
    this._readableState = new H(m, this, w), this.readable = !0, m && (typeof m.read == "function" && (this._read = m.read), typeof m.destroy == "function" && (this._destroy = m.destroy)), r.call(this);
  }
  Object.defineProperty(F.prototype, "destroyed", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: !1,
    get: function() {
      return this._readableState === void 0 ? !1 : this._readableState.destroyed;
    },
    set: function(w) {
      this._readableState && (this._readableState.destroyed = w);
    }
  }), F.prototype.destroy = h.destroy, F.prototype._undestroy = h.undestroy, F.prototype._destroy = function(m, w) {
    w(m);
  }, F.prototype.push = function(m, w) {
    var N = this._readableState, j;
    return N.objectMode ? j = !0 : typeof m == "string" && (w = w || N.defaultEncoding, w !== N.encoding && (m = n.from(m, w), w = ""), j = !0), X(this, m, w, !1, j);
  }, F.prototype.unshift = function(m) {
    return X(this, m, null, !0, !1);
  };
  function X(m, w, N, j, Ee) {
    c("readableAddChunk", w);
    var ae = m._readableState;
    if (w === null)
      ae.reading = !1, W(m, ae);
    else {
      var pe;
      if (Ee || (pe = re(ae, w)), pe)
        M(m, pe);
      else if (ae.objectMode || w && w.length > 0)
        if (typeof w != "string" && !ae.objectMode && Object.getPrototypeOf(w) !== n.prototype && (w = s(w)), j)
          ae.endEmitted ? M(m, new y()) : de(m, ae, w, !0);
        else if (ae.ended)
          M(m, new A());
        else {
          if (ae.destroyed)
            return !1;
          ae.reading = !1, ae.decoder && !N ? (w = ae.decoder.write(w), ae.objectMode || w.length !== 0 ? de(m, ae, w, !1) : Q(m, ae)) : de(m, ae, w, !1);
        }
      else
        j || (ae.reading = !1, Q(m, ae));
    }
    return !ae.ended && (ae.length < ae.highWaterMark || ae.length === 0);
  }
  function de(m, w, N, j) {
    w.flowing && w.length === 0 && !w.sync ? (w.awaitDrain = 0, m.emit("data", N)) : (w.length += w.objectMode ? 1 : N.length, j ? w.buffer.unshift(N) : w.buffer.push(N), w.needReadable && z(m)), Q(m, w);
  }
  function re(m, w) {
    var N;
    return !o(w) && typeof w != "string" && w !== void 0 && !m.objectMode && (N = new _("chunk", ["string", "Buffer", "Uint8Array"], w)), N;
  }
  F.prototype.isPaused = function() {
    return this._readableState.flowing === !1;
  }, F.prototype.setEncoding = function(m) {
    E || (E = Sl().StringDecoder);
    var w = new E(m);
    this._readableState.decoder = w, this._readableState.encoding = this._readableState.decoder.encoding;
    for (var N = this._readableState.buffer.head, j = ""; N !== null; )
      j += w.write(N.data), N = N.next;
    return this._readableState.buffer.clear(), j !== "" && this._readableState.buffer.push(j), this._readableState.length = j.length, this;
  };
  var P = 1073741824;
  function B(m) {
    return m >= P ? m = P : (m--, m |= m >>> 1, m |= m >>> 2, m |= m >>> 4, m |= m >>> 8, m |= m >>> 16, m++), m;
  }
  function U(m, w) {
    return m <= 0 || w.length === 0 && w.ended ? 0 : w.objectMode ? 1 : m !== m ? w.flowing && w.length ? w.buffer.head.data.length : w.length : (m > w.highWaterMark && (w.highWaterMark = B(m)), m <= w.length ? m : w.ended ? w.length : (w.needReadable = !0, 0));
  }
  F.prototype.read = function(m) {
    c("read", m), m = parseInt(m, 10);
    var w = this._readableState, N = m;
    if (m !== 0 && (w.emittedReadable = !1), m === 0 && w.needReadable && ((w.highWaterMark !== 0 ? w.length >= w.highWaterMark : w.length > 0) || w.ended))
      return c("read: emitReadable", w.length, w.ended), w.length === 0 && w.ended ? $(this) : z(this), null;
    if (m = U(m, w), m === 0 && w.ended)
      return w.length === 0 && $(this), null;
    var j = w.needReadable;
    c("need readable", j), (w.length === 0 || w.length - m < w.highWaterMark) && (j = !0, c("length less than watermark", j)), w.ended || w.reading ? (j = !1, c("reading or ended", j)) : j && (c("do read"), w.reading = !0, w.sync = !0, w.length === 0 && (w.needReadable = !0), this._read(w.highWaterMark), w.sync = !1, w.reading || (m = U(N, w)));
    var Ee;
    return m > 0 ? Ee = I(m, w) : Ee = null, Ee === null ? (w.needReadable = w.length <= w.highWaterMark, m = 0) : (w.length -= m, w.awaitDrain = 0), w.length === 0 && (w.ended || (w.needReadable = !0), N !== m && w.ended && $(this)), Ee !== null && this.emit("data", Ee), Ee;
  };
  function W(m, w) {
    if (c("onEofChunk"), !w.ended) {
      if (w.decoder) {
        var N = w.decoder.end();
        N && N.length && (w.buffer.push(N), w.length += w.objectMode ? 1 : N.length);
      }
      w.ended = !0, w.sync ? z(m) : (w.needReadable = !1, w.emittedReadable || (w.emittedReadable = !0, V(m)));
    }
  }
  function z(m) {
    var w = m._readableState;
    c("emitReadable", w.needReadable, w.emittedReadable), w.needReadable = !1, w.emittedReadable || (c("emitReadable", w.flowing), w.emittedReadable = !0, process.nextTick(V, m));
  }
  function V(m) {
    var w = m._readableState;
    c("emitReadable_", w.destroyed, w.length, w.ended), !w.destroyed && (w.length || w.ended) && (m.emit("readable"), w.emittedReadable = !1), w.needReadable = !w.flowing && !w.ended && w.length <= w.highWaterMark, C(m);
  }
  function Q(m, w) {
    w.readingMore || (w.readingMore = !0, process.nextTick(ie, m, w));
  }
  function ie(m, w) {
    for (; !w.reading && !w.ended && (w.length < w.highWaterMark || w.flowing && w.length === 0); ) {
      var N = w.length;
      if (c("maybeReadMore read 0"), m.read(0), N === w.length)
        break;
    }
    w.readingMore = !1;
  }
  F.prototype._read = function(m) {
    M(this, new R("_read()"));
  }, F.prototype.pipe = function(m, w) {
    var N = this, j = this._readableState;
    switch (j.pipesCount) {
      case 0:
        j.pipes = m;
        break;
      case 1:
        j.pipes = [j.pipes, m];
        break;
      default:
        j.pipes.push(m);
        break;
    }
    j.pipesCount += 1, c("pipe count=%d opts=%j", j.pipesCount, w);
    var Ee = (!w || w.end !== !1) && m !== process.stdout && m !== process.stderr, ae = Ee ? xt : Pt;
    j.endEmitted ? process.nextTick(ae) : N.once("end", ae), m.on("unpipe", pe);
    function pe(g, l) {
      c("onunpipe"), g === N && l && l.hasUnpiped === !1 && (l.hasUnpiped = !0, Yt());
    }
    function xt() {
      c("onend"), m.end();
    }
    var Zt = q(N);
    m.on("drain", Zt);
    var or = !1;
    function Yt() {
      c("cleanup"), m.removeListener("close", ar), m.removeListener("finish", et), m.removeListener("drain", Zt), m.removeListener("error", Lt), m.removeListener("unpipe", pe), N.removeListener("end", xt), N.removeListener("end", Pt), N.removeListener("data", Je), or = !0, j.awaitDrain && (!m._writableState || m._writableState.needDrain) && Zt();
    }
    N.on("data", Je);
    function Je(g) {
      c("ondata");
      var l = m.write(g);
      c("dest.write", l), l === !1 && ((j.pipesCount === 1 && j.pipes === m || j.pipesCount > 1 && oe(j.pipes, m) !== -1) && !or && (c("false write response, pause", j.awaitDrain), j.awaitDrain++), N.pause());
    }
    function Lt(g) {
      c("onerror", g), Pt(), m.removeListener("error", Lt), e(m, "error") === 0 && M(m, g);
    }
    J(m, "error", Lt);
    function ar() {
      m.removeListener("finish", et), Pt();
    }
    m.once("close", ar);
    function et() {
      c("onfinish"), m.removeListener("close", ar), Pt();
    }
    m.once("finish", et);
    function Pt() {
      c("unpipe"), N.unpipe(m);
    }
    return m.emit("pipe", N), j.flowing || (c("pipe resume"), N.resume()), m;
  };
  function q(m) {
    return function() {
      var N = m._readableState;
      c("pipeOnDrain", N.awaitDrain), N.awaitDrain && N.awaitDrain--, N.awaitDrain === 0 && e(m, "data") && (N.flowing = !0, C(m));
    };
  }
  F.prototype.unpipe = function(m) {
    var w = this._readableState, N = {
      hasUnpiped: !1
    };
    if (w.pipesCount === 0)
      return this;
    if (w.pipesCount === 1)
      return m && m !== w.pipes ? this : (m || (m = w.pipes), w.pipes = null, w.pipesCount = 0, w.flowing = !1, m && m.emit("unpipe", this, N), this);
    if (!m) {
      var j = w.pipes, Ee = w.pipesCount;
      w.pipes = null, w.pipesCount = 0, w.flowing = !1;
      for (var ae = 0; ae < Ee; ae++)
        j[ae].emit("unpipe", this, {
          hasUnpiped: !1
        });
      return this;
    }
    var pe = oe(w.pipes, m);
    return pe === -1 ? this : (w.pipes.splice(pe, 1), w.pipesCount -= 1, w.pipesCount === 1 && (w.pipes = w.pipes[0]), m.emit("unpipe", this, N), this);
  }, F.prototype.on = function(m, w) {
    var N = r.prototype.on.call(this, m, w), j = this._readableState;
    return m === "data" ? (j.readableListening = this.listenerCount("readable") > 0, j.flowing !== !1 && this.resume()) : m === "readable" && !j.endEmitted && !j.readableListening && (j.readableListening = j.needReadable = !0, j.flowing = !1, j.emittedReadable = !1, c("on readable", j.length, j.reading), j.length ? z(this) : j.reading || process.nextTick(ve, this)), N;
  }, F.prototype.addListener = F.prototype.on, F.prototype.removeListener = function(m, w) {
    var N = r.prototype.removeListener.call(this, m, w);
    return m === "readable" && process.nextTick(te, this), N;
  }, F.prototype.removeAllListeners = function(m) {
    var w = r.prototype.removeAllListeners.apply(this, arguments);
    return (m === "readable" || m === void 0) && process.nextTick(te, this), w;
  };
  function te(m) {
    var w = m._readableState;
    w.readableListening = m.listenerCount("readable") > 0, w.resumeScheduled && !w.paused ? w.flowing = !0 : m.listenerCount("data") > 0 && m.resume();
  }
  function ve(m) {
    c("readable nexttick read 0"), m.read(0);
  }
  F.prototype.resume = function() {
    var m = this._readableState;
    return m.flowing || (c("resume"), m.flowing = !m.readableListening, be(this, m)), m.paused = !1, this;
  };
  function be(m, w) {
    w.resumeScheduled || (w.resumeScheduled = !0, process.nextTick(De, m, w));
  }
  function De(m, w) {
    c("resume", w.reading), w.reading || m.read(0), w.resumeScheduled = !1, m.emit("resume"), C(m), w.flowing && !w.reading && m.read(0);
  }
  F.prototype.pause = function() {
    return c("call pause flowing=%j", this._readableState.flowing), this._readableState.flowing !== !1 && (c("pause"), this._readableState.flowing = !1, this.emit("pause")), this._readableState.paused = !0, this;
  };
  function C(m) {
    var w = m._readableState;
    for (c("flow", w.flowing); w.flowing && m.read() !== null; )
      ;
  }
  F.prototype.wrap = function(m) {
    var w = this, N = this._readableState, j = !1;
    m.on("end", function() {
      if (c("wrapped end"), N.decoder && !N.ended) {
        var pe = N.decoder.end();
        pe && pe.length && w.push(pe);
      }
      w.push(null);
    }), m.on("data", function(pe) {
      if (c("wrapped data"), N.decoder && (pe = N.decoder.write(pe)), !(N.objectMode && pe == null) && !(!N.objectMode && (!pe || !pe.length))) {
        var xt = w.push(pe);
        xt || (j = !0, m.pause());
      }
    });
    for (var Ee in m)
      this[Ee] === void 0 && typeof m[Ee] == "function" && (this[Ee] = function(xt) {
        return function() {
          return m[xt].apply(m, arguments);
        };
      }(Ee));
    for (var ae = 0; ae < D.length; ae++)
      m.on(D[ae], this.emit.bind(this, D[ae]));
    return this._read = function(pe) {
      c("wrapped _read", pe), j && (j = !1, m.resume());
    }, this;
  }, typeof Symbol == "function" && (F.prototype[Symbol.asyncIterator] = function() {
    return x === void 0 && (x = D1()), x(this);
  }), Object.defineProperty(F.prototype, "readableHighWaterMark", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: !1,
    get: function() {
      return this._readableState.highWaterMark;
    }
  }), Object.defineProperty(F.prototype, "readableBuffer", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: !1,
    get: function() {
      return this._readableState && this._readableState.buffer;
    }
  }), Object.defineProperty(F.prototype, "readableFlowing", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: !1,
    get: function() {
      return this._readableState.flowing;
    },
    set: function(w) {
      this._readableState && (this._readableState.flowing = w);
    }
  }), F._fromList = I, Object.defineProperty(F.prototype, "readableLength", {
    // making it explicit this property is not enumerable
    // because otherwise some prototype manipulation in
    // userland will fail
    enumerable: !1,
    get: function() {
      return this._readableState.length;
    }
  });
  function I(m, w) {
    if (w.length === 0)
      return null;
    var N;
    return w.objectMode ? N = w.buffer.shift() : !m || m >= w.length ? (w.decoder ? N = w.buffer.join("") : w.buffer.length === 1 ? N = w.buffer.first() : N = w.buffer.concat(w.length), w.buffer.clear()) : N = w.buffer.consume(m, w.decoder), N;
  }
  function $(m) {
    var w = m._readableState;
    c("endReadable", w.endEmitted), w.endEmitted || (w.ended = !0, process.nextTick(Y, w, m));
  }
  function Y(m, w) {
    if (c("endReadableNT", m.endEmitted, m.length), !m.endEmitted && m.length === 0 && (m.endEmitted = !0, w.readable = !1, w.emit("end"), m.autoDestroy)) {
      var N = w._writableState;
      (!N || N.autoDestroy && N.finished) && w.destroy();
    }
  }
  typeof Symbol == "function" && (F.from = function(m, w) {
    return O === void 0 && (O = F1()), O(F, m, w);
  });
  function oe(m, w) {
    for (var N = 0, j = m.length; N < j; N++)
      if (m[N] === w)
        return N;
    return -1;
  }
  return Ra;
}
var Zh = nr, Ts = Gr.codes, j1 = Ts.ERR_METHOD_NOT_IMPLEMENTED, U1 = Ts.ERR_MULTIPLE_CALLBACK, W1 = Ts.ERR_TRANSFORM_ALREADY_TRANSFORMING, V1 = Ts.ERR_TRANSFORM_WITH_LENGTH_0, Ms = wn();
Ot(nr, Ms);
function H1(t, e) {
  var r = this._transformState;
  r.transforming = !1;
  var n = r.writecb;
  if (n === null)
    return this.emit("error", new U1());
  r.writechunk = null, r.writecb = null, e != null && this.push(e), n(t);
  var i = this._readableState;
  i.reading = !1, (i.needReadable || i.length < i.highWaterMark) && this._read(i.highWaterMark);
}
function nr(t) {
  if (!(this instanceof nr))
    return new nr(t);
  Ms.call(this, t), this._transformState = {
    afterTransform: H1.bind(this),
    needTransform: !1,
    transforming: !1,
    writecb: null,
    writechunk: null,
    writeencoding: null
  }, this._readableState.needReadable = !0, this._readableState.sync = !1, t && (typeof t.transform == "function" && (this._transform = t.transform), typeof t.flush == "function" && (this._flush = t.flush)), this.on("prefinish", z1);
}
function z1() {
  var t = this;
  typeof this._flush == "function" && !this._readableState.destroyed ? this._flush(function(e, r) {
    Al(t, e, r);
  }) : Al(this, null, null);
}
nr.prototype.push = function(t, e) {
  return this._transformState.needTransform = !1, Ms.prototype.push.call(this, t, e);
};
nr.prototype._transform = function(t, e, r) {
  r(new j1("_transform()"));
};
nr.prototype._write = function(t, e, r) {
  var n = this._transformState;
  if (n.writecb = r, n.writechunk = t, n.writeencoding = e, !n.transforming) {
    var i = this._readableState;
    (n.needTransform || i.needReadable || i.length < i.highWaterMark) && this._read(i.highWaterMark);
  }
};
nr.prototype._read = function(t) {
  var e = this._transformState;
  e.writechunk !== null && !e.transforming ? (e.transforming = !0, this._transform(e.writechunk, e.writeencoding, e.afterTransform)) : e.needTransform = !0;
};
nr.prototype._destroy = function(t, e) {
  Ms.prototype._destroy.call(this, t, function(r) {
    e(r);
  });
};
function Al(t, e, r) {
  if (e)
    return t.emit("error", e);
  if (r != null && t.push(r), t._writableState.length)
    throw new V1();
  if (t._transformState.transforming)
    throw new W1();
  return t.push(null);
}
var q1 = ai, Yh = Zh;
Ot(ai, Yh);
function ai(t) {
  if (!(this instanceof ai))
    return new ai(t);
  Yh.call(this, t);
}
ai.prototype._transform = function(t, e, r) {
  r(null, t);
};
var Aa;
function G1(t) {
  var e = !1;
  return function() {
    e || (e = !0, t.apply(void 0, arguments));
  };
}
var Kh = Gr.codes, J1 = Kh.ERR_MISSING_ARGS, Q1 = Kh.ERR_STREAM_DESTROYED;
function Tl(t) {
  if (t)
    throw t;
}
function Z1(t) {
  return t.setHeader && typeof t.abort == "function";
}
function Y1(t, e, r, n) {
  n = G1(n);
  var i = !1;
  t.on("close", function() {
    i = !0;
  }), Aa === void 0 && (Aa = Fc), Aa(t, {
    readable: e,
    writable: r
  }, function(o) {
    if (o)
      return n(o);
    i = !0, n();
  });
  var s = !1;
  return function(o) {
    if (!i && !s) {
      if (s = !0, Z1(t))
        return t.abort();
      if (typeof t.destroy == "function")
        return t.destroy();
      n(o || new Q1("pipe"));
    }
  };
}
function Ml(t) {
  t();
}
function K1(t, e) {
  return t.pipe(e);
}
function X1(t) {
  return !t.length || typeof t[t.length - 1] != "function" ? Tl : t.pop();
}
function em() {
  for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++)
    e[r] = arguments[r];
  var n = X1(e);
  if (Array.isArray(e[0]) && (e = e[0]), e.length < 2)
    throw new J1("streams");
  var i, s = e.map(function(o, a) {
    var c = a < e.length - 1, u = a > 0;
    return Y1(o, c, u, function(h) {
      i || (i = h), h && s.forEach(Ml), !c && (s.forEach(Ml), n(i));
    });
  });
  return e.reduce(K1);
}
var tm = em;
(function(t, e) {
  e = t.exports = Qh(), e.Stream = e, e.Readable = e, e.Writable = Gh(), e.Duplex = wn(), e.Transform = Zh, e.PassThrough = q1, e.finished = Fc, e.pipeline = tm;
})(lc, lc.exports);
var Xh = lc.exports;
const { Transform: rm } = Xh;
var nm = (t) => class ed extends rm {
  constructor(r, n, i, s, o) {
    super(o), this._rate = r, this._capacity = n, this._delimitedSuffix = i, this._hashBitLength = s, this._options = o, this._state = new t(), this._state.initialize(r, n), this._finalized = !1;
  }
  _transform(r, n, i) {
    let s = null;
    try {
      this.update(r, n);
    } catch (o) {
      s = o;
    }
    i(s);
  }
  _flush(r) {
    let n = null;
    try {
      this.push(this.digest());
    } catch (i) {
      n = i;
    }
    r(n);
  }
  update(r, n) {
    if (!Buffer.isBuffer(r) && typeof r != "string")
      throw new TypeError("Data must be a string or a buffer");
    if (this._finalized)
      throw new Error("Digest already called");
    return Buffer.isBuffer(r) || (r = Buffer.from(r, n)), this._state.absorb(r), this;
  }
  digest(r) {
    if (this._finalized)
      throw new Error("Digest already called");
    this._finalized = !0, this._delimitedSuffix && this._state.absorbLastFewBits(this._delimitedSuffix);
    let n = this._state.squeeze(this._hashBitLength / 8);
    return r !== void 0 && (n = n.toString(r)), this._resetState(), n;
  }
  // remove result from memory
  _resetState() {
    return this._state.initialize(this._rate, this._capacity), this;
  }
  // because sometimes we need hash right now and little later
  _clone() {
    const r = new ed(this._rate, this._capacity, this._delimitedSuffix, this._hashBitLength, this._options);
    return this._state.copy(r._state), r._finalized = this._finalized, r;
  }
};
const { Transform: im } = Xh;
var sm = (t) => class td extends im {
  constructor(r, n, i, s) {
    super(s), this._rate = r, this._capacity = n, this._delimitedSuffix = i, this._options = s, this._state = new t(), this._state.initialize(r, n), this._finalized = !1;
  }
  _transform(r, n, i) {
    let s = null;
    try {
      this.update(r, n);
    } catch (o) {
      s = o;
    }
    i(s);
  }
  _flush() {
  }
  _read(r) {
    this.push(this.squeeze(r));
  }
  update(r, n) {
    if (!Buffer.isBuffer(r) && typeof r != "string")
      throw new TypeError("Data must be a string or a buffer");
    if (this._finalized)
      throw new Error("Squeeze already called");
    return Buffer.isBuffer(r) || (r = Buffer.from(r, n)), this._state.absorb(r), this;
  }
  squeeze(r, n) {
    this._finalized || (this._finalized = !0, this._state.absorbLastFewBits(this._delimitedSuffix));
    let i = this._state.squeeze(r);
    return n !== void 0 && (i = i.toString(n)), i;
  }
  _resetState() {
    return this._state.initialize(this._rate, this._capacity), this;
  }
  _clone() {
    const r = new td(this._rate, this._capacity, this._delimitedSuffix, this._options);
    return this._state.copy(r._state), r._finalized = this._finalized, r;
  }
};
const om = nm, am = sm;
var cm = function(t) {
  const e = om(t), r = am(t);
  return function(n, i) {
    switch (typeof n == "string" ? n.toLowerCase() : n) {
      case "keccak224":
        return new e(1152, 448, null, 224, i);
      case "keccak256":
        return new e(1088, 512, null, 256, i);
      case "keccak384":
        return new e(832, 768, null, 384, i);
      case "keccak512":
        return new e(576, 1024, null, 512, i);
      case "sha3-224":
        return new e(1152, 448, 6, 224, i);
      case "sha3-256":
        return new e(1088, 512, 6, 256, i);
      case "sha3-384":
        return new e(832, 768, 6, 384, i);
      case "sha3-512":
        return new e(576, 1024, 6, 512, i);
      case "shake128":
        return new r(1344, 256, 31, i);
      case "shake256":
        return new r(1088, 512, 31, i);
      default:
        throw new Error("Invald algorithm: " + n);
    }
  };
}, rd = {};
const Ol = [1, 0, 32898, 0, 32906, 2147483648, 2147516416, 2147483648, 32907, 0, 2147483649, 0, 2147516545, 2147483648, 32777, 2147483648, 138, 0, 136, 0, 2147516425, 0, 2147483658, 0, 2147516555, 0, 139, 2147483648, 32905, 2147483648, 32771, 2147483648, 32770, 2147483648, 128, 2147483648, 32778, 0, 2147483658, 2147483648, 2147516545, 2147483648, 32896, 2147483648, 2147483649, 0, 2147516424, 2147483648];
rd.p1600 = function(t) {
  for (let e = 0; e < 24; ++e) {
    const r = t[0] ^ t[10] ^ t[20] ^ t[30] ^ t[40], n = t[1] ^ t[11] ^ t[21] ^ t[31] ^ t[41], i = t[2] ^ t[12] ^ t[22] ^ t[32] ^ t[42], s = t[3] ^ t[13] ^ t[23] ^ t[33] ^ t[43], o = t[4] ^ t[14] ^ t[24] ^ t[34] ^ t[44], a = t[5] ^ t[15] ^ t[25] ^ t[35] ^ t[45], c = t[6] ^ t[16] ^ t[26] ^ t[36] ^ t[46], u = t[7] ^ t[17] ^ t[27] ^ t[37] ^ t[47], h = t[8] ^ t[18] ^ t[28] ^ t[38] ^ t[48], d = t[9] ^ t[19] ^ t[29] ^ t[39] ^ t[49];
    let p = h ^ (i << 1 | s >>> 31), v = d ^ (s << 1 | i >>> 31);
    const _ = t[0] ^ p, A = t[1] ^ v, R = t[10] ^ p, y = t[11] ^ v, E = t[20] ^ p, x = t[21] ^ v, O = t[30] ^ p, M = t[31] ^ v, D = t[40] ^ p, J = t[41] ^ v;
    p = r ^ (o << 1 | a >>> 31), v = n ^ (a << 1 | o >>> 31);
    const H = t[2] ^ p, F = t[3] ^ v, X = t[12] ^ p, de = t[13] ^ v, re = t[22] ^ p, P = t[23] ^ v, B = t[32] ^ p, U = t[33] ^ v, W = t[42] ^ p, z = t[43] ^ v;
    p = i ^ (c << 1 | u >>> 31), v = s ^ (u << 1 | c >>> 31);
    const V = t[4] ^ p, Q = t[5] ^ v, ie = t[14] ^ p, q = t[15] ^ v, te = t[24] ^ p, ve = t[25] ^ v, be = t[34] ^ p, De = t[35] ^ v, C = t[44] ^ p, I = t[45] ^ v;
    p = o ^ (h << 1 | d >>> 31), v = a ^ (d << 1 | h >>> 31);
    const $ = t[6] ^ p, Y = t[7] ^ v, oe = t[16] ^ p, m = t[17] ^ v, w = t[26] ^ p, N = t[27] ^ v, j = t[36] ^ p, Ee = t[37] ^ v, ae = t[46] ^ p, pe = t[47] ^ v;
    p = c ^ (r << 1 | n >>> 31), v = u ^ (n << 1 | r >>> 31);
    const xt = t[8] ^ p, Zt = t[9] ^ v, or = t[18] ^ p, Yt = t[19] ^ v, Je = t[28] ^ p, Lt = t[29] ^ v, ar = t[38] ^ p, et = t[39] ^ v, Pt = t[48] ^ p, g = t[49] ^ v, l = _, f = A, b = y << 4 | R >>> 28, S = R << 4 | y >>> 28, T = E << 3 | x >>> 29, k = x << 3 | E >>> 29, se = M << 9 | O >>> 23, xe = O << 9 | M >>> 23, _e = D << 18 | J >>> 14, Ce = J << 18 | D >>> 14, me = H << 1 | F >>> 31, Co = F << 1 | H >>> 31, Io = de << 12 | X >>> 20, Ro = X << 12 | de >>> 20, Ao = re << 10 | P >>> 22, To = P << 10 | re >>> 22, Mo = U << 13 | B >>> 19, Oo = B << 13 | U >>> 19, ko = W << 2 | z >>> 30, No = z << 2 | W >>> 30, Lo = Q << 30 | V >>> 2, Po = V << 30 | Q >>> 2, Bo = ie << 6 | q >>> 26, $o = q << 6 | ie >>> 26, Do = ve << 11 | te >>> 21, Fo = te << 11 | ve >>> 21, jo = be << 15 | De >>> 17, Uo = De << 15 | be >>> 17, Wo = I << 29 | C >>> 3, Vo = C << 29 | I >>> 3, Ho = $ << 28 | Y >>> 4, zo = Y << 28 | $ >>> 4, qo = m << 23 | oe >>> 9, Go = oe << 23 | m >>> 9, Jo = w << 25 | N >>> 7, Qo = N << 25 | w >>> 7, Zo = j << 21 | Ee >>> 11, Yo = Ee << 21 | j >>> 11, Ko = pe << 24 | ae >>> 8, Xo = ae << 24 | pe >>> 8, ea = xt << 27 | Zt >>> 5, ta = Zt << 27 | xt >>> 5, ra = or << 20 | Yt >>> 12, na = Yt << 20 | or >>> 12, ia = Lt << 7 | Je >>> 25, sa = Je << 7 | Lt >>> 25, oa = ar << 8 | et >>> 24, aa = et << 8 | ar >>> 24, ca = Pt << 14 | g >>> 18, ua = g << 14 | Pt >>> 18;
    t[0] = l ^ ~Io & Do, t[1] = f ^ ~Ro & Fo, t[10] = Ho ^ ~ra & T, t[11] = zo ^ ~na & k, t[20] = me ^ ~Bo & Jo, t[21] = Co ^ ~$o & Qo, t[30] = ea ^ ~b & Ao, t[31] = ta ^ ~S & To, t[40] = Lo ^ ~qo & ia, t[41] = Po ^ ~Go & sa, t[2] = Io ^ ~Do & Zo, t[3] = Ro ^ ~Fo & Yo, t[12] = ra ^ ~T & Mo, t[13] = na ^ ~k & Oo, t[22] = Bo ^ ~Jo & oa, t[23] = $o ^ ~Qo & aa, t[32] = b ^ ~Ao & jo, t[33] = S ^ ~To & Uo, t[42] = qo ^ ~ia & se, t[43] = Go ^ ~sa & xe, t[4] = Do ^ ~Zo & ca, t[5] = Fo ^ ~Yo & ua, t[14] = T ^ ~Mo & Wo, t[15] = k ^ ~Oo & Vo, t[24] = Jo ^ ~oa & _e, t[25] = Qo ^ ~aa & Ce, t[34] = Ao ^ ~jo & Ko, t[35] = To ^ ~Uo & Xo, t[44] = ia ^ ~se & ko, t[45] = sa ^ ~xe & No, t[6] = Zo ^ ~ca & l, t[7] = Yo ^ ~ua & f, t[16] = Mo ^ ~Wo & Ho, t[17] = Oo ^ ~Vo & zo, t[26] = oa ^ ~_e & me, t[27] = aa ^ ~Ce & Co, t[36] = jo ^ ~Ko & ea, t[37] = Uo ^ ~Xo & ta, t[46] = se ^ ~ko & Lo, t[47] = xe ^ ~No & Po, t[8] = ca ^ ~l & Io, t[9] = ua ^ ~f & Ro, t[18] = Wo ^ ~Ho & ra, t[19] = Vo ^ ~zo & na, t[28] = _e ^ ~me & Bo, t[29] = Ce ^ ~Co & $o, t[38] = Ko ^ ~ea & b, t[39] = Xo ^ ~ta & S, t[48] = ko ^ ~Lo & qo, t[49] = No ^ ~Po & Go, t[0] ^= Ol[e * 2], t[1] ^= Ol[e * 2 + 1];
  }
};
const cs = rd;
function Bn() {
  this.state = [
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
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
  ], this.blockSize = null, this.count = 0, this.squeezing = !1;
}
Bn.prototype.initialize = function(t, e) {
  for (let r = 0; r < 50; ++r)
    this.state[r] = 0;
  this.blockSize = t / 8, this.count = 0, this.squeezing = !1;
};
Bn.prototype.absorb = function(t) {
  for (let e = 0; e < t.length; ++e)
    this.state[~~(this.count / 4)] ^= t[e] << 8 * (this.count % 4), this.count += 1, this.count === this.blockSize && (cs.p1600(this.state), this.count = 0);
};
Bn.prototype.absorbLastFewBits = function(t) {
  this.state[~~(this.count / 4)] ^= t << 8 * (this.count % 4), t & 128 && this.count === this.blockSize - 1 && cs.p1600(this.state), this.state[~~((this.blockSize - 1) / 4)] ^= 128 << 8 * ((this.blockSize - 1) % 4), cs.p1600(this.state), this.count = 0, this.squeezing = !0;
};
Bn.prototype.squeeze = function(t) {
  this.squeezing || this.absorbLastFewBits(1);
  const e = Buffer.alloc(t);
  for (let r = 0; r < t; ++r)
    e[r] = this.state[~~(this.count / 4)] >>> 8 * (this.count % 4) & 255, this.count += 1, this.count === this.blockSize && (cs.p1600(this.state), this.count = 0);
  return e;
};
Bn.prototype.copy = function(t) {
  for (let e = 0; e < 50; ++e)
    t.state[e] = this.state[e];
  t.blockSize = this.blockSize, t.count = this.count, t.squeezing = this.squeezing;
};
var um = Bn, lm = cm(um);
const fm = lm, hm = ms;
function nd(t) {
  return Buffer.allocUnsafe(t).fill(0);
}
function id(t, e, r) {
  const n = nd(e);
  return t = Os(t), r ? t.length < e ? (t.copy(n), n) : t.slice(0, e) : t.length < e ? (t.copy(n, e - t.length), n) : t.slice(-e);
}
function dm(t, e) {
  return id(t, e, !0);
}
function Os(t) {
  if (!Buffer.isBuffer(t))
    if (Array.isArray(t))
      t = Buffer.from(t);
    else if (typeof t == "string")
      sd(t) ? t = Buffer.from(bm(od(t)), "hex") : t = Buffer.from(t);
    else if (typeof t == "number")
      t = intToBuffer(t);
    else if (t == null)
      t = Buffer.allocUnsafe(0);
    else if (hm.isBN(t))
      t = t.toArrayLike(Buffer);
    else if (t.toArray)
      t = Buffer.from(t.toArray());
    else
      throw new Error("invalid type");
  return t;
}
function pm(t) {
  return t = Os(t), "0x" + t.toString("hex");
}
function gm(t, e) {
  return t = Os(t), e || (e = 256), fm("keccak" + e).update(t).digest();
}
function bm(t) {
  return t.length % 2 ? "0" + t : t;
}
function sd(t) {
  return typeof t == "string" && t.match(/^0x[0-9A-Fa-f]*$/);
}
function od(t) {
  return typeof t == "string" && t.startsWith("0x") ? t.slice(2) : t;
}
var ad = {
  zeros: nd,
  setLength: id,
  setLengthRight: dm,
  isHexString: sd,
  stripHexPrefix: od,
  toBuffer: Os,
  bufferToHex: pm,
  keccak: gm
};
const Dr = ad, Nr = ms;
function cd(t) {
  return t.startsWith("int[") ? "int256" + t.slice(3) : t === "int" ? "int256" : t.startsWith("uint[") ? "uint256" + t.slice(4) : t === "uint" ? "uint256" : t.startsWith("fixed[") ? "fixed128x128" + t.slice(5) : t === "fixed" ? "fixed128x128" : t.startsWith("ufixed[") ? "ufixed128x128" + t.slice(6) : t === "ufixed" ? "ufixed128x128" : t;
}
function hn(t) {
  return parseInt(/^\D+(\d+)$/.exec(t)[1], 10);
}
function kl(t) {
  var e = /^\D+(\d+)x(\d+)$/.exec(t);
  return [parseInt(e[1], 10), parseInt(e[2], 10)];
}
function ud(t) {
  var e = t.match(/(.*)\[(.*?)\]$/);
  return e ? e[2] === "" ? "dynamic" : parseInt(e[2], 10) : null;
}
function Tr(t) {
  var e = typeof t;
  if (e === "string")
    return Dr.isHexString(t) ? new Nr(Dr.stripHexPrefix(t), 16) : new Nr(t, 10);
  if (e === "number")
    return new Nr(t);
  if (t.toArray)
    return t;
  throw new Error("Argument is not a number");
}
function jt(t, e) {
  var r, n, i, s;
  if (t === "address")
    return jt("uint160", Tr(e));
  if (t === "bool")
    return jt("uint8", e ? 1 : 0);
  if (t === "string")
    return jt("bytes", new Buffer(e, "utf8"));
  if (mm(t)) {
    if (typeof e.length > "u")
      throw new Error("Not an array?");
    if (r = ud(t), r !== "dynamic" && r !== 0 && e.length > r)
      throw new Error("Elements exceed array size: " + r);
    i = [], t = t.slice(0, t.lastIndexOf("[")), typeof e == "string" && (e = JSON.parse(e));
    for (s in e)
      i.push(jt(t, e[s]));
    if (r === "dynamic") {
      var o = jt("uint256", e.length);
      i.unshift(o);
    }
    return Buffer.concat(i);
  } else {
    if (t === "bytes")
      return e = new Buffer(e), i = Buffer.concat([jt("uint256", e.length), e]), e.length % 32 !== 0 && (i = Buffer.concat([i, Dr.zeros(32 - e.length % 32)])), i;
    if (t.startsWith("bytes")) {
      if (r = hn(t), r < 1 || r > 32)
        throw new Error("Invalid bytes<N> width: " + r);
      return Dr.setLengthRight(e, 32);
    } else if (t.startsWith("uint")) {
      if (r = hn(t), r % 8 || r < 8 || r > 256)
        throw new Error("Invalid uint<N> width: " + r);
      if (n = Tr(e), n.bitLength() > r)
        throw new Error("Supplied uint exceeds width: " + r + " vs " + n.bitLength());
      if (n < 0)
        throw new Error("Supplied uint is negative");
      return n.toArrayLike(Buffer, "be", 32);
    } else if (t.startsWith("int")) {
      if (r = hn(t), r % 8 || r < 8 || r > 256)
        throw new Error("Invalid int<N> width: " + r);
      if (n = Tr(e), n.bitLength() > r)
        throw new Error("Supplied int exceeds width: " + r + " vs " + n.bitLength());
      return n.toTwos(256).toArrayLike(Buffer, "be", 32);
    } else if (t.startsWith("ufixed")) {
      if (r = kl(t), n = Tr(e), n < 0)
        throw new Error("Supplied ufixed is negative");
      return jt("uint256", n.mul(new Nr(2).pow(new Nr(r[1]))));
    } else if (t.startsWith("fixed"))
      return r = kl(t), jt("int256", Tr(e).mul(new Nr(2).pow(new Nr(r[1]))));
  }
  throw new Error("Unsupported or invalid type: " + t);
}
function ym(t) {
  return t === "string" || t === "bytes" || ud(t) === "dynamic";
}
function mm(t) {
  return t.lastIndexOf("]") === t.length - 1;
}
function vm(t, e) {
  var r = [], n = [], i = 32 * t.length;
  for (var s in t) {
    var o = cd(t[s]), a = e[s], c = jt(o, a);
    ym(o) ? (r.push(jt("uint256", i)), n.push(c), i += c.length) : r.push(c);
  }
  return Buffer.concat(r.concat(n));
}
function ld(t, e) {
  if (t.length !== e.length)
    throw new Error("Number of types are not matching the values");
  for (var r, n, i = [], s = 0; s < t.length; s++) {
    var o = cd(t[s]), a = e[s];
    if (o === "bytes")
      i.push(a);
    else if (o === "string")
      i.push(new Buffer(a, "utf8"));
    else if (o === "bool")
      i.push(new Buffer(a ? "01" : "00", "hex"));
    else if (o === "address")
      i.push(Dr.setLength(a, 20));
    else if (o.startsWith("bytes")) {
      if (r = hn(o), r < 1 || r > 32)
        throw new Error("Invalid bytes<N> width: " + r);
      i.push(Dr.setLengthRight(a, r));
    } else if (o.startsWith("uint")) {
      if (r = hn(o), r % 8 || r < 8 || r > 256)
        throw new Error("Invalid uint<N> width: " + r);
      if (n = Tr(a), n.bitLength() > r)
        throw new Error("Supplied uint exceeds width: " + r + " vs " + n.bitLength());
      i.push(n.toArrayLike(Buffer, "be", r / 8));
    } else if (o.startsWith("int")) {
      if (r = hn(o), r % 8 || r < 8 || r > 256)
        throw new Error("Invalid int<N> width: " + r);
      if (n = Tr(a), n.bitLength() > r)
        throw new Error("Supplied int exceeds width: " + r + " vs " + n.bitLength());
      i.push(n.toTwos(r).toArrayLike(Buffer, "be", r / 8));
    } else
      throw new Error("Unsupported or invalid type: " + o);
  }
  return Buffer.concat(i);
}
function wm(t, e) {
  return Dr.keccak(ld(t, e));
}
var _m = {
  rawEncode: vm,
  solidityPack: ld,
  soliditySHA3: wm
};
const Rt = ad, ri = _m, fd = {
  type: "object",
  properties: {
    types: {
      type: "object",
      additionalProperties: {
        type: "array",
        items: {
          type: "object",
          properties: {
            name: { type: "string" },
            type: { type: "string" }
          },
          required: ["name", "type"]
        }
      }
    },
    primaryType: { type: "string" },
    domain: { type: "object" },
    message: { type: "object" }
  },
  required: ["types", "primaryType", "domain", "message"]
}, Ta = {
  /**
   * Encodes an object by encoding and concatenating each of its members
   *
   * @param {string} primaryType - Root type
   * @param {Object} data - Object to encode
   * @param {Object} types - Type definitions
   * @returns {string} - Encoded representation of an object
   */
  encodeData(t, e, r, n = !0) {
    const i = ["bytes32"], s = [this.hashType(t, r)];
    if (n) {
      const o = (a, c, u) => {
        if (r[c] !== void 0)
          return ["bytes32", u == null ? "0x0000000000000000000000000000000000000000000000000000000000000000" : Rt.keccak(this.encodeData(c, u, r, n))];
        if (u === void 0)
          throw new Error(`missing value for field ${a} of type ${c}`);
        if (c === "bytes")
          return ["bytes32", Rt.keccak(u)];
        if (c === "string")
          return typeof u == "string" && (u = Buffer.from(u, "utf8")), ["bytes32", Rt.keccak(u)];
        if (c.lastIndexOf("]") === c.length - 1) {
          const h = c.slice(0, c.lastIndexOf("[")), d = u.map((p) => o(a, h, p));
          return ["bytes32", Rt.keccak(ri.rawEncode(
            d.map(([p]) => p),
            d.map(([, p]) => p)
          ))];
        }
        return [c, u];
      };
      for (const a of r[t]) {
        const [c, u] = o(a.name, a.type, e[a.name]);
        i.push(c), s.push(u);
      }
    } else
      for (const o of r[t]) {
        let a = e[o.name];
        if (a !== void 0)
          if (o.type === "bytes")
            i.push("bytes32"), a = Rt.keccak(a), s.push(a);
          else if (o.type === "string")
            i.push("bytes32"), typeof a == "string" && (a = Buffer.from(a, "utf8")), a = Rt.keccak(a), s.push(a);
          else if (r[o.type] !== void 0)
            i.push("bytes32"), a = Rt.keccak(this.encodeData(o.type, a, r, n)), s.push(a);
          else {
            if (o.type.lastIndexOf("]") === o.type.length - 1)
              throw new Error("Arrays currently unimplemented in encodeData");
            i.push(o.type), s.push(a);
          }
      }
    return ri.rawEncode(i, s);
  },
  /**
   * Encodes the type of an object by encoding a comma delimited list of its members
   *
   * @param {string} primaryType - Root type to encode
   * @param {Object} types - Type definitions
   * @returns {string} - Encoded representation of the type of an object
   */
  encodeType(t, e) {
    let r = "", n = this.findTypeDependencies(t, e).filter((i) => i !== t);
    n = [t].concat(n.sort());
    for (const i of n) {
      if (!e[i])
        throw new Error("No type definition specified: " + i);
      r += i + "(" + e[i].map(({ name: o, type: a }) => a + " " + o).join(",") + ")";
    }
    return r;
  },
  /**
   * Finds all types within a type defintion object
   *
   * @param {string} primaryType - Root type
   * @param {Object} types - Type definitions
   * @param {Array} results - current set of accumulated types
   * @returns {Array} - Set of all types found in the type definition
   */
  findTypeDependencies(t, e, r = []) {
    if (t = t.match(/^\w*/)[0], r.includes(t) || e[t] === void 0)
      return r;
    r.push(t);
    for (const n of e[t])
      for (const i of this.findTypeDependencies(n.type, e, r))
        !r.includes(i) && r.push(i);
    return r;
  },
  /**
   * Hashes an object
   *
   * @param {string} primaryType - Root type
   * @param {Object} data - Object to hash
   * @param {Object} types - Type definitions
   * @returns {Buffer} - Hash of an object
   */
  hashStruct(t, e, r, n = !0) {
    return Rt.keccak(this.encodeData(t, e, r, n));
  },
  /**
   * Hashes the type of an object
   *
   * @param {string} primaryType - Root type to hash
   * @param {Object} types - Type definitions
   * @returns {string} - Hash of an object
   */
  hashType(t, e) {
    return Rt.keccak(this.encodeType(t, e));
  },
  /**
   * Removes properties from a message object that are not defined per EIP-712
   *
   * @param {Object} data - typed message object
   * @returns {Object} - typed message object with only allowed fields
   */
  sanitizeData(t) {
    const e = {};
    for (const r in fd.properties)
      t[r] && (e[r] = t[r]);
    return e.types && (e.types = Object.assign({ EIP712Domain: [] }, e.types)), e;
  },
  /**
   * Returns the hash of a typed message as per EIP-712 for signing
   *
   * @param {Object} typedData - Types message data to sign
   * @returns {string} - sha3 hash for signing
   */
  hash(t, e = !0) {
    const r = this.sanitizeData(t), n = [Buffer.from("1901", "hex")];
    return n.push(this.hashStruct("EIP712Domain", r.domain, r.types, e)), r.primaryType !== "EIP712Domain" && n.push(this.hashStruct(r.primaryType, r.message, r.types, e)), Rt.keccak(Buffer.concat(n));
  }
};
var Em = {
  TYPED_MESSAGE_SCHEMA: fd,
  TypedDataUtils: Ta,
  hashForSignTypedDataLegacy: function(t) {
    return Sm(t.data);
  },
  hashForSignTypedData_v3: function(t) {
    return Ta.hash(t.data, !1);
  },
  hashForSignTypedData_v4: function(t) {
    return Ta.hash(t.data);
  }
};
function Sm(t) {
  const e = new Error("Expect argument to be non-empty array");
  if (typeof t != "object" || !t.length)
    throw e;
  const r = t.map(function(s) {
    return s.type === "bytes" ? Rt.toBuffer(s.value) : s.value;
  }), n = t.map(function(s) {
    return s.type;
  }), i = t.map(function(s) {
    if (!s.name)
      throw e;
    return s.type + " " + s.name;
  });
  return ri.soliditySHA3(
    ["bytes32", "bytes32"],
    [
      ri.soliditySHA3(new Array(t.length).fill("string"), i),
      ri.soliditySHA3(n, r)
    ]
  );
}
var _n = {};
Object.defineProperty(_n, "__esModule", { value: !0 });
_n.filterFromParam = _n.FilterPolyfill = void 0;
const an = vi, tt = Z, xm = 5 * 60 * 1e3, Mr = {
  jsonrpc: "2.0",
  id: 0
};
class Cm {
  constructor(e) {
    this.logFilters = /* @__PURE__ */ new Map(), this.blockFilters = /* @__PURE__ */ new Set(), this.pendingTransactionFilters = /* @__PURE__ */ new Set(), this.cursors = /* @__PURE__ */ new Map(), this.timeouts = /* @__PURE__ */ new Map(), this.nextFilterId = (0, an.IntNumber)(1), this.provider = e;
  }
  async newFilter(e) {
    const r = hd(e), n = this.makeFilterId(), i = await this.setInitialCursorPosition(n, r.fromBlock);
    return console.log(`Installing new log filter(${n}):`, r, "initial cursor position:", i), this.logFilters.set(n, r), this.setFilterTimeout(n), (0, tt.hexStringFromIntNumber)(n);
  }
  async newBlockFilter() {
    const e = this.makeFilterId(), r = await this.setInitialCursorPosition(e, "latest");
    return console.log(`Installing new block filter (${e}) with initial cursor position:`, r), this.blockFilters.add(e), this.setFilterTimeout(e), (0, tt.hexStringFromIntNumber)(e);
  }
  async newPendingTransactionFilter() {
    const e = this.makeFilterId(), r = await this.setInitialCursorPosition(e, "latest");
    return console.log(`Installing new block filter (${e}) with initial cursor position:`, r), this.pendingTransactionFilters.add(e), this.setFilterTimeout(e), (0, tt.hexStringFromIntNumber)(e);
  }
  uninstallFilter(e) {
    const r = (0, tt.intNumberFromHexString)(e);
    return console.log(`Uninstalling filter (${r})`), this.deleteFilter(r), !0;
  }
  getFilterChanges(e) {
    const r = (0, tt.intNumberFromHexString)(e);
    return this.timeouts.has(r) && this.setFilterTimeout(r), this.logFilters.has(r) ? this.getLogFilterChanges(r) : this.blockFilters.has(r) ? this.getBlockFilterChanges(r) : this.pendingTransactionFilters.has(r) ? this.getPendingTransactionFilterChanges(r) : Promise.resolve(ji());
  }
  async getFilterLogs(e) {
    const r = (0, tt.intNumberFromHexString)(e), n = this.logFilters.get(r);
    return n ? this.sendAsyncPromise(Object.assign(Object.assign({}, Mr), { method: "eth_getLogs", params: [Nl(n)] })) : ji();
  }
  makeFilterId() {
    return (0, an.IntNumber)(++this.nextFilterId);
  }
  sendAsyncPromise(e) {
    return new Promise((r, n) => {
      this.provider.sendAsync(e, (i, s) => {
        if (i)
          return n(i);
        if (Array.isArray(s) || s == null)
          return n(new Error(`unexpected response received: ${JSON.stringify(s)}`));
        r(s);
      });
    });
  }
  deleteFilter(e) {
    console.log(`Deleting filter (${e})`), this.logFilters.delete(e), this.blockFilters.delete(e), this.pendingTransactionFilters.delete(e), this.cursors.delete(e), this.timeouts.delete(e);
  }
  async getLogFilterChanges(e) {
    const r = this.logFilters.get(e), n = this.cursors.get(e);
    if (!n || !r)
      return ji();
    const i = await this.getCurrentBlockHeight(), s = r.toBlock === "latest" ? i : r.toBlock;
    if (n > i || n > r.toBlock)
      return Ui();
    console.log(`Fetching logs from ${n} to ${s} for filter ${e}`);
    const o = await this.sendAsyncPromise(Object.assign(Object.assign({}, Mr), { method: "eth_getLogs", params: [
      Nl(Object.assign(Object.assign({}, r), { fromBlock: n, toBlock: s }))
    ] }));
    if (Array.isArray(o.result)) {
      const a = o.result.map((u) => (0, tt.intNumberFromHexString)(u.blockNumber || "0x0")), c = Math.max(...a);
      if (c && c > n) {
        const u = (0, an.IntNumber)(c + 1);
        console.log(`Moving cursor position for filter (${e}) from ${n} to ${u}`), this.cursors.set(e, u);
      }
    }
    return o;
  }
  async getBlockFilterChanges(e) {
    const r = this.cursors.get(e);
    if (!r)
      return ji();
    const n = await this.getCurrentBlockHeight();
    if (r > n)
      return Ui();
    console.log(`Fetching blocks from ${r} to ${n} for filter (${e})`);
    const i = (await Promise.all(
      // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
      (0, tt.range)(r, n + 1).map((o) => this.getBlockHashByNumber((0, an.IntNumber)(o)))
    )).filter((o) => !!o), s = (0, an.IntNumber)(r + i.length);
    return console.log(`Moving cursor position for filter (${e}) from ${r} to ${s}`), this.cursors.set(e, s), Object.assign(Object.assign({}, Mr), { result: i });
  }
  async getPendingTransactionFilterChanges(e) {
    return Promise.resolve(Ui());
  }
  async setInitialCursorPosition(e, r) {
    const n = await this.getCurrentBlockHeight(), i = typeof r == "number" && r > n ? r : n;
    return this.cursors.set(e, i), i;
  }
  setFilterTimeout(e) {
    const r = this.timeouts.get(e);
    r && window.clearTimeout(r);
    const n = window.setTimeout(() => {
      console.log(`Filter (${e}) timed out`), this.deleteFilter(e);
    }, xm);
    this.timeouts.set(e, n);
  }
  async getCurrentBlockHeight() {
    const { result: e } = await this.sendAsyncPromise(Object.assign(Object.assign({}, Mr), { method: "eth_blockNumber", params: [] }));
    return (0, tt.intNumberFromHexString)((0, tt.ensureHexString)(e));
  }
  async getBlockHashByNumber(e) {
    const r = await this.sendAsyncPromise(Object.assign(Object.assign({}, Mr), { method: "eth_getBlockByNumber", params: [(0, tt.hexStringFromIntNumber)(e), !1] }));
    return r.result && typeof r.result.hash == "string" ? (0, tt.ensureHexString)(r.result.hash) : null;
  }
}
_n.FilterPolyfill = Cm;
function hd(t) {
  return {
    fromBlock: Ll(t.fromBlock),
    toBlock: Ll(t.toBlock),
    addresses: t.address === void 0 ? null : Array.isArray(t.address) ? t.address : [t.address],
    topics: t.topics || []
  };
}
_n.filterFromParam = hd;
function Nl(t) {
  const e = {
    fromBlock: Pl(t.fromBlock),
    toBlock: Pl(t.toBlock),
    topics: t.topics
  };
  return t.addresses !== null && (e.address = t.addresses), e;
}
function Ll(t) {
  if (t === void 0 || t === "latest" || t === "pending")
    return "latest";
  if (t === "earliest")
    return (0, an.IntNumber)(0);
  if ((0, tt.isHexString)(t))
    return (0, tt.intNumberFromHexString)(t);
  throw new Error(`Invalid block option: ${String(t)}`);
}
function Pl(t) {
  return t === "latest" ? t : (0, tt.hexStringFromIntNumber)(t);
}
function ji() {
  return Object.assign(Object.assign({}, Mr), { error: { code: -32e3, message: "filter not found" } });
}
function Ui() {
  return Object.assign(Object.assign({}, Mr), { result: [] });
}
var dd = {};
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.JSONRPCMethod = void 0, function(e) {
    e.eth_accounts = "eth_accounts", e.eth_coinbase = "eth_coinbase", e.net_version = "net_version", e.eth_chainId = "eth_chainId", e.eth_uninstallFilter = "eth_uninstallFilter", e.eth_requestAccounts = "eth_requestAccounts", e.eth_sign = "eth_sign", e.eth_ecRecover = "eth_ecRecover", e.personal_sign = "personal_sign", e.personal_ecRecover = "personal_ecRecover", e.eth_signTransaction = "eth_signTransaction", e.eth_sendRawTransaction = "eth_sendRawTransaction", e.eth_sendTransaction = "eth_sendTransaction", e.eth_signTypedData_v1 = "eth_signTypedData_v1", e.eth_signTypedData_v2 = "eth_signTypedData_v2", e.eth_signTypedData_v3 = "eth_signTypedData_v3", e.eth_signTypedData_v4 = "eth_signTypedData_v4", e.eth_signTypedData = "eth_signTypedData", e.cbWallet_arbitrary = "walletlink_arbitrary", e.wallet_addEthereumChain = "wallet_addEthereumChain", e.wallet_switchEthereumChain = "wallet_switchEthereumChain", e.wallet_watchAsset = "wallet_watchAsset", e.eth_subscribe = "eth_subscribe", e.eth_unsubscribe = "eth_unsubscribe", e.eth_newFilter = "eth_newFilter", e.eth_newBlockFilter = "eth_newBlockFilter", e.eth_newPendingTransactionFilter = "eth_newPendingTransactionFilter", e.eth_getFilterChanges = "eth_getFilterChanges", e.eth_getFilterLogs = "eth_getFilterLogs";
  }(t.JSONRPCMethod || (t.JSONRPCMethod = {}));
})(dd);
var ks = {}, pd = {}, Ns = {}, jc = Im;
function Im(t) {
  t = t || {};
  var e = t.max || Number.MAX_SAFE_INTEGER, r = typeof t.start < "u" ? t.start : Math.floor(Math.random() * e);
  return function() {
    return r = r % e, r++;
  };
}
const Bl = (t, e) => function() {
  const r = e.promiseModule, n = new Array(arguments.length);
  for (let i = 0; i < arguments.length; i++)
    n[i] = arguments[i];
  return new r((i, s) => {
    e.errorFirst ? n.push(function(o, a) {
      if (e.multiArgs) {
        const c = new Array(arguments.length - 1);
        for (let u = 1; u < arguments.length; u++)
          c[u - 1] = arguments[u];
        o ? (c.unshift(o), s(c)) : i(c);
      } else
        o ? s(o) : i(a);
    }) : n.push(function(o) {
      if (e.multiArgs) {
        const a = new Array(arguments.length - 1);
        for (let c = 0; c < arguments.length; c++)
          a[c] = arguments[c];
        i(a);
      } else
        i(o);
    }), t.apply(this, n);
  });
};
var Rm = (t, e) => {
  e = Object.assign({
    exclude: [/.+(Sync|Stream)$/],
    errorFirst: !0,
    promiseModule: Promise
  }, e);
  const r = (i) => {
    const s = (o) => typeof o == "string" ? i === o : o.test(i);
    return e.include ? e.include.some(s) : !e.exclude.some(s);
  };
  let n;
  typeof t == "function" ? n = function() {
    return e.excludeMain ? t.apply(this, arguments) : Bl(t, e).apply(this, arguments);
  } : n = Object.create(Object.getPrototypeOf(t));
  for (const i in t) {
    const s = t[i];
    n[i] = typeof s == "function" && r(i) ? Bl(s, e) : s;
  }
  return n;
}, Ei = {}, Am = G && G.__importDefault || function(t) {
  return t && t.__esModule ? t : { default: t };
};
Object.defineProperty(Ei, "__esModule", { value: !0 });
Ei.BaseBlockTracker = void 0;
const Tm = Am(Vr), Mm = 1e3, Om = (t, e) => t + e, $l = ["sync", "latest"];
class km extends Tm.default {
  constructor(e) {
    super(), this._blockResetDuration = e.blockResetDuration || 20 * Mm, this._currentBlock = null, this._isRunning = !1, this._onNewListener = this._onNewListener.bind(this), this._onRemoveListener = this._onRemoveListener.bind(this), this._resetCurrentBlock = this._resetCurrentBlock.bind(this), this._setupInternalEvents();
  }
  async destroy() {
    this._cancelBlockResetTimeout(), await this._maybeEnd(), super.removeAllListeners();
  }
  isRunning() {
    return this._isRunning;
  }
  getCurrentBlock() {
    return this._currentBlock;
  }
  async getLatestBlock() {
    return this._currentBlock ? this._currentBlock : await new Promise((r) => this.once("latest", r));
  }
  // dont allow module consumer to remove our internal event listeners
  removeAllListeners(e) {
    return e ? super.removeAllListeners(e) : super.removeAllListeners(), this._setupInternalEvents(), this._onRemoveListener(), this;
  }
  _setupInternalEvents() {
    this.removeListener("newListener", this._onNewListener), this.removeListener("removeListener", this._onRemoveListener), this.on("newListener", this._onNewListener), this.on("removeListener", this._onRemoveListener);
  }
  _onNewListener(e) {
    $l.includes(e) && this._maybeStart();
  }
  _onRemoveListener() {
    this._getBlockTrackerEventCount() > 0 || this._maybeEnd();
  }
  async _maybeStart() {
    this._isRunning || (this._isRunning = !0, this._cancelBlockResetTimeout(), await this._start(), this.emit("_started"));
  }
  async _maybeEnd() {
    this._isRunning && (this._isRunning = !1, this._setupBlockResetTimeout(), await this._end(), this.emit("_ended"));
  }
  _getBlockTrackerEventCount() {
    return $l.map((e) => this.listenerCount(e)).reduce(Om);
  }
  _newPotentialLatest(e) {
    const r = this._currentBlock;
    r && Dl(e) <= Dl(r) || this._setCurrentBlock(e);
  }
  _setCurrentBlock(e) {
    const r = this._currentBlock;
    this._currentBlock = e, this.emit("latest", e), this.emit("sync", { oldBlock: r, newBlock: e });
  }
  _setupBlockResetTimeout() {
    this._cancelBlockResetTimeout(), this._blockResetTimeout = setTimeout(this._resetCurrentBlock, this._blockResetDuration), this._blockResetTimeout.unref && this._blockResetTimeout.unref();
  }
  _cancelBlockResetTimeout() {
    this._blockResetTimeout && clearTimeout(this._blockResetTimeout);
  }
  _resetCurrentBlock() {
    this._currentBlock = null;
  }
}
Ei.BaseBlockTracker = km;
function Dl(t) {
  return Number.parseInt(t, 16);
}
var gd = {}, bd = {}, Ge = {};
class yd extends TypeError {
  constructor(e, r) {
    let n;
    const { message: i, explanation: s, ...o } = e, { path: a } = e, c = a.length === 0 ? i : `At path: ${a.join(".")} -- ${i}`;
    super(s ?? c), s != null && (this.cause = c), Object.assign(this, o), this.name = this.constructor.name, this.failures = () => n ?? (n = [e, ...r()]);
  }
}
function Nm(t) {
  return _t(t) && typeof t[Symbol.iterator] == "function";
}
function _t(t) {
  return typeof t == "object" && t != null;
}
function Fl(t) {
  if (Object.prototype.toString.call(t) !== "[object Object]")
    return !1;
  const e = Object.getPrototypeOf(t);
  return e === null || e === Object.prototype;
}
function $e(t) {
  return typeof t == "symbol" ? t.toString() : typeof t == "string" ? JSON.stringify(t) : `${t}`;
}
function Lm(t) {
  const { done: e, value: r } = t.next();
  return e ? void 0 : r;
}
function Pm(t, e, r, n) {
  if (t === !0)
    return;
  t === !1 ? t = {} : typeof t == "string" && (t = { message: t });
  const { path: i, branch: s } = e, { type: o } = r, { refinement: a, message: c = `Expected a value of type \`${o}\`${a ? ` with refinement \`${a}\`` : ""}, but received: \`${$e(n)}\`` } = t;
  return {
    value: n,
    type: o,
    refinement: a,
    key: i[i.length - 1],
    path: i,
    branch: s,
    ...t,
    message: c
  };
}
function* hc(t, e, r, n) {
  Nm(t) || (t = [t]);
  for (const i of t) {
    const s = Pm(i, e, r, n);
    s && (yield s);
  }
}
function* Uc(t, e, r = {}) {
  const { path: n = [], branch: i = [t], coerce: s = !1, mask: o = !1 } = r, a = { path: n, branch: i };
  if (s && (t = e.coercer(t, a), o && e.type !== "type" && _t(e.schema) && _t(t) && !Array.isArray(t)))
    for (const u in t)
      e.schema[u] === void 0 && delete t[u];
  let c = "valid";
  for (const u of e.validator(t, a))
    u.explanation = r.message, c = "not_valid", yield [u, void 0];
  for (let [u, h, d] of e.entries(t, a)) {
    const p = Uc(h, d, {
      path: u === void 0 ? n : [...n, u],
      branch: u === void 0 ? i : [...i, h],
      coerce: s,
      mask: o,
      message: r.message
    });
    for (const v of p)
      v[0] ? (c = v[0].refinement != null ? "not_refined" : "not_valid", yield [v[0], void 0]) : s && (h = v[1], u === void 0 ? t = h : t instanceof Map ? t.set(u, h) : t instanceof Set ? t.add(h) : _t(t) && (h !== void 0 || u in t) && (t[u] = h));
  }
  if (c !== "not_valid")
    for (const u of e.refiner(t, a))
      u.explanation = r.message, c = "not_refined", yield [u, void 0];
  c === "valid" && (yield [void 0, t]);
}
class Le {
  constructor(e) {
    const { type: r, schema: n, validator: i, refiner: s, coercer: o = (c) => c, entries: a = function* () {
    } } = e;
    this.type = r, this.schema = n, this.entries = a, this.coercer = o, i ? this.validator = (c, u) => {
      const h = i(c, u);
      return hc(h, u, this, c);
    } : this.validator = () => [], s ? this.refiner = (c, u) => {
      const h = s(c, u);
      return hc(h, u, this, c);
    } : this.refiner = () => [];
  }
  /**
   * Assert that a value passes the struct's validation, throwing if it doesn't.
   */
  assert(e, r) {
    return md(e, this, r);
  }
  /**
   * Create a value with the struct's coercion logic, then validate it.
   */
  create(e, r) {
    return vd(e, this, r);
  }
  /**
   * Check if a value passes the struct's validation.
   */
  is(e) {
    return Wc(e, this);
  }
  /**
   * Mask a value, coercing and validating it, but returning only the subset of
   * properties defined by the struct's schema.
   */
  mask(e, r) {
    return wd(e, this, r);
  }
  /**
   * Validate a value with the struct's validation logic, returning a tuple
   * representing the result.
   *
   * You may optionally pass `true` for the `withCoercion` argument to coerce
   * the value before attempting to validate it. If you do, the result will
   * contain the coerced result when successful.
   */
  validate(e, r = {}) {
    return $n(e, this, r);
  }
}
function md(t, e, r) {
  const n = $n(t, e, { message: r });
  if (n[0])
    throw n[0];
}
function vd(t, e, r) {
  const n = $n(t, e, { coerce: !0, message: r });
  if (n[0])
    throw n[0];
  return n[1];
}
function wd(t, e, r) {
  const n = $n(t, e, { coerce: !0, mask: !0, message: r });
  if (n[0])
    throw n[0];
  return n[1];
}
function Wc(t, e) {
  return !$n(t, e)[0];
}
function $n(t, e, r = {}) {
  const n = Uc(t, e, r), i = Lm(n);
  return i[0] ? [new yd(i[0], function* () {
    for (const o of n)
      o[0] && (yield o[0]);
  }), void 0] : [void 0, i[1]];
}
function Bm(...t) {
  const e = t[0].type === "type", r = t.map((i) => i.schema), n = Object.assign({}, ...r);
  return e ? Hc(n) : Si(n);
}
function at(t, e) {
  return new Le({ type: t, schema: null, validator: e });
}
function $m(t, e) {
  return new Le({
    ...t,
    refiner: (r, n) => r === void 0 || t.refiner(r, n),
    validator(r, n) {
      return r === void 0 ? !0 : (e(r, n), t.validator(r, n));
    }
  });
}
function Dm(t) {
  return new Le({
    type: "dynamic",
    schema: null,
    *entries(e, r) {
      yield* t(e, r).entries(e, r);
    },
    validator(e, r) {
      return t(e, r).validator(e, r);
    },
    coercer(e, r) {
      return t(e, r).coercer(e, r);
    },
    refiner(e, r) {
      return t(e, r).refiner(e, r);
    }
  });
}
function Fm(t) {
  let e;
  return new Le({
    type: "lazy",
    schema: null,
    *entries(r, n) {
      e ?? (e = t()), yield* e.entries(r, n);
    },
    validator(r, n) {
      return e ?? (e = t()), e.validator(r, n);
    },
    coercer(r, n) {
      return e ?? (e = t()), e.coercer(r, n);
    },
    refiner(r, n) {
      return e ?? (e = t()), e.refiner(r, n);
    }
  });
}
function jm(t, e) {
  const { schema: r } = t, n = { ...r };
  for (const i of e)
    delete n[i];
  switch (t.type) {
    case "type":
      return Hc(n);
    default:
      return Si(n);
  }
}
function Um(t) {
  const e = t instanceof Le ? { ...t.schema } : { ...t };
  for (const r in e)
    e[r] = _d(e[r]);
  return Si(e);
}
function Wm(t, e) {
  const { schema: r } = t, n = {};
  for (const i of e)
    n[i] = r[i];
  return Si(n);
}
function Vm(t, e) {
  return console.warn("superstruct@0.11 - The `struct` helper has been renamed to `define`."), at(t, e);
}
function Hm() {
  return at("any", () => !0);
}
function zm(t) {
  return new Le({
    type: "array",
    schema: t,
    *entries(e) {
      if (t && Array.isArray(e))
        for (const [r, n] of e.entries())
          yield [r, n, t];
    },
    coercer(e) {
      return Array.isArray(e) ? e.slice() : e;
    },
    validator(e) {
      return Array.isArray(e) || `Expected an array value, but received: ${$e(e)}`;
    }
  });
}
function qm() {
  return at("bigint", (t) => typeof t == "bigint");
}
function Gm() {
  return at("boolean", (t) => typeof t == "boolean");
}
function Jm() {
  return at("date", (t) => t instanceof Date && !isNaN(t.getTime()) || `Expected a valid \`Date\` object, but received: ${$e(t)}`);
}
function Qm(t) {
  const e = {}, r = t.map((n) => $e(n)).join();
  for (const n of t)
    e[n] = n;
  return new Le({
    type: "enums",
    schema: e,
    validator(n) {
      return t.includes(n) || `Expected one of \`${r}\`, but received: ${$e(n)}`;
    }
  });
}
function Zm() {
  return at("func", (t) => typeof t == "function" || `Expected a function, but received: ${$e(t)}`);
}
function Ym(t) {
  return at("instance", (e) => e instanceof t || `Expected a \`${t.name}\` instance, but received: ${$e(e)}`);
}
function Km() {
  return at("integer", (t) => typeof t == "number" && !isNaN(t) && Number.isInteger(t) || `Expected an integer, but received: ${$e(t)}`);
}
function Xm(t) {
  return new Le({
    type: "intersection",
    schema: null,
    *entries(e, r) {
      for (const n of t)
        yield* n.entries(e, r);
    },
    *validator(e, r) {
      for (const n of t)
        yield* n.validator(e, r);
    },
    *refiner(e, r) {
      for (const n of t)
        yield* n.refiner(e, r);
    }
  });
}
function ev(t) {
  const e = $e(t), r = typeof t;
  return new Le({
    type: "literal",
    schema: r === "string" || r === "number" || r === "boolean" ? t : null,
    validator(n) {
      return n === t || `Expected the literal \`${e}\`, but received: ${$e(n)}`;
    }
  });
}
function tv(t, e) {
  return new Le({
    type: "map",
    schema: null,
    *entries(r) {
      if (t && e && r instanceof Map)
        for (const [n, i] of r.entries())
          yield [n, n, t], yield [n, i, e];
    },
    coercer(r) {
      return r instanceof Map ? new Map(r) : r;
    },
    validator(r) {
      return r instanceof Map || `Expected a \`Map\` object, but received: ${$e(r)}`;
    }
  });
}
function Vc() {
  return at("never", () => !1);
}
function rv(t) {
  return new Le({
    ...t,
    validator: (e, r) => e === null || t.validator(e, r),
    refiner: (e, r) => e === null || t.refiner(e, r)
  });
}
function nv() {
  return at("number", (t) => typeof t == "number" && !isNaN(t) || `Expected a number, but received: ${$e(t)}`);
}
function Si(t) {
  const e = t ? Object.keys(t) : [], r = Vc();
  return new Le({
    type: "object",
    schema: t || null,
    *entries(n) {
      if (t && _t(n)) {
        const i = new Set(Object.keys(n));
        for (const s of e)
          i.delete(s), yield [s, n[s], t[s]];
        for (const s of i)
          yield [s, n[s], r];
      }
    },
    validator(n) {
      return _t(n) || `Expected an object, but received: ${$e(n)}`;
    },
    coercer(n) {
      return _t(n) ? { ...n } : n;
    }
  });
}
function _d(t) {
  return new Le({
    ...t,
    validator: (e, r) => e === void 0 || t.validator(e, r),
    refiner: (e, r) => e === void 0 || t.refiner(e, r)
  });
}
function iv(t, e) {
  return new Le({
    type: "record",
    schema: null,
    *entries(r) {
      if (_t(r))
        for (const n in r) {
          const i = r[n];
          yield [n, n, t], yield [n, i, e];
        }
    },
    validator(r) {
      return _t(r) || `Expected an object, but received: ${$e(r)}`;
    }
  });
}
function sv() {
  return at("regexp", (t) => t instanceof RegExp);
}
function ov(t) {
  return new Le({
    type: "set",
    schema: null,
    *entries(e) {
      if (t && e instanceof Set)
        for (const r of e)
          yield [r, r, t];
    },
    coercer(e) {
      return e instanceof Set ? new Set(e) : e;
    },
    validator(e) {
      return e instanceof Set || `Expected a \`Set\` object, but received: ${$e(e)}`;
    }
  });
}
function Ed() {
  return at("string", (t) => typeof t == "string" || `Expected a string, but received: ${$e(t)}`);
}
function av(t) {
  const e = Vc();
  return new Le({
    type: "tuple",
    schema: null,
    *entries(r) {
      if (Array.isArray(r)) {
        const n = Math.max(t.length, r.length);
        for (let i = 0; i < n; i++)
          yield [i, r[i], t[i] || e];
      }
    },
    validator(r) {
      return Array.isArray(r) || `Expected an array, but received: ${$e(r)}`;
    }
  });
}
function Hc(t) {
  const e = Object.keys(t);
  return new Le({
    type: "type",
    schema: t,
    *entries(r) {
      if (_t(r))
        for (const n of e)
          yield [n, r[n], t[n]];
    },
    validator(r) {
      return _t(r) || `Expected an object, but received: ${$e(r)}`;
    },
    coercer(r) {
      return _t(r) ? { ...r } : r;
    }
  });
}
function cv(t) {
  const e = t.map((r) => r.type).join(" | ");
  return new Le({
    type: "union",
    schema: null,
    coercer(r) {
      for (const n of t) {
        const [i, s] = n.validate(r, { coerce: !0 });
        if (!i)
          return s;
      }
      return r;
    },
    validator(r, n) {
      const i = [];
      for (const s of t) {
        const [...o] = Uc(r, s, n), [a] = o;
        if (a[0])
          for (const [c] of o)
            c && i.push(c);
        else
          return [];
      }
      return [
        `Expected the value to satisfy a union of \`${e}\`, but received: ${$e(r)}`,
        ...i
      ];
    }
  });
}
function Sd() {
  return at("unknown", () => !0);
}
function zc(t, e, r) {
  return new Le({
    ...t,
    coercer: (n, i) => Wc(n, e) ? t.coercer(r(n, i), i) : t.coercer(n, i)
  });
}
function uv(t, e, r = {}) {
  return zc(t, Sd(), (n) => {
    const i = typeof e == "function" ? e() : e;
    if (n === void 0)
      return i;
    if (!r.strict && Fl(n) && Fl(i)) {
      const s = { ...n };
      let o = !1;
      for (const a in i)
        s[a] === void 0 && (s[a] = i[a], o = !0);
      if (o)
        return s;
    }
    return n;
  });
}
function lv(t) {
  return zc(t, Ed(), (e) => e.trim());
}
function fv(t) {
  return Jr(t, "empty", (e) => {
    const r = xd(e);
    return r === 0 || `Expected an empty ${t.type} but received one with a size of \`${r}\``;
  });
}
function xd(t) {
  return t instanceof Map || t instanceof Set ? t.size : t.length;
}
function hv(t, e, r = {}) {
  const { exclusive: n } = r;
  return Jr(t, "max", (i) => n ? i < e : i <= e || `Expected a ${t.type} less than ${n ? "" : "or equal to "}${e} but received \`${i}\``);
}
function dv(t, e, r = {}) {
  const { exclusive: n } = r;
  return Jr(t, "min", (i) => n ? i > e : i >= e || `Expected a ${t.type} greater than ${n ? "" : "or equal to "}${e} but received \`${i}\``);
}
function pv(t) {
  return Jr(t, "nonempty", (e) => xd(e) > 0 || `Expected a nonempty ${t.type} but received an empty one`);
}
function gv(t, e) {
  return Jr(t, "pattern", (r) => e.test(r) || `Expected a ${t.type} matching \`/${e.source}/\` but received "${r}"`);
}
function bv(t, e, r = e) {
  const n = `Expected a ${t.type}`, i = e === r ? `of \`${e}\`` : `between \`${e}\` and \`${r}\``;
  return Jr(t, "size", (s) => {
    if (typeof s == "number" || s instanceof Date)
      return e <= s && s <= r || `${n} ${i} but received \`${s}\``;
    if (s instanceof Map || s instanceof Set) {
      const { size: o } = s;
      return e <= o && o <= r || `${n} with a size ${i} but received one with a size of \`${o}\``;
    } else {
      const { length: o } = s;
      return e <= o && o <= r || `${n} with a length ${i} but received one with a length of \`${o}\``;
    }
  });
}
function Jr(t, e, r) {
  return new Le({
    ...t,
    *refiner(n, i) {
      yield* t.refiner(n, i);
      const s = r(n, i), o = hc(s, i, t, n);
      for (const a of o)
        yield { ...a, refinement: e };
    }
  });
}
const yv = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  Struct: Le,
  StructError: yd,
  any: Hm,
  array: zm,
  assert: md,
  assign: Bm,
  bigint: qm,
  boolean: Gm,
  coerce: zc,
  create: vd,
  date: Jm,
  defaulted: uv,
  define: at,
  deprecated: $m,
  dynamic: Dm,
  empty: fv,
  enums: Qm,
  func: Zm,
  instance: Ym,
  integer: Km,
  intersection: Xm,
  is: Wc,
  lazy: Fm,
  literal: ev,
  map: tv,
  mask: wd,
  max: hv,
  min: dv,
  never: Vc,
  nonempty: pv,
  nullable: rv,
  number: nv,
  object: Si,
  omit: jm,
  optional: _d,
  partial: Um,
  pattern: gv,
  pick: Wm,
  record: iv,
  refine: Jr,
  regexp: sv,
  set: ov,
  size: bv,
  string: Ed,
  struct: Vm,
  trimmed: lv,
  tuple: av,
  type: Hc,
  union: cv,
  unknown: Sd,
  validate: $n
}, Symbol.toStringTag, { value: "Module" })), Qr = /* @__PURE__ */ Wr(yv);
Object.defineProperty(Ge, "__esModule", { value: !0 });
Ge.assertExhaustive = Ge.assertStruct = Ge.assert = Ge.AssertionError = void 0;
const mv = Qr;
function vv(t) {
  return typeof t == "object" && t !== null && "message" in t;
}
function wv(t) {
  var e, r;
  return typeof ((r = (e = t == null ? void 0 : t.prototype) === null || e === void 0 ? void 0 : e.constructor) === null || r === void 0 ? void 0 : r.name) == "string";
}
function _v(t) {
  const e = vv(t) ? t.message : String(t);
  return e.endsWith(".") ? e.slice(0, -1) : e;
}
function Cd(t, e) {
  return wv(t) ? new t({
    message: e
  }) : t({
    message: e
  });
}
class qc extends Error {
  constructor(e) {
    super(e.message), this.code = "ERR_ASSERTION";
  }
}
Ge.AssertionError = qc;
function Ev(t, e = "Assertion failed.", r = qc) {
  if (!t)
    throw e instanceof Error ? e : Cd(r, e);
}
Ge.assert = Ev;
function Sv(t, e, r = "Assertion failed", n = qc) {
  try {
    (0, mv.assert)(t, e);
  } catch (i) {
    throw Cd(n, `${r}: ${_v(i)}.`);
  }
}
Ge.assertStruct = Sv;
function xv(t) {
  throw new Error("Invalid branch reached. Should be detected during compilation.");
}
Ge.assertExhaustive = xv;
var xi = {};
Object.defineProperty(xi, "__esModule", { value: !0 });
xi.base64 = void 0;
const Cv = Qr, Iv = Ge, Rv = (t, e = {}) => {
  var r, n;
  const i = (r = e.paddingRequired) !== null && r !== void 0 ? r : !1, s = (n = e.characterSet) !== null && n !== void 0 ? n : "base64";
  let o;
  s === "base64" ? o = String.raw`[A-Za-z0-9+\/]` : ((0, Iv.assert)(s === "base64url"), o = String.raw`[-_A-Za-z0-9]`);
  let a;
  return i ? a = new RegExp(`^(?:${o}{4})*(?:${o}{3}=|${o}{2}==)?$`, "u") : a = new RegExp(`^(?:${o}{4})*(?:${o}{2,3}|${o}{3}=|${o}{2}==)?$`, "u"), (0, Cv.pattern)(t, a);
};
xi.base64 = Rv;
var ge = {}, Ci = {};
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.remove0x = t.add0x = t.assertIsStrictHexString = t.assertIsHexString = t.isStrictHexString = t.isHexString = t.StrictHexStruct = t.HexStruct = void 0;
  const e = Qr, r = Ge;
  t.HexStruct = (0, e.pattern)((0, e.string)(), /^(?:0x)?[0-9a-f]+$/iu), t.StrictHexStruct = (0, e.pattern)((0, e.string)(), /^0x[0-9a-f]+$/iu);
  function n(u) {
    return (0, e.is)(u, t.HexStruct);
  }
  t.isHexString = n;
  function i(u) {
    return (0, e.is)(u, t.StrictHexStruct);
  }
  t.isStrictHexString = i;
  function s(u) {
    (0, r.assert)(n(u), "Value must be a hexadecimal string.");
  }
  t.assertIsHexString = s;
  function o(u) {
    (0, r.assert)(i(u), 'Value must be a hexadecimal string, starting with "0x".');
  }
  t.assertIsStrictHexString = o;
  function a(u) {
    return u.startsWith("0x") ? u : u.startsWith("0X") ? `0x${u.substring(2)}` : `0x${u}`;
  }
  t.add0x = a;
  function c(u) {
    return u.startsWith("0x") || u.startsWith("0X") ? u.substring(2) : u;
  }
  t.remove0x = c;
})(Ci);
Object.defineProperty(ge, "__esModule", { value: !0 });
ge.createDataView = ge.concatBytes = ge.valueToBytes = ge.stringToBytes = ge.numberToBytes = ge.signedBigIntToBytes = ge.bigIntToBytes = ge.hexToBytes = ge.bytesToString = ge.bytesToNumber = ge.bytesToSignedBigInt = ge.bytesToBigInt = ge.bytesToHex = ge.assertIsBytes = ge.isBytes = void 0;
const ut = Ge, dc = Ci, jl = 48, Ul = 58, Wl = 87;
function Av() {
  const t = [];
  return () => {
    if (t.length === 0)
      for (let e = 0; e < 256; e++)
        t.push(e.toString(16).padStart(2, "0"));
    return t;
  };
}
const Tv = Av();
function Gc(t) {
  return t instanceof Uint8Array;
}
ge.isBytes = Gc;
function Dn(t) {
  (0, ut.assert)(Gc(t), "Value must be a Uint8Array.");
}
ge.assertIsBytes = Dn;
function Id(t) {
  if (Dn(t), t.length === 0)
    return "0x";
  const e = Tv(), r = new Array(t.length);
  for (let n = 0; n < t.length; n++)
    r[n] = e[t[n]];
  return (0, dc.add0x)(r.join(""));
}
ge.bytesToHex = Id;
function Rd(t) {
  Dn(t);
  const e = Id(t);
  return BigInt(e);
}
ge.bytesToBigInt = Rd;
function Mv(t) {
  Dn(t);
  let e = BigInt(0);
  for (const r of t)
    e = (e << BigInt(8)) + BigInt(r);
  return BigInt.asIntN(t.length * 8, e);
}
ge.bytesToSignedBigInt = Mv;
function Ov(t) {
  Dn(t);
  const e = Rd(t);
  return (0, ut.assert)(e <= BigInt(Number.MAX_SAFE_INTEGER), "Number is not a safe integer. Use `bytesToBigInt` instead."), Number(e);
}
ge.bytesToNumber = Ov;
function kv(t) {
  return Dn(t), new TextDecoder().decode(t);
}
ge.bytesToString = kv;
function Ls(t) {
  var e;
  if (((e = t == null ? void 0 : t.toLowerCase) === null || e === void 0 ? void 0 : e.call(t)) === "0x")
    return new Uint8Array();
  (0, dc.assertIsHexString)(t);
  const r = (0, dc.remove0x)(t).toLowerCase(), n = r.length % 2 === 0 ? r : `0${r}`, i = new Uint8Array(n.length / 2);
  for (let s = 0; s < i.length; s++) {
    const o = n.charCodeAt(s * 2), a = n.charCodeAt(s * 2 + 1), c = o - (o < Ul ? jl : Wl), u = a - (a < Ul ? jl : Wl);
    i[s] = c * 16 + u;
  }
  return i;
}
ge.hexToBytes = Ls;
function Ad(t) {
  (0, ut.assert)(typeof t == "bigint", "Value must be a bigint."), (0, ut.assert)(t >= BigInt(0), "Value must be a non-negative bigint.");
  const e = t.toString(16);
  return Ls(e);
}
ge.bigIntToBytes = Ad;
function Nv(t, e) {
  (0, ut.assert)(e > 0);
  const r = t >> BigInt(31);
  return !((~t & r) + (t & ~r) >> BigInt(e * 8 + -1));
}
function Lv(t, e) {
  (0, ut.assert)(typeof t == "bigint", "Value must be a bigint."), (0, ut.assert)(typeof e == "number", "Byte length must be a number."), (0, ut.assert)(e > 0, "Byte length must be greater than 0."), (0, ut.assert)(Nv(t, e), "Byte length is too small to represent the given value.");
  let r = t;
  const n = new Uint8Array(e);
  for (let i = 0; i < n.length; i++)
    n[i] = Number(BigInt.asUintN(8, r)), r >>= BigInt(8);
  return n.reverse();
}
ge.signedBigIntToBytes = Lv;
function Td(t) {
  (0, ut.assert)(typeof t == "number", "Value must be a number."), (0, ut.assert)(t >= 0, "Value must be a non-negative number."), (0, ut.assert)(Number.isSafeInteger(t), "Value is not a safe integer. Use `bigIntToBytes` instead.");
  const e = t.toString(16);
  return Ls(e);
}
ge.numberToBytes = Td;
function Md(t) {
  return (0, ut.assert)(typeof t == "string", "Value must be a string."), new TextEncoder().encode(t);
}
ge.stringToBytes = Md;
function Od(t) {
  if (typeof t == "bigint")
    return Ad(t);
  if (typeof t == "number")
    return Td(t);
  if (typeof t == "string")
    return t.startsWith("0x") ? Ls(t) : Md(t);
  if (Gc(t))
    return t;
  throw new TypeError(`Unsupported value type: "${typeof t}".`);
}
ge.valueToBytes = Od;
function Pv(t) {
  const e = new Array(t.length);
  let r = 0;
  for (let i = 0; i < t.length; i++) {
    const s = Od(t[i]);
    e[i] = s, r += s.length;
  }
  const n = new Uint8Array(r);
  for (let i = 0, s = 0; i < e.length; i++)
    n.set(e[i], s), s += e[i].length;
  return n;
}
ge.concatBytes = Pv;
function Bv(t) {
  if (typeof Buffer < "u" && t instanceof Buffer) {
    const e = t.buffer.slice(t.byteOffset, t.byteOffset + t.byteLength);
    return new DataView(e);
  }
  return new DataView(t.buffer, t.byteOffset, t.byteLength);
}
ge.createDataView = Bv;
var Ps = {};
Object.defineProperty(Ps, "__esModule", { value: !0 });
Ps.ChecksumStruct = void 0;
const Vl = Qr, $v = xi;
Ps.ChecksumStruct = (0, Vl.size)((0, $v.base64)((0, Vl.string)(), { paddingRequired: !0 }), 44, 44);
var zt = {};
Object.defineProperty(zt, "__esModule", { value: !0 });
zt.createHex = zt.createBytes = zt.createBigInt = zt.createNumber = void 0;
const Te = Qr, Dv = Ge, kd = ge, Bs = Ci, Nd = (0, Te.union)([(0, Te.number)(), (0, Te.bigint)(), (0, Te.string)(), Bs.StrictHexStruct]), Fv = (0, Te.coerce)((0, Te.number)(), Nd, Number), jv = (0, Te.coerce)((0, Te.bigint)(), Nd, BigInt);
(0, Te.union)([Bs.StrictHexStruct, (0, Te.instance)(Uint8Array)]);
const Uv = (0, Te.coerce)((0, Te.instance)(Uint8Array), (0, Te.union)([Bs.StrictHexStruct]), kd.hexToBytes), Wv = (0, Te.coerce)(Bs.StrictHexStruct, (0, Te.instance)(Uint8Array), kd.bytesToHex);
function Vv(t) {
  try {
    const e = (0, Te.create)(t, Fv);
    return (0, Dv.assert)(Number.isFinite(e), `Expected a number-like value, got "${t}".`), e;
  } catch (e) {
    throw e instanceof Te.StructError ? new Error(`Expected a number-like value, got "${t}".`) : e;
  }
}
zt.createNumber = Vv;
function Hv(t) {
  try {
    return (0, Te.create)(t, jv);
  } catch (e) {
    throw e instanceof Te.StructError ? new Error(`Expected a number-like value, got "${String(e.value)}".`) : e;
  }
}
zt.createBigInt = Hv;
function zv(t) {
  if (typeof t == "string" && t.toLowerCase() === "0x")
    return new Uint8Array();
  try {
    return (0, Te.create)(t, Uv);
  } catch (e) {
    throw e instanceof Te.StructError ? new Error(`Expected a bytes-like value, got "${String(e.value)}".`) : e;
  }
}
zt.createBytes = zv;
function qv(t) {
  if (t instanceof Uint8Array && t.length === 0 || typeof t == "string" && t.toLowerCase() === "0x")
    return "0x";
  try {
    return (0, Te.create)(t, Wv);
  } catch (e) {
    throw e instanceof Te.StructError ? new Error(`Expected a bytes-like value, got "${String(e.value)}".`) : e;
  }
}
zt.createHex = qv;
var En = {}, Ld = G && G.__classPrivateFieldSet || function(t, e, r, n, i) {
  if (n === "m")
    throw new TypeError("Private method is not writable");
  if (n === "a" && !i)
    throw new TypeError("Private accessor was defined without a setter");
  if (typeof e == "function" ? t !== e || !i : !e.has(t))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return n === "a" ? i.call(t, r) : i ? i.value = r : e.set(t, r), r;
}, rt = G && G.__classPrivateFieldGet || function(t, e, r, n) {
  if (r === "a" && !n)
    throw new TypeError("Private accessor was defined without a getter");
  if (typeof e == "function" ? t !== e || !n : !e.has(t))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return r === "m" ? n : r === "a" ? n.call(t) : n ? n.value : e.get(t);
}, Ct, $t;
Object.defineProperty(En, "__esModule", { value: !0 });
En.FrozenSet = En.FrozenMap = void 0;
class Jc {
  constructor(e) {
    Ct.set(this, void 0), Ld(this, Ct, new Map(e), "f"), Object.freeze(this);
  }
  get size() {
    return rt(this, Ct, "f").size;
  }
  [(Ct = /* @__PURE__ */ new WeakMap(), Symbol.iterator)]() {
    return rt(this, Ct, "f")[Symbol.iterator]();
  }
  entries() {
    return rt(this, Ct, "f").entries();
  }
  forEach(e, r) {
    return rt(this, Ct, "f").forEach((n, i, s) => e.call(r, n, i, this));
  }
  get(e) {
    return rt(this, Ct, "f").get(e);
  }
  has(e) {
    return rt(this, Ct, "f").has(e);
  }
  keys() {
    return rt(this, Ct, "f").keys();
  }
  values() {
    return rt(this, Ct, "f").values();
  }
  toString() {
    return `FrozenMap(${this.size}) {${this.size > 0 ? ` ${[...this.entries()].map(([e, r]) => `${String(e)} => ${String(r)}`).join(", ")} ` : ""}}`;
  }
}
En.FrozenMap = Jc;
class Qc {
  constructor(e) {
    $t.set(this, void 0), Ld(this, $t, new Set(e), "f"), Object.freeze(this);
  }
  get size() {
    return rt(this, $t, "f").size;
  }
  [($t = /* @__PURE__ */ new WeakMap(), Symbol.iterator)]() {
    return rt(this, $t, "f")[Symbol.iterator]();
  }
  entries() {
    return rt(this, $t, "f").entries();
  }
  forEach(e, r) {
    return rt(this, $t, "f").forEach((n, i, s) => e.call(r, n, i, this));
  }
  has(e) {
    return rt(this, $t, "f").has(e);
  }
  keys() {
    return rt(this, $t, "f").keys();
  }
  values() {
    return rt(this, $t, "f").values();
  }
  toString() {
    return `FrozenSet(${this.size}) {${this.size > 0 ? ` ${[...this.values()].map((e) => String(e)).join(", ")} ` : ""}}`;
  }
}
En.FrozenSet = Qc;
Object.freeze(Jc);
Object.freeze(Jc.prototype);
Object.freeze(Qc);
Object.freeze(Qc.prototype);
var Pd = {}, Zc = {};
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.calculateNumberSize = t.calculateStringSize = t.isASCII = t.isPlainObject = t.ESCAPE_CHARACTERS_REGEXP = t.JsonSize = t.hasProperty = t.isObject = t.isNullOrUndefined = t.isNonEmptyArray = void 0;
  function e(u) {
    return Array.isArray(u) && u.length > 0;
  }
  t.isNonEmptyArray = e;
  function r(u) {
    return u == null;
  }
  t.isNullOrUndefined = r;
  function n(u) {
    return !!u && typeof u == "object" && !Array.isArray(u);
  }
  t.isObject = n;
  const i = (u, h) => Object.hasOwnProperty.call(u, h);
  t.hasProperty = i, function(u) {
    u[u.Null = 4] = "Null", u[u.Comma = 1] = "Comma", u[u.Wrapper = 1] = "Wrapper", u[u.True = 4] = "True", u[u.False = 5] = "False", u[u.Quote = 1] = "Quote", u[u.Colon = 1] = "Colon", u[u.Date = 24] = "Date";
  }(t.JsonSize || (t.JsonSize = {})), t.ESCAPE_CHARACTERS_REGEXP = /"|\\|\n|\r|\t/gu;
  function s(u) {
    if (typeof u != "object" || u === null)
      return !1;
    try {
      let h = u;
      for (; Object.getPrototypeOf(h) !== null; )
        h = Object.getPrototypeOf(h);
      return Object.getPrototypeOf(u) === h;
    } catch {
      return !1;
    }
  }
  t.isPlainObject = s;
  function o(u) {
    return u.charCodeAt(0) <= 127;
  }
  t.isASCII = o;
  function a(u) {
    var h;
    return u.split("").reduce((p, v) => o(v) ? p + 1 : p + 2, 0) + ((h = u.match(t.ESCAPE_CHARACTERS_REGEXP)) !== null && h !== void 0 ? h : []).length;
  }
  t.calculateStringSize = a;
  function c(u) {
    return u.toString().length;
  }
  t.calculateNumberSize = c;
})(Zc);
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.validateJsonAndGetSize = t.getJsonRpcIdValidator = t.assertIsJsonRpcError = t.isJsonRpcError = t.assertIsJsonRpcFailure = t.isJsonRpcFailure = t.assertIsJsonRpcSuccess = t.isJsonRpcSuccess = t.assertIsJsonRpcResponse = t.isJsonRpcResponse = t.assertIsPendingJsonRpcResponse = t.isPendingJsonRpcResponse = t.JsonRpcResponseStruct = t.JsonRpcFailureStruct = t.JsonRpcSuccessStruct = t.PendingJsonRpcResponseStruct = t.assertIsJsonRpcRequest = t.isJsonRpcRequest = t.assertIsJsonRpcNotification = t.isJsonRpcNotification = t.JsonRpcNotificationStruct = t.JsonRpcRequestStruct = t.JsonRpcParamsStruct = t.JsonRpcErrorStruct = t.JsonRpcIdStruct = t.JsonRpcVersionStruct = t.jsonrpc2 = t.isValidJson = t.JsonStruct = void 0;
  const e = Qr, r = Ge, n = Zc;
  t.JsonStruct = (0, e.define)("Json", (M) => {
    const [D] = O(M, !0);
    return D ? !0 : "Expected a valid JSON-serializable value";
  });
  function i(M) {
    return (0, e.is)(M, t.JsonStruct);
  }
  t.isValidJson = i, t.jsonrpc2 = "2.0", t.JsonRpcVersionStruct = (0, e.literal)(t.jsonrpc2), t.JsonRpcIdStruct = (0, e.nullable)((0, e.union)([(0, e.number)(), (0, e.string)()])), t.JsonRpcErrorStruct = (0, e.object)({
    code: (0, e.integer)(),
    message: (0, e.string)(),
    data: (0, e.optional)(t.JsonStruct),
    stack: (0, e.optional)((0, e.string)())
  }), t.JsonRpcParamsStruct = (0, e.optional)((0, e.union)([(0, e.record)((0, e.string)(), t.JsonStruct), (0, e.array)(t.JsonStruct)])), t.JsonRpcRequestStruct = (0, e.object)({
    id: t.JsonRpcIdStruct,
    jsonrpc: t.JsonRpcVersionStruct,
    method: (0, e.string)(),
    params: t.JsonRpcParamsStruct
  }), t.JsonRpcNotificationStruct = (0, e.omit)(t.JsonRpcRequestStruct, ["id"]);
  function s(M) {
    return (0, e.is)(M, t.JsonRpcNotificationStruct);
  }
  t.isJsonRpcNotification = s;
  function o(M, D) {
    (0, r.assertStruct)(M, t.JsonRpcNotificationStruct, "Invalid JSON-RPC notification", D);
  }
  t.assertIsJsonRpcNotification = o;
  function a(M) {
    return (0, e.is)(M, t.JsonRpcRequestStruct);
  }
  t.isJsonRpcRequest = a;
  function c(M, D) {
    (0, r.assertStruct)(M, t.JsonRpcRequestStruct, "Invalid JSON-RPC request", D);
  }
  t.assertIsJsonRpcRequest = c, t.PendingJsonRpcResponseStruct = (0, e.object)({
    id: t.JsonRpcIdStruct,
    jsonrpc: t.JsonRpcVersionStruct,
    result: (0, e.optional)((0, e.unknown)()),
    error: (0, e.optional)(t.JsonRpcErrorStruct)
  }), t.JsonRpcSuccessStruct = (0, e.object)({
    id: t.JsonRpcIdStruct,
    jsonrpc: t.JsonRpcVersionStruct,
    result: t.JsonStruct
  }), t.JsonRpcFailureStruct = (0, e.object)({
    id: t.JsonRpcIdStruct,
    jsonrpc: t.JsonRpcVersionStruct,
    error: t.JsonRpcErrorStruct
  }), t.JsonRpcResponseStruct = (0, e.union)([
    t.JsonRpcSuccessStruct,
    t.JsonRpcFailureStruct
  ]);
  function u(M) {
    return (0, e.is)(M, t.PendingJsonRpcResponseStruct);
  }
  t.isPendingJsonRpcResponse = u;
  function h(M, D) {
    (0, r.assertStruct)(M, t.PendingJsonRpcResponseStruct, "Invalid pending JSON-RPC response", D);
  }
  t.assertIsPendingJsonRpcResponse = h;
  function d(M) {
    return (0, e.is)(M, t.JsonRpcResponseStruct);
  }
  t.isJsonRpcResponse = d;
  function p(M, D) {
    (0, r.assertStruct)(M, t.JsonRpcResponseStruct, "Invalid JSON-RPC response", D);
  }
  t.assertIsJsonRpcResponse = p;
  function v(M) {
    return (0, e.is)(M, t.JsonRpcSuccessStruct);
  }
  t.isJsonRpcSuccess = v;
  function _(M, D) {
    (0, r.assertStruct)(M, t.JsonRpcSuccessStruct, "Invalid JSON-RPC success response", D);
  }
  t.assertIsJsonRpcSuccess = _;
  function A(M) {
    return (0, e.is)(M, t.JsonRpcFailureStruct);
  }
  t.isJsonRpcFailure = A;
  function R(M, D) {
    (0, r.assertStruct)(M, t.JsonRpcFailureStruct, "Invalid JSON-RPC failure response", D);
  }
  t.assertIsJsonRpcFailure = R;
  function y(M) {
    return (0, e.is)(M, t.JsonRpcErrorStruct);
  }
  t.isJsonRpcError = y;
  function E(M, D) {
    (0, r.assertStruct)(M, t.JsonRpcErrorStruct, "Invalid JSON-RPC error", D);
  }
  t.assertIsJsonRpcError = E;
  function x(M) {
    const { permitEmptyString: D, permitFractions: J, permitNull: H } = Object.assign({ permitEmptyString: !0, permitFractions: !1, permitNull: !0 }, M);
    return (X) => !!(typeof X == "number" && (J || Number.isInteger(X)) || typeof X == "string" && (D || X.length > 0) || H && X === null);
  }
  t.getJsonRpcIdValidator = x;
  function O(M, D = !1) {
    const J = /* @__PURE__ */ new Set();
    function H(F, X) {
      if (F === void 0)
        return [!1, 0];
      if (F === null)
        return [!0, X ? 0 : n.JsonSize.Null];
      const de = typeof F;
      try {
        if (de === "function")
          return [!1, 0];
        if (de === "string" || F instanceof String)
          return [
            !0,
            X ? 0 : (0, n.calculateStringSize)(F) + n.JsonSize.Quote * 2
          ];
        if (de === "boolean" || F instanceof Boolean)
          return X ? [!0, 0] : [!0, F == !0 ? n.JsonSize.True : n.JsonSize.False];
        if (de === "number" || F instanceof Number)
          return X ? [!0, 0] : [!0, (0, n.calculateNumberSize)(F)];
        if (F instanceof Date)
          return X ? [!0, 0] : [
            !0,
            // Note: Invalid dates will serialize to null
            isNaN(F.getDate()) ? n.JsonSize.Null : n.JsonSize.Date + n.JsonSize.Quote * 2
          ];
      } catch {
        return [!1, 0];
      }
      if (!(0, n.isPlainObject)(F) && !Array.isArray(F))
        return [!1, 0];
      if (J.has(F))
        return [!1, 0];
      J.add(F);
      try {
        return [
          !0,
          Object.entries(F).reduce(
            (re, [P, B], U, W) => {
              let [z, V] = H(B, X);
              if (!z)
                throw new Error("JSON validation did not pass. Validation process stopped.");
              if (J.delete(F), X)
                return 0;
              const Q = Array.isArray(F) ? 0 : P.length + n.JsonSize.Comma + n.JsonSize.Colon * 2, ie = U < W.length - 1 ? n.JsonSize.Comma : 0;
              return re + Q + V + ie;
            },
            // Starts at 2 because the serialized JSON string data (plain text)
            // will minimally contain {}/[]
            X ? 0 : n.JsonSize.Wrapper * 2
          )
        ];
      } catch {
        return [!1, 0];
      }
    }
    return H(M, D);
  }
  t.validateJsonAndGetSize = O;
})(Pd);
var Sn = {}, pc = { exports: {} }, Ma, Hl;
function Gv() {
  if (Hl)
    return Ma;
  Hl = 1;
  var t = 1e3, e = t * 60, r = e * 60, n = r * 24, i = n * 7, s = n * 365.25;
  Ma = function(h, d) {
    d = d || {};
    var p = typeof h;
    if (p === "string" && h.length > 0)
      return o(h);
    if (p === "number" && isFinite(h))
      return d.long ? c(h) : a(h);
    throw new Error(
      "val is not a non-empty string or a valid number. val=" + JSON.stringify(h)
    );
  };
  function o(h) {
    if (h = String(h), !(h.length > 100)) {
      var d = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
        h
      );
      if (d) {
        var p = parseFloat(d[1]), v = (d[2] || "ms").toLowerCase();
        switch (v) {
          case "years":
          case "year":
          case "yrs":
          case "yr":
          case "y":
            return p * s;
          case "weeks":
          case "week":
          case "w":
            return p * i;
          case "days":
          case "day":
          case "d":
            return p * n;
          case "hours":
          case "hour":
          case "hrs":
          case "hr":
          case "h":
            return p * r;
          case "minutes":
          case "minute":
          case "mins":
          case "min":
          case "m":
            return p * e;
          case "seconds":
          case "second":
          case "secs":
          case "sec":
          case "s":
            return p * t;
          case "milliseconds":
          case "millisecond":
          case "msecs":
          case "msec":
          case "ms":
            return p;
          default:
            return;
        }
      }
    }
  }
  function a(h) {
    var d = Math.abs(h);
    return d >= n ? Math.round(h / n) + "d" : d >= r ? Math.round(h / r) + "h" : d >= e ? Math.round(h / e) + "m" : d >= t ? Math.round(h / t) + "s" : h + "ms";
  }
  function c(h) {
    var d = Math.abs(h);
    return d >= n ? u(h, d, n, "day") : d >= r ? u(h, d, r, "hour") : d >= e ? u(h, d, e, "minute") : d >= t ? u(h, d, t, "second") : h + " ms";
  }
  function u(h, d, p, v) {
    var _ = d >= p * 1.5;
    return Math.round(h / p) + " " + v + (_ ? "s" : "");
  }
  return Ma;
}
function Jv(t) {
  r.debug = r, r.default = r, r.coerce = c, r.disable = s, r.enable = i, r.enabled = o, r.humanize = Gv(), r.destroy = u, Object.keys(t).forEach((h) => {
    r[h] = t[h];
  }), r.names = [], r.skips = [], r.formatters = {};
  function e(h) {
    let d = 0;
    for (let p = 0; p < h.length; p++)
      d = (d << 5) - d + h.charCodeAt(p), d |= 0;
    return r.colors[Math.abs(d) % r.colors.length];
  }
  r.selectColor = e;
  function r(h) {
    let d, p = null, v, _;
    function A(...R) {
      if (!A.enabled)
        return;
      const y = A, E = Number(/* @__PURE__ */ new Date()), x = E - (d || E);
      y.diff = x, y.prev = d, y.curr = E, d = E, R[0] = r.coerce(R[0]), typeof R[0] != "string" && R.unshift("%O");
      let O = 0;
      R[0] = R[0].replace(/%([a-zA-Z%])/g, (D, J) => {
        if (D === "%%")
          return "%";
        O++;
        const H = r.formatters[J];
        if (typeof H == "function") {
          const F = R[O];
          D = H.call(y, F), R.splice(O, 1), O--;
        }
        return D;
      }), r.formatArgs.call(y, R), (y.log || r.log).apply(y, R);
    }
    return A.namespace = h, A.useColors = r.useColors(), A.color = r.selectColor(h), A.extend = n, A.destroy = r.destroy, Object.defineProperty(A, "enabled", {
      enumerable: !0,
      configurable: !1,
      get: () => p !== null ? p : (v !== r.namespaces && (v = r.namespaces, _ = r.enabled(h)), _),
      set: (R) => {
        p = R;
      }
    }), typeof r.init == "function" && r.init(A), A;
  }
  function n(h, d) {
    const p = r(this.namespace + (typeof d > "u" ? ":" : d) + h);
    return p.log = this.log, p;
  }
  function i(h) {
    r.save(h), r.namespaces = h, r.names = [], r.skips = [];
    let d;
    const p = (typeof h == "string" ? h : "").split(/[\s,]+/), v = p.length;
    for (d = 0; d < v; d++)
      p[d] && (h = p[d].replace(/\*/g, ".*?"), h[0] === "-" ? r.skips.push(new RegExp("^" + h.slice(1) + "$")) : r.names.push(new RegExp("^" + h + "$")));
  }
  function s() {
    const h = [
      ...r.names.map(a),
      ...r.skips.map(a).map((d) => "-" + d)
    ].join(",");
    return r.enable(""), h;
  }
  function o(h) {
    if (h[h.length - 1] === "*")
      return !0;
    let d, p;
    for (d = 0, p = r.skips.length; d < p; d++)
      if (r.skips[d].test(h))
        return !1;
    for (d = 0, p = r.names.length; d < p; d++)
      if (r.names[d].test(h))
        return !0;
    return !1;
  }
  function a(h) {
    return h.toString().substring(2, h.toString().length - 2).replace(/\.\*\?$/, "*");
  }
  function c(h) {
    return h instanceof Error ? h.stack || h.message : h;
  }
  function u() {
    console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
  }
  return r.enable(r.load()), r;
}
var Qv = Jv;
(function(t, e) {
  e.formatArgs = n, e.save = i, e.load = s, e.useColors = r, e.storage = o(), e.destroy = (() => {
    let c = !1;
    return () => {
      c || (c = !0, console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."));
    };
  })(), e.colors = [
    "#0000CC",
    "#0000FF",
    "#0033CC",
    "#0033FF",
    "#0066CC",
    "#0066FF",
    "#0099CC",
    "#0099FF",
    "#00CC00",
    "#00CC33",
    "#00CC66",
    "#00CC99",
    "#00CCCC",
    "#00CCFF",
    "#3300CC",
    "#3300FF",
    "#3333CC",
    "#3333FF",
    "#3366CC",
    "#3366FF",
    "#3399CC",
    "#3399FF",
    "#33CC00",
    "#33CC33",
    "#33CC66",
    "#33CC99",
    "#33CCCC",
    "#33CCFF",
    "#6600CC",
    "#6600FF",
    "#6633CC",
    "#6633FF",
    "#66CC00",
    "#66CC33",
    "#9900CC",
    "#9900FF",
    "#9933CC",
    "#9933FF",
    "#99CC00",
    "#99CC33",
    "#CC0000",
    "#CC0033",
    "#CC0066",
    "#CC0099",
    "#CC00CC",
    "#CC00FF",
    "#CC3300",
    "#CC3333",
    "#CC3366",
    "#CC3399",
    "#CC33CC",
    "#CC33FF",
    "#CC6600",
    "#CC6633",
    "#CC9900",
    "#CC9933",
    "#CCCC00",
    "#CCCC33",
    "#FF0000",
    "#FF0033",
    "#FF0066",
    "#FF0099",
    "#FF00CC",
    "#FF00FF",
    "#FF3300",
    "#FF3333",
    "#FF3366",
    "#FF3399",
    "#FF33CC",
    "#FF33FF",
    "#FF6600",
    "#FF6633",
    "#FF9900",
    "#FF9933",
    "#FFCC00",
    "#FFCC33"
  ];
  function r() {
    return typeof window < "u" && window.process && (window.process.type === "renderer" || window.process.__nwjs) ? !0 : typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/) ? !1 : typeof document < "u" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || // Is firebug? http://stackoverflow.com/a/398120/376773
    typeof window < "u" && window.console && (window.console.firebug || window.console.exception && window.console.table) || // Is firefox >= v31?
    // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
    typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || // Double check webkit in userAgent just in case we are in a worker
    typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
  }
  function n(c) {
    if (c[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + c[0] + (this.useColors ? "%c " : " ") + "+" + t.exports.humanize(this.diff), !this.useColors)
      return;
    const u = "color: " + this.color;
    c.splice(1, 0, u, "color: inherit");
    let h = 0, d = 0;
    c[0].replace(/%[a-zA-Z%]/g, (p) => {
      p !== "%%" && (h++, p === "%c" && (d = h));
    }), c.splice(d, 0, u);
  }
  e.log = console.debug || console.log || (() => {
  });
  function i(c) {
    try {
      c ? e.storage.setItem("debug", c) : e.storage.removeItem("debug");
    } catch {
    }
  }
  function s() {
    let c;
    try {
      c = e.storage.getItem("debug");
    } catch {
    }
    return !c && typeof process < "u" && "env" in process && (c = process.env.DEBUG), c;
  }
  function o() {
    try {
      return localStorage;
    } catch {
    }
  }
  t.exports = Qv(e);
  const { formatters: a } = t.exports;
  a.j = function(c) {
    try {
      return JSON.stringify(c);
    } catch (u) {
      return "[UnexpectedJSONParseError]: " + u.message;
    }
  };
})(pc, pc.exports);
var Zv = pc.exports, Yv = G && G.__importDefault || function(t) {
  return t && t.__esModule ? t : { default: t };
};
Object.defineProperty(Sn, "__esModule", { value: !0 });
Sn.createModuleLogger = Sn.createProjectLogger = void 0;
const Kv = Yv(Zv), Xv = (0, Kv.default)("metamask");
function ew(t) {
  return Xv.extend(t);
}
Sn.createProjectLogger = ew;
function tw(t, e) {
  return t.extend(e);
}
Sn.createModuleLogger = tw;
var qt = {};
Object.defineProperty(qt, "__esModule", { value: !0 });
qt.hexToBigInt = qt.hexToNumber = qt.bigIntToHex = qt.numberToHex = void 0;
const dn = Ge, ci = Ci, rw = (t) => ((0, dn.assert)(typeof t == "number", "Value must be a number."), (0, dn.assert)(t >= 0, "Value must be a non-negative number."), (0, dn.assert)(Number.isSafeInteger(t), "Value is not a safe integer. Use `bigIntToHex` instead."), (0, ci.add0x)(t.toString(16)));
qt.numberToHex = rw;
const nw = (t) => ((0, dn.assert)(typeof t == "bigint", "Value must be a bigint."), (0, dn.assert)(t >= 0, "Value must be a non-negative bigint."), (0, ci.add0x)(t.toString(16)));
qt.bigIntToHex = nw;
const iw = (t) => {
  (0, ci.assertIsHexString)(t);
  const e = parseInt(t, 16);
  return (0, dn.assert)(Number.isSafeInteger(e), "Value is not a safe integer. Use `hexToBigInt` instead."), e;
};
qt.hexToNumber = iw;
const sw = (t) => ((0, ci.assertIsHexString)(t), BigInt((0, ci.add0x)(t)));
qt.hexToBigInt = sw;
var Bd = {};
Object.defineProperty(Bd, "__esModule", { value: !0 });
var $d = {};
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.timeSince = t.inMilliseconds = t.Duration = void 0, function(s) {
    s[s.Millisecond = 1] = "Millisecond", s[s.Second = 1e3] = "Second", s[s.Minute = 6e4] = "Minute", s[s.Hour = 36e5] = "Hour", s[s.Day = 864e5] = "Day", s[s.Week = 6048e5] = "Week", s[s.Year = 31536e6] = "Year";
  }(t.Duration || (t.Duration = {}));
  const e = (s) => Number.isInteger(s) && s >= 0, r = (s, o) => {
    if (!e(s))
      throw new Error(`"${o}" must be a non-negative integer. Received: "${s}".`);
  };
  function n(s, o) {
    return r(s, "count"), s * o;
  }
  t.inMilliseconds = n;
  function i(s) {
    return r(s, "timestamp"), Date.now() - s;
  }
  t.timeSince = i;
})($d);
var Dd = {}, gc = { exports: {} };
const ow = "2.0.0", Fd = 256, aw = Number.MAX_SAFE_INTEGER || /* istanbul ignore next */
9007199254740991, cw = 16, uw = Fd - 6, lw = [
  "major",
  "premajor",
  "minor",
  "preminor",
  "patch",
  "prepatch",
  "prerelease"
];
var $s = {
  MAX_LENGTH: Fd,
  MAX_SAFE_COMPONENT_LENGTH: cw,
  MAX_SAFE_BUILD_LENGTH: uw,
  MAX_SAFE_INTEGER: aw,
  RELEASE_TYPES: lw,
  SEMVER_SPEC_VERSION: ow,
  FLAG_INCLUDE_PRERELEASE: 1,
  FLAG_LOOSE: 2
};
const fw = typeof process == "object" && process.env && process.env.NODE_DEBUG && /\bsemver\b/i.test(process.env.NODE_DEBUG) ? (...t) => console.error("SEMVER", ...t) : () => {
};
var Ds = fw;
(function(t, e) {
  const {
    MAX_SAFE_COMPONENT_LENGTH: r,
    MAX_SAFE_BUILD_LENGTH: n,
    MAX_LENGTH: i
  } = $s, s = Ds;
  e = t.exports = {};
  const o = e.re = [], a = e.safeRe = [], c = e.src = [], u = e.t = {};
  let h = 0;
  const d = "[a-zA-Z0-9-]", p = [
    ["\\s", 1],
    ["\\d", i],
    [d, n]
  ], v = (A) => {
    for (const [R, y] of p)
      A = A.split(`${R}*`).join(`${R}{0,${y}}`).split(`${R}+`).join(`${R}{1,${y}}`);
    return A;
  }, _ = (A, R, y) => {
    const E = v(R), x = h++;
    s(A, x, R), u[A] = x, c[x] = R, o[x] = new RegExp(R, y ? "g" : void 0), a[x] = new RegExp(E, y ? "g" : void 0);
  };
  _("NUMERICIDENTIFIER", "0|[1-9]\\d*"), _("NUMERICIDENTIFIERLOOSE", "\\d+"), _("NONNUMERICIDENTIFIER", `\\d*[a-zA-Z-]${d}*`), _("MAINVERSION", `(${c[u.NUMERICIDENTIFIER]})\\.(${c[u.NUMERICIDENTIFIER]})\\.(${c[u.NUMERICIDENTIFIER]})`), _("MAINVERSIONLOOSE", `(${c[u.NUMERICIDENTIFIERLOOSE]})\\.(${c[u.NUMERICIDENTIFIERLOOSE]})\\.(${c[u.NUMERICIDENTIFIERLOOSE]})`), _("PRERELEASEIDENTIFIER", `(?:${c[u.NUMERICIDENTIFIER]}|${c[u.NONNUMERICIDENTIFIER]})`), _("PRERELEASEIDENTIFIERLOOSE", `(?:${c[u.NUMERICIDENTIFIERLOOSE]}|${c[u.NONNUMERICIDENTIFIER]})`), _("PRERELEASE", `(?:-(${c[u.PRERELEASEIDENTIFIER]}(?:\\.${c[u.PRERELEASEIDENTIFIER]})*))`), _("PRERELEASELOOSE", `(?:-?(${c[u.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${c[u.PRERELEASEIDENTIFIERLOOSE]})*))`), _("BUILDIDENTIFIER", `${d}+`), _("BUILD", `(?:\\+(${c[u.BUILDIDENTIFIER]}(?:\\.${c[u.BUILDIDENTIFIER]})*))`), _("FULLPLAIN", `v?${c[u.MAINVERSION]}${c[u.PRERELEASE]}?${c[u.BUILD]}?`), _("FULL", `^${c[u.FULLPLAIN]}$`), _("LOOSEPLAIN", `[v=\\s]*${c[u.MAINVERSIONLOOSE]}${c[u.PRERELEASELOOSE]}?${c[u.BUILD]}?`), _("LOOSE", `^${c[u.LOOSEPLAIN]}$`), _("GTLT", "((?:<|>)?=?)"), _("XRANGEIDENTIFIERLOOSE", `${c[u.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`), _("XRANGEIDENTIFIER", `${c[u.NUMERICIDENTIFIER]}|x|X|\\*`), _("XRANGEPLAIN", `[v=\\s]*(${c[u.XRANGEIDENTIFIER]})(?:\\.(${c[u.XRANGEIDENTIFIER]})(?:\\.(${c[u.XRANGEIDENTIFIER]})(?:${c[u.PRERELEASE]})?${c[u.BUILD]}?)?)?`), _("XRANGEPLAINLOOSE", `[v=\\s]*(${c[u.XRANGEIDENTIFIERLOOSE]})(?:\\.(${c[u.XRANGEIDENTIFIERLOOSE]})(?:\\.(${c[u.XRANGEIDENTIFIERLOOSE]})(?:${c[u.PRERELEASELOOSE]})?${c[u.BUILD]}?)?)?`), _("XRANGE", `^${c[u.GTLT]}\\s*${c[u.XRANGEPLAIN]}$`), _("XRANGELOOSE", `^${c[u.GTLT]}\\s*${c[u.XRANGEPLAINLOOSE]}$`), _("COERCE", `(^|[^\\d])(\\d{1,${r}})(?:\\.(\\d{1,${r}}))?(?:\\.(\\d{1,${r}}))?(?:$|[^\\d])`), _("COERCERTL", c[u.COERCE], !0), _("LONETILDE", "(?:~>?)"), _("TILDETRIM", `(\\s*)${c[u.LONETILDE]}\\s+`, !0), e.tildeTrimReplace = "$1~", _("TILDE", `^${c[u.LONETILDE]}${c[u.XRANGEPLAIN]}$`), _("TILDELOOSE", `^${c[u.LONETILDE]}${c[u.XRANGEPLAINLOOSE]}$`), _("LONECARET", "(?:\\^)"), _("CARETTRIM", `(\\s*)${c[u.LONECARET]}\\s+`, !0), e.caretTrimReplace = "$1^", _("CARET", `^${c[u.LONECARET]}${c[u.XRANGEPLAIN]}$`), _("CARETLOOSE", `^${c[u.LONECARET]}${c[u.XRANGEPLAINLOOSE]}$`), _("COMPARATORLOOSE", `^${c[u.GTLT]}\\s*(${c[u.LOOSEPLAIN]})$|^$`), _("COMPARATOR", `^${c[u.GTLT]}\\s*(${c[u.FULLPLAIN]})$|^$`), _("COMPARATORTRIM", `(\\s*)${c[u.GTLT]}\\s*(${c[u.LOOSEPLAIN]}|${c[u.XRANGEPLAIN]})`, !0), e.comparatorTrimReplace = "$1$2$3", _("HYPHENRANGE", `^\\s*(${c[u.XRANGEPLAIN]})\\s+-\\s+(${c[u.XRANGEPLAIN]})\\s*$`), _("HYPHENRANGELOOSE", `^\\s*(${c[u.XRANGEPLAINLOOSE]})\\s+-\\s+(${c[u.XRANGEPLAINLOOSE]})\\s*$`), _("STAR", "(<|>)?=?\\s*\\*"), _("GTE0", "^\\s*>=\\s*0\\.0\\.0\\s*$"), _("GTE0PRE", "^\\s*>=\\s*0\\.0\\.0-0\\s*$");
})(gc, gc.exports);
var Ii = gc.exports;
const hw = Object.freeze({ loose: !0 }), dw = Object.freeze({}), pw = (t) => t ? typeof t != "object" ? hw : t : dw;
var Yc = pw;
const zl = /^[0-9]+$/, jd = (t, e) => {
  const r = zl.test(t), n = zl.test(e);
  return r && n && (t = +t, e = +e), t === e ? 0 : r && !n ? -1 : n && !r ? 1 : t < e ? -1 : 1;
}, gw = (t, e) => jd(e, t);
var Ud = {
  compareIdentifiers: jd,
  rcompareIdentifiers: gw
};
const Wi = Ds, { MAX_LENGTH: ql, MAX_SAFE_INTEGER: Vi } = $s, { safeRe: Gl, t: Jl } = Ii, bw = Yc, { compareIdentifiers: en } = Ud;
let yw = class Ft {
  constructor(e, r) {
    if (r = bw(r), e instanceof Ft) {
      if (e.loose === !!r.loose && e.includePrerelease === !!r.includePrerelease)
        return e;
      e = e.version;
    } else if (typeof e != "string")
      throw new TypeError(`Invalid version. Must be a string. Got type "${typeof e}".`);
    if (e.length > ql)
      throw new TypeError(
        `version is longer than ${ql} characters`
      );
    Wi("SemVer", e, r), this.options = r, this.loose = !!r.loose, this.includePrerelease = !!r.includePrerelease;
    const n = e.trim().match(r.loose ? Gl[Jl.LOOSE] : Gl[Jl.FULL]);
    if (!n)
      throw new TypeError(`Invalid Version: ${e}`);
    if (this.raw = e, this.major = +n[1], this.minor = +n[2], this.patch = +n[3], this.major > Vi || this.major < 0)
      throw new TypeError("Invalid major version");
    if (this.minor > Vi || this.minor < 0)
      throw new TypeError("Invalid minor version");
    if (this.patch > Vi || this.patch < 0)
      throw new TypeError("Invalid patch version");
    n[4] ? this.prerelease = n[4].split(".").map((i) => {
      if (/^[0-9]+$/.test(i)) {
        const s = +i;
        if (s >= 0 && s < Vi)
          return s;
      }
      return i;
    }) : this.prerelease = [], this.build = n[5] ? n[5].split(".") : [], this.format();
  }
  format() {
    return this.version = `${this.major}.${this.minor}.${this.patch}`, this.prerelease.length && (this.version += `-${this.prerelease.join(".")}`), this.version;
  }
  toString() {
    return this.version;
  }
  compare(e) {
    if (Wi("SemVer.compare", this.version, this.options, e), !(e instanceof Ft)) {
      if (typeof e == "string" && e === this.version)
        return 0;
      e = new Ft(e, this.options);
    }
    return e.version === this.version ? 0 : this.compareMain(e) || this.comparePre(e);
  }
  compareMain(e) {
    return e instanceof Ft || (e = new Ft(e, this.options)), en(this.major, e.major) || en(this.minor, e.minor) || en(this.patch, e.patch);
  }
  comparePre(e) {
    if (e instanceof Ft || (e = new Ft(e, this.options)), this.prerelease.length && !e.prerelease.length)
      return -1;
    if (!this.prerelease.length && e.prerelease.length)
      return 1;
    if (!this.prerelease.length && !e.prerelease.length)
      return 0;
    let r = 0;
    do {
      const n = this.prerelease[r], i = e.prerelease[r];
      if (Wi("prerelease compare", r, n, i), n === void 0 && i === void 0)
        return 0;
      if (i === void 0)
        return 1;
      if (n === void 0)
        return -1;
      if (n === i)
        continue;
      return en(n, i);
    } while (++r);
  }
  compareBuild(e) {
    e instanceof Ft || (e = new Ft(e, this.options));
    let r = 0;
    do {
      const n = this.build[r], i = e.build[r];
      if (Wi("prerelease compare", r, n, i), n === void 0 && i === void 0)
        return 0;
      if (i === void 0)
        return 1;
      if (n === void 0)
        return -1;
      if (n === i)
        continue;
      return en(n, i);
    } while (++r);
  }
  // preminor will bump the version up to the next minor release, and immediately
  // down to pre-release. premajor and prepatch work the same way.
  inc(e, r, n) {
    switch (e) {
      case "premajor":
        this.prerelease.length = 0, this.patch = 0, this.minor = 0, this.major++, this.inc("pre", r, n);
        break;
      case "preminor":
        this.prerelease.length = 0, this.patch = 0, this.minor++, this.inc("pre", r, n);
        break;
      case "prepatch":
        this.prerelease.length = 0, this.inc("patch", r, n), this.inc("pre", r, n);
        break;
      case "prerelease":
        this.prerelease.length === 0 && this.inc("patch", r, n), this.inc("pre", r, n);
        break;
      case "major":
        (this.minor !== 0 || this.patch !== 0 || this.prerelease.length === 0) && this.major++, this.minor = 0, this.patch = 0, this.prerelease = [];
        break;
      case "minor":
        (this.patch !== 0 || this.prerelease.length === 0) && this.minor++, this.patch = 0, this.prerelease = [];
        break;
      case "patch":
        this.prerelease.length === 0 && this.patch++, this.prerelease = [];
        break;
      case "pre": {
        const i = Number(n) ? 1 : 0;
        if (!r && n === !1)
          throw new Error("invalid increment argument: identifier is empty");
        if (this.prerelease.length === 0)
          this.prerelease = [i];
        else {
          let s = this.prerelease.length;
          for (; --s >= 0; )
            typeof this.prerelease[s] == "number" && (this.prerelease[s]++, s = -2);
          if (s === -1) {
            if (r === this.prerelease.join(".") && n === !1)
              throw new Error("invalid increment argument: identifier already exists");
            this.prerelease.push(i);
          }
        }
        if (r) {
          let s = [r, i];
          n === !1 && (s = [r]), en(this.prerelease[0], r) === 0 ? isNaN(this.prerelease[1]) && (this.prerelease = s) : this.prerelease = s;
        }
        break;
      }
      default:
        throw new Error(`invalid increment argument: ${e}`);
    }
    return this.raw = this.format(), this.build.length && (this.raw += `+${this.build.join(".")}`), this;
  }
};
var st = yw;
const Ql = st, mw = (t, e, r = !1) => {
  if (t instanceof Ql)
    return t;
  try {
    return new Ql(t, e);
  } catch (n) {
    if (!r)
      return null;
    throw n;
  }
};
var Fn = mw;
const vw = Fn, ww = (t, e) => {
  const r = vw(t, e);
  return r ? r.version : null;
};
var _w = ww;
const Ew = Fn, Sw = (t, e) => {
  const r = Ew(t.trim().replace(/^[=v]+/, ""), e);
  return r ? r.version : null;
};
var xw = Sw;
const Zl = st, Cw = (t, e, r, n, i) => {
  typeof r == "string" && (i = n, n = r, r = void 0);
  try {
    return new Zl(
      t instanceof Zl ? t.version : t,
      r
    ).inc(e, n, i).version;
  } catch {
    return null;
  }
};
var Iw = Cw;
const Yl = Fn, Rw = (t, e) => {
  const r = Yl(t, null, !0), n = Yl(e, null, !0), i = r.compare(n);
  if (i === 0)
    return null;
  const s = i > 0, o = s ? r : n, a = s ? n : r, c = !!o.prerelease.length;
  if (!!a.prerelease.length && !c)
    return !a.patch && !a.minor ? "major" : o.patch ? "patch" : o.minor ? "minor" : "major";
  const h = c ? "pre" : "";
  return r.major !== n.major ? h + "major" : r.minor !== n.minor ? h + "minor" : r.patch !== n.patch ? h + "patch" : "prerelease";
};
var Aw = Rw;
const Tw = st, Mw = (t, e) => new Tw(t, e).major;
var Ow = Mw;
const kw = st, Nw = (t, e) => new kw(t, e).minor;
var Lw = Nw;
const Pw = st, Bw = (t, e) => new Pw(t, e).patch;
var $w = Bw;
const Dw = Fn, Fw = (t, e) => {
  const r = Dw(t, e);
  return r && r.prerelease.length ? r.prerelease : null;
};
var jw = Fw;
const Kl = st, Uw = (t, e, r) => new Kl(t, r).compare(new Kl(e, r));
var kt = Uw;
const Ww = kt, Vw = (t, e, r) => Ww(e, t, r);
var Hw = Vw;
const zw = kt, qw = (t, e) => zw(t, e, !0);
var Gw = qw;
const Xl = st, Jw = (t, e, r) => {
  const n = new Xl(t, r), i = new Xl(e, r);
  return n.compare(i) || n.compareBuild(i);
};
var Kc = Jw;
const Qw = Kc, Zw = (t, e) => t.sort((r, n) => Qw(r, n, e));
var Yw = Zw;
const Kw = Kc, Xw = (t, e) => t.sort((r, n) => Kw(n, r, e));
var e_ = Xw;
const t_ = kt, r_ = (t, e, r) => t_(t, e, r) > 0;
var Fs = r_;
const n_ = kt, i_ = (t, e, r) => n_(t, e, r) < 0;
var Xc = i_;
const s_ = kt, o_ = (t, e, r) => s_(t, e, r) === 0;
var Wd = o_;
const a_ = kt, c_ = (t, e, r) => a_(t, e, r) !== 0;
var Vd = c_;
const u_ = kt, l_ = (t, e, r) => u_(t, e, r) >= 0;
var eu = l_;
const f_ = kt, h_ = (t, e, r) => f_(t, e, r) <= 0;
var tu = h_;
const d_ = Wd, p_ = Vd, g_ = Fs, b_ = eu, y_ = Xc, m_ = tu, v_ = (t, e, r, n) => {
  switch (e) {
    case "===":
      return typeof t == "object" && (t = t.version), typeof r == "object" && (r = r.version), t === r;
    case "!==":
      return typeof t == "object" && (t = t.version), typeof r == "object" && (r = r.version), t !== r;
    case "":
    case "=":
    case "==":
      return d_(t, r, n);
    case "!=":
      return p_(t, r, n);
    case ">":
      return g_(t, r, n);
    case ">=":
      return b_(t, r, n);
    case "<":
      return y_(t, r, n);
    case "<=":
      return m_(t, r, n);
    default:
      throw new TypeError(`Invalid operator: ${e}`);
  }
};
var Hd = v_;
const w_ = st, __ = Fn, { safeRe: Hi, t: zi } = Ii, E_ = (t, e) => {
  if (t instanceof w_)
    return t;
  if (typeof t == "number" && (t = String(t)), typeof t != "string")
    return null;
  e = e || {};
  let r = null;
  if (!e.rtl)
    r = t.match(Hi[zi.COERCE]);
  else {
    let n;
    for (; (n = Hi[zi.COERCERTL].exec(t)) && (!r || r.index + r[0].length !== t.length); )
      (!r || n.index + n[0].length !== r.index + r[0].length) && (r = n), Hi[zi.COERCERTL].lastIndex = n.index + n[1].length + n[2].length;
    Hi[zi.COERCERTL].lastIndex = -1;
  }
  return r === null ? null : __(`${r[2]}.${r[3] || "0"}.${r[4] || "0"}`, e);
};
var S_ = E_, Oa, ef;
function x_() {
  return ef || (ef = 1, Oa = function(t) {
    t.prototype[Symbol.iterator] = function* () {
      for (let e = this.head; e; e = e.next)
        yield e.value;
    };
  }), Oa;
}
var C_ = ye;
ye.Node = Fr;
ye.create = ye;
function ye(t) {
  var e = this;
  if (e instanceof ye || (e = new ye()), e.tail = null, e.head = null, e.length = 0, t && typeof t.forEach == "function")
    t.forEach(function(i) {
      e.push(i);
    });
  else if (arguments.length > 0)
    for (var r = 0, n = arguments.length; r < n; r++)
      e.push(arguments[r]);
  return e;
}
ye.prototype.removeNode = function(t) {
  if (t.list !== this)
    throw new Error("removing node which does not belong to this list");
  var e = t.next, r = t.prev;
  return e && (e.prev = r), r && (r.next = e), t === this.head && (this.head = e), t === this.tail && (this.tail = r), t.list.length--, t.next = null, t.prev = null, t.list = null, e;
};
ye.prototype.unshiftNode = function(t) {
  if (t !== this.head) {
    t.list && t.list.removeNode(t);
    var e = this.head;
    t.list = this, t.next = e, e && (e.prev = t), this.head = t, this.tail || (this.tail = t), this.length++;
  }
};
ye.prototype.pushNode = function(t) {
  if (t !== this.tail) {
    t.list && t.list.removeNode(t);
    var e = this.tail;
    t.list = this, t.prev = e, e && (e.next = t), this.tail = t, this.head || (this.head = t), this.length++;
  }
};
ye.prototype.push = function() {
  for (var t = 0, e = arguments.length; t < e; t++)
    R_(this, arguments[t]);
  return this.length;
};
ye.prototype.unshift = function() {
  for (var t = 0, e = arguments.length; t < e; t++)
    A_(this, arguments[t]);
  return this.length;
};
ye.prototype.pop = function() {
  if (this.tail) {
    var t = this.tail.value;
    return this.tail = this.tail.prev, this.tail ? this.tail.next = null : this.head = null, this.length--, t;
  }
};
ye.prototype.shift = function() {
  if (this.head) {
    var t = this.head.value;
    return this.head = this.head.next, this.head ? this.head.prev = null : this.tail = null, this.length--, t;
  }
};
ye.prototype.forEach = function(t, e) {
  e = e || this;
  for (var r = this.head, n = 0; r !== null; n++)
    t.call(e, r.value, n, this), r = r.next;
};
ye.prototype.forEachReverse = function(t, e) {
  e = e || this;
  for (var r = this.tail, n = this.length - 1; r !== null; n--)
    t.call(e, r.value, n, this), r = r.prev;
};
ye.prototype.get = function(t) {
  for (var e = 0, r = this.head; r !== null && e < t; e++)
    r = r.next;
  if (e === t && r !== null)
    return r.value;
};
ye.prototype.getReverse = function(t) {
  for (var e = 0, r = this.tail; r !== null && e < t; e++)
    r = r.prev;
  if (e === t && r !== null)
    return r.value;
};
ye.prototype.map = function(t, e) {
  e = e || this;
  for (var r = new ye(), n = this.head; n !== null; )
    r.push(t.call(e, n.value, this)), n = n.next;
  return r;
};
ye.prototype.mapReverse = function(t, e) {
  e = e || this;
  for (var r = new ye(), n = this.tail; n !== null; )
    r.push(t.call(e, n.value, this)), n = n.prev;
  return r;
};
ye.prototype.reduce = function(t, e) {
  var r, n = this.head;
  if (arguments.length > 1)
    r = e;
  else if (this.head)
    n = this.head.next, r = this.head.value;
  else
    throw new TypeError("Reduce of empty list with no initial value");
  for (var i = 0; n !== null; i++)
    r = t(r, n.value, i), n = n.next;
  return r;
};
ye.prototype.reduceReverse = function(t, e) {
  var r, n = this.tail;
  if (arguments.length > 1)
    r = e;
  else if (this.tail)
    n = this.tail.prev, r = this.tail.value;
  else
    throw new TypeError("Reduce of empty list with no initial value");
  for (var i = this.length - 1; n !== null; i--)
    r = t(r, n.value, i), n = n.prev;
  return r;
};
ye.prototype.toArray = function() {
  for (var t = new Array(this.length), e = 0, r = this.head; r !== null; e++)
    t[e] = r.value, r = r.next;
  return t;
};
ye.prototype.toArrayReverse = function() {
  for (var t = new Array(this.length), e = 0, r = this.tail; r !== null; e++)
    t[e] = r.value, r = r.prev;
  return t;
};
ye.prototype.slice = function(t, e) {
  e = e || this.length, e < 0 && (e += this.length), t = t || 0, t < 0 && (t += this.length);
  var r = new ye();
  if (e < t || e < 0)
    return r;
  t < 0 && (t = 0), e > this.length && (e = this.length);
  for (var n = 0, i = this.head; i !== null && n < t; n++)
    i = i.next;
  for (; i !== null && n < e; n++, i = i.next)
    r.push(i.value);
  return r;
};
ye.prototype.sliceReverse = function(t, e) {
  e = e || this.length, e < 0 && (e += this.length), t = t || 0, t < 0 && (t += this.length);
  var r = new ye();
  if (e < t || e < 0)
    return r;
  t < 0 && (t = 0), e > this.length && (e = this.length);
  for (var n = this.length, i = this.tail; i !== null && n > e; n--)
    i = i.prev;
  for (; i !== null && n > t; n--, i = i.prev)
    r.push(i.value);
  return r;
};
ye.prototype.splice = function(t, e, ...r) {
  t > this.length && (t = this.length - 1), t < 0 && (t = this.length + t);
  for (var n = 0, i = this.head; i !== null && n < t; n++)
    i = i.next;
  for (var s = [], n = 0; i && n < e; n++)
    s.push(i.value), i = this.removeNode(i);
  i === null && (i = this.tail), i !== this.head && i !== this.tail && (i = i.prev);
  for (var n = 0; n < r.length; n++)
    i = I_(this, i, r[n]);
  return s;
};
ye.prototype.reverse = function() {
  for (var t = this.head, e = this.tail, r = t; r !== null; r = r.prev) {
    var n = r.prev;
    r.prev = r.next, r.next = n;
  }
  return this.head = e, this.tail = t, this;
};
function I_(t, e, r) {
  var n = e === t.head ? new Fr(r, null, e, t) : new Fr(r, e, e.next, t);
  return n.next === null && (t.tail = n), n.prev === null && (t.head = n), t.length++, n;
}
function R_(t, e) {
  t.tail = new Fr(e, t.tail, null, t), t.head || (t.head = t.tail), t.length++;
}
function A_(t, e) {
  t.head = new Fr(e, null, t.head, t), t.tail || (t.tail = t.head), t.length++;
}
function Fr(t, e, r, n) {
  if (!(this instanceof Fr))
    return new Fr(t, e, r, n);
  this.list = n, this.value = t, e ? (e.next = this, this.prev = e) : this.prev = null, r ? (r.prev = this, this.next = r) : this.next = null;
}
try {
  x_()(ye);
} catch {
}
const T_ = C_, Or = Symbol("max"), tr = Symbol("length"), tn = Symbol("lengthCalculator"), ni = Symbol("allowStale"), Lr = Symbol("maxAge"), Kt = Symbol("dispose"), tf = Symbol("noDisposeOnSet"), Ue = Symbol("lruList"), At = Symbol("cache"), zd = Symbol("updateAgeOnGet"), ka = () => 1;
class M_ {
  constructor(e) {
    if (typeof e == "number" && (e = { max: e }), e || (e = {}), e.max && (typeof e.max != "number" || e.max < 0))
      throw new TypeError("max must be a non-negative number");
    this[Or] = e.max || 1 / 0;
    const r = e.length || ka;
    if (this[tn] = typeof r != "function" ? ka : r, this[ni] = e.stale || !1, e.maxAge && typeof e.maxAge != "number")
      throw new TypeError("maxAge must be a number");
    this[Lr] = e.maxAge || 0, this[Kt] = e.dispose, this[tf] = e.noDisposeOnSet || !1, this[zd] = e.updateAgeOnGet || !1, this.reset();
  }
  // resize the cache when the max changes.
  set max(e) {
    if (typeof e != "number" || e < 0)
      throw new TypeError("max must be a non-negative number");
    this[Or] = e || 1 / 0, qn(this);
  }
  get max() {
    return this[Or];
  }
  set allowStale(e) {
    this[ni] = !!e;
  }
  get allowStale() {
    return this[ni];
  }
  set maxAge(e) {
    if (typeof e != "number")
      throw new TypeError("maxAge must be a non-negative number");
    this[Lr] = e, qn(this);
  }
  get maxAge() {
    return this[Lr];
  }
  // resize the cache when the lengthCalculator changes.
  set lengthCalculator(e) {
    typeof e != "function" && (e = ka), e !== this[tn] && (this[tn] = e, this[tr] = 0, this[Ue].forEach((r) => {
      r.length = this[tn](r.value, r.key), this[tr] += r.length;
    })), qn(this);
  }
  get lengthCalculator() {
    return this[tn];
  }
  get length() {
    return this[tr];
  }
  get itemCount() {
    return this[Ue].length;
  }
  rforEach(e, r) {
    r = r || this;
    for (let n = this[Ue].tail; n !== null; ) {
      const i = n.prev;
      rf(this, e, n, r), n = i;
    }
  }
  forEach(e, r) {
    r = r || this;
    for (let n = this[Ue].head; n !== null; ) {
      const i = n.next;
      rf(this, e, n, r), n = i;
    }
  }
  keys() {
    return this[Ue].toArray().map((e) => e.key);
  }
  values() {
    return this[Ue].toArray().map((e) => e.value);
  }
  reset() {
    this[Kt] && this[Ue] && this[Ue].length && this[Ue].forEach((e) => this[Kt](e.key, e.value)), this[At] = /* @__PURE__ */ new Map(), this[Ue] = new T_(), this[tr] = 0;
  }
  dump() {
    return this[Ue].map((e) => us(this, e) ? !1 : {
      k: e.key,
      v: e.value,
      e: e.now + (e.maxAge || 0)
    }).toArray().filter((e) => e);
  }
  dumpLru() {
    return this[Ue];
  }
  set(e, r, n) {
    if (n = n || this[Lr], n && typeof n != "number")
      throw new TypeError("maxAge must be a number");
    const i = n ? Date.now() : 0, s = this[tn](r, e);
    if (this[At].has(e)) {
      if (s > this[Or])
        return pn(this, this[At].get(e)), !1;
      const c = this[At].get(e).value;
      return this[Kt] && (this[tf] || this[Kt](e, c.value)), c.now = i, c.maxAge = n, c.value = r, this[tr] += s - c.length, c.length = s, this.get(e), qn(this), !0;
    }
    const o = new O_(e, r, s, i, n);
    return o.length > this[Or] ? (this[Kt] && this[Kt](e, r), !1) : (this[tr] += o.length, this[Ue].unshift(o), this[At].set(e, this[Ue].head), qn(this), !0);
  }
  has(e) {
    if (!this[At].has(e))
      return !1;
    const r = this[At].get(e).value;
    return !us(this, r);
  }
  get(e) {
    return Na(this, e, !0);
  }
  peek(e) {
    return Na(this, e, !1);
  }
  pop() {
    const e = this[Ue].tail;
    return e ? (pn(this, e), e.value) : null;
  }
  del(e) {
    pn(this, this[At].get(e));
  }
  load(e) {
    this.reset();
    const r = Date.now();
    for (let n = e.length - 1; n >= 0; n--) {
      const i = e[n], s = i.e || 0;
      if (s === 0)
        this.set(i.k, i.v);
      else {
        const o = s - r;
        o > 0 && this.set(i.k, i.v, o);
      }
    }
  }
  prune() {
    this[At].forEach((e, r) => Na(this, r, !1));
  }
}
const Na = (t, e, r) => {
  const n = t[At].get(e);
  if (n) {
    const i = n.value;
    if (us(t, i)) {
      if (pn(t, n), !t[ni])
        return;
    } else
      r && (t[zd] && (n.value.now = Date.now()), t[Ue].unshiftNode(n));
    return i.value;
  }
}, us = (t, e) => {
  if (!e || !e.maxAge && !t[Lr])
    return !1;
  const r = Date.now() - e.now;
  return e.maxAge ? r > e.maxAge : t[Lr] && r > t[Lr];
}, qn = (t) => {
  if (t[tr] > t[Or])
    for (let e = t[Ue].tail; t[tr] > t[Or] && e !== null; ) {
      const r = e.prev;
      pn(t, e), e = r;
    }
}, pn = (t, e) => {
  if (e) {
    const r = e.value;
    t[Kt] && t[Kt](r.key, r.value), t[tr] -= r.length, t[At].delete(r.key), t[Ue].removeNode(e);
  }
};
class O_ {
  constructor(e, r, n, i, s) {
    this.key = e, this.value = r, this.length = n, this.now = i, this.maxAge = s || 0;
  }
}
const rf = (t, e, r, n) => {
  let i = r.value;
  us(t, i) && (pn(t, r), t[ni] || (i = void 0)), i && e.call(n, i.value, i.key, t);
};
var k_ = M_, La, nf;
function Nt() {
  if (nf)
    return La;
  nf = 1;
  class t {
    constructor(B, U) {
      if (U = n(U), B instanceof t)
        return B.loose === !!U.loose && B.includePrerelease === !!U.includePrerelease ? B : new t(B.raw, U);
      if (B instanceof i)
        return this.raw = B.value, this.set = [[B]], this.format(), this;
      if (this.options = U, this.loose = !!U.loose, this.includePrerelease = !!U.includePrerelease, this.raw = B.trim().split(/\s+/).join(" "), this.set = this.raw.split("||").map((W) => this.parseRange(W.trim())).filter((W) => W.length), !this.set.length)
        throw new TypeError(`Invalid SemVer Range: ${this.raw}`);
      if (this.set.length > 1) {
        const W = this.set[0];
        if (this.set = this.set.filter((z) => !_(z[0])), this.set.length === 0)
          this.set = [W];
        else if (this.set.length > 1) {
          for (const z of this.set)
            if (z.length === 1 && A(z[0])) {
              this.set = [z];
              break;
            }
        }
      }
      this.format();
    }
    format() {
      return this.range = this.set.map((B) => B.join(" ").trim()).join("||").trim(), this.range;
    }
    toString() {
      return this.range;
    }
    parseRange(B) {
      const W = ((this.options.includePrerelease && p) | (this.options.loose && v)) + ":" + B, z = r.get(W);
      if (z)
        return z;
      const V = this.options.loose, Q = V ? a[c.HYPHENRANGELOOSE] : a[c.HYPHENRANGE];
      B = B.replace(Q, de(this.options.includePrerelease)), s("hyphen replace", B), B = B.replace(a[c.COMPARATORTRIM], u), s("comparator trim", B), B = B.replace(a[c.TILDETRIM], h), s("tilde trim", B), B = B.replace(a[c.CARETTRIM], d), s("caret trim", B);
      let ie = B.split(" ").map((be) => y(be, this.options)).join(" ").split(/\s+/).map((be) => X(be, this.options));
      V && (ie = ie.filter((be) => (s("loose invalid filter", be, this.options), !!be.match(a[c.COMPARATORLOOSE])))), s("range list", ie);
      const q = /* @__PURE__ */ new Map(), te = ie.map((be) => new i(be, this.options));
      for (const be of te) {
        if (_(be))
          return [be];
        q.set(be.value, be);
      }
      q.size > 1 && q.has("") && q.delete("");
      const ve = [...q.values()];
      return r.set(W, ve), ve;
    }
    intersects(B, U) {
      if (!(B instanceof t))
        throw new TypeError("a Range is required");
      return this.set.some((W) => R(W, U) && B.set.some((z) => R(z, U) && W.every((V) => z.every((Q) => V.intersects(Q, U)))));
    }
    // if ANY of the sets match ALL of its comparators, then pass
    test(B) {
      if (!B)
        return !1;
      if (typeof B == "string")
        try {
          B = new o(B, this.options);
        } catch {
          return !1;
        }
      for (let U = 0; U < this.set.length; U++)
        if (re(this.set[U], B, this.options))
          return !0;
      return !1;
    }
  }
  La = t;
  const e = k_, r = new e({ max: 1e3 }), n = Yc, i = js(), s = Ds, o = st, {
    safeRe: a,
    t: c,
    comparatorTrimReplace: u,
    tildeTrimReplace: h,
    caretTrimReplace: d
  } = Ii, { FLAG_INCLUDE_PRERELEASE: p, FLAG_LOOSE: v } = $s, _ = (P) => P.value === "<0.0.0-0", A = (P) => P.value === "", R = (P, B) => {
    let U = !0;
    const W = P.slice();
    let z = W.pop();
    for (; U && W.length; )
      U = W.every((V) => z.intersects(V, B)), z = W.pop();
    return U;
  }, y = (P, B) => (s("comp", P, B), P = M(P, B), s("caret", P), P = x(P, B), s("tildes", P), P = J(P, B), s("xrange", P), P = F(P, B), s("stars", P), P), E = (P) => !P || P.toLowerCase() === "x" || P === "*", x = (P, B) => P.trim().split(/\s+/).map((U) => O(U, B)).join(" "), O = (P, B) => {
    const U = B.loose ? a[c.TILDELOOSE] : a[c.TILDE];
    return P.replace(U, (W, z, V, Q, ie) => {
      s("tilde", P, W, z, V, Q, ie);
      let q;
      return E(z) ? q = "" : E(V) ? q = `>=${z}.0.0 <${+z + 1}.0.0-0` : E(Q) ? q = `>=${z}.${V}.0 <${z}.${+V + 1}.0-0` : ie ? (s("replaceTilde pr", ie), q = `>=${z}.${V}.${Q}-${ie} <${z}.${+V + 1}.0-0`) : q = `>=${z}.${V}.${Q} <${z}.${+V + 1}.0-0`, s("tilde return", q), q;
    });
  }, M = (P, B) => P.trim().split(/\s+/).map((U) => D(U, B)).join(" "), D = (P, B) => {
    s("caret", P, B);
    const U = B.loose ? a[c.CARETLOOSE] : a[c.CARET], W = B.includePrerelease ? "-0" : "";
    return P.replace(U, (z, V, Q, ie, q) => {
      s("caret", P, z, V, Q, ie, q);
      let te;
      return E(V) ? te = "" : E(Q) ? te = `>=${V}.0.0${W} <${+V + 1}.0.0-0` : E(ie) ? V === "0" ? te = `>=${V}.${Q}.0${W} <${V}.${+Q + 1}.0-0` : te = `>=${V}.${Q}.0${W} <${+V + 1}.0.0-0` : q ? (s("replaceCaret pr", q), V === "0" ? Q === "0" ? te = `>=${V}.${Q}.${ie}-${q} <${V}.${Q}.${+ie + 1}-0` : te = `>=${V}.${Q}.${ie}-${q} <${V}.${+Q + 1}.0-0` : te = `>=${V}.${Q}.${ie}-${q} <${+V + 1}.0.0-0`) : (s("no pr"), V === "0" ? Q === "0" ? te = `>=${V}.${Q}.${ie}${W} <${V}.${Q}.${+ie + 1}-0` : te = `>=${V}.${Q}.${ie}${W} <${V}.${+Q + 1}.0-0` : te = `>=${V}.${Q}.${ie} <${+V + 1}.0.0-0`), s("caret return", te), te;
    });
  }, J = (P, B) => (s("replaceXRanges", P, B), P.split(/\s+/).map((U) => H(U, B)).join(" ")), H = (P, B) => {
    P = P.trim();
    const U = B.loose ? a[c.XRANGELOOSE] : a[c.XRANGE];
    return P.replace(U, (W, z, V, Q, ie, q) => {
      s("xRange", P, W, z, V, Q, ie, q);
      const te = E(V), ve = te || E(Q), be = ve || E(ie), De = be;
      return z === "=" && De && (z = ""), q = B.includePrerelease ? "-0" : "", te ? z === ">" || z === "<" ? W = "<0.0.0-0" : W = "*" : z && De ? (ve && (Q = 0), ie = 0, z === ">" ? (z = ">=", ve ? (V = +V + 1, Q = 0, ie = 0) : (Q = +Q + 1, ie = 0)) : z === "<=" && (z = "<", ve ? V = +V + 1 : Q = +Q + 1), z === "<" && (q = "-0"), W = `${z + V}.${Q}.${ie}${q}`) : ve ? W = `>=${V}.0.0${q} <${+V + 1}.0.0-0` : be && (W = `>=${V}.${Q}.0${q} <${V}.${+Q + 1}.0-0`), s("xRange return", W), W;
    });
  }, F = (P, B) => (s("replaceStars", P, B), P.trim().replace(a[c.STAR], "")), X = (P, B) => (s("replaceGTE0", P, B), P.trim().replace(a[B.includePrerelease ? c.GTE0PRE : c.GTE0], "")), de = (P) => (B, U, W, z, V, Q, ie, q, te, ve, be, De, C) => (E(W) ? U = "" : E(z) ? U = `>=${W}.0.0${P ? "-0" : ""}` : E(V) ? U = `>=${W}.${z}.0${P ? "-0" : ""}` : Q ? U = `>=${U}` : U = `>=${U}${P ? "-0" : ""}`, E(te) ? q = "" : E(ve) ? q = `<${+te + 1}.0.0-0` : E(be) ? q = `<${te}.${+ve + 1}.0-0` : De ? q = `<=${te}.${ve}.${be}-${De}` : P ? q = `<${te}.${ve}.${+be + 1}-0` : q = `<=${q}`, `${U} ${q}`.trim()), re = (P, B, U) => {
    for (let W = 0; W < P.length; W++)
      if (!P[W].test(B))
        return !1;
    if (B.prerelease.length && !U.includePrerelease) {
      for (let W = 0; W < P.length; W++)
        if (s(P[W].semver), P[W].semver !== i.ANY && P[W].semver.prerelease.length > 0) {
          const z = P[W].semver;
          if (z.major === B.major && z.minor === B.minor && z.patch === B.patch)
            return !0;
        }
      return !1;
    }
    return !0;
  };
  return La;
}
var Pa, sf;
function js() {
  if (sf)
    return Pa;
  sf = 1;
  const t = Symbol("SemVer ANY");
  class e {
    static get ANY() {
      return t;
    }
    constructor(h, d) {
      if (d = r(d), h instanceof e) {
        if (h.loose === !!d.loose)
          return h;
        h = h.value;
      }
      h = h.trim().split(/\s+/).join(" "), o("comparator", h, d), this.options = d, this.loose = !!d.loose, this.parse(h), this.semver === t ? this.value = "" : this.value = this.operator + this.semver.version, o("comp", this);
    }
    parse(h) {
      const d = this.options.loose ? n[i.COMPARATORLOOSE] : n[i.COMPARATOR], p = h.match(d);
      if (!p)
        throw new TypeError(`Invalid comparator: ${h}`);
      this.operator = p[1] !== void 0 ? p[1] : "", this.operator === "=" && (this.operator = ""), p[2] ? this.semver = new a(p[2], this.options.loose) : this.semver = t;
    }
    toString() {
      return this.value;
    }
    test(h) {
      if (o("Comparator.test", h, this.options.loose), this.semver === t || h === t)
        return !0;
      if (typeof h == "string")
        try {
          h = new a(h, this.options);
        } catch {
          return !1;
        }
      return s(h, this.operator, this.semver, this.options);
    }
    intersects(h, d) {
      if (!(h instanceof e))
        throw new TypeError("a Comparator is required");
      return this.operator === "" ? this.value === "" ? !0 : new c(h.value, d).test(this.value) : h.operator === "" ? h.value === "" ? !0 : new c(this.value, d).test(h.semver) : (d = r(d), d.includePrerelease && (this.value === "<0.0.0-0" || h.value === "<0.0.0-0") || !d.includePrerelease && (this.value.startsWith("<0.0.0") || h.value.startsWith("<0.0.0")) ? !1 : !!(this.operator.startsWith(">") && h.operator.startsWith(">") || this.operator.startsWith("<") && h.operator.startsWith("<") || this.semver.version === h.semver.version && this.operator.includes("=") && h.operator.includes("=") || s(this.semver, "<", h.semver, d) && this.operator.startsWith(">") && h.operator.startsWith("<") || s(this.semver, ">", h.semver, d) && this.operator.startsWith("<") && h.operator.startsWith(">")));
    }
  }
  Pa = e;
  const r = Yc, { safeRe: n, t: i } = Ii, s = Hd, o = Ds, a = st, c = Nt();
  return Pa;
}
const N_ = Nt(), L_ = (t, e, r) => {
  try {
    e = new N_(e, r);
  } catch {
    return !1;
  }
  return e.test(t);
};
var Us = L_;
const P_ = Nt(), B_ = (t, e) => new P_(t, e).set.map((r) => r.map((n) => n.value).join(" ").trim().split(" "));
var $_ = B_;
const D_ = st, F_ = Nt(), j_ = (t, e, r) => {
  let n = null, i = null, s = null;
  try {
    s = new F_(e, r);
  } catch {
    return null;
  }
  return t.forEach((o) => {
    s.test(o) && (!n || i.compare(o) === -1) && (n = o, i = new D_(n, r));
  }), n;
};
var U_ = j_;
const W_ = st, V_ = Nt(), H_ = (t, e, r) => {
  let n = null, i = null, s = null;
  try {
    s = new V_(e, r);
  } catch {
    return null;
  }
  return t.forEach((o) => {
    s.test(o) && (!n || i.compare(o) === 1) && (n = o, i = new W_(n, r));
  }), n;
};
var z_ = H_;
const Ba = st, q_ = Nt(), of = Fs, G_ = (t, e) => {
  t = new q_(t, e);
  let r = new Ba("0.0.0");
  if (t.test(r) || (r = new Ba("0.0.0-0"), t.test(r)))
    return r;
  r = null;
  for (let n = 0; n < t.set.length; ++n) {
    const i = t.set[n];
    let s = null;
    i.forEach((o) => {
      const a = new Ba(o.semver.version);
      switch (o.operator) {
        case ">":
          a.prerelease.length === 0 ? a.patch++ : a.prerelease.push(0), a.raw = a.format();
        case "":
        case ">=":
          (!s || of(a, s)) && (s = a);
          break;
        case "<":
        case "<=":
          break;
        default:
          throw new Error(`Unexpected operation: ${o.operator}`);
      }
    }), s && (!r || of(r, s)) && (r = s);
  }
  return r && t.test(r) ? r : null;
};
var J_ = G_;
const Q_ = Nt(), Z_ = (t, e) => {
  try {
    return new Q_(t, e).range || "*";
  } catch {
    return null;
  }
};
var Y_ = Z_;
const K_ = st, qd = js(), { ANY: X_ } = qd, e2 = Nt(), t2 = Us, af = Fs, cf = Xc, r2 = tu, n2 = eu, i2 = (t, e, r, n) => {
  t = new K_(t, n), e = new e2(e, n);
  let i, s, o, a, c;
  switch (r) {
    case ">":
      i = af, s = r2, o = cf, a = ">", c = ">=";
      break;
    case "<":
      i = cf, s = n2, o = af, a = "<", c = "<=";
      break;
    default:
      throw new TypeError('Must provide a hilo val of "<" or ">"');
  }
  if (t2(t, e, n))
    return !1;
  for (let u = 0; u < e.set.length; ++u) {
    const h = e.set[u];
    let d = null, p = null;
    if (h.forEach((v) => {
      v.semver === X_ && (v = new qd(">=0.0.0")), d = d || v, p = p || v, i(v.semver, d.semver, n) ? d = v : o(v.semver, p.semver, n) && (p = v);
    }), d.operator === a || d.operator === c || (!p.operator || p.operator === a) && s(t, p.semver))
      return !1;
    if (p.operator === c && o(t, p.semver))
      return !1;
  }
  return !0;
};
var ru = i2;
const s2 = ru, o2 = (t, e, r) => s2(t, e, ">", r);
var a2 = o2;
const c2 = ru, u2 = (t, e, r) => c2(t, e, "<", r);
var l2 = u2;
const uf = Nt(), f2 = (t, e, r) => (t = new uf(t, r), e = new uf(e, r), t.intersects(e, r));
var h2 = f2;
const d2 = Us, p2 = kt;
var g2 = (t, e, r) => {
  const n = [];
  let i = null, s = null;
  const o = t.sort((h, d) => p2(h, d, r));
  for (const h of o)
    d2(h, e, r) ? (s = h, i || (i = h)) : (s && n.push([i, s]), s = null, i = null);
  i && n.push([i, null]);
  const a = [];
  for (const [h, d] of n)
    h === d ? a.push(h) : !d && h === o[0] ? a.push("*") : d ? h === o[0] ? a.push(`<=${d}`) : a.push(`${h} - ${d}`) : a.push(`>=${h}`);
  const c = a.join(" || "), u = typeof e.raw == "string" ? e.raw : String(e);
  return c.length < u.length ? c : e;
};
const lf = Nt(), nu = js(), { ANY: $a } = nu, Gn = Us, iu = kt, b2 = (t, e, r = {}) => {
  if (t === e)
    return !0;
  t = new lf(t, r), e = new lf(e, r);
  let n = !1;
  e:
    for (const i of t.set) {
      for (const s of e.set) {
        const o = m2(i, s, r);
        if (n = n || o !== null, o)
          continue e;
      }
      if (n)
        return !1;
    }
  return !0;
}, y2 = [new nu(">=0.0.0-0")], ff = [new nu(">=0.0.0")], m2 = (t, e, r) => {
  if (t === e)
    return !0;
  if (t.length === 1 && t[0].semver === $a) {
    if (e.length === 1 && e[0].semver === $a)
      return !0;
    r.includePrerelease ? t = y2 : t = ff;
  }
  if (e.length === 1 && e[0].semver === $a) {
    if (r.includePrerelease)
      return !0;
    e = ff;
  }
  const n = /* @__PURE__ */ new Set();
  let i, s;
  for (const v of t)
    v.operator === ">" || v.operator === ">=" ? i = hf(i, v, r) : v.operator === "<" || v.operator === "<=" ? s = df(s, v, r) : n.add(v.semver);
  if (n.size > 1)
    return null;
  let o;
  if (i && s) {
    if (o = iu(i.semver, s.semver, r), o > 0)
      return null;
    if (o === 0 && (i.operator !== ">=" || s.operator !== "<="))
      return null;
  }
  for (const v of n) {
    if (i && !Gn(v, String(i), r) || s && !Gn(v, String(s), r))
      return null;
    for (const _ of e)
      if (!Gn(v, String(_), r))
        return !1;
    return !0;
  }
  let a, c, u, h, d = s && !r.includePrerelease && s.semver.prerelease.length ? s.semver : !1, p = i && !r.includePrerelease && i.semver.prerelease.length ? i.semver : !1;
  d && d.prerelease.length === 1 && s.operator === "<" && d.prerelease[0] === 0 && (d = !1);
  for (const v of e) {
    if (h = h || v.operator === ">" || v.operator === ">=", u = u || v.operator === "<" || v.operator === "<=", i) {
      if (p && v.semver.prerelease && v.semver.prerelease.length && v.semver.major === p.major && v.semver.minor === p.minor && v.semver.patch === p.patch && (p = !1), v.operator === ">" || v.operator === ">=") {
        if (a = hf(i, v, r), a === v && a !== i)
          return !1;
      } else if (i.operator === ">=" && !Gn(i.semver, String(v), r))
        return !1;
    }
    if (s) {
      if (d && v.semver.prerelease && v.semver.prerelease.length && v.semver.major === d.major && v.semver.minor === d.minor && v.semver.patch === d.patch && (d = !1), v.operator === "<" || v.operator === "<=") {
        if (c = df(s, v, r), c === v && c !== s)
          return !1;
      } else if (s.operator === "<=" && !Gn(s.semver, String(v), r))
        return !1;
    }
    if (!v.operator && (s || i) && o !== 0)
      return !1;
  }
  return !(i && u && !s && o !== 0 || s && h && !i && o !== 0 || p || d);
}, hf = (t, e, r) => {
  if (!t)
    return e;
  const n = iu(t.semver, e.semver, r);
  return n > 0 ? t : n < 0 || e.operator === ">" && t.operator === ">=" ? e : t;
}, df = (t, e, r) => {
  if (!t)
    return e;
  const n = iu(t.semver, e.semver, r);
  return n < 0 ? t : n > 0 || e.operator === "<" && t.operator === "<=" ? e : t;
};
var v2 = b2;
const Da = Ii, pf = $s, w2 = st, gf = Ud, _2 = Fn, E2 = _w, S2 = xw, x2 = Iw, C2 = Aw, I2 = Ow, R2 = Lw, A2 = $w, T2 = jw, M2 = kt, O2 = Hw, k2 = Gw, N2 = Kc, L2 = Yw, P2 = e_, B2 = Fs, $2 = Xc, D2 = Wd, F2 = Vd, j2 = eu, U2 = tu, W2 = Hd, V2 = S_, H2 = js(), z2 = Nt(), q2 = Us, G2 = $_, J2 = U_, Q2 = z_, Z2 = J_, Y2 = Y_, K2 = ru, X2 = a2, eE = l2, tE = h2, rE = g2, nE = v2;
var iE = {
  parse: _2,
  valid: E2,
  clean: S2,
  inc: x2,
  diff: C2,
  major: I2,
  minor: R2,
  patch: A2,
  prerelease: T2,
  compare: M2,
  rcompare: O2,
  compareLoose: k2,
  compareBuild: N2,
  sort: L2,
  rsort: P2,
  gt: B2,
  lt: $2,
  eq: D2,
  neq: F2,
  gte: j2,
  lte: U2,
  cmp: W2,
  coerce: V2,
  Comparator: H2,
  Range: z2,
  satisfies: q2,
  toComparators: G2,
  maxSatisfying: J2,
  minSatisfying: Q2,
  minVersion: Z2,
  validRange: Y2,
  outside: K2,
  gtr: X2,
  ltr: eE,
  intersects: tE,
  simplifyRange: rE,
  subset: nE,
  SemVer: w2,
  re: Da.re,
  src: Da.src,
  tokens: Da.t,
  SEMVER_SPEC_VERSION: pf.SEMVER_SPEC_VERSION,
  RELEASE_TYPES: pf.RELEASE_TYPES,
  compareIdentifiers: gf.compareIdentifiers,
  rcompareIdentifiers: gf.rcompareIdentifiers
};
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.satisfiesVersionRange = t.gtRange = t.gtVersion = t.assertIsSemVerRange = t.assertIsSemVerVersion = t.isValidSemVerRange = t.isValidSemVerVersion = t.VersionRangeStruct = t.VersionStruct = void 0;
  const e = iE, r = Qr, n = Ge;
  t.VersionStruct = (0, r.refine)((0, r.string)(), "Version", (d) => (0, e.valid)(d) === null ? `Expected SemVer version, got "${d}"` : !0), t.VersionRangeStruct = (0, r.refine)((0, r.string)(), "Version range", (d) => (0, e.validRange)(d) === null ? `Expected SemVer range, got "${d}"` : !0);
  function i(d) {
    return (0, r.is)(d, t.VersionStruct);
  }
  t.isValidSemVerVersion = i;
  function s(d) {
    return (0, r.is)(d, t.VersionRangeStruct);
  }
  t.isValidSemVerRange = s;
  function o(d) {
    (0, n.assertStruct)(d, t.VersionStruct);
  }
  t.assertIsSemVerVersion = o;
  function a(d) {
    (0, n.assertStruct)(d, t.VersionRangeStruct);
  }
  t.assertIsSemVerRange = a;
  function c(d, p) {
    return (0, e.gt)(d, p);
  }
  t.gtVersion = c;
  function u(d, p) {
    return (0, e.gtr)(d, p);
  }
  t.gtRange = u;
  function h(d, p) {
    return (0, e.satisfies)(d, p, {
      includePrerelease: !0
    });
  }
  t.satisfiesVersionRange = h;
})(Dd);
(function(t) {
  var e = G && G.__createBinding || (Object.create ? function(n, i, s, o) {
    o === void 0 && (o = s);
    var a = Object.getOwnPropertyDescriptor(i, s);
    (!a || ("get" in a ? !i.__esModule : a.writable || a.configurable)) && (a = { enumerable: !0, get: function() {
      return i[s];
    } }), Object.defineProperty(n, o, a);
  } : function(n, i, s, o) {
    o === void 0 && (o = s), n[o] = i[s];
  }), r = G && G.__exportStar || function(n, i) {
    for (var s in n)
      s !== "default" && !Object.prototype.hasOwnProperty.call(i, s) && e(i, n, s);
  };
  Object.defineProperty(t, "__esModule", { value: !0 }), r(Ge, t), r(xi, t), r(ge, t), r(Ps, t), r(zt, t), r(En, t), r(Ci, t), r(Pd, t), r(Sn, t), r(Zc, t), r(qt, t), r(Bd, t), r($d, t), r(Dd, t);
})(bd);
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.createModuleLogger = t.projectLogger = void 0;
  const e = bd;
  Object.defineProperty(t, "createModuleLogger", { enumerable: !0, get: function() {
    return e.createModuleLogger;
  } }), t.projectLogger = (0, e.createProjectLogger)("eth-block-tracker");
})(gd);
var Gd = G && G.__importDefault || function(t) {
  return t && t.__esModule ? t : { default: t };
};
Object.defineProperty(Ns, "__esModule", { value: !0 });
Ns.PollingBlockTracker = void 0;
const sE = Gd(jc), oE = Gd(Rm), aE = Ei, bf = gd, yf = (0, bf.createModuleLogger)(bf.projectLogger, "polling-block-tracker"), cE = (0, sE.default)(), uE = 1e3;
class lE extends aE.BaseBlockTracker {
  constructor(e = {}) {
    var r;
    if (!e.provider)
      throw new Error("PollingBlockTracker - no provider specified.");
    super({
      blockResetDuration: (r = e.blockResetDuration) !== null && r !== void 0 ? r : e.pollingInterval
    }), this._provider = e.provider, this._pollingInterval = e.pollingInterval || 20 * uE, this._retryTimeout = e.retryTimeout || this._pollingInterval / 10, this._keepEventLoopActive = e.keepEventLoopActive === void 0 ? !0 : e.keepEventLoopActive, this._setSkipCacheFlag = e.setSkipCacheFlag || !1;
  }
  // trigger block polling
  async checkForLatestBlock() {
    return await this._updateLatestBlock(), await this.getLatestBlock();
  }
  async _start() {
    this._synchronize();
  }
  async _end() {
  }
  async _synchronize() {
    for (var e; this._isRunning; )
      try {
        await this._updateLatestBlock();
        const r = mf(this._pollingInterval, !this._keepEventLoopActive);
        this.emit("_waitingForNextIteration"), await r;
      } catch (r) {
        const n = new Error(`PollingBlockTracker - encountered an error while attempting to update latest block:
${(e = r.stack) !== null && e !== void 0 ? e : r}`);
        try {
          this.emit("error", n);
        } catch {
          console.error(n);
        }
        const i = mf(this._retryTimeout, !this._keepEventLoopActive);
        this.emit("_waitingForNextIteration"), await i;
      }
  }
  async _updateLatestBlock() {
    const e = await this._fetchLatestBlock();
    this._newPotentialLatest(e);
  }
  async _fetchLatestBlock() {
    const e = {
      jsonrpc: "2.0",
      id: cE(),
      method: "eth_blockNumber",
      params: []
    };
    this._setSkipCacheFlag && (e.skipCache = !0), yf("Making request", e);
    const r = await (0, oE.default)((n) => this._provider.sendAsync(e, n))();
    if (yf("Got response", r), r.error)
      throw new Error(`PollingBlockTracker - encountered error fetching block:
${r.error.message}`);
    return r.result;
  }
}
Ns.PollingBlockTracker = lE;
function mf(t, e) {
  return new Promise((r) => {
    const n = setTimeout(r, t);
    n.unref && e && n.unref();
  });
}
var Ws = {}, fE = G && G.__importDefault || function(t) {
  return t && t.__esModule ? t : { default: t };
};
Object.defineProperty(Ws, "__esModule", { value: !0 });
Ws.SubscribeBlockTracker = void 0;
const hE = fE(jc), dE = Ei, pE = (0, hE.default)();
class gE extends dE.BaseBlockTracker {
  constructor(e = {}) {
    if (!e.provider)
      throw new Error("SubscribeBlockTracker - no provider specified.");
    super(e), this._provider = e.provider, this._subscriptionId = null;
  }
  async checkForLatestBlock() {
    return await this.getLatestBlock();
  }
  async _start() {
    if (this._subscriptionId === void 0 || this._subscriptionId === null)
      try {
        const e = await this._call("eth_blockNumber");
        this._subscriptionId = await this._call("eth_subscribe", "newHeads"), this._provider.on("data", this._handleSubData.bind(this)), this._newPotentialLatest(e);
      } catch (e) {
        this.emit("error", e);
      }
  }
  async _end() {
    if (this._subscriptionId !== null && this._subscriptionId !== void 0)
      try {
        await this._call("eth_unsubscribe", this._subscriptionId), this._subscriptionId = null;
      } catch (e) {
        this.emit("error", e);
      }
  }
  _call(e, ...r) {
    return new Promise((n, i) => {
      this._provider.sendAsync({
        id: pE(),
        method: e,
        params: r,
        jsonrpc: "2.0"
      }, (s, o) => {
        s ? i(s) : n(o.result);
      });
    });
  }
  _handleSubData(e, r) {
    var n;
    r.method === "eth_subscription" && ((n = r.params) === null || n === void 0 ? void 0 : n.subscription) === this._subscriptionId && this._newPotentialLatest(r.params.result.number);
  }
}
Ws.SubscribeBlockTracker = gE;
var Jd = {};
Object.defineProperty(Jd, "__esModule", { value: !0 });
(function(t) {
  var e = G && G.__createBinding || (Object.create ? function(n, i, s, o) {
    o === void 0 && (o = s), Object.defineProperty(n, o, { enumerable: !0, get: function() {
      return i[s];
    } });
  } : function(n, i, s, o) {
    o === void 0 && (o = s), n[o] = i[s];
  }), r = G && G.__exportStar || function(n, i) {
    for (var s in n)
      s !== "default" && !Object.prototype.hasOwnProperty.call(i, s) && e(i, n, s);
  };
  Object.defineProperty(t, "__esModule", { value: !0 }), r(Ns, t), r(Ws, t), r(Jd, t);
})(pd);
var su = {}, Vs = {}, Ri = {};
Object.defineProperty(Ri, "__esModule", { value: !0 });
Ri.getUniqueId = void 0;
const Qd = 4294967295;
let Fa = Math.floor(Math.random() * Qd);
function bE() {
  return Fa = (Fa + 1) % Qd, Fa;
}
Ri.getUniqueId = bE;
Object.defineProperty(Vs, "__esModule", { value: !0 });
Vs.createIdRemapMiddleware = void 0;
const yE = Ri;
function mE() {
  return (t, e, r, n) => {
    const i = t.id, s = yE.getUniqueId();
    t.id = s, e.id = s, r((o) => {
      t.id = i, e.id = i, o();
    });
  };
}
Vs.createIdRemapMiddleware = mE;
var Hs = {};
Object.defineProperty(Hs, "__esModule", { value: !0 });
Hs.createAsyncMiddleware = void 0;
function vE(t) {
  return async (e, r, n, i) => {
    let s;
    const o = new Promise((h) => {
      s = h;
    });
    let a = null, c = !1;
    const u = async () => {
      c = !0, n((h) => {
        a = h, s();
      }), await o;
    };
    try {
      await t(e, r, u), c ? (await o, a(null)) : i(null);
    } catch (h) {
      a ? a(h) : i(h);
    }
  };
}
Hs.createAsyncMiddleware = vE;
var zs = {};
Object.defineProperty(zs, "__esModule", { value: !0 });
zs.createScaffoldMiddleware = void 0;
function wE(t) {
  return (e, r, n, i) => {
    const s = t[e.method];
    return s === void 0 ? n() : typeof s == "function" ? s(e, r, n, i) : (r.result = s, i());
  };
}
zs.createScaffoldMiddleware = wE;
var Ai = {}, Zd = {}, mr = {};
Object.defineProperty(mr, "__esModule", { value: !0 });
mr.EthereumProviderError = mr.EthereumRpcError = void 0;
const _E = th;
class Yd extends Error {
  constructor(e, r, n) {
    if (!Number.isInteger(e))
      throw new Error('"code" must be an integer.');
    if (!r || typeof r != "string")
      throw new Error('"message" must be a nonempty string.');
    super(r), this.code = e, n !== void 0 && (this.data = n);
  }
  /**
   * Returns a plain object with all public class properties.
   */
  serialize() {
    const e = {
      code: this.code,
      message: this.message
    };
    return this.data !== void 0 && (e.data = this.data), this.stack && (e.stack = this.stack), e;
  }
  /**
   * Return a string representation of the serialized error, omitting
   * any circular references.
   */
  toString() {
    return _E.default(this.serialize(), xE, 2);
  }
}
mr.EthereumRpcError = Yd;
class EE extends Yd {
  /**
   * Create an Ethereum Provider JSON-RPC error.
   * `code` must be an integer in the 1000 <= 4999 range.
   */
  constructor(e, r, n) {
    if (!SE(e))
      throw new Error('"code" must be an integer such that: 1000 <= code <= 4999');
    super(e, r, n);
  }
}
mr.EthereumProviderError = EE;
function SE(t) {
  return Number.isInteger(t) && t >= 1e3 && t <= 4999;
}
function xE(t, e) {
  if (e !== "[Circular]")
    return e;
}
var ou = {}, vr = {};
Object.defineProperty(vr, "__esModule", { value: !0 });
vr.errorValues = vr.errorCodes = void 0;
vr.errorCodes = {
  rpc: {
    invalidInput: -32e3,
    resourceNotFound: -32001,
    resourceUnavailable: -32002,
    transactionRejected: -32003,
    methodNotSupported: -32004,
    limitExceeded: -32005,
    parse: -32700,
    invalidRequest: -32600,
    methodNotFound: -32601,
    invalidParams: -32602,
    internal: -32603
  },
  provider: {
    userRejectedRequest: 4001,
    unauthorized: 4100,
    unsupportedMethod: 4200,
    disconnected: 4900,
    chainDisconnected: 4901
  }
};
vr.errorValues = {
  "-32700": {
    standard: "JSON RPC 2.0",
    message: "Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text."
  },
  "-32600": {
    standard: "JSON RPC 2.0",
    message: "The JSON sent is not a valid Request object."
  },
  "-32601": {
    standard: "JSON RPC 2.0",
    message: "The method does not exist / is not available."
  },
  "-32602": {
    standard: "JSON RPC 2.0",
    message: "Invalid method parameter(s)."
  },
  "-32603": {
    standard: "JSON RPC 2.0",
    message: "Internal JSON-RPC error."
  },
  "-32000": {
    standard: "EIP-1474",
    message: "Invalid input."
  },
  "-32001": {
    standard: "EIP-1474",
    message: "Resource not found."
  },
  "-32002": {
    standard: "EIP-1474",
    message: "Resource unavailable."
  },
  "-32003": {
    standard: "EIP-1474",
    message: "Transaction rejected."
  },
  "-32004": {
    standard: "EIP-1474",
    message: "Method not supported."
  },
  "-32005": {
    standard: "EIP-1474",
    message: "Request limit exceeded."
  },
  4001: {
    standard: "EIP-1193",
    message: "User rejected the request."
  },
  4100: {
    standard: "EIP-1193",
    message: "The requested account and/or method has not been authorized by the user."
  },
  4200: {
    standard: "EIP-1193",
    message: "The requested method is not supported by this Ethereum provider."
  },
  4900: {
    standard: "EIP-1193",
    message: "The provider is disconnected from all chains."
  },
  4901: {
    standard: "EIP-1193",
    message: "The provider is disconnected from the specified chain."
  }
};
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.serializeError = t.isValidCode = t.getMessageFromCode = t.JSON_RPC_SERVER_ERROR_MESSAGE = void 0;
  const e = vr, r = mr, n = e.errorCodes.rpc.internal, i = "Unspecified error message. This is a bug, please report it.", s = {
    code: n,
    message: o(n)
  };
  t.JSON_RPC_SERVER_ERROR_MESSAGE = "Unspecified server error.";
  function o(p, v = i) {
    if (Number.isInteger(p)) {
      const _ = p.toString();
      if (d(e.errorValues, _))
        return e.errorValues[_].message;
      if (u(p))
        return t.JSON_RPC_SERVER_ERROR_MESSAGE;
    }
    return v;
  }
  t.getMessageFromCode = o;
  function a(p) {
    if (!Number.isInteger(p))
      return !1;
    const v = p.toString();
    return !!(e.errorValues[v] || u(p));
  }
  t.isValidCode = a;
  function c(p, { fallbackError: v = s, shouldIncludeStack: _ = !1 } = {}) {
    var A, R;
    if (!v || !Number.isInteger(v.code) || typeof v.message != "string")
      throw new Error("Must provide fallback error with integer number code and string message.");
    if (p instanceof r.EthereumRpcError)
      return p.serialize();
    const y = {};
    if (p && typeof p == "object" && !Array.isArray(p) && d(p, "code") && a(p.code)) {
      const x = p;
      y.code = x.code, x.message && typeof x.message == "string" ? (y.message = x.message, d(x, "data") && (y.data = x.data)) : (y.message = o(y.code), y.data = { originalError: h(p) });
    } else {
      y.code = v.code;
      const x = (A = p) === null || A === void 0 ? void 0 : A.message;
      y.message = x && typeof x == "string" ? x : v.message, y.data = { originalError: h(p) };
    }
    const E = (R = p) === null || R === void 0 ? void 0 : R.stack;
    return _ && p && E && typeof E == "string" && (y.stack = E), y;
  }
  t.serializeError = c;
  function u(p) {
    return p >= -32099 && p <= -32e3;
  }
  function h(p) {
    return p && typeof p == "object" && !Array.isArray(p) ? Object.assign({}, p) : p;
  }
  function d(p, v) {
    return Object.prototype.hasOwnProperty.call(p, v);
  }
})(ou);
var qs = {};
Object.defineProperty(qs, "__esModule", { value: !0 });
qs.ethErrors = void 0;
const au = mr, Kd = ou, Ze = vr;
qs.ethErrors = {
  rpc: {
    /**
     * Get a JSON RPC 2.0 Parse (-32700) error.
     */
    parse: (t) => dt(Ze.errorCodes.rpc.parse, t),
    /**
     * Get a JSON RPC 2.0 Invalid Request (-32600) error.
     */
    invalidRequest: (t) => dt(Ze.errorCodes.rpc.invalidRequest, t),
    /**
     * Get a JSON RPC 2.0 Invalid Params (-32602) error.
     */
    invalidParams: (t) => dt(Ze.errorCodes.rpc.invalidParams, t),
    /**
     * Get a JSON RPC 2.0 Method Not Found (-32601) error.
     */
    methodNotFound: (t) => dt(Ze.errorCodes.rpc.methodNotFound, t),
    /**
     * Get a JSON RPC 2.0 Internal (-32603) error.
     */
    internal: (t) => dt(Ze.errorCodes.rpc.internal, t),
    /**
     * Get a JSON RPC 2.0 Server error.
     * Permits integer error codes in the [ -32099 <= -32005 ] range.
     * Codes -32000 through -32004 are reserved by EIP-1474.
     */
    server: (t) => {
      if (!t || typeof t != "object" || Array.isArray(t))
        throw new Error("Ethereum RPC Server errors must provide single object argument.");
      const { code: e } = t;
      if (!Number.isInteger(e) || e > -32005 || e < -32099)
        throw new Error('"code" must be an integer such that: -32099 <= code <= -32005');
      return dt(e, t);
    },
    /**
     * Get an Ethereum JSON RPC Invalid Input (-32000) error.
     */
    invalidInput: (t) => dt(Ze.errorCodes.rpc.invalidInput, t),
    /**
     * Get an Ethereum JSON RPC Resource Not Found (-32001) error.
     */
    resourceNotFound: (t) => dt(Ze.errorCodes.rpc.resourceNotFound, t),
    /**
     * Get an Ethereum JSON RPC Resource Unavailable (-32002) error.
     */
    resourceUnavailable: (t) => dt(Ze.errorCodes.rpc.resourceUnavailable, t),
    /**
     * Get an Ethereum JSON RPC Transaction Rejected (-32003) error.
     */
    transactionRejected: (t) => dt(Ze.errorCodes.rpc.transactionRejected, t),
    /**
     * Get an Ethereum JSON RPC Method Not Supported (-32004) error.
     */
    methodNotSupported: (t) => dt(Ze.errorCodes.rpc.methodNotSupported, t),
    /**
     * Get an Ethereum JSON RPC Limit Exceeded (-32005) error.
     */
    limitExceeded: (t) => dt(Ze.errorCodes.rpc.limitExceeded, t)
  },
  provider: {
    /**
     * Get an Ethereum Provider User Rejected Request (4001) error.
     */
    userRejectedRequest: (t) => Jn(Ze.errorCodes.provider.userRejectedRequest, t),
    /**
     * Get an Ethereum Provider Unauthorized (4100) error.
     */
    unauthorized: (t) => Jn(Ze.errorCodes.provider.unauthorized, t),
    /**
     * Get an Ethereum Provider Unsupported Method (4200) error.
     */
    unsupportedMethod: (t) => Jn(Ze.errorCodes.provider.unsupportedMethod, t),
    /**
     * Get an Ethereum Provider Not Connected (4900) error.
     */
    disconnected: (t) => Jn(Ze.errorCodes.provider.disconnected, t),
    /**
     * Get an Ethereum Provider Chain Not Connected (4901) error.
     */
    chainDisconnected: (t) => Jn(Ze.errorCodes.provider.chainDisconnected, t),
    /**
     * Get a custom Ethereum Provider error.
     */
    custom: (t) => {
      if (!t || typeof t != "object" || Array.isArray(t))
        throw new Error("Ethereum Provider custom errors must provide single object argument.");
      const { code: e, message: r, data: n } = t;
      if (!r || typeof r != "string")
        throw new Error('"message" must be a nonempty string');
      return new au.EthereumProviderError(e, r, n);
    }
  }
};
function dt(t, e) {
  const [r, n] = Xd(e);
  return new au.EthereumRpcError(t, r || Kd.getMessageFromCode(t), n);
}
function Jn(t, e) {
  const [r, n] = Xd(e);
  return new au.EthereumProviderError(t, r || Kd.getMessageFromCode(t), n);
}
function Xd(t) {
  if (t) {
    if (typeof t == "string")
      return [t];
    if (typeof t == "object" && !Array.isArray(t)) {
      const { message: e, data: r } = t;
      if (e && typeof e != "string")
        throw new Error("Must specify string message.");
      return [e || void 0, r];
    }
  }
  return [];
}
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.getMessageFromCode = t.serializeError = t.EthereumProviderError = t.EthereumRpcError = t.ethErrors = t.errorCodes = void 0;
  const e = mr;
  Object.defineProperty(t, "EthereumRpcError", { enumerable: !0, get: function() {
    return e.EthereumRpcError;
  } }), Object.defineProperty(t, "EthereumProviderError", { enumerable: !0, get: function() {
    return e.EthereumProviderError;
  } });
  const r = ou;
  Object.defineProperty(t, "serializeError", { enumerable: !0, get: function() {
    return r.serializeError;
  } }), Object.defineProperty(t, "getMessageFromCode", { enumerable: !0, get: function() {
    return r.getMessageFromCode;
  } });
  const n = qs;
  Object.defineProperty(t, "ethErrors", { enumerable: !0, get: function() {
    return n.ethErrors;
  } });
  const i = vr;
  Object.defineProperty(t, "errorCodes", { enumerable: !0, get: function() {
    return i.errorCodes;
  } });
})(Zd);
var CE = G && G.__importDefault || function(t) {
  return t && t.__esModule ? t : { default: t };
};
Object.defineProperty(Ai, "__esModule", { value: !0 });
Ai.JsonRpcEngine = void 0;
const IE = CE(Vr), pt = Zd;
class Xt extends IE.default {
  constructor() {
    super(), this._middleware = [];
  }
  /**
   * Add a middleware function to the engine's middleware stack.
   *
   * @param middleware - The middleware function to add.
   */
  push(e) {
    this._middleware.push(e);
  }
  handle(e, r) {
    if (r && typeof r != "function")
      throw new Error('"callback" must be a function if provided.');
    return Array.isArray(e) ? r ? this._handleBatch(e, r) : this._handleBatch(e) : r ? this._handle(e, r) : this._promiseHandle(e);
  }
  /**
   * Returns this engine as a middleware function that can be pushed to other
   * engines.
   *
   * @returns This engine as a middleware function.
   */
  asMiddleware() {
    return async (e, r, n, i) => {
      try {
        const [s, o, a] = await Xt._runAllMiddleware(e, r, this._middleware);
        return o ? (await Xt._runReturnHandlers(a), i(s)) : n(async (c) => {
          try {
            await Xt._runReturnHandlers(a);
          } catch (u) {
            return c(u);
          }
          return c();
        });
      } catch (s) {
        return i(s);
      }
    };
  }
  async _handleBatch(e, r) {
    try {
      const n = await Promise.all(
        // 1. Begin executing each request in the order received
        e.map(this._promiseHandle.bind(this))
      );
      return r ? r(null, n) : n;
    } catch (n) {
      if (r)
        return r(n);
      throw n;
    }
  }
  /**
   * A promise-wrapped _handle.
   */
  _promiseHandle(e) {
    return new Promise((r) => {
      this._handle(e, (n, i) => {
        r(i);
      });
    });
  }
  /**
   * Ensures that the request object is valid, processes it, and passes any
   * error and the response object to the given callback.
   *
   * Does not reject.
   */
  async _handle(e, r) {
    if (!e || Array.isArray(e) || typeof e != "object") {
      const o = new pt.EthereumRpcError(pt.errorCodes.rpc.invalidRequest, `Requests must be plain objects. Received: ${typeof e}`, { request: e });
      return r(o, { id: void 0, jsonrpc: "2.0", error: o });
    }
    if (typeof e.method != "string") {
      const o = new pt.EthereumRpcError(pt.errorCodes.rpc.invalidRequest, `Must specify a string method. Received: ${typeof e.method}`, { request: e });
      return r(o, { id: e.id, jsonrpc: "2.0", error: o });
    }
    const n = Object.assign({}, e), i = {
      id: n.id,
      jsonrpc: n.jsonrpc
    };
    let s = null;
    try {
      await this._processRequest(n, i);
    } catch (o) {
      s = o;
    }
    return s && (delete i.result, i.error || (i.error = pt.serializeError(s))), r(s, i);
  }
  /**
   * For the given request and response, runs all middleware and their return
   * handlers, if any, and ensures that internal request processing semantics
   * are satisfied.
   */
  async _processRequest(e, r) {
    const [n, i, s] = await Xt._runAllMiddleware(e, r, this._middleware);
    if (Xt._checkForCompletion(e, r, i), await Xt._runReturnHandlers(s), n)
      throw n;
  }
  /**
   * Serially executes the given stack of middleware.
   *
   * @returns An array of any error encountered during middleware execution,
   * a boolean indicating whether the request was completed, and an array of
   * middleware-defined return handlers.
   */
  static async _runAllMiddleware(e, r, n) {
    const i = [];
    let s = null, o = !1;
    for (const a of n)
      if ([s, o] = await Xt._runMiddleware(e, r, a, i), o)
        break;
    return [s, o, i.reverse()];
  }
  /**
   * Runs an individual middleware.
   *
   * @returns An array of any error encountered during middleware exection,
   * and a boolean indicating whether the request should end.
   */
  static _runMiddleware(e, r, n, i) {
    return new Promise((s) => {
      const o = (c) => {
        const u = c || r.error;
        u && (r.error = pt.serializeError(u)), s([u, !0]);
      }, a = (c) => {
        r.error ? o(r.error) : (c && (typeof c != "function" && o(new pt.EthereumRpcError(pt.errorCodes.rpc.internal, `JsonRpcEngine: "next" return handlers must be functions. Received "${typeof c}" for request:
${ja(e)}`, { request: e })), i.push(c)), s([null, !1]));
      };
      try {
        n(e, r, a, o);
      } catch (c) {
        o(c);
      }
    });
  }
  /**
   * Serially executes array of return handlers. The request and response are
   * assumed to be in their scope.
   */
  static async _runReturnHandlers(e) {
    for (const r of e)
      await new Promise((n, i) => {
        r((s) => s ? i(s) : n());
      });
  }
  /**
   * Throws an error if the response has neither a result nor an error, or if
   * the "isComplete" flag is falsy.
   */
  static _checkForCompletion(e, r, n) {
    if (!("result" in r) && !("error" in r))
      throw new pt.EthereumRpcError(pt.errorCodes.rpc.internal, `JsonRpcEngine: Response has no error or result for request:
${ja(e)}`, { request: e });
    if (!n)
      throw new pt.EthereumRpcError(pt.errorCodes.rpc.internal, `JsonRpcEngine: Nothing ended request:
${ja(e)}`, { request: e });
  }
}
Ai.JsonRpcEngine = Xt;
function ja(t) {
  return JSON.stringify(t, null, 2);
}
var Gs = {};
Object.defineProperty(Gs, "__esModule", { value: !0 });
Gs.mergeMiddleware = void 0;
const RE = Ai;
function AE(t) {
  const e = new RE.JsonRpcEngine();
  return t.forEach((r) => e.push(r)), e.asMiddleware();
}
Gs.mergeMiddleware = AE;
(function(t) {
  var e = G && G.__createBinding || (Object.create ? function(n, i, s, o) {
    o === void 0 && (o = s), Object.defineProperty(n, o, { enumerable: !0, get: function() {
      return i[s];
    } });
  } : function(n, i, s, o) {
    o === void 0 && (o = s), n[o] = i[s];
  }), r = G && G.__exportStar || function(n, i) {
    for (var s in n)
      s !== "default" && !Object.prototype.hasOwnProperty.call(i, s) && e(i, n, s);
  };
  Object.defineProperty(t, "__esModule", { value: !0 }), r(Vs, t), r(Hs, t), r(zs, t), r(Ri, t), r(Ai, t), r(Gs, t);
})(su);
var ep = {}, cu = {}, bc = function(t, e) {
  return bc = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, n) {
    r.__proto__ = n;
  } || function(r, n) {
    for (var i in n)
      Object.prototype.hasOwnProperty.call(n, i) && (r[i] = n[i]);
  }, bc(t, e);
};
function tp(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
  bc(t, e);
  function r() {
    this.constructor = t;
  }
  t.prototype = e === null ? Object.create(e) : (r.prototype = e.prototype, new r());
}
var ls = function() {
  return ls = Object.assign || function(e) {
    for (var r, n = 1, i = arguments.length; n < i; n++) {
      r = arguments[n];
      for (var s in r)
        Object.prototype.hasOwnProperty.call(r, s) && (e[s] = r[s]);
    }
    return e;
  }, ls.apply(this, arguments);
};
function rp(t, e) {
  var r = {};
  for (var n in t)
    Object.prototype.hasOwnProperty.call(t, n) && e.indexOf(n) < 0 && (r[n] = t[n]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, n = Object.getOwnPropertySymbols(t); i < n.length; i++)
      e.indexOf(n[i]) < 0 && Object.prototype.propertyIsEnumerable.call(t, n[i]) && (r[n[i]] = t[n[i]]);
  return r;
}
function np(t, e, r, n) {
  var i = arguments.length, s = i < 3 ? e : n === null ? n = Object.getOwnPropertyDescriptor(e, r) : n, o;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    s = Reflect.decorate(t, e, r, n);
  else
    for (var a = t.length - 1; a >= 0; a--)
      (o = t[a]) && (s = (i < 3 ? o(s) : i > 3 ? o(e, r, s) : o(e, r)) || s);
  return i > 3 && s && Object.defineProperty(e, r, s), s;
}
function ip(t, e) {
  return function(r, n) {
    e(r, n, t);
  };
}
function TE(t, e, r, n, i, s) {
  function o(y) {
    if (y !== void 0 && typeof y != "function")
      throw new TypeError("Function expected");
    return y;
  }
  for (var a = n.kind, c = a === "getter" ? "get" : a === "setter" ? "set" : "value", u = !e && t ? n.static ? t : t.prototype : null, h = e || (u ? Object.getOwnPropertyDescriptor(u, n.name) : {}), d, p = !1, v = r.length - 1; v >= 0; v--) {
    var _ = {};
    for (var A in n)
      _[A] = A === "access" ? {} : n[A];
    for (var A in n.access)
      _.access[A] = n.access[A];
    _.addInitializer = function(y) {
      if (p)
        throw new TypeError("Cannot add initializers after decoration has completed");
      s.push(o(y || null));
    };
    var R = (0, r[v])(a === "accessor" ? { get: h.get, set: h.set } : h[c], _);
    if (a === "accessor") {
      if (R === void 0)
        continue;
      if (R === null || typeof R != "object")
        throw new TypeError("Object expected");
      (d = o(R.get)) && (h.get = d), (d = o(R.set)) && (h.set = d), (d = o(R.init)) && i.unshift(d);
    } else
      (d = o(R)) && (a === "field" ? i.unshift(d) : h[c] = d);
  }
  u && Object.defineProperty(u, n.name, h), p = !0;
}
function ME(t, e, r) {
  for (var n = arguments.length > 2, i = 0; i < e.length; i++)
    r = n ? e[i].call(t, r) : e[i].call(t);
  return n ? r : void 0;
}
function OE(t) {
  return typeof t == "symbol" ? t : "".concat(t);
}
function kE(t, e, r) {
  return typeof e == "symbol" && (e = e.description ? "[".concat(e.description, "]") : ""), Object.defineProperty(t, "name", { configurable: !0, value: r ? "".concat(r, " ", e) : e });
}
function sp(t, e) {
  if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
    return Reflect.metadata(t, e);
}
function op(t, e, r, n) {
  function i(s) {
    return s instanceof r ? s : new r(function(o) {
      o(s);
    });
  }
  return new (r || (r = Promise))(function(s, o) {
    function a(h) {
      try {
        u(n.next(h));
      } catch (d) {
        o(d);
      }
    }
    function c(h) {
      try {
        u(n.throw(h));
      } catch (d) {
        o(d);
      }
    }
    function u(h) {
      h.done ? s(h.value) : i(h.value).then(a, c);
    }
    u((n = n.apply(t, e || [])).next());
  });
}
function ap(t, e) {
  var r = { label: 0, sent: function() {
    if (s[0] & 1)
      throw s[1];
    return s[1];
  }, trys: [], ops: [] }, n, i, s, o;
  return o = { next: a(0), throw: a(1), return: a(2) }, typeof Symbol == "function" && (o[Symbol.iterator] = function() {
    return this;
  }), o;
  function a(u) {
    return function(h) {
      return c([u, h]);
    };
  }
  function c(u) {
    if (n)
      throw new TypeError("Generator is already executing.");
    for (; o && (o = 0, u[0] && (r = 0)), r; )
      try {
        if (n = 1, i && (s = u[0] & 2 ? i.return : u[0] ? i.throw || ((s = i.return) && s.call(i), 0) : i.next) && !(s = s.call(i, u[1])).done)
          return s;
        switch (i = 0, s && (u = [u[0] & 2, s.value]), u[0]) {
          case 0:
          case 1:
            s = u;
            break;
          case 4:
            return r.label++, { value: u[1], done: !1 };
          case 5:
            r.label++, i = u[1], u = [0];
            continue;
          case 7:
            u = r.ops.pop(), r.trys.pop();
            continue;
          default:
            if (s = r.trys, !(s = s.length > 0 && s[s.length - 1]) && (u[0] === 6 || u[0] === 2)) {
              r = 0;
              continue;
            }
            if (u[0] === 3 && (!s || u[1] > s[0] && u[1] < s[3])) {
              r.label = u[1];
              break;
            }
            if (u[0] === 6 && r.label < s[1]) {
              r.label = s[1], s = u;
              break;
            }
            if (s && r.label < s[2]) {
              r.label = s[2], r.ops.push(u);
              break;
            }
            s[2] && r.ops.pop(), r.trys.pop();
            continue;
        }
        u = e.call(t, r);
      } catch (h) {
        u = [6, h], i = 0;
      } finally {
        n = s = 0;
      }
    if (u[0] & 5)
      throw u[1];
    return { value: u[0] ? u[1] : void 0, done: !0 };
  }
}
var Js = Object.create ? function(t, e, r, n) {
  n === void 0 && (n = r);
  var i = Object.getOwnPropertyDescriptor(e, r);
  (!i || ("get" in i ? !e.__esModule : i.writable || i.configurable)) && (i = { enumerable: !0, get: function() {
    return e[r];
  } }), Object.defineProperty(t, n, i);
} : function(t, e, r, n) {
  n === void 0 && (n = r), t[n] = e[r];
};
function cp(t, e) {
  for (var r in t)
    r !== "default" && !Object.prototype.hasOwnProperty.call(e, r) && Js(e, t, r);
}
function fs(t) {
  var e = typeof Symbol == "function" && Symbol.iterator, r = e && t[e], n = 0;
  if (r)
    return r.call(t);
  if (t && typeof t.length == "number")
    return {
      next: function() {
        return t && n >= t.length && (t = void 0), { value: t && t[n++], done: !t };
      }
    };
  throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function uu(t, e) {
  var r = typeof Symbol == "function" && t[Symbol.iterator];
  if (!r)
    return t;
  var n = r.call(t), i, s = [], o;
  try {
    for (; (e === void 0 || e-- > 0) && !(i = n.next()).done; )
      s.push(i.value);
  } catch (a) {
    o = { error: a };
  } finally {
    try {
      i && !i.done && (r = n.return) && r.call(n);
    } finally {
      if (o)
        throw o.error;
    }
  }
  return s;
}
function up() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t = t.concat(uu(arguments[e]));
  return t;
}
function lp() {
  for (var t = 0, e = 0, r = arguments.length; e < r; e++)
    t += arguments[e].length;
  for (var n = Array(t), i = 0, e = 0; e < r; e++)
    for (var s = arguments[e], o = 0, a = s.length; o < a; o++, i++)
      n[i] = s[o];
  return n;
}
function fp(t, e, r) {
  if (r || arguments.length === 2)
    for (var n = 0, i = e.length, s; n < i; n++)
      (s || !(n in e)) && (s || (s = Array.prototype.slice.call(e, 0, n)), s[n] = e[n]);
  return t.concat(s || Array.prototype.slice.call(e));
}
function xn(t) {
  return this instanceof xn ? (this.v = t, this) : new xn(t);
}
function hp(t, e, r) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var n = r.apply(t, e || []), i, s = [];
  return i = {}, o("next"), o("throw"), o("return"), i[Symbol.asyncIterator] = function() {
    return this;
  }, i;
  function o(p) {
    n[p] && (i[p] = function(v) {
      return new Promise(function(_, A) {
        s.push([p, v, _, A]) > 1 || a(p, v);
      });
    });
  }
  function a(p, v) {
    try {
      c(n[p](v));
    } catch (_) {
      d(s[0][3], _);
    }
  }
  function c(p) {
    p.value instanceof xn ? Promise.resolve(p.value.v).then(u, h) : d(s[0][2], p);
  }
  function u(p) {
    a("next", p);
  }
  function h(p) {
    a("throw", p);
  }
  function d(p, v) {
    p(v), s.shift(), s.length && a(s[0][0], s[0][1]);
  }
}
function dp(t) {
  var e, r;
  return e = {}, n("next"), n("throw", function(i) {
    throw i;
  }), n("return"), e[Symbol.iterator] = function() {
    return this;
  }, e;
  function n(i, s) {
    e[i] = t[i] ? function(o) {
      return (r = !r) ? { value: xn(t[i](o)), done: !1 } : s ? s(o) : o;
    } : s;
  }
}
function pp(t) {
  if (!Symbol.asyncIterator)
    throw new TypeError("Symbol.asyncIterator is not defined.");
  var e = t[Symbol.asyncIterator], r;
  return e ? e.call(t) : (t = typeof fs == "function" ? fs(t) : t[Symbol.iterator](), r = {}, n("next"), n("throw"), n("return"), r[Symbol.asyncIterator] = function() {
    return this;
  }, r);
  function n(s) {
    r[s] = t[s] && function(o) {
      return new Promise(function(a, c) {
        o = t[s](o), i(a, c, o.done, o.value);
      });
    };
  }
  function i(s, o, a, c) {
    Promise.resolve(c).then(function(u) {
      s({ value: u, done: a });
    }, o);
  }
}
function gp(t, e) {
  return Object.defineProperty ? Object.defineProperty(t, "raw", { value: e }) : t.raw = e, t;
}
var NE = Object.create ? function(t, e) {
  Object.defineProperty(t, "default", { enumerable: !0, value: e });
} : function(t, e) {
  t.default = e;
};
function bp(t) {
  if (t && t.__esModule)
    return t;
  var e = {};
  if (t != null)
    for (var r in t)
      r !== "default" && Object.prototype.hasOwnProperty.call(t, r) && Js(e, t, r);
  return NE(e, t), e;
}
function yp(t) {
  return t && t.__esModule ? t : { default: t };
}
function mp(t, e, r, n) {
  if (r === "a" && !n)
    throw new TypeError("Private accessor was defined without a getter");
  if (typeof e == "function" ? t !== e || !n : !e.has(t))
    throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return r === "m" ? n : r === "a" ? n.call(t) : n ? n.value : e.get(t);
}
function vp(t, e, r, n, i) {
  if (n === "m")
    throw new TypeError("Private method is not writable");
  if (n === "a" && !i)
    throw new TypeError("Private accessor was defined without a setter");
  if (typeof e == "function" ? t !== e || !i : !e.has(t))
    throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return n === "a" ? i.call(t, r) : i ? i.value = r : e.set(t, r), r;
}
function wp(t, e) {
  if (e === null || typeof e != "object" && typeof e != "function")
    throw new TypeError("Cannot use 'in' operator on non-object");
  return typeof t == "function" ? e === t : t.has(e);
}
function _p(t, e, r) {
  if (e != null) {
    if (typeof e != "object" && typeof e != "function")
      throw new TypeError("Object expected.");
    var n;
    if (r) {
      if (!Symbol.asyncDispose)
        throw new TypeError("Symbol.asyncDispose is not defined.");
      n = e[Symbol.asyncDispose];
    }
    if (n === void 0) {
      if (!Symbol.dispose)
        throw new TypeError("Symbol.dispose is not defined.");
      n = e[Symbol.dispose];
    }
    if (typeof n != "function")
      throw new TypeError("Object not disposable.");
    t.stack.push({ value: e, dispose: n, async: r });
  } else
    r && t.stack.push({ async: !0 });
  return e;
}
var LE = typeof SuppressedError == "function" ? SuppressedError : function(t, e, r) {
  var n = new Error(r);
  return n.name = "SuppressedError", n.error = t, n.suppressed = e, n;
};
function Ep(t) {
  function e(n) {
    t.error = t.hasError ? new LE(n, t.error, "An error was suppressed during disposal.") : n, t.hasError = !0;
  }
  function r() {
    for (; t.stack.length; ) {
      var n = t.stack.pop();
      try {
        var i = n.dispose && n.dispose.call(n.value);
        if (n.async)
          return Promise.resolve(i).then(r, function(s) {
            return e(s), r();
          });
      } catch (s) {
        e(s);
      }
    }
    if (t.hasError)
      throw t.error;
  }
  return r();
}
const PE = {
  __extends: tp,
  __assign: ls,
  __rest: rp,
  __decorate: np,
  __param: ip,
  __metadata: sp,
  __awaiter: op,
  __generator: ap,
  __createBinding: Js,
  __exportStar: cp,
  __values: fs,
  __read: uu,
  __spread: up,
  __spreadArrays: lp,
  __spreadArray: fp,
  __await: xn,
  __asyncGenerator: hp,
  __asyncDelegator: dp,
  __asyncValues: pp,
  __makeTemplateObject: gp,
  __importStar: bp,
  __importDefault: yp,
  __classPrivateFieldGet: mp,
  __classPrivateFieldSet: vp,
  __classPrivateFieldIn: wp,
  __addDisposableResource: _p,
  __disposeResources: Ep
}, BE = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  __addDisposableResource: _p,
  get __assign() {
    return ls;
  },
  __asyncDelegator: dp,
  __asyncGenerator: hp,
  __asyncValues: pp,
  __await: xn,
  __awaiter: op,
  __classPrivateFieldGet: mp,
  __classPrivateFieldIn: wp,
  __classPrivateFieldSet: vp,
  __createBinding: Js,
  __decorate: np,
  __disposeResources: Ep,
  __esDecorate: TE,
  __exportStar: cp,
  __extends: tp,
  __generator: ap,
  __importDefault: yp,
  __importStar: bp,
  __makeTemplateObject: gp,
  __metadata: sp,
  __param: ip,
  __propKey: OE,
  __read: uu,
  __rest: rp,
  __runInitializers: ME,
  __setFunctionName: kE,
  __spread: up,
  __spreadArray: fp,
  __spreadArrays: lp,
  __values: fs,
  default: PE
}, Symbol.toStringTag, { value: "Module" })), lu = /* @__PURE__ */ Wr(BE);
var Qs = {};
Object.defineProperty(Qs, "__esModule", { value: !0 });
var vf = lu, $E = (
  /** @class */
  function() {
    function t(e) {
      if (this._maxConcurrency = e, this._queue = [], e <= 0)
        throw new Error("semaphore must be initialized to a positive value");
      this._value = e;
    }
    return t.prototype.acquire = function() {
      var e = this, r = this.isLocked(), n = new Promise(function(i) {
        return e._queue.push(i);
      });
      return r || this._dispatch(), n;
    }, t.prototype.runExclusive = function(e) {
      return vf.__awaiter(this, void 0, void 0, function() {
        var r, n, i;
        return vf.__generator(this, function(s) {
          switch (s.label) {
            case 0:
              return [4, this.acquire()];
            case 1:
              r = s.sent(), n = r[0], i = r[1], s.label = 2;
            case 2:
              return s.trys.push([2, , 4, 5]), [4, e(n)];
            case 3:
              return [2, s.sent()];
            case 4:
              return i(), [
                7
                /*endfinally*/
              ];
            case 5:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, t.prototype.isLocked = function() {
      return this._value <= 0;
    }, t.prototype.release = function() {
      if (this._maxConcurrency > 1)
        throw new Error("this method is unavailabel on semaphores with concurrency > 1; use the scoped release returned by acquire instead");
      if (this._currentReleaser) {
        var e = this._currentReleaser;
        this._currentReleaser = void 0, e();
      }
    }, t.prototype._dispatch = function() {
      var e = this, r = this._queue.shift();
      if (r) {
        var n = !1;
        this._currentReleaser = function() {
          n || (n = !0, e._value++, e._dispatch());
        }, r([this._value--, this._currentReleaser]);
      }
    }, t;
  }()
);
Qs.default = $E;
Object.defineProperty(cu, "__esModule", { value: !0 });
var wf = lu, DE = Qs, FE = (
  /** @class */
  function() {
    function t() {
      this._semaphore = new DE.default(1);
    }
    return t.prototype.acquire = function() {
      return wf.__awaiter(this, void 0, void 0, function() {
        var e, r;
        return wf.__generator(this, function(n) {
          switch (n.label) {
            case 0:
              return [4, this._semaphore.acquire()];
            case 1:
              return e = n.sent(), r = e[1], [2, r];
          }
        });
      });
    }, t.prototype.runExclusive = function(e) {
      return this._semaphore.runExclusive(function() {
        return e();
      });
    }, t.prototype.isLocked = function() {
      return this._semaphore.isLocked();
    }, t.prototype.release = function() {
      this._semaphore.release();
    }, t;
  }()
);
cu.default = FE;
var Zs = {};
Object.defineProperty(Zs, "__esModule", { value: !0 });
Zs.withTimeout = void 0;
var qi = lu;
function jE(t, e, r) {
  var n = this;
  return r === void 0 && (r = new Error("timeout")), {
    acquire: function() {
      return new Promise(function(i, s) {
        return qi.__awaiter(n, void 0, void 0, function() {
          var o, a, c;
          return qi.__generator(this, function(u) {
            switch (u.label) {
              case 0:
                return o = !1, setTimeout(function() {
                  o = !0, s(r);
                }, e), [4, t.acquire()];
              case 1:
                return a = u.sent(), o ? (c = Array.isArray(a) ? a[1] : a, c()) : i(a), [
                  2
                  /*return*/
                ];
            }
          });
        });
      });
    },
    runExclusive: function(i) {
      return qi.__awaiter(this, void 0, void 0, function() {
        var s, o;
        return qi.__generator(this, function(a) {
          switch (a.label) {
            case 0:
              s = function() {
              }, a.label = 1;
            case 1:
              return a.trys.push([1, , 7, 8]), [4, this.acquire()];
            case 2:
              return o = a.sent(), Array.isArray(o) ? (s = o[1], [4, i(o[0])]) : [3, 4];
            case 3:
              return [2, a.sent()];
            case 4:
              return s = o, [4, i()];
            case 5:
              return [2, a.sent()];
            case 6:
              return [3, 8];
            case 7:
              return s(), [
                7
                /*endfinally*/
              ];
            case 8:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    },
    release: function() {
      t.release();
    },
    isLocked: function() {
      return t.isLocked();
    }
  };
}
Zs.withTimeout = jE;
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.withTimeout = t.Semaphore = t.Mutex = void 0;
  var e = cu;
  Object.defineProperty(t, "Mutex", { enumerable: !0, get: function() {
    return e.default;
  } });
  var r = Qs;
  Object.defineProperty(t, "Semaphore", { enumerable: !0, get: function() {
    return r.default;
  } });
  var n = Zs;
  Object.defineProperty(t, "withTimeout", { enumerable: !0, get: function() {
    return n.withTimeout;
  } });
})(ep);
var UE = VE, WE = Object.prototype.hasOwnProperty;
function VE() {
  for (var t = {}, e = 0; e < arguments.length; e++) {
    var r = arguments[e];
    for (var n in r)
      WE.call(r, n) && (t[n] = r[n]);
  }
  return t;
}
const HE = UE, zE = jc();
var qE = ne;
function ne(t) {
  const e = this;
  e.currentProvider = t;
}
ne.prototype.getBalance = Ti(2, "eth_getBalance");
ne.prototype.getCode = Ti(2, "eth_getCode");
ne.prototype.getTransactionCount = Ti(2, "eth_getTransactionCount");
ne.prototype.getStorageAt = Ti(3, "eth_getStorageAt");
ne.prototype.call = Ti(2, "eth_call");
ne.prototype.protocolVersion = le("eth_protocolVersion");
ne.prototype.syncing = le("eth_syncing");
ne.prototype.coinbase = le("eth_coinbase");
ne.prototype.mining = le("eth_mining");
ne.prototype.hashrate = le("eth_hashrate");
ne.prototype.gasPrice = le("eth_gasPrice");
ne.prototype.accounts = le("eth_accounts");
ne.prototype.blockNumber = le("eth_blockNumber");
ne.prototype.getBlockTransactionCountByHash = le("eth_getBlockTransactionCountByHash");
ne.prototype.getBlockTransactionCountByNumber = le("eth_getBlockTransactionCountByNumber");
ne.prototype.getUncleCountByBlockHash = le("eth_getUncleCountByBlockHash");
ne.prototype.getUncleCountByBlockNumber = le("eth_getUncleCountByBlockNumber");
ne.prototype.sign = le("eth_sign");
ne.prototype.sendTransaction = le("eth_sendTransaction");
ne.prototype.sendRawTransaction = le("eth_sendRawTransaction");
ne.prototype.estimateGas = le("eth_estimateGas");
ne.prototype.getBlockByHash = le("eth_getBlockByHash");
ne.prototype.getBlockByNumber = le("eth_getBlockByNumber");
ne.prototype.getTransactionByHash = le("eth_getTransactionByHash");
ne.prototype.getTransactionByBlockHashAndIndex = le("eth_getTransactionByBlockHashAndIndex");
ne.prototype.getTransactionByBlockNumberAndIndex = le("eth_getTransactionByBlockNumberAndIndex");
ne.prototype.getTransactionReceipt = le("eth_getTransactionReceipt");
ne.prototype.getUncleByBlockHashAndIndex = le("eth_getUncleByBlockHashAndIndex");
ne.prototype.getUncleByBlockNumberAndIndex = le("eth_getUncleByBlockNumberAndIndex");
ne.prototype.getCompilers = le("eth_getCompilers");
ne.prototype.compileLLL = le("eth_compileLLL");
ne.prototype.compileSolidity = le("eth_compileSolidity");
ne.prototype.compileSerpent = le("eth_compileSerpent");
ne.prototype.newFilter = le("eth_newFilter");
ne.prototype.newBlockFilter = le("eth_newBlockFilter");
ne.prototype.newPendingTransactionFilter = le("eth_newPendingTransactionFilter");
ne.prototype.uninstallFilter = le("eth_uninstallFilter");
ne.prototype.getFilterChanges = le("eth_getFilterChanges");
ne.prototype.getFilterLogs = le("eth_getFilterLogs");
ne.prototype.getLogs = le("eth_getLogs");
ne.prototype.getWork = le("eth_getWork");
ne.prototype.submitWork = le("eth_submitWork");
ne.prototype.submitHashrate = le("eth_submitHashrate");
ne.prototype.sendAsync = function(t, e) {
  this.currentProvider.sendAsync(GE(t), function(n, i) {
    if (!n && i.error && (n = new Error("EthQuery - RPC Error - " + i.error.message)), n)
      return e(n);
    e(null, i.result);
  });
};
function le(t) {
  return function() {
    const e = this;
    var r = [].slice.call(arguments), n = r.pop();
    e.sendAsync({
      method: t,
      params: r
    }, n);
  };
}
function Ti(t, e) {
  return function() {
    const r = this;
    var n = [].slice.call(arguments), i = n.pop();
    n.length < t && n.push("latest"), r.sendAsync({
      method: e,
      params: n
    }, i);
  };
}
function GE(t) {
  return HE({
    // defaults
    id: zE(),
    jsonrpc: "2.0",
    params: []
    // user-specified
  }, t);
}
const _f = (t, e, r, n) => function(...i) {
  const s = e.promiseModule;
  return new s((o, a) => {
    e.multiArgs ? i.push((...u) => {
      e.errorFirst ? u[0] ? a(u) : (u.shift(), o(u)) : o(u);
    }) : e.errorFirst ? i.push((u, h) => {
      u ? a(u) : o(h);
    }) : i.push(o), Reflect.apply(t, this === r ? n : this, i);
  });
}, Ef = /* @__PURE__ */ new WeakMap();
var JE = (t, e) => {
  e = {
    exclude: [/.+(?:Sync|Stream)$/],
    errorFirst: !0,
    promiseModule: Promise,
    ...e
  };
  const r = typeof t;
  if (!(t !== null && (r === "object" || r === "function")))
    throw new TypeError(`Expected \`input\` to be a \`Function\` or \`Object\`, got \`${t === null ? "null" : r}\``);
  const n = (o, a) => {
    let c = Ef.get(o);
    if (c || (c = {}, Ef.set(o, c)), a in c)
      return c[a];
    const u = (_) => typeof _ == "string" || typeof a == "symbol" ? a === _ : _.test(a), h = Reflect.getOwnPropertyDescriptor(o, a), d = h === void 0 || h.writable || h.configurable, v = (e.include ? e.include.some(u) : !e.exclude.some(u)) && d;
    return c[a] = v, v;
  }, i = /* @__PURE__ */ new WeakMap(), s = new Proxy(t, {
    apply(o, a, c) {
      const u = i.get(o);
      if (u)
        return Reflect.apply(u, a, c);
      const h = e.excludeMain ? o : _f(o, e, s, o);
      return i.set(o, h), Reflect.apply(h, a, c);
    },
    get(o, a) {
      const c = o[a];
      if (!n(o, a) || c === Function.prototype[a])
        return c;
      const u = i.get(c);
      if (u)
        return u;
      if (typeof c == "function") {
        const h = _f(c, e, s, o);
        return i.set(c, h), h;
      }
      return c;
    }
  });
  return s;
};
const QE = Vr.default;
let ZE = class extends QE {
  constructor() {
    super(), this.updates = [];
  }
  async initialize() {
  }
  async update() {
    throw new Error("BaseFilter - no update method specified");
  }
  addResults(e) {
    this.updates = this.updates.concat(e), e.forEach((r) => this.emit("update", r));
  }
  addInitialResults(e) {
  }
  getChangesAndClear() {
    const e = this.updates;
    return this.updates = [], e;
  }
};
var fu = ZE;
const YE = fu;
let KE = class extends YE {
  constructor() {
    super(), this.allResults = [];
  }
  async update() {
    throw new Error("BaseFilterWithHistory - no update method specified");
  }
  addResults(e) {
    this.allResults = this.allResults.concat(e), super.addResults(e);
  }
  addInitialResults(e) {
    this.allResults = this.allResults.concat(e), super.addInitialResults(e);
  }
  getAllResults() {
    return this.allResults;
  }
};
var XE = KE, Mi = {
  minBlockRef: eS,
  maxBlockRef: tS,
  sortBlockRefs: hu,
  bnToHex: rS,
  blockRefIsNumber: nS,
  hexToInt: hs,
  incrementHexInt: iS,
  intToHex: Sp,
  unsafeRandomBytes: sS
};
function eS(...t) {
  return hu(t)[0];
}
function tS(...t) {
  const e = hu(t);
  return e[e.length - 1];
}
function hu(t) {
  return t.sort((e, r) => e === "latest" || r === "earliest" ? 1 : r === "latest" || e === "earliest" ? -1 : hs(e) - hs(r));
}
function rS(t) {
  return "0x" + t.toString(16);
}
function nS(t) {
  return t && !["earliest", "latest", "pending"].includes(t);
}
function hs(t) {
  return t == null ? t : Number.parseInt(t, 16);
}
function iS(t) {
  if (t == null)
    return t;
  const e = hs(t);
  return Sp(e + 1);
}
function Sp(t) {
  if (t == null)
    return t;
  let e = t.toString(16);
  return e.length % 2 && (e = "0" + e), "0x" + e;
}
function sS(t) {
  let e = "0x";
  for (let r = 0; r < t; r++)
    e += Sf(), e += Sf();
  return e;
}
function Sf() {
  return Math.floor(Math.random() * 16).toString(16);
}
const oS = qE, aS = JE, cS = XE, { bnToHex: h8, hexToInt: Gi, incrementHexInt: uS, minBlockRef: lS, blockRefIsNumber: fS } = Mi;
let hS = class extends cS {
  constructor({ provider: e, params: r }) {
    super(), this.type = "log", this.ethQuery = new oS(e), this.params = Object.assign({
      fromBlock: "latest",
      toBlock: "latest",
      address: void 0,
      topics: []
    }, r), this.params.address && (Array.isArray(this.params.address) || (this.params.address = [this.params.address]), this.params.address = this.params.address.map((n) => n.toLowerCase()));
  }
  async initialize({ currentBlock: e }) {
    let r = this.params.fromBlock;
    ["latest", "pending"].includes(r) && (r = e), r === "earliest" && (r = "0x0"), this.params.fromBlock = r;
    const n = lS(this.params.toBlock, e), i = Object.assign({}, this.params, { toBlock: n }), s = await this._fetchLogs(i);
    this.addInitialResults(s);
  }
  async update({ oldBlock: e, newBlock: r }) {
    const n = r;
    let i;
    e ? i = uS(e) : i = r;
    const s = Object.assign({}, this.params, { fromBlock: i, toBlock: n }), a = (await this._fetchLogs(s)).filter((c) => this.matchLog(c));
    this.addResults(a);
  }
  async _fetchLogs(e) {
    return await aS((n) => this.ethQuery.getLogs(e, n))();
  }
  matchLog(e) {
    if (Gi(this.params.fromBlock) >= Gi(e.blockNumber) || fS(this.params.toBlock) && Gi(this.params.toBlock) <= Gi(e.blockNumber))
      return !1;
    const r = e.address && e.address.toLowerCase();
    return this.params.address && r && !this.params.address.includes(r) ? !1 : this.params.topics.every((i, s) => {
      let o = e.topics[s];
      if (!o)
        return !1;
      o = o.toLowerCase();
      let a = Array.isArray(i) ? i : [i];
      return a.includes(null) ? !0 : (a = a.map((h) => h.toLowerCase()), a.includes(o));
    });
  }
};
var dS = hS, du = pS;
async function pS({ provider: t, fromBlock: e, toBlock: r }) {
  e || (e = r);
  const n = xf(e), s = xf(r) - n + 1, o = Array(s).fill().map((c, u) => n + u).map(gS);
  return await Promise.all(
    o.map((c) => yS(t, "eth_getBlockByNumber", [c, !1]))
  );
}
function xf(t) {
  return t == null ? t : Number.parseInt(t, 16);
}
function gS(t) {
  return t == null ? t : "0x" + t.toString(16);
}
function bS(t, e) {
  return new Promise((r, n) => {
    t.sendAsync(e, (i, s) => {
      i ? n(i) : s.error ? n(s.error) : s.result ? r(s.result) : n(new Error("Result was empty"));
    });
  });
}
async function yS(t, e, r) {
  for (let n = 0; n < 3; n++)
    try {
      return await bS(t, {
        id: 1,
        jsonrpc: "2.0",
        method: e,
        params: r
      });
    } catch (i) {
      console.error(
        `provider.sendAsync failed: ${i.stack || i.message || i}`
      );
    }
  throw new Error(`Block not found for params: ${JSON.stringify(r)}`);
}
const mS = fu, vS = du, { incrementHexInt: wS } = Mi;
let _S = class extends mS {
  constructor({ provider: e, params: r }) {
    super(), this.type = "block", this.provider = e;
  }
  async update({ oldBlock: e, newBlock: r }) {
    const n = r, i = wS(e), o = (await vS({ provider: this.provider, fromBlock: i, toBlock: n })).map((a) => a.hash);
    this.addResults(o);
  }
};
var ES = _S;
const SS = fu, xS = du, { incrementHexInt: CS } = Mi;
let IS = class extends SS {
  constructor({ provider: e }) {
    super(), this.type = "tx", this.provider = e;
  }
  async update({ oldBlock: e }) {
    const r = e, n = CS(e), i = await xS({ provider: this.provider, fromBlock: n, toBlock: r }), s = [];
    for (const o of i)
      s.push(...o.transactions);
    this.addResults(s);
  }
};
var RS = IS;
const AS = ep.Mutex, { createAsyncMiddleware: TS, createScaffoldMiddleware: MS } = su, OS = dS, kS = ES, NS = RS, { intToHex: xp, hexToInt: Ua } = Mi;
var LS = PS;
function PS({ blockTracker: t, provider: e }) {
  let r = 0, n = {};
  const i = new AS(), s = BS({ mutex: i }), o = MS({
    // install filters
    eth_newFilter: s(Wa(c)),
    eth_newBlockFilter: s(Wa(u)),
    eth_newPendingTransactionFilter: s(Wa(h)),
    // uninstall filters
    eth_uninstallFilter: s(ts(v)),
    // checking filter changes
    eth_getFilterChanges: s(ts(d)),
    eth_getFilterLogs: s(ts(p))
  }), a = async ({ oldBlock: E, newBlock: x }) => {
    if (n.length === 0)
      return;
    const O = await i.acquire();
    try {
      await Promise.all(rn(n).map(async (M) => {
        try {
          await M.update({ oldBlock: E, newBlock: x });
        } catch (D) {
          console.error(D);
        }
      }));
    } catch (M) {
      console.error(M);
    }
    O();
  };
  return o.newLogFilter = c, o.newBlockFilter = u, o.newPendingTransactionFilter = h, o.uninstallFilter = v, o.getFilterChanges = d, o.getFilterLogs = p, o.destroy = () => {
    R();
  }, o;
  async function c(E) {
    const x = new OS({ provider: e, params: E });
    return await _(x), x;
  }
  async function u() {
    const E = new kS({ provider: e });
    return await _(E), E;
  }
  async function h() {
    const E = new NS({ provider: e });
    return await _(E), E;
  }
  async function d(E) {
    const x = Ua(E), O = n[x];
    if (!O)
      throw new Error(`No filter for index "${x}"`);
    return O.getChangesAndClear();
  }
  async function p(E) {
    const x = Ua(E), O = n[x];
    if (!O)
      throw new Error(`No filter for index "${x}"`);
    let M = [];
    return O.type === "log" && (M = O.getAllResults()), M;
  }
  async function v(E) {
    const x = Ua(E), M = !!n[x];
    return M && await A(x), M;
  }
  async function _(E) {
    const x = rn(n).length, O = await t.getLatestBlock();
    await E.initialize({ currentBlock: O }), r++, n[r] = E, E.id = r, E.idHex = xp(r);
    const M = rn(n).length;
    return y({ prevFilterCount: x, newFilterCount: M }), r;
  }
  async function A(E) {
    const x = rn(n).length;
    delete n[E];
    const O = rn(n).length;
    y({ prevFilterCount: x, newFilterCount: O });
  }
  async function R() {
    const E = rn(n).length;
    n = {}, y({ prevFilterCount: E, newFilterCount: 0 });
  }
  function y({ prevFilterCount: E, newFilterCount: x }) {
    if (E === 0 && x > 0) {
      t.on("sync", a);
      return;
    }
    if (E > 0 && x === 0) {
      t.removeListener("sync", a);
      return;
    }
  }
}
function Wa(t) {
  return ts(async (...e) => {
    const r = await t(...e);
    return xp(r.id);
  });
}
function ts(t) {
  return TS(async (e, r) => {
    const n = await t.apply(null, e.params);
    r.result = n;
  });
}
function BS({ mutex: t }) {
  return (e) => async (r, n, i, s) => {
    (await t.acquire())(), e(r, n, i, s);
  };
}
function rn(t, e) {
  const r = [];
  for (let n in t)
    r.push(t[n]);
  return r;
}
const $S = Vr.default, { createAsyncMiddleware: Cf, createScaffoldMiddleware: DS } = su, FS = LS, { unsafeRandomBytes: jS, incrementHexInt: US } = Mi, WS = du;
var VS = HS;
function HS({ blockTracker: t, provider: e }) {
  const r = {}, n = FS({ blockTracker: t, provider: e });
  let i = !1;
  const s = new $S(), o = DS({
    eth_subscribe: Cf(a),
    eth_unsubscribe: Cf(c)
  });
  return o.destroy = h, { events: s, middleware: o };
  async function a(d, p) {
    if (i)
      throw new Error(
        "SubscriptionManager - attempting to use after destroying"
      );
    const v = d.params[0], _ = jS(16);
    let A;
    switch (v) {
      case "newHeads":
        A = R({ subId: _ });
        break;
      case "logs":
        const E = d.params[1], x = await n.newLogFilter(E);
        A = y({ subId: _, filter: x });
        break;
      default:
        throw new Error(`SubscriptionManager - unsupported subscription type "${v}"`);
    }
    r[_] = A, p.result = _;
    return;
    function R({ subId: E }) {
      const x = {
        type: v,
        destroy: async () => {
          t.removeListener("sync", x.update);
        },
        update: async ({ oldBlock: O, newBlock: M }) => {
          const D = M, J = US(O);
          (await WS({ provider: e, fromBlock: J, toBlock: D })).map(zS).filter((X) => X !== null).forEach((X) => {
            u(E, X);
          });
        }
      };
      return t.on("sync", x.update), x;
    }
    function y({ subId: E, filter: x }) {
      return x.on("update", (M) => u(E, M)), {
        type: v,
        destroy: async () => await n.uninstallFilter(x.idHex)
      };
    }
  }
  async function c(d, p) {
    if (i)
      throw new Error(
        "SubscriptionManager - attempting to use after destroying"
      );
    const v = d.params[0], _ = r[v];
    if (!_) {
      p.result = !1;
      return;
    }
    delete r[v], await _.destroy(), p.result = !0;
  }
  function u(d, p) {
    s.emit("notification", {
      jsonrpc: "2.0",
      method: "eth_subscription",
      params: {
        subscription: d,
        result: p
      }
    });
  }
  function h() {
    s.removeAllListeners();
    for (const d in r)
      r[d].destroy(), delete r[d];
    i = !0;
  }
}
function zS(t) {
  return t == null ? null : {
    hash: t.hash,
    parentHash: t.parentHash,
    sha3Uncles: t.sha3Uncles,
    miner: t.miner,
    stateRoot: t.stateRoot,
    transactionsRoot: t.transactionsRoot,
    receiptsRoot: t.receiptsRoot,
    logsBloom: t.logsBloom,
    difficulty: t.difficulty,
    number: t.number,
    gasLimit: t.gasLimit,
    gasUsed: t.gasUsed,
    nonce: t.nonce,
    mixHash: t.mixHash,
    timestamp: t.timestamp,
    extraData: t.extraData
  };
}
Object.defineProperty(ks, "__esModule", { value: !0 });
ks.SubscriptionManager = void 0;
const qS = pd, GS = VS, If = () => {
};
class JS {
  constructor(e) {
    const r = new qS.PollingBlockTracker({
      provider: e,
      pollingInterval: 15e3,
      setSkipCacheFlag: !0
    }), { events: n, middleware: i } = GS({
      blockTracker: r,
      provider: e
    });
    this.events = n, this.subscriptionMiddleware = i;
  }
  async handleRequest(e) {
    const r = {};
    return await this.subscriptionMiddleware(e, r, If, If), r;
  }
  destroy() {
    this.subscriptionMiddleware.destroy();
  }
}
ks.SubscriptionManager = JS;
var pu = G && G.__importDefault || function(t) {
  return t && t.__esModule ? t : { default: t };
};
Object.defineProperty(bn, "__esModule", { value: !0 });
bn.CoinbaseWalletProvider = void 0;
const QS = pu(Vr), ZS = pu(ms), Va = On, Se = hi, Rf = Nn, Af = Mt, Ha = Ss, YS = Ie, ce = Z, za = pu(Em), KS = _n, we = dd, XS = ks, Tf = "DefaultChainId", Mf = "DefaultJsonRpcUrl";
class e3 extends QS.default {
  constructor(e) {
    var r, n;
    super(), this._filterPolyfill = new KS.FilterPolyfill(this), this._subscriptionManager = new XS.SubscriptionManager(this), this._relay = null, this._addresses = [], this.hasMadeFirstChainChangedEmission = !1, this.setProviderInfo = this.setProviderInfo.bind(this), this.updateProviderInfo = this.updateProviderInfo.bind(this), this.getChainId = this.getChainId.bind(this), this.setAppInfo = this.setAppInfo.bind(this), this.enable = this.enable.bind(this), this.close = this.close.bind(this), this.send = this.send.bind(this), this.sendAsync = this.sendAsync.bind(this), this.request = this.request.bind(this), this._setAddresses = this._setAddresses.bind(this), this.scanQRCode = this.scanQRCode.bind(this), this.genericRequest = this.genericRequest.bind(this), this._chainIdFromOpts = e.chainId, this._jsonRpcUrlFromOpts = e.jsonRpcUrl, this._overrideIsMetaMask = e.overrideIsMetaMask, this._relayProvider = e.relayProvider, this._storage = e.storage, this._relayEventManager = e.relayEventManager, this.diagnostic = e.diagnosticLogger, this.reloadOnDisconnect = !0, this.isCoinbaseWallet = (r = e.overrideIsCoinbaseWallet) !== null && r !== void 0 ? r : !0, this.isCoinbaseBrowser = (n = e.overrideIsCoinbaseBrowser) !== null && n !== void 0 ? n : !1, this.qrUrl = e.qrUrl;
    const i = this.getChainId(), s = (0, ce.prepend0x)(i.toString(16));
    this.emit("connect", { chainIdStr: s });
    const o = this._storage.getItem(Af.LOCAL_STORAGE_ADDRESSES_KEY);
    if (o) {
      const a = o.split(" ");
      a[0] !== "" && (this._addresses = a.map((c) => (0, ce.ensureAddressString)(c)), this.emit("accountsChanged", a));
    }
    this._subscriptionManager.events.on("notification", (a) => {
      this.emit("message", {
        type: a.method,
        data: a.params
      });
    }), this._isAuthorized() && this.initializeRelay(), window.addEventListener("message", (a) => {
      var c;
      if (!(a.origin !== location.origin || a.source !== window) && a.data.type === "walletLinkMessage") {
        if (a.data.data.action === "dappChainSwitched") {
          const u = a.data.data.chainId, h = (c = a.data.data.jsonRpcUrl) !== null && c !== void 0 ? c : this.jsonRpcUrl;
          this.updateProviderInfo(h, Number(u));
        }
        a.data.data.action === "addressChanged" && this._setAddresses([a.data.data.address]);
      }
    });
  }
  /** @deprecated Use `.request({ method: 'eth_accounts' })` instead. */
  get selectedAddress() {
    return this._addresses[0] || void 0;
  }
  /** @deprecated Use the chain ID. If you still need the network ID, use `.request({ method: 'net_version' })`. */
  get networkVersion() {
    return this.getChainId().toString(10);
  }
  /** @deprecated Use `.request({ method: 'eth_chainId' })` instead. */
  get chainId() {
    return (0, ce.prepend0x)(this.getChainId().toString(16));
  }
  get isWalletLink() {
    return !0;
  }
  /**
   * Some DApps (i.e. Alpha Homora) seem to require the window.ethereum object return
   * true for this method.
   */
  get isMetaMask() {
    return this._overrideIsMetaMask;
  }
  get host() {
    return this.jsonRpcUrl;
  }
  get connected() {
    return !0;
  }
  isConnected() {
    return !0;
  }
  get jsonRpcUrl() {
    var e;
    return (e = this._storage.getItem(Mf)) !== null && e !== void 0 ? e : this._jsonRpcUrlFromOpts;
  }
  set jsonRpcUrl(e) {
    this._storage.setItem(Mf, e);
  }
  disableReloadOnDisconnect() {
    this.reloadOnDisconnect = !1;
  }
  setProviderInfo(e, r) {
    this.isCoinbaseBrowser || (this._chainIdFromOpts = r, this._jsonRpcUrlFromOpts = e), this.updateProviderInfo(this.jsonRpcUrl, this.getChainId());
  }
  updateProviderInfo(e, r) {
    this.jsonRpcUrl = e;
    const n = this.getChainId();
    this._storage.setItem(Tf, r.toString(10)), ((0, ce.ensureIntNumber)(r) !== n || !this.hasMadeFirstChainChangedEmission) && (this.emit("chainChanged", this.getChainId()), this.hasMadeFirstChainChangedEmission = !0);
  }
  async watchAsset(e, r, n, i, s, o) {
    return !!(await (await this.initializeRelay()).watchAsset(e, r, n, i, s, o == null ? void 0 : o.toString()).promise).result;
  }
  async addEthereumChain(e, r, n, i, s, o) {
    var a, c;
    if ((0, ce.ensureIntNumber)(e) === this.getChainId())
      return !1;
    const u = await this.initializeRelay(), h = u.inlineAddEthereumChain(e.toString());
    !this._isAuthorized() && !h && await u.requestEthereumAccounts().promise;
    const d = await u.addEthereumChain(e.toString(), r, s, n, i, o).promise;
    return ((a = d.result) === null || a === void 0 ? void 0 : a.isApproved) === !0 && this.updateProviderInfo(r[0], e), ((c = d.result) === null || c === void 0 ? void 0 : c.isApproved) === !0;
  }
  async switchEthereumChain(e) {
    const n = await (await this.initializeRelay()).switchEthereumChain(e.toString(10), this.selectedAddress || void 0).promise;
    if ((0, YS.isErrorResponse)(n) && n.errorCode)
      throw n.errorCode === Se.standardErrorCodes.provider.unsupportedChain ? Se.standardErrors.provider.unsupportedChain(e) : Se.standardErrors.provider.custom({
        message: n.errorMessage,
        code: n.errorCode
      });
    const i = n.result;
    i.isApproved && i.rpcUrl.length > 0 && this.updateProviderInfo(i.rpcUrl, e);
  }
  setAppInfo(e, r) {
    this.initializeRelay().then((n) => n.setAppInfo(e, r));
  }
  /** @deprecated Use `.request({ method: 'eth_requestAccounts' })` instead. */
  async enable() {
    var e;
    return (e = this.diagnostic) === null || e === void 0 || e.log(Va.EVENTS.ETH_ACCOUNTS_STATE, {
      method: "provider::enable",
      addresses_length: this._addresses.length,
      sessionIdHash: this._relay ? Rf.Session.hash(this._relay.session.id) : void 0
    }), this._isAuthorized() ? [...this._addresses] : await this.send(we.JSONRPCMethod.eth_requestAccounts);
  }
  async close() {
    (await this.initializeRelay()).resetAndReload();
  }
  send(e, r) {
    try {
      const n = this._send(e, r);
      if (n instanceof Promise)
        return n.catch((i) => {
          throw (0, Se.serializeError)(i, e);
        });
    } catch (n) {
      throw (0, Se.serializeError)(n, e);
    }
  }
  _send(e, r) {
    if (typeof e == "string") {
      const i = e, s = Array.isArray(r) ? r : r !== void 0 ? [r] : [], o = {
        jsonrpc: "2.0",
        id: 0,
        method: i,
        params: s
      };
      return this._sendRequestAsync(o).then((a) => a.result);
    }
    if (typeof r == "function") {
      const i = e, s = r;
      return this._sendAsync(i, s);
    }
    if (Array.isArray(e))
      return e.map((s) => this._sendRequest(s));
    const n = e;
    return this._sendRequest(n);
  }
  async sendAsync(e, r) {
    try {
      return this._sendAsync(e, r).catch((n) => {
        throw (0, Se.serializeError)(n, e);
      });
    } catch (n) {
      return Promise.reject((0, Se.serializeError)(n, e));
    }
  }
  async _sendAsync(e, r) {
    if (typeof r != "function")
      throw new Error("callback is required");
    if (Array.isArray(e)) {
      const i = r;
      this._sendMultipleRequestsAsync(e).then((s) => i(null, s)).catch((s) => i(s, null));
      return;
    }
    const n = r;
    return this._sendRequestAsync(e).then((i) => n(null, i)).catch((i) => n(i, null));
  }
  async request(e) {
    try {
      return this._request(e).catch((r) => {
        throw (0, Se.serializeError)(r, e.method);
      });
    } catch (r) {
      return Promise.reject((0, Se.serializeError)(r, e.method));
    }
  }
  async _request(e) {
    if (!e || typeof e != "object" || Array.isArray(e))
      throw Se.standardErrors.rpc.invalidRequest({
        message: "Expected a single, non-array, object argument.",
        data: e
      });
    const { method: r, params: n } = e;
    if (typeof r != "string" || r.length === 0)
      throw Se.standardErrors.rpc.invalidRequest({
        message: "'args.method' must be a non-empty string.",
        data: e
      });
    if (n !== void 0 && !Array.isArray(n) && (typeof n != "object" || n === null))
      throw Se.standardErrors.rpc.invalidRequest({
        message: "'args.params' must be an object or array if provided.",
        data: e
      });
    const i = n === void 0 ? [] : n, s = this._relayEventManager.makeRequestId();
    return (await this._sendRequestAsync({
      method: r,
      params: i,
      jsonrpc: "2.0",
      id: s
    })).result;
  }
  async scanQRCode(e) {
    var r;
    const i = await (await this.initializeRelay()).scanQRCode((0, ce.ensureRegExpString)(e)).promise;
    if (typeof i.result != "string")
      throw (0, Se.serializeError)((r = i.errorMessage) !== null && r !== void 0 ? r : "result was not a string", Ha.Web3Method.scanQRCode);
    return i.result;
  }
  async genericRequest(e, r) {
    var n;
    const s = await (await this.initializeRelay()).genericRequest(e, r).promise;
    if (typeof s.result != "string")
      throw (0, Se.serializeError)((n = s.errorMessage) !== null && n !== void 0 ? n : "result was not a string", Ha.Web3Method.generic);
    return s.result;
  }
  async selectProvider(e) {
    var r;
    const i = await (await this.initializeRelay()).selectProvider(e).promise;
    if (typeof i.result != "string")
      throw (0, Se.serializeError)((r = i.errorMessage) !== null && r !== void 0 ? r : "result was not a string", Ha.Web3Method.selectProvider);
    return i.result;
  }
  supportsSubscriptions() {
    return !1;
  }
  subscribe() {
    throw new Error("Subscriptions are not supported");
  }
  unsubscribe() {
    throw new Error("Subscriptions are not supported");
  }
  disconnect() {
    return !0;
  }
  _sendRequest(e) {
    const r = {
      jsonrpc: "2.0",
      id: e.id
    }, { method: n } = e;
    if (r.result = this._handleSynchronousMethods(e), r.result === void 0)
      throw new Error(`Coinbase Wallet does not support calling ${n} synchronously without a callback. Please provide a callback parameter to call ${n} asynchronously.`);
    return r;
  }
  _setAddresses(e, r) {
    if (!Array.isArray(e))
      throw new Error("addresses is not an array");
    const n = e.map((i) => (0, ce.ensureAddressString)(i));
    JSON.stringify(n) !== JSON.stringify(this._addresses) && (this._addresses = n, this.emit("accountsChanged", this._addresses), this._storage.setItem(Af.LOCAL_STORAGE_ADDRESSES_KEY, n.join(" ")));
  }
  _sendRequestAsync(e) {
    return new Promise((r, n) => {
      try {
        const i = this._handleSynchronousMethods(e);
        if (i !== void 0)
          return r({
            jsonrpc: "2.0",
            id: e.id,
            result: i
          });
        const s = this._handleAsynchronousFilterMethods(e);
        if (s !== void 0) {
          s.then((a) => r(Object.assign(Object.assign({}, a), { id: e.id }))).catch((a) => n(a));
          return;
        }
        const o = this._handleSubscriptionMethods(e);
        if (o !== void 0) {
          o.then((a) => r({
            jsonrpc: "2.0",
            id: e.id,
            result: a.result
          })).catch((a) => n(a));
          return;
        }
      } catch (i) {
        return n(i);
      }
      this._handleAsynchronousMethods(e).then((i) => i && r(Object.assign(Object.assign({}, i), { id: e.id }))).catch((i) => n(i));
    });
  }
  _sendMultipleRequestsAsync(e) {
    return Promise.all(e.map((r) => this._sendRequestAsync(r)));
  }
  _handleSynchronousMethods(e) {
    const { method: r } = e, n = e.params || [];
    switch (r) {
      case we.JSONRPCMethod.eth_accounts:
        return this._eth_accounts();
      case we.JSONRPCMethod.eth_coinbase:
        return this._eth_coinbase();
      case we.JSONRPCMethod.eth_uninstallFilter:
        return this._eth_uninstallFilter(n);
      case we.JSONRPCMethod.net_version:
        return this._net_version();
      case we.JSONRPCMethod.eth_chainId:
        return this._eth_chainId();
      default:
        return;
    }
  }
  async _handleAsynchronousMethods(e) {
    const { method: r } = e, n = e.params || [];
    switch (r) {
      case we.JSONRPCMethod.eth_requestAccounts:
        return this._eth_requestAccounts();
      case we.JSONRPCMethod.eth_sign:
        return this._eth_sign(n);
      case we.JSONRPCMethod.eth_ecRecover:
        return this._eth_ecRecover(n);
      case we.JSONRPCMethod.personal_sign:
        return this._personal_sign(n);
      case we.JSONRPCMethod.personal_ecRecover:
        return this._personal_ecRecover(n);
      case we.JSONRPCMethod.eth_signTransaction:
        return this._eth_signTransaction(n);
      case we.JSONRPCMethod.eth_sendRawTransaction:
        return this._eth_sendRawTransaction(n);
      case we.JSONRPCMethod.eth_sendTransaction:
        return this._eth_sendTransaction(n);
      case we.JSONRPCMethod.eth_signTypedData_v1:
        return this._eth_signTypedData_v1(n);
      case we.JSONRPCMethod.eth_signTypedData_v2:
        return this._throwUnsupportedMethodError();
      case we.JSONRPCMethod.eth_signTypedData_v3:
        return this._eth_signTypedData_v3(n);
      case we.JSONRPCMethod.eth_signTypedData_v4:
      case we.JSONRPCMethod.eth_signTypedData:
        return this._eth_signTypedData_v4(n);
      case we.JSONRPCMethod.cbWallet_arbitrary:
        return this._cbwallet_arbitrary(n);
      case we.JSONRPCMethod.wallet_addEthereumChain:
        return this._wallet_addEthereumChain(n);
      case we.JSONRPCMethod.wallet_switchEthereumChain:
        return this._wallet_switchEthereumChain(n);
      case we.JSONRPCMethod.wallet_watchAsset:
        return this._wallet_watchAsset(n);
    }
    return (await this.initializeRelay()).makeEthereumJSONRPCRequest(e, this.jsonRpcUrl);
  }
  _handleAsynchronousFilterMethods(e) {
    const { method: r } = e, n = e.params || [];
    switch (r) {
      case we.JSONRPCMethod.eth_newFilter:
        return this._eth_newFilter(n);
      case we.JSONRPCMethod.eth_newBlockFilter:
        return this._eth_newBlockFilter();
      case we.JSONRPCMethod.eth_newPendingTransactionFilter:
        return this._eth_newPendingTransactionFilter();
      case we.JSONRPCMethod.eth_getFilterChanges:
        return this._eth_getFilterChanges(n);
      case we.JSONRPCMethod.eth_getFilterLogs:
        return this._eth_getFilterLogs(n);
    }
  }
  _handleSubscriptionMethods(e) {
    switch (e.method) {
      case we.JSONRPCMethod.eth_subscribe:
      case we.JSONRPCMethod.eth_unsubscribe:
        return this._subscriptionManager.handleRequest(e);
    }
  }
  _isKnownAddress(e) {
    try {
      const r = (0, ce.ensureAddressString)(e);
      return this._addresses.map((i) => (0, ce.ensureAddressString)(i)).includes(r);
    } catch {
    }
    return !1;
  }
  _ensureKnownAddress(e) {
    var r;
    if (!this._isKnownAddress(e))
      throw (r = this.diagnostic) === null || r === void 0 || r.log(Va.EVENTS.UNKNOWN_ADDRESS_ENCOUNTERED), new Error("Unknown Ethereum address");
  }
  _prepareTransactionParams(e) {
    const r = e.from ? (0, ce.ensureAddressString)(e.from) : this.selectedAddress;
    if (!r)
      throw new Error("Ethereum address is unavailable");
    this._ensureKnownAddress(r);
    const n = e.to ? (0, ce.ensureAddressString)(e.to) : null, i = e.value != null ? (0, ce.ensureBN)(e.value) : new ZS.default(0), s = e.data ? (0, ce.ensureBuffer)(e.data) : Buffer.alloc(0), o = e.nonce != null ? (0, ce.ensureIntNumber)(e.nonce) : null, a = e.gasPrice != null ? (0, ce.ensureBN)(e.gasPrice) : null, c = e.maxFeePerGas != null ? (0, ce.ensureBN)(e.maxFeePerGas) : null, u = e.maxPriorityFeePerGas != null ? (0, ce.ensureBN)(e.maxPriorityFeePerGas) : null, h = e.gas != null ? (0, ce.ensureBN)(e.gas) : null, d = this.getChainId();
    return {
      fromAddress: r,
      toAddress: n,
      weiValue: i,
      data: s,
      nonce: o,
      gasPriceInWei: a,
      maxFeePerGas: c,
      maxPriorityFeePerGas: u,
      gasLimit: h,
      chainId: d
    };
  }
  _isAuthorized() {
    return this._addresses.length > 0;
  }
  _requireAuthorization() {
    if (!this._isAuthorized())
      throw Se.standardErrors.provider.unauthorized({});
  }
  _throwUnsupportedMethodError() {
    throw Se.standardErrors.provider.unsupportedMethod({});
  }
  async _signEthereumMessage(e, r, n, i) {
    this._ensureKnownAddress(r);
    try {
      return { jsonrpc: "2.0", id: 0, result: (await (await this.initializeRelay()).signEthereumMessage(e, r, n, i).promise).result };
    } catch (s) {
      throw typeof s.message == "string" && s.message.match(/(denied|rejected)/i) ? Se.standardErrors.provider.userRejectedRequest("User denied message signature") : s;
    }
  }
  async _ethereumAddressFromSignedMessage(e, r, n) {
    return { jsonrpc: "2.0", id: 0, result: (await (await this.initializeRelay()).ethereumAddressFromSignedMessage(e, r, n).promise).result };
  }
  _eth_accounts() {
    return [...this._addresses];
  }
  _eth_coinbase() {
    return this.selectedAddress || null;
  }
  _net_version() {
    return this.getChainId().toString(10);
  }
  _eth_chainId() {
    return (0, ce.hexStringFromIntNumber)(this.getChainId());
  }
  getChainId() {
    const e = this._storage.getItem(Tf);
    if (!e)
      return (0, ce.ensureIntNumber)(this._chainIdFromOpts);
    const r = parseInt(e, 10);
    return (0, ce.ensureIntNumber)(r);
  }
  async _eth_requestAccounts() {
    var e;
    if ((e = this.diagnostic) === null || e === void 0 || e.log(Va.EVENTS.ETH_ACCOUNTS_STATE, {
      method: "provider::_eth_requestAccounts",
      addresses_length: this._addresses.length,
      sessionIdHash: this._relay ? Rf.Session.hash(this._relay.session.id) : void 0
    }), this._isAuthorized())
      return Promise.resolve({
        jsonrpc: "2.0",
        id: 0,
        result: this._addresses
      });
    let r;
    try {
      r = await (await this.initializeRelay()).requestEthereumAccounts().promise;
    } catch (n) {
      throw typeof n.message == "string" && n.message.match(/(denied|rejected)/i) ? Se.standardErrors.provider.userRejectedRequest("User denied account authorization") : n;
    }
    if (!r.result)
      throw new Error("accounts received is empty");
    return this._setAddresses(r.result), this.isCoinbaseBrowser || await this.switchEthereumChain(this.getChainId()), { jsonrpc: "2.0", id: 0, result: this._addresses };
  }
  _eth_sign(e) {
    this._requireAuthorization();
    const r = (0, ce.ensureAddressString)(e[0]), n = (0, ce.ensureBuffer)(e[1]);
    return this._signEthereumMessage(n, r, !1);
  }
  _eth_ecRecover(e) {
    const r = (0, ce.ensureBuffer)(e[0]), n = (0, ce.ensureBuffer)(e[1]);
    return this._ethereumAddressFromSignedMessage(r, n, !1);
  }
  _personal_sign(e) {
    this._requireAuthorization();
    const r = (0, ce.ensureBuffer)(e[0]), n = (0, ce.ensureAddressString)(e[1]);
    return this._signEthereumMessage(r, n, !0);
  }
  _personal_ecRecover(e) {
    const r = (0, ce.ensureBuffer)(e[0]), n = (0, ce.ensureBuffer)(e[1]);
    return this._ethereumAddressFromSignedMessage(r, n, !0);
  }
  async _eth_signTransaction(e) {
    this._requireAuthorization();
    const r = this._prepareTransactionParams(e[0] || {});
    try {
      return { jsonrpc: "2.0", id: 0, result: (await (await this.initializeRelay()).signEthereumTransaction(r).promise).result };
    } catch (n) {
      throw typeof n.message == "string" && n.message.match(/(denied|rejected)/i) ? Se.standardErrors.provider.userRejectedRequest("User denied transaction signature") : n;
    }
  }
  async _eth_sendRawTransaction(e) {
    const r = (0, ce.ensureBuffer)(e[0]);
    return { jsonrpc: "2.0", id: 0, result: (await (await this.initializeRelay()).submitEthereumTransaction(r, this.getChainId()).promise).result };
  }
  async _eth_sendTransaction(e) {
    this._requireAuthorization();
    const r = this._prepareTransactionParams(e[0] || {});
    try {
      return { jsonrpc: "2.0", id: 0, result: (await (await this.initializeRelay()).signAndSubmitEthereumTransaction(r).promise).result };
    } catch (n) {
      throw typeof n.message == "string" && n.message.match(/(denied|rejected)/i) ? Se.standardErrors.provider.userRejectedRequest("User denied transaction signature") : n;
    }
  }
  async _eth_signTypedData_v1(e) {
    this._requireAuthorization();
    const r = (0, ce.ensureParsedJSONObject)(e[0]), n = (0, ce.ensureAddressString)(e[1]);
    this._ensureKnownAddress(n);
    const i = za.default.hashForSignTypedDataLegacy({ data: r }), s = JSON.stringify(r, null, 2);
    return this._signEthereumMessage(i, n, !1, s);
  }
  async _eth_signTypedData_v3(e) {
    this._requireAuthorization();
    const r = (0, ce.ensureAddressString)(e[0]), n = (0, ce.ensureParsedJSONObject)(e[1]);
    this._ensureKnownAddress(r);
    const i = za.default.hashForSignTypedData_v3({ data: n }), s = JSON.stringify(n, null, 2);
    return this._signEthereumMessage(i, r, !1, s);
  }
  async _eth_signTypedData_v4(e) {
    this._requireAuthorization();
    const r = (0, ce.ensureAddressString)(e[0]), n = (0, ce.ensureParsedJSONObject)(e[1]);
    this._ensureKnownAddress(r);
    const i = za.default.hashForSignTypedData_v4({ data: n }), s = JSON.stringify(n, null, 2);
    return this._signEthereumMessage(i, r, !1, s);
  }
  /** @deprecated */
  async _cbwallet_arbitrary(e) {
    const r = e[0], n = e[1];
    if (typeof n != "string")
      throw new Error("parameter must be a string");
    if (typeof r != "object" || r === null)
      throw new Error("parameter must be an object");
    return { jsonrpc: "2.0", id: 0, result: await this.genericRequest(r, n) };
  }
  async _wallet_addEthereumChain(e) {
    var r, n, i, s;
    const o = e[0];
    if (((r = o.rpcUrls) === null || r === void 0 ? void 0 : r.length) === 0)
      return {
        jsonrpc: "2.0",
        id: 0,
        error: { code: 2, message: "please pass in at least 1 rpcUrl" }
      };
    if (!o.chainName || o.chainName.trim() === "")
      throw Se.standardErrors.rpc.invalidParams("chainName is a required field");
    if (!o.nativeCurrency)
      throw Se.standardErrors.rpc.invalidParams("nativeCurrency is a required field");
    const a = parseInt(o.chainId, 16);
    return await this.addEthereumChain(a, (n = o.rpcUrls) !== null && n !== void 0 ? n : [], (i = o.blockExplorerUrls) !== null && i !== void 0 ? i : [], o.chainName, (s = o.iconUrls) !== null && s !== void 0 ? s : [], o.nativeCurrency) ? { jsonrpc: "2.0", id: 0, result: null } : {
      jsonrpc: "2.0",
      id: 0,
      error: { code: 2, message: "unable to add ethereum chain" }
    };
  }
  async _wallet_switchEthereumChain(e) {
    const r = e[0];
    return await this.switchEthereumChain(parseInt(r.chainId, 16)), { jsonrpc: "2.0", id: 0, result: null };
  }
  async _wallet_watchAsset(e) {
    const r = Array.isArray(e) ? e[0] : e;
    if (!r.type)
      throw Se.standardErrors.rpc.invalidParams("Type is required");
    if ((r == null ? void 0 : r.type) !== "ERC20")
      throw Se.standardErrors.rpc.invalidParams(`Asset of type '${r.type}' is not supported`);
    if (!(r != null && r.options))
      throw Se.standardErrors.rpc.invalidParams("Options are required");
    if (!(r != null && r.options.address))
      throw Se.standardErrors.rpc.invalidParams("Address is required");
    const n = this.getChainId(), { address: i, symbol: s, image: o, decimals: a } = r.options;
    return { jsonrpc: "2.0", id: 0, result: await this.watchAsset(r.type, i, s, a, o, n) };
  }
  _eth_uninstallFilter(e) {
    const r = (0, ce.ensureHexString)(e[0]);
    return this._filterPolyfill.uninstallFilter(r);
  }
  async _eth_newFilter(e) {
    const r = e[0];
    return { jsonrpc: "2.0", id: 0, result: await this._filterPolyfill.newFilter(r) };
  }
  async _eth_newBlockFilter() {
    return { jsonrpc: "2.0", id: 0, result: await this._filterPolyfill.newBlockFilter() };
  }
  async _eth_newPendingTransactionFilter() {
    return { jsonrpc: "2.0", id: 0, result: await this._filterPolyfill.newPendingTransactionFilter() };
  }
  _eth_getFilterChanges(e) {
    const r = (0, ce.ensureHexString)(e[0]);
    return this._filterPolyfill.getFilterChanges(r);
  }
  _eth_getFilterLogs(e) {
    const r = (0, ce.ensureHexString)(e[0]);
    return this._filterPolyfill.getFilterLogs(r);
  }
  initializeRelay() {
    return this._relay ? Promise.resolve(this._relay) : this._relayProvider().then((e) => (e.setAccountsCallback((r, n) => this._setAddresses(r, n)), e.setChainCallback((r, n) => {
      this.updateProviderInfo(n, parseInt(r, 10));
    }), e.setDappDefaultChainCallback(this._chainIdFromOpts), this._relay = e, e));
  }
}
bn.CoinbaseWalletProvider = e3;
var Ys = {}, Ks = {};
const ft = /* @__PURE__ */ Wr(T0);
function Cn(t) {
  return typeof t == "function";
}
var Of = !1, yt = {
  Promise: void 0,
  set useDeprecatedSynchronousErrorHandling(t) {
    if (t) {
      var e = /* @__PURE__ */ new Error();
      "" + e.stack;
    }
    Of = t;
  },
  get useDeprecatedSynchronousErrorHandling() {
    return Of;
  }
};
function cn(t) {
  setTimeout(function() {
    throw t;
  }, 0);
}
var ds = {
  closed: !0,
  next: function(t) {
  },
  error: function(t) {
    if (yt.useDeprecatedSynchronousErrorHandling)
      throw t;
    cn(t);
  },
  complete: function() {
  }
}, nt = /* @__PURE__ */ function() {
  return Array.isArray || function(t) {
    return t && typeof t.length == "number";
  };
}();
function gu(t) {
  return t !== null && typeof t == "object";
}
var t3 = /* @__PURE__ */ function() {
  function t(e) {
    return Error.call(this), this.message = e ? e.length + ` errors occurred during unsubscription:
` + e.map(function(r, n) {
      return n + 1 + ") " + r.toString();
    }).join(`
  `) : "", this.name = "UnsubscriptionError", this.errors = e, this;
  }
  return t.prototype = /* @__PURE__ */ Object.create(Error.prototype), t;
}(), ii = t3, Me = /* @__PURE__ */ function() {
  function t(e) {
    this.closed = !1, this._parentOrParents = null, this._subscriptions = null, e && (this._ctorUnsubscribe = !0, this._unsubscribe = e);
  }
  return t.prototype.unsubscribe = function() {
    var e;
    if (!this.closed) {
      var r = this, n = r._parentOrParents, i = r._ctorUnsubscribe, s = r._unsubscribe, o = r._subscriptions;
      if (this.closed = !0, this._parentOrParents = null, this._subscriptions = null, n instanceof t)
        n.remove(this);
      else if (n !== null)
        for (var a = 0; a < n.length; ++a) {
          var c = n[a];
          c.remove(this);
        }
      if (Cn(s)) {
        i && (this._unsubscribe = void 0);
        try {
          s.call(this);
        } catch (d) {
          e = d instanceof ii ? kf(d.errors) : [d];
        }
      }
      if (nt(o))
        for (var a = -1, u = o.length; ++a < u; ) {
          var h = o[a];
          if (gu(h))
            try {
              h.unsubscribe();
            } catch (p) {
              e = e || [], p instanceof ii ? e = e.concat(kf(p.errors)) : e.push(p);
            }
        }
      if (e)
        throw new ii(e);
    }
  }, t.prototype.add = function(e) {
    var r = e;
    if (!e)
      return t.EMPTY;
    switch (typeof e) {
      case "function":
        r = new t(e);
      case "object":
        if (r === this || r.closed || typeof r.unsubscribe != "function")
          return r;
        if (this.closed)
          return r.unsubscribe(), r;
        if (!(r instanceof t)) {
          var n = r;
          r = new t(), r._subscriptions = [n];
        }
        break;
      default:
        throw new Error("unrecognized teardown " + e + " added to Subscription.");
    }
    var i = r._parentOrParents;
    if (i === null)
      r._parentOrParents = this;
    else if (i instanceof t) {
      if (i === this)
        return r;
      r._parentOrParents = [i, this];
    } else if (i.indexOf(this) === -1)
      i.push(this);
    else
      return r;
    var s = this._subscriptions;
    return s === null ? this._subscriptions = [r] : s.push(r), r;
  }, t.prototype.remove = function(e) {
    var r = this._subscriptions;
    if (r) {
      var n = r.indexOf(e);
      n !== -1 && r.splice(n, 1);
    }
  }, t.EMPTY = function(e) {
    return e.closed = !0, e;
  }(new t()), t;
}();
function kf(t) {
  return t.reduce(function(e, r) {
    return e.concat(r instanceof ii ? r.errors : r);
  }, []);
}
var ps = /* @__PURE__ */ function() {
  return typeof Symbol == "function" ? /* @__PURE__ */ Symbol("rxSubscriber") : "@@rxSubscriber_" + /* @__PURE__ */ Math.random();
}(), K = /* @__PURE__ */ function(t) {
  L(e, t);
  function e(r, n, i) {
    var s = t.call(this) || this;
    switch (s.syncErrorValue = null, s.syncErrorThrown = !1, s.syncErrorThrowable = !1, s.isStopped = !1, arguments.length) {
      case 0:
        s.destination = ds;
        break;
      case 1:
        if (!r) {
          s.destination = ds;
          break;
        }
        if (typeof r == "object") {
          r instanceof e ? (s.syncErrorThrowable = r.syncErrorThrowable, s.destination = r, r.add(s)) : (s.syncErrorThrowable = !0, s.destination = new Nf(s, r));
          break;
        }
      default:
        s.syncErrorThrowable = !0, s.destination = new Nf(s, r, n, i);
        break;
    }
    return s;
  }
  return e.prototype[ps] = function() {
    return this;
  }, e.create = function(r, n, i) {
    var s = new e(r, n, i);
    return s.syncErrorThrowable = !1, s;
  }, e.prototype.next = function(r) {
    this.isStopped || this._next(r);
  }, e.prototype.error = function(r) {
    this.isStopped || (this.isStopped = !0, this._error(r));
  }, e.prototype.complete = function() {
    this.isStopped || (this.isStopped = !0, this._complete());
  }, e.prototype.unsubscribe = function() {
    this.closed || (this.isStopped = !0, t.prototype.unsubscribe.call(this));
  }, e.prototype._next = function(r) {
    this.destination.next(r);
  }, e.prototype._error = function(r) {
    this.destination.error(r), this.unsubscribe();
  }, e.prototype._complete = function() {
    this.destination.complete(), this.unsubscribe();
  }, e.prototype._unsubscribeAndRecycle = function() {
    var r = this._parentOrParents;
    return this._parentOrParents = null, this.unsubscribe(), this.closed = !1, this.isStopped = !1, this._parentOrParents = r, this;
  }, e;
}(Me), Nf = /* @__PURE__ */ function(t) {
  L(e, t);
  function e(r, n, i, s) {
    var o = t.call(this) || this;
    o._parentSubscriber = r;
    var a, c = o;
    return Cn(n) ? a = n : n && (a = n.next, i = n.error, s = n.complete, n !== ds && (c = Object.create(n), Cn(c.unsubscribe) && o.add(c.unsubscribe.bind(c)), c.unsubscribe = o.unsubscribe.bind(o))), o._context = c, o._next = a, o._error = i, o._complete = s, o;
  }
  return e.prototype.next = function(r) {
    if (!this.isStopped && this._next) {
      var n = this._parentSubscriber;
      !yt.useDeprecatedSynchronousErrorHandling || !n.syncErrorThrowable ? this.__tryOrUnsub(this._next, r) : this.__tryOrSetError(n, this._next, r) && this.unsubscribe();
    }
  }, e.prototype.error = function(r) {
    if (!this.isStopped) {
      var n = this._parentSubscriber, i = yt.useDeprecatedSynchronousErrorHandling;
      if (this._error)
        !i || !n.syncErrorThrowable ? (this.__tryOrUnsub(this._error, r), this.unsubscribe()) : (this.__tryOrSetError(n, this._error, r), this.unsubscribe());
      else if (n.syncErrorThrowable)
        i ? (n.syncErrorValue = r, n.syncErrorThrown = !0) : cn(r), this.unsubscribe();
      else {
        if (this.unsubscribe(), i)
          throw r;
        cn(r);
      }
    }
  }, e.prototype.complete = function() {
    var r = this;
    if (!this.isStopped) {
      var n = this._parentSubscriber;
      if (this._complete) {
        var i = function() {
          return r._complete.call(r._context);
        };
        !yt.useDeprecatedSynchronousErrorHandling || !n.syncErrorThrowable ? (this.__tryOrUnsub(i), this.unsubscribe()) : (this.__tryOrSetError(n, i), this.unsubscribe());
      } else
        this.unsubscribe();
    }
  }, e.prototype.__tryOrUnsub = function(r, n) {
    try {
      r.call(this._context, n);
    } catch (i) {
      if (this.unsubscribe(), yt.useDeprecatedSynchronousErrorHandling)
        throw i;
      cn(i);
    }
  }, e.prototype.__tryOrSetError = function(r, n, i) {
    if (!yt.useDeprecatedSynchronousErrorHandling)
      throw new Error("bad call");
    try {
      n.call(this._context, i);
    } catch (s) {
      return yt.useDeprecatedSynchronousErrorHandling ? (r.syncErrorValue = s, r.syncErrorThrown = !0, !0) : (cn(s), !0);
    }
    return !1;
  }, e.prototype._unsubscribe = function() {
    var r = this._parentSubscriber;
    this._context = null, this._parentSubscriber = null, r.unsubscribe();
  }, e;
}(K);
function bu(t) {
  for (; t; ) {
    var e = t, r = e.closed, n = e.destination, i = e.isStopped;
    if (r || i)
      return !1;
    n && n instanceof K ? t = n : t = null;
  }
  return !0;
}
function r3(t, e, r) {
  if (t) {
    if (t instanceof K)
      return t;
    if (t[ps])
      return t[ps]();
  }
  return !t && !e && !r ? new K(ds) : new K(t, e, r);
}
var jn = /* @__PURE__ */ function() {
  return typeof Symbol == "function" && Symbol.observable || "@@observable";
}();
function wr(t) {
  return t;
}
function yc() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t[e] = arguments[e];
  return Cp(t);
}
function Cp(t) {
  return t.length === 0 ? wr : t.length === 1 ? t[0] : function(r) {
    return t.reduce(function(n, i) {
      return i(n);
    }, r);
  };
}
var ue = /* @__PURE__ */ function() {
  function t(e) {
    this._isScalar = !1, e && (this._subscribe = e);
  }
  return t.prototype.lift = function(e) {
    var r = new t();
    return r.source = this, r.operator = e, r;
  }, t.prototype.subscribe = function(e, r, n) {
    var i = this.operator, s = r3(e, r, n);
    if (i ? s.add(i.call(s, this.source)) : s.add(this.source || yt.useDeprecatedSynchronousErrorHandling && !s.syncErrorThrowable ? this._subscribe(s) : this._trySubscribe(s)), yt.useDeprecatedSynchronousErrorHandling && s.syncErrorThrowable && (s.syncErrorThrowable = !1, s.syncErrorThrown))
      throw s.syncErrorValue;
    return s;
  }, t.prototype._trySubscribe = function(e) {
    try {
      return this._subscribe(e);
    } catch (r) {
      yt.useDeprecatedSynchronousErrorHandling && (e.syncErrorThrown = !0, e.syncErrorValue = r), bu(e) ? e.error(r) : console.warn(r);
    }
  }, t.prototype.forEach = function(e, r) {
    var n = this;
    return r = Lf(r), new r(function(i, s) {
      var o;
      o = n.subscribe(function(a) {
        try {
          e(a);
        } catch (c) {
          s(c), o && o.unsubscribe();
        }
      }, s, i);
    });
  }, t.prototype._subscribe = function(e) {
    var r = this.source;
    return r && r.subscribe(e);
  }, t.prototype[jn] = function() {
    return this;
  }, t.prototype.pipe = function() {
    for (var e = [], r = 0; r < arguments.length; r++)
      e[r] = arguments[r];
    return e.length === 0 ? this : Cp(e)(this);
  }, t.prototype.toPromise = function(e) {
    var r = this;
    return e = Lf(e), new e(function(n, i) {
      var s;
      r.subscribe(function(o) {
        return s = o;
      }, function(o) {
        return i(o);
      }, function() {
        return n(s);
      });
    });
  }, t.create = function(e) {
    return new t(e);
  }, t;
}();
function Lf(t) {
  if (t || (t = yt.Promise || Promise), !t)
    throw new Error("no Promise impl found");
  return t;
}
var n3 = /* @__PURE__ */ function() {
  function t() {
    return Error.call(this), this.message = "object unsubscribed", this.name = "ObjectUnsubscribedError", this;
  }
  return t.prototype = /* @__PURE__ */ Object.create(Error.prototype), t;
}(), dr = n3, Ip = /* @__PURE__ */ function(t) {
  L(e, t);
  function e(r, n) {
    var i = t.call(this) || this;
    return i.subject = r, i.subscriber = n, i.closed = !1, i;
  }
  return e.prototype.unsubscribe = function() {
    if (!this.closed) {
      this.closed = !0;
      var r = this.subject, n = r.observers;
      if (this.subject = null, !(!n || n.length === 0 || r.isStopped || r.closed)) {
        var i = n.indexOf(this.subscriber);
        i !== -1 && n.splice(i, 1);
      }
    }
  }, e;
}(Me), Rp = /* @__PURE__ */ function(t) {
  L(e, t);
  function e(r) {
    var n = t.call(this, r) || this;
    return n.destination = r, n;
  }
  return e;
}(K), He = /* @__PURE__ */ function(t) {
  L(e, t);
  function e() {
    var r = t.call(this) || this;
    return r.observers = [], r.closed = !1, r.isStopped = !1, r.hasError = !1, r.thrownError = null, r;
  }
  return e.prototype[ps] = function() {
    return new Rp(this);
  }, e.prototype.lift = function(r) {
    var n = new Pf(this, this);
    return n.operator = r, n;
  }, e.prototype.next = function(r) {
    if (this.closed)
      throw new dr();
    if (!this.isStopped)
      for (var n = this.observers, i = n.length, s = n.slice(), o = 0; o < i; o++)
        s[o].next(r);
  }, e.prototype.error = function(r) {
    if (this.closed)
      throw new dr();
    this.hasError = !0, this.thrownError = r, this.isStopped = !0;
    for (var n = this.observers, i = n.length, s = n.slice(), o = 0; o < i; o++)
      s[o].error(r);
    this.observers.length = 0;
  }, e.prototype.complete = function() {
    if (this.closed)
      throw new dr();
    this.isStopped = !0;
    for (var r = this.observers, n = r.length, i = r.slice(), s = 0; s < n; s++)
      i[s].complete();
    this.observers.length = 0;
  }, e.prototype.unsubscribe = function() {
    this.isStopped = !0, this.closed = !0, this.observers = null;
  }, e.prototype._trySubscribe = function(r) {
    if (this.closed)
      throw new dr();
    return t.prototype._trySubscribe.call(this, r);
  }, e.prototype._subscribe = function(r) {
    if (this.closed)
      throw new dr();
    return this.hasError ? (r.error(this.thrownError), Me.EMPTY) : this.isStopped ? (r.complete(), Me.EMPTY) : (this.observers.push(r), new Ip(this, r));
  }, e.prototype.asObservable = function() {
    var r = new ue();
    return r.source = this, r;
  }, e.create = function(r, n) {
    return new Pf(r, n);
  }, e;
}(ue), Pf = /* @__PURE__ */ function(t) {
  L(e, t);
  function e(r, n) {
    var i = t.call(this) || this;
    return i.destination = r, i.source = n, i;
  }
  return e.prototype.next = function(r) {
    var n = this.destination;
    n && n.next && n.next(r);
  }, e.prototype.error = function(r) {
    var n = this.destination;
    n && n.error && this.destination.error(r);
  }, e.prototype.complete = function() {
    var r = this.destination;
    r && r.complete && this.destination.complete();
  }, e.prototype._subscribe = function(r) {
    var n = this.source;
    return n ? this.source.subscribe(r) : Me.EMPTY;
  }, e;
}(He);
function yu() {
  return function(e) {
    return e.lift(new i3(e));
  };
}
var i3 = /* @__PURE__ */ function() {
  function t(e) {
    this.connectable = e;
  }
  return t.prototype.call = function(e, r) {
    var n = this.connectable;
    n._refCount++;
    var i = new s3(e, n), s = r.subscribe(i);
    return i.closed || (i.connection = n.connect()), s;
  }, t;
}(), s3 = /* @__PURE__ */ function(t) {
  L(e, t);
  function e(r, n) {
    var i = t.call(this, r) || this;
    return i.connectable = n, i;
  }
  return e.prototype._unsubscribe = function() {
    var r = this.connectable;
    if (!r) {
      this.connection = null;
      return;
    }
    this.connectable = null;
    var n = r._refCount;
    if (n <= 0) {
      this.connection = null;
      return;
    }
    if (r._refCount = n - 1, n > 1) {
      this.connection = null;
      return;
    }
    var i = this.connection, s = r._connection;
    this.connection = null, s && (!i || s === i) && s.unsubscribe();
  }, e;
}(K), Ap = /* @__PURE__ */ function(t) {
  L(e, t);
  function e(r, n) {
    var i = t.call(this) || this;
    return i.source = r, i.subjectFactory = n, i._refCount = 0, i._isComplete = !1, i;
  }
  return e.prototype._subscribe = function(r) {
    return this.getSubject().subscribe(r);
  }, e.prototype.getSubject = function() {
    var r = this._subject;
    return (!r || r.isStopped) && (this._subject = this.subjectFactory()), this._subject;
  }, e.prototype.connect = function() {
    var r = this._connection;
    return r || (this._isComplete = !1, r = this._connection = new Me(), r.add(this.source.subscribe(new a3(this.getSubject(), this))), r.closed && (this._connection = null, r = Me.EMPTY)), r;
  }, e.prototype.refCount = function() {
    return yu()(this);
  }, e;
}(ue), o3 = /* @__PURE__ */ function() {
  var t = Ap.prototype;
  return {
    operator: { value: null },
    _refCount: { value: 0, writable: !0 },
    _subject: { value: null, writable: !0 },
    _connection: { value: null, writable: !0 },
    _subscribe: { value: t._subscribe },
    _isComplete: { value: t._isComplete, writable: !0 },
    getSubject: { value: t.getSubject },
    connect: { value: t.connect },
    refCount: { value: t.refCount }
  };
}(), a3 = /* @__PURE__ */ function(t) {
  L(e, t);
  function e(r, n) {
    var i = t.call(this, r) || this;
    return i.connectable = n, i;
  }
  return e.prototype._error = function(r) {
    this._unsubscribe(), t.prototype._error.call(this, r);
  }, e.prototype._complete = function() {
    this.connectable._isComplete = !0, this._unsubscribe(), t.prototype._complete.call(this);
  }, e.prototype._unsubscribe = function() {
    var r = this.connectable;
    if (r) {
      this.connectable = null;
      var n = r._connection;
      r._refCount = 0, r._subject = null, r._connection = null, n && n.unsubscribe();
    }
  }, e;
}(Rp);
function c3(t, e, r, n) {
  return function(i) {
    return i.lift(new u3(t, e, r, n));
  };
}
var u3 = /* @__PURE__ */ function() {
  function t(e, r, n, i) {
    this.keySelector = e, this.elementSelector = r, this.durationSelector = n, this.subjectSelector = i;
  }
  return t.prototype.call = function(e, r) {
    return r.subscribe(new l3(e, this.keySelector, this.elementSelector, this.durationSelector, this.subjectSelector));
  }, t;
}(), l3 = /* @__PURE__ */ function(t) {
  L(e, t);
  function e(r, n, i, s, o) {
    var a = t.call(this, r) || this;
    return a.keySelector = n, a.elementSelector = i, a.durationSelector = s, a.subjectSelector = o, a.groups = null, a.attemptedToUnsubscribe = !1, a.count = 0, a;
  }
  return e.prototype._next = function(r) {
    var n;
    try {
      n = this.keySelector(r);
    } catch (i) {
      this.error(i);
      return;
    }
    this._group(r, n);
  }, e.prototype._group = function(r, n) {
    var i = this.groups;
    i || (i = this.groups = /* @__PURE__ */ new Map());
    var s = i.get(n), o;
    if (this.elementSelector)
      try {
        o = this.elementSelector(r);
      } catch (u) {
        this.error(u);
      }
    else
      o = r;
    if (!s) {
      s = this.subjectSelector ? this.subjectSelector() : new He(), i.set(n, s);
      var a = new mc(n, s, this);
      if (this.destination.next(a), this.durationSelector) {
        var c = void 0;
        try {
          c = this.durationSelector(new mc(n, s));
        } catch (u) {
          this.error(u);
          return;
        }
        this.add(c.subscribe(new f3(n, s, this)));
      }
    }
    s.closed || s.next(o);
  }, e.prototype._error = function(r) {
    var n = this.groups;
    n && (n.forEach(function(i, s) {
      i.error(r);
    }), n.clear()), this.destination.error(r);
  }, e.prototype._complete = function() {
    var r = this.groups;
    r && (r.forEach(function(n, i) {
      n.complete();
    }), r.clear()), this.destination.complete();
  }, e.prototype.removeGroup = function(r) {
    this.groups.delete(r);
  }, e.prototype.unsubscribe = function() {
    this.closed || (this.attemptedToUnsubscribe = !0, this.count === 0 && t.prototype.unsubscribe.call(this));
  }, e;
}(K), f3 = /* @__PURE__ */ function(t) {
  L(e, t);
  function e(r, n, i) {
    var s = t.call(this, n) || this;
    return s.key = r, s.group = n, s.parent = i, s;
  }
  return e.prototype._next = function(r) {
    this.complete();
  }, e.prototype._unsubscribe = function() {
    var r = this, n = r.parent, i = r.key;
    this.key = this.parent = null, n && n.removeGroup(i);
  }, e;
}(K), mc = /* @__PURE__ */ function(t) {
  L(e, t);
  function e(r, n, i) {
    var s = t.call(this) || this;
    return s.key = r, s.groupSubject = n, s.refCountSubscription = i, s;
  }
  return e.prototype._subscribe = function(r) {
    var n = new Me(), i = this, s = i.refCountSubscription, o = i.groupSubject;
    return s && !s.closed && n.add(new h3(s)), n.add(o.subscribe(r)), n;
  }, e;
}(ue), h3 = /* @__PURE__ */ function(t) {
  L(e, t);
  function e(r) {
    var n = t.call(this) || this;
    return n.parent = r, r.count++, n;
  }
  return e.prototype.unsubscribe = function() {
    var r = this.parent;
    !r.closed && !this.closed && (t.prototype.unsubscribe.call(this), r.count -= 1, r.count === 0 && r.attemptedToUnsubscribe && r.unsubscribe());
  }, e;
}(Me), Tp = /* @__PURE__ */ function(t) {
  L(e, t);
  function e(r) {
    var n = t.call(this) || this;
    return n._value = r, n;
  }
  return Object.defineProperty(e.prototype, "value", {
    get: function() {
      return this.getValue();
    },
    enumerable: !0,
    configurable: !0
  }), e.prototype._subscribe = function(r) {
    var n = t.prototype._subscribe.call(this, r);
    return n && !n.closed && r.next(this._value), n;
  }, e.prototype.getValue = function() {
    if (this.hasError)
      throw this.thrownError;
    if (this.closed)
      throw new dr();
    return this._value;
  }, e.prototype.next = function(r) {
    t.prototype.next.call(this, this._value = r);
  }, e;
}(He), d3 = /* @__PURE__ */ function(t) {
  L(e, t);
  function e(r, n) {
    return t.call(this) || this;
  }
  return e.prototype.schedule = function(r, n) {
    return this;
  }, e;
}(Me), Oi = /* @__PURE__ */ function(t) {
  L(e, t);
  function e(r, n) {
    var i = t.call(this, r, n) || this;
    return i.scheduler = r, i.work = n, i.pending = !1, i;
  }
  return e.prototype.schedule = function(r, n) {
    if (n === void 0 && (n = 0), this.closed)
      return this;
    this.state = r;
    var i = this.id, s = this.scheduler;
    return i != null && (this.id = this.recycleAsyncId(s, i, n)), this.pending = !0, this.delay = n, this.id = this.id || this.requestAsyncId(s, this.id, n), this;
  }, e.prototype.requestAsyncId = function(r, n, i) {
    return i === void 0 && (i = 0), setInterval(r.flush.bind(r, this), i);
  }, e.prototype.recycleAsyncId = function(r, n, i) {
    if (i === void 0 && (i = 0), i !== null && this.delay === i && this.pending === !1)
      return n;
    clearInterval(n);
  }, e.prototype.execute = function(r, n) {
    if (this.closed)
      return new Error("executing a cancelled action");
    this.pending = !1;
    var i = this._execute(r, n);
    if (i)
      return i;
    this.pending === !1 && this.id != null && (this.id = this.recycleAsyncId(this.scheduler, this.id, null));
  }, e.prototype._execute = function(r, n) {
    var i = !1, s = void 0;
    try {
      this.work(r);
    } catch (o) {
      i = !0, s = !!o && o || new Error(o);
    }
    if (i)
      return this.unsubscribe(), s;
  }, e.prototype._unsubscribe = function() {
    var r = this.id, n = this.scheduler, i = n.actions, s = i.indexOf(this);
    this.work = null, this.state = null, this.pending = !1, this.scheduler = null, s !== -1 && i.splice(s, 1), r != null && (this.id = this.recycleAsyncId(n, r, null)), this.delay = null;
  }, e;
}(d3), p3 = /* @__PURE__ */ function(t) {
  L(e, t);
  function e(r, n) {
    var i = t.call(this, r, n) || this;
    return i.scheduler = r, i.work = n, i;
  }
  return e.prototype.schedule = function(r, n) {
    return n === void 0 && (n = 0), n > 0 ? t.prototype.schedule.call(this, r, n) : (this.delay = n, this.state = r, this.scheduler.flush(this), this);
  }, e.prototype.execute = function(r, n) {
    return n > 0 || this.closed ? t.prototype.execute.call(this, r, n) : this._execute(r, n);
  }, e.prototype.requestAsyncId = function(r, n, i) {
    return i === void 0 && (i = 0), i !== null && i > 0 || i === null && this.delay > 0 ? t.prototype.requestAsyncId.call(this, r, n, i) : r.flush(this);
  }, e;
}(Oi), vc = /* @__PURE__ */ function() {
  function t(e, r) {
    r === void 0 && (r = t.now), this.SchedulerAction = e, this.now = r;
  }
  return t.prototype.schedule = function(e, r, n) {
    return r === void 0 && (r = 0), new this.SchedulerAction(this, e).schedule(n, r);
  }, t.now = function() {
    return Date.now();
  }, t;
}(), ki = /* @__PURE__ */ function(t) {
  L(e, t);
  function e(r, n) {
    n === void 0 && (n = vc.now);
    var i = t.call(this, r, function() {
      return e.delegate && e.delegate !== i ? e.delegate.now() : n();
    }) || this;
    return i.actions = [], i.active = !1, i.scheduled = void 0, i;
  }
  return e.prototype.schedule = function(r, n, i) {
    return n === void 0 && (n = 0), e.delegate && e.delegate !== this ? e.delegate.schedule(r, n, i) : t.prototype.schedule.call(this, r, n, i);
  }, e.prototype.flush = function(r) {
    var n = this.actions;
    if (this.active) {
      n.push(r);
      return;
    }
    var i;
    this.active = !0;
    do
      if (i = r.execute(r.state, r.delay))
        break;
    while (r = n.shift());
    if (this.active = !1, i) {
      for (; r = n.shift(); )
        r.unsubscribe();
      throw i;
    }
  }, e;
}(vc), g3 = /* @__PURE__ */ function(t) {
  L(e, t);
  function e() {
    return t !== null && t.apply(this, arguments) || this;
  }
  return e;
}(ki), Mp = /* @__PURE__ */ new g3(p3), Op = Mp, In = /* @__PURE__ */ new ue(function(t) {
  return t.complete();
});
function Un(t) {
  return t ? b3(t) : In;
}
function b3(t) {
  return new ue(function(e) {
    return t.schedule(function() {
      return e.complete();
    });
  });
}
function lt(t) {
  return t && typeof t.schedule == "function";
}
var kp = function(t) {
  return function(e) {
    for (var r = 0, n = t.length; r < n && !e.closed; r++)
      e.next(t[r]);
    e.complete();
  };
};
function mu(t, e) {
  return new ue(function(r) {
    var n = new Me(), i = 0;
    return n.add(e.schedule(function() {
      if (i === t.length) {
        r.complete();
        return;
      }
      r.next(t[i++]), r.closed || n.add(this.schedule());
    })), n;
  });
}
function Ni(t, e) {
  return e ? mu(t, e) : new ue(kp(t));
}
function Xs() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t[e] = arguments[e];
  var r = t[t.length - 1];
  return lt(r) ? (t.pop(), mu(t, r)) : Ni(t);
}
function vu(t, e) {
  return e ? new ue(function(r) {
    return e.schedule(y3, 0, { error: t, subscriber: r });
  }) : new ue(function(r) {
    return r.error(t);
  });
}
function y3(t) {
  var e = t.error, r = t.subscriber;
  r.error(e);
}
var wc;
wc || (wc = {});
var rr = /* @__PURE__ */ function() {
  function t(e, r, n) {
    this.kind = e, this.value = r, this.error = n, this.hasValue = e === "N";
  }
  return t.prototype.observe = function(e) {
    switch (this.kind) {
      case "N":
        return e.next && e.next(this.value);
      case "E":
        return e.error && e.error(this.error);
      case "C":
        return e.complete && e.complete();
    }
  }, t.prototype.do = function(e, r, n) {
    var i = this.kind;
    switch (i) {
      case "N":
        return e && e(this.value);
      case "E":
        return r && r(this.error);
      case "C":
        return n && n();
    }
  }, t.prototype.accept = function(e, r, n) {
    return e && typeof e.next == "function" ? this.observe(e) : this.do(e, r, n);
  }, t.prototype.toObservable = function() {
    var e = this.kind;
    switch (e) {
      case "N":
        return Xs(this.value);
      case "E":
        return vu(this.error);
      case "C":
        return Un();
    }
    throw new Error("unexpected notification kind value");
  }, t.createNext = function(e) {
    return typeof e < "u" ? new t("N", e) : t.undefinedValueNotification;
  }, t.createError = function(e) {
    return new t("E", void 0, e);
  }, t.createComplete = function() {
    return t.completeNotification;
  }, t.completeNotification = new t("C"), t.undefinedValueNotification = new t("N", void 0), t;
}();
function m3(t, e) {
  return e === void 0 && (e = 0), function(n) {
    return n.lift(new v3(t, e));
  };
}
var v3 = /* @__PURE__ */ function() {
  function t(e, r) {
    r === void 0 && (r = 0), this.scheduler = e, this.delay = r;
  }
  return t.prototype.call = function(e, r) {
    return r.subscribe(new Np(e, this.scheduler, this.delay));
  }, t;
}(), Np = /* @__PURE__ */ function(t) {
  L(e, t);
  function e(r, n, i) {
    i === void 0 && (i = 0);
    var s = t.call(this, r) || this;
    return s.scheduler = n, s.delay = i, s;
  }
  return e.dispatch = function(r) {
    var n = r.notification, i = r.destination;
    n.observe(i), this.unsubscribe();
  }, e.prototype.scheduleMessage = function(r) {
    var n = this.destination;
    n.add(this.scheduler.schedule(e.dispatch, this.delay, new w3(r, this.destination)));
  }, e.prototype._next = function(r) {
    this.scheduleMessage(rr.createNext(r));
  }, e.prototype._error = function(r) {
    this.scheduleMessage(rr.createError(r)), this.unsubscribe();
  }, e.prototype._complete = function() {
    this.scheduleMessage(rr.createComplete()), this.unsubscribe();
  }, e;
}(K), w3 = /* @__PURE__ */ function() {
  function t(e, r) {
    this.notification = e, this.destination = r;
  }
  return t;
}(), wu = /* @__PURE__ */ function(t) {
  L(e, t);
  function e(r, n, i) {
    r === void 0 && (r = Number.POSITIVE_INFINITY), n === void 0 && (n = Number.POSITIVE_INFINITY);
    var s = t.call(this) || this;
    return s.scheduler = i, s._events = [], s._infiniteTimeWindow = !1, s._bufferSize = r < 1 ? 1 : r, s._windowTime = n < 1 ? 1 : n, n === Number.POSITIVE_INFINITY ? (s._infiniteTimeWindow = !0, s.next = s.nextInfiniteTimeWindow) : s.next = s.nextTimeWindow, s;
  }
  return e.prototype.nextInfiniteTimeWindow = function(r) {
    if (!this.isStopped) {
      var n = this._events;
      n.push(r), n.length > this._bufferSize && n.shift();
    }
    t.prototype.next.call(this, r);
  }, e.prototype.nextTimeWindow = function(r) {
    this.isStopped || (this._events.push(new _3(this._getNow(), r)), this._trimBufferThenGetEvents()), t.prototype.next.call(this, r);
  }, e.prototype._subscribe = function(r) {
    var n = this._infiniteTimeWindow, i = n ? this._events : this._trimBufferThenGetEvents(), s = this.scheduler, o = i.length, a;
    if (this.closed)
      throw new dr();
    if (this.isStopped || this.hasError ? a = Me.EMPTY : (this.observers.push(r), a = new Ip(this, r)), s && r.add(r = new Np(r, s)), n)
      for (var c = 0; c < o && !r.closed; c++)
        r.next(i[c]);
    else
      for (var c = 0; c < o && !r.closed; c++)
        r.next(i[c].value);
    return this.hasError ? r.error(this.thrownError) : this.isStopped && r.complete(), a;
  }, e.prototype._getNow = function() {
    return (this.scheduler || Op).now();
  }, e.prototype._trimBufferThenGetEvents = function() {
    for (var r = this._getNow(), n = this._bufferSize, i = this._windowTime, s = this._events, o = s.length, a = 0; a < o && !(r - s[a].time < i); )
      a++;
    return o > n && (a = Math.max(a, o - n)), a > 0 && s.splice(0, a), s;
  }, e;
}(He), _3 = /* @__PURE__ */ function() {
  function t(e, r) {
    this.time = e, this.value = r;
  }
  return t;
}(), Wn = /* @__PURE__ */ function(t) {
  L(e, t);
  function e() {
    var r = t !== null && t.apply(this, arguments) || this;
    return r.value = null, r.hasNext = !1, r.hasCompleted = !1, r;
  }
  return e.prototype._subscribe = function(r) {
    return this.hasError ? (r.error(this.thrownError), Me.EMPTY) : this.hasCompleted && this.hasNext ? (r.next(this.value), r.complete(), Me.EMPTY) : t.prototype._subscribe.call(this, r);
  }, e.prototype.next = function(r) {
    this.hasCompleted || (this.value = r, this.hasNext = !0);
  }, e.prototype.error = function(r) {
    this.hasCompleted || t.prototype.error.call(this, r);
  }, e.prototype.complete = function() {
    this.hasCompleted = !0, this.hasNext && t.prototype.next.call(this, this.value), t.prototype.complete.call(this);
  }, e;
}(He), E3 = 1, S3 = /* @__PURE__ */ function() {
  return /* @__PURE__ */ Promise.resolve();
}(), _c = {};
function Bf(t) {
  return t in _c ? (delete _c[t], !0) : !1;
}
var $f = {
  setImmediate: function(t) {
    var e = E3++;
    return _c[e] = !0, S3.then(function() {
      return Bf(e) && t();
    }), e;
  },
  clearImmediate: function(t) {
    Bf(t);
  }
}, x3 = /* @__PURE__ */ function(t) {
  L(e, t);
  function e(r, n) {
    var i = t.call(this, r, n) || this;
    return i.scheduler = r, i.work = n, i;
  }
  return e.prototype.requestAsyncId = function(r, n, i) {
    return i === void 0 && (i = 0), i !== null && i > 0 ? t.prototype.requestAsyncId.call(this, r, n, i) : (r.actions.push(this), r.scheduled || (r.scheduled = $f.setImmediate(r.flush.bind(r, null))));
  }, e.prototype.recycleAsyncId = function(r, n, i) {
    if (i === void 0 && (i = 0), i !== null && i > 0 || i === null && this.delay > 0)
      return t.prototype.recycleAsyncId.call(this, r, n, i);
    r.actions.length === 0 && ($f.clearImmediate(n), r.scheduled = void 0);
  }, e;
}(Oi), C3 = /* @__PURE__ */ function(t) {
  L(e, t);
  function e() {
    return t !== null && t.apply(this, arguments) || this;
  }
  return e.prototype.flush = function(r) {
    this.active = !0, this.scheduled = void 0;
    var n = this.actions, i, s = -1, o = n.length;
    r = r || n.shift();
    do
      if (i = r.execute(r.state, r.delay))
        break;
    while (++s < o && (r = n.shift()));
    if (this.active = !1, i) {
      for (; ++s < o && (r = n.shift()); )
        r.unsubscribe();
      throw i;
    }
  }, e;
}(ki), Lp = /* @__PURE__ */ new C3(x3), rs = Lp, Pp = /* @__PURE__ */ new ki(Oi), it = Pp, I3 = /* @__PURE__ */ function(t) {
  L(e, t);
  function e(r, n) {
    var i = t.call(this, r, n) || this;
    return i.scheduler = r, i.work = n, i;
  }
  return e.prototype.requestAsyncId = function(r, n, i) {
    return i === void 0 && (i = 0), i !== null && i > 0 ? t.prototype.requestAsyncId.call(this, r, n, i) : (r.actions.push(this), r.scheduled || (r.scheduled = requestAnimationFrame(function() {
      return r.flush(null);
    })));
  }, e.prototype.recycleAsyncId = function(r, n, i) {
    if (i === void 0 && (i = 0), i !== null && i > 0 || i === null && this.delay > 0)
      return t.prototype.recycleAsyncId.call(this, r, n, i);
    r.actions.length === 0 && (cancelAnimationFrame(n), r.scheduled = void 0);
  }, e;
}(Oi), R3 = /* @__PURE__ */ function(t) {
  L(e, t);
  function e() {
    return t !== null && t.apply(this, arguments) || this;
  }
  return e.prototype.flush = function(r) {
    this.active = !0, this.scheduled = void 0;
    var n = this.actions, i, s = -1, o = n.length;
    r = r || n.shift();
    do
      if (i = r.execute(r.state, r.delay))
        break;
    while (++s < o && (r = n.shift()));
    if (this.active = !1, i) {
      for (; ++s < o && (r = n.shift()); )
        r.unsubscribe();
      throw i;
    }
  }, e;
}(ki), Bp = /* @__PURE__ */ new R3(I3), A3 = Bp, T3 = /* @__PURE__ */ function(t) {
  L(e, t);
  function e(r, n) {
    r === void 0 && (r = $p), n === void 0 && (n = Number.POSITIVE_INFINITY);
    var i = t.call(this, r, function() {
      return i.frame;
    }) || this;
    return i.maxFrames = n, i.frame = 0, i.index = -1, i;
  }
  return e.prototype.flush = function() {
    for (var r = this, n = r.actions, i = r.maxFrames, s, o; (o = n[0]) && o.delay <= i && (n.shift(), this.frame = o.delay, !(s = o.execute(o.state, o.delay))); )
      ;
    if (s) {
      for (; o = n.shift(); )
        o.unsubscribe();
      throw s;
    }
  }, e.frameTimeFactor = 10, e;
}(ki), $p = /* @__PURE__ */ function(t) {
  L(e, t);
  function e(r, n, i) {
    i === void 0 && (i = r.index += 1);
    var s = t.call(this, r, n) || this;
    return s.scheduler = r, s.work = n, s.index = i, s.active = !0, s.index = r.index = i, s;
  }
  return e.prototype.schedule = function(r, n) {
    if (n === void 0 && (n = 0), !this.id)
      return t.prototype.schedule.call(this, r, n);
    this.active = !1;
    var i = new e(this.scheduler, this.work);
    return this.add(i), i.schedule(r, n);
  }, e.prototype.requestAsyncId = function(r, n, i) {
    i === void 0 && (i = 0), this.delay = r.frame + i;
    var s = r.actions;
    return s.push(this), s.sort(e.sortActions), !0;
  }, e.prototype.recycleAsyncId = function(r, n, i) {
  }, e.prototype._execute = function(r, n) {
    if (this.active === !0)
      return t.prototype._execute.call(this, r, n);
  }, e.sortActions = function(r, n) {
    return r.delay === n.delay ? r.index === n.index ? 0 : r.index > n.index ? 1 : -1 : r.delay > n.delay ? 1 : -1;
  }, e;
}(Oi);
function Ut() {
}
function M3(t) {
  return !!t && (t instanceof ue || typeof t.lift == "function" && typeof t.subscribe == "function");
}
var O3 = /* @__PURE__ */ function() {
  function t() {
    return Error.call(this), this.message = "argument out of range", this.name = "ArgumentOutOfRangeError", this;
  }
  return t.prototype = /* @__PURE__ */ Object.create(Error.prototype), t;
}(), Rn = O3, k3 = /* @__PURE__ */ function() {
  function t() {
    return Error.call(this), this.message = "no elements in sequence", this.name = "EmptyError", this;
  }
  return t.prototype = /* @__PURE__ */ Object.create(Error.prototype), t;
}(), Li = k3, N3 = /* @__PURE__ */ function() {
  function t() {
    return Error.call(this), this.message = "Timeout has occurred", this.name = "TimeoutError", this;
  }
  return t.prototype = /* @__PURE__ */ Object.create(Error.prototype), t;
}(), Dp = N3;
function St(t, e) {
  return function(n) {
    if (typeof t != "function")
      throw new TypeError("argument is not a function. Are you looking for `mapTo()`?");
    return n.lift(new L3(t, e));
  };
}
var L3 = /* @__PURE__ */ function() {
  function t(e, r) {
    this.project = e, this.thisArg = r;
  }
  return t.prototype.call = function(e, r) {
    return r.subscribe(new P3(e, this.project, this.thisArg));
  }, t;
}(), P3 = /* @__PURE__ */ function(t) {
  L(e, t);
  function e(r, n, i) {
    var s = t.call(this, r) || this;
    return s.project = n, s.count = 0, s.thisArg = i || s, s;
  }
  return e.prototype._next = function(r) {
    var n;
    try {
      n = this.project.call(this.thisArg, r, this.count++);
    } catch (i) {
      this.destination.error(i);
      return;
    }
    this.destination.next(n);
  }, e;
}(K);
function Fp(t, e, r) {
  if (e)
    if (lt(e))
      r = e;
    else
      return function() {
        for (var n = [], i = 0; i < arguments.length; i++)
          n[i] = arguments[i];
        return Fp(t, r).apply(void 0, n).pipe(St(function(s) {
          return nt(s) ? e.apply(void 0, s) : e(s);
        }));
      };
  return function() {
    for (var n = [], i = 0; i < arguments.length; i++)
      n[i] = arguments[i];
    var s = this, o, a = {
      context: s,
      subject: o,
      callbackFunc: t,
      scheduler: r
    };
    return new ue(function(c) {
      if (r) {
        var h = {
          args: n,
          subscriber: c,
          params: a
        };
        return r.schedule(B3, 0, h);
      } else {
        if (!o) {
          o = new Wn();
          var u = function() {
            for (var d = [], p = 0; p < arguments.length; p++)
              d[p] = arguments[p];
            o.next(d.length <= 1 ? d[0] : d), o.complete();
          };
          try {
            t.apply(s, n.concat([u]));
          } catch (d) {
            bu(o) ? o.error(d) : console.warn(d);
          }
        }
        return o.subscribe(c);
      }
    });
  };
}
function B3(t) {
  var e = this, r = t.args, n = t.subscriber, i = t.params, s = i.callbackFunc, o = i.context, a = i.scheduler, c = i.subject;
  if (!c) {
    c = i.subject = new Wn();
    var u = function() {
      for (var h = [], d = 0; d < arguments.length; d++)
        h[d] = arguments[d];
      var p = h.length <= 1 ? h[0] : h;
      e.add(a.schedule($3, 0, { value: p, subject: c }));
    };
    try {
      s.apply(o, r.concat([u]));
    } catch (h) {
      c.error(h);
    }
  }
  this.add(c.subscribe(n));
}
function $3(t) {
  var e = t.value, r = t.subject;
  r.next(e), r.complete();
}
function jp(t, e, r) {
  if (e)
    if (lt(e))
      r = e;
    else
      return function() {
        for (var n = [], i = 0; i < arguments.length; i++)
          n[i] = arguments[i];
        return jp(t, r).apply(void 0, n).pipe(St(function(s) {
          return nt(s) ? e.apply(void 0, s) : e(s);
        }));
      };
  return function() {
    for (var n = [], i = 0; i < arguments.length; i++)
      n[i] = arguments[i];
    var s = {
      subject: void 0,
      args: n,
      callbackFunc: t,
      scheduler: r,
      context: this
    };
    return new ue(function(o) {
      var a = s.context, c = s.subject;
      if (r)
        return r.schedule(D3, 0, { params: s, subscriber: o, context: a });
      if (!c) {
        c = s.subject = new Wn();
        var u = function() {
          for (var h = [], d = 0; d < arguments.length; d++)
            h[d] = arguments[d];
          var p = h.shift();
          if (p) {
            c.error(p);
            return;
          }
          c.next(h.length <= 1 ? h[0] : h), c.complete();
        };
        try {
          t.apply(a, n.concat([u]));
        } catch (h) {
          bu(c) ? c.error(h) : console.warn(h);
        }
      }
      return c.subscribe(o);
    });
  };
}
function D3(t) {
  var e = this, r = t.params, n = t.subscriber, i = t.context, s = r.callbackFunc, o = r.args, a = r.scheduler, c = r.subject;
  if (!c) {
    c = r.subject = new Wn();
    var u = function() {
      for (var h = [], d = 0; d < arguments.length; d++)
        h[d] = arguments[d];
      var p = h.shift();
      if (p)
        e.add(a.schedule(Df, 0, { err: p, subject: c }));
      else {
        var v = h.length <= 1 ? h[0] : h;
        e.add(a.schedule(F3, 0, { value: v, subject: c }));
      }
    };
    try {
      s.apply(i, o.concat([u]));
    } catch (h) {
      this.add(a.schedule(Df, 0, { err: h, subject: c }));
    }
  }
  this.add(c.subscribe(n));
}
function F3(t) {
  var e = t.value, r = t.subject;
  r.next(e), r.complete();
}
function Df(t) {
  var e = t.err, r = t.subject;
  r.error(e);
}
var Zr = /* @__PURE__ */ function(t) {
  L(e, t);
  function e() {
    return t !== null && t.apply(this, arguments) || this;
  }
  return e.prototype.notifyNext = function(r, n, i, s, o) {
    this.destination.next(n);
  }, e.prototype.notifyError = function(r, n) {
    this.destination.error(r);
  }, e.prototype.notifyComplete = function(r) {
    this.destination.complete();
  }, e;
}(K), j3 = /* @__PURE__ */ function(t) {
  L(e, t);
  function e(r, n, i) {
    var s = t.call(this) || this;
    return s.parent = r, s.outerValue = n, s.outerIndex = i, s.index = 0, s;
  }
  return e.prototype._next = function(r) {
    this.parent.notifyNext(this.outerValue, r, this.outerIndex, this.index++, this);
  }, e.prototype._error = function(r) {
    this.parent.notifyError(r, this), this.unsubscribe();
  }, e.prototype._complete = function() {
    this.parent.notifyComplete(this), this.unsubscribe();
  }, e;
}(K), U3 = function(t) {
  return function(e) {
    return t.then(function(r) {
      e.closed || (e.next(r), e.complete());
    }, function(r) {
      return e.error(r);
    }).then(null, cn), e;
  };
};
function W3() {
  return typeof Symbol != "function" || !Symbol.iterator ? "@@iterator" : Symbol.iterator;
}
var _r = /* @__PURE__ */ W3(), V3 = function(t) {
  return function(e) {
    var r = t[_r]();
    do {
      var n = void 0;
      try {
        n = r.next();
      } catch (i) {
        return e.error(i), e;
      }
      if (n.done) {
        e.complete();
        break;
      }
      if (e.next(n.value), e.closed)
        break;
    } while (!0);
    return typeof r.return == "function" && e.add(function() {
      r.return && r.return();
    }), e;
  };
}, H3 = function(t) {
  return function(e) {
    var r = t[jn]();
    if (typeof r.subscribe != "function")
      throw new TypeError("Provided object does not correctly implement Symbol.observable");
    return r.subscribe(e);
  };
}, Up = function(t) {
  return t && typeof t.length == "number" && typeof t != "function";
};
function Wp(t) {
  return !!t && typeof t.subscribe != "function" && typeof t.then == "function";
}
var ui = function(t) {
  if (t && typeof t[jn] == "function")
    return H3(t);
  if (Up(t))
    return kp(t);
  if (Wp(t))
    return U3(t);
  if (t && typeof t[_r] == "function")
    return V3(t);
  var e = gu(t) ? "an invalid object" : "'" + t + "'", r = "You provided " + e + " where a stream was expected. You can provide an Observable, Promise, Array, or Iterable.";
  throw new TypeError(r);
};
function ir(t, e, r, n, i) {
  if (i === void 0 && (i = new j3(t, r, n)), !i.closed)
    return e instanceof ue ? e.subscribe(i) : ui(e)(i);
}
var Ff = {};
function z3() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t[e] = arguments[e];
  var r = void 0, n = void 0;
  return lt(t[t.length - 1]) && (n = t.pop()), typeof t[t.length - 1] == "function" && (r = t.pop()), t.length === 1 && nt(t[0]) && (t = t[0]), Ni(t, n).lift(new _u(r));
}
var _u = /* @__PURE__ */ function() {
  function t(e) {
    this.resultSelector = e;
  }
  return t.prototype.call = function(e, r) {
    return r.subscribe(new q3(e, this.resultSelector));
  }, t;
}(), q3 = /* @__PURE__ */ function(t) {
  L(e, t);
  function e(r, n) {
    var i = t.call(this, r) || this;
    return i.resultSelector = n, i.active = 0, i.values = [], i.observables = [], i;
  }
  return e.prototype._next = function(r) {
    this.values.push(Ff), this.observables.push(r);
  }, e.prototype._complete = function() {
    var r = this.observables, n = r.length;
    if (n === 0)
      this.destination.complete();
    else {
      this.active = n, this.toRespond = n;
      for (var i = 0; i < n; i++) {
        var s = r[i];
        this.add(ir(this, s, void 0, i));
      }
    }
  }, e.prototype.notifyComplete = function(r) {
    (this.active -= 1) === 0 && this.destination.complete();
  }, e.prototype.notifyNext = function(r, n, i) {
    var s = this.values, o = s[i], a = this.toRespond ? o === Ff ? --this.toRespond : this.toRespond : 0;
    s[i] = n, a === 0 && (this.resultSelector ? this._tryResultSelector(s) : this.destination.next(s.slice()));
  }, e.prototype._tryResultSelector = function(r) {
    var n;
    try {
      n = this.resultSelector.apply(this, r);
    } catch (i) {
      this.destination.error(i);
      return;
    }
    this.destination.next(n);
  }, e;
}(Zr);
function G3(t, e) {
  return new ue(function(r) {
    var n = new Me();
    return n.add(e.schedule(function() {
      var i = t[jn]();
      n.add(i.subscribe({
        next: function(s) {
          n.add(e.schedule(function() {
            return r.next(s);
          }));
        },
        error: function(s) {
          n.add(e.schedule(function() {
            return r.error(s);
          }));
        },
        complete: function() {
          n.add(e.schedule(function() {
            return r.complete();
          }));
        }
      }));
    })), n;
  });
}
function J3(t, e) {
  return new ue(function(r) {
    var n = new Me();
    return n.add(e.schedule(function() {
      return t.then(function(i) {
        n.add(e.schedule(function() {
          r.next(i), n.add(e.schedule(function() {
            return r.complete();
          }));
        }));
      }, function(i) {
        n.add(e.schedule(function() {
          return r.error(i);
        }));
      });
    })), n;
  });
}
function Q3(t, e) {
  if (!t)
    throw new Error("Iterable cannot be null");
  return new ue(function(r) {
    var n = new Me(), i;
    return n.add(function() {
      i && typeof i.return == "function" && i.return();
    }), n.add(e.schedule(function() {
      i = t[_r](), n.add(e.schedule(function() {
        if (!r.closed) {
          var s, o;
          try {
            var a = i.next();
            s = a.value, o = a.done;
          } catch (c) {
            r.error(c);
            return;
          }
          o ? r.complete() : (r.next(s), this.schedule());
        }
      }));
    })), n;
  });
}
function Z3(t) {
  return t && typeof t[jn] == "function";
}
function Y3(t) {
  return t && typeof t[_r] == "function";
}
function Vp(t, e) {
  if (t != null) {
    if (Z3(t))
      return G3(t, e);
    if (Wp(t))
      return J3(t, e);
    if (Up(t))
      return mu(t, e);
    if (Y3(t) || typeof t == "string")
      return Q3(t, e);
  }
  throw new TypeError((t !== null && typeof t || t) + " is not observable");
}
function sr(t, e) {
  return e ? Vp(t, e) : t instanceof ue ? t : new ue(ui(t));
}
var Oe = /* @__PURE__ */ function(t) {
  L(e, t);
  function e(r) {
    var n = t.call(this) || this;
    return n.parent = r, n;
  }
  return e.prototype._next = function(r) {
    this.parent.notifyNext(r);
  }, e.prototype._error = function(r) {
    this.parent.notifyError(r), this.unsubscribe();
  }, e.prototype._complete = function() {
    this.parent.notifyComplete(), this.unsubscribe();
  }, e;
}(K), ke = /* @__PURE__ */ function(t) {
  L(e, t);
  function e() {
    return t !== null && t.apply(this, arguments) || this;
  }
  return e.prototype.notifyNext = function(r) {
    this.destination.next(r);
  }, e.prototype.notifyError = function(r) {
    this.destination.error(r);
  }, e.prototype.notifyComplete = function() {
    this.destination.complete();
  }, e;
}(K);
function Ne(t, e) {
  if (!e.closed) {
    if (t instanceof ue)
      return t.subscribe(e);
    var r;
    try {
      r = ui(t)(e);
    } catch (n) {
      e.error(n);
    }
    return r;
  }
}
function jr(t, e, r) {
  return r === void 0 && (r = Number.POSITIVE_INFINITY), typeof e == "function" ? function(n) {
    return n.pipe(jr(function(i, s) {
      return sr(t(i, s)).pipe(St(function(o, a) {
        return e(i, o, s, a);
      }));
    }, r));
  } : (typeof e == "number" && (r = e), function(n) {
    return n.lift(new K3(t, r));
  });
}
var K3 = /* @__PURE__ */ function() {
  function t(e, r) {
    r === void 0 && (r = Number.POSITIVE_INFINITY), this.project = e, this.concurrent = r;
  }
  return t.prototype.call = function(e, r) {
    return r.subscribe(new X3(e, this.project, this.concurrent));
  }, t;
}(), X3 = /* @__PURE__ */ function(t) {
  L(e, t);
  function e(r, n, i) {
    i === void 0 && (i = Number.POSITIVE_INFINITY);
    var s = t.call(this, r) || this;
    return s.project = n, s.concurrent = i, s.hasCompleted = !1, s.buffer = [], s.active = 0, s.index = 0, s;
  }
  return e.prototype._next = function(r) {
    this.active < this.concurrent ? this._tryNext(r) : this.buffer.push(r);
  }, e.prototype._tryNext = function(r) {
    var n, i = this.index++;
    try {
      n = this.project(r, i);
    } catch (s) {
      this.destination.error(s);
      return;
    }
    this.active++, this._innerSub(n);
  }, e.prototype._innerSub = function(r) {
    var n = new Oe(this), i = this.destination;
    i.add(n);
    var s = Ne(r, n);
    s !== n && i.add(s);
  }, e.prototype._complete = function() {
    this.hasCompleted = !0, this.active === 0 && this.buffer.length === 0 && this.destination.complete(), this.unsubscribe();
  }, e.prototype.notifyNext = function(r) {
    this.destination.next(r);
  }, e.prototype.notifyComplete = function() {
    var r = this.buffer;
    this.active--, r.length > 0 ? this._next(r.shift()) : this.active === 0 && this.hasCompleted && this.destination.complete();
  }, e;
}(ke), e4 = jr;
function Eu(t) {
  return t === void 0 && (t = Number.POSITIVE_INFINITY), jr(wr, t);
}
function Hp() {
  return Eu(1);
}
function li() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t[e] = arguments[e];
  return Hp()(Xs.apply(void 0, t));
}
function Su(t) {
  return new ue(function(e) {
    var r;
    try {
      r = t();
    } catch (i) {
      e.error(i);
      return;
    }
    var n = r ? sr(r) : Un();
    return n.subscribe(e);
  });
}
function t4() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t[e] = arguments[e];
  if (t.length === 1) {
    var r = t[0];
    if (nt(r))
      return Ji(r, null);
    if (gu(r) && Object.getPrototypeOf(r) === Object.prototype) {
      var n = Object.keys(r);
      return Ji(n.map(function(s) {
        return r[s];
      }), n);
    }
  }
  if (typeof t[t.length - 1] == "function") {
    var i = t.pop();
    return t = t.length === 1 && nt(t[0]) ? t[0] : t, Ji(t, null).pipe(St(function(s) {
      return i.apply(void 0, s);
    }));
  }
  return Ji(t, null);
}
function Ji(t, e) {
  return new ue(function(r) {
    var n = t.length;
    if (n === 0) {
      r.complete();
      return;
    }
    for (var i = new Array(n), s = 0, o = 0, a = function(u) {
      var h = sr(t[u]), d = !1;
      r.add(h.subscribe({
        next: function(p) {
          d || (d = !0, o++), i[u] = p;
        },
        error: function(p) {
          return r.error(p);
        },
        complete: function() {
          s++, (s === n || !d) && (o === n && r.next(e ? e.reduce(function(p, v, _) {
            return p[v] = i[_], p;
          }, {}) : i), r.complete());
        }
      }));
    }, c = 0; c < n; c++)
      a(c);
  });
}
function zp(t, e, r, n) {
  return Cn(r) && (n = r, r = void 0), n ? zp(t, e, r).pipe(St(function(i) {
    return nt(i) ? n.apply(void 0, i) : n(i);
  })) : new ue(function(i) {
    function s(o) {
      arguments.length > 1 ? i.next(Array.prototype.slice.call(arguments)) : i.next(o);
    }
    qp(t, e, s, i, r);
  });
}
function qp(t, e, r, n, i) {
  var s;
  if (i4(t)) {
    var o = t;
    t.addEventListener(e, r, i), s = function() {
      return o.removeEventListener(e, r, i);
    };
  } else if (n4(t)) {
    var a = t;
    t.on(e, r), s = function() {
      return a.off(e, r);
    };
  } else if (r4(t)) {
    var c = t;
    t.addListener(e, r), s = function() {
      return c.removeListener(e, r);
    };
  } else if (t && t.length)
    for (var u = 0, h = t.length; u < h; u++)
      qp(t[u], e, r, n, i);
  else
    throw new TypeError("Invalid event target");
  n.add(s);
}
function r4(t) {
  return t && typeof t.addListener == "function" && typeof t.removeListener == "function";
}
function n4(t) {
  return t && typeof t.on == "function" && typeof t.off == "function";
}
function i4(t) {
  return t && typeof t.addEventListener == "function" && typeof t.removeEventListener == "function";
}
function Gp(t, e, r) {
  return r ? Gp(t, e).pipe(St(function(n) {
    return nt(n) ? r.apply(void 0, n) : r(n);
  })) : new ue(function(n) {
    var i = function() {
      for (var o = [], a = 0; a < arguments.length; a++)
        o[a] = arguments[a];
      return n.next(o.length === 1 ? o[0] : o);
    }, s;
    try {
      s = t(i);
    } catch (o) {
      n.error(o);
      return;
    }
    if (Cn(e))
      return function() {
        return e(i, s);
      };
  });
}
function s4(t, e, r, n, i) {
  var s, o;
  if (arguments.length == 1) {
    var a = t;
    o = a.initialState, e = a.condition, r = a.iterate, s = a.resultSelector || wr, i = a.scheduler;
  } else
    n === void 0 || lt(n) ? (o = t, s = wr, i = n) : (o = t, s = n);
  return new ue(function(c) {
    var u = o;
    if (i)
      return i.schedule(o4, 0, {
        subscriber: c,
        iterate: r,
        condition: e,
        resultSelector: s,
        state: u
      });
    do {
      if (e) {
        var h = void 0;
        try {
          h = e(u);
        } catch (p) {
          c.error(p);
          return;
        }
        if (!h) {
          c.complete();
          break;
        }
      }
      var d = void 0;
      try {
        d = s(u);
      } catch (p) {
        c.error(p);
        return;
      }
      if (c.next(d), c.closed)
        break;
      try {
        u = r(u);
      } catch (p) {
        c.error(p);
        return;
      }
    } while (!0);
  });
}
function o4(t) {
  var e = t.subscriber, r = t.condition;
  if (!e.closed) {
    if (t.needIterate)
      try {
        t.state = t.iterate(t.state);
      } catch (s) {
        e.error(s);
        return;
      }
    else
      t.needIterate = !0;
    if (r) {
      var n = void 0;
      try {
        n = r(t.state);
      } catch (s) {
        e.error(s);
        return;
      }
      if (!n) {
        e.complete();
        return;
      }
      if (e.closed)
        return;
    }
    var i;
    try {
      i = t.resultSelector(t.state);
    } catch (s) {
      e.error(s);
      return;
    }
    if (!e.closed && (e.next(i), !e.closed))
      return this.schedule(t);
  }
}
function a4(t, e, r) {
  return e === void 0 && (e = In), r === void 0 && (r = In), Su(function() {
    return t() ? e : r;
  });
}
function An(t) {
  return !nt(t) && t - parseFloat(t) + 1 >= 0;
}
function c4(t, e) {
  return t === void 0 && (t = 0), e === void 0 && (e = it), (!An(t) || t < 0) && (t = 0), (!e || typeof e.schedule != "function") && (e = it), new ue(function(r) {
    return r.add(e.schedule(u4, t, { subscriber: r, counter: 0, period: t })), r;
  });
}
function u4(t) {
  var e = t.subscriber, r = t.counter, n = t.period;
  e.next(r), this.schedule({ subscriber: e, counter: r + 1, period: n }, n);
}
function Jp() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t[e] = arguments[e];
  var r = Number.POSITIVE_INFINITY, n = null, i = t[t.length - 1];
  return lt(i) ? (n = t.pop(), t.length > 1 && typeof t[t.length - 1] == "number" && (r = t.pop())) : typeof i == "number" && (r = t.pop()), n === null && t.length === 1 && t[0] instanceof ue ? t[0] : Eu(r)(Ni(t, n));
}
var Qp = /* @__PURE__ */ new ue(Ut);
function l4() {
  return Qp;
}
function Ec() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t[e] = arguments[e];
  if (t.length === 0)
    return In;
  var r = t[0], n = t.slice(1);
  return t.length === 1 && nt(r) ? Ec.apply(void 0, r) : new ue(function(i) {
    var s = function() {
      return i.add(Ec.apply(void 0, n).subscribe(i));
    };
    return sr(r).subscribe({
      next: function(o) {
        i.next(o);
      },
      error: s,
      complete: s
    });
  });
}
function f4(t, e) {
  return e ? new ue(function(r) {
    var n = Object.keys(t), i = new Me();
    return i.add(e.schedule(h4, 0, { keys: n, index: 0, subscriber: r, subscription: i, obj: t })), i;
  }) : new ue(function(r) {
    for (var n = Object.keys(t), i = 0; i < n.length && !r.closed; i++) {
      var s = n[i];
      t.hasOwnProperty(s) && r.next([s, t[s]]);
    }
    r.complete();
  });
}
function h4(t) {
  var e = t.keys, r = t.index, n = t.subscriber, i = t.subscription, s = t.obj;
  if (!n.closed)
    if (r < e.length) {
      var o = e[r];
      n.next([o, s[o]]), i.add(this.schedule({ keys: e, index: r + 1, subscriber: n, subscription: i, obj: s }));
    } else
      n.complete();
}
function Zp(t, e) {
  function r() {
    return !r.pred.apply(r.thisArg, arguments);
  }
  return r.pred = t, r.thisArg = e, r;
}
function Er(t, e) {
  return function(n) {
    return n.lift(new d4(t, e));
  };
}
var d4 = /* @__PURE__ */ function() {
  function t(e, r) {
    this.predicate = e, this.thisArg = r;
  }
  return t.prototype.call = function(e, r) {
    return r.subscribe(new p4(e, this.predicate, this.thisArg));
  }, t;
}(), p4 = /* @__PURE__ */ function(t) {
  L(e, t);
  function e(r, n, i) {
    var s = t.call(this, r) || this;
    return s.predicate = n, s.thisArg = i, s.count = 0, s;
  }
  return e.prototype._next = function(r) {
    var n;
    try {
      n = this.predicate.call(this.thisArg, r, this.count++);
    } catch (i) {
      this.destination.error(i);
      return;
    }
    n && this.destination.next(r);
  }, e;
}(K);
function g4(t, e, r) {
  return [
    Er(e, r)(new ue(ui(t))),
    Er(Zp(e, r))(new ue(ui(t)))
  ];
}
function Yp() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t[e] = arguments[e];
  if (t.length === 1)
    if (nt(t[0]))
      t = t[0];
    else
      return t[0];
  return Ni(t, void 0).lift(new b4());
}
var b4 = /* @__PURE__ */ function() {
  function t() {
  }
  return t.prototype.call = function(e, r) {
    return r.subscribe(new y4(e));
  }, t;
}(), y4 = /* @__PURE__ */ function(t) {
  L(e, t);
  function e(r) {
    var n = t.call(this, r) || this;
    return n.hasFirst = !1, n.observables = [], n.subscriptions = [], n;
  }
  return e.prototype._next = function(r) {
    this.observables.push(r);
  }, e.prototype._complete = function() {
    var r = this.observables, n = r.length;
    if (n === 0)
      this.destination.complete();
    else {
      for (var i = 0; i < n && !this.hasFirst; i++) {
        var s = r[i], o = ir(this, s, void 0, i);
        this.subscriptions && this.subscriptions.push(o), this.add(o);
      }
      this.observables = null;
    }
  }, e.prototype.notifyNext = function(r, n, i) {
    if (!this.hasFirst) {
      this.hasFirst = !0;
      for (var s = 0; s < this.subscriptions.length; s++)
        if (s !== i) {
          var o = this.subscriptions[s];
          o.unsubscribe(), this.remove(o);
        }
      this.subscriptions = null;
    }
    this.destination.next(n);
  }, e;
}(Zr);
function m4(t, e, r) {
  return t === void 0 && (t = 0), new ue(function(n) {
    e === void 0 && (e = t, t = 0);
    var i = 0, s = t;
    if (r)
      return r.schedule(v4, 0, {
        index: i,
        count: e,
        start: t,
        subscriber: n
      });
    do {
      if (i++ >= e) {
        n.complete();
        break;
      }
      if (n.next(s++), n.closed)
        break;
    } while (!0);
  });
}
function v4(t) {
  var e = t.start, r = t.index, n = t.count, i = t.subscriber;
  if (r >= n) {
    i.complete();
    return;
  }
  i.next(e), !i.closed && (t.index = r + 1, t.start = e + 1, this.schedule(t));
}
function Kp(t, e, r) {
  t === void 0 && (t = 0);
  var n = -1;
  return An(e) ? n = Number(e) < 1 && 1 || Number(e) : lt(e) && (r = e), lt(r) || (r = it), new ue(function(i) {
    var s = An(t) ? t : +t - r.now();
    return r.schedule(w4, s, {
      index: 0,
      period: n,
      subscriber: i
    });
  });
}
function w4(t) {
  var e = t.index, r = t.period, n = t.subscriber;
  if (n.next(e), !n.closed) {
    if (r === -1)
      return n.complete();
    t.index = e + 1, this.schedule(t, r);
  }
}
function _4(t, e) {
  return new ue(function(r) {
    var n;
    try {
      n = t();
    } catch (a) {
      r.error(a);
      return;
    }
    var i;
    try {
      i = e(n);
    } catch (a) {
      r.error(a);
      return;
    }
    var s = i ? sr(i) : In, o = s.subscribe(r);
    return function() {
      o.unsubscribe(), n && n.unsubscribe();
    };
  });
}
function Xp() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t[e] = arguments[e];
  var r = t[t.length - 1];
  return typeof r == "function" && t.pop(), Ni(t, void 0).lift(new e0(r));
}
var e0 = /* @__PURE__ */ function() {
  function t(e) {
    this.resultSelector = e;
  }
  return t.prototype.call = function(e, r) {
    return r.subscribe(new E4(e, this.resultSelector));
  }, t;
}(), E4 = /* @__PURE__ */ function(t) {
  L(e, t);
  function e(r, n, i) {
    var s = t.call(this, r) || this;
    return s.resultSelector = n, s.iterators = [], s.active = 0, s.resultSelector = typeof n == "function" ? n : void 0, s;
  }
  return e.prototype._next = function(r) {
    var n = this.iterators;
    nt(r) ? n.push(new x4(r)) : typeof r[_r] == "function" ? n.push(new S4(r[_r]())) : n.push(new C4(this.destination, this, r));
  }, e.prototype._complete = function() {
    var r = this.iterators, n = r.length;
    if (this.unsubscribe(), n === 0) {
      this.destination.complete();
      return;
    }
    this.active = n;
    for (var i = 0; i < n; i++) {
      var s = r[i];
      if (s.stillUnsubscribed) {
        var o = this.destination;
        o.add(s.subscribe());
      } else
        this.active--;
    }
  }, e.prototype.notifyInactive = function() {
    this.active--, this.active === 0 && this.destination.complete();
  }, e.prototype.checkIterators = function() {
    for (var r = this.iterators, n = r.length, i = this.destination, s = 0; s < n; s++) {
      var o = r[s];
      if (typeof o.hasValue == "function" && !o.hasValue())
        return;
    }
    for (var a = !1, c = [], s = 0; s < n; s++) {
      var o = r[s], u = o.next();
      if (o.hasCompleted() && (a = !0), u.done) {
        i.complete();
        return;
      }
      c.push(u.value);
    }
    this.resultSelector ? this._tryresultSelector(c) : i.next(c), a && i.complete();
  }, e.prototype._tryresultSelector = function(r) {
    var n;
    try {
      n = this.resultSelector.apply(this, r);
    } catch (i) {
      this.destination.error(i);
      return;
    }
    this.destination.next(n);
  }, e;
}(K), S4 = /* @__PURE__ */ function() {
  function t(e) {
    this.iterator = e, this.nextResult = e.next();
  }
  return t.prototype.hasValue = function() {
    return !0;
  }, t.prototype.next = function() {
    var e = this.nextResult;
    return this.nextResult = this.iterator.next(), e;
  }, t.prototype.hasCompleted = function() {
    var e = this.nextResult;
    return !!(e && e.done);
  }, t;
}(), x4 = /* @__PURE__ */ function() {
  function t(e) {
    this.array = e, this.index = 0, this.length = 0, this.length = e.length;
  }
  return t.prototype[_r] = function() {
    return this;
  }, t.prototype.next = function(e) {
    var r = this.index++, n = this.array;
    return r < this.length ? { value: n[r], done: !1 } : { value: null, done: !0 };
  }, t.prototype.hasValue = function() {
    return this.array.length > this.index;
  }, t.prototype.hasCompleted = function() {
    return this.array.length === this.index;
  }, t;
}(), C4 = /* @__PURE__ */ function(t) {
  L(e, t);
  function e(r, n, i) {
    var s = t.call(this, r) || this;
    return s.parent = n, s.observable = i, s.stillUnsubscribed = !0, s.buffer = [], s.isComplete = !1, s;
  }
  return e.prototype[_r] = function() {
    return this;
  }, e.prototype.next = function() {
    var r = this.buffer;
    return r.length === 0 && this.isComplete ? { value: null, done: !0 } : { value: r.shift(), done: !1 };
  }, e.prototype.hasValue = function() {
    return this.buffer.length > 0;
  }, e.prototype.hasCompleted = function() {
    return this.buffer.length === 0 && this.isComplete;
  }, e.prototype.notifyComplete = function() {
    this.buffer.length > 0 ? (this.isComplete = !0, this.parent.notifyInactive()) : this.destination.complete();
  }, e.prototype.notifyNext = function(r) {
    this.buffer.push(r), this.parent.checkIterators();
  }, e.prototype.subscribe = function() {
    return Ne(this.observable, new Oe(this));
  }, e;
}(ke);
const I4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ArgumentOutOfRangeError: Rn,
  AsyncSubject: Wn,
  BehaviorSubject: Tp,
  ConnectableObservable: Ap,
  EMPTY: In,
  EmptyError: Li,
  GroupedObservable: mc,
  NEVER: Qp,
  Notification: rr,
  get NotificationKind() {
    return wc;
  },
  ObjectUnsubscribedError: dr,
  Observable: ue,
  ReplaySubject: wu,
  Scheduler: vc,
  Subject: He,
  Subscriber: K,
  Subscription: Me,
  TimeoutError: Dp,
  UnsubscriptionError: ii,
  VirtualAction: $p,
  VirtualTimeScheduler: T3,
  animationFrame: A3,
  animationFrameScheduler: Bp,
  asap: rs,
  asapScheduler: Lp,
  async: it,
  asyncScheduler: Pp,
  bindCallback: Fp,
  bindNodeCallback: jp,
  combineLatest: z3,
  concat: li,
  config: yt,
  defer: Su,
  empty: Un,
  forkJoin: t4,
  from: sr,
  fromEvent: zp,
  fromEventPattern: Gp,
  generate: s4,
  identity: wr,
  iif: a4,
  interval: c4,
  isObservable: M3,
  merge: Jp,
  never: l4,
  noop: Ut,
  observable: jn,
  of: Xs,
  onErrorResumeNext: Ec,
  pairs: f4,
  partition: g4,
  pipe: yc,
  queue: Op,
  queueScheduler: Mp,
  race: Yp,
  range: m4,
  scheduled: Vp,
  throwError: vu,
  timer: Kp,
  using: _4,
  zip: Xp
}, Symbol.toStringTag, { value: "Module" })), eo = /* @__PURE__ */ Wr(I4);
var to = {};
function t0(t) {
  var e, r, n = "";
  if (typeof t == "string" || typeof t == "number")
    n += t;
  else if (typeof t == "object")
    if (Array.isArray(t))
      for (e = 0; e < t.length; e++)
        t[e] && (r = t0(t[e])) && (n && (n += " "), n += r);
    else
      for (e in t)
        t[e] && (n && (n += " "), n += e);
  return n;
}
function jf() {
  for (var t, e, r = 0, n = ""; r < arguments.length; )
    (t = arguments[r++]) && (e = t0(t)) && (n && (n += " "), n += e);
  return n;
}
const R4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  clsx: jf,
  default: jf
}, Symbol.toStringTag, { value: "Module" })), ro = /* @__PURE__ */ Wr(R4), Pi = /* @__PURE__ */ Wr(M0);
var Gt = {}, no = {};
Object.defineProperty(no, "__esModule", { value: !0 });
no.CloseIcon = void 0;
const Uf = ft;
function A4(t) {
  return (0, Uf.h)(
    "svg",
    Object.assign({ width: "40", height: "40", viewBox: "0 0 40 40", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, t),
    (0, Uf.h)("path", { d: "M13.7677 13L12.3535 14.4142L18.3535 20.4142L12.3535 26.4142L13.7677 27.8284L19.7677 21.8284L25.7677 27.8284L27.1819 26.4142L21.1819 20.4142L27.1819 14.4142L25.7677 13L19.7677 19L13.7677 13Z" })
  );
}
no.CloseIcon = A4;
var xu = {};
Object.defineProperty(xu, "__esModule", { value: !0 });
xu.default = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjgiIGhlaWdodD0iMjgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMTQiIGN5PSIxNCIgcj0iMTQiIGZpbGw9IiMwMDUyRkYiLz48cGF0aCBkPSJNMTQuMDM3IDE4LjkyNmMtMi43NSAwLTQuOTA3LTIuMjA1LTQuOTA3LTQuOTI2IDAtMi43MiAyLjIzLTQuOTI2IDQuOTA3LTQuOTI2YTQuODY2IDQuODY2IDAgMCAxIDQuODMzIDQuMTE4aDQuOTgyYy0uNDQ2LTUuMDczLTQuNjg0LTkuMDQ0LTkuODE1LTkuMDQ0QzguNjEgNC4xNDggNC4xNDkgOC41NiA0LjE0OSAxNHM0LjM4NyA5Ljg1MiA5Ljg5IDkuODUyYzUuMjA0IDAgOS4zNjgtMy45NyA5LjgxNC05LjA0M0gxOC44N2E0Ljg2NiA0Ljg2NiAwIDAgMS00LjgzMyA0LjExN1oiIGZpbGw9IiNmZmYiLz48L3N2Zz4=";
var Cu = {};
Object.defineProperty(Cu, "__esModule", { value: !0 });
Cu.default = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjgiIGhlaWdodD0iMjgiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMTQiIGN5PSIxNCIgcj0iMTQiIGZpbGw9IiMwMDUyRkYiLz48cGF0aCBkPSJNMjMuODUyIDE0QTkuODM0IDkuODM0IDAgMCAxIDE0IDIzLjg1MiA5LjgzNCA5LjgzNCAwIDAgMSA0LjE0OCAxNCA5LjgzNCA5LjgzNCAwIDAgMSAxNCA0LjE0OCA5LjgzNCA5LjgzNCAwIDAgMSAyMy44NTIgMTRaIiBmaWxsPSIjZmZmIi8+PHBhdGggZD0iTTExLjE4NSAxMi41MDRjMC0uNDU2IDAtLjcxLjA5OC0uODYyLjA5OC0uMTUyLjE5Ni0uMzA0LjM0My0uMzU1LjE5Ni0uMTAyLjM5Mi0uMTAyLjg4MS0uMTAyaDIuOTg2Yy40OSAwIC42ODYgMCAuODgyLjEwMi4xNDYuMTAxLjI5My4yMDMuMzQyLjM1NS4wOTguMjAzLjA5OC40MDYuMDk4Ljg2MnYyLjk5MmMwIC40NTcgMCAuNzEtLjA5OC44NjMtLjA5OC4xNTItLjE5NS4zMDQtLjM0Mi4zNTUtLjE5Ni4xMDEtLjM5Mi4xMDEtLjg4Mi4xMDFoLTIuOTg2Yy0uNDkgMC0uNjg1IDAtLjg4LS4xMDEtLjE0OC0uMTAyLS4yOTUtLjIwMy0uMzQ0LS4zNTUtLjA5OC0uMjAzLS4wOTgtLjQwNi0uMDk4LS44NjN2LTIuOTkyWiIgZmlsbD0iIzAwNTJGRiIvPjwvc3ZnPg==";
var io = {};
Object.defineProperty(io, "__esModule", { value: !0 });
io.QRCodeIcon = void 0;
const Dt = ft;
function T4(t) {
  return (0, Dt.h)(
    "svg",
    Object.assign({ width: "10", height: "10", viewBox: "0 0 10 10", xmlns: "http://www.w3.org/2000/svg" }, t),
    (0, Dt.h)("path", { d: "M8.2271 1.77124L7.0271 1.77124V2.97124H8.2271V1.77124Z" }),
    (0, Dt.h)("path", { d: "M5.44922 0.199219L5.44922 4.54922L9.79922 4.54922V0.199219L5.44922 0.199219ZM8.89922 3.64922L6.34922 3.64922L6.34922 1.09922L8.89922 1.09922V3.64922Z" }),
    (0, Dt.h)("path", { d: "M2.97124 1.77124L1.77124 1.77124L1.77124 2.97124H2.97124V1.77124Z" }),
    (0, Dt.h)("path", { d: "M0.199219 4.54922L4.54922 4.54922L4.54922 0.199219L0.199219 0.199219L0.199219 4.54922ZM1.09922 1.09922L3.64922 1.09922L3.64922 3.64922L1.09922 3.64922L1.09922 1.09922Z" }),
    (0, Dt.h)("path", { d: "M2.97124 7.0271H1.77124L1.77124 8.2271H2.97124V7.0271Z" }),
    (0, Dt.h)("path", { d: "M0.199219 9.79922H4.54922L4.54922 5.44922L0.199219 5.44922L0.199219 9.79922ZM1.09922 6.34922L3.64922 6.34922L3.64922 8.89922H1.09922L1.09922 6.34922Z" }),
    (0, Dt.h)("path", { d: "M8.89922 7.39912H7.99922V5.40112H5.44922L5.44922 9.79912H6.34922L6.34922 6.30112H7.09922V8.29912H9.79922V5.40112H8.89922V7.39912Z" }),
    (0, Dt.h)("path", { d: "M7.99912 8.89917H7.09912V9.79917H7.99912V8.89917Z" }),
    (0, Dt.h)("path", { d: "M9.79917 8.89917H8.89917V9.79917H9.79917V8.89917Z" })
  );
}
io.QRCodeIcon = T4;
var Iu = {};
Object.defineProperty(Iu, "__esModule", { value: !0 });
const M4 = `
    <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M50 100C77.6142 100 100 77.6142 100 50C100 22.3858 77.6142 0 50 0C22.3858 0 0 22.3858 0 50C0 77.6142 22.3858 100 50 100Z" fill="white"/>
        <path d="M50.512 94C74.2907 94 93.5673 74.5244 93.5673 50.5C93.5673 26.4756 74.2907 7 50.512 7C26.7332 7 7.45667 26.4756 7.45667 50.5C7.45667 74.5244 26.7332 94 50.512 94Z" fill="#0052FF"/>
        <path d="M50.6248 65.4335C42.3697 65.4335 35.8996 58.7469 35.8996 50.5C35.8996 42.2531 42.5928 35.5664 50.6248 35.5664C57.9873 35.5664 64.0111 40.9157 65.1267 48.0481H80.0749C78.7363 32.6688 66.0191 20.6328 50.6248 20.6328C34.3379 20.6328 20.9514 34.0062 20.9514 50.5C20.9514 66.9936 34.1148 80.3671 50.6248 80.3671C66.2422 80.3671 78.7363 68.331 80.0749 52.9516H65.1267C64.0111 60.0841 57.9873 65.4335 50.6248 65.4335Z" fill="white"/>
    </svg>
`;
Iu.default = M4;
var Ru = {};
Object.defineProperty(Ru, "__esModule", { value: !0 });
Ru.default = `
    <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="50" fill="white"/>
        <circle cx="49.9996" cy="49.9996" r="43.6363" fill="#1B53E4"/>
        <circle cx="49.9996" cy="49.9996" r="43.6363" stroke="white"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M19.3379 49.9484C19.3379 66.8508 33.04 80.553 49.9425 80.553C66.8449 80.553 80.5471 66.8508 80.5471 49.9484C80.5471 33.0459 66.8449 19.3438 49.9425 19.3438C33.04 19.3438 19.3379 33.0459 19.3379 49.9484ZM44.0817 40.0799C41.8725 40.0799 40.0817 41.8708 40.0817 44.0799V55.8029C40.0817 58.012 41.8725 59.8029 44.0817 59.8029H55.8046C58.0138 59.8029 59.8046 58.012 59.8046 55.8029V44.0799C59.8046 41.8708 58.0138 40.0799 55.8046 40.0799H44.0817Z" fill="white"/>
    </svg>
`;
var so = {};
Object.defineProperty(so, "__esModule", { value: !0 });
so.StatusDotIcon = void 0;
const Wf = ft;
function O4(t) {
  return (0, Wf.h)(
    "svg",
    Object.assign({ width: "10", height: "10", viewBox: "0 0 10 10", xmlns: "http://www.w3.org/2000/svg" }, t),
    (0, Wf.h)("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M2.29995 4.99995C2.29995 5.57985 1.82985 6.04995 1.24995 6.04995C0.670052 6.04995 0.199951 5.57985 0.199951 4.99995C0.199951 4.42005 0.670052 3.94995 1.24995 3.94995C1.82985 3.94995 2.29995 4.42005 2.29995 4.99995ZM4.99995 6.04995C5.57985 6.04995 6.04995 5.57985 6.04995 4.99995C6.04995 4.42005 5.57985 3.94995 4.99995 3.94995C4.42005 3.94995 3.94995 4.42005 3.94995 4.99995C3.94995 5.57985 4.42005 6.04995 4.99995 6.04995ZM8.74995 6.04995C9.32985 6.04995 9.79995 5.57985 9.79995 4.99995C9.79995 4.42005 9.32985 3.94995 8.74995 3.94995C8.17005 3.94995 7.69995 4.42005 7.69995 4.99995C7.69995 5.57985 8.17005 6.04995 8.74995 6.04995Z" })
  );
}
so.StatusDotIcon = O4;
var oo = {};
function r0(t) {
  this.mode = ct.MODE_8BIT_BYTE, this.data = t, this.parsedData = [];
  for (var e = 0, r = this.data.length; e < r; e++) {
    var n = [], i = this.data.charCodeAt(e);
    i > 65536 ? (n[0] = 240 | (i & 1835008) >>> 18, n[1] = 128 | (i & 258048) >>> 12, n[2] = 128 | (i & 4032) >>> 6, n[3] = 128 | i & 63) : i > 2048 ? (n[0] = 224 | (i & 61440) >>> 12, n[1] = 128 | (i & 4032) >>> 6, n[2] = 128 | i & 63) : i > 128 ? (n[0] = 192 | (i & 1984) >>> 6, n[1] = 128 | i & 63) : n[0] = i, this.parsedData.push(n);
  }
  this.parsedData = Array.prototype.concat.apply([], this.parsedData), this.parsedData.length != this.data.length && (this.parsedData.unshift(191), this.parsedData.unshift(187), this.parsedData.unshift(239));
}
r0.prototype = {
  getLength: function(t) {
    return this.parsedData.length;
  },
  write: function(t) {
    for (var e = 0, r = this.parsedData.length; e < r; e++)
      t.put(this.parsedData[e], 8);
  }
};
function Jt(t, e) {
  this.typeNumber = t, this.errorCorrectLevel = e, this.modules = null, this.moduleCount = 0, this.dataCache = null, this.dataList = [];
}
Jt.prototype = { addData: function(t) {
  var e = new r0(t);
  this.dataList.push(e), this.dataCache = null;
}, isDark: function(t, e) {
  if (t < 0 || this.moduleCount <= t || e < 0 || this.moduleCount <= e)
    throw new Error(t + "," + e);
  return this.modules[t][e];
}, getModuleCount: function() {
  return this.moduleCount;
}, make: function() {
  this.makeImpl(!1, this.getBestMaskPattern());
}, makeImpl: function(t, e) {
  this.moduleCount = this.typeNumber * 4 + 17, this.modules = new Array(this.moduleCount);
  for (var r = 0; r < this.moduleCount; r++) {
    this.modules[r] = new Array(this.moduleCount);
    for (var n = 0; n < this.moduleCount; n++)
      this.modules[r][n] = null;
  }
  this.setupPositionProbePattern(0, 0), this.setupPositionProbePattern(this.moduleCount - 7, 0), this.setupPositionProbePattern(0, this.moduleCount - 7), this.setupPositionAdjustPattern(), this.setupTimingPattern(), this.setupTypeInfo(t, e), this.typeNumber >= 7 && this.setupTypeNumber(t), this.dataCache == null && (this.dataCache = Jt.createData(this.typeNumber, this.errorCorrectLevel, this.dataList)), this.mapData(this.dataCache, e);
}, setupPositionProbePattern: function(t, e) {
  for (var r = -1; r <= 7; r++)
    if (!(t + r <= -1 || this.moduleCount <= t + r))
      for (var n = -1; n <= 7; n++)
        e + n <= -1 || this.moduleCount <= e + n || (0 <= r && r <= 6 && (n == 0 || n == 6) || 0 <= n && n <= 6 && (r == 0 || r == 6) || 2 <= r && r <= 4 && 2 <= n && n <= 4 ? this.modules[t + r][e + n] = !0 : this.modules[t + r][e + n] = !1);
}, getBestMaskPattern: function() {
  for (var t = 0, e = 0, r = 0; r < 8; r++) {
    this.makeImpl(!0, r);
    var n = Ae.getLostPoint(this);
    (r == 0 || t > n) && (t = n, e = r);
  }
  return e;
}, createMovieClip: function(t, e, r) {
  var n = t.createEmptyMovieClip(e, r), i = 1;
  this.make();
  for (var s = 0; s < this.modules.length; s++)
    for (var o = s * i, a = 0; a < this.modules[s].length; a++) {
      var c = a * i, u = this.modules[s][a];
      u && (n.beginFill(0, 100), n.moveTo(c, o), n.lineTo(c + i, o), n.lineTo(c + i, o + i), n.lineTo(c, o + i), n.endFill());
    }
  return n;
}, setupTimingPattern: function() {
  for (var t = 8; t < this.moduleCount - 8; t++)
    this.modules[t][6] == null && (this.modules[t][6] = t % 2 == 0);
  for (var e = 8; e < this.moduleCount - 8; e++)
    this.modules[6][e] == null && (this.modules[6][e] = e % 2 == 0);
}, setupPositionAdjustPattern: function() {
  for (var t = Ae.getPatternPosition(this.typeNumber), e = 0; e < t.length; e++)
    for (var r = 0; r < t.length; r++) {
      var n = t[e], i = t[r];
      if (this.modules[n][i] == null)
        for (var s = -2; s <= 2; s++)
          for (var o = -2; o <= 2; o++)
            s == -2 || s == 2 || o == -2 || o == 2 || s == 0 && o == 0 ? this.modules[n + s][i + o] = !0 : this.modules[n + s][i + o] = !1;
    }
}, setupTypeNumber: function(t) {
  for (var e = Ae.getBCHTypeNumber(this.typeNumber), r = 0; r < 18; r++) {
    var n = !t && (e >> r & 1) == 1;
    this.modules[Math.floor(r / 3)][r % 3 + this.moduleCount - 8 - 3] = n;
  }
  for (var r = 0; r < 18; r++) {
    var n = !t && (e >> r & 1) == 1;
    this.modules[r % 3 + this.moduleCount - 8 - 3][Math.floor(r / 3)] = n;
  }
}, setupTypeInfo: function(t, e) {
  for (var r = this.errorCorrectLevel << 3 | e, n = Ae.getBCHTypeInfo(r), i = 0; i < 15; i++) {
    var s = !t && (n >> i & 1) == 1;
    i < 6 ? this.modules[i][8] = s : i < 8 ? this.modules[i + 1][8] = s : this.modules[this.moduleCount - 15 + i][8] = s;
  }
  for (var i = 0; i < 15; i++) {
    var s = !t && (n >> i & 1) == 1;
    i < 8 ? this.modules[8][this.moduleCount - i - 1] = s : i < 9 ? this.modules[8][15 - i - 1 + 1] = s : this.modules[8][15 - i - 1] = s;
  }
  this.modules[this.moduleCount - 8][8] = !t;
}, mapData: function(t, e) {
  for (var r = -1, n = this.moduleCount - 1, i = 7, s = 0, o = this.moduleCount - 1; o > 0; o -= 2)
    for (o == 6 && o--; ; ) {
      for (var a = 0; a < 2; a++)
        if (this.modules[n][o - a] == null) {
          var c = !1;
          s < t.length && (c = (t[s] >>> i & 1) == 1);
          var u = Ae.getMask(e, n, o - a);
          u && (c = !c), this.modules[n][o - a] = c, i--, i == -1 && (s++, i = 7);
        }
      if (n += r, n < 0 || this.moduleCount <= n) {
        n -= r, r = -r;
        break;
      }
    }
} };
Jt.PAD0 = 236;
Jt.PAD1 = 17;
Jt.createData = function(t, e, r) {
  for (var n = Ht.getRSBlocks(t, e), i = new n0(), s = 0; s < r.length; s++) {
    var o = r[s];
    i.put(o.mode, 4), i.put(o.getLength(), Ae.getLengthInBits(o.mode, t)), o.write(i);
  }
  for (var a = 0, s = 0; s < n.length; s++)
    a += n[s].dataCount;
  if (i.getLengthInBits() > a * 8)
    throw new Error("code length overflow. (" + i.getLengthInBits() + ">" + a * 8 + ")");
  for (i.getLengthInBits() + 4 <= a * 8 && i.put(0, 4); i.getLengthInBits() % 8 != 0; )
    i.putBit(!1);
  for (; !(i.getLengthInBits() >= a * 8 || (i.put(Jt.PAD0, 8), i.getLengthInBits() >= a * 8)); )
    i.put(Jt.PAD1, 8);
  return Jt.createBytes(i, n);
};
Jt.createBytes = function(t, e) {
  for (var r = 0, n = 0, i = 0, s = new Array(e.length), o = new Array(e.length), a = 0; a < e.length; a++) {
    var c = e[a].dataCount, u = e[a].totalCount - c;
    n = Math.max(n, c), i = Math.max(i, u), s[a] = new Array(c);
    for (var h = 0; h < s[a].length; h++)
      s[a][h] = 255 & t.buffer[h + r];
    r += c;
    var d = Ae.getErrorCorrectPolynomial(u), p = new gn(s[a], d.getLength() - 1), v = p.mod(d);
    o[a] = new Array(d.getLength() - 1);
    for (var h = 0; h < o[a].length; h++) {
      var _ = h + v.getLength() - o[a].length;
      o[a][h] = _ >= 0 ? v.get(_) : 0;
    }
  }
  for (var A = 0, h = 0; h < e.length; h++)
    A += e[h].totalCount;
  for (var R = new Array(A), y = 0, h = 0; h < n; h++)
    for (var a = 0; a < e.length; a++)
      h < s[a].length && (R[y++] = s[a][h]);
  for (var h = 0; h < i; h++)
    for (var a = 0; a < e.length; a++)
      h < o[a].length && (R[y++] = o[a][h]);
  return R;
};
var ct = { MODE_NUMBER: 1, MODE_ALPHA_NUM: 2, MODE_8BIT_BYTE: 4, MODE_KANJI: 8 }, gr = { L: 1, M: 0, Q: 3, H: 2 }, cr = { PATTERN000: 0, PATTERN001: 1, PATTERN010: 2, PATTERN011: 3, PATTERN100: 4, PATTERN101: 5, PATTERN110: 6, PATTERN111: 7 }, Ae = { PATTERN_POSITION_TABLE: [[], [6, 18], [6, 22], [6, 26], [6, 30], [6, 34], [6, 22, 38], [6, 24, 42], [6, 26, 46], [6, 28, 50], [6, 30, 54], [6, 32, 58], [6, 34, 62], [6, 26, 46, 66], [6, 26, 48, 70], [6, 26, 50, 74], [6, 30, 54, 78], [6, 30, 56, 82], [6, 30, 58, 86], [6, 34, 62, 90], [6, 28, 50, 72, 94], [6, 26, 50, 74, 98], [6, 30, 54, 78, 102], [6, 28, 54, 80, 106], [6, 32, 58, 84, 110], [6, 30, 58, 86, 114], [6, 34, 62, 90, 118], [6, 26, 50, 74, 98, 122], [6, 30, 54, 78, 102, 126], [6, 26, 52, 78, 104, 130], [6, 30, 56, 82, 108, 134], [6, 34, 60, 86, 112, 138], [6, 30, 58, 86, 114, 142], [6, 34, 62, 90, 118, 146], [6, 30, 54, 78, 102, 126, 150], [6, 24, 50, 76, 102, 128, 154], [6, 28, 54, 80, 106, 132, 158], [6, 32, 58, 84, 110, 136, 162], [6, 26, 54, 82, 110, 138, 166], [6, 30, 58, 86, 114, 142, 170]], G15: 1335, G18: 7973, G15_MASK: 21522, getBCHTypeInfo: function(t) {
  for (var e = t << 10; Ae.getBCHDigit(e) - Ae.getBCHDigit(Ae.G15) >= 0; )
    e ^= Ae.G15 << Ae.getBCHDigit(e) - Ae.getBCHDigit(Ae.G15);
  return (t << 10 | e) ^ Ae.G15_MASK;
}, getBCHTypeNumber: function(t) {
  for (var e = t << 12; Ae.getBCHDigit(e) - Ae.getBCHDigit(Ae.G18) >= 0; )
    e ^= Ae.G18 << Ae.getBCHDigit(e) - Ae.getBCHDigit(Ae.G18);
  return t << 12 | e;
}, getBCHDigit: function(t) {
  for (var e = 0; t != 0; )
    e++, t >>>= 1;
  return e;
}, getPatternPosition: function(t) {
  return Ae.PATTERN_POSITION_TABLE[t - 1];
}, getMask: function(t, e, r) {
  switch (t) {
    case cr.PATTERN000:
      return (e + r) % 2 == 0;
    case cr.PATTERN001:
      return e % 2 == 0;
    case cr.PATTERN010:
      return r % 3 == 0;
    case cr.PATTERN011:
      return (e + r) % 3 == 0;
    case cr.PATTERN100:
      return (Math.floor(e / 2) + Math.floor(r / 3)) % 2 == 0;
    case cr.PATTERN101:
      return e * r % 2 + e * r % 3 == 0;
    case cr.PATTERN110:
      return (e * r % 2 + e * r % 3) % 2 == 0;
    case cr.PATTERN111:
      return (e * r % 3 + (e + r) % 2) % 2 == 0;
    default:
      throw new Error("bad maskPattern:" + t);
  }
}, getErrorCorrectPolynomial: function(t) {
  for (var e = new gn([1], 0), r = 0; r < t; r++)
    e = e.multiply(new gn([1, Ve.gexp(r)], 0));
  return e;
}, getLengthInBits: function(t, e) {
  if (1 <= e && e < 10)
    switch (t) {
      case ct.MODE_NUMBER:
        return 10;
      case ct.MODE_ALPHA_NUM:
        return 9;
      case ct.MODE_8BIT_BYTE:
        return 8;
      case ct.MODE_KANJI:
        return 8;
      default:
        throw new Error("mode:" + t);
    }
  else if (e < 27)
    switch (t) {
      case ct.MODE_NUMBER:
        return 12;
      case ct.MODE_ALPHA_NUM:
        return 11;
      case ct.MODE_8BIT_BYTE:
        return 16;
      case ct.MODE_KANJI:
        return 10;
      default:
        throw new Error("mode:" + t);
    }
  else if (e < 41)
    switch (t) {
      case ct.MODE_NUMBER:
        return 14;
      case ct.MODE_ALPHA_NUM:
        return 13;
      case ct.MODE_8BIT_BYTE:
        return 16;
      case ct.MODE_KANJI:
        return 12;
      default:
        throw new Error("mode:" + t);
    }
  else
    throw new Error("type:" + e);
}, getLostPoint: function(t) {
  for (var e = t.getModuleCount(), r = 0, n = 0; n < e; n++)
    for (var i = 0; i < e; i++) {
      for (var s = 0, o = t.isDark(n, i), a = -1; a <= 1; a++)
        if (!(n + a < 0 || e <= n + a))
          for (var c = -1; c <= 1; c++)
            i + c < 0 || e <= i + c || a == 0 && c == 0 || o == t.isDark(n + a, i + c) && s++;
      s > 5 && (r += 3 + s - 5);
    }
  for (var n = 0; n < e - 1; n++)
    for (var i = 0; i < e - 1; i++) {
      var u = 0;
      t.isDark(n, i) && u++, t.isDark(n + 1, i) && u++, t.isDark(n, i + 1) && u++, t.isDark(n + 1, i + 1) && u++, (u == 0 || u == 4) && (r += 3);
    }
  for (var n = 0; n < e; n++)
    for (var i = 0; i < e - 6; i++)
      t.isDark(n, i) && !t.isDark(n, i + 1) && t.isDark(n, i + 2) && t.isDark(n, i + 3) && t.isDark(n, i + 4) && !t.isDark(n, i + 5) && t.isDark(n, i + 6) && (r += 40);
  for (var i = 0; i < e; i++)
    for (var n = 0; n < e - 6; n++)
      t.isDark(n, i) && !t.isDark(n + 1, i) && t.isDark(n + 2, i) && t.isDark(n + 3, i) && t.isDark(n + 4, i) && !t.isDark(n + 5, i) && t.isDark(n + 6, i) && (r += 40);
  for (var h = 0, i = 0; i < e; i++)
    for (var n = 0; n < e; n++)
      t.isDark(n, i) && h++;
  var d = Math.abs(100 * h / e / e - 50) / 5;
  return r += d * 10, r;
} }, Ve = { glog: function(t) {
  if (t < 1)
    throw new Error("glog(" + t + ")");
  return Ve.LOG_TABLE[t];
}, gexp: function(t) {
  for (; t < 0; )
    t += 255;
  for (; t >= 256; )
    t -= 255;
  return Ve.EXP_TABLE[t];
}, EXP_TABLE: new Array(256), LOG_TABLE: new Array(256) };
for (var qe = 0; qe < 8; qe++)
  Ve.EXP_TABLE[qe] = 1 << qe;
for (var qe = 8; qe < 256; qe++)
  Ve.EXP_TABLE[qe] = Ve.EXP_TABLE[qe - 4] ^ Ve.EXP_TABLE[qe - 5] ^ Ve.EXP_TABLE[qe - 6] ^ Ve.EXP_TABLE[qe - 8];
for (var qe = 0; qe < 255; qe++)
  Ve.LOG_TABLE[Ve.EXP_TABLE[qe]] = qe;
function gn(t, e) {
  if (t.length == null)
    throw new Error(t.length + "/" + e);
  for (var r = 0; r < t.length && t[r] == 0; )
    r++;
  this.num = new Array(t.length - r + e);
  for (var n = 0; n < t.length - r; n++)
    this.num[n] = t[n + r];
}
gn.prototype = { get: function(t) {
  return this.num[t];
}, getLength: function() {
  return this.num.length;
}, multiply: function(t) {
  for (var e = new Array(this.getLength() + t.getLength() - 1), r = 0; r < this.getLength(); r++)
    for (var n = 0; n < t.getLength(); n++)
      e[r + n] ^= Ve.gexp(Ve.glog(this.get(r)) + Ve.glog(t.get(n)));
  return new gn(e, 0);
}, mod: function(t) {
  if (this.getLength() - t.getLength() < 0)
    return this;
  for (var e = Ve.glog(this.get(0)) - Ve.glog(t.get(0)), r = new Array(this.getLength()), n = 0; n < this.getLength(); n++)
    r[n] = this.get(n);
  for (var n = 0; n < t.getLength(); n++)
    r[n] ^= Ve.gexp(Ve.glog(t.get(n)) + e);
  return new gn(r, 0).mod(t);
} };
function Ht(t, e) {
  this.totalCount = t, this.dataCount = e;
}
Ht.RS_BLOCK_TABLE = [[1, 26, 19], [1, 26, 16], [1, 26, 13], [1, 26, 9], [1, 44, 34], [1, 44, 28], [1, 44, 22], [1, 44, 16], [1, 70, 55], [1, 70, 44], [2, 35, 17], [2, 35, 13], [1, 100, 80], [2, 50, 32], [2, 50, 24], [4, 25, 9], [1, 134, 108], [2, 67, 43], [2, 33, 15, 2, 34, 16], [2, 33, 11, 2, 34, 12], [2, 86, 68], [4, 43, 27], [4, 43, 19], [4, 43, 15], [2, 98, 78], [4, 49, 31], [2, 32, 14, 4, 33, 15], [4, 39, 13, 1, 40, 14], [2, 121, 97], [2, 60, 38, 2, 61, 39], [4, 40, 18, 2, 41, 19], [4, 40, 14, 2, 41, 15], [2, 146, 116], [3, 58, 36, 2, 59, 37], [4, 36, 16, 4, 37, 17], [4, 36, 12, 4, 37, 13], [2, 86, 68, 2, 87, 69], [4, 69, 43, 1, 70, 44], [6, 43, 19, 2, 44, 20], [6, 43, 15, 2, 44, 16], [4, 101, 81], [1, 80, 50, 4, 81, 51], [4, 50, 22, 4, 51, 23], [3, 36, 12, 8, 37, 13], [2, 116, 92, 2, 117, 93], [6, 58, 36, 2, 59, 37], [4, 46, 20, 6, 47, 21], [7, 42, 14, 4, 43, 15], [4, 133, 107], [8, 59, 37, 1, 60, 38], [8, 44, 20, 4, 45, 21], [12, 33, 11, 4, 34, 12], [3, 145, 115, 1, 146, 116], [4, 64, 40, 5, 65, 41], [11, 36, 16, 5, 37, 17], [11, 36, 12, 5, 37, 13], [5, 109, 87, 1, 110, 88], [5, 65, 41, 5, 66, 42], [5, 54, 24, 7, 55, 25], [11, 36, 12], [5, 122, 98, 1, 123, 99], [7, 73, 45, 3, 74, 46], [15, 43, 19, 2, 44, 20], [3, 45, 15, 13, 46, 16], [1, 135, 107, 5, 136, 108], [10, 74, 46, 1, 75, 47], [1, 50, 22, 15, 51, 23], [2, 42, 14, 17, 43, 15], [5, 150, 120, 1, 151, 121], [9, 69, 43, 4, 70, 44], [17, 50, 22, 1, 51, 23], [2, 42, 14, 19, 43, 15], [3, 141, 113, 4, 142, 114], [3, 70, 44, 11, 71, 45], [17, 47, 21, 4, 48, 22], [9, 39, 13, 16, 40, 14], [3, 135, 107, 5, 136, 108], [3, 67, 41, 13, 68, 42], [15, 54, 24, 5, 55, 25], [15, 43, 15, 10, 44, 16], [4, 144, 116, 4, 145, 117], [17, 68, 42], [17, 50, 22, 6, 51, 23], [19, 46, 16, 6, 47, 17], [2, 139, 111, 7, 140, 112], [17, 74, 46], [7, 54, 24, 16, 55, 25], [34, 37, 13], [4, 151, 121, 5, 152, 122], [4, 75, 47, 14, 76, 48], [11, 54, 24, 14, 55, 25], [16, 45, 15, 14, 46, 16], [6, 147, 117, 4, 148, 118], [6, 73, 45, 14, 74, 46], [11, 54, 24, 16, 55, 25], [30, 46, 16, 2, 47, 17], [8, 132, 106, 4, 133, 107], [8, 75, 47, 13, 76, 48], [7, 54, 24, 22, 55, 25], [22, 45, 15, 13, 46, 16], [10, 142, 114, 2, 143, 115], [19, 74, 46, 4, 75, 47], [28, 50, 22, 6, 51, 23], [33, 46, 16, 4, 47, 17], [8, 152, 122, 4, 153, 123], [22, 73, 45, 3, 74, 46], [8, 53, 23, 26, 54, 24], [12, 45, 15, 28, 46, 16], [3, 147, 117, 10, 148, 118], [3, 73, 45, 23, 74, 46], [4, 54, 24, 31, 55, 25], [11, 45, 15, 31, 46, 16], [7, 146, 116, 7, 147, 117], [21, 73, 45, 7, 74, 46], [1, 53, 23, 37, 54, 24], [19, 45, 15, 26, 46, 16], [5, 145, 115, 10, 146, 116], [19, 75, 47, 10, 76, 48], [15, 54, 24, 25, 55, 25], [23, 45, 15, 25, 46, 16], [13, 145, 115, 3, 146, 116], [2, 74, 46, 29, 75, 47], [42, 54, 24, 1, 55, 25], [23, 45, 15, 28, 46, 16], [17, 145, 115], [10, 74, 46, 23, 75, 47], [10, 54, 24, 35, 55, 25], [19, 45, 15, 35, 46, 16], [17, 145, 115, 1, 146, 116], [14, 74, 46, 21, 75, 47], [29, 54, 24, 19, 55, 25], [11, 45, 15, 46, 46, 16], [13, 145, 115, 6, 146, 116], [14, 74, 46, 23, 75, 47], [44, 54, 24, 7, 55, 25], [59, 46, 16, 1, 47, 17], [12, 151, 121, 7, 152, 122], [12, 75, 47, 26, 76, 48], [39, 54, 24, 14, 55, 25], [22, 45, 15, 41, 46, 16], [6, 151, 121, 14, 152, 122], [6, 75, 47, 34, 76, 48], [46, 54, 24, 10, 55, 25], [2, 45, 15, 64, 46, 16], [17, 152, 122, 4, 153, 123], [29, 74, 46, 14, 75, 47], [49, 54, 24, 10, 55, 25], [24, 45, 15, 46, 46, 16], [4, 152, 122, 18, 153, 123], [13, 74, 46, 32, 75, 47], [48, 54, 24, 14, 55, 25], [42, 45, 15, 32, 46, 16], [20, 147, 117, 4, 148, 118], [40, 75, 47, 7, 76, 48], [43, 54, 24, 22, 55, 25], [10, 45, 15, 67, 46, 16], [19, 148, 118, 6, 149, 119], [18, 75, 47, 31, 76, 48], [34, 54, 24, 34, 55, 25], [20, 45, 15, 61, 46, 16]];
Ht.getRSBlocks = function(t, e) {
  var r = Ht.getRsBlockTable(t, e);
  if (r == null)
    throw new Error("bad rs block @ typeNumber:" + t + "/errorCorrectLevel:" + e);
  for (var n = r.length / 3, i = [], s = 0; s < n; s++)
    for (var o = r[s * 3 + 0], a = r[s * 3 + 1], c = r[s * 3 + 2], u = 0; u < o; u++)
      i.push(new Ht(a, c));
  return i;
};
Ht.getRsBlockTable = function(t, e) {
  switch (e) {
    case gr.L:
      return Ht.RS_BLOCK_TABLE[(t - 1) * 4 + 0];
    case gr.M:
      return Ht.RS_BLOCK_TABLE[(t - 1) * 4 + 1];
    case gr.Q:
      return Ht.RS_BLOCK_TABLE[(t - 1) * 4 + 2];
    case gr.H:
      return Ht.RS_BLOCK_TABLE[(t - 1) * 4 + 3];
    default:
      return;
  }
};
function n0() {
  this.buffer = [], this.length = 0;
}
n0.prototype = { get: function(t) {
  var e = Math.floor(t / 8);
  return (this.buffer[e] >>> 7 - t % 8 & 1) == 1;
}, put: function(t, e) {
  for (var r = 0; r < e; r++)
    this.putBit((t >>> e - r - 1 & 1) == 1);
}, getLengthInBits: function() {
  return this.length;
}, putBit: function(t) {
  var e = Math.floor(this.length / 8);
  this.buffer.length <= e && this.buffer.push(0), t && (this.buffer[e] |= 128 >>> this.length % 8), this.length++;
} };
var qa = [[17, 14, 11, 7], [32, 26, 20, 14], [53, 42, 32, 24], [78, 62, 46, 34], [106, 84, 60, 44], [134, 106, 74, 58], [154, 122, 86, 64], [192, 152, 108, 84], [230, 180, 130, 98], [271, 213, 151, 119], [321, 251, 177, 137], [367, 287, 203, 155], [425, 331, 241, 177], [458, 362, 258, 194], [520, 412, 292, 220], [586, 450, 322, 250], [644, 504, 364, 280], [718, 560, 394, 310], [792, 624, 442, 338], [858, 666, 482, 382], [929, 711, 509, 403], [1003, 779, 565, 439], [1091, 857, 611, 461], [1171, 911, 661, 511], [1273, 997, 715, 535], [1367, 1059, 751, 593], [1465, 1125, 805, 625], [1528, 1190, 868, 658], [1628, 1264, 908, 698], [1732, 1370, 982, 742], [1840, 1452, 1030, 790], [1952, 1538, 1112, 842], [2068, 1628, 1168, 898], [2188, 1722, 1228, 958], [2303, 1809, 1283, 983], [2431, 1911, 1351, 1051], [2563, 1989, 1423, 1093], [2699, 2099, 1499, 1139], [2809, 2213, 1579, 1219], [2953, 2331, 1663, 1273]];
function i0(t) {
  if (this.options = {
    padding: 4,
    width: 256,
    height: 256,
    typeNumber: 4,
    color: "#000000",
    background: "#ffffff",
    ecl: "M",
    image: {
      svg: "",
      width: 0,
      height: 0
    }
  }, typeof t == "string" && (t = {
    content: t
  }), t)
    for (var e in t)
      this.options[e] = t[e];
  if (typeof this.options.content != "string")
    throw new Error("Expected 'content' as string!");
  if (this.options.content.length === 0)
    throw new Error("Expected 'content' to be non-empty!");
  if (!(this.options.padding >= 0))
    throw new Error("Expected 'padding' value to be non-negative!");
  if (!(this.options.width > 0) || !(this.options.height > 0))
    throw new Error("Expected 'width' or 'height' value to be higher than zero!");
  function r(c) {
    switch (c) {
      case "L":
        return gr.L;
      case "M":
        return gr.M;
      case "Q":
        return gr.Q;
      case "H":
        return gr.H;
      default:
        throw new Error("Unknwon error correction level: " + c);
    }
  }
  function n(c, u) {
    for (var h = i(c), d = 1, p = 0, v = 0, _ = qa.length; v <= _; v++) {
      var A = qa[v];
      if (!A)
        throw new Error("Content too long: expected " + p + " but got " + h);
      switch (u) {
        case "L":
          p = A[0];
          break;
        case "M":
          p = A[1];
          break;
        case "Q":
          p = A[2];
          break;
        case "H":
          p = A[3];
          break;
        default:
          throw new Error("Unknwon error correction level: " + u);
      }
      if (h <= p)
        break;
      d++;
    }
    if (d > qa.length)
      throw new Error("Content too long");
    return d;
  }
  function i(c) {
    var u = encodeURI(c).toString().replace(/\%[0-9a-fA-F]{2}/g, "a");
    return u.length + (u.length != c ? 3 : 0);
  }
  var s = this.options.content, o = n(s, this.options.ecl), a = r(this.options.ecl);
  this.qrcode = new Jt(o, a), this.qrcode.addData(s), this.qrcode.make();
}
i0.prototype.svg = function(t) {
  var e = this.options || {}, r = this.qrcode.modules;
  typeof t > "u" && (t = { container: e.container || "svg" });
  for (var n = typeof e.pretty < "u" ? !!e.pretty : !0, i = n ? "  " : "", s = n ? `\r
` : "", o = e.width, a = e.height, c = r.length, u = o / (c + 2 * e.padding), h = a / (c + 2 * e.padding), d = typeof e.join < "u" ? !!e.join : !1, p = typeof e.swap < "u" ? !!e.swap : !1, v = typeof e.xmlDeclaration < "u" ? !!e.xmlDeclaration : !0, _ = typeof e.predefined < "u" ? !!e.predefined : !1, A = _ ? i + '<defs><path id="qrmodule" d="M0 0 h' + h + " v" + u + ' H0 z" style="fill:' + e.color + ';shape-rendering:crispEdges;" /></defs>' + s : "", R = i + '<rect x="0" y="0" width="' + o + '" height="' + a + '" style="fill:' + e.background + ';shape-rendering:crispEdges;"/>' + s, y = "", E = "", x = 0; x < c; x++)
    for (var O = 0; O < c; O++) {
      var M = r[O][x];
      if (M) {
        var D = O * u + e.padding * u, J = x * h + e.padding * h;
        if (p) {
          var H = D;
          D = J, J = H;
        }
        if (d) {
          var F = u + D, X = h + J;
          D = Number.isInteger(D) ? Number(D) : D.toFixed(2), J = Number.isInteger(J) ? Number(J) : J.toFixed(2), F = Number.isInteger(F) ? Number(F) : F.toFixed(2), X = Number.isInteger(X) ? Number(X) : X.toFixed(2), E += "M" + D + "," + J + " V" + X + " H" + F + " V" + J + " H" + D + " Z ";
        } else
          _ ? y += i + '<use x="' + D.toString() + '" y="' + J.toString() + '" href="#qrmodule" />' + s : y += i + '<rect x="' + D.toString() + '" y="' + J.toString() + '" width="' + u + '" height="' + h + '" style="fill:' + e.color + ';shape-rendering:crispEdges;"/>' + s;
      }
    }
  d && (y = i + '<path x="0" y="0" style="fill:' + e.color + ';shape-rendering:crispEdges;" d="' + E + '" />');
  let de = "";
  if (this.options.image !== void 0 && this.options.image.svg) {
    const P = o * this.options.image.width / 100, B = a * this.options.image.height / 100, U = o / 2 - P / 2, W = a / 2 - B / 2;
    de += `<svg x="${U}" y="${W}" width="${P}" height="${B}" viewBox="0 0 100 100" preserveAspectRatio="xMinYMin meet">`, de += this.options.image.svg + s, de += "</svg>";
  }
  var re = "";
  switch (t.container) {
    case "svg":
      v && (re += '<?xml version="1.0" standalone="yes"?>' + s), re += '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="' + o + '" height="' + a + '">' + s, re += A + R + y, re += de, re += "</svg>";
      break;
    case "svg-viewbox":
      v && (re += '<?xml version="1.0" standalone="yes"?>' + s), re += '<svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 ' + o + " " + a + '">' + s, re += A + R + y, re += de, re += "</svg>";
      break;
    case "g":
      re += '<g width="' + o + '" height="' + a + '">' + s, re += A + R + y, re += de, re += "</g>";
      break;
    default:
      re += (A + R + y + de).replace(/^\s+/, "");
      break;
  }
  return re;
};
var k4 = i0, N4 = G && G.__importDefault || function(t) {
  return t && t.__esModule ? t : { default: t };
};
Object.defineProperty(oo, "__esModule", { value: !0 });
oo.QRCode = void 0;
const L4 = ft, Vf = Pi, P4 = N4(k4), B4 = (t) => {
  const [e, r] = (0, Vf.useState)("");
  return (0, Vf.useEffect)(() => {
    var n, i;
    const s = new P4.default({
      content: t.content,
      background: t.bgColor || "#ffffff",
      color: t.fgColor || "#000000",
      container: "svg",
      ecl: "M",
      width: (n = t.width) !== null && n !== void 0 ? n : 256,
      height: (i = t.height) !== null && i !== void 0 ? i : 256,
      padding: 0,
      image: t.image
    }), o = Buffer.from(s.svg(), "utf8").toString("base64");
    r(`data:image/svg+xml;base64,${o}`);
  }), e ? (0, L4.h)("img", { src: e, alt: "QR Code" }) : null;
};
oo.QRCode = B4;
var ao = {}, Au = {};
Object.defineProperty(Au, "__esModule", { value: !0 });
Au.default = ".-cbwsdk-css-reset .-cbwsdk-spinner{display:inline-block}.-cbwsdk-css-reset .-cbwsdk-spinner svg{display:inline-block;animation:2s linear infinite -cbwsdk-spinner-svg}.-cbwsdk-css-reset .-cbwsdk-spinner svg circle{animation:1.9s ease-in-out infinite both -cbwsdk-spinner-circle;display:block;fill:rgba(0,0,0,0);stroke-dasharray:283;stroke-dashoffset:280;stroke-linecap:round;stroke-width:10px;transform-origin:50% 50%}@keyframes -cbwsdk-spinner-svg{0%{transform:rotateZ(0deg)}100%{transform:rotateZ(360deg)}}@keyframes -cbwsdk-spinner-circle{0%,25%{stroke-dashoffset:280;transform:rotate(0)}50%,75%{stroke-dashoffset:75;transform:rotate(45deg)}100%{stroke-dashoffset:280;transform:rotate(360deg)}}";
var $4 = G && G.__importDefault || function(t) {
  return t && t.__esModule ? t : { default: t };
};
Object.defineProperty(ao, "__esModule", { value: !0 });
ao.Spinner = void 0;
const Qi = ft, D4 = $4(Au), F4 = (t) => {
  var e;
  const r = (e = t.size) !== null && e !== void 0 ? e : 64, n = t.color || "#000";
  return (0, Qi.h)(
    "div",
    { class: "-cbwsdk-spinner" },
    (0, Qi.h)("style", null, D4.default),
    (0, Qi.h)(
      "svg",
      { viewBox: "0 0 100 100", xmlns: "http://www.w3.org/2000/svg", style: { width: r, height: r } },
      (0, Qi.h)("circle", { style: { cx: 50, cy: 50, r: 45, stroke: n } })
    )
  );
};
ao.Spinner = F4;
var Tu = {};
Object.defineProperty(Tu, "__esModule", { value: !0 });
Tu.default = ".-cbwsdk-css-reset .-cbwsdk-connect-content{height:430px;width:700px;border-radius:12px;padding:30px}.-cbwsdk-css-reset .-cbwsdk-connect-content.light{background:#fff}.-cbwsdk-css-reset .-cbwsdk-connect-content.dark{background:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-connect-content-header{display:flex;align-items:center;justify-content:space-between;margin:0 0 30px}.-cbwsdk-css-reset .-cbwsdk-connect-content-heading{font-style:normal;font-weight:500;font-size:28px;line-height:36px;margin:0}.-cbwsdk-css-reset .-cbwsdk-connect-content-heading.light{color:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-connect-content-heading.dark{color:#fff}.-cbwsdk-css-reset .-cbwsdk-connect-content-layout{display:flex;flex-direction:row}.-cbwsdk-css-reset .-cbwsdk-connect-content-column-left{margin-right:30px;display:flex;flex-direction:column;justify-content:space-between}.-cbwsdk-css-reset .-cbwsdk-connect-content-column-right{flex:25%;margin-right:34px}.-cbwsdk-css-reset .-cbwsdk-connect-content-qr-wrapper{width:220px;height:220px;border-radius:12px;display:flex;justify-content:center;align-items:center;background:#fff}.-cbwsdk-css-reset .-cbwsdk-connect-content-qr-connecting{position:absolute;top:0;bottom:0;left:0;right:0;display:flex;flex-direction:column;align-items:center;justify-content:center}.-cbwsdk-css-reset .-cbwsdk-connect-content-qr-connecting.light{background-color:rgba(255,255,255,.95)}.-cbwsdk-css-reset .-cbwsdk-connect-content-qr-connecting.light>p{color:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-connect-content-qr-connecting.dark{background-color:rgba(10,11,13,.9)}.-cbwsdk-css-reset .-cbwsdk-connect-content-qr-connecting.dark>p{color:#fff}.-cbwsdk-css-reset .-cbwsdk-connect-content-qr-connecting>p{font-size:12px;font-weight:bold;margin-top:16px}.-cbwsdk-css-reset .-cbwsdk-connect-content-update-app{border-radius:8px;font-size:14px;line-height:20px;padding:12px;width:339px}.-cbwsdk-css-reset .-cbwsdk-connect-content-update-app.light{background:#eef0f3;color:#5b636e}.-cbwsdk-css-reset .-cbwsdk-connect-content-update-app.dark{background:#1e2025;color:#8a919e}.-cbwsdk-css-reset .-cbwsdk-cancel-button{-webkit-appearance:none;border:none;background:none;cursor:pointer;padding:0;margin:0}.-cbwsdk-css-reset .-cbwsdk-cancel-button-x{position:relative;display:block;cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-wallet-steps{padding:0 0 0 16px;margin:0;width:100%;list-style:decimal}.-cbwsdk-css-reset .-cbwsdk-wallet-steps-item{list-style-type:decimal;display:list-item;font-style:normal;font-weight:400;font-size:16px;line-height:24px;margin-top:20px}.-cbwsdk-css-reset .-cbwsdk-wallet-steps-item.light{color:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-wallet-steps-item.dark{color:#fff}.-cbwsdk-css-reset .-cbwsdk-wallet-steps-item-wrapper{display:flex;align-items:center}.-cbwsdk-css-reset .-cbwsdk-wallet-steps-pad-left{margin-left:6px}.-cbwsdk-css-reset .-cbwsdk-wallet-steps-icon{display:flex;border-radius:50%;height:24px;width:24px}.-cbwsdk-css-reset .-cbwsdk-wallet-steps-icon svg{margin:auto;display:block}.-cbwsdk-css-reset .-cbwsdk-wallet-steps-icon.light{background:#0052ff}.-cbwsdk-css-reset .-cbwsdk-wallet-steps-icon.dark{background:#588af5}.-cbwsdk-css-reset .-cbwsdk-connect-item{align-items:center;display:flex;flex-direction:row;padding:16px 24px;gap:12px;cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-connect-item.light{color:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-connect-item.light.selected{background:#f5f8ff;color:#0052ff}.-cbwsdk-css-reset .-cbwsdk-connect-item.dark{color:#fff}.-cbwsdk-css-reset .-cbwsdk-connect-item.dark.selected{background:#001033;color:#588af5}.-cbwsdk-css-reset .-cbwsdk-connect-item.selected{border-radius:100px;font-weight:600}.-cbwsdk-css-reset .-cbwsdk-connect-item-copy-wrapper{margin:0 4px 0 8px}.-cbwsdk-css-reset .-cbwsdk-connect-item-title{margin:0 0 0;font-size:16px;line-height:24px;font-weight:500}.-cbwsdk-css-reset .-cbwsdk-connect-item-description{font-weight:400;font-size:14px;line-height:20px;margin:0}";
var Vn = G && G.__importDefault || function(t) {
  return t && t.__esModule ? t : { default: t };
};
Object.defineProperty(Gt, "__esModule", { value: !0 });
Gt.CoinbaseAppSteps = Gt.CoinbaseWalletSteps = Gt.ConnectItem = Gt.ConnectContent = void 0;
const vt = Vn(ro), ee = ft, Hf = Pi, j4 = Z, U4 = kn, W4 = no, V4 = Vn(xu), H4 = Vn(Cu), s0 = io, z4 = Vn(Iu), q4 = Vn(Ru), G4 = so, J4 = oo, Q4 = ao, Z4 = Vn(Tu), zf = {
  "coinbase-wallet-app": {
    title: "Coinbase Wallet app",
    description: "Connect with your self-custody wallet",
    icon: H4.default,
    steps: a0
  },
  "coinbase-app": {
    title: "Coinbase app",
    description: "Connect with your Coinbase account",
    icon: V4.default,
    steps: c0
  }
}, Y4 = (t) => {
  switch (t) {
    case "coinbase-app":
      return z4.default;
    case "coinbase-wallet-app":
    default:
      return q4.default;
  }
}, Sc = (t) => t === "light" ? "#FFFFFF" : "#0A0B0D";
function K4(t) {
  const { theme: e } = t, [r, n] = (0, Hf.useState)("coinbase-wallet-app"), i = (0, Hf.useCallback)((u) => {
    n(u);
  }, []), s = (0, j4.createQrUrl)(t.sessionId, t.sessionSecret, t.linkAPIUrl, t.isParentConnection, t.version, t.chainId), o = zf[r];
  if (!r)
    return null;
  const a = o.steps, c = r === "coinbase-app";
  return (0, ee.h)(
    "div",
    { "data-testid": "connect-content", class: (0, vt.default)("-cbwsdk-connect-content", e) },
    (0, ee.h)("style", null, Z4.default),
    (0, ee.h)(
      "div",
      { class: "-cbwsdk-connect-content-header" },
      (0, ee.h)("h2", { class: (0, vt.default)("-cbwsdk-connect-content-heading", e) }, "Scan to connect with one of our mobile apps"),
      t.onCancel && (0, ee.h)(
        "button",
        { type: "button", class: "-cbwsdk-cancel-button", onClick: t.onCancel },
        (0, ee.h)(W4.CloseIcon, { fill: e === "light" ? "#0A0B0D" : "#FFFFFF" })
      )
    ),
    (0, ee.h)(
      "div",
      { class: "-cbwsdk-connect-content-layout" },
      (0, ee.h)(
        "div",
        { class: "-cbwsdk-connect-content-column-left" },
        (0, ee.h)("div", null, Object.entries(zf).map(([u, h]) => (0, ee.h)(o0, { key: u, title: h.title, description: h.description, icon: h.icon, selected: r === u, onClick: () => i(u), theme: e }))),
        c && (0, ee.h)(
          "div",
          { class: (0, vt.default)("-cbwsdk-connect-content-update-app", e) },
          "Don’t see a ",
          (0, ee.h)("strong", null, "Scan"),
          " option? Update your Coinbase app to the latest version and try again."
        )
      ),
      (0, ee.h)(
        "div",
        { class: "-cbwsdk-connect-content-column-right" },
        (0, ee.h)(
          "div",
          { class: "-cbwsdk-connect-content-qr-wrapper" },
          (0, ee.h)(J4.QRCode, { content: s, width: 200, height: 200, fgColor: "#000", bgColor: "transparent", image: {
            svg: Y4(r),
            width: 25,
            height: 25
          } }),
          (0, ee.h)("input", { type: "hidden", name: "cbw-cbwsdk-version", value: U4.LIB_VERSION }),
          (0, ee.h)("input", { type: "hidden", value: s })
        ),
        (0, ee.h)(a, { theme: e }),
        !t.isConnected && (0, ee.h)(
          "div",
          { "data-testid": "connecting-spinner", class: (0, vt.default)("-cbwsdk-connect-content-qr-connecting", e) },
          (0, ee.h)(Q4.Spinner, { size: 36, color: e === "dark" ? "#FFF" : "#000" }),
          (0, ee.h)("p", null, "Connecting...")
        )
      )
    )
  );
}
Gt.ConnectContent = K4;
function o0({ title: t, description: e, icon: r, selected: n, theme: i, onClick: s }) {
  return (0, ee.h)(
    "div",
    { onClick: s, class: (0, vt.default)("-cbwsdk-connect-item", i, { selected: n }) },
    (0, ee.h)(
      "div",
      null,
      (0, ee.h)("img", { src: r, alt: t })
    ),
    (0, ee.h)(
      "div",
      { class: "-cbwsdk-connect-item-copy-wrapper" },
      (0, ee.h)("h3", { class: "-cbwsdk-connect-item-title" }, t),
      (0, ee.h)("p", { class: "-cbwsdk-connect-item-description" }, e)
    )
  );
}
Gt.ConnectItem = o0;
function a0({ theme: t }) {
  return (0, ee.h)(
    "ol",
    { class: "-cbwsdk-wallet-steps" },
    (0, ee.h)(
      "li",
      { class: (0, vt.default)("-cbwsdk-wallet-steps-item", t) },
      (0, ee.h)("div", { class: "-cbwsdk-wallet-steps-item-wrapper" }, "Open Coinbase Wallet app")
    ),
    (0, ee.h)(
      "li",
      { class: (0, vt.default)("-cbwsdk-wallet-steps-item", t) },
      (0, ee.h)(
        "div",
        { class: "-cbwsdk-wallet-steps-item-wrapper" },
        (0, ee.h)(
          "span",
          null,
          "Tap ",
          (0, ee.h)("strong", null, "Scan"),
          " "
        ),
        (0, ee.h)(
          "span",
          { class: (0, vt.default)("-cbwsdk-wallet-steps-pad-left", "-cbwsdk-wallet-steps-icon", t) },
          (0, ee.h)(s0.QRCodeIcon, { fill: Sc(t) })
        )
      )
    )
  );
}
Gt.CoinbaseWalletSteps = a0;
function c0({ theme: t }) {
  return (0, ee.h)(
    "ol",
    { class: "-cbwsdk-wallet-steps" },
    (0, ee.h)(
      "li",
      { class: (0, vt.default)("-cbwsdk-wallet-steps-item", t) },
      (0, ee.h)("div", { class: "-cbwsdk-wallet-steps-item-wrapper" }, "Open Coinbase app")
    ),
    (0, ee.h)(
      "li",
      { class: (0, vt.default)("-cbwsdk-wallet-steps-item", t) },
      (0, ee.h)(
        "div",
        { class: "-cbwsdk-wallet-steps-item-wrapper" },
        (0, ee.h)(
          "span",
          null,
          "Tap ",
          (0, ee.h)("strong", null, "More")
        ),
        (0, ee.h)(
          "span",
          { class: (0, vt.default)("-cbwsdk-wallet-steps-pad-left", "-cbwsdk-wallet-steps-icon", t) },
          (0, ee.h)(G4.StatusDotIcon, { fill: Sc(t) })
        ),
        (0, ee.h)(
          "span",
          { class: "-cbwsdk-wallet-steps-pad-left" },
          "then ",
          (0, ee.h)("strong", null, "Scan")
        ),
        (0, ee.h)(
          "span",
          { class: (0, vt.default)("-cbwsdk-wallet-steps-pad-left", "-cbwsdk-wallet-steps-icon", t) },
          (0, ee.h)(s0.QRCodeIcon, { fill: Sc(t) })
        )
      )
    )
  );
}
Gt.CoinbaseAppSteps = c0;
var co = {}, uo = {};
Object.defineProperty(uo, "__esModule", { value: !0 });
uo.ArrowLeftIcon = void 0;
const qf = ft;
function X4(t) {
  return (0, qf.h)(
    "svg",
    Object.assign({ width: "16", height: "16", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg" }, t),
    (0, qf.h)("path", { d: "M8.60675 0.155884L7.37816 1.28209L12.7723 7.16662H0V8.83328H12.6548L6.82149 14.6666L8 15.8451L15.8201 8.02501L8.60675 0.155884Z" })
  );
}
uo.ArrowLeftIcon = X4;
var lo = {};
Object.defineProperty(lo, "__esModule", { value: !0 });
lo.LaptopIcon = void 0;
const Ga = ft;
function e5(t) {
  return (0, Ga.h)(
    "svg",
    Object.assign({ width: "14", height: "14", viewBox: "0 0 14 14", xmlns: "http://www.w3.org/2000/svg" }, t),
    (0, Ga.h)("path", { d: "M1.8001 2.2002H12.2001V9.40019H1.8001V2.2002ZM3.4001 3.8002V7.80019H10.6001V3.8002H3.4001Z" }),
    (0, Ga.h)("path", { d: "M13.4001 10.2002H0.600098C0.600098 11.0838 1.31644 11.8002 2.2001 11.8002H11.8001C12.6838 11.8002 13.4001 11.0838 13.4001 10.2002Z" })
  );
}
lo.LaptopIcon = e5;
var fo = {};
Object.defineProperty(fo, "__esModule", { value: !0 });
fo.SafeIcon = void 0;
const Gf = ft;
function t5(t) {
  return (0, Gf.h)(
    "svg",
    Object.assign({ width: "14", height: "14", viewBox: "0 0 14 14", xmlns: "http://www.w3.org/2000/svg" }, t),
    (0, Gf.h)("path", { "fill-rule": "evenodd", "clip-rule": "evenodd", d: "M0.600098 0.600098V11.8001H13.4001V0.600098H0.600098ZM7.0001 9.2001C5.3441 9.2001 4.0001 7.8561 4.0001 6.2001C4.0001 4.5441 5.3441 3.2001 7.0001 3.2001C8.6561 3.2001 10.0001 4.5441 10.0001 6.2001C10.0001 7.8561 8.6561 9.2001 7.0001 9.2001ZM0.600098 12.6001H3.8001V13.4001H0.600098V12.6001ZM10.2001 12.6001H13.4001V13.4001H10.2001V12.6001ZM8.8001 6.2001C8.8001 7.19421 7.99421 8.0001 7.0001 8.0001C6.00598 8.0001 5.2001 7.19421 5.2001 6.2001C5.2001 5.20598 6.00598 4.4001 7.0001 4.4001C7.99421 4.4001 8.8001 5.20598 8.8001 6.2001Z" })
  );
}
fo.SafeIcon = t5;
var Mu = {};
Object.defineProperty(Mu, "__esModule", { value: !0 });
Mu.default = ".-cbwsdk-css-reset .-cbwsdk-try-extension{display:flex;margin-top:12px;height:202px;width:700px;border-radius:12px;padding:30px}.-cbwsdk-css-reset .-cbwsdk-try-extension.light{background:#fff}.-cbwsdk-css-reset .-cbwsdk-try-extension.dark{background:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-try-extension-column-half{flex:50%}.-cbwsdk-css-reset .-cbwsdk-try-extension-heading{font-style:normal;font-weight:500;font-size:25px;line-height:32px;margin:0;max-width:204px}.-cbwsdk-css-reset .-cbwsdk-try-extension-heading.light{color:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-try-extension-heading.dark{color:#fff}.-cbwsdk-css-reset .-cbwsdk-try-extension-cta{appearance:none;border:none;background:none;color:#0052ff;cursor:pointer;padding:0;text-decoration:none;display:block;font-weight:600;font-size:16px;line-height:24px}.-cbwsdk-css-reset .-cbwsdk-try-extension-cta.light{color:#0052ff}.-cbwsdk-css-reset .-cbwsdk-try-extension-cta.dark{color:#588af5}.-cbwsdk-css-reset .-cbwsdk-try-extension-cta-wrapper{display:flex;align-items:center;margin-top:12px}.-cbwsdk-css-reset .-cbwsdk-try-extension-cta-icon{display:block;margin-left:4px;height:14px}.-cbwsdk-css-reset .-cbwsdk-try-extension-list{display:flex;flex-direction:column;justify-content:center;align-items:center;margin:0;padding:0;list-style:none;height:100%}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item{display:flex;align-items:center;flex-flow:nowrap;margin-top:24px}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item:first-of-type{margin-top:0}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item-icon-wrapper{display:block}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item-icon{display:flex;height:32px;width:32px;border-radius:50%}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item-icon svg{margin:auto;display:block}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item-icon.light{background:#eef0f3}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item-icon.dark{background:#1e2025}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item-copy{display:block;font-weight:400;font-size:14px;line-height:20px;padding-left:12px}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item-copy.light{color:#5b636e}.-cbwsdk-css-reset .-cbwsdk-try-extension-list-item-copy.dark{color:#8a919e}";
var u0 = G && G.__importDefault || function(t) {
  return t && t.__esModule ? t : { default: t };
};
Object.defineProperty(co, "__esModule", { value: !0 });
co.TryExtensionContent = void 0;
const Cr = u0(ro), Pe = ft, Ja = Pi, r5 = uo, n5 = lo, i5 = fo, s5 = u0(Mu);
function o5({ theme: t }) {
  const [e, r] = (0, Ja.useState)(!1), n = (0, Ja.useCallback)(() => {
    window.open("https://api.wallet.coinbase.com/rpc/v2/desktop/chrome", "_blank");
  }, []), i = (0, Ja.useCallback)(() => {
    e ? window.location.reload() : (n(), r(!0));
  }, [n, e]);
  return (0, Pe.h)(
    "div",
    { class: (0, Cr.default)("-cbwsdk-try-extension", t) },
    (0, Pe.h)("style", null, s5.default),
    (0, Pe.h)(
      "div",
      { class: "-cbwsdk-try-extension-column-half" },
      (0, Pe.h)("h3", { class: (0, Cr.default)("-cbwsdk-try-extension-heading", t) }, "Or try the Coinbase Wallet browser extension"),
      (0, Pe.h)(
        "div",
        { class: "-cbwsdk-try-extension-cta-wrapper" },
        (0, Pe.h)("button", { class: (0, Cr.default)("-cbwsdk-try-extension-cta", t), onClick: i }, e ? "Refresh" : "Install"),
        (0, Pe.h)("div", null, !e && (0, Pe.h)(r5.ArrowLeftIcon, { class: "-cbwsdk-try-extension-cta-icon", fill: t === "light" ? "#0052FF" : "#588AF5" }))
      )
    ),
    (0, Pe.h)(
      "div",
      { class: "-cbwsdk-try-extension-column-half" },
      (0, Pe.h)(
        "ul",
        { class: "-cbwsdk-try-extension-list" },
        (0, Pe.h)(
          "li",
          { class: "-cbwsdk-try-extension-list-item" },
          (0, Pe.h)(
            "div",
            { class: "-cbwsdk-try-extension-list-item-icon-wrapper" },
            (0, Pe.h)(
              "span",
              { class: (0, Cr.default)("-cbwsdk-try-extension-list-item-icon", t) },
              (0, Pe.h)(n5.LaptopIcon, { fill: t === "light" ? "#0A0B0D" : "#FFFFFF" })
            )
          ),
          (0, Pe.h)("div", { class: (0, Cr.default)("-cbwsdk-try-extension-list-item-copy", t) }, "Connect with dapps with just one click on your desktop browser")
        ),
        (0, Pe.h)(
          "li",
          { class: "-cbwsdk-try-extension-list-item" },
          (0, Pe.h)(
            "div",
            { class: "-cbwsdk-try-extension-list-item-icon-wrapper" },
            (0, Pe.h)(
              "span",
              { class: (0, Cr.default)("-cbwsdk-try-extension-list-item-icon", t) },
              (0, Pe.h)(i5.SafeIcon, { fill: t === "light" ? "#0A0B0D" : "#FFFFFF" })
            )
          ),
          (0, Pe.h)("div", { class: (0, Cr.default)("-cbwsdk-try-extension-list-item-copy", t) }, "Add an additional layer of security by using a supported Ledger hardware wallet")
        )
      )
    )
  );
}
co.TryExtensionContent = o5;
var Ou = {};
Object.defineProperty(Ou, "__esModule", { value: !0 });
Ou.default = ".-cbwsdk-css-reset .-cbwsdk-connect-dialog{z-index:2147483647;position:fixed;top:0;left:0;right:0;bottom:0;display:flex;align-items:center;justify-content:center}.-cbwsdk-css-reset .-cbwsdk-connect-dialog-backdrop{z-index:2147483647;position:fixed;top:0;left:0;right:0;bottom:0;transition:opacity .25s}.-cbwsdk-css-reset .-cbwsdk-connect-dialog-backdrop.light{background-color:rgba(0,0,0,.5)}.-cbwsdk-css-reset .-cbwsdk-connect-dialog-backdrop.dark{background-color:rgba(50,53,61,.4)}.-cbwsdk-css-reset .-cbwsdk-connect-dialog-backdrop-hidden{opacity:0}.-cbwsdk-css-reset .-cbwsdk-connect-dialog-box{display:flex;position:relative;flex-direction:column;transform:scale(1);transition:opacity .25s,transform .25s}.-cbwsdk-css-reset .-cbwsdk-connect-dialog-box-hidden{opacity:0;transform:scale(0.85)}.-cbwsdk-css-reset .-cbwsdk-connect-dialog-container{display:block}.-cbwsdk-css-reset .-cbwsdk-connect-dialog-container-hidden{display:none}";
var l0 = G && G.__importDefault || function(t) {
  return t && t.__esModule ? t : { default: t };
};
Object.defineProperty(to, "__esModule", { value: !0 });
to.ConnectDialog = void 0;
const Qa = l0(ro), Ir = ft, Za = Pi, a5 = Gt, c5 = co, u5 = l0(Ou), l5 = (t) => {
  const { isOpen: e, darkMode: r } = t, [n, i] = (0, Za.useState)(!e), [s, o] = (0, Za.useState)(!e);
  (0, Za.useEffect)(() => {
    const c = [
      window.setTimeout(() => {
        o(!e);
      }, 10)
    ];
    return e ? i(!1) : c.push(window.setTimeout(() => {
      i(!0);
    }, 360)), () => {
      c.forEach(window.clearTimeout);
    };
  }, [t.isOpen]);
  const a = r ? "dark" : "light";
  return (0, Ir.h)(
    "div",
    { class: (0, Qa.default)("-cbwsdk-connect-dialog-container", n && "-cbwsdk-connect-dialog-container-hidden") },
    (0, Ir.h)("style", null, u5.default),
    (0, Ir.h)("div", { class: (0, Qa.default)("-cbwsdk-connect-dialog-backdrop", a, s && "-cbwsdk-connect-dialog-backdrop-hidden") }),
    (0, Ir.h)(
      "div",
      { class: "-cbwsdk-connect-dialog" },
      (0, Ir.h)(
        "div",
        { class: (0, Qa.default)("-cbwsdk-connect-dialog-box", s && "-cbwsdk-connect-dialog-box-hidden") },
        t.connectDisabled ? null : (0, Ir.h)(a5.ConnectContent, { theme: a, version: t.version, sessionId: t.sessionId, sessionSecret: t.sessionSecret, linkAPIUrl: t.linkAPIUrl, isConnected: t.isConnected, isParentConnection: t.isParentConnection, chainId: t.chainId, onCancel: t.onCancel }),
        (0, Ir.h)(c5.TryExtensionContent, { theme: a })
      )
    )
  );
};
to.ConnectDialog = l5;
Object.defineProperty(Ks, "__esModule", { value: !0 });
Ks.LinkFlow = void 0;
const Ya = ft, Jf = eo, f5 = to;
class h5 {
  constructor(e) {
    this.extensionUI$ = new Jf.BehaviorSubject({}), this.subscriptions = new Jf.Subscription(), this.isConnected = !1, this.chainId = 1, this.isOpen = !1, this.onCancel = null, this.root = null, this.connectDisabled = !1, this.darkMode = e.darkMode, this.version = e.version, this.sessionId = e.sessionId, this.sessionSecret = e.sessionSecret, this.linkAPIUrl = e.linkAPIUrl, this.isParentConnection = e.isParentConnection, this.connected$ = e.connected$, this.chainId$ = e.chainId$;
  }
  attach(e) {
    this.root = document.createElement("div"), this.root.className = "-cbwsdk-link-flow-root", e.appendChild(this.root), this.render(), this.subscriptions.add(this.connected$.subscribe((r) => {
      this.isConnected !== r && (this.isConnected = r, this.render());
    })), this.subscriptions.add(this.chainId$.subscribe((r) => {
      this.chainId !== r && (this.chainId = r, this.render());
    }));
  }
  detach() {
    var e;
    this.root && (this.subscriptions.unsubscribe(), (0, Ya.render)(null, this.root), (e = this.root.parentElement) === null || e === void 0 || e.removeChild(this.root));
  }
  setConnectDisabled(e) {
    this.connectDisabled = e;
  }
  open(e) {
    this.isOpen = !0, this.onCancel = e.onCancel, this.render();
  }
  close() {
    this.isOpen = !1, this.onCancel = null, this.render();
  }
  render() {
    if (!this.root)
      return;
    const e = this.extensionUI$.subscribe(() => {
      this.root && (0, Ya.render)((0, Ya.h)(f5.ConnectDialog, { darkMode: this.darkMode, version: this.version, sessionId: this.sessionId, sessionSecret: this.sessionSecret, linkAPIUrl: this.linkAPIUrl, isOpen: this.isOpen, isConnected: this.isConnected, isParentConnection: this.isParentConnection, chainId: this.chainId, onCancel: this.onCancel, connectDisabled: this.connectDisabled }), this.root);
    });
    this.subscriptions.add(e);
  }
}
Ks.LinkFlow = h5;
var f0 = {}, ku = {};
Object.defineProperty(ku, "__esModule", { value: !0 });
ku.default = ".-cbwsdk-css-reset .-gear-container{margin-left:16px !important;margin-right:9px !important;display:flex;align-items:center;justify-content:center;width:24px;height:24px;transition:opacity .25s}.-cbwsdk-css-reset .-gear-container *{user-select:none}.-cbwsdk-css-reset .-gear-container svg{opacity:0;position:absolute}.-cbwsdk-css-reset .-gear-icon{height:12px;width:12px;z-index:10000}.-cbwsdk-css-reset .-cbwsdk-snackbar{align-items:flex-end;display:flex;flex-direction:column;position:fixed;right:0;top:0;z-index:2147483647}.-cbwsdk-css-reset .-cbwsdk-snackbar *{user-select:none}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance{display:flex;flex-direction:column;margin:8px 16px 0 16px;overflow:visible;text-align:left;transform:translateX(0);transition:opacity .25s,transform .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header:hover .-gear-container svg{opacity:1}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header{display:flex;align-items:center;background:#fff;overflow:hidden;border:1px solid #e7ebee;box-sizing:border-box;border-radius:8px;cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header-cblogo{margin:8px 8px 8px 8px}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header *{cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header-message{color:#000;font-size:13px;line-height:1.5;user-select:none}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu{background:#fff;transition:opacity .25s ease-in-out,transform .25s linear,visibility 0s;visibility:hidden;border:1px solid #e7ebee;box-sizing:border-box;border-radius:8px;opacity:0;flex-direction:column;padding-left:8px;padding-right:8px}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item:last-child{margin-bottom:8px !important}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item:hover{background:#f5f7f8;border-radius:6px;transition:background .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item:hover span{color:#050f19;transition:color .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item:hover svg path{fill:#000;transition:fill .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item{visibility:inherit;height:35px;margin-top:8px;margin-bottom:0;display:flex;flex-direction:row;align-items:center;padding:8px;cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item *{visibility:inherit;cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-is-red:hover{background:rgba(223,95,103,.2);transition:background .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-is-red:hover *{cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-is-red:hover svg path{fill:#df5f67;transition:fill .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-is-red:hover span{color:#df5f67;transition:color .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-info{color:#aaa;font-size:13px;margin:0 8px 0 32px;position:absolute}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-hidden{opacity:0;text-align:left;transform:translateX(25%);transition:opacity .5s linear}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-expanded .-cbwsdk-snackbar-instance-menu{opacity:1;display:flex;transform:translateY(8px);visibility:visible}";
(function(t) {
  var e = G && G.__importDefault || function(d) {
    return d && d.__esModule ? d : { default: d };
  };
  Object.defineProperty(t, "__esModule", { value: !0 }), t.SnackbarInstance = t.SnackbarContainer = t.Snackbar = void 0;
  const r = e(ro), n = ft, i = Pi, s = e(ku), o = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEyIDYuNzV2LTEuNWwtMS43Mi0uNTdjLS4wOC0uMjctLjE5LS41Mi0uMzItLjc3bC44MS0xLjYyLTEuMDYtMS4wNi0xLjYyLjgxYy0uMjQtLjEzLS41LS4yNC0uNzctLjMyTDYuNzUgMGgtMS41bC0uNTcgMS43MmMtLjI3LjA4LS41My4xOS0uNzcuMzJsLTEuNjItLjgxLTEuMDYgMS4wNi44MSAxLjYyYy0uMTMuMjQtLjI0LjUtLjMyLjc3TDAgNS4yNXYxLjVsMS43Mi41N2MuMDguMjcuMTkuNTMuMzIuNzdsLS44MSAxLjYyIDEuMDYgMS4wNiAxLjYyLS44MWMuMjQuMTMuNS4yMy43Ny4zMkw1LjI1IDEyaDEuNWwuNTctMS43MmMuMjctLjA4LjUyLS4xOS43Ny0uMzJsMS42Mi44MSAxLjA2LTEuMDYtLjgxLTEuNjJjLjEzLS4yNC4yMy0uNS4zMi0uNzdMMTIgNi43NXpNNiA4LjVhMi41IDIuNSAwIDAxMC01IDIuNSAyLjUgMCAwMTAgNXoiIGZpbGw9IiMwNTBGMTkiLz48L3N2Zz4=";
  function a(d) {
    switch (d) {
      case "coinbase-app":
        return "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTE0LjY3NCAxOC44NThjLTIuMDQ1IDAtMy42NDgtMS43MjItMy42NDgtMy44NDVzMS42NTktMy44NDUgMy42NDgtMy44NDVjMS44MjQgMCAzLjMxNyAxLjM3NyAzLjU5MyAzLjIxNGgzLjcwM2MtLjMzMS0zLjk2LTMuNDgyLTcuMDU5LTcuMjk2LTcuMDU5LTQuMDM0IDAtNy4zNSAzLjQ0My03LjM1IDcuNjkgMCA0LjI0NiAzLjI2IDcuNjkgNy4zNSA3LjY5IDMuODcgMCA2Ljk2NS0zLjEgNy4yOTYtNy4wNTloLTMuNzAzYy0uMjc2IDEuODM2LTEuNzY5IDMuMjE0LTMuNTkzIDMuMjE0WiIgZmlsbD0iI2ZmZiIvPjxwYXRoIGQ9Ik0wIDEwLjY3OGMwLTMuNzExIDAtNS41OTYuNzQyLTcuMDIzQTYuNTMyIDYuNTMyIDAgMCAxIDMuNjU1Ljc0MkM1LjA4MiAwIDYuOTY3IDAgMTAuNjc4IDBoNy45MzhjMy43MTEgMCA1LjU5NiAwIDcuMDIzLjc0MmE2LjUzMSA2LjUzMSAwIDAgMSAyLjkxMyAyLjkxM2MuNzQyIDEuNDI3Ljc0MiAzLjMxMi43NDIgNy4wMjN2Ny45MzhjMCAzLjcxMSAwIDUuNTk2LS43NDIgNy4wMjNhNi41MzEgNi41MzEgMCAwIDEtMi45MTMgMi45MTNjLTEuNDI3Ljc0Mi0zLjMxMi43NDItNy4wMjMuNzQyaC03LjkzOGMtMy43MTEgMC01LjU5NiAwLTcuMDIzLS43NDJhNi41MzEgNi41MzEgMCAwIDEtMi45MTMtMi45MTNDMCAyNC4yMTIgMCAyMi4zODQgMCAxOC42MTZ2LTcuOTM4WiIgZmlsbD0iIzAwNTJGRiIvPjxwYXRoIGQ9Ik0xNC42ODQgMTkuNzczYy0yLjcyNyAwLTQuODY0LTIuMjk1LTQuODY0LTUuMTI2IDAtMi44MzEgMi4yMS01LjEyNyA0Ljg2NC01LjEyNyAyLjQzMiAwIDQuNDIyIDEuODM3IDQuNzkgNC4yODVoNC45MzhjLS40NDItNS4yOC00LjY0My05LjQxMS05LjcyOC05LjQxMS01LjM4IDAtOS44MDIgNC41OS05LjgwMiAxMC4yNTMgMCA1LjY2MiA0LjM0OCAxMC4yNTMgOS44MDIgMTAuMjUzIDUuMTU5IDAgOS4yODYtNC4xMzIgOS43MjgtOS40MTFoLTQuOTM4Yy0uMzY4IDIuNDQ4LTIuMzU4IDQuMjg0LTQuNzkgNC4yODRaIiBmaWxsPSIjZmZmIi8+PC9zdmc+";
      case "coinbase-wallet-app":
      default:
        return "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEuNDkyIDEwLjQxOWE4LjkzIDguOTMgMCAwMTguOTMtOC45M2gxMS4xNjNhOC45MyA4LjkzIDAgMDE4LjkzIDguOTN2MTEuMTYzYTguOTMgOC45MyAwIDAxLTguOTMgOC45M0gxMC40MjJhOC45MyA4LjkzIDAgMDEtOC45My04LjkzVjEwLjQxOXoiIGZpbGw9IiMxNjUyRjAiLz48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTEwLjQxOSAwSDIxLjU4QzI3LjMzNSAwIDMyIDQuNjY1IDMyIDEwLjQxOVYyMS41OEMzMiAyNy4zMzUgMjcuMzM1IDMyIDIxLjU4MSAzMkgxMC40MkM0LjY2NSAzMiAwIDI3LjMzNSAwIDIxLjU4MVYxMC40MkMwIDQuNjY1IDQuNjY1IDAgMTAuNDE5IDB6bTAgMS40ODhhOC45MyA4LjkzIDAgMDAtOC45MyA4LjkzdjExLjE2M2E4LjkzIDguOTMgMCAwMDguOTMgOC45M0gyMS41OGE4LjkzIDguOTMgMCAwMDguOTMtOC45M1YxMC40MmE4LjkzIDguOTMgMCAwMC04LjkzLTguOTNIMTAuNDJ6IiBmaWxsPSIjZmZmIi8+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNS45OTggMjYuMDQ5Yy01LjU0OSAwLTEwLjA0Ny00LjQ5OC0xMC4wNDctMTAuMDQ3IDAtNS41NDggNC40OTgtMTAuMDQ2IDEwLjA0Ny0xMC4wNDYgNS41NDggMCAxMC4wNDYgNC40OTggMTAuMDQ2IDEwLjA0NiAwIDUuNTQ5LTQuNDk4IDEwLjA0Ny0xMC4wNDYgMTAuMDQ3eiIgZmlsbD0iI2ZmZiIvPjxwYXRoIGQ9Ik0xMi43NjIgMTQuMjU0YzAtLjgyMi42NjctMS40ODkgMS40ODktMS40ODloMy40OTdjLjgyMiAwIDEuNDg4LjY2NiAxLjQ4OCAxLjQ4OXYzLjQ5N2MwIC44MjItLjY2NiAxLjQ4OC0xLjQ4OCAxLjQ4OGgtMy40OTdhMS40ODggMS40ODggMCAwMS0xLjQ4OS0xLjQ4OHYtMy40OTh6IiBmaWxsPSIjMTY1MkYwIi8+PC9zdmc+";
    }
  }
  class c {
    constructor(p) {
      this.items = /* @__PURE__ */ new Map(), this.nextItemKey = 0, this.root = null, this.darkMode = p.darkMode;
    }
    attach(p) {
      this.root = document.createElement("div"), this.root.className = "-cbwsdk-snackbar-root", p.appendChild(this.root), this.render();
    }
    presentItem(p) {
      const v = this.nextItemKey++;
      return this.items.set(v, p), this.render(), () => {
        this.items.delete(v), this.render();
      };
    }
    clear() {
      this.items.clear(), this.render();
    }
    render() {
      this.root && (0, n.render)((0, n.h)(
        "div",
        null,
        (0, n.h)(t.SnackbarContainer, { darkMode: this.darkMode }, Array.from(this.items.entries()).map(([p, v]) => (0, n.h)(t.SnackbarInstance, Object.assign({}, v, { key: p }))))
      ), this.root);
    }
  }
  t.Snackbar = c;
  const u = (d) => (0, n.h)(
    "div",
    { class: (0, r.default)("-cbwsdk-snackbar-container") },
    (0, n.h)("style", null, s.default),
    (0, n.h)("div", { class: "-cbwsdk-snackbar" }, d.children)
  );
  t.SnackbarContainer = u;
  const h = ({ autoExpand: d, message: p, menuItems: v, appSrc: _ }) => {
    const [A, R] = (0, i.useState)(!0), [y, E] = (0, i.useState)(d ?? !1);
    (0, i.useEffect)(() => {
      const O = [
        window.setTimeout(() => {
          R(!1);
        }, 1),
        window.setTimeout(() => {
          E(!0);
        }, 1e4)
      ];
      return () => {
        O.forEach(window.clearTimeout);
      };
    });
    const x = () => {
      E(!y);
    };
    return (0, n.h)(
      "div",
      { class: (0, r.default)("-cbwsdk-snackbar-instance", A && "-cbwsdk-snackbar-instance-hidden", y && "-cbwsdk-snackbar-instance-expanded") },
      (0, n.h)(
        "div",
        { class: "-cbwsdk-snackbar-instance-header", onClick: x },
        (0, n.h)("img", { src: a(_), class: "-cbwsdk-snackbar-instance-header-cblogo" }),
        (0, n.h)("div", { class: "-cbwsdk-snackbar-instance-header-message" }, p),
        (0, n.h)(
          "div",
          { class: "-gear-container" },
          !y && (0, n.h)(
            "svg",
            { width: "24", height: "24", viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
            (0, n.h)("circle", { cx: "12", cy: "12", r: "12", fill: "#F5F7F8" })
          ),
          (0, n.h)("img", { src: o, class: "-gear-icon", title: "Expand" })
        )
      ),
      v && v.length > 0 && (0, n.h)("div", { class: "-cbwsdk-snackbar-instance-menu" }, v.map((O, M) => (0, n.h)(
        "div",
        { class: (0, r.default)("-cbwsdk-snackbar-instance-menu-item", O.isRed && "-cbwsdk-snackbar-instance-menu-item-is-red"), onClick: O.onClick, key: M },
        (0, n.h)(
          "svg",
          { width: O.svgWidth, height: O.svgHeight, viewBox: "0 0 10 11", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
          (0, n.h)("path", { "fill-rule": O.defaultFillRule, "clip-rule": O.defaultClipRule, d: O.path, fill: "#AAAAAA" })
        ),
        (0, n.h)("span", { class: (0, r.default)("-cbwsdk-snackbar-instance-menu-item-info", O.isRed && "-cbwsdk-snackbar-instance-menu-item-info-is-red") }, O.info)
      )))
    );
  };
  t.SnackbarInstance = h;
})(f0);
var ho = {}, Nu = {};
Object.defineProperty(Nu, "__esModule", { value: !0 });
Nu.default = '@namespace svg "http://www.w3.org/2000/svg";.-cbwsdk-css-reset,.-cbwsdk-css-reset *{animation:none;animation-delay:0;animation-direction:normal;animation-duration:0;animation-fill-mode:none;animation-iteration-count:1;animation-name:none;animation-play-state:running;animation-timing-function:ease;backface-visibility:visible;background:0;background-attachment:scroll;background-clip:border-box;background-color:rgba(0,0,0,0);background-image:none;background-origin:padding-box;background-position:0 0;background-position-x:0;background-position-y:0;background-repeat:repeat;background-size:auto auto;border:0;border-style:none;border-width:medium;border-color:inherit;border-bottom:0;border-bottom-color:inherit;border-bottom-left-radius:0;border-bottom-right-radius:0;border-bottom-style:none;border-bottom-width:medium;border-collapse:separate;border-image:none;border-left:0;border-left-color:inherit;border-left-style:none;border-left-width:medium;border-radius:0;border-right:0;border-right-color:inherit;border-right-style:none;border-right-width:medium;border-spacing:0;border-top:0;border-top-color:inherit;border-top-left-radius:0;border-top-right-radius:0;border-top-style:none;border-top-width:medium;box-shadow:none;box-sizing:border-box;caption-side:top;clear:none;clip:auto;color:inherit;columns:auto;column-count:auto;column-fill:balance;column-gap:normal;column-rule:medium none currentColor;column-rule-color:currentColor;column-rule-style:none;column-rule-width:none;column-span:1;column-width:auto;counter-increment:none;counter-reset:none;direction:ltr;empty-cells:show;float:none;font:normal;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI","Helvetica Neue",Arial,sans-serif;font-size:medium;font-style:normal;font-variant:normal;font-weight:normal;height:auto;hyphens:none;letter-spacing:normal;line-height:normal;list-style:none;list-style-image:none;list-style-position:outside;list-style-type:disc;margin:0;margin-bottom:0;margin-left:0;margin-right:0;margin-top:0;opacity:1;orphans:0;outline:0;outline-color:invert;outline-style:none;outline-width:medium;overflow:visible;overflow-x:visible;overflow-y:visible;padding:0;padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;page-break-after:auto;page-break-before:auto;page-break-inside:auto;perspective:none;perspective-origin:50% 50%;pointer-events:auto;position:static;quotes:"\\201C" "\\201D" "\\2018" "\\2019";tab-size:8;table-layout:auto;text-align:inherit;text-align-last:auto;text-decoration:none;text-decoration-color:inherit;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-shadow:none;text-transform:none;transform:none;transform-style:flat;transition:none;transition-delay:0s;transition-duration:0s;transition-property:none;transition-timing-function:ease;unicode-bidi:normal;vertical-align:baseline;visibility:visible;white-space:normal;widows:0;word-spacing:normal;z-index:auto}.-cbwsdk-css-reset strong{font-weight:bold}.-cbwsdk-css-reset *{box-sizing:border-box;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI","Helvetica Neue",Arial,sans-serif;line-height:1}.-cbwsdk-css-reset [class*=container]{margin:0;padding:0}.-cbwsdk-css-reset style{display:none}';
var d5 = G && G.__importDefault || function(t) {
  return t && t.__esModule ? t : { default: t };
};
Object.defineProperty(ho, "__esModule", { value: !0 });
ho.injectCssReset = void 0;
const p5 = d5(Nu);
function g5() {
  const t = document.createElement("style");
  t.type = "text/css", t.appendChild(document.createTextNode(p5.default)), document.documentElement.appendChild(t);
}
ho.injectCssReset = g5;
Object.defineProperty(Ys, "__esModule", { value: !0 });
Ys.WalletSDKUI = void 0;
const b5 = Ks, y5 = f0, m5 = ho;
class v5 {
  constructor(e) {
    this.standalone = null, this.attached = !1, this.appSrc = null, this.snackbar = new y5.Snackbar({
      darkMode: e.darkMode
    }), this.linkFlow = new b5.LinkFlow({
      darkMode: e.darkMode,
      version: e.version,
      sessionId: e.session.id,
      sessionSecret: e.session.secret,
      linkAPIUrl: e.linkAPIUrl,
      connected$: e.connected$,
      chainId$: e.chainId$,
      isParentConnection: !1
    });
  }
  attach() {
    if (this.attached)
      throw new Error("Coinbase Wallet SDK UI is already attached");
    const e = document.documentElement, r = document.createElement("div");
    r.className = "-cbwsdk-css-reset", e.appendChild(r), this.linkFlow.attach(r), this.snackbar.attach(r), this.attached = !0, (0, m5.injectCssReset)();
  }
  setConnectDisabled(e) {
    this.linkFlow.setConnectDisabled(e);
  }
  /* istanbul ignore next */
  addEthereumChain(e) {
  }
  /* istanbul ignore next */
  watchAsset(e) {
  }
  /* istanbul ignore next */
  switchEthereumChain(e) {
  }
  requestEthereumAccounts(e) {
    this.linkFlow.open({ onCancel: e.onCancel });
  }
  hideRequestEthereumAccounts() {
    this.linkFlow.close();
  }
  /* istanbul ignore next */
  signEthereumMessage(e) {
  }
  /* istanbul ignore next */
  signEthereumTransaction(e) {
  }
  /* istanbul ignore next */
  submitEthereumTransaction(e) {
  }
  /* istanbul ignore next */
  ethereumAddressFromSignedMessage(e) {
  }
  showConnecting(e) {
    let r;
    return e.isUnlinkedErrorState ? r = {
      autoExpand: !0,
      message: "Connection lost",
      appSrc: this.appSrc,
      menuItems: [
        {
          isRed: !1,
          info: "Reset connection",
          svgWidth: "10",
          svgHeight: "11",
          path: "M5.00008 0.96875C6.73133 0.96875 8.23758 1.94375 9.00008 3.375L10.0001 2.375V5.5H9.53133H7.96883H6.87508L7.80633 4.56875C7.41258 3.3875 6.31258 2.53125 5.00008 2.53125C3.76258 2.53125 2.70633 3.2875 2.25633 4.36875L0.812576 3.76875C1.50008 2.125 3.11258 0.96875 5.00008 0.96875ZM2.19375 6.43125C2.5875 7.6125 3.6875 8.46875 5 8.46875C6.2375 8.46875 7.29375 7.7125 7.74375 6.63125L9.1875 7.23125C8.5 8.875 6.8875 10.0312 5 10.0312C3.26875 10.0312 1.7625 9.05625 1 7.625L0 8.625V5.5H0.46875H2.03125H3.125L2.19375 6.43125Z",
          defaultFillRule: "evenodd",
          defaultClipRule: "evenodd",
          onClick: e.onResetConnection
        }
      ]
    } : r = {
      message: "Confirm on phone",
      appSrc: this.appSrc,
      menuItems: [
        {
          isRed: !0,
          info: "Cancel transaction",
          svgWidth: "11",
          svgHeight: "11",
          path: "M10.3711 1.52346L9.21775 0.370117L5.37109 4.21022L1.52444 0.370117L0.371094 1.52346L4.2112 5.37012L0.371094 9.21677L1.52444 10.3701L5.37109 6.53001L9.21775 10.3701L10.3711 9.21677L6.53099 5.37012L10.3711 1.52346Z",
          defaultFillRule: "inherit",
          defaultClipRule: "inherit",
          onClick: e.onCancel
        },
        {
          isRed: !1,
          info: "Reset connection",
          svgWidth: "10",
          svgHeight: "11",
          path: "M5.00008 0.96875C6.73133 0.96875 8.23758 1.94375 9.00008 3.375L10.0001 2.375V5.5H9.53133H7.96883H6.87508L7.80633 4.56875C7.41258 3.3875 6.31258 2.53125 5.00008 2.53125C3.76258 2.53125 2.70633 3.2875 2.25633 4.36875L0.812576 3.76875C1.50008 2.125 3.11258 0.96875 5.00008 0.96875ZM2.19375 6.43125C2.5875 7.6125 3.6875 8.46875 5 8.46875C6.2375 8.46875 7.29375 7.7125 7.74375 6.63125L9.1875 7.23125C8.5 8.875 6.8875 10.0312 5 10.0312C3.26875 10.0312 1.7625 9.05625 1 7.625L0 8.625V5.5H0.46875H2.03125H3.125L2.19375 6.43125Z",
          defaultFillRule: "evenodd",
          defaultClipRule: "evenodd",
          onClick: e.onResetConnection
        }
      ]
    }, this.snackbar.presentItem(r);
  }
  /* istanbul ignore next */
  setAppSrc(e) {
    this.appSrc = e;
  }
  /* istanbul ignore next */
  reloadUI() {
    document.location.reload();
  }
  /* istanbul ignore next */
  inlineAccountsResponse() {
    return !1;
  }
  /* istanbul ignore next */
  inlineAddEthereumChain(e) {
    return !1;
  }
  /* istanbul ignore next */
  inlineWatchAsset() {
    return !1;
  }
  /* istanbul ignore next */
  inlineSwitchEthereumChain() {
    return !1;
  }
  /* istanbul ignore next */
  setStandalone(e) {
    this.standalone = e;
  }
  /* istanbul ignore next */
  isStandalone() {
    var e;
    return (e = this.standalone) !== null && e !== void 0 ? e : !1;
  }
}
Ys.WalletSDKUI = v5;
var po = {}, go = {};
Object.defineProperty(go, "__esModule", { value: !0 });
var un;
(function(t) {
  t.typeOfFunction = "function", t.boolTrue = !0;
})(un || (un = {}));
function h0(t, e, r) {
  if (!r || typeof r.value !== un.typeOfFunction)
    throw new TypeError("Only methods can be decorated with @bind. <" + e + "> is not a method!");
  return {
    configurable: un.boolTrue,
    get: function() {
      var n = r.value.bind(this);
      return Object.defineProperty(this, e, {
        value: n,
        configurable: un.boolTrue,
        writable: un.boolTrue
      }), n;
    }
  };
}
go.bind = h0;
go.default = h0;
function d0(t) {
  return function(r) {
    return r.lift(new w5(t));
  };
}
var w5 = /* @__PURE__ */ function() {
  function t(e) {
    this.durationSelector = e;
  }
  return t.prototype.call = function(e, r) {
    return r.subscribe(new _5(e, this.durationSelector));
  }, t;
}(), _5 = /* @__PURE__ */ function(t) {
  L(e, t);
  function e(r, n) {
    var i = t.call(this, r) || this;
    return i.durationSelector = n, i.hasValue = !1, i;
  }
  return e.prototype._next = function(r) {
    if (this.value = r, this.hasValue = !0, !this.throttled) {
      var n = void 0;
      try {
        var i = this.durationSelector;
        n = i(r);
      } catch (o) {
        return this.destination.error(o);
      }
      var s = Ne(n, new Oe(this));
      !s || s.closed ? this.clearThrottle() : this.add(this.throttled = s);
    }
  }, e.prototype.clearThrottle = function() {
    var r = this, n = r.value, i = r.hasValue, s = r.throttled;
    s && (this.remove(s), this.throttled = void 0, s.unsubscribe()), i && (this.value = void 0, this.hasValue = !1, this.destination.next(n));
  }, e.prototype.notifyNext = function() {
    this.clearThrottle();
  }, e.prototype.notifyComplete = function() {
    this.clearThrottle();
  }, e;
}(ke);
function E5(t, e) {
  return e === void 0 && (e = it), d0(function() {
    return Kp(t, e);
  });
}
function S5(t) {
  return function(r) {
    return r.lift(new x5(t));
  };
}
var x5 = /* @__PURE__ */ function() {
  function t(e) {
    this.closingNotifier = e;
  }
  return t.prototype.call = function(e, r) {
    return r.subscribe(new C5(e, this.closingNotifier));
  }, t;
}(), C5 = /* @__PURE__ */ function(t) {
  L(e, t);
  function e(r, n) {
    var i = t.call(this, r) || this;
    return i.buffer = [], i.add(Ne(n, new Oe(i))), i;
  }
  return e.prototype._next = function(r) {
    this.buffer.push(r);
  }, e.prototype.notifyNext = function() {
    var r = this.buffer;
    this.buffer = [], this.destination.next(r);
  }, e;
}(ke);
function I5(t, e) {
  return e === void 0 && (e = null), function(n) {
    return n.lift(new R5(t, e));
  };
}
var R5 = /* @__PURE__ */ function() {
  function t(e, r) {
    this.bufferSize = e, this.startBufferEvery = r, !r || e === r ? this.subscriberClass = A5 : this.subscriberClass = T5;
  }
  return t.prototype.call = function(e, r) {
    return r.subscribe(new this.subscriberClass(e, this.bufferSize, this.startBufferEvery));
  }, t;
}(), A5 = /* @__PURE__ */ function(t) {
  L(e, t);
  function e(r, n) {
    var i = t.call(this, r) || this;
    return i.bufferSize = n, i.buffer = [], i;
  }
  return e.prototype._next = function(r) {
    var n = this.buffer;
    n.push(r), n.length == this.bufferSize && (this.destination.next(n), this.buffer = []);
  }, e.prototype._complete = function() {
    var r = this.buffer;
    r.length > 0 && this.destination.next(r), t.prototype._complete.call(this);
  }, e;
}(K), T5 = /* @__PURE__ */ function(t) {
  L(e, t);
  function e(r, n, i) {
    var s = t.call(this, r) || this;
    return s.bufferSize = n, s.startBufferEvery = i, s.buffers = [], s.count = 0, s;
  }
  return e.prototype._next = function(r) {
    var n = this, i = n.bufferSize, s = n.startBufferEvery, o = n.buffers, a = n.count;
    this.count++, a % s === 0 && o.push([]);
    for (var c = o.length; c--; ) {
      var u = o[c];
      u.push(r), u.length === i && (o.splice(c, 1), this.destination.next(u));
    }
  }, e.prototype._complete = function() {
    for (var r = this, n = r.buffers, i = r.destination; n.length > 0; ) {
      var s = n.shift();
      s.length > 0 && i.next(s);
    }
    t.prototype._complete.call(this);
  }, e;
}(K);
function M5(t) {
  var e = arguments.length, r = it;
  lt(arguments[arguments.length - 1]) && (r = arguments[arguments.length - 1], e--);
  var n = null;
  e >= 2 && (n = arguments[1]);
  var i = Number.POSITIVE_INFINITY;
  return e >= 3 && (i = arguments[2]), function(o) {
    return o.lift(new O5(t, n, i, r));
  };
}
var O5 = /* @__PURE__ */ function() {
  function t(e, r, n, i) {
    this.bufferTimeSpan = e, this.bufferCreationInterval = r, this.maxBufferSize = n, this.scheduler = i;
  }
  return t.prototype.call = function(e, r) {
    return r.subscribe(new N5(e, this.bufferTimeSpan, this.bufferCreationInterval, this.maxBufferSize, this.scheduler));
  }, t;
}(), k5 = /* @__PURE__ */ function() {
  function t() {
    this.buffer = [];
  }
  return t;
}(), N5 = /* @__PURE__ */ function(t) {
  L(e, t);
  function e(r, n, i, s, o) {
    var a = t.call(this, r) || this;
    a.bufferTimeSpan = n, a.bufferCreationInterval = i, a.maxBufferSize = s, a.scheduler = o, a.contexts = [];
    var c = a.openContext();
    if (a.timespanOnly = i == null || i < 0, a.timespanOnly) {
      var u = { subscriber: a, context: c, bufferTimeSpan: n };
      a.add(c.closeAction = o.schedule(Qf, n, u));
    } else {
      var h = { subscriber: a, context: c }, d = { bufferTimeSpan: n, bufferCreationInterval: i, subscriber: a, scheduler: o };
      a.add(c.closeAction = o.schedule(p0, n, h)), a.add(o.schedule(L5, i, d));
    }
    return a;
  }
  return e.prototype._next = function(r) {
    for (var n = this.contexts, i = n.length, s, o = 0; o < i; o++) {
      var a = n[o], c = a.buffer;
      c.push(r), c.length == this.maxBufferSize && (s = a);
    }
    s && this.onBufferFull(s);
  }, e.prototype._error = function(r) {
    this.contexts.length = 0, t.prototype._error.call(this, r);
  }, e.prototype._complete = function() {
    for (var r = this, n = r.contexts, i = r.destination; n.length > 0; ) {
      var s = n.shift();
      i.next(s.buffer);
    }
    t.prototype._complete.call(this);
  }, e.prototype._unsubscribe = function() {
    this.contexts = null;
  }, e.prototype.onBufferFull = function(r) {
    this.closeContext(r);
    var n = r.closeAction;
    if (n.unsubscribe(), this.remove(n), !this.closed && this.timespanOnly) {
      r = this.openContext();
      var i = this.bufferTimeSpan, s = { subscriber: this, context: r, bufferTimeSpan: i };
      this.add(r.closeAction = this.scheduler.schedule(Qf, i, s));
    }
  }, e.prototype.openContext = function() {
    var r = new k5();
    return this.contexts.push(r), r;
  }, e.prototype.closeContext = function(r) {
    this.destination.next(r.buffer);
    var n = this.contexts, i = n ? n.indexOf(r) : -1;
    i >= 0 && n.splice(n.indexOf(r), 1);
  }, e;
}(K);
function Qf(t) {
  var e = t.subscriber, r = t.context;
  r && e.closeContext(r), e.closed || (t.context = e.openContext(), t.context.closeAction = this.schedule(t, t.bufferTimeSpan));
}
function L5(t) {
  var e = t.bufferCreationInterval, r = t.bufferTimeSpan, n = t.subscriber, i = t.scheduler, s = n.openContext(), o = this;
  n.closed || (n.add(s.closeAction = i.schedule(p0, r, { subscriber: n, context: s })), o.schedule(t, e));
}
function p0(t) {
  var e = t.subscriber, r = t.context;
  e.closeContext(r);
}
function P5(t, e) {
  return function(n) {
    return n.lift(new B5(t, e));
  };
}
var B5 = /* @__PURE__ */ function() {
  function t(e, r) {
    this.openings = e, this.closingSelector = r;
  }
  return t.prototype.call = function(e, r) {
    return r.subscribe(new $5(e, this.openings, this.closingSelector));
  }, t;
}(), $5 = /* @__PURE__ */ function(t) {
  L(e, t);
  function e(r, n, i) {
    var s = t.call(this, r) || this;
    return s.closingSelector = i, s.contexts = [], s.add(ir(s, n)), s;
  }
  return e.prototype._next = function(r) {
    for (var n = this.contexts, i = n.length, s = 0; s < i; s++)
      n[s].buffer.push(r);
  }, e.prototype._error = function(r) {
    for (var n = this.contexts; n.length > 0; ) {
      var i = n.shift();
      i.subscription.unsubscribe(), i.buffer = null, i.subscription = null;
    }
    this.contexts = null, t.prototype._error.call(this, r);
  }, e.prototype._complete = function() {
    for (var r = this.contexts; r.length > 0; ) {
      var n = r.shift();
      this.destination.next(n.buffer), n.subscription.unsubscribe(), n.buffer = null, n.subscription = null;
    }
    this.contexts = null, t.prototype._complete.call(this);
  }, e.prototype.notifyNext = function(r, n) {
    r ? this.closeBuffer(r) : this.openBuffer(n);
  }, e.prototype.notifyComplete = function(r) {
    this.closeBuffer(r.context);
  }, e.prototype.openBuffer = function(r) {
    try {
      var n = this.closingSelector, i = n.call(this, r);
      i && this.trySubscribe(i);
    } catch (s) {
      this._error(s);
    }
  }, e.prototype.closeBuffer = function(r) {
    var n = this.contexts;
    if (n && r) {
      var i = r.buffer, s = r.subscription;
      this.destination.next(i), n.splice(n.indexOf(r), 1), this.remove(s), s.unsubscribe();
    }
  }, e.prototype.trySubscribe = function(r) {
    var n = this.contexts, i = [], s = new Me(), o = { buffer: i, subscription: s };
    n.push(o);
    var a = ir(this, r, o);
    !a || a.closed ? this.closeBuffer(o) : (a.context = o, this.add(a), s.add(a));
  }, e;
}(Zr);
function D5(t) {
  return function(e) {
    return e.lift(new F5(t));
  };
}
var F5 = /* @__PURE__ */ function() {
  function t(e) {
    this.closingSelector = e;
  }
  return t.prototype.call = function(e, r) {
    return r.subscribe(new j5(e, this.closingSelector));
  }, t;
}(), j5 = /* @__PURE__ */ function(t) {
  L(e, t);
  function e(r, n) {
    var i = t.call(this, r) || this;
    return i.closingSelector = n, i.subscribing = !1, i.openBuffer(), i;
  }
  return e.prototype._next = function(r) {
    this.buffer.push(r);
  }, e.prototype._complete = function() {
    var r = this.buffer;
    r && this.destination.next(r), t.prototype._complete.call(this);
  }, e.prototype._unsubscribe = function() {
    this.buffer = void 0, this.subscribing = !1;
  }, e.prototype.notifyNext = function() {
    this.openBuffer();
  }, e.prototype.notifyComplete = function() {
    this.subscribing ? this.complete() : this.openBuffer();
  }, e.prototype.openBuffer = function() {
    var r = this.closingSubscription;
    r && (this.remove(r), r.unsubscribe());
    var n = this.buffer;
    this.buffer && this.destination.next(n), this.buffer = [];
    var i;
    try {
      var s = this.closingSelector;
      i = s();
    } catch (o) {
      return this.error(o);
    }
    r = new Me(), this.closingSubscription = r, this.add(r), this.subscribing = !0, r.add(Ne(i, new Oe(this))), this.subscribing = !1;
  }, e;
}(ke);
function U5(t) {
  return function(r) {
    var n = new W5(t), i = r.lift(n);
    return n.caught = i;
  };
}
var W5 = /* @__PURE__ */ function() {
  function t(e) {
    this.selector = e;
  }
  return t.prototype.call = function(e, r) {
    return r.subscribe(new V5(e, this.selector, this.caught));
  }, t;
}(), V5 = /* @__PURE__ */ function(t) {
  L(e, t);
  function e(r, n, i) {
    var s = t.call(this, r) || this;
    return s.selector = n, s.caught = i, s;
  }
  return e.prototype.error = function(r) {
    if (!this.isStopped) {
      var n = void 0;
      try {
        n = this.selector(r, this.caught);
      } catch (o) {
        t.prototype.error.call(this, o);
        return;
      }
      this._unsubscribeAndRecycle();
      var i = new Oe(this);
      this.add(i);
      var s = Ne(n, i);
      s !== i && this.add(s);
    }
  }, e;
}(ke);
function H5(t) {
  return function(e) {
    return e.lift(new _u(t));
  };
}
function z5() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t[e] = arguments[e];
  var r = null;
  return typeof t[t.length - 1] == "function" && (r = t.pop()), t.length === 1 && nt(t[0]) && (t = t[0].slice()), function(n) {
    return n.lift.call(sr([n].concat(t)), new _u(r));
  };
}
function q5() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t[e] = arguments[e];
  return function(r) {
    return r.lift.call(li.apply(void 0, [r].concat(t)));
  };
}
function g0(t, e) {
  return jr(t, e, 1);
}
function G5(t, e) {
  return g0(function() {
    return t;
  }, e);
}
function J5(t) {
  return function(e) {
    return e.lift(new Q5(t, e));
  };
}
var Q5 = /* @__PURE__ */ function() {
  function t(e, r) {
    this.predicate = e, this.source = r;
  }
  return t.prototype.call = function(e, r) {
    return r.subscribe(new Z5(e, this.predicate, this.source));
  }, t;
}(), Z5 = /* @__PURE__ */ function(t) {
  L(e, t);
  function e(r, n, i) {
    var s = t.call(this, r) || this;
    return s.predicate = n, s.source = i, s.count = 0, s.index = 0, s;
  }
  return e.prototype._next = function(r) {
    this.predicate ? this._tryPredicate(r) : this.count++;
  }, e.prototype._tryPredicate = function(r) {
    var n;
    try {
      n = this.predicate(r, this.index++, this.source);
    } catch (i) {
      this.destination.error(i);
      return;
    }
    n && this.count++;
  }, e.prototype._complete = function() {
    this.destination.next(this.count), this.destination.complete();
  }, e;
}(K);
function Y5(t) {
  return function(e) {
    return e.lift(new K5(t));
  };
}
var K5 = /* @__PURE__ */ function() {
  function t(e) {
    this.durationSelector = e;
  }
  return t.prototype.call = function(e, r) {
    return r.subscribe(new X5(e, this.durationSelector));
  }, t;
}(), X5 = /* @__PURE__ */ function(t) {
  L(e, t);
  function e(r, n) {
    var i = t.call(this, r) || this;
    return i.durationSelector = n, i.hasValue = !1, i;
  }
  return e.prototype._next = function(r) {
    try {
      var n = this.durationSelector.call(this, r);
      n && this._tryNext(r, n);
    } catch (i) {
      this.destination.error(i);
    }
  }, e.prototype._complete = function() {
    this.emitValue(), this.destination.complete();
  }, e.prototype._tryNext = function(r, n) {
    var i = this.durationSubscription;
    this.value = r, this.hasValue = !0, i && (i.unsubscribe(), this.remove(i)), i = Ne(n, new Oe(this)), i && !i.closed && this.add(this.durationSubscription = i);
  }, e.prototype.notifyNext = function() {
    this.emitValue();
  }, e.prototype.notifyComplete = function() {
    this.emitValue();
  }, e.prototype.emitValue = function() {
    if (this.hasValue) {
      var r = this.value, n = this.durationSubscription;
      n && (this.durationSubscription = void 0, n.unsubscribe(), this.remove(n)), this.value = void 0, this.hasValue = !1, t.prototype._next.call(this, r);
    }
  }, e;
}(ke);
function ex(t, e) {
  return e === void 0 && (e = it), function(r) {
    return r.lift(new tx(t, e));
  };
}
var tx = /* @__PURE__ */ function() {
  function t(e, r) {
    this.dueTime = e, this.scheduler = r;
  }
  return t.prototype.call = function(e, r) {
    return r.subscribe(new rx(e, this.dueTime, this.scheduler));
  }, t;
}(), rx = /* @__PURE__ */ function(t) {
  L(e, t);
  function e(r, n, i) {
    var s = t.call(this, r) || this;
    return s.dueTime = n, s.scheduler = i, s.debouncedSubscription = null, s.lastValue = null, s.hasValue = !1, s;
  }
  return e.prototype._next = function(r) {
    this.clearDebounce(), this.lastValue = r, this.hasValue = !0, this.add(this.debouncedSubscription = this.scheduler.schedule(nx, this.dueTime, this));
  }, e.prototype._complete = function() {
    this.debouncedNext(), this.destination.complete();
  }, e.prototype.debouncedNext = function() {
    if (this.clearDebounce(), this.hasValue) {
      var r = this.lastValue;
      this.lastValue = null, this.hasValue = !1, this.destination.next(r);
    }
  }, e.prototype.clearDebounce = function() {
    var r = this.debouncedSubscription;
    r !== null && (this.remove(r), r.unsubscribe(), this.debouncedSubscription = null);
  }, e;
}(K);
function nx(t) {
  t.debouncedNext();
}
function Bi(t) {
  return t === void 0 && (t = null), function(e) {
    return e.lift(new ix(t));
  };
}
var ix = /* @__PURE__ */ function() {
  function t(e) {
    this.defaultValue = e;
  }
  return t.prototype.call = function(e, r) {
    return r.subscribe(new sx(e, this.defaultValue));
  }, t;
}(), sx = /* @__PURE__ */ function(t) {
  L(e, t);
  function e(r, n) {
    var i = t.call(this, r) || this;
    return i.defaultValue = n, i.isEmpty = !0, i;
  }
  return e.prototype._next = function(r) {
    this.isEmpty = !1, this.destination.next(r);
  }, e.prototype._complete = function() {
    this.isEmpty && this.destination.next(this.defaultValue), this.destination.complete();
  }, e;
}(K);
function b0(t) {
  return t instanceof Date && !isNaN(+t);
}
function ox(t, e) {
  e === void 0 && (e = it);
  var r = b0(t), n = r ? +t - e.now() : Math.abs(t);
  return function(i) {
    return i.lift(new ax(n, e));
  };
}
var ax = /* @__PURE__ */ function() {
  function t(e, r) {
    this.delay = e, this.scheduler = r;
  }
  return t.prototype.call = function(e, r) {
    return r.subscribe(new cx(e, this.delay, this.scheduler));
  }, t;
}(), cx = /* @__PURE__ */ function(t) {
  L(e, t);
  function e(r, n, i) {
    var s = t.call(this, r) || this;
    return s.delay = n, s.scheduler = i, s.queue = [], s.active = !1, s.errored = !1, s;
  }
  return e.dispatch = function(r) {
    for (var n = r.source, i = n.queue, s = r.scheduler, o = r.destination; i.length > 0 && i[0].time - s.now() <= 0; )
      i.shift().notification.observe(o);
    if (i.length > 0) {
      var a = Math.max(0, i[0].time - s.now());
      this.schedule(r, a);
    } else
      this.unsubscribe(), n.active = !1;
  }, e.prototype._schedule = function(r) {
    this.active = !0;
    var n = this.destination;
    n.add(r.schedule(e.dispatch, this.delay, {
      source: this,
      destination: this.destination,
      scheduler: r
    }));
  }, e.prototype.scheduleNotification = function(r) {
    if (this.errored !== !0) {
      var n = this.scheduler, i = new ux(n.now() + this.delay, r);
      this.queue.push(i), this.active === !1 && this._schedule(n);
    }
  }, e.prototype._next = function(r) {
    this.scheduleNotification(rr.createNext(r));
  }, e.prototype._error = function(r) {
    this.errored = !0, this.queue = [], this.destination.error(r), this.unsubscribe();
  }, e.prototype._complete = function() {
    this.scheduleNotification(rr.createComplete()), this.unsubscribe();
  }, e;
}(K), ux = /* @__PURE__ */ function() {
  function t(e, r) {
    this.time = e, this.notification = r;
  }
  return t;
}();
function lx(t, e) {
  return e ? function(r) {
    return new hx(r, e).lift(new Zf(t));
  } : function(r) {
    return r.lift(new Zf(t));
  };
}
var Zf = /* @__PURE__ */ function() {
  function t(e) {
    this.delayDurationSelector = e;
  }
  return t.prototype.call = function(e, r) {
    return r.subscribe(new fx(e, this.delayDurationSelector));
  }, t;
}(), fx = /* @__PURE__ */ function(t) {
  L(e, t);
  function e(r, n) {
    var i = t.call(this, r) || this;
    return i.delayDurationSelector = n, i.completed = !1, i.delayNotifierSubscriptions = [], i.index = 0, i;
  }
  return e.prototype.notifyNext = function(r, n, i, s, o) {
    this.destination.next(r), this.removeSubscription(o), this.tryComplete();
  }, e.prototype.notifyError = function(r, n) {
    this._error(r);
  }, e.prototype.notifyComplete = function(r) {
    var n = this.removeSubscription(r);
    n && this.destination.next(n), this.tryComplete();
  }, e.prototype._next = function(r) {
    var n = this.index++;
    try {
      var i = this.delayDurationSelector(r, n);
      i && this.tryDelay(i, r);
    } catch (s) {
      this.destination.error(s);
    }
  }, e.prototype._complete = function() {
    this.completed = !0, this.tryComplete(), this.unsubscribe();
  }, e.prototype.removeSubscription = function(r) {
    r.unsubscribe();
    var n = this.delayNotifierSubscriptions.indexOf(r);
    return n !== -1 && this.delayNotifierSubscriptions.splice(n, 1), r.outerValue;
  }, e.prototype.tryDelay = function(r, n) {
    var i = ir(this, r, n);
    if (i && !i.closed) {
      var s = this.destination;
      s.add(i), this.delayNotifierSubscriptions.push(i);
    }
  }, e.prototype.tryComplete = function() {
    this.completed && this.delayNotifierSubscriptions.length === 0 && this.destination.complete();
  }, e;
}(Zr), hx = /* @__PURE__ */ function(t) {
  L(e, t);
  function e(r, n) {
    var i = t.call(this) || this;
    return i.source = r, i.subscriptionDelay = n, i;
  }
  return e.prototype._subscribe = function(r) {
    this.subscriptionDelay.subscribe(new dx(r, this.source));
  }, e;
}(ue), dx = /* @__PURE__ */ function(t) {
  L(e, t);
  function e(r, n) {
    var i = t.call(this) || this;
    return i.parent = r, i.source = n, i.sourceSubscribed = !1, i;
  }
  return e.prototype._next = function(r) {
    this.subscribeToSource();
  }, e.prototype._error = function(r) {
    this.unsubscribe(), this.parent.error(r);
  }, e.prototype._complete = function() {
    this.unsubscribe(), this.subscribeToSource();
  }, e.prototype.subscribeToSource = function() {
    this.sourceSubscribed || (this.sourceSubscribed = !0, this.unsubscribe(), this.source.subscribe(this.parent));
  }, e;
}(K);
function px() {
  return function(e) {
    return e.lift(new gx());
  };
}
var gx = /* @__PURE__ */ function() {
  function t() {
  }
  return t.prototype.call = function(e, r) {
    return r.subscribe(new bx(e));
  }, t;
}(), bx = /* @__PURE__ */ function(t) {
  L(e, t);
  function e(r) {
    return t.call(this, r) || this;
  }
  return e.prototype._next = function(r) {
    r.observe(this.destination);
  }, e;
}(K);
function yx(t, e) {
  return function(r) {
    return r.lift(new mx(t, e));
  };
}
var mx = /* @__PURE__ */ function() {
  function t(e, r) {
    this.keySelector = e, this.flushes = r;
  }
  return t.prototype.call = function(e, r) {
    return r.subscribe(new vx(e, this.keySelector, this.flushes));
  }, t;
}(), vx = /* @__PURE__ */ function(t) {
  L(e, t);
  function e(r, n, i) {
    var s = t.call(this, r) || this;
    return s.keySelector = n, s.values = /* @__PURE__ */ new Set(), i && s.add(Ne(i, new Oe(s))), s;
  }
  return e.prototype.notifyNext = function() {
    this.values.clear();
  }, e.prototype.notifyError = function(r) {
    this._error(r);
  }, e.prototype._next = function(r) {
    this.keySelector ? this._useKeySelector(r) : this._finalizeNext(r, r);
  }, e.prototype._useKeySelector = function(r) {
    var n, i = this.destination;
    try {
      n = this.keySelector(r);
    } catch (s) {
      i.error(s);
      return;
    }
    this._finalizeNext(n, r);
  }, e.prototype._finalizeNext = function(r, n) {
    var i = this.values;
    i.has(r) || (i.add(r), this.destination.next(n));
  }, e;
}(ke);
function y0(t, e) {
  return function(r) {
    return r.lift(new wx(t, e));
  };
}
var wx = /* @__PURE__ */ function() {
  function t(e, r) {
    this.compare = e, this.keySelector = r;
  }
  return t.prototype.call = function(e, r) {
    return r.subscribe(new _x(e, this.compare, this.keySelector));
  }, t;
}(), _x = /* @__PURE__ */ function(t) {
  L(e, t);
  function e(r, n, i) {
    var s = t.call(this, r) || this;
    return s.keySelector = i, s.hasKey = !1, typeof n == "function" && (s.compare = n), s;
  }
  return e.prototype.compare = function(r, n) {
    return r === n;
  }, e.prototype._next = function(r) {
    var n;
    try {
      var i = this.keySelector;
      n = i ? i(r) : r;
    } catch (a) {
      return this.destination.error(a);
    }
    var s = !1;
    if (this.hasKey)
      try {
        var o = this.compare;
        s = o(this.key, n);
      } catch (a) {
        return this.destination.error(a);
      }
    else
      this.hasKey = !0;
    s || (this.key = n, this.destination.next(r));
  }, e;
}(K);
function Ex(t, e) {
  return y0(function(r, n) {
    return e ? e(r[t], n[t]) : r[t] === n[t];
  });
}
function bo(t) {
  return t === void 0 && (t = Cx), function(e) {
    return e.lift(new Sx(t));
  };
}
var Sx = /* @__PURE__ */ function() {
  function t(e) {
    this.errorFactory = e;
  }
  return t.prototype.call = function(e, r) {
    return r.subscribe(new xx(e, this.errorFactory));
  }, t;
}(), xx = /* @__PURE__ */ function(t) {
  L(e, t);
  function e(r, n) {
    var i = t.call(this, r) || this;
    return i.errorFactory = n, i.hasValue = !1, i;
  }
  return e.prototype._next = function(r) {
    this.hasValue = !0, this.destination.next(r);
  }, e.prototype._complete = function() {
    if (this.hasValue)
      return this.destination.complete();
    var r = void 0;
    try {
      r = this.errorFactory();
    } catch (n) {
      r = n;
    }
    this.destination.error(r);
  }, e;
}(K);
function Cx() {
  return new Li();
}
function Lu(t) {
  return function(e) {
    return t === 0 ? Un() : e.lift(new Ix(t));
  };
}
var Ix = /* @__PURE__ */ function() {
  function t(e) {
    if (this.total = e, this.total < 0)
      throw new Rn();
  }
  return t.prototype.call = function(e, r) {
    return r.subscribe(new Rx(e, this.total));
  }, t;
}(), Rx = /* @__PURE__ */ function(t) {
  L(e, t);
  function e(r, n) {
    var i = t.call(this, r) || this;
    return i.total = n, i.count = 0, i;
  }
  return e.prototype._next = function(r) {
    var n = this.total, i = ++this.count;
    i <= n && (this.destination.next(r), i === n && (this.destination.complete(), this.unsubscribe()));
  }, e;
}(K);
function Ax(t, e) {
  if (t < 0)
    throw new Rn();
  var r = arguments.length >= 2;
  return function(n) {
    return n.pipe(Er(function(i, s) {
      return s === t;
    }), Lu(1), r ? Bi(e) : bo(function() {
      return new Rn();
    }));
  };
}
function Tx() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t[e] = arguments[e];
  return function(r) {
    return li(r, Xs.apply(void 0, t));
  };
}
function Mx(t, e) {
  return function(r) {
    return r.lift(new Ox(t, e, r));
  };
}
var Ox = /* @__PURE__ */ function() {
  function t(e, r, n) {
    this.predicate = e, this.thisArg = r, this.source = n;
  }
  return t.prototype.call = function(e, r) {
    return r.subscribe(new kx(e, this.predicate, this.thisArg, this.source));
  }, t;
}(), kx = /* @__PURE__ */ function(t) {
  L(e, t);
  function e(r, n, i, s) {
    var o = t.call(this, r) || this;
    return o.predicate = n, o.thisArg = i, o.source = s, o.index = 0, o.thisArg = i || o, o;
  }
  return e.prototype.notifyComplete = function(r) {
    this.destination.next(r), this.destination.complete();
  }, e.prototype._next = function(r) {
    var n = !1;
    try {
      n = this.predicate.call(this.thisArg, r, this.index++, this.source);
    } catch (i) {
      this.destination.error(i);
      return;
    }
    n || this.notifyComplete(!1);
  }, e.prototype._complete = function() {
    this.notifyComplete(!0);
  }, e;
}(K);
function Nx() {
  return function(t) {
    return t.lift(new Lx());
  };
}
var Lx = /* @__PURE__ */ function() {
  function t() {
  }
  return t.prototype.call = function(e, r) {
    return r.subscribe(new Px(e));
  }, t;
}(), Px = /* @__PURE__ */ function(t) {
  L(e, t);
  function e(r) {
    var n = t.call(this, r) || this;
    return n.hasCompleted = !1, n.hasSubscription = !1, n;
  }
  return e.prototype._next = function(r) {
    this.hasSubscription || (this.hasSubscription = !0, this.add(Ne(r, new Oe(this))));
  }, e.prototype._complete = function() {
    this.hasCompleted = !0, this.hasSubscription || this.destination.complete();
  }, e.prototype.notifyComplete = function() {
    this.hasSubscription = !1, this.hasCompleted && this.destination.complete();
  }, e;
}(ke);
function m0(t, e) {
  return e ? function(r) {
    return r.pipe(m0(function(n, i) {
      return sr(t(n, i)).pipe(St(function(s, o) {
        return e(n, s, i, o);
      }));
    }));
  } : function(r) {
    return r.lift(new Bx(t));
  };
}
var Bx = /* @__PURE__ */ function() {
  function t(e) {
    this.project = e;
  }
  return t.prototype.call = function(e, r) {
    return r.subscribe(new $x(e, this.project));
  }, t;
}(), $x = /* @__PURE__ */ function(t) {
  L(e, t);
  function e(r, n) {
    var i = t.call(this, r) || this;
    return i.project = n, i.hasSubscription = !1, i.hasCompleted = !1, i.index = 0, i;
  }
  return e.prototype._next = function(r) {
    this.hasSubscription || this.tryNext(r);
  }, e.prototype.tryNext = function(r) {
    var n, i = this.index++;
    try {
      n = this.project(r, i);
    } catch (s) {
      this.destination.error(s);
      return;
    }
    this.hasSubscription = !0, this._innerSub(n);
  }, e.prototype._innerSub = function(r) {
    var n = new Oe(this), i = this.destination;
    i.add(n);
    var s = Ne(r, n);
    s !== n && i.add(s);
  }, e.prototype._complete = function() {
    this.hasCompleted = !0, this.hasSubscription || this.destination.complete(), this.unsubscribe();
  }, e.prototype.notifyNext = function(r) {
    this.destination.next(r);
  }, e.prototype.notifyError = function(r) {
    this.destination.error(r);
  }, e.prototype.notifyComplete = function() {
    this.hasSubscription = !1, this.hasCompleted && this.destination.complete();
  }, e;
}(ke);
function Dx(t, e, r) {
  return e === void 0 && (e = Number.POSITIVE_INFINITY), e = (e || 0) < 1 ? Number.POSITIVE_INFINITY : e, function(n) {
    return n.lift(new Fx(t, e, r));
  };
}
var Fx = /* @__PURE__ */ function() {
  function t(e, r, n) {
    this.project = e, this.concurrent = r, this.scheduler = n;
  }
  return t.prototype.call = function(e, r) {
    return r.subscribe(new jx(e, this.project, this.concurrent, this.scheduler));
  }, t;
}(), jx = /* @__PURE__ */ function(t) {
  L(e, t);
  function e(r, n, i, s) {
    var o = t.call(this, r) || this;
    return o.project = n, o.concurrent = i, o.scheduler = s, o.index = 0, o.active = 0, o.hasCompleted = !1, i < Number.POSITIVE_INFINITY && (o.buffer = []), o;
  }
  return e.dispatch = function(r) {
    var n = r.subscriber, i = r.result, s = r.value, o = r.index;
    n.subscribeToProjection(i, s, o);
  }, e.prototype._next = function(r) {
    var n = this.destination;
    if (n.closed) {
      this._complete();
      return;
    }
    var i = this.index++;
    if (this.active < this.concurrent) {
      n.next(r);
      try {
        var s = this.project, o = s(r, i);
        if (!this.scheduler)
          this.subscribeToProjection(o, r, i);
        else {
          var a = { subscriber: this, result: o, value: r, index: i }, c = this.destination;
          c.add(this.scheduler.schedule(e.dispatch, 0, a));
        }
      } catch (u) {
        n.error(u);
      }
    } else
      this.buffer.push(r);
  }, e.prototype.subscribeToProjection = function(r, n, i) {
    this.active++;
    var s = this.destination;
    s.add(Ne(r, new Oe(this)));
  }, e.prototype._complete = function() {
    this.hasCompleted = !0, this.hasCompleted && this.active === 0 && this.destination.complete(), this.unsubscribe();
  }, e.prototype.notifyNext = function(r) {
    this._next(r);
  }, e.prototype.notifyComplete = function() {
    var r = this.buffer;
    this.active--, r && r.length > 0 && this._next(r.shift()), this.hasCompleted && this.active === 0 && this.destination.complete();
  }, e;
}(ke);
function Ux(t) {
  return function(e) {
    return e.lift(new Wx(t));
  };
}
var Wx = /* @__PURE__ */ function() {
  function t(e) {
    this.callback = e;
  }
  return t.prototype.call = function(e, r) {
    return r.subscribe(new Vx(e, this.callback));
  }, t;
}(), Vx = /* @__PURE__ */ function(t) {
  L(e, t);
  function e(r, n) {
    var i = t.call(this, r) || this;
    return i.add(new Me(n)), i;
  }
  return e;
}(K);
function Hx(t, e) {
  if (typeof t != "function")
    throw new TypeError("predicate is not a function");
  return function(r) {
    return r.lift(new v0(t, r, !1, e));
  };
}
var v0 = /* @__PURE__ */ function() {
  function t(e, r, n, i) {
    this.predicate = e, this.source = r, this.yieldIndex = n, this.thisArg = i;
  }
  return t.prototype.call = function(e, r) {
    return r.subscribe(new zx(e, this.predicate, this.source, this.yieldIndex, this.thisArg));
  }, t;
}(), zx = /* @__PURE__ */ function(t) {
  L(e, t);
  function e(r, n, i, s, o) {
    var a = t.call(this, r) || this;
    return a.predicate = n, a.source = i, a.yieldIndex = s, a.thisArg = o, a.index = 0, a;
  }
  return e.prototype.notifyComplete = function(r) {
    var n = this.destination;
    n.next(r), n.complete(), this.unsubscribe();
  }, e.prototype._next = function(r) {
    var n = this, i = n.predicate, s = n.thisArg, o = this.index++;
    try {
      var a = i.call(s || this, r, o, this.source);
      a && this.notifyComplete(this.yieldIndex ? o : r);
    } catch (c) {
      this.destination.error(c);
    }
  }, e.prototype._complete = function() {
    this.notifyComplete(this.yieldIndex ? -1 : void 0);
  }, e;
}(K);
function qx(t, e) {
  return function(r) {
    return r.lift(new v0(t, r, !0, e));
  };
}
function Gx(t, e) {
  var r = arguments.length >= 2;
  return function(n) {
    return n.pipe(t ? Er(function(i, s) {
      return t(i, s, n);
    }) : wr, Lu(1), r ? Bi(e) : bo(function() {
      return new Li();
    }));
  };
}
function Jx() {
  return function(e) {
    return e.lift(new Qx());
  };
}
var Qx = /* @__PURE__ */ function() {
  function t() {
  }
  return t.prototype.call = function(e, r) {
    return r.subscribe(new Zx(e));
  }, t;
}(), Zx = /* @__PURE__ */ function(t) {
  L(e, t);
  function e() {
    return t !== null && t.apply(this, arguments) || this;
  }
  return e.prototype._next = function(r) {
  }, e;
}(K);
function Yx() {
  return function(t) {
    return t.lift(new Kx());
  };
}
var Kx = /* @__PURE__ */ function() {
  function t() {
  }
  return t.prototype.call = function(e, r) {
    return r.subscribe(new Xx(e));
  }, t;
}(), Xx = /* @__PURE__ */ function(t) {
  L(e, t);
  function e(r) {
    return t.call(this, r) || this;
  }
  return e.prototype.notifyComplete = function(r) {
    var n = this.destination;
    n.next(r), n.complete();
  }, e.prototype._next = function(r) {
    this.notifyComplete(!1);
  }, e.prototype._complete = function() {
    this.notifyComplete(!0);
  }, e;
}(K);
function gs(t) {
  return function(r) {
    return t === 0 ? Un() : r.lift(new eC(t));
  };
}
var eC = /* @__PURE__ */ function() {
  function t(e) {
    if (this.total = e, this.total < 0)
      throw new Rn();
  }
  return t.prototype.call = function(e, r) {
    return r.subscribe(new tC(e, this.total));
  }, t;
}(), tC = /* @__PURE__ */ function(t) {
  L(e, t);
  function e(r, n) {
    var i = t.call(this, r) || this;
    return i.total = n, i.ring = new Array(), i.count = 0, i;
  }
  return e.prototype._next = function(r) {
    var n = this.ring, i = this.total, s = this.count++;
    if (n.length < i)
      n.push(r);
    else {
      var o = s % i;
      n[o] = r;
    }
  }, e.prototype._complete = function() {
    var r = this.destination, n = this.count;
    if (n > 0)
      for (var i = this.count >= this.total ? this.total : this.count, s = this.ring, o = 0; o < i; o++) {
        var a = n++ % i;
        r.next(s[a]);
      }
    r.complete();
  }, e;
}(K);
function rC(t, e) {
  var r = arguments.length >= 2;
  return function(n) {
    return n.pipe(t ? Er(function(i, s) {
      return t(i, s, n);
    }) : wr, gs(1), r ? Bi(e) : bo(function() {
      return new Li();
    }));
  };
}
function nC(t) {
  return function(e) {
    return e.lift(new iC(t));
  };
}
var iC = /* @__PURE__ */ function() {
  function t(e) {
    this.value = e;
  }
  return t.prototype.call = function(e, r) {
    return r.subscribe(new sC(e, this.value));
  }, t;
}(), sC = /* @__PURE__ */ function(t) {
  L(e, t);
  function e(r, n) {
    var i = t.call(this, r) || this;
    return i.value = n, i;
  }
  return e.prototype._next = function(r) {
    this.destination.next(this.value);
  }, e;
}(K);
function oC() {
  return function(e) {
    return e.lift(new aC());
  };
}
var aC = /* @__PURE__ */ function() {
  function t() {
  }
  return t.prototype.call = function(e, r) {
    return r.subscribe(new cC(e));
  }, t;
}(), cC = /* @__PURE__ */ function(t) {
  L(e, t);
  function e(r) {
    return t.call(this, r) || this;
  }
  return e.prototype._next = function(r) {
    this.destination.next(rr.createNext(r));
  }, e.prototype._error = function(r) {
    var n = this.destination;
    n.next(rr.createError(r)), n.complete();
  }, e.prototype._complete = function() {
    var r = this.destination;
    r.next(rr.createComplete()), r.complete();
  }, e;
}(K);
function bs(t, e) {
  var r = !1;
  return arguments.length >= 2 && (r = !0), function(i) {
    return i.lift(new uC(t, e, r));
  };
}
var uC = /* @__PURE__ */ function() {
  function t(e, r, n) {
    n === void 0 && (n = !1), this.accumulator = e, this.seed = r, this.hasSeed = n;
  }
  return t.prototype.call = function(e, r) {
    return r.subscribe(new lC(e, this.accumulator, this.seed, this.hasSeed));
  }, t;
}(), lC = /* @__PURE__ */ function(t) {
  L(e, t);
  function e(r, n, i, s) {
    var o = t.call(this, r) || this;
    return o.accumulator = n, o._seed = i, o.hasSeed = s, o.index = 0, o;
  }
  return Object.defineProperty(e.prototype, "seed", {
    get: function() {
      return this._seed;
    },
    set: function(r) {
      this.hasSeed = !0, this._seed = r;
    },
    enumerable: !0,
    configurable: !0
  }), e.prototype._next = function(r) {
    if (!this.hasSeed)
      this.seed = r, this.destination.next(r);
    else
      return this._tryNext(r);
  }, e.prototype._tryNext = function(r) {
    var n = this.index++, i;
    try {
      i = this.accumulator(this.seed, r, n);
    } catch (s) {
      this.destination.error(s);
    }
    this.seed = i, this.destination.next(i);
  }, e;
}(K);
function yo(t, e) {
  return arguments.length >= 2 ? function(n) {
    return yc(bs(t, e), gs(1), Bi(e))(n);
  } : function(n) {
    return yc(bs(function(i, s, o) {
      return t(i, s, o + 1);
    }), gs(1))(n);
  };
}
function fC(t) {
  var e = typeof t == "function" ? function(r, n) {
    return t(r, n) > 0 ? r : n;
  } : function(r, n) {
    return r > n ? r : n;
  };
  return yo(e);
}
function hC() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t[e] = arguments[e];
  return function(r) {
    return r.lift.call(Jp.apply(void 0, [r].concat(t)));
  };
}
function dC(t, e, r) {
  return r === void 0 && (r = Number.POSITIVE_INFINITY), typeof e == "function" ? jr(function() {
    return t;
  }, e, r) : (typeof e == "number" && (r = e), jr(function() {
    return t;
  }, r));
}
function pC(t, e, r) {
  return r === void 0 && (r = Number.POSITIVE_INFINITY), function(n) {
    return n.lift(new gC(t, e, r));
  };
}
var gC = /* @__PURE__ */ function() {
  function t(e, r, n) {
    this.accumulator = e, this.seed = r, this.concurrent = n;
  }
  return t.prototype.call = function(e, r) {
    return r.subscribe(new bC(e, this.accumulator, this.seed, this.concurrent));
  }, t;
}(), bC = /* @__PURE__ */ function(t) {
  L(e, t);
  function e(r, n, i, s) {
    var o = t.call(this, r) || this;
    return o.accumulator = n, o.acc = i, o.concurrent = s, o.hasValue = !1, o.hasCompleted = !1, o.buffer = [], o.active = 0, o.index = 0, o;
  }
  return e.prototype._next = function(r) {
    if (this.active < this.concurrent) {
      var n = this.index++, i = this.destination, s = void 0;
      try {
        var o = this.accumulator;
        s = o(this.acc, r, n);
      } catch (a) {
        return i.error(a);
      }
      this.active++, this._innerSub(s);
    } else
      this.buffer.push(r);
  }, e.prototype._innerSub = function(r) {
    var n = new Oe(this), i = this.destination;
    i.add(n);
    var s = Ne(r, n);
    s !== n && i.add(s);
  }, e.prototype._complete = function() {
    this.hasCompleted = !0, this.active === 0 && this.buffer.length === 0 && (this.hasValue === !1 && this.destination.next(this.acc), this.destination.complete()), this.unsubscribe();
  }, e.prototype.notifyNext = function(r) {
    var n = this.destination;
    this.acc = r, this.hasValue = !0, n.next(r);
  }, e.prototype.notifyComplete = function() {
    var r = this.buffer;
    this.active--, r.length > 0 ? this._next(r.shift()) : this.active === 0 && this.hasCompleted && (this.hasValue === !1 && this.destination.next(this.acc), this.destination.complete());
  }, e;
}(ke);
function yC(t) {
  var e = typeof t == "function" ? function(r, n) {
    return t(r, n) < 0 ? r : n;
  } : function(r, n) {
    return r < n ? r : n;
  };
  return yo(e);
}
function Ur(t, e) {
  return function(n) {
    var i;
    if (typeof t == "function" ? i = t : i = function() {
      return t;
    }, typeof e == "function")
      return n.lift(new mC(i, e));
    var s = Object.create(n, o3);
    return s.source = n, s.subjectFactory = i, s;
  };
}
var mC = /* @__PURE__ */ function() {
  function t(e, r) {
    this.subjectFactory = e, this.selector = r;
  }
  return t.prototype.call = function(e, r) {
    var n = this.selector, i = this.subjectFactory(), s = n(i).subscribe(e);
    return s.add(r.subscribe(i)), s;
  }, t;
}();
function vC() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t[e] = arguments[e];
  return t.length === 1 && nt(t[0]) && (t = t[0]), function(r) {
    return r.lift(new wC(t));
  };
}
var wC = /* @__PURE__ */ function() {
  function t(e) {
    this.nextSources = e;
  }
  return t.prototype.call = function(e, r) {
    return r.subscribe(new _C(e, this.nextSources));
  }, t;
}(), _C = /* @__PURE__ */ function(t) {
  L(e, t);
  function e(r, n) {
    var i = t.call(this, r) || this;
    return i.destination = r, i.nextSources = n, i;
  }
  return e.prototype.notifyError = function() {
    this.subscribeToNextSource();
  }, e.prototype.notifyComplete = function() {
    this.subscribeToNextSource();
  }, e.prototype._error = function(r) {
    this.subscribeToNextSource(), this.unsubscribe();
  }, e.prototype._complete = function() {
    this.subscribeToNextSource(), this.unsubscribe();
  }, e.prototype.subscribeToNextSource = function() {
    var r = this.nextSources.shift();
    if (r) {
      var n = new Oe(this), i = this.destination;
      i.add(n);
      var s = Ne(r, n);
      s !== n && i.add(s);
    } else
      this.destination.complete();
  }, e;
}(ke);
function EC() {
  return function(t) {
    return t.lift(new SC());
  };
}
var SC = /* @__PURE__ */ function() {
  function t() {
  }
  return t.prototype.call = function(e, r) {
    return r.subscribe(new xC(e));
  }, t;
}(), xC = /* @__PURE__ */ function(t) {
  L(e, t);
  function e(r) {
    var n = t.call(this, r) || this;
    return n.hasPrev = !1, n;
  }
  return e.prototype._next = function(r) {
    var n;
    this.hasPrev ? n = [this.prev, r] : this.hasPrev = !0, this.prev = r, n && this.destination.next(n);
  }, e;
}(K);
function CC(t, e) {
  return function(r) {
    return [
      Er(t, e)(r),
      Er(Zp(t, e))(r)
    ];
  };
}
function IC() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t[e] = arguments[e];
  var r = t.length;
  if (r === 0)
    throw new Error("list of properties cannot be empty.");
  return function(n) {
    return St(RC(t, r))(n);
  };
}
function RC(t, e) {
  var r = function(n) {
    for (var i = n, s = 0; s < e; s++) {
      var o = i != null ? i[t[s]] : void 0;
      if (o !== void 0)
        i = o;
      else
        return;
    }
    return i;
  };
  return r;
}
function AC(t) {
  return t ? Ur(function() {
    return new He();
  }, t) : Ur(new He());
}
function TC(t) {
  return function(e) {
    return Ur(new Tp(t))(e);
  };
}
function MC() {
  return function(t) {
    return Ur(new Wn())(t);
  };
}
function OC(t, e, r, n) {
  r && typeof r != "function" && (n = r);
  var i = typeof r == "function" ? r : void 0, s = new wu(t, e, n);
  return function(o) {
    return Ur(function() {
      return s;
    }, i)(o);
  };
}
function kC() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t[e] = arguments[e];
  return function(n) {
    return t.length === 1 && nt(t[0]) && (t = t[0]), n.lift.call(Yp.apply(void 0, [n].concat(t)));
  };
}
function NC(t) {
  return t === void 0 && (t = -1), function(e) {
    return t === 0 ? Un() : t < 0 ? e.lift(new Yf(-1, e)) : e.lift(new Yf(t - 1, e));
  };
}
var Yf = /* @__PURE__ */ function() {
  function t(e, r) {
    this.count = e, this.source = r;
  }
  return t.prototype.call = function(e, r) {
    return r.subscribe(new LC(e, this.count, this.source));
  }, t;
}(), LC = /* @__PURE__ */ function(t) {
  L(e, t);
  function e(r, n, i) {
    var s = t.call(this, r) || this;
    return s.count = n, s.source = i, s;
  }
  return e.prototype.complete = function() {
    if (!this.isStopped) {
      var r = this, n = r.source, i = r.count;
      if (i === 0)
        return t.prototype.complete.call(this);
      i > -1 && (this.count = i - 1), n.subscribe(this._unsubscribeAndRecycle());
    }
  }, e;
}(K);
function PC(t) {
  return function(e) {
    return e.lift(new BC(t));
  };
}
var BC = /* @__PURE__ */ function() {
  function t(e) {
    this.notifier = e;
  }
  return t.prototype.call = function(e, r) {
    return r.subscribe(new $C(e, this.notifier, r));
  }, t;
}(), $C = /* @__PURE__ */ function(t) {
  L(e, t);
  function e(r, n, i) {
    var s = t.call(this, r) || this;
    return s.notifier = n, s.source = i, s.sourceIsBeingSubscribedTo = !0, s;
  }
  return e.prototype.notifyNext = function() {
    this.sourceIsBeingSubscribedTo = !0, this.source.subscribe(this);
  }, e.prototype.notifyComplete = function() {
    if (this.sourceIsBeingSubscribedTo === !1)
      return t.prototype.complete.call(this);
  }, e.prototype.complete = function() {
    if (this.sourceIsBeingSubscribedTo = !1, !this.isStopped) {
      if (this.retries || this.subscribeToRetries(), !this.retriesSubscription || this.retriesSubscription.closed)
        return t.prototype.complete.call(this);
      this._unsubscribeAndRecycle(), this.notifications.next(void 0);
    }
  }, e.prototype._unsubscribe = function() {
    var r = this, n = r.notifications, i = r.retriesSubscription;
    n && (n.unsubscribe(), this.notifications = void 0), i && (i.unsubscribe(), this.retriesSubscription = void 0), this.retries = void 0;
  }, e.prototype._unsubscribeAndRecycle = function() {
    var r = this._unsubscribe;
    return this._unsubscribe = null, t.prototype._unsubscribeAndRecycle.call(this), this._unsubscribe = r, this;
  }, e.prototype.subscribeToRetries = function() {
    this.notifications = new He();
    var r;
    try {
      var n = this.notifier;
      r = n(this.notifications);
    } catch {
      return t.prototype.complete.call(this);
    }
    this.retries = r, this.retriesSubscription = Ne(r, new Oe(this));
  }, e;
}(ke);
function DC(t) {
  return t === void 0 && (t = -1), function(e) {
    return e.lift(new FC(t, e));
  };
}
var FC = /* @__PURE__ */ function() {
  function t(e, r) {
    this.count = e, this.source = r;
  }
  return t.prototype.call = function(e, r) {
    return r.subscribe(new jC(e, this.count, this.source));
  }, t;
}(), jC = /* @__PURE__ */ function(t) {
  L(e, t);
  function e(r, n, i) {
    var s = t.call(this, r) || this;
    return s.count = n, s.source = i, s;
  }
  return e.prototype.error = function(r) {
    if (!this.isStopped) {
      var n = this, i = n.source, s = n.count;
      if (s === 0)
        return t.prototype.error.call(this, r);
      s > -1 && (this.count = s - 1), i.subscribe(this._unsubscribeAndRecycle());
    }
  }, e;
}(K);
function UC(t) {
  return function(e) {
    return e.lift(new WC(t, e));
  };
}
var WC = /* @__PURE__ */ function() {
  function t(e, r) {
    this.notifier = e, this.source = r;
  }
  return t.prototype.call = function(e, r) {
    return r.subscribe(new VC(e, this.notifier, this.source));
  }, t;
}(), VC = /* @__PURE__ */ function(t) {
  L(e, t);
  function e(r, n, i) {
    var s = t.call(this, r) || this;
    return s.notifier = n, s.source = i, s;
  }
  return e.prototype.error = function(r) {
    if (!this.isStopped) {
      var n = this.errors, i = this.retries, s = this.retriesSubscription;
      if (i)
        this.errors = void 0, this.retriesSubscription = void 0;
      else {
        n = new He();
        try {
          var o = this.notifier;
          i = o(n);
        } catch (a) {
          return t.prototype.error.call(this, a);
        }
        s = Ne(i, new Oe(this));
      }
      this._unsubscribeAndRecycle(), this.errors = n, this.retries = i, this.retriesSubscription = s, n.next(r);
    }
  }, e.prototype._unsubscribe = function() {
    var r = this, n = r.errors, i = r.retriesSubscription;
    n && (n.unsubscribe(), this.errors = void 0), i && (i.unsubscribe(), this.retriesSubscription = void 0), this.retries = void 0;
  }, e.prototype.notifyNext = function() {
    var r = this._unsubscribe;
    this._unsubscribe = null, this._unsubscribeAndRecycle(), this._unsubscribe = r, this.source.subscribe(this);
  }, e;
}(ke);
function HC(t) {
  return function(e) {
    return e.lift(new zC(t));
  };
}
var zC = /* @__PURE__ */ function() {
  function t(e) {
    this.notifier = e;
  }
  return t.prototype.call = function(e, r) {
    var n = new qC(e), i = r.subscribe(n);
    return i.add(Ne(this.notifier, new Oe(n))), i;
  }, t;
}(), qC = /* @__PURE__ */ function(t) {
  L(e, t);
  function e() {
    var r = t !== null && t.apply(this, arguments) || this;
    return r.hasValue = !1, r;
  }
  return e.prototype._next = function(r) {
    this.value = r, this.hasValue = !0;
  }, e.prototype.notifyNext = function() {
    this.emitValue();
  }, e.prototype.notifyComplete = function() {
    this.emitValue();
  }, e.prototype.emitValue = function() {
    this.hasValue && (this.hasValue = !1, this.destination.next(this.value));
  }, e;
}(ke);
function GC(t, e) {
  return e === void 0 && (e = it), function(r) {
    return r.lift(new JC(t, e));
  };
}
var JC = /* @__PURE__ */ function() {
  function t(e, r) {
    this.period = e, this.scheduler = r;
  }
  return t.prototype.call = function(e, r) {
    return r.subscribe(new QC(e, this.period, this.scheduler));
  }, t;
}(), QC = /* @__PURE__ */ function(t) {
  L(e, t);
  function e(r, n, i) {
    var s = t.call(this, r) || this;
    return s.period = n, s.scheduler = i, s.hasValue = !1, s.add(i.schedule(ZC, n, { subscriber: s, period: n })), s;
  }
  return e.prototype._next = function(r) {
    this.lastValue = r, this.hasValue = !0;
  }, e.prototype.notifyNext = function() {
    this.hasValue && (this.hasValue = !1, this.destination.next(this.lastValue));
  }, e;
}(K);
function ZC(t) {
  var e = t.subscriber, r = t.period;
  e.notifyNext(), this.schedule(t, r);
}
function YC(t, e) {
  return function(r) {
    return r.lift(new KC(t, e));
  };
}
var KC = /* @__PURE__ */ function() {
  function t(e, r) {
    this.compareTo = e, this.comparator = r;
  }
  return t.prototype.call = function(e, r) {
    return r.subscribe(new XC(e, this.compareTo, this.comparator));
  }, t;
}(), XC = /* @__PURE__ */ function(t) {
  L(e, t);
  function e(r, n, i) {
    var s = t.call(this, r) || this;
    return s.compareTo = n, s.comparator = i, s._a = [], s._b = [], s._oneComplete = !1, s.destination.add(n.subscribe(new eI(r, s))), s;
  }
  return e.prototype._next = function(r) {
    this._oneComplete && this._b.length === 0 ? this.emit(!1) : (this._a.push(r), this.checkValues());
  }, e.prototype._complete = function() {
    this._oneComplete ? this.emit(this._a.length === 0 && this._b.length === 0) : this._oneComplete = !0, this.unsubscribe();
  }, e.prototype.checkValues = function() {
    for (var r = this, n = r._a, i = r._b, s = r.comparator; n.length > 0 && i.length > 0; ) {
      var o = n.shift(), a = i.shift(), c = !1;
      try {
        c = s ? s(o, a) : o === a;
      } catch (u) {
        this.destination.error(u);
      }
      c || this.emit(!1);
    }
  }, e.prototype.emit = function(r) {
    var n = this.destination;
    n.next(r), n.complete();
  }, e.prototype.nextB = function(r) {
    this._oneComplete && this._a.length === 0 ? this.emit(!1) : (this._b.push(r), this.checkValues());
  }, e.prototype.completeB = function() {
    this._oneComplete ? this.emit(this._a.length === 0 && this._b.length === 0) : this._oneComplete = !0;
  }, e;
}(K), eI = /* @__PURE__ */ function(t) {
  L(e, t);
  function e(r, n) {
    var i = t.call(this, r) || this;
    return i.parent = n, i;
  }
  return e.prototype._next = function(r) {
    this.parent.nextB(r);
  }, e.prototype._error = function(r) {
    this.parent.error(r), this.unsubscribe();
  }, e.prototype._complete = function() {
    this.parent.completeB(), this.unsubscribe();
  }, e;
}(K);
function tI() {
  return new He();
}
function rI() {
  return function(t) {
    return yu()(Ur(tI)(t));
  };
}
function nI(t, e, r) {
  var n;
  return t && typeof t == "object" ? n = t : n = {
    bufferSize: t,
    windowTime: e,
    refCount: !1,
    scheduler: r
  }, function(i) {
    return i.lift(iI(n));
  };
}
function iI(t) {
  var e = t.bufferSize, r = e === void 0 ? Number.POSITIVE_INFINITY : e, n = t.windowTime, i = n === void 0 ? Number.POSITIVE_INFINITY : n, s = t.refCount, o = t.scheduler, a, c = 0, u, h = !1, d = !1;
  return function(v) {
    c++;
    var _;
    !a || h ? (h = !1, a = new wu(r, i, o), _ = a.subscribe(this), u = v.subscribe({
      next: function(A) {
        a.next(A);
      },
      error: function(A) {
        h = !0, a.error(A);
      },
      complete: function() {
        d = !0, u = void 0, a.complete();
      }
    }), d && (u = void 0)) : _ = a.subscribe(this), this.add(function() {
      c--, _.unsubscribe(), _ = void 0, u && !d && s && c === 0 && (u.unsubscribe(), u = void 0, a = void 0);
    });
  };
}
function sI(t) {
  return function(e) {
    return e.lift(new oI(t, e));
  };
}
var oI = /* @__PURE__ */ function() {
  function t(e, r) {
    this.predicate = e, this.source = r;
  }
  return t.prototype.call = function(e, r) {
    return r.subscribe(new aI(e, this.predicate, this.source));
  }, t;
}(), aI = /* @__PURE__ */ function(t) {
  L(e, t);
  function e(r, n, i) {
    var s = t.call(this, r) || this;
    return s.predicate = n, s.source = i, s.seenValue = !1, s.index = 0, s;
  }
  return e.prototype.applySingleValue = function(r) {
    this.seenValue ? this.destination.error("Sequence contains more than one element") : (this.seenValue = !0, this.singleValue = r);
  }, e.prototype._next = function(r) {
    var n = this.index++;
    this.predicate ? this.tryNext(r, n) : this.applySingleValue(r);
  }, e.prototype.tryNext = function(r, n) {
    try {
      this.predicate(r, n, this.source) && this.applySingleValue(r);
    } catch (i) {
      this.destination.error(i);
    }
  }, e.prototype._complete = function() {
    var r = this.destination;
    this.index > 0 ? (r.next(this.seenValue ? this.singleValue : void 0), r.complete()) : r.error(new Li());
  }, e;
}(K);
function cI(t) {
  return function(e) {
    return e.lift(new uI(t));
  };
}
var uI = /* @__PURE__ */ function() {
  function t(e) {
    this.total = e;
  }
  return t.prototype.call = function(e, r) {
    return r.subscribe(new lI(e, this.total));
  }, t;
}(), lI = /* @__PURE__ */ function(t) {
  L(e, t);
  function e(r, n) {
    var i = t.call(this, r) || this;
    return i.total = n, i.count = 0, i;
  }
  return e.prototype._next = function(r) {
    ++this.count > this.total && this.destination.next(r);
  }, e;
}(K);
function fI(t) {
  return function(e) {
    return e.lift(new hI(t));
  };
}
var hI = /* @__PURE__ */ function() {
  function t(e) {
    if (this._skipCount = e, this._skipCount < 0)
      throw new Rn();
  }
  return t.prototype.call = function(e, r) {
    return this._skipCount === 0 ? r.subscribe(new K(e)) : r.subscribe(new dI(e, this._skipCount));
  }, t;
}(), dI = /* @__PURE__ */ function(t) {
  L(e, t);
  function e(r, n) {
    var i = t.call(this, r) || this;
    return i._skipCount = n, i._count = 0, i._ring = new Array(n), i;
  }
  return e.prototype._next = function(r) {
    var n = this._skipCount, i = this._count++;
    if (i < n)
      this._ring[i] = r;
    else {
      var s = i % n, o = this._ring, a = o[s];
      o[s] = r, this.destination.next(a);
    }
  }, e;
}(K);
function pI(t) {
  return function(e) {
    return e.lift(new gI(t));
  };
}
var gI = /* @__PURE__ */ function() {
  function t(e) {
    this.notifier = e;
  }
  return t.prototype.call = function(e, r) {
    return r.subscribe(new bI(e, this.notifier));
  }, t;
}(), bI = /* @__PURE__ */ function(t) {
  L(e, t);
  function e(r, n) {
    var i = t.call(this, r) || this;
    i.hasValue = !1;
    var s = new Oe(i);
    i.add(s), i.innerSubscription = s;
    var o = Ne(n, s);
    return o !== s && (i.add(o), i.innerSubscription = o), i;
  }
  return e.prototype._next = function(r) {
    this.hasValue && t.prototype._next.call(this, r);
  }, e.prototype.notifyNext = function() {
    this.hasValue = !0, this.innerSubscription && this.innerSubscription.unsubscribe();
  }, e.prototype.notifyComplete = function() {
  }, e;
}(ke);
function yI(t) {
  return function(e) {
    return e.lift(new mI(t));
  };
}
var mI = /* @__PURE__ */ function() {
  function t(e) {
    this.predicate = e;
  }
  return t.prototype.call = function(e, r) {
    return r.subscribe(new vI(e, this.predicate));
  }, t;
}(), vI = /* @__PURE__ */ function(t) {
  L(e, t);
  function e(r, n) {
    var i = t.call(this, r) || this;
    return i.predicate = n, i.skipping = !0, i.index = 0, i;
  }
  return e.prototype._next = function(r) {
    var n = this.destination;
    this.skipping && this.tryCallPredicate(r), this.skipping || n.next(r);
  }, e.prototype.tryCallPredicate = function(r) {
    try {
      var n = this.predicate(r, this.index++);
      this.skipping = !!n;
    } catch (i) {
      this.destination.error(i);
    }
  }, e;
}(K);
function wI() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t[e] = arguments[e];
  var r = t[t.length - 1];
  return lt(r) ? (t.pop(), function(n) {
    return li(t, n, r);
  }) : function(n) {
    return li(t, n);
  };
}
var _I = /* @__PURE__ */ function(t) {
  L(e, t);
  function e(r, n, i) {
    n === void 0 && (n = 0), i === void 0 && (i = rs);
    var s = t.call(this) || this;
    return s.source = r, s.delayTime = n, s.scheduler = i, (!An(n) || n < 0) && (s.delayTime = 0), (!i || typeof i.schedule != "function") && (s.scheduler = rs), s;
  }
  return e.create = function(r, n, i) {
    return n === void 0 && (n = 0), i === void 0 && (i = rs), new e(r, n, i);
  }, e.dispatch = function(r) {
    var n = r.source, i = r.subscriber;
    return this.add(n.subscribe(i));
  }, e.prototype._subscribe = function(r) {
    var n = this.delayTime, i = this.source, s = this.scheduler;
    return s.schedule(e.dispatch, n, {
      source: i,
      subscriber: r
    });
  }, e;
}(ue);
function EI(t, e) {
  return e === void 0 && (e = 0), function(n) {
    return n.lift(new SI(t, e));
  };
}
var SI = /* @__PURE__ */ function() {
  function t(e, r) {
    this.scheduler = e, this.delay = r;
  }
  return t.prototype.call = function(e, r) {
    return new _I(r, this.delay, this.scheduler).subscribe(e);
  }, t;
}();
function fi(t, e) {
  return typeof e == "function" ? function(r) {
    return r.pipe(fi(function(n, i) {
      return sr(t(n, i)).pipe(St(function(s, o) {
        return e(n, s, i, o);
      }));
    }));
  } : function(r) {
    return r.lift(new xI(t));
  };
}
var xI = /* @__PURE__ */ function() {
  function t(e) {
    this.project = e;
  }
  return t.prototype.call = function(e, r) {
    return r.subscribe(new CI(e, this.project));
  }, t;
}(), CI = /* @__PURE__ */ function(t) {
  L(e, t);
  function e(r, n) {
    var i = t.call(this, r) || this;
    return i.project = n, i.index = 0, i;
  }
  return e.prototype._next = function(r) {
    var n, i = this.index++;
    try {
      n = this.project(r, i);
    } catch (s) {
      this.destination.error(s);
      return;
    }
    this._innerSub(n);
  }, e.prototype._innerSub = function(r) {
    var n = this.innerSubscription;
    n && n.unsubscribe();
    var i = new Oe(this), s = this.destination;
    s.add(i), this.innerSubscription = Ne(r, i), this.innerSubscription !== i && s.add(this.innerSubscription);
  }, e.prototype._complete = function() {
    var r = this.innerSubscription;
    (!r || r.closed) && t.prototype._complete.call(this), this.unsubscribe();
  }, e.prototype._unsubscribe = function() {
    this.innerSubscription = void 0;
  }, e.prototype.notifyComplete = function() {
    this.innerSubscription = void 0, this.isStopped && t.prototype._complete.call(this);
  }, e.prototype.notifyNext = function(r) {
    this.destination.next(r);
  }, e;
}(ke);
function II() {
  return fi(wr);
}
function RI(t, e) {
  return e ? fi(function() {
    return t;
  }, e) : fi(function() {
    return t;
  });
}
function AI(t) {
  return function(e) {
    return e.lift(new TI(t));
  };
}
var TI = /* @__PURE__ */ function() {
  function t(e) {
    this.notifier = e;
  }
  return t.prototype.call = function(e, r) {
    var n = new MI(e), i = Ne(this.notifier, new Oe(n));
    return i && !n.seenValue ? (n.add(i), r.subscribe(n)) : n;
  }, t;
}(), MI = /* @__PURE__ */ function(t) {
  L(e, t);
  function e(r) {
    var n = t.call(this, r) || this;
    return n.seenValue = !1, n;
  }
  return e.prototype.notifyNext = function() {
    this.seenValue = !0, this.complete();
  }, e.prototype.notifyComplete = function() {
  }, e;
}(ke);
function OI(t, e) {
  return e === void 0 && (e = !1), function(r) {
    return r.lift(new kI(t, e));
  };
}
var kI = /* @__PURE__ */ function() {
  function t(e, r) {
    this.predicate = e, this.inclusive = r;
  }
  return t.prototype.call = function(e, r) {
    return r.subscribe(new NI(e, this.predicate, this.inclusive));
  }, t;
}(), NI = /* @__PURE__ */ function(t) {
  L(e, t);
  function e(r, n, i) {
    var s = t.call(this, r) || this;
    return s.predicate = n, s.inclusive = i, s.index = 0, s;
  }
  return e.prototype._next = function(r) {
    var n = this.destination, i;
    try {
      i = this.predicate(r, this.index++);
    } catch (s) {
      n.error(s);
      return;
    }
    this.nextOrComplete(r, i);
  }, e.prototype.nextOrComplete = function(r, n) {
    var i = this.destination;
    n ? i.next(r) : (this.inclusive && i.next(r), i.complete());
  }, e;
}(K);
function LI(t, e, r) {
  return function(i) {
    return i.lift(new PI(t, e, r));
  };
}
var PI = /* @__PURE__ */ function() {
  function t(e, r, n) {
    this.nextOrObserver = e, this.error = r, this.complete = n;
  }
  return t.prototype.call = function(e, r) {
    return r.subscribe(new BI(e, this.nextOrObserver, this.error, this.complete));
  }, t;
}(), BI = /* @__PURE__ */ function(t) {
  L(e, t);
  function e(r, n, i, s) {
    var o = t.call(this, r) || this;
    return o._tapNext = Ut, o._tapError = Ut, o._tapComplete = Ut, o._tapError = i || Ut, o._tapComplete = s || Ut, Cn(n) ? (o._context = o, o._tapNext = n) : n && (o._context = n, o._tapNext = n.next || Ut, o._tapError = n.error || Ut, o._tapComplete = n.complete || Ut), o;
  }
  return e.prototype._next = function(r) {
    try {
      this._tapNext.call(this._context, r);
    } catch (n) {
      this.destination.error(n);
      return;
    }
    this.destination.next(r);
  }, e.prototype._error = function(r) {
    try {
      this._tapError.call(this._context, r);
    } catch (n) {
      this.destination.error(n);
      return;
    }
    this.destination.error(r);
  }, e.prototype._complete = function() {
    try {
      this._tapComplete.call(this._context);
    } catch (r) {
      this.destination.error(r);
      return;
    }
    return this.destination.complete();
  }, e;
}(K), w0 = {
  leading: !0,
  trailing: !1
};
function $I(t, e) {
  return e === void 0 && (e = w0), function(r) {
    return r.lift(new DI(t, !!e.leading, !!e.trailing));
  };
}
var DI = /* @__PURE__ */ function() {
  function t(e, r, n) {
    this.durationSelector = e, this.leading = r, this.trailing = n;
  }
  return t.prototype.call = function(e, r) {
    return r.subscribe(new FI(e, this.durationSelector, this.leading, this.trailing));
  }, t;
}(), FI = /* @__PURE__ */ function(t) {
  L(e, t);
  function e(r, n, i, s) {
    var o = t.call(this, r) || this;
    return o.destination = r, o.durationSelector = n, o._leading = i, o._trailing = s, o._hasValue = !1, o;
  }
  return e.prototype._next = function(r) {
    this._hasValue = !0, this._sendValue = r, this._throttled || (this._leading ? this.send() : this.throttle(r));
  }, e.prototype.send = function() {
    var r = this, n = r._hasValue, i = r._sendValue;
    n && (this.destination.next(i), this.throttle(i)), this._hasValue = !1, this._sendValue = void 0;
  }, e.prototype.throttle = function(r) {
    var n = this.tryDurationSelector(r);
    n && this.add(this._throttled = Ne(n, new Oe(this)));
  }, e.prototype.tryDurationSelector = function(r) {
    try {
      return this.durationSelector(r);
    } catch (n) {
      return this.destination.error(n), null;
    }
  }, e.prototype.throttlingDone = function() {
    var r = this, n = r._throttled, i = r._trailing;
    n && n.unsubscribe(), this._throttled = void 0, i && this.send();
  }, e.prototype.notifyNext = function() {
    this.throttlingDone();
  }, e.prototype.notifyComplete = function() {
    this.throttlingDone();
  }, e;
}(ke);
function jI(t, e, r) {
  return e === void 0 && (e = it), r === void 0 && (r = w0), function(n) {
    return n.lift(new UI(t, e, r.leading, r.trailing));
  };
}
var UI = /* @__PURE__ */ function() {
  function t(e, r, n, i) {
    this.duration = e, this.scheduler = r, this.leading = n, this.trailing = i;
  }
  return t.prototype.call = function(e, r) {
    return r.subscribe(new WI(e, this.duration, this.scheduler, this.leading, this.trailing));
  }, t;
}(), WI = /* @__PURE__ */ function(t) {
  L(e, t);
  function e(r, n, i, s, o) {
    var a = t.call(this, r) || this;
    return a.duration = n, a.scheduler = i, a.leading = s, a.trailing = o, a._hasTrailingValue = !1, a._trailingValue = null, a;
  }
  return e.prototype._next = function(r) {
    this.throttled ? this.trailing && (this._trailingValue = r, this._hasTrailingValue = !0) : (this.add(this.throttled = this.scheduler.schedule(VI, this.duration, { subscriber: this })), this.leading ? this.destination.next(r) : this.trailing && (this._trailingValue = r, this._hasTrailingValue = !0));
  }, e.prototype._complete = function() {
    this._hasTrailingValue ? (this.destination.next(this._trailingValue), this.destination.complete()) : this.destination.complete();
  }, e.prototype.clearThrottle = function() {
    var r = this.throttled;
    r && (this.trailing && this._hasTrailingValue && (this.destination.next(this._trailingValue), this._trailingValue = null, this._hasTrailingValue = !1), r.unsubscribe(), this.remove(r), this.throttled = null);
  }, e;
}(K);
function VI(t) {
  var e = t.subscriber;
  e.clearThrottle();
}
function HI(t) {
  return t === void 0 && (t = it), function(e) {
    return Su(function() {
      return e.pipe(bs(function(r, n) {
        var i = r.current;
        return { value: n, current: t.now(), last: i };
      }, { current: t.now(), value: void 0, last: void 0 }), St(function(r) {
        var n = r.current, i = r.last, s = r.value;
        return new zI(s, n - i);
      }));
    });
  };
}
var zI = /* @__PURE__ */ function() {
  function t(e, r) {
    this.value = e, this.interval = r;
  }
  return t;
}();
function _0(t, e, r) {
  return r === void 0 && (r = it), function(n) {
    var i = b0(t), s = i ? +t - r.now() : Math.abs(t);
    return n.lift(new qI(s, i, e, r));
  };
}
var qI = /* @__PURE__ */ function() {
  function t(e, r, n, i) {
    this.waitFor = e, this.absoluteTimeout = r, this.withObservable = n, this.scheduler = i;
  }
  return t.prototype.call = function(e, r) {
    return r.subscribe(new GI(e, this.absoluteTimeout, this.waitFor, this.withObservable, this.scheduler));
  }, t;
}(), GI = /* @__PURE__ */ function(t) {
  L(e, t);
  function e(r, n, i, s, o) {
    var a = t.call(this, r) || this;
    return a.absoluteTimeout = n, a.waitFor = i, a.withObservable = s, a.scheduler = o, a.scheduleTimeout(), a;
  }
  return e.dispatchTimeout = function(r) {
    var n = r.withObservable;
    r._unsubscribeAndRecycle(), r.add(Ne(n, new Oe(r)));
  }, e.prototype.scheduleTimeout = function() {
    var r = this.action;
    r ? this.action = r.schedule(this, this.waitFor) : this.add(this.action = this.scheduler.schedule(e.dispatchTimeout, this.waitFor, this));
  }, e.prototype._next = function(r) {
    this.absoluteTimeout || this.scheduleTimeout(), t.prototype._next.call(this, r);
  }, e.prototype._unsubscribe = function() {
    this.action = void 0, this.scheduler = null, this.withObservable = null;
  }, e;
}(ke);
function JI(t, e) {
  return e === void 0 && (e = it), _0(t, vu(new Dp()), e);
}
function QI(t) {
  return t === void 0 && (t = it), St(function(e) {
    return new ZI(e, t.now());
  });
}
var ZI = /* @__PURE__ */ function() {
  function t(e, r) {
    this.value = e, this.timestamp = r;
  }
  return t;
}();
function YI(t, e, r) {
  return r === 0 ? [e] : (t.push(e), t);
}
function KI() {
  return yo(YI, []);
}
function XI(t) {
  return function(r) {
    return r.lift(new eR(t));
  };
}
var eR = /* @__PURE__ */ function() {
  function t(e) {
    this.windowBoundaries = e;
  }
  return t.prototype.call = function(e, r) {
    var n = new tR(e), i = r.subscribe(n);
    return i.closed || n.add(Ne(this.windowBoundaries, new Oe(n))), i;
  }, t;
}(), tR = /* @__PURE__ */ function(t) {
  L(e, t);
  function e(r) {
    var n = t.call(this, r) || this;
    return n.window = new He(), r.next(n.window), n;
  }
  return e.prototype.notifyNext = function() {
    this.openWindow();
  }, e.prototype.notifyError = function(r) {
    this._error(r);
  }, e.prototype.notifyComplete = function() {
    this._complete();
  }, e.prototype._next = function(r) {
    this.window.next(r);
  }, e.prototype._error = function(r) {
    this.window.error(r), this.destination.error(r);
  }, e.prototype._complete = function() {
    this.window.complete(), this.destination.complete();
  }, e.prototype._unsubscribe = function() {
    this.window = null;
  }, e.prototype.openWindow = function() {
    var r = this.window;
    r && r.complete();
    var n = this.destination, i = this.window = new He();
    n.next(i);
  }, e;
}(ke);
function rR(t, e) {
  return e === void 0 && (e = 0), function(n) {
    return n.lift(new nR(t, e));
  };
}
var nR = /* @__PURE__ */ function() {
  function t(e, r) {
    this.windowSize = e, this.startWindowEvery = r;
  }
  return t.prototype.call = function(e, r) {
    return r.subscribe(new iR(e, this.windowSize, this.startWindowEvery));
  }, t;
}(), iR = /* @__PURE__ */ function(t) {
  L(e, t);
  function e(r, n, i) {
    var s = t.call(this, r) || this;
    return s.destination = r, s.windowSize = n, s.startWindowEvery = i, s.windows = [new He()], s.count = 0, r.next(s.windows[0]), s;
  }
  return e.prototype._next = function(r) {
    for (var n = this.startWindowEvery > 0 ? this.startWindowEvery : this.windowSize, i = this.destination, s = this.windowSize, o = this.windows, a = o.length, c = 0; c < a && !this.closed; c++)
      o[c].next(r);
    var u = this.count - s + 1;
    if (u >= 0 && u % n === 0 && !this.closed && o.shift().complete(), ++this.count % n === 0 && !this.closed) {
      var h = new He();
      o.push(h), i.next(h);
    }
  }, e.prototype._error = function(r) {
    var n = this.windows;
    if (n)
      for (; n.length > 0 && !this.closed; )
        n.shift().error(r);
    this.destination.error(r);
  }, e.prototype._complete = function() {
    var r = this.windows;
    if (r)
      for (; r.length > 0 && !this.closed; )
        r.shift().complete();
    this.destination.complete();
  }, e.prototype._unsubscribe = function() {
    this.count = 0, this.windows = null;
  }, e;
}(K);
function sR(t) {
  var e = it, r = null, n = Number.POSITIVE_INFINITY;
  return lt(arguments[3]) && (e = arguments[3]), lt(arguments[2]) ? e = arguments[2] : An(arguments[2]) && (n = Number(arguments[2])), lt(arguments[1]) ? e = arguments[1] : An(arguments[1]) && (r = Number(arguments[1])), function(s) {
    return s.lift(new oR(t, r, n, e));
  };
}
var oR = /* @__PURE__ */ function() {
  function t(e, r, n, i) {
    this.windowTimeSpan = e, this.windowCreationInterval = r, this.maxWindowSize = n, this.scheduler = i;
  }
  return t.prototype.call = function(e, r) {
    return r.subscribe(new cR(e, this.windowTimeSpan, this.windowCreationInterval, this.maxWindowSize, this.scheduler));
  }, t;
}(), aR = /* @__PURE__ */ function(t) {
  L(e, t);
  function e() {
    var r = t !== null && t.apply(this, arguments) || this;
    return r._numberOfNextedValues = 0, r;
  }
  return e.prototype.next = function(r) {
    this._numberOfNextedValues++, t.prototype.next.call(this, r);
  }, Object.defineProperty(e.prototype, "numberOfNextedValues", {
    get: function() {
      return this._numberOfNextedValues;
    },
    enumerable: !0,
    configurable: !0
  }), e;
}(He), cR = /* @__PURE__ */ function(t) {
  L(e, t);
  function e(r, n, i, s, o) {
    var a = t.call(this, r) || this;
    a.destination = r, a.windowTimeSpan = n, a.windowCreationInterval = i, a.maxWindowSize = s, a.scheduler = o, a.windows = [];
    var c = a.openWindow();
    if (i !== null && i >= 0) {
      var u = { subscriber: a, window: c, context: null }, h = { windowTimeSpan: n, windowCreationInterval: i, subscriber: a, scheduler: o };
      a.add(o.schedule(E0, n, u)), a.add(o.schedule(lR, i, h));
    } else {
      var d = { subscriber: a, window: c, windowTimeSpan: n };
      a.add(o.schedule(uR, n, d));
    }
    return a;
  }
  return e.prototype._next = function(r) {
    for (var n = this.windows, i = n.length, s = 0; s < i; s++) {
      var o = n[s];
      o.closed || (o.next(r), o.numberOfNextedValues >= this.maxWindowSize && this.closeWindow(o));
    }
  }, e.prototype._error = function(r) {
    for (var n = this.windows; n.length > 0; )
      n.shift().error(r);
    this.destination.error(r);
  }, e.prototype._complete = function() {
    for (var r = this.windows; r.length > 0; ) {
      var n = r.shift();
      n.closed || n.complete();
    }
    this.destination.complete();
  }, e.prototype.openWindow = function() {
    var r = new aR();
    this.windows.push(r);
    var n = this.destination;
    return n.next(r), r;
  }, e.prototype.closeWindow = function(r) {
    r.complete();
    var n = this.windows;
    n.splice(n.indexOf(r), 1);
  }, e;
}(K);
function uR(t) {
  var e = t.subscriber, r = t.windowTimeSpan, n = t.window;
  n && e.closeWindow(n), t.window = e.openWindow(), this.schedule(t, r);
}
function lR(t) {
  var e = t.windowTimeSpan, r = t.subscriber, n = t.scheduler, i = t.windowCreationInterval, s = r.openWindow(), o = this, a = { action: o, subscription: null }, c = { subscriber: r, window: s, context: a };
  a.subscription = n.schedule(E0, e, c), o.add(a.subscription), o.schedule(t, i);
}
function E0(t) {
  var e = t.subscriber, r = t.window, n = t.context;
  n && n.action && n.subscription && n.action.remove(n.subscription), e.closeWindow(r);
}
function fR(t, e) {
  return function(r) {
    return r.lift(new hR(t, e));
  };
}
var hR = /* @__PURE__ */ function() {
  function t(e, r) {
    this.openings = e, this.closingSelector = r;
  }
  return t.prototype.call = function(e, r) {
    return r.subscribe(new dR(e, this.openings, this.closingSelector));
  }, t;
}(), dR = /* @__PURE__ */ function(t) {
  L(e, t);
  function e(r, n, i) {
    var s = t.call(this, r) || this;
    return s.openings = n, s.closingSelector = i, s.contexts = [], s.add(s.openSubscription = ir(s, n, n)), s;
  }
  return e.prototype._next = function(r) {
    var n = this.contexts;
    if (n)
      for (var i = n.length, s = 0; s < i; s++)
        n[s].window.next(r);
  }, e.prototype._error = function(r) {
    var n = this.contexts;
    if (this.contexts = null, n)
      for (var i = n.length, s = -1; ++s < i; ) {
        var o = n[s];
        o.window.error(r), o.subscription.unsubscribe();
      }
    t.prototype._error.call(this, r);
  }, e.prototype._complete = function() {
    var r = this.contexts;
    if (this.contexts = null, r)
      for (var n = r.length, i = -1; ++i < n; ) {
        var s = r[i];
        s.window.complete(), s.subscription.unsubscribe();
      }
    t.prototype._complete.call(this);
  }, e.prototype._unsubscribe = function() {
    var r = this.contexts;
    if (this.contexts = null, r)
      for (var n = r.length, i = -1; ++i < n; ) {
        var s = r[i];
        s.window.unsubscribe(), s.subscription.unsubscribe();
      }
  }, e.prototype.notifyNext = function(r, n, i, s, o) {
    if (r === this.openings) {
      var a = void 0;
      try {
        var c = this.closingSelector;
        a = c(n);
      } catch (v) {
        return this.error(v);
      }
      var u = new He(), h = new Me(), d = { window: u, subscription: h };
      this.contexts.push(d);
      var p = ir(this, a, d);
      p.closed ? this.closeWindow(this.contexts.length - 1) : (p.context = d, h.add(p)), this.destination.next(u);
    } else
      this.closeWindow(this.contexts.indexOf(r));
  }, e.prototype.notifyError = function(r) {
    this.error(r);
  }, e.prototype.notifyComplete = function(r) {
    r !== this.openSubscription && this.closeWindow(this.contexts.indexOf(r.context));
  }, e.prototype.closeWindow = function(r) {
    if (r !== -1) {
      var n = this.contexts, i = n[r], s = i.window, o = i.subscription;
      n.splice(r, 1), s.complete(), o.unsubscribe();
    }
  }, e;
}(Zr);
function pR(t) {
  return function(r) {
    return r.lift(new gR(t));
  };
}
var gR = /* @__PURE__ */ function() {
  function t(e) {
    this.closingSelector = e;
  }
  return t.prototype.call = function(e, r) {
    return r.subscribe(new bR(e, this.closingSelector));
  }, t;
}(), bR = /* @__PURE__ */ function(t) {
  L(e, t);
  function e(r, n) {
    var i = t.call(this, r) || this;
    return i.destination = r, i.closingSelector = n, i.openWindow(), i;
  }
  return e.prototype.notifyNext = function(r, n, i, s, o) {
    this.openWindow(o);
  }, e.prototype.notifyError = function(r) {
    this._error(r);
  }, e.prototype.notifyComplete = function(r) {
    this.openWindow(r);
  }, e.prototype._next = function(r) {
    this.window.next(r);
  }, e.prototype._error = function(r) {
    this.window.error(r), this.destination.error(r), this.unsubscribeClosingNotification();
  }, e.prototype._complete = function() {
    this.window.complete(), this.destination.complete(), this.unsubscribeClosingNotification();
  }, e.prototype.unsubscribeClosingNotification = function() {
    this.closingNotification && this.closingNotification.unsubscribe();
  }, e.prototype.openWindow = function(r) {
    r === void 0 && (r = null), r && (this.remove(r), r.unsubscribe());
    var n = this.window;
    n && n.complete();
    var i = this.window = new He();
    this.destination.next(i);
    var s;
    try {
      var o = this.closingSelector;
      s = o();
    } catch (a) {
      this.destination.error(a), this.window.error(a);
      return;
    }
    this.add(this.closingNotification = ir(this, s));
  }, e;
}(Zr);
function yR() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t[e] = arguments[e];
  return function(r) {
    var n;
    typeof t[t.length - 1] == "function" && (n = t.pop());
    var i = t;
    return r.lift(new mR(i, n));
  };
}
var mR = /* @__PURE__ */ function() {
  function t(e, r) {
    this.observables = e, this.project = r;
  }
  return t.prototype.call = function(e, r) {
    return r.subscribe(new vR(e, this.observables, this.project));
  }, t;
}(), vR = /* @__PURE__ */ function(t) {
  L(e, t);
  function e(r, n, i) {
    var s = t.call(this, r) || this;
    s.observables = n, s.project = i, s.toRespond = [];
    var o = n.length;
    s.values = new Array(o);
    for (var a = 0; a < o; a++)
      s.toRespond.push(a);
    for (var a = 0; a < o; a++) {
      var c = n[a];
      s.add(ir(s, c, void 0, a));
    }
    return s;
  }
  return e.prototype.notifyNext = function(r, n, i) {
    this.values[i] = n;
    var s = this.toRespond;
    if (s.length > 0) {
      var o = s.indexOf(i);
      o !== -1 && s.splice(o, 1);
    }
  }, e.prototype.notifyComplete = function() {
  }, e.prototype._next = function(r) {
    if (this.toRespond.length === 0) {
      var n = [r].concat(this.values);
      this.project ? this._tryProject(n) : this.destination.next(n);
    }
  }, e.prototype._tryProject = function(r) {
    var n;
    try {
      n = this.project.apply(this, r);
    } catch (i) {
      this.destination.error(i);
      return;
    }
    this.destination.next(n);
  }, e;
}(Zr);
function wR() {
  for (var t = [], e = 0; e < arguments.length; e++)
    t[e] = arguments[e];
  return function(n) {
    return n.lift.call(Xp.apply(void 0, [n].concat(t)));
  };
}
function _R(t) {
  return function(e) {
    return e.lift(new e0(t));
  };
}
const ER = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  audit: d0,
  auditTime: E5,
  buffer: S5,
  bufferCount: I5,
  bufferTime: M5,
  bufferToggle: P5,
  bufferWhen: D5,
  catchError: U5,
  combineAll: H5,
  combineLatest: z5,
  concat: q5,
  concatAll: Hp,
  concatMap: g0,
  concatMapTo: G5,
  count: J5,
  debounce: Y5,
  debounceTime: ex,
  defaultIfEmpty: Bi,
  delay: ox,
  delayWhen: lx,
  dematerialize: px,
  distinct: yx,
  distinctUntilChanged: y0,
  distinctUntilKeyChanged: Ex,
  elementAt: Ax,
  endWith: Tx,
  every: Mx,
  exhaust: Nx,
  exhaustMap: m0,
  expand: Dx,
  filter: Er,
  finalize: Ux,
  find: Hx,
  findIndex: qx,
  first: Gx,
  flatMap: e4,
  groupBy: c3,
  ignoreElements: Jx,
  isEmpty: Yx,
  last: rC,
  map: St,
  mapTo: nC,
  materialize: oC,
  max: fC,
  merge: hC,
  mergeAll: Eu,
  mergeMap: jr,
  mergeMapTo: dC,
  mergeScan: pC,
  min: yC,
  multicast: Ur,
  observeOn: m3,
  onErrorResumeNext: vC,
  pairwise: EC,
  partition: CC,
  pluck: IC,
  publish: AC,
  publishBehavior: TC,
  publishLast: MC,
  publishReplay: OC,
  race: kC,
  reduce: yo,
  refCount: yu,
  repeat: NC,
  repeatWhen: PC,
  retry: DC,
  retryWhen: UC,
  sample: HC,
  sampleTime: GC,
  scan: bs,
  sequenceEqual: YC,
  share: rI,
  shareReplay: nI,
  single: sI,
  skip: cI,
  skipLast: fI,
  skipUntil: pI,
  skipWhile: yI,
  startWith: wI,
  subscribeOn: EI,
  switchAll: II,
  switchMap: fi,
  switchMapTo: RI,
  take: Lu,
  takeLast: gs,
  takeUntil: AI,
  takeWhile: OI,
  tap: LI,
  throttle: $I,
  throttleTime: jI,
  throwIfEmpty: bo,
  timeInterval: HI,
  timeout: JI,
  timeoutWith: _0,
  timestamp: QI,
  toArray: KI,
  window: XI,
  windowCount: rR,
  windowTime: sR,
  windowToggle: fR,
  windowWhen: pR,
  withLatestFrom: yR,
  zip: wR,
  zipAll: _R
}, Symbol.toStringTag, { value: "Module" })), Pu = /* @__PURE__ */ Wr(ER);
var mo = {}, mt = {};
Object.defineProperty(mt, "__esModule", { value: !0 });
mt.ClientMessagePublishEvent = mt.ClientMessageSetSessionConfig = mt.ClientMessageGetSessionConfig = mt.ClientMessageIsLinked = mt.ClientMessageHostSession = void 0;
function SR(t) {
  return Object.assign({ type: "HostSession" }, t);
}
mt.ClientMessageHostSession = SR;
function xR(t) {
  return Object.assign({ type: "IsLinked" }, t);
}
mt.ClientMessageIsLinked = xR;
function CR(t) {
  return Object.assign({ type: "GetSessionConfig" }, t);
}
mt.ClientMessageGetSessionConfig = CR;
function IR(t) {
  return Object.assign({ type: "SetSessionConfig" }, t);
}
mt.ClientMessageSetSessionConfig = IR;
function RR(t) {
  return Object.assign({ type: "PublishEvent" }, t);
}
mt.ClientMessagePublishEvent = RR;
var S0 = {};
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.RxWebSocket = t.ConnectionState = void 0;
  const e = eo, r = Pu;
  var n;
  (function(s) {
    s[s.DISCONNECTED = 0] = "DISCONNECTED", s[s.CONNECTING = 1] = "CONNECTING", s[s.CONNECTED = 2] = "CONNECTED";
  })(n = t.ConnectionState || (t.ConnectionState = {}));
  class i {
    /**
     * Constructor
     * @param url WebSocket server URL
     * @param [WebSocketClass] Custom WebSocket implementation
     */
    constructor(o, a = WebSocket) {
      this.WebSocketClass = a, this.webSocket = null, this.connectionStateSubject = new e.BehaviorSubject(n.DISCONNECTED), this.incomingDataSubject = new e.Subject(), this.url = o.replace(/^http/, "ws");
    }
    /**
     * Make a websocket connection
     * @returns an Observable that completes when connected
     */
    connect() {
      return this.webSocket ? (0, e.throwError)(new Error("webSocket object is not null")) : new e.Observable((o) => {
        let a;
        try {
          this.webSocket = a = new this.WebSocketClass(this.url);
        } catch (c) {
          o.error(c);
          return;
        }
        this.connectionStateSubject.next(n.CONNECTING), a.onclose = (c) => {
          this.clearWebSocket(), o.error(new Error(`websocket error ${c.code}: ${c.reason}`)), this.connectionStateSubject.next(n.DISCONNECTED);
        }, a.onopen = (c) => {
          o.next(), o.complete(), this.connectionStateSubject.next(n.CONNECTED);
        }, a.onmessage = (c) => {
          this.incomingDataSubject.next(c.data);
        };
      }).pipe((0, r.take)(1));
    }
    /**
     * Disconnect from server
     */
    disconnect() {
      const { webSocket: o } = this;
      if (o) {
        this.clearWebSocket(), this.connectionStateSubject.next(n.DISCONNECTED);
        try {
          o.close();
        } catch {
        }
      }
    }
    /**
     * Emit current connection state and subsequent changes
     * @returns an Observable for the connection state
     */
    get connectionState$() {
      return this.connectionStateSubject.asObservable();
    }
    /**
     * Emit incoming data from server
     * @returns an Observable for the data received
     */
    get incomingData$() {
      return this.incomingDataSubject.asObservable();
    }
    /**
     * Emit incoming JSON data from server. non-JSON data are ignored
     * @returns an Observable for parsed JSON data
     */
    get incomingJSONData$() {
      return this.incomingData$.pipe((0, r.flatMap)((o) => {
        let a;
        try {
          a = JSON.parse(o);
        } catch {
          return (0, e.empty)();
        }
        return (0, e.of)(a);
      }));
    }
    /**
     * Send data to server
     * @param data text to send
     */
    sendData(o) {
      const { webSocket: a } = this;
      if (!a)
        throw new Error("websocket is not connected");
      a.send(o);
    }
    clearWebSocket() {
      const { webSocket: o } = this;
      o && (this.webSocket = null, o.onclose = null, o.onerror = null, o.onmessage = null, o.onopen = null);
    }
  }
  t.RxWebSocket = i;
})(S0);
var vo = {};
Object.defineProperty(vo, "__esModule", { value: !0 });
vo.isServerMessageFail = void 0;
function AR(t) {
  return t && t.type === "Fail" && typeof t.id == "number" && typeof t.sessionId == "string" && typeof t.error == "string";
}
vo.isServerMessageFail = AR;
Object.defineProperty(mo, "__esModule", { value: !0 });
mo.WalletSDKConnection = void 0;
const It = eo, he = Pu, Qn = Nn, nn = vi, Zn = mt, Yn = On, Zi = S0, Ka = vo, Kf = 1e4, TR = 6e4;
class MR {
  /**
   * Constructor
   * @param sessionId Session ID
   * @param sessionKey Session Key
   * @param linkAPIUrl Coinbase Wallet link server URL
   * @param [WebSocketClass] Custom WebSocket implementation
   */
  constructor(e, r, n, i, s = WebSocket) {
    this.sessionId = e, this.sessionKey = r, this.diagnostic = i, this.subscriptions = new It.Subscription(), this.destroyed = !1, this.lastHeartbeatResponse = 0, this.nextReqId = (0, nn.IntNumber)(1), this.connectedSubject = new It.BehaviorSubject(!1), this.linkedSubject = new It.BehaviorSubject(!1), this.sessionConfigSubject = new It.ReplaySubject(1);
    const o = new Zi.RxWebSocket(n + "/rpc", s);
    this.ws = o, this.subscriptions.add(o.connectionState$.pipe(
      (0, he.tap)((a) => {
        var c;
        return (c = this.diagnostic) === null || c === void 0 ? void 0 : c.log(Yn.EVENTS.CONNECTED_STATE_CHANGE, {
          state: a,
          sessionIdHash: Qn.Session.hash(e)
        });
      }),
      // ignore initial DISCONNECTED state
      (0, he.skip)(1),
      // if DISCONNECTED and not destroyed
      (0, he.filter)((a) => a === Zi.ConnectionState.DISCONNECTED && !this.destroyed),
      // wait 5 seconds
      (0, he.delay)(5e3),
      // check whether it's destroyed again
      (0, he.filter)((a) => !this.destroyed),
      // reconnect
      (0, he.flatMap)((a) => o.connect()),
      (0, he.retry)()
    ).subscribe()), this.subscriptions.add(o.connectionState$.pipe(
      // ignore initial DISCONNECTED and CONNECTING states
      (0, he.skip)(2),
      (0, he.switchMap)((a) => (0, It.iif)(
        () => a === Zi.ConnectionState.CONNECTED,
        // if CONNECTED, authenticate, and then check link status
        this.authenticate().pipe((0, he.tap)((c) => this.sendIsLinked()), (0, he.tap)((c) => this.sendGetSessionConfig()), (0, he.map)((c) => !0)),
        // if not CONNECTED, emit false immediately
        (0, It.of)(!1)
      )),
      (0, he.distinctUntilChanged)(),
      (0, he.catchError)((a) => (0, It.of)(!1))
    ).subscribe((a) => this.connectedSubject.next(a))), this.subscriptions.add(o.connectionState$.pipe(
      // ignore initial DISCONNECTED state
      (0, he.skip)(1),
      (0, he.switchMap)((a) => (0, It.iif)(
        () => a === Zi.ConnectionState.CONNECTED,
        // if CONNECTED, start the heartbeat timer
        (0, It.timer)(0, Kf)
      ))
    ).subscribe((a) => (
      // first timer event updates lastHeartbeat timestamp
      // subsequent calls send heartbeat message
      a === 0 ? this.updateLastHeartbeat() : this.heartbeat()
    ))), this.subscriptions.add(o.incomingData$.pipe((0, he.filter)((a) => a === "h")).subscribe((a) => this.updateLastHeartbeat())), this.subscriptions.add(o.incomingJSONData$.pipe((0, he.filter)((a) => ["IsLinkedOK", "Linked"].includes(a.type))).subscribe((a) => {
      var c;
      const u = a;
      (c = this.diagnostic) === null || c === void 0 || c.log(Yn.EVENTS.LINKED, {
        sessionIdHash: Qn.Session.hash(e),
        linked: u.linked,
        type: a.type,
        onlineGuests: u.onlineGuests
      }), this.linkedSubject.next(u.linked || u.onlineGuests > 0);
    })), this.subscriptions.add(o.incomingJSONData$.pipe((0, he.filter)((a) => ["GetSessionConfigOK", "SessionConfigUpdated"].includes(a.type))).subscribe((a) => {
      var c;
      const u = a;
      (c = this.diagnostic) === null || c === void 0 || c.log(Yn.EVENTS.SESSION_CONFIG_RECEIVED, {
        sessionIdHash: Qn.Session.hash(e),
        metadata_keys: u && u.metadata ? Object.keys(u.metadata) : void 0
      }), this.sessionConfigSubject.next({
        webhookId: u.webhookId,
        webhookUrl: u.webhookUrl,
        metadata: u.metadata
      });
    }));
  }
  /**
   * Make a connection to the server
   */
  connect() {
    var e;
    if (this.destroyed)
      throw new Error("instance is destroyed");
    (e = this.diagnostic) === null || e === void 0 || e.log(Yn.EVENTS.STARTED_CONNECTING, {
      sessionIdHash: Qn.Session.hash(this.sessionId)
    }), this.ws.connect().subscribe();
  }
  /**
   * Terminate connection, and mark as destroyed. To reconnect, create a new
   * instance of WalletSDKConnection
   */
  destroy() {
    var e;
    this.subscriptions.unsubscribe(), this.ws.disconnect(), (e = this.diagnostic) === null || e === void 0 || e.log(Yn.EVENTS.DISCONNECTED, {
      sessionIdHash: Qn.Session.hash(this.sessionId)
    }), this.destroyed = !0;
  }
  get isDestroyed() {
    return this.destroyed;
  }
  /**
   * Emit true if connected and authenticated, else false
   * @returns an Observable
   */
  get connected$() {
    return this.connectedSubject.asObservable();
  }
  /**
   * Emit once connected
   * @returns an Observable
   */
  get onceConnected$() {
    return this.connected$.pipe((0, he.filter)((e) => e), (0, he.take)(1), (0, he.map)(() => {
    }));
  }
  /**
   * Emit true if linked (a guest has joined before)
   * @returns an Observable
   */
  get linked$() {
    return this.linkedSubject.asObservable();
  }
  /**
   * Emit once when linked
   * @returns an Observable
   */
  get onceLinked$() {
    return this.linked$.pipe((0, he.filter)((e) => e), (0, he.take)(1), (0, he.map)(() => {
    }));
  }
  /**
   * Emit current session config if available, and subsequent updates
   * @returns an Observable for the session config
   */
  get sessionConfig$() {
    return this.sessionConfigSubject.asObservable();
  }
  /**
   * Emit incoming Event messages
   * @returns an Observable for the messages
   */
  get incomingEvent$() {
    return this.ws.incomingJSONData$.pipe((0, he.filter)((e) => {
      if (e.type !== "Event")
        return !1;
      const r = e;
      return typeof r.sessionId == "string" && typeof r.eventId == "string" && typeof r.event == "string" && typeof r.data == "string";
    }), (0, he.map)((e) => e));
  }
  /**
   * Set session metadata in SessionConfig object
   * @param key
   * @param value
   * @returns an Observable that completes when successful
   */
  setSessionMetadata(e, r) {
    const n = (0, Zn.ClientMessageSetSessionConfig)({
      id: (0, nn.IntNumber)(this.nextReqId++),
      sessionId: this.sessionId,
      metadata: { [e]: r }
    });
    return this.onceConnected$.pipe((0, he.flatMap)((i) => this.makeRequest(n)), (0, he.map)((i) => {
      if ((0, Ka.isServerMessageFail)(i))
        throw new Error(i.error || "failed to set session metadata");
    }));
  }
  /**
   * Publish an event and emit event ID when successful
   * @param event event name
   * @param data event data
   * @param callWebhook whether the webhook should be invoked
   * @returns an Observable that emits event ID when successful
   */
  publishEvent(e, r, n = !1) {
    const i = (0, Zn.ClientMessagePublishEvent)({
      id: (0, nn.IntNumber)(this.nextReqId++),
      sessionId: this.sessionId,
      event: e,
      data: r,
      callWebhook: n
    });
    return this.onceLinked$.pipe((0, he.flatMap)((s) => this.makeRequest(i)), (0, he.map)((s) => {
      if ((0, Ka.isServerMessageFail)(s))
        throw new Error(s.error || "failed to publish event");
      return s.eventId;
    }));
  }
  sendData(e) {
    this.ws.sendData(JSON.stringify(e));
  }
  updateLastHeartbeat() {
    this.lastHeartbeatResponse = Date.now();
  }
  heartbeat() {
    if (Date.now() - this.lastHeartbeatResponse > Kf * 2) {
      this.ws.disconnect();
      return;
    }
    try {
      this.ws.sendData("h");
    } catch {
    }
  }
  makeRequest(e, r = TR) {
    const n = e.id;
    try {
      this.sendData(e);
    } catch (i) {
      return (0, It.throwError)(i);
    }
    return this.ws.incomingJSONData$.pipe((0, he.timeoutWith)(r, (0, It.throwError)(new Error(`request ${n} timed out`))), (0, he.filter)((i) => i.id === n), (0, he.take)(1));
  }
  authenticate() {
    const e = (0, Zn.ClientMessageHostSession)({
      id: (0, nn.IntNumber)(this.nextReqId++),
      sessionId: this.sessionId,
      sessionKey: this.sessionKey
    });
    return this.makeRequest(e).pipe((0, he.map)((r) => {
      if ((0, Ka.isServerMessageFail)(r))
        throw new Error(r.error || "failed to authentcate");
    }));
  }
  sendIsLinked() {
    const e = (0, Zn.ClientMessageIsLinked)({
      id: (0, nn.IntNumber)(this.nextReqId++),
      sessionId: this.sessionId
    });
    this.sendData(e);
  }
  sendGetSessionConfig() {
    const e = (0, Zn.ClientMessageGetSessionConfig)({
      id: (0, nn.IntNumber)(this.nextReqId++),
      sessionId: this.sessionId
    });
    this.sendData(e);
  }
}
mo.WalletSDKConnection = MR;
var Tn = {};
Object.defineProperty(Tn, "__esModule", { value: !0 });
Tn.decrypt = Tn.encrypt = void 0;
const ys = Z;
async function OR(t, e) {
  if (e.length !== 64)
    throw Error("secret must be 256 bits");
  const r = crypto.getRandomValues(new Uint8Array(12)), n = await crypto.subtle.importKey("raw", (0, ys.hexStringToUint8Array)(e), { name: "aes-gcm" }, !1, ["encrypt", "decrypt"]), i = new TextEncoder(), s = await window.crypto.subtle.encrypt({
    name: "AES-GCM",
    iv: r
  }, n, i.encode(t)), o = 16, a = s.slice(s.byteLength - o), c = s.slice(0, s.byteLength - o), u = new Uint8Array(a), h = new Uint8Array(c), d = new Uint8Array([
    ...r,
    ...u,
    ...h
  ]);
  return (0, ys.uint8ArrayToHex)(d);
}
Tn.encrypt = OR;
function kR(t, e) {
  if (e.length !== 64)
    throw Error("secret must be 256 bits");
  return new Promise((r, n) => {
    (async function() {
      const i = await crypto.subtle.importKey("raw", (0, ys.hexStringToUint8Array)(e), { name: "aes-gcm" }, !1, ["encrypt", "decrypt"]), s = (0, ys.hexStringToUint8Array)(t), o = s.slice(0, 12), a = s.slice(12, 28), c = s.slice(28), u = new Uint8Array([
        ...c,
        ...a
      ]), h = {
        name: "AES-GCM",
        iv: new Uint8Array(o)
      };
      try {
        const d = await window.crypto.subtle.decrypt(h, i, u), p = new TextDecoder();
        r(p.decode(d));
      } catch (d) {
        n(d);
      }
    })();
  });
}
Tn.decrypt = kR;
var wo = {}, _o = {};
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.RelayMessageType = void 0, function(e) {
    e.SESSION_ID_REQUEST = "SESSION_ID_REQUEST", e.SESSION_ID_RESPONSE = "SESSION_ID_RESPONSE", e.LINKED = "LINKED", e.UNLINKED = "UNLINKED", e.WEB3_REQUEST = "WEB3_REQUEST", e.WEB3_REQUEST_CANCELED = "WEB3_REQUEST_CANCELED", e.WEB3_RESPONSE = "WEB3_RESPONSE";
  }(t.RelayMessageType || (t.RelayMessageType = {}));
})(_o);
Object.defineProperty(wo, "__esModule", { value: !0 });
wo.Web3RequestCanceledMessage = void 0;
const NR = _o;
function LR(t) {
  return { type: NR.RelayMessageType.WEB3_REQUEST_CANCELED, id: t };
}
wo.Web3RequestCanceledMessage = LR;
var Eo = {};
Object.defineProperty(Eo, "__esModule", { value: !0 });
Eo.Web3RequestMessage = void 0;
const PR = _o;
function BR(t) {
  return Object.assign({ type: PR.RelayMessageType.WEB3_REQUEST }, t);
}
Eo.Web3RequestMessage = BR;
var Mn = {};
Object.defineProperty(Mn, "__esModule", { value: !0 });
Mn.isWeb3ResponseMessage = Mn.Web3ResponseMessage = void 0;
const x0 = _o;
function $R(t) {
  return Object.assign({ type: x0.RelayMessageType.WEB3_RESPONSE }, t);
}
Mn.Web3ResponseMessage = $R;
function DR(t) {
  return t && t.type === x0.RelayMessageType.WEB3_RESPONSE;
}
Mn.isWeb3ResponseMessage = DR;
var FR = G && G.__createBinding || (Object.create ? function(t, e, r, n) {
  n === void 0 && (n = r), Object.defineProperty(t, n, { enumerable: !0, get: function() {
    return e[r];
  } });
} : function(t, e, r, n) {
  n === void 0 && (n = r), t[n] = e[r];
}), jR = G && G.__setModuleDefault || (Object.create ? function(t, e) {
  Object.defineProperty(t, "default", { enumerable: !0, value: e });
} : function(t, e) {
  t.default = e;
}), C0 = G && G.__decorate || function(t, e, r, n) {
  var i = arguments.length, s = i < 3 ? e : n === null ? n = Object.getOwnPropertyDescriptor(e, r) : n, o;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    s = Reflect.decorate(t, e, r, n);
  else
    for (var a = t.length - 1; a >= 0; a--)
      (o = t[a]) && (s = (i < 3 ? o(s) : i > 3 ? o(e, r, s) : o(e, r)) || s);
  return i > 3 && s && Object.defineProperty(e, r, s), s;
}, UR = G && G.__importStar || function(t) {
  if (t && t.__esModule)
    return t;
  var e = {};
  if (t != null)
    for (var r in t)
      r !== "default" && Object.prototype.hasOwnProperty.call(t, r) && FR(e, t, r);
  return jR(e, t), e;
}, WR = G && G.__importDefault || function(t) {
  return t && t.__esModule ? t : { default: t };
};
Object.defineProperty(po, "__esModule", { value: !0 });
po.WalletSDKRelay = void 0;
const I0 = WR(go), Rr = eo, Be = Pu, Ye = On, VR = mo, sn = hi, HR = vi, Re = Z, ur = UR(Tn), lr = Nn, Yi = Mt, ze = Ss, zR = wo, qR = Eo, gt = Ie, ot = Mn;
class Tt extends Yi.WalletSDKRelayAbstract {
  constructor(e) {
    var r;
    super(), this.accountsCallback = null, this.chainCallback = null, this.dappDefaultChainSubject = new Rr.BehaviorSubject(1), this.dappDefaultChain = 1, this.appName = "", this.appLogoUrl = null, this.subscriptions = new Rr.Subscription(), this.linkAPIUrl = e.linkAPIUrl, this.storage = e.storage, this.options = e;
    const { session: n, ui: i, connection: s } = this.subscribe();
    if (this._session = n, this.connection = s, this.relayEventManager = e.relayEventManager, e.diagnosticLogger && e.eventListener)
      throw new Error("Can't have both eventListener and diagnosticLogger options, use only diagnosticLogger");
    e.eventListener ? this.diagnostic = {
      // eslint-disable-next-line @typescript-eslint/unbound-method
      log: e.eventListener.onEvent
    } : this.diagnostic = e.diagnosticLogger, this._reloadOnDisconnect = (r = e.reloadOnDisconnect) !== null && r !== void 0 ? r : !0, this.ui = i;
  }
  subscribe() {
    this.subscriptions.add(this.dappDefaultChainSubject.subscribe((i) => {
      this.dappDefaultChain !== i && (this.dappDefaultChain = i);
    }));
    const e = lr.Session.load(this.storage) || new lr.Session(this.storage).save(), r = new VR.WalletSDKConnection(e.id, e.key, this.linkAPIUrl, this.diagnostic);
    this.subscriptions.add(r.sessionConfig$.subscribe({
      next: (i) => {
        this.onSessionConfigChanged(i);
      },
      error: () => {
        var i;
        (i = this.diagnostic) === null || i === void 0 || i.log(Ye.EVENTS.GENERAL_ERROR, {
          message: "error while invoking session config callback"
        });
      }
    })), this.subscriptions.add(r.incomingEvent$.pipe((0, Be.filter)((i) => i.event === "Web3Response")).subscribe({ next: this.handleIncomingEvent })), this.subscriptions.add(r.linked$.pipe((0, Be.skip)(1), (0, Be.tap)((i) => {
      var s;
      this.isLinked = i;
      const o = this.storage.getItem(Yi.LOCAL_STORAGE_ADDRESSES_KEY);
      if (i && (this.session.linked = i), this.isUnlinkedErrorState = !1, o) {
        const a = o.split(" "), c = this.storage.getItem("IsStandaloneSigning") === "true";
        if (a[0] !== "" && !i && this.session.linked && !c) {
          this.isUnlinkedErrorState = !0;
          const u = this.getSessionIdHash();
          (s = this.diagnostic) === null || s === void 0 || s.log(Ye.EVENTS.UNLINKED_ERROR_STATE, {
            sessionIdHash: u
          });
        }
      }
    })).subscribe()), this.subscriptions.add(r.sessionConfig$.pipe((0, Be.filter)((i) => !!i.metadata && i.metadata.__destroyed === "1")).subscribe(() => {
      var i;
      const s = r.isDestroyed;
      return (i = this.diagnostic) === null || i === void 0 || i.log(Ye.EVENTS.METADATA_DESTROYED, {
        alreadyDestroyed: s,
        sessionIdHash: this.getSessionIdHash()
      }), this.resetAndReload();
    })), this.subscriptions.add(r.sessionConfig$.pipe((0, Be.filter)((i) => i.metadata && i.metadata.WalletUsername !== void 0)).pipe((0, Be.mergeMap)((i) => ur.decrypt(i.metadata.WalletUsername, e.secret))).subscribe({
      next: (i) => {
        this.storage.setItem(Yi.WALLET_USER_NAME_KEY, i);
      },
      error: () => {
        var i;
        (i = this.diagnostic) === null || i === void 0 || i.log(Ye.EVENTS.GENERAL_ERROR, {
          message: "Had error decrypting",
          value: "username"
        });
      }
    })), this.subscriptions.add(r.sessionConfig$.pipe((0, Be.filter)((i) => i.metadata && i.metadata.AppVersion !== void 0)).pipe((0, Be.mergeMap)((i) => ur.decrypt(i.metadata.AppVersion, e.secret))).subscribe({
      next: (i) => {
        this.storage.setItem(Yi.APP_VERSION_KEY, i);
      },
      error: () => {
        var i;
        (i = this.diagnostic) === null || i === void 0 || i.log(Ye.EVENTS.GENERAL_ERROR, {
          message: "Had error decrypting",
          value: "appversion"
        });
      }
    })), this.subscriptions.add(r.sessionConfig$.pipe((0, Be.filter)((i) => i.metadata && i.metadata.ChainId !== void 0 && i.metadata.JsonRpcUrl !== void 0)).pipe((0, Be.mergeMap)((i) => (0, Rr.zip)(ur.decrypt(i.metadata.ChainId, e.secret), ur.decrypt(i.metadata.JsonRpcUrl, e.secret)))).pipe((0, Be.distinctUntilChanged)()).subscribe({
      next: ([i, s]) => {
        this.chainCallback && this.chainCallback(i, s);
      },
      error: () => {
        var i;
        (i = this.diagnostic) === null || i === void 0 || i.log(Ye.EVENTS.GENERAL_ERROR, {
          message: "Had error decrypting",
          value: "chainId|jsonRpcUrl"
        });
      }
    })), this.subscriptions.add(r.sessionConfig$.pipe((0, Be.filter)((i) => i.metadata && i.metadata.EthereumAddress !== void 0)).pipe((0, Be.mergeMap)((i) => ur.decrypt(i.metadata.EthereumAddress, e.secret))).subscribe({
      next: (i) => {
        this.accountsCallback && this.accountsCallback([i]), Tt.accountRequestCallbackIds.size > 0 && (Array.from(Tt.accountRequestCallbackIds.values()).forEach((s) => {
          const o = (0, ot.Web3ResponseMessage)({
            id: s,
            response: (0, gt.RequestEthereumAccountsResponse)([
              i
            ])
          });
          this.invokeCallback(Object.assign(Object.assign({}, o), { id: s }));
        }), Tt.accountRequestCallbackIds.clear());
      },
      error: () => {
        var i;
        (i = this.diagnostic) === null || i === void 0 || i.log(Ye.EVENTS.GENERAL_ERROR, {
          message: "Had error decrypting",
          value: "selectedAddress"
        });
      }
    })), this.subscriptions.add(r.sessionConfig$.pipe((0, Be.filter)((i) => i.metadata && i.metadata.AppSrc !== void 0)).pipe((0, Be.mergeMap)((i) => ur.decrypt(i.metadata.AppSrc, e.secret))).subscribe({
      next: (i) => {
        this.ui.setAppSrc(i);
      },
      error: () => {
        var i;
        (i = this.diagnostic) === null || i === void 0 || i.log(Ye.EVENTS.GENERAL_ERROR, {
          message: "Had error decrypting",
          value: "appSrc"
        });
      }
    }));
    const n = this.options.uiConstructor({
      linkAPIUrl: this.options.linkAPIUrl,
      version: this.options.version,
      darkMode: this.options.darkMode,
      session: e,
      connected$: r.connected$,
      chainId$: this.dappDefaultChainSubject
    });
    return r.connect(), { session: e, ui: n, connection: r };
  }
  attachUI() {
    this.ui.attach();
  }
  resetAndReload() {
    this.connection.setSessionMetadata("__destroyed", "1").pipe((0, Be.timeout)(1e3), (0, Be.catchError)((e) => (0, Rr.of)(null))).subscribe((e) => {
      var r, n, i;
      const s = this.ui.isStandalone();
      try {
        this.subscriptions.unsubscribe();
      } catch {
        (r = this.diagnostic) === null || r === void 0 || r.log(Ye.EVENTS.GENERAL_ERROR, {
          message: "Had error unsubscribing"
        });
      }
      (n = this.diagnostic) === null || n === void 0 || n.log(Ye.EVENTS.SESSION_STATE_CHANGE, {
        method: "relay::resetAndReload",
        sessionMetadataChange: "__destroyed, 1",
        sessionIdHash: this.getSessionIdHash()
      }), this.connection.destroy();
      const o = lr.Session.load(this.storage);
      if ((o == null ? void 0 : o.id) === this._session.id ? this.storage.clear() : o && ((i = this.diagnostic) === null || i === void 0 || i.log(Ye.EVENTS.SKIPPED_CLEARING_SESSION, {
        sessionIdHash: this.getSessionIdHash(),
        storedSessionIdHash: lr.Session.hash(o.id)
      })), this._reloadOnDisconnect) {
        this.ui.reloadUI();
        return;
      }
      this.accountsCallback && this.accountsCallback([], !0), this.subscriptions = new Rr.Subscription();
      const { session: a, ui: c, connection: u } = this.subscribe();
      this._session = a, this.connection = u, this.ui = c, s && this.ui.setStandalone && this.ui.setStandalone(!0), this.attachUI();
    }, (e) => {
      var r;
      (r = this.diagnostic) === null || r === void 0 || r.log(Ye.EVENTS.FAILURE, {
        method: "relay::resetAndReload",
        message: `failed to reset and reload with ${e}`,
        sessionIdHash: this.getSessionIdHash()
      });
    });
  }
  setAppInfo(e, r) {
    this.appName = e, this.appLogoUrl = r;
  }
  getStorageItem(e) {
    return this.storage.getItem(e);
  }
  get session() {
    return this._session;
  }
  setStorageItem(e, r) {
    this.storage.setItem(e, r);
  }
  signEthereumMessage(e, r, n, i) {
    return this.sendRequest({
      method: ze.Web3Method.signEthereumMessage,
      params: {
        message: (0, Re.hexStringFromBuffer)(e, !0),
        address: r,
        addPrefix: n,
        typedDataJson: i || null
      }
    });
  }
  ethereumAddressFromSignedMessage(e, r, n) {
    return this.sendRequest({
      method: ze.Web3Method.ethereumAddressFromSignedMessage,
      params: {
        message: (0, Re.hexStringFromBuffer)(e, !0),
        signature: (0, Re.hexStringFromBuffer)(r, !0),
        addPrefix: n
      }
    });
  }
  signEthereumTransaction(e) {
    return this.sendRequest({
      method: ze.Web3Method.signEthereumTransaction,
      params: {
        fromAddress: e.fromAddress,
        toAddress: e.toAddress,
        weiValue: (0, Re.bigIntStringFromBN)(e.weiValue),
        data: (0, Re.hexStringFromBuffer)(e.data, !0),
        nonce: e.nonce,
        gasPriceInWei: e.gasPriceInWei ? (0, Re.bigIntStringFromBN)(e.gasPriceInWei) : null,
        maxFeePerGas: e.gasPriceInWei ? (0, Re.bigIntStringFromBN)(e.gasPriceInWei) : null,
        maxPriorityFeePerGas: e.gasPriceInWei ? (0, Re.bigIntStringFromBN)(e.gasPriceInWei) : null,
        gasLimit: e.gasLimit ? (0, Re.bigIntStringFromBN)(e.gasLimit) : null,
        chainId: e.chainId,
        shouldSubmit: !1
      }
    });
  }
  signAndSubmitEthereumTransaction(e) {
    return this.sendRequest({
      method: ze.Web3Method.signEthereumTransaction,
      params: {
        fromAddress: e.fromAddress,
        toAddress: e.toAddress,
        weiValue: (0, Re.bigIntStringFromBN)(e.weiValue),
        data: (0, Re.hexStringFromBuffer)(e.data, !0),
        nonce: e.nonce,
        gasPriceInWei: e.gasPriceInWei ? (0, Re.bigIntStringFromBN)(e.gasPriceInWei) : null,
        maxFeePerGas: e.maxFeePerGas ? (0, Re.bigIntStringFromBN)(e.maxFeePerGas) : null,
        maxPriorityFeePerGas: e.maxPriorityFeePerGas ? (0, Re.bigIntStringFromBN)(e.maxPriorityFeePerGas) : null,
        gasLimit: e.gasLimit ? (0, Re.bigIntStringFromBN)(e.gasLimit) : null,
        chainId: e.chainId,
        shouldSubmit: !0
      }
    });
  }
  submitEthereumTransaction(e, r) {
    return this.sendRequest({
      method: ze.Web3Method.submitEthereumTransaction,
      params: {
        signedTransaction: (0, Re.hexStringFromBuffer)(e, !0),
        chainId: r
      }
    });
  }
  scanQRCode(e) {
    return this.sendRequest({
      method: ze.Web3Method.scanQRCode,
      params: { regExp: e }
    });
  }
  getQRCodeUrl() {
    return (0, Re.createQrUrl)(this._session.id, this._session.secret, this.linkAPIUrl, !1, this.options.version, this.dappDefaultChain);
  }
  genericRequest(e, r) {
    return this.sendRequest({
      method: ze.Web3Method.generic,
      params: {
        action: r,
        data: e
      }
    });
  }
  sendGenericMessage(e) {
    return this.sendRequest(e);
  }
  sendRequest(e) {
    let r = null;
    const n = (0, Re.randomBytesHex)(8), i = (o) => {
      this.publishWeb3RequestCanceledEvent(n), this.handleErrorResponse(n, e.method, o), r == null || r();
    };
    return { promise: new Promise((o, a) => {
      this.ui.isStandalone() || (r = this.ui.showConnecting({
        isUnlinkedErrorState: this.isUnlinkedErrorState,
        onCancel: i,
        onResetConnection: this.resetAndReload
        // eslint-disable-line @typescript-eslint/unbound-method
      })), this.relayEventManager.callbacks.set(n, (c) => {
        if (r == null || r(), c.errorMessage)
          return a(new Error(c.errorMessage));
        o(c);
      }), this.ui.isStandalone() ? this.sendRequestStandalone(n, e) : this.publishWeb3RequestEvent(n, e);
    }), cancel: i };
  }
  setConnectDisabled(e) {
    this.ui.setConnectDisabled(e);
  }
  setAccountsCallback(e) {
    this.accountsCallback = e;
  }
  setChainCallback(e) {
    this.chainCallback = e;
  }
  setDappDefaultChainCallback(e) {
    this.dappDefaultChainSubject.next(e);
  }
  publishWeb3RequestEvent(e, r) {
    var n;
    const i = (0, qR.Web3RequestMessage)({ id: e, request: r }), s = lr.Session.load(this.storage);
    (n = this.diagnostic) === null || n === void 0 || n.log(Ye.EVENTS.WEB3_REQUEST, {
      eventId: i.id,
      method: `relay::${i.request.method}`,
      sessionIdHash: this.getSessionIdHash(),
      storedSessionIdHash: s ? lr.Session.hash(s.id) : "",
      isSessionMismatched: ((s == null ? void 0 : s.id) !== this._session.id).toString()
    }), this.subscriptions.add(this.publishEvent("Web3Request", i, !0).subscribe({
      next: (o) => {
        var a;
        (a = this.diagnostic) === null || a === void 0 || a.log(Ye.EVENTS.WEB3_REQUEST_PUBLISHED, {
          eventId: i.id,
          method: `relay::${i.request.method}`,
          sessionIdHash: this.getSessionIdHash(),
          storedSessionIdHash: s ? lr.Session.hash(s.id) : "",
          isSessionMismatched: ((s == null ? void 0 : s.id) !== this._session.id).toString()
        });
      },
      error: (o) => {
        this.handleWeb3ResponseMessage((0, ot.Web3ResponseMessage)({
          id: i.id,
          response: {
            method: i.request.method,
            errorMessage: o.message
          }
        }));
      }
    }));
  }
  publishWeb3RequestCanceledEvent(e) {
    const r = (0, zR.Web3RequestCanceledMessage)(e);
    this.subscriptions.add(this.publishEvent("Web3RequestCanceled", r, !1).subscribe());
  }
  publishEvent(e, r, n) {
    const i = this.session.secret;
    return new Rr.Observable((s) => {
      ur.encrypt(JSON.stringify(Object.assign(Object.assign({}, r), { origin: location.origin })), i).then((o) => {
        s.next(o), s.complete();
      });
    }).pipe((0, Be.mergeMap)((s) => this.connection.publishEvent(e, s, n)));
  }
  handleIncomingEvent(e) {
    try {
      this.subscriptions.add((0, Rr.from)(ur.decrypt(e.data, this.session.secret)).pipe((0, Be.map)((r) => JSON.parse(r))).subscribe({
        next: (r) => {
          const n = (0, ot.isWeb3ResponseMessage)(r) ? r : null;
          n && this.handleWeb3ResponseMessage(n);
        },
        error: () => {
          var r;
          (r = this.diagnostic) === null || r === void 0 || r.log(Ye.EVENTS.GENERAL_ERROR, {
            message: "Had error decrypting",
            value: "incomingEvent"
          });
        }
      }));
    } catch {
      return;
    }
  }
  handleWeb3ResponseMessage(e) {
    var r;
    const { response: n } = e;
    if ((r = this.diagnostic) === null || r === void 0 || r.log(Ye.EVENTS.WEB3_RESPONSE, {
      eventId: e.id,
      method: `relay::${n.method}`,
      sessionIdHash: this.getSessionIdHash()
    }), (0, gt.isRequestEthereumAccountsResponse)(n)) {
      Tt.accountRequestCallbackIds.forEach((i) => this.invokeCallback(Object.assign(Object.assign({}, e), { id: i }))), Tt.accountRequestCallbackIds.clear();
      return;
    }
    this.invokeCallback(e);
  }
  handleErrorResponse(e, r, n, i) {
    var s;
    const o = (s = n == null ? void 0 : n.message) !== null && s !== void 0 ? s : (0, sn.standardErrorMessage)(i);
    this.handleWeb3ResponseMessage((0, ot.Web3ResponseMessage)({
      id: e,
      response: {
        method: r,
        errorMessage: o,
        errorCode: i
      }
    }));
  }
  invokeCallback(e) {
    const r = this.relayEventManager.callbacks.get(e.id);
    r && (r(e.response), this.relayEventManager.callbacks.delete(e.id));
  }
  requestEthereumAccounts() {
    const e = {
      method: ze.Web3Method.requestEthereumAccounts,
      params: {
        appName: this.appName,
        appLogoUrl: this.appLogoUrl || null
      }
    }, r = (0, Re.randomBytesHex)(8), n = (s) => {
      this.publishWeb3RequestCanceledEvent(r), this.handleErrorResponse(r, e.method, s);
    };
    return { promise: new Promise((s, o) => {
      var a;
      this.relayEventManager.callbacks.set(r, (u) => {
        if (this.ui.hideRequestEthereumAccounts(), u.errorMessage)
          return o(new Error(u.errorMessage));
        s(u);
      });
      const c = ((a = window == null ? void 0 : window.navigator) === null || a === void 0 ? void 0 : a.userAgent) || null;
      if (c && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(c)) {
        let u;
        try {
          (0, Re.isInIFrame)() && window.top ? u = window.top.location : u = window.location;
        } catch {
          u = window.location;
        }
        u.href = `https://www.coinbase.com/connect-dapp?uri=${encodeURIComponent(u.href)}`;
        return;
      }
      if (this.ui.inlineAccountsResponse()) {
        const u = (h) => {
          this.handleWeb3ResponseMessage((0, ot.Web3ResponseMessage)({
            id: r,
            response: (0, gt.RequestEthereumAccountsResponse)(h)
          }));
        };
        this.ui.requestEthereumAccounts({
          onCancel: n,
          onAccounts: u
        });
      } else {
        const u = sn.standardErrors.provider.userRejectedRequest("User denied account authorization");
        this.ui.requestEthereumAccounts({
          onCancel: () => n(u)
        });
      }
      Tt.accountRequestCallbackIds.add(r), !this.ui.inlineAccountsResponse() && !this.ui.isStandalone() && this.publishWeb3RequestEvent(r, e);
    }), cancel: n };
  }
  selectProvider(e) {
    const r = {
      method: ze.Web3Method.selectProvider,
      params: {
        providerOptions: e
      }
    }, n = (0, Re.randomBytesHex)(8), i = (o) => {
      this.publishWeb3RequestCanceledEvent(n), this.handleErrorResponse(n, r.method, o);
    }, s = new Promise((o, a) => {
      this.relayEventManager.callbacks.set(n, (h) => {
        if (h.errorMessage)
          return a(new Error(h.errorMessage));
        o(h);
      });
      const c = (h) => {
        this.handleWeb3ResponseMessage((0, ot.Web3ResponseMessage)({
          id: n,
          response: (0, gt.SelectProviderResponse)(HR.ProviderType.Unselected)
        }));
      }, u = (h) => {
        this.handleWeb3ResponseMessage((0, ot.Web3ResponseMessage)({
          id: n,
          response: (0, gt.SelectProviderResponse)(h)
        }));
      };
      this.ui.selectProvider && this.ui.selectProvider({
        onApprove: u,
        onCancel: c,
        providerOptions: e
      });
    });
    return { cancel: i, promise: s };
  }
  watchAsset(e, r, n, i, s, o) {
    const a = {
      method: ze.Web3Method.watchAsset,
      params: {
        type: e,
        options: {
          address: r,
          symbol: n,
          decimals: i,
          image: s
        },
        chainId: o
      }
    };
    let c = null;
    const u = (0, Re.randomBytesHex)(8), h = (p) => {
      this.publishWeb3RequestCanceledEvent(u), this.handleErrorResponse(u, a.method, p), c == null || c();
    };
    this.ui.inlineWatchAsset() || (c = this.ui.showConnecting({
      isUnlinkedErrorState: this.isUnlinkedErrorState,
      onCancel: h,
      onResetConnection: this.resetAndReload
      // eslint-disable-line @typescript-eslint/unbound-method
    }));
    const d = new Promise((p, v) => {
      this.relayEventManager.callbacks.set(u, (R) => {
        if (c == null || c(), R.errorMessage)
          return v(new Error(R.errorMessage));
        p(R);
      });
      const _ = (R) => {
        this.handleWeb3ResponseMessage((0, ot.Web3ResponseMessage)({
          id: u,
          response: (0, gt.WatchAssetReponse)(!1)
        }));
      }, A = () => {
        this.handleWeb3ResponseMessage((0, ot.Web3ResponseMessage)({
          id: u,
          response: (0, gt.WatchAssetReponse)(!0)
        }));
      };
      this.ui.inlineWatchAsset() && this.ui.watchAsset({
        onApprove: A,
        onCancel: _,
        type: e,
        address: r,
        symbol: n,
        decimals: i,
        image: s,
        chainId: o
      }), !this.ui.inlineWatchAsset() && !this.ui.isStandalone() && this.publishWeb3RequestEvent(u, a);
    });
    return { cancel: h, promise: d };
  }
  addEthereumChain(e, r, n, i, s, o) {
    const a = {
      method: ze.Web3Method.addEthereumChain,
      params: {
        chainId: e,
        rpcUrls: r,
        blockExplorerUrls: i,
        chainName: s,
        iconUrls: n,
        nativeCurrency: o
      }
    };
    let c = null;
    const u = (0, Re.randomBytesHex)(8), h = (p) => {
      this.publishWeb3RequestCanceledEvent(u), this.handleErrorResponse(u, a.method, p), c == null || c();
    };
    return this.ui.inlineAddEthereumChain(e) || (c = this.ui.showConnecting({
      isUnlinkedErrorState: this.isUnlinkedErrorState,
      onCancel: h,
      onResetConnection: this.resetAndReload
      // eslint-disable-line @typescript-eslint/unbound-method
    })), { promise: new Promise((p, v) => {
      this.relayEventManager.callbacks.set(u, (R) => {
        if (c == null || c(), R.errorMessage)
          return v(new Error(R.errorMessage));
        p(R);
      });
      const _ = (R) => {
        this.handleWeb3ResponseMessage((0, ot.Web3ResponseMessage)({
          id: u,
          response: (0, gt.AddEthereumChainResponse)({
            isApproved: !1,
            rpcUrl: ""
          })
        }));
      }, A = (R) => {
        this.handleWeb3ResponseMessage((0, ot.Web3ResponseMessage)({
          id: u,
          response: (0, gt.AddEthereumChainResponse)({ isApproved: !0, rpcUrl: R })
        }));
      };
      this.ui.inlineAddEthereumChain(e) && this.ui.addEthereumChain({
        onCancel: _,
        onApprove: A,
        chainId: a.params.chainId,
        rpcUrls: a.params.rpcUrls,
        blockExplorerUrls: a.params.blockExplorerUrls,
        chainName: a.params.chainName,
        iconUrls: a.params.iconUrls,
        nativeCurrency: a.params.nativeCurrency
      }), !this.ui.inlineAddEthereumChain(e) && !this.ui.isStandalone() && this.publishWeb3RequestEvent(u, a);
    }), cancel: h };
  }
  switchEthereumChain(e, r) {
    const n = {
      method: ze.Web3Method.switchEthereumChain,
      params: Object.assign({ chainId: e }, { address: r })
    }, i = (0, Re.randomBytesHex)(8), s = (a) => {
      this.publishWeb3RequestCanceledEvent(i), this.handleErrorResponse(i, n.method, a);
    };
    return { promise: new Promise((a, c) => {
      this.relayEventManager.callbacks.set(i, (d) => {
        if ((0, gt.isErrorResponse)(d) && d.errorCode)
          return c(sn.standardErrors.provider.custom({
            code: d.errorCode,
            message: "Unrecognized chain ID. Try adding the chain using addEthereumChain first."
          }));
        if (d.errorMessage)
          return c(new Error(d.errorMessage));
        a(d);
      });
      const u = (d) => {
        var p;
        if (d) {
          const v = (p = (0, sn.getErrorCode)(d)) !== null && p !== void 0 ? p : sn.standardErrorCodes.provider.unsupportedChain;
          this.handleErrorResponse(i, ze.Web3Method.switchEthereumChain, d instanceof Error ? d : sn.standardErrors.provider.unsupportedChain(e), v);
        } else
          this.handleWeb3ResponseMessage((0, ot.Web3ResponseMessage)({
            id: i,
            response: (0, gt.SwitchEthereumChainResponse)({
              isApproved: !1,
              rpcUrl: ""
            })
          }));
      }, h = (d) => {
        this.handleWeb3ResponseMessage((0, ot.Web3ResponseMessage)({
          id: i,
          response: (0, gt.SwitchEthereumChainResponse)({
            isApproved: !0,
            rpcUrl: d
          })
        }));
      };
      this.ui.switchEthereumChain({
        onCancel: u,
        onApprove: h,
        chainId: n.params.chainId,
        address: n.params.address
      }), !this.ui.inlineSwitchEthereumChain() && !this.ui.isStandalone() && this.publishWeb3RequestEvent(i, n);
    }), cancel: s };
  }
  inlineAddEthereumChain(e) {
    return this.ui.inlineAddEthereumChain(e);
  }
  getSessionIdHash() {
    return lr.Session.hash(this._session.id);
  }
  sendRequestStandalone(e, r) {
    const n = (s) => {
      this.handleErrorResponse(e, r.method, s);
    }, i = (s) => {
      this.handleWeb3ResponseMessage((0, ot.Web3ResponseMessage)({
        id: e,
        response: s
      }));
    };
    switch (r.method) {
      case ze.Web3Method.signEthereumMessage:
        this.ui.signEthereumMessage({
          request: r,
          onSuccess: i,
          onCancel: n
        });
        break;
      case ze.Web3Method.signEthereumTransaction:
        this.ui.signEthereumTransaction({
          request: r,
          onSuccess: i,
          onCancel: n
        });
        break;
      case ze.Web3Method.submitEthereumTransaction:
        this.ui.submitEthereumTransaction({
          request: r,
          onSuccess: i,
          onCancel: n
        });
        break;
      case ze.Web3Method.ethereumAddressFromSignedMessage:
        this.ui.ethereumAddressFromSignedMessage({
          request: r,
          onSuccess: i
        });
        break;
      default:
        n();
        break;
    }
  }
  onSessionConfigChanged(e) {
  }
}
Tt.accountRequestCallbackIds = /* @__PURE__ */ new Set();
C0([
  I0.default
], Tt.prototype, "resetAndReload", null);
C0([
  I0.default
], Tt.prototype, "handleIncomingEvent", null);
po.WalletSDKRelay = Tt;
var So = {};
Object.defineProperty(So, "__esModule", { value: !0 });
So.WalletSDKRelayEventManager = void 0;
const GR = Z;
class JR {
  constructor() {
    this._nextRequestId = 0, this.callbacks = /* @__PURE__ */ new Map();
  }
  makeRequestId() {
    this._nextRequestId = (this._nextRequestId + 1) % 2147483647;
    const e = this._nextRequestId, r = (0, GR.prepend0x)(e.toString(16));
    return this.callbacks.get(r) && this.callbacks.delete(r), e;
  }
}
So.WalletSDKRelayEventManager = JR;
Object.defineProperty(si, "__esModule", { value: !0 });
si.CoinbaseWalletSDK = void 0;
const QR = vs, ZR = ws, YR = _s, KR = bn, XR = Ys, e8 = po, t8 = So, r8 = Z, R0 = kn;
class xo {
  /**
   * Constructor
   * @param options Coinbase Wallet SDK constructor options
   */
  constructor(e) {
    var r, n, i;
    this._appName = "", this._appLogoUrl = null, this._relay = null, this._relayEventManager = null;
    const s = e.linkAPIUrl || ZR.LINK_API_URL;
    let o;
    if (e.uiConstructor ? o = e.uiConstructor : o = (u) => new XR.WalletSDKUI(u), typeof e.overrideIsMetaMask > "u" ? this._overrideIsMetaMask = !1 : this._overrideIsMetaMask = e.overrideIsMetaMask, this._overrideIsCoinbaseWallet = (r = e.overrideIsCoinbaseWallet) !== null && r !== void 0 ? r : !0, this._overrideIsCoinbaseBrowser = (n = e.overrideIsCoinbaseBrowser) !== null && n !== void 0 ? n : !1, e.diagnosticLogger && e.eventListener)
      throw new Error("Can't have both eventListener and diagnosticLogger options, use only diagnosticLogger");
    e.eventListener ? this._diagnosticLogger = {
      // eslint-disable-next-line @typescript-eslint/unbound-method
      log: e.eventListener.onEvent
    } : this._diagnosticLogger = e.diagnosticLogger, this._reloadOnDisconnect = (i = e.reloadOnDisconnect) !== null && i !== void 0 ? i : !0;
    const a = new URL(s), c = `${a.protocol}//${a.host}`;
    this._storage = new YR.ScopedLocalStorage(`-walletlink:${c}`), this._storage.setItem("version", xo.VERSION), !(this.walletExtension || this.coinbaseBrowser) && (this._relayEventManager = new t8.WalletSDKRelayEventManager(), this._relay = new e8.WalletSDKRelay({
      linkAPIUrl: s,
      version: R0.LIB_VERSION,
      darkMode: !!e.darkMode,
      uiConstructor: o,
      storage: this._storage,
      relayEventManager: this._relayEventManager,
      diagnosticLogger: this._diagnosticLogger,
      reloadOnDisconnect: this._reloadOnDisconnect
    }), this.setAppInfo(e.appName, e.appLogoUrl), !e.headlessMode && this._relay.attachUI());
  }
  /**
   * Create a Web3 Provider object
   * @param jsonRpcUrl Ethereum JSON RPC URL (Default: "")
   * @param chainId Ethereum Chain ID (Default: 1)
   * @returns A Web3 Provider
   */
  makeWeb3Provider(e = "", r = 1) {
    const n = this.walletExtension;
    if (n)
      return this.isCipherProvider(n) || n.setProviderInfo(e, r), this._reloadOnDisconnect === !1 && typeof n.disableReloadOnDisconnect == "function" && n.disableReloadOnDisconnect(), n;
    const i = this.coinbaseBrowser;
    if (i)
      return i;
    const s = this._relay;
    if (!s || !this._relayEventManager || !this._storage)
      throw new Error("Relay not initialized, should never happen");
    return e || s.setConnectDisabled(!0), new KR.CoinbaseWalletProvider({
      relayProvider: () => Promise.resolve(s),
      relayEventManager: this._relayEventManager,
      storage: this._storage,
      jsonRpcUrl: e,
      chainId: r,
      qrUrl: this.getQrUrl(),
      diagnosticLogger: this._diagnosticLogger,
      overrideIsMetaMask: this._overrideIsMetaMask,
      overrideIsCoinbaseWallet: this._overrideIsCoinbaseWallet,
      overrideIsCoinbaseBrowser: this._overrideIsCoinbaseBrowser
    });
  }
  /**
   * Set application information
   * @param appName Application name
   * @param appLogoUrl Application logo image URL
   */
  setAppInfo(e, r) {
    var n;
    this._appName = e || "DApp", this._appLogoUrl = r || (0, r8.getFavicon)();
    const i = this.walletExtension;
    i ? this.isCipherProvider(i) || i.setAppInfo(this._appName, this._appLogoUrl) : (n = this._relay) === null || n === void 0 || n.setAppInfo(this._appName, this._appLogoUrl);
  }
  /**
   * Disconnect. After disconnecting, this will reload the web page to ensure
   * all potential stale state is cleared.
   */
  disconnect() {
    var e;
    const r = this.walletExtension;
    r ? r.close() : (e = this._relay) === null || e === void 0 || e.resetAndReload();
  }
  /**
   * Return QR URL for mobile wallet connection, will return null if extension is installed
   */
  getQrUrl() {
    var e, r;
    return (r = (e = this._relay) === null || e === void 0 ? void 0 : e.getQRCodeUrl()) !== null && r !== void 0 ? r : null;
  }
  /**
   * Official Coinbase Wallet logo for developers to use on their frontend
   * @param type Type of wallet logo: "standard" | "circle" | "text" | "textWithLogo" | "textLight" | "textWithLogoLight"
   * @param width Width of the logo (Optional)
   * @returns SVG Data URI
   */
  getCoinbaseWalletLogo(e, r = 240) {
    return (0, QR.walletLogo)(e, r);
  }
  get walletExtension() {
    var e;
    return (e = window.coinbaseWalletExtension) !== null && e !== void 0 ? e : window.walletLinkExtension;
  }
  get coinbaseBrowser() {
    var e, r;
    try {
      const n = (e = window.ethereum) !== null && e !== void 0 ? e : (r = window.top) === null || r === void 0 ? void 0 : r.ethereum;
      return n && "isCoinbaseBrowser" in n && n.isCoinbaseBrowser ? n : void 0;
    } catch {
      return;
    }
  }
  isCipherProvider(e) {
    return typeof e.isCipher == "boolean" && e.isCipher;
  }
}
si.CoinbaseWalletSDK = xo;
xo.VERSION = R0.LIB_VERSION;
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.CoinbaseWalletProvider = t.CoinbaseWalletSDK = void 0;
  const e = si, r = bn;
  var n = si;
  Object.defineProperty(t, "CoinbaseWalletSDK", { enumerable: !0, get: function() {
    return n.CoinbaseWalletSDK;
  } });
  var i = bn;
  Object.defineProperty(t, "CoinbaseWalletProvider", { enumerable: !0, get: function() {
    return i.CoinbaseWalletProvider;
  } }), t.default = e.CoinbaseWalletSDK, typeof window < "u" && (window.CoinbaseWalletSDK = e.CoinbaseWalletSDK, window.CoinbaseWalletProvider = r.CoinbaseWalletProvider, window.WalletLink = e.CoinbaseWalletSDK, window.WalletLinkProvider = r.CoinbaseWalletProvider);
})(Xf);
const n8 = /* @__PURE__ */ A0(Xf), b8 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: n8
}, Symbol.toStringTag, { value: "Module" }));
export {
  b8 as i
};
