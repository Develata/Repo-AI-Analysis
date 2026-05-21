---

title: "Docling"
created: 2026-05-21
updated: 2026-05-21
type: repository-analysis
repo_url: "https://github.com/docling-project/docling"
category: "document-processing"
tags: ["document-processing", "pdf", "ocr", "rag", "markdown", "json", "mcp", "python"]
previous_repo: ""
successor: ""
primary_language: "Python"
license: "MIT"
stars: 60058
forks: 4162
last_checked: 2026-05-21
last_verified: 2026-05-21
evidence: "GitHub API + official docs extraction + local repository scan; conversion quality not independently benchmarked in this run"
archived_reason: ""
docker_support: true
gpu_required: false
estimated_cpu: "2-4 cores for ordinary conversion; heavier OCR/VLM pipelines benefit from more cores or accelerator"
estimated_memory: "4-16GB depending on PDF size, OCR and model pipeline"
estimated_storage: "1-10GB+ depending on optional models/cache and sample data"
status: active
sharing_candidate: true
ratings:
  capability: 5
  usability: 4
  performance: 3
  code_quality: 4
  documentation: 5
  community: 5
  maturity: 4
  extensibility: 5
  security: 4
  recommendation: 5
overall_score: 4.4
sources:
  - "[GH] https://github.com/docling-project/docling"
  - "[GH:api] https://api.github.com/repos/docling-project/docling queried 2026-05-21; stars=60058, forks=4162, open_issues_count=905 where REST count includes PRs"
  - "[GH:graphql] GitHub GraphQL queried 2026-05-21; open issues=856, open PRs=49, releases=173, commits=1049"
  - "[GH:release] latest GitHub release sampled 2026-05-21: v2.94.0 published 2026-05-18"
  - "[GH:languages] GitHub languages queried 2026-05-21; Python dominant with small Shell/Dockerfile/Makefile support"
  - "[GH:community] GitHub community profile queried 2026-05-21; MIT license, README, Code of Conduct, CONTRIBUTING and PR template present"
  - "[GH:advisories] GitHub security advisories endpoint queried 2026-05-21; returned [] for repository advisories in this check"
  - "[GH:local-scan] local clone /tmp/repo-wiki-batch12/repos/docling at commit 0a15088e63c08842f5cc3b85b55f06231e5bcf60; files≈1281; checked README.md, pyproject.toml, CONTRIBUTING.md, SECURITY.md, docs/, tests/; pyproject declares docling-slim 2.94.0, MIT, Python >=3.10,<4.0, optional extras for PDF/docx/pptx/xlsx/OCR/VLM; docs and many tests present"
  - "[Docs] https://docling-project.github.io/docling/ extracted 2026-05-21; docs describe parsing PDF/DOCX/PPTX/XLSX/HTML/audio/images/LaTeX/plain text, advanced PDF understanding, DoclingDocument, Markdown/HTML/WebVTT/DocTags/lossless JSON export, local execution, OCR, VLM support and MCP server"
---

# Docling

> Open-source document processing framework for parsing diverse formats into structured, GenAI/RAG-ready representations.
>
> **状态**: `active` · **总分**: 4.4/5 · **推荐度**: 5/5
> **核验版本**: local clone commit `0a15088e63c08842f5cc3b85b55f06231e5bcf60`；GitHub/API 快照 2026-05-21

## 一句话总结

Docling 是第二优先级 document-processing 板块中最值得先试的项目：格式覆盖广、文档强、MIT 许可清晰，并且直接面向 RAG/agentic AI 文档入口。

## 总体评价

Docling 官方文档称其简化 document processing，能解析多种格式并提供 advanced PDF understanding，与 GenAI ecosystem 无缝集成 [Docs]。README 列出 PDF、DOCX、PPTX、XLSX、HTML、WAV/MP3/WebVTT、图片、LaTeX、plain text 等输入；支持 layout、reading order、table structure、code、formula、image classification；输出 Markdown、HTML、WebVTT、DocTags、lossless JSON；并提供 LangChain、LlamaIndex、Crew AI、Haystack、MCP server 等集成 [GH][Docs]。

对 Develata 的价值非常直接：文献阅读、PDF 转 Markdown、知识库/RAG、个人笔记管线、网页分享材料，都需要可靠 document ingestion。Docling 的优势在于“统一 representation + 多格式 + 本地执行 + integrations”，比单一 PDF OCR 工具更像一条文档处理 pipeline。

## 推荐度：5/5

**定位**：面向科研文献、技术文档、RAG/agentic workflow 的通用 document ingestion framework。

推荐度给 5 的条件：作为默认候选先试用，而不是假定它在每类 PDF 上都最强。不同论文、扫描件、公式密度、表格结构会影响质量；但从许可、文档、生态和格式覆盖看，Docling 是很稳妥的首批候选。

## 优势

1. **格式覆盖极广**：PDF/Office/HTML/audio/images/LaTeX/plain text 等输入 [GH][Docs]。
2. **PDF understanding 能力全面**：layout、reading order、table、formula、code、image classification [Docs]。
3. **统一 DoclingDocument**：适合后续 RAG、chunking、结构化导出 [Docs]。
4. **GenAI/agent 集成直接**：LangChain、LlamaIndex、Crew AI、Haystack、MCP server [GH][Docs]。
5. **许可清晰**：MIT，商业和个人使用边界友好 [GH:community][GH:local-scan]。

## 劣势

1. **资源消耗可能较高**：OCR/VLM/large PDF pipeline 会显著增加 CPU/内存/模型缓存。
2. **质量需按文档类型实测**：复杂数学公式、多栏论文、扫描件、图表语义仍可能失败。
3. **issue 数不少**：GraphQL open issues=856，说明真实场景边缘 case 多 [GH:graphql]。
4. **生态快速演进**：v2.94.0、173 releases；能力强但版本节奏快，需要 pin 版本 [GH:release][GH:graphql]。
5. **模型/可选依赖复杂**：VLM、OCR、ASR、PDF backend 等可选组件会增加环境复杂度。

