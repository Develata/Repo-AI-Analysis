---


title: "ZeroClaw"
created: 2026-05-14
updated: 2026-07-12
type: repository-analysis
repo_url: "https://github.com/zeroclaw-labs/zeroclaw"
category: "ai-programs/agents/assistant-agents"
tags: ["ai-assistant", "agent-runtime", "rust", "edge", "open-source"]
primary_language: "Rust"
license: "Apache-2.0 / MIT"
stars: 32229
forks: 4807
last_checked: 2026-07-12
last_verified: 2026-07-12
evidence: "GitHub API + official README/docs/releases + third-party benchmark caveat"
archived_reason: ""
docker_support: true
gpu_required: false
estimated_cpu: "1 core"
estimated_memory: "8-50 MB"
estimated_storage: "10-100 MB"
status: active
ratings:
  capability: 4
  usability: 4
  performance: 5
  code_quality: 4
  documentation: 4
  community: 4
  maturity: 2
  extensibility: 4
  security: 4
  recommendation: 3
overall_score: 3.8
sources:
  - "[GH] https://github.com/zeroclaw-labs/zeroclaw"
  - "[Docs] https://docs.zeroclawlabs.ai/"
  - "[SparkCo] https://sparkco.ai/blog/zeroclaw-review-the-rust-based-openclaw-alternative-with-99-smaller-footprint"
  - "[SparkCo-VS] https://sparkco.ai/blog/openclaw-vs-zeroclaw-which-ai-agent-framework-should-you-choose-in-2026"
  - "[Bitdoze] https://www.bitdoze.com/openclaw-alternatives/"
  - "[Kanaries] https://docs.kanaries.net/topics/openclaw/openclaw-vs-zeroclaw-vs-pi-agent-vs-nanobot"
  - "[GH#6094] GitHub issue/PR reference for zeroclaw-labs/zeroclaw dead-code/cost tracker discussion: https://github.com/zeroclaw-labs/zeroclaw/issues/6094"
  - "[Borq168] Third-party Zeroclaw review / issue-density commentary cited in original audit: https://www.borq168.com"
  - "[GH:API-2026-07-12] GitHub API snapshot: active, default branch master, Rust, Apache-2.0 metadata (README badge says MIT OR Apache-2.0), 32,229 stars, 4,807 forks, 311 open issues, 206 open PRs, head 2c2edec (2026-07-11), latest release v0.8.2 (2026-06-26), repository advisories endpoint returned []."
  - "[GH:v0.8.0] Official release: multi-agent runtime, Schema V3 migration, zerocode TUI, per-agent security, observability rework, WASM plugin interfaces and breaking changes; https://github.com/zeroclaw-labs/zeroclaw/releases/tag/v0.8.0"
  - "[GH:v0.8.2] Official release: A2A discovery, extra skill registries, durable run/task control plane, ingress/SOP hardening, plugin SSRF guard and broader channels; https://github.com/zeroclaw-labs/zeroclaw/releases/tag/v0.8.2"

---

# ZeroClaw

> Fast, small, and fully autonomous AI personal assistant infrastructure — ANY OS, ANY PLATFORM
>
> **状态**: `active` · **总分**: 3.8/5 · **推荐度**: 3/5

## 一句话总结

面向**资源敏感型部署与本地多 Agent 场景**的 Rust agent runtime；v0.8 系列已加入多 Agent 隔离、zerocode TUI、SOP、A2A 与 WASM 扩展面，但仍处于 pre-1.0 快速演化期。

## 总体评价

ZeroClaw 仍以单个 Rust 二进制和低资源开销为主要吸引力；早期第三方基准给出 3.2 MB 二进制、约 4.1 MB idle RSS 与 8 ms 冷启动，但这些数据未由 Develata 独立复测，不能当作当前 v0.8.2 的保证 [SparkCo]。相比 5 月，项目已经从单 Agent 轻量 runtime 快速扩展为多 Agent daemon：每个 Agent 可隔离 workspace、memory、skills、provider 与 security policy，并增加 zerocode TUI、SOP、A2A discovery 和 WASM 插件边界 [GH:v0.8.0] [GH:v0.8.2]。

