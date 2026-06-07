---
title: "MemPalace"
created: 2026-06-07
updated: 2026-06-07
type: repository-analysis
repo_url: "https://github.com/MemPalace/mempalace"
category: "ai-programs/agent-infrastructure"
tags: ["agent-infrastructure", "memory", "mcp", "local-first", "python", "chromadb", "knowledge-graph", "claude-code"]
previous_repo: ""
successor: ""
primary_language: "Python"
license: "MIT"
stars: 54210
forks: 7103
last_checked: 2026-06-07
last_verified: 2026-06-07
evidence: "GitHub API + README + official docs + repository local scan; package installed/run path not smoke-tested by Develata"
archived_reason: ""
docker_support: true
gpu_required: false
estimated_cpu: "low for CLI/MCP and default local embedding/search; optional GPU acceleration exists for embedding runtime"
estimated_memory: "moderate heuristic estimate: ChromaDB plus local ONNX embedding model; depends on palace size and backend"
estimated_storage: "~300MB embedding model plus local ChromaDB/SQLite palace data; local clone scan size was ~61.7MB excluding .git"
status: active
sharing_candidate: true
ratings:
  capability: 4
  usability: 4
  performance: 4
  code_quality: 4
  documentation: 5
  community: 4
  maturity: 2
  extensibility: 4
  security: 3
  recommendation: 4
overall_score: 3.8
sources:
  - "[GH] https://github.com/MemPalace/mempalace"
  - "[GH:api] https://api.github.com/repos/MemPalace/mempalace queried 2026-06-07; stars=54210, forks=7103, created_at=2026-04-05, pushed_at=2026-06-06, license=MIT, primary_language=Python, default branch commit 939a076baf0b349e1f5b3a7e27ad1d545364f18b"
  - "[GH:graphql] GitHub GraphQL queried 2026-06-07; open issues=259, open PRs=313; REST open_issues_count=572 equals issues plus PRs at query time; commit history total=1205"
  - "[GH:languages] https://api.github.com/repos/MemPalace/mempalace/languages queried 2026-06-07; Python=3434076, HTML=72274, CSS=49994, Shell=32485, Vue=22112, JavaScript=14706, TypeScript=5148, Dockerfile=4091"
  - "[GH:release] https://api.github.com/repos/MemPalace/mempalace/releases?per_page=10 queried 2026-06-07; latest tags include v3.4.0, v3.3.6, v3.3.5, v3.3.4, v3.3.3"
  - "[GH:community] https://api.github.com/repos/MemPalace/mempalace/community/profile queried 2026-06-07; README, CONTRIBUTING.md, PR template, LICENSE and SECURITY.md detected; Code of Conduct not detected"
  - "[GH:advisories] https://api.github.com/repos/MemPalace/mempalace/security-advisories?per_page=20 queried 2026-06-07; returned []"
  - "[GH:local-scan] Local clone /opt/data/tmp/repo_wiki_trending_20260607_batch2/repos/mempalace at commit 939a076baf0b349e1f5b3a7e27ad1d545364f18b; checked README.md, AGENTS.md, SECURITY.md, CONTRIBUTING.md, pyproject.toml, Dockerfile, Dockerfile.gpu, docker-compose.yml, benchmarks/BENCHMARKS.md, .github/workflows/; local scan counted 415 files and ~61.7MB excluding .git, tests=104 files, benchmarks=96 files, workflows=6"
  - "[GH:readme] README.md checked 2026-06-07; describes verbatim storage, ChromaDB default backend, sqlite_exact/qdrant/pgvector backends, Docker/MCP usage, Claude Code hooks, Python 3.9+, ~300MB embedding model, and LongMemEval/LoCoMo/ConvoMem/MemBench benchmark summary"
  - "[Local:pyproject] pyproject.toml checked 2026-06-07; Python >=3.9, dependencies include chromadb, pyyaml, huggingface_hub, tokenizers, numpy, python-dateutil; scripts mempalace and mempalace-mcp; entry-point backends chroma, pgvector, qdrant, sqlite_exact; pytest configured with coverage fail_under=85"
  - "[Local:agents] AGENTS.md checked 2026-06-07; project principles include verbatim storage, incremental ingest, entity-first organization, local-first/zero external API by default, hook budget <500ms, startup injection <100ms, no telemetry/phone-home for core operation"
  - "[Local:security] SECURITY.md checked 2026-06-07; supports current 3.x line, asks private vulnerability reports through GitHub Private Vulnerability Reporting, target acknowledgement within 48 hours"
  - "[Docs:home] https://mempalaceofficial.com/ extracted 2026-06-07; documents wings/rooms/closets/drawers, AAAK pointer layer, local-first ChromaDB/SQLite design, zero API keys, background hooks, and temporal graph"
  - "[Docs:palace] https://mempalaceofficial.com/concepts/the-palace.html extracted 2026-06-07; explains wings, rooms, halls, tunnels, closets, drawers, metadata filtering and graph traversal"
  - "[Docs:mcp] https://mempalaceofficial.com/reference/mcp-tools.html extracted 2026-06-07; reference page describes semantic search, add/delete/list/sync drawers and other MCP tools; extracted summary says page advertises 30 tools but lists 33 tools across 6 categories"
  - "[Benchmarks] benchmarks/BENCHMARKS.md local scan 2026-06-07; benchmark results are first-party and not reproduced here; file distinguishes retrieval recall from end-to-end QA accuracy and flags benchmark-integrity caveats"
