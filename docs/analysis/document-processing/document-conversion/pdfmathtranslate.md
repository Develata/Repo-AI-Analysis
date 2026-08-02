---
title: "PDFMathTranslate"
created: 2026-08-02
updated: 2026-08-02
type: repository-analysis
repo_url: "https://github.com/PDFMathTranslate/PDFMathTranslate"
category: "document-processing/document-conversion"
tags: ["document-processing", "pdf", "translation", "scientific-literature", "layout", "math", "llm", "mcp", "python"]
previous_repo: "https://github.com/Byaidu/PDFMathTranslate"
successor: "https://github.com/PDFMathTranslate/PDFMathTranslate-next"
primary_language: "Python"
license: "AGPL-3.0"
stars: 35903
forks: 3205
last_checked: 2026-08-02
last_verified: 2026-08-02
evidence: "GitHub REST/GraphQL metadata + repository/docs/paper/release/package/image evidence + local shallow-clone static scan and compile-only check; no end-to-end translation, benchmark, container run, or public-service security test"
archived_reason: ""
docker_support: true
gpu_required: false
estimated_cpu: "2-4 cores for ordinary digital PDFs; long/complex documents and local translation models may benefit from 4-8+ cores"
estimated_memory: "2-8GB heuristic for ordinary use; larger PDFs, concurrent jobs, GUI/backend, or local models may require more"
estimated_storage: "1-3GB+ for package, layout model, container layers, cache and outputs; local LLM/model storage is additional"
status: active
ratings:
  capability: 4
  usability: 4
  performance: 3
  code_quality: 3
  documentation: 4
  community: 3
  maturity: 3
  extensibility: 4
  security: 2
  recommendation: 3
