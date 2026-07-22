---
title: "MemPalace"
created: 2026-06-07
updated: 2026-07-22
type: repository-analysis
repo_url: "https://github.com/MemPalace/mempalace"
category: "ai-programs/ai-harness/memory"
tags: ["memory", "mcp", "local-first", "python", "chromadb", "knowledge-graph", "claude-code"]
previous_repo: ""
successor: ""
primary_language: "Python"
license: "MIT"
stars: 57568
forks: 7423
last_checked: 2026-07-22
last_verified: 2026-07-22
evidence: "GitHub API + README + official docs + repository local scan; package installed/run path not smoke-tested by Develata"
archived_reason: ""
docker_support: true
gpu_required: false
estimated_cpu: "low for CLI/MCP and default local embedding/search; optional GPU acceleration exists for embedding runtime"
estimated_memory: "moderate heuristic estimate: ChromaDB plus local ONNX embedding model; depends on palace size and backend"
estimated_storage: "~300MB embedding model plus local ChromaDB/SQLite palace data; remote backends and backups vary"
status: active
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
  recommendation: 3
overall_score: 3.7
sources:
  - "[GH] https://github.com/MemPalace/mempalace"
  - "[GH:api] GitHub REST/GraphQL queried 2026-07-22: created_at=2026-04-05, pushed_at=2026-07-17, default_branch=develop, commit=5cd961eef97c9a37b60c06a97c608d0a83e8ef10, stars=57568, forks=7423, open issues=283, open PRs=361, primary_language=Python, license=MIT, diskUsageKB=22636"
  - "[GH:release] https://github.com/MemPalace/mempalace/releases queried 2026-07-22; latest=v3.6.0 published 2026-07-17; v3.5.0 added a local write daemon and opt-in loopback HTTP MCP transport; v3.6.0 added secure-by-default authenticated/TLS/read-only remote serving, Milvus backend, atomic temporal-fact supersession, chronology preservation and recovery/performance work; MCP surface=36 tools"
  - "[GH:community] https://api.github.com/repos/MemPalace/mempalace/community/profile queried 2026-07-22; README, CONTRIBUTING.md, PR template, LICENSE and SECURITY.md detected; Code of Conduct not detected"
  - "[GH:advisories] https://api.github.com/repos/MemPalace/mempalace/security-advisories?per_page=100 queried 2026-07-22; returned [] — no published repository advisory found in this check, not proof of safety"
  - "[GH:local-scan] GitHub tree/API scan at 5cd961eef97c9a37b60c06a97c608d0a83e8ef10 on 2026-07-22: files=509, workflows=6, test-ish files=133, docs/Markdown-ish files=108; languages Python=4530253, Shell=141253, HTML=72274, CSS=50707, Vue=22112, JavaScript=14706, TypeScript=5373, Dockerfile=4091"
  - "[GH:readme] README.md at 5cd961eef97c9a37b60c06a97c608d0a83e8ef10 checked 2026-07-22; describes verbatim storage, ChromaDB default, sqlite_exact/Milvus/Qdrant/pgvector backends, Docker/MCP, Claude/Codex/Cursor hooks, Python 3.9+, ~300MB embedding model and first-party benchmark tables"
  - "[Local:pyproject] pyproject.toml checked 2026-07-22; version=3.6.0, Python >=3.9, backend entry points chroma/milvus/pgvector/qdrant/sqlite_exact, optional Milvus and pgvector dependencies, pytest coverage fail_under=85"
  - "[Local:agents] AGENTS.md checked 2026-07-22; project principles retain verbatim storage, incremental ingest, entity-first organization, local-first/zero external API by default, hook budget and no-telemetry expectations"
  - "[Local:security] SECURITY.md checked 2026-07-22; supports current 3.x line, asks for private reports through GitHub Private Vulnerability Reporting and states a 48-hour acknowledgement target"
  - "[Docs:home] https://mempalaceofficial.com/ extracted 2026-07-22; documents wings/rooms/closets/drawers, AAAK pointer layer, local-first ChromaDB/SQLite design, zero API keys, background hooks and temporal graph"
  - "[Docs:palace] https://mempalaceofficial.com/concepts/the-palace.html checked through current official documentation links 2026-07-22; palace taxonomy and navigation concepts"
  - "[Docs:mcp] https://mempalaceofficial.com/reference/mcp-tools.html extracted 2026-07-22; official reference states 36 MCP tools and documents read/write/checkpoint/delete-by-source/knowledge-graph/navigation/diary/system surfaces"
  - "[Benchmarks] benchmarks/BENCHMARKS.md in current tree checked 2026-07-22; benchmark results remain first-party and were not reproduced; README distinguishes retrieval recall from end-to-end QA accuracy"
