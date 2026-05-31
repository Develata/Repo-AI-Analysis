---
title: "MarkItDown"
created: 2026-05-31
updated: 2026-05-31
type: repository-analysis
repo_url: "https://github.com/microsoft/markitdown"
category: "document-processing"
tags: ["document-processing", "markdown", "pdf", "office", "llm", "mcp", "python", "microsoft"]
previous_repo: ""
successor: ""
primary_language: "Python"
license: "MIT"
stars: 131705
forks: 9022
last_checked: 2026-05-31
last_verified: 2026-05-31
evidence: "GitHub API + README/release extraction + local repository scan; conversion quality not independently benchmarked in this run"
archived_reason: ""
docker_support: true
gpu_required: false
estimated_cpu: "1-4 cores for ordinary conversion; OCR/audio/Azure-backed conversion depends on optional dependencies"
estimated_memory: "1-4GB for typical local conversion; larger PDFs/Office files may need more"
estimated_storage: "hundreds of MB to several GB depending on optional extras and Docker image"
status: active
sharing_candidate: true
ratings:
  capability: 4
  usability: 4
  performance: 3
  code_quality: 3
  documentation: 4
  community: 3
  maturity: 3
  extensibility: 4
  security: 3
  recommendation: 3
overall_score: 3.4
sources:
  - "[GH] https://github.com/microsoft/markitdown"
  - "[GH:api] https://api.github.com/repos/microsoft/markitdown queried 2026-05-31; stars=131705, forks=9022, language=Python, license=MIT, latest release v0.1.6, open issues=383, open PRs=376, releases=19, commits=309"
  - "[GH:languages] GitHub languages queried 2026-05-31; Python=437545 bytes, Dockerfile=1254 bytes"
  - "[GH:contributors] GitHub contributors endpoint queried 2026-05-31; first page count=78, top contributors include afourney=102 and gagb=70 commits"
  - "[GH:advisories] GitHub security advisories endpoint queried 2026-05-31; returned [] for repository advisories in this check"
  - "[GH:release] https://github.com/microsoft/markitdown/releases/tag/v0.1.6 extracted 2026-05-31; release adds OCR layer service, fixes PDF memory growth, clarifies security posture, adds Azure Content Understanding converter"
  - "[GH:local-scan] local clone /opt/data/tmp/repo-wiki-trending-2026-05-31/repos/markitdown at commit e144e0a2be95b34df17433bac904e635f2c5e551; files=163; checked README.md, SECURITY.md, CODE_OF_CONDUCT.md, SUPPORT.md, Dockerfile, packages/markitdown/pyproject.toml, packages/markitdown/tests/, packages/markitdown-mcp/README.md, packages/markitdown-mcp/Dockerfile, .github/workflows/; pyproject says Python >=3.10, MIT, beta classifier, optional extras for PDF/Office/audio/Youtube/Azure; tests and CI workflows present; SUPPORT.md still contains template TODO text"
  - "[GH:mcp-local] https://github.com/microsoft/markitdown/tree/main/packages/markitdown-mcp extracted 2026-05-31; MCP package exposes convert_to_markdown(uri), supports STDIO/Streamable HTTP/SSE, intended for local trusted agents, no authentication, localhost default, warns against non-local binding"
---

# MarkItDown

> Microsoft 仓库中 README 标注 Built by AutoGen Team 的轻量文件转 Markdown 工具，面向 LLM 与 text-analysis pipeline，而不是高保真人类排版转换。
>
> **状态**: `active` · **总分**: 3.4/5 · **推荐度**: 3/5
> **核验版本**: local clone commit `e144e0a2be95b34df17433bac904e635f2c5e551`；GitHub/API 快照 2026-05-31

## 一句话总结

MarkItDown 是 document-processing 板块中值得优先分析和试用的轻量 Markdown 转换器：许可友好、入口简单、MCP 适配直接，但复杂 PDF/OCR 能力不应高估 [GH][GH:mcp-local]。

## 总体评价

