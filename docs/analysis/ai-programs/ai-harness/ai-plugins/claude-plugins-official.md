---
title: "Claude Plugins Official"
created: 2026-05-31
updated: 2026-07-19
type: repository-analysis
repo_url: "https://github.com/anthropics/claude-plugins-official"
category: "ai-programs/ai-harness/ai-plugins"
tags: [claude-code, anthropic, plugins, marketplace, mcp, agent-skills, supply-chain]
previous_repo: ""
successor: ""
primary_language: "Python / Markdown / TypeScript"
license: "Apache-2.0 root; individual linked/external plugins may have separate licenses"
stars: 32294
forks: 3607
last_checked: 2026-07-19
last_verified: 2026-07-19
evidence: "GitHub REST/GraphQL metadata + current marketplace manifest/local clone scan at dbb2ba52ce35172e4eb1db1148144fe09a8a369d + Claude Code plugin/marketplace docs review; no plugin was installed or runtime-tested"
archived_reason: ""
docker_support: false
gpu_required: false
estimated_cpu: "N/A for repository body; plugin execution depends on Claude Code, MCP servers, hooks, and external tools"
estimated_memory: "N/A for repository body; plugin execution depends on enabled plugin set"
estimated_storage: "~5.1 MB tracked file bytes excluding .git in local clone; external plugin installs may download additional repos/packages"
status: active
ratings:
  capability: 4
  usability: 3
  performance: 3
  code_quality: 3
  documentation: 3
  community: 4
  maturity: 2
  extensibility: 4
  security: 2
  recommendation: 3
overall_score: 3.1
sources:
  - "[GH] https://github.com/anthropics/claude-plugins-official — GitHub REST/GraphQL queried 2026-07-19: created_at=2025-11-20, default_branch=main, main=dbb2ba52ce35172e4eb1db1148144fe09a8a369d dated 2026-07-19, stars=32294, forks=3607, open issues=804, open PRs=24, releases=0, primary_language=Python, license=Apache-2.0, security policy not enabled"
  - "[GH:advisories] GitHub repository security-advisories API queried 2026-07-19; returned []"
  - "[GH:community] GitHub community profile queried 2026-07-19: health_percentage=37; README and LICENSE present; CONTRIBUTING, CODE_OF_CONDUCT, issue template, PR template and SECURITY.md not detected"
  - "[GH:readme] README.md at dbb2ba52 checked 2026-07-19: describes curated Claude Code plugins directory and places a trust/review warning before installation; distinguishes `/plugins` Anthropic-maintained entries from `/external_plugins` third-party entries and points to per-plugin licenses"
  - "[GH:marketplace] .claude-plugin/marketplace.json at dbb2ba52 checked 2026-07-19: 257 entries; categories development=105, productivity=54, database=21, security=18, monitoring=16, deployment=8, design=5, testing=3, learning=2, location=2, math=1, empty=22; source types url=131, git-subdir=72, local=52, github=2; 205 entries pin sha/ref metadata"
  - "[GH:local-scan] Local shallow clone /opt/data/tmp/github-repo-wiki-freshness-audit/repos/claude-plugins-official at dbb2ba52ce35172e4eb1db1148144fe09a8a369d: tracked files=413, tracked bytes=5121606, markdown=294, internal plugin dirs=39, external plugin dirs=15, plugin manifests=39, .mcp.json=16, SKILL.md=29, agent markdown=24, command markdown=27, workflows=9; no plugin installation/runtime test executed"
  - "[GH:workflow-validate] .github/workflows/validate-plugins.yml checked 2026-07-19: required check validates marketplace/plugin/agent/skill/command paths, uses contents:read and a commit-pinned community validate action; SHA-pin invariant is a hard error while I1/I3/I8/I11 remain warnings"
  - "[GH:workflow-scan] .github/workflows/scan-plugins.yml checked 2026-07-19: required Claude policy scan for changed external entries, 30-day verdict cache keyed by policy and full source object, timeout-minutes=360, contents:read + OIDC id-token:write; scan action is commit-pinned and uses short-lived workload-identity credentials"
  - "[GH:workflow-actions] Current workflow scan checked 2026-07-19: 9 workflows; several first-party GitHub actions still use v-tags, while Anthropic community actions and selected setup actions are commit-SHA pinned; workflow presence is not proof that every listed plugin is safe"
  - "[GH:security-hook] plugins/security-guidance/hooks/hooks.json checked 2026-07-19: registers SessionStart, UserPromptSubmit, PostToolUse and Stop command hooks, including async rewake around edit/commit/push flows; illustrates real local code-execution surface"
  - "[GH:mcp-github] external_plugins/github/.mcp.json checked 2026-07-19: configures https://api.githubcopilot.com/mcp/ with Authorization Bearer ${GITHUB_PERSONAL_ACCESS_TOKEN} placeholder"
  - "[Docs:plugins] https://code.claude.com/docs/en/plugins extracted 2026-07-19: plugins can package skills, agents, hooks, MCP/LSP servers and background monitors; plugin skills are namespaced and distributed/versioned separately from project-local `.claude/` configuration"
  - "[Docs:marketplaces] https://code.claude.com/docs/en/plugin-marketplaces extracted 2026-07-19: marketplaces provide discovery/version tracking/updates across local, GitHub, git, git-subdir and npm source types, with managed restrictions and version-resolution controls"
  - "[GH:knowledge-work] https://github.com/anthropics/knowledge-work-plugins — adjacent role-level Claude plugin marketplace; existing local analysis under ai-programs/ai-harness/ai-plugins/knowledge-work-plugins.md"
  - "[GH:anthropic-skills] https://github.com/anthropics/skills — official Agent Skills reference; existing local analysis under ai-programs/ai-harness/skills/anthropic-skills.md"
  - "[GH:cursor-plugins] https://github.com/cursor/plugins — Cursor plugin marketplace comparison; existing local analysis under ai-programs/ai-harness/ai-plugins/cursor-plugins.md"
  - "[GH:openai-skills] https://github.com/openai/skills — Codex Skills Catalog comparison; existing local analysis under ai-programs/ai-harness/skills/openai-skills.md"
