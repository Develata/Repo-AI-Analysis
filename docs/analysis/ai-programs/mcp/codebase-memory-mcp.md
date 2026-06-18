---
title: "codebase-memory-mcp"
created: 2026-06-18
updated: 2026-06-18
type: repository-analysis
repo_url: "https://github.com/DeusData/codebase-memory-mcp"
category: "ai-programs/mcp"
tags: ["mcp", "code-intelligence", "knowledge-graph", "tree-sitter", "c", "coding-agents", "local-first"]
previous_repo: ""
successor: ""
primary_language: "C"
license: "MIT"
stars: 4938
forks: 468
last_checked: 2026-06-18
last_verified: 2026-06-18
evidence: "GitHub API + README + SECURITY/CONTRIBUTING + releases + shallow local scan; no local install/index benchmark or security audit run"
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
  - "[GH:api] https://api.github.com/repos/DeusData/codebase-memory-mcp queried 2026-06-18; stars=4938, forks=468, open_issues_count=93, created_at=2026-02-24, pushed_at=2026-06-13, default_branch=main, license=MIT, primary_language=C"
  - "[GH:languages] https://api.github.com/repos/DeusData/codebase-memory-mcp/languages queried 2026-06-18; C=30,770,009 bytes, C++=3,664,816, Shell=238,523, TypeScript=110,832, Python=68,319 plus smaller languages"
  - "[GH:issues-prs] GitHub search API queried 2026-06-18; open issues=57, open PRs=36; REST open_issues_count=93 includes PRs"
  - "[GH:releases] https://api.github.com/repos/DeusData/codebase-memory-mcp/releases?per_page=5 queried 2026-06-18; latest v0.8.1 and earlier 0.8.0/0.7.0/0.6.1/0.6.0 all published 2026-06-12 in API sample"
  - "[GH:community] https://api.github.com/repos/DeusData/codebase-memory-mcp/community/profile queried 2026-06-18; health_percentage=100; README, license, code_of_conduct, CONTRIBUTING, PR template present; issue_template absent"
  - "[GH:advisories] https://api.github.com/repos/DeusData/codebase-memory-mcp/security-advisories?per_page=10 queried 2026-06-18; returned []"
  - "[GH:local-scan] local shallow clone /opt/data/tmp/repo_wiki_trending_20260618/deusdata-codebase-memory-mcp at commit e599df1d563c1e9b0b2fc8c6b12ee85934ade1c5; git ls-files=1673, markdown files=14, test/spec-ish files=114, GitHub workflows=14; inspected README.md, SECURITY.md, CONTRIBUTING.md, source tree roots"
  - "[GH:security] /opt/data/tmp/repo_wiki_trending_20260618/deusdata-codebase-memory-mcp/SECURITY.md inspected 2026-06-18; project states it reads source files, writes agent configuration files, spawns background processes, and claims release-time SLSA/Sigstore/SBOM/checksum/VirusTotal checks"
  - "[GH:contributing] /opt/data/tmp/repo_wiki_trending_20260618/deusdata-codebase-memory-mcp/CONTRIBUTING.md inspected 2026-06-18; project describes pure C rewrite from Go in v0.5.0, build/test/lint/security commands, project structure, and language-support workflow"
  - "[arXiv] https://arxiv.org/abs/2603.27277 linked from README as project preprint; not independently reviewed in this analysis"
---

# codebase-memory-mcp

> 面向 AI coding agents 的本地代码知识图谱 MCP server：用 C 实现、tree-sitter/LSP-like extraction、SQLite graph store 和 MCP tools，把代码库探索从反复 grep/read 改成结构化查询。
>
> **状态**: `active` · **总分**: 3.5/5 · **推荐度**: 3/5

## 一句话总结

codebase-memory-mcp 是一个很值得收录和审计的 agent infrastructure 项目：方向贴合 Hermes/CodeGraph/code intelligence，但项目很年轻、claim 很强、权限面很深，采用推荐必须保守。

