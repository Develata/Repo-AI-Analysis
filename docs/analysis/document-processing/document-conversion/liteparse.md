---
title: "LiteParse"
created: 2026-05-31
updated: 2026-07-21
type: repository-analysis
repo_url: "https://github.com/run-llama/liteparse"
category: "document-processing/document-conversion"
tags: ["document-processing", "pdf", "ocr", "bounding-boxes", "rust", "python", "typescript", "wasm", "llamaindex"]
previous_repo: ""
successor: ""
primary_language: "Rust"
license: "Apache-2.0"
stars: 11702
forks: 791
last_checked: 2026-07-21
last_verified: 2026-07-21
evidence: "GitHub REST/GraphQL metadata, official docs, release notes and local repository scan at commit 86d7431c3196dc41f4fd416178d376a86a2f1820; parsing/Markdown/OCR quality, speed and resource use were not independently benchmarked"
archived_reason: ""
docker_support: true
gpu_required: false
estimated_cpu: "1-4 cores for native-text PDFs; OCR uses CPU workers by default and can call external OCR servers"
estimated_memory: "1-4GB for ordinary PDFs; larger OCR/batch workloads may need more"
estimated_storage: "hundreds of MB to several GB depending on PDFium/Tesseract/model data, bindings and Docker images"
status: active
ratings:
  capability: 4
  usability: 4
  performance: 3
  code_quality: 3
  documentation: 4
  community: 3
  maturity: 2
  extensibility: 4
  security: 3
  recommendation: 3
overall_score: 3.3
sources:
  - "[GH] https://github.com/run-llama/liteparse"
  - "[GH:api] GitHub REST/GraphQL snapshot 2026-07-21: canonical repo=run-llama/liteparse, archived=false, disabled=false, default_branch=main, head=86d7431c3196dc41f4fd416178d376a86a2f1820, pushed_at=2026-07-20T18:52:32Z, stars=11702, forks=791, open issues=11, open PRs=5, language=Rust, license=Apache-2.0, created_at=2026-02-09"
  - "[GH:languages] GitHub languages API snapshot 2026-07-21: Rust=1321527, Python=144462, Shell=35055, JavaScript=30543, TypeScript=22362, HTML=19626, Dockerfile=4735, Makefile=888, C=175"
  - "[GH:contributors] GitHub contributors endpoint queried 2026-07-21; first page count=30"
  - "[GH:advisories] GitHub repository security-advisories endpoint queried 2026-07-21; returned [] in this check"
  - "[GH:releases] GitHub releases API snapshot 2026-07-21: 124 release objects across crates/python/node/wasm/docker tracks; v2.7.0 artifacts published 2026-07-20; changes since v2.0.4 include Markdown rendering, complexity detection, word-level bbox, crop-box/diagonal-text options, list/table fixes and official GHCR images"
  - "[GH:local-scan] Local shallow clone /opt/data/tmp/github-repo-wiki-freshness-audit/evidence/repos/liteparse at commit 86d7431c3196dc41f4fd416178d376a86a2f1820; git ls-files=215, markdown/MDX=31, workflows=13, test-ish paths=6; checked README.md, Cargo.toml, SECURITY.md, CONTRIBUTING.md, AGENTS.md, OCR_API_SPEC.md, Dockerfiles, crates/ and packages/{python,node,wasm}/; Rust workspace exposes napi-rs, PyO3/maturin and wasm-bindgen bindings"
  - "[GH:python] packages/python/README.md local scan 2026-07-21: native Python binding installs with pip, includes the lit CLI, supports Markdown/JSON/text, bytes input, screenshots and is_complex; no Node.js runtime requirement is documented"
  - "[GH:docker] docker-v2.7.0 release 2026-07-20 publishes ghcr.io/run-llama/liteparse-base:v2.7.0 and ghcr.io/run-llama/liteparse:v2.7.0"
  - "[Docs] https://developers.llamaindex.ai/liteparse/ extracted 2026-07-21; docs describe local Rust parsing with spatial layout, OCR, bbox, Office/image inputs, screenshots, Markdown output and Node/Python/Rust/WASM access"
  - "[Docs:getting-started] Current repo/docs scan 2026-07-21: install via npm/pip/cargo/wasm; CLI supports parse, batch-parse, screenshot, is-complex, target pages and Markdown/JSON/text output"
  - "[Docs:library] Current repo/docs scan 2026-07-21: TypeScript and native PyO3 Python APIs accept paths or bytes and expose bbox, screenshots, Markdown and complexity detection"
  - "[Docs:ocr] Current repo/docs scan 2026-07-21: selective OCR, bundled Tesseract, HTTP OCR server support, worker controls and custom OCR API"
  - "[L1:markitdown] Local wiki comparison source: /opt/data/wiki/github-repo-wiki/document-processing/document-conversion/markitdown.md"
  - "[L1:docling] Local wiki comparison source: /opt/data/wiki/github-repo-wiki/document-processing/document-conversion/docling.md"
  - "[L1:mineru] Local wiki comparison source: /opt/data/wiki/github-repo-wiki/document-processing/document-conversion/mineru.md"
  - "[L1:marker] Local wiki comparison source: /opt/data/wiki/github-repo-wiki/document-processing/document-conversion/marker.md"
