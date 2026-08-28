---
title: "Monkeytype"
created: 2026-08-28
updated: 2026-08-28
type: repository-analysis
repo_url: "https://github.com/monkeytypegame/monkeytype"
category: "education-resourses/english/keyboard"
tags: ["typing-practice", "english-learning", "wpm", "touch-typing", "leaderboard", "typescript"]
previous_repo: ""
successor: ""
primary_language: "TypeScript"
license: "GPL-3.0"
stars: 20625
forks: 3300
last_checked: 2026-08-28
last_verified: 2026-08-28
evidence: "Authenticated GitHub API + README/docs/security/advisories + recursive tree and frontend/backend/CI manifest review; no local build, browser smoke test, or load benchmark"
archived_reason: ""
docker_support: true
gpu_required: false
estimated_cpu: "在线练习低至中等；完整自托管前后端约 2–4 cores（启发式，未压测）"
estimated_memory: "前端练习低至中等；自托管含 MongoDB/Redis/backend 约 2–4GB 起步（启发式，未实测）"
estimated_storage: "仓库 size=158,029 KB；自托管还需 Docker layers、MongoDB/Redis 数据与日志，实际运行占用未测"
status: active
ratings:
  capability: 5
  usability: 4
  performance: 3
  code_quality: 4
  documentation: 4
  community: 5
  maturity: 4
  extensibility: 4
  security: 2
  recommendation: 4
overall_score: 3.9
sources:
  - "[GH:api] https://api.github.com/repos/monkeytypegame/monkeytype queried 2026-08-28: public, not archived/disabled, default_branch=master, created_at=2020-05-14T17:41:09Z, pushed_at=2026-08-17T10:44:33Z, stars=20625, forks=3300, open_issues_count=220, language=TypeScript, license=GPL-3.0, size=158029 KB, homepage=https://monkeytype.com/"
  - "[GH:commit] GitHub commits API queried 2026-08-28: latest master commit 91bd24bb8513785c7364cbea29296ff7adafac41, dated 2026-08-15T17:22:18Z, improves leaderboard purging on user ban"
  - "[GH:tree] GitHub recursive tree API queried 2026-08-28: 2,095 blob paths; 1,734 under frontend, 170 under backend, 122 under packages, 804 TypeScript/TSX files, 180 test/spec paths, 17 .github paths, 11 docker paths and 11 docs paths"
  - "[GH:readme] README.md inspected 2026-08-28: describes a minimalistic, highly customizable typing website with multiple modes, languages, quotes, progress tracking and speed improvement goals"
  - "[GH:manifest] root/frontend/backend package manifests inspected 2026-08-28: package version 26.32.0, pnpm@11.21.0, Node >=24 <25, separate frontend/backend packages, lint/build/test scripts and MongoDB/Redis/Firebase-related service dependencies"
  - "[GH:docs] docs/CONTRIBUTING.md, docs/CONTRIBUTING_BASIC.md, docs/CONTRIBUTING_ADVANCED.md and docs/SELF_HOSTING.md inspected 2026-08-28: browser-only contribution path for themes/languages/quotes, local Node/pnpm path, Docker quickstart, HTTPS/reverse-proxy requirements, optional Firebase accounts and MongoDB/Redis backend setup"
  - "[GH:ci] .github/workflows/monkey-ci.yml and recursive workflow tree inspected 2026-08-28: 10 workflow files; path-filtered frontend/backend/package jobs run Oxfmt/Oxlint, builds and test scripts, with Docker image publication workflow present"
  - "[GH:community] GitHub community/profile and contributors endpoint queried 2026-08-28: health_percentage=87; contributors endpoint returned its first 100 entries (at least 100 observed), with many non-owner contributors in the sampled list"
  - "[GH:issues] GitHub search/issues API queried 2026-08-28: open issues=90 and open PRs=130; sampled current items include copy/paste prevention bug #8361, a fix PR #8371, docs updates and quote additions"
  - "[GH:release] GitHub releases endpoint queried 2026-08-28 with per_page=100: 100 release objects returned; latest published release v26.32.0 dated 2026-08-04T22:26:02Z"
  - "[GH:advisories] GitHub repository security-advisories endpoint queried 2026-08-28: four unwithdrawn published advisories; API response returned no first_patched_version for any of the four entries, including GHSA-c878-p3jh-mmjf/CVE-2026-69183 high for affected version 26.26.0, GHSA-mfjh-9552-8g27/CVE-2025-66563 high affecting <=v25.49.0, GHSA-j4xx-fww5-774w/CVE-2025-59838 low affecting <=v25.36.0, and GHSA-wcjf-5464-4wq9/CVE-2024-41127 critical affecting <=v24.29.0; current v26.32.0 is not asserted vulnerable by these listed version values, but patched status/topology still requires advisory-level checking"
  - "[GH:security] docs/SECURITY.md and docs/SELF_HOSTING.md inspected 2026-08-28: provides vulnerability-reporting guidance and warns self-hosters to put backend behind a reverse proxy, use HTTPS and control forwarded headers"
  - "[GH:license] Root LICENSE inspected 2026-08-28: GNU General Public License version 3"
  - "[GH:docker] docs/SELF_HOSTING.md, docker/BUILD.md and docker/docker-compose.yml inspected 2026-08-28: official repository instructions build/use monkeytype/monkeytype-backend and monkeytype/monkeytype-frontend images and provide a Docker Compose quickstart; docker_support is true"
  - "[GH:comparisons] Same-batch positioning checks for Qwerty Learner, TypeWords, Earthworm and keybr.com on 2026-08-28; peer README/API evidence is used only for the comparison table, not a second 10-dimension audit"
