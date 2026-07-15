---


title: "codegraph"
created: 2026-05-20
updated: 2026-07-15
type: repository-analysis
repo_url: "https://github.com/colbymchenry/codegraph"
category: "ai-programs/ai-harness/mcp"
tags: ["code-intelligence", "knowledge-graph", "mcp", "context", "token-optimization", "typescript", "sqlite", "tree-sitter"]
previous_repo: ""
successor: ""
primary_language: "TypeScript"
license: "MIT"
stars: 59951
forks: 3743
last_checked: 2026-07-15
last_verified: 2026-07-15
evidence: "GitHub GraphQL/REST + releases/advisories + current README/docs + npm metadata + shallow local scan at e871c49; no MCP client smoke test, index-quality evaluation, or benchmark reproduction was performed"
archived_reason: ""
docker_support: false
gpu_required: false
estimated_cpu: "low-to-moderate for normal projects; initial and incremental indexing scale with file count and tree-sitter parsing workload"
estimated_memory: "low-to-moderate; Node.js process + SQLite/tree-sitter WASM; large monorepos may spike during parallel indexing"
estimated_storage: "npm package ~603 KB unpacked before dependencies; per-project .codegraph SQLite index grows with repository size"
status: active
ratings:
  capability: 4
  usability: 4
  performance: 4
  code_quality: 4
  documentation: 4
  community: 4
  maturity: 2
  extensibility: 4
  security: 4
  recommendation: 3
overall_score: 3.7
sources:
  - "[GH] https://github.com/colbymchenry/codegraph — repository and README verified 2026-07-15"
  - "[GH:api] GitHub GraphQL queried 2026-07-15 — 59951 stars, 3743 forks, 90 open issues, 228 open pull requests, 29 releases; main HEAD e871c49a3173a637172f501f21f6a2753ea5a39f; MIT"
  - "[GH:languages] GitHub GraphQL queried 2026-07-15 lists TypeScript as primary; package uses tree-sitter WASM and SQLite"
  - "[GH:releases] https://github.com/colbymchenry/codegraph/releases/tag/v1.4.1 and v1.4.0 checked 2026-07-15 — v1.4.1 published 2026-07-10 adds update notices and fixes uninstall/upgrade, `codegraph_explore` common-word ranking, PHP property-call resolution, slow-storage watchdog behavior and incremental cross-file re-resolution; v1.4.0 improves indexing on slow storage"
  - "[GH:community] GitHub community profile queried 2026-07-15 — health 42%; README and license present; no CONTRIBUTING, Code of Conduct, issue template or PR template returned"
  - "[GH:advisories] GitHub repository security-advisories API queried 2026-07-15 — returned []; this means no repository GHSA was found in this check, not that the package or dependencies are vulnerability-free"
  - "[GH:issues] GitHub GraphQL queried 2026-07-15 — 90 open issues"
  - "[GH:prs] GitHub GraphQL queried 2026-07-15 — 228 open pull requests"
  - "[GH:contributors] GitHub contributors API queried 2026-07-15 — 39 entries; top counts colbymchenry 598, github-actions[bot] 24, omonien 16, andreinknv 7"
  - "[GH:local-scan] shallow clone main@e871c49a3173a637172f501f21f6a2753ea5a39f inspected 2026-07-15 — `git ls-files` returned 496 tracked paths and 2 paths under `.github/workflows/`; README, package.json, schema, extraction, MCP and test layout inspected"
  - "[GH:readme] current README inspected 2026-07-15 — dozens of listed languages/framework-aware resolvers, 100% local SQLite/tree-sitter architecture, `codegraph_explore` as the default/primary MCP tool with additional tools opt-in through `CODEGRAPH_MCP_TOOLS`, manual/global installation, and a 7-repository self-reported benchmark"
  - "[NPM] npm view @colbymchenry/codegraph checked 2026-07-15 — version 1.4.1, MIT, unpackedSize 603273 bytes; package engines require Node >=20 <25"
---

# codegraph

> 面向 Claude Code、Codex、Cursor、OpenCode 的本地代码知识图谱：用 tree-sitter + SQLite 预索引 symbol / call graph / references / routes，让 agent 少 grep、少读文件、少烧 token。
>
> **状态**: `active` · **总分**: 3.7/5 · **推荐度**: 3/5
> **核验版本**: GitHub commit `e871c49a3173a637172f501f21f6a2753ea5a39f`；release/npm `1.4.1`；GitHub API / npm 快照 2026-07-15 [GH:releases][NPM]

