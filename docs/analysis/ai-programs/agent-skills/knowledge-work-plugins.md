---
title: "Knowledge Work Plugins"
created: 2026-05-31
updated: 2026-05-31
type: repository-analysis
repo_url: "https://github.com/anthropics/knowledge-work-plugins"
category: "ai-programs/agent-skills"
tags: [claude, cowork, plugins, agent-skills, mcp, knowledge-work, enterprise]
previous_repo: ""
successor: ""
primary_language: "Python / Markdown"
license: "Apache-2.0"
stars: 18199
forks: 2140
last_checked: 2026-05-31
last_verified: 2026-05-31
evidence: "GitHub API metadata + local clone scan + official Anthropic Cowork/product docs review"
archived_reason: ""
docker_support: false
gpu_required: false
estimated_cpu: "N/A"
estimated_memory: "N/A"
estimated_storage: "< 20 MB for plugin files; external connector data/cache depends on platform"
status: active
ratings:
  capability: 3
  usability: 3
  performance: 3
  code_quality: 3
  documentation: 4
  community: 3
  maturity: 2
  extensibility: 4
  security: 2
  recommendation: 3
overall_score: 3.0
sources:
  - "[GH] https://github.com/anthropics/knowledge-work-plugins — GitHub API checked 2026-05-31: createdAt=2026-01-23T20:11:54Z, pushedAt=2026-05-30T08:10:53Z, stars=18199, forks=2140, open issues=53, open PRs=83, releases=0, commits=84, license=Apache-2.0"
  - "[GH:local-scan] /opt/data/tmp/repo-wiki-trending-2026-05-31/repos/knowledge-work-plugins cloned 2026-05-31: 1163 files, 536 dirs, 212 SKILL.md files, 21 .mcp.json files, 26 README.md files, 15 command files, 4 GitHub workflows"
  - "[GH:marketplace] https://github.com/anthropics/knowledge-work-plugins/blob/main/.claude-plugin/marketplace.json — marketplace defines role plugins and partner/external plugin entries"
  - "[GH:workflow-scan] https://github.com/anthropics/knowledge-work-plugins/blob/main/.github/workflows/scan-plugins.yml — policy scan workflow for changed external marketplace entries"
  - "[GH:workflow-mcp] https://github.com/anthropics/knowledge-work-plugins/blob/main/.github/workflows/check-mcp-urls.yml — liveness check for vendored HTTP/SSE MCP URLs"
  - "[GH:license] https://github.com/anthropics/knowledge-work-plugins/blob/main/LICENSE"
  - "[Docs:cowork] https://claude.com/product/cowork"
  - "[Docs:mcp] https://modelcontextprotocol.io/"
  - "[GH:anthropic-skills] https://github.com/anthropics/skills — adjacent official Agent Skills repository"
  - "[GH:superpowers] https://github.com/obra/superpowers — same-category comparison; existing local analysis under ai-programs/agent-skills/superpowers.md"
---

# Knowledge Work Plugins

> Anthropic 为 Claude Cowork / Claude Code 开源的知识工作 plugin marketplace：把 skills、MCP connectors、slash commands 和 sub-agents 组合成销售、数据、法务、财务、产品、HR、工程等角色插件。
>
> **状态**: `active` · **总分**: 3.0/5 · **推荐度**: 3/5

## 一句话总结

`anthropics/knowledge-work-plugins` 是 Anthropic 将 Claude Cowork 从“通用 agent”推向“角色化知识工作 agent”的样板库：每个 plugin 用 markdown/JSON 文件声明 skills、commands、MCP connectors 和角色流程，让 Claude 更像某个业务岗位的协作者 [GH] [Docs:cowork]。

## 总体评价

