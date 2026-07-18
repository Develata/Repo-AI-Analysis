---
title: "Browser Use"
created: 2026-05-31
updated: 2026-07-18
type: repository-analysis
repo_url: "https://github.com/browser-use/browser-use"
category: "ai-programs/agent-infrastructure"
tags: ["agent-infrastructure", "browser-automation", "computer-use", "ai-agents", "playwright", "python", "cli", "cloud-browser", "mcp", "browser-agent"]
previous_repo: ""
successor: ""
primary_language: "Python"
license: "MIT"
stars: 105253
forks: 11588
last_checked: 2026-07-18
last_verified: 2026-07-18
evidence: "GitHub REST/API, official release/docs evidence, repository advisory API, and local shallow-clone scan at commit 950eb03617e67548d759c02beac1ad122c6b6458. No package install, Chromium run, Rust-beta run, cloud task, benchmark reproduction, or real profile/cookie sync was executed."
archived_reason: ""
docker_support: false
gpu_required: false
estimated_cpu: "low to moderate for local library/CLI; cloud route moves browser/session workload to Browser Use Cloud while model workload depends on configuration; local concurrent Chromium sessions scale with page complexity and concurrency"
estimated_memory: "small for SDK-only orchestration, several GB can be needed for local Chromium/browser automation; cloud route shifts runtime memory to provider infrastructure"
estimated_storage: "small Python package footprint; Docker/browser profiles/downloads/screenshots/traces and cloud/profile-sync artifacts dominate if enabled"
status: active
ratings:
  capability: 4
  usability: 4
  performance: 3
  code_quality: 3
  documentation: 4
  community: 4
  maturity: 2
  extensibility: 4
  security: 2
  recommendation: 3
