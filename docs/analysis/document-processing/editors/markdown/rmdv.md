---
title: rmdv
created: 2026-09-29
updated: 2026-09-29
type: repository-analysis
repo_url: https://github.com/minchenlee/rmdv
category: document-processing/editors/markdown
tags: [markdown, rust, iced, desktop, ipc, mindmap]
primary_language: Rust
license: MIT
stars: 13
forks: 1
last_checked: 2026-09-29
last_verified: 2026-09-29
evidence: "GitHub API + README/docs + pinned-source static review; no build, GUI execution, benchmark or dependency audit"
docker_support: false
gpu_required: false
estimated_cpu: "普通桌面 CPU；无本轮测量"
estimated_memory: "未实测；图片、图表、搜索规模影响峰值"
estimated_storage: "Linux v0.7.0 AppImage 20,964,544 bytes；安装后占用未测"
status: active
ratings:
  capability: 3
  usability: 4
  performance: 3
  code_quality: 3
  documentation: 4
  community: 3
  maturity: 2
  extensibility: 3
  security: 2
  recommendation: 3
overall_score: 3.0
sources:
  - "[GH] https://api.github.com/repos/minchenlee/rmdv — checked 2026-09-29T19:02:13Z: stars=13, forks=1, open_issues_count=0 (includes PRs), archived=false, created_at=2026-05-09T14:25:06Z, pushed_at=2026-09-12T16:28:11Z, default_branch=main, license=MIT. Local shallow clone HEAD=017121face0b0a271777631dce97e155c0a09f23, commit time=2026-08-14T22:55:09+08:00; pushed_at is not main's last commit time. All following source checks on 2026-09-29 UTC."
  - "[GH:release] https://api.github.com/repos/minchenlee/rmdv/releases?per_page=10 — latest returned release v0.7.0, published 2026-08-14T14:16:20Z, prerelease=false; assets include Linux x86_64 AppImage (20,964,544 bytes), macOS aarch64/x86_64 DMG and app.tar.gz, rmdv.exe, NSIS setup, SHA256SUMS, latest.json. https://github.com/minchenlee/rmdv/releases/tag/v0.7.0"
  - "[GH:community] https://api.github.com/repos/minchenlee/rmdv/contributors — returned minchenlee (216 contributions), claude (1); contributor attribution is not proof of independent human maintainers. https://api.github.com/repos/minchenlee/rmdv/issues?state=all&per_page=100 — non-PR sample #6 closed, 0 comments, created 2026-06-21, closed 2026-07-17: Bug: CJK emphasis (bold/italic) rendering fails when adjacent to punctuation and Chinese characters; https://github.com/minchenlee/rmdv/issues/6"
  - "[GH:ci] https://api.github.com/repos/minchenlee/rmdv/actions/runs?per_page=3 — main inspected SHA run https://github.com/minchenlee/rmdv/actions/runs/31811899476 success; newer run 34705321703 failed on different SHA 149d276972c236d840089e1058c8f9348a09dc39. No claim that all current branches are green."
  - "[GH:security] https://api.github.com/repos/minchenlee/rmdv/security-advisories — returned []; only no published repository GHSA found, not a dependency vulnerability audit."
  - "[GH:readme] https://github.com/minchenlee/rmdv/blob/017121face0b0a271777631dce97e155c0a09f23/README.md — features, installs, platform boundaries, IPC examples, block math, PDF/HTML export roadmap, historical benchmark and AI-assistance disclosure."
  - "[GH:build] https://github.com/minchenlee/rmdv/blob/017121face0b0a271777631dce97e155c0a09f23/Cargo.toml — version 0.7.0, Rust 1.80 declared, iced 0.14, pulldown-cmark 0.12, liteparse 2 optional/default PDF, OCR defaults disabled, fixed-revision Mermaid renderer; LICENSE at same SHA is MIT, copyright 2026 minchenlee."
  - "[GH:ipc] https://github.com/minchenlee/rmdv/tree/017121face0b0a271777631dce97e155c0a09f23/src/ipc — socket.rs lines 3–15: UID/USERNAME name; server.rs lines 15–32 and 50–84: default ListenerOptions, sequential clients, unbounded read_line, no explicit authentication, peer-identity check, mode/ACL setting or server-side request timeout; types.rs: navigation, current, screenshot, close and other commands. src/app.rs lines 8213–8322 handles current/file/folder, navigation dirty guard and screenshot destination."
  - "[GH:render] https://github.com/minchenlee/rmdv/blob/017121face0b0a271777631dce97e155c0a09f23/src/parser.rs — table/task/strike options, CJK preprocessing, DisplayMath to diagram, InlineMath literal text, unhandled events ignored; src/tex.rs common-subset parser; src/pdf.rs PDFium text extraction, OCR=false, ImageMode::Off; src/diagram.rs native diagram pipeline, semaphore=3, source cap 64 KiB, SVG cap 4 MiB, soft cache budget 256 MiB."
  - "[GH:network] https://github.com/minchenlee/rmdv/blob/017121face0b0a271777631dce97e155c0a09f23/src/app.rs — lines 12182–12238: HTTP(S) image fetch with 15-second timeout but full-body buffering and no response-byte cap in that function; external links routed to OS. src/update.rs: GitHub manifest, same-repo URL prefix, 200 MiB artifact limit, SHA-256 verify on download and before apply, user-confirmed install, Windows excluded; predictable temporary staging paths and separate verify/use operations."
  - "[GH:quality] https://github.com/minchenlee/rmdv/blob/017121face0b0a271777631dce97e155c0a09f23/.github/workflows/ci.yml — Linux tests/build/AppImage CLI smoke, formatting limited to app.rs and cli_install.rs; src/app.rs inspected through line 18190 shows concentrated GUI orchestration and inline tests. Parser tests, tests/ and snapshot assets exist; none executed here."
  - "[GH:status] https://github.com/minchenlee/rmdv/blob/017121face0b0a271777631dce97e155c0a09f23/docs/BACKLOG.md — MDV-002 search/highlight memory bounds, MDV-003 image-only PDF feedback, MDV-006 stale docs, MDV-007 wide-directory discovery cap, MDV-008 formatting/Clippy debt, MDV-021 release hardening; PROJECT_STATUS.md records Windows native launch unverified and DMG outer-container signing follow-up. These are upstream records, not this analysis's tests."
  - "[GH:bench] https://github.com/minchenlee/rmdv/blob/017121face0b0a271777631dce97e155c0a09f23/docs/benchmarks.md — upstream v0.2.0, 2026-05-10, Apple M2/macOS 26.1; startup first_view about 150 ms, parse-only 10k lines about 8.1 ms; historical, not current-version independently measured results."
  - "[GH:comparison] https://github.com/c3er/mdview/blob/HEAD/README.md and https://github.com/newuni/md-viewer/blob/HEAD/README.md — fetched via authenticated GitHub README API on 2026-09-29: c3er/mdview standalone read-only Electron viewer; newuni/md-viewer macOS native attributed-text/Quick Look, Mermaid browser-runtime fallback and HTML export. Positioning only, not full peer audit."
