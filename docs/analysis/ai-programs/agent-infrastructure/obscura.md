---
title: "Obscura"
created: 2026-06-09
updated: 2026-07-23
type: repository-analysis
repo_url: "https://github.com/h4ckf0r0day/obscura"
category: "ai-programs/agent-infrastructure"
tags: ["agent-infrastructure", "headless-browser", "browser-automation", "web-scraping", "ai-agents", "cdp", "mcp", "puppeteer", "playwright", "rust", "stealth"]
previous_repo: ""
successor: ""
primary_language: "Rust"
license: "Apache-2.0"
stars: 19586
forks: 1417
last_checked: 2026-07-23
last_verified: 2026-07-23
evidence: "Current GitHub REST/GraphQL metadata, README/docs/release/compare/tree/community/security review at main commit 36d8e431400269b6c3d59726c6a4514b83f78639, plus retained 2026-06-09 local Cargo test and example.com CLI smoke evidence at older commit f64aca8064d67836804f979be225cbce820905da. Current code was not built or run; no Docker image, Puppeteer/Playwright client, real MCP client, stealth bypass, or benchmark rerun."
archived_reason: ""
docker_support: true
gpu_required: false
estimated_cpu: "low to moderate for single-page fetch/scrape/CDP serving; scales with page JavaScript complexity and concurrency; project docs recommend one worker per CPU core for serve --workers"
estimated_memory: "README and benchmark repo report roughly 30 MB class per cold/simple Obscura process and low hundreds of MB under some multi-worker benchmarks, but docs also note default 64-bit V8 heap is 4 GB and heavy SPAs may require tuning"
estimated_storage: "small binary/image footprint relative to Chrome; current README reports about 70 MB binary and roughly 57 MB Docker image, while cookies/localStorage, dumps, logs and scrape outputs grow with workload"
status: active
ratings:
  capability: 4
  usability: 4
  performance: 4
  code_quality: 4
  documentation: 4
  community: 3
  maturity: 2
  extensibility: 4
  security: 3
  recommendation: 3
