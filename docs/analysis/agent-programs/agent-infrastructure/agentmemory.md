---
title: "agentmemory"
created: 2026-05-15
updated: 2026-05-15
type: repository-analysis
repo_url: "https://github.com/rohitg00/agentmemory"
category: "agent-infrastructure"
tags: [memory, mcp, agent, coding-agent, iii-engine, persistent-storage]
previous_repo: ""
successor: ""
primary_language: "TypeScript"
license: "Apache-2.0"
stars: 9300
forks: 768
last_checked: 2026-05-15
last_verified: 2026-05-15
evidence: "code review + third-party analysis"
archived_reason: ""
docker_support: true
gpu_required: false
estimated_cpu: "minimal"
estimated_memory: "~200MB"
estimated_storage: "~500MB (SQLite + embeddings)"
status: active
sharing_candidate: true
ratings:
  capability: 4
  usability: 4
  performance: 4
  code_quality: 3
  documentation: 4
  community: 4
  maturity: 2
  extensibility: 4
  security: 4
  recommendation: 3
overall_score: 3.6
sources:
  - "[GH] https://github.com/rohitg00/agentmemory"
  - "[Docs] https://agent-memory.dev"
  - "[Benchmark] https://github.com/rohitg00/agentmemory/blob/main/benchmark/LONGMEMEVAL.md"
  - "[Comparison] https://github.com/rohitg00/agentmemory/blob/main/benchmark/COMPARISON.md"
  - "[AgentConn] https://agentconn.com/agents/agentmemory"
  - "[SignalForges] https://signalforges.com/pages/rohitg00-agentmemory-best-practices-2026-05-13/"
---

# agentmemory

> AI coding agent 的持久记忆层——12 个生命周期 hook 自动捕获、BM25+Vector+Graph 三流混合检索、LongMemEval-S R@5 95.2%、本地嵌入免费运行
>
> **状态**: `active` · **总分**: 3.6/5 · **推荐度**: 3/5

## 一句话总结

agentmemory 是面向 AI coding agent 的持久记忆基础设施，基于 iii-engine 构建，通过 12 个生命周期 hook 自动捕获 agent 所有工具调用，经四层记忆整合后提供 BM25+Vector+Knowledge Graph 三流混合检索，年度 token 成本 $0–$10，远低于 LLM 摘要替代方案（~$500/年）。一个 `npx` 命令即可启动。

## 总体评价

agentmemory 是目前 agent 记忆领域**设计最完整、基准最透明**的开源方案。其核心优势在于：(1) 零手动标注——12 个 hook 覆盖从 SessionStart 到 SessionEnd 全生命周期，自动捕获所有工具调用；(2) 检索基准过硬——直接在 README 中贴 LongMemEval-S 结果表（BM25+Vector R@5 95.2%），不依赖抽象"效果很好"的宣称；(3) 本地优先——`all-MiniLM-L6-v2` 本地嵌入免费运行，不需要任何 API key。

主要风险：iii-engine 依赖——一个年轻的运行时（当前 v0.11.2），agentmemory 自身仍在 v0.9.x（pre-1.0），API 稳定性无承诺。适合愿意接受早期版本迭代成本的场景；追求稳定生产部署需等待 1.0。

## 推荐度：3/5

**定位**：对有多个 agent session 的开发者、需要跨 session 保持上下文一致性的场景——agentmemory 是目前功能最完整的开源选择，但需仔细评估 pre-1.0 风险。

- 核心体验出众：一键启动、30 秒 demo、auto-wire MCP、实时 viewer
- 基准透明：LongMemEval-S 检索 Recall 表直接在 README 公开，且诚实标注 retrieval-only 非端到端 QA
- 扩展面广：51 MCP tools、107 REST endpoints、12 hooks、多 embedding provider 可插拔
- **关键扣分**：v0.9.13 pre-1.0，iii-engine 依赖年轻（v0.11.2），API 无稳定性承诺；solo maintainer 存在 bus factor；生产环境部署风险不可忽略

**结论**：作为 agent 记忆领域的先行者值得关注和试用，但目前更适合早期采用者和实验性项目。对于生产环境，建议等待 1.0 发布并持续观察 iii-engine 生态的成熟度。

## 优势

