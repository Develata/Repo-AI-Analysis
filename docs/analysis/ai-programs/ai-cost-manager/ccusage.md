---


title: "ccusage"
created: 2026-05-18
updated: 2026-05-21
type: repository-analysis
repo_url: "https://github.com/ryoppippi/ccusage"
category: "ai-programs/ai-cost-manager"
tags: ["ai-cost-management", "token-usage", "coding-agent", "claude-code", "codex-cli", "cli", "typescript"]
previous_repo: ""
successor: ""
primary_language: "TypeScript"
license: "MIT (package/LICENSE); GitHub API SPDX NOASSERTION"
stars: 14287
forks: 560
last_checked: 2026-07-13
last_verified: 2026-05-18
evidence: "GitHub API + repository clone/code review + official docs + npm/deps.dev metadata + CLI smoke test (Node 20 failure matches npm engines; docs drift noted)"
archived_reason: ""
docker_support: false
gpu_required: false
estimated_cpu: "single core is enough for normal local log analysis; large log sets can benefit from worker-based parallel parsing"
estimated_memory: "tens to low hundreds of MB, depending on local log size"
estimated_storage: "npm unpacked package about 360 KB; local source clone about 14 MB plus user agent logs"
status: active
ratings:
  capability: 4
  usability: 4
  performance: 5
  code_quality: 4
  documentation: 4
  community: 4
  maturity: 3
  extensibility: 4
  security: 4
  recommendation: 4
overall_score: 4.0
sources:
  - "[GH] https://github.com/ryoppippi/ccusage"
  - "[GH:api] https://api.github.com/repos/ryoppippi/ccusage"
  - "[GH:languages] https://api.github.com/repos/ryoppippi/ccusage/languages"
  - "[GH:releases] https://api.github.com/repos/ryoppippi/ccusage/releases?per_page=100"
  - "[GH:issues] https://api.github.com/search/issues?q=repo%3Aryoppippi%2Fccusage+type%3Aissue+state%3Aopen"
  - "[GH:prs] https://api.github.com/search/issues?q=repo%3Aryoppippi%2Fccusage+type%3Apr+state%3Aopen"
  - "[GH:security] https://github.com/ryoppippi/ccusage/security/advisories"
  - "[GH:issue-994] https://github.com/ryoppippi/ccusage/issues/994"
  - "[GH:issue-950] https://github.com/ryoppippi/ccusage/issues/950"
  - "[Docs:intro] https://ccusage.com/guide/"
  - "[Docs:install] https://ccusage.com/guide/installation"
  - "[Docs:cli] https://ccusage.com/guide/cli-options"
  - "[Docs:cost] https://ccusage.com/guide/cost-modes"
  - "[Docs:config] https://ccusage.com/guide/config-files"
  - "[Docs:json] https://ccusage.com/guide/json-output"
  - "[Docs:statusline] https://ccusage.com/guide/statusline"
  - "[NPM] https://registry.npmjs.org/ccusage/latest"
  - "[DepsDev] https://api.deps.dev/v3/systems/npm/packages/ccusage/versions/19.0.3"
  - "[Socket] https://socket.dev/npm/package/ccusage"
  - "[GH:better-ccusage] https://github.com/cobra91/better-ccusage"
  - "[GH:claudelytics] https://github.com/nwiizo/claudelytics"
  - "[GH:tokscale] https://github.com/junhoyeo/tokscale"
  - "[GH:claude-hud] https://github.com/jarrodwatts/claude-hud"
---

# ccusage

> 面向 Claude Code、Codex CLI、OpenCode、Amp、pi-agent 等 coding agent 的本地 token / cost 使用量分析 CLI。
>
> **状态**: `active` · **总分**: 4.0/5 · **推荐度**: 4/5
> **核验版本**: npm `ccusage@19.0.3` / GitHub API 快照 2026-05-18

## 一句话总结

ccusage 适合已经重度使用 coding agents、需要从本地日志中看清 token 消耗与估算成本的个人开发者和小团队；它是轻量而高效的「AI 使用额度 / 资费管理」工具，但不是完整的预算审批或云端 FinOps 系统。

