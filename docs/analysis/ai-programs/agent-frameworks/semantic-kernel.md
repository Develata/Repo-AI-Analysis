---


title: "Semantic Kernel"
created: 2026-05-20
updated: 2026-05-21
type: repository-analysis
repo_url: "https://github.com/microsoft/semantic-kernel"
category: "ai-programs/agent-frameworks"
tags: ["agent-framework", "app-orchestration", "plugins", "function-calling", "mcp", "openapi", "microsoft", "dotnet", "python", "java"]
previous_repo: ""
successor: "https://github.com/microsoft/agent-framework"
primary_language: "C#"
license: "MIT"
stars: 27944
forks: 4600
last_checked: 2026-07-14
last_verified: 2026-05-20
evidence: "GitHub API + GraphQL issue/PR counts + NuGet/PyPI package metadata + Microsoft Learn docs + local shallow clone scan; no runtime smoke test was performed."
archived_reason: ""
docker_support: false
gpu_required: false
estimated_cpu: "Framework/SDK 本体 CPU 占用低；实际资源消耗主要由所接入的模型服务、vector store、插件和业务系统决定"
estimated_memory: "SDK 本体较轻；agent state、chat history、RAG/vector connector 和外部模型响应缓存会决定实际内存"
estimated_storage: "源码 clone 约 88M；生产存储主要来自应用日志、telemetry、vector store 与外部数据源"
status: active
ratings:
  capability: 5
  usability: 4
  performance: 4
  code_quality: 4
  documentation: 5
  community: 5
  maturity: 4
  extensibility: 5
  security: 3
  recommendation: 4
overall_score: 4.3
sources:
  - "[GH] https://github.com/microsoft/semantic-kernel"
  - "[GH:api] GitHub REST API snapshot on 2026-05-20: stars=27944, forks=4600, open_issues_count=293, created_at=2023-02-27, pushed_at=2026-05-19, default_branch=main, license=MIT, language=C#, homepage=https://aka.ms/semantic-kernel. Note: REST open_issues_count includes issues and PRs."
  - "[GH:graphql] GitHub GraphQL query on 2026-05-20: open issues=169, open PRs=124, discussions=964, releases=269, topics=ai/artificial-intelligence/llm/openai/sdk."
  - "[GH:contributors] GitHub contributors API first page on 2026-05-20 returned 100 contributors; top entries include dependabot[bot], markwallace-microsoft, moonbox3, SergeyMenshykh and eavanvalkenburg."
  - "[GH:releases] GitHub releases API first page on 2026-05-20: latest entries include python-1.42.0 published 2026-05-14 and dotnet-1.76.0 published 2026-05-11."
  - "[GH:community] GitHub community profile API on 2026-05-20: health_percentage=100; README, license, CONTRIBUTING, code of conduct and PR template detected."
  - "[GH:advisories] GitHub repository security-advisories API on 2026-05-20 returned 2 published critical advisories: GHSA-xjw9-4gw8-4rqx for Python package semantic-kernel <1.39.4 and GHSA-2ww3-72rp-wpp4 for Python package semantic-kernel <1.39.3 / NuGet package Microsoft.SemanticKernel.Plugins.Core <1.71.0."
  - "[GH:local-scan] Local shallow clone /tmp/repo-wiki-batch11/semantic-kernel at commit 644eb0a962b048b1ac9fa639e60f878964e58f85 dated 2026-05-18; git ls-files=5487; du=88M; checked README.md, LICENSE, SECURITY.md, FEATURE_MATRIX.md and TRANSPARENCY_FAQS.md; repo-level Dockerfile/docker-compose search returned no match."
  - "[GH:rai] TRANSPARENCY_FAQS.md local clone: SK is described as a lightweight open-source development kit for C#, Python or Java applications; intended uses include production-ready applications, business-process automation, AI service integration, plugins, filters and responsible AI controls."
  - "[Docs:overview] https://learn.microsoft.com/en-us/semantic-kernel/overview/ extracted 2026-05-20: Semantic Kernel is a lightweight open-source development kit for building AI agents and integrating models into C#, Python or Java; Microsoft positions it as enterprise-ready middleware with telemetry, hooks and filters."
  - "[Docs:plugins] https://learn.microsoft.com/en-us/semantic-kernel/concepts/plugins/ extracted 2026-05-20: plugins expose native code, OpenAPI specifications and MCP server capabilities to AI applications through function calling; automation functions should use validation, auditing and human-in-the-loop controls."
  - "[Docs:ai-services] https://learn.microsoft.com/en-us/semantic-kernel/concepts/ai-services/ extracted 2026-05-20: service abstractions cover chat completion, text generation, embeddings and several experimental multimodal services across C#, Python and Java."
  - "[Docs:agents] https://learn.microsoft.com/en-us/semantic-kernel/frameworks/agent/ extracted 2026-05-20: Agent Framework supports AI agents, multi-agent collaboration, human-agent collaboration and process orchestration; packages include .NET agent abstractions/core/openai."
  - "[Docs:process] https://learn.microsoft.com/en-us/semantic-kernel/frameworks/process/process-framework extracted 2026-05-20: Process Framework is experimental, event-driven and uses Kernel Functions for auditable workflow steps."
  - "[NuGet] https://www.nuget.org/packages/Microsoft.SemanticKernel/ extracted 2026-05-20: Microsoft.SemanticKernel latest listed version 1.76.0, prefix reserved, targets .NET Standard 2.0 / net8.0 / net10.0."
  - "[NuGet:agents] https://www.nuget.org/packages/Microsoft.SemanticKernel.Agents.Core/ extracted 2026-05-20: Microsoft.SemanticKernel.Agents.Core latest listed version 1.76.0."
  - "[PyPI] https://pypi.org/project/semantic-kernel/ extracted 2026-05-20: semantic-kernel latest 1.42.0 released 2026-05-14; page states Semantic Kernel is now Microsoft Agent Framework and MAF is enterprise-ready successor with 1.0 production release."
  - "[MSFT:maf-blog] https://devblogs.microsoft.com/agent-framework/semantic-kernel-and-microsoft-agent-framework/ extracted 2026-05-20: Microsoft says Agent Framework is the successor to Semantic Kernel for building AI agents, describes it as Semantic Kernel v2.0, says SK v1.x will continue to receive critical bug/security fixes, and says most new features will move to Microsoft Agent Framework."
