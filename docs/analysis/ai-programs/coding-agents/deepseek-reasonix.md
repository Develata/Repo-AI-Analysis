---

title: "DeepSeek-Reasonix"
created: 2026-05-15
updated: 2026-07-12
type: repository-analysis
repo_url: "https://github.com/esengine/DeepSeek-Reasonix"
category: "ai-programs/coding-agents"
tags: ["coding-agent", "deepseek", "cli", "tui", "go", "mcp", "desktop-app"]
primary_language: "Go"
license: "MIT"
stars: 26674
forks: 1673
last_checked: 2026-07-12
last_verified: 2026-07-12
evidence: "GitHub API + official README/spec/migration guide/releases"
archived_reason: ""
docker_support: false
gpu_required: false
estimated_cpu: "低（本地 Go CLI；模型推理在远端）"
estimated_memory: "未独立实测"
estimated_storage: "单静态二进制 + 会话/归档数据；未独立实测"
status: active
ratings:
  capability: 4
  usability: 3
  performance: 5
  code_quality: 3
  documentation: 5
  community: 4
  maturity: 2
  extensibility: 4
  security: 3
  recommendation: 3
overall_score: 3.6
sources:
  - "[GH] https://github.com/esengine/DeepSeek-Reasonix"
  - "[Docs] https://esengine.github.io/DeepSeek-Reasonix/"
  - "[GH:README] Official README on default branch main-v2, inspected 2026-07-12: Go rewrite, single static binary, OpenAI-compatible providers, plugins/MCP and install paths; https://github.com/esengine/DeepSeek-Reasonix/blob/main-v2/README.md"
  - "[GH:MIGRATING] Official 1.0 migration guide, inspected 2026-07-12: ground-up Go rewrite, legacy TypeScript branch maintenance-only, config/session migration and unported semantic index; https://github.com/esengine/DeepSeek-Reasonix/blob/main-v2/docs/MIGRATING.md"
  - "[GH:SPEC] Official engineering spec, inspected 2026-07-12: provider/tool registries, permissions, plan mode, sandbox status, MCP transports, context management and distribution; https://github.com/esengine/DeepSeek-Reasonix/blob/main-v2/docs/SPEC.md"
  - "[GH:API-2026-07-12] GitHub API snapshot: active, default branch main-v2, primary language Go, MIT, 26,674 stars, 1,673 forks, 930 open issues, 184 open PRs, head 78e9e265 (2026-07-11), latest CLI/Desktop release v1.17.10 (2026-07-10), repository advisories endpoint returned []."
  - "[GH:v1.17.10] Official CLI/Desktop release v1.17.10: MCP get, approval-gated planner handoffs, Feishu bot/media and multiple tab/session isolation fixes; https://github.com/esengine/DeepSeek-Reasonix/releases/tag/v1.17.10"
---

# DeepSeek-Reasonix

> DeepSeek-native coding agent，现已完成从 TypeScript 0.x 到 Go 1.x 的 ground-up rewrite；单静态二进制、配置/插件驱动，同时保留 prefix-cache-first 设计。
>
> **状态**: `active` · **总分**: 3.6/5 · **推荐度**: 3/5

## 一句话总结

Reasonix 已不再是 2026-05 的 TypeScript 0.x 实验品：默认分支现为 Go 重写的 1.x，支持 OpenAI-compatible providers、双模型 planner/executor、MCP plugins、CLI 与 Wails desktop；但迁移刚完成、发布极快、backlog 很大，适合 DeepSeek 重度用户试用，不宜成为无备份的唯一 coding harness [GH:README] [GH:MIGRATING]。

## 总体评价

最大的材料变化是**整个代码库换代**。旧 TypeScript 线停在 0.x，迁至 `v1` branch 且 maintenance-only；默认 `main-v2` 是 Go ground-up rewrite，当前 CLI/Desktop 为 v1.17.10 [GH:MIGRATING] [GH:API-2026-07-12]。新架构以 `Provider`、`Tool` registry 和 stdio/Streamable HTTP MCP 为核心，DeepSeek 只是 preset，任意 OpenAI-compatible endpoint 都可由 TOML 配置接入；这修正了旧分析中“只能使用 DeepSeek”的边界 [GH:README] [GH:SPEC]。

正面看，单静态 Go binary、独立 planner/executor sessions、cache-aware context maintenance、plan mode、memory/history retrieval、CLI/Desktop 与细粒度 plugin surface 构成了有辨识度的 harness。负面看，2026-07-12 仍有 930 open issues 与 184 open PRs；v1.17.x 几乎逐日发布，v1.17.10 仍在修复跨 tab/session routing 和 approval gate 隔离问题 [GH:API-2026-07-12] [GH:v1.17.10]。这更像高速演化的 1.x，而非稳定平台。

## 推荐度：3/5

**适用角色**：主要使用 DeepSeek 或 OpenAI-compatible endpoint、偏好终端/桌面双入口、愿意自行验证权限与迁移边界的开发者。

给 3/5 的理由：

