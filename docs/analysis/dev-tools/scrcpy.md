---
title: "scrcpy"
created: 2026-07-07
updated: 2026-09-16
type: repository-analysis
repo_url: "https://github.com/Genymobile/scrcpy"
category: "dev-tools"
tags: [android, screen-mirroring, remote-control, adb, automation]
previous_repo: ""
successor: ""
primary_language: "C"
license: "Apache-2.0"
stars: 145199
forks: 13397
last_checked: 2026-09-16
last_verified: 2026-09-16
evidence: "docs + GitHub API + local shallow scan; not deployed or benchmarked"
archived_reason: ""
docker_support: false
gpu_required: false
estimated_cpu: "1+ core; video encode/decode/display workload depends on resolution/fps"
estimated_memory: "hundreds of MB typical desktop use"
estimated_storage: "small binary plus optional Android platform tools"
status: active
ratings:
  capability: 5
  usability: 4
  performance: 3
  code_quality: 4
  documentation: 5
  community: 4
  maturity: 5
  extensibility: 3
  security: 4
  recommendation: 5
overall_score: 4.2
sources:
  - "[GH:refresh] https://api.github.com/repos/Genymobile/scrcpy — checked 2026-09-16 UTC+8: canonical unchanged, archived=false, disabled=false, branch=master, pushed_at=2026-09-15T16:57:35Z, C, Apache-2.0; separate Search queries open issues=2806, open PRs=93; security-advisories=[] (negative lookup only). Current README, LICENSE, doc/video.md and repository tree inspected through GitHub API; Android API >=21/audio >=30 and desktop OS support unchanged. Earlier sources below remain historical; no device smoke or benchmark performed."
  - "[GH:v4.1] https://github.com/Genymobile/scrcpy/releases/tag/v4.1 — published 2026-07-12T18:15:37Z, checked 2026-09-16. Adds VP8/VP9 encoders, revises encoder size constraints after flex-display regressions, adds --ignore-video-encoder-constraints, fixes camera sizing, gamepad detection and division-by-zero data race; bundles FFmpeg 8.1.2, SDL 3.4.12, libusb 1.0.30. Release links #6919/#6922, #6848/#6859, #6905/#6911 as concrete defect/fix evidence."
  - "[GH] https://github.com/Genymobile/scrcpy"
  - "[GH:api] GitHub REST snapshot 2026-07-07: stars=145199, forks=13397, REST open_issues_count=2848, Search API open issues=2767 and open PRs=81, language=C, license=Apache-2.0, latest_release=v4.0, created_at=2017-11-21, pushed_at=2026-07-02"
  - "[GH:advisory] GitHub repository security-advisories API queried 2026-07-07; returned []"
  - "[GH:local-scan] Local shallow clone /opt/data/tmp/repo-wiki-crawler-batch-2026-07-07/repos/scrcpy at commit 2322868e9e256eb5fce0b3d659ab2a409f29bae1 dated 2026-05-12; git ls-files=370, test/spec-ish files=21, workflows=1, Docker-related files=0, docs/governance-ish files=26; checked README.md, FAQ.md, meson/build.gradle files"
  - "[GH:readme] README local scan 2026-07-07: mirrors Android video/audio over USB or TCP/IP, controls keyboard/mouse, no root, no app installed, Linux/Windows/macOS, Android API >=21 and audio API >=30; requires USB debugging except OTG mode"
---

# scrcpy

> 长期维护的 Android 设备镜像与控制工具：它不是爬虫库，而是把手机变成可操作、可观测对象的桥。
>
> **状态**: `active` · **总分**: 4.2/5 · **推荐度**: 5/5

## 一句话总结

scrcpy 适合需要从电脑控制、录制、调试或自动化 Android 真机的开发者；在移动数据采集链路中，它是基础设施而非解析器。

## 总体评价

scrcpy 不会解析网页，也不会绕过反爬；它解决的是 Android app / 移动 UI 的设备控制问题。当前 README 仍提供 USB/TCPIP 镜像、键鼠控制、音频、录制、camera mirroring、OTG，无需 root 或永久安装设备端 app [GH:refresh]。v4.1 新增 VP8/VP9，并修复 v4.0 flex display 的编码尺寸约束回归；升级的实际价值是设备兼容与编码选择，而非爬虫能力扩张 [GH:v4.1]。

## 推荐度：5/5

**目标角色**：Android 开发者、测试工程师、移动端自动化/采集研究者、需要控制真机的 power user。若你的任务是“操作 Android 设备”，scrcpy 是优先试用工具；这里的 5/5 仅按 Android remote-control utility 评分，不按 web scraping 框架评分。若你的任务是“抽取网页结构化数据”，它只解决入口层，不替代 Appium、OCR、UIAutomator、数据解析和合规策略。

## 优势

1. **非侵入式**：无需 root，无需设备端安装 app，退出后不留东西 [GH:readme]。
2. **跨平台成熟**：Linux/Windows/macOS 支持，2017 年以来长期维护 [GH:api]。
3. **以低延迟和轻量为设计目标**：README 将 native/lightness 与实时视频列为重点；这是项目目标，不是本轮性能或设备稳定性实测 [GH:refresh]。
4. **文档极完整**：README、FAQ、doc/ 下大量主题页面覆盖连接、音频、设备、相机、OTG 等 [GH:local-scan]。

## 劣势

