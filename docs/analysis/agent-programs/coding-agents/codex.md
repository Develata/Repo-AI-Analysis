---
title: "Codex"
created: 2026-05-20
updated: 2026-05-20
type: repository-analysis
repo_url: "https://github.com/openai/codex"
category: "agent-programs/coding-agents"
tags: ["coding-agent", "cli", "openai", "codex", "rust", "terminal", "ide", "mcp", "sandbox", "agents-md"]
previous_repo: ""
successor: ""
primary_language: "Rust"
license: "Apache-2.0"
stars: 83926
forks: 12183
last_checked: 2026-05-20
last_verified: 2026-05-20
evidence: "GitHub API + official documentation + npm metadata + repository local scan; local repo scan only, not a fresh production deployment test"
archived_reason: ""
docker_support: false
gpu_required: false
estimated_cpu: "low local CPU for CLI/TUI orchestration; model inference is remote unless external local providers are configured"
estimated_memory: "low-to-moderate local memory for Rust CLI/TUI plus workspace scans and spawned commands"
estimated_storage: "repository is large for development; npm package metadata reports small wrapper package, release binaries downloaded per platform"
status: active
sharing_candidate: true
ratings:
  capability: 4
  usability: 5
  performance: 4
  code_quality: 4
  documentation: 5
  community: 4
  maturity: 2
  extensibility: 5
  security: 3
  recommendation: 4
overall_score: 4.0
sources:
  - "[GH] https://github.com/openai/codex"
  - "[GH:api] https://api.github.com/repos/openai/codex queried 2026-05-20; stars=83926, forks=12183, open_issues_count=4667, created_at=2025-04-13, pushed_at=2026-05-20, license=Apache-2.0, default_branch=main"
  - "[GH:issues] GitHub Search API queried 2026-05-20; open issues=4319, open PRs=339 for repo:openai/codex"
  - "[GH:languages] https://api.github.com/repos/openai/codex/languages queried 2026-05-20; Rust=31134215, Python=959713, TypeScript=81417, Starlark=73913, Shell=53225"
  - "[GH:releases] https://api.github.com/repos/openai/codex/releases?per_page=10 queried 2026-05-20; latest releases include rust-v0.132.0 published 2026-05-20, rust-v0.131.0 published 2026-05-18, rust-v0.132.0-alpha.1 prerelease published 2026-05-18"
  - "[GH:contributors] https://api.github.com/repos/openai/codex/contributors?per_page=100 queried 2026-05-20; first page contributors=100; top entries include bolinfest=930, jif-oai=907, aibrahim-oai=546"
  - "[GH:community] https://api.github.com/repos/openai/codex/community/profile queried 2026-05-20; health_percentage=75; readme, license, contributing and pull_request_template detected"
  - "[GH:advisories] https://api.github.com/repos/openai/codex/security-advisories?per_page=20 queried 2026-05-20; returned 1 advisory: GHSA-w5fx-fh39-j5rw high severity published 2025-09-19"
  - "[GH:local-scan] Local shallow clone /tmp/repo-wiki-batch1/codex at commit 57a68fb9e3a3a1b2132eba5381178b0d6c7729be dated 2026-05-20; git ls-files=4595; checked README.md, SECURITY.md, AGENTS.md, docs/contributing.md, package.json, codex-rs/Cargo.toml; README lists npm/Homebrew/release-binary installs and says Codex CLI runs locally; SECURITY.md points to Bugcrowd and agent approvals/security docs; docs/contributing.md says external code contributions are invitation-only and unsolicited PRs are closed without review; AGENTS.md records Rust module-size, lint, test, MCP connection manager, Bazel/Cargo and config-schema rules"
  - "[GH:advisories:detail] https://api.github.com/repos/openai/codex/security-advisories?per_page=30 queried 2026-05-20; GHSA-w5fx-fh39-j5rw / CVE-2025-59532 was a sandbox bypass due to path configuration logic, affected @openai/codex 0.2.0–0.38.0 and Codex IDE Extension <=0.4.11, patched in Codex CLI 0.39.0 and IDE Extension 0.4.12"
  - "[NPM] npm view @openai/codex queried 2026-05-20; version=0.132.0, engines.node=>=16, dist.unpackedSize=12944, license=Apache-2.0"
  - "[Docs:overview] https://developers.openai.com/codex extracted 2026-05-20; page positions Codex as OpenAI's coding agent and documents CLI, IDE, App, Web/Cloud, GitHub/Slack/Linear integrations, config, AGENTS.md, MCP, plugins, skills and subagents as Codex product surfaces"
  - "[Docs:security] https://developers.openai.com/codex/agent-approvals-security extracted 2026-05-20; page describes sandbox mode and approval policy as two control layers, states network access is off by default, and explains read-only/workspace-write/on-request approvals plus destructive MCP/app tool approval semantics"
---

# Codex

> OpenAI 官方开源 coding agent：以 Rust CLI 为核心，连接 ChatGPT/Codex 生态，强调本地运行、沙箱、审批与 AGENTS.md 约定。
>
> **状态**: `active` · **总分**: 4.0/5 · **推荐度**: 4/5

