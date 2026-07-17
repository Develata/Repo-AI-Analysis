---

title: "Marker"
created: 2026-05-21
updated: 2026-05-21
type: repository-analysis
repo_url: "https://github.com/datalab-to/marker"
category: "document-processing/document-conversion"
tags: ["document-processing", "pdf", "markdown", "ocr", "json", "llm", "python", "datalab"]
previous_repo: ""
successor: ""
primary_language: "Python"
license: "GPL-3.0-or-later code + OpenRAIL-M-like model terms"
stars: 35280
forks: 2447
last_checked: 2026-07-17
last_verified: 2026-05-21
evidence: "GitHub API + README/docs extraction + local repository scan; benchmark claims not independently reproduced"
archived_reason: ""
docker_support: false
gpu_required: false
estimated_cpu: "2-4 cores for small CPU jobs; GPU strongly preferred for throughput"
estimated_memory: "4-16GB depending on model/device/document size"
estimated_storage: "several GB for package/model caches; more for batch workloads"
status: active
ratings:
  capability: 4
  usability: 4
  performance: 4
  code_quality: 3
  documentation: 4
  community: 4
  maturity: 3
  extensibility: 4
  security: 3
  recommendation: 3
overall_score: 3.6
sources:
  - "[GH] https://github.com/datalab-to/marker"
  - "[GH:api] https://api.github.com/repos/datalab-to/marker queried 2026-05-21; stars=35280, forks=2447, open_issues_count=409 where REST count includes PRs"
  - "[GH:graphql] GitHub GraphQL queried 2026-05-21; open issues=342, open PRs=67, releases=71, commits=1359"
  - "[GH:release] latest GitHub release sampled 2026-05-21: v1.10.2 published 2026-01-31"
  - "[GH:languages] GitHub languages queried 2026-05-21; Python dominant"
  - "[GH:community] GitHub community profile queried 2026-05-21; GPL-3.0 license and README present; no CONTRIBUTING/Code of Conduct/PR template detected"
  - "[GH:local-scan] local clone /tmp/repo-wiki-batch12/repos/marker at commit 6ae38895d6e11cbc8fb4a60a0750b3bac479e304; files≈295; checked README.md, LICENSE, MODEL_LICENSE, CLA.md, pyproject.toml, tests/; pyproject says marker-pdf 1.10.2, GPL-3.0-or-later, Python ^3.10; README states code GPL-3.0, model license OpenRAIL-M-like, commercial self-hosting requires license; CLA assigns broad rights to Endless Labs"
  - "[GH:advisories] GitHub security advisories endpoint queried 2026-05-21; returned [] for repository advisories in this check"
  - "[Docs] https://documentation.datalab.to/ extracted 2026-05-21; Datalab docs describe document intelligence APIs and list Marker, Surya and Chandra as open-source/document conversion components"
---

# Marker

> Datalab 的文档转 Markdown/JSON 工具：强调 PDF/图片/Office/HTML/EPUB 转换、OCR、表格/公式处理和可选 LLM 增强。
>
> **状态**: `active` · **总分**: 3.6/5 · **推荐度**: 3/5
> **核验版本**: local clone commit `6ae38895d6e11cbc8fb4a60a0750b3bac479e304`；GitHub/API 快照 2026-05-21

## 一句话总结

Marker 能力很强，适合做 PDF/Markdown 转换质量对比；但 GPL 代码、模型许可限制、商业 self-host license 和 CLA 边界，使它更适合个人研究试用，不宜直接作为默认生产底座。

## 总体评价

README 称 Marker converts documents to markdown, JSON, chunks, HTML，支持 PDF、image、PPTX、DOCX、XLSX、HTML、EPUB，多语言，能处理 tables、forms、equations、inline math、links、references、code blocks，并可选 LLM 增强 [GH]。这对数学论文转 Markdown 很有吸引力。

但 Marker 的 adoption 边界比 Docling/MinerU 更复杂。README 明确：code license 是 GPL-3.0，model license 是 OpenRAIL-M；commercial self-hosting requires a license；模型权重对商业规模有额外限制 [GH][GH:local-scan]。CLA.md 还要求贡献者向 Endless Labs 授予很宽的权利 [GH:local-scan]。

因此它应进入 document-processing/document-conversion，但推荐策略是“对比评测与个人 pipeline 可试”，不是“默认基础设施”。

## 推荐度：3/5

**定位**：高质量 PDF/多格式转 Markdown/JSON 工具，适合个人研究、开源兼容项目和评测。

给 3 的原因不是能力弱，而是法律/商业边界重。对 Develata 个人文献处理，Marker 值得安装试验；对开源项目或商业/在线服务，要先确认 GPL 与模型许可证是否可接受。

## 优势

1. **转换能力广**：PDF/image/Office/HTML/EPUB 到 Markdown/JSON/chunks/HTML [GH]。
2. **数学文档要素覆盖**：README 明确提到 equations、inline math、tables、references [GH]。
3. **可选 LLM 增强**：`--use_llm` 可处理跨页表格、inline math、forms 等复杂情况 [GH]。
4. **安装入口简单**：`pip install marker-pdf`，CLI 命令明确 [GH]。
5. **性能叙事强**：README 给出 benchmark 图和 H100 throughput claim，但本次未复现 [GH]。

## 劣势

