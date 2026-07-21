---
title: "Career-Ops"
created: 2026-06-07
updated: 2026-07-21
type: repository-analysis
repo_url: "https://github.com/santifer/career-ops"
category: "ai-programs/agents/assistant-agents"
tags: [career, job-search, agent-workspace, automation, resume, interview, playwright]
previous_repo: ""
successor: ""
primary_language: "JavaScript / TypeScript"
license: "MIT"
stars: 1290
forks: 159
last_checked: 2026-07-21
last_verified: 2026-07-21
evidence: "GitHub REST/GraphQL metadata, release/advisory APIs, README/docs/manifests and local shallow-clone scan at commit f7117464247332ba389432fb74e2f6271099b978; no install, AI-provider session, browser autofill, Docker run, web UI or end-to-end job-search workflow was executed"
archived_reason: ""
docker_support: true
gpu_required: false
estimated_cpu: "Node 22/Playwright + agent CLI; batch cost is dominated by LLM/API calls and browser automation"
estimated_memory: "Heuristic: ordinary development machine; parallel Playwright/agent workers increase use, not measured"
estimated_storage: "At least 2 GB free for Docker/Playwright path; reports, browser caches and local assets grow separately"
status: active
ratings:
  capability: 4
  usability: 3
  performance: 3
  code_quality: 3
  documentation: 4
  community: 4
  maturity: 2
  extensibility: 4
  security: 3
  recommendation: 3
overall_score: 3.3
sources:
  - "[GH] https://github.com/santifer/career-ops"
  - "[GH:api] GitHub REST/GraphQL snapshot 2026-07-21: archived=false, disabled=false, default_branch=main, head=f7117464247332ba389432fb74e2f6271099b978, pushed_at=2026-07-20T11:07:51Z, stars=1290, forks=159, open issues=26, open PRs=20, primary_language=JavaScript, license=MIT"
  - "[GH:languages] GitHub languages API snapshot 2026-07-21: JavaScript=668660, TypeScript=275335, CSS=51344, HTML=10113, Dockerfile=1601, Shell=731, Nix=168"
  - "[GH:releases] GitHub releases API snapshot 2026-07-21: 84 release objects; latest career-ops-v1.21.0 published 2026-07-17; major changes since v1.9 include Docker, interactive onboarding, cover letters, plugin registry, ATS autofill prepare-only path, interview plan/practice/debrief, experimental web UI and unified Risk Summary"
  - "[GH:advisories] GitHub repository security-advisories API queried 2026-07-21; returned [] in this check"
  - "[GH:readme] README.md local scan 2026-07-21: local-first AI workspace/CLI with scan, pipeline, tailoring, evaluation, cover letters, interview modes, dashboard, web alpha, plugins and multi-runner support; states ATS autofill never submits applications automatically"
  - "[GH:local-scan] Local shallow clone /opt/data/tmp/github-repo-wiki-freshness-audit/evidence/repos/career-ops at commit f7117464247332ba389432fb74e2f6271099b978: git ls-files=752, markdown/MDX=208, workflows=16, test-ish paths=81; inspected README.md, package.json, Dockerfile, docs/APPLY_AUTOFILL.md, plugins/README.md, scripts/, modes/, web/, templates/ and security-related release notes"
  - "[GH:package] package.json local scan 2026-07-21: package version 1.21.0, Node >=22.5.0, bin career-ops=scripts/cli.mjs, test command runs Node test suite, Playwright dependency, build/dashboard/web scripts and 100-item package files allowlist"
  - "[GH:apply] docs/APPLY_AUTOFILL.md local scan 2026-07-21: Greenhouse/Lever/Ashby autofill is allowlisted, performs preflight and field mapping, writes values but never clicks submit; operator must review and submit manually; warns browser automation against sensitive data"
  - "[GH:plugins] plugins/README.md local scan 2026-07-21: opt-in plugin system uses YAML manifest, allowlisted lifecycle hooks, SHA-256 integrity, registry provenance, state tracking and health/removal commands; plugins can still run external commands through declared hooks"
  - "[GH:docker] Dockerfile and v1.10.0 release notes inspected 2026-07-21: official Docker path uses Microsoft Playwright Node 22 image and packages a runnable career-ops binary; release describes Docker as full pipeline support for locked-down hosts"
  - "[GH:security-release] v1.10.0 and v1.15.0 release notes inspected 2026-07-21: fixed SSRF guard bypasses, updater/data-loss issues, tmpfile/PDF-path/tracker-cell hardening; historical fixes are attack-surface evidence, not a current audit"
  - "[L1:pai] Local wiki comparison source: /opt/data/wiki/github-repo-wiki/ai-programs/agents/assistant-agents/personal-ai-infrastructure.md"
  - "[L1:openclaw] Local wiki comparison source: /opt/data/wiki/github-repo-wiki/ai-programs/agents/assistant-agents/openclaw.md"
  - "[L1:hermes-agent] Local wiki comparison source: /opt/data/wiki/github-repo-wiki/ai-programs/agents/assistant-agents/hermes-agent.md"
