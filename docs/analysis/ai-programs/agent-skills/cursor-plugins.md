---
title: "Cursor Plugins"
created: 2026-05-31
updated: 2026-05-31
type: repository-analysis
repo_url: "https://github.com/cursor/plugins"
category: "ai-programs/agent-skills"
tags: [cursor, plugins, agent-skills, coding-agent, marketplace, workflow]
previous_repo: ""
successor: ""
primary_language: "TypeScript / Markdown"
license: "MIT per plugin directories; GitHub API root license field unavailable"
stars: 1416
forks: 116
last_checked: 2026-05-31
last_verified: 2026-05-31
evidence: "GitHub API metadata + local clone scan + schema validation + Cursor plugin docs review"
archived_reason: ""
docker_support: false
gpu_required: false
estimated_cpu: "N/A"
estimated_memory: "N/A"
estimated_storage: "< 5 MB for plugin files; external Cursor cloud/API runs billed separately"
status: active
ratings:
  capability: 3
  usability: 3
  performance: 3
  code_quality: 3
  documentation: 3
  community: 3
  maturity: 2
  extensibility: 4
  security: 2
  recommendation: 3
overall_score: 2.9
sources:
  - "[GH] https://github.com/cursor/plugins — GitHub REST/GraphQL checked 2026-05-31: created_at=2026-01-23T01:57:42Z, pushed_at=2026-05-30T01:45:40Z, stars=1416, forks=116, open issues=10, open PRs=4, commits=111, releases=0, primary language=TypeScript"
  - "[GH:local-scan] /opt/data/tmp/repo-wiki-trending-2026-05-31/repos/plugins cloned 2026-05-31 at c8402bc8e3673b973719fe3acc2c4837fef34f86: 282 files, 141 dirs, 67 SKILL.md, 13 plugin manifests, 11 agent markdown files, 3 Cursor rules, 5 hook files, 29 test files, 1 workflow, checkout size=3,841,365 bytes, 13 plugin LICENSE files all start with `MIT License`"
  - "[GH:marketplace] https://github.com/cursor/plugins/blob/main/.cursor-plugin/marketplace.json — marketplace manifest lists 13 plugins"
  - "[GH:validator] https://github.com/cursor/plugins/blob/main/scripts/validate-plugins.mjs — local run on 2026-05-31: `npm install --no-save ajv ajv-formats && node scripts/validate-plugins.mjs` returned `All plugins validated successfully.`"
  - "[GH:workflow] https://github.com/cursor/plugins/blob/main/.github/workflows/validate-plugins.yml — PR workflow validates marketplace/plugin JSON using AJV on Node 20"
  - "[GH:orchestrate] https://github.com/cursor/plugins/tree/main/orchestrate — Orchestrate plugin README requires bun, CURSOR_API_KEY, optional Slack token, and Cursor SDK/cloud agents"
  - "[GH:pstack] https://github.com/cursor/plugins/tree/main/pstack — pstack plugin README describes poteto-mode, multi-model review, arena/interrogate/tdd/reflect workflows"
  - "[Docs:cursor-plugins] https://cursor.com/docs/plugins — Cursor docs: plugins can bundle rules, skills, agents, commands, MCP servers, hooks; marketplace plugins are Git repositories and reviewed before listing"
  - "[Docs:agentskills] https://agentskills.io/specification — Agent Skills specification for SKILL.md format and progressive disclosure"
  - "[GH:anthropic-skills] https://github.com/anthropics/skills — same-category official Agent Skills reference, existing local analysis under ai-programs/agent-skills/anthropic-skills.md"
  - "[GH:superpowers] https://github.com/obra/superpowers — same-category engineering workflow skills, existing local analysis under ai-programs/agent-skills/superpowers.md"
---

# Cursor Plugins

> Cursor 官方 plugin marketplace 仓库：把 Cursor rules、Agent Skills、agents、hooks、commands 与少量脚本打包成可安装的开发者工作流插件。
>
> **状态**: `active` · **总分**: 2.9/5 · **推荐度**: 3/5

## 一句话总结

`cursor/plugins` 值得加入 wiki，不是因为它已经是成熟生态，而是因为它展示了 Cursor 对「coding agent 能力包」的官方形态：一个 Git 仓库作为 marketplace，根 manifest 列出插件，每个插件再携带 `.cursor-plugin/plugin.json`、`skills/`、`agents/`、`rules/`、`hooks/` 等文件型能力组件 [GH] [GH:marketplace] [Docs:cursor-plugins]。