## 总体评价

ccusage 的核心价值很明确：不接管模型调用，不做代理层，不上传使用数据，而是读取本机 coding agent 已经生成的日志，把 token、cache token、model、session、day/week/month、5-hour billing block 和 estimated cost 聚合成可读表格或 JSON [Docs:intro][Docs:json]。这使它特别适合 Claude Code / Codex CLI 这类「本地 agent CLI + 订阅或按量费用」场景：你想知道钱花在哪里、哪段 session 最贵、subscription 是否值得、当前 block 是否危险，它就给你一个低摩擦答案。

它的优势在于范式选择正确：**local-first、read-only、small CLI、JSON export**。这比做一个带账号体系的 dashboard 更保守，也更符合个人开发者对隐私和可验证性的需求。它的短板也来自同一边界：它不能统计没有落在本地日志里的 API 调用，cost 只是估算或按来源字段展示，不能替代供应商 billing dashboard；v19 附近还有 rebranding、Node 版本要求变化、legacy package 移除等 breaking changes，成熟度不能给高分 [GH:releases][Docs:cost]。

综合看，它是一个值得纳入工具箱的 cost visibility layer：小而精，能解决真实痛点；但若要做团队级预算、跨云账单、审批、告警、chargeback，它只应作为数据源或个人侧辅助工具。

## 推荐度：4/5

ccusage 最适合作为 coding-agent 用户的 local-first cost visibility CLI：它回答「本机 Claude Code / OpenAI Codex CLI / OpenCode / Amp / pi-agent 日志显示我用了多少 token、估算花了多少钱」，而不是承担完整 FinOps 平台职责。

给 4 分而非 5 分，原因是它在个人 cost visibility 上已经很好：支持多 agent、本地读取、daily/weekly/monthly/session/blocks/statusline、JSON 输出和配置文件；npm 包无 runtime dependencies，unpacked size 约 360 KB，并有 SLSA provenance attestation [NPM][DepsDev]。但它还不是完整 AI cost manager：没有内建预算策略、团队账单归集、审批流、云端同步、供应商账单核对闭环；近期仍有 breaking changes 和若干 token overcount / session total 相关 issue，需要把它理解为快速演进中的 CLI，而非稳定的财务系统 [GH:issue-994][GH:issue-950][GH:releases]。

## 优势

1. **定位非常准**：只做 local usage analysis，不做代理层、不劫持请求、不上传数据；这使它在隐私、安全和维护复杂度上都比较克制 [Docs:intro]。
2. **覆盖主流 coding agent**：官方文档列出 Claude Code、Codex、OpenCode、Amp、pi-agent 的本地数据来源，并默认可做 unified reports [Docs:intro]。
3. **报表维度实用**：daily、weekly、monthly、session、5-hour blocks、statusline、JSON output 覆盖了「复盘」「监控」「脚本集成」三类常见需求 [Docs:cli][Docs:statusline][Docs:json]。
4. **工程上重视轻量与性能**：发布包约 360 KB unpacked、无 npm runtime dependencies；源码中有 adapter architecture、worker 并行处理、typed-array 编码、snapshot 测试与 CI [NPM][GH]。
5. **安全边界较好**：文档明确 100% local、no data transmission、read-only，并可用 Deno permission flags 限制文件与网络权限 [Docs:intro][Docs:install]。

## 劣势

1. **不是完整 FinOps 系统**：没有预算审批、组织级账户映射、发票/账单 reconciliation、自动告警闭环；更像 local observability CLI。
2. **成本只能是 estimate 或来源字段展示**：`auto` / `calculate` / `display` 三种模式各有语义，供应商 pricing 变化、日志缺字段、非 LLM 工具调用都可能造成偏差 [Docs:cost]。
3. **近期破坏性变更多**：v19.0.0 / v19.0.1 包含 rebranding、Node 版本要求、legacy package 移除等 breaking changes，不宜把配置和输出格式视为长期稳定 API [GH:releases]。
4. **运行时门槛比 README 直觉略高**：当前 npm 包要求 Node >=22.0.0；本机 Node v20.19.2 下 `npx ccusage@latest --version` 直接失败，符合包约束但会影响旧环境用户 [NPM]。
5. **对真实 billing 的覆盖有天然边界**：只分析本地 agent 数据；Web Search 等非 language model token、非本机调用、供应商账单折扣/套餐规则未必完全进入统计 [Docs:intro]。