这个仓库的工程价值主要在**架构范式**，不是在“可独立运行的软件”。README 称每个 plugin 可 bundling skills、connectors、slash commands 和 sub-agents；但本轮本地扫描只验证了 `skills/`、`.mcp.json`、`commands/`、`.claude-plugin/plugin.json` 等结构，未逐项验证 sub-agent 组件是否在每个 plugin 中存在。插件主体主要是 file-based markdown/JSON；仓库没有传统应用运行时或部署基础设施 [GH]。本地扫描显示它已经包含 212 个 `SKILL.md`、21 个 `.mcp.json`、15 个 command files，以及 productivity/sales/customer-support/product-management/marketing/legal/finance/data/enterprise-search/bio-research 等 repo-maintained local plugins [GH:local-scan]。

对 wiki 来说，它值得分析，因为它展示了 Anthropic 对“knowledge work agent packaging”的早期产品形态：不是给每个角色训练模型，而是把角色知识、工具连接和常见工作流组合成 plugin。对 Develata/Hermes 而言，它可作为未来技能/插件生态设计的参照：role-specific bundles、connector placeholders、policy scan、MCP URL liveness check，都是治理层设计的具体例子 [GH:workflow-scan] [GH:workflow-mcp]。

但评分必须保守。仓库创建于 2026-01，只有 84 commits、无 release；核心产品 Claude Cowork 仍是 Anthropic 生态内的新能力，外部用户能否稳定复现 README 场景取决于 Cowork/Claude Code、MCP servers、企业账号权限、外部 SaaS credentials 和本地策略。对 Develata 当前研究/工具链而言，直接采用价值有限，学习架构价值高于日常实用价值。

## 推荐度：3/5

**角色定位**：推荐给研究 agent plugin marketplace、MCP connector packaging、企业知识工作自动化、Claude Cowork 生态的人；对普通个人开发者只建议观察和拆解设计。

推荐理由：
- 范式清楚：将“角色知识 + 工具连接 + slash commands + subagents”打包成 plugin，组织级可定制性强 [GH]。
- 覆盖业务面广：README 列出 11 个核心插件，marketplace 还包含 partner/external entries；本地扫描显示至少 16 个 repo-maintained local plugins 与 5 个 partner-built 子目录 [GH] [GH:local-scan]。
- 治理机制有学习价值：外部 marketplace entries 有 Claude policy scan；vendored MCP URLs 有 liveness workflow，说明 Anthropic 已开始处理 plugin 供应链风险 [GH:workflow-scan] [GH:workflow-mcp]。

保留意见：
- 产品依赖强：主要为 Claude Cowork，兼容 Claude Code；离开 Anthropic 生态后只是 markdown/JSON 模板 [GH] [Docs:cowork]。
- 成熟度低：2026-01 创建、无 release、open issues=53/open PRs=83；不宜视为稳定插件标准 [GH]。
- 许多业务场景涉及法律、财务、HR、客户数据，README 中的免责声明和“必须专业人士复核”不是形式主义，而是实际风险边界。

**结论**：值得加入 wiki 作为“Claude/Cowork plugin architecture”观察对象；推荐度保守给 3/5。可学其结构，不宜照搬其业务自动化承诺。

## 优势

1. **角色化 packaging 完整**：每个 plugin 将 skills、commands、connectors 组合到一个目录，适合组织按岗位/团队分发 [GH]。
2. **MCP connector 生态对接**：`.mcp.json` 把 Slack、Notion、Jira、CRM、data warehouse、design tools 等外部工具纳入 Claude 工作流 [GH] [Docs:mcp]。
3. **覆盖知识工作主流岗位**：sales、finance、data、legal、marketing、customer support、product management、engineering、HR、operations、design、bio-research 等方向都有模板 [GH:marketplace]。但这主要证明覆盖面，不证明每个模板在真实业务数据和权限环境中可靠。
4. **文件型低门槛**：README 强调 markdown/JSON、no infrastructure/no build steps；适合 fork 后加入组织术语、流程和连接器 [GH]。
5. **治理工作流可借鉴**：`scan-plugins.yml` 对外部 entries 做 policy scan 并缓存 verdict；`check-mcp-urls.yml` 探测 HTTP/SSE MCP URL 活性，避免死链接进入 marketplace [GH:workflow-scan] [GH:workflow-mcp]。
6. **Apache-2.0 许可**：相比 `anthropics/skills` 的 document skills 混合许可，本仓库根许可证清楚为 Apache-2.0 [GH:license]。