---

# Claude Plugins Official

> Anthropic 官方 Claude Code plugin marketplace：一个聚合 257 个本地/外部插件入口的目录，覆盖开发、生产力、数据库、安全、监控、MCP 等能力；价值很高，但供应链与权限风险同样很高。
>
> **状态**: `active` · **总分**: 3.1/5 · **推荐度**: 3/5

## 一句话总结

`anthropics/claude-plugins-official` 是值得作为样本跟踪的 Claude Code plugin marketplace：它展示了 Anthropic 如何把 skills、agents、hooks、MCP servers、commands 和外部 git sources 组织成官方插件目录；但它不是“安全白名单”，README 第一屏就要求安装前信任并审查插件 [GH:readme]。

## 总体评价

这个仓库比 `anthropics/skills` 更接近“agent plugin distribution layer”。Claude Code docs 说明 plugin 可包含 skills、agents、hooks、MCP/LSP servers 和 background monitors；marketplace 则通过 `.claude-plugin/marketplace.json` 分发并管理版本 [Docs:plugins][Docs:marketplaces]。本轮本地扫描确认根 marketplace 有 257 个 plugin entries，其中 52 个 local、131 个 url、72 个 git-subdir、2 个 github source；205 个 entries 带 sha/ref pin metadata [GH:marketplace]。

工程治理信号比普通 skill collection 更具体：仓库有 9 个 workflows，包含 validate plugins、policy scan、MCP URL check、license validation、SHA bump/revert 等；`validate-plugins.yml` 对官方 curated marketplace 把 SHA-pin 作为 hard error；`scan-plugins.yml` 对 changed external entries 做 Claude policy scan，并以 30 天 verdict cache 和短期 OIDC credentials 限制重复成本与长期密钥暴露 [GH:workflow-validate][GH:workflow-scan]。这些机制说明仓库有具体治理动作，但不等于治理结果已被独立证明。

