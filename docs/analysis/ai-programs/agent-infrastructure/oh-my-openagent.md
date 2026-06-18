---


title: "oh-my-openagent"
created: 2026-05-18
updated: 2026-05-21
type: repository-analysis
repo_url: "https://github.com/code-yeongyu/oh-my-openagent"
category: "ai-programs/agent-infrastructure"
tags: ["opencode", "agent-orchestration", "multi-agent", "coding-agent", "mcp", "hooks", "skills", "typescript"]
previous_repo: ""
successor: ""
primary_language: "TypeScript"
license: "SUL-1.0 / GitHub NOASSERTION; exact commercial/distribution limits require license review"
stars: 58372
forks: 4731
last_checked: 2026-05-18
last_verified: 2026-05-18
evidence: "GitHub API + GitHub issue/PR search + repository clone/local scan + official docs + npm registry metadata + security advisory check; not deployed in production by Develata"
archived_reason: ""
docker_support: false
gpu_required: false
estimated_cpu: "single core for plugin/CLI itself; multi-agent/team-mode use scales with OpenCode sessions, tmux panes, MCP servers, and external model CLIs"
estimated_memory: "low-to-moderate for plugin process; practical usage dominated by concurrent OpenCode/agent sessions, repo size, LSP/AST-grep tooling, and provider SDK clients"
estimated_storage: "npm unpacked package about 8.7 MB for v4.2.2; local state/config under OpenCode/OmO paths and optional worktrees are project-dependent"
status: active
ratings:
  capability: 5
  usability: 3
  performance: 3
  code_quality: 4
  documentation: 4
  community: 5
  maturity: 2
  extensibility: 5
  security: 2
  recommendation: 3
