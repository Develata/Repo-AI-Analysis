---
title: "Scrapling"
created: 2026-07-07
updated: 2026-09-16
type: repository-analysis
repo_url: "https://github.com/D4Vinci/Scrapling"
category: "ai-programs/agent-infrastructure"
tags: [web-scraping, crawler, anti-bot, python, adaptive-scraping]
previous_repo: ""
successor: ""
primary_language: "Python"
license: "BSD-3-Clause"
stars: 68399
forks: 6775
last_checked: 2026-09-16
last_verified: 2026-09-16
evidence: "docs + GitHub API + local shallow scan; not deployed or benchmarked"
archived_reason: ""
docker_support: true
gpu_required: false
estimated_cpu: "1-2 cores for parser/HTTP; more for browser stealth sessions"
estimated_memory: "hundreds of MB parser-only; 2GB+ with browser extras"
estimated_storage: "package plus optional browser/Docker image footprint"
status: active
ratings:
  capability: 4
  usability: 4
  performance: 3
  code_quality: 4
  documentation: 4
  community: 3
  maturity: 3
  extensibility: 4
  security: 3
  recommendation: 3
overall_score: 3.5
sources:
  - "[GH:refresh] https://api.github.com/repos/D4Vinci/Scrapling — checked 2026-09-16 UTC+8: canonical unchanged, archived=false, disabled=false, main, pushed_at=2026-09-14T19:47:52Z, Python, BSD-3-Clause; separate Search queries open issues=2, open PRs=4; security-advisories=[] (negative lookup only). Current README, LICENSE, pyproject.toml, CONTRIBUTING.md, CODE_OF_CONDUCT.md, CHANGELOG.md and repository tree fetched through GitHub API. Earlier local scan is historical; no tests or benchmark rerun."
  - "[GH:release-current] https://github.com/D4Vinci/Scrapling/releases/tag/v0.4.15 — published 2026-08-23T19:43:24Z, checked 2026-09-16: breaking MCP redesign (13 tools; get renamed make_request; persistent HTTP and browser sessions), localhost default/authentication requirement for HTTP transport; --auth-token or SCRAPLING_MCP_AUTH_TOKEN, explicit --no-auth opt-out; Response.markdown(), SiteToMarkdownSpider, reusable browser tabs and close_pages(). v0.4.13 notes unpin Playwright/Patchright and introduce AI_POLICY.md; v0.4.14 fixes uv prerelease dependency resolution. Security/auth change references #413/#414; browser and selector fixes reference #411/#422/#410/#417."
  - "[GH] https://github.com/D4Vinci/Scrapling"
  - "[GH:api] GitHub REST snapshot 2026-07-07: stars=68399, forks=6775, REST open_issues_count=2, Search API open issues=1 and open PRs=1, language=Python, license=BSD-3-Clause, latest_release=v0.4.10, created_at=2024-10-13, pushed_at=2026-07-06"
  - "[GH:advisory] GitHub repository security-advisories API queried 2026-07-07; returned []"
  - "[GH:local-scan] Local shallow clone /opt/data/tmp/repo-wiki-crawler-batch-2026-07-07/repos/Scrapling at commit c955c0bd9215c07e73921b78999dbfa518e6bcf1 dated 2026-07-06; git ls-files=241, test/spec-ish files=57, workflows=4, Docker-related files=1, docs/governance-ish files=60; checked README.md, pyproject.toml and CONTRIBUTING.md"
  - "[Docs:readme] README local scan 2026-07-07: claims adaptive element relocation, Fetcher/DynamicFetcher/StealthyFetcher, Cloudflare/Turnstile/stealth/anti-bot behavior, proxy rotation, MCP, CLI, Docker image, parser benchmarks and 90-92% coverage in CONTRIBUTING; anti-bot success rate, benchmark and coverage were not independently rerun"
---

# Scrapling

> 现代 Python scraping framework，主打 adaptive selector、stealth fetcher、proxy/session 和 browser automation；能力很诱人，但仍属年轻且高权限/高合规风险工具。
>
> **状态**: `active` · **总分**: 3.5/5 · **推荐度**: 3/5

