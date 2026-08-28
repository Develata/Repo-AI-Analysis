---
title: "keybr.com"
created: 2026-08-28
updated: 2026-08-28
type: repository-analysis
repo_url: "https://github.com/aradzie/keybr.com"
category: "education-resourses/english/keyboard"
tags: ["touch-typing", "adaptive-learning", "keyboard", "english-learning", "typescript", "self-hosted"]
previous_repo: ""
successor: ""
primary_language: "TypeScript"
license: "AGPL-3.0"
stars: 4665
forks: 453
last_checked: 2026-08-28
last_verified: 2026-08-28
evidence: "Authenticated GitHub API + README/docs/license + recursive tree and package/server/Docker/CI review; no local install, browser smoke test, or benchmark"
archived_reason: ""
docker_support: false
gpu_required: false
estimated_cpu: "浏览器练习低；本地 compile/build/server 约 1–2 cores 起步（启发式，未压测）"
estimated_memory: "单机 SQLite 运行时可能低至中等；Node build/test 峰值未实测"
estimated_storage: "仓库 size=45,636 KB；另需 npm modules、build 产物、SQLite/服务端数据与日志，实际占用未测"
status: active
ratings:
  capability: 5
  usability: 4
  performance: 3
  code_quality: 3
  documentation: 4
  community: 3
  maturity: 3
  extensibility: 4
  security: 3
  recommendation: 4
overall_score: 3.6
sources:
  - "[GH:api] https://api.github.com/repos/aradzie/keybr.com queried 2026-08-28: public, not archived/disabled, default_branch=master, created_at=2023-09-25T06:58:26Z, updated_at=2026-08-28T03:10:41Z, pushed_at=2026-04-13T22:00:00Z, stars=4665, forks=453, open_issues_count=320, language=TypeScript, license=AGPL-3.0, size=45636 KB, homepage=https://www.keybr.com/"
  - "[GH:commit] GitHub commits API queried 2026-08-28: latest master commit 541eb0a5f010ead7ce4c580c0bb0d5bb2519185c, dated 2026-04-13T21:52:05Z, fixes errors in the last PR"
  - "[GH:tree] GitHub recursive tree API queried 2026-08-28: 3,003 blob paths; 2,897 under packages, 1,303 TypeScript/TSX files, 262 test/spec paths, one CI workflow, Dockerfile, docker-compose.yaml, package-lock.json, 8 docs paths, and no SECURITY.md or CONTRIBUTING.md observed"
  - "[GH:readme] README.md inspected 2026-08-28: tracks every keystroke and per-key statistics, generates lessons focused on weakest keys, uses target speed and progressive letter addition, predicts remaining lessons, provides profile graphs/modes/configuration, and invites translation/custom keyboard/language contributions"
  - "[GH:docs] docs/getting_started.md, docs/custom_keyboard.md, docs/custom_language.md and docs/translations.md inspected 2026-08-28: Node 24/npm setup, env file, compile/build/test/initdb/start path, Docker limitation, keyboard layout schema, custom language data and translation workflow"
  - "[GH:manifest] root package.json, packages/server/package.json and package workspace tree inspected 2026-08-28: npm workspaces for packages/* and scripts, server package includes database/highscores/oauth/multiplayer/Paddle dependencies, test scripts and TypeScript compile path"
  - "[GH:ci] .github/workflows/ci.yml inspected 2026-08-28: Node 24/npm ci, compile, lint, stylelint, build and test run on push/pull request with SQLite test environment"
  - "[GH:community] GitHub community/profile and contributors endpoint queried 2026-08-28: health_percentage=42; contributors endpoint returned its first 100 entries (at least 100 observed), with aradzie contributing the largest sampled share"
  - "[GH:issues] GitHub search/issues API queried 2026-08-28: open issues=295 and open PRs=25; sampled current items include keyboard-layout option #521, biased Natural Words selection #555, assigned-keyboard feature #633, guided lessons #631 and sticky-shift behavior #626"
  - "[GH:release] GitHub releases endpoint queried 2026-08-28: returned []; no GitHub Release object was observed in this check"
  - "[GH:advisories] GitHub repository security-advisories endpoint queried 2026-08-28: returned []; this is only a negative lookup result, not an independent safety audit"
  - "[GH:license] Root LICENSE and README inspected 2026-08-28: GNU Affero General Public License version 3.0; root package.json declares the shorthand GPL-3, so manifest and root-license labels should be reconciled before redistribution"
  - "[GH:docker] docs/getting_started.md, Dockerfile and docker-compose.yaml inspected 2026-08-28: Docker/Compose deployment recipe exists with exposed port 3000, but no published official application image was verified; docker_support is therefore false"
  - "[GH:comparisons] Same-batch positioning checks for Qwerty Learner, TypeWords, Monkeytype and Earthworm on 2026-08-28; peer README/API evidence is used only for the comparison table, not a second 10-dimension audit"
