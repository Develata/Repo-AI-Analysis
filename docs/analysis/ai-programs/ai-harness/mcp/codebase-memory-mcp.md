---
title: "codebase-memory-mcp"
created: 2026-06-18
updated: 2026-07-01
type: repository-analysis
repo_url: "https://github.com/DeusData/codebase-memory-mcp"
category: "ai-programs/ai-harness/mcp"
tags: ["mcp", "code-intelligence", "knowledge-graph", "tree-sitter", "c", "coding-agents", "local-first"]
previous_repo: ""
successor: ""
primary_language: "C"
license: "MIT"
stars: 23343
forks: 1705
last_checked: 2026-07-01
last_verified: 2026-07-01
evidence: "GitHub authenticated API + README + SECURITY/CONTRIBUTING + releases + docs/BENCHMARK + local scan; no local install/index benchmark or security audit run"
archived_reason: ""
docker_support: false
gpu_required: false
estimated_cpu: "low for queries after indexing; indexing cost scales with repository size, language mix, graph passes, optional semantic features, and storage writes"
estimated_memory: "README claims RAM-first indexing with memory released after indexing; real peak depends on repo size and enabled features; not locally benchmarked"
estimated_storage: "single binary plus SQLite graph store under user cache; index size grows with codebase and optional cross-repo graph/semantic data"
status: active
ratings:
  capability: 4
  usability: 4
  performance: 3
  code_quality: 4
  documentation: 4
  community: 4
  maturity: 2
  extensibility: 4
  security: 3
  recommendation: 3
overall_score: 3.5
sources:
  - "[GH] https://github.com/DeusData/codebase-memory-mcp"
  - "[GH:api] GitHub CLI/API queried 2026-07-01; repo=DeusData/codebase-memory-mcp, stars=23343, forks=1705, subscribers=85, REST open_issues_count=209, created_at=2026-02-24T22:01:00Z, pushed_at=2026-07-01T11:26:36Z, default_branch=main, primary_language=C, license=MIT, archived=false"
  - "[GH:languages] GitHub languages endpoint queried 2026-07-01; C=32,329,326 bytes, C++=3,692,287, Shell=284,859, TypeScript=132,108, Python=68,319, JavaScript=23,296 plus smaller languages"
  - "[GH:issues-prs] GitHub search/API queried 2026-07-01; open issues=141, open PRs=68; REST open_issues_count=209 includes issues and PRs; sampled recent PR/issue titles include #736 raw-JSON args smoke coverage, #735 available_projects JSON validity, #734 Java/Spring @RequestMapping prefix, #733 cross repo intelligence on kinesis, #732 Python LSP memoization"
  - "[GH:releases] GitHub releases endpoint queried 2026-07-01; latest sampled v0.8.1 published 2026-06-12, followed by 0.8.0/0.7.0/0.6.1/0.6.0 also shown in API sample"
  - "[GH:community] GitHub community profile queried 2026-07-01; health_percentage=100; README, license, code_of_conduct, CONTRIBUTING, PR template present; issue_template reported null"
  - "[GH:contributors] GitHub contributors endpoint queried 2026-07-01; first paginated records count=56; top contributor DeusData=923 commits in API sample"
  - "[GH:advisories] GitHub security advisories endpoint queried 2026-07-01; returned [] in this check"
  - "[GH:local-scan] local clone /opt/data/tmp/repo_wiki_codebase_memory_mcp/codebase-memory-mcp at commit 4a422856e34bcb4273773926a377e4798d5f4251 inspected 2026-07-01; git ls-files=1773, markdown/mdx files=16, test/spec-ish paths=171, GitHub workflows=21; inspected README.md, SECURITY.md, CONTRIBUTING.md, Makefile.cbm, docs/BENCHMARK.md, docs/EVALUATION_PLAN.md, graph-ui/package.json, source tree roots"
  - "[GH:readme] README.md inspected locally 2026-07-01; describes 158 tree-sitter languages, Hybrid LSP for 9 language families, 14 MCP tools, single static binary, 11 agent integrations, optional graph UI at localhost:9749, auto-index, team-shared graph artifacts, and benchmark/research claims"
  - "[GH:security] SECURITY.md inspected locally 2026-07-01; states the tool reads source files across the codebase, writes agent configuration files, spawns background processes, claims it does not upload source/query/env/telemetry during MCP operation, performs one best-effort GitHub release metadata update check after initialize, and documents private vulnerability reporting plus build/release security layers; this run did not independently network-test those claims"
  - "[GH:contributing] CONTRIBUTING.md inspected locally 2026-07-01; says project is a pure C binary rewritten from Go in v0.5.0; build requires C compiler/make/zlib/Git, tests use scripts/test.sh with ASan+UBSan and ~2040 cases, lint uses clang-tidy/cppcheck/clang-format, security audit uses Makefile.cbm security"
  - "[GH:benchmark] docs/BENCHMARK.md inspected locally 2026-07-01; v0.3.0 language benchmark says 63 languages, 12 questions each for programming languages, real repos, PASS/PARTIAL/FAIL grading, Apple M3 Pro, 2026-03-01; summary table shows many language scores but this repo-wiki run did not reproduce the benchmark"
  - "[GH:evaluation-plan] docs/EVALUATION_PLAN.md inspected locally 2026-07-01; working plan for 159-language evaluation, explicitly marked as plan not result set"
  - "[arXiv] https://arxiv.org/abs/2603.27277 linked from README as project preprint; not independently reviewed in this analysis"
