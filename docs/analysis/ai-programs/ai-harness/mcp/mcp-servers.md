---


title: "MCP Servers"
created: 2026-05-20
updated: 2026-07-15
type: repository-analysis
repo_url: "https://github.com/modelcontextprotocol/servers"
category: "ai-programs/ai-harness/mcp"
tags: ["mcp", "servers", "tooling", "reference-implementation", "typescript", "python", "registry", "filesystem", "memory"]
previous_repo: ""
successor: ""
primary_language: "TypeScript"
license: "Apache-2.0 / MIT transition; documentation CC-BY-4.0 (GitHub metadata: NOASSERTION)"
stars: 88474
forks: 11219
last_checked: 2026-07-15
last_verified: 2026-07-15
evidence: "GitHub GraphQL/REST + releases/advisories + official MCP docs/registry + current npm/PyPI metadata + shallow local scan at d31124c; reference implementations were inspected but not production deployed or security-tested"
archived_reason: ""
docker_support: true
gpu_required: false
estimated_cpu: "low for most reference servers; server-specific operations such as fetch, git search, filesystem traversal or client workloads dominate"
estimated_memory: "low-to-moderate; each reference server is a small stdio process, but memory server graph size and fetched content volume can grow"
estimated_storage: "small for individual npm/PyPI packages; Docker images and local data such as memory.jsonl or mounted repositories dominate"
status: active
ratings:
  capability: 4
  usability: 4
  performance: 4
  code_quality: 4
  documentation: 5
  community: 4
  maturity: 3
  extensibility: 4
  security: 3
  recommendation: 3
overall_score: 3.8
sources:
  - "[GH] https://github.com/modelcontextprotocol/servers — repository and README verified 2026-07-15"
  - "[GH:api] GitHub GraphQL queried 2026-07-15 — 88474 stars, 11219 forks, 384 open issues, 283 open pull requests, 26 releases; main HEAD d31124c982401739917fd817c2a59db344529c16; GitHub license metadata NOASSERTION"
  - "[GH:issues] GitHub GraphQL queried 2026-07-15 — 384 open issues and 283 open PRs are separate counts"
  - "[GH:languages] GitHub GraphQL queried 2026-07-15 lists TypeScript as primary; local scan confirms TypeScript/Python reference servers"
  - "[GH:releases] https://github.com/modelcontextprotocol/servers/releases/tag/2026.7.10 checked 2026-07-15 — latest release 2026.7.10 published 2026-07-10; filesystem and Python git/fetch/time packages are on 2026.7.10"
  - "[GH:contributors] GitHub contributors API first page queried 2026-07-15 — 100 entries; top counts olaservo 537, tadasant 239, cliffhall 229, jspahrsummers 217, dsp-ant 160"
  - "[GH:community] GitHub community profile queried 2026-07-15 — health 87%; README, CONTRIBUTING, Code of Conduct and PR template present"
  - "[GH:local-scan] shallow clone main@d31124c982401739917fd817c2a59db344529c16 inspected 2026-07-15 — `git ls-files` returned 144 tracked paths and 5 paths under `.github/workflows/`; 7 active reference servers remain: everything, fetch, filesystem, git, memory, sequentialthinking, time"
  - "[GH:license] current LICENSE inspected 2026-07-15 — new code/spec contributions Apache-2.0, older unrelicensed contributions MIT, non-spec documentation CC-BY-4.0; this explains GitHub NOASSERTION and must not be simplified to a single blanket license"
  - "[GH:advisories] GitHub repository security-advisories API queried 2026-07-15 — 6 published advisories: 2 high and 4 medium. They cover two filesystem path-validation bypasses and four mcp-server-git boundary/argument/path issues; sampled API records returned no first_patched_version, so affected ranges and actual package versions must be checked together"
  - "[Docs:mcp-intro] https://modelcontextprotocol.io/docs/getting-started/intro checked 2026-07-15 — MCP standard for connecting AI applications to tools, data and workflows"
  - "[Docs:registry] https://registry.modelcontextprotocol.io/ extracted 2026-07-15 — official discovery surface for published MCP servers; third-party listings no longer live in this README"
  - "[NPM:servers] npm view checked 2026-07-15 — @modelcontextprotocol/server-filesystem 2026.7.10; server-memory, server-sequential-thinking and server-everything 2026.7.4; package license fields point to bundled LICENSE"
  - "[PyPI:servers] PyPI JSON queried 2026-07-15 — mcp-server-git, mcp-server-fetch and mcp-server-time all 2026.7.10, Python >=3.10"
  - "[Docs:readme] current README inspected 2026-07-15 — explicit reference/non-production warning, 7 active servers, archived-server and Registry boundaries"
  - "[Docs:security] current SECURITY.md inspected 2026-07-15 — repository described as educational/reference and not an eligible vulnerability-reporting target; SDK issues should go to SDK repos, despite historical advisories already published for server packages"
  - "[Docs:contributing] current CONTRIBUTING.md and PR template inspected 2026-07-15 — new servers go to Registry; accepted changes focus on bugs/usability/protocol examples; testing/security checklist"
  - "[Docs:filesystem] current src/filesystem/README.md inspected 2026-07-15 — read/write/edit/search/tree/move, Roots access control, ToolAnnotations and official Docker/NPX examples"
  - "[Docs:fetch] current src/fetch/README.md inspected 2026-07-15 — web-to-markdown server with local/internal-IP risk warning"
  - "[Docs:git] current src/git/README.md inspected 2026-07-15 — git tools and installation/security boundaries"
  - "[Docs:memory] current src/memory/README.md inspected 2026-07-15 — local entity/relation/observation graph and persistent-file configuration"
  - "[GH:advisory:filesystem] GHSA-hc55-p739-j48w and GHSA-q66q-fx2p-7w4m metadata checked 2026-07-15 — high-severity path-prefix and symlink validation bypasses affected @modelcontextprotocol/server-filesystem <0.6.3/<2025.3.28 according to API"
  - "[GH:advisory:git] GHSA-vjqx-cfc4-9h6v, GHSA-5cgr-j3jf-jw3v, GHSA-9xwc-hfwc-8w59 and GHSA-j22h-9j4x-23w5 metadata checked 2026-07-15 — medium-severity git_add/git_init/git_diff/git_checkout/--repository boundary issues affecting ranges before 2025.9.25, 2025.12.18 or 2026.1.14"
