---
title: "Agent Reach"
created: 2026-06-07
updated: 2026-06-18
type: repository-analysis
repo_url: "https://github.com/Panniantong/Agent-Reach"
category: "ai-programs/agent-infrastructure"
tags: ["agent-infrastructure", "web-data", "mcp", "cli", "scraping", "social-media", "tool-router", "python"]
previous_repo: ""
successor: ""
primary_language: "Python"
license: "MIT"
stars: 34119
forks: 2728
last_checked: 2026-06-18
last_verified: 2026-06-18
evidence: "GitHub authenticated API + README/install/update docs + releases + community profile + shallow local scan + local pytest via uv; no authenticated platform smoke test and no live channel doctor run"
archived_reason: ""
docker_support: false
gpu_required: false
estimated_cpu: "low for the agent-reach CLI itself; actual cost depends on upstream tools such as yt-dlp, OpenCLI/browser-backed channels, transcription and search backends"
estimated_memory: "low for configuration/doctor/routing; browser/OpenCLI, downloads, transcription and large page/video processing can raise memory use"
estimated_storage: "small Python package; ~/.agent-reach config/tokens/tool checkouts, caches, cookies and downloaded media are workload-dependent"
status: active
ratings:
  capability: 4
  usability: 4
  performance: 3
  code_quality: 4
  documentation: 4
  community: 4
  maturity: 2
  extensibility: 4
  security: 3
  recommendation: 3
overall_score: 3.5
sources:
  - "[GH] https://github.com/Panniantong/Agent-Reach"
  - "[GH:api] https://api.github.com/repos/Panniantong/Agent-Reach queried 2026-06-18 via gh auth; created_at=2026-02-24T02:10:24Z, pushed_at=2026-06-16T12:45:59Z, default_branch=main, stars=34119, forks=2728, subscribers=93, open_issues_count=71 (= issues + PRs), license=MIT, primary_language=Python, has_discussions=false, has_wiki=true, topics include agent-infrastructure, ai-agent, ai-search, automation, bilibili, claude-code, cli, cursor, free-api, llm-tools, mcp, reddit-scraper, twitter-scraper, web-scraper, xiaohongshu, youtube-transcript"
  - "[GH:languages] https://api.github.com/repos/Panniantong/Agent-Reach/languages queried 2026-06-18; Python=283552 bytes, Shell=14841"
  - "[GH:issues-prs] GitHub search API queried 2026-06-18; open issues=35, open PRs=36; recent sampled open issue #395 requests channel reliability scoring and automatic fallback routing"
  - "[GH:community] https://api.github.com/repos/Panniantong/Agent-Reach/community/profile queried 2026-06-18; health_percentage=71; README, license, CONTRIBUTING present; Code of Conduct, issue template and PR template absent; documentation points to docs/"
  - "[GH:advisories] https://api.github.com/repos/Panniantong/Agent-Reach/security-advisories?per_page=10 queried 2026-06-18; returned []"
  - "[GH:releases] https://api.github.com/repos/Panniantong/Agent-Reach/releases?per_page=5 queried 2026-06-18; sampled releases v1.5.0 published 2026-06-11, v1.4.2 2026-06-10, v1.4.1 2026-06-10, v1.4.0 2026-03-31, v1.3.0 2026-03-04; no release assets in sampled releases"
  - "[GH:release-1.5.0] v1.5.0 release notes inspected via GitHub API 2026-06-18; describes shift from tool collection to capability layer, multi-backend routing, real doctor checks, OpenCLI desktop backend, route changes for XHS/Reddit/Bilibili/Twitter, and install/update experience"
  - "[GH:release-1.4.2] v1.4.2 release notes inspected via GitHub API 2026-06-18; removed Douyin/Weibo/WeChat channels because upstreams were unmaintained/unreliable or anti-bot blocked, added transcribe and doctor --json, and improved skill trigger descriptions"
  - "[GH:release-1.4.1] v1.4.1 release notes inspected via GitHub API 2026-06-18; fixed source-install failure caused by duplicate wheel entries and added a wheel-build gate that builds/install-smokes the wheel in CI"
  - "[GH:local-scan] local shallow clone /opt/data/tmp/repo_wiki_agent_reach at commit 22d7f03a59401b5740b380c3ad43e3ff7a9dc373 inspected 2026-06-18; git ls-files=89, markdown/rst/adoc files=26, test/spec-ish paths=15, GitHub workflows=1; root files include README.md, SECURITY.md, CONTRIBUTING.md, LICENSE, CLAUDE.md, CHANGELOG.md, constraints.txt, llms.txt, pyproject.toml, test.sh; root dirs include agent_reach, config, docs, scripts, tests"
  - "[GH:pyproject] pyproject.toml local scan 2026-06-18; package name=agent-reach, version=1.5.0, Python>=3.10, MIT, Development Status :: 4 - Beta; dependencies include requests, feedparser, python-dotenv, loguru, pyyaml, rich, yt-dlp; optional deps include playwright, browser-cookie3, mcp[cli]; dev deps include pytest, ruff, mypy"
  - "[GH:ci] .github/workflows/pytest.yml local scan 2026-06-18; CI runs pytest on Python 3.10/3.11/3.12/3.13 and has a wheel-gate job that builds the wheel, checks no duplicate entries, verifies SKILL.md/guides/scripts/references are present, smoke-installs the wheel in a clean venv and runs agent-reach version"
  - "[GH:security] SECURITY.md local scan 2026-06-18; supported version is latest; vulnerability reporting uses GitHub private security advisory; response timeline says acknowledgement within 48h, status update within 7 days, fix timeline within 14 days; scope includes auth bypass, RCE, path traversal/arbitrary file read, SSRF, injection and sensitive data exposure"
  - "[Local:test] local command `uv run --extra dev pytest -q` in /opt/data/tmp/repo_wiki_agent_reach on 2026-06-18 installed project/dev deps into .venv and returned 162 passed in 10.36s. Earlier plain `uv run pytest -q` failed because pytest was not installed without dev extra."
  - "[Docs:install] https://raw.githubusercontent.com/Panniantong/agent-reach/main/docs/install.md extracted 2026-06-18; install guide states Agent Reach is selector/installer/health-checker/router, not wrapper; zero-config defaults include Web via Jina, YouTube, GitHub, RSS, Exa Search, V2EX, Bilibili basic; warns agents not to sudo without approval, not modify system files outside ~/.agent-reach, not install unlisted packages, and keep workspace clean"
  - "[Docs:update] https://raw.githubusercontent.com/Panniantong/agent-reach/main/docs/update.md extracted 2026-06-18; update guide says to check version, upgrade package, refresh already-installed upstream tools, not uninstall old tools automatically, run agent-reach version and doctor, and report channel/backend status and required human actions"
  - "[GH:readme] README.md local scan 2026-06-18; README positions Agent Reach as capability layer that selects, installs, checks and routes upstream tools rather than wrapping them; README says compatible with Claude Code, OpenClaw, Cursor, Windsurf and any command-running agent; supported table includes web pages, YouTube, RSS, Exa search, GitHub, Twitter/X, Bilibili, Reddit, XiaoHongShu, LinkedIn, V2EX, Xueqiu, Xiaoyuzhou; Cookie-Editor export is recommended for cookie-based platforms; README claims tools/APIs are free while noting server proxies may cost money; default install registers SKILL.md for agents"
