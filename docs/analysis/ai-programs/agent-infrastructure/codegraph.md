---


title: "codegraph"
created: 2026-05-20
updated: 2026-05-21
type: repository-analysis
repo_url: "https://github.com/colbymchenry/codegraph"
category: "ai-programs/agent-infrastructure"
tags: ["code-intelligence", "knowledge-graph", "mcp", "context", "token-optimization", "typescript", "sqlite", "tree-sitter"]
previous_repo: ""
successor: ""
primary_language: "TypeScript"
license: "MIT"
stars: 6658
forks: 439
last_checked: 2026-05-20
last_verified: 2026-05-20
evidence: "GitHub API + README + repository local scan + npm registry metadata; not deployed in production by Develata"
archived_reason: ""
docker_support: false
gpu_required: false
estimated_cpu: "low-to-moderate for normal projects; initial indexing scales with file count and tree-sitter parsing workload"
estimated_memory: "low-to-moderate; Node.js process + SQLite/tree-sitter runtime; large monorepos may spike during indexing"
estimated_storage: "npm package ~7.7MB unpacked; per-project .codegraph SQLite index grows with repository size"
status: active
sharing_candidate: true
ratings:
  capability: 4
  usability: 4
  performance: 4
  code_quality: 4
  documentation: 4
  community: 4
  maturity: 1
  extensibility: 4
  security: 4
  recommendation: 3
overall_score: 3.6
sources:
  - "[GH] https://github.com/colbymchenry/codegraph"
  - "[GH:api] https://api.github.com/repos/colbymchenry/codegraph queried 2026-05-20; stars=6658, forks=439, open_issues_count=55, created_at=2026-01-18, pushed_at=2026-05-20, license=MIT"
  - "[GH:languages] https://api.github.com/repos/colbymchenry/codegraph/languages queried 2026-05-20; TypeScript dominant"
  - "[GH:releases] https://api.github.com/repos/colbymchenry/codegraph/releases?per_page=1 queried 2026-05-20; latest GitHub release=v0.7.10 published 2026-05-19"
  - "[GH:community] https://api.github.com/repos/colbymchenry/codegraph/community/profile queried 2026-05-20; health_percentage=42; README and license present; no CONTRIBUTING or PR template"
  - "[GH:advisories] https://api.github.com/repos/colbymchenry/codegraph/security-advisories?per_page=5 queried 2026-05-20; returned []"
  - "[GH:issues] https://api.github.com/search/issues?q=repo%3Acolbymchenry%2Fcodegraph%20type%3Aissue%20state%3Aopen queried 2026-05-20; total_count=19"
  - "[GH:prs] https://api.github.com/search/issues?q=repo%3Acolbymchenry%2Fcodegraph%20type%3Apr%20state%3Aopen queried 2026-05-20; total_count=36"
  - "[GH:closed-recent] https://api.github.com/search/issues?q=repo%3Acolbymchenry%2Fcodegraph%20type%3Aissue%20state%3Aclosed%20closed%3A%3E%3D2026-05-01 queried 2026-05-20; total_count=18"
  - "[GH:merged-recent] https://api.github.com/search/issues?q=repo%3Acolbymchenry%2Fcodegraph%20type%3Apr%20state%3Aclosed%20merged%3A%3E%3D2026-05-01 queried 2026-05-20; total_count=29"
  - "[GH:contributors] https://api.github.com/repos/colbymchenry/codegraph/contributors?per_page=1&anon=false queried 2026-05-20; pagination last page 12"
  - "[GH:local-scan] local clone /tmp/repo-wiki-analysis/codegraph at commit 8125798e683fc9bc500c1eb5edcc559b79d9b940; git ls-files=140, TypeScript files=116, test/spec-ish files=27, markdown files=7, workflows=0; checked package.json, README.md, CLAUDE.md, vitest.config.ts"
  - "[NPM] https://registry.npmjs.org/%40colbymchenry%2Fcodegraph queried 2026-05-20; latest=0.7.11, versions=20, unpackedSize=7718877"
---

# codegraph

> 面向 Claude Code、Codex、Cursor、OpenCode 的本地代码知识图谱：用 tree-sitter + SQLite 预索引 symbol / call graph / references / routes，让 agent 少 grep、少读文件、少烧 token。
>
> **状态**: `active` · **总分**: 3.6/5 · **推荐度**: 3/5
> **核验版本**: GitHub commit `8125798e683fc9bc500c1eb5edcc559b79d9b940`；GitHub API / npm 快照 2026-05-20

## 一句话总结

codegraph 也应归入 agent infrastructure：它不是普通代码搜索工具，而是给 coding agents 提供本地 context/indexing layer，用预计算代码图谱替代反复 grep/read 的探索成本。

## 总体评价

Develata 对 codegraph 的分类判断也成立。它解决的是 agent infrastructure 中的 context layer 问题：LLM coding agent 在大型代码库中常把大量 token 和工具调用花在“找入口、找调用链、找相关文件”上；codegraph 预先用 tree-sitter 抽取 symbols、edges、files、routes，存到本地 SQLite/FTS5，再通过 MCP / CLI 暴露给 Claude Code、Cursor、Codex CLI、opencode [GH]。

