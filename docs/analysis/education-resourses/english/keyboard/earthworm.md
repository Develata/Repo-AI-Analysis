---
title: "Earthworm"
created: 2026-08-28
updated: 2026-08-28
type: repository-analysis
repo_url: "https://github.com/cuixueshe/earthworm"
category: "education-resourses/english/keyboard"
tags: ["english-learning", "sentence-construction", "typing-practice", "course-platform", "nestjs", "vue", "self-hosted"]
previous_repo: ""
successor: ""
primary_language: "TypeScript"
license: "AGPL-3.0 (GitHub/root metadata; package manifests require separate review)"
stars: 11005
forks: 1342
last_checked: 2026-08-28
last_verified: 2026-08-28
evidence: "Authenticated GitHub API + bilingual README/docs/changelog + recursive tree, manifests, Compose/CI and issue/PR review; no local install, service startup, browser smoke test, or benchmark"
archived_reason: ""
docker_support: false
gpu_required: false
estimated_cpu: "前端练习低至中等；完整 API + Postgres + Redis + Logto 自托管约 2–4 cores（启发式，未压测）"
estimated_memory: "完整自托管至少中等至偏高；Postgres/Redis/Logto/Node 组合在 768MB VPS 上风险高（启发式，未实测）"
estimated_storage: "仓库 size=224,342 KB；还需数据库/course data、Docker volumes、assets 与日志，实际占用未测"
status: active
ratings:
  capability: 4
  usability: 2
  performance: 2
  code_quality: 3
  documentation: 3
  community: 3
  maturity: 2
  extensibility: 3
  security: 2
  recommendation: 3
overall_score: 2.7
sources:
  - "[GH:api] https://api.github.com/repos/cuixueshe/earthworm queried 2026-08-28: public, not archived/disabled, default_branch=main, created_at=2024-01-11T03:46:38Z, updated_at=2026-08-28T12:02:50Z, pushed_at=2024-11-14T23:35:15Z, stars=11005, forks=1342, open_issues_count=13, language=TypeScript, license=AGPL-3.0, size=224342 KB, homepage=https://julebu.co"
  - "[GH:commit] GitHub commits API queried 2026-08-28: latest main commit eb7afc945def0b4b71c64a21354c1b60970e2495, dated 2024-08-19T14:22:55Z, release(game-data-sdk): v1.0.11"
  - "[GH:tree] GitHub recursive tree API queried 2026-08-28: 553 blob paths; 320 under apps, 202 under packages, 229 TypeScript/TSX files, 56 test/spec paths, one CI workflow, no Dockerfile, no SECURITY.md and no CONTRIBUTING.md observed; apps/client/README.md is only a three-line placeholder"
  - "[GH:readme] README.md and README.zh-CN.md inspected 2026-08-28: English learning through constructing sentences with conjunctions; documents Node >=20.12.2, Postgres >=14, Redis >=5, Docker Compose, database initialization, Logto/auth configuration, course data and test commands"
  - "[GH:api-docs] apps/api/README.md and apps/client/README.md inspected 2026-08-28: API README is largely a Nest starter-style document while client README provides no substantive architecture or user guidance"
  - "[GH:manifest] root package.json, apps/api/package.json, apps/client/package.json and pnpm-lock.yaml inspected 2026-08-28: pnpm@9.3.0, Node >=20.12.2, API/client app split, database/schema/build/test scripts, Postgres/Redis/Logto-related dependencies; root package declares ISC while apps/api declares UNLICENSED"
  - "[GH:changelog] CHANGELOG.md inspected 2026-08-28: records 1.0.0-era feature/release notes and repeated version entries, useful as project history but not a current release registry"
  - "[GH:ci] .github/workflows/ci.yaml inspected 2026-08-28: test job provisions Postgres 14 and Redis 6.2.5, runs pnpm install, database initialization, schema build and pnpm test:ci; committed workflow also contains credential-like environment literals, exact values intentionally omitted"
  - "[GH:compose] docker-compose.yml inspected 2026-08-28: Compose supplies database/cache/auth-related services and test infrastructure; no application Dockerfile or published official Earthworm image was verified"
  - "[GH:community] GitHub community/profile and contributors endpoint queried 2026-08-28: health_percentage=50; contributors endpoint returned 64 entries, with cuixiaorui contributing the largest sampled share"
  - "[GH:issues] GitHub search/issues API queried 2026-08-28: open issues=2 and open PRs=11; sampled current items include commercial/license risk (#783), homepage availability (#782), a Vietnamese localization PR (#781) and a Docker deployment question (#774)"
  - "[GH:release] GitHub releases endpoint queried 2026-08-28: returned []; no GitHub Release object was observed in this check, although CHANGELOG.md contains historical version notes"
  - "[GH:advisories] GitHub repository security-advisories endpoint queried 2026-08-28: returned []; this is only a negative lookup result, not an independent safety audit"
  - "[GH:license] Root LICENSE and manifests inspected 2026-08-28: root LICENSE/GitHub metadata identify AGPL-3.0, root package.json says ISC, and apps/api/package.json says UNLICENSED; directory-level license interpretation is unresolved"
  - "[GH:comparisons] Same-batch positioning checks for Qwerty Learner, TypeWords, Monkeytype and keybr.com on 2026-08-28; peer README/API evidence is used only for the comparison table, not a second 10-dimension audit"
