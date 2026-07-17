---


title: "Codex"
created: 2026-05-20
updated: 2026-07-16
type: repository-analysis
repo_url: "https://github.com/openai/codex"
category: "ai-programs/agents/coding-agents"
tags: ["coding-agent", "cli", "openai", "codex", "rust", "terminal", "ide", "mcp", "sandbox", "agents-md"]
previous_repo: ""
successor: ""
primary_language: "Rust"
license: "Apache-2.0"
stars: 98834
forks: 14769
last_checked: 2026-07-16
last_verified: 2026-07-16
evidence: "Current GitHub API/README/releases/advisories + official Codex/App Server docs + npm metadata; historical 2026-05 local scan retained; no fresh production deployment test"
archived_reason: ""
docker_support: false
gpu_required: false
estimated_cpu: "low local CPU for CLI/TUI orchestration; model inference is remote unless external local providers are configured"
estimated_memory: "low-to-moderate local memory for Rust CLI/TUI plus workspace scans and spawned commands"
estimated_storage: "repository is large for development; npm package metadata reports small wrapper package, release binaries downloaded per platform"
status: active
ratings:
  capability: 4
  usability: 4
  performance: 3
  code_quality: 4
  documentation: 5
  community: 4
  maturity: 2
  extensibility: 5
  security: 3
  recommendation: 3
overall_score: 3.7
sources:
  - "[GH] https://github.com/openai/codex"
  - "[GH:api] https://api.github.com/repos/openai/codex queried 2026-07-16 UTC; canonical full_name=openai/codex, archived=false, disabled=false, stars=98834, forks=14769, created_at=2025-04-13, pushed_at=2026-07-16, primary language=Rust, license=Apache-2.0, default_branch=main"
  - "[GH:issues] GitHub Search API queried 2026-07-16 UTC; open issues=9572 and open PRs=244 for repo:openai/codex; issue backlog is more than twice the 4319 snapshot from 2026-05-20"
  - "[GH:languages] https://api.github.com/repos/openai/codex/languages queried 2026-07-16; Rust=40656140, Python=1107779, Starlark=94240, TypeScript=86846, Shell=62773, PowerShell=49149"
  - "[GH:releases] https://api.github.com/repos/openai/codex/releases/latest queried 2026-07-16; latest=rust-v0.144.5 / 0.144.5 published 2026-07-16; release hardens dangerous-command detection for additional forced rm forms"
  - "[GH:contributors] https://api.github.com/repos/openai/codex/contributors?per_page=100 queried 2026-05-20; first page contributors=100; top entries include bolinfest=930, jif-oai=907, aibrahim-oai=546"
  - "[GH:community] https://api.github.com/repos/openai/codex/community/profile queried 2026-07-16; health_percentage=75; README, license, CONTRIBUTING and PR template detected; CODE_OF_CONDUCT not detected"
  - "[GH:advisories] https://api.github.com/repos/openai/codex/security-advisories?per_page=100 queried 2026-07-16; still returned 1 published advisory, GHSA-w5fx-fh39-j5rw high severity; no additional repository advisory found in this check"
  - "[GH:readme] https://github.com/openai/codex/blob/main/README.md fetched through GitHub Contents API 2026-07-16 at blob bb2a9d18c3f95ea1a16394a7131634ac1b1ae68e; recommends native curl/PowerShell installers while retaining npm/Homebrew/release-binary paths; explicitly separates CLI, IDE, desktop app and Codex Web"
  - "[GH:local-scan] Historical local shallow clone /tmp/repo-wiki-batch1/codex at commit 57a68fb9e3a3a1b2132eba5381178b0d6c7729be dated 2026-05-20; git ls-files=4595; checked README.md, SECURITY.md, AGENTS.md, docs/contributing.md, package.json, codex-rs/Cargo.toml; docs/contributing.md says external code contributions are invitation-only; AGENTS.md records Rust module-size, lint, test, MCP connection manager, Bazel/Cargo and config-schema rules; retained for structural/governance claims"
  - "[GH:advisories:detail] GHSA-w5fx-fh39-j5rw / CVE-2025-59532 API metadata rechecked 2026-07-16; sandbox bypass affected @openai/codex 0.2.0–0.38.0 and Codex IDE Extension <=0.4.11, patched in CLI 0.39.0 and IDE Extension 0.4.12; current CLI 0.144.5 is above the listed patch boundary"
  - "[NPM] npm view @openai/codex queried 2026-07-16; version=0.144.5, engines.node=>=16, dist.unpackedSize=11132, license=Apache-2.0"
  - "[Docs:overview] https://developers.openai.com/codex and https://developers.openai.com/codex/cli extracted 2026-07-16; current product docs cover CLI/IDE/App/Web, native installers, local review, image inputs/generation, subagents, web search, cloud tasks, exec scripting, MCP and approval modes; product-wide surfaces are not all equivalent to independently runnable repo code"
  - "[Docs:security] https://developers.openai.com/codex/agent-approvals-security extracted 2026-07-16; documents sandbox/approval/network layers, managed requirements, Windows/Linux/macOS controls, telemetry cautions and MCP/tool risk; security docs are current but do not erase intrinsic coding-agent attack surface"
  - "[OpenAI:app-server] https://openai.com/index/unlocking-the-codex-harness extracted 2026-07-16; states that all agent logic lives in the open-source Rust Codex core, while Desktop/IDE clients bundle a pinned App Server binary and communicate over a backward-compatible bidirectional JSON-RPC-lite protocol"
  - "[GH:desktop-closed] https://github.com/openai/codex/discussions/16538 checked 2026-07-16; OpenAI maintainer states the Codex desktop app is not open source and builds on the CLI App Server APIs"
  - "[GH:desktop-electron-community] https://github.com/distsystem/codex-desktop-linux checked 2026-07-16; unofficial community wrapper reports reproducibly extracting the upstream macOS DMG as an Electron app; non-official binary-packaging evidence only"
  - "[WikiLocal:comparisons] Local wiki positioning consulted 2026-07-16: ai-programs/agents/coding-agents/claude-code.md, opencode.md, cline.md and gemini-cli.md; comparison rows were not externally re-audited under the same 10 dimensions"
