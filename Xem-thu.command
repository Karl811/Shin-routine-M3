#!/bin/zsh
cd -- "$(dirname -- "$0")" || exit 1
shin14Runtime="$(command -v node)"
if [[ -z "$shin14Runtime" && -x "$HOME/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin/node" ]]; then
  shin14Runtime="$HOME/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin/node"
fi
if [[ -z "$shin14Runtime" ]]; then
  print 'Máy cần Node.js để mở bản xem thử.'
  read '?Nhấn Enter để đóng.'
  exit 1
fi
shin14Url='http://127.0.0.1:8782/shin-routine-m3-14/'
if curl -fsS --max-time 1 "$shin14Url" >/dev/null 2>&1; then
  open "$shin14Url"
  exit 0
fi
"$shin14Runtime" preview.cjs &
shin14ServerPid=$!
trap 'kill "$shin14ServerPid" 2>/dev/null' EXIT INT TERM
for shin14Attempt in {1..30}; do
  if curl -fsS --max-time 1 "$shin14Url" >/dev/null 2>&1; then
    open "$shin14Url"
    print 'Giữ cửa sổ này mở khi xem thử Shin M3.3.14. Đóng cửa sổ để dừng.'
    wait "$shin14ServerPid"
    exit 0
  fi
  sleep .2
done
print 'Chưa mở được bản xem thử. Kiểm tra cổng 8782 rồi thử lại.'
read '?Nhấn Enter để đóng.'
