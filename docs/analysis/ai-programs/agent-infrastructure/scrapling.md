---
title: "Scrapling"
created: 2026-07-07
updated: 2026-07-07
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
last_checked: 2026-07-07
last_verified: 2026-07-07
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

Scrapling 在十个 repo 中最像“现代 scraping 工具包”：同一库里有 parser、Fetcher、DynamicFetcher、StealthyFetcher、Spider、ProxyRotator、CLI、MCP 和 Docker image 叙事 [GH][Docs:readme]。它比 AutoScraper 宽得多，比 Scrapy 激进得多；但项目创建于 2024-10，版本仍在 0.x，star 激增与极低 open issue 数并不能直接证明成熟生产质量。

## 推荐度：3/5

**目标角色**：需要 Python 中的 adaptive scraping、stealth/browser fetch、proxy/session 组合能力，且能自行验证目标站成功率与合规边界的开发者。作为试验/候选很值得；作为核心生产依赖应先做真实目标站 benchmark、安全审计和升级策略。

## 优势

1. **现代能力集中**：parser、HTTP fetch、browser fetch、stealth、proxy、spider、CLI/MCP 都在同一项目内 [Docs:readme]。
2. **上手不重**：基本 parser/HTTP 可以较轻安装，browser extras 单独启用 [GH:local-scan]。
3. **测试与类型治理有意识**：本地浅扫 57 个 test/spec-ish 文件，CONTRIBUTING 称约 90-92% coverage 且有 PyRight/MyPy 流程；本轮未复测 [GH:local-scan][Docs:readme]。
4. **文档和多语言 README 友好**：ReadTheDocs、README、示例和 Docker 入口齐全 [GH]。

## 劣势

1. **成熟度有限**：2024 年 10 月创建，latest release 仍是 0.4.x [GH:api]。
2. **安全/合规风险天然高**：stealth、Cloudflare/Turnstile、proxy、browser automation 都属于高敏感能力，误用空间大 [Docs:readme]。
3. **性能 claim 需复测**：README 有 benchmark 表，但本条目未复跑，不能当作独立验证。
4. **社区质量难仅由星数判断**：68k 星但 Used by 规模远低于 Scrapy/Crawlee；需观察长期贡献者和真实 adopters。

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
| Scrapy | 成熟 Python crawler framework | Scrapy 更稳、更传统；Scrapling 更现代、更激进。 |
| Crawlee | JS/TS crawler/browser automation framework | Crawlee 工程成熟度更高；Scrapling 对 Python 用户和 adaptive parser 更友好。 |
| crawl4ai | LLM-friendly web-to-Markdown crawler | crawl4ai 更偏 LLM/RAG 输出；Scrapling 更偏 scraping/anti-bot/toolkit。 |
| AutoScraper | 样例驱动轻量抽取 | AutoScraper 窄而轻；Scrapling 宽而复杂。 |

上述项目按 `ai-programs/agent-infrastructure` web-data substrate 做定位级对比，未按同一轮 10 维度深审。

---

## 它能做什么

- 用 parser/selection API 解析和定位元素。
- 通过 Fetcher 做 HTTP 请求，README 称支持 TLS/header impersonation 与 HTTP/3 [Docs:readme]。
- 通过 DynamicFetcher/StealthyFetcher 使用浏览器自动化处理动态/受保护页面。
- Spider 框架、proxy rotation、session routing、CLI extraction、MCP server。
- Docker image 包含 extras 和浏览器依赖 [Docs:readme]。

## 运行环境与资源占用

| 场景 | CPU | 内存 | 存储 | 说明 |
|------|-----|------|------|------|
| parser-only | 1 core | 数百 MB | 小 | 类似解析库，资源轻。 |
| fetcher/spider | 1-4 cores | 1GB+ | 中 | 取决于并发、代理和输出。 |
| browser stealth | 2+ cores | 2GB+ | 大 | Playwright/Chrome 与 fingerprint 依赖增加成本。 |

- **运行时**：Python >=3.10；browser extras 依赖 Playwright 1.61.0 等 [GH:local-scan]。
- **操作系统**：Python/Playwright 支持平台。
- **Docker**：README 提供 DockerHub/GHCR image 入口，视为官方 Docker support [Docs:readme]。
- **GPU**：不需要。
- **外部依赖**：目标站、代理、浏览器、可选 MCP client。

## 上手体验

评分 4/5。README 示例丰富，parser-only 与 browser extras 分层合理；但 stealth/browser/proxy 组合本身复杂，且真实成功率必须按目标站验证。

## 代码质量

评分 4/5。本地浅扫显示测试、workflow、ruff/tox/pyproject/CONTRIBUTING 齐全；CONTRIBUTING 给出测试运行方式和覆盖率描述 [GH:local-scan][Docs:readme]。由于项目年轻且本轮未复测覆盖率/benchmark，不给 5。

## 可扩展性

评分 4/5。Fetcher、session、spider、proxy、CLI、MCP 形成丰富扩展面。但这些扩展点是否长期稳定仍需观察 1.x 前后的 API 演进。

## 文档质量

评分 4/5。README、ReadTheDocs 链接、多语言文档、示例和 Docker 指南齐全 [GH]。扣分点是营销性 claim 多，读者需区分“项目声称”和“本轮验证”。

## 社区与成熟度

| 维度 | 评分 | 说明 |
|------|------|------|
| 社区活跃度 | 3/5 | 星数极高、issue 很少，但项目年轻，真实长期用户和贡献者多样性仍需观察 [GH:api]。 |
| 成熟度 | 3/5 | 0.4.x，创建不到两年，适合作为 tracking/trial。 |

## 安全与风险

评分 3/5。本轮 GitHub advisory API 返回空，但这只说明未发现发布的 repo-level advisory [GH:advisory]。stealth、proxy、browser automation、Cloudflare/Turnstile 相关能力天然涉及账号、合规和高权限浏览器运行风险；生产使用应隔离 profile、限制 cookie/token、禁止处理敏感账号，并审计目标站 ToS。

## 学习价值

高。Scrapling 展示了 2025-2026 年 scraping 工具如何把 selector 自适应、TLS/browser fingerprint、代理、browser automation、MCP/agent interface 融到一个 Python 库里。它也适合用来训练“不要被反爬宣传语迷惑”的判断力。