---
title: "PDFMathTranslate-next"
created: 2026-08-02
updated: 2026-08-02
type: repository-analysis
repo_url: "https://github.com/PDFMathTranslate-next/PDFMathTranslate-next"
category: "document-processing/document-conversion"
tags: ["document-processing", "pdf", "translation", "scientific-literature", "layout", "babeldoc", "llm", "python", "webui", "docker"]
previous_repo: "https://github.com/awwaawwa/PDFMathTranslate"
successor: ""
primary_language: "Python"
license: "AGPL-3.0"
stars: 2863
forks: 168
last_checked: 2026-08-02
last_verified: 2026-08-02
evidence: "GitHub REST/GraphQL/release/advisory metadata + official README/docs/package/image evidence + local shallow-clone static scan and syntax compile-only check; no end-to-end PDF translation, benchmark, container run, or public-service security test"
archived_reason: ""
docker_support: true
gpu_required: false
estimated_cpu: "2-4 cores for ordinary digital PDFs; long documents, table/OCR compatibility paths, or local LLM translators may need more"
estimated_memory: "2-8GB heuristic for ordinary use; large PDFs, WebUI/batch translation, BabelDOC assets, or local models can require more"
estimated_storage: "Python package is small, but BabelDOC assets/fonts/cache/output and Docker images are substantial; Docker Hub latest reports 854803204-byte arm64 and 895782550-byte amd64 images"
status: active
ratings:
  capability: 4
  usability: 4
  performance: 3
  code_quality: 4
  documentation: 4
  community: 3
  maturity: 3
  extensibility: 4
  security: 2
  recommendation: 3
