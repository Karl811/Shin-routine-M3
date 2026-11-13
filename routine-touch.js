/* M3.3.9 · approved gestures and optional Shin invitations. No storage migration. */
function touchSwipeThreshold(width){return Math.max(72,Math.min(96,width*.25));}
function touchSwipeTravel(distance,threshold){var n=Math.abs(distance),travel=n<=threshold?n:threshold+(n-threshold)*.35;return Math.sign(distance)*Math.min(150,travel);}
function touchSwipeUnder(){return '<div class="growth-swipe-under" aria-hidden="true"><span><img src="assets/touch/circle-check.svg" alt="" width="32" height="32"><small>Đã làm</small></span><span><img src="assets/touch/circle-minus.svg" alt="" width="32" height="32"><small>Chưa làm</small></span></div>';}
var touchToday=vToday;
vToday=function(){return touchToday().replace(/<div class="growth-swipe-under" aria-hidden="true">[\s\S]*?<\/div>(?=<article class="flow-today-row)/g,touchSwipeUnder());};

/* Only the most recent scheduled offer is invited. Skipping never reveals a backlog. */
growthOffer=function(){var g=growthState();if(!g.enabled)return null;var active=Object.keys(g.challenges).sort().find(function(k){return ['accepted','later'].includes(g.challenges[k].status);});if(active)return active;var w=wkStart(dk());for(var i=1;i>=0;i--){var key=w+'_'+i;if(dk()>=addD(w,i?4:1))return g.challenges[key]?null:key;}return null;};
growthChallengePanel=function(){
  var key=growthOffer();if(!key)return '';var a=growthState().challenges[key],t=GROWTH_CHALLENGES[a?a.template:growthChallengeTemplate(key)];
  if(a)return '<section class="touch-challenge touch-challenge-active" data-flow-type aria-label="Thử thách đã nhận">'+shin('proud')+'<div class="touch-challenge-bubble"><small>THỬ THÁCH BẠN ĐÃ NHẬN</small><h3>'+esc(t.title)+'</h3><p>'+esc(t.text)+'</p><p class="touch-challenge-question">Khi đã thử, bạn trở lại kể Shin nghe nhé.</p></div><div class="touch-challenge-actions"><button class="flow-link" data-act="growthChallengeSkip" data-v="'+key+'">Lần này bỏ qua</button><button class="btn" data-act="growthChallengeOpen" data-v="'+key+'">'+mi('edit_note')+'Viết cảm nhận</button></div></section>';
  var action=t.text.charAt(0).toLocaleLowerCase('vi')+t.text.slice(1);
  return '<section class="touch-challenge" data-flow-type aria-label="Lời mời thử thách của Shin">'+shin('hi')+'<div class="touch-challenge-bubble"><h3>Shin có một lời mời dành cho bạn</h3><p>Hôm nay, '+esc(S.name||'bạn')+' hãy thử '+esc(action)+'</p><p class="touch-challenge-question">Bạn có sẵn sàng nhận thử thách này không?</p></div><div class="touch-challenge-actions"><button class="flow-link" data-act="growthChallengeSkip" data-v="'+key+'">Lần này bỏ qua</button><button class="btn" data-act="touchChallengeAccept" data-v="'+key+'">Mình thử nhé '+mi('arrow_forward')+'</button></div></section>';
};
function touchAcceptChallenge(key){if(!/^\d{4}-\d{2}-\d{2}_[01]$/.test(key)||growthOffer()!==key)return false;var g=growthState();if(g.challenges[key])return false;g.challenges[key]={status:'accepted',template:growthChallengeTemplate(key),note:'',credited:false};save(true);return true;}

/* Match the existing flip button, including its first-use guidance flag. */
function touchFlipCard(focusButton){
  if(!CARD||CARD.tab==='journal'||!$('.flow-card-stage .flow-paper',OV))return;
  CARD.back=!CARD.back;if(!S.gFlip){S.gFlip=1;save();}drawCard();
  var paper=$('.flow-card-stage .flow-paper',OV);if(paper&&!reduceMotion())paper.animate([{transform:'perspective(900px) rotateY(-18deg)',opacity:.65},{transform:'perspective(900px) rotateY(0)',opacity:1}],{duration:260,easing:'cubic-bezier(.2,.8,.2,1)'});
  if(focusButton){var b=$('[data-act=flowFlip]',OV);if(b)b.focus({preventScroll:true});}
}
function touchCardControl(target){return !!target.closest('button,a,input,textarea,select,label,summary,[role=button],[role=tab],[data-act],[contenteditable=true]');}
var TOUCH_GESTURE=null;
function touchResetGesture(g){
  if(!g)return;if(g.frame)cancelAnimationFrame(g.frame);
  if(g.kind==='row'){g.row.style.transform='';g.row.style.willChange='';g.shell.classList.remove('touch-swiping','touch-ready','touch-left');}
}
function touchCancelGesture(){var g=TOUCH_GESTURE;TOUCH_GESTURE=null;touchResetGesture(g);}
document.addEventListener('pointerdown',function(e){
  if(e.button!==0||e.isPrimary===false)return;touchCancelGesture();
  var row=e.target.closest('[data-flow-swipe]'),paper=e.target.closest('.flow-card-stage .flow-paper');
  if(row){if(e.target.closest('.flow-card-entry,.flow-row-plus'))return;var shell=row.closest('.growth-swipe-shell');if(!shell)return;TOUCH_GESTURE={kind:'row',id:row.dataset.flowSwipe,row:row,shell:shell,threshold:touchSwipeThreshold(row.getBoundingClientRect().width),capture:row};}
  else if(paper&&CARD&&CARD.tab!=='journal'&&!touchCardControl(e.target)){TOUCH_GESTURE={kind:'card',capture:paper,card:CARD.id};}
  else return;
  var g=TOUCH_GESTURE;g.x=e.clientX;g.y=e.clientY;g.pointer=e.pointerId;g.locked=false;g.dx=0;
});
document.addEventListener('pointermove',function(e){
  var g=TOUCH_GESTURE;if(!g||g.pointer!==e.pointerId||g.cancelled)return;var dx=e.clientX-g.x,dy=e.clientY-g.y;
  if(!g.locked){if(Math.abs(dy)>12&&Math.abs(dy)>Math.abs(dx)){g.cancelled=true;touchResetGesture(g);return;}if(Math.abs(dx)<=12||Math.abs(dx)<Math.abs(dy)*1.5)return;g.locked=true;try{g.capture.setPointerCapture(e.pointerId);}catch(ignore){}if(g.kind==='row'){g.row.style.willChange='transform';g.shell.classList.add('touch-swiping');}}
  e.preventDefault();g.dx=dx;
  if(g.kind==='row'&&!g.frame)g.frame=requestAnimationFrame(function(){g.frame=0;if(TOUCH_GESTURE!==g)return;g.row.style.transform='translate3d('+touchSwipeTravel(g.dx,g.threshold)+'px,0,0)';g.shell.classList.toggle('touch-ready',Math.abs(g.dx)>=g.threshold);g.shell.classList.toggle('touch-left',g.dx<0);});
},{passive:false});
document.addEventListener('pointerup',function(e){
  var g=TOUCH_GESTURE;TOUCH_GESTURE=null;if(!g||g.pointer!==e.pointerId){touchResetGesture(g);return;}
  var dx=e.clientX-g.x,dy=e.clientY-g.y,horizontal=g.locked&&Math.abs(dx)>Math.abs(dy)*1.5;
  touchResetGesture(g);
  if(g.locked||Math.abs(dx)>12||Math.abs(dy)>12)FLOW_SWIPE_UNTIL=Date.now()+350;
  if(!horizontal)return;
  if(g.kind==='card'){if(Math.abs(dx)>=64&&CARD&&CARD.id===g.card)touchFlipCard(false);return;}
  if(Math.abs(dx)<g.threshold||!g.row.isConnected)return;
  openNote(g.id,dk());if(!NT||NT.id!==g.id)return;NT.ans=dx>0?'y':'n';flowStashNote();drawNote29();
  var input=$('#ntIn');if(input){input.focus({preventScroll:true});input.setSelectionRange(input.value.length,input.value.length);}
});
document.addEventListener('pointercancel',touchCancelGesture);
document.addEventListener('lostpointercapture',function(e){if(TOUCH_GESTURE&&TOUCH_GESTURE.pointer===e.pointerId)touchCancelGesture();});
window.addEventListener('blur',touchCancelGesture);
document.addEventListener('visibilitychange',function(){if(document.hidden)touchCancelGesture();});
document.addEventListener('click',function(e){
  if(Date.now()<FLOW_SWIPE_UNTIL)return;
  var accept=e.target.closest('[data-act=touchChallengeAccept]');if(accept){e.preventDefault();e.stopImmediatePropagation();if(touchAcceptChallenge(accept.dataset.v))renderPage();return;}
  var paper=e.target.closest('.flow-card-stage .flow-paper');if(paper&&!touchCardControl(e.target)){e.preventDefault();touchFlipCard(false);}
},true);