---

# Codex

> OpenAI 官方开源 coding agent：以 Rust CLI 为核心，连接 ChatGPT/Codex 生态，强调本地运行、沙箱、审批与 AGENTS.md 约定。
>
> **状态**: `active` · **总分**: 3.7/5 · **推荐度**: 3/5
> **核验版本**: GitHub/npm `0.144.5`；GitHub API、README、advisory 与官方 Docs 快照 2026-07-16

## 一句话总结

Codex 是适合 OpenAI / ChatGPT 生态用户的官方开源 coding agent，优势是 Rust 实现、Apache-2.0、沙箱/审批模型和多 surface 文档，主要风险是项目仍年轻、issue backlog 大且外部贡献受限。

## 总体评价

`openai/codex` 是 OpenAI 官方 coding agent 的开源实现入口。README 将 Codex CLI 定义为“runs locally on your computer”的 coding agent，当前优先给出 native curl/PowerShell installer，同时保留 npm、Homebrew 与 release binary；官方 docs 则覆盖 CLI、IDE、App、Web/Cloud、local review、subagents、MCP、exec scripting 等多 surface [GH:readme][Docs:overview]。

它与 Claude Code 的关键差异是：Codex 仓库是大型 Apache-2.0 开源 monorepo，主语言为 Rust，可观察到较完整的工程结构、AGENTS.md 约定、contributing 文档、安全文档与本地沙箱设计 [GH:api][GH:languages][GH:local-scan]。这使它比闭源 agent 更适合学习实现、扩展和审计。

需要把 **Codex core** 与 **Codex Desktop UI** 分开：OpenAI 明确说 agent loop、thread persistence、auth、tool execution 与 extensions 等 agent logic 位于开源 Rust `codex-rs/core`，Desktop/IDE 以 JSON-RPC-lite / JSON-RPC 风格双向协议驱动打包的 App Server，且该 App Server protocol 面向客户端集成有 backward-compatibility 设计；但 OpenAI maintainer 同时明确 Desktop App 本身闭源，所以不能由本仓库语言占比推出“整个 Codex App 都是 Rust” [OpenAI:app-server][GH:desktop-closed]。社区 Linux wrapper 对官方 DMG 的可复现拆包观察到 Electron artifacts，这支持“Electron client + Rust App Server/core”的混合架构判断，但它不是 OpenAI 的正式前端技术栈声明 [GH:desktop-electron-community]。

