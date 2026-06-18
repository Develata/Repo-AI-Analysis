---
title: "Unciv"
created: 2026-06-18
updated: 2026-06-18
type: repository-analysis
repo_url: "https://github.com/yairm210/Unciv"
category: "games/game-content-platforms"
tags: [game, 4x-strategy, civilization-v, android, desktop, kotlin, libgdx, modding, open-source-game]
previous_repo: ""
successor: ""
primary_language: "Kotlin"
license: "MPL-2.0"
stars: 10629
forks: 1842
last_checked: 2026-06-18
last_verified: 2026-06-18
evidence: "GitHub API metadata + README + official docs + local shallow clone scan at 66ee6cf + release/changelog/security-advisory checks. No hands-on gameplay benchmark or multiplayer stress test in this review."
archived_reason: ""
docker_support: true
gpu_required: false
estimated_cpu: "普通 Android/desktop CPU；大型地图、AI 回合与多人服务端另计"
estimated_memory: "客户端轻到中等；开发/调试建议 JVM 4GB；大型地图可能更高"
estimated_storage: "APK/JAR/desktop 包约百 MB 级；源码浅克隆约 1.2GB，mods/save/cache 另计"
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
  security: 3
  recommendation: 4
overall_score: 3.8
sources:
  - "[GH] https://github.com/yairm210/Unciv"
  - "[GH:api] https://api.github.com/repos/yairm210/Unciv — queried 2026-06-18; stars=10629, forks=1842, subscribers_count=109, open_issues_count=133 (=99 open issues + 34 open PRs by search API), created_at=2017-11-21T21:58:12Z, pushed_at=2026-06-16T20:11:40Z, language=Kotlin, license=MPL-2.0, community_health=57, advisories_count=0"
  - "[GH:releases] https://api.github.com/repos/yairm210/Unciv/releases?per_page=5 — queried 2026-06-18; latest releases sampled: 4.20.14 on 2026-06-16, 4.20.13 on 2026-06-13, 4.20.12 on 2026-06-10; sampled release author is github-actions[bot]; release assets include Linux/Windows zip, signed APK, JAR, MSI, server JAR"
  - "[GH:local-scan] local shallow clone /opt/data/tmp/repo_wiki_trending_20260618_final/yairm210-Unciv at 66ee6cfec4bf8a56eadb2a94e3024d5f22129b43; 4091 tracked files; 44 markdown-like docs; 82 test-related paths by glob, with sampled paths around uniques/ruleset validation/resources/tiles/timed uniques; 15 GitHub workflows; README/LICENSE/CODE_OF_CONDUCT/build.gradle.kts/settings.gradle.kts/gradle.properties/Dockerfile found; README has Docker/VNC commands and ghcr.io/yairm210/unciv; SECURITY.md and CONTRIBUTING.md not found at repo root"
  - "[Docs] https://yairm210.github.io/Unciv/ — extracted 2026-06-18; official docs describe Android/Desktop Civ V remake, tutorial, contributor entry points"
  - "[Docs:building] https://yairm210.github.io/Unciv/Developers/Building-Locally/ — extracted/local docs inspected 2026-06-18; Android Studio/Gradle setup, desktop run/build, Gradle 8.11.1, Android Gradle Plugin 8.9.1, JDK/Android SDK notes"
  - "[Docs:modding] https://yairm210.github.io/Unciv/Modders/Mods/ — extracted/local docs inspected 2026-06-18; extension mods, base ruleset mods, ruleset-agnostic audiovisual/map mods, GitHub-based mod distribution"
  - "[Docs:translation] local docs/Translating/Translating.md inspected 2026-06-18; translation workflow, placeholder checks, CI failure guidance, language limitations"
  - "[GH:changelog] local changelog.md inspected 2026-06-18; file has 10374 lines; recent 4.20.x entries include bug fixes, memory/CPU performance improvements, modding validation improvements, Android keyboard/folder fixes"
  - "[GH:workflow] local .github/workflows/buildAndTest.yml and dockerPublish.yml inspected 2026-06-18; CI runs classes/check, Java 21, Android SDK setup, Gradle setup; Docker workflow publishes ghcr.io/yairm210/unciv"
  - "[GH:comparisons] GitHub API spot-check 2026-06-18: freeciv/freeciv description/stars/license/language/pushed_at; FreeCol/freecol description/stars/license/language/pushed_at; local existing wiki entry for lutris/lutris used for category-scope positioning. Positioning only, not full 10-dimension review."
