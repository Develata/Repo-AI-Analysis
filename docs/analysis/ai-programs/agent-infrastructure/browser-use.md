---
title: "Browser Use"
created: 2026-05-31
updated: 2026-05-31
type: repository-analysis
repo_url: "https://github.com/browser-use/browser-use"
category: "ai-programs/agent-infrastructure"
tags: ["agent-infrastructure", "browser-automation", "computer-use", "ai-agents", "playwright", "python", "cli", "cloud-browser", "mcp", "browser-agent"]
previous_repo: ""
successor: ""
primary_language: "Python"
license: "MIT"
stars: 96304
forks: 10801
last_checked: 2026-05-31
last_verified: 2026-05-31
evidence: "GitHub REST/GraphQL metadata, repository security-advisory API, official docs extraction, README/pyproject/CLOUD.md/CLI docs/security/contributing review, and local shallow clone scan at commit 834269609082d187ca0250de2c06d93799dac92d. No package install, no Chromium run, no cloud sandbox task, no benchmark reproduction, and no real login/cookie/profile-sync test was executed."
archived_reason: ""
docker_support: true
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
  - "[GH:api] GitHub REST/repo snapshot 2026-05-31: stars=96304, forks=10801, REST open_issues_count=243 which includes issues and PRs, created_at=2024-10-31, pushed_at=2026-05-26, primary_language=Python, license=MIT, homepage=https://browser-use.com, latest_release=0.12.9"
  - "[GH:graphql] GitHub GraphQL snapshot 2026-05-31: default branch main commit=834269609082d187ca0250de2c06d93799dac92d, commits=9287, open issues=65, open PRs=178, merged PRs=1788, releases=126, discussions=278, security policy enabled"
  - "[GH:languages] GitHub languages API snapshot 2026-05-31: Python=3146230, Shell=42741, Dockerfile=11201, HTML=7953"
  - "[GH:community] GitHub community profile snapshot 2026-05-31: health_percentage=75; README, CONTRIBUTING and LICENSE detected; CODE_OF_CONDUCT, issue template and PR template not detected by community API; contributors first page returned 100"
  - "[GH:advisory] GitHub repository security-advisories API snapshot 2026-05-31: one critical advisory GHSA-x39x-9qw5-ghrf / CVE-2025-47241 for pip package browser-use <=0.1.44, patched in 0.1.45; allowed_domains allowlist bypass via URL auth username leading to internal/localhost access risk"
  - "[GH:local-scan] Local shallow clone /opt/data/tmp/repo-wiki-trending-2026-05-31/batch10/repos/browser-use at commit 834269609082d187ca0250de2c06d93799dac92d dated 2026-05-26; git ls-files=486, workflows=11, test-ish files=104, markdown=55; LOC heuristic Python~99k, Markdown~11k; Dockerfile, Dockerfile.fast and docker/base-images Dockerfiles present; checked README.md, pyproject.toml, CLOUD.md, browser_use/skill_cli/README.md, .github/SECURITY.md and .github/CONTRIBUTING.md"
  - "[GH:readme] README.md local scan 2026-05-31: quickstart uses uv + browser-use + optional Browser Use Cloud API key; Agent example imports Agent/Browser/ChatBrowserUse; README documents CLI commands, Claude Code skill, open-source vs cloud split, BU Bench V1 claim and separate browser-use/benchmark repo; benchmark was not rerun"
  - "[GH:pyproject] pyproject.toml local scan 2026-05-31: package browser-use 0.12.9, Python >=3.11,<4.0, MIT classifier, dependencies include cdp-use, pydantic, openai/anthropic/google-genai/groq/ollama, mcp, pypdf, markdownify, python-docx, browser-use-sdk; pytest/pyright/ruff configuration present"
  - "[GH:cli] browser_use/skill_cli/README.md local scan 2026-05-31: CLI supports install/doctor/setup/init, open/state/click/type/screenshot/cookies/eval/python persistent session, browser profiles/CDP connection, cloud login and cloud API passthrough"
  - "[GH:cloud] CLOUD.md local scan 2026-05-31: Browser Use Cloud provides sessions, hosted browsers, agents, tasks, API key billing, profile management, profile upload/sync of local browser cookies, task/session/file APIs and 15-minute session runtime; these are product docs, not all repo-audited OSS behavior"
  - "[GH:security] .github/SECURITY.md local scan 2026-05-31: asks reporters not to use issues/discussions/PRs and to create a GitHub security advisory with reproduction, impact and configuration details"
  - "[GH:contributing] .github/CONTRIBUTING.md local scan 2026-05-31: points to contribution guide, local setup, help-wanted issues and integration example guidelines"
  - "[Docs:intro] https://docs.browser-use.com/open-source/introduction extracted 2026-05-31: describes Browser Use Open Source as Python library for AI browser automation, connecting any LLM and running locally or self-hosted"
  - "[Docs:production] https://docs.browser-use.com/production extracted 2026-05-31: sandbox wrapper runs Browser Use code in cloud; docs describe cloud_profile_id for saved cookies/auth, cloud_proxy_country_code for proxy/stealth, and cloud_timeout"
  - "[Docs:browser-config] https://docs.browser-use.com/open-source/customize/browser/basics extracted 2026-05-31: Browser can be configured with headless mode, viewport/window size, proxy settings and Playwright launch options"
  - "[Docs:agent-config] https://docs.browser-use.com/open-source/customize/agent/basics extracted 2026-05-31: Agent configuration includes task, LLM and max_steps-style run controls"
