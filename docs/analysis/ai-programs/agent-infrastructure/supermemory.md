---
title: "Supermemory"
created: 2026-06-13
updated: 2026-06-13
type: repository-analysis
repo_url: "https://github.com/supermemoryai/supermemory"
category: "ai-programs/agent-infrastructure"
tags: ["agent-infrastructure", "memory", "context-engine", "typescript", "mcp", "local-first"]
previous_repo: ""
successor: ""
primary_language: "TypeScript"
license: "MIT"
stars: 26897
forks: 2338
last_checked: 2026-06-13
last_verified: 2026-06-13
evidence: "GitHub API + GitHub Search API + release/community/advisory endpoints + local shallow clone scan; not deployed in production by Develata"
archived_reason: ""
docker_support: null
gpu_required: false
estimated_cpu: "low-to-medium for client/API use; server depends on deployment"
estimated_memory: "medium"
estimated_storage: "memory/document store grows with ingested content"
status: active
sharing_candidate: true
ratings:
  capability: 4
  usability: 4
  performance: 3
  code_quality: 3
  documentation: 4
  community: 4
  maturity: 3
  extensibility: 4
  security: 3
  recommendation: 3
overall_score: 3.5
sources:
  - "[GH] https://github.com/supermemoryai/supermemory"
  - "[GH:api] https://api.github.com/repos/supermemoryai/supermemory queried 2026-06-13; stars=26897, forks=2338, open_issues_count=40 (GitHub REST counts issues plus PRs), created_at=2024-02-27T20:10:04Z, pushed_at=2026-06-13T01:20:46Z, license=MIT, default_branch=main"
  - "[GH:search] GitHub Search API queried 2026-06-13; open issues=6, open PRs=34, merged PRs since 2026-05-14=118 for repo:supermemoryai/supermemory"
  - "[GH:languages] https://api.github.com/repos/supermemoryai/supermemory/languages queried 2026-06-13; TypeScript=2716433, MDX=1131061, Python=237675, CSS=29677, HTML=4385, JavaScript=856"
  - "[GH:release] https://api.github.com/repos/supermemoryai/supermemory/releases/latest queried 2026-06-13; latest release server-v0.0.3 published 2026-06-13T00:59:16Z"
  - "[GH:community] https://api.github.com/repos/supermemoryai/supermemory/community/profile queried 2026-06-13; health_percentage=50"
  - "[GH:advisories] https://api.github.com/repos/supermemoryai/supermemory/security-advisories?per_page=10 queried 2026-06-13; returned 0 advisories; absence of returned advisories is not a security proof"
  - "[GH:local-scan] Local clone /opt/data/tmp/repo_wiki_memory_batch/clones/supermemory at commit 39ef7e1e5ea01b34d2cdd1801d0d227d445a985d dated 2026-06-12T17:41:36-07:00; git ls-files=953, ext_counts={\".css\": 10, \".json\": 38, \".md\": 29, \".mdx\": 168, \".png\": 115, \".png\\\"\": 7, \".py\": 40, \".svg\": 40, \".ts\": 208, \".tsx\": 233, \".yml\": 11, \"[noext]\": 18}, workflows=11, test/spec-ish files=87, manifests=[\"package.json\", \"README.md\", \"CONTRIBUTING.md\", \"LICENSE\"]"
  - "[Hermes:provider] /opt/hermes/plugins/memory/supermemory/README.md and plugin.yaml inspected 2026-06-13; Hermes includes a Supermemory memory provider requiring SUPERMEMORY_API_KEY"
  - "[README] README.md from https://github.com/supermemoryai/supermemory local clone inspected 2026-06-13; product claims in this analysis are based on README/docs unless explicitly smoke-tested"
---

# Supermemory

> 面向 AI 时代的 memory/context engine，生态热度高，Hermes 也内置了 Supermemory provider；但云/API 产品边界与本地自托管边界需要分清 [Hermes:provider]。
>
> **状态**: `active` · **总分**: 3.5/5 · **推荐度**: 3/5

## 一句话总结

面向 AI 时代的 memory/context engine，生态热度高，Hermes 也内置了 Supermemory provider；但云/API 产品边界与本地自托管边界需要分清 [Hermes:provider]。 该判断基于 GitHub API、README 和本地浅克隆结构检查；本轮未做生产部署或端到端 smoke test [GH:api][README][GH:local-scan]。

## 总体评价

