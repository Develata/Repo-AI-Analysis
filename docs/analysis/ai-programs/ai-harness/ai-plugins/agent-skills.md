---
title: "Agent Skills"
created: 2026-05-31
updated: 2026-07-19
type: repository-analysis
repo_url: "https://github.com/addyosmani/agent-skills"
category: "ai-programs/ai-harness/ai-plugins"
tags:
  - agent-skills
  - coding-agent
  - claude-code
  - cursor
  - codex
  - gemini-cli
  - engineering-workflow
  - non-software
previous_repo: ""
successor: ""
primary_language: "JavaScript / Shell / Markdown"
license: "MIT"
stars: 79134
forks: 8507
last_checked: 2026-07-19
last_verified: 2026-07-19
evidence: "GitHub REST/GraphQL metadata + v0.6.4 release notes + local shallow clone source/eval/validator/workflow review at 2fbfa004a0192529bc997d103fc12f19a3804aab; non-software scoring rubric applied; no plugin install or behavioral eval was executed locally"
archived_reason: ""
docker_support: false
gpu_required: false
estimated_cpu: "N/A"
estimated_memory: "N/A"
estimated_storage: "< 1 MB tracked file bytes"
status: active
ratings:
  capability: 4
  usability: 4
  performance: 3
  code_quality: 4
  documentation: 4
  community: 3
  maturity: 2
  extensibility: 4
  security: 3
  recommendation: 3
overall_score: 3.4
sources:
  - "[GH] https://github.com/addyosmani/agent-skills"
  - "[GH:API] GitHub REST/GraphQL queried 2026-07-19: canonical repo addyosmani/agent-skills, archived=false, default_branch=main, main=2fbfa004a0192529bc997d103fc12f19a3804aab dated 2026-07-18, primary_language=JavaScript, license=MIT, stars=79134, forks=8507, open issues=48, open PRs=76, releases=6, latest=0.6.4 published 2026-07-12"
  - "[GH:community] GitHub community profile queried 2026-07-19: health_percentage=57; README/LICENSE/CONTRIBUTING present; SECURITY.md, CODE_OF_CONDUCT, issue template and PR template not detected"
  - "[GH:advisories] GitHub repository security-advisories API queried 2026-07-19; returned []"
  - "[Source:local-scan] Local shallow clone /opt/data/tmp/github-repo-wiki-freshness-audit/repos/agent-skills at 2fbfa004a0192529bc997d103fc12f19a3804aab: tracked files=172, tracked bytes=736613, markdown=85, JavaScript files=24, shell scripts=7, workflows=1, SKILL.md=24, personas=4, reference markdown=7, eval case JSON=24, eval fixture files=42; no plugin install or eval command executed"
  - "[GH:releases] https://github.com/addyosmani/agent-skills/releases checked 2026-07-19: 6 releases, latest 0.6.4"
  - "[GH:release] https://github.com/addyosmani/agent-skills/releases/tag/0.6.4 checked 2026-07-19: adds three-tier skill evals, native Codex plugin support, npx skills install path, supply-chain hardening and skill-content/documentation updates"
  - "[Docs:readme] README.md at 2fbfa004 checked 2026-07-19: 24 skills, 8 slash commands, 4 personas, 7 references, /build auto, npx skills install across 70+ agents, and native Claude/Cursor/Antigravity/Gemini/Codex paths"
  - "[Docs:contributing] CONTRIBUTING.md at 2fbfa004 checked 2026-07-19: skills must be specific, verifiable, battle-tested and minimal; new skills require matching eval cases/fixtures and must avoid duplicate proposals"
  - "[Docs:opencode] docs/opencode-setup.md checked 2026-07-19: OpenCode uses AGENTS.md plus the skill tool rather than the native plugin path available in Claude/Codex"
  - "[Source:validator] scripts/validate-skills.js and scripts/lib/skill-lint.js checked 2026-07-19: structural lint is split into reusable rules covering frontmatter, required sections, names, trigger descriptions and cross-skill references"
  - "[Source:evals] evals/README.md, scripts/run-evals.js, 24 eval case JSON files and fixtures checked 2026-07-19: Tier 1 structural, Tier 2 deterministic TF-IDF trigger/routing and opt-in Tier 3 headless-Claude behavioral grading; Tier 2 is lexical rather than semantic; no tier was executed in this audit"
  - "[Source:ci] .github/workflows/test-plugin-install.yml checked 2026-07-19: validates content/commands, runs deterministic eval gates, validates Claude plugin structure and tests marketplace installation; workflow inspected but not executed locally"
