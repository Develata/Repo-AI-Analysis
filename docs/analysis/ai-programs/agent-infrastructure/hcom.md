---
title: "hcom"
created: 2026-06-24
updated: 2026-09-10
type: repository-analysis
repo_url: "https://github.com/aannoo/hcom"
category: "ai-programs/agent-infrastructure"
tags: [agent-infrastructure, multi-agent, terminal, cli, hooks, sqlite, relay, rust]
previous_repo: ""
successor: ""
primary_language: "Rust"
license: "MIT"
stars: 486
forks: 74
last_checked: 2026-09-10
last_verified: 2026-09-10
evidence: "2026-09-10 GitHub API, release/advisory, README and manifest static review; historical 2026-06 tests retained explicitly as historical, not rerun; no current real-agent/relay/Windows smoke or benchmark"
archived_reason: ""
docker_support: false
gpu_required: false
estimated_cpu: "low for coordination; external agent processes dominate"
estimated_memory: "workload-dependent; not benchmarked"
estimated_storage: "Rust executable plus local SQLite, config, transcripts and logs"
status: active
ratings:
  capability: 4
  usability: 4
  performance: 4
  code_quality: 4
  documentation: 4
  community: 3
  maturity: 3
  extensibility: 4
  security: 3
  recommendation: 4
overall_score: 3.7
sources:
  - "[GH:api] https://api.github.com/repos/aannoo/hcom checked 2026-09-10 UTC+8: canonical=aannoo/hcom, archived=false, disabled=false, branch=main, pushed_at=2026-08-09T16:52:44Z, language=Rust, license=MIT, stars=486, forks=74; separate GitHub search queries is:issue/is:pr is:open returned 27 issues and 22 PRs; created_at=2025-07-21"
  - "[GH:release] https://api.github.com/repos/aannoo/hcom/releases?per_page=10 checked 2026-09-10: latest v0.7.25 published 2026-08-09T17:03:32Z; release lists native x64 Windows MSVC zip and PowerShell installer, macOS/Linux/Android archives and checksums; artifacts not executed"
  - "[GH:readme] https://github.com/aannoo/hcom/blob/main/README.md read via GitHub contents API 2026-09-10; tree snapshot 79ebde134c4d29b5ba64e5c9839a12bedb7ee125; hooks→SQLite→hooks delivery, message/watch/spawn/fork/resume/kill, TUI, native Windows installation, manual start, terminal adapters; relay uses shared PSK/XChaCha20-Poly1305, all-or-nothing membership, no scoped roles/expiry/revocation list/forward secrecy"
  - "[GH:build] https://github.com/aannoo/hcom/blob/main/Cargo.toml and pyproject.toml inspected 2026-09-10 at same tree: version=0.7.25, Rust edition=2024, rust-version=1.88; clap/rusqlite/ratatui/crossterm/rumqttc/rustls/chacha20poly1305, Unix and Windows dependencies; maturin binary distribution, Beta classifier and native Windows classifier; GitHub recursive tree contains 217 blob paths"
  - "[GH:advisory] https://github.com/aannoo/hcom/security/advisories/GHSA-pwv3-8r7h-p373 checked 2026-09-10: published 2026-08-09, medium, package pip/hcom, affected >=0.7.17,<0.7.25, patched=0.7.25. Failed exact hook-trust repair could append invocation-wide --dangerously-bypass-hook-trust; first Codex turn in a repository with project SessionStart hook could execute that hook. Advisory reports it also occurred with HCOM_AUTO_TRUST_WORKSPACE=false. This audit read the advisory, did not run its PoC. Repository advisories endpoint returned this one published entry."
  - "[Local:historical-test] Historical wiki evidence from 2026-06-24 at 5e167b92f8da7ef4c5f40974d4d59e89ef685479: cargo test --locked passed 1806 unit tests and 20 CLI smoke tests; real-agent/PTY/relay cases mostly ignored without pinned tools. This is not v0.7.25 test evidence."
  - "[WikiLocal:comparison] Prior local hcom analysis compared Vibe Kanban and CLI-Anything as adjacent agent-infrastructure projects; positioning retained, no fresh competitor 10-dimension audit"