---

# keybr.com

> 不是“把一段文字打完”这么简单：keybr.com 追踪每个按键，计算 key-level statistics，并持续生成聚焦 weakest keys 的自适应 touch-typing lessons。
>
> **状态**: `active` · **总分**: 3.6/5 · **推荐度**: 4/5
>
> **验证边界**：本轮使用 GitHub API、README/docs/license、递归 tree、package/server/Docker/CI 和 issue/PR 静态审阅；未本地安装、未初始化 SQLite、未启动 server、未浏览器 smoke test、未做输入延迟/负载 benchmark。

## 一句话总结

keybr.com 是这组项目里最纯粹、算法目标最清晰的 touch-typing tutor：它不先教词义，而是根据每个键的实际表现生成下一步练习。[GH:readme]

## 总体评价

keybr.com 的核心 loop 不是固定文章或随机 WPM test，而是“记录每个 keystroke → 计算每键统计 → 找 weakest keys → 生成 lesson → 逐步加入字母 → 追踪 target speed”。README 明确列出这些机制，并用 profile graphs 反馈长期进度 [GH:readme]。这使它在 keyboard motor skill 和自适应练习上的 capability 达到本目录最高一档。

仓库实现也不是单页面 demo：3,003 个 tree paths 主要放在拆分的 packages 中，包含 keyboard、generators、content、database、result、charts、server、OAuth、multiplayer、highscores、intl 和页面层；CI 会执行 compile、lint、stylelint、build、test [GH:tree][GH:manifest][GH:ci]。与此同时，package 版本仍为 0.0.0、没有 GitHub Release 对象，开放 issue 达 295，且 current issue 仍讨论 layout、word selection 和 guided lessons；因此代码可研究、产品可用，但维护成本和问题闭环不能被 README 的“smartest”表述覆盖 [GH:issues][GH:release]。

它最适合想纠正击键弱项的人，不是想背考试词汇或学习句法的人。AGPL-3.0、OAuth/multiplayer/payment/server 等扩展面也意味着自托管者必须把许可证和安全边界单独审阅 [GH:license][GH:manifest]。

## 推荐度：4/5

**定位**：推荐给需要系统训练 touch typing、定位弱键、观察每键进步和自定义 keyboard/language 的学习者；如果目标是英语词汇记忆、文章背诵或课程教学，应转向同目录的词汇/句子型项目。

给 4/5 的原因是核心教育算法与目标高度一致，hosted path 的 first-run 简单，custom keyboard/language/docs 也让它不局限于一种英语键盘；对“我总在某几个键上出错，想要针对性训练”的用户，匹配度很高 [GH:readme][GH:docs]。

不给 5/5 的原因是 repo-side adoption 仍有明显摩擦：本地开发要求 Node 24、npm、env、compile/build/test、initdb 和 server；大 monorepo 有 295 open issues、25 open PRs，且无 GitHub Release。在线练习和自托管工程体验必须分开评价 [GH:docs][GH:issues][GH:release]。

## 优势

1. **按键级反馈**：不是只给总 WPM，而是追踪每个 keystroke 和 individual-key statistics。[GH:readme]
2. **真正自适应**：lesson 聚焦 weakest keys，并按 target speed/letter mastery 逐步扩大字符集。[GH:readme]
3. **可观察的学习进度**：预测剩余 lesson 数、profile graphs 和 key charts 让学习过程可解释。[GH:readme][GH:tree]
4. **键盘/语言扩展明确**：官方 docs 直接写 custom keyboard、custom language 和 translation 路径，而不是只允许改源码。[GH:docs][GH:readme]
5. **工程拆分与测试证据较强**：大量 packages、262 个 test/spec path、SQLite test CI、compile/lint/style/build/test 链路，适合作为 TypeScript monorepo 样本。[GH:tree][GH:ci]

