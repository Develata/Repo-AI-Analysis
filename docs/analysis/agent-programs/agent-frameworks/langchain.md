---
title: "LangChain"
created: 2026-05-18
updated: 2026-05-18
type: repository-analysis
repo_url: "https://github.com/langchain-ai/langchain"
category: "agent-programs/agent-frameworks/"
tags: ["llm", "agent-framework", "langchain", "langgraph", "python", "rag", "ai-infrastructure"]
previous_repo: ""
successor: ""
primary_language: "Python"
license: "MIT"
stars: 136954
forks: 22654
last_checked: 2026-05-18
last_verified: 2026-05-18
evidence: "official docs + GitHub API + PyPI metadata + local code scan; not deployed by Develata"
archived_reason: ""
docker_support: false
gpu_required: false
estimated_cpu: "library-dependent; minimal CPU for framework itself, application-dependent for agents/RAG"
estimated_memory: "library-dependent; core package light, application-dependent for retrievers/vector stores/LLM clients"
estimated_storage: "langchain wheel ~114 KB; sdist ~581 KB; tracked Python source bytes in local scan ~12.4 MB"
status: active
sharing_candidate: true
ratings:
  capability: 5
  usability: 4
  performance: 4
  code_quality: 4
  documentation: 5
  community: 5
  maturity: 4
  extensibility: 5
  security: 3
  recommendation: 4
overall_score: 4.3
sources:
  - "[GH] https://github.com/langchain-ai/langchain"
  - "[GH:api] https://api.github.com/repos/langchain-ai/langchain"
  - "[GH:search] GitHub Search API queries at 2026-05-18T05:37+08: open issues, open PRs, closed issues since 2026-04-18, merged PRs since 2026-04-18"
  - "[GH:contributors] GitHub contributors API Link pagination checked without anon at 2026-05-18T05:37+08"
  - "[GH:readme] https://github.com/langchain-ai/langchain/blob/master/README.md"
  - "[GH:agents] https://github.com/langchain-ai/langchain/blob/40c515c7b18830460672b455b74e9d7140d2a03b/AGENTS.md"
  - "[GH:local-scan] local clone /tmp/langchain at commit 40c515c7b18830460672b455b74e9d7140d2a03b; commands: git ls-files, pyproject.toml scan, tracked Python byte count; checked 2026-05-18T05:37+08"
  - "[GH:advisories] https://github.com/langchain-ai/langchain/security/advisories"
  - "[GHSA:c67j] https://github.com/langchain-ai/langchain/security/advisories/GHSA-c67j-w6g6-q2cm"
  - "[Docs:overview] https://docs.langchain.com/oss/python/langchain/overview"
  - "[Docs:agents] https://docs.langchain.com/oss/python/langchain/agents"
  - "[Docs:products] https://docs.langchain.com/oss/python/concepts/products"
  - "[Docs:langgraph] https://docs.langchain.com/oss/python/langgraph/overview"
  - "[Docs:langsmith] https://docs.langchain.com/langsmith/home"
  - "[Docs:release] https://docs.langchain.com/oss/python/release-policy"
  - "[PyPI] https://pypi.org/pypi/langchain/json"
  - "[PyPI:core] https://pypi.org/pypi/langchain-core/json"
  - "[PyPI:classic] https://pypi.org/pypi/langchain-classic/json"
  - "[Blog:1.0] https://blog.langchain.com/langchain-langgraph-1dot0"
  - "[Blog:logic] https://logic.inc/resources/langchain-production-issues"
  - "[Blog:xqa] https://xqa.io/blog/stopped-using-langchain-abstraction-problem"
  - "[Wiki:openclaw] /opt/data/wiki/github-repo-wiki/agent-programs/agent-assistants/openclaw.md"
  - "[Wiki:hermes] /opt/data/wiki/github-repo-wiki/agent-programs/agent-assistants/hermes-agent.md"
---

# LangChain

> LLM/agent application framework: model/tool abstractions, prebuilt agent loop, middleware, and integrations; built on LangGraph rather than itself being an end-user autonomous assistant.
>
> **状态**: `active` · **总分**: 4.3/5 · **推荐度**: 4/5