---

# hcom

> 给长期存活的 terminal agents 提供消息、事件与生命周期协调；不是一次性 reviewer 调用的必需层。
>
> **状态**: `active` · **总分**: 3.7/5 · **推荐度**: 4/5

## 一句话总结

hcom 适合高级个人开发者连接多个长期 agent session；采用应基于修复已知 hook-trust 问题的版本，并把 relay 当作高权限共享信任域，而非普通聊天通道 [GH:advisory][GH:readme]。

## 总体评价

它不重新实现 coding agent，而是在已有 CLI 外围组合 hooks、SQLite、终端控制与 MQTT relay。README 描述的状态流是 agent → hooks → DB → hooks → other agent，支持进行中投递和唤醒空闲 agent [GH:readme]。中心对象是 agent-to-agent coordination，不是 controller 调一次工具。

2026-09 检查的实质变化有两项：v0.7.25 已有原生 Windows 交付，旧分析中“Windows 仍待支持”的判断不再适用；新增 GHSA 解释了旧版本 Codex hook 信任失败时的宽泛绕过，修复版为 0.7.25 [GH:release][GH:advisory]。评分没有因补丁、星数或平台数量自动上调。

## 推荐度：4/5

**目标角色**：确需多个终端 agent 互相发送消息、观察、等待、唤醒、fork/resume/kill 的高级个人用户和基础设施研究者。建议锁定修复版本、先在非关键仓库验证实际宿主，再逐步开启 relay。

如果需求只是 Hermes 构造一个 packet 并调用原生 `codex-reviewer` profile 做一次审查，直接使用该原生调用更简单；没有必要引入 hcom 的 hooks、DB 和 session 状态。4/5 是有条件的试用推荐，不是多租户生产采用背书。

## 优势

1. 消息、订阅、观察与生命周期操作在同一 CLI 下组织，能减少长期协作中的手工转述 [GH:readme]。
2. Rust 可执行文件与本地 SQLite 使协调层较轻；无需另搭 web 控制平台 [GH:build]。
3. 交付面包含 Windows、macOS、Linux 与 Android，旧版 Windows 限制已变化 [GH:release]。
4. relay 文档明确写出 PSK、权限和泄露后果，不把端到端加密等同于隔离 [GH:readme]。

## 劣势

1. 外部 agent 的 hooks、终端、转录格式持续变化，跨宿主兼容仍需现场验证。
2. relay 无只读 peer、细粒度角色或前向保密；同一 relay 内是完全互信 [GH:readme]。
3. 已公开的 hook-trust fallback 漏洞说明集成层也能削弱宿主安全边界 [GH:advisory]。
4. 本轮未执行新版真实 agent、Windows 或跨设备 smoke；旧测试不能替代这些验证 [Local:historical-test]。

## 适合什么场景

- 自己控制的开发机上，多 agent 长期并行并通过事件交换工作状态。
- 研究 hook delivery、SQLite 事件日志、PTY 和跨设备协调。
- 能接受调试外部 CLI 兼容问题，并管理共享信任域的实验工作流。

## 不适合什么场景

- 单次 review、普通主从工具调用或只有一个 agent 的任务。
- 不互信用户、多租户团队、要求 peer 只读权限的部署。
- 从不可信仓库启动旧版 hcom/Codex，或不愿审查自动配置改动的环境。

## 与类似项目对比

| 项目 | 定位 | 相对本项目 |
|------|------|-----------|
| Vibe Kanban | 任务板与 coding-agent workspace 编排 | 以任务/workspace 为中心；hcom 以终端 session 间通信为中心。 |
| CLI-Anything | 暴露可供 agent 使用的 CLI 能力 | 以工具接口为中心；hcom 以 agent 之间的状态和生命周期为中心。 |