---

# Browser Use

> 给 AI agents 使用真实网页的 Python browser-automation infrastructure：本地可控、云端可托管，能力很强；但浏览器/账号/云 profile 权限面极高，生产采用必须按高危工具治理。
>
> **状态**: `active` · **总分**: 3.3/5 · **推荐度**: 3/5
> **核验版本**: commit `834269609082d187ca0250de2c06d93799dac92d`；GitHub / docs / local clone 快照 2026-05-31
> **验证边界**: 本轮未安装 package、未启动 Chromium、未跑 cloud sandbox task、未同步真实浏览器 profile/cookies、未复现 BU Bench；能力和性能结论按文档/源码可见性保守判断。

## 一句话总结

Browser Use 是 AI agent 访问真实 Web 的 browser-control layer：它把页面状态、截图、DOM/可点击元素、Playwright/CDP 控制、LLM action loop、CLI、Claude Code skill、cloud browser/session 等组合成 agent-native primitive，值得收录；但凡能“替你上网”的工具，也天然能替你误点、泄密、绕到内网，故推荐度必须保守 [GH:readme][GH:cli][GH:cloud]。

## 总体评价

这个仓库应归入 `ai-programs/agent-infrastructure`。它不是一个最终用户聊天助手，也不是传统爬虫；它提供的是 agent runtime 中的 **browser use substrate**：让 LLM/agent 能观察网页、选择动作、控制浏览器、读取页面状态、上传下载文件、复用 profile，并通过本地 CLI/SDK 或云端 sandbox 完成网页任务 [Docs:intro][Docs:browser-config][GH:cli]。

从工程信号看，Browser Use 已不是 demo repo。本地扫描有 486 个 tracked files、约 99k Python LOC、11 个 workflows、104 个 test-ish 文件；pyproject 中有 ruff、pyright、pytest 配置，依赖覆盖 Playwright/CDP、模型 providers、MCP、PDF/DOCX/markdown 处理等 [GH:local-scan][GH:pyproject][GH:languages]。GitHub 快照显示 96k+ stars、10k+ forks、126 个 releases、1788 个 merged PRs，社区可见度很高 [GH][GH:api][GH:graphql]。

但 repo/product 边界必须写清楚：README 和 docs 越来越强调 Browser Use Cloud、ChatBrowserUse、sandbox、hosted browsers、proxy/captcha/stealth/profile sync 等商业云能力；开源库可本地运行，云端能力则涉及 API key、billing、远程浏览器、上传 cookie/profile、保存任务与日志 [GH:readme][GH:cloud][Docs:production]。这会显著改变隐私和安全模型。

我的判断：它值得成为 wiki 中 browser agent infrastructure 的重点条目；可试用、可研究、可在隔离账号中做自动化；但不应未经隔离地操作生产账号、支付系统、云控制台、公司内网后台或个人高价值账户。

## 推荐度：3/5

