(this["webpackJsonpsocial-network"]=this["webpackJsonpsocial-network"]||[]).push([[0],{22:function(e,s,c){},25:function(e,s,c){},26:function(e,s,c){},33:function(e,s,c){"use strict";c.r(s);var t=c(1),l=c.n(t),a=c(16),i=c.n(a),r=(c(22),c(23),c(24),c(25),c(26),c(7)),n=c(2),o=c(0),j=function(){return Object(o.jsx)("footer",{children:Object(o.jsx)("div",{class:"container mt-5",children:Object(o.jsx)("div",{class:"row",children:Object(o.jsx)("div",{class:"col-12 text-center",children:"\xa9 2020 Your name, devchallenges.io"})})})})},d=function(){var e=null;Object(t.useEffect)((function(){e=document.querySelector("html")}),[]);var s=function(){e&&(e.scrollTop=0)};return Object(o.jsx)("div",{className:"menu-clone-contain d-md-none d-block",children:Object(o.jsxs)("ul",{className:"menu-clone menu",children:[Object(o.jsx)("li",{children:Object(o.jsx)(r.b,{onClick:function(){return s()},className:"border-radius",activeClassName:"active",to:"/home",children:Object(o.jsx)("i",{className:"bx bxs-home"})})}),Object(o.jsx)("li",{children:Object(o.jsx)(r.b,{onClick:function(){return s()},className:"border-radius",activeClassName:"active",to:"/explore",children:Object(o.jsx)("i",{className:"bx bxs-compass"})})}),Object(o.jsx)("li",{children:Object(o.jsx)(r.b,{onClick:function(){return s()},className:"border-radius",activeClassName:"active",to:"/bookmark",children:Object(o.jsx)("i",{className:"bx bxs-bookmark"})})})]})})},b=c(10),m=function(e){e.cmtId;var s=e.userImg,c=e.userName,t=e.cmtContent,l=e.isLike,a=e.cmtDate;return Object(o.jsx)("div",{children:Object(o.jsxs)("div",{className:"post-comment-box d-flex flex-wrap pt-3",children:[Object(o.jsx)("div",{className:"post-user-img user-img",children:Object(o.jsx)("img",{className:"border-radius",src:s,alt:"Image of User"})}),Object(o.jsxs)("div",{className:"post-comment-contain w-75 flex-grow-1 pt-3 pt-md-0",children:[Object(o.jsxs)("div",{className:"form-group post-comment-content p-3 border-radius overflow-hidden",children:[Object(o.jsxs)("div",{className:"post-comment-author",children:[Object(o.jsx)("a",{href:"",className:"post-comment-author-name color-black",children:c}),Object(o.jsx)("span",{className:"post-comment-author-time d-md-inline-block d-block mx-md-2",children:new Intl.DateTimeFormat("en-GB",{month:"long",day:"2-digit",year:"numeric"}).format(new Date(a))})]}),Object(o.jsx)("p",{className:"post-comment-text mt-3",children:t})]}),Object(o.jsxs)("div",{className:"post-comment-status pt-2",children:[Object(o.jsxs)("span",{className:l?"txtLiked":"",children:[Object(o.jsx)("i",{className:"bx bx-heart"})," ",l?"Liked":"Like"]}),Object(o.jsx)("span",{className:"post-comment-status-dot mx-3"}),Object(o.jsx)("span",{children:"12k Likes"})]})]})]})})},x=function(e){var s=e.urlImage,c=e.idx,t=e.total;return Object(o.jsxs)("div",{className:"post-img-contain",children:[Object(o.jsx)("div",{className:"post-media w-100 h-100",children:Object(o.jsx)("img",{src:s,alt:"Image of Post"})}),4==c?Object(o.jsxs)("div",{className:"post-img-more",children:[t-5,"+"]}):""]})},h=function(){Object(t.useEffect)((function(){var e=document.querySelector(".modal-box"),s=document.querySelector(".btn-close-modal-box"),c=document.querySelector(".modal-box-img-prev"),t=document.querySelector(".modal-box-img-next"),l=document.querySelectorAll(".post-img"),a=null,i=document.querySelector(".modal-box-img"),r=0;function n(e){var s=a[e].cloneNode()||"";i.innerHTML="",i.appendChild(s)}l.forEach((function(s,c){s.addEventListener("click",(function(){e.classList.add("active"),this,a=this.querySelectorAll(".post-media>*"),n(r=0)}))})),s.addEventListener("click",(function(){e.classList.remove("active")})),c.addEventListener("click",(function(){r-1<0?r=a.length-1:r-=1,n(r)})),t.addEventListener("click",(function(){r+1>a.length-1?r=0:r+=1,n(r)}))}),[]);var e=Object(t.useState)([{urlImage:"images/post-image-1.jpg"},{urlImage:"images/post-image-2.jpg"},{urlImage:"images/post-image-3.jpg"},{urlImage:"images/post-image-4.jpg"},{urlImage:"images/post-image-5.jpg"},{urlImage:"images/post-image-6.jpg"},{urlImage:"images/post-image-5.jpg"}]),s=Object(b.a)(e,2),c=s[0];s[1],document.querySelector(".modal-box"),document.querySelector(".btn-close-modal-box"),document.querySelector(".modal-box-img");return Object(o.jsxs)("div",{className:"post-contain mt-5",children:[Object(o.jsxs)("h5",{className:"post-status",children:[Object(o.jsx)("i",{className:"bx bx-refresh"})," Daniel Jensen retweeted"]}),Object(o.jsxs)("div",{className:"post box-shadow border-radius",children:[Object(o.jsxs)("div",{className:"user-post d-inline-flex",children:[Object(o.jsx)("div",{className:"post-user-img user-img",children:Object(o.jsx)("img",{className:"border-radius",src:"images/user.jpg",alt:"Image of User"})}),Object(o.jsxs)("div",{className:"post-user-info",children:[Object(o.jsx)("span",{className:"post-user-name user-name d-block color-black",children:"Xanhthe Neal"}),Object(o.jsx)("span",{className:"post-user-time d-block",children:"24 August at 20:43"})]})]}),Object(o.jsx)("p",{className:"post-content mt-3",children:"Traveling \u2013 it leaves you speechless, then turns you into a storyteller."}),Object(o.jsx)("div",{className:"post-img d-flex border-radius flex-wrap",children:c.map((function(e,s){return Object(o.jsx)(x,{urlImage:e.urlImage,idx:s,total:c.length},s)}))}),Object(o.jsx)("div",{className:"post-info mt-3",children:Object(o.jsxs)("ul",{className:"d-flex justify-content-end flex-wrap post-user-time",children:[Object(o.jsx)("li",{children:"417 Comments"}),Object(o.jsx)("li",{className:"mx-3",children:"59k Retweeted"}),Object(o.jsx)("li",{children:"234 Saved"})]})}),Object(o.jsx)("hr",{}),Object(o.jsx)("div",{className:"post-info-btn",children:Object(o.jsxs)("ul",{className:"d-flex justify-content-center flex-wrap",children:[Object(o.jsxs)("li",{children:[Object(o.jsx)("i",{className:"bx bx-message"})," ",Object(o.jsx)("span",{className:"d-none d-md-inline-block",children:"Comment"})]}),Object(o.jsxs)("li",{children:[Object(o.jsx)("i",{className:"bx bx-refresh"})," ",Object(o.jsx)("span",{className:"d-none d-md-inline-block",children:"Retweeted"})]}),Object(o.jsxs)("li",{children:[Object(o.jsx)("i",{className:"bx bx-heart"})," ",Object(o.jsx)("span",{className:"d-none d-md-inline-block",children:"Liked"})]}),Object(o.jsxs)("li",{children:[Object(o.jsx)("i",{className:"bx bx-bookmark"})," ",Object(o.jsx)("span",{className:"d-none d-md-inline-block",children:"Saved"})]})]})}),Object(o.jsx)("hr",{}),Object(o.jsxs)("div",{className:"post-comment-box d-flex flex-wrap align-items-center",children:[Object(o.jsx)("div",{className:"post-user-img user-img",children:Object(o.jsx)("img",{className:"border-radius",src:"images/user.jpg",alt:"Image of User"})}),Object(o.jsx)("div",{className:"form-group flex-fill w-50 post-comment-form border-radius overflow-hidden",children:Object(o.jsxs)("div",{className:"input-group",children:[Object(o.jsx)("input",{type:"text",className:"form-control shadow-none py-3",placeholder:"Tweet your reply"}),Object(o.jsx)("label",{className:"input-group-text",htmlFor:"inputGroupFile01",children:Object(o.jsx)("i",{className:"bx bx-bx bxs-image-alt"})}),Object(o.jsx)("input",{type:"file",className:"form-control d-none",id:"inputGroupFile01"}),Object(o.jsx)("label",{className:"input-group-text",children:Object(o.jsx)("i",{className:"bx bx-send"})})]})})]}),Object(o.jsx)("hr",{}),Object(o.jsx)(m,{cmtId:"1",userImg:"images/user.jpg",userName:"Waqar Bloom",cmtContent:"I\u2019ve seen awe-inspiring things that I thought I\u2019d never be able to explain to another person.",isLike:!0,cmtDate:"2020/03/25"})]}),Object(o.jsxs)("div",{className:"modal-box",children:[Object(o.jsx)("div",{className:"modal-box-img",children:Object(o.jsx)("img",{src:"images/post-image-1.jpg",alt:"Image of post"})}),Object(o.jsx)("div",{className:"btn-close-modal-box",children:Object(o.jsx)("i",{className:"bx bx-x"})}),Object(o.jsx)("div",{className:"modal-box-img-prev modal-box-img-control",children:Object(o.jsx)("i",{className:"bx bx-caret-left-circle"})}),Object(o.jsx)("div",{className:"modal-box-img-next modal-box-img-control",children:Object(o.jsx)("i",{className:"bx bx-caret-right-circle"})})]})]})},O=function(){return Object(o.jsx)("div",{children:Object(o.jsx)(h,{})})},u=function(){return Object(o.jsxs)("div",{children:[Object(o.jsx)("div",{className:"image-bg-profile",children:Object(o.jsx)("img",{src:"images/background.jpg",alt:"Image background"})}),Object(o.jsx)("div",{className:"container",children:Object(o.jsx)("div",{className:"row",children:Object(o.jsx)("div",{className:"col-12",children:Object(o.jsx)("div",{className:"box-my-profile",children:Object(o.jsxs)("div",{className:"row",children:[Object(o.jsx)("div",{className:"col-md-2",children:Object(o.jsxs)("div",{className:"box-image-profile border-radius",children:[Object(o.jsx)("img",{className:"border-radius",src:"images/user.jpg",alt:"Image of User"}),Object(o.jsx)("div",{className:"box-image-profile-overlay","data-bs-toggle":"modal","data-bs-target":"#exampleModal",children:Object(o.jsx)("i",{className:"bx bxs-camera"})}),Object(o.jsx)("div",{className:"modal fade",id:"exampleModal",tabIndex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true",children:Object(o.jsx)("div",{className:"modal-dialog",children:Object(o.jsxs)("div",{className:"modal-content border-radius",children:[Object(o.jsxs)("div",{className:"modal-header",children:[Object(o.jsx)("h5",{className:"modal-title color-black",id:"exampleModalLabel",children:"Upload Image Profile"}),Object(o.jsx)("button",{type:"button",className:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})]}),Object(o.jsx)("div",{className:"modal-body",children:Object(o.jsx)("div",{className:"row",children:Object(o.jsxs)("div",{className:"col-12 text-center",children:[Object(o.jsx)("label",{htmlFor:"ImagePhoto",className:"ImagePhotoSelect border-radius",children:Object(o.jsx)("i",{className:"bx bxs-image-add"})}),Object(o.jsx)("input",{id:"ImagePhoto",type:"file",className:"form-control d-none"})]})})}),Object(o.jsxs)("div",{className:"modal-footer",children:[Object(o.jsx)("button",{type:"button",className:"btn btn-secondary","data-bs-dismiss":"modal",children:"Close"}),Object(o.jsx)("button",{type:"button",className:"btn btn-primary",children:"Save changes"})]})]})})})]})}),Object(o.jsxs)("div",{className:"col-md-5 text-center text-md-start box-info-profile",children:[Object(o.jsxs)("div",{className:"box-info-name",children:[Object(o.jsx)("span",{className:"info-name d-md-inline-block d-block bold color-black",children:"Daniel Jensen"}),Object(o.jsxs)("span",{className:"info-following",children:[Object(o.jsx)("span",{className:"bold",children:"2,569"})," Following"]}),Object(o.jsxs)("span",{className:"info-follower",children:[Object(o.jsx)("span",{className:"bold",children:"10,8K"})," Followers"]})]}),Object(o.jsx)("p",{className:"box-info-description",children:"Photographer & Filmmaker based in Copenhagen, Denmark"})]}),Object(o.jsx)("div",{className:"col-md-5 text-center text-md-end box-info-btn-follow",children:Object(o.jsxs)("button",{className:"btn btn-follow btn-border-radius",children:[Object(o.jsx)("i",{className:"bx bxs-user-plus"})," Follow"]})})]})})})})})]})},p=function(){return Object(o.jsx)("div",{className:"vertical-menu py-3 border-radius",children:Object(o.jsxs)("ul",{children:[Object(o.jsx)("li",{children:Object(o.jsx)("a",{href:"",children:"Tweet"})}),Object(o.jsx)("li",{children:Object(o.jsx)("a",{href:"",children:"Tweets & replies"})}),Object(o.jsx)("li",{children:Object(o.jsx)("a",{href:"",children:"Media"})}),Object(o.jsx)("li",{children:Object(o.jsx)("a",{href:"",children:"Likes"})})]})})};var f=function(e){return Object(t.useEffect)((function(){document.title="Home"}),[]),Object(o.jsxs)("div",{children:[Object(o.jsxs)("div",{className:"main",children:[Object(o.jsx)(u,{}),Object(o.jsx)("div",{className:"container mt-4",children:Object(o.jsxs)("div",{className:"row",children:[Object(o.jsx)("div",{className:"col-md-3",children:Object(o.jsx)(p,{})}),Object(o.jsx)("div",{className:"col-md-9",children:Object(o.jsx)(O,{})}),Object(o.jsx)(d,{})]})})]}),Object(o.jsx)(j,{})]})},N=function(e){return Object(t.useEffect)((function(){document.title="Explore"}),[]),Object(o.jsxs)("div",{children:[Object(o.jsx)("div",{className:"main",children:Object(o.jsx)("div",{className:"container mt-4",children:Object(o.jsxs)("div",{className:"row",children:[Object(o.jsxs)("div",{className:"col-md-9 order-md-0 order-1",children:[Object(o.jsxs)("div",{class:"post-form border-radius box-shadow mt-md-0 mt-3",children:[Object(o.jsx)("h5",{class:"color-black",children:"Tweet something"}),Object(o.jsx)("hr",{}),Object(o.jsxs)("div",{class:"post-comment-box d-flex flex-wrap",children:[Object(o.jsx)("div",{class:"user-img",children:Object(o.jsx)("img",{class:"border-radius",src:"images/user.jpg",alt:"Image of User"})}),Object(o.jsx)("div",{class:"form-group flex-fill w-50 border-radius overflow-hidden",children:Object(o.jsx)("div",{class:"input-group",children:Object(o.jsx)("textarea",{class:"form-control shadow-none py-3",cols:"30",rows:"3",placeholder:"What's something?"})})})]}),Object(o.jsxs)("div",{class:"post-form-control d-flex flex-wrap mt-3",children:[Object(o.jsxs)("div",{class:"post-form-control-select d-flex flex-wrap",children:[Object(o.jsx)("label",{for:"inputFile",children:Object(o.jsx)("i",{class:"bx bxs-image-alt"})}),Object(o.jsx)("input",{id:"inputFile",type:"file",multiple:!0,class:"form-control d-none"}),Object(o.jsxs)("div",{class:"post-form-control-comunity mx-3",children:[Object(o.jsxs)("span",{class:"border-radius",children:[Object(o.jsx)("i",{class:"bx bx-globe"})," Everyone can reply"]}),Object(o.jsxs)("div",{class:"user-panel post-form-panel box-shadow border-radius active",children:[Object(o.jsx)("h5",{class:"color-black",children:"Who can reply?"}),Object(o.jsx)("h6",{children:"Choose who can reply to this Tweet?"}),Object(o.jsxs)("ul",{children:[Object(o.jsx)("li",{children:Object(o.jsxs)("a",{href:"",children:[Object(o.jsx)("i",{class:"bx bx-globe"})," Everyone"]})}),Object(o.jsx)("li",{children:Object(o.jsxs)("a",{href:"",children:[Object(o.jsx)("i",{class:"bx bxs-group"})," People you follow"]})})]})]})]})]}),Object(o.jsx)("div",{class:"post-form-control-btn flex-fill w- text-end",children:Object(o.jsx)("button",{class:"btn btn-post-form btn-border-radius",children:"Tweet"})})]})]}),Object(o.jsx)(O,{})]}),Object(o.jsx)("div",{className:"col-md-3 order-md-1 order-0",children:Object(o.jsxs)("div",{className:"vertical-trending border-radius box-shadow mt-3 mt-md-0",children:[Object(o.jsx)("h5",{className:"color-black",children:"Trends for you"}),Object(o.jsx)("hr",{}),Object(o.jsxs)("ul",{children:[Object(o.jsxs)("li",{children:[Object(o.jsx)("a",{href:"",children:"#programming"}),Object(o.jsx)("h5",{children:"213k Tweets"})]}),Object(o.jsxs)("li",{children:[Object(o.jsx)("a",{href:"",children:"#devchallenges"}),Object(o.jsx)("h5",{children:"213k Tweets"})]}),Object(o.jsxs)("li",{children:[Object(o.jsx)("a",{href:"",children:"#frontend"}),Object(o.jsx)("h5",{children:"213k Tweets"})]}),Object(o.jsxs)("li",{children:[Object(o.jsx)("a",{href:"",children:"#helsinki"}),Object(o.jsx)("h5",{children:"213k Tweets"})]})]})]})}),Object(o.jsx)(d,{})]})})}),Object(o.jsx)(j,{})]})},g=function(){return Object(t.useEffect)((function(){document.title="Bookmark"}),[]),Object(o.jsxs)("div",{children:[Object(o.jsx)("div",{className:"main",children:Object(o.jsx)("div",{className:"container mt-4",children:Object(o.jsxs)("div",{className:"row",children:[Object(o.jsx)("div",{className:"col-md-3",children:Object(o.jsx)(p,{})}),Object(o.jsxs)("div",{className:"col-md-9",children:[Object(o.jsxs)("div",{className:"post-comment-form post-search-form box-shadow border-radius overflow-hidden d-flex flex-wrap mt-md-0 mt-4 align-items-center",children:[Object(o.jsx)("label",{className:"input-group-text",for:"inputGroupFile01",children:Object(o.jsx)("i",{class:"bx bx-search"})}),Object(o.jsx)("input",{type:"text",className:"form-control shadow-none py-3 w-50 flex-fill",placeholder:"Search"}),Object(o.jsx)("input",{type:"file",className:"form-control d-none",id:"inputGroupFile01"}),Object(o.jsx)("div",{className:"post-search-btn-contain",children:Object(o.jsx)("button",{className:"btn btn-border-radius btn-post-form btn-post-search",children:"Search"})})]}),Object(o.jsx)(O,{})]}),Object(o.jsx)(d,{})]})})}),Object(o.jsx)(j,{})]})};var v=function(e){return Object(o.jsx)("div",{className:"col-md-3 col-3",children:Object(o.jsx)("a",{href:"",className:"logo",children:"Tweeter"})})},w=function(){var e=null;Object(t.useEffect)((function(){e=document.querySelector("html")}),[]);var s=function(){e&&(e.scrollTop=0)};return Object(o.jsx)("div",{className:"col-md-6 d-none d-md-block",children:Object(o.jsxs)("ul",{className:"menu",children:[Object(o.jsx)("li",{children:Object(o.jsx)(r.b,{onClick:function(){return s()},to:"/home",activeClassName:"active",children:"Home"})}),Object(o.jsx)("li",{children:Object(o.jsx)(r.b,{onClick:function(){return s()},to:"/explore",activeClassName:"active",children:"Explore"})}),Object(o.jsx)("li",{children:Object(o.jsx)(r.b,{onClick:function(){return s()},to:"/bookmark",activeClassName:"active",children:"Bookmark"})})]})})},k=function(){var e=Object(t.useState)(!1),s=Object(b.a)(e,2),c=s[0],l=s[1];return Object(o.jsx)("div",{className:"col-md-3 col-9 d-flex justify-content-end",children:Object(o.jsxs)("div",{className:"user user-info",onClick:function(){l(!c)},children:[Object(o.jsx)("div",{className:"user-img",children:Object(o.jsx)("img",{className:"border-radius",src:"/images/user.jpg",alt:"Image of User"})}),Object(o.jsx)("span",{className:"user-name d-none d-md-block color-black",children:"Xanhthe Neal"}),Object(o.jsx)("span",{className:"user-control d-none d-md-block",children:Object(o.jsx)("i",{className:"bx bxs-down-arrow"})}),Object(o.jsx)("div",{className:c?"user-panel box-shadow border-radius active":"user-panel box-shadow border-radius",children:Object(o.jsxs)("ul",{children:[Object(o.jsx)("li",{children:Object(o.jsxs)("a",{href:"",children:[Object(o.jsx)("i",{className:"bx bx-user-circle"})," My Profile"]})}),Object(o.jsx)("li",{children:Object(o.jsxs)("a",{href:"",children:[Object(o.jsx)("i",{className:"bx bx-group"})," Group Chat"]})}),Object(o.jsx)("li",{children:Object(o.jsxs)("a",{href:"",children:[Object(o.jsx)("i",{className:"bx bx-cog"})," Settings"]})}),Object(o.jsx)("hr",{}),Object(o.jsx)("li",{children:Object(o.jsxs)("a",{href:"",children:[Object(o.jsx)("i",{className:"bx bx-exit"})," Log out"]})})]})})]})})};var y=function(e){return Object(o.jsx)("nav",{children:Object(o.jsx)("div",{className:"container",children:Object(o.jsxs)("div",{className:"row navigation p-md-0 pt-3 pb-3",children:[Object(o.jsx)(v,{}),Object(o.jsx)(w,{}),Object(o.jsx)(k,{})]})})})};var I=function(){return Object(o.jsx)("div",{className:"App",children:Object(o.jsxs)(r.a,{children:[Object(o.jsx)(y,{}),Object(o.jsxs)(n.c,{children:[Object(o.jsx)(n.a,{path:"/",component:f,exact:!0}),Object(o.jsx)(n.a,{path:"/home",component:f,exact:!0}),Object(o.jsx)(n.a,{path:"/explore",component:N,exact:!0}),Object(o.jsx)(n.a,{path:"/bookmark",component:g,exact:!0})]})]})})},C=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,34)).then((function(s){var c=s.getCLS,t=s.getFID,l=s.getFCP,a=s.getLCP,i=s.getTTFB;c(e),t(e),l(e),a(e),i(e)}))};i.a.render(Object(o.jsx)(l.a.StrictMode,{children:Object(o.jsx)(I,{})}),document.getElementById("root")),C()}},[[33,1,2]]]);
//# sourceMappingURL=main.49d16f25.chunk.js.map