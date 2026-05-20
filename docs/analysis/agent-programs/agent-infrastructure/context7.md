---
title: "Context7"
created: 2026-05-20
updated: 2026-05-20
type: repository-analysis
repo_url: "https://github.com/upstash/context7"
category: "agent-programs/agent-infrastructure"
tags: ["agent-infrastructure", "context", "documentation", "mcp", "cli", "sdk", "coding-agents", "typescript", "upstash"]
previous_repo: ""
successor: ""
primary_language: "TypeScript"
license: "MIT"
stars: 55686
forks: 2643
last_checked: 2026-05-20
last_verified: 2026-05-20
evidence: "GitHub API + official docs + npm metadata + repository local scan; not deployed in production by Develata"
archived_reason: ""
docker_support: true
gpu_required: false
estimated_cpu: "low for local CLI/MCP wrapper; hosted or enterprise indexing pipeline cost depends on repository/document volume and chosen LLM/embedding providers; Docker support is documented for licensed enterprise/on-prem deployment rather than a complete OSS local stack"
estimated_memory: "low for local CLI/MCP client surface; enterprise/on-prem stack requires server memory for web/API/index/vector components"
estimated_storage: "small for npm packages; indexed documentation, embeddings and enterprise/on-prem repository cache dominate storage"
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
  recommendation: 4
overall_score: 3.9
sources:
  - "[GH] https://github.com/upstash/context7"
  - "[GH:api] https://api.github.com/repos/upstash/context7 queried 2026-05-20; stars=55686, forks=2643, open_issues_count=154, created_at=2025-03-26, pushed_at=2026-05-19, license=MIT, default_branch=master, topics include llm/mcp/mcp-server/vibe-coding"
  - "[GH:issues] GitHub Search API queried 2026-05-20; open issues=126, open PRs=28, merged PRs since 2026-05-01=15 for repo:upstash/context7"
  - "[GH:languages] https://api.github.com/repos/upstash/context7/languages queried 2026-05-20; TypeScript=349007, JavaScript=29246, Dockerfile=867"
  - "[GH:release] https://api.github.com/repos/upstash/context7/releases/latest queried 2026-05-20; latest ctx7@0.4.2 published 2026-05-11"
  - "[GH:contributors] https://api.github.com/repos/upstash/context7/contributors?per_page=100 queried 2026-05-20; first page contributors=100; top entries include enesgules=363, fahreddinozcan=97, enesakar=80"
  - "[GH:community] https://api.github.com/repos/upstash/context7/community/profile queried 2026-05-20; health_percentage=50; README and license detected, contributing/code_of_conduct/pull_request_template not detected by community API"
  - "[GH:advisories] https://api.github.com/repos/upstash/context7/security-advisories?per_page=10 queried 2026-05-20; returned []"
  - "[GH:local-scan] Local clone /tmp/repo-wiki-batch3/context7 at commit 438b1df235218c6dd66086e9b0d6a5b410f1635e dated 2026-05-18; git ls-files=276, TypeScript files=72, markdown/mdx files=94, workflows=6, test/spec-ish files=18; checked README.md, SECURITY.md, LICENSE, package.json and packages/{cli,mcp,sdk,tools-ai-sdk}/package.json plus docs/ and plugins/"
  - "[Docs:intro] https://context7.com/docs extracted 2026-05-20; describes Context7 as up-to-date, version-specific documentation and code examples inserted into AI coding assistant context"
  - "[Docs:cli] https://context7.com/docs/clients/cli extracted 2026-05-20; ctx7 supports library resolution, docs querying, skill management and MCP configuration; requires Node.js 18+"
  - "[Docs:api] https://context7.com/docs/api-guide extracted 2026-05-20; documents Authorization: Bearer CONTEXT7_API_KEY, search/context/refresh/add endpoints, rate limits and API-key behavior"
  - "[Docs:on-prem] https://context7.com/docs/enterprise/on-premise extracted 2026-05-20; on-premise edition includes parsing/indexing, local vector storage, MCP server, web UI, REST API and private GitHub/GitLab ingestion"
  - "[Docs:docker] https://context7.com/docs/enterprise/deployment/docker extracted 2026-05-20; enterprise Docker image ghcr.io/context7/enterprise:latest uses LICENSE_KEY and exposes web UI on port 3000"
  - "[NPM] npm view queried 2026-05-20; ctx7=0.4.2 MIT Node>=18, @upstash/context7-mcp=2.2.5 MIT, @upstash/context7-sdk=0.3.0 MIT, @upstash/context7-tools-ai-sdk=0.2.3 MIT"