推荐度 3/5。对 Develata，Browser Use 很值得分析：它是 browser agent 生态的关键样本，也能帮助理解 UI-TARS、Firecrawl、OpenCLI、MCP browser tools 等项目的边界差异。作为工具使用，则建议从只读/低权限任务开始，小步试用。

给 3 而不是 4 的原因：

1. **权限面太大**：浏览器 agent 可以读页面、点击按钮、输入表单、上传文件、访问 cookies/profile，错误一次就可能产生真实副作用 [GH:cli][GH:cloud]。
2. **云 profile/cookie 同步风险高**：CLOUD.md 明确描述可上传本地 browser cookies/profile 到云端用于认证任务；这在便利性之外也构成重大数据托管边界 [GH:cloud]。
3. **历史有 critical advisory**：`allowed_domains` 曾因 URL auth username 绕过而导致 internal/localhost 访问风险，虽影响旧版并已给 patched version，但说明 allowlist/SSRF/内网边界是此类项目核心风险 [GH:advisory]。
4. **性能 claim 未复现**：README 的 BU Bench 和 “3-5x faster” 等说法本轮未跑 benchmark，不能转化为高性能实测结论 [GH:readme]。

推荐用法：阅读源码与 docs；用临时浏览器 profile、低权限测试账号、明确 allowlist、隔离网络环境跑 POC；生产前单独做 threat model。

## 优势

1. **抽象抓得准**：网页对 agent 来说不是纯文本，而是状态机；Browser Use 把状态、截图、可点击元素、动作、browser profile 和 LLM loop 组合成工具层 [GH:readme][Docs:agent-config]。
2. **入口丰富**：Python SDK、CLI、browser profiles/CDP、Claude Code skill、cloud API/sandbox 都存在，适合多种 agent workflow [GH:cli][GH:readme]。
3. **工程信号较强**：pyproject 有类型/测试/lint 配置，本地扫描有 11 个 workflows 与 104 个 test-ish 文件，release 频繁 [GH:local-scan][GH:pyproject][GH:graphql]。
4. **模型与工具生态连接广**：依赖中可见 OpenAI、Anthropic、Google、Groq、Ollama、MCP、CDP、文档处理包等，说明它不是只面向单一 provider [GH:pyproject]。
5. **文档上手清楚**：README 和 docs 给出 uv 安装、Agent 示例、CLI 示例、browser configuration 和 cloud sandbox 示例 [GH:readme][Docs:intro][Docs:production]。
6. **云端产品化路径明确**：Cloud docs 已覆盖 session/task/profile/API/billing/file outputs 等实际 product surface；这对研究 browser-agent productization 有价值 [GH:cloud]。

## 劣势

1. **安全风险是第一位约束**：浏览器自动化天然接触 cookies、登录态、文件、内网 URL、支付/提交按钮、下载与上传；不能按普通 Python library 风险看待。
2. **云能力改变信任边界**：上传 local browser profile/cookies 到 cloud 让自动化更好用，但也意味着认证材料进入第三方基础设施 [GH:cloud]。
3. **历史 critical advisory 指向核心边界**：allowlist 绕过不是边缘小 bug，而是 browser automation 安全模型里的核心问题 [GH:advisory]。
4. **仍是 0.x 版本**：latest release 为 0.12.9，API/行为仍可能快速变化；126 releases 说明迭代活跃，也说明稳定边界未必固定 [GH:api][GH:graphql]。
5. **产品文档有营销压力**：README/docs 强烈推荐 ChatBrowserUse/Cloud；开源库、官方模型和 hosted browser 的能力应分开评价 [GH:readme][GH:cloud]。
6. **本轮未实测可靠性**：没有跑真实任务、模型退化测试、captcha/Cloudflare、复杂登录、多标签/下载/上传等场景。

---

## 适合什么场景

- 研究 browser agents、computer-use agents、web task automation 的基础组件设计。
- 在隔离账号中做网页表单、公开网页查询、低风险重复操作、demo 自动化。
- 给 coding agent 增加 browser inspection/action primitive，例如看网页 UI、截图、点击、提取页面元素 [GH:cli]。
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

上述项目按 `ai-programs/agent-infrastructure` 同类范围做定位级对比，未按同一 10 维度框架深审；UI-TARS 是相邻 `agent-assistants` 条目，只作为 browser/computer-use 生态参照，不是同目录直接竞品。表格用于 taxonomy placement，不比较未归一化的质量、速度或安全性。

