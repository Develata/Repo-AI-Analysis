---
title: "Plane"
created: 2026-06-18
updated: 2026-06-18
type: repository-analysis
repo_url: "https://github.com/makeplane/plane"
category: "work-tools/project-management"
tags: ["project-management", "issue-tracker", "kanban", "roadmap", "self-hosted", "react", "django", "agpl"]
previous_repo: ""
successor: ""
primary_language: "TypeScript"
license: "AGPL-3.0"
stars: 51185
forks: 4558
last_checked: 2026-06-18
last_verified: 2026-06-18
evidence: "GitHub authenticated API + README + official docs/developer docs + GitHub advisories + shallow local scan; no local build/test/self-hosting smoke test run"
archived_reason: ""
docker_support: true
gpu_required: false
estimated_cpu: "2+ cores for documented Docker Compose baseline; higher for production teams, search/analytics/imports, and background jobs"
estimated_memory: "4GB minimum and 8GB production recommended in docs; local development CONTRIBUTING recommends 12GB RAM"
estimated_storage: "PostgreSQL/Redis/object storage/uploads/backups dominate; source checkout small relative to runtime data"
status: active
ratings:
  capability: 4
  usability: 4
  performance: 3
  code_quality: 3
  documentation: 4
  community: 4
  maturity: 3
  extensibility: 3
  security: 2
  recommendation: 3
overall_score: 3.3
sources:
  - "[GH] https://github.com/makeplane/plane"
  - "[GH:api] https://api.github.com/repos/makeplane/plane queried 2026-06-18 via gh auth; stars=51185, forks=4558, open_issues_count=908, created_at=2022-11-19, pushed_at=2026-06-17, default_branch=preview, license=AGPL-3.0, primary_language=TypeScript"
  - "[GH:issues-prs] GitHub search API queried 2026-06-18; open issues=771, open PRs=137; REST open_issues_count=908 includes PRs"
  - "[GH:releases] https://api.github.com/repos/makeplane/plane/releases?per_page=5 queried 2026-06-18; latest v1.3.1 published 2026-05-14; previous releases v1.3.0, v1.2.3, v1.2.2, v1.2.1"
  - "[GH:community] https://api.github.com/repos/makeplane/plane/community/profile queried 2026-06-18; health_percentage=100; README, license, code_of_conduct, CONTRIBUTING, SECURITY, issue templates and PR template present"
  - "[GH:advisories] https://api.github.com/repos/makeplane/plane/security-advisories?per_page=10 queried 2026-06-18; returned 10 published advisories including high SSRF GHSA-9fr2-pprw-pp9j patched 1.3.0, high cross-workspace asset authorization bypass GHSA-qw87-v5w3-6vxx affected v1.2.3 patched 1.3.1, high webhook SSRF GHSA-fpx8-73gf-7x73 patched 1.2.3, high unauthenticated workspace member information disclosure GHSA-87x4-j8vh-p5qf patched 1.2.2, and additional medium/low IDOR/PII/ORM issues"
  - "[GH:local-scan] local shallow clone /opt/data/tmp/repo_wiki_trending_20260618_round2/makeplane-plane at commit 53a323d559cb27d87f7440b2fc8514147cf7e542; git ls-files=5404, markdown/rst/adoc files=31, test/spec-ish files=59, GitHub workflows=9; inspected README.md, SECURITY.md, CONTRIBUTING.md, package.json, docker-compose.yml, docker-compose-test.yml, AGENTS.md"
  - "[Docs:self-host] https://developers.plane.so/self-hosting/overview extracted 2026-06-18; developer docs describe self-hosting for data sovereignty/control/compliance, Docker Compose/Kubernetes, instance admin/God Mode, authentication, email, external databases/storage"
  - "[Docs:docker] https://developers.plane.so/self-hosting/methods/docker-compose extracted 2026-06-18; Docker Compose docs list 2 CPU cores, 4GB RAM minimum, 8GB production recommendation, Ubuntu/Debian/CentOS/Amazon Linux/macOS/Windows WSL2, and production recommendation to use external database and storage"
  - "[Docs:product] https://docs.plane.so/ extracted 2026-06-18; product docs cover workspaces, projects, work items, cycles/modules, pages/wiki, integrations, import/export, developers/API/self-hosting"
  - "[GH:contributing] /opt/data/tmp/repo_wiki_trending_20260618_round2/makeplane-plane/CONTRIBUTING.md inspected 2026-06-18; local development requirements include Docker, Node.js 20+, Python 3.8+, Redis 6.2.7, PostgreSQL 15, and 12GB RAM recommended"
