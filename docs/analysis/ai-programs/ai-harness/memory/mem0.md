---


title: "Mem0"
created: 2026-05-20
updated: 2026-05-21
type: repository-analysis
repo_url: "https://github.com/mem0ai/mem0"
category: "ai-programs/ai-harness/memory"
tags: ["memory", "long-term-memory", "agents", "rag", "python", "typescript", "cli", "self-hosted", "mcp"]
previous_repo: ""
successor: ""
primary_language: "Python"
license: "Apache-2.0"
stars: 56213
forks: 6399
last_checked: 2026-05-20
last_verified: 2026-05-20
evidence: "GitHub API + official docs + npm/PyPI metadata + repository local scan; not deployed in production by Develata"
archived_reason: ""
docker_support: true
gpu_required: false
estimated_cpu: "low-to-moderate for SDK/local Qdrant prototyping; self-hosted server depends on FastAPI/Postgres/pgvector/Neo4j/dashboard load"
estimated_memory: "moderate for full self-hosted stack; SDK-only usage can be light, but vector store, graph store and LLM calls dominate"
estimated_storage: "small for SDK packages; memory/vector/graph databases and request logs grow with usage"
status: active
ratings:
  capability: 5
  usability: 4
  performance: 3
  code_quality: 4
  documentation: 4
  community: 4
  maturity: 3
  extensibility: 5
  security: 3
  recommendation: 3
overall_score: 3.8
sources:
  - "[GH] https://github.com/mem0ai/mem0"
  - "[GH:api] https://api.github.com/repos/mem0ai/mem0 queried 2026-05-20; stars=56213, forks=6399, open_issues_count=392, created_at=2023-06-20, pushed_at=2026-05-19, license=Apache-2.0, default_branch=main, topics include agents/ai-agents/long-term-memory/rag/state-management"
  - "[GH:issues] GitHub Search API queried 2026-05-20; open issues=129, open PRs=250, merged PRs since 2026-05-01=23 for repo:mem0ai/mem0; repo open_issues_count from [GH:api] normally includes issues plus PRs but may not exactly equal the two Search API totals due to API indexing/timing semantics"
  - "[GH:languages] https://api.github.com/repos/mem0ai/mem0/languages queried 2026-05-20; Python=3334765, TypeScript=2080316, MDX=260893, Jupyter Notebook=159346, Shell=91843"
  - "[GH:release] https://api.github.com/repos/mem0ai/mem0/releases/latest queried 2026-05-20; GitHub latest release tag is CLI-specific: cli-node-v0.2.5 / @mem0/cli v0.2.5 published 2026-05-14"
  - "[GH:contributors] https://api.github.com/repos/mem0ai/mem0/contributors?per_page=100 queried 2026-05-20; first page contributors=100; top entries include Dev-Khant=453, deshraj=217, taranjeet=205, whysosaket=156"
  - "[GH:community] https://api.github.com/repos/mem0ai/mem0/community/profile queried 2026-05-20; health_percentage=62; README, CONTRIBUTING, PR template and license detected; code_of_conduct not detected"
  - "[GH:advisories] https://api.github.com/repos/mem0ai/mem0/security-advisories?per_page=10 queried 2026-05-20; returned []"
  - "[GH:local-scan] Local clone /tmp/repo-wiki-batch3/mem0 at commit 74d043731b9f3ef5d89dcbd435e359b885be5add dated 2026-05-19; git ls-files=2070, Python files=620, TypeScript files=299, TSX files=227, markdown/mdx files=443, workflows=14, test/spec-ish files=246; checked README.md, AGENTS.md, CONTRIBUTING.md, pyproject.toml, server/README.md, cli/node/package.json, docs/, mem0/, mem0-ts/, openmemory/, server/, skills/"
  - "[Docs:intro] https://docs.mem0.ai extracted 2026-05-20; positions Mem0 as universal self-improving memory layer with platform, open-source, cookbooks, integrations, API and CLI docs"
  - "[Docs:oss] https://docs.mem0.ai/open-source/overview extracted 2026-05-20; self-host Mem0 with infrastructure/data control; default components include OpenAI models, Qdrant and history DB; mentions Python/Node quickstarts and configuration"
  - "[Docs:llms] https://docs.mem0.ai/components/llms/overview extracted 2026-05-20; supported LLMs include OpenAI, Ollama, Azure OpenAI, Anthropic, Together, Groq, LiteLLM, Mistral, Google AI, Bedrock, DeepSeek, MiniMax, xAI, Sarvam AI, LM Studio, LangChain"
  - "[Docs:vectordbs] https://docs.mem0.ai/components/vectordbs/overview extracted 2026-05-20; supported vector databases include Qdrant, Chroma, PGVector, Upstash Vector, Milvus, Pinecone, MongoDB, Azure, Redis, Valkey, Elasticsearch, OpenSearch, Supabase, Vertex AI, Weaviate, FAISS, LangChain, S3 Vectors, Databricks, Turbopuffer"
  - "[Docs:cli] https://docs.mem0.ai/platform/cli extracted 2026-05-20; Mem0 CLI is built for humans and AI agents, supports init/add/search/list/get/update/delete with JSON/table/text output and agent init"
  - "[Docs:server] Local server/README.md checked 2026-05-20; self-hosted FastAPI server plus dashboard, auth enabled by default, X-API-Key programmatic access, make bootstrap, request log pruning, telemetry opt-out, security headers"
  - "[PyPI] PyPI JSON queried 2026-05-20; mem0ai=2.0.2 summary='Long-term memory for AI Agents' requires_python>=3.10,<4.0; mem0-cli=0.2.5 requires_python>=3.10"
  - "[NPM] npm view queried 2026-05-20; mem0ai=3.0.3 Apache-2.0 Node>=18, @mem0/cli=0.2.5 Apache-2.0 Node>=18, @mem0/vercel-ai-provider=2.0.5 Apache-2.0 Node>=18"