MarkItDown 的核心价值是把常见文档源转换成 LLM 友好的 Markdown。README 明确说它面向 LLMs and related text analysis pipelines，强调保留 headings、lists、tables、links 等重要结构，但也说明输出不是面向人类阅读的 high-fidelity conversion [GH]。

README 徽章标注 Built by AutoGen Team；这里仅作为来源/维护背景信号，不把它视为质量保证 [GH]。

它支持 PDF、PowerPoint、Word、Excel、图片 EXIF/OCR、音频 metadata/transcription、HTML、CSV/JSON/XML、ZIP、YouTube URLs、EPub 等输入 [GH]。从定位看，它更接近“LLM ingestion 前的轻量转换层”，不是 Docling/MinerU 那类完整 document intelligence pipeline。

最大优势是 adoption friction 低：MIT、Python package、CLI、Dockerfile、MCP server、Microsoft 维护背景。最大风险也写在 README 开头：MarkItDown 以当前进程权限做 I/O，`convert()` 等宽入口会读本地文件和网络资源；作为 agent tool 或服务暴露时必须做 sandbox、权限和 URI allowlist [GH][GH:mcp-local]。

## 推荐度：3/5

**定位**：面向个人知识库、agent/RAG ingestion、轻量多格式转 Markdown 的开发者和研究者。

推荐度 3/5。它值得收录，也适合在“本地可信、轻量 LLM ingestion”的条件下试用：尤其适合“先把材料变成 Markdown，再交给 LLM/agent”的 cheap first pass；但它不该替代专门的 OCR/layout/document intelligence 工具。对复杂数学论文、扫描件、表格/公式密集 PDF，要和 Docling、MinerU、Marker 做实测后再决定。本轮没有独立 benchmark 转换质量，因此评分表不把它列为强采用推荐。

## 优势

1. **入口简单**：`pip install 'markitdown'` 或安装 all extras 后运行 `markitdown path-to-file.pdf > document.md`，CLI 和 Python API 都直观 [GH]。
2. **格式覆盖广**：PDF、Office、图片、音频、HTML、结构化文本、ZIP、YouTube、EPub 等 [GH]。
3. **LLM 目标明确**：输出 Markdown，直接服务 indexing、text analysis、agent/RAG workflows [GH]。
4. **MCP 适配直接**：`markitdown-mcp` 暴露 `convert_to_markdown(uri)`，可接本地可信 agent [GH:mcp-local]。
5. **许可和治理基础较好**：MIT，Microsoft security policy、Code of Conduct、CI workflows、tests 存在 [GH:local-scan]。

## 劣势

1. **不是高保真转换器**：README 明确说输出主要供 text-analysis tools 消费，不一定适合人类排版级转换 [GH]。
2. **复杂 PDF/扫描件能力需实测**：v0.1.6 加入 OCR layer service，但本次未 benchmark 复杂数学文献或扫描件 [GH:release]。
3. **安全攻击面清楚但需要用户自己隔离**：本地文件、网络 URI、MCP HTTP/SSE、无认证组合在 agent 场景里风险较高 [GH][GH:mcp-local]。
4. **issue/PR backlog 不低**：API 快照显示 open issues=383、open PRs=376；说明真实场景需求和边缘 case 多 [GH:api]。
5. **仍是 beta 语义**：pyproject classifier 是 `Development Status :: 4 - Beta`，不宜假定长期 API 已完全稳定 [GH:local-scan]。

---

## 适合什么场景

- 个人文献、网页、Office 文档快速转 Markdown。
- 为 LLM、RAG、agent toolchain 准备 text input。
- 希望用 MCP 给本地可信 agent 加一个“把文件/URI 转 Markdown”的小工具。
- 需要 MIT 许可、轻量 Python CLI，而不是重模型 OCR pipeline。
- 在 Docling/MinerU/Marker 之前做 cheap first pass。

## 不适合什么场景

- 对扫描 PDF、复杂公式、双栏论文要求高准确率且不愿人工校对。
- 需要高保真 HTML/PDF/Office 排版复刻。
- 直接把 MCP HTTP/SSE 暴露给不可信网络或多用户环境。
- 生产服务中处理不可信文档但没有 sandbox、文件大小限制、URI allowlist。
- 需要稳定 1.0 API 承诺的长期企业基础设施。

