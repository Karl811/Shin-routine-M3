/* Shared presentation primitives. Habit records, goals, XP and storage rules
   remain in the existing application modules. No runtime font measurement. */
function shinFlowProgress(index,total,label,inverse){
  var step=Math.max(1,Math.min(total,index+1));
  return '<div class="shin-flow-progress'+(inverse?' shin-flow-progress--inverse':'')+'"><div class="shin-flow-progress__meta"><span>'+esc(label||'Tiến trình')+'</span><span>Bước '+step+'/'+total+'</span></div><div class="shin-flow-progress__track" role="progressbar" aria-label="'+esc(label||'Tiến trình')+'" aria-valuemin="1" aria-valuemax="'+total+'" aria-valuenow="'+step+'" aria-valuetext="Bước '+step+' trên '+total+'"><i style="width:'+(step/total*100)+'%"></i></div></div>';
}
function shinWizardHeader(state){
  var names={bad:'Chọn việc muốn giảm',quiz:'Thử nhanh',cn:'Tên và hình thức',k:'Chọn lúc thực hiện',a:'Chọn hành động',w:'Điều bạn hướng tới',y:'Lý do bạn chọn',goal16:'Mục tiêu mỗi tuần'};
  var step=names[state.steps[state.i]]||'Công thức của bạn';
  var title=state.cust?(state.edit?'Sửa thẻ riêng':'Tạo thẻ riêng'):(state.edit?'Sửa thói quen':'Rèn thói quen');
  return '<header class="sh__h shin-wizard-head">'+(state.i?'<button class="m3-icon-button" data-act="stPrev" aria-label="Bước trước">'+mi('arrow_back')+'</button>':'')+'<div><b id="f2DialogTitle" title="'+esc(title)+'">'+esc(title)+'</b></div><button class="m3-icon-button" data-act="close" aria-label="Đóng">'+mi('close')+'</button></header>'+shinFlowProgress(state.i,state.steps.length,step);
}
/* Use a short greeting without changing the stored full name. */
var shinDesignRenderHead=renderHead;
renderHead=function(){
  shinDesignRenderHead();
  var title=document.getElementById('pageTitle35');
  if(title&&PG===0){var full=String(S.name||'bạn').trim(),parts=full.split(/\s+/),name=parts.length>2?parts.slice(-2).join(' '):full;title.textContent='Chào '+name;title.title='Chào '+full;title.setAttribute('aria-label','Chào '+full);}
  else if(title){title.removeAttribute('title');title.removeAttribute('aria-label');}
};
document.addEventListener('keydown',function(e){
  var target=e.target.closest('.goal16-buttons [role=radio]');
  if(!target||!['ArrowLeft','ArrowRight','ArrowUp','ArrowDown','Home','End'].includes(e.key))return;
  e.preventDefault();e.stopPropagation();
  var items=Array.from(target.parentElement.querySelectorAll('[role=radio]')),index=items.indexOf(target);
  index=e.key==='Home'?0:e.key==='End'?items.length-1:(index+(['ArrowRight','ArrowDown'].includes(e.key)?1:items.length-1))%items.length;
  var value=items[index].dataset.v;items[index].click();
  requestAnimationFrame(function(){var next=document.querySelector('.goal16-buttons [data-v="'+value+'"]');if(next)next.focus({preventScroll:true});});
});
