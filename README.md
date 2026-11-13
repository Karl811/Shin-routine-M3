# Shin routine · M3.3.4

Bộ phát hành độc lập, dựa trên M3 Review 04 đã duyệt: xanh Shin, Roboto Flex, Material Symbols Rounded và Material 3 Expressive tinh gọn.

**Lần mở đầu dành cho học viên mới, không tự mở Demo.** Toàn bộ 20 thẻ, 5 bài học, nội dung Senpai, cây thành tựu và tem thư ở bốn mốc 1–3–6–11 được giữ nguyên.

## Điều chỉnh M3.3.4

- Giảm phần xanh lá đã thêm: trạng thái đã làm, lịch tháng, nền vuốt, lời khen và ánh nền cây theo xanh lam Shin. Nhóm thẻ sức khỏe dùng xám xanh dịu hơn; màu cây tự nhiên được giữ.
- Mặt trước dùng hai dải sóng cong cùng ngôn ngữ mặt sau; bỏ họa tiết vòng tròn đồng tâm và vệt sáng nổi khối. Chỉ giữ viền mảnh và bóng thấp.
- **Thử thách** thu gọn mặc định, chạm tiêu đề mới hiện nội dung; bỏ icon explore. Trạng thái mở chỉ giữ trong phiên sử dụng.
- Thanh điều hướng phẳng, bỏ bóng đổ; di chuyển khoảng 460ms, mượt và chậm hơn.

## Bổ sung M3.3.0

- Thẻ có nền đậm hơn theo nhóm, pattern nhẹ, viền và bóng thấp. Thẻ tự tạo có dấu bút và tên chủ thẻ trên cả hai mặt; sáu màu riêng dùng nền pastel và chữ đậm dễ đọc.
- Hôm nay chào theo tên. Vuốt lộ nền xanh/đỏ dưới thẻ và mở ngay ô nhập của trạng thái đã chọn. Giữ nguyên dòng chờ memo, dữ liệu nháp và ghi chú bắt buộc.
- Công thức chọn mục tiêu **1–7 ngày/tuần**, mặc định 7. Chỉ “Đã làm” được tính vào mục tiêu. Đạt mục tiêu thì các thẻ chưa ghi chuyển xuống **Rèn thêm nếu muốn**; bản nháp vẫn ở danh sách chính. Đổi mục tiêu chỉ áp dụng từ tuần hiện tại.
- Nhật ký thói quen có lịch tháng, tổng theo tháng/từ khi bắt đầu, timeline theo tuần và màu trạng thái. Chuỗi thực hiện tính theo ngày liên tiếp thực tế; chuỗi memo tính riêng, không thay đổi cách lên cấp hoặc chuỗi check-in chung cũ.
- Hành trình ghi nhận các mốc chuỗi ngày, memo, lần đầu vượt mục tiêu và nhịp tốt nhất hiện tại. Cây hiện lần lượt thân → cành → lá → thẻ/thư, rồi đung đưa. Khóm lớn tỏa từ gốc, bố trí ổn định, không xếp thẻ thành lưới. Giữ hiệu ứng gắn thành tựu và chế độ giảm chuyển động.
- 20 lời nhắc ngắn của Shin dựa trên 5 bài học có sẵn. Câu hỏi nhìn lại cuối ngày cá nhân hóa và vẫn tùy chọn.
- Hai gợi ý thử thách tùy chọn mỗi tuần, vào Thứ Ba/Thứ Sáu, hiện trong app. Có tắt/bật, để sau và bỏ qua. Cảm nhận lưu vào nhật ký thói quen liên quan; **không tự cộng XP, chuỗi hoặc mục tiêu**. Chỉ cộng một ngày nếu học viên xác nhận đã thực hiện đúng công thức hiển thị và ngày đó chưa có ghi nhận; không ghi đè memo có sẵn. Không cần đưa thẻ liên quan lên tay.
- Nút sao Tuần cố định 44×44. Thanh điều hướng xanh nhẹ, nền 85%, blur 24px, ẩn khi cuộn xuống và hiện khi cuộn lên; ẩn khi bàn phím mở.
- Màu khởi động PWA Android đổi sang xanh Shin, intro tự động ở các lần sau khoảng 2,1 giây. Android vẫn quản lý màn khởi động hệ thống và kích thước icon; màu cập nhật có thể cần hệ thống nạp lại manifest.

