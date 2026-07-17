---

title: "Docling"
created: 2026-05-21
updated: 2026-07-17
type: repository-analysis
repo_url: "https://github.com/docling-project/docling"
category: "document-processing/document-conversion"
tags: ["document-processing", "pdf", "ocr", "rag", "markdown", "json", "mcp", "python"]
previous_repo: ""
successor: ""
primary_language: "Python"
license: "MIT"
stars: 63296
forks: 4472
last_checked: 2026-07-17
last_verified: 2026-07-17
evidence: "Current GitHub API/README/releases/advisories + official docs + PyPI metadata; historical 2026-05 local scan retained; conversion quality not independently benchmarked"
archived_reason: ""
docker_support: true
gpu_required: false
estimated_cpu: "2-4 cores for ordinary conversion; heavier OCR/VLM pipelines benefit from more cores or accelerator"
estimated_memory: "4-16GB depending on PDF size, OCR and model pipeline"
estimated_storage: "1-10GB+ depending on optional models/cache and sample data"
status: active
ratings:
  capability: 5
  usability: 4
  performance: 3
  code_quality: 4
  documentation: 5
  community: 5
  maturity: 4
  extensibility: 5
  security: 3
  recommendation: 4
overall_score: 4.2
sources:
  - "[GH] https://github.com/docling-project/docling"
  - "[GH:api] https://api.github.com/repos/docling-project/docling queried 2026-07-17; canonical full_name=docling-project/docling, archived=false, disabled=false, stars=63296, forks=4472, created_at=2024-07-09, pushed_at=2026-07-15, primary language=Python, license=MIT, default_branch=main"
  - "[GH:issues] GitHub Search API queried 2026-07-17; open issues=868 and open PRs=64 for repo:docling-project/docling"
  - "[GH:release] https://api.github.com/repos/docling-project/docling/releases/latest queried 2026-07-17; latest=v2.113.0 published 2026-07-14; release adds native PowerPoint chart parsing and service GCS/Azure Blob/Google Drive source-target types plus conversion fixes"
  - "[GH:languages] https://api.github.com/repos/docling-project/docling/languages queried 2026-07-17; Python=3569880, Shell=12928, Dockerfile=3968, Makefile=2706"
  - "[GH:community] https://api.github.com/repos/docling-project/docling/community/profile queried 2026-07-17; health_percentage=100; MIT license, README, CODE_OF_CONDUCT, CONTRIBUTING and PR template detected"
  - "[GH:advisories] https://api.github.com/repos/docling-project/docling/security-advisories?per_page=100 queried 2026-07-17; returned 6 published advisories: high GHSA-cjqg-rq2h-2fvj EasyOCR Zip Slip fixed 2.91.0; high GHSA-m88r-rg27-5xfg USPTO XML entity expansion fixed 2.74.0; medium GHSA-r3xg-rg9j-67fv METS archive/XML fixed 2.91.0; medium GHSA-2j5p-7p5m-cvqr LaTeX path traversal fixed 2.91.0; high GHSA-q29v-xc37-wh5m HTML URI/path handling fixed 2.94.0; high GHSA-pj2v-ggqh-cmq2 Playwright HTML rendering fixed 2.91.0; current 2.113.0 is above every listed patch boundary"
  - "[GH:readme] https://github.com/docling-project/docling/blob/main/README.md fetched through GitHub Contents API 2026-07-17 at blob bf8db659da5192990f590ee9705788ad45be6f3c; current formats include EPUB, Box Notes, EML/MSG, DocLang, USPTO/JATS/XBRL XML and ODF; README also documents API server, MCP and local/air-gapped execution"
  - "[GH:local-scan] Historical local clone /tmp/repo-wiki-batch12/repos/docling at commit 0a15088e63c08842f5cc3b85b55f06231e5bcf60 dated 2026-05; files≈1281; checked README.md, pyproject.toml, CONTRIBUTING.md, SECURITY.md, docs/, tests/; pyproject declared docling-slim 2.94.0, MIT, Python >=3.10,<4.0 and optional OCR/VLM extras; retained for structural claims, not current version/count claims"
  - "[Docs] https://docling-project.github.io/docling/ extracted 2026-07-17; documents broad format parsing, advanced PDF understanding, DoclingDocument, Markdown/HTML/WebVTT/DocLang/DocTags/lossless JSON, local execution, OCR/VLM/ASR, MCP and docling-serve; what's-new includes ODF, XBRL, email, EPUB and chart understanding"
  - "[Docs:install] https://docling-project.github.io/docling/getting_started/installation/ extracted 2026-07-17; Python package supports macOS/Linux/Windows x86_64/arm64 and documents extras for ASR, VLM, EasyOCR, Nemotron, Tesseract/OcrMac/RapidOCR plus platform-specific PyTorch constraints"
  - "[Docs:service] https://docling-project.github.io/docling/usage/api_server/ and deployment page extracted 2026-07-17; official docs sync docling-serve v1.21.0, document REST/API-key controls, Docker/Compose images including GPU variants, Redis/RQ scaling, request size/page limits and cluster hardening; published image support is service-repo support, not a core docling library image"
  - "[PyPI] PyPI JSON queried 2026-07-17; docling=2.113.0, requires_python>=3.10,<4.0"