- Go 单二进制和 npm/prebuilt 安装降低了运行时负担；DeepSeek prefix-cache 仍是核心工程约束 [GH:README]。
- provider 已配置化，不再是单一 DeepSeek vendor hard lock；planner/executor 可分离模型与 cache-stable sessions [GH:SPEC]。
- 但 TypeScript→Go 是 wholesale migration。即使新线已成为默认，旧 session/config、未移植 semantic index、分支双线维护与高频修复仍是现实迁移成本 [GH:MIGRATING]。
- 930 issues / 184 PRs 与 v1.17.10 的多项隔离修复，不支持“生产稳定”判断 [GH:API-2026-07-12] [GH:v1.17.10]。

**结论**：可以作为 DeepSeek/OpenAI-compatible coding workflow 的强力副工具；关键仓库应保留 Git、备份和第二套 agent，不建议把它当作唯一自动化执行面。

## 优势

1. **cache-first 架构仍有辨识度**：planner 与 executor 使用分离 session，context 只在低频 compaction 时重置前缀 [GH:SPEC]。
2. **单静态 Go binary**：`CGO_ENABLED=0`，支持 macOS/Linux/Windows × amd64/arm64；npm 只是 native binary installer，不是运行时 [GH:README] [GH:MIGRATING]。
3. **provider 不再硬编码**：OpenAI-compatible endpoint 由 `reasonix.toml` 配置，多模型 vendor 与 planner model 均可声明 [GH:SPEC]。
4. **工具与插件边界清晰**：built-in registry + MCP stdio/Streamable HTTP；tools、prompts、resources 均有映射 [GH:SPEC]。
5. **文档工程强**：README、migration guide、engineering spec、tool contract、config paths 与安全边界写得非常具体。
6. **CLI/Desktop 双入口**：TUI 适合终端，Wails desktop 提供多 tab、MCP 管理、审批与 bot 观察面 [GH:v1.17.10]。

## 劣势

1. **刚完成 wholesale rewrite**：旧 TS 线 maintenance-only，semantic search/tree-sitter index 尚未移植；迁移不是普通 major upgrade [GH:MIGRATING]。
2. **backlog 高**：930 open issues、184 open PRs，功能与 bug 输入仍超过稳定项目应有水平 [GH:API-2026-07-12]。
3. **发布过快**：v1.17.7 到 v1.17.10 在数日内连续发布，稳定窗口短。
4. **权限语义需要谨慎阅读**：spec 写明非交互 `reasonix run` 在没有 approver 时会把普通 `Ask` fallback 解析为 allow；hard deny 仍有效，但不能把默认 ask 当作 headless fail-closed [GH:SPEC]。
5. **sandbox 跨平台不一致**：Linux/macOS 有 OS backend 路线，Windows stable 当前强制 Bash sandbox 为 off [GH:SPEC]。
6. **旧线功能未完全等价**：CodeGraph/semantic index 未移植，用户需依赖 LSP、grep、read_file 与 glob [GH:MIGRATING]。

## 适合什么场景

- DeepSeek API / DeepSeek-compatible 工作负载，需要显式优化 prefix cache
- 使用自建 OpenAI-compatible endpoint，并希望 TOML 配置多个 provider/model
- 终端编码与 desktop 多会话并用
- 通过 MCP tools/prompts/resources 扩展本地 coding agent
- 研究 planner/executor 双 session、context compaction 与 permission gate 设计

## 不适合什么场景

- 要求长期稳定 CLI/API 和低频升级的组织
- 不能接受 TypeScript 0.x → Go 1.x 迁移或功能缺口的现有用户
- 把默认 `ask` 误认为 headless fail-closed 的高安全自动化
- 需要 Windows 上强制 shell sandbox 的环境
- 不愿处理高频 release、issue backlog 与 migration verification 的团队

## 与类似项目对比

> 下表仅作定位；竞品未在本次 freshness audit 中按同一 10 维框架复核。

| 项目 | 定位 | 相对本项目 |
|------|------|-----------|
| OpenCode | 多 provider 开源 coding agent | 社区与 provider 生态更大；Reasonix 更强调 DeepSeek cache、Go 单 binary 和双模型 session |
| Codex CLI | OpenAI 官方 terminal coding agent | 官方模型/服务整合更强；Reasonix 可自配 OpenAI-compatible endpoint |
| Aider | git-centric AI pair programmer | 更成熟、编辑流程更聚焦；Reasonix harness、desktop 与 MCP 面更宽 |
| Claude Code | Anthropic 官方 coding agent | 模型/产品整合更成熟；Reasonix 开源、可配置且对 DeepSeek 更有针对性 |

## 它能做什么

评分 4/5。

- 交互 TUI 与 `reasonix run` headless coding
- 文件 read/write/edit/move、glob/grep、shell、LSP-assisted code reading
- plan mode、evidence-backed step completion、read-only research subagents
- planner/executor 双模型协作，分别维护 cache-stable session
- MCP stdio 与 Streamable HTTP tools、prompts、resources
- project/user commands、skills、hooks、session resume/history、auto-memory
- Wails desktop、多 tab、MCP 管理与 bot/Feishu 入口 [GH:SPEC] [GH:v1.17.10]

