---
title: "OpenAI Skills"
created: 2026-05-31
updated: 2026-05-31
type: repository-analysis
repo_url: "https://github.com/openai/skills"
category: "ai-programs/ai-harness/skills"
tags: [openai, codex, agent-skills, skills, workflow, prompt-engineering]
previous_repo: ""
successor: ""
primary_language: "Python / Markdown"
license: "Mixed per-skill licenses; GitHub API root license unavailable"
stars: 20902
forks: 1401
last_checked: 2026-05-31
last_verified: 2026-05-31
evidence: "GitHub REST/GraphQL metadata + local clone scan + official OpenAI Codex skills docs + Agent Skills standard docs"
archived_reason: ""
docker_support: false
gpu_required: false
estimated_cpu: "N/A for repository body; actual task cost depends on Codex/model/tool execution"
estimated_memory: "N/A for repository body; actual task cost depends on Codex/model/tool execution"
estimated_storage: "~4.6 MB tracked file bytes excluding .git in local clone; installed skills add small markdown/script assets"
status: active
ratings:
  capability: 3
  usability: 3
  performance: 2
  code_quality: 3
  documentation: 3
  community: 3
  maturity: 2
  extensibility: 4
  security: 2
  recommendation: 3
overall_score: 2.8
sources:
  - "[GH] https://github.com/openai/skills — GitHub REST/GraphQL checked 2026-05-31: createdAt=2025-11-25T06:25:42Z, pushedAt=2026-05-29T16:20:41Z, point-in-time stars=20902, forks=1401, open issues=51, open PRs=203, closed issues=13, merged PRs=110, commits=111, releases=0, GraphQL vulnerabilityAlerts visible count=0, isSecurityPolicyEnabled=false, root license unavailable, GitHub primary language=Python"
  - "[GH:readme] /opt/data/tmp/repo-wiki-trending-2026-05-31/batch8/repos/skills/README.md checked 2026-05-31: lines 1-10 define Agent Skills and link OpenAI Codex docs / agentskills.io; lines 12-36 describe system/curated/experimental install paths and `$skill-installer`; lines 38-40 say each skill has its own LICENSE.txt"
  - "[GH:contributing] /opt/data/tmp/repo-wiki-trending-2026-05-31/batch8/repos/skills/contributing.md checked 2026-05-31: lines 3-8 community values; lines 9-11 direct security/responsible-AI concerns to security@openai.com"
  - "[GH:local-scan] Local shallow clone at /opt/data/tmp/repo-wiki-trending-2026-05-31/batch8/repos/skills checked 2026-05-31: tracked files=783, checkout size=8.8M including .git, file bytes excluding .git=4,595,477, SKILL.md=44, LICENSE.txt/LICENSE files=38, `skills/.system` dirs=5, `skills/.curated` dirs=39, `skills/.experimental` missing, no .github/workflows directory observed"
  - "[GH:license-scan] Same local scan: license-file first lines counted as Apache License=22, blank first line=7, Copyright 2025 Notion Labs=4, indented Apache License=2, Figma Materials terms=2, MIT License=1; therefore whole-repo licensing is mixed and must be checked per skill"
  - "[GH:skill-installer] /opt/data/tmp/repo-wiki-trending-2026-05-31/batch8/repos/skills/skills/.system/skill-installer/SKILL.md checked 2026-05-31: lines 32-41 list helper scripts, lines 43-58 describe GitHub API download, private repo credentials, sparse-checkout fallback, destination `$CODEX_HOME/skills`, and restart requirement"
  - "[GH:security-threat-model] /opt/data/tmp/repo-wiki-trending-2026-05-31/batch8/repos/skills/skills/.curated/security-threat-model/SKILL.md checked 2026-05-31: lines 1-4 define trigger metadata; lines 21-68 require repository-grounded threat model workflow and explicit assumptions"
  - "[Docs:openai-skills] https://developers.openai.com/codex/skills — extracted 2026-05-31: skills are reusable instructions/resources/scripts; Codex uses progressive disclosure; available in Codex CLI, IDE extension, and app; initial skill-list context cap is roughly 2% of model context or 8000 chars if unknown"
  - "[Docs:create-skill] https://developers.openai.com/codex/skills/create-skill — extracted 2026-05-31: skills are authoring format, plugins are distribution unit; locations include repo/user/admin/system scopes; `SKILL.md` requires name and description"
  - "[Docs:agentskills] https://agentskills.io — extracted 2026-05-31: Agent Skills is an open folder format with SKILL.md plus optional scripts/references/assets; progressive disclosure stages are discovery, activation, execution"
  - "[GH:anthropic-skills] https://github.com/anthropics/skills — same-category official Agent Skills reference; existing local analysis under ai-programs/ai-harness/skills/anthropic-skills.md"
  - "[GH:cursor-plugins] https://github.com/cursor/plugins — adjacent Cursor plugin marketplace; existing local analysis under ai-programs/ai-harness/ai-plugins/cursor-plugins.md"
  - "[GH:knowledge-work] https://github.com/anthropics/knowledge-work-plugins — adjacent role-level Claude plugin marketplace; existing local analysis under ai-programs/ai-harness/ai-plugins/knowledge-work-plugins.md"