---

# Unciv

> 开源、mod-friendly、Android/Desktop 的 Civ V remake，用 LibGDX + Kotlin 实现轻量 4X 策略游戏。
>
> **状态**: `active` · **总分**: 3.8/5 · **推荐度**: 4/5

## 一句话总结

Unciv 适合想在手机或普通桌面设备上玩轻量、开源、可 mod 的 Civilization V-like 4X 策略游戏的人。

## 总体评价

Unciv 的价值不是“高保真复刻商业大作”，而是把 Civ V 风格的 4X 核心循环压到一个小、快、跨 Android/desktop、可修改、可翻译、持续发布的开源实现里。[GH][Docs]

它属于 `games/game-content-platforms/`：仓库本身交付可玩的游戏内容/runtime surface，并包含 modding、翻译、server、desktop/Android 构建与 Docker/VNC 运行路径。它不是围绕某个外部游戏做 trainer 或辅助，而是直接定义玩家能实际运行和体验的游戏本体。[GH][Docs:modding]

一句话判词：**如果你要一个 FOSS、轻量、可折腾的 Civ-like 游戏，Unciv 值得收录和试玩；如果你追求原版 Civ V 的画面、音乐、动画、完整资料片体验或严肃多人竞技，预期必须放低。**

## 推荐度：4/5

**定位**：面向开源游戏玩家、Android/desktop 轻量 4X 玩家、modder、翻译贡献者，以及想研究“复杂游戏如何用数据驱动规则长期维护”的开发者。

推荐度给 4。正面理由很硬：项目从 2017 年持续维护到 2026 年，release 频率很高，README 覆盖 Android、Linux、Windows、Raspberry Pi、macOS、JAR、Docker/ghcr 等路径，官方文档覆盖开发、modding、翻译；本地扫描也显示测试、CI、server、Docker 与大量规则/文档资产。[GH:api][GH:releases][GH:local-scan]

扣分主要来自两点：一是它仍是“Civ V remake / clone-like project”，法务与品牌边界需要保持清醒；二是多人、mod、AI、大地图、移动端兼容等边缘场景天然复杂，99 个 open issues + 34 个 open PR 表明项目仍有持续维护负载。[GH:api] 因此它是 4/5：值得试用和长期关注，但不是可无条件替代商业 Civ V 的成熟商业级产品。

## 优势

1. **跨平台交付面广**。README 列出 Google Play、F-Droid、itch.io、Flathub、AUR、Pi-Apps、Homebrew、Chocolatey、Scoop、GitHub releases、JAR 和 Docker/VNC 运行路径。[GH]
2. **长期维护且 release 密集**。API 显示仓库创建于 2017-11-21，2026-06-16 仍 push；近 5 个 release 中 4.20.14、4.20.13、4.20.12 间隔仅数日。[GH:api][GH:releases]
3. **轻量定位明确**。README 明说它不是高分辨率图形、音乐、动画路线，而是 small, fast, moddable, FOSS, in-depth 4X。[GH]
4. **modding 与翻译入口清楚**。官方文档说明 extension mods、base ruleset mods、ruleset-agnostic audiovisual/map mods；翻译文档说明 GitHub 编辑、placeholder 规则和 CI 失败定位。[Docs:modding][Docs:translation]
5. **工程治理较完整**。本地扫描有 4091 个 tracked files、82 个 test-related paths、15 个 workflows；build/test workflow 使用 Java 21、Android SDK、Gradle setup 并运行 `./gradlew classes` 与 `./gradlew check`。[GH:local-scan][GH:workflow]

