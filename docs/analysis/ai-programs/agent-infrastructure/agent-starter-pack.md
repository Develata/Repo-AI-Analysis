---
title: "Agent Starter Pack"
created: 2026-05-31
updated: 2026-05-31
type: repository-analysis
repo_url: "https://github.com/GoogleCloudPlatform/agent-starter-pack"
category: "ai-programs/agent-infrastructure"
tags: ["agent-infrastructure", "agent-templates", "google-cloud", "adk", "terraform", "cicd", "observability", "llmops", "python", "maintenance-mode"]
previous_repo: ""
successor: "https://github.com/google/agents-cli"
primary_language: "Python"
license: "Apache-2.0"
stars: 6454
forks: 1482
last_checked: 2026-05-31
last_verified: 2026-05-31
evidence: "GitHub REST/API + GraphQL metadata, official README/docs/successor migration docs, and local shallow clone scan. No generated project was created, no Terraform/Cloud Run/Agent Engine deployment was executed, and no Docker image was built; generated-template behavior is inferred from docs and source/templates."
archived_reason: ""
docker_support: true
gpu_required: false
estimated_cpu: "low for the scaffold CLI itself; generated agent projects depend on selected template, local playground, tests, Terraform and Google Cloud deployment target"
estimated_memory: "low-to-medium for local scaffold and tests; generated projects may need more for frontend/playground, ADK/RAG dependencies and deployment tooling"
estimated_storage: "local shallow clone checked at 468 git-tracked files; generated projects include app/tests/deployment/frontend/notebooks depending on template and target"
status: active
ratings:
  capability: 3
  usability: 3
  performance: 3
  code_quality: 3
  documentation: 4
  community: 3
  maturity: 2
  extensibility: 3
  security: 3
  recommendation: 2
