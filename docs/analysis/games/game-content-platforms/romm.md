---
title: "RomM"
created: 2026-07-11
updated: 2026-07-11
type: repository-analysis
repo_url: "https://github.com/rommapp/romm"
category: "games/game-content-platforms"
tags: ["rom-manager", "self-hosted", "emulation", "retrogaming", "docker", "fastapi", "vue", "multi-user"]
previous_repo: ""
successor: ""
primary_language: "Python"
license: "AGPL-3.0-only"
stars: 11080
forks: 654
last_checked: 2026-07-11
last_verified: 2026-07-11
evidence: "Authenticated GitHub API + official README/docs + GitHub advisories + local shallow-clone scan at bc2b891 + cargo-free static inspection; no fresh Docker deployment, library scan, or browser-emulation benchmark. Local master is the 5.0 rewrite line, while the latest stable release at review time is 4.9.2."
archived_reason: ""
docker_support: true
gpu_required: false
estimated_cpu: "minimum: any modest CPU; comfortable: 2 cores; scans/hash calculation create temporary CPU and I/O spikes"
estimated_memory: "minimum: 512 MB for a small single-user library; comfortable: 2 GB for thousands of ROMs and a few users"
estimated_storage: "application data is modest; total is dominated by the legally obtained ROM/firmware library, artwork, saves, states, database and backups"
status: active
ratings:
  capability: 5
  usability: 4
  performance: 3
  code_quality: 3
  documentation: 5
  community: 4
  maturity: 3
  extensibility: 4
  security: 2
  recommendation: 3
overall_score: 3.6
sources:
  - "[GH] https://github.com/rommapp/romm — README inspected 2026-07-11"
  - "[GH:api] https://api.github.com/repos/rommapp/romm — queried 2026-07-11; created_at=2023-03-08, pushed_at=2026-07-10, default_branch=master, stars=11080, forks=654, language=Python, license=AGPL-3.0, open_issues_count=117"
  - "[GH:issues-prs] GitHub search API queried 2026-07-11; open issues=111, open PRs=6"
  - "[GH:releases] GitHub releases API queried 2026-07-11; releases_count=188, latest_release=5.0.0-beta.3 published 2026-07-10, latest_stable=4.9.2 published 2026-06-17"
  - "[GH:contributors] GitHub contributors API queried 2026-07-11; contributors=134; leading human contributors include zurdi15=4454, gantoine=3921, adamantike=389"
  - "[GH:community] GitHub community profile queried 2026-07-11; health_percentage=100; README, license, code of conduct, contributing guide and PR template detected; issue_template was not detected by this API. SECURITY.md was verified in the local scan"
  - "[GH:advisories] GitHub repository security-advisories API queried 2026-07-11; 12 published advisories: 3 critical, 7 high, 2 medium. Advisory metadata included GHSA-8x54-qc7x-c8c4 (high IDOR, vulnerable <5.0.0) and GHSA-6g2p-hg42-pfq8 (high SSRF, vulnerable >=4.8.1), both with patched_versions=null at query time; exact deployment impact requires maintainer clarification"
  - "[GH:local-scan] Local shallow clone /opt/data/tmp/repo_romm at bc2b8917e6b2f2035ab0010be0587a176664e218 dated 2026-07-10; git ls-files=2611, Python files=443, Vue files=472, paths containing test/spec=217, workflow files=11, checkout=156 MB excluding .git. Inspected README.md, SECURITY.md, pyproject.toml, docker-compose.yml, examples/docker-compose.example.yml, env.template, DEVELOPER_SETUP.md and backend architecture docs"
  - "[GH:ci] GitHub Actions API queried 2026-07-11; recent master runs included successful pytest, TypeScript typecheck, frontend checks and Trunk checks"
  - "[Docs:install] https://docs.romm.app/latest/install — extracted 2026-07-11; official Docker image, Compose/NAS/Kubernetes paths, MariaDB/MySQL/PostgreSQL, Valkey/Redis and reverse-proxy requirements"
  - "[Docs:faq] https://docs.romm.app/4.9.0/about/faqs — extracted 2026-07-11; scope, legal boundary, deployment platforms, official resource estimates, backup and browser-emulation limits"
  - "[Docs:platforms] https://docs.romm.app/4.9.0/platforms/supported-platforms — extracted 2026-07-11; about 400 recognised platform slugs and provider/core coverage semantics"
  - "[Docs:emulatorjs] https://docs.romm.app/4.9.2/using/in-browser-play/emulatorjs — extracted 2026-07-11; WebAssembly/RetroArch cores, saves/states, WebRTC netplay and supported systems"
  - "[Docs:architecture] https://docs.romm.app/latest/developers/architecture — extracted 2026-07-11; 5.0/master FastAPI, Vue, Valkey/RQ, database, auth and observability topology"
  - "[Wiki:lutris] github-repo-wiki/games/game-content-platforms/lutris.md — local same-category analysis read 2026-07-11"
  - "[GH:comparisons] GitHub repository API queried 2026-07-11 for gaseous-project/gaseous-server and JMBeresford/retrom; positioning-level comparison only"
