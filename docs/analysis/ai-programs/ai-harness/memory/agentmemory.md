---


title: "agentmemory"
created: 2026-05-15
updated: 2026-07-12
type: repository-analysis
repo_url: "https://github.com/rohitg00/agentmemory"
category: "ai-programs/ai-harness/memory"
tags: [memory, mcp, agent, coding-agent, iii-engine, persistent-storage]
previous_repo: ""
successor: ""
primary_language: "TypeScript"
license: "Apache-2.0"
stars: 24996
forks: 2067
last_checked: 2026-07-12
last_verified: 2026-07-12
evidence: "GitHub API + official README/release + issue/backlog review"
archived_reason: ""
docker_support: false
gpu_required: false
estimated_cpu: "minimal"
estimated_memory: "~200MB"
estimated_storage: "~500MB (SQLite + embeddings)"
status: active
ratings:
  capability: 4
  usability: 3
  performance: 4
  code_quality: 2
  documentation: 4
  community: 3
  maturity: 2
  extensibility: 4
  security: 3
  recommendation: 2
overall_score: 3.1
sources:
  - "[GH] https://github.com/rohitg00/agentmemory"
  - "[Docs] https://agent-memory.dev"
  - "[Benchmark] https://github.com/rohitg00/agentmemory/blob/main/benchmark/LONGMEMEVAL.md"
  - "[Comparison] https://github.com/rohitg00/agentmemory/blob/main/benchmark/COMPARISON.md"
  - "[AgentConn] https://agentconn.com/agents/agentmemory"
  - "[SignalForges] https://signalforges.com/pages/rohitg00-agentmemory-best-practices-2026-05-13/"
  - "[GH:API-2026-07-12] GitHub API snapshot: active, default branch main, TypeScript, Apache-2.0, 24,996 stars, 2,067 forks, 183 open issues, 191 open PRs, head 93ae9bc (2026-06-28), latest release v0.9.27 (2026-06-07), repository advisories endpoint returned []."
  - "[GH:v0.9.27] Official release: fixed cross-agent isolation bypass, stop/restart data loss, large-graph failures and multi-instance collisions; 128 REST endpoints after the release; https://github.com/rohitg00/agentmemory/releases/tag/v0.9.27"
---

# agentmemory

> AI coding agent 的持久记忆层——12 个生命周期 hook 自动捕获、BM25+Vector+Graph 三流混合检索、LongMemEval-S R@5 95.2%、本地嵌入免费运行
>
> **状态**: `active` · **总分**: 3.1/5 · **推荐度**: 2/5

## 一句话总结

agentmemory 是基于 iii-engine 的 coding-agent 持久记忆层：12 个生命周期 hook、BM25+Vector+Graph 混合检索、53 个 MCP tools 与 128 个 REST endpoints，功能很完整；但 v0.9.27 刚修复跨 Agent 隔离绕过和 stop/restart 数据丢失，且 backlog 已升至 183 issues / 191 PRs，现阶段应实验而非关键依赖 [GH:v0.9.27] [GH:API-2026-07-12]。

## 总体评价

agentmemory 仍是 agent memory 领域功能设计与 benchmark 透明度较突出的开源方案。其优势是自动捕获、混合检索、本地 embedding、审计/viewer 与多 Agent 协调；README 继续公开 LongMemEval-S retrieval-only R@5 95.2%，并列出 53 MCP tools、12 hooks 与 1,423+ tests [GH]。

然而，v0.9.27 的修复内容本身构成强负面证据：此前 isolated mode 的常规 recall 路径可跨 Agent 读到记忆，`agentmemory stop` 后重启可能丢失全部数据，大图查询还会超时或 crash [GH:v0.9.27]。这些问题已在该版本修复，但说明 pre-1.0 可靠性和安全边界尚未经受充分压力测试。再加上 183 open issues 与 191 open PRs，生产采用应比 5 月更保守 [GH:API-2026-07-12]。

## 推荐度：2/5

**定位**：对多个 coding-agent session 做跨会话记忆实验、愿意审计数据边界并保留备份的开发者。