1. **零手动记忆注入**：12 个生命周期 hook（SessionStart → UserPromptSubmit → PreToolUse → PostToolUse → PostToolUseFailure → PreCompact → SubagentStart/Stop → Stop → SessionEnd）自动捕获所有交互，无需任何 `memory.add()` 调用
2. **三流混合检索 + 基准透明**：BM25（词干化+同义词扩展）+ Vector（cosine 相似度）+ Knowledge Graph（实体匹配 BFS 遍历），经 RRF 融合。LongMemEval-S 结果直接在 README 公开，且诚实标注"retrieval-only，非端到端 QA"
3. **极致 token 效率**：年度约 170K tokens（$0–$10，local embeddings 模式免费），对比 LLM 摘要方案约 650K tokens（~$500/年）——但具体节省取决于使用频率、token budget 设置和 embedding provider 选择
4. **多 agent 协调**：Lease（锁）+ Signal（信号）+ Mesh（网格），支持多 agent 共享记忆、同步协调
5. **全面可观测性**：实时 viewer（port 3113）、完整审计追踪（所有 mutation 记录）、Obsidian 导出、隐私过滤（存储前 strip secrets）
6. **无外部依赖自托管**：SQLite + 本地嵌入，不需要 Postgres/Qdrant/pgvector 等外部服务。一个 `npx` 启动

## 劣势

1. **pre-1.0 不稳定**：v0.9.13，API 随时可能 breaking change
2. **iii-engine 锁入**：依赖 iii-engine v0.11.2——同样年轻的运行时，整体生态不成熟，且 iii-engine 本身由同一作者维护
3. **solo maintainer**：Rohit Ghumare 单人维护，bus factor 高
4. **跨基准对比困难**：当前只有 LongMemEval-S retrieval 基准，与 Mem0/Letta 的 LoCoMo 基准不可直接比较（项目已诚实标注）
5. **Node.js 限定**：TypeScript 实现，仅 REST/MCP 可供其他语言调用；对 Python 生态无一等 SDK

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
- 对 bus factor 敏感的项目（solo maintainer）

## 与类似项目对比

> **注意**：以下对比主要来自项目自带的 `benchmark/COMPARISON.md` [Comparison]，属 first-party 竞品分析，结论应结合独立评测交叉验证。

| 项目 | 定位 | 相对本项目 |
|------|------|-----------|
| **agentmemory** | 持久记忆引擎 + MCP server | 基准 |
| **mem0** (53k⭐) | 记忆层 API | 更成熟、生态更大；但需手动 `add()`，依赖 Qdrant/pgvector，token 成本高 (LLM 摘要) |
| **Letta/MemGPT** (22k⭐) | 完整 agent 运行时 | OS 式记忆层级完整；但框架锁入严重，需 Postgres + vector，非 MCP 原生 |
| **Khoj** (34k⭐) | 个人 AI 搜索 | 语义搜索强；但不面向 agent 记忆，无 hook 自动捕获 |
| **claude-mem** (46k⭐) | Claude Code MCP 记忆 | 轻量、SQLite FTS5；但仅 Claude 限定，无多 agent 协调，无向量检索 |

## 个人主页 sharing 候选

**是**——满足所有标准：趋势性（GitHub trending #2，单日 +754⭐）、实用性（coding agent 直接痛点）、基准过硬（LongMemEval-S 表格可直接引用）、技术透明（"retrieval-only"诚实标注避免误导）。适合放在 develata.me Sharing 中作为 "AI 工具推荐" 条目。

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
| 最小 | ~50MB | ~100MB | ~100MB | BM25-only，无 embedding |
| 推荐 | minimal | ~200MB | ~500MB | local embeddings (all-MiniLM-L6-v2) |

- **运行时**：Node.js ≥ 20，一个 `npx @agentmemory/agentmemory` 启动
- **操作系统**：跨平台 (Node.js)
- **Docker**：提供 `docker-compose.yml` 及 `iii-config.docker.yaml`
- **GPU**：不需要
- **外部依赖**：无（SQLite 内嵌，本地 embedding 可选 `@xenova/transformers`）

资源效率高——local embeddings 免费，无外部数据库依赖，单节点即可运行。但相比极简方案（如 claude-mem 的纯 SQLite FTS5），embedding 模型（all-MiniLM-L6-v2）增加了额外内存开销（~100MB）。评分 4/5。[GH]

## 上手体验

极佳的一键启动体验：`npx @agentmemory/agentmemory` 直接启动 server + viewer。30 秒 demo (`npx @agentmemory/agentmemory demo`) 自动 seeding 3 个真实 session 并演示语义检索效果。MCP 集成：Claude Code 等主流 agent 只需要一个标准 MCP 配置块即 auto-wire。配置集中在 `~/.agentmemory/.env`。

