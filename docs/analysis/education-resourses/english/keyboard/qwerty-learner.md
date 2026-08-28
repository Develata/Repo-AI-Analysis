---
title: "Qwerty Learner"
created: 2026-08-28
updated: 2026-08-28
type: repository-analysis
repo_url: "https://github.com/RealKai42/qwerty-learner"
category: "education-resourses/english/keyboard"
tags: ["english-learning", "typing-practice", "vocabulary", "dictation", "react", "self-hosted"]
previous_repo: ""
successor: ""
primary_language: "TypeScript"
license: "GPL-3.0"
stars: 22872
forks: 2610
last_checked: 2026-08-28
last_verified: 2026-08-28
evidence: "Authenticated GitHub API + README/docs + recursive tree and manifest review; no local build, browser smoke test, or benchmark"
archived_reason: ""
docker_support: false
gpu_required: false
estimated_cpu: "浏览器学习低；本地开发/构建约 1–2 cores（启发式，未压测）"
estimated_memory: "浏览器学习低至中等；本地 Node/Vite 构建中等（未实测）"
estimated_storage: "词库、音频、图片与前端依赖占用；递归 tree 为 690 个文件，未测 checkout/build 体积"
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
  security: 3
  recommendation: 4
overall_score: 3.5
sources:
  - "[GH:api] https://api.github.com/repos/RealKai42/qwerty-learner queried 2026-08-28: public, not archived/disabled, default_branch=master, created_at=2021-01-21T11:14:16Z, pushed_at=2026-08-11T15:25:28Z, stars=22872, forks=2610, open_issues_count=293, language=TypeScript, license=GPL-3.0, size=195632 KB, homepage=https://qwerty.kaiyi.cool/"
  - "[GH:commit] GitHub commits API queried 2026-08-28: latest master commit 122acd90b4079dd040c28a14356447f6553cff83, dated 2026-08-11T15:23:36Z, merge pull request #1099 for updated GitHub links"
  - "[GH:tree] GitHub recursive tree API queried 2026-08-28: 690 blob paths; 156 TypeScript/TSX files, 201 paths under src, 412 under public, 22 under src-tauri, 5 E2E test files, 2 active workflow files; no SECURITY.md or CODE_OF_CONDUCT.md observed"
  - "[GH:readme] README.md and docs/README_EN.md inspected 2026-08-28: combines vocabulary memorization with English typing muscle-memory practice; advertises exam/developer dictionaries, IPA/pronunciation, dictation, speed/accuracy, online pages and a VSCode plugin; README describes backend synchronization as a future goal"
  - "[GH:docs] docs/CONTRIBUTING.md and docs/toBuildDict.md inspected 2026-08-28: draft-PR workflow, community issue discussion, JSON dictionary format, public/dicts placement and resources/dictionary.ts indexing procedure"
  - "[GH:manifest] package.json and src-tauri/Cargo.toml path presence inspected 2026-08-28: React/Vite frontend, Yarn lockfile, Playwright E2E script, root test script prints No tests, optional Tauri shell"
  - "[GH:community] GitHub community/profile and contributors endpoint queried 2026-08-28: health_percentage=57; contributors endpoint returned its first 100 entries (at least 100 observed), with RealKai42 leading the sampled contribution list"
  - "[GH:issues] GitHub search/issues API queried 2026-08-28: open issues=251 and open PRs=42; recently updated items include several dictionary additions closed on 2026-08-25/26"
  - "[GH:release] GitHub releases endpoint queried 2026-08-28: returned []; no GitHub Release object was observed in this check"
  - "[GH:advisories] GitHub repository security-advisories endpoint queried 2026-08-28: returned []; this is only a negative lookup result, not an independent safety audit"
  - "[GH:license] Root LICENSE inspected 2026-08-28: GNU General Public License version 3"
  - "[GH:docker] Dockerfile and docker-compose.yaml inspected 2026-08-28: local Node-to-Nginx build and port mapping are provided, but no published official application image was verified; docker_support is therefore false"
  - "[GH:comparisons] Same-batch positioning checks for TypeWords, Monkeytype, Earthworm and keybr.com on 2026-08-28; peer README/API evidence is used only for the comparison table, not a second 10-dimension audit"
---

# Qwerty Learner

> 面向英语非母语键盘工作者的 vocabulary + typing practice 工具：把单词记忆、正确重打、发音/音标和 typing speed feedback 放到同一个前端体验中。
>
> **状态**: `active` · **总分**: 3.5/5 · **推荐度**: 4/5
>
> **验证边界**：本轮使用 GitHub API、README/docs、递归 tree 和 manifest 静态审阅；未在本地安装依赖、未运行浏览器 E2E、未测量 bundle/RSS/并发性能。

## 一句话总结