## 总体评价

这个项目的定位非常清楚：给 coding agents 一个本地、持久、结构化的 codebase memory。README 声称它能把平均 repo 在毫秒级完整索引，把 Linux kernel 在 3 分钟内索引，结构化查询低于 1ms；支持 158 种 tree-sitter 语言、9 种 Hybrid LSP 语义类型解析、14 个 MCP tools，并以 single static binary 形式分发 [GH]。它的能力叙事与 Develata 当前的 CodeGraph MCP / repo analysis 工作流高度相关。

从 local scan 看，它不是空壳 README：仓库有 1673 个 tracked files，C/C++ 体量很大，含 `src/`、`internal/`、`vendored/`、`tests/`、`graph-ui/`、`scripts/`、`tools/`，CONTRIBUTING 明确说 v0.5.0 后从 Go 改写为 pure C，并描述 build/test/lint/security audit 流程 [GH:local-scan][GH:contributing]。SECURITY.md 也很罕见地直接承认项目会读整个代码库、写 agent config、spawn background processes，并列出 release verification 与 code-level defenses [GH:security]。

主要问题在于：它太新、太强 claim、太高权限。2026-02 建仓，v0.8.1 仍是 0.x；release API 样本里多个版本集中在同一天；性能、质量、SLSA/VirusTotal 等主张本次都未独立复现 [GH:api][GH:releases]。所以它非常适合写入 wiki，但推荐度应停在 3：先作为研究/试用/对照 benchmark 对象，而不是默认替换现有 code intelligence layer。

## 推荐度：3/5

**定位**：适合熟悉 MCP、coding-agent 配置、安全审计和本地工具链的高级用户，用于试验 code intelligence substrate、对照 CodeGraph/grep/LSP/RAG 型方案，或在隔离 repo 上评估索引质量和 token 节省。

推荐它，是因为问题定义正中 agent infrastructure：LLM agent 的高成本并不只来自模型，也来自低效探索路径；把 codebase 变成 queryable graph 的方向是正确的 [GH]。它用 C + vendored grammars + single binary 的路线，也值得与 TypeScript/Node、Rust、LSP-server 方案比较。

不推荐普通开发者直接全局安装并信任它修改 agent config。SECURITY.md 自己也说：它会读取源码、写 agent 配置、spawn background processes；不舒服就先审计源码 [GH:security]。在没有本地 benchmark、安全审计、真实大型 repo 验证之前，采用推荐只能是 3/5。

## 优势

1. **价值函数很强**：把 agent 探索从 file-by-file search 转成 graph queries，理论上能显著降低 token/tool-call 成本 [GH]。
2. **覆盖面大**：README 声称 158 tree-sitter languages、9 种 Hybrid LSP 语义增强、HTTP/gRPC/GraphQL/tRPC/cross-service linking、semantic search、ADR、dead code detection 等 [GH]。
3. **部署叙事简单**：single static binary，macOS/Linux/Windows，一行 install 或手动下载 release；无需 Docker、runtime、API key [GH]。
4. **安全意识显性**：SECURITY.md 明确列出文件读写、agent config 修改、background processes 等 access pattern，并声明 release-time verification 与 code-level defenses [GH:security]。
5. **工程体量真实**：local scan 显示 1673 files、114 test/spec-ish files、14 workflows、C/C++ 主体、vendored grammars 与 graph UI [GH:local-scan]。

## 劣势

1. **成熟度低**：2026-02 建仓、v0.8.x，仍是高速迭代早期项目 [GH:api][GH:releases]。
2. **README claim 极强但未复现**：Linux kernel 3 分钟、sub-ms query、120x fewer tokens、83% answer quality 等都需要独立 benchmark；本条只记录为项目自述 [GH][arXiv]。
3. **权限面很深**：读源码、写 agent config、安装 hooks/skills/instructions、spawn processes；安全 section 诚实，但风险不因诚实而消失 [GH:security]。
4. **C 实现提高审计门槛**：C single binary 性能和分发优势明显，但 memory safety、parser robustness、vendored dependencies 需要持续审计。
5. **语言/框架支持质量不可能等距**：158 languages 是覆盖面，不等于每种语言都有可靠 call graph/type inference/route linking。

