---
title: "RAGFlow"
created: 2026-05-31
updated: 2026-07-19
type: repository-analysis
repo_url: "https://github.com/infiniflow/ragflow"
category: "ai-programs/ai-harness/knowledge-base"
tags: ["rag", "agentic-workflow", "context-engine", "document-understanding", "knowledge-base", "ai-search", "self-hosted", "python", "typescript", "go", "docker", "sandbox"]
previous_repo: ""
successor: ""
primary_language: "Go"
license: "Apache-2.0"
stars: 85335
forks: 9969
last_checked: 2026-07-19
last_verified: 2026-07-19
evidence: "GitHub REST/GraphQL metadata, repository security-advisory API, v0.26.4 release notes, and local shallow clone source/docs scan at b8d06d02e6f0e5ad3591e0c8e63cdaca3ee6697c. No Docker Compose stack, web UI, ingestion pipeline, document parsing, agent workflow, sandbox, MCP server, API call, benchmark, Go/Python test suite, or security regression test was executed."
archived_reason: ""
docker_support: true
gpu_required: false
estimated_cpu: "README prerequisites list CPU >=4 cores for self-host; production sizing depends on parsing/OCR, indexing, retrieval, agent workflows, sandbox and concurrent users"
estimated_memory: "README prerequisites list RAM >=16 GB; production deployments should budget more for MySQL/Redis/MinIO/ES-or-Infinity/OCR/worker/browser/sandbox components"
estimated_storage: "README prerequisites list disk >=50 GB; runtime storage dominated by uploaded files, document chunks, vector/index storage, MinIO objects, logs and sandbox artifacts"
status: active
ratings:
  capability: 4
  usability: 3
  performance: 2
  code_quality: 3
  documentation: 4
  community: 4
  maturity: 2
  extensibility: 4
  security: 2
  recommendation: 3
overall_score: 3.1
sources:
  - "[GH] https://github.com/infiniflow/ragflow"
  - "[GH:api] GitHub REST/GraphQL snapshot 2026-07-19: main=b8d06d02e6f0e5ad3591e0c8e63cdaca3ee6697c dated 2026-07-18, stars=85335, forks=9969, open issues=1782, open PRs=368, releases=58, latest=v0.26.4 published 2026-07-16, primary_language=Go, license=Apache-2.0, security policy enabled"
  - "[GH:languages] GitHub languages API snapshot 2026-07-19: Go=16607821, Python=12784165, TypeScript=6054997, C++=2608704, Svelte=539076, C=162911, Shell=68631, Less=41916, CSS=17611, Dockerfile=13765, JavaScript=10865; Go has become the largest GitHub language, but the repo remains multi-language"
  - "[GH:community] GitHub community profile snapshot 2026-07-19: health_percentage=62; README, LICENSE and PR template detected; CODE_OF_CONDUCT, issue template and clean API-detected contribution surface remain incomplete despite repo-local contributing docs"
  - "[GH:advisories] GitHub repository security-advisories API snapshot 2026-07-19: 7 advisories returned, unchanged in count from the 2026-05 audit; sampled RCE/SSTI-class entries include GHSA-wpg4-h5g2-jxm6 / CVE-2026-45312 and GHSA-vvwj-fvwh-4whx / CVE-2026-28797; API output does not provide a clean current-version safety conclusion, and no exploit or regression test was reproduced"
  - "[GH:release] https://github.com/infiniflow/ragflow/releases/tag/v0.26.4 checked 2026-07-19: latest patch adds language-aware stemming for multi-language full-text retrieval; this release alone does not explain the broader Go growth"
  - "[GH:local-scan] Local shallow clone /opt/data/tmp/github-repo-wiki-freshness-audit/repos/ragflow at b8d06d02e6f0e5ad3591e0c8e63cdaca3ee6697c: tracked files=3862, tracked bytes=53880242, markdown=223, workflows=5, test-ish files=566, Dockerfiles=7; Go=566 files/15236094 bytes, Python=1488 files/11909527 bytes, TypeScript=714 files/5097832 bytes; no build/test/runtime command executed"
  - "[GH:readme] README.md at b8d06d02 checked 2026-07-19: positions RAGFlow as open-source RAG engine with Agent capabilities; documents cloud/self-host, DeepDoc, chunking/citations, heterogeneous sources, automated RAG workflow and prerequisites CPU>=4/RAM>=16GB/Disk>=50GB/Docker>=24/Compose>=2.26.1/Python>=3.13/gVisor for code executor"
  - "[GH:pyproject] pyproject.toml checked 2026-07-19: package ragflow 0.26.4, Python >=3.13,<3.15, broad dependencies spanning browser/crawl/MCP/LiteLLM/model providers/data sources/document parsers/vector-search/database clients and tests"
  - "[GH:docker] docker/docker-compose.yml checked 2026-07-19: includes base services plus ragflow-cpu/gpu, exposes web/API/admin/MCP and Go HTTP/admin ports 80/443/9380/9381/9382/9384/9383, mounts env/config/log paths, and retains commented MCP server examples"
  - "[GH:security-file] SECURITY.md checked 2026-07-19: still contains a stale/default supported-version table followed by a restricted_loads/numpy-pickle RCE report rather than a clean coordinated disclosure policy"
  - "[GH:contributing] docs/develop/contributing.md checked 2026-07-19: issue/PR workflow, splitting large changes, adding tests for features and design detail for breaking/API changes"
  - "[Docs:agent-intro] docs/guides/agent/agent_introduction.md checked 2026-07-19: legacy page remains marked DEPRECATED; describes no-code graph workflow mechanism and Deep research template"
  - "[Docs:sandbox] docs/guides/agent/agent_quickstarts/sandbox_quickstart.md checked 2026-07-19: CodeExec needs a sandbox provider; local is for trusted development only, while self-managed uses Docker/gVisor-style isolation and external providers are also supported"
  - "[Docs:dataset] Current repo-local dataset docs checked 2026-07-19: knowledge-base configuration, metadata/auto-metadata, RAPTOR, knowledge graph, PageIndex/TOC extraction, retrieval tests and multiple data-source connectors"
  - "[Docs:api] Current repo-local docs/references/http_api_reference.md and python_api_reference.md checked 2026-07-19; API docs include multiple explicit deprecation markers, so clients should pin and regression-test the version they operate"
