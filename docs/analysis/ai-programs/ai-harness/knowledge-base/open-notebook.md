---
title: "Open Notebook"
created: 2026-06-07
updated: 2026-07-22
type: repository-analysis
repo_url: "https://github.com/lfnovo/open-notebook"
category: "ai-programs/ai-harness/knowledge-base"
tags: [notebook, research-assistant, rag, self-hosted, notes, podcast]
previous_repo: ""
successor: ""
primary_language: "TypeScript / Python"
license: "MIT"
stars: 35832
forks: 4073
last_checked: 2026-07-22
last_verified: 2026-07-22
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
  - "[GH] https://github.com/lfnovo/open-notebook — GitHub REST/GraphQL queried 2026-07-22: created_at=2024-10-21, pushed_at=2026-07-21, default_branch=main, commit=ee0ea5ebaa8b29d29b68af753d2f0edce5acab4b, stars=35832, forks=4073, open issues=92, open PRs=6, primary_language=TypeScript, license=MIT, diskUsageKB=13917"
  - "[GH:readme] README.md at ee0ea5ebaa8b29d29b68af753d2f0edce5acab4b checked 2026-07-22; describes 18+ providers, Docker quick start, SurrealDB, multimodal content, podcasts, REST API, MCP integration, local-model paths and optional password protection; capabilities are documentation claims, not this audit's runtime results"
  - "[GH:local-scan] GitHub tree/API scan at ee0ea5ebaa8b29d29b68af753d2f0edce5acab4b on 2026-07-22: files=592, workflow files=4, test-ish files=59, docs/Markdown-ish files=106; languages TypeScript=1770737, Python=1141668, Shell=23138, Jinja=21587, Makefile=8163, Dockerfile=6706, CSS=6272, JavaScript=671; community profile health=100 with README, LICENSE, CONTRIBUTING, CODE_OF_CONDUCT, SECURITY and PR template surfaced"
  - "[GH:release] https://github.com/lfnovo/open-notebook/releases queried 2026-07-22; latest=v1.14.0 published 2026-07-21; v1.10.0-v1.14.0 added security hardening, Content Core 2.0, opt-in Docling/Crawl4AI, EPUB/Reddit extraction, provider expansion, configurable worker concurrency, stricter CI gates and release smoke/upgrade checks"
  - "[GH:security-advisories] https://api.github.com/repos/lfnovo/open-notebook/security-advisories?per_page=100 queried 2026-07-22; four published advisories: critical GHSA-f35w-wx37-26q7 (Jinja2 SSTI/RCE, <=1.8.3, patched 1.8.4), high GHSA-842v-h4cj-r646 (local file inclusion, <=1.8.3, patched 1.8.4), high GHSA-x4q2-89g5-594v (upload path traversal, <=1.8.3, patched 1.8.4), high GHSA-5wj9-f8q5-8f9c (SurrealDB injection, <=1.8.2, patched 1.8.3); historical fixed vulnerabilities, not evidence that current v1.14.0 is affected"
  - "[Local:manifest] pyproject.toml at ee0ea5ebaa8b29d29b68af753d2f0edce5acab4b checked 2026-07-22: version=1.14.0, Python >=3.11,<3.13, content-core>=2.0.4,<3, FastAPI/SurrealDB/Esperanto stack"
---

# Open Notebook

> Open Notebook 是 self-hosted、privacy-focused 的 NotebookLM 替代品，面向多模态资料组织、检索、对话和 podcast 生成。
>
> **状态**: `active` · **总分**: 3.7/5 · **推荐度**: 3/5
> **验证边界**: 本轮只做 GitHub metadata、README 与 tree/API scan；未安装、未构建、未运行、未复现实测 benchmark。

## 一句话总结

Open Notebook 是 self-hosted、privacy-focused 的 NotebookLM 替代品，面向多模态资料组织、检索、对话和 podcast 生成。 [GH:readme]

## 总体评价

README 声称支持 18+ AI providers、多模态资料、REST API、Docker 部署和多语言 UI。本轮未启动 Docker stack，也未验证私有/离线保证；privacy 仍取决于部署边界和所选模型 provider。v1.10-v1.14 连续加入安全加固、Content Core 2.0、opt-in Docling/Crawl4AI、更多 provider 与 release smoke/upgrade gates；截至 2026-07-22 的快照为 stars=35832、forks=4073、open issues=92、open PRs=6、latest release=v1.14.0 [GH][GH:release]。

评分采取保守口径：README/docs claim 只证明项目设计目标和公开描述，本轮没有实测运行效果；local scan 只证明文件结构、语言、workflow/test/docs 线索，不证明业务正确性、安全边界或性能数字 [GH:readme] [GH:local-scan]。

## 推荐度：3/5

> 2026-07 复核：v1.10-v1.14 明显改善安全与 release discipline，但仍未独立安装/smoke test；历史上有 4 个已修复的 critical/high advisory，适合试点而非无审计承载敏感资料。


**角色定位**：适合对 `ai-programs/ai-harness/knowledge-base` 方向已有明确需求、愿意按 README 与源码边界自行验证的人。

推荐理由：
- 能力面与主题匹配：README 列出 provider choice、多模态内容、podcast、全文/向量搜索、context chat、REST API；v1.13 加入 opt-in Docling OCR/layout 与 Crawl4AI JS rendering，v1.14 扩展 provider 和 worker-concurrency 控制 [GH:readme][GH:release]。
- 工程可审计性：仓库结构、语言分布、workflow/test/docs 数量已记录到 source 层，便于后续深挖 [GH:local-scan]。
- 风险前置：本条不把 star 数、官方品牌或 README benchmark 当作独立生产采用证据 [GH]。

