# Cập nhật Shin routine M3.3.10

Bản sao phát triển từ M3.3.9 theo bố cục check-in đã duyệt. Không cần bước build.

## Nội dung thay đổi

- Ghi nhận một thói quen: phần đầu xanh đậm `#173F79`, tên đầy đủ, lời nhắc “Khi … Mình sẽ …”, vùng chọn kết quả và ghi chú sáng. Giữ nút Xem thẻ, ghi chú bắt buộc, các gợi ý chọn nhanh và Để sau.
- Check-in hằng ngày: mỗi thói quen một bước, sau đó tâm trạng và một câu hỏi. Tiến độ tính theo số bước thực tế, không biểu thị số thói quen đã hoàn thành. Có quay lại và bỏ qua từng bước.
- Kết quả check-in chỉ được ghi nhận khi bấm Lưu ở bước cuối. Đóng giữa chừng giữ bản nháp và vị trí đang làm. Thẻ đã lưu trước đó được giữ nguyên, có thể mở để chỉnh. Bỏ qua không tạo dấu hoàn thành.
- Giữ cách lưu dữ liệu và các điều kiện tính điểm, mục tiêu tuần, duy trì, gợi ý và câu hỏi cá nhân hóa hiện có. Các thẻ đã đạt mục tiêu tuần vẫn có thể rèn thêm nếu muốn.
- Màu lựa chọn: Đã làm xanh lá của trạng thái đã lưu; Một phần xanh lam; Chưa làm cam đỏ dịu; Không gặp dịp xám xanh.
- Giữ nguyên hình vẽ và màu icon cảm xúc. Thứ tự từ trên xuống: Tuyệt vời → Vui vẻ → Bình thường → Buồn một chút → Không vui. Chỉ đổi nhãn hiển thị; mã 5–1 và lịch sử cảm xúc giữ nguyên.
- Vuốt thẻ Hôm nay: nền xanh đậm `#173F79` khi vuốt phải, vàng đậm `#D5A126` khi vuốt trái. Giữ thao tác, ngưỡng vuốt, icon 32 px và điều kiện phải có ghi chú/lý do trước khi lưu.
- Sổ tay góc trên phải: ba chấm dọc 20 px, vùng chạm 44 × 44 px, nền trong suốt.

## Cập nhật GitHub

1. Giải nén ZIP. Mở thư mục `Shin-routine-M3.3.10-main`.
2. Đưa toàn bộ nội dung bên trong thư mục này lên đúng thư mục GitHub Pages đang dùng. `index.html` cần ở đúng vị trí cũ; không tạo thêm tầng thư mục trên địa chỉ đang chạy.
3. Giữ nguyên địa chỉ app, scope, manifest và đường dẫn cài PWA. Không yêu cầu học viên gỡ PWA hay xóa dữ liệu.
4. Sau khi GitHub Pages cập nhật, mở app khi có mạng và dùng thông báo cập nhật sẵn có nếu xuất hiện. Kiểm tra phiên bản trong Sổ tay là M3.3.10. Nếu còn phiên bản cũ, mở lại khi có mạng.

Các khóa lưu vẫn là `shin-m3-v1-data`, `shin-m3-v1-demo`, `shin-m3-v1-mode`. Không có thao tác xóa dữ liệu hay chuyển kho lưu. Cache offline được tăng phiên bản và bổ sung hai tài nguyên check-in mới.

## Phạm vi kiểm tra

- Kiểm tra logic gồm bộ kiểm tra M3.3.9 và các trường hợp mới: ghi chú bắt buộc, bỏ qua, giữ ghi nhận cũ, giữ bản nháp, trở lại đúng bước, lưu kết quả được chọn, dữ liệu thư và lịch sử, mục tiêu tuần và danh tính PWA.
- Kiểm tra giao diện trong trình duyệt ở 320 × 568, 390 × 844, 430 × 932 và bố cục máy tính.
- Kiểm tra đóng/mở lại check-in, chọn gợi ý nhanh, bỏ qua từng bước, thứ tự và hình vẽ cảm xúc, lưu cuối ngày, lưu ghi nhận riêng và menu Sổ tay.
- Đây là kiểm tra theo kích thước điện thoại trong trình duyệt; chưa kiểm tra trên điện thoại thật hoặc bàn phím Android/iOS thật.

Các thay đổi chức năng và giao diện mới nằm trong `routine-checkin.js` và `routine-checkin.css`. Các tệp nguồn khác chỉ đổi số phiên bản, tải tài nguyên mới, icon menu hoặc hướng dẫn phát hành. Bản M3.3.9 được giữ nguyên.
