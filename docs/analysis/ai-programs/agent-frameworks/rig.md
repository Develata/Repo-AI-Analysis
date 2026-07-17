---
title: "Rig"
created: 2026-07-16
updated: 2026-07-16
type: repository-analysis
repo_url: "https://github.com/0xPlaygrounds/rig"
category: "ai-programs/agent-frameworks"
tags: ["agent-framework", "rust", "llm", "rag", "tools", "multi-provider", "vector-store", "wasm", "opentelemetry", "crates-io"]
previous_repo: ""
successor: ""
primary_language: "Rust"
license: "MIT"
stars: 7951
forks: 889
last_checked: 2026-07-16
last_verified: 2026-07-16
evidence: "Current GitHub GraphQL/REST metadata, release/advisory/community/tree scans + pinned README/CONTRIBUTING/AGENTS + official docs.rs/rig.rs/crates.io metadata; library not locally built or production-benchmarked"
archived_reason: ""
docker_support: false
gpu_required: false
estimated_cpu: "library overhead is workload-dependent and usually secondary to network/model/vector-store work; local Candle models change the profile"
estimated_memory: "host application and selected providers/features determine memory; no independent benchmark in this review"
estimated_storage: "rig-core 0.40.0 crate archive is about 0.75 MB; full dependency/build cache and optional companion integrations are much larger"
status: active
ratings:
  capability: 4
  usability: 4
  performance: 3
  code_quality: 4
  documentation: 4
  community: 4
  maturity: 2
  extensibility: 5
  security: 3
  recommendation: 4
overall_score: 3.7
sources:
  - "[GH] https://github.com/0xPlaygrounds/rig"
  - "[GH:api] GitHub GraphQL/REST queried 2026-07-16 UTC at a779321fcc4884994fc4303c806625255e8a6970; created=2024-06-05, stars=7951, forks=889, open issues=55, open PRs=31, merged PRs=1019, releases=631, first contributors page=100, license=MIT"
  - "[GH:languages] GitHub GraphQL queried 2026-07-16; Rust=7453055 bytes of 7458067 measured total, plus very small Shell/Nix/Makefile/SurrealQL/Haxe components"
  - "[GH:release] https://github.com/0xPlaygrounds/rig/releases/tag/v0.40.0 and Releases API queried 2026-07-16; latest published 2026-07-11; GitHub assets are source archives rather than end-user binaries"
  - "[GH:tree] GitHub recursive tree API scanned 2026-07-16 UTC at a779321fcc4884994fc4303c806625255e8a6970; 1514 blobs, 82 Cargo.toml files, 2 workflow files and 981 test-like paths by filename/directory heuristic; the high heuristic count includes fixtures/cassettes and is not coverage"
  - "[GH:community] GitHub community profile API queried 2026-07-16; health_percentage=62, README/license/CONTRIBUTING detected, but SECURITY/CODE_OF_CONDUCT/PR template not detected"
  - "[GH:advisories] https://api.github.com/repos/0xPlaygrounds/rig/security-advisories?per_page=100 queried 2026-07-16; returned no published repository advisories in this check"
  - "[GH:readme] https://github.com/0xPlaygrounds/rig/blob/a779321fcc4884994fc4303c806625255e8a6970/README.md fetched 2026-07-16; defines Rig as a Rust LLM-application library, lists 20+ providers/10+ vector stores/WASM and explicitly warns that future releases will contain breaking changes"
  - "[GH:contributing] https://github.com/0xPlaygrounds/rig/blob/a779321fcc4884994fc4303c806625255e8a6970/CONTRIBUTING.md; documents strict clippy, provider capability architecture, feature-gated companion crates and cassette-backed/live integration testing"
  - "[GH:agents] https://github.com/0xPlaygrounds/rig/blob/a779321fcc4884994fc4303c806625255e8a6970/AGENTS.md; documents CompletionModel/EmbeddingModel/VectorStoreIndex/Tool traits, WASM compatibility, typed provider capability design, agent hooks and cassette secret-review rules"
  - "[Crates] https://crates.io/api/v1/crates/rig-core fetched 2026-07-16; default version=0.40.0, 60 published versions, total downloads=1635503, recent downloads=1093315, crate_size=752652 bytes, edition=2024, MIT"
  - "[Docs:intro] https://rig.rs/docs extracted 2026-07-16; positions Rig as typed Rust building blocks for agents, tools, RAG and structured output rather than an end-user autonomous agent"
  - "[Docs:integrations] https://rig.rs/docs/integrations extracted 2026-07-16; documents model providers in core and feature-gated companion crates for vector stores to control dependency cost"
  - "[Docs:rag] https://rig.rs/docs/concepts/rag extracted 2026-07-16; documents VectorStoreIndex/InsertDocuments, dynamic context/tools, in-memory and durable stores, and RAG limitations"
  - "[Docs:features] https://docs.rs/crate/rig-core/0.40.0/features checked 2026-07-16 via crates.io metadata; features include TLS/client choices, WASM, MCP, websocket, document/media and test utilities"
  - "[WikiLocal:comparisons] Local wiki positioning consulted 2026-07-16: ai-programs/agent-frameworks/langchain.md, semantic-kernel.md, autogen.md and crewai.md; comparison rows were not externally re-audited under the same 10 dimensions"
