---


title: "oh-my-claudecode"
created: 2026-05-18
updated: 2026-05-21
type: repository-analysis
repo_url: "https://github.com/Yeachan-Heo/oh-my-claudecode"
category: "ai-programs/ai-harness/ai-plugins"
tags: ["claude-code", "multi-agent", "agent-orchestration", "agent-infrastructure", "hooks", "skills", "mcp", "typescript"]
previous_repo: ""
successor: ""
primary_language: "TypeScript"
license: "MIT"
stars: 34080
forks: 3127
last_checked: 2026-07-13
last_verified: 2026-05-18
evidence: "GitHub API + repository clone/code review + official docs + npm metadata + CLI smoke test + security/advisory check; not deployed in production by Develata"
archived_reason: ""
docker_support: false
gpu_required: false
estimated_cpu: "single core for basic CLI/setup; multiple terminal workers consume one process per spawned agent"
estimated_memory: "low hundreds of MB for OMC itself; real usage dominated by Claude/Codex/Gemini CLI worker processes and project size"
estimated_storage: "npm tarball about 5.3 MB, unpacked about 27.3 MB; repository clone and local .omc/.claude state add project-dependent storage"
status: active
ratings:
  capability: 5
  usability: 4
  performance: 3
  code_quality: 4
  documentation: 4
  community: 5
  maturity: 3
  extensibility: 5
  security: 3
  recommendation: 3
overall_score: 3.9
sources:
  - "[GH] https://github.com/Yeachan-Heo/oh-my-claudecode"
  - "[GH:api] https://api.github.com/repos/Yeachan-Heo/oh-my-claudecode"
  - "[GH:languages] https://api.github.com/repos/Yeachan-Heo/oh-my-claudecode/languages"
  - "[GH:releases] https://api.github.com/repos/Yeachan-Heo/oh-my-claudecode/releases?per_page=10"
  - "[GH:issues] https://api.github.com/search/issues?q=repo%3AYeachan-Heo%2Foh-my-claudecode+type%3Aissue+state%3Aopen"
  - "[GH:prs] https://api.github.com/search/issues?q=repo%3AYeachan-Heo%2Foh-my-claudecode+type%3Apr+state%3Aopen"
  - "[GH:closed-recent] https://api.github.com/search/issues?q=repo%3AYeachan-Heo%2Foh-my-claudecode+type%3Aissue+state%3Aclosed+closed%3A%3E%3D2026-05-01"
  - "[GH:security] https://github.com/Yeachan-Heo/oh-my-claudecode/security/advisories"
  - "[GH:security-guide] https://github.com/Yeachan-Heo/oh-my-claudecode/blob/main/SECURITY.md"
  - "[GH:pkg] https://github.com/Yeachan-Heo/oh-my-claudecode/blob/main/package.json"
  - "[GH:ci] https://github.com/Yeachan-Heo/oh-my-claudecode/blob/main/.github/workflows/ci.yml"
  - "[GH:pr-check] https://github.com/Yeachan-Heo/oh-my-claudecode/blob/main/.github/workflows/pr-check.yml"
  - "[Docs] https://oh-my-claudecode.dev/"
  - "[Docs:ref] https://github.com/Yeachan-Heo/oh-my-claudecode/blob/main/docs/REFERENCE.md"
  - "[Docs:migration] https://github.com/Yeachan-Heo/oh-my-claudecode/blob/main/docs/MIGRATION.md"
  - "[GH:local-scan] local clone /tmp/oh-my-claudecode at tag v4.14.0 / commit 90f1926; commands: git ls-files counts, npx smoke test, npm pack --dry-run"
  - "[NPM] https://registry.npmjs.org/oh-my-claude-sisyphus"
  - "[NPM:oh-my-claudecode] https://registry.npmjs.org/oh-my-claudecode"
  - "[Anthropic] https://docs.anthropic.com/en/docs/claude-code"
  - "[GH:superpowers] https://github.com/obra/superpowers"
  - "[GH:ruflo] https://github.com/ruvnet/claude-flow"
  - "[GH:bmad] https://github.com/bmad-code-org/BMAD-METHOD"
  - "[GH:hermes] https://github.com/NousResearch/Hermes-Agent"
---

# oh-my-claudecode

