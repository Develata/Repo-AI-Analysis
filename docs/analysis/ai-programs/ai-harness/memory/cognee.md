---
title: "Cognee"
created: 2026-06-13
updated: 2026-07-24
type: repository-analysis
repo_url: "https://github.com/topoteretes/cognee"
category: "ai-programs/ai-harness/memory"
tags: ["memory", "knowledge-graph", "rag", "python", "typescript", "self-hosted"]
previous_repo: ""
successor: ""
primary_language: "Python"
license: "Apache-2.0"
stars: 29211
forks: 2777
last_checked: 2026-07-24
last_verified: 2026-07-24
evidence: "current GitHub API + releases/README/security/governance review + fresh shallow clone scan; no production deployment or end-to-end smoke test by Develata"
archived_reason: ""
docker_support: true
gpu_required: false
estimated_cpu: "medium-to-high"
estimated_memory: "medium-to-high"
estimated_storage: "graph/vector/data pipeline storage grows with corpus"
status: active
ratings:
  capability: 4
  usability: 3
  performance: 3
  code_quality: 3
  documentation: 4
  community: 4
  maturity: 2
  extensibility: 4
  security: 3
  recommendation: 3
overall_score: 3.3
sources:
  - "[GH] https://github.com/topoteretes/cognee"
  - "[GH:api] https://api.github.com/repos/topoteretes/cognee queried 2026-06-13; stars=17802, forks=1884, open_issues_count=80 (GitHub REST counts issues plus PRs), created_at=2023-08-16T16:16:33Z, pushed_at=2026-06-12T22:51:37Z, license=Apache-2.0, default_branch=main"
  - "[GH:search] GitHub Search API queried 2026-06-13; open issues=19, open PRs=61, merged PRs since 2026-05-14=116 for repo:topoteretes/cognee"
  - "[GH:languages] https://api.github.com/repos/topoteretes/cognee/languages queried 2026-06-13; Python=6533368, TypeScript=1091833, JavaScript=99437, CSS=21498, HTML=18660, Shell=11709"
  - "[GH:release] https://api.github.com/repos/topoteretes/cognee/releases/latest queried 2026-06-13; latest release v1.1.2 published 2026-05-30T18:09:19Z"
  - "[GH:community] https://api.github.com/repos/topoteretes/cognee/community/profile queried 2026-06-13; health_percentage=100"
  - "[GH:advisories] https://api.github.com/repos/topoteretes/cognee/security-advisories?per_page=10 queried 2026-06-13; returned 0 advisories; absence of returned advisories is not a security proof"
  - "[GH:local-scan] Local clone /opt/data/tmp/repo_wiki_memory_batch/clones/cognee at commit a22320c9f6d3d5eecbd4aa59624bf4465656a1d8 dated 2026-06-08T06:59:13+02:00; git ls-files=2290, ext_counts={\".json\": 68, \".md\": 57, \".png\": 35, \".py\": 1577, \".sh\": 9, \".svg\": 29, \".ts\": 80, \".tsx\": 157, \".txt\": 101, \".yaml\": 14, \".yml\": 54, \"[noext]\": 23}, workflows=45, test/spec-ish files=392, manifests=[\"pyproject.toml\", \"docker-compose.yml\", \"Dockerfile\", \"README.md\", \"AGENTS.md\", \"CONTRIBUTING.md\", \"SECURITY.md\", \"CODE_OF_CONDUCT.md\", \"LICENSE\"]"
  - "[README] README.md from https://github.com/topoteretes/cognee local clone inspected 2026-06-13; product claims in this analysis are based on README/docs unless explicitly smoke-tested"
  - "[GH:current] GitHub GraphQL/API queried 2026-07-24: topoteretes/cognee exists, active/non-disabled, default_branch=main, head=90b4acaac937dc1c0aeffaead8b707c896ebf3db committed 2026-07-21, pushed_at=2026-07-23, primary_language=Python, license=Apache-2.0, stars=29211, forks=2777, open issues=226, open PRs=394. Counts are separate GraphQL totals."
  - "[GH:releases-current] GitHub releases API checked 2026-07-24: v1.4.0 published 2026-07-17, followed by v1.4.0.dev0 and prerelease v1.4.0.dev1; v1.4.0 describes search/ingestion and dataset-index improvements, but its own body calls parts 'draft' and asks for commit details, so release prose is treated as an imperfect project claim rather than verified behavior."
  - "[GH:issues-current] Open-issue/PR APIs sampled 2026-07-24: 226 open issues and 394 open PRs. Sampled issues include #4197 cancelled requests leaking Postgres sessions, #4191 Neo4j filter values interpolated into Cypher, #4204 ontology extraction failing strict JSON schema, #4159 MCP background-task lifetime, and #4162 dataset readers unable to open raw files. https://github.com/topoteretes/cognee/issues/4197 https://github.com/topoteretes/cognee/issues/4191 https://github.com/topoteretes/cognee/issues/4204 https://github.com/topoteretes/cognee/issues/4159 https://github.com/topoteretes/cognee/issues/4162"
  - "[README:current] Current README at head 90b4aca inspected 2026-07-24: describes Cognee as a self-hosted knowledge-graph memory platform, documents CLI/API/MCP, recommends a unified Postgres memory layer, and explicitly publishes Docker Hub images cognee/cognee and cognee/cognee-mcp in addition to source-built Compose profiles. These are documentation claims; images were not run in this audit."
  - "[GH:local-scan-current] Fresh shallow clone /opt/data/tmp/github-repo-wiki-freshness-audit/clones/cognee at 90b4acaac937dc1c0aeffaead8b707c896ebf3db inspected 2026-07-24: tracked_files=2743, workflows=48, conservative path-based test/spec-ish count=525; README, SECURITY, CONTRIBUTING, CODE_OF_CONDUCT, LICENSE, Dockerfile/docker-compose, MCP/frontend and Python manifests present. pyproject.toml reports version 1.4.0 and Development Status :: 4 - Beta. No tests were executed."
  - "[GH:advisories-current] https://api.github.com/repos/topoteretes/cognee/security-advisories checked 2026-07-24 returned []; this only means no published repository advisory was found in this check, not that the service, graph queries or memory data path is safe."