---

# Rig

> Rust 原生 LLM/agent application framework：用 typed provider traits、tools、RAG/vector stores、hooks 与 feature-gated companion crates 构建 agent；它是 SDK，不是 Codex/Goose 式可直接使用的终端 agent。
>
> **状态**: `active` · **总分**: 3.7/5 · **推荐度**: 4/5
> **核验版本**: `rig-core 0.40.0` · commit `a779321` · 2026-07-16

## 一句话总结

Rig 是目前最有影响力的 Rust agent framework 之一，适合把 agent 嵌入 typed、concurrent、production-oriented Rust service；若需求只是“安装后帮我写代码”，它选错了抽象层。

## 总体评价

Rig 的核心价值不是提供 autonomous desktop/CLI，而是为 Rust 应用给出统一 abstractions：`CompletionModel`、`EmbeddingModel`、`VectorStoreIndex`、`Tool`、agent builder、structured extraction、streaming、RAG、memory/hooks 与 provider clients [GH:agents][Docs:intro]。因此它归入 `agent-frameworks`，不应因 README 出现 “agents” 就与 Codex/Goose 直接排同一产品榜。

它的工程策略很 Rust：`rig-core` 保持 provider abstractions 与较轻基础依赖，数据库/local-inference 等重集成拆成 feature-gated companion crates；provider 能力用 types/capability declarations 表达，WASM 使用专门 compatibility bounds [GH:contributing][GH:agents][Docs:integrations]。这种设计比动态 Python framework 需要更多类型工作，但更适合在大型 Rust codebase 中获得 compile-time constraints。

社区信号也已形成：约 7951 stars、889 forks、1019 merged PRs、631 releases，first-page contributors 已满 100；crates.io 报告 `rig-core` 累积约 163 万 downloads，README 也列出项目方公开用户/项目 [GH:api][Crates][GH:readme]。不过 API 稳定性必须保守：README 直接警告未来 updates **will contain breaking changes**，当前版本仍是 0.40.0 [GH:readme][Crates][GH:release]。

## 推荐度：4/5

对 Rust 团队，若目标是构建自己的 agent/RAG/service 而非使用 end-user agent，Rig 值得优先做 spike。它提供足够广的 providers、vector stores、tools、hooks、streaming、telemetry 与 WASM surface，同时保持 source/type visibility [GH:readme][GH:agents][Docs:integrations]。

不给 5 的原因是 0.x breaking-change promise、integration surface 快速增长、无独立 benchmark/production deployment test，以及缺少 SECURITY.md。采用时应 pin exact versions、把 provider API 回归纳入 cassettes，并隔离 optional companion dependencies。

## 优势

1. **Rust-native typed abstraction**：不是 Python API 的机械移植，provider capabilities、builders、error types、WASM bounds 与 hooks 都体现 Rust 类型系统 [GH:agents][GH:contributing]。
2. **Provider 与 retrieval 覆盖广**：README 声明 20+ model providers、10+ vector stores，官方 integrations 页面给出统一 client/index contracts [GH:readme][Docs:integrations]。
3. **模块化依赖策略清楚**：core 保持相对轻，MongoDB/Qdrant/LanceDB/Postgres/Candle 等放 companion crates/features [GH:contributing][Docs:integrations]。
4. **测试方法比普通 API wrapper 扎实**：provider changes 优先 cassette-backed replay，live tests 分离，并要求审查 fixture 中 secrets/account identifiers [GH:contributing][GH:agents]。
5. **RAG/tool abstractions完整**：dynamic context、dynamic tools、in-memory/durable stores 与现代 RAG caveats 都有文档 [Docs:rag]。
6. **采用信号不只来自 stars**：crates.io downloads 是独立使用信号，README user list 则是项目方公开列出的采用/展示清单 [Crates][GH:readme]。

## 劣势