## 一句话总结

codegraph 应归入 `ai-programs/ai-harness/mcp`：它不是普通代码搜索工具，而是给 coding agents 提供本地 context/indexing layer，用预计算代码图谱替代反复 grep/read 的探索成本。

## 总体评价

Develata 对 codegraph 的分类判断也成立。它解决的是 MCP-first agent context layer 问题：LLM coding agent 在大型代码库中常把大量 token 和工具调用花在“找入口、找调用链、找相关文件”上；codegraph 预先用 tree-sitter 抽取 symbols、edges、files、routes，存到本地 SQLite/FTS5，再通过 MCP / CLI 暴露给 Claude Code、Cursor、Codex CLI、opencode [GH]。

这个方向与 CLI-Anything 正交。CLI-Anything 是“agent 能操作哪些软件”的 tool access layer；codegraph 是“agent 如何低成本理解代码库”的 knowledge/context layer。二者都不是 end-user agent，本质上都在给 agent 提供 substrate。

项目仍很新：GitHub 创建于 2026-01-18，但已从 0.7.x 进入 1.4.1。当前 README 把 `codegraph_explore` 作为默认/primary MCP tool，其他工具可通过 `CODEGRAPH_MCP_TOOLS` 重新启用；v1.4.0/1.4.1 则集中改善慢存储索引、增量关系重算、查询排名与升级/卸载可靠性 [GH:readme][GH:releases]。本地扫描有 496 个 tracked paths 与 2 个 workflow files [GH:local-scan]。这足以把 maturity 从 1 调到 2，但仍缺跨团队、长期生产证据。

## 推荐度：3/5

> 2026-07 复核：项目已进入 1.x 且测试/发布工程显著增强，因此 maturity 调为 2；但缺独立 benchmark 与长期生产证据，采用推荐仍保持 3/5。


对目标用户——重度使用 Claude Code / Codex / Cursor / OpenCode，在中大型代码库中反复让 agent 做探索、希望降低 token/tool-call 成本的开发者——推荐度是 3/5。

加分理由：价值路径直接，支持多 MCP clients，100% local，无需 API key；README 还给出跨 7 个真实代码库的 benchmark claim [GH:readme]。维持 3 而非 4 的理由：项目仅约半年，1.x 并不自动等于 production maturity；benchmark 未由本次独立复现；不同语言、framework 与 monorepo 的 extraction 精度会决定实际体验。

## 优势

1. **问题定义精准**：coding agents 反复 grep/glob/read 的探索成本是真痛点；codegraph 直接提供预索引 context [GH]。
2. **本地优先**：README 明确 100% local、SQLite database only、no API keys、no external services [GH]。
3. **多 client、explore-first surface**：可通过 MCP 接入 Claude Code、Cursor、Codex CLI、OpenCode 等工具；默认只向 agent 列出 `codegraph_explore`，其他工具仍可显式启用 [GH:readme]。
4. **工程结构与验证显著增强**：当前本地扫描有 496 个 tracked paths 与 2 个 GitHub workflows；仓库还包含 test/eval/benchmark 结构 [GH:local-scan][GH:readme]。
5. **语言/框架覆盖面大**：README 当前列出数十种语言与多类 framework-specific resolver，并支持 exclusions、parallel indexing 与 lightweight updates [GH:readme][GH:releases]。

## 劣势

1. **仍是年轻 1.x**：2026-01 建仓，虽然已到 1.4.1，但当前已转为 explore-first 默认 surface，索引与 resolver 仍在高频迭代 [GH:api][GH:readme][GH:releases][NPM]。
2. **效果依赖语言/框架抽取质量**：tree-sitter symbol graph 对不同语言、动态特性、宏、反射、框架约定的覆盖会不均。
3. **README benchmark 需独立复现**：当前汇总 claim 是 7 个仓库 median-of-4 对比中 58% fewer tool calls、22% faster、file reads 接近零；本次未复现实验，只能作为项目自述证据 [GH:readme]。
4. **治理与 backlog 不匹配声量**：community profile 只有 42%，缺 CONTRIBUTING / PR template / Code of Conduct；当前 open issues=90、open PRs=228，维护压力已明显上升 [GH:community][GH:issues][GH:prs]。
5. **不是语义理解万能药**：它是结构化代码图谱，不是 LLM summary database；复杂业务语义、跨服务语义和运行时行为仍需 agent 读源码、跑测试或调试。