但 Codex 仍处在高速迭代期：latest 已到 0.144.5，项目创建于 2025-04，open issues 从 2026-05 的 4319 增至 9572，而 contributing 文档明确外部代码贡献采用邀请制 [GH:api][GH:issues][GH:releases][GH:local-scan]。所以它是高价值主线项目，但不能把官方背书误读成整个 CLI/config/product 行为都已成熟稳定；App Server protocol 的兼容性设计是正面信号，不等同于 repo/product 全面成熟。

## 推荐度：3/5

**定位**：面向使用 OpenAI / ChatGPT 生态、同时希望 coding agent 开源 core/CLI/App Server 尽量可审计的开发者和团队。

2026-06 推荐度重校准：maturity=2，高权限 coding agent，repo 年轻且有 advisory history；4/5 采用推荐偏高。

推荐它，是因为它在“官方模型生态 + 开源实现 + Rust CLI + sandbox/approval security model”之间取得了很好的平衡；不直接给 5，是因为版本仍早、issue backlog 大、外部代码贡献受限，并且已有 high severity security advisory 记录 [GH:issues][GH:advisories][GH:local-scan]。

对个人开发者，它值得作为 Claude Code 之外的第一梯队 coding agent 试用；对团队，应先限定仓库范围、审批策略、网络策略、secret 暴露面，再逐步放大使用范围。

## 优势

1. **官方 OpenAI coding agent**：与 ChatGPT/Codex 产品和模型生态同源，文档覆盖 CLI、IDE、App、Web/Cloud 等入口 [Docs:overview]。
2. **开源程度高**：Apache-2.0，大型 Rust monorepo，可检查核心实现、配置 schema、sandbox 相关代码和开发约定 [GH:api][GH:local-scan]。
3. **安全模型文档清楚**：官方说明 sandbox mode 与 approval policy 两层控制，默认网络关闭，workspace write 与 destructive MCP/app tool calls 有审批语义 [Docs:security]。
4. **工程规范强**：AGENTS.md 对 Rust crate、模块大小、lint、tests、MCP connection manager、Bazel/Cargo 交互等有细粒度约束 [GH:local-scan]。
5. **社区关注和维护速度高**：约 9.9 万 stars、1.47 万 forks，仓库与 release 仍高频更新 [GH:api][GH:releases]。

## 劣势

1. **成熟度不足**：项目创建于 2025-04，版本仍为 `0.144.5`，频繁发布说明 API/行为仍在高速演化 [GH:api][GH:releases][NPM]。
2. **issue backlog 巨大且增长快**：open issues=9572，较 2026-05 快照超过翻倍；open PRs=244。即使其中包含大量产品反馈，这仍是显著 triage/稳定性负担 [GH:issues]。
3. **外部贡献受限**：contributing 文档明确不接受 unsolicited code contributions，PR 需邀请，否则会关闭不审 [GH:local-scan]。
4. **仍绑定 OpenAI 生态**：虽然 `openai/codex` 仓库本身开源，但官方 docs 描述的完整 Codex product surface 默认仍依赖 OpenAI/ChatGPT/Codex 账户、模型、政策与服务可用性 [Docs:overview]。
5. **Desktop UI 不在开源边界内**：公开 Rust core/App Server 可审计，但官方 Desktop client 闭源；不能把 CLI 仓库的 Apache-2.0 与 Rust 比例外推到完整桌面产品 [OpenAI:app-server][GH:desktop-closed]。
6. **安全复杂度高**：即使有 sandbox/approval，coding agent 仍会读写文件、运行命令、调用 MCP/app tools；已有 high severity advisory [Docs:security][GH:advisories]。

## 适合什么场景

- ChatGPT Plus/Pro/Business/Edu/Enterprise 用户，希望把 OpenAI Codex 用到本地 coding workflow。
- 希望研究官方 coding agent 实现，而不是只使用闭源产品的开发者。
- 需要可配置 sandbox、approval、network access、AGENTS.md、MCP、plugins/skills 的工程团队。
- Rust / systems engineering 学习者，想观察大型 Rust CLI/TUI/agent monorepo 如何组织。
- 对供应商生态可接受，但希望至少开源 core/CLI/App Server 可审计、可 patch 的场景。

## 不适合什么场景

