---
title: "Memorix"
created: 2026-08-08
updated: 2026-08-08
type: repository-analysis
repo_url: "https://github.com/AVIDS2/memorix"
category: "ai-programs/ai-harness/memory"
tags: ["memory", "mcp", "cross-agent-memory", "coding-agents", "typescript", "sqlite", "local-first", "hooks", "orchestration"]
previous_repo: ""
successor: ""
primary_language: "TypeScript"
license: "Apache-2.0"
stars: 617
forks: 47
last_checked: 2026-08-08
last_verified: 2026-08-08
evidence: "current GitHub API/release/npm metadata + fresh shallow source scan + static lockfile security audit; no npm install, build, test, MCP, Docker, or Hermes-plugin end-to-end smoke test"
archived_reason: ""
docker_support: true
gpu_required: false
estimated_cpu: "unknown; configuration- and workload-dependent, not benchmarked in this audit"
estimated_memory: "unknown; SQLite/Orama corpus, dashboard/control-plane, optional embedding/model lanes, media, and CodeGraph state were not measured"
estimated_storage: "published npm package unpacked size is 60,886,481 bytes (58.1 MiB); project memory/database/media/code-snapshot data grow with use and were not measured"
status: active
ratings:
  capability: 4
  usability: 3
  performance: 3
  code_quality: 3
  documentation: 3
  community: 3
  maturity: 2
  extensibility: 4
  security: 2
  recommendation: 2
