---


title: "Open WebUI"
created: 2026-05-18
updated: 2026-05-21
type: repository-analysis
repo_url: https://github.com/open-webui/open-webui
category: "ai-programs/ai-chat-platforms"
tags:
  - ai-chat
  - self-hosted
  - webui
  - ollama
  - openai-compatible
  - rag
  - enterprise
  - plugins
primary_language: Python
license: "Open WebUI custom license / GitHub NOASSERTION; redistribution permitted with branding restriction and enterprise-license condition"
stars: 137582
forks: 19649
last_checked: 2026-05-18
last_verified: 2026-05-18
evidence: "GitHub API + official docs + local clone scan + GitHub Security Advisories + PyPI metadata"
archived_reason: ""
previous_repo: ""
successor: ""
docker_support: true
gpu_required: false
estimated_cpu: "2-8 cores"
estimated_memory: "2-16GB"
estimated_storage: "2-50GB+ depending on models, uploaded files, vector indexes, and logs"
status: active
ratings:
  capability: 5
  usability: 4
  performance: 3
  code_quality: 3
  documentation: 5
  community: 5
  maturity: 3
  extensibility: 5
  security: 2
  recommendation: 4
overall_score: 3.9
sources:
  - "[GH] https://github.com/open-webui/open-webui"
  - "[GH:api] https://api.github.com/repos/open-webui/open-webui at 2026-05-18T21:55+08"
  - "[GH:releases] https://api.github.com/repos/open-webui/open-webui/releases?per_page=10 at 2026-05-18T21:55+08"
  - "[GH:search] GitHub Search API queries for open issues/PRs and recent closed/merged items at 2026-05-18T21:55+08"
  - "[GH:advisories] https://github.com/open-webui/open-webui/security/advisories extracted 2026-05-18; visible page-1 advisories include GHSA-rjmp-vjf2-qf4g, GHSA-jx2x-j75f-xq3j, GHSA-m8f9-9whg-f4xr, GHSA-65pg-qhhw-mxwg, GHSA-p4fx-23fq-jfg6, GHSA-hcwp-82g6-8wxc, GHSA-3wgj-c2hg-vm6q, GHSA-3856-3vxq-m6fc, GHSA-3x8w-4f7p-xxc2, GHSA-hr43-rjmr-7wmm"
  - "[GH:security] https://github.com/open-webui/open-webui/blob/main/docs/SECURITY.md"
  - "[GH:license] https://github.com/open-webui/open-webui/blob/main/LICENSE"
  - "[GH:local-scan] local clone of open-webui/open-webui at 3660bc00fd807deced3400a63bfa6db47811a3bb; commands: git ls-files, wc -c, pyproject/package/workflow inspection; 2026-05-18"
  - "[Docs:home] https://docs.openwebui.com/"
  - "[Docs:getting-started] https://docs.openwebui.com/getting-started/"
  - "[Docs:quick-start] https://docs.openwebui.com/getting-started/quick-start/"
  - "[Docs:features] https://docs.openwebui.com/features/"
  - "[Docs:plugins] https://docs.openwebui.com/features/extensibility/plugin/"
  - "[Docs:advanced] https://docs.openwebui.com/getting-started/advanced-topics/"
  - "[Docs:security] https://docs.openwebui.com/security/"
  - "[Docs:enterprise] https://docs.openwebui.com/enterprise"
  - "[Docs:cve-0766] https://docs.openwebui.com/security/vendor-dispositions/cve-2026-0766"
  - "[PyPI] https://pypi.org/pypi/open-webui/json extracted 2026-05-18"
---

# Open WebUI

> 自托管、多提供商、面向个人到团队的 AI Web Chat 平台，覆盖 Ollama、OpenAI-compatible APIs、RAG、插件、权限与企业部署。
>
> **状态**: `active` · **总分**: 3.9/5 · **推荐度**: 4/5

## 一句话总结