overall_score: 3.4
sources:
  - "[GH] https://github.com/PDFMathTranslate-next/PDFMathTranslate-next"
  - "[GH:api] GitHub REST/gh snapshot 2026-08-02 UTC: full_name=PDFMathTranslate-next/PDFMathTranslate-next, html_url=https://github.com/PDFMathTranslate-next/PDFMathTranslate-next, archived=false, disabled=false, default_branch=main, created_at=2025-06-04, pushed_at=2026-05-15, stars=2863, forks=168, REST open_issues_count=80, primary language=Python, license=AGPL-3.0, isFork=true, parent=awwaawwa/PDFMathTranslate, homepage=https://pdf2zh-next.com, diskUsage=85421KB"
  - "[GH:activity] GitHub GraphQL snapshot 2026-08-02 UTC: open issues=68, open PRs=12, releases=39, latest release v2.9.0 published 2026-05-15, default-branch commit history totalCount=1798, HEAD=f8dffcf4c3a33b254391d43514439b975ce8d966 committed 2026-05-15; REST open_issues_count reconciles as 68 issues + 12 PRs"
  - "[GH:issues] GitHub issue list sampled 2026-08-02 UTC; open issue titles include #342 two-column PDF output has large blank regions, #326 Docker v2.8.2 can hang/out-of-memory for a specific PDF, #323 partial text not translated, #321 not all elements in same column are translated, #313 BabelDOC bilingual layout second-page translation disappears, and #330 too many CID chars; these are user reports, not independently reproduced defects"
  - "[GH:release] GitHub latest release checked 2026-08-02 UTC: v2.9.0 published 2026-05-15; assets include Windows ZIPs with names pdf2zh-v2.9.0-BabelDOC-v0.6.2/0.6.3/0.6.4, both with-assets and without-assets variants, with sizes from 397814163 to 660578818 bytes; release notes mention DeepSeek v4 thinking controls, Windows PyStand popup fix and WebUI rate-limit/usability fixes"
  - "[GH:community] GitHub contributors endpoint checked 2026-08-02 UTC: first page returned 30 contributor entries; local tree contains multilingual CODE_OF_CONDUCT.md under docs/, but no top-level SECURITY.md or CONTRIBUTING.md was found in this scan"
  - "[GH:advisories] https://api.github.com/repos/PDFMathTranslate-next/PDFMathTranslate-next/security-advisories queried 2026-08-02 UTC; returned [] for published repository advisories in this check"
  - "[GH:readme] README.md at f8dffcf4c3a33b254391d43514439b975ce8d966 inspected 2026-08-02; documents layout-preserving PDF scientific-paper translation, formula/chart/table-of-contents/annotation preservation goals, BabelDOC basis, CLI/WebUI/Docker/Windows EXE/uv paths, multiple languages, translation services, Python API, AGPL no-warranty warning and limited maintainer support"
  - "[Docs:docker] https://pdf2zh-next.com/getting-started/INSTALLATION_docker.html extracted 2026-08-02; documents Docker Hub image awwaawwa/pdfmathtranslate-next, GHCR image ghcr.io/pdfmathtranslate-next/pdfmathtranslate-next and WebUI on port 7860"
  - "[Docs:services] https://pdf2zh-next.com/advanced/Documentation-of-Translation-Services.html extracted 2026-08-02; documents Tier 1 engines SiliconFlowFree/OpenAI/AliyunDashScope/DeepSeek/SiliconFlow/Zhipu/OpenAICompatible, community-supported Tier 2 engines, and deprecated Bing/Google engines"
  - "[PyPI] https://pypi.org/pypi/pdf2zh-next/json extracted 2026-08-02 UTC: latest pdf2zh-next=2.9.0 uploaded 2026-05-15, wheel filename pdf2zh_next-2.9.0-py3-none-any.whl size=155402 bytes, sdist size=7759383 bytes, requires_python=>=3.10,<3.14, vulnerabilities=[] in the PyPI JSON response"
  - "[DockerHub] https://hub.docker.com/v2/repositories/awwaawwa/pdfmathtranslate-next/tags?page_size=5 extracted 2026-08-02 UTC: tag count=104; latest and v2.9.0-babeldoc-v0.6.4 active, last_updated 2026-07-16, arm64 image size=854803204 bytes and amd64 image size=895782550 bytes"
  - "[Local:scan] Local shallow clone /opt/data/tmp/repo-wiki-pdf2zh-20260802/pdfmathtranslate-next at commit f8dffcf4c3a33b254391d43514439b975ce8d966; total files=417, Python files=42, Markdown files=240, workflows=10, test-ish files=7, AST-counted Python test functions=99; python3 -m compileall -q pdf2zh_next exited 0 on Python 3.13, which is syntax compilation only"
  - "[Local:pyproject] pyproject.toml inspected at f8dffcf4c3a33b254391d43514439b975ce8d966: project name=pdf2zh-next, version=2.9.0, license=AGPL-3.0, requires-python=>=3.10,<3.14, console scripts pdf2zh/pdf2zh2/pdf2zh_next, dependencies include BabelDOC>=0.6.2,<0.7.0, PyMuPDF<1.25.3, gradio<5.36, FastAPI/Uvicorn/SSE-Starlette/httpx/pydantic-settings/openai/deepl/ollama/xinference and other translator clients; dev group includes pytest, ruff, pre-commit, build and MkDocs tooling"
  - "[Local:ci] .github/workflows inspected at f8dffcf4c3a33b254391d43514439b975ce8d966: python-test.yml runs uv sync, pytest, two real PDF CLI translation smokes, GUI-start smoke and package build across Python 3.10/3.11/3.12/3.13 on ubuntu-latest and ubuntu-24.04-arm; release.yml publishes PyPI/TestPyPI packages, Windows EXE artifacts and Docker images; codeql.yml scans Python and GitHub Actions; this audit did not execute CI dependency tests"
  - "[Local:docs] docs/en/getting-started and docs/en/advanced inspected at f8dffcf4c3a33b254391d43514439b975ce8d966: command-line usage is pdf2zh_next document.pdf, WebUI starts with pdf2zh_next --gui at localhost:7860, advanced docs enumerate CLI/GUI options including pages, qps, pool workers, prompts, glossary, table translation, OCR workaround, auth-file, share and disable-config-auto-save, and Python API do_translate_async_stream yields progress/error/finish events"
  - "[Local:security] pdf2zh_next/gui.py, main.py, config/main.py, config/translate_engine_model.py, docs/en/advanced/advanced.md and Dockerfile inspected at f8dffcf4c3a33b254391d43514439b975ce8d966: GUI launch binds 0.0.0.0 first and 127.0.0.1 on fallback, auth_file is optional, share can be enabled, URL download uses requests timeout=10 and only applies a size limit when one is supplied, GUI option disable_config_auto_save exists but default config has disable_config_auto_save=false, password/sensitive GUI fields are masked, config TOML can contain API keys, Dockerfile exposes 7860 and runs pdf2zh --gui, and http_api.py is empty/not a running API surface in this commit"
  - "[Local:license] LICENSE and pyproject.toml inspected at f8dffcf4c3a33b254391d43514439b975ce8d966; both identify AGPL-3.0, whose Section 13 targets remote network interaction with modified versions; exact combined-work/service obligations require legal review"
  - "[L1:pdfmathtranslate] Local wiki comparison source: /opt/data/wiki/github-repo-wiki/document-processing/document-conversion/pdfmathtranslate.md"
  - "[L1:docling] Local wiki comparison source: /opt/data/wiki/github-repo-wiki/document-processing/document-conversion/docling.md"
  - "[L1:mineru] Local wiki comparison source: /opt/data/wiki/github-repo-wiki/document-processing/document-conversion/mineru.md"
  - "[L1:marker] Local wiki comparison source: /opt/data/wiki/github-repo-wiki/document-processing/document-conversion/marker.md"