## 总体评价

这是一个**官方插件样板库 + 早期 marketplace 种子库 + engineering workflow skill corpus** 的混合仓库。它与 `anthropics/skills`、`anthropics/knowledge-work-plugins` 同属 file-based agent capability packaging，但定位更偏「Cursor 内部/开发者工作流」：continual-learning、cursor-team-kit、thermos、create-plugin、agent-compatibility、cursor-sdk、orchestrate、pstack 等插件都围绕 coding agent 的记忆、审查、并行、SDK 使用、PR review、文档 canvas 和工程纪律展开 [GH:marketplace]。

本轮本地扫描验证了仓库包含 282 个 tracked files、67 个 `SKILL.md`、13 个 plugin manifests、11 个 agent markdown、3 个 `.mdc` rules、5 个 hook files、29 个 `__tests__` 文件；`node scripts/validate-plugins.mjs` 在安装 AJV 后通过，说明 marketplace/plugin JSON 至少满足仓库自身 schema [GH:local-scan] [GH:validator]。这比纯 prompt collection 更工程化。

但成熟度必须保守。仓库创建于 2026-01，当前无 releases、111 commits、stars 仅 1416；README 只有 45 行，许多真实语义需要读每个插件目录。部分插件例如 `orchestrate` 依赖 `CURSOR_API_KEY`、Cursor cloud agents、`bun`，可选 Slack token；`pstack` 明确是个人工程风格封装而非通用标准 [GH:orchestrate] [GH:pstack]。因此它适合观察和拆解，不宜按“稳定生产平台”对待。

## 推荐度：3/5

**角色定位**：推荐给研究 Cursor plugin marketplace、coding-agent workflow packaging、agent skills/rules/hooks 组合方式的人；对非 Cursor 用户主要是架构参考。

推荐理由：
- 官方形态明确：Cursor docs 说明 plugin 可打包 rules、skills、agents、commands、MCP servers、hooks，且官方 marketplace 插件以 Git repo 分发 [Docs:cursor-plugins]。
- 范式与 Develata/Hermes 高相关：continual-learning、thermos、orchestrate、pstack 直接对应记忆治理、多 agent 并行、审查与工程纪律问题 [GH:marketplace]。
- 可验证性尚可：本地 schema validator 成功运行，说明至少 marketplace manifest 与 plugin manifests 有基本结构约束 [GH:validator]。

保留意见：
- 仓库很新、无 release，plugin schema 与 marketplace 生态仍在变化中 [GH]。
- 许多插件绑定 Cursor 产品和 Cursor cloud/API，跨平台复用需要重写语义 [GH:orchestrate]。
- 安全与权限边界依赖 Cursor 平台、用户 token、hooks/scripts 以及插件自身内容；本轮未审计全部 67 个 skills 的行为。

**结论**：加入 wiki，推荐度 3/5。它是 Cursor plugin 生态的早期官方参考样本，适合跟踪、对比、借鉴；但不是可直接迁移到 Hermes 的现成稳定标准。

## 优势

1. **官方 marketplace 样本**：根 `.cursor-plugin/marketplace.json` 列出 13 个插件，每个插件有独立 manifest，这对理解 Cursor 插件分发结构很有价值 [GH:marketplace]。
2. **覆盖 coding-agent 核心工作流**：CI/code review/shipping、deep audit、plugin scaffolding、repo compatibility scan、PR/doc canvas、Cursor SDK、cloud-agent orchestration、pstack 工程纪律等都在 marketplace/plugin 列表和本地扫描中呈现 [GH:marketplace] [GH:local-scan]。
3. **组件类型丰富**：本地扫描确认 skills、agents、rules、hooks、schema、测试文件共存，比单纯 Markdown prompt 更接近 agent capability package [GH:local-scan]。
4. **结构验证可运行**：`validate-plugins.mjs` 用 AJV 校验 marketplace schema 与 plugin schema；本轮实测通过 [GH:validator]。
5. **低本体资源占用**：本轮 checkout size 约 3.84 MB，仓库文件型为主，无常驻服务、无 GPU 需求；真正成本由 Cursor agent/cloud/API 使用决定 [GH:local-scan]。
6. **可迁移设计多**：marketplace manifest、per-plugin manifest、plugin-local README/CHANGELOG/LICENSE、schema validation、hook/skill/rule 分层都可作为 Hermes 未来插件治理参考。

