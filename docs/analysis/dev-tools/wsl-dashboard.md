---
title: "WSL Dashboard"
created: 2026-08-26
updated: 2026-08-26
type: repository-analysis
repo_url: "https://github.com/owu/wsl-dashboard"
category: "dev-tools"
tags: [rust, slint, windows, wsl, wsl2, desktop, usbipd, networking, disk-management]
previous_repo: ""
successor: ""
primary_language: "Rust"
license: "GPL-3.0-only"
stars: 3594
forks: 181
last_checked: 2026-08-26
last_verified: 2026-08-26
evidence: "GitHub API/GraphQL + README/manual/docs + current shallow source scan; Windows runtime not deployed; metadata passed, cargo fmt --check failed"
archived_reason: ""
docker_support: false
gpu_required: false
estimated_cpu: "未给出官方 CPU 下限；64-bit Windows CPU，WSL/多实例场景建议 2+ cores（heuristic）"
estimated_memory: "约 10MB tray / 18–38MB GUI（README claim，未独立实测）"
estimated_storage: "最新 v0.11.0 release 安装文件约 11.2–13.2MB（含 portable zip 与 Setup zip/exe），另需 WSL distribution/VHDX 空间"
status: active
ratings:
  capability: 4
  usability: 4
  performance: 3
  code_quality: 3
  documentation: 4
  community: 3
  maturity: 2
  extensibility: 2
  security: 2
  recommendation: 3
