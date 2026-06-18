---
title: "Penpot"
created: 2026-06-18
updated: 2026-06-18
type: repository-analysis
repo_url: "https://github.com/penpot/penpot"
category: "productivity/design-tools"
tags: ["design-tool", "prototyping", "self-hosted", "clojure", "clojurescript", "design-systems", "mcp"]
previous_repo: ""
successor: ""
primary_language: "Clojure"
license: "MPL-2.0"
stars: 50014
forks: 3232
last_checked: 2026-06-18
last_verified: 2026-06-18
evidence: "GitHub authenticated API + README + official help/docs + GitHub advisories + shallow local scan; no local build/test/self-hosting smoke test run"
archived_reason: ""
docker_support: true
gpu_required: false
estimated_cpu: "moderate for small teams; collaboration/exporter workloads and JVM/backend load scale with users and file complexity"
estimated_memory: "moderate-to-high; JVM backend, frontend/exporter services, PostgreSQL and collaboration workloads need production sizing"
estimated_storage: "project files, assets, media, PostgreSQL data and backups dominate storage"
status: active
ratings:
  capability: 4
  usability: 4
  performance: 3
  code_quality: 4
  documentation: 4
  community: 4
  maturity: 4
  extensibility: 4
  security: 2
  recommendation: 4
overall_score: 3.7
sources:
  - "[GH] https://github.com/penpot/penpot"
  - "[GH:api] https://api.github.com/repos/penpot/penpot queried 2026-06-18 via gh auth; stars=50014, forks=3232, open_issues_count=696, created_at=2015-12-29, pushed_at=2026-06-17, default_branch=develop, license=MPL-2.0, primary_language=Clojure"
  - "[GH:issues-prs] GitHub search API queried 2026-06-18; open issues=617, open PRs=78; REST open_issues_count=696 includes PRs"
  - "[GH:releases] https://api.github.com/repos/penpot/penpot/releases?per_page=5 queried 2026-06-18; latest 2.16.0 published 2026-06-11; previous releases 2.15.4, 2.15.3, 2.15.2, 2.15.1"
  - "[GH:community] https://api.github.com/repos/penpot/penpot/community/profile queried 2026-06-18; health_percentage=87; README, license, code_of_conduct, CONTRIBUTING, SECURITY, issue templates and PR template present"
  - "[GH:advisories] https://api.github.com/repos/penpot/penpot/security-advisories?per_page=10 queried 2026-06-18; returned 4 published advisories: GHSA-4937-35vc-hqjj critical account takeover, API metadata reports vulnerable_version_range <=2.15.0 and patched_versions 2.14.5 (version/branch semantics should be checked against the advisory before operations); GHSA-22qr-rp27-j9wm high unauthenticated MCP /execute RCE affected penpot-mcp all patched 2.15.0; GHSA-35g2-w7f6-8v9h high authenticated SSRF affected <=v2.14.0 patched 2.15.0; GHSA-xp3f-g8rq-9px2 high arbitrary file read affected <2.13.2 patched 2.13.2"
  - "[GH:local-scan] local shallow clone /opt/data/tmp/repo_wiki_trending_20260618_round2/penpot-penpot at commit 9a3023e5d0582c29c5bc323973144cb3b9e8854b; git ls-files=5739, markdown/rst/adoc files=165, test/spec-ish files=710, GitHub workflows=20; inspected README.md, LICENSE, SECURITY.md, CONTRIBUTING.md, deps.edn, package.json, pnpm-lock.yaml, AGENTS.md"
  - "[Docs:self-host] https://help.penpot.app/technical-guide/getting-started/ extracted 2026-06-18; official self-hosting guide lists docker compose, Kubernetes/Helm/OpenShift/Rancher, Elestio and Truenas options, and notes SaaS/self-hosted experience equivalence"
  - "[Docs:architecture] https://help.penpot.app/technical-guide/developer/architecture/ extracted 2026-06-18; official architecture says SPA frontend in ClojureScript/React served from static web server, backend in Clojure/JVM, PostgreSQL persistence, shared code/data structures"
  - "[Docs:MCP] https://help.penpot.app/mcp/ extracted 2026-06-18; official MCP docs describe AI client access to Penpot files, read/write tools and safety recommendations around reversible changes and disconnecting MCP"
