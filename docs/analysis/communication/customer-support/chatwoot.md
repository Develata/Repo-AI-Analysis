---
title: "Chatwoot"
created: 2026-06-18
updated: 2026-06-18
type: repository-analysis
repo_url: "https://github.com/chatwoot/chatwoot"
category: "communication/customer-support"
tags: ["customer-support", "helpdesk", "live-chat", "omnichannel", "rails", "vue", "self-hosted", "ai-agent"]
previous_repo: ""
successor: ""
primary_language: "Ruby"
license: "MIT for OSS portions; enterprise directory under separate license; GitHub API license=NOASSERTION"
stars: 32320
forks: 7706
last_checked: 2026-06-18
last_verified: 2026-06-18
evidence: "GitHub authenticated API + README + official docs + GitHub advisories + shallow local scan; no local build/test/deployment smoke test run"
archived_reason: ""
docker_support: true
gpu_required: false
estimated_cpu: "2 cores minimum; 4+ cores recommended for production per docs"
estimated_memory: "4GB minimum; 8GB+ recommended for production per docs"
estimated_storage: "20GB SSD minimum; 50GB+ SSD recommended plus PostgreSQL, Redis, uploads, backups and object storage"
status: active
ratings:
  capability: 4
  usability: 4
  performance: 3
  code_quality: 4
  documentation: 4
  community: 4
  maturity: 4
  extensibility: 4
  security: 2
  recommendation: 3
overall_score: 3.6
sources:
  - "[GH] https://github.com/chatwoot/chatwoot"
  - "[GH:api] https://api.github.com/repos/chatwoot/chatwoot queried 2026-06-18 via gh auth; stars=32320, forks=7706, open_issues_count=1189, created_at=2019-08-14, pushed_at=2026-06-17, default_branch=develop, GitHub API license=NOASSERTION, primary_language=Ruby"
  - "[GH:license-local] local LICENSE inspected 2026-06-18; content outside enterprise/ is MIT Expat, enterprise/ directory licensed separately; README says Released under MIT License, but GitHub API reports NOASSERTION because of mixed license layout"
  - "[GH:issues-prs] GitHub search API queried 2026-06-18; open issues=901, open PRs=286; REST open_issues_count=1189 includes PRs"
  - "[GH:releases] https://api.github.com/repos/chatwoot/chatwoot/releases?per_page=5 queried 2026-06-18; latest v4.15.1 published 2026-06-17; previous v4.15.0, v4.14.2, v4.14.1, v4.14.0"
  - "[GH:community] https://api.github.com/repos/chatwoot/chatwoot/community/profile queried 2026-06-18; health_percentage=100; README, license, code_of_conduct, CONTRIBUTING, SECURITY, issue templates and PR template present"
  - "[GH:advisories] https://api.github.com/repos/chatwoot/chatwoot/security-advisories?per_page=10 queried 2026-06-18; returned 3 published advisories: GHSA-8qxm-4p4p-cfhm medium OAuth pre-account takeover patched 4.13.0; GHSA-9pgm-75gg-6948 high SQL injection in Conversation/Contact Filter API via Custom Attribute patched 4.11.2; GHSA-g8f9-hh83-rcq9 critical blind SQL injection in Conversation and Contacts filters patched 3.16.0"
  - "[GH:local-scan] local shallow clone /opt/data/tmp/repo_wiki_trending_20260618_round3/chatwoot-chatwoot at commit f99187646e6674c37b30a7bbff7263e77a881274; git ls-files=8280, markdown/rst/adoc files=10, test/spec-ish files=1352, GitHub workflows=16; inspected README.md, LICENSE, SECURITY.md, CONTRIBUTING.md, Gemfile/Gemfile.lock, package.json, pnpm-lock.yaml, docker-compose.yaml, AGENTS.md"
  - "[Docs:help] https://www.chatwoot.com/help-center extracted 2026-06-18; help center links self-hosted docs, product docs, API reference, contributing guide and FAQ topics including Captain AI, WhatsApp channel, website live chat, automation, Slack replies, campaigns, help center and webhooks"
  - "[Docs:self-host] https://www.chatwoot.com/docs/self-hosted extracted 2026-06-18; docs describe production-ready self-hosted deployment, Linux VM/Docker/Kubernetes/cloud provider options, minimum 2 CPU/4GB/20GB SSD, recommended 4+ CPU/8GB+/50GB+ SSD, PostgreSQL 12+, Redis 6+, Nginx/reverse proxy, domain, SSL, SMTP, object storage, monitoring and backups"
  - "[Docs:live-chat] https://www.chatwoot.com/docs/product/channels/live-chat/sdk/setup extracted 2026-06-18; sampled product docs show WordPress live-chat plugin setup and website inbox token/installation URL configuration"
