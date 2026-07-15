---


title: "n8n"
created: 2026-05-20
updated: 2026-07-15
type: repository-analysis
repo_url: "https://github.com/n8n-io/n8n"
category: "ai-programs/agent-workflows"
tags: ["automation", "workflow", "low-code", "integrations", "ai-workflows", "agent-platform", "self-hosted", "typescript", "nodejs", "source-available"]
previous_repo: ""
successor: ""
primary_language: "TypeScript"
license: "Sustainable Use License"
stars: 196432
forks: 59324
last_checked: 2026-07-15
last_verified: 2026-07-15
evidence: "GitHub GraphQL/REST + release/advisory metadata + current official docs + npm metadata + shallow local scan at 897533b; no fresh deployment, queue-mode test, security audit, or production benchmark was performed"
archived_reason: ""
docker_support: true
gpu_required: false
estimated_cpu: "small local workflows can start on a modest multi-core machine; production queue mode/main+workers require capacity sized by workflow concurrency"
estimated_memory: "current Docker docs do not publish a universal minimum; production memory depends on workers, binary data, executions, task runners and node behavior"
estimated_storage: "small binary itself; runtime storage grows with PostgreSQL/SQLite, Redis queue, execution logs, binary data, workflow history and external storage choices"
status: active
ratings:
  capability: 5
  usability: 4
  performance: 3
  code_quality: 4
  documentation: 5
  community: 4
  maturity: 4
  extensibility: 5
  security: 2
  recommendation: 4
overall_score: 4.0
sources:
  - "[GH] https://github.com/n8n-io/n8n — repository and README verified 2026-07-15"
  - "[GH:api] GitHub GraphQL queried 2026-07-15 — 196432 stars, 59324 forks, 332 open issues, 1041 open pull requests, 718 releases; master HEAD 897533b6032bd16c7954abef0df95db230593909; license metadata NOASSERTION"
  - "[GH:issues] GitHub GraphQL queried 2026-07-15 — 332 open issues and 1041 open PRs are separate counts"
  - "[GH:languages] GitHub GraphQL queried 2026-07-15 lists TypeScript as primary; local scan confirms a TypeScript/Vue/Node monorepo"
  - "[GH:release] https://github.com/n8n-io/n8n/releases/tag/n8n%402.30.4 and release feed checked 2026-07-15 — latest stable/npm n8n@2.30.4 published 2026-07-13; newer 2.31.0 is prerelease; recent 2.29/2.30 work includes Instance AI/agent runtime changes, MCP registry/tools/session handling, skills/allowed-tools references, blocked-host settings and security fixes"
  - "[GH:contributors] GitHub contributors API first page queried 2026-07-15 — 100 entries; top counts janober 4631, ivov 1701, netroy 1317, RicardoE105 1075, alexgrozav 684"
  - "[GH:community] GitHub community profile queried 2026-07-15 — health 100%; README, CONTRIBUTING, Code of Conduct and PR template present"
  - "[GH:advisories] GitHub repository security-advisories API queried 2026-07-15 — 119 published advisories: 22 critical, 41 high, 55 medium, 1 low. Samples include GHSA-33q9-f52j-gc75 (medium, unauthenticated cancellation of active test webhooks, npm:n8n <2.28.0/<2.27.4), GHSA-x5vx-c2c8-m3w9 (high, AI Agents project-viewer privilege escalation, <2.30.1/<2.29.8), and GHSA-35q8-9mj6-wjmf (high, SSO role escalation, affected 1.x/2.x ranges). API returned no first_patched_version for these samples; range/branch semantics require advisory-level checking"
  - "[GH:local-scan] shallow clone master@897533b6032bd16c7954abef0df95db230593909 inspected 2026-07-15 — `git ls-files` returned 24964 tracked paths and 92 paths under `.github/workflows/`; README, SECURITY, CONTRIBUTING, CODE_OF_CONDUCT, LICENSE, AGENTS and package manifests inspected"
  - "[Docs:home] https://docs.n8n.io/ and repository README checked 2026-07-15 — workflow, hosting, integrations, advanced AI, credentials and API scope"
  - "[Docs:docker] https://docs.n8n.io/hosting/installation/docker/ extracted 2026-07-15 — Docker recommended for most self-hosting; expert-user warning, port 5678, persistent volume and PostgreSQL path. Page displayed stable 2.29.8/beta 2.30.1 while GitHub/npm already showed 2.30.4"
  - "[Docs:queue] https://docs.n8n.io/hosting/scaling/queue-mode/ extracted 2026-07-15 — main/workers/Redis/shared DB architecture, Postgres 13+, binary-storage and health/metrics constraints"
  - "[Docs:security] https://docs.n8n.io/hosting/securing/overview/ extracted 2026-07-15 — security audit, SSL/SSO/2FA, key rotation, node/API restrictions, redaction and SSRF guidance"
  - "[Docs:ai] https://docs.n8n.io/advanced-ai/ extracted 2026-07-15 — AI workflows can combine providers, tools, memory and multiple models"
  - "[Docs:nodes] https://docs.n8n.io/integrations/creating-nodes/overview/ checked 2026-07-15 — custom/private/community node development and testing"
  - "[Docs:license] https://docs.n8n.io/sustainable-use-license/ and local LICENSE.md inspected 2026-07-15 — fair-code/source-available Sustainable Use License; internal/non-commercial uses allowed, paid hosting/white-label restrictions; `.ee.` code excluded"
  - "[Docs:release] https://docs.n8n.io/release-notes/ and GitHub release feed checked 2026-07-15 — stable/beta cadence and 2.x AI/governance/security changes"
  - "[NPM] npm view checked 2026-07-15 — n8n 2.30.4; @n8n/n8n-nodes-langchain 2.30.3; both `SEE LICENSE IN LICENSE.md`"
