# Shin routine · M3.1.6

Bộ phát hành độc lập, dựa trên M3 Review 04 đã duyệt: xanh Shin, Roboto Flex, Material Symbols Rounded và Material 3 Expressive tinh gọn.

**Lần mở đầu dành cho học viên mới, không tự mở Demo.** Toàn bộ 20 thẻ, 5 bài học, nội dung Senpai, cây thành tựu và tem thư ở bốn mốc 1–3–6–11 được giữ nguyên.

## Đưa lên GitHub

Đọc [HUONG-DAN-UPLOAD.md](HUONG-DAN-UPLOAD.md). Tạo repository và link GitHub Pages **riêng**, ví dụ `shin-routine-m3`; giữ repository/link TQ37 đang dùng.

Giải nén gói phát hành và upload **các tệp bên trong**, gồm thư mục `assets/`, để `index.html` nằm ngay ở gốc repository. Không upload mỗi tệp ZIP rồi dùng ZIP làm website. Chọn nguồn Pages là `main` và `/(root)` theo hướng dẫn.

App chạy bằng các tệp tĩnh, không cần cài thư viện hoặc chạy build trên GitHub. `.nojekyll` đã có trong gói.

## Chuyển dữ liệu từ TQ37

Đọc [KHOI-PHUC-TU-TQ37.md](KHOI-PHUC-TU-TQ37.md). Trên TQ37, xuất một bản sao JSON từ Sổ tay → Cài đặt → Giữ bài an toàn. Trên link M3 mới, dùng **Mình đã có bản sao · Khôi phục** ở màn bắt đầu, hoặc mục Khôi phục trong Sổ tay nếu đã vào app.

Tệp bản sao học viên được chọn **trong app để khôi phục**, không đưa vào repository GitHub. Bản phát hành này không chứa nhật ký hay thư cá nhân của người dùng.

## Xem thử trên máy

Nhấp đúp **Xem-thu.cmd**; máy cần có Node.js cho cách xem cục bộ này. App mở tại `http://127.0.0.1:8781/shin-routine-m3/`, khác địa chỉ của bản Review. GitHub Pages không cần Node.js.

Hoặc mở terminal trong thư mục này, chạy `node preview.cjs`; dừng bằng Ctrl+C khi xem xong. Mở thẳng `index.html` bằng địa chỉ tệp không phải cách kiểm tra offline/lưu dữ liệu ổn định.

## Dữ liệu và cập nhật

- Dữ liệu học viên nằm trong trình duyệt đang dùng, không nằm trong mã nguồn và không tự đồng bộ giữa thiết bị.
- Bản dùng thật dùng các khóa `shin-m3-v1-data`, `shin-m3-v1-demo`, `shin-m3-v1-mode`. Không tự đọc/ghi các khóa `kzmn-*` của TQ37 hoặc `shin-m3-review-v1-*` của M3 Review 04.
- Sao lưu/khôi phục giữ tiến độ, ghi chú, thẻ tự tạo, bản nháp và thư đã hoàn tất theo định dạng hiện có.
- Font và biểu tượng có sẵn trong `assets/fonts/`; sau lần mở đầy đủ đầu tiên, app chuẩn bị bộ nhớ offline. Mỗi địa chỉ cài app có bộ nhớ offline riêng.
- Khi cập nhật sau này, giữ tên khóa lưu trữ và tăng số phiên bản app/service worker. Nếu app báo có bản mới, lưu phần đang làm, đóng hộp thoại rồi chọn Cập nhật.
- Demo giáo viên vẫn là thao tác chủ động theo cách cũ: nhập lớp `DEMO-KZ` ở màn làm quen. Nếu mở Demo, thanh đầu có nhãn **Dữ liệu minh họa** và **Thoát Demo**. Luồng học viên bình thường không tự vào Demo.

## Thành phần trong gói

`index.html`, `app.js`, `letters.js`, các tệp `m3-*.js/css`, `boot.js`, `release.css`, `sw.js`, manifest, hai icon, toàn bộ `assets/fonts/` và giấy phép font. Các tệp `preview.cjs`, `Xem-thu.cmd` chỉ hỗ trợ xem tại máy. Hướng dẫn đi cùng gói; không có báo cáo/ảnh thử hay bản sao dữ liệu học viên.

`app.js` tiếp tục dùng các quy tắc rèn luyện từ TQ37; khác bản Review ở số phiên bản và tên vùng lưu. `boot.js` bỏ tự kích hoạt Demo; giao diện phát hành không có nhãn bản duyệt. `release-compat.js` giữ đúng trạng thái Đang duy trì trong bản sao TQ37/M3 có dấu phiên bản dữ liệu cũ và chuẩn hóa dấu phiên bản khi giáo viên chủ động mở Demo. TQ37 và thư mục M3 Review 04 gốc được giữ nguyên.

Tài liệu nền tảng: [GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site), [nguồn phát hành Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site), [lưu trữ trong trình duyệt](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage). Giấy phép font nằm trong `assets/fonts/`.