---

# RomM

> Self-hosted ROM library server：扫描并整理合法持有的游戏镜像与固件，补全 metadata，在浏览器或 companion clients 中访问、下载和游玩。
>
> **状态**: `active` · **总分**: 3.6/5 · **推荐度**: 3/5

## 一句话总结

RomM 是目前功能面最完整的 self-hosted ROM manager 之一；适合已有合法 ROM library、愿意维护 Docker/数据库/备份的 homelab 用户，但 5.0 重写期与 2026-07 查询到的高危 advisory 版本范围，使它暂不适合未经核验就直接暴露公网。

## 总体评价

RomM 不是模拟器合集，也不提供游戏内容。它是一个多用户 library/control plane：扫描宿主机目录，对 ROM 做 hash 与平台识别，从 IGDB、ScreenScraper、MobyGames、SteamGridDB、RetroAchievements 等来源聚合 metadata，管理 artwork、firmware、saves/states、collections、权限和 companion-client access；对支持的平台，再调用 EmulatorJS/RetroArch WebAssembly cores 在浏览器中运行 [GH][Docs:architecture][Docs:emulatorjs]。

能力上，它已经从“封面墙”扩展成完整家庭游戏服务：约 400 个平台 slug、多 metadata providers、browser play、WebRTC netplay、PWA/console mode、客户端下载、RetroAchievements、API tokens、OIDC、多用户与细粒度权限 [Docs:platforms][Docs:architecture]。这种 breadth 足以给 capability 5。

但本文必须区分两个版本面：review 时最新 stable 是 4.9.2；`master` 与最新 prerelease 已进入 5.0 beta，仓库文档明确展示 FastAPI + Vue 3 + RQ/Valkey 的新架构，本地 scan 也是这条 rewrite line [GH:releases][Docs:architecture][GH:local-scan]。因此代码质量与成熟度不能沿用“稳定 4.x 成品”的直觉直接给高分。

## 推荐度：3/5

**定位**：推荐给有合法 ROM/firmware collection、希望在 NAS/homelab 上集中管理，并能把服务放在 LAN、VPN 或严格反代后的高级用户。

给 3 而非 4 的决定性原因不是功能不足，而是安全与版本转换风险。2026-07-11 的 repository advisories API 返回 12 个 published advisories，其中 3 critical、7 high；至少两个 advisory 的 API 版本字段覆盖 review 时 stable 4.9.2，且 `patched_versions` 为 `null` [GH:advisories]。这可能包含 disclosure/metadata 尚未同步的情形，不能据此断言每个 4.9.2 部署均可被利用；但在维护者澄清或发布修复前，它足以阻止“直接公网部署”的推荐。

若只是局域网/Tailscale 私有服务，并先核对 advisory、pin 镜像 digest、启用认证、备份数据库和用户数据，RomM 仍有很高实用价值。若没有合法 ROM library，则它对用户没有实际价值；软件本身不提供内容 [Docs:faq]。

## 优势

1. **library 能力完整**：扫描、hash、metadata 聚合、collections、搜索、artwork、firmware、saves/states、downloads 和用户权限形成闭环 [GH][Docs:architecture]。
2. **self-hosted 与多用户是一等定位**：不是本地单机封面工具；可经邀请、OIDC、API token、kiosk mode 与 companion ecosystem 服务多设备 [Docs:faq][Docs:architecture]。
3. **浏览器即游玩入口**：EmulatorJS 用 Emscripten 编译的 RetroArch cores 提供浏览器 play，自动把 save/state 回写服务器，并可用 WebRTC netplay [Docs:emulatorjs]。
4. **平台和 metadata 覆盖广**：官方列出约 400 个 recognised platform slugs；“支持”至少意味着目录识别和一个 metadata provider，并不保证每个平台都可 browser play [Docs:platforms]。
5. **部署路径成熟**：官方 Docker image、Compose reference、Unraid/Synology/TrueNAS/Kubernetes 文档齐全，运行环境与备份边界写得较清楚 [Docs:install][Docs:faq]。
6. **工程治理强**：community health 100%，有 SECURITY/CONTRIBUTING/templates；本地仓库有大量 tests/workflows，近期 master CI 的 pytest、typecheck、frontend checks 成功 [GH:community][GH:local-scan][GH:ci]。

