(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[7],{136:function(e,a,t){"use strict";t.r(a);var n=t(3),r=t(41),o=t(42),s=t(44),i=t(43),c=t(0),l=t(36),p=(t(57),t(8)),d=t(27),m=t(98),h=t.n(m),b=t(140),u=t(1),j=function(e){Object(s.a)(t,e);var a=Object(i.a)(t);function t(){var e;Object(r.a)(this,t);for(var o=arguments.length,s=new Array(o),i=0;i<o;i++)s[i]=arguments[i];return(e=a.call.apply(a,[this].concat(s))).state={email:"",password:""},e.checkLoginData=function(){if(""==e.state.email||""==e.state.password)return l.b.error("Email or password cant be empty",{position:"top-center",autoClose:2e3,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0}),!0},e.handleChange=function(a){var t=a.currentTarget,r=t.name,o=t.value;e.setState(Object(n.a)({},r,o))},e.handleSubmit=function(a){a.preventDefault(),console.log("beforeCHECK"),console.log(e.props.authError),e.checkLoginData()||(e.props.onLogin(e.state),e.setState({name:"",email:"",password:""}))},e}return Object(o.a)(t,[{key:"render",value:function(){var e=this.state,a=e.email,t=e.password;return Object(u.jsxs)("div",{children:[Object(u.jsx)(b.a,{in:!0,appear:!0,timeout:500,classNames:{appear:h.a.HeaderFadeAppear,appearActive:h.a.HeaderFadeAppearActive},children:Object(u.jsxs)("div",{className:h.a.Container,children:[Object(u.jsx)("h1",{children:"Login"}),Object(u.jsxs)("form",{onSubmit:this.handleSubmit,autoComplete:"off",className:h.a.FormContainer,children:[Object(u.jsxs)("lable",{is:"webview",children:["EMAIL",Object(u.jsx)("input",{type:"email",name:"email",value:a,onChange:this.handleChange,className:h.a.FormItem})]}),Object(u.jsxs)("lable",{is:"webview",children:["PASSWORD",Object(u.jsx)("input",{type:"password",name:"password",value:t,onChange:this.handleChange,className:h.a.FormItem})]}),Object(u.jsx)("button",{type:"submit",className:h.a.FormBtn,children:Object(u.jsx)("h3",{children:"LOGIN"})})]})]})}),Object(u.jsx)(l.a,{})]})}}]),t}(c.Component),g={onLogin:d.a.login};a.default=Object(p.b)(null,g)(j)},98:function(e,a,t){e.exports={FormContainer:"Login_FormContainer__Yqfcs",Container:"Login_Container__sZYN6",FormItem:"Login_FormItem__2Mjk3",FormBtn:"Login_FormBtn__HwNnt",HeaderFadeAppear:"Login_HeaderFadeAppear__3tbyi",HeaderFadeAppearActive:"Login_HeaderFadeAppearActive__2VSZV"}}}]);
//# sourceMappingURL=7.06b274e8.chunk.js.map