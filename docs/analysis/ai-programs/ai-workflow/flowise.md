---


title: "Flowise"
created: 2026-05-20
updated: 2026-05-27
type: repository-analysis
repo_url: "https://github.com/FlowiseAI/Flowise"
category: "ai-programs/ai-workflow"
tags: ["visual-agent-builder", "low-code", "agentflow", "workflow", "ai-workflows", "agent-platform", "rag", "typescript", "langchain", "self-hosted", "mcp"]
previous_repo: ""
successor: ""
primary_language: "TypeScript"
license: "GitHub NOASSERTION; local LICENSE.md: Apache-2.0 open-source core + commercial enterprise/cloud components"
stars: 52956
forks: 24366
last_checked: 2026-05-20
last_verified: 2026-05-20
evidence: "GitHub API + GraphQL issue/PR counts + npm package lookup + official docs/site + local shallow clone scan; no runtime smoke test was performed."
archived_reason: ""
docker_support: true
gpu_required: false
estimated_cpu: "modest local/server CPU for demo; production sizing depends on workflows, concurrent users, vector/RAG workloads and model provider latency"
estimated_memory: "small demos can run on a modest machine; production self-hosting should budget for server, UI, database/storage and workflow execution overhead"
estimated_storage: "repo clone ~74M in local scan; runtime storage depends on database, uploaded files, logs, vector/RAG assets and workflow artifacts"
status: active
ratings:
  capability: 4
  usability: 5
  performance: 3
  code_quality: 3
  documentation: 4
  community: 5
  maturity: 3
  extensibility: 4
  security: 2
  recommendation: 3
overall_score: 3.6
sources:
  - "[GH:api] GitHub REST API snapshot for FlowiseAI/Flowise on 2026-05-20: stars=52956, forks=24366, open_issues_count=862, created_at=2023-03-31, pushed_at=2026-05-19, default_branch=main, license=NOASSERTION, language=TypeScript, description='Build AI Agents, Visually', homepage=https://flowiseai.com."
  - "[GH:graphql] GitHub GraphQL query on 2026-05-20: open issues=648, total issues=2606, open PRs=214, merged PRs=1778, closed PRs=575, discussions=1168, releases=83."
  - "[GH:contributors] GitHub contributors API first page on 2026-05-20: 100 contributors returned."
  - "[GH:releases] GitHub releases API first page on 2026-05-20: latest release flowise@3.1.2 published 2026-04-14; recent releases include 3.1.1, 3.1.0, 3.0.13, 3.0.12."
  - "[GH:community] GitHub community profile API on 2026-05-20: health_percentage=75; README, code of conduct, contributing, issue template, PR template, license present."
  - "[GH:advisories] GitHub repository security-advisories API returned 77 published advisories on 2026-05-20; first page includes high severity mass-assignment cross-workspace takeover issues, Vector Store No Permission Checks and Credential Data Leak."
  - "[GH:local-scan] Local shallow clone /tmp/repo-wiki-batch10/flowise at commit b7a2005fd7b394ba7874aded744fe3730d59ccb3 dated 2026-05-19; git ls-files=2447; du=74M; checked README.md, LICENSE.md, SECURITY.md, CONTRIBUTING.md, package.json, docker README, package docs."
  - "[GH:readme] README.md local clone: Flowise is a visual builder for AI agents; supports Agentflow/Chatflow/Assistants, drag-and-drop UI, local install via npx/docker/pnpm, cloud and enterprise links."
  - "[GH:license] LICENSE.md local clone: open-source version under Apache License 2.0; content under packages/server/src/enterprise and explicitly marked files such as IdentityManager.ts are under Commercial License; commercial license requires subscription for production use of enterprise/cloud parts."
  - "[GH:security] SECURITY.md local clone: vulnerability disclosure policy and supported versions; report path via security@flowiseai.com / GitHub private reporting; asks not to disclose publicly before fix."
  - "[GH:contributing] CONTRIBUTING.md local clone: monorepo has server/ui/components; pnpm v10; build/start/dev instructions; credential security rule says secret fields must use type 'url' or 'password', never 'string'; env vars include CORS, MCP_CORS_ORIGINS, CUSTOM_MCP_* limits, database/storage/secret key settings."
  - "[GH:agentflow] packages/agentflow README/ARCHITECTURE local scan: Agentflow React component and canvas support start/llm/agent/condition/humanInput/loop/iteration/directReply/customFunction/tool/retriever/http/executeFlow/stickyNote nodes; exports Agentflow, provider, hooks and types."
  - "[Docs:home] https://docs.flowiseai.com/ and https://github.com/FlowiseAI/Flowise extracted 2026-05-20: docs cover getting started, using Flowise, AgentflowV2, chatflows, deployment, auth, MCP and integrations."
  - "[Docs:agentflow] https://docs.flowiseai.com/using-flowise/agentflowv2 extracted 2026-05-20: AgentflowV2 is positioned as visual agent workflow builder with sequential/loop/condition/human-in-the-loop style nodes."
  - "[Docs:deploy-auth-mcp] docs.flowiseai.com deployment/authentication/MCP pages extracted 2026-05-20: docs cover deployment/config/authentication and MCP integration; details should be rechecked before production rollout."
  - "[npm] npm view flowise on 2026-05-20: latest version 3.1.2, license='SEE LICENSE IN LICENSE.md', homepage=https://flowiseai.com, package description='Flowiseai Server'."