---

## 它能做什么

评分 4/5。

能力评分综合 OSS repo 与官方 Cloud product surface；若只看纯 OSS library/CLI、排除 Browser Use Cloud，实际能力应低半档。

- **Agent loop**：`Agent(task=..., llm=..., browser=...)` 让 LLM 根据任务和页面状态迭代控制浏览器 [GH:readme][Docs:agent-config]。
- **Browser control**：可配置 headless/window/proxy/Playwright launch options 等浏览器参数 [Docs:browser-config]。
- **CLI automation**：`open/state/click/type/input/screenshot/cookies/eval/python/tab/wait/get` 等命令覆盖常见浏览器操作 [GH:cli]。
- **Profile/CDP**：CLI 支持 real Chrome profile、running Chrome auto-discovery、CDP URL/WebSocket 连接；这对复用登录态很强，也很危险 [GH:cli]。
- **Cloud sessions/tasks**：Browser Use Cloud 支持 session、hosted browser、task API、live URL、file upload/download、profile sync、API key billing 等 [GH:cloud]。
- **Claude Code skill / agent-client integration**：README 提供 Claude Code skill 安装路径，让 coding agent 直接获得 browser automation 工具 [GH:readme]。
- **多模型支持**：pyproject 依赖和 quickstart 覆盖 ChatBrowserUse、Google、Anthropic、OpenAI、Groq、Ollama 等 [GH:pyproject][GH:readme]。

不给 5 的原因：能力强但尚未证明跨复杂网站、登录态、captcha、支付/风控、长任务、多会话、异常恢复的稳定性；并且部分强能力属于 Browser Use Cloud product surface，而不是纯 OSS repo 可审计能力。

## 运行环境与资源占用

| 场景 | CPU | 内存 | 存储 | 说明 |
|------|-----|------|------|------|
| SDK orchestration / local script | 低；启动本地浏览器后为低到中 | SDK 本身小；启动 Chromium 后取决于页面与实例数 | 小 | Python >=3.11；实际资源主要来自浏览器进程和页面复杂度 [GH:pyproject] |
| CLI browser automation | 低到中 | 数百 MB 到数 GB | 小到中 | persistent browser、screenshots、downloads、cookies/profile 会增加资源 [GH:cli] |
| Cloud sandbox/session | 本地很低 | 本地很低 | 本地小 | 浏览器和 agent workload 在 Browser Use Cloud；本地承担 API 调用和结果处理 [GH:cloud][Docs:production] |
| 高并发本地 browser agents | 随并发增长 | 随 Chromium 实例增长 | 随 traces/downloads 增长 | 本轮未压测；应按 Playwright/Chromium 多进程 workload 估算 |

- **运行时**：Python >=3.11；Chromium/CDP/Playwright-like browser automation；CLI 可跨 macOS/Linux/Windows 使用 [GH:pyproject][GH:cli]。
- **操作系统**：Python 包跨平台；CLI 文档覆盖 macOS/Linux/Windows prerequisites [GH:cli]。
- **Docker**：`docker_support: true` 仅表示仓库中存在 Dockerfile / Dockerfile.fast / docker base-image Dockerfile；本轮未 build，也不把它视作已验证的一键生产 self-host stack [GH:local-scan]。
- **GPU**：不需要本机 GPU；模型推理可走外部 provider 或本地模型，另计。
- **外部依赖**：LLM provider/API key、Chromium/browser、Browser Use Cloud（可选）、目标网站、可能的 proxy/captcha/stealth 服务。

performance 给 3：client/library 侧不重，但真实 browser automation 的资源效率取决于 Chromium 和网页复杂度；README/Cloud 的速度 benchmark 未复现，不能给 4。

## 上手体验

评分 4/5。

上手路径很顺：README 给出 uv 初始化、`uv add browser-use`、可选 `uvx browser-use install`、几行 Python 运行 agent；CLI 也有 one-line install、doctor/setup、template init 与基本 browser 操作 [GH:readme][GH:cli]。这对开发者相当友好。

