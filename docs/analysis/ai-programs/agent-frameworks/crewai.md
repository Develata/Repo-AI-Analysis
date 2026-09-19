---
title: "CrewAI"
created: 2026-05-20
updated: 2026-09-16
last_checked: 2026-09-16
last_verified: 2026-09-16
type: repository-analysis
repo_url: "https://github.com/crewAIInc/crewAI"
category: "ai-programs/agent-frameworks"
tags: [multi-agent, python, agent-framework, workflow-orchestration, mcp]
primary_language: Python
stars: 58755
license: MIT
status: active
docker_support: false
gpu_required: false
estimated_cpu: "task-dependent; framework orchestration is not the model runtime"
estimated_memory: "depends on agents, histories, retrieval and tools; not benchmarked"
estimated_storage: "Python environment plus optional retrieval/model assets"
evidence: "2026-09-16 GitHub API, current README/LICENSE, manifests, release notes and repository tree; prior local scan retained as historical evidence; no install, tests or benchmark this audit"
ratings:
  capability: 4
  usability: 4
  performance: 3
  code_quality: 4
  documentation: 4
  community: 4
  maturity: 3
  extensibility: 5
  security: 3
  recommendation: 3
overall_score: 3.7
sources:
  - "[GH:stars] https://api.github.com/repos/crewAIInc/crewAI — queried 2026-09-19 UTC+8; stargazers_count=58755. Metadata-only repair of the omitted stars field; no new full freshness audit."
  - "[History] Local Git revision 72fa10bef9d4175ff42f56d4824bb7ab0579b168:wiki/github-repo-wiki/ai-programs/agent-frameworks/crewai.md, read before editing 2026-09-16; preserved 2026-05-20 API/GraphQL snapshot open issues=31/open PRs=302 and latest1.14.5; ratings.recommendation=4 while recommendation body explicitly said production3/5. This is the prior canonical analysis, not a fresh upstream query."
  - "[GH:current] https://api.github.com/repos/crewAIInc/crewAI — queried 2026-09-16 UTC+8; canonical unchanged, not archived/disabled, primary language Python, license MIT. Default branch/pushed_at, releases, community profile, recursive tree and separate Search queries checked; open issues=123, open PRs=686; published repository advisories=[] (negative lookup only)."
  - "[GH:readme] https://github.com/crewAIInc/crewAI/blob/main/README.md — read 2026-09-16 through GitHub API: Crews and Flows, commercial AMP control plane, JSON-first CLI scaffolding with agents/*.jsonc and crew.jsonc, separate global CLI/project environment upgrades, official crewAIInc/skills entry and live docs MCP. Python >=3.10,<3.14; telemetry section and opt-out documented."
  - "[GH:release] https://github.com/crewAIInc/crewAI/releases/tag/1.15.21 — latest release published 2026-09-09T22:54:19Z; last five releases checked 2026-09-16. Version progression alone is not the material gate; current scaffolding/CLI organization and backlog differ from the old 1.14.5 analysis."
  - "[GH:structure] https://github.com/crewAIInc/crewAI — current tree, root pyproject.toml and lib/crewai/pyproject.toml read 2026-09-16; tree includes lib/cli, core and tools packages, versioned docs including MCP security pages, tests and workflows. Tree presence is not coverage or CI execution evidence. LICENSE read through API is MIT."
  - "[GH:historical-scan] Local shallow scan 2026-05-20 at 7cc1a7bb414f0d79d905f9b26c0aac1d793818e2: README, LICENSE, SECURITY.md, pyproject and tools README inspected; core/tools separation, telemetry opt-out and MCP local-execution warnings recorded. Historical evidence only, not a current smoke test."
---

# CrewAI

> Crews 表达角色协作，Flows 表达事件与控制。开源框架与商业 AMP 控制面必须分开评价。
>
> **状态**: `active` · **总分**: 3.7/5 · **推荐度**: 3/5

> **验证边界**：本轮为 API、文档与静态结构检查，没有安装框架、运行 agents/tests 或 benchmark；AMP 未部署。

## 一句话总结

面向希望用 Python 建模角色、任务和多 agent 工作流的开发者；适合受控试验，不适合把“production-ready”宣传直接当成运维保证 [GH:readme]。

## 总体评价

CrewAI 的核心价值仍是 `Agent/Task/Crew` 与 `Flow` 的分工：自治协作不是所有任务的默认答案，显式状态与路由往往更重要。当前 README 已把新建项目入口改为 JSON-first scaffolding，并区分全局 CLI 与项目环境升级，旧的单一 Python/YAML 入门叙述不再完整 [GH:readme][GH:structure]。

最新稳定发布为 1.15.21。相较旧分析记录的 31 issues/302 PRs，本轮为 123/686；这不是 bug 密度证明，但足以削弱“快速响应、稳定生产”的乐观推断 [History][GH:current][GH:release]。本轮将社区从 5 调为 4、成熟度从 4 调为 3；性能从 4 调为证据较弱的 3，不从“轻量”宣传推断实测资源效率。推荐度统一为生产采用的 3/5，修正旧 frontmatter/标题推荐度 4/5 与正文生产采用 3/5 的冲突 [History]。

## 推荐度：3/5

**目标角色**：能编写 Python、验证 LLM/tool 行为并承担依赖升级的 automation 开发者。可选为 role-based 协作原型，生产前必须测失败恢复、预算、工具权限与版本迁移。研究/收录价值高，但不另用研究价值抬高采用评分。

