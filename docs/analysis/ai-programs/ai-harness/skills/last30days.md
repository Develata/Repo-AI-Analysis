---
title: "last30days"
created: 2026-06-07
updated: 2026-08-08
type: repository-analysis
repo_url: "https://github.com/mvanhorn/last30days-skill"
category: "ai-programs/ai-harness/skills"
tags: [agent-skills, recency-research, multi-source-research, social-search, hermes, high-permission]
previous_repo: ""
successor: ""
primary_language: "Python"
license: "MIT"
stars: 57644
forks: 5001
last_checked: 2026-08-08
last_verified: 2026-08-08
evidence: "GitHub API / releases / issue-PR / Actions evidence + local shallow-clone code and workflow review + isolated Python test/audit/preflight; no live multi-source research, credential, cookie, host-plugin, or browser-session run"
archived_reason: ""
docker_support: false
gpu_required: false
estimated_cpu: "Heuristic: ordinary local CPU is sufficient for the engine; wall time is dominated by multi-source network fan-out and host-side synthesis, not benchmarked"
estimated_memory: "Heuristic: local engine use is modest, but the 222,241-byte SKILL.md can materially consume host-model context; no RSS or throughput benchmark was run"
estimated_storage: "GitHub API size=50,130 KB; local shallow working tree=31,406,044 bytes; saved raw briefs, SQLite store, and library artifacts grow with use"
status: active
ratings:
  capability: 4
  usability: 3
  performance: 3
  code_quality: 4
  documentation: 4
  community: 4
  maturity: 2
  extensibility: 4
  security: 3
  recommendation: 3
overall_score: 3.4
sources:
  - "[GH] https://github.com/mvanhorn/last30days-skill"
  - "[GH:api] GitHub REST queried 2026-08-08T09:55:21Z: active public non-fork; created_at=2026-01-23; pushed_at=2026-08-07T21:51:07Z; default_branch=main; HEAD=1004324ad35a3ba656e6df0faabd54749e398455; stars=57,644; forks=5,001; GitHub REST open_issues_count=105 (includes PRs); separate search counts=open issues 72, open PRs 33; language=Python; license=MIT; size=50,130 KB."
  - "[GH:issues] GitHub search API queried 2026-08-08: current open reports include #956 (224 KB/~56k-token SKILL context claim), #957 (Instagram creator lane yields empty items), #946 (arXiv reports 0 despite found entries), #916 (GitHub lane returned zero because query shape), and #942 (documented X backend mismatch); this is issue-report evidence, not independently reproduced runtime behavior."
  - "[GH:release] GitHub Releases API queried 2026-08-08: latest published release=v3.18.4 on 2026-07-28; recent releases include v3.18.0–v3.18.4."
  - "[GH:community] GitHub community profile queried 2026-08-08: health=71; README, MIT license, CONTRIBUTING.md, and PR template are surfaced; no Code of Conduct or repository security policy is surfaced."
  - "[GH:advisories] GitHub repository security-advisories API queried 2026-08-08; returned [] — no published repository advisory found in this check, not proof of safety."
  - "[GH:actions] Upstream Validate run https://github.com/mvanhorn/last30days-skill/actions/runs/31221631300 at exact HEAD 1004324ad35a completed success on 2026-08-07; its tests, eval, and mcp-tests jobs each completed success."
  - "[Source:readme] README.md at local shallow-clone HEAD 1004324ad35a inspected 2026-08-08: 382 lines; documents multi-source research, host install paths, source/key matrix, preflight, JSON/library/watchlist behavior, and makes product claims not independently live-run here."
  - "[Source:skill] skills/last30days/SKILL.md at HEAD 1004324ad35a inspected 2026-08-08: v3.18.4, 2,255 lines / 222,241 bytes; allowed-tools=Bash/Read/Write/AskUserQuestion/WebSearch; optional credentials include provider keys, X cookie tokens, Bluesky credentials, and Xiaohongshu endpoint; Security & Permissions enumerates network destinations, local writes, explicit cookie consent, and public-by-default library publishing."
  - "[Source:project] pyproject.toml and mcp/go.mod at HEAD 1004324ad35a inspected 2026-08-08: Python >=3.12; no Python runtime dependencies; dev test/coverage tooling; coverage floor=84%; MCP subproject uses Go 1.25.5 and mcp-go v0.57.0."
  - "[Source:workflows] .github/workflows/validate.yml, security.yml, osv-scanner.yml, and scorecard.yml at HEAD 1004324ad35a inspected 2026-08-08: Validate runs Python coverage/eval and go test -race; security workflow has pinned actions, uv audit, dependency review, TruffleHog, and advisory Semgrep (continue-on-error); scheduled OSV scan is non-blocking."
  - "[Source:local-scan] Local shallow clone at HEAD 1004324ad35a scanned 2026-08-08: 445 files / 31,406,044 bytes; 287 Python, 11 Go, 56 Markdown, 9 declared workflow files; core modules include pipeline.py=4,160 lines, last30days.py=3,623 lines, render.py=3,558 lines; SECURITY.md/CODE_OF_CONDUCT.md and Docker/Compose files were absent; no GPU dependency or execution path was observed (the only GPU string matches were research fixture/source text)."
  - "[Source:hermes-setup] HERMES_SETUP.md at HEAD 1004324ad35a inspected 2026-08-08: repository documentation directs Hermes users to an explicit skill path with --force because it says the install scanner returns caution; this describes the repository's instructions, not an independent verification of current Hermes behavior."
  - "[Local:test] Isolated local run on 2026-08-08 at HEAD 1004324ad35a: uv sync --locked --group dev && uv run pytest --cov --cov-report=term-missing && uv audit --locked under CPython 3.13.5; 3,598 passed, 5 skipped, 48 subtests passed, 112 warnings, coverage=88.46% versus 84% gate; output included multiple ResourceWarning reports of unclosed sqlite3 connections; uv audit found no known vulnerabilities or adverse statuses in 13 locked Python packages."
  - "[Local:preflight] Isolated last30days.py --preflight run on 2026-08-08 at HEAD 1004324ad35a reported env_only config, browser cookies off, no cookie-store reads, one planned report directory, unavailable optional CLIs, and keyless source availability; it did not perform live research."
  - "[L1:comparisons] Local same-category positioning sources inspected 2026-08-08: /opt/data/wiki/github-repo-wiki/ai-programs/ai-harness/skills/scientific-agent-skills.md and /opt/data/wiki/github-repo-wiki/ai-programs/ai-harness/skills/openai-skills.md."
