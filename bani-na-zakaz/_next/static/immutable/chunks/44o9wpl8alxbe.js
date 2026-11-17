!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._posthogChunkIds=e._posthogChunkIds||{},e._posthogChunkIds[n]="01a1cdaf-6bae-7591-96ac-197e331a1994")}catch(e){}}();(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,953294,e=>{"use strict";var r=e.i(676897),t=e.i(514880),i=e.i(982459);e.s(["default",0,e=>{let o,n=(0,t.c)(3),{error:s,reset:a}=e;return n[0]!==s||n[1]!==a?(o=(0,r.jsx)(i.SiteErrorPage,{error:s,reset:a}),n[0]=s,n[1]=a,n[2]=o):o=n[2],o}])},982459,e=>{"use strict";var r=e.i(676897),t=e.i(514880),i=e.i(10241),o=e.i(517619),n=e.i(69150),s=e.i(479578);let a=async(e,r)=>{let t=(0,s.prepareErrorLog)(e,r);if((0,s.logToConsole)("error",t.message,t.metadata,t.error),t.error){let e=(0,s.generateAdditionalProperties)("error",t.error,t.metadata);n.default.captureException(t.error,e);return}n.default.capture(s.APPLICATION_LOG_EVENT,{level:"error",message:t.message,...t.metadata??{}})};var l=e.i(973736);let c=`
	.error-container {
		display: flex;
		min-height: 100vh;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: 2rem;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
	}
	.error-content {
		display: flex;
		width: 100%;
		max-width: 400px;
		flex-direction: column;
		align-items: center;
		gap: 1rem;
	}
	.error-inner {
		display: flex;
		width: 100%;
		flex-direction: column;
		align-items: center;
		gap: 1rem;
	}
	.error-info {
		display: flex;
		width: 100%;
		flex-direction: column;
		align-items: center;
		gap: 0.5rem;
	}
	.error-icon {
		display: flex;
		height: 4rem;
		width: 4rem;
		align-items: center;
		justify-content: center;
	}
	.error-icon svg {
		height: 4rem;
		width: 4rem;
		color: rgba(0, 0, 0, 0.8);
		stroke: currentColor;
		fill: none;
	}
	.error-title {
		text-align: center;
		font-size: 1.5rem;
		font-weight: 600;
		color: rgba(0, 0, 0, 0.8);
		margin: 0;
	}
	.error-description {
		text-align: center;
		font-size: 0.875rem;
		font-weight: 500;
		line-height: 1.43;
		color: rgba(0, 0, 0, 0.55);
		margin: 0;
	}
	.error-button {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		border-radius: 0.5rem;
		background-color: #000;
		padding: 0.75rem 1.5rem;
		font-size: 0.875rem;
		font-weight: 500;
		color: #fff;
		border: none;
		cursor: pointer;
		transition: background-color 0.2s;
	}
	.error-button:hover {
		background-color: rgba(0, 0, 0, 0.9);
	}
	.error-button svg {
		height: 1.25rem;
		width: 1.25rem;
		stroke: currentColor;
		fill: none;
	}
`;e.s(["SiteErrorPage",0,e=>{let n,s,d,m,u,h,g,x,f=(0,t.c)(13),{error:p,reset:v}=e,b=(0,o.usePathname)(),j=(0,l.useSiteShellContext)(),y=(0,i.useRef)(!1);f[0]!==p||f[1]!==b||f[2]!==j?(n=()=>{y.current||(y.current=!0,a(p,{message:"Customer website render error",pathname:b,siteId:j?.siteid,businessId:j?.visibilityStatus==="public"?j.businessId:void 0,visibilityStatus:j?.visibilityStatus,errorDigest:p.digest}))},s=[p,b,j],f[0]=p,f[1]=b,f[2]=j,f[3]=n,f[4]=s):(n=f[3],s=f[4]),(0,i.useEffect)(n,s),f[5]!==v?(d=()=>{v?v():window.location.reload()},f[5]=v,f[6]=d):d=f[6];let S=d;return f[7]===Symbol.for("react.memo_cache_sentinel")?(m=(0,r.jsx)("style",{children:c}),f[7]=m):m=f[7],f[8]===Symbol.for("react.memo_cache_sentinel")?(u=(0,r.jsxs)("div",{className:"error-info",children:[(0,r.jsx)("div",{className:"error-icon",children:(0,r.jsx)("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:(0,r.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5,d:"M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"})})}),(0,r.jsx)("h1",{className:"error-title",children:"Something went wrong"}),(0,r.jsx)("p",{className:"error-description",children:"We're sorry, but something unexpected happened. Please try reloading the page."})]}),f[8]=u):u=f[8],f[9]===Symbol.for("react.memo_cache_sentinel")?(h=(0,r.jsx)("svg",{viewBox:"0 0 24 24","aria-hidden":"true",children:(0,r.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"})}),g=(0,r.jsx)("span",{children:"Reload Page"}),f[9]=h,f[10]=g):(h=f[9],g=f[10]),f[11]!==S?(x=(0,r.jsxs)(r.Fragment,{children:[m,(0,r.jsx)("div",{className:"error-container",children:(0,r.jsx)("div",{className:"error-content",children:(0,r.jsxs)("div",{className:"error-inner",children:[u,(0,r.jsxs)("button",{onClick:S,className:"error-button",children:[h,g]})]})})})]}),f[11]=S,f[12]=x):x=f[12],x}],982459)},973736,e=>{"use strict";var r=e.i(676897),t=e.i(514880),i=e.i(10241);let o=(0,i.createContext)(null);e.s(["SiteShellProvider",0,e=>{let i,n=(0,t.c)(3),{value:s,children:a}=e;return n[0]!==a||n[1]!==s?(i=(0,r.jsx)(o.Provider,{value:s,children:a}),n[0]=a,n[1]=s,n[2]=i):i=n[2],i},"useSiteShellContext",0,()=>(0,i.useContext)(o)])},220952,(e,r,t)=>{"use strict";var i=e.r(10241).__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;t.c=function(e){return i.H.useMemoCache(e)}},514880,(e,r,t)=>{"use strict";r.exports=e.r(220952)},517619,(e,r,t)=>{r.exports=e.r(987937)}]);

//# sourceMappingURL=1bzfez0onukst.js.map
//# chunkId=01a1cdaf-6bae-7591-96ac-197e331a1994