---

# LiteParse

> LlamaIndex 生态的本地轻量 document parser：Rust core，强调快速 PDF/text parsing、bounding boxes、selective OCR、多语言 bindings 和无云依赖。
>
> **状态**: `active` · **总分**: 3.3/5 · **推荐度**: 3/5
> **核验版本**: local clone commit `86d7431c3196dc41f4fd416178d376a86a2f1820` / multi-package `v2.7.0`；GitHub/API 快照 2026-07-21

## 一句话总结

LiteParse 已从“轻量本地解析 + bbox”扩展为可输出 Markdown、做 complexity routing、提供 native Python/Node/Rust/WASM bindings 的本地 parser；它值得用于 agent/RAG 前处理试验，但项目仍很新，质量与性能需用真实文档验证。

## 总体评价

LiteParse 的定位很清楚：fast, local PDF parsing with spatial text parsing, OCR, and bounding boxes；官方文档强调无 cloud dependencies、无 LLM、无 API keys，适合 real-time applications、coding agents 和 local workflows [Docs]。这与 Docling/MinerU/Marker 的“更重 document intelligence / OCR / Markdown conversion”形成互补。

它的技术路线偏工程化：Rust core、PDFium、selective OCR、grid projection、Markdown/JSON/text、complexity detection、page screenshots，并提供 Node.js/TypeScript、native Python、WASM、CLI 等入口 [GH][Docs][GH:python]。README 也诚实指出，复杂表格、多栏、图表、手写与扫描 PDF 更适合云端 LlamaParse [GH]。这说明 LiteParse 不是“全能文档理解”，而是本地、快速、结构坐标友好的 parser。

对 Develata 的价值在于：它可作为本地 agent/RAG pipeline 的 parser 候选，尤其当我们需要 Markdown + text items + bbox、页面截图、complexity routing 或浏览器/WASM。风险在于项目 2026-02 才创建，已快速推进到 v2.7.0；多 binding、多 artifact 的发布面仍需时间证明稳定性 [GH:api][GH:releases]。

## 推荐度：3/5

**定位**：面向需要本地快速 PDF/document parsing、坐标信息、agent/RAG 前处理的开发者。

推荐度保守给 3：如果需求是“本地、轻量、可嵌入、多语言、bbox-aware”，LiteParse 值得列入 tracking/trial；但在没有独立 benchmark 前，不建议作为复杂科学文献 OCR 或生产 ingestion 的默认答案。对数学论文和扫描件，应与 Docling/MinerU/Marker 做真实 A/B test。

## 优势

1. **本地无云依赖**：官方强调 no cloud dependencies, no LLMs, no API keys [Docs]。
2. **结构坐标与 Markdown 并存**：既输出 text items/bbox/spatial layout，也可重建 headings、tables、lists、images、links 的 Markdown，适合 visual citation 与 RAG ingestion [Docs][GH:python]。
3. **Rust core + 多语言 bindings**：Rust、Node.js/TypeScript、native PyO3 Python、WASM、CLI 都有入口 [GH:local-scan][GH:python]。
4. **OCR 设计可插拔**：内置 Tesseract.js，也可接 HTTP OCR server / EasyOCR / PaddleOCR / custom OCR API [Docs:ocr][GH:local-scan]。
5. **工程文档入口较全**：CONTRIBUTING、AGENTS、OCR API spec、官方 docs、CI/release workflows 都比较完整 [GH:local-scan]。

## 劣势

