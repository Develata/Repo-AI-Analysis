---
title: "Presenton"
created: 2026-05-31
updated: 2026-05-31
type: repository-analysis
repo_url: "https://github.com/presenton/presenton"
category: "document-processing/editors"
tags: ["presentation", "ai-presentation", "pptx", "pdf", "self-hosted", "api", "docker", "electron", "mcp"]
previous_repo: ""
successor: ""
primary_language: "TypeScript / Python"
license: "Apache-2.0"
stars: 7574
forks: 1208
last_checked: 2026-05-31
last_verified: 2026-05-31
evidence: "GitHub API metadata + official docs extraction + local shallow clone/source scan; Docker/app not smoke-tested in this run"
archived_reason: ""
docker_support: true
gpu_required: false
estimated_cpu: "Heuristic only, not smoke-tested: 2-4 cores for hosted UI/API; more if running local models/OCR/export concurrently"
estimated_memory: "Heuristic only, not smoke-tested: 4-8GB baseline for Docker stack; more for local model/image/OCR workflows"
estimated_storage: "Heuristic only, not image-measured: multi-GB image/runtime expected because Dockerfile installs Chromium, LibreOffice, Tesseract, Node, Python deps, cached models and export assets"
status: active
ratings:
  capability: 3
  usability: 3
  performance: 2
  code_quality: 3
  documentation: 4
  community: 3
  maturity: 2
  extensibility: 4
  security: 3
  recommendation: 3
overall_score: 3.0
sources:
  - "[GH] https://github.com/presenton/presenton"
  - "[GH:api] GitHub REST queried 2026-05-31: created_at=2025-05-10T14:12:46Z, pushed_at=2026-05-30T12:40:55Z, stars=7574, forks=1208, open_issues_count=40 (REST field includes open PRs), language=TypeScript, license=Apache-2.0, homepage=https://presenton.ai, archived=false"
  - "[GH:graphql] GitHub GraphQL queried 2026-05-31: commits=1556, open PRs=7, vulnerabilityAlerts=0, recent releases include electron-v0.8.6-beta and v0.8.6-beta, language sizes dominated by TypeScript and Python"
  - "[GH:community] GitHub community/profile + list endpoints queried 2026-05-31: health_percentage=75, Code of Conduct and Apache-2.0 license detected, no separate CONTRIBUTING via API though CONTRIBUTING.md exists locally, sampled contributors=11, gh issue list open=33, gh pr list open=7"
  - "[GH:security] https://github.com/presenton/presenton/security/advisories — checked 2026-05-31 via API: no published repository security advisories returned in this check"
  - "[GH:readme] README.md in local clone 0f31399ec83c059a68fcfa27bcc1bbc547cd3830 checked 2026-05-31: positions Presenton as open-source AI presentation generator/API, lists Docker, Electron desktop, cloud, BYOK, multiple LLM providers, PPTX/PDF export, MCP server, Ollama/local processing claims, and extensive environment variables"
  - "[Docs] https://docs.presenton.ai/ extracted 2026-05-31: introduction says Presenton is a customizable open-source AI presentation generator for UI/API, self-hostable with one command, supporting OpenAI/Gemini/Anthropic/Ollama/OpenAI-compatible providers and PPTX/PDF export"
  - "[Docs:quickstart] https://docs.presenton.ai/v3/get-started/quickstart extracted 2026-05-31: Docker run command maps port 5000 to container port 80 and mounts ./app_data:/app_data"
  - "[Docs:api] https://docs.presenton.ai/v3/get-started/api-introduction and https://docs.presenton.ai/llms.txt extracted 2026-05-31: V3 API covers files, images, presentations, templates, smart designs, async tasks and webhooks; docs mention MCP server and OpenAI-compatible APIs"
  - "[Docs:flow] https://docs.presenton.ai/v3/contribution-guides/presentation-generation-flow extracted 2026-05-31: generation flow maps upload/decompose/update files, create/stream outlines, prepare/stream presentation, update and export PPTX/PDF endpoints"
  - "[GH:local-scan] Local shallow clone /opt/data/tmp/repo-wiki-trending-2026-05-31/repos/presenton at 0f31399ec83c059a68fcfa27bcc1bbc547cd3830: 9,967 git-tracked files, ~15,957,547 bytes checkout, 55 test/spec-like paths, 3 workflow files, root package plus servers/fastapi, servers/nextjs and electron directories"
  - "[GH:docker] Dockerfile and docker-compose.yml in local clone checked 2026-05-31: multi-stage Python 3.11 + Node 20 build, runtime installs nginx, Chromium, LibreOffice, Tesseract, Node.js, spaCy model, FastEmbed/HF caches, LiteParse runner and presentation-export assets; compose has production/production-gpu/development/development-gpu profiles, maps 5000:80 and 1455:1455, and exposes many provider API key/env vars"
  - "[GH:fastapi] servers/fastapi/pyproject.toml checked 2026-05-31: Python >=3.11,<3.12, FastAPI, aiohttp, async DB drivers, mem0ai[nlp], fastmcp, google-genai, openai, pdfplumber, python-pptx, pytest/pytest-cov dev group and coverage config"
  - "[GH:ci] .github/workflows/test-all.yml checked 2026-05-31: CI builds FastAPI binary with PyInstaller and Next.js app; Cypress component tests are continue-on-error; workflow installs system deps including LibreOffice/Chromium/ImageMagick"
  - "[GH:auth] servers/fastapi/utils/simple_auth.py and get_env.py checked 2026-05-31: local simple auth uses PBKDF2-SHA256 password hashes, signed session cookie with httponly/secure when HTTPS, optional DISABLE_AUTH, internal auth headers; many provider API keys read from env/user config"
  - "[GH:mcp] servers/fastapi/mcp_server.py checked 2026-05-31: builds FastMCP server from openai_spec.json, binds host 127.0.0.1 default port 8001, forwards internal auth header to local API client"
  - "[GH:contributing] CONTRIBUTING.md and CODE_OF_CONDUCT.md checked 2026-05-31: contribution scope says changes outside electron/ may not be accepted at this time; AI-assisted PRs are allowed if disclosed and reviewed"
  - "[GH:vision] VISION.md checked 2026-05-31: frames Presenton as local/private AI visual asset generation and open-source document engine, model-agnostic and template/design-first"
  - "[GH:tests] servers/fastapi/tests/test_presentation_generation_api.py and related tests checked 2026-05-31: unit tests validate request schema and mocked generation handler paths; no full generation quality benchmark was run in this analysis"
  - "[GH:quarto] https://github.com/quarto-dev/quarto-cli — same-category comparison; existing local analysis under document-processing/editors/quarto-cli.md"
  - "[GH:typst] https://github.com/typst/typst — same-category comparison; existing local analysis under document-processing/editors/typst.md"
  - "[GH:overleaf] https://github.com/overleaf/overleaf — same-category comparison; existing local analysis under document-processing/editors/overleaf.md"