---

# Flowise

## 一句话总结

Flowise 是 visual agent builder / low-code LLM app platform 的代表项目：它把 agent workflow、RAG、tools、chatflows、AgentflowV2 和 integrations 放进拖拽式 UI 中，降低了非底层工程用户构建 AI agents 的门槛 [GH:readme][Docs:home][Docs:agentflow]。

## 总体评价

`FlowiseAI/Flowise` 应归入 `ai-programs/ai-workflow`，更精确地说是 **visual agent builder** 或 **low-code agent workflow platform**。它不是 CrewAI 那种 Python role-based framework，也不是 AutoGen 那种 multi-agent runtime；它的主张是“Build AI Agents, Visually” [GH:api][GH:readme]。

Flowise 的价值在于：把 LLM apps 的常见构件——chatflow、agentflow、RAG、retriever、tools、HTTP、condition、human input、loop、sub-flow execution——做成可视化节点和 Web UI。对于分享、demo、业务原型、内部工具，它的低门槛很强 [GH:agentflow][Docs:agentflow]。

但它的生产采用风险也很明确：GitHub advisories 多达 77 条，且 first page 就包含 cross-workspace takeover、permission checks、credential leak 等高严重度问题；再叠加 Apache-2.0 + commercial enterprise/cloud components 的混合许可证、tenant isolation/RBAC/credential handling/CORS/MCP 配置等问题，生产环境必须审慎 [GH:advisories][GH:license][GH:contributing]。

## 推荐度：3/5

推荐收录，并作为 visual agent builder 主线项目。生产采用给 2/5 到 3/5：如果只是本地原型或受控内网 demo，价值很高；如果是多租户、外网、企业生产，需要先完成安全与许可证审计。

## 优势

1. **可视化门槛低**：Flowise 的核心卖点就是 visual builder，适合非底层工程用户理解和搭建 agent workflow [GH:readme][Docs:home]。
2. **AgentflowV2 覆盖常见 workflow node**：start、LLM、agent、condition、human input、loop、iteration、tool、retriever、HTTP、execute flow 等节点已形成比较完整的 visual workflow vocabulary [GH:agentflow][Docs:agentflow]。
3. **自托管路径明确**：README/CONTRIBUTING 提供 npx、Docker、pnpm dev/build/start 与 env vars 路径；作为 Web platform 比 CrewAI 更接近 self-host 形态 [GH:readme][GH:contributing]。
4. **社区可见度极高**：52.9k stars、24.4k forks、1168 discussions、100 first-page contributors；star/fork 是 2026-05-20 snapshot，会快速漂移 [GH:api][GH:graphql][GH:contributors]。
5. **安全文档比许多同类项目更具体**：CONTRIBUTING 直接写了 secret fields 不得用 string、MCP CORS/timeout/payload limit 等环境变量 [GH:contributing]。

