---
title: "CC Switch"
created: 2026-08-08
updated: 2026-08-08
type: repository-analysis
repo_url: "https://github.com/farion1231/cc-switch"
category: "ai-programs/ai-cost-manager"
tags: ["ai-account-management", "coding-agent", "claude-code", "codex", "hermes-agent", "provider-routing", "tauri", "rust"]
previous_repo: ""
successor: ""
primary_language: "Rust"
license: "MIT"
stars: 125662
forks: 8553
last_checked: 2026-08-08
last_verified: 2026-08-08
evidence: "GitHub API + shallow source clone/code review + README/SECURITY/changelog/CI/release-manifest review；未执行本机 build、GUI、OAuth、proxy、WebDAV/S3 sync 或 Hermes integration smoke test"
archived_reason: ""
docker_support: false
gpu_required: false
estimated_cpu: "desktop idle 通常 1 core 足够；local proxy、usage import、backup/sync 和被管理 CLI 并行时建议 2-4 cores（估计，非 benchmark）"
estimated_memory: "Tauri WebView + Rust backend + optional proxy 通常为数百 MB 级；受管 CLI、session import 与大 SQLite backup/sync 另计"
estimated_storage: "审查用浅克隆约 74 MB；~/.cc-switch SQLite、backup、logs、skills 与被管理工具配置会随账户/历史/同步规模增长，建议从数百 MB 起预留"
status: active
ratings:
  capability: 5
  usability: 4
  performance: 3
  code_quality: 4
  documentation: 5
  community: 5
  maturity: 3
  extensibility: 4
  security: 4
  recommendation: 3
overall_score: 4.0
sources:
  - "[GH] https://github.com/farion1231/cc-switch"
  - "[GH:api] https://api.github.com/repos/farion1231/cc-switch — checked 2026-08-08: 125,662 stars, 8,553 forks, 2,256 default-branch commits, 1,396 open issues, 709 open PRs; REST open_issues_count=2,105 includes PRs; created 2025-08-04"
  - "[GH:languages] https://api.github.com/repos/farion1231/cc-switch/languages — Rust 64.8%, TypeScript 34.1% in checked snapshot"
  - "[GH:releases] https://api.github.com/repos/farion1231/cc-switch/releases?per_page=100 — 50 releases; latest v3.19.2 published 2026-08-06 with 19 assets"
  - "[GH:issues] https://github.com/farion1231/cc-switch/issues — checked samples include #6150 Windows UI crash/not-responding report, #5974 local-routing session-history split report, and #3996 S3 connection bug"
  - "[GH:prs] https://github.com/farion1231/cc-switch/pulls — 709 open PRs in checked GraphQL snapshot"
  - "[GH:community] https://api.github.com/repos/farion1231/cc-switch/community/profile — health 100; README, CONTRIBUTING, CODE_OF_CONDUCT, MIT LICENSE and PR template detected"
  - "[GH:actions] https://api.github.com/repos/farion1231/cc-switch/actions/runs — checked 2026-08-08: latest CI pull-request run succeeded; some Claude automation runs show action_required/skipped"
  - "[GH:security] https://api.github.com/repos/farion1231/cc-switch/security/advisories — GitHub API returned no published repository security advisories on 2026-08-08; this is not a safety guarantee"
  - "[GH:cockpit-tools] https://github.com/jlcodes99/cockpit-tools — comparison positioning only; separately reviewed in cockpit-tools.md"
  - "[Local:ccusage] /opt/data/wiki/github-repo-wiki/ai-programs/ai-cost-manager/ccusage.md inspected 2026-08-08; existing entry describes a local-first, read-only token/cost analyzer that does not manage accounts, routing, or client configuration"
  - "[Local:README] shallow clone at 413c09e0790c304506888ae24b9be72820aca126, README.md inspected 2026-08-08"
  - "[Local:manifest] same clone: package.json, src-tauri/Cargo.toml, LICENSE and src-tauri/tauri.conf.json inspected; package is Tauri/Rust + TypeScript under MIT; CSP uses script-src 'self', and updater config contains a minisign public key plus dl.ccswitch.io and GitHub endpoints"
  - "[Local:security] same clone: SECURITY.md inspected; explicit threat model treats deep links, WebDAV/S3 restore data, imported files, upstream API responses and inbound local-proxy requests as untrusted"
  - "[Local:proxy] same clone: src-tauri/src/proxy/types.rs and server.rs inspected; default proxy is 127.0.0.1:15721, while server binds the configurable listen_address"
  - "[Local:database] same clone: src-tauri/src/database/mod.rs, backup.rs and provider.rs inspected; SQLite at ~/.cc-switch/cc-switch.db; provider model contains api_key; sync skips selected logs/health tables but not provider rows"
  - "[Local:sync] same clone: src-tauri/src/services/sync_protocol.rs inspected; WebDAV/S3 sync snapshot is db.sql + skills.zip + SHA-256 manifest, up to 512 MiB per artifact"
  - "[Local:deeplink] same clone: src-tauri/src/commands/deeplink.rs inspected; backend parses/merges and imports provider/prompt/MCP/skill requests, while the UI is responsible for confirmation presentation"
  - "[Local:ci] same clone: .github/workflows/ci.yml and release.yml inspected; multi-platform Rust/frontend checks, test/clippy/format paths and signed-update/release automation present"
  - "[Local:changelog] same clone: CHANGELOG.md v3.19.0-v3.19.2 inspected; records read-size caps, deep-link preview hardening, SQL import authorizer, zip-slip hardening, credential-leak cleanup, batching/performance fixes and known upgrade caveats"
  - "[Local:audit-gap] checked host lacked pnpm and cargo-audit; no package-level pnpm/Cargo vulnerability audit was synthesized or claimed"