代价仍然明显：项目约 5 个月大、版本仍为 v0.8.2；2026-07-12 有 311 个 open issues 与 206 个 open PRs。v0.8.0 引入 Schema V3、默认 channel bundle 和 logging 等 breaking changes，说明架构尚未稳定 [GH:API-2026-07-12] [GH:v0.8.0]。

> **结论**：资源效率路线仍很有吸引力，但当前 benchmark 缺少独立复测，且成熟度明显不足。值得关注，不宜作为唯一生产依赖。

## 推荐度：3/5

> 2026-07 复核：v0.8 的多 Agent 与安全能力显著增强，但 pre-1.0、breaking migration 和高 issue/PR backlog 仍使采用推荐维持 3/5。


**角色定位**：面向边缘部署、低配 VPS、嵌入式系统或 CI 管线的 AI agent runtime 需求者。如果「用 2 GB 内存的 VPS 跑一个完整 AI 助手」是你的核心需求，ZeroClaw 是答案。

**痛点**：
- 版本仍为 0.8.x，Schema V3 与 lean channel bundle 已产生迁移成本 [GH:v0.8.0]
- 311 个 open issues 与 206 个 open PRs，维护负载仍高 [GH:API-2026-07-12]
- 功能面从个人助手迅速扩张到多 Agent、SOP、A2A、WASM plugins，稳定边界仍在形成

**结论**：如果强调性能优先并接受不稳定性，可以谨慎试用；如果需要稳定基础设施，等 v1.0 再评估。

## 优势

1. **资源效率路线清晰**：单 Rust 二进制、静态分发与可选 feature 仍适合边缘设备；第三方早期数据很亮眼，但需按当前版本复测 [SparkCo]
2. **多 Agent 隔离**：一个 daemon 可运行多个命名 Agent，并分别绑定 workspace、memory、skills、provider、channels 与 security policy [GH:v0.8.0]
3. **本地操作面完整**：zerocode TUI、Web dashboard、gateway、ACP 与 persistent sessions 形成从聊天到编码的多入口 [GH:v0.8.0]
4. **扩展协议丰富**：MCP、WASM tool/channel/memory interfaces、额外 skill registries，以及 v0.8.2 的 A2A discovery [GH:v0.8.0] [GH:v0.8.2]
5. **安全工程持续投入**：per-agent allowlist、sandbox、tool receipts、ingress framing、plugin SSRF guard 与 secret redaction 已进入发布说明 [GH:v0.8.0] [GH:v0.8.2]
6. **跨平台与容器支持**：官方文档覆盖 Linux、macOS、Windows、FreeBSD、NixOS 与 Docker/Podman [Docs]

## 劣势

1. **仍是 pre-1.0**：v0.8.0 的 Schema V3、logging 与默认 channel bundle 都包含 breaking changes [GH:v0.8.0]
2. **维护队列很大**：311 个 open issues 与 206 个 open PRs；绝对量下降不代表稳定性问题已经消失 [GH:API-2026-07-12]
3. **功能扩张过快**：多 Agent、SOP、A2A、WASM、30+ channels 与多种 UI 同时演进，回归面明显扩大
4. **迁移兼容不是零成本**：旧配置虽可自动迁移，但 channel feature bundle、schema 与日志接口变化仍需验证 [GH:v0.8.0]
5. **企业治理能力有限**：上游安全工程进步明显，但 RBAC、合规认证与多租户治理仍不是其成熟强项

---

## 适合什么场景

- 将 AI 助手部署到 <1 GB 内存的 VPS 或 SBC
- 嵌入式 / IoT 环境的 agent runtime（ARM64、ARMv7 native）
- CI/CD 管线中需要轻量 agent 触发通知、执行自动化
- 需要 Rust 原生 agent 框架进行二次开发
- 从 OpenClaw 迁移且对性能敏感的用户

## 不适合什么场景

- 需要生产级稳定性的企业部署——等 v1.0
- 依赖 OpenClaw 上大量 JS 社区插件的项目——生态完全不同
- 需要 RBAC、审计日志、SOC2 的合规场景
- 对文档完整性有硬性要求的项目——代码变得比文档快

## 与类似项目对比

