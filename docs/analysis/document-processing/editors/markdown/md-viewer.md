---
title: "MDViewer"
created: 2026-09-29
updated: 2026-09-29
type: repository-analysis
repo_url: "https://github.com/newuni/md-viewer"
category: "document-processing/editors/markdown"
tags: [markdown, macos, quicklook, swift, viewer]
previous_repo: ""
successor: ""
primary_language: "Swift"
license: "MIT"
stars: 5
forks: 0
last_checked: 2026-09-29
last_verified: 2026-09-29
evidence: "固定 SHA 的 README/Swift 源码和 GitHub REST 静态审阅；Linux 未安装 Swift/macOS，未构建运行或测量"
archived_reason: ""
docker_support: false
gpu_required: false
estimated_cpu: "未测；需要 macOS 14+ 桌面设备"
estimated_memory: "未测；项目未公布可核查的最低 RAM 要求"
estimated_storage: "未测；未核查发布包解压后的安装体积"
status: active
ratings:
  capability: 3
  usability: 3
  performance: 3
  code_quality: 3
  documentation: 3
  community: 2
  maturity: 2
  extensibility: 2
  security: 2
  recommendation: 2
overall_score: 2.5
sources:
  - "[GH:api] GitHub REST https://api.github.com/repos/newuni/md-viewer、/languages、/contributors 与 /commits?per_page=1，2026-09-29 UTC 查询：创建 2026-02-27，archived=false，stars=5、forks=0、open_issues_count=3（含开放 PR），主语言 Swift（128573 字节），仅 newuni 34 次和 dependabot[bot] 3 次归因提交；main SHA 896eec8dba59f9f584eef5ed7fee3beb3bc1b8a3，最近 main commit 时间 2026-05-05；仓库 pushed_at 2026-06-19（不同于 main commit 时间）。这些是时间点快照。"
  - "[GH:release] https://api.github.com/repos/newuni/md-viewer/releases/latest 和 /releases?per_page=5，2026-09-29 UTC：最新 v0.1.26 于 2026-05-05 发布，提供 MDViewer.app.zip 与 MDViewer.app.zip.sha256；未下载校验资产。"
  - "[GH:issues] https://api.github.com/repos/newuni/md-viewer/issues?state=open&per_page=30，2026-09-29 UTC：3 项全为未合并 Dependabot PR：#4 action-gh-release 2→3、#5 swift-markdown 0.7.3→0.8.0、#6 checkout 6→7；当前该响应无开放的独立 issue，不等于无缺陷或维护者响应及时。"
  - "[GH:advisories] https://api.github.com/repos/newuni/md-viewer/security-advisories，2026-09-29 UTC 返回 []：只代表这次查询未发现该仓库已发布 GHSA，不代表安全或依赖无漏洞。"
  - "[GH:readme] https://github.com/newuni/md-viewer/blob/896eec8dba59f9f584eef5ed7fee3beb3bc1b8a3/README.md#L1-L116：功能、macOS 14+/Swift 6/Xcode 开发要求、CLI 命令、未签名且未公证的安装包、quarantine 移除命令与 Quick Look 需正确代码签名、无签名版可能退回纯文本；Mermaid HTML 模式依赖 jsDelivr。均非本机实测。"
  - "[Local:architecture] 固定 SHA 896eec8dba59f9f584eef5ed7fee3beb3bc1b8a3： https://github.com/newuni/md-viewer/blob/896eec8dba59f9f584eef5ed7fee3beb3bc1b8a3/Package.swift#L1-L42 为 macOS 14+ Swift package，MarkdownRendererCore、md-viewer CLI 和 swift-markdown、swift-testing；/App/Sources/MDViewerApp/MarkdownDocumentView.swift#L600-L656 为原生/HTML 回退和基于文件尺寸的分级；/Extensions/MDViewerQuickLookExtension/PreviewProvider.swift#L1-L51 为原生 RTF 预览失败时输出 HTML 的 Quick Look 路径；均为源码静态审阅，未执行。"
  - "[Local:renderer] https://github.com/newuni/md-viewer/blob/896eec8dba59f9f584eef5ed7fee3beb3bc1b8a3/Sources/MarkdownRendererCore/MarkdownRenderer.swift#L126-L174、#L184-L235、#L250-L266、#L362-L402、#L481-L539、#L877-L935：先由 swift-markdown 转 HTML，再正则过滤 script/iframe/object/embed、双引号或单引号事件属性及 javascript: URL；原生路径用 NSAttributedString 读取 HTML，遇 Mermaid 改用 HTML；HTML 插入 jsDelivr 固定版本 mermaid@11.13.0 ES module，设 securityLevel strict；这不是完整 HTML sanitizer 或离线资源保证。"
  - "[Local:webview] https://github.com/newuni/md-viewer/blob/896eec8dba59f9f584eef5ed7fee3beb3bc1b8a3/App/Sources/MDViewerApp/HTMLWebView.swift#L43-L95：WKWebViewConfiguration 建视图、loadHTMLString(html, baseURL:nil) 和 activeHeading 消息 handler；该片段未见 CSP、导航或外部资源拦截配置。源码可定位风险，不等于证明存在可利用漏洞。"
  - "[Local:tests] https://github.com/newuni/md-viewer/blob/896eec8dba59f9f584eef5ed7fee3beb3bc1b8a3/Tests/MarkdownRendererCoreTests/MarkdownRendererCoreTests.swift#L1-L573：含基础渲染、链接清洗、Mermaid、元数据、大文件和 macOS 原生路径断言；https://github.com/newuni/md-viewer/blob/896eec8dba59f9f584eef5ed7fee3beb3bc1b8a3/.github/workflows/ci.yml#L1-L38 在 macos-latest 的 push/PR 运行 swift test、生成 Xcode 工程和无签名构建。此 Linux 环境 swift --version 返回 command not found，未运行测试、未审阅 CI 结果或测覆盖率。"
  - "[Local:release] https://github.com/newuni/md-viewer/blob/896eec8dba59f9f584eef5ed7fee3beb3bc1b8a3/.github/workflows/release.yml#L47-L94：标签触发 macOS swift test、无签名构建、zip 和 SHA-256 旁文件、GitHub Release；README #L80-L105 明确 Quick Look 签名限制；校验和不等于代码签名/公证。"
  - "[Local:governance] https://github.com/newuni/md-viewer/blob/896eec8dba59f9f584eef5ed7fee3beb3bc1b8a3/CONTRIBUTING.md#L1-L28 有贡献和测试说明；/SECURITY.md#L1-L16 限 0.x 最新 minor 支持并引导私密披露；/ROADMAP.md#L31-L42 将签名公证和更大文件性能分析列为未完成项；/LICENSE#L1-L21 为 MIT 正文，REST SPDX MIT。"
  - "[Peer:local] /opt/data/wiki/github-repo-wiki/document-processing/editors/markdown/tinta.md、rmdv.md、mdview.md 于 2026-09-29 查阅其项目定位；仅用于同目录定位，非本轮复测或交叉评分。"
  - "[Peer:fast] https://github.com/Quetzalcohuatl/fastmarkdownviewer/blob/main/README.md：同目录 Tinta 分析中的 README 定位引用，作为跨平台只读查看器的分类参照；本轮未独立审阅其源码、安装包或性能。"
