---
title: "Anthropic Agent Skills"
created: 2026-05-31
updated: 2026-05-31
type: repository-analysis
repo_url: "https://github.com/anthropics/skills"
category: "ai-programs/ai-harness/skills"
tags: [agent-skills, claude, anthropic, document-skills, prompt-engineering, workflow]
previous_repo: ""
successor: ""
primary_language: "Python / Markdown"
license: "Mixed: Apache-2.0 for many examples; document skills are source-available/proprietary"
stars: 143973
forks: 16965
last_checked: 2026-07-21
last_verified: 2026-05-31
evidence: "GitHub API metadata + local clone scan + official Anthropic docs review"
archived_reason: ""
docker_support: false
gpu_required: false
estimated_cpu: "N/A"
estimated_memory: "N/A"
estimated_storage: "< 10 MB for skill files; generated documents/scripts add per task"
status: active
ratings:
  capability: 3
  usability: 3
  performance: 3
  code_quality: 3
  documentation: 3
  community: 4
  maturity: 2
  extensibility: 4
  security: 3
  recommendation: 3
overall_score: 3.1
sources:
  - "[GH] https://github.com/anthropics/skills — GitHub API checked 2026-05-31: createdAt=2025-09-22T15:53:31Z, pushedAt=2026-05-29T02:02:28Z, stars=143973, forks=16965, open issues=249, open PRs=639, releases=0, commits=37"
  - "[GH:local-scan] /opt/data/tmp/repo-wiki-trending-2026-05-31/repos/skills cloned 2026-05-31: 423 files, 102 dirs, 18 SKILL.md files, languages from GitHub API Python/HTML/Shell/JavaScript"
  - "[GH:marketplace] https://github.com/anthropics/skills/blob/main/.claude-plugin/marketplace.json — defines document-skills, example-skills, claude-api plugin entries"
  - "[GH:license-doc] https://github.com/anthropics/skills/blob/main/skills/pdf/LICENSE.txt — document skills use source-available proprietary terms tied to Anthropic services"
  - "[GH:notices] https://github.com/anthropics/skills/blob/main/THIRD_PARTY_NOTICES.md — includes FFmpeg GPLv3 notice and imageio/imageio-ffmpeg notices"
  - "[Docs:blog] https://www.anthropic.com/engineering/equipping-agents-for-the-real-world-with-agent-skills"
  - "[Docs:spec] https://agentskills.io/specification"
  - "[Docs:api] https://docs.claude.com/en/api/skills-guide"
  - "[Docs:help-what] https://support.claude.com/en/articles/12512176-what-are-skills"
  - "[Docs:help-use] https://support.claude.com/en/articles/12512180-using-skills-in-claude"
  - "[GH:superpowers] https://github.com/obra/superpowers — adjacent plugin comparison; existing local analysis under ai-programs/ai-harness/ai-plugins/superpowers.md"
  - "[GH:scientific-agent-skills] https://github.com/K-Dense-AI/scientific-agent-skills — same-category comparison; existing local analysis under ai-programs/ai-harness/skills/scientific-agent-skills.md"
---

# Anthropic Agent Skills

> Anthropic 官方公开的 Claude Agent Skills 示例库与文档技能参考实现：既是 Agent Skills 标准的“样板间”，也是 Claude 文档生成能力相关的 source-available 参考材料。
>
> **状态**: `active` · **总分**: 3.1/5 · **推荐度**: 3/5

## 一句话总结

`anthropics/skills` 的价值不在于提供一个独立软件，而在于给出 Anthropic 官方认可的 Agent Skills 目录结构、`SKILL.md` 写法、Claude Code plugin marketplace 接入方式，以及 docx/pdf/pptx/xlsx 等复杂文档技能的参考材料 [GH] [GH:marketplace]。

## 总体评价