---

# Plane

> Open-source project management platform：面向 issues、cycles、modules、views、pages、analytics 与 self-hosting 的 Jira / Linear / ClickUp 风格替代品。
>
> **状态**: `active` · **总分**: 3.3/5 · **推荐度**: 3/5

## 一句话总结

Plane 值得作为自托管项目管理平台候选和工程治理样本收录，但近期安全 advisories 多、issue/PR backlog 高，生产采用推荐度只能给谨慎的 3/5。

## 总体评价

Plane 的产品定位很直接：track issues、run cycles、manage product roadmaps；功能包括 Work Items、Cycles、Modules、Views、Pages、Analytics，并提供 Cloud 与 Self-host 两条路线 [GH]。官方 docs 也覆盖 workspaces、projects、pages/wiki、integrations、import/export、developers/API/self-hosting [Docs:product]。对想摆脱 Jira/Linear/ClickUp SaaS lock-in 的团队，它是自然会进入 shortlist 的开源项目。

工程上，Plane 是现代 web product 典型组合：README 标注 React Router、Django、Node.js；local scan 看到 apps、packages、deployments、docker-compose.yml、pnpm workspace、Turbo、OxLint/OxFmt、Django/pytest test compose 等 [GH][GH:local-scan]。Self-hosting docs 提供 Docker Compose 和 Kubernetes，并明确外部 database/storage 更适合生产 [Docs:self-host][Docs:docker]。

但本条的评价必须比 stars 更冷静。GitHub API 显示 51k stars / 4558 forks，同时也有 open issues 771 / open PRs 137；Security Advisories endpoint 返回 10 个 published advisories，包含多个 high SSRF、cross-workspace asset authorization bypass、unauthenticated workspace member information disclosure、IDOR 等 [GH:api][GH:issues-prs][GH:advisories]。这说明它很活跃、很受关注，也说明权限/多租户/API/导入链接等攻击面仍在快速修补。

## 推荐度：3/5

对目标用户——愿意自托管、需要 Jira/Linear-style issue/cycle/roadmap 管理、能承担升级和安全运维的小团队——推荐度是 3/5。

给 3 而不是 4：Plane 功能面和社区很强，但 open issue/PR backlog 高，安全 advisories 数量和严重度较重；default branch 是 `preview`，项目仍快速演进 [GH:api][GH:issues-prs][GH:advisories]。它适合试点、评估和学习自托管 SaaS 架构；生产核心项目管理系统采用前，需要版本固定、升级流程、备份、权限测试和外网暴露面审查。

如果只把它作为本地/小团队 kanban + issue tracker 试用，可以积极；若作为组织级生产治理平台，则要谨慎。

## 优势

1. **功能定位完整**：Work Items、Cycles、Modules、Views、Pages、Analytics 覆盖项目管理核心路径 [GH][Docs:product]。
2. **自托管主线清楚**：官方 developer docs 支持 Docker Compose、Kubernetes，并讨论 instance admin/God Mode、authentication、email、external services [Docs:self-host]。
3. **社区可见度很高**：51k stars、4558 forks、release 活跃，community profile 100% [GH:api][GH:releases][GH:community]。
4. **现代 monorepo 工程栈**：React/Django/Node、pnpm workspace、Turbo、OxLint/OxFmt、Docker Compose、pytest test stack 都是可研究的 SaaS 工程材料 [GH][GH:local-scan]。
5. **AGPL-3.0 明确保护开源网络服务边界**：对希望避免闭源 SaaS 吸收开源成果的人，这是正面信号。

## 劣势

