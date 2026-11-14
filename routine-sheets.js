/* M3.3.14: same-document navigation stores view state only, never a copy of learner data. */
(function(){
'use strict';
var token='shin14-'+Date.now(),frames=[],index=0,busy=false,pending=0,drag=null;
var transient=['ST','CI','CARD','HW','LS','NT','PR','PICK','NBOPEN','NBTAB','SETOPEN','LETTER_FLOW37','TREE_DETAIL30','HABIT_RETURN33','FLOW_NOTE_RETURN','FLOW_HOW_RETURN','EVENING_LIBRARY_ORIGIN','GAME14_RETURN','VDAY','SBACK','SLOT','RETCI','FLOW_DAY','FLOW_HABIT','DW','JOURNAL_MODE31','JOURNAL_HABIT31','JOURNEY_TAB31','EVENING_REVIEW_OPEN'];
function copy(v){if(v===undefined)return null;try{return JSON.parse(JSON.stringify(v));}catch(e){return null;}}
function kindOf(s){if(!s)return '';if(s.querySelector('#habitGame14'))return 'game14';if(s.querySelector('.lc')&&ST)return 'start';var kind=Array.from(s.classList).find(function(c){return /^f2-/.test(c)&&c!=='f2-sheet';});return kind?kind.slice(3):s.classList.contains('notebook34')?'notebook':'other';}
function stateOf(){var s=OV&&$('.sheet',OV),kind=kindOf(s),detail='';
 if(kind==='detail'&&CARD)detail=CARD.id+'|'+CARD.tab;
 else if(kind==='how'&&HW)detail=HW.id+'|'+HW.i;
 else if(kind==='start'&&ST)detail=(ST.id||'custom')+'|'+ST.i+'|'+!!ST.edit;
 else if(kind==='lesson'&&LS)detail=LS.id+'|'+LS.i;
 else if(kind==='record'&&NT)detail=NT.id+'|'+NT.day;
 else if(kind==='checkin'&&CI)detail=CI.date+'|'+(CI.done?'done':CI.wizard?CI.wizard.index:'');
 else if(kind==='notebook')detail=NBTAB;
 else if(kind==='letter'&&LETTER_FLOW37)detail=LETTER_FLOW37.milestone+'|'+LETTER_FLOW37.mode;
 else if(kind==='other'&&s){var title=s.querySelector('h2,.sh__h>b');detail=title?title.textContent.trim():'';}
 var state={page:PG,view:S.storeView,mode:JOURNAL_MODE31,key:PG+'|'+(PG===3?S.storeView:PG===1?JOURNAL_MODE31:'')+'|'+kind+'|'+detail,kind:kind,values:{},scroll:window.scrollY,sheetTop:s?s.scrollTop:0,innerTop:s&&$('.ci40-scroll',s)?$('.ci40-scroll',s).scrollTop:0,html:s?s.innerHTML:'',className:s?s.className:'',overlayClass:OV?OV.className:''};
 transient.forEach(function(n){state.values[n]=copy(window[n]);});return state;
}
function stash(){if(NT)flowStashNote();if(CI&&!CI.done)stashCI29();if(LETTER_FLOW37)stashLetterDraft37(true);}
function handle(s){if(!s||s.querySelector(':scope > .sheet14-grip'))return;var b=document.createElement('button');b.type='button';b.className='sheet14-grip';b.setAttribute('aria-label','Kéo xuống để đóng');b.setAttribute('data-flow-type','');b.innerHTML='<span aria-hidden="true"></span>';b.title='Kéo xuống để đóng';s.prepend(b);s.classList.add('sheet14-ready');}
function restore(f){document.documentElement.classList.add('back16');busy=true;stash();closeOv(true);PG=f.page;S.storeView=f.view;JOURNAL_MODE31=f.mode;render();
 if(f.kind){openOv('');Object.keys(f.values).forEach(function(n){window[n]=copy(f.values[n]);});var s=$('.sheet',OV);s.className=f.className;OV.className=f.overlayClass;
  if(f.kind==='game14')shinGameOpen14();
  else if(f.kind==='detail'&&CARD)drawCard();
  else if(f.kind==='how'&&HW)drawHow();
  else if(f.kind==='start'&&ST)drawStart();
  else if(f.kind==='record'&&NT&&H(NT.id))drawNote29();
  else if(f.kind==='checkin'&&CI)drawCI();
  else if(f.kind==='lesson'&&LS)drawLesson();
  else if(f.kind==='notebook'){NBOPEN=true;sheetSet(nbSheet());}
  else if(f.kind==='library')drawStore();
  else if(f.kind==='letter'&&LETTER_FLOW37)drawLetter37();
  else sheetSet(f.html);
  s=OV&&$('.sheet',OV);handle(s);if(s){s.scrollTop=f.sheetTop;var inner=$('.ci40-scroll',s);if(inner)inner.scrollTop=f.innerTop;var title=$('.sh__h button,.ci40-bar button',s);if(title)title.focus({preventScroll:true});}
 }else{Object.keys(f.values).forEach(function(n){window[n]=copy(f.values[n]);});ST=null;CI=null;NT=null;CARD=null;HW=null;GAME14_RETURN=false;render();}
 window.scrollTo(0,f.scroll);document.querySelectorAll('#pv,.ov,.sheet,.m3-page').forEach(function(el){el.getAnimations().forEach(function(a){a.cancel();});});requestAnimationFrame(function(){requestAnimationFrame(function(){document.documentElement.classList.remove('back16');});});setTimeout(function(){busy=false;frames[index]=stateOf();},0);
}
function sync(){pending=0;var s=OV&&$('.sheet',OV);handle(s);if(busy||!S.name)return;var f=stateOf();if(!frames.length){
 var old=history.state;frames=[f];index=0;
 /* Reload starts at Today; collapse internal entries from the prior document. */
 if(old&&old.shinNav14&&Number.isInteger(old.step)&&old.step>0){busy=true;history.go(-old.step);return;}
 if(f.kind){var root=copy(f);root.kind='';root.html='';root.key=PG+'|'+(PG===3?S.storeView:PG===1?JOURNAL_MODE31:'')+'||';frames=[root,f];history.replaceState({shinNav14:token,step:0},'');index=1;history.pushState({shinNav14:token,step:1},'');}
 else history.replaceState({shinNav14:token,step:0},'');
 return;
 }
 if(frames[index].key===f.key){frames[index]=f;return;}
 var found=-1;for(var i=index-1;i>=0;i--)if(frames[i].key===f.key){found=i;break;}
 if(found>=0){frames=frames.slice(0,found+1);frames[found]=f;busy=true;history.go(found-index);return;}
 frames=frames.slice(0,index+1);index++;frames.push(f);history.pushState({shinNav14:token,step:index},'');
}
function queue(){if(!pending)pending=setTimeout(sync,0);}
window.addEventListener('popstate',function(e){var h=e.state;if(h&&h.shinNav14===token&&frames[h.step]){index=h.step;restore(frames[index]);}else{busy=true;stash();closeOv();PG=0;GAME14_RETURN=false;render();setTimeout(function(){busy=false;frames=[stateOf()];index=0;history.replaceState({shinNav14:token,step:0},'');},0);}});
function dismiss(){if(!OV)return;stash();var close=$('.sh__h [data-act=close],.ci40-bar [data-act=close]',OV);if(close){close.click();return;}if(LETTER_FLOW37){letterBack37();return;}closeOv();render();}
/* A downward pull dismisses; upward motion or a short pull returns to place. */
document.addEventListener('pointerdown',function(e){var s=e.target.closest('.sheet');if(!s||e.button!==0||e.isPrimary===false)return;var grip=e.target.closest('.sheet14-grip'),head=e.target.closest('.sh__h,.ci40-bar');if(!grip&&(!head||e.target.closest('button,a,input,textarea,select')))return;drag={sheet:s,owner:grip||head,id:e.pointerId,x:e.clientX,y:e.clientY,start:performance.now(),dy:0,active:false};try{drag.owner.setPointerCapture(e.pointerId);}catch(ignore){}},true);
document.addEventListener('pointermove',function(e){var g=drag;if(!g||g.id!==e.pointerId)return;var dx=e.clientX-g.x,dy=e.clientY-g.y;if(!g.active){if(Math.abs(dx)>14&&Math.abs(dx)>Math.abs(dy)){drag=null;return;}if(dy<0){drag=null;return;}if(dy<8)return;g.active=true;g.sheet.classList.add('sheet14-dragging');}e.preventDefault();g.dy=Math.max(0,dy);g.sheet.style.transform='translate3d(0,'+g.dy+'px,0)';}, {capture:true,passive:false});
function resetDrag(cancel){var g=drag;if(!g)return;drag=null;g.sheet.classList.remove('sheet14-dragging');var elapsed=performance.now()-g.start,close=!cancel&&g.active&&(g.dy>84||g.dy>32&&g.dy/elapsed>.55);if(close){var end=function(){g.sheet.style.transform='';dismiss();};if(reduceMotion())end();else g.sheet.animate([{transform:g.sheet.style.transform,opacity:1},{transform:'translateY(100dvh)',opacity:.2}],{duration:200,easing:'cubic-bezier(.4,0,1,1)'}).finished.then(end,end);}else{if(g.active&&!reduceMotion())g.sheet.animate([{transform:g.sheet.style.transform},{transform:'translateY(0)'}],{duration:220,easing:'cubic-bezier(.2,.8,.2,1)'});g.sheet.style.transform='';}}
document.addEventListener('pointerup',function(e){if(drag&&drag.id===e.pointerId)resetDrag(false);},true);
document.addEventListener('pointercancel',function(){resetDrag(true);},true);
document.addEventListener('lostpointercapture',function(e){if(drag&&drag.id===e.pointerId&&e.target===drag.owner)resetDrag(true);},true);
window.addEventListener('blur',function(){resetDrag(true);});
/* Escape follows the same view history as device Back. The close button still dismisses. */
window.addEventListener('keydown',function(e){if((e.key==='Enter'||e.key===' ')&&e.target.matches('.sheet14-grip')){e.preventDefault();dismiss();return;}if(e.key!=='Escape'||!OV)return;e.preventDefault();e.stopImmediatePropagation();if(index>0)history.back();else dismiss();},true);
document.addEventListener('input',queue,true);document.addEventListener('change',queue,true);
document.addEventListener('click',function(){if(frames[index])frames[index].scroll=window.scrollY;queue();},true);
document.addEventListener('DOMContentLoaded',function(){new MutationObserver(queue).observe(document.body,{subtree:true,childList:true});queue();});
/* Keep the current position without writing browser history during scrolling. */
window.addEventListener('scroll',function(){if(!busy&&frames[index])frames[index].scroll=window.scrollY;},{passive:true});
document.addEventListener('scroll',function(e){if(busy||!frames[index]||!e.target.matches)return;if(e.target.matches('.sheet'))frames[index].sheetTop=e.target.scrollTop;if(e.target.matches('.ci40-scroll'))frames[index].innerTop=e.target.scrollTop;},{capture:true,passive:true});
})();