## 一句话总结

Codex 是适合 OpenAI / ChatGPT 生态用户的官方开源 coding agent，优势是 Rust 实现、Apache-2.0、沙箱/审批模型和多 surface 文档，主要风险是项目仍年轻、issue backlog 大且外部贡献受限。

## 总体评价

`openai/codex` 是 OpenAI 官方 coding agent 的开源实现入口。README 将 Codex CLI 定义为“runs locally on your computer”的 coding agent，并提供 npm、Homebrew 与 release binary 安装路径；官方 docs 则把 Codex 描述为覆盖 CLI、IDE、App、Web/Cloud、GitHub/Slack/Linear integrations、configuration、AGENTS.md、MCP、plugins、skills、subagents 等多 surface 的开发者 agent [GH:local-scan][Docs:overview]。

它与 Claude Code 的关键差异是：Codex 仓库是大型 Apache-2.0 开源 monorepo，主语言为 Rust，可观察到较完整的工程结构、AGENTS.md 约定、contributing 文档、安全文档与本地沙箱设计 [GH:api][GH:languages][GH:local-scan]。这使它比闭源 agent 更适合学习实现、扩展和审计。

但 Codex 仍处在高速迭代期：GitHub release 显示 0.13x 版本与 alpha prerelease 并行出现，项目创建于 2025-04，open issues 超过 4000，且 contributing 文档明确“External contributions are by invitation only” [GH:api][GH:issues][GH:releases][GH:local-scan]。所以它是高价值主线项目，但不能把官方背书误读成成熟稳定。

## 推荐度：4/5

**定位**：面向使用 OpenAI / ChatGPT 生态、同时希望 coding agent 本体尽量开源可审计的开发者和团队。

推荐它，是因为它在“官方模型生态 + 开源实现 + Rust CLI + sandbox/approval security model”之间取得了很好的平衡；不直接给 5，是因为版本仍早、issue backlog 大、外部代码贡献受限，并且已有 high severity security advisory 记录 [GH:issues][GH:advisories][GH:local-scan]。

对个人开发者，它值得作为 Claude Code 之外的第一梯队 coding agent 试用；对团队，应先限定仓库范围、审批策略、网络策略、secret 暴露面，再逐步放大使用范围。

## 优势

1. **官方 OpenAI coding agent**：与 ChatGPT/Codex 产品和模型生态同源，文档覆盖 CLI、IDE、App、Web/Cloud 等入口 [Docs:overview]。
2. **开源程度高**：Apache-2.0，大型 Rust monorepo，可检查核心实现、配置 schema、sandbox 相关代码和开发约定 [GH:api][GH:local-scan]。
3. **安全模型文档清楚**：官方说明 sandbox mode 与 approval policy 两层控制，默认网络关闭，workspace write 与 destructive MCP/app tool calls 有审批语义 [Docs:security]。
4. **工程规范强**：AGENTS.md 对 Rust crate、模块大小、lint、tests、MCP connection manager、Bazel/Cargo 交互等有细粒度约束 [GH:local-scan]。
5. **社区关注和维护速度高**：8 万+ stars、1.2 万+ forks、contributors first page 达 100，release 高频 [GH:api][GH:contributors][GH:releases]。

## 劣势

1. **成熟度不足**：项目创建于 2025-04，版本仍为 `0.132.0`，alpha prerelease 与稳定 release 并行，说明 API/行为仍在高速演化 [GH:api][GH:releases][NPM]。
2. **issue backlog 大**：open issues 超过 4000，open PRs 数百，维护压力显著 [GH:issues]。
3. **外部贡献受限**：contributing 文档明确不接受 unsolicited code contributions，PR 需邀请，否则会关闭不审 [GH:local-scan]。
4. **仍绑定 OpenAI 生态**：虽然 `openai/codex` 仓库本身开源，但官方 docs 描述的完整 Codex product surface 默认仍依赖 OpenAI/ChatGPT/Codex 账户、模型、政策与服务可用性 [Docs:overview]。
5. **安全复杂度高**：即使有 sandbox/approval，coding agent 仍会读写文件、运行命令、调用 MCP/app tools；已有 high severity advisory [Docs:security][GH:advisories]。

## 适合什么场景

- ChatGPT Plus/Pro/Business/Edu/Enterprise 用户，希望把 OpenAI Codex 用到本地 coding workflow。
- 希望研究官方 coding agent 实现，而不是只使用闭源产品的开发者。
- 需要可配置 sandbox、approval、network access、AGENTS.md、MCP、plugins/skills 的工程团队。
- Rust / systems engineering 学习者，想观察大型 Rust CLI/TUI/agent monorepo 如何组织。
- 对供应商生态可接受，但希望至少 agent 客户端侧可审计、可 patch 的场景。

## 不适合什么场景

- 需要长期稳定 API/行为、低变更频率的企业标准化环境。
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

上述项目按 `agent-programs/coding-agents` 同类范围做定位级对比，未按同一 10 维度框架深审。

