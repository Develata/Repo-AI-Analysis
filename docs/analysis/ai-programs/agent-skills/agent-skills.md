---
title: "Agent Skills"
created: 2026-05-31
updated: 2026-05-31
type: repository-analysis
repo_url: "https://github.com/addyosmani/agent-skills"
category: "ai-programs/agent-skills"
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
primary_language: "Shell / JavaScript / Markdown"
license: "MIT"
stars: 47150
forks: 5231
last_checked: 2026-05-31
last_verified: 2026-05-31
evidence: "GitHub API metadata + local shallow clone source scan + README/docs/validator/workflow review; non-software scoring rubric applied"
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
  usability: 4
  performance: 3
  code_quality: 3
  documentation: 4
  community: 3
  maturity: 2
  extensibility: 4
  security: 3
  recommendation: 3
overall_score: 3.3
sources:
  - "[GH] https://github.com/addyosmani/agent-skills"
  - "[GH:API] GitHub REST/GraphQL metadata for addyosmani/agent-skills, checked 2026-05-31"
  - "[Source:local-scan] Local shallow clone at /opt/data/tmp/repo-wiki-trending-2026-05-31/repos/addyosmani-agent-skills, commit 6ce029897d2b, checked 2026-05-31: 77 Git-tracked files, 55 markdown files, 7 shell scripts, 1 JavaScript validator, 1 workflow, 23 skills, 7 slash commands, 3 specialist personas, 4 checklist references plus orchestration-patterns.md; no plugin install was executed locally"
  - "[GH:releases] https://github.com/addyosmani/agent-skills/releases"
  - "[Docs:readme] https://github.com/addyosmani/agent-skills/blob/main/README.md"
  - "[Docs:contributing] https://github.com/addyosmani/agent-skills/blob/main/CONTRIBUTING.md"
  - "[Docs:opencode] https://github.com/addyosmani/agent-skills/blob/main/docs/opencode-setup.md"
  - "[Source:validator] https://github.com/addyosmani/agent-skills/blob/main/scripts/validate-skills.js"
  - "[Source:ci] https://github.com/addyosmani/agent-skills/blob/main/.github/workflows/test-plugin-install.yml"
---

# Agent Skills

> Addy Osmani 维护的 production-oriented engineering skills pack：把 spec、plan、TDD、review、security、ship 等工程纪律编码成可被 AI coding agents 执行的结构化 workflow。
>
> **状态**: `active` · **总分**: 3.3/5 · **推荐度**: 3/5

## 一句话总结

Agent Skills 是一组面向 AI coding agents 的 **工程纪律注入包**：23 个 skills、7 个 lifecycle slash commands、3 个 specialist personas、4 个 reference checklists，覆盖 Claude Code、Cursor、Gemini CLI、OpenCode、Copilot、Codex 等平台；它不是传统软件库，而是高质量流程资产，适合借鉴和局部采用，但因项目仅 3 个多月历史，不能当成长期稳定标准。

## 总体评价

这个 repo 的核心主张很简单：AI coding agents 默认会走捷径，所以要把 senior engineer 的工作流程做成 agent 可执行的 skill。README 明确列出 7 个 slash commands：`/spec`、`/plan`、`/build`、`/test`、`/review`、`/code-simplify`、`/ship`，并说明 pack 包含 23 个 skills，其中 22 个 lifecycle skills + 1 个 `using-agent-skills` meta-skill [Docs:readme]。

按传统软件标准看，它几乎没有运行时；按 non-software/hybrid rubric 看，它的质量信号反而清楚：skill anatomy、contributing 规范、validator、CI、plugin install test、Claude/Gemini/OpenCode/Copilot/Cursor 文档都有 [Docs:contributing] [Source:validator] [Source:ci]。本地 clone 显示 77 个 Git-tracked 文件，其中 55 个 markdown、7 个 shell script、1 个 JS validator、1 个 workflow；体量小而结构集中 [Source:local-scan]。

它和之前收录的 Superpowers、Anthropic Skills、Scientific Agent Skills 同属 agent-skills 分类，但气质不同：Superpowers 更像一套强制流程哲学；Anthropic Skills 更偏 Claude 生态的官方格式样板；Scientific Agent Skills 偏领域知识包；Agent Skills 则是 **Google/production engineering flavored 的通用软件工程流程包**。其可取处在「反 rationalization、verification gates、质量门禁、progressive disclosure」；其风险也在这里——流程越强，越可能在小任务上 overfit，且不同 agent 平台的真实执行力差异很大。

## 推荐度：3/5

**目标角色**：使用 Claude Code、Cursor、Codex、Gemini CLI、Copilot 等 coding agent 做中等复杂度项目，希望 agent 不再跳过 spec、tests、review、security gate 的开发者。