1. **安全历史压力大**：10 个 GHSA，且包含 high SSRF、跨 workspace asset authorization bypass、信息泄露、IDOR 等，直接关联多租户项目管理平台核心风险 [GH:advisories]。
2. **backlog 很高**：open issues 771、open PRs 137，说明维护面宽、产品复杂度高 [GH:issues-prs]。
3. **自托管运维不轻**：需要 Docker、PostgreSQL/Redis、对象存储/附件、邮件、认证、备份、升级和日志监控 [Docs:self-host][Docs:docker]。
4. **测试扫描信号不算强**：local scan 5404 files 但 test/spec-ish 只有 59；这只是粗略文件名扫描，不等于真实覆盖率低，但足以提醒不要高估测试证据 [GH:local-scan]。
5. **AGPL-3.0 对商业集成有合规要求**：网络服务修改和分发边界需要法律/合规评估。

---

## 适合什么场景

- 小团队或个人想试用 open-source Jira/Linear-style project management。
- 有自托管能力，希望掌控项目数据、备份、更新和集成。
- 需要 work items、cycles、modules、views、pages/wiki、analytics 的统一平台。
- 研究现代 SaaS monorepo、React + Django + pnpm workspace + Docker deployment。
- 作为 Develata 工程治理/Kanban workflow 的候选参考，而非立刻替换所有现有流程。

## 不适合什么场景

- 组织级生产系统但没有专人处理升级、安全、备份和权限审计。
- 对近期 high advisories 或多租户权限历史问题无法接受的场景。
- 只需要极轻量个人 TODO / kanban；Plane 的部署和功能面可能过重。
- 闭源商业服务想深度改造但不准备处理 AGPL-3.0 合规。
- 需要高度稳定、低变更、低维护成本的企业项目管理平台。

## 与类似项目对比

| 项目 | 定位 | 相对本项目 |
|------|------|-----------|
| Jira | 企业级 issue/project management | Jira 成熟和生态更强但重且商业闭源；Plane 更轻、更开源、自托管友好 |
| Linear | 高体验 issue tracking / product workflow | Linear UX 和 hosted polish 更强；Plane 提供自托管、AGPL 和数据控制 |
| OpenProject | 开源项目管理 / portfolio / Gantt | OpenProject 更传统企业项目管理；Plane 更接近现代 product team issue/cycle/module 工作流 |
| Taiga | 开源 agile project management | Taiga 较成熟但产品路线不同；Plane 更强调 Jira/Linear-style 现代界面与 pages/analytics |

上述对比是定位级比较，未对竞品按同一 10 维度框架深审。

---

## 它能做什么

capability 评分 4/5。

Plane 提供：

- work items / issues 创建、富文本、附件、子属性、关联引用 [GH]；
- cycles、modules、views、roadmaps/project planning [GH][Docs:product]；
- pages/wiki、analytics、integrations、import/export [GH][Docs:product]；
- Cloud 与 self-hosted deployment，Docker Compose / Kubernetes 路线 [GH][Docs:self-host][Docs:docker]；
- instance admin/God Mode、authentication、email、external database/storage 等治理入口 [Docs:self-host]。

不给 5：本条未实测权限模型、导入迁移、API、性能、移动端、企业权限、通知和大型团队使用体验；且安全 advisories 显示部分能力面曾有严重边界漏洞。

## 运行环境与资源占用

| 场景 | CPU | 内存 | 存储 | 说明 |
|------|-----|------|------|------|
| Docker Compose baseline | 2 cores | 4GB minimum / 8GB production recommended | PostgreSQL/Redis/storage | 官方 Docker docs 给出的基础要求 [Docs:docker] |
| 本地开发 | 中等到高 | 12GB recommended | node/pnpm/Docker/cache | CONTRIBUTING 对开发环境更重，尤其 Docker build/start 与依赖安装 [GH:contributing] |
| 生产团队 | 中等到高 | 中等到高 | 高 | 附件、数据库、备份、日志、外部 storage 和并发用户决定容量 |

- **运行时**：React Router / Node frontend packages，Django/Python backend，PostgreSQL、Redis、Docker 生态 [GH][GH:contributing]。
- **操作系统**：Docker docs 列出 Ubuntu、Debian、CentOS、Amazon Linux 2/2023、macOS、Windows WSL2 [Docs:docker]。
- **Docker**：官方 Docker Compose self-hosting 路线，仓库含 docker-compose.yml / docker-compose-test.yml [Docs:docker][GH:local-scan]。
- **GPU**：不需要。
- **外部依赖**：PostgreSQL、Redis、object/cloud storage、SMTP、SSO/OAuth/LDAP、反向代理/TLS、备份系统。