## 劣势

1. **高度依赖 Claude Cowork/Claude Code**：README 直接写 Built for Claude Cowork, also compatible with Claude Code；其他 agent 不能直接消费其 plugin semantics [GH]。
2. **项目很新且无 release**：2026-01 创建、无版本发布；plugin schema、Cowork 能力和 marketplace 规则都可能继续变化 [GH]。
3. **业务自动化风险高**：legal/finance/HR/customer support 等插件若误用，可能触及法律意见、财务报告、个人数据、客户沟通等高风险场景。
4. **连接器凭据与权限复杂**：真正发挥价值需要企业 SaaS 权限、MCP server 配置和数据访问策略；README 的“connectors”不是开箱即用的公共能力 [GH]。
5. **测试/评测不足**：有 workflow 做 URL liveness 和 external policy scan，但没有看到对 200+ skills 的系统性行为评测或任务基准 [GH:local-scan]。84 commits 生成 1163 files/212 skills，按保守视角也意味着内容审查密度需要额外关注。
6. **AI 生成/模板内容可能幻觉**：大量 skill 文档可能包含过时 API、错误流程或虚构能力；静态扫描不能证明业务流程正确。
7. **对个人/学术用户直接价值有限**：大部分插件面向企业知识工作；Develata 当前数学/随机图/个人工具链只有间接借鉴价值。

---

## 适合什么场景

- 研究 Claude Cowork、Claude Code plugin、agent marketplace 设计。
- 企业想把岗位流程、工具连接、slash commands 和组织知识打包给员工使用。
- 需要快速原型化 sales/data/legal/finance/PM/support 等角色 agent 的团队。
- 学习 MCP connector 在 plugin 中如何声明与治理。
- Hermes skills/plugins 生态治理参考：marketplace manifest、外部 entry pinning、policy scan、URL liveness check。

## 不适合什么场景

- 不使用 Claude Cowork/Claude Code 的用户；其他平台未必理解 `.claude-plugin` 和 plugin semantics。
- 需要生产稳定版本的组织；当前无 release 和稳定 schema 承诺 [GH]。
- 希望“安装即自动完成企业流程”的用户；真实价值依赖大量本地定制和权限接入。
- 法务、财务、HR 等强监管场景中无人工复核地自动决策。
- 个人数学研究/随机图文献工作：可借鉴 plugin 架构，但现成插件匹配度不高。

## 与类似项目对比

| 项目 | 定位 | 相对本项目 |
|------|------|-----------|
| anthropics/skills | Claude Agent Skills 官方示例与 document skills reference | `skills` 是更底层的 task capability package；`knowledge-work-plugins` 是把 skills/connectors/commands/subagents 打成岗位级 bundle [GH:anthropic-skills]。 |
| Superpowers | coding agent 的工程纪律技能框架 | Superpowers 聚焦软件开发流程和跨平台 agent discipline；本项目聚焦企业知识工作角色，平台绑定更强、业务连接器更多 [GH:superpowers]。 |
| MCP server collections | 提供工具/API 连接能力 | MCP server 解决“能调用什么工具”；knowledge-work plugins 解决“某个岗位应该如何使用这些工具、按什么流程输出”。两者互补 [Docs:mcp]。 |
| n8n / Zapier / Make | 可视化 workflow automation | n8n/Zapier 是确定性流程编排；Cowork plugins 是 agent 行为包装，流程更柔性但可预测性更弱。 |

---

## 它能做什么

按 README 和 marketplace，本仓库主要提供三层内容 [GH] [GH:marketplace]：

