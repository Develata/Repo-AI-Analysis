---
title: "Scrapy"
created: 2026-07-07
updated: 2026-09-16
type: repository-analysis
repo_url: "https://github.com/scrapy/scrapy"
category: "ai-programs/agent-infrastructure"
tags: [web-scraping, crawler, python, framework]
previous_repo: ""
successor: ""
primary_language: "Python"
license: "BSD-3-Clause"
stars: 62968
forks: 11773
last_checked: 2026-09-16
last_verified: 2026-09-16
evidence: "docs + GitHub API + local shallow scan; not deployed or benchmarked"
archived_reason: ""
docker_support: false
gpu_required: false
estimated_cpu: "1+ core; scales with concurrency and downloader workload"
estimated_memory: "hundreds of MB for ordinary crawls; more for large queues/items"
estimated_storage: "small framework footprint plus crawl output/cache"
status: active
ratings:
  capability: 4
  usability: 3
  performance: 3
  code_quality: 5
  documentation: 5
  community: 4
  maturity: 5
  extensibility: 5
  security: 4
  recommendation: 4
overall_score: 4.2
sources:
  - "[GH:refresh] https://api.github.com/repos/scrapy/scrapy — checked 2026-09-16 UTC+8: canonical unchanged, archived=false, disabled=false, Python, BSD-3-Clause; separate Search queries open issues=209, open PRs=176. Metadata including default branch/pushed_at, README, LICENSE, SECURITY.md, CONTRIBUTING.md, CODE_OF_CONDUCT.md, pyproject.toml, docs/news.rst and repository tree read through GitHub API. Python >=3.10; SECURITY.md supports 2.19.x only. Prior local scan is historical; no tests/benchmark rerun."
  - "[GH:2.19] https://github.com/scrapy/scrapy/releases/tag/2.19.0 — published 2026-09-10T11:48:30Z, checked 2026-09-16. Adds RemoteControl HTTP extension for inspecting/controlling running crawls, used by Scrapy MCP server; experimental aiohttp download handler is default when running without a reactor. Release links https://docs.scrapy.org/en/latest/topics/agents.html and full news; docs/news.rst fetched from current repository."
  - "[GH:S3-advisory] https://github.com/scrapy/scrapy/security/advisories/GHSA-76g3-c3x4-crvx — checked 2026-09-16 in repository advisories API (12 records): S3DownloadHandler signed requests over plaintext HTTP by default; published 2026-07-07T10:49:02Z, updated 2026-09-01T20:28:38Z, pip scrapy affected <=2.16, patched_versions=2.17. This is patched historical exposure, not evidence 2.19 is vulnerable."
  - "[GH] https://github.com/scrapy/scrapy"
  - "[GH:api] GitHub REST snapshot 2026-07-07: stars=62968, forks=11773, REST open_issues_count=591, Search API open issues=402 and open PRs=189, language=Python, license=BSD-3-Clause, latest_release=2.16.0, created_at=2010-02-22, pushed_at=2026-07-05"
  - "[GH:advisory] GitHub repository security-advisories API queried 2026-07-07; 11 advisories returned, sampled historical advisories include 2026 high arbitrary module import via Referrer-Policy, 2024 medium redirect/proxy/header issues, 2024 high ReDoS in XMLFeedSpider"
  - "[GH:local-scan] Local shallow clone /opt/data/tmp/repo-wiki-crawler-batch-2026-07-07/repos/scrapy at commit dd10cb8e9a982fe3d311078d6e1207596e272717 dated 2026-07-05; git ls-files=633, test/spec-ish files=322, workflows=6, Docker-related files=0, docs/governance-ish files=81; checked README.rst, pyproject.toml, SECURITY.md and INSTALL.md"
  - "[Docs] https://docs.scrapy.org/en/latest/ extracted 2026-07-07; Scrapy 2.16 docs cover first steps, spiders, XPath, items, pipelines, settings, stats, debugging, memory leaks, pause/resume, asyncio, extensions and scheduler"
---

# Scrapy

