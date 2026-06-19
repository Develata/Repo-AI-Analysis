---
title: "Puppeteer"
created: 2026-06-19
updated: 2026-06-19
type: repository-analysis
repo_url: "https://github.com/puppeteer/puppeteer"
category: "dev-tools"
tags: ["browser-automation", "headless-browser", "chrome", "firefox", "cdp", "webdriver-bidi", "testing", "web-scraping", "typescript", "nodejs"]
previous_repo: ""
successor: ""
primary_language: "TypeScript"
license: "Apache-2.0"
stars: 95076
forks: 9454
last_checked: 2026-06-19
last_verified: 2026-06-19
evidence: "GitHub REST/search/community/security-advisory API snapshots, official docs extraction, local shallow clone static scan at commit ec3daa9af14cb9f4155854c2afeb1c71e235b712, package metadata review, and a minimal npm import smoke test for puppeteer-core@25.1.0. No full puppeteer install, no browser download, no Chromium/Firefox launch, no end-to-end automation task, and no benchmark was executed."
archived_reason: ""
docker_support: true
gpu_required: false
estimated_cpu: "low for library import/orchestration; real automation cost dominated by launched Chrome/Firefox instances and page workload"
estimated_memory: "small for Node library alone; roughly one browser-process footprint per active browser/session, with concurrency and page complexity dominating"
estimated_storage: "package footprint plus browser cache; full puppeteer downloads compatible Chrome, puppeteer-core does not; Docker image/browser cache can reach hundreds of MB or more depending on image/browser versions"
status: active
ratings:
  capability: 5
  usability: 4
  performance: 4
  code_quality: 5
  documentation: 5
  community: 5
  maturity: 4
  extensibility: 4
  security: 3
  recommendation: 4
