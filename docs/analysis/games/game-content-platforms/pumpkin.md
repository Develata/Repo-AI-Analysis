---
title: "Pumpkin"
created: 2026-08-09
updated: 2026-08-09
type: repository-analysis
repo_url: "https://github.com/Pumpkin-MC/Pumpkin"
category: "games/game-content-platforms"
tags: [minecraft, minecraft-server, rust, java-edition, bedrock-edition, wasm, plugins, docker, game-server]
previous_repo: ""
successor: ""
primary_language: "Rust"
license: "GPL-3.0"
stars: 10625
forks: 721
last_checked: 2026-08-09
last_verified: 2026-08-09
evidence: "Authenticated GitHub API + official README/docs/roadmaps + local shallow-clone static scan at 50fe9f7 + exact-HEAD GitHub Actions results. No local cargo build/test, server launch, client join, plugin run, Docker run, gameplay check, or performance/stress benchmark; pumpkin-plugin-wit submodule was not initialized in the local shallow clone."
archived_reason: ""
docker_support: true
gpu_required: false
estimated_cpu: "普通 64-bit server CPU；并发玩家、区块生成与实体 AI 增加负载；未实测"
estimated_memory: "官方当前 benchmark 表未给出有效数值；应按世界、视距、玩家数与插件实测"
estimated_storage: "nightly executable snapshot约 68–88 MB；世界、日志、插件、缓存与源码构建产物另计"
status: active
ratings:
  capability: 4
  usability: 3
  performance: 3
  code_quality: 4
  documentation: 4
  community: 4
  maturity: 1
  extensibility: 3
  security: 3
  recommendation: 3