AMP 的部署、观测、治理和企业支持是商业产品线声明，不由开源 MIT 许可证或本轮静态检查证明 [GH:readme]。

## 优势

1. Crews 与 Flows 分开表达自治和控制，业务语义清晰 [GH:readme]。
2. 当前 CLI 提供 declarative/JSON-first 入口，也保留 Python 扩展路线 [GH:readme][GH:structure]。
3. core、CLI、tools 与版本化文档有分层，适合逐层阅读 [GH:structure]。
4. 官方提供 skills/docs MCP 学习入口；它们不是执行安全保证 [GH:readme]。

## 劣势

1. agent、task、crew、flow、memory、tool 等概念叠加，简单任务可能不值得引入框架。
2. backlog 上升，尚未核验响应时延或真实故障解决比例 [GH:current]。
3. 模型调用、遥测、外部工具和商业服务各有数据边界 [GH:readme][GH:historical-scan]。
4. CLI 与项目环境分离后，只升级其中一处可能导致版本认知错误 [GH:readme]。

## 适合什么场景

- Python 应用内嵌角色分工与任务依赖。
- 用 Flows 限制 agent 自治范围的业务原型。
- 研究 tool、memory 和事件驱动编排的组合方式。

## 不适合什么场景

- 单次模型调用即可解决的简单脚本。
- 期待开源库自动附带企业控制面、RBAC 与运维 SLA。
- 没有预算约束或不能接受外部模型/工具数据流的环境。

## 与类似项目对比

| 项目 | 定位 | 相对本项目 |
|---|---|---|
| LangGraph | 显式图与状态编排 | 更强调图状态；CrewAI 的角色/任务表达更直接 |
| AutoGen | 多 agent runtime 与对话协作 | 协作抽象不同；CrewAI 以 Crews/Flows 组织应用 |
| Semantic Kernel | 应用/agent 编排 SDK | 更贴近应用连接器；CrewAI 更聚焦 Python 角色任务 |

以上为同类框架定位对比，没有对竞品做本轮同等十维审计，不据此断言性能或安全优劣。

## 它能做什么

能力 4/5：官方文档描述 agents、tasks、crews、flows、tools、memory/knowledge 和 guardrails。当前脚手架使用 `agents/*.jsonc`、`crew.jsonc`；复杂逻辑仍需 Python 与模型配置。AMP 的观测、管理和部署能力另行评估 [GH:readme]。

## 运行环境与资源占用

| 场景 | CPU | 内存 | 存储 | 说明 |
|---|---|---|---|---|
| Python framework | 未测量 | 未测量 | Python 独立环境 | Python >=3.10,<3.14；未安装测试 |
| 多 agent + retrieval | 依任务并发 | 随上下文/检索增长 | 数据与索引 | 无本轮 benchmark |
| 本地模型或工具 | 由模型/工具决定 | 由模型/工具决定 | 模型/浏览器/容器资产 | 不属于框架固有最低配置 |

性能 3/5：编排本身不等于模型推理，不能从核心“轻量”推断总运行成本。`docker_support: false` 表示本轮未核实官方用户 Docker image；MCP/code tools 使用容器或 AMP 声称 on-prem 并不等价 [GH:readme][GH:structure]。

## 上手体验

4/5：README 有安装、scaffolding 与运行说明。特别注意 `crewai` 全局 CLI 更新不自动升级项目虚拟环境；旧项目应读 migration 指南，而非仅复制新 JSON 布局 [GH:readme]。未执行安装 smoke，不能保证首次运行时长。

## 代码质量

4/5：当前 manifest/tree 与历史扫描显示 core/tools/CLI、测试和 docs 分层；这是结构性正信号，不是覆盖率或 CI 通过证明 [GH:structure][GH:historical-scan]。未运行测试；新脚手架与快速变更需要集成回归，而非以发布次数证明质量。

## 可扩展性

5/5：角色、任务、Flow 与 Python 工具的组合，以及 memory/knowledge/MCP 扩展面，使应用能在框架内定制编排而非必须 fork [GH:readme][GH:historical-scan]。高扩展性不表示扩展受沙箱保护。

## 文档质量

4/5：当前 README 明确区分商业控制面、CLI 升级和项目升级，版本化文档也有安全主题；但营销语与技术保证仍要分离 [GH:readme][GH:structure]。未逐页验证所有版本文档。

## 社区与成熟度

| 维度 | 评分 | 说明 |
|---|---|---|
| 社区 | 4/5 | 有持续活动，响应时延未核验 [GH:current] |
| 成熟度 | 3/5 | CLI/配置持续演进，升级需回归 [GH:readme] |

社区 4/5、成熟度 3/5。本轮 123 open issues、686 open PRs 与持续 release 说明有活动和维护压力；没有本轮延迟统计，不能维持仅靠受众规模支撑的社区 5/5 [GH:current][GH:release]。JSON-first 与 CLI 分层变化也要求重新验证老项目升级路径。

## 安全与风险

3/5。repository advisories 本轮为空，仅是负查找结果 [GH:current]。README 说明 telemetry 及关闭方式，部署前应检查实际版本并显式配置；MCP STDIO、code tools 和第三方工具应按本地执行权限处理 [GH:readme][GH:historical-scan]。限制可用工具、秘密、出站网络和 token 预算；不要把 guardrails 当成 OS sandbox，也不要把 AMP 宣传的企业治理套用于开源进程。

## 学习价值

高。适合学习自治角色与显式控制如何共存，以及框架、CLI、声明式配置、商业控制面之间如何划定边界。先问任务是否真的需要多个 agent，再选抽象。
