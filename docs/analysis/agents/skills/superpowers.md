---
title: "Superpowers"
created: 2026-05-15
updated: 2026-05-15
type: repository-analysis
repo_url: "https://github.com/obra/superpowers"
category: "agents/skills"
tags: [agent-skills, tdd, subagent, claude-code, codex, cursor, workflow]
previous_repo: ""
successor: ""
primary_language: "Shell / JavaScript"
license: "MIT"
stars: 192294
forks: 17100
last_checked: 2026-05-15
last_verified: 2026-05-15
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
  - "[GH] https://github.com/obra/superpowers"
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

Superpowers 是当前主流的 agentic skills 框架之一。它的核心创新在于 auto-triggering：技能不是用户手动调用的命令，而是 agent 根据上下文自动激活的强制工作流。设计哲学上把 AI agent 视为「能力强但缺乏纪律的初级工程师」，用硬性流程关卡（brainstorming 的「无 spec 不写代码」、TDD 的「先写测试再写实现」、debugging 的「无根因不修 bug」）来弥补 agent 天然的随意性。

192k stars 的爆发式增长表明开发者对 agent 纪律化有强烈需求。但项目仅 7 个月历史、快速迭代带来了明显的成熟度问题：breaking changes 频繁、平台兼容性参差不齐（Claude Code 深度集成 vs OpenCode 技能工具缺失）、269 个 open issues 中有实质性的工作流阻塞 bug。

如果你已经在用 Claude Code 做日常开发，Superpowers 值得认真尝试。如果你的 agent 平台是 Codex 或 OpenCode，体验会打折，但核心方法论仍然有价值。

## 推荐度：4/5

**角色定位**：面向使用 coding agent（Claude Code、Codex、Cursor 等）进行中等复杂度以上项目开发，希望 agent 遵循严谨工程流程（TDD、spec-first、正式 review）的开发者。

推荐理由：
- 方法论扎实——TDD、root-cause debugging、subagent code review 是经过验证的工程实践，Superpowers 将它们固化为 agent 不可跳过的步骤
- 跨平台设计——同一套 skill markdown 文件，覆盖 Claude Code / Codex / Cursor / Gemini CLI / OpenCode / Copilot 等主流 agent 平台，降低平台锁定风险
- 社区验证——192k stars 和社区公开案例（如 chardet v7.0.0 使用 TDD 流程获得 41x 性能提升 [Docs]）表明它能显著改善 agent 输出质量

主要顾虑：
- 仅 7 个月历史，版本迭代带有 breaking changes（slash command 废弃、review loop 替换），长期稳定性待观察
- 平台体验不均——Claude Code 得到最深度集成，其他平台受限于各自 agent 的能力边界
- 269 open issues 对于 7 个月的项目偏高，其中有 worktree 数据损坏、subagent HEAD 游离等实质性 bug
- Token 消耗不小——subagent-driven development 的 full review loop 在 Codex 上有过消耗 5h token 预算的案例（详见 issue #1152 [GH]）

**结论**：如果你在 Claude Code 上做 TDD 是中大型项目，强烈推荐尝试；如果在 Codex/其他平台，可以关注但预期体验有折扣。对快速原型/一次性脚本场景过度设计，不适合。

## 优势

1. **Auto-triggering 机制**——技能根据上下文自动激活，不需要用户记住命令或手动调用。这是 Superpowers 区别于 Spec Kit（slash command 驱动）最本质的设计差异。
2. **完整 SDLC 覆盖**——从 brainstorming 到 finishing-a-development-branch，7 步工作流覆盖整个开发生命周期，每个步骤有明确的 gate condition 防止 agent 走捷径。
3. **TDD 信仰**——test-driven-development 技能执行严格的 RED-GREEN-REFACTOR 循环，强制 agent 先写失败测试再写实现。在 chardet v7.0.0 的案例中，这一流程产出了 41x 性能提升和 96.8% 准确率。
4. **Subagent 架构**——subagent-driven-development 为每个 task 启动 fresh context 的 subagent，两阶段 review（spec compliance → code quality）后交付。降低了 context pollution，agent 可以自主工作数小时不偏离计划。
5. **Jesse Vincent 的领导力**——维护者是 Request Tracker (RT) 的作者、Perl 6 的项目经理、K-9 Mail 的创建者，有深厚的工程流程经验。
6. **活跃社区**——Discord + 32 个贡献者 + 持续涌现的第三方教程和对比文章，生态在快速形成。
7. **MIT 许可 + 纯 Markdown 技能格式**——零厂商锁定，技能可以 fork/定制/跨平台迁移。

## 劣势