## 劣势

1. **历史 advisories 很多**：77 条 published repository advisories 是历史安全姿态信号；本次未逐条判断是否影响 latest 3.1.2、是否已完全修复或是否属于依赖/产品直接漏洞，但其 permission/tenant/credential 类型足以要求生产前强审计 [GH:advisories]。
2. **许可证边界复杂**：GitHub API license=NOASSERTION；LICENSE.md 显示开源版 Apache-2.0，但 enterprise 目录和标记文件走 Commercial License [GH:api][GH:license]。
3. **open issue/PR backlog 高**：open issues=648、open PRs=214，维护压力显著 [GH:graphql]。
4. **visual builder 可能牺牲工程可测试性**：这是 reviewer inference：拖拽式 workflow 对 demo 友好，但复杂生产逻辑仍需要额外设计版本化、review、diff、测试与回滚。
5. **MCP/CORS/credential 配置易错**：配置项多且安全含义强，错误配置会放大攻击面 [GH:contributing][Docs:deploy-auth-mcp]。

## 适合什么场景

- 快速 demo AI agent / RAG / workflow。
- 内部原型、低代码搭建、业务人员参与设计。
- 可视化表达 agentflow、chatflow、retriever/tool/HTTP/human-in-loop 组合。
- 受控环境下 self-host 一个 LLM app builder。
- 与 Dify、Langflow、n8n-style automation 做 visual builder 对照。

## 不适合什么场景

- 未审计就直接暴露在公网的多租户生产环境。
- 对许可证边界极敏感、不能接受商业组件混入的组织。
- 希望所有 agent logic 都以普通代码 review/test/diff 的团队。
- 需要默认强隔离、强 RBAC、强 tenant separation 证明的高安全环境。

## 与类似项目对比

这里按 visual builder / agent app platform 相邻项目做 positioning 级对比，未对所有项目重新深审。

| 项目 | 定位 | 相对本项目 |
|---|---|---|
| Flowise | visual AI agent builder / low-code LLM app platform | 可视化、self-host、AgentflowV2；安全与许可证需重点审计 |
| Dify | LLM app platform / workflow / dataset ops | Dify 更像完整产品平台；Flowise 更强调 visual node builder 与 Agentflow canvas/workflow vocabulary [GH:agentflow] |
| Langflow | visual LangChain/agent workflow builder | Langflow 更贴近 LangChain ecosystem；Flowise 更有独立 Web app/platform 形态 |
| CrewAI | Python role-based agent framework | CrewAI 更适合代码内嵌与 role/task 建模；Flowise 更适合低代码视觉搭建 |
| n8n | general workflow automation | n8n 更通用 automation；Flowise 更专注 LLM/agent/RAG nodes |

上述项目按 `ai-programs/ai-workflow` 同类范围做定位级对比，未按同一 10 维度框架深审。Flowise、Dify、n8n 都是低代码 workflow/platform 化方向，但 Flowise 更专注 visual agent graph，Dify 更偏端到端 LLM app platform，n8n 更偏通用 automation 吸收 AI nodes。


## 它能做什么

- 用 Web UI 拖拽搭建 chatflows / agentflows [GH:readme][Docs:home]。
- 用 AgentflowV2 表达 LLM、agent、condition、human input、loop、iteration、tool、retriever、HTTP、execute flow 等流程 [GH:agentflow][Docs:agentflow]。
- 管理 credentials、database、storage、CORS、MCP、secret key 等部署配置 [GH:contributing]。
- 通过 MCP 集成外部工具；但 MCP CORS、tool payload size、authorize timeout 等需正确配置 [GH:contributing][Docs:deploy-auth-mcp]。
- 使用 Docker / pnpm / npx 路线本地或自托管运行 [GH:readme][GH:contributing]。

## 运行环境与资源占用

npm 显示 `flowise` latest 为 3.1.2；GitHub latest release 也是 `flowise@3.1.2` [npm][GH:releases]。本地 clone 为 2447 tracked files、74M，主要语言 TypeScript [GH:local-scan][GH:api]。

README/CONTRIBUTING 给出典型开发路径：