1. **项目非常新**：2026-02 创建，即使 release 多，也不等于成熟稳定 [GH:api]。
2. **复杂文档能力有明确上限**：README 自述复杂表格、多栏、图表、手写、扫描 PDF 更适合 LlamaParse 云服务 [GH]。
3. **Markdown 是空间重建，不是质量承诺**：官方明确说 reconstruction quality 随文档复杂度变化；没有独立 benchmark 时，不能把“支持 Markdown”直接等同高保真 [GH:python]。
4. **商业云产品导流存在**：README 把复杂场景导向 LlamaParse；这说明 OSS LiteParse 有意保持轻量 [GH]。
5. **安全边界仍需部署者负责**：SECURITY.md 不把恶意输入文件、大文件 DoS 等全部吸收为项目责任，服务化要自建 sandbox/resource limits [GH:local-scan]。

---

## 适合什么场景

- 本地 PDF 文本抽取，并需要 bounding boxes / spatial layout。
- agent/RAG pipeline 中需要 page screenshots 或 visual citation。
- Rust/Node/Python/WASM 多端共享 document parser。
- 不希望上传文档到云服务或调用 LLM 的本地 workflow。
- 需要把 OCR backend 换成 EasyOCR、PaddleOCR 或自定义 HTTP OCR server。

## 不适合什么场景

- 复杂数学公式、扫描件、手写材料要求高准确率且不愿后处理。
- 要求高保真 Markdown/HTML 且不愿用真实 corpus 做验收的场景；支持 Markdown 不等于复杂版面已可靠恢复。
- 要求项目已稳定运行多年、API 基本冻结的生产底座。
- 接收任意用户上传文档但无法部署 sandbox、timeouts、page limits、concurrency limits。

## 与类似项目对比

| 项目 | 定位 | 相对本项目 |
|------|------|-----------|
| MarkItDown | 多格式转 Markdown 的轻量 ingestion utility | MarkItDown 更关注 Markdown 与格式覆盖；LiteParse 更关注 spatial text/bbox 与本地 embedding [L1:markitdown] |
| Docling | 通用 document intelligence framework | Docling 的 schema/integration 面更宽；LiteParse 更偏轻量 bbox/截图 parser [L1:docling] |
| MinerU | 科学文献/复杂 PDF 到 Markdown/JSON | MinerU 更偏科学文献和 OCR/VLM；LiteParse 更偏本地坐标与多语言 binding [L1:mineru] |
| Marker | 模型驱动 PDF/多格式转 Markdown/JSON | Marker 更偏 Markdown conversion；LiteParse 更强调 no-cloud、bbox 与 Rust core [L1:marker] |

上述项目按 `document-processing/document-conversion` 同类范围做粗定位，主要依据本 wiki 既有同类条目和本轮 MarkItDown 草稿；未按同一 10 维度框架重新深审。

---

## 它能做什么

capability 评分 4/5。

LiteParse 能：

- 解析 PDF，返回 spatial layout 与 bounding boxes [Docs]；
- 把 spatial layout 重建为带 headings、tables、lists、images、links 的 Markdown，同时保留 JSON/text 输出 [Docs][GH:python]；
- 通过 LibreOffice / ImageMagick conversion 支持 DOCX、XLSX、PPTX、images 等非 PDF 输入 [GH][Docs]；
- 使用 selective OCR，只在原生文本不足或嵌入图片时 OCR [Docs:ocr]；
- 用 `is_complex` 做低成本 page-level routing，判断何时需要 OCR 或更重 parser [GH:python]；
- 输出 text 或 JSON，生成页面 screenshot [Docs:getting-started]；
- 提供 Rust/Node.js/TypeScript/Python/WASM/CLI 多入口 [GH][Docs:getting-started]；
- 通过 HTTP OCR API 接入自定义 OCR backend [Docs:ocr][GH:local-scan]。

不给 5/5：上述只是 feature surface；本次没有独立验证 Markdown/OCR 准确率、复杂 layout/table/math/scanned PDF 质量，且官方也把复杂场景导向 LlamaParse [GH][GH:python]。

## 运行环境与资源占用

| 场景 | CPU | 内存 | 存储 | 说明 |
|------|-----|------|------|------|
| 原生文本 PDF | 1-2 cores | 1-2GB | 数百 MB | 估计值；PDFium + Rust core，本次未实测速度 |
| OCR / screenshot | 2-4 cores | 2-4GB+ | 1GB+ | 估计值；Tesseract model、page rendering、worker 数影响资源 |
| 多格式 / Docker full | 2-4+ cores | 4GB+ | 数 GB | 估计值；full Dockerfile 加 LibreOffice/ImageMagick [GH:local-scan] |

