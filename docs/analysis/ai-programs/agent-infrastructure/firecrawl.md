---


title: "Firecrawl"
created: 2026-05-20
updated: 2026-07-14
type: repository-analysis
repo_url: "https://github.com/firecrawl/firecrawl"
category: "ai-programs/agent-infrastructure"
tags: ["agent-infrastructure", "web-data", "scraping", "crawler", "search", "mcp", "sdk", "agents", "typescript", "self-hosted", "research-index"]
previous_repo: ""
successor: ""
primary_language: "TypeScript"
license: "AGPL-3.0"
stars: 150342
forks: 8592
last_checked: 2026-07-14
last_verified: 2026-07-14
evidence: "GitHub API + official docs + release review + npm/PyPI package metadata + repository local scan; not deployed in production by Develata"
archived_reason: ""
docker_support: true
gpu_required: false
estimated_cpu: "hosted API requires no local CPU; self-hosted API/workers/Redis/Postgres/Playwright normally need at least a small multi-core server and scale with crawl/browser concurrency"
estimated_memory: "planning estimate: hosted API client is light; self-hosted Docker/Playwright/browser workloads should budget several GB and increase with concurrent pages"
estimated_storage: "small for SDK/CLI packages; self-hosted queues, PostgreSQL state, logs and crawled outputs grow with job volume"
status: active
ratings:
  capability: 5
  usability: 4
  performance: 3
  code_quality: 4
  documentation: 5
  community: 4
  maturity: 3
  extensibility: 4
  security: 3
  recommendation: 4
overall_score: 3.9
sources:
  - "[GH] https://github.com/firecrawl/firecrawl — GitHub GraphQL/REST checked 2026-07-14: created_at=2024-04-15T21:02:29Z, archived=false, disabled=false, default_branch=main, pushed_at=2026-07-13T18:06:31Z, latest commit=9b8225fac843a5f3832a68d7e26024fd4844bd94, stars=150342, forks=8592, REST open_issues_count=397, GraphQL open issues=46, open PRs=351, releases=35, latest release=v2.11.0 published 2026-06-19, contributors≈154, primary language=TypeScript, license=AGPL-3.0"
  - "[GH:issues] GitHub Search API queried 2026-07-14: open issues=46, open PRs=351 for repo:firecrawl/firecrawl; repo REST open_issues_count from [GH] includes issues plus PRs"
  - "[GH:languages] https://api.github.com/repos/firecrawl/firecrawl/languages queried 2026-07-14; TypeScript=6111709, Python=1276166, Rust=391203, Java=256271, PHP=190803, C#=128476, Elixir=123405, Go=113544, Ruby=100358, Astro=33927"
  - "[GH:release] https://github.com/firecrawl/firecrawl/releases/tag/v2.11.0 — checked 2026-07-14: release notes include Firecrawl Research Index, keyless access for scrape/search/interact/parse from official MCP/CLI/SDK clients, redactPII option, deterministicJson format, video discovery, CDP URL for browser sessions, monitor improvements, PDF size cap to 50 MB, Python SDK crawl scrape kwargs, and API changes including /v2/search/research proxy"
  - "[GH:community] https://api.github.com/repos/firecrawl/firecrawl/community/profile queried 2026-07-14: health_percentage=62; README, CONTRIBUTING and LICENSE detected; CODE_OF_CONDUCT, issue template and PR template not detected by community API"
  - "[GH:advisories] https://github.com/firecrawl/firecrawl/security/advisories and GitHub API queried 2026-07-14: 2 published high advisories: GHSA-p2wg-prhf-jx79/CVE-2025-57818 SSRF via malicious webhook, affected firecrawl <2.0.1, patched 2.0.1, published 2025-08-26; GHSA-vjp8-2wgg-p734/CVE-2024-56800 SSRF via malicious scrape target, affected firecrawl <1.1.1, patched 1.1.1, published 2024-12-30, updated 2026-03-13"
  - "[GH:local-scan] /opt/data/tmp/repo-wiki-freshness-2026-07-14-clones/firecrawl at 9b8225fac843a5f3832a68d7e26024fd4844bd94, cloned 2026-07-14: git ls-files=1637, TypeScript/TSX files=744, test/spec-ish matches=450, workflow files=30, package.json files=9, pyproject.toml=1, Cargo.toml=2, go.mod=3, Dockerfile files=5, docker-compose files=2; checked README.md, SELF_HOST.md, CONTRIBUTING.md, CLAUDE.md, LICENSE and manifests"
  - "[Docs:intro] https://docs.firecrawl.dev/introduction extracted 2026-07-14: describes Search, Scrape, Interact, Agent, Browser Sandbox, Map and Crawl; recommends npx -y firecrawl-cli@latest init --all --browser for AI-agent onboarding; MCP Server connects Firecrawl to Claude/Cursor/Windsurf/VS Code and other AI tools"
  - "[Docs:scrape] https://docs.firecrawl.dev/features/scrape extracted 2026-07-14: /scrape supports markdown, summary, html, rawHtml, screenshot, links, json, images, branding, product, audio, video, query; docs mention PDFs/DOCX via URL, parse for local files, credit costs, ZDR enterprise constraints"
  - "[Docs:llms] https://docs.firecrawl.dev/llms.txt extracted 2026-07-14: docs index covers FIRE-1 Agent, Build with AI, Agent Auth, scrape/search/crawl/map/parse/browser/monitor/webhook endpoints, research paper/GitHub search endpoints, errors, OpenAPI specs, use cases and MCP/developer guides"
  - "[Docs:self-host] https://github.com/firecrawl/firecrawl/blob/main/SELF_HOST.md extracted 2026-07-14: self-hosting uses Docker Compose with API, workers, Redis/PostgreSQL/Playwright-related services, optional OpenAI/Ollama/proxy/SearXNG/Supabase/LlamaParse config; notes self-hosted instances lack Fire-engine advanced handling for IP blocks/robot detection; security notes require strong PostgreSQL credentials, internal DB port and strong BULL_AUTH_KEY"
  - "[NPM] npm view queried 2026-07-14: firecrawl=4.30.0 unpackedSize=877171; @mendable/firecrawl-js=4.30.0 unpackedSize=877211; firecrawl-cli=1.19.26 unpackedSize=1393063"
  - "[PyPI] https://pypi.org/project/firecrawl-py/ extracted 2026-07-14: firecrawl-py latest=4.32.0 released 2026-07-08; page describes Python SDK for search/scrape/interact/crawl/map/parse and v1 compatibility"