overall_score: 3.0
sources:
  - "[GH:api] https://api.github.com/repos/owu/wsl-dashboard queried 2026-08-26: archived=false, created_at=2026-01-18T05:30:02Z, pushed_at=2026-08-25T00:14:52Z, default_branch=main, primary_language=Rust, license=GPL-3.0, stars=3594, forks=181, REST open_issues_count=8"
  - "[GH:graphql] GitHub GraphQL search queried 2026-08-26: open issues=8 and open pull requests=0; REST open_issues_count is therefore not treated as an issue-only count"
  - "[GH:releases] GitHub releases API queried 2026-08-26: latest stable release v0.11.0 published 2026-08-25; 17 non-draft, non-prerelease releases were returned from v0.1.0 through v0.11.0"
  - "[GH:release-0.11] https://github.com/owu/wsl-dashboard/releases/tag/v0.11.0 queried 2026-08-26: release assets are Portable.x64.zip 13,176,565 bytes, Setup.x64.exe 11,767,284 bytes, Setup.x64.zip 11,225,970 bytes; notes cover physical/VHD/VHDX disk mount, terminal compatibility, WSL version checks, scheduled-task fixes, and installer/uninstaller changes"
  - "[GH:issues] GitHub open-issue search queried 2026-08-26: #125 cold boot slow, #123 keyboard shortcuts, #115 USB serial paths, #113 docker-desktop handling, #103 WSLC support, #94 accessibility, #81 security-software false positives, #53 WSL desktop feature; the queue was mostly feature/question/notice requests rather than a large bug backlog"
  - "[GH:community] GitHub contributors/community/branch endpoints queried 2026-08-26: contributors endpoint returned one User contributor (wqh); community health_percentage=57; main branch protected=true at commit 948589a255a4bd8a3ff9c3de49e2e13109378fcd"
  - "[GH:readme] https://github.com/owu/wsl-dashboard/blob/main/README.md inspected 2026-08-26, lines 109-244 and 273-330: feature list, roughly 10/18–38MB memory claims, Windows/WSL requirements, website/winget/portable/source installation, Rust+Slint+Tokio stack, community groups, and GPL-3.0 notice"
  - "[GH:manifest] https://github.com/owu/wsl-dashboard/blob/main/Cargo.toml inspected 2026-08-26, lines 1-73: Rust 2024, rust-version=1.92, Cargo license metadata=GPL-3.0, while LICENSE/REUSE declare GPL-3.0-only; Slint 1.17.1 with Skia, Tokio, windows 0.62.2, ureq/reqwest, optional dhat, dev-dependencies tempfile/serde_test, and release profile opt-level=z, lto=true, codegen-units=1, strip=true, panic=abort"
  - "[GH:toolchain] https://github.com/owu/wsl-dashboard/blob/main/rust-toolchain.toml inspected 2026-08-26: stable-x86_64-pc-windows-msvc toolchain"
  - "[GH:local-scan] Shallow clone /opt/data/tmp/wsl-dashboard-analysis-20260826 at commit 948589a255a4bd8a3ff9c3de49e2e13109378fcd inspected 2026-08-26: 175 tracked Rust/Slint source files, 23,339 Rust lines, 15,303 Slint lines, 49 manual Markdown files, 2 cfg(test) modules with 25 test functions (27 test-related attributes including the two cfg(test) markers); no SECURITY.md, CONTRIBUTING.md, CODE_OF_CONDUCT.md, or CHANGELOG file"
  - "[GH:local-metadata] In the same clone, RUSTUP_TOOLCHAIN=stable cargo metadata --no-deps --format-version 1 completed successfully; no Windows runtime, release binary, WSL operation, or cargo test execution was performed"
  - "[GH:advisories] https://api.github.com/repos/owu/wsl-dashboard/security-advisories queried 2026-08-26: returned []; this is only a negative lookup result for published GitHub advisories, not a safety claim"
  - "[GH:local-format] In the same clone, RUSTUP_TOOLCHAIN=stable cargo fmt --check failed with 23 rustfmt diagnostics, including import/order/format drift and trailing whitespace in UI handler files; the repository-declared Windows toolchain cannot be used by this Linux host without overriding the toolchain"
  - "[GH:ci] https://github.com/owu/wsl-dashboard/tree/main/.github/workflows inspected 2026-08-26: active workflows are release, Cloudflare deploy, Gitee deploy, notification deploy, and WinGet submit; release uses windows-latest and cargo build --release, but no dedicated test/lint workflow was found"
  - "[GH:code] Local source scan inspected src/main.rs, src/app/runner.rs lines 24-190, src/wsl/executor.rs lines 89-245, src/wsl/ops/lifecycle.rs, src/network/port_proxy.rs and src/config/mod.rs at commit 948589a: modular Rust/Slint/Tokio application; executor limits are 16 global permits, 4 background heavy-operation permits, 1MB MAX_OUTPUT_SIZE and 30m heavy-operation timeout with kill_on_drop; lifecycle migration attempts registry-path readback; configuration migration and Windows-specific WSL/network/distro operations are also covered"
  - "[Local:api] src/app/constants.rs lines 48-55 and src/api/common.rs lines 26-269 inspected 2026-08-26: the application contacts docs.wslui.com plus api1.wslui.com/api2.wslui.com for version, helper, mirror, bootstrap, sync, donate and mount data, with in-memory caches and stale-cache fallback"
  - "[Local:elevation] src/utils/system.rs lines 60-168, src/network/port_proxy.rs lines 91-182, src/wsl/ops/lifecycle.rs lines 163-264 and src/app/scheduler_task/schtasks.rs lines 28-605 inspected 2026-08-26: UAC runas waits for the elevated process and reads its exit code; hidden cmd.exe/PowerShell, netsh firewall/portproxy, Appx cleanup, WSL move and scheduled-task operations are also present"
  - "[Local:tls] src/api/client.rs lines 24-177 inspected 2026-08-26: release-agnostic client code disables HTTPS certificate verification in cfg!(debug_assertions), retries requests after 200ms, and uses 5s default/request-specific timeouts"
  - "[Local:tests] src/config/mod.rs lines 525-707 and src/app/scheduler_task/schtasks.rs lines 773-865 inspected 2026-08-26: unit tests cover config serde/time/field behavior and cron-to-schtasks conversion, but no integration/system test harness was found in the shallow scan"
  - "[Local:license] LICENSE and REUSE.toml inspected 2026-08-26: repository-wide GPL-3.0-only declaration and REUSE metadata"
  - "[Docs] https://docs.wslui.com/ fetched 2026-08-26: concise official product introduction focused on GUI WSL management, native performance, RootFS helper, firewall configuration and startup-on-boot"
  - "[Docs:download] https://www.wslui.com/download/ fetched 2026-08-26: Windows x64, Windows 10 1903+/Windows 11, WSL 2 enabled, portable/installer variants and winget installation"
  - "[WikiLocal:comparisons] Existing local positioning entries /opt/data/wiki/github-repo-wiki/dev-tools/scrcpy.md, kache.md and puppeteer.md inspected 2026-08-26; comparison rows below are same-category positioning references, not fresh 10-dimension audits"