overall_score: 2.9
sources:
  - "[GH] https://github.com/GoogleCloudPlatform/agent-starter-pack"
  - "[GH:api] GitHub REST API queried 2026-05-31; stars=6454, forks=1482, open_issues_count=32 (REST issue+PR aggregate), created_at=2025-01-31, pushed_at=2026-05-29, license=Apache-2.0, primary_language=Python, default_branch=main, archived=false"
  - "[GH:graphql] GitHub GraphQL queried 2026-05-31; open issues=10, open PRs=22, releases=83, latest release v0.41.3 created 2026-04-22, commits since 2026-03-31=19, vulnerabilityAlerts=0, topics include agents/gcp/gemini/genai-agents/llmops/mlops/observability"
  - "[GH:languages] GitHub languages API queried 2026-05-31; Python=1485310, Jupyter Notebook=268138, HCL=219386, TypeScript=106687, Makefile=54024, Go=28474, Java=26983, SCSS=22917, Dockerfile=14773, Nix=6575, Shell=3231"
  - "[GH:contributors] GitHub contributors API queried 2026-05-31; first page returned 20 contributors; top entries include eliasecchig=644, allen-stephen=35, dependabot[bot]=29"
  - "[GH:community] GitHub community profile queried 2026-05-31; health_percentage=62; README/license/CONTRIBUTING/CODE_OF_CONDUCT present; issue_template and pull_request_template not detected by API"
  - "[GH:advisories] https://api.github.com/repos/GoogleCloudPlatform/agent-starter-pack/security-advisories?per_page=30 queried 2026-05-31; returned []"
  - "[GH:readme-maintenance] Local README.md checked 2026-05-31; lines 18-34 state Agent Starter Pack is in maintenance mode, active development moved to google/agents-cli, ASP receives critical fixes only and no new features/templates/deployment targets, and new projects should start with agents-cli"
  - "[GH:readme-templates] Local README.md checked 2026-05-31; lines 38-118 describe production-ready templates, uvx create/enhance, ADK/A2A/RAG/LangGraph/Java/Live templates, Cloud Run/Agent Engine, CI/CD, observability, data pipeline, remote templates and Gemini CLI integration"
  - "[GH:readme-ops] Local README.md checked 2026-05-31; lines 127-180 list Python 3.10+, Google Cloud SDK, Terraform and Make requirements, docs links, video links, community showcase, feedback, disclaimer and Google Cloud Service Terms"
  - "[GH:local-scan] Local shallow clone /opt/data/tmp/repo-wiki-trending-2026-05-31/batch7/repos/agent-starter-pack at commit 659f047742457bd55e5db0edd088cf678b6f0669 dated 2026-05-19; git ls-files=468, test-ish files=108, workflows=3; checked pyproject.toml, CONTRIBUTING.md, CODE_OF_CONDUCT.md, GEMINI.md, docs, agent_starter_pack/agents, base_templates, deployment_targets and generated Dockerfile templates; no root SECURITY.md detected"
  - "[GH:manifests] pyproject.toml checked 2026-05-31; package version=0.41.3, Python>=3.10, console script agent-starter-pack, dependencies include click/cookiecutter/google-cloud-aiplatform/rich/pyyaml/backoff/requests; ruff/ty/codespell/pytest dev tooling configured"
  - "[GH:contributing] CONTRIBUTING.md checked 2026-05-31; defines Agent Starter Pack as a template generator, not a runtime framework; describes 4-layer template system, testing workflow, make lint/test, template-combination validation, Python/Go production template status, Java/TypeScript in development"
  - "[GH:docker-template] agent_starter_pack/deployment_targets/cloud_run/python/Dockerfile checked 2026-05-31; generated Cloud Run Python template uses python:3.11-slim, uv==0.8.13, optional Node 20 frontend build for ADK Live, uv sync --frozen and uvicorn on port 8080; Dockerfile was not built"
  - "[GH:workflow-windows] .github/workflows/test-windows.yml checked 2026-05-31; workflow runs on windows-latest, matrix deployment_target=[agent_engine, cloud_run], installs Python 3.11 and uv, then runs `uv run agent-starter-pack create test-project -s -y -d ... --cicd-runner google_cloud_build --output-dir target` and verifies target/test-project exists"
  - "[GH:workflow-release-docs] .github/workflows/release.yml and docs.yml checked 2026-05-31; release workflow uses actions/checkout@v4 and astral-sh/setup-uv@v4 by tag, docs workflow uses actions/checkout@v4, actions/setup-node@v4, actions/configure-pages@v5, actions/upload-pages-artifact@v3 and actions/deploy-pages@v4 by tag; not all actions are commit-SHA pinned"
  - "[Docs:successor] https://google.github.io/agents-cli/reference/from-agent-starter-pack/ extracted 2026-05-31; states agents-cli is the successor, adds coding-agent-first skills and commands such as playground/run/deploy/eval/lint/login/setup/update, maps ASP commands to agents-cli, and notes some ASP templates are not yet available in agents-cli"
  - "[Docs:getting-started] https://googlecloudplatform.github.io/agent-starter-pack/guide/getting-started extracted 2026-05-31; lists Python 3.10+/Go 1.21+/Node.js 20+, Google Cloud SDK, Terraform and uv prerequisites; create supports ADK/Go/TypeScript/RAG templates and Cloud Run/GKE/Agent Engine targets"
  - "[Docs:deployment] https://googlecloudplatform.github.io/agent-starter-pack/guide/deployment extracted 2026-05-31; describes Terraform plus Cloud Build/GitHub Actions CI/CD, setup-cicd, dev/staging/prod workflows, service account roles and required deployment variables"
  - "[Docs:observability] https://googlecloudplatform.github.io/agent-starter-pack/guide/observability extracted 2026-05-31; describes Cloud Trace telemetry enabled by default and opt-in BigQuery Agent Analytics plugin for ADK agents"
---

# Agent Starter Pack

> Google Cloud 的 GenAI agent project scaffold/template generator：曾经提供 ADK/RAG/multi-agent/Live API templates、Terraform、CI/CD、observability 与 Cloud Run/Agent Engine 部署骨架；但官方 README 已标明维护模式，新项目应迁移到 `agents-cli`。
>
> **状态**: `active`（repo-active / maintenance mode）· **总分**: 2.9/5 · **推荐度**: 2/5
> **核验版本**: GitHub commit `659f047742457bd55e5db0edd088cf678b6f0669`；GitHub API / official docs / local clone 快照 2026-05-31

## 一句话总结