**结论**：推荐度 3/5。可收录、可跟踪；是否采用取决于你的场景是否落在它的强项内，以及能否接受未实测/权限/运维边界。

## 优势

1. **定位清晰**：Open Notebook 是 self-hosted、privacy-focused 的 NotebookLM 替代品，面向多模态资料组织、检索、对话和 podcast 生成。 [GH:readme]
2. **工程信号可见**：当前 tree/API scan 记录 files=592、workflow_count=4、test-ish files=59、docs-ish files=106；community profile health=100 [GH:local-scan]。
3. **内容处理面扩展**：Content Core 2.0、opt-in Docling/Crawl4AI、EPUB/Reddit、pdfplumber 与 capability probe 扩大了 ingestion 范围，同时保持重 runtime 可选 [GH:release]。

## 劣势

1. **验证边界**：本轮没有安装、构建、运行、benchmark 或端到端 smoke test；README 能力均按“文档声称/仓库可见设计面”处理 [GH:readme]。
2. **维护/稳定性需看上下文**：open issues=92、open PRs=6 是点时快照；连续五个 minor release 含 API/部署行为变化，升级仍需读 release notes [GH][GH:release]。
3. **历史安全缺陷真实存在**：GitHub advisory endpoint 返回 4 个已修复 advisory，包括 Jinja2 SSTI/RCE、local file read、upload path traversal 和 SurrealDB injection；patched version metadata显示修复在 1.8.3/1.8.4，当前 v1.14.0 不应被表述为仍受影响，但攻击面不可轻描淡写 [GH:security-advisories]。

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

上述项目按 `ai-programs/ai-harness/knowledge-base` 或相邻生态做定位级对比，未在本条中按同一 10 维度框架重审；表格不构成优劣 benchmark。

---

## 它能做什么

README 列出 provider choice、多模态内容、podcast、全文/向量搜索、context chat、REST API；v1.13-v1.14 还加入 opt-in Docling OCR/layout、Crawl4AI rendering、EPUB/Reddit extraction、provider discovery 与更多 STT/TTS/provider 路径 [GH:readme][GH:release]。

可见的仓库层面能力线索包括：primary_language=TypeScript、files=592、docs-ish files=106、test-ish files=59、workflow files=4 [GH][GH:local-scan]。

## 运行环境与资源占用

| 场景 | CPU | 内存 | 存储 | 说明 |
|------|-----|------|------|------|
| 最小 | Docker/self-host stack；AI 推理成本取决于外部或本地模型 provider | SurrealDB + web/backend + embedding/vector workflows；建议数 GB 起 | 笔记、PDF、音视频和向量索引随资料库增长 | 启发式估计；未实测 |
| 重型 extraction | Docling/Crawl4AI 可选 runtime 增加 CPU/RAM/首次下载；worker 并发可调 | 单 GPU/local LLM 场景需限制 `OPEN_NOTEBOOK_WORKER_MAX_TASKS` | runtime 缓存在 `/app/data` volume | 官方 release notes 的部署边界，非本轮 benchmark [GH:release] |
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

依据：当前 tree/API scan 为 workflow_count=4、test-ish files=59、docs-ish files=106；v1.12 声称把 ruff/ESLint/frontend build/mypy 设为 PR gates，v1.11-v1.14 release process 还包含 fresh-install、upgrade 和端到端检查 [GH:local-scan][GH:release]。这些是工程信号，不等于本轮亲自执行过测试。

## 可扩展性

评分 4/5。

依据：README 暴露的 API/plugin/module/model/config/workflow 扩展面，以及仓库结构是否支持二次开发 [GH:readme] [GH:local-scan]。没有运行扩展示例，因此只评价设计面和可见结构。

## 文档质量

评分 5/5。

README 与 106 个 docs/Markdown-ish 文件覆盖 quick start、deployment、providers、security、MCP、API 和 developer docs；documentation=5 反映资料完整度，不代表每条部署路径都已实测 [GH:readme][GH:local-scan]。

## 社区与成熟度

| 维度 | 评分 | 说明 |
|------|------|------|
| 社区活跃度 | 4/5 | stars=35832、forks=4073、open issues=92、open PRs=6 是点时可见度和维护负载信号，不单独证明质量 [GH] |
| 成熟度 | 3/5 | 创建于 2024-10；latest=v1.14.0，近月 release/测试纪律明显增强，但 Content Core 2.0、provider/API 与部署路径仍在快速演进 [GH][GH:release] |

## 安全与风险

评分 3/5。

GitHub repository advisories endpoint 本轮返回 4 个历史已修复漏洞：1 个 critical SSTI/RCE、3 个 high（local file inclusion、upload path traversal、SurrealDB injection）；API metadata 给出的 patched versions 为 1.8.3/1.8.4，不能据此声称当前 v1.14.0 仍受影响 [GH:security-advisories]。

v1.10-v1.14 又补充 BadHost dependency fix、SurrealQL/Jinja/SSRF/CORS/upload/error hardening、DNS-pinned outbound requests、依赖告警清理与 regression tests [GH:release]。这说明维护者响应积极，也说明项目天然处理不可信文档、URL、provider endpoint、API key 与数据库查询，攻击面较宽。实际采用仍应使用当前版本、强 encryption key/DB credentials、localhost/reverse-proxy 边界，并独立验证 provider 数据流与备份权限；故 security 维持 3/5，而非因“self-hosted”自动上调。

## 学习价值

学习价值主要在三个层面：一是理解 `ai-programs/ai-harness/knowledge-base` 这一类项目当前如何组织能力；二是用 README claim 与 local scan 对照，训练“文档声称 vs 可审计事实”的边界感；三是把它与同类项目做定位级 comparison，而不是被 star 数或品牌牵引 [GH] [GH:readme] [GH:local-scan]。