- 核心体验出众：一键启动、30 秒 demo、auto-wire MCP、实时 viewer
- 基准透明：LongMemEval-S 检索 Recall 表直接在 README 公开，且诚实标注 retrieval-only 非端到端 QA
- 扩展面广：53 MCP tools、128 REST endpoints、12 hooks、多 embedding provider 可插拔 [GH] [GH:v0.9.27]
- **关键扣分**：v0.9.27 仍为 pre-1.0；近期出现已修复的跨 Agent 隔离绕过与完整数据丢失回归；iii-engine 固定在 v0.11.2；backlog 达 183 issues / 191 PRs [GH:v0.9.27] [GH:API-2026-07-12]

**结论**：值得研究与隔离试用，但不建议承载唯一副本、敏感跨 Agent 记忆或关键生产状态；至少应等待更长的无数据损坏窗口、backlog 收敛和 1.0 稳定承诺。

## 优势

1. **零手动记忆注入**：12 个生命周期 hook（SessionStart → UserPromptSubmit → PreToolUse → PostToolUse → PostToolUseFailure → PreCompact → SubagentStart/Stop → Stop → SessionEnd）自动捕获所有交互，无需任何 `memory.add()` 调用
2. **三流混合检索 + 基准透明**：BM25（词干化+同义词扩展）+ Vector（cosine 相似度）+ Knowledge Graph（实体匹配 BFS 遍历），经 RRF 融合。LongMemEval-S 结果直接在 README 公开，且诚实标注"retrieval-only，非端到端 QA"
3. **极致 token 效率**：年度约 170K tokens（$0–$10，local embeddings 模式免费），对比 LLM 摘要方案约 650K tokens（~$500/年）——但具体节省取决于使用频率、token budget 设置和 embedding provider 选择
4. **多 agent 协调**：Lease（锁）+ Signal（信号）+ Mesh（网格），支持多 agent 共享记忆、同步协调
5. **全面可观测性**：实时 viewer（port 3113）、完整审计追踪（所有 mutation 记录）、Obsidian 导出、隐私过滤（存储前 strip secrets）
6. **无外部依赖自托管**：SQLite + 本地嵌入，不需要 Postgres/Qdrant/pgvector 等外部服务。一个 `npx` 启动

## 劣势

1. **pre-1.0 不稳定**：v0.9.27，API 仍可能 breaking change
2. **iii-engine 锁入**：依赖 iii-engine v0.11.2——同样年轻的运行时，整体生态不成熟，且 iii-engine 本身由同一作者维护
3. **维护吞吐不足**：24,996 stars 对应 183 open issues 与 191 open PRs，review 与修复队列已不再“可控” [GH:API-2026-07-12]
4. **跨基准对比困难**：当前只有 LongMemEval-S retrieval 基准，与 Mem0/Letta 的 LoCoMo 基准不可直接比较（项目已诚实标注）
5. **已出现严重回归**：v0.9.27 才修复跨 Agent recall 隔离绕过、stop/restart 数据丢失和大图 crash；修复完成不等于风险历史可忽略 [GH:v0.9.27]

---

## 适合什么场景

- 使用 Claude Code / Codex CLI / Cursor / Hermes 等 coding agent，需要跨 session 保持项目上下文
- 多 agent 协作场景：需要共享记忆、协调操作
- 需要零成本（本地嵌入）持久记忆方案
- 重视可观测性：需要实时查看记忆构建过程、审计记忆变更
- 将 agent 用于长期项目（数周/数月），手动每次复述架构已成为负担

## 不适合什么场景

- 生产环境要求 API 稳定性承诺（等待 1.0）
- 纯 Python 技术栈且不愿引入 Node.js 依赖
- 只需要简单的 session 摘要——agentmemory 功能过剩
- 需要对记忆系统进行深度定制（iii-engine 抽象层增加定制成本）
- 对维护者集中度或 backlog 敏感的项目

## 与类似项目对比

> **注意**：以下对比主要来自项目自带的 `benchmark/COMPARISON.md` [Comparison]，属 first-party 竞品分析，结论应结合独立评测交叉验证。

| 项目 | 定位 | 相对本项目 |
|------|------|-----------|
| **agentmemory** | 持久记忆引擎 + MCP server | 基准 |
| **mem0** (53k⭐) | 记忆层 API | 更成熟、生态更大；但需手动 `add()`，依赖 Qdrant/pgvector，token 成本高 (LLM 摘要) |
| **Letta/MemGPT** (22k⭐) | 完整 agent 运行时 | OS 式记忆层级完整；但框架锁入严重，需 Postgres + vector，非 MCP 原生 |
| **Khoj** (34k⭐) | 个人 AI 搜索 | 语义搜索强；但不面向 agent 记忆，无 hook 自动捕获 |
| **claude-mem** (46k⭐) | Claude Code MCP 记忆 | 轻量、SQLite FTS5；但仅 Claude 限定，无多 agent 协调，无向量检索 |