但推荐度仍只能给 3/5。理由有三：其一，仓库创建于 2025-11，截至 2026-07-19 仍无 release、open issues=804；entries 从前次 204 增至 257，说明覆盖快速扩大，治理负载也继续上升 [GH][GH:marketplace]。其二，plugin 能包含 hooks、MCP、binaries、settings，安全攻击面远大于静态 Markdown；本轮还看到 `security-guidance` 插件用 hooks 执行 bash/Python、GitHub external plugin 的 MCP 配置读取个人 token 环境变量 [GH:security-hook][GH:mcp-github]。其三，官方目录不等于 Anthropic 对外部 plugin 的 runtime guarantee；README 明确要求用户先信任并审查插件 [GH:readme]。

## 推荐度：3/5

**角色定位**：推荐给研究 Claude Code plugin ecosystem、agent marketplace supply chain、MCP/tool packaging、或设计 Hermes 插件/skill 分发体系的人；对日常使用者，只建议安装少数明确可信、可审计、可固定版本的插件。

推荐理由：
- 目录覆盖广：257 个 marketplace entries 覆盖 development/productivity/database/security/monitoring 等类别；这证明分发目录覆盖面，而不证明每个插件运行能力均已验证 [GH:marketplace]。
- 治理机制具体：验证、policy scan、URL check、license validation、SHA bump/revert 等 workflow 体现了 marketplace 维护者面对供应链风险的工程动作 [GH:workflow-validate] [GH:workflow-scan]。
- 与 Claude Code docs 对齐：plugin 结构、marketplace manifest、安装命令、技能命名空间等都有官方文档解释 [Docs:plugins] [Docs:marketplaces]。

保留意见：
- 不宜按“官方安全认证列表”理解；README 自带 trust warning，外部插件和 MCP server 行为仍需用户自审 [GH:readme]。
- 截至 2026-07-19，open issues=804、0 releases，生态仍在快速扩张和治理中 [GH]。
- hooks/MCP/token/binaries/settings 的权限组合可能造成真实文件、代码仓库、SaaS 数据和凭据风险 [GH:security-hook] [GH:mcp-github]。

**结论**：加入 wiki，推荐度 3/5。它是 agent plugin marketplace 的重要样本，适合跟踪和拆解；但生产使用要按“默认不信任、最小权限、固定 SHA、逐 plugin 审计、沙箱试跑”处理。

## 优势

1. **官方 marketplace 价值高**：marketplace name 为 `claude-plugins-official`，owner 为 Anthropic，直接反映 Claude Code 官方插件目录形态 [GH:marketplace]。
2. **覆盖面大**：257 entries 覆盖 development、productivity、database、security、monitoring、design、deployment 等类别；这说明该目录已从开发辅助扩展到广义工作流/工具连接，但不证明每个 entry 都成熟可用 [GH:marketplace]。
3. **本地与外部 source 混合**：52 个 local entries、205 个带 sha/ref pin metadata，展示了 marketplace 如何同时维护内置插件和外部供应链 [GH:marketplace]。
4. **治理 workflow 具体**：validate/policy scan/license/MCP URL/SHA bump/revert 组合，比只靠 README 声明更可审计，但仍不能证明 runtime 安全 [GH:workflow-validate] [GH:workflow-scan]。
5. **组件类型丰富**：本地扫描确认 plugin manifests、`.mcp.json`、README、agents markdown、`SKILL.md`、commands、hooks、workflows 共存，是完整 file-based agent capability package，而非单纯 prompt list [GH:local-scan]。
6. **扩展设计充分**：Claude Code docs 支持 skills、agents、hooks、MCP、LSP、monitors、bin、settings，插件命名空间减少命令冲突 [Docs:plugins]。

## 劣势