overall_score: 3.2
sources:
  - "[GH] https://github.com/Pumpkin-MC/Pumpkin — README inspected 2026-08-09; project says it is under heavy development and lists Java, Bedrock W.I.P., world/player/entity/server/proxy features"
  - "[GH:api] GitHub REST/GraphQL queried 2026-08-09: created_at=2024-07-28, pushed_at=2026-08-08, stars=10625, forks=721, subscribers=58, primary_language=Rust, license=GPL-3.0, archived=false, default_branch=master; languages bytes Rust=76847407, Nix=2804, Dockerfile=1084, Shell=10; open issues=162, open PRs=184, discussions=31; REST open_issues_count=346 (=162 issues + 184 PRs); contributors API first page contained 100 entries"
  - "[GH:releases] GitHub releases/tags API queried 2026-08-09: exactly one release/tag returned, moving tag nightly; release name Nightly Build, prerelease=true; six Linux/macOS/Windows x64/arm64 assets in sampled snapshot, sizes 68,162,344–88,466,912 bytes; no stable release verified"
  - "[GH:roadmap] https://github.com/Pumpkin-MC/Pumpkin/issues/449 — open 1.0.0 roadmap inspected 2026-08-09; stable plugin ABI, 1000+ simulated-player stress test, memory-leak audit, 20 TPS target, unwrap/expect reduction and community alpha test remained unchecked; roadmap describes Alpha as developer/experienced-user test builds that may crash or contain critical bugs"
  - "[GH:tracking] Official tracking issues inspected 2026-08-09: protocol #1401 records Java unit tests/fuzzing, Bedrock fuzzing but Bedrock unit tests unchecked and limited version ranges; world #1403 still records W.I.P./TODO; plugins #1407 was closed as completed; mob AI #1406 was closed as completed"
  - "[GH:head-ci] GitHub Actions/check-runs API for exact HEAD 50fe9f7cd7182c13a856d0a41fd59a5ddcb37f6f queried 2026-08-09: Cargo Build/Test/Lint, Docker deploy and spelling workflows concluded success; check runs included fmt, cargo-machete, debug/release Clippy, nextest/doctest jobs and release builds for Linux/Windows/macOS x64/arm variants"
  - "[GH:activity] GitHub Search API queried 2026-08-09 for 2026-07-09..2026-08-09: 87 merged PRs; across all 87 returned records, median PR creation-to-close interval was 48.35 hours; 54 issues were closed in the same window. These are integration/activity signals, not production-adoption evidence"
  - "[GH:advisories] GitHub repository security-advisories API queried 2026-08-09 and returned []; this means no published repository GHSA was found in this check, not that the server or dependencies were independently audited"
  - "[Docs:quickstart] https://docs.pumpkinmc.org/#quick-start — extracted 2026-08-09; labels the project pre-release/not ready for official release, documents prerelease binaries, source build and ghcr.io/pumpkin-mc/pumpkin:master; Docker support is explicitly experimental"
  - "[Docs:config] https://docs.pumpkinmc.org/config/introduction — extracted 2026-08-09; documents single pumpkin.toml configuration, latest-version focus and third-party ViaProxy boundary for older versions"
  - "[Docs:plugins] https://docs.pumpkinmc.org/plugin-dev/introduction — extracted 2026-08-09; plugin API is explicitly very early and may change at any time; navigation exposes Rust, Python, C#, C, Go and Kotlin plugin guides"
  - "[Docs:benchmarks] https://docs.pumpkinmc.org/about/benchmarks — extracted 2026-08-09; official page warns the comparison is unfair because Pumpkin has fewer features, and current extracted CPU/RAM/startup/file-size tables contain units/placeholders without usable numbers"
  - "[Local:workspace] Local shallow clone /opt/data/tmp/pumpkin-mc-pumpkin-source at 50fe9f7cd7182c13a856d0a41fd59a5ddcb37f6f scanned 2026-08-09; checkout=192 MB including .git; 1,812 tracked Rust files and about 1.74M Rust LOC including generated data; root workspace declares 12 members, Rust 2024/rust-version 1.95 and release lto=fat/codegen-units=1, while rust-toolchain.toml pins nightly-2026-02-18; pumpkin-plugin-wit is a Git submodule and was not initialized; no local build/test/runtime claims"
  - "[Local:quality] Local Linux scan 2026-08-09: Cargo.toml denies broad Clippy groups plus todo/unimplemented/unwrap/expect/panic and unsafe-related lints; `git ls-files '*.rs' | xargs grep -h -F '#[test]' | wc -l` returned 484 and the analogous fixed-string `#[tokio::test]` command returned 58; protocol/NBT fuzz Cargo.toml manifests define nine fuzz binaries total; .github/workflows/rust.yml runs fmt, cargo-machete, debug/release Clippy, nextest, doctests and multi-OS/architecture release builds"
  - "[Local:plugins] Local files inspected 2026-08-09: crates/pumpkin-plugin-api/src/lib.rs exposes WIT/component-model events, commands, scheduling and permission requests; crates/pumpkin/src/plugin/loader/native.rs loads administrator-selected native libraries with full process authority, while its API-version check is compatibility-only, not provenance or isolation; crates/pumpkin/src/plugin/loader/wasm/wasm_host/mod.rs builds Wasmtime/WASI capabilities from plugin-self-declared permissions after subtracting a global blocked_permissions deny-list, with no per-plugin approval flow found in this scan; signature.rs verifies signature self-consistency but a v1 envelope supplies its own public_key_hex instead of binding it to the fetched marketplace key, and verify_wasm_plugin only warns on unsigned/invalid plugins; crates/pumpkin-config/src/plugins.rs exposes the global deny-list"
  - "[Local:docker] Local Dockerfile and docker-compose.yml inspected 2026-08-09: multi-stage Alpine image, non-root UID 2613, port 25565 and TCP healthcheck; Compose uses no-new-privileges, cap_drop ALL and read_only, with writable data bind mount; .github/workflows/docker.yml publishes official linux/amd64 and linux/arm64 GHCR images"
  - "[Local:governance] Local SECURITY.md, CONTRIBUTING.md, CODE_OF_CONDUCT.md, crates/pumpkin/src/main.rs and .github/dependabot.yml inspected 2026-08-09: private vulnerability email and claimed 48-hour response target; contribution guide lines 63-64 and main.rs lines 44-46 advise/require non-blocking Tokio/Rayon separation; Dependabot covers devcontainers, GitHub Actions and Docker but no Cargo ecosystem entry"
  - "[GH:comparisons] Official GitHub metadata/description-level positioning checked 2026-08-09 for PaperMC/Paper, PurpurMC/Purpur and cuberite/cuberite; comparison is taxonomy/positioning only, not equal-depth 10-dimension review"