## 劣势

1. **不是词汇学习工具**：生成的 lesson 服务 key motor skill，不负责词义、词根、文章语境或考试词库记忆。[GH:readme][GH:comparisons]
2. **本地上手不轻**：Node 24、npm、env、数据库初始化、build 和 server 组合，对只想练习的用户多余。[GH:docs]
3. **问题 backlog 偏大**：295 open issues 包括布局、word selection、guided lessons 和键盘 preview 等核心体验问题，说明功能边界仍在迭代。[GH:issues]
4. **版本/发布信号弱**：packages 使用 0.0.0，GitHub releases endpoint 未返回 release；升级和部署者需要自己锁定 commit/依赖并做回归。[GH:manifest][GH:release]
5. **自托管有许可证与服务面成本**：AGPL-3.0，server 还涉及 OAuth、multiplayer、highscores、Paddle/payment 等依赖；不能按一个静态练习页部署。[GH:license][GH:manifest]

---

## 适合什么场景

- 初学 touch typing，想从高频少量字母开始，按达到 target speed 再逐步加入更多字母。
- 已经能打字但某些 key/shift/layout 持续出错，需要 key-level diagnosis 和 targeted lesson。
- 想研究自适应练习算法、键盘 layout data、per-key result model、charts 和学习进度可视化。
- 需要自定义键盘布局、语言、词语生成规则或翻译资源的学习者/贡献者。
- 想在本地运行一个带 SQLite、profile、stats、server/package 边界的完整 TypeScript 应用，并能接受 AGPL。

## 不适合什么场景

- 目标是 CET/GRE/IELTS 词汇、词根、发音、听写或文章背诵；Qwerty Learner/TypeWords 更合适。
- 目标是句子构造、连词、课程进度或语言表达教学；Earthworm 更接近。
- 只想参加高度竞技化、quote/mode/leaderboard 丰富的通用 typing test；Monkeytype 更直接。
- 不想安装 Node 24、npm 或处理 env/database/initdb，只需打开网页练 10 分钟的用户；应优先使用 hosted site。[GH:docs]
- 需要一个有稳定 release/API、低 issue backlog、官方 container image 的生产服务，而不愿自行维护 commit/依赖/AGPL 合规边界。

## 与类似项目对比

| 项目 | 定位 | 相对本项目 |
|------|------|-----------|
| Qwerty Learner | 英语词库/发音/听写 + word-level typing | Qwerty Learner 练真实英语词汇和 spelling recall；keybr.com 以 key statistics 和 weakest-key lesson 为核心。 |
| TypeWords | 单词/文章背诵 + typing | TypeWords 把词义、文章、Smart/Free mode 与本地复习结合；keybr.com 更专注击键动作和 layout progression。 |
| Monkeytype | 通用 typing test、速度/准确率/竞技 | Monkeytype 让用户配置测试模式、quotes、统计和 leaderboard；keybr.com 主动决定下一课练哪些弱键。 |
| Earthworm | 连词构句和句子课程 | Earthworm 的目标是 sentence-level English learning；keybr.com 的目标是键盘 motor skill，语言内容主要服务生成练习文本。 |

上述项目均按 `education-resourses/english/keyboard/` 的英语学习/键盘练习范围做定位级对比；依据同批 GitHub README/API 快照，未把竞品重新按本条目的 10 维度框架深审。[GH:comparisons]

---

## 它能做什么

**能力评分：5/5。**

- 追踪每个 keystroke，计算每个 key 的速度/准确率等 statistics，并用它们判断训练重点。[GH:readme]
- 自动生成聚焦 weakest keys 的 lesson；起初只引入语言中高频的小字符集，达到 target speed 后再加入更多字母。[GH:readme]
- 允许设置 target typing speed，显示进度并预测还需要多少 lessons 才能达到目标。[GH:readme]
- 提供 profile page、graphs、key charts、modes 和 configuration，让学习者能观察长期变化。[GH:readme][GH:tree]
- 通过 custom keyboard、custom language、translations、content words/books/quotes 和 server/profile/package 层扩展训练内容与平台能力。[GH:docs][GH:manifest][GH:tree]

