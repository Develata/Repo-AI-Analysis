---
title: "Crawlee"
created: 2026-07-07
updated: 2026-09-10
type: repository-analysis
repo_url: "https://github.com/apify/crawlee"
category: "ai-programs/agent-infrastructure"
tags: [web-scraping, crawler, browser-automation, typescript, nodejs]
previous_repo: ""
successor: ""
primary_language: "TypeScript"
license: "Apache-2.0"
stars: 25707
forks: 1658
last_checked: 2026-09-10
last_verified: 2026-09-10
evidence: "GitHub metadata/releases/advisories, README/manifests and official v4 migration guide static review 2026-09-10; stable v3 and prerelease v4 explicitly separated; no crawl/test/benchmark or migration execution"
archived_reason: ""
docker_support: false
gpu_required: false
estimated_cpu: "HTTP mode lighter; browser concurrency dominates"
estimated_memory: "crawler pools and browser workloads dominate; not measured"
estimated_storage: "dependencies, browser binaries and crawler datasets/queues/cache"
status: active
ratings:
  capability: 5
  usability: 4
  performance: 4
  code_quality: 4
  documentation: 4
  community: 4
  maturity: 4
  extensibility: 5
  security: 3
  recommendation: 4
overall_score: 4.1
sources:
  - "[GH:api] https://api.github.com/repos/apify/crawlee checked 2026-09-10 UTC+8: canonical unchanged, archived=false, disabled=false, branch=master, pushed_at=2026-09-09T16:36:13Z, TypeScript, Apache-2.0, stars=25707, forks=1658, created_at=2016-08-26; separate search open issues=96, open PRs=44"
  - "[GH:release] https://api.github.com/repos/apify/crawlee/releases/latest and releases?per_page=10 checked 2026-09-10: latest stable=v3.18.1 published 2026-08-12T15:39:11Z, prerelease=false; v4.0.0-rc.0 published 2026-08-13 is prerelease, not stable. v3.18.0 release notes add typed router/schema validation and Puppeteer25 support, fix storage directory escape (#3715), social-email ReDoS (#3845), redirect domain filters and queue issues; 3.18.1 fixes in-use storage purging (#3988), Cloudflare markup and maxCrawlDepth."
  - "[GH:readme] https://github.com/apify/crawlee/blob/master/README.md inspected 2026-09-10 via contents API: HTTP/browser interface, persistent queues, pluggable storage, scaling, proxy/session/hooks, CLI and separate crawlee-python repository; README still says Node16+ and describes Dockerfiles rather than a verified framework-specific user image"
  - "[GH:package] https://github.com/apify/crawlee/blob/v3.18.1/packages/core/package.json read via contents API 2026-09-10: version3.18.1, Node>=16.0.0; current master packages/core/package.json Node>=22.0.0. Master tree snapshot 00eac9563b9e11ee7fc0de9ed27739e77d0dd42b (3039 blob paths); root package includes vitest/e2e/typecheck/coverage tooling. No tests executed."
  - "[Docs:v4] https://crawlee.dev/js/docs/next/upgrading/upgrading-to-v4 read 2026-09-10: native ESM, Node22+, TypeScript5.8+, changed storage/request/response interfaces, shared ConcurrencySystem, explicit collaborator disposal, transactional handler storage claims and native optional dependencies. This is next-version migration documentation, not proof v4 is stable or every documented behavior is in rc.0."
  - "[GH:advisories] https://api.github.com/repos/apify/crawlee/security-advisories?per_page=100 checked 2026-09-10 returned []; no published repository GHSA found, separate from security-relevant fixes in release notes or dependency vulnerabilities"
  - "[WikiLocal:comparison] Local crawl4ai/AutoScraper analyses consulted for Python LLM-output versus narrow extraction positioning, not an equal-depth competitor benchmark"
---

# Crawlee

> JS/TS 抓取框架，适合长期维护队列与浏览器工作负载；当前稳定版 3.18.1 与 v4 预发布必须分开选型。
>
> **状态**: `active` · **总分**: 4.1/5 · **推荐度**: 4/5

## 一句话总结

Crawlee 适合需要 queue、retry、session、storage 和 browser orchestration 的 JS/TS 团队；新部署先明确选择稳定 v3 还是试验 v4，不要混用两代文档 [GH:release][Docs:v4]。

## 总体评价

它的价值在于组织长期爬虫工程，而非只把一个网页变成 Markdown。HTTP 和浏览器 crawler、存储、队列、路由和代理/session 都在框架主域 [GH:readme]。

本轮有实质版本边界：stable 为 **3.18.1**，**4.0.0-rc.0** 仍是 prerelease；next migration 文档已描述 Node22/ESM 和多项接口变化 [GH:release][Docs:v4]。成熟度从 5 调为 4：框架有长期维护史，但处在明确的大版本迁移阶段。安全从 4 调为 3：公开 GHSA 为空不能掩盖 release 中目录越界/ReDoS 修复，也没有本轮依赖审计 [GH:release][GH:advisories]。

## 推荐度：4/5

**目标角色**：需要长期运行、可测试、可扩展爬虫系统的 Node.js/TypeScript 团队。稳定 v3 仍是合理候选；v4 应在独立分支验证存储、队列、重试、超时和 session 行为，再迁移生产数据。

框架不能保证绕过验证码、登录风控或平台限制。若只需小型 Python 抽取，Crawlee 的工程成本可能高于收益。

## 优势