---

# Presenton

> Open-source AI presentation generator and API：可 Docker 自托管、Electron 桌面运行、通过 API/MCP 生成 PPTX/PDF，但仍是 v0.x beta 快速迭代项目，部署和安全边界需审慎。
>
> **状态**: `active` · **总分**: 3.0/5 · **推荐度**: 3/5
> **核验版本**: local clone commit `0f31399ec83c059a68fcfa27bcc1bbc547cd3830`；GitHub/API 快照 2026-05-31

## 一句话总结

Presenton 是一个值得观察的开源 AI presentation engine：它把“生成 slide deck”做成 UI + API + Docker + Electron + MCP 的完整产品形态，但当前 beta、依赖重、攻击面宽，不宜仅凭 README 的 Gamma/Beautiful AI alternative 叙事高估成熟度 [GH:readme]。

## 总体评价

Presenton 的定位很清楚：用自托管或桌面方式生成、编辑、导出 PPTX/PDF，并支持多 LLM provider、BYOK、本地 Ollama、模板/主题和 API 自动化 [GH:readme] [Docs]。官方 docs 还列出 V3 API、async task、webhook、template/smart design、MCP server 等接口面，这使它不只是“一个网页 demo”，而是朝 document-generation platform 发展 [Docs:api]。

它最适合纳入 wiki 的原因，是它补上了 document-processing/editors 里“AI presentation generation / visual document engine”这一类：与 Typst/Quarto/Overleaf 的 text-first 写作不同，Presenton 关注 slide deck、模板、视觉资产、PPTX/PDF export 和 API 集成。

但保守看，当前项目仍很年轻：GitHub release tag 仍带 `beta`，创建于 2025-05，代码面横跨 FastAPI、Next.js、Electron、Docker、LibreOffice、Chromium、Tesseract、LiteParse、Mem0、MCP、多模型 provider。能力面广，亦即故障面广；本轮未实际启动 Docker 或生成 PPTX，只做源码/文档审查，因此推荐度保持 3 [GH:api] [GH:graphql] [GH:docker]。

