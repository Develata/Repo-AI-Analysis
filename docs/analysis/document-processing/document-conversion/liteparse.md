---
title: "LiteParse"
created: 2026-05-31
updated: 2026-05-31
type: repository-analysis
repo_url: "https://github.com/run-llama/liteparse"
category: "document-processing/document-conversion"
tags: ["document-processing", "pdf", "ocr", "bounding-boxes", "rust", "python", "typescript", "wasm", "llamaindex"]
previous_repo: ""
successor: ""
primary_language: "Rust"
license: "Apache-2.0"
stars: 7788
forks: 461
last_checked: 2026-05-31
last_verified: 2026-05-31
evidence: "GitHub API + official docs extraction + local repository scan; parsing quality and speed not independently benchmarked in this run"
archived_reason: ""
docker_support: true
gpu_required: false
estimated_cpu: "1-4 cores for native-text PDFs; OCR uses CPU workers by default and can call external OCR servers"
estimated_memory: "1-4GB for ordinary PDFs; larger OCR/batch workloads may need more"
estimated_storage: "hundreds of MB to several GB depending on PDFium/Tesseract/model data, bindings and Docker images"
status: active
ratings:
  capability: 3
  usability: 4
  performance: 3
  code_quality: 3
  documentation: 4
  community: 3
  maturity: 2
  extensibility: 4
  security: 3
  recommendation: 3
overall_score: 3.2
sources:
  - "[GH] https://github.com/run-llama/liteparse"
  - "[GH:api] https://api.github.com/repos/run-llama/liteparse queried 2026-05-31; stars=7788, forks=461, language=Rust, license=Apache-2.0, createdAt=2026-02-09, latest release node-v2.0.4, open issues=10, open PRs=5, releases=50, commits=611"
  - "[GH:languages] GitHub languages queried 2026-05-31; Rust=450492 bytes, Python=116653, JavaScript=24435, HTML=18456, Shell=18056, TypeScript=8810, Dockerfile=2769"
  - "[GH:contributors] GitHub contributors endpoint queried 2026-05-31; first page count=18, top contributors include logan-markewich=447 and AstraBert=70 commits"
  - "[GH:advisories] GitHub security advisories endpoint queried 2026-05-31; returned [] for repository advisories in this check"
  - "[GH:releases] GitHub releases endpoint queried 2026-05-31; latest sampled tags include wasm-v2.0.4, python-v2.0.4, node-v2.0.4, crates-v2.0.4 all published 2026-05-30"
  - "[GH:local-scan] local clone /opt/data/tmp/repo-wiki-trending-2026-05-31/repos/liteparse at commit cf9f08fe89a2b63478dece44f0a0c0030261ae85; files=175; checked README.md, Cargo.toml, SECURITY.md, CONTRIBUTING.md, CHANGELOG.md, AGENTS.md, OCR_API_SPEC.md, Dockerfile, full.Dockerfile, crates/liteparse/src/, crates/liteparse/tests/, packages/python/README.md, packages/node/README.md, packages/wasm/README.md, docs/ and .github/workflows/; Rust workspace with pdfium/pdfium-sys/liteparse/liteparse-napi/liteparse-python/liteparse-wasm; Dockerfiles include PDFium/Tesseract and optional LibreOffice/ImageMagick; many CI/release workflows present"
  - "[Docs] https://developers.llamaindex.ai/liteparse/ extracted 2026-05-31; docs describe fast local PDF parsing with spatial layout, OCR, bounding boxes, screenshots, TypeScript/Python/CLI usage and no cloud/API-key dependency"
  - "[Docs:getting-started] https://developers.llamaindex.ai/liteparse/getting_started/ extracted 2026-05-31; install via npm/pip/cargo/wasm, `lit parse`, `lit batch-parse`, `lit screenshot`, JSON output and target page examples"
  - "[Docs:library] https://developers.llamaindex.ai/liteparse/guides/library-usage/ extracted 2026-05-31; TypeScript/Python APIs, bytes input, bounding-box JSON, screenshots, config options; notes Python package wraps Node.js CLI and requires Node.js >=18"
  - "[Docs:ocr] https://developers.llamaindex.ai/liteparse/guides/ocr/ extracted 2026-05-31; selective OCR, built-in Tesseract.js, HTTP OCR server support, EasyOCR/PaddleOCR examples, worker controls and custom OCR API"
---

# LiteParse