---

# Agent Reach

> 给 AI/coding agent 配一层“互联网能力路由器”：负责选择、安装、体检和路由 Jina、yt-dlp、gh、Exa/MCP、OpenCLI、twitter-cli、bili-cli、rdt-cli 等上游工具，让 agent 能读网页、搜社媒、看视频、读 GitHub/RSS；实用性强，但账号/cookie、上游反爬和自动安装边界必须谨慎。
>
> **状态**: `active` · **总分**: 3.5/5 · **推荐度**: 3/5

## 一句话总结

Agent Reach 很适合把个人 agent 环境快速补齐 web/social/video/GitHub/RSS 读取能力；但它的价值来自“聚合与路由不断变化的上游工具”，不是稳定官方 API，因此推荐为个人研究/信息获取 harness，不建议无隔离地接入生产账号或高价值平台。

## 总体评价

Agent Reach 的定位比普通 scraper 更高一层。README 和安装文档都强调：它是 selector / installer / health checker / router，不是每个平台的 wrapper；安装后 agent 主要直接调用上游工具，例如 Jina Reader、yt-dlp、GitHub CLI、Exa/MCP、OpenCLI、twitter-cli、bili-cli、rdt-cli 等 [Docs:install][GH:readme]。这很符合当前 AI agent 的现实痛点：agent 能写代码，却常常缺少可维护的互联网读取/search/channel routing 能力。分类上仍放在 `ai-programs/agent-infrastructure`，因为它的中心对象是安装、诊断、路由和配置多种 agent-facing internet tools，而不是单一 MCP server、skill pack、memory 或 knowledge-base harness。