overall_score: 3.6
sources:
  - "[GH] https://github.com/code-yeongyu/oh-my-openagent"
  - "[GH:api] https://api.github.com/repos/code-yeongyu/oh-my-openagent queried 2026-05-18"
  - "[GH:languages] https://api.github.com/repos/code-yeongyu/oh-my-openagent/languages queried 2026-05-18"
  - "[GH:releases] https://api.github.com/repos/code-yeongyu/oh-my-openagent/releases?per_page=10 queried 2026-05-18"
  - "[GH:issues] https://api.github.com/search/issues?q=repo%3Acode-yeongyu%2Foh-my-openagent+type%3Aissue+state%3Aopen queried 2026-05-18; total_count=313"
  - "[GH:prs] https://api.github.com/search/issues?q=repo%3Acode-yeongyu%2Foh-my-openagent+type%3Apr+state%3Aopen queried 2026-05-18; total_count=256"
  - "[GH:closed-recent] https://api.github.com/search/issues?q=repo%3Acode-yeongyu%2Foh-my-openagent+type%3Aissue+state%3Aclosed+closed%3A%3E%3D2026-05-01 queried 2026-05-18; total_count=251"
  - "[GH:merged-recent] https://api.github.com/search/issues?q=repo%3Acode-yeongyu%2Foh-my-openagent+type%3Apr+state%3Aclosed+merged%3A%3E%3D2026-05-01 queried 2026-05-18; total_count=173"
  - "[GH:advisories] https://api.github.com/repos/code-yeongyu/oh-my-openagent/security-advisories?per_page=20 queried 2026-05-18; returned []"
  - "[GH:contributors] https://api.github.com/repos/code-yeongyu/oh-my-openagent/contributors?per_page=1&anon=false queried 2026-05-18; pagination last page 233"
  - "[GH:security-search] https://api.github.com/search/issues?q=repo%3Acode-yeongyu%2Foh-my-openagent+security queried 2026-05-18; example results include issue #3740, PR #3730, PR #3462, issue #3887"
  - "[GH:telemetry-search] https://api.github.com/search/issues?q=repo%3Acode-yeongyu%2Foh-my-openagent+telemetry queried 2026-05-18"
  - "[GH:local-scan] local clone /tmp/oh-my-openagent at commit 37bd866c32b1d140526967b51b8c8957e9daed83 on branch dev; commands: git ls-files counts (2489 files, 2132 TS/TSX, 732 test/spec), package.json inspection, workflow/docs/license scan, find SECURITY*/Dockerfile/docker-compose (0 Docker files, no root SECURITY.md)"
  - "[GH:pkg] https://github.com/code-yeongyu/oh-my-openagent/blob/dev/package.json"
  - "[GH:readme] https://github.com/code-yeongyu/oh-my-openagent/blob/dev/README.md"
  - "[GH:ci] https://github.com/code-yeongyu/oh-my-openagent/blob/dev/.github/workflows/ci.yml"
  - "[GH:license] https://github.com/code-yeongyu/oh-my-openagent/blob/dev/LICENSE.md"
  - "[GH:release-process] https://github.com/code-yeongyu/oh-my-openagent/blob/dev/docs/reference/release-process.md"
  - "[Docs] https://ohmyopenagent.com/docs"
  - "[Docs:installation] https://github.com/code-yeongyu/oh-my-openagent/blob/dev/docs/guide/installation.md"
  - "[Docs:overview] https://github.com/code-yeongyu/oh-my-openagent/blob/dev/docs/guide/overview.md"
  - "[Docs:orchestration] https://github.com/code-yeongyu/oh-my-openagent/blob/dev/docs/guide/orchestration.md"
  - "[Docs:team-mode] https://github.com/code-yeongyu/oh-my-openagent/blob/dev/docs/guide/team-mode.md"
  - "[Docs:configuration] https://github.com/code-yeongyu/oh-my-openagent/blob/dev/docs/reference/configuration.md"
  - "[Docs:cli] https://github.com/code-yeongyu/oh-my-openagent/blob/dev/docs/reference/cli.md"
  - "[Docs:known-issues] https://github.com/code-yeongyu/oh-my-openagent/blob/dev/docs/reference/known-issues.md"
  - "[Docs:privacy] https://github.com/code-yeongyu/oh-my-openagent/blob/dev/docs/legal/privacy-policy.md"
  - "[Docs:terms] https://github.com/code-yeongyu/oh-my-openagent/blob/dev/docs/legal/terms-of-service.md"
  - "[NPM:openagent] https://registry.npmjs.org/oh-my-openagent queried 2026-05-18; latest=4.2.2, versions_count=38, unpackedSize=8671466"
  - "[NPM:opencode] https://registry.npmjs.org/oh-my-opencode queried 2026-05-18; latest=4.2.2, versions_count=213, unpackedSize=8671442"
---

# oh-my-openagent

> OpenCode 的 batteries-included 多模型、多智能体 orchestration harness：把 hooks、skills、MCP、LSP/AST 工具、background agents、team mode 与模型路由压成一个可安装的 coding-agent infrastructure 包。
>
> **状态**: `active` · **总分**: 3.6/5 · **推荐度**: 3/5
> **核验版本**: GitHub dev commit `37bd866c32b1d140526967b51b8c8957e9daed83`；GitHub API / npm registry 快照 2026-05-18

## 一句话总结

oh-my-openagent 适合已经重度使用 OpenCode、愿意承担高复杂度配置与安全边界管理、希望把单个 coding agent 扩展成多模型协作团队的 advanced users；它很强，但不是稳态轻量工具。

## 总体评价

oh-my-openagent 的价值在于把 OpenCode 从一个交互式 coding agent host 推向 agent workflow runtime：内置 Sisyphus、Hephaestus、Prometheus、Atlas、Oracle、Librarian、Explore 等 11 个 agents，以 category/model fallback 的方式把 Claude、GPT、Gemini、Kimi、GLM、Copilot 等 provider 能力组织成不同角色 [Docs:overview][Docs:orchestration]。它不是“又一个 prompt collection”，而是 TypeScript plugin + CLI + hooks + MCP + tools + docs + CI + release workflow 组成的工程系统。它当前处于 `oh-my-opencode` → `oh-my-openagent` 迁移期；官方安装/配置文档分别说明 dual-published、legacy entries still load with warning、config basenames 两者都识别 [Docs:installation][Docs:configuration]。