## 劣势

1. **成熟度低**：2026-01 创建、111 commits、无 release；这更像正在快速成型的官方种子仓库，而非长期稳定 API [GH]。
2. **平台绑定强**：README 明确是 Cursor plugins；`orchestrate` 依赖 Cursor SDK/cloud agents 与 Cursor API key，不能离开 Cursor 直接运行 [GH:orchestrate]。
3. **文档浅**：根 README 只列插件和目录结构，很多关键语义分散在各插件 README/SKILL 中；没有看到系统性的版本策略、迁移指南或安全模型 [GH]。
4. **测试覆盖不均**：仓库有 29 个 test files，主要集中在 `orchestrate` 等脚本；不是 67 个 skills 的行为级全量评测 [GH:local-scan]。
5. **根 license 元数据缺失**：GitHub REST 的 root license 为 `NOASSERTION`；本轮扫描到 13 个插件目录各有 `MIT License` 文件，但按仓库整体复用时仍应逐目录检查并关注后续新增插件 [GH] [GH:local-scan]。
6. **个体工作流也列在该仓库 marketplace 中**：例如 pstack 是 Lauren Tan/poteto 的强风格工程方法论，适合学习但不应误认为 Cursor 统一工程标准或所有团队都应采纳的默认流程 [GH:pstack]。
7. **安全面来自 hooks/scripts/API tokens**：plugins 可包含 hooks 和脚本，orchestrate 需要 API key，Slack 集成还需 bot token；安装前必须按供应链材料审查。尤其要注意：JSON schema validation 只证明 manifest 形状正确，不验证 prompt safety、事实性、工具权限、成本控制、抗 prompt injection 能力或运行时副作用 [Docs:cursor-plugins] [GH:orchestrate]。

---

## 适合什么场景

- 研究 Cursor 官方 plugin marketplace 与 team marketplace 形态。
- 设计 coding-agent 能力包：skills + agents + rules + hooks + schemas 的组合方式。
- 对比 Anthropic Skills、Knowledge Work Plugins、Superpowers、dotnet/skills 等 agent capability repositories。
- Cursor 用户希望试用该仓库列出的开发者插件，尤其是 code review、CI、orchestration、Cursor SDK、pstack workflow。
- Hermes skills/plugins 生态治理参考：manifest、schema validation、插件本地 LICENSE/README/CHANGELOG、hook 边界。

## 不适合什么场景

- 不使用 Cursor 且希望开箱即用的用户；许多插件语义绑定 Cursor 客户端、Cursor API 或 Cursor cloud agents。
- 追求长期稳定版本的组织；当前无 releases 和明确版本承诺。
- 安全边界极严格、禁止安装外部 hooks/scripts/agent prompts 的环境。
- 希望获得一套领域完整技能库；当前主要是 developer-tools/workflow，覆盖面不如 `dotnet/skills` 或 scientific skill collection。
- 想直接复用 pstack/thermos 等强风格工作流作为团队标准而不经过本地化审查。

## 与类似项目对比

| 项目 | 定位 | 相对本项目 |
|------|------|-----------|
| Anthropic Agent Skills | Claude 官方 Agent Skills 示例与 document skills reference | Anthropic 更偏 skill spec 与文档技能；Cursor Plugins 更偏 Cursor 产品内的 plugin bundle，把 rules/agents/hooks 也纳入分发 [GH:anthropic-skills]。 |
| Knowledge Work Plugins | Claude Cowork 企业知识工作角色插件 | Knowledge Work 面向 sales/legal/finance/data 等业务角色；Cursor Plugins 面向软件开发者和 coding-agent 工作流。 |
| Superpowers | 跨平台 agentic SDLC skills/workflows | Superpowers 方法论更完整、跨平台心智更强；Cursor Plugins 更官方但平台绑定更强，且生态仍早期 [GH:superpowers]。 |
| dotnet/skills | .NET 团队维护的领域技能与评测体系 | dotnet/skills 更领域化、测试/eval 更重；Cursor Plugins 更像 marketplace seed 与 Cursor 功能展示。 |

---

## 它能做什么

按 marketplace，本仓库当前包含 13 个插件 [GH:marketplace]：

