/* M3.3.14: the game proposes existing cards. Only the existing setup flow enrolls a habit. */
var GAME14_IDS=[],GAME14_RETURN=false,GAME14_DEMO=null;
function shinGameResetScope14(){if(GAME14_DEMO!==DEMO){GAME14_IDS=[];GAME14_RETURN=false;GAME14_DEMO=DEMO;}}
function shinGameCatalog14(){return HABITS.filter(function(x){return !x.custom;}).map(function(x){return {id:x.id,title:x.t,shortTitle:x.s,description:x.act};});}
function shinGameSaved14(){shinGameResetScope14();return GAME14_IDS.slice();}
function shinGameResults14(ids){shinGameResetScope14();GAME14_IDS=Array.from(new Set(ids)).filter(function(id){return HMAP[id]&&!HMAP[id].custom;}).slice(0,HABITS.length);}
function shinGameSound14(){return !!S.sound;}
function shinGameHabitState14(id){var u=H(id);return {onHand:S.slots.includes(id),exists:!!u,label:libStatus(id)[0]};}
function shinGameIcon14(){return '<svg viewBox="0 0 64 64" fill="none" aria-hidden="true"><rect x="12" y="5" width="40" height="28" rx="8" fill="#E4ECFA"/><rect x="24" y="15" width="16" height="12" rx="2" stroke="#E88640" stroke-width="3"/><path d="M13 31h38M18 32l5 19h18l5-19M22 41h20M27 32l2 19m8-19-2 19" stroke="#B56F45" stroke-width="2.5" stroke-linecap="round"/><rect x="2" y="45" width="14" height="14" rx="4" fill="#97B6E8" transform="rotate(-12 2 45)"/><circle cx="52" cy="51" r="9" fill="#EEC66E"/></svg>';}
var play14Library=eveningLibrary;
eveningLibrary=function(pick){var h=play14Library(pick);if(S.storeView!=='tools')return h;return h.replace('</div></section>','<button class="evening-tool play14-tool" data-act="gameOpen14"><span class="play14-tool-art">'+shinGameIcon14()+'</span><span><b>Tung thói quen</b><small>Chưa biết rèn gì? Tung thử để tìm một gợi ý.</small></span>'+mi('arrow_forward')+'</button></div></section>');};
function shinGameOpen14(){shinGameResetScope14();GAME14_RETURN=false;EVENING_LIBRARY_ORIGIN=null;FLOW_HOW_RETURN=null;FLOW_NOTE_RETURN=null;HABIT_RETURN33=null;NT=null;HW=null;CARD=null;openOv('');f2Mount('game14',f2Head('Tung thói quen','')+'<p class="play14-intro" data-flow-type>Tung thử cho vui nhé! Thói quen nào vào rổ, bạn xem rồi chọn điều phù hợp với mình.</p><iframe id="habitGame14" class="play14-frame" src="habit-game.html" title="Game tung thói quen vào rổ"></iframe>');}
function shinDispatch14(action,id){var b=document.createElement('button');b.hidden=true;b.dataset.act=action;if(id)b.dataset.v=id;(OV||document.body).appendChild(b);b.click();b.remove();}
function shinGameAction14(action,id){if(!OV||!$('#habitGame14',OV)||!GAME14_IDS.includes(id)||!HMAP[id])return;GAME14_RETURN=true;EVENING_LIBRARY_ORIGIN=null;PICK=null;FLOW_NOTE_RETURN=null;FLOW_HOW_RETURN=null;HABIT_RETURN33=null;NT=null;HW=null;
 if(action==='view'||S.slots.includes(id)){openCard(id,false);return;}
 if(action!=='choose')return;
 if(H(id)){shinDispatch14('slotit',id);return;}
 if(!S.slots.includes(null)){chooseSwap(id,'start');return;}
 openStart(id,false);
}
/* An explicit return also works without relying on a device's Back button. */
function shinGameReturnButton14(){if(!GAME14_RETURN||!OV||$('#habitGame14',OV))return;var head=$('.sh__h,.ci40-bar',OV);if(head&&!head.querySelector('[data-act=gameReturn14]')){var b=document.createElement('button');b.className='m3-icon-button';b.dataset.act='gameReturn14';b.setAttribute('aria-label','Về game Tung thói quen');b.innerHTML=mi('arrow_back');head.prepend(b);}}
var play14Mount=f2Mount;
f2Mount=function(kind,html,keepScroll){play14Mount(kind,html,keepScroll);shinGameReturnButton14();};
var play14SheetSet=sheetSet;
sheetSet=function(html){play14SheetSet(html);shinGameReturnButton14();};
var play14RenderPage=renderPage;
renderPage=function(){if(!OV)GAME14_RETURN=false;play14RenderPage();};
document.addEventListener('click',function(e){if(e.target===OV&&GAME14_RETURN){e.preventDefault();e.stopImmediatePropagation();if(FLOW_HOW_RETURN||FLOW_NOTE_RETURN)shinDispatch14('close');else shinGameOpen14();return;}var b=e.target.closest('[data-act]');if(!b)return;var a=b.dataset.act;if(a==='gameOpen14'||a==='gameReturn14'){e.preventDefault();e.stopImmediatePropagation();shinGameOpen14();return;}if(a==='close'&&GAME14_RETURN&&OV&&!$('#habitGame14',OV)&&!FLOW_HOW_RETURN&&!FLOW_NOTE_RETURN){e.preventDefault();e.stopImmediatePropagation();shinGameOpen14();return;}},true);
