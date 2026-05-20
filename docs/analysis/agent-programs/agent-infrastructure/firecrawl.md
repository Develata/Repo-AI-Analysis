---
title: "Firecrawl"
created: 2026-05-20
updated: 2026-05-20
type: repository-analysis
repo_url: "https://github.com/firecrawl/firecrawl"
category: "agent-programs/agent-infrastructure"
tags: ["agent-infrastructure", "web-data", "scraping", "crawler", "search", "mcp", "sdk", "agents", "typescript", "self-hosted"]
previous_repo: ""
successor: ""
primary_language: "TypeScript"
license: "AGPL-3.0"
stars: 122041
forks: 7419
last_checked: 2026-05-20
last_verified: 2026-05-20
evidence: "GitHub API + official docs + npm/PyPI package metadata + repository local scan; not deployed in production by Develata"
archived_reason: ""
docker_support: true
gpu_required: false
estimated_cpu: "hosted API requires no local CPU; self-hosted API/workers/Redis/Postgres/Playwright normally need at least a small multi-core server and scale with crawl concurrency"
estimated_memory: "hosted API client is light; self-hosted Docker/Playwright/browser workloads should budget several GB and increase with concurrent pages"
estimated_storage: "small for SDK/CLI packages; self-hosted queues, PostgreSQL state, logs and crawled outputs grow with job volume"
status: active
sharing_candidate: true
ratings:
  capability: 5
  usability: 4
  performance: 4
  code_quality: 4
  documentation: 5
  community: 4
  maturity: 3
  extensibility: 4
  security: 3
  recommendation: 4
overall_score: 4.0
sources:
  - "[GH] https://github.com/firecrawl/firecrawl"
  - "[GH:api] https://api.github.com/repos/firecrawl/firecrawl queried 2026-05-20; stars=122041, forks=7419, open_issues_count=328, created_at=2024-04-15, pushed_at=2026-05-20, default_branch=main, license=AGPL-3.0, topics include ai-agents/ai-scraping/web-crawler/web-data-extraction"
  - "[GH:issues] GitHub Search API queried 2026-05-20; open issues=75, open PRs=253, closed issues=799, closed PRs=2341 for repo:firecrawl/firecrawl; repo open_issues_count from [GH:api] includes issues plus PRs"
  - "[GH:languages] https://api.github.com/repos/firecrawl/firecrawl/languages queried 2026-05-20; TypeScript=4664591, Python=1192854, Rust=363435, Java=227978, PHP=120099, Elixir=114465, C#=98503, Go=91806, Ruby=77028, plus smaller docs/service languages"
  - "[GH:release] https://api.github.com/repos/firecrawl/firecrawl/releases/latest queried 2026-05-20; latest release v2.10 published 2026-05-15; release notes include /parse endpoint, lockdown mode, question/highlights/video formats, search feedback and SDK/API updates"
  - "[GH:contributors] https://api.github.com/repos/firecrawl/firecrawl/contributors?per_page=100 queried 2026-05-20; first page contributors=100; top entries include nickscamara=1865, mogery=1500, rafaelsideguide=589, abimaelmartell=207"
  - "[GH:community] https://api.github.com/repos/firecrawl/firecrawl/community/profile queried 2026-05-20; health_percentage=62; README, CONTRIBUTING and LICENSE detected; CODE_OF_CONDUCT, issue template and PR template not detected by community API"
  - "[GHSA:ssrf] https://github.com/firecrawl/firecrawl/security/advisories/GHSA-p2wg-prhf-jx79 and GitHub API queried 2026-05-20; as of this check GitHub advisory reports CVE-2025-57818 high SSRF via malicious webhook, affected firecrawl <2.0.1, patched 2.0.1, published 2025-08-26"
  - "[GH:local-scan] Local clone /tmp/repo-wiki-batch4/firecrawl at commit 2f407eba8c7c280d1c26238e9924181f3956ed76 dated 2026-05-19; shallow clone git rev-list count=1; files excluding .git=1381; package.json files=9, pyproject.toml=1, Cargo.toml=2, go.mod=3, Dockerfile=5, docker-compose files=2, test/spec-ish matches=234; checked README.md, SELF_HOST.md, CONTRIBUTING.md, CLAUDE.md, LICENSE, apps/api/package.json, apps/python-sdk/pyproject.toml"
  - "[Docs:intro] https://docs.firecrawl.dev/introduction extracted 2026-05-20; describes Search, Scrape, Interact, Agent, Browser Sandbox, Map and Crawl; recommends npx -y firecrawl-cli@latest init --all --browser for AI-agent onboarding"
  - "[Docs:scrape] https://docs.firecrawl.dev/features/scrape extracted 2026-05-20; /scrape supports markdown/html/rawHtml/screenshots/links/images/json/branding/audio/video/query/question/highlights and schema/prompt JSON extraction"
  - "[Docs:llms] https://docs.firecrawl.dev/llms.txt extracted 2026-05-20; docs index covers API Reference v2, scraping/crawling/search/map/parse/browser sessions/webhooks/errors, AI-agent guides, MCP setup, lockdown/cache-only mode and OpenAPI specs"
  - "[Docs:self-host] Local SELF_HOST.md checked 2026-05-20; self-hosting uses Docker Compose with API, workers, Redis/PostgreSQL/Playwright-related services, optional OpenAI/Ollama/proxy/SearXNG/Supabase/LlamaParse config; notes self-hosted instances lack Fire-engine advanced handling for IP blocks/robot detection"
  - "[NPM] npm view queried 2026-05-20; @mendable/firecrawl-js=4.24.2 MIT unpackedSize=758800; firecrawl-cli=1.18.0 ISC unpackedSize=1027737"
  - "[PyPI] pip index queried 2026-05-20; firecrawl-py latest=4.27.1 with long release history; local apps/python-sdk/pyproject.toml declares Python SDK for Firecrawl API, requires Python >=3.8 and dependencies requests/httpx/pydantic/aiohttp/websockets"