---

# Chatwoot

> Open-source customer support platform：面向 live chat、omnichannel inbox、help center、automation、integrations 和自托管客服工作流的 Intercom/Zendesk alternative。
>
> **状态**: `active` · **总分**: 3.6/5 · **推荐度**: 3/5

## 一句话总结

Chatwoot 是成熟、实用、工程投入真实的开源客服平台；但客户数据/认证/API 相关安全历史和高 backlog 使生产采用推荐度应保持 3/5。

## 总体评价

Chatwoot 的产品定位清楚：modern customer support platform，open-source alternative to Intercom, Zendesk, Salesforce Service Cloud 等 [GH]。README 显示它覆盖 website live chat、email、Facebook、Instagram、Twitter、WhatsApp、Telegram、Line、SMS 等 omnichannel inbox，并提供 Help Center、AI Captain、automation、reports、integrations、campaigns、contact segmentation 等功能 [GH]。

工程上，它是 Rails/Ruby + Vue/JS + Redis/PostgreSQL + Docker/Kubernetes 方向的典型开源 SaaS。local scan 显示 8280 files、1352 test/spec-ish files、16 workflows、Gemfile/Gemfile.lock、pnpm-lock、docker-compose、enterprise overlay 和完整贡献/安全文件 [GH:local-scan]。Self-hosted docs 也把 Linux VM、Docker、Kubernetes、cloud providers、CPU/RAM/storage、PostgreSQL、Redis、Nginx、domain/SSL/SMTP/object storage/backups 都写清楚 [Docs:self-host]。

它的主要风险在两个方面。第一，GitHub API license 为 NOASSERTION，本地 LICENSE 显示 OSS 部分 MIT，但 enterprise/ 目录另有许可，不能简单宣称“全仓库 MIT” [GH:api][GH:license-local]。第二，安全 advisories 涉及 OAuth pre-account takeover、SQL injection / blind SQL injection in conversation/contact filters，都是客服平台核心数据面 [GH:advisories]。因此 Chatwoot 很值得收录，但采用建议必须带安全和运维条件。

## 推荐度：3/5

对目标用户——需要自托管 live chat/helpdesk/omnichannel support、有 Rails/Docker/PostgreSQL/Redis 运维能力的小团队或组织——推荐度是 3/5。

给 3 而不是 4：Chatwoot 功能完整、文档好、release 活跃、测试文件数不少；但 open issues 901 / PRs 286，高危/严重 SQL injection 和 OAuth advisory，外加 enterprise license 边界，都要求生产采用前做 controlled pilot、版本升级确认、权限/API/过滤器安全审查 [GH:issues-prs][GH:advisories][GH:license-local]。

## 优势

1. **产品功能完整**：omnichannel inbox、live chat、email/social/messaging channels、help center、automation、reports、campaigns、integrations 都覆盖 [GH][Docs:help]。
2. **自托管路径明确**：Linux VM、Docker、Kubernetes、cloud providers，且给出 CPU/RAM/storage、PostgreSQL/Redis/Nginx/SMTP/SSL 需求 [Docs:self-host]。
3. **工程投入扎实**：8280 tracked files、1352 test/spec-ish files、16 workflows、Gemfile/Gemfile.lock、pnpm-lock、docker-compose、SECURITY/CONTRIBUTING 齐全 [GH:local-scan][GH:community]。
4. **社区和发布活跃**：32k stars、7706 forks、v4.15.1 于 2026-06-17 发布，community health 100% [GH:api][GH:releases]。
5. **集成生态实用**：Slack、Dialogflow、Shopify、Google Translate、Linear、webhooks、WordPress live chat plugin 等都贴近日常客服流程 [GH][Docs:live-chat]。

