"use strict";(self.webpackChunkhms=self.webpackChunkhms||[]).push([[461],{7461:(C,p,a)=>{a.r(p),a.d(p,{TrackVehiclesModule:()=>u});var _=a(9808),l=a(1196),g=a(2382),t=a(1223),d=a(529),c=a(9242);function h(o,i){if(1&o){const n=t.EpF();t.TgZ(0,"div",9),t.TgZ(1,"div",10),t.TgZ(2,"div",11),t.TgZ(3,"h1"),t._uU(4),t.qZA(),t.TgZ(5,"p"),t._uU(6),t.qZA(),t.TgZ(7,"p"),t._uU(8),t.qZA(),t.TgZ(9,"p"),t._uU(10),t.qZA(),t.TgZ(11,"p"),t._uU(12),t.qZA(),t.TgZ(13,"button",12),t.NdJ("click",function(){const r=t.CHM(n).$implicit;return t.oxw().longitude(r.latitude,r.longitude)}),t._uU(14,"Show Map"),t.qZA(),t.qZA(),t.qZA(),t.qZA()}if(2&o){const n=i.$implicit,e=i.index;t.xp6(4),t.AsE("",e+1," : ",n.vehicleNo,""),t.xp6(2),t.hij("Ignition : ",n.ignition,""),t.xp6(2),t.hij("Speed : ",n.speed,""),t.xp6(2),t.hij("Address : ",n.address,""),t.xp6(2),t.hij("Track_Date_time : ",n.trackDatetime,"")}}function m(o,i){if(1&o){const n=t.EpF();t.TgZ(0,"div",9),t.TgZ(1,"div",10),t.TgZ(2,"div",11),t.TgZ(3,"h1"),t._uU(4),t.qZA(),t.TgZ(5,"p"),t._uU(6),t.qZA(),t.TgZ(7,"p"),t._uU(8),t.qZA(),t.TgZ(9,"button",12),t.NdJ("click",function(){const r=t.CHM(n).$implicit;return t.oxw().showMap(r.data.share_link)}),t._uU(10,"Show Map"),t.qZA(),t.qZA(),t.qZA(),t.qZA()}if(2&o){const n=i.$implicit,e=i.index,s=t.oxw();t.xp6(4),t.AsE("",s.globalCount+e+1," : ",n.data.vehicle_number,""),t.xp6(2),t.hij("ignition : ",n.data.ignition,""),t.xp6(2),t.hij("speed : ",n.data.speed,"")}}const x=[{path:"",component:(()=>{class o{constructor(n,e){this.api=n,this.spinner=e,this.count="",this.globalCount="",this.tCount="",this.getImgsSer=[]}ngOnInit(){this.getLrData(),this.locoNav(),this.globalApi()}getLrData(){this.api.getLrData().subscribe(n=>{this.getImgsSer=n.data,this.getImgsSer.forEach(e=>{})})}locoNav(){this.spinner.show(),this.api.trackVehicle().subscribe(n=>{this.count=n.count,this.tCount=this.globalCount+this.count,this.dataTrack=n.data,this.spinner.hide()},n=>{this.spinner.hide()})}globalApi(){this.spinner.show(),this.api.otherVehiclesTracking().subscribe(n=>{this.globalCount=n.length,this.count=n.count,this.globalTrack=n,this.spinner.hide()},n=>{})}showMap(n){window.open(n)}longitude(n,e){window.open(`https://maps.google.com/?q=${n},${e}`)}refreshApi(){this.locoNav(),this.globalApi()}}return o.\u0275fac=function(n){return new(n||o)(t.Y36(d.M),t.Y36(c.t2))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-track-vehicles"]],decls:26,vars:5,consts:[["bdColor","rgba(51,51,51,0.8)","size","medium","color","#fff","type","ball-scale-multiple"],[2,"font-size","20px","color","white"],["role","banner",1,"toolbar"],["width","90","alt","Angular Logo","src","../../assets/images/hms-logo.png"],["role","main",1,"content"],[1,"btn","btn-primary","m-1",3,"click"],[1,"profit__item__wrapper"],[1,"row"],["class","col-md-12",4,"ngFor","ngForOf"],[1,"col-md-12"],[1,"profit__single__item","alt","shadow__effect"],[1,"item__content"],[1,"btn","btn-success","sMap",3,"click"]],template:function(n,e){1&n&&(t.TgZ(0,"ngx-spinner",0),t.TgZ(1,"p",1),t._uU(2,"Loading..."),t.qZA(),t.qZA(),t.TgZ(3,"div",2),t._UZ(4,"img",3),t.TgZ(5,"span"),t._uU(6,"HMS LOGISTICS"),t.qZA(),t.qZA(),t.TgZ(7,"div",4),t.TgZ(8,"h4"),t._uU(9,"Track Vehicles Location"),t.qZA(),t.TgZ(10,"h3"),t._uU(11),t.qZA(),t.TgZ(12,"h5"),t._uU(13,"Global"),t.qZA(),t.TgZ(14,"p"),t._uU(15,"*Refresh to get latest data "),t.TgZ(16,"button",5),t.NdJ("click",function(){return e.refreshApi()}),t._uU(17,"Refresh"),t.qZA(),t.qZA(),t.TgZ(18,"div",6),t.TgZ(19,"div",7),t.YNc(20,h,15,6,"div",8),t.qZA(),t.qZA(),t.TgZ(21,"h5"),t._uU(22,"LocoNav"),t.qZA(),t.TgZ(23,"div",6),t.TgZ(24,"div",7),t.YNc(25,m,11,4,"div",8),t.qZA(),t.qZA(),t.qZA()),2&n&&(t.xp6(11),t.lnq("Total Count : ",e.globalCount," + ",e.count," = ",e.tCount,""),t.xp6(9),t.Q6J("ngForOf",e.globalTrack),t.xp6(5),t.Q6J("ngForOf",e.dataTrack))},directives:[c.Ro,_.sg],styles:[".profit__item__wrapper[_ngcontent-%COMP%]{margin-bottom:30px}.profit__item__wrapper[_ngcontent-%COMP%]:last-of-type{margin-bottom:0}@media only screen and (max-width: 767px){.profit__item__wrapper[_ngcontent-%COMP%]   .alt[_ngcontent-%COMP%]{margin-bottom:30px}}.profit__single__item[_ngcontent-%COMP%]{padding:30px;background-color:#fff;box-shadow:0 4px 24px #13216e40;display:flex;align-items:center;justify-content:flex-start;gap:30px;border-radius:10px}@media only screen and (max-width: 1199px){.profit__single__item[_ngcontent-%COMP%]{border-radius:0}}@media only screen and (max-width: 1399px){.profit__single__item[_ngcontent-%COMP%]{padding:20px;gap:15px}}@media only screen and (max-width: 991px){.profit__single__item[_ngcontent-%COMP%]{flex-direction:column;justify-content:center;border-radius:0;padding:30px 20px 25px}}@media only screen and (max-width: 767px){.profit__single__item[_ngcontent-%COMP%]{max-width:350px;margin-left:auto;margin-right:auto;text-align:center}}.profit__single__item[_ngcontent-%COMP%]   .img__box[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:120px;height:120px;border-radius:50%}@media only screen and (max-width: 1199px){.profit__single__item[_ngcontent-%COMP%]   .img__box[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100px;height:100px}}@media only screen and (max-width: 1199px){.profit__single__item[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-size:20px}}@media only screen and (max-width: 991px){.profit__single__item[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{text-align:center}}.profit__single__item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{margin-top:12px}@media only screen and (max-width: 1199px){.profit__single__item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:16px}}@media only screen and (max-width: 991px){.profit__single__item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{text-align:center}}.shadow__effect[_ngcontent-%COMP%]{box-shadow:0 4px 24px #13216e40;transition:box-shadow .1s ease-out,transform .1s ease-out}.shadow__effect[_ngcontent-%COMP%]:hover{transform:translateY(-5px);box-shadow:0 5px 20px 3px #0003}@media only screen and (max-width: 575px){.shadow__effect[_ngcontent-%COMP%]:hover{transform:translateY(0)}}.shadow__effect__secondary[_ngcontent-%COMP%]{transition:box-shadow .1s ease-out,transform .1s ease-out}.shadow__effect__secondary[_ngcontent-%COMP%]:hover{transform:translateY(-5px);box-shadow:0 5px 20px 3px #0003}@media only screen and (max-width: 575px){.shadow__effect__secondary[_ngcontent-%COMP%]:hover{transform:translateY(0)}}.alt[_ngcontent-%COMP%]{background-color:#1976d2;color:#fff}.alt[_ngcontent-%COMP%]:hover{background-color:#5927e3;color:#fff}@media only screen and (max-width: 575px){.alt[_ngcontent-%COMP%]{margin-top:30px}}@media only screen and (max-width: 767px){.alt[_ngcontent-%COMP%]{margin-bottom:30px}}@media only screen and (max-width: 1199px){.alt[_ngcontent-%COMP%]{padding-bottom:0}}@media (min-width: 570px){.profit__single__item[_ngcontent-%COMP%]{margin-bottom:20px}}.sMap[_ngcontent-%COMP%]{margin:10px}"]}),o})()}];let u=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[[_.ez,g.u5,c.ef,l.Bz.forChild(x)]]}),o})()}}]);