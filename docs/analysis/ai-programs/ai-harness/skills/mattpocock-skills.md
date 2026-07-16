---
title: "Skills For Real Engineers"
created: 2026-07-16
updated: 2026-07-16
type: repository-analysis
repo_url: "https://github.com/mattpocock/skills"
category: "ai-programs/ai-harness/skills"
tags: ["agent-skills", "software-engineering", "workflow", "tdd", "code-review", "domain-modeling", "claude-code", "codex"]
previous_repo: ""
successor: ""
primary_language: "Markdown / Shell"
license: "MIT"
stars: 172006
forks: 14770
last_checked: 2026-07-16
last_verified: 2026-07-16
evidence: "GitHub API/issues/releases/advisories + local shallow clone static review at e9fcdf95b402d360f90f1db8d776d5dd450f9234 + shell syntax and npm pack dry-run; no real-agent task benchmark or installation into a production workflow"
archived_reason: ""
docker_support: false
gpu_required: false
estimated_cpu: "skill files have no standalone runtime; actual cost is borne by the agent, model and invoked tools"
estimated_memory: "skill files have no resident process; context cost varies substantially by activated skill"
estimated_storage: "npm pack dry-run: 154,318-byte archive / 427,432-byte unpacked package at root package version 1.1.0"
status: active
ratings:
  capability: 4
  usability: 3
  performance: 3
  code_quality: 3
  documentation: 4
  community: 3
  maturity: 2
  extensibility: 4
  security: 3
  recommendation: 3
overall_score: 3.2
sources:
  - "[GH] https://github.com/mattpocock/skills"
  - "[GH:api] GitHub REST/GraphQL snapshot 2026-07-16: created_at=2026-02-03T11:15:53Z, pushed_at=2026-07-14T18:32:39Z, default_branch=main, stars=172006, forks=14770, open issues=166, open PRs=2, default-branch history=310 commits, primary API language=Shell, archived=false, root license=MIT; REST open_issues_count=168 reconciles to 166 issues + 2 PRs"
  - "[GH:readme] README.md at commit e9fcdf95b402d360f90f1db8d776d5dd450f9234 inspected 2026-07-16: documents skills.sh and Claude plugin installation, a one-time setup skill, user/model invocation split, and engineering/productivity catalog; capability statements are repository claims, not independently benchmarked task outcomes"
  - "[GH:local-scan] Shallow clone /opt/data/tmp/github-trending-2026-07-15/skills at commit e9fcdf95b402d360f90f1db8d776d5dd450f9234 inspected 2026-07-16: 165 tracked files, 111 Markdown/MDX files, 40 SKILL.md files, 22 promoted engineering/productivity skills, one GitHub workflow, and two test/spec-ish paths by path heuristic. All 22 promoted skills had matching human docs and agents/openai.yaml; all plugin skill paths resolved. package.json version=1.1.0 while .claude-plugin/plugin.json version=1.2.0, contrary to the repo AGENTS.md invariant that they remain synchronized"
  - "[GH:skill-design] Local writing-great-skills, codebase-design, to-tickets, code-review, implement, grill-me, CONTEXT.md and repository AGENTS.md inspected 2026-07-16: the corpus defines invocation/cognitive/context load, router skills, progressive disclosure, completion criteria, leading words, deep modules, tracer-bullet dependency edges, and separate Standards/Spec review lanes"
  - "[GH:issues] GitHub issues checked 2026-07-16: open #240 reports grill-me/grill-with-docs sometimes proceeding into implementation without explicit approval; open #341 reports loss or weakening of resolved requirements across grill -> PRD -> issues -> implementation and proposes stable decision IDs plus coverage evidence. These are user reports and design discussions, not controlled cross-model benchmarks"
  - "[GH:releases] GitHub releases/tags checked 2026-07-16: four releases/tags visible; latest public release v1.1.0 published 2026-07-08; v1.0.0 and v1.0.1 were published 2026-06-17"
  - "[GH:community] GitHub contributors/community endpoints checked 2026-07-16: contributors endpoint returned mattpocock=299, TESTPERSONAL=8 and github-actions[bot]=3; community health=42%, with README and LICENSE present but no detected CONTRIBUTING, CODE_OF_CONDUCT, issue template, PR template or SECURITY policy"
  - "[GH:advisories] GitHub repository security-advisories endpoint checked 2026-07-16 and returned []; this means no published repository advisory was found in this check, not that the skill instructions, scripts, installers or downstream tools are audited safe"
  - "[Local:pack] Local checks on 2026-07-16: bash -n passed for tracked shell scripts; npm pack --dry-run succeeded as mattpocock-skills@1.1.0 with 154,318-byte archive, 427,432-byte unpacked size and 162 package entries. Claude CLI was unavailable, so the repository-prescribed claude plugin validate . --strict command was not run"
  - "[Local:workflow] Local Develata workflow sources inspected 2026-07-16 for overlap/integration claims: /opt/data/skills-develata/workflows/{task-universal-steps,develata-code-workflow,ai-for-math-harness}/SKILL.md and /opt/data/skills-develata/research/research-knowledge-workflows/references/ai-for-math-harness-optimization.md"
  - "[WikiLocal:comparisons] Local same-category analyses inspected 2026-07-16: /opt/data/wiki/github-repo-wiki/ai-programs/ai-harness/skills/{openai-skills,anthropic-skills,scientific-agent-skills}.md; used only for category-level positioning, not as fresh upstream verification"
