---
title: "Chrome DevTools MCP"
created: 2026-05-31
updated: 2026-05-31
type: repository-analysis
repo_url: "https://github.com/ChromeDevTools/chrome-devtools-mcp"
category: "ai-programs/mcp"
tags: ["mcp", "browser-automation", "chrome-devtools", "debugging", "performance", "coding-agents", "typescript", "puppeteer"]
previous_repo: ""
successor: ""
primary_language: "TypeScript"
license: "Apache-2.0"
stars: 42341
forks: 2709
last_checked: 2026-05-31
last_verified: 2026-05-31
evidence: "GitHub API metadata, repository advisory API, official Chrome blog extraction, README/docs/package scan, npm metadata, and local shallow clone scan at commit 2e039c09e1a273581d9b51081a0feb8a57791947. No npm install, no Chrome launch, no MCP client integration, no Lighthouse/trace run, and no CLI smoke test was executed."
archived_reason: ""
docker_support: false
gpu_required: false
estimated_cpu: "low to moderate for the MCP/CLI wrapper; real workload cost is dominated by Chrome/Chrome for Testing, page complexity, screenshots, traces and Lighthouse/performance analysis"
estimated_memory: "Node.js server itself is light, but Chrome sessions and DevTools traces can require hundreds of MB to several GB depending on pages and concurrent tabs"
estimated_storage: "small npm package/runtime footprint; screenshots, traces, videos, heap snapshots and browser profiles can dominate storage when enabled"
status: active
ratings:
  capability: 4
  usability: 4
  performance: 3
  code_quality: 3
  documentation: 4
  community: 3
  maturity: 3
  extensibility: 4
  security: 3
  recommendation: 3
overall_score: 3.4
sources:
  - "[GH] https://github.com/ChromeDevTools/chrome-devtools-mcp"
  - "[GH:api] GitHub repo snapshot 2026-05-31: stars=42341, forks=2709, open issues=64, open PRs=14, created_at=2025-09-11, pushed_at=2026-05-28, primary_language=TypeScript, GitHub API license=null, latest_release=chrome-devtools-mcp-v1.1.1, security_policy_url present"
  - "[GH:languages] GitHub languages API snapshot 2026-05-31: TypeScript=997102, JavaScript=46414, HTML=290"
  - "[GH:releases] GitHub releases API snapshot 2026-05-31: latest sample includes chrome-devtools-mcp-v1.1.1 published 2026-05-27, v1.1.0 published 2026-05-26, v1.0.1/v1.0.0 published 2026-05-18; sampled releases were not prereleases"
  - "[GH:advisories] GitHub repository security-advisories API snapshot 2026-05-31: returned 0 advisories"
  - "[GH:local-scan] Local shallow clone /opt/data/tmp/repo-wiki-trending-2026-05-31/batch11/repos/ChromeDevTools__chrome-devtools-mcp at commit 2e039c09e1a273581d9b51081a0feb8a57791947; git ls-files=264, markdown=26, workflows=6, test-ish files=89; checked README.md, docs/{tool-reference,slim-tool-reference,cli,design-principles,troubleshooting}.md, package.json, SECURITY.md, CONTRIBUTING.md, LICENSE, AGENTS.md, .github/dependabot.yml; no Dockerfile found; LICENSE file is Apache License 2.0"
  - "[GH:readme] README.md local scan 2026-05-31: project exposes Chrome/DevTools/Puppeteer capabilities to MCP clients; documents sensitive-browser-data disclaimer, Chrome/Chrome for Testing support, CrUX lookups opt-out via --no-performance-crux, usage-statistics opt-out via --no-usage-statistics or env/CI, npx MCP setup, slim/headless mode and many MCP client examples"
  - "[GH:tools] docs/tool-reference.md local scan 2026-05-31: auto-generated reference lists 45 tools across input automation, navigation, emulation, performance, network, debugging, memory, extensions, third-party and WebMCP categories; examples include evaluate_script, lighthouse_audit, performance traces, screenshots, heap snapshots and extension management"
  - "[GH:cli] docs/cli.md local scan 2026-05-31: experimental chrome-devtools CLI uses a background daemon, auto-starts browser/server, persists browser state/cookies across commands, supports JSON output, and defaults headless/isolated unless userDataDir is provided"
  - "[GH:design] docs/design-principles.md local scan 2026-05-31: design guidelines emphasize agent-agnostic MCP API, token-optimized semantic summaries, small deterministic blocks, self-healing errors, human-agent collaboration, progressive complexity and reference-over-value for heavy assets"
  - "[GH:package] package.json and npm view snapshot 2026-05-31: npm package name chrome-devtools-mcp version 1.1.1, bin entries chrome-devtools-mcp and chrome-devtools, scripts include build/typecheck/test/format/docs generation/eval/count-tokens, npm reports license=Apache-2.0 and modified=2026-05-27"
  - "[GH:security] SECURITY.md local scan 2026-05-31: provides contact path via GitHub Product Security; asks for advisory-style report with description, reproduction steps, impact and configuration details"
  - "[Blog:chrome] https://developer.chrome.com/blog/chrome-devtools-mcp extracted 2026-05-31; Chrome announced Chrome DevTools MCP public preview on 2025-09-23, describing use cases for verifying code changes, diagnosing network/console errors, simulating user behavior, debugging layout, and performance audits"