这是一个**标准样例库 + 官方参考实现 + 部分生产技能展示**的混合仓库。README 明确说它包含 Anthropic 的 Claude skills 实现；skills 是 Claude 动态加载的 instructions/scripts/resources 文件夹，用于让 Claude 在特定任务上获得可重复的程序性知识 [GH]。Agent Skills 的核心机制是 progressive disclosure：启动时只暴露技能 metadata，相关时再读取 `SKILL.md` 和附属 references/scripts，以避免把所有上下文一次性塞入模型 [Docs:blog] [Docs:api]。

从 wiki 角度，它值得收录：它标志着 Agent Skills 从 community prompt/skill collection 进入 Anthropic 官方产品化阶段，并给出了 document skills 这类复杂技能的真实结构。但必须保守看待：仓库创建于 2025-09，只有 37 个 commits、无 release、开放 issue/PR backlog 很高；README 也明确强调这些 skills 是 demonstration and educational purposes only，实际 Claude 产品行为可能不同，critical tasks 前必须自行测试 [GH]。

另一个关键 caveat 是许可证。README 称 many skills open source (Apache 2.0)，但 docx/pdf/pptx/xlsx 等 document creation/editing skills 是 source-available, not open source；本地扫描到 document skills 的 `LICENSE.txt` 明确限制提取、复制、派生、分发等行为 [GH] [GH:license-doc]。因此它适合“学习模式与参考结构”，不适合直接当作全量可自由 fork 的开源技能包。

## 推荐度：3/5

**角色定位**：推荐给正在研究 Agent Skills 标准、Claude Code plugin、文档生成/编辑 skills、或希望给 Hermes/Claude/Codex 等 agent 设计可复用技能的人。

推荐理由：
- 官方样例地位强：比普通社区 skill collection 更能反映 Anthropic 对技能结构、触发描述、progressive disclosure 的产品判断 [Docs:blog] [Docs:spec]。
- 复杂技能参考价值高：docx/pdf/pptx/xlsx 这类 document skills 展示了“主 skill + references/scripts/assets”的组合方式 [GH]。
- 上手路径清楚：Claude Code 可通过 `/plugin marketplace add anthropics/skills` 后安装 `document-skills` 或 `example-skills`；Claude API 文档也给出 skills container 使用方式 [GH] [Docs:api]。

保留意见：
- 不是通用开源库，document skills 的使用权受 Anthropic 服务条款限制，不能按 Apache-2.0 全量复用 [GH:license-doc]。
- 仓库本身很新、无 release、commit 数少，issue/PR backlog 偏高；这更像“公开参考物料”，不是稳定工程 dependency [GH]。
- 技能效果依赖 Claude 产品、code execution/container 环境、以及用户是否启用 skills；离开 Claude 生态后需看其他平台是否采纳 Agent Skills spec [Docs:api] [Docs:spec]。

**结论**：适合作为 Agent Skills 的官方参考与学习材料，推荐跟踪和拆解；但它当前更像 reference corpus，不像稳定 dependency。生产采用前应逐 skill 审查许可证、执行权限、数据处理、成本和回滚方案。

## 优势

1. **官方参考价值高**：Anthropic 自己维护，能观察 Agent Skills 如何被产品化为 Claude.ai、Claude Code 与 API 能力 [Docs:help-what] [Docs:api]。
2. **progressive disclosure 模式清楚**：`name`/`description` 先进入上下文，相关时再读 `SKILL.md` 与附属文件，是 agent context engineering 的重要设计模式 [Docs:blog] [Docs:spec]。
3. **文档技能有参考复杂度**：docx/pdf/pptx/xlsx 展示了文档创建、读取、编辑、转换类任务如何被拆成 instructions、scripts、references 与 assets；但这些只是 source-available reference materials，不应视作 Claude 内部生产实现的完整镜像 [GH] [GH:license-doc]。
4. **Claude Code marketplace 接入**：`.claude-plugin/marketplace.json` 定义了 `document-skills`、`example-skills`、`claude-api` 三个 plugin 入口 [GH:marketplace]。
5. **标准外溢性**：Agent Skills spec 在 agentskills.io 公开，理论上不只限于 Claude；目录结构简单，其他 agent 可仿照实现 [Docs:spec]。
6. **学习材料覆盖尚可**：creative/design、frontend、MCP builder、web app testing、internal comms、Claude API 等示例能展示不同 skill 类型的边界；但仓库仅 18 个 `SKILL.md`，覆盖面不宜与大型专业 skill collection 等量齐观 [GH:local-scan]。