---

## 适合什么场景

- 论文 PDF、技术报告、讲义转 Markdown/JSON。
- 建 RAG/知识库/agent 文档入口。
- 需要本地处理敏感文档或离线环境。
- 统一处理 PDF、Office、HTML、LaTeX、音频字幕等多源材料。
- 需要 MCP server 给 agent 接文档处理能力。

## 不适合什么场景

- 只需要极轻量地抽取纯文本，`pdftotext`/PyMuPDF 已足够。
- 对复杂公式 OCR 要求接近人工级准确，但不愿人工校对。
- 低内存 VPS 上批量跑 OCR/VLM。
- 不愿 pin 依赖版本却要求长期稳定 pipeline。

## 与类似项目对比

| 项目 | 定位 | 相对本项目 |
|------|------|-----------|
| MinerU | 面向 LLM/RAG 的复杂文档解析，科学文献符号转换取向明显 | MinerU 星标高、科学文献叙事强；Docling 许可更标准、文档/框架集成更稳 |
| Marker | PDF/多格式到 Markdown/JSON，强调速度和准确率 | Marker 更偏模型驱动 OCR/conversion；Docling 更偏统一框架和企业/GenAI 集成 |
| PyMuPDF | PDF 低层解析库 | PyMuPDF 更底层轻量；Docling 是高层 pipeline 和结构表示 |

上述项目按 `document-processing` 同类范围做定位级对比，未按同一 10 维度框架深审。

## 个人主页 sharing 候选

是。适合写“从论文 PDF 到 agent-readable knowledge”的工具链文章，并可实际服务 develata.me 的 Knowledge/Blog 文档生产。

---

## 它能做什么

capability 评分 5/5。

Docling 能：

- 转换 PDF、DOCX、PPTX、XLSX、HTML、图片、LaTeX、plain text、音频字幕等 [Docs]；
- 识别版面、阅读顺序、表格、公式、代码、图片分类 [Docs]；
- 输出 Markdown、HTML、WebVTT、DocTags、lossless JSON [Docs]；
- 使用 CLI 和 Python API；
- 通过 MCP server 和 LangChain/LlamaIndex 等集成进入 agent/RAG pipeline [GH][Docs]。

## 运行环境与资源占用

| 场景 | CPU | 内存 | 存储 | 说明 |
|------|-----|------|------|------|
| 纯文本/普通 PDF | 2 cores | 4GB | 1-2GB | 基础 conversion |
| OCR/复杂版面 | 4+ cores | 8-16GB | 数 GB | OCR 和 layout model 开销明显 |
| VLM/批量处理 | 8+ cores/可选 GPU | 16GB+ | 10GB+ | 模型缓存和 batch 输入决定资源 |

- **运行时**：Python package/CLI；pyproject 要求 Python >=3.10,<4.0 [GH:local-scan]。
- **操作系统**：README 称支持 macOS、Linux、Windows x86_64/arm64 [GH]。
- **Docker**：仓库含 Dockerfile，且 docs 涉及服务/集成；但基础使用是 Python CLI/API [GH:local-scan]。
- **GPU**：基础转换不要求；VLM/OCR heavy pipeline 可能显著受益。
- **外部依赖**：可选 PDF/Office/OCR/VLM/ASR extras，模型下载和缓存。

## 上手体验

评分 4/5。

README quickstart 是 `pip install docling` 后 `docling https://arxiv.org/pdf/...` 或 Python `DocumentConverter` [GH]。这对 document-processing 框架已经很友好。扣分点是可选 pipeline 多，真实部署需理解 extras、模型和性能。

## 代码质量

评分 4/5。

local scan 显示 docs、tests、CI workflows、CONTRIBUTING、SECURITY 等齐全；pyproject 分 extras 组织依赖，说明模块化意识强 [GH:local-scan]。不给 5：本次未跑测试或 benchmark；document AI 项目质量高度依赖模型和数据边界，不只看代码结构。

## 可扩展性

评分 5/5。

Docling 的扩展性来自统一 document representation、formats/pipelines/plugins、Python API、integrations 和 MCP server。对 Develata 来说，它可以作为“PDF/Office/LaTeX → Markdown/JSON → RAG/notes/wiki”的中间层。

## 文档质量

评分 5/5。

官方文档覆盖 installation、quickstart、concepts、examples、integrations、reference、MCP、supported formats [Docs]。README 也清楚列出功能和示例 [GH]。

## 社区与成熟度

| 维度 | 评分 | 说明 |
|------|------|------|
| 社区活跃度 | 5/5 | 60k stars、4.1k forks、LF AI & Data/IBM 背景、open issues/PR 活跃 [GH:api][GH:graphql][Docs]。 |
| 成熟度 | 4/5 | v2.94.0、173 releases；pyproject classifier 标记 Production/Stable，但项目仍处快速扩展阶段 [GH:release][GH:local-scan]。 |

## 安全与风险

评分 4/5。

本次 repository advisory 查询为空 [GH:advisories]。风险主要来自处理不可信文档：PDF/Office/image/audio parser 都是经典攻击面；OCR/VLM 模型下载也有供应链风险。Docling 支持本地执行，对敏感文档是优势 [Docs]，但在线服务化时必须隔离 worker、限制文件大小和执行时间。

## 学习价值

很高。Docling 是学习现代 document intelligence pipeline 的好对象：格式解析、layout model、统一 representation、structured export、RAG/agent integration。它与 Develata 的文献阅读和知识生产闭环高度吻合。
