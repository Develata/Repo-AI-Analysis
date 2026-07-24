---
title: "Supermemory"
created: 2026-06-13
updated: 2026-07-24
type: repository-analysis
repo_url: "https://github.com/supermemoryai/supermemory"
category: "ai-programs/ai-harness/memory"
tags: ["memory", "context-engine", "typescript", "mcp", "local-first"]
previous_repo: ""
successor: ""
primary_language: "TypeScript"
license: "MIT"
stars: 28563
forks: 2482
last_checked: 2026-07-24
last_verified: 2026-07-24
evidence: "current GitHub API + release/README/governance review + fresh shallow clone scan; no production deployment, binary install or end-to-end smoke test by Develata"
archived_reason: ""
docker_support: false
gpu_required: false
estimated_cpu: "unknown; configuration-dependent and not benchmarked in this audit"
estimated_memory: "unknown; configuration-dependent and not benchmarked in this audit"
estimated_storage: "memory/document store grows with ingested content"
status: active
ratings:
  capability: 4
  usability: 3
  performance: 3
  code_quality: 2
  documentation: 3
  community: 4
  maturity: 2
  extensibility: 4
  security: 3
  recommendation: 2
overall_score: 3.0
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
  - "[GH:current] GitHub GraphQL/API queried 2026-07-24: supermemoryai/supermemory exists, active/non-disabled, default_branch=main, head=5a3ff85ea559a3f6ac32237a38de5042dc4bdd1a committed 2026-07-22, primary_language=TypeScript, license=MIT, stars=28563, forks=2482, open issues=34, open PRs=51. Counts are separate GraphQL totals."
  - "[GH:releases-current] GitHub releases API checked 2026-07-24: stable self-hosted server releases progressed from 0.0.3 to 0.0.4 (memory/ingestion changes), 0.0.5 (pluggable local/remote embeddings) and 0.0.6 (Windows support); 0.0.7-rc.2 was published 2026-07-22 as a prerelease for large-document ingest/shutdown fixes. Release behavior was not smoke-tested."
  - "[GH:issues-current] Open issue/PR sample checked 2026-07-24: 34 open issues and 51 open PRs. Sampled issues include #1237 self-hosted API-key auth returning 401, #1314/#1325 schema migration failures, #1312/#1315/#1324 ingestion stuck because the standalone Linux binary omitted rivetkit-wasm, #1320 concurrent local-embedding segfault, and #1336 embedding-provider env vars being ignored. https://github.com/supermemoryai/supermemory/issues/1237 https://github.com/supermemoryai/supermemory/issues/1314 https://github.com/supermemoryai/supermemory/issues/1312 https://github.com/supermemoryai/supermemory/issues/1320 https://github.com/supermemoryai/supermemory/issues/1336"
  - "[README:current] Current README at 5a3ff85 inspected 2026-07-24: distinguishes hosted App/API/MCP from 'Supermemory local', advertised as one binary with embedded graph engine, local embeddings, local credentials and the Memory API on localhost:6767; install paths are curl installer or npx. The README links self-hosting/configuration/embedding docs. These are docs claims; no binary was installed."
  - "[GH:local-scan-current] Fresh shallow clone /opt/data/tmp/github-repo-wiki-freshness-audit/clones/supermemory at 5a3ff85ea559a3f6ac32237a38de5042dc4bdd1a inspected 2026-07-24: tracked_files=1003, workflows=11, conservative path-based test/spec-ish count=94; TypeScript apps/MCP/web/extension, SDK/tool packages and skills are present. README, CONTRIBUTING and MIT LICENSE exist; no root SECURITY.md, CODE_OF_CONDUCT, Dockerfile or Compose manifest was found. No tests were run."
  - "[GH:docker-current] Current README and tracked-file scan checked 2026-07-24 found official binary/npx self-hosting but no official user-facing Docker image or Dockerfile/Compose path; docker_support is therefore false, not a claim that self-hosting is unavailable."
  - "[GH:advisories-current] https://api.github.com/repos/supermemoryai/supermemory/security-advisories checked 2026-07-24 returned []; this only means no published repository advisory was found in this check, not that the hosted/local memory, MCP or API-key boundary is safe."
---

# Supermemory

> 面向 AI 时代的 memory/context engine，生态热度高，Hermes 也内置了 Supermemory provider；但云/API 产品边界与本地自托管边界需要分清 [Hermes:provider]。
>
> **状态**: `active` · **总分**: 3.0/5 · **推荐度**: 2/5

## 一句话总结