---

# Agent Skills

> Addy Osmani 维护的 production-oriented engineering skills pack：把 spec、plan、TDD、review、security、ship 等工程纪律编码成可被 AI coding agents 执行的结构化 workflow。
>
> **状态**: `active` · **总分**: 3.4/5 · **推荐度**: 3/5

## 一句话总结

Agent Skills 是一组面向 AI coding agents 的 **工程纪律注入包**：24 个 skills、8 个 lifecycle slash commands、4 个 specialist personas、7 个 reference checklists，覆盖 Claude Code、Cursor、Gemini CLI、OpenCode、Copilot、Codex 等平台；v0.6.4 又加入三层 skill eval 和 native Codex plugin。它不是传统软件库，适合借鉴和局部采用，但项目仍只有约 5 个月历史，不能当成长期稳定标准 [Docs:readme][GH:release]。

## 总体评价

这个 repo 的核心主张很简单：AI coding agents 默认会走捷径，所以要把 senior engineer 的工作流程做成 agent 可执行的 skill。README 当前列出 8 个 slash commands：`/spec`、`/plan`、`/build`、`/test`、`/review`、`/webperf`、`/code-simplify`、`/ship`，并说明 pack 包含 24 个 skills，其中 23 个 lifecycle skills + 1 个 `using-agent-skills` meta-skill [Docs:readme]。

按传统软件标准看，它几乎没有运行时；按 non-software/hybrid rubric 看，它的质量信号反而清楚：skill anatomy、contributing 规范、validator、CI、plugin install test，以及 Claude/Gemini/OpenCode/Copilot/Cursor/Codex 文档都有 [Docs:contributing][Source:validator][Source:ci]。本地 clone 显示 172 个 Git-tracked 文件，其中 85 个 markdown、24 个 JavaScript 文件、7 个 shell script、1 个 workflow；增长主要来自 eval cases/fixtures、文档和 validator，而不是常驻 runtime [Source:local-scan]。

本轮最重要的实质变化是 v0.6.4 的三层 eval：Tier 1 做结构校验，Tier 2 以确定性的 TF-IDF 近似检查 trigger/routing，Tier 3 可按需运行真实 agent trace 并由模型判分 [Source:evals]。这足以把 `code_quality` 从 3 提到 4，但不能把 eval 存在误读为语义正确性已被证明：Tier 2 明确只是 lexical approximation，Tier 3 有模型/权限/成本依赖，本轮也没有实际执行任何 tier。

它和之前收录的 Superpowers、Anthropic Skills、Scientific Agent Skills 同属 agent-skills 分类，但气质不同：Superpowers 更像一套强制流程哲学；Anthropic Skills 更偏 Claude 生态的官方格式样板；Scientific Agent Skills 偏领域知识包；Agent Skills 则是 **Google/production engineering flavored 的通用软件工程流程包**。其可取处在「反 rationalization、verification gates、质量门禁、progressive disclosure」；其风险也在这里——流程越强，越可能在小任务上 overfit，且不同 agent 平台的真实执行力差异很大。

## 推荐度：3/5

**目标角色**：使用 Claude Code、Cursor、Codex、Gemini CLI、Copilot 等 coding agent 做中等复杂度项目，希望 agent 不再跳过 spec、tests、review、security gate 的开发者。

推荐度 3/5。它值得收录、值得读，也适合选择性借鉴；但评分表里的 recommendation 按“采用风险”给分，而不是按“内容启发性”给分。

正面理由：