overall_score: 3.5
sources:
  - "[GH] https://github.com/h4ckf0r0day/obscura"
  - "[GH:api] Authenticated GitHub REST/GraphQL snapshot 2026-07-23: created_at=2026-04-13T10:31:41Z, pushed_at=2026-07-22T17:12:44Z, default_branch=main, commit=36d8e431400269b6c3d59726c6a4514b83f78639, stars=19586, forks=1417, subscribers=57, open issues=11, open PRs=8, primary_language=Rust, license=Apache-2.0, sizeKB=4567"
  - "[GH:graphql] GitHub GraphQL snapshot 2026-07-23: open issues=11, open PRs=8, releases totalCount=11; REST metadata and releases endpoints were used for the remaining current counts"
  - "[GH:languages] GitHub languages API snapshot 2026-07-23: Rust=1075171 bytes, Dockerfile=2089"
  - "[GH:releases] GitHub releases API checked 2026-07-23: latest stable v0.1.10 published 2026-07-11 adds controlled-input automation, iterative traversal for deep/heavy pages, CDP file uploads and bounded streaming downloads; v0.1.9 published 2026-06-24 adds request/response interception and a global stealth flag; v0.1.8 published 2026-06-11; GraphQL reports 11 releases total"
  - "[GH:compare] https://github.com/h4ckf0r0day/obscura/compare/f64aca8064d67836804f979be225cbce820905da...36d8e431400269b6c3d59726c6a4514b83f78639 — GitHub compare API checked 2026-07-23: ahead_by=171; current main includes post-v0.1.10 commits described as moving CDP connections to dedicated V8 isolates and improving concurrent HTTP MCP clients, while current Architecture-overview.md still documents one shared isolate/lock; this is unreleased-main evidence and a documentation-drift signal, not a released architecture guarantee"
  - "[GH:community] GitHub community profile/contributors API snapshot 2026-07-23: health_percentage=71; README, Apache-2.0 LICENSE, SECURITY.md and CONTRIBUTING.md detected; CODE_OF_CONDUCT, issue template and PR template not detected; contributors API returned 40 entries"
  - "[GH:advisories] GitHub repository security-advisories API checked 2026-07-23: returned []; current release notes still document prior security fixes, so an empty endpoint is not proof of safety"
  - "[GH:local-scan] GitHub tree/languages/community API scan at 36d8e431400269b6c3d59726c6a4514b83f78639 on 2026-07-23: files=138, Rust files=82, markdown files=27, workflows=2, test-ish files=19, Dockerfile/SECURITY.md/CONTRIBUTING.md/LICENSE/Cargo.toml present, workspace still has eight crates; static scan only, current code was not built or tested"
  - "[GH:test] Local command at /opt/data/tmp/repo_obscura on 2026-06-09: cargo test --no-run succeeded; cargo test succeeded with all visible unit/integration/doc tests passing and no failed tests; output included two warnings in crates/obscura-net/src/cookies.rs about unused import std::io::Write and dead_code test_save_load_roundtrip"
  - "[GH:smoke] Local CLI smoke test 2026-06-09: ./target/debug/obscura fetch https://example.com --eval 'document.title' --timeout 10 --quiet returned 'Example Domain'; ./target/debug/obscura fetch https://example.com --dump text --timeout 10 --quiet returned the expected Example Domain text excerpt"
  - "[GH:readme] https://github.com/h4ckf0r0day/obscura/blob/36d8e431400269b6c3d59726c6a4514b83f78639/README.md — inspected 2026-07-23: Rust headless engine for scraping/agent automation; V8, DOM, CDP, Puppeteer/Playwright path, MCP, release binaries, Docker, fetch/scrape/serve/mcp and roughly 70 MB binary / 57 MB image claims; current code was not run"
  - "[GH:docs] Current docs/README.md, Use-the-MCP-server.md, Run-in-production-at-scale.md and SECURITY.md at commit 36d8e431400269b6c3d59726c6a4514b83f78639 inspected 2026-07-23; docs cover installation, extraction, clients, source build, stealth/proxies, MCP, Rust library, storage/interception, production, CLI/env, architecture and testing"
  - "[GH:architecture] https://github.com/h4ckf0r0day/obscura/blob/36d8e431400269b6c3d59726c6a4514b83f78639/docs/Architecture-overview.md — inspected 2026-07-23: still documents eight crates and a shared single-threaded V8 isolate guarded by a tokio mutex; robustness section documents watchdog, bounded event loops, panic-safe DOM ops and cycle rejection; compare evidence indicates current main implementation has moved beyond this prose"
  - "[GH:cli] Current README at commit 36d8e431400269b6c3d59726c6a4514b83f78639 inspected 2026-07-23: documents global proxy/robots/user-agent/storage/private-network/V8 flags and fetch, serve, scrape, mcp subcommands; serve examples default to loopback"
  - "[GH:mcp] Current docs/Use-the-MCP-server.md at commit 36d8e431400269b6c3d59726c6a4514b83f78639 inspected 2026-07-23: stdio/HTTP MCP exposes navigation, snapshot, extraction, interaction, wait/evaluate, network/console, cookies/storage and tabs tools"
  - "[GH:stealth] https://github.com/h4ckf0r0day/obscura/blob/36d8e431400269b6c3d59726c6a4514b83f78639/docs/Configure-stealth-and-proxies.md — raw source fetched 2026-07-23: wreq TLS fingerprints, tracker blocklist, webpki roots, browser-profile/timezone/geolocation controls; explicitly excludes Cloudflare interactive challenges, Datadome/Akamai active challenges, CAPTCHAs and IP rate limiting"
  - "[GH:production] Current docs/Run-in-production-at-scale.md at commit 36d8e431400269b6c3d59726c6a4514b83f78639 inspected 2026-07-23: Docker/systemd, workers, V8 heap, concurrency, limits and reverse proxy; CDP server has no built-in auth and public 0.0.0.0 binding requires external auth/isolation"
  - "[GH:env] https://github.com/h4ckf0r0day/obscura/blob/36d8e431400269b6c3d59726c6a4514b83f78639/docs/Environment-variables.md — raw source fetched 2026-07-23: private-network off by default with DNS-resolution/rebinding checks, navigation/CDP/fetch timeouts, MCP HTTP Origin allowlist, profile/timezone/geolocation controls; HTTP_PROXY/HTTPS_PROXY/NO_PROXY not honored"
  - "[GH:security-policy] https://github.com/h4ckf0r0day/obscura/blob/36d8e431400269b6c3d59726c6a4514b83f78639/SECURITY.md — inspected 2026-07-23: coordinated-disclosure email, 90-day target and explicit attack surfaces for CDP/MCP, JS/DOM, fetch/proxy, private network, storage and stealth; not a security audit"
  - "[DockerHub] https://hub.docker.com/r/h4ckf0r0day/obscura extracted 2026-06-09: Docker Hub page calls it the official image, shows usage for CDP server/fetch/scrape/MCP, reports roughly 3.3K pulls/views in extracted page context, image tag summary size about 55.2 MB and last updated 7 days ago"
  - "[Benchmark] https://github.com/h4ckf0r0day/obscura-benchmark local shallow clone /opt/data/tmp/repo_obscura_benchmark at commit 1d9cc567c56cc3fbfb9fc69bc00aca0acf349b9e; README states latest full pass 2026-06-04 on 10-core host, WPT Core 321,042/393,513 = 81.6%, Relevant 513,559/599,962 = 85.6%, Full 583,813/929,308 = 62.8%, 33/33 obstacle stages, selected cold React/Preact/Vue comparisons around 59-97 ms and 29-32 MB versus Chrome 1032-1144 ms and 184-186 MB, 24-page real-world corpus rendered 22/24 for both Obscura and Chrome, and 1500-URL reliability sweep with 1438 rendered, 58 thin/blocked, 4 bounded hangs, 0 crashes and 0 panics; these benchmark claims were scanned but not rerun in this analysis"
  - "[WikiLocal:comparisons] Existing local wiki analyses under /opt/data/wiki/github-repo-wiki/ai-programs/agent-infrastructure/ checked 2026-06-09 for positioning-only comparison: browser-use.md, chrome-devtools-mcp.md, firecrawl.md, context7.md and mcp-servers.md; these comparison rows were not re-audited under this analysis"