Open WebUI 是面向**想把本地/云端 LLM 统一成一个自托管 Web 入口**的个人、实验室和组织的 AI chat platform：能力面极宽，生态极活跃，但安全攻击面和许可边界都必须认真对待。

## 总体评价

Open WebUI 的核心价值不是“又一个 ChatGPT UI”，而是把模型接入、用户管理、知识库、插件、Web 搜索、多媒体与部署运维做成一个可自托管平台。官方文档将其定位为 extensible、feature-rich、user-friendly self-hosted AI platform，可连接 Ollama 与 OpenAI-compatible APIs，并提供 Docker、Python、Kubernetes/Helm、desktop app 等入口 [Docs:home][Docs:getting-started]。

它的优势很鲜明：功能覆盖广、文档体系完整、部署方式成熟、社区规模巨大。截至 2026-05-18，GitHub API 显示约 137.6k stars、19.6k forks，最近一个月仍有大量 issue/PR 活动；release 频率也很高，最新稳定 tag 为 `v0.9.5` [GH:api][GH:releases][GH:search]。

但它不是低风险软件。其一，Open WebUI 是服务器端 Web 应用，天然承载账号、上传文件、聊天历史、RAG 索引、外部 API key 与插件执行能力。其二，GitHub Security Advisories 页面在 2026-05 已列出多条 High / Moderate / Low advisory，包括 XSS、权限绕过、RAG 配置泄露、工具更新权限缺失导致 privilege escalation to code execution 等 [GH:advisories]。其三，插件系统明示会在服务器执行任意 Python 代码，这是功能设计，不是偶然实现细节 [Docs:plugins][Docs:cve-0766]。

结论：**个人和小团队自托管 AI 入口，值得优先试用；企业/公网/多租户部署，必须按服务器产品而非玩具 UI 来 harden、升级、审计。**

## 推荐度：4/5

**定位**：适合需要一个自托管、多用户、多模型、多知识库 AI Web 平台的个人、实验室、小团队或组织。

推荐度给 4，而不是 5，理由是它的 product capability 已接近同类顶层，但 risk profile 也同样重：

1. **强推荐用于受控环境**：内网、家庭服务器、实验室、教学团队、本地 Ollama 前端、多 provider chat hub，这些场景中 Open WebUI 的收益非常直接。
2. **谨慎用于公网多租户**：一旦开放注册、启用插件、连接内部资源或保存敏感知识库，它就是一个高价值攻击面。安全分不可能因为社区大、文档全而上调。
3. **商业/机构部署要看 license**：仓库 license 不是标准 MIT/Apache/AGPL，而是 Open WebUI custom license；其中对品牌移除/替换有 50 end users 与 enterprise license 条件 [GH:license][Docs:enterprise]。

所以推荐语是：**值得部署，但不要未加固直接公网暴露；值得研究，但不要把“能 docker run”误读成“已生产安全”。**

## 优势

1. **能力覆盖极宽**：模型 provider、RAG、Web search、文件管理、voice/video、image generation、权限、企业认证、observability、horizontal scaling 等都在官方功能面内 [Docs:features][Docs:advanced]。
2. **部署路径成熟**：Docker 是推荐路径，同时支持 pip/uv、Kubernetes/Helm、desktop app；官方 quick start 给出 main/cuda/ollama/dev 等镜像 tag 与版本 pinning 建议 [Docs:quick-start]。
3. **文档体系完整**：Getting Started、Features、Advanced Topics、Security、Enterprise、Troubleshooting 等分层清楚，已经不是 README-only 项目 [Docs:home][Docs:advanced][Docs:security]。
4. **插件/Functions 很强**：Tools、Functions、Pipes、Filters、Pipelines 允许深度扩展，能把 Open WebUI 从 chat UI 推向 workflow platform [Docs:plugins]。
5. **社区势能巨大**：137k+ stars、19k+ forks、持续 release 与 issue/PR 流动，说明它已经进入事实标准候选 [GH:api][GH:search]。
6. **企业路线明确**：官方提供 Enterprise Plan、SLA/LTS/custom branding 叙事，并公开面向组织部署的 customer story 与 licensing 路径 [Docs:enterprise]。