---

# MDViewer

> 面向 macOS 用户的本地 Markdown 查看、Finder Quick Look 和 HTML 导出工具；发布包未签名/公证，Quick Look 不保证可用。[GH:readme]
>
> **状态**：`active` · **综合评分**：2.5/5 · **推荐度**：2/5
>
> **验证边界**：仅在 Linux 静态查看 main SHA `896eec8dba59f9f584eef5ed7fee3beb3bc1b8a3` 和 GitHub API；未在 macOS 安装、构建、运行、测试 Finder 扩展、核验发布资产或测量性能。[GH:api] [Local:tests]

## 一句话总结

MDViewer 面向想在 macOS 阅读本地 Markdown 并利用 Finder 预览的用户，但其未签名发布包会使核心 Quick Look 体验无法作为开箱即用承诺。[GH:readme]

## 总体评价

原生优先、HTML 兼容回退的技术路线，以及独立 CLI、目录/搜索和文件变化刷新，使它比单纯文件预览样例更完整；但 macOS 专属、早期 0.x、单人主导，加上发行包签名限制和 Mermaid 联网 WebKit 回退，令直接采用价值低于源码学习价值。未运行产品，不把 README 的轻量和大文件能力当作性能实测。[GH:readme] [GH:api] [Local:architecture] [Local:renderer]

## 推荐度：2/5

**适合愿意在个人 macOS 设备上用可信 Markdown 试验原生预览、且能自行签名 Xcode 构建的开发者；不推荐把现成发布包作为依赖 Finder Quick Look 的稳定生产工具。** README 明示发行包未签名/公证，Quick Look 扩展可能退回纯文本；移除 quarantine 只是绕过本地拦截，不会替安装包建立可信签名。若必须离线读私有图表或打开来源不明的文件，还要规避 Mermaid CDN/WebView 边界。[GH:readme] [Local:release] [Local:renderer]

