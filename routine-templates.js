/* M3.3.2: 30 optional recipes; existing cards and storage stay intact. */
var ROUTINE_TEMPLATES = [
 {id:'kiem-tin',base:'quansat',name:'Kiểm chứng trước khi chia sẻ',k:'định chia sẻ một tin',a:'xem nguồn gốc và ngày đăng trước',w:'người kiểm tra thông tin'},
 {id:'tap-trung',base:'bot',bad:'mxh',name:'Học tập trung 5 phút',k:'ngồi vào bàn học',a:'để điện thoại xa tay, học một việc 5 phút',w:'người làm chủ sự tập trung'},
 {id:'noi-nhip',base:'loihua',name:'Bắt đầu lại khi thấy nản',k:'bắt đầu giờ tự học dù đang nản',a:'ôn 3 từ đã học trước khi học bài mới',w:'người kiên trì từng chút'},
 {id:'ly-do',base:'loihua',name:'Nhớ lý do mình học',k:'mở vở tiếng Nhật',a:'đọc một câu mình viết về lý do muốn sang Nhật',w:'người nhớ điều mình đang hướng tới'},
 {id:'bat-dau',base:'loihua',name:'Làm ngay câu đầu tiên',k:'đến giờ tự học',a:'mở đúng bài cần làm và làm câu đầu tiên',w:'người chủ động bắt đầu'},
 {id:'tu-giac',base:'loihua',name:'Tự bắt đầu, không chờ nhắc',k:'ăn tối xong',a:'xem việc cần làm và bắt đầu một việc nhỏ',w:'người tự giác'},
 {id:'di-bo',base:'vandong',name:'Đi bộ sau giờ học',k:'học xong buổi chiều',a:'mang giày và đi bộ 3 phút',w:'người biết chăm sóc sức khỏe'},
 {id:'the-thao',base:'vandong',name:'Vận động cùng một người bạn',k:'đến chiều thứ Bảy',a:'rủ một bạn đi bộ 10 phút',w:'người cùng bạn giữ sức khỏe',goal:1},
 {id:'an-sang',base:'anuong',name:'Chuẩn bị bữa sáng',k:'soạn cặp buổi tối',a:'chuẩn bị phần ăn sáng cho ngày mai',w:'người biết chăm sóc bản thân'},
 {id:'cung-hoc',base:'giup',name:'Giúp bạn ôn tiếng Nhật',k:'học xong phần mình',a:'hỏi bạn có muốn cùng ôn 3 từ không',w:'người đồng đội tốt'},
 {id:'phat-bieu',base:'viecko',name:'Giơ tay thử một lần',k:'thầy cô hỏi câu mình có ý trả lời',a:'giơ tay thử trả lời một lần',w:'người dám thử'},
 {id:'di-som',base:'som',name:'Ra khỏi phòng đúng giờ',k:'đến giờ ra khỏi phòng đã đặt',a:'cất điện thoại và đi ngay',w:'người đúng giờ'},
 {id:'hoc-dieu-hay',base:'quansat',name:'Học một cách làm hay',k:'tan học',a:'ghi một cách làm hay mình thấy ở người khác',w:'người biết học từ xung quanh'},
 {id:'cach-hoc',base:'quansat',name:'Hỏi một cách học mới',k:'học xong chiều thứ Sáu',a:'hỏi một bạn cách bạn ấy nhớ từ khó',w:'người chủ động tìm cách học',goal:1},
 {id:'tim-loi-giai',base:'quansat',name:'Tìm lời giải cho điều quan tâm',k:'ghi một câu hỏi vào sổ',a:'chọn một người hoặc nguồn phù hợp để hỏi',w:'người chủ động tìm hiểu'},
 {id:'cai-tien',base:'quansat',name:'Tìm một chỗ làm gọn hơn',k:'làm xong một việc hay lặp lại',a:'ghi một chỗ có thể làm gọn hơn lần sau',w:'người biết cải tiến'},
 {id:'xac-nhan',base:'horenso',name:'Nhắc lại yêu cầu trước khi làm',k:'nhận một việc được giao',a:'nói lại việc, hạn làm và hỏi mình hiểu đúng chưa',w:'người làm việc rõ ràng'},
 {id:'xin-phep',base:'horenso',name:'Báo và xin phép trước',k:'biết mình cần nghỉ hoặc sẽ đến trễ',a:'báo và xin phép thầy cô trước giờ học',w:'người có trách nhiệm'},
 {id:'vao-phong',base:'chao',name:'Xin phép trước khi vào phòng',k:'đến cửa phòng giáo viên',a:'gõ cửa, chào và xin phép vào',w:'người lịch sự'},
 {id:'giam-game',base:'bot',bad:'game',name:'Dừng game đúng giờ đã chọn',k:'mở game',a:'hẹn giờ 20 phút; chuông reo thì thoát game',w:'người làm chủ thời gian'},
 {id:'doc-hoc',base:'5phut',name:'Đọc một điều mới trên Tikme',k:'ngồi chờ vào lớp',a:'đọc một đoạn trên tikme.com, ghi một điều mới',w:'người học hỏi mỗi ngày'},
 {id:'giam-thuoc',base:'bot',bad:'khac',badOther:'Hút thuốc',name:'Theo dõi giới hạn hút thuốc',k:'kết thúc ngày',a:'ghi số điếu thực tế, so với giới hạn mình chọn',w:'người chủ động thay đổi',note:'Sửa công thức để ghi rõ giới hạn số điếu/ngày của bạn. Lên cấp vẫn cần bạn xem lại và xác nhận; app không tự suy ra mức giảm.'},
 {id:'diem-sang',name:'Nhìn ra một điểm sáng',k:'viết nhật ký tối',a:'ghi một điều tốt có thật trong ngày',w:'người nhận ra điều đáng quý',icon:'nang',note:'Điều khó chịu vẫn đáng được lắng nghe. Không cần ép mình vui hay tìm mặt tốt trong mọi chuyện.'},
 {id:'noi-that',name:'Nói thật điều mình cần',k:'muốn người mình tin hiểu mình hơn',a:'nói: mình đang thấy gì và mong được giúp gì',w:'người chia sẻ chân thành',icon:'tim'},
 {id:'go-lo',name:'Gỡ một điều đang lo',k:'nhận ra mình nghĩ đi nghĩ lại một chuyện',a:'viết điều đã biết và một bước mình có thể làm',w:'người biết chọn bước tiếp theo',icon:'but',note:'Viết ngắn rồi chọn một việc hoặc người cần hỏi, không cần phân tích mãi. Chỉ chia sẻ với người bạn tin khi muốn.'},
 {id:'ngay-mai',name:'Chuẩn bị cho ngày mai',k:'cắm sạc điện thoại buổi tối',a:'viết tối đa 3 việc cho mai, đánh dấu việc đầu',w:'người có sự chuẩn bị',icon:'but'},
 {id:'senpai',name:'Học từ người đi trước',k:'đến tối Chủ nhật',a:'gửi một câu hỏi cụ thể cho anh chị trong nghề',w:'người chủ động học hỏi',icon:'sach',goal:1},
 {id:'so-thich',name:'Giữ một sở thích lành mạnh',k:'học xong tối thứ Tư',a:'dành 5 phút hát, vẽ hoặc chơi nhạc mình thích',w:'người biết nuôi dưỡng niềm vui',icon:'nhac',goal:1},
 {id:'ghi-nhan',name:'Nói một lời ghi nhận',k:'thấy ai làm một việc tốt',a:'nói rõ việc mình trân trọng ở người ấy',w:'người biết ghi nhận người khác',icon:'cuoi',dip:true},
 {id:'hoi-tham',name:'Chủ động hỏi thăm',k:'ăn tối xong ngày Chủ nhật',a:'nhắn hoặc gọi hỏi thăm một người thân',w:'người biết quan tâm',icon:'tim',goal:1}
];