1. **明确承诺 breaking changes**：0.40.0 尚未进入稳定兼容阶段，升级需读 migration notes 与编译修复 [GH:readme][Crates]。
2. **不是 batteries-included autonomous runtime**：session persistence、sandbox、approval、human UI、multi-channel delivery 与 deployment policy 要由应用自己实现。
3. **integration matrix 很大**：provider API 演化、feature combinations、TLS/WASM/vector-store versions 会制造维护面 [GH:contributing][Docs:features]。
4. **安全治理文件不完整**：community profile 未检测到 SECURITY.md；advisory 空结果不能替代 disclosure process [GH:community][GH:advisories]。
5. **全量测试/编译可能较重**：82 manifests、provider cassettes、external-service integrations 与 all-features matrix 对 contributor CI 有成本 [GH:tree][GH:contributing]。
6. **本次未运行 benchmark/build**：性能判断来自 architecture/package evidence，不是 latency/allocations 实测。

---

## 适合什么场景

- 已有 Rust backend，希望原生加入 provider abstraction、tools、RAG、streaming 或 structured output。
- 对 compile-time correctness、typed errors、WASM compatibility 与 controlled dependency graph 有要求。
- 要在 OpenAI/Anthropic/Gemini/Ollama/xAI 等 providers 间保留应用级替换能力。
- 需要 Qdrant/Postgres/MongoDB/LanceDB 等 vector-store integration，但不想全部依赖进入 core。
- 愿意 pin 0.x version 并通过 cassettes/contract tests 管理 provider drift。

## 不适合什么场景

- 只想安装一个 CLI/TUI 立即让 agent 修改仓库。
- 团队主要是 Python/TypeScript，且没有维护 Rust async/type-heavy code 的能力。
- 需要当前即承诺 semver-stable public API 的基础平台。
- 期待 framework 自动提供 OS sandbox、approval UI、secret isolation 或 prompt-injection defense。
- 只做一两个简单 model calls；直接 SDK 可能更小、更清楚。

## 与类似项目对比

| 项目 | 定位 | 相对本项目 |
|---|---|---|
| Rig | Rust-native LLM/agent application framework | 本项目；类型安全、Rust integration 与 feature-gated dependencies 是核心价值 |
| LangChain | Python/JS 广生态 LLM application framework | LangChain integrations/learning ecosystem 更大；Rig 更小、更 typed、更适合 Rust service |
| Semantic Kernel | Microsoft 多语言 enterprise agent SDK | Semantic Kernel 的 .NET/Java/Python 与企业生态更强；Rig 更 Rust-native、crate-level modular |
| AutoGen | 多 agent conversation/orchestration framework | AutoGen 更偏 multi-agent patterns/runtime；Rig 更偏 provider/tool/RAG primitives 与应用嵌入 |
| CrewAI | role/task-oriented multi-agent framework | CrewAI 上手多 agent workflow 更直接；Rig 给予更底层、更可控的 Rust building blocks |

上述项目依据本地 wiki 既有条目的定位与分类语境做 comparison，未在本轮按同一 10 维度重新抓取外部事实 [WikiLocal:comparisons]。

---

## 它能做什么

评分 4/5。

Rig 覆盖 completion/chat/streaming、embeddings、structured extraction、tool calling、agent hooks、memory traits、dynamic context/tools、RAG、vector stores、telemetry、多模态能力与 WASM/core；README 还列出 20+ providers、10+ vector stores 与 audio/image/transcription paths [GH:readme][GH:agents][Docs:integrations][Docs:rag]。

不给 5，不是因为它缺少 terminal/desktop UI，而是因为它更偏 provider/tool/RAG primitives；multi-agent orchestration、durable workflow state、evaluation harness、deployment policy 等较高层 runtime 仍主要由 host application 或 companion ecosystem 承担。作为 Rust framework breadth 很强，但不是完整 agent platform。

## 运行环境与资源占用

评分 3/5。

| 场景 | CPU / GPU | 内存 | 存储 | 说明 |
|---|---|---|---|---|
| `rig-core` + hosted model | orchestration/network-bound；GPU 不需要 | host app 决定 | crate archive 约 0.75 MB | dependency/build artifacts 另计 [Crates] |
| vector-store companion | 由 database/client workload 决定 | backend/driver 决定 | feature-specific | 不使用的 integration 不必引入 [Docs:integrations] |
| Candle/local model | inference-heavy，GPU/CPU 由模型决定 | model weights/context 主导 | 模型权重另计 | optional companion，不代表 core runtime cost [GH:readme] |

模块化与 feature gating 有利于控制依赖，但 Rust compile cache/all-features matrix 并不轻。没有 CPU、内存或吞吐 benchmark，按统一边界给 3。

