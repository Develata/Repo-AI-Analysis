---
title: ".NET Agent Skills"
created: 2026-05-31
updated: 2026-05-31
type: repository-analysis
repo_url: "https://github.com/dotnet/skills"
category: "ai-programs/agent-skills"
tags: [dotnet, csharp, agent-skills, coding-agent, evaluation, microsoft]
previous_repo: ""
successor: ""
primary_language: "C# / Markdown"
license: "MIT"
stars: 3192
forks: 237
last_checked: 2026-05-31
last_verified: 2026-05-31
evidence: "GitHub API metadata + local clone scan + workflow/source review + official Agent Skills/Codex docs review"
archived_reason: ""
docker_support: false
gpu_required: false
estimated_cpu: "N/A for skill files; .NET SDK required for validator/evals"
estimated_memory: "N/A for skill files; validator/evals depend on fixture and model run"
estimated_storage: "~20 MB repo checkout excluding git history; tests/fixtures dominate"
status: active
ratings:
  capability: 4
  usability: 3
  performance: 3
  code_quality: 3
  documentation: 3
  community: 3
  maturity: 3
  extensibility: 4
  security: 3
  recommendation: 3
overall_score: 3.2
sources:
  - "[GH] https://github.com/dotnet/skills — GitHub REST/GraphQL checked 2026-05-31: created_at=2026-02-03T22:51:09Z, pushed_at=2026-05-29T21:56:07Z, stars=3192, forks=237, open issues=81, open PRs=37, commits=463, releases=skill-validator-nightly prerelease and v1.0.0, primary language=C#, license=MIT"
  - "[GH:local-scan] /opt/data/tmp/repo-wiki-trending-2026-05-31/repos/dotnet-skills cloned 2026-05-31 at 4f78daf583208d85026199a8fef6a1ee6031cebd: 2114 files, 577 dirs, 92 SKILL.md under plugins, 93 eval.yaml, 16 agent markdown files, 14 plugin.json, 26 workflows, 25 skill-validator test files, workflow action refs: 394 commit-SHA pinned and 0 v-tag refs in local scan"
  - "[GH:readme] https://github.com/dotnet/skills/blob/main/README.md — .NET team curated core skills and custom agents; installation for Copilot CLI/Claude Code, VS Code preview, Cursor, Codex CLI"
  - "[GH:claude-marketplace] https://github.com/dotnet/skills/blob/main/.claude-plugin/marketplace.json — dotnet-agent-skills marketplace with 13 plugins and owner name `.NET Team at Microsoft`"
  - "[GH:cursor-marketplace] https://github.com/dotnet/skills/blob/main/.cursor-plugin/marketplace.json — Cursor marketplace with same plugin list"
  - "[GH:contributing] https://github.com/dotnet/skills/blob/main/CONTRIBUTING.md — high contribution bar, CODEOWNERS requirement, progressive disclosure guidance, eval.yaml requirement"
  - "[GH:security] https://github.com/dotnet/skills/blob/main/SECURITY.md — Microsoft MSRC reporting process and Coordinated Vulnerability Disclosure policy"
  - "[GH:validator-workflow] https://github.com/dotnet/skills/blob/main/.github/workflows/skill-validator.yml — builds/tests/packages SkillValidator across linux/windows/macos RIDs; actions are commit-SHA pinned in local scan"
  - "[GH:evaluation-workflow] https://github.com/dotnet/skills/blob/main/.github/workflows/evaluation.yml — daily and /evaluate gated skill evaluation workflow using claude-opus-4.6 judge/model"
  - "[GH:validator-csproj] https://github.com/dotnet/skills/blob/main/eng/skill-validator/src/SkillValidator.csproj — packages Microsoft.DotNet.SkillValidator 1.0.0; pins Nerdbank.MessagePack 1.1.62 to address GHSA-2cwq-pwfr-wcw3 transitive issue"
  - "[GH:release] https://github.com/dotnet/skills/releases/tag/v1.0.0 — v1.0.0 release page checked 2026-05-31"
  - "[Docs:agentskills] https://agentskills.io/specification — Agent Skills specification for SKILL.md and optional resources"
  - "[Docs:codex-skills] https://developers.openai.com/codex/skills/ — Codex docs: skills are authoring format, plugins are installable distribution unit; progressive disclosure and initial skill-list budget"
  - "[Docs:cursor-plugins] https://cursor.com/docs/plugins — Cursor docs: plugin bundles can include rules, skills, agents, commands, MCP servers, hooks"
  - "[GH:anthropic-skills] https://github.com/anthropics/skills — same-category official Agent Skills reference, existing local analysis under ai-programs/agent-skills/anthropic-skills.md"
  - "[GH:cursor-plugins] https://github.com/cursor/plugins — adjacent official Cursor plugin marketplace, existing local analysis in this batch"