---

# Earthworm

> 一个以“用连词构造句子”为核心的英语学习 monorepo：输入动作服务于 sentence construction、课程内容和用户学习进度，而不是单纯追求 WPM。
>
> **状态**: `active` · **总分**: 2.7/5 · **推荐度**: 3/5
>
> **验证边界**：本轮使用 GitHub API、双语 README、API/client 文档、CHANGELOG、递归 tree、manifest、Compose、CI 和 issue/PR 静态审阅；未本地启动 Node/API/Postgres/Redis/Logto、未浏览器 smoke test、未压测。

## 一句话总结

Earthworm 更像“带键盘输入的句子构造英语课程平台”，适合研究英语句法/连词和课程型学习流，不应被误当作 Monkeytype 或 keybr.com 那类纯 typing tutor。[GH:readme]

## 总体评价

Earthworm 的教育设计区别很明确：README 将学习方法定义为通过 conjunctions 构造 sentences，仓库把 client、API、packages、course data、schema、认证和数据库初始化组织在一个 TypeScript monorepo 中 [GH:readme][GH:tree]。这使它在课程/内容/账户/学习进度的 capability 上有潜力，且不是只把一段文本放进 input box。

代价是运行边界较重且当前可验证性不足。README 要求 Node、Postgres、Redis、Docker，另有 Logto 配置和 database/schema 初始化；Compose 更像本地基础设施编排，而不是已验证的一键应用镜像 [GH:readme][GH:compose]。默认分支最后代码提交在 2024-08，最新 push 在 2024-11，但 2026 仍有 issue/PR 活动；因此 lifecycle 标为 active，maturity 只给 2/5 [GH:api][GH:commit][GH:issues]。

更重要的是，许可证与 secrets 边界不能略过：GitHub/root LICENSE 是 AGPL-3.0，root package 是 ISC，API package 是 UNLICENSED；CI YAML 还存在 credential-like environment literals。公开 issue 直接询问商用侵权风险和官网可用性，说明这不是只需补几行 UI 的 adoption decision [GH:license][GH:ci][GH:issues]。

## 推荐度：3/5

**定位**：推荐给想研究“句子构造 + keyboard input + course/backend”组合的教育产品开发者，或能接受复杂自托管与许可证核对的英语学习者；不把它作为当前小服务器上的 turnkey 个人 typing service。

给 3/5 是因为教育理念差异化、monorepo 具备 API/client/packages/course 的可研究结构，README 也给出一条从 Docker service 到数据库初始化再到测试的路径 [GH:readme][GH:tree]。如果目标是 sentence-level language learning，而不是 WPM，方向是对的。

不给 4/5 的原因是 adoption blockers 同时存在：代码新鲜度低、官网 availability 有开放问题、完整运行需要多服务、client/API 文档不均衡、商用许可证解释未闭合，CI 中还有需先确认性质、并可能需要轮换/清理的 credential hygiene 风险 [GH:issues][GH:api-docs][GH:license][GH:ci]。在这些问题解决前，更适合试验/研究，不适合作为无审查的生产底座。

## 优势

