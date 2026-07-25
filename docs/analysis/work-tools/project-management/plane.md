---
title: "Plane"
created: 2026-06-18
updated: 2026-07-25
type: repository-analysis
repo_url: "https://github.com/makeplane/plane"
category: "work-tools/project-management"
tags: ["project-management", "issue-tracker", "kanban", "roadmap", "self-hosted", "react", "django", "agpl"]
previous_repo: ""
successor: ""
primary_language: "TypeScript"
license: "AGPL-3.0"
stars: 54989
forks: 5098
last_checked: 2026-07-25
last_verified: 2026-07-25
evidence: "GitHub authenticated API + current README/releases/official docs + full repository-advisory query + shallow local scan and security-commit review; no local build/test/self-hosting smoke test run"
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
  - "[GH:api] https://api.github.com/repos/makeplane/plane queried 2026-07-25 via gh auth; stars=54989, forks=5098, subscribers=172, REST open_issues_count=1035, created_at=2022-11-19, pushed_at=2026-07-24T12:17:49Z, default_branch=preview, license=AGPL-3.0, primary_language=TypeScript, archived=false, disabled=false"
  - "[GH:issues-prs] GitHub search API queried 2026-07-25; open issues=830, open PRs=205; REST open_issues_count=1035 equals the separate issue+PR totals"
  - "[GH:releases] https://api.github.com/repos/makeplane/plane/releases queried 2026-07-25; latest GitHub release remains v1.3.1 published 2026-05-14; previous sampled releases v1.3.0, v1.2.3, v1.2.2, v1.2.1"
  - "[GH:community] https://api.github.com/repos/makeplane/plane/community/profile queried 2026-07-25; health_percentage=100; README, license, code_of_conduct, CONTRIBUTING and PR template present; issue template absent in profile"
  - "[GH:advisories] https://api.github.com/repos/makeplane/plane/security-advisories?per_page=100 queried 2026-07-25; returned 16 published advisories, not the prior per_page=10 sample. IDs/classes: GHSA-9fr2-pprw-pp9j high SSRF; GHSA-qw87-v5w3-6vxx high cross-workspace asset authorization bypass; GHSA-93x3-ghh7-72j3 ORM field injection; GHSA-4q54-h4x9-m329 IDOR; GHSA-fpx8-73gf-7x73 high webhook SSRF; GHSA-rfj3-8c85-g46j asset IDOR; GHSA-87x4-j8vh-p5qf high unauthenticated member disclosure; GHSA-jcc6-f9v6-f7jw high SSRF; GHSA-7qx6-6739-c7qr guest member disclosure; GHSA-8rvg-7w43-p2w2 PII exposure; plus older GHSA-6fj7-xgpg-mj6f and GHSA-rwjc-xhh3-m9m9 XSS, GHSA-cjh4-q763-cc48 insecure permissions, GHSA-rcg8-g69v-x23j SVG XSS, and critical SSRF GHSA-39gx-38xf-c348 / GHSA-j77v-w36v-63v6. API metadata records patched versions for all rows"
  - "[GH:security-commits] Default preview branch commits sampled 2026-07-25 include July authz/input hardening after v1.3.1: #9380 scopes page-version reads, #9375 scopes member permission reads, #9372 scopes workspace assets, #9347 blocks ORM grouping injection, #9312 blocks stored XSS via SVG, #9367 enforces member activation authz, #9349 scopes cycle reassignment, #9348 sanitizes order_by, #9333 validates project invitations, #9313 normalizes links, #9308 validates invite tokens, #9289 rejects unverified OAuth emails"
  - "[GH:local-scan] local shallow clone /opt/data/tmp/github-repo-wiki-freshness-audit/repos/plane at commit a8e53b6ac7b87bd8e3e931d21188f7679c7ab6c4 inspected 2026-07-25; git ls-files=5250, markdown/rst/adoc files=31, test/spec/bench-ish paths=84, GitHub workflows=9; inspected README.md, SECURITY.md, CONTRIBUTING.md and deployment/project manifests"
  - "[Docs:self-host] https://developers.plane.so/self-hosting/overview fetched 2026-07-25; developer docs describe data sovereignty/control/compliance and deployment from Docker to Kubernetes with instance configuration/governance"
  - "[Docs:docker] https://developers.plane.so/self-hosting/methods/docker-compose fetched 2026-07-25; commercial-edition Docker prerequisites list 2 CPU cores, 4GB RAM and 8GB recommended for production, while Community Edition has a separate setup flow; production guidance recommends external database and storage"
  - "[Docs:product] https://docs.plane.so/ fetched 2026-07-25; product docs cover workspaces, projects/work items/cycles/modules, pages/wiki, integrations, import/export and developer/API/MCP/custom-integration paths"
  - "[GH:contributing] CONTRIBUTING.md at commit a8e53b6a inspected 2026-07-25; local development requires Docker, Node.js 20+, Python 3.8+, PostgreSQL 14, Redis 6.2.7 and recommends at least 12GB RAM; contribution rules say feature/bug changes need specs"
  - "[GH:security] SECURITY.md at commit a8e53b6a inspected 2026-07-25; documents security@plane.so reporting, prohibited testing, response within three business days and coordinated disclosure expectations"