---

# Penpot

> Open-source design platform：面向设计-代码协作、自托管和 open standards 的 Figma-like 设计系统平台，技术栈以 Clojure/ClojureScript 为核心。
>
> **状态**: `active` · **总分**: 3.7/5 · **推荐度**: 4/5

## 一句话总结

Penpot 是少数真正成熟的开源设计平台之一，适合需要自托管、开放格式、设计系统和 design-code collaboration 的团队；但近期多个高危/严重 GHSA 使安全评分必须保守。

## 总体评价

Penpot 的定位非常清楚：open-source design platform for teams that build digital products at scale，强调 self-hosting、open standards（SVG/CSS/HTML/JSON）、real-time collaboration、design tokens、plugin system、API/webhooks 与 MCP server [GH]。它不是单纯画图工具，而是“设计基础设施”：设计、代码、AI workflow、团队协作和自托管治理交织在一起。

技术上，它也有辨识度。官方 architecture 文档说 Penpot 是典型 SPA：ClojureScript + React frontend，由 static web server 提供；Clojure backend 运行在 JVM 上，数据持久化在 PostgreSQL，前后端可共享代码和数据结构 [Docs:architecture]。local scan 显示仓库规模 5739 files、710 test/spec-ish files、20 workflows，并包含 backend、frontend、common、exporter、render-wasm、plugins、mcp 等目录 [GH:local-scan]。

成熟度和社区都强：2015 建仓，50k stars，2.16.0 于 2026-06-11 发布，官方 docs/self-hosting/community/contributing 都比较完整 [GH:api][GH:releases][Docs:self-host]。但安全面不能美化：本次 GitHub Security Advisories 查到 4 个 published advisories，其中包括 critical account takeover、高危 MCP unauthenticated `/execute` RCE、高危 SSRF 和 arbitrary file read；虽然均记录 patched versions，但这些说明 Penpot 的协作平台 + 插件/MCP + 文件/媒体处理攻击面真实存在 [GH:advisories]。

## 推荐度：4/5

对目标用户——需要自托管设计平台、想研究 Clojure/ClojureScript 大型产品、需要 design systems / tokens / plugin / API / MCP 组合的人——推荐度是 4/5，但生产自托管应理解为 **patched-version-gated controlled pilot / controlled adoption**，不是无条件上线建议。

给 4 的理由：Penpot 在开源设计工具里稀缺且成熟，MPL-2.0 许可较友好，自托管路径官方化，文档和社区都较完整；对设计-代码协作场景，open standards 与 developer-friendly inspect/API/plugin/MCP 是明确差异点 [GH][Docs:self-host][Docs:MCP]。

不直接给 5：一是 Figma 级产品能力和生态仍需要实际团队试用验证；二是近期安全 advisories 级别很高；三是自托管设计协作平台的运维、升级、备份、权限和外部暴露面都不可忽略。

## 优势

1. **产品定位稀缺**：开源、自托管、设计协作、设计系统、open standards 同时成立的项目不多 [GH]。
2. **设计-代码桥梁强**：Inspect mode、SVG/CSS/HTML、Design Tokens、API/webhooks、plugin system、MCP server 都服务于 design-code workflow [GH][Docs:MCP]。
3. **自托管选项明确**：官方 self-hosting guide 提供 Docker Compose、Kubernetes/Helm、OpenShift/Rancher、Elestio、Truenas 等路径 [Docs:self-host]。
4. **架构可研究**：Clojure/ClojureScript + JVM backend + PostgreSQL + shared code/data structures，是大型产品里相对少见的函数式技术栈样本 [Docs:architecture]。
5. **社区和维护活跃**：50k stars、3232 forks、近期 releases、community profile 87%，README 链接 community、learning center、contributing guide [GH:api][GH:releases][GH:community]。

## 劣势

