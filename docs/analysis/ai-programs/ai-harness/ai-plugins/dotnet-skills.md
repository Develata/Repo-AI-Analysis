---
title: ".NET Agent Skills"
created: 2026-05-31
updated: 2026-07-19
type: repository-analysis
repo_url: "https://github.com/dotnet/skills"
category: "ai-programs/ai-harness/ai-plugins"
tags: [dotnet, csharp, agent-skills, coding-agent, evaluation, microsoft]
previous_repo: ""
successor: ""
primary_language: "C# / Markdown"
license: "MIT"
stars: 4660
forks: 344
last_checked: 2026-07-19
last_verified: 2026-07-19
evidence: "GitHub REST/GraphQL metadata + current local clone/source/eval/workflow scan at ab72985132b79adcc4818d1fc5c41d9543f12498 + official Agent Skills/Codex docs review; no SkillValidator or model eval was executed locally"
archived_reason: ""
docker_support: false
gpu_required: false
estimated_cpu: "N/A for skill files; .NET SDK required for validator/evals"
estimated_memory: "N/A for skill files; validator/evals depend on fixture and model run"
estimated_storage: "~15 MB tracked file bytes excluding git history; tests/fixtures dominate"
status: active
ratings:
  capability: 4
  usability: 3
  performance: 3
  code_quality: 4
  documentation: 3
  community: 3
  maturity: 3
  extensibility: 4
  security: 3
  recommendation: 3
overall_score: 3.3
sources:
  - "[GH] https://github.com/dotnet/skills — GitHub REST/GraphQL queried 2026-07-19: created_at=2026-02-03, default_branch=main, main=ab72985132b79adcc4818d1fc5c41d9543f12498 dated 2026-07-18, stars=4660, forks=344, open issues=128, open PRs=47, releases=3, latest release=v1.0.0, primary_language=C#, license=MIT"
  - "[GH:community] GitHub community profile queried 2026-07-19: health_percentage=87; README/LICENSE/CONTRIBUTING/CODE_OF_CONDUCT/SECURITY/PR template detected; issue template not detected"
  - "[GH:advisories] GitHub repository security-advisories API queried 2026-07-19; returned []"
  - "[GH:local-scan] Local shallow clone /opt/data/tmp/github-repo-wiki-freshness-audit/repos/dotnet-skills at ab72985132b79adcc4818d1fc5c41d9543f12498: tracked files=2351, tracked bytes=15191017, markdown=637, SKILL.md=106, eval.yaml=98, agent markdown=17, workflows=26, SkillValidator test files=28, plugin.json=47, Claude marketplace entries=15, Codex plugin manifests=16; workflow uses refs=491 commit-SHA pinned / 0 v-tags; no validator/eval command executed"
  - "[GH:readme] README.md at ab729851 checked 2026-07-19: .NET team curated core skills/custom agents; documents plugin installation for GitHub Copilot CLI, Claude Code, Cursor and Codex; Claude/Cursor marketplace now contains 15 plugins"
  - "[GH:claude-marketplace] .claude-plugin/marketplace.json checked 2026-07-19: 15 .NET Team plugins — dotnet, dotnet-data, dotnet-advanced, dotnet-diag, dotnet-msbuild, dotnet-nuget, dotnet-upgrade, dotnet-test-migration, dotnet-maui, dotnet-ai, dotnet-template-engine, dotnet-test, dotnet-aspnetcore, dotnet-blazor and dotnet11"
  - "[GH:cursor-marketplace] .cursor-plugin/marketplace.json checked 2026-07-19: same 15-plugin catalog for Cursor"
  - "[GH:codex-plugins] Root `.codex-plugin/plugin.json` plus per-plugin manifests checked 2026-07-19: 16 Codex plugin manifests provide native installable distribution rather than only manual skill copying"
  - "[GH:contributing] CONTRIBUTING.md checked 2026-07-19: high contribution bar, CODEOWNERS requirement, progressive disclosure, eval.yaml and good/bad fixtures, validator/evaluation commands and model-based grading guidance"
  - "[GH:coc] CODE_OF_CONDUCT.md checked 2026-07-19; Microsoft Open Source Code of Conduct and reporting contacts are now present"
  - "[GH:security] SECURITY.md checked 2026-07-19: Microsoft MSRC reporting process and Coordinated Vulnerability Disclosure policy"
  - "[GH:validator-workflow] .github/workflows/skill-validator.yml checked 2026-07-19: builds/tests/packages SkillValidator across linux/windows/macos RIDs; workflow action refs remain commit-SHA pinned in current scan"
  - "[GH:evaluation-workflow] .github/workflows/evaluation.yml checked 2026-07-19: daily and `/evaluate`-gated model evaluation with same-repo/fork trust split; workflow inspected but not executed locally"
  - "[GH:validator-csproj] eng/skill-validator/src/SkillValidator.csproj checked 2026-07-19: packages Microsoft.DotNet.SkillValidator 1.0.0 and retains explicit Nerdbank.MessagePack pin for GHSA-2cwq-pwfr-wcw3 mitigation"
  - "[GH:release] https://github.com/dotnet/skills/releases/tag/v1.0.0 checked 2026-07-19; v1.0.0 remains latest stable release"
  - "[Docs:agentskills] https://agentskills.io/specification — Agent Skills specification for SKILL.md and optional resources"
  - "[Docs:codex-skills] https://developers.openai.com/codex/skills/ — Codex docs for skills/plugins and progressive disclosure"
  - "[Docs:cursor-plugins] https://cursor.com/docs/plugins — Cursor plugin component model"
  - "[GH:anthropic-skills] https://github.com/anthropics/skills — same-category official Agent Skills reference; existing local analysis under ai-programs/ai-harness/skills/anthropic-skills.md"
  - "[GH:cursor-plugins] https://github.com/cursor/plugins — adjacent official Cursor plugin marketplace; existing local analysis under ai-programs/ai-harness/ai-plugins/cursor-plugins.md"
