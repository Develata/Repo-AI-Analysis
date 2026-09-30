---
title: "mdview"
created: 2026-09-29
updated: 2026-09-29
type: repository-analysis
repo_url: "https://github.com/c3er/mdview"
category: "document-processing/editors/markdown"
tags: [markdown, viewer, desktop, electron]
previous_repo: ""
successor: ""
primary_language: "JavaScript"
license: "MIT"
stars: 144
forks: 11
last_checked: 2026-09-29
last_verified: 2026-09-29
evidence: "code review only; GitHub REST metadata/issues/releases, README and pinned master source; no application run or benchmark"
archived_reason: ""
docker_support: false
gpu_required: false
estimated_cpu: "未测；桌面端 CPU 需求取决于文档与图表"
estimated_memory: "未测；未发现官方最小内存指标"
estimated_storage: "v4.0.2 发布包按平台约 103–142 MB；安装占用未测"
status: active
ratings:
  capability: 3
  usability: 4
  performance: 3
  code_quality: 3
  documentation: 3
  community: 3
  maturity: 3
  extensibility: 3
  security: 2
  recommendation: 3
overall_score: 3.0
sources:
  - "[GH:api] GitHub REST https://api.github.com/repos/c3er/mdview checked 2026-09-29 19:02 UTC: stars 144, forks 11, open_issues_count 14 (includes open PRs), created_at 2018-04-14, pushed_at 2026-09-29, archived false, default_branch master, language JavaScript, SPDX MIT; https://api.github.com/repos/c3er/mdview/commits/master SHA ec12098baf0af6b3299a681f15e201f495b3bb1b."
  - "[GH:releases] https://api.github.com/repos/c3er/mdview/releases?per_page=5 checked 2026-09-29: latest published v4.0.2 (2026-08-02); x64.exe 102558880 bytes, x64.msi 114864128, arm64.dmg 119336024, x86_64.AppImage 134117714, x64.zip 141553520; .sha256 assets also published. https://github.com/c3er/mdview/blob/371fb1527edc3253dad3d9bf151f5c4ceef36afa/package.json says 4.0.2; master says 4.0.3 (not established as a published release)."
  - "[GH:issues] https://api.github.com/repos/c3er/mdview/issues?state=all&sort=updated&per_page=20 and GitHub search queries repo:c3er/mdview is:issue is:open, repo:c3er/mdview is:pr is:open checked 2026-09-29: 12 open issues, 2 open PRs; sampled fixed/closed bug reports https://github.com/c3er/mdview/issues/76 (macOS file opening), /78 (Mermaid syntax), /85 (non-ASCII relative paths), /70 (non-ASCII heading navigation); open https://github.com/c3er/mdview/issues/30 (release size suggestion). This sample is not a complete audit of all issues."
  - "[GH:community] https://api.github.com/repos/c3er/mdview/contributors checked 2026-09-29: c3er 858, Anas-Shakeel 6, khatastroffik 3, dependabot[bot] 2 contributions (GitHub API attribution); https://api.github.com/repos/c3er/mdview/languages: JavaScript 264649 bytes, HTML 15393, CSS 10469, Shell 1059, Batchfile 428."
  - "[GH:advisories] https://api.github.com/repos/c3er/mdview/security-advisories checked 2026-09-29 returned []; project-owned published GHSA lookup only, not dependency audit or proof of safety."
  - "[GH:readme] https://github.com/c3er/mdview/blob/ec12098baf0af6b3299a681f15e201f495b3bb1b/README.md — project positioning, distributions, installation, startup/SmartScreen caveats."
  - "[GH:docs] https://github.com/c3er/mdview/blob/ec12098baf0af6b3299a681f15e201f495b3bb1b/doc/flavor.md and /CONTRIBUTING.md — Markdown dialect examples, development and test instructions."
  - "[GH:changelog] https://github.com/c3er/mdview/blob/ec12098baf0af6b3299a681f15e201f495b3bb1b/CHANGELOG.md — v4.0.2 fixes, publisher's VirusTotal detection note (not independent malware confirmation), v4.0.0 external-content controls."
  - "[GH:code] Static inspection of master ec12098baf0af6b3299a681f15e201f495b3bb1b: https://github.com/c3er/mdview/blob/ec12098baf0af6b3299a681f15e201f495b3bb1b/package.json (Electron 43.2.0, markdown-it 14.3.0, mermaid 11.16.0, @electron/remote 2.1.3, scripts; no tracked lockfile); /app/main.js (BrowserWindow webPreferences, remote.enable, file polling); /app/index.js (fs.readFileSync, innerHTML, Mermaid); /app/index.html (script-src 'self' CSP); /app/lib/documentRenderingRenderer.js (html:true); /app/lib/contentBlockingMain.js (webRequest and redirect); /app/lib/storageMain.js (blockContent default true); /app/lib/navigationRenderer.js (openExternal/openPath); /app/lib/ipcMain.js (IPC forwarding). Static inference, no exploit or runtime verification."
  - "[GH:tests] https://github.com/c3er/mdview/blob/ec12098baf0af6b3299a681f15e201f495b3bb1b/.github/workflows/test.yml (owner-only job, macos-latest, npm install + npm run test-all); /test/ (unit and integration spec files); /package.json (test-all command); /CONTRIBUTING.md (dev guide). Tests not run in this analysis; no coverage measurement."
  - "[GH:license] https://github.com/c3er/mdview/blob/ec12098baf0af6b3299a681f15e201f495b3bb1b/LICENSE MIT text; GitHub REST license.spdx_id MIT checked 2026-09-29."
  - "[GH:comparison] Positioning-only comparison from https://github.com/minchenlee/rmdv/blob/017121face0b0a271777631dce97e155c0a09f23/README.md (native Rust/Iced, folder browser and IPC) and https://github.com/newuni/md-viewer/blob/896eec8dba59f9f584eef5ed7fee3beb3bc1b8a3/README.md (macOS native viewer/Quick Look); checked 2026-09-29. These are README claims, not equivalent code/runtime reviews."