---

# CC Switch

> 面向 Claude Code、Codex、OpenCode、OpenClaw、Grok Build 与 Hermes Agent 等 coding-agent 的跨平台桌面控制台：provider/account 管理、local proxy/failover、usage/cost、MCP、skills、prompts、tool lifecycle 与 backup/sync。
>
> **状态**: `active` · **总分**: 4.0/5 · **采用推荐度**: 3/5
> **核验版本**: GitHub release `v3.19.2`（2026-08-06）/ 源码快照 `413c09e`（2026-08-08）

## 一句话总结

CC Switch 是当前很强的 personal coding-agent control plane：它把 provider、账号、路由、config、MCP/skill/prompt 与 usage 合进一套跨平台桌面应用，并对 deep link、sync、proxy 和日志泄露做了相当扎实的安全 hardening；但它仍是会改写凭据与 client config 的高权限 mutator，尤其在远程同步、代理暴露和真实 Hermes deployment 上，必须先做隔离、备份和可逆验证 [Local:README][Local:security][Local:changelog]。

## 总体评价

它的中心不是单一「切换 Claude Code 账号」，而是统一管理多个 coding-agent 的 connection/provider identity、配置文件、模型路由、local proxy、故障转移、usage/cost、MCP、skills、prompts、CLI lifecycle 与备份同步。README 明列 Claude Code、Codex、OpenCode、OpenClaw、Grok Build 与 Hermes Agent；最新 changelog 还显示持续进入 OMO、Grok、Codex usage、proxy bridge、skills 和 cloud sync 等边界 [Local:README][Local:changelog]。

这种覆盖让它比手写多个 `config.toml` / `.env` 更可操作，也带来一个需要诚实面对的事实：它是个人桌面 control plane，不是低权限 library，更不是 server-side account governance service。每一次 provider switch、takeover、remote restore 或 deep-link import 都可能改变 live config 和 credential routing。对于能理解该边界的 advanced personal user，它很有价值；对于共享服务器、生产 account、合规密钥或不可回滚环境，应默认保守 [Local:security][Local:database][Local:deeplink]。

