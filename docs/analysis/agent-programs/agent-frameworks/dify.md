---
title: "Dify"
created: 2026-05-20
updated: 2026-05-20
type: repository-analysis
repo_url: "https://github.com/langgenius/dify"
category: "agent-programs/agent-frameworks"
tags: ["agent-framework", "agent-platform", "llm-apps", "workflow", "rag", "low-code", "self-hosted", "typescript", "python", "mcp"]
previous_repo: ""
successor: ""
primary_language: "TypeScript"
license: "Dify Open Source License"
stars: 141973
forks: 22313
last_checked: 2026-05-20
last_verified: 2026-05-20
evidence: "GitHub API + official docs + npm metadata + repository local scan; not deployed in production by Develata"
archived_reason: ""
docker_support: true
gpu_required: false
estimated_cpu: "minimum 2 cores by README; docs recommend at least 2 virtual CPUs for Docker Desktop; production/self-host load depends on API, worker, plugin daemon, vector DB and model-provider traffic"
estimated_memory: "README minimum 4 GiB; Docker Compose docs recommend at least 8 GiB for Docker Desktop; production should budget more for vector DB, worker concurrency and plugins"
estimated_storage: "large monorepo and multi-container stack; runtime storage dominated by PostgreSQL, Redis, vector DB, uploaded files, knowledge indexes, logs and plugin data"
status: active
sharing_candidate: true
ratings:
  capability: 5
  usability: 4
  performance: 3
  code_quality: 4
  documentation: 5
  community: 4
  maturity: 3
  extensibility: 5
  security: 2
  recommendation: 4
