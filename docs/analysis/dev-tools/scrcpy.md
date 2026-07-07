---
title: "scrcpy"
created: 2026-07-07
updated: 2026-07-07
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
last_checked: 2026-07-07
last_verified: 2026-07-07
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
  performance: 5
  code_quality: 4
  documentation: 5
  community: 4
  maturity: 5
  extensibility: 3
  security: 4
  recommendation: 5
overall_score: 4.4
sources:
  - "[GH] https://github.com/Genymobile/scrcpy"
  - "[GH:api] GitHub REST snapshot 2026-07-07: stars=145199, forks=13397, REST open_issues_count=2848, Search API open issues=2767 and open PRs=81, language=C, license=Apache-2.0, latest_release=v4.0, created_at=2017-11-21, pushed_at=2026-07-02"
  - "[GH:advisory] GitHub repository security-advisories API queried 2026-07-07; returned []"
  - "[GH:local-scan] Local shallow clone /opt/data/tmp/repo-wiki-crawler-batch-2026-07-07/repos/scrcpy at commit 2322868e9e256eb5fce0b3d659ab2a409f29bae1 dated 2026-05-12; git ls-files=370, test/spec-ish files=21, workflows=1, Docker-related files=0, docs/governance-ish files=26; checked README.md, FAQ.md, meson/build.gradle files"
  - "[GH:readme] README local scan 2026-07-07: mirrors Android video/audio over USB or TCP/IP, controls keyboard/mouse, no root, no app installed, Linux/Windows/macOS, Android API >=21 and audio API >=30; requires USB debugging except OTG mode"
---

# scrcpy

> Android 设备镜像与控制工具的事实标准之一：对“移动端无网站可爬”的场景，它不是爬虫库，而是把手机变成可自动化/可观测对象的桥。
>
> **状态**: `active` · **总分**: 4.4/5 · **推荐度**: 5/5

## 一句话总结

scrcpy 适合需要从电脑控制、录制、调试或自动化 Android 真机的开发者；在移动数据采集链路中，它是基础设施而非解析器。

## 总体评价

截图把 scrcpy 放进“爬虫工具”清单里是合理但需限定的：它不会帮你解析网页，也不会绕过反爬；它解决的是“目标只存在于 Android app / 移动 UI”时的设备控制问题。README 明确支持 USB/TCPIP 镜像、键鼠控制、音频、录制、camera mirroring、OTG 等，并且无需 root、无需在设备安装 app [GH:readme]。作为 Android remote-control utility，它非常优秀。

## 推荐度：5/5

**目标角色**：Android 开发者、测试工程师、移动端自动化/采集研究者、需要控制真机的 power user。若你的任务是“操作 Android 设备”，scrcpy 是优先试用工具；这里的 5/5 仅按 Android remote-control utility 评分，不按 web scraping 框架评分。若你的任务是“抽取网页结构化数据”，它只解决入口层，不替代 Appium、OCR、UIAutomator、数据解析和合规策略。

## 优势

1. **非侵入式**：无需 root，无需设备端安装 app，退出后不留东西 [GH:readme]。
2. **跨平台成熟**：Linux/Windows/macOS 支持，2017 年以来长期维护 [GH:api]。
3. **性能/资源效率好**：C + Android server 架构，面向实时视频/控制优化。
4. **文档极完整**：README、FAQ、doc/ 下大量主题页面覆盖连接、音频、设备、相机、OTG 等 [GH:local-scan]。

## 劣势

1. **不是 crawler/parser**：不负责结构化抽取、去重、存储、调度。
2. **依赖 ADB/USB debugging**：部分 OEM，尤其安全设置严格的系统，需要额外配置 [GH:readme]。
3. **issue 数巨大**：open issues 超过 2700，很多来自设备/系统/驱动差异 [GH:api]。
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

上述项目按 `dev-tools` Android/automation 工具做定位级对比，未按同一 10 维度框架深审。

---

## 它能做什么

- USB 或 TCP/IP 连接 Android 设备并镜像视频/音频。
- 用电脑键盘鼠标控制设备。
- 录制屏幕、camera mirroring、虚拟 display、OTG control 等 [GH:readme]。
- 配合 ADB 和外部自动化工具形成移动端采集/测试链路。

## 运行环境与资源占用

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

评分 4/5。C/Meson + Android server 结构长期维护，release 稳定；本地浅扫测试文件不算多，但项目性质偏系统工具，真实质量更多体现在多年用户反馈和持续 release [GH:local-scan][GH:api]。

## 可扩展性

评分 3/5。命令行参数和 ADB 组合能力强，但没有面向第三方插件的大型扩展框架。深度定制通常要 fork 或在外部编排。

## 文档质量

评分 5/5。README、FAQ、doc/ 页面非常具体，对平台差异、权限、常见错误都有解释 [GH:local-scan]。

## 社区与成熟度

| 维度 | 评分 | 说明 |
|------|------|------|
| 社区活跃度 | 4/5 | 145k 星、13k fork、issue 很多；用户面极广 [GH:api]。 |
| 成熟度 | 5/5 | 2017 年以来长期维护，v4.0，功能边界稳定 [GH:api]。 |

## 安全与风险

评分 4/5。本轮 GitHub advisories 返回空，但 Android USB debugging/ADB 本身是高权限通道 [GH:advisory][GH:readme]。只连接可信电脑和可信设备；不要在不可信环境暴露 TCP/IP ADB；录屏/控制可能涉及隐私数据。

## 学习价值

高。scrcpy 是系统工具工程的好样本：低延迟视频、输入事件、ADB/device server、跨平台发布、文档/FAQ 治理都值得学习。在爬虫语境下，它提醒我们：不是所有“数据入口”都是 HTTP，有时入口是设备。