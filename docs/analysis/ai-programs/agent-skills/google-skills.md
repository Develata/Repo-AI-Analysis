---
title: "Google Skills"
created: 2026-06-10
updated: 2026-06-10
type: repository-analysis
repo_url: "https://github.com/google/skills"
category: "ai-programs/agent-skills"
tags: [agent-skills, google, google-cloud, prompts, workflows, python]
previous_repo: ""
successor: ""
primary_language: "Python"
license: "Apache-2.0"
stars: 13113
forks: 1002
last_checked: 2026-06-10
last_verified: 2026-06-10
evidence: "GitHub REST metadata + README snapshot + shallow clone/local scan; not installed, built, or smoke-tested"
archived_reason: ""
docker_support: false
gpu_required: false
estimated_cpu: "主要是 skill/documentation/content repository；运行成本取决于宿主 agent harness"
estimated_memory: "仓库本身轻；实际成本由调用的 Google 产品/API 与 LLM 决定"
estimated_storage: "147 files；以 markdown/skill 内容为主"
status: active
sharing_candidate: false
ratings:
  capability: 3
  usability: 3
  performance: 3
  code_quality: 3
  documentation: 4
  community: 3
  maturity: 2
  extensibility: 3
  security: 3
  recommendation: 3
overall_score: 3.0
sources:
  - "[GH] https://github.com/google/skills — GitHub REST snapshot 2026-06-10: created_at=2026-03-31T19:02:20Z, pushed_at=2026-06-10T14:34:20Z, default_branch=main, commit=6560fd51227b1873c108e3e2b87120979bcc1443, stars=13113, forks=1002, open issues=18, open PRs=4, license=Apache-2.0, primary_language=Python, topics=google, googlecloud, skills"
  - "[GH:readme] Local README snapshot /opt/data/tmp/repo_wiki_trending_2026-06-10/skills/README.md checked 2026-06-10; analysis uses README-described capabilities only and did not install or run the project"
  - "[GH:local-scan] Shallow clone/local scan checked 2026-06-10: files=147, docs-ish files=118, test-ish files=2, root_files=['CONTRIBUTING.md', 'LICENSE', 'README.md'], root_dirs=['skills'], manifests=['CONTRIBUTING.md', 'LICENSE', 'README.md'], community_health=75, contributors_first_page=4"
  - "[GH:release] GitHub releases endpoint checked 2026-06-10: sampled latest tags=none returned"
  - "[GH:security-advisories] GitHub security-advisories endpoint checked 2026-06-10: returned 0; absence only means no advisory returned by this endpoint in this check, not proof of safety"
---

# Google Skills

> Google Skills 是 Google 产品与技术相关的 agent skills 集合，偏技能包/流程素材，而不是传统软件库。
>
> **状态**: `active` · **总分**: 3.0/5 · **推荐度**: 3/5
> **验证边界**: 本轮只做 GitHub metadata、README 与 shallow clone/local scan；未安装、未构建、未运行、未复现实测 benchmark。

## 一句话总结

Google Skills 是 Google 产品与技术相关的 agent skills 集合，偏技能包/流程素材，而不是传统软件库。 [GH:readme]

## 总体评价

它的价值主要是生态对照：Google 也在用 skills 作为 agent 能力封装单位。由于 created_at=2026-03-31、无 release、contributors_first_page=4，当前更适合观察和比较，不适合高推荐。 截至 2026-06-10 的 GitHub 快照显示：stars=13113、forks=1002、open issues=18、open PRs=4、最近 pushed_at=2026-06-10T14:34:20Z [GH]。

评分采取保守口径：README/docs claim 只证明项目设计目标和公开描述，本轮没有实测运行效果；local scan 只证明文件结构、语言、workflow/test/docs 线索，不证明业务正确性、安全边界或性能数字 [GH:readme] [GH:local-scan]。

## 推荐度：3/5

**角色定位**：适合研究 agent skills 生态、比较 OpenAI/Anthropic/Addy Osmani/Google skill 组织方式的人；不适合直接作为生产自动化依赖。推荐度 3/5：值得收录为生态样本，但采用价值需逐个 skill 验证。

**结论**：推荐度 3/5。可收录、可跟踪；是否采用取决于你的场景是否落在它的强项内，以及能否接受本轮未实测与项目自身边界。

## 优势

1. Google 官方组织下的 skills 集合，生态信号强。 [GH:readme] [GH:local-scan]
2. 仓库以文档/skill 内容为主，local scan 显示 docs-ish files=118。 [GH:readme] [GH:local-scan]
3. 与现有 agent-skills 类条目能形成横向比较。 [GH:readme] [GH:local-scan]

## 劣势

1. 项目非常年轻，created_at=2026-03-31。 [GH] [GH:readme]
2. 无 GitHub releases，contributors_first_page=4，成熟度有限。 [GH] [GH:readme]
3. skill 内容是否可跨 harness 复用，需要逐个验证；本轮未执行任何 skill。 [GH] [GH:readme]

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

## 个人主页 sharing 候选

可选。适合在 agent-skills 生态综述里作为 Google 分支样本，不宜单独强推。

---

## 它能做什么

提供 Google products and technologies 相关 agent skills；更像内容/流程集合，而非 runtime。 [GH:readme] [GH]

可见的仓库层面能力线索包括：primary_language=Python, files=147, docs-ish files=118, test-ish files=2, manifests 已记录在 source 层 [GH] [GH:local-scan]。

## 运行环境与资源占用

| 场景 | CPU | 内存 | 存储 | 说明 |
|------|-----|------|------|------|
| 最小 | 主要是 skill/documentation/content repository；运行成本取决于宿主 agent harness | 仓库本身轻；实际成本由调用的 Google 产品/API 与 LLM 决定 | 147 files；以 markdown/skill 内容为主 | 基于 README/依赖栈和仓库规模的启发式估计，非实测 |
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

作为内容库，结构可读；但无 release、test-ish files=2，不按软件库给高代码质量。 本分数是静态仓库质量判断，不等于功能正确性或覆盖率实测 [GH:local-scan]。

## 可扩展性

评分 3/5。

可 fork/复制/改写 skills；跨 harness 复用需要适配。 [GH:readme] [GH:local-scan]

## 文档质量

评分 4/5。

文档/skill 文件是主体，数量多；但缺少长期维护与运行验证。 [GH:readme] [GH:local-scan]

## 社区与成熟度

| 维度 | 评分 | 说明 |
|------|------|------|
| 社区活跃度 | 3/5 | stars=13113、forks=1002、open issues=18、open PRs=4 是点时可见度和维护负载信号，不单独证明质量 [GH] |
| 成熟度 | 2/5 | created_at=2026-03-31T19:02:20Z，sampled releases=none returned；成熟度按项目年龄、release/CI/test/docs 和稳定性声明综合判断 [GH] [GH:release] |

## 安全与风险

评分 3/5。

GitHub security-advisories endpoint 本轮返回 0 条；“无 advisory 返回”不是安全证明 [GH:security-advisories]。实际采用时至少检查：权限范围、账号/cookie/token 暴露面、依赖供应链、网络/文件访问边界、sandbox/隔离边界、license 与商业使用限制。

## 学习价值

学习价值在于观察 Google 如何组织 agent skills，以及它与现有 skills 生态的差异。 学习时应保持“README claim vs 可审计事实”的边界感：star 数、trending 热度和组织品牌都不是生产采用证明 [GH] [GH:readme] [GH:local-scan]。