---

# MemPalace

> Local-first agent memory infrastructure：把对话和项目上下文按 memory-palace 结构保存为 verbatim drawers，通过 CLI/MCP、本地 embeddings、ChromaDB/SQLite 与可插拔后端供 agents 检索。
>
> **状态**: `active` · **总分**: 3.7/5 · **推荐度**: 3/5
> **核验边界**：本次核验到 GitHub API、README、官方 docs、manifest、security/governance 文件和本地 clone；未执行 `uv tool install mempalace`、未启动 MCP server，未复现 benchmark。

## 一句话总结

MemPalace 是一个「verbatim-first」的 AI memory substrate：它不先让 LLM 摘要你说过什么，而是把原文保存为 drawer，再用结构化 palace taxonomy、semantic search、temporal graph 和 MCP 工具把记忆重新交给 agent。

## 总体评价

MemPalace 应归入 `ai-programs/ai-harness/memory`。它解决的不是「如何写 agent」，而是 agent 跨会话失忆的问题：conversation history、项目文件、agent diary、实体关系和 temporal facts 被组织进 wings / rooms / drawers，并通过 CLI 与 MCP tools 暴露给 Claude Code 等 agent clients [GH:readme][Docs:palace][Docs:mcp]。

项目最强的地方是 design thesis 非常清楚：**verbatim always**、local-first、zero external API by default、background hooks、实体优先，而不是把记忆先压成若干 LLM-generated facts [Local:agents][Docs:home]。这与 Mem0 这类「memory extraction / update」路线有根本差异：MemPalace宁可多保存原文，再把检索问题做扎实；其 first-party benchmark 文档也明确区分 retrieval recall 与 end-to-end QA accuracy，避免直接拿不同指标做营销式对比 [Benchmarks]。

主要风险也很清楚：项目创建于 2026-04，短期已到 v3.6.0；v3.5-v3.6 从纯本地 CLI/stdio 扩展到 local daemon 与 opt-in authenticated/TLS/read-only remote HTTP serving，并加入 Milvus。GitHub 快照显示 open issues=283、open PRs=361，社区关注极高但维护压力亦高 [GH:api][GH:release]。它适合学习、实验和 selective adoption；若要长期保管或远程共享敏感记忆，必须先验证迁移、备份、认证/TLS、权限隔离与删除/导出。

## 推荐度：3/5

> 2026-07 复核：v3.6 已扩展到 remote/team serving，但项目仍是 2026-04 创建、maturity=2，未做 install/MCP/benchmark/security smoke test；远程能力扩大了用途，也扩大了审计责任。


**定位**：面向使用 Claude Code / Codex / Cursor / Hermes 等长期 agent workflow，且希望用本地、可审计、可导出的方式保留跨会话上下文的开发者。

加分理由：抽象清晰，local-first 默认安全边界较好，CLI/MCP/Docker/remote HTTP/后端插件面完整，官方 docs 与 benchmark 文档比多数新 memory 项目更扎实 [GH:readme][Docs:mcp][Local:pyproject][Benchmarks]。维持 3 而非 4 的理由：项目太年轻，版本跳跃快；memory layer 承载高敏数据，remote serving 又引入网络边界；本次没有实际运行安装、MCP、hook、HTTP transport 或 benchmark。

## 优势

1. **Verbatim-first 路线清楚**：项目明确要求不 summarize、不 paraphrase 用户内容，检索返回原文 drawer；这降低了 LLM extraction 丢失上下文的风险 [Local:agents]。
2. **Local-first 仍是默认**：README 与 AGENTS.md 强调核心路径无需外部 API，v3.5 的 daemon 默认 loopback，v3.6 的远程访问必须显式启用；local-first 与 remote-capable 是两条不同路径 [GH:readme][Local:agents][GH:release]。
3. **Agent 接入面完整**：CLI、`mempalace-mcp`、Claude/Codex/Cursor hooks、Docker stdio/HTTP MCP、agent wings/diaries 与 36-tool surface 组成了较完整的接入面 [GH:readme][Docs:mcp][GH:release]。
4. **可插拔后端**：`pyproject.toml` 注册 chroma、sqlite_exact、Milvus、Qdrant、pgvector；storage contract 已不局限于单机 ChromaDB [Local:pyproject]。
5. **测试与治理信号较好**：当前 scan 看到 133 个 test-ish 文件、6 个 workflows、pytest coverage fail-under=85、CONTRIBUTING 与 SECURITY 文件 [GH:local-scan][Local:pyproject][GH:community]。
6. **Benchmark 文档相对诚实**：first-party benchmark 文件明确说明 retrieval recall 与 QA accuracy 不可直接比较，并保留了 benchmark integrity caveats [Benchmarks]。