Qwerty Learner 适合想同时巩固英语词汇与英文键盘肌肉记忆的非母语键盘工作者，尤其适合考试词汇和程序员常用词练习；它不是以排行榜或纯字母自适应为核心的 typing benchmark。[GH:readme]

## 总体评价

这个项目的中心命题很明确：普通背单词工具不训练输入动作，纯打字工具又可能只给出 pseudo-English 或随机文本；Qwerty Learner 用词库、逐词正确重打、dictation、IPA/pronunciation 和实时 speed/accuracy 把两者结合起来 [GH:readme]。

产品面已经超过一个小 demo：README 列出 CET-4/6、GMAT、GRE、IELTS、SAT、TOEFL、考研/专四/专八、程序员词汇和多种 API 词库；仓库还有大量 `public/dicts` 资源、Playwright E2E 文件和可选 `src-tauri` shell [GH:readme][GH:tree]。但当前仓库仍以 frontend/static deployment 为主，README 把云同步 backend 写成未来目标；代码质量证据主要是结构和 E2E 配置，而不是完整的 unit-test 或运行结果 [GH:readme][GH:manifest]。

因此它在“英语单词输入练习”这个窄而重要的场景里能力和推荐度较高，在通用 language-learning platform、持久化 account system 或严谨测评方面则不应过度解读。

## 推荐度：4/5

**定位**：推荐给英语非母语的学生、研究生、程序员和需要机考英语输入训练的人；前提是接受浏览器本地/前端型工具的存储与验证边界，并自行确认当前在线实例可用。

给 4/5 的原因是目标场景贴合度高、词库覆盖宽、练习反馈直接，且在线页面、GitHub Pages、Vercel、VSCode plugin 等入口降低了获得价值的门槛 [GH:readme]。如果用户要的是“背会词并能正确敲出来”，它比泛化 typing test 更对题。

不给 5/5 的原因也很具体：根 `test` script 只是输出 `No tests`，E2E 主要由单独脚本承载；当前没有 GitHub Release 对象；README 仍称项目处于 early stages，并把 backend/cloud sync 留作未来方向 [GH:manifest][GH:release][GH:readme]。生产级数据同步、学习分析和长期稳定性不能仅凭 README 推断。

## 优势

1. **教育目标细而真实**：把词汇 recall 与英文输入动作绑定，且错误后要求重新输入完整单词，适合形成正确的 spelling/typing association。[GH:readme]
2. **内容覆盖面好**：考试词库、通用词、程序员词汇和 API thesaurus 同时存在，能覆盖应试与工作场景。[GH:readme]
3. **反馈机制直观**：IPA、pronunciation、dictation、speed、accuracy 和词库章节让学习者能立即看到输入结果。[GH:readme]
4. **入口多**：README 宣布 online pages、Vercel/GitHub Pages、VSCode plugin；本地还可通过 Dockerfile/Compose 做前端构建部署。[GH:readme][GH:docker]
5. **词库贡献路径清楚**：`docs/toBuildDict.md` 给出 JSON schema、文件位置和索引登记步骤，社区可以扩充教育内容而不必先改核心算法。[GH:docs]

## 劣势

1. **自动化验证不完整**：根 `test` 命令不执行测试，主要可见的自动化测试是 Playwright E2E；本轮也没有实际运行它。[GH:manifest][GH:tree]
2. **产品后端边界尚未闭合**：README 把独立 backend、域名和 cloud synchronization 描述为未来计划；跨设备学习数据的持久化不能按成熟服务理解。[GH:readme]
3. **维护负载不低**：2026-08-28 快照有 251 open issues、42 open PRs，community health 为 57；活跃贡献存在，但不等于所有反馈都能快速闭环。[GH:issues][GH:community]
4. **不是纯 touch-typing tutor**：它偏真实单词和词义/发音记忆，不提供 keybr.com 那种按单键弱项生成课程的核心算法；想矫正某个键的击键统计，需选别的工具。[GH:readme][GH:comparisons]
5. **数据与第三方资源边界需核对**：词库、发音 API 和社区贡献内容并非本轮逐项做版权、准确性或供应链审计；GPL-3.0 也不自动覆盖所有外部数据。[GH:readme][GH:license]

---

## 适合什么场景

- 英语非母语者把 CET/GRE/IELTS/TOEFL 或专业词汇与键盘输入一起练习。
- 程序员练习代码、文档和常见 API 中高频英文词汇。
- 机考英语前，希望减少“知道这个词但敲不出来”的输入停顿。
- 教师或社区维护一个可贡献的英语词库集合，并希望以 JSON 资源扩展内容。
- 想在浏览器或 VSCode 内进行轻量、短时、重复性的 word-level typing practice。

## 不适合什么场景