---

# Pumpkin

> 从零以 Rust 重写、同时追求 Java/Bedrock 协议、Vanilla-like 玩法和 WebAssembly/native 插件的 Minecraft server；工程势头强，但当前仍是明确的 pre-release。
>
> **状态**: `active` · **总分**: 3.2/5 · **推荐度**: 3/5
>
> **验证边界**：本轮核验了官方资料、本地源码结构与 exact-HEAD CI；未本地构建、启动服务器、连接客户端、运行插件/Docker，也未复现实机资源或 1000-player stress benchmark。

## 一句话总结

Pumpkin 适合 Rust/Minecraft protocol 研究者、插件作者和愿意承受 pre-release 变化的测试服管理员；若目标是稳定生产服或即插即用的成熟插件生态，现在应继续观望。

## 总体评价

Pumpkin 的中心价值不是“把现有 Java 服务端换语言编译一次”，而是从协议、世界、实体、玩法到插件 host 重新实现 Minecraft server。README 与追踪 issue 展示的覆盖面已经很广：Java 与 Bedrock 网络、世界读写和生成、玩家/实体逻辑、RCON/Query、代理兼容，以及 native/Wasm 插件框架都已形成可审查代码面。[GH][GH:tracking]

工程质量信号也比一般 pre-alpha 强：Rust workspace 做了清晰拆 crate，Clippy policy 严格，协议/NBT 有 fuzz targets，exact-HEAD CI 在多操作系统/架构上完成测试和 release build，官方还持续生成 nightly binaries 与 GHCR images。[Local:workspace][Local:quality][GH:head-ci]

然而，名实须分。官方 Quick Start 明示尚未 ready for official release；1.0 roadmap 仍缺稳定插件 ABI、压力测试、内存泄漏审计、稳定 tick 目标和 community alpha；插件文档也直言 API 很早期、随时可能变化。[Docs:quickstart][GH:roadmap][Docs:plugins] 因而本文把 Pumpkin 视为**高潜力、可试验的 server implementation**，而不是 Paper/Purpur 的无痛生产替代。

## 推荐度：3/5

**定位**：推荐给愿意在隔离测试环境里追踪 Rust Minecraft server、验证 Java/Bedrock 兼容、研究协议/并发/插件沙箱，或向 upstream 贡献实现的开发者与高级服主。

给 3 的理由是“值得试，但需严格限定场景”。它已有可下载 nightly、官方 Docker image、清晰 Quick Start、广泛功能面和成功的 exact-HEAD CI；这足以越过纯概念阶段。[GH:releases][Docs:quickstart][GH:head-ci] 但所有公开 release 仍只有 moving `nightly` prerelease，官方反复标注 heavy development/pre-release；当前 162 个 open issues 与 184 个 open PR 也显示快速扩展下的整合负载。[GH:api][GH:releases]

对稳定生产服、长期世界或依赖既有 Bukkit/Paper 插件生态的用户，当前采用成本明显高于收益。更稳妥的姿势是：固定 commit 或 digest、保留世界备份、先用测试服与目标客户端/插件做 compatibility matrix，再决定是否扩大使用。

## 优势