## 劣势

1. **项目极年轻**：创建于 2026-04，当前已 v3.6.0；一个月内从 v3.4 跨到 daemon/remote HTTP/Milvus，API、部署与数据格式仍可能快速演化 [GH:api][GH:release]。
2. **issue/PR backlog 很大**：2026-07-22 快照显示 open issues=283、open PRs=361；高关注度带来活力，也带来维护和 triage 压力 [GH:api]。
3. **核心价值依赖真实运行体验**：hook 是否真的 <500ms、embedding model 首次下载/索引成本、ChromaDB 长期维护、MCP tool latency，本次未实测 [Local:agents]。
4. **Benchmark 是 first-party**：文档有 caveat 是好事，但仍不能替代独立复现；推荐采用前应在自己的 transcript/project corpus 上测 recall/precision [Benchmarks]。
5. **记忆系统天然高敏**：即使 local-first，stored drawers 仍包含个人事实、项目上下文、可能的 secrets；备份、加密、权限和删除策略需要用户自己治理。

---

## 适合什么场景

- 长期使用 coding agent，需要跨 session 找回架构决策、debug 过程、偏好和上下文。
- 希望 memory 系统默认本地运行，不愿把原始对话上传给 hosted memory service。
- 想研究「verbatim storage + retrieval」与「LLM extraction memory」的路线差异。
- 需要 MCP server 把 memory 作为工具暴露给 Claude Code / Hermes / 其他 agent client。
- 需要在受控网络中把同一 palace 以 token/TLS/read-only 策略提供给多个 agent client 的早期团队试点 [GH:release]。
- 愿意做小规模试运行、备份和迁移验证的 early adopter。

## 不适合什么场景

- 需要已经长期生产验证、稳定 migration policy 和企业级支持的 memory substrate。
- 不愿维护 token/TLS/reverse proxy、审计 remote write 权限，却想直接暴露公网 HTTP MCP 的环境。
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

上述项目按 `ai-programs/ai-harness/memory` 同类范围做定位级对比；除已收录 wiki 条目外，本条未重新按同一 10 维度框架深审这些项目。

---

## 它能做什么

- **保存原文记忆**：conversation transcript、project files、agent diary 等被保存为 drawers，而不是先压缩成 LLM 摘要 [GH:readme][Local:agents]。
- **结构化组织**：wings 对应人/项目/主题，rooms 对应具体主题或时间单元，drawers 保存原文，hall/tunnel/graph 帮助跨 wing 导航 [Docs:palace]。
- **语义检索**：默认用 ChromaDB 和本地 embedding model 做 semantic search，并支持 wing/room filter [GH:readme][Docs:mcp]。
- **知识图谱**：包含 SQLite-backed temporal entity relationship graph，支持 validity windows、timeline、invalidate 等操作 [GH:readme][Docs:home]。
- **MCP 工具**：官方 reference 当前列出 36 个工具，覆盖读写、checkpoint、按 source 删除、图谱、导航、agent diary 与系统管理 [Docs:mcp]。
- **后端替换**：默认 ChromaDB，也提供 `sqlite_exact`、Milvus、Qdrant、pgvector 后端入口 [GH:readme][Local:pyproject]。
- **Hooks**：Claude Code、Codex、Cursor 等可在 session lifecycle 捕获、恢复或注入 transcript/context [GH:readme]。
- **Remote serving**：v3.6 的 `mempalace serve --secure` 支持 token、TLS、自签 cert、read-only mode 与浏览器式 WebSocket console；能力是官方 release/README 所述，本轮未启动 [GH:release][GH:readme]。

## 运行环境与资源占用

