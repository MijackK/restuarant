(()=>{"use strict";var n={461:(n,e,r)=>{r.d(e,{Z:()=>s});var t=r(81),i=r.n(t),o=r(645),a=r.n(o)()(i());a.push([n.id,".location-map{\r\n    width:50vw;\r\n    height:70vh;\r\n    border-style: solid var(--border-color);\r\n    background-image: url('https://i.imgur.com/7reJCXf.jpeg');\r\n    background-repeat: no-repeat;\r\n    cursor:grab;\r\n    background-position: -3000px -2000px;\r\n}\r\n.p-about{\r\n    color:var(--about-text);\r\n    width:100%;\r\n    font-family: 'rubik', helvetica, arial, sans-serif,'Open Sans';\r\n    font-size: 1.2rem;\r\n    line-height: 1.6;\r\n    font-style: italic;\r\n}\r\n.about-wrapper{\r\n    display: flex;\r\n    justify-content: center;\r\n    margin-top:50px;\r\n    \r\n}\r\n.about{\r\n \r\n    width:30%;\r\n    padding:10px;\r\n    margin-right:30px;\r\n}\r\n.about-title{\r\n    display: inline-block;\r\n    width:100%;\r\n    font-family: var(--secondary-font);\r\n    font-size: 4rem;\r\n    text-align: center;\r\n}\r\n.about-container{\r\n    min-height: calc(100vh - 50px);\r\n}\r\n@media only screen and (max-width: 810px){\r\n    .about-wrapper{\r\n        flex-direction: column;\r\n        margin-top:5px;\r\n    }\r\n    .location-map{\r\n        width: 97%;\r\n        margin-left:auto;\r\n        margin-right: auto;\r\n    }\r\n    .about{\r\n        width: 100%;\r\n        text-align: center;\r\n    }\r\n    .p-about{\r\n        width:85%;\r\n        margin-left:auto;\r\n        margin-right: auto;\r\n    }\r\n}\r\n@media only screen and (max-width: 600px){\r\n\r\n    .location-map{\r\n        background-position: -3300px -2000px;\r\n        width:90%;\r\n       \r\n    }\r\n}",""]);const s=a},491:(n,e,r)=>{r.d(e,{Z:()=>s});var t=r(81),i=r.n(t),o=r(645),a=r.n(o)()(i());a.push([n.id,".first-section{\r\n    display: flex;\r\n    font-family: var(--secondary-font);\r\n}\r\n.first-text{\r\n    width:40%;\r\n   display: flex;\r\n   flex-direction: column;\r\n   align-items: center;\r\n   margin-top: 150px;\r\n}\r\n.first-text >span{\r\n    font-size: 2.9rem;\r\n    font-weight:100;\r\n}\r\n.first-text span:nth-child(2){\r\n    font-size: 1.1rem;\r\n    color:var(--other-color);\r\n  \r\n}\r\n.moving-text{\r\n    display: flex;\r\n    flex-direction: column;\r\n    margin-top: 200px;\r\n    font-size: 3.5rem;\r\n}\r\n.moving-text > div{\r\n    display: flex;\r\n    justify-content: center;\r\n}\r\n.first-word >div{\r\n    position: relative;\r\n    transition:all 1.3s linear;\r\n}\r\n\r\n.second-word >div{\r\n    position: relative;\r\n    transition:all 1.3s linear;\r\n}\r\n.title {\r\n    text-align: center;\r\n\r\n}\r\n.galdin-video{\r\n    width:60%;\r\n    height: auto;\r\n    margin-left:auto;\r\n    border-style: none;\r\n    filter: contrast(120%);\r\n}\r\n.second-section{\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    margin-top:50px;\r\n}\r\n.logo2{\r\n    width:min(450px,100%);\r\n    height: auto;\r\n}\r\n.second-section> span:nth-child(2){\r\n    font-size: 7rem;\r\n    font-weight: 400;\r\n    letter-spacing: .20em;\r\n    text-align: center;\r\n    \r\n}\r\n.second-section >span:nth-child(3){\r\n    width:450px;\r\n    text-align: center;\r\n    font-size:1rem;\r\n    color:var(--other-color);\r\n  \r\n}\r\n.third-section{\r\n    display: flex;\r\n    flex-direction: column;\r\n   align-items: center;\r\n   padding-top:70px;\r\n   border-style: solid;\r\n   border-color: var(--border-color);\r\n   margin-top:100px;\r\n   width:50vw;\r\n   margin-left:auto;\r\n   margin-right:auto;\r\n   margin-bottom:20px\r\n}\r\n.third-section >p{\r\n    width:400px;\r\n    text-align: center;\r\n    font-size: 1rem;\r\n    color: var(--other-color);\r\n}\r\n.third-section >span{\r\n    font-size:3rem; \r\n}\r\n.wrapper1{\r\n    width: 100%;\r\n    padding-top:20px;\r\n  \r\n\r\n}\r\n\r\n.img-visible{\r\n    width:100%;\r\n    height:576px;\r\n    background-size: 50vw 576px;\r\n    cursor: none;\r\n    background-repeat: no-repeat;\r\n\r\n}\r\n\r\n.img-invisible{\r\n    opacity:0;\r\n    position: absolute;\r\n    width:250px;\r\n    height:250px;\r\n    border-style: solid;\r\n    border-color: var(--secondary-background);\r\n    border-radius: 50%;\r\n    border-width:8px;\r\n    background-position: 0px 0px;\r\n    background-repeat: no-repeat;\r\n    background-size: 52vw 623px;\r\n}\r\n\r\n@media only screen and (max-width: 810px) {\r\n    .first-section{\r\n        flex-direction: column;\r\n    }\r\n    .first-text{\r\n        width:100%;\r\n        margin-top:50px;\r\n    }\r\n    .moving-text{\r\n        margin-top: 50px;\r\n    }\r\n    .galdin-video{\r\n        width:100%;\r\n        margin-top:30px;\r\n    }\r\n    .third-section{\r\n        width: 100vw;\r\n        border-style: none;\r\n      \r\n    }\r\n    .wrapper1{\r\n        width:100%;\r\n    }\r\n    .img-visible{\r\n        background-size: 100vw 576px;\r\n      \r\n    }\r\n    .img-invisible{\r\n        background-size: 103vw 623px;\r\n    }\r\n}\r\n\r\n@media only screen and (max-width: 600px) {\r\n    .first-section{\r\n        flex-direction: column;\r\n    }\r\n    .first-text{\r\n        width:100%;\r\n        margin-top:50px;\r\n    }\r\n    .first-text >span:nth-child(1){\r\n        font-size:2rem;\r\n    }\r\n    .moving-text{\r\n        margin-top: 50px;\r\n        font-size: 2.4rem;\r\n    }\r\n    .galdin-video{\r\n        width:100%;\r\n        margin-top:30px;\r\n    }\r\n    .second-section >span:nth-child(2){\r\n        font-size:4rem;\r\n    }\r\n    .second-section >span:nth-child(3){\r\n       width: 90vw;\r\n       \r\n    }\r\n    .third-section{\r\n        width: 100vw;\r\n        margin-top: 10px;\r\n    }\r\n    .third-section >p{\r\n        width: 90vw;\r\n        \r\n    }\r\n    .third-section >span{ \r\n        font-size: 2.3rem;\r\n        text-align: center;\r\n    }\r\n    .img-visible{\r\n        background-size: 96vw 376px;\r\n        margin-left:5px;\r\n        height: 376px;\r\n    }\r\n    .img-invisible{\r\n        background-size: 100vw 423px;\r\n        width:100px;\r\n        height:100px;\r\n     \r\n    }\r\n}",""]);const s=a},63:(n,e,r)=>{r.d(e,{Z:()=>g});var t=r(81),i=r.n(t),o=r(645),a=r.n(o),s=r(667),l=r.n(s),c=new URL(r(408),r.b),d=a()(i()),p=l()(c);d.push([n.id,".menu-wrapper{\r\n    background:url('https://i.imgur.com/IV9InPH.png');\r\n    height: 81vh;\r\n    padding-top:100px;\r\n    background-size: cover;\r\n    color:var(--secondary-color);\r\n    height: calc(100vh - 150px);\r\n}\r\n\r\n.menu{\r\n   \r\n    display:grid;\r\n    width:89vw;\r\n    height:75vh;\r\n    margin:auto;\r\n    grid-template-columns: 1.3fr 2fr;\r\n    gap:10px;\r\n}\r\n.selection{\r\n    display:grid;\r\n    grid-template: 20px 1fr / 1fr;\r\n    background-color: rgba(23, 34, 63,0.5);\r\n \r\n}\r\n\r\n\r\n.menu-items{\r\n    display: grid;\r\n    max-height: 66vh;\r\n    grid-template: 150px/ repeat(auto-fit,minmax(200px,1fr));\r\n    grid-auto-rows: 150px;\r\n    gap:5px;\r\n    overflow-y: scroll;\r\n    scrollbar-width: thin;\r\n    scrollbar-color: var(--secondary-background) transparent;\r\n    padding:5px;\r\n}\r\n\r\n.item>img{\r\n    width:100%;\r\n    height:100%;\r\n\r\n}\r\n.item{\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n    background-color:var(--secondary-background);\r\n    cursor: pointer;\r\n    transition: transform 0.2s linear;\r\n    background-size: 100% 100%;\r\n    background-repeat: no-repeat;\r\n}\r\n.item:hover{\r\n    animation: blinking 1s  infinite;\r\n  \r\n  \r\n}\r\n.border{\r\n  display: none;\r\n  width:80%;\r\n  height:85%;\r\n  opacity:0.5;\r\n  background-image: url("+p+");\r\n  background-size: contain;\r\n  background-position: center;\r\n  background-repeat: no-repeat;\r\n  margin:auto;\r\n\r\n}\r\n .item:hover >.border{\r\n    display: block;\r\n    animation: pulse 1s  infinite;\r\n}\r\n.menu-title{\r\n    grid-area: 1/1/2/4;\r\n    text-align: center;\r\n    font-size:1.2rem;\r\n}\r\n.information{\r\n    display: grid;\r\n    grid-template: 1fr 0.4fr 1fr/1fr 1.5fr;\r\n   \r\n}\r\n.rating{\r\n    grid-area: 1/2/2/3;\r\n    width:200px;\r\n    height:200px;\r\n    display: flex;\r\n    align-items: center;\r\n    flex-direction: column;\r\n    border-right: solid aquamarine;\r\n    border-bottom: solid aquamarine;\r\n    border-left: solid var(--secondary-background);\r\n    border-top: solid aquamarine;\r\n    border-radius:50%;\r\n    margin-left:auto;\r\n    border-width: 5px;\r\n    background-color: rgba(23, 34, 63,0.5);\r\n}\r\n.rating >i{\r\n    font-size:3.4rem;\r\n    font-weight: 0;\r\n    margin-top:20px;\r\n    margin-bottom:15px;\r\n\r\n}\r\n.rating >span{\r\n    text-align: center;\r\n    font-size: 1.3rem;\r\n    width:60%;\r\n}\r\n.rating >span:nth-child(2){\r\n    border-bottom: solid;\r\n    padding-bottom:10px;\r\n}\r\n.ingredients{\r\n    grid-area: 2/2/3/3;\r\n  \r\n}\r\n.food-display{\r\n    grid-area:3/1/4/3;\r\n    display:grid;\r\n    background-color: rgba(0, 0, 0, 0.7);\r\n    grid-template:  35px 1fr /1fr 2fr;\r\n    gap:5px;\r\n    padding:8px;\r\n   \r\n}\r\n.food-name{\r\n    grid-area: 1/1/2/3;\r\n    text-align: center;\r\n    background-color: rgba(129, 119, 101,0.2);\r\n    border-top: #817765 double;\r\n    border-bottom: #817765 double;\r\n    font-size:1.2rem;\r\n}\r\n.food-image{\r\n    grid-area: 2/1/3/2;\r\n    background-color:rgba(23, 34, 63,0.5);\r\n    background-size: 100% 100%;\r\n}\r\n.food-stats{\r\n    grid-area: 2/2/3/3;\r\n    background-color:rgba(23, 34, 63,0.5);\r\n    padding:5px;\r\n    overflow-y: scroll;\r\n    height: 223px;\r\n    scrollbar-width: thin;\r\n}\r\n.food-stats::-webkit-scrollbar-thumb {\r\n    width: 12px;\r\n    border-radius: 20px;\r\n    border: 3px solid rgba(129, 119, 101,0.6);\r\n}\r\n.effect{\r\n    display: flex;\r\n    flex-direction: column;\r\n    background-color: rgba(68, 81, 115, 0.55);\r\n    margin-bottom: 7px;\r\n}\r\n  \r\n.effect-title{\r\n    display: flex;\r\n    align-items: center;\r\n    color:aquamarine;\r\n    font-size:1.2rem;\r\n    border-bottom: white solid;\r\n    width:97%;\r\n    border-width: thin;\r\n    margin-left:auto;\r\n    margin-right:auto;\r\n    padding:4px;\r\n}\r\n.effect-title >img{\r\n    width:20px;\r\n    height:20px;\r\n    margin-right:5px;\r\n    \r\n}\r\n.effect-description{\r\n    width:97%;\r\n    margin-left:auto;\r\n    margin-right: auto;\r\n\r\n}\r\n@keyframes blinking {\r\n    0%{filter: brightness(1);}\r\n    25%{filter: brightness(1.1);}\r\n    50%{filter: brightness(1.2);}\r\n    75%{filter: brightness(1.1);}\r\n    100%{filter: brightness(1);}\r\n}\r\n@keyframes pulse{\r\n    0%{transform: scale(1);}\r\n    25%{transform: scale(1.1);}\r\n    50%{transform: scale(1);}\r\n    75%{transform: scale(1.1);}\r\n    100%{transform: scale(1);}\r\n \r\n}\r\n@media only screen and (max-width: 810px){\r\n    .menu-wrapper{\r\n        height:100vh;\r\n    }\r\n\r\n    .rating{\r\n        display: none;\r\n    }\r\n    .food-display{\r\n        grid-area: 1/1/4/3;\r\n        grid-template: 35px 1fr 1fr /1fr 2fr;\r\n    }\r\n    .food-image{\r\n        grid-area: 2/1/3/3;\r\n    }\r\n    .food-stats{\r\n        grid-area: 3/1/4/3;\r\n        height: 100%;\r\n    }\r\n \r\n}\r\n@media only screen and (max-width: 600px){\r\n  \r\n    .menu{\r\n        grid-template: 300px 1fr/ 1fr;\r\n        width:98vw;\r\n\r\n    }\r\n    .selection{\r\n        grid-area: 1/1/2/2;\r\n        display: flex;\r\n        flex-direction: column;\r\n        overflow-x: scroll;\r\n        width: 100%;\r\n       \r\n    }\r\n    .menu-items{\r\n        display: flex;\r\n        height: 100%;\r\n   \r\n    }\r\n    .item{\r\n        flex: 0 0 auto;\r\n        width: 330px;\r\n    }\r\n    .information{\r\n        grid-area: 2/1/3/2;\r\n        grid-template: 35px 1fr/1fr;\r\n        height:100%;\r\n    }\r\n    .food-image{\r\n        display: none;\r\n    }\r\n    .food-display{\r\n      grid-area:1/1/3/2;\r\n      grid-template: 35px 1fr /1fr 2fr;\r\n   \r\n    }\r\n    .food-stats{\r\n        grid-area: 2/1/3/3;\r\n        height:100%;\r\n     \r\n       \r\n    }\r\n\r\n}",""]);const g=d},426:(n,e,r)=>{r.d(e,{Z:()=>s});var t=r(81),i=r.n(t),o=r(645),a=r.n(o)()(i());a.push([n.id,"\r\n*::-webkit-scrollbar {\r\n    width: 5px;\r\n  }\r\n\r\n*::-webkit-scrollbar-track {\r\n    background: rgba(4, 12, 34, 0.4);\r\n  }\r\n\r\n*::-webkit-scrollbar-thumb {\r\n  border-radius: 20px;\r\n  border: 3px solid rgba(4, 12, 34, 0.75);\r\n}\r\n\r\nbody{\r\n    margin:0px;\r\n    --secondary-color:white;\r\n    --secondary-background:rgb(23, 34, 63,0.75);\r\n    --primary-font:'Galliard', serif, monospace;\r\n    --secondary-font: 'Monaco',monospace;\r\n    overflow-x:hidden ;\r\n    \r\n}\r\n.github{\r\n    color: var(--secondary-color);\r\n    text-align: center;\r\n    font-size: 0.9rem;\r\n}\r\n.github a{\r\n    text-decoration: none;\r\n    color: whitesmoke;\r\n    \r\n}\r\n.content{\r\n    color:var(--primary-color);\r\n    font-family: var(--primary-font);\r\n    background-color: var(--primary-background);\r\n}\r\nheader{\r\n    position: sticky;\r\n    top:0px;\r\n    width:100%;\r\n    height:30px;\r\n    z-index:1;\r\n    background-color: var(--header-background);\r\n    color: var(--secondary-color);\r\n    display: flex;\r\n    padding-top:10px;\r\n    padding-bottom:10px;\r\n    box-shadow: 0px 5px 5px var(--shadow-color);\r\n    font-family: var(--secondary-font);\r\n}\r\nheader >span:last-child{\r\n  font-size: 1.5rem;\r\n  align-self: center;\r\n  margin-left: auto;\r\n  margin-right:30px;\r\n  cursor: pointer;\r\n}\r\n.logo-text{\r\n   \r\n    font-size:1.6rem;\r\n    margin-left:30px;\r\n    align-self: flex-start;\r\n    \r\n}\r\n.theme{\r\n    margin-bottom:10px;\r\n    cursor: pointer;\r\n    display: flex;\r\n    width:50px;\r\n    height:25px;\r\n    border-radius: 5px;\r\n   align-self: center;\r\n \r\n \r\n}\r\n.theme-circle{\r\n    width:20px;\r\n    height:20px;\r\n    border-radius: 50%;\r\n    background-color:white;\r\n    align-self: center;\r\n}\r\n.nav{\r\n    display:none;\r\n    width:250px;\r\n    height:200px;\r\n    flex-direction:column;\r\n    justify-content: center;\r\n    position:fixed;\r\n    right:0;\r\n    top:50px;\r\n    background-color:var(--secondary-background);\r\n    z-index: 2;\r\n    overflow: hidden;\r\n    font-family: var(--secondary-font);\r\n}\r\n.nav-list{\r\n    list-style-type: none;\r\n    padding:10px;\r\n    cursor: pointer;\r\n    font-size: 1.1rem;\r\n}\r\n.nav-list > img{\r\n    display: none;\r\n    width:250px;\r\n    height:20px;\r\n    position:absolute;\r\n    left:-50px;\r\n}\r\n\r\n.nav-list >a{\r\n    color: var(--secondary-color);\r\n    text-decoration: none;\r\n    margin-left:20px;\r\n  \r\n}\r\n.nav-list:hover::before{\r\n    content: '☞';\r\n    font-size: 1.5rem;\r\n    color: var(--secondary-color);\r\n    position: absolute;\r\n    left:2px;\r\n    transform: translateY(-6.5px);\r\n;\r\n}\r\n.nav-list:hover >img{\r\n    display: block;\r\n   \r\n}\r\nfooter{\r\n    width:100%;\r\n    text-align: center;\r\n    font-size:1.3rem;\r\n    padding-top:8px;\r\n    font-style: italic;\r\n    color: var(--primary-color);\r\n}\r\n\r\nfooter  a{\r\n    text-decoration: none;\r\n    color: #787878;\r\n}\r\n\r\n.light{\r\n    --primary-color:black;\r\n    --primary-background:white;\r\n    --about-text:rgb(23, 34, 63,0.75);\r\n    --other-color:rgb(61, 60, 60);\r\n    --border-color:rgb(61, 60, 60);\r\n    --header-background: rgb(23, 34, 63);\r\n    --shadow-color:grey;\r\n}\r\n\r\n.dark{\r\n    --primary-color:rgb(255,255,255,0.85);\r\n    --primary-background:#00000c;\r\n    --about-text:rgb(255,255,255,0.75);\r\n    --other-color:rgb(255,255,255,0.75);\r\n    --border-color:rgba(255, 255, 255, 0.26);\r\n    --header-background:rgb(9, 17, 38);\r\n    \r\n}",""]);const s=a},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var r="",t=void 0!==e[5];return e[4]&&(r+="@supports (".concat(e[4],") {")),e[2]&&(r+="@media ".concat(e[2]," {")),t&&(r+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),r+=n(e),t&&(r+="}"),e[2]&&(r+="}"),e[4]&&(r+="}"),r})).join("")},e.i=function(n,r,t,i,o){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(t)for(var s=0;s<this.length;s++){var l=this[s][0];null!=l&&(a[l]=!0)}for(var c=0;c<n.length;c++){var d=[].concat(n[c]);t&&a[d[0]]||(void 0!==o&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=o),r&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=r):d[2]=r),i&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=i):d[4]="".concat(i)),e.push(d))}},e}},667:n=>{n.exports=function(n,e){return e||(e={}),n?(n=String(n.__esModule?n.default:n),/^['"].*['"]$/.test(n)&&(n=n.slice(1,-1)),e.hash&&(n+=e.hash),/["'() \t\n]|(%20)/.test(n)||e.needQuotes?'"'.concat(n.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):n):n}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function r(n){for(var r=-1,t=0;t<e.length;t++)if(e[t].identifier===n){r=t;break}return r}function t(n,t){for(var o={},a=[],s=0;s<n.length;s++){var l=n[s],c=t.base?l[0]+t.base:l[0],d=o[c]||0,p="".concat(c," ").concat(d);o[c]=d+1;var g=r(p),m={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==g)e[g].references++,e[g].updater(m);else{var u=i(m,t);t.byIndex=s,e.splice(s,0,{identifier:p,updater:u,references:1})}a.push(p)}return a}function i(n,e){var r=e.domAPI(e);return r.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;r.update(n=e)}else r.remove()}}n.exports=function(n,i){var o=t(n=n||[],i=i||{});return function(n){n=n||[];for(var a=0;a<o.length;a++){var s=r(o[a]);e[s].references--}for(var l=t(n,i),c=0;c<o.length;c++){var d=r(o[c]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}o=l}}},569:n=>{var e={};n.exports=function(n,r){var t=function(n){if(void 0===e[n]){var r=document.querySelector(n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(n){r=null}e[n]=r}return e[n]}(n);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(r)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,r)=>{n.exports=function(n){var e=r.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(r){!function(n,e,r){var t="";r.supports&&(t+="@supports (".concat(r.supports,") {")),r.media&&(t+="@media ".concat(r.media," {"));var i=void 0!==r.layer;i&&(t+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),t+=r.css,i&&(t+="}"),r.media&&(t+="}"),r.supports&&(t+="}");var o=r.sourceMap;o&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleTagTransform(t,n,e.options)}(e,n,r)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},616:(n,e,r)=>{n.exports=r.p+"546b4a23a2644f28591b.png"},496:(n,e,r)=>{n.exports=r.p+"2cfc3c5ee052ca5f2284.png"},739:(n,e,r)=>{n.exports=r.p+"bba70340f5f269b4fce6.PNG"},408:(n,e,r)=>{n.exports=r.p+"9609b1d2ce34885f9d2f.png"},815:(n,e,r)=>{n.exports=r.p+"835d8ccc27bda4e9d846.PNG"},125:(n,e,r)=>{n.exports=r.p+"67863f616e62085db5df.PNG"},483:(n,e,r)=>{n.exports=r.p+"60fe9f4430ff3256ba80.PNG"},158:(n,e,r)=>{n.exports=r.p+"d3427d7ad8c8f97400b2.PNG"},560:(n,e,r)=>{n.exports=r.p+"5b29398e7aeee28729fa.PNG"}},e={};function r(t){var i=e[t];if(void 0!==i)return i.exports;var o=e[t]={id:t,exports:{}};return n[t](o,o.exports,r),o.exports}r.m=n,r.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return r.d(e,{a:e}),e},r.d=(n,e)=>{for(var t in e)r.o(e,t)&&!r.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),r.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;r.g.importScripts&&(n=r.g.location+"");var e=r.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var t=e.getElementsByTagName("script");t.length&&(n=t[t.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=n})(),r.b=document.baseURI||self.location.href,(()=>{var n=r(379),e=r.n(n),t=r(795),i=r.n(t),o=r(569),a=r.n(o),s=r(565),l=r.n(s),c=r(216),d=r.n(c),p=r(589),g=r.n(p),m=r(426),u={};u.styleTagTransform=g(),u.setAttributes=l(),u.insert=a().bind(null,"head"),u.domAPI=i(),u.insertStyleElement=d(),e()(m.Z,u),m.Z&&m.Z.locals&&m.Z.locals;var h=r(491),f={};f.styleTagTransform=g(),f.setAttributes=l(),f.insert=a().bind(null,"head"),f.domAPI=i(),f.insertStyleElement=d(),e()(h.Z,f),h.Z&&h.Z.locals&&h.Z.locals;var x=r(616);const b=document.createElement("div"),y=(()=>{const n=document.createElement("section"),e=document.createElement("section"),r=document.createElement("section"),t=document.createElement("img"),i=document.createElement("div"),o=document.createElement("div"),a=document.createElement("span"),s=document.createElement("span"),l=document.createElement("span"),c=document.createElement("span"),d=document.createElement("span"),p=document.createElement("div"),g=document.createElement("div"),m=document.createElement("div"),u=document.createElement("img"),h=document.createElement("p"),f=document.createElement("p"),y=document.createElement("div"),v=document.createElement("div"),w=document.createElement("div"),k=document.createElement("footer");b.classList.toggle("Home"),n.classList.toggle("first-section"),e.classList.toggle("second-section"),r.classList.toggle("third-section"),t.classList.toggle("galdin-video"),i.classList.toggle("first-text"),o.classList.toggle("moving-text"),g.classList.toggle("first-word"),m.classList.toggle("second-word"),u.classList.toggle("logo2"),d.classList.toggle("title3"),y.classList.toggle("wrapper1"),v.classList.toggle("img-visible"),w.classList.toggle("img-invisible"),b.appendChild(n),n.appendChild(i),n.appendChild(t),i.appendChild(a),i.appendChild(s),i.appendChild(o),o.appendChild(g),o.appendChild(m),a.textContent="The Galdin Quay",s.textContent="Ignis Scientia",b.appendChild(e),e.appendChild(u),e.appendChild(l),e.appendChild(c),l.textContent="16 YEARS",b.appendChild(r),r.appendChild(d),r.appendChild(h),r.appendChild(f),r.appendChild(y),y.appendChild(v),v.appendChild(w),c.textContent="Final Fantasy XV is an action role-playing game developed and published by Square Enix. The fifteenth main installment of the Final Fantasy series",d.textContent=" A First-Class Experience",h.textContent="A Stunning seaside getaway along the Vannath Coast in southern Leide. Known not only for its world-class spa, but also for the exquisite seafood dishes crafted by Mother of Pearl's chef de cuisine, Coctura Arlund.",f.textContent=" With the sea right at our door we offer only the freshest sea food and if your feeling up to it, we'll let you catch you're own fish doubling the experience",b.appendChild(k),k.innerHTML='<span> Created by  <a href="https://github.com/MijackK/restuarant/tree/main/src"><i class="fab fa-github"></i></a></span>',u.src=x;const C=()=>{let n=g.childNodes,e=m.childNodes;n.forEach((n=>{n.style.transform="translate(0) scale(1)",n.style.opacity=1})),e.forEach((n=>{n.style.transform="translate(0) scale(1)",n.style.opacity=1}))};return(()=>{let n="WelcomeAdventurer",e=[{x:133,y:518},{x:327,y:219},{x:465,y:559},{x:473,y:322},{x:317,y:560},{x:512,y:287},{x:675,y:526},{x:41,y:493},{x:209,y:571},{x:331,y:586},{x:363,y:265},{x:540,y:301},{x:462,y:581},{x:633,y:304},{x:522,y:573},{x:675,y:402},{x:663,y:591},{x:716,y:465}];n=n.split("");for(let r=0;r<n.length;r++)p.style.transform=`translate(${e[r].x}px,${e[r].x}px) scale(0.1)`,p.style.opacity=0,r<7?(p.textContent=n[r],g.appendChild(p.cloneNode(!0))):(p.textContent=n[r],m.appendChild(p.cloneNode(!0)));setTimeout(C,300)})(),(()=>{const n=v,e=w,r=r=>{let t=n.getBoundingClientRect(),i=e.getBoundingClientRect(),o=t.left+t.width,a=n.offsetTop,s=n.offsetTop+t.height,l=i.width/2;e.style.opacity=1,t.left>r.pageX||r.pageX>o||r.pageY<a||r.pageY>s?e.style.opacity=0:(e.style.left=r.pageX-l+"px",e.style.top=r.pageY-l+"px",e.style.backgroundPosition=`${-1*(r.pageX-t.x)+l-25}px ${-1*(r.pageY-n.offsetTop)+l-25}px`)};n.addEventListener("mousemove",(n=>r(n))),n.addEventListener("touchmove",(n=>{n.preventDefault(),r(n.changedTouches[0])}))})(),{galdinVideo:t,imageInvisible:w,imageVisible:v}})(),v=()=>(y.galdinVideo.src="dark"==localStorage.theme?"https://i.ytimg.com/vi/FQcPlk5APAs/maxresdefault.jpg":"https://gta5mod.net/wp-content/uploads/2020/06/Final-Fantasy-XV-Galdin-Quay.jpg",y.imageInvisible.style.backgroundImage="dark"==localStorage.theme?"url('https://i.imgur.com/gkeuUxp.jpg')":"url('https://i.imgur.com/z3PX2uk.png')",y.imageVisible.style.backgroundImage="dark"==localStorage.theme?"url('https://i.imgur.com/bnLWCgA.jpg')":"url('https://i.imgur.com/enudYqV.jpg')",b);var w=r(63),k={};k.styleTagTransform=g(),k.setAttributes=l(),k.insert=a().bind(null,"head"),k.domAPI=i(),k.insertStyleElement=d(),e()(w.Z,k),w.Z&&w.Z.locals&&w.Z.locals;var C=r(739),E=r(125),L=r(158),S=r(560),z=r(815),A=r(483);let P;(()=>{const n=document.createElement("div"),e=document.createElement("div"),r=document.createElement("div"),t=document.createElement("span"),i=document.createElement("div"),o=document.createElement("div"),a=document.createElement("div"),s=document.createElement("div"),l=document.createElement("div"),c=document.createElement("i"),d=document.createElement("div"),p=document.createElement("div"),g=document.createElement("div"),m=document.createElement("div"),u=document.createElement("div"),h=document.createElement("div"),f=document.createElement("span"),x=document.createElement("img"),b=document.createElement("p");n.classList.toggle("menu-wrapper"),e.classList.toggle("menu"),r.classList.toggle("selection"),t.classList.toggle("menu-title"),i.classList.toggle("menu-items"),o.classList.toggle("item"),a.classList.toggle("border"),s.classList.toggle("information"),l.classList.toggle("rating"),d.classList.toggle("food-display"),p.classList.toggle("food-name"),g.classList.toggle("food-image"),m.classList.toggle("food-stats"),u.classList.toggle("effect"),h.classList.toggle("effect-title"),b.classList.toggle("effect-description"),r.appendChild(t),t.textContent="Recepies",n.appendChild(e),e.appendChild(r),r.appendChild(t),r.appendChild(i),e.appendChild(s),s.appendChild(l),c.innerHTML='<i class="fas fa-utensils"></i>',l.innerHTML="  <span>Ignis</span>\n    <span>Restaurant</span>\n    <span>Level <sup>9</sup></span>",l.prepend(c),s.appendChild(d),d.appendChild(p),d.appendChild(g),d.appendChild(m),h.appendChild(x),h.appendChild(f),u.appendChild(h),u.appendChild(b);let y={attack:C,fresh:z,health:E,magic:A,poison:L,resist:S},v=[{name:"Galdin Gratin",image:"https://i.imgur.com/7OGxOpV.png",stats:[{effect:"Fresh",icon:y.fresh,text:"Boost all stats and increases EXP earned by 10%"},{effect:"HP Boost (Level 10)",icon:y.health,text:"Increases maximum HP by 500"}]},{name:"White Fish in Tomato Sauce",image:"https://i.imgur.com/2YoRtOV.png",stats:[{effect:"Attack Boost (level 16)",icon:y.attack,text:"Increases attack  by 160"},{effect:"HP Boost (Level 18)",icon:y.health,text:"Increases maximum HP by 900"},{effect:"PoisonProof",icon:y.poison,text:"Prevents poison"}]},{name:"Sea's Bounty Risotto",image:"https://i.imgur.com/o5lt5Am.png",stats:[{effect:"Attack Boost (level 12)",icon:y.attack,text:"Increases attack  by 120"},{effect:"HP Boost (Level 12)",icon:y.health,text:"Increases maximum HP by 600"},{effect:"Regen Boost (Level 1)",icon:y.health,text:"Accelarates HP recovery by 25%"}]},{name:"Steamed Crab with Rock Salt",image:"https://i.imgur.com/yXOHtCD.png",stats:[{effect:"Resistant",icon:y.resist,text:"Nulifies fire, ice, and lightning attacks"}]},{name:"Tenebraen Berry Opera",image:"https://i.imgur.com/jiFHrLV.png",stats:[{effect:"Magemaster",icon:y.magic,text:"Magic +500, Strength becomes 0"}]}];const w=function(){m.textContent="";let n=this.id,e=v[n].stats.length;p.textContent=`${v[n].name}`,g.style.backgroundImage=`url('${v[n].image}')`;for(let r=0;r<e;r++)x.src=`${v[n].stats[r].icon}`,f.textContent=`${v[n].stats[r].effect}`,b.textContent=`${v[n].stats[r].text}`,m.appendChild(u.cloneNode(!0))};(()=>{for(let n=0;n<13;n++)o.textContent="",o.style.backgroundImage="",o.id="",n<v.length?(o.appendChild(a),o.style.backgroundImage=`url('${v[n].image}'`,o.setAttribute("id",`${n}`),i.appendChild(o.cloneNode(!0)),i.childNodes[n].addEventListener("mouseover",w)):i.appendChild(o.cloneNode(!0))})(),P=n})();var T=r(461),I={};I.styleTagTransform=g(),I.setAttributes=l(),I.insert=a().bind(null,"head"),I.domAPI=i(),I.insertStyleElement=d(),e()(T.Z,I),T.Z&&T.Z.locals&&T.Z.locals;const j=document.createElement("div"),M=document.createElement("span"),q=document.createElement("div"),N=document.createElement("div"),H=document.createElement("div"),Z=document.createElement("p"),F=document.createElement("footer");M.classList.toggle("about-title"),q.classList.toggle("about-wrapper"),N.classList.toggle("about"),H.classList.toggle("location-map"),Z.classList.toggle("p-about"),j.classList.toggle("about-container"),M.textContent="Map of Lucis",F.innerHTML='<span> Created by  <a href="https://github.com/MijackK/restuarant/tree/main/src"><i class="fab fa-github"></i></a></span>',(()=>{let n=["Stunning seaside getaway along the Vannath Coast in southern Leide. Known not only for its world-class spa, but also for the exquisite seafood dishes crafted by Mother of Pearl's chef de cuisine, Coctura Arlund.","While the quay currently enjoys its reputation as the kingdom's premier resort, Galdin itself was once a quiet fishing town. That all changed when Niflheim made inroads into Lucian territory some 150 years ago and effectively put all lands outside the Crown City under imperial control. From that time onward, the former fishing village turned into a trading post connecting the Lucian continent with the imperial province of Accordo.","In time, the empire shifted their shipping operations from the sea to the skies, and Galdin's importance as an imperial outpost diminished. What the town lost in strategic value, however, it gained in culture, gleaning heavily from Altissian immigrants drawn to Lucian shores. In that sense, one could say the quay owes its current success to the empire's intervention."];for(let e=0;e<n.length;e++)Z.textContent=n[e],N.appendChild(Z.cloneNode(!0));q.appendChild(N),q.appendChild(H),j.appendChild(M),j.appendChild(q),j.appendChild(F)})(),(()=>{const n=H;let e,r,t=!1,i={x:0,y:0},o={x:-3e3,y:-2e3},a={x:0,y:0};n.addEventListener("mousedown",(n=>{t=!0,n.target.style.cursor="grabbing",i.x=n.clientX,i.y=n.clientY})),n.addEventListener("mouseup",(n=>{t=!1,n.target.style.cursor="grab"})),n.addEventListener("mousemove",(s=>{(s=>{t&&(e=[0,1,2,3,-1,-2,-3].map((n=>n+i.x)),r=[0,1,2,3,-1,-2,-3].map((n=>n+i.y)),a.x=e.includes(s.clientX)?0:s.clientX>i.x?16:-16,a.y=r.includes(s.clientY)?0:s.clientY>i.y?16:-16,o.x=o.x+a.x,o.y=o.y+a.y,n.style.backgroundPosition=`${o.x}px ${o.y}px`,i.x=s.clientX,i.y=s.clientY)})(s)}))})();var $=r(496);(()=>{const n=document.querySelector("body"),e=document.querySelector(".content"),r=document.createElement("main"),t=document.createElement("header"),i=document.createElement("div"),o=document.createElement("a"),a=document.createElement("li"),s=document.createElement("span"),l=document.createElement("span"),c=document.createElement("img"),d=document.createElement("div"),p=document.createElement("div");let g;r.appendChild(v()),s.textContent="The Galdin Quay",t.appendChild(s),l.innerHTML='<i class="fas fa-bars"></i>',t.appendChild(l),d.innerHTML='<div class="theme-circle"></div>',p.innerHTML='<span> Created by  <a href="https://github.com/MijackK/restuarant/tree/main/src"><i class="fab fa-github"></i></a></span>',i.classList.toggle("nav"),a.classList.toggle("nav-list"),s.classList.toggle("logo-text"),d.classList.toggle("theme"),p.classList.toggle("github"),"dark"==localStorage.theme?n.setAttribute("class","dark"):n.setAttribute("class","light"),d.style.flexDirection="dark"==localStorage.theme?"row-reverse":"row",d.style.backgroundColor="dark"==localStorage.theme?"#0997a3":"rgb(168, 168, 127)";let m=!0;localStorage.theme||localStorage.setItem("theme","light");const u=function(n){if(n.id!=g)switch(r.textContent="",g=n.id,n.id){case"0":r.appendChild(v());break;case"1":r.appendChild(P);break;case"2":r.appendChild(j)}};(()=>{let n=["Home","Menu","About"];for(let e=0;e<n.length;e++)a.setAttribute("id",e),o.textContent=n[e],c.src=$,a.appendChild(c),a.appendChild(o),i.appendChild(a.cloneNode(!0)),i.children[e].addEventListener("click",(function(n){n.preventDefault(),u(this)}));i.appendChild(d),i.appendChild(p),e.appendChild(i),e.appendChild(t),e.appendChild(r)})(),l.addEventListener("click",(()=>{i.style.display=1==m?"flex":"none",m=!m})),d.addEventListener("click",(n=>{"light"==localStorage.theme?localStorage.setItem("theme","dark"):localStorage.setItem("theme","light"),(()=>{if(localStorage.theme){if("light"==localStorage.theme)return d.style.flexDirection="row",d.style.backgroundColor="rgb(168, 168, 127)",document.querySelector("body").setAttribute("class","light"),document.querySelector(".galdin-video").src="https://gta5mod.net/wp-content/uploads/2020/06/Final-Fantasy-XV-Galdin-Quay.jpg",document.querySelector(".img-invisible").style.backgroundImage="url('https://i.imgur.com/z3PX2uk.png')",void(document.querySelector(".img-visible").style.backgroundImage="url('https://i.imgur.com/enudYqV.jpg')");d.style.flexDirection="row-reverse",d.style.backgroundColor="#0997a3",document.querySelector("body").setAttribute("class","dark"),document.querySelector(".galdin-video").src="https://i.ytimg.com/vi/FQcPlk5APAs/maxresdefault.jpg",document.querySelector(".img-invisible").style.backgroundImage="url('https://i.imgur.com/gkeuUxp.jpg')",document.querySelector(".img-visible").style.backgroundImage="url('https://i.imgur.com/bnLWCgA.jpg')"}})()}))})()})()})();