---

# codebase-memory-mcp

> 面向 AI coding agents 的本地代码知识图谱 MCP server：用 C 实现、tree-sitter / Hybrid LSP extraction、SQLite graph store 和 MCP tools，把代码库探索从反复 grep/read 改成结构化查询。
>
> **状态**: `active` · **总分**: 3.5/5 · **推荐度**: 3/5

## 一句话总结

codebase-memory-mcp 是值得持续跟踪和局部试验的 code intelligence MCP：方向非常对，但项目年轻、claim 极强、权限面深，采用上应先审计和隔离 benchmark。

## 总体评价

这个项目的定位非常清楚：给 coding agents 一个本地、持久、结构化的 codebase memory。README 声称它能把平均 repo 在毫秒级完整索引，把 Linux kernel 28M LOC / 75K files 在约 3 分钟内索引，结构化查询低于 1ms；支持 158 种 tree-sitter languages、9 个 Hybrid LSP language families、14 个 MCP tools，并以 single static binary 形式分发 [GH:readme]。它的能力叙事与 Develata 当前的 Hermes / CodeGraph / repo-analysis 工作流高度相关。

从 local scan 看，它不是空壳 README：仓库有 1773 个 tracked files、171 个 test/spec-ish paths、21 个 workflows，主体是 C/C++，含 `src/`、`internal/cbm/`、`vendored/`、`tests/`、`graph-ui/`、`scripts/`、`docs/` 等 [GH:local-scan]。CONTRIBUTING 明确说 v0.5.0 后从 Go 改写为 pure C，并描述 build/test/lint/security audit 流程；SECURITY.md 也很罕见地直接承认项目会读整个代码库、写 agent config、spawn background processes，并声称 MCP runtime 不上传源码/查询/env/telemetry，但会在 initialize 后做一次 GitHub release metadata update check；本轮没有做 network trace 来独立验证该网络行为声明 [GH:contributing][GH:security]。

主要问题在于：它太新、太强 claim、太高权限。2026-02 建仓，v0.8.1 仍是 0.x；open issues/PR backlog 已到 141 / 68；性能、质量、SLSA/VirusTotal、token reduction 等主张本次都未独立复现 [GH:api][GH:issues-prs][GH:releases]。所以它非常适合收录，但推荐度应停在 3：先作为研究/试用/对照 benchmark 对象，而不是默认替换现有 code intelligence layer。

## 推荐度：3/5

**定位**：适合熟悉 MCP、coding-agent 配置、安全审计和本地工具链的高级用户，用于试验 code intelligence substrate、对照 CodeGraph/grep/LSP/RAG 型方案，或在隔离 repo 上评估索引质量和 token 节省。

推荐它，是因为问题定义正中 agent infrastructure：LLM agent 的高成本并不只来自模型，也来自低效探索路径；把 codebase 变成 queryable graph 的方向是正确的 [GH:readme]。它用 C + vendored grammars + single binary 的路线，也值得与 TypeScript/Node、Rust、LSP-server 方案比较。