performance 评分 3/5。官方最低资源不高，但真实项目管理平台会被附件、搜索/analytics、background jobs、数据库和多人并发拖动；本条没有压测。

## 上手体验

评分 4/5。

README 对 Cloud 和 Self-host 的入口很直观；Docker Compose docs 给出最低资源、OS、安装步骤、配置变量和生产外部数据库/storage 建议 [GH][Docs:docker]。对小团队试用，Plane Cloud 是最快路径；对自托管，官方部署文档较完整。

扣分点：self-hosting 文档里商业版/社区版路径并存，部署脚本和环境变量需要仔细区分；生产稳定运行远不止 `docker compose up`。

## 代码质量

评分 3/5。

正面：monorepo 结构清楚，apps/packages/deployments/docs 分层；AGENTS.md 记录 pnpm build/check/lint/type/test conventions；CONTRIBUTING 给出 Docker、Node、Python、Redis、PostgreSQL 和内存要求 [GH:local-scan][GH:contributing]。community profile 100% 也说明治理文件齐备 [GH:community]。

保守点：5404 files 但粗略 test/spec-ish 只有 59；安全 advisories 数量较多，说明权限、SSRF、IDOR 等关键边界曾出现多次缺陷 [GH:local-scan][GH:advisories]。本条未运行 `pnpm check`、pytest 或 Docker test stack。

## 可扩展性

评分 3/5。

Plane 有 integrations、API/self-host developer docs、import/export，以及 GitHub/GitLab/Slack/Sentry 等集成入口 [Docs:product]。对普通项目管理 workflow，扩展能力足够。

不给 4：本条没有验证 API 稳定性、插件系统深度或自定义 workflow 的边界；很多定制会落到 fork、部署配置或商业/企业功能。AGPL 与商业版边界也需要具体评估。

## 文档质量

评分 4/5。

产品 docs 和 developer docs 分开，覆盖 workspaces、projects、pages/wiki、integrations、import/export、self-hosting、Docker/Kubernetes、authentication、email、database/storage 等 [Docs:product][Docs:self-host][Docs:docker]。README 也清楚列出功能、安装和社区入口 [GH]。

不足：Docker Compose 页面在抽取内容里出现重复命令片段，商业版/社区版说明容易让首次部署者混淆；安全升级 runbook 仍需生产方自己落实。

## 社区与成熟度

| 维度 | 评分 | 说明 |
|------|------|------|
| 社区活跃度 | 4/5 | 51k stars、4558 forks、open issues 771 / open PRs 137、community health 100%，讨论区和论坛入口存在 [GH:api][GH:issues-prs][GH:community] |
| 成熟度 | 3/5 | 2022 建仓，已到 v1.3.1 且 release 活跃；但 backlog 高、安全 advisories 多、default branch 为 preview，仍处于快速演进产品期 [GH:api][GH:releases][GH:advisories] |

## 安全与风险

评分 2/5。

Plane 的安全评分必须低。GitHub Security Advisories 本次返回 10 个 published advisories，涉及 high SSRF、cross-workspace asset authorization bypass、webhook SSRF、unauthenticated workspace member information disclosure，以及多个 IDOR/PII/ORM 相关问题 [GH:advisories]。这些不是边缘依赖告警，而是项目管理平台核心攻击面：workspace 隔离、资产权限、外部链接/webhook、成员信息、bulk update 和 analytics 参数。

这不等于最新版一定有未修漏洞；多个 advisory 记录了 1.2.2/1.2.3/1.3.0/1.3.1 等 patched versions。但对于生产自托管，安全实践必须包括：固定最新 patched release、快速升级、限制 webhook/外部 URL、审查 workspace 权限、备份、日志审计、SSO/OAuth/SMTP 配置、数据库和 object storage 隔离。若团队不能维持这些，Plane 不宜作为核心生产系统。

## 学习价值

Plane 的学习价值在于它把“开源 SaaS 替代品”的全部矛盾摆在台面上：产品功能增长、社区热度、AGPL、自托管、商业版边界、权限安全、issue backlog、部署复杂度。对 Develata 的工程治理兴趣，它可作为 Kanban/project-management 候选，也可作为“为什么成熟产品不等于低风险”的反例教材。