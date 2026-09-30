---
title: "Tinta"
created: 2026-09-29
updated: 2026-09-29
type: repository-analysis
repo_url: "https://github.com/oipoistar/tinta"
category: "document-processing/editors/markdown"
tags: [markdown, desktop, windows, viewer, editor, cpp]
previous_repo: ""
successor: ""
primary_language: "C++"
license: "MIT"
stars: 195
forks: 25
last_checked: 2026-09-29
last_verified: 2026-09-29
evidence: "README、发布/API 与固定 SHA 源码静态审阅；未在 Windows 构建、运行、测试或测量性能"
archived_reason: ""
docker_support: false
gpu_required: false
estimated_cpu: "未测量；需要可运行 Windows 桌面应用的 CPU"
estimated_memory: "未测量；项目没有提供可核对的最低 RAM 指标"
estimated_storage: "发布页 tinta.exe 为 2,592,768 字节（仅可执行文件；非总安装或运行占用）"
status: active
ratings:
  capability: 4
  usability: 4
  performance: 3
  code_quality: 3
  documentation: 4
  community: 3
  maturity: 2
  extensibility: 3
  security: 3
  recommendation: 3
overall_score: 3.2
sources:
  - "[GH:api] GitHub REST https://api.github.com/repos/oipoistar/tinta 及 /languages、/contributors，2026-09-29 UTC：创建 2025-12-05，master HEAD=db70698e49a1f700c7ad98add1bebe713ac796bd（默认分支修订，不据此等同 release tag），archived=false，stars=195、forks=25、open_issues_count=5（含 PR）；C++ 为最大语言，贡献者端点本页返回 7 人、主维护者 207 次提交，其他人各 1–3 次。此为时间点快照。"
  - "[GH:release] https://github.com/oipoistar/tinta/releases/tag/v3.7.4 与 https://api.github.com/repos/oipoistar/tinta/releases/latest，2026-09-29 UTC：v3.7.4 于 2026-09-22 发布，非 prerelease；资产 tinta.exe 2,592,768 字节，发布说明给出 SHA256 494EB39D8709ADE5222F35AE28E47F4A5A13D6FD6187222D9A98038ACE7A7A17；未下载重算或验证签名。"
  - "[GH:readme] https://github.com/oipoistar/tinta/blob/db70698e49a1f700c7ad98add1bebe713ac796bd/README.md#L24-L297：Windows/Direct2D/DirectWrite、Store/便携安装、功能、快捷键/配置、Pandoc 可选导出、构建、文件关联和 MD4C 依赖；<100ms、约 2.5MB 和竞品速度属于 README 宣称，未实测。"
  - "[GH:docs] https://github.com/oipoistar/tinta/tree/db70698e49a1f700c7ad98add1bebe713ac796bd/docs：math-support、syntax-highlighting、frontmatter、theme-colours、footnotes 专题文档；README 有快捷键/用法/构建说明；未见完整架构/贡献者开发手册。"
  - "[GH:issues] https://api.github.com/repos/oipoistar/tinta/issues?state=open&per_page=30，2026-09-29 UTC：返回 5 项，其中开放 issue #249（图片放大交互 bug/历史记录开关请求）、#240（字符数需求）与开放 PR #246、#247、#248；https://github.com/oipoistar/tinta/issues/242 报告 Esc 从编辑返回阅读回归，2026-09-22 关闭且 v3.7.4 发布说明记载修复；https://github.com/oipoistar/tinta/issues/240 有维护者回复，拟议中的 WYSIWYG 非已交付功能。"
  - "[GH:advisories] https://api.github.com/repos/oipoistar/tinta/security-advisories，2026-09-29 UTC 返回 []，仅表示本次检查该仓库无已发布 GHSA，不证明依赖或应用安全。"
  - "[Local:build] https://github.com/oipoistar/tinta/blob/db70698e49a1f700c7ad98add1bebe713ac796bd/CMakeLists.txt#L1-L33 与 #L35-L160、#L280-L362：C++17、Windows 库、MD4C FetchContent 锁定 729e6b8b320caa96328968ab27d7db2235e4fb47，模块化源码清单与 CTest 测试目标；在 Linux 仅静态查看，未配置或编译。"
  - "[Local:ci] https://github.com/oipoistar/tinta/blob/db70698e49a1f700c7ad98add1bebe713ac796bd/.github/workflows/build.yml#L1-L70：Windows CI 在 v* tag 推送时 configure/build/ctest 并发布 exe，workflow_dispatch 仅 Store 任务；actions/checkout@v4 与 softprops/action-gh-release@v1 非 SHA pin。CI 存在不代表每次 PR 已经通过测试。"
  - "[Local:security] https://github.com/oipoistar/tinta/blob/db70698e49a1f700c7ad98add1bebe713ac796bd/src/main_d2d.cpp#L1171-L1229 定位 GitHub HTTPS 版本检查；https://github.com/oipoistar/tinta/blob/db70698e49a1f700c7ad98add1bebe713ac796bd/src/pandoc.cpp#L115-L165 用户路径/PATH 定位本地 pandoc 并于 #L79-L103 CreateProcessW；README #L41-L43 警告便携 exe 未签名可能触发 SmartScreen。静态审阅不能确认输入安全或权限隔离。"
  - "[Local:license] https://github.com/oipoistar/tinta/blob/db70698e49a1f700c7ad98add1bebe713ac796bd/LICENSE#L1-L21 为 MIT 全文；GitHub REST license.spdx_id=MIT（2026-09-29 UTC）。"
  - "[Local:governance] https://github.com/oipoistar/tinta/blob/db70698e49a1f700c7ad98add1bebe713ac796bd/AGENTS.md#L1-L7 要求 fixture、人工渲染/导出验证、回归测试；该 SHA 根目录未发现 SECURITY.md、CONTRIBUTING.md 或 CODE_OF_CONDUCT.md。"
  - "[Peer:fast] https://github.com/Quetzalcohuatl/fastmarkdownviewer/blob/main/README.md，2026-09-29 UTC 读取：定位跨 Windows/macOS/Linux 的只读本地 Markdown 查看。"
  - "[Peer:rmdv] https://github.com/minchenlee/rmdv/blob/main/README.md，2026-09-29 UTC 读取：Rust/Iced 文件夹阅读器，提供 CLI/IPC 控制。"
  - "[Peer:mdviewer] https://github.com/newuni/md-viewer/blob/main/README.md，2026-09-29 UTC 读取：macOS Finder Quick Look 与 Markdown 预览。"