面向 AI 的 hosted/local memory/context engine，Hermes 也有 API provider；但 self-hosted 0.0.x 的公开 issue 样本报告 auth availability、migration、ingestion 与 crash problems，使采用建议降为 2/5 [Hermes:provider][GH:releases-current][GH:issues-current]。

## 总体评价

Supermemory 属于 `ai-programs/ai-harness/memory`，但必须拆开两条采用路径：hosted App/API/MCP 是外部服务产品；`Supermemory local` 是 2026-06 后快速迭代的一体化 binary，内置 graph engine、local embeddings、credentials 与 localhost Memory API [README:current][GH:releases-current]。Hermes provider 使用 API key，因此不能把 local binary 的属性自动归给该 provider [Hermes:provider]。

0.0.4—0.0.6 增加 memory/ingestion、pluggable embeddings 与 Windows self-hosting，说明能力和可移植性在增长 [GH:releases-current]。但公开 issue 样本报告 API-key auth 返回 401、schema migration failure、missing WASM/queued ingest、embedding config 与 concurrent segfault problems [GH:issues-current]。这些报告本轮未复现，却不是 cosmetic drift，足以使 usability/code_quality/recommendation 下调；401 报告按 availability/configuration 问题处理，不当成 auth bypass 漏洞。

## 推荐度：2/5

适合愿意区分 hosted 与 local、能锁版本并用非敏感可重建数据做试验的 Supermemory 现有用户；默认 Hermes memory 或生产自托管场景暂不推荐，推荐度 2/5。至少应等待稳定版对这些报告给出 documented fixes/affected versions，再重做 clean-install、ingest 与 upgrade smoke tests；issue 被关闭本身不等于已发布修复 [GH:releases-current][GH:issues-current]。

## 优势

1. **方向切中 agent 长期痛点**：memory/context layer 是长周期 agent 的基础能力，能减少重复说明和跨 session 断裂 [README]。
2. **仓库有实际工程面**：当前 scan 为 1003 tracked files、11 workflows、94 个保守口径 test/spec-ish paths，含 app/web/MCP/extensions、SDK/tool packages 与 skills [GH:local-scan-current]。
3. **生态可见度高**：当前 stars/forks 很高；2026-06-13 历史快照记录此前一个月 118 个 merged PR，只用于说明当时有开发活动，不外推为 2026-07-24 的响应时效 [GH:current][GH:search]。
4. **local 形态已明确**：one-binary、embedded graph、local embeddings、local API 与可搬移数据目录，使 hosted/local split 有了可研究的具体实现 [README:current]。

## 劣势

1. **memory 层风险高于普通工具**：会处理用户偏好、项目事实、对话历史或实体关系，必须考虑删除、过期、租户隔离和泄漏 [README]。
2. **README 能力不等于本地验证能力**：本轮未安装 binary、调用 hosted API/MCP 或执行 upgrade，全部行为按 docs/releases 与结构证据表述 [README:current][GH:local-scan-current]。
3. **self-hosted 基础路径有 blocker reports**：针对 stable 0.0.6 的公开 issue 样本报告 auth 401、migration failure、ingestion queue 卡死、缺少 WASM bundle 与 concurrent embedding segfault；本轮没有独立复现 [GH:issues-current]。
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
| Honcho | 用户建模 memory backend | Honcho 更偏 peer/user representation；Supermemory 更偏资料/会话与 namespace/space 组织 |
| Holographic | Hermes 本地 fact store | Holographic 更轻更本地；Supermemory 更产品化、外部依赖更强 |

以上对比是定位级对比，竞品未在本条目中按同一 10 维度重新深审；结论应结合各自独立条目或后续审计。

---

## 它能做什么

根据当前 README/releases 与仓库结构，Supermemory 覆盖 hosted App/API/MCP、browser/plugins/connectors、memory/search/profile surfaces，以及 `Supermemory local` 的 embedded graph/local embeddings/API server [README:current][GH:releases-current][GH:local-scan-current]。能力评分保持 4，是对功能广度的评价，不表示 0.0.6 的 self-hosted path 已可靠。

能力评分 4/5。给分依据是功能覆盖与 agent-memory 相关性；未给满分的原因通常是需要额外部署、框架锁入、或 README 声称未被本轮实测。

## 运行环境与资源占用

| 场景 | CPU | 内存 | 存储 | 说明 |
|------|-----|------|------|------|
| 最小评估 | unknown; not benchmarked | unknown; not benchmarked | memory/document store grows with ingested content | 只读 README/本地 clone；本轮未调用 hosted API 或运行 local binary |
| 推荐部署 | configuration-dependent; not benchmarked | configuration-dependent; not benchmarked | memory/document store grows with ingested content | 实际取决于 hosted/local 路径、embedding provider、模型和数据量 |