仅沿用既有定位级比较，未对竞品进行本轮十维审计 [WikiLocal:comparison]。

## 它能做什么

能力 **4/5**。README 给出 message、observe、subscribe、spawn/fork/resume/kill、TUI 与跨设备 relay，也允许其他进程通过 `hcom start` / `send` 加入 [GH:readme]。覆盖宽，但文档列出宿主不等于所有组合都经过本轮实测，因此不给 5。

## 运行环境与资源占用

| 项目 | 判断 |
|------|------|
| 本体 | Rust executable、SQLite/config/log state；不负责模型推理 |
| 平台 | v0.7.25 发布 macOS/Linux/Android/原生 Windows 资产，未逐个平台运行 |
| CPU/内存 | agent 进程和用户任务主导；本轮无量化 benchmark |
| 存储 | 二进制、数据库、transcript/log，随会话增长 |
| Docker/GPU | 未验证官方用户向 Docker image；本体不需 GPU |

资源效率 **4/5** 是轻型本地协调架构的判断，不是实测延迟或内存承诺 [GH:readme][GH:build][GH:release]。

## 上手体验

**4/5**。Homebrew、uv/pip 和平台安装器都有文档入口；命令形态是在原 agent 前加 `hcom` [GH:readme]。但 hooks 会进入用户配置，用户仍需理解宿主信任、终端控制和 relay，而不是复制安装命令就完成验收。

## 代码质量

**4/5**。Cargo 明确区分 Unix/Windows 平台依赖，CLI、SQLite、TUI、加密/网络使用成熟库 [GH:build]。2026-06 历史测试曾通过核心及 CLI suites，但没有将这一结果移记为新版通过；新增 GHSA 更说明测试数量不是信任边界正确性的证明 [Local:historical-test][GH:advisory]。没有当前覆盖率或跨宿主全测，不给 5。

## 可扩展性

**4/5**。CLI、hooks、terminal adapters、manual start 和外部事件入口可嵌入脚本；深度新增 agent backend 或改变 relay 授权仍涉及内部实现，不是稳定的通用插件协议 [GH:readme][GH:build]。

## 文档质量

**4/5**。安装、事件状态流、终端与 relay 威胁模型写得具体；尤其区分 broker 密码和 payload 加密 [GH:readme]。局限在于复杂集成仍需结合版本和 GHSA 阅读，不能只看 quickstart。

## 社区与成熟度

社区 **3/5**，成熟度 **3/5**。快照为 486 stars、74 forks、27 open issues、22 open PRs；2025-07 创建，当前包仍标 Beta [GH:api][GH:build]。这是持续维护的小项目，不以星数或小版本密度证明稳定性；新版修复与跨平台扩展值得跟踪，真实宿主组合仍需自己验证。

## 安全与风险

安全 **3/5**。本轮不再是“未查到 GHSA”：**GHSA-pwv3-8r7h-p373** 的 pip/hcom 受影响范围为 `>=0.7.17,<0.7.25`，官方标注修复于 `0.7.25` [GH:advisory]。

触发条件是 hcom 无法修复/确认自身 Codex hook 信任，于是旧实现加入 invocation-wide bypass；用户在带恶意项目 hook 的仓库启动并进入第一轮时可能执行该命令。不是仅打开仓库就执行，也不是所有安装都触发。仅关闭 workspace 自动信任不能替代修复 hook-trust fallback；这些是公告证据，本轮没有重跑 PoC。

修复该问题也不消除 relay 的设计权限：PSK 泄露可暴露捕获的历史流量，加入者没有细粒度权限。只接入愿意授予 shell 级信任的设备，隔离账号/状态目录、保护 token，核验安装时的配置 diff [GH:readme]。

## 学习价值

重点学习“长期 session 协调”和“一次性工具调用”的区别，以及 hook 身份授权失败为何必须 fail closed。hcom 的事件组织很有参考价值；其 GHSA 则是不可用宽泛绕过修复狭窄授权失败的具体教材 [GH:advisory]。
