(function(t){function e(e){for(var i,o,l=e[0],s=e[1],d=e[2],u=0,c=[];u<l.length;u++)o=l[u],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&c.push(n[o][0]),n[o]=0;for(i in s)Object.prototype.hasOwnProperty.call(s,i)&&(t[i]=s[i]);p&&p(e);while(c.length)c.shift()();return r.push.apply(r,d||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],i=!0,l=1;l<a.length;l++){var s=a[l];0!==n[s]&&(i=!1)}i&&(r.splice(e--,1),t=o(o.s=a[0]))}return t}var i={},n={app:0},r=[];function o(e){if(i[e])return i[e].exports;var a=i[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=i,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)o.d(a,i,function(e){return t[e]}.bind(null,i));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=e,l=l.slice();for(var d=0;d<l.length;d++)e(l[d]);var p=s;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";a("85ec")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var i=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("div",{staticStyle:{height:"50px","padding-top":"10px","border-bottom":"1px solid #fff","margin-bottom":"30px"}},[t._v(" NFT-JSON GENERATOR ")]),a("router-view"),a("hr"),t._v(" Developed with ❤️ by "),a("a",{attrs:{href:"https://yomi.digital",target:"_blank"}},[t._v("YOMI")])],1)},r=[],o=(a("034f"),a("2877")),l={},s=Object(o["a"])(l,n,r,!1,null,null,null),d=s.exports,p=a("8c4f"),u=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"columns"},[a("div",{staticClass:"column",staticStyle:{padding:"0 20px"}},[t.metadata.image?a("img",{attrs:{src:t.metadata.image.replace("ipfs://","https://ipfs.yomi.digital/ipfs/")}}):t._e(),a("br"),t.fileToMint.name?t._e():a("b-field",[a("b-upload",{attrs:{expanded:"","drag-drop":""},model:{value:t.fileToMint,callback:function(e){t.fileToMint=e},expression:"fileToMint"}},[a("section",{staticClass:"section"},[a("div",{staticClass:"content has-text-centered"},[a("p",[t._v("Drop your files here or click to upload")])])])])],1),a("b-field",{attrs:{label:"Name"}},[a("b-input",{model:{value:t.metadata.name,callback:function(e){t.$set(t.metadata,"name",e)},expression:"metadata.name"}})],1),a("b-field",{attrs:{label:"Description"}},[a("b-input",{attrs:{maxlength:"200",type:"textarea"},model:{value:t.metadata.description,callback:function(e){t.$set(t.metadata,"description",e)},expression:"metadata.description"}})],1),a("b-field",{attrs:{label:"Trait type"}},[a("b-input",{model:{value:t.metadata.attributes[0].trait_type,callback:function(e){t.$set(t.metadata.attributes[0],"trait_type",e)},expression:"metadata.attributes[0].trait_type"}})],1),a("b-field",{attrs:{label:"Trait value"}},[a("b-input",{model:{value:t.metadata.attributes[0].value,callback:function(e){t.$set(t.metadata.attributes[0],"value",e)},expression:"metadata.attributes[0].value"}})],1),t.fileToMint.name?a("div",[t._v(" Selected file: "),a("b",[t._v(t._s(t.fileToMint.name))])]):t._e(),t.isMinting?a("div",[t._v("Minting NFT, please wait...")]):t._e(),t.isUploadingIPFS?a("div",[t._v("Uploading file to IPFS, please wait...")]):t._e(),t.isUploadingMetadata?a("div",[t._v(" Uploading metadata to IPFS, please wait... ")]):t._e()],1),a("div",{staticClass:"column"},[a("div",{staticStyle:{padding:"0 10px"}},[a("pre",{staticStyle:{"text-align":"left"}},[t._v(t._s(JSON.stringify(t.metadata,null,4)))]),a("b-button",{staticStyle:{width:"100%",margin:"15px 0"},on:{click:t.uploadMetadata}},[t._v("UPLOAD METADATA TO IPFS")]),t.ipfsMetadata?a("div",[t._v(" Final metadata for your file is:"),a("br"),a("a",{attrs:{href:"https://ipfs.io/ipfs/"+t.ipfsMetadata,target:"_blank"}},[t._v(t._s(t.ipfsMetadata))])]):t._e()],1)])])},c=[],f=a("1da1"),m=(a("96cf"),a("b0c0"),a("e9c4"),a("bc3a")),v=a("5a30"),b={name:"Mint",data:function(){return{fileToMint:{},isUploadingIPFS:!1,isUploadingMetadata:!1,isMinting:!1,axios:m,ipfsMetadata:"",metadata:{name:"",description:"",image:"",attributes:[{trait_type:"",value:""}]},infuraURL:"https://ipfs.infura.io:5001/api/v0/add"}},watch:{fileToMint:function(){this.uploadFile()}},methods:{uploadFile:function(){var t=this;return Object(f["a"])(regeneratorRuntime.mark((function e(){var a,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:a=t,a.fileToMint.name&&!a.isUploadingIPFS?(a.isUploadingIPFS=!0,i=new v,i.append("file",a.fileToMint),m({method:"post",url:a.infuraURL,data:i,headers:{"Content-Type":"multipart/form-data"}}).then((function(t){a.metadata.image="ipfs://"+t.data.Hash,a.isUploadingIPFS=!1}))):alert("Select a file first!");case 2:case"end":return e.stop()}}),e)})))()},uploadMetadata:function(){var t=this;return Object(f["a"])(regeneratorRuntime.mark((function e(){var a,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:a=t,a.isUploadingMetadata=!0,i=new v,i.append("metadata",JSON.stringify(a.metadata)),m({method:"post",url:a.infuraURL,data:i,headers:{"Content-Type":"multipart/form-data"}}).then((function(t){a.ipfsMetadata=t.data.Hash,a.isUploadingMetadata=!1}));case 5:case"end":return e.stop()}}),e)})))()}}},g=b,h=Object(o["a"])(g,u,c,!1,null,null,null),_=h.exports;i["a"].use(p["a"]);var y=[{path:"/",name:"Home",component:_}],M=new p["a"]({routes:y}),x=M,w=a("289d");a("5abe");i["a"].use(w["a"]),i["a"].config.productionTip=!1,new i["a"]({router:x,render:function(t){return t(d)}}).$mount("#app")},"85ec":function(t,e,a){}});
//# sourceMappingURL=app.76b2e1a8.js.map