## 劣势

1. **安全攻击面大**：Web server + auth/RBAC + 文件上传 + RAG + 插件执行 + 外部 provider key + Web search/browser，任何一项都不是低风险组件。
2. **近期 advisory 很多**：2026-05 Security Advisories 首页即列出多条 High / Moderate 项，包含 XSS、权限检查缺失和数据泄露类问题 [GH:advisories]。
3. **资源占用不轻**：这是 FastAPI 后端 + Svelte 前端 + 数据库 + 向量库/embedding/RAG 生态的综合平台，不是轻量静态前端。
4. **功能面过宽导致复杂度高**：对个人用户是“一站式”，对维护者是 monolith + many integrations；长期质量要靠持续治理支撑。
5. **自定义 license 需要审慎阅读**：非标准 SPDX license，GitHub API 返回 `NOASSERTION`；品牌修改/移除在较大部署下触发 enterprise license 条件 [GH:api][GH:license]。

---

## 适合什么场景

- 家庭服务器 / Homelab：统一使用 Ollama、本地模型与云端 OpenAI-compatible API。
- 实验室 / 小团队：需要多用户账号、共享知识库、集中式 AI 入口。
- 教学 / 内网试点：快速搭建可控的 AI chat platform，避免每个用户单独配置客户端。
- 企业 PoC：验证 on-prem / private cloud AI frontend、SSO/LDAP/SCIM、RAG、observability、horizontal scaling 路径 [Docs:advanced][Docs:enterprise]。
- 插件型 AI workflow：通过 Tools / Functions / Pipelines 把内部工具接入聊天界面 [Docs:plugins]。

## 不适合什么场景

- 只想要一个极轻量本地聊天客户端：Cherry Studio / Chatbox 这类桌面应用更简单。
- 不想维护服务器、安全升级和备份的人：Open WebUI 的功能越强，运维责任越重。
- 要把 untrusted users 放进同一实例并开放 Tools/Functions 的场景：这等价于把服务器端 Python 执行能力交给用户 [Docs:plugins]。
- 对标准开源 license 有硬性要求的组织：Open WebUI license 有自定义 branding/enterprise 条款 [GH:license]。
- 需要强形式化安全边界的多租户 SaaS：当前 advisory 密度和插件模型都要求额外隔离层 [GH:advisories][Docs:security]。

## 与类似项目对比

| 项目 | 定位 | 相对本项目 |
|------|------|-----------|
| Cherry Studio | 桌面端多模型 AI 聊天客户端 | Cherry Studio 更轻、更适合个人桌面；Open WebUI 更适合自托管、多用户、团队/组织场景 |
| LobeChat | Web 端多模型聊天平台 | 更偏前端体验与插件生态；Open WebUI 的本地模型、RAG、权限和企业部署面更宽 |
| AnythingLLM | 面向文档/RAG 的 AI workspace | 更聚焦 RAG workspace；Open WebUI 是更宽的 AI operating surface |
| LibreChat | 类 ChatGPT 的多 provider Web UI | 更接近 ChatGPT clone + multi-provider；Open WebUI 的 Ollama/self-hosted/RAG/插件路线更重 |
| OpenClaw / Hermes Agent | 自主 agent / assistant | Open WebUI 可作为 agent 前端；它自身主要是 AI chat/platform，不是自主任务执行 agent |

上述项目只做定位级对比，未按同一 10 维度框架深审。

---

## 它能做什么