- 流程覆盖完整：Define → Plan → Build → Verify → Review → Ship，且每个 skill 有 verification/exit criteria [Docs:readme]。
- 文档和格式意识强：CONTRIBUTING 明确要求 skills specific、verifiable、battle-tested、minimal，并建议包含 Common Rationalizations、Red Flags、Verification 等结构 [Docs:contributing]。
- 工程化验证存在：validator 检查结构和 trigger 描述；24 份 eval case 覆盖 deterministic routing 与按需 behavioral trace；CI 还测试 Claude plugin marketplace/install flow [Source:validator][Source:evals][Source:ci]。
- 跨平台设计务实：同一套 markdown assets 可进入 Claude Code plugin、Cursor rules、Gemini skills、OpenCode intent mapping、Copilot personas/instructions；v0.6.4 增加 native Codex plugin，并提供 `npx skills add` 的跨 agent 安装路径 [Docs:readme][GH:release]。

保守扣分：

- 创建于 2026-02-15，latest release `0.6.4`，项目年龄约 5 个月；成熟度仍只能给 2/5 [GH:API][GH:releases]。
- GitHub community profile health 57%，缺少 SECURITY.md / Code of Conduct 等常见社区治理文件；对一个可能被 agents 自动加载执行的指令集合，这不是致命问题但值得记录 [GH:API]。
- Stars 已超过 79k，但 open issues=48、open PRs=76；热度可能混有作者影响力和理念收藏，不应直接等同于广泛生产验证 [GH:API]。
- agent skill 的实际效果取决于目标 agent 是否遵守流程；Markdown 不是强制执行机制，只是强 prompt + 周边 hooks，且可能被更高优先级的 system/user/platform 指令覆盖。

结论：**值得收录，值得读，适合借鉴；推荐采用其中若干 skills，而不是无脑全量导入。**

## 优势

1. **流程设计完整**：从需求澄清、spec、planning、incremental implementation、TDD、browser testing、debugging、review、安全、性能、CI/CD、deprecation 到 shipping，覆盖完整 SDLC [Docs:readme]。
2. **反 agent 偷懒机制明确**：README 和 skill anatomy 强调 anti-rationalization、red flags、verification gates；这正对 coding agent 常见的 “I’ll add tests later” 病灶 [Docs:readme] [Docs:contributing]。
3. **跨平台适配广**：Claude Code plugin/marketplace、Cursor rules、Gemini CLI skills、Windsurf、OpenCode、Copilot、Kiro、Codex/other agents 均有安装/使用路径 [Docs:readme]。
4. **内容即产品，结构清晰**：`skills/`、`agents/`、`references/`、`hooks/`、`.claude/commands/`、`.gemini/commands/` 分层明确 [Docs:readme]。
5. **有基本自动化校验**：validator 检查 SKILL.md、frontmatter、required sections、description length、cross-skill references；CI 测试 plugin validation/install [Source:validator] [Source:ci]。
6. **MIT 许可与纯文本格式**：容易 fork、裁剪、迁移到自己的 agent system，不形成强厂商锁定 [GH:API]。
7. **eval 不再只是结构 lint**：24 个 case 文件和 fixtures 覆盖 deterministic trigger/routing，另有 opt-in behavioral trace grader；这是对旧版“语义测试浅”的实质改善 [Source:evals][Source:local-scan]。

## 劣势

1. **项目仍很年轻**：创建于 2026-02-15，截至本轮有 6 个 releases、最新 `0.6.4`；迭代速度快，但长期稳定性仍未被验证 [GH:API][GH:releases]。
2. **非强制执行**：skills 本质仍是 markdown 指令。即使写了 gate，agent 是否真的遵守取决于平台、模型能力、上下文长度、指令优先级、工具权限和用户是否监督。
3. **流程可能过重**：对于一次性脚本、小修小补、探索性 spike，全套 spec/plan/review/ship 会拖慢速度。
4. **平台能力不均**：Claude Code 有 plugin 与 slash command 体验；OpenCode 文档承认没有 native plugin system 或 automatic skill routing，需要 AGENTS.md/intent mapping 模拟 [Docs:opencode]。
5. **安全治理文件不足**：community profile health 57%，GitHub API 未发现 SECURITY.md / Code of Conduct；虽然内容含 security-and-hardening skill，但 repo 自身治理仍偏轻 [GH:API]。
6. **热度解释需保守**：79k stars、8.5k forks 很高，但这类 non-software repo 的 stars 常反映理念共鸣和收藏，不必然等于生产部署成功 [GH:API]。