Agent Starter Pack 适合作为“Google Cloud agent production scaffold”历史样本和迁移参考；由于官方已宣布维护模式并把 active development 转向 `google/agents-cli`，新项目采用推荐度只有 2/5，但它仍值得加入 wiki 用来理解 Google Cloud agent LLMOps scaffold 的演化 [GH:readme-maintenance][Docs:successor]。

## 总体评价

Agent Starter Pack（ASP）的定位不是 runtime framework，而是 **template generator**：CLI 生成独立 agent 项目，模板层叠加 base template、deployment target、frontend type 和 agent template；生成项目再用 Makefile、Terraform、CI/CD、Cloud Run / GKE / Agent Engine、observability 等工程骨架完成从 prototype 到 deploy 的流程 [GH:contributing][Docs:getting-started][Docs:deployment]。

这类项目的价值不在“更聪明的 agent loop”，而在把 agent 工程的周边基础设施一次性补齐：目录结构、测试、deployment、Cloud Build/GitHub Actions、Terraform service accounts、Cloud Trace、BigQuery analytics、RAG data pipeline、Firebase Studio / Cloud Shell starter 等 [GH:readme-templates][GH:readme-ops][Docs:deployment][Docs:observability]。对想研究 **agent productionization** 的人，它是一个很好的 Google Cloud 样本。

但它的 adoption 判断必须被 maintenance-mode 改写。README 开头明确写着：ASP is in maintenance mode；active development has moved to `agents-cli`；ASP 只收 critical fixes，no new features、no new templates、no new deployment targets；new projects should start with `agents-cli` [GH:readme-maintenance]。继任文档也说 `agents-cli` 是 successor，新增 coding-agent-first skills、统一 CLI、run/deploy/eval/playground/lint/login/setup/update 等命令，但也承认部分 ASP templates 暂未覆盖 [Docs:successor]。

所以本条目的结论是二分的：**收录价值高，生产/新项目采用价值低**。把它加入 wiki 是为了记录一条重要路线：从人类运行 scaffold CLI 的 ASP，迁移到面向 coding agents 的 `agents-cli`。但如果今天真正要开新项目，应优先评估 `google/agents-cli`，而不是从 ASP 起步。

## 推荐度：2/5

这里的推荐度指“现在新项目直接采用 ASP”的推荐度，不是收录/研究价值。

给 2/5 的理由很简单：官方自己已经把新项目导向 `agents-cli`，并说明 ASP 进入 critical-fixes-only 维护模式 [GH:readme-maintenance][Docs:successor]。即使 ASP 现有模板仍可用，继续押注一个不再新增 template/deployment target 的 scaffold，会把未来迁移成本提前埋进项目骨架。

更合理的使用方式：

1. **已有 ASP 项目**：按 migration guide 迁到 `agents-cli`，同时保留 agent code/tests/Terraform/CI/CD [Docs:successor]。
2. **研究 Google Cloud agent LLMOps**：读 ASP 的模板层、deployment docs、observability docs 和 generated Dockerfile/Terraform 设计 [GH:contributing][Docs:deployment][Docs:observability]。
3. **需要某些 agents-cli 暂未覆盖的旧模板**：可把 ASP 当作短期参考，但应把迁移风险写进技术债。

## 优势

1. **生产化骨架完整**：不是只给一个 demo agent，而是把 Terraform、CI/CD、Cloud Run/GKE/Agent Engine、observability、tests、frontend/playground 等组织进生成项目 [GH:readme-templates][Docs:deployment]。
2. **模板系统清楚**：CONTRIBUTING 明确写出 base templates、deployment targets、frontend types、agent templates 四层覆盖模型；这对理解 scaffold 工程很有价值 [GH:contributing]。
3. **Google Cloud 生态贴合**：Vertex AI evaluation、Cloud Trace、BigQuery analytics、Cloud Build/GitHub Actions、Agent Engine、Cloud Run 都在官方 docs 中有路径 [GH:readme-templates][Docs:deployment][Docs:observability]。
4. **远程模板与 enhance 模式**：既可以 create 新项目，也可以 enhance 既有 agent，还支持 remote templates 从 Git repo 生成定制 starter pack [GH:readme-templates][GH:contributing]。
5. **工程卫生不差**：本地扫描显示 468 个 tracked files、108 个 test-ish files、3 个 workflows；pyproject 配置 pytest/ruff/ty/codespell，Windows compatibility workflow 会实际生成模板项目 [GH:local-scan][GH:manifests][GH:workflow-windows]。