---

# Context7

> 面向 AI coding agents 的实时文档上下文层：通过 MCP、CLI、SDK 与 REST API，把版本化官方文档和代码示例送进 agent 的工作上下文。
>
> **状态**: `active` · **总分**: 3.9/5 · **推荐度**: 4/5
> **核验版本**: GitHub commit `438b1df235218c6dd66086e9b0d6a5b410f1635e`；GitHub API / Docs / npm 快照 2026-05-20

## 一句话总结

Context7 是典型的 Agent Infrastructure：它解决“agent 写代码时如何获得当前版本 API 文档”这一 context grounding 问题，而不是一个普通搜索工具或单纯文档站。

## 总体评价

Context7 应归入 `agent-programs/agent-infrastructure`。它提供的核心 primitive 是 **documentation context as a service/tool**：agent 在生成代码前，通过 MCP tool、`ctx7` CLI、SDK 或 REST API 解析库 ID、拉取相关文档片段和代码示例，从而降低 hallucinated API 与过时训练数据的风险 [Docs:intro][Docs:cli][Docs:api]。

这个定位与 CLI-Anything、MCP Servers、CodeGraph 同在 agent infrastructure 板块，但子层不同：CLI-Anything 偏 tool access，MCP Servers 偏 protocol/reference tool substrate，CodeGraph 偏 codebase context cache；Context7 则是 **external library documentation grounding layer**。对 coding agents 来说，它补的是“外部 API 当前事实”这一类上下文缺口。

需要明确 repo/product 边界：公开仓库主要包含 CLI、MCP server、SDK、AI SDK tools、docs 与插件/skill 表面；README 明确说明 API backend、parsing engine、crawling engine 等支撑组件是私有的，不在此仓库内 [GH][GH:local-scan]。所以能力评分可以参考官方产品文档，但代码质量不能把私有 backend 当作已审计开源实现。

## 推荐度：4/5

**定位**：面向经常让 Claude Code、Cursor、OpenCode 等 agent 生成库/API 相关代码，并且希望减少 outdated docs / hallucinated APIs 的开发者和 agent-infra 构建者。

推荐度 4/5。给 4 的理由：它命中 coding-agent 真实痛点，MCP + CLI + SDK + REST API 入口完整，文档体系清楚，接入成本低 [Docs:intro][Docs:cli][Docs:api][NPM]。不给 5 的理由：开源仓库只是产品表面的一部分，核心索引/解析/爬取后端不可审计；此外 API key、private source、teamspace、on-prem 等产品面带来数据与权限风险，需要按环境审查 [Docs:api][Docs:on-prem]。

## 优势

1. **抽象层正确**：把“当前版本文档”做成 agent 可调用的 MCP/CLI/API，而不是让 agent 靠浏览器搜索或训练记忆猜 API [Docs:intro][Docs:cli]。
2. **接入方式多**：支持 MCP server、`ctx7` CLI、Context7-compatible library ID、TypeScript SDK、Vercel AI SDK tools，以及 Claude Code/Cursor/OpenCode 等 client 文档 [GH:local-scan][Docs:cli][NPM]。
3. **上手路径清晰**：`npx ctx7 setup`、manual MCP URL、`ctx7 library` → `ctx7 docs` 两步查询，以及 REST API workflow 都有明确文档 [GH][Docs:cli][Docs:api]。
4. **文档质量强**：官方 docs 覆盖 overview、CLI、API、skills、security、enterprise/on-prem、Docker/Kubernetes 等场景，且提供 `llms.txt` 文档索引 [Docs:intro][Docs:cli][Docs:api][Docs:on-prem]。
5. **社区关注度高**：GitHub API 快照显示 55k+ stars、2.6k+ forks、contributors first page 100 人，近期 PR 仍有合并活动 [GH:api][GH:contributors][GH:issues]。