---

# Obscura

> 面向 AI agents 与 web scraping 的 Rust headless browser engine：不启动完整 Chrome，而用 V8 + 自建 DOM + CDP/MCP 接口提供轻量浏览器能力；非常值得跟踪和小规模试用，但目前仍是 0.1.x 早期基础设施。
>
> **状态**: `active` · **总分**: 3.5/5 · **推荐度**: 3/5
> **核验版本**: 当前 metadata/docs/main commit `36d8e431400269b6c3d59726c6a4514b83f78639`（2026-07-23）；本地 test/smoke 仍来自旧 commit `f64aca8064d67836804f979be225cbce820905da`（2026-06-09）
> **验证边界**: 本轮未重建或运行当前 main；旧版本曾通过 `cargo test` 与 `example.com` CLI smoke。Docker、Puppeteer/Playwright、真实 MCP client、stealth/fingerprint 与 benchmark 仍未实测。

## 一句话总结

Obscura 是一个 Rust 写的 headless browser substrate：它试图在“普通 HTTP 抓取太弱”和“完整 Headless Chrome 太重”之间，给 agents / scraping workloads 提供 V8 JavaScript、DOM、CDP、MCP、Puppeteer/Playwright 兼容与低资源占用的中间层 [GH][GH:readme][GH:architecture]。

## 总体评价

这个仓库应归入 `ai-programs/agent-infrastructure`。它不是一个最终用户 agent，也不是传统 HTTP crawler；它提供的是 agent runtime 中的 **browser/data acquisition substrate**：agent 可以用它 fetch/render/extract 页面，也可以通过 CDP 或 MCP 进行 browser automation [GH:readme][GH:mcp]。