---

# Mem0

> 面向 AI agents 的长期记忆基础设施：提供 SDK、CLI、self-hosted server、dashboard、vector/graph memory、平台 API 与 agent skills/plugin 表面。
>
> **状态**: `active` · **总分**: 3.8/5 · **推荐度**: 3/5
> **核验版本**: GitHub commit `74d043731b9f3ef5d89dcbd435e359b885be5add`；GitHub API / Docs / npm / PyPI 快照 2026-05-20

## 一句话总结

Mem0 是 agent infrastructure 中的 memory layer：它解决“agent 如何跨会话记住、检索、更新用户/会话/agent 状态”这一长期上下文问题，能力广但系统面较重。

## 总体评价

Mem0 应归入 `ai-programs/ai-harness/memory`。它不是一个终端 coding agent，也不是普通 RAG demo，而是试图成为 agent 应用的 **memory substrate**：Python/TypeScript SDK、hosted platform、自托管 server、CLI、agent skills、Vercel AI SDK provider、OpenMemory dashboard、vector stores、graph/entity linking 与多 LLM/embedding provider 共同组成了完整 memory stack [GH][Docs:intro][Docs:oss][GH:local-scan]。

它与 Context7、CodeGraph、CLI-Anything 处在同一大板块但子层不同。Context7 给 agent 当前外部 API 文档；CodeGraph 给 agent 本地代码知识图；CLI-Anything 给 agent 操作软件的工具接口；Mem0 则给 agent 长期状态与 personalization memory。用一句话说：Context7 解决“现在的事实”，Mem0 解决“过去积累的事实”。

该项目的优点是覆盖面非常强：SDK、CLI、自托管服务、云平台、skills、插件、benchmark/evaluation、docs、cookbooks 都在一个 monorepo 中；缺点也由此而来：系统复杂度高、依赖面广、版本/包面较多，且 memory 作为隐私敏感层必须谨慎部署。

## 推荐度：3/5

> 2026-06 推荐度重校准：memory layer 涉隐私与长期数据风险，未部署测试，快速演进；适合评估而非默认采用。


**定位**：面向正在构建长期个性化 AI assistant、customer support agent、多 agent 系统或需要跨会话记忆的 LLM 应用开发者。

推荐度 3/5。加分理由：Mem0 的能力面和扩展面在 memory infrastructure 中非常完整，支持 Python/TypeScript、CLI、server、dashboard、平台 API、多 LLM 与多 vector database；社区活跃度也高 [Docs:llms][Docs:vectordbs][Docs:cli][GH:api]。维持 3 而非 4 的理由：memory layer 牵涉隐私、删除/更新语义、数据保留、telemetry、auth、日志与成本；同时项目仍高速迭代，open PR 数较高，生产采用前需要实测 retrieval quality、数据治理和运维复杂度 [GH:issues][Docs:server]。

