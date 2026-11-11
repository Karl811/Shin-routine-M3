/* Approved typography only. Original content, spacing and app state are untouched.
   Applies the same semantic/fallback grouping and responsive px deltas as the review.
   No line-height, dimensions, spacing, font family, weight or color overrides. */
(function(){
 'use strict';
 var groups=[
 {id:'page',label:'Tiêu đề trang',base:32,selector:'#pageTitle35'},
 {id:'habit',label:'Tên thẻ lớn',base:32,selector:'.m3-card-title h2,.f2-detail-paper>h2'},
 {id:'action',label:'Hành động “Mình sẽ”',base:23,selector:'.m3-action-text,.f2-formula-action'},
 {id:'trigger',label:'Nội dung “Khi”',base:18,selector:'.m3-practice>p:not(.m3-action-text),.f2-formula>p:not(.f2-formula-action)'},
 {id:'dialog',label:'Tiêu đề hộp thoại',base:22,selector:'.f2-head b,.sh__h>b'},
 {id:'lesson',label:'Nội dung bài học & Senpai',base:16,selector:'.f3-lesson-content p,.f3-lesson-content li,.f3-lesson-content .say__b,.f3-lesson-content .hw__k,.f2-how p,.f2-how li,.f2-senpai p'},
 {id:'japanese',label:'Tiếng Nhật',base:26,selector:'[lang=ja],.jp'},
 {id:'notes',label:'Ghi chú & nội dung thư',base:16,selector:'.m3-journal-note,.f3-letter-body,.letter-body37,.f3-memo>p'},
 {id:'input',label:'Ô nhập liệu',base:16,selector:'input:not([type=checkbox]):not([type=range]),textarea,select'},
 {id:'navigation',label:'Thanh điều hướng',base:12,selector:'.m3-navigation>button>span:not(.m3-nav-indicator),.m3-navigation>button'},
 {id:'tabs',label:'Tab & bộ lọc',base:14,selector:'.f3-tabs button,.f3-tabs button>span,.m3-tabs button,.f3-filters button'},
 {id:'button',label:'Nút hành động',base:15,selector:'.m3-button,.btn,.f2-text-button,.chp'},
 {id:'section',label:'Tiêu đề mục',base:20,selector:'h2:not(#pageTitle35),h3'},
 {id:'row',label:'Tên thẻ / bài trong danh sách',base:16,selector:'.m3-select-habit b,.f3-library-row-title b,.f3-lesson-row b,.m3-week-row b,.m3-journal-meta>b,.f3-setting-label>b'},
 {id:'eyebrow',label:'Nhãn nhỏ · KHI / CẤP',base:11,selector:'.m3-kicker,.m3-eyebrow,.m3-practice>span,.f2-formula>small,.hw__k'},
 {id:'meta',label:'Chú thích & trạng thái',base:12,selector:'small,time,.m3-status,.f3-status,#hdate'},
 {id:'body',label:'Đoạn văn & hướng dẫn',base:16,selector:'p,blockquote,label,.lbl'}
], values={"page": 30, "size11": 15, "section": 24, "eyebrow": 15, "habit": 28, "trigger": 21, "action": 22, "size14": 18, "button": 19, "size18": 20, "meta": 16, "size15": 17, "row": 22, "tabs": 18, "notes": 20, "navigation": 13, "input": 20, "dialog": 26, "lesson": 20, "size13": 17, "body": 20, "size16": 20, "size12": 16, "size10": 13, "size31": 35, "size30": 34};
 for(var n=8;n<=48;n++)groups.push({id:'size'+n,base:n,selector:''});
 var byId={};groups.forEach(function(g){byId[g.id]=g;});
 var sheet=document.createElement('style');sheet.id='shin-approved-font-sizes';document.head.appendChild(sheet);
 var pending=false,observer=new MutationObserver(queue);
 function classify(el,size){
  for(var i=0;i<groups.length;i++)if(groups[i].selector&&el.matches(groups[i].selector))return groups[i].id;
  var parent=el.parentElement;
  if(parent&&parent.dataset.shinFontGroup&&!parent.matches('body,#app,#pv'))return parent.dataset.shinFontGroup;
  return 'size'+Math.max(8,Math.min(48,Math.round(size)));
 }
 function apply(){
  observer.disconnect();sheet.textContent='';
  var all=Array.from(document.body.querySelectorAll('*')).filter(function(el){return !el.closest('svg,script,style,noscript')&&!el.classList.contains('material-symbols-rounded');});
  all.forEach(function(el){el.removeAttribute('data-shin-font-group');el.removeAttribute('data-shin-font-id');});
  // Measure all original sizes before applying any overrides, including inherited text.
  var measured=all.filter(function(el){return ['INPUT','TEXTAREA','SELECT'].includes(el.tagName)||Array.from(el.childNodes).some(function(c){return c.nodeType===3&&c.textContent.trim();});}).map(function(el){return {el:el,size:parseFloat(getComputedStyle(el).fontSize)};});
  var css=[];
  measured.forEach(function(m,i){
   var id=classify(m.el,m.size),g=byId[id];m.el.dataset.shinFontGroup=id;
   if(values[id]===undefined)return;
   m.el.dataset.shinFontId=i;
   css.push('[data-shin-font-id="'+i+'"]{font-size:'+Math.max(8,m.size+values[id]-g.base)+'px!important;}');
  });
  sheet.textContent=css.join('\n');observer.observe(document.body,{subtree:true,childList:true});
 }
 function queue(){if(pending)return;pending=true;requestAnimationFrame(function(){pending=false;apply();});}
 window.addEventListener('resize',queue);
 if(document.fonts)document.fonts.ready.then(queue);
 apply();
})();