overall_score: 3.3
sources:
  - "[GH] https://github.com/PDFMathTranslate/PDFMathTranslate"
  - "[GH:api] GitHub REST snapshot 2026-08-02 UTC: canonical full_name=PDFMathTranslate/PDFMathTranslate, archived=false, disabled=false, default_branch=main, created_at=2024-09-06, pushed_at=2026-05-25, stars=35903, forks=3205, REST open_issues_count=142, primary language=Python, license=AGPL-3.0; https://github.com/Byaidu/PDFMathTranslate resolves to the same canonical repository"
  - "[GH:activity] GitHub GraphQL/search snapshot 2026-08-02 UTC: open issues=120, open PRs=22, releases=24, default-branch commit history totalCount=1144; REST open_issues_count reconciles as 120 issues + 22 PRs"
  - "[GH:issues] GitHub issue search sampled 2026-08-02 UTC; open issue titles include #19 scanned-document ghosting/OCR request, #958 large blank regions and formula flipping, #462 split words across lines, #681 weak PDF parsing/CAT request, and #942 complete ghosting; these are issue reports, not independently reproduced defects"
  - "[GH:release] GitHub releases checked 2026-08-02 UTC: latest stable v1.9.11 published 2025-07-11; release assets include 323026518-byte and 546221784-byte Windows ZIPs; 24 release objects exist in GraphQL snapshot"
  - "[GH:community] GitHub contributors/community endpoints checked 2026-08-02 UTC: contributors first page returned 54 entries; community health=50; README, AGPL license and Code of Conduct detected; CONTRIBUTING and pull-request template were not detected by the community profile"
  - "[GH:advisories] https://api.github.com/repos/PDFMathTranslate/PDFMathTranslate/security-advisories queried 2026-08-02 UTC; returned [] for published repository advisories in this check"
  - "[GH:readme] README.md at commit 44c4d5b332705797c1df17fadde2022e7c49f5de inspected 2026-08-02; documents layout-preserving scientific-PDF translation, CLI/Gradio/Windows/Docker/Zotero/MCP surfaces, official Docker images, online demos, translator selection, v1 fast versus experimental v2 precise mode, and the separate PDFMathTranslate-next lineage"
  - "[Local:scan] Local shallow clone /opt/data/tmp/repo-wiki-pdfmathtranslate-20260802 at commit 44c4d5b332705797c1df17fadde2022e7c49f5de; 77 tracked files, 26 Python files, 10 Markdown files, 6 workflows, 6 Python test files and 77 AST-counted test functions; python3 -m compileall -q pdf2zh exited 0 on Python 3.13, which is syntax compilation only and outside the declared runtime range"
  - "[Local:license] LICENSE and pyproject.toml inspected at commit 44c4d5b332705797c1df17fadde2022e7c49f5de; both identify AGPL-3.0, and LICENSE Section 13 says a modified version supporting remote network interaction must offer its Corresponding Source to those remote users; exact combined-work and unmodified-service obligations require legal review"
  - "[Local:ci] .github/workflows/python-test.yml inspected at commit 44c4d5b332705797c1df17fadde2022e7c49f5de; CI declares Python 3.11/3.12 on ubuntu-latest and ubuntu-24.04-arm, runs pytest, two PDF translation smokes, a GUI-start smoke and package build; this audit did not execute that dependency-heavy workflow"
  - "[Local:security] pdf2zh/{config.py,gui.py,backend.py,mcp_server.py}, docs/ADVANCED.md and docs/APIS.md inspected at commit 44c4d5b332705797c1df17fadde2022e7c49f5de; environment-derived translator secrets can be persisted as plain JSON under ~/.config/PDFMathTranslate/config.json; demo mode has reCAPTCHA, a 5MB Gradio/upload-or-URL limit and a 10-second URL request timeout, and ordinary Gradio can use optional users-file auth; ordinary GUI launch tries IPv6/0.0.0.0 before loopback; Flask HTTP routes show no authentication/size guard in backend.py; MCP accepts an absolute file path, writes outputs beside it, and its SSE transport defaults to 127.0.0.1 without an authentication layer in mcp_server.py"
  - "[Docs:advanced] docs/ADVANCED.md at commit 44c4d5b332705797c1df17fadde2022e7c49f5de inspected 2026-08-02; lists Google/Bing/DeepL/Ollama/OpenAI-compatible and many other translators, partial/batch translation, cache, custom prompts/config, simple GUI authorization, public-service settings and MCP setup"
  - "[Docs:api] docs/APIS.md at commit 44c4d5b332705797c1df17fadde2022e7c49f5de inspected 2026-08-02; documents Python stream/file APIs and a Flask/Celery/Redis HTTP task API"
  - "[DockerHub] https://hub.docker.com/v2/repositories/byaidu/pdf2zh/tags?page_size=5 queried 2026-08-02 UTC; official latest and 1.9.11 tags are active, with registry-reported Linux image sizes about 706-747MB across arm64/amd64; latest was pushed 2025-07-11"
  - "[PyPI] https://pypi.org/pypi/pdf2zh/json queried 2026-08-02 UTC; latest pdf2zh=1.9.11 uploaded 2025-07-11, requires_python=>=3.10,<3.13 and license_expression=AGPL-3.0; current repository pyproject.toml instead declares >=3.11,<3.13"
  - "[Successor] Current repository README/.gitmodules plus https://github.com/PDFMathTranslate/PDFMathTranslate-next and PyPI checked 2026-08-02 UTC; README calls the current repo the stable v1 lineage and PDFMathTranslate-next the v2 lineage, current main embeds next as an experimental isolated precise-kernel submodule, and PyPI pdf2zh-next latest=2.9.0 uploaded 2026-05-15"
  - "[ACL] https://aclanthology.org/2025.emnlp-demos.71.pdf extracted 2026-08-02; EMNLP 2025 system-demonstration paper describes layout detection → translation middleware → re-rendering, reports 23 translation services and 194 languages, gives a project-authored 1.47 sec/page comparison, and explicitly lists translation/layout-model dependence, weak scanned-PDF OCR and copyright concerns; performance claims were not reproduced in this audit"
  - "[L1:docling] Local wiki comparison source: /opt/data/wiki/github-repo-wiki/document-processing/document-conversion/docling.md"
  - "[L1:mineru] Local wiki comparison source: /opt/data/wiki/github-repo-wiki/document-processing/document-conversion/mineru.md"
  - "[L1:marker] Local wiki comparison source: /opt/data/wiki/github-repo-wiki/document-processing/document-conversion/marker.md"