---

# Monkeytype

> 一个以 speed/accuracy feedback 为核心、支持多种 mode、language、quote、theme、account 和 leaderboard 的高度可配置 typing-test platform；英语练习只是它的一个重要使用面。
>
> **状态**: `active` · **总分**: 3.9/5 · **推荐度**: 4/5
>
> **验证边界**：本轮使用 GitHub API、README/docs、security/advisory、递归 tree、manifest 和 issue/PR 静态审阅；未本地 build、未启动 MongoDB/Redis、未浏览器 smoke test、未做负载 benchmark。

## 一句话总结

Monkeytype 是这组项目里最完整的通用 typing-test platform：适合想练英文输入速度、准确率、节奏和长期统计的人，但它不是以词义记忆或系统英语课程为第一目标。[GH:readme]

## 总体评价

Monkeytype 的产品价值在于把一次输入测试做成可配置、可重复、可统计的 system：用户可以切换 time/words/quote 等 mode，选择 language、quote、theme 与大量设置，再把结果沉淀为个人 progress、account 或 leaderboard 数据 [GH:readme]。它的 capability、community 和 extensibility 在这组项目中最强，且仓库同时维护 frontend、backend、packages、Docker 和 CI workflow [GH:tree][GH:ci]。

它的代价不是功能少，而是系统面大：自托管要处理 Docker Compose、backend、MongoDB、Redis、可选 Firebase、HTTPS/reverse proxy、forwarded headers 和 secret files；前端在线使用很轻，完整工程/生产部署则完全是另一种复杂度 [GH:docs][GH:docker]。此外，GitHub advisories 仍能查到四个未撤回记录，其中 2026-08 的 high advisory 的 API metadata 没有 first patched version；虽然当前 v26.32.0 不在该条目列出的受影响版本值中，也不能把它简化成“已安全” [GH:advisories]。

结论：在线英语 typing practice 值得优先试用；生产自托管应以 advisory-level verification、reverse-proxy hardening 和自己的 CI/backup 运维为前提。

## 推荐度：4/5

**定位**：推荐给需要英文输入速度/准确率训练、WPM 统计、可配置测试和长期 progress 的个人或教学场景；生产自托管、开放账户系统或面向公网部署时，必须先完成安全与 reverse-proxy 配置核验。

给 4/5 是因为 hosted product 的 first-run 几乎是零配置，功能覆盖远超一次性 typing demo，且 basic contribution 可以只用 GitHub web UI 完成；对“我想稳定练速度并看到统计”这一目标，Monkeytype 的 fit 很高 [GH:readme][GH:docs]。

不给 5/5 的关键不是可用性，而是 adoption risk：完整 self-hosting 依赖多服务和 secrets；安全 advisories 包括一个当前时间点的 high 条目，另有历史 stored-XSS 与 CI workflow 注入记录；issue 流仍有输入/剪贴板 bug [GH:advisories][GH:docs][GH:issues]。因此在线试用可以强推荐，生产部署不能盲从品牌或 star 数。

## 优势

