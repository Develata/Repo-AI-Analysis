---
title: "Future AGI"
created: 2026-05-31
updated: 2026-05-31
type: repository-analysis
repo_url: "https://github.com/future-agi/future-agi"
category: "ai-programs/agent-infrastructure"
tags: ["agent-infrastructure", "llm-observability", "evals", "agent-evaluation", "ai-gateway", "guardrails", "self-hosted", "python", "go", "react"]
previous_repo: ""
successor: ""
primary_language: "Python"
license: "Apache-2.0"
stars: 1061
forks: 217
last_checked: 2026-05-31
last_verified: 2026-05-31
evidence: "GitHub REST + GraphQL metadata, official docs extraction, and local shallow clone source/docs scan at commit 959d11e5dcc9450f63a67a56853cf5efa4057922. No Docker stack, SDK example, benchmark, eval run, or gateway traffic test was executed; performance and feature claims are treated as documentation/source claims unless explicitly marked as local scan facts."
archived_reason: ""
docker_support: true
gpu_required: false
estimated_cpu: "4 cores recommended by installation docs for the full OSS stack; lower for SDK-only instrumentation"
estimated_memory: "8 GB minimum / 16 GB recommended for full Docker stack; SDK-only usage is much lighter"
estimated_storage: "20 GB free recommended; image pulls around 3 GB and data/logs grow with traces, datasets and ClickHouse/Postgres volumes"
status: active
ratings:
  capability: 3
  usability: 3
  performance: 3
  code_quality: 3
  documentation: 3
  community: 3
  maturity: 2
  extensibility: 3
  security: 2
  recommendation: 3
overall_score: 2.8
sources:
  - "[GH] https://github.com/future-agi/future-agi"
  - "[GH:api] GitHub REST snapshot 2026-05-31: stars=1061, forks=217, created_at=2026-04-23, pushed_at=2026-05-30, primary_language=Python, license=Apache-2.0, latest release=0.5.6, security policy enabled, discussions enabled"
  - "[GH:graphql] GitHub GraphQL snapshot 2026-05-31: default branch main commit=959d11e5dcc9450f63a67a56853cf5efa4057922, commits=1067, open issues=61, open PRs=139, merged PRs=397, releases=4"
  - "[GH:advisories] GitHub repository security-advisories API queried 2026-05-31; returned []"
  - "[GH:local-scan] Local shallow clone /opt/data/tmp/repo-wiki-trending-2026-05-31/batch9/repos/future-agi at commit 959d11e5dcc9450f63a67a56853cf5efa4057922 dated 2026-05-29; git ls-files=8064, workflows=17, test-ish files=1133, markdown=21; major LOC heuristic: Python ~645k, JSX ~599k, Go ~113k; Dockerfiles/compose files found for backend, frontend, gateway, serving, code-executor and deployment paths"
  - "[GH:readme] README.md local scan 2026-05-31: marks nightly release for early testing, positions platform as simulate/evaluate/protect/monitor/gateway/optimize loop, documents cloud and self-host quickstarts, and includes benchmark claims for Agent Command Center"
  - "[GH:install] INSTALLATION.md local scan 2026-05-31: installer copies .env, runs Docker Compose, polls backend health, documents Docker Engine 24+, Compose v2.20+, 4 cores, 8 GB RAM minimum / 16 GB recommended, 20 GB disk, linux/amd64 prebuilt images and privileged code-executor requirement"
  - "[GH:testing] TESTING.md local scan 2026-05-31: documents frontend/backend testing; frontend has CI coverage, while backend CI is explicitly listed as missing/roadmap"
  - "[GH:security] SECURITY.md local scan 2026-05-31: report to security@futureagi.com, response timeline, scope includes main repo, SDKs, managed cloud and agentcc gateway; safe harbor and PGP key documented"
  - "[GH:contributing] CONTRIBUTING.md local scan 2026-05-31: requires CLA, documents Docker development setup, lint/test commands, contributor workflow, style rules and PR checklist; CLA permits future relicensing portions such as a future /ee/ folder"
  - "[GH:gateway] agentcc-gateway/README.md local scan 2026-05-31: describes OpenAI-compatible Go gateway, routing/caching/guardrail/observability features and reproducible benchmark methodology against mock OpenAI upstream; benchmarks were not rerun in this review"
  - "[Docs:command-center] https://docs.futureagi.com/docs/command-center extracted 2026-05-31: Agent Command Center is an AI gateway for 100+ LLM providers with OpenAI-compatible API, routing, guardrails, caching, cost controls, failover, observability, streaming, shadow experiments, MCP and A2A; docs warn prism package names are being renamed/deprecated"
  - "[Docs:evaluation] https://docs.futureagi.com/docs/evaluation extracted 2026-05-31: evaluation layer offers templates/configs, SDK/UI execution, datasets/simulations/experiments/playground/replay/CI surfaces, and 70+ built-in templates"
  - "[Docs:observe] https://docs.futureagi.com/docs/observe extracted 2026-05-31: observability layer tracks sessions/users, cost/quality, alerts/monitors and voice observability"
