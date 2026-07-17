---
title: "ForgeCode"
created: 2026-07-16
updated: 2026-07-16
type: repository-analysis
repo_url: "https://github.com/tailcallhq/forgecode"
category: "ai-programs/agents/coding-agents"
tags: ["coding-agent", "rust", "terminal", "tui", "zsh", "multi-provider", "mcp", "skills", "agents-md", "semantic-search"]
previous_repo: ""
successor: ""
primary_language: "Rust"
license: "Apache-2.0"
stars: 7461
forks: 1445
last_checked: 2026-07-16
last_verified: 2026-07-16
evidence: "Current GitHub GraphQL/REST metadata, release/advisory/community/tree scans + official README and documentation; no local build, model benchmark or production deployment test"
archived_reason: ""
docker_support: false
gpu_required: false
estimated_cpu: "low local orchestration CPU with hosted models; spawned tools/builds and local models are workload-dependent"
estimated_memory: "not independently benchmarked; Rust terminal client plus session/tool processes"
estimated_storage: "v2.13.18 release binaries are roughly 36-49 MB by platform; semantic index or local models add separate storage"
status: active
ratings:
  capability: 4
  usability: 4
  performance: 3
  code_quality: 4
  documentation: 4
  community: 4
  maturity: 3
  extensibility: 4
  security: 3
  recommendation: 3
overall_score: 3.6
sources:
  - "[GH] https://github.com/tailcallhq/forgecode"
  - "[GH:api] GitHub GraphQL/REST queried 2026-07-16 UTC at f41f714a736bd70c76035afbba9e0afde9ada6a1; created=2024-12-08, stars=7461, forks=1445, open issues=31, open PRs=12, merged PRs=2122, releases=371, first contributors page=78, license=Apache-2.0"
  - "[GH:languages] GitHub GraphQL queried 2026-07-16; Rust=4641833 bytes of 4915533 measured total, with Shell/HTML/TypeScript/JavaScript/CSS/Nix auxiliary code"
  - "[GH:release] https://github.com/tailcallhq/forgecode/releases/tag/v2.13.18 and Releases API queried 2026-07-16; latest published 2026-07-16; Linux/macOS/Windows release binaries roughly 36-49 MB"
  - "[GH:tree] GitHub recursive tree API scanned 2026-07-16 UTC at f41f714a736bd70c76035afbba9e0afde9ada6a1; 936 blobs, 26 Cargo.toml files, 7 workflow files and 24 test-like paths by filename/directory heuristic; heuristic is not coverage"
  - "[GH:community] GitHub community profile API queried 2026-07-16; health_percentage=37, README/license/issue template detected, but CONTRIBUTING/CODE_OF_CONDUCT/SECURITY/PR template not detected"
  - "[GH:advisories] https://api.github.com/repos/tailcallhq/forgecode/security-advisories?per_page=100 queried 2026-07-16; returned no published repository advisories in this check"
  - "[GH:readme] https://github.com/tailcallhq/forgecode/blob/f41f714a736bd70c76035afbba9e0afde9ada6a1/README.md fetched 2026-07-16; documents TUI, one-shot CLI, Zsh plugin, agents, skills, AGENTS.md, sandbox worktrees, providers, MCP and optional semantic sync"
  - "[Docs:install] https://forgecode.dev/docs extracted 2026-07-16; documents installer, Zsh setup/doctor, provider login/model selection and ForgeCode Services opt-in"
  - "[Docs:permissions] https://forgecode.dev/docs/permissions extracted 2026-07-16; permissions.yaml applies only when restricted=true, generated default is allow-all, unmatched rules confirm, some built-ins are exempt and MCP tools bypass this policy"
  - "[Docs:providers] https://forgecode.dev/docs/custom-providers extracted 2026-07-16; documents built-in and custom providers, OpenAI/Responses/Anthropic/Bedrock/Google/OpenCode wire formats, custom headers and enterprise gateways"
  - "[Docs:mcp] https://forgecode.dev/docs/mcp-integration extracted 2026-07-16; documents project/user MCP scopes, stdio/URL servers, automatic tool registration and security checklist"
  - "[Docs:services] https://forgecode.dev/docs/forge-services extracted 2026-07-16; optional :sync sends file content and embeddings to ForgeCode servers; model prompts/completions go directly to the selected provider; logout does not delete indexed data"
  - "[WikiLocal:comparisons] Local wiki positioning consulted 2026-07-16: ai-programs/agents/coding-agents/codex.md, opencode.md, open-interpreter.md and cline.md; comparison rows were not externally re-audited under the same 10 dimensions"