## 优势

1. Finder 扩展、独立应用和 CLI 共享 MarkdownRendererCore，构建层次清晰。[Local:architecture]
2. 标题导航、查找、主题、文件刷新、front matter 与 HTML 导出在 README 有使用说明或在源码中有路径，未做 GUI 端到端验收。[GH:readme] [Local:architecture]
3. macOS CI 设计包含 Swift 包测试和应用构建，安全报告政策和 MIT 授权可查；不把 CI 定义视为已验证全部运行路径。[Local:tests] [Local:governance]

## 劣势

1. 官方发行构建未签名/公证，Finder Quick Look 的核心承诺存在安装后失效风险。[GH:readme] [Local:release]
2. Mermaid HTML 回退引入联网 CDN 模块与 WebKit 执行边界；正则过滤 HTML 不能等同可信安全边界。[Local:renderer] [Local:webview]
3. macOS 专用、0.x 且主要贡献来自单人；没有本轮运行与内存/启动性能数据。[GH:api] [GH:release] [Local:tests]

---

## 适合什么场景

- 自行用 Xcode 配置开发团队签名，在本机试用 Finder Quick Look；先验证系统实际加载扩展。[GH:readme]
- 查看可信的 `.md`、`.markdown`，需要快速阅读、搜索、目录或 `md-viewer --export-html` 的个人流程。[GH:readme]

## 不适合什么场景

- 管理设备要求有公证/签名发行包、不能移除 quarantine、且 Finder 预览必须可靠的部署。[GH:readme] [Local:release]
- 强制离线或机密 Markdown 含 Mermaid、要求严格隔离不受信任 HTML/外链的阅读环境；当前代码未证明沙箱隔离或 CDN 请求阻断。[Local:renderer] [Local:webview]
- Windows/Linux 原生桌面用户，或需要 Markdown 编辑、同步、插件体系的团队。[GH:readme] [Local:architecture]

## 与类似项目对比

| 项目 | 定位 | 相对本项目 |
|------|------|-----------|
| Tinta | Windows 阅读兼轻编辑 | 以 Windows 独立桌面阅读/编辑为重心；MDViewer 以 macOS Finder Quick Look 为重心。[Peer:local] [GH:readme] |
| FastMarkdownViewer | 跨平台只读查看 | 以跨 Windows/macOS/Linux 的独立查看定位作参照，非 Finder 扩展替代验收。[Peer:fast] [GH:readme] |
| rmdv | Rust/Iced 文件夹阅读器 | 侧重文件夹阅读与 CLI/IPC，MDViewer 侧重 Finder/原生预览。[Peer:local] [GH:readme] |
| mdview | Electron 多平台 Markdown 阅读器 | 侧重跨平台独立窗口，MDViewer 则聚焦 macOS 原生和 Quick Look。[Peer:local] [GH:readme] |

本表只依据同类项目的定位说明作比较，不引入本批其他分析页的评分；未做同条件运行或性能测量，不据此判定优劣。[Peer:local] [Peer:fast]

---

## 它能做什么

README 列出 Finder 快速预览、原生阅读、目录导航/查找、主题与外观、粘贴预览、文件变化刷新、命令面板以及 HTML 导出；核心 Swift 包将文本转 HTML 并为原生 attributed-text 路径复用，Mermaid 则切 HTML 模式。可见实现和测试断言，但不证明 GUI 与 Finder 在发行包上按预期工作。**能力 3/5**：本地查看常用功能齐全，但平台和核心扩展交付限制显著。[GH:readme] [Local:architecture] [Local:renderer] [Local:tests]

## 运行环境与资源占用

| 场景 | CPU | 内存 | 存储 | 说明 |
|------|-----|------|------|------|
| 基本阅读 | 未测 | 未测 | 未测 | macOS 14+；发布包实际大小/安装体积未核查。[GH:readme] |
| 开发构建 | 未测 | 未测 | 未测 | 需 Swift 6、Xcode；生成工程需 XcodeGen。[GH:readme][Local:architecture] |