---

# .NET Agent Skills

> Microsoft/.NET 团队维护的 .NET coding-agent skills 与插件 marketplace：覆盖 .NET、MSBuild、NuGet、test、ASP.NET、Blazor、MAUI、AI/ML、upgrade 等方向，并附带较重的 eval/validator 基础设施。
>
> **状态**: `active` · **总分**: 3.2/5 · **推荐度**: 3/5

## 一句话总结

`dotnet/skills` 是目前 agent-skills 生态中少见的“官方领域团队 + 大规模 eval fixtures + 跨 Copilot/Claude/Cursor/Codex 分发”的技能库；它对 .NET/C# 开发者有实用价值，对 Develata/Hermes 更大的价值是学习其 skill quality gate、CODEOWNERS、eval.yaml、validator 和 marketplace 多端兼容设计 [GH] [GH:contributing]。

## 总体评价

这是一个**领域型 Agent Skills/Plugins 仓库**。README 明确说它包含 .NET 团队 curated core skills and custom agents for coding agents，并指向 Agent Skills 标准；插件覆盖 dotnet、dotnet-data、dotnet-diag、dotnet-msbuild、dotnet-nuget、dotnet-upgrade、dotnet-maui、dotnet-ai、dotnet-template-engine、dotnet-test、dotnet-aspnet、dotnet-blazor、dotnet11 等 13 个方向 [GH:readme] [GH:claude-marketplace]。

相比 Batch 2 的 `anthropics/skills` 和 Batch 4 的 `cursor/plugins`，它最突出的不是 marketplace 形态本身，而是**验证基础设施**：本地扫描确认有 92 个 `SKILL.md`、93 个 `eval.yaml`、16 个 agent definitions、26 个 workflows、25 个 SkillValidator 测试文件；`evaluation.yml` 还区分 same-repo/fork PR，采用 `/evaluate` gated workflow，daily schedule 全量评估，并用 `claude-opus-4.6` 作为 model/judge [GH:local-scan] [GH:evaluation-workflow]。这说明维护者把 skill 当作需要评测的工程资产，而不是静态提示词。

但仍需保守。仓库创建于 2026-02，公开时间短；GitHub 显示 open issues=81、open PRs=37；v1.0.0 release 于 2026-04 发布，GraphQL metadata 还显示 `skill-validator-nightly` prerelease，但这不等价于长期稳定生态 [GH] [GH:release]。本地环境没有 `dotnet` CLI，无法实际跑 `dotnet test eng/skill-validator/SkillValidator.slnx`，本轮只做源码/工作流/元数据审查，未执行 validator/eval pipeline。因此总体评分 3.3，推荐度保守 3。

## 推荐度：3/5

**角色定位**：推荐给 .NET/C# 开发者、维护 coding-agent skills 的团队、以及研究 agent skill evaluation/governance 的人。对不写 .NET 的用户，主要是治理范式参考。

推荐理由：
- 领域权威性强：来自 Microsoft/.NET 团队，覆盖 .NET 生态核心任务 [GH:readme]。
- 质量门槛清楚：CONTRIBUTING 要求 CODEOWNERS、progressive disclosure、验证步骤、eval.yaml、失败模式与 recovery guidance [GH:contributing]。
- 工程验证明显重于同类：93 个 eval.yaml、SkillValidator 工具、daily/gated evaluation workflow，是 agent skills 生态中较少见的系统化质量设施 [GH:local-scan] [GH:evaluation-workflow]。
- 分发面广：README 给出 Copilot CLI/Claude Code、VS Code preview、Cursor、Codex CLI 等安装/兼容路径 [GH:readme]。