---

# RAGFlow

> 大而全的 RAG / context-engine / agentic workflow 平台：文档理解和知识库能力很强，适合研究企业级 RAG platform 形态；但资源重、issue backlog 极高、历史 RCE advisory 严重，生产采用必须先过安全与运维审计。
>
> **状态**: `active` · **总分**: 3.1/5 · **推荐度**: 3/5
> **核验版本**: commit `b8d06d02e6f0e5ad3591e0c8e63cdaca3ee6697c`；GitHub / local clone / repo-local docs 快照 2026-07-19
> **验证边界**: 本轮未启动 Docker Compose、未登录 Web UI、未跑文档解析/索引/检索、未执行 Agent/CodeExec/sandbox/MCP/API、未复现安全 advisory 或 benchmark；所有能力与资源判断均来自 README/docs/source scan。

## 一句话总结

RAGFlow 是一个把 deep document understanding、知识库、RAG workflow、agent canvas、sandbox code execution、MCP/API 与多数据源连接器收束到同一平台里的大型 RAG/agentic workflow repo；它值得收录，但不是“轻量 RAG 库”，也不应在未审计、未加固的情况下暴露公网 [GH:readme][GH:local-scan][Docs:sandbox]。

## 总体评价

分类上，RAGFlow 放在 `ai-programs/ai-harness/knowledge-base` 比 `document-processing` 或 `agent-workflows` 更合适。它确实有 DeepDoc、OCR/文档解析和 PDF/DOCX/表格等 ingestion 能力，但 repo 的主对象已经不是单纯 parser，而是一个 Web platform：知识库、chat、agent workflow、数据源、model provider、API、MCP、sandbox、admin server、Docker self-host 共同构成完整 RAG application platform [GH][GH:readme][GH:docker][Docs:agent-intro]。

它与 Dify/Flowise 同属低代码/平台化 agent workflow 大类，但 RAGFlow 的重心更偏 **RAG quality and context engine**：文档理解、chunking、metadata、RAPTOR、knowledge graph、PageIndex、retrieval tests、grounded citations、多源同步等都围绕“把复杂材料变成可检索上下文”展开 [Docs:dataset]。