1. **学习对象有层次**：以连词和句子构造为中心，比随机单词或单纯 WPM 能承载更多语法/表达训练。[GH:readme]
2. **平台面完整**：apps、packages、API、client、course data、schema、认证和进度存储同处一个仓库，适合研究端到端教育产品。[GH:tree][GH:manifest]
3. **本地测试链存在**：CI 会启动 Postgres/Redis，执行数据库初始化、schema build 和 test:ci，不是完全没有自动化验证。[GH:ci]
4. **内容与本地化可扩展**：README/CHANGELOG 与近期 Vietnamese localization PR 表明课程/语言资源是实际贡献面。[GH:changelog][GH:issues]
5. **社区仍有信号**：11,005 stars、1,342 forks、64 contributors，且 2026 仍有 PR/issue；项目未被 GitHub 官方归档。[GH:api][GH:community][GH:issues]

## 劣势

1. **上手链路重**：Node、Postgres、Redis、Docker、Logto、env、database schema 和 course data 组合，对普通学习者远超 30 分钟内获得价值的边界。[GH:readme][GH:compose]
2. **代码新鲜度与产品可用性不确定**：默认分支最新 commit 在 2024-08，最新 push 在 2024-11；2026 的 issue 仍询问官网是否关闭。[GH:api][GH:commit][GH:issues]
3. **文档不均衡**：双语根 README 较详细，但 API README 接近 Nest starter 文档，client README 只有占位内容，架构和贡献入口不足。[GH:readme][GH:api-docs]
4. **许可证信号冲突**：AGPL-3.0、ISC、UNLICENSED 同时出现；商用或修改后部署不能只看 GitHub license badge。[GH:license][GH:issues]
5. **部署与安全边界未闭合**：Compose 提供基础设施而非已核实的 application image，CI 中出现 credential-like literals；本轮未做 secret rotation、权限、Logto、数据库暴露面审计。[GH:compose][GH:ci]

---

## 适合什么场景

- 需要练习英语句子、连词、语序和逐句输入，而不是只提升英文打字速度。
- 教育产品开发者研究 course content、sentence model、API、progress、auth 和 database 的组合。
- 有能力维护 Node + Postgres + Redis + Logto/Docker 的开发者，做本地二次开发或课程原型。
- 想研究一个“输入动作是语言学习机制一部分”的 monorepo，并愿意自行补齐文档/测试/安全门禁。
- 贡献课程、本地化或后端功能前，能先确认许可证、数据来源和维护状态。

## 不适合什么场景

- 只想打开网页马上练 WPM/accuracy/leaderboard；Monkeytype 更直接。
- 只想背单词、发音、词根或文章；TypeWords/Qwerty Learner 更贴近。
- 只想用一个低资源 VPS 自托管个人 typing tool；这套多服务栈对 768MB 机器不友好。[GH:readme][GH:compose]
- 需要稳定、持续发布、清晰 commercial license 和完整 API/client 文档的组织，且不愿先做法律与安全审查。
- 认为 2026 的 issue/PR activity 可以抵消默认分支长期无代码提交；维护交互和代码成熟度必须分开判断。[GH:api][GH:commit][GH:issues]

## 与类似项目对比

| 项目 | 定位 | 相对本项目 |
|------|------|-----------|
| Qwerty Learner | 词库、发音/听写与 word-level typing | Qwerty Learner 的最小对象是词汇和输入动作，部署偏前端；Earthworm 更重句子构造、课程和服务端状态。 |
| TypeWords | 单词/文章背诵与 typing | TypeWords 更适合个人本地单词/文章复习；Earthworm 更像多服务课程平台，但 setup 和维护成本更高。 |
| Monkeytype | 通用 typing test、统计与竞技 | Monkeytype 以速度/准确率/统计为核心且 hosted first-run 更短；Earthworm 牺牲轻量性换句子/课程/账户模型。 |
| keybr.com | 按弱键自适应的 touch-typing tutor | keybr.com 训练 key-level motor skill；Earthworm 训练 sentence construction，键盘输入不是唯一目标。 |

上述项目均按 `education-resourses/english/keyboard/` 的英语学习/键盘练习范围做定位级对比；依据同批 GitHub README/API 快照，未把竞品重新按本条目的 10 维度框架深审。[GH:comparisons]

---

## 它能做什么

**能力评分：4/5。**