---

# WSL Dashboard

> Windows 原生 WSL 实例管理 GUI：把发行版生命周期、迁移/导入导出、磁盘、网络、USB 与定时任务集中到一个轻量桌面面板。
>
> **状态**: `active` · **总分**: 3.0/5 · **推荐度**: 3/5
>
> **验证边界**：本轮核验了 GitHub API/GraphQL、README、官方站点、当前浅克隆源码与静态 Cargo metadata；没有在 Windows 上启动 release binary、执行真实 WSL/USB/磁盘操作或运行 cargo test。README 的内存数字和“near-instant”表述仍是项目方声明，不是本轮 benchmark 结果 [GH:local-metadata][GH:local-format][GH:readme]。

## 一句话总结

WSL Dashboard 适合希望用 GUI 管理 Windows WSL 发行版的开发者和 power user：功能面很宽、原生发布路径清楚、资源效率目标鲜明，但项目创建不足一年、贡献集中在单一维护者，且多个操作会通过 UAC/PowerShell/`cmd.exe` 改写主机状态，因此更适合个人开发机试用而非未经隔离的生产主机。

## 总体评价

这是一个产品边界清楚、功能扩张很快的 Windows-only 开源桌面工具。README 和 v0.11.0 release notes 已覆盖发行版启动/停止/注销、安装、导入导出、VHDX 移动与 sparse 管理、磁盘挂载、端口转发、防火墙、HTTP proxy、USBIPD、VS Code/Terminal/File Explorer 集成、系统托盘和 Windows Task Scheduler [GH:readme][GH:release-0.11]。

工程上它不是一个简单的 Slint demo：源码按 `app`、`ui`、`wsl`、`network`、`usb`、`config`、`api` 等模块组织，Tokio 负责异步命令与后台任务，WSL executor 对并发数、超时、输出大小和子进程回收做了显式控制 [GH:code]。但当前证据仍有明显上限：仓库很年轻，contributors endpoint 只返回一个 User，只有配置/cron 两块单元测试，主线没有专门的 test/lint workflow，且 `cargo fmt --check` 在覆盖源码时发现了 23 个格式诊断 [GH:community][Local:tests][GH:local-format][GH:ci]。

一句话判词：**能力值得试，成熟度与权限边界需要审慎；它像一个已经能解决真实 WSL 摩擦的个人生产力工具，还不是经过长期平台化治理的系统管理产品。**

## 推荐度：3/5

**目标角色**：Windows 10/11 + WSL2 的个人开发者、需要频繁迁移/备份发行版的 power user，以及愿意在非关键机器上验证 GUI 运维工具的人。

推荐度给 3，而不是 4 或 5，理由是“功能价值”和“采用风险”同时存在。对 WSL 发行版较多、经常需要移动 VHDX、配置 portproxy、管理 USB 设备或编排定时任务的人，它比手记 `wsl.exe`、`netsh`、`schtasks` 命令更集中、更可发现；winget、portable binary、installer 和源码构建也让试用入口较完整 [GH:readme][Docs:download]。

不过，软件会把用户点击转化为 WSL 注销/迁移/挂载、Appx 清理、隐藏 shell、网络防火墙和计划任务操作。项目没有 `SECURITY.md`，没有本轮独立 Windows smoke test，也没有公开可见的 test/lint workflow；对部分成功后的 rollback/recovery 行为，本轮未验证，且未找到公开的系统化回滚契约；同时 release 仍在快速增加功能，主线的社区 bus factor 很低 [GH:local-scan][GH:ci][GH:community]。建议固定版本、先备份 VHDX、在非生产账户上试用，并把它视为高权限本地工具而不是“无风险的桌面设置面板”。

## 优势