正面看，RAGFlow 能力广、社区热、迭代快、Apache-2.0 许可边界相对清晰，且 README 给出的 self-host 资源要求、Docker Compose、gVisor sandbox prerequisite 都比较具体 [GH:api][GH:readme]。负面看，它是大型多语言多服务系统：open issues=1782、open PRs=368、历史 security advisories=7，且 sampled advisories 被 repository advisory API 报告为 SSTI/RCE 类问题 [GH:api][GH:advisories]。issue 数较前次下降，但 PR backlog 上升且绝对积压仍大；高 stars 不能抵消安全、维护和运维风险。

本轮另一项实质变化是语言重心：GitHub 当前把 Go 列为 primary language，languages API 中 Go 约 16.6 MB，高于 Python 约 12.8 MB；本地 tracked bytes 也显示 Go 已超过 Python [GH:languages][GH:local-scan]。这不能直接推出“Python 后端迁移完成”——仓库仍有更多 Python 文件、Python 3.13 runtime 和庞大 Python dependency surface——但说明 Go 服务层已从配角变成主要代码体量之一，迁移/并存期的接口与运维复杂度必须纳入评估。

所以结论是：值得分析、值得跟踪、可在隔离环境 POC；生产采用需要像审 Dify/Flowise 一样审权限、网络、tenant、sandbox、LLM key、文件数据、升级路径和漏洞修复状态。

## 推荐度：3/5

推荐度 3/5。对 Develata，RAGFlow 值得加入 wiki，因为它代表了一个重要路线：**RAG 平台正在从“文档入库 + 问答”演化成 context engine + agent workflow + sandbox + MCP 的一体化系统**。

推荐它的条件：

1. 用于研究/对比 RAG platform 架构，尤其是文档理解、chunking、metadata、RAPTOR / knowledge graph 类增强检索 [Docs:dataset]。
2. 在隔离服务器中 POC，明确只接测试文件、测试账号、测试 LLM key。
3. 能接受 Docker 多服务、16GB+ 内存、50GB+ 磁盘和数据库/vector/object storage 运维 [GH:readme][GH:docker]。
4. 生产前能逐条检查 advisories、版本影响、patch 状态和部署暴露面 [GH:advisories]。

不升到 4 的理由：issue backlog 极高、RCE/SSTI 类历史 advisory 严重、SECURITY.md 内容不像成熟安全政策、Agent 文档中仍有 deprecated 标记、完整栈资源重且本轮未实测。高 stars 不能抵消安全、维护和运维风险。

## 优势

1. **RAG 能力面很宽**：DeepDoc 文档理解、template chunking、grounded citations、多格式数据源、metadata、RAPTOR、knowledge graph、PageIndex 等构成完整 context pipeline [GH:readme][Docs:dataset]。
2. **平台化完整**：Web UI、knowledge base、chat、agent canvas、HTTP/Python API、Docker Compose、admin server、MCP command flags、sandbox provider 都可见 [GH:docker][Docs:api][Docs:sandbox]。
3. **工程体量真实**：本地扫描有 3862 tracked files，Go/Python/TypeScript/C++ 多语言，test-ish files=566，Docker/sandbox/executor-manager 路径齐全 [GH:local-scan]。
4. **社区与维护活跃**：85k+ stars、9.9k+ forks、58 releases，main 持续更新；这是可见度与维护活动信号，但不是生产质量证明 [GH:api]。
5. **Apache-2.0 许可边界相对清晰**：GitHub API 报告 license=Apache-2.0，便于初步评估代码采用边界 [GH:api]。
6. **资源/部署文档比较具体**：README 明确 CPU/RAM/Disk/Docker/Python/gVisor 前提，避免了“看似轻量”的错觉 [GH:readme]。

## 劣势

1. **安全历史问题严重**：sampled advisories 被 repository advisory API 报告为 SSTI/RCE-class issues；本轮未复现，也未独立确认 latest v0.26.4 是否完全不受影响 [GH:advisories]。
2. **维护 backlog 仍极高**：快照显示 open issues=1782、open PRs=368；issue 数下降不抵消 PR 积压上升和绝对规模，这仍是平台可靠性与响应能力的强负面信号 [GH:api]。
3. **系统很重**：README 要求 CPU >=4 cores、RAM >=16GB、Disk >=50GB，Docker stack 又包含数据库、对象存储、Redis、搜索/vector、nginx、admin/MCP/Go ports 等 [GH:readme][GH:docker]。
4. **Agent 文档有迁移痕迹**：agent introduction 页面标注 DEPRECATED，说明 agent workflow 文档/机制可能正处于重写或迭代中 [Docs:agent-intro]。
5. **SECURITY.md 状态不理想**：文件保留默认 supported versions 文案，并夹有具体 RCE 报告内容，不像成熟项目的协调披露政策 [GH:security-file]。
6. **依赖面极宽**：pyproject 覆盖模型 provider、爬虫、browser-use、MCP、文档解析、数据库/vector、企业协作 SaaS 等大量依赖，功能强但供应链和升级复杂度高 [GH:pyproject]。
7. **语言重心正在变化**：Go 已成为 GitHub primary language，但 Python runtime/dependencies 仍是核心；跨语言接口、部署、observability 与回归测试复杂度上升 [GH:languages][GH:local-scan][GH:pyproject]。

