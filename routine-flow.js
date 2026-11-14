/* Clear titles are local to Today; stored names and other screens stay unchanged. */
function flowTodayName(id){
  if(id==='horenso')return 'Báo cáo, xác nhận';
  if(id==='bot'&&H(id)&&H(id).bad==='mxh')return 'Giảm dần: lướt mạng xã hội';
  return hname(id);
}
/* M3.3.0 · approved Today / Week / Journey flow. Existing records and keys stay intact. */
var FLOW_DAY=null,FLOW_HABIT=null,FLOW_HOW_RETURN=null,FLOW_NOTE_RETURN=null,FLOW_CARD_OBSERVER=null;
function flowGroup(id){var x=HMAP[id];return x&&!x.custom&&x.g>=1&&x.g<=4?' flow-group-'+x.g:' flow-group-custom';}
function flowIcon(id){var x=HMAP[id];return x&&x.custom?glyph('cu_'+(x.icon||'la'),GCOL[x.g]||GCOL[5]):mi(m3HabitIcon(id));}
function flowDraft(d,id){return ((S.recordDrafts||{})[d]||{})[id]||null;}
function flowStashNote(){if(!NT||!H(NT.id))return;S.recordDrafts=S.recordDrafts||{};S.recordDrafts[NT.day]=S.recordDrafts[NT.day]||{};S.recordDrafts[NT.day][NT.id]={ans:NT.ans,text:String(NT.text||''),why:NT.why||''};save(true);}
function flowClearDraft(d,id){if(S.recordDrafts&&S.recordDrafts[d]){delete S.recordDrafts[d][id];if(!Object.keys(S.recordDrafts[d]).length)delete S.recordDrafts[d];}}
function flowComplete(d,id){return !!mark(d,id)&&!!String((S.notes[d]||{})[id]||'').trim();}
function flowPendingText(d,id){var draft=flowDraft(d,id),m=draft?draft.ans:mark(d,id);return m?(RECORD_LABEL[m]+' · '+(m==='n'||m==='x'?'chờ lý do':'chờ memo')):'';}

/* Drafts never award XP or advance a level. Only writeRecord commits a result. */
var flowWriteRecord=writeRecord;
writeRecord=function(id,d,m,note,why){var draft=flowDraft(d,id),out=flowWriteRecord(id,d,m,note,why);if(out){out.recordDraft=draft?JSON.parse(JSON.stringify(draft)):null;flowClearDraft(d,id);save(true);}return out;};
var flowUndoRecord=undoRecord29;
undoRecord29=function(token){var old=RECORD_UNDO,valid=old&&String(old.token)===String(token)&&RECORD_VERSIONS[old.day+'|'+old.id]===old.token;flowUndoRecord(token);if(valid&&old.recordDraft){S.recordDrafts[old.day]=S.recordDrafts[old.day]||{};S.recordDrafts[old.day][old.id]=old.recordDraft;save(true);refreshAll();}};

