---
title: "Puppeteer"
created: 2026-06-19
updated: 2026-09-10
type: repository-analysis
repo_url: "https://github.com/puppeteer/puppeteer"
category: "dev-tools"
tags: [browser-automation, chrome, firefox, cdp, webdriver-bidi, typescript, nodejs]
previous_repo: ""
successor: ""
primary_language: "TypeScript"
license: "Apache-2.0"
stars: 95560
forks: 9571
last_checked: 2026-09-10
last_verified: 2026-09-10
evidence: "GitHub API/releases/security/README/manifests and official Docker/BiDi docs static review 2026-09-10; no current browser install/launch/e2e/benchmark; June import-only smoke retained as historical"
archived_reason: ""
docker_support: true
gpu_required: false
estimated_cpu: "library overhead modest; browser rendering and concurrency dominate"
estimated_memory: "browser processes and page workload dominate; unmeasured"
estimated_storage: "npm packages plus managed browser cache and output artifacts"
status: active
ratings:
  capability: 5
  usability: 4
  performance: 4
  code_quality: 4
  documentation: 5
  community: 4
  maturity: 4
  extensibility: 4
  security: 3
  recommendation: 4
overall_score: 4.1
sources:
  - "[GH:api] https://api.github.com/repos/puppeteer/puppeteer checked 2026-09-10 UTC+8: canonical unchanged, archived=false, disabled=false, main, pushed_at=2026-09-09T16:25:33Z, TypeScript, Apache-2.0, stars=95560, forks=9571, created_at=2017-05-09; separate GitHub search open issues=245, open PRs=11"
  - "[GH:release] https://api.github.com/repos/puppeteer/puppeteer/releases?per_page=10 checked 2026-09-10: puppeteer/puppeteer-core v25.10.0 and browsers v3.2.2 published 2026-09-03. core notes add video-stream-based page.record() (#15387), Firefox 155, websocket dead-connection detection and userDataDir error distinctions; browsers v3.2.2 reverts detached Windows launch for flakiness. No release capability was executed locally."
  - "[GH:readme] https://github.com/puppeteer/puppeteer/blob/main/README.md inspected 2026-09-10 via contents API; tree snapshot 499c713ae7256c4322dc3f760f223ead2afcb0a3. High-level Chrome/Firefox CDP/BiDi API, puppeteer versus puppeteer-core browser-download split, blocked installation-script warning, npx puppeteer browsers install, experimental WebMCP and separate chrome-devtools-mcp pointer"
  - "[GH:package] https://github.com/puppeteer/puppeteer/blob/main/package.json and packages/puppeteer/package.json / packages/puppeteer-core/package.json inspected 2026-09-10: Node>=22.12.0; monorepo scripts for Chrome/Firefox tests, types, docs, dependency/license validation. Recursive tree has 1558 blob paths; no current test or coverage run."
  - "[GH:security] https://github.com/puppeteer/puppeteer/blob/main/SECURITY.md and https://api.github.com/repos/puppeteer/puppeteer/security-advisories?per_page=100 inspected 2026-09-10; advisory endpoint returned []; security policy describes powerful browser installation/automation/inspection and caller responsibility, intentional file writes/extensions"
  - "[Docs:docker] https://pptr.dev/guides/docker read 2026-09-10: official ghcr.io/puppeteer/puppeteer includes Chrome for Testing and Puppeteer, version tags; documented sandbox image requires SYS_ADMIN; not pulled or run"
  - "[Docs:bidi] https://pptr.dev/webdriver-bidi read 2026-09-10: Firefox defaults to BiDi, Chrome defaults to CDP; Chrome BiDi opt-in; unsupported operations throw UnsupportedOperation; no assertion of complete cross-protocol parity"
  - "[Local:historical-smoke] Historical 2026-06-19 wiki record: puppeteer-core@25.1.0 npm import succeeded, launch/connect exports were functions; no browser download or launch. Not v25.10.0 runtime evidence."
  - "[WikiLocal:comparison] Existing Puppeteer analysis used Playwright and Selenium WebDriver as browser-automation positioning comparators; no fresh competitor ten-dimension audit"
---

# Puppeteer

> 长期维护的 Chrome/Firefox 高层控制库；25.10.0 增加 page.record()，但浏览器权限、安装脚本和协议差异仍由调用方管理。
>
> **状态**: `active` · **总分**: 4.1/5 · **推荐度**: 4/5

## 一句话总结

Puppeteer 适合 Node.js/TypeScript 开发者做真实浏览器自动化、截图/PDF 和页面调试；它是控制浏览器的库，不是隔离不可信自动化的安全沙箱 [GH:readme][GH:security]。

## 总体评价

核心抽象仍是 Browser/Page/Frame/Locator 等高层对象，下面连接 CDP 或 WebDriver BiDi。Chrome 与 Firefox 默认协议不同，不应假定同一 API 在所有协议组合上等价 [Docs:bidi]。

本轮从旧 25.1.0 更新到最新 release **25.10.0**，实质新增包括视频流录制 `page.record()`；当前 README 还指出安装脚本被 package manager 阻止时，需要单独安装浏览器 [GH:release][GH:readme]。代码质量和社区从旧 5/5 校准为 4/5：没有本轮覆盖率或响应时延证据支撑最高档，不把 TypeScript/CI/星数当成满分证明。

## 推荐度：4/5

**目标角色**：接受现代 Node 运行时、能维护浏览器版本和部署环境的测试/自动化工程师。受控测试、截图、PDF 和 DevTools 研究值得优先评估；高价值账号或不可信网页自动化应先设计账号、出口和文件权限边界。

不评 5 的原因不是功能弱，而是浏览器系统依赖、sandbox、缓存、录制资源和协议差异都是真实运维成本。本轮未运行浏览器，不能用旧 import smoke 宣称新功能可用 [Local:historical-smoke]。