---

# Firecrawl

> 面向 AI agents 的 Web data infrastructure：把 search / scrape / crawl / interact / parse / research-index 等网页获取与清洗能力包装成 API、CLI、SDK、MCP 与可自托管服务。
>
> **状态**: `active` · **总分**: 3.9/5 · **推荐度**: 4/5
> **核验版本**: GitHub commit `9b8225fac843a5f3832a68d7e26024fd4844bd94`；GitHub API / Docs / release / npm / PyPI 快照 2026-07-14

## 一句话总结

Firecrawl 是典型的 Agent Infrastructure：它给 agent 提供“从真实 Web 获取、清洗、交互、结构化、监控并回传 LLM-ready context”的网页数据层，而不是一个普通爬虫 demo。版本线需要分开看：repo release 为 v2.11.0，npm SDK/CLI 和 Python SDK 另有独立版本号 [GH:release][NPM][PyPI]。

## 总体评价

Firecrawl 应归入 `ai-programs/agent-infrastructure`。它解决的是 agent 自主运行中的一个基础 primitive：**web data acquisition**。对 agent 来说，浏览网页不是“HTTP get 一下”这么简单，而是要处理搜索、动态页面、JS-heavy 内容、截图、链接发现、站点 crawl、batch scrape、结构化 JSON、文件 parse、browser interaction、webhook、monitor、错误重试与 API/SDK/MCP 接入等工程细节 [Docs:intro][Docs:scrape][Docs:llms]。

它和 Context7、CodeGraph、CLI-Anything 同属 agent infrastructure，但子层不同：Context7 是 external documentation grounding，CodeGraph 是 local codebase context cache，CLI-Anything 是 tool-access harness，Firecrawl 则是 **web context ingestion layer**。若 agent 要回答“现在网上有什么事实”、构建 research agent、监控竞品/SEO/电商/新闻页面，Firecrawl 处在事实入口处。

