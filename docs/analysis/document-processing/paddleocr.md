---
title: "PaddleOCR"
created: 2026-06-07
updated: 2026-06-07
type: repository-analysis
repo_url: "https://github.com/PaddlePaddle/PaddleOCR"
category: "document-processing"
tags: [ocr, document-ai, pdf, markdown, rag, python]
previous_repo: ""
successor: ""
primary_language: "Python / C++ / TypeScript"
license: "Apache-2.0"
stars: 80910
forks: 10654
last_checked: 2026-06-07
last_verified: 2026-06-07
evidence: "GitHub REST/GraphQL metadata + README snapshot + GitHub tree/local-style API scan; not installed or smoke-tested"
archived_reason: ""
docker_support: true
gpu_required: false
estimated_cpu: "CPU/GPU/XPU/NPU 均有说明；大模型/批量文档更适合 GPU/加速器"
estimated_memory: "OCR pipeline 和 VLM 模型随输入分辨率/模型尺寸增长；轻量模型可边缘部署"
estimated_storage: "GitHub diskUsage≈1.9 GB；模型权重、缓存、文档输出另计"
status: active
ratings:
  capability: 5
  usability: 4
  performance: 3
  code_quality: 4
  documentation: 5
  community: 5
  maturity: 4
  extensibility: 4
  security: 3
  recommendation: 5
overall_score: 4.2
sources:
  - "[GH] https://github.com/PaddlePaddle/PaddleOCR — GitHub REST/GraphQL snapshot 2026-06-07: created_at=2020-05-08T10:38:16Z, pushed_at=2026-06-04T18:21:43Z, default_branch=main, commit=1e5aa0ad31bc8a82cd8e1daef7adc24e577d2534, stars=80910, forks=10654, open issues=141, open PRs=64, commits=6906, license=Apache-2.0, primary_language=Python, diskUsageKB=1928460"
  - "[GH:readme] Local README snapshot /opt/data/tmp/repo_wiki_trending_20260607_remaining/paddlepaddle-paddleocr/README.md checked 2026-06-07; total_lines=302; analysis uses README-described capabilities only and did not run the project"
  - "[GH:local-scan] GitHub tree/API scan checked 2026-06-07: files=2314, languages=Python=3918047, C++=677366, TypeScript=346259, Shell=262500, Java=55080, Go=52716, workflow_count=9, workflows_sample=.github/workflows/build_publish_develop_docs.yml, .github/workflows/build_publish_release_docs.yml, .github/workflows/close_inactive_issues.yml, .github/workflows/codestyle.yml, .github/workflows/docs_anchor_check.yml, .github/workflows/link_check.yml, .github/workflows/python_publish.yml, .github/workflows/test_gpu.yml, test-ish files=100, docs-ish files=771, community_files={'code_of_conduct': None, 'code_of_conduct_file': None, 'contributing': None, 'issue_template': None, 'pull_request_template': None, 'license': 'https://api.github.com/licenses/apache-2.0', 'readme': 'https://api.github.com/repos/PaddlePaddle/PaddleOCR/contents/README.md'}"
  - "[GH:release] GitHub releases endpoint checked 2026-06-07: sampled latest tags=v3.6.0, v3.5.0, v3.4.1, v3.4.0, v3.3.3; sample_count=10"
  - "[GH:security-advisories] GitHub security-advisories endpoint checked 2026-06-07: returned 0; absence only means no advisory returned by this endpoint in this check, not proof of safety"
---

# PaddleOCR

> PaddleOCR 是面向 OCR、PDF/图片结构化解析和 LLM-ready Markdown/JSON 输出的 Document AI toolkit，覆盖 100+ 语言和 PaddleOCR-VL/PP-Structure 系列。
>
> **状态**: `active` · **总分**: 4.2/5 · **推荐度**: 5/5
> **验证边界**: 本轮只做 GitHub metadata、README 与 tree/API scan；未安装、未构建、未运行、未复现实测 benchmark。

## 一句话总结

PaddleOCR 是面向 OCR、PDF/图片结构化解析和 LLM-ready Markdown/JSON 输出的 Document AI toolkit，覆盖 100+ 语言和 PaddleOCR-VL/PP-Structure 系列。 [GH:readme]

## 总体评价

README 的功能与 benchmark claim 很强：PaddleOCR-VL、PP-StructureV3、多语言识别、PDF/Office 到 Markdown/JSON/DOCX。本轮未复现实测 benchmark；性能分数因此不按 README 的 SOTA 声称直接给满。 截至 2026-06-07 的 GitHub 快照显示：stars=80910、forks=10654、open issues=141、open PRs=64、最近采样 release=v3.6.0, v3.5.0, v3.4.1 [GH] [GH:release]。

评分采取保守口径：README/docs claim 只证明项目设计目标和公开描述，本轮没有实测运行效果；local scan 只证明文件结构、语言、workflow/test/docs 线索，不证明业务正确性、安全边界或性能数字 [GH:readme] [GH:local-scan]。

## 推荐度：5/5

**角色定位**：适合对 `document-processing` 方向已有明确需求、愿意按 README 与源码边界自行验证的人。

推荐理由：
- 能力面与主题匹配：README 声称 PP-OCRv5、PaddleOCR-VL、PP-StructureV3、100+ languages、Markdown/JSON/DOCX 等；local scan 显示 docs_count 771、workflows 9、tests_count 100。 [GH:readme]。
- 工程可审计性：仓库结构、语言分布、workflow/test/docs 数量已记录到 source 层，便于后续深挖 [GH:local-scan]。
- 风险前置：本条不把 star 数、官方品牌或 README benchmark 当作独立生产采用证据 [GH]。