## 推荐度：3/5

**推荐对象**是有多种 coding-agent、愿意管理本地配置、会做 backup、愿意逐项启用功能的个人高级用户。若只需要 Claude/Codex/OpenCode 的 cost visibility，ccusage 更小、更可审计；若需要更广 IDE identity/multi-instance management，可一并比较 Cockpit Tools [Local:ccusage][GH:cockpit-tools]。

给 3 分而非 4–5 分，原因不是功能或工程投入不足，而是 adoption risk 与能力规模同步上涨：它保存 provider API key、写入多个工具的 live config、可开启本地 proxy、允许 WebDAV/S3 同步数据库和 skills，并能从 `ccswitch://` 导入资源。源码与 changelog 表明维护者对此有很强的 security awareness，但正确使用仍取决于用户不把 untrusted link、共享数据库、非 loopback proxy 和主力账号混在一起 [Local:security][Local:sync][Local:deeplink][Local:changelog]。

对当前 Hermes Docker/profile，README 的「支持 Hermes」只能视为 potential integration，不代表本次已经验证兼容；在隔离 home / test profile 做 backup → one-app switch → restore → disable 的闭环前，不建议让它直接接管现有 Hermes 配置 [Local:README][Local:audit-gap]。

## 优势

1. **覆盖面真正完整**：provider、账号、代理/故障转移、model mapping、usage/cost、MCP、skills、prompts、tool manager、backup/sync 都在一个 desktop control plane 中 [Local:README]。
2. **安全文档与源码 hardening 强于同类常见水平**：SECURITY.md 明确列出 untrusted boundary；changelog 记录了 zip-slip、SQL `ATTACH`、prototype pollution、deep-link preview、credential leak、unbounded read、decompression bomb 等修复 [Local:security][Local:changelog]。
3. **local proxy 默认守住 loopback**：默认 `127.0.0.1:15721`，且 updater 配置内置 minisign public key 与 GitHub fallback endpoint [Local:proxy][Local:manifest]。
4. **工程与发布纪律较好**：Rust 64.8% + TypeScript 34.1%，CI/release workflow 覆盖前端和多平台 Rust check/test/clippy/format 路径，当前 GitHub CI sample 成功 [GH:languages][GH:actions][Local:ci]。
5. **社区、许可证与贡献入口健全**：125,662 stars、8,553 forks、MIT LICENSE、CONTRIBUTING、Code of Conduct、PR template 和 GitHub community health 100，为维护性提供比 star 数更实在的正信号 [GH:api][GH:community]。

## 劣势

1. **权限面极大**：它是 config/credential/proxy/process manager；价值越高，误配、third-party endpoint、cross-app state corruption 的 blast radius 也越大 [Local:README][Local:security]。
2. **credential-bearing database 会进入同步快照**：provider model 有 `api_key` 字段，数据库位于 `~/.cc-switch/cc-switch.db`；WebDAV/S3 sync 导出 `db.sql` 与 `skills.zip`，skip list 只排除 selected logs/health 等表，不排除 providers。远端同步服务、备份介质和本地 DB 都应按 secret-bearing data 保护 [Local:database][Local:sync]。
3. **高频变化仍在持续**：50 个 release、2256 commits、1396 open issues、709 open PR；大型 issue backlog 与实时 proxy/config feature 的快速扩张，意味着 pin version、读 upgrade notes 和保留 rollback 不是可选项 [GH:api][GH:releases][GH:issues]。
4. **不是 headless/server-first 产品**：Tauri desktop UI、local proxy 和客户端配置写入是设计中心；没有官方用户 Docker image，也没有证实稳定的 automation SDK [Local:manifest][Local:README]。
5. **安全 audit 有真实数据缺口**：本次环境没有 pnpm/cargo-audit，未为审查安装新包管理器或生成 lockfile，因此没有宣称 package-level dependency audit 已通过 [Local:audit-gap]。