| 项目 | 定位 | 相对本项目 |
|------|------|-----------|
| OpenClaw | JS/TS AI assistant 始祖，功能最全 | 重 99 倍，成熟度高，生态丰富。迁移目标 |
| Hermes Agent | Python AI assistant，注重可扩展性 | 功能更完整，资源占用更高，成熟度略高 |
| Pi Agent | 超轻量 Raspberry Pi agent | 更轻，功能更少，通用性不如 ZeroClaw |
| Nanobot | MCP host 层 | 定位更低层，不提供完整的 agent runtime |

---

## 它能做什么

ZeroClaw 是一个单二进制 agent runtime，完成 AI 助手的完整生命周期 [GH] [Docs]：

**接入层**（30+ 渠道）：
- 聊天平台：Telegram、Discord、Matrix、Slack、Signal、WhatsApp
- 邮件：IMAP/SMTP
- 语音：基础 VAD + VoiceEvent（`gateway-voice-duplex` feature flag）
- Web：REST gateway (127.0.0.1:42617)、WebSocket、ACP JSON-RPC
- 中国特色：WeChat iLink Bot 等本地化 channel
- CLI：`zeroclaw agent -m "Hello"`

**模型层**（~20+ providers）：
- Anthropic、OpenAI、Ollama、Bedrock、Gemini、Azure、OpenRouter
- 任何 OpenAI-compatible endpoint（Groq、Mistral、xAI 等）
- 支持 fallback chain 自动降级、per-provider 定价
- 流式失败自动回退到非流式 [GH]

**工具层**：
- Shell 命令执行（默认 supervised，可选 YOLO mode）
- HTTP 请求、浏览器自动化、硬件控制
- MCP 服务器集成（用户自定义工具）
- web_search、memory reindex、session 生命周期管理
- HMAC 工具收据，并在 v0.8.2 扩展到 ACP、gateway WS 与 CLI turn paths [GH:v0.8.2]

**记忆与状态**：
- SQLite 持久化（默认），并支持 PostgreSQL/Qdrant 等后端；v0.8 引入 per-agent memory isolation [GH:v0.8.0]
- Vector embeddings 语义检索
- 7 个人格文件：SOUL.md、IDENTITY.md、USER.md、AGENTS.md、TOOLS.md、HEARTBEAT.md、MEMORY.md [GH]

评分 4/5。功能广度对应一个成熟的 AI assistant，但 voice、PostgreSQL memory、i18n 等多项处于实验阶段——覆盖面广不等于每个功能都稳定。

## 运行环境与资源占用

| 场景 | CPU | 内存 | 存储 | 说明 |
|------|-----|------|------|------|
| 最小 | 1 core, SSE4.2 | 8 MB | 10 MB | 核心 runtime 无额外 feature |
| 推荐 | 1-2 cores | 50 MB | 100 MB | 含 SQLite + embeddings + 常用 channels |

- **运行时**：Rust 静态链接二进制，依赖 musl（静态）或 glibc（动态可选）
- **操作系统**：Linux (Ubuntu 20.04+, Debian 11+, Fedora 35+)、macOS 11+、Windows 10/11，均为 Tier 1。嵌入式：Raspberry Pi OS、Alpine Linux (Tier 2) [Docs]
- **Docker**：Alpine (musl) 和 Ubuntu 镜像
- **GPU**：不需要
- **外部依赖**：无——自包含二进制。但 channel 功能（Telegram、Discord 等）需要网络访问和各自的 API token

**性能亮点** [SparkCo]：
- 二进制：3.2 MB（vs OpenClaw 298 MB，缩减 98.9%）
- 冷启动：8 ms（vs 1250 ms，快 99.4%）
- 空闲 RSS：4.1 MB（vs 145 MB，少 97.2%）
- 峰值堆内存：12 MB（vs 320 MB，少 96.3%）
- 吞吐量：450 tasks/s（vs 120 tasks/s，高 275%）

评分 5/5。在 AI agent runtime 领域，这些指标是无争议的领先地位。同类项目中找不到更高效的方案。

> **⚠️ 注意**：以上 benchmark 数据来自第三方评测 [SparkCo]，非 Develata 独立验证。评测方法学上可靠（bare-metal, reproducible commands），但评分假设该 benchmark 真实。如实际部署发现显著偏差，performance 应重新评估。

## 上手体验