保留意见：
- 项目仍年轻，技能内容和评测体系可能快速变化 [GH]。
- 实用价值高度绑定 .NET；对 Develata 当前数学/随机图/Rust/Hermes 工作流直接价值有限。
- eval pipeline 依赖模型、判分器、GitHub workflow 和 .NET SDK，本轮未能本地执行，不能把 workflow 存在等同于实测结果。

**结论**：值得加入 wiki，作为“官方领域技能库 + skill evaluation infrastructure”的代表。若 Develata 未来维护 Hermes skills，`dotnet/skills` 的贡献规范、eval 目录、validator 和 pinned actions 值得重点拆解；日常使用则取决于是否进入 .NET/C# 项目。

## 优势

1. **官方领域团队维护**：README 称其为 .NET team curated skills，marketplace owner 为 `.NET Team at Microsoft`；内容覆盖 .NET 平台实际开发任务，领域背书强 [GH:readme] [GH:claude-marketplace]。
2. **覆盖面完整**：MSBuild、NuGet、test、upgrade、ASP.NET、Blazor、MAUI、AI/ML、diagnostics、template engine 等都有独立 plugin [GH:readme]。
3. **验证体系重**：93 个 `eval.yaml`、SkillValidator、daily/gated evaluation workflow，说明 skill 效果被纳入工程评测而非只靠人工阅读 [GH:local-scan] [GH:evaluation-workflow]。
4. **贡献规范成熟**：要求 CODEOWNERS、每个 skill/agent 有 owner、描述必须包含 when/when not、正文建议 validation/common pitfalls，且 `SKILL.md` body 超 500 行需拆 references [GH:contributing]。
5. **供应链细节较严谨**：本地扫描 26 个 workflows 中 action refs 为 394 个 commit-SHA pin、0 个 `@vN` tag refs；`SkillValidator.csproj` 明确 pin `Nerdbank.MessagePack` 修补 transitive vulnerability [GH:validator-workflow] [GH:validator-csproj]。
6. **跨客户端分发**：同时有 `.claude-plugin`、`.cursor-plugin`、`.github/plugin` marketplace manifest，并声明 Codex/Agent Skills 标准兼容 [GH:readme]。
7. **安全报告路径清楚**：使用 Microsoft MSRC 与 Coordinated Vulnerability Disclosure 流程 [GH:security]。

## 劣势

1. **项目年轻**：2026-02 创建，v1.0.0 于 2026-04 发布，尚未经过长期使用周期 [GH] [GH:release]。
2. **领域强绑定**：非 .NET 用户直接收益有限；对 Develata 当前 Rust/Hermes/数学研究场景，主要价值在治理范式而非现成技能。
3. **本地实测受限**：当前环境无 `dotnet` CLI，无法运行 SkillValidator tests；本轮对 eval/validator 的判断来自源码和 workflow，而非本机执行结果。
4. **评测依赖模型和 judge**：`evaluation.yml` 使用 `claude-opus-4.6` 作为 model/judge；模型版本、成本、可用性和判分偏差都会影响 eval 结论 [GH:evaluation-workflow]。
5. **仓库体量偏大**：2114 files 中 tests/fixtures 占多数；对只想阅读/安装少量 skills 的用户，认知负担较高 [GH:local-scan]。
6. **开放 issue/PR 不低**：open issues=81、open PRs=37，说明仍在快速建设与消化反馈 [GH]。
7. **插件语义跨平台仍需验证**：README 声称支持 Copilot/Claude Code/VS Code/Cursor/Codex，但每个平台的 plugin/skill 语义、工具权限、context budget 并不完全相同 [GH:readme] [Docs:codex-skills] [Docs:cursor-plugins]。

---

## 适合什么场景

