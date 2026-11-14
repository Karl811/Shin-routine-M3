/* M3.3.10 · focused check-in UI. Existing record writers, keys and rewards stay intact. */
MOODS=MOODS.map(function(m){return [m[0],({'5':'Tuyệt vời','4':'Vui vẻ','3':'Bình thường','2':'Buồn một chút','1':'Không vui'})[m[0]],m[2]];});
var CI40_OPENING=false;
function ci40Copy(value){return JSON.parse(JSON.stringify(value));}
function ci40Name(id){return flowTodayName(id);}
function ci40Pending(id){return !CI.base[id]||CI.edit[id]||!String(CI.notes[id]||'').trim();}
function ci40Optional(id){return CI.date===dk()&&!CI.base[id]&&!CI.ans[id]&&!flowDraft(CI.date,id)&&growthWeekCount(id,wkStart(CI.date))>=growthGoal(id,wkStart(CI.date));}
function ci40Init(savedWizard){
  if(CI.wizard)return;
  var old=savedWizard||((S.ciDrafts||{})[CI.date]||{}).wizard,valid=CI.all.concat(CI.keeps),ids=[];
  if(old&&Array.isArray(old.ids))old.ids.forEach(function(id){if(valid.indexOf(id)>=0&&ids.indexOf(id)<0&&(!CI.base[id]||CI.edit[id]||!String(CI.notes[id]||'').trim()||String(CI.notes[id]||'')!==String((S.notes[CI.date]||{})[id]||'')))ids.push(id);});
  CI.all.forEach(function(id){if(ci40Pending(id)&&!ci40Optional(id)&&ids.indexOf(id)<0)ids.push(id);});
  CI.keeps.forEach(function(id){if(CI.keep[id]&&!String(CI.notes[id]||'').trim()&&ids.indexOf(id)<0)ids.push(id);});
  var index=0;if(old&&Array.isArray(old.ids)&&Number.isInteger(old.index)&&old.index>=0){if(old.index>=old.ids.length)index=ids.length+Math.min(1,old.index-old.ids.length);else{index=ids.indexOf(old.ids[old.index]);if(index<0)index=old.ids.slice(0,old.index).filter(function(id){return ids.indexOf(id)>=0;}).length;}}
  CI.wizard={ids:ids,index:Math.min(ids.length+1,index),deferred:old&&old.deferred&&typeof old.deferred==='object'?ci40Copy(old.deferred):{},preserved:old&&old.preserved&&typeof old.preserved==='object'?ci40Copy(old.preserved):{}};
}
var ci40OpenBase=openCI;
openCI=function(date){var draft=((S.ciDrafts||{})[date]||{}),wizard=draft.wizard?ci40Copy(draft.wizard):null,question=draft.question;CI40_OPENING=true;try{ci40OpenBase(date);}finally{CI40_OPENING=false;}if(!CI||CI.date!==date||CI.done)return;if(question)CI.growthQuestion=question;ci40Init(wizard);stashCI29();drawCI();};
var ci40StashBase=stashCI29;
stashCI29=function(){ci40StashBase();if(CI&&!CI.done&&CI.wizard&&S.ciDrafts[CI.date]){S.ciDrafts[CI.date].wizard=ci40Copy(CI.wizard);save();}};
function ci40Current(){return CI&&CI.wizard&&CI.wizard.ids[CI.wizard.index];}
function ci40IsKeep(id){return CI.keeps.indexOf(id)>=0;}
function ci40Answer(id){return ci40IsKeep(id)?CI.keep[id]?'y':(CI.wizard.deferred[id]||{}).ans||'':CI.ans[id]||(CI.wizard.deferred[id]||{}).ans||'';}
function ci40Ready(){var id=ci40Current();return !id||!!ci40Answer(id)&&!!String(CI.notes[id]||'').trim();}
function ci40Mount(kind,html,keepScroll){
  var old=$('.ci40-scroll',OV),top=old?old.scrollTop:0;f2Mount(kind,html,false);
  var sheet=$('.sheet',OV);sheet.classList.add('ci40-sheet');sheet.setAttribute('data-flow-type','');
  if(keepScroll&&$('.ci40-scroll',OV))$('.ci40-scroll',OV).scrollTop=top;
}
function ci40Top(title,index,total,back){
  var label=index<total-2?'Thói quen':index===total-2?'Tâm trạng':'Một câu cho hôm nay';
  return '<header class="ci40-top"><div class="ci40-bar">'+(back?'<button class="m3-icon-button" data-act="ci40Back" aria-label="Bước trước">'+mi('arrow_back')+'</button>':'<span class="ci40-top-symbol">'+mi(total?'nightlight':'check_circle')+'</span>')+'<b id="f2DialogTitle">'+esc(title)+'</b><button class="m3-icon-button" data-act="close" aria-label="Đóng và giữ bản nháp">'+mi('close')+'</button></div>'+(total?shinFlowProgress(index,total,label,true):'')+'</header>';
}
function ci40Hero(title,subtitle,icon,kicker,link){return '<div class="ci40-hero"><span class="ci40-emblem">'+(icon==='mood'?moodFace(4,'#C7DBFA'):mi(icon))+'</span><p class="ci40-kicker">'+esc(kicker||'MỖI NGÀY, TỐT HƠN MỘT CHÚT')+'</p><h2 id="ci40StepTitle" tabindex="-1">'+esc(title)+'</h2><p>'+esc(subtitle)+'</p>'+(link||'')+'</div>';}
function ci40HabitHero(id,record){var u=H(id)||{};return ci40Hero(ci40Name(id),'Khi '+(u.anchor||'đến lúc đã chọn')+(u.act?' · Mình sẽ '+u.act:''),m3HabitIcon(id),ci40IsKeepSafe(id)?'GIỮ NẾP NHẸ NHÀNG':null,record?'<button class="ci40-hero-link" data-act="flowNoteCard" data-v="'+id+'">'+mi('style')+'Xem thẻ</button>':'');}
function ci40IsKeepSafe(id){return !!CI&&CI.keeps.indexOf(id)>=0;}
function ci40Field(id,status,record){
  var E=noteHints34(id,status),field=record?'ntIn':'ci-note-'+id,text=record?NT.text:CI.notes[id]||'',open=record?!!NT.open:!!CI.open['hint-'+id];
  return '<div class="f2-note-field"><label class="lbl" for="'+field+'">'+esc(E.q)+' <small>· Bắt buộc</small></label><textarea class="inp" id="'+field+'" '+(record?'data-in="note"':'data-in="ciNote29" data-id="'+id+'"')+' rows="3" required aria-required="true" placeholder="'+(status==='n'||status==='x'?'Viết một lý do cụ thể…':'Một việc nhỏ, một tình huống cụ thể…')+'">'+esc(text)+'</textarea>'+(record?'<p class="f2-error" id="ntRequired34" role="alert" hidden>Viết một ghi chú ngắn trước khi lưu nhé.</p>':'')+'</div>'+f2Hints(id,status,record?'ntChip':'ciNoteChip34',!record,open);
}
function ci40Extras(){
  var ids=CI.wizard.ids,recorded=CI.all.filter(function(id){return CI.base[id]&&!CI.edit[id]&&String((S.notes[CI.date]||{})[id]||'').trim();}).concat(CI.keeps.filter(function(id){return CI.base[id]==='y'&&String((S.notes[CI.date]||{})[id]||'').trim();}));
  var optional=CI.all.filter(function(id){return ids.indexOf(id)<0&&!CI.base[id];}).concat(CI.keeps.filter(function(id){return ids.indexOf(id)<0&&recorded.indexOf(id)<0;})),h='';
  if(recorded.length)h+='<details class="ci40-extra" data-ci-detail="saved"'+(CI.open.saved?' open':'')+'><summary>'+mi('check_circle')+recorded.length+' thẻ đã ghi nhận'+mi('expand_more')+'</summary><div>'+recorded.map(function(id){return '<div class="ci40-extra-row"><span>'+esc(ci40Name(id))+'<small>'+esc(RECORD_LABEL[mark(CI.date,id)])+'</small></span><button class="f2-text-button" data-act="ci40Edit" data-v="'+id+'" aria-label="Chỉnh '+esc(ci40Name(id))+'">Chỉnh</button></div>';}).join('')+'</div></details>';
  if(optional.length)h+='<details class="ci40-extra" data-ci-detail="optional"'+(CI.open.optional?' open':'')+'><summary>'+mi('add_circle')+'Rèn thêm nếu muốn'+mi('expand_more')+'</summary><div>'+optional.map(function(id){return '<div class="ci40-extra-row"><span>'+esc(ci40Name(id))+'<small>'+(ci40IsKeep(id)?'Thẻ đang duy trì':'Đã đạt mục tiêu tuần')+'</small></span><button class="f2-text-button" data-act="ci40Edit" data-v="'+id+'" aria-label="Ghi nhận thêm '+esc(ci40Name(id))+'">Ghi thêm</button></div>';}).join('')+'</div></details>';
  return h;
}
function ci40Footer(){var id=ci40Current(),last=CI.wizard.index===CI.wizard.ids.length+1;return '<footer class="ci40-footer"><button class="btn ci40-primary" id="ci40Go" data-act="'+(last?'ci40Save':'ci40Next')+'"'+(ci40Ready()?'':' disabled')+'>'+(last?(CI.again?'Lưu thay đổi':'Lưu check-in'):'Tiếp tục')+mi(last?'check':'arrow_forward')+'</button><button class="f2-text-button ci40-skip" data-act="ci40Skip">'+(last?'Bỏ qua câu hỏi và lưu':'Bỏ qua bước này')+'</button><p class="ci40-save-hint">'+(last?'Các bước đã chọn sẽ được lưu cùng nhau.':'Đang lưu nháp · Hoàn tất ở bước cuối')+'</p></footer>';}
var ci40DrawBase=drawCI;
drawCI=function(){
  if(!CI||CI40_OPENING)return;if(CI.done){ci40DrawBase();return;}ci40Init();
  CI.growthQuestion=CI.growthQuestion||(S.ci[CI.date]||{}).question||((S.ciDrafts[CI.date]||{}).question)||growthQuestion(CI.date);
  var w=CI.wizard,id=ci40Current(),i=w.index,n=w.ids.length,total=n+2,h=ci40Top(CI.date===dk()?'Check-in hôm nay':'Check-in · '+dm(CI.date),i,total,i>0),body='';
  if(id){var a=ci40Answer(id),keep=ci40IsKeep(id);h+='<div class="ci40-scroll">'+ci40HabitHero(id,false);body='<p class="ci40-question">'+(keep?'Hôm nay bạn đã duy trì thói quen này?':'Hôm nay bạn thực hiện thế nào?')+'</p>'+(keep?'<div class="record-options f2-options ci40-keep-option"><button class="record-option state-y" data-act="ci40Answer" data-v="'+id+'|y" aria-pressed="'+(a==='y')+'">'+mi('check_circle')+'<span>Đã làm</span></button></div>':recordOptions29(id,a,'ci40Answer'))+ci40Field(id,a,false);}
  else if(i===n){h+='<div class="ci40-scroll">'+ci40Hero(CI.date===dk()?'Hôm nay bạn thấy thế nào?':'Hôm đó bạn thấy thế nào?','Dừng một chút để lắng nghe mình.','mood','LẮNG NGHE BẢN THÂN');body='<p class="ci40-question">Chọn cảm xúc gần nhất với bạn.</p><div class="ci40-moods" role="group" aria-label="Tâm trạng hôm nay">'+MOODS.map(function(m){return '<button data-act="ciMood29" data-v="'+m[0]+'" aria-pressed="'+(CI.mood===m[0])+'">'+moodFace(+m[0],m[2])+'<span>'+esc(m[1])+'</span><span class="ci40-mood-check">'+(CI.mood===m[0]?mi('check'):'')+'</span></button>';}).join('')+'</div><p class="ci40-optional-text">Không bắt buộc · Chỉ bạn xem</p>';}
  else {h+='<div class="ci40-scroll">'+ci40Hero('Một câu cho hôm nay','Không cần viết hay. Một câu thật với mình là đủ.','edit_note','GIỮ LẠI MỘT ĐIỀU');body='<label class="lbl ci40-memo-question" for="ciMemo29">'+esc(CI.growthQuestion)+'</label><textarea class="inp" id="ciMemo29" data-in="ciMemo29" rows="4" placeholder="Một điều cụ thể bạn muốn giữ lại…">'+esc(CI.note)+'</textarea><p class="ci40-optional-text">Không bắt buộc</p>';}
  h+='<div class="ci40-body">'+body+'<p class="ci40-error" role="alert" hidden></p>'+ci40Extras()+'</div></div>'+ci40Footer();ci40Mount('checkin',h,true);
};
drawNote29=function(){
  if(!NT)return;var id=NT.id,today=NT.day===dk(),has=!!mark(NT.day,id)||!!flowDraft(NT.day,id),h=ci40Top(today?'Ghi nhận thói quen':'Ghi nhận · '+dm(NT.day),0,0,false)+'<div class="ci40-scroll">'+ci40HabitHero(id,true)+'<div class="ci40-body"><p class="ci40-question">'+(today?'Hôm nay':'Hôm đó')+' bạn thực hiện thế nào?</p>'+recordOptions29(id,NT.ans,'recordAnswer')+ci40Field(id,NT.ans,true)+(has?'<button class="f2-text-button ci40-remove" data-act="flowRemoveDraft">Bỏ ghi nhận</button>':'')+'</div></div><footer class="ci40-footer"><button class="btn ci40-primary" id="ntGo" data-act="ntSave"'+(String(NT.text||'').trim()?'':' disabled')+'>'+mi('check')+'Lưu ghi nhận</button><button class="f2-text-button ci40-skip" data-act="flowMemoLater">Đóng và giữ bản nháp</button></footer>';ci40Mount('record',h,true);
};
var ci40FooterBase=updateCIFooter34;
updateCIFooter34=function(){if(CI&&!CI.done&&CI.wizard&&$('.ci40-sheet',OV)){var b=$('#ci40Go');if(b)b.disabled=!ci40Ready();return;}ci40FooterBase();};
function ci40RememberOpen(){if(!CI||!OV)return;$$('[data-ci-detail]',OV).forEach(function(el){CI.open[el.dataset.ciDetail]=el.open;});}
function ci40Go(index){ci40RememberOpen();CI.wizard.index=Math.max(0,Math.min(CI.wizard.ids.length+1,index));stashCI29();drawCI();var scroll=$('.ci40-scroll',OV);if(scroll)scroll.scrollTop=0;var title=$('#ci40StepTitle');if(title)title.focus({preventScroll:true});}
function ci40Activate(id){var a=ci40Answer(id);if(ci40IsKeep(id))CI.keep[id]=true;else{CI.ans[id]=a;delete CI.skip[id];if(CI.base[id])CI.edit[id]=true;}delete CI.wizard.deferred[id];delete CI.wizard.preserved[id];}
function ci40Queue(id){var index=CI.wizard.ids.indexOf(id);if(index<0){index=Math.min(CI.wizard.index,CI.wizard.ids.length);CI.wizard.ids.splice(index,0,id);}return index;}
function ci40Defer(id){
  var a=ci40Answer(id);if(a){CI.wizard.deferred[id]={ans:a};if(!CI.base[id]){S.recordDrafts[CI.date]=S.recordDrafts[CI.date]||{};S.recordDrafts[CI.date][id]={ans:a,text:String(CI.notes[id]||''),why:CI.why[id]||''};}}
  if(CI.base[id])CI.wizard.preserved[id]=true;
  if(ci40IsKeep(id)){CI.keep[id]=CI.base[id]==='y';if(CI.base[id])CI.notes[id]=(S.notes[CI.date]||{})[id]||'';}
  else if(CI.base[id]){CI.ans[id]=CI.base[id];CI.notes[id]=(S.notes[CI.date]||{})[id]||'';CI.why[id]=(S.why[CI.date]||{})[id]||'';delete CI.edit[id];delete CI.skip[id];}
  else{delete CI.ans[id];CI.skip[id]=true;}
}
var ci40StateBase=ciState;
ciState=function(){if(!CI||!CI.wizard)return ci40StateBase();var remaining=CI.all.filter(function(id){return !CI.ans[id]&&!CI.skip[id];}).length,missing=CI.all.filter(function(id){return CI.ans[id]&&!CI.wizard.preserved[id]&&!String(CI.notes[id]||'').trim();}).length+CI.keeps.filter(function(id){return CI.keep[id]&&!CI.wizard.preserved[id]&&!String(CI.notes[id]||'').trim();}).length;return {ok:remaining===0&&missing===0,remaining:remaining,missingNotes:missing,msg:remaining?'Còn '+remaining+' thẻ chưa chọn':missing?'Còn '+missing+' thói quen thiếu ghi chú':'Sẵn sàng lưu'};};
function ci40Save(){
  if(!ciState().ok){var missing=CI.wizard.ids.findIndex(function(id){if(CI.wizard.preserved[id])return false;return ci40IsKeep(id)?CI.keep[id]&&!String(CI.notes[id]||'').trim():!CI.skip[id]&&(!CI.ans[id]||!String(CI.notes[id]||'').trim());});if(missing>=0)ci40Go(missing);var error=$('.ci40-error',OV);if(error){error.hidden=false;error.textContent='Chọn kết quả và thêm ghi chú, hoặc chọn Để sau để tiếp tục nhé.';}return;}
  stashCI29();ciFinish();
}
document.addEventListener('click',function(e){
  var b=e.target.closest('[data-act]');if(!b)return;var act=b.dataset.act,v=b.dataset.v;
  if(!/^ci40/.test(act)||!CI||CI.done)return;e.preventDefault();e.stopImmediatePropagation();ci40RememberOpen();
  if(act==='ci40Back')ci40Go(CI.wizard.index-1);
  if(act==='ci40Answer'){var parts=v.split('|'),id=parts[0];if(ci40IsKeep(id))CI.keep[id]=true;else{CI.ans[id]=parts[1];delete CI.skip[id];if(CI.base[id])CI.edit[id]=true;}delete CI.wizard.deferred[id];delete CI.wizard.preserved[id];stashCI29();drawCI();var selected=Array.from(OV.querySelectorAll('[data-act=ci40Answer]')).find(function(x){return x.dataset.v===v;});if(selected)selected.focus({preventScroll:true});}
  if(act==='ci40Next'){if(!ci40Ready())return;var id=ci40Current();if(id)ci40Activate(id);ci40Go(CI.wizard.index+1);}
  if(act==='ci40Edit'){if(CI.all.concat(CI.keeps).indexOf(v)<0)return;var index=ci40Queue(v);if(CI.base[v])CI.edit[v]=true;ci40Go(index);}
  if(act==='ci40Skip'){var id=ci40Current();if(id)ci40Defer(id);else if(CI.wizard.index===CI.wizard.ids.length){CI.mood=S.mood[CI.date]||null;CI.moodTouched=false;}else CI.note=(S.ci[CI.date]||{}).note||'';if(CI.wizard.index===CI.wizard.ids.length+1)ci40Save();else ci40Go(CI.wizard.index+1);}
  if(act==='ci40Save')ci40Save();
},true);
document.addEventListener('toggle',function(e){if(e.target.matches('.ci40-sheet .f2-suggestions')){if(NT&&e.target.closest('.f2-record'))NT.open=e.target.open;ci40RememberOpen();}},true);
