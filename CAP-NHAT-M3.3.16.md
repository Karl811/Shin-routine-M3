# Shin Routine · M3.3.16

Bản đầy đủ dựa trên M3.3.15, giữ 14 thói quen đã biên tập và giao diện thư viện dạng lưới của M3.3.14. Chưa upload lên GitHub.

## Dữ liệu học viên và Demo-KZ

Bộ mới bắt đầu với vùng lưu riêng `shin-curriculum16-v1-*`, không tự đọc tiến độ hoặc chế độ demo từ các bản trước. Những vùng lưu cũ trên máy không bị xóa. Khôi phục chỉ nhận bản sao có cấu trúc bộ mới; không trộn nhật ký của bộ 20 thói quen cũ vào bộ 14 thói quen.

Học viên đang dùng bản cũ sẽ bắt đầu lại khi mở bản này lần đầu. Các lần mở tiếp theo giữ dữ liệu M3.3.16 bình thường; cập nhật sau này có thể tiếp tục dùng cùng vùng lưu của bộ này.

Mã lớp giáo viên vẫn là **Demo-KZ** (không phân biệt hoa thường). Demo được xây dựng mới từ đúng danh mục hiện tại:

- 10/14 thói quen hoàn thành, đạt Vững tay và đang duy trì.
- 4 thói quen còn đang rèn để thực hành ghi nhận, sửa công thức và xem tiến độ.
- 1 thói quen tự tạo: Chuẩn bị đồ cho ngày mai.
- Có dữ liệu minh họa ghi trong ngày, ghi bổ sung, tự nhập, dùng gợi ý và chỉnh sửa gợi ý. Dữ liệu chỉ để hướng dẫn giáo viên, không phải lịch sử học viên thật.

## Giao diện và thao tác

- Ghi nhận nhanh khi vuốt chỉ có trạng thái, câu hỏi, ô nhập, các gợi ý và Lưu. Có Đổi kết quả nếu vuốt nhầm. Chạm tên thói quen, dấu + hoặc Check-in vẫn mở luồng đầy đủ.
- Gợi ý ghi chú hiện sẵn ba lựa chọn, có Xem thêm và thu gọn. Chưa bấm Lưu thì chưa cộng tiến độ.
- Giảm cỡ chữ riêng trong popup check-in và popup tạo thẻ; các lựa chọn màu, biểu tượng và phần xem trước tên thẻ dùng kiểu phẳng.
- Thông báo offline ngắn một dòng, giảm 5px ở chính thông báo đó. Dòng Chọn đáp án đúng để tiếp tục giảm 4px; nút Xem sau, rèn luôn dùng màu xanh và mũi tên.
- Bỏ qua bước Trở thành chuyển tiếp được. Mục tiêu tuần thành bước riêng với các nút tròn 1–7; tạo thẻ chỉ hoàn tất sau bước mục tiêu.
- Sửa khoảng lề, chiều cao hai mặt thẻ và cách cuộn nội dung; nhớ vị trí cuộn khi chuyển Thẻ / Nhật ký.
- Lật thẻ nhanh hơn, khoảng 360ms. Back trở lại ngay, bỏ hiệu ứng rời trang; không thay hiệu ứng kéo xuống để đóng.
- Tab Tuần bỏ Nhật ký xem lại hôm nay. Đáng nhớ là một biểu tượng sao ngay cạnh tiêu đề Tuần.
- Thói quen đang rèn có nền đậm hơn cùng hệ màu, viền và dấu nhận biết; tên và nhãn trạng thái vẫn hiện rõ.
- Các công cụ mở toàn màn hình. Khối công cụ nền xanh có pattern nhẹ; sân game được đưa lên trước phần chữ, sửa font tiếng Việt của game.
- Máy tính có nút Xem điện thoại / Về máy tính, dùng khung xem riêng với kích thước điện thoại. Dữ liệu dùng cùng địa chỉ và cùng vùng lưu, không tạo bản sao học viên khác.

## Nhịp ghi nhận trong Thẻ tuần

Phần này mặc định thu gọn. Hiển thị ngày có mở app, ghi trong ngày hoặc bổ sung, và cách viết ghi chú. Đây là thông tin hỗ trợ nhìn lại, không xác minh việc đã thực hiện ngoài đời hay chấm điểm độ trung thực.

Thông tin lưu trên thiết bị; không ghi từng lần chạm, không theo dõi thời gian ở mỗi màn. Học viên chủ động chọn ô **Kèm nhịp ghi nhận khi lưu ảnh** nếu muốn chia sẻ cùng giáo viên. Không chọn thì ảnh Thẻ tuần không chứa phần này.

## Mở và cập nhật

- Giải nén rồi mở Xem-thu.cmd trên Windows hoặc Xem-thu.command trên Mac (cần Node.js).
- Bản xem thử: http://127.0.0.1:8784/shin-routine-m3-16/ .
- Khi đưa lên GitHub Pages, upload toàn bộ nội dung **bên trong** thư mục Shin-routine-M3.3.16-main để index.html ở gốc. Cần có curriculum14.js, refinement16.js, refinement16.css và đầy đủ assets; không chỉ thay app.js.
- Giữ địa chỉ web và chọn Cập nhật khi ứng dụng thông báo. Không cần xóa dữ liệu trình duyệt.

Bản đã kiểm tra tự động trên trình duyệt với kích thước điện thoại và máy tính. Bàn phím, nút Back và cử chỉ thực tế vẫn cần được giáo viên xem lại trên điện thoại sử dụng hằng ngày.