> LlamaIndex 生态的本地轻量 document parser：Rust core，强调快速 PDF/text parsing、bounding boxes、selective OCR、多语言 bindings 和无云依赖。
>
> **状态**: `active` · **总分**: 3.2/5 · **推荐度**: 3/5
> **核验版本**: local clone commit `cf9f08fe89a2b63478dece44f0a0c0030261ae85`；GitHub/API 快照 2026-05-31

## 一句话总结

LiteParse 值得作为 document-processing 板块的“轻量本地解析 + bbox”代表跟踪和试验；它可能适合 agent/RAG 前处理，但项目很新，成熟度和推荐度都必须保守。

## 总体评价

LiteParse 的定位很清楚：fast, local PDF parsing with spatial text parsing, OCR, and bounding boxes；官方文档强调无 cloud dependencies、无 LLM、无 API keys，适合 real-time applications、coding agents 和 local workflows [Docs]。这与 Docling/MinerU/Marker 的“更重 document intelligence / OCR / Markdown conversion”形成互补。

它的技术路线偏工程化：Rust core、PDFium、selective OCR、grid projection、JSON/text 输出、page screenshots，并提供 Node.js/TypeScript、Python、WASM、CLI 等入口 [GH][Docs]。README 也诚实指出，复杂文档如 dense tables、multi-column layouts、charts、handwritten text、scanned PDFs 更适合云端 LlamaParse [GH]。这说明 LiteParse 不是“全能文档理解”，而是本地、快速、结构坐标友好的 parser。

对 Develata 的价值在于：它可作为本地 agent/RAG pipeline 的 low-level parser 候选，尤其当我们需要 text items + bounding boxes、页面截图或浏览器/WASM 运行时。风险在于项目 2026-02 才创建，v2.0.4 释放很快，bindings 多、发布面广，稳定性还需观察 [GH:api][GH:releases]。

## 推荐度：3/5

**定位**：面向需要本地快速 PDF/document parsing、坐标信息、agent/RAG 前处理的开发者。

推荐度保守给 3：如果需求是“本地、轻量、可嵌入、多语言、bbox-aware”，LiteParse 值得列入 tracking/trial；但在没有独立 benchmark 前，不建议作为复杂科学文献 OCR 或生产 ingestion 的默认答案。对数学论文和扫描件，应与 Docling/MinerU/Marker 做真实 A/B test。

## 优势

1. **本地无云依赖**：官方强调 no cloud dependencies, no LLMs, no API keys [Docs]。
2. **结构坐标友好**：输出 text items、bounding boxes、spatial layout，适合可视化 citation 或 agent 视觉/文档定位 [Docs][Docs:library]。
3. **Rust core + 多语言 bindings**：Rust、Node.js/TypeScript、Python、WASM、CLI 都有入口 [GH][Docs:getting-started]。
4. **OCR 设计可插拔**：内置 Tesseract.js，也可接 HTTP OCR server / EasyOCR / PaddleOCR / custom OCR API [Docs:ocr][GH:local-scan]。
5. **工程文档入口较全**：CONTRIBUTING、AGENTS、OCR API spec、官方 docs、CI/release workflows 都比较完整 [GH:local-scan]。

## 劣势

1. **项目非常新**：2026-02 创建，即使 release 多，也不等于成熟稳定 [GH:api]。
2. **复杂文档能力有明确上限**：README 自述复杂表格、多栏、图表、手写、扫描 PDF 更适合 LlamaParse 云服务 [GH]。
3. **Python 入口有额外 Node.js 要求**：官方 library docs 说明 Python package wraps Node.js CLI，需要 Node.js >=18 [Docs:library]。
4. **商业云产品导流存在**：README 把复杂场景导向 LlamaParse；这不是坏事，但说明 OSS LiteParse 的定位有意保持轻量 [GH]。
5. **安全边界仍需部署者负责**：SECURITY.md 明确不把恶意输入文件、zip bombs、大文件 DoS 等作为项目自身安全范围，服务化要自建 sandbox/resource limits [GH:local-scan]。

---

## 适合什么场景

- 本地 PDF 文本抽取，并需要 bounding boxes / spatial layout。
- agent/RAG pipeline 中需要 page screenshots 或 visual citation。
- Rust/Node/Python/WASM 多端共享 document parser。
- 不希望上传文档到云服务或调用 LLM 的本地 workflow。
- 需要把 OCR backend 换成 EasyOCR、PaddleOCR 或自定义 HTTP OCR server。

## 不适合什么场景