能力面非常密：官方 overview 将 `ultrawork` 描述为会 explore codebase、research patterns、implement feature、verify diagnostics 的入口；这里应理解为 documented workflow claim，而不是本次实测保证。Prometheus 负责 interview-style planning，Atlas 负责执行编排，Team Mode 可启用 up to 8 members、12 个 `team_*` tools、可选 tmux visualization；LSP 与 AST-grep 作为 built-in MCP/tooling 进入 agent 工具箱 [Docs:overview][Docs:orchestration][Docs:team-mode]。这使它很适合研究“agentic coding 的工程化外骨骼”：如何用 hooks 约束 agent，如何用 notepad/state 保留上下文，如何把模型选择从人工切换变成 category routing。

但它的风险也来自同一结构。安装文档默认建议“让 LLM agent 安装”，并要求根据 Claude/OpenAI/Gemini/Copilot/Z.ai/Kimi/Vercel 等订阅组合生成 flags；匿名 telemetry 默认开启；包名处于 `oh-my-opencode` 到 `oh-my-openagent` 的 rename transition；GitHub API 快照显示 313 open issues、256 open PRs，近期 bug 与兼容性问题密集；repo 未见 `SECURITY.md`，但产品会运行 hooks、MCP、shell-like tools 与外部 provider 配置 [Docs:installation][Docs:privacy][GH:issues][GH:prs][GH:local-scan]。

结论：这是一个值得重点观察和实验的 OpenCode agent infrastructure repo，尤其适合 Develata 研究多智能体 coding workflow、模型路由与工具 harness；但它不适合保守生产环境直接全量启用。正确使用时，它能把多模型、多工具、多角色分工组织成 workflow；错误使用时，它会把 agent、provider、shell、MCP 与本地仓库的复杂性聚成一团。

## 推荐度：3/5

> 2026-06 推荐度重校准：maturity=2、security=2，标准安全流程不足且 rename/version churn 明显。


对目标用户——已经熟悉 OpenCode、希望把复杂 coding work 拆成 planning / delegation / execution / verification / review 的 power users——推荐度是 3/5。

给 3 而不是 4 的理由很明确：capability 与 extensibility 已经接近顶格，但 maturity 和 security 明显不能顶格。项目创建于 2025-12，默认分支为 `dev`，2026-05-18 同日就有 v4.2.0、v4.2.1、v4.2.2 三个 release；npm `oh-my-opencode` 已有 213 个版本，`oh-my-openagent` 也已有 38 个版本；官方 docs 明确还在 rename transition，known issues 也记录了 delegate-task fallback 的近期 blocker 历史 [GH:api][GH:releases][NPM:opencode][NPM:openagent][Docs:configuration][Docs:known-issues]。

所以它值得试用、值得分析、值得从中学习 agent workflow engineering；但采用策略应是：固定版本，小仓库试运行，禁用或理解 telemetry，先只启用必要 provider，逐步打开 Team Mode / MCP / hooks / background agents。勿以“高星 + 高能”误认为“稳定 + 安全”。

## 优势

1. **能力密度极高**：多 agent、model routing、background agents、Team Mode、LSP/AST-grep、built-in MCPs、hash-anchored edit、todo enforcer、tmux integration 等被统一放进一个 OpenCode plugin/runtime 体系 [Docs:overview][Docs:orchestration][Docs:team-mode]。
2. **真实面向 agentic coding 的痛点**：它处理的不是单轮补全，而是复杂任务中的计划、委派、验证、继续推进、上下文压缩、fallback 与 worker 协调 [Docs:orchestration][Docs:known-issues]。
3. **工程化程度强**：TypeScript 主体，local scan 显示 2489 tracked files、2132 个 TS/TSX 文件、732 个 test/spec 文件；CI 覆盖 bun test、typecheck、build、dist verification 与 release draft [GH:local-scan][GH:ci]。
4. **可扩展性强**：agents、categories、fallback models、permissions、MCP env allowlist、skills、commands、hooks、Team Mode config 都有显式配置面 [Docs:configuration][Docs:team-mode]。
5. **可见社区动能极强**：GitHub API 快照显示 58.3k stars、4.7k forks、约 233 contributor pages，近半月 closed issues 与 merged PR 很多，说明项目处于高强度维护状态；但项目半年内达到超高 star 数也应作为异常增长信号谨慎看待，不能把 stars 直接等同于质量或真实生产采用 [GH:api][GH:contributors][GH:closed-recent][GH:merged-recent]。