- **多 provider chat**：连接 Ollama、OpenAI-compatible APIs，以及 Anthropic、llama.cpp、vLLM 等 provider 路径 [Docs:getting-started]。
- **Docker / Python / Kubernetes 部署**：支持 Docker run、pip/uv、本地开发、Helm/Kubernetes 与 desktop app [Docs:home][Docs:quick-start]。
- **RAG 与文件/知识库**：文档上传、集中管理、向量库、embedding、检索、web search 结合 [Docs:features]。
- **用户、权限与企业认证**：RBAC、user groups、LDAP/AD、OAuth、SCIM 2.0、trusted headers 等 [Docs:features][Docs:enterprise]。
- **插件与函数**：Tools、Functions、Pipes、Filters、Pipelines 可扩展 request/response 生命周期，并允许服务器端 Python 逻辑 [Docs:plugins]。
- **多媒体功能**：voice/video call、STT/TTS、image generation/editing、Markdown/LaTeX、PWA/mobile experience [GH][Docs:features]。
- **高级运维**：PostgreSQL、Redis、多副本、外部向量库、结构化日志、OpenTelemetry、hardening 主题 [Docs:advanced]。

能力评分 5/5：覆盖 self-hosted AI chat platform 的主要场景，部署、权限、RAG、插件、企业认证与运维路径均有官方文档支撑。这里的 5 指能力广度达到同类顶层；并不意味着每个子功能的成熟度、安全性或稳定性都同样是 5。

## 运行环境与资源占用

| 场景 | CPU | 内存 | 存储 | 说明 |
|------|-----|------|------|------|
| 最小个人试用 | 2 cores | 2-4GB | 2-10GB | Docker `:main` 或 pip，SQLite + 少量聊天记录；本地模型不在 Open WebUI 进程内 |
| 家庭/小团队 | 4 cores | 4-8GB | 10-50GB | 多用户、文件上传、RAG、embedding/vector store、日志增长 |
| 组织/生产 | 4-8+ cores | 8-16GB+ | 50GB+ | PostgreSQL、Redis、多副本、外部对象存储/向量库、observability |

- **运行时**：Python 3.11/3.12 FastAPI 后端 + Svelte/TypeScript 前端；PyPI 要求 `>=3.11, <3.13.0a1` [PyPI][GH:local-scan]。
- **操作系统**：Docker 支持 Linux/macOS/Windows host；文档也列出 Kubernetes/Helm 与 desktop app 路径 [Docs:quick-start]。
- **Docker**：官方推荐路径；镜像包含 `:main`, `:main-slim`, `:cuda`, `:ollama`, version-pinned tags [Docs:quick-start]。
- **GPU**：Open WebUI 本身不要求 GPU；`cuda`/`ollama` 镜像用于本地推理加速或 bundled Ollama [Docs:quick-start]。
- **外部依赖**：可从 SQLite 起步；生产建议 PostgreSQL、Redis、外部 vector DB、object storage 与日志/追踪系统 [Docs:advanced]。

performance 评分 3/5。它的最小 Docker/Python 入口足够简单，但一旦启用 RAG、文件解析、embedding、OCR、多用户会话、Redis/PostgreSQL、多副本与 observability，资源消耗会随功能线性甚至超线性增长；文档也明确把生产部署引向外部数据库、Redis、vector DB 和共享存储 [Docs:advanced]。因此它不是异常浪费，但作为全功能 Web platform，资源效率只能算中等。local clone 显示 4967 tracked files、243 个 Python 文件、578 个 Svelte 文件、Python source bytes 约 3.40MB，`pyproject.toml` 中后端依赖覆盖 FastAPI、数据库、Redis、RAG、transformers、OCR、多云 SDK 等，这些是复杂度而非直接性能指标，只用于解释为什么不能按“轻量 UI”高估 [GH:local-scan]。

## 上手体验

评分 4/5。

正面：