---

# MemPalace

> Local-first agent memory infrastructure：把对话和项目上下文按 memory-palace 结构保存为 verbatim drawers，通过 CLI/MCP、本地 embeddings、ChromaDB/SQLite 与可插拔后端供 agents 检索。
>
> **状态**: `active` · **总分**: 3.8/5 · **推荐度**: 4/5
> **核验边界**：本次核验到 GitHub API、README、官方 docs、manifest、security/governance 文件和本地 clone；未执行 `uv tool install mempalace`、未启动 MCP server，未复现 benchmark。

## 一句话总结

MemPalace 是一个「verbatim-first」的 AI memory substrate：它不先让 LLM 摘要你说过什么，而是把原文保存为 drawer，再用结构化 palace taxonomy、semantic search、temporal graph 和 MCP 工具把记忆重新交给 agent。

## 总体评价

MemPalace 应归入 `ai-programs/agent-infrastructure`。它解决的不是「如何写 agent」，而是 agent 跨会话失忆的问题：conversation history、项目文件、agent diary、实体关系和 temporal facts 被组织进 wings / rooms / drawers，并通过 CLI 与 MCP tools 暴露给 Claude Code 等 agent clients [GH:readme][Docs:palace][Docs:mcp]。

项目最强的地方是 design thesis 非常清楚：**verbatim always**、local-first、zero external API by default、background hooks、实体优先，而不是把记忆先压成若干 LLM-generated facts [Local:agents][Docs:home]。这与 Mem0 这类「memory extraction / update」路线有根本差异：MemPalace宁可多保存原文，再把检索问题做扎实；其 first-party benchmark 文档也明确区分 retrieval recall 与 end-to-end QA accuracy，避免直接拿不同指标做营销式对比 [Benchmarks]。

主要风险也很清楚：项目创建于 2026-04，短期已到 v3.4.0；GitHub 快照显示 open issues=259、open PRs=313，社区关注极高但维护压力亦高 [GH:api][GH:graphql][GH:release]。它适合学习、实验和 selective adoption；若要把大量敏感个人记忆交给它长期保管，仍需先做小规模本地试运行、备份、权限隔离与删除/导出流程验证。

## 推荐度：4/5

**定位**：面向使用 Claude Code / Codex / Cursor / Hermes 等长期 agent workflow，且希望用本地、可审计、可导出的方式保留跨会话上下文的开发者。

给 4/5 的理由：抽象清晰，local-first 默认安全边界较好，CLI/MCP/Docker/后端插件面完整，官方 docs 与 benchmark 文档比多数新 memory 项目更扎实 [GH:readme][Docs:mcp][Local:pyproject][Benchmarks]。不给 5/5 的理由：项目太年轻，版本跳跃快；memory layer 本身承载高敏数据；本次没有实际运行安装、MCP、hook 和 benchmark，所以不能把 README/benchmark 声明视为独立复现结论。

## 优势

