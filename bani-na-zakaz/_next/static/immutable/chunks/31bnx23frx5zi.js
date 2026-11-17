!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._posthogChunkIds=e._posthogChunkIds||{},e._posthogChunkIds[n]="01a1dc92-5848-7ad3-8d5f-c78b109267e6")}catch(e){}}();(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,889395,e=>{"use strict";var t=e.i(676897),r=e.i(514880),n=e.i(454022),o=e.i(702297),i=e.i(11920),a=e.i(295840),l=e.i(510526);let s=`
	.not-found-container {
		display: flex;
		min-height: 100dvh;
		align-items: center;
		justify-content: center;
		padding: 2rem 1.5rem;
		background: linear-gradient(180deg, #f8fafc 0%, #f1f5f9 100%);
		box-sizing: border-box;
	}
	.not-found-container-themed {
		min-height: clamp(20rem, 58vh, 42rem);
		padding: 4rem 1.5rem;
		background: transparent;
	}
	.not-found-content {
		display: flex;
		width: 100%;
		max-width: 28rem;
		flex-direction: column;
		align-items: center;
		gap: 1rem;
		text-align: center;
		font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
	}
	.not-found-code {
		margin: 0;
		font-size: 4rem;
		line-height: 1;
		font-weight: 700;
		letter-spacing: -0.02em;
	}
	.not-found-title {
		margin: 0;
		font-size: 1.75rem;
		line-height: 2rem;
		font-weight: 600;
	}
	.not-found-description {
		margin: 0;
		font-size: 1rem;
		line-height: 1.5rem;
	}
	.not-found-link {
		display: inline-flex;
		margin-top: 0.5rem;
		align-items: center;
		justify-content: center;
		border-radius: 0.5rem;
		padding: 0.625rem 1rem;
		font-size: 0.875rem;
		font-weight: 500;
		text-decoration: none;
		transition: background-color 0.2s ease-in-out;
	}
	.not-found-link:hover {
		background-color: var(--not-found-link-hover-bg-color, #1f2937);
	}
`,u=()=>{let e,n,o,i,s,u,c,d,m,g,f=(0,r.c)(22),{colorPalette:h}=(0,a.useTheme)();f[0]===Symbol.for("react.memo_cache_sentinel")?(e={type:"small-text",targetColor:{tint:"neutral",contrast:8}},f[0]=e):e=f[0];let b=(0,l.useContextAwareForegroundColor)(e);f[1]===Symbol.for("react.memo_cache_sentinel")?(n={type:"small-text",targetColor:{tint:"neutral",contrast:5}},f[1]=n):n=f[1];let C=(0,l.useContextAwareForegroundColor)(n),p=h.tokens["primary-solid"]??"#111827",x=h.tokens["primary-solid-2"]??"#1f2937";f[2]===Symbol.for("react.memo_cache_sentinel")?(o={tint:"neutral",contrast:8},f[2]=o):o=f[2],f[3]!==p?(i={type:"ui-or-graphics",targetColor:o,backgroundColorOverride:p},f[3]=p,f[4]=i):i=f[4];let y=(0,l.useContextAwareForegroundColor)(i);f[5]!==p||f[6]!==x||f[7]!==y?(s={backgroundColor:p,color:y,"--not-found-link-hover-bg-color":x},f[5]=p,f[6]=x,f[7]=y,f[8]=s):s=f[8];let v=s;return f[9]!==b?(u=(0,t.jsx)("p",{className:"not-found-code",style:{color:b},children:"404"}),f[9]=b,f[10]=u):u=f[10],f[11]!==b?(c=(0,t.jsx)("h1",{className:"not-found-title",style:{color:b},children:"Page not found"}),f[11]=b,f[12]=c):c=f[12],f[13]!==C?(d=(0,t.jsx)("p",{className:"not-found-description",style:{color:C},children:"The page you are looking for doesn't exist or may have moved."}),f[13]=C,f[14]=d):d=f[14],f[15]!==v?(m=(0,t.jsx)("a",{className:"not-found-link",href:"/",style:v,children:"Back to home"}),f[15]=v,f[16]=m):m=f[16],f[17]!==u||f[18]!==c||f[19]!==d||f[20]!==m?(g=(0,t.jsxs)("div",{className:"not-found-content",children:[u,c,d,m]}),f[17]=u,f[18]=c,f[19]=d,f[20]=m,f[21]=g):g=f[21],g},c=e=>{let n,o,a,l=(0,r.c)(4),{backgroundColor:c}=e;return l[0]===Symbol.for("react.memo_cache_sentinel")?(n=(0,t.jsx)("style",{children:s}),l[0]=n):n=l[0],l[1]===Symbol.for("react.memo_cache_sentinel")?(o=(0,t.jsx)("main",{className:"not-found-container not-found-container-themed",children:(0,t.jsx)(u,{})}),l[1]=o):o=l[1],l[2]!==c?(a=(0,t.jsxs)(t.Fragment,{children:[n,(0,t.jsx)(i.IdsBackgroundContextProvider,{precomputedColorValue:c,children:o})]}),l[2]=c,l[3]=a):a=l[3],a};var d=e.i(973736),m=e.i(874113);e.s(["default",0,()=>{let e,i,a,l,s,u=(0,r.c)(21),g=(0,d.useSiteShellContext)();if(!g){let e;return u[0]===Symbol.for("react.memo_cache_sentinel")?(e=(0,t.jsx)(c,{}),u[0]=e):e=u[0],e}if("private"===g.visibilityStatus){let e;return u[1]===Symbol.for("react.memo_cache_sentinel")?(e=(0,t.jsx)(m.UnpublishedPage,{}),u[1]=e):e=u[1],e}if(!g.themeData){let e;return u[2]===Symbol.for("react.memo_cache_sentinel")?(e=(0,t.jsx)(c,{}),u[2]=e):e=u[2],e}return u[3]!==g.businessId||u[4]!==g.siteid?(e=(0,t.jsx)(n.default,{strategy:"lazyOnload",src:"https://unpkg.com/@tinybirdco/flock.js@1.7.0",integrity:"sha384-2z8MRWl3uDPYBlooc4vwyyXugzhUIcMo34Q6lvDfjvuE7iHT8HtB/s6vAXepXzxy",crossOrigin:"anonymous","data-proxy-url":"/alor/v0/events","data-tenant-id":g.businessId,"data-tb-website-id":g.siteid,"web-vitals":"true"}),u[3]=g.businessId,u[4]=g.siteid,u[5]=e):e=u[5],u[6]!==g.hiddenPaths?(i=g.hiddenPaths?.length?{hiddenPaths:g.hiddenPaths}:void 0,u[6]=g.hiddenPaths,u[7]=i):i=u[7],u[8]!==g.rootBackgroundColor?(a=(0,t.jsx)(c,{backgroundColor:g.rootBackgroundColor}),u[8]=g.rootBackgroundColor,u[9]=a):a=u[9],u[10]!==g.businessId||u[11]!==g.content||u[12]!==g.sectionLayoutConfigMap||u[13]!==g.structure||u[14]!==g.themeData||u[15]!==i||u[16]!==a?(l=(0,t.jsx)(o.LiveSiteRenderer,{content:g.content,structure:g.structure,path:"/",currentPath:null,businessId:g.businessId,themeData:g.themeData,sectionLayoutConfigMap:g.sectionLayoutConfigMap,data:i,runsSiteCode:!0,children:a}),u[10]=g.businessId,u[11]=g.content,u[12]=g.sectionLayoutConfigMap,u[13]=g.structure,u[14]=g.themeData,u[15]=i,u[16]=a,u[17]=l):l=u[17],u[18]!==e||u[19]!==l?(s=(0,t.jsxs)(t.Fragment,{children:[e,l]}),u[18]=e,u[19]=l,u[20]=s):s=u[20],s}],889395)},874113,e=>{"use strict";var t=e.i(676897),r=e.i(514880);let n=`
	.unpublished-container {
		display: flex;
		height: 100dvh;
		width: 100%;
		flex-direction: column;
		background-color: #f9fafb;
		padding: 2.5rem 1rem;
		box-sizing: border-box;
		margin: 0;
		overflow: hidden;
	}
	.unpublished-center {
		display: flex;
		flex: 1;
		align-items: center;
		justify-content: center;
		min-height: 0;
		width: 100%;
	}
	.unpublished-content {
		text-align: center;
		color: rgba(0, 0, 0, 0.7);
		width: 100%;
		max-width: 100%;
		box-sizing: border-box;
		padding: 0 1rem;
	}
	.unpublished-title {
		font-size: 1.875rem;
		font-weight: 600;
		margin: 0;
		word-wrap: break-word;
		overflow-wrap: break-word;
	}
`;e.s(["UnpublishedPage",0,()=>{let e,o,i=(0,r.c)(2);return i[0]===Symbol.for("react.memo_cache_sentinel")?(e=(0,t.jsx)("style",{children:n}),i[0]=e):e=i[0],i[1]===Symbol.for("react.memo_cache_sentinel")?(o=(0,t.jsxs)(t.Fragment,{children:[e,(0,t.jsx)("div",{className:"unpublished-container",children:(0,t.jsx)("div",{className:"unpublished-center",children:(0,t.jsx)("div",{className:"unpublished-content",children:(0,t.jsx)("h1",{className:"unpublished-title",children:"Coming soon"})})})})]}),i[1]=o):o=i[1],o}])},745602,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"useMergedRef",{enumerable:!0,get:function(){return o}});let n=e.r(10241);function o(e,t){let r=(0,n.useRef)(null),o=(0,n.useRef)(null);return(0,n.useCallback)(n=>{if(null===n){let e=r.current;e&&(r.current=null,e());let t=o.current;t&&(o.current=null,t())}else e&&(r.current=i(e,n)),t&&(o.current=i(t,n))},[e,t])}function i(e,t){if("function"!=typeof e)return e.current=t,()=>{e.current=null};{let r=e(t);return"function"==typeof r?r:()=>e(null)}}("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},454022,(e,t,r)=>{t.exports=e.r(521320)},827165,954858,e=>{"use strict";var t=e.i(514880),r=e.i(10241);let n=e=>{let t=e?.parentElement??null;for(;t;){let e=getComputedStyle(t).overflowY;if("auto"===e||"scroll"===e||"overlay"===e)return t;t=t.parentElement}return null};e.s(["getScrollParent",0,n,"hasStickyBlockingAncestor",0,e=>{let t=e?.parentElement??null;for(;t;){let{overflowX:e,overflowY:r}=getComputedStyle(t);if("hidden"===e||"hidden"===r)return!0;if("auto"===r||"scroll"===r||"overlay"===r)break;t=t.parentElement}return!1},"visualDeltaToLayoutPx",0,(e,t)=>{let r=t.clientHeight;if(r<=0)return e;let n=t.getBoundingClientRect().height;return n<=0?e:e/(n/r)},"windowVisualDeltaToLayoutPx",0,e=>{if("u"<typeof document)return e;let t=document.documentElement,r=t.getBoundingClientRect().height,n=t.offsetHeight;return n<=0||r<=0?e:e/(r/n)}],954858),e.s(["useScrollProgress",0,e=>{let o,i,a,l=(0,t.c)(7),{targetRef:s,computeProgress:u,onProgress:c,disabled:d}=e,m=void 0!==d&&d,g=(0,r.useRef)(u),f=(0,r.useRef)(c);l[0]!==u||l[1]!==c?(o=()=>{g.current=u,f.current=c},l[0]=u,l[1]=c,l[2]=o):o=l[2],(0,r.useEffect)(o),l[3]!==m||l[4]!==s?(i=()=>{let e;if(m)return;let t=s.current;if(!t)return;let r=n(t),o=r??window,i=-1,a=()=>{let e=t.getBoundingClientRect(),n=r?.getBoundingClientRect(),o=g.current({top:e.top-(n?.top??0),height:e.height,scrollportHeight:n?.height??window.innerHeight}),a=Number.isFinite(o)?Math.min(1,Math.max(0,o)):0;a!==i&&(i=a,f.current(a))},l=()=>{void 0===e&&(e=requestAnimationFrame(()=>{e=void 0,a()}))};a(),o.addEventListener("scroll",l,{passive:!0}),window.addEventListener("resize",l);let u=new ResizeObserver(l);return u.observe(t),r&&u.observe(r),()=>{void 0!==e&&cancelAnimationFrame(e),o.removeEventListener("scroll",l),window.removeEventListener("resize",l),u.disconnect()}},a=[s,m],l[3]=m,l[4]=s,l[5]=i,l[6]=a):(i=l[5],a=l[6]),(0,r.useEffect)(i,a)}],827165)},776630,e=>{e.v(t=>Promise.all(["static/immutable/chunks/10i5mgdgch4hg.js"].map(t=>e.l(t))).then(()=>t(138852)))},956209,e=>{"use strict";var t=e.i(10241);let r=(0,t.createContext)(void 0);e.s(["BackgroundContext",0,r,"useBackgroundColor",0,()=>{let e=(0,t.useContext)(r);return void 0===e?null:e}])},169717,e=>{e.v(t=>Promise.all(["static/immutable/chunks/2l4ex0gz9ayow.js","static/immutable/chunks/2wx_mpfs-89h8.js","static/immutable/chunks/43cm-o4evducb.js","static/immutable/chunks/1dw1q4ruicqzp.js","static/immutable/chunks/3hk8f0_jx06o5.js","static/immutable/chunks/0z_di0jmci9ya.js"].map(t=>e.l(t))).then(()=>t(581058)))},127786,e=>{"use strict";let t="durable_unavailable";e.s(["UNAVAILABLE_IMAGE_PARAM",0,t,"isUnavailableImage",0,e=>{if(!e)return!1;try{let r=new URL(e);return"true"===r.searchParams.get(t)}catch{return!1}}])},942094,208685,e=>{"use strict";e.i(676897),e.i(514880);var t=e.i(10241);let r={isActivelyStreaming:!1,hasGenerationState:!1,isAnySectionStreaming:!1,sectionGenerationStateByInstanceId:new Map},n=(0,t.createContext)(r);e.s(["useGenerationState",0,()=>(0,t.useContext)(n)],208685);let o=(0,t.createContext)(null);e.s(["useSectionGenerationState",0,()=>(0,t.useContext)(o)],942094)},832127,e=>{"use strict";var t=e.i(80539);e.s(["isLightColor",0,e=>{try{return new t.default(e).luminance>.5}catch{return!0}}])},855252,e=>{"use strict";var t=e.i(832127);e.s(["getSkeletonColorsForBackground",0,e=>{let r=!(!e||(0,t.isLightColor)(e));return{bgColor:r?"rgba(255, 255, 255, 0.1)":"rgba(0, 0, 0, 0.1)",shimmerColor:r?"linear-gradient(95deg, transparent 0%, rgba(255, 255, 255, 0.08) 50%, transparent 100%)":"linear-gradient(95deg, transparent 0%, rgba(255, 255, 255, 0.8) 50%, transparent 100%)"}},"getSkeletonColorsForBackgroundImage",0,()=>({bgColor:"rgba(0, 0, 0, 0.75)",shimmerColor:"rgba(255, 255, 255, 0.2)"}),"getSkeletonColorsForText",0,e=>{let r=!!e&&(0,t.isLightColor)(e);return{bgColor:r?"rgba(255, 255, 255, 0.1)":"rgba(0, 0, 0, 0.1)",shimmerColor:r?"linear-gradient(95deg, transparent 0%, rgba(255, 255, 255, 0.08) 50%, transparent 100%)":"linear-gradient(95deg, transparent 0%, rgba(255, 255, 255, 0.8) 50%, transparent 100%)"}}])},414006,848300,e=>{"use strict";let t="https://images.unsplash.com/photo-1557683316-973673baf926?w=2&h=2&q=1&fit=crop";e.s(["PLACEHOLDER_IMAGE_URL",0,t],848300),e.s(["shouldShowImageSkeleton",0,({sectionGenerationState:e,src:r})=>!!e&&!!e.isTracked&&(!r||r===t||!e.hasImages),"shouldShowTextSkeleton",0,({sectionGenerationState:e})=>!!e&&!!e.isTracked&&!e.hasText],414006)},510526,e=>{"use strict";var t=e.i(514880),r=e.i(956209),n=e.i(295840),o=e.i(511194),i=e.i(761573);let a=({colorPalette:e,backgroundContext:t,type:r,targetColor:n,backgroundColorOverride:a})=>{if("transparent"===n.tint)return"transparent";if((0,o.isCustomForegroundColorConfig)(n))return n.value;if(null===t||void 0===t.backgroundColor)return a?(0,i.calculateColorFromConfig)(e,n,a,r):(console.warn("useContextAwareForegroundColor(): No background context found. For optimal accessibility, wrap this component in a <BackgroundContainer/>. Falling back to static foreground color."),(0,i.calculateColorFromConfig)(e,{...n,autoAdjust:"off"},null,r));let{backgroundColor:l,disableDynamicContrastAdjustment:s}=t,u=a??l;return s?(0,i.calculateColorFromConfig)(e,{...n,autoAdjust:"off"},u,r):(0,i.calculateColorFromConfig)(e,n,u,r)};e.s(["contextAwareForegroundColor",0,a,"useContextAwareBorderColor",0,e=>{let o,a=(0,t.c)(18),{color:l,backgroundColorOverride:s}=e,{colorPalette:u,themeColorCategory:c}=(0,n.useTheme)(),d=(0,r.useBackgroundColor)();if(!l?.tint){let e;return l?.category&&console.warn(`useContextAwareBorderColor(): Received BackgroundColorConfig (category: "${l.category}") instead of ForegroundColorConfig. Expected {tint, contrast?, autoAdjust?}. Falling back to neutral border color.`),a[0]!==d?.backgroundColor||a[1]!==u||a[2]!==c?(e=(0,i.calculateBorderColorFromConfig)(u,{tint:"neutral",contrast:5,autoAdjust:"loose"},d?.backgroundColor??null,c),a[0]=d?.backgroundColor,a[1]=u,a[2]=c,a[3]=e):e=a[3],e}if("transparent"===l.tint)return"transparent";if(null===d||void 0===d.backgroundColor){let e;return console.warn("useContextAwareBorderColor(): No background context found. For optimal accessibility, wrap this component in a <BackgroundContainer/>. Falling back to static border color."),a[4]!==l||a[5]!==u||a[6]!==c?(e=(0,i.calculateBorderColorFromConfig)(u,{...l,autoAdjust:"off"},null,c),a[4]=l,a[5]=u,a[6]=c,a[7]=e):e=a[7],e}let{backgroundColor:m,disableDynamicContrastAdjustment:g}=d,f=s??m;if(g){let e;return a[8]!==f||a[9]!==l||a[10]!==u||a[11]!==c?(e=(0,i.calculateBorderColorFromConfig)(u,{...l,autoAdjust:"off"},f,c),a[8]=f,a[9]=l,a[10]=u,a[11]=c,a[12]=e):e=a[12],e}return a[13]!==f||a[14]!==l||a[15]!==u||a[16]!==c?(o=(0,i.calculateBorderColorFromConfig)(u,l,f,c),a[13]=f,a[14]=l,a[15]=u,a[16]=c,a[17]=o):o=a[17],o},"useContextAwareForegroundColor",0,e=>{let o,i=(0,t.c)(6),{type:l,targetColor:s,backgroundColorOverride:u}=e,{colorPalette:c}=(0,n.useTheme)(),d=(0,r.useBackgroundColor)();return i[0]!==u||i[1]!==d||i[2]!==c||i[3]!==s||i[4]!==l?(o=a({colorPalette:c,backgroundContext:d,type:l,targetColor:s,backgroundColorOverride:u}),i[0]=u,i[1]=d,i[2]=c,i[3]=s,i[4]=l,i[5]=o):o=i[5],o}])},597470,e=>{"use strict";var t=e.i(10241),r=e.i(295840);let n="(prefers-reduced-motion: reduce)",o=e=>{if("function"!=typeof window.matchMedia)return()=>{};let t=window.matchMedia(n);return t.addEventListener("change",e),()=>t.removeEventListener("change",e)},i=()=>"function"==typeof window.matchMedia&&window.matchMedia(n).matches,a=()=>!1;e.s(["usePrefersReducedMotion",0,()=>{let e=(0,t.useSyncExternalStore)(o,i,a),{disableAutoAnimations:n}=(0,r.useTheme)();return e||n}])},665862,e=>{"use strict";var t=e.i(514880),r=e.i(10241),n=e.i(732737);let o=(0,r.createContext)(null),i=e=>e.size?{type:"rounded",size:e.size}:void 0;e.s(["SectionCornersContext",0,o,"useCornerVisualConfig",0,e=>{let n,a,l,s,u,c=(0,t.c)(11),d=(0,r.useContext)(o);if(!d)return e;if(c[0]!==e?(n=e??{},c[0]=e,c[1]=n):n=c[1],c[2]!==n){let{cornerStyle:e,...t}=n;a=t,c[2]=n,c[3]=a}else a=c[3];c[4]!==d?(l=i(d),c[4]=d,c[5]=l):l=c[5];let m=l;return c[6]!==m?(s=m?{cornerStyle:m}:{},c[6]=m,c[7]=s):s=c[7],c[8]!==a||c[9]!==s?(u={...a,...s},c[8]=a,c[9]=s,c[10]=u):u=c[10],u},"useSectionCorners",0,e=>{let a,l=(0,t.c)(4),s=(0,r.useContext)(o)??{},u=i(s),c=u?(0,n.getCornerStyleClass)(u.size,e?.edge??"all"):"";return l[0]!==u||l[1]!==s||l[2]!==c?(a={cornerStyle:u,cornerSize:s.size,cornerStyleClass:c},l[0]=u,l[1]=s,l[2]=c,l[3]=a):a=l[3],a}])}]);

//# sourceMappingURL=27gfkgpynmy_y.js.map
//# chunkId=01a1dc92-5848-7ad3-8d5f-c78b109267e6