推荐度 3/5。它值得收录、值得读，也适合选择性借鉴；但评分表里的 recommendation 按“采用风险”给分，而不是按“内容启发性”给分。

正面理由：

- 流程覆盖完整：Define → Plan → Build → Verify → Review → Ship，且每个 skill 有 verification/exit criteria [Docs:readme]。
- 文档和格式意识强：CONTRIBUTING 明确要求 skills specific、verifiable、battle-tested、minimal，并建议包含 Common Rationalizations、Red Flags、Verification 等结构 [Docs:contributing]。
- 工程化验证存在：`scripts/validate-skills.js` 检查 frontmatter、required sections、dead cross-skill references；CI 还测试 Claude plugin marketplace/install flow [Source:validator] [Source:ci]。
- 跨平台设计务实：同一套 markdown assets 可进入 Claude Code plugin、Cursor rules、Gemini skills、OpenCode intent mapping、Copilot personas/instructions [Docs:readme]。

保守扣分：

- 创建于 2026-02-15，latest release `0.6.1`，项目年龄只有 3 个多月；成熟度只能给 2/5 [GH:API] [GH:releases]。
- GitHub community profile health 57%，缺少 SECURITY.md / Code of Conduct 等常见社区治理文件；对一个可能被 agents 自动加载执行的指令集合，这不是致命问题但值得记录 [GH:API]。
- Stars 高达 47k，但 issue/PR 数也高；热度可能混有 Addy Osmani 个人影响力，不应直接等同于广泛生产验证 [GH:API]。
- agent skill 的实际效果取决于目标 agent 是否遵守流程；Markdown 不是强制执行机制，只是强 prompt + 周边 hooks，且可能被更高优先级的 system/user/platform 指令覆盖。

结论：**值得收录，值得读，适合借鉴；推荐采用其中若干 skills，而不是无脑全量导入。**

## 优势

1. **流程设计完整**：从需求澄清、spec、planning、incremental implementation、TDD、browser testing、debugging、review、安全、性能、CI/CD、deprecation 到 shipping，覆盖完整 SDLC [Docs:readme]。
2. **反 agent 偷懒机制明确**：README 和 skill anatomy 强调 anti-rationalization、red flags、verification gates；这正对 coding agent 常见的 “I’ll add tests later” 病灶 [Docs:readme] [Docs:contributing]。
3. **跨平台适配广**：Claude Code plugin/marketplace、Cursor rules、Gemini CLI skills、Windsurf、OpenCode、Copilot、Kiro、Codex/other agents 均有安装/使用路径 [Docs:readme]。
4. **内容即产品，结构清晰**：`skills/`、`agents/`、`references/`、`hooks/`、`.claude/commands/`、`.gemini/commands/` 分层明确 [Docs:readme]。
5. **有基本自动化校验**：validator 检查 SKILL.md、frontmatter、required sections、description length、cross-skill references；CI 测试 plugin validation/install [Source:validator] [Source:ci]。
6. **MIT 许可与纯文本格式**：容易 fork、裁剪、迁移到自己的 agent system，不形成强厂商锁定 [GH:API]。

## 劣势

1. **项目极年轻**：创建于 2026-02-15，release 只有 `0.5.0`、`0.6.0`、`0.6.1` 三个可见版本；长期稳定性未被验证 [GH:API] [GH:releases]。
2. **非强制执行**：skills 本质仍是 markdown 指令。即使写了 gate，agent 是否真的遵守取决于平台、模型能力、上下文长度、指令优先级、工具权限和用户是否监督。
3. **流程可能过重**：对于一次性脚本、小修小补、探索性 spike，全套 spec/plan/review/ship 会拖慢速度。
4. **平台能力不均**：Claude Code 有 plugin 与 slash command 体验；OpenCode 文档承认没有 native plugin system 或 automatic skill routing，需要 AGENTS.md/intent mapping 模拟 [Docs:opencode]。
5. **安全治理文件不足**：community profile health 57%，GitHub API 未发现 SECURITY.md / Code of Conduct；虽然内容含 security-and-hardening skill，但 repo 自身治理仍偏轻 [GH:API]。
6. **热度解释需保守**：47k stars、5.2k forks 很高，但这类 non-software repo 的 stars 常反映理念共鸣和收藏，不必然等于生产部署成功。

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

上述项目按 `ai-programs/agent-skills` 同类范围做定位级对比，未按同一 10 维度框架深审；其中 Hermes Agent skills 是本地体系参照项，不是公开 GitHub repo 的直接竞品。

## 个人主页 sharing 候选

**是。**

适合写成「如何让 coding agent 像 senior engineer 一样工作」的分享：不是写更长 prompt，而是把流程拆成可触发、可验证、可复用的 skills。它的传播点明确：AI 不是缺能力，而是缺工程纪律；skills 是纪律的载体。