---

# Cognee

> 开源 AI memory platform，把数据管道、图谱和检索组织成 agent 可用的长期记忆；适合知识图谱/RAG memory 系统，不适合最低耦合个人插件。
>
> **状态**: `active` · **总分**: 3.3/5 · **推荐度**: 3/5

## 一句话总结

开源 AI memory platform，把数据管道、图谱、MCP 与检索组织成 agent 可用的长期记忆；当前部署面更完整，但快速 release 与 226 issues/394 PRs 的 backlog 要求生产采用保持审慎 [GH:current][README:current][GH:issues-current]。

## 总体评价

Cognee 属于 `ai-programs/ai-harness/memory`：它服务于 agent 的长期记忆、上下文组织、知识图谱或状态管理，而不是普通聊天 UI。当前 README 已给出 CLI/API/MCP、官方 Docker Hub images、Compose profiles，以及把 graph/vector/session/metadata 统一到 Postgres 的推荐部署路径 [README:current]。能力面比 2026-06 快照更完整。

反面是开发速度明显超过收敛速度：2026-07-24 有 226 open issues 与 394 open PRs，v1.4.0 后又出现 dev tags；公开 issue 样本报告 Postgres session lifetime、Cypher parameterization、raw-file reader 与 MCP task-lifetime 问题 [GH:releases-current][GH:issues-current]。这些报告本轮未复现，但已使 `maturity` 降至 2、`code_quality` 降至 3；活跃与成熟不能混为一谈。

## 推荐度：3/5

适合愿意维护 Postgres/graph/RAG memory platform、并能做版本锁定与隔离测试的团队；个人 Hermes 场景仍需谨慎，推荐度 3/5。官方 image 与统一 Postgres 路径降低了部署门槛，但 backlog、release-note 可信度和公开 issue 中待确认的 correctness/security concerns 阻止它升到 4 [README:current][GH:issues-current]。