---

# OpenAI Skills

> OpenAI 官方的 Codex Skills Catalog：把可复用 agent workflow 写成 `SKILL.md` + scripts/references/assets 的文件型能力包，并通过 Codex 的 `$skill-installer` 与 Agent Skills 标准分发。
>
> **状态**: `active` · **总分**: 2.8/5 · **推荐度**: 3/5

## 一句话总结

`openai/skills` 值得收录，因为 OpenAI 也开始以官方仓库和 Codex 文档形式采用 Agent Skills 机制；但它当前更像年轻的官方 catalog 与示例集合，不是成熟、版本化、可无审查批量安装的工程依赖 [GH] [GH:readme] [Docs:openai-skills]。

## 总体评价

这个仓库的核心价值是**观察 OpenAI 如何把 Codex 的可复用工作流产品化**。README 明确说 Agent Skills 是 instructions、scripts、resources 的文件夹，Codex 用它们把特定任务变成可重复能力；OpenAI 文档进一步说明 skills 使用 progressive disclosure：启动时只暴露 name/description/path，相关时再加载完整 `SKILL.md`，以控制上下文占用 [GH:readme] [Docs:openai-skills]。

本地扫描显示仓库包含 44 个 `SKILL.md`：5 个 system skills 和 39 个 curated skills；README 提到的 `.experimental` 目录在本轮 clone 中不存在。仓库本体很轻，主要是 Markdown、Python/JS/Shell 辅助脚本和 license 文件；没有看到 `.github/workflows`，也没有 release [GH:local-scan]。这说明它目前更偏“官方分发目录 + 技能样例”，而不是有完整 CI、版本发布和行为基准的传统软件项目。

评分必须保守：它有 OpenAI 官方仓库/文档来源、截至 2026-05-31 的 20k+ stars 和 Codex 产品联动，但创建时间很短、无 release、open PR=203、root license 不可由 GitHub API 归一，且 license 文件显示 per-skill 混合许可。技能安装/执行还涉及网络下载、私有仓库凭据、脚本执行和 agent 指令供应链；结构价值高，直接生产采用价值须逐 skill 审查 [GH] [GH:license-scan] [GH:skill-installer]。

## 推荐度：3/5

**角色定位**：推荐给研究 Codex、Agent Skills 标准、agent workflow packaging、或希望给 Hermes/Codex/Claude 设计可复用技能的人；对普通用户，只建议选择性安装和学习，不建议全量导入。

推荐理由：
- 官方格式参照价值高：它展示 OpenAI 官方仓库/文档中对 `SKILL.md` 触发描述、system/curated skill 分层、installer workflow 的当前做法；这证明目录/格式能力，不等于每个 skill 的任务效果已被独立验证 [GH:readme] [GH:skill-installer]。
- 对 Develata/Hermes 有参考价值：skill-installer、security-threat-model、openai-docs 等技能能反映“把 procedure 存成可加载能力包”的实践边界 [GH:skill-installer] [GH:security-threat-model]。
- 生态信号明确：OpenAI docs 明确将 skills 放入 Codex CLI、IDE extension、Codex app，并与 Agent Skills open standard 对齐 [Docs:openai-skills] [Docs:agentskills]。

保留意见：
- 当前无 release、无 observed CI workflows，open PR backlog 较高，不宜按稳定 dependency 看待 [GH] [GH:local-scan]。
- license 混合且 root license 不明确，必须逐 skill 检查 `LICENSE.txt` [GH:readme] [GH:license-scan]。
- 安装和执行技能可能触发 GitHub API、下载、git sparse checkout、脚本执行和凭据访问；不能把“官方 catalog”误读成“安全可无审查安装” [GH:skill-installer]。

