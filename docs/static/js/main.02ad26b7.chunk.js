(this["webpackJsonpr3f-template"]=this["webpackJsonpr3f-template"]||[]).push([[0],{47:function(e,t,n){},52:function(e,t,n){},53:function(e,t,n){"use strict";n.r(t);var c=n(5),o=n.n(c),i=n(30),r=n.n(i),a=(n(47),n(9)),s=n(21),j=n(56),u=n(15),b=n(19),l=n(7),p=n(10);var f=function(e){var t=Object(s.b)((function(){return Object(l.a)({mass:.2,position:[0,5,0],velocity:[0,4,0]},e)})),n=Object(a.a)(t,1)[0];return Object(p.jsxs)("mesh",{ref:n,children:[Object(p.jsx)("boxBufferGeometry",{}),Object(p.jsx)("meshPhysicalMaterial",{})]})},O="https://spacesummer.art/",d=n(41),m=function(e){var t=Object(c.useRef)(),n=Object(u.e)(d.a,e.path);return Object(p.jsx)("mesh",{ref:t,rotation:[Math.PI/2,0,0],children:Object(p.jsx)("primitive",{object:n.scene,scale:[1.5,1.5,1.5],position:e.position})})};var h=function(e){var t=Object(s.c)((function(){return Object(l.a)({rotation:[-Math.PI/2,0,0]},e)})),n=Object(a.a)(t,1)[0];return Object(p.jsxs)("mesh",{ref:n,receiveShadow:!0,children:[Object(p.jsx)(m,{path:O+"/assets/map3/BASKETBALL02/BASKETBALL.gltf",position:[15,-24,13]}),Object(p.jsx)(m,{path:O+"/assets/map3/BASE02/BASE.gltf",position:[15,-24,13]}),Object(p.jsx)(m,{path:O+"/assets/map3/BASE04/BASE04.gltf",position:[15,-24,13]}),Object(p.jsx)(m,{path:O+"/assets/map3/BASE0202/BASE02.gltf",position:[15,-24,13]}),Object(p.jsx)(m,{path:O+"/assets/map3/BASE0302/BASE03.gltf",position:[15,-24,13]})]})},x=n(55),v=n(0),g=n(37),y=n(13);function A(e){return{KeyW:"moveForward",KeyS:"moveBackward",KeyA:"moveLeft",KeyD:"moveRight",Space:"jump"}[e]}var k=Object(b.b)({key:"position",default:{position:[0,0,0],rotation:[0,0,0]}}),w=(Object(b.b)({key:"camera",default:{position:[0,0,0],rotation:[0,0,0]}}),function(e){var t=e.position,n=void 0===t?[0,0,0]:t,o=e.offset,i=void 0===o?[0,0,0]:o,r=e.dims,j=void 0===r?[1,1,1]:r,l=(e.visible,e.children),f=Object(s.b)((function(){return{mass:1,args:j,position:n}})),O=Object(a.a)(f,2),d=O[0],m=O[1],h=Object(b.c)(k),x=h.position,v=h.rotation;return Object(u.d)((function(e){e.clock;m.position.set(x[0],x[1],x[2]),m.rotation.set(v[0],v[1],v[2])})),Object(p.jsx)("group",{ref:d,api:m,children:Object(p.jsx)(c.Suspense,{fallabck:Object(p.jsxs)("mesh",{scale:j,children:[Object(p.jsx)("boxBufferGeometry",{}),Object(p.jsx)("meshPhysicalMaterial",{wireframe:!0})]}),children:Object(p.jsx)("group",{position:i,children:l})})})}),B=function(e){var t,n=Object(c.useRef)(),o=Object(c.useState)(0),i=Object(a.a)(o,2),r=i[0],s=i[1],j=Object(c.useRef)(),f=function(){var e=Object(c.useState)({moveForward:!1,moveBackward:!1,moveLeft:!1,moveRight:!1,jump:!1}),t=Object(a.a)(e,2),n=t[0],o=t[1];return Object(c.useEffect)((function(){var e=function(e){o((function(t){return Object(l.a)(Object(l.a)({},t),{},Object(y.a)({},A(e.code),!0))}))},t=function(e){o((function(t){return Object(l.a)(Object(l.a)({},t),{},Object(y.a)({},A(e.code),!1))}))};return document.addEventListener("keydown",e),document.addEventListener("keyup",t),function(){document.removeEventListener("keydown",e),document.removeEventListener("keyup",t)}}),[]),n}(),O=f.moveForward,d=f.moveBackward,m=f.moveLeft,h=f.moveRight,B=e.fbxPath,L=e.idlePath,S=Object(u.e)(g.a,B),E=Object(u.e)(g.a,L),F=S.animations,M=E.animations[0],P=Object(b.d)(k),R=Object(u.f)().camera,K=(t=new v.AnimationMixer(S)).clipAction(M),C=t.clipAction(F[0]);F.length>0&&t.stopAllAction(),Object(u.d)((function(e,n){s(O|d|m|h?1:0),t.update(n)})),Object(u.d)((function(e){e.clock;var t=new v.Vector3,c=new v.Vector3(0,0,Number(d)-Number(O)),o=new v.Vector3(Number(m)-Number(h),0,0);t.subVectors(c,o).normalize().multiplyScalar(.1).applyEuler(R.rotation),P((function(e){var c=[e.position[0]+t.x,1,e.position[2]+t.z],o=R.rotation.toArray();return R.position.copy(new v.Vector3(c[0]+10*Math.sin(o[1]),3,c[2]+10*Math.cos(o[1]))),n.current.target=new v.Vector3(c[0],R.position.y,c[2]),n.current.update(),{position:c,rotation:[0,o[1]+Math.PI,0]}}))})),Object(c.useEffect)((function(){if(t.stopAllAction(),1===r)C.setLoop(v.LoopRepeat),C.play();else K.setLoop(v.LoopRepeat),K.play()}),[r,C,K,t]);var I=new v.MeshBasicMaterial({color:16777215});return S.children[1].material[0].color=I.color,Object(p.jsxs)("group",{ref:j,up:[0,1,0],children:[Object(p.jsx)(x.a,{ref:n}),Object(p.jsx)(w,{up:[0,0,0],dims:[1.5,2,1.5],children:Object(p.jsx)("primitive",{object:S,path:e.path,scale:[.014,.014,.014],position:[0,-.9,0]})})]})},L=["LF.jpg","RT.jpg","UP.jpg","DN.jpg","FR.jpg","BK.jpg"].map((function(e){return"/assets/skyboxes/toon/"+e}));function S(){return function(e){var t=Object(u.f)().scene;Object(c.useEffect)((function(){var n=(new v.CubeTextureLoader).load(e);t.background=n,t.environment=n}),[e,t.background,t])}(L),Object(p.jsx)(p.Fragment,{})}function E(e,t){return Math.random()*(t-e)+e}n(52);function F(){return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("ambientLight",{intensity:.2,color:"#FAAD37"}),Object(p.jsx)("directionalLight",{position:[70,100,0],color:"#FAAD37",intensity:1}),Object(p.jsx)(S,{}),Object(p.jsxs)(c.Suspense,{fallback:null,children:[Object(p.jsx)(h,{}),new Array(15).fill(0).map((function(e){return Object(p.jsx)(f,{position:[E(-4,4),E(1,10),E(-4,4)],scale:[.1,.1,.15],rotation:[E(.1,25),0,0]})})),Object(p.jsx)(B,{fbxPath:O+"assets/Walking/Walking.fbx",idlePath:O+"assets/Walking/Idle.fbx"})]})]})}var M=function(){return Object(p.jsx)(p.Fragment,{children:Object(p.jsx)(u.a,{camera:{position:[7,7,7]},children:Object(p.jsxs)(b.a,{children:[Object(p.jsx)(s.a,{children:Object(p.jsx)(F,{})}),Object(p.jsx)(j.a,{})]})})})};var P=function(){return Object(p.jsx)(p.Fragment,{})};var R=function(){var e=Object(c.useState)(0),t=Object(a.a)(e,2),n=t[0],o=t[1];return Object(p.jsx)("div",{style:{width:"100%",height:"100%"},children:1===n?Object(p.jsx)(M,{}):2===n?Object(p.jsx)(P,{}):Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("button",{onClick:function(){return o(1)},children:"\uc2dc\uc791\ud558\uae301"}),Object(p.jsx)("button",{onClick:function(){return o(2)},children:"\uc2dc\uc791\ud558\uae302"})]})})},K=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,57)).then((function(t){var n=t.getCLS,c=t.getFID,o=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),c(e),o(e),i(e),r(e)}))};r.a.render(Object(p.jsx)(o.a.StrictMode,{children:Object(p.jsx)(R,{})}),document.getElementById("root")),K()}},[[53,1,2]]]);
//# sourceMappingURL=main.02ad26b7.chunk.js.map