Obscura 的核心工程取舍很清楚：不做完整浏览器的 rendering/layout/paint pipeline，而是把 scraping 和 agent automation 需要的部分抽出来——HTTP fetch、HTML parse、live DOM、V8 runtime、常见 Web API shim、CDP server、request interception、cookies/storage、markdown extraction 和 parallel scrape [GH:architecture][GH:cli][Benchmark]。这解释了为什么它可以比 Chrome 轻：它不是“小 Chrome”，而是“面向抓取/自动化语义的 browser-like engine”。

旧核验版本的实际验证信号比普通 README 分析更强：commit `f64aca...` 的 `cargo test --no-run` 与 `cargo test` 均通过，`example.com` 的 eval/text smoke 也成功 [GH:test][GH:smoke]。但当前 main 已比该点 ahead 171 commits；这些结果只能证明旧版本最小路径，不可外推为当前 v0.1.10/main 的运行验证 [GH:compare]。

但成熟度必须保守。仓库创建于 2026-04，当前稳定 release 仍是 v0.1.10；主线在 release 后继续调整并发与 V8 isolate 架构，而 Architecture overview 仍写 shared single isolate/lock [GH:api][GH:releases][GH:compare][GH:architecture]。高速迭代是活力，也是文档/兼容性漂移风险：其势可观，其用须审。

repo/product 边界也要分清：开源 engine 在仓库中以 Apache-2.0 发布；README 提到正在筹备 hosted Obscura Cloud，但本条只分析开源仓库和已检查的 Docker Hub 页面，未评估 future hosted product；Docker Hub 官方镜像只做页面提取与元数据检查，本轮没有实际运行容器 [GH:readme][DockerHub]。

## 推荐度：3/5

> 2026-06 推荐度重校准：很新的 browser/CDP/MCP substrate；smoke test 只能支持 POC，不支持 4/5 采用推荐。


**定位**：适合 Rust / agent-infra / scraping 工具开发者，以及想降低 Headless Chrome 资源成本、同时仍需要 JavaScript/DOM/CDP/MCP 的实验者和工程团队。

推荐度 3/5，指的是“值得加入关注列表并做隔离 POC”，不是“可无脑替换生产 Chrome”。加分理由：它命中 agent browser substrate 的真实缺口；Rust workspace 分层清楚；release binary、Docker、CDP、MCP、Puppeteer/Playwright、CLI scrape/fetch/Rust library 多入口齐全；旧核验版本的本地测试与 smoke test 成功 [GH:readme][GH:architecture][GH:test][GH:smoke]。

不给 5 的原因也明确：项目极新、仍是 0.1.x；上游 benchmark 很亮眼但本轮未复现；CDP/MCP/stealth 都是高边界复杂度能力；serve/MCP 一旦暴露端口就近似“把浏览器控制权给对方”，官方生产文档也明确说 CDP server 没有内置 auth [GH:production][Benchmark]。

## 优势

1. **抽象层有意思**：不是套壳 Chrome，而是用 Rust + V8 + DOM + CDP 重新取一个 scraping/agent automation 子集，避开 rendering/layout/paint 的重量 [GH:architecture][Benchmark]。
2. **入口完整**：CLI `fetch/scrape/serve/mcp`、CDP server、Puppeteer/Playwright connect、MCP server、Rust library API、Docker image 都有文档入口 [GH:readme][GH:cli][GH:mcp][DockerHub]。
3. **资源效率目标明确**：README 和 benchmark repo 都强调低内存、低启动成本；benchmark repo 还给出 WPT tier、obstacle course、real-world corpus、reliability sweep 等较系统的测量框架 [GH:readme][Benchmark]。
4. **Rust 工程结构清晰**：八个 crate 分层对应 CLI、CDP、browser、JS、DOM、network、MCP 与 embeddable API；2026-06-09 的旧核验 commit 曾通过 `cargo test` [GH:architecture][GH:test]。
5. **agent-native 能力强**：MCP tools 覆盖导航、snapshot、markdown/links/extract、点击/填表/键盘、JS evaluate、network/console、cookies/storage、tabs，适合接到 Claude Code/Cursor 等 agent 工具面 [GH:mcp]。

