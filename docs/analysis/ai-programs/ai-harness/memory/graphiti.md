---
title: "Graphiti"
created: 2026-06-13
updated: 2026-07-24
type: repository-analysis
repo_url: "https://github.com/getzep/graphiti"
category: "ai-programs/ai-harness/memory"
tags: ["memory", "knowledge-graph", "temporal-graph", "python", "mcp", "self-hosted"]
previous_repo: ""
successor: ""
primary_language: "Python"
license: "Apache-2.0"
stars: 29114
forks: 2934
last_checked: 2026-07-24
last_verified: 2026-07-24
evidence: "current GitHub API + release/README/security/governance review + fresh shallow clone scan; historical GHSA status verified, no production deployment or end-to-end smoke test"
archived_reason: ""
docker_support: true
gpu_required: false
estimated_cpu: "medium"
estimated_memory: "medium-to-high with graph database/backends"
estimated_storage: "grows with episodes/entities/edges"
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
  - "[GH] https://github.com/getzep/graphiti"
  - "[GH:api] https://api.github.com/repos/getzep/graphiti queried 2026-06-13; stars=27358, forks=2734, open_issues_count=372 (GitHub REST counts issues plus PRs), created_at=2024-08-08T22:08:30Z, pushed_at=2026-06-12T22:16:03Z, license=Apache-2.0, default_branch=main"
  - "[GH:search] GitHub Search API queried 2026-06-13; open issues=241, open PRs=131, merged PRs since 2026-05-14=43 for repo:getzep/graphiti"
  - "[GH:languages] https://api.github.com/repos/getzep/graphiti/languages queried 2026-06-13; Python=2044472, Dockerfile=7289, Shell=3799, Makefile=1016"
  - "[GH:release] https://api.github.com/repos/getzep/graphiti/releases/latest queried 2026-06-13; latest release v0.29.2 published 2026-06-08T14:25:35Z"
  - "[GH:community] https://api.github.com/repos/getzep/graphiti/community/profile queried 2026-06-13; health_percentage=87"
  - "[GH:advisories] https://api.github.com/repos/getzep/graphiti/security-advisories?per_page=10 queried 2026-06-13; returned 1 advisories; absence of returned advisories is not a security proof"
  - "[GH:local-scan] Local clone /opt/data/tmp/repo_wiki_memory_batch/clones/graphiti at commit 0ed90b72505c2a6a4f3ee953939888fb56572944 dated 2026-06-11T20:03:40Z; git ls-files=352, ext_counts={\".example\": 6, \".ini\": 4, \".json\": 5, \".lock\": 4, \".md\": 23, \".py\": 255, \".sh\": 3, \".toml\": 4, \".txt\": 3, \".yaml\": 5, \".yml\": 23, \"[noext]\": 7}, workflows=15, test/spec-ish files=71, manifests=[\"pyproject.toml\", \"docker-compose.yml\", \"Dockerfile\", \"README.md\", \"AGENTS.md\", \"CONTRIBUTING.md\", \"SECURITY.md\", \"CODE_OF_CONDUCT.md\", \"LICENSE\"]"
  - "[README] README.md from https://github.com/getzep/graphiti local clone inspected 2026-06-13; product claims in this analysis are based on README/docs unless explicitly smoke-tested"
  - "[GH:current] GitHub GraphQL/API queried 2026-07-24: getzep/graphiti exists, active/non-disabled, default_branch=main, head=40dae460407be737e70d5c185995bfdcb892c0c0 committed 2026-07-23, primary_language=Python, license=Apache-2.0, stars=29114, forks=2934, open issues=266, open PRs=167. Counts are separate GraphQL totals."
  - "[GH:release-current] GitHub releases checked 2026-07-24: latest graphiti-core release remains v0.29.2 published 2026-06-08; release notes describe FalkorDB/Docker/provider fixes and dependency alert cleanup. No newer stable release was found in this check."
  - "[GH:issues-current] Open issue/PR sample checked 2026-07-24: 266 open issues and 167 open PRs. Sampled issues include #1676 concurrent multi-group FalkorDB processing corrupting cross-graph data, #1651 MCP get/delete querying the wrong FalkorDB graph, #1662 swapped source/target edges, and #1646 pre-assigned episode IDs failing creation. https://github.com/getzep/graphiti/issues/1676 https://github.com/getzep/graphiti/issues/1651 https://github.com/getzep/graphiti/issues/1662 https://github.com/getzep/graphiti/issues/1646"
  - "[README:current] Current README at 40dae460 inspected 2026-07-24: explicitly separates open-source Graphiti from proprietary managed Zep; Graphiti is self-hosted and brings a third-party graph database. Neo4j, FalkorDB/FalkorDB Lite and Amazon Neptune are documented; Kuzu is deprecated because upstream is unmaintained. README also documents MCP and Docker Compose. Product claims were not smoke-tested."
  - "[GH:docker-current] Current repository docs inspected 2026-07-24: server/README.md names official user-facing image zepai/graphiti:latest; mcp_server Docker Compose names zepai/knowledge-graph-mcp images. This supports docker_support=true, but images were not pulled or run."
  - "[GH:local-scan-current] Fresh shallow clone /opt/data/tmp/github-repo-wiki-freshness-audit/clones/graphiti at 40dae460407be737e70d5c185995bfdcb892c0c0 inspected 2026-07-24: tracked_files=354, workflows=15, conservative path-based test/spec-ish count=67; README, SECURITY, CONTRIBUTING, CODE_OF_CONDUCT, LICENSE, Docker/Compose, MCP/server and pyproject manifests present. pyproject reports graphiti-core 0.29.2. No tests were run."
  - "[GH:advisory-current] GitHub repository advisories endpoint checked 2026-07-24 returned GHSA-gg5m-55jj-8m5g / CVE-2026-32247, High, published 2026-03-11: Cypher injection via unsanitized node_labels in search filters; affected pip graphiti-core <=0.28.1, patched in 0.28.2, not withdrawn. Current release 0.29.2 is newer than the patched version. https://github.com/getzep/graphiti/security/advisories/GHSA-gg5m-55jj-8m5g"