---

# .NET Agent Skills

> Microsoft/.NET 团队维护的 .NET coding-agent skills 与插件 marketplace：覆盖 .NET、MSBuild、NuGet、test、ASP.NET、Blazor、MAUI、AI/ML、upgrade 等方向，并附带较重的 eval/validator 基础设施。
>
> **状态**: `active` · **总分**: 3.3/5 · **推荐度**: 3/5

## 一句话总结

`dotnet/skills` 是目前 agent-skills 生态中少见的“官方领域团队 + 大规模 eval fixtures + 跨 Copilot/Claude/Cursor/Codex 分发”的技能库；它对 .NET/C# 开发者有实用价值，对 Develata/Hermes 更大的价值是学习其 skill quality gate、CODEOWNERS、eval.yaml、validator 和 marketplace 多端兼容设计 [GH] [GH:contributing]。

## 总体评价

这是一个**领域型 Agent Skills/Plugins 仓库**。README 明确说它包含 .NET 团队 curated core skills and custom agents for coding agents，并指向 Agent Skills 标准；Claude/Cursor marketplace 当前覆盖 15 个方向，新版加入 `dotnet-advanced`、`dotnet-test-migration`，并将 ASP.NET 插件明确为 `dotnet-aspnetcore` [GH:readme][GH:claude-marketplace][GH:cursor-marketplace]。

相比 Batch 2 的 `anthropics/skills` 和 Batch 4 的 `cursor/plugins`，它最突出的不是 marketplace 形态本身，而是**验证基础设施**：本地扫描确认有 106 个 `SKILL.md`、98 个 `eval.yaml`、17 个 agent definitions、26 个 workflows、28 个 SkillValidator 测试文件；`evaluation.yml` 还区分 same-repo/fork PR，采用 `/evaluate` gated workflow 与 daily schedule [GH:local-scan][GH:evaluation-workflow]。这说明维护者把 skill 当作需要评测的工程资产，而不是静态提示词。

但仍需保守。仓库创建于 2026-02，公开时间短；GitHub 显示 open issues=128、open PRs=47；v1.0.0 仍是 latest stable，不能等价为长期稳定生态 [GH][GH:release]。本地环境仍没有 `dotnet` CLI，本轮只做源码、工作流和元数据审查，未执行 validator/eval pipeline。因此 `code_quality` 按已成形的 eval/validator/ownership 基础设施给 4，但推荐度仍保守为 3。

## 推荐度：3/5

**角色定位**：推荐给 .NET/C# 开发者、维护 coding-agent skills 的团队、以及研究 agent skill evaluation/governance 的人。对不写 .NET 的用户，主要是治理范式参考。