Khi cập nhật M3 đang dùng, **giữ nguyên địa chỉ app** và upload toàn bộ tệp/thư mục, gồm `routine-growth.js` và `routine-growth.css`. Dữ liệu và khóa lưu cũ được giữ; bản sao mới bao gồm mục tiêu, thử thách và trải nghiệm. Bản cũ hơn không có giao diện để đọc các mục mới này.

## Luồng đã có từ M3.2.0

- Ba tab chính: **Hôm nay · Tuần · Hành trình**; mỗi tab có một trang.
- Hôm nay: danh sách theo mốc “Khi…”, vuốt phải đã làm, vuốt trái chưa làm. Chạm icon **Thẻ** để xem mặt trước; chạm tên hoặc **+** để ghi nhận đầy đủ.
- Chọn **Để sau** giữ dòng chờ memo. Bản nháp vẫn được lưu khi tải lại và có thể bổ sung trong check-in cuối ngày. Chỉ ghi nhận đã lưu đủ nội dung mới tăng tiến độ.
- Tuần: chạm chấm ngày để đọc ghi nhận tại chỗ; chạm tên thói quen vào thẳng Nhật ký. Nút sao xem các ghi chú đáng nhớ. Memo cuối ngày vẫn nằm trong nhật ký ngày.
- Cách làm ở đầu thẻ, hai mặt thẻ gọn riêng trong màn hình; mặt trước theo màu nhóm, mặt sau xanh Shin có gợn sóng. Mục “Trở thành…” không bắt buộc.
- Hành trình giữ cây, hiệu ứng, thành tựu, tem và thư; thanh điều hướng nổi có ba tên tab.
- Đặt ưu tiên màn hình dọc. Khả năng khóa hướng khi mở trên trình duyệt phụ thuộc thiết bị; cần thử trên điện thoại thật sau khi cập nhật.

**Nếu đang cập nhật một app M3 đã dùng:** giữ nguyên repository, địa chỉ web và các khóa dữ liệu. Upload toàn bộ nội dung bản mới, gồm hai tệp `routine-flow.js` và `routine-flow.css`; không chỉ thay `index.html`. Chọn **Cập nhật** khi app thông báo có bản mới. Luồng chuyển từ TQ37 bên dưới chỉ dành cho người chuyển sang M3 lần đầu.

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

`index.html`, `app.js`, `letters.js`, `routine-flow.js/css`, các tệp `m3-*.js/css`, `boot.js`, `release.css`, `sw.js`, manifest, hai icon, toàn bộ `assets/fonts/` và giấy phép font. Các tệp `preview.cjs`, `Xem-thu.cmd` chỉ hỗ trợ xem tại máy. Hướng dẫn đi cùng gói; không có báo cáo/ảnh thử hay bản sao dữ liệu học viên.

`app.js` tiếp tục dùng các quy tắc rèn luyện từ TQ37; khác bản Review ở số phiên bản và tên vùng lưu. `boot.js` bỏ tự kích hoạt Demo; giao diện phát hành không có nhãn bản duyệt. `release-compat.js` giữ đúng trạng thái Đang duy trì trong bản sao TQ37/M3 có dấu phiên bản dữ liệu cũ và chuẩn hóa dấu phiên bản khi giáo viên chủ động mở Demo. TQ37 và thư mục M3 Review 04 gốc được giữ nguyên.

Tài liệu nền tảng: [GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site), [nguồn phát hành Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site), [lưu trữ trong trình duyệt](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage). Giấy phép font nằm trong `assets/fonts/`.