---

# PDFMathTranslate

> 面向科学论文的 layout-preserving PDF 翻译工具：输出单语/双语 PDF，并接入多种机器翻译与 LLM backend。
>
> 📦 **Previously tracked as `Byaidu/PDFMathTranslate`** — repository 已转移到 `PDFMathTranslate` organization；本文使用 current canonical URL，并另列独立 v2 lineage。
>
> **状态**: `active` · **总分**: 3.3/5 · **推荐度**: 3/5
> **核验版本**: stable package `pdf2zh 1.9.11` / local main `44c4d5b332705797c1df17fadde2022e7c49f5de`；successor package `pdf2zh-next 2.9.0`；快照 2026-08-02
> **验证边界**: 本轮做了 GitHub/API、官方文档、论文、package/image 与 local static scan，并完成 syntax compile-only；未实际安装依赖、翻译 PDF、运行容器、复现 benchmark 或测试公网部署安全。

## 一句话总结

PDFMathTranslate 适合需要“翻译正文而尽量保留公式、图表与版面”的科研读者做可信 PDF 试用；但当前仓库是稳定 v1 与实验性 v2 bridge 并存的过渡载体，扫描件、复杂排版与服务化安全都不能免测。

## 总体评价

PDFMathTranslate 的中心任务不是把 PDF 抽成 Markdown，而是完成“layout detection → text translation → PDF re-rendering”，同时生成单语和双语 PDF。EMNLP 2025 demo paper 将其设计概括为 layout parser、translation middleware 与 streaming workflow，并报告 23 个服务、194 种语言；这些数字属于论文/项目方口径，本轮没有逐项执行验证 [ACL]。仓库 README 与 advanced docs 当前覆盖 Google、Bing、DeepL、Ollama、OpenAI-compatible、DeepSeek、Gemini、Dify 等 backend，并提供 CLI、Gradio GUI、Windows ZIP、Docker、Python/HTTP API、MCP 和社区 Zotero 插件入口 [GH:readme][Docs:advanced][Docs:api]。

它对数学文献有明确价值：公式、图表、目录和注释不是普通纯文本翻译器的强项，而 PDFMathTranslate 从一开始就把布局保留作为 product center。反面也同样明确：论文自己承认扫描 PDF 的 OCR 是限制；当前 open issues 仍可见重影、大片空白、公式翻转与断词等版面问题 [ACL][GH:issues]。因此“支持保留版面”应理解为设计目标和可用能力，不是对任意论文都高保真的保证。

版本边界是采用决策的关键。`pdf2zh 1.9.11` 仍是本仓库稳定 release/PyPI 版本；main 在 2026-03 加入以 isolated venv/subprocess 调用 `PDFMathTranslate-next` 的 experimental precise kernel，而 `pdf2zh-next 2.9.0` 已在独立仓库/PyPI 继续发布 [GH:release][PyPI][Successor]。但官方 README 同时把 next 称为 development-oriented、处理更多边缘 case、弱化兼容与社区贡献目标的 fork；所以 `successor` 表示 v2 lineage，不表示它已无条件替换稳定 v1。新部署应先决定采用 v1 stable、v1 中的 experimental bridge，还是直接评估 v2。

## 推荐度：3/5

**目标用户**：处理可信科学论文、需要保留公式与版面并愿意人工抽查输出的研究者、学生和个人知识工作者。

推荐度给 3：它非常贴合数学论文翻译需求，在线 demo、CLI、Windows 包和 Docker 也让首次试验较容易；但旧仓库的 v1/v2 分流、120 个 open issues、已知版面类报告、AGPL 对 modified network service 的源码提供义务，以及缺少完整 service-hardening 边界，使它更适合作为“拿真实 corpus 做 A/B 的候选”，不是无需验收的生产默认值 [GH:activity][GH:issues][Successor][Local:license][Local:security]。

对个人本地可信文档，可以积极试用 stable v1，并同时比较 current v2/BabelDOC 路线。对组织内部或公网服务，先做版本 pinning、输出质量验收、依赖与许可证审查、低权限隔离、上传/URL 限制、凭据治理和速率/资源限制；否则不建议开放给不可信用户。