## 一句话总结

LangChain 适合需要快速标准化 LLM/agent 应用开发的 Python 团队；它和 OpenClaw、Hermes Agent 不完全同类，更准确地说是 **agent framework**，位于 assistant / harness 之下、runtime 之上或之旁的抽象层 [Docs:products]。

## 总体评价

LangChain 的价值不是“帮你直接拥有一个 agent assistant”，而是提供一套工程抽象：统一 chat model、tool、structured output、middleware、agent loop、集成包与 LangSmith/LangGraph 生态入口 [GH:readme][Docs:overview][Docs:agents]。从这个意义上看，它和 OpenClaw、Hermes Agent 的关系更像“库/框架 vs 产品化 agent/harness”：OpenClaw、Hermes Agent 在现有 wiki taxonomy 中更面向可直接运行的 agent assistant 或工作流系统；LangChain 更像应用开发层的公共语言 [Wiki:openclaw][Wiki:hermes]。

总体上，LangChain 是一个 **强生态、强文档、强抽象、但必须谨慎使用的框架**。它适合在多模型、多工具、多 provider、多 agent pattern 的团队中统一接口；不适合为一个简单 API call、一个短 prompt pipeline 或一个轻量 RAG demo 引入整套抽象税。其 1.0 之后明确收缩到核心 agent loop，并把 legacy 功能迁到 `langchain-classic`，这是对过去“抽象过重、surface area 过大”的一次自我修正 [Blog:1.0][PyPI:classic]。

## 推荐度：4/5

For Python teams who need provider-agnostic LLM/agent abstractions and expect to grow from prototype into observable, customizable agent workflows, LangChain is worth serious trial use.

不给 5 的原因很明确：LangChain 不是低成本的“默认选择”。它带来的是一套框架语言；框架语言一旦进入项目，就会影响错误栈、升级路径、概念边界和团队 mental model。第三方批评集中在 abstraction tax、debugging difficulty、breaking changes / migration burden、简单任务过度工程化等方面 [Blog:logic][Blog:xqa]。这些批评并非都公平地反映 1.0 后的状态，但它们指出了 LangChain 这类框架的真实风险：若你的问题本来是 20 行 SDK call，框架会把简单性吃掉。

但也不应因“LangChain 曾经臃肿”而低估现在的它。1.0 后官方明确把 `langchain` 收缩为以 `create_agent`、middleware、standard content blocks、provider-agnostic interfaces 为核心的 agent framework；复杂 runtime 交给 LangGraph，legacy chains 交给 `langchain-classic` [Blog:1.0][Docs:release]。这是一个成熟项目做出的结构性纠偏。基于生态规模、文档完整度与维护活跃度，对需要长期维护 agent 应用的团队，它仍是最值得研究和试用的 Python 框架之一；这不是独立生产可靠性审计结论。

## 优势

1. **生态极强**：GitHub API 快照显示约 137k stars、22.6k forks；GitHub Search API 当次查询显示 open issues 约 412、open PRs 约 168、近 30 天 closed issues 约 99、merged PRs 约 232，说明社区规模和维护吞吐都非常高 [GH:api][GH:search]。
2. **抽象层次清楚化**：官方文档把 LangChain / LangGraph / Deep Agents 分别定义为 framework / runtime / harness，较早期“什么都往 LangChain 放”的状态更清晰 [Docs:products][Blog:1.0]。
3. **1.0 后有稳定承诺**：`langchain` 与 `langchain-core` 遵循 semver，1.x deprecated features 持续工作，breaking changes 只在 major release；0.3 进入维护至 2026-12 [Docs:release]。
4. **扩展性非常强**：model provider、tools、middleware、structured output、LangGraph runtime、LangSmith observability/eval 形成完整生态 [Docs:agents][Docs:langgraph][Docs:langsmith]。
5. **文档与学习材料丰富**：README、docs、API reference、Chat LangChain、LangChain Academy、contributing docs 都齐全 [GH:readme][Docs:overview]。

## 劣势