1. **WSL 场景覆盖宽**：从发行版安装、生命周期、迁移、导入导出，到磁盘、网络、USB 和 scheduler，核心痛点集中解决 [GH:readme][GH:release-0.11]。
2. **原生桌面路径直接**：Rust + Slint + Tokio，Windows x64 portable/installer/winget 路径明确；不依赖 Docker、数据库或常驻 Web 服务 [GH:manifest][Docs:download]。
3. **资源效率目标明确**：release profile 使用 `opt-level = "z"`、LTO、单 codegen unit、strip 和 abort-on-panic；README 还公开了 tray/GUI 内存估计，至少把优化目标变成了可核验的工程命题 [GH:manifest][GH:readme]。
4. **系统操作有一定防护意识**：WSL executor 有 16 个并发许可、后台重操作 4 个许可、读/写/重操作不同 timeout、1MB 输出限制和 `kill_on_drop`；迁移后还尝试回读注册表确认路径 [GH:code]。
5. **用户文档与本地化投入大**：README、中文手册和 49 个 `manual/*.md` 文件覆盖安装、配置、截图、语言选择与常见使用路径 [GH:readme][GH:local-scan]。

## 劣势

1. **成熟度不足**：仓库创建于 2026-01，v0.11.0 已快速发布，但长期兼容性、回滚策略和跨版本数据迁移仍没有足够时间证据 [GH:api][GH:releases]。
2. **贡献集中，治理不完整**：contributors endpoint 只返回 `wqh` 一个 User；community health 为 57%，未发现 SECURITY/CONTRIBUTING/CODE_OF_CONDUCT [GH:community][GH:local-scan]。
3. **不是跨平台工具**：运行时绑定 Windows WSL、PowerShell、registry、`netsh`、`schtasks`、`usbipd-win` 等系统面，Linux/macOS 用户不能把它当作通用 WSL 管理库 [GH:toolchain][GH:code]。
4. **扩展面主要是源码内部扩展**：没有面向用户的 plugin/API/hooks 协议；任务 scheduler 能执行脚本，但这不是可治理的第三方扩展系统 [GH:code][Local:elevation]。
5. **高权限操作的失败半径较大**：隐藏 `cmd.exe`/PowerShell、UAC、Firewall/portproxy、Appx、磁盘挂载和 WSL unregister 都会改变主机状态；路径/命令转义和异常恢复应按高风险系统工具审计 [Local:elevation]。

---

## 适合什么场景

- 个人 Windows 开发机上管理多个 WSL2 distributions，减少记忆长命令的成本。
- 需要 GUI 完成 start/stop/terminate/unregister、default distro、VHDX move、export/import、clone 或 sparse 管理。
- 需要把 WSL 网络端口转发、防火墙规则、HTTP proxy 和发行版 IP 变化集中管理。
- 需要在 WSL 与 Windows 之间处理 USBIPD 设备、File Explorer、Terminal、VS Code 与启动脚本。
- 想使用 system tray、auto-start、close-to-tray、任务计划和多语言 UI 的 Windows power user。
- 愿意先备份、固定版本、在非生产账户上验证，并接受某些操作需要 Administrator/UAC。

## 不适合什么场景

- Linux/macOS 主机，或需要跨平台 WSL 管理 API/daemon 的团队。
- 生产服务器、云主机、支付/云控制台等高价值环境；项目的权限边界、审计与安全响应证据不足以替代正式运维控制面。
- 需要远程多人协作、RBAC、审计日志、集中策略、fleet management 或无头部署的环境。
- 只想要一个稳定的 `wsl.exe` wrapper、而不需要 GUI、网络、防火墙、磁盘和 USB 功能的自动化脚本。
- 不能接受 GPL-3.0-only copyleft、不能接受依赖官方 API/镜像服务，或要求完全离线运行的场景 [Local:license][Local:api]。

## 与类似项目对比

| 项目 | 定位 | 相对本项目 |
|------|------|-----------|
| scrcpy | 原生 Android 设备镜像与控制工具 | 同属 `dev-tools` 下的系统/设备整合工具，但 scrcpy 面向 Android device control；WSL Dashboard 面向 Windows 主机上的 WSL lifecycle 和 storage/network management。 |
| kache | Rust build-cache / compiler-cache developer tool | 同样是 Rust developer tool，但 kache 是 CI/build pipeline primitive；WSL Dashboard 是 Windows-only end-user GUI，二者不是直接替代关系。 |
| Puppeteer | 浏览器自动化库与开发工具 | Puppeteer 的核心是可编程 browser automation；WSL Dashboard 的核心是本地 WSL 管理，没有同等的通用 plugin/API automation surface。 |

上述项目按 `dev-tools` 同类目录做定位级对比，依据本地 wiki 既有条目的标题级定位与分类语境，未按同一 10 维度框架重新审计；比较不表示谁更成熟、更安全或更快 [WikiLocal:comparisons]。