> Claude Code 的 teams-first 多智能体编排层：把 hooks、skills、commands、MCP tools、tmux workers 与 agent prompts 组织成一个可安装的工程基础设施包。
>
> **状态**: `active` · **总分**: 3.9/5 · **推荐度**: 3/5
> **核验版本**: GitHub tag / npm `oh-my-claude-sisyphus@4.14.0`，GitHub API 快照 2026-05-18

## 一句话总结

oh-my-claudecode 适合已经重度使用 Claude Code、希望把单个 coding agent 扩展成「可分工、可持久、可审查、可调用外部 CLI」工作流的 advanced users；它是强大的复合型 AI plugin，而不是轻量单功能插件。

## 总体评价

oh-my-claudecode 的核心价值不是再做一个 coding agent，而是补 Claude Code 原生交互之外的 orchestration layer：它提供 Team pipeline、tmux CLI workers、specialized agents、workflow skills、hooks、notepad / state / project memory、LSP / AST / Python REPL 工具、MCP server 以及安全模式开关 [GH][Docs:ref]。若把 Claude Code 理解为一个强交互单体 agent，那么 OMC 做的是「工程化多智能体运行时」：把计划、执行、验证、修复、复盘、跨模型咨询和局部自动化全部放到 Claude Code 的技能与 hook 生态中。

它的优势是能力密度极高，并且紧贴真实 agentic coding 痛点：长任务中断、上下文压缩、多人/多模型分工、verification loop、LSP 级代码理解、skills 自动注入、tmux 并行 worker 等。它不是只写 prompt collection，而是 TypeScript CLI + plugin package + docs + workflows + tests 组成的软件项目；GitHub API 快照显示 34k+ stars、3k+ forks、近期 release 与 issue/PR 响应都很活跃，但这些社区指标不等同于生产采用证明 [GH:api][GH:releases][GH:issues][GH:prs]。

短板也来自同一事实：OMC 把很多 power-user 能力压进 Claude Code 的 hook / plugin / shell 环境，attack surface、认知负担、运行复杂度都显著高于普通插件。它需要 Node 20+、Claude Code、可选 tmux / Codex / Gemini CLI，并会在项目中写入 `.omc` / `.claude` / agents / skills / hooks 等状态和配置 [GH:pkg][NPM][Docs:ref]。安全上虽有 `OMC_SECURITY=strict`，但官方安全指南也明确 Python blocklist 不是 OS-level security boundary、agents 之间没有强隔离，hook command 仍需谨慎 [GH:security-guide]。

结论：这是值得重点关注的 Claude Code infrastructure repo，尤其适合研究「agent workflow engineering」；但实际采用时应先从小项目试运行，固定版本，限制外部 LLM / MCP，逐步打开自动化能力。善用则如加一套脚手架；滥用则是把复杂性搬进终端。

## 推荐度：3/5

> 2026-06 推荐度重校准：年轻且高权限，hooks/shell/MCP/update 风险高；应按选择性借鉴/试点而非采用推荐。


oh-my-claudecode 最适合作为 Claude Code advanced users 与小型 agentic-coding 团队的 orchestration layer：当你已经熟悉 Claude Code，并且痛点从「让 agent 写代码」上升到「让多个 agent 分工、保持状态、审查彼此、调用外部模型并可恢复地推进长任务」时，它值得试用。

加分理由是它的 capability 与 extensibility 已经接近顶格；维持 3 而非 4，则是因为 maturity 与 security 不宜高估。项目创建于 2026-01，四个月内已到 v4.14.0、npm 版本数超过 200，说明迭代极快；迁移文档显示部分 agent 命名、plan 触发方式、legacy mode 等仍在调整 [GH:api][NPM][Docs:migration]。这类工具在个人研究和 power-user workflow 中很有价值，但若要进入多人生产仓库，必须先建立版本 pinning、权限边界、外部服务白名单和回滚策略。

## 优势

