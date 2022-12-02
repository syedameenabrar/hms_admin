"use strict";(self.webpackChunkhms=self.webpackChunkhms||[]).push([[845],{7845:(h,d,i)=>{i.r(d),i.d(d,{LoginModule:()=>u});var p=i(9808),s=i(1196),n=i(1223),f=i(529),l=i(9242),r=i(2382);const m=[{path:"",component:(()=>{class t{constructor(o,e,g){this.api=o,this.router=e,this.spinner=g,this.email="",this.pass="",this.data={}}ngOnInit(){}onLogin(){this.data={email:this.email,password:this.pass},console.log(this.data),this.spinner.show(),this.api.loginDetails(this.data).subscribe(o=>{const e=o;"Successfully User login"==o.message&&"admin"==e.data.user.accountType?(localStorage.setItem("logToken",e.data.user.token),this.router.navigate(["/main"])):"Driver"==e.data.user.accountType?alert("Try with Admin credentials"):alert("Something went wrong"),this.spinner.hide()},o=>{"Invalid Password"==o.error.message?alert("Invalid Password"):"User not found"==o.error.message?alert("User not found"):alert("Something went wrong"),this.spinner.hide()})}}return t.\u0275fac=function(o){return new(o||t)(n.Y36(f.M),n.Y36(s.F0),n.Y36(l.t2))},t.\u0275cmp=n.Xpm({type:t,selectors:[["app-login"]],decls:19,vars:2,consts:[["bdColor","rgba(51,51,51,0.8)","size","medium","color","#fff","type","ball-scale-multiple"],[2,"font-size","20px","color","white"],["id","login",1,"login"],[1,"head"],[1,"company"],[1,"msg"],[1,"form"],["type","text","placeholder","Email","name","email","id","username","required","",1,"text","mt-4",3,"ngModel","ngModelChange"],["type","text","name","pass","placeholder","Password",1,"text","mt-4","mb-5",3,"ngModel","ngModelChange"],["id","do-login",1,"btn-login",3,"click"],["routerLink","/register",1,"forgot"]],template:function(o,e){1&o&&(n.TgZ(0,"ngx-spinner",0),n._UZ(1,"p",1),n.qZA(),n.TgZ(2,"body"),n.TgZ(3,"section",2),n.TgZ(4,"div",3),n.TgZ(5,"h1",4),n._uU(6,"HMS Admin"),n.qZA(),n.qZA(),n.TgZ(7,"p",5),n._uU(8,"Welcome back"),n.qZA(),n.TgZ(9,"div",6),n.TgZ(10,"form"),n.TgZ(11,"input",7),n.NdJ("ngModelChange",function(c){return e.email=c}),n.qZA(),n._UZ(12,"br"),n.TgZ(13,"input",8),n.NdJ("ngModelChange",function(c){return e.pass=c}),n.qZA(),n._UZ(14,"br"),n.TgZ(15,"a",9),n.NdJ("click",function(){return e.onLogin()}),n._uU(16,"Login"),n.qZA(),n.TgZ(17,"a",10),n._uU(18,"Forgot?"),n.qZA(),n.qZA(),n.qZA(),n.qZA(),n.qZA()),2&o&&(n.xp6(11),n.Q6J("ngModel",e.email),n.xp6(2),n.Q6J("ngModel",e.pass))},directives:[l.Ro,r._Y,r.JL,r.F,r.Fj,r.Q7,r.JJ,r.On,s.yS],styles:["body[_ngcontent-%COMP%]{background:#ABCDEF;font-family:Assistant,sans-serif;display:flex;min-height:90vh}.login[_ngcontent-%COMP%]{color:#fff;background:#136a8a;background:linear-gradient(to right,#267871,#136a8a);margin:auto;box-shadow:0 2px 10px #0003,0 10px 20px #0000004d,0 30px 60px 1px #00000080;border-radius:8px;padding:50px}.login[_ngcontent-%COMP%]   .head[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center}.login[_ngcontent-%COMP%]   .head[_ngcontent-%COMP%]   .company[_ngcontent-%COMP%]{font-size:2.2em}.login[_ngcontent-%COMP%]   .msg[_ngcontent-%COMP%]{text-align:center}.login[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   input[type=text].text[_ngcontent-%COMP%]{border:none;background:none;box-shadow:0 2px #fff;width:100%;color:#fff;font-size:1em;outline:none}.login[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]::placeholder{color:#d3d3d3}.login[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   input[type=password].password[_ngcontent-%COMP%]{border:none;background:none;box-shadow:0 2px #fff;width:100%;color:#fff;font-size:1em;outline:none;margin-bottom:20px;margin-top:20px}.login[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .password[_ngcontent-%COMP%]::placeholder{color:#d3d3d3}.login[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .btn-login[_ngcontent-%COMP%]{background:none;text-decoration:none;color:#fff;box-shadow:0 0 0 2px #fff;border-radius:3px;padding:5px 2em;transition:.5s}.login[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .btn-login[_ngcontent-%COMP%]:hover{background:white;color:#696969;transition:.5s}.login[_ngcontent-%COMP%]   .forgot[_ngcontent-%COMP%]{text-decoration:none;color:#fff;float:right}footer[_ngcontent-%COMP%]{position:absolute;color:#136a8a;bottom:10px;padding-left:20px}footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{display:inline}footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:green;text-decoration:none}footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{text-decoration:underline}footer[_ngcontent-%COMP%]   .heart[_ngcontent-%COMP%]{color:#b22222;font-size:1.5em}"]}),t})()}];let u=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[[p.ez,r.u5,l.ef,s.Bz.forChild(m)]]}),t})()}}]);