---

# mdview

> 为需要打开本地 Markdown 文件、而非构建笔记库的桌面用户提供独立预览窗口。[GH:readme]
>
> **状态**：`active` · **综合评分**：3.0/5 · **推荐度**：3/5
>
> **验证边界**：GitHub API 与固定修订的文档、源码静态检查；未构建、安装、运行应用、执行测试或复测 benchmark。

## 一句话总结

面向已有编辑器、只需在 Windows、Linux 或 macOS 独立阅读本地 Markdown 的用户；不负责写作、管理笔记或启动 Web 服务。[GH:readme]

## 总体评价

项目自 2018 年持续演进，发布跨平台安装包，支持扩展 Markdown 方言、目录、搜索和外部资源阻止；但 Electron 窗口中的不受信任 Markdown HTML 与开启的 Node 集成处于同一个 renderer，令安全边界成为采用前必须审查的重点。以下是主分支静态代码审查与 GitHub 信号，不是本机安装验证或安全漏洞复现。[GH:api][GH:releases][GH:code]

## 推荐度：3/5

**适合使用独立桌面预览器、且只打开可信 Markdown 文件的用户**：可试用发布版，先核对安装包校验和；不要把它当成隔离查看陌生 Markdown 的安全沙箱。浏览器/Node 桥接配置和允许原始 HTML 的渲染方式使安全评分明显低于其他维度；没有独立运行测试或性能数据，不给更高的采用推荐度。[GH:releases][GH:code]

## 优势

1. 以只读预览为核心，发布 Windows、Linux、macOS 包，无须搭建服务。[GH:readme][GH:releases]
2. Markdown 方言说明含缩写、容器、脚注、媒体、表格、数学等示例；代码中使用 markdown-it 插件与 Mermaid。[GH:docs][GH:code]
3. 默认阻止网络 URL 请求，允许临时或持久放行，便于处理文档内外链媒体（不是完整的 HTML 沙箱）。[GH:code][GH:changelog]

## 劣势

1. renderer 显式开启 `nodeIntegration: true`、关闭 `contextIsolation` 并启用 `@electron/remote`；渲染链设置 `html: true` 且将结果写入 `innerHTML`，不宜直接打开来源不明的文档。[GH:code]
2. Electron 发布包在百 MB 量级；README 提到 Windows 启动可能延迟，但本轮未测内存、CPU 或启动耗时。[GH:releases][GH:readme]
3. 产品聚焦查看，不含直接编辑与笔记管理；仓库未追踪 npm lockfile，CI 的测试 job 限仓库 owner 触发，第三方 PR 自动测试覆盖有限。[GH:readme][GH:code][GH:tests]