1. **Rust-native full server 的目标明确**：协议、世界、实体和玩法不是薄 wrapper，而是 workspace 内分层实现。[GH][Local:workspace]
2. **Java + Bedrock 同仓覆盖**：README、运行入口和协议 tracking 都显示双协议面；Bedrock 仍有 W.I.P./测试缺口，但不是只写在愿景页上的空目录。[GH][GH:tracking]
3. **工程门禁强**：exact-HEAD CI 实际完成 fmt、依赖检查、debug/release Clippy、nextest/doctest 与多平台 release build。[GH:head-ci]
4. **并发边界有自觉**：贡献指南与入口代码明确要求 CPU-heavy 工作进入 Rayon、通过 channel 返回 Tokio，阻止阻塞 async runtime 的常见错误。[Local:governance]
5. **扩展机制有技术含量**：同时存在 native loader 与 Wasmtime component/WASI path；Wasm host 会依据插件自声明权限、扣除管理员全局 block list 后构造网络、环境变量、文件和 HTTP capability。但这不是逐插件审批系统，不能把 capability filtering 等同于完整授权治理。[Local:plugins]
6. **交付面广**：nightly assets 覆盖 Linux/macOS/Windows 的 x64/arm64，另有官方 amd64/arm64 GHCR image。[GH:releases][Local:docker]

## 劣势

1. **成熟度仍是 1/5**：官方称其 pre-release，尚无 stable tag/release；Alpha 路线还允许 crashes 或 critical bugs。[Docs:quickstart][GH:roadmap][GH:releases]
2. **Vanilla parity 未闭环**：README 与 tracking issues 仍有 Bedrock、world、entities 等 W.I.P./TODO；功能 breadth 不等于每条玩法链均已稳定。[GH][GH:tracking]
3. **插件兼容边界不稳定**：文档明确 API 随时可能变化，1.0 roadmap 的 stable ABI 仍未完成。[Docs:plugins][GH:roadmap]
4. **性能证据当前不足**：官方 benchmark 页面主动承认比较不公平，而且抽取到的表格没有可用数字；“Rust + multithreading”只能说明设计方向，不能证明真实服领先。[Docs:benchmarks]
5. **backlog 很大**：point-in-time snapshot 为 162 open issues 与 184 open PR；活跃是一面，review/merge/回归压力是另一面。[GH:api]
6. **插件信任模型需看清**：native plugin 与 server 同进程、拥有完整 authority；Wasm v1 envelope 的签名使用内嵌公钥，未绑定 marketplace key，而 unsigned/invalid 目前也只告警不拒载。[Local:plugins]

---

## 适合什么场景

- 非生产、可丢弃或可完整回滚的隔离测试环境。
- Rust async/concurrency、Minecraft Java/Bedrock protocol、world engine、entity AI 与 fuzzing 的源码学习。
- 为 Pumpkin 本身贡献 Vanilla parity、协议实现、性能测量或跨平台修复。
- 试作 Wasm component-model 插件，并研究权限过滤、WIT API 与 server host 的边界。
- 需要同时观察 Java/Bedrock 客户端接入方向，但能逐项验证实际兼容性的高级用户。

## 不适合什么场景

- 不能接受 crash、未验证的世界持久化/版本兼容风险、API break 或 nightly 行为变化的长期生产服。
- 需要 Paper/Purpur/Bukkit 既有插件直接兼容、无需迁移的服务器。
- 要求经过公开大规模 stress test、明确容量规划和长期版本支持的商业环境。
- 不准备固定版本、做离线备份、演练 restore 和保留回退服务端的服主。
- 把“no published GHSA”理解成“已经做过独立安全审计”的公网高价值服务。

## 与类似项目对比

| 项目 | 定位 | 相对本项目 |
|------|------|-----------|
| Paper | Java/Vanilla lineage 的 Minecraft server | Paper 以 Java 与 Bukkit/Paper API compatibility 为中心；Pumpkin 是 Rust full reimplementation，二者的实现与扩展接口路线不同 |
| Purpur | Paper 下游、强调可配置玩法 | Purpur 围绕 Paper-compatible customization；Pumpkin 从协议、世界和游戏逻辑开始实现独立 server core |
| Cuberite | C++ 轻量 Minecraft server reimplementation | 二者都属于非 Mojang Java server fork 的独立实现；Pumpkin 另行覆盖 Bedrock 与 Wasm component 插件方向 |

上述项目按 `games/game-content-platforms/` 的 Minecraft server/runtime 范围做定位级比较，未按同一 10 维度框架深审，也不构成性能或安全优越性结论。[GH:comparisons]

---

## 它能做什么

