"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[6190],{6190:(y,d,o)=>{o.r(d),o.d(d,{ReviewSearchPageModule:()=>J});var l=o(9808),u=o(4182),n=o(8962),p=o(15),t=o(9863),g=o(4692),_=o(9330),C=o(9387),f=o(1356),x=o(8597);const h=function(){return[20]},v=function(){return[18]};function Z(i,c){if(1&i){const e=t.EpF();t.TgZ(0,"ion-col",2)(1,"ion-button",3)(2,"p",4),t.NdJ("click",function(){const s=t.CHM(e).$implicit;return t.oxw(3).openPage("review-write/"+s.id)}),t._uU(3," \ub9ac\ubdf0 \uc791\uc131 "),t.qZA()(),t.TgZ(4,"ion-item",5),t.NdJ("click",function(){const s=t.CHM(e).$implicit;return t.oxw(3).openPage("neighbor-farm-detail/"+s.id)}),t.TgZ(5,"ion-thumbnail",6),t._UZ(6,"img",7),t.qZA(),t.TgZ(7,"ion-label",8)(8,"ion-grid",9)(9,"h1",10),t._uU(10),t.ALo(11,"truncate"),t.qZA()(),t.TgZ(12,"p",11),t._uU(13),t.ALo(14,"truncate"),t.qZA(),t.TgZ(15,"p",12),t._uU(16,"\uc8fc\ubb38\uc77c\uc790: \ub0a0\uc9dc \ubc1b\uc544\uc640\uc57c\ud568"),t.qZA()()()()}if(2&i){const e=c.$implicit;t.xp6(6),t.Q6J("src",e.image,t.LSH),t.xp6(4),t.hij(" ",t.xi3(11,3,e.title,t.DdM(9,h))," "),t.xp6(3),t.hij(" ",t.xi3(14,6,e.description,t.DdM(10,v))," ")}}function P(i,c){if(1&i&&(t.TgZ(0,"ion-grid")(1,"ion-row"),t.YNc(2,Z,17,11,"ion-col",1),t.qZA()()),2&i){const e=t.oxw(2);t.xp6(2),t.Q6J("ngForOf",e.items)}}function A(i,c){if(1&i&&(t.TgZ(0,"ion-item"),t.YNc(1,P,3,1,"ion-grid",0),t.qZA()),2&i){const e=t.oxw();t.xp6(1),t.Q6J("ngIf",e.cardWide)}}function M(i,c){if(1&i){const e=t.EpF();t.TgZ(0,"ion-item",14),t.NdJ("click",function(){const s=t.CHM(e).$implicit;return t.oxw(2).openPage("neighbor-farm-detail/"+s.id)}),t.TgZ(1,"ion-avatar",6),t._UZ(2,"img",15),t.qZA(),t.TgZ(3,"ion-label")(4,"ion-item")(5,"h2",16),t._uU(6),t.ALo(7,"slice"),t.qZA(),t.TgZ(8,"h3",17),t.NdJ("click",function(){const s=t.CHM(e).$implicit;return t.oxw(2).openPage("review-write/"+s.id)}),t._uU(9," \ub9ac\ubdf0 \uc4f0\ub7ec\uac00\uae30 "),t.qZA()(),t.TgZ(10,"h2",18),t._uU(11),t.ALo(12,"slice"),t.qZA()()()}if(2&i){const e=c.$implicit;t.xp6(2),t.Q6J("src",e.image,t.LSH),t.xp6(4),t.hij(" ",e.title.length>6?t.Dn7(7,3,e.title,0,6)+"..":e.title," "),t.xp6(5),t.hij(" ",e.description.length>6?t.Dn7(12,7,e.description,0,6)+"..":e.description," ")}}function w(i,c){if(1&i&&(t.TgZ(0,"ion-item"),t.YNc(1,M,13,11,"ion-item",13),t.qZA()),2&i){const e=t.oxw();t.xp6(1),t.Q6J("ngForOf",e.items.items)}}let T=(()=>{class i{constructor(e,r){this.navController=e,this.itemDetailService=r,this.items=r.getAllItemDetail(),this.cardWide=!0}ngOnInit(){}openPage(e){console.log(e),this.navController.navigateForward(e,{})}}return i.\u0275fac=function(e){return new(e||i)(t.Y36(n.SH),t.Y36(C.X))},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-item-list"]],inputs:{cardWide:"cardWide"},decls:2,vars:2,consts:[[4,"ngIf"],["size","12",4,"ngFor","ngForOf"],["size","12"],["color","success",1,"text-size-sm"],[1,"text-size-sm","review-write",3,"click"],["lines","none",1,"default-item","border","border-radius",3,"click"],["slot","start"],[1,"border-radius",3,"src"],[1,"ion-justify-content-between"],[1,"two-line"],[1,"text-color-primary"],[1,"text-color-secondary"],[1,"order-date"],["class","default-item border border-radius ion-margin-top",3,"click",4,"ngFor","ngForOf"],[1,"default-item","border","border-radius","ion-margin-top",3,"click"],[3,"src"],[1,"text-size-md","text-color-primary","font-regular"],["slot","end",1,"text-size-sm",3,"click"],[1,"text-size-sm","text-color-primary","font-regular","ion-text-wrap"]],template:function(e,r){1&e&&(t.YNc(0,A,2,1,"ion-item",0),t.YNc(1,w,2,1,"ion-item",0)),2&e&&(t.Q6J("ngIf",r.cardWide),t.xp6(1),t.Q6J("ngIf",!r.cardWide))},directives:[l.O5,n.Ie,n.jY,n.Nd,l.sg,n.wI,n.YG,n.Bs,f.J,n.Q$,n.BJ],pipes:[x.W,l.OU],styles:["*[_ngcontent-%COMP%]{font-family:Nanum Gothic}ion-col[_ngcontent-%COMP%]{position:relative}ion-col[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{position:absolute;z-index:2;right:10px;top:15px;height:30px;color:#fff}ion-col[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]{height:100px;white-space:initial}ion-col[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   .two-line[_ngcontent-%COMP%]{margin:0}ion-col[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   .two-line[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:.7em;white-space:initial;width:65%;height:40px}ion-col[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:.6em}.order-date[_ngcontent-%COMP%]{color:#0000ff85}"]}),i})();var O=o(241);const I=[{path:"",component:(()=>{class i{constructor(){}ngOnInit(){this.cardWide=!0}}return i.\u0275fac=function(e){return new(e||i)},i.\u0275cmp=t.Xpm({type:i,selectors:[["app-review-search"]],decls:11,vars:3,consts:[[1,"green"],["header",""],["slot","start"],["defaultHref","/","text",""],[1,"ion-text-capitalize"],["scrollEvents","true",1,"green",3,"fullscreen","appHideHeader"],[3,"cardWide"]],template:function(e,r){if(1&e&&(t.TgZ(0,"ion-header",0,1)(2,"ion-toolbar")(3,"ion-buttons",2),t._UZ(4,"ion-back-button",3),t.qZA(),t.TgZ(5,"ion-title",4),t._uU(6,"\ub9ac\ubdf0 \uad00\ub9ac"),t.qZA()()(),t.TgZ(7,"ion-content",5),t._UZ(8,"app-search-bar-simple")(9,"app-item-list",6)(10,"app-footer"),t.qZA()),2&e){const a=t.MAs(1);t.xp6(7),t.Q6J("fullscreen",!0)("appHideHeader",a),t.xp6(2),t.Q6J("cardWide",r.cardWide)}},directives:[n.Gu,n.sr,n.Sm,n.oU,n.cs,n.wd,n.W2,g.V,_.k,T,O.c],styles:[""]}),i})()}];let B=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[[p.Bz.forChild(I)],p.Bz]}),i})();var L=o(6102),F=o(4410),S=o(9258);let J=(()=>{class i{}return i.\u0275fac=function(e){return new(e||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[[l.ez,u.u5,n.Pc,B,L.U,F.i,S.K]]}),i})()}}]);