---

# MCP Servers

> 官方 MCP reference servers 集合：不是“全量 MCP server 市场”，而是用于展示 MCP SDK、协议能力、安全边界和基础工具模式的官方参考实现。
>
> **状态**: `active` · **总分**: 3.8/5 · **推荐度**: 3/5
> **核验版本**: GitHub commit `d31124c982401739917fd817c2a59db344529c16`；release `2026.7.10`；GitHub/npm/PyPI 快照 2026-07-15 [GH:releases][NPM:servers][PyPI:servers]

## 一句话总结

`modelcontextprotocol/servers` 是 Agent Infrastructure 的核心参考仓库：它给 MCP 生态提供官方 reference server patterns，但 README 明确警告这些服务器不是 production-ready solutions，因此应作为学习、原型和受限部署基线，而不是直接等同生产级工具平台。

## 总体评价

`modelcontextprotocol/servers` 的定位非常明确：它是 Model Context Protocol 的 reference implementations 集合，同时指向官方 MCP Registry 作为第三方 server 发现入口 [GH][Docs:readme][Docs:registry]。MCP 本身是连接 AI applications 到外部系统、数据源、工具和 workflows 的开放标准，常被比作“AI applications 的 USB-C port” [Docs:mcp-intro]。

因此，这个仓库应归入 `ai-programs/ai-harness/mcp`，而不是普通 dev-tools。它解决的是 agent 如何通过标准协议访问 filesystem、git、memory、time、fetch 等外部能力；这是 tool/data access substrate，而不是某个最终用户应用 [Docs:mcp-intro][Docs:readme]。

关键边界必须说清：这个 repo 现在只维护少数 reference servers：Everything、Fetch、Filesystem、Git、Memory、Sequential Thinking、Time。README 明确表示第三方 server 列表已迁移到 MCP Registry，并且本仓库中的 servers 旨在展示 MCP features 和 SDK usage，不是 production-ready solutions [Docs:readme][Docs:registry]。所以它的价值在“标准样板”和“生态入口”，而不是“即插即用生产服务大全”。

## 推荐度：3/5