## 劣势

1. **复杂度很高**：安装时需要确认多个 provider/subscription，配置层有 user/project path、rename compatibility、agent/category/model/fallback/permission 等多套概念；新手很难一次性建立正确心智模型 [Docs:installation][Docs:configuration]。
2. **稳定性受快速迭代限制**：同日多 release、npm 版本密集、known issues 与近期 bug issue 表明接口和行为仍在高速变化 [GH:releases][NPM:opencode][Docs:known-issues][GH:issues]。
3. **安全边界偏软**：没有根目录 `SECURITY.md`，GitHub Security Advisories 查询为空只能说明没有公开 advisory；插件会接触 shell、MCP、tokens、provider credentials、project files 与 hooks，风险来自能力面本身 [GH:advisories][GH:local-scan][Docs:configuration]。
4. **包名/品牌迁移带来混乱**：docs 同时提到 `oh-my-openagent` 与 `oh-my-opencode`，CLI binary 仍有兼容名称；配置文档说明 legacy `oh-my-opencode.*` 与新 `oh-my-openagent.*` 都会被识别，且同目录下 legacy basename 当前优先，这会带来迁移期歧义 [Docs:installation][Docs:configuration][NPM:openagent][NPM:opencode]。
5. **README 营销噪声较重**：README 包含大量 testimonials、强口号和 provider-lock-in 叙事；判断项目质量时必须回到 docs、issue、CI、package 和源码，而不是被叙事牵引 [GH:readme][Docs:overview]。

---

## 适合什么场景

- OpenCode power users，希望把一个 agent 扩展成多角色、多模型、多工具的 coding workflow。
- 复杂软件任务：先 interview/plan，再拆给 executor、researcher、reviewer、visual worker 或 Team Mode members [Docs:orchestration][Docs:team-mode]。
- 研究 agent harness：hooks 如何塑造行为，MCP 如何接入工具，LSP/AST-grep 如何提高代码编辑可靠性。
- 个人或小团队愿意接受高配置成本，并能建立版本 pinning、权限控制、日志审计与回滚策略。
- 想比较 Claude-first、GPT-native、Gemini visual、Kimi/GLM fallback 等模型角色分工的实践者 [Docs:overview][Docs:configuration]。

## 不适合什么场景

- OpenCode/terminal coding agent 新手，只想要稳定、少配置、低惊吓的 coding assistant。
- 敏感代码库、生产凭证很多、缺少 sandbox/审计能力的环境。
- 不能接受默认 telemetry opt-out 模式的组织；虽可关闭，但需要显式设置环境变量 [Docs:installation][Docs:privacy]。
- 需要稳定 API/长期兼容承诺的企业平台；当前 release churn 和 open issue/PR 数量都不支持这种假设 [GH:releases][GH:issues][GH:prs]。
- 不愿管理多个模型 provider、API keys、订阅、MCP servers、tmux/worktree 等复杂外部依赖的用户。

## 与类似项目对比

| 项目 | 定位 | 相对本项目 |
|------|------|-----------|
| OpenCode | coding agent host / TUI | oh-my-openagent 是 OpenCode 之上的 orchestration harness，不是基础 host |
| Claude Code | Claude-first coding agent | oh-my-openagent 更强调 multi-provider / multi-model，不锁定单一 provider |
| Codex CLI | GPT-native coding CLI | oh-my-openagent 把 GPT 作为多角色体系的一部分，而不是单一 worker |
| oh-my-claudecode | Claude Code 的 agent infrastructure layer | 两者都属于 agent infrastructure；oh-my-openagent 的主场是 OpenCode 与 multi-provider routing |
| LangChain / LangGraph | Agent/LLM application framework | LangChain 是面向开发者构建 agent apps 的库；oh-my-openagent 是面向 coding workflow 的 runtime/harness |