---

## 适合什么场景

- 个人高级开发者同时使用 Claude Code、Codex、OpenCode、OpenClaw、Grok Build 等，想集中维护 provider、模型、quota 和使用量。
- 需要在本机做 controlled provider switching、local protocol routing 或 failover，同时能保留每个工具的原始 config backup。
- 想在受信任的 personal storage 上同步自己的设置，并愿意把 remote `db.sql` / `skills.zip` 当作含 secrets 的备份对象 [Local:sync][Local:database]。
- 需要统一维护 MCP、skills、prompts、工具安装状态，且会对每个来源/command/环境变量进行审查。
- 想学习 desktop agent-control-plane 的 threat modeling、local proxy 与跨应用 config reconciliation。

## 不适合什么场景

- 多用户共享机、生产 server、CI runner、受监管/高价值 API key 或无可逆备份的环境。
- 希望把 local proxy 绑定到 LAN/公网，或无法对 ingress/auth/network segmentation 负责的用户。
- 把 WebDAV/S3 bucket 当普通设置同步而不愿保护其中 API key、provider metadata、skills 的用户。
- 会点击未知 `ccswitch://` link、安装未审查 skill/MCP、或允许别人给出 provider config 的使用模型。
- 当前 Hermes production profile：未完成独立环境的 compatibility/rollback smoke test 前，不应直接接管 [Local:security][Local:sync][Local:deeplink]。

## 与类似项目对比

| 项目 | 定位 | 相对本项目 |
|------|------|-----------|
| CC Switch | coding-agent 账号/provider/config/proxy/usage/MCP/skills desktop control plane | 当前分析对象；功能与安全 hardening 均深，但也是权限面最大的一个 |
| Cockpit Tools | 多 AI IDE/CLI account、quota、multi-instance 与 Codex API Service controller | 更聚焦 IDE identity、多开和 API Service；CC Switch 的中心则是 coding-agent config/routing control plane [GH:cockpit-tools] |
| ccusage | local-first coding-agent token/cost analyzer | 更小且 read-only，适合单纯可见性；CC Switch 才会改变 routing、config、account 与 tool state [Local:ccusage] |

> 对比行是定位比较，并非对其它项目重新执行同一轮 10 维审计；Cockpit Tools 与 ccusage 均有本地独立分析条目。

## 它能做什么

1. **跨 agent 的 provider/config 管理**：为 Claude Code、Codex、Gemini CLI、OpenCode、OpenClaw、Grok Build 等保存并切换 provider、base URL、API key、模型和相关 live config [Local:README][Local:database]。
2. **账号与 OAuth 管理**：提供 Auth Center、official/managed provider 语义、quota/订阅信息和部分账号的 device/OAuth flows；它会触及真实 credential lifecycle [Local:README][Local:changelog]。
3. **local proxy 与 failover**：按应用将请求导向不同 upstream，做 protocol adaptation、request/usage logging、session/failover state；默认 proxy 是 `127.0.0.1:15721` [Local:proxy][Local:README]。
4. **usage/cost 观察**：从 proxy 与本地 session 信息聚合 usage/cost，含 pricing、rebuild、rollup 等；它是 operational telemetry，不等同供应商 bill reconciliation [Local:changelog]。
5. **MCP、skills、prompts、tool lifecycle**：能跨 agent 管理这些配置面；这使其成为一个完整工作台，也意味着 install/import source 必须逐项审查 [Local:README][Local:security]。
6. **backup 与 WebDAV/S3 sync**：打包 `db.sql`、`skills.zip`、manifest，支持多设备恢复；hash 是 integrity metadata，不应被误解成 encrypt-at-rest [Local:sync][Local:database]。
7. **deep-link imports**：backend 可解析/merge 后导入 provider、prompt、MCP 或 skill；源码只证明 confirmation presentation 由 UI 承担，backend import command 本身不构成独立的 human-consent enforcement [Local:deeplink][Local:security]。