评分 4/5。这里的 4 表示“主要功能域覆盖广且已有实质实现”，不表示 Vanilla parity、Bedrock、实体行为和插件稳定性都已经完成。

- 处理 Java Edition server status/login/play 链路，包括 encryption、compression 与多版本 remapping 的部分范围。[GH][GH:tracking]
- 处理 Bedrock/RakNet、加密与压缩；官方 tracking 同时标明 Bedrock unit tests 尚未完成、multi-version support 未完成。[GH:tracking]
- 加载、生成、保存世界和区块，提供 lighting、time、border、liquid/redstone 等 world logic；部分 26.x/world TODO 仍开放。[GH][GH:tracking]
- 实现玩家移动、inventory、combat-related surface、经验/饥饿、实体与 mob AI 等 gameplay surface。[GH][GH:tracking]
- 提供 Query、RCON、commands、permissions、translations、BungeeCord/Velocity proxy compatibility。[GH]
- 通过 TOML 配置 server、networking、world 与 feature behavior。[Docs:config]
- 加载 native library 或 Wasm component plugins，提供事件、命令、scheduler、AI、forms 与多类 server/game object API。[Local:plugins][Docs:plugins]

capability 不给 5，是因为官方自己保留了大量 W.I.P. 与 1.0 前置条件；一个能跑的 feature checkbox 不等价于跨玩法、版本和长时运行都稳定。

## 运行环境与资源占用

| 场景 | CPU | 内存 | 存储 | 说明 |
|------|-----|------|------|------|
| 试验服 / 少量玩家 | 普通 64-bit CPU | 未获官方有效数值 | executable snapshot约 68–88 MB，world/logs 另计 | 可用 nightly 或 experimental Docker；本轮未运行 |
| 开发构建 | 多核 CPU 有利 | Cargo/Rust build 可能明显高于 server idle | 本地浅克隆约 192 MB；依赖与 target 可达数 GB | release profile 开 LTO、单 codegen unit，初次构建可能较慢 [Local:workspace] |
| 中大型服务器 | 应按 chunk generation、视距、实体、插件与玩家行为压测 | 未知；需目标 world/client/plugin 实测 | world、backups、logs、plugin/cache 持续增长 | 1.0 roadmap 的 1000-player、memory-leak 与 20 TPS gates 尚未闭环 [GH:roadmap] |

- **运行时**：单一 Rust server executable；native plugin 和 Wasmtime/WASI plugin host 会按配置增加依赖面。[Local:plugins]
- **操作系统**：nightly artifacts 覆盖 Linux、Windows、macOS 的 x64/arm64；roadmap 还列出其他保证平台目标，但本文不把 roadmap 当作已实测矩阵。[GH:releases][GH:roadmap]
- **Docker**：`docker_support: true`，因为官方发布 GHCR amd64/arm64 images 且 docs 给出 `docker run`；但官方明确称 Docker support experimental，本轮未拉取/运行 image。[Docs:quickstart][Local:docker]
- **GPU**：不要求 GPU。
- **外部依赖**：运行时可独立托管；online authentication、plugin marketplace/public-key fetch、代理/第三方兼容路径会引入相应网络边界。[Local:plugins][Docs:config]

performance 评分 3/5。代码中有 Tokio/Rayon 分工、concurrent structures、release LTO 与 cache-aware 设计信号，但没有本轮 runtime measurement；官方 benchmark 表也暂不能支撑 CPU/RAM/吞吐结论。[Local:workspace][Local:governance][Docs:benchmarks] 按 wiki 规则，潜力不可冒充实测。

## 上手体验

评分 3/5。正面是 Quick Start 给出三个入口：下载 prerelease binary、`cargo run --release` 源码构建、官方 GHCR image；TOML 配置集中，默认端口与数据目录形态也容易理解。[Docs:quickstart][Docs:config]

