---
title: "Supervision"
created: 2026-06-10
updated: 2026-07-23
type: repository-analysis
repo_url: "https://github.com/roboflow/supervision"
category: "ai-programs/computer-vision"
tags: [computer-vision, python, annotation, object-detection, tracking, metrics, roboflow]
previous_repo: ""
successor: ""
primary_language: "Python"
license: "MIT"
stars: 48283
forks: 4431
last_checked: 2026-07-23
last_verified: 2026-07-23
evidence: "GitHub REST/GraphQL metadata + current README/pyproject/governance + release/compare/tree/community/security API scan; not installed, built, or smoke-tested"
archived_reason: ""
docker_support: false
gpu_required: false
estimated_cpu: "Python CV 工具库；CPU/GPU 占用主要由调用的模型推理链决定，库本身偏轻"
estimated_memory: "常规脚本/Notebook 为中等占用；视频/批量图像处理取决于输入规模"
estimated_storage: "GitHub API repository size≈3.7GB（仓库历史/报告口径，非 wheel 或最小安装体积）；本地数据集、模型权重和输出另计"
status: active
ratings:
  capability: 5
  usability: 4
  performance: 4
  code_quality: 4
  documentation: 5
  community: 4
  maturity: 4
  extensibility: 4
  security: 3
  recommendation: 4
overall_score: 4.1
sources:
  - "[GH] https://github.com/roboflow/supervision — authenticated GitHub REST/GraphQL snapshot 2026-07-23: created_at=2022-11-28T14:08:44Z, pushed_at=2026-07-22T08:27:48Z, default_branch=develop, commit=bcbe8de1e4c4062d847da4dd4e140b8374c28212, stars=48283, forks=4431, open issues=43, open PRs=37, license=MIT, primary_language=Python, sizeKB=3745275"
  - "[GH:readme] https://github.com/roboflow/supervision/blob/bcbe8de1e4c4062d847da4dd4e140b8374c28212/README.md — inspected 2026-07-23: model-agnostic computer-vision utilities for detections, annotators, tracking, video and datasets; documents pip install supervision, Python 3.10+, docs/notebooks and ecosystem connectors; project was not installed or run"
  - "[GH:release] GitHub releases API checked 2026-07-23: latest release=0.29.1 published 2026-06-23; release notes add KeyPoints.with_nms() and fix Pascal VOC export mutation, background false-positive metric accounting, confidence-free smoothing and malformed VLM-output handling; 0.29.0 published 2026-06-15"
  - "[GH:compare] https://github.com/roboflow/supervision/compare/8a4063086f18419fb4076d8a11e001cdb295eabc...bcbe8de1e4c4062d847da4dd4e140b8374c28212 — GitHub compare API checked 2026-07-23: ahead_by=134 and 255 changed files; changes include the 0.29 release line plus subsequent keypoint, metrics, annotation, VLM and dependency work"
  - "[GH:local-scan] GitHub tree/languages/community API scan at bcbe8de1e4c4062d847da4dd4e140b8374c28212 on 2026-07-23: files=405, docs-ish files=110, test-ish files=124, workflow_count=10, community_health=75, contributors endpoint returned 100 entries; README, pyproject.toml and LICENSE.md inspected; root SECURITY.md was not found and governance files live under .github; no test execution"
  - "[GH:security-advisories] GitHub repository security-advisories API checked 2026-07-23: returned []; no published advisory found in this check is not proof that image/video decoders, dataset inputs or transitive Python dependencies are safe"
---

# Supervision

> Supervision 是 Roboflow 维护的 Python computer-vision 工具库，主打检测、分割、跟踪、标注、指标和数据处理中的 reusable utilities。
>
> **状态**: `active` · **总分**: 4.1/5 · **推荐度**: 4/5
> **验证边界**: 本轮只做 GitHub metadata、README/manifest 与 API release/compare/tree/community scan；未安装、未构建、未运行、未复现实测 benchmark。