1. **typing-test 能力极全**：time、words、quote、language、theme、fun/custom settings、stats 与 leaderboard 形成完整训练/反馈面。[GH:readme]
2. **学习反馈可量化**：WPM、accuracy、progress history 和多种测试规则让用户能做重复实验，而不只是“敲完一段文字”。[GH:readme]
3. **贡献入口分层**：theme、language、quote 等低风险内容可用 browser-only 流程贡献，功能代码则有 advanced local setup。[GH:docs]
4. **工程化证据强**：frontend/backend/packages 分层，CI 按变更路径选择 job，并显式执行 format、lint、build、test；另有 Docker image publication workflow。[GH:tree][GH:ci]
5. **生态和使用规模可观**：20,625 stars、3,300 forks、至少 100 个 contributors、health 87%，且有持续 release 和 PR 活动；这是参与和借鉴的强信号。[GH:api][GH:community][GH:release]

## 劣势

1. **通用速度训练不等于英语学习**：它提供 language/quotes，但不会像 TypeWords 或 Qwerty Learner 那样把词义、词根、词库 recall 作为主循环。[GH:readme][GH:comparisons]
2. **自托管复杂**：Docker quickstart 之外，账号要 Firebase，持久化 backend 要 MongoDB/Redis，公网还必须 HTTPS 和 reverse proxy。[GH:docs][GH:docker]
3. **安全债务真实存在**：GitHub advisory 页面有四条未撤回记录；最新 high 条目的版本/修复元数据需要单独核对，不能用“当前 release 更高”替代 remediation verification。[GH:advisories]
4. **系统面大、维护成本高**：2,095 个 tree paths、frontend/backend/packages 多层和大量 workflow 能带来扩展力，也带来更多状态、部署和回归边界；当前仍能看到 copy/paste 相关 open bug。[GH:tree][GH:issues]
5. **设置丰富会增加认知负担**：竞技、统计、accounts、themes、quotes、custom rules 对新用户可能是选择过多；在线 zero-config 不代表所有功能都 zero-config。[GH:readme][GH:docs]

---

## 适合什么场景

- 英语或其他语言的 touch typing、WPM、accuracy 和节奏训练。
- 需要 time/words/quotes/custom mode 的个人练习、课堂练习或输入能力回归测试。
- 想保留 progress、参与 leaderboard、做 challenge 或使用社区 language/quote/theme 资源。
- 想研究一个具有 frontend/backend/packages、内容资源、账户、统计和自托管链路的中大型 TypeScript web app。
- 只贡献 quote、language、theme 等内容，不想先搭本地开发环境；basic contribution 文档明确支持 GitHub web UI 路径。[GH:docs]

## 不适合什么场景

- 核心目标是背考试词汇、词义、词根、发音和文章；TypeWords/Qwerty Learner 更直接。
- 需要自动检测弱键、逐步引入字母并生成针对性 lesson；keybr.com 更匹配。
- 只有 768MB 级小 VPS，却要无裁剪地自托管账户、backend、MongoDB、Redis 和 HTTPS front door；应先做资源和功能裁剪。
- 不愿管理 Firebase/service account、`.env`、MongoDB/Redis、reverse proxy、TLS、backup 与 forwarded-header trust boundary 的部署者。[GH:docs]
- 将旧 advisory 当成当前线上漏洞，或反过来因为当前 release 较新就宣称所有风险已经消失；两种判断都越过了本轮证据边界。[GH:advisories]

## 与类似项目对比

| 项目 | 定位 | 相对本项目 |
|------|------|-----------|
| Qwerty Learner | 英语考试/程序员词库 + word-level typing | Qwerty Learner 更重 vocabulary recall、IPA/pronunciation、dictation 和词库贡献；Monkeytype 更重通用测试规则、统计与竞技。 |
| TypeWords | 单词/文章背诵 + typing | TypeWords 更重 Smart/Free mode、文章逐句输入、wrong/favorite/mastered 和本地复习；Monkeytype 更重 WPM、quotes、accounts 和可配置测试。 |
| Earthworm | 连词构句、课程与句子输入的英语学习平台 | Earthworm 的学习对象是句子/课程/用户进度；Monkeytype 的核心单位是一次 test 与其统计结果。 |
| keybr.com | key-level adaptive touch-typing tutor | keybr.com 用弱键模型生成 lesson；Monkeytype 让用户配置测试内容和规则，适合 benchmark/反馈而非自动弱键 curriculum。 |

上述项目均按 `education-resourses/english/keyboard/` 的英语学习/键盘练习范围做定位级对比；依据同批 GitHub README/API 快照，未把竞品重新按本条目的 10 维度框架深审。[GH:comparisons]

---

## 它能做什么

**能力评分：5/5。**