- 复杂数学公式、扫描件、手写材料要求高准确率且不愿后处理。
- 需要直接输出高质量 Markdown/HTML 的文档转换场景。
- 不想安装 Node.js 却要用 Python package。
- 要求项目已稳定运行多年、API 基本冻结的生产底座。
- 接收任意用户上传文档但无法部署 sandbox、timeouts、page limits、concurrency limits。

## 与类似项目对比

| 项目 | 定位 | 相对本项目 |
|------|------|-----------|
| MarkItDown | 多格式转 Markdown 的轻量 LLM ingestion utility | MarkItDown 更关注 Markdown 输出和格式覆盖；LiteParse 更关注 PDF/spatial text/bbox 与本地 parser embedding |
| Docling | 通用 document intelligence framework | Docling 更重、更完整、更 schema/integration-driven；LiteParse 更轻、更底层、更适合 bbox/截图场景 |
| MinerU | 科学文献/复杂 PDF 到 Markdown/JSON | MinerU 更偏科学文献和 OCR/VLM；LiteParse 更偏本地快速解析、坐标与轻量嵌入 |
| Marker | 模型驱动 PDF/多格式转 Markdown/JSON | Marker 更强调 Markdown conversion quality；LiteParse 更强调 no-cloud、bbox-aware、Rust core 和多语言 bindings |

上述项目按 `document-processing/document-conversion` 同类范围做粗定位，主要依据本 wiki 既有同类条目和本轮 MarkItDown 草稿；未按同一 10 维度框架重新深审。

---

## 它能做什么

capability 评分 3/5。

LiteParse 能：

- 解析 PDF，返回 spatial layout 与 bounding boxes [Docs]；
- 通过 LibreOffice / ImageMagick conversion 支持 DOCX、XLSX、PPTX、images 等非 PDF 输入 [GH][Docs]；
- 使用 selective OCR，只在原生文本不足或嵌入图片时 OCR [Docs:ocr]；
- 输出 text 或 JSON，生成页面 screenshot [Docs:getting-started]；
- 提供 Rust/Node.js/TypeScript/Python/WASM/CLI 多入口 [GH][Docs:getting-started]；
- 通过 HTTP OCR API 接入自定义 OCR backend [Docs:ocr][GH:local-scan]。

不给 4/5：上述只是 feature surface；本次没有独立验证 OCR 准确率、复杂 layout/table/math/scanned PDF 质量，且官方也把复杂场景导向 LlamaParse [GH]。

## 运行环境与资源占用

| 场景 | CPU | 内存 | 存储 | 说明 |
|------|-----|------|------|------|
| 原生文本 PDF | 1-2 cores | 1-2GB | 数百 MB | 估计值；PDFium + Rust core，本次未实测速度 |
| OCR / screenshot | 2-4 cores | 2-4GB+ | 1GB+ | 估计值；Tesseract model、page rendering、worker 数影响资源 |
| 多格式 / Docker full | 2-4+ cores | 4GB+ | 数 GB | 估计值；full Dockerfile 加 LibreOffice/ImageMagick [GH:local-scan] |

- **运行时**：Rust core；Node.js/TypeScript、Python、WASM bindings；CLI 名为 `lit` [GH][Docs:getting-started]。
- **操作系统**：官方 README 称 Linux、macOS Intel/ARM、Windows；WASM 可浏览器运行 [GH]。
- **Docker**：仓库含 `Dockerfile` 与 `full.Dockerfile`；前者含 PDFium/Tesseract，后者额外含 LibreOffice/ImageMagick [GH:local-scan]。
- **GPU**：不要求；若接外部 OCR server，可由外部 OCR backend 使用 GPU。
- **外部依赖**：PDFium、Tesseract.js/model data；多格式 conversion 需要 LibreOffice/ImageMagick；Python package 路径还涉及 Node.js >=18 [Docs:library][GH:local-scan]。

performance 评分 3/5。官方文档用 fast/local 描述项目定位，但本次没有独立跑吞吐、延迟、内存、批处理或跨平台安装测试；因此性能评价只能按“有潜力、待验证”处理 [Docs][GH:local-scan]。

## 上手体验

评分 4/5。

官方 docs 入口很清楚：`npm i -g @llamaindex/liteparse`、`pip install liteparse`、`cargo install liteparse`、`npm i @llamaindex/liteparse-wasm`，之后 `lit parse document.pdf` 即可开始 [Docs:getting-started]。CLI 支持 JSON 输出、target pages、batch parse、screenshot 等常用参数 [Docs:getting-started]。