---

# Graphiti

> 面向 AI agents 的实时/时序知识图谱 memory engine，擅长记录事实随时间变化的上下文，但作为 Hermes 外置 memory 需要额外集成和图存储运维。
>
> **状态**: `active` · **总分**: 3.3/5 · **推荐度**: 3/5

## 一句话总结

面向 AI agents 的 temporal context graph engine；当前支持面和产品边界更清晰，但 0.x、266 issues/167 PRs 与公开报告中的 FalkorDB correctness concerns 使它仍需隔离评估 [GH:current][README:current][GH:issues-current]。

## 总体评价

Graphiti 属于 `ai-programs/ai-harness/memory`：它服务于 agent 的时序事实、episode/entity/edge 关系与 context retrieval，而不是普通聊天 UI。当前 README 明确区分：Graphiti 是 Apache-2.0、自托管、需自带第三方 graph database 的 engine；Zep 则是使用 proprietary Context Graph Engine 的 managed product [README:current]。分析不能把 Zep 的 scale/SLA/治理能力归给本仓库。

核心价值仍是 temporal fact management 与可替换 graph/LLM/provider surface；FalkorDB Lite 降低了本地试验门槛，Kuzu 则已被明确 deprecated [README:current]。但当前 266 issues/167 PRs 中有公开 issue 报告 cross-graph corruption、wrong-graph MCP operations 和 edge-direction concerns；本轮未复现这些报告，但 backlog/breadth 足以使 `code_quality` 与 `maturity` 分别降至 3/2 [GH:issues-current]。

## 推荐度：3/5

适合需要 temporal knowledge graph、能固定 graphiti-core 版本并自行运维 Neo4j/FalkorDB/Neptune 的 agent/RAG 团队；对个人 Hermes 记忆插件仍偏重，推荐度 3/5。若使用旧版本，必须至少升级到 0.28.2 以避开已修复的 Cypher injection GHSA [GH:advisory-current]。

## 优势

1. **方向切中 agent 长期痛点**：memory/context layer 是长周期 agent 的基础能力，能减少重复说明和跨 session 断裂 [README]。
2. **工程结构仍完整**：当前 scan 为 354 tracked files、15 workflows、67 个保守口径 test/spec-ish paths，并有 core、MCP、REST server、Docker 与多 backend 代码 [GH:local-scan-current]。
3. **生态可见度高**：当前 stars/forks 很高；2026-06-13 历史快照记录此前一个月 43 个 merged PR，只用来说明当时有持续开发活动，不外推为当前响应时效 [GH:current][GH:search]。
4. **产品/开源边界写得更清楚**：README 直接解释 Zep 与 Graphiti 的 database、deployment、governance 与 scale 差异，降低了把商业产品能力误算到 OSS engine 的风险 [README:current]。

## 劣势

1. **memory 层风险高于普通工具**：会处理用户偏好、项目事实、对话历史或实体关系，必须考虑删除、过期、租户隔离和泄漏 [README]。
2. **README 能力不等于本地验证能力**：本轮未启动 graph DB、MCP/server 或 LLM pipeline，所有行为仍只按官方 docs、release 与结构证据表述 [README:current][GH:local-scan-current]。
3. **correctness backlog 很重**：266 issues/167 PRs，公开 issue 样本报告 graph routing、并发隔离、edge orientation 与 episode creation concerns；本轮没有独立复现 [GH:issues-current]。
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
| Mem0 | 通用 agent memory layer | Mem0 更像 SDK/API/platform，Graphiti 更强调 temporal knowledge graph 与事实演化 |
| Hindsight | 学习型 memory / entity graph | Hindsight 更贴近 Hermes provider；Graphiti 更像独立图谱引擎 |
| Cognee | AI memory platform / knowledge graph | Cognee 偏数据管道和 memory platform，Graphiti 偏实时上下文图 |

以上对比是定位级对比，竞品未在本条目中按同一 10 维度重新深审；结论应结合各自独立条目或后续审计。

---

## 它能做什么