## 劣势

1. **成熟度低**：仓库 2026-04 才创建，当前 v0.1.10；高 star 和快速 release 是热度/维护信号，不是长期稳定性证明 [GH:api][GH:releases]。
2. **不是完整浏览器**：它有意不实现完整 rendering/layout/paint；这对 scraping 是优势，对需要真实像素、视觉布局、复杂交互、canvas/media/hardware 的任务则是边界 [Benchmark]。
3. **stealth 不能神化**：官方 stealth 文档明确不处理 Cloudflare interactive challenges、Datadome/Akamai active challenges、CAPTCHAs 或 IP rate limit [GH:stealth]。
4. **CDP/MCP 暴露风险高**：serve/MCP 一旦可被未授权访问，攻击者可以驱动浏览器、发起请求、读页面状态；官方文档明确无内置 auth [GH:production]。
5. **治理仍未齐全**：community profile 已升至 71，SECURITY.md 与 CONTRIBUTING.md 已补上，但仍未检测到 CODE_OF_CONDUCT、issue template 或 PR template [GH:community] [GH:security-policy]。
6. **文档存在可证漂移**：当前 Architecture overview 仍写共享单 V8 isolate/lock，而 main compare 中已出现 per-CDP-connection isolate commits；采用前必须按目标 commit 对齐源码、文档与 release [GH:architecture][GH:compare]。

---

## 适合什么场景

- 需要在 VPS / agent runtime 中做轻量网页 fetch、JS 执行、DOM extraction、markdown/text/links/assets dump [GH:cli][GH:smoke]。
- 想给 AI agent 一个比普通 HTTP client 更接近 browser 的 substrate，但又不想承担完整 Chrome 的内存和启动成本 [GH:readme][Benchmark]。
- 通过 CDP 接 Puppeteer / Playwright 做有限 browser automation，尤其是 DOM/JS/网络请求层面的任务 [GH:readme][GH:cli]。
- 通过 MCP 暴露 browser tools 给 Claude Desktop、Claude Code、Cursor 等 MCP-capable clients [GH:mcp]。
- 学习 Rust browser-like engine、CDP server、V8 embedding、DOM/Web API shim、agent browser tool taxonomy 的工程设计 [GH:architecture]。

## 不适合什么场景

- 需要真实视觉渲染、layout、paint、screenshot fidelity、canvas/media/hardware 完整浏览器行为的任务；这类仍应使用 Chrome/Playwright 真浏览器 [Benchmark]。
- 需要穿过强反爬/强风控的生产 scraping：stealth 文档明确不处理 Cloudflare interactive challenges、CAPTCHAs 和主流 bot manager active challenges [GH:stealth]。
- 高敏生产账号、内网系统、云控制台或支付后台的 browser automation，除非先做网络隔离、端口鉴权、最小权限账号和审计日志 [GH:production][GH:env]。
- 希望获得长期稳定 API / enterprise-grade support 的生产系统；当前仍是 0.1.x，适合作为 POC 和跟踪项，而非稳定基础设施默认项 [GH:releases]。
- 需要严格遵守 HTTP_PROXY/HTTPS_PROXY/NO_PROXY 环境变量语义的环境；Obscura 文档明确不 honor 这些变量，需要用 `--proxy` 或 `OBSCURA_PROXY` [GH:env]。

## 与类似项目对比

| 项目 | 定位 | 相对本项目 |
|------|------|-----------|
| Browser Use | Python browser-agent library/cloud browser product | Browser Use 更偏 LLM action loop + Playwright/browser/cloud session；Obscura 更偏轻量 browser engine/CDP/MCP substrate |
| Chrome DevTools MCP | Chrome 官方 DevTools/MCP bridge | Chrome DevTools MCP 操作真实 Chrome，调试能力更贴近完整浏览器；Obscura 用 Rust/V8/DOM 子集换更低资源成本 |
| Firecrawl | Web data ingestion / scrape / crawl / parse API | Firecrawl 更像 hosted/self-host web data pipeline；Obscura 更底层，是可本地运行的 browser-like engine 与 CDP/MCP server |
| Context7 | 文档上下文 grounding layer | Context7 抓库/API 文档事实；Obscura 抓开放 Web 页面和可执行 DOM/JS 状态 |
| MCP Servers | MCP reference server 集合 | MCP Servers 是协议/工具样板集合；Obscura 提供具体 browser automation MCP server |