## 一句话总结

Scrapling 适合愿意试用现代反爬/自适应抽取能力的 Python 爬虫开发者；不适合把 README 的“bypass anti-bot”当作生产保证。

## 总体评价

Scrapling 把 parser、HTTP/browser fetch、proxy、spider、CLI/MCP 集中在 Python 工具包内。最新 v0.4.15 已加入直接 Markdown/RAG 输出、持久会话和浏览器 tab 复用，并对 MCP 工具及 HTTP 鉴权做了破坏性变更；不能因版本号只是 patch 就视为无迁移成本 [GH:release-current]。功能广度维持 4/5，生产采用仍需按目标站与权限边界验证。

## 推荐度：3/5

**目标角色**：需要 Python 中的 adaptive scraping、stealth/browser fetch、proxy/session 组合能力，且能自行验证目标站成功率与合规边界的开发者。作为试验/候选很值得；作为核心生产依赖应先做真实目标站 benchmark、安全审计和升级策略。

## 优势

1. **现代能力集中**：parser、HTTP fetch、browser fetch、stealth、proxy、spider、CLI/MCP 都在同一项目内 [Docs:readme]。
2. **安装分层**：当前 README 区分 parser 与 fetchers/AI/RAG 等 extras；浏览器组件按需安装。这是依赖组织说明，不是本轮安装耗时测试 [GH:refresh]。
3. **测试与类型治理有意识**：本地浅扫 57 个 test/spec-ish 文件，CONTRIBUTING 称约 90-92% coverage 且有 PyRight/MyPy 流程；本轮未复测 [GH:local-scan][Docs:readme]。
4. **文档和多语言 README 友好**：ReadTheDocs、README、示例和 Docker 入口齐全 [GH]。

## 劣势

1. **成熟度有限**：2024 年 10 月创建，latest release 仍是 0.4.x [GH:api]。
2. **安全/合规风险天然高**：stealth、Cloudflare/Turnstile、proxy、browser automation 都属于高敏感能力，误用空间大 [Docs:readme]。
3. **性能 claim 需复测**：README 有 benchmark 表，但本条目未复跑，不能当作独立验证。
4. **升级接口不稳**：MCP 工具改名、会话配置重分工、HTTP 默认鉴权和 AI 贡献披露政策都需要调用方/贡献者适配，低 backlog 不能证明成熟生产质量 [GH:refresh][GH:release-current]。

---

## 适合什么场景

- Python 项目中需要 selector 自适应、HTTP/browser 混合抓取。
- 对反爬有研究/测试需求的受控环境。
- 需要快速试验 proxy rotation、stealth fetcher、MCP/CLI scraping 能力。

## 不适合什么场景

- 法务/合规边界不清的公开网站大规模绕过。
- 需要十年级别稳定 API 的保守生产系统。
- 只需传统 HTML 抽取；Scrapy/Parsel/BeautifulSoup 足矣。

## 与类似项目对比

| 项目 | 定位 | 相对本项目 |
|------|------|-----------|
| Scrapy | Python crawler framework | 以 spider/pipeline 架构为中心；Scrapling 更强调 adaptive selector 与 stealth |
| Crawlee | JS/TS crawler/browser automation framework | 语言与生态路线不同；Scrapling 提供 Python 内的 parser/fetcher 组合 |
| crawl4ai | LLM-friendly web-to-Markdown crawler | 两者在 Markdown/RAG 输出上已有交集；Scrapling 仍以 selector、fetcher 与 scraping toolkit 为核心 [GH:release-current]。 |
| AutoScraper | 样例驱动轻量抽取 | AutoScraper 窄而轻；Scrapling 宽而复杂。 |

以上每行均为未做同等竞品审计的定性定位，不构成性能、成熟度或安全排名；本轮主要核验 Scrapling 侧的新接口与安全边界 [GH:refresh][GH:release-current]。

---

## 它能做什么