> 2026-06 推荐度重校准：repo 自身偏 reference/non-production MCP servers，4/5 容易被误读为部署信心。


**定位**：面向正在理解或建设 MCP server/client/tooling 的开发者、agent infra 研究者，以及需要一组官方 reference servers 做原型验证的人。

推荐度 3/5。加分理由是：MCP 是当前 agent infrastructure 的核心连接协议之一，官方 reference servers 对学习工具定义、resources/prompts、Roots、ToolAnnotations、stdio/HTTP transport、package 发布模式和安全边界都很有价值 [Docs:mcp-intro][Docs:filesystem][Docs:contributing]。维持 3 而非 4，是因为项目自己声明非生产就绪，而且已有 6 条 filesystem/git 相关 advisory；同时新 server 不再通过这个 repo 接收，生态发现职责已转移到 Registry [Docs:readme][Docs:contributing][GH:advisories]。

实际建议：把它当“协议范式教材 + 小型 reference server set + MCP 生态入口”，不要把它当“可以无审计部署到敏感环境的工具集合”。

## 优势

1. **官方参考地位强**：Model Context Protocol 官方组织维护，MCP 文档和 Registry 生态直接关联 [GH][Docs:mcp-intro][Docs:registry]。
2. **覆盖基础 primitives**：filesystem、git、memory、fetch、time、sequential thinking、everything/test server 覆盖 agent 最常见的工具/数据接口 [Docs:readme]。
3. **协议示范价值高**：Filesystem README 展示 Roots 动态访问控制、readOnly/idempotent/destructive ToolAnnotations；PR template 要求测试 LLM client 和安全最佳实践 [Docs:filesystem][Docs:contributing]。
4. **多语言发布路径**：TypeScript servers 走 npm，Python servers 走 PyPI/uvx/pip，README 给出 Claude Desktop、VS Code、Docker 等配置样例 [NPM:servers][PyPI:servers][Docs:readme]。
5. **社区关注度高**：GitHub API 显示 8.8 万+ stars、1.1 万+ forks、contributors 第一页已满、community health 87% [GH:api][GH:contributors][GH:community]。

## 劣势

1. **非生产定位明确**：README 和 SECURITY.md 均说明这些是 educational/reference implementations，不是 production-ready solutions [Docs:readme][GH:local-scan]。
2. **能力范围收缩**：大量旧 servers 已迁移到 `servers-archived`，新增第三方 server 不再进入 README，而应发布到 Registry [Docs:readme][Docs:contributing]。
3. **历史安全风险真实存在**：2 条 high filesystem path-validation bypass 与 4 条 medium git path/argument/boundary advisory 说明 tool boundary 很难靠直觉保证；affected ranges 与当前 package version 必须共同判断 [GH:advisories][GH:advisory:filesystem][GH:advisory:git]。
4. **各 server 成熟度不一**：Git README 自称 early development，Fetch README 警告内网访问风险，Memory 是 basic local knowledge graph；不能一概视为等质量组件 [Docs:git][Docs:fetch][Docs:memory]。
5. **维护焦点从 collection 转向规范/Registry**：新 server 贡献路径被引导到 Registry，且当前 open issues=384、open PRs=283；这对希望在此 repo 找全生态或快速合入新 server 的人会造成落差 [GH:issues][Docs:contributing][Docs:registry]。

## 适合什么场景

- 学习 MCP server 如何定义 tools/resources/prompts、使用 SDK、发布 npm/PyPI 包。
- 为自己的 agent 系统验证 MCP client/server 连接、stdio server 启动、Claude Desktop/VS Code 配置。
- 参考 filesystem Roots、ToolAnnotations、git tools、memory graph、fetch markdown conversion 等基础 server pattern。
- 做 agent infrastructure 研究：标准协议如何降低 agent 接入外部工具的复杂度。
- 在低风险、受限目录、可回滚环境中试用 reference servers。

## 不适合什么场景

- 直接作为生产级 MCP gateway 或企业工具平台部署。
- 希望在一个 repo 里找到所有第三方 MCP servers；这已经转移到官方 Registry 和社区 registry [Docs:registry][Docs:contributing]。
- 对 filesystem/git/web fetch 这类高权限工具没有额外 sandbox、allowlist、audit、secret hygiene 的环境。
- 需要强 SLA、长期兼容承诺、企业 RBAC、multi-tenant auth、审计日志的场景。
- 认为 reference implementation 自动代表最佳安全实践实现的用户。