根据当前 README 和仓库结构，Graphiti 提供 episode ingestion、temporal entity/edge graph、hybrid retrieval、Neo4j/FalkorDB/Neptune backends、FalkorDB Lite、MCP 与 REST surfaces；Kuzu driver 仍在但已 deprecated [README:current][GH:local-scan-current]。能力评分针对 OSS engine，不包含 Zep managed service 的 proprietary database 与 enterprise guarantees。

能力评分 4/5：temporal graph、hybrid retrieval、多 graph backends、MCP/REST 与 provider abstractions 已覆盖主要 agent-memory use cases；未给满分是因为它仍需外部 graph DB/LLM/embedding，0.x backend matrix 也未在本轮端到端验证 [README:current][GH:local-scan-current]。

## 运行环境与资源占用

| 场景 | CPU | 内存 | 存储 | 说明 |
|------|-----|------|------|------|
| 最小评估 | medium | medium-to-high with graph database/backends | grows with episodes/entities/edges | 只读 README/本地 clone 或最小 CLI/API 试用 |
| 推荐部署 | medium | medium-to-high with graph database/backends | grows with episodes/entities/edges | 按 README 启动完整 memory/context 工作流，实际依赖模型、数据库和数据量 |

- **运行时**：Python `>=3.10,<4`，graphiti-core 当前 0.29.2；需 LLM/embedding provider 和受支持 graph backend [GH:local-scan-current][README:current]。
- **操作系统**：通常适合 Linux/macOS；Docker 支持为 `true`，未实测。
- **Docker**：server 与 MCP docs 分别给出 `zepai/graphiti`、`zepai/knowledge-graph-mcp` images，满足官方 image 支持定义；本轮未运行 [GH:docker-current]。
- **GPU**：本轮未发现硬性 GPU 要求；若使用本地 embedding/LLM，则另按模型决定。
- **外部依赖**：memory 项目常依赖 LLM、embedding、vector/graph DB 或云 API；是否可本地化需按具体配置核验 [README]。

performance 评分 3/5：资源效率依赖 graph backend、episode volume、LLM/embedding 与 search mode；FalkorDB Lite 可降低试验门槛，但本轮没有可比 benchmark，故维持平均档而非从功能广度推断高性能 [README:current]。

## 上手体验

评分 3/5。README、official images、Compose 与 FalkorDB Lite 提供了多条明确入口；但最小完整路径仍涉及 graph backend、LLM/embedding credentials 与 MCP/server configuration，本轮也未做首次运行验证 [README:current][GH:docker-current]。

## 代码质量

评分 3/5。15 workflows 与 67 个保守口径 test/spec-ish paths 是正面工程信号，但公开 issues 报告 multi-group corruption、wrong-graph MCP query 与 swapped edge 方向等问题；虽未在本轮复现，仍说明多 backend/namespace 边界需要额外回归 [GH:local-scan-current][GH:issues-current]。

## 可扩展性

评分 4/5。此类项目通常通过 API、SDK、CLI、MCP、provider 或数据库后端暴露扩展点 [README]。但对 Hermes 而言，扩展性还要看是否能作为低噪声、低 token、低权限的外部 provider 使用；需要 fork 或重 glue 的方案不应因为功能多就给满分。

## 文档质量

评分 4/5。README 对 Graphiti/Zep split、backend choices、Kuzu deprecation、MCP/REST 与 Docker 的说明较完整，治理文件也在 [README:current][GH:local-scan-current]。不足仍是 production isolation、迁移和 graph correctness 需要结合 issues/源码自行判断。

## 社区与成熟度

| 维度 | 评分 | 说明 |
|------|------|------|
| 社区活跃度 | 4/5 | 2026-07-24 为 29114 stars、2934 forks、266 open issues、167 open PRs；提交与 issue/PR 互动活跃，但 backlog 很重 [GH:current][GH:issues-current]。 |
| 成熟度 | 2/5 | 当前仍为 0.29.2，backend architecture 与 docs 在快速变化，Kuzu 已进入 deprecation，且公开报告中的多 backend correctness backlog 尚待收敛 [GH:release-current][README:current][GH:issues-current]。 |

## 安全与风险

评分 3/5。Apache-2.0、`SECURITY.md` 与已发布修复是正面信号。GitHub advisory 明确记录 GHSA-gg5m-55jj-8m5g / CVE-2026-32247（High）：`graphiti-core <=0.28.1` 的 search filter `node_labels` 可导致 Cypher injection，0.28.2 已修复；当前 0.29.2 高于 patched version [GH:advisory-current][GH:release-current]。这是历史已修复漏洞，不应写成当前版本仍受影响，也不能写成“未返回 advisory”。

主要风险是 memory 层自身：长期保存用户/项目事实、可能自动摄取对话、可能把召回内容注入 prompt，还可能接触 API keys、代码、文档和个人偏好。实际采用前应明确：本地/云边界、保留期限、删除接口、租户隔离、日志内容、prompt injection 防护和最小权限。

## 学习价值

学习价值较高。Graphiti 可以作为观察 agent memory/context engineering 的样本：如何把短期对话转成长期事实，如何组织实体、图、上下文或用户模型，如何在召回质量、成本、隐私和工程复杂度之间取舍。即使不采用，也值得在设计 Hermes 外置 memory 策略时作为参照。