---

# PDFMathTranslate-next

> 基于 BabelDOC 的 PDF 科学论文全文翻译与双语对照工具，是 PDFMathTranslate v2 线的独立实现与 BabelDOC 调用参考实现。
>
> **状态**: `active` · **总分**: 3.4/5 · **推荐度**: 3/5
> **核验版本**: `pdf2zh-next 2.9.0` / local main `f8dffcf4c3a33b254391d43514439b975ce8d966`；快照 2026-08-02
> **验证边界**: 本轮做了 GitHub/API、官方 docs、PyPI、Docker Hub、release 与 local static scan，并完成 syntax compile-only；未实际安装依赖、翻译 PDF、运行容器、复现 benchmark 或测试公网部署安全。

## 一句话总结

PDFMathTranslate-next 适合愿意使用 v2/BabelDOC 路线、需要公式/图表/版面尽量保留的科研 PDF 翻译用户；但它仍应按“可信本地文档 + 真实 corpus 验收”的工具处理，而不是无审计的公网 PDF 服务底座。

## 总体评价

PDFMathTranslate-next 的中心定位很清楚：把科学论文 PDF 翻译成单语/双语 PDF，同时尽量保留公式、图表、目录、注释与页面结构 [GH:readme]。与旧 `PDFMathTranslate` v1 相比，它把 BabelDOC 放在更中心的位置；README 直接说明项目基于 BabelDOC，并且也是调用 BabelDOC 做 PDF 翻译的官方参考实现 [GH:readme]。

能力面比 v1 更贴当前 LLM 翻译工作流：Python package、Windows ZIP、Docker、WebUI、CLI、Python async event-stream API、glossary、table-translation、OCR workaround、qps/pool worker、custom prompt、OpenAI-compatible、本地 Ollama/Xinference 与多个中国大陆常用 provider 都有文档或源码入口 [Docs:services][Local:docs][Local:pyproject]。这使它很适合 Develata 关心的数学论文阅读场景：先把真实数学 PDF corpus 跑起来，再比较公式破坏、reading order、表格/脚注处理和每页成本。

但它不是“已经完全成熟的论文翻译基础设施”。仓库 2025-06 创建、当前 39 个 release、open issues=68、open PRs=12；issue 样本仍包含双栏大面积空白、特定 PDF Docker 卡死/OOM、部分文本未翻译、CID 字符等核心质量问题 [GH:activity][GH:issues]。维护者还明确写出 limited support / no warranty，这对开源维护是可以理解的诚实边界，但对组织采用意味着必须自己做验收、隔离和长期版本 pinning [GH:readme]。

## 推荐度：3/5

**目标用户**：需要在本地或受控环境翻译可信科研 PDF、并愿意人工抽查输出质量的研究者、学生和个人知识工作者。