## 与类似项目对比

| 项目 | 定位 | 相对本项目 |
|------|------|-----------|
| Context7 | 文档上下文检索 / MCP docs server | Context7 更偏文档知识供给；MCP Servers 更偏官方 reference implementation set |
| codegraph | 本地代码知识图谱 MCP | codegraph 优化代码上下文获取；MCP Servers 提供标准化工具/数据接入样板 |
| codebase-memory-mcp | 代码库持久记忆 MCP | 更偏单一持久记忆产品；MCP Servers 的 Memory 只是 reference graph server 之一 |
| GitHub MCP Server | GitHub 平台数据与操作 MCP | 更偏面向 GitHub 的产品化 server；本项目强调少数通用 reference primitives |

上述项目按 `ai-programs/ai-harness/mcp` 同类或相邻 agent infrastructure 范围做定位级对比，未按同一 10 维度框架深审。


## 它能做什么

评分 4/5。

该 repo 现有 reference servers 能展示并提供：filesystem 读写/编辑/搜索/目录树和 Roots 访问控制；git status/diff/add/commit/reset/log/branch/checkout/show；memory graph 的 entities/relations/observations；fetch URL 到 markdown；time/timezone；sequential thinking；everything test server [Docs:readme][Docs:filesystem][Docs:git][Docs:memory][Docs:fetch]。

不给 5，是因为本仓库已主动从“广泛 server collection”收缩为“少数 reference servers”；很多实用 third-party integrations 已迁移或应发布到 Registry。能力作为 reference 很强，作为 production catalog 不完整 [Docs:readme][Docs:registry]。

## 运行环境与资源占用

评分 4/5。

单个 reference server 通常较轻：TypeScript servers 可通过 `npx -y @modelcontextprotocol/server-memory` 等方式运行，Python servers 可通过 `uvx mcp-server-git`、`pip install` 后 `python -m ...` 运行 [Docs:readme][NPM:servers][PyPI:servers]。截至 2026-07，filesystem 与 Python git/fetch/time 都已有 2026.7.10 包，其他 sampled TypeScript servers 为 2026.7.4；通常无需 GPU [GH:releases][NPM:servers][PyPI:servers]。

不给 5，是因为资源开销由 server 所接触的外部对象决定：filesystem traversal、git repository 大小、fetch 内容量、memory graph 文件、Docker images、client 轮询和 LLM tool-call 频率都会显著改变实际成本。作为 protocol server 它轻，作为 agent tool substrate 它的下游成本不可忽略。

## 上手体验

评分 4/5。

README 给出 `npx`、`uvx`、`pip`、Claude Desktop JSON 配置和 Windows `cmd /c` 示例；各 server README 也给出 Claude Desktop、VS Code、Docker 或 package manager 配置 [Docs:readme][Docs:filesystem][Docs:git][Docs:fetch]。对于熟悉 MCP/Claude Desktop/VS Code 的开发者，上手相当直接。

扣一分是因为 repo 当前边界容易误解：很多人会以为这是“所有 MCP servers 列表”，但 README 明确说应去 MCP Registry；同时不同 server 的安装方式、语言、Docker mount、安全参数差异较大，对新手仍有认知负担 [Docs:readme][Docs:registry]。

## 代码质量

评分 4/5。

local scan 显示仓库小而清晰：`git ls-files` 返回 144 个 tracked paths，其中 5 个位于 `.github/workflows/`；当前有 7 个 reference servers，语言以 TypeScript/Python 为主 [GH:languages][GH:local-scan]。PR template 要求测试、security best practices、文档更新、LLM client 验证 [Docs:contributing]。

不给 5，是因为本次未跑全量 tests；并且安全 advisories 说明基础工具代码也曾出现边界错误。reference implementation 的质量目标是示范和教育，不等同 hardened production code [GH:advisory:filesystem][GH:advisory:git][Docs:readme]。

## 可扩展性

评分 4/5。