---

# Future AGI

> 面向 AI agents / LLM apps 的评估、观测、仿真、guardrails 与 OpenAI-compatible gateway 一体化平台；方向很对，但仓库很年轻、体量很大，当前更适合作为 agent quality infrastructure 的观察与试点对象。
>
> **状态**: `active` · **总分**: 2.8/5 · **推荐度**: 3/5
> **核验版本**: commit `959d11e5dcc9450f63a67a56853cf5efa4057922`；GitHub / docs / local clone 快照 2026-05-31
> **验证边界**: 本轮未启动 Docker stack、未跑 SDK/eval/gateway 流量、未复现 benchmark；能力与性能结论按“文档/源码可见但未实测”处理。

## 一句话总结

Future AGI 是一个把 evals、tracing、simulations、guardrails、AI gateway、datasets 和 prompt optimization 收束到同一反馈闭环里的 agent infrastructure monorepo；它值得进入 wiki 作为“agent quality / observability / gateway convergence”的样本，但 nightly/young-project 状态和未实测的大量能力要求我们保守评分 [GH:readme][GH:api]。

## 总体评价

这个仓库应归入 `ai-programs/agent-infrastructure`。它不是单纯 observability SaaS SDK，也不是单纯 gateway；它试图覆盖 agent 从上线前仿真、上线后 trace、持续 eval、guardrail 拦截、provider 路由、成本控制、数据回流到 prompt optimization 的完整 quality loop [GH:readme][Docs:evaluation][Docs:observe][Docs:command-center]。

方向上，它抓住了一个真实趋势：agent 进入生产后，问题不再只是“模型会不会回答”，而是“失败样本如何被捕获、如何可重复评测、如何在 gateway 层限流/缓存/guard、如何把 traces 变成下一轮迭代信号”。Future AGI 的一体化叙事正是这个趋势的浓缩版。

但本轮必须把产品叙事与 repo 可审计证据分开。README 第一行就标注 nightly release / early testing；仓库创建于 2026-04-23，只有一个多月历史，却已有 8064 个 tracked files、Python/React/Go 多栈、17 个 workflows、完整 Docker Compose stack、open issues=61、open PRs=139 [GH:api][GH:graphql][GH:local-scan]。这既说明开发速度很快，也说明稳定性证据不足。

所以结论是：值得分析、值得试点、值得跟踪；不宜因“all-in-one production platform”叙事直接把它当成熟生产底座。

## 推荐度：3/5

推荐度 3/5。建议 Develata 把它作为 **agent evaluation + observability + gateway stack** 的重点观察对象；若要使用，优先在隔离环境里跑小规模 self-host POC 或只接入 SDK/gateway 单点，而不是一次性把全栈接进生产。

推荐它的理由：

1. 问题域重要：agent 的可靠性需要 eval、trace、guardrail、gateway、simulation 共同闭环，而不是只看 prompt [Docs:evaluation][Docs:observe][Docs:command-center]。
2. 能力面完整：README 和 docs 覆盖 simulate / evaluate / protect / monitor / command center / optimize 六条主线 [GH:readme]。
3. 自托管路径真实存在：INSTALLATION 文档给出 Docker Compose、生产 overlay、资源要求和 secrets hardening 提示 [GH:install]。
4. Apache-2.0 许可降低代码采用障碍，但 CONTRIBUTING 的 CLA 条款也提示未来可能出现 `/ee/` 等再授权/商业边界，生产采用前仍应单独审查治理与许可证变化 [GH:security][GH:contributing]。

推荐度不升到 4 的原因也明确：nightly/early testing、仓库极年轻、backend CI 仍在 roadmap、open PR 较多、资源要求不低、部分 benchmark 和性能 claim 本轮未复现。这里按证据定分寸，不按 star 或 README 声量加分。

