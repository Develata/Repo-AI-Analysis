---
title: "Ollama"
created: 2026-05-20
updated: 2026-05-20
type: repository-analysis
repo_url: "https://github.com/ollama/ollama"
category: "agent-programs/agent-infrastructure"
tags: ["agent-infrastructure", "local-llm", "model-runtime", "openai-compatible", "anthropic-compatible", "cli", "api", "gpu", "go", "self-hosted"]
previous_repo: ""
successor: ""
primary_language: "Go"
license: "MIT"
stars: 171796
forks: 16196
last_checked: 2026-05-20
last_verified: 2026-05-20
evidence: "GitHub API + official docs + npm/PyPI package metadata + repository local scan; not deployed in production by Develata"
archived_reason: ""
docker_support: true
gpu_required: false
estimated_cpu: "CPU-only can run small models but latency depends heavily on model size; GPU optional and recommended for larger models or agent workloads"
estimated_memory: "runtime memory is dominated by loaded model weights and context; small embedding/chat models need several GB, larger models require much more"
estimated_storage: "binary is small relative to models; local model cache can grow from several GB to hundreds of GB depending on pulled models"
status: active
sharing_candidate: true
ratings:
  capability: 5
  usability: 5
  performance: 4
  code_quality: 4
  documentation: 5
  community: 4
  maturity: 4
  extensibility: 4
  security: 3
  recommendation: 5
overall_score: 4.3
sources:
  - "[GH] https://github.com/ollama/ollama"
  - "[GH:api] https://api.github.com/repos/ollama/ollama queried 2026-05-20; stars=171796, forks=16196, open_issues_count=3252, created_at=2023-06-26, pushed_at=2026-05-20, default_branch=main, license=MIT, homepage=https://ollama.com, topics include llm/llms/llama/deepseek/qwen/gemma/gpt-oss"
  - "[GH:issues] GitHub GraphQL search queried 2026-05-20; open issues=2353, open PRs=899, closed issues=7971, closed PRs=4668 for repo:ollama/ollama; repo open_issues_count from [GH:api] includes issues plus PRs"
  - "[GH:languages] https://api.github.com/repos/ollama/ollama/languages queried 2026-05-20; Go=8563473, C=3370404, TypeScript=394809, C++=132593, Shell=60412, Objective-C=58741, PowerShell=34233, CMake=27723, plus smaller languages"
  - "[GH:release] https://api.github.com/repos/ollama/ollama/releases/latest queried 2026-05-20; latest stable release v0.24.0 published 2026-05-14; releases API first page also showed v0.30.0-rc21 release candidate published 2026-05-13"
  - "[GH:contributors] https://api.github.com/repos/ollama/ollama/contributors?per_page=10 queried 2026-05-20; top entries include mxyng=1289, jmorganca=904, dhiltgen=860, BruceMacD=353, jessegross=226, pdevine=203"
  - "[GH:community] https://api.github.com/repos/ollama/ollama/community/profile queried 2026-05-20; health_percentage=62; README, CONTRIBUTING and MIT LICENSE detected; CODE_OF_CONDUCT, issue template and PR template not detected by community API"
  - "[GH:advisories] https://api.github.com/repos/ollama/ollama/security-advisories?per_page=100 queried 2026-05-20; returned 0 repository GitHub Security Advisories in this check"
  - "[GH:local-scan] Local clone /tmp/repo-wiki-batch5/ollama checked 2026-05-20; files excluding .git=2018; test/spec-ish files=298; key files checked include README.md, SECURITY.md, CONTRIBUTING.md, go.mod, Dockerfile, docs/api.md, docs/development.md; Dockerfile includes CPU, CUDA 11/12/13, ROCm 7, JetPack and Vulkan-related build stages; go.mod uses Go 1.26.0 and depends on gin, cobra, sqlite, tree-sitter, gonum and native/ML libraries"
  - "[Docs:index] https://docs.ollama.com/llms.txt extracted 2026-05-20; docs index lists API reference, capabilities, CLI, Docker, hardware support, OS install pages and integrations including Claude Code, Codex, Copilot CLI, OpenCode, VS Code, Zed, n8n and Hermes Agent"
  - "[Docs:api] https://docs.ollama.com/api/introduction and https://docs.ollama.com/api/chat extracted 2026-05-20; API served locally at localhost:11434, supports generate/chat/embed/tags/ps/show/create/copy/pull/push/delete/version; API expected stable/backwards compatible though not strictly versioned"
  - "[Docs:openai] https://docs.ollama.com/api/openai-compatibility extracted 2026-05-20; supports parts of OpenAI API including chat completions, completions, models, embeddings, images experimental and Responses API non-stateful flavor"
  - "[Docs:tools] https://docs.ollama.com/capabilities/tool-calling and https://docs.ollama.com/capabilities/structured-outputs extracted 2026-05-20; supports tool calling, JSON mode/JSON Schema structured outputs, thinking control, vision-related structured outputs; cloud structured outputs caveat noted in docs"
  - "[Docs:docker-gpu] https://docs.ollama.com/docker and https://docs.ollama.com/gpu extracted 2026-05-20; Docker supports CPU-only, NVIDIA GPU, AMD ROCm, Vulkan and Jetson/JetPack configuration; GPU is optional, not mandatory"
  - "[NPM] npm view ollama queried 2026-05-20; version=0.6.3, license=MIT, description=Ollama Javascript library, unpackedSize=128259"
  - "[PyPI] pip index versions ollama queried 2026-05-20; latest Python package version=0.6.2 with long release history"