overall_score: 2.9
sources:
  - "[GH] https://github.com/AVIDS2/memorix"
  - "[GH:api] GitHub REST API `https://api.github.com/repos/AVIDS2/memorix` queried 2026-08-08 UTC: public non-fork, archived=false, default_branch=main, created_at=2026-02-14T06:53:17Z, pushed_at=2026-08-08T04:20:24Z, TypeScript primary language, Apache-2.0, stars=617, forks=47, REST open_issues_count=12 (this REST field includes PRs)."
  - "[GH:issues] GitHub GraphQL and `issues?state=open` queried 2026-08-08 UTC: separate open issues=7, open PRs=5, default-branch history total=665. Open items include enhancement/research issues #175/#174/#173/#152/#147, legacy requests #49/#3, and PRs #184 (bot star-history update), #179 (MemorixBench protocol), #178 (MiniMax image-to-image), #151 and #136. URLs: https://github.com/AVIDS2/memorix/issues/175 https://github.com/AVIDS2/memorix/issues/49 https://github.com/AVIDS2/memorix/issues/3 https://github.com/AVIDS2/memorix/pull/184 https://github.com/AVIDS2/memorix/pull/179"
  - "[GH:releases] GitHub GraphQL/releases API queried 2026-08-08 UTC: 43 non-draft GitHub releases; latest `v1.4.2` / Memorix 1.4.2 published 2026-08-06T12:57:55Z. The current main clone head is 1d4fff784ab5e12ad1890a5f3528f61ea0bfc1d4 (`fix(ci): run checks for star history updates`, 2026-08-06)."
  - "[GH:community] GitHub community-profile API queried 2026-08-08 UTC: health_percentage=42; README and Apache-2.0 license detected, but CONTRIBUTING, CODE_OF_CONDUCT, issue template, and PR template are absent. Contributors endpoint first page reports 7 human accounts plus github-actions[bot], with AVIDS2=644 of the repository's 665 visible commits in the GraphQL snapshot."
  - "[GH:advisories] `https://api.github.com/repos/AVIDS2/memorix/security-advisories` queried 2026-08-08 UTC returned []; this means no published repository GHSA was found in that endpoint check, not that the package or deployment is safe."
  - "[NPM:package] `npm view memorix@1.4.2 --json` queried 2026-08-08 UTC: latest=1.4.2, Node >=22.18.0, Apache-2.0, unpackedSize=60,886,481 bytes, fileCount=529, npm provenance attestation present."
  - "[GH:readme] README.md at fresh clone head 1d4fff7 inspected 2026-08-08: positions Memorix as local-first shared project memory; says SQLite is canonical, Orama handles search, and LLM-backed formation/embedding is optional; documents CLI, stdio MCP, HTTP/dashboard, setup surfaces, SDK, Git/Reasoning/Long-term memory, CodeGraph, orchestration, memcode, and Docker. Product behavior was not independently smoke-tested."
  - "[GH:architecture] docs/ARCHITECTURE.md at clone head 1d4fff7 inspected 2026-08-08: documents observation/reasoning/Git/curated-long-term layers; source-bound long-term lifecycle; project-scoped default retrieval; optional embeddings/LLM; CLI/stdio/HTTP ingress; and team/task/lock/dashboard surfaces. These are repository documentation claims, not a runtime verification."
  - "[GH:integrations] README.md and docs/INTEGRATIONS.md at clone head 1d4fff7 inspected 2026-08-08: documents setup packages/config for multiple coding-agent clients, including a Hermes plugin path. `src/cli/commands/setup.ts` copies a Hermes plugin, writes/merges `<HERMES_HOME>/config.yaml`, and may call `hermes plugins enable memorix`; `plugins/hermes/memorix/__init__.py` registers pre/post LLM and post-tool/session hooks and forwards hook payloads to the `memorix` CLI. The bundled Hermes integration was not installed or tested against this Hermes instance."
  - "[GH:docker] README.md, docs/DOCKER.md, Dockerfile, compose.yaml, and ci.yml at clone head 1d4fff7 inspected 2026-08-08: an official Docker/Compose self-host path builds the HTTP control plane, exposes 3211, mounts `/workspace`, persists `/data`, runs as non-root `node`, and has a healthcheck; CI contains Linux/Windows build+test, Node 26 SQLite, Docker startup/health, typecheck, and MCP-registry metadata jobs. This establishes documented Docker support and test intent, not a local successful run."
  - "[GH:source-scan] Fresh shallow clone `/opt/data/tmp/repo_wiki_memorix.ch6zfg` at 1d4fff784ab5e12ad1890a5f3528f61ea0bfc1d4 inspected 2026-08-08: git ls-files=1643; src paths=320, packages paths=835, tests paths=279, workflows=3; package.json declares TypeScript workspaces plus CLI/SDK exports; root SECURITY.md, CONTRIBUTING.md, and CODE_OF_CONDUCT.md were not found. No source code was built or run."
  - "[Local:audit] Lockfile-only production audit run 2026-08-08 with a clean HOME: `npm audit --omit=dev --package-lock-only --json`. It returned total=5 vulnerabilities (high=4, moderate=1): js-yaml@3.15.0, nanoid@5.1.11, undici@8.5.0, ip-address@10.2.0, and hono@4.12.33; npm marked fixes available. This is dependency metadata analysis, not exploit reproduction."
  - "[Local:http-security-scan] Static review at clone head 1d4fff7 on 2026-08-08: serve-http defaults to 127.0.0.1 and uses localhost-only browser CORS, but its source has no matching Authorization/authentication/bearer/API-key gate; it exposes MCP plus dashboard/API routes, including a DELETE observation route. The dashboard source explicitly says it has no per-agent authentication. Docker's CMD binds 0.0.0.0 and compose maps 3211:3211. Static absence is not a complete security proof, but CORS is not an authorization boundary."
  - "[Local:plugin-audit] Static release-contract check at clone head 1d4fff7 on 2026-08-08: package.json=1.4.2 while plugins/hermes/memorix/plugin.yaml=1.1.1. `node scripts/sync-plugin-release-manifests.mjs --check` exits successfully because its listed versioned manifests omit the Hermes YAML manifest; the test checks plugin installation/config presence but not this version parity. This is a metadata-coverage gap, not proof of a runtime incompatibility."
  - "[Local:docs-drift] At clone head 1d4fff7 inspected 2026-08-08: docs/DEVELOPMENT.md still calls the current baseline the 1.3 line, while ACTIVE_WORK.md (last updated 2026-08-03) calls 1.4.1 current; package.json, server.json, CHANGELOG.md, npm metadata, and latest release identify 1.4.2. The repo itself says Git/package.json/CHANGELOG are live facts, but these stale secondary guides reduce documentation confidence."
  - "[WikiLocal:comparisons] Local canonical category entries used only for positioning: /opt/data/wiki/github-repo-wiki/ai-programs/ai-harness/memory/mem0.md, graphiti.md, supermemory.md inspected 2026-08-08; competitors were not re-audited under this entry's rubric."