## 优势

1. **问题定位准确**：不是仅翻译抽取文本，而是面向科学文档的 layout-preserving re-rendering [ACL]。
2. **输出直接可读**：可生成 translated monolingual 与 bilingual PDF，适合论文阅读而不是只服务 RAG [GH:readme][Docs:api]。
3. **translator 覆盖广**：传统 MT、云端 LLM、OpenAI-compatible 与 Ollama/Xinference 等本地路径并存 [Docs:advanced][ACL]。
4. **使用入口多**：online demo、CLI、Gradio、Windows ZIP、Docker、Python/HTTP API、MCP、Zotero ecosystem [GH:readme][Docs:api]。
5. **仓库声明并包含测试/CI 与发布基础**：workflow 配置了 pytest、PDF translation smoke、GUI-start smoke、Python 3.11/3.12 与 x86/ARM matrix，并发布 Windows 和 multi-arch container artifacts；本轮未执行该 CI [Local:ci][GH:release][DockerHub]。
6. **论文把限制写在明处**：translation model、layout detector、scanned-PDF OCR 与 copyright 风险均有公开讨论，便于建立正确预期 [ACL]。

## 劣势

1. **版本线分裂**：stable v1、main 中 experimental precise bridge、独立 `PDFMathTranslate-next` v2 同时存在，安装、配置、issue ownership 与长期维护边界不够单一 [Successor]。
2. **复杂版面仍有真实 issue 信号**：重影、空白、公式翻转、断词和扫描件 OCR 等问题不能被 README preview 抵消 [GH:issues]。
3. **安全边界偏弱**：没有检测到 SECURITY.md；凭据可能以 plain JSON 持久化；HTTP/Gradio/MCP surfaces 涉及文档、URL、绝对路径和 API keys，public deployment docs 没有形成完整 sandbox/least-privilege contract [GH:community][Local:security]。
4. **AGPL 影响服务化**：AGPL-3.0 Section 13 要求支持远程网络交互的 modified version 向远程用户提供其 Corresponding Source；是否构成修改/组合及义务范围必须做具体法务判断，不能简单外推为公开整个无关产品 [Local:license]。
5. **资源与质量缺少本轮实测**：layout model、PDF parser、字体、LibreOffice、translation provider 与可选本地模型共同决定延迟、内存和输出质量；项目方 benchmark 不能替代自己的 corpus [ACL]。
6. **文档存在一致性债务**：旧 owner URL、v1/v2 叙事、PyPI 与 current pyproject 的 Python 下限不同，advanced docs 还有把配置说明链到 ChatGPT share 的做法 [GH:readme][PyPI][Docs:advanced]。

---

## 适合什么场景

- 英文数学/统计/计算机论文翻译成中文，并保留公式、图表和双栏版面。
- 为课程阅读、组会或个人笔记生成单语/双语 PDF，且允许人工抽查。
- 在 Google/DeepL/LLM/Ollama 等 translator 之间做同文档 A/B test。
- Windows 用户希望先用 release ZIP，或团队希望用官方 Docker image 快速试验。
- 通过 Python API、HTTP task API 或 MCP 把“翻译 PDF”接入受控的个人 workflow。
- 研究 layout detection、translation middleware、caching 与 PDF re-rendering 的系统设计。

## 不适合什么场景

- 扫描件、手写材料或复杂历史 PDF 要求接近人工级 OCR/排版准确率，且不允许人工校对。
- 公网接收匿名上传或任意 URL，但没有 sandbox、allowlist、文件/页数/时间/并发限制。
- 需要把 API key 交给多用户 GUI/MCP，却没有独立 secret store 和 least-privilege credentials。
- 计划把 modified version 作为网络服务提供，却未完成 AGPL Section 13 与 combined-work 边界评估的闭源 SaaS。
- 需要一个已经冻结 API、单一仓库/单一版本线、长期无迁移成本的生产基础层。
- 只需要纯文本或 Markdown extraction；此时 Docling、MinerU、Marker、MarkItDown 或低层 PDF parser 更贴任务。

## 与类似项目对比