1. **Verbatim-first 路线清楚**：项目明确要求不 summarize、不 paraphrase 用户内容，检索返回原文 drawer；这降低了 LLM extraction 丢失上下文的风险 [Local:agents]。
2. **Local-first 默认边界强**：README 与 AGENTS.md 都强调核心路径无需 API key，数据默认不离开机器；官方主页也写明 ChromaDB on disk、SQLite temporal graph、zero API keys [GH:readme][Local:agents][Docs:home]。
3. **Agent 接入面完整**：CLI、`mempalace-mcp`、Claude Code hooks、Docker stdio MCP、agent wings/diaries 与 30+ MCP tool surface 组成了可接入 agent workflow 的基础设施 [GH:readme][Docs:mcp]。
4. **可插拔后端**：`pyproject.toml` 注册 chroma、sqlite_exact、qdrant、pgvector 后端入口，说明 storage contract 不是硬编码到单一 ChromaDB 实现 [Local:pyproject]。
5. **测试与治理信号较好**：本地 scan 看到 104 个测试文件、pytest coverage fail-under=85、ruff、pre-commit、CI workflows、CONTRIBUTING 与 SECURITY 文件 [GH:local-scan][Local:pyproject][GH:community]。
6. **Benchmark 文档相对诚实**：first-party benchmark 文件明确说明 retrieval recall 与 QA accuracy 不可直接比较，并保留了 benchmark integrity caveats [Benchmarks]。

## 劣势

1. **项目极年轻**：创建于 2026-04，当前已 v3.4.0；这不是成熟稳定基础设施的节奏，API/数据格式仍可能快速演化 [GH:api][GH:release]。
2. **issue/PR backlog 很大**：2026-06-07 快照显示 open issues=259、open PRs=313；高关注度带来活力，也带来维护和 triage 压力 [GH:graphql]。
3. **核心价值依赖真实运行体验**：hook 是否真的 <500ms、embedding model 首次下载/索引成本、ChromaDB 长期维护、MCP tool latency，本次未实测 [Local:agents]。
4. **Benchmark 是 first-party**：文档有 caveat 是好事，但仍不能替代独立复现；推荐采用前应在自己的 transcript/project corpus 上测 recall/precision [Benchmarks]。
5. **记忆系统天然高敏**：即使 local-first，stored drawers 仍包含个人事实、项目上下文、可能的 secrets；备份、加密、权限和删除策略需要用户自己治理。

---

## 适合什么场景

- 长期使用 coding agent，需要跨 session 找回架构决策、debug 过程、偏好和上下文。
- 希望 memory 系统默认本地运行，不愿把原始对话上传给 hosted memory service。
- 想研究「verbatim storage + retrieval」与「LLM extraction memory」的路线差异。
- 需要 MCP server 把 memory 作为工具暴露给 Claude Code / Hermes / 其他 agent client。
- 愿意做小规模试运行、备份和迁移验证的 early adopter。

## 不适合什么场景

- 需要已经长期生产验证、稳定 migration policy 和企业级支持的 memory substrate。
- 对本地磁盘中的敏感对话、客户资料、凭证片段没有加密/隔离/清理能力的环境。
- 只需要一次性文档搜索或短期 chat summary；MemPalace 的 palace/graph/MCP/hook 面会显得过重。
- 无法接受 Python/ChromaDB/embedding model 依赖和本地索引维护的极简环境。
- 想要独立复现过的 SOTA benchmark 结论；本次仅确认 first-party benchmark 文档存在与其 caveat。

## 与类似项目对比

| 项目 | 定位 | 相对本项目 |
|------|------|-----------|
| Mem0 | SDK/platform/self-hosted memory stack | Mem0 偏 LLM/embedding/vector/graph memory 产品栈；MemPalace 偏本地 verbatim drawers 与 MCP/CLI memory substrate |
| agentmemory | coding-agent persistent memory | agentmemory 偏 hook 捕获、多 agent 协调和 iii-engine runtime；MemPalace 更强调 verbatim storage、palace taxonomy 与 local-first 默认 |
| Context7 | agent 文档上下文层 | Context7 给 agent 当前库/API 文档；MemPalace 给 agent 过去对话和项目记忆 |
| CodeGraph | 本地代码知识图谱/context cache | CodeGraph 面向代码结构检索；MemPalace 面向 conversation/project memory 与 temporal graph |