---

# n8n

> Source-available workflow automation platform：用可视化节点、触发器、凭据、队列、插件和 AI/LangChain nodes，把 SaaS/API/数据库/人工审批/agentic workflows 编排成可运行自动化。
>
> **状态**: `active` · **总分**: 4.0/5 · **推荐度**: 4/5
> **核验版本**: GitHub API / Docs / npm / local clone 快照 2026-07-15；latest stable/npm `n8n@2.30.4`（`2.31.0` 为 prerelease）[GH:release][NPM]

## 一句话总结

n8n 的主分类在本次 taxonomy 中改为 `ai-programs/agent-workflows`：它原本是 workflow automation / integration platform，但在 2026 的语境下，AI nodes、LangChain nodes、agent、memory、human-in-the-loop 已经成为其重要能力面，适合放入 AI Programs 下的 Agent Workflow。

## 总体评价

n8n 是一个大型、成熟、生态极强的 workflow automation 平台。它的核心不是“单个 agent”或“agent infrastructure primitive”，而是把触发器、节点、凭据、数据转换、外部 API、数据库、队列、人工审批、日志和部署治理组织成可视化 workflow [GH][Docs:home]。因此本次归入 `ai-programs/agent-workflows`，而不是 `ai-programs/agent-infrastructure`。

但 agent taxonomy 判断仍要保留边界注记：n8n 已明显进入 AI/agent workflow 区域。官方 docs 支持把不同 LLM provider、tools、memory 与多个模型组合进 workflow；2.29/2.30 又继续推进 Instance AI、agent runtime、MCP registry/tools/session handling，以及 skills/allowed-tools references [Docs:ai][GH:release]。所以它不是 agent infrastructure 的“底层构件”，而是 **automation platform absorbing agent capabilities**。

总体评价：n8n 功能极强、文档完整、社区巨大、成熟度高、扩展性优秀；但它也是高攻击面、license 非标准、运维复杂的大系统。和 Dify 类似，n8n 的推荐成立于“有 security/ops maturity”的前提下，而不是随手把 Docker Compose 暴露到公网。

## 推荐度：4/5

**定位**：面向需要把 SaaS/API/数据库/内部系统/AI nodes/人工流程编排成自动化工作流的个人开发者、ops/data/automation 团队和具备自托管能力的组织。

推荐度 4/5。给 4 的理由：n8n 的能力面、节点生态、可视化体验、队列模式、文档、扩展能力和社区规模都非常强；如果目标是 workflow automation，它是优先评估对象 [Docs:home][Docs:queue][Docs:nodes]。不给 5 的理由也清楚：它的历史 GitHub Security Advisories 多，近期仍有 critical/high advisories；自托管需要懂 Docker、数据库、Redis、凭据、SSRF、防公网暴露、升级和 backup；Sustainable Use License 不是 OSI open-source license，对某些商业/多租户场景有明确限制 [GH:advisories][Docs:license][Docs:security]。

## 优势