openNote=function(id,day){
  day=day||dk();if(!H(id)||(day!==dk()&&!canBf(day,id)))return;
  $('#toast').classList.remove('show');rememberHabit33();var draft=flowDraft(day,id),m=mark(day,id);
  NT={id:id,day:day,ans:draft?draft.ans:m||'y',text:draft?draft.text:(S.notes[day]||{})[id]||'',why:draft?draft.why:(S.why[day]||{})[id]||'',open:false};
  openMini('');drawNote29();
};
drawNote29=function(){
  if(!NT)return;var id=NT.id,E=noteHints34(id,NT.ans),has=!!mark(NT.day,id)||!!flowDraft(NT.day,id);
  var head=f2Head('Ghi nhận thói quen',NT.day===dk()?'Hôm nay':treeDate30(NT.day));
  var h=head+'<div class="f2-body">'+f2Identity(id)+'<button class="f2-text-button flow-view-card" data-act="flowNoteCard" data-v="'+id+'">'+mi('style')+'Xem thẻ</button>'+recordOptions29(id,NT.ans,'recordAnswer')+'<div class="f2-note-field"><label class="lbl" for="ntIn">'+esc(E.q)+' <small>· Bắt buộc</small></label><textarea class="inp" id="ntIn" data-in="note" rows="3" required aria-required="true" aria-describedby="ntRequired34" placeholder="'+(NT.ans==='n'||NT.ans==='x'?'Ghi một lý do cụ thể':'Ghi lại một điều cụ thể')+'">'+esc(NT.text)+'</textarea><p class="f2-error" id="ntRequired34" role="alert" hidden>Viết một ghi chú ngắn trước khi lưu nhé.</p></div>'+f2Hints(id,NT.ans,'ntChip',false,NT.ans==='n'||NT.ans==='x')+(has?'<button class="f2-text-button f2-remove" data-act="flowRemoveDraft">Bỏ ghi nhận</button>':'')+'</div><footer class="sbar f2-footer f2-record-footer"><button class="f2-text-button" data-act="flowMemoLater">Để sau</button><button class="btn" id="ntGo" data-act="ntSave"'+(String(NT.text||'').trim()?'':' disabled')+'>'+mi('check')+'Lưu ghi nhận</button></footer>';
  f2Mount('record',h,true);
};
var flowOpenCI=openCI;
openCI=function(date){flowOpenCI(date);if(!CI)return;CI.all.forEach(function(id){var draft=flowDraft(date,id);if(draft&&!CI.skip[id]){CI.ans[id]=draft.ans;CI.notes[id]=draft.text;CI.why[id]=draft.why;if(CI.base[id])CI.edit[id]=true;}});drawCI();};
var flowStashCI=stashCI29;
stashCI29=function(){flowStashCI();if(!CI||CI.done)return;CI.all.forEach(function(id){if(CI.ans[id]&&!CI.base[id]&&!CI.skip[id]){S.recordDrafts[CI.date]=S.recordDrafts[CI.date]||{};S.recordDrafts[CI.date][id]={ans:CI.ans[id],text:CI.notes[id]||'',why:CI.why[id]||''};}});save();};

/* Three top-level pages, with no nested page tabs. */
renderHead=function(){var d=new Date();if($('#pageTitle35'))$('#pageTitle35').textContent=PAGES[PG][1];if($('#hdate'))$('#hdate').textContent=WD[d.getDay()]+', '+pad(d.getDate())+'/'+pad(d.getMonth()+1);if($('#headerAction35'))$('#headerAction35').innerHTML=PG===1?journalStarToggle35():'';};
var flowRenderBar=renderBar;
renderBar=function(){flowRenderBar();var checkin=$('#m3Action .ckb');if(checkin)checkin.toggleAttribute('data-flow-type',innerWidth<768);var b=$('#abar');if(!b)return;b.querySelectorAll('[data-act=page]').forEach(function(el,i){var symbol=el.querySelector('.material-symbols-rounded');if(symbol)symbol.textContent=['home','calendar_month','forest'][i];});};
renderPage=function(){renderHead();document.body.classList.toggle('pg0',PG===0);document.body.classList.remove('cards-view34');var pv=$('#pv');if(!pv)return;pv.innerHTML='<div class="m3-page m3-page-'+['today','week','journey'][PG]+'">'+(PG===0?vToday():PG===1?flowWeek():treePanel())+'</div>';};
toPage=function(i){if(i<0||i>2)return;if(i===2&&i!==PG)TREE_REPLAY34=true;PG=i;renderBar();renderPage();window.scrollTo(0,0);m3Enter($('#pv'));$('#pageTitle35').focus({preventScroll:true});};
go=function(t){if(t==='nb'){openNb();return;}toPage(t==='prog'?2:t==='week'?1:0);};
openJourney31=function(tab){closeOv();TREE_REPLAY34=true;PG=tab==='week'?1:2;JOURNEY_TAB31=tab||'tree';render();window.scrollTo(0,0);};
journalOpen31=function(d){closeOv();PG=1;DW=Math.max(0,Math.floor(diffD(wkStart(d),wkStart(dk()))/7));FLOW_DAY=d;FLOW_HABIT=null;JOURNAL_MODE31='day';render();window.scrollTo(0,0);};

