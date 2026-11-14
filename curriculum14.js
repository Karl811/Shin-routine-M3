/* Biên tập nội dung 14 thói quen · giữ mã thẻ và dữ liệu đã lưu. */
(function(){
var oldList=HABITS.slice(), removed=['camon','gopy','quansat','tiengnhat','loihua','bot'];
function set(id,patch){Object.assign(HMAP[id],patch);}
function recipe(id,k,a,w){return [k,a,w];}
set('chao',{s:'Chào hỏi và cảm ơn',t:'Chủ động chào hỏi và cảm ơn',
 act:'chào người đầu tiên gặp, nhìn mắt, mỉm cười',
 anchors:['bước qua cổng trường','vào lớp gặp thầy cô','được ai đó giúp','gặp lại người đã giúp mình hôm qua'],
 who:['người tươi tắn, dễ gần','người biết ơn','người ai cũng muốn làm cùng'],
 tiers:['Chủ động chào hoặc cảm ơn một người theo công thức mình chọn.','Nói rõ điều mình cảm ơn; chào rõ lời, nhìn người đối diện.','Giữ sự lễ phép với cả người quen, người mới và người phục vụ mình.'],
 ev:{q:'Bạn đã chào hỏi hoặc cảm ơn ai, về việc gì?',o:['Bác bảo vệ, cô lao công','Thầy cô','Bạn cùng lớp','Người hướng dẫn','Người đã giúp mình']},
 why:{now:'Một lời chào làm buổi gặp gỡ dễ chịu hơn. Một lời cảm ơn cụ thể cho người kia biết mình trân trọng sự giúp đỡ.',jp:'Chào hỏi khi đến, khi về và cảm ơn khi được giúp là những việc nhỏ để xây dựng quan hệ ở nơi làm việc.'},
 steps:[['Chủ động trước','Gặp người thì chào; được giúp thì cảm ơn, không chờ được nhắc.'],['Nhìn người đối diện, nói rõ lời','Khi cảm ơn, nói cụ thể người đó đã giúp gì.'],['Giữ lời chào và lòng biết ơn','Khi gặp lại, có thể nhắc một câu cảm ơn về chuyện hôm trước.']],
 dos:[['Chào rõ lời, nói trước rồi cúi','Vừa nhìn điện thoại vừa chào'],['Cảm ơn cả những việc nhỏ','Coi sự giúp đỡ là đương nhiên']],
 oops:['Chỉ chào hoặc cảm ơn người có chức vụ.','Nói cảm ơn cho xong mà không để ý người đã giúp.']});
SUG.chao=SUG.chao.concat(SUG.camon);
set('som',{s:'Đúng giờ, đúng hẹn',t:'Đúng giờ, đúng hẹn'});
SUG.som.push(['hẹn với bạn','ghi giờ hẹn và đến đúng giờ','người giữ chữ tín']);
set('5s',{s:'5S - Gọn gàng và ngăn nắp',t:'5S - Gọn gàng và ngăn nắp'});
set('anuong',{s:'Ăn uống dinh dưỡng, điều độ',t:'Ăn uống dinh dưỡng, điều độ'});
set('chitieu',{s:'Chi tiêu có kế hoạch',t:'Chi tiêu có kế hoạch'});
set('camxuc',{s:'Nhận biết và điều chỉnh cảm xúc',t:'Nhận biết và điều chỉnh cảm xúc'});
set('horenso',{s:'Báo cáo và xác nhận',t:'Báo cáo và xác nhận'});
set('giup',{s:'Giúp đỡ một việc',t:'Giúp đỡ một việc'});
set('memo',{g:3,s:'Quan sát, hỏi và ghi lại',t:'Quan sát, hỏi và ghi lại',
 anchors:['thầy cô hoặc Senpai hướng dẫn','thấy một cách làm hay','chưa hiểu một lời dặn','tan học, trước khi đứng dậy','đọc một tin mình muốn chia sẻ'],
 who:['người biết lắng nghe và học hỏi','người làm việc cẩn thận','người không cần nhắc hai lần'],
 tiers:['Ghi một lời dặn hoặc một điều quan sát được theo công thức đã chọn.','Chưa hiểu thì hỏi, nhắc lại điều đã hiểu rồi ghi cho rõ.','Đọc lại và thử áp dụng điều đã ghi; kiểm chứng nguồn trước khi chia sẻ thông tin.'],
 ev:{q:'Bạn quan sát, hỏi hoặc ghi lại điều gì?',o:['Lời dặn của thầy cô','Cách làm của Senpai','Điều chưa hiểu đã hỏi lại','Một lỗi và cách sửa','Nguồn tin đã kiểm tra']},
 why:{now:'Quan sát để thấy điều cần học, hỏi để hiểu đúng, ghi lại để nhớ và làm được.',jp:'Khi được chỉ việc, nghe kỹ, hỏi lại chỗ chưa rõ và ghi từ khóa giúp mình làm đúng hơn, tránh lặp lỗi.'},
 steps:[['Dừng lại để quan sát và nghe','Chú ý cách làm, điều được dặn và chỗ mình chưa hiểu.'],['Hỏi cho rõ, ghi từ khóa','Ai, việc gì, khi nào, lưu ý gì. Chưa rõ thì nhờ giải thích lại.'],['Đọc lại và thử áp dụng','Nhắc lại để xác nhận; lần sau mở sổ trước khi làm.']],
 dos:[['Ghi từ khóa rồi xác nhận','Chép cho nhiều nhưng chưa hiểu'],['Hỏi nguồn trước khi tin hoặc chia sẻ','Thấy nhiều người đăng thì tin ngay']],
 oops:['Ghi vào giấy rời rồi làm mất.','Quan sát thấy hay nhưng không thử áp dụng.','Ngại hỏi nên gật đầu dù chưa hiểu.'],
 safe:HMAP.quansat.safe});
SUG.memo=SUG.memo.concat(SUG.quansat);
set('xinloi',{g:4,s:'Lắng nghe và sửa sai',t:'Lắng nghe và sửa sai',
 act:'nghe hết lời góp ý, ghi một điều cần xem lại',
 anchors:['được thầy cô hoặc Senpai góp ý','nhận ra mình làm sai','được nhắc là quên việc','gặp lại người đã góp ý'],
 who:['người biết lắng nghe','người dám nhận trách nhiệm','người sửa sai bằng hành động'],
 mk:'Có thể hỏi thầy cô: “Có một việc nào em cần làm tốt hơn không ạ?”',
 tiers:['Nghe hết lời góp ý hoặc nhận lỗi khi biết mình sai, theo công thức đã chọn.','Làm rõ điều cần sửa và chọn một cách sửa cụ thể.','Thực hiện cách sửa, báo lại khi phù hợp và tránh lặp lỗi.'],
 ev:{q:'Bạn được góp ý hoặc đã sửa việc gì?',o:['Phát âm, bài học','Giờ giấc','Việc được giao','Cách làm việc','Cách cư xử với bạn']},
 why:{now:'Nghe rõ giúp mình biết cần sửa gì. Khi làm sai, nhận trách nhiệm và sửa việc giúp xây dựng lại niềm tin.',jp:'Trong công việc, hỏi lại chỗ chưa hiểu, tiếp nhận hướng dẫn và sửa lỗi cụ thể giúp cả nhóm làm việc thuận lợi hơn.'},
 steps:[['Nghe hết, làm rõ sự việc','Dừng việc khi an toàn để nghe. Chưa hiểu thì hỏi lại, không vội cãi hoặc kết luận người kia ghét mình.'],['Phân biệt góp ý và lỗi của mình','Góp ý chưa rõ thì trao đổi bình tĩnh. Nếu mình sai, xin lỗi và nhận đúng phần trách nhiệm.'],['Sửa bằng một hành động cụ thể','Ghi cách sửa, thực hiện và báo lại khi phù hợp.']],
 dos:[['Hỏi lại điều chưa rõ','Gật đầu nhưng chưa hiểu'],['Nhận đúng phần mình và nói cách sửa','Đổ lỗi hoặc xin lỗi cho xong']],
 oops:['Nghe góp ý thành “người ta không thích mình”.','Xin lỗi nhiều lần nhưng không thay đổi cách làm.'],
 safe:'Được góp ý không có nghĩa là bạn chắc chắn sai. Có thể trình bày điều mình biết một cách bình tĩnh. Nếu bị xúc phạm, đe dọa hoặc bạo lực, hãy tìm thầy cô hay người phụ trách để được hỗ trợ.',
 quiz:{sc:'Senpai góp ý một bước bạn làm chưa đúng, nhưng bạn chưa hiểu rõ. Bạn làm gì?',o:['Nghe hết, hỏi lại bước chưa rõ, ghi cách làm; nếu mình sai thì nhận lỗi và sửa.','Xin lỗi ngay cho xong dù chưa hiểu cần sửa gì.','Nghĩ Senpai không thích mình nên bỏ qua.'],ok:0,ex:'Lắng nghe để hiểu đúng trước. Nhận lỗi khi mình sai và sửa bằng việc cụ thể; không cần nhận mọi góp ý là lỗi của mình.'},
 dlg:[['shin','think','Được góp ý có phải lúc nào cũng cần xin lỗi không?'],['s','smile','Mình nghe hết rồi hỏi lại chỗ chưa hiểu. Nếu mình sai thì nhận lỗi và nói cách sửa.'],['shin','think','Còn khi mình có thông tin khác?'],['s','hi','Bình tĩnh nói điều mình biết, hỏi lại để cùng hiểu đúng. Điều quan trọng là sửa được việc, không phải nói cho thắng.']],
 poem:['Nghe cho hết lời','Hỏi điều chưa rõ','Sai thì nhận sửa','Tiến bộ mỗi ngày']});
SUG.xinloi=SUG.gopy.concat(SUG.xinloi);
PRAC.xinloi={type:'choose',q:'Thầy cô nhắc bạn ghi thiếu một việc. Bạn nên phản hồi thế nào?',o:['Em nghe lại để hiểu việc còn thiếu, ghi bổ sung và hẹn lúc làm xong.','Em nói tại bạn khác nên mình mới quên.','Em xin lỗi rồi thôi, không hỏi thêm.'],ok:0,ex:'Lắng nghe, làm rõ và sửa một việc cụ thể. Nếu mình quên thì nhận trách nhiệm.'};
set('ngu',{s:'Ngủ đủ giấc',t:'Ngủ đủ giấc',act:'cất điện thoại và chuẩn bị ngủ vào giờ đã chọn',
 anchors:['đến giờ chuẩn bị ngủ mình đã chọn','đánh răng buổi tối','soạn xong đồ cho ngày mai'],
 who:['người biết chăm sóc giấc ngủ','người tỉnh táo để học và làm việc'],
 tiers:['Chọn giờ thức dậy và giờ chuẩn bị ngủ phù hợp, bắt đầu bằng một việc nhỏ.','Giữ nhịp ngủ phù hợp với lịch học, hạn chế màn hình khi chuẩn bị ngủ.','Theo dõi sự tỉnh táo ban ngày và điều chỉnh lịch ngủ khi lịch học hoặc ca làm thay đổi.'],
 why:{now:'Có một nhịp ngủ phù hợp giúp mình chủ động chuẩn bị cho ngày mai, thay vì thức theo điện thoại.',jp:'Khi đi làm theo ca, cần sắp xếp giấc ngủ theo giờ bắt đầu công việc và thời gian đi lại, không áp một giờ ngủ cho tất cả.'},
 steps:[['Tính từ giờ cần thức dậy','Đặt mục tiêu khoảng 7–8 tiếng ngủ mỗi ngày theo nhu cầu của mình; chọn giờ chuẩn bị ngủ tương ứng.'],['Chuẩn bị trước giờ đã chọn','Soạn đồ cho mai, cất điện thoại xa tay và giảm những việc dễ kéo dài giờ ngủ.'],['Nhìn lại và điều chỉnh','Ghi giờ ngủ, giờ dậy hoặc cảm giác tỉnh táo. Lịch làm thêm hay ca làm đổi thì sắp lại, không bớt ngủ để cố làm hết việc.']],
 ev:{q:'Bạn đã làm gì để giữ giấc ngủ phù hợp?',o:['Chuẩn bị ngủ đúng giờ đã chọn','Để điện thoại xa giường','Soạn đồ cho ngày mai','Điều chỉnh giờ ngủ theo lịch học hoặc ca làm']},
 corner:'Giờ đi ngủ cần tính theo giờ phải dậy. Bạn học buổi sáng và bạn làm ca có thể cần lịch khác nhau; điều cần rèn là biết chuẩn bị, giữ nhịp và lắng nghe cơ thể.',
 dlg:[['shin','think','Có phải ai cũng phải ngủ trước 23 giờ không?'],['s','smile','Không cần cùng một giờ. Em xem mình cần dậy lúc nào, rồi dành thời gian ngủ phù hợp và chọn giờ chuẩn bị ngủ.'],['shin','think','Nếu đi làm thêm về muộn thì sao?'],['s','hi','Mình xem lại lịch làm và lịch học, trao đổi để sắp xếp phù hợp. Đừng để việc làm thêm lấy hết thời gian nghỉ ngơi.']],
 dos:[['Chọn giờ ngủ theo giờ cần dậy','Áp cùng một giờ cho mọi lịch học, ca làm'],['Chuẩn bị đồ và cất điện thoại trước','Nằm xuống rồi tiếp tục lướt mãi']],
 oops:['Chỉ đặt báo thức dậy mà không có giờ chuẩn bị ngủ.','Xem thêm một video rồi kéo dài giờ ngủ.'],
 quiz:{sc:'Mai bạn cần dậy sớm hơn thường lệ. Bạn nên làm gì tối nay?',o:['Chọn giờ chuẩn bị ngủ sớm hơn, soạn đồ và cất điện thoại để dành đủ thời gian nghỉ.','Vẫn lướt điện thoại như mọi hôm rồi uống cà phê bù.','Cố học bù tới khuya vì ngủ ít một chút cũng không sao.'],ok:0,ex:'Chủ động sắp xếp từ giờ cần dậy; công thức ngủ cần hợp với lịch sinh hoạt của bạn.'},
 poem:['Biết giờ cần dậy','Chọn lúc nghỉ ngơi','Cất màn hình thôi','Mai mình tỉnh táo']});
SUG.ngu=[['đến giờ chuẩn bị ngủ đã chọn','cất điện thoại xa giường và chuẩn bị ngủ','người biết chăm sóc bản thân'],['soạn cặp buổi tối','chuẩn bị đồ cho mai để không phải thức muộn','người sống có kế hoạch'],['biết lịch học hoặc ca làm ngày mai','chọn giờ ngủ dựa trên giờ cần thức dậy','người chủ động giữ sức khỏe']];
PRAC.ngu={type:'pick',q:'Chọn những việc giúp bạn chuẩn bị cho giấc ngủ phù hợp.',tokens:['Chọn giờ ngủ theo giờ cần dậy','Xem thêm một tập phim','Soạn đồ cho ngày mai','Cố thức bù bài mỗi tối','Cất điện thoại xa giường','Chơi thêm một ván game'],ok:[0,2,4],box:'CHUẨN BỊ NGỦ',win:'Chọn giờ phù hợp, chuẩn bị đồ và rời màn hình: bắt đầu từ một việc nhỏ.',bad:'Chọn việc giúp bạn giữ giờ chuẩn bị ngủ, thay vì kéo dài thời gian thức.'};
BEN.ngu='Biết sắp xếp giấc ngủ là một cách có trách nhiệm với sức khỏe và việc học, việc làm ngày mai.';
set('5phut',{g:3,s:'Tận dụng 05 phút',t:'Tận dụng 05 phút',act:'mở một việc học nhỏ đã chuẩn bị để làm',
 anchors:['đến lớp sớm, chờ vào học','chờ đến lượt làm hồ sơ','có 5–15 phút trống phù hợp','nghỉ trưa và đã nghỉ ngơi đủ'],
 who:['người biết tận dụng thời gian','người học hỏi từ việc nhỏ'],
 tiers:['Dùng một khoảng trống phù hợp để làm một việc học nhỏ đã chọn.','Chuẩn bị sẵn việc học vừa với khoảng 5–15 phút mình có.','Linh hoạt học ở trường và nơi làm việc, ghi lại điều có thể dùng cho lần sau.'],
 why:{now:'Một khoảng chờ có thể đủ để ôn vài chữ, tập vài câu hoặc ghi lại điều vừa được chỉ.',jp:'Đi làm vẫn có thể học từ công việc: nhớ tên dụng cụ, từ vựng máy móc và cách sửa lỗi. Chọn lúc nghỉ phù hợp, không ảnh hưởng an toàn hay thời gian hồi sức.'},
 steps:[['Nhận ra khoảng trống phù hợp','Có thể là 5, 10 hoặc 15 phút; không cần lấp kín mọi lúc nghỉ.'],['Chọn một việc vừa với thời gian','Mở Hack-kanji, ôn vài chữ Hán, kaiwa vài câu hoặc tập một đoạn tự giới thiệu.'],['Giữ lại một điều dùng được','Khi đi làm, có thể ghi từ máy móc hoặc ý Senpai vừa chỉ, vào lúc được phép.']],
 ev:{q:'Bạn đã tận dụng khoảng trống để làm việc gì?',o:['Học Hack-kanji','Kaiwa với bạn','Tập tự giới thiệu phỏng vấn','Ôn vài từ Hán tự','Ghi từ máy móc','Ghi ý Senpai chỉ lỗi sai']},
 dos:[['Chuẩn bị một việc nhỏ sẵn dùng','Có lúc trống rồi mới loay hoay chọn'],['Học lúc phù hợp và giữ thời gian nghỉ','Dùng điện thoại khi đang đi đường hoặc thao tác máy']],
 oops:['Gọi là 5 phút nên bỏ qua khoảng trống 10–15 phút.','Cố học hết một bài lớn trong khoảng chờ ngắn.'],
 corner:'Một khoảng chờ ở trường có thể dùng để tập tự giới thiệu. Khi đã đi làm, lúc nghỉ phù hợp có thể ghi tên máy, tên dụng cụ hay điều Senpai vừa nhắc. Chỉ cần một điều dùng lại được.',
 dlg:[['shin','think','Tận dụng 05 phút có nghĩa là đúng năm phút thôi ạ?'],['s','smile','Có thể là 5, 10 hay 15 phút. Mình chọn việc nhỏ vừa với lúc trống, không cần làm hết một bài.'],['shin','think','Sang Nhật rồi mình học gì trong những lúc đó?'],['s','hi','Một từ tên dụng cụ hoặc một ý sửa lỗi Senpai vừa chỉ cũng là điều đáng ghi. Chọn lúc được phép và vẫn dành thời gian nghỉ.']],
 quiz:{sc:'Bạn tới lớp sớm, còn khoảng 10 phút. Cách tận dụng nào phù hợp?',o:['Chọn một việc nhỏ: Hack-kanji, kaiwa vài câu hoặc tập đoạn tự giới thiệu.','Không phải đúng 5 phút nên không tính.','Bắt đầu một bài dài dù sắp tới giờ học.'],ok:0,ex:'Tên “05 phút” nhắc mình bắt đầu nhỏ. Khoảng 10–15 phút cũng có thể dùng, miễn việc vừa sức và đúng lúc.'},
 poem:['Vài phút đợi chờ','Một điều học nhỏ','Ghi lại cho rõ','Mai dùng được ngay']});
SUG['5phut']=[['đến lớp sớm, chờ vào học','mở Hack-kanji, ôn một nhóm chữ nhỏ','người tiến bộ mỗi ngày'],['ngồi cùng bạn trước giờ học','kaiwa vài câu tiếng Nhật với bạn','người tự tin giao tiếp'],['chờ đến lượt làm hồ sơ','tập một đoạn tự giới thiệu phỏng vấn','người có sự chuẩn bị'],['có khoảng 10 phút trống','ôn lại vài từ Hán tự đã học','người biết tận dụng thời gian'],['nghỉ trưa ở nơi làm việc và đã nghỉ đủ','ghi vài từ tên máy hoặc dụng cụ vừa gặp','người học từ công việc'],['đến lúc nghỉ sau khi được Senpai chỉ lỗi','ghi lại một ý sửa để lần sau làm đúng','người biết sửa sai']];
PRAC['5phut']={type:'pick',q:'Bạn có 5–15 phút trống phù hợp. Chọn những việc vừa sức để học thêm một chút.',tokens:['Ôn một nhóm chữ trên Hack-kanji','Lướt video liên tục','Kaiwa vài câu với bạn','Xem trọn một tập phim','Tập một đoạn tự giới thiệu','Ghi một ý Senpai vừa chỉ'],ok:[0,2,4,5],box:'MỘT VIỆC NHỎ',win:'Một việc vừa thời gian là đủ. Không cần lấy hết thời gian nghỉ để học.',bad:'Chọn việc nhỏ, có ích và có thể dừng đúng lúc.'};
BEN['5phut']='Một khoảng trống phù hợp, một việc nhỏ: học thêm từ trường lớp và từ chính công việc của mình.';
set('viecko',{s:'Dám thử việc khó',t:'Dám thử việc khó',
 anchors:['thầy cô mời phát biểu','có điều muốn nói bằng tiếng Nhật','gặp một việc mình chưa từng làm','tìm hiểu một việc làm thêm phù hợp'],
 who:['người dám thử và học từ trải nghiệm','người chủ động chuẩn bị cho công việc'],
 tiers:['Thử một việc hơi ngại nhưng vừa sức theo công thức mình chọn.','Chuẩn bị, hỏi người có kinh nghiệm và làm thử đến nơi đến chốn.','Nhìn lại điều học được, thử bước tiếp theo hoặc đề xuất một cải tiến nhỏ.'],
 steps:[['Chọn một việc hơi ngại, vừa sức','Phát biểu trên lớp, nói một câu tiếng Nhật hoặc tìm hiểu một việc làm thêm phù hợp.'],['Chuẩn bị một bước rồi thử','Viết ý cần nói, tập với bạn; tìm hiểu việc làm thêm và trao đổi với thầy cô khi cần.'],['Rút ra một điều sau khi thử','Mình đã học gì, cần nhờ ai hỗ trợ, lần sau làm tốt hơn ở đâu?']],
 ev:{q:'Bạn đã thử việc gì, học được điều gì?',o:['Phát biểu trước lớp','Mạnh dạn nói tiếng Nhật','Nhận một việc mới','Tìm hiểu việc làm thêm','Thử công việc phù hợp']},
 safe:'Đi làm thêm là một lựa chọn để học trải nghiệm, không phải yêu cầu cho mọi bạn. Chọn việc phù hợp, rõ điều kiện, không ảnh hưởng học tập và nghỉ ngơi; trao đổi với thầy cô hoặc người phụ trách khi cần. Chỉ nhận việc vừa khả năng và được phép.',
 quiz:{sc:'Bạn chưa từng đi làm thêm và muốn có thêm kinh nghiệm. Bước đầu nào phù hợp?',o:['Tìm hiểu một việc rõ điều kiện, trao đổi lịch học rồi chuẩn bị trước khi thử.','Nhận ngay bất cứ việc nào để chứng tỏ mình không ngại.','Thấy sợ thì kết luận mình không làm được.'],ok:0,ex:'Dám thử đi cùng chuẩn bị và hỏi người có kinh nghiệm. Không cần liều hoặc làm quá sức.'}});
SUG.viecko=SUG.viecko.concat([['thầy cô mời phát biểu','giơ tay nói một ý mình đã chuẩn bị','người dám thử'],['muốn nói một câu bằng tiếng Nhật','nói thử với bạn hoặc thầy cô, chưa rõ thì hỏi lại','người tự tin giao tiếp'],['bắt đầu giờ luyện phỏng vấn','mạnh dạn tự giới thiệu bằng tiếng Nhật','người có sự chuẩn bị'],['muốn có thêm trải nghiệm đi làm','tìm hiểu một việc làm thêm phù hợp và lịch làm','người chủ động học từ trải nghiệm'],['đã chọn được việc làm thêm phù hợp','hỏi rõ việc, giờ làm và điều cần chuẩn bị','người có trách nhiệm']]);
SUG.camxuc.push(['nhận ra mình nghĩ đi nghĩ lại một chuyện','viết điều đang lo và một bước mình có thể làm','người biết chọn bước tiếp theo']);
SUG.anuong.push(['muốn uống nước ngọt theo thói quen','uống một ly nước lọc trước rồi chọn lại','người biết chăm sóc bản thân']);
SUG['5phut'].push(['định để bài lại làm sau','mở đúng bài và làm câu đầu tiên trong 2 phút','người chủ động bắt đầu']);
GROWTH_TIPS.push(['b5','Công thức mình chọn là một lời hứa nhỏ với chính mình. Chọn vừa sức, làm và nhìn lại để giữ lời.']);
PRAC.viecko={type:'pick',q:'Chọn những bước hơi ngại nhưng vừa sức để thử.',tokens:['Phát biểu một ý trước lớp','Nhận việc mơ hồ, bỏ học để làm','Nói thử một câu tiếng Nhật','Hỏi rõ điều kiện việc làm thêm','Nhận mọi việc dù chưa biết an toàn','Chuẩn bị rồi nhận một nhiệm vụ mới'],ok:[0,2,3,5],box:'DÁM THỬ CÓ CHUẨN BỊ',win:'Dám thử một bước vừa sức, có chuẩn bị và biết hỏi khi cần.',bad:'Chọn bước có ích, vừa sức và phù hợp với việc học, sức khỏe.'};
// Giữ ý nghĩa các gợi ý cũ; thay thẻ đích theo nội dung thực tế.
var target={camon:'chao',gopy:'xinloi',quansat:'memo',tiengnhat:'viecko',loihua:'5phut',bot:'5phut'};
ROUTINE_TEMPLATES.forEach(function(t){if(target[t.base])t.base=target[t.base];if(t.id==='giam-thuoc'){delete t.base;t.icon='la';}if(t.id==='phat-bieu')t.base='viecko';});
ROUTINE_TEMPLATES.forEach(function(t){if(t.base){var list=SUG[t.base]||(SUG[t.base]=[]);if(!list.some(function(a){return a[0]===t.k&&a[1]===t.a;}))list.push([t.k,t.a,t.w]);}});
// Thẻ giảm dần không còn là đầu vào của bộ mới; vẫn đọc được dữ liệu cũ.
HABITS=oldList.filter(function(h){return removed.indexOf(h.id)<0;});
[['chao','camon'],['memo','quansat'],['xinloi','gopy']].forEach(function(pair){HMAP[pair[0]].combos=Array.from(new Set(HMAP[pair[0]].combos.concat(HMAP[pair[1]].combos)));});
GROUPS=[{g:1,t:'Tác phong và tự tổ chức',d:'Giữ nếp từ việc nhỏ'},{g:2,t:'Chăm sóc và làm chủ bản thân',d:'Biết chăm sóc mình'},{g:3,t:'Học hỏi và tiến bộ',d:'Học từ lớp và công việc'},{g:4,t:'Giao tiếp và làm việc cùng nhau',d:'Có trách nhiệm với người khác'}];
HMAP.chitieu.g=1;HMAP.chao.g=4;
BEN.chao=HMAP.chao.why.now;BEN.memo=HMAP.memo.why.now;BEN.xinloi=HMAP.xinloi.why.now;
// Dẫn nội dung cũ vào đúng thẻ mới; lịch sử thẻ cũ tiếp tục giữ liên kết cũ.
GROWTH_CHALLENGES.forEach(function(t){var old=t.id,newId=target[old];if(newId)Object.defineProperty(t,'id',{enumerable:true,get:function(){return typeof S!=='undefined'&&S&&S.habits&&S.habits[old]?old:newId;}});});
var todayBase=flowTodayName;flowTodayName=function(id){return HABITS.some(function(h){return h.id===id;})?hname(id):todayBase(id);};
// Người đã rèn thẻ thuộc bộ cũ vẫn tìm và đọc/sửa được; người mới chỉ thấy 14 thẻ.
cardNo=function(id){var i=HABITS.findIndex(function(h){return h.id===id;});return i<0?'—':pad(i+1);};
var offerBase=offerTier;offerTier=function(id){if(['chao','memo','xinloi','ngu','5phut','viecko'].indexOf(id)>=0){cuTierSheet(id);return;}offerBase(id);};
APP_VER='M3.3.16';
})();