- 只想通过 WPM/accuracy benchmark 与全球用户竞争的用户；Monkeytype 更直接。
- 想让算法自动锁定弱键、逐步加入字母并建立 key-level statistics 的用户；keybr.com 更匹配。
- 需要 account、cloud sync、组织管理、稳定 public API 或经过 benchmark 的学习平台。
- 需要系统化句子构造、逐句听写和课程进度管理的英语学习者；Earthworm 更接近该模型。
- 把仓库的 E2E 配置或在线 demo 当作完整安全、性能和数据可靠性证明的部署者。

## 与类似项目对比

| 项目 | 定位 | 相对本项目 |
|------|------|-----------|
| TypeWords | 英语单词与文章背诵 + typing practice | TypeWords 的 word/article、smart/FSRS 与本地学习流程更完整；Qwerty Learner 的考试/程序员词库和“正确重打”定位更鲜明。 |
| Monkeytype | 高度可配置的通用 typing-test platform | Monkeytype 更重 WPM、mode、quote、account、leaderboard 与可配置测试；Qwerty Learner 更重词汇记忆和 pronunciation。 |
| Earthworm | 通过连词构句、课程与逐句输入学习英语 | Earthworm 的对象是句子/课程/学习账户，Qwerty Learner 的最小单元更偏 word bank 与 typing muscle memory。 |
| keybr.com | key-level adaptive touch-typing tutor | keybr.com 以每个按键统计和弱键 lesson generation 为核心；Qwerty Learner 以真实英语词汇与词义/发音为核心。 |

上述项目均按 `education-resourses/english/keyboard/` 的英语学习/键盘练习范围做定位级对比；依据同批 GitHub README/API 快照，未把竞品重新按本条目的 10 维度框架深审。[GH:comparisons]

---

## 它能做什么

**能力评分：4/5。**

- 以章节和词库组织英语词汇、考试词和程序员常用词，并允许通过 JSON 词库贡献扩展内容。[GH:readme][GH:docs]
- 在输入过程中显示音标和发音，提供 dictation/默写模式，把 spelling、sound 和 typing 绑定起来。[GH:readme]
- 显示速度和正确率，让用户对输入熟练度有即时反馈。[GH:readme]
- README 宣布支持 online pages、Vercel/GitHub Pages 和 VSCode plugin；仓库 tree 还显示 optional `src-tauri` native shell。[GH:readme][GH:tree]
- 提供开发者 API thesaurus 与词库索引机制，能把“练英文”扩展到代码阅读/编程工作中的高频词。[GH:readme][GH:docs]

它没有证据表明自己已经是带云端账户、跨设备同步、完整自适应课程引擎的 learning platform；这些能力不能由词库数量替代。[GH:readme]

## 运行环境与资源占用

| 场景 | CPU | 内存 | 存储 | 说明 |
|------|-----|------|------|------|
| 在线学习 | 低 | 低至中等 | 浏览器缓存 | 以静态/前端页面为主；本轮未测试在线实例。 |
| 本地前端开发 | 1–2 cores 起步（启发式） | 中等 | Node modules + 词库/音频/图片 | React/Vite/Yarn；仓库 tree 有 690 个文件，资源目录较多。[GH:tree][GH:manifest] |
| E2E/构建 | 2+ cores 更合适（启发式） | 中等至偏高 | Playwright browser 与 build 产物 | `test:e2e` 需要浏览器依赖；本轮未执行。[GH:manifest] |

- **运行时**：React/Vite 前端；可选 Tauri 目录，但本轮未编译 native shell。[GH:manifest][GH:tree]
- **操作系统**：README 给出 Node、Git、Yarn 路径，并另列 Windows/ macOS 脚本；在线访问取决于现代浏览器。[GH:readme]
- **Docker**：`docker_support: false`。仓库有 Dockerfile/Compose，可做本地 Node-to-Nginx build，但没有核实 published official application image；这不等于没有 Docker deployment recipe。[GH:docker]
- **GPU**：不需要。
- **外部依赖**：Node/Yarn、浏览器、词库静态资源、发音/音频资源；README 还引用 VSCode plugin 和第三方词典/API 来源。[GH:readme]

performance 评分 3/5：学习路径看起来轻量，但资源目录包含大量 JSON、音频和图片，且本轮没有测量首屏、bundle、内存或长时间练习成本；因此不能凭“前端静态”给 4/5。[GH:tree]

## 上手体验

评分 4/5。

对学习者，README 提供直接在线入口，核心交互也不需要先理解复杂账户、数据库或服务端配置；打开页面即可选择词库并练习，这是接近 30 分钟内获得价值的路径 [GH:readme]。对贡献者，`toBuildDict.md` 从 JSON 格式、`public/dicts/` 到索引登记都有明确步骤 [GH:docs]。

扣分来自本地工程链：README 要求 Node、Git、Yarn，E2E 还需要 Playwright browser；Vercel/Docker/Pages 的部署方式较多，但本轮没有实际验证任一条完整路径 [GH:readme][GH:manifest]。