1. **能力面极广**：workflow editor、trigger、credentials、built-in nodes、community/custom nodes、public API、queue mode、CLI、AI/LangChain nodes、webhook、monitoring 等构成完整 automation platform [Docs:home][Docs:ai][Docs:queue]。
2. **成熟度与生态强**：仓库创建于 2019，API 快照显示 196k+ stars、59k+ forks、718 releases，维护与发布频繁 [GH:api][GH:release]。
3. **扩展机制完善**：custom node docs 覆盖 planning、build、test、node linter、deploy/private/community nodes；monorepo 中有 `packages/nodes-base` 和 `@n8n/nodes-langchain` [Docs:nodes][GH:local-scan]。
4. **production/scaled 运行路径**：queue mode 分离 main、workers、Redis 和 shared DB；支持 health/readiness/metrics；Postgres、external storage、SSRF protection 等 docs 齐全 [Docs:queue][Docs:security]。
5. **agent workflow 融合自然**：LangChain nodes 可配置 agents、LLMs、memory，并和普通 n8n nodes 连接，适合把 AI 作为 workflow 中的一等节点 [Docs:ai]。

## 劣势

1. **安全历史负担重**：GitHub Security Advisories API 返回 119 条 advisories（22 critical、41 high、55 medium、1 low）；近期样本涉及 active-webhook cancellation、AI agent project-role escalation 与 SSO role escalation [GH:advisories]。
2. **自托管不是新手任务**：Docker docs 明确提示 self-hosting 需要服务器、容器、资源、扩容和安全配置知识，错误会导致 data loss、security issues、downtime [Docs:docker]。
3. **source-available license 有商业边界**：Sustainable Use License 允许内部/非商业使用，但对付费托管、white-label、多租户商业服务等有限制；n8n 自称 source-available 而非 open source [Docs:license]。
4. **系统较重**：生产 queue mode 需要 main、workers、Redis、Postgres，共享 binary data 还要外部存储；不是轻量 cron 替代品 [Docs:queue]。
5. **issue/PR backlog 高**：open issues=332、open PRs=1041，说明活跃度强但维护队列仍很大 [GH:issues]。

---

## 适合什么场景

- 需要把多个 SaaS、内部 API、数据库、Webhook、文件、邮件、IM、AI model、人工审批串成稳定自动化流程。
- 团队希望用可视化 workflow 降低非纯工程成员接入自动化/agent workflow 的门槛。
- 有自托管能力，能维护 Docker/Postgres/Redis/queue mode、备份、升级、SSO/2FA、SSL、SSRF protection 和节点限制 [Docs:docker][Docs:security][Docs:queue]。
- 需要用 LangChain-style AI nodes、agent、LLM、memory 与普通业务节点组合，构建 AI-enhanced operations [Docs:ai]。
- 想研究 workflow engine、node/plugin architecture、low-code automation、agent workflow 平台化。

## 不适合什么场景

- 只需要一两个 shell cron / webhook glue script；n8n 会显得过重。
- 对 OSI open-source license 有硬要求，或计划无商业协议经营 n8n-derived paid hosting / white-label 服务 [Docs:license]。
- 没有安全和运维能力，却要把自托管 n8n 直接暴露到公网并存放大量凭据。
- 需要严格 code-first、Git-native、可审计的所有 workflow 变更，而不希望引入可视化平台状态和数据库。
- 高敏环境中无法接受大量 third-party integrations、出站请求、OAuth credentials、custom nodes 和 AI model provider 带来的攻击面。

## 与类似项目对比

| 项目 | 定位 | 相对本项目 |
|------|------|-----------|
| Node-RED | flow-based automation / IoT integration | Node-RED 更偏 flow runtime 和 IoT/edge；n8n 更偏 SaaS/business workflow 与凭据/节点生态 |
| Huginn | self-hosted agents for events/automation | Huginn 更偏事件监控和轻量 agents；n8n 更偏可视化业务流程与 integrations 平台 |
| Activepieces | open-source automation platform | Activepieces 与 n8n 定位相近；n8n 社区和历史更大，但 license/安全/复杂度也需单独评估 |
| Windmill | developer-oriented workflow/app platform | Windmill 更偏 code-first scripts/jobs/apps；n8n 更偏 no/low-code 节点和业务集成 |

上述项目按 `ai-programs/agent-workflows` 同类范围做定位级对比，未按同一 10 维度框架深审。n8n 与 Dify、Flowise 这类 LLM / agent application platform 有交叉；差别在于 n8n 的底色仍是通用 automation，而 Dify/Flowise 更贴近 AI application / agent workflow builder。

---

## 它能做什么

能力评分 5/5。