1. **安全历史较重**：近期 4 个 GHSA 包含 critical account takeover 和 MCP RCE，说明攻击面不能轻视 [GH:advisories]。
2. **自托管不是轻量服务**：JVM backend、frontend/exporter、PostgreSQL、媒体/资产、实时协作都需要容量规划和备份。
3. **产品替代成本高**：设计工具高度依赖团队习惯、文件兼容、插件生态、协作性能和迁移路径；不能只凭开源属性替代 Figma。
4. **MCP 带来高权限设计变更面**：官方 MCP docs 明确 AI client 可执行 create/rename/move/delete/restyle 等写操作，需要谨慎连接和小步可逆 [Docs:MCP]。
5. **本次未做 self-host smoke test**：性能、升级、导入/导出、多人协作和插件/MCP 可靠性没有实际验证。

---

## 适合什么场景

- 团队需要 self-hosted design/prototyping/design-system platform。
- 对数据主权、开源许可、供应链透明度、避免 SaaS lock-in 有要求。
- 想把设计 tokens、components、inspect mode、API/webhooks 和 AI/MCP 接入开发流程。
- 研究 Clojure/ClojureScript 大型前后端产品架构。
- 需要在开源生态里寻找 Figma-like 替代方案，并愿意做试点迁移验证。

## 不适合什么场景

- 只需要个人轻量画图或一次性 UI mockup。
- 团队强依赖 Figma 特定插件、社区资源、企业协作功能且不准备迁移成本。
- 无法维护 PostgreSQL、备份、升级、反向代理、权限和安全补丁的自托管团队。
- 对近期 critical/high 安全历史零容忍、且不能快速升级的生产环境。
- 希望 MCP/AI 自动改设计但没有 review、rollback、权限隔离流程的团队。

## 与类似项目对比

| 项目 | 定位 | 相对本项目 |
|------|------|-----------|
| Figma | 主流商业云端设计协作平台 | Figma 生态与用户体验更强；Penpot 提供开源、自托管、MPL-2.0 和 open standards 路线 |
| Lunacy | 设计工具 / Sketch/Figma-like | Lunacy 更偏桌面设计工具；Penpot 更强调 web collaboration、自托管与开源基础设施 |
| Excalidraw | 轻量白板/草图协作 | Excalidraw 简单轻量；Penpot 面向完整 UI/design system/prototyping 工作流 |
| Plasmic / builder 类工具 | visual development / design-to-code | 这些更接近低代码/页面生成；Penpot 的核心仍是设计平台与设计系统协作 |

上述对比是定位级比较，未对竞品按同一 10 维度框架深审。

---

## 它能做什么

capability 评分 4/5。

Penpot 能提供：

- browser/SaaS 或 self-hosted design/prototyping workspace [GH][Docs:self-host]；
- real-time collaboration、design systems、tokens、components、variants [GH]；
- inspect mode 输出 SVG/CSS/HTML，帮助 design-code handoff [GH]；
- plugin system、API/webhooks、access tokens 和 integrations [GH]；
- MCP server，把 AI agents 接入当前 Penpot file/page，执行读取和写入设计结构的操作 [Docs:MCP]；
- Docker Compose、Kubernetes/Helm、OpenShift/Rancher 等部署路径 [Docs:self-host]。

不给 5：本条没有验证其与 Figma 全功能差距、复杂文件性能、企业治理、插件生态质量和迁移可靠性。

## 运行环境与资源占用

| 场景 | CPU | 内存 | 存储 | 说明 |
|------|-----|------|------|------|
| 小团队 self-host | 中等 | 中等到高 | PostgreSQL + assets | JVM backend、frontend/exporter、数据库和媒体存储是主要负载 |
| 大团队/复杂文件/多人协作 | 中等到高 | 高 | 高 | 实时协作、导出、文件资产、备份和并发访问需要单独容量规划 |

- **运行时**：Clojure backend on JVM、ClojureScript/React frontend、PostgreSQL persistence；还有 exporter/common/render-wasm/plugins/mcp 等组件 [Docs:architecture][GH:local-scan]。
- **操作系统**：官方 self-hosting 路径以 Docker/Kubernetes/Helm 等部署为主 [Docs:self-host]。
- **Docker**：官方 self-hosting guide 首选之一是 docker compose；仓库含 docker 目录 [Docs:self-host][GH:local-scan]。
- **GPU**：不需要。
- **外部依赖**：PostgreSQL、对象/媒体存储、邮件/认证、反向代理/TLS、备份、MCP/AI client（若启用）。