不推荐普通开发者直接全局安装并信任它修改 agent config。SECURITY.md 自己也说：它会读取源码、写 agent 配置、spawn background processes；不舒服就先审计源码 [GH:security]。在没有本地 benchmark、安全审计、真实大型 repo 验证之前，采用推荐只能是 3/5。

## 优势

1. **价值函数很强**：把 agent 探索从 file-by-file search 转成 graph queries，理论上能显著降低 token/tool-call 成本 [GH:readme]。
2. **覆盖面大**：README 声称 158 languages、9 种 Hybrid LSP 语义增强、HTTP/gRPC/GraphQL/tRPC/cross-service linking、semantic search、ADR、dead code detection 等 [GH:readme]。
3. **部署叙事简单**：single static binary，macOS/Linux/Windows，一行 install 或手动下载 release；无需 Docker、runtime、API key [GH:readme]。
4. **安全意识显性**：SECURITY.md 明确列出文件读写、agent config 修改、background processes、runtime update check 和 private vulnerability reporting 流程 [GH:security]。
5. **工程体量真实**：local scan 显示 1773 files、171 test/spec-ish paths、21 workflows、C/C++ 主体、vendored grammars 与 graph UI [GH:local-scan]。

## 劣势

1. **成熟度低**：2026-02 建仓、v0.8.x，仍是高速迭代早期项目 [GH:api][GH:releases]。
2. **README claim 极强但未复现**：Linux kernel 3 分钟、sub-ms query、120x fewer tokens、83% answer quality 等都需要独立 benchmark；本条只记录为项目自述或其 docs benchmark，不当作已复现事实 [GH:readme][GH:benchmark][arXiv]。
3. **权限面很深**：读源码、写 agent config、安装 hooks/skills/instructions、spawn processes；安全 section 诚实，但风险不因诚实而消失 [GH:security]。
4. **issue/PR backlog 高**：141 open issues、68 open PRs，对 2026-02 建仓的高权限基础设施项目是必须关注的维护压力信号 [GH:issues-prs]。
5. **语言/框架支持质量不可能等距**：158 languages 是覆盖面，不等于每种语言都有 IDE/LSP 级语义精度；docs/BENCHMARK 也显示不同语言得分分层 [GH:benchmark]。

---

## 适合什么场景

- 想比较 CodeGraph / LSP / grep / AST index / semantic RAG 等 agent code intelligence 路线。
- 在隔离仓库上评估 MCP codebase memory 是否能降低 agent token 与探索工具调用。
- 需要完全本地、single binary、不依赖云端 API 的 code intelligence substrate。
- 熟悉 MCP 配置并愿意审计 installer、agent config 修改和 background process 行为。
- 研究 C 实现的 tree-sitter graph pipeline、SQLite graph store、MCP tool design。

## 不适合什么场景

- 对安全权限敏感但没有时间审计源码/installer/release provenance 的用户。
- 需要成熟、稳定、长期生产验证的企业 code intelligence 基础设施。
- 以为“支持 158 languages”就等于所有语言都有 IDE/LSP 级语义精度的场景。
- 不愿让工具修改 Claude/Codex/Gemini/OpenCode/Aider 等 agent 配置的用户。
- 只处理小型 repo：预索引收益可能不足以覆盖安装和治理成本。

## 与类似项目对比

| 项目 | 定位 | 相对本项目 |
|------|------|-----------|
| codegraph | TypeScript/SQLite/tree-sitter 的 coding-agent code graph | codegraph 更轻、更早进入本地 wiki；codebase-memory-mcp claim 更激进，C single binary 与更多语言/工具覆盖，但成熟度更需验证。 |
| Context7 | 通过 MCP 提供库文档上下文 | Context7 偏外部文档/库 API context；codebase-memory-mcp 偏本地 codebase structural graph。 |
| GitHub MCP Server | GitHub API MCP server | GitHub MCP 连接代码托管平台；codebase-memory-mcp 连接本地代码结构，两者工具面不同。 |
| Chrome DevTools MCP | 浏览器/页面调试 MCP | Chrome DevTools MCP 面向浏览器 runtime；codebase-memory-mcp 面向代码库静态/半语义结构。 |

上述项目按 `ai-programs/ai-harness/mcp` 同类范围做定位级对比，未按同一 10 维度框架深审。