overall_score: 4.3
sources:
  - "[GH] https://github.com/puppeteer/puppeteer"
  - "[GH:api] GitHub REST snapshot 2026-06-19: repo created_at=2017-05-09, pushed_at=2026-06-18T17:22:00Z, stars=95076, forks=9454, REST open_issues_count=268 includes issues+PRs, search open issues=248, search open PRs=19, closed PRs=7518, primary_language=TypeScript, license=Apache-2.0, default_branch=main, homepage=https://pptr.dev, archived=false, topics include automation/chrome/chromium/developer-tools/firefox/headless-chrome/testing/web"
  - "[GH:release] GitHub releases endpoint checked 2026-06-19: sampled latest releases puppeteer-v25.1.0, puppeteer-core-v25.1.0, browsers-v3.0.4 published 2026-05-26; puppeteer-v25.0.4 and puppeteer-v25.0.3 published 2026-05-18"
  - "[GH:community] GitHub community profile checked 2026-06-19: health_percentage=75; README, docs/contributing.md, .github/PULL_REQUEST_TEMPLATE.md and LICENSE detected; CODE_OF_CONDUCT and issue_template not detected by community API"
  - "[GH:contributors] GitHub contributors endpoint first page checked 2026-06-19: top contributors include OrKoN=1179, aslushnikov=914, dependabot[bot]=803, Lightning00Blade=639, jrandolf-google=430 contributions"
  - "[GH:issues] GitHub search checked 2026-06-19: open issue search=248, open PR search=19; open issue title search for Bug-style titles=134; sampled issues include #15116 skipDownload/version-resolution bug, #15005 js coverage reset, #14493 existing-browser current-page feature, #14259 Firefox postData unsupported over BiDi, #12379 Chrome Canary/Firefox Nightly test results, and #14898 Puppeteer v26 planning with deprecated API removals"
  - "[GH:advisory] GitHub repository security-advisories API checked 2026-06-19: returned [] for published repository advisories in this endpoint check; absence here is not proof that all dependency/browser/runtime risks are absent"
  - "[GH:local-scan] Local shallow clone /opt/data/tmp/repo_wiki_puppeteer/puppeteer checked 2026-06-19 at commit ec3daa9af14cb9f4155854c2afeb1c71e235b712; git ls-files=2193, markdown=1393, test/spec/e2e/fixture/mock/golden/snapshot heuristic files=428, TypeScript files=385, JavaScript files=94, workflows=12; root files include README.md, SECURITY.md, LICENSE, CHANGELOG.md, package.json, package-lock.json, .nvmrc, eslint.config.mjs, prettier.config.js, tsdoc.json, versions.json; Docker-related files include docker/Dockerfile, docker/README.md, docker/test/smoke-test.js, docs/guides/docker.md"
  - "[GH:package] Local package metadata checked 2026-06-19: root package scripts include build/check/lint/docs/doctest/test/test:chrome/test:firefox/test-types/validate-licenses/validate-deps; packages/puppeteer and packages/puppeteer-core version 25.1.0 require Node >=22.12.0; puppeteer depends on @puppeteer/browsers 3.0.4, chromium-bidi 16.0.1, devtools-protocol 0.0.1638949, puppeteer-core 25.1.0, typed-query-selector, lilconfig; puppeteer-core exports browser and Node entrypoints and depends on webdriver-bidi-protocol and ws"
  - "[GH:ci] .github/workflows/ci.yml local scan 2026-06-19: default permissions read-all; required inspect-code job runs npm ci with PUPPETEER_SKIP_DOWNLOAD=true, npm run check, validate-licenses, build, test-types, validate-deps, lint, docs and generated-doc diff check; additional workflows exist for changed packages, docs deploy and platform/browser test matrix"
  - "[GH:security] SECURITY.md local scan 2026-06-19: reports should follow Chromium security process; scope states Puppeteer has powerful browser installation/automation/inspection capabilities, calling code is responsible for safe use, and APIs can intentionally write files or load extensions; local MITM/browser-download manipulation is not considered a Puppeteer vulnerability"
  - "[GH:test-docs] test/README.md local scan 2026-06-19: tests use Mocha and Expect; helper state includes browser/page/context/test servers; documented commands include npm test, build-before-test, test:chrome:headful, test:chrome:headless and test:firefox"
  - "[Docs:home] https://pptr.dev/ extracted 2026-06-19: official version 25.1.0; Puppeteer is a JavaScript library exposing high-level API to control Chrome or Firefox over DevTools Protocol or WebDriver BiDi; installs via npm/yarn/pnpm/bun; puppeteer downloads compatible Chrome while puppeteer-core skips browser download; README example uses locator APIs and page automation"
  - "[Docs:docker] https://pptr.dev/guides/docker extracted 2026-06-19: official GHCR image ghcr.io/puppeteer/puppeteer includes Chrome for Testing and pre-installed Puppeteer; latest and version tags available; image is meant for browser sandbox mode and requires SYS_ADMIN; recommends --init to manage browser child processes"
  - "[Docs:troubleshooting] https://pptr.dev/troubleshooting extracted 2026-06-19: documents browser cache under ~/.cache/puppeteer since v19, PUPPETEER_CACHE_DIR, blocked install scripts requiring npx puppeteer browsers install or allowScripts, Chrome HTTP navigation block behavior, Windows sandbox permission issues, Linux dependency checks, and Linux arm64 binary caveat"
  - "[Docs:bidi] https://pptr.dev/webdriver-bidi extracted 2026-06-19: WebDriver BiDi support covers Chrome and Firefox; Firefox launches with BiDi by default, Chrome uses CDP by default unless protocol='webDriverBiDi'; unsupported BiDi features throw UnsupportedOperation; unsupported areas include Accessibility, Coverage and Tracing plus several CDP-specific APIs"
  - "[Local:smoke] /opt/data/tmp/repo_wiki_puppeteer/smoke checked 2026-06-19: Node v22.22.3 and npm 10.9.8; npm init; PUPPETEER_SKIP_DOWNLOAD=true npm install puppeteer-core@25.1.0 --no-audit --no-fund added 26 packages in 2s; dynamic import of puppeteer-core succeeded and launch/connect exports were functions. No browser was downloaded or launched."