---

# Ollama

> 本地 LLM runtime / model-serving infrastructure：用一个 CLI、后台服务和本地 API，把开源模型变成 agent、IDE、RAG 与自动化工具可调用的 OpenAI-compatible provider，并提供 Anthropic-adjacent integration surface。
>
> **状态**: `active` · **总分**: 4.3/5 · **推荐度**: 5/5
> **核验版本**: GitHub API / Docs / npm / PyPI / local clone 快照 2026-05-20；latest stable release `v0.24.0`，另有 `v0.30.0-rc21` release candidate [GH:release]

## 一句话总结

Ollama 是 Agent Infrastructure 中的 **local model runtime layer**：它不直接替 agent 做任务，而是给 agent 提供可本地运行、可 API 调用、可兼容部分 OpenAI API 的模型后端；Anthropic 相关内容在本分析中仅按 docs index 所示 integrations / compatibility surface 处理。

## 总体评价

Ollama 应归入 `agent-programs/agent-infrastructure`。它解决的是 agent 自主运行的一项基础约束：**模型供应与本地推理入口**。Claude Code、Codex、OpenCode、VS Code、Zed、n8n、Hermes Agent 等工具可以通过 Ollama 的本地 API 或 OpenAI-compatible surface 接入本地模型；这使它更像 agent stack 的底座，而不是一个普通 chat client [Docs:index][Docs:openai]。

从抽象层看，Ollama 和 Firecrawl、Context7、CodeGraph、CLI-Anything 同属 infrastructure，但子层不同：Firecrawl 是 web context ingestion，Context7 是 external docs grounding，CodeGraph 是 codebase context cache，CLI-Anything 是 tool-access harness，Ollama 则是 **local model serving / inference provider**。

总体评价很高：Ollama 的上手体验、生态采用、文档、CLI/API 设计都非常强；结合 stars/forks、SDK、docs integrations 和 agent/editor 接入面，可以把它视为本地 LLM 工具链的事实标准候选之一。但它不是“安全沙箱”，也不是“一切模型都轻松生产化”的完整 LLMOps 平台；性能、可靠性和安全边界高度依赖模型大小、GPU/内存、网络暴露方式和调用方 agent 的行为。

## 推荐度：5/5

**定位**：面向需要在本机、工作站或自托管服务器上为 coding agents、RAG、自动化工作流、IDE 插件和实验性 LLM 应用提供本地模型后端的开发者。

推荐度 5/5。给 5 的原因是：Ollama 命中本地 LLM 使用的核心痛点，`ollama run` / `ollama pull` / `ollama serve` 的使用路径极短，API surface 覆盖 chat、generate、embed、model management、tool calling、structured outputs、OpenAI-compatible endpoints 和多种 agent/editor integrations [Docs:api][Docs:tools][Docs:index]。它对 Develata 这类 agent-infra / coding-agent / local experiment 工作流尤其有价值：能低成本试模型、给工具提供 fallback provider、减少纯云端模型依赖。

不给“无条件生产推荐”的原因在安全与资源边界：默认本地 API 若错误暴露到网络，会把模型调用、模型拉取、prompt/data 流转变成攻击面；模型权重与上下文长度会快速消耗存储和内存；大量 open issues/PRs 也说明维护压力很大 [GH:issues][GH:advisories]。因此 5/5 是“优先试用/采用”的推荐，不是“公网无脑部署”。

## 优势