## 上手体验

评分 4/5。

Rust 用户可用 `cargo add rig` 或 `cargo add rig-core`，几行 builder code 建立 provider client 与 agent；官方 docs、README、docs.rs 和 examples 提供完整入口 [GH:readme][Docs:intro]。统一 client/builder patterns 降低切 provider 的认知负担。

学习曲线来自 Rust async/traits/generics、feature flags 与 provider-specific capabilities。还要自己搭 app runtime、state、policy 与 deployment，所以不属于零配置 5 分。

## 代码质量

评分 4/5。

仓库约 99.9% Rust，82 manifests，公开 workflow、strict clippy 与贡献规则齐全；CONTRIBUTING/AGENTS 禁止随意 unwrap/expect/TODO/unimplemented，要求 typed errors、public docs、provider capability declarations 与 scoped PRs [GH:languages][GH:tree][GH:contributing][GH:agents]。

测试策略有清楚层次：unit/core、cassette replay、ignored live provider tests、external-service integrations；fixtures 还要求 secret scrubbing review [GH:contributing][GH:agents]。不给 5，因为本轮未跑 tests，也无 coverage ≥80% 证据；981 个 test-like paths 包含大量 cassettes/fixtures，不能当 coverage。

## 可扩展性

评分 5/5。

Provider traits、Tool、VectorStoreIndex、AgentHook/HookStack、feature-gated companion crates、derive macros、MCP/WebSocket/WASM features 与 facade re-exports 构成完整 extension architecture [GH:agents][GH:contributing][Docs:features]。新增 provider/vector store 有明确 checklist 与 module boundary。

这种扩展不是只能在 config 中换 endpoint，而是可以实现新 typed backend 并进入统一 agent/RAG pipeline，满足 5 分边界。

## 文档质量

评分 4/5。

README、rig.rs concepts/integrations/guides、docs.rs API、CONTRIBUTING 与 AGENTS 共同覆盖 users、API consumers、contributors 与 coding agents [GH:readme][Docs:intro][Docs:integrations][Docs:rag][GH:contributing][GH:agents]。RAG 文档还主动讨论 chunking、contradictory/stale data 等限制 [Docs:rag]。

扣分来自快速版本变化下的 docs drift 风险，以及部分 docs.rs/version links 在当前站点切换时可能短暂不一致。安全 disclosure 文档也缺失 [GH:community]。

## 社区与成熟度

社区评分 4/5，成熟度评分 2/5。

7951 stars、889 forks、1019 merged PRs、31 open PRs，加上 crates.io 163 万 total downloads，说明有持续维护与真实 library consumption [GH:api][Crates]。CONTRIBUTING 欢迎 scoped PR 并给出详细 provider checklist，社区不是单向发布 [GH:contributing]。

成熟度不能跟下载量一起抬高：当前 0.40.0，README 明确说未来 updates 将包含 breaking changes [GH:readme][Crates]。这符合“API 尚未稳定、升级可能破坏”的 2 分。

## 安全与风险

评分 3/5。

Rig 作为 library 不默认拥有 coding agent 那种 shell/filesystem 全权限；typed provider/auth code、redacted debug、TLS features、cassette secret review 都是正面信号 [GH:contributing][GH:agents][Docs:features]。本次 advisories API 未返回 published repository advisory，但空结果只表示本次未发现 [GH:advisories]。

不给 4：community profile 未检测到 SECURITY.md，且真实应用仍会持有 provider keys、调用 arbitrary tools、连接 MCP/vector stores 并处理 untrusted model output。Rig 提供 building blocks，不替应用完成 sandbox、authorization、egress control 与 prompt-injection defense。

## 学习价值

Rig 很值得 Rust/agent systems 学习：

1. **能力用类型表达**：`Capable`/`Nothing`、provider extensions/builders 与 explicit errors 如何减少 runtime ambiguity [GH:contributing][GH:agents]。
2. **core/companion 边界**：把常用 thin HTTP providers 留 core，把数据库/local inference 的重依赖拆 crate/feature [Docs:integrations]。
3. **可重放 provider tests**：cassette replay 在不暴露 API keys 的情况下验证 wire behavior，同时保留 live tests 处理不可重放路径 [GH:contributing]。
4. **agent hooks 的 typed lifecycle**：completion patch merging、tool rewrite/skip/stop 与 streaming/non-streaming consistency 如何进入 API contract [GH:agents]。

若目标是构建自己的 Rust agent，Rig 比直接 fork 一个 terminal agent 更接近正确抽象；若目标只是使用 agent，则应回到 Codex/Goose/ForgeCode 等产品层。