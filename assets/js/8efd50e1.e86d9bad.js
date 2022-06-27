"use strict";(self.webpackChunkconcat_docs=self.webpackChunkconcat_docs||[]).push([[246],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),l=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(n),h=i,m=u["".concat(p,".").concat(h)]||u[h]||d[h]||r;return n?a.createElement(m,o(o({ref:t},c),{},{components:n})):a.createElement(m,o({ref:t},c))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var l=2;l<r;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6382:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return h},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return d}});var a=n(7462),i=n(3366),r=(n(7294),n(3905)),o=["components"],s={sidebar_position:2,displayed_sidebar:"apiSidebar"},p="Alternative: Using OAuth",l={unversionedId:"api/gettingstarted/oauth",id:"api/gettingstarted/oauth",title:"Alternative: Using OAuth",description:"Using the OAuth method requires a user to interact with your application and the ConCat API in order to obtain a token. Any changes to your application scopes will require the user to re-authenticate.",source:"@site/docs/api/gettingstarted/oauth.md",sourceDirName:"api/gettingstarted",slug:"/api/gettingstarted/oauth",permalink:"/docs/api/gettingstarted/oauth",editUrl:"https://github.com/ConventionCatCorp/concat-docs/tree/main/docs/api/gettingstarted/oauth.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,displayed_sidebar:"apiSidebar"},sidebar:"apiSidebar",previous:{title:"Getting Started",permalink:"/docs/api/gettingstarted/"},next:{title:"Errors",permalink:"/docs/api/errors/"}},c={},d=[{value:"Step 1. Requesting Authorization",id:"step-1-requesting-authorization",level:3},{value:"Query Parameters",id:"query-parameters",level:4},{value:"Step 2. Redirecting the User",id:"step-2-redirecting-the-user",level:3},{value:"Sensitive Scopes",id:"sensitive-scopes",level:4},{value:"Step 3. Exchanging for Token",id:"step-3-exchanging-for-token",level:3},{value:"Step 4. Refreshing the Token",id:"step-4-refreshing-the-token",level:3},{value:"Step 5. Authenticating with the Token",id:"step-5-authenticating-with-the-token",level:3}],u={toc:d};function h(e){var t=e.components,n=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"alternative-using-oauth"},"Alternative: Using OAuth"),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Using the OAuth method requires a user to interact with your application and the ConCat API in order to obtain a token. Any changes to your application scopes will require the user to re-authenticate."))),(0,r.kt)("p",null,"When using the OAuth method, the user will be redirected to an authentication page displaying the requested permission scopes, a basic description of your app, and the ability to grant or deny access."),(0,r.kt)("p",null,"After receiving authorization, the user will be redirected back to your application with a token. You can use this token to authenticate your future requests to the ConCat APIs by exchanging it for a bearer token and a refresh token. The bearer token will expire after a set amount of time, but the refresh token will never expire until used or the user revokes access."),(0,r.kt)("h3",{id:"step-1-requesting-authorization"},"Step 1. Requesting Authorization"),(0,r.kt)("p",null,"You'll need to create an OAuth authorization URL in order to redirect the user to ConCat for authorization. This will include your client ID, requested scopes, and a return redirect URL."),(0,r.kt)("p",null,"The authorization URL is made up of the base URL of the event organization's instance, followed by ",(0,r.kt)("inlineCode",{parentName:"p"},"/oauth/authorize"),", and the following query parameters:"),(0,r.kt)("h4",{id:"query-parameters"},"Query Parameters"),(0,r.kt)("div",{style:{marginBottom:"1rem"}},(0,r.kt)("attribute",{id:"oauth-req-clientId",name:"client_id",type:"number"},"The client ID that identifies your application."),(0,r.kt)("attribute",{id:"oauth-req-responseType",name:"response_type",type:"string"},'The type of response that you want ConCat to return. The only supported value is "code".'),(0,r.kt)("attribute",{id:"oauth-req-redirectUri",name:"redirect_uri",type:"string"},"The URL that ConCat will redirect to after authorization. This must be the same URL that you provided when registering your application, otherwise the user will receive an invalid request error."),(0,r.kt)("attribute",{id:"oauth-req-scope",name:"scope",type:"string"},"The scope(s) that you want to request access to. This must be a URL-encoded list of scopes, separated by spaces."),(0,r.kt)("attribute",{id:"oauth-req-state",name:"state",type:"string",optional:!0},"An optional string that ConCat will return with the authorization response. This string can be used to verify that the request originated from your application.")),(0,r.kt)("p",null,"An example authorization URL will look something like this:"),(0,r.kt)("exampleBox",{header:"Example",codeBlockType:"http"},"https://reg.mybigevent.org/oauth/authorize?client_id=123&response_type=code&redirect_uri=https%3A%2F%2Fexample.com%2Foauth%2Fcallback&state=xyz&scope=pii%3Abasic"),(0,r.kt)("h3",{id:"step-2-redirecting-the-user"},"Step 2. Redirecting the User"),(0,r.kt)("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(300px, 1fr))",gridGap:"1rem",marginBottom:"1rem"}},(0,r.kt)("div",null,(0,r.kt)("p",null,"Once you've generated the authorization URL, you'll need to redirect the user to ConCat."),(0,r.kt)("p",null,"This can be done via a HTTP or JavaScript redirect, by presenting the link to the user as a button or ",(0,r.kt)("code",null,"a")," hyperlink, or in a pop-up window. The authorization page must ",(0,r.kt)("strong",null,"never")," be displayed in an iframe."),(0,r.kt)("p",null,"ConCat will display a consent screen to the user. This screen will include a description of your application, and a list of requested permissions. The user can then either grant or deny access. At this time, the user cannot partially grant access to certain scopes.")),(0,r.kt)("div",null,(0,r.kt)("img",{src:"https://cdn.concat.app/docs/oauth-example-consent.png",alt:"ConCat OAuth Consent Screen"}))),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"The user must have access to all of the requested scopes in order to grant access. If the user does not have access to all of the requested scopes, they will receive an invalid request error."))),(0,r.kt)("h4",{id:"sensitive-scopes"},"Sensitive Scopes"),(0,r.kt)("p",null,"Sensitive scopes are scopes that allow access to administrative endpoints or provide access to information of other users. These scopes should be requested with care and limited to only the scopes required to provide the desired functionality."),(0,r.kt)("p",null,"When a user is presented with a consent screen, sensitive scopes will be highlighted in red along with the text: ",(0,r.kt)("inlineCode",{parentName:"p"},"This is an administrative permission"),". The ",(0,r.kt)("inlineCode",{parentName:"p"},"Authorize Application")," button will also be highlighted red."),(0,r.kt)("img",{src:"https://cdn.concat.app/docs/oauth-example-consent-admin.png",alt:"Admin OAuth Consent Screen",style:{maxWidth:"500px"}}),(0,r.kt)("div",{style:{marginBottom:"1.5rem"}}),(0,r.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"danger")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Abuse or misuse of sensitive scopes will result in your application being suspended. If a bearer or refresh token with a sensitive scope is lost or compromised, contact ConCat Support ",(0,r.kt)("strong",{parentName:"p"},"immediately")," for assistance."))),(0,r.kt)("h3",{id:"step-3-exchanging-for-token"},"Step 3. Exchanging for Token"),(0,r.kt)("p",null,"The user will be redirected back to your application's ",(0,r.kt)("inlineCode",{parentName:"p"},"redirect_uri")," with query parameters containing a ",(0,r.kt)("inlineCode",{parentName:"p"},"code")," and optional ",(0,r.kt)("inlineCode",{parentName:"p"},"state")," attribute. You can use this code to exchange it for a bearer token and a refresh token."),(0,r.kt)("exampleBox",{header:"Example",codeBlockType:"http"},"https://thebest.app/oauth/callback?code=123&state=xyz"),(0,r.kt)("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(300px, 1fr))",gridGap:"1rem",marginBottom:"1rem"}},(0,r.kt)("div",null,(0,r.kt)("p",null,"This code can be exchanged for a bearer token and a refresh token. The bearer token will expire after a set amount of time, but the refresh token will never expire until used or the user revokes access."),(0,r.kt)("p",null,"The response will return an access token, the length of time until the token expires, the valid scopes, and a refresh token. The refresh token can be used to obtain a new bearer token once the old one expires.")),(0,r.kt)("div",null,(0,r.kt)("exampleBox",{header:"/api/oauth/token",method:"POST",headerSubText:"cURL"},'curl https://reg.mybigevent.org/api/oauth/token \\\n  -X POST \\\n  -H "Content-Type: application/x-www-form-urlencoded" \\\n  -d "client_id=123" \\\n  -d "client_secret=abc" \\\n  -d "code=123" \\\n  -d "grant_type=authorization_code" \\\n  -d "redirect_uri=https%3A%2F%2Fexample.com%2Foauth%2Fcallback" \\\n  -d "scope=pii%3Abasic"'),(0,r.kt)("exampleBox",{header:"Response",headerSubText:"application/json"},'{\n  "access_token": "...",\n  "expires_in": 3600,\n  "scope": "pii:basic",\n  "refresh_token": "...",\n  "token_type": "bearer",\n}'))),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"If your app no longer requires access to all of the scopes originally requested, you can provide a subset of scopes in the ",(0,r.kt)("inlineCode",{parentName:"p"},"scope")," parameter when refreshing the token. However, no additional scopes can be granted this way, and any scopes removed cannot be re-added later without a new authorization request."))),(0,r.kt)("h3",{id:"step-4-refreshing-the-token"},"Step 4. Refreshing the Token"),(0,r.kt)("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(300px, 1fr))",gridGap:"1rem",marginBottom:"1rem"}},(0,r.kt)("div",null,(0,r.kt)("p",null,"If the bearer token expires, you can use the refresh token to obtain a new bearer token. A refresh token will not expire until used or the user revokes access."),(0,r.kt)("p",null,"The ",(0,r.kt)("code",null,"scope")," parameter is optional, but if you provide it, you must provide a subset of the scopes originally requested. This can be used to remove scopes that are no longer required by your application for security. If ",(0,r.kt)("code",null,"scope")," is not provided, the scopes valid for the previous bearer token will be used."),(0,r.kt)("p",null,"The response will return an access token, the length of time until the token expires, the valid scopes, and a new refresh token. The refresh token can be used to obtain a new bearer token once the old one expires.")),(0,r.kt)("div",null,(0,r.kt)("exampleBox",{header:"/api/oauth/token",method:"POST",headerSubText:"cURL"},'curl https://reg.mybigevent.org/api/oauth/token \\\n  -X POST \\\n  -H "Content-Type: application/x-www-form-urlencoded" \\\n  -d "client_id=123" \\\n  -d "client_secret=abc" \\\n  -d "refresh_token=123" \\\n  -d "grant_type=refresh_token" \\\n  -d "redirect_uri=https%3A%2F%2Fexample.com%2Foauth%2Fcallback"'),(0,r.kt)("exampleBox",{header:"Response",headerSubText:"application/json"},'{\n  "access_token": "...",\n  "expires_in": 3600,\n  "scope": "pii:basic",\n  "refresh_token": "...",\n  "token_type": "bearer",\n}'))),(0,r.kt)("h3",{id:"step-5-authenticating-with-the-token"},"Step 5. Authenticating with the Token"),(0,r.kt)("p",null,"All requests to the ConCat APIs ",(0,r.kt)("strong",{parentName:"p"},"must")," be done through a HTTPS connection, with a minimum TLS protocol of v1.2 or newer. ConCat uses a HTTP Authorization header to authenticate API requests. The Authorization header must be in the following format:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Authorization: Bearer <Token>\n")),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"The above header ",(0,r.kt)("strong",{parentName:"p"},"should")," always be included in your request, even if the request is not authenticated. This helps us prevent abuse of the APIs, and collect usage statistics to improve the service."))))}h.isMDXComponent=!0}}]);