**结论**：加入 wiki，推荐度 3/5。它是 Codex skills 生态的官方入口，值得跟踪和拆解；生产使用时按“逐项审计、固定版本、最小权限、先沙箱试跑”处理。

## 优势

1. **OpenAI 官方目录**：相对个人 skill collection，它更能反映 Codex 产品团队对 skills 的命名、分层、安装和复用方式 [GH:readme]。
2. **标准机制清楚**：OpenAI docs 与 agentskills.io 都强调 progressive disclosure，避免把全部 workflow 文档常驻上下文 [Docs:openai-skills] [Docs:agentskills]。
3. **系统/精选分层**：本地扫描确认有 5 个 `.system` skills 和 39 个 `.curated` skills；README 说明 system skills 会随最新 Codex 自动安装，curated skills 可通过 `$skill-installer` 安装 [GH:readme] [GH:local-scan]。
4. **安装器本身有现实细节**：`skill-installer` 处理 GitHub API listing、public download、private repo credentials、git sparse checkout fallback、目标目录和 restart requirement，这比纯 README 安利更接近真实工作流 [GH:skill-installer]。
5. **对安全/工程流程有参考样本**：例如 `security-threat-model` 要求 repo-grounded evidence、trust boundaries、assets、attacker capabilities 和 explicit assumptions，说明 curated skills 不只是简单 prompt [GH:security-threat-model]。
6. **仓库本体轻量**：本地扫描 tracked files=783、file bytes excluding `.git` 约 4.6 MB，无常驻服务、无 GPU 要求 [GH:local-scan]。

## 劣势

1. **成熟度低**：2025-11 创建、111 commits、0 releases；open issues=51、open PRs=203，目录仍在快速变化 [GH]。
2. **缺少仓库级 CI/验证信号**：本轮没有看到 `.github/workflows`；这不等于没有内部 OpenAI 校验，但对公开 repo 可审计性而言是缺口 [GH:local-scan]。
3. **license 不能一概而论**：README 明确说 individual skill license 在各目录 `LICENSE.txt`；本地扫描显示 Apache/MIT/Figma/Notion 等不同 first-line 形态，整体复用需逐项检查 [GH:readme] [GH:license-scan]。
4. **平台绑定现实存在**：虽然 Agent Skills 是开放格式，但本仓库的安装、系统技能、产品可用性主要围绕 Codex [GH:readme] [Docs:openai-skills]。
5. **安全边界复杂**：skills 可携带 scripts、references 和安装脚本；installer 可访问私有 repos 和 credentials；错误 skill 可能造成 prompt injection、数据外泄、误执行或供应链风险 [GH:skill-installer]。
6. **能力覆盖不等于行为可靠**：44 个 `SKILL.md` 说明目录覆盖，但没有看到逐 skill benchmark、自动评测或真实任务成功率报告 [GH:local-scan]。
7. **README 与当前目录存在轻微漂移**：README 描述 experimental skills 安装路径，但本地 clone 未见 `.experimental` 目录；这提示仓库仍在重构或文档未完全同步 [GH:readme] [GH:local-scan]。

---

## 适合什么场景

- 研究 Codex skills 的官方目录结构、trigger description 和 installer workflow。
- 设计 Hermes / Codex / Claude 共享的 Agent Skills 风格能力包。
- 从 curated skills 中挑选安全、文档、部署、产品集成等 workflow 作为写法参考。
- 观察 OpenAI 与 Agent Skills open standard 的关系。
- 团队内部建立 skills governance：per-skill license、install source、version pin、sandbox runbook。

## 不适合什么场景

- 把整个仓库当作稳定版本化依赖批量安装到生产 agent 环境。
- 不使用 Codex，且目标 agent 不支持 Agent Skills progressive disclosure。
- 对外部 scripts、GitHub download、私有 repo credentials、prompt/resource supply chain 零容忍的环境。
- 需要独立 benchmark 证明每个 skill 能稳定提升任务成功率的场景。
- 需要清晰单一许可证边界的商业复用场景；这里必须逐 skill 审查。

## 与类似项目对比