扣分点：Python package 需要 Node.js >=18，这对纯 Python 用户不直觉 [Docs:library]；多格式和 OCR 场景还涉及 LibreOffice/ImageMagick/Tesseract model 缓存。

## 代码质量

评分 3/5。

local scan 显示 Rust workspace 分层清楚：`pdfium-sys`、`pdfium`、`liteparse`、`liteparse-napi`、`liteparse-python`、`liteparse-wasm`；核心 crate 下有 parser、config、extract、projection、render、ocr、output 等模块 [GH:local-scan]。CONTRIBUTING 还明确说明目录结构、数据流、开发前提和 workspace build 陷阱 [GH:local-scan]。

减分原因：本次未跑测试/benchmark；bindings 多、发布面广，长期维护复杂度高；核心测试数量从文件数看仍有限 [GH:local-scan]。因此只能说代码结构可读、方向清楚，不能按“良好且测试/CI 基本可用已验证”的 4 计。

## 可扩展性

评分 4/5。

LiteParse 的扩展性主要体现在两个层面：一是多语言 bindings / WASM / CLI，方便嵌入不同运行环境；二是 OCR API 明确，可以接任意实现 `POST /ocr` 的 OCR server [Docs:ocr][GH:local-scan]。不给 5：它不是插件平台，扩展重点是 OCR 与 embedding surface，而不是任意 document pipeline plugin。

## 文档质量

评分 4/5。

官方 docs 覆盖 overview、getting started、library usage、CLI reference、OCR、multi-format、browser/WASM、agent skill 等 [Docs][Docs:getting-started][Docs:library][Docs:ocr]。仓库内还有 AGENTS.md、CONTRIBUTING.md、OCR_API_SPEC.md [GH:local-scan]。扣分点是文档中仍有一些快速演进痕迹，例如 CLI reference 的 screenshot 示例和 options 命名存在 `--target-pages` / `--pages` 不一致提示 [Docs:getting-started]。

## 社区与成熟度

| 维度 | 评分 | 说明 |
|------|------|------|
| 社区活跃度 | 3/5 | 7.8k stars、461 forks、18 contributors first page、issues/PR backlog 低；关注度不错但贡献者和生态仍早期 [GH:api][GH:contributors]。 |
| 成熟度 | 2/5 | 2026-02 创建，v2.0.4、多包 release 节奏很快；适合试用和跟踪，但不能按稳定多年项目对待 [GH:api][GH:releases]。 |

## 维护与发布风险

LiteParse 的 releases 数量不少，且 2026-05-30 同时出现 wasm/python/node/crates v2.0.4 相关 tag；这说明项目发布自动化和多包分发较活跃，但也意味着 API/bindings/安装路径仍可能快速变化 [GH:releases][GH:local-scan]。对 wiki 结论，应把它视为“值得跟踪的早期工具”，不是已经验证稳定的长期底座。

## 安全与风险

评分 3/5。

本次 repository advisory 查询为空；这只是本次查询未发现 repository advisory，不等于安全保证 [GH:advisories]。主要风险来自 document parser 的经典攻击面：恶意 PDF/Office/image、zip bomb/大文件 DoS、资源耗尽、文件名/路径处理、服务化上传。LiteParse 的 SECURITY.md 明确把 malicious input files、large/complex file DoS、server setup 安全排除在项目自身漏洞范围外，并建议服务化部署时做 upload validation、sandboxing、timeouts、concurrency limits、路径清洗 [GH:local-scan]。

因此本地可信文件处理风险相对较低，但仍依赖 PDFium/Tesseract/转换链本身的安全性；若对外提供 API，必须由部署层补安全边界。

## 未验证项

- 解析速度、峰值内存与 batch parse 吞吐。
- OCR 准确率、复杂表格、多栏、数学公式和扫描件质量。
- Python/Node/Rust/WASM 各入口的 API 稳定性。
- Docker runtime 行为和是否存在官方长期维护镜像。
- Windows/macOS 安装体验。

## 学习价值

较高。LiteParse 很适合学习“低层 document parser 如何为 agent/RAG 提供空间结构”：PDFium FFI、Rust core、多语言 bindings、selective OCR、bbox JSON、WASM/browser、本地安全边界。对 Develata，建议用同一组数学论文 PDF 做对比：LiteParse 看 bbox/速度，MarkItDown 看 Markdown 直出，Docling/MinerU/Marker 看复杂结构恢复。