- 需要整个 CLI/config/product 行为长期稳定、低变更频率的企业标准化环境；App Server protocol 另有 backward-compatibility 设计，不能与 CLI 全面稳定性混为一谈。
- 希望自由接受外部 PR、围绕 fork 做深度社区共建的项目。
- 完全不使用 OpenAI / ChatGPT 生态的用户。
- 对 agent 命令执行、网络访问、MCP 工具调用无法建立审批和审计机制的环境。
- 想要本地离线模型完整闭环的场景；Codex 本体不是本地 LLM runtime。

## 与类似项目对比

| 项目 | 定位 | 相对本项目 |
|------|------|-----------|
| Codex | OpenAI 官方开源 coding agent | 本项目；Rust/Apache-2.0/沙箱模型清晰，但仍年轻且外部贡献受限 |
| Claude Code | Anthropic 官方 coding agent | Claude Code 产品面更完整、Claude 适配更深；Codex 源码更开放、沙箱模型更透明 |
| OpenCode | 模型无关开源 terminal agent | OpenCode 更供应商中立；Codex 更贴合 OpenAI/ChatGPT 官方生态 |
| Cline | VS Code / CLI coding agent | Cline 更偏编辑器多模型 agent；Codex 更偏官方 OpenAI CLI/App/Web 统一 agent |
| Aider | 轻量 CLI code editing assistant | Aider 更轻、更稳定、更模型无关；Codex 能力面和平台野心更大 |

上述项目按 `ai-programs/agents/coding-agents` 同类范围做定位级对比，未按同一 10 维度框架深审 [WikiLocal:comparisons]。


## 它能做什么

评分 4/5。

开源 repo/CLI 层可以独立核验的主线能力包括：本地 terminal coding agent、代码理解/修改、review/debug/fix、执行命令、AGENTS.md/config/hooks/MCP/plugins/skills/subagents 等定制入口，以及 sandbox/approval 语义 [GH:readme][Docs:overview][Docs:security]。

官方 Codex product 还提供 IDE/App/Web/Cloud、GitHub/Slack/Linear 等 surface，但这些不都等价于 `openai/codex` 仓库中可独立运行、可本地审计的代码能力 [Docs:overview]。

不给 5，是因为本分析对象主要是 `openai/codex` 仓库和 Codex CLI 开源实现；官方 docs 覆盖的完整 Codex product surface 并不都等价于该 repo 中可独立运行、可本地审计的能力。能力强，但边界需分清。

## 运行环境与资源占用

评分 3/5。

Codex CLI 是本地运行的 coding agent；README 当前推荐 native installer，并保留 npm、Homebrew 与 release binary，NPM metadata 显示 wrapper package 很小 [GH:readme][NPM]。模型推理成本主要在远端。

资源风险主要来自工作区扫描、长会话上下文、外部命令、tests/builds、MCP tools 和网络调用，而不是 agent runtime 本身。但本轮没有 idle/active memory、CPU 或 binary/storage 的可复现测量；大型 monorepo 开发环境也复杂，local clone 有 4595 tracked files，Rust/Cargo/Bazel/PNPM 混合开发对 contributor 机器并不轻 [GH:local-scan]。因此按统一边界给 3。

## 上手体验

评分 4/5。

README 首屏已把 macOS/Linux curl installer 与 Windows PowerShell installer 放在优先位置，同时保留 `npm i -g @openai/codex`、Homebrew 和 release binary；运行 `codex` 即可开始 [GH:readme]。官方 docs 还覆盖 Quickstart、CLI、IDE、App、Web/Cloud、configuration 与 administration 等入口 [Docs:overview]。

对终端用户而言，这是优秀的上手体验；但首次有效使用仍取决于 ChatGPT/API 身份验证、账户资格、workspace trust 和审批策略。真正的复杂度在安全模式、模型/账户、AGENTS.md、MCP、plugins、team policy；因此不是零配置 5 分，保守给 4。

## 代码质量

评分 4/5。

local scan 显示这是一个大型工程 monorepo：Rust 主体、Python/TypeScript/Starlark/Shell 辅助，包含 AGENTS.md、docs/contributing.md、SECURITY.md、package.json、codex-rs/Cargo.toml、Bazel/Nix/PNPM 配置等 [GH:languages][GH:local-scan]。AGENTS.md 对 Rust API 形状、模块大小、测试、lint、Bazel/Cargo 数据依赖、MCP connection manager 使用等有细致规范，说明维护者对工程质量有明确要求 [GH:local-scan]。