## 优势

1. **能力覆盖极广**：SDK、CLI、self-hosted server、dashboard、platform、agent skills、Vercel AI SDK provider、OpenMemory 等形成完整 memory ecosystem [GH][GH:local-scan]。
2. **多后端支持强**：官方 docs 列出多种 LLM provider 和大量 vector database 后端，适合接入不同部署环境 [Docs:llms][Docs:vectordbs]。
3. **agent-first 入口明显**：README 提供 `mem0 init --agent`，CLI docs 明确说 built for humans and AI agents；repo scan 也能看到 agent-client/plugin/skill surfaces [GH][Docs:cli][GH:local-scan]。
4. **自托管路径存在**：server README 描述 FastAPI server、dashboard、JWT login、X-API-Key、`make bootstrap`、Postgres/pgvector/Neo4j stack、request log pruning 与 telemetry opt-out [Docs:server]。
5. **社区与维护活跃**：GitHub API 快照显示 56k+ stars、6.3k+ forks、contributors first page 100、近期 merged PR 23 [GH:api][GH:contributors][GH:issues]。

## 劣势

1. **系统面重**：真正生产部署不是 `pip install` 就结束；向 self-hosted server 走会涉及 FastAPI、dashboard、Postgres/pgvector、Neo4j、API keys、日志、telemetry、模型/embedding provider 等 [Docs:server][Docs:oss]。
2. **隐私和治理风险高**：memory layer 存的是用户偏好、历史对话、agent action facts 与实体关系；一旦 scope、delete、retention、tenant isolation 设计不好，风险高于普通工具层。
3. **性能不是纯本地常数**：memory add/search 依赖 LLM、embedding、vector DB、graph/entity linking、rerank 等组件；token、latency、storage 都随 workload 增长 [GH][Docs:vectordbs]。
4. **open PR backlog 较大**：本次 API 快照显示 open PRs=250，说明生态活跃但维护压力也高 [GH:issues]。
5. **版本面复杂**：Python SDK、TypeScript SDK、Node/Python CLI、Vercel provider、server/openmemory 等包和子项目并行迭代，生产锁版本与迁移需要纪律 [NPM][PyPI][GH:local-scan]。

---

## 适合什么场景

- AI assistant / customer support bot 需要跨会话记住用户偏好、历史事项和上下文。
- 多 agent 系统需要 agent-level/session-level/user-level memory 分层。
- 需要 hosted platform 快速接入，同时保留未来 self-hosted 路线的团队。
- 希望比较 semantic search、keyword/BM25、entity linking、graph memory、temporal reasoning 等 memory retrieval 思路的研究/工程实验。
- 使用 Vercel AI SDK、LangChain、CrewAI、LangGraph 等生态并想接入现成 memory layer 的应用。

## 不适合什么场景

- 只需要短期 prompt cache 或一次性 RAG，不需要跨会话个性化记忆。
- 对用户隐私、删除权、数据保留、tenant isolation 没有治理能力，却要存敏感个人信息的场景。
- 要求完全确定、可形式化验证的 memory update/delete 语义；LLM extraction 和 retrieval ranking 本身带概率性。
- 资源极小的边缘设备；完整 self-hosted stack 和向量/图存储会显著增加运维面。
- 不愿引入外部 LLM/embedding provider，也不愿配置本地替代模型的环境。

## 与类似项目对比

| 项目 | 定位 | 相对本项目 |
|------|------|-----------|
| AgentMemory | agent memory infrastructure | 更偏轻量/特定 memory 工具；Mem0 更偏 SDK + platform + self-hosted stack + ecosystem |
| Context7 | 文档上下文 grounding layer | Context7 处理外部 API/库文档的当前事实；Mem0 处理用户/agent 长期状态 |
| CodeGraph | 本地代码知识图谱/context cache | CodeGraph 面向代码库结构检索；Mem0 面向个性化与跨会话记忆 |
| MCP Servers | MCP reference servers | MCP Servers 是 protocol/tool substrate 样板；Mem0 是具体 memory substrate，可通过 CLI/API/plugin/skills 接入 agent workflow |