> Python 老牌 crawling framework；2.19 新增 HTTP 控制扩展与 MCP 接入路径，但核心仍是可编程爬虫，而非自动理解网页的一站式 agent。
>
> **状态**: `active` · **总分**: 4.2/5 · **推荐度**: 4/5

## 一句话总结

Scrapy 适合需要长期维护、可扩展、可调度的 Python 爬虫项目；不适合期待“自动理解网页并给 Markdown”的 LLM-first 快速抽取。

## 总体评价

Scrapy 的强项是长期维护的 crawler 架构：spider、request/response、item/pipeline、middleware、scheduler、settings、stats 与 extensions 有完整的文档组织 [Docs]。这支持其作为传统 HTML/HTTP 底座候选，但不是本轮运行稳定性证明；浏览器和 AI-ready 输出需另行选择扩展并验证。

最新 2.19.0 的 RemoteControl HTTP extension 与 MCP 使用路径，使“Scrapy 与 agent 无关”的旧印象不再准确；experimental aiohttp handler 也改变了无 reactor 场景的默认下载实现。它们是新控制面/运行路径，不代表旧 crawler 自动获得智能抽取或安全隔离 [GH:2.19]。

## 推荐度：4/5

**目标角色**：Python 数据工程师、长期维护 crawler 的团队、需要明确框架边界和丰富扩展点的项目。若目标是生产级 Python 爬虫，Scrapy 仍然值得优先考虑；若目标是绕现代反爬或直接产出 LLM context，则应把它作为底座候选而非一站式方案。

## 优势

1. **长期维护**：2010 年创建，当前 2.19.0；成熟度主要来自传统 crawler 核心，不把新的实验 handler 当作同等成熟 [GH:api][GH:2.19]。
2. **文档完整**：官方 docs 覆盖安装、spider、item、pipeline、settings、extensions、debug、memory leak、pause/resume 等 [Docs]。
3. **测试密度高**：浅扫 633 个 tracked files 中 322 个 test/spec-ish 文件 [GH:local-scan]。
4. **扩展点清楚**：middleware、pipeline、extension、scheduler、signals 是长期工程维护的关键。

## 劣势

1. **新手上手不如轻量库**：需要理解框架模型，而不是几行 requests。
2. **现代浏览器场景不是默认核心**：JS-heavy 网站通常要额外组件。
3. **历史安全公告不少**：旧记录涉及 redirect/header/proxy/XML feed；本轮新增核查 S3 明文签名请求，部署必须跟踪支持版本 [GH:advisory][GH:S3-advisory]。
4. **issue backlog 大**：open issues/PR 多，既说明活跃，也说明维护面庞大 [GH:api]。

---

## 适合什么场景

- Python 长期爬虫项目、周期性采集、数据 pipeline。
- 需要 item pipeline、middleware、scheduler、stats、extension 的工程化采集。
- 不以浏览器自动化为主的高吞吐 HTML/HTTP 抓取。

## 不适合什么场景

- 纯小白一次性抓取。
- 默认需要 Cloudflare/Turnstile 绕过、浏览器指纹伪装、账号自动化的场景。
- 直接输出 LLM-ready Markdown/RAG chunks 的场景。

## 与类似项目对比

| 项目 | 定位 | 相对本项目 |
|------|------|-----------|
| Crawlee | JS/TS crawler/browser automation framework | 与 Scrapy 的 Python crawler 编程模型不同，浏览器路线需按项目另评 |
| crawl4ai | LLM-friendly Python crawler | 偏面向 RAG 的页面输出；Scrapy 偏 spider/pipeline 编排 |
| Scrapling | Python adaptive/stealth scraping | 更突出 adaptive selector/stealth；Scrapy 偏通用 crawler 架构 |
| AutoScraper | 样例驱动规则学习小库 | AutoScraper 轻而窄；Scrapy 是完整框架。 |

以上每行均为未做同等竞品审计的定性定位，不构成性能、稳定性或安全排名；本轮只核验 Scrapy 侧的新版本与支持边界 [GH:refresh][GH:2.19]。