---

# Puppeteer

> JavaScript/TypeScript 生态中长期维护、文档完整、社区规模很大的 Chrome/Firefox browser automation library：能力很强；但它控制的对象是真浏览器，权限面和运行时摩擦不能低估。
>
> **状态**: `active` · **总分**: 4.3/5 · **推荐度**: 4/5
> **核验版本**: repo commit `ec3daa9af14cb9f4155854c2afeb1c71e235b712`；Puppeteer / puppeteer-core `25.1.0`；GitHub / docs / local clone 快照 2026-06-19
> **验证边界**: 本轮只做静态源码/文档/API 核验与 `puppeteer-core` import smoke test；未下载 Chrome、未启动浏览器、未跑 automation e2e、未测 benchmark。

## 一句话总结

Puppeteer 是给 Node.js/TypeScript 程序控制 Chrome 或 Firefox 的高层 API：适合浏览器自动化、端到端测试、截图/PDF、抓取和 DevTools 协议研究；如果你需要的是“稳定控制真实浏览器”，它是长期维护且证据充分的优先评估对象之一 [Docs:home][GH:api][GH:release][GH:package]。

## 总体评价

Puppeteer 的核心价值在于：把 Chrome DevTools Protocol（CDP）和 WebDriver BiDi 的复杂低层协议，封装成 `Browser` / `Page` / `Frame` / `Locator` / `HTTPRequest` 等相对稳定的 JavaScript API。官方文档明确说它可控制 Chrome 或 Firefox，Chrome 默认走 CDP，Firefox 默认走 BiDi，Chrome BiDi 需显式设置 `protocol: 'webDriverBiDi'` [Docs:home][Docs:bidi]。

从工程信号看，这是一个成熟、长期维护且高可见度的浏览器基础设施仓库：GitHub 快照显示 95k+ stars、9.4k+ forks、2017 年创建、2026-06-18 仍有 push；本地 shallow clone 有 2193 个 tracked files、428 个 test-ish 文件、12 个 workflows，根包 scripts 覆盖 build/check/lint/docs/test/test:chrome/test:firefox/test-types/validate-licenses/validate-deps [GH:api][GH:local-scan][GH:package]。CI 的 required inspect-code job 还包括 license validation、type tests、docs generation 和 generated-doc diff check [GH:ci]。

它的短板不在“能力不够”，而在浏览器自动化天然复杂：浏览器下载、cache、Linux/Windows sandbox、容器权限、Chrome for Testing 行为变化、BiDi/CDP 功能差异、网络/请求拦截 race、真实账号副作用，都会进入使用者的 operational surface [Docs:troubleshooting][Docs:docker][Docs:bidi][GH:security]。所以它是强工具，不是低风险工具。

## 推荐度：4/5

**角色定位**：适合需要在 Node.js/TypeScript 中稳定控制 Chrome/Firefox 的开发者、测试工程师、爬虫/自动化工程师，以及研究 browser automation / CDP / BiDi / MCP browser tooling 的人。

推荐度 4/5。若任务是浏览器自动化，Puppeteer 属于优先评估对象：API 成熟、文档完整、生态巨大、Docker 镜像官方提供，代码和测试治理信号很强 [Docs:home][Docs:docker][GH:local-scan][GH:ci]。在 browser-agent infrastructure 语境中，它也很适合作为底层参照：官方首页已指向 Puppeteer-based `chrome-devtools-mcp`，AI browser tools、Playwright/BiDi 生态都可以拿它校准抽象边界 [Docs:home][Docs:bidi]。

不给 5 的原因主要是 operational risk：