## 一句话总结

Supervision 是 Roboflow 维护的 Python computer-vision 工具库，主打检测、分割、跟踪、标注、指标和数据处理中的 reusable utilities。 [GH:readme]

## 总体评价

它不是模型训练框架，而是把 CV 项目中反复出现的 annotation、dataset、visualization、metrics、video processing 组件做成工具层；对个人实验、demo 与 pipeline glue 很有价值。当前已到 0.29.1，新增 keypoint-aware NMS，并修复 Pascal VOC 导出 mutation、metrics 误计数与 VLM 解析等 correctness 问题；这是能力/正确性相关 release，但不改变其工具层定位或评分 [GH:release]。

评分采取保守口径：README/docs claim 只证明项目设计目标和公开描述，本轮没有实测运行效果；local scan 只证明文件结构、语言、workflow/test/docs 线索，不证明业务正确性、安全边界或性能数字 [GH:readme] [GH:local-scan]。

## 推荐度：4/5

**角色定位**：适合已经在做 object detection / segmentation / tracking / dataset inspection 的开发者；若你只是找基础模型或端到端标注 SaaS，它不是首选。推荐度给 4/5：成熟、文档强、工程信号好，但本轮未运行 benchmark，且真实性能取决于下游模型与数据规模。

**结论**：推荐度 4/5。可收录、可跟踪；是否采用取决于你的场景是否落在它的强项内，以及能否接受本轮未实测与项目自身边界。

## 优势

1. **能力覆盖 CV pipeline 中常见 reusable tool**：标注、可视化、metrics、视频处理和多种 detection/segmentation 相关格式。 [GH:readme] [GH:local-scan]
2. README 与外部文档入口清楚，当前 static scan 显示 docs-ish files=110、test-ish files=124、workflows=10 [GH:readme] [GH:local-scan]。
3. 维护活跃，最新 release 为 0.29.1；旧核验点后 develop ahead_by=134 [GH:release] [GH:compare]。

## 劣势

1. 本轮没有安装或运行，不能把 README 示例视作性能/正确性实测。 [GH] [GH:readme]
2. 它是 CV utility 层，不替代训练框架、模型服务或数据标注平台。 [GH] [GH:readme]
3. 和 Roboflow 生态有天然关联；采用时需要区分 MIT 库本身、README 中的 ecosystem connectors 与 Roboflow 商业服务边界 [GH] [GH:readme]。

---

## 适合什么场景

- CV 原型、Notebook、demo 与 pipeline glue code。
- 目标检测/分割/跟踪结果的绘制、过滤、评估和格式转换。
- 需要快速把模型输出接入可视化或数据处理流程的个人项目。

## 不适合什么场景

- 需要端到端训练框架或模型托管平台。
- 需要严格复现实验性能但不愿自己跑 benchmark 的场景。
- 完全不做 computer vision 的通用 AI 工具收藏。

## 与类似项目对比

| 项目 | 定位 | 相对本项目 |
|------|------|-----------|
| OpenCV | 通用计算机视觉基础库 | OpenCV 更底层、更传统；Supervision 更偏现代 detection/segmentation pipeline utilities。 |
| FiftyOne | 视觉数据集分析与可视化平台 | FiftyOne 更像数据集/样本管理平台；Supervision 更轻量，偏代码库组件。 |
| Roboflow SaaS | 商业数据集/标注/部署生态 | Supervision 是开源工具库，不能等同于完整 Roboflow 平台。 |

上述项目按相邻生态做定位级对比，未在本条中按同一 10 维度框架重审；表格不构成优劣 benchmark。

---

## 它能做什么

围绕 detection、segmentation、tracking、metrics、visualization、dataset-format glue code 做 reusable utilities；0.29.1 的 keypoint-aware NMS 与多项 correctness fixes 体现其仍在补齐现代 pose/keypoint workflow [GH:readme] [GH:release]。