推荐理由：
- 领域权威性强：来自 Microsoft/.NET 团队，覆盖 .NET 生态核心任务 [GH:readme]。
- 质量门槛清楚：CONTRIBUTING 要求 CODEOWNERS、progressive disclosure、验证步骤、eval.yaml、失败模式与 recovery guidance [GH:contributing]。
- 工程验证明显重于同类：98 个 eval.yaml、SkillValidator 工具、daily/gated evaluation workflow，是 agent skills 生态中较少见的系统化质量设施 [GH:local-scan][GH:evaluation-workflow]。
- 分发面广：README 给出 Copilot CLI/Claude Code、VS Code preview、Cursor、Codex CLI 等安装/兼容路径 [GH:readme]。

保留意见：
- 项目仍年轻，技能内容和评测体系可能快速变化 [GH]。
- 实用价值高度绑定 .NET；对 Develata 当前数学/随机图/Rust/Hermes 工作流直接价值有限。
- eval pipeline 依赖模型、判分器、GitHub workflow 和 .NET SDK，本轮未能本地执行，不能把 workflow 存在等同于实测结果。

**结论**：值得加入 wiki，作为“官方领域技能库 + skill evaluation infrastructure”的代表。若 Develata 未来维护 Hermes skills，`dotnet/skills` 的贡献规范、eval 目录、validator 和 pinned actions 值得重点拆解；日常使用则取决于是否进入 .NET/C# 项目。

## 优势

1. **官方领域团队维护**：README 称其为 .NET team curated skills，marketplace owner 为 `.NET Team at Microsoft`；内容覆盖 .NET 平台实际开发任务，领域背书强 [GH:readme] [GH:claude-marketplace]。
2. **覆盖面完整**：MSBuild、NuGet、test、upgrade、ASP.NET、Blazor、MAUI、AI/ML、diagnostics、template engine 等都有独立 plugin [GH:readme]。
3. **验证体系重**：98 个 `eval.yaml`、SkillValidator、daily/gated evaluation workflow，说明 skill 效果被纳入工程评测而非只靠人工阅读 [GH:local-scan][GH:evaluation-workflow]。
4. **贡献规范成熟**：要求 CODEOWNERS、每个 skill/agent 有 owner、描述必须包含 when/when not、正文建议 validation/common pitfalls，且 `SKILL.md` body 超 500 行需拆 references [GH:contributing]。
5. **供应链细节较严谨**：本地扫描 26 个 workflows 中 491 个 action refs 全部 commit-SHA pinned；`SkillValidator.csproj` 明确 pin `Nerdbank.MessagePack` 修补 transitive vulnerability [GH:local-scan][GH:validator-workflow][GH:validator-csproj]。
6. **跨客户端分发**：同时有 `.claude-plugin`、`.cursor-plugin`、`.github/plugin` 和 `.codex-plugin` manifests；当前 16 个 Codex manifests 说明 Codex 已从“文档兼容”发展为原生可安装分发面 [GH:readme][GH:codex-plugins]。
7. **治理文件补齐**：除 Microsoft MSRC/CVD 安全报告路径外，当前仓库也已有 Microsoft Open Source Code of Conduct [GH:security][GH:coc][GH:community]。

## 劣势

1. **项目年轻**：2026-02 创建，v1.0.0 于 2026-04 发布，尚未经过长期使用周期 [GH] [GH:release]。
2. **领域强绑定**：非 .NET 用户直接收益有限；对 Develata 当前 Rust/Hermes/数学研究场景，主要价值在治理范式而非现成技能。
3. **本地实测受限**：当前环境无 `dotnet` CLI，无法运行 SkillValidator tests；本轮对 eval/validator 的判断来自源码和 workflow，而非本机执行结果。
4. **评测依赖模型和 judge**：`evaluation.yml` 使用 `claude-opus-4.6` 作为 model/judge；模型版本、成本、可用性和判分偏差都会影响 eval 结论 [GH:evaluation-workflow]。
5. **仓库体量偏大**：2351 tracked files 中 tests/fixtures 占多数；对只想阅读/安装少量 skills 的用户，认知负担较高 [GH:local-scan]。
6. **开放 issue/PR 不低**：open issues=128、open PRs=47，说明仍在快速建设与消化反馈 [GH]。
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

按 README 和 marketplace，本仓库当前包含 15 个主要插件 [GH:readme][GH:claude-marketplace]：