- 用 conjunctions 构造 sentences，把英语表达和逐步输入结合为核心学习交互。[GH:readme]
- 通过 client/API、course data、schema、database initialization 和用户系统承载课程与进度，而不是只有静态页面。[GH:tree][GH:manifest]
- 提供本地 Docker service、Postgres/Redis 依赖、Logto/auth 配置、开发/生产 serve 和测试命令；这些是仓库文档/配置提供的路径，本轮未启动验证。[GH:readme][GH:compose]
- 具备本地化和课程资源扩展的潜在入口；近期 PR 包含 Vietnamese localization，CHANGELOG 也保留历史功能记录。[GH:issues][GH:changelog]

它的 4/5 是针对“课程型英语句子输入平台”的能力广度，不表示内容质量、课程有效性或当前公网服务可用性已经被本轮验证。尤其 client README 缺少实质信息，不能从 apps 目录名推断所有用户流程都已闭合。[GH:api-docs]

## 运行环境与资源占用

| 场景 | CPU | 内存 | 存储 | 说明 |
|------|-----|------|------|------|
| hosted learner | 未验证 | 未验证 | 取决于官方服务 | homepage 在 metadata 中，但本轮未浏览器验证 `julebu.co`。[GH:api] |
| 前端/后端开发 | 2 cores 起步（启发式） | 中等 | Node modules + course/assets | Node >=20.12.2、pnpm 9；apps/client 与 apps/api 分离。[GH:readme][GH:manifest] |
| 完整自托管 | 2–4 cores 起步（启发式） | 中等至偏高，768MB VPS 风险高 | Postgres/Redis/Logto volumes + DB/course data + logs | README/Compose 需要多项 service；本轮未压测。[GH:readme][GH:compose] |

- **运行时**：Node >=20.12.2、pnpm 9.3.0；API 使用数据库/schema/test 相关脚本，client 另有 build/dev 路径。[GH:manifest]
- **数据库/缓存/认证**：README 与 Compose 提到 Postgres、Redis、Logto；完整服务面明显高于静态前端。[GH:readme][GH:compose]
- **Docker**：`docker_support: false`。Docker Compose 是实际的基础设施/本地编排支持，但本轮未见应用 Dockerfile 或已核实的 official Earthworm image；不能将 service Compose 等同于官方应用镜像。[GH:tree][GH:compose]
- **GPU**：不需要。
- **存储**：仓库 GitHub size 已达 224,342 KB，还不包括数据库、课程资源、volume 和日志；不能把 repo size 当作完整部署成本。[GH:api]

performance 评分 2/5：多服务和数据库组合在本目录个人学习项目中资源效率偏低，且 768MB VPS 很可能需要裁剪/外置服务；由于没有实际 benchmark，这个判断是基于架构成本的保守估计，不是实测峰值。

## 上手体验

评分 2/5。

文档确实给出路径：准备 Node/Postgres/Redis/Docker，启动 Compose，初始化数据库/schema，再启动 client/API；对熟悉 full-stack 的开发者可复现，且 README 有中英文说明 [GH:readme]。CI 也把 test database 的启动和初始化命令显式写出，避免完全靠猜 [GH:ci]。

但对学习者或第一次接触项目的人，门槛过高：Logto/env、课程数据、数据库迁移、多个 service 和可能的官网不可用 issue 会把“练英语”转成“运维一个系统” [GH:readme][GH:issues]。API README 与 client README 又不能补足架构引导，所以是 2/5，而不是因为“有 README”给 3/5。

## 代码质量

评分 3/5。

monorepo 的 app/package 划分、229 个 TypeScript/TSX 文件、56 个 test/spec path、数据库 schema 及 CI test job 都是正面证据 [GH:tree][GH:manifest][GH:ci]。README 也暴露了 db:init、schema:build、test:ci 等可操作脚本，至少存在一定 engineering workflow [GH:readme]。

扣分来自维护和质量信号：默认分支代码提交停在 2024-08，当前 issue 仍有部署/产品疑问；API 文档近似 starter，client 文档是 placeholder，CI 还把 lint/build job 作为注释保留而非 active gate [GH:commit][GH:issues][GH:api-docs][GH:ci]。因此代码可研究但维护成本和实际闭环不确定，给 3/5。

## 可扩展性

评分 3/5。

apps/client、apps/api、packages、schema、course data 和 i18n/本地化 PR 形成了自然的扩展面：可以增加课程/语言、改 API、改 client，或接入新的 database/content flow [GH:tree][GH:issues]。对于愿意 fork/修改 monorepo 的开发者，空间不小。