---

# Semantic Kernel

> Microsoft 的 AI application / agent orchestration SDK：用 Kernel、plugins/functions、connectors、agents 和 process framework 把 LLM 能力嵌入 C# / Python / Java 应用。
>
> **状态**: `active` · **总分**: 4.3/5 · **推荐度**: 4/5

## 一句话总结

Semantic Kernel 是 `ai-programs/agent-frameworks` 中的 **enterprise app orchestration / plugin-first agent SDK**：它不追求“纯 agent 自主性”，而是把模型调用、function calling、企业 API、OpenAPI/MCP 插件、agent collaboration 和业务流程编排接进常规应用工程 [Docs:overview][Docs:plugins][Docs:agents]。

## 总体评价

`microsoft/semantic-kernel` 应补入 agent framework 板块。它的抽象中心是 `Kernel + services + plugins/functions`：Kernel 管模型服务与执行上下文，plugins/functions 把已有代码或 API 暴露给模型调用，agents/processes 则把更高层的交互与业务流程组织起来 [Docs:overview][Docs:plugins][Docs:agents][Docs:process]。

它和 CrewAI / AutoGen 的区别很明显：CrewAI 用 role/task/crew 建模多智能体协作；AutoGen 偏 conversational/multi-agent runtime；Semantic Kernel 更像 **把 AI 能力纳入企业应用架构的中间件**。它的优势在 Microsoft 生态、.NET/Python/Java 多语言、OpenAPI/MCP/native plugin 路径、Microsoft Learn 文档与 NuGet/PyPI 发布节奏 [GH:releases][NuGet][PyPI]。

关键 caveat 是继承关系：PyPI package 页面目前用 “Semantic Kernel is now Microsoft Agent Framework” 来表达 Microsoft 的迁移/定位；Microsoft Dev Blog 也明确说 Agent Framework is the successor to Semantic Kernel，并说多数新功能会进入 Microsoft Agent Framework [PyPI][MSFT:maf-blog]。这不意味着 `microsoft/semantic-kernel` 仓库已经归档；本条目仍按 active repo 处理，但后续新增主线应继续补 `microsoft/agent-framework`，不能把 SK 当作未来唯一入口。

## 推荐度：4/5

推荐收录，尤其适合作为 **Microsoft app/agent orchestration** 代表项目。若研究 agent framework 从 demo 走向 enterprise app integration，Semantic Kernel 是必须比较的基准。

推荐度不给 5，原因有三：第一，Microsoft Agent Framework 已成为 successor，且多数新功能会转向 MAF；第二，repo 有 2 条 critical advisories，虽然受影响版本已有 patched ranges，但说明 function calling / vector store / file write 边界确实高风险；第三，Process Framework 文档标注 experimental，不宜把所有 workflow 能力视为完全 GA [GH:advisories][Docs:process][PyPI][MSFT:maf-blog]。

## 优势