overall_score: 3.3
sources:
  - "[GH] https://github.com/browser-use/browser-use"
  - "[GH:api] https://api.github.com/repos/browser-use/browser-use queried 2026-07-18 UTC+8; full_name=browser-use/browser-use, archived=false, disabled=false, default_branch=main, pushed_at=2026-07-17T05:32:02Z, stars=105253, forks=11588, open_issues_count=319 where REST count includes PRs, primary_language=Python, license=MIT"
  - "[GH:activity] GitHub issue search queried 2026-07-18 UTC+8; open issues=81 and open PRs=238"
  - "[GH:release] Official GitHub releases checked 2026-07-18 UTC+8: latest 0.13.6 published 2026-07-17; 0.13.0 introduced an opt-in Rust-backed beta Agent while keeping the existing Python Agent unchanged; 0.13.3 launched Browser Use CLI 3.0 powered by Browser Harness; 0.13.4 added a CLI MCP server and reliability fixes"
  - "[GH:languages] https://api.github.com/repos/browser-use/browser-use/languages queried 2026-07-18 UTC+8; Python=3427275 bytes, Shell=11350, Dockerfile=11201, HTML=7953; the optional Rust core is consumed as an external package/binary rather than counted as repository Rust source"
  - "[GH:community] GitHub community profile queried 2026-07-18 UTC+8; health_percentage=75; README, CONTRIBUTING and MIT license detected; Code of Conduct, issue template and PR template not detected"
  - "[GH:advisory] https://api.github.com/repos/browser-use/browser-use/security-advisories queried 2026-07-18 UTC+8; one critical advisory GHSA-x39x-9qw5-ghrf / CVE-2025-47241 for pip package browser-use <=0.1.44, patched in 0.1.45; allowed_domains bypass via URL auth username could reach internal/localhost resources"
  - "[GH:local-scan] Local shallow clone /opt/data/tmp/github-repo-wiki-freshness-audit/repos/browser-use at commit 950eb03617e67548d759c02beac1ad122c6b6458 on 2026-07-18; git-tracked files=477, Markdown=58, workflows=11, test-ish files=102; checked README.md, pyproject.toml, BETA_AGENT_INTEGRATION_FEATURES.md, browser_use/beta/, tests/ci/test_beta_agent.py, Dockerfile*, docker/README.md, .github/SECURITY.md and CONTRIBUTING.md"
  - "[GH:pyproject] pyproject.toml at commit 950eb03617e67548d759c02beac1ad122c6b6458: package browser-use 0.13.6, Python>=3.11,<4.0, browser-harness=0.1.6, optional browser-use-core=0.13.2 on supported platforms, and pytest/pyright/ruff configuration"
  - "[GH:rust-beta] BETA_AGENT_INTEGRATION_FEATURES.md and browser_use/beta inspected at commit 950eb03617e67548d759c02beac1ad122c6b6458; Python Agent remains default, browser_use.beta.Agent uses a Rust SDK-server protocol and the ledger documents extensive focused proof commands plus known transitional debt; those commands were not rerun in this audit"
  - "[GH:docker] docker/README.md inspected at commit 950eb03617e67548d759c02beac1ad122c6b6458; it documents building local browseruse images from Dockerfile/Dockerfile.fast, but this audit did not verify an official published Browser Use image, so docker_support=false under repo-wiki convention"
  - "[GH:security] .github/SECURITY.md inspected at commit 950eb03617e67548d759c02beac1ad122c6b6458; coordinated disclosure through a private GitHub advisory is documented"
  - "[GH:ci] .github/workflows inspected at commit 950eb03617e67548d759c02beac1ad122c6b6458; CI syncs all extras including browser-use-core, runs pytest matrices, ruff/pre-commit and pyright; release workflow publishes through PyPI trusted publishing but its final sanity test remains commented out"
  - "[GH:readme] README.md inspected at commit 950eb03617e67548d759c02beac1ad122c6b6458; current quickstart uses uv, browser-use and ChatBrowserUse; README separates open-source package, Cloud and Browser Use CLI, and presents benchmark results that were not reproduced in this audit"
  - "[GH:contributing] .github/CONTRIBUTING.md inspected at commit 950eb03617e67548d759c02beac1ad122c6b6458; links local setup, contribution guide and help-wanted paths"
  - "[GH:cli] Current Browser Use CLI documentation checked 2026-07-18; CLI 3 is Browser Harness-backed and accepts direct Python browser-control scripts rather than the older command-per-action interface"
  - "[GH:cloud] Current README and production docs checked 2026-07-18; Browser Use Cloud offers hosted browsers/sandboxes, persistent cloud profiles, proxies and live viewing; these product features have separate authentication, billing and data-boundary implications"
  - "[Docs:cli] https://docs.browser-use.com/open-source/browser-use-cli extracted 2026-07-18; CLI is backed by Browser Harness, supports local Chrome/Chromium, Browser Use Cloud or arbitrary CDP, and installs agent skills for Claude Code/Codex and related agents"
  - "[Docs:production] https://docs.browser-use.com/production and current README checked 2026-07-18; official cloud path covers sandbox, stored profiles/cookies, proxy/stealth, hosted browsers and billing; cloud/product claims remain distinct from OSS repository behavior"
  - "[Docs:intro] Current README and Browser Use official open-source docs checked 2026-07-18; describe the Python Agent/library as local browser automation for LLM agents"
  - "[Docs:browser-config] https://docs.browser-use.com/open-source/customize/browser/basics checked 2026-07-18; documents Browser configuration such as headed/headless mode and window sizing; remote/CDP configuration is documented separately"
  - "[Docs:agent-config] Current official Agent basics documentation checked 2026-07-18; documents Agent(task, browser, llm) and run controls"
---

# Browser Use

