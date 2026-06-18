---


title: "AutoGen"
created: 2026-05-20
updated: 2026-05-27
type: repository-analysis
repo_url: "https://github.com/microsoft/autogen"
category: "ai-programs/agent-frameworks"
tags: ["multi-agent", "agent-framework", "microsoft", "agent-history", "python", "dotnet", "mcp", "maintenance-mode"]
ratings:
  capability: 5
  usability: 4
  performance: 3
  code_quality: 4
  documentation: 4
  community: 5
  maturity: 2
  extensibility: 4
  security: 3
  recommendation: 2

overall_score: 3.6
recommendation: "适合作为 multi-agent framework 历史线和现有 AutoGen 代码维护参考收录；新项目不建议从 AutoGen 开始，应优先看 Microsoft Agent Framework。"
status: maintenance-mode-community-managed
license: "MIT code + CC-BY-4.0 docs/content"
language: "Python / C# / TypeScript"
stars: 58218
forks: 8789
docker_support: true
self_hostable: false
local_runnable: true
studio_local_ui: true
enterprise_ready: false
security_score: 3
last_evaluated: 2026-05-20
evidence: "GitHub API + GraphQL issue/PR counts + PyPI package lookup + official docs/site + local shallow clone scan; no runtime smoke test was performed."
sources:
  - "[GH:api] GitHub REST API snapshot for microsoft/autogen on 2026-05-20: stars=58218, forks=8789, watchers=523, open_issues_count=840, created_at=2023-08-18, pushed_at=2026-04-15, default_branch=main, license=CC-BY-4.0, language=Python, topics include autogen/agents/llm-framework."
  - "[GH:graphql] GitHub GraphQL query on 2026-05-20: open issues=525, open PRs=315, discussions=1052, releases=98, latest tag python-v0.7.5 dated 2025-09-30."
  - "[GH:contributors] GitHub contributors API first page on 2026-05-20: 100 contributors returned; top contributor ekzhu with 473 commits."
  - "[GH:releases] GitHub releases API first page on 2026-05-20: latest release python-v0.7.5 published 2025-09-30; recent releases python-v0.7.x."
  - "[GH:community] GitHub community profile API on 2026-05-20: health_percentage=100; README, code of conduct, contributing, issue template, PR template, license files present."
  - "[GH:advisories] GitHub repository security-advisories API returned 0 advisories on 2026-05-20; absence of advisories is not proof of absence of vulnerabilities."
  - "[GH:local-scan] Local shallow clone /tmp/repo-wiki-batch9/autogen at commit 027ecf0a379bcc1d09956d46d12d44a3ad9cee14 dated 2026-04-06; git ls-files=1837; du=76M; checked README.md, LICENSE, LICENSE-CODE, SECURITY.md, CONTRIBUTING.md, python/docs/src/index.md, AutoGen Studio docs."
  - "[GH:readme] README.md local clone: AutoGen is in maintenance mode, will not receive new features/enhancements, community-managed going forward; new users should start with Microsoft Agent Framework; existing users encouraged to migrate; requires Python 3.10+, installs autogen-agentchat and autogen-ext[openai], Studio via autogenstudio; legal notices grant docs/content under CC-BY-4.0 and code under MIT via LICENSE-CODE."
  - "[GH:architecture] README.md local clone: Core API implements message passing, event-driven agents, local/distributed runtime, .NET/Python cross-language support; AgentChat provides opinionated rapid prototyping for common multi-agent patterns; Extensions provide LLM clients, MCP workbench and code execution; Studio and Bench are developer tools."
  - "[GH:license] README Legal Notices and LICENSE-CODE local clone: docs/content are granted under CC-BY-4.0; code is granted under MIT via LICENSE-CODE. GitHub API license=CC-BY-4.0 reflects the top-level LICENSE, not the full code-license picture."
  - "[GH:security] SECURITY.md local clone: Microsoft Security Response Center reporting path, secure@microsoft.com fallback, response expected within 24 hours, coordinated vulnerability disclosure policy."
  - "[GH:contributing] CONTRIBUTING.md local clone: Microsoft CLA required for most contributions; versioning keeps autogen-* packages in sync; triage process covers issues/PRs/discussions/security; maintenance-mode README limits feature contributions."
  - "[Docs:home] https://microsoft.github.io/autogen/ extracted 2026-05-20: docs describe Studio, AgentChat, Core and Extensions; Core is event-driven framework for scalable multi-agent AI systems; Extensions include McpWorkbench, OpenAIAssistantAgent, DockerCommandLineCodeExecutor and GrpcWorkerAgentRuntime."
  - "[Docs:studio] python/docs/src/user-guide/autogenstudio-user-guide/index.md local clone: AutoGen Studio is low-code UI for prototyping agents/teams/tools/models; explicitly not production-ready; lacks rigorous jailbreak/permission/security features."
  - "[PyPI] pip index versions on 2026-05-20: autogen-core/autogen-agentchat/autogen-ext latest 0.7.5; autogenstudio latest 0.4.2.2."
