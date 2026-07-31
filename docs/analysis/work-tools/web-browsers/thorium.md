---
title: "Thorium"
created: 2026-07-31
updated: 2026-07-31
type: repository-analysis
repo_url: "https://github.com/Alex313031/thorium"
category: "work-tools/web-browsers"
tags: ["web-browser", "chromium", "performance", "simd", "privacy", "linux", "cross-platform", "cpp"]
previous_repo: ""
successor: ""
primary_language: "C++"
license: "BSD-3-Clause"
stars: 7372
forks: 273
last_checked: 2026-07-31
last_verified: 2026-07-31
evidence: "Authenticated GitHub API, official README/docs/website and release inspection, sparse shallow local static scan at commit 91b29e10e3c934ae187d9e7106fc88db64560eea, plus live APT metadata/signature probes. No browser binary was launched, no full Chromium checkout/build/test was run, and no current benchmark was reproduced."
archived_reason: ""
docker_support: false
gpu_required: false
estimated_cpu: "workload-dependent; desktop releases are split by SSE3/SSE4/AVX/AVX2/AVX-512 or ARM target, and actual CPU use scales with pages and extensions"
estimated_memory: "workload-dependent; scales with tabs, renderer processes and extensions; not measured in this review"
estimated_storage: "sampled M138 Linux .deb is 161382052 bytes and declares Installed-Size 770977 KiB; profile/cache are additional"
status: active
ratings:
  capability: 4
  usability: 3
  performance: 3
  code_quality: 2
  documentation: 4
  community: 3
  maturity: 3
  extensibility: 4
  security: 2
  recommendation: 2