---

# Skills For Real Engineers

> 一套把软件工程基本功包装成可组合 Agent Skills 的个人方法库；最值得复用的是 skill authoring vocabulary 与 decision traceability 问题定义，而不是整包替换现有 Hermes workflow。
>
> **状态**: `active` · **总分**: 3.2/5 · **推荐度**: 3/5
> **核验版本**: main commit `e9fcdf95b402d360f90f1db8d776d5dd450f9234`；公开 release `v1.1.0`；GitHub/API 快照 2026-07-16

## 一句话总结

`mattpocock/skills` 适合已经有 agent harness、希望研究“如何把 alignment、domain language、spec、vertical slices、TDD、debugging 与 review 写成可组合 skills”的工程师；对现有成熟 workflow，应按概念和局部 skill 选择性吸收，不宜全量覆盖安装。

## 总体评价

这个仓库最有辨识度的不是某条命令，而是它试图给 **skill engineering** 建立一套词汇：model-invoked 与 user-invoked、context load 与 cognitive load、router skill、completion criterion、progressive disclosure、leading word、deep module、tracer bullet 等 [GH:skill-design]。它比单纯 prompt collection 提供了更多 authoring-level structure：关心 skill 为什么触发、如何保持流程可预测、怎样避免后续步骤诱发 premature completion，以及如何让工程术语在 conversation、code 和 artifacts 之间一致。

仓库的工程流程覆盖 alignment、domain modeling、spec/tickets、TDD、debugging、architecture、implementation 与双轴 code review；README 也明确反对由重型方法论接管整个过程，强调小、可改、可组合 [GH:readme]。这一立场与现有 Hermes/Develata workflow 相容，但内容大量重叠：我们的 `task-universal-steps`、`develata-code-workflow`、review gates 与 AI-for-Math research objects 已经覆盖同类骨架，直接安装整包会增加重复触发、路由冲突和维护面 [Local:workflow]。

负面证据同样重要。#240 表明 planning skill 可能在问完后越界实施；#341 更尖锐地指出，从 grill 到 PRD、issues、implementation 的连续摘要会让 constraints、negative requirements、edge cases 和 numerical defaults 逐层衰减 [GH:issues]。这两条不是旁枝，而是所有多阶段 harness 的核心风险：**流程名称完整，不等于决策保真。**

## 推荐度：3/5

**角色定位**：推荐给维护 Agent Skills、coding-agent workflow 或内部工程方法库的工程师，作为可拆解的方法论与 authoring corpus；不建议已有成熟 harness 的团队无审查全量安装。

推荐度给 3，而不是 4：