- .NET/C# 项目中使用 Copilot CLI、Claude Code、Cursor、Codex 等 coding agent。
- 处理 MSBuild binlog、NuGet 迁移、test migration、ASP.NET/Blazor/MAUI、.NET upgrade 等任务。
- 团队想为某个技术栈维护官方 agent skills，并建立 eval/validator/ownership 体系。
- Hermes skills 治理参考：CODEOWNERS、eval.yaml、validator、nightly release、PR gated eval。
- 研究 Agent Skills 标准从“格式”走向“工程质量体系”的案例。

## 不适合什么场景

- 不写 .NET/C# 的日常开发者；直接生产力收益有限。
- 只想要轻量 prompt collection；本仓库的 tests/fixtures/eval infrastructure 较重。
- 不能接受模型评测成本或不希望 CI 依赖外部 judge/model 的组织。
- 需要已长期稳定、跨多个大版本验证的技能库；该仓库仍年轻。
- 安全策略禁止安装外部 skills/agents 或让 agent 执行复杂迁移/诊断任务的环境。

## 与类似项目对比

| 项目 | 定位 | 相对本项目 |
|------|------|-----------|
| Anthropic Agent Skills | 官方 Agent Skills 示例与 document skills reference | Anthropic 提供标准样板和文档技能；`dotnet/skills` 是具体技术栈领域库，评测/validator 更重 [GH:anthropic-skills]。 |
| Cursor Plugins | Cursor 官方 plugin marketplace seed | Cursor Plugins 展示 Cursor 产品能力包；`dotnet/skills` 展示领域团队如何把技术栈知识、agents 和 eval 体系打包 [GH:cursor-plugins]。 |
| Superpowers | 跨平台 agentic SDLC workflow | Superpowers 是通用工程流程纪律；`dotnet/skills` 是 .NET 技术栈专业知识与任务技能。 |
| Scientific Agent Skills | 科学计算领域技能库 | Scientific 覆盖研究/生物/化学等应用科学；`dotnet/skills` 覆盖软件平台生态，且更强调 CI/eval/validator。 |

---

## 它能做什么

按 README 和 marketplace，本仓库当前包含 13 个主要插件 [GH:readme] [GH:claude-marketplace]：

1. `dotnet`：通用 .NET coding tasks。
2. `dotnet-data`：.NET data access 与 Entity Framework。
3. `dotnet-diag`：性能调查、debugging、incident analysis。
4. `dotnet-msbuild`：MSBuild/build failure diagnosis、性能优化、modernization。
5. `dotnet-nuget`：包管理、dependency modernization。
6. `dotnet-upgrade`：框架版本、语言特性、兼容性迁移。
7. `dotnet-maui`：MAUI 环境、诊断、navigation、data binding、DI、layout、theming。
8. `dotnet-ai`：.NET AI/ML、LLM integration、agentic workflows、RAG、MCP、ML.NET。
9. `dotnet-template-engine`：template discovery、scaffolding、template authoring。
10. `dotnet-test`：测试运行、诊断、迁移、filtering、platform detection、MSTest。
11. `dotnet-aspnet`：ASP.NET Core middleware、endpoints、real-time communication、API patterns。
12. `dotnet-blazor`：Blazor components、interactivity、web app patterns。
13. `dotnet11`：新 .NET 11 APIs 与语言特性。

本地扫描确认还有 16 个 agent definition、92 个 skills、93 个 eval scenarios 文件，说明它不只是 skills 列表，也包含 custom agents 与测试 fixtures [GH:local-scan]。

## 运行环境与资源占用

| 场景 | CPU | 内存 | 存储 | 说明 |
|------|-----|------|------|------|
| 仅安装 skills/plugins | N/A | N/A | 按选中插件，通常很小 | Markdown/JSON/agent 文件，无常驻服务 |
| 阅读/开发仓库 | 普通开发机 | 普通开发机 | repo checkout 约数千文件 | tests/fixtures 占多数 |
| 运行 SkillValidator/evals | 取决于 .NET SDK、测试 fixtures、模型调用 | 同左 | artifacts/logs/packages | 需要 .NET SDK；evaluation workflow 还依赖模型和 judge [GH:evaluation-workflow] |