---

# Chrome DevTools MCP

> 面向 coding agents 的 Chrome DevTools bridge：让 agent 通过 MCP/CLI 观察、操纵和调试真实 Chrome 页面；非常值得关注，但应按高权限浏览器调试工具治理。
>
> **状态**: `active` · **总分**: 3.4/5 · **推荐度**: 3/5
> **核验版本**: commit `2e039c09e1a273581d9b51081a0feb8a57791947`；GitHub / npm / Chrome blog / local clone 快照 2026-05-31
> **验证边界**: 本轮未安装 npm package、未启动 Chrome、未接入真实 MCP client、未运行 Lighthouse/trace、未做 CLI smoke test；能力与性能结论来自官方文档、源码结构和元数据，非实测 benchmark。

## 一句话总结

Chrome DevTools MCP 是 Chrome 官方渠道发布的 coding-agent browser-debugging substrate：它把 Chrome DevTools、Puppeteer、Lighthouse/performance trace、console/network/screenshot/heap snapshot 等能力变成 MCP tools 和 experimental CLI，使 agent 不再“蒙眼写前端”。

## 总体评价

这个仓库应归入 `ai-programs/mcp`。它不是终端 coding agent 本体，也不是通用网页采集 API，而是 agent runtime 中的 **browser inspection and debugging layer**：当 agent 修改前端、排查 console/network 错误、验证交互流程、运行性能分析时，它需要真实浏览器反馈；Chrome DevTools MCP 正是把这层反馈以 MCP tool 形式开放给 Claude Code、Codex、Gemini CLI、Cursor、Copilot 等客户端 [GH:readme][Blog:chrome]。

从工程信号看，项目虽年轻但并非玩具：本地扫描有 264 个 tracked files、6 个 workflows、89 个 test-ish 文件，package scripts 覆盖 build/typecheck/test/format/docs generation，工具文档由脚本生成，设计原则也清楚强调小而确定的工具块和 token-optimized summaries [GH:local-scan][GH:package][GH:design]。v1.0.0 与 v1.1.1 已在 2026-05 发布，说明从 public preview 走向更正式的版本轨道 [GH:releases]。

风险同样明确：它暴露的是浏览器和 DevTools 能力。README 直接警告 MCP clients 可以 inspect、debug、modify browser/DevTools 中的数据，避免共享敏感或个人信息 [GH:readme]。此外 usage statistics 默认开启，performance tools 可能向 Google CrUX API 发送 trace URL，虽然都有 opt-out，但这类默认网络/遥测路径必须在高敏环境中关闭和审查 [GH:readme]。

## 推荐度：3/5

**定位**：适合希望让 coding agents 读取真实浏览器状态、复现 UI bug、抓取 console/network/performance trace、理解页面 runtime 的前端工程师、agent 工具开发者和 DevTools/MCP 研究者。

推荐度 3/5。它很值得跟踪和在隔离环境中试用：Chrome/DevTools 语义直接进入 MCP，使 agent 不再只看 DOM/截图，而能获取 console、network、trace、performance、页面状态等调试上下文 [GH:readme][Blog:chrome]。

不给 4 的原因是 adoption risk：本轮没有实际启动 Chrome/MCP client/Lighthouse/trace；浏览器调试接口会接触 cookies、登录态、内网页面、表单、console/network payload 与性能 trace。生产账号、支付流程、云控制台、内部系统页面不应直接交给通用 agent；应先用临时 Chrome profile、测试站点、最小权限账号和人工确认。