---

# Firecrawl

> 面向 AI agents 的 Web data infrastructure：把 search / scrape / crawl / interact / parse 等网页获取与清洗能力包装成 API、CLI、SDK、MCP 与可自托管服务。
>
> **状态**: `active` · **总分**: 4.0/5 · **推荐度**: 4/5
> **核验版本**: GitHub commit `2f407eba8c7c280d1c26238e9924181f3956ed76`；GitHub API / Docs / npm / PyPI 快照 2026-05-20

## 一句话总结

Firecrawl 是典型的 Agent Infrastructure：它给 agent 提供“从真实 Web 获取、清洗、结构化并回传 LLM-ready context”的网页数据层，而不是一个普通爬虫 demo。

## 总体评价

Firecrawl 应归入 `agent-programs/agent-infrastructure`。它解决的是 agent 自主运行中的一个基础 primitive：**web data acquisition**。对 agent 来说，浏览网页不是“HTTP get 一下”这么简单，而是要处理搜索、动态页面、JS-heavy 内容、截图、链接发现、站点 crawl、batch scrape、结构化 JSON、文件 parse、browser interaction、webhook 与错误重试等工程细节 [Docs:intro][Docs:scrape][Docs:llms]。

它和 Context7、CodeGraph、CLI-Anything 同属 agent infrastructure，但子层不同：Context7 是 external documentation grounding，CodeGraph 是 local codebase context cache，CLI-Anything 是 tool-access harness，Firecrawl 则是 **web context ingestion layer**。若 agent 要回答“现在网上有什么事实”、构建 research agent、监控竞品/SEO/电商/新闻页面，Firecrawl 处在事实入口处。

需要注意 repo/product 边界：Firecrawl 同时是开源仓库和商业 hosted API。README 中的可靠性、速度和覆盖率主张主要面向产品/云服务；self-host 文档明确说明自托管实例目前没有 Fire-engine，高级 IP-block/robot-detection 等能力与云服务存在差距 [GH][Docs:self-host]。因此本分析把 hosted API 的能力和开源自托管能力分开看。

## 推荐度：4/5

**定位**：面向需要给 agents / LLM apps 接入网页搜索、抓取、crawl、网页交互和结构化抽取能力的开发者、agent-infra 构建者与数据工作流团队。

推荐度 4/5。给 4 的理由是：Firecrawl 命中 agent 真实刚需，API/CLI/SDK/MCP/自托管入口齐全，文档非常完整，语言 SDK 覆盖广，社区和维护活跃 [Docs:llms][NPM][PyPI][GH:contributors]。不给 5 的理由也很明确：Web scraping 本身就是高攻击面和高运维复杂度领域；self-host 与 hosted 能力不完全等价；仓库创建于 2024-04，v2 仍快速演进；且已有高危 SSRF advisory，说明 webhook / outbound request / browser automation 这类边界必须谨慎治理 [Docs:self-host][GHSA:ssrf]。