## 优势

1. **质量闭环抽象完整**：simulation、eval、trace、guardrail、gateway、optimization 被放在同一平台叙事中，适合观察 agent infrastructure 的收敛方向 [GH:readme]。
2. **Gateway 层很贴 agent 需求**：OpenAI-compatible API、100+ providers、routing、caching、cost control、guardrails、MCP/A2A 等能力集中在 Agent Command Center [Docs:command-center][GH:gateway]。
3. **Self-host 文档具体**：不是只写“支持 Docker”，而是给出 Docker Compose stack、端口、资源、Apple Silicon/arm64 注意事项和安装文档层面的 production secrets 提示；这不是本轮实测的安全结论 [GH:install]。
4. **工程体量已经很大**：本地扫描显示 Python/React/Go 多栈、8064 tracked files、1133 test-ish files、多个 Dockerfile/compose 文件和 17 个 workflows [GH:local-scan]。
5. **安全响应流程较规范**：SECURITY.md 有私密报告邮箱、响应时限、scope、safe harbor 和 PGP key [GH:security]。

## 劣势

1. **项目非常年轻**：2026-04-23 创建，距离本轮检查只有约 5 周；成熟度证据天然不足 [GH:api]。
2. **README 明确 early testing**：nightly release / expect rough edges 直接限制生产推荐度 [GH:readme]。
3. **全栈资源要求高**：安装文档要求 Docker、4 cores、8 GB RAM minimum / 16 GB recommended、20 GB disk，且 code-executor 需要 privileged 支持 [GH:install]。
4. **Backend CI 仍不完整**：TESTING.md 明说当前 CI 覆盖 frontend，backend CI、Playwright E2E、visual regression、accessibility、performance budgets 仍在 missing/roadmap [GH:testing]。
5. **产品/仓库边界需要小心**：docs 还覆盖 cloud gateway 和 managed product surface；本轮只审查 repo、官方文档和 shallow clone，没有验证 cloud/SOC2/HIPAA 等外部合规 claim。

---

## 适合什么场景

- 研究 agent observability / eval / guardrail / gateway 的一体化架构。
- 在内部 POC 中比较 Future AGI、Langfuse、Braintrust、Helicone、LiteLLM / Portkey 类 gateway 的边界。
- 对 agent traces 做持续质量评估，探索 eval templates / eval groups / replay / CI integration [Docs:evaluation]。
- 需要 OpenAI-compatible gateway 层做 provider routing、budget、cache、guardrail、MCP/A2A 接入 [Docs:command-center]。
- 有 Docker 资源，能接受年轻项目，并愿意自行审查数据流和权限边界的团队。

## 不适合什么场景

- 需要稳定、长期验证、低运维成本的生产 observability / gateway 平台。
- 内存/磁盘很紧张的 VPS；完整 OSS stack 不是轻量组件 [GH:install]。
- 不能接受 code-executor privileged container 或多服务 Docker Compose 的安全审计负担。
- 只想要单点 tracing SDK 或单点 eval library，不想引入一体化平台。
- 需要把官方 cloud 合规 claim 直接当成内部审计证据的场景；仓库分析不能替代供应商合规审查。

## 与类似项目对比

| 项目 | 定位 | 相对本项目 |
|------|------|-----------|
| Langfuse | LLM observability / prompt management | Future AGI 在自身文档中把 eval、simulation、gateway 一并纳入平台叙事；Langfuse 这里只作为 observability/prompt-management 生态参照 |
| Braintrust | evals + observability platform | Future AGI 更强调 self-host all-in-one 与 gateway；Braintrust 这里只作为 eval/experiment workflow 生态参照 |
| Helicone | LLM gateway/observability | Future AGI 的 Agent Command Center 是平台中的 gateway 层；Helicone 这里只作为 gateway/observability 生态参照 |
| LiteLLM / Portkey | OpenAI-compatible gateway / routing | Future AGI gateway 是更大平台的一部分；LiteLLM/Portkey 这里只作为 gateway 本体参照 |
| Agent Governance Toolkit | agent policy/governance control plane | AGT 已在本 wiki 同文件夹下收录；与 Future AGI 的比较仅用于区分 policy/tool-call governance 与 quality/observability/gateway 闭环 |