1. **能力覆盖极广**：Team pipeline、tmux workers、agents、skills、hooks、MCP tools、LSP / AST / Python REPL、notepad / state / project memory 都在同一体系内，覆盖从计划到验证的完整 agent workflow [GH][Docs:ref]。
2. **紧贴 Claude Code 原生生态**：它不是替代 Claude Code，而是围绕 Claude Code 的 plugin、skills、hooks 与 CLI 扩展；这比另起一个 agent runtime 更容易继承 Claude Code 的上下文与操作习惯 [Anthropic][GH]。
3. **工程化程度高**：TypeScript 主体、CI 覆盖 typecheck/test/build/npm-pack、539 个 `.test.ts` 文件、PR size/base checks、CONTRIBUTING 与 SECURITY 文档齐全 [GH:ci][GH:pr-check][GH:pkg]。
4. **可扩展性强**：agents、skills、commands、hooks 与 MCP tools 都是显式文件/模块；新增能力有相对清楚的目录约定与文档入口 [Docs:ref]。
5. **社区信号非常强**：GitHub API 快照显示 34,080 stars、3,127 forks、最近 push 于 2026-05-17；open issue / PR 数量很低且近期闭合记录多，说明维护响应速度快 [GH:api][GH:issues][GH:prs]。

## 劣势

1. **复杂度很高**：它同时引入 hook system、persistent modes、skills auto-injection、tmux workers、MCP、外部 CLI 和多模型路由；新用户很难在 30 分钟内理解所有边界 [Docs:ref]。
2. **安全边界不是强隔离**：官方安全指南承认无 OS-level process sandbox、agents 共享 filesystem / MCP access，Python sandbox 只是 defense-in-depth；这对企业或敏感仓库是硬约束 [GH:security-guide]。
3. **运行成本由 worker 放大**：OMC 自身不需要 GPU，但多 agent / tmux / Codex / Gemini / Claude worker 会显著增加 token、进程、上下文与人类监督成本。
4. **成熟度受快速迭代限制**：四个月内 release 与 npm 版本非常密集，migration 文档包含 breaking / behavioral changes；不适合假设长期稳定 API [GH:releases][NPM][Docs:migration]。
5. **包名与品牌名不一致**：项目名为 oh-my-claudecode，但当前 npm 包名是 `oh-my-claude-sisyphus`；另有 npm 包 `oh-my-claudecode@0.2.8` 指向不同描述，容易误装 [NPM][NPM:oh-my-claudecode]。

---

## 适合什么场景

- 已经重度使用 Claude Code，希望把复杂任务拆成 plan → execute → verify → fix 的 staged workflow。
- 需要多个 specialized agents：architect、planner、executor、verifier、security-reviewer、document-specialist、writer 等 [Docs:ref]。
- 希望让 Codex / Gemini / Claude CLI 在 tmux panes 中并行处理 review、UI、docs、large-context 等任务 [GH][Docs:ref]。
- 想研究 Claude Code hooks、skills、MCP tools、agent prompts 如何组合成一套工程系统。
- 个人或小团队愿意承担 power-user 配置成本，并能接受版本快速迭代。
- 需要在本地工作流中加入 notepad、state、project memory、session recovery、context compaction resilience 等机制。

## 不适合什么场景

- Claude Code 新手，只想要一个简单稳定的 coding assistant。
- 对安全隔离要求很高、不能接受 hook / shell / MCP / external LLM 组合风险的敏感生产仓库。
- 希望所有 agent worker 共享强一致状态、强权限隔离、审计日志和企业级管理后台。
- 无法使用 Node 20+，或没有 tmux / Codex / Gemini CLI 等可选依赖但又想使用 CLI-first team runtime。
- 不愿固定版本、不愿阅读 migration notes，也不能接受 prompt / skill / hook 语义变化。
- 只需要 methodology / prompt discipline；此时 Superpowers 或 BMAD 这类更轻的流程型工具可能更合适 [GH:superpowers][GH:bmad]。

## 与类似项目对比

| 项目 | 定位 | 相对本项目 |
|------|------|-----------|
| oh-my-claudecode | Claude Code teams-first orchestration layer | 当前分析对象；最强项是贴近 Claude Code plugin/hook/skill 生态，把 Team、tmux worker、MCP tools 和 agents 合在一起 |
| Superpowers | agentic skills framework + software development methodology | 更偏跨 harness 的方法论与 skill discipline；OMC 更偏 Claude Code 专用 infrastructure 与 runtime 编排 [GH:superpowers] |
| ruvnet/claude-flow / Ruflo | 更重的 multi-agent orchestration platform，强调 swarms、memory、federation、enterprise features | `ruvnet/claude-flow` 当前页面以 Ruflo 名义呈现；目标面更大、更平台化。OMC 更贴 Claude Code 本地 workflow，部署面较轻但隔离与企业能力也较少 [GH:ruflo] |
| BMAD-METHOD | AI-driven agile development workflows / modules | BMAD 更像结构化产品开发流程与角色体系；OMC 更像运行时脚手架和 Claude Code 增强层 [GH:bmad] |
| Hermes Agent | 自学习、多平台消息入口、技能与记忆闭环的通用 agent | Hermes 是完整 agent runtime / gateway；OMC 是 Claude Code 内部与周边的 orchestration/plugin layer [GH:hermes] |
| Claude Code 原生 | Anthropic 的 terminal / IDE agentic coding tool | OMC 建立在 Claude Code 之上，增强多智能体、hooks、skills 与外部 CLI 编排；不能脱离 Claude Code 使用 [Anthropic][GH] |

