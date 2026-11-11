# Chuyển bản sao dữ liệu từ TQ37 sang Shin M3

Bản M3 dùng vùng lưu riêng. Nội dung thẻ và bài học đã nằm trong app, còn tiến độ, nhật ký và thư cá nhân cần chuyển bằng chức năng bản sao hiện có. TQ37 không bị thay đổi khi thực hiện cách này.

## 1. Xuất bản sao ở TQ37

1. Mở **đúng link TQ37 đang có bài làm**, trên đúng trình duyệt/hồ sơ bạn thường dùng.
2. Vào **Sổ tay → Cài đặt → Giữ bài an toàn**.
3. Chọn **Lưu bản sao**.
4. Giữ tệp JSON vừa tải, thường có tên `Shin-ban-sao-...json`. Đó là bản sao cá nhân dùng để khôi phục trong app.

Nếu dữ liệu đang ở điện thoại khác, xuất trên điện thoại đó rồi chuyển tệp JSON sang thiết bị bạn muốn dùng M3. Không đổi đuôi tệp sang `.txt`, không sửa nội dung JSON.

## 2. Mở bản sao trong M3

Mở **link GitHub Pages M3 mới**.

**Nếu chưa bắt đầu sử dụng:**

1. Chọn **Bắt đầu** ở màn chào.
2. Ở màn hỏi tên, chọn **Mình đã có bản sao · Khôi phục** phía dưới. Không cần tạo hồ sơ mới trước.
3. Chọn tệp JSON xuất từ TQ37.

**Nếu đã vào app:**

1. Vào **Sổ tay → Cài đặt → Giữ bài an toàn → Khôi phục**.
2. Chọn tệp JSON.

M3 sẽ hiện màn xem trước tên học viên, lớp và các số liệu trong bản sao. Kiểm tra đúng người rồi chọn **Khôi phục**. Thao tác thay bài làm đang có trong **M3** bằng bản sao được chọn; app giữ một bản dự phòng trước khi thay. Nếu M3 đã có phần mới bạn muốn giữ, hãy xuất bản sao M3 trước. Đây không phải thao tác gộp hai bộ dữ liệu.

Nếu thanh đầu đang ghi **Dữ liệu minh họa**, chọn **Thoát Demo** trước rồi khôi phục theo cách trên.

## 3. Đối chiếu sau khôi phục

Kiểm tra:

- Tên, lớp, thầy cô và giờ nhắc.
- Những thẻ đang rèn/duy trì, cấp độ và thẻ tự tạo.
- Nhật ký, ghi chú và các mục đáng nhớ.
- Cây thành tựu, tem chờ viết, lời đang viết dở và thư đã hoàn tất, gồm ngày viết.

Tải lại trang để xác nhận dữ liệu vẫn còn. Sau khi kiểm tra xong, nên **Lưu bản sao** một lần từ M3 để có mốc dữ liệu mới.

## Những điểm cần nhớ

- Dữ liệu được lưu trong trình duyệt, theo địa chỉ và vùng lưu của app; mở một link mới không tự chuyển bài làm từ TQ37 sang.
- Đưa mã nguồn lên GitHub không phải đưa tiến độ học viên lên đó. **Không upload các tệp JSON cá nhân vào repository.**
- Đổi máy/trình duyệt/hồ sơ sử dụng thì xuất bản sao và khôi phục lại trên nơi mới. Không dùng chế độ riêng tư làm nơi lưu bài lâu dài.
- Nếu chọn nhầm bản sao, vào **Giữ bài an toàn → Xem bản trước lần khôi phục** để xem và xác nhận khôi phục bản dự phòng, hoặc mở lại tệp JSON đúng.
- Khi app chưa lưu được, giữ trang đang mở, dùng **Thử lưu lại** hoặc **Xuất bản sao** theo thông báo. Không xóa dữ liệu trình duyệt để xử lý lỗi khi chưa có bản sao.

Nguồn về cơ chế lưu trong trình duyệt: [MDN localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage). Các bước và tên nút phía trên được đối chiếu với TQ37 và bản phát hành M3 này.
