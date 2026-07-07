---
title: "Crawlee"
created: 2026-07-07
updated: 2026-07-07
type: repository-analysis
repo_url: "https://github.com/apify/crawlee"
category: "ai-programs/agent-infrastructure"
tags: [web-scraping, crawler, browser-automation, typescript, nodejs]
previous_repo: ""
successor: ""
primary_language: "TypeScript"
license: "Apache-2.0"
stars: 24532
forks: 1527
last_checked: 2026-07-07
last_verified: 2026-07-07
evidence: "docs + GitHub API + local shallow scan; not deployed or benchmarked"
archived_reason: ""
docker_support: false
gpu_required: false
estimated_cpu: "1-2 cores for small crawls; more for browser concurrency"
estimated_memory: "512MB-4GB depending on crawler/browser count"
estimated_storage: "hundreds of MB plus browser/cache/dataset storage"
status: active
ratings:
  capability: 5
  usability: 4
  performance: 4
  code_quality: 4
  documentation: 4
  community: 4
  maturity: 5
  extensibility: 5
  security: 4
  recommendation: 4
overall_score: 4.3
sources:
  - "[GH] https://github.com/apify/crawlee"
  - "[GH:api] GitHub REST snapshot 2026-07-07: stars=24532, forks=1527, REST open_issues_count=173, Search API open issues=130 and open PRs=38, language=TypeScript, license=Apache-2.0, latest_release=v3.17.0, releases_count observed as 134 in REST pagination check, created_at=2016-08-26, pushed_at=2026-07-06"
  - "[GH:advisory] GitHub repository security-advisories API queried 2026-07-07; returned []"
  - "[GH:local-scan] Local shallow clone /opt/data/tmp/repo-wiki-crawler-batch-2026-07-07/repos/crawlee at commit cd1d13606444eeba5b9621295b7c6aa6a16fee0f dated 2026-07-06; git ls-files=2745, test/spec-ish files=447, workflows=8, Docker-related files=62, docs/governance-ish files=227; checked README.md, package.json and CONTRIBUTING.md"
  - "[Docs] https://crawlee.dev/ extracted 2026-07-07; describes JavaScript and Python crawling libraries, CLI creation flow, Playwright crawler example, blocking/proxy/browser handling"
---

# Crawlee

> Apify 维护的 JS/TS 工业级 web scraping/browser automation 框架：功能完整、工程成熟，是十个 repo 里最接近“长期生产爬虫框架”的选择之一。
>
> **状态**: `active` · **总分**: 4.3/5 · **推荐度**: 4/5

## 一句话总结

Crawlee 适合 Node.js/TypeScript 团队构建长期维护的 crawler，而不是只做一次性网页转 Markdown 的轻脚本。

## 总体评价

它覆盖 HTTP crawling、Cheerio/JSDOM/LinkeDOM、Playwright/Puppeteer、proxy/session、queue/storage、CLI 模板、Apify platform 部署等完整链路 [GH][Docs]。相比若干“AI ready”新项目，Crawlee 的优势是成熟工程和可扩展 crawler 架构；劣势是 Node/TS 生态与框架复杂度，对只会 Python 的用户不如 crawl4ai/Scrapling 顺手。

## 推荐度：4/5

**目标角色**：需要长期运行、可扩展、可测试、可部署的爬虫工程团队。若技术栈接受 TypeScript，Crawlee 是强候选；若目标是“给 LLM 喂 Markdown”，Firecrawl/crawl4ai 可能更短路径。推荐度不给 5 的原因是：大规模反爬仍依赖代理、账号、指纹、浏览器与合规策略，框架本身不是万能解锁器。

## 优势

1. **能力完整**：HTTP 与 real browser crawler 都有，且与 Playwright/Puppeteer 同接口整合 [GH]。
2. **工程成熟**：2016 年创建，release 历史长，本地浅扫显示文件/测试规模都已经是成熟 monorepo 级别 [GH:api][GH:local-scan]。
3. **测试和 monorepo 结构扎实**：本地浅扫有 447 个 test/spec-ish 文件、8 个 workflows [GH:local-scan]。
4. **可扩展性强**：request queue、storage、session/proxy、crawler 类型和模板体系让生产工程可组织。

## 劣势

1. **学习曲线高于“一键数据”工具**：需要理解 crawler lifecycle、request queue、browser crawler、storage 等概念。
2. **Node/TS 技术栈约束**：Python 用户虽可看 Crawlee Python，但此 repo 的主体是 JS/TS。
3. **browser 模式仍吃资源**：Playwright/Puppeteer 并发不是轻量 HTTP client。
4. **open issues 不少**：130 open issues 说明工程面复杂，需要关注升级和兼容性 [GH:api]。