## 劣势

1. **安全历史不轻**：SQL injection、blind SQL injection、OAuth pre-account takeover 都直接触及客户数据和身份面 [GH:advisories]。
2. **backlog 高**：open issues 901 / PRs 286，说明维护面和需求压力都大 [GH:issues-prs]。
3. **部署组件较多**：Rails、PostgreSQL、Redis、Nginx/TLS、SMTP、object storage、background jobs、uploads/backups 都要维护 [Docs:self-host]。
4. **license 需要精读**：OSS 部分 MIT，enterprise/ 单独许可；GitHub API 因混合布局返回 NOASSERTION [GH:api][GH:license-local]。
5. **客户数据敏感**：聊天记录、联系人、邮箱/手机号、社媒/WhatsApp 连接、AI agent、webhooks 都需要合规和隐私设计。

---

## 适合什么场景

- 中小团队需要 self-hosted Intercom/Zendesk alternative。
- 希望集中网站 live chat、email、WhatsApp/Telegram/social channels 和 help center。
- 有能力维护 Rails/PostgreSQL/Redis/Docker/Kubernetes 的团队。
- 需要客服 automation、reports、contact segmentation、webhooks 和第三方集成。
- 想研究成熟开源 Rails SaaS、enterprise overlay 和客服平台架构。

## 不适合什么场景

- 无法持续升级或处理安全公告的生产客服系统。
- 对客户数据合规、PII、访问控制、备份加密没有成熟流程的组织。
- 只需要一个简单网站聊天小组件，不想维护整套 Rails/DB/Redis/SMTP。
- 不接受 mixed license / enterprise 功能边界的场景。
- 对 SQL injection/OAuth advisory 历史零容忍且无法自行审计 patched versions 的团队。

## 与类似项目对比

| 项目 | 定位 | 相对本项目 |
|------|------|-----------|
| Intercom | 商业客户沟通/营销/支持平台 | Intercom 托管体验和商业生态强；Chatwoot 提供自托管、开源可控和成本可控路线 |
| Zendesk | 企业级客服/工单平台 | Zendesk 更成熟企业化；Chatwoot 更轻、更开源，适合自托管和定制 |
| Freshdesk | 商业 helpdesk / support suite | Freshdesk 功能产品化强；Chatwoot 更偏开源 SaaS alternative |
| Zammad | 开源 helpdesk / ticketing | Zammad 更偏传统 ticketing；Chatwoot 更强调 omnichannel live conversations 和 website/social inbox |

上述对比是定位级比较，未对竞品按同一 10 维度框架深审。

---

## 它能做什么

capability 评分 4/5。

Chatwoot 提供：

- live chat widget、website inbox、WordPress plugin 示例 [GH][Docs:live-chat]；
- email、Facebook、Instagram、Twitter、WhatsApp、Telegram、Line、SMS 等 omnichannel support [GH]；
- Help Center、FAQ/articles、reports、CSAT、campaigns、contact segmentation [GH][Docs:help]；
- automation、teams、auto-assignment、business hours、canned responses、labels/custom views [GH]；
- Captain AI support agent / smart suggestions / automated responses [GH][Docs:help]；
- Slack/Dialogflow/Shopify/Google Translate/Linear/webhooks 等集成 [GH][Docs:help]；
- Linux VM、Docker、Kubernetes/cloud provider self-hosting [Docs:self-host]。

不给 5：本条未验证 enterprise-only 功能、AI Captain 实际质量、大规模 SLA、多渠道连接稳定性和权限模型。

## 运行环境与资源占用

| 场景 | CPU | 内存 | 存储 | 说明 |
|------|-----|------|------|------|
| 最小 self-host | 2 cores | 4GB | 20GB SSD | 官方 self-hosted docs minimum [Docs:self-host] |
| 推荐生产 | 4+ cores | 8GB+ | 50GB+ SSD | PostgreSQL 12+、Redis 6+、reverse proxy、SMTP、object storage、backup [Docs:self-host] |