---

# Memorix

> 面向 coding agents 的 local-first、project-scoped memory layer：把 observation、reasoning、Git、curated long-term memory 通过 CLI、MCP、hooks、SDK 与 dashboard 暴露给多个 agent/client。[GH:readme][GH:architecture]
>
> **状态**: `active` · **总分**: 2.9/5 · **推荐度**: 2/5
>
> **验证边界**：本轮核验了 GitHub/NPM 元数据、release、issue/PR、fresh source scan、lockfile audit 与静态实现；**未**执行 `npm install`、build、test、MCP、Docker、HTTP service 或 Hermes plugin 的 end-to-end smoke。下文的 product 行为均按仓库源码/文档表述，而非本机部署事实。[GH:source-scan][GH:docker]

## 一句话总结

Memorix 是一个有清晰 agent-memory 方向、较广 coding-agent integration surface 的项目级记忆层；但当前 production lockfile audit 有 4 个 high findings，HTTP control plane 又缺少可见的 HTTP authentication gate，因此它值得隔离研究，不应默认装入含秘密或生产权限的 agent 环境。[Local:audit][Local:http-security-scan]

## 总体评价

Memorix 应归入 `ai-programs/ai-harness/memory`：其核心对象是**项目记忆与跨 agent continuity**，不是一个单独的 coding agent。README 与架构文档将 SQLite 定义为 canonical store、Orama 定义为搜索层，并把 LLM formation / embedding 置为 optional；同时再叠加 Git Memory、Reasoning Memory、review-gated long-term memory、CodeGraph、技能、dashboard 与协作状态。[GH:readme][GH:architecture]

它的工程野心明显大于“一个 MCP memory server”：当前默认 stdio profile 试图保持较小的 agent-visible tool surface，HTTP mode 则扩展到 team/dashboard/coordination tools；CLI、SDK、Docker 与多个 agent setup path 也都在仓库中。[GH:readme][GH:source-scan] 这解释了 `capability: 4` 与 `extensibility: 4`，但也带来更多 persistence、hook、HTTP、provider、插件和 release-metadata 边界。

截至本次快照，项目有 617 stars、47 forks、7 open issues、5 open PRs，main 历史 665 commits、43 个 GitHub releases，最新 npm/GitHub release 为 1.4.2；它显然仍在维护，但从创建日期、频密发布和最近功能面扩张看，更像正在快速收敛的 1.x，而不是已长期验证的基础设施。[GH:api][GH:issues][GH:releases]

## 推荐度：2/5

面向愿意在**隔离、非敏感 Git 项目**中手动审查依赖、hook 与网络暴露面的 memory-infrastructure 研究者/maintainer，Memorix 可以作为 trial；对默认 Hermes 环境、含凭据的代码库、公开/跨主机 HTTP endpoint 或多租户生产服务，当前不推荐采用。

给 2 而非 3 的决定性理由不是 stars 或 feature list，而是两项当前可复核的 adoption blocker：其 production lockfile audit 报告 5 个漏洞、其中 4 个 high，且均有可用修复；另一方面，HTTP control plane 静态源码只有 localhost CORS 与默认 loopback bind，没有可见 HTTP authentication gate，而官方 Docker path 会以 `0.0.0.0` 监听并映射 3211 端口。CORS 只能约束浏览器，不能代替 network access control。[Local:audit][Local:http-security-scan]