上述项目按 `ai-programs/ai-harness/memory` 同类范围做定位级对比，未按同一 10 维度框架深审。

---

## 它能做什么

能力评分 5/5。

- **SDK memory API**：Python `mem0ai` 与 npm `mem0ai` 提供 add/search 等核心 memory 能力 [PyPI][NPM]。
- **CLI**：`mem0 init/add/search/list/get/update/delete` 支持人类和 agent 从终端管理 memory，支持 JSON/table/text output 和 agent init [Docs:cli]。
- **Self-hosted server**：FastAPI server + dashboard，支持 JWT login、X-API-Key、admin bootstrap、request logs、configuration、security headers [Docs:server]。
- **Hosted platform**：官方 docs/README 提供 cloud platform 与 API 入口 [GH][Docs:intro]。
- **多模型/多向量库**：支持 OpenAI、Anthropic、Ollama、DeepSeek、Bedrock 等 LLM provider，以及 Qdrant、Chroma、PGVector、Milvus、Pinecone、Redis、Elasticsearch、FAISS 等 vector DB [Docs:llms][Docs:vectordbs]。
- **agent ecosystem**：skills、plugins、Vercel AI SDK provider、OpenClaw plugin、Claude/Cursor 等 agent-client/plugin surfaces 均在 repo 中可见 [GH:local-scan]。

给 5 是因为它覆盖了 memory layer 主要预期场景：SDK、CLI、server、platform、自托管、多 provider、多后端、agent skills/plugin。成熟度问题单独体现在 maturity，不污染 capability。

## 运行环境与资源占用

| 场景 | CPU | 内存 | 存储 | 说明 |
|------|-----|------|------|------|
| SDK prototype | 低到中 | 低到中 | 小到中 | `pip install mem0ai` 或 npm SDK；实际开销由 LLM、embedding 与 vector store 决定 [PyPI][NPM][Docs:oss] |
| CLI / platform use | 低 | 低 | 小 | 本地 CLI 管理 hosted/project memories，主要依赖网络和 API [Docs:cli] |
| Self-hosted server | 中到高 | 中到高 | 随数据增长 | FastAPI + dashboard + Postgres/pgvector + Neo4j；request logs 需定期 pruning [Docs:server] |

- **运行时**：Python >=3.10；Node.js >=18；self-hosted server 使用 FastAPI/dashboard/数据库组件 [PyPI][NPM][Docs:server]。
- **操作系统**：SDK/CLI 跨平台；server 路线更适合 Linux/Docker 环境。
- **Docker**：self-hosted server 文档提供 `make bootstrap`、`docker compose up` 相关路径 [GH][Docs:server]。
- **GPU**：不要求 GPU；但本地 LLM/embedding provider 可能另需 GPU。
- **外部依赖**：LLM provider、embedding provider、vector DB/graph DB、PostHog telemetry（可 opt-out）、hosted platform 或本地数据库 [Docs:server][Docs:llms][Docs:vectordbs]。

performance 给 3：SDK-only 可以轻，但完整 memory stack 需要模型调用、embedding、向量检索、图/实体处理和数据库维护；相比单一 MCP/CLI 工具更重。

## 上手体验

评分 4/5。

上手路径清晰：README 给出 agent-first quickstart：安装 `@mem0/cli` 或 `mem0-cli`，`mem0 init --agent --agent-caller claude-code`，然后 `mem0 add/search`；SDK quickstart 也直接 [GH][Docs:cli]。self-hosted server 的 `make bootstrap` 会启动 stack、等待 API/dashboard ready、创建 admin、生成 API key [Docs:server]。

扣一分是因为真实上手很快进入配置分叉：cloud vs self-hosted、Python vs Node、LLM/embedding provider、vector DB、graph memory、API key、telemetry、auth、dashboard。对简单 demo 来说顺滑；对生产系统来说需要架构选择。

## 代码质量

评分 4/5。

本地扫描显示 Mem0 是大型 polyglot monorepo：2070 个 tracked files，Python/TypeScript/MDX 为主，14 个 GitHub workflows，约 246 个 test/spec-ish 文件；AGENTS.md 明确拆分 mem0 Python SDK、mem0-ts、CLI、Vercel provider、OpenClaw、server、openmemory、skills、docs、tests、evaluation 等模块，并给出 build/test/lint 命令 [GH:local-scan]。