## 优势

1. **抽象层正确**：把 Chrome DevTools 的 console、network、performance、screenshot、DOM snapshot、heap snapshot 等能力暴露成 agent 可调用工具，而不是让 agent 靠静态代码猜运行结果 [GH:tools][Blog:chrome]。
2. **工具面完整**：tool reference 列出 45 个工具，覆盖 input/navigation/emulation/performance/network/debugging/memory/extensions/third-party/WebMCP 等类别 [GH:tools]。
3. **上手路径简单**：README 给出 `npx -y chrome-devtools-mcp@latest` 的 MCP 配置，并提供 slim/headless 例子和多个 MCP client 配置片段 [GH:readme]。
4. **CLI 形态有价值**：experimental CLI 可自动启动后台 daemon 和浏览器、持久化页面状态/cookies、支持 JSON 输出，适合 agent 生成脚本或人类快速调试 [GH:cli]。
5. **工程治理信号较好**：TypeScript 项目有 build/typecheck/test/format/docs generation 脚本、Dependabot、SECURITY/CONTRIBUTING、AGENTS 规则和多 workflow [GH:local-scan][GH:package]。

## 劣势

1. **浏览器权限面高**：MCP client 能观察、调试和修改浏览器/DevTools 中的数据；若连接真实主浏览器或登录态 profile，风险接近“把浏览器交给 agent” [GH:readme][GH:cli]。
2. **默认遥测需注意**：usage statistics 默认开启；performance tools 可能查询 CrUX，向 Google CrUX API 发送 trace URLs；虽然可 opt out，但高敏环境不能忽略 [GH:readme]。
3. **成熟度仍有限**：Chrome blog 将其称为 public preview；仓库创建于 2025-09，本轮最新 v1.1.1，稳定年限不足 [Blog:chrome][GH:api][GH:releases]。
4. **Chrome-only 边界**：README 明确官方只支持 Google Chrome 和 Chrome for Testing，其他 Chromium-based browsers 不保证 [GH:readme]。
5. **性能不是免费午餐**：MCP server 本身轻，但 Chrome、Lighthouse、trace、heap snapshot、screenshot/video 可能很重；本轮未实测资源占用。

---

## 适合什么场景

- 前端/coding agent 在修改 UI 后验证页面实际行为。
- 自动诊断 console error、network failure、CORS、资源加载失败和 source-mapped stack traces [GH:readme][Blog:chrome]。
- 运行 Lighthouse audit、Chrome performance trace、LCP/性能问题排查 [GH:tools][Blog:chrome]。
- 让 agent 执行低风险网页交互流程：打开页面、点击、填表、截图、读取 DOM snapshot。
- 学习“agent browser debugging tool”如何设计：小工具粒度、token-optimized summaries、heavy assets 返回路径而非塞进上下文 [GH:design]。

## 不适合什么场景

- 连接含个人主账号、生产后台、支付系统、云控制台、公司内网后台或敏感 cookie 的浏览器实例。
- 以为 MCP client 的 prompt/agent 自律能替代浏览器隔离、临时 profile、低权限账号和人工确认。
- 需要跨浏览器兼容保证的场景；官方只承诺 Google Chrome / Chrome for Testing [GH:readme]。
- 无法接受默认 usage statistics 或 CrUX lookup 的环境，除非明确使用 opt-out 参数和网络隔离 [GH:readme]。
- 高并发网页数据采集；这更像 Firecrawl/Crawlee/专用 scraping infrastructure 的边界，而不是 DevTools debugging layer。

## 与类似项目对比

| 项目 | 定位 | 相对本项目 |
|------|------|-----------|
| Browser Use | browser-control library/cloud browser product | Browser Use 更偏让 agent 完成网页任务；Chrome DevTools MCP 更偏让 coding agent 观察和调试 Chrome/DevTools 运行时 |
| Firecrawl | Web data ingestion / scrape / crawl / parse API | Firecrawl 把开放 Web 转成 LLM-ready data；Chrome DevTools MCP 把真实浏览器调试能力给 agent |
| Context7 | 文档上下文 grounding layer | Context7 提供库/API 文档事实；Chrome DevTools MCP 提供浏览器运行时事实 |
| MCP Servers | MCP reference server 集合 | MCP Servers 是通用 MCP server 样板集合；Chrome DevTools MCP 是具体的 Chrome/DevTools tool provider |
| CLI-Anything | agent tool-access harness | CLI-Anything 让 agent 包装任意 CLI；Chrome DevTools MCP 专注浏览器调试与自动化工具面 |