---

## 适合什么场景

- 中等复杂度以上的 coding-agent 项目，希望 agent 先写 spec/plan，再按小步验证推进。
- 团队想建立统一 agent workflow，把测试、review、安全、性能作为默认 gate。
- 个人想学习如何写高质量 agent skills：frontmatter、trigger、process、verification、anti-rationalization。
- 在 Claude Code 上做插件化工作流，或在 Cursor/Gemini/Copilot 中选取少量 rules/checklists。
- 和 Develata 的 Hermes skills/工程宪法做横向参考，提炼可迁移的流程结构。

## 不适合什么场景

- 极小任务、一次性脚本、探索性 spike：流程开销可能大于收益。
- 需要严格 sandbox / permission enforcement 的安全环境：该 repo 提供流程建议，不提供安全执行沙箱。
- 不愿维护 agent 指令资产的用户：skills 会过期，需要持续 patch。
- 把 stars 当质量保证的人：non-software repo 的热度必须经过内容审查，不能直接采用。
- 只使用不支持 rules/skills/system prompt 注入的平台。
- 上下文窗口已经很紧的复杂任务：一次性加载全量 skills/personas/checklists 可能挤占问题本身的上下文预算。

## 与类似项目对比

| 项目 | 定位 | 相对本项目 |
|------|------|-----------|
| Superpowers | agentic SDLC framework，auto-triggering 与强流程哲学 | Superpowers 更激进、更框架化；Agent Skills 更轻、更偏通用工程 checklist 和跨平台适配 |
| Anthropic Skills | Claude Skills 官方/生态样板 | Anthropic Skills 更贴 Claude 格式；Agent Skills 更强调 software engineering workflow 与多平台迁移 |
| Scientific Agent Skills | 科学计算/生物/化学等领域技能集合 | Scientific Agent Skills 是领域知识库；Agent Skills 是通用软件工程流程库 |
| spec-kit | Spec-driven development 工具包 | spec-kit 聚焦 spec artifact；Agent Skills 覆盖完整生命周期但单点深度可能不如专用工具 |
| Hermes Agent skills | Hermes 的可演化 procedural memory | Hermes skills 可在运行中被 agent patch/治理；Agent Skills 是外部静态包，适合作为方法论参考 |

上述项目按 `ai-programs/ai-harness/ai-plugins` 与相邻 pure-skill 项目做定位级对比，未按同一 10 维度框架深审；其中 Hermes Agent skills 是本地体系参照项，不是公开 GitHub repo 的直接竞品。

---

## 它能做什么

**8 个 lifecycle slash commands** [Docs:readme]：

- `/spec`：定义要构建什么，spec before code。
- `/plan`：将需求拆成小任务。
- `/build`：增量实现；`/build auto` 可自动完成剩余任务。
- `/test`：证明行为正确。
- `/review`：代码健康检查。
- `/webperf`：基于测量证据审计 Web performance。
- `/code-simplify`：降低复杂度。
- `/ship`：上线前质量门禁。

**24 个 skills** [Docs:readme]：

- Meta：`using-agent-skills`。
- Define：`interview-me`、`idea-refine`、`spec-driven-development`。
- Plan：`planning-and-task-breakdown`。
- Build：`incremental-implementation`、`test-driven-development`、`context-engineering`、`source-driven-development`、`doubt-driven-development`、`frontend-ui-engineering`、`api-and-interface-design`。
- Verify：`browser-testing-with-devtools`、`debugging-and-error-recovery`。
- Review：`code-review-and-quality`、`code-simplification`、`security-and-hardening`、`performance-optimization`。
- Ship：`git-workflow-and-versioning`、`ci-cd-and-automation`、`deprecation-and-migration`、`documentation-and-adrs`、`observability-and-instrumentation`、`shipping-and-launch`。

