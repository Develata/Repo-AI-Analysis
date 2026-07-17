---
title: "Goose"
created: 2026-07-16
updated: 2026-07-16
type: repository-analysis
repo_url: "https://github.com/aaif-goose/goose"
category: "ai-programs/agents/assistant-agents"
tags: ["ai-agent", "developer-agent", "rust", "desktop", "cli", "mcp", "acp", "recipes", "multi-model", "aaif"]
previous_repo: "https://github.com/block/goose"
successor: ""
primary_language: "Rust"
license: "Apache-2.0"
stars: 51203
forks: 5605
last_checked: 2026-07-16
last_verified: 2026-07-16
evidence: "Current GitHub GraphQL/REST metadata, releases, advisories and repository-tree scan + official AAIF/goose docs and governance/security files; no local build or production deployment test"
archived_reason: ""
docker_support: true
gpu_required: false
estimated_cpu: "agent runtime is light relative to model/tool workloads; local inference and spawned builds are workload-dependent"
estimated_memory: "not independently benchmarked; Rust CLI is lighter than the Electron desktop client, while local-model inference is model-dependent"
estimated_storage: "v1.43.0 compressed CLI assets are roughly 43-102 MB by platform; desktop packages are roughly 150-422 MB depending on platform/GPU bundle"
status: active
ratings:
  capability: 4
  usability: 4
  performance: 3
  code_quality: 4
  documentation: 4
  community: 4
  maturity: 3
  extensibility: 5
  security: 3
  recommendation: 4
overall_score: 3.8
sources:
  - "[GH] https://github.com/aaif-goose/goose"
  - "[GH:api] GitHub GraphQL/REST queried 2026-07-16 UTC at d9e2fa14e8a2d3becf673855b451fa8ea64390d9; archived=false, created=2024-08-23, stars=51203, forks=5605, open issues=187, open PRs=132, merged PRs=5573, first contributors page=100, license=Apache-2.0"
  - "[GH:languages] GitHub GraphQL queried 2026-07-16; Rust=7422836 bytes, TypeScript=3106504, Python=171232, Shell=168532; Rust is about two thirds of measured language bytes and the desktop UI contributes most TypeScript"
  - "[GH:release] https://github.com/aaif-goose/goose/releases/tag/v1.43.0 and GitHub Releases API queried 2026-07-16; published 2026-07-14; repository exposes 143 releases; compressed CLI assets roughly 43-102 MB and desktop/GPU assets roughly 150-422 MB"
  - "[GH:tree] GitHub recursive tree API scanned 2026-07-16 UTC at d9e2fa14e8a2d3becf673855b451fa8ea64390d9; 2419 blobs, 14 Cargo.toml files including vendor/v8, 47 workflow files and 147 test-like paths by filename/directory heuristic; heuristic is not coverage"
  - "[GH:advisories] https://api.github.com/repos/aaif-goose/goose/security-advisories?per_page=100 queried 2026-07-16; returned no published repository advisories in this check"
  - "[GH:readme] https://github.com/aaif-goose/goose/blob/d9e2fa14e8a2d3becf673855b451fa8ea64390d9/README.md"
  - "[GH:security] https://github.com/aaif-goose/goose/blob/d9e2fa14e8a2d3becf673855b451fa8ea64390d9/SECURITY.md; explicitly warns about prompt injection, code execution and unreviewed MCP extensions and recommends VM/container isolation and human confirmation"
  - "[GH:governance] https://github.com/aaif-goose/goose/blob/d9e2fa14e8a2d3becf673855b451fa8ea64390d9/GOVERNANCE.md; defines contributor/maintainer/core-maintainer roles, public decision process and AAIF/LF stewardship"
  - "[GH:contributing] https://github.com/aaif-goose/goose/blob/d9e2fa14e8a2d3becf673855b451fa8ea64390d9/CONTRIBUTING.md; documents Rust/Electron development, cargo checks/tests/clippy, Hermit/just workflow and contribution expectations"
  - "[Docs:guides] https://block.github.io/goose/docs/category/guides extracted 2026-07-16; covers permissions, sessions, CLI/ACP providers, subagents, recipes, extensions, scheduling, sandboxing, observability and custom distributions"
  - "[AAIF] https://aaif.io/projects/goose extracted 2026-07-16; identifies Goose as an open-source extensible agent hosted by the Agentic AI Foundation under the Linux Foundation"
  - "[WikiLocal:comparisons] Local wiki positioning consulted 2026-07-16: ai-programs/agents/assistant-agents/hermes-agent.md, openfang.md, openclaw.md and zeroclaw.md; comparison rows were not externally re-audited under the same 10 dimensions"
