/* Approved M3.3.7 fronts, including custom cards. No learner data is changed. */
var BAND_PATTERNS={1:'waves',2:'ruled',3:'grid',4:'petals'};
var BAND_CUSTOM_PATTERNS={5:'petals',6:'waves',7:'petals',8:'ruled',9:'grid',10:'waves'};
function bandCardIcon(id){var x=HMAP[id];return x&&x.custom?glyph('cu_'+(x.icon||'sao'),'var(--flow-paper)').replace(/#fff/gi,'currentColor'):flowIcon(id);}
var bandOriginalFront=flowFront;
flowFront=function(id){var x=HMAP[id],pattern=x&&(x.custom?BAND_CUSTOM_PATTERNS[x.g]:BAND_PATTERNS[x.g]);if(!pattern)return bandOriginalFront(id);var u=H(id),n=u?daysAt(id):0,need=u?needOf(id):0;
 return '<article class="flow-paper flow-front band-front band-'+pattern+flowGroup(id)+'"><div class="band-rail" aria-hidden="true"><span class="band-icon">'+bandCardIcon(id)+'</span><span class="band-label">KAIZEN CARD</span></div><div class="band-pattern" aria-hidden="true"><span></span><span></span><span></span><span></span></div>'+flowCardTop(id)+'<div class="band-title"><div class="band-title-copy">'+(x.custom?'<small class="growth-personal band-personal">'+mi('edit')+'Thẻ của '+esc(S.name||'bạn')+'</small>':'')+'<h2>'+esc(hname(id))+'</h2></div>'+(u?'<button class="flow-card-edit" data-act="edit" data-v="'+id+'" aria-label="Sửa công thức">'+mi('edit')+'</button>':'')+'</div><div class="flow-formula band-formula"><div class="band-block band-action"><small>MÌNH SẼ</small><p class="flow-action">'+esc(u?u.act:x.act||x.tiers[0])+'</p></div><div class="band-block band-anchor"><small>KHI</small><p>'+esc(u?u.anchor:(x.anchors||[])[0]||'đến lúc mình đã chọn')+'</p></div>'+(u&&u.who?'<p class="flow-who">Trở thành '+esc(u.who)+'</p>':'')+'</div>'+(u?'<div class="flow-card-days">'+f2Days(id)+'</div><div class="flow-card-owner"><span><b>'+esc(S.name)+'</b><small>Rèn từ '+dm(u.since)+'</small></span><span>'+Math.min(n,need)+' / '+need+' '+unitOf(id)+'</span></div><div class="m3-progress-track"><i style="width:'+Math.round(lvPct(id)*100)+'%"></i></div>':'')+'</article>';
};
/* Both faces retain a readable type scale; short viewports scroll their content
   rather than silently shrinking every line to squeeze the card into the frame. */
var bandOriginalFit=flowFitCard;
flowFitCard=function(){var stage=$('.flow-card-stage');if(stage&&stage.style.getPropertyValue('--card-scale')!=='1')stage.style.setProperty('--card-scale','1');};
var balanceOriginalBack=flowBack;
flowBack=function(id){var top=flowCardTop(id);return balanceOriginalBack(id).replace(top,top+'<h2 class="balance-back-title">'+esc(hname(id))+'</h2>');};