可见的仓库层面能力线索包括：primary_language=Python、files=405、docs-ish files=110、test-ish files=124、workflow_count=10 [GH] [GH:local-scan]。

## 运行环境与资源占用

| 场景 | CPU | 内存 | 存储 | 说明 |
|------|-----|------|------|------|
| 最小 | Python CV 工具库；CPU/GPU 占用主要由调用的模型推理链决定，库本身偏轻 | 常规脚本/Notebook 为中等占用；视频/批量图像处理取决于输入规模 | GitHub API repository size≈3.7GB（仓库历史/报告口径，非 wheel 体积）；本地数据集、模型权重和输出另计 | 基于 README/依赖栈和仓库规模的启发式估计，非实测 |
| 推荐 | 按真实输入规模预留余量 | 按数据、索引、模型或 VM/container workload 调整 | 数据、缓存、构建产物或用户库另计 | 本轮未跑 benchmark |

- **运行时**：Python 包；是否需要 GPU 取决于调用的模型推理链，Supervision 本身不是 GPU-only 项目。 [GH:readme]
- **操作系统**：未逐平台验证；以官方 README/文档声明为边界。
- **Docker**：frontmatter `docker_support=false` 表示本轮未发现 Docker 作为主路径的支持线索；未 build image。
- **GPU**：frontmatter `gpu_required=false`；即便项目本身不要求 GPU，下游模型/数据处理仍可能需要 GPU。
- **外部依赖**：依赖、账号、模型权重、数据库、浏览器、代理或云服务需求需按实际安装路径复核。

## 上手体验

评分 4/5。

README 与官方 docs 能较快给出价值路径；但真实项目中仍需理解 bbox/mask/dataset format 等 CV 基础。 依据：README 是否给出 quick start、安装/配置路径是否清晰，以及本轮是否看到 release、docs 和 workflow 线索 [GH:readme] [GH:release] [GH:local-scan]。

## 代码质量

评分 4/5。

pyproject、10 条 workflows、124 个 test-ish 文件和 docs/tests 结构齐全；0.29.1 也包含明确 correctness fixes [GH:local-scan] [GH:release]。本轮仍未执行测试，因此不把结构与 release note 等同覆盖率或正确性实测。

## 可扩展性

评分 4/5。

API 化 utilities 容易组合到 Notebook、脚本或服务中；深度改变核心抽象仍需读源码或 fork。 [GH:readme] [GH:local-scan]

## 文档质量

评分 5/5。

官方文档站点 + README + docs 目录都可见，示例导向较强。 [GH:readme] [GH:local-scan]

## 社区与成熟度

| 维度 | 评分 | 说明 |
|------|------|------|
| 社区活跃度 | 4/5 | stars=48283、forks=4431、open issues=43、open PRs=37 是点时信号；contributors endpoint 首页已满 100 条，community health=75 [GH] [GH:local-scan] |
| 成熟度 | 4/5 | 项目创建于 2022 年，当前 0.29.1，release/CI/tests/docs 完整且持续修复 correctness；仍未到 1.0，本轮也未做运行回归，故不升 5 [GH] [GH:release] [GH:local-scan] |

## 安全与风险

评分 3/5。

GitHub repository security-advisories endpoint 本轮返回空；这只表示未查到 published repository advisory [GH:security-advisories]。Supervision 会处理图片、视频、压缩数据集和模型输出，实际 attack surface 还包括 OpenCV/FFmpeg/Pillow 等 decoder 与 transitive dependencies；对不可信媒体应限制资源、隔离解析进程并固定依赖版本。

## 学习价值

适合学习“现代 CV 工具层如何组织”：把模型输出、dataset 格式、可视化和 metrics 从一次性脚本抽出来。 学习时应保持“README claim vs 可审计事实”的边界感：star 数、trending 热度和组织品牌都不是生产采用证明 [GH] [GH:readme] [GH:local-scan]。