这个 5/5 是针对“自适应 touch-typing tutor”的能力广度：它不意味着词汇教学、文章理解、教师课程管理或通用在线竞技也有同等深度。

## 运行环境与资源占用

| 场景 | CPU | 内存 | 存储 | 说明 |
|------|-----|------|------|------|
| 在线练习 | 低至中等 | 低至中等 | 浏览器缓存 | 适合直接使用 hosted site；本轮未测输入 latency、长 session RSS 或网络质量。 |
| 本地开发/测试 | 1–2 cores 起步（启发式） | 中等至偏高，build/test 峰值未测 | npm modules + build/cache + SQLite | Node 24、npm install、compile/build/test/initdb/start；packages 数量和测试面较大。[GH:docs][GH:manifest] |
| 单机部署 | 1–2 cores 起步（启发式） | 低至中等运行时，取决于 OAuth/multiplayer | SQLite 数据、assets、logs | server package 可用 SQLite test env；Docker/Compose 需要自行核对生产 volume 和 external services。[GH:manifest][GH:ci][GH:docker] |

- **运行时**：NodeJS v24；README 文档给出 `npm install`、复制 `.env.example`、compile/build/test、initdb、`npm start`，默认 localhost:3000。[GH:docs]
- **数据库**：CI 用 `DATABASE_CLIENT=sqlite`，server package 依赖 database/result/highscores 等模块；本轮未实际初始化或检查迁移。[GH:manifest][GH:ci]
- **Docker**：`docker_support: false`。仓库确实有 Dockerfile/Compose deployment recipe，但本轮没有核实 published official application image；“能用 Docker 构建”与“官方镜像支持”按 skill 规则分开。[GH:docker]
- **GPU**：不需要。
- **存储/合规**：单机 SQLite 可能比 Mongo/Redis 多服务轻，但账号、OAuth、multiplayer、highscores、payment 等功能会增加数据/secret/网络边界；AGPL-3.0 对服务分发和修改使用需另行咨询。[GH:manifest][GH:license]

performance 评分 3/5：相对多服务 typing platform，单机 SQLite 形态有资源优势；但没有实测 benchmark，Node build/test、charts、server、多用户与 websocket 场景不能凭目录推断为高效。

## 上手体验

评分 4/5。

在线学习者无需理解内部 packages；README 的 hosted link 和极简核心交互让直接试用很短 [GH:readme]。贡献者也有清晰的 custom keyboard/language/translation 指南，知道应该改哪里 [GH:docs]。

本地开发路径则要求 Node 24、npm install、env、compile/build/test、initdb、start，Docker 还受 exposed port 3000 的限制 [GH:docs][GH:docker]。因此是“产品上手好、工程上手需文档”的 4/5，不是 zero-config 的 5/5。

## 代码质量

评分 3/5。

正面证据很强：3,003 个 tree paths 以 packages 为主，1,303 个 TypeScript/TSX 文件、262 个 test/spec path，server package 将 database、result、oauth、multiplayer、settings、pages 等职责拆开；CI 依次执行 npm ci、compile、lint、stylelint、build、test [GH:tree][GH:manifest][GH:ci]。

但 score 需要反映维护现实：open issues=295，当前仍有 keyboard/layout、word selection、guided lesson 和 shift 行为问题；package version 0.0.0、无 release，且本轮没有本地执行 CI 命令。结构和测试入口足以给 3/5，但不足以证明所有用户 flow 稳定，更不能忽略 backlog。[GH:issues][GH:release]

## 可扩展性

评分 4/5。

custom keyboard、custom language、translations、word/book/quote content、workspace packages 和 server APIs 构成清晰扩展面；贡献文档直接把增加 keyboard/language 作为支持的工作流 [GH:docs][GH:readme]。这比只改一段 hard-coded text 的 typing demo 更可维护。

不给 5/5 是因为本轮未看到面向第三方的完整 plugin marketplace 或稳定 public API contract；要加新的 adaptive algorithm、auth provider、multiplayer rule、payment integration 或 server behavior，仍需要改 packages/server 和相关内部模块。可扩展性强，但不是无 fork 的插件平台。[GH:manifest]