## 劣势

1. **公开 repo 不是完整系统**：README 明确 supporting API backend、parsing engine、crawling engine 是 private，不在本仓库中；因此无法从开源代码完整审计数据处理链路 [GH][GH:local-scan]。
2. **依赖外部服务与 API key**：公共 API 需要 `CONTEXT7_API_KEY`，并受 rate limit、plan 与 dashboard 配置影响；无 key 时也有低限额约束 [Docs:api]。
3. **安全边界复杂**：文档源是 community-contributed，README 自带 accuracy/completeness/security disclaimer；private sources 与 on-prem 场景涉及 repo token、embedding、索引与访问控制 [GH][Docs:on-prem]。
4. **成熟度仍需保守**：仓库创建于 2025-03，CLI 最新 release 为 `ctx7@0.4.2`，SDK/AI SDK tools 仍处在 0.x；迭代速度快但稳定承诺不能按传统成熟基础设施理解 [GH:api][GH:release][NPM]。
5. **社区治理信号不满格**：GitHub community profile 只给 50%，未检测到 CONTRIBUTING/CODE_OF_CONDUCT/PR template；高 star 不等于开放治理成熟 [GH:community]。

---

## 适合什么场景

- coding agent 在生成库/API 相关代码前，需要快速拉取当前版本文档。
- Claude Code、Cursor、OpenCode 等工具链中，需要一个统一 documentation grounding layer。
- agent framework / Vercel AI SDK 应用需要通过工具调用检索库文档。
- 团队希望把私有库、内部文档、GitHub/GitLab repo 纳入 agent 可查询文档系统，并愿意评估 enterprise/on-prem 方案 [Docs:on-prem][Docs:docker]。
- 学习 MCP server 与 agent documentation tools 的产品化设计。

## 不适合什么场景

- 需要完全开源、可本地审计 parsing/indexing/crawling 后端的场景。
- 不能把 API key、私有 repo token 或文档内容交给外部服务的高敏环境，除非使用并审计 on-prem 方案。
- 需要离线、无网络、无服务依赖的文档检索。
- 以为 Context7 能保证所有 community-contributed docs 都准确、安全、完整的场景；官方 README 明确不作这种保证 [GH]。
- 需要通用代码库结构理解或调用真实软件工具的场景；这更接近 CodeGraph 或 CLI-Anything 的边界。

## 与类似项目对比

| 项目 | 定位 | 相对本项目 |
|------|------|-----------|
| MCP Servers | 官方 MCP reference server 集合 | 更偏协议与工具服务器样板；Context7 更偏具体的 documentation context service |
| CLI-Anything | 把任意软件包装为 agent-native CLI/harness | 更偏 tool access 与 harness registry；Context7 更偏外部库文档检索 |
| CodeGraph | 预索引本地代码知识图谱 | 更偏本地 codebase context cache；Context7 更偏第三方库/API 文档 grounding |
| AgentMemory | agent memory infrastructure | 更偏长期记忆与状态；Context7 更偏即时、版本化技术文档上下文 |

上述项目按 `agent-programs/agent-infrastructure` 同类范围做定位级对比，未按同一 10 维度框架深审。

## 个人主页 sharing 候选

是。Context7 适合作为个人主页 sharing 候选：它把“LLM 训练数据过时”这个抽象问题转成非常具体的 agent infrastructure 组件，叙事清楚，实用性强，也能自然连接 MCP、skills、agent coding workflow 与 documentation engineering。