1. 值得直接学习的概念密度高，尤其是 invocation split、router、completion criteria、leading words 和 Standards/Spec 分离审查 [GH:skill-design]。
2. 22 个 promoted skills 都有对应 human docs 与 OpenAI agent metadata，plugin manifest 也能解析到真实 skill 路径，仓库组织并非随意堆放 [GH:local-scan]。
3. 但项目创建仅约五个月，公开 release 历史很短，两个关键 workflow correctness 问题仍公开存在 [GH:api][GH:issues][GH:releases]。
4. 本轮没有把技能安装到真实 Claude/Codex/Hermes 项目做任务级 A/B，也没有公开 eval 证明整套流程比现有 harness 更可靠。

结论是：**收录、跟踪、定向借鉴；不 wholesale adopt。** 对我们的 workflow，先把稳定 decision IDs / coverage gate 映射到既有 contract、claim 与 verification objects，再考虑任何新 skill 数量扩张 [Local:workflow]。

## 优势

1. **把 skill 写作当作工程问题**：强调 predictability、trigger surface、context cost、completion criteria 与 single source of truth [GH:skill-design]。
2. **方法论可组合**：alignment、spec、tickets、TDD、debug、architecture、review 各自成 skill，没有强迫用户接受单一 all-in-one runtime [GH:readme]。
3. **domain language 有明确位置**：`CONTEXT.md` 不是泛泛背景，而是压缩术语、稳定 naming、减少 agent 解释成本的共享词汇表 [GH:readme][GH:skill-design]。
4. **切片和依赖意识清楚**：`to-tickets` 要求 tracer-bullet vertical slices 与 blocking edges，并为 wide refactor 单独定义 expand–contract 例外 [GH:skill-design]。
5. **审查维度分离**：`code-review` 把 Standards 与 Spec 放进独立 sub-agent context，避免一个维度掩盖另一个 [GH:skill-design]。
6. **分发面现实**：skills.sh 适合复制后修改，Claude plugin 适合订阅更新；两者对应 fork 与 managed bundle 两种治理哲学 [GH:readme]。

## 劣势

1. **decision provenance 尚未闭环**：#341 指出 resolved answers 在多阶段压缩中可能丢失，当前仓库没有稳定 ID + coverage validator 的完成态实现 [GH:issues]。
2. **planning/execution 边界仍会漂移**：#240 的用户报告说明仅靠文字 skill 未必能阻止某些 model/harness 在 grill 结束后直接实施 [GH:issues]。
3. **公开验证面薄**：本地只看到一个 release workflow，没有仓库级 skill schema、manifest drift、link、example behavior 或 task-eval CI [GH:local-scan]。
4. **主分支版本发生漂移**：`package.json=1.1.0`，Claude plugin manifest 已是 `1.2.0`，与仓库自身“版本必须同步”的 invariant 不一致 [GH:local-scan]。
5. **治理集中**：contributors endpoint 显示主要提交高度集中于 Matt Pocock，且缺少公开 CONTRIBUTING/CODE_OF_CONDUCT/SECURITY 等社区文件 [GH:community]。
6. **安装整包会放大重复**：已有 alignment、review、TDD、spec skills 的 harness 若再并排安装，会增加 invocation collisions 与多套术语并存；仓库的“小而可组合”并不会自动解决跨仓库组合问题。

---

## 适合什么场景

- 设计或重构自己的 Agent Skills authoring guide。
- 研究 user-invoked / model-invoked skills 与 router 的 trade-off。
- 给工程 workflow 增加 domain glossary、vertical slice、blocking edge 或 dual-axis review。
- 从 issue 讨论中研究 multi-stage summarization 如何损失 requirements provenance。
- Claude Code 用户希望试用一套 opinionated engineering skill pack，并愿意逐项调整。

## 不适合什么场景

- 已有成熟 Hermes/Claude/Codex workflow，想直接全量替换现有规则。
- 需要跨模型、跨 harness 的稳定行为保证，但不准备做真实 task eval。
- 希望一个 autonomous agent framework、scheduler、state store 或 durable orchestration runtime；本项目是 skill corpus，不是这些基础设施。
- 对每条决策都要求机器可验证 traceability，而又不能接受当前 #341 所示缺口。
- 不愿审查 skill 中的 shell、git、issue-tracker、commit 等 side effects。

## 与类似项目对比