vToday=function(){
  var d=dk(),all=handList(),pending=all.filter(function(id){return !flowComplete(d,id);}),done=all.length-pending.length,yes=all.filter(function(id){return mark(d,id)==='y';}).length;
  var h='<div class="flow-today-toolbar" data-flow-type><span>'+done+'/'+all.length+' đã ghi nhận</span><button class="flow-link" data-act="collection">'+mi('menu_book')+'Thư viện</button></div>';
  if(!all.length)h+='<section class="flow-empty" data-flow-type>'+shin('hi')+'<h2>Một thẻ là đủ để bắt đầu</h2></section>';
  else if(!pending.length)h+='<section class="flow-empty" data-flow-type>'+shin('proud')+'<h2>Bạn đã thực hiện '+yes+'/'+all.length+' thói quen hôm nay</h2><p>'+(yes===all.length?'Bạn đã giữ nhịp hôm nay. Shin cùng bạn tiếp tục nhé.':'Mỗi lần nhìn lại là một bước hiểu mình hơn. Mai mình tiếp tục nhé.')+'</p><button class="flow-link" data-act="flowTodayReview">Xem lại hôm nay '+mi('arrow_forward')+'</button></section>';
  else h+='<section class="flow-today-list" aria-label="Thói quen còn cần ghi nhận" data-flow-type>'+pending.map(function(id){var status=flowPendingText(d,id),u=H(id);return '<article class="flow-today-row'+flowGroup(id)+(status?' is-pending':'')+'" data-flow-swipe="'+id+'"><button class="flow-card-entry" data-act="flowFront" data-v="'+id+'" aria-label="Xem mặt trước thẻ '+esc(flowTodayName(id))+'"><span class="flow-emblem">'+flowIcon(id)+'</span><small>Thẻ</small></button><button class="flow-row-main" data-act="note" data-v="'+id+'|'+d+'"><b>'+esc(flowTodayName(id))+'</b><small>'+(status?esc(status):'Khi '+esc(u.anchor||'đến lúc đã chọn'))+'</small></button><button class="flow-row-plus" data-act="note" data-v="'+id+'|'+d+'" aria-label="Ghi nhận '+esc(flowTodayName(id))+'">'+mi('add')+'</button></article>';}).join('')+'</section>';
  if(all.length<5)h+='<button class="flow-link flow-add" data-act="pick" data-flow-type>'+mi('add')+'Thêm thói quen</button>';
  return h;
};

function flowDayEntry(id,d){
  var m=mark(d,id),note=(S.notes[d]||{})[id]||'',draft=flowDraft(d,id),editable=H(id)&&(d===dk()||canBf(d,id)),reason=REASONS.find(function(r){return r[0]===((S.why[d]||{})[id]);});
  return '<section class="flow-day-entry" aria-label="Ghi nhận '+esc(sname(id))+' ngày '+treeDate30(d)+'"><div class="flow-entry-meta"><time datetime="'+d+'">'+treeDate30(d)+'</time><span class="m3-status '+(m||'empty')+'">'+esc(m?RECORD_LABEL[m]:draft?flowPendingText(d,id):'Chưa ghi')+'</span>'+journalStarButton31(d,id,!!m||!!note)+'</div><p>'+esc(note||(draft&&draft.text)||(reason&&reason[1])||(draft?'Chưa viết memo.':'Chưa có ghi nhận cho ngày này.'))+'</p>'+(editable?'<button class="flow-link" data-act="note" data-v="'+id+'|'+d+'">'+(m?'Chỉnh ghi nhận':'Ghi nhận ngày này')+'</button>':'')+'</section>';
}
function flowWeek(){
  if(JOURNAL_MODE31==='saved'){JOURNAL_HABIT31='all';return '<div class="flow-saved"><h2>Điều mình muốn giữ</h2>'+journalTimeline31()+'</div>';}
  var t=dk(),ws=addD(wkStart(t),-7*DW),we=addD(ws,6),list=weekIds31(ws),win=(S.week[ws]||{}).win||'',selected=FLOW_DAY&&FLOW_DAY>=ws&&FLOW_DAY<=we?FLOW_DAY:null;
  var h='<section class="flow-week-surface">'+m3WeekNav('flowWeekNav',1,-1,ws,we,DW===0,ws<=wkStart(S.created),DW===0)+'<div class="flow-week-list">';
  h+=list.map(function(id){var u=H(id);return '<article class="flow-week-row'+flowGroup(id)+'"><button class="flow-week-title" data-act="flowJournal" data-v="'+id+'" data-flow-type><span class="flow-emblem">'+flowIcon(id)+'</span><span><b>'+esc(sname(id))+'</b><small>'+esc(weekDescription31(id,ws))+'</small></span>'+mi('chevron_right')+'</button><div class="flow-week-dots" data-flow-type>'+WDS.map(function(w,i){var d=addD(ws,i),m=mark(d,id),disabled=d>t||d<S.created||(u&&d<u.since),on=selected===d&&FLOW_HABIT===id;return '<button class="flow-week-day '+(disabled?'future':m||'empty')+'" data-act="flowDay" data-v="'+id+'|'+d+'" aria-pressed="'+on+'" aria-label="'+w+', '+treeDate30(d)+': '+esc(RECORD_LABEL[m]||'Chưa ghi')+'"'+(disabled?' disabled':'')+'><small>'+w+'</small><i>'+(m==='y'?mi('check'):m==='p'?'−':m==='n'?'×':m==='x'?'·':'')+'</i></button>';}).join('')+'</div>'+(selected&&FLOW_HABIT===id?flowDayEntry(id,selected):'')+'</article>';}).join('');
  if(!list.length)h+='<p class="journey-empty31">Tuần này chưa có thói quen được rèn.</p>';
  h+='</div>';
  if(selected){h+='<section class="flow-day-journal"><h2>Nhật ký · '+dm(selected)+'</h2>';if(!FLOW_HABIT)h+=journalDay31(selected);else h+=journalMemo31(selected);if(S.mood[selected])h+='<p class="flow-day-mood">'+esc((MOODS.find(function(m){return m[0]===S.mood[selected];})||[])[1]||'')+'</p>';if(FLOW_HABIT&&(selected===t||canBf(selected,list[0])))h+='<button class="flow-link" data-act="ci" data-v="'+selected+'">'+mi('nightlight')+'Check-in ngày này</button>';h+='</section>';}
  h+='<div class="m3-week-reflect"><label for="journeyWin31">Điều bạn muốn nhớ tuần này</label><textarea class="inp" id="journeyWin31" data-in="journeyWin31" data-week="'+ws+'" rows="2" placeholder="Một điều bạn muốn ghi nhớ…">'+esc(win)+'</textarea></div><button class="week-link flow-week-link" data-act="week" data-v="'+ws+'">Xem thẻ tuần</button><details class="m3-week-legend"><summary>Cách đọc các chấm tuần</summary><p>✓ Đã làm · − Một phần · × Chưa làm<br>Chấm xám: không gặp dịp. Chấm rỗng: chưa ghi. Chấm nhạt: chưa tới ngày.</p><p>Thói quen khi gặp dịp chỉ tính những dịp đã ghi nhận.</p></details></section>';
  return h;
}