## 劣势

1. **许可证混合且易误读**：README 说 many skills open source，但 document skills 明确 source-available/proprietary；不能把整个仓库当作 Apache-2.0 资源 [GH] [GH:license-doc]。
2. **演示性质强**：README 明确提示 skills 仅供 demonstration/educational purposes；Claude 产品内实际行为可能不同，critical tasks 必须自测 [GH]。
3. **成熟度低**：2025-09 创建、无 release、37 commits；开放 issue=249、open PR=639，说明社区关注很高，也说明治理和合并压力大 [GH]。
4. **平台绑定现实存在**：虽然 Agent Skills spec 是开放标准，但本仓库主要围绕 Claude；Claude API 使用 skills 还要求 code execution beta headers 与 container 机制 [Docs:api]。
5. **安全边界复杂**：skills 可携带 scripts/resources，Claude Help Center 明确提醒只安装可信来源，主要风险包括 prompt injection 与 data exfiltration [Docs:help-use]。
6. **缺少独立 benchmark**：没有看到系统性评测说明各 skill 相对无 skill baseline 的提升幅度；能力评价主要来自结构审查和官方文档。
7. **成本与隐私风险未由仓库解决**：API skills 需要 code execution/container 与文件上传下载；文档处理场景天然涉及敏感文件，且 skills feature 不适用 Zero Data Retention，应按 Anthropic 数据保留和企业合规要求单独评估 [Docs:api]。
8. **热度不等于采用度**：star/fork 数来自 GitHub API 的点时快照；由于仓库很新且无 release，不应把高热度直接等同于真实生产采用度或成熟度 [GH]。

---

## 适合什么场景

- 研究 Agent Skills 标准、技能目录结构和 progressive disclosure 机制。
- 设计 Hermes/Claude/Codex 等 agent 的 reusable skills，寻找官方写法参考。
- 想学习复杂 document skills 如何组织 references/scripts/assets。
- Claude Code 用户希望试用 document-skills 或 example-skills。
- 观察 Anthropic 在“文件型 agent capabilities”上的产品方向。

## 不适合什么场景

- 需要一个稳定、版本化、可长期 pin 的开源库：当前无 release，仓库更像 reference corpus。
- 计划无审查地 fork 全部内容用于商业产品：document skills 许可证不允许按普通开源方式复用 [GH:license-doc]。
- 不使用 Claude/Claude Code/API 且目标平台未支持 Agent Skills spec。
- 安全边界极严格、禁止外部 prompt/scripts/resources 混入执行环境的组织。
- 希望获得独立 benchmark 或可重复性能评测的用户。

## 与类似项目对比

| 项目 | 定位 | 相对本项目 |
|------|------|-----------|
| Superpowers | 跨平台 agentic SDLC skills/workflows，强调工程纪律与 auto-triggering | Superpowers 更像“开发流程规训框架”；`anthropics/skills` 更像官方 skill 标准样板与 Claude 文档能力参考。前者方法论更完整，后者产品参考权威性更强 [GH:superpowers]。 |
| scientific-agent-skills | 科学计算/生物医药/化学等领域 skill collection | scientific-agent-skills 覆盖专门科研工作流；`anthropics/skills` 覆盖面较泛，重点在官方格式与 document skills reference [GH:scientific-agent-skills]。 |
| Spec Kit | spec-driven development CLI/templates/integrations | Spec Kit 是 artifact-centric 的开发流程工具；Agent Skills 是动态加载的 task capability package。两者可互补：Spec Kit 管 spec/plan/tasks，Skills 管具体任务能力。 |
| Claude built-in Projects / custom instructions | 静态背景知识或长期指令 | Skills 比 Projects 更程序化、按需加载；但也更依赖 code execution/file access，安全审查更重要 [Docs:help-what]。 |

