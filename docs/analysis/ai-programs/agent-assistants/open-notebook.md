---
title: "Open Notebook"
created: 2026-06-07
updated: 2026-06-07
type: repository-analysis
repo_url: "https://github.com/lfnovo/open-notebook"
category: "ai-programs/agent-assistants"
tags: [notebook, research-assistant, rag, self-hosted, notes, podcast]
previous_repo: ""
successor: ""
primary_language: "TypeScript / Python"
license: "MIT"
stars: 26551
forks: 3035
last_checked: 2026-06-07
last_verified: 2026-06-07
evidence: "GitHub REST/GraphQL metadata + README snapshot + GitHub tree/local-style API scan; not installed or smoke-tested"
archived_reason: ""
docker_support: true
gpu_required: false
estimated_cpu: "Docker/self-host stack；AI 推理成本取决于外部或本地模型 provider"
estimated_memory: "SurrealDB + web/backend + embedding/vector workflows；建议数 GB 起"
estimated_storage: "笔记、PDF、音视频和向量索引随资料库增长"
status: active
ratings:
  capability: 4
  usability: 4
  performance: 3
  code_quality: 4
  documentation: 5
  community: 4
  maturity: 3
  extensibility: 4
  security: 3
  recommendation: 3
overall_score: 3.7
sources:
  - "[GH] https://github.com/lfnovo/open-notebook — GitHub REST/GraphQL snapshot 2026-06-07: created_at=2024-10-21T17:58:46Z, pushed_at=2026-06-04T17:07:02Z, default_branch=main, commit=327d766e2ad2c86afe39eca5473b1441c6b2d749, stars=26551, forks=3035, open issues=128, open PRs=22, commits=739, license=MIT, primary_language=TypeScript, diskUsageKB=9444"
  - "[GH:readme] Local README snapshot /opt/data/tmp/repo_wiki_trending_20260607_remaining/lfnovo-open-notebook/README.md checked 2026-06-07; total_lines=362; analysis uses README-described capabilities only and did not run the project"
  - "[GH:local-scan] GitHub tree/API scan checked 2026-06-07: files=469, languages=TypeScript=1550285, Python=806358, Jinja=20602, Makefile=7120, CSS=6035, Dockerfile=4980, workflow_count=3, workflows_sample=.github/workflows/build-and-release.yml, .github/workflows/build-dev.yml, .github/workflows/test.yml, test-ish files=22, docs-ish files=73, community_files={'code_of_conduct': None, 'code_of_conduct_file': None, 'contributing': 'https://api.github.com/repos/lfnovo/open-notebook/contents/CONTRIBUTING.md', 'issue_template': None, 'pull_request_template': 'https://api.github.com/repos/lfnovo/open-notebook/contents/.github/pull_request_template.md', 'license': 'https://api.github.com/licenses/mit', 'readme': 'https://api.github.com/repos/lfnovo/open-notebook/contents/README.md'}"
  - "[GH:release] GitHub releases endpoint checked 2026-06-07: sampled latest tags=v1.9.0, v1.8.5, v1.8.4, v1.8.3, v1.8.2; sample_count=10"
  - "[GH:security-advisories] GitHub security-advisories endpoint checked 2026-06-07: returned 4; absence only means no advisory returned by this endpoint in this check, not proof of safety"
---

# Open Notebook

> Open Notebook 是 self-hosted、privacy-focused 的 NotebookLM 替代品，面向多模态资料组织、检索、对话和 podcast 生成。
>
> **状态**: `active` · **总分**: 3.7/5 · **推荐度**: 3/5
> **验证边界**: 本轮只做 GitHub metadata、README 与 tree/API scan；未安装、未构建、未运行、未复现实测 benchmark。

## 一句话总结

Open Notebook 是 self-hosted、privacy-focused 的 NotebookLM 替代品，面向多模态资料组织、检索、对话和 podcast 生成。 [GH:readme]

## 总体评价