---

# AutoGen

## 一句话总结

AutoGen 是 multi-agent framework 历史线上的关键项目：它把 multi-agent conversation、AgentChat、Core runtime、Extensions、Studio、Magentic-One 等概念系统化；但它现在已经进入 maintenance mode，新项目应转向 Microsoft Agent Framework [GH:readme][GH:architecture]。

## 总体评价

`microsoft/autogen` 曾是“多智能体协作框架”的历史参照系之一。它的 README 仍清楚说明 AutoGen 可创建 single/multi-agent applications，支持 MCP server、AgentTool、多 agent orchestration、Studio no-code GUI，以及 Core/AgentChat/Extensions 分层架构 [GH:readme][GH:architecture]。

但当前最重要的信息不是功能，而是状态：README 顶部明确写着 **Maintenance Mode**，不会再接收新 features/enhancements，未来 community managed；新用户应使用 Microsoft Agent Framework，已有用户建议迁移 [GH:readme]。

所以它的目录定位是 `ai-programs/agent-frameworks`，但推荐方式要分清：

- 研究 multi-agent framework 史：值得收录。
- 维护既有 AutoGen 应用：仍需参考。
- 新项目技术选型：不建议作为首选。

## 推荐度：2/5

推荐收录、阅读与维护参考；不推荐新项目从 AutoGen 开始。评分表中的“推荐度”按新项目采用推荐度计算。

AutoGen 的历史价值与参考设计价值仍高，但 maintenance-mode 直接压低 maturity 和 recommendation。这里的 `enterprise_ready: false` 只针对 AutoGen 本项目生命周期；Microsoft README 对 MAF 的官方定位是 enterprise-ready successor，本文未独立审查 MAF [GH:readme]。

## 优势

1. **multi-agent framework 设计完整**：Core、AgentChat、Extensions、Studio 分层清楚 [GH:architecture][Docs:home]。
2. **生态可见度强**：58k stars、8.8k forks、1052 discussions、100 first-page contributors [GH:api][GH:graphql][GH:contributors]。
3. **文档与包体系成熟**：PyPI 上 autogen-core、autogen-agentchat、autogen-ext 已到 0.7.5，docs 覆盖 Python/.NET/Studio/Extensions [PyPI][Docs:home]。
4. **MCP 与 Docker code execution 集成**：Extensions 包含 McpWorkbench、DockerCommandLineCodeExecutor、GrpcWorkerAgentRuntime 等 [Docs:home]。
5. **历史影响明确**：README 自述 Microsoft Research pioneered，opened the door to experimental multi-agent orchestration patterns [GH:readme]。

## 劣势