Supermemory 属于 `ai-programs/agent-infrastructure`：它服务于 agent 的长期记忆、上下文组织、知识图谱或状态管理，而不是普通聊天 UI。仓库当前公开、未归档，最近仍有 push；GitHub API 快照显示 stars=26897、forks=2338，说明可见度较高，但 REST `open_issues_count=40` 还需和 Search API 拆分的 open issues=6、open PRs=34 一起理解 [GH:api][GH:search]。

它的核心价值在于把“agent 如何跨 session 记住事实、上下文、用户/项目状态”产品化或工程化；主要风险是 memory 层天然涉及隐私、事实更新、删除语义、prompt injection、长期成本和数据治理。对于 Develata 的 Hermes 部署，应优先看 local-first、低耦合、可关停、可审计和成本可控，而不是只看 star 数或 benchmark 宣称。

## 推荐度：3/5

适合已有 Supermemory 工作流或需要跨工具 memory UI 的用户；默认 Hermes 本地场景推荐度 3/5。 评分没有因 star 数直接上调：memory 基础设施的采用风险主要在数据治理、运行面复杂度和与现有 agent runtime 的耦合，而不是功能列表长度。

## 优势

1. **方向切中 agent 长期痛点**：memory/context layer 是长周期 agent 的基础能力，能减少重复说明和跨 session 断裂 [README]。
2. **仓库有工程结构，活跃度需结合近期信号判断**：本地扫描显示 git ls-files=953、workflow=11、test/spec-ish 文件=87，不是 README-only 项目 [GH:local-scan]。
3. **生态可见度高**：stars/forks 和近期 merged PR 信号说明项目至少有持续关注和开发活动 [GH:api][GH:search]。
4. **适合学习 memory 设计边界**：无论最终是否采用，仓库都提供了观察 agent memory 如何组织事实、检索、上下文注入和持久化的样本 [README][GH:local-scan]。

## 劣势

1. **memory 层风险高于普通工具**：会处理用户偏好、项目事实、对话历史或实体关系，必须考虑删除、过期、租户隔离和泄漏 [README]。
2. **README 能力不等于本地验证能力**：本轮未部署运行，所有产品能力声明只按 README/docs 与仓库结构记为证据，不当作生产实测 [README][GH:local-scan]。
3. **活跃 backlog 需要消化**：Search API 显示 open issues=6、open PRs=34；这既说明活跃，也说明维护压力 [GH:search]。
4. **对 Hermes 的耦合度需单独评估**：除 Hermes 内置 provider 外，外部 memory 平台通常需要 MCP/API/provider glue，可能增加系统 prompt、工具面和运行故障点。

---

## 适合什么场景

- 构建长期运行的 agent，需要跨 session 记住用户、项目、任务、实体或历史决策。
- 团队愿意治理 memory 数据：定义什么该写、如何更新、如何删除、如何隔离、如何审计。
- 需要研究 agent memory / context engineering 的工程实现，而不仅是简单 RAG。
- 能接受项目自身的服务、数据库、CLI 或 API 依赖，而不是只要一个纯 prompt 技巧。

## 不适合什么场景

- 只需要 Hermes 现有 `MEMORY.md`、skills 和 session search 的轻量长期记忆。
- 不愿引入额外运行组件、数据库、云 API、CLI daemon 或 license 约束。
- 需要严格确定性的事实更新/删除语义，但没有审计和回滚流程。
- 对敏感个人信息/项目秘密没有数据治理策略，却打算自动保存完整对话。

## 与类似项目对比

| 项目 | 定位 | 相对本项目 |
|------|------|-----------|
| Mem0 | 通用 memory layer | 两者都做 memory/context API；Supermemory 更强调应用/UI/多工具 context engine |
| Honcho | 用户建模 memory backend | Honcho 更偏 peer/user representation；Supermemory 更偏资料/会话/容器化记忆 |
| Holographic | Hermes 本地 fact store | Holographic 更轻更本地；Supermemory 更产品化、外部依赖更强 |

以上对比是定位级对比，竞品未在本条目中按同一 10 维度重新深审；结论应结合各自独立条目或后续审计。

## 个人主页 sharing 候选

是，但应作为 agent memory/context infrastructure 观察条目，而非默认采用推荐。 如果写成分享文章，重点不应是“又一个 memory 项目”，而应是 memory 的工程边界：local vs cloud、自动写入 vs 手动治理、事实检索 vs 用户建模、成本 vs 召回质量。

---

## 它能做什么