overall_score: 3.0
sources:
  - "[GH] https://github.com/Alex313031/thorium"
  - "[GH:api] Authenticated GitHub REST/GraphQL snapshot 2026-07-31: created_at=2021-10-18, stars=7372, forks=273, subscribers=80, open issues=129, open PRs=4, closed issues=860, closed PRs=69, discussions=149, releases=72, tags=75, primary_language=C++, license=BSD-3-Clause, archived=false; REST open_issues_count=133 reconciles to 129 issues + 4 PRs"
  - "[GH:releases] GitHub releases/tags queried 2026-07-31: M150.0.7871.101 published 2026-07-11, M144.0.7559.254 published 2026-06-08, M138.0.7204.303 published 2026-02-18; current main HEAD/tag target is 91b29e10e3c934ae187d9e7106fc88db64560eea"
  - "[GH:transition] Main-repo M144 and M150 release bodies inspected 2026-07-31: both explicitly say they are notification releases with no new binaries/assets; maintainer Alex lacked time, collaborator gz83 performed experimental/beta upgrades in gz83/thorium branches and planned later PR/review; both main-repo releases have assets_count=0 and prerelease=false despite Beta wording"
  - "[GH:M138-assets] https://github.com/Alex313031/thorium/releases/tag/M138.0.7204.303 inspected 2026-07-31: 19 Linux .deb/.rpm/.zip/AppImage assets across SSE3/SSE4/AVX/AVX2/i386; sampled AVX .deb size=161382052 bytes; no checksum/signature companion asset name was found; release says it includes upstream M138 security fixes and several crash/WebRTC/package fixes"
  - "[GH:M150-assets] https://github.com/gz83/thorium/releases/tag/M150.0.7871.101 inspected 2026-07-31: collaborator release is marked prerelease=true and hosts Linux/Windows/macOS/Android assets from gz83/thorium M150-LTS; no checksum/signature companion asset name was found; this is not the canonical main branch"
  - "[GH:M150-performance-scan] gz83/thorium M150-LTS branch inspected 2026-07-31 at commit 979d6e9211a153795eb18a0f727b2e77ebf95502: README makes ThinLTO, PGO and architecture-aware SIMD profiles first-class release goals; args.gn uses thorium_x86_profile=avx, ThinLTO, text-section splitting, chrome PGO phase 2, optimized V8 tiers and WebAssembly SIMD revectorization; recursive tree had 1361 paths, 154 .patch files, no benchmark/Speedometer/JetStream/Octane-named path, and only two GitHub workflows for PAK binaries and macOS icons; TODO still asks for optimized/non-optimized Thorium versus same-revision Chromium/Chrome testing"
  - "[GH:issues] GitHub issue/search snapshot 2026-07-31: sampled open reports include #1230 Windows crash, #1231 Ubuntu hardware acceleration failure, #1216/#1246 site login failures, #1199 password-manager failure, #1197 AppImage extension-update failure, #1220 ARM package architecture mismatch, and #1259 Android background-resume GPU/rendering failure; titles are issue reports, not independently reproduced findings"
  - "[GH:apt-issue] https://github.com/Alex313031/thorium/issues/1164 inspected 2026-07-31: open report documents missing InRelease/Release.gpg and trusted=yes; collaborator said it was planned for upcoming stable M144 and advised against company end-user deployment"
  - "[GH:advisories] https://api.github.com/repos/Alex313031/thorium/security-advisories queried 2026-07-31 and returned []; this only means no published repository advisories were found in that endpoint check"
  - "[GH:community] GitHub community/profile and contents queried 2026-07-31: health_percentage=85; README, BSD-3-Clause license, CODE_OF_CONDUCT and three issue templates present; CONTRIBUTING and PR template absent; contributor API returned 13 entries, heavily concentrated at 4905 contributions for Alex313031 versus 18 for each of the next two"
  - "[GH:SECURITY] https://github.com/Alex313031/thorium/blob/main/SECURITY.md inspected at HEAD 91b29e1: Chromium flaws are referred upstream; Thorium flaws go to public issues or maintainer email for major/zero-day reports; listed fixed major vulnerabilities stop at CVE-2024-4671 fixed in M124"
  - "[Local:scan] Sparse shallow clone /opt/data/tmp/repo_wiki_thorium/clone at commit 91b29e10e3c934ae187d9e7106fc88db64560eea inspected 2026-07-31: git ls-tree -r --name-only HEAD counted 1546 tracked paths, the same command scoped to src counted 593 paths, and suffix counting found 52 .patch files; submodules are thorium-libjxl and infra/upgrader; GitHub tree scan found no .github/workflows entries; inspected README, SECURITY, TODO, infra/BUGS.md, build/version/setup scripts, GN args, and docs including ABOUT_GN_ARGS, ABOUT_RELEASES, BUILDING variants, PATCHES, REBASING and CMDLINE_FLAGS_LIST; infra/BUGS.md's final dated section is 2022, while README links docs/TH_24.md but the tracked file is docs/TH24.md"
  - "[Local:version-build] version.sh at canonical HEAD hardcodes THOR_VER=138.0.7204.306; setup.sh overlays Thorium files and many git-apply patches onto an external Chromium checkout and repeatedly assumes ~/thorium; args.gn enables CFI, stack zeroing, ThinLTO/PGO and SIMD/media options, while treat_warnings_as_errors=false; BUILDING.md points users to Chromium test targets but no project CI execution was found"
  - "[Docs:README] https://github.com/Alex313031/thorium/blob/main/README.md inspected 2026-07-31: Chrome-like Chromium fork; Linux in main repo, other platforms in separate repos; CPU-specific builds; codecs/Widevine/JPEG XL/FTP/privacy/UI/Chromedriver/content-shell features and patch sources"
  - "[Docs:FAQ] https://github.com/Alex313031/thorium/blob/main/docs/FAQ.md inspected 2026-07-31: Google Sync/DRM limitations, one-major-behind LTS rationale, manual rebase/build burden, three-person maintenance model, and explicit statement that Thorium is not fully de-Googled"
  - "[Docs:PATCHES] https://github.com/Alex313031/thorium/blob/main/docs/PATCHES.md inspected 2026-07-31: compiler, media, privacy, UI, sandbox, installer/packaging and compatibility patch inventory; documents Thorium/content-shell desktop integration and many command-line/feature flags, including optional local file access/disable web security and portable-profile encryption changes that require careful use"
  - "[Docs:BUILDING] https://github.com/Alex313031/thorium/blob/main/docs/BUILDING.md inspected 2026-07-31: Linux build requires at least 8GB RAM, 16GB recommended, 75GB free storage, depot_tools plus an external Chromium checkout; FAQ separately says the checkout is 100+GB and a maintainer build takes about five hours on the cited machine"
  - "[Docs:performance] https://thorium.rocks/performance fetched 2026-07-31: project-authored screenshots report Speedometer 2.1, Octane and JetStream2 gains on an AMD FX-8370/24GB DDR3/GTX 970/Ubuntu 22.04.1 machine; browser versions, run distributions and current same-revision reproduction are not supplied; repository TODO still asks to test optimized/non-optimized Thorium and Chromium/Chrome at the same revision"
  - "[Docs:APT] https://thorium.rocks/ fetched 2026-07-31: official page tells users to download thorium.list over plain HTTP with wget --no-hsts and then apt install; the served list contains deb [trusted=yes arch=amd64] https://dl.thorium.rocks/debian/ stable main"
  - "[Local:apt-probe] Live curl/metadata probe 2026-07-31: https://dl.thorium.rocks/debian/dists/stable/InRelease=404, Release.gpg=404, Release=200; Release date=2026-02-23; Packages contains versions through 138.0.7204.303-1 and gives that .deb Size=161382052, Installed-Size=770977 KiB, SHA256=9bfad87fd5119720a1bc47af3b3e3efcbd92910032aa949d97bdc5191e2edb60; hashes are not authenticated because the repository metadata is unsigned"
  - "[GH:comparators] Positioning-only metadata queried 2026-07-31 via gh repo view: https://github.com/imputnet/helium describes itself as a private, fast and honest browser; https://github.com/ungoogled-software/ungoogled-chromium as Chromium without Google integration; https://github.com/uazo/cromite as a Bromite fork with ad blocking and privacy enhancements; these comparators were not re-audited under the 10-dimension rubric"