注：上述类似项目只做定位级对比，未在本文中按同一 10 维度框架深审；比较结论仅用于帮助选择方向。

---

## 它能做什么

OMC 的能力可以分成六层：

1. **Claude Code plugin / setup layer**：通过 npm 包和 Claude Code marketplace/plugin flow 安装 agents、commands、hooks、skills 和配置；CLI 命令包括 `setup`、`install`、`doctor`、`hud`、`session`、`update` 等 [GH][NPM]。
2. **Team orchestration**：README 与参考文档把 Team 作为 canonical orchestration surface，包含 `team-plan → team-prd → team-exec → team-verify → team-fix` 的 staged pipeline [GH][Docs:ref]。
3. **tmux CLI workers**：`omc team N:codex|gemini|claude "..."` 可启动真实 CLI worker panes，用于 code review、security analysis、UI/docs/large-context 等任务 [GH][Docs:ref]。
4. **specialized agents**：包含 architect、planner、analyst、debugger、executor、verifier、security-reviewer、code-reviewer、test-engineer、writer、document-specialist 等角色 [Docs:ref]。
5. **skills / commands / hooks**：提供 autopilot、ralph、ultrawork、ccg、deep-interview、omc-doctor、project-session-manager 等 skills/commands，并通过 hooks 做 prompt detection、state persistence、recovery、rules injection、context handling 等 [Docs:ref]。
6. **MCP / code intelligence tools**：包含 state、team、notepad、project memory、LSP、AST、Python REPL 等工具；本地源码的 `src/tools/AGENTS.md` 明确列出 12 个 LSP tools、2 个 AST tools 与 Python REPL [Docs:ref]。

capability 给 5/5：在 Claude Code 复合型 AI plugin 这个定义域内，OMC 覆盖从 orchestration 到 persistence、code intelligence、external workers、skills、hooks 的几乎所有预期场景。扣分不放在 capability，而放在 usability、maturity 与 security。

## 运行环境与资源占用

| 场景 | CPU | 内存 | 存储 | 说明 |
|------|-----|------|------|------|
| 最小 | 单核级别即可 | 未实测；通常小于 worker 模式 | npm tarball 约 5.3 MB，unpacked 约 27.3 MB | 只运行 `omc --help`、`setup`、单一 Claude Code session |
| 推荐 | 2-4 cores | 主要由并发 Claude/Codex/Gemini CLI workers、项目规模和 language servers 决定 | package + `.omc` / `.claude` state + project clone | Team / tmux workers / MCP tools / LSP diagnostics 同时使用时 |

- **运行时**：npm metadata 与 package.json 要求 Node `>=20.0.0`；在本机 Linux / Node `v20.19.2` 上，2026-05-18 运行 `npx -y oh-my-claude-sisyphus@latest --version` 返回 `4.14.0` [GH:pkg][NPM][GH:local-scan]。
- **操作系统**：以 Node / shell / Claude Code / tmux 为核心，主要面向 macOS/Linux/WSL 式终端环境；Claude Code 原生支持 terminal / IDE 等环境 [Anthropic]。
- **Docker**：无官方 Docker 镜像；它是本地 Claude Code plugin / CLI 增强层，Docker 不是主要使用路径。
- **GPU**：不需要。
- **外部依赖**：基础包依赖 `@anthropic-ai/claude-agent-sdk`、MCP SDK、better-sqlite3、ast-grep、commander、zod 等；完整体验还可能依赖 Claude Code、tmux、Codex CLI、Gemini CLI、language servers [GH:pkg][Docs:ref]。