1. **真浏览器成本与环境摩擦**：`puppeteer` 默认下载兼容 Chrome；blocked install scripts、cache path、Linux dependency、Windows sandbox、Docker `SYS_ADMIN` 等都可能成为部署坑 [Docs:troubleshooting][Docs:docker]。
2. **BiDi/CDP 功能不完全等价**：WebDriver BiDi 虽已支持 Chrome/Firefox，但 Accessibility、Coverage、Tracing、CDP session、若干 emulation/network/input API 仍有 unsupported list；跨浏览器自动化不能假定“同一 API 全部等价” [Docs:bidi]。
3. **权限面高**：安全策略明确说 Puppeteer 可安装/控制/检查浏览器，调用方负责安全使用；写文件、下载、截图、加载扩展等是 intentional features，不应当被误当成安全边界 [GH:security]。
4. **issue backlog 仍需接受**：搜索快照有 248 个 open issues、19 个 open PRs，标题搜索中 Bug-style open issue titles 有 134 个；这对如此大且活跃的项目不算异常，但说明边缘场景和浏览器版本漂移会持续存在 [GH:issues]。

结论：用于测试、截图、PDF、受控抓取、浏览器协议研究，推荐；用于高价值账号、支付、内网管理后台或无法隔离的生产自动化，应先做 threat model、最小权限、容器/账号隔离和失败回滚。

## 优势

1. **浏览器控制能力极全**：页面导航、DOM 查询、locator、输入、截图、PDF、请求拦截、DevTools/BiDi 协议桥接、browser download/launch 都在主路径内 [Docs:home][Docs:bidi][GH:package]。
2. **工程成熟度高**：TypeScript monorepo、`puppeteer` / `puppeteer-core` / `@puppeteer/browsers` 分包清晰，CI 覆盖 build/check/lint/docs/type tests/license/deps validation [GH:package][GH:ci]。
3. **文档和 troubleshooting 完整**：安装、配置、Docker、cache、Linux/Windows 问题、BiDi unsupported matrix 都有官方文档 [Docs:home][Docs:troubleshooting][Docs:docker][Docs:bidi]。
4. **社区和生态强**：95k+ stars、7.5k+ closed PRs、贡献者与自动化维护信号强，且官方文档已连接 Puppeteer-based `chrome-devtools-mcp` 生态 [GH:api][GH:contributors][Docs:home]。
5. **官方 Docker 路径存在**：GHCR image 包含 Chrome for Testing 与预装 Puppeteer，适合把浏览器依赖封装进容器镜像 [Docs:docker]。

## 劣势

1. **浏览器运行环境不是“纯 npm 包”问题**：库本身可轻量安装，但真实运行需要浏览器 binary、系统依赖、sandbox 权限、cache 管理和 init process [Docs:troubleshooting][Docs:docker]。
2. **跨浏览器一致性有边界**：Firefox/BiDi 支持持续进步，但 BiDi unsupported features 仍然不少，尤其是 tracing/coverage/accessibility/CDP-specific areas [Docs:bidi]。
3. **安全边界外移到调用方**：Puppeteer 可写文件、下载、加载扩展、访问页面内容；项目安全策略明确把安全使用责任放到调用代码 [GH:security]。
4. **大项目 issue backlog 客观存在**：248 个 open issues、134 个 Bug-style open issue title search 结果说明边缘 bug、浏览器回归、配置问题会长期伴随 [GH:issues]。
5. **Node 版本要求偏新**：当前包 metadata 要求 Node `>=22.12.0`，老 Node 环境会成为升级门槛 [GH:package]。

---

## 适合什么场景

- Web app E2E / smoke test，尤其是需要真实 Chrome 行为的测试。
- 截图、PDF、网页渲染、页面性能/网络行为检查。
- 受控爬取、表单自动化、内部低权限后台自动化。
- 研究 CDP、WebDriver BiDi、Chrome for Testing、browser automation API 设计。
- 为 MCP browser tools、AI agents、网页调试工具提供底层浏览器控制能力。

## 不适合什么场景

