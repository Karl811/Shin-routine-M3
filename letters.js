/* TQ37 · personal letters; versioned designs preserve each stamp's meaning. */
var STAMP_MILESTONES37=[1,3,6,11];
var STAMP_CATALOG37={
  1:{id:'m1-v1',name:'Mầm đầu tiên',caption:'Mình đã bắt đầu.',meaning:'Một mầm cây nhỏ nhắc rằng bạn đã bắt đầu và chăm được một việc đến ngày hôm nay.'},
  3:{id:'m3-v1',name:'Rễ bền',caption:'Mình đang bén rễ.',meaning:'Những chiếc rễ âm thầm giữ cây vững. Từng việc nhỏ bạn lặp lại đang tạo nên nền tảng của mình.'},
  6:{id:'m6-v1',name:'Vươn nắng',caption:'Từng ngày, mình vững hơn.',meaning:'Cành tre hướng về nắng, lớn lên từng đốt. Bạn cũng đang tiến lên từ những lần kiên trì.'},
  11:{id:'m11-v1',name:'Khóm tre',caption:'Điều nhỏ đã thành một phần của mình.',meaning:'Từ một mầm nhỏ thành một khóm tre. Những thói quen đã cùng bạn đi qua một chặng đường đáng nhớ.'}
};
var LETTER_FLOW37=null,LETTER_TIMER37=null,LETTER_FRESH37=null;
function validateStampLetters37(map){
  Object.keys(map).forEach(function(key){
    var m=+key,r=map[key],design=STAMP_CATALOG37[m];
    if(STAMP_MILESTONES37.indexOf(m)<0||String(m)!==key||!stateObject32(r)||r.milestone!==m||!validDate32(r.earnedAt)||r.stampId!==design.id)throw Error('Con tem trong bản sao không hợp lệ.');
    if(r.draft!==undefined&&(typeof r.draft!=='string'||r.draft.length>1000))throw Error('Bản nháp thư trong bản sao không hợp lệ.');
    if(r.letter!==undefined&&r.letter!==null){var l=r.letter;if(!stateObject32(l)||typeof l.body!=='string'||!l.body.trim()||l.body.length>1000||typeof l.writtenAt!=='string'||!/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/.test(l.writtenAt)||isNaN(Date.parse(l.writtenAt))||new Date(l.writtenAt).toISOString()!==l.writtenAt||(l.writtenDate!==undefined&&!validDate32(l.writtenDate)))throw Error('Lá thư trong bản sao không hợp lệ.');}
  });
}
function syncLetterStamps37(){
  S.stampLetters=S.stampLetters||{};var items=treeItems30();
  STAMP_MILESTONES37.forEach(function(m){if(items.length>=m&&!S.stampLetters[m])S.stampLetters[m]={milestone:m,stampId:STAMP_CATALOG37[m].id,earnedAt:items[m-1].date,draft:'',letter:null};});
}
function stampRecords37(){return STAMP_MILESTONES37.map(function(m){return (S.stampLetters||{})[m];}).filter(Boolean);}
function writtenLetters37(){return stampRecords37().filter(function(r){return !!r.letter;});}
function letterDay37(r){return r.letter.writtenDate||dk(new Date(r.letter.writtenAt));}
function stampArt37(m){
  var leaf=function(x,y,side,size){return '<path d="M'+x+' '+y+'q'+(side*size*.6)+' '+(-size)+' '+(side*size)+' '+(-size*.6)+'q'+(-side*size*.15)+' '+(size*.7)+' '+(-side*size)+' '+(size*.6)+'" fill="#7C9F75"/>';};
  var art='<ellipse cx="60" cy="87" rx="39" ry="5" fill="#D2DAC0"/>';
  if(m===1||m===3){art+='<path d="M59 82Q61 60 57 42" fill="none" stroke="#587F61" stroke-width="3.5" stroke-linecap="round"/>'+leaf(59,61,1,30)+leaf(58,48,-1,25);if(m===1)art+='<circle cx="91" cy="25" r="9" fill="#E0C571" opacity=".8"/>';else art+='<path d="M60 76v14m0-7-15 9m15-5 13 9m-20-9-3 9m16-6 1 7" fill="none" stroke="#B39462" stroke-width="1.8" stroke-linecap="round"/><path d="M25 76Q60 69 95 76" fill="none" stroke="#CDBA91" stroke-width="1.4"/>';}
  else{var stems=m===6?[[57,21,5]]:[[36,34,4],[60,14,5],[83,29,4]];stems.forEach(function(s,i){art+='<path d="M'+s[0]+' 85Q'+(s[0]-5)+' 53 '+(s[0]+2)+' '+s[1]+'" fill="none" stroke="#587F66" stroke-width="'+s[2]+'" stroke-linecap="round"/>';for(var j=0;j<3;j++){var y=s[1]+14+j*17;art+='<path d="M'+(s[0]-3)+' '+y+'h6" stroke="#C4D4AD" stroke-width="1.8"/>';art+=leaf(s[0],y+5,(j+i)%2?-1:1,m===6?24:19);}});if(m===6)art+='<circle cx="89" cy="22" r="11" fill="#E0C571"/>';}
  return '<svg viewBox="0 0 120 100" fill="none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">'+art+'</svg>';
}
function stampHTML37(m,small){var d=STAMP_CATALOG37[m];return '<div class="postage37 stamp-'+m+(small?' postage-small37':'')+'" aria-label="Tem '+esc(d.name)+'"><small>SHIN ROUTINE</small>'+stampArt37(m)+'<b>'+esc(d.name)+'</b><em>'+esc(d.caption)+'</em></div>';}
function envelopeSVG37(m){return '<svg viewBox="0 0 66 44" fill="none" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"><rect x=".8" y=".8" width="64.4" height="42.4" rx="3" fill="#FFF9E9" stroke="#BEAA7B" stroke-width="1.6"/><path d="M2 2 33 25 64 2" fill="#F0EAD7" stroke="#C6B993" stroke-width="1"/><path d="m2 42 22-17m40 17L43 25" stroke="#D0C4A3" stroke-width="1"/><rect x="49" y="4" width="12" height="15" rx="1" fill="#E5EBCF" stroke="#A9A16B" stroke-dasharray="1.5 1"/>'+stampArt37(m).replace('<svg ','<svg x="49" y="6" width="12" height="11" ')+'<circle cx="33" cy="26" r="2.6" fill="#B39462" opacity=".55"/></svg>';}
function pendingStampRow37(){
  var pending=stampRecords37().filter(function(r){return !r.letter;});if(!pending.length)return '';var draft=pending.some(function(r){return !!String(r.draft||'').trim();}),first=pending[0];
  return '<button class="stamp-pending37" data-act="stampPending37">'+stampHTML37(first.milestone,true)+'<span><b>'+pending.length+' tem chờ lời nhắn</b><small>'+(draft?'Có lời nhắn đang viết dở.':'Dành vài dòng cho điều bạn trân quý.')+'</small></span>'+ic('arrow')+'</button>';
}
function letterList37(){var list=writtenLetters37().slice().sort(function(a,b){return b.letter.writtenAt.localeCompare(a.letter.writtenAt);});if(!list.length)return '';return '<details class="letter-list37"><summary>'+list.length+' lá thư trên cây</summary>'+list.map(function(r){return '<button data-act="letterRead37" data-v="'+r.milestone+'">'+envelopeSVG37(r.milestone)+'<span>'+esc(STAMP_CATALOG37[r.milestone].name)+'<time datetime="'+esc(r.letter.writtenAt)+'">'+treeDate30(letterDay37(r))+'</time></span>'+ic('arrow')+'</button>';}).join('')+'</details>';}
function openPendingStamps37(){
  syncTree();var pending=stampRecords37().filter(function(r){return !r.letter;});if(!pending.length)return;if(pending.length===1){openStamp37(pending[0].milestone,String(pending[0].draft||'').trim()?'compose':'gift');return;}
  openOv('<div class="sh__h"><b>Tem của bạn</b><button class="x" data-act="close" aria-label="Đóng">'+ic('x')+'</button></div><div class="letter-content37 stamp-choices37">'+pending.map(function(r){return '<button class="stamp-pending37" data-act="stampOpen37" data-v="'+r.milestone+'">'+stampHTML37(r.milestone,true)+'<span><b>'+esc(STAMP_CATALOG37[r.milestone].name)+'</b><small>'+(String(r.draft||'').trim()?'Viết tiếp lời nhắn':'Mốc '+r.milestone+' thói quen đạt cấp 2')+'</small></span>'+ic('arrow')+'</button>';}).join('')+'</div>',true);$('.sheet',OV).classList.add('letter-sheet37');
}
function openStamp37(m,mode,habit){
  m=+m;var r=(S.stampLetters||{})[m];if(!r)return;var origin=NBOPEN?'notebook':'journey',scroll=window.scrollY;
  var oldToast=$('#toast');if(oldToast)oldToast.classList.remove('show');
  openOv('',true);LETTER_FLOW37={milestone:m,mode:r.letter?'read':mode==='compose'?'compose':'gift',habit:habit||null,origin:origin,scroll:scroll};$('.sheet',OV).classList.add('letter-sheet37');OV.setAttribute('aria-labelledby','letterTitle37');drawLetter37();
}
function drawLetter37(){
  var f=LETTER_FLOW37;if(!f||!OV)return;var m=f.milestone,r=S.stampLetters[m],d=STAMP_CATALOG37[m],mode=f.mode,body='';
  var title=mode==='read'?'Lá thư của bạn':mode==='compose'?'Một lời nhắn của bạn':mode==='sealing'?'Gấp lại một điều quý':'Một con tem dành cho bạn';
  if(mode==='gift')body='<div class="letter-gift37">'+stampHTML37(m)+'<h2>'+esc(d.name)+'</h2><p>'+esc(d.meaning)+'</p><p class="letter-invite37">Con tem đánh dấu mốc '+m+' thói quen đạt cấp 2.<br>Bạn muốn viết một lời nhắn để giữ lại không?</p><div class="letter-footer37"><button class="btn" data-act="letterCompose37">Viết một lời nhắn</button><button class="week-link" data-act="letterBack37">Để sau, giữ tem giúp mình</button></div></div>';
  else if(mode==='compose')body='<div class="letter-compose37"><div class="letter-stamp-heading37">'+stampHTML37(m,true)+'<div><b>'+esc(d.name)+'</b><small>'+esc(d.caption)+'</small></div></div><label class="lbl" for="letterText37">Lời nhắn của bạn</label><p class="letter-hint37" id="letterHint37">Gửi tôi ở tương lai, hoặc người quan trọng với mình…</p><textarea class="inp" id="letterText37" data-in="letterDraft37" rows="6" maxlength="1000" aria-describedby="letterHint37 letterError37" placeholder="Điều bạn muốn nhắn gửi hôm nay…">'+esc(r.draft||'')+'</textarea><p class="letter-error37" id="letterError37" role="alert" hidden></p><div class="letter-footer37"><button class="btn" data-act="letterSeal37"'+(String(r.draft||'').trim()?'':' disabled')+'>Gấp thư và treo lên cây</button><button class="week-link" data-act="letterBack37">Để mình viết sau</button></div></div>';
  else if(mode==='read'){body='<article class="letter-paper37"><div class="letter-read-head37">'+stampHTML37(m)+'<div><small>MỘT MỐC ĐÁNG NHỚ</small><p>'+m+' thói quen đạt cấp 2</p></div></div><p class="letter-meaning37">'+esc(d.meaning)+'</p><p class="letter-body37">'+esc(r.letter.body)+'</p><time class="letter-date37" datetime="'+esc(r.letter.writtenAt)+'">Viết ngày '+treeDate30(letterDay37(r))+'</time></article><div class="letter-footer37"><button class="week-link" data-act="letterBack37">Về cây thành tựu</button></div>';}
  else body='<div class="letter-fold37" role="status" aria-live="polite"><div class="letter-fold-paper37">'+stampArt37(m)+'<i></i><i></i><i></i></div><div class="letter-fold-envelope37">'+envelopeSVG37(m)+'</div><p>Giữ lại một điều có ý nghĩa.</p></div>';
  sheetSet('<div class="sh__h"><b id="letterTitle37">'+title+'</b><button class="x" data-act="letterBack37" aria-label="Đóng">'+ic('x')+'</button></div><div class="letter-content37">'+body+'</div>');
}
function stashLetterDraft37(now){
  var f=LETTER_FLOW37,input=$('#letterText37');if(!f||f.mode!=='compose'||!input)return;var r=(S.stampLetters||{})[f.milestone];if(!r||r.letter)return;r.draft=input.value.slice(0,1000);save(!!now);
}
function letterDraftInput37(){
  if(!LETTER_FLOW37||LETTER_FLOW37.mode!=='compose')return;stashLetterDraft37(false);var input=$('#letterText37'),button=$('[data-act="letterSeal37"]',OV),error=$('#letterError37');if(button)button.disabled=!input.value.trim();if(error)error.hidden=true;
}
function sealLetter37(){
  var f=LETTER_FLOW37;if(!f||f.mode!=='compose')return;var r=S.stampLetters[f.milestone],input=$('#letterText37'),text=input?input.value.trim():'',error=$('#letterError37');if(!r||r.letter)return;
  if(!text||text.length>1000){error.textContent='Viết một lời nhắn ngắn trước khi gấp thư nhé.';error.hidden=false;if(input)input.focus();return;}
  var written=new Date();r.letter={body:text,writtenAt:written.toISOString(),writtenDate:dk(written)};r.draft='';
  if(!save(true)){r.letter=null;r.draft=input.value.slice(0,1000);error.textContent='Chưa lưu được thư. Lời nhắn vẫn ở đây, bạn thử lại nhé.';error.hidden=false;return;}
  f.mode='sealing';drawLetter37();if(reduceMotion()){finishLetter37();return;}var overlay=OV;LETTER_TIMER37=setTimeout(function(){if(LETTER_FLOW37===f&&OV===overlay)finishLetter37();},1250);
}
function finishLetter37(){
  if(!LETTER_FLOW37)return;var m=LETTER_FLOW37.milestone;closeOv(true);LETTER_FRESH37=m;TREE_REPLAY34=false;PG=1;JOURNEY_TAB31='tree';render();window.scrollTo(0,0);toast('Lá thư đã có một chỗ trên cây.');setTimeout(function(){if(LETTER_FRESH37===m)LETTER_FRESH37=null;},1800);
}
function letterBack37(){
  var f=LETTER_FLOW37;if(!f)return;var habit=f.habit,origin=f.origin,scroll=f.scroll,sealed=f.mode==='sealing';closeOv(true);
  if(habit&&!sealed&&H(habit)){offerTier(habit);return;}if(origin==='notebook'&&!sealed){NBTAB='sum';openNb();return;}
  TREE_REPLAY34=false;PG=1;JOURNEY_TAB31='tree';render();window.scrollTo(0,scroll);
}
function treeLettersSVG37(stage,stems,sx,order,interactive){
  var slots=stage>=4?[[65,20],[162,20],[259,20],[356,20]]:stage===3?[[210,46],[63,225],[350,87]]:stage===2?[[138,80],[270,309]]:[[282,185]],branches='',tags='';
  writtenLetters37().forEach(function(r,i){var pos=slots[STAMP_MILESTONES37.indexOf(r.milestone)]||[85+i*80,310],x=pos[0],y=pos[1],st=stems.reduce(function(best,s){return Math.abs(s.x-x)<Math.abs(best.x-x)?s:best;},stems[0]),rootY=Math.min(324,Math.max(st.top+22,y+25)),rootX=sx(st,rootY),label='Đọc thư · '+STAMP_CATALOG37[r.milestone].name;
    branches+='<path d="M'+rootX.toFixed(1)+' '+rootY+'Q'+((rootX+x)/2).toFixed(1)+' '+(y-25)+' '+x+' '+(y-12)+'" fill="none" stroke="#91AA87" stroke-width="1.4" stroke-linecap="round"/>';
    tags+='<g class="tree-letter37'+(LETTER_FRESH37===r.milestone?' letter-fresh37':'')+'" style="transform-origin:'+x+'px '+(y-12)+'px;--tag-order34:'+(order+i)+'"'+(interactive?' role="button" tabindex="0" data-act="letterRead37" data-v="'+r.milestone+'" aria-label="'+esc(label)+'"':'')+'><title>'+esc(label)+'</title><rect class="letter-hit37" x="'+(x-34)+'" y="'+(y-18)+'" width="68" height="64" rx="8" fill="transparent"/><path d="M'+x+' '+(y-12)+'v12" stroke="#9B9273" stroke-width="1.2"/><g transform="translate('+(x-22)+' '+y+') rotate('+[-4,3,-3,4][i%4]+' 22 0)">'+envelopeSVG37(r.milestone).replace('<svg ','<svg width="44" height="29.33" ')+'</g></g>';
  });return {branches:branches,tags:tags};
}
