---
title: "Google Skills"
created: 2026-06-10
updated: 2026-07-23
type: repository-analysis
repo_url: "https://github.com/google/skills"
category: "ai-programs/ai-harness/skills"
tags: [agent-skills, google, google-cloud, prompts, workflows, python]
previous_repo: ""
successor: ""
primary_language: "Python"
license: "Apache-2.0"
stars: 15033
forks: 1151
last_checked: 2026-07-23
last_verified: 2026-07-23
evidence: "GitHub REST/GraphQL metadata + current README/CONTRIBUTING + compare/tree/community/security API scan; no skill was installed, invoked, or evaluated"
archived_reason: ""
docker_support: false
gpu_required: false
estimated_cpu: "主要是 skill/documentation/content repository；运行成本取决于宿主 agent harness"
estimated_memory: "仓库本身轻；实际成本由调用的 Google 产品/API 与 LLM 决定"
estimated_storage: "376 tracked files in GitHub tree；以 markdown/skill 内容为主"
status: active
ratings:
  capability: 4
  usability: 3
  performance: 3
  code_quality: 3
  documentation: 4
  community: 3
  maturity: 2
  extensibility: 3
  security: 3
  recommendation: 3
overall_score: 3.1
sources:
  - "[GH] https://github.com/google/skills — authenticated GitHub REST/GraphQL snapshot 2026-07-23: created_at=2026-03-31T19:02:20Z, pushed_at=2026-07-22T17:43:17Z, default_branch=main, commit=24de7ebf0a3a0dd9774f65d322fd55ce7ca09e32, stars=15033, forks=1151, open issues=17, open PRs=15, license=Apache-2.0, primary_language=Python, sizeKB=1257"
  - "[GH:readme] https://github.com/google/skills/blob/24de7ebf0a3a0dd9774f65d322fd55ce7ca09e32/README.md — inspected 2026-07-23: positions the repo as reusable agent skills for Google products/technologies; documents npx skills add google/skills with selective skill installation; no skill was installed or run"
  - "[GH:compare] https://github.com/google/skills/compare/6560fd51227b1873c108e3e2b87120979bcc1443...24de7ebf0a3a0dd9774f65d322fd55ce7ca09e32 — GitHub compare API checked 2026-07-23: ahead_by=81; API returned the first 300 changed-file records, so the file list is incomplete; the current README and tree show material expansion to 83 skills"
  - "[GH:local-scan] GitHub tree/languages/community API scan at 24de7ebf0a3a0dd9774f65d322fd55ce7ca09e32 on 2026-07-23: files=376, SKILL.md files=83, docs-ish files=303, test-ish files=4, workflow_count=0, community_health=75, contributors endpoint returned 5 entries; static content count only, not skill correctness evaluation"
  - "[GH:contributing] https://github.com/google/skills/blob/24de7ebf0a3a0dd9774f65d322fd55ce7ca09e32/CONTRIBUTING.md — inspected 2026-07-23: external pull requests/code contributions are not currently accepted, though issues and feature requests are welcomed"
  - "[GH:release] GitHub releases API checked 2026-07-23: returned no releases"
  - "[GH:security-advisories] GitHub repository security-advisories API checked 2026-07-23: returned []; no published advisory found in this check is not proof that individual skill instructions or their API permission flows are safe"
---

# Google Skills

> Google Skills 是 Google 产品与技术相关的 agent skills 集合，偏技能包/流程素材，而不是传统软件库。
>
> **状态**: `active` · **总分**: 3.1/5 · **推荐度**: 3/5
> **验证边界**: 本轮只做 GitHub metadata、README/CONTRIBUTING 与 API compare/tree/community scan；未安装、未构建、未运行、未复现实测 benchmark。

## 一句话总结

Google Skills 是 Google 产品与技术相关的 agent skills 集合，偏技能包/流程素材，而不是传统软件库。 [GH:readme]

## 总体评价

它已经不只是小型生态样本：当前 tree 有 83 个 `SKILL.md`，覆盖 Google Cloud、Ads 与 Analytics 等多个产品面，旧核验点后 ahead_by=81 [GH:readme] [GH:local-scan] [GH:compare]。因此 capability 从 3 升到 4；但仓库仍无 releases、未接受外部代码贡献，本轮也没有执行任何 skill，采用推荐保持 3 [GH:release] [GH:contributing]。

评分采取保守口径：README/docs claim 只证明项目设计目标和公开描述，本轮没有实测运行效果；local scan 只证明文件结构、语言、workflow/test/docs 线索，不证明业务正确性、安全边界或性能数字 [GH:readme] [GH:local-scan]。

## 推荐度：3/5

**角色定位**：适合研究 agent skills 生态、比较 OpenAI/Anthropic/Addy Osmani/Google skill 组织方式的人；不适合直接作为生产自动化依赖。推荐度 3/5：值得收录为生态样本，但采用价值需逐个 skill 验证。

**结论**：推荐度 3/5。可收录、可跟踪；是否采用取决于你的场景是否落在它的强项内，以及能否接受本轮未实测与项目自身边界。

## 优势

1. **覆盖面已显著扩张**：当前 tree 有 83 个 `SKILL.md`；README 明列 Google Cloud 的 AI/ML、GKE、data/analytics、security，以及 Ads/Analytics 等多组主题 [GH:readme] [GH:local-scan]。
2. **安装入口清楚**：README 提供 `npx skills add google/skills`，并允许从安装流程中选择具体 skills [GH:readme]。
3. **内容结构统一**：376 个文件中 docs-ish=303，skills 以目录和 SKILL.md 为主要分发面 [GH:local-scan]。

## 劣势