---

## 适合什么场景

- 想比较 codegraph / LSP / grep / AST index / semantic RAG 等 agent code intelligence 路线。
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
| codegraph | TypeScript/SQLite/tree-sitter 的 coding-agent code graph | codegraph 更轻、更早进入本地 wiki；codebase-memory-mcp claim 更激进，C single binary 与更多语言/工具覆盖，但成熟度更需验证 |
| Sourcegraph/Cody | 企业代码搜索与 AI coding 平台 | Sourcegraph 更成熟、平台化；codebase-memory-mcp 更本地、轻部署、MCP-first |
| LSP / rust-analyzer / pyright | 语言级语义服务 | LSP 语义精度强但通常单语言/IDE-oriented；codebase-memory-mcp 试图做多语言 graph memory 与 agent tools |
| grep/ripgrep + agent read | 传统文本探索 | grep 简单可靠；codebase-memory-mcp 用预索引和结构图换低 token/低工具调用，但需要建立与维护 index |

上述项目按 `ai-programs/mcp` 同类或相邻 agent infrastructure 范围做定位级对比，未按同一 10 维度框架深审。

---

## 它能做什么

capability 评分 4/5。

README 声称的能力包括：

- full-index codebase into persistent knowledge graph [GH]；
- 158 vendored tree-sitter grammars，9 languages 的 Hybrid LSP semantic type resolution [GH]；
- 14 MCP tools：search、trace、architecture、impact analysis、Cypher-like queries、dead code detection、cross-service HTTP linking、ADR management 等 [GH]；
- BM25 full-text search、semantic search、structural graph search、code search [GH]；
- HTTP/gRPC/GraphQL/tRPC route/service detection 与 cross-service linking [GH]；
- single static binary + auto-detect 11 coding agents 并写入 MCP entries/instructions/hooks [GH]；
- optional local graph UI at localhost:9749 [GH]。

不给 5：这些是 broad claims，未在本条中独立跑 install/index/benchmark；多语言语义抽取的真实质量需要按语言抽样验证。

## 运行环境与资源占用

| 场景 | CPU | 内存 | 存储 | 说明 |
|------|-----|------|------|------|
| 小中型 repo 索引 | 低到中等 | 中等峰值 | SQLite graph store | README 称平均 repo 毫秒级；本次未复现 [GH] |
| 大型 monorepo / Linux kernel 级 | 中到高 | 峰值依 repo 与 feature 而定 | graph store 可明显增长 | README 称 Linux kernel 28M LOC / 75K files 约 3 分钟；需独立验证 [GH] |
| 查询阶段 | 低 | 低到中等 | 读取既有 index | README 声称 structural queries under 1ms；本次未 benchmark [GH] |

- **运行时**：single static binary；C implementation，SQLite graph store [GH][GH:contributing]。
- **操作系统**：README 标 macOS/Linux/Windows supported [GH]。
- **Docker**：README 主打 no Docker/no runtime dependencies；本次未确认官方 Docker image support [GH]。
- **GPU**：不需要。
- **外部依赖**：release binary 内置 vendored grammars/dependencies；运行时会读项目源码、写 agent config、可能 spawn background processes [GH:security]。

performance 评分 3/5。设计上很强调效率，C + RAM-first + SQLite + LZ4 的路线合理；但 Linux kernel 3 分钟、sub-ms query、120x token reduction 等强 benchmark 本次完全未复现。这里的 3 表示“性能设计方向有潜力，但实测证据不足”，不是接受 README claim。

## 上手体验

评分 4/5。

