// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        globalObject
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"9mu7C":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "890e741a975ef6c8";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , disposedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && ![
        'localhost',
        '127.0.0.1',
        '0.0.0.0'
    ].includes(hostname) ? 'wss' : 'ws';
    var ws;
    if (HMR_USE_SSE) ws = new EventSource('/__parcel_hmr');
    else try {
        ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === 'undefined' ? typeof chrome === 'undefined' ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes('test.js');
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        disposedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === 'reload') fullReload();
        else if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') window.dispatchEvent(new CustomEvent('parcelhmraccept'));
                await hmrApplyUpdates(assets);
                hmrDisposeQueue();
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                let processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, '') : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + '</div>').join('')}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ''}
      </div>
    `;
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ('reload' in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute('href');
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', // $FlowFixMe
    href.split('?')[0] + '?' + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === 'js') {
        if (typeof document !== 'undefined') {
            let script = document.createElement('script');
            script.src = asset.url + '?t=' + Date.now();
            if (asset.outputFormat === 'esmodule') script.type = 'module';
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === 'function') {
            // Worker scripts
            if (asset.outputFormat === 'esmodule') return import(asset.url + '?t=' + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + '?t=' + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != 'undefined' && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        }
        // Always traverse to the parent bundle, even if we already replaced the asset in this bundle.
        // This is required in case modules are duplicated. We need to ensure all instances have the updated code.
        if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDisposeQueue() {
    // Dispose all old assets.
    for(let i = 0; i < assetsToDispose.length; i++){
        let id = assetsToDispose[i][1];
        if (!disposedAssets[id]) {
            hmrDispose(assetsToDispose[i][0], id);
            disposedAssets[id] = true;
        }
    }
    assetsToDispose = [];
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        let assetsToAlsoAccept = [];
        cached.hot._acceptCallbacks.forEach(function(cb) {
            let additionalAssets = cb(function() {
                return getParents(module.bundle.root, id);
            });
            if (Array.isArray(additionalAssets) && additionalAssets.length) assetsToAlsoAccept.push(...additionalAssets);
        });
        if (assetsToAlsoAccept.length) {
            let handled = assetsToAlsoAccept.every(function(a) {
                return hmrAcceptCheck(a[0], a[1]);
            });
            if (!handled) return fullReload();
            hmrDisposeQueue();
        }
    }
}

},{}],"8lqZg":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _izitoast = require("izitoast");
var _izitoastDefault = parcelHelpers.interopDefault(_izitoast);
var _simplelightbox = require("simplelightbox");
var _simplelightboxDefault = parcelHelpers.interopDefault(_simplelightbox);
var _iziToastMinCss = require("izitoast/dist/css/iziToast.min.css");
var _simpleLightboxMinCss = require("simplelightbox/dist/simple-lightbox.min.css");
var _createMarkupJs = require("./js/createMarkup.js");
var _getImegesJs = require("./js/getImeges.js");
var _appJs = require("./js/app.js");

},{"izitoast":"ftHqY","simplelightbox":"9ydBq","izitoast/dist/css/iziToast.min.css":"1MVRB","simplelightbox/dist/simple-lightbox.min.css":"kaxSc","./js/createMarkup.js":"dMjm4","./js/getImeges.js":"amBGP","./js/app.js":"8lRBv","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ftHqY":[function(require,module,exports,__globalThis) {
var global = arguments[3];
/*
* iziToast | v1.4.0
* http://izitoast.marcelodolce.com
* by Marcelo Dolce.
*/ (function(root, factory) {
    if (typeof define === 'function' && define.amd) define([], factory(root));
    else module.exports = factory(root);
})(typeof global !== 'undefined' ? global : window || this.window || this.global, function(root) {
    'use strict';
    //
    // Variables
    //
    var $iziToast = {}, PLUGIN_NAME = 'iziToast', BODY = document.querySelector('body'), ISMOBILE = /Mobi/.test(navigator.userAgent) ? true : false, ISCHROME = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor), ISFIREFOX = typeof InstallTrigger !== 'undefined', ACCEPTSTOUCH = 'ontouchstart' in document.documentElement, POSITIONS = [
        'bottomRight',
        'bottomLeft',
        'bottomCenter',
        'topRight',
        'topLeft',
        'topCenter',
        'center'
    ], THEMES = {
        info: {
            color: 'blue',
            icon: 'ico-info'
        },
        success: {
            color: 'green',
            icon: 'ico-success'
        },
        warning: {
            color: 'orange',
            icon: 'ico-warning'
        },
        error: {
            color: 'red',
            icon: 'ico-error'
        },
        question: {
            color: 'yellow',
            icon: 'ico-question'
        }
    }, MOBILEWIDTH = 568, CONFIG = {};
    $iziToast.children = {};
    // Default settings
    var defaults = {
        id: null,
        class: '',
        title: '',
        titleColor: '',
        titleSize: '',
        titleLineHeight: '',
        message: '',
        messageColor: '',
        messageSize: '',
        messageLineHeight: '',
        backgroundColor: '',
        theme: 'light',
        color: '',
        icon: '',
        iconText: '',
        iconColor: '',
        iconUrl: null,
        image: '',
        imageWidth: 50,
        maxWidth: null,
        zindex: null,
        layout: 1,
        balloon: false,
        close: true,
        closeOnEscape: false,
        closeOnClick: false,
        displayMode: 0,
        position: 'bottomRight',
        target: '',
        targetFirst: true,
        timeout: 5000,
        rtl: false,
        animateInside: true,
        drag: true,
        pauseOnHover: true,
        resetOnHover: false,
        progressBar: true,
        progressBarColor: '',
        progressBarEasing: 'linear',
        overlay: false,
        overlayClose: false,
        overlayColor: 'rgba(0, 0, 0, 0.6)',
        transitionIn: 'fadeInUp',
        transitionOut: 'fadeOut',
        transitionInMobile: 'fadeInUp',
        transitionOutMobile: 'fadeOutDown',
        buttons: {},
        inputs: {},
        onOpening: function() {},
        onOpened: function() {},
        onClosing: function() {},
        onClosed: function() {}
    };
    //
    // Methods
    //
    /**
	 * Polyfill for remove() method
	 */ if (!('remove' in Element.prototype)) Element.prototype.remove = function() {
        if (this.parentNode) this.parentNode.removeChild(this);
    };
    /*
     * Polyfill for CustomEvent for IE >= 9
     * https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent/CustomEvent#Polyfill
     */ if (typeof window.CustomEvent !== 'function') {
        var CustomEventPolyfill = function(event, params) {
            params = params || {
                bubbles: false,
                cancelable: false,
                detail: undefined
            };
            var evt = document.createEvent('CustomEvent');
            evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
            return evt;
        };
        CustomEventPolyfill.prototype = window.Event.prototype;
        window.CustomEvent = CustomEventPolyfill;
    }
    /**
	 * A simple forEach() implementation for Arrays, Objects and NodeLists
	 * @private
	 * @param {Array|Object|NodeList} collection Collection of items to iterate
	 * @param {Function} callback Callback function for each iteration
	 * @param {Array|Object|NodeList} scope Object/NodeList/Array that forEach is iterating over (aka `this`)
	 */ var forEach = function(collection, callback, scope) {
        if (Object.prototype.toString.call(collection) === '[object Object]') {
            for(var prop in collection)if (Object.prototype.hasOwnProperty.call(collection, prop)) callback.call(scope, collection[prop], prop, collection);
        } else {
            if (collection) for(var i = 0, len = collection.length; i < len; i++)callback.call(scope, collection[i], i, collection);
        }
    };
    /**
	 * Merge defaults with user options
	 * @private
	 * @param {Object} defaults Default settings
	 * @param {Object} options User options
	 * @returns {Object} Merged values of defaults and options
	 */ var extend = function(defaults, options) {
        var extended = {};
        forEach(defaults, function(value, prop) {
            extended[prop] = defaults[prop];
        });
        forEach(options, function(value, prop) {
            extended[prop] = options[prop];
        });
        return extended;
    };
    /**
	 * Create a fragment DOM elements
	 * @private
	 */ var createFragElem = function(htmlStr) {
        var frag = document.createDocumentFragment(), temp = document.createElement('div');
        temp.innerHTML = htmlStr;
        while(temp.firstChild)frag.appendChild(temp.firstChild);
        return frag;
    };
    /**
	 * Generate new ID
	 * @private
	 */ var generateId = function(params) {
        var newId = btoa(encodeURIComponent(params));
        return newId.replace(/=/g, "");
    };
    /**
	 * Check if is a color
	 * @private
	 */ var isColor = function(color) {
        if (color.substring(0, 1) == '#' || color.substring(0, 3) == 'rgb' || color.substring(0, 3) == 'hsl') return true;
        else return false;
    };
    /**
	 * Check if is a Base64 string
	 * @private
	 */ var isBase64 = function(str) {
        try {
            return btoa(atob(str)) == str;
        } catch (err) {
            return false;
        }
    };
    /**
	 * Drag method of toasts
	 * @private
	 */ var drag = function() {
        return {
            move: function(toast, instance, settings, xpos) {
                var opacity, opacityRange = 0.3, distance = 180;
                if (xpos !== 0) {
                    toast.classList.add(PLUGIN_NAME + '-dragged');
                    toast.style.transform = 'translateX(' + xpos + 'px)';
                    if (xpos > 0) {
                        opacity = (distance - xpos) / distance;
                        if (opacity < opacityRange) instance.hide(extend(settings, {
                            transitionOut: 'fadeOutRight',
                            transitionOutMobile: 'fadeOutRight'
                        }), toast, 'drag');
                    } else {
                        opacity = (distance + xpos) / distance;
                        if (opacity < opacityRange) instance.hide(extend(settings, {
                            transitionOut: 'fadeOutLeft',
                            transitionOutMobile: 'fadeOutLeft'
                        }), toast, 'drag');
                    }
                    toast.style.opacity = opacity;
                    if (opacity < opacityRange) {
                        if (ISCHROME || ISFIREFOX) toast.style.left = xpos + 'px';
                        toast.parentNode.style.opacity = opacityRange;
                        this.stopMoving(toast, null);
                    }
                }
            },
            startMoving: function(toast, instance, settings, e) {
                e = e || window.event;
                var posX = ACCEPTSTOUCH ? e.touches[0].clientX : e.clientX, toastLeft = toast.style.transform.replace('px)', '');
                toastLeft = toastLeft.replace('translateX(', '');
                var offsetX = posX - toastLeft;
                if (settings.transitionIn) toast.classList.remove(settings.transitionIn);
                if (settings.transitionInMobile) toast.classList.remove(settings.transitionInMobile);
                toast.style.transition = '';
                if (ACCEPTSTOUCH) document.ontouchmove = function(e) {
                    e.preventDefault();
                    e = e || window.event;
                    var posX = e.touches[0].clientX, finalX = posX - offsetX;
                    drag.move(toast, instance, settings, finalX);
                };
                else document.onmousemove = function(e) {
                    e.preventDefault();
                    e = e || window.event;
                    var posX = e.clientX, finalX = posX - offsetX;
                    drag.move(toast, instance, settings, finalX);
                };
            },
            stopMoving: function(toast, e) {
                if (ACCEPTSTOUCH) document.ontouchmove = function() {};
                else document.onmousemove = function() {};
                toast.style.opacity = '';
                toast.style.transform = '';
                if (toast.classList.contains(PLUGIN_NAME + '-dragged')) {
                    toast.classList.remove(PLUGIN_NAME + '-dragged');
                    toast.style.transition = 'transform 0.4s ease, opacity 0.4s ease';
                    setTimeout(function() {
                        toast.style.transition = '';
                    }, 400);
                }
            }
        };
    }();
    $iziToast.setSetting = function(ref, option, value) {
        $iziToast.children[ref][option] = value;
    };
    $iziToast.getSetting = function(ref, option) {
        return $iziToast.children[ref][option];
    };
    /**
	 * Destroy the current initialization.
	 * @public
	 */ $iziToast.destroy = function() {
        forEach(document.querySelectorAll('.' + PLUGIN_NAME + '-overlay'), function(element, index) {
            element.remove();
        });
        forEach(document.querySelectorAll('.' + PLUGIN_NAME + '-wrapper'), function(element, index) {
            element.remove();
        });
        forEach(document.querySelectorAll('.' + PLUGIN_NAME), function(element, index) {
            element.remove();
        });
        this.children = {};
        // Remove event listeners
        document.removeEventListener(PLUGIN_NAME + '-opened', {}, false);
        document.removeEventListener(PLUGIN_NAME + '-opening', {}, false);
        document.removeEventListener(PLUGIN_NAME + '-closing', {}, false);
        document.removeEventListener(PLUGIN_NAME + '-closed', {}, false);
        document.removeEventListener('keyup', {}, false);
        // Reset variables
        CONFIG = {};
    };
    /**
	 * Initialize Plugin
	 * @public
	 * @param {Object} options User settings
	 */ $iziToast.settings = function(options) {
        // Destroy any existing initializations
        $iziToast.destroy();
        CONFIG = options;
        defaults = extend(defaults, options || {});
    };
    /**
	 * Building themes functions.
	 * @public
	 * @param {Object} options User settings
	 */ forEach(THEMES, function(theme, name) {
        $iziToast[name] = function(options) {
            var settings = extend(CONFIG, options || {});
            settings = extend(theme, settings || {});
            this.show(settings);
        };
    });
    /**
	 * Do the calculation to move the progress bar
	 * @private
	 */ $iziToast.progress = function(options, $toast, callback) {
        var that = this, ref = $toast.getAttribute('data-iziToast-ref'), settings = extend(this.children[ref], options || {}), $elem = $toast.querySelector('.' + PLUGIN_NAME + '-progressbar div');
        return {
            start: function() {
                if (typeof settings.time.REMAINING == 'undefined') {
                    $toast.classList.remove(PLUGIN_NAME + '-reseted');
                    if ($elem !== null) {
                        $elem.style.transition = 'width ' + settings.timeout + 'ms ' + settings.progressBarEasing;
                        $elem.style.width = '0%';
                    }
                    settings.time.START = new Date().getTime();
                    settings.time.END = settings.time.START + settings.timeout;
                    settings.time.TIMER = setTimeout(function() {
                        clearTimeout(settings.time.TIMER);
                        if (!$toast.classList.contains(PLUGIN_NAME + '-closing')) {
                            that.hide(settings, $toast, 'timeout');
                            if (typeof callback === 'function') callback.apply(that);
                        }
                    }, settings.timeout);
                    that.setSetting(ref, 'time', settings.time);
                }
            },
            pause: function() {
                if (typeof settings.time.START !== 'undefined' && !$toast.classList.contains(PLUGIN_NAME + '-paused') && !$toast.classList.contains(PLUGIN_NAME + '-reseted')) {
                    $toast.classList.add(PLUGIN_NAME + '-paused');
                    settings.time.REMAINING = settings.time.END - new Date().getTime();
                    clearTimeout(settings.time.TIMER);
                    that.setSetting(ref, 'time', settings.time);
                    if ($elem !== null) {
                        var computedStyle = window.getComputedStyle($elem), propertyWidth = computedStyle.getPropertyValue('width');
                        $elem.style.transition = 'none';
                        $elem.style.width = propertyWidth;
                    }
                    if (typeof callback === 'function') setTimeout(function() {
                        callback.apply(that);
                    }, 10);
                }
            },
            resume: function() {
                if (typeof settings.time.REMAINING !== 'undefined') {
                    $toast.classList.remove(PLUGIN_NAME + '-paused');
                    if ($elem !== null) {
                        $elem.style.transition = 'width ' + settings.time.REMAINING + 'ms ' + settings.progressBarEasing;
                        $elem.style.width = '0%';
                    }
                    settings.time.END = new Date().getTime() + settings.time.REMAINING;
                    settings.time.TIMER = setTimeout(function() {
                        clearTimeout(settings.time.TIMER);
                        if (!$toast.classList.contains(PLUGIN_NAME + '-closing')) {
                            that.hide(settings, $toast, 'timeout');
                            if (typeof callback === 'function') callback.apply(that);
                        }
                    }, settings.time.REMAINING);
                    that.setSetting(ref, 'time', settings.time);
                } else this.start();
            },
            reset: function() {
                clearTimeout(settings.time.TIMER);
                delete settings.time.REMAINING;
                that.setSetting(ref, 'time', settings.time);
                $toast.classList.add(PLUGIN_NAME + '-reseted');
                $toast.classList.remove(PLUGIN_NAME + '-paused');
                if ($elem !== null) {
                    $elem.style.transition = 'none';
                    $elem.style.width = '100%';
                }
                if (typeof callback === 'function') setTimeout(function() {
                    callback.apply(that);
                }, 10);
            }
        };
    };
    /**
	 * Close the specific Toast
	 * @public
	 * @param {Object} options User settings
	 */ $iziToast.hide = function(options, $toast, closedBy) {
        if (typeof $toast != 'object') $toast = document.querySelector($toast);
        var that = this, settings = extend(this.children[$toast.getAttribute('data-iziToast-ref')], options || {});
        settings.closedBy = closedBy || null;
        delete settings.time.REMAINING;
        $toast.classList.add(PLUGIN_NAME + '-closing');
        // Overlay
        (function() {
            var $overlay = document.querySelector('.' + PLUGIN_NAME + '-overlay');
            if ($overlay !== null) {
                var refs = $overlay.getAttribute('data-iziToast-ref');
                refs = refs.split(',');
                var index = refs.indexOf(String(settings.ref));
                if (index !== -1) refs.splice(index, 1);
                $overlay.setAttribute('data-iziToast-ref', refs.join());
                if (refs.length === 0) {
                    $overlay.classList.remove('fadeIn');
                    $overlay.classList.add('fadeOut');
                    setTimeout(function() {
                        $overlay.remove();
                    }, 700);
                }
            }
        })();
        if (settings.transitionIn) $toast.classList.remove(settings.transitionIn);
        if (settings.transitionInMobile) $toast.classList.remove(settings.transitionInMobile);
        if (ISMOBILE || window.innerWidth <= MOBILEWIDTH) {
            if (settings.transitionOutMobile) $toast.classList.add(settings.transitionOutMobile);
        } else if (settings.transitionOut) $toast.classList.add(settings.transitionOut);
        var H = $toast.parentNode.offsetHeight;
        $toast.parentNode.style.height = H + 'px';
        $toast.style.pointerEvents = 'none';
        if (!ISMOBILE || window.innerWidth > MOBILEWIDTH) $toast.parentNode.style.transitionDelay = '0.2s';
        try {
            var event = new CustomEvent(PLUGIN_NAME + '-closing', {
                detail: settings,
                bubbles: true,
                cancelable: true
            });
            document.dispatchEvent(event);
        } catch (ex) {
            console.warn(ex);
        }
        setTimeout(function() {
            $toast.parentNode.style.height = '0px';
            $toast.parentNode.style.overflow = '';
            setTimeout(function() {
                delete that.children[settings.ref];
                $toast.parentNode.remove();
                try {
                    var event = new CustomEvent(PLUGIN_NAME + '-closed', {
                        detail: settings,
                        bubbles: true,
                        cancelable: true
                    });
                    document.dispatchEvent(event);
                } catch (ex) {
                    console.warn(ex);
                }
                if (typeof settings.onClosed !== 'undefined') settings.onClosed.apply(null, [
                    settings,
                    $toast,
                    closedBy
                ]);
            }, 1000);
        }, 200);
        if (typeof settings.onClosing !== 'undefined') settings.onClosing.apply(null, [
            settings,
            $toast,
            closedBy
        ]);
    };
    /**
	 * Create and show the Toast
	 * @public
	 * @param {Object} options User settings
	 */ $iziToast.show = function(options) {
        var that = this;
        // Merge user options with defaults
        var settings = extend(CONFIG, options || {});
        settings = extend(defaults, settings);
        settings.time = {};
        if (settings.id === null) settings.id = generateId(settings.title + settings.message + settings.color);
        if (settings.displayMode === 1 || settings.displayMode == 'once') try {
            if (document.querySelectorAll('.' + PLUGIN_NAME + '#' + settings.id).length > 0) return false;
        } catch (exc) {
            console.warn('[' + PLUGIN_NAME + '] Could not find an element with this selector: ' + '#' + settings.id + '. Try to set an valid id.');
        }
        if (settings.displayMode === 2 || settings.displayMode == 'replace') try {
            forEach(document.querySelectorAll('.' + PLUGIN_NAME + '#' + settings.id), function(element, index) {
                that.hide(settings, element, 'replaced');
            });
        } catch (exc) {
            console.warn('[' + PLUGIN_NAME + '] Could not find an element with this selector: ' + '#' + settings.id + '. Try to set an valid id.');
        }
        settings.ref = new Date().getTime() + Math.floor(Math.random() * 10000000 + 1);
        $iziToast.children[settings.ref] = settings;
        var $DOM = {
            body: document.querySelector('body'),
            overlay: document.createElement('div'),
            toast: document.createElement('div'),
            toastBody: document.createElement('div'),
            toastTexts: document.createElement('div'),
            toastCapsule: document.createElement('div'),
            cover: document.createElement('div'),
            buttons: document.createElement('div'),
            inputs: document.createElement('div'),
            icon: !settings.iconUrl ? document.createElement('i') : document.createElement('img'),
            wrapper: null
        };
        $DOM.toast.setAttribute('data-iziToast-ref', settings.ref);
        $DOM.toast.appendChild($DOM.toastBody);
        $DOM.toastCapsule.appendChild($DOM.toast);
        // CSS Settings
        (function() {
            $DOM.toast.classList.add(PLUGIN_NAME);
            $DOM.toast.classList.add(PLUGIN_NAME + '-opening');
            $DOM.toastCapsule.classList.add(PLUGIN_NAME + '-capsule');
            $DOM.toastBody.classList.add(PLUGIN_NAME + '-body');
            $DOM.toastTexts.classList.add(PLUGIN_NAME + '-texts');
            if (ISMOBILE || window.innerWidth <= MOBILEWIDTH) {
                if (settings.transitionInMobile) $DOM.toast.classList.add(settings.transitionInMobile);
            } else if (settings.transitionIn) $DOM.toast.classList.add(settings.transitionIn);
            if (settings.class) {
                var classes = settings.class.split(' ');
                forEach(classes, function(value, index) {
                    $DOM.toast.classList.add(value);
                });
            }
            if (settings.id) $DOM.toast.id = settings.id;
            if (settings.rtl) {
                $DOM.toast.classList.add(PLUGIN_NAME + '-rtl');
                $DOM.toast.setAttribute('dir', 'rtl');
            }
            if (settings.layout > 1) $DOM.toast.classList.add(PLUGIN_NAME + '-layout' + settings.layout);
            if (settings.balloon) $DOM.toast.classList.add(PLUGIN_NAME + '-balloon');
            if (settings.maxWidth) {
                if (!isNaN(settings.maxWidth)) $DOM.toast.style.maxWidth = settings.maxWidth + 'px';
                else $DOM.toast.style.maxWidth = settings.maxWidth;
            }
            if (settings.theme !== '' || settings.theme !== 'light') $DOM.toast.classList.add(PLUGIN_NAME + '-theme-' + settings.theme);
            if (settings.color) {
                if (isColor(settings.color)) $DOM.toast.style.background = settings.color;
                else $DOM.toast.classList.add(PLUGIN_NAME + '-color-' + settings.color);
            }
            if (settings.backgroundColor) {
                $DOM.toast.style.background = settings.backgroundColor;
                if (settings.balloon) $DOM.toast.style.borderColor = settings.backgroundColor;
            }
        })();
        // Cover image
        (function() {
            if (settings.image) {
                $DOM.cover.classList.add(PLUGIN_NAME + '-cover');
                $DOM.cover.style.width = settings.imageWidth + 'px';
                if (isBase64(settings.image.replace(/ /g, ''))) $DOM.cover.style.backgroundImage = 'url(data:image/png;base64,' + settings.image.replace(/ /g, '') + ')';
                else $DOM.cover.style.backgroundImage = 'url(' + settings.image + ')';
                if (settings.rtl) $DOM.toastBody.style.marginRight = settings.imageWidth + 10 + 'px';
                else $DOM.toastBody.style.marginLeft = settings.imageWidth + 10 + 'px';
                $DOM.toast.appendChild($DOM.cover);
            }
        })();
        // Button close
        (function() {
            if (settings.close) {
                $DOM.buttonClose = document.createElement('button');
                $DOM.buttonClose.type = 'button';
                $DOM.buttonClose.classList.add(PLUGIN_NAME + '-close');
                $DOM.buttonClose.addEventListener('click', function(e) {
                    var button = e.target;
                    that.hide(settings, $DOM.toast, 'button');
                });
                $DOM.toast.appendChild($DOM.buttonClose);
            } else if (settings.rtl) $DOM.toast.style.paddingLeft = '18px';
            else $DOM.toast.style.paddingRight = '18px';
        })();
        // Progress Bar & Timeout
        (function() {
            if (settings.progressBar) {
                $DOM.progressBar = document.createElement('div');
                $DOM.progressBarDiv = document.createElement('div');
                $DOM.progressBar.classList.add(PLUGIN_NAME + '-progressbar');
                $DOM.progressBarDiv.style.background = settings.progressBarColor;
                $DOM.progressBar.appendChild($DOM.progressBarDiv);
                $DOM.toast.appendChild($DOM.progressBar);
            }
            if (settings.timeout) {
                if (settings.pauseOnHover && !settings.resetOnHover) {
                    $DOM.toast.addEventListener('mouseenter', function(e) {
                        that.progress(settings, $DOM.toast).pause();
                    });
                    $DOM.toast.addEventListener('mouseleave', function(e) {
                        that.progress(settings, $DOM.toast).resume();
                    });
                }
                if (settings.resetOnHover) {
                    $DOM.toast.addEventListener('mouseenter', function(e) {
                        that.progress(settings, $DOM.toast).reset();
                    });
                    $DOM.toast.addEventListener('mouseleave', function(e) {
                        that.progress(settings, $DOM.toast).start();
                    });
                }
            }
        })();
        // Icon
        (function() {
            if (settings.iconUrl) {
                $DOM.icon.setAttribute('class', PLUGIN_NAME + '-icon');
                $DOM.icon.setAttribute('src', settings.iconUrl);
            } else if (settings.icon) {
                $DOM.icon.setAttribute('class', PLUGIN_NAME + '-icon ' + settings.icon);
                if (settings.iconText) $DOM.icon.appendChild(document.createTextNode(settings.iconText));
                if (settings.iconColor) $DOM.icon.style.color = settings.iconColor;
            }
            if (settings.icon || settings.iconUrl) {
                if (settings.rtl) $DOM.toastBody.style.paddingRight = '33px';
                else $DOM.toastBody.style.paddingLeft = '33px';
                $DOM.toastBody.appendChild($DOM.icon);
            }
        })();
        // Title & Message
        (function() {
            if (settings.title.length > 0) {
                $DOM.strong = document.createElement('strong');
                $DOM.strong.classList.add(PLUGIN_NAME + '-title');
                $DOM.strong.appendChild(createFragElem(settings.title));
                $DOM.toastTexts.appendChild($DOM.strong);
                if (settings.titleColor) $DOM.strong.style.color = settings.titleColor;
                if (settings.titleSize) {
                    if (!isNaN(settings.titleSize)) $DOM.strong.style.fontSize = settings.titleSize + 'px';
                    else $DOM.strong.style.fontSize = settings.titleSize;
                }
                if (settings.titleLineHeight) {
                    if (!isNaN(settings.titleSize)) $DOM.strong.style.lineHeight = settings.titleLineHeight + 'px';
                    else $DOM.strong.style.lineHeight = settings.titleLineHeight;
                }
            }
            if (settings.message.length > 0) {
                $DOM.p = document.createElement('p');
                $DOM.p.classList.add(PLUGIN_NAME + '-message');
                $DOM.p.appendChild(createFragElem(settings.message));
                $DOM.toastTexts.appendChild($DOM.p);
                if (settings.messageColor) $DOM.p.style.color = settings.messageColor;
                if (settings.messageSize) {
                    if (!isNaN(settings.titleSize)) $DOM.p.style.fontSize = settings.messageSize + 'px';
                    else $DOM.p.style.fontSize = settings.messageSize;
                }
                if (settings.messageLineHeight) {
                    if (!isNaN(settings.titleSize)) $DOM.p.style.lineHeight = settings.messageLineHeight + 'px';
                    else $DOM.p.style.lineHeight = settings.messageLineHeight;
                }
            }
            if (settings.title.length > 0 && settings.message.length > 0) {
                if (settings.rtl) $DOM.strong.style.marginLeft = '10px';
                else if (settings.layout !== 2 && !settings.rtl) $DOM.strong.style.marginRight = '10px';
            }
        })();
        $DOM.toastBody.appendChild($DOM.toastTexts);
        // Inputs
        var $inputs;
        (function() {
            if (settings.inputs.length > 0) {
                $DOM.inputs.classList.add(PLUGIN_NAME + '-inputs');
                forEach(settings.inputs, function(value, index) {
                    $DOM.inputs.appendChild(createFragElem(value[0]));
                    $inputs = $DOM.inputs.childNodes;
                    $inputs[index].classList.add(PLUGIN_NAME + '-inputs-child');
                    if (value[3]) setTimeout(function() {
                        $inputs[index].focus();
                    }, 300);
                    $inputs[index].addEventListener(value[1], function(e) {
                        var ts = value[2];
                        return ts(that, $DOM.toast, this, e);
                    });
                });
                $DOM.toastBody.appendChild($DOM.inputs);
            }
        })();
        // Buttons
        (function() {
            if (settings.buttons.length > 0) {
                $DOM.buttons.classList.add(PLUGIN_NAME + '-buttons');
                forEach(settings.buttons, function(value, index) {
                    $DOM.buttons.appendChild(createFragElem(value[0]));
                    var $btns = $DOM.buttons.childNodes;
                    $btns[index].classList.add(PLUGIN_NAME + '-buttons-child');
                    if (value[2]) setTimeout(function() {
                        $btns[index].focus();
                    }, 300);
                    $btns[index].addEventListener('click', function(e) {
                        e.preventDefault();
                        var ts = value[1];
                        return ts(that, $DOM.toast, this, e, $inputs);
                    });
                });
            }
            $DOM.toastBody.appendChild($DOM.buttons);
        })();
        if (settings.message.length > 0 && (settings.inputs.length > 0 || settings.buttons.length > 0)) $DOM.p.style.marginBottom = '0';
        if (settings.inputs.length > 0 || settings.buttons.length > 0) {
            if (settings.rtl) $DOM.toastTexts.style.marginLeft = '10px';
            else $DOM.toastTexts.style.marginRight = '10px';
            if (settings.inputs.length > 0 && settings.buttons.length > 0) {
                if (settings.rtl) $DOM.inputs.style.marginLeft = '8px';
                else $DOM.inputs.style.marginRight = '8px';
            }
        }
        // Wrap
        (function() {
            $DOM.toastCapsule.style.visibility = 'hidden';
            setTimeout(function() {
                var H = $DOM.toast.offsetHeight;
                var style = $DOM.toast.currentStyle || window.getComputedStyle($DOM.toast);
                var marginTop = style.marginTop;
                marginTop = marginTop.split('px');
                marginTop = parseInt(marginTop[0]);
                var marginBottom = style.marginBottom;
                marginBottom = marginBottom.split('px');
                marginBottom = parseInt(marginBottom[0]);
                $DOM.toastCapsule.style.visibility = '';
                $DOM.toastCapsule.style.height = H + marginBottom + marginTop + 'px';
                setTimeout(function() {
                    $DOM.toastCapsule.style.height = 'auto';
                    if (settings.target) $DOM.toastCapsule.style.overflow = 'visible';
                }, 500);
                if (settings.timeout) that.progress(settings, $DOM.toast).start();
            }, 100);
        })();
        // Target
        (function() {
            var position = settings.position;
            if (settings.target) {
                $DOM.wrapper = document.querySelector(settings.target);
                $DOM.wrapper.classList.add(PLUGIN_NAME + '-target');
                if (settings.targetFirst) $DOM.wrapper.insertBefore($DOM.toastCapsule, $DOM.wrapper.firstChild);
                else $DOM.wrapper.appendChild($DOM.toastCapsule);
            } else {
                if (POSITIONS.indexOf(settings.position) == -1) {
                    console.warn('[' + PLUGIN_NAME + "] Incorrect position.\nIt can be \u203A " + POSITIONS);
                    return;
                }
                if (ISMOBILE || window.innerWidth <= MOBILEWIDTH) {
                    if (settings.position == 'bottomLeft' || settings.position == 'bottomRight' || settings.position == 'bottomCenter') position = PLUGIN_NAME + '-wrapper-bottomCenter';
                    else if (settings.position == 'topLeft' || settings.position == 'topRight' || settings.position == 'topCenter') position = PLUGIN_NAME + '-wrapper-topCenter';
                    else position = PLUGIN_NAME + '-wrapper-center';
                } else position = PLUGIN_NAME + '-wrapper-' + position;
                $DOM.wrapper = document.querySelector('.' + PLUGIN_NAME + '-wrapper.' + position);
                if (!$DOM.wrapper) {
                    $DOM.wrapper = document.createElement('div');
                    $DOM.wrapper.classList.add(PLUGIN_NAME + '-wrapper');
                    $DOM.wrapper.classList.add(position);
                    document.body.appendChild($DOM.wrapper);
                }
                if (settings.position == 'topLeft' || settings.position == 'topCenter' || settings.position == 'topRight') $DOM.wrapper.insertBefore($DOM.toastCapsule, $DOM.wrapper.firstChild);
                else $DOM.wrapper.appendChild($DOM.toastCapsule);
            }
            if (!isNaN(settings.zindex)) $DOM.wrapper.style.zIndex = settings.zindex;
            else console.warn('[' + PLUGIN_NAME + '] Invalid zIndex.');
        })();
        // Overlay
        (function() {
            if (settings.overlay) {
                if (document.querySelector('.' + PLUGIN_NAME + '-overlay.fadeIn') !== null) {
                    $DOM.overlay = document.querySelector('.' + PLUGIN_NAME + '-overlay');
                    $DOM.overlay.setAttribute('data-iziToast-ref', $DOM.overlay.getAttribute('data-iziToast-ref') + ',' + settings.ref);
                    if (!isNaN(settings.zindex) && settings.zindex !== null) $DOM.overlay.style.zIndex = settings.zindex - 1;
                } else {
                    $DOM.overlay.classList.add(PLUGIN_NAME + '-overlay');
                    $DOM.overlay.classList.add('fadeIn');
                    $DOM.overlay.style.background = settings.overlayColor;
                    $DOM.overlay.setAttribute('data-iziToast-ref', settings.ref);
                    if (!isNaN(settings.zindex) && settings.zindex !== null) $DOM.overlay.style.zIndex = settings.zindex - 1;
                    document.querySelector('body').appendChild($DOM.overlay);
                }
                if (settings.overlayClose) {
                    $DOM.overlay.removeEventListener('click', {});
                    $DOM.overlay.addEventListener('click', function(e) {
                        that.hide(settings, $DOM.toast, 'overlay');
                    });
                } else $DOM.overlay.removeEventListener('click', {});
            }
        })();
        // Inside animations
        (function() {
            if (settings.animateInside) {
                $DOM.toast.classList.add(PLUGIN_NAME + '-animateInside');
                var animationTimes = [
                    200,
                    100,
                    300
                ];
                if (settings.transitionIn == 'bounceInLeft' || settings.transitionIn == 'bounceInRight') animationTimes = [
                    400,
                    200,
                    400
                ];
                if (settings.title.length > 0) setTimeout(function() {
                    $DOM.strong.classList.add('slideIn');
                }, animationTimes[0]);
                if (settings.message.length > 0) setTimeout(function() {
                    $DOM.p.classList.add('slideIn');
                }, animationTimes[1]);
                if (settings.icon || settings.iconUrl) setTimeout(function() {
                    $DOM.icon.classList.add('revealIn');
                }, animationTimes[2]);
                var counter = 150;
                if (settings.buttons.length > 0 && $DOM.buttons) setTimeout(function() {
                    forEach($DOM.buttons.childNodes, function(element, index) {
                        setTimeout(function() {
                            element.classList.add('revealIn');
                        }, counter);
                        counter = counter + 150;
                    });
                }, settings.inputs.length > 0 ? 150 : 0);
                if (settings.inputs.length > 0 && $DOM.inputs) {
                    counter = 150;
                    forEach($DOM.inputs.childNodes, function(element, index) {
                        setTimeout(function() {
                            element.classList.add('revealIn');
                        }, counter);
                        counter = counter + 150;
                    });
                }
            }
        })();
        settings.onOpening.apply(null, [
            settings,
            $DOM.toast
        ]);
        try {
            var event = new CustomEvent(PLUGIN_NAME + '-opening', {
                detail: settings,
                bubbles: true,
                cancelable: true
            });
            document.dispatchEvent(event);
        } catch (ex) {
            console.warn(ex);
        }
        setTimeout(function() {
            $DOM.toast.classList.remove(PLUGIN_NAME + '-opening');
            $DOM.toast.classList.add(PLUGIN_NAME + '-opened');
            try {
                var event = new CustomEvent(PLUGIN_NAME + '-opened', {
                    detail: settings,
                    bubbles: true,
                    cancelable: true
                });
                document.dispatchEvent(event);
            } catch (ex) {
                console.warn(ex);
            }
            settings.onOpened.apply(null, [
                settings,
                $DOM.toast
            ]);
        }, 1000);
        if (settings.drag) {
            if (ACCEPTSTOUCH) {
                $DOM.toast.addEventListener('touchstart', function(e) {
                    drag.startMoving(this, that, settings, e);
                }, false);
                $DOM.toast.addEventListener('touchend', function(e) {
                    drag.stopMoving(this, e);
                }, false);
            } else {
                $DOM.toast.addEventListener('mousedown', function(e) {
                    e.preventDefault();
                    drag.startMoving(this, that, settings, e);
                }, false);
                $DOM.toast.addEventListener('mouseup', function(e) {
                    e.preventDefault();
                    drag.stopMoving(this, e);
                }, false);
            }
        }
        if (settings.closeOnEscape) document.addEventListener('keyup', function(evt) {
            evt = evt || window.event;
            if (evt.keyCode == 27) that.hide(settings, $DOM.toast, 'esc');
        });
        if (settings.closeOnClick) $DOM.toast.addEventListener('click', function(evt) {
            that.hide(settings, $DOM.toast, 'toast');
        });
        that.toast = $DOM.toast;
    };
    return $iziToast;
});

},{}],"9ydBq":[function(require,module,exports,__globalThis) {
/*!
	By André Rinas, www.andrerinas.de
	Documentation, www.simplelightbox.com
	Available for use under the MIT License
	Version 2.14.3
*/ var global = arguments[3];
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = void 0;
function _typeof(obj) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj) {
        return typeof obj;
    } : function(obj) {
        return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    }, _typeof(obj);
}
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {};
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = it.call(o);
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it["return"] != null) it["return"]();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", {
        writable: false
    });
    return Constructor;
}
function _defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
var SimpleLightbox = /*#__PURE__*/ function() {
    function SimpleLightbox(elements, options) {
        var _this = this;
        _classCallCheck(this, SimpleLightbox);
        _defineProperty(this, "defaultOptions", {
            sourceAttr: 'href',
            overlay: true,
            overlayOpacity: 0.7,
            spinner: true,
            nav: true,
            navText: [
                '&lsaquo;',
                '&rsaquo;'
            ],
            captions: true,
            captionDelay: 0,
            captionSelector: 'img',
            captionType: 'attr',
            captionsData: 'title',
            captionPosition: 'bottom',
            captionClass: '',
            captionHTML: true,
            close: true,
            closeText: '&times;',
            swipeClose: true,
            showCounter: true,
            fileExt: 'png|jpg|jpeg|gif|webp|avif',
            animationSlide: true,
            animationSpeed: 250,
            preloading: true,
            enableKeyboard: true,
            loop: true,
            rel: false,
            docClose: true,
            swipeTolerance: 50,
            className: 'simple-lightbox',
            widthRatio: 0.8,
            heightRatio: 0.9,
            scaleImageToRatio: false,
            disableRightClick: false,
            disableScroll: true,
            alertError: true,
            alertErrorMessage: 'Image not found, next image will be loaded',
            additionalHtml: false,
            history: true,
            throttleInterval: 0,
            doubleTapZoom: 2,
            maxZoom: 10,
            htmlClass: 'has-lightbox',
            rtl: false,
            fixedClass: 'sl-fixed',
            fadeSpeed: 300,
            uniqueImages: true,
            focus: true,
            scrollZoom: true,
            scrollZoomFactor: 0.5,
            download: false
        });
        _defineProperty(this, "transitionPrefix", void 0);
        _defineProperty(this, "isPassiveEventsSupported", void 0);
        _defineProperty(this, "transitionCapable", false);
        _defineProperty(this, "isTouchDevice", 'ontouchstart' in window);
        _defineProperty(this, "isAppleDevice", /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform));
        _defineProperty(this, "initialLocationHash", void 0);
        _defineProperty(this, "pushStateSupport", 'pushState' in history);
        _defineProperty(this, "isOpen", false);
        _defineProperty(this, "isAnimating", false);
        _defineProperty(this, "isClosing", false);
        _defineProperty(this, "isFadeIn", false);
        _defineProperty(this, "urlChangedOnce", false);
        _defineProperty(this, "hashReseted", false);
        _defineProperty(this, "historyHasChanges", false);
        _defineProperty(this, "historyUpdateTimeout", null);
        _defineProperty(this, "currentImage", void 0);
        _defineProperty(this, "eventNamespace", 'simplelightbox');
        _defineProperty(this, "domNodes", {});
        _defineProperty(this, "loadedImages", []);
        _defineProperty(this, "initialImageIndex", 0);
        _defineProperty(this, "currentImageIndex", 0);
        _defineProperty(this, "initialSelector", null);
        _defineProperty(this, "globalScrollbarWidth", 0);
        _defineProperty(this, "controlCoordinates", {
            swipeDiff: 0,
            swipeYDiff: 0,
            swipeStart: 0,
            swipeEnd: 0,
            swipeYStart: 0,
            swipeYEnd: 0,
            mousedown: false,
            imageLeft: 0,
            zoomed: false,
            containerHeight: 0,
            containerWidth: 0,
            containerOffsetX: 0,
            containerOffsetY: 0,
            imgHeight: 0,
            imgWidth: 0,
            capture: false,
            initialOffsetX: 0,
            initialOffsetY: 0,
            initialPointerOffsetX: 0,
            initialPointerOffsetY: 0,
            initialPointerOffsetX2: 0,
            initialPointerOffsetY2: 0,
            initialScale: 1,
            initialPinchDistance: 0,
            pointerOffsetX: 0,
            pointerOffsetY: 0,
            pointerOffsetX2: 0,
            pointerOffsetY2: 0,
            targetOffsetX: 0,
            targetOffsetY: 0,
            targetScale: 0,
            pinchOffsetX: 0,
            pinchOffsetY: 0,
            limitOffsetX: 0,
            limitOffsetY: 0,
            scaleDifference: 0,
            targetPinchDistance: 0,
            touchCount: 0,
            doubleTapped: false,
            touchmoveCount: 0
        });
        this.options = Object.assign(this.defaultOptions, options);
        this.isPassiveEventsSupported = this.checkPassiveEventsSupport();
        if (typeof elements === 'string') {
            this.initialSelector = elements;
            this.elements = Array.from(document.querySelectorAll(elements));
        } else this.elements = typeof elements.length !== 'undefined' && elements.length > 0 ? Array.from(elements) : [
            elements
        ];
        this.relatedElements = [];
        this.transitionPrefix = this.calculateTransitionPrefix();
        this.transitionCapable = this.transitionPrefix !== false;
        this.initialLocationHash = this.hash;
        // this should be handled by attribute selector IMHO! => 'a[rel=bla]'...
        if (this.options.rel) this.elements = this.getRelated(this.options.rel);
        if (this.options.uniqueImages) {
            var imgArr = [];
            this.elements = Array.from(this.elements).filter(function(element) {
                var src = element.getAttribute(_this.options.sourceAttr);
                if (imgArr.indexOf(src) === -1) {
                    imgArr.push(src);
                    return true;
                }
                return false;
            });
        }
        this.createDomNodes();
        if (this.options.close) this.domNodes.wrapper.appendChild(this.domNodes.closeButton);
        if (this.options.nav) this.domNodes.wrapper.appendChild(this.domNodes.navigation);
        if (this.options.spinner) this.domNodes.wrapper.appendChild(this.domNodes.spinner);
        this.addEventListener(this.elements, 'click.' + this.eventNamespace, function(event) {
            if (_this.isValidLink(event.currentTarget)) {
                event.preventDefault();
                if (_this.isAnimating) return false;
                _this.initialImageIndex = _this.elements.indexOf(event.currentTarget);
                _this.openImage(event.currentTarget);
            }
        });
        // close addEventListener click addEventListener doc
        if (this.options.docClose) this.addEventListener(this.domNodes.wrapper, [
            'click.' + this.eventNamespace,
            'touchstart.' + this.eventNamespace
        ], function(event) {
            if (_this.isOpen && event.target === event.currentTarget) _this.close();
        });
        // disable rightclick
        if (this.options.disableRightClick) this.addEventListener(document.body, 'contextmenu.' + this.eventNamespace, function(event) {
            if (event.target.parentElement.classList.contains("sl-image")) event.preventDefault();
        });
        // keyboard-control
        if (this.options.enableKeyboard) this.addEventListener(document.body, 'keyup.' + this.eventNamespace, this.throttle(function(event) {
            _this.controlCoordinates.swipeDiff = 0;
            // keyboard control only if lightbox is open
            if (_this.isAnimating && event.key === 'Escape') {
                _this.currentImage.setAttribute('src', '');
                _this.isAnimating = false;
                _this.close();
                return;
            }
            if (_this.isOpen) {
                event.preventDefault();
                if (event.key === 'Escape') _this.close();
                if (!_this.isAnimating && [
                    'ArrowLeft',
                    'ArrowRight'
                ].indexOf(event.key) > -1) _this.loadImage(event.key === 'ArrowRight' ? 1 : -1);
            }
        }, this.options.throttleInterval));
        this.addEvents();
    }
    _createClass(SimpleLightbox, [
        {
            key: "checkPassiveEventsSupport",
            value: function checkPassiveEventsSupport() {
                // https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md#feature-detection
                // Test via a getter in the options object to see if the passive property is accessed
                var supportsPassive = false;
                try {
                    var opts = Object.defineProperty({}, 'passive', {
                        get: function get() {
                            supportsPassive = true;
                        }
                    });
                    window.addEventListener("testPassive", null, opts);
                    window.removeEventListener("testPassive", null, opts);
                } catch (e) {}
                return supportsPassive;
            }
        },
        {
            key: "getCaptionElement",
            value: function getCaptionElement(elem) {
                // look at sibling selector
                if (this.options.captionSelector.startsWith('+')) {
                    var selector = this.options.captionSelector.replace(/^\+/, '').trimStart();
                    var sibling = elem.nextElementSibling;
                    if (sibling && sibling.matches(selector)) return sibling;
                    return false;
                } else if (this.options.captionSelector.startsWith('>')) {
                    var _selector = this.options.captionSelector.replace(/^>/, '').trimStart();
                    return elem.querySelector(_selector);
                } else return elem.querySelector(this.options.captionSelector);
            }
        },
        {
            key: "generateQuerySelector",
            value: function generateQuerySelector(elem) {
                var tagName = elem.tagName, id = elem.id, className = elem.className, parentNode = elem.parentNode;
                if (tagName === 'HTML') return 'HTML';
                var str = tagName;
                str += id !== '' ? "#".concat(id) : '';
                if (className) {
                    var classes = className.trim().split(/\s/);
                    for(var i = 0; i < classes.length; i++)str += ".".concat(classes[i]);
                }
                var childIndex = 1;
                for(var e = elem; e.previousElementSibling; e = e.previousElementSibling)childIndex += 1;
                str += ":nth-child(".concat(childIndex, ")");
                return "".concat(this.generateQuerySelector(parentNode), " > ").concat(str);
            }
        },
        {
            key: "createDomNodes",
            value: function createDomNodes() {
                this.domNodes.overlay = document.createElement('div');
                this.domNodes.overlay.classList.add('sl-overlay');
                this.domNodes.overlay.dataset.opacityTarget = this.options.overlayOpacity;
                this.domNodes.closeButton = document.createElement('button');
                this.domNodes.closeButton.classList.add('sl-close');
                this.domNodes.closeButton.innerHTML = this.options.closeText;
                this.domNodes.spinner = document.createElement('div');
                this.domNodes.spinner.classList.add('sl-spinner');
                this.domNodes.spinner.innerHTML = '<div></div>';
                this.domNodes.navigation = document.createElement('div');
                this.domNodes.navigation.classList.add('sl-navigation');
                this.domNodes.navigation.innerHTML = "<button class=\"sl-prev\">".concat(this.options.navText[0], "</button><button class=\"sl-next\">").concat(this.options.navText[1], "</button>");
                this.domNodes.counter = document.createElement('div');
                this.domNodes.counter.classList.add('sl-counter');
                this.domNodes.counter.innerHTML = '<span class="sl-current"></span>/<span class="sl-total"></span>';
                this.domNodes.download = document.createElement('div');
                this.domNodes.download.classList.add('sl-download');
                this.domNodes.downloadLink = document.createElement('a');
                this.domNodes.downloadLink.setAttribute('download', '');
                this.domNodes.downloadLink.textContent = this.options.download;
                this.domNodes.download.appendChild(this.domNodes.downloadLink);
                this.domNodes.caption = document.createElement('div');
                this.domNodes.caption.classList.add('sl-caption', 'pos-' + this.options.captionPosition);
                if (this.options.captionClass) {
                    var _this$domNodes$captio;
                    var captionClasses = this.options.captionClass.split(/[\s,]+/);
                    (_this$domNodes$captio = this.domNodes.caption.classList).add.apply(_this$domNodes$captio, _toConsumableArray(captionClasses));
                }
                this.domNodes.image = document.createElement('div');
                this.domNodes.image.classList.add('sl-image');
                this.domNodes.wrapper = document.createElement('div');
                this.domNodes.wrapper.classList.add('sl-wrapper');
                this.domNodes.wrapper.setAttribute('tabindex', -1);
                this.domNodes.wrapper.setAttribute('role', 'dialog');
                this.domNodes.wrapper.setAttribute('aria-hidden', false);
                if (this.options.className) this.domNodes.wrapper.classList.add(this.options.className);
                if (this.options.rtl) this.domNodes.wrapper.classList.add('sl-dir-rtl');
            }
        },
        {
            key: "throttle",
            value: function throttle(func, limit) {
                var inThrottle;
                return function() {
                    if (!inThrottle) {
                        func.apply(this, arguments);
                        inThrottle = true;
                        setTimeout(function() {
                            return inThrottle = false;
                        }, limit);
                    }
                };
            }
        },
        {
            key: "isValidLink",
            value: function isValidLink(element) {
                return !this.options.fileExt || element.getAttribute(this.options.sourceAttr) && new RegExp('(' + this.options.fileExt + ')($|\\?.*$)', 'i').test(element.getAttribute(this.options.sourceAttr));
            }
        },
        {
            key: "calculateTransitionPrefix",
            value: function calculateTransitionPrefix() {
                var s = (document.body || document.documentElement).style;
                return 'transition' in s ? '' : 'WebkitTransition' in s ? '-webkit-' : 'MozTransition' in s ? '-moz-' : 'OTransition' in s ? '-o' : false;
            }
        },
        {
            key: "getScrollbarWidth",
            value: function getScrollbarWidth() {
                var scrollbarWidth = 0;
                var scrollDiv = document.createElement('div');
                scrollDiv.classList.add('sl-scrollbar-measure');
                document.body.appendChild(scrollDiv);
                scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
                document.body.removeChild(scrollDiv);
                return scrollbarWidth;
            }
        },
        {
            key: "toggleScrollbar",
            value: function toggleScrollbar(type) {
                var scrollbarWidth = 0;
                var fixedElements = [].slice.call(document.querySelectorAll('.' + this.options.fixedClass));
                if (type === 'hide') {
                    var fullWindowWidth = window.innerWidth;
                    if (!fullWindowWidth) {
                        var documentElementRect = document.documentElement.getBoundingClientRect();
                        fullWindowWidth = documentElementRect.right - Math.abs(documentElementRect.left);
                    }
                    if (document.body.clientWidth < fullWindowWidth || this.isAppleDevice) {
                        var paddingRight = parseInt(window.getComputedStyle(document.body).paddingRight || 0, 10);
                        scrollbarWidth = this.getScrollbarWidth();
                        document.body.dataset.originalPaddingRight = paddingRight;
                        if (scrollbarWidth > 0 || scrollbarWidth == 0 && this.isAppleDevice) {
                            document.body.classList.add('hidden-scroll');
                            document.body.style.paddingRight = paddingRight + scrollbarWidth + 'px';
                            fixedElements.forEach(function(element) {
                                var actualPadding = element.style.paddingRight;
                                var calculatedPadding = window.getComputedStyle(element)['padding-right'];
                                element.dataset.originalPaddingRight = actualPadding;
                                element.style.paddingRight = "".concat(parseFloat(calculatedPadding) + scrollbarWidth, "px");
                            });
                        }
                    }
                } else {
                    document.body.classList.remove('hidden-scroll');
                    document.body.style.paddingRight = document.body.dataset.originalPaddingRight + 'px';
                    fixedElements.forEach(function(element) {
                        var padding = element.dataset.originalPaddingRight;
                        if (typeof padding !== 'undefined') element.style.paddingRight = padding;
                    });
                }
                return scrollbarWidth;
            }
        },
        {
            key: "close",
            value: function close() {
                var _this2 = this;
                if (!this.isOpen || this.isAnimating || this.isClosing) return false;
                this.isClosing = true;
                var element = this.relatedElements[this.currentImageIndex];
                element.dispatchEvent(new Event('close.simplelightbox'));
                if (this.options.history) {
                    this.historyHasChanges = false;
                    if (!this.hashReseted) this.resetHash();
                }
                this.removeEventListener(document, 'focusin.' + this.eventNamespace);
                this.fadeOut(this.domNodes.overlay, this.options.fadeSpeed);
                this.fadeOut(document.querySelectorAll('.sl-image img,  .sl-close, .sl-navigation, .sl-image .sl-caption, .sl-counter'), this.options.fadeSpeed, function() {
                    if (_this2.options.disableScroll) _this2.toggleScrollbar('show');
                    if (_this2.options.htmlClass && _this2.options.htmlClass !== '') document.querySelector('html').classList.remove(_this2.options.htmlClass);
                    document.body.removeChild(_this2.domNodes.wrapper);
                    if (_this2.options.overlay) document.body.removeChild(_this2.domNodes.overlay);
                    _this2.domNodes.additionalHtml = null;
                    _this2.domNodes.download = null;
                    element.dispatchEvent(new Event('closed.simplelightbox'));
                    _this2.isClosing = false;
                });
                this.currentImage = null;
                this.isOpen = false;
                this.isAnimating = false;
                // reset touchcontrol coordinates
                for(var key in this.controlCoordinates)this.controlCoordinates[key] = 0;
                this.controlCoordinates.mousedown = false;
                this.controlCoordinates.zoomed = false;
                this.controlCoordinates.capture = false;
                this.controlCoordinates.initialScale = this.minMax(1, 1, this.options.maxZoom);
                this.controlCoordinates.doubleTapped = false;
            }
        },
        {
            key: "hash",
            get: function get() {
                return window.location.hash.substring(1);
            }
        },
        {
            key: "preload",
            value: function preload() {
                var _this3 = this;
                var index = this.currentImageIndex, length = this.relatedElements.length, next = index + 1 < 0 ? length - 1 : index + 1 >= length - 1 ? 0 : index + 1, prev = index - 1 < 0 ? length - 1 : index - 1 >= length - 1 ? 0 : index - 1, nextImage = new Image(), prevImage = new Image();
                nextImage.addEventListener('load', function(event) {
                    var src = event.target.getAttribute('src');
                    if (_this3.loadedImages.indexOf(src) === -1) //is this condition even required... setting multiple times will not change usage...
                    _this3.loadedImages.push(src);
                    _this3.relatedElements[index].dispatchEvent(new Event('nextImageLoaded.' + _this3.eventNamespace));
                });
                nextImage.setAttribute('src', this.relatedElements[next].getAttribute(this.options.sourceAttr));
                prevImage.addEventListener('load', function(event) {
                    var src = event.target.getAttribute('src');
                    if (_this3.loadedImages.indexOf(src) === -1) _this3.loadedImages.push(src);
                    _this3.relatedElements[index].dispatchEvent(new Event('prevImageLoaded.' + _this3.eventNamespace));
                });
                prevImage.setAttribute('src', this.relatedElements[prev].getAttribute(this.options.sourceAttr));
            }
        },
        {
            key: "loadImage",
            value: function loadImage(direction) {
                var _this4 = this;
                var slideDirection = direction;
                if (this.options.rtl) direction = -direction;
                this.relatedElements[this.currentImageIndex].dispatchEvent(new Event('change.' + this.eventNamespace));
                this.relatedElements[this.currentImageIndex].dispatchEvent(new Event((direction === 1 ? 'next' : 'prev') + '.' + this.eventNamespace));
                var newIndex = this.currentImageIndex + direction;
                if (this.isAnimating || (newIndex < 0 || newIndex >= this.relatedElements.length) && this.options.loop === false) return false;
                this.currentImageIndex = newIndex < 0 ? this.relatedElements.length - 1 : newIndex > this.relatedElements.length - 1 ? 0 : newIndex;
                this.domNodes.counter.querySelector('.sl-current').innerHTML = this.currentImageIndex + 1;
                if (this.options.animationSlide) this.slide(this.options.animationSpeed / 1000, -100 * slideDirection - this.controlCoordinates.swipeDiff + 'px');
                this.fadeOut(this.domNodes.image, this.options.fadeSpeed, function() {
                    _this4.isAnimating = true;
                    if (!_this4.isClosing) setTimeout(function() {
                        var element = _this4.relatedElements[_this4.currentImageIndex];
                        if (!_this4.currentImage) return;
                        _this4.currentImage.setAttribute('src', element.getAttribute(_this4.options.sourceAttr));
                        if (_this4.loadedImages.indexOf(element.getAttribute(_this4.options.sourceAttr)) === -1) _this4.show(_this4.domNodes.spinner);
                        if (_this4.domNodes.image.contains(_this4.domNodes.caption)) _this4.domNodes.image.removeChild(_this4.domNodes.caption);
                        _this4.adjustImage(slideDirection);
                        if (_this4.options.preloading) _this4.preload();
                    }, 100);
                    else _this4.isAnimating = false;
                });
            }
        },
        {
            key: "adjustImage",
            value: function adjustImage(direction) {
                var _this5 = this;
                if (!this.currentImage) return false;
                var tmpImage = new Image(), windowWidth = window.innerWidth * this.options.widthRatio, windowHeight = window.innerHeight * this.options.heightRatio;
                tmpImage.setAttribute('src', this.currentImage.getAttribute('src'));
                this.currentImage.dataset.scale = 1;
                this.currentImage.dataset.translateX = 0;
                this.currentImage.dataset.translateY = 0;
                this.zoomPanElement(0, 0, 1);
                tmpImage.addEventListener('error', function(event) {
                    _this5.relatedElements[_this5.currentImageIndex].dispatchEvent(new Event('error.' + _this5.eventNamespace));
                    _this5.isAnimating = false;
                    _this5.isOpen = true;
                    _this5.domNodes.spinner.style.display = 'none';
                    var dirIsDefined = direction === 1 || direction === -1;
                    if (_this5.initialImageIndex === _this5.currentImageIndex && dirIsDefined) return _this5.close();
                    if (_this5.options.alertError) alert(_this5.options.alertErrorMessage);
                    _this5.loadImage(dirIsDefined ? direction : 1);
                });
                tmpImage.addEventListener('load', function(event) {
                    if (typeof direction !== 'undefined') {
                        _this5.relatedElements[_this5.currentImageIndex].dispatchEvent(new Event('changed.' + _this5.eventNamespace));
                        _this5.relatedElements[_this5.currentImageIndex].dispatchEvent(new Event((direction === 1 ? 'nextDone' : 'prevDone') + '.' + _this5.eventNamespace));
                    }
                    // history
                    if (_this5.options.history) _this5.updateURL();
                    if (_this5.loadedImages.indexOf(_this5.currentImage.getAttribute('src')) === -1) _this5.loadedImages.push(_this5.currentImage.getAttribute('src'));
                    var imageWidth = event.target.width, imageHeight = event.target.height;
                    if (_this5.options.scaleImageToRatio || imageWidth > windowWidth || imageHeight > windowHeight) {
                        var ratio = imageWidth / imageHeight > windowWidth / windowHeight ? imageWidth / windowWidth : imageHeight / windowHeight;
                        imageWidth /= ratio;
                        imageHeight /= ratio;
                    }
                    _this5.domNodes.image.style.top = (window.innerHeight - imageHeight) / 2 + 'px';
                    _this5.domNodes.image.style.left = (window.innerWidth - imageWidth - _this5.globalScrollbarWidth) / 2 + 'px';
                    _this5.domNodes.image.style.width = imageWidth + 'px';
                    _this5.domNodes.image.style.height = imageHeight + 'px';
                    _this5.domNodes.spinner.style.display = 'none';
                    if (_this5.options.focus) _this5.forceFocus();
                    _this5.fadeIn(_this5.currentImage, _this5.options.fadeSpeed, function() {
                        if (_this5.options.focus) _this5.domNodes.wrapper.focus();
                    });
                    _this5.isOpen = true;
                    var captionContainer, captionText;
                    if (typeof _this5.options.captionSelector === 'string') captionContainer = _this5.options.captionSelector === 'self' ? _this5.relatedElements[_this5.currentImageIndex] : _this5.getCaptionElement(_this5.relatedElements[_this5.currentImageIndex]);
                    else if (typeof _this5.options.captionSelector === 'function') captionContainer = _this5.options.captionSelector(_this5.relatedElements[_this5.currentImageIndex]);
                    if (_this5.options.captions && captionContainer) {
                        if (_this5.options.captionType === 'data') captionText = captionContainer.dataset[_this5.options.captionsData];
                        else if (_this5.options.captionType === 'text') captionText = captionContainer.innerHTML;
                        else captionText = captionContainer.getAttribute(_this5.options.captionsData);
                    }
                    if (!_this5.options.loop) {
                        if (_this5.currentImageIndex === 0) _this5.hide(_this5.domNodes.navigation.querySelector('.sl-prev'));
                        if (_this5.currentImageIndex >= _this5.relatedElements.length - 1) _this5.hide(_this5.domNodes.navigation.querySelector('.sl-next'));
                        if (_this5.currentImageIndex > 0) _this5.show(_this5.domNodes.navigation.querySelector('.sl-prev'));
                        if (_this5.currentImageIndex < _this5.relatedElements.length - 1) _this5.show(_this5.domNodes.navigation.querySelector('.sl-next'));
                    } else if (_this5.relatedElements.length === 1) _this5.hide(_this5.domNodes.navigation.querySelectorAll('.sl-prev, .sl-next'));
                    else _this5.show(_this5.domNodes.navigation.querySelectorAll('.sl-prev, .sl-next'));
                    if (direction === 1 || direction === -1) {
                        if (_this5.options.animationSlide) {
                            _this5.slide(0, 100 * direction + 'px');
                            setTimeout(function() {
                                _this5.slide(_this5.options.animationSpeed / 1000, "0px");
                            }, 50);
                        }
                        _this5.fadeIn(_this5.domNodes.image, _this5.options.fadeSpeed, function() {
                            _this5.isAnimating = false;
                            _this5.setCaption(captionText, imageWidth);
                        });
                    } else {
                        _this5.isAnimating = false;
                        _this5.setCaption(captionText, imageWidth);
                    }
                    if (_this5.options.additionalHtml && !_this5.domNodes.additionalHtml) {
                        _this5.domNodes.additionalHtml = document.createElement('div');
                        _this5.domNodes.additionalHtml.classList.add('sl-additional-html');
                        _this5.domNodes.additionalHtml.innerHTML = _this5.options.additionalHtml;
                        _this5.domNodes.image.appendChild(_this5.domNodes.additionalHtml);
                    }
                    if (_this5.options.download) _this5.domNodes.downloadLink.setAttribute('href', _this5.currentImage.getAttribute('src'));
                });
            }
        },
        {
            key: "zoomPanElement",
            value: function zoomPanElement(targetOffsetX, targetOffsetY, targetScale) {
                this.currentImage.style[this.transitionPrefix + 'transform'] = 'translate(' + targetOffsetX + ',' + targetOffsetY + ') scale(' + targetScale + ')';
            }
        },
        {
            key: "minMax",
            value: function minMax(value, min, max) {
                return value < min ? min : value > max ? max : value;
            }
        },
        {
            key: "setZoomData",
            value: function setZoomData(initialScale, targetOffsetX, targetOffsetY) {
                this.currentImage.dataset.scale = initialScale;
                this.currentImage.dataset.translateX = targetOffsetX;
                this.currentImage.dataset.translateY = targetOffsetY;
            }
        },
        {
            key: "hashchangeHandler",
            value: function hashchangeHandler() {
                if (this.isOpen && this.hash === this.initialLocationHash) {
                    this.hashReseted = true;
                    this.close();
                }
            }
        },
        {
            key: "addEvents",
            value: function addEvents() {
                var _this6 = this;
                // resize/responsive
                this.addEventListener(window, 'resize.' + this.eventNamespace, function(event) {
                    //this.adjustImage.bind(this)
                    if (_this6.isOpen) _this6.adjustImage();
                });
                this.addEventListener(this.domNodes.closeButton, [
                    'click.' + this.eventNamespace,
                    'touchstart.' + this.eventNamespace
                ], this.close.bind(this));
                if (this.options.history) setTimeout(function() {
                    _this6.addEventListener(window, 'hashchange.' + _this6.eventNamespace, function(event) {
                        if (_this6.isOpen) _this6.hashchangeHandler();
                    });
                }, 40);
                this.addEventListener(this.domNodes.navigation.getElementsByTagName('button'), 'click.' + this.eventNamespace, function(event) {
                    if (!event.currentTarget.tagName.match(/button/i)) return true;
                    event.preventDefault();
                    _this6.controlCoordinates.swipeDiff = 0;
                    _this6.loadImage(event.currentTarget.classList.contains('sl-next') ? 1 : -1);
                });
                if (this.options.scrollZoom) {
                    var scale = 1;
                    this.addEventListener(this.domNodes.image, [
                        'mousewheel',
                        'DOMMouseScroll'
                    ], function(event) {
                        if (_this6.controlCoordinates.mousedown || _this6.isAnimating || _this6.isClosing || !_this6.isOpen) return true;
                        if (_this6.controlCoordinates.containerHeight == 0) {
                            _this6.controlCoordinates.containerHeight = _this6.getDimensions(_this6.domNodes.image).height;
                            _this6.controlCoordinates.containerWidth = _this6.getDimensions(_this6.domNodes.image).width;
                            _this6.controlCoordinates.imgHeight = _this6.getDimensions(_this6.currentImage).height;
                            _this6.controlCoordinates.imgWidth = _this6.getDimensions(_this6.currentImage).width;
                            _this6.controlCoordinates.containerOffsetX = _this6.domNodes.image.offsetLeft;
                            _this6.controlCoordinates.containerOffsetY = _this6.domNodes.image.offsetTop;
                            _this6.controlCoordinates.initialOffsetX = parseFloat(_this6.currentImage.dataset.translateX);
                            _this6.controlCoordinates.initialOffsetY = parseFloat(_this6.currentImage.dataset.translateY);
                        }
                        // event.preventDefault();
                        var delta = event.delta || event.wheelDelta;
                        if (delta === undefined) //we are on firefox
                        delta = event.detail;
                        delta = Math.max(-1, Math.min(1, delta)); // cap the delta to [-1,1] for cross browser consistency
                        // apply zoom
                        scale += delta * _this6.options.scrollZoomFactor * scale;
                        scale = Math.max(1, Math.min(_this6.options.maxZoom, scale));
                        _this6.controlCoordinates.targetScale = scale;
                        var scrollTopPos = document.documentElement.scrollTop || document.body.scrollTop;
                        _this6.controlCoordinates.pinchOffsetX = event.pageX;
                        _this6.controlCoordinates.pinchOffsetY = event.pageY - scrollTopPos || 0; // need to substract the scroll position
                        _this6.controlCoordinates.limitOffsetX = (_this6.controlCoordinates.imgWidth * _this6.controlCoordinates.targetScale - _this6.controlCoordinates.containerWidth) / 2;
                        _this6.controlCoordinates.limitOffsetY = (_this6.controlCoordinates.imgHeight * _this6.controlCoordinates.targetScale - _this6.controlCoordinates.containerHeight) / 2;
                        _this6.controlCoordinates.scaleDifference = _this6.controlCoordinates.targetScale - _this6.controlCoordinates.initialScale;
                        _this6.controlCoordinates.targetOffsetX = _this6.controlCoordinates.imgWidth * _this6.controlCoordinates.targetScale <= _this6.controlCoordinates.containerWidth ? 0 : _this6.minMax(_this6.controlCoordinates.initialOffsetX - (_this6.controlCoordinates.pinchOffsetX - _this6.controlCoordinates.containerOffsetX - _this6.controlCoordinates.containerWidth / 2 - _this6.controlCoordinates.initialOffsetX) / (_this6.controlCoordinates.targetScale - _this6.controlCoordinates.scaleDifference) * _this6.controlCoordinates.scaleDifference, _this6.controlCoordinates.limitOffsetX * -1, _this6.controlCoordinates.limitOffsetX);
                        _this6.controlCoordinates.targetOffsetY = _this6.controlCoordinates.imgHeight * _this6.controlCoordinates.targetScale <= _this6.controlCoordinates.containerHeight ? 0 : _this6.minMax(_this6.controlCoordinates.initialOffsetY - (_this6.controlCoordinates.pinchOffsetY - _this6.controlCoordinates.containerOffsetY - _this6.controlCoordinates.containerHeight / 2 - _this6.controlCoordinates.initialOffsetY) / (_this6.controlCoordinates.targetScale - _this6.controlCoordinates.scaleDifference) * _this6.controlCoordinates.scaleDifference, _this6.controlCoordinates.limitOffsetY * -1, _this6.controlCoordinates.limitOffsetY);
                        _this6.zoomPanElement(_this6.controlCoordinates.targetOffsetX + "px", _this6.controlCoordinates.targetOffsetY + "px", _this6.controlCoordinates.targetScale);
                        if (_this6.controlCoordinates.targetScale > 1) {
                            _this6.controlCoordinates.zoomed = true;
                            if ((!_this6.domNodes.caption.style.opacity || _this6.domNodes.caption.style.opacity > 0) && _this6.domNodes.caption.style.display !== 'none') _this6.fadeOut(_this6.domNodes.caption, _this6.options.fadeSpeed);
                        } else {
                            if (_this6.controlCoordinates.initialScale === 1) {
                                _this6.controlCoordinates.zoomed = false;
                                if (_this6.domNodes.caption.style.display === 'none') _this6.fadeIn(_this6.domNodes.caption, _this6.options.fadeSpeed);
                            }
                            _this6.controlCoordinates.initialPinchDistance = null;
                            _this6.controlCoordinates.capture = false;
                        }
                        _this6.controlCoordinates.initialPinchDistance = _this6.controlCoordinates.targetPinchDistance;
                        _this6.controlCoordinates.initialScale = _this6.controlCoordinates.targetScale;
                        _this6.controlCoordinates.initialOffsetX = _this6.controlCoordinates.targetOffsetX;
                        _this6.controlCoordinates.initialOffsetY = _this6.controlCoordinates.targetOffsetY;
                        _this6.setZoomData(_this6.controlCoordinates.targetScale, _this6.controlCoordinates.targetOffsetX, _this6.controlCoordinates.targetOffsetY);
                        _this6.zoomPanElement(_this6.controlCoordinates.targetOffsetX + "px", _this6.controlCoordinates.targetOffsetY + "px", _this6.controlCoordinates.targetScale);
                    });
                }
                this.addEventListener(this.domNodes.image, [
                    'touchstart.' + this.eventNamespace,
                    'mousedown.' + this.eventNamespace
                ], function(event) {
                    if (event.target.tagName === 'A' && event.type === 'touchstart') return true;
                    if (event.type === 'mousedown') {
                        event.preventDefault();
                        _this6.controlCoordinates.initialPointerOffsetX = event.clientX;
                        _this6.controlCoordinates.initialPointerOffsetY = event.clientY;
                        _this6.controlCoordinates.containerHeight = _this6.getDimensions(_this6.domNodes.image).height;
                        _this6.controlCoordinates.containerWidth = _this6.getDimensions(_this6.domNodes.image).width;
                        _this6.controlCoordinates.imgHeight = _this6.getDimensions(_this6.currentImage).height;
                        _this6.controlCoordinates.imgWidth = _this6.getDimensions(_this6.currentImage).width;
                        _this6.controlCoordinates.containerOffsetX = _this6.domNodes.image.offsetLeft;
                        _this6.controlCoordinates.containerOffsetY = _this6.domNodes.image.offsetTop;
                        _this6.controlCoordinates.initialOffsetX = parseFloat(_this6.currentImage.dataset.translateX);
                        _this6.controlCoordinates.initialOffsetY = parseFloat(_this6.currentImage.dataset.translateY);
                        _this6.controlCoordinates.capture = true;
                    } else {
                        _this6.controlCoordinates.touchCount = event.touches.length;
                        _this6.controlCoordinates.initialPointerOffsetX = event.touches[0].clientX;
                        _this6.controlCoordinates.initialPointerOffsetY = event.touches[0].clientY;
                        _this6.controlCoordinates.containerHeight = _this6.getDimensions(_this6.domNodes.image).height;
                        _this6.controlCoordinates.containerWidth = _this6.getDimensions(_this6.domNodes.image).width;
                        _this6.controlCoordinates.imgHeight = _this6.getDimensions(_this6.currentImage).height;
                        _this6.controlCoordinates.imgWidth = _this6.getDimensions(_this6.currentImage).width;
                        _this6.controlCoordinates.containerOffsetX = _this6.domNodes.image.offsetLeft;
                        _this6.controlCoordinates.containerOffsetY = _this6.domNodes.image.offsetTop;
                        if (_this6.controlCoordinates.touchCount === 1) /* Single touch */ {
                            if (!_this6.controlCoordinates.doubleTapped) {
                                _this6.controlCoordinates.doubleTapped = true;
                                setTimeout(function() {
                                    _this6.controlCoordinates.doubleTapped = false;
                                }, 300);
                            } else {
                                _this6.currentImage.classList.add('sl-transition');
                                if (!_this6.controlCoordinates.zoomed) {
                                    _this6.controlCoordinates.initialScale = _this6.options.doubleTapZoom;
                                    _this6.setZoomData(_this6.controlCoordinates.initialScale, 0, 0);
                                    _this6.zoomPanElement("0px", "0px", _this6.controlCoordinates.initialScale);
                                    if ((!_this6.domNodes.caption.style.opacity || _this6.domNodes.caption.style.opacity > 0) && _this6.domNodes.caption.style.display !== 'none') _this6.fadeOut(_this6.domNodes.caption, _this6.options.fadeSpeed);
                                    _this6.controlCoordinates.zoomed = true;
                                } else {
                                    _this6.controlCoordinates.initialScale = 1;
                                    _this6.setZoomData(_this6.controlCoordinates.initialScale, 0, 0);
                                    _this6.zoomPanElement("0px", "0px", _this6.controlCoordinates.initialScale);
                                    _this6.controlCoordinates.zoomed = false;
                                }
                                setTimeout(function() {
                                    if (_this6.currentImage) _this6.currentImage.classList.remove('sl-transition');
                                }, 200);
                                return false;
                            }
                            _this6.controlCoordinates.initialOffsetX = parseFloat(_this6.currentImage.dataset.translateX);
                            _this6.controlCoordinates.initialOffsetY = parseFloat(_this6.currentImage.dataset.translateY);
                        } else if (_this6.controlCoordinates.touchCount === 2) /* Pinch */ {
                            _this6.controlCoordinates.initialPointerOffsetX2 = event.touches[1].clientX;
                            _this6.controlCoordinates.initialPointerOffsetY2 = event.touches[1].clientY;
                            _this6.controlCoordinates.initialOffsetX = parseFloat(_this6.currentImage.dataset.translateX);
                            _this6.controlCoordinates.initialOffsetY = parseFloat(_this6.currentImage.dataset.translateY);
                            _this6.controlCoordinates.pinchOffsetX = (_this6.controlCoordinates.initialPointerOffsetX + _this6.controlCoordinates.initialPointerOffsetX2) / 2;
                            _this6.controlCoordinates.pinchOffsetY = (_this6.controlCoordinates.initialPointerOffsetY + _this6.controlCoordinates.initialPointerOffsetY2) / 2;
                            _this6.controlCoordinates.initialPinchDistance = Math.sqrt((_this6.controlCoordinates.initialPointerOffsetX - _this6.controlCoordinates.initialPointerOffsetX2) * (_this6.controlCoordinates.initialPointerOffsetX - _this6.controlCoordinates.initialPointerOffsetX2) + (_this6.controlCoordinates.initialPointerOffsetY - _this6.controlCoordinates.initialPointerOffsetY2) * (_this6.controlCoordinates.initialPointerOffsetY - _this6.controlCoordinates.initialPointerOffsetY2));
                        }
                        _this6.controlCoordinates.capture = true;
                    }
                    if (_this6.controlCoordinates.mousedown) return true;
                    if (_this6.transitionCapable) _this6.controlCoordinates.imageLeft = parseInt(_this6.domNodes.image.style.left, 10);
                    _this6.controlCoordinates.mousedown = true;
                    _this6.controlCoordinates.swipeDiff = 0;
                    _this6.controlCoordinates.swipeYDiff = 0;
                    _this6.controlCoordinates.swipeStart = event.pageX || event.touches[0].pageX;
                    _this6.controlCoordinates.swipeYStart = event.pageY || event.touches[0].pageY;
                    return false;
                });
                this.addEventListener(this.domNodes.image, [
                    'touchmove.' + this.eventNamespace,
                    'mousemove.' + this.eventNamespace,
                    'MSPointerMove'
                ], function(event) {
                    if (!_this6.controlCoordinates.mousedown) return true;
                    if (event.type === 'touchmove') {
                        if (_this6.controlCoordinates.capture === false) return false;
                        _this6.controlCoordinates.pointerOffsetX = event.touches[0].clientX;
                        _this6.controlCoordinates.pointerOffsetY = event.touches[0].clientY;
                        _this6.controlCoordinates.touchCount = event.touches.length;
                        _this6.controlCoordinates.touchmoveCount++;
                        if (_this6.controlCoordinates.touchCount > 1) /* Pinch */ {
                            _this6.controlCoordinates.pointerOffsetX2 = event.touches[1].clientX;
                            _this6.controlCoordinates.pointerOffsetY2 = event.touches[1].clientY;
                            _this6.controlCoordinates.targetPinchDistance = Math.sqrt((_this6.controlCoordinates.pointerOffsetX - _this6.controlCoordinates.pointerOffsetX2) * (_this6.controlCoordinates.pointerOffsetX - _this6.controlCoordinates.pointerOffsetX2) + (_this6.controlCoordinates.pointerOffsetY - _this6.controlCoordinates.pointerOffsetY2) * (_this6.controlCoordinates.pointerOffsetY - _this6.controlCoordinates.pointerOffsetY2));
                            if (_this6.controlCoordinates.initialPinchDistance === null) _this6.controlCoordinates.initialPinchDistance = _this6.controlCoordinates.targetPinchDistance;
                            if (Math.abs(_this6.controlCoordinates.initialPinchDistance - _this6.controlCoordinates.targetPinchDistance) >= 1) {
                                /* Initialize helpers */ _this6.controlCoordinates.targetScale = _this6.minMax(_this6.controlCoordinates.targetPinchDistance / _this6.controlCoordinates.initialPinchDistance * _this6.controlCoordinates.initialScale, 1, _this6.options.maxZoom);
                                _this6.controlCoordinates.limitOffsetX = (_this6.controlCoordinates.imgWidth * _this6.controlCoordinates.targetScale - _this6.controlCoordinates.containerWidth) / 2;
                                _this6.controlCoordinates.limitOffsetY = (_this6.controlCoordinates.imgHeight * _this6.controlCoordinates.targetScale - _this6.controlCoordinates.containerHeight) / 2;
                                _this6.controlCoordinates.scaleDifference = _this6.controlCoordinates.targetScale - _this6.controlCoordinates.initialScale;
                                _this6.controlCoordinates.targetOffsetX = _this6.controlCoordinates.imgWidth * _this6.controlCoordinates.targetScale <= _this6.controlCoordinates.containerWidth ? 0 : _this6.minMax(_this6.controlCoordinates.initialOffsetX - (_this6.controlCoordinates.pinchOffsetX - _this6.controlCoordinates.containerOffsetX - _this6.controlCoordinates.containerWidth / 2 - _this6.controlCoordinates.initialOffsetX) / (_this6.controlCoordinates.targetScale - _this6.controlCoordinates.scaleDifference) * _this6.controlCoordinates.scaleDifference, _this6.controlCoordinates.limitOffsetX * -1, _this6.controlCoordinates.limitOffsetX);
                                _this6.controlCoordinates.targetOffsetY = _this6.controlCoordinates.imgHeight * _this6.controlCoordinates.targetScale <= _this6.controlCoordinates.containerHeight ? 0 : _this6.minMax(_this6.controlCoordinates.initialOffsetY - (_this6.controlCoordinates.pinchOffsetY - _this6.controlCoordinates.containerOffsetY - _this6.controlCoordinates.containerHeight / 2 - _this6.controlCoordinates.initialOffsetY) / (_this6.controlCoordinates.targetScale - _this6.controlCoordinates.scaleDifference) * _this6.controlCoordinates.scaleDifference, _this6.controlCoordinates.limitOffsetY * -1, _this6.controlCoordinates.limitOffsetY);
                                _this6.zoomPanElement(_this6.controlCoordinates.targetOffsetX + "px", _this6.controlCoordinates.targetOffsetY + "px", _this6.controlCoordinates.targetScale);
                                if (_this6.controlCoordinates.targetScale > 1) {
                                    _this6.controlCoordinates.zoomed = true;
                                    if ((!_this6.domNodes.caption.style.opacity || _this6.domNodes.caption.style.opacity > 0) && _this6.domNodes.caption.style.display !== 'none') _this6.fadeOut(_this6.domNodes.caption, _this6.options.fadeSpeed);
                                }
                                _this6.controlCoordinates.initialPinchDistance = _this6.controlCoordinates.targetPinchDistance;
                                _this6.controlCoordinates.initialScale = _this6.controlCoordinates.targetScale;
                                _this6.controlCoordinates.initialOffsetX = _this6.controlCoordinates.targetOffsetX;
                                _this6.controlCoordinates.initialOffsetY = _this6.controlCoordinates.targetOffsetY;
                            }
                        } else {
                            _this6.controlCoordinates.targetScale = _this6.controlCoordinates.initialScale;
                            _this6.controlCoordinates.limitOffsetX = (_this6.controlCoordinates.imgWidth * _this6.controlCoordinates.targetScale - _this6.controlCoordinates.containerWidth) / 2;
                            _this6.controlCoordinates.limitOffsetY = (_this6.controlCoordinates.imgHeight * _this6.controlCoordinates.targetScale - _this6.controlCoordinates.containerHeight) / 2;
                            _this6.controlCoordinates.targetOffsetX = _this6.controlCoordinates.imgWidth * _this6.controlCoordinates.targetScale <= _this6.controlCoordinates.containerWidth ? 0 : _this6.minMax(_this6.controlCoordinates.pointerOffsetX - (_this6.controlCoordinates.initialPointerOffsetX - _this6.controlCoordinates.initialOffsetX), _this6.controlCoordinates.limitOffsetX * -1, _this6.controlCoordinates.limitOffsetX);
                            _this6.controlCoordinates.targetOffsetY = _this6.controlCoordinates.imgHeight * _this6.controlCoordinates.targetScale <= _this6.controlCoordinates.containerHeight ? 0 : _this6.minMax(_this6.controlCoordinates.pointerOffsetY - (_this6.controlCoordinates.initialPointerOffsetY - _this6.controlCoordinates.initialOffsetY), _this6.controlCoordinates.limitOffsetY * -1, _this6.controlCoordinates.limitOffsetY);
                            if (Math.abs(_this6.controlCoordinates.targetOffsetX) === Math.abs(_this6.controlCoordinates.limitOffsetX)) {
                                _this6.controlCoordinates.initialOffsetX = _this6.controlCoordinates.targetOffsetX;
                                _this6.controlCoordinates.initialPointerOffsetX = _this6.controlCoordinates.pointerOffsetX;
                            }
                            if (Math.abs(_this6.controlCoordinates.targetOffsetY) === Math.abs(_this6.controlCoordinates.limitOffsetY)) {
                                _this6.controlCoordinates.initialOffsetY = _this6.controlCoordinates.targetOffsetY;
                                _this6.controlCoordinates.initialPointerOffsetY = _this6.controlCoordinates.pointerOffsetY;
                            }
                            _this6.setZoomData(_this6.controlCoordinates.initialScale, _this6.controlCoordinates.targetOffsetX, _this6.controlCoordinates.targetOffsetY);
                            _this6.zoomPanElement(_this6.controlCoordinates.targetOffsetX + "px", _this6.controlCoordinates.targetOffsetY + "px", _this6.controlCoordinates.targetScale);
                        }
                    }
                    /* Mouse Move implementation */ if (event.type === 'mousemove' && _this6.controlCoordinates.mousedown) {
                        if (event.type == 'touchmove') return true;
                        event.preventDefault();
                        if (_this6.controlCoordinates.capture === false) return false;
                        _this6.controlCoordinates.pointerOffsetX = event.clientX;
                        _this6.controlCoordinates.pointerOffsetY = event.clientY;
                        _this6.controlCoordinates.targetScale = _this6.controlCoordinates.initialScale;
                        _this6.controlCoordinates.limitOffsetX = (_this6.controlCoordinates.imgWidth * _this6.controlCoordinates.targetScale - _this6.controlCoordinates.containerWidth) / 2;
                        _this6.controlCoordinates.limitOffsetY = (_this6.controlCoordinates.imgHeight * _this6.controlCoordinates.targetScale - _this6.controlCoordinates.containerHeight) / 2;
                        _this6.controlCoordinates.targetOffsetX = _this6.controlCoordinates.imgWidth * _this6.controlCoordinates.targetScale <= _this6.controlCoordinates.containerWidth ? 0 : _this6.minMax(_this6.controlCoordinates.pointerOffsetX - (_this6.controlCoordinates.initialPointerOffsetX - _this6.controlCoordinates.initialOffsetX), _this6.controlCoordinates.limitOffsetX * -1, _this6.controlCoordinates.limitOffsetX);
                        _this6.controlCoordinates.targetOffsetY = _this6.controlCoordinates.imgHeight * _this6.controlCoordinates.targetScale <= _this6.controlCoordinates.containerHeight ? 0 : _this6.minMax(_this6.controlCoordinates.pointerOffsetY - (_this6.controlCoordinates.initialPointerOffsetY - _this6.controlCoordinates.initialOffsetY), _this6.controlCoordinates.limitOffsetY * -1, _this6.controlCoordinates.limitOffsetY);
                        if (Math.abs(_this6.controlCoordinates.targetOffsetX) === Math.abs(_this6.controlCoordinates.limitOffsetX)) {
                            _this6.controlCoordinates.initialOffsetX = _this6.controlCoordinates.targetOffsetX;
                            _this6.controlCoordinates.initialPointerOffsetX = _this6.controlCoordinates.pointerOffsetX;
                        }
                        if (Math.abs(_this6.controlCoordinates.targetOffsetY) === Math.abs(_this6.controlCoordinates.limitOffsetY)) {
                            _this6.controlCoordinates.initialOffsetY = _this6.controlCoordinates.targetOffsetY;
                            _this6.controlCoordinates.initialPointerOffsetY = _this6.controlCoordinates.pointerOffsetY;
                        }
                        _this6.setZoomData(_this6.controlCoordinates.initialScale, _this6.controlCoordinates.targetOffsetX, _this6.controlCoordinates.targetOffsetY);
                        _this6.zoomPanElement(_this6.controlCoordinates.targetOffsetX + "px", _this6.controlCoordinates.targetOffsetY + "px", _this6.controlCoordinates.targetScale);
                    }
                    if (!_this6.controlCoordinates.zoomed) {
                        _this6.controlCoordinates.swipeEnd = event.pageX || event.touches[0].pageX;
                        _this6.controlCoordinates.swipeYEnd = event.pageY || event.touches[0].pageY;
                        _this6.controlCoordinates.swipeDiff = _this6.controlCoordinates.swipeStart - _this6.controlCoordinates.swipeEnd;
                        _this6.controlCoordinates.swipeYDiff = _this6.controlCoordinates.swipeYStart - _this6.controlCoordinates.swipeYEnd;
                        if (_this6.options.animationSlide) _this6.slide(0, -_this6.controlCoordinates.swipeDiff + 'px');
                    }
                });
                this.addEventListener(this.domNodes.image, [
                    'touchend.' + this.eventNamespace,
                    'mouseup.' + this.eventNamespace,
                    'touchcancel.' + this.eventNamespace,
                    'mouseleave.' + this.eventNamespace,
                    'pointerup',
                    'pointercancel',
                    'MSPointerUp',
                    'MSPointerCancel'
                ], function(event) {
                    if (_this6.isTouchDevice && event.type === 'touchend') {
                        _this6.controlCoordinates.touchCount = event.touches.length;
                        if (_this6.controlCoordinates.touchCount === 0) /* No touch */ {
                            /* Set attributes */ if (_this6.currentImage) _this6.setZoomData(_this6.controlCoordinates.initialScale, _this6.controlCoordinates.targetOffsetX, _this6.controlCoordinates.targetOffsetY);
                            if (_this6.controlCoordinates.initialScale === 1) {
                                _this6.controlCoordinates.zoomed = false;
                                if (_this6.domNodes.caption.style.display === 'none') _this6.fadeIn(_this6.domNodes.caption, _this6.options.fadeSpeed);
                            }
                            _this6.controlCoordinates.initialPinchDistance = null;
                            _this6.controlCoordinates.capture = false;
                        } else if (_this6.controlCoordinates.touchCount === 1) /* Single touch */ {
                            _this6.controlCoordinates.initialPointerOffsetX = event.touches[0].clientX;
                            _this6.controlCoordinates.initialPointerOffsetY = event.touches[0].clientY;
                        } else if (_this6.controlCoordinates.touchCount > 1) _this6.controlCoordinates.initialPinchDistance = null;
                    }
                    if (_this6.controlCoordinates.mousedown) {
                        _this6.controlCoordinates.mousedown = false;
                        var possibleDir = true;
                        if (!_this6.options.loop) {
                            if (_this6.currentImageIndex === 0 && _this6.controlCoordinates.swipeDiff < 0) possibleDir = false;
                            if (_this6.currentImageIndex >= _this6.relatedElements.length - 1 && _this6.controlCoordinates.swipeDiff > 0) possibleDir = false;
                        }
                        if (Math.abs(_this6.controlCoordinates.swipeDiff) > _this6.options.swipeTolerance && possibleDir) _this6.loadImage(_this6.controlCoordinates.swipeDiff > 0 ? 1 : -1);
                        else if (_this6.options.animationSlide) _this6.slide(_this6.options.animationSpeed / 1000, "0px");
                        if (_this6.options.swipeClose && Math.abs(_this6.controlCoordinates.swipeYDiff) > 50 && Math.abs(_this6.controlCoordinates.swipeDiff) < _this6.options.swipeTolerance) _this6.close();
                    }
                });
                this.addEventListener(this.domNodes.image, [
                    'dblclick'
                ], function(event) {
                    if (_this6.isTouchDevice) return;
                    _this6.controlCoordinates.initialPointerOffsetX = event.clientX;
                    _this6.controlCoordinates.initialPointerOffsetY = event.clientY;
                    _this6.controlCoordinates.containerHeight = _this6.getDimensions(_this6.domNodes.image).height;
                    _this6.controlCoordinates.containerWidth = _this6.getDimensions(_this6.domNodes.image).width;
                    _this6.controlCoordinates.imgHeight = _this6.getDimensions(_this6.currentImage).height;
                    _this6.controlCoordinates.imgWidth = _this6.getDimensions(_this6.currentImage).width;
                    _this6.controlCoordinates.containerOffsetX = _this6.domNodes.image.offsetLeft;
                    _this6.controlCoordinates.containerOffsetY = _this6.domNodes.image.offsetTop;
                    _this6.currentImage.classList.add('sl-transition');
                    if (!_this6.controlCoordinates.zoomed) {
                        _this6.controlCoordinates.initialScale = _this6.options.doubleTapZoom;
                        _this6.setZoomData(_this6.controlCoordinates.initialScale, 0, 0);
                        _this6.zoomPanElement("0px", "0px", _this6.controlCoordinates.initialScale);
                        if ((!_this6.domNodes.caption.style.opacity || _this6.domNodes.caption.style.opacity > 0) && _this6.domNodes.caption.style.display !== 'none') _this6.fadeOut(_this6.domNodes.caption, _this6.options.fadeSpeed);
                        _this6.controlCoordinates.zoomed = true;
                    } else {
                        _this6.controlCoordinates.initialScale = 1;
                        _this6.setZoomData(_this6.controlCoordinates.initialScale, 0, 0);
                        _this6.zoomPanElement("0px", "0px", _this6.controlCoordinates.initialScale);
                        _this6.controlCoordinates.zoomed = false;
                        if (_this6.domNodes.caption.style.display === 'none') _this6.fadeIn(_this6.domNodes.caption, _this6.options.fadeSpeed);
                    }
                    setTimeout(function() {
                        if (_this6.currentImage) {
                            _this6.currentImage.classList.remove('sl-transition');
                            _this6.currentImage.style[_this6.transitionPrefix + 'transform-origin'] = null;
                        }
                    }, 200);
                    _this6.controlCoordinates.capture = true;
                    return false;
                });
            }
        },
        {
            key: "getDimensions",
            value: function getDimensions(element) {
                var styles = window.getComputedStyle(element), height = element.offsetHeight, width = element.offsetWidth, borderTopWidth = parseFloat(styles.borderTopWidth), borderBottomWidth = parseFloat(styles.borderBottomWidth), paddingTop = parseFloat(styles.paddingTop), paddingBottom = parseFloat(styles.paddingBottom), borderLeftWidth = parseFloat(styles.borderLeftWidth), borderRightWidth = parseFloat(styles.borderRightWidth), paddingLeft = parseFloat(styles.paddingLeft), paddingRight = parseFloat(styles.paddingRight);
                return {
                    height: height - borderBottomWidth - borderTopWidth - paddingTop - paddingBottom,
                    width: width - borderLeftWidth - borderRightWidth - paddingLeft - paddingRight
                };
            }
        },
        {
            key: "updateHash",
            value: function updateHash() {
                var newHash = 'pid=' + (this.currentImageIndex + 1), newURL = window.location.href.split('#')[0] + '#' + newHash;
                this.hashReseted = false;
                if (this.pushStateSupport) window.history[this.historyHasChanges ? 'replaceState' : 'pushState']('', document.title, newURL);
                else // what is the browser target of this?
                if (this.historyHasChanges) window.location.replace(newURL);
                else window.location.hash = newHash;
                if (!this.historyHasChanges) this.urlChangedOnce = true;
                this.historyHasChanges = true;
            }
        },
        {
            key: "resetHash",
            value: function resetHash() {
                this.hashReseted = true;
                if (this.urlChangedOnce) history.back();
                else if (this.pushStateSupport) history.pushState('', document.title, window.location.pathname + window.location.search);
                else window.location.hash = '';
                //
                //in case an history operation is still pending
                clearTimeout(this.historyUpdateTimeout);
            }
        },
        {
            key: "updateURL",
            value: function updateURL() {
                clearTimeout(this.historyUpdateTimeout);
                if (!this.historyHasChanges) this.updateHash(); // first time
                else this.historyUpdateTimeout = setTimeout(this.updateHash.bind(this), 800);
            }
        },
        {
            key: "setCaption",
            value: function setCaption(captionText, imageWidth, allowHTML) {
                var _this7 = this;
                if (this.options.captions && captionText && captionText !== '' && typeof captionText !== "undefined") {
                    var _ref;
                    var property = ((_ref = allowHTML !== null && allowHTML !== void 0 ? allowHTML : this.options.captionHTML) !== null && _ref !== void 0 ? _ref : true) ? 'innerHTML' : 'innerText';
                    this.hide(this.domNodes.caption);
                    this.domNodes.caption.style.width = imageWidth + 'px';
                    this.domNodes.caption[property] = captionText;
                    this.domNodes.image.appendChild(this.domNodes.caption);
                    setTimeout(function() {
                        _this7.fadeIn(_this7.domNodes.caption, _this7.options.fadeSpeed);
                    }, this.options.captionDelay);
                }
            }
        },
        {
            key: "slide",
            value: function slide(speed, pos) {
                if (!this.transitionCapable) return this.domNodes.image.style.left = pos;
                this.domNodes.image.style[this.transitionPrefix + 'transform'] = 'translateX(' + pos + ')';
                this.domNodes.image.style[this.transitionPrefix + 'transition'] = this.transitionPrefix + 'transform ' + speed + 's linear';
            }
        },
        {
            key: "getRelated",
            value: function getRelated(rel) {
                var elems;
                if (rel && rel !== false && rel !== 'nofollow') elems = Array.from(this.elements).filter(function(element) {
                    return element.getAttribute('rel') === rel;
                });
                else elems = this.elements;
                return elems;
            }
        },
        {
            key: "openImage",
            value: function openImage(element) {
                var _this8 = this;
                element.dispatchEvent(new Event('show.' + this.eventNamespace));
                this.globalScrollbarWidth = this.getScrollbarWidth();
                if (this.options.disableScroll) {
                    this.toggleScrollbar('hide');
                    this.globalScrollbarWidth = 0;
                }
                if (this.options.htmlClass && this.options.htmlClass !== '') document.querySelector('html').classList.add(this.options.htmlClass);
                document.body.appendChild(this.domNodes.wrapper);
                this.domNodes.wrapper.appendChild(this.domNodes.image);
                if (this.options.overlay) document.body.appendChild(this.domNodes.overlay);
                this.relatedElements = this.getRelated(element.rel);
                if (this.options.showCounter) {
                    if (this.relatedElements.length == 1 && this.domNodes.wrapper.contains(this.domNodes.counter)) this.domNodes.wrapper.removeChild(this.domNodes.counter);
                    else if (this.relatedElements.length > 1 && !this.domNodes.wrapper.contains(this.domNodes.counter)) this.domNodes.wrapper.appendChild(this.domNodes.counter);
                }
                if (this.options.download && this.domNodes.download) this.domNodes.wrapper.appendChild(this.domNodes.download);
                this.isAnimating = true;
                this.currentImageIndex = this.relatedElements.indexOf(element);
                var targetURL = element.getAttribute(this.options.sourceAttr);
                this.currentImage = document.createElement('img');
                this.currentImage.style.display = 'none';
                this.currentImage.setAttribute('src', targetURL);
                this.currentImage.dataset.scale = 1;
                this.currentImage.dataset.translateX = 0;
                this.currentImage.dataset.translateY = 0;
                if (this.loadedImages.indexOf(targetURL) === -1) this.loadedImages.push(targetURL);
                this.domNodes.image.innerHTML = '';
                this.domNodes.image.setAttribute('style', '');
                this.domNodes.image.appendChild(this.currentImage);
                this.fadeIn(this.domNodes.overlay, this.options.fadeSpeed);
                this.fadeIn([
                    this.domNodes.counter,
                    this.domNodes.navigation,
                    this.domNodes.closeButton,
                    this.domNodes.download
                ], this.options.fadeSpeed);
                this.show(this.domNodes.spinner);
                this.domNodes.counter.querySelector('.sl-current').innerHTML = this.currentImageIndex + 1;
                this.domNodes.counter.querySelector('.sl-total').innerHTML = this.relatedElements.length;
                this.adjustImage();
                if (this.options.preloading) this.preload();
                setTimeout(function() {
                    element.dispatchEvent(new Event('shown.' + _this8.eventNamespace));
                }, this.options.animationSpeed);
            }
        },
        {
            key: "forceFocus",
            value: function forceFocus() {
                var _this9 = this;
                this.removeEventListener(document, 'focusin.' + this.eventNamespace);
                this.addEventListener(document, 'focusin.' + this.eventNamespace, function(event) {
                    if (document !== event.target && _this9.domNodes.wrapper !== event.target && !_this9.domNodes.wrapper.contains(event.target)) _this9.domNodes.wrapper.focus();
                });
            }
        },
        {
            key: "addEventListener",
            value: function addEventListener(elements, events, callback, opts) {
                elements = this.wrap(elements);
                events = this.wrap(events);
                var _iterator = _createForOfIteratorHelper(elements), _step;
                try {
                    for(_iterator.s(); !(_step = _iterator.n()).done;){
                        var element = _step.value;
                        if (!element.namespaces) element.namespaces = {};
                         // save the namespaces addEventListener the DOM element itself
                        var _iterator2 = _createForOfIteratorHelper(events), _step2;
                        try {
                            for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
                                var event = _step2.value;
                                var options = opts || false;
                                var needsPassiveFix = [
                                    'touchstart',
                                    'touchmove',
                                    'mousewheel',
                                    'DOMMouseScroll'
                                ].indexOf(event.split('.')[0]) >= 0;
                                if (needsPassiveFix && this.isPassiveEventsSupported) {
                                    if (_typeof(options) === 'object') options.passive = true;
                                    else options = {
                                        passive: true
                                    };
                                }
                                element.namespaces[event] = callback;
                                element.addEventListener(event.split('.')[0], callback, options);
                            }
                        } catch (err) {
                            _iterator2.e(err);
                        } finally{
                            _iterator2.f();
                        }
                    }
                } catch (err) {
                    _iterator.e(err);
                } finally{
                    _iterator.f();
                }
            }
        },
        {
            key: "removeEventListener",
            value: function removeEventListener(elements, events) {
                elements = this.wrap(elements);
                events = this.wrap(events);
                var _iterator3 = _createForOfIteratorHelper(elements), _step3;
                try {
                    for(_iterator3.s(); !(_step3 = _iterator3.n()).done;){
                        var element = _step3.value;
                        var _iterator4 = _createForOfIteratorHelper(events), _step4;
                        try {
                            for(_iterator4.s(); !(_step4 = _iterator4.n()).done;){
                                var event = _step4.value;
                                if (element.namespaces && element.namespaces[event]) {
                                    element.removeEventListener(event.split('.')[0], element.namespaces[event]);
                                    delete element.namespaces[event];
                                }
                            }
                        } catch (err) {
                            _iterator4.e(err);
                        } finally{
                            _iterator4.f();
                        }
                    }
                } catch (err) {
                    _iterator3.e(err);
                } finally{
                    _iterator3.f();
                }
            }
        },
        {
            key: "fadeOut",
            value: function fadeOut(elements, duration, callback) {
                var _this10 = this;
                elements = this.wrap(elements);
                var _iterator5 = _createForOfIteratorHelper(elements), _step5;
                try {
                    for(_iterator5.s(); !(_step5 = _iterator5.n()).done;){
                        var element = _step5.value;
                        element.style.opacity = parseFloat(element) || window.getComputedStyle(element).getPropertyValue("opacity");
                    }
                } catch (err) {
                    _iterator5.e(err);
                } finally{
                    _iterator5.f();
                }
                this.isFadeIn = false;
                var step = 16.66666 / (duration || this.options.fadeSpeed), fade = function fade() {
                    var currentOpacity = parseFloat(elements[0].style.opacity);
                    if ((currentOpacity -= step) < 0) {
                        var _iterator6 = _createForOfIteratorHelper(elements), _step6;
                        try {
                            for(_iterator6.s(); !(_step6 = _iterator6.n()).done;){
                                var element = _step6.value;
                                element.style.display = "none";
                                // element.style.opacity = '';
                                element.style.opacity = 1;
                            }
                        } catch (err) {
                            _iterator6.e(err);
                        } finally{
                            _iterator6.f();
                        }
                        callback && callback.call(_this10, elements);
                    } else {
                        var _iterator7 = _createForOfIteratorHelper(elements), _step7;
                        try {
                            for(_iterator7.s(); !(_step7 = _iterator7.n()).done;){
                                var _element = _step7.value;
                                _element.style.opacity = currentOpacity;
                            }
                        } catch (err) {
                            _iterator7.e(err);
                        } finally{
                            _iterator7.f();
                        }
                        requestAnimationFrame(fade);
                    }
                };
                fade();
            }
        },
        {
            key: "fadeIn",
            value: function fadeIn(elements, duration, callback, display) {
                var _this11 = this;
                elements = this.wrap(elements);
                var _iterator8 = _createForOfIteratorHelper(elements), _step8;
                try {
                    for(_iterator8.s(); !(_step8 = _iterator8.n()).done;){
                        var element = _step8.value;
                        if (element) {
                            element.style.opacity = 0;
                            element.style.display = display || "block";
                        }
                    }
                } catch (err) {
                    _iterator8.e(err);
                } finally{
                    _iterator8.f();
                }
                this.isFadeIn = true;
                var opacityTarget = parseFloat(elements[0].dataset.opacityTarget || 1), step = 16.66666 * opacityTarget / (duration || this.options.fadeSpeed), fade = function fade() {
                    var currentOpacity = parseFloat(elements[0].style.opacity);
                    if (!((currentOpacity += step) > opacityTarget)) {
                        var _iterator9 = _createForOfIteratorHelper(elements), _step9;
                        try {
                            for(_iterator9.s(); !(_step9 = _iterator9.n()).done;){
                                var element = _step9.value;
                                if (element) element.style.opacity = currentOpacity;
                            }
                        } catch (err) {
                            _iterator9.e(err);
                        } finally{
                            _iterator9.f();
                        }
                        if (!_this11.isFadeIn) return;
                        requestAnimationFrame(fade);
                    } else {
                        var _iterator10 = _createForOfIteratorHelper(elements), _step10;
                        try {
                            for(_iterator10.s(); !(_step10 = _iterator10.n()).done;){
                                var _element2 = _step10.value;
                                if (_element2) _element2.style.opacity = opacityTarget;
                            }
                        } catch (err) {
                            _iterator10.e(err);
                        } finally{
                            _iterator10.f();
                        }
                        callback && callback.call(_this11, elements);
                    }
                };
                fade();
            }
        },
        {
            key: "hide",
            value: function hide(elements) {
                elements = this.wrap(elements);
                var _iterator11 = _createForOfIteratorHelper(elements), _step11;
                try {
                    for(_iterator11.s(); !(_step11 = _iterator11.n()).done;){
                        var element = _step11.value;
                        if (element.style.display != 'none') element.dataset.initialDisplay = element.style.display;
                        element.style.display = 'none';
                    }
                } catch (err) {
                    _iterator11.e(err);
                } finally{
                    _iterator11.f();
                }
            }
        },
        {
            key: "show",
            value: function show(elements, display) {
                elements = this.wrap(elements);
                var _iterator12 = _createForOfIteratorHelper(elements), _step12;
                try {
                    for(_iterator12.s(); !(_step12 = _iterator12.n()).done;){
                        var element = _step12.value;
                        element.style.display = element.dataset.initialDisplay || display || 'block';
                    }
                } catch (err) {
                    _iterator12.e(err);
                } finally{
                    _iterator12.f();
                }
            }
        },
        {
            key: "wrap",
            value: function wrap(input) {
                return typeof input[Symbol.iterator] === 'function' && typeof input !== 'string' ? input : [
                    input
                ];
            }
        },
        {
            key: "on",
            value: function on(events, callback) {
                events = this.wrap(events);
                var _iterator13 = _createForOfIteratorHelper(this.elements), _step13;
                try {
                    for(_iterator13.s(); !(_step13 = _iterator13.n()).done;){
                        var element = _step13.value;
                        if (!element.fullyNamespacedEvents) element.fullyNamespacedEvents = {};
                        var _iterator14 = _createForOfIteratorHelper(events), _step14;
                        try {
                            for(_iterator14.s(); !(_step14 = _iterator14.n()).done;){
                                var event = _step14.value;
                                element.fullyNamespacedEvents[event] = callback;
                                element.addEventListener(event, callback);
                            }
                        } catch (err) {
                            _iterator14.e(err);
                        } finally{
                            _iterator14.f();
                        }
                    }
                } catch (err) {
                    _iterator13.e(err);
                } finally{
                    _iterator13.f();
                }
                return this;
            }
        },
        {
            key: "off",
            value: function off(events) {
                events = this.wrap(events);
                var _iterator15 = _createForOfIteratorHelper(this.elements), _step15;
                try {
                    for(_iterator15.s(); !(_step15 = _iterator15.n()).done;){
                        var element = _step15.value;
                        var _iterator16 = _createForOfIteratorHelper(events), _step16;
                        try {
                            for(_iterator16.s(); !(_step16 = _iterator16.n()).done;){
                                var event = _step16.value;
                                if (typeof element.fullyNamespacedEvents !== 'undefined' && event in element.fullyNamespacedEvents) element.removeEventListener(event, element.fullyNamespacedEvents[event]);
                            }
                        } catch (err) {
                            _iterator16.e(err);
                        } finally{
                            _iterator16.f();
                        }
                    }
                } catch (err) {
                    _iterator15.e(err);
                } finally{
                    _iterator15.f();
                }
                return this;
            }
        },
        {
            key: "open",
            value: function open(elem) {
                var position = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
                elem = elem || this.elements[0];
                if (typeof jQuery !== "undefined" && elem instanceof jQuery) elem = elem.get(0);
                if (position > 0) elem = this.elements[position];
                this.initialImageIndex = this.elements.indexOf(elem);
                if (this.initialImageIndex > -1) this.openImage(elem);
            }
        },
        {
            key: "openPosition",
            value: function openPosition(position) {
                var elem = this.elements[position];
                this.open(elem, position);
            }
        },
        {
            key: "next",
            value: function next() {
                this.loadImage(1);
            }
        },
        {
            key: "prev",
            value: function prev() {
                this.loadImage(-1);
            }
        },
        {
            key: "getLighboxData",
            value: function getLighboxData() {
                return {
                    currentImageIndex: this.currentImageIndex,
                    currentImage: this.currentImage,
                    globalScrollbarWidth: this.globalScrollbarWidth
                };
            }
        },
        {
            key: "destroy",
            value: function destroy() {
                //remove all custom event listeners from elements
                this.off([
                    'close.' + this.eventNamespace,
                    'closed.' + this.eventNamespace,
                    'nextImageLoaded.' + this.eventNamespace,
                    'prevImageLoaded.' + this.eventNamespace,
                    'change.' + this.eventNamespace,
                    'nextDone.' + this.eventNamespace,
                    'prevDone.' + this.eventNamespace,
                    'error.' + this.eventNamespace,
                    'changed.' + this.eventNamespace,
                    'next.' + this.eventNamespace,
                    'prev.' + this.eventNamespace,
                    'show.' + this.eventNamespace,
                    'shown.' + this.eventNamespace
                ]);
                this.removeEventListener(this.elements, 'click.' + this.eventNamespace);
                this.removeEventListener(document, 'focusin.' + this.eventNamespace);
                this.removeEventListener(document.body, 'contextmenu.' + this.eventNamespace);
                this.removeEventListener(document.body, 'keyup.' + this.eventNamespace);
                this.removeEventListener(this.domNodes.navigation.getElementsByTagName('button'), 'click.' + this.eventNamespace);
                this.removeEventListener(this.domNodes.closeButton, 'click.' + this.eventNamespace);
                this.removeEventListener(window, 'resize.' + this.eventNamespace);
                this.removeEventListener(window, 'hashchange.' + this.eventNamespace);
                this.close();
                if (this.isOpen) {
                    document.body.removeChild(this.domNodes.wrapper);
                    document.body.removeChild(this.domNodes.overlay);
                }
                this.elements = null;
            }
        },
        {
            key: "refresh",
            value: function refresh() {
                if (!this.initialSelector) throw 'refreshing only works when you initialize using a selector!';
                var options = this.options, selector = this.initialSelector;
                this.destroy();
                this.constructor(selector, options);
                return this;
            }
        }
    ]);
    return SimpleLightbox;
}();
var _default = SimpleLightbox;
exports["default"] = _default;
global.SimpleLightbox = SimpleLightbox;

},{}],"1MVRB":[function() {},{}],"kaxSc":[function() {},{}],"dMjm4":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createMarkup", ()=>createMarkup);
var _izitoast = require("izitoast");
var _izitoastDefault = parcelHelpers.interopDefault(_izitoast);
var _simplelightbox = require("simplelightbox");
var _simplelightboxDefault = parcelHelpers.interopDefault(_simplelightbox);
var _iziToastMinCss = require("izitoast/dist/css/iziToast.min.css");
var _simpleLightboxMinCss = require("simplelightbox/dist/simple-lightbox.min.css");
const mainList = document.querySelector(".main-list");
const showeMoreButton = document.querySelector(".showMore");
function createMarkup(arr) {
    if (arr.length === 0) {
        console.log(showeMoreButton);
        showeMoreButton.style.display = "none";
        (0, _izitoastDefault.default).show({
            title: "\u041F\u043E\u043C\u0438\u043B\u043A\u0430",
            message: "\u041D\u0435 \u0437\u043D\u0430\u0439\u0434\u0435\u043D\u043E \u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u044C \u0437\u0430 \u0432\u0430\u0448\u0438\u043C \u0437\u0430\u043F\u0438\u0442\u043E\u043C",
            position: "topRight"
        });
    } else {
        const html = arr.map((obj)=>{
            showeMoreButton.style.display = "block";
            return `<li class="main-lst_item">
                <a class="main-lst_big-img gallery" href="${obj.largeImageURL}"><img class="main-lst_small-img" src="${obj.webformatURL}" alt="${obj.id}"></a>
            </li>`;
        }).join("");
        mainList.insertAdjacentHTML("beforeend", html);
    }
}
const lightbox = new (0, _simplelightboxDefault.default)(".gallery", {
    captions: true,
    captionsData: "alt",
    captionDelay: 250
});

},{"izitoast":"ftHqY","simplelightbox":"9ydBq","izitoast/dist/css/iziToast.min.css":"1MVRB","simplelightbox/dist/simple-lightbox.min.css":"kaxSc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1MVRB":[function() {},{}],"kaxSc":[function() {},{}],"gkKU3":[function(require,module,exports,__globalThis) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"amBGP":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getImeges", ()=>getImeges);
const getImeges = async (keyWords, item, page)=>{
    try {
        const getData = await fetch(`https://pixabay.com/api/?key=48523978-236760f943e457ffe618a45b5&q=${keyWords}&image_type=photo&safesearch=true&orientation=horizontal&page=${page}&per_page=${item}`).then((data)=>{
            return data.json();
        });
        return getData;
    } catch (error) {
        return error;
    }
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8lRBv":[function(require,module,exports,__globalThis) {
var _getImegesJs = require("./getImeges.js");
var _createMarkupJs = require("./createMarkup.js");
const mainButton = document.querySelector(".main_button");
const mainInput = document.querySelector(".main_input");
const showeMoreButton = document.querySelector(".showMore");
mainButton.addEventListener("click", addToSite);
let keyWord;
let item = 4;
let page = 1;
function addToSite(event) {
    if (event !== undefined) {
        keyWord = mainInput.value;
        page = 1;
    }
    console.log(keyWord);
    (0, _getImegesJs.getImeges)(keyWord, item, page).then((data)=>{
        (0, _createMarkupJs.createMarkup)(data.hits);
        mainInput.value = "";
    });
}
showeMoreButton.addEventListener("click", showeMore);
function showeMore() {
    page += 1;
    addToSite();
}

},{"./getImeges.js":"amBGP","./createMarkup.js":"dMjm4"}]},["9mu7C","8lqZg"], "8lqZg", "parcelRequire94c2")

//# sourceMappingURL=index.975ef6c8.js.map