| 场景 | CPU | 内存 | 存储 | 说明 |
|------|-----|------|------|------|
| 最小 CLI/MCP | 低 | 中等 | ~300MB model + palace data | Python 3.9+，ChromaDB 默认；embedding model 首次使用 lazy download [GH:readme] |
| 大型长期 palace | 中等 | 中等到偏高 | 随 transcript/project corpus 增长 | 向量库、SQLite graph、索引文件与备份策略成为主要成本 |
| GPU 加速 embeddings | 可选 | 依设备 | 同上 | `pyproject.toml` 提供 gpu/dml/coreml extras，但核心路径不要求 GPU [Local:pyproject] |
| Docker MCP | 低到中等 | 中等 | Docker volume `/data` | README 给出 Dockerfile、Dockerfile.gpu 与 stdio MCP 配置示例 [GH:readme] |
| Remote/team serving | 取决于并发、索引和 backend | 中等到偏高 | palace、日志、证书与备份 | `--secure` token/TLS/read-only；Milvus/pgvector 可外置，未实测 [GH:release] |

- **运行时**：Python 3.9+，CLI 与 MCP server；默认 ChromaDB，本地 ONNX embedding model，SQLite graph。
- **操作系统**：未见 README 限定单一 OS；Docker 可降低本地 Python 环境差异，但本次未构建镜像。
- **Docker**：支持；本地 scan 确认 `Dockerfile`、`Dockerfile.gpu`、`docker-compose.yml`，README 给出官方使用命令 [GH:local-scan][GH:readme]。
- **GPU**：不需要；可选 CUDA/DirectML/CoreML acceleration。
- **外部依赖**：核心路径不需要外部 LLM/API key；远程 transport、Milvus/pgvector 或 BYOK LLM rerank 均属 opt-in。

## 上手体验

评分 4/5。

README 给出 `uv tool install mempalace`、`pipx install mempalace`、venv pip 和 Docker 四条路径，并且明确提醒 Debian/Ubuntu/Homebrew PEP 668 下应使用隔离环境 [GH:readme]。这对 Python CLI 项目来说是很好的上手文档。

扣分点是：memory infrastructure 的「安装成功」不等于「长期可用」。用户还要理解 palace taxonomy、embedding model、ChromaDB 数据目录、Claude Code hooks、MCP client 配置、备份/恢复和敏感数据治理；这些都不是 30 分钟内可完全消化的东西。

## 代码质量

评分 4/5。

当前 tree scan 显示 509 files，Python 为主，结构包含 CLI/MCP/server、config、miner、searcher、knowledge graph、backends、hooks、repair/export 等模块；`AGENTS.md` 对架构与修改入口写得具体 [GH:local-scan][Local:agents]。

质量信号包括：pytest coverage fail-under=85、ruff/pre-commit、133 个 test-ish 文件、6 个 GitHub workflows、CONTRIBUTING 与 SECURITY [GH:local-scan][Local:pyproject][GH:community]。不给 5 的理由：本次没有执行测试；remote transport、更多 backend 与快速迭代增加了验证面。

## 可扩展性

评分 4/5。

可扩展性主要体现在三层：

- **Storage backends**：entry points 暴露 chroma、sqlite_exact、Milvus、Qdrant、pgvector [Local:pyproject]。
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
| 社区活跃度 | 4/5 | GitHub API 快照显示 57.6k stars、7.4k forks、open issues=283、open PRs=361；关注度极高，维护压力亦重 [GH:api]。 |
| 成熟度 | 2/5 | 创建于 2026-04，当前 v3.6.0；daemon、remote serving 与新 backend 一月内快速进入，长期数据兼容性仍需保守估计 [GH:api][GH:release]。 |

## 安全与风险

评分 3/5。

正面：核心设计 local-first、zero external API by default、no telemetry/phone-home for core operation；SECURITY.md 提供私密报告流程，本轮 GitHub advisories endpoint 未发现已发布 advisory。v3.6 remote serving 声称 secure-by-default，支持 token、TLS/self-signed、read-only 与显式 insecure opt-in [Local:agents][Local:security][GH:advisories][GH:release]。

保守扣分来自 memory layer 的内生风险：

- drawers 可能保存私人对话、商业上下文、路径、账号、误贴的 secrets；verbatim storage 的优点同时也是风险。
- MCP write tools 与 hooks 自动写入本地记忆，若 agent client 被 prompt-injection 或错误配置影响，可能污染 memory 或保存不该保存的内容。
- remote HTTP/WebSocket 路径会把本地高敏 memory 变成网络服务；`--secure` 设计是加分项，但证书生命周期、token rotation、反向代理、read/write separation 与公网暴露仍需运营者承担，本轮未做渗透测试 [GH:release]。
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