学习路径分三层：(1) 零配置试用 = 一键启动；(2) 深度配置 = 调整 embedding provider + token budget + BM25/Vector 权重；(3) 高级 = 自定义 hook 脚本 + 多 agent 协调。大多数用户停留在第一层即可获得价值。

扣分项：`AGENTMEMORY_TOOLS=all` 的完整 51 工具模式文档较少，需要探索。

评分 4/5。[GH]

## 代码质量

TypeScript + vitest 测试框架。AGENTS.md 详细记录了架构、一致性规则（修改 MCP 工具需同步更新 8 个文件）、代码模式。iii-engine 抽象（`registerFunction`/`registerTrigger`/`sdk.trigger()`）保持了内部一致性。

顾虑：(1) iii-engine 耦合——记忆系统的核心业务逻辑绑定在 iii-engine 的三原语上，替换成本高；(2) pre-1.0，303 commits 的迭代速度意味着重构频繁；(3) solo maintainer，bus factor 显著；(4) 12 open issues + 18 PRs 在可控范围内，但缺乏多 reviewer 的代码审查保障。

评分 3/5。[GH]

## 可扩展性

设计层面对扩展友好：

- **12 lifecycle hooks**：可在任意 hook 点注入自定义脚本（`src/hooks/` 下的独立 Node.js 脚本，通过 stdin/stdout 通信）
- **51 MCP tools + 107 REST endpoints**：任意 MCP client 或 HTTP client 可集成
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

扣分项：51 MCP tools 的完整文档不在一处（`AGENTMEMORY_TOOLS=all` 模式需要探索）；API endpoint 仅列 README 表格，无 OpenAPI spec。

评分 4/5。[GH]

## 社区与成熟度

| 维度 | 评分 | 说明 |
|------|------|------|
| 社区活跃度 | 4/5 | 9.3k stars，GitHub trending #2（单日 +754⭐ 峰值），12 issues + 18 PRs 可控。维护者响应及时。第三方评测（AgentConn、SignalForges）正在涌现 |
| 成熟度 | 2/5 | v0.9.13，pre-1.0，303 commits + 高迭代速度。iii-engine v0.11.2 同样年轻。无稳定 API 承诺，breaking change 可能频繁。但 benchmark 结果已稳定可重现 |

社区活跃度高、增长势头好，但成熟度低——这是权衡：选择 agentmemory 意味着接受早期软件的迭代成本以换取领先的功能。[GH]

## 安全与风险

- **隐私过滤**：存储前自动 strip secrets（API key、token 等），减少敏感信息泄露
- **审计追踪**：所有 mutation 操作记录完整审计日志
- **本地优先**：默认本地 embeddings，不需要外发数据到第三方 API
- **AGENTMEMORY_SECRET**：API 鉴权机制存在
- **Apache-2.0 许可证**：商业友好，无 copyleft 限制
- **无已知 CVE**：npm 依赖相对精简（核心依赖 ~5 个）

风险：(1) iii-engine 供应链风险——两层依赖链（agentmemory → iii-engine → 其依赖），攻击面叠加；(2) solo maintainer 的密钥管理安全性未经审计。

评分 4/5。[GH]

## 学习价值

**高**——agentmemory 是学习 agent 记忆系统设计的优秀案例：

1. **四层记忆模型**：Working → Episodic → Semantic → Procedural，是对认知心理学记忆模型的工程化翻译，展示了分层整合的实际收益和边界
2. **三流检索融合**：BM25 + Vector + Graph 的 RRF 融合是信息检索的经典组合——理解三者在不同 query 类型上的互补性（keyword 擅长偏好类、vector 擅长语义类、graph 擅长跨 session 推理）
3. **基准方法论**：LongMemEval 的 retrieval-only 评估 vs 端到端 QA 评估的设计选择、诚实标注局限性的做法，是工程评估的示范
4. **Hook 架构**：12 个生命周期 hook 的设计展示了 agent 可观测性基础设施的一种方案——如何在不过度侵入 agent 内部的情况下捕获关键状态变化

对于对 agent memory 方向感兴趣的开发者，阅读其 COMPARISON.md + LONGMEMEVAL.md + AGENTS.md 三个文件，结合源码中 `src/mcp/` 和 `src/hooks/` 目录，可以形成对当前 agent 记忆方案全景的理解。[GH]