## 个人主页 sharing 候选

是。Codex 很适合作为 sharing 候选，尤其适合写成“官方 coding agent 的开源化路线”或“从 Copilot-style assistant 到 sandboxed local agent 的工程范式变化”。

它的分享价值不只在“又一个写代码工具”，而在它把 AGENTS.md、sandbox、approval、MCP、plugins、skills、subagents、remote/cloud/app surfaces 组合成一个可治理的工程系统 [Docs:overview][Docs:security]。

## 它能做什么

评分 4/5。

Codex 能完成 coding agent 的主线任务：写代码、理解陌生代码库、review、debug/fix、执行重复工程任务、运行 CLI、本地/IDE/App/Web/Cloud 多入口使用、接入 GitHub/Slack/Linear、通过 AGENTS.md/config/hooks/MCP/plugins/skills/subagents 定制行为 [Docs:overview]。

不给 5，是因为本分析对象主要是 `openai/codex` 仓库和 Codex CLI 开源实现；官方 docs 覆盖的完整 Codex product surface 并不都等价于该 repo 中可独立运行、可本地审计的能力。能力强，但边界需分清。

## 运行环境与资源占用

评分 4/5。

Codex CLI 是本地运行的 coding agent；README 支持 npm、Homebrew 与 release binary 安装，NPM metadata 显示 wrapper package 很小，实际平台二进制通过 release 分发 [GH:local-scan][NPM]。Rust 主体通常有较好的本地资源效率，模型推理成本主要在远端。

资源风险主要来自工作区扫描、长会话上下文、外部命令、tests/builds、MCP tools 和网络调用，而不是 agent runtime 本身。不给 5，是因为大型 monorepo 开发环境复杂，local clone 有 4595 tracked files，Rust/Cargo/Bazel/PNPM 混合开发对 contributor 机器并不轻 [GH:local-scan]。

## 上手体验

评分 5/5。

README 首屏直接给出 `npm i -g @openai/codex` 与 `brew install --cask codex`，并说明也可下载 GitHub Release 中对应平台二进制；运行 `codex` 即可开始 [GH:local-scan]。官方 docs 还覆盖 Quickstart、CLI、IDE、App、Web/Cloud、configuration、administration 等入口 [Docs:overview]。

对终端用户而言，这是优秀的上手体验。真正的复杂度在于安全模式、模型/账户、AGENTS.md、MCP、plugins、team policy；但这些属于进阶治理，不妨碍基础使用快速起步。

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

社区层面，GitHub API 显示 8 万+ stars、1.2 万+ forks，contributors first page 有 100 人，GitHub community profile 健康度 75%，readme/license/contributing/PR template 都存在 [GH:api][GH:contributors][GH:community]。作为 OpenAI 官方项目，其关注度和维护资源都非常强。不给 5，是因为 contributing 文档明确外部代码贡献采用邀请制，社区参与强但治理并非完全开放共建 [GH:local-scan]。

成熟度则必须保守。项目创建于 2025-04，NPM version 为 0.132.0，release 列表包含 alpha prerelease，open issues 超过 4000；这符合“高活跃但未稳定”的项目画像 [GH:api][NPM][GH:releases][GH:issues]。所以成熟度给 2，而不是被 star 数拉高。

## 安全与风险

评分 3/5。

Codex 的安全设计优于许多同类工具：官方文档明确 sandbox mode 与 approval policy 两层控制；默认 network access 关闭；workspace write、read-only、on-request approvals、destructive MCP/app tools 等概念都有清楚说明 [Docs:security]。SECURITY.md 也指向 OpenAI Bugcrowd 计划 [GH:local-scan]。

但 coding agent 的基础攻击面仍然大：它可以读写文件、运行命令、读取 untrusted web/context、调用 MCP/app tools。GitHub Security Advisories 查询发现 1 条 high severity advisory；该 advisory 为历史 sandbox bypass，影响 @openai/codex 0.2.0–0.38.0 与 Codex IDE Extension <=0.4.11，并列出 patched versions，因此它不是当前 0.132.0 仍受同一漏洞影响的证据，而是权限边界复杂度的证据 [GH:advisories][GH:advisories:detail]。实际使用应坚持：默认只在 version-controlled workspace 运行、保留 git diff/rollback、限制网络、避免暴露 secrets、审查 destructive tool annotations。

## 学习价值

Codex 的学习价值非常高。它是少数能看到较完整工程实现的官方 coding agent：Rust core、TUI/CLI、config schema、sandbox/approval、AGENTS.md、MCP、plugins/skills/subagents、release automation、Bazel/Cargo/Nix/PNPM 混合工程，都在一个项目里可观察 [GH:local-scan][Docs:overview]。

对 Develata 而言，Codex 尤其值得研究两点：第一，agent 权限不是一句“安全模式”，而是 sandbox、approval、network、workspace、MCP destructive annotations 的组合逻辑；第二，大型 agent 工程需要把模型行为约束写入 AGENTS.md、tests、lint、module-size rules 和 review workflow，方能“以法治 agent”，否则百工竞起而无度。