上述项目按 `ai-programs/agent-infrastructure` 同类范围做定位级对比，未按同一 10 维度框架深审；Langfuse、Braintrust、Helicone、LiteLLM、Portkey 是生态/产品参照项，不是本条目中重新审计的仓库。表格用于 taxonomy placement，不是完整 benchmark，也不比较 star/release 等未归一化指标。

---

## 它能做什么

能力评分 3/5。

按 README、official docs 与本地源码结构，它覆盖以下能力：

- **Evaluation**：eval templates/configs、70+ built-in templates、SDK/UI、datasets、simulations、experiments、playground、replay、CI/CD surfaces [Docs:evaluation]。
- **Observability**：sessions/users、trace capture、quality/cost tracking、alerts/monitors、voice observability [Docs:observe]。
- **Simulation**：多轮 conversation / persona / adversarial / edge-case simulation 的产品入口，README 将其列为六大 pillar [GH:readme]。
- **Guardrails / Protect**：PII、prompt injection、jailbreak、secrets、moderation 等 scanner/adapters 的 platform claim；本轮未逐项运行验证 [GH:readme][Docs:command-center]。
- **Agent Command Center**：OpenAI-compatible gateway、100+ provider routing、cache、budget、rate limit、failover、streaming、shadow experiments、MCP/A2A [Docs:command-center][GH:gateway]。
- **Self-host stack**：frontend、backend、worker、agentcc-gateway、serving、code-executor、Postgres、ClickHouse、Redis、MinIO、RabbitMQ、Temporal 等 compose service [GH:install]。

减分原因：能力广度主要来自 docs/source existence；本轮没有启动 stack、跑 eval、压测 gateway、验证 guardrail、接入真实 agent traces。对年轻 broad platform，能力应按“核心功能可见但有效质量未验证”处理，所以给 3 而不是 4/5。

## 运行环境与资源占用

| 场景 | CPU | 内存 | 存储 | 说明 |
|------|-----|------|------|------|
| SDK-only / tracing | 低 | 低 | 小 | 取决于接入的 Python/TS SDK 和上报目标；本轮未实测 |
| 本地 OSS stack | 4 cores | 8 GB minimum / 16 GB recommended | 20 GB free | 安装文档要求 Docker Engine 24+、Compose v2.20+，image pulls around 3 GB [GH:install] |
| 生产 self-host | 中到高 | 16 GB+ 起步 | 随 traces/datasets 增长 | 需 reverse proxy、HTTPS、secret rotation、backup、ClickHouse/Postgres/Temporal 运维 |

- **运行时**：Python/Django backend、React/Vite frontend、Go gateway、Docker Compose 多服务 [GH:local-scan][GH:install]。
- **操作系统**：Docker-centric；prebuilt images 文档标注 `linux/amd64`，Apple Silicon 默认经 Rosetta/QEMU 路径或自行 build [GH:install]。
- **Docker**：支持且是主要 self-host 路径；本轮只验证 Dockerfile/compose 文档和文件存在，没有实际 `docker compose up`。
- **GPU**：不要求；若接本地模型 serving 或某些 simulation/eval 模型则另计。
- **外部依赖**：LLM providers、Docker、Postgres、ClickHouse、Redis、MinIO、RabbitMQ、Temporal、SMTP、可能的 managed cloud / gateway。

performance 给 3：Agent Command Center README 有 benchmark harness 和具体数值，但本轮未复现；完整 stack 资源不轻，SDK-only 路径则较轻，综合取中位保守分 [GH:gateway][GH:install]。

## 上手体验

评分 3/5。

上手设计是清晰的：`git clone` 后 `./bin/install`，自动复制 `.env`、拉起 Docker Compose、poll backend health，然后引导创建首个用户 [GH:install]。Cloud 路径和 SDK path 也降低了试用门槛 [GH:readme]。

但真实工程上手不应高估：完整 stack 包含大量服务，资源要求不低；production 需要 secret、reverse proxy、SMTP、backup、data retention；code-executor privileged requirement 还会触发安全评审 [GH:install]。此外 docs 提到 command-center package rename/deprecation，说明部分 API/package naming 正在迁移 [Docs:command-center]。

所以 demo 上手接近 4，self-host production 上手只有 2–3，综合给 3。

## 代码质量

评分 3/5。