## 适合什么场景

- 从文件管理器或命令行打开已有本地 Markdown，与另一个编辑器搭配预览。[GH:readme][GH:docs]
- 需要用项目专属方言阅读数学、表格、脚注及 Mermaid 等内容，并接受 Electron 桌面安装包。[GH:docs][GH:code]

## 不适合什么场景

- 把下载自陌生来源的 Markdown 当成不可信输入隔离查看，或要求经过独立验证的 renderer 沙箱；此处的源码边界不足以提供这种保证。[GH:code]
- 要直接编辑 Markdown、建立笔记工作区或将预览部署为浏览器服务；README 明确排除这些定位。[GH:readme]
- 需要经基准验证的低内存/快速启动工具；当前证据没有性能测量，且发布包较大。[GH:releases][GH:readme]

## 与类似项目对比

| 项目 | 定位 | 相对本项目 |
|------|------|-----------|
| rmdv（https://github.com/minchenlee/rmdv） | README 称 Rust/Iced 原生 Markdown 阅读器、目录浏览与 IPC 控制 | mdview 更集中于独立打开单个文件和扩展 Markdown 方言；rmdv 宣称具备工作区浏览与脚本控制。 |
| MDViewer（https://github.com/newuni/md-viewer） | README 称 macOS 原生预览与 Finder Quick Look 扩展 | mdview 发布跨平台安装包；MDViewer 聚焦 macOS Finder 集成。 |

本表仅按同类项目 README 做定位级对比，不引入本批其他分析页的评分；不把对手 README 宣称当作本地验证。[GH:comparison]

## 它能做什么

基于 markdown-it 与多个插件渲染本地文件，提供扩展表格、脚注、数学、媒体和 Mermaid；界面代码含目录、文内搜索、原文视图、打印、最近文件与修改后刷新。README 自述无直接编辑、无 Web 服务。前述是文档及源码层面可见的能力，未逐项实际操作验收。**功能广度 3/5**：阅读核心完整，但没有编辑/笔记工作流。[GH:readme][GH:docs][GH:code]

## 运行环境与资源占用

| 场景 | CPU | 内存 | 存储 | 说明 |
|------|-----|------|------|------|
| 最低配置 | 官方未给定 | 官方未给定 | 安装占用未测 | 本地 Electron 桌面程序，非容器服务。[GH:readme][GH:code] |
| 发布包参考 | 未测 | 未测 | v4.0.2 x64 EXE 102,558,880 B；AppImage 134,117,714 B；DMG 119,336,024 B | 文件下载尺寸，不等于安装后占用或运行内存。[GH:releases] |

- **运行时**：预编译桌面包自带 Electron；源码开发按 CONTRIBUTING 需 Node.js/npm。[GH:readme][GH:docs][GH:code]
- **操作系统**：Windows x64、Linux x86_64、macOS arm64 见已核对发布资产；不要据此推断其他 CPU 架构有官方包。[GH:releases]
- **Docker / GPU**：未发现用户向官方 Docker 镜像；无需专用 GPU（Electron 图形窗口仍依赖桌面图形环境）。[GH:readme][GH:releases][GH:code]
- **效率判断 3/5**：发布包体积可核实，Electron 有运行时开销的架构因素；但未跑基准，无法推算启动速度、内存峰值或相对原生应用的效率。[GH:releases][GH:readme][GH:code]

## 上手体验

**4/5**。README 提供各平台发布包及 Windows winget/Scoop 命令，也可 `npm start path/to/file.md` 开发启动；读取本地文件的使用模型简单。macOS 签名/Windows SmartScreen 与防病毒软件相关体验在 README 中有提示，但本轮未安装验证；这些注意事项使“零摩擦”结论不成立。[GH:readme][GH:docs]

## 代码质量

