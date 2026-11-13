# Shin routine M3.3.8

Chỉ cập nhật hai phần đã duyệt:

1. Thanh điều hướng: Hôm nay dùng mặt trời (bộ 3), Tuần dùng lịch có dấu xác nhận (bộ 2), Hành trình dùng mầm cây (bộ 1). Dùng đúng hình từ mẫu đã xem, đóng gói trong app để dùng offline. Nền xám nhạt #EDEEF0 ở mức mờ 85%; vùng chọn #D9DCE1, icon xám than. Giữ bo tròn, không bóng, kích thước, tên ba tab, chuyển động ẩn/hiện 460ms, blur và xử lý bàn phím. Giữ nút khi chuyển tab để hiệu ứng chọn chuyển mềm.
2. Màu hệ thống PWA: đổi theme_color còn xanh trong manifest về #F9F9FF, cùng màu nền app. Đồng bộ meta theme-color sau intro kể cả khi app vào thẳng check-in hoặc dùng nhánh khởi động dự phòng. Giữ nền khởi động xanh, PWA id, scope, start_url, biểu tượng, chế độ standalone và viewport-fit/safe-area hiện tại.

Phần đáy hệ thống do Chrome/Android quản lý; cấu hình màu đã cập nhật nhưng chưa kiểm tra trên Android thật. Tùy bản Chrome, Android và điều hướng cử chỉ/ba nút, hệ thống có thể vẫn đặt lớp nền riêng. Hướng dẫn nền tảng: https://developer.chrome.com/docs/css-ui/edge-to-edge

Không đổi thẻ, pattern, màu thẻ, cây, nội dung, mục tiêu, tiến độ, dữ liệu hoặc khóa lưu. Icon dùng Lucide, kèm giấy phép trong LUCIDE-LICENSE.txt.

## Cập nhật GitHub

Upload toàn bộ nội dung bên trong `Shin-routine-M3.3.8-main` vào đúng repository/thư mục đang dùng, gồm `routine-navigation.js`, `routine-navigation.css`, manifest, các tệp còn lại, `.nojekyll` và `assets/`. Giữ địa chỉ app. Chọn Cập nhật nếu có thông báo, đóng rồi mở lại PWA. Chrome có thể cần thêm thời gian cập nhật màu manifest của bản cài đặt; không xóa dữ liệu hay gỡ app để đổi màu.