---

# ForgeCode

> Rust terminal coding agent：把 TUI、one-shot CLI 与 Zsh `:` workflow 做成一个多模型 harness，并提供 agents、skills、MCP、worktree sandbox 与可选 semantic service。
>
> **状态**: `active` · **总分**: 3.6/5 · **推荐度**: 3/5
> **核验版本**: `v2.13.18` · commit `f41f714` · 2026-07-16

## 一句话总结

ForgeCode 是功能扎实、provider-neutral、社区真实活跃的 Rust coding agent，但 restricted policy 默认并不收紧、MCP 绕过该 policy，且 optional semantic sync 会上传文件内容，采用前必须主动配置安全边界。

## 总体评价

ForgeCode 的产品中心是 terminal developer workflow，而不只是聊天 TUI。它支持 interactive session、one-shot `-p`、Zsh `:` prefix、三种内置 agents、conversation branch/compact/dump、git commit/suggest、skills、AGENTS.md、custom agents/commands、MCP、provider switching、worktree sandbox 与可选 semantic search [GH:readme][Docs:install][Docs:mcp]。

工程与社区信号比 stars 表面更扎实：仓库约 7461 stars、1445 forks、2122 merged PRs、371 releases、first contributors page=78，当前有 31 open issues 与 12 open PRs；Rust 占 measured bytes 约 94%，26-crate workspace 配有 7 个 public workflows [GH:api][GH:languages][GH:tree]。它不是 T0 mindshare，但也不是 README-only prototype。

关键 trade-off 是 local-first core 与 hosted convenience 共存。基础 agent 直接连接用户选择的 LLM provider；启用 ForgeCode Services 并执行 `:sync` 后，项目文件内容与 embeddings 会存到 ForgeCode servers，logout 也不会删除已同步数据 [Docs:services]。这不是偷偷上传，但必须进入选型和合规判断。

## 推荐度：3/5

适合愿意配置 provider、安全 policy 与数据边界的个人开发者，尤其是喜欢 Zsh-native workflow、需要 custom provider/MCP/skills、又不想绑定单一模型的人 [GH:readme][Docs:providers]。

推荐度不升到 4，是因为 security defaults 需要主动治理：`restricted=true` 只开启 policy evaluation，自动生成的 policy 仍 allow-all；MCP tools 又完全绕过 `permissions.yaml` [Docs:permissions]。再加上 optional cloud semantic sync，团队采用必须先做 threat model 与数据分类。

## 优势

1. **终端 workflow 有辨识度**：TUI、one-shot 与 Zsh `:` prefix 不是三套产品，而是围绕同一 sessions/agents/config 组织 [GH:readme][Docs:install]。
2. **多 provider/协议支持深入**：内置 OpenAI、Anthropic、OpenRouter、Vertex、Groq、Bedrock 等，也可配置自托管/企业 gateway 和多种 wire formats [Docs:providers]。
3. **工程活动强**：2122 merged PRs、371 releases、78 个 first-page contributors 与持续更新显示维护活跃 [GH:api]。
4. **扩展 surface 实用**：MCP、skills、custom agents/commands、AGENTS.md、provider overrides 与 semantic context engine [GH:readme][Docs:mcp]。
5. **Rust binary 体积合理**：当前 release binaries 约 36-49 MB，三大桌面平台都有预编译包 [GH:release]。
6. **数据边界文档相对坦率**：Forge Services 页面明确说明上传什么、不上传什么以及 logout 不删除数据 [Docs:services]。

## 劣势

1. **restricted mode 容易产生错误安全感**：默认 policy allow-all；未匹配规则虽会 confirm，但部分 built-ins 与全部 MCP tools 不受该文件约束 [Docs:permissions]。
2. **optional semantic sync 上传源文件**：文件内容与 embeddings 存在 ForgeCode servers，需先配置 ignore 与删除流程 [Docs:services]。
3. **高速版本节奏**：当前虽已到 `v2.13.18`，但 371 releases 与密集发布节奏说明行为/API 仍需按版本 pinning 管理 [GH:api][GH:release]。
4. **community governance docs 不完整**：community health 37%，未检测到 SECURITY/CONTRIBUTING/CODE_OF_CONDUCT/PR template [GH:community]。
5. **Zsh/Nerd Font 偏好提高环境耦合**：CLI/TUI 本身可用，但最佳体验依赖 shell plugin 与字体配置 [Docs:install]。
6. **本轮未做 benchmark**：README/website 的 benchmark claim 未被独立复现，不作为评分依据。