**3/5**。`app/main.js` 与 renderer `app/index.js` 通过 IPC 和按功能划分的 `app/lib/*Main.js`、`*Renderer.js` 组织；有单元/集成规格、ESLint/Prettier/Mocha 的 `test-all` 和 CI 工作流，说明存在维护意愿。局限是窗口 renderer 能直接读文件/调用 Node，IPC 不构成安全隔离；`fs.readFileSync` 进入渲染流程可能阻塞大文件（静态风险，非性能测量）；未跟踪依赖锁文件，CI 的 `if: github.actor == github.repository_owner` 使外部 PR 不运行该 job。本轮未执行测试，也未知覆盖率。[GH:code][GH:tests]

## 可扩展性

**3/5**。渲染层组合多个 markdown-it 插件，方便开发者修改方言、样式与行为，但仓库未展示面向最终用户的独立插件安装机制或稳定扩展 API；深入定制预计需改源码与重新打包。不要把内置插件依赖等同于可插拔生态。[GH:code][GH:docs]

## 文档质量

**3/5**。README 有安装、已知问题和定位，`doc/flavor.md` 提供项目特有语法示例，CONTRIBUTING 有命令与调试提示；但没有完整的 renderer 信任边界指南、资源要求或公开可复核的性能报告，复杂内部行为需读源码。CONTRIBUTING 中关于 CI 平台的描述应以当前工作流文件为准。[GH:readme][GH:docs][GH:tests]

## 社区与成熟度

| 维度 | 评分 | 说明 |
|------|------|------|
| 社区活跃度 | 3/5 | GitHub 核对时 144 stars、11 forks，贡献主要集中在 c3er（API 归因 858 次）；近期有 issue/PR 交互，但并非多维护者生态。[GH:api][GH:community][GH:issues] |
| 成熟度 | 3/5 | 2018 年建库、2026 年仍有维护，最新已发布 v4.0.2；v4 主版本变化与近版回归修复可见，缺少广泛生产使用或长期无破坏性变更的证据。[GH:api][GH:releases][GH:changelog] |

GitHub REST `open_issues_count=14` **包含 PR**；分别查询得到 12 条 open issue、2 条 open PR。最近更新的关闭条目含 macOS 打开文件、Mermaid 语法、中文路径及非 ASCII 标题跳转等修复，说明真实边缘用例曾出错、也有维护响应，不能由关闭状态推断所有用户环境已通过回归验收。[GH:api][GH:issues][GH:changelog]

## 安全与风险

**2/5**。主分支 BrowserWindow 设置 `nodeIntegration: true`、`contextIsolation: false`，并 `remote.enable(webContents)`；本地 Markdown 经 `markdown-it` 的 `html: true` 后注入 renderer `innerHTML`。即便 `index.html` 设有 `script-src 'self'` 的 CSP，且网络请求默认由 `webRequest.onBeforeRequest` 阻断，这些措施不能自动等同于隔离已注入的 HTML 与 Node 权限；HTML/资源/导航组合仍应按高风险攻击面评估。当前代码检查**并未证明存在可利用的具体漏洞**，也没有动态攻击验证。[GH:code]

外链可由 renderer 交给系统 `openExternal`/`openPath`；网络拦截基于 `common.isWebURL(url)` 并存在持久放行及重定向处理，不能把它说成所有协议、所有上下文都被禁止。仓库无 tracked npm lockfile，依赖声明版本固定也不等于完整传递依赖已审计。发布包附 SHA-256 文件，但校验下载内容不等于发行者签名。[GH:code][GH:releases]

2026-09-29 项目 GH Security Advisories API 返回 `[]`，仅表示这次查询未发现项目已发布 GHSA，**不代表依赖无漏洞或软件安全**。项目 LICENSE 与 API 标识均为 MIT。CHANGELOG 记录过 VirusTotal 针对 v4.0.2 DMG 的某一引擎告警；仅是维护者记录，不能直接定性恶意软件或保证误报，安装应从官方发布页取包并自行校验。[GH:advisories][GH:license][GH:changelog][GH:releases]

## 学习价值

适合研究 Electron 本地文件预览器如何组织 Markdown 渲染、导航、外部资源阻止和跨平台发布；尤其值得用作“功能可用与 renderer 权限安全是两回事”的代码审查案例，不宜把现有 Node/HTML 边界作为安全默认模板。[GH:code][GH:docs]