/* A compact card owns its own typography, independent of the app's approved type scale. */
function flowHowButton(id){return !HMAP[id].custom?'<button class="flow-card-how" data-act="flowHow" data-v="'+id+'">'+mi('menu_book')+'Cách làm</button>':'';}
function flowCardTop(id){var u=H(id);return '<div class="flow-paper-top"><span class="flow-card-level">'+(u?'CẤP '+u.lv+' · '+esc(LV_NAME[u.lv]):'KAIZEN · '+cardNo(id))+'</span>'+flowHowButton(id)+'</div>';}
function flowFront(id){
  var x=HMAP[id],u=H(id),n=u?daysAt(id):0,need=u?needOf(id):0;
  return '<article class="flow-paper flow-front'+flowGroup(id)+'">'+flowCardTop(id)+'<div class="flow-card-heading"><span class="flow-emblem">'+flowIcon(id)+'</span>'+(u?'<button class="flow-card-edit" data-act="edit" data-v="'+id+'" aria-label="Sửa công thức">'+mi('edit')+'</button>':'')+'</div><h2>'+esc(hname(id))+'</h2><div class="flow-formula"><small>KHI</small><p>'+esc(u?u.anchor:(x.anchors||[])[0]||'đến lúc mình đã chọn')+'</p><small>MÌNH SẼ</small><p class="flow-action">'+esc(u?u.act:x.act||x.tiers[0])+'</p>'+(u&&u.who?'<p class="flow-who">Trở thành '+esc(u.who)+'</p>':'')+'</div>'+(u?'<div class="flow-card-days">'+f2Days(id)+'</div><div class="flow-card-owner"><span><b>'+esc(S.name)+'</b><small>Rèn từ '+dm(u.since)+'</small></span><span>'+Math.min(n,need)+' / '+need+' '+unitOf(id)+'</span></div><div class="m3-progress-track"><i style="width:'+Math.round(lvPct(id)*100)+'%"></i></div>':'')+'</article>';
}
function flowBack(id){
  var x=HMAP[id],pv=x.prov||x.jp,v=spOf(id);
  return '<article class="flow-paper flow-back'+flowGroup(id)+'">'+flowCardTop(id)+'<small class="flow-back-label">'+(x.custom?'VÌ SAO MÌNH CHỌN':'Ý NGHĨA · 意味')+'</small>'+(x.custom?'<blockquote><p>'+esc(x.myWhy||'')+'</p></blockquote>':'<div class="flow-japanese"><p lang="ja">'+esc(pv.j)+'</p><small>'+esc(pv.r)+'</small><p class="flow-translation">'+esc(pv.v)+'</p><button class="flow-card-speak" data-act="speak" data-v="'+esc(pv.j)+'" aria-label="Nghe đọc">'+mi('volume_up')+'</button></div><p class="flow-benefit">'+esc(BEN[id]||(x.why?x.why.now:'Để trở thành '+x.who[0]+'.'))+'</p>'+((x.corner||x.kase)?'<button class="flow-senpai" data-act="senpai" data-v="'+id+'"><span>'+senpai('smile',v)+'</span><span><small>SENPAI KỂ</small><b>'+esc(x.kase?x.kase.t:teaser(x.corner))+'</b></span>'+mi('chevron_right')+'</button>':''))+'</article>';
}
drawCard=function(){
  if(!CARD||!HMAP[CARD.id])return;var id=CARD.id,tab=CARD.tab==='journal'?'journal':'card';CARD.tab=tab;
  var h=habitHeader33(id,tab)+'<div class="f2-body" id="habit-body33" role="tabpanel" aria-labelledby="habit-tab-'+tab+'">'+(tab==='journal'?habitJournal33(id):'<div class="flow-card-stage" data-flow-type>'+(CARD.back?flowBack(id):flowFront(id))+'</div>')+'</div>';
  if(tab==='card')h+='<footer class="sbar f2-footer f2-detail-footer flow-card-footer" data-flow-type><button class="flow-flip" data-act="flowFlip" aria-pressed="'+!!CARD.back+'">'+mi('swap_horiz')+(CARD.back?'Mặt trước':'Mặt sau')+'</button>'+f2DetailAction(id)+'</footer>';
  f2Mount('detail',h);$('.sheet',OV).classList.toggle('flow-card-mode',tab==='card');if(FLOW_CARD_OBSERVER)FLOW_CARD_OBSERVER.disconnect();var stage=$('.flow-card-stage',OV);if(stage&&window.ResizeObserver){FLOW_CARD_OBSERVER=new ResizeObserver(flowFitCard);FLOW_CARD_OBSERVER.observe(stage);}requestAnimationFrame(flowFitCard);
};
function flowFitCard(){var stage=$('.flow-card-stage'),paper=stage&&$('.flow-paper',stage);if(!paper)return;stage.style.setProperty('--card-scale','1');for(var n=0;n<7;n++){var ps=getComputedStyle(paper),available=stage.clientHeight,used=parseFloat(ps.paddingTop)+parseFloat(ps.paddingBottom);Array.from(paper.children).forEach(function(el){var cs=getComputedStyle(el),autoTop=el.matches('.flow-senpai,.flow-card-days');used+=el.getBoundingClientRect().height+(autoTop?0:parseFloat(cs.marginTop)||0)+(parseFloat(cs.marginBottom)||0);});if(!available||used<=available-2)break;var scale=parseFloat(stage.style.getPropertyValue('--card-scale'))||1,next=Math.max(.82,scale*(available-6)/used);if(next>=scale-.001)break;stage.style.setProperty('--card-scale',next.toFixed(3));}}
function flowOpenJournal(id){if(!HMAP[id])return;closeOv(true);CARD={id:id,back:false,tab:'journal',timelineLimit:6};openOv('');drawCard();}