- **Workflow automation**：用节点和连接构建触发、转换、调用、分支、循环、等待、人工步骤等自动化流程 [Docs:home]。
- **Integrations / nodes**：内置节点、community nodes、自定义节点、private nodes 和 node linter / verification 流程 [Docs:nodes]。
- **Credentials & secrets**：管理 OAuth/API key/外部 secrets，并通过配置和企业功能增强治理 [Docs:home][Docs:release]。
- **Queue mode / scaling**：main instance 负责 UI/API/timers/webhooks，workers 执行 workflows，Redis 做 queue，共享 DB 存 execution 状态 [Docs:queue]。
- **Advanced AI**：Cloud/self-hosted 中的 agent workflows、LangChain nodes、agents、LLMs、memory、Chat Trigger、chatbot widget [Docs:ai]。
- **Instance AI / MCP evolution**：近期 release 加入 workflow verification、MCP registry connections、MCP history/settings tools、session reuse、skills/allowed-tools references 等；这些能力进一步证明 agent workflow 已是重要主线 [GH:release]。
- **Security hardening**：SSL、SSO、2FA、disable public API、block nodes、SSRF protection、registration restriction 等 [Docs:security]。
- **Extensibility**：自定义 nodes、packages monorepo、public API、CLI、external hooks 和大量环境变量 [Docs:nodes][GH:local-scan]。

能力给 5，是因为在 workflow automation 范畴内 n8n 已覆盖从个人自动化到团队平台的主要场景；扣分集中在安全、性能/运维成本和 license 风险，而不是能力广度。

## 运行环境与资源占用

| 场景 | CPU | 内存 | 存储 | 说明 |
|------|-----|------|------|------|
| 本地体验/轻量 workflow | 普通多核 | 数 GB | SQLite/本地配置少量增长 | 可用 Docker 或 npm 路径；适合试用和低负载 [Docs:docker] |
| Docker 本地体验 | 未给统一最低值 | 未给统一最低值 | 持久化 `/home/node/.n8n` | 当前 Docker docs 推荐 Docker，强调 timezone、settings permission、task runners 与 expert-user 前提 [Docs:docker] |
| 生产 queue mode | main + workers 按并发扩容 | workers/执行数据随负载增长 | Postgres/Redis/execution logs/binary data 持续增长 | queue mode 需要 Redis、shared DB；binary data 不支持 filesystem storage，需 S3 external storage [Docs:queue] |

- **运行时**：Node.js/TypeScript 后端、Vue 前端、TypeORM、pnpm/turbo monorepo；AGENTS.md 记录 Express server、REST API、CLI、workflow engine、nodes-base、LangChain nodes [GH:local-scan]。
- **操作系统**：Docker Desktop / Docker Engine 路径覆盖常见 self-host；npm/source-code 路径另需 Node/pnpm/build tools [Docs:docker][GH:local-scan]。
- **Docker**：官方 docs 推荐 Docker；GitHub repo 含 Docker 相关 scripts 和 docker 目录 [Docs:docker][GH:local-scan]。
- **GPU**：n8n 自身不要求 GPU；AI model 推理通常由外部 provider 或另行部署的模型服务承担。
- **外部依赖**：生产推荐 Postgres/Redis，queue mode、external storage、SSL/SSO/secret provider 视部署而定 [Docs:queue][Docs:security]。

性能评分 3/5。n8n 对它覆盖的工作流平台场景是合理的，但不是资源极简工具。多服务、数据库、执行日志、binary data、workers 和大量节点使资源成本随场景快速上升。

## 上手体验

评分 4/5。

n8n 的“看到第一个结果”体验很好：Docker docs 给出本地启动、端口 5678、timezone、持久化 volume、Postgres 选项；Cloud 路径也可避开自托管 [Docs:docker]。可视化 workflow editor 对非纯工程用户友好，内置节点/模板/AI nodes 降低了构建自动化的门槛 [Docs:home][Docs:ai]。

扣一分在于：从 demo 到稳定生产的距离较长。自托管要求 Docker/DB/Redis/SSL/SSO/2FA/SSRF/node blocking/backup/upgrade；queue mode 和 binary data storage 有明确约束；大量环境变量和节点权限也需要系统治理 [Docs:docker][Docs:queue][Docs:security]。

## 代码质量

评分 4/5。