## 文档质量

评分 4/5。

README 直接解释算法/学习机制和贡献入口；getting_started 给出 Node/npm/env/compile/build/test/initdb/start，custom keyboard/language/translation 文档覆盖三类内容扩展 [GH:readme][GH:docs]。对于一个 monorepo，这种按任务拆分的引导已经足够实用。

缺口是 production operations：Docker port limitation、SQLite/外部服务、OAuth/payment secret、backup/upgrade、release/migration 和安全披露没有形成完整运维手册；README 说能做什么很清楚，但生产如何长期运行仍需读源码和自行验证 [GH:docs][GH:manifest]。

## 社区与成熟度

| 维度 | 评分 | 说明 |
|------|------|------|
| 社区活跃度 | 3/5 | 快照为 4,665 stars、453 forks、contributors endpoint 至少 100 条、health 42%，2026 仍有 issue 活动；但 295 open issues、25 open PRs 与单一主维护者贡献占比使生态响应不够稳定。[GH:api][GH:community][GH:issues] |
| 成熟度 | 3/5 | hosted product/算法方向清晰，2026-04 仍有 master commit，文档/CI/测试完整；但仓库 0.0.0、无 GitHub Release，当前 feature/bug backlog 仍大，故按持续迭代而非稳定 API 计分。[GH:commit][GH:manifest][GH:release][GH:issues] |

这里把“产品算法成熟”与“仓库发布成熟”分开：前者支持推荐学习，后者仍要求部署者固定 commit、做自己的回归与备份。

## 安全与风险

评分 3/5。

GitHub security-advisories endpoint 本轮返回空，但这只是没有查到公开 GHSA，不是安全审计 [GH:advisories]。相比纯静态页面，server package 具有 OAuth、database、multiplayer WebSocket、highscores、profile/user data 和 Paddle/payment 相关依赖，攻击面明显更大 [GH:manifest]。

风险与缓解：

1. **治理入口有限**：tree 中未观察到 SECURITY.md 或 CONTRIBUTING.md；README 有 bug/translation/customization 指引，但漏洞披露和安全响应流程不如有专门政策的项目明确。[GH:tree][GH:readme]
2. **配置与账户**：`.env`、OAuth、database、multiplayer 和 payment secret 需要最小权限、TLS、session/cookie、rate limit、backup 和日志脱敏；本轮未动态检查。[GH:docs][GH:manifest]
3. **依赖面**：packages 规模大，包含 websocket、server、database、OAuth、Paddle 和内容处理；需要定期 npm audit/OSV、container scan 和 lockfile review，本轮未执行。[GH:manifest][GH:tree]
4. **许可证边界**：root LICENSE/README 说明 AGPL-3.0，但 root package.json 使用 GPL-3 shorthand；两者和依赖/组合部署应先由项目维护者或法律顾问 reconcile。不能把“公开 GitHub repo”理解为任意闭源商用许可。[GH:license][GH:issues]
5. **用户反馈**：当前 layout/word selection/shift issues 不是 security vulnerabilities，但可导致输入状态与预期不一致；生产升级仍需输入/账户/数据迁移回归。[GH:issues]

所以 security 3/5 是“没有本轮查到 GHSA，但有中等 web-service attack surface 与治理缺口”，不是“安全”。

## 学习价值

**很高。** keybr.com 把教育算法和工程实现连接得很直白：per-key observations → statistics → weakest-key selection → generated lesson → target-speed progression → graphs。这是研究 adaptive practice、feedback loop 和 mastery criterion 的好案例 [GH:readme]。

工程上还可以按 packages 拆解 keyboard/layout、language/ngram/word generators、result/userdata、charts、database、server、OAuth、multiplayer 和 i18n；CI 则展示如何把 compile、lint、stylelint、build、test 组成最低质量门禁 [GH:tree][GH:manifest][GH:ci]。同时，295 open issues、0.0.0 packages、无 release 和 AGPL/server 边界提醒学习者：算法想法清楚，不等于 production governance、发布流程和安全运维已经完备。[GH:issues][GH:release][GH:license]