---

## 它能做什么

capability 评分 4/5。

README 声称的能力包括：

- full-index codebase into persistent knowledge graph [GH:readme]；
- 158 vendored tree-sitter grammars，9 个语言族的 Hybrid LSP semantic type resolution [GH:readme]；
- 14 MCP tools：indexing、search、trace、architecture、impact analysis、Cypher-like queries、dead code detection、cross-service HTTP linking、ADR management 等 [GH:readme]；
- BM25 full-text search、semantic search、structural graph search、code search [GH:readme]；
- HTTP/gRPC/GraphQL/tRPC route/service detection 与 cross-service linking [GH:readme]；
- single static binary + auto-detect 11 coding agents 并写入 MCP entries/instructions/hooks [GH:readme]；
- optional local graph UI at localhost:9749 [GH:readme]。

不给 5：这些是 broad claims，未在本条中独立跑 install/index/benchmark；多语言语义抽取的真实质量需要按语言抽样验证。docs/BENCHMARK 提供了 v0.3.0 的多语言评估表，但那是项目自带 benchmark，本轮没有复现 [GH:benchmark]。

## 运行环境与资源占用

| 场景 | CPU | 内存 | 存储 | 说明 |
|------|-----|------|------|------|
| 小中型 repo 索引 | 低到中等 | 中等峰值 | SQLite graph store | README 称平均 repo 毫秒级；本次未复现 [GH:readme]。 |
| 大型 monorepo / Linux kernel 级 | 中到高 | 峰值依 repo 与 feature 而定 | graph store 可明显增长 | README 称 Linux kernel 28M LOC / 75K files 约 3 分钟；需独立验证 [GH:readme]。 |
| 查询阶段 | 低 | 低到中等 | 读取既有 index | README 声称 structural queries under 1ms；本次未 benchmark [GH:readme]。 |
| Graph UI | 低到中等 | 浏览器/本地 HTTP server | 前端资源与 graph data | 可选 UI variant 在 localhost:9749 暴露 3D graph visualization [GH:readme]。 |

- **运行时**：single static binary；C implementation，SQLite graph store [GH:readme][GH:contributing]。
- **操作系统**：README 标 macOS/Linux/Windows supported [GH:readme]。
- **Docker**：README 主打 no Docker/no runtime dependencies；本次未确认官方 Docker image support [GH:readme]。
- **GPU**：不需要。
- **外部网络**：SECURITY.md 声称 MCP runtime 不上传源码/查询/env/telemetry；但 initialize 后有一次 best-effort GitHub release metadata update check，install/update 是单独的用户发起下载行为。本轮未做 network trace，只把它作为项目安全文档声明记录 [GH:security]。

performance 评分 3/5。设计上很强调效率，C + RAM-first + SQLite + LZ4 的路线合理；但 Linux kernel 3 分钟、sub-ms query、120x token reduction 等强 benchmark 本次完全未复现。这里的 3 表示“性能设计方向有潜力，但实测证据不足”，不是接受 README claim。

## 上手体验

评分 4/5。

README 的 quick start 极短：macOS/Linux `curl ... install.sh | bash`，Windows 下载 `install.ps1`，manual install 可从 release 下载 archive；安装后 restart coding agent，再说 “Index this project” [GH:readme]。对熟悉 agent/MCP 的用户，这种路径很顺。

扣分点在安全与透明性：curl pipe shell、本地 agent config 修改、hooks/instructions 写入、background watcher 都需要用户理解。它提供 `--skip-config` 等选项，但保守用户仍应先下载、读脚本、验证 checksum/provenance 再运行 [GH:readme][GH:security]。

## 代码质量

评分 4/5。

CONTRIBUTING 描述 pure C rewrite、build/test/lint/security commands、project structure、language support workflow；local scan 显示 `src/`、`internal/cbm/`、`vendored/`、`tests/`、`graph-ui/`、21 workflows 与 171 test/spec-ish paths [GH:contributing][GH:local-scan]。这里的 code_quality=4 只基于“仓库结构、测试/CI体量、贡献文档和安全流程记录”评分，不代表本轮已验证 C 实现的内存安全或语义正确性。SECURITY.md 还列出 static allow-list、binary string audit、network egress monitoring、MCP robustness、vendored dependency integrity、CodeQL、fuzz、antivirus scanning 等安全检查；这些也按项目文档声明处理 [GH:security]。