---

## 它能做什么

本仓库主要包含三类内容 [GH] [GH:marketplace]：

1. **Agent Skills 示例**：algorithmic-art、frontend-design、mcp-builder、webapp-testing、skill-creator、theme-factory、internal-comms 等，用来展示不同任务类型如何写 skill。
2. **Document Skills**：docx、pdf、pptx、xlsx；这些是 Claude 文档能力相关的参考材料，但不保证等同于 Claude 产品内的完整生产实现；它们属于 source-available not open source，需按 Anthropic terms 使用 [GH] [GH:license-doc]。
3. **标准/模板入口**：`spec/agent-skills-spec.md` 指向 agentskills.io specification，`template/SKILL.md` 给出最小 skill 模板 [Docs:spec]。

本地扫描：423 files、102 dirs、18 个 `SKILL.md`；`.claude-plugin/marketplace.json` 暴露 `document-skills`、`example-skills`、`claude-api` 三个 plugin entry [GH:local-scan] [GH:marketplace]。

## 运行环境与资源占用

| 场景 | CPU | 内存 | 存储 | 说明 |
|------|-----|------|------|------|
| 最小 | N/A | N/A | < 10 MB | 仅 skill markdown/scripts/resources，无常驻服务 |
| Claude API 使用 | 由 code execution container 决定 | 由 container 决定 | 上传 skill 限制 < 30 MB | API skills 通过 container + code execution tool 运行 [Docs:api] |

- **运行时**：skill 文件本身无常驻服务；实际运行由 Claude.ai / Claude Code / Claude API code execution container 驱动 [Docs:api]。
- **操作系统**：取决于 Claude Code 或目标 agent 环境；skill 目录本身跨平台。
- **Docker**：无官方 Docker 部署。
- **GPU**：不需要。
- **外部依赖**：Claude skills 功能、code execution/file creation 能力；API 场景需要 beta headers `code-execution-2025-08-25` 与 `skills-2025-10-02`，这里按 API 文档中的版本字段记录 [Docs:api]。

性能评分 3/5。作为文件型能力包，静态资源占用很低；但真实成本来自 Claude code execution、文件生成、token/context 使用、文档大小和可能的脚本执行，API 使用还会带来模型与工具调用费用。因未实际运行 benchmark，只给中性分。

## 上手体验

评分 3/5。

Claude Code 的 README 路径较直接：`/plugin marketplace add anthropics/skills` 后安装 `document-skills@anthropic-agent-skills` 或 `example-skills@anthropic-agent-skills` [GH]。API 文档也说明可以在 `container.skills` 中指定 Anthropic skills 或 custom skills，并通过 Files API 下载生成文件 [Docs:api]。

扣分点：Claude API skills 需要 beta headers、code execution tool、container 语义；Claude.ai 需要用户在设置中启用 code execution/file creation 和 skills；不同产品界面下的启用路径并不完全统一 [Docs:help-use]。相较纯 Markdown skills，本仓库的 document skills 又叠加了许可证和文件处理安全审查成本。

## 代码质量

评分 3/5。

这是 non-software/hybrid 仓库，不能按普通库的测试覆盖率评估。优点是目录结构清楚，`SKILL.md` frontmatter + markdown body 与 optional references/scripts 的组织方式符合 Agent Skills spec [Docs:spec]。复杂 document skills 带有 Python/Shell/JS/HTML 等辅助资产，说明它不只是 prompt 集合 [GH:local-scan]。

保守扣分原因：本仓库无 release、无明显 CI/test suite；GitHub API 显示 open PR 数很高，说明大规模社区贡献尚未完全消化 [GH]。对于 skill 文档，质量更应看触发描述、步骤、边界和安全提示；这些局部质量不错，但缺少自动化验证和可重复评测。