---

# Plane

> Open-source project management platform：面向 issues、cycles、modules、views、pages、analytics 与 self-hosting 的 Jira / Linear / ClickUp 风格替代品。
>
> **状态**: `active` · **总分**: 3.3/5 · **推荐度**: 3/5

## 一句话总结

Plane 值得作为自托管项目管理平台候选和工程治理样本收录，但完整查询返回 16 个 published GHSA，preview branch 又在 v1.3.1 后加入密集 security hardening；生产采用仍只能给谨慎的 3/5。

## 总体评价

Plane 的产品定位很直接：track issues、run cycles、manage product roadmaps；功能包括 Work Items、Cycles、Modules、Views、Pages、Analytics，并提供 Cloud 与 Self-host 两条路线 [GH]。官方 docs 也覆盖 workspaces、projects、pages/wiki、integrations、import/export、developers/API/self-hosting [Docs:product]。对想摆脱 Jira/Linear/ClickUp SaaS lock-in 的团队，它是自然会进入 shortlist 的开源项目。

工程上，Plane 是现代 web product 典型组合：README 标注 React Router、Django、Node.js；local scan 看到 apps、packages、deployments、docker-compose.yml、pnpm workspace、Turbo、OxLint/OxFmt、Django/pytest test compose 等 [GH][GH:local-scan]。Self-hosting docs 提供 Docker Compose 和 Kubernetes，并明确外部 database/storage 更适合生产 [Docs:self-host][Docs:docker]。

但本条的评价必须比 stars 更冷静。当前快照显示 54k stars / 5098 forks，同时有 open issues 830 / open PRs 205；完整的 `per_page=100` advisory 查询返回 16 个 published advisories，而不是先前 10-row sample [GH:api][GH:issues-prs][GH:advisories]。preview branch 又在 7 月加入多项 cross-project/workspace authz、invite-token、SVG XSS、ORM/order parameter 与 OAuth email trust 修复 [GH:security-commits]。这是积极 remediation，也说明权限/多租户/API/input boundary 仍是活跃风险面。

## 推荐度：3/5

对目标用户——愿意自托管、需要 Jira/Linear-style issue/cycle/roadmap 管理、能承担升级和安全运维的小团队——推荐度是 3/5。

给 3 而不是 4：Plane 功能面和社区很强，但 backlog 高、advisory history 较重，default branch 还是 `preview` [GH:api][GH:issues-prs][GH:advisories]。更关键的是，latest GitHub release 仍是 5 月的 v1.3.1，而本轮核验的 preview branch 已包含多项 7 月安全修复；operators 必须确认具体 image/channel 包含所需 fixes，不能把“latest release”直接等同于“全部当前 hardening” [GH:releases][GH:security-commits]。

如果只把它作为本地/小团队 kanban + issue tracker 试用，可以积极；若作为组织级生产治理平台，则要谨慎。

## 优势

1. **功能定位完整**：Work Items、Cycles、Modules、Views、Pages、Analytics 覆盖项目管理核心路径 [GH][Docs:product]。
2. **自托管主线清楚**：官方 developer docs 支持 Docker Compose、Kubernetes，并讨论 instance admin/God Mode、authentication、email、external services [Docs:self-host]。
3. **社区可见度很高**：54k stars、5098 forks、开发活跃，community profile 100% [GH:api][GH:community]。
4. **现代 monorepo 工程栈**：React/Django/Node、pnpm workspace、Turbo、OxLint/OxFmt、Docker Compose、pytest test stack 都是可研究的 SaaS 工程材料 [GH][GH:local-scan]。
5. **AGPL-3.0 的网络 copyleft 明确**：修改后的程序通过网络向用户提供服务时，可能触发向这些用户提供 corresponding source 的义务；对重视 reciprocal openness 的团队，这是正面信号。