2026-07 核验显示，Firecrawl 从 v2.10 推进到 v2.11.0，新增 Research Index、keyless core endpoints、PII redaction、deterministicJson、CDP URL、自带 monitor 改进等能力 [GH:release]。这些变化增强了 hosted/API product surface，也扩大了隐私、配额和自动化边界。

需要注意 repo/product 边界：Firecrawl 同时是开源仓库和商业 hosted API。README/docs 中的可靠性、速度、反爬和研究索引主张主要面向产品/云服务；self-host 文档明确说明自托管实例目前没有 Fire-engine，高级 IP-block/robot-detection 等能力与云服务存在差距 [Docs:self-host]。因此本分析把 hosted API 的能力和开源自托管能力分开看。

## 推荐度：4/5

**角色定位**：推荐给需要给 agents / LLM apps 接入网页搜索、抓取、crawl、网页交互、监控和结构化抽取能力的开发者、agent-infra 构建者与数据工作流团队。

推荐度 4/5。给 4 的理由是：Firecrawl 命中 agent 真实刚需，API/CLI/SDK/MCP/自托管入口齐全，文档非常完整，语言 SDK 覆盖广，社区和维护活跃 [Docs:llms][NPM][PyPI][GH]。v2.11.0 进一步把 Research Index、PII redaction、deterministicJson、monitor diff、keyless access 等产品能力推到 agent 工作流前面 [GH:release]。

不给 5 的理由也很明确：Web scraping 本身就是高攻击面和高运维复杂度领域；self-host 与 hosted 能力不完全等价；仓库创建于 2024-04，v2 仍快速演进；且已有两个高危 SSRF advisory，说明 webhook / outbound request / scrape target / browser automation 这类边界必须谨慎治理 [Docs:self-host][GH:advisories]。

## 优势

1. **能力面很完整**：search、scrape、interact、agent、crawl、map、batch scrape、parse、structured JSON、screenshots、links、media、webhooks、monitor 等形成完整 web-data surface [Docs:intro][Docs:scrape][Docs:llms]。
2. **agent-first 设计明显**：docs 提供 AI-agent onboarding、MCP setup、CLI 初始化和多语言 SDK；`llms.txt` 直接面向 AI agent 文档发现 [Docs:intro][Docs:llms]。
3. **v2.11 product surface 强化**：Research Index、keyless core endpoints、redactPII、deterministicJson、CDP URL、monitor 改进等都是 agent/data workflow 常见痛点 [GH:release]。
4. **SDK 覆盖广**：本地扫描和语言 API 显示 TypeScript、Python、Rust、Go、Java、PHP、Elixir、C#、Ruby 等语言代码/SDK 并存 [GH:languages][GH:local-scan]。
5. **文档优秀**：官方 docs 有 `llms.txt`，覆盖 API Reference v2、OpenAPI specs、webhooks、errors、use cases、developer guides、MCP setup、AI-agent onboarding、browser sessions、monitor、research endpoints 等 [Docs:llms]。
6. **社区热度和维护强**：API 快照显示 150k+ stars、8.5k+ forks、约 154 contributors，近期 release 与 push 都很活跃 [GH][GH:release]。

## 劣势

1. **self-host 与 hosted 有能力差距**：SELF_HOST.md 明确写出 self-hosted instances 当前没有 Fire-engine，因此高级 IP blocks、robot detection 等复杂场景可能需要额外配置或不受支持 [Docs:self-host]。
2. **安全攻击面大**：webhook、outbound URL、proxy、browser automation、HTML/markdown conversion、file parsing、credentials 与 internal network 边界都会带来 SSRF/XSS/数据外泄风险；项目已有两个高危 SSRF advisory [GH:advisories]。
3. **AGPL 对商业使用有约束**：主仓库 license 是 AGPL-3.0；本条不把 SDK/package 版本信息当作服务端 license 的替代证据，服务端自托管与修改分发要按主仓库 AGPL 理解 [GH][NPM][PyPI]。
4. **项目仍年轻且高速迭代**：仓库创建于 2024-04，latest release 是 2026-06 的 v2.11.0；功能扩展快，但也意味着 API/部署/SDK 迁移需要关注 release notes [GH][GH:release]。
5. **开源贡献治理不满格**：community profile 为 62，未检测到 CODE_OF_CONDUCT、issue template、PR template；高 star 不等于治理成熟 [GH:community]。
6. **open PR backlog 很高**：GraphQL / Search API 显示 open PRs=351，说明维护队列压力不小 [GH:issues]。