1. `dotnet`：通用 .NET coding tasks。
2. `dotnet-data`：.NET data access 与 Entity Framework。
3. `dotnet-advanced`：高级 .NET runtime、performance、unsafe/native interop 等主题。
4. `dotnet-diag`：性能调查、debugging、incident analysis。
5. `dotnet-msbuild`：MSBuild/build failure diagnosis、性能优化、modernization。
6. `dotnet-nuget`：包管理、dependency modernization。
7. `dotnet-upgrade`：框架版本、语言特性、兼容性迁移。
8. `dotnet-test-migration`：测试框架/平台迁移。
9. `dotnet-maui`：MAUI 环境、诊断、navigation、data binding、DI、layout、theming。
10. `dotnet-ai`：.NET AI/ML、LLM integration、agentic workflows、RAG、MCP、ML.NET。
11. `dotnet-template-engine`：template discovery、scaffolding、template authoring。
12. `dotnet-test`：测试运行、诊断、filtering、platform detection、MSTest。
13. `dotnet-aspnetcore`：ASP.NET Core middleware、endpoints、real-time communication、API patterns。
14. `dotnet-blazor`：Blazor components、interactivity、web app patterns。
15. `dotnet11`：新 .NET 11 APIs 与语言特性。

本地扫描确认还有 17 个 agent definitions、106 个 skills、98 个 eval scenario 文件，以及 16 个 Codex plugin manifests；它不只是 skills 列表，也包含 custom agents、测试 fixtures 与多客户端原生分发面 [GH:local-scan][GH:codex-plugins]。

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
- Codex CLI v0.121.0+：推荐先 `codex plugin marketplace add dotnet/skills`，再通过 `/plugins` 安装；也可用 `skill-installer` 单独安装一个 skill [GH:readme][GH:codex-plugins]。

优点是路径多；缺点是每个平台的 plugin/skill 机制不同，用户需要知道自己 agent 的安装语义。Codex 文档还说明 skills 与 plugins 分工不同，skills 是 authoring format，plugins 是 installable distribution unit；初始 skill list 有 context budget，过多 skills 可能被截短或省略，这会造成 skill-selection failure 或相关技能未进入初始上下文 [Docs:codex-skills]。

## 代码质量

评分 4/5。

这是本批次中工程治理信号较强的技能库之一；这里的 code_quality 主要评价基础设施质量，不等于 106 个 skills 的任务正确性都已被独立证明。证据包括：

- 106 个 `SKILL.md` 与 98 个 `eval.yaml`、大量 tests/fixtures 共同构成内容与行为验证面 [GH:local-scan]。
- CONTRIBUTING 明确要求每个 plugin/skill/agent 有 CODEOWNERS，且新增 plugin 要同步各客户端 marketplace/plugin manifests [GH:contributing]。
- SkillValidator 是实际 .NET tool project，打包为 `Microsoft.DotNet.SkillValidator`，有 unit tests，并在 workflow 中跨 RID build/test/pack [GH:validator-csproj] [GH:validator-workflow]。
- 本地扫描 26 个 workflows 中 491 个 action refs 全部 commit-SHA pinned；供应链卫生明显强于一般示例库 [GH:local-scan][GH:validator-workflow]。
- `SkillValidator.csproj` 明确记录并 pin transitive vulnerable dependency 的修复版本，说明维护者关注依赖安全细节 [GH:validator-csproj]。

不给 5 的原因：本轮未执行 .NET tests/evals；仓库年轻；model/judge 评测不能完全替代真实用户任务验证。4 分来自 current main 上可审计的 validator tests、eval corpus、ownership、跨 RID workflow 与全 SHA-pin actions，而非把“workflow 存在”当成运行通过证明。

## 可扩展性

评分 4/5。

扩展路径很清楚：新增 plugin 需要 manifests、`skills/`、对应 tests、CODEOWNERS，并同步 Copilot/Claude/Cursor/Codex 的 catalog/plugin declarations [GH:contributing][GH:codex-plugins]。新增 skill 需 `SKILL.md`，建议包含 purpose、when/when not、inputs、workflow、validation、common pitfalls；大文件用 progressive disclosure 拆 references [GH:contributing][Docs:agentskills]。

限制：这套体系为 .NET 团队实践优化；迁移到其他语言生态，需要重写 eval fixtures、validator assumptions 和 domain ownership。跨平台分发虽广，但不同 agent 对 tools、context、plugins、agents 的支持仍不完全一致。

## 文档质量

评分 3/5。