---

# Thorium

> 以 Chromium 为底、围绕 SIMD/PGO/LTO、媒体格式、经典 UI 与隐私默认值做深度定制的跨平台浏览器；特色鲜明，但当前 canonical source、beta binaries 与更新责任分散，且 Linux APT 签名信任链缺失并被 `trusted=yes` 绕过。
>
> **状态**: `active` · **总分**: 3.0/5 · **推荐度**: 2/5
>
> **验证边界**: 本轮完成官方资料、API、release、源码树与 live APT 元数据检查；未启动下载的浏览器二进制，未拉取 75–100GB+ Chromium 完整源码，未构建/运行 tests，也未复现性能 benchmark。

## 一句话总结

Thorium 适合接受 Chromium fork 更新滞后、维护交接与公开 binary provenance 当前不可独立认证，且想研究 CPU-specific optimizations 和经典/扩展浏览器特性的技术用户；不适合作为敏感账号、企业受管环境或高安全需求场景的默认主浏览器。

## 总体评价

Thorium 不是一个轻量 Chromium theme，而是一套 patch-overlay browser distribution；**性能优化也不是附带 marketing，而是它的工程 center of gravity**。canonical 与 M150-LTS README 都把 architecture-aware SIMD、ThinLTO、PGO 放在顶层定位，GN args 也实际启用了 AVX profile、Chrome/V8 PGO、优化 JIT tiers 与 WebAssembly SIMD revectorization [Docs:README][Local:version-build][GH:M150-performance-scan]。在此基础上，它还加入媒体 codec、JPEG XL、FTP、经典 UI、隐私默认值、Chromedriver 与 content shell，并把 Windows、macOS、Android、Raspberry Pi、legacy 等 build 分散到多个仓库 [Docs:README][Docs:PATCHES]。在“保留 Chrome-like usability，同时做 performance/UI/media customization”这条路线中，它有清晰辨识度。

真正决定采用结论的却是 2026 年的维护与供应链状态。canonical main 的 `version.sh` 仍指向 M138.0.7204.306；主仓库 M144/M150 release 明说只是通知入口、没有 assets，实际 beta code/binaries 在 collaborator `gz83/thorium`；main release 元数据还把这些 Beta 通知标成非 prerelease [Local:version-build][GH:transition][GH:M150-assets]。这不是“项目已死”——issues、discussions 和 collaborator 都仍活跃——但意味着版本、源码、二进制与责任边界尚未重新收敛。此处 `status: active` 仅表示 canonical repo 与 collaborator/community 活动仍在继续，不表示 release handoff 已稳定。