## 优势

1. **方向切中 agent 长期痛点**：memory/context layer 是长周期 agent 的基础能力，能减少重复说明和跨 session 断裂 [README]。
2. **工程面继续扩张**：当前 local scan 为 2743 tracked files、48 workflows、525 个保守口径 test/spec-ish paths，并有 MCP、frontend、distributed、Docker/Helm 与多后端测试 [GH:local-scan-current]。
3. **生态可见度高**：当前 stars/forks 很高；2026-06-13 的历史快照还记录了此前一个月 116 个 merged PR，说明当时有较强开发活动，但不外推为 2026-07-24 的响应时效 [GH:current][GH:search]。
4. **部署路径更明确**：README 明确提供 API/MCP 两个 Docker Hub images、Compose profiles 与 Postgres-only memory stack；`docker_support=true` 现在有官方 user-facing image 证据，而不只是 Dockerfile [README:current]。

## 劣势

1. **memory 层风险高于普通工具**：会处理用户偏好、项目事实、对话历史或实体关系，必须考虑删除、过期、租户隔离和泄漏 [README]。
2. **README 能力不等于本地验证能力**：本轮未启动 image、数据库或 MCP，所有产品能力仍只按 README/releases 与仓库结构记为证据 [README:current][GH:local-scan-current]。
3. **backlog 已是硬负面信号**：226 issues 与 394 PRs 远高于上次快照；公开样本报告 session leak、Cypher interpolation、raw-file reader 和 ingestion/schema failures，但本轮没有独立复现 [GH:current][GH:issues-current]。
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
| Graphiti | temporal context graph | Graphiti 更聚焦时序图谱；Cognee 更像 memory/RAG 数据管道平台 |
| Mem0 | 通用 memory API | Mem0 更偏 SDK/platform；Cognee 更偏 self-hosted graph/RAG pipeline |
| Hindsight | 学习型 memory provider | Hindsight 更贴近 Hermes local embedded；Cognee 更重、更平台化 |

以上对比是定位级对比，竞品未在本条目中按同一 10 维度重新深审；结论应结合各自独立条目或后续审计。

---

## 它能做什么

根据当前 README 和仓库结构，Cognee 提供 ingest/cognify/search pipeline、CLI/API/MCP、graph/vector/relational backends、官方 containers 与云/自托管路径；其中心仍是把数据转成 agent 可检索的 memory graph，而不是轻量偏好表 [README:current][GH:local-scan-current]。评分对象是该 GitHub 仓库及文档所述自托管能力，不是对 Cognee Cloud、第三方模型/API、数据库后端或所有 integration 的审计。

能力评分 4/5。给分依据是功能覆盖与 agent-memory 相关性；未给满分的原因通常是需要额外部署、框架锁入、或 README 声称未被本轮实测。

## 运行环境与资源占用

| 场景 | CPU | 内存 | 存储 | 说明 |
|------|-----|------|------|------|
| 最小评估 | medium-to-high | medium-to-high | graph/vector/data pipeline storage grows with corpus | 只读 README/本地 clone 或最小 CLI/API 试用 |
| 推荐部署 | medium-to-high | medium-to-high | graph/vector/data pipeline storage grows with corpus | 按 README 启动完整 memory/context 工作流，实际依赖模型、数据库和数据量 |

- **运行时**：Python `>=3.10,<3.15`；pyproject 当前为 1.4.0/Beta，另有 TypeScript frontend 与独立 MCP surface [GH:local-scan-current]。
- **操作系统**：通常适合 Linux/macOS；Docker 支持为 `true`，未实测。
- **Docker**：官方 README 明确发布 `cognee/cognee:main` 与 `cognee/cognee-mcp:main`，并提供 Compose profiles；这满足官方 image 支持定义，但本轮未运行 [README:current]。
- **GPU**：本轮未发现硬性 GPU 要求；若使用本地 embedding/LLM，则另按模型决定。
- **外部依赖**：memory 项目常依赖 LLM、embedding、vector/graph DB 或云 API；是否可本地化需按具体配置核验 [README]。