1. **项目仍年轻且无 release contract**：created_at=2026-03-31，GitHub releases endpoint 仍为空 [GH] [GH:release]。
2. **外部贡献关闭**：CONTRIBUTING 明说目前不接受 external contributions；5 位 contributor 与高 star 不能等同开放社区治理 [GH:contributing] [GH:local-scan]。
3. **广度不等于可靠性**：83 个 skill 的指令正确性、Google API 漂移、权限最小化与跨 harness 可移植性均需逐个验证；本轮未执行任何 skill [GH:local-scan] [GH:readme]。

---

## 适合什么场景

- 研究 agent skills 作为能力封装单位。
- 给 Hermes/Claude/OpenAI skills 生态做对照样本。
- 寻找 Google 产品相关自动化流程灵感。

## 不适合什么场景

- 需要可直接 pip/npm 安装的软件库。
- 需要稳定 API/semver/release 的生产依赖。
- 不了解目标 agent harness 差异而直接照搬。

## 与类似项目对比

| 项目 | 定位 | 相对本项目 |
|------|------|-----------|
| addyosmani/agent-skills | 工程生产级 AI coding agent skills | addyosmani 更偏软件工程流程；Google Skills 更偏 Google 产品/技术生态。 |
| anthropic/skills | Anthropic skill 生态参照项 | Anthropic 更靠近 Claude 产品形态；Google Skills 是 Google 技术栈补充。 |
| phuryn/pm-skills | PM/strategy/growth skills marketplace | pm-skills 偏产品管理场景；Google Skills 偏 Google services/technologies。 |

上述项目按相邻生态做定位级对比，未在本条中按同一 10 维度框架重审；表格不构成优劣 benchmark。

---

## 它能做什么

提供 Google products and technologies 相关 agent skills；当前 README 明列 cloud infrastructure、data/analytics、AI/ML、security、Ads/Analytics 与开发工具等面向，仍是内容/流程集合而非 runtime [GH:readme] [GH:compare]。

可见的仓库层面能力线索包括：primary_language=Python、files=376、SKILL.md files=83、docs-ish files=303、test-ish files=4、workflow_count=0 [GH] [GH:local-scan]。

## 运行环境与资源占用

| 场景 | CPU | 内存 | 存储 | 说明 |
|------|-----|------|------|------|
| 最小 | 主要是 skill/documentation/content repository；运行成本取决于宿主 agent harness | 仓库本身轻；实际成本由调用的 Google 产品/API 与 LLM 决定 | 376 files；以 markdown/skill 内容为主 | 基于 tree/README 的启发式估计，非实测 |
| 推荐 | 按真实输入规模预留余量 | 按数据、索引、模型或 VM/container workload 调整 | 数据、缓存、构建产物或用户库另计 | 本轮未跑 benchmark |

- **运行时**：仓库本身不需要 GPU/Docker；运行成本由具体 skill 绑定的 agent、API 和权限决定。 [GH:readme]
- **操作系统**：未逐平台验证；以官方 README/文档声明为边界。
- **Docker**：frontmatter `docker_support=false` 表示本轮未发现 Docker 作为主路径的支持线索；未 build image。
- **GPU**：frontmatter `gpu_required=false`；即便项目本身不要求 GPU，下游模型/数据处理仍可能需要 GPU。
- **外部依赖**：依赖、账号、模型权重、数据库、浏览器、代理或云服务需求需按实际安装路径复核。

## 上手体验

评分 3/5。

README 能让读者理解定位，但真正获得价值需要把 skill 放进具体 agent harness 试跑。 依据：README 是否给出 quick start、安装/配置路径是否清晰，以及本轮是否看到 release、docs 和 workflow 线索 [GH:readme] [GH:release] [GH:local-scan]。

## 代码质量

评分 3/5。

作为内容库，结构可读；但无 releases/workflows、test-ish files=4，不能用传统 CI/测试信号为 prompt/procedure 正确性背书。此处按 non-software content quality 评价，不等于 skill 运行正确性 [GH:local-scan] [GH:release]。

## 可扩展性

评分 3/5。

可通过 `npx skills add`、clone、复制或 fork 选择性引入；但外部 PR 当前不接受，跨 harness 的 tool naming、auth 与环境假设仍需适配 [GH:readme] [GH:contributing]。

## 文档质量

评分 4/5。

文档/skill 文件是主体，README 给出安装与分类导航，83 个 skill 带各自过程说明；但缺少 release contract 和跨技能运行评测，故保持 4 而非 5 [GH:readme] [GH:local-scan] [GH:release]。

## 社区与成熟度

| 维度 | 评分 | 说明 |
|------|------|------|
| 社区活跃度 | 3/5 | stars=15033、forks=1151、open issues=17、open PRs=15 是点时可见度；contributors endpoint 返回 5 条且 external code contributions 不接受，故不因热度升分 [GH] [GH:local-scan] [GH:contributing] |
| 成熟度 | 2/5 | 项目创建于 2026-03，虽然内容已扩到 83 skills，但仍无 releases/workflows 或长期兼容记录 [GH] [GH:release] [GH:local-scan] |

## 安全与风险

评分 3/5。

GitHub repository security-advisories endpoint 本轮返回空；这只表示未查到 published repository advisory [GH:security-advisories]。skill 是会引导 agent 调 Google Cloud、Ads、Analytics 等 API 的程序性内容：逐个采用前仍应审计 scope、service account、secret handling、写操作确认、网络/文件访问与 prompt-injection boundary；不要因为 Google 组织名或 Apache-2.0 就批量信任全部技能。

## 学习价值

学习价值在于观察 Google 如何组织 agent skills，以及它与现有 skills 生态的差异。 学习时应保持“README claim vs 可审计事实”的边界感：star 数、trending 热度和组织品牌都不是生产采用证明 [GH] [GH:readme] [GH:local-scan]。