## 优势

1. **能力面很完整**：search、scrape、interact、agent、crawl、map、batch scrape、parse、structured JSON、screenshots、links、media、webhooks 等形成完整 web-data surface [GH][Docs:intro][Docs:scrape][Docs:llms]。
2. **agent-first 设计明显**：README 直接定位为“Search, scrape, and clean the web for AI agents”，docs 提供 AI-agent onboarding、MCP setup、CLI 初始化和多语言 SDK [GH][Docs:intro][Docs:llms]。
3. **SDK 覆盖广**：本地扫描显示 JavaScript、Python、Rust、Go、Java、PHP、Elixir、C#、Ruby 等 SDK/语言代码并存，v2.10 release 也提到多语言 SDK 覆盖 [GH:languages][GH:release][GH:local-scan]。
4. **文档优秀**：官方 docs 有 `llms.txt`，覆盖 API Reference v2、OpenAPI specs、webhooks、errors、use cases、developer guides、lockdown mode、browser sessions 等 [Docs:llms]。
5. **社区热度和维护强**：API 快照显示 122k+ stars、7.4k+ forks；contributors first page 为 100 人，近期 release 与 push 都很活跃 [GH:api][GH:contributors][GH:release]。

## 劣势

1. **self-host 与 hosted 有能力差距**：SELF_HOST.md 明确写出 self-hosted instances 当前没有 Fire-engine，因此高级 IP blocks、robot detection 等复杂场景可能需要额外配置或不受支持 [Docs:self-host]。
2. **安全攻击面大**：webhook、outbound URL、proxy、browser automation、HTML/markdown conversion、file parsing、credentials 与 internal network 边界都会带来 SSRF/XSS/数据外泄风险；项目已有高危 SSRF advisory [GHSA:ssrf]。
3. **AGPL 对商业使用有约束**：主仓库 license 是 AGPL-3.0；SDK 包可能是 MIT/ISC，但服务端自托管与修改分发要按 AGPL 理解 [GH:api][NPM][GH:local-scan]。
4. **项目仍年轻且高速迭代**：仓库创建于 2024-04，latest release 是 2026-05 的 v2.10；功能扩展快，但也意味着 API/部署/SDK 迁移需要关注 release notes [GH:api][GH:release]。
5. **开源贡献治理不满格**：community profile 为 62，未检测到 CODE_OF_CONDUCT、issue template、PR template；高 star 不等于治理成熟 [GH:community]。

---

## 适合什么场景

- Research agent、market intelligence agent、SEO/竞品监控、新闻/电商/金融页面采集。
- LLM 应用需要把网页转成 clean Markdown、HTML、structured JSON、截图、links、images 或 query/highlights 等格式 [Docs:scrape]。
- 需要通过 MCP / CLI / SDK 给 coding agent 或 workflow agent 接入 Web context。
- 对 hosted API 可接受，希望把代理、反爬、动态页面、browser execution 和队列细节外包给服务商的团队。
- 需要自托管基础 scraper/crawler，并愿意接受 self-host 与云服务能力差距、自己维护 Redis/PostgreSQL/Playwright/worker 的团队 [Docs:self-host]。

## 不适合什么场景

- 需要完全离线、无外部网络依赖、无第三方云服务的高敏数据环境，除非只用并审计自托管路径。
- 需要保证复杂反爬/robot detection/IP-block 处理能力与 Firecrawl cloud 完全等价的自托管场景；官方 self-host 文档已经提示缺口 [Docs:self-host]。
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

上述项目按 `agent-programs/agent-infrastructure` 同类范围做定位级对比，未按同一 10 维度框架深审。

## 个人主页 sharing 候选

是。Firecrawl 很适合做 sharing 候选：它把“agent 如何接入真实 Web”这个抽象问题落成具体 API 设计，能自然串起 web search、browser automation、MCP、LLM-ready markdown、structured extraction、self-host vs hosted、SSRF 防护与 agent infrastructure taxonomy。

---

## 它能做什么

能力评分 5/5。