performance 评分 3/5：统一 Postgres、graph/vector pipeline 与模型调用意味着资源占用会随 corpus/backend/configuration 变化，但本轮没有可比 benchmark 或明确的资源缺陷证据。故只给“平均、需按部署实测”的 3 分，不用架构复杂度本身推成 2 [README:current]。

## 上手体验

评分 3/5。README 提供了入门路径，但从“能启动 demo”到“接入 Hermes 并长期安全使用”之间仍有距离 [README]。如果需要额外 daemon、数据库、API key、MCP 配置或 provider glue，上手分会被压低；如果 CLI/SDK 边界清晰则相对加分。

## 代码质量

评分 3/5。48 workflows 与 525 个保守口径 test/spec-ish paths 显示工程投入很强，但 226 issues/394 PRs 以及公开报告中的 session、Cypher、raw-file reader、schema 样本说明 CI 规模尚未转化为足够的缺陷收敛；这些报告本轮未复现，但 bug/backlog 信号仍阻止它维持 4 [GH:local-scan-current][GH:issues-current]。

## 可扩展性

评分 4/5。此类项目通常通过 API、SDK、CLI、MCP、provider 或数据库后端暴露扩展点 [README]。但对 Hermes 而言，扩展性还要看是否能作为低噪声、低 token、低权限的外部 provider 使用；需要 fork 或重 glue 的方案不应因为功能多就给满分。

## 文档质量

评分 4/5。README 对 quickstart、Docker images、MCP、Postgres deployment 与其他语言入口的覆盖明显增强，治理文件也完整 [README:current][GH:local-scan-current]。扣分点是 v1.4.0 release body 自称部分内容仍是 draft 并索要 commit details，这削弱了 release notes 作为变更依据的可靠性 [GH:releases-current]。

## 社区与成熟度

| 维度 | 评分 | 说明 |
|------|------|------|
| 社区活跃度 | 4/5 | 2026-07-24 为 29211 stars、2777 forks、226 open issues、394 open PRs；提交与外部参与都很活跃，但积压使其不能按“快速响应、已消化”来描述 [GH:current][GH:issues-current]。 |
| 成熟度 | 2/5 | 约六周内从 v1.1.2 推进到 v1.4.0 并继续 dev tags，Beta classifier、快速扩面和 backlog 共同表明 API/部署边界仍在高频变化 [GH:releases-current][GH:local-scan-current]。 |

## 安全与风险

评分 3/5。本仓库代码标为 Apache-2.0 并有 `SECURITY.md`；云服务、images、模型/API、数据库后端和 integrations 可能适用各自条款与安全责任，不能由仓库许可一并推出。本轮未查到 published repository advisory [GH:local-scan-current][GH:advisories-current]。

#4191 的标题提出 Cypher value interpolation concern，#4197 报告 cancelled request 后的 Postgres session lifetime；二者是应在部署前核查的公开问题报告，不是本轮复现或已确认漏洞。结合 memory platform 的敏感数据面，维持“有明显 attack surface、需主动治理”的 3 分，而不把未确认 issue 直接当成 2 分已知漏洞 [GH:issues-current]。

主要风险是 memory 层自身：长期保存用户/项目事实、可能自动摄取对话、可能把召回内容注入 prompt，还可能接触 API keys、代码、文档和个人偏好。实际采用前应明确：本地/云边界、保留期限、删除接口、租户隔离、日志内容、prompt injection 防护和最小权限。

## 学习价值

学习价值较高。Cognee 可以作为观察 agent memory/context engineering 的样本：如何把短期对话转成长期事实，如何组织实体、图、上下文或用户模型，如何在召回质量、成本、隐私和工程复杂度之间取舍。即使不采用，也值得在设计 Hermes 外置 memory 策略时作为参照。
