---


title: "cal.diy"
created: 2026-05-20
updated: 2026-05-21
type: repository-analysis
repo_url: "https://github.com/calcom/cal.diy"
category: "ai-programs/agent-infrastructure"
tags: ["scheduling", "calendar", "self-hosted", "agent-infrastructure", "nextjs", "typescript", "postgresql"]
previous_repo: ""
successor: ""
primary_language: "TypeScript"
license: "MIT"
stars: 43685
forks: 13483
last_checked: 2026-07-14
last_verified: 2026-05-20
evidence: "GitHub API + official documentation + repository local scan; not deployed in production by Develata"
archived_reason: ""
docker_support: true
gpu_required: false
estimated_cpu: "2+ cores for a small self-hosted instance; production-like use depends on Next.js/API workload, workers, integrations, and database size"
estimated_memory: "2-4GB practical minimum for app + PostgreSQL + build/runtime services; more for production-like use"
estimated_storage: "several GB for source/build artifacts, PostgreSQL data, logs, and uploads; grows with bookings/integrations"
status: active
ratings:
  capability: 4
  usability: 3
  performance: 3
  code_quality: 4
  documentation: 4
  community: 5
  maturity: 3
  extensibility: 4
  security: 2
  recommendation: 3
overall_score: 3.5
sources:
  - "[GH] https://github.com/calcom/cal.diy"
  - "[GH:api] https://api.github.com/repos/calcom/cal.diy queried 2026-05-20; stars=43685, forks=13483, open_issues_count=1316, created_at=2021-03-22, pushed_at=2026-05-14, license=MIT"
  - "[GH:languages] https://api.github.com/repos/calcom/cal.diy/languages queried 2026-05-20; TypeScript dominant"
  - "[GH:releases] https://api.github.com/repos/calcom/cal.diy/releases?per_page=1 queried 2026-05-20; latest=v6.2.0 published 2026-03-01"
  - "[GH:community] https://api.github.com/repos/calcom/cal.diy/community/profile queried 2026-05-20; health_percentage=100; README, CONTRIBUTING, CODE_OF_CONDUCT, PR template, license present"
  - "[GH:advisories] https://api.github.com/repos/calcom/cal.diy/security-advisories?per_page=5 queried 2026-05-20; includes GHSA-7hg4-x4pr-3hrg / CVE-2026-23478 critical auth bypass, patched >=6.0.7"
  - "[GH:issues] https://api.github.com/search/issues?q=repo%3Acalcom%2Fcal.diy%20type%3Aissue%20state%3Aopen queried 2026-05-20; total_count=1043"
  - "[GH:prs] https://api.github.com/search/issues?q=repo%3Acalcom%2Fcal.diy%20type%3Apr%20state%3Aopen queried 2026-05-20; total_count=273"
  - "[GH:contributors] https://api.github.com/repos/calcom/cal.diy/contributors?per_page=1&anon=false queried 2026-05-20; pagination last page 438"
  - "[GH:local-scan] local clone /tmp/repo-wiki-analysis/cal.diy at commit 180ede28f0bddf2738933a6e60a8e80f6116d7da; git ls-files=7686, TypeScript/TSX files=5018, test/spec-ish files=645, docs/markdown-ish files=382, GitHub workflows=50; checked package.json, Dockerfile, docker-compose.yml, SECURITY.md, AGENTS.md"
  - "[Docs] https://cal.diy/"
  - "[Docs:intro] https://cal.diy/ queried 2026-05-20; introduction / self-hosting warning / non-production recommendation"
  - "[Docs:feature-diff] https://cal.diy/ queried 2026-05-20; Cal.diy vs Cal.com feature comparison section"
  - "[Docs:installation] https://cal.diy/installation"
  - "[Docs:docker] https://cal.diy/docker"
---

# cal.diy

> Cal.com 的完全开源 community edition：给个人与 self-hosters 的 scheduling / booking infrastructure，可作为 agent 预约、日程与可用性协调的 calendar primitive。
>
> **状态**: `active` · **总分**: 3.5/5 · **推荐度**: 3/5
> **核验版本**: GitHub commit `180ede28f0bddf2738933a6e60a8e80f6116d7da`；GitHub API / Docs 快照 2026-05-20

## 一句话总结

cal.diy 适合需要自托管预约、可用性与 calendar integration 的个人或小团队；若把 agent autonomous scheduling 视为基础能力，它是一个强但偏重、且明确不推荐生产商用的 scheduling infrastructure 选项。

## 总体评价

