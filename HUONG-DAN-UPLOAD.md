> **Cập nhật M3.3.5 cho app đang dùng:** xem CAP-NHAT-M3.3.5.md. Upload vào đúng repository hiện tại, giữ địa chỉ app. Phần tạo repository bên dưới chỉ dành cho lần cài mới.

# Đưa Shin M3 lên GitHub Pages

## 1. Dùng repository riêng

Đăng nhập GitHub, tạo repository mới, ví dụ **shin-routine-m3**. Với GitHub Free, chọn **Public** để dùng Pages. Giữ nguyên repository, tệp và link TQ37 hiện tại.

Bộ này chỉ chứa app và tài nguyên phát hành. Tệp JSON sao lưu học viên phải giữ ở thiết bị để khôi phục trong app, không upload cùng mã nguồn.

## 2. Upload đủ tệp

1. Giải nén `Shin-Routine-M3-GitHub.zip` trên máy.
2. Trong repository mới, chọn **Add file → Upload files**.
3. Kéo **toàn bộ nội dung bên trong thư mục đã giải nén** vào trang upload, gồm `assets/`, `.nojekyll`, các tệp `.js`, `.css`, manifest, icon và hướng dẫn.
4. Ghi nội dung commit, ví dụ `Phat hanh Shin M3.1.0`, rồi xác nhận lưu lên nhánh `main` theo nút GitHub hiển thị.

Sau upload, kiểm tra cấu trúc:

```text
index.html                 ← ở ngay gốc repository
app.js
letters.js
boot.js
m3-ui.js / m3.css
m3-flows.js / m3-flows.css
m3-cabinet.js / m3-cabinet.css
m3-final.js / m3-final.css
release.css
release-compat.js
assets.css / legacy.css
sw.js
manifest.webmanifest
icon-192.png / icon-512.png
.nojekyll
assets/
  fonts/
    ... các font .woff2 và giấy phép ...
```

**Không chỉ upload tệp ZIP. Không để `index.html` nằm thêm một tầng thư mục ngoài ý muốn.** Giữ cả thư mục `assets/fonts/`; font và biểu tượng đều cần các tệp đó.

Nếu không thấy `.nojekyll` sau upload, dùng **Add file → Create new file**, đặt tên `.nojekyll` và lưu tệp trống ở gốc repository.

## 3. Bật Pages

Trong repository mới, vào **Settings → Pages**. Ở **Build and deployment**:

1. **Source:** chọn **Deploy from a branch**.
2. **Branch:** chọn **main**.
3. **Folder:** chọn **/(root)**.
4. Chọn **Save**.

Chờ GitHub hoàn tất, sau đó mở **Visit site**. Link dự án thường có dạng:

`https://TEN-TAI-KHOAN.github.io/shin-routine-m3/`

`TEN-TAI-KHOAN` và tên repository phải thay bằng thông tin của bạn. Dùng link thật do Pages cung cấp, giữ dấu `/` cuối đường dẫn dự án. Các tài nguyên app dùng đường dẫn tương đối nên không cần sửa mã để thay tên repository.

## 4. Kiểm tra link mới

- Mở bằng cửa sổ chưa có dữ liệu M3: có màn chào **Bắt đầu**, sau đó hỏi tên; không tự hiện hồ sơ Minh Anh hoặc dữ liệu Demo.
- Tạo một thẻ thử, ghi nhận và viết ghi chú; tải lại xem nội dung còn đúng.
- Mở Thư viện, Sổ tay và Cách làm; kiểm tra font, biểu tượng và giao diện trên điện thoại thật.
- Chờ app chuẩn bị offline, rồi thử mở lại và chuyển các màn khi mất mạng. Việc này cần lần tải đầy đủ đầu tiên.
- Khôi phục bản sao từ TQ37 theo [hướng dẫn riêng](KHOI-PHUC-TU-TQ37.md), đối chiếu tên, thẻ, nhật ký, cây và thư.

Không cần thay hoặc xóa bản TQ37 để thực hiện những bước này.

## Khi cập nhật lần sau

Upload toàn bộ các tệp của bản mới vào **repository M3 này**, giữ nguyên link và tên vùng dữ liệu. Không trộn tệp từ các phiên bản khác nhau. Lưu bản sao trước khi cập nhật; khi app hiện thông báo có bản mới, chọn Cập nhật sau khi lưu phần đang làm.

Nguồn chính thức: [tạo Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site), [chọn nhánh/thư mục phát hành](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site), [upload tệp và thư mục](https://docs.github.com/en/repositories/working-with-files/managing-files/adding-a-file-to-a-repository).

Bản M3.3.5 có thêm `routine-growth.js` và `routine-growth.css`; hãy upload cả hai cùng các tệp còn lại. Không đổi địa chỉ app M3 đang dùng để giữ dữ liệu trên trình duyệt.
