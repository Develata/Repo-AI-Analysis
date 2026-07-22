---
title: "PaddleOCR"
created: 2026-06-07
updated: 2026-07-22
type: repository-analysis
repo_url: "https://github.com/PaddlePaddle/PaddleOCR"
category: "document-processing"
tags: [ocr, document-ai, pdf, markdown, rag, python]
previous_repo: ""
successor: ""
primary_language: "Python / C++ / TypeScript"
license: "Apache-2.0"
stars: 85967
forks: 11053
last_checked: 2026-07-22
last_verified: 2026-07-22
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
  - "[GH] https://github.com/PaddlePaddle/PaddleOCR — GitHub REST/GraphQL queried 2026-07-22: created_at=2020-05-08, pushed_at=2026-07-15, default_branch=main, commit=211989f046cc1878460f9e65574690c00a127a1a, stars=85967, forks=11053, open issues=144, open PRs=70, primary_language=Python, license=Apache-2.0, diskUsageKB=1959107"
  - "[GH:readme] README.md at 211989f046cc1878460f9e65574690c00a127a1a checked 2026-07-22; current project description covers PaddleOCR-VL-1.6, PP-StructureV3, PP-OCRv6, 100+ language ecosystem, Markdown/JSON output and CPU/GPU/XPU/NPU paths; benchmark and speed numbers remain first-party claims not reproduced in this audit"
  - "[GH:local-scan] GitHub tree/API scan at 211989f046cc1878460f9e65574690c00a127a1a on 2026-07-22: files=2490, workflows=9, test-ish files=129, docs/Markdown-ish files=771; languages Python=4185876, C++=677366, TypeScript=356743, Shell=307694, Swift=218043, Kotlin=122741, Go=62328, Java=55080, Dockerfile=45219 and additional build languages"
  - "[GH:release] https://github.com/PaddlePaddle/PaddleOCR/releases/tag/v3.7.0 checked 2026-07-22; v3.7.0 published 2026-06-11 releases PP-OCRv6 with tiny/small/medium tiers and a unified 50-language model; accuracy and 5.2x OpenVINO/6.1x Apple M4/A100 speed figures are first-party release claims, not independently reproduced"
  - "[GH:security-advisories] https://api.github.com/repos/PaddlePaddle/PaddleOCR/security-advisories?per_page=100 queried 2026-07-22; returned [] — no published repository advisory found in this check, not proof of safety; community profile did not surface a SECURITY policy"
---

# PaddleOCR

> PaddleOCR 是面向 OCR、PDF/图片结构化解析和 LLM-ready Markdown/JSON 输出的 Document AI toolkit，覆盖 PaddleOCR-VL、PP-StructureV3、PP-OCRv6 与 100+ 语言生态。
>
> **状态**: `active` · **总分**: 4.2/5 · **推荐度**: 5/5
> **验证边界**: 本轮只做 GitHub metadata、README 与 tree/API scan；未安装、未构建、未运行、未复现实测 benchmark。

## 一句话总结

PaddleOCR 是面向 OCR、PDF/图片结构化解析和 LLM-ready Markdown/JSON 输出的 Document AI toolkit，覆盖 PaddleOCR-VL、PP-StructureV3、PP-OCRv6 与 100+ 语言生态。 [GH:readme]

## 总体评价

README 的功能与 benchmark claim 很强：PaddleOCR-VL-1.6、PP-StructureV3、多语言识别、PDF/Office 到 Markdown/JSON/DOCX；v3.7.0 又发布 tiny/small/medium 三档 PP-OCRv6 和 50-language unified model。本轮未复现实测准确率或 5.2x/6.1x speed claims，performance 因此维持 3/5。2026-07-22 快照为 stars=85967、forks=11053、open issues=144、open PRs=70、latest=v3.7.0 [GH][GH:release]。

评分采取保守口径：README/docs claim 只证明项目设计目标和公开描述，本轮没有实测运行效果；local scan 只证明文件结构、语言、workflow/test/docs 线索，不证明业务正确性、安全边界或性能数字 [GH:readme] [GH:local-scan]。

## 推荐度：5/5

**角色定位**：适合对 `document-processing` 方向已有明确需求、愿意按 README 与源码边界自行验证的人。