cal.diy 的核心价值不是“又一个日历 UI”，而是把 event types、availability schedules、booking links、calendar/video/payment/CRM/automation integrations、embed 与 API v2 组合成可自托管的 scheduling substrate [Docs:feature-diff]。在 agent infrastructure 语境下，它可以承担“何时能做、如何预约、如何触发后续流程”的时间协调层：agent 不只要会调用工具，也要能和人、团队、外部日历系统协调时间。

但它有两个必须正视的边界。第一，cal.diy 是本目录中的 **boundary case**：它不是 agent-native middleware，而是 agent-adjacent external primitive；归入 `ai-programs/agent-infrastructure` 的理由是“agent autonomous scheduling 所需的 calendar/scheduling substrate”，不是因为它自身提供 MCP/tool schema。第二，官方文档明确说 Cal.diy 是 Cal.com 的 open source community edition，适合自托管个人用途，并“strictly recommended for personal, non-production use”；商业与 enterprise-ready scheduling infrastructure 应使用 Cal.com [Docs:intro]。第三，它是大型 Next.js / PostgreSQL / Prisma / tRPC / Turborepo 应用，而不是轻量 daemon；local scan 显示 7686 个 tracked files、50 个 GitHub workflows、645 个 test/spec-ish 文件，工程规模接近完整 SaaS，而不是单机小工具 [GH:local-scan]。

结论：如果目标是研究“agent 需要怎样的 scheduling primitive”，cal.diy 很值得进入 agent infrastructure 观察清单；如果目标是马上给关键业务上生产预约系统，它当前更适合 personal/self-host trial，而不是无条件 adoption。

## 推荐度：3/5

对目标用户——熟悉 self-hosting、愿意维护数据库/密钥/邮件/日历 OAuth、需要开源 scheduling stack 的个人或小团队——推荐度是 3/5。

给 3 而不是 4 的原因：能力广度和社区动能很强，但官方 production disclaimer、安全历史与运行复杂度把推荐度压住了。GitHub Security Advisories 查询显示 2026-01 发布过 Critical 级认证绕过漏洞 GHSA-7hg4-x4pr-3hrg / CVE-2026-23478，虽已标注 patched >= 6.0.7，但这说明它作为 auth-heavy scheduling app 的安全后果很高 [GH:advisories]。再加上 1043 open issues、273 open PRs 的 backlog，采用者必须有升级、备份、配置审计和版本 pinning 能力 [GH:issues][GH:prs]。

## 优势

1. **调度能力完整**：事件类型、可用性、日期覆盖、buffer、calendar integrations、video conferencing、payments、webhooks、CRM、AI agent integrations、embed 与 API v2 形成完整预约基础设施 [Docs:feature-diff]。
2. **开源边界清楚**：cal.diy 将 Cal.com 的 commercial / enterprise code 移除，MIT license，无 license key requirement，适合研究和自托管 [GH][Docs:intro]。
3. **工程化基础强**：TypeScript monorepo、Prisma、Next.js、tRPC、Docker / docker-compose、50 个 workflows、SECURITY / CONTRIBUTING / CODE_OF_CONDUCT / AGENTS.md 等治理文件齐备 [GH:local-scan][GH:community]。
4. **社区与可见度极高**：GitHub API 快照显示 43.7k stars、13.5k forks、约 438 contributor pages，属于 scheduling 开源生态中的高可见项目 [GH:api][GH:contributors]。
5. **适合 agent 时间协调层实验**：对 agent 来说，calendar availability、booking link、webhook、API 与 automation integration 都是可组合的 scheduling primitives [Docs:feature-diff]。

## 劣势

1. **官方不推荐生产商用**：文档明确写明 personal, non-production use；商业和企业场景应使用 Cal.com [Docs:intro]。
2. **部署与运维复杂**：需要 Node/Yarn、PostgreSQL、环境变量、OAuth/第三方 integration credentials、数据库迁移、升级流程与安全配置 [Docs:installation][Docs:docker]。
3. **安全后果重**：预约系统天然接触用户身份、日历、会议链接、支付、CRM 与组织信息；公开 advisory 中已有 Critical 认证绕过历史 [GH:advisories]。
4. **issue/PR backlog 大**：1043 open issues、273 open PRs，说明维护面巨大；高社区动能与高 backlog 并存 [GH:issues][GH:prs]。
5. **agent-native 程度有限**：它可以被 agent 通过 API/webhook 使用，但不是为 agent discoverability、MCP、tool schema 或 autonomous workflow 原生设计的项目。

---

## 适合什么场景