---

# Goose

> AAIF 托管、Rust core + Electron desktop 的开源通用 developer agent：以 provider choice、MCP/ACP、recipes 与可定制 runtime 为中心。
>
> **状态**: `active` · **总分**: 3.8/5 · **推荐度**: 4/5
> **核验版本**: `v1.43.0` · commit `d9e2fa1` · 2026-07-16

迁移说明：此前本 wiki 跟踪 `https://github.com/block/goose`；当前 canonical repository 已迁至 `https://github.com/aaif-goose/goose`。

## 一句话总结

Goose 适合想要一个开源、模型无关、既能做 coding 又能扩展为通用工作流 assistant 的用户；它在 Codex 之外具有很强的社区、交付和治理信号，但并非天然安全的“全自动机器管家”。

## 总体评价

Goose 的中心对象不是某个模型，也不是一组被其他框架调用的 Rust crates，而是用户可以直接安装和运行的 agent system：CLI 与 Desktop 驱动同一 Rust runtime，agent 能读写项目、执行命令、调用 MCP extensions、保存 sessions、运行 recipes，并通过 ACP 接入 IDE 或把其他 agents 当 provider 使用 [GH:readme][Docs:guides]。因此它归入 `ai-programs/agents/assistant-agents`，而不是 `agent-frameworks`；其 developer-agent 出身很强，但 product surface 已越过纯 coding CLI。

真正使 Goose 获得广泛认可的不是 stars 单项，而是三类信号叠加：约 5.1 万 stars、5605 forks、5573 个 merged PRs 与 100 个 first-page contributors；143 个 GitHub releases；以及从 Block 项目迁入 AAIF/LF 的公开治理 [GH:api][GH:release][GH:governance][AAIF]。这些足以说明项目有强维护与采用信号，但不能由此推出所有版本都稳定；其 release cadence 与 issue backlog 仍要求采用者 pin 版本并做回归验证 [GH:api][GH:release]。

架构上应准确说成 **Rust agent core + TypeScript/Electron desktop**，而非“纯 Rust app”。GitHub language snapshot 中 Rust 约占三分之二、TypeScript 约占近三成；CONTRIBUTING 也明确说项目同时包含 Rust binaries 与 Electron GUI [GH:languages][GH:contributing]。

## 推荐度：4/5

推荐给重视 open standards、provider choice、MCP/ACP 和本地可审计 runtime 的开发者与小团队。Goose 比普通 chat client 更能执行真实工程任务，又比 vendor-locked coding agent 更容易替换模型、组合 tools 和包装 workflows [Docs:guides][GH:governance]。

不给 5 的原因是：其扩展性与风险成正比。Goose 可执行代码并接触本机系统，官方 SECURITY.md 明说 prompt injection、互联网不可信内容和未审查 MCP server 会带来风险，并建议 VM/container、human confirmation 与最小化任务范围 [GH:security]。此外，Desktop、local inference、recipes、subagents、providers 与 extensions 形成的 surface 很大，采用者要承担配置和升级治理成本。

## 优势

1. **真正的 provider choice**：治理文档把不绑定模型、协议或 stack 作为核心价值；官方 guides 还覆盖普通 API provider、CLI provider、ACP provider 与 local model 路径 [GH:governance][Docs:guides]。
2. **MCP/ACP 是架构主线而非装饰**：extensions、ACP clients/providers、subagents、recipes 和 custom distributions 都有正式文档 [Docs:guides]。
3. **交付面完整**：CLI、Desktop、headless run、sessions、recipes、schedule、Docker/isolated environments 等覆盖交互与自动化 [Docs:guides]。
4. **开源治理信号强**：AAIF/LF stewardship、公开 maintainer roles、major-change review 与 dispute resolution 明文化 [GH:governance][AAIF]。
5. **工程仓库扎实**：Rust workspace、Electron UI、47 个 workflow files、较多 test-like paths、SECURITY/CONTRIBUTING/GOVERNANCE/AGENTS 文档齐全 [GH:tree][GH:contributing]。

## 劣势

1. **高权限 agent 的固有风险**：shell、filesystem、network 与 MCP extension 使 prompt injection 可能转化为真实 side effect [GH:security]。
2. **不是纯 Rust desktop**：Electron UI 带来更大的安装包、内存面和前后端维护复杂度 [GH:languages][GH:contributing][GH:release]。
3. **版本节奏快**：两年内已有大量 releases，近期版本仍快速演进；升级前需要看 changelog 与回归问题 [GH:api][GH:release]。
4. **能力面过宽会增加配置负担**：providers、extensions、permissions、recipes、subagents、ACP、scheduling 与 observability 都需要正确组合 [Docs:guides]。
5. **本次未做真实模型 benchmark**：功能与工程结构有一手证据，但不同模型下的 coding quality、token efficiency 与 long-horizon reliability 未独立实测。