1. **维护模式是硬伤**：不会再接收新 features/enhancements，新用户应迁移 Microsoft Agent Framework [GH:readme]。
2. **issue/PR backlog 高**：GraphQL 显示 open issues=525、open PRs=315 [GH:graphql]。
3. **Studio 非生产就绪**：docs 明确 AutoGen Studio 不适合 production，缺少严谨 jailbreak/permission/security features [Docs:studio]。
4. **许可证需分清 docs 与 code**：GitHub API 只暴露 top-level LICENSE=CC-BY-4.0；README Legal Notices / LICENSE-CODE 说明 docs/content 使用 CC-BY-4.0，代码使用 MIT。采用时不应误判为“代码 CC-BY”，但仍需确认文档/内容复用边界 [GH:api][GH:license]。
5. **生态路线迁移**：Microsoft Agent Framework 成为后继主线，AutoGen 新功能停滞 [GH:readme]。

## 适合什么场景

- 理解 multi-agent framework 发展史。
- 维护已有 AutoGen 0.4+/0.7.x 项目。
- 学习 Core / AgentChat / Extensions 分层设计。
- 研究 MCP workbench、Docker code execution、distributed agents 等 agent framework 组件。
- 对比 AutoGen 与 Microsoft Agent Framework 的迁移路线。

## 不适合什么场景

- 新生产项目从零开始选型。
- 希望长期 feature roadmap 和 Microsoft enterprise support 的团队。
- 想要 production-ready no-code agent builder；AutoGen Studio docs 明确不适合生产 [Docs:studio]。
- 对许可证为标准软件许可证有强要求的环境。

## 与类似项目对比

上述项目按 `ai-programs/agent-frameworks` 同类范围做定位级对比，未按同一 10 维度框架深审；比较结论仅用于 positioning。

| 项目 | 定位 | 相对本项目 |
|---|---|---|
| AutoGen | multi-agent framework, now maintenance-mode/community-managed | 历史影响大、分层完整；新项目迁移 MAF 是 README 的官方建议 [GH:readme] |
| Microsoft Agent Framework | AutoGen 后继 enterprise-ready framework | README 对 MAF 的官方定位是 enterprise-ready successor；本文未独立深审 MAF [GH:readme] |
| crewAI | role-based multi-agent framework | crewAI 更强调 roles/tasks/crews 的业务建模；AutoGen 更强调 framework/runtime/AgentChat/Core |
| LangGraph | graph-based agent workflow framework | LangGraph 更偏有状态图与控制流；AutoGen 更偏 conversational/multi-agent runtime |
| Semantic Kernel | Microsoft agent/app orchestration SDK | SK 更偏 enterprise app orchestration 与 plugins/connectors；AutoGen 更偏 multi-agent research/framework 线 |


## 它能做什么

AutoGen 当前文档/README 展示的能力包括：

- 用 `AssistantAgent` 快速构造 agent [GH:readme]。
- 用 `AgentTool` 组合多个 specialist agents，形成 basic multi-agent orchestration [GH:readme]。
- 使用 Playwright MCP server 创建 web browsing assistant，并通过 `McpWorkbench` 接入 MCP [GH:readme][Docs:home]。
- 使用 Core API 做 message passing、event-driven agents、本地/分布式 runtime [GH:architecture]。
- 使用 Extensions 接入 OpenAI/AzureOpenAI、Docker code executor、gRPC runtime 等 [GH:architecture][Docs:home]。
- 用 AutoGen Studio prototype multi-agent workflows，但不应作为生产 app [Docs:studio]。

## 运行环境与资源占用

README 要求 Python 3.10+，典型安装为：

```bash
pip install -U "autogen-agentchat" "autogen-ext[openai]"
```

Studio 安装为：

```bash
pip install -U "autogenstudio"
```

AutoGen 作为库/framework 可本地运行，Studio 也可本地启动；但 frontmatter 中 `self_hostable: false` 是为避免把它误读成可自托管的服务型平台。`local_runnable: true` 与 `studio_local_ui: true` 分别记录本地库使用和本地 UI 原型能力 [GH:readme][Docs:studio]。

Docker 不是框架本体必需项，但官方 docs 推荐 Docker 用于 `DockerCommandLineCodeExecutor` 执行模型生成代码，Studio FAQ 也提到可用 Docker 容器运行 Studio；因此 `docker_support: true` 指 code-execution/studio deployment 支持，不是所有 AutoGen 应用必须 Docker [GH:readme][Docs:home]。