## 劣势

1. **安全风险不是理论问题**：公开 advisories 数量和严重度高；当前 stable 与 advisory version ranges 的关系存在需要优先澄清的 red flag [GH:advisories]。
2. **5.0 正处于重写/迁移期**：最新 release 是 beta，`master` 的前后端架构和 4.x stable 并非同一静态基线；升级前必须读 release notes 与 migration notes [GH:releases][Docs:architecture]。
3. **不是开箱即用桌面 app**：需要 Docker、数据库、Valkey/Redis、volume mapping、secret、反代/TLS、备份与升级维护；Windows 也要求 WSL2 [Docs:install][Docs:faq]。
4. **browser play 有明确上限**：4th-gen 及更早平台较合适，PS1/N64/Saturn 命中率波动，PSP 及更新平台大多应使用 standalone emulator；性能取决于 client browser 而非服务器 GPU [Docs:faq][Docs:emulatorjs]。
5. **metadata 与 ROM legality 不能外包给软件**：第三方 provider 可能 rate-limit 或给出错误数据；用户仍须自行保证 ROM/firmware 来源合法 [Docs:faq]。
6. **运维状态分散**：数据库、assets、config、ROM library、metadata APIs、browser assets 与用户 saves 都需纳入备份和升级计划，不能只备份 Compose 文件 [Docs:faq][Docs:architecture]。

---

## 适合什么场景

- 在 NAS/Linux homelab 上集中管理合法 ROM/firmware library。
- 多人家庭或多设备共用统一 library、metadata、save/state 和下载入口。
- 用浏览器快速游玩 NES/SNES/GB/GBA/Genesis 等较老平台，或在 TV/handheld 上通过 companion client 访问。
- 对游戏保存、metadata normalization、platform slugs、hash matching 和 browser emulation integration 感兴趣的开发者。
- 愿意用 VPN/Tailscale 或受控反代，而不是把管理面裸露到公网的 self-host 用户。

## 不适合什么场景

- 没有自己合法拥有的 ROM/firmware，只是想由软件提供游戏内容的人。
- 只想要 Windows 上双击安装的本地桌面 launcher；RomM 是 server software [Docs:faq]。
- 主要想在浏览器运行 PS3、Switch 或现代 PC 游戏的人。
- 不能维护数据库、secret、volume、备份、反代和安全更新的用户。
- 需要立即得到企业级 SLA、正式外部安全审计或零维护 appliance 的公开服务。
- 在 advisory 影响尚未澄清前，准备把 4.9.2 直接暴露公网的人 [GH:advisories]。

## 与类似项目对比

| 项目 | 定位 | 相对 RomM |
|------|------|-----------|
| Lutris | Linux desktop game launcher / runner hub | Lutris 更适合单机安装和启动 Wine、Steam、emulators 与商店游戏；RomM 更适合 self-hosted、多用户、跨设备 ROM library 与 browser access [Wiki:lutris] |
| Gaseous Server | C# self-hosted ROM manager + web emulator | 目标最接近，技术栈不同；本条只用 repository metadata 确认定位，没有深审其质量、成熟度或功能完整性 [GH:comparisons] |
| Retrom | centralized emulation-focused game library service | 同样面向集中式 collection/client access；本条只做定位级比较，没有深审其质量、成熟度或功能完整性 [GH:comparisons] |

上述项目按 `games/game-content-platforms/` 的内容访问/运行平台边界做定位级比较，只有 Lutris 已有同框架深审；其余不是等深评分。

---

## 它能做什么

capability 评分 5/5，指目标域内的功能覆盖，而非意味着所有 emulator/core 都稳定。