---

## 适合什么场景

- 想用同一个 agent runtime 切换 cloud frontier models、local models 或现有 CLI/ACP subscriptions。
- 需要把 MCP tools、reusable recipes、scheduled/headless runs 与 sessions 组合成团队工作流。
- 希望学习一个 Rust agent core 如何同时服务 CLI、Desktop 与协议接口。
- 愿意在 VM/container 或受限 workspace 中运行，并保留人工审批、git diff 与审计日志。
- 需要比 coding-only CLI 更通用，但又不想直接采用大型 Python agent framework 的场景。

## 不适合什么场景

- 无法隔离 secrets、生产凭证、主目录或关键基础设施的机器。
- 希望“安装后全自动运行、无需 permissions/prompt-injection 治理”的用户。
- 只需要一次模型 API 调用或一个很小的 deterministic script；Goose 会引入过多 surface。
- 对 Electron desktop footprint 极敏感且不需要 GUI；此时只使用 CLI 或选择更小工具更合理。
- 需要成熟、低变更、长期兼容行为作为严格企业基线，但又不愿 pin 版本并做回归验证。

## 与类似项目对比

| 项目 | 定位 | 相对本项目 |
|---|---|---|
| Goose | 通用 developer agent / open agent runtime | 本项目；provider/MCP/ACP/recipes 与公开基金会治理突出 |
| Hermes Agent | 带 skills、memory、工具与多 channel delivery 的 personal agent runtime | Hermes 更强调长期个人 agent 与消息渠道；Goose 更贴 developer workflow、Desktop 与 AAIF open-runtime 路线 |
| OpenFang | Rust 自托管 agent OS / multi-agent system | OpenFang 更强调 agent OS、Hands、WASM/capability 安全架构；Goose 的社区、协议生态与治理成熟度更强 |
| OpenClaw | 高扩展 personal assistant platform | OpenClaw 更偏 personal assistant/channel ecosystem；Goose 更偏 developer agent、MCP/ACP 与代码工作流 |
| ZeroClaw | 轻量 Rust assistant/runtime | ZeroClaw 更追求小体积和边缘部署；Goose 功能、GUI、生态与治理更重更完整 |

上述项目依据本地 wiki 既有条目的定位与分类语境做 comparison，未在本轮按同一 10 维度重新抓取外部事实 [WikiLocal:comparisons]。

---

## 它能做什么

评分 4/5。

Goose 的核心能力覆盖：交互式 sessions、headless `run`、文件/命令执行、session resume/export/diagnostics、MCP extensions、recipes/subrecipes、scheduling、subagents、provider switching、CLI/ACP providers、ACP client integration、permissions、project instructions、Docker/isolated environments 与 observability [Docs:guides]。这足以覆盖主要 developer-agent 与通用 automation 场景。

不给 5，是因为“文档列出”不等于在所有 provider/platform 组合上同等可靠；本次未部署 Desktop、local inference、ACP provider 或长任务 recipe，也未做统一 benchmark。能力广度可以给 4，端到端可靠性不能由 surface count 外推。

## 运行环境与资源占用

评分 3/5。

| 场景 | CPU / GPU | 内存 | 存储 | 说明 |
|---|---|---|---|---|
| CLI + cloud model | 本地 CPU 主要做 orchestration；GPU 不需要 | 未独立 benchmark | v1.43.0 压缩 CLI 资产约 43-102 MB | 模型推理在远端，build/test/tool 进程另算 [GH:release] |
| Desktop + cloud model | Electron + Rust backend | 高于纯 CLI，未独立 benchmark | desktop packages 约 150-250 MB；GPU bundle 可到约 422 MB | GUI 便利但 footprint 更大 [GH:release][GH:contributing] |
| local inference | 取决于模型；GPU 可选但常有价值 | 由模型权重/context 主导 | 模型权重另计 | 不能把 local-model 成本算成 Goose runtime 本身 [Docs:guides] |

Rust core 的 runtime efficiency 是优势，但 Electron、可选 local inference、MCP subprocesses 和用户启动的 builds/tests 会主导真实资源曲线。没有进程级 benchmark，故不给 4/5。

## 上手体验

评分 4/5。

官方提供 release assets、下载脚本、CLI 与 Desktop；`goose configure` 后即可启动 session。文档将 sessions、commands、providers、extensions、permissions 和 recipes 分层组织，基础路径清楚 [GH:release][GH:contributing][Docs:guides]。