上述项目按 `ai-programs/mcp` 同类或相邻 agent infrastructure 范围做粗略定位级对比，未按同一 10 维度框架深审。比较行只表达功能层位置，不比较未重新审计的质量、速度、安全性或社区规模。

---

## 它能做什么

评分 4/5。

- **浏览器导航与页面管理**：new/select/list/close/navigate/wait 等页面工具 [GH:tools]。
- **输入自动化**：click、drag、fill、fill_form、keyboard、upload_file、dialog handling 等 [GH:tools]。
- **调试与观察**：console messages、network requests、screenshots、snapshots、script evaluation、Lighthouse audit [GH:tools]。
- **性能分析**：start/stop performance trace，并分析 DevTools performance insights [GH:tools][Blog:chrome]。
- **内存与扩展**：heap snapshot summary/details/retainers，以及 Chrome extension install/list/reload/trigger/uninstall 工具 [GH:tools]。
- **CLI/daemon**：experimental `chrome-devtools` CLI 可通过后台 daemon 操作浏览器，支持 raw JSON 输出 [GH:cli]。
- **多 client 接入**：README 覆盖 Claude Code、Codex、Gemini CLI、Cursor、Copilot CLI、Cline 等 MCP client 配置片段 [GH:readme]。

不给 5 的原因：它专注 Chrome/DevTools debugging，不是通用 browser-agent runtime 或 web-data pipeline；部分工具如 extension/heap/script evaluation 权限很强，需要安全治理；本轮也未实测复杂页面和长任务可靠性。

## 运行环境与资源占用

| 场景 | CPU | 内存 | 存储 | 说明 |
|------|-----|------|------|------|
| MCP server / CLI wrapper | 低 | 低 | 小 | Node.js LTS + npm；server 本身相对轻 [GH:readme][GH:package] |
| 普通浏览器调试 | 低到中 | 数百 MB 到数 GB | 小到中 | 实际开销来自 Chrome、页面、截图、cookies/profile 和 DevTools session |
| Lighthouse / performance trace | 中到高 | 中到高 | 中到大 | trace、audit、heap snapshot 和大量资源记录会显著增加 CPU/RAM/磁盘；本轮未测量 |

- **运行时**：Node.js LTS、npm、Google Chrome 或 Chrome for Testing [GH:readme][GH:package]。
- **操作系统**：Node/npm 跨平台；README 提供 Windows 11 的 Codex MCP 配置注意事项 [GH:readme]。
- **Docker**：`docker_support: false`。本地扫描未发现 Dockerfile；主要路径是 npx/npm 与本地 Chrome [GH:local-scan]。
- **GPU**：不需要 GPU。
- **外部依赖**：Chrome/Chrome for Testing；可选 Google CrUX API lookup；MCP client；npm registry；若连接外部网页则涉及目标站点网络。

performance 给 3：wrapper 轻，但真实成本由 Chrome 和 DevTools artifact 决定；未跑 benchmark，不把“Node server 小”误判为整体高性能。

## 上手体验

评分 4/5。

上手体验很好：README 直接给 MCP config，`npx -y chrome-devtools-mcp@latest` 即可接到支持 MCP 的 agent；还提供 `--slim --headless` 例子、多客户端配置和 troubleshooting 链接 [GH:readme]。对于只想让 agent 看页面、截图、诊断 console/network 的开发者，POC 门槛很低。

扣一分来自实际环境复杂度：需要本机 Chrome/Chrome for Testing、MCP client 配置、不同 agent 的 JSON/TOML/CLI 差异、Windows 路径和 timeout 设置；若要安全使用，还需要临时 profile、隔离浏览器、禁用遥测/CrUX、避免连接敏感登录态。

## 代码质量

评分 3/5。

正面信号：仓库有 264 个 tracked files、6 个 workflows、89 个 test-ish 文件；package scripts 包含 build、typecheck、test、format、docs generation、npm package verification；AGENTS.md 明确 TypeScript 规则，禁止 `any`、`as`、非空断言和 ts-ignore 等松散写法 [GH:local-scan][GH:package]。