- **运行时**：Ruby/Rails、Vue/JS、PostgreSQL、Redis、Nginx/reverse proxy、SMTP、background jobs、Docker/Kubernetes [GH:local-scan][Docs:self-host]。
- **操作系统**：Ubuntu 20.04+ or compatible Linux for baseline self-hosted docs；也支持 Docker/Kubernetes/cloud providers [Docs:self-host]。
- **Docker**：README 有 Docker Hub badge，仓库含 docker-compose.yaml / production/test compose，docs 支持 Docker deployment [GH][GH:local-scan][Docs:self-host]。
- **GPU**：不需要；AI Captain 若调用外部模型/API 另计。
- **外部依赖**：PostgreSQL、Redis、SMTP、domain/TLS、object storage、messaging/social channel credentials、webhooks、backup/monitoring。

performance 评分 3/5。Rails + Redis/PostgreSQL 对中小团队合理，但 omnichannel、uploads、reports、AI/automation 和 background jobs 会增加负载；本条没有压测。

## 上手体验

评分 4/5。

README 和 docs 的入口清楚，部署选项也覆盖从 Heroku/DigitalOcean 到 Linux VM/Docker/Kubernetes [GH][Docs:self-host]。对希望快速试用的人，one-click/cloud paths 降低门槛；对自托管，系统需求和前置条件写得比较具体。

扣分点在生产配置：SMTP、SSL、object storage、backup、channel credentials、webhooks 和安全更新都不是零配置。

## 代码质量

评分 4/5。

local scan 显示 8280 files、1352 test/spec-ish files、16 workflows；Rails/Vue 项目结构完整，有 spec、tests、rubocop/eslint/vitest/circleci/dependabot 等信号 [GH:local-scan]。AGENTS.md 还记录了 Ruby/Vue/test/enterprise overlay 约束，说明工程协作规则较清楚 [GH:local-scan]。

不给 5：本条未跑 bundle/pnpm/rspec；安全 advisories 说明 filters/OAuth 等关键路径曾有严重缺陷。

## 可扩展性

评分 4/5。

Chatwoot 的扩展性来自 API、webhooks、dashboard apps、integrations、channels、enterprise overlay 和 Rails 架构 [GH][Docs:help]。对客服系统而言，能接入 Slack、Dialogflow、Shopify、Linear、Google Translate、WhatsApp/Telegram 等很实用。

限制是很多深度定制会触及 enterprise/ overlay 或核心 Rails models/controllers；license 和升级兼容需要谨慎。

## 文档质量

评分 4/5。

Help Center 聚合 self-hosted、product docs、API reference、contributing guide；self-hosted docs 对部署选项、系统需求、安全实践、备份/监控都有清楚概述 [Docs:help][Docs:self-host]。README 也能快速说明功能和部署路径 [GH]。

不足是文档分散在多个站点/路径，enterprise/cloud/self-hosted 功能边界需要逐项核对。

## 社区与成熟度

| 维度 | 评分 | 说明 |
|------|------|------|
| 社区活跃度 | 4/5 | 32.3k stars、7706 forks、open issues 901 / PRs 286、community health 100%、Discord/translation/contributors 活跃 [GH:api][GH:issues-prs][GH:community] |
| 成熟度 | 4/5 | 2019 建仓、v4.15.1 近期 release、部署/产品文档成熟；但 security advisories 和 backlog 限制生产信心 [GH:api][GH:releases][GH:advisories] |

## 安全与风险

评分 2/5。

客服平台承载大量 PII 与客户会话，安全面本来就重；Chatwoot 本次还查到 3 个 published advisories：OAuth pre-account takeover、high SQL injection in Conversation/Contact Filter API、critical blind SQL injection in Conversation and Contacts filters [GH:advisories]。这些都与身份和客户数据查询强相关。

这不表示最新版必然有已知未修漏洞；API metadata 记录了 patched versions。但生产采用必须固定 patched release、限制管理面、审计 filters/custom attributes/webhooks、保护 PostgreSQL/Redis/SMTP/object storage、启用 HTTPS、加密备份并建立升级窗口。

## 学习价值

Chatwoot 是很好的“开源 SaaS 客服平台”样本：Rails 架构、omnichannel 产品复杂度、enterprise overlay、Docker/Kubernetes 部署、客户数据安全、webhooks/integrations 和 AI support agent 都集中在一个仓库里。可学其工程组织，亦当警其安全边界。