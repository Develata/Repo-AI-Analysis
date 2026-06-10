---


title: "MCP Servers"
created: 2026-05-20
updated: 2026-05-21
type: repository-analysis
repo_url: "https://github.com/modelcontextprotocol/servers"
category: "ai-programs/agent-infrastructure"
tags: ["agent-infrastructure", "mcp", "servers", "tooling", "reference-implementation", "typescript", "python", "registry", "filesystem", "memory"]
previous_repo: ""
successor: ""
primary_language: "TypeScript"
license: "NOASSERTION"
stars: 85956
forks: 10762
last_checked: 2026-05-20
last_verified: 2026-05-20
evidence: "GitHub API + official MCP docs/registry + npm/PyPI metadata + repository local scan; reference implementations inspected, not production deployed by Develata"
archived_reason: ""
docker_support: true
gpu_required: false
estimated_cpu: "low for most reference servers; server-specific operations such as fetch, git search, filesystem traversal or client workloads dominate"
estimated_memory: "low-to-moderate; each reference server is a small stdio process, but memory server graph size and fetched content volume can grow"
estimated_storage: "small for individual npm/PyPI packages; Docker images and local data such as memory.jsonl or mounted repositories dominate"
status: active
sharing_candidate: true
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
  - "[GH] https://github.com/modelcontextprotocol/servers"
  - "[GH:api] https://api.github.com/repos/modelcontextprotocol/servers queried 2026-05-20; stars=85956, forks=10762, open_issues_count=490, created_at=2024-11-19, pushed_at=2026-05-17, license=NOASSERTION, default_branch=main"
  - "[GH:issues] GitHub Search API queried 2026-05-20; open issues=282, open PRs=208, merged PRs since 2026-05-01=4 for repo:modelcontextprotocol/servers"
  - "[GH:languages] https://api.github.com/repos/modelcontextprotocol/servers/languages queried 2026-05-20; TypeScript=348264, Python=95674, JavaScript=51103, Dockerfile=6012"
  - "[GH:releases] https://api.github.com/repos/modelcontextprotocol/servers/releases/latest queried 2026-05-20; latest=2026.1.26 published 2026-01-27, prerelease=false"
  - "[GH:contributors] https://api.github.com/repos/modelcontextprotocol/servers/contributors?per_page=100 queried 2026-05-20; first page contributors=100; top entries include olaservo=534, tadasant=239, jspahrsummers=217, cliffhall=212"
  - "[GH:community] https://api.github.com/repos/modelcontextprotocol/servers/community/profile queried 2026-05-20; health_percentage=87; readme, license, contributing, code_of_conduct and pull_request_template detected"
  - "[GH:local-scan] Local shallow clone /tmp/repo-wiki-batch2/servers at commit b1e1eb1a55847e0dcf78deb8ee821e2e46150a47 dated 2026-05-17; git ls-files=140; checked README.md, SECURITY.md, CONTRIBUTING.md, CLAUDE.md, LICENSE, package.json, .github/pull_request_template.md and src/* README files; repo contains 7 reference servers: everything, fetch, filesystem, git, memory, sequentialthinking, time"
  - "[GH:license] Local LICENSE checked 2026-05-20; MCP project is transitioning from MIT to Apache-2.0; new code/spec contributions use Apache-2.0, documentation excluding specifications uses CC-BY-4.0, and older unrelicensed contributions remain MIT"
  - "[Docs:mcp-intro] https://modelcontextprotocol.io/docs/getting-started/intro extracted 2026-05-20; MCP is described as an open-source standard connecting AI applications to external systems, data sources, tools and workflows, with support across Claude, ChatGPT, VS Code, Cursor and other clients"
  - "[Docs:registry] https://registry.modelcontextprotocol.io/ extracted 2026-05-20; official MCP Registry is positioned as the discovery surface for published MCP servers; README says third-party server listing moved to registry"
  - "[NPM:servers] npm view queried 2026-05-20; @modelcontextprotocol/server-filesystem=2026.1.14 unpackedSize=64419 MIT, server-memory=2026.1.26 unpackedSize=25757 MIT, server-sequential-thinking=2025.12.18 unpackedSize=14550 MIT, server-everything=2026.1.26 unpackedSize=164061 MIT"
  - "[PyPI:servers] PyPI JSON queried 2026-05-20; mcp-server-git=2026.1.14 MIT requires_python>=3.10, mcp-server-fetch=2025.4.7 MIT requires_python>=3.10, mcp-server-time=2026.1.26 MIT requires_python>=3.10"
  - "[Docs:readme] Local README checked 2026-05-20; repository explicitly says servers are reference implementations, not production-ready solutions; active reference servers are Everything, Fetch, Filesystem, Git, Memory, Sequential Thinking, Time; many former servers moved to servers-archived"
  - "[Docs:security] Local SECURITY.md checked 2026-05-20; file says servers are reference implementations for MCP features and SDK usage, educational examples rather than production-ready solutions, and this repository is not eligible for vulnerability reporting; SDK vulnerabilities should be reported in relevant SDK repositories"
  - "[Docs:contributing] Local CONTRIBUTING.md and PR template checked 2026-05-20; new server implementations are not accepted, contributors should publish to MCP Registry; accepted changes are bug fixes, usability improvements and enhancements demonstrating MCP protocol features; PR checklist requires reading MCP docs, following security best practices and testing with an LLM client"
  - "[Docs:filesystem] Local src/filesystem/README.md checked 2026-05-20; server supports read/write/edit/list/search/tree/info/move and dynamic directory access control via Roots; README documents destructive/idempotent/readOnly MCP ToolAnnotations"
  - "[Docs:fetch] Local src/fetch/README.md checked 2026-05-20; fetch server converts web content to markdown and warns it can access local/internal IP addresses, potentially exposing sensitive data"
  - "[Docs:git] Local src/git/README.md checked 2026-05-20; git server exposes status/diff/add/commit/reset/log/branch/checkout/show and notes early development with changing functionality"
  - "[Docs:memory] Local src/memory/README.md checked 2026-05-20; memory server implements a local knowledge graph with entities, relations and observations, configurable MEMORY_FILE_PATH and Docker/NPX usage"
  - "[GH:advisory:filesystem] https://github.com/modelcontextprotocol/servers/security/advisories/GHSA-q66q-fx2p-7w4m extracted 2026-05-20; Filesystem versions prior to 0.6.3 and 2025.3.28 could allow unintended file access via symlinks inside allowed directories; users advised to upgrade to 0.6.4 or 2025.7.01"
  - "[GH:advisory:git] https://github.com/modelcontextprotocol/servers/security/advisories/GHSA-vjqx-cfc4-9h6v extracted 2026-05-20; mcp-server-git versions prior to 2026.1.14 had path traversal in git_add allowing staging outside repository boundaries; fix in PR #3164 switched to repo.git.add; users advised to upgrade to 2026.1.14+"