---

## 它能做什么

agentmemory 提供完整记忆生命周期管理：

1. **自动捕获**：12 个 hook 在 agent 生命周期的关键节点自动记录所有工具调用、用户提示、子 agent 行为
2. **四层记忆整合**：Working (原始观测) → Episodic (session 摘要) → Semantic (事实抽取) → Procedural (工作流模式)
3. **三流混合检索**：BM25 (关键词) + Vector (语义) + Knowledge Graph (实体关系)，经 RRF 融合
4. **记忆治理**：Ebbinghaus 遗忘曲线自动衰减、冲突检测与解决、版本标识 (Jaccard 相似度)、隐私过滤 (存储前 strip secrets)
5. **多 agent 协调**：Lease 锁机制、Signal 信号系统、Mesh 网格通信
6. **导出与可观测性**：实时 web viewer (port 3113)、Obsidian 导出、完整审计日志、token 节省计算器

评分 4/5。功能极全，仅扣一分在 pre-1.0 的不确定性和无 Python 一等 SDK。[GH]

## 运行环境与资源占用

| 场景 | CPU | 内存 | 存储 | 说明 |
|------|-----|------|------|------|
| 最小（估算） | 低 | ~100 MB | ~100 MB | BM25-only；非独立实测 |
| 推荐（估算） | 低 | ~200 MB | ~500 MB | local embeddings；非独立实测 |

- **运行时**：Node.js ≥ 20，一个 `npx @agentmemory/agentmemory` 启动
- **操作系统**：跨平台 (Node.js)
- **Docker**：提供 Dockerfile/Compose fallback，并会拉取固定的 `iiidev/iii:0.11.2` engine image；本次未验证官方预构建的 agentmemory 用户向 image，因此 `docker_support: false` [GH]
- **GPU**：不需要
- **外部数据库**：无需 Postgres/Qdrant；运行仍需要 Node.js，并需要本地 iii-engine 或 Docker fallback [GH]

资源路径较轻——local embeddings 可避免外部 embedding API，SQLite 免去独立数据库服务。但表中 MB 数字是架构估算而非本次 benchmark；embedding model 会增加内存与存储。评分 4/5。[GH]

## 上手体验

极佳的一键启动体验：`npx @agentmemory/agentmemory` 直接启动 server + viewer。30 秒 demo (`npx @agentmemory/agentmemory demo`) 自动 seeding 3 个真实 session 并演示语义检索效果。MCP 集成：Claude Code 等主流 agent 只需要一个标准 MCP 配置块即 auto-wire。配置集中在 `~/.agentmemory/.env`。

学习路径分三层：(1) 零配置试用 = 一键启动；(2) 深度配置 = 调整 embedding provider + token budget + BM25/Vector 权重；(3) 高级 = 自定义 hook 脚本 + 多 agent 协调。大多数用户停留在第一层即可获得价值。

扣分项：完整 53-tool surface 的文档分散；近期 first-run、stop/restart 与 isolation 回归增加了升级前 smoke test 成本 [GH:v0.9.27]。

评分 3/5。安装入口仍简单，但可靠性回归已对真实上手和升级体验构成影响。

## 代码质量

TypeScript + vitest 测试框架。AGENTS.md 详细记录了架构、一致性规则（修改 MCP 工具需同步更新 8 个文件）、代码模式。iii-engine 抽象（`registerFunction`/`registerTrigger`/`sdk.trigger()`）保持了内部一致性。

顾虑：(1) iii-engine 耦合——核心业务逻辑绑定在其运行时与固定版本；(2) pre-1.0 频繁重构；(3) v0.9.27 之前出现隔离、持久化与大图热路径回归；(4) 183 issues / 191 PRs 表明维护吞吐不足 [GH:v0.9.27] [GH:API-2026-07-12]。

评分下调至 2/5：测试数量很多，但已发生的数据完整性与隔离回归属于硬负面信号。

## 可扩展性

设计层面对扩展友好：