但本轮未发现面向第三方的稳定 plugin system、公开 API contract 或完整 course-authoring guide；client README 为空，许可证和数据模型又需要逐目录核对。可扩展性主要是“能够改源码”，而不是“无需 fork 即可安全扩展”，所以是 3/5 [GH:api-docs][GH:license]。

## 文档质量

评分 3/5。

根 README/中文 README 覆盖产品理念、依赖、Docker、数据库初始化、Logto、测试和常见错误；CHANGELOG 也提供历史上下文 [GH:readme][GH:changelog]。这些足以让有经验的 Node 开发者形成初步运行路径。

不过文档质量高度不均：apps/api README 仍主要是 Nest starter-style 内容，apps/client README 只有三行，缺少 API contract、课程作者指南、架构图、生产 backup/upgrade 和安全部署说明 [GH:api-docs][GH:tree]。因此文档是可读但不够可靠的 3/5。

## 社区与成熟度

| 维度 | 评分 | 说明 |
|------|------|------|
| 社区活跃度 | 3/5 | 快照为 11,005 stars、1,342 forks、64 contributors、health 50%，2026 仍有 2 open issues/11 open PRs；存在本地化和部署讨论，但响应/代码持续性不足以给 4。[GH:api][GH:community][GH:issues] |
| 成熟度 | 2/5 | GitHub 建仓 2024，默认分支最新 commit 为 2024-08-19、最新 push 为 2024-11-14，无 GitHub Release 对象；2026 issue activity 说明仍有人关心，不说明版本/API 已稳定。[GH:api][GH:commit][GH:release][GH:issues] |

`status: active` 只表示仓库未归档且仍有维护交互；它与 maturity 2/5 不矛盾。对采用者来说，必须把“有人提交 localization PR”和“核心代码持续维护”分开核验。

## 安全与风险

评分 2/5。

GitHub security-advisories endpoint 本轮返回空，但这不是安全证明 [GH:advisories]。相反，CI workflow 中出现 credential-like environment literals，且 README/Compose 使用默认或示例配置；这些值应先经 secret scan/历史审计确认是 placeholder、test credential 还是曾经暴露的 active secret。若确认属于后两者，应立即 revoke/rotate 并改用 secret store；在确认前不把它们定性为已生效凭据 [GH:ci][GH:compose]。

主要风险：

1. **认证/服务面较大**：Logto、API、Postgres、Redis、session/user data 和公网 homepage 的组合需要明确 trust boundary、TLS、CORS、rate limit、backup 和最小权限；本轮没有动态审计。[GH:readme][GH:compose]
2. **许可证风险不是安全风险，但会阻断 adoption**：AGPL-3.0、ISC、UNLICENSED 的冲突必须逐目录解析；开放 issue 已明确提出商用侵权风险。[GH:license][GH:issues]
3. **治理缺口**：tree 中未观察到 SECURITY.md 或 CONTRIBUTING.md，漏洞披露与贡献流程缺少清晰的一手入口。[GH:tree]
4. **依赖/数据风险**：课程内容、翻译、database dump、第三方 auth/service 及 npm 依赖需要分别审阅；本轮未做 pnpm audit、secret scan、container scan 或权限审计。[GH:readme][GH:manifest]
5. **代码停更与服务状态**：官网 availability issue 与老旧核心 commit 会放大未修复配置/依赖漏洞的风险。[GH:commit][GH:issues]

因此安全评分 2/5 并不是因为“没有 GHSA”，而是基于可见的高权限多服务面、credential hygiene 和治理/维护缺口。

## 学习价值

**中高，但更偏 full-stack education engineering。** Earthworm 值得研究的地方是它试图把 sentence construction、course content、client interaction、API、auth、database、schema 和 progress 组合成一个 learning platform [GH:readme][GH:tree]。这比单纯 typing loop 更接近真实教育产品的状态建模问题。

同时，它是一份很好的边界教材：apps/client 的文档 placeholder、API starter-style README、默认分支停更、Compose 多服务、许可证冲突和 CI secret hygiene 都提醒学习者，产品理念、目录结构、可运行系统、合法部署和安全运维不是同一件事 [GH:api-docs][GH:commit][GH:license][GH:ci]。若用于学习，建议先隔离 secrets、澄清 license、补 API/client contract 和 migration tests，再把 sentence model 迁移到自己的小型原型中。