- 提供多种 typing mode（如 time、words、quote），配合 language、quotes、custom text、theme 和大量规则设置。[GH:readme]
- 记录速度、准确率、progress、stats，并提供 account/leaderboard 等长期反馈面。[GH:readme]
- 通过 frontend/backend/packages 分层承载内容资源、用户、统计、反作弊/限流和部署能力；本轮依据 tree/manifest/CI 做静态判断，未启动服务核验每条路径。[GH:tree][GH:manifest]
- 允许扩展 language、quote、theme 等教育/内容资源，也支持社区 contribution 和 challenge/竞技类使用。[GH:docs][GH:readme]
- 官方仓库提供 frontend/backend Docker images 的 build/self-hosting 路径，可选择只运行 frontend 或完整前后端。[GH:docker][GH:docs]

这里的 5/5 表示对“通用 typing-test platform”的功能广度，不表示它在词汇教学、间隔复习、课程设计或教师管理上也是 5/5。

## 运行环境与资源占用

| 场景 | CPU | 内存 | 存储 | 说明 |
|------|-----|------|------|------|
| 在线前端练习 | 低至中等 | 低至中等 | 浏览器缓存 | hosted path 最易获得价值；本轮未测首屏、输入延迟或长 session RSS。 |
| 仅前端本地开发 | 2 cores 起步（启发式） | 中等 | pnpm store + build/cache | Node 24、pnpm 11、frontend package；可跳过数据库。[GH:manifest][GH:docs] |
| 完整自托管 | 2–4 cores 起步（启发式） | 2–4GB 起步（未实测） | Docker layers + MongoDB/Redis 数据/日志 | backend、数据库、Redis、reverse proxy、可选 Firebase；docs 明确 Docker 更 resource-intensive。[GH:docs][GH:docker] |

- **运行时**：Node 24 LTS line、pnpm 11.21.0；手动开发可分别启动 frontend/backend，默认开发端口为 3000/5005。[GH:manifest][GH:docs]
- **Docker**：`docker_support: true`。与只有 Dockerfile 的项目不同，官方仓库文档和 Compose 直接使用 `monkeytype/monkeytype-backend`、`monkeytype/monkeytype-frontend` 镜像命名及 quickstart。[GH:docker]
- **公网部署**：self-hosting docs 要求非 localhost 访问使用 HTTPS，并把 backend 放在 reverse proxy 后；`CF-Connecting-IP`/`X-Forwarded-For` 的信任边界必须按部署拓扑配置。[GH:docs][GH:security]
- **GPU**：不需要。
- **存储/备份**：账号、统计和 leaderboard 数据会引入数据库与配置 secret；本轮没有执行 backup/restore 演练。[GH:docs][GH:manifest]

performance 评分 3/5：浏览器输入本身可能很轻，但完整自托管明显比静态前端昂贵，且本轮没有 benchmark；在没有实测的情况下不把架构复杂度误报为 4/5 资源效率。

## 上手体验

评分 4/5。

普通学习者直接使用 hosted site 即可开始；设置和 mode 逐步打开，basic contribution 甚至允许只用 GitHub web UI 做 quote/language/theme 修改 [GH:readme][GH:docs]。这满足“短时间获得 typing value”的边界。

本地开发/自托管则是另一条路径：Node 24、pnpm、可选 Firebase、MongoDB、Redis、`.env`、backend configuration 和 Docker/HTTPS 配置都会增加 setup cost [GH:docs]。因此给整体 usability 4 而非 5：产品使用简单，工程运营不简单。

## 代码质量

评分 4/5。

证据明显高于本目录另外几个轻量前端：2,095 个 tree paths 中 frontend/backend/packages 分层，804 个 TypeScript/TSX 文件和 180 个 test/spec path；root manifest 暴露 frontend/backend/package 的 build、lint、type-check、test 脚本 [GH:tree][GH:manifest]。CI 还会按路径过滤，执行 Oxfmt/Oxlint、build 和 test，降低无关 job 的成本 [GH:ci]。

但 4/5 不是 5/5：本轮没有运行测试，当前 issue 仍有 copy/paste prevention event listener bug，且多服务/账号/反作弊/leaderboard 让集成边界复杂。CI 文件数量和 test path 数量是 evidence，不是实测 coverage 或生产正确性的替代品 [GH:issues][GH:ci]。

## 可扩展性

评分 4/5。

它有显著的 extension surface：languages、quotes、themes、custom settings、frontend/backend packages、configuration files 和 Docker deployment；贡献文档把低风险内容贡献与需要本地代码环境的功能贡献分开，说明扩展路径被产品化 [GH:readme][GH:docs][GH:tree]。