- 个人或小团队自托管预约页面、booking links 与 availability management。
- 研究 scheduling infrastructure：event type、availability、calendar sync、webhook、embed/API 如何组成时间协调系统。
- 给 agent workflow 增加“约时间 / 查可用性 / 触发预约后续动作”的外部 calendar primitive。
- 对开源 scheduling SaaS 架构感兴趣，想学习 Next.js + Prisma + tRPC + Turborepo 大型应用组织方式。
- 能接受自己负责安全、备份、升级、OAuth 配置和数据库维护的 self-hosters。

## 不适合什么场景

- 企业级生产预约系统、强 SLA、合规和复杂组织权限场景；官方建议使用 Cal.com 而不是 Cal.diy [Docs:intro]。
- 不熟悉数据库迁移、邮件/OAuth、密钥管理、反向代理与容器部署的用户。
- 需要轻量 calendar daemon 或 agent-native MCP server 的场景。
- 对安全历史零容忍、无法快速升级到 patched version 的组织。
- 只需要非常简单的个人预约链接，不想维护完整 Web app 与数据库。

## 与类似项目对比

| 项目 | 定位 | 相对本项目 |
|------|------|-----------|
| CLI-Anything | agent-facing CLI/tool harness registry | CLI-Anything 解决 agent 如何操作软件；cal.diy 解决 agent/人如何协调时间与预约 |
| CodeGraph | 本地代码知识图谱 / context infrastructure | CodeGraph 优化 agent 对代码库的理解；cal.diy 提供 calendar / scheduling primitive |
| RTK | agent shell 输出 token 压缩代理 | RTK 是 token/cost 中间层；cal.diy 是外部业务流程的 scheduling substrate |
| oh-my-openagent | coding-agent orchestration harness | oh-my-openagent 组织多 agent coding workflow；cal.diy 更像 agent 可调用的时间协调后端 |

上述项目跨 `ai-programs/agent-infrastructure` 与相邻 AI harness categories 做定位级对比，未按同一 10 维度框架深审。cal.diy 是该目录中的边界型项目：它不是 agent-specific，但可作为 agent scheduling infrastructure 使用；若后续 wiki 新增 `scheduling/` 或 `self-hosted-saas/` 目录，可考虑迁移。

---

## 它能做什么

capability 评分 4/5。

它覆盖 scheduling 平台的大部分主场景：

- event types、recurring/seated/paid events、private links、booking management [Docs:feature-diff]；
- availability schedules、date overrides、buffer times、minimum notice、travel schedules、out-of-office [Docs:feature-diff]；
- Google / Outlook / Apple / CalDAV / Lark / Feishu / Zoho / Exchange / ICS 等 calendar integrations [Docs:feature-diff]；
- video conferencing、webhooks、Zapier、n8n、Make、Pipedream、CRM、messaging、analytics、AI agent integrations [Docs:feature-diff]；
- embed、API v2、API keys、OAuth clients [Docs:feature-diff]。

不给 5 的原因：它有意去掉了 teams、organizations、workflows automations、routing forms、SSO/SAML、SCIM、insights、delegation、workspace platform 等 enterprise/commercial capabilities [Docs:feature-diff]。这是清晰边界，不是实现遗漏；但能力广度相对 Cal.com 完整平台仍低一档。

## 运行环境与资源占用

| 场景 | CPU | 内存 | 存储 | 说明 |
|------|-----|------|------|------|
| 最小 | 2 cores 级别更稳妥 | 2GB 级别起步 | 数 GB | app + PostgreSQL + build/runtime artifacts；开发环境可用 docker-compose 辅助 [Docs:installation][Docs:docker] |
| 推荐 | 2-4+ cores | 4GB+ | 视数据库/日志增长 | production-like self-host 还要考虑邮件、OAuth、worker、backups、reverse proxy、TLS 与 observability |

- **运行时**：Next.js / TypeScript monorepo，PostgreSQL + Prisma；package scripts 使用 Yarn/Turbo [GH:local-scan]。
- **操作系统**：Linux server / container 环境最自然；Windows 开发需注意 symlink 等文档提示 [GH]。
- **Docker**：有 Dockerfile 与 docker-compose.yml [GH:local-scan]。
- **GPU**：不需要。
- **外部依赖**：PostgreSQL、OAuth providers、邮件服务、calendar/video/payment/CRM integrations、域名/TLS/反代等。

performance 评分 3/5。它不是轻量 agent middleware，而是完整 Web scheduling platform；资源消耗对其能力合理，但不能和单二进制或本地 SQLite 工具相比。

## 上手体验

评分 3/5。

