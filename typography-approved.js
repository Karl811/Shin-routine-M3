/* M3.1.4: based directly on M3.1.2; balanced reading hierarchy and larger inputs. */
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

 // M3.1.5: reviewed mobile deltas relative to the approved M3.1.4 sizes.
 // One delta per text element; descendants never accumulate parent deltas.
 function mobileDelta(el){
  if(window.innerWidth>=768)return 0;
  if(el.matches('input:not([type=checkbox]):not([type=radio]):not([type=range]),textarea,select'))return -2;
  if(el.matches('#pageTitle35,.m3-card-title h2,.f2-detail-paper>h2,.m3-routine-list>[data-act=pick]'))return 2;
  if(el.matches('.m3-page-intro>div>p:not(.m3-kicker),.m3-practice>span,.m3-practice>p,.f2-formula>small,.f2-formula>p,.m3-card-back blockquote p,.m3-card-back>p,.f2-japanese>div>p:not([lang=ja]),.f2-meaning-benefit,.f2-how-link b,.m3-tree-heading .m3-kicker,.m3-tree-panel>p,.m3-week-secondary,.m3-heading>span,#hdate'))return -2;
  if(el.closest('.f3-setting-label')&&el.tagName==='B'&&['Âm thanh','Thêm vào màn hình chính','Hướng dẫn lần đầu'].includes(el.textContent.trim()))return -2;
  if(el.matches('[data-notebook-tab=rep] .card>p,[data-notebook-tab=rep] .steps>li>b'))return -2;
  if(el.matches('.chp,.tok,.opt>span')||el.closest('.chp,.tok'))return 2;
  if(el.closest('.f2-how-content')&&!el.closest('button,input,textarea,select,.hw__k,[lang=ja],.jp')&&el.matches('.say__b,.say__b b,.hw__why,.hw__why small,.quote,.quote small,.hws b,.hws span,figcaption,.pr__q,.dd p,.jpbox small,.jpbox .vi,.oops summary,.oops li,.safe,.safe small,.out,.out b'))return -2;
  if(el.matches('.habit-week33>summary>span,.habit-week33>summary>small,.habit-day-head33 time,.habit-day-head33 b'))return 2;
  if(el.matches('[data-act=journeyTab31],.m3-week-row>button>span>b,.m3-week-row>button>span>small,.m3-week-surface>[data-act=week],.m3-week-legend>summary,.m3-journal-placeholder,.m3-journal-entries>[data-act=ci],.ci29-mood-options button>span,.f2-ci-memo>summary>span,.f2-ci-memo>summary>span>small,.f2-ci-mood .f2-section-heading>p,.f2-notebook .f3-tabs button>span'))return 2;
  if(el.closest('.m3-milestones,.journey-past33'))return 2;
  if(el.matches('.f2-checkin .record-option>span'))return 2;
  return 0;
 }
 function apply(){
  observer.disconnect();sheet.textContent='';
  var all=Array.from(document.body.querySelectorAll('*')).filter(function(el){return !el.closest('svg,script,style,noscript')&&!el.classList.contains('material-symbols-rounded');});
  all.forEach(function(el){el.removeAttribute('data-shin-font-group');el.removeAttribute('data-shin-font-id');});
  // Measure all original sizes before applying any overrides, including inherited text.
  var measured=all.filter(function(el){return ['INPUT','TEXTAREA','SELECT'].includes(el.tagName)||Array.from(el.childNodes).some(function(c){return c.nodeType===3&&c.textContent.trim();});}).map(function(el){var cs=getComputedStyle(el);return {el:el,size:parseFloat(cs.fontSize),line:parseFloat(cs.lineHeight)};});
  var css=[];
  measured.forEach(function(m,i){
   var id=classify(m.el,m.size),g=byId[id];m.el.dataset.shinFontGroup=id;
   var previous=Math.max(8,m.size+(values[id]===undefined?0:values[id]-g.base));
   var mobile=window.innerWidth<768;
   var heading=['page','habit','dialog','section'].indexOf(id)>=0;
   var field=m.el.matches('input:not([type=checkbox]):not([type=radio]):not([type=range]),textarea,select');
   var interactive=!!m.el.closest('button,a,[role=button],[role=tab],summary,.m3-navigation');
   var postage=!!m.el.closest('.postage37');
   var size=previous, line='';
   if(heading)size=previous+2;
   else if(field)size=Math.max(mobile?24:22,previous+4);
   else if(!interactive&&!postage){
    if(['eyebrow','meta'].indexOf(id)>=0||m.size<=12)size=Math.max(18,previous+(mobile?3:2));
    else size=Math.max(mobile?22:21,previous+(mobile?3:2));
   }
   // Refine M3.1.2 by content role. Preserve approved controls and compact chrome.
   var sectionLabel=!!m.el.closest('.hw__k,.m3-kicker');
   var chrome=!!m.el.closest('.m3-top-actions,.m3-heading>span,.m3-count,.m3-progress,.m3-week-dots,.m3-journal-days,.f2-day,.f3-stats,.m3-card-pagination');
   if(heading)size+=1;
   else if(field)size=Math.max(mobile?27:25,size+3);
   else if(!interactive&&!postage&&!sectionLabel&&!chrome){
    var prose=['body','lesson','notes','trigger','action','japanese'].indexOf(id)>=0;
    var small=['meta','eyebrow'].indexOf(id)>=0||m.size<=12;
    if(small)size=Math.max(size,Math.min(21,size+2));
    else if(prose)size+=2;
    else if(size<=24)size=Math.min(25,size+2);
   }
   size+=mobileDelta(m.el);
   if(size!==previous){
    var ratio=heading?1.3:Math.max(1.5,Number.isFinite(m.line)?m.line/m.size:1.5);
    line='line-height:'+Number((size*ratio).toFixed(2))+'px!important;';
   }
   m.el.dataset.shinFontId=i;
   css.push('[data-shin-font-id="'+i+'"]{font-size:'+size+'px!important;'+line+'}');
  });
  if(window.innerWidth<768)Array.from(document.querySelectorAll('.f2-checkin .record-option>.material-symbols-rounded')).forEach(function(el,i){
   el.dataset.shinFontIcon=i;
   css.push('[data-shin-font-icon="'+i+'"]{font-size:'+(parseFloat(getComputedStyle(el).fontSize)+2)+'px!important;}');
  });
  sheet.textContent=css.join('\n');observer.observe(document.body,{subtree:true,childList:true});
 }
 function queue(){if(pending)return;pending=true;requestAnimationFrame(function(){pending=false;apply();});}
 window.addEventListener('resize',queue);
 if(document.fonts)document.fonts.ready.then(queue);
 apply();
})();