推荐理由：
- 能力面与主题匹配：当前 README/release 覆盖 PP-OCRv6、PaddleOCR-VL-1.6、PP-StructureV3、100+ languages、Markdown/JSON/DOCX，以及多档 edge/server OCR 模型 [GH:readme][GH:release]。
- 工程可审计性：仓库结构、语言分布、workflow/test/docs 数量已记录到 source 层，便于后续深挖 [GH:local-scan]。
- 风险前置：本条不把 star 数、官方品牌或 README benchmark 当作独立生产采用证据 [GH]。

**结论**：推荐度 5/5。可收录、可跟踪；是否采用取决于你的场景是否落在它的强项内，以及能否接受未实测/权限/运维边界。

## 优势

1. **定位清晰**：PaddleOCR 是面向 OCR、PDF/图片结构化解析和 LLM-ready Markdown/JSON 输出的 Document AI toolkit，覆盖 PaddleOCR-VL、PP-StructureV3、PP-OCRv6 与 100+ 语言生态。 [GH:readme]
2. **工程信号可见**：当前 tree/API scan 记录 files=2490、workflow_count=9、test-ish files=129、docs-ish files=771 [GH:local-scan]。
3. **PP-OCRv6 分层更完整**：v3.7.0 提供 5M/14M/30M tiny-small-medium 与 50-language unified model；但发布说明中的 accuracy/latency 数字仍只作 first-party evidence [GH:release]。

## 劣势

1. **验证边界**：本轮没有安装、构建、运行、benchmark 或端到端 smoke test；README 能力均按“文档声称/仓库可见设计面”处理 [GH:readme]。
2. **维护/稳定性需看上下文**：open issues=144、open PRs=70 是点时快照；大模型、硬件和语言矩阵增加回归面，不能把 backlog 简化为单一 bug-density 指标 [GH]。
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

当前 README/release 覆盖 PP-OCRv6、PaddleOCR-VL-1.6、PP-StructureV3、100+ languages、Markdown/JSON/DOCX，以及 CPU/GPU/XPU/NPU 与多档 edge/server model 路径 [GH:readme][GH:release]。

可见的仓库层面能力线索包括：primary_language=Python、OCR/KIE/PDF-to-Markdown/RAG/document-parsing/PaddleOCR-VL 等 topics，当前 files=2490、docs-ish files=771、test-ish files=129 [GH][GH:local-scan]。

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

依据：Python/C++/TypeScript 等多语言代码，workflow_count=9、test-ish files=129、docs-ish files=771，以及持续 release 信号 [GH:local-scan][GH:release]。这是静态工程判断；本轮未执行测试，不能把文件数量当覆盖率。

## 可扩展性

评分 4/5。

依据：README 暴露的 API/plugin/module/model/config/workflow 扩展面，以及仓库结构是否支持二次开发 [GH:readme] [GH:local-scan]。没有运行扩展示例，因此只评价设计面和可见结构。

## 文档质量

评分 5/5。

README/docs-ish files=771；README 对核心定位、安装或功能说明的清晰度支撑该评分 [GH:readme] [GH:local-scan]。若项目另有外部文档，本轮未系统抓取完整站点，后续深审可补。

## 社区与成熟度

| 维度 | 评分 | 说明 |
|------|------|------|
| 社区活跃度 | 5/5 | stars=85967、forks=11053、open issues=144、open PRs=70；长期规模与活跃生态支持高分，但 star 数不等于质量证明 [GH] |
| 成熟度 | 4/5 | 创建于 2020，当前 v3.7.0；核心 OCR 生态成熟，但 VLM/PP-OCRv6 与硬件矩阵仍在活跃演进，未按“完全冻结稳定”给 5 [GH][GH:release] |

## 安全与风险

评分 3/5。

GitHub repository security-advisories endpoint 本轮返回 `[]`，且 community profile 未 surfaced SECURITY policy；这只说明此次查询未发现项目发布的 GHSA，不是安全证明 [GH:security-advisories]。实际采用时仍要审计不可信 PDF/图片/Office 输入、模型权重与下载源、深度学习依赖、临时文件/输出目录、服务 API 和 GPU/container 权限。Apache-2.0 许可明确，但模型资产与第三方依赖仍需逐项核对。

## 学习价值

学习价值主要在三个层面：一是理解 `document-processing` 这一类项目当前如何组织能力；二是用 README claim 与 local scan 对照，训练“文档声称 vs 可审计事实”的边界感；三是把它与同类项目做定位级 comparison，而不是被 star 数或品牌牵引 [GH] [GH:readme] [GH:local-scan]。