---

# Career-Ops

> 面向求职者的 local-first AI career operations workspace：把职位发现、评估、CV/cover letter、申请准备、面试与 pipeline 记录做成可审计的文件/CLI 工作流。
>
> **状态**: `active` · **总分**: 3.3/5 · **推荐度**: 3/5
> **核验版本**: commit `f7117464247332ba389432fb74e2f6271099b978` / package `1.21.0`；GitHub/API 快照 2026-07-21
> **验证边界**: 本轮未安装 package、未连接 Claude/Codex/OpenRouter、未操作真实求职数据、未运行 browser autofill、Docker、web UI 或 tests；能力与风险判断来自官方 release/docs/source scan。

## 一句话总结

Career-Ops 已从“Markdown 求职模板”成长为有 CLI、ATS scanner、browser autofill、plugins、interview modes、experimental web UI 与 84 个 release objects 的 career workflow product；方法论和自动化边界很有价值，但两个月内从 v1.9 快进到 v1.21，仍不宜无验证地托管关键个人数据与申请动作。

## 总体评价

Career-Ops 的中心不是单次 resume generation，而是一套 local-first career operations state machine：`cv.md`、profile、reports、pipeline、scan history 与 follow-up cadence 形成可审计记录；AI runner 负责解释、研究与起草，Node scripts 负责可重复的发现、校验、编号、渲染和迁移 [GH:readme][GH:package]。

2026-06 至 07 的功能扩张有分析后果：Docker、interactive onboarding、cover letters、opt-in plugin registry、Greenhouse/Lever/Ashby autofill（prepare, don't submit）、interview plan/practice/debrief、独立版本的 experimental web UI，以及聚合五类公司风险的 Risk Summary 都已进入 release 轨道 [GH:releases][GH:apply][GH:plugins]。这使 capability 4 仍成立，也放大浏览器、插件、provider、数据迁移与 UI 故障面；maturity 继续为 2。

## 推荐度：3/5

推荐给愿意把求职过程当作长期项目、接受本地文件/CLI 为 canonical state、并能人工审查 AI 输出的个人用户；尤其适合希望避免无节制 auto-apply、保留决策理由和风险信号的人。

不按 4 推荐的原因不是功能少，而是变化太快：v1.10-v1.21 在六周内连续加入 Docker、plugins、autofill、web、interview 与 risk aggregation；本轮未跑 tests 或真实 provider/browser 流程。建议从 disposable clone 和脱敏 sample profile 开始，pin 版本，先验证 update/rollback、PDF、scan 与 browser preflight，再迁移真实资料。

## 优势

1. **local-first canonical state**：资料、报告、pipeline 与历史以 Markdown/YAML/TSV/JSON 为主，便于 diff、备份、审计和迁移 [GH:readme]。
2. **流程纵深完整**：从 zero-token job discovery、role/company evaluation、CV/cover letter 到 apply preflight、interview、follow-up、dashboard 与 Risk Summary [GH:releases]。
3. **自动化边界正确**：ATS autofill 只准备字段，不点击 submit；unsupported fields、preflight mismatch 与 manual review 会明示给用户 [GH:apply]。
4. **扩展性开始制度化**：plugins 有 manifest、integrity、provenance、hooks allowlist、health/removal 与 seed/successor 模型 [GH:plugins]。
5. **工程治理信号强于项目年龄**：752 tracked files、16 workflows、81 test-ish paths；package 有 Node tests、dashboard/web build 与文件 allowlist [GH:local-scan][GH:package]。