## 劣势

1. **官方维护模式是最大风险**：critical fixes only，no new features/templates/deployment targets；这直接压低新项目采用推荐度和成熟度评分 [GH:readme-maintenance]。
2. **继任关系造成认知分裂**：docs/README 同时保留 ASP 使用方式，又把 active development 指向 agents-cli；读者需要判断自己是在维护旧项目、迁移旧项目，还是新建项目 [Docs:successor]。
3. **云资源复杂度高**：GCP SDK、Terraform、service accounts、Cloud Build/GitHub Actions、staging/prod projects、BigQuery/Trace 等都可能成为上手门槛 [Docs:getting-started][Docs:deployment]。
4. **安全治理文件不完整**：本地浅克隆未发现 root `SECURITY.md`；虽然无公开 GitHub security advisories，但“不存在 advisory”不等于云部署链路安全 [GH:local-scan][GH:advisories]。
5. **本轮未生成/部署项目**：没有实际运行 `uvx agent-starter-pack create`、没有跑 Terraform、没有部署 Cloud Run/Agent Engine、没有构建 Docker image，因此不能把 docs 中的 production-ready 声称当作实测结论。

---

## 适合什么场景

- 维护已有 ASP 项目，需要理解原始 scaffold、Makefile、Terraform、CI/CD 和迁移路径 [Docs:successor]。
- 研究 Google Cloud 上 GenAI agent 从 prototype 到 production 的工程骨架。
- 对比 `agents-cli` 继任设计，观察 Google 如何从 human-oriented scaffold 迁移到 coding-agent-first lifecycle tooling [Docs:successor]。
- 学习 template generator 如何组织 base template、deployment target、frontend type、agent template 四层 [GH:contributing]。
- 需要短期参考 Cloud Run / Agent Engine / GKE deployment templates、generated Dockerfile 或 observability patterns [GH:docker-template][Docs:deployment][Docs:observability]。

## 不适合什么场景

- 2026-05 之后从零开始的新 Google Cloud agent 项目；官方推荐从 `agents-cli` 开始 [GH:readme-maintenance][Docs:successor]。
- 需要持续新增 agent templates、deployment targets 或快速演进 roadmap 的团队。
- 不使用 Google Cloud / ADK / Vertex AI / Cloud Run / Agent Engine 的通用 agent framework 场景。
- 缺少 GCP IAM、Terraform、CI/CD、service account 和 cloud observability 经验的轻量个人项目。
- 需要已实测、长期稳定、安全审计充分的生产控制面；ASP 是 scaffold，不是完整运行时安全产品。

## 与类似项目对比

| 项目 | 定位 | 相对本项目 |
|------|------|-----------|
| agents-cli | ASP 的官方继任 CLI / skills / lifecycle tooling | agents-cli 是官方新主线；ASP 是旧 scaffold 与迁移来源 |
| Agent Governance Toolkit | agent runtime governance / policy / audit substrate | AGT 治理 agent runtime 权限与审计；ASP 生成 Google Cloud agent 项目骨架 |
| Vibe Kanban | coding-agent task/workspace/review orchestration UI | Vibe Kanban 管理 agent 工作流；ASP 生成部署与运维骨架 |
| LangChain / LangGraph | agent/library framework | LangChain/LangGraph 写 agent logic；ASP 可生成包含 LangGraph/ADK 等 agent 的 cloud project scaffold |
| CrewAI / AutoGen | 多 agent framework | CrewAI/AutoGen 偏 agent 协作逻辑；ASP 偏 GCP production packaging、CI/CD 与 deployment |

上述对比按 `ai-programs/agent-infrastructure` 大类做定位级对比，功能子层并不完全相同；`agents-cli` 是官方继任项目而非同一批次深审对象。表格用于 taxonomy placement，不代表这些项目已按同一 10 维框架重新评测。

---

## 它能做什么

能力评分 3/5。

按 repo/docs 可见范围，ASP 能做的事情包括：