> 给 AI agents 使用真实网页的 Python browser-automation infrastructure：本地可控、云端可托管，能力很强；但浏览器/账号/云 profile 权限面极高，生产采用必须按高危工具治理。
>
> **状态**: `active` · **总分**: 3.3/5 · **推荐度**: 3/5
> **核验版本**: commit `950eb03617e67548d759c02beac1ad122c6b6458`；latest release `0.13.6`；GitHub / docs / local clone 快照 2026-07-18
> **验证边界**: 本轮未安装 package、未启动 Chromium、未运行 Rust beta Agent、未跑 cloud task、未同步真实 profile/cookies、未复现 benchmark；能力和性能结论按文档/源码可见性保守判断。

## 一句话总结

Browser Use 是 AI agent 访问真实 Web 的 browser-control layer：当前同时有 Python Agent/library、Browser Harness-backed CLI 3.0，以及 opt-in Rust-backed beta Agent；能力面更宽，但也多了一条跨 Python/Rust package 与 SDK-server protocol 的过渡链路 [GH:release][Docs:cli][GH:rust-beta]。凡能“替你上网”的工具，也天然能替你误点、泄密、绕到内网，故推荐度仍须保守。

## 总体评价

这个仓库应归入 `ai-programs/agent-infrastructure`。它不是一个最终用户聊天助手，也不是传统爬虫；它提供的是 agent runtime 中的 **browser use substrate**：让 LLM/agent 能观察网页、选择动作、控制浏览器、读取页面状态、上传下载文件、复用 profile，并通过本地 Python Agent、Browser Harness CLI 或云端 sandbox 完成网页任务 [Docs:intro][Docs:cli][Docs:production]。

从工程信号看，Browser Use 已不是 demo repo。本地扫描有 477 个 tracked files、11 个 workflows、102 个 test-ish 文件；pyproject 配有 ruff、pyright、pytest，并 pin `browser-harness`，在支持平台上可选安装 `browser-use-core` [GH:local-scan][GH:pyproject]。GitHub 快照为 105k+ stars、11.5k+ forks，社区可见度很高，但 238 个 open PR 与 0.x 的快速架构演进也说明维护压力不低 [GH:api][GH:activity]。

但 repo/product 边界必须写清楚：README 和 docs 同时强调 Browser Use Cloud、ChatBrowserUse、sandbox、hosted browsers、proxy/stealth 与 persistent cloud profiles；开源库可本地运行，云端能力则涉及 API key、billing、远程浏览器、已保存认证状态与 live viewing [GH:readme][GH:cloud][Docs:production]。这会显著改变隐私和安全模型。

我的判断：它值得成为 wiki 中 browser agent infrastructure 的重点条目；可试用、可研究、可在隔离账号中做自动化；但不应未经隔离地操作生产账号、支付系统、云控制台、公司内网后台或个人高价值账户。

## 推荐度：3/5

推荐度 3/5。对 Develata，Browser Use 很值得分析：它是 browser agent 生态的关键样本，也能帮助理解 UI-TARS、Firecrawl、OpenCLI、MCP browser tools 等项目的边界差异。作为工具使用，则建议从只读/低权限任务开始，小步试用。

给 3 而不是 4 的原因：

1. **权限面太大**：浏览器 agent 可以读页面、点击按钮、输入表单、上传文件、访问已登录 profile，错误一次就可能产生真实副作用 [Docs:cli][GH:cloud]。
2. **云 profile/cookie 托管风险高**：当前 cloud docs 允许通过 persistent profile 复用已保存 cookies/auth；这在便利性之外也构成重大数据托管边界 [Docs:production][GH:cloud]。
3. **历史有 critical advisory**：`allowed_domains` 曾因 URL auth username 绕过而导致 internal/localhost 访问风险，虽影响旧版并已给 patched version，但说明 allowlist/SSRF/内网边界是此类项目核心风险 [GH:advisory]。
4. **性能 claim 未复现**：README 的 benchmark 结果本轮未复跑，不能转化为本机性能、成功率或成本结论 [GH:readme]。

推荐用法：阅读源码与 docs；用临时浏览器 profile、低权限测试账号、明确 allowlist、隔离网络环境跑 POC；生产前单独做 threat model。