---

# last30days

> 面向 agent harness 的 recency-first research skill：把近期 Reddit、X、YouTube、HN、GitHub、预测市场与 web 信号交给本地 engine 汇集，再由宿主 agent 写成 brief。
>
> **状态**: `active` · **总分**: 3.4/5 · **推荐度**: 3/5
>
> **验证边界**：本轮核验 GitHub API、源码、workflow、隔离 Python test/audit 与无副作用 preflight；**没有**实际跑一次多源研究，也没有给它真实 API key、浏览器 cookie、Hermes/Claude/Codex plugin 或本地 companion service。因此“支持哪些平台/来源”主要是 README 与 SKILL contract 的声明，而不是本轮端到端结果 [Source:readme][Source:skill][Local:test][Local:preflight]。

## 一句话总结

last30days 值得作为“近期社区脉搏”研究工具**隔离试用**：其工程化程度和测试证据强于普通 prompt pack，但它同时是一个上下文很重、外部依赖多、可接触 token/cookie/本地文件的高权限 agent skill，不应当把社媒聚合当作事实核查，也不应无审查地装进敏感主环境 [Source:skill][Local:test][GH:issues]。

## 总体评价

它的核心形态不是静态 Markdown，而是 `SKILL.md` 行为契约加 Python research engine，并附带 Go MCP surface、配置/发布规则、评测与安全 workflow。当前 checkout 有 445 个文件，主干的 `pipeline.py`、`last30days.py`、`render.py` 都是数千行模块；隔离环境中的 Python suite 实测通过 3,598 项测试并达到 88.46% coverage，精确同一 HEAD 的 upstream Validate 也通过了 tests、eval 与 Go MCP jobs [Source:local-scan][Local:test][GH:actions]。