对 Hermes 尤其应克制：仓库的安装代码会复制 plugin、写入/合并 Hermes config 并尝试 enable；plugin 又注册 pre/post LLM、post-tool 与 session hooks，并把 hook payload 交给 `memorix` CLI。仓库有安装级测试，但本轮未针对当前 Hermes 版本完成兼容 smoke，且其 plugin manifest 仍停在 1.1.1、未受 release version checker 覆盖。[GH:integrations][Local:plugin-audit]

## 优势

1. **memory model 不只是向量检索**：observation、reasoning、Git-derived engineering facts 与 source-bound curated long-term records 分层，long-term record 还有 `candidate → qualified → approved → archived/superseded` 生命周期。这比“把聊天全文塞进向量库”更可审计。[GH:architecture]
2. **local-first 的最小路径可读**：文档表述 SQLite + Orama 的 local full-text retrieval 不要求模型 key；LLM/embedding 是 optional enhancement，而非唯一数据路径。[GH:readme]
3. **agent/client 接入面广且有 tool-surface budget 意识**：CLI、SDK、stdio MCP、HTTP MCP、dashboard、Git hook、workspace/rule sync、技能与 memcode 被拆开；stdio `micro` profile 与 HTTP `team` profile 也避免默认把所有工具 schema 都喂给 agent。[GH:readme][GH:architecture]
4. **静态工程信号不差**：fresh scan 可见 1,643 个 tracked paths、279 个测试路径、3 个 workflow；CI 定义了 Linux/Windows build+test、typecheck、Node 26 SQLite 与 Docker health gate。它们不能替代本轮运行，但说明维护者至少为这些路径写了验证载体。[GH:source-scan][GH:docker]
5. **Apache-2.0 与 npm provenance 是正面采用条件**：代码许可清晰，公开 npm package 有 provenance attestation；但这不覆盖依赖漏洞或高权限 integration 的运营风险。[GH:api][NPM:package]

## 劣势

1. **当前依赖审计不能忽略**：lockfile-only production audit 返回 4 high + 1 moderate，包括 `js-yaml@3.15.0`、`nanoid@5.1.11`、`undici@8.5.0`、`ip-address@10.2.0` 与 `hono@4.12.33`，npm 给出可用修复。GitHub repository advisory endpoint 返回空数组并不抵消这组 package-level findings。[Local:audit][GH:advisories]
2. **HTTP control plane 的部署边界危险**：源码默认 bind `127.0.0.1` 是正确的起点，但 Docker CMD 改为 `0.0.0.0`、Compose 映射 3211；同一服务提供 MCP、dashboard 和 API route，而静态扫描没有找到 HTTP auth token gate。任何 Docker/host/network proxy 暴露都应被当作额外安全工程，而不是 README quickstart 的自然延伸。[Local:http-security-scan][GH:docker]
3. **跨 agent convenience 带来 data-flow 风险**：hooks、generated guidance、MCP、CLI、Git ingestion、memory store 与 optional external LLM/embedding 是多个输入/输出面；“local-first”不自动等于“不会把敏感 payload 交给 hook 或 provider”。[GH:readme][GH:integrations]
4. **发布元数据存在具体漏网点**：主 package 是 1.4.2，但 Hermes plugin manifest 是 1.1.1；version-sync checker 未覆盖该 YAML，检查仍会通过。它未证明 runtime broken，却说明 release coverage 没有覆盖全部已宣称的 first-party integration surfaces。[Local:plugin-audit]
5. **治理与文档维护尚未成熟**：GitHub community profile 仅 42%，缺 CONTRIBUTING/CODE_OF_CONDUCT/templates；同时 DEVELOPMENT/ACTIVE_WORK 的版本叙述分别落后于 1.4.2。项目自己把 package.json/CHANGELOG 定义为 live facts，这减轻了误导性，但不消除新 contributor 或 operator 的认知成本。[GH:community][Local:docs-drift]

---

## 适合什么场景