---

# rmdv

> 面向需要浏览 Markdown 文件夹、原生图表和脚本控制窗口的开发者，提供 Rust/Iced 桌面阅读器及轻量编辑能力。
>
> **状态**：`active` · **综合评分**：3.0/5 · **推荐度**：3/5
>
> **验证边界**：GitHub API 与固定修订的文档、源码静态检查；未构建、运行 GUI、复测 benchmark 或做依赖漏洞审计。

## 一句话总结

rmdv 是以阅读工作区为中心、可通过本地 IPC 被脚本或 coding agent 操控的原生 Markdown 查看器，不是浏览器壳，也不是具备权限隔离的 agent 执行平台。[GH:readme][GH:ipc]

## 总体评价

它的价值在于把目录树、全文搜索、文档/工作区脑图、块级公式和轻量编辑放到一个原生窗口中，同时让外部程序精确定位文件与章节。比单文件预览器丰富，但原生渲染不是浏览器语法兼容层：行内数学仍显示源文，PDF 是文本抽取而非版式还原，HTML/PDF 导出仍在路线图。[GH:readme][GH:render]

当前应视为**小规模试用工具**。有真实发布、测试和主分支 CI 证据，却也有明确的缓存内存、文档漂移和发布加固待办；IPC 缺少应用层授权与请求资源边界，限制了安全采用场景。本轮只审查 API、文档和固定 SHA 源码，没有编译、启动 GUI 或复现性能数字。[GH:ci][GH:status][GH:ipc]

