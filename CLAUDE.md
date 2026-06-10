# HANA STAY — 주차 관리 앱 (parking)

전체 규칙: `vagabond840717-wq/hana-stay` 저장소의 CLAUDE.md 참고.

---

## 이 앱 정보
- **배포**: GitHub Pages (이 저장소 루트 index.html)
- **백엔드**: Cloudflare Worker (`worker.js`) — wrangler.toml 참고
- **Worker 배포**: `worker.js` 수정 후 git push → GitHub Actions 자동 배포

## Cloudflare Worker 설정
- account_id: `1514ea545ad6f0bb25c764062b269275`
- KV 네임스페이스: HANA_ROOMS (`e89b1b8beed147a79c2a72d58a12b676`)
- cron: `*/5 * * * *`

## 수정 시 필수 체크
- [ ] worker.js 수정 시 wrangler.toml ID값 정확한지 확인 (오타 이력 있음)
- [ ] push 전 배포 내용 사용자에게 비유로 설명 후 승인받기

## 작업 원칙
- 큰 기능: 설계 먼저 → 사용자 승인 후 구현
- 승인 없이 다음 단계 진행 금지
- 설명은 코딩 용어 말고 일상 비유로
- 작업 완료 후 hana-stay 저장소의 STATUS.md 업데이트 요청할 것