- 在临时、可重建、无生产秘密的 Git repository 中研究 cross-agent/project memory、上下文压缩、Git Memory 与 durable-memory lifecycle。
- 需要比较 agent memory 的不同设计：SQLite/BM25/optional embedding、Git facts、reasoning records、review-gated long-term memories 与 project identity 的取舍。
- 能自行锁定/升级依赖、限制网络暴露、review plugin/hook code，并在真实 agent client 上做 clean-install、store/search、upgrade/uninstall 验证的团队。
- 希望把多个 coding agent 的项目上下文统一到一个 project-scoped local store，而不把它误用为 user-global transcript archive。[GH:architecture]

## 不适合什么场景

- 直接接入默认 Hermes profile、生产代码库、云 console、支付/身份凭据或未分类 private repository。
- 把 HTTP MCP/dashboard 直接公开到 LAN/Internet，或假定 Docker port mapping + CORS 已经提供 authentication/authorization。
- 需要稳定、独立、已长期验证的 multi-tenant memory service，且无法自行完成 auth、retention、backup、upgrade、dependency remediation 与 incident response。
- 只需要少量可审计的长期偏好/项目约定；应先评估宿主已有能力是否足够，再决定是否引入额外的 Node package、hook 与 control plane。本轮没有审计任何宿主原生 memory surface。
- 无法接受 Node `>=22.18.0`、SQLite/Orama state、optional provider keys，以及每个 agent integration 对本地配置文件的影响。[NPM:package][GH:readme]

## 与类似项目对比

| 项目 | 定位 | 相对本项目 |
|------|------|-----------|
| Mem0 | 通用 agent memory 的 SDK/platform/self-hosted stack | Mem0 更偏 library/platform/server 多后端面；Memorix 更聚焦 coding-agent 的 project memory、Git facts、agent setup/hook surface。 |
| Graphiti | temporal knowledge-graph memory engine | Graphiti 更以时序实体/边和 graph backend 为中心；Memorix 的公开文档更强调 Git project identity、SQLite/Orama 与 agent workflow continuity。 |
| Supermemory | hosted/local context and memory engine | Supermemory 更偏 hosted/local product split；Memorix 更把 CLI/MCP/hook/plugins、Git/Reasoning memory 与 coding-agent handoff 放在同一 repo surface。 |

上述项目按 `ai-programs/ai-harness/memory` 同类范围做定位级对比，基于本地既有条目标题级定位与分类语境，并未在本条目中按同一 10 维度重新深审；表格不是性能、安全或成熟度排名。[WikiLocal:comparisons]

---

## 它能做什么

基于 README 与 architecture docs（而非 runtime smoke），Memorix 的可见能力面包括：[GH:readme][GH:architecture]

- **项目级 memory**：observation、reasoning、Git Memory、long-term records、retention/archive、entity/relation graph 与 source-aware retrieval。
- **task-lensed context**：`memorix context` / `resume`、MCP project context、detail/timeline、CodeGraph-lite 状态与 source freshness 线索。
- **多入口访问**：CLI、TypeScript SDK、stdio MCP、HTTP MCP/dashboard，以及可选 agent integration/package/rules/hooks/skills。
- **project coordination**：team identity、tasks、handoffs、messages、file locks、worktrees/orchestration 与 bundled `memcode` terminal agent。
- **可选智能增强**：embedding、LLM formation/quality、controlled media workflow；文档同时说明不用模型 key 时仍有 local full-text 路径。

能力评分 **4/5**：它覆盖了 coding-agent memory 的主要工程面，而且不是只有一个 API demo；不给 5 是因为大范围功能、多个 host integrations、HTTP/control-plane 与 media/orchestration 的真实可靠性本轮均未端到端验证，广度不能等同于已验证深度。[GH:source-scan][GH:readme]

## 运行环境与资源占用

| 场景 | CPU | 内存 | 存储 | 说明 |
|------|-----|------|------|------|
| 最小 local CLI / stdio MCP 评估 | 未测 | 未测 | npm unpacked 58.1 MiB + 项目 memory state | Node `>=22.18.0`；SQLite/Orama 的本地路径和 optional provider 由 docs 声称，未实测。 |
| HTTP control plane / dashboard | 未测 | 未测 | named data volume + workspace mount + memory/index/media state | 官方 Docker/Compose 路径启动 HTTP MCP/dashboard，需对项目挂载可见性与网络暴露负责。 |