安装流程设计精良 [GH]：
```bash
curl -fsSL https://raw.githubusercontent.com/zeroclaw-labs/zeroclaw/master/install.sh | bash
zeroclaw onboard    # 交互式引导配置
```

安装器可选预编译 binary 或源码构建，并自动进入 `zeroclaw quickstart`；也可使用 zerocode 的 Quickstart pane 完成 provider、model 与 persona 配置 [GH] [GH:v0.8.0]。

日常使用路径清晰：`zeroclaw agent` 启动对话，`zeroclaw daemon` 启动后台服务，`zeroclaw gateway` 启动 webhook 服务器。

但 311 个 open issues 与 206 个 open PRs 仍不可忽视。`zeroclaw doctor` 与 channel diagnostics 能降低排错成本，多 Agent/channel/schema 组合仍需要升级前测试 [GH:API-2026-07-12]。

评分 4/5。安装体验接近完美（curl | bash + 交互式向导），但 open issue 数量说明并非所有用户都能顺利跑通。

## 代码质量

**正面信号**：
- Rust 语言选择本身消灭了一整类内存 bug
- pre-push hook（fmt、clippy、tests），严格 lint 可选开关 [Docs]
- CI parity（`docker build -t zeroclaw-dev .` 可复现 CI 环境）
- secret scanning（gitleaks pre-commit hook + 手动审计指引）
- RFC 过程管理架构决策 [GH]
- trait-based 模块化系统，unsafe <1%（主要限于 FFI）[SparkCo]
- 编译期 feature flag 与 lean default channel bundle 可缩小默认构建面 [GH:v0.8.0]

**负面信号**：
- 311 open issues 与 206 open PRs 对约 5 个月项目仍是强负面信号 [GH:API-2026-07-12]
- v0.8.0 跨 439 commits 和 100+ contributors，重写 schema、logging 与多 Agent 主路径，回归风险高 [GH:v0.8.0]
- v0.8.2 又跨 152 commits，说明代码边界仍在快速移动 [GH:v0.8.2]

评分 4/5。Rust、CI、结构化 logging 与测试实践提供了良好基础，但大规模重构、311 issues / 206 PRs 和短稳定窗口阻止了 5/5 [GH:API-2026-07-12]。

## 可扩展性

ZeroClaw 的扩展体系分为两层 [GH] [Docs]：

**1. Rust trait 与 WASM plugin interfaces**：Provider、Channel、Tool 等由明确接口组织；v0.8.0 正式定义 tool/channel/memory 的 WASM 扩展边界 [GH:v0.8.0]。

**2. 编译期 feature flags**：非核心 channels 可按需编译，lean default bundle 降低默认二进制负担，但也增加升级时的 feature 核对成本 [GH:v0.8.0]。

**3. MCP 服务器兼容**：用户可以通过 MCP 协议接入自定义工具，不限于 Rust traits。

**4. Gateway/API/A2A**：REST/WebSocket/ACP 之外，v0.8.2 增加 Agent discovery；skills 还支持额外 registry 与 typed slash-command options [GH:v0.8.2]。

但关键痛点：OpenClaw 的 JS 社区插件不能直接使用——需要从 JavaScript 完整移植到 Rust traits。这是一个生态迁移成本，不是扩展性限制，但客观上限制了可用插件的数量。

评分 4/5。架构设计优秀（traits + feature flags + MCP + OpenAPI），但 JS 生态断裂的事实限制了实际可扩展性的即时价值。

## 文档质量

文档以 mdBook 形式组织 [Docs]：
- Introduction、Philosophy、Architecture（概览 + request lifecycle + crates map）
- Getting Started（quick-start + YOLO mode docs）
- Setup（Linux、macOS、Windows、Docker 分平台指南）
- Contributing（how-to、communication、RFCs、privacy、testing 全链路）
- Multi-locale：v0.7.4 引入 Mozilla Fluent pipeline，mdBook 驱动多语言 [GH]
- OpenAPI 3.1 spec 自动生成 + Scalar explorer [GH]

信息架构清晰，配置参考由 live schema 生成，且已有版本选择、FreeBSD/NixOS/Podman 与扩展边界文档 [GH:v0.8.0]。但功能增长仍快，边缘 channel/plugin 文档可能滞后。

