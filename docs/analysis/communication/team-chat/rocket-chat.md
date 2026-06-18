---
title: "Rocket.Chat"
created: 2026-06-18
updated: 2026-06-18
type: repository-analysis
repo_url: "https://github.com/RocketChat/Rocket.Chat"
category: "communication/team-chat"
tags: ["team-chat", "collaboration", "self-hosted", "typescript", "meteor", "federation", "apps-engine", "security"]
previous_repo: ""
successor: ""
primary_language: "TypeScript"
license: "MIT for OSS portions; enterprise/ee directories under separate license; GitHub API license=NOASSERTION"
stars: 45547
forks: 13655
last_checked: 2026-06-18
last_verified: 2026-06-18
evidence: "GitHub authenticated API + README + official docs/developer docs + GitHub advisories + shallow local scan; no local build/test/deployment smoke test run"
archived_reason: ""
docker_support: true
gpu_required: false
estimated_cpu: "2 cores for starter workspace; 4+ cores or more for commercial/HA and 16 vCPU for >5000 concurrent users per docs"
estimated_memory: "4 GiB Rocket.Chat + 4 GiB MongoDB starter; 8–12 GiB app and 8–16 GiB MongoDB for HA; large deployments higher"
estimated_storage: "20 GiB app plus MongoDB/file storage baseline; object storage recommended for uploads"
status: active
ratings:
  capability: 5
  usability: 4
  performance: 3
  code_quality: 4
  documentation: 4
  community: 4
  maturity: 4
  extensibility: 4
  security: 2
  recommendation: 3
overall_score: 3.7
sources:
  - "[GH] https://github.com/RocketChat/Rocket.Chat"
  - "[GH:api] https://api.github.com/repos/RocketChat/Rocket.Chat queried 2026-06-18 via gh auth; stars=45547, forks=13655, open_issues_count=3774, created_at=2015-05-19, pushed_at=2026-06-17, default_branch=develop, GitHub API license=NOASSERTION, primary_language=TypeScript"
  - "[GH:license-local] local LICENSE inspected 2026-06-18; content outside apps/meteor/ee/ and ee/ is MIT Expat, enterprise/ee content licensed separately; this explains GitHub API NOASSERTION mismatch"
  - "[GH:issues-prs] GitHub search API queried 2026-06-18; open issues=2408, open PRs=1337; REST open_issues_count=3774 includes PRs"
  - "[GH:releases] https://api.github.com/repos/RocketChat/Rocket.Chat/releases?per_page=5 queried 2026-06-18; latest listed releases 8.5.1, 8.4.4, 8.3.6, 8.2.6, 8.1.6 all published 2026-06-15"
  - "[GH:community] https://api.github.com/repos/RocketChat/Rocket.Chat/community/profile queried 2026-06-18; health_percentage=100; README, license, code_of_conduct, SECURITY, issue templates and PR template present"
  - "[GH:advisories] https://api.github.com/repos/RocketChat/Rocket.Chat/security-advisories?per_page=10 queried 2026-06-18; returned 10 published advisories including critical Apple OAuth account takeover GHSA-wx3c-76rf-wpwf patched 8.5.1/8.4.4/8.3.6/8.2.6/8.1.6/8.0.7/7.10.13, critical pre-auth OAuth2 NoSQL injection GHSA-8p25-fm45-pjrw patched 8.5.0/8.4.1/8.3.3/8.2.3/8.1.4/8.0.5/7.13.7/7.10.11, critical CAS/SAML session hijack GHSA-rr54-jf4h-6cj9 patched same, plus high SAML/OAuth/export/fingerprint issues and medium livechat/token issues"
  - "[GH:local-scan] local shallow clone /opt/data/tmp/repo_wiki_trending_20260618_round3/RocketChat-Rocket.Chat at commit 236eef259be727869c9a7b3aa051adfb862ccdbf; git ls-files=9900, markdown/rst/adoc files=172, test/spec-ish files=1472, GitHub workflows=16; inspected README.md, LICENSE, SECURITY.md, package.json, yarn.lock"
  - "[Docs:deploy] https://docs.rocket.chat/docs/deploy-rocketchat extracted 2026-06-18; docs describe self-managed, cloud-hosted, air-gapped deployments, Docker/Podman/Kubernetes/Launchpad options and unsupported additional deployment methods"
  - "[Docs:requirements] https://docs.rocket.chat/docs/system-requirements extracted 2026-06-18; docs list MongoDB 8.0 for Rocket.Chat 8.2+, Node.js 22.16.0 and Deno 2.3.1 in official Docker/Helm, starter 2 cores/4GiB app + 2 cores/4GiB MongoDB, HA and >5000 concurrent user sizing, MongoDB replica set and object storage recommendations"
  - "[Docs:apps] https://developer.rocket.chat/docs/rocketchat-apps-engine extracted 2026-06-18; Apps-Engine docs describe custom apps, Marketplace, slash commands, event interfaces, HTTP requests, UI block kit, permissions/settings/i18n, persistence, OAuth2 client, schedulers and API endpoints"