但“工程投入充分”不等于“多源研究已稳定”。近期 open issues 涉及 Instagram 解析、arXiv 时间窗、GitHub query、X backend 与极大的 skill context；这些报告说明 connector 边界仍在持续修补。本轮不把 README 的来源矩阵、zero-config 或 host 覆盖直接升格为已验证运行能力 [GH:issues][Source:readme][Source:skill]。

因此它是一个**能力强、证据较实、但仍很年轻且权限面宽**的 skill-engine hybrid：适合时间敏感的产品/社区调研、research discovery 与 agent-skill engineering 学习；不适合作为高风险结论、企业敏感账号或稳定生产 API 的单点依赖 [GH:api][Source:skill]。

## 推荐度：3/5

**角色定位**：面向已经使用 agent harness、愿意把 profile、token、浏览器 session 和输出目录隔离的个人研究者、产品调研者与 agent power user；不面向希望“装完即可信、可直接接入生产”的团队。

给 3/5 而非 4/5 的理由，不在于它缺少功能，而在于采用边界：项目 2026-01 才创建、当前仍有 72 个 open issues 与 33 个 open PRs；其一条 open issue 还直接指出完整 SKILL.md 约 224 KB / 56k tokens 的常驻上下文成本。面对多个时常变化的社媒/API connector，年轻、宽权限和 context-heavy 三者叠加，必须优先做隔离与试跑 [GH:api][GH:issues][Source:skill]。

正面证据同样明确：本轮 Python test/audit 通过，覆盖率高于项目 84% gate；精确同一 main HEAD 的 upstream tests、eval、MCP tests 都成功。它值得阅读、跟踪，并可在无敏感凭据的 sandbox 中选择性试用 [Local:test][GH:actions][Source:project]。

**结论**：值得收录；对“近期讨论/市场/开发者反馈”的研究工作流可试，但先固定版本、最小权限、单独 `$HOME`/输出目录和非生产账号。仓库自身的 Hermes guide 还要求 `--force` 接受其所述 scanner caution，这更不是盲装理由 [Source:hermes-setup]。

## 优势

1. **recency-first 问题定位明确**：README/SKILL 将它定位为近期多源信号聚合，而不是一般网页搜索；可覆盖社区讨论、视频 transcript、GitHub 活动、预测市场和补充 web source [Source:readme][Source:skill]。
2. **skill 与 engine 分工真实存在**：SKILL contract 约束宿主 agent，Python engine 承担 source retrieval、enrichment、rendering、保存与诊断；不是只有 prompt 的资料包 [Source:skill][Source:local-scan]。
3. **有可运行的质量门**：本轮隔离 Python suite 全绿并超过 coverage gate，upstream exact-HEAD Validate 的 tests、eval、MCP tests 也成功 [Local:test][GH:actions][Source:project]。
4. **先验权限可见性较好**：`--preflight` 在本轮实际运行时清楚列出 config source、cookie read plan、planned writes、缺失 optional CLI 与可用 keyless sources，而没有读取 cookie 或启动研究 [Local:preflight][Source:skill]。
5. **多 host / 多 artifact 的产品意识较强**：README 文档化 Agent Skills hosts、Claude Code、Grok、Claude Desktop、OpenClaw、JSON export、library/watchlist 等 surface；本轮只确认这些文档和构建结构，未逐 host 运行 [Source:readme][Source:local-scan]。

## 劣势