---

# Docling

> Open-source document processing framework for parsing diverse formats into structured, GenAI/RAG-ready representations.
>
> **状态**: `active` · **总分**: 4.2/5 · **推荐度**: 4/5
> **核验版本**: GitHub/PyPI `2.113.0`；GitHub API、README、advisories 与官方 Docs 快照 2026-07-17

## 一句话总结

Docling 仍是 document-processing 板块中最值得先试的项目之一：格式覆盖广、文档强、MIT 许可清晰，并且直接面向 RAG/agentic AI 文档入口；但 2026-06 集中披露的 6 条 parser/download advisories 证明其不可信文档攻击面不能再按低风险处理。

## 总体评价

Docling 官方文档称其简化 document processing，能解析多种格式并提供 advanced PDF understanding，与 GenAI ecosystem 集成 [Docs]。当前 README 在原有 PDF/Office/HTML/audio/images/LaTeX/plain text 之外还明确列出 EPUB、Box Notes、EML/MSG、DocLang、USPTO/JATS/XBRL 与 ODF；支持 layout、reading order、tables、code、formulas、chart understanding，输出 Markdown、HTML、WebVTT、DocLang、DocTags 与 lossless JSON，并提供 MCP/API server 与主流 GenAI framework 集成 [GH:readme][Docs]。

对 Develata 的价值非常直接：文献阅读、PDF 转 Markdown、知识库/RAG、个人笔记管线、网页分享材料，都需要可靠 document ingestion。Docling 的优势在于“统一 representation + 多格式 + 本地执行 + integrations”，比单一 PDF OCR 工具更像一条文档处理 pipeline。

## 推荐度：4/5

**定位**：面向科研文献、技术文档、RAG/agentic workflow 的通用 document ingestion framework。

推荐度给 4：作为科研/个人文档 ingestion 的默认候选，仍值得优先试用；但不再给 5，因为 6 条已修复 advisory 覆盖 Zip Slip、XML entity expansion、LaTeX path traversal、HTML URI/path 与 Playwright rendering，显示其 parser surface 对不可信输入具有真实高危历史 [GH:advisories]。个人可信文档可积极采用；公网上传或多租户服务必须锁定至少高于全部修复边界的版本、隔离 worker、限制 URL/文件访问与资源，并按文档类型做质量评测。

## 优势

1. **格式覆盖极广**：PDF/Office/HTML/audio/images/LaTeX/plain text，并扩展到 ODF、EPUB、email 与多种 XML schema [GH:readme][Docs]。
2. **PDF understanding 能力全面**：layout、reading order、table、formula、code、image classification [Docs]。
3. **统一 DoclingDocument**：适合后续 RAG、chunking、结构化导出 [Docs]。
4. **GenAI/agent 集成直接**：LangChain、LlamaIndex、Crew AI、Haystack、MCP server [GH][Docs]。
5. **许可清晰**：MIT，商业和个人使用边界友好 [GH:community][GH:local-scan]。

## 劣势