上述项目按 `ai-programs/agent-infrastructure` 同类范围做定位级对比，依据本地 wiki 既有条目的标题级定位与分类语境，而非本轮重新抓取外部事实；未按同一 10 维度框架重审，表格不比较未重新审计的质量、速度或安全性 [WikiLocal:comparisons]。

---

## 它能做什么

评分 4/5。

- **单页 fetch/render/extract**：`obscura fetch` 支持 HTML/text/links/markdown/assets/original dump、CSS selector、JS eval、timeout、wait-until、output file 等 [GH:cli]。
- **并行 scrape**：`obscura scrape` 支持多 URL、concurrency、per-page eval、JSON/text output，并依赖旁边的 `obscura-worker` [GH:cli]。
- **CDP server**：`obscura serve` 暴露 WebSocket endpoint，可被 Puppeteer/Playwright 通过 CDP 接入；README 列出 Target/Page/Runtime/DOM/Network/Fetch/Storage/Input/LP 等 domain 方法 [GH:readme][GH:cli]。
- **MCP server**：`obscura mcp` 通过 stdio 或 HTTP 暴露 browser tools 给 MCP clients [GH:mcp]。
- **Stealth / proxy / storage**：支持 HTTP/SOCKS proxy、custom user-agent、cookies/localStorage persistence、stealth TLS fingerprint / tracker blocklist [GH:stealth][GH:cli]。
- **Rust library**：workspace 有 `obscura` embeddable API crate，架构文档也把它列为 Browser/Page/Element/CookieStore 的库 API [GH:architecture]。
- **Robustness controls**：navigation timeout、CDP command timeout、fetch/XHR timeout、V8 watchdog、panic-safe DOM ops 和 private-network 默认阻断 [GH:architecture][GH:env]。

不给 5 的原因：它并非完整 Web browser；layout/rendering/media/hardware 等完整浏览器能力不在目标内；复杂 Puppeteer/Playwright parity、真实 MCP client 可靠性和 stealth 通过率本轮未实测。

## 运行环境与资源占用

| 场景 | CPU | 内存 | 存储 | 说明 |
|------|-----|------|------|------|
| 单页 CLI fetch | 低到中 | README/benchmark 报告约 30 MB class，但取决于页面 JS 和 V8 heap | 小 | 本轮 `example.com` smoke test 成功，未做 RSS 复测 [GH:smoke][GH:readme] |
| CDP/MCP serve | 随页面和 client 数增长 | docs 说明默认 64-bit V8 heap 4 GB，可调小/调大 | 小到中 | 需要管理端口、WebSocket、cookies/storage 和日志 [GH:production][GH:env] |
| 并行 scrape | 随 concurrency 增长 | 随 worker/page 增长 | 随输出增长 | docs 建议 serve workers 可按 CPU core；scrape 有 concurrency 参数 [GH:production][GH:cli] |
| Docker | 低到中 | 由容器限制和页面决定 | 当前 README 报告约 57 MB image；2026-06 Docker Hub 页面曾显示约 55.2 MB | 本轮未 run Docker image；数字是上游/页面 claim [GH:readme][DockerHub] |