1. **上下文负担显著**：当前 `SKILL.md` 为 2,255 行、222,241 bytes；#956 还报告某 host 每次加载约 56k tokens。即使该 token 数尚未由本轮独立复现，文件体量本身已是 context-budget 与可读性的硬信号 [Source:skill][GH:issues]。
2. **connector correctness 仍是风险中心**：近期 issue 报告覆盖 Instagram 空结果、arXiv window、GitHub query 与 X backend。它们不证明所有运行都会失败，却足以否定“功能列出来就可靠”的乐观推断 [GH:issues]。
3. **核心实现偏大**：pipeline、entrypoint 与 renderer 分别达到 4,160、3,623、3,558 行；虽有高 coverage，但改动理解、review 与跨来源回归成本都不低 [Source:local-scan][Local:test]。
4. **本轮测试仍暴露 hygiene debt**：测试通过，但终端出现 112 warnings，其中多条为未关闭 sqlite3 connection 的 `ResourceWarning`；这不是 fail，却不应被 green test 掩盖 [Local:test]。
5. **权限/依赖面宽**：Bash、Read、Write、WebSearch，外加 optional API key、browser cookie、local service、SQLite、报告保存与可选公开发布，意味着安装安全远不等于普通 Markdown skill [Source:skill]。
6. **成熟度不足**：2026-01 创建、v3.18.4 仍在快速修补 connector 与 release workflow；长期兼容性、账户合规和 host 行为尚需时间检验 [GH:api][GH:release][GH:issues]。

---

## 适合什么场景

- 需要知道“最近一个月社区究竟在讨论什么”的产品、开发者工具、市场或人物调研，但把输出作为 discovery，而非最终事实。
- 有明确 source boundary 的研究：例如只开 keyless Reddit/HN/Polymarket/GitHub，或对单一测试账号启用可选来源 [Local:preflight][Source:readme]。
- 希望把原始 brief、JSON、watchlist 或 library 作为个人研究档案，再回到一手来源进行核验的 workflow [Source:readme][Source:skill]。
- 学习如何将 skill contract、engine、诊断、fixture/eval、source status 与 host-specific packaging 组合成 agent-native 工具 [Source:skill][Source:workflows]。
- 能用隔离 profile、least-privilege token、明确输出目录和可回收 browser session 控制 blast radius 的个人/小团队。

## 不适合什么场景

- 医疗、法律、投资、地缘政治等高风险判断的最终证据；社媒 engagement 和预测市场只是信号，不是事实或因果证明 [Source:readme][Source:skill]。
- 不能接受 query 发送给外部服务、不能接受浏览器 cookie/API token、或不能接受本地 research artifact 的敏感环境 [Source:skill]。
- context window、token cost 或响应 latency 极其紧张的 agent；222 KB runtime instruction contract 是实在负担 [Source:skill][GH:issues]。
- 要求稳定、低变更、可长期固定 ABI/API 的生产服务；项目年龄和当前 connector backlog 不支持这个期待 [GH:api][GH:issues]。
- 不愿审阅安装路径、也不愿为每个 provider 单独核验权限/合规/付费规则的使用者。

## 与类似项目对比

| 项目 | 定位 | 相对本项目 |
|------|------|-----------|
| Scientific Agent Skills | 面向应用科学工具与数据库的广覆盖 skill collection | 更偏领域技能目录；last30days 更偏单一、带本地 engine 的近期信息聚合 workflow。 |
| OpenAI Skills | Codex 生态的官方 skills catalog / 示例集合 | 更偏 catalog 与格式生态参照；last30days 把一个具体研究任务做成携带 engine、诊断和输出持久化的垂直能力。 |

上述项目均在 `ai-programs/ai-harness/skills` 同类目录中；表格只依据本地 wiki 既有条目的标题级定位与分类语境，不代表本轮对比较项重新执行 10 维审计或作优劣 benchmark [L1:comparisons]。

---

## 它能做什么

README 与 SKILL contract 声称它可：为 topic/person/product/comparison 做近窗口 research，组合 Reddit、X、YouTube、TikTok、Instagram、HN、Polymarket、GitHub、arXiv、Techmeme、web 等来源；提供 `doctor`、source outcome、freshness、JSON、library、watchlist 与 HTML artifact 等工作流能力 [Source:readme][Source:skill]。

本轮实际验证到的是其中较窄的一层：`--preflight` 在隔离环境下成功给出 keyless source availability、planned report directory 和 cookie-off 状态，且没有发起 live research。它证明安全预览入口能启动，不证明任何外部 connector 返回了正确、完整或新鲜的数据 [Local:preflight]。