上述项目只做定位级对比，未按同一 10 维度框架深审。

---

## 它能做什么

capability 评分 5/5。理由是它覆盖了 OpenCode agent infrastructure 的几乎所有重要维度：

- **Agent roles**：Sisyphus orchestrator、Hephaestus GPT-native worker、Prometheus planner、Atlas executor、Oracle、Librarian、Explore、Metis、Momus、multimodal-looker、sisyphus-junior 等 11 个 built-in agents [Docs:overview][Docs:orchestration]。
- **Model/category routing**：通过 agent settings、categories、fallback_models、variant、reasoningEffort、textVerbosity 等配置，把任务路由到不同 provider/model [Docs:configuration]。
- **Team Mode**：默认关闭；启用后提供 12 个 `team_*` tools、lead/member 模型、mailbox、shared task list、最多 8 members、可选 tmux visualization 与 worktree path [Docs:team-mode]。
- **CLI**：`install`、`doctor`、`run`、`get-local-version`、`refresh-model-capabilities`、`boulder`、`mcp oauth` 等命令 [Docs:cli]。
- **Tools / MCP**：README 与 docs 描述 LSP、AST-grep、built-in MCPs、skill-embedded MCPs、Hash-Anchored Edit Tool、background agents、tmux integration [GH][Docs:overview]。
- **Operational features**：known issues、release process、doctor checks、config schema、privacy/terms 文档显示它已经不是纯实验脚本 [Docs:known-issues][GH:release-process][Docs:privacy][Docs:terms]。

这里的 5 是“能力广度达到同类顶层”，不是“每个能力都稳定、易用、安全”。稳定性和风险分别由 maturity/security 扣分。

## 运行环境与资源占用

| 场景 | CPU | 内存 | 存储 | 说明 |
|------|-----|------|------|------|
| 最小 | 单核足够 | 低到中等 | npm v4.2.2 unpacked about 8.7 MB | 仅 plugin/CLI 与单个 OpenCode session；实际还需要 OpenCode 与 provider auth [NPM:openagent][Docs:installation] |
| 推荐 | 多核更合适 | 中等到较高 | 项目状态、logs、worktrees、model cache 依配置增长 | Team Mode、background agents、LSP/AST-grep、tmux panes、多个 OpenCode sessions 会放大资源与 token 成本 [Docs:team-mode][GH:local-scan] |

- **运行时**：安装推荐 Bun；CLI ships standalone binaries，安装后 CLI 执行不要求 Bun/Node runtime，但构建和开发使用 Bun/TypeScript [Docs:installation][GH:pkg]。
- **操作系统**：文档列出 macOS、Linux、Windows 共 11 个 platform binaries，包括 x64/ARM64/musl/baseline variants [Docs:installation][GH:pkg]。
- **Docker**：本次 local scan 未发现 Dockerfile / docker-compose 文件；它的核心形态是本地 coding-agent plugin/CLI，不是 server app [GH:local-scan]。
- **GPU**：不要求 GPU；推理在外部模型 provider 或用户本地模型侧。
- **外部依赖**：OpenCode、model providers、可选 tmux/git/worktrees、MCP servers、provider credentials、PostHog telemetry endpoint [Docs:installation][Docs:team-mode][Docs:privacy]。

performance 评分 3/5。本次未运行基准测试，因此这里评的是资源效率/operational cost，而不是实测 latency。oh-my-openagent 自身不像 Web 平台那样常驻重服务，npm unpacked size 也不大；但它的“有效运行成本”由并发 agents、外部 model calls、tmux sessions、LSP/AST-grep、worktrees 与 MCP 放大。资源效率不能按轻量 CLI 估计，只能按 multi-agent orchestration harness 估计。

## 上手体验

评分 3/5。

它有 installer、doctor、CLI reference、configuration reference，甚至安装文档直接为 LLM agent 提供流程；这能降低 power-user 的启动成本 [Docs:installation][Docs:cli][Docs:configuration]。但从普通用户角度看，上手不轻：