- **Search**：搜索 Web，并返回页面结果及内容入口 [Docs:intro]。
- **Scrape**：单 URL 转 Markdown、HTML、raw HTML、截图、links、images、structured JSON、branding、audio/video、question/highlights 等 [Docs:scrape]。
- **Interact**：基于 scrape session 执行 click、scroll、write、wait、press 或自然语言交互 [GH][Docs:intro]。
- **Crawl / Map / Batch Scrape**：站点 URL 发现、批量抓取和异步 crawl 状态查询 [Docs:llms]。
- **Parse**：v2.10 增加 `/parse`，处理 PDF、DOCX、XLSX、HTML 等本地文件并输出 Markdown/JSON/summary [GH:release]。
- **Agent / MCP / CLI / SDK**：通过 `firecrawl-cli`、多语言 SDK、MCP 与 REST API 接入 agent workflow [Docs:intro][Docs:llms][NPM][PyPI]。
- **Self-host**：Docker Compose 可跑 API、workers、Redis/PostgreSQL/Playwright 相关服务；也可配置 OpenAI/Ollama、proxy、SearXNG、LlamaParse 等 [Docs:self-host]。

能力给 5 是因为 product/API surface 覆盖 Web context ingestion 的主要场景；但这不是说所有能力在 self-host 下都与云服务等价，self-host parity 不由这个分数保证。

## 运行环境与资源占用

| 场景 | CPU | 内存 | 存储 | 说明 |
|------|-----|------|------|------|
| Hosted API client | 很低 | 很低 | 很小 | 本地只运行 SDK/CLI，请求发往 Firecrawl API；资源主要在云端 [NPM][PyPI] |
| Self-host 最小 | 小型多核 | 数 GB 起 | 中等 | Docker Compose 运行 API、workers、Redis/PostgreSQL 和 Playwright 相关服务 [Docs:self-host] |
| 高并发 crawl | 随并发增长 | 随浏览器/队列增长 | 随日志、队列、结果增长 | 动态页面、截图、文件 parse、批量 crawl 会显著增加 CPU/RAM/IO 与外部网络成本 |

- **Docker**：官方仓库提供 `docker-compose.yaml` 和多个 Dockerfile [GH:local-scan]。
- **GPU**：不需要 GPU；AI features 依赖 OpenAI/Ollama/OpenAI-compatible API 等模型服务时，模型端资源另算 [Docs:self-host]。
- **性能评分 4/5**：这个 4 主要针对 hosted/API product surface 与轻量 client 侧资源占用；产品 release 和 README 强调低延迟与大规模处理。但自托管 crawler/browser workload 的资源效率高度依赖并发、页面复杂度和代理/浏览器配置，本次未做本地 benchmark，不能把该分数解读为 OSS self-host 性能已被验证。

## 上手体验

评分 4/5。

Hosted 路径非常顺：注册 API key，按 Python/Node/cURL/CLI 示例调用 search/scrape/interact；docs 还推荐 `npx -y firecrawl-cli@latest init --all --browser` 来为 AI agents 初始化 [Docs:intro][NPM]。`/scrape` 文档也给了 schema / prompt 两种 JSON extraction 示例 [Docs:scrape]。

扣一分来自两处：第一，self-host 不是零配置，涉及 Docker、环境变量、Redis/PostgreSQL、Bull admin key、Playwright、proxy、SearXNG、可选 LLM keys 等；第二，Firecrawl 的功能面很宽，新用户需要理解 endpoint、format、crawl/batch lifecycle、webhook、rate limit 和安全边界 [Docs:self-host][Docs:llms]。

## 代码质量

评分 4/5。

本地扫描显示 Firecrawl 是多语言 monorepo：9 个 package.json、1 个 Python SDK pyproject、2 个 Cargo.toml、3 个 go.mod、5 个 Dockerfile、2 个 docker-compose 文件，以及大量 test/spec-ish 文件和 CI workflow。`apps/api/package.json` 有 build、Jest、snips/e2e、harness、worker、production start 等脚本；CLAUDE.md 也明确要求 API 改动优先写 E2E/snips，并用 `pnpm harness jest ...` 跑相关测试 [GH:local-scan]。

不给 5 的原因是：仓库同时维护 API、workers、多语言 SDK、browser/HTML conversion services 和示例，复杂度很高；本次没有完整运行测试，也没有审计覆盖率。代码质量证据足以支持“良好”，但不足以证明“极佳且覆盖率 ≥80%”。

