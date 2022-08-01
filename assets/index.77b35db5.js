import{U as B,s as c,h as T,R as z,f as x,j as l,r as e,e as g,B as R,q as k,P as n}from"./index.5ff47b1b.js";const Y=B`
    0%, 40%, 100%{
      transform: scaleY(0.4);
      transform-origin: center 100%;
    }
    20%{
      transform: scaleY(1);
    }
`,j=c.div`
    position:absolute;
    top:50%;
    height: 10px;
    width: 100%;
    /* margin: auto; */
    text-align: center;
    font-size: 10px;
    >div{
      display: inline-block;
      background-color: ${T["theme-color"]};
      height: 100%;
      width: 1px;
      margin-right:2px;
      animation: ${Y} 1s infinite;
    }
    >div:nth-child(2) {
      animation-delay: -0.4s;
    }
    >div:nth-child(3) {
      animation-delay: -0.6s;
    }
    >div:nth-child(4) {
      animation-delay: -0.5s;
    }
    >div:nth-child(5) {
      animation-delay: -0.2s;
    } 

`;function C(){return x(j,{children:[l("div",{}),l("div",{}),l("div",{}),l("div",{}),l("div",{}),l("span",{children:"\u62FC\u547D\u52A0\u8F7D\u4E2D..."})]})}var $=z.memo(C);const F=c.div`
 width: 100%;
 height: 100%;
 overflow: hidden;
`,M=c.div`
 position: absolute;
 left:0; right:0;
 bottom: 5px;
 width: 60px;
 height: 60px;
 margin: auto;
 z-index: 100;
`,q=c.div`
 position: absolute;
 left:0; right:0;
 top: 0px;
 height: 30px;
 margin: auto;
 z-index: 100;
`,m=e.exports.forwardRef((a,b)=>{const[o,u]=e.exports.useState(),d=e.exports.useRef(),{direction:p,click:y,refresh:v,pullUpLoading:w,pullDownLoading:D,bounceTop:S,bounceBottom:L}=a,{pullUp:r,pullDown:i,onScroll:s}=a;let f=e.exports.useMemo(()=>g(r,500),[r]),h=e.exports.useMemo(()=>g(i,500),[i]);e.exports.useEffect(()=>{const t=new R(d.current,{scrollX:p==="horizental",scrollY:p==="vertical",probeType:3,click:y,bounce:{top:S,bottom:L}});return u(t),()=>{u(null)}},[]),e.exports.useEffect(()=>{if(!(!o||!s))return o.on("scroll",s),()=>{o.off("scroll",s)}},[s,o]),e.exports.useEffect(()=>{if(!o||!r)return;const t=()=>{o.y<=o.maxScrollY+100&&f()};return o.on("scrollEnd",t),()=>{o.off("scrollEnd",t)}},[r,f,o]),e.exports.useEffect(()=>{if(!o||!i)return;const t=P=>{P.y>50&&h()};return o.on("touchEnd",t),()=>{o.off("touchEnd",t)}},[i,h,o]),e.exports.useEffect(()=>{v&&o&&o.refresh()}),e.exports.useImperativeHandle(b,()=>({refresh(){o&&(o.refresh(),o.scrollTo(0,0))},getBScroll(){if(o)return o}}));const U=w?{display:""}:{display:"none"},E=D?{display:""}:{display:"none"};return x(F,{ref:d,children:[a.children,l(M,{style:U,children:l(k,{})}),l(q,{style:E,children:l($,{})})]})});m.defaultProps={direction:"vertical",click:!0,refresh:!0,onScroll:null,pullUpLoading:!1,pullDownLoading:!1,pullUp:null,pullDown:null,bounceTop:!0,bounceBottom:!0};m.propTypes={direction:n.oneOf(["vertical","horizental"]),refresh:n.bool,onScroll:n.func,pullUp:n.func,pullDown:n.func,pullUpLoading:n.bool,pullDownLoading:n.bool,bounceTop:n.bool,bounceBottom:n.bool};export{m as S};