推荐度给 3：PDFMathTranslate-next 是当前 PDFMathTranslate 生态中值得列入优先实测候选的 v2/BabelDOC 路线，尤其适合数学/统计/计算机论文的 bilingual reading workflow；但由于安全边界、复杂版面 bug 信号、资源占用和 AGPL 服务化义务都不轻，它还不能作为“直接接收不可信 PDF/URL 的生产服务默认方案” [GH:issues][Local:security][Local:license]。

个人本地使用可以积极试：用 Docker/uv/Windows ZIP 任一路径 pin 到 v2.9.0，准备 10–20 篇代表性论文，记录译文完整性、公式偏移、表格、脚注、参考文献、每页时间、失败率和 token 成本。组织或公网服务应先补齐 sandbox、文件/页数/时间/并发限制、URI allowlist、secret store、日志脱敏和 AGPL 合规评估；否则“能跑”不等于“可上线”。

## 优势

1. **问题定位正中科研阅读痛点**：它不是普通 PDF text extraction，而是以 layout-preserving translation 和 bilingual comparison 为目标 [GH:readme]。
2. **BabelDOC 线更清楚**：项目直接声明基于 BabelDOC，并作为 BabelDOC 调用参考实现；这比旧 v1 bridge 更集中 [GH:readme]。
3. **入口丰富**：CLI、WebUI、Docker、Windows ZIP、uv/PyPI、Python async API 都有入口 [GH:readme][Docs:docker][Local:docs][PyPI]。
4. **translator 面向 LLM 时代**：Tier 1 支持 OpenAI、DeepSeek、SiliconFlow、AliyunDashScope、Zhipu、OpenAICompatible 等；其他 engine 走社区支持 [Docs:services]。
5. **工程信号比普通小工具强**：CI 覆盖 Python 3.10–3.13、x86/ARM、pytest、PDF translation smoke、GUI start、package build、CodeQL 与 release pipeline；本轮只静态核验，没有执行完整 CI [Local:ci]。
6. **API 有可消费的进度事件**：`do_translate_async_stream` 文档定义 progress/error/finish event contract，适合上层 UI/agent workflow 接入 [Local:docs]。

## 劣势

1. **复杂 PDF 输出质量仍需实测**：issue 样本显示双栏空白、未翻译、CID 字符、BabelDOC 对照页消失等问题仍存在 [GH:issues]。
2. **资源与冷启动成本不低**：BabelDOC assets、字体、PDF 处理、WebUI、Docker image 和本地 LLM translator 会共同放大存储、内存和延迟；Docker Hub latest 已是数亿字节级镜像 [DockerHub]。
3. **安全边界不宜公网默认暴露**：GUI 默认先绑定 `0.0.0.0`，auth optional，Dockerfile 暴露 7860，URL download size_limit 不是默认强制，配置文件可包含 API key [Local:security]。
4. **维护策略偏“自助使用”**：README 明确 limited support，translation engines 也分 Tier 1 / Tier 2 / deprecated；用户需要自己承担 provider 失效和质量回归 [GH:readme][Docs:services]。
5. **AGPL 影响服务化决策**：modified network service 需要独立法务判断，不能把它当 MIT/Apache 工具随意嵌入闭源 SaaS [Local:license]。
6. **文档较全但有 AI/i18n 与版本同步压力**：docs 自承可能含 AI-generated content，且多语言文档与快速 release 容易产生边缘不一致 [Local:docs]。

---

## 适合什么场景

- 本地翻译英文数学、统计、CS 论文，输出中文单语 PDF 或中英双语 PDF。
- 需要保留公式、图表、目录、注释和双栏版面，而不仅是得到纯文本。
- 在 DeepSeek/OpenAI-compatible/SiliconFlow/Ollama/Xinference 等 translator 之间做同文档 A/B test。
- 以 Python async event stream 接入自己的 WebUI、桌面工具或 agent workflow。
- 用 Docker/Windows ZIP 给非 Python 用户做受控试用。
- 学习 BabelDOC-based PDF translation pipeline、glossary extraction、table translation 与 rate-limit/concurrency 配置。

## 不适合什么场景