其合理使用方式应是：把 engine 的结果视为可追溯候选与叙事素材，回到原始链接、官方公告、论文/文档或直接 API 再做事实核验；不要把“抓到了很多 engagement”误写成“结论已证实” [Source:readme][Source:skill]。

## 运行环境与资源占用

| 场景 | CPU | 内存 | 存储 | 说明 |
|------|-----|------|------|------|
| 最小 | 普通本地 CPU；未 benchmark | 未测；仅 SKILL.md 就有 222,241 bytes 的模型上下文输入 | 代码树 31,406,044 bytes；运行输出另计 | Python 3.12+，metadata 还列出 node；keyless sources 仍需要网络 [Source:skill][Source:local-scan][Source:project] |
| 推荐 | 普通多核 CPU + 稳定网络；fan-out 主要受外部延迟约束 | 为 host context、transcript/result artifact 留余量 | 为 raw briefs、SQLite store、library/HTML 留独立目录 | README/SKILL 声明多源并行和本地保存，本轮未跑负载/吞吐 benchmark [Source:readme][Source:skill] |

- **运行时**：`pyproject.toml` 要求 Python >=3.12；skill metadata 列出 `node` 与 `python3`，另有 Go MCP subproject。隔离 Python test 在 CPython 3.13.5 通过；本机没有 Go，因此没有本地重跑 MCP test，但同一 HEAD 的 upstream MCP job 已成功 [Source:project][Local:test][GH:actions]。
- **性能评分边界**：3/5 是“无 benchmark 的中性分”，不是吞吐/成本优秀的证明。多源 network fan-out 与 222 KB skill context 都会抬高真实时间和 token 成本 [Source:skill][GH:issues]。
- **操作系统**：源码包含多 host / Windows/macOS/Linux path 与 cookie-flow 文档；本轮只在 Linux 上跑了 Python tests/preflight，未做多平台实测 [Source:skill][Local:test]。
- **Docker**：未见 Dockerfile、Compose file 或官方 Docker image/documented Docker route，故 `docker_support: false` [Source:local-scan]。
- **GPU**：本轮 source scan 未发现 GPU dependency 或 execution path，故按不需要记录；这不是 hardware benchmark [Source:project][Source:local-scan]。
- **外部依赖**：核心 Python runtime dependencies 为空；能力扩展依赖外部 API、cookies、optional CLIs、本地 browser/session services 和宿主 agent 的 synthesis/tool surface [Source:project][Source:skill]。

## 上手体验

评分 3/5。

README 的 `npx skills add` 与多 host 安装说明降低了发现和分发门槛；本轮也实际运行了 `--preflight`，它能在不读 cookie、不跑研究的情况下说清配置和权限预期 [Source:readme][Local:preflight]。

真正的 first-run 却不轻：SKILL contract 明确要求 consent-aware setup、可选 browser-cookie access、CLI installation、GitHub device flow、provider keys、source opt-in 和保存位置；用户还要理解“宿主 agent 是否正确遵守这 2,255 行 contract”这个额外变量 [Source:skill]。

因此它不是零配置的普通搜索应用。若只用 keyless sources，体验可接受；若追求 X、视频、社媒 comments 或远程 synthesis，credential、成本、合规与 host 差异会迅速成为主导复杂度 [Source:readme][Source:skill]。

## 代码质量

评分 4/5。

正面证据扎实：项目有锁定的 Python dev toolchain、84% coverage floor、Python coverage/eval 与 Go race-test workflow；本轮隔离执行完整 Python suite 得到 3,598 passed、5 skipped、88.46% coverage，且 exact-HEAD upstream Validate 的 tests/eval/mcp-tests 均成功 [Source:project][Source:workflows][Local:test][GH:actions]。

不打 5 的原因同样明确：三个关键 Python 文件均为数千行，跨来源 adapter 的复杂性高；本轮测试有 112 warnings，明确包含未关闭 sqlite3 connection 的 `ResourceWarning`。而且 live API、browser cookies 与 provider error path 不可能被纯 fixture suite 完全等价覆盖 [Source:local-scan][Local:test][Source:skill]。

## 可扩展性

评分 4/5。