## 劣势

1. **复杂度接近小型产品套件**：CLI、scripts、dashboard、web、plugins、Docker、browser、AI runners、PDF 与 updater 同时存在。
2. **发布/功能膨胀过快**：84 个 release objects、current v1.21.0，但项目 2026-03 才创建；频繁版本不等于 API 稳定 [GH:api][GH:releases]。
3. **效果依赖外部世界**：ATS 页面、anti-bot、provider API、LLM plan、浏览器版本和招聘网站字段都会变化。
4. **plugins 不是 sandbox**：manifest/哈希/registry 是治理措施，但 declared hooks 仍可运行外部命令 [GH:plugins]。
5. **个人数据面宽**：CV、联系方式、偏好、公司评价、面试记录与 browser form 都可能敏感；local-first 不自动消除 model/API/backup 风险。

---

## 适合什么场景

- 同时管理大量岗位、reports、follow-up、面试与材料版本。
- 希望把评分、风险信号与决策理由保存在可 diff 的本地文件中。
- 使用 Claude Code、Codex、OpenCode 或 OpenRouter runner，但坚持人工审核。
- 想用 ATS discovery/autofill 降低机械工作，同时拒绝自动提交。
- 需要 Docker 作为 locked-down host 的可重复环境，或想试验 opt-in web UI。

## 不适合什么场景

- 需要企业 ATS/招聘团队 multi-user RBAC、审计与 SLA。
- 追求全自动批量投递或完全无人值守申请。
- 不愿维护本地 state、备份、版本 pin 与迁移。
- 无法审查 AI 生成的事实、薪资/公司风险结论和浏览器字段映射。
- 只需一次性生成简历或 cover letter；此时套件复杂度可能不划算。

## 与类似项目对比

| 项目 | 定位 | 相对本项目 |
|------|------|------------|
| personal-ai-infrastructure | 个人 agent workflow/assistant stack | Career-Ops 更垂直于求职，PAI 更泛化 [L1:pai] |
| OpenClaw | 通用个人 AI assistant | Career-Ops 内建 career state/schema；OpenClaw 场景覆盖更广 [L1:openclaw] |
| Hermes Agent | 通用个人 AI assistant/agent runtime | Career-Ops 是 career-specific application；Hermes Agent 更通用、可承载多任务 [L1:hermes-agent] |

以上为 `assistant-agents` 同类/相邻项目的定位级比较，本轮未按同一 10 维框架重审比较对象，表格不构成相对质量 benchmark。

---

## 它能做什么

capability 评分 4/5：

- 从公共 ATS/job boards 做 zero-token discovery、liveness 与 trust/coverage tracking [GH:readme][GH:releases]。
- 用 profile/CV/role/company signals 生成职位报告、统一 Risk Summary 与 pipeline decision [GH:readme][GH:releases]。
- 生成/维护 CV PDF、cover letter、outreach 与 follow-up [GH:releases]。
- 通过 Greenhouse/Lever/Ashby Playwright path 做 preflight + allowlisted autofill，但永不自动 submit [GH:apply]。
- 提供 interview onboarding、plan、practice、debrief、red-flag 与 panel-intel workflow [GH:releases]。
- 提供 terminal dashboard、opt-in experimental web UI、agent inbox 与 plugin registry [GH:readme][GH:releases][GH:plugins]。
- 通过 Claude/Codex/OpenCode/OpenRouter 等 runner 协作，具体质量取决于 provider 与用户资料 [GH:readme]。

不给 5：多数核心价值仍依赖实时网页、模型判断与用户操作；本轮没有真实 job-search benchmark，也缺长期稳定证据。

## 运行环境与资源占用

- **核心运行时**：Node.js `>=22.5.0`；`career-ops` binary 指向 `scripts/cli.mjs` [GH:package]。
- **浏览器**：Playwright 用于 scanner/autofill/PDF 等路径；autofill 需要人工 review [GH:apply]。
- **Docker**：官方 Dockerfile 基于 Microsoft Playwright Node 22 image，属于用户可运行的 full-pipeline path，故 `docker_support: true` [GH:docker]。
- **AI 后端**：Claude Code、Codex/OpenCode、OpenRouter 等；tokens/cost/retention 由 provider 决定。
- **资源**：CLI/Markdown 路径通常 CPU-only；browser/PDF/web/Docker 增加内存与磁盘。本文保守给至少 2GB free，未实测峰值。
- **GPU**：不要求；用户自接本地大模型时另计。