---

## 适合什么场景

- Research agent、market intelligence agent、SEO/竞品监控、新闻/电商/金融页面采集。
- LLM 应用需要把网页转成 clean Markdown、HTML、structured JSON、截图、links、images、query/highlights/product/audio/video 等格式 [Docs:scrape]。
- 需要通过 MCP / CLI / SDK 给 coding agent 或 workflow agent 接入 Web context [Docs:intro][Docs:llms]。
- 对 hosted API 可接受，希望把代理、反爬、动态页面、browser execution、Research Index 和队列细节外包给服务商的团队。
- 需要自托管基础 scraper/crawler，并愿意接受 self-host 与云服务能力差距、自己维护 Redis/PostgreSQL/Playwright/worker 的团队 [Docs:self-host]。

## 不适合什么场景

- 需要完全离线、无外部网络依赖、无第三方云服务的高敏数据环境，除非只用并审计自托管路径。
- 需要保证复杂反爬/robot detection/IP-block/Research Index 能力与 Firecrawl cloud 完全等价的自托管场景；官方 self-host 文档已经提示缺口 [Docs:self-host]。
- 不能接受 AGPL-3.0 服务端 license 约束的商业闭源改造。
- 只需要少量稳定网页的简单 fetch/parse；此时 `requests`/Playwright/readability 可能更简单。
- 把网页抓取用于违反目标站点 ToS、robots 或法律合规边界的场景；Firecrawl 提供能力不等于自动提供合法性。

## 与类似项目对比

| 项目 | 定位 | 相对本项目 |
|------|------|-----------|
| Context7 | agent 文档上下文层 | Context7 抓“库/API 文档事实”；Firecrawl 抓“开放 Web 页面事实” |
| CodeGraph | 本地代码知识图谱 | CodeGraph 预索引 repo 内部结构；Firecrawl 面向外部网站、网页和文件内容 |
| CLI-Anything | 将软件包装成 agent-native CLI/tool | CLI-Anything 让 agent 操作工具；Firecrawl 本身就是一个 web data tool/API |
| MCP Servers | MCP reference server 集合 | MCP Servers 是协议/工具样板；Firecrawl 可作为具体的 Web data MCP/tool provider |
| Mem0 | 长期记忆层 | Mem0 保存历史状态；Firecrawl 获取当前外部 Web context |

上述项目按 `ai-programs/agent-infrastructure` 同类范围做定位级对比，未按同一 10 维度框架深审。

---

## 它能做什么

能力评分 5/5。

- **Search**：搜索 Web，并返回页面结果及内容入口 [Docs:intro][Docs:llms]。
- **Scrape**：单 URL 转 Markdown、summary、HTML、raw HTML、截图、links、images、structured JSON、branding、product、audio/video、query 等 [Docs:scrape]。
- **Interact / Browser**：基于 scrape session 或 standalone session 执行 click、fill、extract、CDP/Playwright/Puppeteer 风格浏览器操作 [Docs:intro][Docs:llms][GH:release]。
- **Crawl / Map / Batch Scrape**：站点 URL 发现、批量抓取和异步 crawl 状态查询 [Docs:llms]。
- **Parse**：处理 URL 上的 PDF/DOCX 等文档；本地文件则走 `/parse` [Docs:scrape][Docs:llms]。
- **Research Index**：v2.11.0 release notes 描述面向 agentic AI/ML research 的 arXiv/GitHub 研究索引，通过 API/SDK/MCP/CLI 可用 [GH:release]。
- **Agent / MCP / CLI / SDK**：通过 `firecrawl-cli`、多语言 SDK、MCP 与 REST API 接入 agent workflow [Docs:intro][Docs:llms][NPM][PyPI]。
- **Self-host**：Docker Compose 可跑 API、workers、Redis/PostgreSQL/Playwright 相关服务；也可配置 OpenAI/Ollama、proxy、SearXNG、LlamaParse 等 [Docs:self-host]。