- 只需要 HTTP 抓取或 HTML 解析的轻量任务；直接 HTTP client / parser 更简单、更省资源。
- 需要跨浏览器规范级一致性的严肃测试矩阵；此时通常要比较 Playwright / Selenium / WebDriver grid。
- 不允许下载浏览器 binary、不能安装系统依赖、不能授予容器 sandbox 所需权限的环境。
- 高价值账号、支付、云控制台、公司内网后台的无人值守自动化，除非已完成账号隔离、网络隔离、审计和回滚设计。
- Linux arm64 上依赖默认 Chrome binary 的路径；官方 troubleshooting 明确提示 Chrome 当前不提供 Linux arm64 binaries，需另行设计 [Docs:troubleshooting]。

## 与类似项目对比

| 项目 | 定位 | 相对本项目 |
|------|------|-----------|
| Playwright | 多浏览器自动化与测试框架 | Playwright 更强调 cross-browser testing 与 test runner；Puppeteer 更像 Chrome/CDP 传统核心生态的高层控制库 |
| Selenium WebDriver | 老牌跨语言 WebDriver automation | Selenium 覆盖语言和浏览器生态更广；Puppeteer 在 Node/Chrome DevTools 场景更直接、API 更现代 |
| Chrome DevTools Protocol client | 低层浏览器协议客户端 | CDP client 更贴近协议、控制更细；Puppeteer 提供更高层对象模型和使用体验 |
| chrome-devtools-mcp | 面向 AI agents 的 Chrome DevTools MCP server | chrome-devtools-mcp 是 agent-facing MCP 封装；Puppeteer 是其可依赖的 browser automation library 之一 |

上述项目按 `dev-tools` / browser automation 相邻范围做定位级对比，未在本轮按同一 10 维度框架重审；表格不构成优劣 benchmark。

---

## 它能做什么

能力广度评分 5/5。

Puppeteer 可以通过 JavaScript/TypeScript 控制浏览器生命周期、页面、frame、DOM、输入、网络、截图、PDF 与 DevTools/BiDi protocol integration。官方首页示例展示了启动浏览器、打开页面、设置 viewport、键盘输入、locator 查询、点击、读取文本并关闭浏览器的完整路径 [Docs:home]。

仓库层面还有三个重要分包：

- `puppeteer`：包含 browser download/postinstall 与完整用户入口。
- `puppeteer-core`：作为 library 使用，不自动下载 Chrome，适合外部管理 browser executable 的场景。
- `@puppeteer/browsers`：负责 browser download / launch 管理 [GH:package]。

给 5 的边界是“Node browser automation 主域内能力覆盖极广”，不是“跨协议/跨浏览器完全等价”。WebDriver BiDi 支持是当前能力演化重点之一：Firefox launch 默认 BiDi，Chrome 默认 CDP 但可显式切换；unsupported features 会抛 `UnsupportedOperation`，这比静默失败更好，但也要求使用者理解协议差异 [Docs:bidi]。

## 运行环境与资源占用

资源效率评分 4/5。

| 场景 | CPU | 内存 | 存储 | 说明 |
|------|-----|------|------|------|
| 最小 | Node import / API orchestration 很轻 | Node library 本身较小 | `puppeteer-core` npm install 本轮 added 26 packages | 本轮只验证 import，未启动浏览器 [Local:smoke] |
| 典型 | 取决于 Chrome/Firefox 页面负载 | 每个 browser/session 都有真实浏览器进程成本 | `puppeteer` 会下载兼容 Chrome，cache 默认在 `~/.cache/puppeteer` | 实际资源由页面、并发、截图/PDF/视频/trace 决定 [Docs:troubleshooting] |
| 容器 | 需为浏览器 sandbox 与 child processes 预留资源 | 多 session 并发需按浏览器进程估算 | 官方 GHCR image 包含 Chrome for Testing 与 Puppeteer | 官方 Docker 路径要求 `--init`，sandbox 模式需 `SYS_ADMIN` [Docs:docker] |