overall_score: 3.9
sources:
  - "[GH] https://github.com/langgenius/dify"
  - "[GH:api] https://api.github.com/repos/langgenius/dify queried 2026-05-20; stars=141973, forks=22313, open_issues_count=801, created_at=2023-04-12, pushed_at=2026-05-20, default_branch=main, GitHub API license.spdx_id=NOASSERTION, homepage=https://dify.ai, topics include agentic-ai/agentic-workflow/llm/low-code/mcp/rag/workflow"
  - "[GH:issues] GitHub Search API queried 2026-05-20; open issues=277, open PRs=524, closed issues=17465, closed PRs=13385 for repo:langgenius/dify; repo open_issues_count from [GH:api] includes issues plus PRs"
  - "[GH:languages] https://api.github.com/repos/langgenius/dify/languages queried 2026-05-20; TypeScript=31928166, Python=25510963, JavaScript=1522323, MDX=828946, CSS=253034, HTML=168765, Shell=63689"
  - "[GH:release] https://api.github.com/repos/langgenius/dify/releases/latest queried 2026-05-20; latest release 1.14.2 published 2026-05-19; release title notes security fixes, agent groundwork, workflow reliability and deployment updates"
  - "[GH:contributors] https://api.github.com/repos/langgenius/dify/contributors?per_page=100 queried 2026-05-20; first page contributors=100; top entries include laipz8200=697, takatost=539, iamjoel=483, lyzno1=385"
  - "[GH:community] https://api.github.com/repos/langgenius/dify/community/profile queried 2026-05-20; health_percentage=87; README, CONTRIBUTING, CODE_OF_CONDUCT, PR template and license detected; issue_template not detected"
  - "[GH:advisories] https://api.github.com/repos/langgenius/dify/security-advisories?per_page=20 queried 2026-05-20; returned 17 advisories; sampled high/medium risks include GHSA-qqjx-5h5w-x5vj CVE-2026-26023 high DOM XSS <=V1.11.4, GHSA-phpv-94hg-fv9g CVE-2025-67732 high plaintext API key exposure <=1.10.1-fix.1 patched 1.11.0, GHSA-8235-vv5j-mmvg high unauthenticated SSRF <1.13.0 patched 1.13.0, GHSA-9jch-j9qf-vqfw CVE-2025-58747 high MCP OAuth XSS <=1.8.0"
  - "[GHSA:rbac] https://github.com/langgenius/dify/security/advisories/GHSA-hqcx-598m-pjq4 extracted 2026-05-20; unauthorized app enable/disable via API by normal authenticated users, improper access control"
  - "[GHSA:mcp-xss] https://github.com/langgenius/dify/security/advisories/GHSA-9jch-j9qf-vqfw extracted 2026-05-20; MCP OAuth flow XSS when connecting to attacker-controlled remote MCP server"
  - "[GH:local-scan] Local clone /tmp/repo-wiki-batch4/dify at commit 5cdf4e405bff394f8031b54e6a1b2128f76fddab dated 2026-05-20; shallow clone git rev-list count=1; files excluding .git=11674; package.json files=10, pyproject.toml files=40, Dockerfile=4, docker-compose files=5, test/spec-ish matches=3575; checked README.md, AGENTS.md, CONTRIBUTING.md, LICENSE, docker/README.md, api/pyproject.toml, web/package.json, dify-agent/pyproject.toml"
  - "[Docs:intro] https://docs.dify.ai/ extracted 2026-05-20; describes Dify as open-source platform for building agentic workflows, connecting tools/data sources, deploying AI applications; docs sections include Quick Start, Concepts, Self Host, Forum, Changelog, Tutorials"
  - "[Docs:llms] https://docs.dify.ai/llms.txt extracted 2026-05-20; docs index covers application/chatflow/completion/workflow/knowledge APIs, plugin development, self-hosting, app building, knowledge base, monitoring, publishing APIs/MCP/web apps and OpenAPI specs"
  - "[Docs:docker] https://docs.dify.ai/getting-started/install-self-hosted/docker-compose extracted 2026-05-20; Docker Compose requires Docker Compose 2.24.0+, recommends at least 2 virtual CPUs and 8 GiB memory for Docker Desktop, starts api/worker/worker_beat/web/plugin_daemon/weaviate/db_postgres/redis/nginx/ssrf_proxy/sandbox"
  - "[GH:readme] Local README.md checked 2026-05-20; describes Dify as open-source LLM app development platform combining AI workflow, RAG pipeline, agent capabilities, model management and observability; minimum CPU >=2 cores and RAM >=4 GiB; license is Dify Open Source License based on Apache 2.0 with additional conditions"
  - "[GH:license] Local LICENSE checked 2026-05-20; modified Apache-2.0-like license adds conditions including commercial license for multi-tenant service without written authorization and restrictions on removing logo/copyright in frontend"
  - "[NPM] npm view queried 2026-05-20; dify-client=3.1.0 MIT unpackedSize=88557; repository itself is private/package monorepo and not represented by this SDK license"
---

# Dify

> 开源 LLM / agentic workflow application platform：用可视化工作流、RAG、agent、模型管理、插件、API、监控和自托管部署，把 LLM 应用从 prototype 推到 production-like system。
>
> **状态**: `active` · **总分**: 3.9/5 · **推荐度**: 4/5
> **核验版本**: GitHub commit `5cdf4e405bff394f8031b54e6a1b2128f76fddab`；GitHub API / Docs / npm 快照 2026-05-20

## 一句话总结

Dify 更准确地说是低代码 agent / LLM application **platform**，不是传统 framework/library。放在 `agent-programs/agent-frameworks` 是当前 taxonomy 下的近似归类；若以后新增 `agent-platforms` 或 `low-code-agent-platforms`，它应优先迁移过去。

## 总体评价

Dify 的核心价值不是提供一个单一 agent assistant，而是提供一整套 **agentic workflow development platform**：可视化 workflow/chatflow、RAG/knowledge base、agent tools、model providers、observability、API publishing、plugin marketplace/self-host、Docker deployment 和企业版路径 [GH][Docs:intro][Docs:llms]。它让团队用低代码方式把 LLM app 组装、发布、监控、迭代，而不是从 LangChain/LangGraph 这类 library framework 从零写 UI、权限、数据管线和运维面。