扣一分：旧线 semantic index/CodeGraph 未移植，且 broad surface 在 v1.17.x 仍持续修复。

## 运行环境与资源占用

评分 5/5。

- **运行时**：Go 静态 binary；npm 仅负责下载平台包 [GH:MIGRATING]
- **平台**：macOS/Linux/Windows，amd64/arm64 [GH:README]
- **安装**：`npm i -g reasonix`、Homebrew、release archive 或源码 `make build`
- **Docker**：未验证官方用户向 Docker image，因此 `docker_support: false`
- **GPU**：核心无需本地 GPU；模型通常通过远端 endpoint
- **资源数据**：本次未做 RSS/latency benchmark，故不写未经验证的 MB 数字

单 binary、无 Node runtime、lean pure-Go dependency policy 支持 5/5；该分数指本地 harness 效率，不代表模型 API latency 或费用。

## 上手体验

评分 3/5。

新用户可 `npm i -g reasonix` → `reasonix setup` → 设置 API key → 启动；prebuilt binary 降低了环境摩擦 [GH:README]。旧用户则要处理 config path、credentials、sessions、memory 与未移植 code intelligence；官方提供一次性 non-destructive import 和 `/migrate`，但也明确列出 missed-data 与版本前提 [GH:MIGRATING]。

v1.17.10 继续修复 tab-scoped workspace、prompt gates、async actions 和 recovery sessions，说明 desktop 多会话体验仍在打磨 [GH:v1.17.10]。

## 代码质量

评分 3/5。

Go 线有 interface-first registry、acyclic dependency direction、tool contract、tests、`gofmt`/`go vet` 与单 binary 约束，设计文档远优于一般早期项目 [GH:SPEC]。但评分规则要求 active wholesale language migration 期间 `code_quality` 上限为 3：当前仍有 legacy TS maintenance branch、迁移器、未移植功能和快速 v1.x 修复，不能仅凭新架构整洁给 4。

## 可扩展性

评分 4/5。

- provider factory/registry；OpenAI-compatible vendors 主要靠配置扩展
- built-in `Tool` registry
- MCP stdio 与 Streamable HTTP plugins
- MCP prompts/resources 映射
- project/user slash commands、skills、hooks

限制是 external plugins 当前主要提供 tools；spec 将 OAuth、provider plugins、MCP long tail 列为后续工作 [GH:SPEC]。

## 文档质量

评分 5/5。

README 给出定位与 quick start；`MIGRATING.md` 诚实区分旧/新 codebase、功能缺口与自动迁移边界；`SPEC.md` 则写清 registry、permissions、plan mode、sandbox、MCP、context management 与 roadmap [GH:README] [GH:MIGRATING] [GH:SPEC]。对于如此年轻且剧烈重写的项目，这种“contract first”文档是重要正面信号。

## 社区与成熟度

| 维度 | 评分 | 说明 |
|------|------|------|
| 社区活跃度 | 4/5 | 26,674 stars、1,673 forks，提交与 release 活跃；但 930 issues / 184 PRs 显示维护压力很高 [GH:API-2026-07-12]。 |
| 成熟度 | 2/5 | 建仓约 3 个月，刚完成 TypeScript→Go ground-up rewrite，v1.17.x 高频发布，旧线仅 maintenance；尚无稳定窗口 [GH:MIGRATING]。 |

“1.x”不是成熟度证明。这里的 1.0 是新 codebase generation 的 semver 起点，而非多年兼容积累。

## 安全与风险

评分 3/5。

正面：workspace writer confinement、permission deny/ask/allow、plan-mode fail-closed reader trust、memory mutation fresh approval、MCP namespacing、serve token/password 模式和 OS sandbox 设计均有明确 contract [GH:SPEC]。

边界：

- 非交互运行中，普通 writer `Ask` 在无 approver 时可解析为 allow；必须用 deny rules / sandbox 形成硬边界。
- Windows stable 当前将 Bash sandbox 强制为 off。
- `serve` 默认 `auth_mode = none` 只适用于 loopback；对外绑定前必须配置 token/password。
- v1.17.10 仍在修复 planner handoff approval 与跨 tab prompt/session isolation [GH:v1.17.10]。
- repository advisories endpoint 本次返回 `[]`，仅表示未查到已发布 GHSA，不等于安全审计通过 [GH:API-2026-07-12]。

## 学习价值

**高**。建议重点阅读：

1. Go registry 如何把 provider/tool/plugin 从核心 loop 解耦
2. planner/executor 双 session 如何维持 prefix-cache stability
3. deterministic snip/prune + low-frequency summary compaction
4. permission policy、plan-mode trust 与 OS sandbox 三层边界
5. 一次 ground-up rewrite 如何设计 non-destructive config/session migration

它同时是正面架构样本与迁移风险样本：代码重写可以清理结构，但不会自动产生成熟度。