- 用 parser/selection API 解析和定位元素。
- 通过 Fetcher 做 HTTP 请求，README 称支持 TLS/header impersonation 与 HTTP/3 [Docs:readme]。
- 通过 DynamicFetcher/StealthyFetcher 使用浏览器自动化处理动态/受保护页面。
- Spider 框架、proxy rotation、session routing、CLI extraction、MCP server。
- Docker image 包含 extras 和浏览器依赖 [Docs:readme]。
- v0.4.15 的 `Response.markdown()` 和 `SiteToMarkdownSpider` 面向页面清洗与 RAG 语料；MCP 将 one-shot 与 session tools 分开，`get` 改为 `make_request`，并加入 HTTP 会话工具。此处是 release 声明，未做 MCP runtime smoke [GH:release-current]。

## 运行环境与资源占用

下表是按 parser/HTTP/browser 工作负载作的粗略预算估计，不是测量结果或官方最低配置；performance 3/5 保留未实测的不确定性。

| 场景 | CPU | 内存 | 存储 | 说明 |
|------|-----|------|------|------|
| parser-only | 1 core | 数百 MB | 小 | 类似解析库，资源轻。 |
| fetcher/spider | 1-4 cores | 1GB+ | 中 | 取决于并发、代理和输出。 |
| browser stealth | 2+ cores | 2GB+ | 大 | Playwright/Chrome 与 fingerprint 依赖增加成本。 |

- **运行时**：Python >=3.10；v0.4.13 已取消 Playwright/Patchright 和浏览器版本固定，升级后需按 release 指引刷新浏览器，不应沿用旧分析中的 Playwright 1.61.0 锁定假设 [GH:refresh][GH:release-current]。
- **操作系统**：Python/Playwright 支持平台。
- **Docker**：README 提供 DockerHub/GHCR image 入口，视为官方 Docker support [Docs:readme]。
- **GPU**：不需要。
- **外部依赖**：目标站、代理、浏览器、可选 MCP client。

## 上手体验

评分 4/5。README 示例和分层 extras 降低入口成本，但 MCP 旧配置必须按 v0.4.15 迁移。v0.4.14 还专门修复 uv 因 prerelease 依赖回退旧版本的问题；安装成功后应核对实际版本 [GH:release-current]。

## 代码质量

评分 4/5。本地浅扫显示测试、workflow、ruff/tox/pyproject/CONTRIBUTING 齐全；CONTRIBUTING 给出测试运行方式和覆盖率描述 [GH:local-scan][Docs:readme]。由于项目年轻且本轮未复测覆盖率/benchmark，不给 5。

## 可扩展性

评分 4/5。Fetcher、session、spider、proxy、CLI、MCP 形成丰富扩展面；新增 Markdown spider 和持久 HTTP 会话扩展用途，但 v0.4.15 的 MCP breaking changes 是接口不稳定的直接证据 [GH:release-current]。

## 文档质量

评分 4/5。README、ReadTheDocs 链接、多语言文档、示例和 Docker 指南齐全 [GH]。扣分点是营销性 claim 多，读者需区分“项目声称”和“本轮验证”。

## 社区与成熟度

| 维度 | 评分 | 说明 |
|------|------|------|
| 社区活跃度 | 3/5 | 星数极高、issue 很少，但项目年轻，真实长期用户和贡献者多样性仍需观察 [GH:api]。 |
| 成熟度 | 3/5 | 0.4.x，创建不到两年，适合作为 tracking/trial。 |

## 安全与风险

评分 3/5。本轮 repository advisories 为空，只是该接口未发现公告 [GH:refresh]。v0.4.15 的 HTTP transport 默认绑定 localhost 并要求配置认证，显式 `--no-auth` 才放弃认证；不要把它理解成自动生成安全 token，或把 `--host 0.0.0.0` 当作普通便利选项 [GH:release-current]。清除隐藏 HTML 内容不等于消除 prompt injection；持久浏览器/HTTP 会话会保留敏感状态。应隔离 cookie/profile、限制网络与目标域、按需关闭 tabs，并独立核对目标站使用条款。

## 学习价值

高。Scrapling 展示了 2025-2026 年 scraping 工具如何把 selector 自适应、TLS/browser fingerprint、代理、browser automation、MCP/agent interface 融到一个 Python 库里。它也适合用来训练“不要被反爬宣传语迷惑”的判断力。