**4 个 personas + 7 references** [Docs:readme]：

- `code-reviewer`、`test-engineer`、`security-auditor`、`web-performance-auditor`。
- definition-of-done、testing/security/performance/accessibility/observability checklists，以及 `orchestration-patterns.md` [Source:local-scan]。

**三层 skill eval**：结构校验、deterministic trigger/routing、opt-in behavioral trace grading；Tier 2 是 lexical approximation，不能替代语义行为评测 [Source:evals]。

**Hooks 与缓存**：仓库包含 Claude Code session-start hook、SDD cache hooks、simplify-ignore hooks；这些是增强体验的辅助，不是所有平台通用能力 [Docs:contributing]。

## 运行环境与资源占用

| 场景 | CPU | 内存 | 存储 | 说明 |
|------|-----|------|------|------|
| 仅阅读/复制 skills | N/A | N/A | < 5 MB | Markdown 文档为主，几乎零运行时成本 |
| Claude Code plugin 使用 | 取决于 Claude Code | 取决于上下文 | < 5 MB + agent 缓存 | 通过 plugin marketplace/install 使用 |
| Cursor/Gemini/Copilot/OpenCode 适配 | 取决于目标 agent | 取决于上下文 | < 5 MB | 需要把 rules/skills/personas 放入各平台约定位置 |

- **运行时**：skills 本身是 Markdown + 少量 shell hooks/配置文件 + JS validator；实际执行由目标 AI agent 负责。
- **操作系统**：skills 文本跨平台；hooks 目录包含 bash 脚本和相关配置/说明文件，Windows 原生体验需 WSL/Git Bash 或手工适配。
- **Docker**：无。
- **GPU**：不需要。
- **外部依赖**：至少一个 coding agent；Claude Code plugin 验证依赖 `@anthropic-ai/claude-code`；validator 依赖 Node.js [Source:ci] [Source:validator]。

性能评分 3/5。文件体积极低，但 full workflow 会增加 agent token 消耗、上下文窗口压力和交互轮次；真实成本取决于 agent runtime、加载策略、hooks 和任务复杂度。按 non-software rubric 只能说本体轻量，不能把“Markdown 小”直接换算成 adoption-level performance 4。

## 上手体验

评分 4/5。

Claude Code 是最顺滑路径：README 给出 marketplace install 和 SSH fallback；Cursor/Gemini/Windsurf/OpenCode/Copilot/Kiro/Codex 也有简要适配说明 [Docs:readme]。

扣分点是跨平台体验不一致：OpenCode 文档明确说其没有 native plugin system 或 automatic skill routing，需通过 AGENTS.md + intent mapping 模拟 [Docs:opencode]。Cursor 等平台也可能受 context limits 影响，不适合一次性加载所有 skills。

实际建议：先装/复制 `spec-driven-development`、`planning-and-task-breakdown`、`test-driven-development`、`code-review-and-quality` 四类；确认 agent 能稳定遵守后，再逐步引入 security/performance/ship。

## 代码质量

评分 4/5。

虽然它不是传统软件项目，但作为 skill pack，有以下质量信号：

- `CONTRIBUTING.md` 明确 skill quality bar：specific、verifiable、battle-tested、minimal [Docs:contributing]。
- validator 检查每个 skill 的 SKILL.md、YAML frontmatter、required sections、description 和 dead cross-skill references [Source:validator]。
- CI 包含 skill content validation、deterministic eval gates、Claude plugin validate 与 marketplace install test [Source:ci]。
- 24 个 skills 各有 eval case；deterministic tier 检查 trigger/routing，按需 behavioral tier 评估 execution/dialogue trace [Source:evals][Source:local-scan]。
- 目录结构清楚：skills、agents、references、hooks、docs、commands、evals 分离 [Docs:readme]。