---

## 适合什么场景

- 个人开发者想知道 Claude Code / Codex / OpenCode 最近到底消耗了多少 token 和估算费用。
- 重度订阅用户想判断 Max / Pro / API pay-as-you-go 是否划算。
- 想按 day/week/month/session/block 复盘 coding agent 使用强度。
- 想把 usage 数据导出 JSON，接入自己的脚本、dashboard、日报或 tree-wiki 复盘 [Docs:json]。
- 想在 Claude Code statusline 中看到 session cost、today cost、block cost、burn rate、context usage 等实时信息 [Docs:statusline]。
- 小团队需要低成本建立 agent usage visibility，但暂时不需要正式 FinOps 流程。

## 不适合什么场景

- 需要精确等同供应商账单的财务对账。
- 需要组织级账户、项目、成本中心、审批、预算上限、自动停用的团队治理。
- 希望统计所有 LLM API 调用，包括服务端调用、Web Search、MCP 外部服务、非本机 agent 日志。
- 运行环境只能使用 Node 20 且不能安装 Bun / Node 22。
- 需要长期稳定 public API / 输出 schema，并且不能接受近期快速迭代导致的 breaking changes。

## 与类似项目对比

| 项目 | 定位 | 相对本项目 |
|------|------|-----------|
| ccusage | local-first coding-agent token/cost CLI | 当前分析对象；轻量、隐私边界好、覆盖 Claude/Codex/OpenCode/Amp/pi-agent |
| better-ccusage | ccusage fork，强调多 provider / Droid / OpenCode 扩展 | 更偏「扩展 provider 支持」，但继承 fork 关系和维护分叉成本 [GH:better-ccusage] |
| claudelytics | Rust Claude Code usage analytics / TUI | 更偏 Claude Code 专用 TUI 和实时界面；ccusage 的多 agent 与 JSON/script 集成更直接 [GH:claudelytics] |
| tokscale | 多 agent token tracking + Rust TUI + social/leaderboard/dashboard | 覆盖面与可视化更激进；ccusage 更克制、更本地、更像 CLI primitive [GH:tokscale] |
| Claude HUD | Claude Code statusline plugin | 更偏 session state / context / tool activity；ccusage statusline 更聚焦 cost 与 token usage [GH:claude-hud] |

---

## 它能做什么

ccusage 的能力可以分为五层：

1. **数据源检测与读取**：读取 Claude Code、Codex、OpenCode、Amp、pi-agent 的本地数据目录；支持默认路径、环境变量和自定义路径 [Docs:intro][Docs:config]。
2. **聚合报表**：按 day、week、month、session、5-hour blocks 聚合 token 和 cost；支持 `--since`、`--until`、timezone、project / instance grouping [Docs:cli]。
3. **成本计算模式**：支持 `auto`、`calculate`、`display`。`auto` 优先使用来源已有 cost 字段并在缺失时按 token + pricing 计算；`calculate` 强制按 token 计算；`display` 只显示来源已给出的成本 [Docs:cost]。
4. **输出与集成**：支持 human-readable table、compact table、JSON output，适合脚本和 dashboard 后处理 [Docs:json]。
5. **实时状态线**：`statusline` 可接入 Claude Code statusLine，显示当前 model、session/today/block cost、burn rate、context usage 等；官方标注为 Beta [Docs:statusline]。

能力广度给 4/5：它覆盖了个人与小团队 cost visibility 的主要场景，但不包含团队预算治理、账单核验、告警和审批。