## 推荐度：3/5

**角色定位**：适合需要自托管 AI presentation API、愿意接受 beta 风险并能审查 Docker/密钥/模型配置的开发者或小团队试用。

推荐理由：如果你想把 report / deck generation 接入自己的 workflow，Presenton 的 API、Docker、模板、PPTX/PDF export 与 MCP server 方向很有价值 [Docs:api] [Docs:flow] [GH:mcp]。Apache-2.0 也降低了二次开发门槛 [GH:api]。

保留意见：它不是成熟办公软件替代品，也不是轻量 CLI。生产部署前至少要做四件事：固定版本、关闭/理解匿名 tracking、配置认证与密钥管理、跑真实 PPTX/PDF 质量测试。若只是个人偶尔做 slides，现阶段可能不如成熟 SaaS 或手工模板可靠。

## 优势

1. **产品面完整**：Docker Web、Electron desktop、cloud/browser、API service 多入口并存 [GH:readme]。
2. **生成链路覆盖广**：上传/解析文件、生成 outline、stream presentation、update、export PPTX/PDF 都在 docs 的 flow 中出现 [Docs:flow]。
3. **模型选择灵活**：README 与 docs 提到 OpenAI、Gemini、Vertex、Azure、Bedrock、Anthropic、LM Studio、Ollama、OpenAI-compatible 等 provider [GH:readme] [Docs]。
4. **自托管与 BYOK 叙事明确**：对隐私敏感团队，至少有脱离单一 SaaS 的架构方向 [GH:vision]。
5. **工程资产不只是 README**：本地扫描可见 FastAPI tests、Next.js、Electron、Dockerfile、compose、CI、auth 模块和 MCP server [GH:local-scan] [GH:ci] [GH:auth] [GH:mcp]。

## 劣势

1. **成熟度低**：项目创建于 2025-05，latest sampled release 为 `electron-v0.8.6-beta`，仍处 beta 快速迭代 [GH:api] [GH:graphql]。
2. **部署体量重**：Docker runtime 安装 Chromium、LibreOffice、Tesseract、Node.js、Python deps、spaCy model、FastEmbed/HF caches 等，资源效率不可能像纯文档工具 [GH:docker]。
3. **攻击面宽**：Web UI/API、文件上传、PPTX/PDF export、浏览器渲染、LibreOffice、OCR、LLM provider keys、MCP server 都是风险面 [GH:docker] [GH:auth] [GH:mcp]。
4. **贡献范围收缩**：CONTRIBUTING 明确说当前可能不接受 electron/ 之外的贡献，这与仓库主体代码分布在 servers/fastapi、servers/nextjs、electron 多处之间存在治理张力 [GH:contributing]。
5. **本轮未实测生成质量**：没有启动容器、没有生成 PPTX/PDF、没有评估模板 fidelity；README 的“pixel-perfect/on-brand”类 claim 只能作为产品目标，不作为实测结论 [GH:readme] [GH:tests]。

---

## 适合什么场景

- 团队想自托管 AI slide/report generation API，并愿意维护 Docker 服务。
- 需要从业务数据、上传文档或模板生成 PPTX/PDF。
- 想把 presentation generation 暴露给 agent/MCP workflow。
- 希望 BYOK 或接入本地/私有 LLM provider，而非完全依赖 Gamma/Beautiful AI 这类 SaaS。
- 研究 AI document generation 产品架构：FastAPI + Next.js + Electron + export runtime + model providers。

## 不适合什么场景

- 对稳定性、版式一致性、协作体验有强要求的生产办公场景。
- 不愿管理 Docker、API keys、数据库、文件上传和认证的人。
- 资源受限 VPS：Chromium/LibreOffice/Tesseract/Node/Python 全家桶较重。
- 多租户或公网暴露场景，但尚未做额外认证、反代、隔离、密钥审计。
- 只需要写数学/技术文档或讲义：Typst/Quarto/LaTeX 更直接。

## 与类似项目对比