---

# Tinta

> 面向 Windows 上以阅读 Markdown、Mermaid 为主、偶尔轻量编辑的用户的原生桌面程序。
>
> **状态**：`active` · **综合评分**：3.2/5 · **推荐度**：3/5
>
> **验证边界**：本次在 Linux 阅读固定提交 `db70698e49a1f700c7ad98add1bebe713ac796bd` 的源码、README 与 GitHub API；未在 Windows 构建、运行、执行测试或复现启动耗时/RAM/导出效果，产品功能按文档宣称与代码结构证据区别表述。[GH:api] [Local:build]

## 一句话总结

Tinta 是面向 Windows 本地 Markdown/Mermaid 阅读、兼顾轻量编辑和导出的原生 C++ 工具，不是跨平台协作文档系统。[GH:readme]

## 总体评价

它以单文件便携版、系统原生绘制、目录浏览和多种导出为卖点；README 功能面广，源码有分模块实现与测试目标，但还没有本次 Windows 实测来证明渲染兼容、资源效率和日常稳定性。项目创建于 2025 年末，迭代和 bug 修复活跃，尚不能把高版本号当作长期成熟证据。[GH:readme] [Local:build] [GH:api] [GH:issues]

## 推荐度：3/5

**适合需要在 Windows 快速浏览本地 Markdown、愿意先用非敏感文件试用并自行验证便携/Store 安装来源的个人用户。** 推荐作为候选而非直接替代成熟主力编辑环境：仅 Windows、近期编辑模式 Esc 回归已修复但仍有图片交互 bug 反馈；对 Mermaid、数学和导出保真度应拿自己的文档试读。阅读优先、编辑辅助的边界要比 README 功能清单更重要。[GH:readme] [GH:issues] [GH:release]

## 优势

1. README 提供 Microsoft Store 与便携 exe 两条安装路线，并详述快捷键、文件关联、配置与源码构建步骤。[GH:readme]
2. 阅读端兼顾目录、搜索、标签页、主题、Mermaid 与数学表达式；HTML/DOCX/PDF 原生导出及可选 Pandoc 桥接扩展格式均在仓库说明或源码中可定位，**未验证实际输出质量**。[GH:readme] [Local:build] [Local:security]
3. CMake 明确固定 MD4C 的 commit，CTest 注册回归测试；发行版 tag 工作流有 Windows 构建及测试步骤。[Local:build] [Local:ci]

## 劣势