学习曲线来自选择太多：provider/auth、permission mode、MCP extension、recipe、ACP、sandbox 与 telemetry 都可能影响行为。它不是零配置通吃，故上手体验给 4 而非 5。

## 代码质量

评分 4/5。

本次 recursive tree scan 在固定 commit 上看到 2419 blobs、14 个 Cargo manifests、47 个 GitHub workflow files 与 147 个 test-like paths；这些是结构信号，不是覆盖率 [GH:tree]。CONTRIBUTING 要求 `cargo check`、`cargo test`、`cargo fmt`、`cargo clippy --all-targets -- -D warnings`，GUI 通过 `just`/pnpm/Electron 构建；GOVERNANCE 还要求 focused PR、meaningful tests 与较大改动的 manual/E2E evidence [GH:contributing][GH:governance]。

不给 5，是因为没有 coverage ≥80% 证据，也未运行完整 workspace tests。Rust + Electron + local inference/vendor V8 的大型混合仓库天然复杂，近期 bug reports 也说明发布质量仍有波动。

## 可扩展性

评分 5/5。

Goose 把 extensibility 放在核心：MCP extensions、ACP client/provider、recipes/subrecipes、custom distributions、prompt templates、project instructions、provider configuration 与 REST/API surfaces 都有正式路径 [Docs:guides]。GOVERNANCE 明确强调 model/protocol/stack choice，仓库也拆出 provider、MCP、SDK、CLI 与 UI crates [GH:governance][GH:tree]。

这满足“完善插件系统、丰富 API/hooks、高度模块化”的 5 分边界。代价是扩展越多，permission 与 supply-chain review 越重要。

## 文档质量

评分 4/5。

README 之外，官方站点覆盖 getting started、CLI、providers、ACP、permissions、sessions、recipes、subagents、security、sandbox、automation、observability 和 custom distributions；仓库还有 SECURITY、CONTRIBUTING、GOVERNANCE、MAINTAINERS、BUILDING 与大量 documentation pages [Docs:guides][GH:tree]。

文档不只讲功能，也明确 prompt injection 与 unsafe extension 风险，并给 contributor workflow 与 governance。扣分点是本轮没有逐页核验完整 API reference、edge-case coverage 与长期 docs drift；按统一边界保守给 4。

## 社区与成熟度

社区评分 4/5，成熟度评分 3/5。

社区方面，约 5.1 万 stars、5605 forks、5573 merged PRs、132 open PRs、first-page contributors 已满 100，公开 governance 与 AAIF/LF stewardship 构成强信号 [GH:api][GH:governance][AAIF]。这不是“只有品牌 stars”的项目，维护与外部参与路径都可见；但本轮未量化 issue/PR 响应时延与第三方生态，所以不给 5。

成熟度需分开看：项目创建于 2024-08，已进入 1.x 且发布频繁，但仍快速增加 protocols/providers/features，且仍有 187 个 open issues 与 132 个 open PRs 需要持续 triage。符合“仍在快速迭代、偶有行为变化”的 3 分，而不是长期稳定的 4/5 [GH:api][GH:release]。

## 安全与风险

评分 3/5。

正面信号是 SECURITY.md 不粉饰风险：它明确承认 developer agent 能运行代码、可能服从不可信内容中的指令，并建议 VM/container、人工确认、拆小任务、避免 secrets、审查生成代码与 MCP extensions；还提供 private vulnerability reporting [GH:security]。本次 advisories API 未返回已发布 repository advisory，但“空结果”只表示本次查询未发现，不是无漏洞证明 [GH:advisories]。

不给 4，是因为权限模型无法消除根本攻击面，且 sandbox 文档描述的能力会受平台与配置影响。生产使用至少应做到：dedicated workspace/container、最小 credentials、network allowlist、extension review、human approval、git-backed rollback 与版本 pinning。

## 学习价值

Goose 很值得研究，尤其是三条主线：

1. **Open agent governance**：从公司项目迁入 AAIF/LF 后，如何用 maintainer roles、公开决策与 license policy 建立可信长期治理 [GH:governance][AAIF]。
2. **Protocol-first runtime**：MCP 负责 tools，ACP 负责 agent/client boundaries，recipes 负责 reusable workflows；三者不是同一种扩展机制 [Docs:guides]。
3. **Rust core + product surfaces**：Rust agent runtime、CLI、Electron desktop、SDK/API 与 local inference 如何在一个 monorepo 中分层 [GH:languages][GH:tree]。

若 Codex 展示 vendor-optimized harness 的上限，Goose 展示的则是 provider-neutral、foundation-governed runtime 的另一条道路。两者皆可观，但不可混同。