README 的 quick start 极短：macOS/Linux `curl ... install.sh | bash`，Windows 下载 `install.ps1`，manual install 可从 release 下载 archive；安装后 restart coding agent，再说 “Index this project” [GH]。对熟悉 agent/MCP 的用户，这种路径很顺。

扣分点在安全与透明性：curl pipe shell、本地 agent config 修改、hooks/instructions 写入、background watcher 都需要用户理解。它提供 `--skip-config` 等选项，但保守用户仍应先下载、读脚本、验证 checksum/provenance 再运行 [GH][GH:security]。

## 代码质量

评分 4/5。

CONTRIBUTING 描述 pure C rewrite、build/test/lint/security commands、project structure、language support workflow；local scan 显示 `src/`、`internal/cbm/`、`vendored/`、`tests/`、`graph-ui/`、14 workflows 与 114 test/spec-ish files [GH:contributing][GH:local-scan]。SECURITY.md 还列出 static allow-list、binary string audit、network egress monitoring、MCP robustness、vendored dependency integrity 等安全检查 [GH:security]。

不给 5：C 项目的真实质量需要编译、测试、sanitizer、fuzz、dangerous-call allowlist 与 release provenance 实查；本条没有运行这些验证。

## 可扩展性

评分 4/5。

项目扩展面包括 tree-sitter extraction、pipeline passes、HTTP route linking、MCP tools、agent installers、graph UI 与 vendored language grammars [GH][GH:contributing]。CONTRIBUTING 给出了添加/修复 language support 的 workflow：检查 `lang_specs.c`、regression tests、pipeline tests、real repo 验证 [GH:contributing]。

限制是扩展门槛较高：C、parser、graph store、MCP protocol、agent config 多层耦合；贡献者需要比普通 Python/TypeScript MCP server 更强的系统编程能力。

## 文档质量

评分 4/5。

README 信息量很高，覆盖 motivation、quick start、features、indexing pipeline、security/trust、agents、semantic search、cross-service linking 等；SECURITY 和 CONTRIBUTING 也很具体 [GH][GH:security][GH:contributing]。

不足是营销式数字密度很高，读者容易把 claim 当成事实。repo-wiki 采用时必须把“项目声称”和“本地验证结果”分开；本条没有把 README benchmark 当作已复现结论。

## 社区与成熟度

| 维度 | 评分 | 说明 |
|------|------|------|
| 社区活跃度 | 4/5 | 4.9k stars、468 forks、community health 100%，open issues 57 / PRs 36；可见度和治理文件都不错 [GH:api][GH:issues-prs][GH:community] |
| 成熟度 | 2/5 | 2026-02 建仓、v0.8.x、强 claim 尚需时间沉淀；v0.5 后 pure C rewrite 也意味着近期架构大变 [GH:api][GH:releases][GH:contributing] |

## 安全与风险

评分 3/5。

本次 GitHub Security Advisories endpoint 返回 `[]`，只说明未查到 published GHSA，不证明安全 [GH:advisories]。项目 security posture 的优点是透明：SECURITY.md 明确承认它读源码、写 agent config、spawn background processes，并列出 SLSA/Sigstore/SBOM/checksum/VirusTotal、CodeQL、fuzz、path containment、SQLite authorizer 等措施 [GH:security]。

但 attack surface 仍然高：installer、update command、binary provenance、MCP JSON-RPC input、Cypher-like query parser、file read/write containment、graph UI localhost server、agent hook/instruction injection、vendored grammars/dependencies。对 Develata 环境，正确做法是在隔离目录和非敏感 repo 上先测，保留 checksum/provenance 验证，不要直接把全局 agent config 交给未审计 binary。

## 学习价值

学习价值很高，甚至高于当前采用推荐。它把若干关键议题放在一个项目里：agent code intelligence、MCP tool surface、tree-sitter 多语言抽取、SQLite graph store、semantic search、release supply-chain trust、本地隐私与高权限工具边界。正确的使用顺序应是先审计、再试验、后采纳。