1. Windows Direct2D/DirectWrite 专用；不能直接用于 macOS/Linux 桌面。[GH:readme] [Local:build]
2. README 的小体积和冷启动速度并非本次复现的性能数据，内存/大文档负载没有可信实测。[GH:readme] [GH:release]
3. 年龄短，编辑体验仍在迭代；现存用户报告图片灯箱 bug，开放的高级搜索/预览修改 PR 不应算作已交付功能。[GH:api] [GH:issues]
4. 发布 CI 只覆盖 tag 推送，仓库尚无在本次快照可见的专门安全披露政策；需要自行把关便携 exe 与可选 Pandoc 路径。[Local:ci] [Local:governance] [Local:security]

## 适合什么场景

- Windows 文件资源管理器中双击本地 `.md` / `.mmd` 阅读，随时查看目录、图表、数学公式，必要时小范围修改。[GH:readme]
- 希望用 Store 更新机制或独立便携 exe，而不打算启动完整知识库/IDE；可用真实文件自行对照 HTML、DOCX、PDF 导出效果。[GH:readme]

## 不适合什么场景

- macOS/Linux 用户，或要求跨设备同步、协作、插件市场、可编程编辑 API 的团队。[GH:readme] [Local:build]
- 将未测试的 Mermaid 方言、复杂数学或 DOCX/PDF 排版作为合规交付前提的流程；README 承认部分未覆盖的 Mermaid 类型退化显示为源码。[GH:readme]
- 无法接受便携版签名/来源风险、或需要经自己验证的内存与冷启动 SLA 的环境。[GH:readme]

## 与类似项目对比

| 项目 | 定位 | 相对本项目 |
|------|------|-----------|
| FastMarkdownViewer | 原生跨平台只读 Markdown 查看器 | 侧重多系统只读场景；Tinta 文档则包含 Windows 上的编辑与导出路径。[Peer:fast] [GH:readme] |
| rmdv | Rust/Iced 桌面文件夹阅读器 | 侧重 CLI/IPC 驱动现有阅读窗口；Tinta 侧重 Windows 原生窗口和辅助编辑。[Peer:rmdv] [GH:readme] |
| MDViewer | macOS Finder Quick Look Markdown 预览 | 侧重 Finder 预览和 macOS；Tinta 面向 Windows 文件关联和独立阅读。[Peer:mdviewer] [GH:readme] |

本表仅依据上述项目 README 做定位级对比，不引入本批其他分析页的评分，也没有同条件性能复测；不能据此推断优劣。[Peer:fast] [Peer:rmdv] [Peer:mdviewer]

## 它能做什么

**能力 4/5**：在 Windows 文档阅读与轻编辑这一限定范围内，涵盖目录/搜索、图表/数学和多格式导出；平台限制与未做功能验收使其不宜给满分。[GH:readme] [Local:build]

README 宣称支持 `.md`/`.mmd`、标题目录、查找、标签页和文件夹浏览、十套内置主题、编辑模式、LaTeX 数学、Mermaid、多格式导出；源码目录包含 `editor.cpp`、`mermaid*.cpp`、`math_*`、`export_html.cpp`、`export_docx.cpp`、`pandoc.cpp` 等相应模块，属于实现线索而非功能全面验收。[GH:readme] [Local:build]

HTML/DOCX/PDF 在 README 列为直接导出；EPUB/ODT/PPTX/RTF/LaTeX 需要安装 Pandoc，其中 LaTeX 走原 Markdown 输入、其他扩展格式从 Tinta HTML 中转。编辑器并非专业 WYSIWYG 的已交付承诺：字符数 issue 中维护者称新版 WYSIWYG 尚在开发。[GH:readme] [Local:security] [GH:issues]

## 运行环境与资源占用

| 场景 | CPU | 内存 | 存储 | 说明 |
|------|-----|------|------|------|
| 便携阅读 | 未测 | 未测 | v3.7.4 发布 exe：2,592,768 字节 | 数值只代表发布资产，不等于安装目录、缓存或总 RAM。[GH:release] |
| 扩展导出 | 未测 | 未测 | 额外依赖 Pandoc，大小未核实 | EPUB/ODT/PPTX/RTF/LaTeX 需本机 Pandoc。[GH:readme] [Local:security] |

- **运行时**：Windows 本地 GUI，C++17 + MD4C + Direct2D/DirectWrite；没有浏览器内核需求的宣称不等于无外部调用。[GH:readme] [Local:build]
- **操作系统**：仓库仅说明 Windows 和 VS 2019+/CMake 3.15+ 的源码构建方式；不推断最低 Windows 版本。[GH:readme]
- **Docker**：没有核实官方用户 Docker 镜像；桌面程序无 Docker 并非产品缺陷。[GH:readme]
- **GPU**：代码使用 Windows 图形栈；未验证离散 GPU 是否必要，不能从“硬件加速”推出 GPU 必需。[GH:readme] [Local:build]
- **联网/外部依赖**：MD4C 在 CMake 配置时按固定 commit 获取；便携版的更新检查代码请求 GitHub HTTPS；扩展导出执行用户指定或系统 PATH 中的 Pandoc。README 的 `<100ms` 启动和其他产品对比未测，资源效率保守给 **3/5**。[Local:build] [Local:security] [GH:readme]