1. **Repo-maintained local plugins**：productivity、sales、customer-support、product-management、marketing、legal、finance、data、enterprise-search、bio-research、cowork-plugin-management 等。
2. **后续扩展与 partner/external entries**：engineering、human-resources、design、operations、small-business、pdf-viewer 等本地目录；marketplace 还包含 Slack/Apollo/Common Room/Zoom/Brand Voice/Vanta/Miro/PlanetScale 等 partner/external entries [GH:marketplace]。
3. **插件内部构件**：skills 自动注入岗位知识；commands 暴露显式 slash workflow；connectors 通过 MCP servers 对接外部工具；README 还把 sub-agents 列为 plugin 可包含的构件，但本轮未逐目录验证其具体实现 [GH]。

本地扫描得到：1163 files、536 dirs、212 个 `SKILL.md`、21 个 `.mcp.json`、26 个 README、15 command files；16 个本地角色插件大多包含 `.mcp.json` 和 CONNECTORS.md，small-business 有 31 个 skills，partner-built 有 71 个 skills [GH:local-scan]。

## 运行环境与资源占用

| 场景 | CPU | 内存 | 存储 | 说明 |
|------|-----|------|------|------|
| 最小 | N/A | N/A | < 20 MB | markdown/JSON plugin files，本体无常驻服务 |
| 实际使用 | 由 Claude/Cowork 与 MCP servers 决定 | 由外部工具/agent 决定 | 取决于连接器、缓存和输出文件 | 需要 Claude Cowork/Claude Code、MCP servers、SaaS credentials |

- **运行时**：plugin 文件本身无运行时；执行由 Claude Cowork/Claude Code 和外部 MCP servers 完成 [GH] [Docs:cowork]。
- **操作系统**：取决于 Claude Code/Cowork 与 MCP server 部署环境。
- **Docker**：仓库本体无 Docker 部署要求。
- **GPU**：不需要。
- **外部依赖**：Claude Cowork 或 Claude Code、MCP connectors、企业 SaaS/API credentials、组织权限策略 [GH] [Docs:mcp]。

性能评分 3/5。文件型插件本体轻量；但真实成本取决于 Claude agent 运行、MCP round trips、外部 API 延迟和上下文规模。由于未实际运行任何 plugin，也没有独立 benchmark，这里只能给中性分，而不是按文件大小给高分。

## 上手体验

评分 3/5。

README 给出 Claude Code 安装示例：`claude plugin marketplace add anthropics/knowledge-work-plugins` 后 `claude plugin install sales@knowledge-work-plugins`；Cowork 用户可从 `claude.com/plugins` 安装 [GH]。这个路径对 Claude 生态用户较清楚。

但完整上手不止安装：要让 sales/data/legal/finance 等插件真的工作，需要配置 MCP connectors、授权外部 SaaS、校准组织术语与流程，且很多场景需要公司级权限。对个人用户而言，读懂和定制的成本明显高于普通 skill collection。

## 代码质量

评分 3/5。

这是 file-based plugin corpus。结构上，每个 plugin 基本遵循 `.claude-plugin/plugin.json`、`.mcp.json`、`commands/`、`skills/`；本地扫描显示内容规模较大且分层稳定 [GH:local-scan]。GitHub workflows 包含 external policy scan、MCP URL liveness、SHA bump 和失败 revert，说明维护者考虑了 marketplace 供应链治理 [GH:workflow-scan] [GH:workflow-mcp]。但 84 commits 对应 1163 files/212 skills，内容生成和 review 密度仍需保守看待。这里的 `code_quality` 只评价目录一致性、manifest、workflow 与静态治理，不代表业务流程正确性或 agent 行为质量。

扣分点：没有看到对 212 个 skills/commands 的行为级测试；plugin 输出质量很难仅靠静态扫描保证。许多 business workflow 的正确性依赖企业上下文和专业判断，无法由仓库测试完全覆盖。

## 可扩展性

评分 4/5。

扩展方式清晰：fork 仓库、修改 markdown/JSON、替换 connectors、加入公司术语和流程，或使用 `cowork-plugin-management` 创建新 plugin [GH]。Marketplace manifest 也支持 partner-built 与外部 git source/pinned SHA entries，说明它不只是单仓库目录，而是 marketplace 聚合层 [GH:marketplace]。