作为 MCP pattern，它的可扩展性很强：开发者可以参考现有 servers 构建自己的 server，并通过官方 Registry 发布，而不是把所有 server 合入本 repo [Docs:contributing][Docs:registry]。多 SDK、多语言、多 client 的协议生态也增强了复用性 [Docs:mcp-intro][Docs:readme]。

不给 5，是因为本仓库自身已不鼓励新增 server implementations；扩展性主要发生在 Registry 和各 SDK/第三方 repo，而不是 `modelcontextprotocol/servers` 这个仓库内部 [Docs:contributing]。

## 文档质量

评分 5/5。

README 非常清楚地区分 reference servers、archived servers、frameworks、resources、getting started；并且明确警告 reference/non-production 边界 [Docs:readme]。各 server README 写明工具列表、安装方式、Claude Desktop/VS Code 配置、Docker/uvx/npm/pip usage；Filesystem 文档还细到 ToolAnnotations 和 Roots 访问控制 [Docs:filesystem][Docs:git][Docs:fetch][Docs:memory]。

更重要的是，文档没有过度营销为“生产安全工具”。它在首页直接写明教育/参考定位，这种诚实边界本身就是高质量文档的一部分。

## 社区与成熟度

社区评分 4/5，成熟度评分 3/5。

社区层面，GitHub API 显示 88474 stars、11219 forks、contributors 第一页达 100，community profile health 87%，说明 MCP 热度和参与度很强 [GH:api][GH:contributors][GH:community]。不给 5，是因为 open PRs=283、open issues=384，并且新 server 不再通过本 repo 收纳，社区贡献被引导到 Registry [GH:issues][Docs:contributing]。

成熟度给 3：项目创建于 2024-11，latest release 为 2026.7.10，核心 reference servers 已有 npm/PyPI 发布路径；但许可证仍处于 Apache-2.0/MIT 混合迁移期，non-spec docs 另为 CC-BY-4.0，治理边界仍在整理 [GH:api][GH:releases][GH:license][NPM:servers][PyPI:servers]。README/SECURITY 强调非生产，且 6 条安全 advisory 证明 hardening 仍有现实工作，因此不能给 4 或 5 [Docs:readme][Docs:security][GH:advisories]。

## 安全与风险

评分 3/5。

正面：项目明确告知这些是 reference implementations，不是 production-ready；SECURITY.md 也说明本仓库不是漏洞报告入口，应转到相关 SDK 仓库；PR checklist 要求 MCP security best practices；Filesystem 使用 allowed directories / Roots 并给出 destructive/idempotent/readOnly annotations；Fetch README 明确警告可能访问 local/internal IP 地址 [Docs:readme][Docs:security][Docs:contributing][Docs:filesystem][Docs:fetch]。

但安全风险是真实而结构性的。本次 API 返回 6 条 published advisories：Filesystem 的 path-prefix 与 symlink validation bypass 为 high；Git server 的 `git_add`、`git_init`、`git_diff`/`git_checkout`、`--repository` 路径边界问题为 medium [GH:advisories][GH:advisory:filesystem][GH:advisory:git]。

当前 npm/PyPI sampled packages 已到 2026.7.4/2026.7.10，高于 advisory 列出的旧 affected upper ranges；但 API 对样本未给 `first_patched_version`，所以这里不把“版本号较新”改写成绝对安全结论 [NPM:servers][PyPI:servers][GH:advisories]。这些条目应作为 filesystem/git tool boundary 高风险的历史证据。实际部署仍应使用 sandbox、最小目录挂载、只读 mount、网络隔离、secret scanning 和 tool approval。

## 学习价值

MCP Servers 的学习价值很高。它是理解 MCP 的最短路径之一：看一遍 everything/filesystem/git/memory/fetch/time，就能理解 agent tool protocol 的基本构件——tools、resources、prompts、Roots、ToolAnnotations、stdio process、package distribution、client JSON config 和 Registry 分工 [Docs:readme][Docs:filesystem][Docs:mcp-intro]。

对 Develata 来说，它也适合纳入 agent infrastructure 体系：CLI-Anything 是“让任意软件变 agent-native CLI”，CodeGraph 是“让代码上下文预索引”，cal.diy 是“给 agent 时间/调度 primitive”，而 MCP Servers 是“给 agent 工具/数据访问协议样板”。四者处在不同子层，可以组成较完整的 agent infrastructure 图景。