/* Small event adapter keeps the existing event dispatcher and teaching flows intact. */
document.addEventListener('click',function(e){
  if(Date.now()<FLOW_SWIPE_UNTIL){e.preventDefault();e.stopImmediatePropagation();return;}
  var b=e.target.closest('[data-act]');if(!b)return;var a=b.dataset.act,v=b.getAttribute('data-v');
  if(a==='note')FLOW_NOTE_RETURN=null;
  if(a==='close'&&OV&&$('.f2-how',OV))FLOW_HOW_RETURN=null;
  if(['recordAnswer','ntChip'].includes(a)){setTimeout(function(){if(NT&&OV&&$('.f2-record',OV))flowStashNote();},0);return;}
  if(a==='close'&&FLOW_NOTE_RETURN){e.preventDefault();e.stopImmediatePropagation();var note=FLOW_NOTE_RETURN;FLOW_NOTE_RETURN=null;closeOv(true);NT=note;openOv('');drawNote29();return;}
  var acts=['flowFront','flowJournal','flowDay','flowWeekNav','flowTodayReview','flowMemoLater','flowRemoveDraft','flowFlip','flowHow','flowHowBack','flowNoteCard','flowWhoNone'];if(acts.indexOf(a)<0)return;
  e.preventDefault();e.stopImmediatePropagation();
  if(a==='flowWhoNone'&&ST){ST.who='';ST.custom.w=false;stNext();}
  if(a==='flowFront'){FLOW_NOTE_RETURN=null;closeOv(true);openCard(v,false);}
  if(a==='flowJournal')flowOpenJournal(v);
  if(a==='flowDay'){var parts=v.split('|');if(FLOW_HABIT===parts[0]&&FLOW_DAY===parts[1]){FLOW_DAY=null;FLOW_HABIT=null;}else{FLOW_HABIT=parts[0];FLOW_DAY=parts[1];}var scroll=window.scrollY;renderPage();window.scrollTo(0,scroll);}
  if(a==='flowWeekNav'){DW=Math.max(0,Math.min(Math.floor(diffD(wkStart(S.created),wkStart(dk()))/7),DW+(+v)));FLOW_DAY=null;FLOW_HABIT=null;renderPage();window.scrollTo(0,0);}
  if(a==='flowTodayReview'){PG=1;DW=0;FLOW_DAY=dk();FLOW_HABIT=null;JOURNAL_MODE31='day';render();window.scrollTo(0,0);}
  if(a==='flowMemoLater'&&NT){flowStashNote();var id=NT.id;NT=null;HABIT_RETURN33=null;closeOv(true);render();toast('Đã giữ '+esc(sname(id))+' · chờ '+((flowDraft(dk(),id)||{}).ans==='n'?'lý do':'memo')+'.');}
  if(a==='flowRemoveDraft'&&NT){var id=NT.id,d=NT.day,has=!!mark(d,id);flowClearDraft(d,id);if(has)writeRecord(id,d,'',undefined,undefined);NT=null;closeOv(true);save(true);if(has)recordFeedback(id,d,true);else{render();toast('Đã bỏ ghi nhận đang viết.');}}
  if(a==='flowFlip'&&CARD)touchFlipCard(true);
  if(a==='flowHow'&&CARD){FLOW_HOW_RETURN={card:JSON.parse(JSON.stringify(CARD))};openHow(v);}
  if(a==='flowHowBack'&&FLOW_HOW_RETURN){var card=FLOW_HOW_RETURN.card;FLOW_HOW_RETURN=null;HW=null;closeOv(true);CARD=card;openOv('');drawCard();}
  if(a==='flowNoteCard'&&NT){flowStashNote();FLOW_NOTE_RETURN=JSON.parse(JSON.stringify(NT));NT=null;openCard(v,false);}
},true);
document.addEventListener('input',function(e){if(e.target.matches('#ntIn')&&NT){NT.text=e.target.value;flowStashNote();}},true);
var flowDrawHow=drawHow;
drawHow=function(){flowDrawHow();if(!FLOW_HOW_RETURN||!OV)return;var back=$('.f2-how .f2-head [data-act=card]',OV),done=$('.f2-how .f2-footer [data-act=card]',OV);[back,done].forEach(function(b){if(b)b.dataset.act='flowHowBack';});};

/* A deliberate horizontal swipe; vertical scrolling and icon buttons remain independent. */
var FLOW_SWIPE_UNTIL=0;
window.addEventListener('resize',function(){requestAnimationFrame(flowFitCard);});
if(document.fonts)document.fonts.ready.then(flowFitCard);

/* Portrait preference is also declared in the manifest. No fake CSS screen rotation. */
function flowPortrait(){if((window.matchMedia('(pointer:coarse)').matches||Math.min(screen.width,screen.height)<=767)&&screen.orientation&&screen.orientation.lock&&(isStandalone()||isFS())){try{screen.orientation.lock('portrait-primary').catch(function(){});}catch(e){}}}
document.addEventListener('fullscreenchange',flowPortrait);window.addEventListener('pageshow',flowPortrait);