但本轮未运行 `npm install`、测试、Chrome 启动、CLI smoke test 或 MCP client integration；项目仍 public preview 且工具面很宽，Chrome/DevTools/Puppeteer/MCP/client 组合会带来边界复杂度。按评分边界，静态结构足以说明“有治理信号”，但不足以给 4。

## 可扩展性

评分 4/5。

扩展性来自 MCP 标准、auto-generated tool reference、CLI JSON 输出、第三方/WebMCP tool categories、extension management，以及设计原则中的 agent-agnostic API 与 progressive complexity [GH:tools][GH:cli][GH:design]。这使它容易被不同 coding agents 和脚本环境接入。

不给 5 的原因：它不是通用插件平台；核心扩展仍围绕 Chrome DevTools/Puppeteer 能力，若需要非 Chrome browser、企业 policy enforcement、确定性 replay、细粒度 permission prompts，当前文档未给出足够成熟的通用扩展机制。

## 文档质量

评分 4/5。

README、tool reference、slim tool reference、CLI docs、design principles、troubleshooting 和 Chrome 官方 blog 形成了比较完整的文档面 [GH:readme][GH:tools][GH:cli][GH:design][Blog:chrome]。尤其 tool reference 是自动生成的，列出每个工具参数；design principles 也说明了为何选择小工具、语义摘要和路径引用。

不给 5 的原因：项目仍处 public preview 到早期 v1 阶段，一些高敏默认行为和安全部署建议还需要用户从 disclaimer/flags 中综合推断。总体是好文档，但还不是成熟基础设施级别的完整运维/安全手册。

## 社区与成熟度

| 维度 | 评分 | 说明 |
|------|------|------|
| 社区活跃度 | 3/5 | GitHub 快照显示 42k+ stars、2.7k+ forks、64 open issues、14 open PRs；有 SECURITY/CONTRIBUTING、Dependabot 和多 workflow；Chrome 官方 blog 明确征集反馈 [GH:api][GH:local-scan][Blog:chrome]。但这些主要是可见度与官方渠道信号，本轮未审查 issue/PR 响应速度或第三方生态成熟度，因此不按 4 计。 |
| 成熟度 | 3/5 | 仓库创建于 2025-09，Chrome blog 称 public preview；虽已发布 v1.1.1，但稳定年限短，browser-agent/MCP 生态仍快速变化 [Blog:chrome][GH:api][GH:releases] |

## 安全与风险

评分 3/5。

本轮 GitHub repository security-advisories API 未发现 advisory；这只是“本次未查到公开 GitHub advisory”，不是安全审计证明 [GH:advisories]。

更重要的是 attack surface：

- **浏览器数据暴露**：README 明确说 MCP clients 可 inspect/debug/modify browser 或 DevTools 中的数据；不要把敏感或个人信息暴露给 MCP clients [GH:readme]。
- **遥测与外部请求**：usage statistics 默认开启，可用 `--no-usage-statistics` 或环境变量/CI 禁用；performance tools 可能把 trace URLs 发给 Google CrUX API，可用 `--no-performance-crux` 禁用 [GH:readme]。
- **强工具能力**：`evaluate_script`、file upload、extension management、heap snapshot、network inspection 等能力都可能触达 secrets、cookies、DOM、headers 或本地文件路径 [GH:tools]。
- **CLI 持久化状态**：CLI daemon 会持久复用浏览器状态和 cookies；若未使用隔离 profile，便利性会变成持久风险 [GH:cli]。

因此 security 给 3：项目有 SECURITY policy 和明确 disclaimer，没有查到公开 advisory；但它本质上是高权限 browser/DevTools bridge，只能在隔离浏览器、低权限账号、禁用遥测、必要时网络隔离的前提下使用。

## 学习价值

学习价值很高。Chrome DevTools MCP 是 MCP 工具/服务器分类的好样本：它展示了如何把一个复杂 GUI/runtime 系统拆成 LLM 可调用的 deterministic tools，如何控制 token 输出，如何用文件路径承载 heavy assets，如何让 agent 从“代码生成器”走向“运行时验证者”。

即便不在生产中采用，也值得研究它的 tool taxonomy、CLI daemon 设计、docs generation、设计原则和安全 disclaimer。所谓“执其两端，用其中于民”：既看见它给 agent 以目，也记得目之所视不可无界。