分享时要保守注明：项目很新、未必适合全量采用、不同 agent 平台效果差异大。最好用「挑 3 个 skills 试用」而非「安装后生产可用」作为推荐方式。

---

## 它能做什么

**7 个 lifecycle slash commands** [Docs:readme]：

- `/spec`：定义要构建什么，spec before code。
- `/plan`：将需求拆成小任务。
- `/build`：增量实现。
- `/test`：证明行为正确。
- `/review`：代码健康检查。
- `/code-simplify`：降低复杂度。
- `/ship`：上线前质量门禁。

**23 个 skills** [Docs:readme]：

- Meta：`using-agent-skills`。
- Define：`interview-me`、`idea-refine`、`spec-driven-development`。
- Plan：`planning-and-task-breakdown`。
- Build：`incremental-implementation`、`test-driven-development`、`context-engineering`、`source-driven-development`、`doubt-driven-development`、`frontend-ui-engineering`、`api-and-interface-design`。
- Verify：`browser-testing-with-devtools`、`debugging-and-error-recovery`。
- Review：`code-review-and-quality`、`code-simplification`、`security-and-hardening`、`performance-optimization`。
- Ship：`git-workflow-and-versioning`、`ci-cd-and-automation`、`deprecation-and-migration`、`documentation-and-adrs`、`shipping-and-launch`。

**3 个 personas + references** [Docs:readme]：

- `code-reviewer`、`test-engineer`、`security-auditor`。
- testing/security/performance/accessibility checklists，以及 `orchestration-patterns.md` 这类 persona 编排参考 [Source:local-scan]。

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

评分 3/5。

虽然它不是传统软件项目，但作为 skill pack，有以下质量信号：

- `CONTRIBUTING.md` 明确 skill quality bar：specific、verifiable、battle-tested、minimal [Docs:contributing]。
- `scripts/validate-skills.js` 检查每个 skill 的 SKILL.md、YAML frontmatter、required sections、description length、dead cross-skill references [Source:validator]。
- CI 包含 skill content validation、Claude plugin validate、plugin marketplace install test [Source:ci]。
- 目录结构清楚：skills、agents、references、hooks、docs、commands 分离 [Docs:readme]。

扣分点：这些验证主要证明结构和 marketplace/install surface，不证明 skill 的语义正确性、agent 遵循度、hook 安全或跨平台可靠性；项目只有一个 validator workflow，语义测试浅，hooks 目录包含 shell 脚本和相关配置文件，跨平台和异常恢复仍需人工审查。本条目没有实际安装 Claude plugin，只做静态审查，所以不按 4 计。

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
| 社区活跃度 | 3/5 | 47.1k stars、5.2k forks、29 contributors；open issues 43、open PR 50。点时热度和贡献者规模很高，但这主要是 visibility signal，不直接证明生产采用、响应速度或长期社区治理成熟 [GH:API] |
| 成熟度 | 2/5 | 创建于 2026-02-15，latest release `0.6.1`，只有 3 个可见 release；流程资产需要时间检验，暂不应视为稳定标准 [GH:releases] |

## 安全与风险

评分 3/5。

安全风险不在于传统 runtime CVE，而在于 **prompt/instruction supply chain**：

- skills 会影响 agent 决策，若被恶意修改，可能诱导 agent 执行错误命令、跳过验证或泄露信息。
- hooks 目录包含 shell 脚本和配置/说明文件，若用户直接安装运行，需要像审计代码一样审计 hooks。
- security-and-hardening skill 本身有价值，但它不能替代 sandbox、权限隔离、secret scanning 和人工 review。
- 指令优先级冲突是核心风险：来自 system prompt、用户指令、平台默认规则、tool 描述和 skill 的要求可能相互覆盖，agent 未必会显式报告冲突。
- 模型级差异也很大：同一套 skills 在强/弱模型、长/短上下文、不同 reasoning 设置下的执行可靠性可能完全不同。
- GitHub API 未发现公开 security advisories，但 community profile 中未发现 SECURITY.md；这对指令供应链项目而言是治理短板 [GH:API]。

建议使用方式：固定 commit 或 release；fork 后审计；只启用必要 skills；不要自动跟随 main 分支更新；不要在高权限生产 repo 中直接加载未经审查的 hooks。

## 学习价值

很高。对 Develata 的 Hermes skill 体系尤其有参考价值：

- `description` 作为触发条件，不只是简介。
- progressive disclosure：SKILL.md 只放流程，references/checklists 按需加载。
- anti-rationalization：明确写出 agent 偷懒借口并逐条反驳。
- verification gates：每个流程以 evidence requirements 收束。
- validator-owned exemptions：不能让 skill 自己声明免检，治理边界清楚 [Source:validator]。

可迁移启发：我们的 skills 也可以更系统地要求 “When to Use / Process / Red Flags / Verification”，并用 validator 检查 frontmatter、必需章节和死链接。