```bash
pnpm install
pnpm build
pnpm start
pnpm dev
```

Flowise 也提供 Docker 路径，因此 `docker_support: true`、`self_hostable: true`。但 enterprise/cloud 目录和部分文件走商业许可证；生产使用必须先确认使用的是开源版能力还是 enterprise/cloud 能力 [GH:license]。

## 上手体验

上手体验强：visual UI、Docker/npx/pnpm 路线、docs 入口都比较直观 [GH:readme][Docs:home]。

扣分点来自生产复杂度：认证、RBAC、workspace/tenant isolation、credentials、CORS、MCP、database/storage、secret key 都不是“点一下部署”即可安全完成 [GH:contributing][GH:advisories]。

## 代码质量

代码质量给 3/5。正面：monorepo 模块清楚，server/ui/components/agentflow 分工明确；CONTRIBUTING 有 build/test/dev 和 credential security rules [GH:contributing][GH:agentflow]。

负面：historical advisories 数量很高，open issues/PR backlog 高；许可证和 enterprise code 边界也增加维护理解成本 [GH:advisories][GH:graphql][GH:license]。

## 可扩展性

可扩展性给 4/5。Flowise 的节点系统、components、credentials、MCP、custom function、HTTP、execute flow 等机制说明其扩展 surface 很大 [GH:agentflow][GH:contributing]。

但扩展性和安全性在这里相互牵制：credential definition 若把 secret 字段误设为 string，就可能通过 API 明文暴露；官方 CONTRIBUTING 已把这点写成 explicit security rule [GH:contributing]。

## 文档质量

文档质量给 4/5。README、docs、CONTRIBUTING、SECURITY、LICENSE 与 Agentflow package docs 覆盖足够广 [GH:readme][Docs:home][GH:contributing][GH:security][GH:license][GH:agentflow]。

不足是生产安全需要跨多处资料拼接理解：auth、deployment、MCP、env vars、credentials、commercial license、advisories 分布在不同文档与 GitHub metadata 中 [Docs:deploy-auth-mcp][GH:advisories]。

## 社区与成熟度

社区活跃度 5/5：52.9k stars、24.4k forks、1168 discussions、83 releases、100 first-page contributors；star/fork 是 2026-05-20 snapshot，会快速漂移 [GH:api][GH:graphql][GH:contributors]。

成熟度给 3/5：项目活跃、产品形态明确，但 high severity advisories 与 backlog 说明它在 production hardening 上仍需要强审计。

frontmatter 中 `enterprise_ready: partial` 只表示仓库/官网存在 enterprise/cloud/RBAC/commercial 相关能力入口；本次没有验证其租户隔离、权限模型或合同可用性，不表示企业生产就绪 [GH:license][GH:advisories][Docs:deploy-auth-mcp]。

## 安全与风险

安全给 2/5。这不是说“不能用”，而是说不能轻率用。

历史安全姿态：77 条 published repository advisories 是强烈警示；本次未逐条判断是否影响 latest 3.1.2、是否已修复或是否属于依赖 advisories，因此不把它等同于“当前最新版必然存在 77 个漏洞”，但它足以压低 security score [GH:advisories]。

当前部署风险：

- historical advisories first page 已含 cross-workspace takeover、credential leak、permission check 类问题，应作为权限/租户/凭证审计重点 [GH:advisories]。
- credential handling 对 node definition 类型敏感，错误使用 `string` 会明文暴露 secret [GH:contributing]。
- MCP/CORS/remote tool integration 容易形成 tool injection / exfiltration surface [GH:contributing][Docs:deploy-auth-mcp]。
- Enterprise/cloud commercial components 与 open-source core 混合，许可证和部署边界需要法务/工程共同确认 [GH:license]。

正面信号是：Flowise 至少在 SECURITY 与 CONTRIBUTING 中明确写出报告路径和具体 credential 安全规则 [GH:security][GH:contributing]。

## 学习价值

学习价值高。Flowise 适合观察一个重要趋势：当 agent 从代码库走向业务用户，系统复杂性不会消失，只会从 Python/TypeScript 代码转移到 visual graph、credentials、auth、tenant isolation 和 deployment policy。
