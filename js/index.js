(()=>{"use strict";({"./src/scripts/index.ts":
/*!******************************!*\
  !*** ./src/scripts/index.ts ***!
  \******************************/function(){var t=this&&this.__awaiter||function(t,n,e,c){return new(e||(e=Promise))((function(o,i){function u(t){try{s(c.next(t))}catch(t){i(t)}}function r(t){try{s(c.throw(t))}catch(t){i(t)}}function s(t){var n;t.done?o(t.value):(n=t.value,n instanceof e?n:new e((function(t){t(n)}))).then(u,r)}s((c=c.apply(t,n||[])).next())}))};const n=window.ethereum,e=document.getElementById("connectWallet"),c=document.getElementById("accountID");let o=null;null==e||e.addEventListener("click",(function(){return t(this,void 0,void 0,(function*(){if("undefined"!==n)try{const t=yield n.request({method:"eth_requestAccounts"});o=t[0],e&&(e.textContent="connected"),c&&(c.textContent=null!=o?o:"")}catch(t){console.error(t)}}))}))}})["./src/scripts/index.ts"]()})();