## 劣势

1. **安全历史压力大**：完整查询返回 16 个 published GHSA，包含 critical/high SSRF、跨 workspace authorization bypass、信息泄露、XSS 和 IDOR 等 [GH:advisories]。
2. **backlog 很高**：open issues 830、open PRs 205，说明维护面宽、产品复杂度高 [GH:issues-prs]。
3. **自托管运维不轻**：需要 Docker、PostgreSQL/Redis、对象存储/附件、邮件、认证、备份、升级和日志监控 [Docs:self-host][Docs:docker]。
4. **release 与 hardening branch 之间有核验成本**：v1.3.1 后的 preview branch 已出现密集安全修复，本轮未确认这些修复对应的下一稳定 image/version [GH:releases][GH:security-commits]。
5. **AGPL-3.0 对商业集成有合规要求**：修改程序并通过网络向用户提供服务时，可能触发 corresponding-source offer；具体集成方式应做法律/合规评估。

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
| 本地开发 | 中等到高 | 12GB recommended | node/pnpm/Docker/cache | CONTRIBUTING 当前列出 Node 20+、Python 3.8+、PostgreSQL 14、Redis 6.2.7，尤其 Docker build/start 与依赖安装较重 [GH:contributing] |
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

正面：monorepo 结构清楚，apps/packages/deployments/docs 分层；current local scan 有 5250 tracked files、84 test/spec/bench-ish paths 和 9 workflows；CONTRIBUTING 给出 Docker、Node、Python、Redis、PostgreSQL 和内存要求 [GH:local-scan][GH:contributing]。community profile 100% 也是治理正信号 [GH:community]。

保守点：filename scan 不是 coverage measurement，本条也未运行 `pnpm check`、pytest 或 Docker test stack。更重要的是，16 个 published advisories 与 7 月 authz/input-hardening series 显示 permissions、SSRF、IDOR/XSS 和 query-parameter boundary 曾反复出现缺陷 [GH:advisories][GH:security-commits]。

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
| 社区活跃度 | 4/5 | 54k stars、5098 forks、open issues 830 / open PRs 205、community health 100%，讨论区和论坛入口存在 [GH:api][GH:issues-prs][GH:community] |
| 成熟度 | 3/5 | 2022 建仓，latest GitHub release 为 v1.3.1；但 backlog 高、default branch 为 preview，且 release 后仍有密集 security hardening，产品仍快速演进 [GH:api][GH:releases][GH:security-commits] |

## 安全与风险

评分 2/5。

Plane 的安全评分必须低。完整 GitHub Security Advisories 查询返回 16 个 published advisories，包含历史 critical/high SSRF、cross-workspace asset authorization bypass、webhook SSRF、unauthenticated member disclosure、XSS，以及多个 IDOR/PII/ORM 问题 [GH:advisories]。这些不是边缘依赖告警，而是项目管理平台核心攻击面：workspace isolation、asset permissions、external links/webhooks、member data、uploads 和 query parameters。

这不等于最新版一定有未修漏洞；API 中各 advisory 记录了 patched-version metadata，历史数量也不能直接等同于当前 exposure。另一方面，preview branch 在 v1.3.1 后出现一组新的 authz/input hardening commits，而本轮未见更晚 GitHub release [GH:releases][GH:security-commits]。因此生产自托管不能只写“follow latest”：必须核验具体 image/tag/commit 是否包含所需修复，并维持快速升级、workspace 权限测试、webhook/URL 限制、备份、日志审计、SSO/OAuth/SMTP 与 database/object-storage isolation。

## 学习价值

Plane 的学习价值在于它把“开源 SaaS 替代品”的全部矛盾摆在台面上：产品功能增长、社区热度、AGPL、自托管、商业版边界、权限安全、issue backlog、部署复杂度。对 Develata 的工程治理兴趣，它可作为 Kanban/project-management 候选，也可作为“为什么成熟产品不等于低风险”的反例教材。