1. `teaching`：学习计划、skill mapping、retrospective。
2. `continual-learning`：从 transcript 中提炼高信号 bullet，更新 `AGENTS.md`。
3. `cursor-team-kit`：Cursor 内部 CI、review、shipping、verification 工作流。
4. `thermos`：深度安全/正确性/代码质量审查，多 subagents 与 merge-ready PR flows。
5. `create-plugin`：脚手架和审查新 Cursor plugins。
6. `ralph-loop`：Ralph Wiggum technique 的自引用迭代 AI loops。
7. `agent-compatibility`：repo compatibility scan、startup/docs/validation 可靠性审查。
8. `cli-for-agent`：面向 coding agents 的 CLI 设计模式。
9. `pr-review-canvas`：把 PR diff 渲染为 Cursor Canvas。
10. `docs-canvas`：把架构文档、API reference、runbook 渲染为可导航 Canvas。
11. `cursor-sdk`：Cursor TypeScript SDK 使用模式、auth、streaming、MCP、错误处理。
12. `orchestrate`：通过 Cursor SDK/cloud agents 进行 planner/worker/verifier 并行编排 [GH:orchestrate]。
13. `pstack`：poteto 的高质量工程工作流与多模型 review/arena/interrogate/tdd/reflect 体系 [GH:pstack]。

本地扫描确认：67 个 `SKILL.md`、11 个 agent markdown、3 个 rules、5 个 hook files、13 个插件 manifest、2 个 schema 文件、1 个 GitHub workflow；checkout size 约 3.84 MB [GH:local-scan]。

## 运行环境与资源占用

| 场景 | CPU | 内存 | 存储 | 说明 |
|------|-----|------|------|------|
| 仓库本体 | N/A | N/A | < 5 MB | Markdown/JSON/TS/JS/CSS/HTML 文件，无常驻服务 |
| Cursor 使用 | 由 Cursor/模型/API 决定 | 由 Cursor/模型/API 决定 | 取决于项目与输出 | 需要 Cursor 客户端/账号，部分插件需要 API key 或外部工具 |
| Orchestrate | 本地脚本轻量；云端 agent 成本另计 | 同左 | 运行状态与 handoff artifacts | 需要 `bun`、`CURSOR_API_KEY`，可选 Slack app/token [GH:orchestrate] |

性能评分 3/5。文件型插件本体轻量；但真实成本来自 Cursor 模型调用、cloud agents、subagent 并行、SDK API、Slack/外部工具 round trips。未做任务 benchmark，故不给高分。

## 上手体验

评分 3/5。

Cursor docs 表明官方 marketplace 插件可在 Cursor marketplace 中发现和安装；team marketplace 可通过 Dashboard → Settings → Plugins 导入 GitHub repository [Docs:cursor-plugins]。对 Cursor 用户而言，插件概念清楚；对团队管理员，required/optional、distribution groups、SCIM 等机制也有产品层支持 [Docs:cursor-plugins]。

扣分点：根 README 没有给出完整安装命令和故障排查；具体插件的 prerequisites 差异大。`orchestrate` 需要 `bun`、`CURSOR_API_KEY`，并可能涉及 Slack app scopes；`pstack` 则是强主观流程入口 `/poteto-mode`，学习曲线来自理解其 playbooks 和原则 [GH:orchestrate] [GH:pstack]。

## 代码质量

评分 3/5。

正面信号：
- 有 JSON schemas 和 AJV validator，本轮实测通过 [GH:validator]。
- plugin manifest 与 marketplace manifest 结构清楚，13 个插件均有本地 LICENSE [GH:local-scan]。
- `orchestrate` 包含较多 TypeScript 测试文件，说明部分脚本能力不是纯文档 [GH:local-scan]。

保守扣分：
- 仓库整体无 release，根文档很薄。
- CI 只在 PR 中验证 marketplace/plugin JSON，不是全量 skill 行为评测 [GH:workflow]。
- workflow action 版本使用 `actions/checkout@v4`、`actions/setup-node@v4`，未按 commit SHA pin；这不是致命问题，但对 marketplace 供应链治理而言不如 `dotnet/skills` 严格 [GH:workflow]。

## 可扩展性

评分 4/5。

插件结构在 Cursor 生态内天然可扩展：新增插件就是新增目录、`.cursor-plugin/plugin.json`、skills/rules/agents/hooks/commands/MCP 配置，再在 root marketplace manifest 注册 [Docs:cursor-plugins] [GH:marketplace]。这与 Agent Skills 的 progressive disclosure 兼容：agent 初始只需看到 skill 名称/description，相关时再读完整 `SKILL.md` [Docs:agentskills]。