---

## 它能做什么

能力评分 4/5。

- **MCP documentation tools**：通过 MCP 暴露 library resolution 与 docs querying，使 agent 可以原生调用文档检索工具 [GH][Docs:cli]。
- **CLI workflow**：`ctx7 library <name> <query>` 解析库，`ctx7 docs <libraryId> <query>` 获取文档；支持 JSON output 和 pipe-friendly output [Docs:cli]。
- **SDK/API workflow**：REST API 提供 library search、context retrieval、refresh、add repo/OpenAPI/website/llms.txt 等 endpoint；TypeScript SDK 和 Vercel AI SDK tools 覆盖程序化接入 [Docs:api][NPM]。
- **agent setup**：`ctx7 setup` 可在 MCP server mode 与 CLI+Skills mode 间选择，面向 Claude Code、Cursor、OpenCode 等 client [Docs:cli]。
- **enterprise/on-prem**：官方文档描述 on-prem edition 包含 parsing/indexing pipeline、local vector storage、MCP server、web UI、REST API、private GitHub/GitLab ingestion [Docs:on-prem][Docs:docker]。

不给 5 的原因是：公开仓库不能完整验证后端 indexing/crawling 质量，且 private docs / enterprise 能力属于产品文档层，不等于本 repo 可审计能力 [GH][Docs:on-prem]。

## 运行环境与资源占用

| 场景 | CPU | 内存 | 存储 | 说明 |
|------|-----|------|------|------|
| 最小 | 低 | 低 | 小 | 本地只运行 `ctx7` CLI 或 MCP wrapper；Node.js 18+ 即可 [Docs:cli][NPM] |
| 推荐 | 低到中 | 低到中 | 小到中 | 团队使用公共 Context7 API 时，本地资源主要是 client/tooling；服务端成本由 Context7 承担 [Docs:api] |
| Enterprise/on-prem | 取决于规模 | 取决于规模 | 取决于文档/embedding 规模 | Docker/on-prem stack 包含 web/API/index/vector 等组件；官方文档提供 Docker Compose 与 health check [Docs:on-prem][Docs:docker] |

- **运行时**：Node.js 18+；TypeScript packages；MCP server 可作为 npm package 使用 [Docs:cli][NPM]。
- **操作系统**：CLI/MCP 以 Node.js 为主，理论上跨平台；enterprise Docker 部署依赖容器环境 [Docs:docker]。
- **Docker**：公共开源 repo 中主要是 CLI/MCP/SDK；Docker 支持主要见于 enterprise/on-prem 文档，需要 license key 与 registry token，不应理解为完整 OSS local stack [Docs:docker]。
- **GPU**：不要求 GPU。
- **外部依赖**：公共 API、API key、Context7 hosted service；on-prem 还涉及 LLM/embedding provider 和 GitHub/GitLab token [Docs:api][Docs:on-prem]。

performance 给 4：本地 agent tool surface 很轻，主要资源消耗被外包到服务端；但完整 indexing/embedding pipeline 的资源效率无法从公开 repo 独立验证。

## 上手体验

评分 4/5。

Context7 的上手体验很好：README 直接给 `npx ctx7 setup`，CLI docs 给出 `ctx7 library` → `ctx7 docs` 的具体流程，API docs 给出 Python `requests` 示例；manual MCP URL 和 API key header 也清楚 [GH][Docs:cli][Docs:api]。

扣一分主要是因为真实使用会遇到三个非零配置点：API key / rate limit、agent-client-specific MCP 配置，以及 library ID 选择/版本 pinning。对于熟悉 MCP 的用户很顺；对完全新手仍需要理解“先 resolve library id，再 query docs”的模型。

## 代码质量

评分 4/5。

本地扫描显示 repo 是小而清晰的 TypeScript monorepo：`packages/cli`、`packages/mcp`、`packages/sdk`、`packages/tools-ai-sdk` 均有 package manifest、build/test/typecheck 脚本，根 package 提供 build/typecheck/test/lint/format/release 脚本；仓库有 6 个 GitHub workflows、18 个 test/spec-ish 文件 [GH:local-scan]。