- 官方 docs 首页直接给 Docker 一行命令：`docker run -d -p 3000:8080 ... ghcr.io/open-webui/open-webui:main`，打开 `localhost:3000` 即可开始 [Docs:home]。
- Quick Start 对 Docker、GPU、bundled Ollama、remote Ollama、single-user mode、version pinning 都有示例 [Docs:quick-start]。
- 对非 Docker 用户，PyPI/uv 启动也明确：`pip install open-webui` + `open-webui serve` [Docs:home][PyPI]。

扣分：

- 真正生产化需要理解 secret、volume、数据库、WebSocket、reverse proxy、Redis、多副本、hardening，不是“点开即安全” [Docs:quick-start][Docs:advanced]。
- 功能入口多，新用户容易在 models、connections、RAG、plugins、task model、admin settings 间迷路。
- 单用户模式 / 多账户模式等配置有不可逆或高成本迁移提醒，需要部署前读文档 [Docs:quick-start]。

所以个人试用接近 5，组织部署约 3；综合 4。

## 代码质量

评分 3/5。

正面信号：

- 结构清楚：`backend/open_webui` 后端，`src/` 前端，`docs/` 文档，Docker Compose 多变体，pyproject 与 package.json 均完整 [GH:local-scan]。
- local scan 显示项目有 9 个 workflow 文件、后端格式化、前端构建、Docker build、PyPI release 等 automation [GH:local-scan]。
- 依赖 pinning 明确，`uv.lock` 与 `package-lock.json` 均存在，适合复现实验和 release 管理 [GH:local-scan]。

负面信号：

- 多个 CI workflow 文件处于 `.disabled` 状态，包括 frontend lint、backend lint、codespell、integration test；这会限制“CI 完善”的评分上限 [GH:local-scan]。
- 功能面过宽：LLM provider、RAG、auth、websocket、plugins、storage、enterprise integrations 并存，维护复杂度高。
- GitHub Security Advisories 中近期多条问题集中在权限、XSS、数据隔离等 Web app 高风险区域，说明实际质量压力不小 [GH:advisories]。

代码质量不是“差”，而是“可维护但承压”：结构成熟，工程规模也成熟；但不能因为 star 数和文档漂亮给到 4/5。

## 可扩展性

评分 5/5。

Open WebUI 的扩展性是核心优势之一：

- **Tools / Functions / Pipes / Filters / Pipelines**：官方文档把插件系统作为一等功能，覆盖 class shape、lifecycle、event emitter、valves、request/response pipeline 等 [Docs:plugins]。
- **Provider 扩展**：OpenAI-compatible API URL 可接入 LMStudio、GroqCloud、Mistral、OpenRouter 等服务，也可连接本地 Ollama 或远程 Ollama [GH][Docs:features]。
- **部署扩展**：从 SQLite 单容器扩展到 PostgreSQL、Redis、多副本、外部 vector DB、observability [Docs:advanced]。
- **企业扩展**：SSO、LDAP/AD、SCIM、trusted headers、custom branding / SLA / LTS 路径 [Docs:features][Docs:enterprise]。

代价是安全：扩展性越强，安全边界越重。尤其 Tools/Functions 执行服务器端 Python，这要求将 plugin authors 视为 privileged actors [Docs:plugins][Docs:cve-0766]。

## 文档质量

评分 5/5。

Open WebUI 的文档已经达到平台级项目应有的结构：

- **Getting Started**：从“5 分钟开始第一段 AI conversation”到 Docker/Python/Kubernetes/desktop app 路径 [Docs:getting-started]。
- **Quick Start**：具体到镜像 tag、volume、GPU、bundled Ollama、remote Ollama、single-user mode、更新方式、secret key [Docs:quick-start]。
- **Features**：按 Admin & Security、Chat & Conversations、Workspace、Plugins、Media & Generation 分组 [Docs:features]。
- **Advanced Topics**：scaling、logging、development、hardening，覆盖生产部署从 SQLite 到 PostgreSQL/Redis/多副本的迁移路径 [Docs:advanced]。
- **Security Policy**：明确 supported branch、报告渠道、PoC 要求、CVSS 评分、默认配置边界、vendor disposition 等 [Docs:security][GH:security]。

