---


title: "Superpowers"
created: 2026-05-15
updated: 2026-06-07
type: repository-analysis
repo_url: "https://github.com/obra/superpowers"
category: "ai-programs/agent-skills"
tags: [agent-skills, tdd, subagent, claude-code, codex, cursor, workflow]
previous_repo: ""
successor: ""
primary_language: "Shell / JavaScript"
license: "MIT"
stars: 219583
forks: 19536
last_checked: 2026-06-07
last_verified: 2026-06-07
evidence: "docs review + community reports + open issue analysis"
archived_reason: ""
docker_support: false
gpu_required: false
estimated_cpu: "N/A"
estimated_memory: "N/A"
estimated_storage: "< 5 MB"
status: active
sharing_candidate: true
ratings:
  capability: 4
  usability: 3
  performance: 4
  code_quality: 3
  documentation: 3
  community: 4
  maturity: 2
  extensibility: 4
  security: 3
  recommendation: 4
overall_score: 3.4
sources:
  - "[GH] https://github.com/obra/superpowers — GitHub REST/GraphQL snapshot 2026-06-07: stars=219583, forks=19536, open issues=121, open PRs=141, commits=441, latest sampled release=v5.1.0, primary language=Shell, license=MIT"
  - "[GH:issues] GitHub issue URLs cited from prior analysis and re-scoped 2026-06-07: #1152 https://github.com/obra/superpowers/issues/1152, #1492 https://github.com/obra/superpowers/issues/1492, #1546 https://github.com/obra/superpowers/issues/1546, #1543 https://github.com/obra/superpowers/issues/1543, #1545 https://github.com/obra/superpowers/issues/1545; this entry supports issue-topic references only, not current unresolved status unless separately stated"
  - "[Docs] https://github.com/obra/superpowers#readme"
  - "[Docs] https://raw.githubusercontent.com/obra/superpowers/main/docs/testing.md"
  - "[Docs] https://www.termdock.com/en/blog/superpowers-framework-agent-skills"
---

# Superpowers

> Agentic skills framework — 为 coding agent 注入工程纪律的完整 SDLC 工作流，composable skills + auto-triggering，横跨 Claude Code / Codex / Cursor / Gemini CLI 等 8+ 平台。
>
> **状态**: `active` · **总分**: 3.4/5 · **推荐度**: 4/5

## 一句话总结

Superpowers 是一套把「软件工程纪律」编码为 agent skill 的框架——brainstorm → spec → plan → TDD → subagent-driven dev → review → ship，全链路流程由 skill 自动触发，而非靠 agent 自觉遵守。适合希望 agent 像 senior engineer 一样工作的开发者，不适合快速原型或一次性的简单任务。

## 总体评价

Superpowers 是一个高可见度的 agentic skills 框架。它的核心创新在于 auto-triggering：技能不是用户手动调用的命令，而是 agent 根据上下文自动激活的强制工作流。设计哲学上把 AI agent 视为「能力强但缺乏纪律的初级工程师」，用硬性流程关卡（brainstorming 的「无 spec 不写代码」、TDD 的「先写测试再写实现」、debugging 的「无根因不修 bug」）来弥补 agent 天然的随意性 [Docs]。

219k stars 是极高的点时可见度信号，但不能直接解释为生产采用或真实质量证明。项目仍不到一年历史、快速迭代带来了明显的成熟度问题：breaking changes 频繁、平台兼容性参差不齐（Claude Code 深度集成 vs OpenCode 相关问题曾被报告）、截至 2026-06-07 仍有 121 个 open issues 和 141 个 open PRs [GH] [GH:issues]。

如果你已经在用 Claude Code 做日常开发，Superpowers 值得认真尝试。如果你的 agent 平台是 Codex 或 OpenCode，体验会打折，但核心方法论仍然有价值。

## 推荐度：4/5

**角色定位**：面向使用 coding agent（Claude Code、Codex、Cursor 等）进行中等复杂度以上项目开发，希望 agent 遵循严谨工程流程（TDD、spec-first、正式 review）的开发者。