---

## 适合什么场景

- 研究企业级 RAG platform / context engine 的设计：文档解析、chunking、metadata、GraphRAG/RAPTOR、PageIndex、retrieval testing。
- 团队希望 self-host 一个完整知识库问答/agent workflow 平台，并有运维和安全能力。
- 对复杂格式文件、扫描件、表格、Office/PDF、结构化/非结构化混合数据做知识库实验。
- 需要比较 Dify、Flowise、RAGFlow 三类低代码 AI platform 的 RAG 深度、workflow 抽象和安全运维代价。
- 在隔离环境中探索 CodeExec sandbox、agent canvas、MCP server 和多数据源 ingestion [Docs:sandbox][GH:docker]。

## 不适合什么场景

- 只想在 Python 中调用一个轻量 RAG library；RAGFlow 是平台，不是几行 SDK。
- 资源紧张的 VPS；16GB RAM / 50GB disk 是 README 级前提 [GH:readme]。
- 未做安全审计就开放注册、多租户、公网访问、文件上传、Agent canvas 或 CodeExec。
- 对历史 RCE/SSTI advisory 零容忍但无法确认 patched status 的生产环境 [GH:advisories]。
- 需要完全稳定的 agent workflow 文档/API；当前 agent intro 已标注 deprecated [Docs:agent-intro]。

## 与类似项目对比

| 项目 | 定位 | 相对本项目 |
|------|------|-----------|
| Dify | LLM app / agentic workflow platform | Dify 更偏端到端 LLM 应用平台与插件生态；RAGFlow 更偏 RAG/context engine 和文档理解主线 |
| Flowise | visual agent builder / low-code workflow | Flowise 更强调 visual Agentflow canvas；RAGFlow 更强调 knowledge base、document understanding 与 retrieval quality |
| n8n | 通用 workflow automation + AI nodes | n8n 更通用自动化；RAGFlow 更专注 RAG/知识库/agent context |
| Langflow | visual LLM/agent workflow builder | Langflow 更贴 LangChain-like visual builder；RAGFlow 更像自带文档解析、知识库和检索平台的 RAG system |
| Dify / Flowise security posture | 多租户 agent workflow 平台安全参照 | RAGFlow 与它们一样必须严肃处理 XSS/SSRF/RCE/RBAC/secret/tenant/sandbox 风险 |

上述项目按 `ai-programs/ai-harness/knowledge-base` 同类或相邻 agent-workflows 范围做定位级对比，未按同一 10 维度框架深审；Dify、Flowise 已在本 wiki 同目录收录，表格用于 taxonomy placement，不重新比较未归一化的 stars、release 或安全质量。

---

## 它能做什么

能力评分 4/5。

- **Deep document understanding**：README 强调基于 DeepDoc 的复杂格式知识抽取，面向 Word、slides、excel、txt、images、scanned copies、structured data、web pages 等 [GH:readme]。
- **Knowledge base / RAG workflow**：dataset configuration、chunking、embedding model、retrieval tests、metadata、citations 等文档可见 [Docs:dataset]。
- **Advanced retrieval**：RAPTOR、knowledge graph、PageIndex/table-of-contents、auto-metadata 等增强检索能力存在 repo-local docs [Docs:dataset]。
- **Agent workflow**：no-code workflow editor、graph-based orchestration、templates、Deep research 等 agent 入口；但 agent introduction 当前标注 deprecated [Docs:agent-intro]。
- **CodeExec sandbox**：支持 self_managed/local/ssh/cloud providers；self-managed 走 Docker/gVisor-style isolation，local provider 仅建议 trusted development [Docs:sandbox]。
- **APIs and MCP**：HTTP/Python API references 存在，docker compose 中有 MCP server command flags 和端口 9382 [Docs:api][GH:docker]。
- **Self-host deployment**：Docker Compose CPU/GPU profiles、admin server、base services、service_conf/env_file 等路径可见 [GH:docker]。