1. **资源消耗可能较高**：OCR/VLM/large PDF pipeline 会显著增加 CPU/内存/模型缓存。
2. **质量需按文档类型实测**：复杂数学公式、多栏论文、扫描件、图表语义仍可能失败。
3. **issue 数不少**：open issues=868，说明真实场景边缘 case 多 [GH:issues]。
4. **已有多条 parser advisories**：本轮发现 6 条已发布 advisory，其中 4 条 high；最新 2.113.0 高于全部列出的 patched versions，但这仍是攻击面复杂度的硬负面信号 [GH:advisories]。
5. **生态快速演进且依赖复杂**：latest v2.113.0；VLM、OCR、ASR、HTML rendering、PDF/XML backends 与 PyTorch platform constraints 会增加 pinning、资源和供应链成本 [GH:release][Docs:install]。

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

上述项目按 `document-processing/document-conversion` 同类范围做定位级对比，未按同一 10 维度框架深审。

---

## 它能做什么

capability 评分 5/5。

Docling 能：

- 转换 PDF、DOCX、PPTX、XLSX、ODF、HTML、EPUB、email、图片、LaTeX、plain text、音频字幕与多类 XML schema [GH:readme][Docs]；
- 识别版面、阅读顺序、表格、公式、代码、图片分类 [Docs]；
- 输出 Markdown、HTML、WebVTT、DocTags、lossless JSON [Docs]；
- 使用 CLI 和 Python API；
- 通过 MCP server 和 LangChain/LlamaIndex 等集成进入 agent/RAG pipeline [GH][Docs]。

## 运行环境与资源占用

下表是用于容量规划的保守估计，不是官方硬件下限，也不是本轮 benchmark 实测值；实际占用取决于文档页数、backend、OCR/VLM 模型与 batch 策略。

| 场景 | CPU | 内存 | 存储 | 说明 |
|------|-----|------|------|------|
| 纯文本/普通 PDF | 2 cores | 4GB | 1-2GB | 基础 conversion |
| OCR/复杂版面 | 4+ cores | 8-16GB | 数 GB | OCR 和 layout model 开销明显 |
| VLM/批量处理 | 8+ cores/可选 GPU | 16GB+ | 10GB+ | 模型缓存和 batch 输入决定资源 |

- **运行时**：Python package/CLI；PyPI 要求 Python >=3.10,<4.0 [PyPI]。
- **操作系统**：官方安装文档支持 macOS、Linux、Windows x86_64/arm64，但 OCR/PyTorch extras 有平台约束 [Docs:install]。
- **Docker**：官方用户路径来自独立 `docling-serve`：文档给出已发布服务镜像与 Docker Compose/GPU 部署；core `docling` 基础用法仍是 Python library/CLI。`docker_support: true` 指该官方 service surface，不是“主仓库有 Dockerfile” [Docs:service]。
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
| 社区活跃度 | 5/5 | 63k+ stars、4.4k forks、community health=100、LF AI & Data/IBM 背景、仓库活跃 [GH:api][GH:community][Docs]。 |
| 成熟度 | 4/5 | latest v2.113.0，格式与 service surface 继续快速扩展；不是冻结型稳定库，但已有明确版本化、治理与修复节奏 [GH:release][GH:community]。 |

## 安全与风险

评分 3/5。

本轮 repository advisory 查询返回 6 条：EasyOCR model ZIP extraction、USPTO/METS XML parsing、LaTeX include path traversal、HTML URI/path handling 与 Playwright-based HTML rendering；4 条为 high、2 条为 medium，且都列出 patched versions。当前 2.113.0 高于最高修复边界 2.94.0，所以这些是历史已修复漏洞与攻击面证据，不是当前版本仍受同一漏洞影响的证明 [GH:advisories]。

security 从 4 下调为 3：Docling 支持本地/air-gapped execution 是隐私优势，但 PDF/Office/XML/HTML/image/audio parser、模型下载与浏览器渲染本就是高风险输入面。服务化时应使用当前版本、隔离低权限 worker、限制文件大小/页数/执行时间、禁用不需要的 backend/URL fetch，并为 API server 配置 key 与网络边界 [Docs][Docs:service]。

## 学习价值

很高。Docling 是学习现代 document intelligence pipeline 的好对象：格式解析、layout model、统一 representation、structured export、RAG/agent integration。它与 Develata 的文献阅读和知识生产闭环高度吻合。