---

## 它能做什么

能力评分 4/5。README 的功能列表与当前源码模块大体一致，但本轮没有安装 release artifact 或执行 WSL 操作，以下应理解为“文档/源码支持”，不是本轮端到端验收结果 [GH:readme][GH:code][GH:local-metadata]。

- **发行版生命周期**：列出、启动、停止、terminate、shutdown、set default、unregister，并展示状态、磁盘使用和安装位置。
- **发行版迁移与备份**：通过 WSL import/export、`.tar`/`.tar.gz`、clone、VHDX move 和 sparse VHDX 管理完成迁移/归档。
- **发行版安装**：支持 Microsoft Store、GitHub、本地 RootFS/VHDX、在线镜像与速度探测辅助。
- **配置管理**：读写 `wsl.conf` 的 automount/network/interop/user/boot/gpu/time 部分，保存 app、tray、sidebar、network、instance 配置，并提供 migration/debug config。
- **桌面集成**：system tray、auto-start、silent mode、dark/light theme、多语言、启动 Terminal/VS Code/File Explorer，以及 close-to-tray。
- **磁盘与硬件**：挂载/卸载 WSL VHD/VHDX 与 physical disk，过滤系统盘及部分可移动介质，并集成 `usbipd-win` 管理 bind/attach/detach。
- **网络**：管理 `netsh interface portproxy`、防火墙规则、发行版 IP tracking 和全局 HTTP proxy。
- **自动化**：创建、查询、启用/禁用、立即运行和删除 Windows Scheduled Tasks，把 cron-like 表达式映射到 `schtasks`。
- **外部服务**：通过 `api1.wslui.com`/`api2.wslui.com` 获取更新、bootstrap、镜像、安装辅助、同步消息、捐赠和 mount help 等数据，并以进程内 cache 和 stale-cache fallback 降低重复请求 [Local:api]。

它的能力广度足以给 4 分；不给 5 是因为所有能力都强绑定 Windows/WSL 版本、管理员权限、外部系统组件和本地环境，且本轮没有进行行为级复现。

## 运行环境与资源占用

| 场景 | CPU | 内存 | 存储 | 说明 |
|------|-----|------|------|------|
| 最小 portable/tray | 64-bit Windows CPU；README 未给 CPU 下限 | 约 10MB tray（项目方声明） | 单个 portable 压缩包约 13.2MB | Windows 10/11 + WSL enabled；未独立实测 [GH:readme][GH:release-0.11] |
| 普通 GUI | 64-bit Windows CPU；字体、Skia 与刷新频率影响实际开销 | 约 18MB 标准语言、约 38MB 中日韩大字符集（项目方声明） | installer 安装文件约 11.2–11.8MB（混合 .zip/.exe） | WSL2 recommended；至少一个 distro 或安装权限 [GH:readme][Docs:download] |
| 多发行版/导入导出/挂载 | 本分析 heuristic 建议 2+ cores；不是官方 CPU requirement；CPU/IO 取决于 WSL workload | README 建议系统 RAM ≥4GB；WSL 实例本身另计 | VHDX、tar/tar.gz 与镜像缓存可能远大于程序本体 | 真实占用取决于 distro 数量、磁盘迁移和字体/渲染路径 |

- **运行时**：Rust native executable、Slint + Skia、Tokio；WSL 命令由 `wsl.exe`/PowerShell/Windows APIs 执行 [GH:manifest][GH:code]。
- **操作系统**：Windows 10/11，README 推荐 WSL2；源码 toolchain 指向 `x86_64-pc-windows-msvc` [GH:readme][GH:toolchain]。
- **Docker**：`docker_support: false`。仓库交付的是 Windows x64 portable/installer/winget，不是官方 Docker image；Docker Desktop 只是 issue/用户场景的一部分，不应误读成容器部署路径 [GH:release-0.11][GH:issues]。
- **GPU**：不要求；Skia 是渲染后端，但 README 的系统要求没有 GPU prerequisite [GH:readme]。
- **外部依赖**：WSL、发行版、可选 `usbipd-win`、PowerShell/schtasks/netsh、Windows UAC；VS Code/Terminal/File Explorer 集成还依赖对应宿主程序；更新和辅助数据依赖 `wslui.com` API [Local:api][Local:elevation]。