- **12 lifecycle hooks**：可在任意 hook 点注入自定义脚本（`src/hooks/` 下的独立 Node.js 脚本，通过 stdin/stdout 通信）
- **53 MCP tools + 128 REST endpoints**：任意 MCP client 或 HTTP client 可集成 [GH] [GH:v0.9.27]
- **Embedding provider 可插拔**：local (all-MiniLM-L6-v2)、Gemini、OpenAI、Voyage AI 四选一
- **Plugin 系统**：为 Claude Code、OpenClaw、Hermes 等提供专用 plugin 注册
- **多 agent mesh**：Lease + Signal 机制支持自定义多 agent 协调逻辑

但缺少正式的插件市场或第三方插件生态。深度定制可能需要 fork。

评分 4/5。[GH]

## 文档质量

README 信息密度极高，一页覆盖：定位、快速开始、benchmark 表、架构图、配置选项、API 表。附带两个专门文档：
- `benchmark/LONGMEMEVAL.md`：完整基准方法论、按问题类型分解、可重现脚本
- `benchmark/COMPARISON.md`：与 mem0/Letta/Khoj/claude-mem 的全维度对比矩阵

AGENTS.md 为贡献者提供了清晰的架构指南和一致性规则（修改 MCP 工具需同步 8 个文件、修改 REST endpoint 需同步 3 个文件）。

扣分项：53 MCP tools 的完整文档分散；API endpoint 主要由 README/文档表格描述，缺少稳定 OpenAPI contract。

评分 4/5。[GH]

## 社区与成熟度

| 维度 | 评分 | 说明 |
|------|------|------|
| 社区活跃度 | 3/5 | 24,996 stars、2,067 forks，关注度高；但 183 open issues 与 191 open PRs 说明社区输入远超维护吞吐 [GH:API-2026-07-12]。 |
| 成熟度 | 2/5 | v0.9.27、pre-1.0，iii-engine 仍固定 v0.11.2；近期严重回归虽已修复，但不能证明已有稳定运行窗口 [GH:v0.9.27]。 |

社区兴趣很高，但 backlog 与严重回归使“活跃”不能等同于“健康”。选择 agentmemory 意味着用领先功能交换升级、备份与隔离验证成本。

## 安全与风险

- **隐私过滤**：存储前自动 strip secrets（API key、token 等），减少敏感信息泄露
- **审计追踪**：所有 mutation 操作记录完整审计日志
- **本地优先**：默认本地 embeddings，不需要外发数据到第三方 API
- **AGENTMEMORY_SECRET**：API 鉴权机制存在
- **Apache-2.0 许可证**：商业友好，无 copyleft 限制
- GitHub repository advisories endpoint 在本次检查返回 `[]`；这只表示未查到已发布 GHSA，不是安全证明 [GH:API-2026-07-12]

风险：(1) iii-engine 供应链与固定版本；(2) v0.9.27 前的 isolated recall 路径可跨 Agent 读取记忆；(3) 记忆服务天然处理源代码、prompt 与凭据邻近数据 [GH:v0.9.27]。

隔离缺陷已修复且默认 local-first 是缓解因素，但近期安全边界回归足以将评分下调至 3/5。

## 学习价值

**高**——agentmemory 是学习 agent 记忆系统设计的优秀案例：

1. **四层记忆模型**：Working → Episodic → Semantic → Procedural，是对认知心理学记忆模型的工程化翻译，展示了分层整合的实际收益和边界
2. **三流检索融合**：BM25 + Vector + Graph 的 RRF 融合是信息检索的经典组合——理解三者在不同 query 类型上的互补性（keyword 擅长偏好类、vector 擅长语义类、graph 擅长跨 session 推理）
3. **基准方法论**：LongMemEval 的 retrieval-only 评估 vs 端到端 QA 评估的设计选择、诚实标注局限性的做法，是工程评估的示范
4. **Hook 架构**：12 个生命周期 hook 的设计展示了 agent 可观测性基础设施的一种方案——如何在不过度侵入 agent 内部的情况下捕获关键状态变化

对于对 agent memory 方向感兴趣的开发者，阅读其 COMPARISON.md + LONGMEMEVAL.md + AGENTS.md 三个文件，结合源码中 `src/mcp/` 和 `src/hooks/` 目录，可以形成对当前 agent 记忆方案全景的理解。[GH]
