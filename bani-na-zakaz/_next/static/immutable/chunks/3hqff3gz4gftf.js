!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._posthogChunkIds=e._posthogChunkIds||{},e._posthogChunkIds[n]="01a1c816-ef0e-7701-8a0a-d6acd8c13b62")}catch(e){}}();(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,414255,e=>{"use strict";var t=e.i(676897),r=e.i(514880),n=e.i(10241);let o="--demo-mode-banner-height",i=`
	:root {
		${o}: 52px;
	}
	/* Important so Radix's scroll lock (body[data-scroll-locked] resets padding-top) does not shift the page. */
	body {
		padding-top: var(${o}, 52px) !important;
	}
	header[style*="position: fixed"],
	header[style*="position:fixed"],
	header[style*="position: sticky"],
	header[style*="position:sticky"] {
		top: var(${o}, 52px) !important;
	}
	/* A warning tape: yellow with diagonal hazard stripes. The stripes are faint and fade
	   out under the label, so the banner is unmistakable from across the room and the
	   words are still easy to read. */
	.demo-mode-banner {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		display: flex;
		align-items: center;
		justify-content: center;
		gap: 8px;
		background-color: #f7c948;
		padding: 16px 24px;
		z-index: 9999;
		overflow: hidden;
		font-family: "Geist", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
	}
	.demo-mode-banner::before {
		content: "";
		position: absolute;
		inset: 0;
		pointer-events: none;
		background-image: repeating-linear-gradient(
			135deg,
			rgba(0, 0, 0, 0.16) 0 14px,
			transparent 14px 28px
		);
		-webkit-mask-image: linear-gradient(to right, #000 0%, transparent 34%, transparent 66%, #000 100%);
		mask-image: linear-gradient(to right, #000 0%, transparent 34%, transparent 66%, #000 100%);
	}
	.demo-mode-banner-text {
		position: relative;
		display: flex;
		gap: 4px;
		font-size: 14px;
		line-height: 20px;
		font-weight: 400;
		color: #1b1b1b;
		margin: 0;
		text-align: center;
	}
`,a=new Set(["fixed","sticky"]),s=e=>{for(let t of document.querySelectorAll("header")){if(t.style.position)continue;t.style.removeProperty("top");let{position:r,top:n}=getComputedStyle(t);a.has(r)&&t.style.setProperty("top",`${(Number.parseFloat(n)||0)+e}px`,"important")}};e.s(["DemoModeBanner",0,()=>{let e,a,l,d,c=(0,r.c)(4),p=(0,n.useRef)(null);return c[0]===Symbol.for("react.memo_cache_sentinel")?(e=()=>{let e=document.documentElement;e.style.setProperty(o,"52px");let t=p.current;if(!t)return()=>{e.style.removeProperty(o)};let r=()=>{let r=Math.ceil(t.getBoundingClientRect().height);r>0&&(e.style.setProperty(o,`${r}px`),s(r))};if(r(),"u"<typeof ResizeObserver)return()=>{e.style.removeProperty(o)};let n=new ResizeObserver(r);return n.observe(t),()=>{n.disconnect(),e.style.removeProperty(o)}},a=[],c[0]=e,c[1]=a):(e=c[0],a=c[1]),(0,n.useEffect)(e,a),c[2]===Symbol.for("react.memo_cache_sentinel")?(l=(0,t.jsx)("style",{children:i}),c[2]=l):l=c[2],c[3]===Symbol.for("react.memo_cache_sentinel")?(d=(0,t.jsxs)(t.Fragment,{children:[l,(0,t.jsx)("div",{ref:p,className:"demo-mode-banner",children:(0,t.jsxs)("p",{className:"demo-mode-banner-text",children:[(0,t.jsx)("span",{style:{fontWeight:500},children:"Preview mode"}),(0,t.jsx)("span",{children:"· this website isn’t live yet"})]})})]}),c[3]=d):d=c[3],d},"headersBelowBanner",0,s])},993209,e=>{"use strict";var t=e.i(514880),r=e.i(10241);function n(e){if(e.defaultPrevented||0!==e.button||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey)return;let t=e.target;if(!(t instanceof Element))return;let r=t.closest("a");if(!r||r.hasAttribute("download"))return;let n=r.getAttribute("target");if(n&&"_self"!==n)return;let o=r.getAttribute("href");if(!o||o.startsWith("#"))return;let i=new URL(r.href,window.location.href);i.origin!==window.location.origin||i.pathname===window.location.pathname&&i.search===window.location.search&&i.hash&&i.hash!==window.location.hash||(e.preventDefault(),window.location.assign(i.toString()))}function o(){return document.addEventListener("click",n,!0),()=>document.removeEventListener("click",n,!0)}e.s(["NavigationInterceptor",0,()=>{let e,n=(0,t.c)(1);return n[0]===Symbol.for("react.memo_cache_sentinel")?(e=[],n[0]=e):e=n[0],(0,r.useEffect)(o,e),null}])},973736,e=>{"use strict";var t=e.i(676897),r=e.i(514880),n=e.i(10241);let o=(0,n.createContext)(null);e.s(["SiteShellProvider",0,e=>{let n,i=(0,r.c)(3),{value:a,children:s}=e;return i[0]!==s||i[1]!==a?(n=(0,t.jsx)(o.Provider,{value:a,children:s}),i[0]=s,i[1]=a,i[2]=n):n=i[2],n},"useSiteShellContext",0,()=>(0,n.useContext)(o)])}]);

//# sourceMappingURL=1zw-neq2lqyhb.js.map
//# chunkId=01a1c816-ef0e-7701-8a0a-d6acd8c13b62