1. **上手极快**：`ollama run gemma3`、`ollama pull`、`ollama serve` 等 CLI path 直接清楚，Docker CPU/GPU 路径也有官方文档 [Docs:index][Docs:docker-gpu]。
2. **API surface 适合 agent**：本地 `localhost:11434` API 支持 generate、chat、embed、model management，并有 OpenAI-compatible API；tool calling、structured outputs、thinking、vision、embeddings 等能力都有文档 [Docs:api][Docs:openai][Docs:tools]。
3. **生态整合强**：官方 docs index 明确列出 Claude Code、Codex、Copilot CLI、OpenCode、VS Code、Zed、n8n、Hermes Agent 等 integrations [Docs:index]。
4. **本地/自托管友好**：MIT license、Docker、CPU/NVIDIA/AMD ROCm/Vulkan/Jetson 路径，使它适合从 laptop 到 GPU server 的多种部署 [GH:api][Docs:docker-gpu]。
5. **社区采用巨大**：API 快照显示 171k+ stars、16k+ forks，contributors top entries 多，closed issue/PR 数量也很高 [GH:api][GH:contributors][GH:issues]。

## 劣势

1. **资源消耗本质上由模型决定**：Ollama 本体轻，但模型权重、上下文长度、并发与 GPU/CPU backend 才是真正成本；小模型轻，大模型会很重。
2. **安全不是自动完成的**：SECURITY.md 提醒用户要保护 hosted instances；本次 advisory 查询返回 0 只表示未发现公开 GHSA，不等于无漏洞 [GH:advisories][GH:local-scan]。
3. **issue/PR backlog 很高**：GraphQL 快照显示 open issues=2353、open PRs=899，说明采用量巨大，同时维护负载也大 [GH:issues]。
4. **API 不严格 versioned**：官方文档说 API 预期稳定并向后兼容，但不是严格版本化；deprecations 通过 release notes 通知 [Docs:api]。
5. **不是完整 LLMOps 平台**：缺少多租户权限、审计、配额、模型治理、分布式调度等企业 LLM serving 能力；这些要靠外部系统补齐。

---

## 适合什么场景

- 给 Claude Code、Codex、OpenCode、Cline、Roo Code、Zed、VS Code 等本地/半本地 agent 或 IDE 插件提供 local model provider [Docs:index]。
- 本地 RAG、embedding、semantic search、实验性 agent workflow，需要快速换模型和离线/低成本推理 [Docs:api][Docs:openai]。
- VPS / 工作站 / homelab 上部署轻量模型服务，作为云端 LLM 的 fallback 或 privacy-sensitive task 的本地后端。
- 测试 tool calling、structured outputs、JSON schema、thinking control、vision 与 OpenAI-compatible client 兼容性 [Docs:tools][Docs:openai]。
- 教学、benchmark、模型体验、agent infra prototyping。

## 不适合什么场景

- 需要严格多租户权限、审计、billing、SLA、配额、模型生命周期治理的企业生产 LLM platform。
- 没有足够内存/存储/GPU，却希望流畅运行大参数模型或高并发 agent workload。
- 需要完全托管且无需维护模型缓存、驱动、GPU runtime、Docker/ROCm/CUDA/Vulkan 的团队。
- 计划把 Ollama API 直接暴露到公网而不做认证、反代、网络隔离、请求限制和日志审计的场景。
- 对 OpenAI / Anthropic API 完全语义等价有硬需求的应用；Ollama 提供 compatibility，但 docs 明确说是 parts of the API，Responses API 也有 non-stateful flavor 等限制 [Docs:openai]。

## 与类似项目对比

| 项目 | 定位 | 相对本项目 |
|------|------|-----------|
| Firecrawl | agent 的 Web context ingestion layer | Firecrawl 给 agent 获取网页事实；Ollama 给 agent 提供本地模型推理后端 |
| Context7 | agent 的文档上下文层 | Context7 解决 API/docs grounding；Ollama 解决模型供应和本地 provider |
| CodeGraph | 本地代码知识图谱/cache | CodeGraph 降低代码库上下文成本；Ollama 降低模型调用对云端 provider 的依赖 |
| CLI-Anything | tool-access harness | CLI-Anything 让 agent 调工具；Ollama 提供被 agent 调用的模型 API |
| MCP Servers | MCP reference server 集合 | MCP Servers 给工具协议样板；Ollama 是可被这些工具链调用的 inference backend |

上述项目按 `agent-programs/agent-infrastructure` 同类范围做定位级对比，未按同一 10 维度框架深审。

## 个人主页 sharing 候选