## 可扩展性

评分 4/5。

Firecrawl 的扩展面主要体现在：REST API、CLI、多语言 SDK、MCP/agent onboarding、webhooks、OpenAPI specs、自托管环境变量和可替换的 proxy/search/LLM/file-parse 服务 [Docs:llms][Docs:self-host][NPM][PyPI]。这对把 Web data 接到不同 agent framework 很友好。

不给 5 的原因是：它不是插件平台，深度定制复杂抓取策略、Fire-engine 能力或云端调度能力时可能需要 fork、企业能力或外部服务；self-host 文档也说明高级反爬能力不完整 [Docs:self-host]。

## 文档质量

评分 5/5。

文档是 Firecrawl 的强项。`llms.txt` 提供机器可读文档索引；docs 覆盖 introduction、core endpoints、API Reference v2、webhooks、errors、OpenAPI specs、developer guides、MCP setup、AI-agent onboarding、browser sessions、lockdown/cache-only mode、use cases 和 dashboard 等 [Docs:llms]。README 也给出 Python/Node/cURL/CLI 多入口示例 [GH]。

唯一要注意的是：文档中有些能力属于 hosted product 或较新 release，实际自托管可用性要结合 SELF_HOST.md 与 release notes 判断，不能把 docs 的产品面能力全部自动等同于 OSS local stack [Docs:self-host][GH:release]。

## 社区与成熟度

社区评分 4/5，成熟度评分 3/5。

社区活跃度很强：GitHub API 快照显示 122041 stars、7419 forks；contributors first page 已满 100 人；Search API 显示 open issues=75、open PRs=253、closed issues=799、closed PRs=2341；latest release v2.10 发布于 2026-05-15，说明维护和发布都很活跃 [GH:api][GH:issues][GH:contributors][GH:release]。因此 community=4 主要反映 adoption/activity，而不是 governance quality。

但 community 不给 5，因为 GitHub community profile 为 62，未检测到 code of conduct、issue template、PR template；此外项目背后有明显商业 hosted product，开放治理不应因 star 数自动满分 [GH:community]。

成熟度给 3：仓库创建于 2024-04，v2 系列已经成型，但仍在快速添加 `/parse`、lockdown、question/highlights/video、search feedback、API deprecation 等功能；这更像高速成长的基础设施，而不是长期稳定、破坏性变更罕见的成熟系统 [GH:api][GH:release]。

## 安全与风险

评分 3/5。

Firecrawl 的安全风险来自业务本质：它主动访问用户指定 URL、解析不可信 HTML/文件、执行浏览器交互、发送 webhook、可能带自定义 headers/proxy，并可能运行在带内网访问能力的自托管环境。截至 2026-05-20 检查，GitHub Security Advisory 报告 CVE-2025-57818：高危 SSRF via malicious webhook，影响 `<2.0.1`，patched in `2.0.1`；advisory 建议不能升级时把 Firecrawl 与敏感内部系统隔离 [GHSA:ssrf]。

当前未发现更多 Firecrawl GitHub advisory 不等于安全证明；只能说本次检查中公开 advisory 样本为上述 SSRF。对生产使用，尤其是 self-host，建议至少做到：禁止访问内网/private IP、限制 webhook destination、保护 Bull admin key、不要暴露数据库端口、限制 egress、审查 proxy/headers、对文件 parse 做大小与类型限制、按 release notes 及时升级 [Docs:self-host][GHSA:ssrf]。

License 风险也要单列：主仓库是 AGPL-3.0，若将修改版作为网络服务提供，需理解 AGPL 的源码提供义务；SDK 包虽有 MIT/ISC，但不能替代服务端仓库 license 判断 [GH:api][NPM]。

## 学习价值

学习价值很高。Firecrawl 是研究 agent infrastructure 的好样本：它展示了如何把传统 web scraping 包装成 agent-friendly API，包括 endpoint 设计、异步 job、webhook、LLM-ready markdown、structured extraction、browser interaction、SDK 多语言分发、MCP/CLI onboarding 和 self-host / hosted 边界。

即便不部署，也值得阅读它的 docs、SELF_HOST.md、CLAUDE.md 和 release notes：一者可学 agent web context layer 的产品抽象，二者可学 Web data service 的安全边界。所谓“知其可用，亦知其不可滥用”。