不给 5，是因为没有在本次分析中实际跑完整测试/覆盖率，且 issue backlog 较大；同时项目处于高速变更期，贡献文档也承认外部 PR 模式过去难以 scale [GH:issues][GH:local-scan]。

## 可扩展性

评分 5/5。

官方文档列出 config、rules、hooks、AGENTS.md、MCP、plugins、skills、subagents 等 customization surface [Docs:overview]。安全文档还明确 MCP/app tool destructive annotation 的审批语义，说明扩展点不仅是“能接工具”，还进入了权限模型 [Docs:security]。

对团队而言，这使 Codex 可以被塑造成“带 policy 的 coding agent runtime”：用 AGENTS.md 固化项目规则，用 sandbox/approval 限制执行权限，用 MCP/plugins/skills 接入内部工具。可扩展性强，但也要求组织有治理能力。

## 文档质量

评分 5/5。

README 短而有效，官方 docs 信息架构完整，覆盖 getting started、concepts、CLI、IDE、App、Web/Cloud、integrations、configuration、administration、enterprise、安全等模块 [GH:local-scan][Docs:overview]。SECURITY.md 也直接指向 agent approvals & security 文档 [GH:local-scan][Docs:security]。

对用户采用、团队治理和开发者贡献而言，文档已经足够清晰。唯一不足是外部贡献受限，使得 contributor docs 更多是“被邀请后如何做”，不是开放社区的完整共建手册。

## 社区与成熟度

社区评分 4/5，成熟度评分 2/5。

社区层面，GitHub API 显示约 9.9 万 stars、1.47 万 forks，GitHub community profile 健康度 75%，README/license/CONTRIBUTING/PR template 都存在 [GH:api][GH:community]。作为 OpenAI 官方项目，其关注度和维护资源都非常强。不给 5，是因为 contributing 文档明确外部代码贡献采用邀请制，社区参与强但治理并非完全开放共建 [GH:local-scan]。

成熟度则必须保守。项目创建于 2025-04，NPM version 为 0.144.5，open issues 已达 9572，且两个月内超过翻倍；这符合“高活跃、快速扩张但未稳定”的项目画像 [GH:api][NPM][GH:releases][GH:issues]。所以成熟度给 2，而不是被 star 数拉高。

## 安全与风险

评分 3/5。

Codex 的安全控制层次和官方文档较完整：官方文档明确 sandbox mode 与 approval policy 两层控制；默认 network access 关闭；workspace write、read-only、on-request approvals、destructive MCP/app tools 等概念都有清楚说明 [Docs:security]。SECURITY.md 也指向 OpenAI Bugcrowd 计划 [GH:local-scan]。

但 coding agent 的基础攻击面仍然大：它可以读写文件、运行命令、读取 untrusted web/context、调用 MCP/app tools。GitHub Security Advisories 查询仍只有 1 条 high severity repository advisory；该历史 sandbox bypass 影响 @openai/codex 0.2.0–0.38.0 与 IDE Extension <=0.4.11，分别在 CLI 0.39.0 与 IDE Extension 0.4.12 修复，因此它不是当前 0.144.5 仍受同一漏洞影响的证据，而是权限边界复杂度的证据 [GH:advisories][GH:advisories:detail]。实际使用应坚持：默认只在 version-controlled workspace 运行、保留 git diff/rollback、限制网络、避免暴露 secrets、审查 destructive tool annotations。

## 学习价值

Codex 的学习价值非常高。它是少数能看到较完整工程实现的官方 coding agent：Rust core、TUI/CLI、config schema、sandbox/approval、AGENTS.md、MCP、plugins/skills/subagents、release automation、Bazel/Cargo/Nix/PNPM 混合工程，都在一个项目里可观察 [GH:local-scan][Docs:overview]。

对 Develata 而言，Codex 尤其值得研究两点：第一，agent 权限不是一句“安全模式”，而是 sandbox、approval、network、workspace、MCP destructive annotations 的组合逻辑；第二，大型 agent 工程需要把模型行为约束写入 AGENTS.md、tests、lint、module-size rules 和 review workflow，方能“以法治 agent”，否则百工竞起而无度。