| 项目 | 定位 | 相对本项目 |
|------|------|-----------|
| Docling | 多格式 document intelligence 与结构化 ingestion framework | Docling 侧重解析、统一表示和 RAG/agent integration；PDFMathTranslate 侧重把译文重新排回可读 PDF [L1:docling] |
| MinerU | 科学文献/复杂文档到 Markdown/JSON 的解析 pipeline | MinerU 侧重科学文献 extraction；PDFMathTranslate 侧重多 translator 与单语/双语 PDF 输出 [L1:mineru] |
| Marker | 模型驱动的 PDF/多格式到 Markdown/JSON conversion | Marker 侧重 structured conversion；PDFMathTranslate 侧重 translation middleware 与 layout-preserving re-rendering [L1:marker] |

上述项目按 `document-processing/document-conversion` 同类范围做定位级对比，依据本地 wiki 既有条目而非本轮重新抓取竞品事实，未按同一 10 维度框架重审；它们多是相邻 parser/converter，不是 PDFMathTranslate 的一对一翻译竞品。

---

## 它能做什么

capability 评分 4/5。

PDFMathTranslate 当前可：

- 读取本地或远程 PDF，检测 layout、翻译正文，并生成 mono/dual PDF [GH:readme][Docs:api]；
- 尽量保留公式、图表、目录、注释与原始版面 [GH:readme][ACL]；
- 选择 source/target language、页码范围、translator、线程数、输出目录、兼容模式、字体/字符例外、custom prompt 与 cache policy [GH:readme][Docs:advanced]；
- 接入传统翻译服务、云端 LLM、OpenAI-compatible endpoint 和部分本地 model server [Docs:advanced]；
- 通过 CLI、GUI、Windows package、Docker、Python API、HTTP API、MCP 与 Zotero ecosystem 使用 [GH:readme][Docs:api]；
- 在 current main 中选择 legacy `fast` 或 experimental `precise` kernel，后者通过 isolated venv/subprocess bridge 调用 successor code [Successor][Local:scan]。

不给 5：能力面虽完整，但 scanned-PDF OCR 与复杂 layout 仍有明确边界，且 v2 主能力已分到 successor。功能存在不等于所有数学论文都稳定高保真，尤其不能从单个 preview 或 paper benchmark 推导普遍质量 [ACL][GH:issues]。

## 运行环境与资源占用

以下数字是基于依赖栈、官方 artifact 和 workflow 的容量规划估计，不是本轮 measured runtime benchmark。实际值由页数、图像分辨率、layout model、字体、并发、translator latency 与本地 LLM 决定。

| 场景 | CPU | 内存 | 存储 | 说明 |
|------|-----|------|------|------|
| 单份 digital PDF / 云端 translator | 2-4 cores | 2-4GB | 1-2GB+ | ONNX layout + PDF parsing；网络 translator 常是总延迟的重要部分 |
| 长文档 / batch / GUI | 4-8 cores | 4-8GB+ | 2-5GB+ | cache、临时文件、字体、LibreOffice 与并发会放大占用 |
| Docker stable v1 | 2-4+ cores | 4-8GB | registry image 约 706-747MB，落盘与 cache 更大 | 官方 multi-arch 1.9.11/latest image；本轮未 pull/run [DockerHub] |
| 本地 Ollama/Xinference/LLM | 取决于模型 | 取决于模型 | 模型权重另计 | PDFMathTranslate 本身不强制 GPU；本地 translator 的资源由所选模型决定 |

- **运行时**：current repository 要求 Python 3.11–3.12；PyPI 1.9.11 metadata 则写 Python 3.10–3.12，部署应以所选 artifact 实测并 pin [PyPI][Local:scan]。
- **操作系统**：Python package 标为 OS independent；官方主要提供 CLI/Gradio、Windows ZIP 与 Linux multi-arch container。macOS 可走 Python 路径，paper 还提到独立社区/桌面入口，但本轮未验证这些客户端 [GH:readme][ACL]。
- **Docker**：`docker_support: true`；README 明确给出 `byaidu/pdf2zh` 与 GHCR images，Docker Hub 当前仍有 active stable tags [GH:readme][DockerHub]。
- **GPU**：不要求；pyproject 提供 ONNX Runtime GPU/DirectML optional extras，默认 ONNX 路径可在 CPU 上运行 [Local:scan][ACL]。
- **外部依赖**：layout model、PyMuPDF/pdfminer/pikepdf/fontTools/OpenCV/ONNX Runtime、BabelDOC、可选 LibreOffice，以及选择的 translator/API 或本地 model server [Local:scan][Docs:advanced]。