---

# MCP Servers

> 官方 MCP reference servers 集合：不是“全量 MCP server 市场”，而是用于展示 MCP SDK、协议能力、安全边界和基础工具模式的官方参考实现。
>
> **状态**: `active` · **总分**: 3.8/5 · **推荐度**: 3/5

## 一句话总结

`modelcontextprotocol/servers` 是 Agent Infrastructure 的核心参考仓库：它给 MCP 生态提供官方 reference server patterns，但 README 明确警告这些服务器不是 production-ready solutions，因此应作为学习、原型和受限部署基线，而不是直接等同生产级工具平台。

## 总体评价

`modelcontextprotocol/servers` 的定位非常明确：它是 Model Context Protocol 的 reference implementations 集合，同时指向官方 MCP Registry 作为第三方 server 发现入口 [GH][Docs:readme][Docs:registry]。MCP 本身是连接 AI applications 到外部系统、数据源、工具和 workflows 的开放标准，常被比作“AI applications 的 USB-C port” [Docs:mcp-intro]。

因此，这个仓库应归入 `ai-programs/agent-infrastructure`，而不是普通 dev-tools。它解决的是 agent 如何通过标准协议访问 filesystem、git、memory、time、fetch 等外部能力；这是 tool/data access substrate，而不是某个最终用户应用 [Docs:mcp-intro][Docs:readme]。