能力给 4 是因为它覆盖 RAG platform 主要面：ingestion、indexing、retrieval、chat、agent、API、deployment、sandbox；但这个分数只表示功能面全面，不表示所有能力都成熟可用。本轮没有部署栈、没有跑解析/检索/agent/sandbox/API，也没有验证复杂文档质量；再叠加极高 issue backlog 和严重安全 advisory 历史，不能按“覆盖所有预期场景且成熟”给 5。

## 运行环境与资源占用

| 场景 | CPU | 内存 | 存储 | 说明 |
|------|-----|------|------|------|
| 最小 self-host | >=4 cores | >=16 GB | >=50 GB | README prerequisites；适合本地/单机 POC [GH:readme] |
| Agent + CodeExec sandbox | >=4 cores + Docker/gVisor | 16 GB+ | 50 GB+ | sandbox 还要求 gVisor、Docker 25+、Compose 2.26.1、uv；每个 runtime container 有 memory/timeout/pool 配置 [Docs:sandbox] |
| 生产平台 | 随文件量、并发、OCR/embedding/index 增长 | 通常高于 16 GB | 上传文件、chunks、vectors、MinIO/logs 增长很快 | 需要数据库、Redis、对象存储、search/vector、worker、nginx、backup、upgrade 方案 |

- **运行时**：Python >=3.13,<3.15；TypeScript/React frontend；Go service；C++/C 组件；Docker 多服务 [GH:pyproject][GH:languages][GH:local-scan]。
- **操作系统**：Docker-centric；README 提到 Docker Engine/Compose；CodeExec sandbox 前提是 gVisor-compatible Linux [GH:readme][Docs:sandbox]。
- **Docker**：官方 self-host 主要路径，`docker/docker-compose.yml` 和 base compose 文件可见；本轮未实际 `docker compose up` [GH:docker]。
- **GPU**：RAGFlow 自身不硬性要求 GPU；docker compose 有 CPU/GPU profiles，DeepDoc/OCR/embedding/local model 加速可另行使用 GPU [GH:docker]。
- **外部依赖**：LLM/embedding providers、Docker、MySQL、Redis、MinIO、ES/Infinity-style vector/search stack、OCR/document parsers、sandbox provider、可选 MCP/agent tools。

performance 给 2：能力重、依赖重、内存/磁盘门槛高；本轮没有任何吞吐、延迟、OCR/indexing benchmark，不能因功能丰富给资源效率高分。

## 上手体验

评分 3/5。

README 的 quickstart 很明确：clone repo、进入 docker 目录、检查 `vm.max_map_count`、使用 docker compose 拉起 CPU/GPU 服务、看日志确认服务，再访问 Web UI；也给出云服务入口 [GH:readme]。对于愿意跑 Docker 的工程用户，路径可行。

但真正上手成本不低：资源要求高，服务多，LLM key、embedding model、service_conf、数据源、vector/search backend、sandbox/gVisor、admin settings 都需要配置。Agent/CodeExec 还引入额外安全和运维复杂度 [GH:readme][Docs:sandbox]。所以 demo 上手可给 3，生产上手不应超过 2。

## 代码质量

评分 3/5。

正面信号：大项目结构清楚，api/rag/deepdoc/agent/web/docker/sdk/test 等路径可见；本地扫描有 566 个 test-ish 文件、5 个 workflows、Go/Python/TypeScript/C++ 多语言实现；CONTRIBUTING 要求新功能加测试并通过 CI [GH:local-scan][GH:contributing]。

扣分也明显：open issues=1782、open PRs=368；SECURITY.md 不规范；历史 RCE/SSTI advisories 指向高风险处理路径；依赖面极宽，且 Go/Python 重心变化增加过渡复杂度 [GH:api][GH:advisories][GH:pyproject][GH:languages]。本轮没有运行任何测试或覆盖率审计；按活跃跨语言演进的保守边界，代码质量维持 3。

## 可扩展性

评分 4/5。

RAGFlow 的扩展面很强：数据源连接器、多模型/provider、HTTP/Python API、agent component、CodeExec sandbox provider、MCP server flags、Docker Compose config、knowledge-base pipeline settings 都说明它不是封闭系统 [GH:pyproject][GH:docker][Docs:sandbox][Docs:api]。