这个方向与 CLI-Anything 正交。CLI-Anything 是“agent 能操作哪些软件”的 tool access layer；codegraph 是“agent 如何低成本理解代码库”的 knowledge/context layer。二者都不是 end-user agent，本质上都在给 agent 提供 substrate。

项目本身很新：GitHub 创建于 2026-01-18，npm latest 为 0.7.11，GitHub latest release v0.7.10 [GH:api][GH:releases][NPM]。但它不像纯概念 repo：local scan 显示 116 个 TypeScript 文件、27 个 test/spec-ish 文件；CLAUDE.md 详细描述 extraction pipeline、SQLite backend、installer target、MCP server instructions 与测试结构 [GH:local-scan]。因此推荐试用和观察，但成熟度不能高估。

## 推荐度：3/5

> 2026-06 推荐度重校准：maturity=1，缺生产证据，installer/config 修改风险存在；采用推荐应保守。


对目标用户——重度使用 Claude Code / Codex / Cursor / OpenCode，在中大型代码库中反复让 agent 做探索、希望降低 token/tool-call 成本的开发者——推荐度是 3/5。

加分理由：它的价值路径非常直接，安装命令短，支持多 agent，100% local，无需 API key；README 还给出跨 6 个真实代码库的 benchmark claim [GH]。维持 3 而非 4 的理由：项目只有四个月，版本仍在 0.x；benchmark 是项目自述，未由本次独立复现；且不同语言/框架的 extraction 精度会决定实际体验。

## 优势

1. **问题定义精准**：coding agents 反复 grep/glob/read 的探索成本是真痛点；codegraph 直接提供预索引 context [GH]。
2. **本地优先**：README 明确 100% local、SQLite database only、no API keys、no external services [GH]。
3. **多 agent 支持**：installer 支持 Claude Code、Cursor、Codex CLI、opencode，并能写入各自 MCP/instructions 配置 [GH][GH:local-scan]。
4. **工程结构清晰**：CLAUDE.md 描述 files → tree-sitter extraction → DB → resolver → graph query/context builder → MCP/CLI 的 layered pipeline [GH:local-scan]。
5. **社区动能健康**：6.6k stars、open issues 19、近期 closed issues 18 / merged PRs 29，说明早期维护活跃且 backlog 暂未失控 [GH:api][GH:issues][GH:closed-recent][GH:merged-recent]。

## 劣势

1. **成熟度低**：2026-01 建仓，npm 0.7.x，仍处于快速迭代期 [GH:api][NPM]。
2. **效果依赖语言/框架抽取质量**：tree-sitter symbol graph 对不同语言、动态特性、宏、反射、框架约定的覆盖会不均。
3. **README benchmark 需独立复现**：92% fewer tool calls、71% faster 是强 claim，但本次未复现实验，只能作为项目自述证据 [GH]。
4. **治理文件不足**：GitHub community profile 只有 42%，缺 CONTRIBUTING / PR template / Code of Conduct 等常规社区治理文件 [GH:community]。
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
| CLI-Anything | agent-facing CLI/tool harness registry | CLI-Anything 扩展 agent 可操作工具；codegraph 优化 agent 对代码库的上下文获取 |
| RTK | agent shell 输出 token 压缩代理 | RTK 压缩已有命令输出；codegraph 改变探索路径，让 agent 少调用 grep/read |
| oh-my-openagent | coding-agent orchestration harness | oh-my-openagent 管 workflow/roles；codegraph 提供可接入这些 workflow 的 code-intelligence substrate |
| cal.diy | scheduling / booking infrastructure | cal.diy 是时间协调层；codegraph 是代码知识层 |

上述项目按 `ai-programs/agent-infrastructure` 同类范围做定位级对比，未按同一 10 维度框架深审。

## 个人主页 sharing 候选

是。适合写成“Agent 的 L1 cache / codebase index”主题：当 agentic coding 从 toy repo 进入大型代码库，问题不再只是模型会不会写代码，而是它如何经济地取得正确上下文。

---

## 它能做什么

capability 评分 4/5。

README 与本地 CLAUDE.md 显示 codegraph 能提供：

- `npx @colbymchenry/codegraph` 交互式安装，自动配置 Claude Code、Cursor、Codex CLI、opencode [GH]；
- `codegraph init -i` 为项目建立 `.codegraph/` index [GH]；
- tree-sitter 抽取多语言 symbols，SQLite/FTS5 存储与搜索 [GH:local-scan]；
- callers、callees、impact radius、context building、route recognition、framework-aware references [GH][GH:local-scan]；
- MCP server 与 CLI 共用同一 code intelligence library [GH:local-scan]；
- file watcher 使 index 随代码变化同步 [GH]。

不给 5：支持语言和框架很多，但不是所有语言/项目都可等质量覆盖；也缺少成熟 IDE/LSP 那种深类型语义保证。

## 运行环境与资源占用