推荐理由：
- 方法论扎实——TDD、root-cause debugging、subagent code review 是通行工程实践；Superpowers 将它们写成 agent 不可跳过的流程步骤 [Docs]
- 跨平台设计——同一套 skill markdown 文件，覆盖 Claude Code / Codex / Cursor / Gemini CLI / OpenCode / Copilot 等 agent 平台，降低单一客户端锁定风险 [Docs]
- 社区可见度——219k stars 是点时可见度信号；README/第三方资料提到 chardet v7.0.0 使用 TDD 流程获得 41x 性能提升的案例，但本条未独立复现实测 [Docs] [GH]

主要顾虑：
- 不到一年历史，版本迭代带有 breaking changes（slash command 废弃、review loop 替换），长期稳定性待观察
- 平台体验不均——Claude Code 得到最深度集成，其他平台受限于各自 agent 的能力边界
- 121 open issues / 141 open PRs 对于年轻项目仍是较高维护负载，其中曾有 worktree 数据损坏、subagent HEAD 游离等实质性 bug 报告；本条不声明这些 issue 当前仍未修复 [GH] [GH:issues]
- Token 消耗不小——subagent-driven development 的 full review loop 在 Codex 上有过消耗 5h token 预算的 issue 报告；本条未复测当前版本 token 消耗（#1152 [GH:issues]）

**结论**：如果你在 Claude Code 上做 TDD 是中大型项目，强烈推荐尝试；如果在 Codex/其他平台，可以关注但预期体验有折扣。对快速原型/一次性脚本场景过度设计，不适合。

## 优势

1. **Auto-triggering 机制**——技能根据上下文自动激活，不需要用户记住命令或手动调用。这是 Superpowers 区别于 Spec Kit（slash command 驱动）最本质的设计差异。
2. **完整 SDLC 覆盖**——从 brainstorming 到 finishing-a-development-branch，7 步工作流覆盖整个开发生命周期，每个步骤有明确的 gate condition 防止 agent 走捷径。
3. **TDD 流程**——test-driven-development 技能要求 RED-GREEN-REFACTOR 循环，强制 agent 先写失败测试再写实现；chardet 案例按文档/第三方资料作为参考，不作为本条实测证据 [Docs]。
4. **Subagent 架构**——subagent-driven-development 文档化 fresh context、spec compliance review 与 code quality review；本条把它作为设计面评价，未实测 agent 能稳定自主工作数小时 [Docs]。
5. **维护者背景**——Jesse Vincent 的公开工程履历可解释项目方法论来源，但本条不据此推断当前维护响应速度或生产质量。
6. **社区可见度**——GitHub stars / forks 是高可见度信号；Discord 活跃度、生态广度和维护者响应速度本轮未重新核验，不能据此推断生产采用。
7. **MIT 许可 + 纯 Markdown 技能格式**——零厂商锁定，技能可以 fork/定制/跨平台迁移。

## 劣势

1. **仍不到一年的项目**——2025 年 10 月创建，版本号已到 v5.1.0，版本迭代快速，breaking changes 常见。追求最新版的用户需要持续跟进更新。
2. **Claude Code 偏倚**——README/文档侧重 Claude Code 体验，其他平台体验可能打折扣。旧 issue 曾报告 OpenCode 上 skill 工具函数缺失（#1492 [GH:issues]），这类平台差异仍需复核当前版本。
3. **Worktree 依赖**——using-git-worktrees 是核心工作流步骤；旧 issue 曾报告过 repo/worktree 相关故障（#1546 [GH:issues]），在其他平台上实现程度不一。
4. **重流程，轻上下文**——完整的 7 步工作流对于小修改/小项目是明显过度工程。框架没有内建的「轻量模式」或按场景自动降级的设计。
5. **文档分散**——主要文档在 README 和内联 skill 文件里，没有独立文档站点。对非 Claude Code 平台的安装和使用说明不够详尽。
6. **Token 成本**——subagent-driven development 的 full review loop 在复杂 plan 上 token 消耗可观；旧 issue #1152 报告过完整 5h token 预算被单次运行耗尽，本条未复测当前版本 [GH:issues]。
7. **SessionStart hook 的隐式执行**——技能通过 platform hook 自动注入 context，用户可能不知道 agent 加载了哪些 skill。这既是优势（自动触发），也是透明性/安全性的 trade-off。

---

## 适合什么场景

- 使用 Claude Code 做中大型项目的日常开发
- 希望 agent 强制遵循 TDD 和 spec-first 流程
- 需要 agent 自主工作数小时不偏离计划的复杂任务
- 多 agent 平台环境，想用统一方法论管理
- 学习 agentic SDLC 方法论——即使不完全采纳，workflow 设计本身有学习价值