1. **许可证限制重**：代码 GPL-3.0-or-later；模型 OpenRAIL-M-like；商业 self-host 需 license [GH][GH:local-scan]。
2. **治理文件不足**：本次未发现 CONTRIBUTING/Code of Conduct/PR template [GH:community]。
3. **模型依赖和 GPU 现实性**：CPU 可跑但高吞吐往往依赖 GPU/MPS/CUDA。
4. **商业产品导流明显**：README 多处导向 Datalab managed platform / pricing [GH]。
5. **benchmark 需独立复现**：README claims 不能直接当作所有数学论文场景保证。

---

## 适合什么场景

- 个人把论文/教材 PDF 转 Markdown。
- 与 Docling/MinerU 做文档解析质量 A/B test。
- 开源 GPL-compatible workflow。
- 需要 inline math、tables、forms、references 识别的实验。
- 使用本地 GPU/MPS 加速批处理。

## 不适合什么场景

- 非 GPL 兼容的闭源产品中嵌入。
- 商业 self-hosting 但不想购买 Datalab license。
- 不愿接受模型 license 限制的组织。
- 低资源机器上批量 OCR。
- 不想把文档处理 pipeline 绑定到商业公司治理的用户。

## 与类似项目对比

| 项目 | 定位 | 相对本项目 |
|------|------|-----------|
| Docling | MIT document processing framework | Docling 许可更友好、框架集成更强；Marker 更强调模型驱动转换质量和速度 |
| MinerU | 科学文献/LLM-ready 文档解析 | MinerU 更强调科学文献符号转换；Marker 更强调 PDF/多格式转换 benchmark 和 Datalab 生态 |
| Nougat | 学术 PDF 到 Markdown/OCR | Nougat 更学术论文 OCR 取向；Marker 覆盖更多文件类型和产品化路径 |

上述项目按 `document-processing/document-conversion` 同类范围做定位级对比，未按同一 10 维度框架深审。

---

## 它能做什么

capability 评分 4/5。

Marker 能转换 PDF、image、PPTX、DOCX、XLSX、HTML、EPUB；输出 Markdown、JSON、chunks、HTML；识别 tables/forms/equations/inline math/links/references/code blocks；支持 structured extraction beta；可选 LLM 增强 [GH]。

不给 5：能力虽广，但真实效果依赖模型、文档类型、设备和 LLM；且不如 Docling 那样强调统一 framework/schema。

## 运行环境与资源占用

| 场景 | CPU | 内存 | 存储 | 说明 |
|------|-----|------|------|------|
| 单 PDF CPU | 2-4 cores | 4-8GB | 数 GB | 可跑但速度有限 |
| GPU/MPS 本地处理 | 4+ cores + GPU/MPS | 8-16GB | 数 GB+ | README 称支持 GPU/CPU/MPS [GH] |
| 批量高吞吐 | 多核 + 高端 GPU | 16GB+ | 大量临时/输出 | README H100 throughput claim 未复现 [GH] |

- **运行时**：Python >=3.10，PyTorch，marker-pdf CLI [GH][GH:local-scan]。
- **操作系统**：取决于 Python/PyTorch/CUDA/MPS 支持。
- **Docker**：可自行容器化；本仓库不是 Docker-first。
- **GPU**：不是布尔硬要求，但实际高吞吐推荐 GPU/MPS。
- **外部依赖**：PyTorch、surya-ocr、transformers、LLM provider（可选 Gemini/Ollama 等）[GH:local-scan]。

## 上手体验

评分 4/5。

安装和基础 CLI 简单：`pip install marker-pdf`、`marker_single /path/to/file.pdf` [GH]。但 full extras、GPU、LLM mode、商业许可判断会增加复杂度。

## 代码质量

评分 3/5。

local scan 显示 tests 存在、模块结构可读，pyproject 组织 CLI scripts [GH:local-scan]。但治理文件缺失、许可证/CLA 边界复杂、本次未跑测试或复现 benchmark，因此保守给 3。

## 可扩展性

评分 4/5。

README 明确 “Extensible with your own formatting and logic”，并支持 processors/renderers/CLI/server 等入口 [GH][GH:local-scan]。不给 5：扩展生态和稳定 plugin API 不如成熟框架清晰。

## 文档质量

评分 4/5。

README 包含功能、benchmark、hybrid mode、examples、commercial usage、installation、usage；Datalab docs 也提供平台级说明 [GH][Docs]。扣分点是商业/模型 license 信息分散且需要仔细阅读。

## 社区与成熟度

| 维度 | 评分 | 说明 |
|------|------|------|
| 社区活跃度 | 4/5 | 35k stars、2.4k forks、open issues=342、open PRs=67；关注度高 [GH:api][GH:graphql]。 |
| 成熟度 | 3/5 | 2023 年创建，v1.10.2，release 较多；但模型/产品边界和商业策略仍在演进 [GH:api][GH:release]。 |

## 安全与风险

评分 3/5。

本次 repository advisory 查询为空 [GH:advisories]。风险包括不可信 PDF/Office/image 解析、PyTorch/transformers/model 供应链、LLM mode 上传数据、GPL/model license/commercial self-host 条款。个人本地处理可信文档可接受；服务化必须隔离和审查许可证。

## 学习价值

中高。Marker 值得学习的不是“通用框架设计”，而是 OCR/document AI 产品如何把模型、CLI、GUI、server、商业平台和开源 repo 串起来。对 Develata，主要价值是作为数学 PDF 转 Markdown 质量评测对象。