能力给 5/5，因为它实际覆盖个人 coding-agent 运维的大部分表面；没有因此给 5/5 推荐度，因为它同时管理最敏感的配置与凭据。

## 运行环境与资源占用

| 场景 | CPU | 内存 | 存储 | 说明 |
|------|-----|------|------|------|
| 基础 desktop 管理 | 1 core | 数百 MB 级 | app + SQLite/config 的数百 MB | 少量 provider、无大规模 history/sync |
| proxy / history / sync 重度使用 | 2-4 cores | 数百 MB 到更高 | 数百 MB 至数 GB | proxy transforms、session import、DB backup、skills 和受管 CLI 数据叠加 |

- **运行形态**：Tauri desktop app，Rust backend + TypeScript renderer；可选 local HTTP proxy [Local:manifest][Local:proxy]。
- **操作系统**：release assets 覆盖 Linux/macOS/Windows；最新 v3.19.2 有 19 个 assets [GH:releases]。
- **Docker**：未核验到官方面向终端用户的 Docker image，且产品目标是写入用户 home/client config；`docker_support: false`。
- **GPU**：不需要。
- **性能结论**：changelog 记录 SQL backup batching、usage reimport 优化和 body caps，但本次没有 build/run benchmark；表中是保守 capacity estimate，不是实测宣称 [Local:changelog]。

## 上手体验

对熟悉多个 agent 的用户，UI 可以显著降低 config fragmentation：你不必逐个记住 `~/.codex`、`~/.claude`、`~/.hermes` 等路径。但安全的操作序列应当反过来：先在 backup 后的单一 app 上试 provider switch；验证该 app 真实读取了新 config；再验证 disable/restore；最后才开启 proxy、auto-sync、deep link 和跨应用批量管理。

安装时优先使用官方 release，并确认版本/asset/updater provenance；默认保持 proxy loopback、关闭未必要的 cloud sync；从未知来源的 `ccswitch://`、skills、MCP、backup 或 provider URL 一律先审查。此次没有运行 GUI/OAuth/proxy，也没有验证当前 Hermes Docker 的实际配置模型，因此不把 README 的支持列表当作 integration proof [GH:releases][Local:security][Local:deeplink]。

## 代码质量

**评分：4/5。** 该仓库在 source-level 可见的工程措施比较扎实：Rust/TypeScript 双层架构、带 CSP 的 Tauri config、CI 的 frontend/Rust checks、release automation、明确的 source threat model，以及最近连续针对 SQL import、archive extraction、deep links、unbounded read 和 secret logging 的 hardening [GH:languages][Local:ci][Local:security][Local:changelog]。

不给 5 分的原因是系统规模与状态复杂度已经很高：provider、local proxy、client config、database、backup/sync、skill install 和 shell/tool lifecycle 彼此交织；同时 1396 open issues / 709 open PR 中仍有 proxy history split、Windows UI crash、S3 sync 等核心路径报告。CI 成功是正信号，不是对所有 configurations 的证明 [GH:api][GH:issues][GH:actions]。

## 可扩展性

**评分：4/5。** 它已经有实际可用的 config/provider abstraction、multiple app adapters、model catalogs、MCP/skills/prompts、backup transport 和 local routing 层；新 agent 或 provider 有明确的内部落点 [Local:README][Local:manifest]。

不过它仍主要是 product extension，而非 stable SDK：第三方要扩展通常需理解内部 Rust/TypeScript schema、受管工具的 config dialect 和快速变化的 release notes。对组织级自动化而言，更稳妥的方式是把它当个人 desktop control plane，外部系统保留自身 authority。

## 文档质量