不给 5/5 是因为本轮没有看到一个面向第三方的稳定 plugin API/hook contract；深度接入新的 auth、storage、leaderboard policy 或 UI mode 仍需要理解并修改仓库内部 frontend/backend/packages。可配置性很强，不等于插件化很强。

## 文档质量

评分 4/5。

README 负责产品定位；CONTRIBUTING_BASIC/ADVANCED 将内容贡献、local development、Node/pnpm、Firebase、数据库和测试拆开；SELF_HOSTING 又单独写了 Docker、HTTPS、reverse proxy、account system、rate-limit headers 和 config files [GH:readme][GH:docs]。这已经覆盖普通用户、内容贡献者、代码贡献者和 self-hoster 四类角色。

扣分点是部署文档的复杂性本身：安全配置、Firebase/service account、Mongo/Redis 和环境变量一旦组合，仍需运维者自行做 secrets、backup、upgrade 和 topology review；文档有边界提醒，但不能替用户完成验证。[GH:docs][GH:security]

## 社区与成熟度

| 维度 | 评分 | 说明 |
|------|------|------|
| 社区活跃度 | 5/5 | 快照为 20,625 stars、3,300 forks、至少 100 个 contributors、health 87%，有 130 open PRs、持续 quote/docs/bug 修复活动，属于高活跃、多贡献者项目。[GH:api][GH:community][GH:issues] |
| 成熟度 | 4/5 | 2020 建仓，当前 release v26.32.0，持续 CI/发布和 self-hosting 文档；仍有活跃 feature/bug 流和多服务演进，故不按“长期冻结、无 breaking risk”给 5。[GH:api][GH:commit][GH:release][GH:ci][GH:issues] |

community 的 5/5 描述的是参与和响应生态，不替代 security/maturity 判断；成熟度 4/5 也不表示所有 release 都经过本轮运行验证。

## 安全与风险

评分 2/5。

这是本条目最重要的保守结论。GitHub advisory endpoint 在 2026-08-28 返回四条未撤回 advisory：包括 2024 的 critical CI workflow code-injection、2025 的 stored-XSS 条目，以及 2026-08-14 的 high rate-limit/anti-brute-force header spoofing 条目；API 对四条记录都未给出 `first_patched_version`，而较早条目只提供了上界式 vulnerable range。当前 release v26.32.0 不被本轮写成“仍然受所有条目影响”，因为至少旧条目列出的 vulnerable ranges 已停在旧版本；但 2026 条目的 affected version metadata、修复 commit、部署 topology 和当前 branch 适用性必须单独核验 [GH:advisories]。

缓解与风险边界：

1. 项目提供 `SECURITY.md` 和 self-hosting security guidance，要求 reverse proxy、HTTPS、backend 不直接暴露公网，并正确处理 forwarded headers；这是正面治理 evidence，但不是漏洞修复证明。[GH:security][GH:docs]
2. account system 引入 Firebase/service account、email/recaptcha、user data、MongoDB/Redis 和 secrets；完整部署的 attack surface 显著高于纯静态 typing app。[GH:docs][GH:manifest]
3. CI/CD 使用多种 GitHub Actions、artifact、Docker publish 和 repository token；历史 critical workflow advisory 说明 untrusted input/permissions 必须持续审计，不应把 CI 数量当安全性。[GH:advisories][GH:ci]
4. 当前 issue 仍有输入/剪贴板边界 bug；这不是 security advisory，但说明真实行为会偏离 settings/文档预期，生产升级仍需回归。[GH:issues]
5. GPL-3.0 适用于仓库代码；Firebase、MongoDB、Redis、quote/language/content 与镜像/第三方 action 仍需单独核对许可证和供应链边界。[GH:license][GH:manifest]

因此在线使用与公网自托管必须区分：前者是个人学习推荐，后者是 security review 后的工程采用。

## 学习价值

**很高，但偏平台工程。** Monkeytype 适合研究如何把一个看似简单的 typing loop 扩展成 mode/rule engine、content pipeline、progress/statistics、account/leaderboard、anti-cheat、frontend/backend API 和 self-hosting packaging [GH:readme][GH:tree][GH:manifest]。

对前端学习者，可以观察大量设置如何仍保持核心 typing interaction；对后端/DevOps 学习者，可以研究 Firebase、MongoDB、Redis、rate limit、reverse proxy、Docker Compose 和 path-filtered CI 如何拼成一个 product system [GH:docs][GH:ci]。但 security advisories 也提供了反面教材：forwarded-header trust、stored input、workflow artifact/input 和 permissions 都是必须显式建模的边界。它值得学，不应未经审查直接照搬到公网生产。