| 项目 | 定位 | 相对本项目 |
|------|------|-----------|
| Anthropic Agent Skills | Claude 官方 Agent Skills 示例与 document skills reference | Anthropic 仓库更早体现 Agent Skills spec 与 document skills；OpenAI Skills 更直接服务 Codex，并突出 system/curated 安装路径 [GH:anthropic-skills]。 |
| Cursor Plugins | Cursor 官方 plugin marketplace seed，包含 skills/agents/rules/hooks | Cursor Plugins 是更宽的 plugin bundle；OpenAI Skills 更聚焦 Agent Skills 文件夹与 Codex 安装 [GH:cursor-plugins]。 |
| Knowledge Work Plugins | Claude Cowork 的企业角色插件 marketplace | Knowledge Work 是 role-level business plugin；OpenAI Skills 更偏 Codex/developer workflow catalog [GH:knowledge-work]。 |
| Superpowers / community skill packs | 跨平台工程纪律或个人方法论 skill collection | 社区 skill packs 方法论可能更完整或风格更鲜明；OpenAI Skills 的优势是官方 Codex 对齐，劣势是年轻、治理信号仍少。 |

上述项目跨 `ai-programs/ai-harness/skills` 与相邻 `ai-programs/ai-harness/ai-plugins` 做定位级对比，未按同一 10 维度框架在本轮重新深审；比较重点是 taxonomy placement，不是无来源的优劣判定。

---

## 它能做什么

按 README 与本地扫描，仓库提供三层能力 [GH:readme] [GH:local-scan]：

1. **System skills**：位于 `skills/.system`，README 说会随最新 Codex 自动安装；本轮看到 5 个目录，包括 `skill-installer`、`openai-docs`、`imagegen`、`skill-creator`、`plugin-creator` 等 [GH:readme] [GH:local-scan]。
2. **Curated skills**：位于 `skills/.curated`，本轮看到 39 个目录，可通过 `$skill-installer` 按名称或 GitHub URL 安装 [GH:readme] [GH:skill-installer]。
3. **Skill authoring / distribution pattern**：OpenAI docs 说明 skill 是 authoring format，plugin 是更广义的 distribution unit；skill 可包含 instructions、resources、optional scripts，并按 repo/user/admin/system scope 被 Codex 扫描 [Docs:openai-skills] [Docs:create-skill]。

需要注意：README 也示例了 `.experimental` 路径，但本轮本地 clone 未见该目录，因此不能声称当前 repo 实际包含 experimental skills [GH:readme] [GH:local-scan]。

## 运行环境与资源占用

| 场景 | CPU | 内存 | 存储 | 说明 |
|------|-----|------|------|------|
| 仓库本体 | N/A | N/A | ~4.6 MB tracked file bytes excluding `.git` | Markdown/scripts/resources，无常驻服务 [GH:local-scan] |
| Codex 安装/使用 | 由 Codex 与任务工具决定 | 由 Codex 与任务工具决定 | 安装到 `$CODEX_HOME/skills/<skill-name>` | installer 可通过 GitHub API/download/git sparse checkout 安装 [GH:skill-installer] |
| 具体 skill 执行 | 取决于 skill scripts 和外部工具 | 同左 | 取决于生成物和缓存 | 不是仓库级可统一估算 |

- **运行时**：仓库本体无 daemon；实际执行由 Codex CLI / IDE extension / Codex app 及具体 skill scripts 驱动 [Docs:openai-skills]。
- **操作系统**：取决于 Codex 与 skill scripts；skill 文件格式本身跨平台。
- **Docker**：未验证官方 Docker 部署路径；`docker_support: false`。
- **GPU**：不需要。
- **外部依赖**：Codex、GitHub 网络访问、可能的 git credentials / `GITHUB_TOKEN` / `GH_TOKEN`、以及每个 skill 自己声明或隐含的工具依赖 [GH:skill-installer]。

性能评分 2/5。文件型 catalog 本体很轻，但真实性能与资源成本来自模型调用、tool calls、脚本执行、外部 API 和上下文加载；本轮未运行任务 benchmark，也无法从仓库大小推出任务执行效率，因此按保守尺度低于中性分。

## 上手体验

评分 3/5。

对 Codex 用户，README 路径相对直接：system skills 自动安装；curated skills 可在 Codex 中使用 `$skill-installer gh-address-comments` 之类命令；安装后需 restart Codex [GH:readme]。`skill-installer` 还支持 GitHub directory URL、`--repo`、`--path`、`--ref`、`--dest`、download/git fallback 等现实选项 [GH:skill-installer]。

扣分点在于：这不是普通 `pip install`/`npm install` 工具，而是 agent 内部能力包。用户要理解 Codex skill discovery、安装目录、重启、per-skill license、网络访问与安全审查。非 Codex 用户还需要目标 agent 自己实现 Agent Skills 语义 [Docs:openai-skills] [Docs:agentskills]。

## 代码质量

评分 3/5。