更严重的是 Linux 官方安装链：官网让用户经 plain HTTP + `wget --no-hsts` 获取 source-list，文件内使用 `trusted=yes`；本轮 live probe 再次确认 `InRelease` 与 `Release.gpg` 均为 404，而 unsigned `Release` 为 200 [Docs:APT][Local:apt-probe]。对浏览器这种高攻击面软件，这是 adoption blocker，不应被“速度快”掩盖。

## 推荐度：2/5

**角色定位**：只推荐给能把 Thorium 当作隔离的 secondary browser / benchmark-and-feature trial、理解“找到明确 release URL”不等于 cryptographic artifact verification，并愿意追踪 upstream security cadence 的技术用户；若不能从 pinned source reproducibly self-build，或取得独立受信的签名分发通道，就应把现有公开 binary provenance 视为不可验证。

给 2 而不是 1：项目有真实功能、长期 release 历史、完整 build/patch 文档、较大的用户可见度和仍在工作的 collaborator；M138 release 也确实包含大量平台包与针对 crash/WebRTC/package 的修复 [GH:api][GH:M138-assets]。作为 Chromium customization、SIMD build matrix、codec/UI patching 的研究对象，它很有价值。

不给 3 的核心原因不是“少几个功能”，而是 trust/update path 失配：canonical main 仍在 M138，M150 beta 由外部 collaborator fork 交付，sampled releases 没有 checksum/signature companion assets，Linux APT 官方路径主动关闭包签名验证 [GH:transition][GH:M150-assets][Local:apt-probe]。在这些问题修复并完成 canonical merge、signed releases/repository 与可审计更新流程前，不建议把它设为处理密码、支付、云控制台、学校/工作 SSO 的主浏览器。

## 优势

1. **定制深度高**：不是只改 branding；编译参数、媒体栈、UI、privacy defaults、sandbox/build、installer 和 command-line flags 都有实质 patch [Docs:PATCHES][Local:version-build]。
2. **平台与 CPU build matrix 广**：Linux、Windows、macOS、Android、Raspberry Pi、legacy OS，以及 SSE3/SSE4/AVX/AVX2/AVX-512/ARM 变体都有明确入口 [Docs:README][GH:M150-assets]。
3. **Chrome-like compatibility 取向明确**：保留 Google Sync/search 等 usability surface，同时关闭部分 telemetry/field trials/Privacy Sandbox；不会把自己误称为 fully de-Googled [Docs:FAQ]。
4. **媒体与经典功能特色鲜明**：Widevine、proprietary codecs、HEVC、JPEG XL、FTP、classic download shelf/UI、Chromedriver、thorium_shell 等组合，在普通 Chromium 包中并不常见 [Docs:README][Docs:PATCHES]。
5. **文档对 build internals 很透明**：GN args、patch 来源、rebase、各平台 build、SIMD 选择和已知限制都有资料 [Docs:BUILDING][Docs:FAQ][Docs:PATCHES]。

## 劣势

1. **官方 Linux APT 签名信任链缺失并被绕过**：`trusted=yes`、unsigned metadata、plain-HTTP source-list 下载是直接的供应链风险 [Docs:APT][Local:apt-probe]。
2. **canonical/source/binary 分裂**：主仓库最新 Beta release 只是无 asset 通知，真正 M150 code 和 binaries 在 collaborator fork，尚未证明已 merge/review 回 canonical main [GH:transition][GH:M150-assets]。
3. **维护高度集中**：贡献数据与 FAQ 都显示核心 rebase/build 依赖极少数人；Alex 暂时无暇更新时，项目立即进入外部分支接管状态 [GH:community][Docs:FAQ]。
4. **项目级自动化证据弱**：本轮没发现 GitHub Actions workflows；构建是高成本的手工 Chromium overlay，tests 主要借用 upstream targets，没有可见的 canonical release CI gate [Local:scan][Local:version-build][Docs:BUILDING]。
5. **兼容性并非 Chrome 等价**：Google sign-in、Widevine/VMP、特定网站登录、GPU/driver、Android background lifecycle 和 package architecture 都有明确限制或 open reports [Docs:FAQ][GH:issues]。
6. **CPU 变体增加选择与误用成本**：CPU 不支持对应 SIMD 时会直接 crash，用户必须先判断 SSE/AVX capability [Docs:README]。