关键边界必须说清：这个 repo 现在只维护少数 reference servers：Everything、Fetch、Filesystem、Git、Memory、Sequential Thinking、Time。README 明确表示第三方 server 列表已迁移到 MCP Registry，并且本仓库中的 servers 旨在展示 MCP features 和 SDK usage，不是 production-ready solutions [Docs:readme][Docs:registry]。所以它的价值在“标准样板”和“生态入口”，而不是“即插即用生产服务大全”。

## 推荐度：3/5

> 2026-06 推荐度重校准：repo 自身偏 reference/non-production MCP servers，4/5 容易被误读为部署信心。


**定位**：面向正在理解或建设 MCP server/client/tooling 的开发者、agent infra 研究者，以及需要一组官方 reference servers 做原型验证的人。

推荐度 3/5。加分理由是：MCP 是当前 agent infrastructure 的核心连接协议之一，官方 reference servers 对学习工具定义、resources/prompts、Roots、ToolAnnotations、stdio/HTTP transport、package 发布模式和安全边界都很有价值 [Docs:mcp-intro][Docs:filesystem][Docs:contributing]。维持 3 而非 4，是因为项目自己声明非生产就绪，而且已有 filesystem/git 相关安全 advisory；同时新 server 不再通过这个 repo 接收，生态发现职责已转移到 Registry [Docs:readme][Docs:contributing][GH:advisory:filesystem][GH:advisory:git]。

实际建议：把它当“协议范式教材 + 小型 reference server set + MCP 生态入口”，不要把它当“可以无审计部署到敏感环境的工具集合”。

## 优势

1. **官方参考地位强**：Model Context Protocol 官方组织维护，MCP 文档和 Registry 生态直接关联 [GH][Docs:mcp-intro][Docs:registry]。
2. **覆盖基础 primitives**：filesystem、git、memory、fetch、time、sequential thinking、everything/test server 覆盖 agent 最常见的工具/数据接口 [Docs:readme]。
3. **协议示范价值高**：Filesystem README 展示 Roots 动态访问控制、readOnly/idempotent/destructive ToolAnnotations；PR template 要求测试 LLM client 和安全最佳实践 [Docs:filesystem][Docs:contributing]。
4. **多语言发布路径**：TypeScript servers 走 npm，Python servers 走 PyPI/uvx/pip，README 给出 Claude Desktop、VS Code、Docker 等配置样例 [NPM:servers][PyPI:servers][Docs:readme]。
5. **社区关注度高**：GitHub API 显示 8.5 万+ stars、1 万+ forks、contributors first page 100 人、community health 87% [GH:api][GH:contributors][GH:community]。

## 劣势