- `uvx agent-starter-pack create` 生成 agent 项目，包含 app、tests、deployment、frontend/notebooks 等结构 [Docs:getting-started]。
- 支持 ADK、ADK+A2A、agentic RAG、LangGraph、Java/Go/TypeScript/Live API 等 README 中列出的模板族；注意部分模板在 agents-cli 中暂未覆盖，而 ASP 不再新增模板 [GH:readme-templates][GH:readme-maintenance][Docs:successor]。
- `enhance` 既有 agent 项目，加入 production deployment / infrastructure scaffold [GH:readme-templates]。
- 生成或组织 Cloud Run / GKE / Agent Engine deployment targets、Terraform、Cloud Build/GitHub Actions CI/CD [GH:contributing][Docs:deployment]。
- 提供 observability 路径：Cloud Trace telemetry 默认启用，BigQuery Agent Analytics plugin 可选 [Docs:observability]。
- 支持 remote templates，用 Git repository 提供定制 agent starter pack [GH:contributing]。

不给 4/5 的原因不是“能力少”，而是这些能力已处于维护模式，且本轮未实际生成和部署项目；新能力和新模板会流向 `agents-cli`。

## 运行环境与资源占用

| 场景 | CPU | 内存 | 存储 | 说明 |
|------|-----|------|------|------|
| scaffold CLI | 低 | 低 | 小 | Python CLI + cookiecutter/uv；本轮未运行 create |
| 本地生成项目开发 | 低到中 | 中 | 中 | 取决于 ADK/RAG/frontend/notebook/template 组合；通常涉及 Python/Go/Node/Make |
| Cloud deployment | 中 | 中到高 | 中到高 | 资源主要在 Terraform/GCP/Cloud Run/GKE/Agent Engine/BigQuery/Trace，而非 scaffold CLI 本身 |

性能评分 3/5 是保守中性分：本轮没有运行 create/build/deploy timing，也没有对生成项目做压测；因此只按 scaffold CLI 与模板工程的资源面给中性判断。

- **运行时**：ASP package 要求 Python>=3.10；模板项目可能还要求 Go 1.21+ 或 Node.js 20+ [GH:manifests][Docs:getting-started]。
- **操作系统**：跨平台 Python CLI；仓库 workflow 有 Windows compatibility test，但实际部署链路仍偏 Unix/GCP 工具链 [GH:local-scan][GH:workflow-windows]。
- **Docker**：`docker_support: true` 指 generated deployment target templates 中存在 Cloud Run/GKE Dockerfiles；不是说本轮构建过镜像，也不是说 ASP CLI 本身必须用 Docker [GH:docker-template]。
- **GPU**：不需要本地 GPU；模型推理和 Vertex/Gemini 资源由外部服务或生成项目依赖决定。
- **外部依赖**：Google Cloud SDK、Terraform、uv、GCP project/IAM、Cloud Build/GitHub Actions、Vertex/Agent Engine/Cloud Run 等 [Docs:getting-started][Docs:deployment]。

## 上手体验

评分 3/5。

README 和 docs 给出 `uvx agent-starter-pack create` 的一条命令入口，也提供 pip 方式、Firebase Studio、Cloud Shell；单看 scaffold 初体验并不差 [GH:readme-templates][GH:readme-ops][Docs:getting-started]。但真实价值来自部署骨架，马上会遇到 GCP SDK、Terraform、service account roles、staging/prod/cicd project、repository connection、Cloud Build/GitHub Actions 等配置 [Docs:deployment]。

此外，maintenance-mode banner 会让新用户困惑：一边 docs 仍能指导 ASP，一边官方又说新项目应改用 agents-cli [GH:readme-maintenance][Docs:successor]。所以 usability 不给 4。

## 代码质量

评分 3/5。

正面信号：pyproject 配置 ruff/ty/codespell/pytest，CONTRIBUTING 明确 template development workflow 和 cross-combination validation，本地扫描有 108 个 test-ish files、3 个 workflows，Windows compatibility workflow 会生成 cloud_run/agent_engine 项目 [GH:manifests][GH:contributing][GH:local-scan][GH:workflow-windows]。