## 代码质量

评分 3/5。

正面信号是 TypeScript/TSX 主体、React/Vite 结构、`src`/`public`/`src-tauri` 分层、Playwright E2E 文件和两个当前 workflow；词库贡献也有明确的资源索引规则 [GH:tree][GH:docs]。

但质量证据被验证缺口限制：根 `package.json` 的 `test` 仅打印 `No tests`，E2E workflow 使用 `continue-on-error` 后再检查状态，且本轮没有执行 build/test。单一主维护者占主要贡献，代码仍处于持续演进状态 [GH:manifest][GH:tree][GH:community]。因此给 3/5，而不是把目录规模或 CI 文件数当作测试覆盖率。

## 可扩展性

评分 3/5。

词库是一个实用扩展面：贡献者只需遵循 JSON schema、放入 `public/dicts/` 并登记元数据，就能增加考试、语言或 API 内容 [GH:docs]。React/Vite 和 optional Tauri 也允许继续做 UI/native packaging 层扩展 [GH:manifest]。

限制同样清楚：本轮未见稳定的 plugin/hook/API contract 或独立 backend extension surface；README 把 cloud sync 写成未来工作。若要增加账户、同步、组织权限或复杂 adaptive curriculum，通常需要改核心应用，而非安装一个插件 [GH:readme][GH:tree]。

## 文档质量

评分 4/5。

README 有中文和 English 版本，覆盖设计目标、词库、音标、dictation、运行、部署、贡献和数据来源；`docs/CONTRIBUTING.md` 与 `docs/toBuildDict.md` 又把代码/词库贡献拆开说明，足以支撑普通用户和词库贡献者快速开始 [GH:readme][GH:docs]。

不给 5/5 的原因是文档仍带有 early-stage 和未来 backend 计划，且没有本轮可核实的 API/reference、release notes 或完整测试/部署报告。文档能解释“怎样使用”，还不能证明“所有关键路径都稳定”。[GH:readme][GH:release]

## 社区与成熟度

| 维度 | 评分 | 说明 |
|------|------|------|
| 社区活跃度 | 4/5 | 2026-08-28 快照为 22,872 stars、2,610 forks、contributors endpoint 首页至少 100 条、health 57%，且 2026-08-25/26 仍有词库 issue 闭环；关注度和贡献面不错，但维护压力也明显。[GH:api][GH:community][GH:issues] |
| 成熟度 | 3/5 | 2021 建仓、2026-08 仍有代码/词库活动，说明项目可用且未停摆；但 README 自称 early stages、没有 GitHub Release 对象，且云同步/后端仍属未来方向。[GH:api][GH:commit][GH:readme][GH:release] |

这里把 community 与 maturity 分开：stars/贡献者说明有人使用和参与，不自动说明 release 稳定性或产品闭环。

## 安全与风险

评分 3/5。

GitHub security-advisories endpoint 本轮返回空，但这只是“没有查到公开 advisory”，不是安全证明 [GH:advisories]。前端/静态资源形态相对减少了服务器端账户和数据库攻击面；另一方面，词库 JSON、音频/发音来源、第三方 API 和可执行安装脚本仍构成供应链与内容风险 [GH:readme][GH:tree]。

风险边界包括：

1. 本轮未看到 `SECURITY.md` 或 `CODE_OF_CONDUCT.md`，漏洞披露和治理入口不如成熟平台明确。[GH:tree]
2. 用户贡献词库应按数据来源、版权、恶意 payload 和内容准确性审阅；不能因为 JSON 是静态文件就跳过 review。[GH:docs]
3. Dockerfile/安装脚本和 optional Tauri shell 都应在隔离环境中构建；本轮未做 dependency audit、browser CSP 或 native packaging audit。[GH:docker][GH:tree]
4. GPL-3.0 只描述仓库许可证；README 引用的外部词典、发音服务和 plugin 需分别核对许可与隐私边界。[GH:license][GH:readme]

## 学习价值

**中高。** Qwerty Learner 值得研究的不是复杂后端，而是“教育目标如何进入输入循环”：词库 schema、章节组织、错误后重打、dictation、IPA/audio 和实时统计共同形成一个小而完整的 learning interaction [GH:readme][GH:docs]。

对工程学习者，它展示了 React/Vite 静态应用如何管理大量教育资源、用 E2E 覆盖主要用户 flow，并保留 Tauri/VSCode 等分发方向 [GH:tree][GH:manifest]。对教育产品设计者，它也提供一个清晰反例：词库很多不等于 spaced repetition、progress persistence、测评信度和 cross-device sync 已经完成；后续若研究这些能力，应把 README 的未来计划与实际代码/部署证据分开验证。[GH:readme]