| 项目 | 定位 | 相对本项目 |
|------|------|-----------|
| OpenAI Skills | Codex 官方 system/curated skill catalog | OpenAI Skills 的官方 Codex 对齐更强；本项目的方法论风格、工程叙事与组合流程更完整 |
| Anthropic Agent Skills | Claude 官方格式样例与 document skills reference | Anthropic 仓库更适合看官方 Agent Skills 结构与产品边界；本项目更像一位工程师的 opinionated operating system |
| Scientific Agent Skills | 应用科学领域的大型专业 skill collection | Scientific Agent Skills 胜在领域覆盖；本项目聚焦通用软件工程方法与 workflow composition |

上述项目按 `ai-programs/ai-harness/skills` 同类范围做定位级对比，依据本地 wiki 既有条目的标题级定位与分类语境，而非本轮重新抓取竞品全部外部事实；未按同一 10 维度框架重审 [WikiLocal:comparisons]。

---

## 它能做什么

能力广度评分 4/5。

promoted catalog 覆盖：

- alignment 与 grilling；
- setup、domain language、ADR 与 spec；
- tracer-bullet tickets、blocking edges 与 wayfinding；
- prototype、TDD、debugging、implementation；
- deep-module architecture 与 codebase improvement；
- Standards/Spec 双轴 review；
- merge-conflict resolution、research、handoff 与 teaching [GH:readme][GH:skill-design]。

不给 5，因为这些是 instructions and workflow contracts，不是一个能统一保证任务执行、state persistence、traceability 和 acceptance 的 runtime。尤其 #240/#341 已表明“有 skill”与“流程稳定闭环”之间仍有距离 [GH:issues]。

## 运行环境与资源占用

| 场景 | CPU | 内存 | 存储 | 说明 |
|------|-----|------|------|------|
| skill package 本体 | 无独立 runtime | 无常驻进程 | 约 427 KB unpacked | `npm pack --dry-run` 点时结果 [Local:pack] |
| 单个 skill 激活 | 由 agent/model/tool 决定 | 主要是 context window | 取决于生成 artifacts | 短 router 很轻，wayfinder/teach 等长 skill 成本更高 |
| 完整工程流程 | 取决于 tests/build/subagents | 取决于模型上下文与并发 | issue/docs/test artifacts | 开销来自实际工程工具，不来自 Markdown 仓库本身 |

- **运行时**：Claude Code、Codex 或其他 Agent-Skills-compatible harness。
- **操作系统**：技能格式本身跨平台；shell helpers 需要兼容 shell 环境。
- **Docker**：`docker_support=false`；这是文件型 skill corpus，不是服务。
- **GPU**：不需要。
- **外部依赖**：目标 agent、skills.sh/npm 或 Claude plugin；具体 skills 可能使用 git、issue tracker、tests 与 subagents [GH:readme][GH:skill-design]。

资源效率评分 3/5。仓库本体很轻，但真实成本是 context、model calls、subagents 和工具执行；未做 task-level token/latency benchmark，不能因文件小直接给 5。

## 上手体验

评分 3/5。

README 的 `npx skills@latest add mattpocock/skills` 和 Claude plugin 两条路径清楚，setup skill 还会询问 issue tracker、triage labels 与 docs location [GH:readme]。对 Claude/Codex 用户，首次看到价值并不困难。

扣分来自 adoption complexity：需要理解 promoted/draft/deprecated、user/model invocation、router、project setup 和 issue-tracker conventions；已有 harness 还必须处理重复 skills 与术语冲突。主分支 package/plugin version drift 也说明 managed update 路径仍需谨慎 pin [GH:local-scan]。

## 代码质量

评分 3/5。

作为 non-software/hybrid repo，代码质量主要评价目录治理、skill contract、manifest consistency、helper scripts 与可验证性。正面信号是 promoted 与非 promoted buckets 分离，22 个 promoted skills 的 docs/metadata/manifest 映射完整；tracked shell scripts 通过 `bash -n`，npm pack dry-run 成功 [GH:local-scan][Local:pack]。

不给 4：公开仓库只有 release workflow，未见自动验证 skill frontmatter、docs drift、router coverage、behavior fixtures 或 cross-model eval；`package.json` 与 plugin manifest 当前版本不一致，而这正是 AGENTS.md 明确要求避免的 drift [GH:local-scan]。再加上 #240/#341 所示行为缺口，结构整洁不能替代 outcome validation [GH:issues]。