1. **安全攻击面大**：plugins 可带 hooks、MCP、binaries、settings；本轮看到 hooks 执行 bash/Python，MCP 配置读取 `GITHUB_PERSONAL_ACCESS_TOKEN` 环境变量 [GH:security-hook] [GH:mcp-github]。
2. **官方目录不等于行为担保**：README 明确警告 Anthropic 不控制插件包含的 MCP servers/files/software，也不能验证它们会按预期工作或不会改变 [GH:readme]。
3. **成熟度不足**：2025-11 创建，截至 2026-07-19 仍缺少 release cadence/版本承诺；open issues=804 表明用户反馈、缺陷与需求积压很高 [GH]。
4. **外部 source 复杂**：131 个 url source、72 个 git-subdir source、2 个 github source；虽然 205 entries 带 sha/ref metadata，但仍需关注 upstream repo、license、MCP endpoint、package install、token scope 和更新策略 [GH:marketplace]。
5. **文档分散**：根 README 说明结构和安装，但完整语义要看 Claude Code docs、marketplace docs、每个 plugin README 和外部 repo [GH:readme] [Docs:plugins] [Docs:marketplaces]。
6. **CI/scan 不等于安全证明**：policy scan 和 schema validation 能降低风险，但无法证明 prompt safety、工具权限正确、外部 MCP server 可信、业务输出准确或运行时副作用可控。
7. **许可需要分层看**：root license 是 Apache-2.0，但 README 说每个 linked plugin 有自己的 LICENSE；外部 plugins 的许可不能由根仓库统一覆盖 [GH] [GH:readme]。

---

## 适合什么场景

- 研究 Claude Code plugin marketplace、official directory、team marketplace 的结构。
- 为 Hermes 或其他 agent 设计 plugin registry、manifest、source pinning、policy scan、license validation。
- Claude Code 用户挑选少数官方/可信插件，尤其是开发、审查、MCP server dev、LSP、security guidance 类插件。
- 企业评估 agent tool marketplace 的供应链治理：SHA pin、external scan、URL liveness、license scan、failure revert。
- 对比 Anthropic Skills、Knowledge Work Plugins、Cursor Plugins 等 file-based agent capability ecosystems。

## 不适合什么场景

- 把整个 marketplace 当作默认可信插件合集一键安装。
- 在生产账号、云控制台、支付/财务/HR/客户数据系统上无沙箱试用外部 MCP 插件。
- 需要长期稳定版本、明确 release cadence、语义版本承诺的组织。
- 不使用 Claude Code，且目标 agent 不支持 `.claude-plugin`、hooks、MCP、namespaced skills/commands。
- 对外部 git repos、MCP HTTP endpoints、hooks 和 token 环境变量零容忍的高安全环境。

## 与类似项目对比

| 项目 | 定位 | 相对本项目 |
|------|------|-----------|
| Knowledge Work Plugins | Claude Cowork/Claude Code 的企业角色插件库 | Knowledge Work 更偏岗位/业务角色 bundle；Claude Plugins Official 是更广泛的 Claude Code marketplace directory，外部 connector 和开发工具更多 [GH:knowledge-work]。 |
| Anthropic Agent Skills | Claude Agent Skills 示例与 document skills reference | Anthropic Skills 更底层，关注单个 skill authoring；Claude Plugins Official 是插件分发层，可聚合 skills、MCP、hooks、agents 等 [GH:anthropic-skills]。 |
| Cursor Plugins | Cursor 官方 plugin marketplace seed | 两者都代表 editor/agent product 的 plugin marketplace；Claude Plugins Official 覆盖 entry 数更多，供应链 scan/pin 治理更突出，但风险面也更大 [GH:cursor-plugins]。 |
| OpenAI Skills | Codex Skills Catalog | OpenAI Skills 更聚焦 Codex skill authoring/installer；Claude Plugins Official 更像全功能 plugin marketplace，包含 MCP/hook/source pinning [GH:openai-skills]。 |

上述项目按 `ai-programs/ai-harness/ai-plugins` 同类范围做定位级对比，未在本轮按同一 10 维度框架重审；比较重点是 taxonomy placement，不是完整 benchmark。

---

## 它能做什么

按 Claude docs 与本地扫描，本仓库是一个 Claude Code plugin marketplace [Docs:plugins] [Docs:marketplaces]：