- 扫描 ROM/firmware 文件树，识别约 400 个平台 slug，并按 hash/filename 匹配 metadata [Docs:platforms][Docs:architecture]。
- 从多个 providers 合并封面、描述、评分、截图、achievements 与 play-time 等信息 [GH][Docs:architecture]。
- 管理 users、roles/scopes、OIDC、session、API tokens、kiosk/read-only access [Docs:architecture][Docs:faq]。
- 在支持的平台用 EmulatorJS 运行 WebAssembly cores，维护 save files、save states 与 screenshots [Docs:emulatorjs]。
- 通过 WebRTC 提供最多四人的 netplay；官方明确它更适合 co-op/turn-based，而非 frame-perfect fighting [Docs:emulatorjs]。
- 提供 console/TV-oriented SPA、PWA、download endpoints 和 companion-client ecosystem [GH][Docs:architecture]。
- 通过 RQ/Valkey 执行 rescans、metadata refresh、image conversion、RetroAchievements sync 和 cleanup jobs [Docs:architecture]。
- 用 Sentry 与 OpenTelemetry（均 opt-in）接入 observability，并暴露 heartbeat endpoint [Docs:architecture]。

## 运行环境与资源占用

| 场景 | CPU | 内存 | 存储 | 说明 |
|------|-----|------|------|------|
| 小型单用户库 | 普通 CPU | 512 MB minimum | app + DB + ROM library | 官方 FAQ 的最低估计；scan 时会临时升高 [Docs:faq] |
| 数千 ROM、少量用户 | 2 cores comfortable | 2 GB comfortable | 由 ROM、artwork、saves 和 backups 主导 | 官方“comfortable”估计 [Docs:faq] |
| 浏览器游玩 | server 负载通常较低 | server 常规 | client cache + saves/states | EmulatorJS 主要在 client browser 中执行，现代 browser/CPU 更关键 [Docs:emulatorjs] |
| 多用户公网入口 | 2+ cores 起 | 2 GB+ | DB/assets/backups 增长 | 还需 TLS、auth、rate limiting、日志与安全更新；本条不建议在 advisory 未澄清时公开部署 |

- **运行时**：官方 Docker image；container 内有 nginx、gunicorn/FastAPI、RQ workers 与 embedded/external Valkey，外部数据库可选 MariaDB、MySQL 或 PostgreSQL [Docs:install][Docs:architecture]。
- **操作系统**：Linux/NAS 是主路径；支持 Unraid、Synology、TrueNAS SCALE、Kubernetes；Windows 需 WSL2 [Docs:install][Docs:faq]。
- **Docker**：`docker_support: true`，Docker Compose 是 canonical reference setup [Docs:install]。
- **GPU**：server 不要求 GPU；browser emulation 使用 client 的浏览器和硬件 [Docs:emulatorjs]。
- **外部依赖**：metadata provider accounts/API keys、数据库、Valkey/Redis、reverse proxy/TLS（OIDC/PWA 必需），可选 RetroAchievements 等服务 [Docs:install][Docs:architecture]。

performance 给 3/5。官方提供资源估计，server 侧对普通家庭库不重；但 scan 的 hashing/network metadata、network mounts、provider rate limits 和 browser cores 使性能高度 workload-dependent。本次没有运行真实 library scan 或 emulator benchmark，不能给 4。

## 上手体验

评分 4/5。对有 Docker/NAS 经验的人，官方安装页按 Linux server、Unraid、Synology、TrueNAS、Kubernetes 分路，Compose 参考结构也清楚；运行后可通过 web UI 完成 library 浏览、metadata、用户和 playback [Docs:install][Docs:faq]。

扣 1 分在于它不是单容器“无状态小工具”：要正确挂载 `/romm/library` 的父目录，配置数据库、secret、Valkey、metadata providers 和 backup。FAQ 明确指出 mount depth、platform slug、provider credentials、HTTPS 等是常见失败点 [Docs:faq]。上手不难，但需要真正理解 self-hosting。

## 代码质量

评分 3/5。本地 master scan 显示 2,611 个 tracked files、443 个 Python files、472 个 Vue files、217 个路径名含 test/spec 的文件与 11 个 workflow files；`pyproject.toml` 有 pytest、ruff、mypy、bandit 等配置，近期 master CI 中 pytest、TypeScript typecheck 和 frontend checks 成功 [GH:local-scan][GH:ci]。官方 architecture 文档描述 FastAPI endpoint/handler/adapter 分层、SQLAlchemy/Alembic、generated OpenAPI types、Pinia stores 和 Valkey-backed jobs，结构不是 ad-hoc prototype [Docs:architecture]。

但当前 `master` 是 5.0 rewrite line，README/开发说明仍有 frontend v1/v2 coexistence 和迁移语境；本条也没有在本机完成 Compose build/test。按 wiki 规则，存在 active rewrite 时 code quality 应保守封顶 3。大量安全 advisories 也说明历史授权、路径、输入与 web boundary 曾经出现实质缺陷 [GH:advisories]。