## 可扩展性

评分 4/5。

每个 skill 都是独立目录，可复制修改；skills.sh 与 Claude plugin 分别支持 fork-style 和 subscription-style distribution。router、setup、human docs 与 OpenAI metadata 让新增 skill 有明确投影位置 [GH:readme][GH:local-scan]。

不给 5，因为跨 harness semantics 仍不统一，repository-specific issue tracker 与 invocation metadata 需要适配；也没有稳定 schema/eval layer 保证第三方扩展不会破坏 routing、traceability 或 context budget。

## 文档质量

评分 4/5。

README 不只列清单，还解释四类常见 agent failure；promoted skills 有独立 human-facing docs，仓库有 AGENTS.md、CONTEXT.md、ADRs、CHANGELOG 与 changesets。`writing-great-skills` 对 skill 信息层级、context pointer、co-location、pruning 和 failure modes 的论述尤其有长期参考价值 [GH:readme][GH:skill-design][GH:local-scan]。

扣分在于缺少独立的 behavior/eval documentation 与 security/governance docs，且部分关键正确性问题仍主要存在于 issues 而非完成态契约中 [GH:issues][GH:community]。

## 社区与成熟度

| 维度 | 评分 | 说明 |
|------|------|------|
| 社区活跃度 | 3/5 | 2026-07-16 快照为 172,006 stars、14,770 forks、166 open issues、2 open PRs；近期 push 与提交活动活跃，但贡献高度集中且 governance files 不完整 [GH:api][GH:community]。 |
| 成熟度 | 2/5 | 2026-02 创建，公开 release 从 2026-06 才开始，最新为 v1.1.0；关键 workflow traceability 与 phase-boundary 问题仍在讨论，长期稳定性尚未证明 [GH:api][GH:issues][GH:releases]。 |

热度说明工程师群体对该问题高度关注，不证明 22 个 promoted skills 在不同模型/harness 上都稳定有效。

## 安全与风险

评分 3/5。

技能仓库本身没有常驻服务，root license 为 MIT，repository advisories endpoint 本轮返回空；这降低了传统网络服务攻击面，但不等于安全 [GH:api][GH:advisories]。

真实风险是 **agent instruction supply chain**：skills 会指导 agent 读写 issue tracker、运行 tests、调用 subagents、执行 git 操作，`implement` 甚至默认提交当前分支 [GH:skill-design]。全量安装意味着把个人工程偏好和 side-effect assumptions 注入 agent control plane。采用时应逐 skill 审查、固定 revision、限制工具权限，并让本地更高优先级的 commit/push/safety rules 覆盖上游默认行为。

此外，没有公开 SECURITY policy、schema validation 或 task-level adversarial eval；`[]` advisory 只是一项 negative lookup [GH:community][GH:advisories]。因此 3/5 表示“有部分边界意识但缺乏安全验证”的中性判断，不因 advisory 为空加分。

## 学习价值

很高，且比直接采用价值更高。对现有 Hermes/Develata harness，优先吸收四点：

1. **Completion criteria 是 skill 的 acceptance gate**：每个步骤都应有可判定且必要时 exhaustive 的完成条件，防止 premature completion [GH:skill-design]。
2. **Invocation 是预算分配**：model-invoked 消耗常驻 context，user-invoked 消耗人的记忆；router 是解决 cognitive load 的结构，不是再加一个长 prompt [GH:skill-design]。
3. **决策需要稳定身份**：#341 的 decision ledger + coverage evidence 思路，可映射到普通工程的 requirement IDs，也可映射到现有 AI-for-Math 的 claim IDs、blocked lemmas 与 verification records [GH:issues][Local:workflow]。
4. **Generation 与 review axes 要隔离**：Standards 与 Spec 分开审查，能减少“代码漂亮但做错事”或“功能对但破坏约定”的相互遮蔽 [GH:skill-design]。

不宜照搬的部分也很清楚：我们已有更严格的 source grounding、failure-first、real execution、review、scoped commit 与 no-push gates；新增平行 skills 前，应先去重而不是被 172k stars 诱导扩张 [Local:workflow]。