---

# Rocket.Chat

> Self-hostable team communications platform：面向组织聊天、协作、合规、federation、Marketplace apps 和高安全/隔离部署的开源通信系统。
>
> **状态**: `active` · **总分**: 3.7/5 · **推荐度**: 3/5

## 一句话总结

Rocket.Chat 历史地位和能力面都很强，适合需要自托管/合规/air-gapped/team chat 的组织评估；但近期 critical/high 安全公告很多，生产采用推荐度必须降到谨慎的 3/5。

## 总体评价

Rocket.Chat 是开源团队通信领域的老牌项目。README 将其定位为 secure, fully customizable communications platform，面向有高数据保护要求的组织；功能面包括 deployment/workspace management、security/sovereignty、team collaboration、federation、Marketplace apps、Apps-Engine、desktop/mobile clients 和 developer APIs [GH]。官方 deployment docs 覆盖 self-managed、cloud-hosted、air-gapped、Docker、Podman、Kubernetes 和 Launchpad [Docs:deploy]。

成熟度与社区体量很强：2015 建仓，45k stars，13k forks，8.x 多条维护 release line，local scan 显示 9900 files、1472 test/spec-ish files、16 workflows [GH:api][GH:releases][GH:local-scan]。系统要求文档也比较现实：Rocket.Chat 8.2+ 需要 MongoDB 8.0；官方 Docker/Helm 内置 Node.js/Deno，但 MongoDB 需单独维护；并按 starter、HA、5000+ concurrent users 给出容量建议 [Docs:requirements]。

但安全历史是硬负面。2026-05/06 的 GitHub advisories 包括多个 critical：Apple OAuth account takeover、pre-auth OAuth2 NoSQL injection、CAS/SAML session hijack，以及 high SAML/OAuth/export/fingerprint 等问题 [GH:advisories]。对一个宣称 secure communications、服务政府/国防/关键基础设施的产品，这些并非小瑕疵，而是采用前必须直面的风险。

## 推荐度：3/5

对目标用户——需要 self-hosted / air-gapped / compliance-oriented team chat，有能力维护 MongoDB、升级和安全补丁的组织——推荐度是 3/5。

给 3 而不是 4：它的能力、文档、生态和历史成熟度足够强；但 open issues 2408 / open PRs 1337 过高，近期 GHSA 中 critical/high 密集，且通信平台承载身份、消息、文件、OAuth/SAML、federation、livechat 和第三方 apps，安全责任很重 [GH:issues-prs][GH:advisories]。可以评估和试点，不宜低成本无脑上线。

## 优势

1. **能力面完整**：team chat、voice/federation、desktop/mobile、deployment/workspace management、security/sovereignty、Marketplace apps [GH]。
2. **部署场景覆盖广**：self-managed、cloud-hosted、air-gapped、Docker/Podman/Kubernetes/Launchpad [Docs:deploy]。
3. **扩展生态明确**：Apps-Engine 支持 custom apps、Marketplace、slash commands、events、HTTP requests、UI block kit、permissions、persistence、OAuth2、schedulers、API endpoints [Docs:apps]。
4. **工程成熟信号强**：9900 tracked files、1472 test/spec-ish files、16 workflows、长期 releases、community health 100% [GH:local-scan][GH:releases][GH:community]。
5. **容量文档现实**：系统要求按 MongoDB、Node/Deno、HA、large deployments、object storage 给出部署边界 [Docs:requirements]。

## 劣势