## 劣势

1. **不是完整商业 Civ V 体验**。README 自己建议追求高分辨率画面、优秀 soundtrack、动画等体验的用户去玩 Firaxis 的 Civilization V；Unciv 的目标是轻量与开源。[GH]
2. **Civ-like 法务/品牌边界需谨慎**。README 讨论了机制不受版权保护、不能使用原作资产、不要使用 Civilization 名称或冒充原作等边界；这不是即时侵权结论，但说明项目必须长期维持克制。[GH]
3. **issue/PR backlog 存在**。API 分离查询显示 99 个 open issues 与 34 个 open PR；对于游戏这种规则组合爆炸的软件，这是可理解但必须计入维护负载的信号。[GH:api]
4. **iOS 与 Steam 缺位**。README 明确没有 iOS 计划，Steam release 被拒；对只从 iOS/Steam 获取游戏的用户不友好。[GH]
5. **mod 能力有边界**。官方 modding 文档说明 mods 可增删替换基本定义，但不能添加全新的 hardcoded unique abilities；深度机制创新仍需要改源码。[Docs:modding]

## 适合什么场景

- 在 Android、普通 Linux/Windows/macOS desktop 或低配设备上玩轻量 Civ-like 4X。
- 想要 FOSS、可读源码、可修改规则、可贡献翻译/内容的策略游戏。
- 想做 base ruleset、extension mod、地图、UI skin、tileset/unitset 等内容扩展。[Docs:modding]
- 研究 Kotlin + LibGDX 游戏、数据驱动规则、AI/自动化、多人服务端和跨平台 release 的工程组织。
- 教学或兴趣项目：用一个真实长期维护游戏学习 GitHub CI、Gradle、Android/Desktop 双端构建、社区翻译协作。

## 不适合什么场景

- 追求商业 Civ V 的画面、音乐、动画、UI polish 和完整官方体验。
- 希望 iOS 或 Steam 一键安装的用户。[GH]
- 需要严格版权/商标零风险审计的商业发行场景。
- 期望 mod 可以任意添加全新硬编码机制，而不改 Kotlin 源码的用户。[Docs:modding]
- 对多人稳定性、AI 质量、大地图性能有竞技级或生产级 SLA 要求的场景；本轮未做 gameplay benchmark 或 multiplayer stress test。

## 与类似项目对比

| 项目 | 定位 | 相对本项目 |
|------|------|-----------|
| Freeciv | 受文明系列启发的老牌 FOSS empire-building strategy game，C 语言，client/server 传统深 | Freeciv 更像独立文明系传统项目；Unciv 更明确面向 Civ V-like、Android/desktop 轻量体验与移动端可玩性 |
| FreeCol | 基于 Colonization 灵感的 Java 回合制策略游戏 | FreeCol 主题是殖民/独立建国，不是 Civ V remake；Unciv 的核心吸引力是 Civ V-like ruleset 与 modding 社区 |
| Lutris | Linux 游戏 launcher/runtime/content delivery 平台 | Lutris 管的是运行其它游戏；Unciv 本身就是可玩的游戏内容和 runtime surface |

上述项目按 `games/game-content-platforms/` 同类范围做定位级对比，Freeciv/FreeCol 仅做 GitHub API spot-check，未按同一 10 维度框架深审。[GH:comparisons]

## 它能做什么

评分 4/5。Unciv 在“轻量 Civ V-like 4X”这个目标域内覆盖较全：[GH][Docs]

- 单机 4X 核心循环：文明发展、科技、城市扩张、单位与战斗、地图与规则集。
- Android 与 desktop 客户端，GitHub release 同时给出 APK、JAR、Windows/Linux 包、MSI 等资产。[GH:releases]
- 多人/服务端相关资产：release assets 包含 `UncivServer.jar`，源码包含 `server/` 模块。[GH:releases][GH:local-scan]
- modding：extension mods、base ruleset mods、ruleset-agnostic audiovisual/map mods，支持从 GitHub repo 分发 mod。[Docs:modding]
- 翻译：翻译文件、completion percentages、placeholder checks、CI 反馈和语言新增流程。[Docs:translation]
- Docker/VNC 运行：README 给出 `docker compose build && docker compose up` 与 `ghcr.io/yairm210/unciv` 运行方式。[GH]