## 优势

1. **抽象抓得准**：网页对 agent 来说不是纯文本，而是状态机；Browser Use 把状态、截图、可点击元素、动作、browser profile 和 LLM loop 组合成工具层 [GH:readme][Docs:agent-config]。
2. **入口丰富**：Python SDK、Browser Harness CLI、local Chrome/CDP、coding-agent skill、cloud browser/sandbox 都存在，适合多种 agent workflow [Docs:cli][GH:readme]。
3. **工程信号较强**：pyproject 有类型/测试/lint 配置，本地扫描有 11 个 workflows 与 102 个 test-ish 文件；CI 覆盖 pytest、ruff/pre-commit 与 pyright [GH:local-scan][GH:pyproject][GH:ci]。
4. **模型与工具生态连接广**：依赖中可见 OpenAI、Anthropic、Google、Groq、Ollama、MCP、CDP、文档处理包等，说明它不是只面向单一 provider [GH:pyproject]。
5. **文档上手清楚**：README 和 docs 给出 uv 安装、Agent 示例、Browser Harness CLI、browser configuration 和 cloud sandbox 示例 [GH:readme][Docs:cli][Docs:production]。
6. **云端产品化路径明确**：Cloud docs 已覆盖 hosted browser/sandbox、persistent profile、proxy、live viewing 与 API-key/billing 路径；这对研究 browser-agent productization 有价值 [GH:cloud][Docs:production]。

## 劣势

1. **安全风险是第一位约束**：浏览器自动化天然接触 cookies、登录态、文件、内网 URL、支付/提交按钮、下载与上传；不能按普通 Python library 风险看待。
2. **云能力改变信任边界**：persistent cloud profile 让自动化更好用，但也意味着认证状态、页面内容和任务数据进入第三方基础设施 [GH:cloud][Docs:production]。
3. **历史 critical advisory 指向核心边界**：allowlist 绕过不是边缘小 bug，而是 browser automation 安全模型里的核心问题 [GH:advisory]。
4. **仍是 0.x 且处于双路径演进**：latest release 为 0.13.6；默认 Python Agent 保留，同时 beta Rust Agent 与 Browser Harness CLI 快速推进，API/行为和跨包版本边界仍可能变化 [GH:release][GH:pyproject]。
5. **产品文档有营销压力**：README/docs 强烈推荐 ChatBrowserUse/Cloud；开源库、官方模型和 hosted browser 的能力应分开评价 [GH:readme][GH:cloud]。
6. **本轮未实测可靠性**：没有跑真实任务、模型退化测试、captcha/Cloudflare、复杂登录、多标签/下载/上传等场景。

---

## 适合什么场景

- 研究 browser agents、computer-use agents、web task automation 的基础组件设计。
- 在隔离账号中做网页表单、公开网页查询、低风险重复操作、demo 自动化。
- 给 coding agent 增加 browser inspection/action primitive，例如看网页 UI、截图、导航、提取页面元素 [Docs:cli]。
- 对比 UI-TARS、Firecrawl、OpenCLI、Playwright/MCP browser server 等项目的层次差异。
- 需要 cloud browser/session API，且能接受第三方托管浏览器和 profile/cookie 风险的任务 [GH:cloud][Docs:production]。

## 不适合什么场景

- 未经隔离地操作真实生产账号、支付、云控制台、公司后台、邮箱主号或含敏感 cookie 的浏览器 profile。
- 把 `allowed_domains`、prompt 约束或模型自律当成唯一安全边界。
- 高合规/高敏数据环境中直接使用 cloud profile sync；除非完成供应商合规、数据流、日志保留与删除策略审查。
- 需要确定性、可审计、低副作用的业务流程；网页 UI 自动化本身易受布局、弹窗、A/B test、网络状态影响。
- 想用它替代 Firecrawl 这类 web-data extraction API；Browser Use 更偏 browser interaction / agent action loop，而非批量网页数据管线。