能力给 5 是因为 product/API surface 覆盖 Web context ingestion 的主要场景；但这不是说所有能力在 self-host 下都与云服务等价，self-host parity 不由这个分数保证。

## 运行环境与资源占用

| 场景 | CPU | 内存 | 存储 | 说明 |
|------|-----|------|------|------|
| Hosted API client | 很低 | 很低 | 很小 | 本地只运行 SDK/CLI，请求发往 Firecrawl API；资源主要在云端 [NPM][PyPI] |
| Self-host 最小 | 小型多核 | 数 GB 起（规划估计） | 中等 | Docker Compose 运行 API、workers、Redis/PostgreSQL 和 Playwright 相关服务 [Docs:self-host] |
| 高并发 crawl/browser | 随并发增长 | 随浏览器/队列增长 | 随日志、队列、结果增长 | 动态页面、截图、文件 parse、批量 crawl、Research Index/AI features 会显著增加 CPU/RAM/IO 与外部网络成本 |

- **Docker**：官方仓库提供 `docker-compose.yaml` 和多个 Dockerfile [GH:local-scan]。
- **GPU**：不需要 GPU；AI features 依赖 OpenAI/Ollama/OpenAI-compatible API 等模型服务时，模型端资源另算 [Docs:self-host]。
- **性能评分 3/5**：hosted/API client 侧很轻，但本轮没有复现性能 benchmark；自托管 crawler/browser workload 的资源效率高度依赖并发、页面复杂度和代理/浏览器配置，且 self-host 与 Firecrawl cloud 不完全等价 [Docs:self-host]。

## 上手体验

评分 4/5。

Hosted 路径非常顺：注册 API key 或使用 keyless core endpoint 低限额入口，按 Python/Node/cURL/CLI 示例调用 search/scrape/interact；docs 还推荐 `npx -y firecrawl-cli@latest init --all --browser` 来为 AI agents 初始化 [Docs:intro][GH:release][NPM]。`/scrape` 文档也给了 schema / prompt / format 等示例 [Docs:scrape]。

扣一分来自两处：第一，self-host 不是零配置，涉及 Docker、环境变量、Redis/PostgreSQL、Bull admin key、Playwright、proxy、SearXNG、可选 LLM keys 等；第二，Firecrawl 的功能面很宽，新用户需要理解 endpoint、format、crawl/batch lifecycle、webhook、monitor、rate limit、credit cost、ZDR 和安全边界 [Docs:self-host][Docs:llms][Docs:scrape]。

## 代码质量

评分 4/5。

本地扫描显示 Firecrawl 是多语言 monorepo：9 个 package.json、1 个 Python SDK pyproject、2 个 Cargo.toml、3 个 go.mod、5 个 Dockerfile、2 个 docker-compose 文件、30 个 workflow 文件，以及 450 个 test/spec-ish matches。`CLAUDE.md` 也要求 API 改动优先写 E2E/snips 并用 harness/Jest 跑相关测试 [GH:local-scan]。

不给 5 的原因是：仓库同时维护 API、workers、多语言 SDK、browser/HTML conversion services、monitor/research/parse 相关能力和示例，复杂度很高；本次没有完整运行测试，也没有审计覆盖率。代码质量证据足以支持“良好”，但不足以证明“极佳且覆盖率 ≥80%”。

## 可扩展性

评分 4/5。

Firecrawl 的扩展面主要体现在：REST API、CLI、多语言 SDK、MCP/agent onboarding、webhooks、OpenAPI specs、自托管环境变量和可替换的 proxy/search/LLM/file-parse 服务 [Docs:llms][Docs:self-host][NPM][PyPI]。这对把 Web data 接到不同 agent framework 很友好。