- 需要先理解 OpenCode。
- 安装前要确认 Claude/OpenAI/Gemini/Copilot/OpenCode Zen/Z.ai/Kimi/Vercel 等订阅组合 [Docs:installation]。
- 包名、CLI、plugin registration 与 config basename 处于 rename transition，`oh-my-openagent` 与 `oh-my-opencode` 并存 [Docs:installation][Docs:configuration]。
- 默认 telemetry 需要用户主动 opt out [Docs:privacy]。
- Team Mode、categories、fallback models、permissions、MCP env allowlist 等配置项很多 [Docs:configuration][Docs:team-mode]。

所以它对熟练用户可能是 4，对新手大约是 2；综合给 3。

## 代码质量

评分 4/5。

正面信号很强：local clone 显示 2489 tracked files、2132 个 TS/TSX 文件、732 个 test/spec 文件；源码目录按 agents、hooks、features、tools、shared、plugin、cli、mcp、config 等拆分，CI 执行 bun test、typecheck、build、dist verification，并有 release draft 流程 [GH:local-scan][GH:ci]。`package.json` 中 build/test/typecheck scripts 明确，且有平台二进制、schema generation、model capability refresh 等工程化流程 [GH:pkg]。

但不给 5：

- 项目结构极大，hooks/features/tools 数量多，认知复杂度高。
- 默认分支 `dev` 快速演进，Open issues / PRs 很多，近期仍有 plugin load、prompt fallback、tmux pane、SIGINT/SIGTERM、dependency publishing 等 bug 信号 [GH:issues][Docs:known-issues]。
- 未在本次分析中完整运行 test suite；评分依据是 repo-local scan 与 CI 配置，而不是本机全量验证 [GH:local-scan][GH:ci]。

因此代码质量可评 4：工程实践成熟，但复杂度和快速变动使它未达“清晰稳定、可长期维护性极佳”的 5。

## 可扩展性

评分 5/5。

这是它最强的维度之一。配置参考显示 agents、categories、fallback models、per-agent tools、permissions、prompt replacement/append、provider options、MCP env allowlist 等都可配置 [Docs:configuration]。Team Mode 本身就是扩展协作拓扑的机制：teams、members、mailbox、shared task list、worktrees、tmux visualization 都可配置 [Docs:team-mode]。README 与 overview 还描述 Claude Code compatibility、skills、commands、hooks、built-in MCPs、skill-embedded MCPs、LSP/AST-grep 工具 [GH][Docs:overview]。

它不是“可扩展但需要 fork”的项目，而是把扩展性作为产品核心：agent roles、tool registry、hook system、MCP、skills、config schema 全部围绕 extension surface 展开。由此给 5 是合理的；安全风险另行计入 security。

## 文档质量

评分 4/5。

文档覆盖面很广：installation、overview、orchestration、team-mode、configuration、CLI、features、known issues、release process、privacy、terms，以及 multilingual README [GH][Docs:installation][Docs:overview][Docs:orchestration][Docs:team-mode][Docs:configuration][Docs:cli][Docs:known-issues][GH:release-process][Docs:privacy][Docs:terms]。这已经超过普通开源工具的文档密度。

扣分点在于：README 营销表达强，信息噪声高；rename transition 使文档中同时出现旧名/新名；GitHub issue 中还有“align category, hook, and hashline references with implementation”之类文档一致性问题 [GH:issues]。此外，安装指南明确要求 LLM agent 用 `curl` 而不是 WebFetch，以免摘要丢失关键 flags，这也说明文档对自动摘要不友好 [Docs:installation]。

因此文档不是缺，而是“多、强、快、略乱”。给 4，而不是 5。

## 社区与成熟度

| 维度 | 评分 | 说明 |
|------|------|------|
| 社区活跃度 | 5/5 | 58.3k stars、4.7k forks、约 233 contributor pages；近半月 closed issues 251、merged PR 173，说明响应和合并速度极快。但半年内极高 star 增长应折价理解为“可见热度”而非质量证明 [GH:api][GH:contributors][GH:closed-recent][GH:merged-recent] |
| 成熟度 | 2/5 | 创建于 2025-12，默认分支为 `dev`，v4.2.x 仍在快速迭代；同日多 release、open issues 313、open PRs 256、npm 版本密集、rename transition 与 known issues 均显示 API/行为稳定性不足 [GH:api][GH:releases][GH:issues][GH:prs][NPM:opencode][Docs:known-issues] |