## 上手体验

Python quickstart 很短，`AssistantAgent + OpenAIChatCompletionClient` 能迅速跑 Hello World [GH:readme]。

扣分来自三点：

- 需要 OpenAI API key 或其他 model client。
- 0.2 到 0.4/0.7 的迁移历史让文档和概念负担变重 [GH:readme]。
- maintenance-mode 使新用户入口不再是“开始使用 AutoGen”，而是“是否应该直接去 MAF” [GH:readme]。

## 代码质量

本地 clone 1837 tracked files、76M，主要语言 Python/C#/TypeScript [GH:local-scan][GH:api]。

正面：

- 分层清楚：Core、AgentChat、Extensions、Studio、Bench。
- CONTRIBUTING 有 CLA、versioning、release process、triage process [GH:contributing]。
- PyPI 包版本同步到 0.7.5，说明工程发布体系曾较完整 [PyPI]。

负面：

- maintenance mode 限制后续演进。
- open issues/open PRs 很高 [GH:graphql]。
- README 自身有 typo（Microsoft Agent FrameworkAF），说明维护状态变化期文档 polish 不完美 [GH:readme]。

## 可扩展性

AutoGen 的可扩展性仍然是强项。Core 提供底层 runtime，AgentChat 提供高层 agent API，Extensions 提供 MCP、LLM clients、Docker executor、gRPC runtime 等扩展 surface [GH:architecture][Docs:home]。

但可扩展性的现实价值受 maintenance-mode 限制：它适合维护和学习，不适合押注为长期新功能平台。新扩展路线应关注 Microsoft Agent Framework。

## 文档质量

文档质量整体 4/5。README、docs homepage、Python docs、Studio docs、CONTRIBUTING、SECURITY 都提供足够信息 [GH:readme][Docs:home][Docs:studio]。

最关键的文档优点是它没有掩盖状态：maintenance-mode、README 对 MAF successor 的官方定位、Studio not production-ready 都写得非常明确 [GH:readme][Docs:studio]。

扣分来自路线迁移带来的复杂性：旧 v0.2、0.4/0.7、AgentChat/Core/Studio/.NET/Python 多线并存，新用户需要先理解历史分层。

## 社区与成熟度

社区可见度很高：58k stars、8.8k forks、1052 discussions、100 first-page contributors、community health 100% [GH:api][GH:graphql][GH:contributors][GH:community]。

成熟度则要分裂看：

- 作为历史 framework：成熟。
- 作为 active roadmap：不成熟，因为已经 maintenance mode。
- 作为新项目依赖：风险上升，因为官方推荐迁移到 MAF [GH:readme]。

所以 community 给 5，maturity 给 2。

## 安全与风险

AutoGen 仓库安全公告查询为 0，但这只是“本次未发现 GitHub repo advisories”，不是安全证明 [GH:advisories]。

实际风险来自：

- MCP server 可能执行本地命令或暴露敏感信息，README 直接警告只连接 trusted MCP servers [GH:readme]。
- Docker code execution 涉及运行模型生成代码，隔离配置是核心问题 [Docs:home]。
- AutoGen Studio 明确不是 production-ready，缺少 rigorous jailbreak/permission/security features [Docs:studio]。
- maintenance-mode 会降低未来安全增强与 ecosystem integration 更新速度 [GH:readme]。

MSRC reporting path 是正面治理信号 [GH:security]，但不能抵消上述 agent runtime 攻击面。

## 学习价值

学习价值很高，尤其适合 Develata 后续理解多智能体系统：

- Core / AgentChat 的分层是很好的 framework decomposition 样本。
- AgentTool 展示了把 agent 当 tool 的组合范式。
- MCP Workbench 与 Docker executor 展示了 agent tool/code-execution 风险边界。
- Maintenance-mode + successor migration 是开源 AI framework 生命周期的典型案例。