是。Ollama 很适合作为 sharing 候选：它是“agent infrastructure stack 为什么需要 local model runtime”的典型样本。文章角度可以不是泛泛介绍 Ollama，而是讲 **model provider layer**：cloud provider、本地 provider、OpenAI-compatible API、tool calling、structured outputs、GPU/CPU resource boundary 与 agent privacy tradeoff。

---

## 它能做什么

能力评分 5/5。

- **本地运行模型**：CLI 支持 run、pull、rm、ls、ps、stop、serve、create 等基础操作 [Docs:index]。
- **HTTP API**：支持 generate、chat、embed、tags、ps、show/create/copy/pull/push/delete/version 等 endpoints [Docs:api]。
- **OpenAI compatibility**：支持部分 OpenAI API，包括 chat completions、completions、models、embeddings、experimental images、Responses API non-stateful flavor 等 [Docs:openai]。
- **Anthropic / agent-client integration surface**：docs index 包含 Anthropic compatibility 和多种 coding agent / IDE integrations [Docs:index]。
- **Tool calling / structured outputs**：支持 function tool schema、tool result message、JSON mode、JSON Schema、Python/Pydantic 和 JS/Zod 示例 [Docs:tools]。
- **Embeddings / RAG**：`/api/embed` 和 embedding models 用于 semantic search、retrieval、RAG [Docs:index][Docs:api]。
- **跨硬件部署**：Docker docs 覆盖 CPU-only、NVIDIA、AMD ROCm、Vulkan、Jetson/JetPack [Docs:docker-gpu]。

能力给 5，是因为在“local model runtime for agents”这个范畴内，Ollama 已覆盖主要预期场景；但这不等于它拥有企业 LLMOps 的全部治理能力。

## 运行环境与资源占用

| 场景 | CPU | 内存 | 存储 | 说明 |
|------|-----|------|------|------|
| 小模型/embedding 本地实验 | 普通多核 CPU 可用 | 数 GB 起 | 模型大小级别 | 可用 CPU-only，但速度依赖模型和量化方式 [Docs:docker-gpu] |
| coding agent / RAG 日常使用 | 多核 CPU，推荐 GPU | 随模型和 context 增长 | 多个模型会快速占用数十 GB | 本体不是瓶颈，模型权重和 KV/cache/context 才是瓶颈 |
| GPU server / 多用户 | GPU/驱动/runtime 是关键 | 需要按并发与模型预算 | 模型库、日志、缓存持续增长 | Ollama 可作为后端，但多租户治理需外部补齐 |

- **运行时**：Go CLI/server + native C/C++/ML backend；local clone 显示 Go、C、TypeScript、C++ 为主要语言 [GH:languages][GH:local-scan]。
- **操作系统**：docs index 覆盖 Linux、macOS、Windows；Docker 支持多硬件路径 [Docs:index][Docs:docker-gpu]。
- **Docker**：官方 Docker 路径支持 CPU-only、NVIDIA、AMD ROCm、Vulkan、Jetson [Docs:docker-gpu]。
- **GPU**：非必需，但对大模型和低延迟 agent 工作流强烈相关；frontmatter `gpu_required=false` 仅表示不是启动前提。
- **外部依赖**：模型下载、GPU driver/CUDA/ROCm/Vulkan/JetPack、可选 SDK 客户端。

性能评分 4/5。Ollama 本体和本地 API 设计足够轻，Docker/硬件 backend 覆盖好；扣一分是因为 resource efficiency 主要受模型和 backend 制约，本次未做本地 benchmark，且大模型/高并发时资源压力不可忽略。

## 上手体验

评分 5/5。

Ollama 的关键优势就是 low-friction onboarding：安装后 `ollama run gemma3` 即可进入模型交互；`ollama serve` 暴露本地 API；Docker CPU/GPU 命令直给；Python/JavaScript 官方 SDK 和 curl 示例清楚 [Docs:index][Docs:api][Docs:docker-gpu][NPM][PyPI]。

对 agent 开发尤其友好的是 OpenAI-compatible endpoint：很多已有 OpenAI SDK/工具可以通过改 base URL 接入本地模型，虽然语义不是完全等价 [Docs:openai]。因此 usability 给 5；复杂性主要来自模型选择与硬件，而不是 Ollama 自身的入口设计。

## 代码质量

评分 4/5。