1. **框架税真实存在**：简单任务可能被 PromptTemplate、Runnable、parser、middleware、callbacks、LangSmith 等概念放大，调试时也可能需要理解框架内部路径 [Blog:logic][Blog:xqa]。
2. **历史包袱重**：`langchain-classic` 的存在本身说明旧 chains、community re-exports、indexing API、deprecated functionality 需要被单独收纳；这对新用户是信息噪声 [PyPI:classic]。
3. **安全面不小**：公开 Security Advisories 中 2025-2026 有多条 advisory，涉及 deserialization、prompt template、path traversal、SSRF 等，其中包含 Critical / High / Moderate / Low 项 [GH:advisories]。
4. **生态复杂度高**：`langchain`、`langchain-core`、`langchain-classic`、`langgraph`、`langsmith`、provider packages、community packages 各自版本策略不同；尤其 `langchain-community` 不承诺与 core 同等严格 semver，不同 integration / partner package 的质量与安全 profile 也不能自动等同于 core [Docs:release]。
5. **生产采用不是由 stars 自动证明的**：高 stars 和高 issue/PR 吞吐说明社区活跃，不等于你的场景中生产可靠；实际可靠性仍取决于 agent design、observability、eval、tool permissions 与升级纪律。

---

## 适合什么场景

- 团队需要统一多模型 provider 接口：OpenAI、Anthropic、Ollama、DeepSeek、Groq、Mistral 等 provider 的切换与集成 [PyPI]。
- 需要从普通 LLM app 自然扩展到 tool-calling agent、structured output、middleware、memory、streaming、human-in-the-loop 等 [Docs:agents]。
- 项目预计会接入 LangSmith 做 tracing、evaluation、prompt / dataset 管理 [Docs:langsmith]。
- 希望先用高层 abstraction 快速落地，再在复杂场景下 drop down 到 LangGraph 做 durable execution、persistence、human-in-the-loop runtime [Docs:products][Docs:langgraph]。
- 团队愿意接受框架语言，并有测试、版本 pinning、observability 和 migration review 纪律。

## 不适合什么场景

- 只是一次简单模型调用、短 prompt pipeline、单 provider API wrapper。此时直接 SDK call 通常更清晰。
- 希望获得一个可直接对话/自主工作的 agent assistant。LangChain 是 framework，不是 OpenClaw/Hermes Agent 那样的 assistant/harness。
- 对依赖体积、错误栈透明度、运行路径可解释性极端敏感的基础设施代码。
- 无法投入时间理解 LangChain / LangGraph / LangSmith / classic / community package 边界的团队。
- 处理不可信输入、远程 URL、反序列化对象、模板执行等安全敏感路径，但又没有严格沙箱与安全审计的项目。

## 与类似项目对比

| 项目 | 定位 | 相对本项目 |
|------|------|-----------|
| LangChain | Agent framework / LLM app framework | 当前分析对象；高层抽象、provider-agnostic interface、agent loop、middleware 与 integrations |
| LangGraph | Agent runtime / orchestration runtime | LangChain agents 底层依赖 LangGraph；LangGraph 更低层、更适合 durable execution、stateful workflow、human-in-the-loop |
| Deep Agents | Agent harness | 比 LangChain 更 opinionated，内置 planning、subagents、filesystem、context management；更接近 autonomous agent scaffold |
| LlamaIndex | Data / RAG-centric LLM framework | 更偏数据连接、indexing、retrieval 与 knowledge workflow；LangChain 更偏通用 model/tool/agent abstraction |
| Vercel AI SDK | JS/TS AI app framework | 更偏 frontend / full-stack TypeScript AI UI 与 streaming；LangChain Python 更偏 Python agent ecosystem |
| OpenAI Agents SDK | Provider-led agent SDK | 更贴近 OpenAI stack；LangChain 更 provider-agnostic |
| CrewAI | Multi-agent orchestration framework | 更 opinionated 地面向 role-based multi-agent；LangChain 更底层通用，复杂 orchestration 通常转向 LangGraph |
| OpenClaw | End-user / local agent assistant | 更像可直接使用的 assistant/harness；LangChain 是开发框架，不是同层产品 [Wiki:openclaw] |
| Hermes Agent | Personal agent runtime / assistant system | Hermes 更像带工具、skills、memory、delivery 的可运行 agent 系统；LangChain 是可被这类系统借鉴或调用的 framework layer [Wiki:hermes] |

