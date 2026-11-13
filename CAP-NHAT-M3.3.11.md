# Cập nhật Shin routine M3.3.11

Bản hoàn thiện từ bản sao M3.3.10. Không cần bước build.

## Các thay đổi đã thống nhất

- Bốn nhóm thẻ chính và sáu màu thẻ tự tạo giữ nguyên nội dung, công thức, pattern, tên học viên và thông tin rèn luyện.
- Chữ hai mặt thẻ dùng ba cỡ chính: tên 26 px, nội dung 20 px, thông tin phụ 13 px; ở màn hình 320 px, tên 24 px và nội dung 19 px. Hành động, tín hiệu, mục tiêu cá nhân, lời dịch và phần giải thích dùng cùng nhịp chữ. Nội dung dài cuộn trong vùng thẻ, không tự thu nhỏ toàn bộ chữ.
- Thẻ co theo nội dung để giảm khoảng trống dư. Mặt sau có tên thẻ cùng cấp chữ với mặt trước.
- Thanh tiến độ cấp dùng màu mực của từng nhóm. Mặt sau cùng tông với mặt trước, chỉ pha thêm 4% màu mực để đậm hơn nhẹ. Các dấu kết quả trong tuần giữ nguyên màu trạng thái.
- Nhãn dọc trên các thẻ đổi thành **KAIZEN CARD**.
- Nút phát âm có cột riêng rộng 44 px cạnh phần tiếng Nhật và romaji. Lời dịch nằm ở hàng tiếp theo, không bị nút đè lên khi xuống dòng.
- Hôm nay: nền icon thẻ 44 px, hình bên trong 28 px hoặc SVG 32 px; bỏ chữ “Thẻ”. Chạm vùng tên/nội dung mở ghi nhận, chạm icon riêng mở thẻ.
- Màu vuốt chốt **C**: xanh rừng `#3F6B50` cho Đã làm, đỏ nâu `#A95C4D` cho Chưa làm, chữ và icon sáng. Các màu trạng thái trong màn ghi nhận giữ nguyên.
- Sửa viền màu lộ ở góc bo: lớp màu dưới hàng chỉ hiện khi đang vuốt, không hiện lúc hàng đứng yên.
- Sửa thao tác chạm bị hủy khi quyền nhận thao tác chuyển từ nút tên sang hàng; chỉ hủy nếu chính hàng mất quyền nhận thao tác. Việc nhấc một ngón khác không hủy lần vuốt chính. Cuộn dọc, chạm icon và nút cộng vẫn hoạt động riêng.
- Vuốt chỉ mở ghi nhận với kết quả tương ứng. Vẫn cần ghi chú/lý do và bấm lưu; vuốt hoặc bản nháp không được tính hoàn thành.

## Cập nhật GitHub

1. Giải nén `Shin-routine-M3.3.11.zip`.
2. Mở thư mục `Shin-routine-M3.3.11-main`, đưa **toàn bộ nội dung bên trong** lên đúng repository và thư mục GitHub Pages hiện tại, gồm `assets/`, `.nojekyll`, toàn bộ JS/CSS, manifest, icon và hướng dẫn.
3. Giữ `index.html` ở vị trí cũ. Không thêm tầng thư mục vào địa chỉ app đang dùng.
4. Khi GitHub Pages cập nhật xong, mở app có mạng, dùng thông báo cập nhật sẵn có nếu xuất hiện. Kiểm tra phiên bản trong Sổ tay là **M3.3.11**. Nếu còn bản cũ, mở lại khi có mạng.

Không yêu cầu học viên gỡ PWA hay xóa dữ liệu. Giữ nguyên địa chỉ app và danh tính PWA. Các khóa lưu vẫn là `shin-m3-v1-data`, `shin-m3-v1-demo`, `shin-m3-v1-mode`; không có thao tác chuyển kho hay xóa dữ liệu.

## Kiểm tra

- Bộ kiểm tra logic từ M3.3.10, có cập nhật các kỳ vọng nhãn/màu theo lựa chọn mới và kiểm tra lại dữ liệu, bản nháp, mục tiêu, thư, cây và danh tính PWA.
- Kiểm tra riêng thao tác vuốt, gồm tái hiện lỗi ở M3.3.10 trước khi xác nhận bản sửa, chuyển implicit pointer capture, vuốt hai hướng, cuộn dọc, kéo chưa đủ ngưỡng, hủy chạm và nhiều ngón.
- Kiểm tra mặt trước/sau của bốn nhóm, sáu màu tự tạo và nội dung dài ở 320 px; bốn nhóm ở 390 px; câu dài ở 430 px. Đối chiếu kích thước chữ, tràn ngang và giao nhau giữa nút phát âm với các vùng chữ.
- Thử vuốt phải/trái trong trình duyệt, mở đúng kết quả, nhập và lưu ghi nhận. Kiểm tra vùng tên và icon mở đúng màn.
- Đây là kiểm tra trình duyệt theo kích thước điện thoại và mô phỏng thao tác chạm. Chưa kiểm tra trên điện thoại thật; giọng đọc vẫn phụ thuộc tính năng/giọng tiếng Nhật có trên thiết bị như trước.

Không sửa dữ liệu học viên. Mã ghi nhận và các phần không liên quan được giữ nguyên; `app.js` chỉ tăng số phiên bản. Bản M3.3.10 và ZIP trước vẫn được giữ nguyên.