分类上这是边界案例。现有目录里 `agent-programs/agent-frameworks` 更偏 library/framework，如 LangChain；Dify 则偏平台产品。但它确实是“构建 agentic workflows / LLM apps 的开发层”，比 `agent-infrastructure` 更高层，比 `agent-assistants` 更底层，也不只是 workflow automation。因此本次放入 `agent-programs/agent-frameworks`，并在正文中标注未来 taxonomy 迁移可能性。

总体评价：Dify 是功能覆盖极强、社区极热、文档完整的开源 AI application platform；但它也是大而重的多租户 Web 系统，历史安全 advisories 多，license 非标准 Apache，运维/升级/权限治理要求高。它适合认真建设 AI 应用平台的团队，不适合作为“随手跑一个 agent demo”的轻量依赖。

## 推荐度：4/5

**定位**：面向需要低代码构建、发布、监控和自托管 LLM / RAG / agentic workflow 应用的团队，尤其是希望把模型、工具、知识库、API 和 workflow UI 统一到一个平台中的团队。

推荐度 4/5。这个 4/5 只面向具备 security/ops maturity 的团队：Dify 能力面接近 full-stack AI app platform，文档体系和自托管路径完整，社区与维护活跃，插件和 API surface 丰富 [Docs:llms][Docs:docker][GH:contributors]。不给 5 的理由：它的系统复杂度、安全攻击面、历史 advisory 数量、license 条件和 open PR backlog 都不能忽略；casual production use 不应直接照搬 quick start，生产部署前必须做权限、网络、SSRF、XSS、secret、tenant isolation、upgrade/migration 的专门审计 [GH:advisories][GH:license][GH:issues]。

## 优势

1. **能力面极广**：workflow、chatflow、chatbot、agent、RAG/knowledge base、model providers、observability、API publishing、plugin development、自托管部署都在一个平台内 [GH:readme][Docs:llms]。
2. **上手路径清楚**：README 和 docs 都给出 Docker Compose quick start；Cloud 与 self-host 两条路径并存 [GH:readme][Docs:docker]。
3. **扩展面强**：官方 docs 覆盖 application/workflow/knowledge APIs、plugin development、OpenAPI specs、MCP/web app/API publishing 等 [Docs:llms]。
4. **工程体量和测试信号强**：本地扫描显示 TypeScript/Python 大型 monorepo，包含 api/web/docker/dify-agent/e2e/packages，多类测试、CI workflow、AGENTS.md 约束和贡献指南 [GH:local-scan]。
5. **社区与采用关注度极高**：API 快照显示 141k+ stars、22k+ forks、contributors first page 100 人，closed issues/PRs 数量很大，说明维护吞吐高 [GH:api][GH:issues][GH:contributors]。

## 劣势

1. **重系统，不是轻 SDK**：Docker Compose 启动 api、worker、worker_beat、web、plugin_daemon、weaviate、PostgreSQL、Redis、nginx、ssrf_proxy、sandbox 等多个服务；运维面天然较大 [Docs:docker]。
2. **历史安全问题多**：GitHub API 返回 17 条 security advisories，涉及 XSS、SSRF、API key exposure、IDOR、access control 等；多数已有 patched versions，但说明攻击面真实存在 [GH:advisories]。
3. **license 非标准开源宽松许可**：GitHub API 的 SPDX 检测为 `NOASSERTION`，本地 LICENSE 标识为 Dify Open Source License，基于 Apache 2.0 但附加 multi-tenant service 和 frontend logo/copyright 条件；frontmatter 写实际 license 名称而非误写 Apache-2.0 [GH:api][GH:license]。
4. **issue/PR backlog 高**：Search API 快照显示 open issues=277、open PRs=524；活跃度强，但维护压力也大 [GH:issues]。
5. **升级/配置复杂**：release 1.14.2 明确包含 deployment/runtime tuning、env layout 变化和 upgrade guide；长期自托管需要严肃管理 `.env`、compose、数据库迁移和插件版本 [GH:release][Docs:docker]。

---

## 适合什么场景