- **运行时**：hosted path 由外部 API/MCP 提供；local path 通过 installer 或 `npx supermemory local` 安装 standalone server，默认监听 localhost:6767 [README:current]。
- **操作系统**：0.0.6 release 明确增加 Windows self-host support；具体 Linux/macOS/Windows artifact behavior 本轮未执行 [GH:releases-current]。
- **Docker**：当前官方路径是 binary/npx，没有核实到官方 image；`docker_support=false` 不等于不能自托管 [GH:docker-current]。
- **GPU**：本轮未发现硬性 GPU 要求；若使用本地 embedding/LLM，则另按模型决定。
- **外部依赖**：memory 项目常依赖 LLM、embedding、vector/graph DB 或云 API；是否可本地化需按具体配置核验 [README]。

performance 评分 3/5：hosted client 路径较轻，local binary 则内含 graph、embedding 与 ingest workflow，资源需求随模型和语料增长。当前没有可比 benchmark；#1320 属于 correctness/concurrency 信号，主要计入 code quality，而不据此把资源效率降到 2 [README:current][GH:issues-current]。

## 上手体验

评分 3/5。installer/`npx`/one-binary 入口表面上简单，README 也把 hosted/local 分开 [README:current]；但针对 stable 0.0.6 的公开 auth/migration/ingestion blocker reports 意味着“命令短”不等于“<1 小时稳定获得价值”。这些报告本轮未复现 [GH:issues-current]。

## 代码质量

评分 2/5。11 workflows 与 94 个保守口径 test/spec-ish paths 是正面信号，但一个刚发布的 stable self-host server 同时收到 missing runtime module、migration、auth availability、queue 与 segfault 报告；本轮未复现这些报告，却足以显示核心 clean-install/ingest/upgrade paths 的 practical reliability 尚待证明，按 bug-density 边界不能维持 3 [GH:local-scan-current][GH:issues-current]。

## 可扩展性

评分 4/5。此类项目通常通过 API、SDK、CLI、MCP、provider 或数据库后端暴露扩展点 [README]。但对 Hermes 而言，扩展性还要看是否能作为低噪声、低 token、低权限的外部 provider 使用；需要 fork 或重 glue 的方案不应因为功能多就给满分。

## 文档质量

评分 3/5。README 已清楚列出 hosted/local、installer、embedded components 与 self-host docs links [README:current]。但仓库根缺 SECURITY/CODE_OF_CONDUCT，0.0.x 仍快速变化；复杂 upgrade/auth/backup/troubleshooting 不能只靠 quickstart，本轮也没有验证 docs 的操作完整性 [GH:local-scan-current][GH:releases-current]。

## 社区与成熟度

| 维度 | 评分 | 说明 |
|------|------|------|
| 社区活跃度 | 4/5 | 2026-07-24 为 28563 stars、2482 forks、34 open issues、51 open PRs；提交/release/PR 活跃，但 star 不是质量证明 [GH:current]。 |
| 成熟度 | 2/5 | 仓库本身创建于 2024，但 self-hosted server 仍为 0.0.6，0.0.7 还是 RC，且公开 issues 对 clean install/upgrade/ingest/auth availability 核心路径报告多项问题 [GH:releases-current][GH:issues-current]。 |

## 安全与风险

评分 3/5。本仓库代码标为 MIT，但 hosted service、connectors、第三方模型/API 与集成条款不由此一并覆盖；仓库根缺 `SECURITY.md`，系统又处理长期敏感 memory、API/MCP credentials 与 connectors [GH:local-scan-current]。#1237 报告 API-key auth 返回 401，属于 availability/configuration concern，不是本轮证实的 bypass 或数据暴露。当前未查到 published repository advisory 只表示本轮无公开 GHSA；综合 attack surface 与治理缺口，维持 3 分而非已知漏洞档 2 分 [GH:issues-current][GH:advisories-current]。

主要风险是 memory 层自身：长期保存用户/项目事实、可能自动摄取对话、可能把召回内容注入 prompt，还可能接触 API keys、代码、文档和个人偏好。实际采用前应明确：本地/云边界、保留期限、删除接口、租户隔离、日志内容、prompt injection 防护和最小权限。

## 学习价值

学习价值较高。Supermemory 可以作为观察 agent memory/context engineering 的样本：如何把短期对话转成长期事实，如何组织实体、图、上下文或用户模型，如何在召回质量、成本、隐私和工程复杂度之间取舍。即使不采用，也值得在设计 Hermes 外置 memory 策略时作为参照。