## 与类似项目对比

| 项目 | 定位 | 相对本项目 |
|------|------|-----------|
| Firecrawl | Web data ingestion / scrape / crawl / parse API | Firecrawl 更偏把网页转成 LLM-ready data；Browser Use 更偏让 agent 真实控制浏览器状态 |
| Context7 | 文档上下文 grounding layer | Context7 抓库/API 文档事实；Browser Use 操作开放网页和登录态浏览器 |
| CLI-Anything | agent tool-access harness | CLI-Anything 让 agent 调用 CLI/tool；Browser Use 提供特定的 browser-control primitive |
| MCP Servers | MCP reference server 集合 | MCP Servers 是协议/工具样板；Browser Use 可通过 CLI/skill/cloud 表面成为 browser tool provider |
| UI-TARS Desktop / Agent TARS | GUI/browser/computer-use agent stack | UI-TARS 更强调多模态桌面/GUI agent；Browser Use 更专注 browser automation library/cloud browser product |

上述项目按 `ai-programs/agent-infrastructure` 同类范围做定位级对比，未按同一 10 维度框架深审；UI-TARS 是相邻 `assistant-agents` 条目，只作为 browser/computer-use 生态参照，不是同目录直接竞品。表格用于 taxonomy placement，不比较未归一化的质量、速度或安全性。

---

## 它能做什么

评分 4/5。

capability 评分 4/5 只按 OSS repository surface：默认 Python Agent、Browser/自定义 tools、多模型 adapters、Browser Harness CLI/CDP、CLI MCP server 与 opt-in Rust beta integration 已形成较宽的 browser-agent toolchain [GH:readme][GH:release][GH:pyproject]。Browser Use Cloud 是另行标注的 hosted product surface，不计入本维度。

- **Agent loop**：`Agent(task=..., llm=..., browser=...)` 让 LLM 根据任务和页面状态迭代控制浏览器 [GH:readme][Docs:agent-config]。
- **Browser control**：可配置 headless/window/proxy/Playwright launch options 等浏览器参数 [Docs:browser-config]。
- **Browser Harness CLI 3.0**：agent 通过直接 Python browser-control surface 操作页面，可连接本地 Chrome/Chromium、Browser Use Cloud 或任意 CDP，并可安装 coding-agent skill [GH:cli][Docs:cli][GH:release]。
- **Rust-backed beta Agent**：`from browser_use.beta import Agent` 通过 `browser-use-core` / SDK-server path 运行；默认 Python Agent 保持不变，beta path 的跨包版本和可靠性仍需单独验证 [GH:release][GH:pyproject][GH:rust-beta]。
- **Claude Code skill / agent-client integration**：README 提供 Claude Code skill 安装路径，让 coding agent 直接获得 browser automation 工具 [GH:readme]。
- **多模型支持**：pyproject 依赖和 quickstart 覆盖 ChatBrowserUse、Google、Anthropic、OpenAI、Groq、Ollama 等 [GH:pyproject][GH:readme]。

不给 5 的原因：能力强但尚未证明跨复杂网站、登录态、captcha、支付/风控、长任务、多会话、异常恢复的稳定性；并且部分强能力属于 Browser Use Cloud product surface，而不是纯 OSS repo 可审计能力。

## 运行环境与资源占用