没有给 capability 5，是因为 README 自己列出 G&K、BNW 等机制仍在 roadmap 中，且 modding 不能添加全新 hardcoded abilities；它很完整，但不是“所有 Civ V 预期场景全部覆盖”。[GH][Docs:modding]

## 运行环境与资源占用

| 场景 | CPU | 内存 | 存储 | 说明 |
|------|-----|------|------|------|
| 玩家使用 | 普通 Android/desktop CPU | 轻到中等 | 客户端约百 MB 级，save/mod/cache 另计 | README 强调 small/fast/can run on a potato，但本轮未做实测 benchmark。[GH] |
| 开发/调试 | 普通开发机 CPU | 文档建议 desktop debug VM 可设 `-Xmx4096m -Xms256m` | 源码浅克隆约 1.2GB，Gradle/Android SDK 依赖另计 | Android Studio/Gradle 初始 sync 可能较重。[Docs:building][GH:local-scan] |
| 服务端/Docker | 取决于地图、玩家、AI 与 VNC/服务端形态 | 中等起 | 镜像、assets、save 另计 | README 提供 Docker/VNC 与 ghcr 镜像；release assets 包含 server JAR。[GH][GH:releases] |

performance 评分 3/5。项目明确以小、快、低配可运行为目标，近期 changelog 也持续出现 CPU/RAM/large maps performance improvements。[GH][GH:changelog] 但本轮没有实测 benchmark；大型地图、AI 回合、multiplayer/server、Android 机型差异会显著影响实际体验。按 trending-batch 保守规则，这里不把 README 定位和 changelog 优化直接等同为同类实测领先。

## 上手体验

评分 4/5。玩家侧上手很好：Android 有 Google Play/F-Droid，Linux 有 itch.io/Flathub/AUR，Windows 有 MSI/itch.io/Chocolatey/Scoop，macOS 有 Brew/JAR/安装指南，GitHub releases 也提供 APK/JAR/desktop 包。[GH][GH:releases]

开发侧比玩家侧更复杂但文档清楚。官方 building docs 推荐 Android Studio，说明 Gradle sync、Android SDK、Desktop run configuration、unit tests、JDK/SDK 问题；不用 Android Studio 时也给出 `./gradlew desktop:run`、`./gradlew desktop:dist` 等路径。[Docs:building] 扣分主要在 Android/Gradle 生态本身：初次 sync、SDK licenses、local.properties/ANDROID_HOME、调试配置和 translation trailing whitespace 都可能卡新贡献者。[Docs:building]

## 代码质量

评分 4/5。本地扫描显示项目以 Kotlin 为主，模块包括 `core/`、`desktop/`、`android/`、`server/`、`tests/`；`settings.gradle.kts` 包含 desktop/core/tests/server，并在检测到 Android SDK 时 include android。[GH:local-scan]

正面信号包括：82 个 test-related paths，抽样路径显示测试围绕 uniques、ruleset validation、resources、tiles、timed uniques 等规则核心展开；CI workflow 在 push/PR 上编译 classes 并运行 `./gradlew check`；Gradle 配置启用 parallel/caching，使用 Java 21、Kotlin multiplatform、detekt/purity 等工具链。[GH:local-scan][GH:workflow]

扣分点是游戏规则与 UI/平台/网络/modding 交织，复杂度天然高；repo root 没有 SECURITY.md/CONTRIBUTING.md，community profile health 为 57；本轮也没有运行完整 Gradle test/build，因此 code_quality 不能上 5。[GH:api][GH:local-scan]

## 可扩展性

评分 4/5。Unciv 的可扩展性主要来自 ruleset/mod 数据结构，而不是传统插件 API。官方 modding 文档把 mods 分为 extension mods、base ruleset mods、ruleset-agnostic audiovisual/map mods；mods 可以添加、替换、删除 units、nations、buildings、improvements、resources、terrains 等基本定义，也可以提供 maps、tilesets、unitsets、UI skins、music/audio。[Docs:modding]