1. **不是 crawler/parser**：不负责结构化抽取、去重、存储、调度。
2. **依赖 ADB/USB debugging**：部分 OEM，尤其安全设置严格的系统，需要额外配置 [GH:readme]。
3. **维护面很宽**：本轮 2806 open issues、93 open PRs；不能由数量推断故障构成，但 v4.1 明确记录 camera sizing、encoder constraints 和 gamepad 等兼容修复 [GH:refresh][GH:v4.1]。
4. **扩展性不是插件框架式**：它是优秀工具，不是通用自动化框架。

---

## 适合什么场景

- Android 真机投屏、录屏、远程控制。
- 移动端测试、调试、演示。
- 与 Appium/UIAutomator/OCR/脚本结合，处理无 Web API 的 app 场景。
- 多设备实验中的低侵入控制入口。

## 不适合什么场景

- 直接抓取网页/HTML/JSON。
- 需要云端无设备运行的纯服务器爬虫。
- 绕过 app 风控或违反服务条款的数据采集。

## 与类似项目对比

| 项目 | 定位 | 相对本项目 |
|------|------|-----------|
| Android Studio / adb | Android 官方开发与调试工具链 | adb 是底层；scrcpy 在其上提供高质量镜像和交互控制。 |
| Appium | 跨平台移动 UI 自动化测试框架 | Appium 负责自动化 API；scrcpy 负责可视化控制和低侵入镜像。 |
| scrcpy forks/GUI wrappers | scrcpy 包装或改版 | 原 repo 是官方源，README 明确提醒不要从随机网站下载 [GH:readme]。 |

以上每行均为未做竞品审计的定性定位，不构成性能、稳定性或自动化能力排名；本轮只核验 scrcpy 侧的 README 和发布说明 [GH:refresh][GH:v4.1]。

---

## 它能做什么

- USB 或 TCP/IP 连接 Android 设备并镜像视频/音频。
- 用电脑键盘鼠标控制设备。
- 录制屏幕、camera mirroring、虚拟 display、OTG control 等 [GH:readme]。
- 配合 ADB 和外部自动化工具形成移动端采集/测试链路。
- v4.1 增加 VP8/VP9 编码选择和 `--ignore-video-encoder-constraints`；后者是错误设备约束的绕行选项，不是所有设备都应启用的性能开关 [GH:v4.1]。

## 运行环境与资源占用

下表是按典型视频工作负载作的粗略预算估计，不是测量值或官方最低配置。性能由旧评分 5 调为 3：原生设计和可调视频参数提示潜力，但本轮没有独立 benchmark，不用架构选择代替资源效率实测 [GH:refresh]。

| 场景 | CPU | 内存 | 存储 | 说明 |
|------|-----|------|------|------|
| 普通投屏 | 1+ core | 数百 MB | 小 | 分辨率/fps/编码参数影响 CPU。 |
| 高分辨率录制/多设备 | 多 cores | 1GB+ | 视频输出较大 | 取决于码率、帧率、设备数。 |

- **运行时**：桌面端二进制、ADB/Android device；Android API >=21，音频 API >=30 [GH:readme]。
- **操作系统**：Linux、Windows、macOS [GH:readme]。
- **Docker**：桌面/设备交互工具，不以官方 Docker image 交付。
- **GPU**：不要求。
- **外部依赖**：USB debugging、ADB、设备驱动/权限。

## 上手体验

评分 4/5。多数平台装包后连接设备即可；FAQ 覆盖 ADB not found、device unauthorized、多设备、Wayland 等常见问题 [GH:local-scan]。扣分主要来自 Android/OEM/驱动差异不可避免。

## 代码质量

评分 4/5。历史扫描记录了 C/Meson + Android server 的结构；长期维护与当前发布修复是工程正信号，但不能据此断言 release 运行稳定。v4.1 自身记录了 flex-display 回归和数据竞争修复，本轮没有设备、测试或稳定性验证 [GH:local-scan][GH:v4.1]。

## 可扩展性

评分 3/5。命令行参数和 ADB 组合能力强，但没有面向第三方插件的大型扩展框架。深度定制通常要 fork 或在外部编排。

## 文档质量

评分 5/5。README、FAQ、doc/ 页面非常具体，对平台差异、权限、常见错误都有解释 [GH:local-scan]。

## 社区与成熟度

| 维度 | 评分 | 说明 |
|------|------|------|
| 社区活跃度 | 4/5 | 145k 星、13k fork、issue 很多；用户面极广 [GH:api]。 |
| 成熟度 | 5/5 | 2017 年以来的桌面/设备工具积累，当前 v4.1；长期工具成熟不等于无回归，flex display 升级必须在具体设备上验证 [GH:api][GH:v4.1]。 |

## 安全与风险

评分 4/5。本轮 GitHub advisories 返回空，不代表依赖或设备通道安全；Android USB debugging/ADB 本身是高权限通道 [GH:refresh]。v4.1 有数据竞争和捆绑依赖升级记录，但不能据此宣称完成依赖审计 [GH:v4.1]。只连接可信电脑和设备，不公开 TCP/IP ADB；录屏、剪贴板和控制均涉及隐私。

## 学习价值

高。scrcpy 是系统工具工程的好样本：低延迟视频、输入事件、ADB/device server、跨平台发布、文档/FAQ 治理都值得学习。在爬虫语境下，它提醒我们：不是所有“数据入口”都是 HTTP，有时入口是设备。