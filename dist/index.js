"use strict";var m=function(r,e){return function(){try{return e||r((e={exports:{}}).exports,e),e.exports}catch(a){throw (e=0, a)}};};var R=m(function(Z,A){
var d=require('@stdlib/strided-base-reinterpret-complex128/dist'),K=require('@stdlib/strided-base-reinterpret-boolean/dist');function L(r,e,a,c,t,y,n,x,o,p,v,b,h){var B,l,w,u,E,g,k,z,s,f,i,j;if(r<=0)return v;for(B=K(e,0),l=d(t,0),w=d(x,0),u=d(v,0),z=c,s=n*2,f=p*2,i=h*2,E=y*2,g=o*2,k=b*2,j=0;j<r;j++)B[z]?(u[i]=l[s],u[i+1]=l[s+1]):(u[i]=w[f],u[i+1]=w[f+1]),z+=a,s+=E,f+=g,i+=k;return v}A.exports=L
});var F=m(function($,D){
var q=require('@stdlib/strided-base-stride2offset/dist'),M=R();function O(r,e,a,c,t,y,n,x,o){var p=q(r,a),v=q(r,t),b=q(r,n),h=q(r,o);return M(r,e,a,p,c,t,v,y,n,b,x,o,h)}D.exports=O
});var I=m(function(C,H){
var P=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),G=F(),Q=R();P(G,"ndarray",Q);H.exports=G
});var S=require("path").join,T=require('@stdlib/utils-try-require/dist'),U=require('@stdlib/assert-is-error/dist'),V=I(),_,J=T(S(__dirname,"./native.js"));U(J)?_=V:_=J;module.exports=_;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