- 对扫描件、手写材料、排版极复杂论文要求接近人工级 OCR 和公式版面准确率，且不能人工校对。
- 公网接收匿名 PDF 上传或任意 URL 下载，但没有 sandbox、大小/页数限制、任务 deadline、出网 allowlist 和鉴权。
- 多用户共享 API key，且没有独立 secret store、审计日志和权限隔离。
- 需要长期冻结 API、强 SLA、maintainer usage support 的组织基础设施。
- 闭源商业服务计划修改后通过网络提供，但尚未做 AGPL Section 13 与 combined-work 义务评估。
- 只需要 PDF/Office 转 Markdown 或 RAG ingestion；此时 Docling、MinerU、Marker、MarkItDown 等更贴任务。

## 与类似项目对比

| 项目 | 定位 | 相对本项目 |
|------|------|-----------|
| PDFMathTranslate | v1 PDF 翻译工具，已有稳定包与更长用户积累 | PDFMathTranslate-next 更偏 v2/BabelDOC 当前路线；旧 v1 更像稳定 lineage 与兼容参照 [L1:pdfmathtranslate] |
| Docling | 多格式 document intelligence 与结构化 ingestion framework | Docling 侧重解析、统一表示和 RAG/agent integration；PDFMathTranslate-next 侧重把译文重新排回可读 PDF [L1:docling] |
| MinerU | 科学文献/复杂文档到 Markdown/JSON 的解析 pipeline | MinerU 侧重科学文献 extraction/OCR/layout；PDFMathTranslate-next 侧重 translation middleware 与单语/双语 PDF 输出 [L1:mineru] |
| Marker | 模型驱动的 PDF/多格式到 Markdown/JSON conversion | Marker 侧重 structured conversion；PDFMathTranslate-next 侧重 BabelDOC translation 与 PDF re-rendering [L1:marker] |

上述项目按 `document-processing/document-conversion` 同类范围做定位级对比，主要依据本地 wiki 既有条目和本轮 PDFMathTranslate-next 来源；未按同一 10 维度框架重新深审全部竞品。

---

## 它能做什么

capability 评分 4/5。

PDFMathTranslate-next 能：

- 读取 PDF，生成 monolingual translated PDF 与 bilingual PDF [GH:readme][Local:docs]；
- 尽量保留公式、图表、目录、注释和原始版式 [GH:readme]；
- 通过 CLI 指定页码、语言、输出目录、qps、pool worker、prompt、glossary、table translation、OCR workaround、水印模式、compatibility options 等 [Local:docs]；
- 通过 WebUI 上传文件或链接，并用 Gradio PDF 预览结果 [Local:docs][Local:security]；
- 接入 SiliconFlowFree、OpenAI、DeepSeek、AliyunDashScope、Zhipu、OpenAICompatible、Ollama、Xinference、DeepL 等 translator family，其中官方维护与社区维护有分层 [Docs:services][Local:pyproject]；
- 通过 Python API 的 async event stream 构建自定义 UI/CLI，上层可处理 progress/error/finish [Local:docs]；
- 通过 Docker Hub/GHCR 或 Windows ZIP 降低非 Python 用户上手门槛 [Docs:docker][GH:release][DockerHub]。

不给 5：这些能力覆盖面很强，但复杂版面质量、扫描/OCR、表格、CID 字符、Docker memory behavior 等仍有 open issue 信号；本轮也没有跑真实 PDF corpus 验证 [GH:issues]。

## 运行环境与资源占用

以下为基于官方文档、package metadata、Docker registry 与依赖栈的容量估计，不是本轮 measured benchmark。实际消耗由 PDF 页数/图片分辨率、BabelDOC assets、字体、translator latency、本地模型和并发设置决定。

| 场景 | CPU | 内存 | 存储 | 说明 |
|------|-----|------|------|------|
| 单份 digital PDF / 云端 translator | 2-4 cores | 2-4GB | 包体小，但 assets/cache/output 另计 | PyPI wheel 155402 bytes；首次运行可能下载 BabelDOC assets [PyPI][Local:pyproject] |
| WebUI / batch / 大 PDF | 4-8 cores | 4-8GB+ | 临时目录、zip 输出、字体和 cache 会增长 | qps/pool worker 与 PDF 图像会放大峰值；本轮未测 RSS [Local:docs] |
| Docker WebUI | 2-4+ cores | 4-8GB | Docker Hub latest arm64=854803204 bytes, amd64=895782550 bytes | 官方 docs 显示 `docker run -p 7860:7860` [Docs:docker][DockerHub] |
| 本地 Ollama/Xinference/LLM | 取决于模型 | 取决于模型 | 模型权重另计 | PDFMathTranslate-next 本身不强制 GPU；本地 translator 的实际价值可能依赖 GPU/加速器 |