---

## 适合什么场景

- 在无敏感账号、可随时重建 profile 的隔离环境里试用 performance/UI/media patches。
- 研究 Chromium fork 如何维护 source overlay、GN args、CPU-specific binaries 与跨平台 packaging。
- 需要 JPEG XL、HEVC/codec、FTP、classic UI/download shelf、Chromedriver/content shell 等特性，并接受逐项验证。
- 给旧 CPU/旧系统寻找实验性 Chromium-family build；需把 compatibility 和 security debt 单独评估。
- 作为与 Helium、ungoogled-chromium、Cromite 等不同设计取向的浏览器 taxonomy 样本。

## 不适合什么场景

- 企业、实验室、学校机房或任何要求 signed repository、可审计 SBOM/provenance、快速 security SLA 的 managed deployment。
- 日常承载支付、密码管理器、云控制台、生产 SSO、内部系统和高价值 cookies 的唯一主浏览器。
- 希望获得 Google Chrome 官方 DRM/VMP、Android Google Sync 或完全等价网站兼容性。
- 希望 fully de-Googled / default-deny Google connectivity 的用户；项目明确不走这条路线 [Docs:FAQ]。
- 无法持续追踪 canonical main、collaborator fork、各平台 sibling repos 和 Chromium security release 的用户。
- 想从源码快速复现 build 的普通开发者；完整 Chromium checkout/build 的时间、存储和 RAM 成本很高 [Docs:BUILDING]。

## 与类似项目对比

| 项目 | 定位 | 相对本项目 |
|------|------|-----------|
| Helium | 强调 private / fast / honest 的 Chromium-family browser | 与 Thorium 都把 performance/privacy 当卖点；Thorium 更突出 SIMD build matrix、经典 UI、codec 与 legacy/platform variants |
| ungoogled-chromium | 移除 Google web-service integration 的 Chromium distribution | ungoogled-chromium 的中心是去 Google integration；Thorium 明确保留 Google Sync/search 等 usability surface，同时做部分 privacy patch |
| Cromite | Bromite lineage 的 ad-blocking / privacy-enhanced Chromium fork | Cromite 的公开定位更集中于 privacy/ad blocking；Thorium 更偏 compiler optimization、media/UI patch 与 Chrome-like feature set |

上述项目按 `work-tools/web-browsers` 同类范围做 positioning-only 对比；只核验了各仓库官方描述，未在本轮按同一 10 维度框架深审，也不构成速度、安全性或成熟度 benchmark [GH:comparators]。

---

## 它能做什么

capability 评分 4/5。

Thorium 首先是完整 Chromium-family desktop/mobile browser，而不是开发库。其 repo/docs 所描述的主要能力包括 [Docs:README][Docs:PATCHES]：

- Chrome-like browsing、extensions、profiles、Sync/search integration；
- SSE3/SSE4/AVX/AVX2/AVX-512 与 ARM-targeted builds；
- ThinLTO、PGO、`-O3`、LLVM loop 等 compiler tuning；
- Widevine/proprietary codecs、HEVC/H.265、AC3/EAC3、JPEG XL、MPEG-DASH/FTP 等 media/protocol patch；
- classic Chrome UI/download shelf、额外 keyboard shortcuts、new flags 与 privacy defaults；
- Chromedriver、thorium_shell/content_shell 和 `pak` utility；
- Linux packages/AppImage，Windows installer/portable zip，macOS dmg，Android APK/WebView 等跨平台 artifacts。

不给 5：platform support 分散在多个 repos，Google sign-in/DRM/website compatibility 有实质缺口，且当前 M150 capability 并未收敛到 canonical main。README feature breadth 不能替代同版本跨平台实测 [Docs:FAQ][GH:transition][GH:issues]。