1. **近期安全公告严重**：多个 critical/high 影响 OAuth/SAML/CAS/account takeover/export/fingerprint 等关键路径 [GH:advisories]。
2. **backlog 极高**：open issues 2408 / PRs 1337，维护压力非常大 [GH:issues-prs]。
3. **MongoDB 运维负担**：MongoDB 8.0、replica set、upgrade sequencing、storage sizing 都是生产责任 [Docs:requirements]。
4. **license 不是单纯 MIT**：GitHub API 为 NOASSERTION；本地 LICENSE 显示 OSS 部分 MIT，但 `ee/`、`apps/meteor/ee/` 另有许可 [GH:api][GH:license-local]。
5. **通信平台天然高风险**：身份、消息、文件、搜索、通知、OAuth/SAML、federation、webhooks/apps 都是攻击面。

---

## 适合什么场景

- 需要自托管或 air-gapped team communication 的组织。
- 对数据主权、合规、私有部署、可扩展 apps 有明确需求。
- 有能力运行 MongoDB replica set、对象存储、TLS、SSO/OAuth/SAML、安全升级流程。
- 需要 Marketplace/Apps-Engine 对通信平台做内部系统集成。
- 研究成熟开源 SaaS / Meteor/TypeScript monorepo / communication platform 架构。

## 不适合什么场景

- 小团队只需要低维护聊天工具，且不想承担 MongoDB/升级/安全运维。
- 对近期 critical/high advisories 无法接受，或不能快速升级 patched versions。
- 需要完全开源无商业/enterprise 许可边界的部署。
- 没有身份治理、SSO/SAML/OAuth 安全审计能力的组织。
- 只要普通 Slack/Discord 类 SaaS 体验，不关心自托管和合规。

## 与类似项目对比

| 项目 | 定位 | 相对本项目 |
|------|------|-----------|
| Mattermost | Self-hosted team collaboration | Mattermost 也强在自托管/企业场景；Rocket.Chat 更强调 federation/livechat/Marketplace/Apps-Engine 组合 |
| Zulip | Topic-threaded team chat | Zulip 的 threaded conversation model 更独特；Rocket.Chat 更接近 Slack-like multi-channel 通信平台 |
| Matrix / Element | Federated secure messaging protocol/ecosystem | Matrix 更协议/联邦化；Rocket.Chat 是应用平台，可启用 federation 但核心是 workspace product |
| Slack / Microsoft Teams | 商业协作 SaaS | Slack/Teams 生态和托管体验更强；Rocket.Chat 提供自托管、air-gapped 和开源可控性 |

上述对比是定位级比较，未对竞品按同一 10 维度框架深审。

---

## 它能做什么

capability 评分 5/5。

Rocket.Chat 覆盖：

- real-time team communication、channels、workspace collaboration [GH]；
- self-managed/cloud/air-gapped deployment [Docs:deploy]；
- identity/security/compliance、E2EE、role/attribute-based access control 等能力宣称 [GH]；
- desktop/mobile/web clients [GH]；
- federation、voice calls、customer/citizen communication [GH]；
- Apps-Engine、Marketplace、custom apps、events/slash commands/HTTP/API/OAuth/schedulers [Docs:apps]；
- Docker/Podman/Kubernetes/Launchpad deployment [Docs:deploy]。

给 5 是按能力广度；不表示这些能力都已由本条实测或安全无忧。

## 运行环境与资源占用

| 场景 | CPU | 内存 | 存储 | 说明 |
|------|-----|------|------|------|
| Starter ≤500 concurrent users | 2 cores app + 2 cores MongoDB | 4 GiB app + 4 GiB MongoDB | 20 GiB app + 10 GiB MongoDB | 官方系统要求示例 [Docs:requirements] |
| Commercial/Government/Defense HA | 4 cores app + 2 cores MongoDB | 8–12 GiB app + 8–16 GiB MongoDB | 20 GiB app + 20–80 GiB MongoDB | 需 replica set / HA [Docs:requirements] |
| >5000 concurrent users | 16 vCPU app | 12 GiB app + MongoDB replicas | 40 GB app + 80 GB per MongoDB replica | 官方 large deployment 示例 [Docs:requirements] |