README 清楚列出插件、安装方式、平台兼容与 dashboard 链接 [GH:readme]。CONTRIBUTING 质量较高，给出了 skill/agent 编写 checklist、命名规则、frontmatter 触发描述、progressive disclosure 和 eval.yaml 例子 [GH:contributing]。

不足：根 README 对每个插件只给一句话；真正理解 skill 内容需要深入各 plugin/skill/test 目录。`https://dotnet.github.io/skills/` dashboard 本轮 `web_extract` 抓取失败，未纳入证据。v1.0.0 release 页面内容较简短，不能替代完整 changelog [GH:release]。

## 社区与成熟度

| 维度 | 评分 | 说明 |
|------|------|------|
| 社区活跃度 | 3/5 | 4660 stars、344 forks、open issues=128、open PRs=47，Microsoft/.NET 团队维护，main 于 2026-07-18 有提交；community health=87%，但 backlog 仍高 [GH][GH:community]。 |
| 成熟度 | 3/5 | 有 v1.0.0 stable release、15 个 marketplace plugins 与成形的 eval/validator；但仓库创建于 2026-02，生态仍年轻 [GH][GH:release][GH:local-scan]。 |

## 安全与风险

评分 3/5。这里评价的是流程卫生与供应链治理信号，不代表 skills/agents 的运行时行为已经安全审计。

正面信号：
- Microsoft SECURITY.md 提供 MSRC 报告路径和 Coordinated Vulnerability Disclosure policy [GH:security]。
- Microsoft Open Source Code of Conduct 已补齐，community profile health=87% [GH:coc][GH:community]。
- Workflows 使用 commit SHA pin，减少 GitHub Action tag hijack 风险 [GH:validator-workflow]。
- `SkillValidator.csproj` 对已知 transitive vulnerability 做显式 pin [GH:validator-csproj]。
- GitHub repository-advisory API 本轮返回空；只能说明此次未查到 published advisories，不能推出无漏洞 [GH:advisories]。

保守风险：skills/agents 会影响 coding agent 行为，可能引导大规模代码修改、升级、测试迁移、NuGet 依赖变更；错误 skill 可能造成工程回归。eval workflow 还涉及模型调用、judge 输出和 CI token 权限；fork PR 安全模型虽有注释说明，但任何 evaluation pipeline 都需要持续审计 [GH:evaluation-workflow]。因此安全给 3，而非仅因 Microsoft 背书给 4；它更像 better-governed early ecosystem artifact，不是已证明生产安全的成熟技能库。

生产使用建议：锁定 plugin/skill 版本；先在非生产分支试用；对 upgrade/nuget/msbuild/test migration 类 skill 强制 review；把 eval 结果视为辅助信号，不替代本地测试和人工审查；关注 instruction-supply-chain drift，即 Markdown instructions、agents、manifest 或 marketplace entry 的上游变更可能悄然改变 agent 行为。

## 学习价值

对 Develata/Hermes 的学习价值较高：

1. **Skill 需要 eval，而不是只写得漂亮**：`eval.yaml` 与 fixtures 是把 agent skill 工程化的关键。
2. **Ownership 是治理基础**：每个 plugin/skill/agent 都要求 CODEOWNERS，避免无人负责的能力包漂流。
3. **Progressive disclosure 有具体工程规则**：frontmatter description 短而精准，正文超过 500 行拆 references。
4. **Marketplace 多端同步需要防漂移**：Claude/Cursor/Copilot/Codex manifests/catalogs 要一致，CONTRIBUTING 明确要求同步更新。
5. **安全细节可落地**：commit-SHA-pinned actions、MSRC、transitive vuln pin 都是可迁移的治理动作。
6. **评测也要有安全模型**：fork PR、issue_comment `/evaluate`、secret access 与 untrusted skill/test content 的边界需要文档化 [GH:evaluation-workflow]。
7. **结构验证与行为验证分离**：validator/eval workflow 的存在只说明仓库有质量流程；每个具体 skill 在目标 repo、目标 agent、目标权限下仍需单独试跑。

---

### 附录：评分说明

本条目按 non-software/hybrid rubric 评估。`capability` 因 .NET 领域覆盖广给 4；`code_quality` 因 eval/validator/workflow/CODEOWNERS 给 4；`performance` 因真实成本依赖 agent/model/eval pipeline 给 3；`maturity` 因有 v1.0.0 但项目仍年轻给 3；`recommendation` 结合 Develata 当前非 .NET 主线需求保守给 3。