1. **非生产定位明确**：README 和 SECURITY.md 均说明这些是 educational/reference implementations，不是 production-ready solutions [Docs:readme][GH:local-scan]。
2. **能力范围收缩**：大量旧 servers 已迁移到 `servers-archived`，新增第三方 server 不再进入 README，而应发布到 Registry [Docs:readme][Docs:contributing]。
3. **历史已修复安全风险真实存在**：Filesystem 曾有 symlink path validation bypass，Git server 曾有 `git_add` path traversal；当前最新版不应被等同为仍受同一漏洞影响，但这些历史 advisory 说明 tool boundary 很难靠直觉保证 [GH:advisory:filesystem][GH:advisory:git]。
4. **各 server 成熟度不一**：Git README 自称 early development，Fetch README 警告内网访问风险，Memory 是 basic local knowledge graph；不能一概视为等质量组件 [Docs:git][Docs:fetch][Docs:memory]。
5. **维护焦点从 collection 转向规范/Registry**：merged PR 近期不多，新 server 贡献路径也被引导到 Registry，这对希望在此 repo 找全生态的人会造成落差 [GH:issues][Docs:contributing][Docs:registry]。

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
| MCP Servers | 官方 MCP reference server 集合 | 本项目；协议样板价值高，但非生产定位明确 |
| CLI-Anything | 把传统软件包装为 agent-native CLI/harness registry | CLI-Anything 更偏任意软件操作层；MCP Servers 更偏协议标准样板与基础 primitives |
| CodeGraph | 本地代码知识图谱 / context infrastructure | CodeGraph 优化代码上下文获取；MCP Servers 提供标准化工具/数据接入 |
| cal.diy | 调度/日历基础设施 | cal.diy 是 scheduling primitive；MCP Servers 是 tool/data access primitives |
| Context7 | 文档上下文检索 / MCP docs server | Context7 更偏文档知识供给；MCP Servers 更偏官方 reference implementation set |

上述项目按 `ai-programs/agent-infrastructure` 同类范围做定位级对比，未按同一 10 维度框架深审。

## 个人主页 sharing 候选

是。它适合写成“为什么 MCP 是 agent infrastructure 的连接层”或“从 function calling 到 protocolized tool substrate”的 sharing。这个 repo 的价值不在某个工具多强，而在它把 filesystem、git、memory、fetch、time 等常见能力变成可被 agent/client 统一发现和调用的协议样板。

也可以作为安全主题案例：filesystem 和 git 看似基础，实则最容易越权；symlink、path traversal、内网 fetch、secret exposure 都说明 agent tools 的安全边界必须显式证明，而非口头宣称。

## 它能做什么

评分 4/5。

该 repo 现有 reference servers 能展示并提供：filesystem 读写/编辑/搜索/目录树和 Roots 访问控制；git status/diff/add/commit/reset/log/branch/checkout/show；memory graph 的 entities/relations/observations；fetch URL 到 markdown；time/timezone；sequential thinking；everything test server [Docs:readme][Docs:filesystem][Docs:git][Docs:memory][Docs:fetch]。

不给 5，是因为本仓库已主动从“广泛 server collection”收缩为“少数 reference servers”；很多实用 third-party integrations 已迁移或应发布到 Registry。能力作为 reference 很强，作为 production catalog 不完整 [Docs:readme][Docs:registry]。

## 运行环境与资源占用

评分 4/5。

单个 reference server 通常较轻：TypeScript servers 可通过 `npx -y @modelcontextprotocol/server-memory` 等方式运行，Python servers 可通过 `uvx mcp-server-git`、`pip install` 后 `python -m ...` 运行 [Docs:readme][NPM:servers][PyPI:servers]。NPM/PyPI metadata 显示各包体量较小，通常无需 GPU [NPM:servers][PyPI:servers]。

不给 5，是因为资源开销由 server 所接触的外部对象决定：filesystem traversal、git repository 大小、fetch 内容量、memory graph 文件、Docker images、client 轮询和 LLM tool-call 频率都会显著改变实际成本。作为 protocol server 它轻，作为 agent tool substrate 它的下游成本不可忽略。

## 上手体验

评分 4/5。

README 给出 `npx`、`uvx`、`pip`、Claude Desktop JSON 配置和 Windows `cmd /c` 示例；各 server README 也给出 Claude Desktop、VS Code、Docker 或 package manager 配置 [Docs:readme][Docs:filesystem][Docs:git][Docs:fetch]。对于熟悉 MCP/Claude Desktop/VS Code 的开发者，上手相当直接。

扣一分是因为 repo 当前边界容易误解：很多人会以为这是“所有 MCP servers 列表”，但 README 明确说应去 MCP Registry；同时不同 server 的安装方式、语言、Docker mount、安全参数差异较大，对新手仍有认知负担 [Docs:readme][Docs:registry]。