README 声称支持 18+ AI providers、多模态资料、REST API、Docker 部署和多语言 UI。本轮未启动 Docker stack，也未验证私有/离线保证；privacy 依赖本地部署和模型 provider 选择。 截至 2026-06-07 的 GitHub 快照显示：stars=26551、forks=3035、open issues=128、open PRs=22、最近采样 release=v1.9.0, v1.8.5, v1.8.4 [GH] [GH:release]。

评分采取保守口径：README/docs claim 只证明项目设计目标和公开描述，本轮没有实测运行效果；local scan 只证明文件结构、语言、workflow/test/docs 线索，不证明业务正确性、安全边界或性能数字 [GH:readme] [GH:local-scan]。

## 推荐度：3/5

> 2026-06 推荐度重校准：未安装或 smoke test，security=3，文档/模型/账号面较宽；适合跟踪试点，不宜 4/5 采用推荐。


**角色定位**：适合对 `ai-programs/agent-assistants` 方向已有明确需求、愿意按 README 与源码边界自行验证的人。

推荐理由：
- 能力面与主题匹配：README 列出 provider choice、多模态内容、podcast、全文/向量搜索、context chat、REST API；local scan 显示 Dockerfile/compose、docs、tests 和 release workflow。 [GH:readme]。
- 工程可审计性：仓库结构、语言分布、workflow/test/docs 数量已记录到 source 层，便于后续深挖 [GH:local-scan]。
- 风险前置：本条不把 star 数、官方品牌或 README benchmark 当作独立生产采用证据 [GH]。

**结论**：推荐度 3/5。可收录、可跟踪；是否采用取决于你的场景是否落在它的强项内，以及能否接受未实测/权限/运维边界。

## 优势

1. **定位清晰**：Open Notebook 是 self-hosted、privacy-focused 的 NotebookLM 替代品，面向多模态资料组织、检索、对话和 podcast 生成。 [GH:readme]
2. **工程信号可见**：本轮 tree/API scan 记录 files=469、workflow_count=3、test-ish files=22、docs-ish files=73 [GH:local-scan]。
3. **社区/关注度信号强**：截至 2026-06-07 快照 stars=26551、forks=3035；这只说明可见度，不直接证明质量或生产采用 [GH]。

## 劣势

1. **验证边界**：本轮没有安装、构建、运行、benchmark 或端到端 smoke test；README 能力均按“文档声称/仓库可见设计面”处理 [GH:readme]。
2. **维护/稳定性需看上下文**：open issues=128、open PRs=22 是点时快照；大项目/语言核心仓库不能简单等同 bug 密度 [GH]。
3. **安全结论保守**：security-advisories endpoint 没返回的项目也不能视作安全；高权限、模型、浏览器、账号或文件处理场景仍需独立 threat model [GH:security-advisories]。

---

## 适合什么场景

- 个人/小团队自托管研究资料库
- 需要 NotebookLM-like workflow 但希望多 provider/可扩展
- 把 PDF、网页、音视频统一组织后做上下文对话

## 不适合什么场景

- 完全零运维用户
- 强合规团队未经安全审计直接放敏感资料
- 只需要轻量 Markdown 笔记而不用 AI/RAG 的场景

## 与类似项目对比

| 项目 | 定位 | 相对本项目 |
|------|------|-----------|
| personal-ai-infrastructure | 个人 AI 基础设施/assistant stack | Open Notebook 更聚焦 research notebook 和资料库；PAI 更偏个人 AI 操作系统 |
| ragflow | RAG workflow/platform | RAGFlow 更偏企业文档 RAG pipeline；Open Notebook 更偏个人 NotebookLM 替代 |
| open-webui | 多模型聊天平台 | Open WebUI 更偏 chat UI；Open Notebook 更偏资料组织和知识工作 |

上述项目按 `ai-programs/agent-assistants` 或相邻生态做定位级对比，未在本条中按同一 10 维度框架重审；表格不构成优劣 benchmark。

---

## 它能做什么