performance 给 3/5：OMC 自身作为 TypeScript CLI 并不重，但它的真实工作模式会主动放大并发进程、token 使用、terminal panes、MCP/LSP 工具和状态文件。相对单一 CLI，它不是极轻工具；相对完整 agent platform，它仍算可接受。因此给中位 3，而不是把「能并行」误判为资源效率高。

## 上手体验

评分 4/5。

基础上手不难：npm 包提供 `omc` / `oh-my-claudecode` bin，CLI help 能正常列出 setup、doctor、install、team、hud、session 等命令；README 明确说明 npm 包名与品牌名差异，并给出 update / setup / team 用法 [GH][NPM]。对已经熟悉 Claude Code 的用户，OMC 的比喻很直观：像 oh-my-zsh 一样给 Claude Code 增加 agents、skills、commands 和 hooks。

但 usability 不能给 5。第一，项目名与 npm 包名不一致，新用户容易装错 `oh-my-claudecode` 这个另一个 npm 包；第二，Team、omc team、ccg、ralph、autopilot、ultrawork、MCP、OpenClaw、HUD、project memory 等概念密度高；第三，部分功能要求 tmux、Codex/Gemini CLI、language servers 或 Claude Code settings。它能在一小时内产生价值，但要理解边界与风险，需要认真读文档 [NPM][NPM:oh-my-claudecode]。

## 代码质量

评分 4/5。

代码质量信号很强。仓库主体为 TypeScript，GitHub languages API 显示 TypeScript 约 9.56 MB、JavaScript 约 6.59 MB，并有少量 Shell/Python/Dockerfile [GH:languages]。本地 clone 在 tag `v4.14.0` / commit `90f1926` 上用 `git ls-files` 统计显示：`src/` 下 1048 个 tracked files、`.test.ts` 文件 539 个、agent markdown 19 个、skill 目录 39 个、commands markdown 27 个；CI 包括 typecheck、lint、Vitest、build、版本一致性检查和 npm pack + global install smoke test [GH:local-scan][GH:ci]。PR check 还包括 size label、base branch check 与 draft check [GH:pr-check]。

架构上，项目按 hooks、features、team、tools、agents、skills、commands、templates、docs 分层；多个子目录有 AGENTS.md 说明维护约定。`src/tools/AGENTS.md` 对 LSP / AST / Python REPL 工具、测试要求和扩展步骤描述清楚；`src/hooks/AGENTS.md` 对 hook events、state files、persistent modes 与 Stop hook soft enforcement 有具体说明 [Docs:ref]。

不给 5 的原因是：没有公开覆盖率 ≥80% 的证据；仓库规模和 feature velocity 都很高，复杂度本身会提高维护风险；大量生成/组合型文档与 prompts 也可能产生同步漂移。总体是高质量快速工程项目，但不是稳定小内核。

## 可扩展性

评分 5/5。

OMC 的可扩展性是它最强的部分：

1. **Plugin / skills / commands**：能力以文件化 agents、skills、commands、templates 暴露，适合复制、改写、组合和贡献 [GH][Docs:ref]。
2. **Hooks**：围绕 Claude Code events 做 UserPromptSubmit、Stop、PreToolUse、PostToolUse 等生命周期注入；可实现 keyword detection、rules injection、recovery、persistent modes、permission handling [Docs:ref]。
3. **MCP tools**：提供 OMC State、Team、Notepad、Project Memory、Code Intel 等工具面，扩展面不只是 prompt，而是工具协议级 [Docs:ref]。
4. **外部 CLI worker**：`omc team` 可把 Codex/Gemini/Claude CLI 接入 tmux workers，使 OMC 能利用不同模型/CLI 的能力分工 [GH][Docs:ref]。
5. **配置与安全开关**：`.claude/omc.jsonc` 与 `OMC_SECURITY=strict` 允许按场景开启/限制特性 [GH:security-guide]。

extensibility 给 5/5：与对比表所列项目相比，OMC 在 Claude Code 内部扩展点、外部 worker、MCP tools 与 hooks 组合上的 surface area 非常完整。风险是复杂，不是缺少扩展点。

## 文档质量

评分 4/5。