- **运行时**：PyPI 与 pyproject 均为 Python `>=3.10,<3.14`；CI 覆盖 Python 3.10–3.13 [PyPI][Local:ci]。
- **操作系统**：Python package 标为 OS independent；README/文档给 Windows EXE、Docker Linux、uv/macOS 等路径 [GH:readme][Docs:docker]。
- **Docker**：`docker_support: true`；官方 docs 与 release workflow 均指向 Docker Hub/GHCR user-facing images [Docs:docker][Local:ci][DockerHub]。
- **GPU**：不要求；GPU 需求主要来自你选的本地 translator/model，不是 PDFMathTranslate-next core。
- **外部依赖**：BabelDOC、PyMuPDF、fontTools、Gradio、FastAPI/Uvicorn/SSE-Starlette、translation provider credentials、本地 model server 或云端 API [Local:pyproject]。

performance 评分 3/5。项目有 streaming/progress、cache、rate-limit 和 split/part 相关设计面，但本轮没有复现每页吞吐、冷启动、峰值内存或 Docker 容器表现；open issue 中还存在 Docker 卡死/OOM 报告。按评分边界只能给中性分 [GH:issues][Local:docs]。

## 上手体验

评分 4/5。

首次试用路径很多：`pdf2zh_next document.pdf`、`pdf2zh_next --gui`、Docker `-p 7860:7860`、Windows with-assets ZIP、PyPI/uv 安装，文档也把 WebUI、CLI、Docker 和 Python API 分开解释 [GH:readme][Docs:docker][Local:docs][PyPI]。对个人用户，这比自己拼 layout parser、renderer、translator 和字体资产容易得多。

扣分点在于真实使用不是零配置：translator 需要 key/model/base URL/qps/pool worker；本地服务需要 Ollama/Xinference host；Docker 和 WebUI 涉及端口、安全和 assets；Bing/Google 已在 service policy 中 deprecated；不同 engine 的质量/限流差异需要读文档 [Docs:services][Local:docs]。因此上手体验好，但不是 5/5 的“无脑默认”。

## 代码质量

评分 4/5。

静态结构和 CI 信号较好：local scan 有 42 个 Python 文件、240 个 Markdown 文件、10 个 workflow、7 个 test-ish 文件、99 个 AST-counted Python test functions；`python3 -m compileall -q pdf2zh_next` 在本机 Python 3.13 通过 syntax compile-only [Local:scan]。`pyproject.toml` 使用 pydantic-settings、ruff、pytest、pre-commit、hatchling，CI 在多 Python/multi-arch 上跑 pytest、两份 PDF translation smoke、GUI start smoke、build，并且 release pipeline 构建 PyPI、Windows EXE 与 Docker [Local:pyproject][Local:ci]。

保守不给 5：本轮没有实际执行 `uv sync`、pytest、PDF 翻译或容器；open issue 包含核心输出质量和资源问题；`gui.py` 单文件很大，WebUI、translator config、文件处理、session/output 逻辑集中度较高 [GH:issues][Local:security]。代码质量对贡献者来说是“可维护且有测试/CI”的 4，而不是“架构极简、覆盖率明确 ≥80%”的 5。

## 可扩展性

评分 4/5。

扩展面明确：translator settings/model/implementation 分层，OpenAI-compatible 覆盖大量 provider；CLI/env/config TOML、WebUI、Docker 和 Python async API 给了不同集成层；`do_translate_async_stream` 的 event contract 适合被 Zotero 插件、个人 assistant 或批处理系统消费 [Local:pyproject][Local:docs]。BabelDOC 作为后端也把 layout/PDF re-rendering 复杂度封装在专门层。