- **运行时**：Rust core；Node.js/napi-rs、Python/PyO3、WASM/wasm-bindgen bindings；CLI 名为 `lit` [GH:local-scan][GH:python]。
- **操作系统**：官方 README 称 Linux、macOS Intel/ARM、Windows；WASM 可浏览器运行 [GH]。
- **Docker**：官方 release 发布 `liteparse-base` 与 `liteparse` GHCR images；仓库 Dockerfiles 覆盖 PDFium/Tesseract，并可加入 LibreOffice/ImageMagick [GH:docker][GH:local-scan]。
- **GPU**：不要求；若接外部 OCR server，可由外部 OCR backend 使用 GPU。
- **外部依赖**：PDFium、Tesseract/model data；多格式 conversion 需要 LibreOffice/ImageMagick。当前 Python package 是 PyO3 native binding，本轮未见 Node.js runtime requirement [GH:python][GH:local-scan]。

performance 评分 3/5。官方文档用 fast/local 描述项目定位，但本次没有独立跑吞吐、延迟、内存、批处理或跨平台安装测试；因此性能评价只能按“有潜力、待验证”处理 [Docs][GH:local-scan]。

## 上手体验

评分 4/5。

官方 docs 入口很清楚：`npm i -g @llamaindex/liteparse`、`pip install liteparse`、`cargo install liteparse`、`npm i @llamaindex/liteparse-wasm`，之后 `lit parse document.pdf` 即可开始 [Docs:getting-started]。CLI 支持 Markdown/JSON/text、target pages、batch parse、screenshot、`is-complex` 等路径 [Docs:getting-started][GH:python]。

扣分点：多格式和 OCR 场景仍涉及 LibreOffice/ImageMagick/Tesseract model；多 binding 与 PDFium native packaging 也会放大跨平台兼容面。本轮未实际安装任何 package。

## 代码质量

评分 3/5。

local scan 显示 Rust workspace 分层清楚：`pdfium-sys`、`pdfium`、`liteparse`、`liteparse-napi`、`liteparse-python`、`liteparse-wasm`；当前有 215 个 tracked files、13 个 workflows、6 个 test-ish paths [GH:local-scan]。CONTRIBUTING 还明确说明 binding crates 需要专门工具链，workspace-wide plain build 不是有效验证方式。

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
| 社区活跃度 | 3/5 | 11.7k stars、791 forks、30 contributors first page、11 open issues、5 open PRs；关注度不错但生态仍早期 [GH:api][GH:contributors]。 |
| 成熟度 | 2/5 | 2026-02 创建，当前 v2.7.0，多包 release 节奏很快；适合试用和跟踪，不能按稳定多年项目对待 [GH:api][GH:releases]。 |

### 维护与发布风险

LiteParse 当前有 124 个 release objects，部分只是同一版本的 crates/python/node/wasm/docker 多轨 artifact；不能把 release object 数直接等同 124 次独立产品迭代。v2.7.0 五类 artifact 同日发布说明自动化活跃，也说明 API/bindings/安装路径仍可能快速变化 [GH:releases]。

## 安全与风险

评分 3/5。

本次 repository advisory 查询为空；这只是本次查询未发现 repository advisory，不等于安全保证 [GH:advisories]。主要风险来自 document parser 的经典攻击面：恶意 PDF/Office/image、zip bomb/大文件 DoS、资源耗尽、文件名/路径处理、服务化上传。LiteParse 的 SECURITY.md 明确把 malicious input files、large/complex file DoS、server setup 安全排除在项目自身漏洞范围外，并建议服务化部署时做 upload validation、sandboxing、timeouts、concurrency limits、路径清洗 [GH:local-scan]。

因此本地可信文件处理风险相对较低，但仍依赖 PDFium/Tesseract/转换链本身的安全性；若对外提供 API，必须由部署层补安全边界。

### 未验证项

- 解析速度、峰值内存与 batch parse 吞吐。
- OCR 准确率、复杂表格、多栏、数学公式和扫描件质量。
- Python/Node/Rust/WASM 各入口的 API 稳定性，以及 Markdown reconstruction quality。
- Docker runtime 行为与 GHCR images 的长期维护承诺。
- Windows/macOS 安装体验。

## 学习价值

较高。LiteParse 很适合学习“低层 document parser 如何为 agent/RAG 提供空间结构”：PDFium FFI、Rust core、多语言 bindings、selective OCR、bbox JSON、WASM/browser、本地安全边界。对 Develata，建议用同一组数学论文 PDF 做对比：LiteParse 看 bbox/速度，MarkItDown 看 Markdown 直出，Docling/MinerU/Marker 看复杂结构恢复。