---

## 适合什么场景

- 中大型代码库中的 agent exploration：找入口、调用链、影响范围、相关 symbols。
- Claude Code / Codex / Cursor / OpenCode 用户希望减少工具调用、token 与探索时间。
- 需要本地、无云端上传、无 API key 的代码索引方案。
- 研究 agent context infrastructure：如何把 tree-sitter、SQLite、MCP、instructions 组合成 agent-readable memory layer。
- 想为新语言/新 agent target 扩展代码智能工具的开发者。

## 不适合什么场景

- 需要成熟 IDE 级语义分析、类型推断、跨项目索引和企业级治理的团队。
- 主要代码是高度动态、生成式、宏重、运行时反射强的项目；图谱可能漏边或误边。
- 不愿让工具写入 agent config / instructions file 的用户。
- 小型仓库或一次性脚本：grep/read 成本本来很低，预索引收益有限。
- 把 benchmark claim 当成所有项目上的保证，而不做本地验证的场景。

## 与类似项目对比

| 项目 | 定位 | 相对本项目 |
|------|------|-----------|
| Context7 | 文档/API grounding MCP | Context7 提供外部库文档；codegraph 索引当前本地代码库的 symbols 与调用关系 |
| MCP Servers | 官方 reference MCP servers 集合 | MCP Servers 展示协议和工具范式；codegraph 是针对 code intelligence 的单一产品化 server |
| codebase-memory-mcp | 代码库持久记忆/上下文 MCP | 二者都减少重复探索；codegraph 更强调静态结构图、调用链与精确 context assembly |
| GitHub MCP Server | GitHub 平台数据与操作 MCP | GitHub MCP 操作远端 repo/issues/PR；codegraph 对本地 checkout 做结构化索引 |

上述项目按 `ai-programs/ai-harness/mcp` 同类或相邻 agent infrastructure 范围做定位级对比，未按同一 10 维度框架深审。

---

## 它能做什么

capability 评分 4/5。

README 与本地 CLAUDE.md 显示 codegraph 能提供：

- `npx @colbymchenry/codegraph` 交互式启动，或全局安装后用 `codegraph index` 建立项目索引 [GH:readme]；
- tree-sitter WASM 抽取 README 所列数十种语言的 symbols，SQLite/FTS5 存储与搜索 [GH:readme][GH:local-scan]；
- callers、callees、impact radius、context building、route recognition、framework-aware references [GH][GH:local-scan]；
- MCP server 默认把 `codegraph_explore` 作为 primary tool 来组织 query expansion、graph expansion、ranking 与 context budget；其他 MCP tools 可通过环境变量显式启用 [GH:readme][GH:local-scan]；
- file watcher 使 index 随代码变化同步 [GH]。

不给 5：支持语言和框架很多，但不是所有语言/项目都可等质量覆盖；也缺少成熟 IDE/LSP 那种深类型语义保证。

## 运行环境与资源占用

| 场景 | CPU | 内存 | 存储 | 说明 |
|------|-----|------|------|------|
| 小中型项目 | 低到中等 | 低到中等 | `.codegraph` SQLite index | 初次 index 后查询较轻；Node.js + SQLite/tree-sitter runtime |
| 大型 monorepo | 中等，初次索引较明显 | 可能有峰值 | index 随 files/nodes 增长 | 当前 README benchmark 含约 10k files 的 VS Code，但未给通用资源保证；应在目标 repo 实测 [GH:readme] |

- **运行时**：Node.js `>=20.0.0 <25.0.0`；tree-sitter WASM、SQLite index 与 TypeScript CLI/MCP server [NPM][GH:local-scan]。
- **操作系统**：README 标注 Windows / macOS / Linux supported [GH]。
- **Docker**：无官方 Docker；它是本地 CLI/MCP 工具。
- **GPU**：不需要。
- **外部依赖**：npm package、本地 agent config、SQLite backend、tree-sitter WASM/native components。