## 不适合什么场景

- 快速原型、一次性脚本、探索性 coding——7 步工作流是过度负担
- 小项目/简单修改——相对于工作量，流程开销不成比例
- 非 Claude Code 平台且对 agent 体验要求高——Codex/OpenCode 上的 Superpowers 不如 Claude Code 上顺滑
- 对 token 成本极度敏感的场景——subagent review loop 有不可忽视的消耗
- 不想频繁跟进 breaking changes 的稳定型团队——项目仍在快速演进期

## 与类似项目对比

| 项目 | 定位 | 相对本项目 |
|------|------|-----------|
| [github/spec-kit](https://github.com/github/spec-kit) | Spec-Driven Development 工具包，slash command 驱动 | 定位不同：Spec Kit 更偏 artifact-centric（spec 是持久产物），Superpowers 更偏 process-centric（流程是核心）与 auto-triggering；两者可以互补而非替代。 |
| Claude Code 内置 skills | Claude Code 自带的基础技能 | Superpowers 额外文档化 brainstorming/planning/subagent workflow 等流程；是否替代内置 skills 取决于使用场景。 |
| OpenCode built-in skills | OpenCode 内置技能系统 | 与 Claude Code 类似，基础功能。Superpowers 的 OpenCode 支持曾有 issue 报告（#1492 [GH:issues]），当前版本需复核。 |
| Cursor Rules | Cursor 的指令注入机制 | Cursor Rules 更偏 instruction 注入；Superpowers 更偏可迁移 workflow/skill 文档。 |
| goose / auggie 内置 workflow | 各平台自带的开发辅助 | 各平台 workflow 与 Superpowers 的跨平台 skill 文件定位不同；本条不评价谁更优。 |

## 个人主页 sharing 候选

**是**。

- novelty：将 TDD/root-cause/debugging/planning 等工程纪律编码为 agent auto-trigger skill，方法论有创新性
- maturity：项目很新，GitHub 可见度高；社区采用与第三方生态本轮未系统复核
- practicality：面向使用 coding agent 的开发者，受众清晰且广泛
- shareability：有明确的故事线——"你是如何让 AI 写出好代码的？不是在 prompt 里讲道理，是用强制流程关卡"

---

## 它能做什么

**14 个 composable skill**，分四个类别 [Docs]：

| 类别 | 技能 | 核心功能 |
|------|------|---------|
| Testing | test-driven-development | RED-GREEN-REFACTOR 循环，写入反模式参考 |
| Debugging | systematic-debugging | 4 阶段根因追溯（调查→假设→修复→验证） |
| | verification-before-completion | 确认修复确实生效 |
| Collaboration | brainstorming | Socratic 式设计精化，产出 spec 文档 |
| | writing-plans | 将设计拆分为 2-5 分钟的可执行任务，含精确文件路径和验证步骤 |
| | executing-plans | 批量执行 plan，人类检查点介入 |
| | dispatching-parallel-agents | 并行 subagent 工作流 |
| | subagent-driven-development | 逐任务分派 fresh subagent，两阶段 review |
| | requesting-code-review | Pre-review checklist，severity-based issue tracking |
| | receiving-code-review | 如何处理 review 反馈 |
| | using-git-worktrees | 隔离分支 workspace，验证 test baseline |
| | finishing-a-development-branch | merge/PR/keep/discard 决策 + 清理 |
| Meta | writing-skills | 按最佳实践创建新 skill，含测试方法论 |
| | using-superpowers | 技能系统入门指南 |

**支持平台** [Docs]：Claude Code（官方 marketplace + 社区 marketplace）、Codex CLI/App、Cursor、Gemini CLI、OpenCode、GitHub Copilot CLI、Factory Droid、Goose CLI、Kilo Code。

能力评分 4/5。覆盖完整 SDLC、支持 8+ 平台，但非 Claude Code 平台体验需额外复核（OpenCode 技能工具调用曾有 #1492 报告 [GH:issues]），且没有 built-in CI/CD 集成（需外部触发）。

## 运行环境与资源占用

| 场景 | CPU | 内存 | 存储 | 说明 |
|------|-----|------|------|------|
| 最小 | N/A | N/A | < 5 MB | 仅安装 skill 文件，本地文件系统 |

- **运行时**：无持久服务——Superpowers 是一组 markdown 文件 + shell script hooks + JS plugin manifests。实际运行由 agent（Claude Code / Codex 等）驱动
- **操作系统**：macOS / Linux / Windows（WSL），取决于目标 agent 的平台支持
- **Docker**：无
- **GPU**：不需要
- **外部依赖**：git（worktree 功能需要 Git ≥ 2.5）+ 至少一个支持的 coding agent + 该 agent 的 API 额度

评分 4/5。作为纯 markdown + 少量 shell/JS 的框架，自身资源占用极低（< 5 MB 磁盘）。但框架的 subagent 编排设计会显著增加 agent 运行时的 token 消耗；旧 issue #1152 报告过 5h 预算被单次运行耗尽，本条未复测当前版本 [GH:issues]。

## 上手体验

安装难度因平台而异 [Docs]：

- **Claude Code**（最佳）：`/plugin install superpowers@claude-plugins-official`，一键安装，即刻生效
- **Cursor**：`/add-plugin superpowers`，同样简单
- **Codex CLI/App**：需要手动 "fetch and follow instructions from .codex/INSTALL.md"，非原生 marketplace
- **OpenCode**：类似 Codex；旧 issue 曾报告 skill 函数缺失问题（#1492 [GH:issues]），当前版本需复核
- **Gemini CLI**：`gemini extensions install` 命令，较简洁

初次体验：开始新 session 后说 "help me plan this feature"，如果安装正确，agent 会宣布正在使用哪个 skill 并进入格式化流程。但第一次遇到完整的 brainstorming → plan → review 链路时，流程感可能令人不适应——从「直接写代码」到「先回答 5 个 Socratic 问题」的切换需要心理准备。

评分 3/5。Claude Code 上接近 4，但其他平台拉低了平均值。安装方式不统一，非 Claude Code 平台缺乏充分的故障排查文档。

## 代码质量

语言分布：Shell 66.4%、JavaScript 24.8%、HTML + Python + TypeScript 少量 [GH]。

项目结构清晰：`skills/` 目录每个 skill 有独立文件夹，内含 SKILL.md + references/ + templates/ 等子目录。`docs/` 下有测试文档和平台特定 README。

测试方面 [Docs]：有专门的 `docs/testing.md`，subagent-driven-development 的集成测试覆盖 6 个验证点（plan loading、full task text、self-review、review order、review loops、independent verification），但测试仅在 Claude Code headless 模式下运行（10-30 分钟耗时）。Token 使用分析工具有助于优化。

但关注点：
- Shell 代码占总量的 2/3——大规模 shell 脚本可维护性天然低于强类型语言
- 121 open issues / 141 open PRs 对不到一年历史的项目仍显示较高维护负载；旧 issue 中有严重性较高的 bug 报告（worktree 损坏 #1546、subagent HEAD 游离 #1543、无声 stall #1545），本条不声明这些问题当前仍可复现 [GH] [GH:issues]
- 快速迭代节奏意味着 regression 风险——版本间行为变更需要用户主动跟进 release notes

评分 3/5。结构清晰，测试覆盖关键路径但有限（仅 Claude Code 平台），shell-heavy 代码基础维护成本中等，bug 密度需关注。

## 可扩展性

Superpowers 的 extensibility 是其设计核心之一 [Docs]：

- **writing-skills**——完整的 skill 创作工作流：定义技能边界、编写 SKILL.md（含 trigger description、instructions、pitfalls）、创建 references/templates/assets、编写测试（test-first，测试先于 skill 实现）
- **SKILL.md 标准格式**——纯 markdown + YAML frontmatter，任何人都可以创建新 skill 或 fork 现有 skill。不锁定特定 agent 平台
- **市场分发**——Claude Code 有官方 + 社区 marketplace；Codex / Copilot 有各自的 marketplace；社区贡献路径清晰
- **平台 hooks**——SessionStart hooks 允许 skill 在 session 开始时自动注入 context；每平台有独立的 install 脚本

但局限：
- skill 之间的组合/编排逻辑主要由 agent 自动决定，创作者对触发顺序的控制力有限
- 没有 skill 依赖声明机制——如果 skill A 依赖 skill B 的产出，无法在 SKILL.md 中形式化表达

评分 4/5。完全开放、跨平台、skill-first 的设计哲学，创作工具链完整（writing-skills + SKILL.md + 市场分发）。扣 1 分主要因为 skill 依赖声明机制缺失、触发顺序控制依赖 agent 自动判断——创作者的编排能力有限。

## 文档质量

主文档为 README.md，非常详尽：overview → installation（6 平台）→ 7 步工作流 → 技能库表格 → 哲学 → 常见问题 [Docs]。

`docs/` 下有 testing.md（集成测试说明）、各平台特定 README（codex、opencode、windows），以及 plans/ 和 superpowers/ 子目录。

不足：
- 没有独立文档站点——所有文档散落在 repo 内
- 非 Claude Code 平台的安装/故障排查文档较薄弱
- 技能行为细节大量内联在 SKILL.md 文件中而非集中文档——要理解一个 skill 的完整行为，需要直接读其 markdown 文件
- 版本间行为变更的迁移指南缺失（如 slash command 废弃、review loop 替换）

评分 3/5。README 是 5 分水平，但整体文档结构分散，缺少站点化和版本化。对非 Claude Code 用户不友好。

## 社区与成熟度

| 维度 | 评分 | 说明 |
|------|------|------|
| 社区活跃度 | 4/5 | 219k stars 的可见度极高；但 stars 是关注度信号，不等于生产采用证明。这里不给出未重新核验的 Discord 活跃度、registry 收录或响应速度判断 |
| 成熟度 | 2/5 | 2025-10-09 创建（仍不到一年），版本迭代快速，v5.1.0 中包含 breaking changes（slash command 废弃、review loop 替换、worktree 行为大改），API/行为稳定性无承诺 |

社区方面的积极信号主要限于本轮可核验的 GitHub 可见度、fork 数、issue/PR 活动和 release 标签；其他生态收录、Discord 活跃度或维护者响应速度需要另做来源采集后再写入。

成熟度方面的顾虑：版本迭代速度快且包含行为变更，用户需要持续跟进。旧 issue 中包含了一些可能影响日常使用的问题（silent stall #1545、HEAD 游离 #1543）；截至 2026-06-07 仍有 121 open issues / 141 open PRs [GH] [GH:issues]。对追求稳定的团队而言，这是最大的风险点。

## 安全与风险

Superpowers 本身主要是一组 markdown 文件 + shell 脚本 + JS plugin manifests；本条未发现其提供持久网络服务或中心化状态，但仍需审查安装脚本、hooks 与 npm supply chain [GH] [Docs]。

具体风险点：

- **SessionStart 自动执行**：各平台的 SessionStart hook 会在 session 开始时自动运行 install 脚本，如果安装了不可信来源的社区 skill，存在执行恶意代码的理论风险
- **Subagent 权限**：subagent-driven development 会分派 subagent 执行代码，subagent 拥有与主 agent 相同的文件系统权限。恶意 skill 可能通过 subagent 执行有害操作
- **依赖信任链**：Superpowers 通过 npm 发布 plugin，其依赖链的安全性取决于 npm 生态的供应链安全

评分 3/5。作为纯文件框架，无网络服务、无用户数据——攻击面天生低。但 SessionStart 自动执行、subagent 全权限继承、npm 供应链依赖构成了非零风险。项目无形式化威胁模型、无签名发布、无权限边界——这些缺失使得 3 分比 4 分更符合事实。

## 学习价值

**高**。即使不完全采纳 Superpowers，其方法论有独立学习价值：

1. **Agentic SDLC 设计**——brainstorm → spec → plan → subagent TDD → review → ship 的链路是目前最完整的 agent 工作流参考实现。理解它有助于设计自己的 agent workflow
2. **Skill 触发模型**——auto-triggering vs slash-command 的设计差异是 agent interaction design 的核心议题。Superpowers 提供了一个极端（流程优先）的参考
3. **TDD 在 agent 语境下的实践**——chat-based TDD 与传统 IDE TDD 在节奏和约束上有本质差异，Superpowers 的 TDD skill 提供了 agent 原生的 TDD 流程设计
4. **Subagent 编排**——fresh context per task + two-stage review 的组合对于理解 agent 上下文管理有参考价值
5. **写作 SKILL.md 的方法论**——writing-skills 本身是关于「如何写好的 agent instruction」的元技能，包含测试 methodology，可迁移到任何 skill/instruction 创作场景