这里必须把 community 与 maturity 分开。oh-my-openagent 的社区动能极强，维护速度也快；但“快”不是“稳”。年轻项目、高 release churn、高 issue/PR 流速、包名迁移与近期 blocker 历史，都把 maturity 压到 2。若未来形成稳定 release cadence、兼容性政策、LTS/稳定分支，并有更清晰 security/governance 流程，成熟度可上调。

## 安全与风险

评分 2/5。

没有发现公开 GitHub security advisory；但这只说明本次通过 GitHub advisory API 未发现公开 advisory，不等于安全审计通过 [GH:advisories]。主要风险来自产品形态和治理缺口：

1. **本地高权限 agent harness**：它运行在用户仓库与开发环境中，接触文件、shell-like tools、MCP、provider credentials、OpenCode sessions 与 hooks；能力越强，误操作和攻击面越大 [Docs:configuration][Docs:team-mode]。
2. **缺少根目录 `SECURITY.md`**：本次 local scan 使用 `find . -maxdepth 3 \( -iname SECURITY* -o -iname *security* \)`，未发现标准安全报告文件，只看到 `src/dependency-security.test.ts`；这会降低外部报告和治理清晰度 [GH:local-scan]。
3. **默认 telemetry**：匿名 telemetry 默认开启，可用 `OMO_SEND_ANONYMOUS_TELEMETRY=0` 或 `OMO_DISABLE_POSTHOG=1` 关闭；隐私政策称不上传 prompts/source files/tokens，但默认 opt-out 对敏感组织仍是风险点 [Docs:installation][Docs:privacy]。
4. **近期安全相关 issue/PR 信号**：GitHub search 能看到 dependency vulnerability、token interpolation、Trust Gate MVP 等安全相关议题；这说明项目在处理风险，但也说明安全面仍在快速演化 [GH:security-search]。
5. **License / Terms 限制**：LICENSE.md 使用 Sustainable Use License 1.0，并写明使用/修改仅限 internal business purposes 或 non-commercial/personal use，分发/提供给他人仅限 free of charge for non-commercial purposes；具体法律含义仍需正式 legal review。Terms 也强调 as-is、第三方服务责任自负；这对企业采用是 legal/security boundary 的一部分 [GH:license][Docs:terms]。

因此 security 只能给 2。不是因为项目“危险到不可用”，而是因为它把许多高权限能力接在本地开发环境上，而安全治理、默认隐私姿态、稳定性和报告路径尚不足以支撑高分。

## 学习价值

### 验证边界

- 未做 Develata 生产部署验证。
- 未在本机完整运行 test suite；代码质量评分基于 local scan、CI 配置、docs 与 issue/PR 信号。
- GitHub API、GitHub search、npm registry 快照均为 2026-05-18。
- 本地 clone 固定在 `37bd866c32b1d140526967b51b8c8957e9daed83`；后续 release churn 可能很快改变事实。

### 可学之处

1. **Agent workflow engineering**：它展示了从单 agent 到多 agent runtime 的完整膨胀路径：roles、hooks、state、tools、MCP、team、fallback、doctor、release gate。
2. **能力与风险同源**：每个强扩展点都同时是 attack surface；这正适合训练“能力评分”和“安全评分”分离判断。
3. **高星项目的反向阅读法**：README 叙事很强，但真实判断应落到 API stats、issue/PR、docs、license、CI、local scan。
4. **多模型协作的工程约束**：自动 model/category routing 很诱人，但订阅、provider、token cost、fallback、prompt compatibility、provider policy 都会回到系统复杂度。
5. **开源商业化与 source-available license**：SUL-1.0、terms、telemetry、brand rename、platform binaries 共同构成现代 AI tooling 项目的商业/治理切面 [GH:license][Docs:terms][Docs:privacy][NPM:openagent]。