## 上手体验

**4/5。** README 有 Store、winget（Store 源）、便携、Scoop 与 `tinta.exe document.md` 示例，热键表和文件关联指令具体；Windows 用户有较短的理论上手路径。但便携 exe 的 SmartScreen 提示、Pandoc 的额外配置及未经实机检查的安装顺畅度，使其不能按零配置完美体验打 5 分。[GH:readme]

## 代码质量

**3/5。** `CMakeLists.txt` 按 Markdown、Mermaid、编辑器、渲染、导出等模块列出源文件，注册 parser/布局/输入相关 CTest；`AGENTS.md` 要求 fixtures 和手工渲染检查，是正面维护信号。[Local:build] [Local:governance] CI 只在发 tag 时运行且 action 使用版本标签而非固定 SHA；本次没有测试执行结果、覆盖率或实际崩溃率，不能将测试清单等同于已验证稳定。近期 Esc 编辑回归被反馈后在 v3.7.4 发布说明中记录修复，亦提示变动路径需持续回归。[Local:ci] [GH:issues] [GH:release]

## 可扩展性

**3/5。** 可定制主题、语言和快捷键，INI 可在便携目录中承载设置；Pandoc 对导出格式有外部扩展作用。仓库未在本次审阅到通用插件 SDK/API 或自动化钩子说明，深度改造 Mermaid/排版仍偏向修改 C++ 源码并重编译；这不同于宣称完全不可定制。[GH:readme] [Local:security] [Local:build]

## 文档质量

**4/5。** README 给安装、键位、命令、Mermaid 支持范围、主题、依赖、构建实例；`docs/` 有数学、语法高亮、frontmatter、脚注与颜色专题。面向最终用户结构清楚，但未见完整源码架构导览、安全披露说明或覆盖边缘用法的开发者文档，故非 5 分。[GH:readme] [GH:docs] [Local:governance]

## 社区与成熟度

| 维度 | 评分 | 说明 |
|------|------|------|
| 社区 | 3/5 | 2026-09-29 UTC 快照为 195 stars、25 forks；贡献者 API 本页 7 人，但提交明显集中于作者；#240 有维护者回复，#242 关闭并进入修复说明，同时 #249 仍开放。流量与回复不足以证明大规模生态。[GH:api] [GH:issues] |
| 成熟度 | 2/5 | 仓库创建于 2025-12，v3.7.4 于 2026-09 发布且近期仍有编辑流程回归；没有长期兼容或生产用户证据，不能由 3.x 版本号推定稳定性。[GH:api] [GH:release] [GH:issues] |

REST `open_issues_count=5` 包含 3 条开放 PR；本次分离后是 2 条开放 issue + 3 条开放 PR，而不是“五个待修 bug”。此处是快照，不代表 backlog 增长趋势。[GH:api] [GH:issues]

## 安全与风险

**3/5。** 仓库 MIT 与 GitHub API 识别一致；2026-09-29 UTC 查询其已发布 GitHub Security Advisories 得到 `[]`，这只是未查到仓库 GHSA，不能证明 MD4C、Pandoc 或本体无漏洞。[Local:license] [GH:advisories] 输入面包括不可信 Markdown/图片/链接/图表与本地文件访问；便携版 README 自述新 exe 可能未经代码签名，发布页有 SHA256 文本但本次未下载重算，若要用于敏感文件需校验来源。可选 Pandoc 由用户配置或 PATH 搜索后作为本地进程执行，应谨慎选择可执行文件并隔离不可信文档；更新检查有发往 GitHub 的 HTTPS 请求，不能把“本地桌面”解读为绝对离线或无联网。[GH:readme] [GH:release] [Local:security] CI 发版流程使用未固定提交 SHA 的第三方 action，供应链风险未审计；也未在该 SHA 根目录找到 SECURITY.md。以上是暴露面和验证缺口，非已证实漏洞。[Local:ci] [Local:governance]

## 学习价值

适合研究 C++17 + Windows Direct2D/DirectWrite 桌面文档查看器、MD4C 集成、原生 Mermaid/数学渲染、CTest fixtures 及 HTML→Pandoc 扩展导出的结构；应结合测试代码与 Windows 实机输出学习，不要直接用 README 的性能表当实验结论。[Local:build] [GH:readme] [Local:security]