1. **声明 marketplace**：根 `.claude-plugin/marketplace.json` 定义 `claude-plugins-official`、owner、description 和 257 个 plugin entries [GH:marketplace]。
2. **维护本地插件**：`/plugins` 是 Anthropic 内部开发维护插件；本地扫描看到 internal plugin dirs=39，包含 code review、feature dev、security guidance、MCP server dev、LSP 系列等 [GH:readme][GH:local-scan]。
3. **收录外部插件**：`/external_plugins` 和 marketplace 外部 source entries 指向第三方/partner/community 插件，很多 entry 带 SHA pin [GH:readme] [GH:marketplace]。
4. **组合多种能力组件**：plugin 可包含 `.claude-plugin/plugin.json`、`.mcp.json`、commands、agents、skills、hooks、README；Claude docs 还支持 LSP、monitors、bin、settings 等 [GH:readme] [Docs:plugins]。
5. **治理 marketplace 变更**：workflow 对 plugin 结构、license、external policy、MCP URLs、SHA bumps 做自动化检查/扫描 [GH:workflow-validate] [GH:workflow-scan]。

本地扫描确认：tracked files=413、plugin manifests=39、`.mcp.json`=16、agents markdown=24、`SKILL.md`=29、command entries=27、workflows=9 [GH:local-scan]。这些数字只说明 repo 中可审计内容，不包含安装外部 source 后可能下载的完整内容。

## 运行环境与资源占用

| 场景 | CPU | 内存 | 存储 | 说明 |
|------|-----|------|------|------|
| 仓库本体 | N/A | N/A | ~5.1 MB tracked file bytes excluding `.git` | JSON/Markdown/scripts/config 为主，无常驻服务 [GH:local-scan] |
| 本地 Claude Code 插件 | 取决于启用插件 | 取决于启用插件 | 本地插件轻量；外部 source 另计 | 由 Claude Code 解析 plugin/skill/hook/MCP/settings [Docs:plugins] |
| 外部 MCP / hooks / binaries | 取决于外部服务与脚本 | 同左 | 可能下载额外 repos/packages | 安全和资源成本不由 marketplace 文件本身封顶 |

- **运行时**：仓库不是服务端应用；实际运行由 Claude Code 和具体插件组件执行 [Docs:plugins]。
- **操作系统**：取决于 Claude Code 和插件脚本；hooks/binaries 可能有 OS-specific 行为。
- **Docker**：未验证官方 Docker 部署路径；`docker_support: false`。
- **GPU**：不需要。
- **外部依赖**：Claude Code、外部 git repos、MCP servers、API tokens、plugin-specific package managers 或 binaries [GH:marketplace] [GH:mcp-github]。

性能评分 3/5。marketplace 文件本体轻量，但真实成本来自 Claude Code、模型调用、MCP round trips、hooks/scripts、外部工具和插件并发。未做 runtime benchmark，故只给中性分。

## 上手体验

评分 3/5。

README 给出 Claude Code 安装方式：`/plugin install {plugin-name}@claude-plugins-official`，也可在 `/plugin > Discover` 浏览 [GH:readme]。Claude Code docs 对 plugin manifest、skills 命名空间、local test、marketplace add/update/install 命令有清楚说明 [Docs:plugins] [Docs:marketplaces]。

扣分点：真正安全上手需要先判断 plugin source、license、MCP server、hook、token scope、外部依赖和更新策略。对于外部插件，用户还需要理解 SHA pin 与 ref 的关系、是否会下载额外代码、是否要求 SaaS 凭据。上手不难，安心使用不易。

## 代码质量

评分 3/5。

在 hybrid/non-software rubric 下，这里的 `code_quality` 只评价 manifest 结构、目录一致性、workflow 治理和可维护性，而不是每个插件的业务正确性或 runtime 安全性。正面信号包括：根 marketplace 清晰，local/external source 分层明确；workflow 覆盖 validate、scan、license、MCP URL、SHA bump/revert；多个 shared actions 使用 commit pin；policy scan 有 verdict cache 与 failure handling [GH:marketplace] [GH:workflow-validate] [GH:workflow-scan]。

保守限制：0 releases、open issues=804；部分 workflows 仍使用 `actions/checkout@v4`、`actions/cache/*@v4`、`actions/github-script@v7` 等 tag pin，而非全部 commit SHA pin [GH:workflow-actions]。同时，schema/policy scan 不证明 plugin runtime 行为正确或安全。

## 可扩展性

评分 4/5。

