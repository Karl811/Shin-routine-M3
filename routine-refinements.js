/* M3.3.12 · local presentation and viewport fixes. Stored records stay intact. */
var ref12Week=flowWeek;
flowWeek=function(){return ref12Week().replace(/<div class="m3-week-reflect">[\s\S]*?<\/textarea><\/div>/,'').replace('class="week-link flow-week-link"','class="week-link flow-week-link ref12-week-open"').replace('>Xem thẻ tuần</button>','>'+mi('calendar_month')+'Mở thẻ tuần'+mi('arrow_forward')+'</button>');};
var ref12Hero=ci40HabitHero;
ci40HabitHero=function(id,record){return ref12Hero(id,record).replace('Xem thẻ</button>','Xem thẻ'+mi('arrow_forward')+'</button>');};
var ref12Letters=letterList37;
letterList37=function(){return ref12Letters().replace(/^<details class="letter-list37"><summary>[\s\S]*?<\/summary>/,'<section class="letter-list37 ref12-letters" aria-label="Những lá thư của bạn">').replace(/<\/details>$/,'</section>');};
var ref12Tree=treePanel;
treePanel=function(){return ref12Tree().replace('Gửi một điều trân quý','Gửi một lời nhắn').replace('Những lá thư giữ lại một phần hành trình của bạn.','Viết cho mình, hoặc một người bạn muốn nhắn gửi.');};
var ref12DrawWeek=drawWeek;
drawWeek=function(){ref12DrawWeek();var sheet=OV&&$('.sheet',OV);if(sheet){sheet.classList.add('ref12-week');sheet.setAttribute('data-flow-type','');}};
var ref12DrawLesson=drawLesson;
drawLesson=function(){ref12DrawLesson();var content=OV&&$('.f3-lesson-content',OV);if(content){content.setAttribute('data-flow-type','');content.closest('.sheet').classList.add('ref12-lesson');}};
var ref12DrawLetter=drawLetter37;
drawLetter37=function(){ref12DrawLetter();var sheet=OV&&$('.sheet',OV);if(sheet)sheet.classList.toggle('ref12-letter-read',!!LETTER_FLOW37&&LETTER_FLOW37.mode==='read');};
var ref12OpenAward=openTreeCard30;
openTreeCard30=function(id){ref12OpenAward(id);var sheet=OV&&$('.sheet',OV);if(sheet&&$('.tree-detail30',sheet)){sheet.classList.add('ref12-achievement');sheet.setAttribute('data-flow-type','');}};

/* Fit all original fields into the available phone card area. No truncation,
   hidden fields, storage writes, or changes to desktop typography. */
var ref12FitBase=flowFitCard;
flowFitCard=function(){
  var stage=$('.flow-card-stage'),paper=stage&&$('.flow-paper',stage),body=stage&&stage.parentElement;if(!paper||!body)return;
  if(innerWidth>=768){stage.style.height='';stage.style.removeProperty('--ref12-s');paper.style.transform='';paper.style.transformOrigin='';ref12FitBase();return;}
  var cs=getComputedStyle(body),height=Math.floor(body.clientHeight-parseFloat(cs.paddingTop)-parseFloat(cs.paddingBottom));if(height<100)return;
  stage.style.height=height+'px';paper.style.transform='';paper.style.transformOrigin='';stage.style.setProperty('--ref12-s','1');
  if(paper.getBoundingClientRect().height>height){var lo=.5,hi=1;for(var n=0;n<9;n++){var s=(lo+hi)/2;stage.style.setProperty('--ref12-s',s.toFixed(4));if(paper.getBoundingClientRect().height<=height)lo=s;else hi=s;}stage.style.setProperty('--ref12-s',lo.toFixed(4));}
  var used=paper.getBoundingClientRect().height;
  if(used>height+1){paper.style.transformOrigin='top center';paper.style.transform='scale('+(height/used).toFixed(4)+')';}
};

/* Entries appear in reading order when their part of the timeline enters the
   viewport. The native More action loads the next batch near the end. */
var REF12_OBSERVERS=new Map(),REF12_FRAME=0,REF12_PAPER=null,REF12_CARDWATCH=null;
function ref12WatchCard(){
  var paper=$('.flow-card-stage .flow-paper');if(paper===REF12_PAPER)return;
  if(REF12_CARDWATCH)REF12_CARDWATCH.disconnect();REF12_PAPER=paper;
  if(!paper||!window.ResizeObserver)return;
  REF12_CARDWATCH=new ResizeObserver(function(){var stage=paper.parentElement;if(paper.isConnected&&innerWidth<768&&paper.getBoundingClientRect().height>stage.clientHeight+.5)flowFitCard();});
  REF12_CARDWATCH.observe(paper);
}
function ref12Observer(root){
  if(REF12_OBSERVERS.has(root))return REF12_OBSERVERS.get(root);
  var observer=new IntersectionObserver(function(entries){entries.forEach(function(entry){if(!entry.isIntersecting)return;var el=entry.target;observer.unobserve(el);if(el.hasAttribute('data-ref12-more')){if(el.isConnected&&!el.disabled)el.click();}else{el.classList.add('ref12-shown');}});},{root:root,rootMargin:'0px 0px 80px 0px',threshold:.06});REF12_OBSERVERS.set(root,observer);return observer;
}
function ref12Scan(){
  REF12_FRAME=0;ref12WatchCard();if(!window.IntersectionObserver)return;
  REF12_OBSERVERS.forEach(function(obs,root){if(root&&!root.isConnected){obs.disconnect();REF12_OBSERVERS.delete(root);}});
  var entries=$$('.growth-week[open] ol>li,.m3-milestones[open] .journey-timeline31>li,.journey-past33[open] .journey-timeline31>li');
  entries.forEach(function(el,i){if(el.dataset.ref12Ready)return;el.dataset.ref12Ready='1';if(reduceMotion())return;el.classList.add('ref12-reveal');el.style.setProperty('--ref12-delay',(i%4)*55+'ms');ref12Observer(el.closest('.sheet')).observe(el);});
  $$('[data-act="milestoneMore31"],[data-act="habitMore33"]').forEach(function(button){if(button.dataset.ref12More)return;var details=button.closest('details');if(details&&!details.open)return;button.dataset.ref12More='1';ref12Observer(button.closest('.sheet')).observe(button);});
}
function ref12Schedule(){if(!REF12_FRAME)REF12_FRAME=requestAnimationFrame(ref12Scan);}
document.addEventListener('DOMContentLoaded',function(){new MutationObserver(ref12Schedule).observe(document.body,{childList:true,subtree:true});ref12Schedule();});
document.addEventListener('toggle',function(e){if(e.target.matches('.growth-week,.m3-milestones,.journey-past33'))ref12Schedule();},true);
if(document.fonts){document.fonts.ready.then(function(){flowFitCard();});document.fonts.addEventListener('loadingdone',function(){requestAnimationFrame(flowFitCard);});}