**评分：5/5。** README、CONTRIBUTING、SECURITY、release/upgrade notes 形成了少见的完整组合。尤其 SECURITY.md 不只给报告邮箱，还明确 deep links、remote restore、imported files、upstream API response 和 local-proxy inbound request 是 untrusted boundary；changelog 对安全修复、性能限制和版本升级副作用的解释也足够具体 [Local:README][Local:security][Local:changelog]。

文档强不等于能够跳过实践验证：产品维护多个外部 CLI 的不稳定 private config，某一版本的文档再完整，也无法替代你自己的 single-app smoke/rollback test。

## 社区与成熟度

**社区评分：5/5；成熟度：3/5。** 125,662 stars、8,553 forks、2256 commits、50 releases、MIT LICENSE、CONTRIBUTING、Code of Conduct 和 PR template，加上 GitHub community health 100，说明它不仅有流量，也有可见的贡献治理表面 [GH:api][GH:community][GH:releases]。

成熟度仍是 3，而非 4–5：项目从 2025-08 起步，仍处于高频 feature/security churn，1396 issues 和 709 PR 说明维护需求巨大。项目已经比新工具稳定得多，但 client-facing config/proxy compatibility 仍需通过 pinning、upgrade notes 与恢复路径来管理 [GH:api][GH:issues][Local:changelog]。

## 安全与风险

**评分：4/5（这里评价 source-revealed engineering safeguards，不是生产部署安全保证）。** 正面证据很强：Tauri CSP 限制 script source；updater 内置 minisign public key 并使用官方 mirror + GitHub fallback；默认 proxy 是 loopback；SECURITY.md 的 threat model 明确；最近版本修了 SQL import authorizer、zip-slip/path traversal、deep-link content visibility、secret masking/cleanup、JS runtime/read/decompression caps [Local:manifest][Local:proxy][Local:security][Local:changelog]。

仍有不能消失的 design risks：

1. **SQLite 与同步 payload 是 secret-bearing**：源码明确将 DB 放在 `~/.cc-switch/cc-switch.db`；provider model 有 `api_key`；sync 将数据库导出为 `db.sql`，skip table list 不含 providers。因此本地磁盘、backup、WebDAV/S3 endpoint 的 access control 与 encryption-at-rest 是操作者责任；本次 reviewed paths 未提供「provider keys are end-to-end encrypted in sync」的证据 [Local:database][Local:sync]。
2. **proxy 只能按 default 来理解**：默认是 `127.0.0.1:15721`，但 server 绑定 `ProxyConfig.listen_address`，所以任何改成 LAN/public address 的配置都是新 trust boundary，不能把本地 desktop proxy 当作无需认证的网络服务 [Local:proxy]。
3. **deep link/restore 是特权输入路径**：backend 支持 parse、merge、import provider/prompt/MCP/skill；confirmation presentation 位于 UI 层，不能替代对链接来源、command、env、URL、skill archive 和 remote snapshot 的审查 [Local:deeplink][Local:security][Local:changelog]。
4. **没有把 absence 误写成安全证明**：本次 GitHub advisory endpoint 未见项目 GHSA；但 host 没有 pnpm/cargo-audit，故没有 package-level audit verdict。源代码 hardening 与没有公告漏洞都不能证明依赖链或运行时「无漏洞」 [GH:security][Local:audit-gap]。

## 学习价值

CC Switch 是研究 agent tooling 安全工程的好材料：它展示了如何定义 untrusted boundary、如何让 deep-link confirmation presentation 与 backend parsing 的责任分层、如何对 ZIP/SQL/sync 做 fail-closed 限制，以及如何把 proxy body/decompression 从 potential DoS 变成 bounded resource [Local:security][Local:changelog][Local:database]。

更深的一课是：一旦一个工具同时拥有 credentials、routing、MCP/skill installation 和 remote sync，它就不再是普通「账号管理 GUI」。最好的安全设计只能降低风险；对真实 deployment，authority、backup、least privilege、network exposure 与 change rollback 仍应由使用者自己掌握。