## 运行环境与资源占用

| 场景 | CPU | 内存 | 存储 | 说明 |
|------|-----|------|------|------|
| 已构建 desktop browser | 需匹配所下载的 SSE/AVX/ARM variant | 随 tabs、renderer processes、extensions 与页面负载变化 | M138 AVX `.deb` 161382052 bytes；Installed-Size 770977 KiB | 本轮只核验 metadata，未启动 browser [GH:M138-assets][Local:apt-probe] |
| 源码构建 | x64 multi-core；官方示例用 8-core/8 jobs | 至少 8GB，推荐 16GB+ | 文档最低 75GB；FAQ 称 Chromium checkout 100GB+ | 还需 depot_tools、Chromium checkout、PGO profiles、Ninja/GN [Docs:BUILDING][Docs:FAQ] |

- **运行时**：Chromium multiprocess desktop/mobile browser；页面、GPU、extensions 和 profile 决定实际 footprint。
- **操作系统**：Linux 为主仓库 release；Windows/macOS/Android/Raspberry Pi/legacy 分布在 sibling repos 或 collaborator release [Docs:README][GH:M150-assets]。
- **Docker**：`docker_support=false`；这是 end-user desktop/mobile browser，未验证官方用户向 Docker image。此项是平台特征，不作为缺陷扣分。
- **GPU**：`gpu_required=false`，但正常浏览器渲染/视频会使用 hardware acceleration；open issues 显示 GPU/driver/platform 差异仍可能影响稳定性 [GH:issues]。
- **外部依赖**：Chromium/Web platform、Google services（部分功能）、Widevine/codec、OS sandbox/keyring、GPU drivers、package/update distribution。

先区分 **项目定位** 与本 wiki 的 **performance 评分语义**。在项目定位上，性能优化毫无疑问是一等目标：M150-LTS README 把 ThinLTO、PGO 与 architecture-aware SIMD profiles 放在最前列，`args.gn` 也启用 AVX profile、Chrome PGO phase 2、V8 optimized tiers、WebAssembly SIMD revectorization、ThinLTO 与 text-section splitting [GH:M150-performance-scan]。这足以证明“主打性能”不是空标签。

但本维度评分的是**已证实的资源效率与实际性能**，不是项目在性能上投入了多少。官方 performance page 给出了 Thorium 在旧版 Speedometer/Octane/JetStream 上优于 Chromium/Chrome/Brave/Vivaldi 的 project-authored screenshots；测试机器是 FX-8370 + DDR3 + GTX 970 + Ubuntu 22.04.1，但页面没有提供 browser versions、run variance、统计方法或当前 same-revision reproduction [Docs:performance]。进一步补查 M150-LTS 后，递归 tree 里仍没有 benchmark/Speedometer/JetStream/Octane-named path，TODO 也继续把 optimized/non-optimized Thorium 与 same-revision Chromium/Chrome 对照列为待办 [GH:M150-performance-scan]。

因此 performance 仍评 3/5，而不是 4/5。本轮只确认 sampled M138 AVX `.deb` 为 161382052 bytes、Installed-Size 为 770977 KiB；没有 same-platform Chromium package comparator，也未测 runtime memory、energy、startup、tab-heavy workload 或 modern Speedometer [GH:M138-assets][Local:apt-probe]。若未来提供 current same-revision、multiple-run、公开配置的 benchmark，并证明加速没有以明显更高 RAM/energy/storage 为代价，可上调到 4；要到 5，还需跨代表性硬件与真实 workload 的稳定优势。

## 上手体验

评分 3/5。

如果锁定一个明确平台和 CPU，下载 `.deb`/`.rpm`/`.zip`/AppImage/installer/dmg/apk 后上手仍是普通 Chromium browser 体验；README、官网、FAQ 和 SIMD explainer 也提供了入口 [Docs:README][Docs:FAQ]。

扣分来自 release/distribution 信息架构：Linux 在 main repo，其他平台在 sibling repos，最新 canonical release 又跳到 `gz83/thorium` prerelease；用户还要区分 SSE3/SSE4/AVX/AVX2/AVX-512，且 main release 的 Beta 标签与 GitHub `prerelease=false` 相冲突 [GH:transition][GH:M150-assets]。Linux 官网推荐的 APT 路径虽然“命令短”，却以 `trusted=yes` 换便利，不能算合格的 onboarding [Docs:APT][Local:apt-probe]。