主要扣分来自**首次获得可验证结果的负担**：本轮没有实际走完 first start，不能确认默认配置、世界创建和 client join 的顺滑度；源码路线依赖 Rust nightly，release profile 的 LTO/单 codegen unit 会增加首编译等待；Docker 仍被官方标成 experimental，volume、权限和持久化需自行 smoke；旧客户端还要额外部署第三方 ViaProxy 并验证组合。[Docs:quickstart][Docs:config][Local:workspace] moving nightly 也要求用户固定 commit、asset 或 image digest，才能复现实验。故其书面步骤清晰，但 onboarding 不是“拿来即用”的稳定路径。

## 代码质量

评分 4/5。workspace 将 protocol、world、NBT/codecs、config、data、inventory、plugin API 和 server core 拆成独立 crates；Rust 2024、明确 MSRV、strict Clippy、fmt、cargo-machete、nextest/doctest、多 OS/arch release build 与 fuzz targets 共同形成了较强工程骨架。[Local:workspace][Local:quality][GH:head-ci]

这不是只看 workflow 文件：本轮核对了 exact HEAD `50fe9f7` 的实际 Actions/check-runs，主 Rust CI、Docker 发布和 spelling 均成功。[GH:head-ci] 静态 scan 也发现数百个 test attributes，协议/NBT fuzz manifests 覆盖 decoder/encoder/query/RCON/NBT/decompression 等入口。[Local:quality]

不给 5：没有 coverage ≥80% 证据，本轮没有本地执行 tests；约 174 万 Rust LOC 包含大量 generated game data，审阅成本高；插件/Wasm host 局部仍显式放宽 unwrap/panic lints；pre-release 的功能缺口与大 backlog 说明 CI 不能被等同为产品稳定性。[Local:workspace][Local:plugins][GH:api]

## 可扩展性

评分 3/5。Pumpkin 的扩展面并不窄：Wasm plugin API 已覆盖 events、commands、scheduler、permissions、forms、AI 和大量 game/server types。Wasm host 会读取插件自声明的 permissions，扣除管理员配置中的全局 `blocked_permissions` 后，构造 DNS/TCP/UDP/HTTP/env/data-folder 等 WASI capabilities；本轮没有发现逐插件审批或“默认拒绝所有申请”的管理流程。[Local:plugins]

另有 native dynamic-library loader 与 API version check，但该检查只约束接口兼容性，不提供代码来源认证或进程隔离。[Local:plugins]

但“API 很宽”不等于“ecosystem 已成熟”。官方插件文档明确说 API 很早期且可能随时改变，1.0 roadmap 的 stable ABI 仍未完成；本地 shallow clone 也没有初始化独立的 `pumpkin-plugin-wit` submodule，本文没有编译任何语言的 sample plugin。[Docs:plugins][GH:roadmap][Local:workspace]

此外两条 trust boundary 不同：Wasm path 有 capability filtering，native path 则是进程内 arbitrary code。Wasm 签名也不能充当可信来源证明：v1 envelope 携带自己的公钥，当前校验确认的主要是“module + metadata 与该内嵌密钥的自洽性”，没有把它绑定到抓取的 marketplace key；unsigned、invalid 或 provenance 未知的插件仍只触发 warning 而非拒载。[Local:plugins] 故 3 分最合适：扩展机制已经实质存在，但 compatibility、ecosystem、approval 与 provenance enforcement 仍需长时间验证。

## 文档质量

评分 4/5。官方 docs 已从单页 README 扩展到 Quick Start、configuration 分项、developer networking/world、mobile development、troubleshooting，以及 Rust/Python/C#/C/Go/Kotlin plugin guides；站点还有多语言导航。[Docs:quickstart][Docs:config][Docs:plugins]

值得肯定的是文档会主动写限制：pre-release、experimental Docker、插件 API 早期、第三方 ViaProxy 无官方关联。这比只堆 feature list 更可靠。[Docs:quickstart][Docs:config][Docs:plugins]

扣分也很具体：benchmark 页面当前主体数值为空，不能承担性能决策；1.0、protocol/world/plugin 等状态分散在 GitHub tracking issues；快速开发期下文档和实现易漂移，运维时必须以固定 commit/version 核对。[Docs:benchmarks][GH:roadmap][GH:tracking]

## 社区与成熟度