1. **企业应用集成语言正确**：plugins/functions 直接对应现有 API、业务服务和依赖注入，而不是要求业务完全迁移到 agent DSL [Docs:plugins]。
2. **多语言与 Microsoft 生态强**：C#/.NET 是主轴，同时支持 Python 与 Java；NuGet 与 PyPI 都有持续 release [GH:api][GH:releases][NuGet][PyPI]。
3. **扩展面完整**：native code plugins、OpenAPI plugins、MCP server plugins、AI service connectors、filters/hooks、agents/processes 形成完整 app-orchestration surface [Docs:plugins][Docs:ai-services][Docs:agents]。
4. **文档与治理成熟**：Microsoft Learn、TRANSPARENCY_FAQS、SECURITY.md、community profile 100，说明项目治理比多数 agent 框架更正规 [GH:community][GH:rai][Docs:overview]。
5. **社区可见度高**：27.9k stars、4.6k forks、964 discussions、269 releases、first-page 100 contributors；star/fork 是 2026-05-20 snapshot，会快速漂移 [GH:api][GH:graphql][GH:contributors]。

## 劣势

1. **继承线发生变化**：PyPI package 页面和 Microsoft Dev Blog 均指向 Microsoft Agent Framework successor；未来主线需要看 MAF，而不是只看 SK [PyPI][MSFT:maf-blog]。
2. **安全边界复杂**：function calling、OpenAPI、MCP、task automation、file write、vector-store filtering 都是高风险面；历史 critical advisories 已经验证这一点 [GH:advisories][Docs:plugins]。
3. **概念体系偏企业工程**：Kernel、plugins、services、filters、agents、processes、connectors 对初学者比 CrewAI 的 role/task/crew 更抽象。
4. **Process Framework experimental**：业务流程编排很有价值，但文档明确说 experimental and subject to change [Docs:process]。
5. **不是开箱即用平台**：它是 SDK/framework，不是 Flowise/Dify 那样的 visual app platform，也不是 Ollama/vLLM 那样的 model runtime。

---

## 适合什么场景

- .NET / Python / Java 应用中接入 LLM、tool calling 与企业 API [Docs:overview][NuGet][PyPI]。
- 将现有业务服务以 native plugin / OpenAPI / MCP 形式暴露给 AI application [Docs:plugins]。
- 构建带 agents、human-in-the-loop、multi-agent collaboration 的企业应用 [Docs:agents]。
- 需要 filters、telemetry、responsible AI、auditability 这类工程控制点的团队 [GH:rai][Docs:overview][Docs:process]。
- 对比 CrewAI、AutoGen、LangGraph、Flowise 等 agent orchestration 路线。

## 不适合什么场景

- 只想零代码拖拽搭建 agent app 的用户；Flowise/Dify 更合适。
- 只需要本地模型运行时；Ollama、llama.cpp、vLLM 更合适。
- 期待一个稳定且未来主线明确完全停留在 SK repo 的团队；需要同步评估 Microsoft Agent Framework [PyPI]。
- 不愿处理 tool/function 权限、审计、人审、sandbox 的高安全环境。

## 与类似项目对比

| 项目 | 定位 | 相对本项目 |
|------|------|------------|
| Semantic Kernel | Microsoft app/agent orchestration SDK | plugin/function-first，偏企业应用嵌入 |
| Microsoft Agent Framework | SK successor | Microsoft 官方博客与 PyPI package 页面共同指向的未来企业级 successor，需单独补条目 [PyPI][MSFT:maf-blog] |
| CrewAI | role-based agents + Crews/Flows | CrewAI 更贴近角色/任务建模；SK 更贴近企业 API 和 SDK 集成 |
| AutoGen | conversational/multi-agent runtime | AutoGen 更偏 agent runtime 与协作协议；SK 更偏应用中间件 |
| Flowise | visual low-code builder | Flowise 更低代码；SK 更适合代码工程团队 |
| LangGraph | stateful graph workflow | LangGraph 更偏显式状态图；SK 更偏 plugins/connectors/functions |

上述项目按 `ai-programs/agent-frameworks` 同类范围做定位级对比，未按同一 10 维度框架深审。

---

## 它能做什么

能力评分 5/5。

- 接入不同 AI services：chat completion、text generation、embedding，以及部分 experimental multimodal services [Docs:ai-services]。
- 通过 native code、OpenAPI spec、MCP server 导入 plugins/functions [Docs:plugins]。
- 用 function calling 将模型请求路由到应用函数，再把结果传回模型 [Docs:plugins]。
- 构建 Semantic Kernel 文档语境中的 Agent Framework 能力：AI agents、multi-agent collaboration 与 human-agent collaboration；注意这不同于 successor 项目 Microsoft Agent Framework [Docs:agents][MSFT:maf-blog]。
- 用 Process Framework 试验 event-driven workflow、steps、auditability 和 OpenTelemetry [Docs:process]。
- 通过 filters/hooks/telemetry 接入 responsible AI 与治理控制点 [GH:rai][Docs:overview]。