## 代码质量

评分 2/5。

Thorium 的工程难点不是从零写 browser，而是把 52 个 patch、593 个 `src/` overlay paths、submodules、GN args 和平台脚本持续 rebase 到 Chromium。repo 对 patches、GN args 和 build process 的解释较透明；`args.gn` 也保留 CFI、stack zeroing、ThinLTO/PGO 等严肃配置 [Local:scan][Local:version-build]。

但 canonical quality gate 很弱：本轮未发现 GitHub Actions workflows，`setup.sh` 依赖外部 Chromium tree、反复 copy/`git apply --reject`，并在多处硬编码 `~/thorium`；FAQ 直言每次 rebase 往往需 8+ 小时且可能出错 [Local:version-build][Docs:FAQ]。文档告诉贡献者如何调用 upstream Chromium test targets，不等于 Thorium patches 在每个 release/CPU/platform 上有自动 regression matrix [Docs:BUILDING]。

当前 main 仍是 M138 overlay，M150 在 collaborator branch 中单独演化；这种 active divergence 进一步增加 reviewer context、patch drift、release reproducibility 和 common-mode failure 风险 [GH:transition][GH:M150-assets]。故按“需要修 bug/维护 fork 会多痛苦”的定义给 2，而不是用 Chromium upstream 的代码质量替 Thorium repo 加分。

## 可扩展性

评分 4/5。

作为 Chromium-family browser，Thorium 面向 Chrome extension 使用，并公开 command-line/feature flags、Chromedriver、`thorium_shell`、`pak`、CPU/build variants、GN configuration 与 source-level patchability [Docs:README][Docs:PATCHES]。对 power users 和 fork maintainers，可改面很广。

不给 5：扩展能力并非一个稳定、独立版本化的 Thorium plugin API；很多深度定制依赖继续 fork Chromium 或启用实验 flags。`disable web security`、local-file access、portable profile encryption changes 等扩展项也会放大误配置风险，不能把“开关多”简单等同于“安全可扩展” [Docs:PATCHES]。

## 文档质量

评分 4/5。

README、FAQ、BUILDING、platform-specific build guides、ABOUT_GN_ARGS、ABOUT_RELEASES、PATCHES、REBASING、command-line flag list、website docs 覆盖了普通用户、builder 与 patch maintainer 的主要问题 [Docs:README][Docs:FAQ][Docs:BUILDING][Docs:PATCHES][Local:scan]。尤其 FAQ 对 Google Sync、Widevine/VMP、版本滞后和人力成本并不回避，这是有价值的 honesty。

未给 5：维护交接后的 canonical release/source 边界没有被统一文档化；known-bugs 文档只覆盖到早期条目，部分 README 相对链接与现有文件名存在漂移；performance page 使用旧 benchmark/hardware 且缺版本和统计方法；安全文档列出的 major CVE 修复止于 2024/M124 [Docs:performance][GH:SECURITY][Local:scan]。

## 社区与成熟度

| 维度 | 评分 | 说明 |
|------|------|------|
| 社区活跃度 | 3/5 | 7372 stars、273 forks、149 discussions、129 open issues，issues 与 collaborator 回复仍活跃；但贡献高度集中、4 个 open PR 中有多个长期未合并 [GH:api][GH:community] |
| 成熟度 | 3/5 | 2021 建仓、72 releases、长期可用的 M138 packages，说明不是 alpha；但 Chromium rebase cadence、跨 repo build matrix、canonical handoff 与 Beta migration 仍显著不稳定 [GH:api][GH:releases][GH:transition] |

community 不给 4：API 返回 13 个 contributor entries，但第一名 4905 contributions，后两名各 18；FAQ 也把实际 build/maintenance 描述为约三人团队 [GH:community][Docs:FAQ]。用户社区存在，project governance 与 bus factor 却没有同等扩张；缺少 CONTRIBUTING 与 PR template 也提高外部贡献摩擦。