这说明工程组织较完整，不是 README-only 项目。不给 5 的理由：monorepo 范围很大、子项目多、open PR 较多，且没有在本次分析中跑全量测试或取得覆盖率数据；code_quality=4 更符合“结构良好但复杂度和维护面较大”的边界。

## 可扩展性

评分 5/5。

Mem0 的扩展性是强项：LLM provider、embedding provider、vector stores、graph/reranker 组件、Python/TS SDK、CLI、server API、Vercel AI SDK provider、agent skills/plugin、OpenMemory dashboard 都提供了不同层级的接入点 [Docs:llms][Docs:vectordbs][GH:local-scan][NPM][PyPI]。

给 5 的原因是：作为 memory infrastructure，它既能作为 library 嵌入，也能作为 hosted/self-hosted 服务运行，还能通过 CLI/skills/plugin 进入 agent workflow。深度定制不必只靠 fork，API 和组件面都较丰富。

## 文档质量

评分 4/5。

Mem0 文档覆盖面广：README、有 docs site、open-source overview、LLM provider、vector DB provider、CLI、server README、migration guide、cookbooks、integrations、AGENTS.md 和 CONTRIBUTING [GH][Docs:intro][Docs:oss][Docs:llms][Docs:vectordbs][Docs:cli][Docs:server]。

不给 5 的理由是：项目面很大，README 中 benchmark、新算法、平台、自托管、CLI、skills、SDK、server 等信息密度很高，新用户容易不知道先选哪条路径；官方 docs 的部分页面抽取内容较概览化，复杂生产治理细节仍需读具体子目录和源码。

## 社区与成熟度

| 维度 | 评分 | 说明 |
|------|------|------|
| 社区活跃度 | 4/5 | 56k+ stars、6.3k+ forks、contributors first page 100、近期 merged PR=23，社区活跃；但 open PRs=250、community health=62%、未检测到 CODE_OF_CONDUCT，治理成熟度未到满分 [GH:api][GH:contributors][GH:issues][GH:community] |
| 成熟度 | 3/5 | 仓库创建于 2023-06，接近三年历史并采用 Apache-2.0 license；但多包并行迭代，Node CLI 仍 0.2.x，README 宣称 2026 新算法和 migration guide，说明仍处快速演进阶段 [GH:api][GH:release][GH] |

## 安全与风险

评分 3/5。

安全核心不是“有没有 CVE”这么简单，而是 memory layer 的数据性质：

- **公开 advisory 检查**：GitHub security advisories API 本次返回空；但“未发现 advisory”不等于安全证明，只说明本轮未查到公开 GitHub advisory [GH:advisories]。
- **Auth 默认值**：self-hosted server README 明确 dashboard 用 JWT，programmatic access 用 `X-API-Key`，auth enabled by default；`AUTH_DISABLED=true` 仅用于 local dev [Docs:server]。
- **API key 与日志**：server 会有 request logs，文档提示高流量下需 pruning；日志若包含敏感路径/用户信息，需按数据治理处理 [Docs:server]。
- **Telemetry**：server README 说明 telemetry 默认启用且可用 `MEM0_TELEMETRY=false` opt out；生产部署前仍应审查 event payload、保留策略和组织合规要求 [Docs:server]。
- **Memory privacy**：用户偏好、历史对话、agent action facts、entity graph 都是敏感数据；需要明确 tenant isolation、retention、deletion、export、access control 与 prompt injection 防线。

security 给 3：项目已有默认 auth 和安全 header 意识，但 memory 作为敏感基础设施，风险面较宽，生产部署不能只按 quickstart 执行。

## 学习价值

Mem0 很值得学习。它是观察 agent memory infrastructure 的好样本：从最小 SDK 到 CLI、self-hosted server、hosted platform、skills、plugins、evaluation、provider abstraction、vector/graph hybrid retrieval，几乎覆盖了长期记忆产品化的所有关键问题。对 Develata 来说，最有学习价值的不是“怎么调用 API”，而是它如何处理 memory 的系统边界：存什么、不存什么、如何检索、如何删除、如何评估，以及如何把 memory 暴露给 agents。