上述项目只做定位级对比，未按同一 10 维度框架深审。核心分类判断是：**LangChain 与 OpenClaw/Hermes 有关联，但不是同一类；LangChain 是 framework，OpenClaw/Hermes 更接近 assistant 或 harness/runtime system**。

## 个人主页 sharing 候选

是，适合写一篇 taxonomy 型 sharing：不是“LangChain 好不好”，而是“agent framework / runtime / harness / assistant 的层次如何区分”。LangChain 是这个问题的好案例，因为官方 taxonomy 已经明确区分 LangChain、LangGraph、Deep Agents [Docs:products]，而社区对它的批评又集中体现了 abstraction 的利弊 [Blog:logic][Blog:xqa]。

---

## 它能做什么

评分 5/5。

LangChain 覆盖 LLM/agent application 的主要公共抽象：

- model interface：`init_chat_model` 与 provider-specific chat model integrations [GH:readme][Docs:overview]；
- agent creation：`create_agent` 将 model、tools、system prompt 组合成 tool-calling loop [Docs:agents]；
- tool system：Python functions、coroutines、`@tool` decorator、dynamic tool behavior [Docs:agents]；
- middleware：dynamic model selection、fallback、human-in-the-loop、summarization、PII redaction 等 1.0 后强化的 customization surface [Docs:agents][Blog:1.0]；
- structured output：围绕现代 LLM content blocks / structured responses 做 provider-agnostic normalization [Blog:1.0]；
- integrations：仓库 partner packages 与 PyPI metadata 覆盖一批主流 provider / service integrations；本次本地扫描明确看到 Anthropic、DeepSeek、Fireworks、Groq、HuggingFace、Mistral、Ollama、OpenAI、OpenRouter、Perplexity、Qdrant、xAI 等，具体包清单会随生态变化 [GH:agents][PyPI]；
- runtime escape hatch：高级 orchestration 交给 LangGraph，支持 durable execution、streaming、persistence、human-in-the-loop [Docs:langgraph]；
- observability / eval：通过 LangSmith 进入 tracing、evaluation、prompt / dataset 管理等平台层能力；更重的部署/runtime 能力需结合 LangGraph/LangSmith 生态具体区分 [Docs:langsmith][Docs:langgraph]。

这已经覆盖了多数常见 agent-framework surface。唯一要强调的是：能力广不是“都该用”。它的 5/5 是 capability，不是 recommendation。

## 运行环境与资源占用

| 场景 | CPU | 内存 | 存储 | 说明 |
|------|-----|------|------|------|
| 最小 | 单核即可 | Python 进程基础开销 | `langchain` wheel 约 114 KB，sdist 约 581 KB | 只做模型接口或简单 agent loop；实际消耗主要来自模型 API、retriever、vector store 或用户代码 [PyPI] |
| 推荐 | 2-4 cores | 取决于并发请求、工具、retriever、LangSmith tracing 与 LangGraph persistence | local scan 统计的 tracked Python source bytes 约 12.4 MB；完整 clone 远大于安装包 | 用于开发、测试、多 provider integration、agent workflow 时按应用复杂度扩容 [GH:local-scan] |

- **运行时**：Python `>=3.10,<4.0`；PyPI 当前 `langchain==1.3.1`，依赖 `langchain-core>=1.4.0,<2.0.0`、`langgraph>=1.2.0,<1.3.0`、`pydantic>=2.7.4,<3.0.0` [PyPI]。
- **操作系统**：Python library，通常跨平台；具体 provider SDK、vector store、tooling 另算。
- **Docker**：`docker_support: false` 指没有把官方 runtime Docker image 作为主要交付形态；这是 library/framework 的正常特征，不作为缺点扣分。
- **GPU**：不要求 GPU；若本地模型、embedding、reranker 或 vector workload 需要 GPU，那是下游应用选择。
- **外部依赖**：生产中主要依赖模型 provider API、vector store、observability/eval 服务、tool integrations 等。