| 场景 | CPU | 内存 | 存储 | 说明 |
|------|-----|------|------|------|
| 小中型项目 | 低到中等 | 低到中等 | `.codegraph` SQLite index | 初次 index 后查询较轻；Node.js + SQLite/tree-sitter runtime |
| 大型 monorepo | 中等，初次索引较明显 | 可能有峰值 | index 随 files/nodes 增长 | README benchmark 最大例子为 Swift Compiler 25,874 files / 272,898 nodes，称索引用时 under 4 minutes [GH] |

- **运行时**：Node.js 18+；package.json engines 为 `>=18.0.0 <25.0.0`，CLAUDE.md 提到 Node 25.x hard exit [GH][GH:local-scan]。
- **操作系统**：README 标注 Windows / macOS / Linux supported [GH]。
- **Docker**：无官方 Docker；它是本地 CLI/MCP 工具。
- **GPU**：不需要。
- **外部依赖**：npm package、本地 agent config、SQLite backend、tree-sitter WASM/native components。

performance 评分 4/5。预索引换低查询成本是正确 trade-off；README benchmark 宣称 92% fewer tool calls、71% faster，但本次未独立复现，所以不给 5。

## 上手体验

评分 4/5。

README 的 quick start 很短：`npx @colbymchenry/codegraph` 安装，`codegraph init -i` 初始化项目；installer 会自动配置 Claude Code、Cursor、Codex CLI、opencode，并支持 non-interactive flags [GH]。这对 agent infrastructure 来说是很强的 usability 信号。

扣分点：它会修改 agent 配置和 instructions 文件，需要用户理解影响；项目仍在 0.x，近期 release notes 也显示 MCP handshake、Windows console mojibake、module-qualified symbol lookup 等问题仍在快速修复 [GH:releases]。

## 代码质量

评分 4/5。

local scan 显示 140 tracked files、116 个 TypeScript 文件、27 个 test/spec-ish 文件；package scripts 包含 build、test、eval、clean；CLAUDE.md 对架构、模块、installer target、MCP server instructions、tests、release 注意事项写得非常具体 [GH:local-scan]。这说明项目虽小但结构清晰，测试关注 installer、SQLite backend、framework integration、evaluation runner 等关键面。

不给 5：未见 GitHub workflows；community profile 缺 CONTRIBUTING / PR template；本次未运行测试，也未复现 benchmark。早期项目的实现仍需更多 releases 验证。

## 可扩展性

评分 4/5。

CLAUDE.md 显示新增 agent target 只需在 `src/installer/targets/` 增加文件并注册；语言 extractor、framework resolver、MCP tools、context builder 等模块边界明确 [GH:local-scan]。对新 agent、新语言、新 framework 都有可扩展路径。

不给 5：扩展 tree-sitter extractor / framework resolver 需要理解内部 graph schema 与测试约束；目前还不是成熟 plugin ecosystem，也没有广泛第三方扩展市场。

## 文档质量

评分 4/5。

README 覆盖 pitch、benchmark、quick start、manual setup、features、language/framework support；CLAUDE.md 则提供贡献者级架构说明 [GH][GH:local-scan]。对一个 0.x 项目而言，文档质量高。

扣分项：缺 CONTRIBUTING；GitHub docs/wikis 治理不完整；benchmark 叙述强，需要更可复现实验脚本、环境 pinning 与独立验证说明。

## 社区与成熟度

| 维度 | 评分 | 说明 |
|------|------|------|
| 社区活跃度 | 4/5 | 6.6k stars、439 forks、约 12 contributor pages；open issues 19、open PRs 36，近期 close/merge 活跃，早期社区动能健康 [GH:api][GH:contributors][GH:issues][GH:prs][GH:closed-recent][GH:merged-recent]。 |
| 成熟度 | 1/5 | 2026-01 建仓，npm latest 0.7.11；仍处 0.x 快速迭代，按边界是预发布/alpha 级成熟度 [GH:api][NPM]。 |

## 安全与风险

评分 4/5。

正面：本地运行、无 API key、无外部服务、SQLite database only；GitHub Security Advisories 查询为空 [GH][GH:advisories]。相比需要云端上传代码的 code intelligence 服务，它的数据边界更容易接受。

风险：它会读取和索引代码库，并修改 agent/MCP/instructions 配置；如果 installer 写配置有 bug，可能影响 agent 行为。npm 包供应链、tree-sitter/WASM/native SQLite 依赖也需要正常的 dependency hygiene。由于缺 SECURITY.md 和治理文件，安全流程不如成熟项目完整 [GH:community]。

## 学习价值

codegraph 的学习价值很高：

- 研究如何把静态代码分析结果变成 agent 可消费的 MCP tools。
- 学习 tree-sitter + SQLite/FTS5 + graph traversal + context builder 的轻量架构。
- 思考 agentic coding 的真正瓶颈：不是每次都“模型不够聪明”，很多时候是 context acquisition 太昂贵。
- 与 CLI-Anything、RTK、cal.diy 一起看，可以形成 agent infrastructure 的分层图景：tool access、context cache、token mediation、scheduling substrate。