README 列出 provider choice、多模态内容、podcast、全文/向量搜索、context chat、REST API；local scan 显示 Dockerfile/compose、docs、tests 和 release workflow。 [GH:readme]

可见的仓库层面能力线索包括：primary_language=TypeScript、topics=assistant, learning, note-taking, notebook, notes-app, self-learning、files=469、docs-ish files=73、test-ish files=22 [GH] [GH:local-scan]。

## 运行环境与资源占用

| 场景 | CPU | 内存 | 存储 | 说明 |
|------|-----|------|------|------|
| 最小 | Docker/self-host stack；AI 推理成本取决于外部或本地模型 provider | SurrealDB + web/backend + embedding/vector workflows；建议数 GB 起 | 笔记、PDF、音视频和向量索引随资料库增长 | 基于 README/依赖栈和仓库规模的启发式估计，非实测 |
| 推荐 | 按生产输入规模预留余量 | 按模型/浏览器/数据库/worker 数调整 | 数据、缓存、模型权重或构建产物另计 | 本轮未跑 benchmark |

- **运行时**：以 README/项目类型为准；本轮未实际启动。
- **操作系统**：未逐平台验证；以官方 README/文档声明为边界。
- **Docker**：frontmatter `docker_support=true` 只表示 README/local scan 有足够线索支持或不支持主路径，未 build image。
- **GPU**：frontmatter `gpu_required=false`；模型类项目即使 CPU 可跑，也可能需要 GPU 才有实用价值。
- **外部依赖**：依赖、账号、模型权重、数据库、浏览器、代理或云服务需求需按实际安装路径复核。

## 上手体验

评分 4/5。

依据：README 是否给出 quick start、安装/配置路径是否清晰，以及本轮是否看到 release、docs 和 workflow 线索 [GH:readme] [GH:release] [GH:local-scan]。未实装，因此不把“README 写得容易”当作真实零摩擦体验。

## 代码质量

评分 4/5。

依据：语言/文件结构、workflow_count=3、test-ish files=22、docs-ish files=73、release 信号和项目年龄 [GH:local-scan] [GH:release]。这个分数是静态仓库质量判断，不等于功能正确性或覆盖率实测。

## 可扩展性

评分 4/5。

依据：README 暴露的 API/plugin/module/model/config/workflow 扩展面，以及仓库结构是否支持二次开发 [GH:readme] [GH:local-scan]。没有运行扩展示例，因此只评价设计面和可见结构。

## 文档质量

评分 5/5。

README/docs-ish files=73；README 对核心定位、安装或功能说明的清晰度支撑该评分 [GH:readme] [GH:local-scan]。若项目另有外部文档，本轮未系统抓取完整站点，后续深审可补。

## 社区与成熟度

| 维度 | 评分 | 说明 |
|------|------|------|
| 社区活跃度 | 4/5 | stars=26551、forks=3035、open issues=128、open PRs=22 是点时可见度和维护负载信号，不单独证明质量 [GH] |
| 成熟度 | 3/5 | created_at=2024-10-21T17:58:46Z，sampled releases=v1.9.0, v1.8.5, v1.8.4, v1.8.3, v1.8.2；成熟度按项目年龄、release/CI/test/docs 和稳定性声明综合判断 [GH] [GH:release] |

## 安全与风险

评分 3/5。

GitHub security-advisories endpoint 本轮返回结果已记录，但“无 advisory 返回”不是安全证明 [GH:security-advisories]。实际采用时至少检查：权限范围、账号/cookie/token 暴露面、依赖供应链、模型/文档数据上传路径、sandbox/隔离边界、license 与商业使用限制。

## 学习价值

学习价值主要在三个层面：一是理解 `ai-programs/agent-assistants` 这一类项目当前如何组织能力；二是用 README claim 与 local scan 对照，训练“文档声称 vs 可审计事实”的边界感；三是把它与同类项目做定位级 comparison，而不是被 star 数或品牌牵引 [GH] [GH:readme] [GH:local-scan]。