不给 5 的原因：Tier 2 是 TF-IDF lexical approximation；Tier 3 依赖 headless agent、grader、权限和 token 成本；hooks 的安全与跨平台可靠性仍需人工审查。本条目没有安装插件，也没有执行 eval，因此 4 分代表“验证体系已实质成形”，不代表 24 个 skills 的行为都已独立复现 [Source:evals]。

## 可扩展性

评分 4/5。

扩展方式清晰：新增 `skills/<skill-name>/SKILL.md`，用 frontmatter `name/description` 声明触发条件；CONTRIBUTING 给出结构建议和避免重复/空 scripts 目录等规则 [Docs:contributing]。因为格式是纯 Markdown，fork 和二次裁剪成本很低。

局限在于没有真正的 package/dependency/version solver。skill 之间的引用靠文本和 validator 的 regex 检查；平台对 skill discovery 的支持差异大。若要做团队级治理，还需要额外版本锁定、审计、测试和发布流程。

## 文档质量

评分 4/5。

README 解释清楚了为什么需要 skills、有哪些 commands、各平台如何接入、skills/personas/references/hooks 的结构 [Docs:readme]。CONTRIBUTING 与 skill anatomy/各平台 setup 文档补足了作者视角和维护规范 [Docs:contributing]。

扣分点：文档主要集中在 GitHub repo，缺少独立文档站；部分平台适配是「可用方法」而非等价体验；没有足够的真实案例报告来量化引入前后的质量提升。

## 社区与成熟度

| 维度 | 评分 | 说明 |
|------|------|------|
| 社区活跃度 | 3/5 | 79134 stars、8507 forks、open issues=48、open PRs=76；可见度极高，但仍是 visibility signal，不直接证明生产采用、响应速度或长期社区治理成熟 [GH:API] |
| 成熟度 | 2/5 | 创建于 2026-02-15，已有 6 个 releases、latest `0.6.4`；eval 与跨平台分发已明显增强，但流程资产仍需时间检验 [GH:API][GH:releases][GH:release] |

## 安全与风险

评分 3/5。

安全风险不在于传统 runtime CVE，而在于 **prompt/instruction supply chain**：

- skills 会影响 agent 决策，若被恶意修改，可能诱导 agent 执行错误命令、跳过验证或泄露信息。
- hooks 目录包含 shell 脚本和配置/说明文件，若用户直接安装运行，需要像审计代码一样审计 hooks。
- security-and-hardening skill 本身有价值，但它不能替代 sandbox、权限隔离、secret scanning 和人工 review。
- 指令优先级冲突是核心风险：来自 system prompt、用户指令、平台默认规则、tool 描述和 skill 的要求可能相互覆盖，agent 未必会显式报告冲突。
- 模型级差异也很大：同一套 skills 在强/弱模型、长/短上下文、不同 reasoning 设置下的执行可靠性可能完全不同。
- GitHub repository-advisory API 本轮返回空，但 community profile 中未发现 SECURITY.md；这对指令供应链项目而言仍是治理短板，空结果也不是安全证明 [GH:advisories][GH:community]。

建议使用方式：固定 commit 或 release；fork 后审计；只启用必要 skills；不要自动跟随 main 分支更新；不要在高权限生产 repo 中直接加载未经审查的 hooks。

## 学习价值

很高。对 Develata 的 Hermes skill 体系尤其有参考价值：

- `description` 作为触发条件，不只是简介。
- progressive disclosure：SKILL.md 只放流程，references/checklists 按需加载。
- anti-rationalization：明确写出 agent 偷懒借口并逐条反驳。
- verification gates：每个流程以 evidence requirements 收束。
- validator-owned exemptions：不能让 skill 自己声明免检，治理边界清楚 [Source:validator]。

可迁移启发：我们的 skills 也可以更系统地要求 “When to Use / Process / Red Flags / Verification”，并用 validator 检查 frontmatter、必需章节和死链接。