- **运行时**：release binary 声称无需 Chrome、Node.js 或外部依赖；源码构建需要 Rust 1.75+，首次构建会编译/获取 V8 相关依赖 [GH:readme]。
- **操作系统**：README 提供 Linux x86_64/aarch64、macOS Apple Silicon/Intel、Windows release 下载路径；Linux build 目标 glibc 2.35+ [GH:readme]。
- **Docker**：`docker_support: true`。仓库有 Dockerfile，release workflow 与 Docker workflow；Docker Hub 页面提供官方 image 用法 [GH:local-scan][DockerHub]。
- **GPU**：不需要 GPU，因为它不做完整图形渲染 pipeline。
- **性能评分 4/5**：给 4 是因为架构目标、README、上游 benchmark claims 与本地 smoke test 都支持“轻量、能跑”的判断；但本轮没有复现 benchmark，本地 smoke test 只证明最小路径可运行、不证明资源效率，所以这个 4 的证据强度低于本地复测性能结论；重 SPA latency 也可能混合，故不按 5 处理 [Benchmark][GH:smoke]。

## 上手体验

评分 4/5。

上手路径清楚：README 给 release 下载、AUR、Docker、源码构建、quick start、Puppeteer/Playwright、fetch/scrape/serve/MCP 示例；docs 也有 Installation、Your first fetch、CLI reference、MCP server、production-at-scale 等页面 [GH:readme][GH:docs]。本轮从源码 clone 后 `cargo test` 和 debug binary smoke test 成功，说明 Rust 本地路径并不只是文档幻象 [GH:test][GH:smoke]。

扣一分来自真实部署复杂度：如果要接 agent/MCP/CDP、开 stealth/proxy、持久化 cookies、公开 WebSocket、处理 private network、调 V8 heap 和并发 worker，就已经不是“下载即无脑用”。生产前还要决定端口绑定、认证、反代、网络隔离和资源限制 [GH:production][GH:env]。

## 代码质量

评分 4/5。

当前 workspace 仍分成八个 crate：`obscura-cli`、`obscura-cdp`、`obscura-browser`、`obscura-js`、`obscura-dom`、`obscura-net`、`obscura-mcp`、`obscura` [GH:local-scan]。但架构文档的 shared-isolate 描述落后于当前 main 的 per-connection isolate commits，说明快速重构期的 code/docs synchronization 仍是 4 而非 5 的约束 [GH:architecture][GH:compare]。

2026-06-09 的旧 commit 曾真实执行测试：`cargo test --no-run` 成功，`cargo test` 无 failed tests；覆盖 DOM、CDP、Runtime.evaluate、cookies、robots、MCP 与 concurrency 等路径 [GH:test]。本轮没有在 current main 重跑，因此把它保留为历史可运行证据，而非当前回归结论。

不给 5 的原因：项目太新，未看到覆盖率数据；当前 tree 仍只有两个 workflows；旧测试有两个 warning，且当前 main 没有重跑；stealth、CDP parity、Puppeteer/Playwright 复杂场景和 benchmark suite 也未复现 [GH:local-scan][GH:test][GH:compare]。

## 可扩展性

评分 4/5。

扩展性来自四层：

1. **CDP surface**：外部 Puppeteer/Playwright/CDP clients 可接入；新增 CDP method 有专门文档 [GH:readme][GH:docs]。
2. **MCP surface**：`obscura mcp` 给 agent clients 暴露 browser tools；stdio/HTTP 两种 transport 都有说明 [GH:mcp]。
3. **Rust workspace/API**：分 crate 的架构便于在 DOM、network、JS、CDP、MCP 层分别修改；`obscura` crate 是 embeddable library API [GH:architecture]。
4. **CLI/ops surface**：proxy、storage-dir、private-network flag、V8 flags、timeouts、workers、Docker/systemd/reverse proxy 都可配置 [GH:cli][GH:production][GH:env]。

不给 5 的原因：它不是成熟插件平台；扩展 Web API/CDP 行为仍要改源码和测试；细粒度 permission model、policy enforcement、可审计 tool grants、enterprise plugin lifecycle 还没有形成稳定抽象。

## 文档质量

评分 4/5。

文档总体很好。README 有完整 quick start 和概念定位；docs 覆盖 installation、fetch、extract、Puppeteer/Playwright、MCP、Rust library、cookies/storage、request interception、production、CLI/env、architecture 与 testing/debugging [GH:readme][GH:docs]。SECURITY.md 也已补上披露路径和 attack-surface checklist [GH:security-policy]。