| 场景 | CPU | 内存 | 存储 | 说明 |
|------|-----|------|------|------|
| SDK orchestration / local script | 低；启动本地浏览器后为低到中 | SDK 本身小；启动 Chromium 后取决于页面与实例数 | 小 | Python >=3.11；实际资源主要来自浏览器进程和页面复杂度 [GH:pyproject] |
| CLI browser automation | 低到中 | 数百 MB 到数 GB | 小到中 | local Chrome/CDP、screenshots、downloads 和 profile 会增加资源 [Docs:cli] |
| Cloud-hosted browser + local agent | 本地 agent loop 为低到中 | 本地保留 Python/LLM orchestration；浏览器内存转移到云端 | 本地小 | 通过 Cloud browser/CDP 使用 hosted browser；不能把 agent workload 一并视为远端 [Docs:cli][GH:cloud] |
| Hosted Cloud Agent / sandbox | 本地很低 | 本地很低 | 本地小 | `@sandbox` 路径把 Browser Use code/agent 与浏览器放入托管环境，本地主要承担 API 调用和结果处理 [Docs:production] |
| 高并发本地 browser agents | 随并发增长 | 随 Chromium 实例增长 | 随 traces/downloads 增长 | 本轮未压测；应按 Playwright/Chromium 多进程 workload 估算 |

- **运行时**：Python >=3.11；Chromium/CDP browser automation；CLI 3 通过 Browser Harness 提供 direct Python control；beta path 另依赖可选 `browser-use-core` [GH:pyproject][Docs:cli]。
- **操作系统**：Python 包和 local Chrome/CDP 为主要路径；`browser-use-core` 只对 pyproject 列出的平台安装 [GH:pyproject]。
- **Docker**：仓库文档只验证到从 Dockerfile/Dockerfile.fast 本地构建 `browseruse` image；未核实官方发布的 Browser Use image，故按 wiki 约定设 `docker_support: false` [GH:docker]。
- **GPU**：不需要本机 GPU；模型推理可走外部 provider 或本地模型，另计。
- **外部依赖**：LLM provider/API key、Chromium/browser、Browser Use Cloud（可选）、目标网站、可能的 proxy/captcha/stealth 服务。

performance 给 3：client/library 侧不重，但真实 browser automation 的资源效率取决于 Chromium 和网页复杂度；README/Cloud 的速度 benchmark 未复现，不能给 4。

## 上手体验

评分 4/5。

上手路径很顺：README 给出 uv 初始化、`uv add browser-use` 与几行 Python Agent 示例；当前 CLI 文档给出 `uv tool install browser-use`、doctor/auth/skill 命令和直接 Python browser-control 示例 [GH:readme][Docs:cli]。这对开发者相当友好。

扣一分来自现实任务复杂度：真正可靠地让 agent 操作网页，需要选择模型、管理 API key、处理浏览器 profile、登录态、验证码、下载上传、网站变更、超时、失败恢复、权限隔离。上手“能跑”容易，上手“可托付”难。

## 代码质量

评分 3/5。

正面信号：pyproject 的依赖、ruff/pyright/pytest 配置较完整；本地扫描发现 11 个 workflows、102 个 test-ish 文件，CI 有 pytest matrix、ruff/pre-commit 与 pyright [GH:local-scan][GH:pyproject][GH:ci]。Rust beta 还有专门测试和 proof ledger，但本轮没有复跑其中的 Python/Rust 命令 [GH:rust-beta]。

但本轮未运行测试、未看覆盖率、未启动浏览器；0.13 又引入外部 Rust core、SDK server 与 Browser Harness 的跨包过渡面，且 release workflow 的最终 sanity test 仍被注释 [GH:pyproject][GH:ci][GH:rust-beta]。历史 advisory 也说明核心安全边界曾出错 [GH:advisory]，所以代码质量仍为 3。

## 可扩展性

评分 4/5。

OSS repo 的扩展性来自多个方向：自定义 Agent/Browser 配置、custom tools、不同 LLM provider、Browser Harness CLI/CDP/profile、CLI MCP server、coding-agent skills，以及 CONTRIBUTING 中的协作路径 [GH:readme][GH:pyproject][Docs:cli][GH:release][GH:contributing]。

不给 5 的原因：对于深度安全策略、企业级 policy enforcement、确定性 replay、细粒度 permission model，本轮没有看到足以支撑满分的稳定抽象；Cloud integration 可扩充部署面，但 hosted product 不计入 repo 评分。

## 文档质量