限制：扩展能力绑定 Claude plugin schema；跨平台迁移需要重写 plugin semantics。外部 entries 虽可 pin SHA，但供应链安全仍需要 policy scan 和人工审查。

## 文档质量

评分 4/5。

根 README 用较少篇幅说明了 Why Plugins、核心插件列表、安装、结构和定制方式 [GH]。各 plugin 目录通常有 README、CONNECTORS.md、skills 子目录；legal/finance/small-business 等高风险场景也在 README 中写有免责声明或 human review 要求 [GH:local-scan]。

不足：文档主要说明“应该如何用”，对失败模式、权限模型、connector 安全、不同组织落地案例的说明仍有限。Claude Cowork 产品页能补充宏观定位，但不是开发者级 plugin schema 文档 [Docs:cowork]。

## 社区与成熟度

| 维度 | 评分 | 说明 |
|------|------|------|
| 社区活跃度 | 3/5 | 18199 stars、2140 forks、23 contributors 首屏、2026-05-30 有 push；作为 Anthropic 官方生态仓库增长很快，但 open issue/PR 规模中等，外部社区成熟度未充分验证 [GH]。 |
| 成熟度 | 2/5 | 2026-01 创建、无 release、84 commits；Cowork/plugin 生态仍早期，schema 与最佳实践可能快速变化 [GH]。 |

## 安全与风险

评分 2/5。

本项目最核心风险是**工具连接 + 业务权限 + agent 行为**的组合：插件可能搜索邮件、CRM、工单、财务系统、HRIS、设计工具、数据仓库等；错误输出或 prompt injection 都可能造成真实业务影响。仓库有两个正面信号：external marketplace entries 的 policy scan workflow，以及 vendored MCP URL liveness workflow [GH:workflow-scan] [GH:workflow-mcp]。但这只是供应链与可用性的一部分，并不等于业务安全闭环；尤其是 `.mcp.json` 指向外部 HTTP/SSE 服务时，URL 活性不等于服务可信，外部端点劫持、返回恶意工具描述、权限越界和 prompt injection 都需要单独治理。

本地 `gh api repos/anthropics/knowledge-work-plugins/security-advisories` 查询为空；只能说明暂无 published advisories。生产使用仍应做：最小权限 OAuth/API token、connector allowlist、固定并审计外部 MCP server 版本/域名、日志审计、human approval gate、敏感数据脱敏、角色插件逐项 review。仓库静态内容本身也可能包含不适合特定企业合规环境的流程建议，legal/finance/HR 等插件尤其需要专业人员复核。

## 学习价值

对 Develata/Hermes 的学习价值较高：

1. **Plugin 是 role-level bundle**：比单个 skill 更接近“岗位操作系统”。
2. **MCP connector 与 skill 分层**：tool access 与 procedural knowledge 分离，便于治理。
3. **Marketplace 需要供应链治理**：pinned SHA、policy scan、URL liveness、失败自动 revert 都是可以迁移到 Hermes 插件/skill 生态的设计。
4. **业务自动化必须保守**：legal/finance/HR 等场景中，agent 输出必须是 draft/assist，而不是 final authority。
5. **可迁移的具体设计**：Hermes 若做 plugin marketplace，可复用其 marketplace manifest、external entry pinned SHA、policy scan、MCP URL liveness、失败自动 revert；但不应复用其业务自动化承诺。

---

## 附录：评分说明

本条目按 non-software/hybrid rubric 评估：仓库主体是 plugin/skill/connector 配置集合，不是传统运行库。`capability` 既看角色和 connector 覆盖面，也因未实际验证任务正确性而下调；`performance` 因真实运行成本不可测而给中性分；`code_quality` 只评估结构、治理 workflow 和可验证性，不代表业务流程或 agent 行为质量；`security` 因外部 MCP/业务权限攻击面较大而保守给 2；`recommendation` 按 Develata 当前使用场景保守给 3。