- **运行时**：TypeScript/Meteor monorepo，官方 Docker/Helm 内置 Node.js 22.16.0 和 Deno 2.3.1；MongoDB 8.0 需独立维护 [Docs:requirements]。
- **操作系统**：官方推荐 Docker/Podman/Kubernetes；额外 unsupported paths 包含 snaps/AWS/DigitalOcean/Ubuntu/Debian/CentOS/Windows 等 [Docs:deploy]。
- **Docker**：官方 deployment 方法之一，README 也直接推荐 Docker/Podman/Kubernetes [GH][Docs:deploy]。
- **GPU**：不需要。
- **外部依赖**：MongoDB replica set、object storage、SMTP/push、SSO/OAuth/SAML、TLS、firewall/cloud services、backup/monitoring。

performance 评分 3/5。容量文档成熟，但真实性能高度依赖并发、MongoDB、文件存储、apps、federation 和消息量；本条没有部署/压测。

## 上手体验

评分 4/5。

部署文档入口完整，Docker/Podman/Kubernetes/Launchpad 分层清楚，README 也把 web/desktop/mobile/docs/developer/API 链接放得很直观 [GH][Docs:deploy]。对管理员来说，文档比许多开源 chat 系统成熟。

扣分点是生产部署复杂：MongoDB 版本、replica set、object storage、SSO/SAML/OAuth、升级矩阵和安全公告处理都需要成熟运维。

## 代码质量

评分 4/5。

长期大型项目，local scan 显示 9900 tracked files、1472 test/spec-ish files、16 workflows、yarn lock、packages/apps 分层，工程投入真实 [GH:local-scan]。README 和 developer docs 指向 Apps-Engine、server/desktop/mobile/API 等开发路径 [GH][Docs:apps]。

不给 5：backlog 极高，近期多起 serious GHSA 表明关键身份/权限路径曾出现严重缺陷；本条也未跑测试或审查安全修复代码。

## 可扩展性

评分 4/5。

Apps-Engine 是清晰的扩展机制：Marketplace/custom apps、slash commands、event interfaces、HTTP requests、UI block kit、permissions/settings/i18n、persistence、OAuth2、schedulers、API endpoints [Docs:apps]。这使 Rocket.Chat 不只是 chat app，而是可嵌入组织 workflow 的通信平台。

扣分在于扩展会放大权限和供应链风险；private apps、Marketplace apps、OAuth/webhooks/API 都要纳入安全审查。

## 文档质量

评分 4/5。

用户、管理员、developer、API、deployment、system requirements、Apps-Engine、Trust/Compliance 等入口齐全 [GH][Docs:deploy][Docs:requirements][Docs:apps]。容量和部署要求写得比较具体。

不足是大产品文档体系庞杂，版本/plan/enterprise/cloud/self-managed 边界需要逐页核对。

## 社区与成熟度

| 维度 | 评分 | 说明 |
|------|------|------|
| 社区活跃度 | 4/5 | 45.5k stars、13.6k forks、community health 100%，但 open issues 2408 / open PRs 1337 是巨大维护压力 [GH:api][GH:issues-prs][GH:community] |
| 成熟度 | 4/5 | 2015 建仓、8.x release lines 活跃、部署/容量/Apps docs 成熟；但安全公告密集和 backlog 限制生产信心 [GH:releases][GH:advisories] |

## 安全与风险

评分 2/5。

Rocket.Chat 的安全评分必须低。GitHub advisory API 本次返回 10 个 published advisories，其中多个是 critical/high：Apple OAuth account takeover、pre-auth OAuth2 NoSQL injection、CAS/SAML session hijack、SAML signature validation、data export theft、fingerprint endpoint、livechat token disclosure 等 [GH:advisories]。这些都在身份、认证、数据、工作区注册和 livechat 等核心面上。

同时，项目确实有安全/合规文档、Trust Center 入口和 patched release lines；所以这里不是说最新版必然有已知未修漏洞，而是说部署方必须有快速升级、身份配置审计、SSO/OAuth/SAML hardening、app marketplace 审查、MongoDB/对象存储安全和 incident response 能力。

## 学习价值

Rocket.Chat 是成熟开源通信平台的典型样本：产品能力、企业/开源许可边界、身份安全、Apps-Engine、MongoDB 运维、air-gapped 部署、社区规模和安全历史都很有研究价值。其要义在于：大而成熟，不等于低风险；通信系统尤其“慎之又慎”。