- **运行时**：当前 package metadata 要求 Node `>=22.12.0` [GH:package]。
- **操作系统**：跨平台使用，但 Linux/Windows 依赖和 sandbox 问题需按 troubleshooting 处理 [Docs:troubleshooting]。
- **Docker**：`docker_support=true`，因为官方文档提供 GHCR image `ghcr.io/puppeteer/puppeteer`，并说明 version tags 与 sandbox 权限 [Docs:docker]。
- **GPU**：`gpu_required=false`；浏览器渲染可使用硬件加速，但 Puppeteer 主路径不要求 GPU。
- **外部依赖**：Chrome/Firefox、系统库、字体、dbus、网络代理、证书、容器权限和 init process 可能影响真实运行 [Docs:troubleshooting][Docs:docker]。

给 4 而不是 5：Puppeteer library orchestration 层相对轻，本轮 `puppeteer-core` import 只安装少量 npm packages 并成功加载；但真实自动化成本主要来自 Chrome/Firefox 进程，且本轮未实测并发内存、启动耗时或吞吐 [Local:smoke][Docs:troubleshooting]。因此它在“浏览器自动化工具”同类中资源效率合理，但不能按普通 HTTP client 的轻量级标准给满分。

## 上手体验

评分 4/5。

Puppeteer 的 happy path 很短：`npm i puppeteer` 后直接 `puppeteer.launch()`；若不想自动下载浏览器，可用 `puppeteer-core` 并自行传入 executable。官方文档首页、API、FAQ、troubleshooting、Docker 和 configuration 路径清楚，本轮 `puppeteer-core@25.1.0` import smoke test 也顺利通过 [Docs:home][Local:smoke]。

扣 1 分在于安装/运行常有环境分叉：现代 package managers 可能 block install scripts，导致浏览器没有自动下载；Docker sandbox 需 `SYS_ADMIN`；Windows/Linux sandbox 和依赖问题不罕见；`puppeteer-core` 又会忽略 Puppeteer configuration files and environment variables 的一部分语义，需要使用者理解 `puppeteer` 与 `puppeteer-core` 的差异 [Docs:troubleshooting][Docs:docker]。

## 代码质量

评分 5/5。

静态工程信号很强：TypeScript 主语言，分包清晰，root scripts 覆盖 build/check/lint/docs/doctest/test/test:chrome/test:firefox/test-types/validate-licenses/validate-deps；本地扫描有 428 个 test-ish 文件、12 个 workflows、1393 个 markdown/docs-ish 文件 [GH:local-scan][GH:package]。CI 的 required job 使用 read-only default permissions，并运行 check、license validation、build、type tests、dependency validation、lint、docs generation 和 generated-doc diff check [GH:ci]。

本轮没有运行 full test suite，因此这个 5/5 是基于成熟项目结构、CI/test/docs 密度和长期维护信号的代码质量判断，不表示“所有浏览器版本和所有边缘场景都实测无 bug”。

## 可扩展性

评分 4/5。

Puppeteer 的扩展性来自几个层面：一是高层 API 暴露 page/browser/network/input/locator 等对象；二是可在 CDP 场景下创建低层 DevTools session；三是可通过 `puppeteer-core` 嵌入到更大系统，由外部管理浏览器 binary、缓存、proxy、profile 和生命周期；四是生态上可被 MCP server、测试框架、爬虫、截图服务等封装 [Docs:home][Docs:bidi][GH:package]。

没有给 5，是因为 Puppeteer 不是“插件平台”意义上的 extensibility-first framework；深度跨浏览器抽象、test runner、cluster orchestration、stealth/proxy/captcha 等通常要在上层生态或自有代码中完成。BiDi unsupported matrix 也意味着某些扩展在跨协议时会遇到硬边界 [Docs:bidi]。

## 文档质量

评分 5/5。