maturity 不给 4：浏览器 fork 必须持续跟随 Chromium security/ABI/platform changes。M138→M144→M150 的更新由 collaborator fork 临时承接，而不是 canonical main 上的稳定 release train；M150 仍是 prerelease/beta 交付 [GH:transition][GH:M150-assets]。

## 安全与风险

评分 2/5。

先说正面：Thorium 建立在 Chromium sandbox/process architecture 上，GN args 保留 CFI、stack variable zeroing 等机制；SECURITY.md 也区分 Chromium upstream 与 Thorium-specific 报告路径，并记录过若干高影响 CVE 的修复 [Local:version-build][GH:SECURITY]。本轮 repository security-advisories endpoint 返回空数组，但这只表示没有查到 published repo GHSA，不证明 browser、Chromium dependencies 或 distributed binaries 当前无漏洞 [GH:advisories]。

决定性负面是更新与 artifact trust：

1. 官网通过 plain HTTP + `wget --no-hsts` 下载 source-list；该 list 使用 `trusted=yes` [Docs:APT][Local:apt-probe]。
2. live probe 仍显示 `InRelease=404`、`Release.gpg=404`、`Release=200`；APT metadata 的 SHA256 因缺签名而不能认证来源 [Local:apt-probe]。
3. sampled M138 main assets 与 M150 collaborator assets 均未发现 checksum/signature companion assets [GH:M138-assets][GH:M150-assets]。
4. canonical main 与 current beta artifacts 分属不同 repo/branch，增加“审了哪份 source、下载了哪份 binary”的 provenance ambiguity [GH:transition]。
5. 浏览器自身又拥有密码/cookies、摄像头/麦克风、下载、extensions、local files、GPU/media parsers 等巨大攻击面；版本合流与安全 patch cadence 不能靠普通 app 的风险容忍度处理。

open issue #1164 的 maintainer-side回复也把修复 unsigned APT repo 放到未来 stable M144，并明确不建议公司 end-user deployment [GH:apt-issue]。在 signed repository/release、canonical merge、security release SLA 与可验证 provenance 完成前：不要用于 production accounts、payment、cloud consoles、internal production systems；若仅实验，使用 disposable profile、隔离 OS account/VM、最小 extensions。sampled public binaries 当前不能靠“选对 release URL”完成 cryptographic verification；可信路径应是从 pinned source 可复现 self-build，或等待独立受信的签名分发与 provenance 证明。

此外，Thorium 明确不是 fully de-Googled；即使关闭部分 telemetry/field trials，仍会因 Sync/search/location 等功能连接 Google services [Docs:FAQ]。这属于 privacy boundary，不应被 README 的 privacy patches 误读为 anonymous browser guarantee。

## 学习价值

学习价值高于采用推荐度。Thorium 很适合研究：

1. **Chromium fork economics**：四周 upstream cadence 与人工 rebase、100GB+ checkout、跨平台 13 次 build 如何形成 bus-factor bottleneck [Docs:FAQ][Docs:BUILDING]。
2. **patch-overlay architecture**：如何把 source copies、52 个 patches、submodules、GN args、PGO profiles 和 packaging scripts叠到外部 Chromium tree [Local:scan][Local:version-build]。
3. **性能证据纪律**：compiler flags 与 old benchmark screenshots 能说明 hypothesis，却不能替代 current same-revision、multiple-run、resource-efficiency measurements [Docs:performance]。
4. **浏览器分发安全**：即使 browser core有 sandbox/CFI，unsigned APT metadata、跨 repo binaries 与缺少 artifact signatures 仍可让 supply-chain 先于 runtime security 失守 [Local:apt-probe][GH:transition]。
5. **产品取舍**：Thorium 没有简单选择“全部去 Google”，而是在 Chrome-like usability、privacy patches、DRM/Sync compatibility 和独立维护成本之间做折中 [Docs:FAQ]。

若只读一个层面，建议优先看 `docs/PATCHES.md` + `setup.sh` + `version.sh` + M144/M150 release bodies：它们比 marketing benchmark 更能解释 Thorium 的真实工程状态。