- **运行时**：Node.js `>=22.18.0`，包提供 `memorix` 与 `memcode` CLI、MCP Registry stdio manifest 和 TypeScript SDK export。[NPM:package][GH:readme]
- **操作系统**：仓库 CI 配置 Linux/Windows build+test，并另有 Node 26 SQLite job；同时提供基于 `node:22-bookworm-slim` 的 Docker build。本轮没有实际运行任一 OS path。[GH:docker]
- **Docker**：`true`，因为官方 docs 给出用户可见 Dockerfile + Compose HTTP self-host path；它是 self-built control plane，而非本轮验证过的外部镜像或 stdio MCP 容器化保证。[GH:docker]
- **GPU**：没有发现硬性 GPU requirement；如果启用本地 embedding/LLM，其硬件需求仍由具体 provider/model 决定。[GH:readme]
- **外部依赖**：Git project identity、Node runtime、可选 LLM/embedding provider；HTTP/Docker mode 还依赖数据 volume、repo mount 与网络 policy。[GH:readme][GH:docker]

performance 评分 **3/5**。SQLite/Orama 与 small `micro` tool profile 是资源意识的正面设计，但 package 体积、memory corpus、CodeGraph/media、HTTP service、optional embeddings/LLM 与完整高级 tool profile 都会改变成本；本轮没有可比 benchmark、RSS、cold-start 或 retrieval latency 数据，不能把架构选择写成性能结论。[NPM:package][GH:source-scan]

## 上手体验

评分 **3/5**。`npm install -g memorix`、`memorix setup --agent <agent> --global`、manual stdio MCP 与 Docker docs 提供了很短的入口；README 的 agent support matrix 和 docs map 也降低了发现成本。[GH:readme][GH:integrations]

但“命令短”不等于安全稳定地得到价值：Node 22 floor、项目 identity、TOML/legacy config、optional provider keys、agent-specific plugin/rule/hook files、HTTP binding、Docker mount path 和 upgrade/uninstall 都是实际操作面。对 Hermes 而言，安装会改写 plugin/config state，必须先在 disposable `HERMES_HOME` 做 compatibility smoke；本轮没有做该动作。[GH:integrations]

## 代码质量

评分 **3/5**。正面证据是 TypeScript workspace 结构、279 个测试路径、针对 HTTP/project binding/Hermes installer 的测试、CI 中的 build/test/typecheck/Docker health job，以及 source 中对 project binding、tool profile、non-root container 的显式设计。[GH:source-scan][GH:docker][GH:integrations]

没有给 4：首先，本轮没有运行测试，不能把 test presence 写成 test pass；其次，项目将 memory、MCP、dashboard、orchestration、media、agent plugins 和 bundled terminal agent 叠进同一 package，维护边界很宽；最后，Hermes plugin manifest 的版本漂移未被 release checker 覆盖，是一个具体的 contract-coverage 漏洞。它不等于核心实现不可维护，但足够拒绝“CI 完整所以 integration 一定同步”的乐观推断。[Local:plugin-audit]

## 可扩展性

评分 **4/5**。扩展入口客观上很多：TypeScript SDK、MCP profiles、CLI namespaces、agent setup adapters、skills、rules/workspace sync、optional embedding/LLM providers、HTTP dashboard/control-plane 与 project-scoped store；源码还明确区分 stdio `micro`、`lite`、HTTP `team` 和 opt-in `full` tool profiles。[GH:readme][GH:architecture]

未给 5 的原因是“可接入”不等于“低风险可扩展”：每新增 agent host 都需要对应的 config schema、hook lifecycle、upgrade/uninstall compatibility 和 security review。Hermes release-manifest 漏网正说明这条 maintenance contract 尚未被完整机械化。[GH:integrations][Local:plugin-audit]

## 文档质量