上述项目按 `ai-programs/agent-infrastructure` 同类范围做定位级对比；除已收录 wiki 条目外，本条未重新按同一 10 维度框架深审这些项目。

## 个人主页 sharing 候选

是，但建议作为「值得研究的 AI memory 设计案例」而不是「无脑安装推荐」。亮点是路线分明：verbatim-first、local-first、MCP-first，且对 benchmark caveat 有相对克制的说明 [Local:agents][Benchmarks]。若写到主页，需明确提醒：先在非敏感副本上试运行，不要直接把全部私人/工作对话无审计地喂进去。

---

## 它能做什么

- **保存原文记忆**：conversation transcript、project files、agent diary 等被保存为 drawers，而不是先压缩成 LLM 摘要 [GH:readme][Local:agents]。
- **结构化组织**：wings 对应人/项目/主题，rooms 对应具体主题或时间单元，drawers 保存原文，hall/tunnel/graph 帮助跨 wing 导航 [Docs:palace]。
- **语义检索**：默认用 ChromaDB 和本地 embedding model 做 semantic search，并支持 wing/room filter [GH:readme][Docs:mcp]。
- **知识图谱**：包含 SQLite-backed temporal entity relationship graph，支持 validity windows、timeline、invalidate 等操作 [GH:readme][Docs:home]。
- **MCP 工具**：提供 palace 状态、list/search/add/delete/sync drawers、taxonomy、graph traversal、agent diary 等工具面；官方 MCP reference 页面 extracted summary 显示 33 个工具 [Docs:mcp]。
- **后端替换**：默认 ChromaDB，也提供 `sqlite_exact`、Qdrant、pgvector 预览/可选后端 [GH:readme][Local:pyproject]。
- **Claude Code hooks**：可在 Stop / PreCompact 等时机自动保存会话并回填历史 transcript [GH:readme]。

## 运行环境与资源占用

| 场景 | CPU | 内存 | 存储 | 说明 |
|------|-----|------|------|------|
| 最小 CLI/MCP | 低 | 中等 | ~300MB model + palace data | Python 3.9+，ChromaDB 默认；embedding model 首次使用 lazy download [GH:readme] |
| 大型长期 palace | 中等 | 中等到偏高 | 随 transcript/project corpus 增长 | 向量库、SQLite graph、索引文件与备份策略成为主要成本 |
| GPU 加速 embeddings | 可选 | 依设备 | 同上 | `pyproject.toml` 提供 gpu/dml/coreml extras，但核心路径不要求 GPU [Local:pyproject] |
| Docker MCP | 低到中等 | 中等 | Docker volume `/data` | README 给出 Dockerfile、Dockerfile.gpu 与 stdio MCP 配置示例 [GH:readme] |

- **运行时**：Python 3.9+，CLI 与 MCP server；默认 ChromaDB，本地 ONNX embedding model，SQLite graph。
- **操作系统**：未见 README 限定单一 OS；Docker 可降低本地 Python 环境差异，但本次未构建镜像。
- **Docker**：支持；本地 scan 确认 `Dockerfile`、`Dockerfile.gpu`、`docker-compose.yml`，README 给出官方使用命令 [GH:local-scan][GH:readme]。
- **GPU**：不需要；可选 CUDA/DirectML/CoreML acceleration。
- **外部依赖**：核心路径不需要外部 LLM/API key；外部 backends 或 BYOK LLM rerank 属 opt-in。

## 上手体验

评分 4/5。

README 给出 `uv tool install mempalace`、`pipx install mempalace`、venv pip 和 Docker 四条路径，并且明确提醒 Debian/Ubuntu/Homebrew PEP 668 下应使用隔离环境 [GH:readme]。这对 Python CLI 项目来说是很好的上手文档。

扣分点是：memory infrastructure 的「安装成功」不等于「长期可用」。用户还要理解 palace taxonomy、embedding model、ChromaDB 数据目录、Claude Code hooks、MCP client 配置、备份/恢复和敏感数据治理；这些都不是 30 分钟内可完全消化的东西。

## 代码质量

评分 4/5。