不给 5 的原因是已经观察到具体漂移：Architecture overview 的 isolate model 落后于 current main compare。stealth/fingerprint 细节也必须按目标版本实测；生产文档虽然点出“无内置 auth”，仍不能替代部署方自己的 threat model 与 hardening [GH:architecture][GH:compare][GH:production]。

## 社区与成熟度

| 维度 | 评分 | 说明 |
|------|------|------|
| 社区活跃度 | 3/5 | GitHub 快照显示 stars=19586、forks=1417、subscribers=57、contributors endpoint 40 条、open issues=11、open PRs=8，且已有 11 个 releases [GH:api][GH:graphql][GH:releases]。SECURITY/CONTRIBUTING 与 community health=71 是进步；但项目只有约三个月历史，仍缺 CODE_OF_CONDUCT/issue/PR templates，故不升 4 [GH:community]。 |
| 成熟度 | 2/5 | 仓库创建于 2026-04，当前 v0.1.10；release 能力增长快，但 current main 在 v0.1.10 后仍改 isolate/concurrency architecture，稳定 API、长期生产用户与兼容性历史不足以支撑 3/4 [GH:api][GH:releases][GH:compare]。 |

## 安全与风险

评分 3/5。

本轮 GitHub repository security-advisories API 未发现公开 advisory；这只是“本次未查到公开 GitHub advisory”，不是安全审计证明 [GH:advisories]。

主要风险来自项目性质：

- **CDP/MCP 无内置 auth**：官方生产文档明确说 CDP server has no built-in auth，任何能访问端口的人都能 drive the browser；不能把 `0.0.0.0` 暴露到公网 [GH:production]。
- **Browser automation 权限面**：点击、填表、evaluate JS、network requests、cookies/storage、tabs 等工具都可能触达登录态、页面 secrets、内部 URL 或真实副作用 [GH:mcp][GH:cli]。
- **Private network / SSRF 边界**：private network 默认阻断，当前文档还声明在 DNS resolution 时做 rebinding-safe 检查；但 `--allow-private-network` / `OBSCURA_ALLOW_PRIVATE_NETWORK` 一开，仍须按 SSRF/内网访问风险治理 [GH:env]。
- **Stealth / proxy 合规风险**：stealth 和 residential proxy 相关 sponsor/usage 很容易被用于灰色 scraping；工具提供能力不等于目标站点 ToS、robots 或法律合规自动满足 [GH:readme][GH:stealth]。
- **MCP Origin allowlist 不是完整 auth**：HTTP MCP 可配置 `OBSCURA_MCP_ALLOWED_ORIGINS` 阻断浏览器跨源请求，但 native client 无 Origin 时仍放行；端口层身份认证仍需外置 [GH:env][GH:production]。
- **安全治理改善但项目仍早期**：已新增 SECURITY.md 与 90-day disclosure target；这改善响应路径，不等于完成第三方安全审计 [GH:security-policy][GH:community]。

因此 security 给 3：不是因为发现了活跃 CVE，而是 attack surface 高、认证需要外部补、项目年轻且治理文件不足。安全使用的最低线是：loopback bind、反代鉴权、网络隔离、低权限账号、禁用不必要的 private network/file access、限制 proxy/egress、按 release 及时升级。

## 学习价值

学习价值很高。Obscura 是一个很好的 Rust + agent infrastructure 样本：它展示了如何在完整浏览器和普通 HTTP client 之间定义一个 browser-like subset，如何把 V8、DOM、CDP、MCP、CLI、Docker、timeouts/watchdogs 和 scraping extraction 组织成一个 agent-native substrate [GH:architecture][GH:mcp]。

对 Develata 来说，它还很适合研究“工程抽象的边界”：为了资源效率，它舍弃 rendering/layout/paint；为了兼容 agents，它保留 CDP/MCP；为了可靠性，它引入 watchdog、timeouts、private-network default deny。取舍之道，在此可见。即使暂不生产采用，也值得持续跟踪它的 benchmark、CDP parity、MCP tool surface 和安全治理演化。