本轮本地执行 `dotnet --version` 失败：`dotnet: command not found`，因此未运行 `dotnet test eng/skill-validator/SkillValidator.slnx`。这也是评分保持保守的原因之一。

性能评分 3/5。skill 文件本体轻量；但真实成本来自 agent/model 调用、eval pipeline、.NET build/test fixtures。作为“技能库”不应按本体文件小就给高分，因为它鼓励的任务本身可能很重。

## 上手体验

评分 3/5。

README 给出多平台安装路径 [GH:readme]：

- Copilot CLI / Claude Code：`/plugin marketplace add dotnet/skills` 后 `/plugin install <plugin>@dotnet-agent-skills`。
- VS Code / VS Code Insiders preview：启用 `chat.plugins.enabled` 与 `chat.plugins.marketplaces`。
- Cursor：在 Cursor marketplace 搜索 `.NET` 或从本地 checkout 导入。
- Codex CLI：用 `skill-installer install https://github.com/dotnet/skills/tree/main/plugins/<plugin>/skills/<skill-name>` 安装单个 skill。

优点是路径多；缺点是每个平台的 plugin/skill 机制不同，用户需要知道自己 agent 的安装语义。Codex 文档还说明 skills 与 plugins 分工不同，skills 是 authoring format，plugins 是 installable distribution unit；初始 skill list 有 context budget，过多 skills 可能被截短或省略，这会造成 skill-selection failure 或相关技能未进入初始上下文 [Docs:codex-skills]。

## 代码质量

评分 3/5。

这是本批次中工程治理信号较强的技能库之一；这里的 code_quality 主要评价基础设施质量，不等于 92 个 skills 的任务正确性都已被独立证明。证据包括：

- 92 个 `SKILL.md` 与 93 个 `eval.yaml` 基本一一配套，tests/fixtures 体量大 [GH:local-scan]。
- CONTRIBUTING 明确要求每个 plugin/skill/agent 有 CODEOWNERS，且新增 plugin 要同步三个 marketplace manifests [GH:contributing]。
- SkillValidator 是实际 .NET tool project，打包为 `Microsoft.DotNet.SkillValidator`，有 unit tests，并在 workflow 中跨 RID build/test/pack [GH:validator-csproj] [GH:validator-workflow]。
- 本地扫描 26 个 workflows 中 action refs 为 394 个 commit-SHA pin、0 个 `@vN` tag refs；供应链卫生明显强于一般示例库 [GH:local-scan] [GH:validator-workflow]。
- `SkillValidator.csproj` 明确记录并 pin transitive vulnerable dependency 的修复版本，说明维护者关注依赖安全细节 [GH:validator-csproj]。

扣分原因：本轮未能执行 .NET tests；仓库年轻；eval 依赖模型判分，不能完全替代真实用户任务验证。按评分边界，未运行 validator/tests 时不宜把 workflow 配置和目录结构直接记为 4。

## 可扩展性

评分 4/5。

扩展路径很清楚：新增 plugin 需要 `plugins/<plugin>/plugin.json`、`skills/`、对应 tests、CODEOWNERS，并同步 `.github/plugin/marketplace.json`、`.claude-plugin/marketplace.json`、`.cursor-plugin/marketplace.json` [GH:contributing]。新增 skill 需 `SKILL.md`，建议包含 purpose、when/when not、inputs、workflow、validation、common pitfalls；大文件用 progressive disclosure 拆 references [GH:contributing] [Docs:agentskills]。

限制：这套体系为 .NET 团队实践优化；迁移到其他语言生态，需要重写 eval fixtures、validator assumptions 和 domain ownership。跨平台分发虽广，但不同 agent 对 tools、context、plugins、agents 的支持仍不完全一致。

## 文档质量

评分 3/5。

README 清楚列出插件、安装方式、平台兼容与 dashboard 链接 [GH:readme]。CONTRIBUTING 质量较高，给出了 skill/agent 编写 checklist、命名规则、frontmatter 触发描述、progressive disclosure 和 eval.yaml 例子 [GH:contributing]。