评分 4/5。接近满分——内容完整、结构好、有多语言框架。唯一的扣分是追不上代码速度。

## 社区与成熟度

| 维度 | 评分 | 说明 |
|------|------|------|
| 社区活跃度 | 4/5 | 32,229 stars、4,807 forks；v0.8.0 称 100+ contributors，v0.8.2 称 31 contributors，但 206 open PRs 也说明 review 压力高 [GH:API-2026-07-12] [GH:v0.8.0] [GH:v0.8.2]。 |
| 成熟度 | 2/5 | 约 5 个月历史、v0.8.2；Schema V3 与默认 channel bundle发生 breaking changes，尚无稳定 API 承诺 [GH:v0.8.0]。 |

**社区**：增长和 release contributor 数量很强，但 311 issues / 206 PRs 显示维护吞吐仍受压；短历史也不足以证明贡献者留存 [GH:API-2026-07-12]。

**成熟度**：v0.8 已比 v0.7 完整得多，但大规模 schema/runtime 重构刚落地，仍应按 beta 基础设施对待。

## 安全与风险

ZeroClaw 的安全设计原则是「local-first + layered defense」[Docs]：

**默认安全**：
- 默认 autonomy 模式为 `supervised`，medium-risk 操作需审批，high-risk 操作禁止
- `zeroclaw estop` 紧急停止，即时阻断 agent 所有操作 [Docs]
- YOLO mode 显式命名、logged、非默认，有意设计为 loud
- Rust 类型系统可减少一类内存安全错误，但不能消除 unsafe/FFI、依赖、逻辑错误或资源耗尽风险

**加密与密钥管理**：
- 分层密钥解析（config → env → generic），`.env` gitignored
- 加密配置值（`secrets.encrypt = true`，密钥存储在 `~/.zeroclaw/.secret_key`）
- HMAC tool receipts 已覆盖 ACP、gateway WS 与 CLI turn paths [GH:v0.8.2]
- TLS 传输加密

**开发安全**：
- gitleaks pre-commit hook，推荐 trufflehog / git-secrets
- `.githooks/pre-push` 强制 fmt + clippy + tests
- 手动审计指引（`git diff --staged | grep` + 泄露处理 SOP）

**短板**：
- 本次未从当前官方文档验证到完整 RBAC、webhook audit log 或 SOC 2 能力；第三方比较也将这些列为缺口，企业采用前需逐项复核 [SparkCo-VS]
- 沙箱可选（seccomp-bpf），未默认启用
- 单机安全模型——多用户鉴权不是当前的设计目标

v0.8.0 修复 Canvas token theft 并强化 token revocation、secret redaction 与 per-agent tool allowlists；v0.8.2 又加入 universal ingress framing、SOP payload framing、plugin SSRF guard 与 MCP tool scoping [GH:v0.8.0] [GH:v0.8.2]。GitHub repository advisories endpoint 本次返回 `[]`，只表示未在该端点查到已发布 advisory，不能覆盖 release note 所述历史安全事件，也不证明当前无漏洞 [GH:API-2026-07-12]。评分维持 4/5：设计投入强，但攻击面宽且代码仍快速变化。

## 学习价值

**高**。ZeroClaw 是以下几个主题的优秀学习样本：

1. **Rust 大型项目的工程实践**：trait-based 模块化、feature flag microkernel 拆分、pre-push/CI 自动化、RFC 决策流程
2. **OpenClaw 生态的逆向工程**：理解 AI agent runtime 需要哪些抽象层（providers、channels、tools、memory、security policy），ZeroClaw 用 Rust 重新实现的过程本身就是一次 architecture review
3. **高性能系统编程**：早期第三方基准给出 3.2 MB binary 与约 4.1 MB idle RSS；这些数字未按 v0.8.2 独立复测，但其静态分发、feature flags 与低开销目标仍值得研究 [SparkCo]
4. **从 OpenClaw 迁移到 Rust**的设计决策：哪些保留了，哪些改进了，哪些被精简了——这是一场「architecture as argument」的 live demo

对于 Develata 的背景（Rust 入门 + 数学 + agent 兴趣），研究 ZeroClaw 的架构设计可能是深入 Rust 和高性能系统编程的高质量入口。