- 团队需要低代码搭建 Chatbot、Chatflow、Workflow、Agent、RAG knowledge base，并发布 Web app 或 API。
- 希望统一管理多模型 provider、工具、插件、知识库、日志、监控和应用版本。
- 有运维能力自托管 Docker Compose / Kubernetes-like 部署，并愿意维护数据库、Redis、vector DB、sandbox、ssrf_proxy、plugin daemon 等组件 [Docs:docker]。
- 企业内部希望给非纯工程团队一个可视化 AI workflow 平台，而不是要求所有人写 LangChain/LangGraph 代码。
- 研究 agent platform 产品形态、插件系统、workflow UI、RAG 与 LLMOps 的工程实现。

## 不适合什么场景

- 只需要一个轻量 Python/TypeScript agent framework 或几行 SDK call；Dify 的平台复杂度会过度。
- 对 license 纯 Apache/MIT 有硬要求，或计划无授权经营多租户 Dify-derived SaaS。
- 没有能力处理 XSS/SSRF/RBAC/secret/tenant isolation/upgrade migration，却要把它暴露在公网生产环境。
- 资源极小的 VPS；完整 Docker Compose stack 至少需要多容器和数 GB 内存 [GH:readme][Docs:docker]。
- 需要完全用代码定义和版本化所有 agent graph，且不想引入可视化平台状态和数据库配置；此时 LangGraph / code-first frameworks 可能更合适。

## 与类似项目对比

| 项目 | 定位 | 相对本项目 |
|------|------|-----------|
| LangChain | Python LLM/agent framework | LangChain 更 code-first library；Dify 更 visual low-code application platform |
| LangGraph | agent runtime / graph orchestration | LangGraph 更偏 durable graph runtime；Dify 更偏端到端应用平台、UI、RAG 和发布管理 |
| LlamaIndex | data/RAG-centric LLM framework | LlamaIndex 更偏数据连接和 indexing；Dify 把 RAG 放入完整 app/workflow 平台 |
| Vercel AI SDK | TypeScript AI app framework | Vercel AI SDK 更偏前端/全栈代码框架；Dify 更偏可视化工作流与自托管平台 |
| CrewAI | multi-agent orchestration framework | CrewAI 更偏 role-based multi-agent code workflow；Dify 更偏企业应用平台和低代码编排 |

上述项目按 `agent-programs/agent-frameworks` 同类范围做定位级对比，未按同一 10 维度框架深审。Dify 是本目录中的边界案例：若未来新增 `agent-programs/agent-platforms`，它比 LangChain 更应归入 platform 子类。

## 个人主页 sharing 候选

是。Dify 适合作为 sharing 候选，但最好不是写“Dify 好不好用”这种泛评，而是写 taxonomy 型文章：**agent framework vs agent platform vs workflow automation vs agent infrastructure**。它正好展示了低代码 AI platform 的吸引力与代价：把能力打包得很完整，也把安全、运维、license 和升级复杂度一起带进来。

---

## 它能做什么

能力评分 5/5。

- **Workflow / Chatflow / Agent**：可视化构建 AI workflows、chatflows 和 agents，连接工具与数据源 [Docs:intro][Docs:llms]。
- **RAG / Knowledge**：知识库、文档、chunk、metadata、tag、indexing lifecycle、knowledge pipeline APIs 等 [Docs:llms]。
- **Model management**：README 声称支持大量 proprietary / open-source LLM provider 和 OpenAI-compatible models [GH:readme]。
- **Publishing / APIs**：应用 API、Chat/Chatflow/Completion/Workflow APIs、WebApp、embeds、MCP servers、OpenAPI specs [Docs:llms]。
- **Plugin development**：工具、模型、agent、trigger、data source、endpoint 等 plugin types，支持 marketplace/publishing/signing/packaging [Docs:llms]。
- **Observability / LLMOps**：README 提到 logs、performance、annotations，以及 Opik、Langfuse、Arize Phoenix integrations [GH:readme]。
- **Self-hosting**：Docker Compose 和 source-code deployment；Docker stack 包括 api、worker、web、plugin daemon、vector DB、database、Redis、nginx、ssrf_proxy、sandbox [Docs:docker]。