项目把主流程拆到 `scripts/lib/` 的 source/enrichment/rendering 模块，配合 fixture/eval、host manifests、Python engine 和 Go MCP surface；理论上可以新增 source connector、输出 format、health rule、query mode 或 host packaging，而不必推倒整个产品 [Source:local-scan][Source:project][Source:workflows]。

但扩展并非低成本 plugin API：新 source 要同步 skill contract、config、credential boundary、source-status、rendering、tests 与 host-specific behavior。数千行核心模块和长 contract 意味着贡献者要承受相当高的理解/回归负担，故不打 5 [Source:skill][Source:local-scan]。

## 文档质量

评分 4/5。

README、AGENTS、CONTRIBUTING、CONFIGURATION、CHANGELOG、HERMES_SETUP 和 runtime SKILL contract 形成了用户、贡献者、host 与安全边界的多层文档；README 还提供多语言入口、install matrix、配置与输出行为说明 [Source:readme][Source:skill][Source:hermes-setup]。

扣分主要来自信息架构过重：2,255 行 runtime instruction 虽能记录 failure modes 和 host-specific law，却对人类审阅、上下文预算、不同 harness 的一致加载都是负担；#956 正在把这一问题作为公开 issue 讨论 [Source:skill][GH:issues]。

## 社区与成熟度

| 维度 | 评分 | 说明 |
|------|------|------|
| 社区活跃度 | 4/5 | 2026-08-08 snapshot 为 57,644 stars、5,001 forks、72 open issues、33 open PRs；main 在 2026-08-07 仍有提交，近期 PR/CI 活跃。高关注度不等于生产质量，且 community profile 未显示 Code of Conduct 或 security policy [GH:api][GH:community][GH:actions] |
| 成熟度 | 2/5 | 创建于 2026-01，当前最新 release 为 v3.18.4；source/host/security/connector 仍快速变化，近期 issues 也显示多个真实边界在修补 [GH:api][GH:release][GH:issues] |

这里将 open issues 和 open PRs 分开记录；不用 GitHub REST 的 `open_issues_count=105` 直接推断 bug backlog，因为该字段包含 open PRs [GH:api]。

## 安全与风险

评分 3/5。

正面：repo 显式列出 network destinations、cookie consent、planned writes 和不记录 API key 的约束；本轮 `--preflight` 也实际呈现 cookie-off/不读取 browser store 的安全预览。workflow 使用 dependency audit、dependency review、TruffleHog、Scorecard、OSV Scanner 等手段，且本轮 Python dependency audit 未发现 13 个 locked packages 的已知问题 [Source:skill][Local:preflight][Source:workflows][Local:test]。

不能因此打 4：skill 被允许使用 Bash/Read/Write/WebSearch，可接入浏览器 cookie、多种 API key、local service、SQLite 与公开发布；retrieved pages、query text 和 host synthesis 都构成 prompt-/instruction-supply-chain 风险。`security-advisories` 返回空数组只意味着本次未找到 published repository advisory，不代表安全；社区 profile 也未显示公开 security policy [Source:skill][GH:advisories][GH:community]。

实际采用应遵循：固定审阅过的 commit/版本，不在默认生产 profile 裸跑；使用隔离 `$HOME`、独立 output dir、test account 和最小权限 key；禁用 browser-cookie access，除非用户明确同意且能接受泄露边界；永远将生成的 research brief 与公开 library publishing 当成可能外泄的 artifact。仓库自己的 Hermes guide 所述 `--force` scanner-caution 路径尤其应触发人工审阅，而非绕过安全判断 [Source:skill][Source:hermes-setup]。

## 学习价值

很高。它展示了一个有价值的 agent-tool 设计：把一次性 prompt 提升为可执行 engine，并为 source outcome、preflight、tests、eval、release 与多 host packaging 建立明确契约 [Source:skill][Source:workflows][Local:test]。

同样值得反向学习的是边界：2,255 行的 runtime prompt 说明“把所有 failure mode 都塞进 SKILL.md”会侵蚀 context budget；正确方向应是 progressive disclosure、可验证的小型 contract、source-local tests 与最小权限的 default。取其法，不必全盘继承其复杂度。