代码质量不能给 5，因为公开 repo 并不包含完整 backend/parsing/crawling/indexing engine。对于 CLI/MCP/SDK 表面，结构是清楚的；对于产品的核心质量，开源代码只给部分证据。

## 可扩展性

评分 4/5。

Context7 的扩展面比较完整：MCP tool、CLI、REST API、SDK、Vercel AI SDK tools、agent plugins/skills、多 client 文档，均为外部系统集成提供入口 [GH:local-scan][Docs:cli][Docs:api][NPM]。API 还支持添加 repo、OpenAPI、website、llms.txt 等来源 [Docs:api]。

不给 5 的理由是：核心 ingestion/indexing backend 闭源，深度自定义通常需要进入商业/enterprise/on-prem 产品路径，而不是单靠公开 repo fork 即可完全控制。

## 文档质量

评分 5/5。

文档是 Context7 的强项。README 解释了 without/with Context7、installation、library ID、version pinning、rules、CLI commands、MCP tools 和 disclaimer；官方 docs 则覆盖 overview、CLI、API、skills、security、client integrations、enterprise/on-prem、Docker 等 [GH][Docs:intro][Docs:cli][Docs:api][Docs:on-prem]。

尤其重要的是：文档同时服务人类和 agent。它提供 `llms.txt` index，CLI 文档强调 JSON output 和 pipe-friendly output，API 文档给出 endpoint、header、rate limit 与 workflow，这些都符合 agent infrastructure 的信息结构需求 [Docs:cli][Docs:api]。

## 社区与成熟度

| 维度 | 评分 | 说明 |
|------|------|------|
| 社区活跃度 | 4/5 | GitHub API 快照显示 55k+ stars、2.6k+ forks、contributors first page 100、近期 merged PR=15；但 community health 50%，缺少被 API 检出的 CONTRIBUTING/CODE_OF_CONDUCT/PR template，故不按 5 处理 [GH:api][GH:contributors][GH:issues][GH:community] |
| 成熟度 | 3/5 | 仓库 2025-03 创建，CLI release 到 0.4.2，SDK/AI SDK tools 仍是 0.x；产品发展快且已有企业文档，但稳定年限与开源可审计面不足以给 4 [GH:api][GH:release][NPM] |

## 安全与风险

评分 3/5。

安全结论必须分层看：

- **公开 advisory 检查**：GitHub security advisories API 在本次检查中返回空；但“未发现 advisory”不等于安全证明，只能说明本轮未查到公开 GitHub advisory [GH:advisories]。
- **API key 与 rate limit**：API 请求使用 `Authorization: Bearer CONTEXT7_API_KEY`；有效 key、dashboard、plan 与 rate limit 都是生产使用要管理的边界 [Docs:api]。
- **private data surface**：private sources、teamspace、on-prem ingestion、Git tokens、embedding/provider 配置都会涉及敏感代码和文档；需要组织级访问控制与数据保留策略 [Docs:on-prem][Docs:docker]。
- **untrusted docs risk**：README 明确声明 community-contributed projects 的准确性、完整性和安全性不能保证，用户需自行承担使用风险 [GH]。
- **开源审计边界**：后端 parsing/crawling/indexing 不在公开仓库中，无法像纯开源基础设施那样完整审计 [GH][GH:local-scan]。

因此 security 给 3：不是发现了严重漏洞，而是 attack surface 和闭源边界使其不宜盲目进入高敏环境。

## 学习价值

Context7 很值得学习。它展示了一个好的 agent infrastructure 产品如何把“文档检索”拆成可组合 primitive：library ID resolution、version-specific context retrieval、MCP tools、CLI+skills fallback、REST API、SDK、enterprise/on-prem 边界，以及面向 agent 的文档结构。即便不采用它，也值得借鉴其 information architecture。