从 2026-06 的当前状态看，它已经比 6 月初那版更成熟：GitHub API 显示 stars=34119、forks=2728，v1.5.0 将项目叙事升级为“能力层”，引入多后端路由、真 doctor、OpenCLI 桌面后端；v1.4.1 增加 wheel-build gate；本地运行 `uv run --extra dev pytest -q` 得到 162 passed [GH:api][GH:release-1.5.0][GH:release-1.4.1][Local:test]。

但它仍然是一个年轻、高变动、高外部依赖项目。v1.4.2 明确移除了抖音、微博、微信公众号，因为上游停更、不可用或反爬增强；v1.5.0 又调整了小红书、Reddit、B站、Twitter 的后端顺序 [GH:release-1.4.2][GH:release-1.5.0]。这不是缺点本身，而是说明这类工具的真实边界：平台会封、CLI 会停更、cookie 会过期、浏览器/代理/登录态会变。Agent Reach 的核心价值是把这种变化集中治理，而不是让变化消失。

## 推荐度：3/5

对目标用户——个人 agent 用户、Claude Code / Cursor / OpenClaw 等命令行 agent 环境、信息检索/视频摘要/社媒调研/开源 repo 阅读 workflow——推荐度是 3/5。

给 3 的理由：它很有用，且本地测试和 CI 信号比早期版本强；但是它处理的是高权限、高波动的互联网渠道。Twitter/X、小红书、Reddit 等平台需要 cookie 或登录态，OpenCLI 复用浏览器会话，Exa/MCP、mcporter、gh、yt-dlp 等上游工具也会改变行为 [GH:readme][Docs:install][Docs:update]。这类能力应放在个人隔离环境、低风险账号和可回滚的 agent sandbox 里试用。

不提高到 4：本轮没有运行 `agent-reach doctor`，也没有配置任何真实平台账号、cookie、OpenCLI 扩展或 MCP search 后端；因此不能独立确认每个 channel 的当前可用性。对 Develata，可收录、可观察、可按需试，但不要当成稳定基础设施默认安装到所有环境。

## 优势

1. **问题定义准确**：把“agent 缺互联网读取/search 能力”拆成安装、诊断、路由和技能提示，而不是只写一个单平台 scraper [GH:readme][Docs:install]。
2. **多后端路由思路务实**：v1.5.0 明确每个平台有首选/备选后端，doctor 会报告 active_backend；这比硬绑定一个随时失效的上游更可靠 [GH:release-1.5.0]。
3. **安全边界开始显式化**：install guide 要求不经用户批准不 sudo、不改 workspace、不安装未列包；SECURITY.md 给出漏洞报告入口和响应时间 [Docs:install][GH:security]。
4. **工程质量信号提升**：Python 3.10-3.13 CI、wheel gate、clean venv smoke install、162 个本地 pytest 通过，说明项目已经补过一次 packaging 事故后的结构性防线 [GH:ci][GH:release-1.4.1][Local:test]。
5. **对中文/海外平台覆盖都强**：README 支持表覆盖 YouTube、GitHub、RSS、Exa search、Twitter/X、B站、小红书、Reddit、LinkedIn、V2EX、雪球、小宇宙等 [GH:readme]。

## 劣势

1. **成熟度仍低**：created_at=2026-02-24，到本轮检查只有约 4 个月；release 很频繁，但这也说明渠道和上游仍在快速变化 [GH:api][GH:releases]。
2. **平台可用性高度外部化**：很多能力依赖上游 CLI、浏览器登录态、cookie、代理、反爬策略、MCP 配置和第三方服务；项目本身不能保证平台长期可用 [GH:release-1.4.2][GH:readme]。
3. **安全风险天然高**：cookie/token、本地技能目录、MCP config、GitHub CLI、OpenCLI/browser session、下载/转写工具都可能扩大 agent 权限面 [Docs:install][Docs:update][GH:security]。
4. **官方 API/SLA 不存在**：README 强调免费/零 API 费，但这也意味着不少能力依赖非官方或易变路径，不适合企业稳定 workflow [GH:readme]。
5. **本轮未做真实 channel smoke test**：pytest 只能证明包内单元测试/契约测试通过，不能证明 Twitter/XHS/Reddit/B站等真实平台当下可用 [Local:test]。

## 适合什么场景