/* Existing suggestion picker can still fill all three editable fields. */
ROUTINE_TEMPLATES.forEach(function(t){if(t.base)(SUG[t.base]||(SUG[t.base]=[])).push([t.k,t.a,t.w]);});
var recipeCuStepName=cuStepName;
cuStepName=function(){return recipeCuStepName()+(ST.edit?'':recipeLibrary());};
function recipeLibrary(){return '<details><summary class="sugt">Chưa biết bắt đầu? Chọn một gợi ý</summary><p class="note">30 mẫu · Chọn một việc phù hợp. Mẫu thuộc thẻ có sẵn sẽ mở thẻ đó để tránh tạo trùng.</p><label class="lbl" for="recipeSearch">Tìm gợi ý</label><input class="inp" id="recipeSearch" type="search" maxlength="60" placeholder="Ví dụ: học, lo, game, hỏi thăm" value="'+esc(ST.recipeQuery||'')+'"><div id="recipeResults">'+recipeResults()+'</div></details>';}
function recipeNormalize(s){return String(s).toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/đ/g,'d');}
function recipeResults(){var q=recipeNormalize(ST.recipeQuery||''),list=ROUTINE_TEMPLATES.filter(function(t){return recipeNormalize(t.name+' '+t.k+' '+t.a).indexOf(q)>=0;}),shown=list.slice(0,ST.recipeLimit||5);return '<div class="sugl">'+shown.map(function(t){return '<button type="button" class="sugc" data-act="recipePick" data-v="'+t.id+'"><b>'+esc(t.name)+'</b><br>Khi '+esc(t.k)+', mình sẽ '+esc(t.a)+'.<br><small>'+(t.base?(H(t.base)?'Xem để sửa công thức thẻ: ':'Dùng thẻ có sẵn: ')+esc(HMAP[t.base].s):'Điền vào thẻ tự tạo')+'</small></button>';}).join('')+'</div>'+(list.length?'':'<p class="note">Chưa có mẫu phù hợp. Bạn vẫn có thể tự viết công thức.</p>')+(shown.length<list.length?'<button type="button" class="sugt" data-act="recipeMore">Xem thêm gợi ý ('+(list.length-shown.length)+')</button>':'');}
function recipePick(id){var t=ROUTINE_TEMPLATES.find(function(r){return r.id===id;});if(!t||!ST||!ST.cust||ST.edit)return;
 if(t.base){openStart(t.base,!!H(t.base));if(!ST||ST.id!==t.base)return;}
 else {ST.name=t.name;ST.icon=t.icon||'sao';ST.rhy=t.dip?'p':'d';}
 ST.anchor=t.k;ST.act=t.a;ST.who=t.w;ST.custom={};ST.sugOpen=false;
 if(t.bad){ST.bad=t.bad;ST.badOther=t.badOther||'';}
 if(!t.base||!H(t.base))ST.weekGoal=t.goal||7;
 ST.recipeNote=t.note||'';
 /* Review each field, including existing quiz and reduction choices. */
 ST.i=0;drawStart();
}
var recipeDrawStart=drawStart;
drawStart=function(){recipeDrawStart();if(!ST||!ST.recipeNote)return;var body=$('.sheet .lc');if(body)body.insertAdjacentHTML('beforeend','<p class="note">'+esc(ST.recipeNote)+'</p>');};
document.addEventListener('input',function(e){if(e.target.id!=='recipeSearch'||!ST||!ST.cust)return;ST.recipeQuery=e.target.value;ST.recipeLimit=5;var results=$('#recipeResults');if(results)results.innerHTML=recipeResults();});
document.addEventListener('click',function(e){var b=e.target.closest('[data-act]');if(!b||!ST)return;var a=b.getAttribute('data-act');if(a==='recipePick')recipePick(b.getAttribute('data-v'));if(a==='recipeMore'&&ST.cust){ST.recipeLimit=(ST.recipeLimit||5)+5;var results=$('#recipeResults');if(results)results.innerHTML=recipeResults();}});
/* Keep reduction choices and guidance consistent when using the card's own picker. */
document.addEventListener('click',function(e){var b=e.target.closest('[data-act="sugPick"]');if(!b||!ST||ST.cust)return;var g=(SUG[ST.id]||[])[+b.getAttribute('data-v')];if(!g)return;var t=ROUTINE_TEMPLATES.find(function(r){return r.base===ST.id&&r.k===g[0]&&r.a===g[1];});if(!t)return;e.preventDefault();e.stopImmediatePropagation();ST.anchor=t.k;ST.act=t.a;ST.who=t.w;ST.custom={};ST.sugOpen=false;ST.recipeNote=t.note||'';if(t.bad){ST.bad=t.bad;ST.badOther=t.badOther||'';}if(!H(ST.id)&&t.goal)ST.weekGoal=t.goal;ST.i=ST.steps.indexOf('w');drawStart();ting();},true);