保守点：这是 template generator，Jinja 模板和 generated code 的质量只有在多组合生成、lint、test、deployment 后才能证明；本轮没有实际生成项目或跑 test matrix。release/docs workflows 中有 `actions/checkout@v4`、`astral-sh/setup-uv@v4`、`actions/setup-node@v4` 等 tag pin，不是全部 commit-SHA pinned；root SECURITY.md 缺失也说明治理层不算满分 [GH:local-scan][GH:workflow-release-docs]。

## 可扩展性

评分 3/5。

ASP 有 remote templates、四层模板系统、deployment target overrides、frontend types、agent templates，理论上很适合扩展 scaffold [GH:contributing]。但它现在不再新增官方模板和 deployment targets，因此扩展性更多落到用户 fork/remote template 层，而非官方主线演进 [GH:readme-maintenance]。

如果目标是长期扩展 Google Cloud agent lifecycle，应该评估 `agents-cli`；如果目标是读旧模板、迁移或 fork，一定要固定版本并写清楚未来迁移策略。

## 文档质量

评分 4/5。

文档覆盖 Quick Start、Getting Started、Installation、Development、Data Ingestion、Deployment、Observability、Templates、Remote Templates、CLI Commands、Community Showcase 等，README 也清楚列出需求、模板、deploy/eval/observability 路径 [GH:readme-templates][GH:readme-ops][Docs:getting-started][Docs:deployment][Docs:observability]。

不打 5 的原因是 successor split：ASP docs 与 agents-cli docs 并存，且用户必须先理解“我应当用旧 ASP 还是新 agents-cli”。这不是文档缺页，而是生命周期状态导致的认知负担。

## 社区与成熟度

| 维度 | 评分 | 说明 |
|------|------|------|
| 社区活跃度 | 3/5 | 6454 stars、1482 forks、20 first-page contributors，有 GoogleCloudPlatform 可见度；但贡献高度集中，community health 62%，且项目进入 maintenance mode [GH:api][GH:contributors][GH:community][GH:readme-maintenance] |
| 成熟度 | 2/5 | release 已到 v0.41.3 且有 83 个 releases，但官方宣布 no new features/templates/deployment targets；对新项目而言这是生命周期风险，不是稳定成熟信号 [GH:graphql][GH:readme-maintenance] |

成熟度评分低的原因不是“仓库无人维护”，而是“官方主线迁移”。对于旧项目维护，ASP 可能仍稳定；对于新项目采用，它已经不是未来主线。

## 安全与风险

评分 3/5。

安全面主要来自生成项目而非 scaffold CLI 本身：生成的项目可能创建 GCP resources、service accounts、CI/CD secrets、Cloud Build/GitHub Actions、Cloud Trace/BigQuery logging、RAG data pipeline，并把 agent 暴露到 Cloud Run/GKE/Agent Engine [Docs:deployment][Docs:observability]。这些都是高权限工程面，不能因为 scaffold 自动化就忽略 IAM least privilege、secret rotation、日志脱敏和环境隔离。

本轮 GitHub security advisories 查询返回空，GraphQL vulnerabilityAlerts=0；但这只是“本次检查未发现公开 advisory”，不等于模板和生成项目没有漏洞；dependency graph / vulnerability alert 的启用状态与权限范围也会影响可见性 [GH:advisories][GH:graphql]。本地扫描未发现 root `SECURITY.md`，这是安全治理减分项 [GH:local-scan]。如果继续使用 ASP，建议 pin 版本、固定 generated dependencies、审查 Terraform roles、分离 dev/staging/prod projects，并尽快迁移到官方继任工具。

## 学习价值

学习价值高于采用推荐度。ASP 值得看三件事：

1. **Template generator 的工程结构**：四层模板叠加、deployment target overrides、remote templates [GH:contributing]。
2. **Agent productionization checklist**：CI/CD、Terraform、Cloud Run/GKE/Agent Engine、observability、eval、data ingestion [GH:readme-templates][Docs:deployment][Docs:observability]。
3. **工具生命周期迁移**：ASP 到 agents-cli 的 successor 关系，是 agent tooling 从“人类运行 scaffold”转向“coding-agent-first lifecycle tooling”的现实案例 [Docs:successor]。

这正是它应该被收录的理由：不是因为现在还应该优先采用 ASP，而是因为它记录了 Google Cloud agent 工程化路线的一次重要迁移。