从 marketplace 架构看，扩展性很强：plugin entries 可指向 local path、url、git-subdir、github source；docs 还支持 marketplace-level owner、metadata.pluginRoot、cross-marketplace dependencies 等字段 [Docs:marketplaces]。插件内部可组合 skills、commands、agents、hooks、MCP、LSP、monitors、bin、settings [Docs:plugins]。

这个 4/5 表示**Claude Code 生态内的扩展模型丰富**，但仍受权限边界、版本兼容、外部依赖和平台语义限制；它不表示每个扩展都安全或跨平台。迁移到 Hermes/Codex/Cursor 仍需重写 hooks、commands、settings 和 plugin manifest semantics。

## 文档质量

评分 3/5。

根 README 简洁说明目录结构、安装命令、plugin structure、skill-bundle plugins、license 和官方文档入口 [GH:readme]。Claude Code docs 对 plugin 与 marketplace 概念更完整，包含 quickstart、manifest fields、plugin directories、marketplace schema、install commands、source 类型等 [Docs:plugins] [Docs:marketplaces]。

扣分点是文档分散：每个插件的真实权限、配置、风险、license 和外部依赖要到各自目录或外部 repo 阅读；根 README 没有提供统一 risk matrix、版本政策或 plugin trust levels。

## 社区与成熟度

| 维度 | 评分 | 说明 |
|------|------|------|
| 社区活跃度 | 4/5 | 截至 2026-07-19：32294 stars、3607 forks、main 当日有提交；作为 Anthropic 官方 Claude Code marketplace，关注度和贡献活动很强，但 community profile 仅 37% [GH][GH:community]。 |
| 成熟度 | 2/5 | 2025-11 创建、截至 2026-07-19 仍无 release cadence/版本承诺、open issues=804；plugin marketplace 仍处快速扩张期，稳定性和治理负载需保守看待 [GH]。 |

## 安全与风险

评分 2/5。

核心风险是**插件市场供应链 + agent tool permissions**。README 明确说安装/更新/使用前必须信任 plugin，Anthropic 不控制插件包含的 MCP servers、files 或其他软件，也不能验证它们不会变化 [GH:readme]。本轮本地样本显示风险不是抽象的：`security-guidance` plugin 用 hooks 执行 bash/Python 并在 git commit/push 后异步唤醒；GitHub external plugin 的 `.mcp.json` 会把 `GITHUB_PERSONAL_ACCESS_TOKEN` 作为 Authorization header 发给 HTTP MCP endpoint [GH:security-hook] [GH:mcp-github]。

正面信号是：外部 entries 有 policy scan workflow，marketplace 中 205 个 entries 带 sha/ref pin metadata，validate workflow 对官方 curated marketplace 强制 SHA-pin invariant [GH:marketplace][GH:workflow-validate][GH:workflow-scan]。但这些只能降低供应链风险，不能证明 MCP server 可信、hook 无副作用、token scope 最小、prompt injection 已解决、外部软件未来不会变。本轮 repository-advisory API 返回空，仅表示本次未查到公开 advisory，不是安全证明 [GH:advisories]。

生产使用建议：只安装确实需要的插件；优先 local/Anthropic-maintained 且可审计插件；外部 source 固定 SHA；OAuth/API token 最小权限；MCP endpoint allowlist；hooks 默认沙箱；禁用或审计自动更新，插件更新后重新审查；生产账号、支付、云控制台、客户数据、HR/finance/legal 系统必须 human approval gate。

## 学习价值

很高。对 Develata/Hermes 的启发集中在治理层：

1. **Marketplace 是 source aggregation，不是文件夹列表**：local、url、git-subdir、github source 并存，需要统一 manifest 和 source policy [GH:marketplace]。
2. **SHA pin 是底线，不是终点**：pin 只能固定代码对象，不能替代 license、MCP endpoint、token scope、runtime behavior 审查 [GH:workflow-validate]。
3. **Policy scan 要缓存和可回滚**：`scan-plugins.yml` 的 verdict cache、TTL、failure revert 思路适合迁移到 Hermes plugin registry [GH:workflow-scan]。
4. **Hooks/MCP 是 agent 插件的真实风险边界**：比 prompt 文本更接近传统软件供应链，必须纳入权限模型和审计日志 [GH:security-hook] [GH:mcp-github]。