本地 scan 显示项目结构清楚：`mempalace/` 下有 CLI、MCP server、config、miner、convo_miner、searcher、knowledge_graph、backends、dialect、hooks_cli、repair、exporter 等模块；`AGENTS.md` 对架构与修改入口写得很具体 [GH:local-scan][Local:agents]。

质量信号包括：pytest 配置、coverage fail-under=85、ruff、pre-commit、mypy dev dependency、104 个测试文件、6 个 GitHub workflow、CONTRIBUTING 与 SECURITY [GH:local-scan][Local:pyproject][GH:community]。不给 5 的理由：本次没有运行测试；大量 benchmark 文件和快速迭代带来的复杂度仍需真实维护历史证明。

## 可扩展性

评分 4/5。

可扩展性主要体现在三层：

- **Storage backends**：entry points 暴露 chroma、sqlite_exact、qdrant、pgvector [Local:pyproject]。
- **MCP surface**：read/write/sync/graph/agent diary tools 使 agent clients 能以工具方式接入 memory [Docs:mcp]。
- **Source adapters 方向**：`pyproject.toml` 已预留 `mempalace.sources` entry-point group，尽管 core 还未注册 first-party adapters [Local:pyproject]。

扣分点是：扩展合同仍年轻，后端和 source adapter 的第三方生态尚未经时间检验。

## 文档质量

评分 5/5。

对一个新项目，文档异常充分：README 覆盖 install、Docker、storage backends、benchmarks、knowledge graph、MCP、agents、hooks、requirements；官方站点解释 palace taxonomy、local-first 机制和 MCP tools；benchmark 文档还专门处理指标不可比问题 [GH:readme][Docs:home][Docs:palace][Docs:mcp][Benchmarks]。

需要注意：docs 中的性能/benchmark 仍是项目方资料，本条没有复现。

## 社区与成熟度

| 维度 | 评分 | 说明 |
|------|------|------|
| 社区活跃度 | 4/5 | GitHub API 快照显示 54k+ stars、7.1k forks、open issues=259、open PRs=313；这说明关注度极高，但也说明维护压力很重 [GH:api][GH:graphql]。 |
| 成熟度 | 2/5 | 创建于 2026-04，当前 v3.4.0；版本推进快，memory substrate 又属于长期数据基础设施，稳定性需保守估计 [GH:api][GH:release]。 |

## 安全与风险

评分 3/5。

正面：核心设计 local-first、zero external API by default、no telemetry/phone-home for core operation；SECURITY.md 提供私密漏洞报告流程，GitHub advisories 查询为空，README 也专门警告 impostor sites [Local:agents][Local:security][GH:advisories][GH:readme]。

保守扣分来自 memory layer 的内生风险：

- drawers 可能保存私人对话、商业上下文、路径、账号、误贴的 secrets；verbatim storage 的优点同时也是风险。
- MCP write tools 与 hooks 自动写入本地记忆，若 agent client 被 prompt-injection 或错误配置影响，可能污染 memory 或保存不该保存的内容。
- Docker/CLI 安装、embedding model 下载、ChromaDB/SQLite 数据目录、备份加密、删除权和导出权都要用户自行治理。
- 本次没有做安装、权限、hook sandbox、MCP tool call 或恶意输入测试。

因此安全评分给 3：设计方向明显优于 hosted-by-default memory service，但不能因 local-first 就视为生产安全已验证。

## 学习价值

MemPalace 的学习价值很高，尤其适合研究以下问题：

- **Memory extraction 是否必要**：它用 verbatim storage 挑战「先用 LLM 抽取 facts」的常见路线 [Local:agents][Benchmarks]。
- **检索指标的诚实表达**：benchmark 文档明确把 retrieval recall 与 QA accuracy 分开，值得作为技术写作样板 [Benchmarks]。
- **Agent memory 的产品边界**：CLI/MCP/hooks/backends/temporal graph 组合成一个完整但仍可理解的 memory substrate [GH:readme][Docs:mcp]。
- **Local-first 隐私工程**：从原则、默认依赖到运行路径，都体现了“默认不出本机”的架构选择 [Local:agents][Docs:home]。

一句话：MemPalace 不是「又一个 RAG wrapper」，而是一种关于 agent memory 的鲜明工程立场。观其所由，察其所安；值得读源码与文档，但采用前须小步试错。