不给 5 的原因是：它不是通用插件平台，深度定制复杂抓取策略、Fire-engine 能力、Research Index 或云端调度能力时可能需要 fork、企业能力或外部服务；self-host 文档也说明高级反爬能力不完整 [Docs:self-host]。

## 文档质量

评分 5/5。

文档是 Firecrawl 的强项。`llms.txt` 提供机器可读文档索引；docs 覆盖 introduction、core endpoints、API Reference v2、webhooks、errors、OpenAPI specs、developer guides、MCP setup、AI-agent onboarding、browser sessions、parse、monitor、research endpoints、use cases 和 dashboard 等 [Docs:llms]。README/文档也给出 Python/Node/cURL/CLI 多入口示例 [Docs:intro][Docs:scrape]。

唯一要注意的是：文档中有些能力属于 hosted product 或较新 release，实际自托管可用性要结合 SELF_HOST.md 与 release notes 判断，不能把 docs 的产品面能力全部自动等同于 OSS local stack [Docs:self-host][GH:release]。

## 社区与成熟度

社区评分 4/5，成熟度评分 3/5。

社区活跃度很强：GitHub API 快照显示 150342 stars、8592 forks、约 154 contributors；Search/GraphQL API 显示 open issues=46、open PRs=351；latest release v2.11.0 发布于 2026-06-19，说明维护和发布都很活跃 [GH][GH:issues][GH:release]。因此 community=4 主要反映 adoption/activity，而不是 governance quality。

但 community 不给 5，因为 GitHub community profile 为 62，未检测到 code of conduct、issue template、PR template；此外项目背后有明显商业 hosted product，开放治理不应因 star 数自动满分 [GH:community]。

成熟度给 3：仓库创建于 2024-04，v2 系列已经成型，但仍在快速添加 Research Index、keyless access、PII redaction、deterministicJson、monitor、CDP、API deprecation 等功能；这更像高速成长的基础设施，而不是长期稳定、破坏性变更罕见的成熟系统 [GH][GH:release]。

## 安全与风险

评分 3/5。

Firecrawl 的安全风险来自业务本质：它主动访问用户指定 URL、解析不可信 HTML/文件、执行浏览器交互、发送 webhook、可能带自定义 headers/proxy，并可能运行在带内网访问能力的自托管环境。截至 2026-07-14 检查，GitHub Security Advisories 返回两个 high SSRF 类公告 [GH:advisories]：

- GHSA-p2wg-prhf-jx79 / CVE-2025-57818：malicious webhook SSRF，影响 `<2.0.1`，patched in `2.0.1`；
- GHSA-vjp8-2wgg-p734 / CVE-2024-56800：malicious scrape target SSRF，影响 `<1.1.1`，patched in `1.1.1`。

当前未发现更多 Firecrawl GitHub advisory 不等于安全证明；只能说本次检查中公开 repository advisory 样本为上述两个 SSRF。基于 SSRF 历史和 SELF_HOST.md 的凭据/端口安全提示，本文给出的部署建议是：禁止访问内网/private IP、限制 webhook destination、保护 Bull admin key、不要暴露数据库端口、限制 egress、审查 proxy/headers、对文件 parse 做大小与类型限制、按 release notes 及时升级；其中 private-IP、webhook destination、egress 与文件类型控制是本分析的防御建议，而非文档逐条保证 [Docs:self-host][GH:advisories]。

License 风险也要单列：主仓库是 AGPL-3.0，若将修改版作为网络服务提供，需理解 AGPL 的源码提供义务；npm/PyPI 版本信息不能替代服务端仓库 license 判断 [GH][NPM][PyPI]。

## 学习价值

学习价值很高。Firecrawl 是研究 agent infrastructure 的好样本：它展示了如何把传统 web scraping 包装成 agent-friendly API，包括 endpoint 设计、异步 job、webhook、monitor、LLM-ready markdown、structured extraction、browser interaction、SDK 多语言分发、MCP/CLI onboarding 和 self-host / hosted 边界。

即便不部署，也值得阅读它的 docs、SELF_HOST.md、CLAUDE.md 和 release notes：一者可学 agent web context layer 的产品抽象，二者可学 Web data service 的安全边界。所谓“知其可用，亦知其不可滥用”。