扣一分来自现实任务复杂度：真正可靠地让 agent 操作网页，需要选择模型、管理 API key、处理浏览器 profile、登录态、验证码、下载上传、网站变更、超时、失败恢复、权限隔离。上手“能跑”容易，上手“可托付”难。

## 代码质量

评分 3/5。

正面信号：pyproject 的依赖、ruff/pyright/pytest 配置较完整；本地扫描发现 11 个 workflows、104 个 test-ish 文件、约 99k Python LOC；GraphQL 显示 merged PRs=1788、commits=9287，维护吞吐较强 [GH:local-scan][GH:pyproject][GH:graphql]。

但本轮未运行测试、未看覆盖率、未启动浏览器；browser automation 逻辑与云/本地双形态复杂度高，历史 advisory 也说明核心安全边界曾出错 [GH:advisory]。所以只能给“可读且有治理信号”的 3，而不是“结构良好且 CI/测试可用已验证”的 4。

## 可扩展性

评分 4/5。

Browser Use 的扩展性来自多个方向：自定义 Agent/Browser 配置、custom tools、不同 LLM provider、CLI/CDP/profile、cloud session API、MCP 依赖、Claude Code skill 表面以及 CONTRIBUTING 中面向集成示例的协作路径 [GH:readme][GH:pyproject][GH:cli][GH:cloud][GH:contributing]。

不给 5 的原因：一部分扩展性绑定 Browser Use Cloud/product；对于深度安全策略、企业级 policy enforcement、确定性 replay、细粒度 permission model，本轮没有看到足以支撑满分的稳定抽象。

## 文档质量

评分 4/5。

README、CLI README、CLOUD.md、官方 docs 的 introduction/production/browser-config/agent-config 能帮助读者快速理解 local library、CLI、cloud sandbox 与 product surface [GH:readme][GH:cli][GH:cloud][Docs:intro][Docs:production]。对开发者来说，初始路径清楚。

扣分点：官方 docs 抽取结果有部分页面内容很简略；Cloud docs 与 README/docs 中带有较强产品推荐口径，需要读者自己区分 OSS repo、hosted cloud、ChatBrowserUse 模型和商业服务 [GH:cloud][Docs:production]。

## 社区与成熟度

| 维度 | 评分 | 说明 |
|------|------|------|
| 社区活跃度 | 4/5 | 96k+ stars、10k+ forks、contributors first page=100、discussions=278、merged PRs=1788，社区可见度和维护活动都强；但 community profile 缺 CODE_OF_CONDUCT/issue/PR template，故不满格 [GH:api][GH:graphql][GH:community] |
| 成熟度 | 2/5 | 创建于 2024-10，latest 0.12.9，release 多且快；已形成生态影响力，但仍是 0.x browser-agent 基础设施，且历史 critical advisory 指向核心安全边界。对这种高权限 substrate，稳定 API 和生产可靠性证据不足时应按 2 计 [GH:api][GH:graphql][GH:advisory] |

Stars 是 visibility，不是 production safety。Browser Use 的生态声量已经很大，但 browser-agent 工程成熟度不能只按 stars 定。

## 安全与风险

评分 2/5。

安全是采用 Browser Use 时的主要约束，不是因为项目“没有安全意识”，而是因为它所处问题域太危险。

正面信号：有 SECURITY.md 和 GitHub private advisory 报告路径；repository security policy enabled；历史 advisory 已标出 patched version [GH:security][GH:graphql][GH:advisory]。

核心风险：

1. **登录态与 cookie 风险**：Cloud docs 明确描述 profile upload/sync，可把本地已登录 cookies/profile 上传到云端用于任务 [GH:cloud]。
2. **SSRF / internal network 风险**：历史 critical advisory 正是 `allowed_domains` allowlist bypass，影响 <=0.1.44、patched in 0.1.45；这类缺陷会让 browser agent 访问 localhost/internal services [GH:advisory]。
3. **真实副作用风险**：agent 可以 click/type/upload/download/cookies/eval；错误动作可能提交表单、删除数据、购买、发送消息或泄露文件 [GH:cli]。
4. **云端日志与任务数据**：Cloud task/session/file APIs 涉及 prompts、页面内容、live session、outputs、logs、uploaded files；需要单独审查数据保留和访问策略 [GH:cloud]。
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