## 与类似项目对比

| 项目 | 定位 | 相对本项目 |
|------|------|-----------|
| Docling | 通用 document intelligence framework | Docling 更重、更结构化、集成和 schema 更强；MarkItDown 更轻、更像 Markdown conversion utility |
| MinerU | 科学文献/复杂 PDF 到 Markdown/JSON | MinerU 更偏科学文献和 OCR/VLM pipeline；MarkItDown 更偏多格式轻量入口和 LLM 文本消费 |
| Marker | PDF/多格式转 Markdown/JSON，模型驱动转换 | Marker 更强调转换质量和模型能力但许可复杂；MarkItDown 许可友好、工程入口更简单 |
| LiteParse | 本地快速 PDF/document parser，输出 text/JSON+bbox | LiteParse 更重视 spatial text/bounding boxes 和本地快速解析；MarkItDown 更重视 Markdown 输出和广泛格式转写 |

上述项目按 `document-processing` 同类范围做定位级对比，主要依据本 wiki 既有同类条目和本轮 LiteParse 草稿作粗定位；未按同一 10 维度框架重新深审。

## 个人主页 sharing 候选

是。它适合放进“LLM-ready document ingestion 工具链”文章：MarkItDown 做轻量 Markdown first pass，Docling/MinerU/Marker/LiteParse 处理更复杂的版面、OCR 或结构化需求。

---

## 它能做什么

capability 评分 4/5。

MarkItDown 能：

- 把 PDF、Office、HTML、图片、音频、CSV/JSON/XML、ZIP、YouTube、EPub 等输入转换为 Markdown [GH]；
- 通过 optional extras 按需安装 PDF、Office、音频、YouTube、Azure Document Intelligence / Content Understanding 相关依赖 [GH:local-scan]；
- 提供 CLI、Python API 和 MCP server [GH][GH:mcp-local]；
- 用插件机制扩展 converter，适合 agent/RAG ingestion 前处理 [GH]。

不给 5：它的目标是轻量、结构保留和 Markdown 化，而不是最强 OCR、最强 layout recovery 或完整 document understanding。复杂 PDF 仍需和 Docling/MinerU/Marker/LiteParse 实测比较。

## 运行环境与资源占用

| 场景 | CPU | 内存 | 存储 | 说明 |
|------|-----|------|------|------|
| 文本/HTML/普通 Office | 1-2 cores | 1-2GB | 数百 MB | 估计值；基础 Python conversion |
| PDF/图片/音频 extras | 2-4 cores | 2-4GB+ | 1GB+ | 估计值；取决于 pdfplumber、ffmpeg、SpeechRecognition 等依赖 |
| MCP/Docker 本地工具 | 1-4 cores | 1-4GB | Docker image 级别 | 估计值；建议只给可信 agent 使用，必要时 mount 受限目录 |

- **运行时**：Python >=3.10；主包 MIT；optional extras 分 PDF/Office/audio/Youtube/Azure 等（source: [GH:local-scan]）。
- **操作系统**：Python 支持的平台；Dockerfile 基于 `python:3.13-slim-bullseye` [GH:local-scan]。
- **Docker**：仓库含主 Dockerfile 与 `packages/markitdown-mcp/Dockerfile`，可作为 CLI/MCP 容器入口 [GH:local-scan][GH:mcp-local]。
- **GPU**：不要求。
- **外部依赖**：可选 ffmpeg、exiftool、pdfplumber/pdfminer、Office parser、SpeechRecognition、Azure SDK 等 [GH:local-scan]。

performance 评分 3/5。本次未做吞吐、内存、转换质量 benchmark；资源表是基于依赖形态和 README/本地扫描作出的粗估计。MarkItDown 的轻量定位和 v0.1.6 对 PDF memory growth 的修复是正信号，但不足以支撑 performance 4 [GH:release][GH:local-scan]。

## 上手体验