1. HTTP/浏览器、queue/storage、retry/session 在一个框架中组织 [GH:readme]。
2. CLI 示例与可插拔生命周期有利于从原型演进到长期任务 [GH:readme]。
3. v3 继续修复真实存储/队列行为，v4 有详细迁移说明 [GH:release][Docs:v4]。
4. 项目分清 JS 仓库与独立 Crawlee Python，不必把跨语言产品混为一谈 [GH:readme]。

## 劣势

1. 浏览器、代理和并发池仍有真实资源成本。
2. v4 不是只改 package version；Node、ESM、storage 和 request interfaces 都有变化 [Docs:v4]。
3. 对结果存储和队列生命周期的错误可能表现为丢失或重复，而不只是抓取失败 [GH:release]。
4. 本轮无 crawl、迁移或 benchmark 执行，不能承诺吞吐和反爬成功率。

## 适合什么场景

- 长期维护的 JS/TS 网页数据流水线。
- 需要 queue、retry、session/proxy、browser pool 和数据存储。
- 对 v3→v4 生命周期/存储迁移有测试预算的团队。

## 不适合什么场景

- 一次性少量静态 HTML 抽取。
- 不能升级 Node 却直接采用 v4/next 的环境。
- 期待框架自动解决 CAPTCHA、认证、合规或账号风控。

## 与类似项目对比

| 项目 | 定位 | 相对本项目 |
|------|------|-----------|
| crawl4ai | Python/LLM-friendly 输出 | 更直接提供 Markdown/抽取结果；Crawlee 更偏完整 crawler 生命周期。 |
| AutoScraper | 样例驱动字段抽取 | 范围更窄、依赖更轻；Crawlee 管理队列、存储及浏览器工作负载。 |

仅比较中心用途，未把不同核验深度当作统一质量排名 [WikiLocal:comparison]。

## 它能做什么

能力 **5/5** 指 crawler framework 主域的广度：HTTP/browser、队列、存储、代理/session、hooks、路由和重试 [GH:readme]。v3.18.0 加入 typed router/schema validation 和 Puppeteer25 支持 [GH:release]。

v4 next 文档描述 shared concurrency、事务化 handler storage 等新语义；这里是未来代际/开发文档证据，不当作当前 stable 功能，也不保证全部已经包含于 rc.0 [Docs:v4]。

## 运行环境与资源占用

| 项目 | 判断 |
|------|------|
| v3.18.1 | core package 声明 Node>=16；这是包兼容下限，不是建议运行已失去安全支持的 Node |
| v4/当前 master | Node>=22；next 文档要求 ESM、TypeScript5.8+ |
| HTTP 模式 | 相比浏览器路径更轻；依赖具体 client/parser |
| Browser 模式 | 并发、浏览器进程和页面主导内存/CPU |
| Docker | 有构建模板，未验证框架自身官方用户 image，保持 false |
| GPU/存储 | 基础任务不需 GPU；queue/dataset/browser cache 需预算 |

资源效率 **4/5** 是模式分层和资源管理设计判断。v4 增加 native optional dependencies，不能盲目 `--omit=optional`；框架的并发控制也不能代替实际负载测量 [GH:package][Docs:v4]。

## 上手体验

**4/5**。CLI create 和示例便于开始；写好长期 crawler 仍需理解 async handlers、重试和存储。README 的 Node16 口径与 master Node22 并存，按版本查 manifest 是必要步骤，不应宣称 README 已统一更新 [GH:readme][GH:package]。

## 代码质量

**4/5**。TypeScript monorepo 有 vitest、e2e、typecheck 和 coverage tooling；本轮未运行它们 [GH:package]。v3 release 的存储清理、队列和域过滤修补是比文件数更有意义的质量信号；仍需回归验收，不给 5 [GH:release]。

## 可扩展性

**5/5**。crawler 类型、handler、storage、queue、session/proxy 和 lifecycle hooks 形成完整框架扩展面 [GH:readme]。v4 的 interface 重整进一步强调自定义实现，但也意味着已有扩展不能默认源码兼容，必须按 migration contract 改造 [Docs:v4]。

## 文档质量

**4/5**。quickstart、框架指南和按使用面组织的 v4 migration 具体；扣分在于稳定/next 文档混用风险，以及 README 与 master manifest 的 Node 口径不一致 [GH:readme][GH:package][Docs:v4]。

## 社区与成熟度

社区 **4/5**，成熟度 **4/5**。快照 25707 stars、1658 forks、96 issues、44 PRs；2016 年起的长期历史与稳定版持续修复支撑成熟框架判断 [GH:api][GH:release]。但新大版本仍预发布，不能以仓库年龄证明未来迁移无破坏。

## 安全与风险

安全 **3/5**。本轮 GHSA endpoint 空不等于没有安全相关缺陷：v3.18.0 release 列出 storage name 越出目录和 social-email 正则 ReDoS 修复 [GH:release][GH:advisories]。本轮未独立复现、未查全量依赖漏洞范围，不能把这些修补扩写成任意旧版都受影响的 CVE 结论。

限制输出目录、URL/重定向范围、cookies、代理和远程浏览器权限；把网页数据当作不可信输入。登录态和反爬策略还涉及平台条款，不由框架代为授权。

## 学习价值

值得学习 queue/storage/session 与资源控制的生命周期；v4 则适合研究接口迁移如何影响资源 ownership、超时和失败时的数据提交。最好在能观察重复/丢失的固定测试数据上验证，而非只看抓取任务返回成功。