## 可扩展性

评分 4/5。

- metadata providers 通过 adapter/handler 归一化到 common shape，并允许优先级配置 [Docs:architecture]；
- `config.yml` 控制 library/scanning/emulator 行为，100+ env vars 控制 infrastructure [Docs:architecture]；
- companion clients、API tokens、OpenAPI-generated frontend types 和 websocket namespaces 提供明确 integration surfaces [GH][Docs:architecture]；
- scheduled/manual RQ jobs、platform-aware hashing 与 console SPA 都展示了可扩展结构 [Docs:architecture]。

不给 5，因为 extension surface 多数仍是 project-internal code/config，而不是稳定 third-party plugin ABI；AGPL 也要求部署修改版时认真处理 source-offer obligations。

## 文档质量

评分 5/5。官方 docs 覆盖 install/deploy、数据库、Valkey、reverse proxy、backup、folder structure、metadata providers、platforms、browser play、troubleshooting、administration、architecture 和 development；FAQ 还明确写出 legal boundary、资源估计与 browser emulator 的能力上限 [Docs:install][Docs:faq][Docs:architecture]。

必须注意版本化文档：4.9.x stable docs 与 `latest`/5.0 architecture 并不总是同一 implementation baseline。文档本身优秀，但运维时要固定到部署版本。

## 社区与成熟度

| 维度 | 评分 | 说明 |
|------|------|------|
| 社区活跃度 | 4/5 | 11.1k stars、654 forks、134 contributors、111 open issues/6 PRs、近期 push 和成功 CI；community profile 100% [GH:api][GH:issues-prs][GH:contributors][GH:community][GH:ci] |
| 成熟度 | 3/5 | 2023 建仓、188 个 releases（其中 79 个标记为 non-prerelease）、4.9.2 已是可用成品；但 5.0 正在 beta/rewrite，安全 advisory 与 migration 状态阻止给 4 [GH:releases][GH:advisories] |

活跃不等于稳定。这里应同时承认两件事：RomM 已经有成熟用户与部署生态；当前又处于架构换代和安全边界必须重新核对的时期。

## 安全与风险

评分 2/5。

正面信号包括 SECURITY.md、private reporting policy、community health 100%、CORS/CSRF/auth/session middleware、hashed API tokens、roles/scopes、OIDC 和可选 observability [GH:community][GH:local-scan][Docs:architecture]。这些说明项目没有回避安全治理。

决定性负面证据是公开 advisories：2026-07-11 API 返回 12 个 published advisories，含 3 critical 和 7 high，覆盖 IDOR、SSRF、path traversal、authorization、file deletion、shell injection、archive extraction 与 session/auth 等典型 server-side 高影响问题 [GH:advisories]。更重要的是，API 中 GHSA-8x54-qc7x-c8c4 的 range 为 `<5.0.0`，GHSA-6g2p-hg42-pfq8 为 `>=4.8.1`，而 review 时 stable 是 4.9.2；两者 `patched_versions` 字段均为 `null` [GH:advisories]。

这组字段存在 metadata/disclosure 时序歧义，本文不把它表述成已复现漏洞。但安全决策遵循 failure-first：在 maintainer advisory 页面、release notes 或修复版本给出明确闭环前，应认为公网风险未解除。部署建议：

1. 优先 LAN/VPN/Tailscale；
2. pin stable tag 或 digest，不用 floating `latest`；
3. 核对每个 relevant GHSA 的 upstream status；
4. 禁止匿名写权限，谨慎启用 kiosk/public access；
5. 反代启用 TLS、访问控制与日志；
6. 定期备份 DB、assets、config、saves/states，并演练 restore；
7. 把 ROM/firmware 与不可信 archive 当作 untrusted input。

## 学习价值

RomM 值得研究的不是“如何写一个封面墙”，而是如何把 filesystem scanning、platform-aware hashing、metadata reconciliation、multi-user auth、background jobs、browser emulation、real-time state、NAS deployment 和 content/legal boundary 组织成一个长期维护的家庭服务。

其 5.0 架构也给出一个有价值的反面与正面合题：重写可以把 endpoint/handler/adapter、OpenAPI types、Valkey jobs 和 Vue state 重新分层；但 rewrite 同时制造迁移、双轨文档和安全回归风险。器欲利，界先明；对 self-hosted content server，权限边界、输入边界与版本边界，比 UI 丰富度更先。