**结论**：推荐度 5/5。可收录、可跟踪；是否采用取决于你的场景是否落在它的强项内，以及能否接受未实测/权限/运维边界。

## 优势

1. **定位清晰**：PaddleOCR 是面向 OCR、PDF/图片结构化解析和 LLM-ready Markdown/JSON 输出的 Document AI toolkit，覆盖 100+ 语言和 PaddleOCR-VL/PP-Structure 系列。 [GH:readme]
2. **工程信号可见**：本轮 tree/API scan 记录 files=2314、workflow_count=9、test-ish files=100、docs-ish files=771 [GH:local-scan]。
3. **社区/关注度信号强**：截至 2026-06-07 快照 stars=80910、forks=10654；这只说明可见度，不直接证明质量或生产采用 [GH]。

## 劣势

1. **验证边界**：本轮没有安装、构建、运行、benchmark 或端到端 smoke test；README 能力均按“文档声称/仓库可见设计面”处理 [GH:readme]。
2. **维护/稳定性需看上下文**：open issues=141、open PRs=64 是点时快照；大项目/语言核心仓库不能简单等同 bug 密度 [GH]。
3. **安全结论保守**：security-advisories endpoint 没返回的项目也不能视作安全；高权限、模型、浏览器、账号或文件处理场景仍需独立 threat model [GH:security-advisories]。

---

## 适合什么场景

- OCR、文档解析、RAG 文档预处理
- 中文/多语言场景的 PDF/图片结构化
- 需要开源模型和多硬件部署路径的团队

## 不适合什么场景

- 只需轻量 one-off OCR 的极简脚本
- 无法接受大仓库/模型权重/深度学习依赖的环境
- 强合规场景未经模型和数据流审计直接处理敏感文档

## 与类似项目对比

| 项目 | 定位 | 相对本项目 |
|------|------|-----------|
| docling | 文档解析/转换 pipeline | Docling 更偏文档格式转换和结构解析；PaddleOCR OCR/视觉模型能力更重 |
| mineru | PDF/document extraction for research/RAG | 同属文档处理；PaddleOCR 更偏 OCR/model toolkit |
| marker | PDF/文档转 Markdown | Marker 更轻，PaddleOCR 更大而多模型/多语言 |

上述项目按 `document-processing` 或相邻生态做定位级对比，未在本条中按同一 10 维度框架重审；表格不构成优劣 benchmark。

---

## 它能做什么

README 声称 PP-OCRv5、PaddleOCR-VL、PP-StructureV3、100+ languages、Markdown/JSON/DOCX 等；local scan 显示 docs_count 771、workflows 9、tests_count 100。 [GH:readme]

可见的仓库层面能力线索包括：primary_language=Python、topics=ocr, chineseocr, pdf2markdown, pp-ocr, pp-structure, document-parsing, document-translation, kie, ai4science, pdf-extractor-rag, pdf-parser, rag, paddleocr-vl、files=2314、docs-ish files=771、test-ish files=100 [GH] [GH:local-scan]。

## 运行环境与资源占用

| 场景 | CPU | 内存 | 存储 | 说明 |
|------|-----|------|------|------|
| 最小 | CPU/GPU/XPU/NPU 均有说明；大模型/批量文档更适合 GPU/加速器 | OCR pipeline 和 VLM 模型随输入分辨率/模型尺寸增长；轻量模型可边缘部署 | GitHub diskUsage≈1.9 GB；模型权重、缓存、文档输出另计 | 基于 README/依赖栈和仓库规模的启发式估计，非实测 |
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

依据：语言/文件结构、workflow_count=9、test-ish files=100、docs-ish files=771、release 信号和项目年龄 [GH:local-scan] [GH:release]。这个分数是静态仓库质量判断，不等于功能正确性或覆盖率实测。

## 可扩展性

评分 4/5。

依据：README 暴露的 API/plugin/module/model/config/workflow 扩展面，以及仓库结构是否支持二次开发 [GH:readme] [GH:local-scan]。没有运行扩展示例，因此只评价设计面和可见结构。

## 文档质量

评分 5/5。

README/docs-ish files=771；README 对核心定位、安装或功能说明的清晰度支撑该评分 [GH:readme] [GH:local-scan]。若项目另有外部文档，本轮未系统抓取完整站点，后续深审可补。

## 社区与成熟度

| 维度 | 评分 | 说明 |
|------|------|------|
| 社区活跃度 | 5/5 | stars=80910、forks=10654、open issues=141、open PRs=64 是点时可见度和维护负载信号，不单独证明质量 [GH] |
| 成熟度 | 4/5 | created_at=2020-05-08T10:38:16Z，sampled releases=v3.6.0, v3.5.0, v3.4.1, v3.4.0, v3.3.3；成熟度按项目年龄、release/CI/test/docs 和稳定性声明综合判断 [GH] [GH:release] |

## 安全与风险

评分 3/5。

GitHub security-advisories endpoint 本轮返回结果已记录，但“无 advisory 返回”不是安全证明 [GH:security-advisories]。实际采用时至少检查：权限范围、账号/cookie/token 暴露面、依赖供应链、模型/文档数据上传路径、sandbox/隔离边界、license 与商业使用限制。

## 学习价值

学习价值主要在三个层面：一是理解 `document-processing` 这一类项目当前如何组织能力；二是用 README claim 与 local scan 对照，训练“文档声称 vs 可审计事实”的边界感；三是把它与同类项目做定位级 comparison，而不是被 star 数或品牌牵引 [GH] [GH:readme] [GH:local-scan]。