performance 评分 3/5。原生 Rust、size-oriented release profile 与公开的低内存目标是正面信号，但本轮没有 Windows benchmark、RSS 采样、cold-start 测量或多 distro 压力测试；按保守规则不把 README 数字升级为 4/5 实测结论 [GH:manifest][GH:readme][GH:local-metadata]。

## 上手体验

评分 4/5。

对目标用户来说，portable、installer 和 winget 三条路径都比较直接；GUI 把复杂的 WSL、network、USB 和 scheduled-task 操作集中到可见界面，README 还提供截图、系统要求、安装命令和中文/多语言手册 [GH:readme][Docs:download][GH:local-scan]。

扣一分来自环境前提与权限心智模型：用户仍要理解 WSL2、发行版状态、VHDX/RootFS、Administrator/UAC、`usbipd-win`、Windows Firewall 和 PowerShell；部分操作失败时不能简单重试，最好先备份并查看日志。本轮未验证部分成功后的清理/回滚行为，也没有找到公开的系统化 recovery/rollback 契约。对熟悉 Windows/WSL 的用户是 4，对完全不了解 WSL internals 的用户则更接近 3。

## 代码质量

评分 3/5。

正面信号是模块边界可读：`app` 负责生命周期/任务/托盘，`ui` 负责 Slint 视图与 handler，`wsl` 负责 command executor 与操作，`network`、`usb`、`config`、`api` 各自有相对明确的职责。WSL executor 的 semaphore、timeout、output cap、streaming reader 和 child cleanup 说明维护者在处理真实系统命令的 hang/resource-exhaustion 问题 [GH:code]。

测试不是空白：当前浅扫找到两个 `cfg(test)` 模块、25 个测试函数（即 27 个 test-related attributes，后者包含两个 `cfg(test)` 标记），覆盖 config TOML/JSON serde、时间字段、字段校验，以及 cron 到 Windows `schtasks` 的转换和非法输入；但测试集中在纯函数/配置层，未形成 WSL/Windows API/磁盘/网络/USB 的 integration harness [Local:tests]。

质量证据的负面侧同样明确：主线共有 5 个 active workflow，主要用于 release/deploy/notification/WinGet；没有专门的 test/lint workflow。在 Linux 上以 stable toolchain 运行 `cargo fmt --check` 失败并报告 23 个格式诊断。`cargo metadata --no-deps` 可通过只说明 manifest 可解析，不能替代 Windows compile/runtime test [GH:ci][GH:local-format][GH:local-metadata]。因此代码可读性与工程意识可以给 3，但证据不足以给 4/5。

## 可扩展性

评分 2/5。

内部可扩展性尚可：Rust 模块拆分清楚，配置有独立 TOML 文件和 migration，Slint views/components/handlers 分层，debug config 允许开发阶段替换部分本地数据；scheduler、network rules 与 WSL operations 也有明确的内部函数边界 [GH:code]。

但从用户/第三方视角看，它不是 plugin platform。外部 API 地址、Windows command surface、UI state 和 operation flow 都是应用内部实现；没有稳定的 public library API、plugin manifest、hooks 或 remote management protocol。scheduler 的“执行脚本/命令”是产品功能，也是权限风险，不等于可审计的 extension mechanism。需要加入新后端、新平台或新管理面时，现实路径大多仍是 fork 和源码修改。

## 文档质量

评分 4/5。

README 对最终用户覆盖得比较完整：功能清单、截图、配置与日志、系统要求、四种安装路径、winget id、构建命令、技术栈、社区入口和 GPL 许可证都在一个可搜索页面里；中文手册和其他语言手册降低了非英语用户的门槛 [GH:readme][GH:local-scan]。官方 docs 首页也能快速解释它的产品定位、轻量原生路径、RootFS helper、防火墙和开机启动 [Docs]。

不足是信息架构偏 product README，而不是 developer handbook：本轮入口页没有看到架构说明、API reference、权限矩阵、灾难恢复/备份指南、测试策略或安全响应流程；具体系统差异仍需要读源码和 issue。故文档足以支持试用和基本操作，但不能按完整平台文档给 5。

## 社区与成熟度