评分 **3/5**。README、docs map、setup/integration/configuration/Docker/API/architecture documents 和 `llms.txt` 提供了很好的覆盖面；Docker docs 也明确区分 stdio MCP 与 HTTP control plane，并提醒容器必须看得见 project path，这种边界说明是加分项。[GH:readme][GH:docker]

但版本事实漂移拉低了分数：DEVELOPMENT 仍写 1.3 baseline，ACTIVE_WORK 仍称 1.4.1 current，而 release/package/server manifest 已到 1.4.2。对持续演进的 integration project，文档是上手/安全边界的一部分；secondary guide stale 即使不推翻 primary package/CHANGELOG，也会增加 operator 误配风险。[Local:docs-drift]

## 社区与成熟度

| 维度 | 评分 | 说明 |
|------|------|------|
| 社区活跃度 | 3/5 | 2026-08-08 快照为 617 stars、47 forks、7 open issues、5 open PRs，仍有 release/CI/PR 活动；但 GitHub community health=42，根目录缺 contribution/code-of-conduct/templates，贡献显著集中于 AVIDS2。stars 是可见度，不是维护容量证明。[GH:api][GH:issues][GH:community] |
| 成熟度 | 2/5 | 仓库创建于 2026-02-14，已有 43 个 release 并快速扩展至 1.4.2；平台能力有增长，但版本/secondary-doc drift、large integration surface 和未消化的 dependency audit 使其尚不满足“长期稳定、少破坏性变更”的基础设施门槛。[GH:api][GH:releases][Local:docs-drift][Local:audit] |

## 安全与风险

评分 **2/5**。这是本条目的关键结论，不应被“local-first”“no repository GHSA”或 CI 徽章稀释。

1. **依赖风险当前可见**：生产 lockfile audit 有 4 high + 1 moderate，并且 fixes available；至少在升级到修复版本、重新锁定并复跑 audit 前，不能给 security 3 以上。[Local:audit]
2. **HTTP 不是默认安全边界**：默认 CLI host 是 loopback，浏览器 CORS 只允许 localhost origin；但 dashboard source 明说没有 per-agent authentication，HTTP handler 静态扫描也未找到 auth/token gate，Docker 路径又主动 bind `0.0.0.0` 并 publish 3211。应将该服务限制于 loopback/受控 private network 或前置独立 auth，而不是暴露给 LAN/Internet。[Local:http-security-scan][GH:docker]
3. **memory payload 很敏感**：插件会把 pre/post LLM、post-tool/session callback payload 送进 Memorix CLI；即使 persistence layer 宣称可见性/项目隔离，也要先定义 hook capture、provider egress、retention、export、backup 与 delete policy，再把它接入含秘密的 agent workflow。[GH:integrations][GH:architecture]
4. **治理信号不足**：未找到 root SECURITY policy，community profile 也缺一些标准贡献/治理文件；GitHub advisory endpoint 空结果仅表示该 endpoint 没有 published repo advisory，并不替代 dependency audit 或 threat model。[GH:community][GH:advisories]

## 学习价值

即使 adoption score 只有 2/5，Memorix 仍有较高的学习价值。它把 agent memory 从“semantic search 的单一功能”拆成可讨论的工程问题：project identity、evidence provenance、Git-derived truth、reasoning records、review-gated durable memory、retrieval profiles、token budget、context handoff、failure-aware maintenance 与 multi-agent coordination。[GH:architecture]

特别值得借鉴的是三种**可迁移思想**：

- 默认 project-scoped，并把 global recall 设为显式选择；
- durable memory 走 candidate/review/lifecycle，而不是自动把 session transcript 永久化；
- stdio 用小 tool profile、HTTP/team 能力显式升级，避免所有 agent 都背负控制面 schema。

反面教材也同样有价值：一个 integration-heavy memory layer 的 release contract 必须覆盖每个 first-party plugin manifest；而 Docker network exposure、dependency audit 与 hook payload flow 必须在 adoption decision 处出现，不能只藏在文档末尾。这里，知其可为，更须知其不可轻为。[Local:plugin-audit][Local:audit][Local:http-security-scan]