评分 4/5。框架本体轻，主包体积很小；但抽象层、callbacks/tracing、retriever/vector store、tool execution 等在真实应用中可能引入额外 latency 与 debugging overhead。资源效率不能按“空 import”评 5，也不能把下游模型成本完全算到 LangChain 头上。

## 上手体验

评分 4/5。

正面：README 的 Quickstart 极短，`pip install langchain` 后即可 `init_chat_model(...).invoke(...)`；agent docs 用 `create_agent(model, tools, system_prompt)` 给出直接入口 [GH:readme][Docs:overview][Docs:agents]。1.0 后把主包重新聚焦在 agent loop 与 middleware，也降低了早期 chains / agents / LCEL / community integrations 混在一起的混乱感 [Blog:1.0]。

限制：LangChain 的“容易开始”不等于“容易长期掌握”。新用户很快会遇到 `langchain`、`langchain-core`、`langchain-classic`、`langgraph`、`langsmith`、provider packages、community packages 的边界问题；此外，许多生产能力需要理解 tracing、eval、structured output、middleware、state persistence、version pinning 等概念。官方文档清晰，但生态面太大，因此 usability 不给 5。

## 代码质量

评分 4/5。

本地 clone 在 commit `40c515c7b18830460672b455b74e9d7140d2a03b` 上扫描：仓库包含 2882 个 tracked files，其中 Python 2478 个；`libs/core/` 389 个文件、`libs/langchain/` 1655 个文件、`libs/langchain_v1/` 147 个文件、`libs/partners/` 547 个文件；测试相关 Python 文件约 794 个；`.github/workflows/` 下 22 个 workflow；各 package 独立 `pyproject.toml`，使用 `uv`、ruff、mypy、pytest、standard-tests 等 [GH:local-scan]。

AGENTS.md 进一步说明 monorepo 分层：`langchain-core` 是 base abstractions，`langchain_v1` 是 actively maintained `langchain` package，`libs/langchain` 是 `langchain-classic`，`partners/` 维护 provider integrations，`standard-tests/` 提供 integrations 共享测试套件；并要求 public API 稳定、类型标注、unit/integration tests、Conventional Commits、PR issue link、security risk assessment 等 [GH:agents]。

不给 5 的原因：没有在本次审查中得到覆盖率 ≥80% 的直接证据；仓库历史包袱大，legacy/classic 与 v1 并存导致维护复杂度高；integration-heavy monorepo 天然比小而清的单库更难维护。代码质量强，但不是“无脑优雅”。

## 可扩展性

评分 5/5。

LangChain 的核心价值之一就是扩展性：provider packages、tool interface、middleware、structured output strategies、LangGraph runtime、LangSmith tracing/eval 都是扩展面 [Docs:agents][Docs:products][Docs:langsmith]。PyPI extras 和 partner packages 覆盖大量模型与服务提供商；`langchain-core` 把基础接口从高层包中抽离，允许 provider 实现共同协议 [PyPI:core]。

更重要的是，1.0 后官方不再试图把所有层次塞进一个“万能 LangChain”，而是分为 framework / runtime / harness：LangChain 负责高层 agent framework，LangGraph 负责 runtime，Deep Agents 负责更 opinionated harness [Docs:products]。这种分层比单纯“插件多”更重要，因为它给出了扩展边界。

## 文档质量

评分 5/5。

文档覆盖 README、概念文档、agent guides、LangGraph overview、LangSmith docs、release policy、versioning、contributing、API reference、Chat LangChain、Academy 等 [GH:readme][Docs:overview][Docs:agents][Docs:langgraph][Docs:langsmith][Docs:release]。尤其值得肯定的是产品层 taxonomy：framework / runtime / harness 的区分直接回答了“LangChain 和 OpenClaw、Hermes 是否同类”的问题 [Docs:products]。