1. **个人 AI research agent**：网页、YouTube、RSS、GitHub、V2EX、B站基础等低风险读取能力可以作为 agent 信息入口。
2. **临时调研/舆情/开源项目阅读**：需要让 agent 快速搜索、读取和总结多平台内容，而不是手动给每个平台配工具。
3. **OpenClaw / Claude Code / Cursor 环境的能力 bootstrap**：把安装说明交给 agent，让它按 `docs/install.md` 建立基础工具链 [Docs:install]。
4. **工具路由设计学习**：可以观察多后端、doctor、safe/dry-run、skill auto-install、MCP config 这类 agent harness 设计。
5. **低价值账号、隔离环境里的 cookie-based 平台试验**：如小红书/Reddit/Twitter 搜索，但应使用可丢弃账号和明确隔离。

## 不适合什么场景

1. **生产账号和高价值后台**：不要把主力 Twitter/GitHub/LinkedIn 等账号 cookie 交给不受控 agent 环境。
2. **企业级稳定数据 pipeline**：上游平台和非官方 CLI 的变动频率太高，难以承诺 SLA。
3. **需要法律/合规确定性的采集**：平台 ToS、反爬和数据使用边界必须另审，Agent Reach 本身不解决合规问题。
4. **无 sandbox 的自动执行环境**：它的安装/更新涉及 pip/pipx/npm/mcporter/gh/OpenCLI 等工具，必须有权限边界。
5. **不愿维护 cookie/代理/浏览器扩展的人**：对部分平台，human-in-the-loop 仍不可避免 [Docs:install][Docs:update]。

## 与类似项目对比

| 项目 | 定位 | 相对本项目 |
|------|------|-----------|
| Firecrawl | Web crawling / extraction API or self-hosted service | Firecrawl 更偏通用网页抓取与结构化抽取；Agent Reach 更偏 agent 本地能力层和多平台 CLI 路由。 |
| browser-use / BrowserAct | 浏览器自动化/网页操作 agent substrate | 浏览器自动化能“操作网页”；Agent Reach 主要解决“读/search/安装上游工具”，README 也把操作网页视为相邻能力 [GH:readme]。 |
| github-mcp-server | GitHub MCP server | github-mcp-server 深做 GitHub；Agent Reach 覆盖 GitHub 之外的社媒、视频、RSS、网页和搜索。 |
| mcporter / MCP search setups | MCP 工具安装与配置 | Agent Reach 会使用/配置这类工具，但其主对象是跨平台互联网能力路由，而不是单个 MCP server。 |
| 单平台 CLI 如 twitter-cli / bili-cli / rdt-cli | 单渠道读取工具 | Agent Reach 的价值是选择、安装、体检和路由这些上游 CLI，而不是替代所有单平台工具实现。 |

上述对比是定位级比较，未对竞品按同一 10 维度框架重审。

## 它能做什么

Agent Reach 能安装和维护一个面向 agent 的互联网读取工具层。默认基础渠道包括 Web via Jina、YouTube、GitHub、RSS、Exa Search、V2EX、Bilibili basic；可选渠道包括 OpenCLI、Twitter/X、小红书、Reddit、B站完整版、LinkedIn、雪球、小宇宙等 [Docs:install][GH:readme]。

核心动作包括：

- `agent-reach install --env=auto` 安装基础能力；
- `--safe` 只检查、不自动安装系统包；
- `--dry-run` 预览变更；
- `agent-reach doctor` 体检 channel；
- `doctor --json` 输出 machine-readable channel/backend 状态；
- `agent-reach uninstall` 清理 `~/.agent-reach/`、tokens/cookies、skill files、MCP config；
- update guide 中刷新已安装上游工具，但明确不要自动卸载旧工具 [Docs:install][Docs:update]。

## 运行环境与资源占用

Agent Reach 自身是 Python CLI，小型包，资源消耗低；`pyproject.toml` 要求 Python >=3.10，依赖 requests、feedparser、python-dotenv、loguru、pyyaml、rich、yt-dlp，optional deps 包括 Playwright、browser-cookie3、mcp[cli] [GH:pyproject]。

真实资源占用由上游决定：YouTube/yt-dlp 可能下载字幕或媒体，OpenCLI 复用浏览器，音频转写可能使用外部转写后端，MCP/Exa/GitHub/Reddit/Twitter/B站等工具各有网络和缓存成本 [GH:readme][Docs:install][Docs:update]。

本项目没有官方 Docker 主路径；frontmatter `docker_support=false` 表示没有把 Docker 作为官方用户安装/运行入口。本轮也未运行真实 channel doctor，因此不报告平台成功率。