performance 评分 3/5。paper 报告 1.47 sec/page，并描述 streaming、cache、concurrency 与 font subsetting，但这是项目方实验，不是本轮复现 [ACL]。架构上有合理优化，也有 layout model、PDF rewrite、translation network/model 的固有开销；在没有真实 corpus 的 cold-start、RSS、page throughput 和 output-size 数据前，按中性分处理。

## 上手体验

评分 4/5。

用户可从 public web demo、`uv tool install --python 3.12 pdf2zh`、`pip install pdf2zh`、`pdf2zh document.pdf`、Gradio、Windows ZIP 或 Docker 开始，路径明显比自己拼 layout detector、translator 和 PDF renderer 容易 [GH:readme]。CLI 参数、GUI、advanced usage 和 API docs 基本覆盖了日常需求 [Docs:advanced][Docs:api]。

扣分点是版本选择和依赖边界：v1 stable、experimental precise、v2 successor 需要先理解；首次运行可能下载 layout assets；translator credentials、font、LibreOffice、proxy 和 regional mirror 也会增加配置。PyPI/current pyproject 的 Python 下限不一致，进一步说明应使用隔离环境并固定版本 [PyPI][Successor]。

## 代码质量

评分 3/5。

local scan 显示项目规模不大但结构较完整：`pdf2zh/` 中分出 translator、layout、converter、cache、backend、MCP 与 kernel protocol/registry；6 个 test files 含 77 个 AST-counted test functions，6 个 workflows 覆盖 pytest、真实 PDF translation smoke、GUI start 与 package build [Local:scan][Local:ci]。syntax compile-only 在当前 Python 3.13 host 上通过；这只证明源码可解析，不证明受支持 Python、依赖或 runtime 正确 [Local:scan]。

保守给 3 而不是 4：本轮没有执行 pytest/end-to-end；120 个 open issues 中存在核心输出质量报告；current main 又增加 submodule、isolated venv、subprocess worker 和 v1→v2 mapping，显著扩大兼容面 [GH:activity][GH:issues][Successor]。现有 kernel tests 大量使用 mock，能验证 adapter contract，但不能替代真实 v2 installation 与 translation quality。

## 可扩展性

评分 4/5。

扩展面有三层：translator 通过 base class/独立实现接入，OpenAI-compatible endpoint 可覆盖未内置服务；Python/HTTP/MCP 让上层 workflow 调用翻译；current kernel registry 又为 v1 fast 与 v2 precise 提供 adapter boundary [ACL][Docs:advanced][Docs:api][Successor]。对研究者而言，替换 translator、prompt、layout model、page range、cache policy 都不必重写整个 pipeline。

不给 5：项目没有展示成熟的第三方 plugin marketplace 或长期稳定 extension API；许多 translator 仍集中在单个 Python module，v1→v2 映射也需要手工维护 service/env compatibility。深度扩展依然要求理解内部实现和两条版本线。

## 文档质量

评分 4/5。

README 有 English、简中、繁中、日文、韩文版本，并覆盖定位、安装、GUI、Windows、Docker、CLI options、API、版本分流与 citation；仓库还有 Advanced、API、GUI、proxy 与 Code of Conduct 文档，另有 EMNLP paper 解释 architecture 与 limitation [GH:readme][Docs:advanced][Docs:api][ACL]。对一个面向终端用户的科研工具，这些资料足以完成多数首次试验。

扣分点是 information architecture 一致性：canonical owner 已迁移，但不少链接仍指向旧 `Byaidu` URL；v2 被同时描述为“已正式发布”和 experimental precise mode；Python requirement 在 README/current pyproject 与 PyPI artifact 间有差异；部分关键配置说明依赖 ChatGPT share 链接。文档较全，但还不是 5/5 的单一、稳定、可审计入口 [GH:readme][PyPI][Docs:advanced][Successor]。