1. **刚满半岁的项目**——2025 年 10 月创建，版本号已到 v5.1.0，版本迭代快速，breaking changes 常见。追求最新版的用户需要持续跟进更新。
2. **Claude Code 偏倚**——最深度集成（worktree、allowed-tools、native subagent），其他平台体验打折扣。OpenCode 上甚至 skill 工具函数缺失（#1492 [GH]），导致技能注册了但 agent 无法调用。
3. **Worktree 依赖**——using-git-worktrees 是核心工作流步骤，但这一步在 Claude Code 上有已知的 repo 损坏 bug（#1546 [GH]），在其他平台上实现程度不一。
4. **重流程，轻上下文**——完整的 7 步工作流对于小修改/小项目是明显过度工程。框架没有内建的「轻量模式」或按场景自动降级的设计。
5. **文档分散**——主要文档在 README 和内联 skill 文件里，没有独立文档站点。对非 Claude Code 平台的安装和使用说明不够详尽。
6. **Token 成本**——subagent-driven development 的 full review loop 在复杂 plan 上 token 消耗可观（issue #1152 [GH] 报告了完整 5h token 预算被单次运行耗尽）。
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
| [github/spec-kit](https://github.com/github/spec-kit) | Spec-Driven Development 工具包，slash command 驱动 | Spec Kit 是 artifact-centric（spec 是持久产物），Superpowers 是 process-centric（流程是核心）；Spec Kit 覆盖更多 agent 平台（30+），Superpowers 在流程深度和 auto-triggering 上更胜一筹。两者可以互补而非替代。 |
| Claude Code 内置 skills | Claude Code 自带的少量基础技能 | 覆盖范围窄（无 brainstorming/planning/subagent workflow），无跨平台能力。Superpowers 是 Claude Code 内置技能的升级替代。 |
| OpenCode built-in skills | OpenCode 内置技能系统 | 与 Claude Code 类似，基础功能。Superpowers 的 OpenCode 支持有已知问题（#1492）。 |
| Cursor Rules | Cursor 的指令注入机制 | 更原始的 instruction 形式，无结构化 workflow 和 subagent 编排。Superpowers 可以视为 Cursor Rules 的工程化演进。 |
| goose / auggie 内置 workflow | 各平台自带的开发辅助 | 平台锁定，无统一方法论。Superpowers 提供跨平台标准化。 |

## 个人主页 sharing 候选

**是**。

- novelty：将 TDD/root-cause/debugging/planning 等工程纪律编码为 agent auto-trigger skill，方法论有创新性
- maturity：项目很新但已有充分的社区验证和第三方内容可引用
- practicality：面向使用 coding agent 的开发者，受众清晰且广泛
- shareability：有明确的故事线——"你是如何让 AI 写出好代码的？不是在 prompt 里讲道理，是用强制流程关卡"

---

## 它能做什么

**14 个 composable skill**，分四个类别 [GH] [Docs]：

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

**支持平台** [GH]：Claude Code（官方 marketplace + 社区 marketplace）、Codex CLI/App、Cursor、Gemini CLI、OpenCode、GitHub Copilot CLI、Factory Droid、Goose CLI、Kilo Code。

能力评分 4/5。覆盖完整 SDLC、支持 8+ 平台，但非 Claude Code 平台功能存在缺失（OpenCode 的技能工具调用问题 #1492 [GH]），且没有 built-in CI/CD 集成（需外部触发）。

## 运行环境与资源占用

| 场景 | CPU | 内存 | 存储 | 说明 |
|------|-----|------|------|------|
| 最小 | N/A | N/A | < 5 MB | 仅安装 skill 文件，本地文件系统 |

- **运行时**：无持久服务——Superpowers 是一组 markdown 文件 + shell script hooks + JS plugin manifests。实际运行由 agent（Claude Code / Codex 等）驱动
- **操作系统**：macOS / Linux / Windows（WSL），取决于目标 agent 的平台支持
- **Docker**：无
- **GPU**：不需要
- **外部依赖**：git（worktree 功能需要 Git ≥ 2.5）+ 至少一个支持的 coding agent + 该 agent 的 API 额度

评分 4/5。作为纯 markdown + 少量 shell/JS 的框架，自身资源占用极低（< 5 MB 磁盘）。但框架的 subagent 编排设计会显著增加 agent 运行时的 token 消耗（issue #1152 [GH] 报告了 5h 预算被单次运行耗尽），对用户的综合资源成本不容忽视。

## 上手体验

安装难度因平台而异 [GH]：

- **Claude Code**（最佳）：`/plugin install superpowers@claude-plugins-official`，一键安装，即刻生效
- **Cursor**：`/add-plugin superpowers`，同样简单
- **Codex CLI/App**：需要手动 "fetch and follow instructions from .codex/INSTALL.md"，非原生 marketplace
- **OpenCode**：类似 Codex，且存在 skill 函数缺失问题（#1492 [GH]）
- **Gemini CLI**：`gemini extensions install` 命令，较简洁

初次体验：开始新 session 后说 "help me plan this feature"，如果安装正确，agent 会宣布正在使用哪个 skill 并进入格式化流程。但第一次遇到完整的 brainstorming → plan → review 链路时，流程感可能令人不适应——从「直接写代码」到「先回答 5 个 Socratic 问题」的切换需要心理准备。

评分 3/5。Claude Code 上接近 4，但其他平台拉低了平均值。安装方式不统一，非 Claude Code 平台缺乏充分的故障排查文档。

## 代码质量

语言分布：Shell 66.4%、JavaScript 24.8%、HTML + Python + TypeScript 少量 [GH]。

项目结构清晰：`skills/` 目录每个 skill 有独立文件夹，内含 SKILL.md + references/ + templates/ 等子目录。`docs/` 下有测试文档和平台特定 README。

测试方面 [Docs]：有专门的 `docs/testing.md`，subagent-driven-development 的集成测试覆盖 6 个验证点（plan loading、full task text、self-review、review order、review loops、independent verification），但测试仅在 Claude Code headless 模式下运行（10-30 分钟耗时）。Token 使用分析工具有助于优化。

但关注点：
- Shell 代码占总量的 2/3——大规模 shell 脚本可维护性天然低于强类型语言
- 269 open issues 对 7 个月历史的项目比率偏高，其中有严重性较高的 bug（worktree 损坏 #1546 [GH]、subagent HEAD 游离 #1543 [GH]、无声 stall #1545 [GH]）
- 快速迭代节奏意味着 regression 风险——版本间行为变更需要用户主动跟进 release notes

评分 3/5。结构清晰，测试覆盖关键路径但有限（仅 Claude Code 平台），shell-heavy 代码基础维护成本中等，bug 密度需关注。

## 可扩展性

Superpowers 的 extensibility 是其设计核心之一 [GH]：

- **writing-skills**——完整的 skill 创作工作流：定义技能边界、编写 SKILL.md（含 trigger description、instructions、pitfalls）、创建 references/templates/assets、编写测试（test-first，测试先于 skill 实现）
- **SKILL.md 标准格式**——纯 markdown + YAML frontmatter，任何人都可以创建新 skill 或 fork 现有 skill。不锁定特定 agent 平台
- **市场分发**——Claude Code 有官方 + 社区 marketplace；Codex / Copilot 有各自的 marketplace；社区贡献路径清晰
- **平台 hooks**——SessionStart hooks 允许 skill 在 session 开始时自动注入 context；每平台有独立的 install 脚本

但局限：
- skill 之间的组合/编排逻辑主要由 agent 自动决定，创作者对触发顺序的控制力有限
- 没有 skill 依赖声明机制——如果 skill A 依赖 skill B 的产出，无法在 SKILL.md 中形式化表达

评分 4/5。完全开放、跨平台、skill-first 的设计哲学，创作工具链完整（writing-skills + SKILL.md + 市场分发）。扣 1 分主要因为 skill 依赖声明机制缺失、触发顺序控制依赖 agent 自动判断——创作者的编排能力有限。

## 文档质量

主文档为 README.md，非常详尽：overview → installation（6 平台）→ 7 步工作流 → 技能库表格 → 哲学 → 常见问题 [GH]。

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
| 社区活跃度 | 4/5 | 192k stars 爆发式增长，但 32 贡献者相对偏少（stars/contributors 比例极高）；核心维护者（Jesse Vincent + Prime Radiant 团队）响应及时，Discord 社区活跃；第三方对比文章和 skill registry 逐渐涌现 |
| 成熟度 | 2/5 | 2025-10-09 创建（仅 ~7 个月），版本迭代快速（~2 次/月），v5.1.0 中包含 breaking changes（slash command 废弃、review loop 替换、worktree 行为大改），API/行为稳定性无承诺 |

社区方面的积极信号：Superpowers 在 agent skill 生态中有显著的影响力。多个 skill registry（Tessl、LobeHub）已收录其技能。第三方比较文章（Spec Kit vs Superpowers）频繁出现，说明它在心智份额上处于领先位置。

成熟度方面的顾虑：版本迭代速度快且包含行为变更，用户需要持续跟进。269 open issues 中包含了一些可能影响日常使用的问题（silent stall #1545、HEAD 游离 #1543）。对追求稳定的团队而言，这是最大的风险点。

## 安全与风险

Superpowers 本身是一组 markdown 文件 + shell 脚本 + JS plugin manifests，不处理用户数据、不暴露网络服务、不维护状态。攻击面极低 [GH]。

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