## 运行环境与资源占用

| 场景 | CPU | 内存 | 存储 | 说明 |
|------|-----|------|------|------|
| SDK prototype | 普通开发机即可 | SDK 本体较低 | 项目依赖级 | 真实成本在外部 LLM/API/vector store |
| 企业应用嵌入 | 取决于业务服务 | 取决于 chat state、RAG、插件 | 日志/telemetry/vector store 额外增长 | 通常作为应用进程内 SDK 使用 |
| agent/process workflow | 取决于并发与工具调用 | agent history 与中间结果会增长 | 需要审计与日志预算 | function calling 与工具执行需权限控制 |

- **运行时**：C#/.NET 为主，Python 与 Java SDK 同步存在 [GH:api][Docs:overview]。
- **操作系统**：取决于 .NET / Python / Java 运行时与外部服务。
- **Docker**：本次 repo-level Dockerfile/docker-compose search 未发现一等部署入口；作为 SDK 不以 Docker platform 形态为主 [GH:local-scan]。
- **GPU**：不需要；模型推理通常在外部 provider / runtime。
- **外部依赖**：LLM provider、Azure/OpenAI/Anthropic/本地模型、vector store、业务 API、MCP/OpenAPI servers。

性能评分 4/5。SDK 本体轻；但 function calling、RAG、agents 的延迟由外部模型和插件决定，本次未做 benchmark。

## 上手体验

评分 4/5。

NuGet 与 PyPI 路径清晰，Microsoft Learn 文档完整；但 SK 的抽象比“一个 CLI 跑起来”复杂，需要理解 Kernel、services、plugins、functions、agents、filters 等概念 [Docs:overview][Docs:plugins][NuGet][PyPI]。

## 代码质量

评分 4/5。

本地浅克隆显示 5487 tracked files、88M，仓库治理文件齐全，community profile=100，release 节奏稳定，NuGet/PyPI 均有 1.x 包 [GH:local-scan][GH:community][GH:releases][NuGet][PyPI]。不给 5 是因为本次未运行测试，也未审查覆盖率；跨语言 SDK + connectors + agents + process 的复杂度很高。

## 可扩展性

评分 5/5。

Semantic Kernel 的核心就是 extensibility：native plugins、OpenAPI plugins、MCP plugins、AI service connectors、filters/hooks、agents 与 process steps 都是扩展点 [Docs:plugins][Docs:ai-services][Docs:agents][Docs:process]。

## 文档质量

评分 5/5。

Microsoft Learn 覆盖 overview、AI services、plugins、agents、process framework；repo 还有 Responsible AI FAQ。文档也能标注 experimental 与安全/治理 caveat，不只是 marketing [Docs:overview][Docs:ai-services][Docs:plugins][Docs:agents][Docs:process][GH:rai]。

## 社区与成熟度

| 维度 | 评分 | 说明 |
|------|------|------|
| 社区活跃度 | 5/5 | 27.9k stars、4.6k forks、964 discussions、269 releases、first-page 100 contributors，Microsoft 维护 [GH:api][GH:graphql][GH:contributors] |
| 成熟度 | 4/5 | .NET/Python 1.x 包持续发布，治理成熟；但 Process Framework experimental，且 successor 已指向 Microsoft Agent Framework [GH:releases][Docs:process][PyPI][MSFT:maf-blog] |

## 安全与风险

评分 3/5。

本次查询到 2 条 critical GHSA，涉及 vector-store filter RCE 与 AI Agent Function Calling arbitrary file write，受影响版本已有 patched ranges，但这足以说明 SK 的风险类型不是“传统 Web 小 bug”，而是 agent/function/tool 边界上的高危能力误用 [GH:advisories]。

生产建议：

- 对 plugins/functions 做 allowlist、输入 schema、权限分级与审计 [Docs:plugins]。
- 对 task automation 使用 human-in-the-loop、validation、auditing、安全检查 [Docs:plugins]。
- MCP/OpenAPI plugin 不应直接接入高权限内网 API。
- 升级到 patched versions：Python package `semantic-kernel >=1.39.4`；涉及 arbitrary file write 的 NuGet package 是 `Microsoft.SemanticKernel.Plugins.Core >=1.71.0` [GH:advisories]。
- 若新项目面向长期生产，应同时评估 Microsoft Agent Framework successor；Microsoft 称 SK v1.x 仍会获得 critical bug/security fixes，但多数新功能会转向 MAF [PyPI][MSFT:maf-blog]。

## 学习价值

学习价值很高。Semantic Kernel 说明一件事：agent framework 的终局不只是“让模型聊天或互相协作”，而是让模型成为应用架构中的一个受控组件。所谓善用其智，必先约其权；SK 的 plugin/filter/process 思路正在回答这个问题。