作为 non-software/hybrid repo，不能用普通库的 test coverage 评估。正面信号是目录结构清楚、系统/精选分层明确、`SKILL.md` frontmatter 与正文遵循 Agent Skills 思路，且部分 skills 附带 scripts/references 而非纯 prompt 文本 [GH:local-scan] [Docs:agentskills]。`security-threat-model` 是局部质量较好的样本，体现了较强的流程约束和证据要求；但不能据此外推全部 44 个 skills 的行为质量 [GH:security-threat-model]。

保守扣分：本轮未看到公开 CI workflows、release、schema validator 或行为评测；open PR=203 也说明公开贡献治理压力不小 [GH] [GH:local-scan]。因此 `code_quality` 只评价结构与局部技能质量，不能代表每个 skill 在真实任务中的正确性。

## 可扩展性

评分 4/5。

Agent Skills 格式天然可扩展：一个目录至少包含 `SKILL.md`，可附加 scripts、references、assets；Codex 支持 repo/user/admin/system 多 scope，并用 progressive disclosure 只在相关时加载完整 skill [Docs:openai-skills] [Docs:create-skill]。`skill-installer` 支持从 openai/skills curated list 或其他 GitHub repo/path 安装，也支持 private repo 凭据与 sparse checkout fallback [GH:skill-installer]。

限制在于跨平台：其他 agent 即使能读取 `SKILL.md`，也未必理解 Codex 的 system skill、installer、工具权限和插件分发语义。license 混合也会影响 fork 与再分发。

## 文档质量

评分 3/5。

仓库 README 短小，能说明 what/where/how install/license，但没有完整开发者手册、版本策略、schema 细节或安全模型 [GH:readme]。OpenAI 官方 docs 补足了 skill structure、progressive disclosure、scope locations、skill vs plugin、context budget 等概念；agentskills.io 提供开放标准背景 [Docs:openai-skills] [Docs:create-skill] [Docs:agentskills]。

因此如果只看 repo 内文档，质量中等；加上官方 docs，足以学习机制，但仍缺少对每个 curated skill 的系统性效果说明和迁移指南。

## 社区与成熟度

| 维度 | 评分 | 说明 |
|------|------|------|
| 社区活跃度 | 3/5 | 20902 stars、1401 forks、2026-05-29 有 push，OpenAI 官方项目；但 open PR=203、open issues=51，且官方目录未必等同开放社区治理成熟 [GH]。 |
| 成熟度 | 2/5 | 2025-11 创建、111 commits、0 releases；公开 catalog 与 Codex skills 生态仍很新，适合观察/试用，不适合作为稳定依赖 [GH]。 |

## 安全与风险

评分 2/5。

风险不是传统 Web 服务漏洞，而是**agent instruction supply chain**：skills 可能包含指令、脚本、references、installer 逻辑和外部下载路径。`skill-installer` 明确会访问 GitHub API、下载 public repos、在 auth/permission 失败时 fallback 到 git sparse checkout，并可能使用 `GITHUB_TOKEN`/`GH_TOKEN` 或既有 git credentials 访问 private repos [GH:skill-installer]。这对供应链和权限治理是实质攻击面。

`contributing.md` 提供了 security@openai.com 作为 vulnerability/responsible-AI 联系方式，但 GitHub API 显示 `isSecurityPolicyEnabled=false`；本轮元数据未显示公开 advisory / visible vulnerability alert，这受 GitHub 可见性、依赖图和公开 advisory 机制限制，不能证明 skills 安全 [GH] [GH:contributing]。安装前应逐 skill 检查 license、scripts、network behavior、tool permissions、prompt-injection 防护、来源 ref 固定、凭据读取、沙箱试跑和可回滚方案。

## 学习价值

高，尤其对 Hermes/Develata 的 skill 生态有四点启发：

1. **Description 是接口，不是注释**：Codex 初始只看 name/description/path，触发描述直接决定 skill 能否被正确加载 [Docs:openai-skills]。
2. **Installer 是治理入口**：真正可用的 skill 生态需要 listing、安装、版本/ref、私有源、失败回退和已安装检测，而不只是放一堆 Markdown [GH:skill-installer]。
3. **Per-skill license 必须显式化**：skill corpus 往往混合多来源内容；repo root license 不足以表达复用边界 [GH:license-scan]。
4. **技能质量应看任务契约**：像 `security-threat-model` 这样要求 evidence、assumptions、trust boundaries，比泛泛 prompt 更接近可审查 procedure [GH:security-threat-model]。