官方文档覆盖 install、API、FAQ、configuration、Docker、troubleshooting、WebDriver BiDi、request interception 等实际使用会碰到的关键路径 [Docs:home][Docs:troubleshooting][Docs:docker][Docs:bidi]。尤其 troubleshooting 不是泛泛而谈，而是直接列出 browser cache、blocked install scripts、HTTP navigation block、Windows sandbox、Linux dependencies、Linux arm64 binary 等具体坑 [Docs:troubleshooting]。

本地 repo 还将 docs 纳入 CI：生成 docs 并检查 autogenerated docs diff，说明文档不是完全手工漂移的附属物 [GH:ci]。

## 社区与成熟度

| 维度 | 评分 | 说明 |
|------|------|------|
| 社区活跃度 | 5/5 | 95k+ stars、9.4k+ forks、7.5k+ closed PRs、top contributors 多人且有 bot automation；2026-06 仍持续 push/release [GH:api][GH:contributors][GH:release] |
| 成熟度 | 4/5 | 2017 年创建，长期使用语境明显，API 与文档成熟；但仍频繁随 Chrome/BiDi/Node 生态演进，Node `>=22.12.0` 和 v26 planning 说明仍有持续破坏性/迁移压力 [GH:api][GH:package][GH:issues] |

成熟度不给 5 的关键理由是：浏览器自动化库不是“完成态基础设施”。它必须追随 Chrome for Testing、DevTools Protocol、WebDriver BiDi、Firefox、Node/npm package manager 行为变化。open issue #14898 的 Puppeteer v26 planning 包含移除 deprecated APIs，说明未来仍会有迁移事项 [GH:issues]。

## 安全与风险

评分 3/5。

这个分数主要反映 browser automation 的能力风险与运行环境风险，不是说 Puppeteer 当前存在已知严重 repository advisory。

GitHub repository security-advisories API 本轮返回 `[]`，这只能表示此次 endpoint check 没有返回 published repository advisories，不能证明依赖、Chrome、Node、用户代码或运行环境没有漏洞 [GH:advisory]。

Puppeteer 的真正风险来自能力本身：安全策略写得很明白，它提供 browser installation、automation、inspection 等强能力，调用代码负责安全使用；写文件、browser downloads、screenshots、动态加载 Chrome extensions 等是 intentional documented features，不属于项目自身漏洞 [GH:security]。换言之：Puppeteer 不应被当成 sandbox，它是操纵 sandboxed browser 的工具；边界要由调用方、容器、账号、网络、文件系统和审计层建立。

生产使用建议：

- 不要在高权限主账号上跑无人值守脚本；用低权限测试账号。
- Docker 中优先保留 browser sandbox；若使用 `--no-sandbox`，必须有外层隔离补偿。
- 对下载、上传、截图、PDF、扩展加载、文件路径和网络访问做 allowlist。
- 对 request interception 异步 handler 保持谨慎，避免 race 造成安全或正确性误判。
- 依赖与浏览器版本随 Chrome/Node/npm 生态更新，需纳入常规 patch cadence。

## 学习价值

学习价值很高。Puppeteer 是理解现代浏览器自动化的经典入口：它展示了如何在高层对象模型和低层协议之间折中，如何把浏览器 binary 管理、Node package、CI、docs、cross-browser protocol、Docker sandbox、测试矩阵放进同一个工程体系。

对 Develata 特别有价值的学习点：

1. **CDP vs WebDriver BiDi 的抽象边界**：哪些 API 能跨协议，哪些必须承认 unsupported。
2. **浏览器自动化的 failure modes**：下载失败、cache、sandbox、OS dependency、HTTP warning、request interception race。
3. **AI browser tools 的底层参照**：很多 MCP/agent browser 项目最终都要面对 Puppeteer/Playwright/Selenium 这类底层库的能力边界。
4. **成熟 TypeScript monorepo 治理**：分包、generated docs、license validation、type tests、browser matrix 和 release automation 都值得参考。