## 社区与成熟度

| 维度 | 评分 | 说明 |
|------|------|------|
| 社区活跃度 | 3/5 | 35,903 stars、3,205 forks、contributors endpoint first page 54 entries；有 Code of Conduct、issue templates 与 Zotero/translation-provider ecosystem，default branch 在 2026 有 push，当前有 22 个 open PR。120 个 open issues、community health=50、未检测到 repository CONTRIBUTING/PR template，且本轮未测 maintainer response/merge latency，证据不足以满足 4 分的“响应及时”边界；stars 只代表 visibility [GH:api][GH:activity][GH:community]。 |
| 成熟度 | 3/5 | 2024-09 创建，v1 已有 24 个 release objects 和稳定 1.9.11 artifact；但项目不足两年，stable package 自 2025-07 未再 release，v2 已转入 successor，同时 current main 仍在搭 bridge，说明 API/implementation lineage 尚未冻结 [GH:api][GH:release][Successor]。 |

不能把 v1 package 的稳定表象和 v2 的继续发布简单相加成“成熟度 4”：对采用者而言，真正重要的是未来维护、issue 修复与兼容性落在哪一条线。当前证据支持“有用户规模和可用稳定版，但正处于架构/仓库迁移期”。

## 安全与风险

评分 2/5。

本次 repository advisory endpoint 返回空数组，只表示未查到 published GHSA，不是安全证明 [GH:advisories]。项目的固有攻击面不小：解析 PDF/DOC/DOCX 和远程 URL、下载模型/字体、调用第三方 translation API、运行 Gradio/HTTP/Celery/Redis/MCP，并可能处理用户上传内容。对可信个人文档，这些风险可以通过本地隔离收敛；对多租户/公网服务则不能默认安全。

仓库并非完全没有局部控制：demo mode 配置 reCAPTCHA、5MB 文件/URL 下载限制和 10 秒 URL request timeout，普通 Gradio 可选 users-file auth，MCP SSE 默认 loopback [Local:security]。但这些控制没有形成跨 GUI/HTTP/MCP 的统一 hardening contract：`ConfigManager` 仍会把从 environment 读取的 translator values 写回 plain JSON；普通 GUI 会先尝试 IPv6/`0.0.0.0` 再回退 loopback；Flask API source 未见认证或 request-size guard；MCP tool 接受 absolute file path、读取该文件并在同目录写结果，且 SSE transport 本身没有认证层 [Local:security][Docs:advanced][Docs:api]。

因此给 2 而不是 3：这不是声称存在已知可利用 CVE，而是仓库同时鼓励 public/HTTP/MCP use，却把凭据持久化、文件权限和 hostile-document isolation 的关键责任留给部署者。建议只用受支持版本处理可信输入；服务化时使用低权限容器/worker、只读/临时目录、文件类型与大小/页数限制、task deadline/concurrency quota、URI scheme/host allowlist、独立 secret store、出网控制和人工审查。AGPL modified-network-service 义务与论文指出的文档版权问题也应作为上线门槛 [Local:license][ACL]。

## 学习价值

高。PDFMathTranslate 是一个比“PDF 转 Markdown”更完整的 systems case：它把 layout detection、translator abstraction、cache/concurrency、font handling、PDF mutation/re-rendering、GUI/API/MCP 与社区/商业可持续性放在同一条链路里 [ACL]。其 v1 stable → isolated v2 kernel → successor repository 的迁移方式，也适合研究如何在 Python dependency conflict 下用 protocol、venv 和 subprocess 做兼容桥。

对 Develata，最有价值的下一步不是再读 README，而是建立一个小型数学 PDF corpus：数字原生/扫描、单栏/双栏、公式密集、图表/脚注/参考文献各取样；同时比较 stable v1、pdf2zh-next、Docling/MinerU/Marker 加翻译后处理，记录文字准确率、公式破坏、reading order、版面偏移、每页延迟、峰值内存与人工修复时间。这样才能把推荐度从“资料审查 3/5”推进到真实 adoption judgment。