---

## 适合什么场景

- 长期维护的网页采集系统。
- 需要 request queue、重试、session/proxy、browser automation、dataset export 的生产爬虫。
- JS/TS 团队或已经使用 Apify platform 的团队。

## 不适合什么场景

- 一次性抓几个页面、只想几行 Python。
- 对安装体积和学习曲线极敏感的小脚本。
- 期待框架自动绕过所有 CAPTCHA/账号风控的场景。

## 与类似项目对比

| 项目 | 定位 | 相对本项目 |
|------|------|-----------|
| Scrapy | Python 传统工业级爬虫框架 | Scrapy 更轻、更稳定、Python 生态；Crawlee 对 browser automation 与 JS/TS crawler 模板更现代。 |
| crawl4ai | LLM-friendly Python crawler/scraper | crawl4ai 更贴近 Markdown/RAG 输出；Crawlee 更像通用生产 crawler 框架。 |
| Scrapling | Python adaptive scraping + stealth | Scrapling 更强调 selector 适应和 anti-bot；Crawlee 更强调队列、存储、工程化 crawler 生命周期。 |
| Firecrawl | API-first web data infrastructure | Firecrawl 把爬取封成服务/API；Crawlee 是开发者框架。 |

上述项目按 `ai-programs/agent-infrastructure` web-data substrate 做定位级对比，未按同一轮 10 维度深审。

---

## 它能做什么

- 以 Cheerio/JSDOM/LinkeDOM 做轻量 HTML crawling。
- 以 Playwright/Puppeteer 做真实浏览器 crawling。
- 管理 request queue、dataset/storage、retry、session、proxy rotation。
- 通过 CLI 生成模板项目，或部署到 Apify platform [GH][Docs]。

## 运行环境与资源占用

| 场景 | CPU | 内存 | 存储 | 说明 |
|------|-----|------|------|------|
| HTTP/HTML crawler | 1-2 cores | 512MB+ | 项目与数据集空间 | Cheerio 等轻量模式资源效率好。 |
| Browser crawler | 2-8 cores | 2-8GB+ | 浏览器缓存和输出 | 并发 Playwright/Puppeteer 是主要成本。 |

- **运行时**：Node.js 16+；README 示例包含 `npm install crawlee playwright` [GH]。
- **操作系统**：Node/Playwright 支持的主流平台。
- **Docker**：仓库有 Dockerfile/template/e2e 文件，但本轮未验证官方用户向 Docker image；`docker_support` 设为 false。
- **GPU**：不需要。
- **外部依赖**：目标网站、可选代理、浏览器二进制、Apify platform 可选。

## 上手体验

评分 4/5。CLI 模板和文档降低了入门成本；但要写好 crawler 仍需理解异步、队列、浏览器上下文、代理和数据存储，非零学习曲线。

## 代码质量

评分 4/5。TypeScript monorepo、8 个 workflows、447 个 test/spec-ish 文件、vitest/e2e 脚本、贡献规范都说明工程质量较高 [GH:local-scan]。扣分来自规模大、依赖面广，本轮未实际跑 test/benchmark。

## 可扩展性

评分 5/5。crawler 类型、request handler、queue/storage、session/proxy、templates、Apify 平台衔接形成完整扩展面，是其核心强项。

## 文档质量

评分 4/5。官网和 README 提供 quickstart、JS/Python 入口、crawler 示例与指南 [Docs]。对复杂生产问题仍需深入阅读多章节，不是一页说明能掌握。

## 社区与成熟度

| 维度 | 评分 | 说明 |
|------|------|------|
| 社区活跃度 | 4/5 | 24k 星、1.5k fork、issue/PR 活跃，背后有 Apify 维护 [GH:api]。 |
| 成熟度 | 5/5 | 2016 年创建、134 releases、长期维护，属于成熟 crawler framework [GH:api]。 |

## 安全与风险

评分 4/5。GitHub repository advisories 本轮返回空，并不等于无风险；browser automation/proxy/目标站登录态天然有权限与合规风险 [GH:advisory]。相较 crawl4ai，这里未见项目级高危公告，但使用时仍应限制 cookie、账号权限、代理出口和数据落盘。

## 学习价值

很高。若想研究“生产级 crawler 框架应该如何抽象 request queue、autoscaling、browser pool、storage、session/proxy”，Crawlee 是比短平快 scraping 库更值得读的工程样本。