## 推荐度：3/5

适合在可信个人桌面上阅读技术笔记、希望脚本把窗口跳转到指定段落的开发者，前提是接受原生渲染的兼容边界并使用非关键文档先验证。目录阅读和控制接口有实际差异化，但 IPC 不应直接暴露给低信任 agent 或共享主机上的不可信进程；它也不能替代完整 TeX/PDF 阅读、排版和知识库插件系统。[GH:readme][GH:render][GH:ipc]

给 3 而不是 4：当前还需要验证自己的图表/公式语料、窗口操作与平台打包体验；历史 benchmark 和维护者发布验收不能代替本轮部署证据，且已观察到具体安全设计缺口。[GH:bench][GH:status][GH:ipc]

## 优势

1. **原生阅读路线明确**：Iced、pulldown-cmark、tree-sitter、Rust 图表/数学组件组合，不依赖 Electron 或嵌入浏览器渲染主界面。[GH:build]
2. **工作区导航完整度高于单文件预览**：文件树、vault-wide search、文档脑图、Full Mindmap、命令面板与实时重载都有文档及源码路径。[GH:readme][GH:quality]
3. **脚本控制是第一类能力**：单实例 CLI 返回 JSON，支持打开、章节跳转、视图模式、当前状态；`list-sections` 可无窗口运行。[GH:readme][GH:ipc]
4. **性能工程有具体实现而非仅口号**：视口感知渲染、图表并发限制和缓存预算可查；不把这些实现直接换算为当前性能优于竞品。[GH:render][GH:bench]

## 劣势

1. **兼容性有实质边界**：行内公式、复杂 TeX、任意 HTML/CSS 和浏览器 Mermaid 等价性不能默认成立；原生图表库不是官方 JS 引擎本体。[GH:render][GH:build]
2. **PDF 容易被名称误导**：仅文本抽取式、只读预览，不保留完整页面图像，扫描件没有 OCR，空文本反馈仍列在待办。[GH:render][GH:status]
3. **工作区规模的资源边界尚未收齐**：搜索结果和高亮缓存预算有待办，极宽目录的初始发现也有已记录限制。[GH:status]
4. **桌面权限就是主要信任边界**：无应用层 IPC 授权、串行请求缺少超时/长度控制，不能把“本地”误当作天然安全。[GH:ipc]

## 适合什么场景

- 在 macOS/Linux 上浏览代码库的 Markdown 文档，并用已有编辑器配合 live reload。[GH:readme]
- 需要目录和章节结构的可视化，而不想先建立 vault 数据库或静态站点。[GH:readme]
- 可信脚本执行 `open`、`goto`、`current`，把人工阅读窗口与外部开发流程衔接；不要求 agent 在应用内自主推理。[GH:ipc]
- 对文本 PDF 做便捷阅读，明确接受失去原始版式和图像，而不是审校出版物。[GH:render]

## 不适合什么场景