## 代码质量

评分 4/5。

local scan 显示仓库小而清晰：140 tracked files，语言统计以 TypeScript/Python 为主，包含 7 个 reference servers 和 5 个 GitHub workflows；CLAUDE.md 记录 monorepo structure、TypeScript/Vitest/Node 22、Python uv/pyright/ruff、CI 动态包检测、publish 规则和 MCP docs/schema reference [GH:languages][GH:local-scan]。PR template 要求测试、security best practices、文档更新、LLM client 验证 [Docs:contributing]。

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

社区层面，GitHub API 显示 8.5 万+ stars、1 万+ forks、contributors first page 达 100，community profile health 87%，说明 MCP 热度和参与度很强 [GH:api][GH:contributors][GH:community]。不给 5，是因为 open PRs=208、open issues=282，近期 merged PR 数不高，并且新 server 不再通过本 repo 收纳，社区贡献被引导到 Registry [GH:issues][Docs:contributing]。

成熟度给 3：项目创建于 2024-11，latest release 为 2026.1.26，核心 reference servers 已有 npm/PyPI 发布路径；但许可证仍处于 Apache-2.0/MIT 混合迁移期，说明治理状态还在整理中 [GH:api][GH:releases][GH:license][NPM:servers][PyPI:servers]。README/SECURITY 强调非生产，Git server 文档仍称 early development，且安全 advisories 存在，因此不能给 4 或 5 [Docs:readme][Docs:git][GH:advisory:filesystem][GH:advisory:git]。

## 安全与风险

评分 3/5。

正面：项目明确告知这些是 reference implementations，不是 production-ready；SECURITY.md 也说明本仓库不是漏洞报告入口，应转到相关 SDK 仓库；PR checklist 要求 MCP security best practices；Filesystem 使用 allowed directories / Roots 并给出 destructive/idempotent/readOnly annotations；Fetch README 明确警告可能访问 local/internal IP 地址 [Docs:readme][Docs:security][Docs:contributing][Docs:filesystem][Docs:fetch]。

但安全风险是真实而结构性的。Filesystem advisory GHSA-q66q-fx2p-7w4m 指出旧版本可通过 allowed directories 内 symlink 访问非预期文件，建议升级到 0.6.4 或 2025.7.01；Git advisory GHSA-vjqx-cfc4-9h6v 指出 `mcp-server-git` 2026.1.14 之前 `git_add` 未校验 repository boundary，可能把仓库外敏感文件 stage 进 git index，修复为 `repo.git.add()` 并建议升级到 2026.1.14+ [GH:advisory:filesystem][GH:advisory:git]。

当前 PyPI metadata 显示 `mcp-server-git` 版本为 2026.1.14，已达到该 advisory 建议版本；NPM metadata 显示 `server-filesystem` 为 2026.1.14，高于 advisory 中旧受影响范围 [NPM:servers][PyPI:servers]。因此这些 advisories 不应被写成“当前最新版必然有漏洞”，而应作为 filesystem/git tool boundary 高风险的历史证据。实际部署时应额外使用 sandbox、只挂载必要目录、只读 mount、网络隔离、secret scanning 和 tool approval。

## 学习价值

MCP Servers 的学习价值很高。它是理解 MCP 的最短路径之一：看一遍 everything/filesystem/git/memory/fetch/time，就能理解 agent tool protocol 的基本构件——tools、resources、prompts、Roots、ToolAnnotations、stdio process、package distribution、client JSON config 和 Registry 分工 [Docs:readme][Docs:filesystem][Docs:mcp-intro]。

对 Develata 来说，它也适合纳入 agent infrastructure 体系：CLI-Anything 是“让任意软件变 agent-native CLI”，CodeGraph 是“让代码上下文预索引”，cal.diy 是“给 agent 时间/调度 primitive”，而 MCP Servers 是“给 agent 工具/数据访问协议样板”。四者处在不同子层，可以组成较完整的 agent infrastructure 图景。