这是 5/5 capability：Dify 覆盖的不是单点能力，而是一整套 LLM application platform surface。扣分主要在安全、性能、成熟度与推荐度，而不是能力广度。

## 运行环境与资源占用

| 场景 | CPU | 内存 | 存储 | 说明 |
|------|-----|------|------|------|
| 最小体验 | >=2 cores | >=4 GiB | 中等 | README 给出的最低系统要求 [GH:readme] |
| Docker Desktop 推荐 | >=2 vCPU | >=8 GiB | 中到大 | docs 对 Docker Desktop 建议至少 2 vCPU / 8 GiB [Docs:docker] |
| 生产自托管 | 随并发、worker、plugin、RAG 增长 | 通常显著高于最小值 | DB/vector/files/logs 持续增长 | api/worker/web/plugin_daemon/vector DB/Postgres/Redis/nginx/ssrf_proxy/sandbox 多服务共同构成 [Docs:docker] |

- **Docker**：官方 Docker Compose 是主要自托管入口 [Docs:docker]。
- **GPU**：Dify 自身不要求 GPU；模型推理可以走外部 provider 或自托管模型，后者 GPU 另算。
- **性能评分 3/5**：作为平台，它资源占用中等偏高但合理；相较轻量 SDK/framework，它不是 resource-efficient 的极简方案。多容器、RAG indexing、vector DB、worker 和 plugin daemon 使成本随功能快速上升 [Docs:docker]。

## 上手体验

评分 4/5。

Dify 对“想快速看到效果”的用户很友好：Cloud 可零部署体验；self-host 也有 `cd docker && cp .env.example .env && docker compose up -d` 的明确路径，启动后访问 `/install` 初始化 [GH:readme][Docs:docker]。Docs 首页也把 Quick Start、Concepts、Self Host、Tutorials 放在清楚入口 [Docs:intro]。

扣一分是因为真正自托管不是低认知负担：环境变量多、服务多、vector store/storage/model provider/plugin/security 选择多；升级还涉及 `.env.example`、`envs/**`、docker compose 与数据迁移 [Docs:docker][GH:release]。作为平台，它易“起”，不一定易“稳”。

## 代码质量

评分 4/5。

本地扫描和 GitHub languages API 显示 Dify 是大型但有组织的 TypeScript/Python monorepo：backend API 是 Python Flask，frontend 是 Next.js/TypeScript，Docker deployment 独立在 `/docker`，还有 `dify-agent` backend、packages、e2e、sdks 等。AGENTS.md 明确描述 DDD/Clean Architecture、Celery + Redis、TDD、pytest、strict typing、ESLint/type-check 等约束 [GH:languages][GH:local-scan]。

测试和质量信号也强：本地扫描发现大量 test/spec-ish 文件，CI workflow 包括 api/web/vdb/db migration/tool SDK 等测试；CONTRIBUTING 要求 PR 添加测试并通过现有测试 [GH:local-scan]。

不给 5 的理由：项目体量极大，open PR backlog 很高，历史 security advisories 多，且本次没有完整运行测试/覆盖率审计。代码组织良好，但不能以 README/CI 信号证明“极佳且覆盖率 ≥80%”。

## 可扩展性

评分 5/5。

Dify 的扩展性是核心卖点：workflow nodes、tools、plugins、model providers、RAG knowledge pipelines、Application APIs、Workflow APIs、Knowledge APIs、OpenAPI specs、MCP/WebApp/API publishing 和自托管配置共同构成了多层扩展面 [Docs:llms]。README 也强调模型 provider、built-in/custom tools、backend-as-a-service API 和 observability integrations [GH:readme]。

这类扩展不是单一 plugin hook，而是平台级扩展。代价是复杂度高；这里的 5/5 指 plugin/API/workflow 层面的业务扩展性，不表示 fork 或深度改造内部实现会轻松。按“能否适配不同业务场景而不 fork”这一维度，Dify 可以给 5。

## 文档质量

评分 5/5。