- 要求与 GitHub/浏览器逐像素一致、复杂 HTML 布局或完整 Mermaid/TeX 语法兼容。[GH:render]
- 扫描 PDF OCR、精确 PDF 排版、出版导出，以及把行内公式渲染当作硬性要求的数学笔记。[GH:readme][GH:render]
- 多租户桌面、低信任 agent 控制或把 IPC 转发到网络使用；当前接口不是受限远程服务。[GH:ipc]
- 依赖广泛插件生态和多年稳定接口承诺的长期团队工具链。[GH:community][GH:build]

## 与类似项目对比

| 项目 | 定位 | 相对本项目 |
|------|------|-----------|
| [c3er/mdview](https://github.com/c3er/mdview) | 独立、只读的 Electron Markdown 查看器 | 更专注单纯查看，不提供直接编辑；rmdv 把原生渲染、工作区脑图与 IPC 控制放在中心。 |
| [newuni/md-viewer](https://github.com/newuni/md-viewer) | macOS 原生预览与 Finder Quick Look 工具 | 更强调 Finder 集成和 HTML 导出，Mermaid 使用浏览器运行时回退；rmdv 更偏跨平台工作区导航与原生图表。 |

本表仅依据同类项目 README 做定位级对比，不引入本批其他分析页的评分；没有同条件实测，不据此推断速度、安全性或渲染准确率胜负。[GH:comparison]

## 它能做什么

**功能广度：3/5。** 常用 Markdown 阅读、编辑、文件/章节导航、搜索和结构脑图覆盖面不错，但数学、PDF 和渲染兼容限制是实质缺口，而非仅界面细节。[GH:readme][GH:render]

- **Markdown**：表格、任务列表、删除线、代码高亮、标题折叠；CJK 强调规则另有预处理与回归测试。解析器不是任意 HTML 渲染器，未处理事件被忽略，不能假定完整 GFM 扩展支持。[GH:render]
- **图表和数学**：Mermaid、DOT、块级 LaTeX 数学由原生库处理。`InlineMath` 被转换成带 `$` 的文本，`.tex` 走自制常用子集解析，不执行完整 TeX 排版；复杂宏与布局必须用样本验证。[GH:build][GH:render]
- **PDF**：`liteparse`/PDFium 抽取文本后交给 Markdown 路径，关闭 OCR 和图像输出，PDF 编辑请求会退回查看模式。[GH:render][GH:ipc]
- **自动化**：IPC 包含打开文件/目录、定位、切换模式、查询路径/模式、截图、调整窗口和关闭等；没有因此获得独立 agent 推理或工具编排能力。[GH:ipc]

## 运行环境与资源占用

**资源效率：3/5。** 原生实现与缓存限制是正面信号，但未做当前版本 benchmark，且上游明确留下搜索/高亮内存预算工作，不能给出低内存保证。[GH:render][GH:status]

| 场景 | CPU | 内存 | 存储 | 说明 |
|------|-----|------|------|------|
| 普通 Markdown 阅读 | 普通桌面 CPU，未测最低规格 | 未实测 | Linux v0.7.0 AppImage 20,964,544 bytes | 这是发布包大小，不是运行内存或安装总量。[GH:release] |
| 大目录、图片和复杂图表 | 解析/布局随输入增加 | 存在缓存与解码峰值 | 随文档和图片增长 | 图表缓存的软预算为 256 MiB，不是进程内存硬上限。[GH:render] |
| 文本 PDF | 本地 PDFium 抽取 | 全文抽取规模相关，未测 | 需 PDFium 动态库 | 默认 PDF feature；可构建不含 PDF 的版本。[GH:build][GH:render] |

- **系统**：发布资产覆盖 macOS arm64/x86_64、Linux x86_64 和 Windows；Windows 构建要求关闭默认 features，PDF 仅承诺 macOS/Linux。[GH:release][GH:readme]
- **Docker**：未核实官方用户镜像，记为 false；这是桌面产品定位，不是扣分理由。
- **GPU**：在所查 Cargo/渲染路径中未见独立计算 GPU 的必需依赖；Iced 图形渲染仍需可用桌面/图形后端，本轮没有验证无 GPU 的 headless GUI 运行。[GH:build][GH:render]
- **外部依赖**：Rust 构建、操作系统图形依赖与 PDFium；“不含浏览器”不等于完全无原生动态依赖。[GH:build][GH:quality]

README 的约 150 ms 启动与约 8.1 ms/万行解析是上游 **v0.2.0、Apple M2、2026-05-10** 的历史数据；启动测点是 `first_view`，不是本轮实际屏幕呈现测量，解析也不含完整高亮和绘制。不能外推为当前 Windows/Linux 或 PDF 的表现。[GH:bench]

## 上手体验

**4/5。** 官方提供 DMG/AppImage 和 Windows 安装资产，README 的打开文件夹、快捷键与 CLI 示例清楚，普通阅读不需部署服务。这个评分针对文档所描述的主流安装流程，不代表已在所有平台成功启动。[GH:release][GH:readme]

建议先用发布包打开自己的 Markdown 样本，再尝试 `rmdv list-sections sample.md`、`rmdv goto --section "标题"` 和 `rmdv current`。macOS/Linux 可从命令面板安装 CLI；Windows 无 PDF feature 且上游发布记录把原生 Windows 启动列为未验证，不能把已有 EXE 等同完整平台验收。[GH:readme][GH:status]

源码声明 Rust 1.80+，但本轮没有验证锁文件所有依赖的真实最低工具链兼容性，也没有执行安装、构建或截图。[GH:build]

## 代码质量

**3/5。** `parser`/AST、`diagram`、PDF、IPC、主题和 GUI 分模块，有内联单测、集成/快照测试及 Linux 构建测试流水线；检查的主分支 SHA 对应 CI 成功，是比仅存在配置更强的证据。[GH:quality][GH:ci]

但 GUI 状态编排、网络加载、IPC 分派和大量测试集中在超过万行的 `app.rs`，改动耦合较高；仓库也明确记录格式化/Clippy 债务，CI 的 rustfmt 仅覆盖两个指定文件。未测覆盖率，不将 AI 辅助生成或详尽工作记录本身当作品质保证。[GH:quality][GH:status][GH:readme]

最新查询还包含不同 SHA 上的失败 CI，故只能说“本轮检查主分支修订通过”，不能泛称全项目当前全绿。[GH:ci]

## 可扩展性

**3/5。** CLI/JSON IPC 是有用的集成表面，可以让外部脚本控制现有窗口；主题预设和 Rust 模块也提供一定改造基础。但未见成熟的第三方运行时插件契约，增加渲染语法或深度行为主要仍需修改 Rust 源码。[GH:ipc][GH:build]

需要特别区分“可脚本控制”与“细粒度授权 API”：目前连接者之间没有按 agent、命令或目录划分能力，不能把外部集成便利性当作权限安全性。[GH:ipc]

## 文档质量

**4/5。** README 覆盖安装、功能、快捷键、CLI、技术栈与历史 benchmark；还有 demo、设计、发布记录、项目状态和明确 backlog，适合追踪功能边界。[GH:readme][GH:bench][GH:status]

弱点是部分开发文档本身被上游标为陈旧，计划、维护者本机验收和当前发布能力混杂，需读源码校正。尤其 IPC 权限模型、PDF 图像丢失和行内数学限制不能仅从“支持 LaTeX/PDF”概括中理解。没有据此给满分。[GH:status][GH:render][GH:ipc]

## 社区与成熟度

| 维度 | 评分 | 说明 |
|------|------|------|
| 社区活跃度 | 3/5 | 规模小、维护者集中，但有发布、合并和 bug 处理，不是无人响应的废弃仓库。 |
| 成熟度 | 2/5 | 2026 年 5 月建仓，当前 0.7.0；接口和功能仍快速形成，未见长期稳定契约。 |

2026-09-29 UTC API 快照为 13 stars、1 fork、0 个开放 issue/PR 合计。贡献者端点返回 `minchenlee` 216 次和 `claude` 1 次归属，不应解释为两个独立人类维护者。零 backlog 的 GitHub 计数也不能覆盖 `docs/BACKLOG.md` 内仍开放的产品问题。[GH][GH:community][GH:status]

真实 bug 样本 #6 是 CJK 标点相邻时强调失效，已关闭，当前解析器有对应修正/回归代码；不能再作为未修复故障，也不能以单例推断普遍响应速度。最新发布 v0.7.0 虽标记 `prerelease=false`，仍不等于有多年稳定性的成熟产品。[GH:community][GH:render][GH:release]

## 安全与风险

**2/5。** 分数主要由可查的本地控制面和资源限制缺口决定，而不是由“新项目”或 CVE 猜测决定。本轮 repository advisories 端点返回空数组，只表示未找到该仓库发布的 GHSA；没有运行依赖漏洞审计，不能声称依赖无漏洞。[GH:security]

1. **IPC 不是授权层。** Unix 使用 `$TMPDIR/rmdv-<uid>.sock`（回退 `/tmp`），Windows 使用按用户名命名的 pipe。应用绑定代码未显式设置 socket mode/pipe ACL、校验 peer 身份或要求 token；实际跨用户可达性仍取决于目录权限、umask 和系统/库默认值，不能仅凭名字带 UID 就认定隔离有效，也不能反向断言所有用户均可连接。[GH:ipc]
2. **可连接者有较广控制能力。** 除定位外，还有当前文件/目录查询、关闭窗口和指定路径截图。文件打开没有在此 IPC 分派层限制到一个预授权 workspace；有未保存修改保护，但那是防误操作，不是低信任 agent 的目录沙箱。不要把 socket 转发给远端，避免以高权限用户运行。[GH:ipc]
3. **请求级拒绝服务缺口明确。** 服务端串行处理连接，以无长度上限的 `read_line` 等待换行，也未见服务器读超时；一个可连接进程即可占住控制通道，超长请求还可能推高内存。这是静态路径发现，未做攻击复现，不夸大成已验证远程漏洞。[GH:ipc]
4. **不执行网页脚本不等于无网络风险。** 远程图片会经 HTTP(S) 获取，超时不等于大小限制，源码该函数完整缓冲响应；不可信文档可能触发网络请求、泄露访问行为或造成资源压力。PDFium、图像和 SVG 解析也增加原生输入面，宜用可信文档并保持依赖更新。[GH:network][GH:render]
5. **更新有完整性措施，但不构成独立信任链。** 同仓库下载 URL 限制、大小检查、下载及安装前 SHA-256 校验、用户确认是正面措施；hash 与包来自同一发布渠道，无法防御该渠道同时被篡改。临时路径可预测，校验与后续使用分离，仍应进一步审计竞争窗口。macOS 签名/公证是上游记录，DMG 外层独立签名加固仍列待办；本轮未下载验证签名。[GH:network][GH:status]
6. **许可证边界。** GitHub metadata 与源码 LICENSE 均为 MIT，可修改再分发但须保留许可声明；打包时仍应核对 PDFium、字体和其他依赖的独立通知义务，本轮没有做完整许可证闭包审计。[GH][GH:build]

## 学习价值

适合研究“Markdown AST → 原生 widget”、视口裁剪、图表缓存/异步任务、CJK 强调预处理与源坐标映射，以及将 CLI 请求桥接到 GUI 消息循环的实现。阅读时应把 `app.rs` 的复杂度与 IPC 边界欠缺一起看：值得借鉴的是组件路线和可核实的性能工程，不是照搬全部权限与资源处理方式。[GH:render][GH:quality][GH:ipc]

如果只想为个人笔记增加快捷预览，先试普通阅读路径；如果要作为 agent 的可控展示工具，则应先补 peer/权限边界、请求大小/超时与路径能力限制，再谈可靠集成。[GH:ipc]