- **运行时**：原生路径生成 attributed text；Mermaid 或失败场景生成 HTML 并可能走 WKWebView；非所有文档都不联网。[Local:architecture] [Local:renderer] [Local:webview]
- **操作系统**：macOS 14+；**Docker**：无官方服务镜像需求；**GPU**：无专用 GPU 要求；**外部依赖**：Swift 包依赖 swift-markdown / swift-testing，Mermaid HTML 模式需 jsDelivr。[GH:readme] [Local:architecture] [Local:renderer]
- **性能 3/5**：源码按 50 KB、500 KB、5 MB 分级并自动 fast mode，测试含大字符串渲染断言；无冷启动、RSS 或真实大文件对比数据，不能据此评定高效率。[Local:architecture] [Local:tests]

## 上手体验

**易用性 3/5**：应用/CLI 有 README 示例与发布 zip；源码开发需 XcodeGen/Xcode，且 Finder Quick Look 的首次配置依赖有效代码签名。README 提供 qlmanage、pluginkit 排障命令，但“下载即预览”不成立；本人未走 macOS 首次使用流程。[GH:readme] [Local:release]

## 代码质量

**代码质量 3/5**：Core、CLI、App、Quick Look 分层，测试覆盖基础 Markdown、部分净化、front matter、Mermaid 与原生路径；CI 在 macOS 构建和跑包测试。与此同时 renderer 既有正则 HTML 处理又有 native/HTML 双路径，需审慎维护；未运行测试、测覆盖率或审查 CI 是否绿灯，不推断生产可靠性。[Local:architecture] [Local:renderer] [Local:tests]

## 可扩展性

**扩展性 2/5**：MarkdownRendererCore 与 MarkdownRenderOptions 可复用、可配置主题/外观/字体和 fast mode；未见插件协议、外部渲染器注册或主题插件接口，深度自定义倾向于改 Swift 源码重新构建。CLI 的 HTML 导出是集成出口而非插件系统。[Local:architecture] [Local:renderer] [GH:readme]

## 文档质量

**文档 3/5**：README 涵盖特性、CLI、安装、签名限制和 Finder 排障；CONTRIBUTING、SECURITY、ROADMAP 提供参与和风险背景。未见详细架构说明、资源基准或 HTML 安全模型指南，了解回退路径仍需读代码。[GH:readme] [Local:governance] [Local:architecture]

## 社区与成熟度

| 维度 | 评分 | 说明 |
|------|------|------|
| 社区活跃度 | 2/5 | API 仅记录一位人类贡献者及 Dependabot；开放项 3 件均为机器人 PR，不宜把 issue=0 当作广泛用户验证。[GH:api] [GH:issues] |
| 成熟度 | 2/5 | 2026-02 创建、最新 0.1.26 于 2026-05 发布；发布包签名/公证和极大文件 profiling 仍在 roadmap，未有长期稳定证据。[GH:api] [GH:release] [Local:governance] |

`active` 只指未归档、已有可见维护轨迹，不代表近日仍高频更新或 Quick Look 交付稳定。[GH:api] [GH:release]

## 安全与风险

**安全 2/5**：`SECURITY.md` 提供私密报告入口、MIT 明确；本次 GHSA 接口返回空列表，仅说明没有在该接口发现已发布项目通告。[Local:governance] [GH:advisories]

核心风险是打开本地不可信 Markdown：renderer 在 HTML 输出前使用正则删除几类标签、属性和 `javascript:` URL，而不是经证明的完整 HTML sanitizer；Mermaid 引发 HTML/WebKit 路径，文档生成的页面从 jsDelivr 导入版本固定但非本地捆绑的模块，Quick Look 原生失败也回退到临时 HTML 文件。`securityLevel: 'strict'` 是 Mermaid 配置，不代表 WKWebView 所有资源、导航和 JS 已受隔离；所审片段未见 CSP/导航阻断。风险属于静态推断，未复现漏洞或核验网络请求。对敏感文件建议禁用/规避 Mermaid、先确认外链行为，切勿将其当不可信文档沙箱。[Local:renderer] [Local:webview] [Local:architecture]

发布工作流只产生 zip 与 SHA-256 旁文件，明确不签名/公证；校验和可检测下载完整性（需要自行验证并信任来源），不能替代开发者身份与系统信任链。README 提议移除 quarantine 的操作应谨慎评估，不是修复 Quick Look 签名缺口。[GH:readme] [Local:release]

## 学习价值

适合研究 SwiftUI + QuickLookUI 如何共用 Swift 包、原生富文本与 HTML/WebKit 兼容回退、如何通过发布工作流输出 macOS 包及校验和；更值得学习的是签名要求、第三方脚本与 HTML 净化如何限制一个“本地预览器”的安全和交付边界。此为源码阅读价值，不等于推荐未经验证地部署。[Local:architecture] [Local:renderer] [Local:release]