评分 4/5。

安装、CLI 和 Python API 都很直接。README 给出 `pip install 'markitdown'`、all extras 安装、`markitdown path-to-file.pdf > document.md`、`MarkItDown().convert(...)` 等入口 [GH]。扣分点是：all extras 会拉入较多依赖；如果只想最小化攻击面和环境复杂度，需要按格式细分安装。

## 代码质量

评分 3/5。

local scan 显示包结构清楚，核心 converter registry、各格式 converter、MCP package、tests、CI workflows、SECURITY、CODE_OF_CONDUCT 都存在 [GH:local-scan]。v0.1.6 还修了 PDF conversion 的 O(n) memory growth 问题，说明维护者关注资源问题 [GH:release]。

但本次未跑完整测试/benchmark，也没有独立转换质量检查；项目仍是 beta/v0.1.6，SUPPORT.md 仍有模板 TODO，open PR 数较高，说明治理压力不小 [GH:api][GH:local-scan]。按评分边界，静态结构与维护信号支持 3，不足以在未验证时给 4。

## 可扩展性

评分 4/5。

MarkItDown 有 converter/plugin 取向，也提供 MCP server，让它容易塞进 agent/RAG workflow [GH][GH:mcp-local]。不给 5：扩展生态目前不像成熟框架那样形成稳定、大规模第三方插件市场；很多高级能力依赖 optional extras 或外部服务。

## 文档质量

评分 4/5。

README 覆盖定位、安装、CLI、Python API、plugins、MCP、安全注意事项；MCP README 也明确说明无认证、localhost 默认、Docker 运行、Claude Desktop/MCP Inspector 调试 [GH][GH:mcp-local]。扣分点是：主文档仍主要集中在 README，SUPPORT.md 模板痕迹明显 [GH:local-scan]。

## 社区与成熟度

| 维度 | 评分 | 说明 |
|------|------|------|
| 社区活跃度 | 3/5 | 131k stars、9k forks、78 contributors first page、Microsoft 背景，关注度极高；但 open issues/PR 都不少，且本轮未审查 issue/PR response latency。stars 是 visibility，不是质量或生产采用证明 [GH:api][GH:contributors]。 |
| 成熟度 | 3/5 | 2024-11 创建，v0.1.6、19 releases、beta classifier；能力在增长，但还不是长期稳定 1.0 工具。open issues/PR backlog 也意味着维护节奏和需求压力需要持续观察 [GH:api][GH:release][GH:local-scan]。 |

## 维护与发布风险

MarkItDown 的维护信号较强：Microsoft 仓库、v0.1.6、19 releases、CI/tests、近期 release 修复 PDF memory growth 并补充安全说明 [GH:api][GH:release][GH:local-scan]。但 open issues=383、open PRs=376，且项目仍是 beta classifier；因此适合积极试用和跟踪，不宜直接按长期稳定 1.0 底座对待。

## 安全与风险

评分 3/5。

本次 repository advisory 查询为空；这只是本次查询未发现 repository advisory，不等于安全保证 [GH:advisories]。安全风险主要来自设计边界而非已知漏洞：README 明确 MarkItDown 以当前进程权限做 I/O，可能访问本地文件和网络；MCP server 无认证，HTTP/SSE 默认 localhost，但同机其他进程/用户仍可能访问，且 `convert_to_markdown(uri)` 可读 server 用户可读文件和网络资源 [GH][GH:mcp-local]。

因此本地可信使用可接受；一旦作为服务或 agent tool 暴露给不可信输入，必须做 sandbox、只挂载必要目录、限制 URI scheme/host、限制文件大小/处理时间，并避免绑定非 localhost。

## 学习价值

较高。MarkItDown 不是最深的 document AI 项目，但很适合学习“LLM-friendly ingestion utility”如何取舍：轻量 Markdown 输出、format converters、optional extras、MCP 工具化、安全提示。对 Develata，最有价值的实验是拿同一批数学论文、Office 文档、网页，与 Docling/MinerU/Marker/LiteParse 比较输出可读性和后续 RAG 效果。