不给 5 的原因：扩展性越强，权限和稳定性越难控；Agent 文档有 deprecated 标记，sandbox/provider/agent component API 的长期稳定性和安全边界本轮未验证 [Docs:agent-intro]。

## 文档质量

评分 4/5。

README、repo-local docs、HTTP/Python API references、sandbox quickstart、dataset advanced guides、contributing 文档覆盖面广；对 RAGFlow 的能力面和部署面解释比较充分 [GH:readme][Docs:dataset][Docs:sandbox][Docs:api]。

扣分点：web_extract 对多个 `ragflow.io/docs/dev/...` URL 返回 404，本轮主要依赖 repo-local docs；agent introduction 标注 deprecated；SECURITY.md 不是清晰的安全政策。文档多，但部分状态信号不稳。

## 社区与成熟度

| 维度 | 评分 | 说明 |
|------|------|------|
| 社区活跃度 | 4/5 | 85335 stars、9969 forks、58 releases，main 持续更新；可见度和维护活动很强，但 community health=62%、open PRs=368，治理负载仍重 [GH:api][GH:community] |
| 成熟度 | 2/5 | latest v0.26.4、open issues=1782、open PRs=368、7 个 repository advisories、Agent docs deprecated、语言重心变化；平台仍在快速演进且风险未低 [GH:api][GH:advisories][GH:languages][Docs:agent-intro] |

社区给 4，不给 5：community profile 62%，缺 CODE_OF_CONDUCT/issue template，SECURITY.md 不规范。成熟度给 2，是因为大型平台的成熟度要看稳定性、漏洞姿态、issue 压力和升级风险，不能被 stars 冲淡。

## 安全与风险

评分 2/5。

RAGFlow 的安全问题必须放在推荐之前，而不是附录。

正面信号：GitHub API 显示 security policy enabled；存在 security advisories 机制；sandbox docs 明确 local provider 只应在 trusted development environments 使用，并给出 gVisor/self-managed container 前提 [GH:api][Docs:sandbox]。

主要风险：

1. **历史 RCE/SSTI advisory 严重**：sampled advisories 被 repository advisory API 报告为 prompt generator、Agent Text Processing、Message component 的 SSTI/RCE-class issues；若 authenticated user 触发条件属实，风险尤其高 [GH:advisories]。
2. **patch 状态需人工核对**：API sample 对部分 advisories 未列 patched_versions，不能简单认为 latest 一定完全安全 [GH:advisories]。
3. **多租户/开放注册风险**：Agent canvas、用户上传文件、LLM keys、knowledge base、sandbox/code execution 共同构成高危 attack surface。
4. **CodeExec sandbox 风险**：self-managed sandbox 需要 Docker/gVisor；local provider 只能 trusted dev 使用；配置错误可能显著放大任意代码执行风险 [Docs:sandbox]。
5. **敏感数据集中**：uploaded docs、chunks、vectors、metadata、LLM API keys、chat logs、agent workflow、MinIO/DB credentials 都可能在同一平台集中。
6. **SECURITY.md 不成熟**：文件内容不像标准 disclosure policy，包含具体漏洞报告而非清晰版本/报告/响应流程 [GH:security-file]。
7. **本轮未做安全实测**：未跑 dependency audit、container scan、gitleaks、sandbox escape test、SSRF/RCE regression、RBAC/tenant isolation test。

因此 security 给 2：可研究、可隔离试用；生产必须先固定版本、关闭公开注册、限制网络、隔离 sandbox、最小权限 LLM/data-source keys、审查 advisories 和升级到确认 patched 的版本。

## 学习价值

RAGFlow 的学习价值很高，尤其适合观察 RAG 平台的工程化复杂性：

- RAG 的核心不只是 embeddings，而是 document understanding + chunking + metadata + retrieval evaluation；
- 企业 RAG 平台会自然长出 agent workflow、MCP、sandbox、admin、API、数据源同步；
- context engine 越完整，安全与运维面越重；
- CodeExec 和 agent canvas 能显著增强能力，也显著提高 RCE/SSRF/tenant isolation 风险；
- 大型开源 AI platform 的 star/fork 热度必须与 advisories、issue backlog、license、resource profile 一起读。

对 Develata 而言，RAGFlow 是一个很好的“反幻觉样本”：它确实强，也确实重；确实值得看，也确实不可轻信。知其可为，亦知其不可轻为。