performance 评分 4/5。预索引换低查询成本是正确 trade-off；README 当前汇总自报 58% fewer tool calls、22% faster、file reads 接近零，但本次未独立复现，所以不给 5 [GH:readme]。

## 上手体验

评分 4/5。

README 的 quick start 很短：`npx @colbymchenry/codegraph` 可进入交互路径；手动模式是全局安装后在项目中运行 `codegraph index`，再把 MCP command 配到 client [GH:readme]。默认只列出 primary `codegraph_explore`，也减少了 agent 的工具选择负担；需要细粒度 tools 时仍可 opt in [GH:readme]。

扣分点：自动/交互配置会触及 agent/MCP settings，需要用户理解影响；项目虽已 1.x，release 仍频繁改动 indexing/config/MCP surface，升级前应重建索引并核对配置 [GH:releases]。

## 代码质量

评分 4/5。

local scan 的 `git ls-files` 返回 496 个 tracked paths，其中 2 个位于 `.github/workflows/`；package scripts 包含 build、test、eval、clean，package 依赖保持相对轻量 [GH:local-scan][NPM]。这说明项目虽年轻，但对 extraction、SQLite backend、framework integration、MCP 与 evaluation 的工程验证已明显增强。

不给 5：community profile 仍缺 CONTRIBUTING / PR template / Code of Conduct；本次未运行测试，也未复现 benchmark；open PR 228 使快速扩张期的审查负担不可忽略 [GH:community][GH:prs]。

## 可扩展性

评分 4/5。

CLAUDE.md 显示新增 agent target 只需在 `src/installer/targets/` 增加文件并注册；语言 extractor、framework resolver、MCP tools、context builder 等模块边界明确 [GH:local-scan]。对新 agent、新语言、新 framework 都有可扩展路径。

不给 5：扩展 tree-sitter extractor / framework resolver 需要理解内部 graph schema 与测试约束；目前还不是成熟 plugin ecosystem，也没有广泛第三方扩展市场。

## 文档质量

评分 4/5。

README 覆盖 pitch、benchmark、quick start、manual setup、features、language/framework support；CLAUDE.md 则提供贡献者级架构说明 [GH][GH:local-scan]。对一个年轻 1.x 项目而言，文档质量高。

扣分项：缺 CONTRIBUTING；GitHub docs/wikis 治理不完整；benchmark 叙述强，需要更可复现实验脚本、环境 pinning 与独立验证说明。

## 社区与成熟度

| 维度 | 评分 | 说明 |
|------|------|------|
| 社区活跃度 | 4/5 | 59.9k stars、3.7k forks、39 contributors；但 open issues 90、open PRs 228，且 governance profile 仅 42%，不因短期 star 激增给 5 [GH:api][GH:contributors][GH:issues][GH:prs][GH:community]。 |
| 成熟度 | 2/5 | 2026-01 建仓，npm/release 已到 1.4.1，测试、CI、benchmark/eval 与配置面增强；但项目仅约半年，核心 MCP surface 刚重构，缺长期生产证据 [GH:api][GH:releases][GH:local-scan][NPM]。 |

## 安全与风险

评分 4/5。

正面：本地运行、无 API key、无外部服务、SQLite database only；本次 GitHub Security Advisories 查询未发现 repository GHSA [GH:readme][GH:advisories]。这不是“安全证明”，但相较上传云端的 code-intelligence service，数据边界更容易收敛。

风险：它会读取和索引代码库，并修改 agent/MCP/instructions 配置；如果 installer 写配置有 bug，可能影响 agent 行为。npm 包供应链、tree-sitter/WASM/native SQLite 依赖也需要正常的 dependency hygiene。由于缺 SECURITY.md 和治理文件，安全流程不如成熟项目完整 [GH:community]。

## 学习价值

codegraph 的学习价值很高：

- 研究如何把静态代码分析结果变成 agent 可消费的 MCP tools。
- 学习 tree-sitter + SQLite/FTS5 + graph traversal + context builder 的轻量架构。
- 思考 agentic coding 的真正瓶颈：不是每次都“模型不够聪明”，很多时候是 context acquisition 太昂贵。
- 与 CLI-Anything、RTK、cal.diy 一起看，可以形成 agent infrastructure 的分层图景：tool access、context cache、token mediation、scheduling substrate。