不足：根 README 对每个插件只给一句话；真正理解 skill 内容需要深入各 plugin/skill/test 目录。`https://dotnet.github.io/skills/` dashboard 本轮 `web_extract` 抓取失败，未纳入证据。v1.0.0 release 页面内容较简短，不能替代完整 changelog [GH:release]。

## 社区与成熟度

| 维度 | 评分 | 说明 |
|------|------|------|
| 社区活跃度 | 3/5 | 3192 stars、237 forks、open issues=81、open PRs=37，Microsoft/.NET 团队维护，2026-05-29 有 push [GH]。 |
| 成熟度 | 3/5 | 有 v1.0.0 release、nightly SkillValidator prerelease、463 commits；但仓库创建于 2026-02，生态仍年轻 [GH] [GH:release]。 |

## 安全与风险

评分 3/5。这里评价的是流程卫生与供应链治理信号，不代表 skills/agents 的运行时行为已经安全审计。

正面信号：
- Microsoft SECURITY.md 提供 MSRC 报告路径和 Coordinated Vulnerability Disclosure policy [GH:security]。
- Workflows 使用 commit SHA pin，减少 GitHub Action tag hijack 风险 [GH:validator-workflow]。
- `SkillValidator.csproj` 对已知 transitive vulnerability 做显式 pin [GH:validator-csproj]。
- 本地 `gh api repos/dotnet/skills/security-advisories` 返回 0；只能说明暂无 published advisories [GH]。

保守风险：skills/agents 会影响 coding agent 行为，可能引导大规模代码修改、升级、测试迁移、NuGet 依赖变更；错误 skill 可能造成工程回归。eval workflow 还涉及模型调用、judge 输出和 CI token 权限；fork PR 安全模型虽有注释说明，但任何 evaluation pipeline 都需要持续审计 [GH:evaluation-workflow]。因此安全给 3，而非仅因 Microsoft 背书给 4；它更像 better-governed early ecosystem artifact，不是已证明生产安全的成熟技能库。

生产使用建议：锁定 plugin/skill 版本；先在非生产分支试用；对 upgrade/nuget/msbuild/test migration 类 skill 强制 review；把 eval 结果视为辅助信号，不替代本地测试和人工审查；关注 instruction-supply-chain drift，即 Markdown instructions、agents、manifest 或 marketplace entry 的上游变更可能悄然改变 agent 行为。

## 学习价值

对 Develata/Hermes 的学习价值较高：

1. **Skill 需要 eval，而不是只写得漂亮**：`eval.yaml` 与 fixtures 是把 agent skill 工程化的关键。
2. **Ownership 是治理基础**：每个 plugin/skill/agent 都要求 CODEOWNERS，避免无人负责的能力包漂流。
3. **Progressive disclosure 有具体工程规则**：frontmatter description 短而精准，正文超过 500 行拆 references。
4. **Marketplace 多端同步需要防漂移**：Claude/Cursor/GitHub plugin manifests 要一致，CONTRIBUTING 明确要求同步更新。
5. **安全细节可落地**：commit-SHA-pinned actions、MSRC、transitive vuln pin 都是可迁移的治理动作。
6. **评测也要有安全模型**：fork PR、issue_comment `/evaluate`、secret access 与 untrusted skill/test content 的边界需要文档化 [GH:evaluation-workflow]。
7. **结构验证与行为验证分离**：validator/eval workflow 的存在只说明仓库有质量流程；每个具体 skill 在目标 repo、目标 agent、目标权限下仍需单独试跑。

---

## 附录：评分说明

本条目按 non-software/hybrid rubric 评估。`capability` 因 .NET 领域覆盖广给 4；`code_quality` 因 eval/validator/workflow/CODEOWNERS 给 4；`performance` 因真实成本依赖 agent/model/eval pipeline 给 3；`maturity` 因有 v1.0.0 但项目仍年轻给 3；`recommendation` 结合 Develata 当前非 .NET 主线需求保守给 3。