评分 4/5。

README 与官方 docs 的 introduction/CLI/production/browser-config/agent-config 能帮助读者快速理解 Python Agent、Browser Harness CLI、cloud sandbox 与 product surface [GH:readme][Docs:cli][Docs:intro][Docs:production]。对开发者来说，初始路径清楚。

扣分点：官方 docs 抽取结果有部分页面内容很简略；Cloud docs 与 README/docs 中带有较强产品推荐口径，需要读者自己区分 OSS repo、hosted cloud、ChatBrowserUse 模型和商业服务 [GH:cloud][Docs:production]。

## 社区与成熟度

| 维度 | 评分 | 说明 |
|------|------|------|
| 社区活跃度 | 4/5 | 105k+ stars、11.5k+ forks、open PRs=238，社区可见度和维护活动都强；但 community profile 仍缺 Code of Conduct / issue / PR template，故不满格 [GH:api][GH:activity][GH:community] |
| 成熟度 | 2/5 | 创建于 2024-10，latest 0.13.6；Python Agent、Browser Harness CLI 与 Rust beta 同时演进，历史 critical advisory 又指向核心安全边界。对这种高权限 substrate，稳定 API 和生产可靠性证据仍不足 [GH:release][GH:advisory] |

Stars 是 visibility，不是 production safety。Browser Use 的生态声量已经很大，但 browser-agent 工程成熟度不能只按 stars 定。

## 安全与风险

评分 2/5。

安全是采用 Browser Use 时的主要约束，不是因为项目“没有安全意识”，而是因为它所处问题域太危险。

正面信号：有 SECURITY.md 和 GitHub private advisory 报告路径；历史 advisory 已明确 affected package 与 patched version [GH:security][GH:advisory]。

核心风险：

1. **登录态与 cookie 风险**：Cloud docs 允许 persistent profile 复用已保存 cookies/auth；认证状态进入托管环境后必须单独审查 [GH:cloud][Docs:production]。
2. **SSRF / internal network 风险**：历史 critical advisory 正是 `allowed_domains` allowlist bypass，影响 <=0.1.44、patched in 0.1.45；这类缺陷会让 browser agent 访问 localhost/internal services [GH:advisory]。
3. **真实副作用风险**：agent 可执行浏览器 Python actions、导航、表单操作与文件交互；错误动作可能提交表单、删除数据、购买、发送消息或泄露文件 [Docs:cli]。
4. **云端任务数据**：hosted browser、persistent profile、proxy 与 live viewing 涉及页面内容、认证状态和会话可见性；需要单独审查数据保留和访问策略 [GH:cloud][Docs:production]。
5. **Prompt injection**：网页内容可诱导 agent 访问、提交或泄密；本轮没有验证防注入机制。
6. **本轮未做安全实测**：未运行 dependency audit、gitleaks、container scan、profile-sync test、allowlist bypass regression 或 cloud data-retention check。

因此 security 给 2：不是“不可用”，而是默认必须按高危自动化工具隔离；生产账号/敏感网络禁用，除非已有独立 sandbox、allowlist、human confirmation、日志审计和最小权限 credential。

## 学习价值

Browser Use 的学习价值很高：它把 agent 从“文本生成器”推进到“浏览器操作者”。这能帮助我们理解几个关键问题：

- 网页是状态空间，不是静态文档；
- browser agent 的能力边界同时由 LLM、DOM、截图、CDP、profile、network 和目标站点决定；
- cookie/profile 是便利性与风险的交点；
- cloud browser 把运维问题外包，也把信任边界外移；
- allowlist、sandbox、human-in-the-loop、credential scoping 是 browser agent 的基础安全原语，不是附加项。

对 Develata 而言，它是非常好的 wiki 样本：既能观察热门 agent infrastructure 的产品化路径，也能提醒自己不要被 demo 炫目所惑。能行于网者，亦能误入险地；器利者，戒心尤不可钝。