不给 5：C 项目的真实质量需要编译、测试、sanitizer、fuzz、dangerous-call allowlist 与 release provenance 实查；本条没有运行这些验证。另外，近期 issue/PR backlog 高，说明边缘语言、CLI flags、store/query behavior 等仍在快速修补 [GH:issues-prs]。

## 可扩展性

评分 4/5。

项目扩展面包括 tree-sitter extraction、pipeline passes、HTTP route linking、MCP tools、agent installers、graph UI 与 vendored language grammars [GH:readme][GH:contributing]。CONTRIBUTING 给出了添加/修复 language support 的 workflow：检查 `lang_specs.c`、regression tests、pipeline tests、real repo 验证 [GH:contributing]。

限制是扩展门槛较高：C、parser、graph store、MCP protocol、agent config 多层耦合；贡献者需要比普通 Python/TypeScript MCP server 更强的系统编程能力。

## 文档质量

评分 4/5。

README 信息量很高，覆盖 motivation、quick start、features、indexing pipeline、security/trust、agents、semantic search、cross-service linking、CLI、MCP tools、graph data model、configuration、Hybrid LSP、language support、architecture、security 等 [GH:readme]。SECURITY、CONTRIBUTING、docs/BENCHMARK、docs/EVALUATION_PLAN 也具体 [GH:security][GH:contributing][GH:benchmark][GH:evaluation-plan]。

不足是营销式数字密度很高，读者容易把 claim 当成事实。repo-wiki 采用时必须把“项目声称 / 项目自带 benchmark / 本地复现结果”分开；本条没有把 README benchmark 当作已复现结论。

## 社区与成熟度

| 维度 | 评分 | 说明 |
|------|------|------|
| 社区活跃度 | 4/5 | 23k stars、1705 forks、56 contributors、community health 100%，近期 commit/PR 活跃 [GH:api][GH:contributors][GH:community]。 |
| 成熟度 | 2/5 | 2026-02 建仓、v0.8.x、强 claim 尚需时间沉淀；v0.5 后 pure C rewrite 也意味着近期架构大变，141 issues / 68 PRs 是早期高压维护信号 [GH:api][GH:releases][GH:contributing][GH:issues-prs]。 |

community 不给 5：热度很高，但项目仍非常年轻，贡献集中在核心维护者；23k stars 在 2026 年 AI/MCP 赛道也可能包含明显 trend-driven attention，不等于长期治理成熟。open issue/PR backlog 偏高，也说明社区需求增长速度可能超过维护消化速度 [GH:issues-prs]。

## 安全与风险

评分 3/5。

本次 GitHub Security Advisories endpoint 返回 `[]`，只说明未查到 published GHSA，不证明安全 [GH:advisories]。项目 security posture 的优点是透明：SECURITY.md 明确承认它读源码、写 agent config、spawn background processes，并声称 MCP runtime 不上传 source code、repository paths、graph indexes、query contents、environment variables、usage metrics 或 telemetry；同时记录 release verification、CodeQL、fuzz、dangerous-call allowlist、MCP robustness、vendored dependency integrity 等措施。这些网络与 release-security 声明本轮没有独立复现，因此只作为项目文档证据，不作为已验证安全结论 [GH:security]。

但 attack surface 仍然高：installer、update command、binary provenance、MCP JSON-RPC input、Cypher-like query parser、file read/write containment、graph UI localhost server、agent hook/instruction injection、vendored grammars/dependencies。对 Develata 环境，正确做法是在隔离目录和非敏感 repo 上先测，保留 checksum/provenance 验证，不要直接把全局 agent config 交给未审计 binary。

## 学习价值

学习价值很高，甚至高于当前采用推荐。它把若干关键议题放在一个项目里：agent code intelligence、MCP tool surface、tree-sitter 多语言抽取、SQLite graph store、semantic search、release supply-chain trust、本地隐私与高权限工具边界。正确的使用顺序应是先审计、再试验、后采纳。若以后 Develata 要构建自己的 code intelligence stack，codebase-memory-mcp 值得作为 benchmark 对象与反面约束：速度、覆盖面与权限边界，三者不可偏废。