LangChain 的文档质量不是只有“多”，而是能承认自身演化：1.0 blog 明确说过去 abstraction 有时太重、package surface area 过大、用户想要更多 agent loop 控制；随后解释 `create_agent`、middleware、LangGraph under the hood、legacy package 的新结构 [Blog:1.0]。这种自我修正型文档，比单纯营销文档更有价值。

## 社区与成熟度

| 维度 | 评分 | 说明 |
|------|------|------|
| 社区活跃度 | 5/5 | GitHub API 快照：136,954 stars、22,654 forks、870 watchers；Search API 当次查询：open issues 约 412、open PRs 约 168、近 30 天 closed issues 约 99、merged PRs 约 232；contributors endpoint 页数估计 469。社区极大且维护吞吐高 [GH:api][GH:search][GH:contributors]。 |
| 成熟度 | 4/5 | 项目创建于 2022-10，整体生态已经从 pre-1.0 快速迭代进入 LangChain/LangGraph 1.0；官方承诺 semver、1.x deprecated features 保持工作、0.3 维护到 2026-12 [GH:api][Docs:release][Blog:1.0]。不给 5 是因为 1.0 API 稳定承诺较新，且历史上 breaking changes / migration burden 是真实社区痛点 [Blog:logic][Blog:xqa]。 |

社区指标不等于生产采用证明。LangChain 官方和 PyPI metadata 都强调 production/stable 与 battle-tested，但这属于发布者自述而非独立审计；本分析没有 Develata 部署经验，也没有独立生产可靠性审计。因此 community 可给 5，maturity 保守给 4 [PyPI][PyPI:core]。

## 安全与风险

评分 3/5。

安全风险需要分层看。正面信号：项目有活跃维护、公开 Security Advisories；本次检查中 PyPI JSON 对 `langchain`、`langchain-core`、`langchain-classic` 当前 release 未列出 vulnerabilities，但 GitHub advisories 仍显示历史 affected-version 问题；AGENTS.md 中要求 no `eval()` / `exec()` / `pickle` on user-controlled input、异常处理、资源清理等 [GH:advisories][PyPI][PyPI:core][PyPI:classic][GH:agents]。

但不能给 4。GitHub Security Advisories 页面在 2025-2026 显示多条 advisory，包括 unsafe deserialization、image token counting SSRF、prompt template validation、legacy `load_prompt` path traversal、HTML splitter SSRF redirect bypass、serialization injection、template injection 等；其中 GHSA-c67j-w6g6-q2cm 为 Critical，其他 advisory 覆盖 High / Moderate / Low 等等级；这些 advisory 可能只影响特定历史版本或特定组件，不等于当前最新版必然易受攻击 [GH:advisories][GHSA:c67j]。它们说明的是：LangChain 作为“连接模型、工具、URL、模板、文件、序列化、第三方服务”的框架，攻击面天然大。

实际使用时，安全纪律比“装没装 LangChain”更关键：不要对不可信输入开放 prompt template / loader / URL splitter / serialization；对 tool execution 做权限边界；对 agent shell/file/network 能力加 sandbox；对 provider keys 做最小权限；pin versions 并关注 advisories。公开 advisory 不代表项目不可用，但足以把 security 评分压到 3。

## 学习价值

LangChain 非常值得学习，但学习目标应当是“理解 agent framework 的抽象边界”，而不是照抄所有 pattern。

它的最大学习价值有三点：

1. **taxonomy**：framework / runtime / harness 的层次区分清楚，能帮助判断 OpenClaw、Hermes Agent、Deep Agents、LangGraph、LangChain 到底是不是同类 [Docs:products]。
2. **抽象利弊**：LangChain 是研究 abstraction tax 的绝佳样本。它既证明统一接口和生态整合有价值，也证明过早抽象会制造 debugging 与 migration 成本 [Blog:1.0][Blog:logic][Blog:xqa]。
3. **工程演化**：从早期 chains/RAG/everything framework，到 1.0 的 agent loop + middleware + LangGraph under the hood + classic 分包，体现了一个高热度 AI 框架如何在用户反馈中重新收敛边界 [Blog:1.0][Docs:release]。

一句话：LangChain 可以用，但更应该先学会“何时不用”。善用者得其抽象，滥用者受其抽象。