---

## 适合什么场景

- 经常留在 Zsh 中工作，希望用 `:` 前缀发 prompt、切 agent、commit 与 suggest command。
- 需要在 OpenAI/Anthropic/OpenRouter/Vertex/Bedrock/self-hosted gateway 间切换。
- 想把 read-only research、planning 与 implementation agents 分开。
- 需要 MCP、SKILL.md、AGENTS.md、custom commands/agents 与 worktree experiment。
- 能显式选择是否启用 hosted semantic sync，并管理 ignore/delete 与 restricted policy。

## 不适合什么场景

- 误以为开启 `restricted=true` 就自动得到 deny-by-default sandbox 的用户。
- 无法审查 MCP server 或把 MCP tools 纳入额外审批/隔离的高敏环境。
- 代码绝不能上传第三方，却又打算选择启用 Forge Services semantic sync。
- 需要稳定 1.x API、长期版本 pin 与企业 security disclosure SLA 的组织。
- 不使用 Zsh、也不需要 rich terminal workflow，只想要最小 one-shot patch tool。

## 与类似项目对比

| 项目 | 定位 | 相对本项目 |
|---|---|---|
| ForgeCode | 多模型 Rust terminal coding agent | 本项目；Zsh workflow、provider configuration 与快速 release cadence 突出 |
| Codex | OpenAI 官方 Rust coding agent | Codex 的模型/沙箱/App Server 联合设计与 mindshare 更强；ForgeCode 更 provider-neutral，且 Zsh/worktree/semantic-service 路线更突出 |
| OpenCode | 多模型 terminal coding agent | OpenCode 生态与 UI/SDK 路线更广；ForgeCode 更强调 Rust binary、Zsh 与 Forge Services |
| Open Interpreter | Codex-derived multi-provider/harness coding agent | Open Interpreter 更偏 harness emulation 与低成本模型实验；ForgeCode 更偏独立 terminal/Zsh workflow 与 semantic context service |
| Cline | VS Code/CLI 多模型 coding agent | Cline 更偏 editor-first；ForgeCode 更 terminal/Zsh-first |

上述项目依据本地 wiki 既有条目的定位与分类语境做 comparison，未在本轮按同一 10 维度重新抓取外部事实 [WikiLocal:comparisons]。

---

## 它能做什么

评分 4/5。

ForgeCode 能理解/编辑代码、执行命令、保持/克隆/压缩 conversations、生成 commit/shell suggestion、运行 TUI/one-shot/Zsh workflows、切换 agents/models/providers、加载 AGENTS.md/skills/custom commands、接 MCP、创建 isolated git worktree，并可通过 hosted context engine 做 semantic search [GH:readme][Docs:mcp][Docs:services]。

不给 5，因为本轮未部署并逐项验证 provider/MCP/semantic sync，且 editor-native/desktop/cloud-agent surfaces 不如最全面的 T0 产品。核心场景完整，边缘覆盖仍有限。

## 运行环境与资源占用

评分 3/5。

| 场景 | CPU / GPU | 内存 | 存储 | 说明 |
|---|---|---|---|---|
| hosted model CLI/TUI | 本地 CPU 负责 Rust runtime/tools；GPU 不需要 | 未独立 benchmark | release binary 约 36-49 MB | 模型推理远端 [GH:release] |
| Forge Services | 本地索引前处理 + network | 未独立 benchmark | server-side files/embeddings；本地 cache 未测 | 数据与检索成本不同于 binary [Docs:services] |
| local/self-hosted model | 由模型 runtime 决定 | 模型权重/context 主导 | 模型权重另计 | custom provider support 不等于 Forge 自带 inference [Docs:providers] |

相对 Electron desktop agent，纯 Rust terminal client 的包体与 idle surface 更克制；主要资源来自 spawned builds/tests、large context、MCP subprocesses 与 local model。但本轮没有进程级 benchmark，按统一边界保守给 3。

## 上手体验

评分 4/5。

一行 installer、interactive provider login、`:model`、`forge --help` 与 `forge zsh doctor` 形成清楚 onboarding；预编译 assets 覆盖 macOS/Linux/Windows [Docs:install][GH:release]。不用 Zsh 也能直接运行 TUI/one-shot。