## 可扩展性

评分 4/5。

Agent Skills spec 设计本身高度可扩展：一个 skill 至少包含 `SKILL.md`，可附加 scripts、references、assets 等；frontmatter 必需 `name` 与 `description`，可选 `license`、`compatibility`、`metadata`、实验性的 `allowed-tools` [Docs:spec]。本仓库还通过 marketplace manifest 将多个 skill folder 组合成 Claude Code plugin entry [GH:marketplace]。

限制在于：跨平台支持取决于目标 agent 是否实现 Agent Skills spec；许可证混合也会限制实际 fork 和再分发。

## 文档质量

评分 3/5。

README 简洁说明 skills 定义、仓库定位、Claude Code/Claude.ai/API 使用路径和 basic skill 创建方式 [GH]。外部官方文档更完整：Anthropic engineering blog 解释 progressive disclosure 与 skill anatomy；agentskills.io 给出 spec；Claude API docs 给出 container、versioning、limits、data retention、environment constraints；Help Center 说明用户界面启用和安全注意事项 [Docs:blog] [Docs:spec] [Docs:api] [Docs:help-use]。

不足是仓库内部 spec 文件只指向外部站点，且大量行为细节分散在 Help Center、API docs、engineering blog 之间；离线阅读仓库本身不能获得完整产品语义。按保守尺度，仓库内文档质量只能给 3，外部产品文档则可作为补充来源。

## 社区与成熟度

| 维度 | 评分 | 说明 |
|------|------|------|
| 社区活跃度 | 4/5 | 143973 stars、16965 forks，Anthropic 官方项目，2026-05-29 有 push；但贡献者首屏仅 13 人，open PR=639 说明合并压力很高 [GH]。 |
| 成熟度 | 2/5 | 2025-09 创建、无 release、37 commits；skills 产品本身仍在快速扩展，适合跟踪/学习，不宜当作稳定依赖 [GH]。 |

## 安全与风险

评分 3/5。

主要风险来自 skill 机制本身：skills 可以包含 instructions/scripts/resources，安装不可信 skill 可能引入 prompt injection、data exfiltration、恶意 package code，或在 agent 执行环境中运行有副作用的 Python/Shell/JS 脚本。Claude Help Center 明确要求只安装 trusted sources，并点名上述风险 [Docs:help-use]。API docs 还说明 skills feature 不适用 Zero Data Retention；环境有 no network access/no runtime package installation 等 container 限制，但这是 API code execution 环境的限制，不等于所有使用场景都自动安全 [Docs:api]。

本地 `gh api repos/anthropics/skills/security-advisories` 查询为空；这只能说明没有 published advisories，不能证明无风险 [GH]。本条目也未审计所有 scripts/resources 的具体行为，因此不能把“官方仓库 + 无 advisories”理解成已安全审计。

## 学习价值

高。对 Develata/Hermes 最有价值的是三点：

1. **技能触发描述是 interface**：`description` 不是注释，而是 agent 判断何时加载技能的关键 metadata。
2. **progressive disclosure 是 context engineering 原则**：主 skill 保持短，细节沉到 references/scripts/assets。
3. **许可证与执行边界必须前置**：skill 不是“纯文本 prompt”，它会引导工具执行；需把 trust boundary 写入分析与使用规范。
4. **官方样例也要按供应链材料审查**：即使来自 Anthropic，低 commit 数、高 PR backlog、混合许可证与数据保留限制仍然需要在采用前显式评估。

---

### 附录：评分说明

本条目按 non-software/hybrid rubric 评估：仓库主体是可执行/可加载的技能材料，而非传统库。`performance` 评估文件型技能包本体的资源效率；`code_quality` 评估目录结构、skill 组织、辅助脚本和验证机制；`maturity` 对无 release 和快速变化作保守扣分。