本地扫描显示仓库结构较清楚：Go 为主，包含 `api`、`cmd`、`llm`、`openai`、`auth`、`runner`、`server`、`ml`、`docs`、`scripts` 等目录；files excluding `.git` 为 2018，test/spec-ish 文件 298；`go.mod` 依赖 gin、cobra、sqlite、tree-sitter、gonum、native ML/backend 相关库；Dockerfile 体现 CPU/CUDA/ROCm/JetPack/Vulkan 多 backend 构建路径 [GH:local-scan]。

CONTRIBUTING.md 对 non-trivial change、commit message、tests、新依赖有明确约束，特别强调 API backward compatibility 和减少维护负担 [GH:local-scan]。不给 5 的原因是：本次没有运行完整测试/覆盖率；项目同时维护 Go server、native backend、跨平台 installer、GPU backend 和 API compatibility，复杂度很高；高 open issue/PR backlog 也不支持“极佳且维护轻松”的判断 [GH:issues]。

## 可扩展性

评分 4/5。

Ollama 的扩展性主要不是插件系统，而是 **API/provider compatibility**：REST API、OpenAI-compatible API、Python/JavaScript SDK、Modelfile、自定义 model create、Docker/GPU backend、多 agent/editor integrations [Docs:api][Docs:openai][Docs:index][NPM][PyPI]。这使它很容易嵌入 agent framework、workflow automation、IDE assistant 和 RAG pipeline。

不给 5 的原因是：Ollama 不是 Kubernetes-native model platform，也不是插件化 multi-tenant inference gateway。深度定制 scheduler、权限、配额、审计、分布式推理或企业模型治理，需要外部系统或 fork。

## 文档质量

评分 5/5。

Ollama docs 有 `llms.txt` 机器可读索引，覆盖 API Reference、capabilities、CLI、Docker、GPU/hardware、OS installation、OpenAI/Anthropic compatibility、tool calling、structured outputs、embeddings、vision、web search、context length、troubleshooting 与大量 integrations [Docs:index]。API 文档也给出 endpoints、request/response 字段和示例；Docker/GPU 文档按 CPU/NVIDIA/AMD/Vulkan/Jetson 分路径 [Docs:api][Docs:docker-gpu]。

注意：OpenAI compatibility 文档本身说明是部分兼容，不能把文档存在误读为完全协议等价 [Docs:openai]。这不影响 documentation=5，反而说明文档能标出边界。

## 社区与成熟度

| 维度 | 评分 | 说明 |
|------|------|------|
| 社区活跃度 | 4/5 | 171796 stars、16196 forks、top contributors 多、closed issues/PRs 数量高；但 open issues=2353、open PRs=899，community profile=62 且缺少 CODE_OF_CONDUCT/issue/PR templates，不宜因 star 数直接给 5 [GH:api][GH:issues][GH:contributors][GH:community] |
| 成熟度 | 4/5 | 仓库创建于 2023-06，结合 stars/forks、SDK、docs integrations 和 agent/editor 接入面，已经是本地 LLM 生态中的强势项目；stable release 与 RC 并行，API 文档声称预期稳定/向后兼容但不严格 versioned，因此是成熟可用但仍快速演进 [GH:release][Docs:api] |

## 安全与风险

评分 3/5。

本次通过 GitHub API 查询 `ollama/ollama` repository security advisories 返回 0，这只能表述为“截至 2026-05-20 检查未发现 repo GHSA”，不能推出“无漏洞” [GH:advisories]。Ollama 的真实风险在部署边界：本地 API 若被暴露到不可信网络，攻击者可能滥用推理资源、拉取/创建模型、读取模型行为或通过调用方 agent 间接处理敏感 prompt/data。SECURITY.md 也明确建议用户保护 hosted instances、定期更新和监控异常活动 [GH:local-scan]。

此外，模型本身也带供应链与行为风险：模型权重来源、prompt injection、tool-calling agent 的外部动作、OpenAI-compatible client 的默认配置，都不是 Ollama 单独能解决的问题。生产使用建议：默认只绑定本机或内网可信接口；反代加认证；限制 egress 和并发；隔离模型缓存；记录审计日志；不要把高权限工具调用直接交给未沙箱化 agent。

## 学习价值

学习价值很高。Ollama 是研究 local-first AI infrastructure 的核心样本：它把模型下载、运行、API serving、OpenAI-compatible facade、tool calling、structured output、embedding、Docker/GPU backend 和 agent integrations 串成一条极短路径。

即便不长期部署，也值得研究它如何把复杂 ML backend 包装成开发者可理解的 CLI/API。所谓“器以载道”：Ollama 的价值不止在能跑模型，更在于它定义了本地模型如何成为 agent stack 中的一个普通 provider。