| 项目 | 定位 | 相对本项目 |
|------|------|-----------|
| Quarto CLI | 科学/技术 publishing pipeline，Markdown/Jupyter/R 到 HTML/PDF/book/slides | Quarto 更偏 text/code-first 出版；Presenton 更偏 AI 生成 deck、模板、PPTX/PDF export 与 API 服务 [GH:quarto]。 |
| Typst | 现代排版语言与 compiler | Typst 是排版本体，适合数学/技术写作；Presenton 是 presentation generation product/API，不追求成为通用排版语言 [GH:typst]。 |
| Overleaf | Web LaTeX 协作编辑器 | Overleaf 解决多人 LaTeX 协作；Presenton 解决 AI 生成/编辑 slide deck 和自托管 API [GH:overleaf]。 |

上述项目按 `document-processing/editors` 同类范围做定位级对比，未按同一 10 维度框架深审。

---

## 它能做什么

能力评分 3/5。

按 repo/docs 可验证范围，Presenton 覆盖 [GH:readme] [Docs:api] [Docs:flow]：

1. Web UI / Docker self-host 运行 presentation generator。
2. Electron desktop app，面向本地使用；离线/私有程度取决于是否配置本地模型、图片与导出依赖。
3. 从 prompt 或上传文件生成 presentation outline 和 slide deck。
4. 支持 PPTX/PDF 等导出路径；本轮 docs/source 仅按 PPTX/PDF 记录，不把 PNG 作为已验证能力 [Docs:api]。
5. 支持模板、smart design、图片上传、webhook、async task。
6. 支持多 LLM provider、BYOK、Ollama/OpenAI-compatible endpoint。
7. 通过 FastMCP 从 OpenAPI spec 暴露 MCP server [GH:mcp]。

能力给 3 的原因：功能面已经覆盖核心 presentation generator 场景，但本轮未验证生成质量、模板 fidelity、复杂文档输入、长 deck 稳定性和 API 的生产吞吐；这些正是 presentation generator 的关键质量。按评分边界，它属于“核心功能可用但有效质量待验证”，不是 4/5 的全面可用。

## 运行环境与资源占用

| 场景 | CPU | 内存 | 存储 | 说明 |
|------|-----|------|------|------|
| Docker 最小试用 | 启发式：2-4 cores | 启发式：4GB+ | 启发式：多 GB image/runtime | 官方 quickstart 用 `docker run -p 5000:80 -v ./app_data:/app_data` [Docs:quickstart] |
| 生产/团队自托管 | 4+ cores | 8GB+ | 随 uploads/exports/cache 增长 | 文件上传、导出、OCR、浏览器渲染、数据库和 provider 调用并发会放大资源需求 |
| 本地模型/图片/OCR | 取决于模型 | 取决于模型 | 模型权重另计 | GPU 非必需，但 Ollama/local image generation 可能需要 GPU 才有可用体验 |

- **运行时**：Python 3.11 FastAPI、Node 20 Next.js/Electron、nginx、Chromium、LibreOffice、Tesseract、LiteParse、Mem0/FastEmbed 等 [GH:docker] [GH:fastapi]。
- **操作系统**：Docker 跨 Linux/macOS/Windows；Electron 提供 macOS/Windows/Linux 包入口 [GH:readme]。
- **Docker**：官方 README/docs 给出 Docker run；仓库有 Dockerfile 和 docker-compose profiles [GH:readme] [Docs:quickstart] [GH:docker]。
- **GPU**：非必需；compose 有 `production-gpu` profile，主要面向本地模型/加速场景 [GH:docker]。
- **外部依赖**：LLM/image provider API keys、可选数据库、外部模型服务、webhook target 等。

性能评分 2/5。不是因为它“慢”已被实测，而是因为部署/资源复杂度风险高：浏览器渲染 + LibreOffice + OCR + 多模型调用 + Python/Node 双栈使其资源足迹显著重于轻量文档工具。未跑 benchmark，故不进一步下探到 1。

## 上手体验

评分 3/5。

Docker quickstart 很短，理论上 `docker run` 后打开 `localhost:5000` 即可 [Docs:quickstart]。README 也把 Electron 和 Docker 两条路径写得相对清楚 [GH:readme]。

但真实上手不会只停在启动容器：需要选择 LLM provider、配置 API key、决定是否允许用户改 key、处理 auth、选择图片 provider、理解 Docker compose 中大量 env vars。Electron 开发路径还要求 Node LTS、npm、Python 3.11、uv 和共享 FastAPI backend [GH:readme]。因此给 3。

## 代码质量

评分 3/5。

