import{_ as w}from"./plugin-vue_export-helper-c27b6911.js";import{r,o as l,c as g,w as b,a as c,b as H,d as y,F as x,e as k,f as m,n as R,p as M,g as O,h as Z}from"./index-bff15a76.js";const J={name:"Start",emits:["transformend"],props:{config:Object,highlight:Boolean},data(){return{}},methods:{sendEvent(n){this.$emit("transformend",n)}}};function q(n,t,e,s,o,i){const a=r("v-circle");return e.highlight?(l(),g(a,{key:1,config:{...e.config,shadowBlur:50,shadowColor:"yellow",stroke:"yellow"},onTransformend:i.sendEvent},null,8,["config","onTransformend"])):(l(),g(a,{key:0,config:e.config,onTransformend:i.sendEvent},null,8,["config","onTransformend"]))}const V=w(J,[["render",q]]),U={name:"End",emits:["transformend"],props:{config:Object,highlight:Boolean},data(){return{}},methods:{sendEvent(n){this.$emit("transformend",n)}}};function K(n,t,e,s,o,i){const a=r("v-circle");return e.highlight?(l(),g(a,{key:1,config:{...e.config,shadowBlur:50,shadowColor:"yellow",stroke:"yellow"},onTransformend:i.sendEvent},null,8,["config","onTransformend"])):(l(),g(a,{key:0,config:e.config,onTransformend:i.sendEvent},null,8,["config","onTransformend"]))}const F=w(U,[["render",K]]),Q={name:"Decision",emits:["transformend","transformstart","editProcess"],props:{config:Object,highlight:Boolean},data(){return{configRect:{x:100,y:50,width:100,height:100,fill:"white",stroke:"black",rotation:45},image:null}},created(){const n=new window.Image;n.src="../../img/edit.svg",n.onload=()=>{this.image=n}},watch:{},methods:{sendEvent(n){this.$emit("transformend",n)},sendEvent2(n){this.$emit("transformstart",n)},editProcess(n){this.$emit("editProcess",this.config.name)}}};function $(n,t,e,s,o,i){const a=r("v-rect"),d=r("v-text"),h=r("v-image"),f=r("v-label");return l(),g(f,{config:{x:e.config.x,y:e.config.y,draggable:e.config.draggable}},{default:b(()=>[e.highlight?(l(),g(a,{key:1,config:{rotation:e.config.rotation,name:e.config.name,x:0,y:-(Math.sqrt(e.config.height**2+e.config.width**2)/2),width:e.config.width,height:e.config.height,fill:e.config.fill,stroke:e.config.stroke,draggable:!1,scaleX:e.config.scaleX,scaleY:e.config.scaleY,strokeScaleEnabled:!1,shadowBlur:50,shadowColor:"yellow",stroke:"yellow"},onTransformend:i.sendEvent,onTransformstart:i.sendEvent2},null,8,["config","onTransformend","onTransformstart"])):(l(),g(a,{key:0,config:{name:e.config.name,x:0,y:-(Math.sqrt(e.config.height**2+e.config.width**2)/2),width:e.config.width,height:e.config.height,fill:e.config.fill,stroke:e.config.stroke,draggable:!1,scaleX:e.config.scaleX,scaleY:e.config.scaleY,strokeScaleEnabled:!1,rotation:e.config.rotation},onTransformend:i.sendEvent,onTransformstart:i.sendEvent2},null,8,["config","onTransformend","onTransformstart"])),c(d,{config:{x:-e.config.width/2,y:-e.config.height/4,width:e.config.width,text:e.config.text,fontFamily:"Calibri",fontSize:18,padding:5,fill:"black",draggable:!1,align:"center",listening:!1}},null,8,["config"]),c(f,{config:{x:e.config.width/2,y:-e.config.height/2,draggable:!1}},{default:b(()=>[c(h,{config:{image:o.image,visible:!e.config.hideEdit,draggable:!1},onMouseup:i.editProcess},null,8,["config","onMouseup"])]),_:1},8,["config"]),H("> ")]),_:1},8,["config"])}const N=w(Q,[["render",$]]),ee={name:"Declaration",emits:["transformend","transformstart","editProcess"],props:{config:Object,highlight:Boolean},data(){return{image:null}},created(){const n=new window.Image;n.src="../../img/edit.svg",n.onload=()=>{this.image=n}},watch:{},methods:{sendEvent(n){this.$emit("transformend",n)},sendEvent2(n){this.$emit("transformstart",n)},editProcess(n){this.$emit("editProcess",this.config.name)}}};function te(n,t,e,s,o,i){const a=r("v-rect"),d=r("v-text"),h=r("v-image"),f=r("v-label");return l(),g(f,{config:{x:e.config.x,y:e.config.y,draggable:e.config.draggable}},{default:b(()=>[e.highlight?(l(),g(a,{key:1,config:{name:e.config.name,x:-e.config.width/2,y:-e.config.height/2,width:e.config.width,height:e.config.height,fill:e.config.fill,stroke:e.config.stroke,draggable:!1,scaleX:e.config.scaleX,scaleY:e.config.scaleY,strokeScaleEnabled:!1,shadowBlur:50,shadowColor:"yellow",stroke:"yellow"},onTransformend:i.sendEvent,onTransformstart:i.sendEvent2},null,8,["config","onTransformend","onTransformstart"])):(l(),g(a,{key:0,config:{name:e.config.name,x:-e.config.width/2,y:-e.config.height/2,width:e.config.width,height:e.config.height,fill:e.config.fill,stroke:e.config.stroke,draggable:!1,scaleX:e.config.scaleX,scaleY:e.config.scaleY,strokeScaleEnabled:!1},onTransformend:i.sendEvent,onTransformstart:i.sendEvent2},null,8,["config","onTransformend","onTransformstart"])),c(d,{config:{x:-e.config.width/2,y:-e.config.height/2,width:e.config.width,text:e.config.text,fontFamily:"Calibri",fontSize:18,padding:5,fill:"black",draggable:!1,align:"left",listening:!1}},null,8,["config"]),c(f,{config:{x:e.config.width/2-24,y:-e.config.height/2}},{default:b(()=>[c(h,{config:{image:o.image,visible:!e.config.hideEdit},onMouseup:i.editProcess},null,8,["config","onMouseup"])]),_:1},8,["config"])]),_:1},8,["config"])}const X=w(ee,[["render",te]]),ne={name:"Process",emits:["transformend","transformstart","editProcess"],props:{config:Object,highlight:Boolean},data(){return{image:null}},created(){const n=new window.Image;n.src="../../img/edit.svg",n.onload=()=>{this.image=n}},watch:{},methods:{sendEvent(n){this.$emit("transformend",n)},sendEvent2(n){this.$emit("transformstart",n)},editProcess(n){this.$emit("editProcess",this.config.name)}}};function ie(n,t,e,s,o,i){const a=r("v-rect"),d=r("v-text"),h=r("v-image"),f=r("v-label");return l(),g(f,{config:{x:e.config.x,y:e.config.y,draggable:e.config.draggable}},{default:b(()=>[e.highlight?(l(),g(a,{key:1,config:{name:e.config.name,x:-e.config.width/2,y:-e.config.height/2,width:e.config.width,height:e.config.height,fill:e.config.fill,stroke:e.config.stroke,draggable:!1,scaleX:e.config.scaleX,scaleY:e.config.scaleY,strokeScaleEnabled:!1,shadowBlur:50,shadowColor:"yellow",stroke:"yellow"},onTransformend:i.sendEvent,onTransformstart:i.sendEvent2},null,8,["config","onTransformend","onTransformstart"])):(l(),g(a,{key:0,config:{name:e.config.name,x:-e.config.width/2,y:-e.config.height/2,width:e.config.width,height:e.config.height,fill:e.config.fill,stroke:e.config.stroke,draggable:!1,scaleX:e.config.scaleX,scaleY:e.config.scaleY,strokeScaleEnabled:!1},onTransformend:i.sendEvent,onTransformstart:i.sendEvent2},null,8,["config","onTransformend","onTransformstart"])),c(d,{config:{x:-e.config.width/2,y:-e.config.height/2,width:e.config.width,text:e.config.text,fontFamily:"Calibri",fontSize:18,padding:5,fill:"black",draggable:!1,align:"left",listening:!1}},null,8,["config"]),c(f,{config:{x:e.config.width/2-24,y:-e.config.height/2}},{default:b(()=>[c(h,{config:{image:o.image,visible:!e.config.hideEdit},onMouseup:i.editProcess},null,8,["config","onMouseup"])]),_:1},8,["config"])]),_:1},8,["config"])}const Y=w(ne,[["render",ie]]),se={name:"Pprint",emits:["transformend","transformstart","editProcess"],props:{config:Object,highlight:Boolean},data(){return{image:null}},created(){const n=new window.Image;n.src="../../img/edit.svg",n.onload=()=>{this.image=n}},watch:{},methods:{sendEvent(n){this.$emit("transformend",n)},sendEvent2(n){this.$emit("transformstart",n)},editProcess(n){this.$emit("editProcess",this.config.name)}}};function oe(n,t,e,s,o,i){const a=r("v-shape"),d=r("v-text"),h=r("v-image"),f=r("v-label");return l(),g(f,{config:{x:e.config.x,y:e.config.y,draggable:e.config.draggable}},{default:b(()=>[e.highlight?(l(),g(a,{key:1,config:{name:e.config.name,x:-e.config.width/2,y:-e.config.height/2,width:e.config.width,height:e.config.height,fill:e.config.fill,stroke:e.config.stroke,draggable:!1,scaleX:e.config.scaleX,scaleY:e.config.scaleY,strokeScaleEnabled:!1,shadowBlur:50,shadowColor:"yellow",stroke:"yellow",sceneFunc:function(_,T){_.beginPath(),_.moveTo(0,0),_.lineTo(e.config.width,0),_.lineTo(e.config.width,3*e.config.height/4),_.lineTo(e.config.width/3,3*e.config.height/4),_.quadraticCurveTo(e.config.width/6,e.config.height*1.2,0,3*e.config.height/4),_.closePath(),_.fillStrokeShape(T)}},onTransformend:i.sendEvent,onTransformstart:i.sendEvent2},null,8,["config","onTransformend","onTransformstart"])):(l(),g(a,{key:0,config:{name:e.config.name,x:-e.config.width/2,y:-e.config.height/2,width:e.config.width,height:e.config.height,fill:e.config.fill,stroke:e.config.stroke,draggable:!1,scaleX:e.config.scaleX,scaleY:e.config.scaleY,strokeScaleEnabled:!1,sceneFunc:function(_,T){_.beginPath(),_.moveTo(0,0),_.lineTo(e.config.width,0),_.lineTo(e.config.width,3*e.config.height/4),_.lineTo(e.config.width/3,3*e.config.height/4),_.quadraticCurveTo(e.config.width/6,e.config.height*1.2,0,3*e.config.height/4),_.closePath(),_.fillStrokeShape(T)}},onTransformend:i.sendEvent,onTransformstart:i.sendEvent2},null,8,["config","onTransformend","onTransformstart"])),c(d,{config:{x:-e.config.width/2,y:-e.config.height/2,width:e.config.width,text:e.config.text,fontFamily:"Calibri",fontSize:18,padding:5,fill:"black",draggable:!1,align:"left",listening:!1}},null,8,["config"]),c(f,{config:{x:e.config.width/2-24,y:-e.config.height/2}},{default:b(()=>[c(h,{config:{image:o.image,visible:!e.config.hideEdit},onMouseup:i.editProcess},null,8,["config","onMouseup"])]),_:1},8,["config"])]),_:1},8,["config"])}const G=w(se,[["render",oe]]),ae={name:"StartButton",props:{position:Object},components:{Start:V},data(){return{}}};function re(n,t,e,s,o,i){const a=r("Start"),d=r("v-text"),h=r("v-rect"),f=r("v-label");return l(),g(f,{config:{listening:!0,x:e.position.x,y:e.position.y}},{default:b(()=>[c(a,{config:{x:30,y:30,radius:20,fill:"white",stroke:"black",strokeWidth:4}}),c(d,{config:{x:0,y:55,text:"Inicio",fontFamily:"Calibri",fontSize:18,padding:0,fill:"black",draggable:!1,align:"center",width:60}}),c(h,{config:{name:"Pstart",x:0,y:0,width:60,height:73,stroke:"black",strokeWidth:1}})]),_:1},8,["config"])}const le=w(ae,[["render",re]]),ce={name:"EndButton",props:{position:Object},components:{End:F},data(){return{}}};function de(n,t,e,s,o,i){const a=r("End"),d=r("v-text"),h=r("v-rect"),f=r("v-label");return l(),g(f,{config:{listening:!0,x:e.position.x,y:e.position.y}},{default:b(()=>[c(a,{config:{x:30,y:30,radius:20,fill:"grey",stroke:"black",strokeWidth:4}}),c(d,{config:{x:0,y:55,text:"Fin",fontFamily:"Calibri",fontSize:18,padding:0,fill:"black",draggable:!1,align:"center",width:60}}),c(h,{config:{name:"Pend",x:0,y:0,width:60,height:73,stroke:"black",strokeWidth:1}})]),_:1},8,["config"])}const he=w(ce,[["render",de]]),ge={name:"ProcessButton",props:{position:Object},components:{Process:Y},data(){return{}}};function fe(n,t,e,s,o,i){const a=r("Process"),d=r("v-text"),h=r("v-rect"),f=r("v-label");return l(),g(f,{config:{listening:!0,x:e.position.x,y:e.position.y}},{default:b(()=>[c(a,{config:{name:"Pprocess",x:20+80/2,y:10+40/2,width:80,height:40,fill:"white",stroke:"black",draggable:!0,text:"",scaleX:1,scaleY:1,hideEdit:!0}}),c(d,{config:{x:0,y:55,text:"Proceso",fontFamily:"Calibri",fontSize:18,padding:0,fill:"black",draggable:!1,align:"center",width:120}}),c(h,{config:{name:"Pprocess",x:0,y:0,width:120,height:73,stroke:"black",strokeWidth:1}})]),_:1},8,["config"])}const ue=w(ge,[["render",fe]]),me={name:"DeclarationButton",props:{position:Object},components:{Declaration:X},data(){return{}}};function _e(n,t,e,s,o,i){const a=r("Declaration"),d=r("v-text"),h=r("v-rect"),f=r("v-label");return l(),g(f,{config:{listening:!0,x:e.position.x,y:e.position.y}},{default:b(()=>[c(a,{config:{name:"Pdeclaration",x:20+80/2,y:10+40/2,width:80,height:40,fill:"white",stroke:"black",draggable:!0,text:"",scaleX:1,scaleY:1,hideEdit:!0}}),c(d,{config:{x:0,y:55,text:"Declaración",fontFamily:"Calibri",fontSize:18,padding:0,fill:"black",draggable:!1,align:"center",width:120}}),c(h,{config:{name:"Pdeclaration",x:0,y:0,width:120,height:73,stroke:"black",strokeWidth:1}})]),_:1},8,["config"])}const be=w(me,[["render",_e]]),we={name:"DecisionButton",props:{position:Object},components:{Decision:N},data(){return{}}};function ve(n,t,e,s,o,i){const a=r("Decision"),d=r("v-text"),h=r("v-rect"),f=r("v-label");return l(),g(f,{config:{listening:!0,x:e.position.x,y:e.position.y}},{default:b(()=>[c(a,{config:{name:"Pdecision",x:20+80/2,y:8+40/2,width:35,height:35,fill:"white",stroke:"black",draggable:!0,text:"",scaleX:1,scaleY:1,hideEdit:!0,rotation:45}}),c(d,{config:{x:0,y:55,text:"Decisión",fontFamily:"Calibri",fontSize:18,padding:0,fill:"black",draggable:!1,align:"center",width:120}}),c(h,{config:{name:"Pdecision",x:0,y:0,width:120,height:73,stroke:"black",strokeWidth:1}})]),_:1},8,["config"])}const ye=w(we,[["render",ve]]),xe={name:"PrintButton",props:{position:Object},components:{Print:G},data(){return{}}};function ke(n,t,e,s,o,i){const a=r("Print"),d=r("v-text"),h=r("v-rect"),f=r("v-label");return l(),g(f,{config:{listening:!0,x:e.position.x,y:e.position.y}},{default:b(()=>[c(a,{config:{name:"Pprint",x:20+80/2,y:10+40/2,width:80,height:40,fill:"white",stroke:"black",draggable:!0,text:"",scaleX:1,scaleY:1,hideEdit:!0}}),c(d,{config:{x:0,y:55,text:"Imprimir",fontFamily:"Calibri",fontSize:18,padding:0,fill:"black",draggable:!1,align:"center",width:120}}),c(h,{config:{name:"Pprint",x:0,y:0,width:120,height:73,stroke:"black",strokeWidth:1}})]),_:1},8,["config"])}const Se=w(xe,[["render",ke]]),Te={name:"Panel",emits:["handlePanelMouseDown"],props:{panelSize:Object},data(){return{rectConfig:{x:-1,y:-1,width:this.panelSize.width,height:this.panelSize.height+2,fill:"#F9FFFF",stroke:"black",strokeWidth:1,listening:!1},xPadding:(this.panelSize.width-120)/3}},components:{StartButton:le,EndButton:he,ProcessButton:ue,DeclarationButton:be,DecisionButton:ye,PrintButton:Se},methods:{handlePanelMouseDown(n){this.$emit("handlePanelMouseDown",n)}},watch:{panelSize:{handler(n,t){this.rectConfig.width=n.width,this.rectConfig.height=n.height,this.xPadding=(n.width-120)/3},deep:!0}}};function Pe(n,t,e,s,o,i){const a=r("v-rect"),d=r("StartButton"),h=r("EndButton"),f=r("DeclarationButton"),_=r("ProcessButton"),T=r("DecisionButton"),D=r("PrintButton"),p=r("v-layer"),z=r("v-stage");return l(),g(z,{ref:"panel",config:e.panelSize,onMousedown:i.handlePanelMouseDown},{default:b(()=>[c(p,{ref:"layer",class:"layer"},{default:b(()=>[c(a,{config:o.rectConfig},null,8,["config"]),c(d,{position:{x:o.xPadding,y:30}},null,8,["position"]),c(h,{position:{x:o.xPadding+60+(e.panelSize.width-120-o.xPadding*2),y:30}},null,8,["position"]),c(f,{position:{x:o.xPadding,y:140}},null,8,["position"]),c(_,{position:{x:o.xPadding,y:240}},null,8,["position"]),c(T,{position:{x:o.xPadding,y:330}},null,8,["position"]),c(D,{position:{x:o.xPadding,y:430}},null,8,["position"])]),_:1},512)]),_:1},8,["config","onMousedown"])}const Ee=w(Te,[["render",Pe]]),Ce={name:"Grid",props:{space:Number,stageSize:Object},data(){return{}}};function De(n,t,e,s,o,i){const a=r("v-line");return l(),y(x,null,[(l(!0),y(x,null,k(Math.floor(e.stageSize.width/e.space),d=>(l(),g(a,{key:d,config:{x:d*e.space,y:0,points:[0,0,0,e.stageSize.height],stroke:"grey",strokeWidth:1,draggable:!1}},null,8,["config"]))),128)),(l(!0),y(x,null,k(Math.floor(e.stageSize.height/e.space),d=>(l(),g(a,{key:d,config:{x:0,y:d*e.space,points:[0,0,e.stageSize.width,0],stroke:"grey",strokeWidth:1,draggable:!1}},null,8,["config"]))),128))],64)}const pe=w(Ce,[["render",De]]);class ze{constructor(t,e,s,o){this.type=t,this.name=e,this.value=s,this.mutable=o}}let Be=class{constructor(t=null,e=null){this.type=t,this.variableName=e,this.description,this.setError=()=>{switch(this.type){case 0:this.type="Reference Error",this.description=`${this.type}: ${this.variableName} is not defined`;break;case 1:this.type="TypeError",this.description=`${this.type}: Assignment to constant variable`;break;case 2:this.type="SyntaxError",this.description=`${this.type}: Identifier '${this.variableName}' has already been declared`;break}},this.setError()}};class v{constructor(t,e,s=null){this.msg=t,this.error=e,this.typeError=s}}class Ae{constructor(){this.variables=[]}checkForRepetitions(t,e=!1){for(let s=0;s<this.variables.length;s++)if(this.variables[s].name===t){if(e)return new v(this.variables[s].value,!1);if(!e)return new v(this.variables[s].name,!0,2)}if(!e)return new v("Verigood",!1);if(e)return new v(t,!0,0)}checkForRepetitionsAfterDeclaration(t){for(let e=0;e<this.variables.length;e++)if(this.variables[e].name===t){if(!this.variables[e].mutable)return new v(t,!0,1);if(this.variables[e].mutable)return new v("Verigood",!1)}return new v(t,!0,0)}addNewVariable(t){this.checkForRepetitions(t).msg==="Verigood"&&this.variables.push(t)}getVariableValue(t){return this.checkForRepetitions(t,!0)}addNewVariableValue(t,e){for(let s=0;s<this.variables.length;s++)if(this.variables[s].name===t&&(this.variables[s].mutable&&(this.variables[s].value=e),!this.variables[s].mutable))return new v(t,!0,1)}getVariables(){return this.variables}resetVariables(){this.variables=[]}}const Me=new RegExp(`^(var|let|const)\\s+([a-zA-Z]\\w*)\\s*=\\s(".*?"|\\'.*?\\'|[a-zA-Z]\\w*|\\d+(\\.\\d+)?|\\s*[+\\-%/]\\s*)+(?<!\\s*[+\\-*%/]);`),Oe=new RegExp(`([a-zA-Z]\\w*)\\s*=\\s(".*?"|\\'.*?\\'|[a-zA-Z]\\w*|\\d+(\\.\\d+)?|\\s*[+\\-%/]\\s*)+(?<!\\s*[+\\-*%/]);`),Ve=/^\s*if\s*\(\s*(["'].*["']|\d+|[a-zA-Z_$][0-9a-zA-Z_$]*)\s*((?:\s*(?:==|!=|<|>|<=|>=)\s*(["'].*["']|\d+|[a-zA-Z_$][0-9a-zA-Z_$]*))+)\s*\)\s*;/,Fe=/^(([a-zA-Z]+|\d+|\"[\w\s]+\")(\s*\+\s*([a-zA-Z]+|\d+|\"[\w\s]+\"))*);/,Ne=[/^\s*[+-]?(\d+|\d*\.\d+|\d+\.\d*)([Ee][+-]?\d+)?\s*$/,/".*?"|\'.*?\'|[a-zA-Z]\$/,/[+\-*/]/,/^(==|===|!=|!==|<|<=|>|>=|&&|\|\||!)$/],S=new Ae;class E{variableDeclaration(t){if(t=t.match(Me),!t)return t;const[,e,s]=t;let o=S.checkForRepetitions(s);return o.error?this.setError(o):(o=this.doOperation(this.cleanPrompt(t.input)),o.error?this.setError(o):(S.addNewVariable(new ze(e,s,o,e!="const")),new v("Verigood",!1)))}variableAsignation(t){if(t=t.match(Oe),!t)return t;let e=S.checkForRepetitionsAfterDeclaration(t[1]);return e.error?this.setError(e):(e=this.doOperation(this.cleanPrompt(t.input)),e.error?this.setError(e):(S.addNewVariableValue(t[1],e),new v("Verigood",!1)))}conditionIF(t){if(t=t.match(Ve),!t)return t;const e=this.doOperation(this.cleanPrompt(t.input),"condition");return e.error?this.setError(e):e?new v("Verigood",!1):new v("Notgood",!0)}print(t){if(t=t.match(Fe),!t)return t;const e=this.doOperation(this.cleanPrompt(t.input,"printing"));return e.error?this.setError(e):new v(e,!1)}doOperation(t){let e="return",s;for(let o=0;o<t.length;o++)if(s=t[o],Object.keys(Ne.filter(i=>i.test(t[o]))).length==0){const i=S.getVariableValue(t[o]);if(i.error)return i;s=i.msg,typeof s=="string"?e+=` '${s}' `:e+=` ${s} `}else e+=` ${s} `;return new Function(e)()}setError(t){return new Be(t.typeError,t.msg)}cleanPrompt(t,e="variables"){const s=/".+?"/.exec(t);t=t.replace(/".+?"/,"").replace(/^\s+|\s+$/g,"");let i=t.slice(t.indexOf("(")+1,t.indexOf(")")).split(" ");if(e=="condition"){if(!s)return t.slice(t.indexOf("(")+1,t.indexOf(")"));if(s)return i[i.indexOf("")]=s[0],i}if(e=="printing")return s&&(s.index==0&&i.indexOf("")==-1?i.splice(0,0,s[0]):i.indexOf("")!=-1&&(i[i.indexOf("")]=s[0])),i;s&&e=="variables"&&(i.indexOf("")!=-1?i[i.indexOf("")]=s[0]:i.splice(i.indexOf(";"),0,s[0]));for(let a=0;a<i.length;a++)i[a]=i[a].replace(";",""),i[a]==""&&i.pop(a);return i.slice(i.indexOf("=")+1,i.length)}}S.resetVariables();class C{constructor(t,e){this.code=t,this.type=e}cleaningPrompt(t){return Object.values(t.split(/\r?\n/).map(e=>e.replace(/^\s+|\s+$/g,""))).filter(e=>e)}syntaxMethods(t){if(this.type==0)return new E().variableDeclaration(t);if(this.type==1)return new E().variableAsignation(t);if(this.type==2)return new E().conditionIF(t);if(this.type==3)return new E().print(t)}executeCode(){const t=this.cleaningPrompt(this.code);let e="";for(let s=0;s<t.length;s++){let o=this.syntaxMethods(t[s]);if(!o.msg||o.error)return"Notgood";e+=o.msg+`
`}return e.slice(0,-1)}printVariables(){console.log(S.getVariables())}}const Xe={name:"Header",emits:["toggleGrid","toggleLineTool","save","open","start"],props:{},data(){return{deg:0}},mounted(){this.deg=180},methods:{toggleGrid(n){this.$emit("toggleGrid",n)},toggleLineTool(n){this.$emit("toggleLineTool",n),this.deg+=180},save(n){this.$emit("save",n)},open(n){this.$emit("open",this.$refs.file.files[0])},start(n){this.$emit("start",n)}}},Ye="/VeriGoodDeploy/assets/open-eaa73a9b.svg",Ge="/VeriGoodDeploy/assets/save-94c1eb15.svg",je="/VeriGoodDeploy/assets/lineTool-b04e40ea.svg",We="/VeriGoodDeploy/assets/play-4a96b981.svg",Ie="/VeriGoodDeploy/assets/stop-f732a8dc.svg";const P=n=>(M("data-v-9da39dd0"),n=n(),O(),n),Le=P(()=>m("div",{id:"Logo"},"VeriGood",-1)),He={id:"Controls"},Re={id:"Open"},Ze={for:"inputFile"},Je=P(()=>m("img",{src:Ye,alt:""},null,-1)),qe=P(()=>m("img",{src:Ge,alt:""},null,-1)),Ue=[qe],Ke=P(()=>m("img",{src:je,alt:""},null,-1)),Qe=[Ke],$e={id:"Grid"},et={class:"switch"},tt=P(()=>m("div",{class:"slider round"},null,-1)),nt=P(()=>m("div",null,"Grid",-1)),it={id:"Play"},st=P(()=>m("div",{id:"Stop"},[m("img",{src:Ie,alt:""})],-1));function ot(n,t,e,s,o,i){return l(),y("header",null,[Le,m("div",He,[m("div",Re,[m("label",Ze,[m("input",{id:"inputFile",type:"file",ref:"file",onChange:t[0]||(t[0]=(...a)=>i.open&&i.open(...a))},null,544),Je])]),m("div",{id:"Save",onClick:t[1]||(t[1]=(...a)=>i.save&&i.save(...a))},Ue),m("div",{id:"lineTool",class:"transition",style:R({transform:`rotate(${o.deg}deg)`}),onClick:t[2]||(t[2]=(...a)=>i.toggleLineTool&&i.toggleLineTool(...a))},Qe,4),m("div",$e,[m("label",et,[m("input",{type:"checkbox",checked:"true",onClick:t[3]||(t[3]=(...a)=>i.toggleGrid&&i.toggleGrid(...a))}),tt]),nt]),m("div",it,[m("img",{src:We,alt:"",onClick:t[4]||(t[4]=(...a)=>i.start&&i.start(...a))})]),st])])}const at=w(Xe,[["render",ot],["__scopeId","data-v-9da39dd0"]]),rt="/VeriGoodDeploy/assets/peaches-b36eae41.mp3";const A=document.body.clientWidth,B=window.innerHeight-40+720,lt={name:"HomeView",data(){return{stageSize:{width:A*4/5,height:B},panelSize:{width:A*1/5,height:B},isDragging:!1,enabledAnchors:[],shapes:{starts:[],ends:[],declarations:[],processes:[],decisions:[],prints:[]},grid:!1,lines:[{points:[],color:"#"+Math.floor(Math.random()*16777215).toString(16),startShape:null,endShape:null,dash:[]}],startCounter:0,endCounter:0,processCounter:0,declarationCounter:0,decisionCounter:0,linesCounter:0,printCounter:0,lineTool:!1}},components:{Start:V,End:F,Decision:N,Process:Y,Declaration:X,Print:G,Header:at,Panel:Ee,Grid:pe},created(){window.addEventListener("resize",this.resizeScreen),setTimeout(()=>{this.resizeScreen(),fetch("../../looptest.json").then(n=>{if(!n.ok)throw new Error(`HTTP error! Status: ${n.status}`);return n.blob()}).then(n=>this.open(n)).catch(n=>console.error("Unable to fetch data:",n))},500)},destroyed(){window.removeEventListener("resize",this.resizeScreen)},methods:{handleDragStart(n){this.isDragging=!0},async handleDragEnd(n){this.isDragging=!1;const t=this.selectedShapeName,e=await this.getShape(t);let s=n.target.attrs.x,o=n.target.attrs.y;e.x=s,e.y=o,setTimeout(()=>{e.x=Math.round(s/30)*30,e.y=Math.round(o/30)*30},100)},async handleTransformStart(n){const t=await this.getShape(this.selectedShapeName);t.hasOwnProperty("hideEdit")&&(t.hideEdit=!0)},async handleTransformEnd(n){const t=await this.getShape(this.selectedShapeName),e=n.target.getParent();t.x=e.x(),t.y=e.y(),t.rotation=e.rotation(),t.scaleX=n.target.scaleX(),t.scaleY=n.target.scaleY(),setTimeout(()=>{t.scaleX=1,t.scaleY=1,t.width=Math.max(t.width*n.target.scaleX(),5),t.height=Math.max(t.height*n.target.scaleY(),5),t.hasOwnProperty("hideEdit")&&(t.hideEdit=!1)},10)},async handleStageMouseDown(n){if(this.lineTool){let t=[...this.lines[this.linesCounter].points];const e=n.evt.layerX,s=n.evt.layerY,o=t[t.length-2],i=t[t.length-1];let a=Math.round(e/30)*30,d=Math.round(s/30)*30;if(o!=null&&i!=null)if(n.target===n.target.getStage())Math.abs(e-o)>Math.abs(s-i)?d=i:a=o;else{const h=n.target.name(),f=await this.getShape(h);d=f.y,a=f.x,t.push(a),t.push(d),this.lines[this.linesCounter].points=t,this.toggleLineTool(),this.toggleLineTool();return}else{const h=this.findNearestShape(a,d);this.lines[this.linesCounter].startShape=h.name,a=h.x,d=h.y,h.onTrue==!1&&h.onTrue!=null?h.onTrue=!0:h.onFalse!=null&&(h.onFalse=!0,this.lines[this.linesCounter].dash=[10])}t.push(a),t.push(d),this.lines[this.linesCounter].points=t;return}else{if(n.target===n.target.getStage()){this.selectedShapeName="",this.updateTransformer();return}if(n.target.getParent().className==="Transformer")return;const e=n.target.name();if(await this.getShape(e))switch(this.selectedShapeName=e,this.getSelectedShapeType(this.selectedShapeName)){case"starts":this.enabledAnchors=[];break;case"ends":this.enabledAnchors=[];break;case"declarations":this.enabledAnchors=["middle-right","bottom-center","bottom-right"];break;case"processes":this.enabledAnchors=["middle-right","bottom-center","bottom-right"];break;case"decisions":this.enabledAnchors=["middle-right","bottom-center","bottom-right"];break;case"prints":this.enabledAnchors=["middle-right","bottom-center","bottom-right"];break}else this.selectedShapeName="";this.updateTransformer()}},updateTransformer(){const n=this.$refs.transformer.getNode(),t=n.getStage(),{selectedShapeName:e}=this,s=t.findOne("."+e);s!==n.node()&&(s?n.nodes([s]):n.nodes([]))},getShape(n){let t;for(const e in this.shapes)if(t=this.shapes[e].find(s=>{if(s.name===n)return s}),t!=null)break;return t},getSelectedShapeType(n){let t,e;for(const s in this.shapes)if(t=this.shapes[s].find(o=>{if(o.name===n)return o}),t!=null){e=s;break}return e},findNearestShape(n,t){let e,s=1e5;for(const o in this.shapes)for(const i in this.shapes[o]){let a=this.shapes[o][i],d=Math.abs(n-a.x)+Math.abs(t-a.y);d<=s&&(s=d,e=a)}return e},async editProcess(n){const t=await this.getShape(n);t.text=await this.getNewText(t)},async getNewText(n){return(await this.$swal({title:n.name,input:"textarea",inputValue:n.text,showCloseButton:!0})).value},handlePanelMouseDown(n){if(n.target===n.target.getStage())return;const t=n.target.name(),e=30,s=30;switch(t){case"Pstart":this.startCounter+=1;const o={name:"Pstart"+this.startCounter.toString(),x:e,y:s,radius:20,fill:"white",stroke:"black",strokeWidth:4,draggable:!0,isActive:!1};this.shapes.starts.push(o);break;case"Pend":this.endCounter+=1;const i={name:"Pend"+this.startCounter.toString(),x:e,y:s,radius:20,fill:"grey",stroke:"black",strokeWidth:4,draggable:!0,isActive:!1};this.shapes.ends.push(i);break;case"Pdeclaration":this.declarationCounter+=1;const a={name:"Pdeclaration"+this.declarationCounter.toString(),x:e,y:s,width:200,height:100,fill:"white",stroke:"black",draggable:!0,text:"...",scaleX:1,scaleY:1,hideEdit:!1,isActive:!1};this.shapes.declarations.push(a);break;case"Pprocess":this.processCounter+=1;const d={name:"Pprocess"+this.processCounter.toString(),x:e,y:s,width:200,height:100,fill:"white",stroke:"black",draggable:!0,text:"...",scaleX:1,scaleY:1,hideEdit:!1,isActive:!1};this.shapes.processes.push(d);break;case"Pdecision":this.decisionCounter+=1;const h={name:"Pdecision"+this.decisionCounter.toString(),x:e,y:s,width:100,height:100,fill:"white",stroke:"black",draggable:!0,text:"...",scaleX:1,scaleY:1,rotation:45,isActive:!1,onTrue:!1,onFalse:!1};this.shapes.decisions.push(h);break;case"Pprint":this.printCounter+=1;const f={name:"Pprint"+this.printCounter.toString(),x:e,y:s,width:200,height:100,fill:"white",stroke:"black",draggable:!0,text:"...",scaleX:1,scaleY:1,hideEdit:!1,isActive:!1};this.shapes.prints.push(f);break}},toggleGrid(n){this.grid=!this.grid},resizeScreen(n){const t={width:document.body.clientWidth*4/5,height:B};this.stageSize=t;const e={width:document.body.clientWidth*1/5,height:window.innerHeight-40};this.panelSize=e},toggleLineTool(n){if(this.lineTool=!this.lineTool,!this.lineTool&&this.lines[this.linesCounter].points.length>0){const t=this.lines[this.linesCounter].points.length;let e=this.findNearestShape(this.lines[this.linesCounter].points[t-2],this.lines[this.linesCounter].points[t-1]);this.lines[this.linesCounter].points.push(e.x),this.lines[this.linesCounter].points.push(this.lines[this.linesCounter].points[t-1]),this.lines[this.linesCounter].points.push(this.lines[this.linesCounter].points[t]),this.lines[this.linesCounter].points.push(e.y),this.lines[this.linesCounter].endShape=e.name,this.lines[this.linesCounter].points=this.cleanPoints(this.lines[this.linesCounter].points),this.linesCounter+=1;const s="#"+Math.floor(Math.random()*11184810+11184810).toString(16);this.lines.push({points:[],color:s,dash:[]})}},cleanPoints(n){let t=n[0],e=n[1],s=n[2],o=n[3];for(let i=4;i<n.length;i+=2)s==t&&t==n[i]?(delete n[i-2],delete n[i-1],s=n[i]):(t=s,s=n[i]),o==e&&e==n[i+1]?(delete n[i-2],delete n[i-1],o=n[i+1]):(e=o,o=n[i+1]);return n=n.filter(i=>i!==null),n},save(n){let t={shapes:this.shapes,lines:this.lines,startCounter:this.startCounter,endCounter:this.endCounter,processCounter:this.processCounter,declarationCounter:this.declarationCounter,decisionCounter:this.decisionCounter,printCounter:this.printCounter,linesCounter:this.linesCounter},e=JSON.stringify(t);var s=new Blob([e],{type:"text/plain;charset=utf-8"});saveAs(s,"download.json")},open(n){const t=new FileReader;t.onload=e=>{const s=JSON.parse(e.target.result);this.shapes=s.shapes,this.lines=s.lines,this.startCounter=s.startCounter,this.endCounter=s.endCounter,this.processCounter=s.processCounter,this.declarationCounter=s.declarationCounter,this.decisionCounter=s.decisionCounter,this.linesCounter=s.linesCounter,this.printCounter=s.printCounter},t.onerror=e=>console.error(e),t.readAsText(n)},findNext(n,t=!0){for(let e in this.lines)if(this.lines[e].startShape==n){if(t)return this.lines[e].endShape;t=!0}return"Pend1"},async build(){var n=document.getElementById("audio");S.resetVariables();let t="Pstart1",e=["Pstart1"],s="Verigood",o;for(;t!="Pend1";){s="Verigood",o=await this.getShape(t),o.isActive=!0;let i=!0;if(o.text!=null)switch(this.getSelectedShapeType(o.name)){case"declarations":s=new C(o.text,0).executeCode();break;case"processes":s=new C(o.text,1).executeCode();break;case"prints":s=new C(o.text,3).executeCode(),console.log(s);break;case"decisions":s=new C(o.text,2).executeCode()=="Verigood",i=s;break}if(await this.timeout(1e3),o.isActive=!1,s==null){o.isActive=!1;break}t=this.findNext(t,i),e.push(t)}return n.play(),o=await this.getShape(t),o.isActive=!0,await this.timeout(1e3),o.isActive=!1,e},run(n){this.build()},timeout(n){return new Promise(t=>setTimeout(t,n))}}},ct=n=>(M("data-v-8bae5f9a"),n=n(),O(),n),dt={id:"container"},ht={id:"Panel"},gt={id:"Canva"},ft=ct(()=>m("audio",{id:"audio",controls:"",style:{display:"none"}},[m("source",{type:"audio/wav",src:rt})],-1));function ut(n,t,e,s,o,i){const a=r("Header"),d=r("Panel"),h=r("Grid"),f=r("v-line"),_=r("Start"),T=r("End"),D=r("Declaration"),p=r("Process"),z=r("Print"),j=r("Decision"),W=r("v-transformer"),I=r("v-layer"),L=r("v-stage");return l(),y(x,null,[c(a,{onToggleGrid:i.toggleGrid,onToggleLineTool:i.toggleLineTool,onSave:i.save,onOpen:i.open,onStart:i.run},null,8,["onToggleGrid","onToggleLineTool","onSave","onOpen","onStart"]),m("div",dt,[m("div",ht,[c(d,{panelSize:o.panelSize,onHandlePanelMouseDown:i.handlePanelMouseDown},null,8,["panelSize","onHandlePanelMouseDown"])]),m("div",gt,[c(L,{ref:"stage",config:o.stageSize,onMousedown:i.handleStageMouseDown,onTouchstart:i.handleStageMouseDown},{default:b(()=>[c(I,{ref:"layer",class:"layer"},{default:b(()=>[o.grid?(l(),g(h,{key:0,space:30,stageSize:o.stageSize},null,8,["stageSize"])):Z("",!0),(l(!0),y(x,null,k(o.lines,u=>(l(),g(f,{key:u,config:{x:0,y:0,points:u.points,stroke:u.color,strokeWidth:5,draggable:!1,dash:u.dash}},null,8,["config"]))),128)),(l(!0),y(x,null,k(o.shapes.starts,u=>(l(),g(_,{key:u.id,config:u,highlight:u.isActive,onTransformend:i.handleTransformEnd,onDragstart:i.handleDragStart,onDragend:i.handleDragEnd},null,8,["config","highlight","onTransformend","onDragstart","onDragend"]))),128)),(l(!0),y(x,null,k(o.shapes.ends,u=>(l(),g(T,{key:u.id,config:u,highlight:u.isActive,onTransformend:i.handleTransformEnd,onDragstart:i.handleDragStart,onDragend:i.handleDragEnd},null,8,["config","highlight","onTransformend","onDragstart","onDragend"]))),128)),(l(!0),y(x,null,k(o.shapes.declarations,u=>(l(),g(D,{key:u.id,config:u,highlight:u.isActive,onTransformend:i.handleTransformEnd,onTransformstart:i.handleTransformStart,onEditProcess:i.editProcess,onDragend:i.handleDragEnd},null,8,["config","highlight","onTransformend","onTransformstart","onEditProcess","onDragend"]))),128)),(l(!0),y(x,null,k(o.shapes.processes,u=>(l(),g(p,{key:u.id,config:u,highlight:u.isActive,onTransformend:i.handleTransformEnd,onTransformstart:i.handleTransformStart,onEditProcess:i.editProcess,onDragend:i.handleDragEnd},null,8,["config","highlight","onTransformend","onTransformstart","onEditProcess","onDragend"]))),128)),(l(!0),y(x,null,k(o.shapes.prints,u=>(l(),g(z,{key:u.id,config:u,highlight:u.isActive,onTransformend:i.handleTransformEnd,onTransformstart:i.handleTransformStart,onEditProcess:i.editProcess,onDragend:i.handleDragEnd},null,8,["config","highlight","onTransformend","onTransformstart","onEditProcess","onDragend"]))),128)),(l(!0),y(x,null,k(o.shapes.decisions,u=>(l(),g(j,{key:u.id,config:u,highlight:u.isActive,onTransformend:i.handleTransformEnd,onTransformstart:i.handleTransformStart,onEditProcess:i.editProcess,onDragend:i.handleDragEnd},null,8,["config","highlight","onTransformend","onTransformstart","onEditProcess","onDragend"]))),128)),c(W,{ref:"transformer",rotateEnabled:!1,flipEnabled:!1,ignoreStroke:!0,enabledAnchors:o.enabledAnchors},null,8,["enabledAnchors"])]),_:1},512)]),_:1},8,["config","onMousedown","onTouchstart"])])]),ft],64)}const wt=w(lt,[["render",ut],["__scopeId","data-v-8bae5f9a"]]);export{wt as default};