正面信号：本地扫描显示 8064 tracked files、17 workflows、1133 test-ish files、Docker/compose/deploy 材料齐全；CONTRIBUTING、SECURITY、TESTING、INSTALLATION 都比较完整 [GH:local-scan][GH:contributing][GH:security][GH:testing]。

扣分点：仓库极年轻但体量巨大，Python/JSX/Go 代码量很大，本轮无法有效审计实现质量；TESTING.md 明确 backend CI 仍在 roadmap，E2E、visual regression、a11y、performance budgets 也在 missing list [GH:testing]。因此不能因为文件多、测试多、README 强就给 4。

## 可扩展性

评分 3/5。

扩展面可见：OpenAI-compatible gateway、tracing / observability surface、Python/TypeScript SDK、custom eval templates、eval groups、provider routing、guardrail adapters、MCP/A2A、self-host Docker stack，都说明它不是封闭黑盒 [Docs:command-center][Docs:evaluation][GH:readme]。

但本轮没有实际接入 SDK、没有跑 gateway/eval/trace，也没有验证这些扩展点在版本演化中的稳定性。一体化平台的深度扩展往往要求理解 backend/frontend/gateway/worker/data stores 多层结构；这不是轻量插件系统。因此给 3，而不是按 broad surface 给 4。

## 文档质量

评分 3/5。

文档覆盖面可用：README、INSTALLATION、TESTING、CONTRIBUTING、SECURITY，加上 official docs 的 command center / evaluation / observe 页面，足以帮助读者理解产品面、部署面和贡献面 [GH:readme][GH:install][GH:testing][Docs:command-center][Docs:evaluation][Docs:observe]。

但对于一个 eval/tracing/gateway/guardrail 一体化平台，docs 还不足以支撑“覆盖主要功能且边缘场景少缺失”的 4：TESTING.md 自述 backend CI、E2E、visual regression、a11y、performance budgets 仍在 missing/roadmap；README marketing pressure 较强，performance/production claim 需要回到 benchmark harness 和真实部署复现 [GH:testing]。

## 社区与成熟度

| 维度 | 评分 | 说明 |
|------|------|------|
| 社区活跃度 | 3/5 | 2026-05-31 快照为 1061 stars、217 forks、open issues=61、open PRs=139、merged PRs=397、discussions enabled；活跃但还很年轻 [GH:api][GH:graphql] |
| 成熟度 | 2/5 | 仓库创建于 2026-04-23，README 标注 nightly / early testing，release 只有 4 个；体量增长很快但稳定期证据不足 [GH:api][GH:readme][GH:graphql] |

社区给 3 是因为 visibility 和开发活跃已经存在；成熟度给 2 是因为时间太短、早测标签明确、CI/测试缺口仍在文档中。Stars 是信号，不是成熟度。

## 安全与风险

评分 2/5。

正面信号：SECURITY.md 比较完整，报告邮箱、响应时间、scope、safe harbor、PGP 都有；repository advisories 本轮返回空；GitHub API 显示 security policy enabled [GH:security][GH:advisories][GH:api]。

但这些主要是政策/文档信号，不是 practical security evidence。Future AGI 处理 traces、sessions、users、datasets、eval results、provider keys、prompt/response 内容，并可能承接 OpenAI-compatible gateway、provider routing、virtual keys、budget、guardrails、MCP/A2A 和 code executor [Docs:command-center]。仓库极年轻，本轮未启动 Docker stack、未跑 gateway 流量、未测 auth/logging/权限隔离/code execution sandbox；因此对这种敏感控制面按高风险处理，给 2 而不是 3。

security 给 2：没有发现公开 repository advisory，但 attack surface 很大，且生产路径需要独立安全审计。

## 学习价值

Future AGI 的学习价值很高，尤其适合理解 2026 年 agent infrastructure 的一个收敛方向：

- eval 不是离线评分表，而是生产 trace 的回流机制；
- observability 不是只看 token 和 latency，还要接质量、session、user、alert；
- gateway 不只是 provider proxy，还会承载 routing、guardrail、budget、MCP/A2A 和 shadow experiment；
- simulation 是 agent 上线前发现长尾失败的重要手段；
- 一体化平台降低拼接成本，但也提高供应商/架构/数据面集中风险。

对 Develata 而言，Future AGI 值得收录的原因不在于“现在就采用”，而在于它把 agent reliability stack 的未来形状画得很密。观其形，取其义；用其器，则须先验其锋。