performance 评分 3/5。Clojure/JVM + web collaboration 是可行的大型产品路线，但资源效率通常不如轻量原生工具；本条没有做复杂文件/多人协作 benchmark。

## 上手体验

评分 4/5。

README 对 product value、self-hosting、community、resources、license 给出清晰入口；官方 technical guide 把 Docker Compose、Kubernetes/Helm 等路径列为主线 [GH][Docs:self-host]。对普通团队，先用 SaaS 试用、再 self-host 迁移是合理路径。

扣分点：真正 self-host 仍涉及数据库、媒体、TLS、邮件、升级和备份；MCP/API/plugin 等高级能力也需要权限和安全理解。

## 代码质量

评分 4/5。

仓库结构大而有序：backend、frontend、common、exporter、render-wasm、plugins、mcp、docs 等模块清晰；local scan 显示 5739 tracked files、710 test/spec-ish files、20 workflows，并有 CONTRIBUTING、SECURITY、CODE_OF_CONDUCT、deps.edn、package.json、pnpm-lock.yaml [GH:local-scan][GH:community]。

不给 5：本条未运行测试、构建或审查关键协作/权限/MCP 代码；近期 advisories 也说明权限边界曾出现严重缺陷。

## 可扩展性

评分 4/5。

Penpot 的扩展性主要来自 plugin system、API/webhooks、access tokens 和 MCP server [GH][Docs:MCP]。设计系统/tokens/components/variants 也让它能嵌入工程流程，而不是只做静态图。

限制是扩展面即风险面：插件、API token、MCP key、当前 focused page、远程/本地 MCP 工具都可能改变设计文件；官方 MCP docs 也建议先 read-only、小步可逆、必要时断开 MCP [Docs:MCP]。

## 文档质量

评分 4/5。

README、user guide、technical guide、architecture、self-hosting、contributing、MCP docs 都较完整 [GH][Docs:self-host][Docs:architecture][Docs:MCP]。文档不仅覆盖用户视角，也覆盖部署和开发者架构。

不足是部分高级运维、安全和企业治理需要继续深入 docs 或实际部署；GHSA 修复版本与运行实例升级状态也需要用户自己核验。

## 社区与成熟度

| 维度 | 评分 | 说明 |
|------|------|------|
| 社区活跃度 | 4/5 | 50k stars、3232 forks、open issues 617 / open PRs 78、community profile 87%，外部 community 与 social links 完整 [GH:api][GH:issues-prs][GH:community] |
| 成熟度 | 4/5 | 2015 建仓，release 活跃，2.16.0 于 2026-06-11 发布；作为产品已经较成熟，但 issue backlog 和安全历史仍需关注 [GH:api][GH:releases][GH:advisories] |

## 安全与风险

评分 2/5。

这里必须保守：本次 GitHub Security Advisories endpoint 返回 4 个 published advisories，包括：critical pre-authenticated account takeover、high unauthenticated MCP `/execute` RCE、high authenticated SSRF、high arbitrary file read；虽然记录了 patched versions，但它们都是设计协作平台关键攻击面上的严重信号 [GH:advisories]。

Penpot 的安全风险来自多个方向：多租户/团队权限、文件和媒体导入、插件/API token、MCP write operations、self-hosted deployment、PostgreSQL/asset storage、public web exposure。生产采用时，必须固定版本、快速升级、审查 MCP/插件权限、备份数据库和资产、配置 TLS/SSO/邮件、限制管理面暴露。安全评分 2/5 并非说最新版必然有已知未修漏洞，而是表示历史漏洞严重度和攻击面要求高度谨慎。

## 学习价值

Penpot 的学习价值很高：它让人看到一个非典型技术栈如何支撑大型协作产品，也展示了 design-code-AI 三者如何通过 tokens、inspect、API、plugin、MCP 连接。于 Develata，它比普通 productivity app 更值得看，因为它既是产品，也是可研究的协作系统。