限制是跨平台语义：Cursor plugin 可以包含 Cursor-specific rules/hooks/canvas/SDK/cloud-agent assumptions；其他 agent 未必理解这些组件。迁移到 Hermes、Claude、Codex 需要按目标平台重新定义 hook 权限、命令格式与 agent 配置。因此 extensibility=4 只表示 Cursor 内部扩展性较好，不表示跨平台无成本迁移。

## 文档质量

评分 3/5。

Cursor 官方 docs 对 plugin 概念和 marketplace/team marketplace 有较清楚说明：plugins 可包含 rules、skills、agents、commands、MCP servers、hooks；official marketplace 插件经人工 review；team marketplace 可按组织分发 [Docs:cursor-plugins]。仓库 README 则只列出插件表和目录结构，短小清楚但不完整 [GH]。

各插件 README 质量不一：`orchestrate` prerequisites 与 Slack scopes 写得较具体；`pstack` 是完整方法论文档；但整个仓库没有统一的 developer guide、versioning policy、安全模型或 migration notes [GH:orchestrate] [GH:pstack]。

## 社区与成熟度

| 维度 | 评分 | 说明 |
|------|------|------|
| 社区活跃度 | 3/5 | 1416 stars、116 forks、open issues=10、open PRs=4，Cursor 官方项目，2026-05-30 有 push；热度尚处早期 [GH]。 |
| 成熟度 | 2/5 | 2026-01 创建、111 commits、0 releases；plugin ecosystem 与 marketplace 规则仍在早期形成 [GH]。 |

## 安全与风险

评分 2/5。安全分从初稿 3 下调到 2：本项目虽由 Cursor 维护且本体无服务端攻击面，但包含 hooks/scripts/API token 使用场景，且本轮没有逐一审计 67 个 skills 的行为。

Cursor docs 说明 plugins 可打包 hooks、MCP servers、commands、skills、agents 等；这意味着插件不仅是提示词，也可能影响工具执行、事件触发和外部连接 [Docs:cursor-plugins]。本仓库本身没有常驻服务，也没有 Docker/GPU 需求；但安装插件会把外部 instructions/scripts/hooks 放入 agent 执行边界。

具体风险：
- `orchestrate` 需要 `CURSOR_API_KEY`，可选 Slack bot token 与多个 Slack scopes；凭据权限与日志泄露需要单独治理 [GH:orchestrate]。
- hooks/scripts 可能在用户项目中执行，安装前必须审查来源和内容。
- pstack/thermos 这类强审查/自动化流程可能启动多 agent 或长任务，带来成本、权限和误操作风险 [GH:pstack]。
- 本地 `gh api repos/cursor/plugins/security-advisories` 返回 0；这只说明暂无 published advisories，不等于安全审计完成 [GH]。

生产使用建议：只安装可信插件；逐插件审查 `skills/`、`hooks/`、scripts、API token 需求；为 Cursor API key/Slack token 使用最小权限；对自动 merge/shipping 类 workflow 增加 human approval gate；固定具体 commit/tag，避免 unpinned repository install 带来的 instruction-supply-chain drift。

## 学习价值

对 Develata/Hermes 的学习价值中高：

1. **Plugin 是能力打包单元**：比单个 skill 更接近“可安装的 agent app”。
2. **rules/skills/agents/hooks 分层**：长期规则、任务技能、角色 agent、事件自动化应分开治理。
3. **marketplace manifest 很重要**：集中 registry + per-plugin manifest 有助于团队分发和审计。
4. **强流程需本地化**：pstack/thermos 类工作流可借鉴原则，但不应照搬个人风格。
5. **schema validation 是最低门槛**：结构通过不等于行为可靠；未来 Hermes 插件也需要行为 eval、安全 scan、context-budget 检查和 skill-selection 失败测试。
6. **Instruction supply chain 要 pin**：Markdown instructions、agents、hooks、manifest 更新都可能改变 agent 行为；安装和分享时应固定 commit/tag，并记录升级差异。

---

## 附录：评分说明

本条目按 non-software/hybrid rubric 评估。`capability` 看插件覆盖面和组件丰富度；`performance` 因真实运行成本依赖 Cursor/model/cloud agents 而给中性分；`code_quality` 评估 manifest/schema/validator/tests，而非所有技能行为正确性；`security` 因 hooks/scripts/token 场景和未审计行为下调到 2；`maturity` 因无 release 和项目很新保守给 2；`recommendation` 结合 Develata 当前需求给 3。