文档入口清楚，有 introduction、installation、database migrations、upgrading、Docker、apps 与多种 deployment provider 指南 [Docs:intro][Docs:installation][Docs:docker]。对熟悉 self-hosting 的用户，上手并不糟。

但官方也明确提醒：self-hosting requires advanced knowledge of server administration, database management, and securing sensitive data [Docs:intro]。这句话本身就是 usability 边界。实际配置会涉及 `.env`、NEXTAUTH_SECRET、CALENDSO_ENCRYPTION_KEY、PostgreSQL、OAuth/integration credentials、数据库迁移与升级；对普通非运维用户不是“30 分钟无脑获得价值”。

## 代码质量

评分 4/5。

local scan 显示 7686 个 tracked files、5018 个 TS/TSX 文件、645 个 test/spec-ish 文件、50 个 GitHub workflows；根目录存在 AGENTS.md，对 Prisma query、type import、error handling、PR size、type-check、Biome、generated files、security-sensitive credential fields 等有明确工程约束 [GH:local-scan]。SECURITY、CONTRIBUTING、CODE_OF_CONDUCT、PR template 也齐备 [GH:community]。

不给 5 的原因：代码规模极大，monorepo 认知成本高；open issue 数量很大；且本次未全量运行测试/构建，只做 repository scan 与文档/API核验。代码质量是强工程项目的 4，而不是“低复杂度、可轻松维护”的 5。

## 可扩展性

评分 4/5。

cal.diy 的扩展面主要来自 API v2、webhooks、embed、OAuth clients、app-store/integrations 与 monorepo package architecture [Docs:feature-diff][GH:local-scan]。对于 scheduling 业务，它可嵌入、可自动化、可接第三方系统。

不给 5：作为 Cal.diy community edition，它明确去掉 workflows、routing forms、organizations、workspace platform 等高级商业扩展能力 [Docs:feature-diff]；同时它不是 agent-native plugin/MCP framework，agent 集成需要通过 REST/API/webhook 间接完成。

## 文档质量

评分 4/5。

官方文档结构清楚：getting started、installation、database migrations、upgrading、Docker、apps、deployments、Cal.diy vs Cal.com feature differences [Docs:intro][Docs:installation][Docs:docker][Docs:feature-diff]。README 也把 open source community edition、非生产用途、与 Cal.com 的差异讲得很直白 [GH]。

扣分点：部分 README 抽取内容显示命令片段可能在网页抽取时不完整；更重要的是文档虽然覆盖全面，但生产边界、安全责任、企业功能缺失意味着用户不能只照 Quick Start 就放心上关键业务。

## 社区与成熟度

| 维度 | 评分 | 说明 |
|------|------|------|
| 社区活跃度 | 5/5 | 43.7k stars、13.5k forks、约 438 contributor pages、100% community profile；可见度和贡献规模很高 [GH:api][GH:contributors][GH:community]。 |
| 成熟度 | 3/5 | 仓库创建于 2021，latest release v6.2.0；但 cal.diy 作为 community edition 明确 personal/non-production，且 issue/PR backlog 大、有 Critical security advisory 历史，所以不能按成熟企业 SaaS 给 4/5 [GH:api][GH:releases][Docs:intro][GH:advisories]。 |

## 安全与风险

评分 2/5。

正面：有 SECURITY.md，提供 security@cal.com 报告渠道与响应承诺；GitHub community profile 显示治理文件完整 [GH:community][GH:local-scan]。

负面更重：

- GitHub Security Advisories 显示 Critical 级认证绕过 CVE-2026-23478，影响范围为 `>=3.1.6 <6.0.7`，patched >=6.0.7 [GH:advisories]。
- 项目接触身份、邮箱、日历、会议、支付、CRM、组织/成员关系等高敏感数据。
- 官方文档明确说 Cal.com, Inc. does not guarantee security and safety of the open source project，且建议个人非生产使用 [Docs:intro]。

因此安全评分给 2：不是“不可用”，但自托管者需要非常严肃地处理版本、密钥、备份、OAuth scopes、邮件/域名、数据库与升级。

## 学习价值

cal.diy 的学习价值很高：

- 学习大型 TypeScript SaaS monorepo 如何组织 scheduling domain。
- 研究 calendar / booking / availability / webhook / embed / API 如何构成可自动化的时间协调系统。
- 作为 agent infrastructure 思考材料：agent 要进入现实世界，不只需要 code/tools/context，还需要 appointment、availability 和 human coordination。
- 作为反面约束：越接近现实业务与身份数据，越不能只看开源、star 和功能表；security boundary 与 production disclaimer 必须进入决策。