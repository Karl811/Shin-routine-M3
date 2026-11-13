# Shin routine · M3.3.14

Bản xem thử tạo riêng từ M3.3.13. Thư mục M3.3.13 được giữ nguyên; bản này chưa đưa lên GitHub.

## Tung thói quen

Vào **Thư viện → Công cụ → Tung thói quen**. Game giữ các khối Tabletop, kéo ném, va chạm, âm thanh và hiệu ứng lọt rổ của file Game Habit.html.

- 20 khối liên kết với đúng 20 thói quen gốc. Khối dùng tên ngắn; bảng thông tin và kết quả dùng tên đầy đủ từ app.
- Bấm **Tung lên** hoặc kéo một khối rồi thả để ném. Khối chỉ được tính vào rổ sau thao tác chơi, không tự ghi điểm khi vừa mở game.
- **Thói quen đã vào rổ** là các gợi ý. Có **Xem thẻ**, **Chọn rèn/Đưa lên tay**, **Trả về bàn**. Nút **gợi ý · Xem** giúp đến kết quả khi kết quả nằm bên dưới màn chơi.
- Chọn rèn dùng luồng cũ: xem câu hỏi nhanh, chọn mốc Khi…, việc nhỏ và mục tiêu tuần. Đủ 5 thẻ thì chọn thẻ cất để nhường chỗ. Thẻ đang trên tay có nhãn trạng thái và không được thêm trùng.
- Kết quả trò chơi không đánh dấu hoàn thành, cộng XP, ngày rèn, chuỗi hay check-in. Phần thưởng khi học viên thực sự xác nhận rút thẻ vẫn theo quy tắc của app.
- **Xếp lại** sắp các khối còn trên bàn, giữ gợi ý đã vào rổ. Gợi ý giữ trong lần mở app hiện tại; tải lại app bắt đầu lượt mới. Tiến độ rèn đã lưu giữ như cũ.
- Quay ra khỏi game dừng thế giới chuyển động. Mở lại hoặc quay lại từ thẻ sẽ dựng lại bàn với các gợi ý còn giữ. Âm thanh ban đầu theo cài đặt app; có nút riêng để tắt/bật khi chơi.
- Giao diện, thư viện chuyển động và font được đóng gói cùng app. Game dùng được offline sau khi bộ nhớ offline đã tải đầy đủ.

## Kéo xuống để đóng

Cửa sổ bật lên có thanh ngang nhỏ phía trên. Kéo xuống từ thanh này hoặc phần chữ của tiêu đề để đóng. Kéo ngắn, kéo lên hoặc hủy thao tác thì cửa sổ trở về vị trí cũ. Có thể dùng Enter/Space khi chọn thanh kéo bằng bàn phím.

Vùng nội dung tiếp tục dùng để cuộn; vùng chơi tiếp tục dùng để kéo khối. Ghi chú thói quen, bản nháp check-in và lời nhắn được giữ bằng cơ chế bản nháp hiện có trước khi đóng.

## Nút Back

Lịch sử điều hướng trong app nhận thao tác Back của trình duyệt/điện thoại. Back lần lượt trở về bước hoặc màn trước: ví dụ Cách làm → thẻ → game → Công cụ. Các trang chính và các tab Thư viện cũng có lịch sử. Khi đã trở về điểm bắt đầu, Back tiếp theo do trình duyệt/hệ điều hành xử lý để rời app; không chặn thoát bằng vòng lặp.

Đóng cửa sổ bằng nút X hoặc kéo xuống sẽ bỏ các bước con đã đóng khỏi đường quay lại. Tải lại app trở về Hôm nay và gom lịch sử cũ của lần mở trước. Lịch sử chỉ lưu trạng thái màn hình trong bộ nhớ, không khôi phục đè dữ liệu rèn luyện.

Đã kiểm tra bằng Back của Chromium và thao tác cảm ứng mô phỏng trên màn hình điện thoại. Cần thử thêm nút/động tác Back thật trên điện thoại Android cài PWA và thao tác quay lại trên iPhone. Việc rời ứng dụng ở màn cuối do thiết bị quyết định.

## Tuần và Thư viện

- **Đáng nhớ** thành nút nhỏ ở bên phải hàng chọn tuần; giữ nhãn, không chiếm riêng một hàng. Trong màn Đáng nhớ có nút **Về tuần**.
- Thẻ nhỏ của Thói quen và Cách làm từng thói quen cùng dùng bố cục biểu tượng cạnh tên và trạng thái bên dưới. Chiều cao tối thiểu giảm từ 174 xuống 94 px; tên dài vẫn xuống dòng đầy đủ. Giữ màu nhóm, bộ lọc, thẻ tự tạo và nội dung thẻ lớn.

## Xem thử và cập nhật

- **Mac:** nhấp đúp **Xem-thu.command**. Nếu được hỏi quyền mở tệp tải về, mở từ thư mục đã giải nén. Giữ cửa sổ xem thử mở trong lúc dùng; đóng cửa sổ để dừng.
- **Windows:** nhấp đúp **Xem-thu.cmd**; máy cần Node.js.
- Bản xem thử chạy ở `http://127.0.0.1:8782/shin-routine-m3-14/`, tách địa chỉ với bản M3.3.13. Địa chỉ mới có dữ liệu riêng; có thể khôi phục bản sao để thử hoặc chủ động nhập lớp DEMO-KZ.
- Bản dùng thật vẫn giữ các khóa lưu trữ và danh tính PWA cũ. Nếu sau khi duyệt muốn nâng cấp trên địa chỉ cũ, upload toàn bộ nội dung thư mục và chọn Cập nhật; không xóa dữ liệu trình duyệt. Bản này chưa được upload.

Giấy phép Matter.js và Tailwind CSS nằm trong `assets/game/`. Game không cần CDN hoặc font bên ngoài.

Tham khảo triển khai: [History API](https://developer.mozilla.org/en-US/docs/Web/API/History_API/Working_with_the_History_API), [Pointer events](https://developer.mozilla.org/en-US/docs/Web/API/Pointer_events).