扣分点主要是文档量大带来的 navigation cost，而不是缺失；按“完整、结构清晰、示例丰富、API/安全/部署文档详尽”的 5 分边界，仍可给 5。

## 社区与成熟度

| 维度 | 评分 | 说明 |
|------|------|------|
| 社区活跃度 | 5/5 | 137.6k stars、19.6k forks、604 watchers/subscribers；2026-05-18 查询约 149 open issues、145 open PRs，近 30 天约 294 closed issues、74 merged PRs [GH:api][GH:search] |
| 成熟度 | 3/5 | 2023-10 创建，v0.9.5 最新 release，迭代速度快但仍未到 1.0；功能面和部署实践成熟，API/安全面仍在快速变化 [GH:api][GH:releases] |

社区评分 5 是因为活跃度、贡献规模、issue/PR 流速都非常强。成熟度只给 3，是因为项目仍在 0.x 快速迭代，且安全 advisory、release churn、功能扩张和 API/部署面持续变化显示它尚未进入“稳定少变”的阶段；“社区势能巨大”不等于“成熟度 5”。

## 安全与风险

评分 2/5。

这里必须严格，同时也要区分两层：Open WebUI 有明确的安全政策、RBAC 和报告流程；低分主要来自其强能力部署模型的风险、近期公开 advisory 密度，以及插件/Functions 把服务器端代码执行纳入产品能力。也就是说，2/5 不是“维护者不重视安全”，而是“默认部署者必须承担 Web 平台级 hardening 责任”。

1. **服务器端高价值数据面**：账号、聊天记录、上传文档、RAG 索引、API keys、OAuth/LDAP/SCIM、内部模型服务连接，全部可能集中在同一实例。
2. **插件即代码执行**：官方插件文档明确 Tools、Functions、Pipes、Filters、Pipelines 会在服务器执行任意 Python 代码；文档建议只安装可信来源、审查源码、限制 Workspace access，并说明恶意插件可 exfiltrate data、install malware、pivot to network 等 [Docs:plugins]。
3. **近期公开 advisory 密集**：Security Advisories 首页列出 High/Moderate/Low 多项，包括 stored XSS、OAuth picture SVG XSS、tool update endpoint authorization missing leading to code execution、RAG configuration disclosure、cross-instance cache poisoning 等 [GH:advisories]。
4. **官方安全政策严格但也强硬**：项目只接受 GitHub Security 渠道，要求 PoC、代码理解、remediation plan；这有助于过滤低质报告，但不等于独立安全审计 [Docs:security][GH:security]。
5. **CVE-2026-0766 vendor disposition**：官方拒绝将 Tool `exec()` 视为漏洞，理由是这就是插件功能本身，且需要 admin 或显式授予 `workspace.tools`；这个解释在模型上成立，但也再次说明 `workspace.tools` 是高权限能力 [Docs:cve-0766]。

因此安全评分给 2：不是说项目不可用，而是说**默认把它当作需要 hardening 的 Web 应用**。若用于公网、多租户、企业知识库，必须做到版本 pinning、及时升级、最小权限、关闭不必要插件权限、隔离容器/网络、备份与日志监控。

## 学习价值

Open WebUI 很值得研究，尤其适合从工程角度观察四件事：

1. **AI chat platform 如何从单用户 UI 变成组织级平台**：权限、RAG、provider、storage、observability 会如何自然膨胀。
2. **插件系统的权力与代价**：server-side Python plugins 是极强扩展性，也是极大安全边界。
3. **自托管 AI 软件的 license 商业化路径**：custom license + enterprise plan + branding restriction 是当前 AI open-core / source-available 项目的典型策略 [GH:license][Docs:enterprise]。
4. **高星项目的真实治理压力**：社区势能巨大并不自动推出高安全性；advisory、disabled CI、rapid releases 都是必须纳入评价的反证。