---

## 它能做什么

- 定义 spider 和 crawl rules，调度 requests/responses。
- 用 XPath/CSS 选择器抽取结构化数据。
- 通过 item pipeline 清洗、存储、导出数据。
- 通过 downloader/spider middleware、extensions、signals 定制行为。
- 支持 stats、logging、debugging、pause/resume、asyncio 等高级主题 [Docs]。
- 2.19 的 RemoteControl 通过 HTTP 检查和控制运行中的 crawl，并供 MCP server 使用；无 reactor 时采用新的实验 aiohttp handler。此处为官方 release/文档声明，未运行远程控制或 MCP smoke [GH:2.19]。

## 运行环境与资源占用

下表为工作负载预算的粗略估计，不是实测或官方最低配置；performance 由 4 调为 3，本轮没有传统下载器或新 aiohttp 路径的性能验证，不能以架构路线证明高资源效率。

| 场景 | CPU | 内存 | 存储 | 说明 |
|------|-----|------|------|------|
| 普通 spider | 1+ core | 数百 MB | 小 | 取决于并发、下载器和输出设置。 |
| 大规模 crawl | 多 cores | 1GB+ | 依输出而定 | 队列、缓存、item 输出和并发设置决定资源。 |

- **运行时**：Python >=3.10，Twisted/asyncio 相关依赖 [GH:local-scan]。
- **操作系统**：跨平台。
- **Docker**：项目本身无官方 Docker image 作为核心交付，本条设为 false。
- **GPU**：不需要。
- **外部依赖**：目标网站、可选代理/存储/浏览器扩展。

## 上手体验

评分 3/5。`pip install scrapy` 和 first tutorial 清楚，但掌握 Scrapy 的 mental model 需要时间。它不是“给一个例子自动抽”的工具，而是框架。

## 代码质量

评分 5/5 是基于长期分层架构、测试组织与文档的静态质量评价；历史扫描中的 test/spec-ish 文件比例只是组织证据，不是覆盖率 [GH:local-scan][Docs]。本轮检查 manifest/tree 与发布变更但未运行测试，不能据此断言当前 runtime 无缺陷，亦不作未经同等审计的竞品质量排名 [GH:refresh]。

## 可扩展性

评分 5/5。middleware、pipeline、extensions、scheduler、signals 与 settings 形成成熟扩展体系 [Docs]。

## 文档质量

评分 5/5。Scrapy 文档体系完整，既有 first steps，也有 extensions、scheduler、memory leaks、pause/resume 等生产问题 [Docs]。

## 社区与成熟度

| 维度 | 评分 | 说明 |
|------|------|------|
| 社区活跃度 | 4/5 | 本轮 209 open issues、176 open PRs；相较旧快照有变化，但不能从总量下降推断用户故障已解决 [GH:refresh]。 |
| 成熟度 | 5/5 | 十多年历史，API 与生态沉淀充分。 |

## 安全与风险

评分 4/5，针对更新受支持版本并限制可选控制面的传统 crawler 用法。本轮新增关注 GHSA-76g3-c3x4-crvx：旧 S3DownloadHandler 默认通过明文 HTTP 发送签名请求，API 标记 <=2.16 受影响、2.17 修复；不能把历史公告数量当作 2.19 当前漏洞数 [GH:S3-advisory]。当前 SECURITY.md 只支持 2.19.x，不应停在“2.17 已修复”就停止维护 [GH:refresh]。

RemoteControl 增加了能读取/控制 crawl 的 HTTP 权限面；本轮未验证其认证、绑定或部署隔离，不建议公开暴露，应在启用前单独检查配置、访问控制和敏感数据输出 [GH:2.19]。目标站内容、代理、redirect/header、feed parsing 与 S3 credentials 仍需按不可信输入处理。

## 学习价值

极高。Scrapy 是学习 crawler framework architecture 的经典材料：调度、下载、解析、pipeline、middleware、extension 的分层非常清楚。即便不用它，也值得读其架构。