## 运行环境与资源占用

| 场景 | CPU | 内存 | 存储 | 说明 |
|------|-----|------|------|------|
| 最小 | 单核 | tens of MB 级别 | npm 包约 360 KB unpacked | 小型本地日志，直接 `bunx ccusage` 或 `npx ccusage@latest` |
| 推荐 | 1-2 cores | tens to low hundreds of MB | 本地 agent logs + cache | 大量 JSONL / 多 agent 数据时依赖 worker/file-scan 优化 |

- **运行时**：npm 包要求 Node >=22.0.0；README 推荐 `bunx ccusage`，并说明检测到 Bun 时可自动 re-run bundled entrypoint 以改善 warm runtime performance [NPM][GH]。
- **操作系统**：Node/Bun/Deno 可运行的平台；Deno 示例给出显式权限参数 [Docs:install]。
- **Docker**：无官方 Docker 镜像；由于它是读取用户本机 agent 日志的 CLI，这不是主要使用场景，但在可部署服务意义上不提供 Docker support。
- **GPU**：不需要。
- **外部依赖**：发布包 metadata 显示无 npm runtime dependencies；成本计算在线模式会访问 pricing 数据源，offline mode 可用缓存 pricing [NPM][Docs:cost]。

performance 给 5/5：它作为 CLI 的资源模型非常轻，发布包小、无 runtime deps、只读本地文件；源码中可见 worker 并行处理、line scanning、Float64Array / Uint8Array 编码等面向大 JSONL 的优化路径 [NPM][GH]。这里的 5 是相对同类 usage analyzer 的资源效率评分，不表示它有独立 benchmark 证明所有场景最快。

## 上手体验

评分 4/5。

理想环境下，上手路径很短：`bunx ccusage`、`pnpm dlx ccusage`、`npx ccusage@latest` 都是官方推荐用法；默认会检测本地数据源并输出 daily report，常见筛选参数也比较直觉 [GH][Docs:install][Docs:cli]。文档还提供 config file、schema、source-specific defaults，适合长期使用时固定 timezone、breakdown、json 等选项 [Docs:config]。

扣分点主要是 runtime drift：当前 npm 包要求 Node >=22.0.0，而本机 Node v20.19.2 下 `npx ccusage@latest --version` 会失败；这与 npm `engines` 字段一致，但和官方安装文档中仍可见的 Node 20 相关描述不完全一致 [Docs:install][NPM]。因此 usability 仍给 4，但要把第一次运行的不确定性计入扣分。

## 代码质量

评分 4/5。

代码结构是清楚的 monorepo：`apps/ccusage` 为主 CLI，`packages/internal` 和 `packages/terminal` 承担内部工具与终端表格；源码有 agent adapter architecture 文档，将 source detection、file loading、record parsing、aggregation、worker return 等层次分开 [GH]。根目录和 package 级 `CLAUDE.md` / `AGENTS.md` 对开发约束写得很细，包含 logger、local import、Vitest、format/typecheck/test 等规则。

测试层面，有 Vitest 配置、CLI output snapshot、fixture JSONL、statusline test JSON，CI workflows 包括 ci、release、perf、PR/issue gate 等 [GH]。代码质量不能给 5 的原因：没有看到覆盖率 ≥80% 的公开证据；项目近期 v19 做过较大 rebranding / adapter foundation 统一 / legacy package 移除，主线仍在快速重构；open issues 中仍有 session total overcount、Codex token overcount 等与核心统计正确性相关的报告 [GH:issue-994][GH:issue-950]。

## 可扩展性

评分 4/5。

ccusage 的扩展性主要来自三点：

1. **Adapter architecture**：agent-specific 逻辑集中在 `apps/ccusage/src/adapter/<agent>/`，文档明确各 adapter 应负责 paths、parser/loader、schema、pricing、types 等分层 [GH]。
2. **JSON output**：所有主要 report 支持结构化 JSON，便于接入脚本、dashboard、定期任务或自己的分析系统 [Docs:json]。
3. **配置文件与 schema**：支持 user / project config、source-specific config、commands overrides，并提供 JSON schema [Docs:config]。