## 上手体验

评分 3/5。npm scaffolder、interactive onboarding、doctor、dashboard、Docker 和 web alpha 都降低入口门槛 [GH:readme][GH:releases]；但真正使用仍要准备 profile/CV、AI runner/API key、browser、目录 state，并理解大量命令。升级历史里还出现过 updater gap，故不能因 onboarding 改善直接给 4 [GH:security-release]。

## 代码质量

评分 3/5。当前扫描有 752 tracked files、16 workflows、81 test-ish paths，package scripts 覆盖 Node tests、dashboard/web build、integrity/schema/registry/doctor checks [GH:local-scan][GH:package]。release notes 记录 race/data-loss/path-traversal/SSRF/updater 类修复，说明团队在补边界 [GH:security-release]。但两个月内代码与 surface 近乎倍增，本轮未执行 tests，feature velocity 也提高回归风险，暂不评 4。

## 可扩展性

评分 4/5。modes、templates、providers、runners、job-board registry 与 plugins 都提供扩展点。plugin manifest/integrity/provenance/allowlisted hooks 比散落脚本可维护 [GH:plugins]；但它不是强 sandbox，third-party plugin 与本地修改都要 pin/hash/review，升级时还要处理 successor/migrations。

## 文档质量

评分 4/5。README、docs、modes、examples、standards、release notes、apply/plugin contracts 都很细，no-auto-submit 边界也写得明确 [GH:readme][GH:apply][GH:plugins]。局限是文档量随 surface 快速增长，旧教程/命令可能随 release 失效；应按 pin 的版本阅读。

## 社区与成熟度

| 维度 | 评分 | 说明 |
|------|------|------|
| 社区活跃度 | 4/5 | 1,290 stars、159 forks、26 open issues、20 open PRs；release notes 显示多位贡献者，CI/治理文件充足。但规模仍小，不能用活跃度代替 production adoption [GH:api][GH:releases] |
| 成熟度 | 2/5 | 2026-03 创建，2026-07 已到 v1.21.0、84 release objects；browser/plugin/web/interview surface 快速增长，feature bloat 与稳定年限都要求保守 [GH:api][GH:releases] |

## 安全与风险

评分 3/5。本轮 repository advisory API 返回空，只表示没有在该 endpoint 查到公开 GHSA，不是安全认证 [GH:advisories]。正面边界包括 local-first、autofill never-submit、preflight、plugin integrity/provenance，以及 release 中对 SSRF/tmpfile/PDF path/tracker cells 的 hardening [GH:apply][GH:plugins][GH:security-release]。

主要风险：

- CV、联系方式、薪资、公司评价、面试笔记与 browser form 都是敏感数据；Git history、sync、logs、screenshots 也会泄露。
- AI provider 会接收用户资料与 JD；runner/API key 的 retention 与权限必须单独治理。
- Browser automation、网页内容、PDF/Markdown rendering 形成 untrusted-input surface；no-submit 降低后果，但不消除误填与 secret exposure。
- Plugin hooks 可执行外部命令，integrity/provenance 不是 sandbox [GH:plugins]。
- 历史 release 已修 SSRF bypass、path traversal、tmpfile/data-loss 等问题，说明 attack surface 真实存在；应 pin 最新并先做 disposable-data rollback test [GH:security-release]。

建议真实资料不进 public Git；对 provider 做最小数据披露；使用独立 browser profile；autofill 后逐字段复核；third-party plugin 逐文件审查；保留 encrypted backup 与 update 前 snapshot。

## 学习价值

项目适合学习四件事：如何把长期个人流程转成可审计 state machine；如何把 LLM judgment 与 deterministic scripts 分层；如何把 browser automation 约束为 prepare-not-submit；如何为用户 plugin 设计 provenance、integrity、lifecycle 与 rollback。其价值主要在 workflow/product engineering，而非单一算法创新。