最佳体验仍要求 Nerd Font、Zsh plugin、terminal restart、provider credentials 与安全配置。多 provider/agents/services 带来选择成本，故给 4。

## 代码质量

评分 4/5。

固定 tree 有 936 blobs、26 Cargo manifests、7 workflows、24 test-like paths；仓库主体约 94% Rust，crate boundaries 覆盖 domain/app/fs/tool/llm/providers/mcp/sandbox/TUI 等 [GH:tree][GH:languages]。2122 merged PRs 与 78 个 first-page contributors 提供真实迭代/review history [GH:api]。

不给 5 是因为未有 ≥80% coverage 证据、未本地跑全量 tests，而且 community health files 不完整 [GH:community]。结构与 CI 信号足够 4，不能用 release 数替代测试质量。

## 可扩展性

评分 4/5。

ForgeCode 支持 custom providers/wire formats/headers、project/user MCP、SKILL.md、custom agents/commands、AGENTS.md、context-engine provider 与 config overrides [GH:readme][Docs:providers][Docs:mcp]。多数定制无需 fork。

不给 5，因为 extension governance 与 security boundary 尚不统一：MCP 绕过 built-in permissions，skills/agents 没有稳定 plugin ABI 承诺，hosted context engine 又引入 service dependency [Docs:permissions][Docs:services]。

## 文档质量

评分 4/5。

README 和官方 docs 覆盖 install、Zsh、CLI、conversations、agents、providers、MCP、permissions、semantic services、proxy/cert/config 等，示例充分 [GH:readme][Docs:install][Docs:permissions][Docs:providers][Docs:mcp][Docs:services]。

不足在 repository governance/security docs：GitHub community profile 未检测到 SECURITY、CONTRIBUTING、CODE_OF_CONDUCT 与 PR template [GH:community]。用户文档强，维护/披露文档不完整，故给 4。

## 社区与成熟度

社区评分 4/5，成熟度评分 3/5。

社区数据有真实 depth：7461 stars、1445 forks、2122 merged PRs、12 open PRs、31 open issues、78 个 first-page contributors，且 main/release 持续更新 [GH:api][GH:release]。这符合活跃核心维护与外部互动的 4 分；没有基金会治理或更完整 third-party ecosystem 证据，不给 5。

成熟度方面，项目创建于 2024-12，已积累大量 releases，当前版本为 `v2.13.18`；但发布频率很高，配置/credential/service/restricted-mode 行为仍在变，且 repository governance/security docs 不完整 [GH:api][GH:release][GH:readme][GH:community]。属于快速迭代的 3 分，不是稳定企业基线的 4。

## 安全与风险

评分 3/5。

ForgeCode 有 file/write/command/url policies、confirm/deny/allow、git-worktree `--sandbox`、TLS/config controls 与 MCP security checklist [GH:readme][Docs:permissions][Docs:mcp]。本次 advisories API 未返回已发布 repository advisory，但空结果不能推出无漏洞 [GH:advisories]。

核心风险来自 default semantics：restricted 默认关闭；即使打开，生成 policy 仍 allow-all；SemSearch/Undo/Plan/Task exempt，MCP tools 完全绕过 policy [Docs:permissions]。另外 `:sync` 会上传并保存 file content/embeddings，logout 不删除 [Docs:services]。这些不是隐藏行为，却要求部署者主动写 deny/confirm rules、审查 MCP、隔离 secrets、管理 ignore/delete，并避免在未审查分支上自动 commit/push。

## 学习价值

ForgeCode 最值得研究的不是又一个 agent loop，而是：

1. **shell-native UX**：如何把 persistent agent state 映射成 Zsh `:` commands，而不迫使用户一直停留在 TUI [GH:readme]。
2. **provider abstraction**：同一 config 如何处理 OpenAI/Responses/Anthropic/Bedrock/Google/OpenCode wire formats 与企业 gateways [Docs:providers]。
3. **policy gotchas**：`restricted=true`、allow-all seed、confirm fallback、exempt tools 与 MCP bypass 说明“有权限系统”不等于“默认最小权限” [Docs:permissions]。
4. **local/hosted boundary**：LLM traffic 直达 provider，而 semantic sync 单独上传 source/embedding；应分别建模数据流 [Docs:services]。

它是很好的 Rust terminal-agent case study，但生产采用必须先把安全默认值改成组织自己的规则。