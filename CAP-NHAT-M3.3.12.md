# Cập nhật Shin routine M3.3.12

Bản sao từ M3.3.11, hoàn thiện 12 điều chỉnh giao diện điện thoại. Không thay quy tắc ghi nhận, lên cấp, mục tiêu, nội dung thẻ/bài học, icon cảm xúc hoặc khóa lưu dữ liệu.

## Những thay đổi

1. **Hôm nay:** sửa tiêu đề chào bị giữ trên một dòng khi nút “Đã check-in” lớn lên, gây tràn ngang và lệch điều hướng. Tên dài xuống dòng trong phần được cấp; các hàng thói quen vẫn vuốt riêng để mở check-in.
2. **Xem thẻ:** thêm viền sáng dạng viên thuốc và mũi tên, giữ nguyên thao tác mở thẻ từ check-in.
3. **Tuần:** bỏ ô “Điều bạn muốn nhớ tuần này” khỏi tab chính. Nút “Mở thẻ tuần” dùng nền tonal, icon lịch và mũi tên. Không xóa nội dung ghi nhớ đã lưu trong các tuần cũ.
4. **Thẻ thói quen:** giữ mọi thông tin hiện sẵn, co chữ và khoảng cách theo chiều cao phần xem thẻ. Cỡ thường là tiêu đề 24 px, nội dung 18 px, phụ 12 px; màn hình thấp co nhẹ hơn. Tự căn lại khi phông chữ tải xong. Với nội dung tự tạo rất dài, có cơ chế co toàn bộ để giữ đủ nội dung; chữ có thể nhỏ hơn các thẻ thông thường.
5. **Nhật ký thói quen:** chữ nội dung 17 px, ngày và nhãn lớn hơn trên điện thoại; không tăng chữ của các khu vực khác.
6. **Lá thư gửi bạn:** giấy vàng ấm, giữ phông chữ viết tay và nguyên văn thư.
7. **Thành tựu:** bố cục Material 3 với huy hiệu, nhãn cấp và các ô kỷ niệm; nội dung 17 px, tiêu đề 24 px. Giữ các thao tác và cảm nhận đã lưu.
8. **Bài học:** chữ nội dung 17 px, ví dụ 16 px, giãn dòng thoáng hơn. Chỉ áp dụng trong bài học trên điện thoại.
9. **Thẻ tuần:** mở toàn màn hình trên điện thoại, lề nội dung 12 px, đầu trang cố định, phần nhận xét tonal và các khối thói quen rõ ràng hơn.
10. Đổi “Gửi một điều trân quý” thành **“Gửi một lời nhắn”**.
11. **Thư trên cây:** bỏ nút thu gọn đếm thư, hiển thị thư trực tiếp ngay dưới ô tem chờ lời nhắn, giữ thao tác mở từng thư.
12. **Các chặng đã qua và Nhật ký:** các mục xuất hiện dần khi cuộn đến, tải thêm theo phần gần cuối; vẫn có nút xem thêm dự phòng. Tắt hiệu ứng nếu thiết bị yêu cầu giảm chuyển động.

Màu vuốt C xanh rừng / đỏ nâu, tiến độ theo màu thẻ, mặt sau cùng tông đậm rất nhẹ, nhãn KAIZEN CARD, icon Hôm nay và cột riêng cho nút phát âm từ M3.3.11 tiếp tục được giữ.

## Dữ liệu

- Giữ nguyên `shin-m3-v1-data`, `shin-m3-v1-demo`, `shin-m3-v1-mode` và danh tính PWA.
- Các thay đổi mới chỉ trình bày giao diện; không có chuyển đổi hoặc xóa dữ liệu học viên.
- Nhật ký, memo, bản nháp, thẻ tự tạo, thành tựu, thư, mục tiêu và ghi nhớ tuần cũ tiếp tục được đọc theo cách hiện tại.
- Gói phát hành không chứa dữ liệu giả hay ảnh kiểm tra. Hai tệp mới `routine-refinements.js/css` đã có trong danh sách 46 tài nguyên offline.

## Đã kiểm tra

- 130 kiểm tra nội dung, dữ liệu, luồng check-in và bản phát hành; 14 kiểm tra thao tác vuốt.
- Kích thước điện thoại 320 × 568, 390 × 844, 430 × 932; kiểm tra cả hai mặt của bốn loại thẻ trên màn hình thấp, các màu thẻ tự tạo và nội dung dài.
- Kiểm tra nút xem thẻ, thẻ tuần toàn màn hình, nhật ký, thư, thành tựu, bài học, hiệu ứng theo cuộn và vuốt hai chiều. Không phát hiện lỗi JavaScript trong lượt kiểm tra trình duyệt.
- Đây là kiểm tra kích thước điện thoại và thao tác chạm mô phỏng trên máy tính, chưa kiểm tra trên điện thoại vật lý. Với nội dung tự tạo rất dài, chữ có thể nhỏ; nên kiểm tra thêm nội dung thực tế sau cập nhật.

## Cập nhật GitHub

1. Giải nén ZIP, mở thư mục `Shin-routine-M3.3.12-main`.
2. Upload **toàn bộ các tệp bên trong** vào repository đang dùng, giữ nguyên địa chỉ GitHub Pages. `index.html` phải nằm ở gốc, đi cùng `assets/`, `.nojekyll` và các tệp JS/CSS. Không chỉ tải riêng ZIP lên repository.
3. Chờ GitHub Pages cập nhật; trong app lưu phần đang nhập rồi chọn **Cập nhật** khi có thông báo. Nếu đang mở nhiều cửa sổ app, đóng chúng và mở lại khi cần nạp bản mới.
4. Dùng cùng trình duyệt/thiết bị và địa chỉ app để tiếp tục dữ liệu cũ. Không xóa dữ liệu trang hoặc gỡ bộ nhớ trình duyệt. Có thể xuất bản sao từ Sổ tay trước khi cập nhật để giữ thêm một bản riêng.

Bản này chỉ được đóng gói để bạn tự cập nhật, chưa được đưa lên GitHub.