| 维度 | 评分 | 说明 |
|------|------|------|
| 社区活跃度 | 4/5 | point-in-time snapshot 为 10,625 stars、721 forks、contributors API first page 100 entries；最近 30 天 GitHub Search 返回 87 个 merged PR，全部记录的 creation-to-close median 为 48.35 小时，另有 54 个 closed issues，足以支撑较强 integration activity。184 个 open PR 同时说明 review/merge 负载高；这些数字不证明插件生态成熟或生产采用。[GH:api][GH:activity] |
| 成熟度 | 1/5 | 官方明确 pre-release/heavy development，只有 moving nightly prerelease；插件 API 可随时变化，1.0 前仍有多项稳定性/压力/ABI gates。[GH][GH:releases][Docs:quickstart][Docs:plugins][GH:roadmap] |

这两个分数并不矛盾：Pumpkin 是**社区高度活跃的未成熟项目**。community 的 4 分主要来自多贡献者、近期 PR 响应与整合吞吐，不代表第三方插件生态广度已证实；maturity 的 1 分则来自尚无稳定合同与生产历史。二者不可混为一谈。[GH:activity][GH:api]

## 安全与风险

评分 3/5。

正面信号包括：Rust 对部分 memory-safety 风险提供语言级约束，协议/NBT 有 fuzz targets，仓库配置了严格 panic/unsafe lint policy 与私下漏洞报告渠道；Docker 使用 non-root/cap-drop/read-only/no-new-privileges；Wasm host 也能把插件自声明的网络/env/filesystem 权限扣除全局 deny-list 后映射成 WASI capabilities。[Local:quality][Local:governance][Local:docker][Local:plugins] 这些都是 defense-in-depth 信号，不覆盖依赖漏洞、显式 `unsafe`、native code、游戏逻辑权限或 provenance。

GitHub repository advisories API 本次返回空数组，只能说**本次未发现已发布 GHSA**，不能证明 server、Cargo dependencies、protocol parser、world input 或 plugins 已被独立审计。[GH:advisories] 尤其要注意：

1. Minecraft server 是默认接收不可信网络与复杂 packet/world/plugin input 的长驻服务；
2. Bedrock unit tests 在 tracking issue 中仍未完成，虽然 fuzzing 被标记完成；[GH:tracking]
3. native plugins 与 server 同进程；API version check 只检查兼容性，不提供来源认证或隔离；[Local:plugins]
4. Wasm permissions 是插件自声明 + 管理员全局 deny-list，本轮未发现逐插件 approval workflow；WIT 暴露的 game/server authority 也不能仅凭 WASI I/O filtering 推定为已隔离；[Local:plugins]
5. v1 signature envelope 使用自己的公钥，未绑定到抓取的 marketplace key；unsigned、invalid 或无法证明来源的插件当前仍只告警，不 fail closed；[Local:plugins]
6. Dependabot 配置未覆盖 Cargo ecosystem，本轮也未做 RustSec/OSV/cargo-audit。[Local:governance]

部署建议：只装来源可独立核验的插件；native plugin 按与 server 等权代码审查；Wasm plugin 逐项审阅其自声明权限并用全局 block list 收窄，不把当前签名 warning 当作 trusted provenance；固定 commit/image digest；把 world/config/plugin data 纳入离线备份；用 firewall/VPN/受控 proxy 限制管理面；在 public exposure 前对目标 client/version 做 malformed-input 与 restart/recovery smoke。

## 学习价值

Pumpkin 的学习价值很高，甚至高于它当前的生产采用价值。它把 Minecraft 这类协议密集、状态庞大、实时 tick-driven 的服务端拆成 Rust workspace，并同时处理 Tokio/Rayon 边界、数据生成、跨版本协议、world persistence、entity AI、multi-platform CI、native ABI 与 Wasm component permissions。对系统工程而言，这是难得的“真问题全集”。

更值得学的是它尚未完成的部分：性能页面有方法说明却缺数据，CI 很强却仍是 pre-release，插件 API 很宽却尚无稳定 ABI。此处正见工程判断之要：**骨架可嘉，不替成品；势能可观，不作证据。**