Dify 文档非常完整：`llms.txt` 覆盖 API reference、plugin development、self-hosting、app building、knowledge base、monitoring、publishing、workspace、OpenAPI specs 等；Docker Compose docs 给出前置要求、启动命令、服务列表、访问路径、env customization 和 upgrade 说明 [Docs:llms][Docs:docker]。README 也有多语言入口、quick start、key features、advanced setup、community 和 security disclosure [GH:readme]。

唯一提醒是：文档覆盖很广，读者容易被 platform surface 淹没。对生产部署者，必须把 docs、release notes、security advisories 和 local config 一起读，而不能只看 quick start。

## 社区与成熟度

社区评分 4/5，成熟度评分 3/5。

社区非常活跃：GitHub API 快照显示 141973 stars、22313 forks；contributors first page 为 100 人；Search API 显示 closed issues=17465、closed PRs=13385，维护吞吐很高；community profile 87，检测到 README、CONTRIBUTING、CODE_OF_CONDUCT、PR template 和 license [GH:api][GH:issues][GH:contributors][GH:community]。

community 不给 5 是因为 open issues=277、open PRs=524，维护压力很大；并且 modified license + 商业公司主导平台意味着“社区热”不等于完全开放治理。

成熟度给 3 是按 stability/change-risk maturity，而不是按 project viability。Dify 已经超过三年、v1.14.2、生产定位明确，但仍在快速演进。release 1.14.2 仍包含 security fixes、agent groundwork、workflow reliability、deployment updates；历史 advisories 与 env/compose 迁移说明它还不是“长期稳定、破坏性变更罕见”的成熟平台 [GH:release][GH:advisories][Docs:docker]。

## 安全与风险

评分 2/5。

Dify 的安全面很大：它是多用户 Web 平台，处理登录、workspace/tenant、应用发布、API keys、model provider credentials、file upload、RAG 文档、workflow execution、插件、MCP OAuth、sandbox、ssrf_proxy、数据库和外部工具调用。GitHub Security Advisories API 本次返回 17 条 advisory；样本包括高危 DOM XSS、plaintext API key exposure、unauthenticated SSRF、MCP OAuth XSS、普通认证用户可越权启停 app 的 access-control 问题，以及 IDOR、user enumeration、stored XSS、weak PRNG 等 [GH:advisories][GHSA:mcp-xss][GHSA:rbac]。

这些 advisories 多数有 patched versions 或影响旧版本，不应理解为当前 `1.14.2` 一定仍漏洞暴露；但它们足以证明该平台的攻击面真实且复杂。latest release 1.14.2 标题本身也把 security fixes 放在重点 [GH:release]。

本次未穷尽所有 CVE/依赖风险；“发现并列出 advisories”也不等于安全审计。生产部署建议至少做到：及时升级到最新 release；配置强 `SECRET_KEY`；保护 model provider credentials；限制 file upload 类型和大小；保留并正确配置 ssrf_proxy/sandbox；对插件和远程 MCP server 做 allowlist；审计 RBAC/tenant isolation；使用 HTTPS；收紧 CORS；备份数据库；对公网暴露前做渗透测试 [Docs:docker][GH:advisories]。

License 风险也属安全/合规面：Dify Open Source License 基于 Apache 2.0 但有额外条件，尤其 multi-tenant service 与 frontend logo/copyright 约束。商业使用前应由法律/合规确认，不能把它当作普通 Apache-2.0；SDK 包如 `dify-client` 的 MIT license 也不能替代仓库服务端/platform license 判断 [GH:license][NPM]。

## 学习价值

学习价值很高。Dify 是研究 AI application platform 的典型样本：它把 workflow builder、RAG、agent tools、plugin system、self-host deployment、observability、API publishing 和多租户 Web 平台合在一起，几乎覆盖“把 LLM app 产品化”时会遇到的主要问题。

但学习时应分层看：产品抽象值得学，代码组织值得学，Docker/env 演进值得学，security advisories 更值得学。Dify 的教训不只是“平台可以很强”，也是“平台一强，攻击面、运维面、license 面皆随之而来”。器大者声必宏，亦必重。