## 优势

1. 导航、页面输入、locator、截图/PDF 和网络控制有统一库入口 [GH:readme]。
2. `puppeteer-core` 可由调用方自行管理浏览器，避免把下载策略绑死 [GH:readme]。
3. 官方 Docker 和 BiDi 文档明确交付与协议边界 [Docs:docker][Docs:bidi]。
4. 版本持续跟进浏览器，25.10.0 加入新录制能力并修复连接/启动问题 [GH:release]。

## 劣势

1. 真正成本在浏览器，不是 `npm install` 的库大小。
2. CDP/BiDi 与 Chrome/Firefox 并不完整等价 [Docs:bidi]。
3. 安装脚本受阻可能造成库已装、浏览器未装的假完成 [GH:readme]。
4. Docker 示例的 SYS_ADMIN 是高权限配置，应审查而非默认复制 [Docs:docker]。

## 适合什么场景

- Node/TypeScript 浏览器 smoke、E2E、截图和 PDF。
- 受控网页抓取、网络行为调试、CDP/BiDi 研究。
- 给上层 agent/MCP 或自动化服务提供浏览器底座。

## 不适合什么场景

- 纯 HTTP/HTML 解析即可完成的轻任务。
- 不允许浏览器二进制或系统依赖的环境。
- 无隔离的主账号、支付或云控制台无人值守操作。

## 与类似项目对比

| 项目 | 定位 | 相对本项目 |
|------|------|-----------|
| Playwright | 多浏览器自动化与测试框架 | 更偏测试框架与测试矩阵；Puppeteer 更偏浏览器控制库。 |
| Selenium WebDriver | 多语言 WebDriver 生态 | 更偏跨语言/标准协议体系；Puppeteer 面向 JavaScript 高层 API。 |

仅沿用浏览器自动化邻域定位，未做同轮质量排名或 benchmark [WikiLocal:comparison]。

## 它能做什么

能力 **5/5** 是相对于浏览器控制库主域：浏览器生命周期、页面/输入、DOM/locator、截图/PDF、网络与协议会话覆盖广 [GH:readme][GH:package]。25.10.0 发布说明新增 `page.record()`，不要把它混同旧 screencast 接口；本轮未验视频编码、浏览器兼容或资源消耗 [GH:release]。

实验性 WebMCP 是当前 README 标注的实验接口，不是稳定性承诺；`chrome-devtools-mcp` 是独立项目，不能与本库合并算交付 [GH:readme]。

## 运行环境与资源占用

| 项目 | 判断 |
|------|------|
| Node | 包要求 >=22.12.0 |
| 浏览器 | puppeteer 可安装兼容浏览器；core 不负责自动下载 |
| CPU/内存 | 页面负载、并发、视频/PDF 主导，未测量 |
| 存储 | npm 包、浏览器缓存、截图/视频/trace 输出 |
| Docker | 官方 GHCR image；文档 sandbox 路径要求 SYS_ADMIN |
| GPU | 不是基础 API 必要条件，渲染/录制性能另测 |

资源效率 **4/5** 是库层控制开销相对合理的判断，不与轻量 HTTP client 比占用，也不报告本轮吞吐 [GH:package][Docs:docker]。

## 上手体验

**4/5**。README 的 launch→locator→读取→close 示例直观；但应核验安装脚本是否执行，必要时按官方指导运行浏览器安装，而不是扩大所有依赖脚本权限 [GH:readme]。用户自己管理 executable 时选择 core，并验版本兼容。

## 代码质量

**4/5**。分包、类型检查、Chrome/Firefox suites、文档与依赖/许可验证给出维护结构证据 [GH:package]。本轮没有运行 tests、覆盖率或 browser e2e，不能维持仅靠 CI 密度支撑的 5。release 中 Windows launch 回滚也提醒平台回归是长期任务 [GH:release]。

## 可扩展性

**4/5**。core 可嵌入自有浏览器生命周期系统，协议和页面 API 可供上层测试、截图和 agent 服务调用 [GH:readme][Docs:bidi]。它不是完整 crawler/cluster/test-runner 平台，队列、账号管理和审计通常仍在上层实现。

## 文档质量

**5/5**。官方入口覆盖 API、FAQ、troubleshooting、Docker 与 BiDi，安装失败和协议限制都有具体说明 [GH:readme][Docs:docker][Docs:bidi]。评分针对文档组织与关键问题覆盖，不意味着每一页最新能力均在本地验证。

## 社区与成熟度

社区 **4/5**，成熟度 **4/5**。2017 年创建，2026-09 仍有发布；快照 95560 stars、9571 forks、245 open issues、11 PRs [GH:api][GH:release]。长期维护有力，但仅靠这些数量无法证明快速响应或无破坏升级。浏览器、Node 和协议的变化决定它仍需要持续升级测试。

## 安全与风险

安全 **3/5**。本轮未在 repository advisories endpoint 查到公开 GHSA，不能推论 Chrome、Firefox、Node 或依赖没有漏洞 [GH:security]。

Puppeteer 可以安装/控制浏览器、读页面、写文件、加载扩展；调用方必须隔离账号、可访问网络和文件路径。官方容器的 sandbox 要求 SYS_ADMIN，不能把授予这项 capability 理解为整个容器更低权限；也不要为排错随意用 `--no-sandbox` [Docs:docker]。限制远程调试端口、下载/上传路径和不可信页面操作，才有可审计边界。

## 学习价值

适合研究高层 Page API 与底层 CDP/BiDi 如何共存，以及库、浏览器、包管理脚本和容器权限怎样共同决定真实可用性。旧 import smoke 只能证明模块可加载，不能替代新版本页面任务，这也是测试设计的重要边界。