这已经足够支撑大量内容扩展和规则重组；base ruleset mods 甚至可以替换整套 tech tree、units、policies、nations 等，形成不同 gameplay experience。[Docs:modding] 但文档也明确：游戏只能识别已有 definitions，不能通过 mod 添加全新的 unique abilities；这种能力需要源码层修改。因此 extensibility 给 4，不给 5。

## 文档质量

评分 4/5。README 的玩家入口非常清楚：项目是什么、安装方式、roadmap、贡献入口、FAQ、法务边界、Docker 运行。官方 docs 覆盖 developer building、modders、translation；本地扫描有 44 个 markdown-like docs。[GH][Docs][Docs:building][Docs:modding][Docs:translation][GH:local-scan]

尤其值得肯定的是文档能面向不同贡献者分流：programmers、translators、modders 各有入口；translation docs 还解释 placeholder、CI failure、语言新增流程。[GH][Docs:translation] 扣分点是完整游戏项目文档天然分散，某些运行/调试边缘问题仍需要读源码、issue 或 Discord；没有达到“API/架构文档极详尽”的 5 分边界。

## 社区与成熟度

| 维度 | 评分 | 说明 |
|------|------|------|
| 社区活跃度 | 4/5 | API 显示 10629 stars、1842 forks、109 subscribers，2026-06-16 仍 push；README 提供 Discord，贡献入口面向 programmers/translators/modders。99 open issues + 34 open PR 表明活跃但维护负载不低。[GH:api][GH] |
| 成熟度 | 4/5 | 2017 年创建，长期维护；release 资产覆盖 Android/desktop/server，近 4.20.x release 频率高，本地 changelog 文件超过一万行。[GH:api][GH:releases][GH:changelog] |

没有给 community/maturity 5：community profile health 57，root 缺 SECURITY.md/CONTRIBUTING.md；项目仍在 roadmap 中列出 G&K、BNW 等机制，说明产品仍在演进而非完全 feature-complete。[GH:api][GH]

## 安全与风险

评分 3/5。GitHub Security Advisories API 返回空数组，只能说明本次检查未发现公开 GHSA，不等于项目经过独立安全审计。[GH:api]

主要风险有四类：第一，Civ V-like clone 的版权/商标/资产边界，README 已明确不能使用原作资产、不要使用 Civilization 名称或冒充原作；第二，mods 可从 GitHub repo 下载并改变游戏定义/图像/音频/地图，用户应信任来源；第三，multiplayer/server、Docker/VNC、URL/link 接收等运行形态扩大输入面；第四，Android 与 desktop packaging 涉及不同签名、商店、JAR/installer 下载路径，需要从官方渠道获取。[GH][Docs:modding][GH:releases]

正面因素是项目开源、许可证明确为 MPL-2.0，release 由 GitHub Actions bot 发布并提供多平台资产；但缺 SECURITY.md 与未做本轮依赖审计，使安全分保持在 3。[GH:api][GH:local-scan]

## 学习价值

Unciv 很值得学习。它不是“算法漂亮的小玩具”，而是一个长期演化的开源游戏系统：Kotlin/LibGDX 跨平台、Android/Desktop/server 多端、数据驱动 ruleset、modding、翻译协作、CI、release packaging、Docker/VNC、社区 issue/PR 治理全都有。对于研究软件工程，尤其是“复杂规则系统如何不崩坏地演进”，它比许多 demo 更有价值。

对 Develata 的 wiki 分类也有边界意义：Lutris 这类项目改变游戏运行/分发 surface，Unciv 这类项目直接交付可玩的游戏内容和 runtime，二者同属 `games/game-content-platforms/`；Game Cheats Manager 那类只在既有游戏外部做辅助/修改器管理，才应归入 `games/game-assistants/`。名正则言顺，类定而后评可一贯。