| 维度 | 评分 | 说明 |
|------|------|------|
| 社区活跃度 | 3/5 | GitHub 快照为 3,594 stars、181 forks、8 open issues、0 open PR；最新 commit/release 在 2026-08-25，说明项目有人持续维护，但 contributors endpoint 只返回一个 User，生态与贡献者多样性仍有限 [GH:api][GH:graphql][GH:community]。 |
| 成熟度 | 2/5 | 仓库创建于 2026-01，至 2026-08 已到 v0.11.0，并在数月内连续发布 17 个 release；活跃不等于长期稳定。WSL/Windows 版本兼容、磁盘/USB/网络高权限操作和配置迁移仍需要更长时间验证 [GH:api][GH:releases][GH:release-0.11]。 |

“1 个 contributors”不等于没有用户：星数、fork、issue 和 release 说明它已有可见使用面；但在成熟度评分中，单一维护者和快速能力扩张仍应压低 bus-factor 与长期兼容性信心。Issue queue 中既有 cold boot/security software false positive 等问题反馈，也有 feature/question/可访问性请求，不能只用星数判断质量 [GH:issues]。

## 安全与风险

评分 2/5。

正面信号：项目使用 GPL-3.0-only/REUSE 标注，WSL command executor 有 timeout、output limit 和 `kill_on_drop`，UAC 操作会等待进程并读取退出码，移动 distro 后尝试检查 registry 位置；本轮 GitHub Security Advisories endpoint 返回 `[]`，但这只表示本次检查没有发现已发布项目 GHSA，不代表代码或依赖“安全无虞” [Local:license][GH:code][GH:advisories]。

主要风险面如下：

1. **权限面很宽**：源码通过 `ShellExecuteExW` 的 `runas` 执行隐藏 elevated `cmd.exe`，并组合 `netsh portproxy`/firewall、PowerShell、Appx、`wsl --manage`、physical-disk mount 与 scheduled tasks [Local:elevation]。
2. **命令构造需要持续审计**：多个 elevated path 将发行版名、路径、地址或 task 参数拼接进 shell command；即使普通 UI 输入有校验，也应把本地配置、导入文件和异常字符当作不可信边界，特别关注 quoting/escaping、日志泄漏和失败后的部分状态。
3. **开发 TLS 配置危险**：`src/api/client.rs` 在 debug assertions 下关闭 HTTPS certificate verification。它不是 release-only 结论，但属于容易被误用/复制的危险默认代码路径；生产构建、开发构建和 API endpoint 变更都应明确区分 [Local:tls]。
4. **外部服务与镜像信任**：启动/更新/镜像安装/同步等辅助功能依赖 `api1.wslui.com`、`api2.wslui.com` 与可能返回的下载源；这扩大了网络、供应链与可用性边界 [Local:api]。
5. **治理证据不足**：未发现 SECURITY.md、贡献指南或行为准则，也没有本轮独立的依赖 audit/Windows security test 证据 [GH:local-scan][GH:ci]。

因此它不适合在有生产凭据、支付权限、云管理权限或敏感数据的主机上无隔离运行。个人开发机上可以在备份、最小权限和固定 release 的前提下试用；GPL-3.0-only 也需要在再分发、闭源集成和商业发布前单独完成 license review [Local:license]。

## 学习价值

学习价值高于它当前的生产采用成熟度。它是研究“Rust 如何包住 Windows/WSL 系统边界”的良好案例：可以重点阅读 Slint UI 与 Tokio background tasks 的协作、WSL 命令的并发/timeout/output backpressure、Windows registry 与 `wsl.conf` 的状态映射、UAC `ShellExecuteExW`、`netsh` portproxy/firewall、`schtasks` cron conversion、USBIPD 设备管理，以及 release workflow 如何构造 portable/installer/winget 分发 [GH:code][Local:elevation][GH:ci]。

反面教材同样值得看：高权限 shell command 的参数转义、部分成功后的清理/回滚、外部 API/镜像信任、debug TLS 例外、缺少跨系统 integration test，以及“README 性能数字如何被 benchmark 证伪”。若用于学习，建议把 `src/wsl/executor.rs`、`src/utils/system.rs`、`src/network/port_proxy.rs` 和 `src/app/scheduler_task/schtasks.rs` 作为审计入口，而不是只看漂亮的 Slint UI。