不给 5 的原因是它没有稳定插件系统或第三方 extension API；新增 agent 仍需要改源码、走 repository contribution flow。它的扩展性对维护者和 fork 作者很友好，对普通用户则主要体现在配置和 JSON 后处理。

## 文档质量

评分 4/5。

文档站覆盖 introduction、installation、daily/weekly/monthly/session/blocks/all reports、Claude/Codex/OpenCode/Amp/pi-agent data sources、CLI options、environment variables、config files、cost modes、JSON output、statusline 等主题，信息架构相当完整 [Docs:intro][Docs:cli][Docs:config][Docs:json][Docs:statusline]。

扣分点是文档与最新发布之间存在轻微漂移：安装页提到 Node 20.x，而当前 npm metadata 为 Node >=22.0.0；CLI options 文档仍出现 `blocks --live` 示例，但 v19 附近 release notes 已出现移除 deprecated live monitor 的 breaking change [Docs:install][Docs:cli][GH:releases]。documentation 因主题覆盖完整仍给 4，但这些漂移说明快速迭代已经超过部分页面的同步节奏。

## 社区与成熟度

| 维度 | 评分 | 说明 |
|------|------|------|
| 社区活跃度 | 4/5 | GitHub API 快照显示 14,287 stars、560 forks；公开页面/搜索结果显示 contributors 与 issue/PR 讨论都很活跃，API 搜索显示 39 open issues、36 open PRs；项目 pushed 于 2026-05-17，release 很频繁 [GH:api][GH:issues][GH:prs][GH:releases]。但贡献门槛较强，新 contributor issue/PR 默认可能被 gate，不能视为完全开放的大型社区 [GH]。 |
| 成熟度 | 3/5 | 项目创建于 2025-05-29，不到一年；已有大量 release 和真实用户，但 v19.0.0 / v19.0.1 包含 rebranding、Node requirement、legacy package removal、API/export changes 等 breaking changes，符合「快速迭代，偶有破坏性变更」边界 [GH:api][GH:releases]。 |

## 安全与风险

评分 4/5。

安全面较好：ccusage 设计为 local-first、read-only，不上传本地 usage 数据；官方文档明确 no data transmission，并给出 Deno permission flags 作为更强隔离方式 [Docs:intro][Docs:install]。GitHub Security Advisories 页面显示没有 published advisories；deps.dev 对 `ccusage@19.0.3` 未列 advisory，并显示 SLSA provenance attestation verified [GH:security][DepsDev]。npm metadata 显示无 runtime dependencies，供应链面比大量依赖 CLI 更小 [NPM]。

风险主要有三类：第一，它读取本地 coding agent 日志，日志可能包含路径、项目名、模型名、成本等敏感元数据；第二，在线 pricing 更新需要网络访问，若非常保守可使用 offline mode；第三，仓库没有单独 `SECURITY.md`，漏洞报告流程不如大型项目规范 [GH][Docs:cost]。security 给 4 的前提是默认本地只读、无 runtime dependencies 和公开 advisory 为空；若用于团队共享日志或自动上传报表，应另做敏感信息脱敏与权限控制。

## 学习价值

ccusage 值得学习的不是复杂算法，而是工程边界感：

- **Local-first cost observability**：先读本地事实，不先建平台；所见即所得，少一层信任假设。
- **Adapter pattern for messy logs**：不同 agent 的日志格式、路径、pricing 都不一致，用 adapter 层隔离差异是合理工程抽象。
- **CLI as primitive**：human table + JSON output + config schema，使它既能给人看，也能被其他程序消费。
- **性能不是口号**：小包体、无 runtime deps、worker 并行处理、line scanning，都是对 CLI 工具「启动快、少打扰」原则的贯彻。

从 Develata 的工具哲学看，它是典型的小而精：不是把所有 cost governance 都吞掉，而是在一个窄边界内把事实呈现做好。知止而后有定。