## 上手体验

上手体验给 4。README 的主路径非常面向 agent：用户复制一句“帮我安装 Agent Reach: docs/install.md”给 agent，agent 按指南安装；也提供 safe mode、dry-run、pipx/venv、Windows Python alias、可选渠道菜单和 doctor [Docs:install][GH:readme]。

扣分点是它仍依赖 agent 执行 shell，并且有些步骤只能人来做，例如 Chrome 扩展点击、Cookie-Editor 导出、登录态配置、服务器代理选择等 [Docs:install][Docs:update]。因此它降低了配置成本，但不是零人工成本。

## 代码质量

代码质量给 4。可见工程信号包括：清晰的 Python package、`agent_reach/channels/` 每个平台单文件、`doctor.py`、`probe.py`、`integrations/mcp_server.py`、`skill/`、`guides/`；CI 覆盖 Python 3.10-3.13；wheel gate 防止打包文件缺失/重复；本地 dev extra 下 162 个 pytest 通过 [GH:local-scan][GH:ci][Local:test]。

不直接给 5：项目非常年轻，且 v1.4.1 release 说明刚经历过源码安装/wheel 重复打包事故；这次已通过 CI gate 修复，但说明 packaging 和上游集成仍在快速演化 [GH:release-1.4.1]。

## 可扩展性

可扩展性给 4。设计上每个平台是 channel/backends，`CLAUDE.md` 记录 channel contract 要实现 `can_handle(url)`, `read(url)`, `search(query)`, `check()`；README 和 release notes 也强调多后端有序列表和 active_backend [GH:local-scan][GH:release-1.5.0]。这对新增平台、替换失效后端和 agent skill 集成都很有利。

扣分点是 extensibility 很依赖外部工具生态，新增平台往往不是写一段纯代码，而是处理上游 CLI、登录态、cookie、代理、反爬和平台策略变化。

## 文档质量

文档质量给 4。README、install/update docs、SECURITY、CONTRIBUTING、CHANGELOG、llms.txt、多语言 README 和 packaged guides 都存在；安装文档还明确安全边界、目录规则、safe/dry-run、optional channel 询问和 doctor 修复路径 [GH:local-scan][Docs:install][Docs:update][GH:security]。

不足是文档本身也承载了大量“当前推荐路线”，而这些路线会随上游变化快速变动。对用户而言，必须经常更新并跑 `doctor`，不能只看某一版 README 作为长期事实。

## 社区与成熟度

社区给 4，成熟度给 2。社区可见度非常高：stars=34119、forks=2728，短期增长强；GitHub community health=71，README、CONTRIBUTING、SECURITY、license 都有 [GH:api][GH:community][GH:security]。但没有 Discussions，Code of Conduct、issue template、PR template 缺失，open issues=35、open PRs=36 对一个 4 个月项目也不算轻 [GH:issues-prs][GH:community]。

成熟度保守给 2，因为项目对象是“跟随互联网平台变化的 agent capability layer”。v1.4.2 删除若干渠道，v1.5.0 又切换后端路线，这说明项目响应快，但也说明稳定边界仍在形成 [GH:release-1.4.2][GH:release-1.5.0]。

## 安全与风险

安全给 3。正面信号是：SECURITY.md 存在并给出 private advisory 报告路径和响应时间；install guide 要求不经用户明确批准不 sudo、不改 workspace、不安装未列包；safe/dry-run/uninstall/update 边界也写得比较清楚 [GH:security][Docs:install][Docs:update]。

风险在于能力面本身：cookie、token、browser session、MCP config、agent skill files、GitHub CLI、OpenCLI、下载/转写工具都可能被 agent 调用。如果 prompt injection 或恶意网页诱导 agent 使用这些能力，风险远高于普通 Python CLI。GitHub Security Advisories 返回空只表示本次未查到 published GHSA，不等于项目或依赖安全 [GH:advisories]。实际采用应使用隔离账户、隔离机器/容器、最小权限 token、禁用自动 sudo，并把 cookie 当成敏感凭据管理。

## 学习价值

Agent Reach 的学习价值很高：它是“agent harness 不是模型能力，而是工具治理能力”的典型样本。它展示了如何把平台工具选择、安装、体检、多后端路由、skill 注入、MCP config、safe mode、doctor JSON 和更新策略组织成一个 agent-facing capability layer。对 Develata 来说，它值得跟踪，但更适合作为个人 agent lab 的可控组件，而非默认全局安装的基础设施。