文档覆盖面很好：官网文档与 README 解释 package naming、Team canonical surface、`omc team` 与 `/team` 的区别、Codex/Gemini interop、setup/update、modes、skills 等；`docs/REFERENCE.md` 收纳 hooks、commands、MCP tools、agents、skills、keyword triggers 等参考内容；`docs/MIGRATION.md` 记录 agent naming、plan trigger、legacy mode 等迁移变化 [Docs][GH][Docs:ref][Docs:migration]。此外，SECURITY、CONTRIBUTING、AGENTS.md 与各子目录 AGENTS.md 形成了相当完整的 contributor-facing docs [GH:security-guide]。

扣分点是信息量过大且处于快速变化中：README、docs、generated AGENTS、plugin metadata、npm 包名、legacy aliases 之间需要持续同步；用户若只看一页，很容易混淆 `/team`、`omc team`、legacy modes 与不同安装路径。documentation 因覆盖面与参考深度给 4，但还没有达到「稳定、短路径、无歧义」的 5。

## 社区与成熟度

| 维度 | 评分 | 说明 |
|------|------|------|
| 社区活跃度 | 5/5 | GitHub API 快照显示 34,080 stars、3,127 forks、126 subscribers；contributors 页面前 10 名之外仍有多人贡献，Search API 快照显示 open issues 3、open PRs 3，2026-05-01 以来 closed issues 56，说明维护响应非常快 [GH:api][GH:issues][GH:prs][GH:closed-recent]。这不是生产采用证明，但满足本框架对“高活跃度、多贡献者、PR/Issue 快速响应”的社区边界。 |
| 成熟度 | 3/5 | 项目创建于 2026-01-09，仍不足半年；v4.14.0 已发布且近十个 release 均为 stable tag，但 npm versions 数量超过 200，迁移文档显示命名、触发方式、legacy modes 仍在变化，符合「快速迭代，偶有破坏性变更」边界 [GH:api][GH:releases][NPM][Docs:migration]。 |

community 与 maturity 必须分开看：OMC 的社区热度和维护响应可以给 5，但成熟度不能被 star count 带高。它像一个正在高速成型的基础设施，而不是经过两年稳定生产验证的标准层。

## 安全与风险

评分 3/5。

正面信号：仓库有 SECURITY.md，提供 `OMC_SECURITY=strict`，可启用 tool path restriction、Python REPL sandbox、remote MCP disable、external LLM disable、auto-update disable、hard max iterations 等安全功能；strict mode 下配置只能 tighten 不能 relax；GitHub Security Advisories 查询为空，但这只表示未发现公开 advisory，不等于经过独立安全审计或不存在未披露漏洞 [GH:security][GH:security-guide]。

但 OMC 的攻击面天然大：它控制 hooks、shell commands、MCP servers、external LLM workers、Python REPL、LSP/AST tools、tmux panes 和自动更新路径。官方安全指南本身也列出关键限制：没有 OS-level process sandbox，Python blocklist 不是独立安全边界；agents 之间没有安全边界，可能共享 filesystem 和 MCP access；MCP processes 继承环境变量；不建议在 Claude Code settings 中设置过宽的 allow 权限；hook command 会以 `shell: true` 执行。再加上全局 npm 安装、自动更新与 hooks 的组合，package identity / supply-chain trust 本身也应纳入风险模型 [GH:security-guide][NPM]。

因此 security 给 3/5：不是因为已知严重漏洞，而是因为它的设计目标就是增强 agent 自动化能力，必须把权限、外部服务、版本更新和 worker 行为视为一等风险。个人项目可接受；企业或敏感代码仓库需要 strict mode、版本 pinning、隔离运行环境和人工审查。

## 学习价值

oh-my-claudecode 很值得研究，尤其对理解下一阶段 agentic coding infrastructure 有启发：

- **Workflow runtime over prompt collection**：它说明 prompt/skill 不是孤立文本，而应和 hooks、state、tools、verification loop 共同构成运行时。
- **Agent roles as software architecture**：architect / planner / executor / verifier / critic 等角色不是装饰，而是在减少单 agent 上下文混杂。
- **Verification as first-class lane**：Team pipeline 与 verifier/critic/code-reviewer 的分离体现了「作者与审查者不能同一上下文自证」的工程原则。
- **Power implies risk**：越能自动化 shell、MCP、外部 LLM 与文件系统，越需要 security mode、scope control 与 rollback discipline。
- **对 Develata 的工具哲学启发**：OMC 不是小而精的单点工具，而是复杂基础设施；判断它时应承认其强大，同时严守边界。大器不可轻用，利器亦需鞘。