不给 5：它没有成熟的第三方 plugin marketplace 或稳定长期 extension API；贡献指南还明确不接受 core infrastructure / HTTP API 相关贡献、低 RPS 或不稳定 translator、reverse-engineered API translator 等 [Local:docs]。这有利于维护边界，但也说明深度扩展仍要遵循 maintainer policy 或自行 fork。

## 文档质量

评分 4/5。

README、MkDocs 文档和多语言资料覆盖完整：安装、CLI、WebUI、Docker、translation services、advanced options、Python API、language codes、contribution policy、Code of Conduct 都能找到 [GH:readme][Docs:docker][Docs:services][Local:docs]。对普通用户，文档足以完成“安装 → 配 translator → 翻译一篇 PDF”的闭环。

扣分点是可靠性与同步压力：docs 明确提示可能包含 AI-generated content；translation engine policy 需要和快速 release 同步；多语言文档增加漂移风险；WebUI/CLI/Windows/Docker/Python API 的路径很多，用户需要先判断自己的主路径 [Local:docs][Docs:services]。因此文档是 4/5：覆盖广、结构清楚，但还不能完全消除版本/路径选择成本。

## 社区与成熟度

| 维度 | 评分 | 说明 |
|------|------|------|
| 社区活跃度 | 3/5 | 2,863 stars、168 forks、contributors first page 30、68 open issues、12 open PRs；release/issue/PR 活动存在，但 README 明确 limited support，service policy 把许多 engine 放到社区支持，不能仅凭 star 视为高响应社区 [GH:api][GH:activity][GH:community][GH:readme][Docs:services]。 |
| 成熟度 | 3/5 | 仓库创建于 2025-06，已有 39 个 release，最新 v2.9.0；但项目不足两年、BabelDOC 版本和 translation-provider matrix 仍在快速演进，open issue 含核心质量/资源问题，按“活跃可用但尚未长期冻结”的 3 分处理 [GH:api][GH:activity][GH:issues][GH:release]。 |

这是一条“活跃 v2 产品线”，不是 archived，也不是已经长期稳定的基础设施。对 Develata 来说，成熟度判断应来自真实论文 corpus 的回归记录，而不是单看 release 数量。

## 安全与风险

评分 2/5。

repository advisory endpoint 返回 `[]` 只表示本次未查到 published GHSA，不是安全证明 [GH:advisories]。实际攻击面来自功能本身：解析复杂 PDF、下载 URL、处理用户上传文件、保存/调用 translator API key、启动 WebUI、Docker 暴露 7860、可启用 share/auth-file，以及本地或远程 LLM provider 的数据流 [Local:security][Local:pyproject]。

本轮看到的 hardening 不足以支撑 security 3/4：GUI 默认先绑定 `0.0.0.0`；auth_file 可选；URL download 的 `size_limit` 参数不是默认强制；`disable_config_auto_save` 存在但默认配置为 false，意味着配置自动保存默认开启；config TOML 可持久化 API key；Dockerfile 直接运行 WebUI [Local:security]。同时，AGPL 对 modified network interaction 有源代码提供边界，文档/论文翻译还涉及版权与敏感文档外发给 provider 的问题 [Local:license]。

建议只在本地可信文件上默认使用；如要服务化，至少使用低权限容器/worker、只读输入、临时输出目录、文件类型/大小/页数限制、任务 timeout、并发 quota、URI scheme/host allowlist、独立 secret store、日志脱敏、出网控制、人工验收和版本 pinning。

## 学习价值

高。PDFMathTranslate-next 是一个很好的 document-processing systems case：BabelDOC backend、PDF layout/re-rendering、translator abstraction、rate-limit/concurrency、glossary/table/OCR workaround、WebUI、Docker、Windows packaging、Python event API 与 AGPL/安全边界都集中在一个真实用户量项目里。

对 Develata，最有价值的下一步不是再读 README，而是设计小型数学论文 benchmark：数字原生/扫描、单栏/双栏、公式密集、图表/表格、脚注和参考文献各取样；同时比较 PDFMathTranslate v1、PDFMathTranslate-next、Zotero 插件路径、Docling/MinerU/Marker 加翻译后处理，记录输出完整性、公式破坏、layout drift、每页时间、峰值内存、token 成本和人工修复时间。这样才能把“资料审查 3/5”推进到真实采用判断。