本地扫描显示 n8n 是大型 TypeScript/Vue/Node monorepo：`git ls-files` 返回 24964 个 tracked paths，其中 92 个位于 `.github/workflows/`；AGENTS.md 描述 packages/cli、core、workflow、nodes-base、frontend/editor-ui、@n8n/nodes-langchain 等分层，以及 DI、controller-service-repository、event bus、context-based execution、Pinia state 等架构模式 [GH:local-scan][GH:languages]。

CONTRIBUTING.md 给出 dev container、Node.js 24+、pnpm 10.22+、build/test/e2e、community PR rules 和 CLA 等流程；community profile 也完整 [GH:community][GH:local-scan]。不给 5 的原因是：仓库巨大、历史安全 advisory 多、open PR 很多，本次未运行完整测试/覆盖率，也不能仅凭 CI/AGENTS.md 推断实际 defect rate 很低 [GH:issues][GH:advisories]。

## 可扩展性

评分 5/5。

n8n 的扩展性是核心优势：custom node docs 覆盖规划、构建、测试、node linter、deploy/share/private nodes；monorepo 中有 nodes-base、workflow core、node-dev、LangChain nodes；平台支持公共 API、CLI、external hooks、environment variables、queue mode、community/private nodes [Docs:nodes][GH:local-scan]。

这是真正的插件/节点生态，而不只是 REST API。对 automation 平台来说，extensibility=5 成立；但它的代价是节点供应链和凭据安全需要治理，不能把“可扩展”误解为“无风险”。

## 文档质量

评分 5/5。

官方 docs 覆盖 Getting Started、Hosting、Configuration、Integrations、Advanced AI、Workflow、Credentials、Security、Scaling、Queue Mode、Release Notes、Custom Nodes、API 等；Docker、queue mode、安全加固和 AI/LangChain nodes 都有独立页面 [Docs:home][Docs:docker][Docs:queue][Docs:security][Docs:ai][Docs:nodes]。

文档还会明确边界：self-hosting 推荐 expert users；queue mode 的 binary data filesystem storage 不支持；Sustainable Use License 说明 n8n source-available 但不是 open source [Docs:docker][Docs:queue][Docs:license]。这种“把坑写出来”的文档质量值得给 5。

## 社区与成熟度

| 维度 | 评分 | 说明 |
|------|------|------|
| 社区活跃度 | 4/5 | 196432 stars、59324 forks、contributors 第一页已满、community profile=100；但 open PRs=1041 且项目公司治理/商业 license 明显，不因 star 数自动给满分 [GH:api][GH:issues][GH:contributors][GH:community] |
| 成熟度 | 4/5 | 仓库创建于 2019，release 频繁，stable/beta channel 明确；但 2.x 的 Instance AI、MCP、roles、storage 与 security 工作仍快速演进，不是“长期无破坏变更”的稳定终态 [GH:release][Docs:release] |

## 安全与风险

评分 2/5。

安全是 n8n 最大扣分项。GitHub Security Advisories API 在本次查询中返回 119 条 advisories（22 critical、41 high、55 medium、1 low）；样本包括 unauthenticated cancellation of active test webhooks、AI Agents project-viewer privilege escalation 与 SSO role escalation。API 对这些样本未返回 `first_patched_version`，且同时列出 1.x/2.x 分支范围，故必须逐条核对 advisory 与实际部署版本，不能只看总数或 latest tag [GH:advisories]。

这并不等于“最新版不可用”，而是意味着 n8n 生产部署必须按高风险 Web automation platform 处理。它会保存凭据、执行用户配置的节点、发起出站请求、接收 webhooks、连接 SaaS/数据库、运行 AI/tool flows，还可能安装 community/custom nodes。官方 security docs 建议 SSL、SSO、2FA、disable public API、block nodes、SSRF protection、restrict registration、security audit 等，恰好说明这些不是可选装饰 [Docs:security]。

License 也是风险面之一：Sustainable Use License / Enterprise License 是 source-available 模型，不是 OSI open-source。若要做白标、付费托管、多租户商业服务，必须先审 license 和商业协议 [Docs:license]。

## 学习价值

学习价值很高。n8n 是研究 workflow automation platform 的典型样本：可视化 DAG/flow editor、节点生态、凭据管理、执行引擎、队列模式、custom node SDK、AI nodes、security hardening 和 source-available 商业模式都集中在一个 repo。

对 agent infrastructure taxonomy 也有启发：n8n 说明“automation platform”正在吸收 agentic workflows，但分类上仍应区别于 Firecrawl/Ollama/Context7 这类底层 infrastructure primitive。器有本末，分类亦然：n8n 是承载业务流程的台，而不是单个 agent 的手或眼。