根据 README 和仓库结构，Supermemory 提供 agent memory/context 相关能力：持久化上下文、检索、服务/API/CLI 或平台集成，具体形态以该项目 README 为准 [README]。对 Supermemory，重点是跨应用 memory/context engine 和 container/space 管理，而不是单一 agent 内部数据库。本地扫描显示主要语言为 TypeScript，语言统计包括 TypeScript, MDX, Python, CSS，说明其实现面并非单一脚本 [GH:languages][GH:local-scan]。

能力评分 4/5。给分依据是功能覆盖与 agent-memory 相关性；未给满分的原因通常是需要额外部署、框架锁入、或 README 声称未被本轮实测。

## 运行环境与资源占用

| 场景 | CPU | 内存 | 存储 | 说明 |
|------|-----|------|------|------|
| 最小评估 | low-to-medium for client/API use; server depends on deployment | medium | memory/document store grows with ingested content | 只读 README/本地 clone 或最小 CLI/API 试用 |
| 推荐部署 | low-to-medium for client/API use; server depends on deployment | medium | memory/document store grows with ingested content | 按 README 启动完整 memory/context 工作流，实际依赖模型、数据库和数据量 |

- **运行时**：以仓库 manifest 为准；本地扫描发现 package.json, README.md, CONTRIBUTING.md, LICENSE [GH:local-scan]。
- **操作系统**：通常适合 Linux/macOS；Docker 支持本轮未确认，未实测。
- **Docker**：若存在 Dockerfile/compose，仅说明仓库提供部署线索，不代表本轮生产验证 [GH:local-scan]。
- **GPU**：本轮未发现硬性 GPU 要求；若使用本地 embedding/LLM，则另按模型决定。
- **外部依赖**：memory 项目常依赖 LLM、embedding、vector/graph DB 或云 API；是否可本地化需按具体配置核验 [README]。

performance 评分 3/5：它衡量资源效率，不是能力强弱。memory/graph/context 平台越重，分数越难高。

## 上手体验

评分 4/5。README 提供了入门路径，但从“能启动 demo”到“接入 Hermes 并长期安全使用”之间仍有距离 [README]。如果需要额外 daemon、数据库、API key、MCP 配置或 provider glue，上手分会被压低；如果 CLI/SDK 边界清晰则相对加分。

## 代码质量

评分 3/5。本地扫描显示仓库有 11 个 GitHub Actions workflow、87 个 test/spec-ish 文件和多个 manifest，说明至少存在工程化组织 [GH:local-scan]。扣分来自本轮未跑测试、未审源码深层架构、以及 memory 项目通常涉及多服务/多语言边界。

## 可扩展性

评分 4/5。此类项目通常通过 API、SDK、CLI、MCP、provider 或数据库后端暴露扩展点 [README]。但对 Hermes 而言，扩展性还要看是否能作为低噪声、低 token、低权限的外部 provider 使用；需要 fork 或重 glue 的方案不应因为功能多就给满分。

## 文档质量

评分 4/5。README 和仓库文档覆盖了基本定位与使用路径；community profile health=50，本地扫描也发现相关文档/治理文件 ['package.json', 'README.md', 'CONTRIBUTING.md', 'LICENSE'] [GH:community][GH:local-scan]。扣分点是复杂生产治理、成本模型、隐私删除语义和 Hermes 适配通常需要额外阅读。

## 社区与成熟度

| 维度 | 评分 | 说明 |
|------|------|------|
| 社区活跃度 | 4/5 | stars=26897、forks=2338、open issues=6、open PRs=34、近 30 天 merged PR=118；star 是可见度信号，不等于质量证明 [GH:api][GH:search] |
| 成熟度 | 3/5 | created_at=2024-02-27T20:10:04Z，latest release=server-v0.0.3；memory 生态整体快速迭代，API/数据模型稳定性需按版本观察 [GH:api][GH:release] |

## 安全与风险

评分 3/5。License 为 MIT [GH:api]。GitHub Security Advisories API 本次检查结果见 sources；未返回 advisory 只能说明本次未查到公开 advisory，不能证明项目安全 [GH:advisories]。

主要风险是 memory 层自身：长期保存用户/项目事实、可能自动摄取对话、可能把召回内容注入 prompt，还可能接触 API keys、代码、文档和个人偏好。实际采用前应明确：本地/云边界、保留期限、删除接口、租户隔离、日志内容、prompt injection 防护和最小权限。

## 学习价值

学习价值较高。Supermemory 可以作为观察 agent memory/context engineering 的样本：如何把短期对话转成长期事实，如何组织实体、图、上下文或用户模型，如何在召回质量、成本、隐私和工程复杂度之间取舍。即使不采用，也值得在设计 Hermes 外置 memory 策略时作为参照。