本地扫描显示它已具备真实工程结构：FastAPI backend、Next.js frontend、Electron desktop、Dockerfile、compose、CI、tests、auth、MCP server，而不是单文件 demo [GH:local-scan]。FastAPI pyproject 有 pytest/coverage 配置，CI 会 build FastAPI binary 和 Next.js [GH:fastapi] [GH:ci]。

保守点：仓库文件数近万，servers/、electron/、scripts/、export runtime、cached assets 混合；CI 中 Cypress component tests 设置 `continue-on-error: true`；CONTRIBUTING 又说 electron/ 之外贡献可能不被接受。代码可读性与长期维护成本都还需时间检验 [GH:ci] [GH:contributing]。

## 可扩展性

评分 4/5。

扩展面很大：API reference、webhooks、OpenAI-compatible provider、自定义 LLM URL、Docker env、MCP server、templates/smart designs、Electron/Next.js/FastAPI 源码都给了二次开发空间 [Docs:api] [GH:mcp] [GH:readme]。

不打 5：这些扩展面目前更像产品能力集合，不是稳定 extension SDK；模板/插件治理、安全审计和兼容性承诺仍不清楚。

## 文档质量

评分 4/5。

README 覆盖定位、平台、Docker/Electron 启动、多 provider env vars；docs 站有 introduction、quickstart、API reference、generation flow、llms.txt 文档索引 [GH:readme] [Docs] [Docs:api] [Docs:flow]。对一个年轻项目而言，文档面较完整。

扣一分：文档与产品营销混合较多；“pixel-perfect/on-brand”等强 claim 缺少可复现实测；部分内部架构仍需读源码确认，例如 auth、MCP、env wiring [GH:auth] [GH:mcp]。

## 社区与成熟度

| 维度 | 评分 | 说明 |
|------|------|------|
| 社区活跃度 | 3/5 | 7,574 stars、1,208 forks、sampled contributors=11、open issues=33、open PRs=7；可见关注度，但不能仅凭 sample 推断完整 contributor base [GH:api] [GH:community]。 |
| 成熟度 | 2/5 | 2025-05 创建，release tags 仍为 `v0.8.x-beta` / `electron-v0.8.x-beta`，且功能面快速扩张；不宜视为稳定生产基础设施 [GH:api] [GH:graphql]。 |

## 安全与风险

评分 3/5。

积极面：本轮 security advisory API 未发现 repository advisories，GraphQL vulnerabilityAlerts=0；代码中存在 basic/session auth，密码使用 PBKDF2-SHA256，session cookie httponly，HTTPS 时 secure；MCP server 默认绑定 127.0.0.1 并转发内部 auth header [GH:security] [GH:auth] [GH:mcp]。但这些结果不覆盖依赖审计、容器 CVE、运行时 hardening、文件解析 CVE 或 private advisories。

但风险面同样实在：

- **密钥面宽**：多 provider API keys 可来自 env/user config，部署者要考虑日志、UI 可见性、备份和权限 [GH:readme] [GH:auth]。
- **文件处理面宽**：上传文件、PDF/PPTX/图片、LibreOffice、Chromium、Tesseract、LiteParse 都是潜在解析攻击面 [GH:docker]。
- **MCP/API 暴露风险**：MCP server 从 OpenAPI spec 生成工具，若错误暴露到不可信网络，会把 presentation API 变成 agent-callable surface [GH:mcp]。
- **auth 可关闭**：存在 `DISABLE_AUTH`；内网试用可以，公网部署必须明确禁用此类绕过 [GH:auth]。
- **匿名 tracking**：README/compose 有 `DISABLE_ANONYMOUS_TRACKING` 配置，部署前需确认默认行为和数据路径 [GH:readme]。

## 学习价值

学习价值较高，尤其适合观察“AI 文档生成产品”如何从 demo 走向平台化：

1. UI/API/Electron/Docker/MCP 多入口如何共用 FastAPI backend。
2. PPTX/PDF export 需要浏览器渲染、LibreOffice、字体、图片、模板系统怎样组合。
3. BYOK 与多 provider 配置如何同时带来灵活性和密钥治理复杂度。
4. AI presentation generator 的真正壁垒不只是 LLM call，而是 layout fidelity、模板可控性、导出质量、资源隔离与用户数据治理。

对 Develata 来说，它值得 wiki 跟踪；至于是否部署使用，则应等一次真实 Docker smoke test 和 PPTX export 质量评估后再提高推荐度。
