---
title: "ZeroClaw"
created: 2026-05-14
updated: 2026-05-14
type: repository-analysis
repo_url: "https://github.com/zeroclaw-labs/zeroclaw"
category: "ai-agents"
tags: ["ai-assistant", "agent-runtime", "rust", "edge", "open-source"]
primary_language: "Rust"
license: "Apache-2.0 / MIT"
stars: 31284
forks: 4601
last_checked: 2026-05-14
last_verified: 2026-05-14
evidence: "code review + third-party benchmarks + external reviews"
archived_reason: ""
docker_support: true
gpu_required: false
estimated_cpu: "1 core"
estimated_memory: "8-50 MB"
estimated_storage: "10-100 MB"
status: active
sharing_candidate: true
ratings:
  capability: 4
  usability: 4
  performance: 5
  code_quality: 4
  documentation: 4
  community: 5
  maturity: 2
  extensibility: 4
  security: 4
  recommendation: 4
overall_score: 4.0
sources:
  - "[GH] https://github.com/zeroclaw-labs/zeroclaw"
  - "[Docs] https://docs.zeroclawlabs.ai/"
  - "[SparkCo] https://sparkco.ai/blog/zeroclaw-review-the-rust-based-openclaw-alternative-with-99-smaller-footprint"
  - "[SparkCo-VS] https://sparkco.ai/blog/openclaw-vs-zeroclaw-which-ai-agent-framework-should-you-choose-in-2026"
  - "[Bitdoze] https://www.bitdoze.com/openclaw-alternatives/"
  - "[Kanaries] https://docs.kanaries.net/topics/openclaw/openclaw-vs-zeroclaw-vs-pi-agent-vs-nanobot"
---

# ZeroClaw

> Fast, small, and fully autonomous AI personal assistant infrastructure — ANY OS, ANY PLATFORM
>
> **状态**: `active` · **总分**: 4.0/5 · **推荐度**: 4/5

## 一句话总结

面向**资源敏感型部署场景**（边缘设备、低配 VPS、嵌入式系统）的 AI agent runtime，以 3.2 MB Rust 二进制实现了 OpenClaw 95% 的 API 兼容，内存占用仅 ~5 MB，但在成熟度和版本稳定性上仍在快速迭代阶段。

## 总体评价

ZeroClaw 是目前 AI personal assistant 领域最极端的「轻量化」方案。它从 OpenClaw 的生态中剥离出核心 runtime，用 Rust 重写，实现了 99% 的 footprint 缩减——二进制 3.2 MB、空闲内存 ~5 MB、冷启动 <10 ms。这一指标领先于所有同类项目，不仅碾压 OpenClaw 的 Node.js 堆栈（~300 MB），也显著低于同类 Rust 方案 [SparkCo]。

但代价显著：项目仅 3 个月大（2026-02-13 创建），465 open issues，版本号 0.7.5 且每日发布——它是那种「功能涨得比 bug 修得快」的项目 [GH]。如果需要一个稳定、可预测的生产环境 agent，现在不是时机。如果追求极致资源效率且能接受快速迭代的不稳定性，ZeroClaw 是目前唯一的选择。

> **结论**：资源效率领域无可争议的冠军，成熟度领域同样无可争议的短板。值得密切关注，但暂时不宜作为唯一依赖的生产基础设施。

## 推荐度：4/5

**角色定位**：面向边缘部署、低配 VPS、嵌入式系统或 CI 管线的 AI agent runtime 需求者。如果「用 2 GB 内存的 VPS 跑一个完整 AI 助手」是你的核心需求，ZeroClaw 是答案。

**痛点**：
- 版本号 0.7.x，API 和行为在每次 release 间都可能变化 [GH]
- 465 open issues，外部评论明确指出「high bug volume suggests stability challenges」[Borq168]
- 开发节奏过快（~1.6 releases/day），社区和文档追不上代码变化

**结论**：如果强调性能优先并接受不稳定性，强烈推荐试用。如果需要稳定基础设施，等 v1.0 再评估。

## 优势

1. **极致的资源效率**：3.2 MB 静态链接 Rust 二进制，<5 MB RSS 空闲，<10 ms 冷启动。在 Raspberry Pi 上跑 agent 不再是一个修辞，而是真实可用的部署 [SparkCo]
2. **OpenClaw 兼容性**：直接读取 `~/.openclaw/config.toml`，95% API 覆盖。迁移成本几乎为零 [GH]
3. **Rust 安全性红利**：所有权系统在编译期消除内存 bug，unsafe 代码 <1%（仅 FFI）。搭配可选 seccomp-bpf 沙箱，安全基线远高于 JS 生态 [Docs]
4. **社区爆发力**：3 个月 31k stars、4.6k forks、24-36 contributors/release，增长速度在同类项目中首屈一指 [GH]
5. **Rust trait 插件系统**：模块化架构，稳定 ABI 1.0，RFC #5574 正在拆分 microkernel，可以按需编译功能，不需要的模块不进入二进制 [GH] [Docs]
6. **多平台一等公民**：Linux、macOS、Windows 均为 Tier 1，ARM64 native，Docker 支持 [Docs]

## 劣势

1. **极其不成熟**：v0.7.5，3 个月历史，无稳定 API 承诺。任何升级都可能踩坑
2. **issue 积压严重**：465 open issues，外部评价指出 bug 密度影响稳定性 [Borq168] [GH]。死代码 `cost/tracker.rs` 孤儿文件（566 行，未编译）直接躺在仓库中 [GH#6094]
3. **功能快于质量**：v0.7.5 一下子塞进了 web onboarding、personality editor、ACP protocol、live model switching、HMAC receipts、voice groundwork 等大量功能——3 个月内。feature velocity 远超 quality maintenance
4. **插件生态断裂**：OpenClaw 的 JS 插件必须用 Rust trait 重写，零兼容。生态冷启动问题
5. **安全性不够企业级**：无 RBAC、无 SOC2、无 webhook 审计日志 [SparkCo-VS]。个人使用足够，企业部署需要评估

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

## 个人主页 sharing 候选

**是**。

- **新奇度**：Rust 重写 + 99% footprint reduction 有极强的「哇」效应，对读者吸引力高
- **可用性**：已经可以实际部署使用（虽然不稳定），不是纯概念
- **话题性**：AI agent + Rust + 边缘计算三重热度叠加
- **成熟度顾虑**：v0.7.x 的不稳定性需要在分享中明确标注

可选标题方向：「跑在 5 MB 内存里的 AI 助手——ZeroClaw 深度评测」或「从 OpenClaw 到 ZeroClaw：AI agent 的 Rust 革命」。

---

## 它能做什么

ZeroClaw 是一个单二进制 agent runtime，完成 AI 助手的完整生命周期 [GH] [Docs]：

**接入层**（30+ 渠道）：
- 聊天平台：Telegram、Discord、Matrix、Slack、Signal、WhatsApp
- 邮件：IMAP/SMTP
- 语音：基础 VAD + VoiceEvent（`gateway-voice-duplex` feature flag）
- Web：REST gateway (127.0.0.1:42617)、WebSocket、ACP JSON-RPC
- 中国特色：WeChat iLink Bot（v0.7.4 恢复）
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
- HMAC 工具收据（v0.7.5，端到端签名验证）

**记忆与状态**：
- SQLite 持久化（默认），支持 PostgreSQL backend（v0.7.4）
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

## 上手体验

安装流程设计精良 [GH]：
```bash
curl -fsSL https://raw.githubusercontent.com/zeroclaw-labs/zeroclaw/master/install.sh | bash
zeroclaw onboard    # 交互式引导配置
```

`zeroclaw onboard` 是 schema-driven、幂等的配置向导。`--minimal` 安装最小 kernel（~6.6 MB），`--source` 从源码编译，`--list-features` 列出所有编译期 feature。v0.7.5 新增了 web onboarding（`/onboard` flow with OpenAPI 3.1 spec），以及 CLI `config patch` / `config docs` / `config schema --path`。

日常使用路径清晰：`zeroclaw agent` 启动对话，`zeroclaw daemon` 启动后台服务，`zeroclaw gateway` 启动 webhook 服务器。

但 465 open issues 是一个不可忽视的信号——很多用户在遇到边缘情况。`zeroclaw doctor` 和 `zeroclaw channel doctor` 提供了诊断工具，但初始配置（尤其是多 channel 联动）仍可能踩坑。

评分 4/5。安装体验接近完美（curl | bash + 交互式向导），但 open issue 数量说明并非所有用户都能顺利跑通。

## 代码质量

**正面信号**：
- Rust 语言选择本身消灭了一整类内存 bug
- pre-push hook（fmt、clippy、tests），严格 lint 可选开关 [Docs]
- CI parity（`docker build -t zeroclaw-dev .` 可复现 CI 环境）
- secret scanning（gitleaks pre-commit hook + 手动审计指引）
- RFC 过程管理架构决策 [GH]
- trait-based 模块化系统，unsafe <1%（主要限于 FFI）[SparkCo]
- 微内核分拆路线（RFC #5574），编译期 feature flag 隔离

**负面信号**：
- 465 open issues（3 个月项目）是红色警报级别的信号
- 活生生的技术债证据：[GH#6094] 报告了一个 566 行死代码孤儿 `cost/tracker.rs`——存在但未编译，项目已经高速迭代到 v0.7.5 都无人清理
- 开发速度过快（~1.6 releases/day），代码审查能否跟上存疑
- 外部评论「high bug volume suggests stability challenges」[Borq168]

评分 4/5。Rust 的编译期保证 + CI 工程实践给了基础分，但 issue backlog 和死代码孤儿阻止了 5/5。这不是「代码质量差」——这是「工程质量被速度甩在后面」。

## 可扩展性

ZeroClaw 的扩展体系分为两层 [GH] [Docs]：

**1. Rust trait 插件系统**：Provider、Channel、Tool 均映射到 Rust traits，编译为动态库（stable ABI 1.0）。自定义 channel integration 或工具只需实现对应 trait。

**2. 编译期 feature flag**（RFC #5574）：正在拆分 microkernel——不需要的 modules 通过 Cargo features 排除，减小二进制。`--list-features` + `--features` 控制。

**3. MCP 服务器兼容**：用户可以通过 MCP 协议接入自定义工具，不限于 Rust traits。

**4. OpenAPI 3.1 spec**（v0.7.5）：自动生成 TypeScript dashboard client，REST API 可被外部工具消费。

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

信息架构清晰，覆盖全面。对于 3 个月的项目，这份文档的深度和质量远超预期。但快速版本迭代意味着边缘功能（voice、PostgreSQL memory）的文档可能有滞后。

评分 4/5。接近满分——内容完整、结构好、有多语言框架。唯一的扣分是追不上代码速度。

## 社区与成熟度

| 维度 | 评分 | 说明 |
|------|------|------|
| 社区活跃度 | 5/5 | 31k stars + 4.6k forks（3 个月）；24-36 contributors/release；Discord 活跃；RFC 公开讨论；good-first-issue 标签 |
| 成熟度 | 2/5 | v0.7.5，3 个月历史，频繁破坏性变更，无稳定 API 承诺 |

**社区**：ZeroClaw 的社区增长速度和贡献者多样性在同类项目中是现象级的。3 个月 31k stars 绝非偶然——它精确击中了「轻量 + Rust + OpenClaw 兼容」这三个需求的交汇点。

**成熟度**：这是 ZeroClaw 最弱的维度。v0.7.5 意味着「仍在 beta」，而 3 个月的项目年龄意味着任何长期承诺都是不可靠的。v0.7.5 的 release notes 中明确标注了配置系统的 breaking changes [GH]。API 和配置格式在可预见的未来会持续变动。

## 安全与风险

ZeroClaw 的安全设计原则是「local-first + layered defense」[Docs]：

**默认安全**：
- 默认 autonomy 模式为 `supervised`，medium-risk 操作需审批，high-risk 操作禁止
- `zeroclaw estop` 紧急停止，即时阻断 agent 所有操作 [Docs]
- YOLO mode 显式命名、logged、非默认，有意设计为 loud
- 静态链接 Rust 二进制，编译期消除内存 bug

**加密与密钥管理**：
- 分层密钥解析（config → env → generic），`.env` gitignored
- 加密配置值（`secrets.encrypt = true`，密钥存储在 `~/.zeroclaw/.secret_key`）
- HMAC tool receipts（v0.7.5，端到端验证）
- TLS 传输加密

**开发安全**：
- gitleaks pre-commit hook，推荐 trufflehog / git-secrets
- `.githooks/pre-push` 强制 fmt + clippy + tests
- 手动审计指引（`git diff --staged | grep` + 泄露处理 SOP）

**短板**：
- 无 RBAC、无 webhook 审计日志、无 SOC2 [SparkCo-VS]
- 沙箱可选（seccomp-bpf），未默认启用
- 单机安全模型——多用户鉴权不是当前的设计目标

评分 4/5。对于个人使用场景（ZeroClaw 的设计目标），安全基线令人满意——甚至优秀（秘密检测 + HMAC receipts + estop）。企业级功能缺失不影响此评分的定位。

## 学习价值

**高**。ZeroClaw 是以下几个主题的优秀学习样本：

1. **Rust 大型项目的工程实践**：trait-based 模块化、feature flag microkernel 拆分、pre-push/CI 自动化、RFC 决策流程
2. **OpenClaw 生态的逆向工程**：理解 AI agent runtime 需要哪些抽象层（providers、channels、tools、memory、security policy），ZeroClaw 用 Rust 重新实现的过程本身就是一次 architecture review
3. **高性能系统编程**：3.2 MB 二进制、5 MB 内存的 agent runtime 是如何做到的？arena allocation、sled embedded DB、静态链接 musl、QUIC transport——这些技术选择值得研究
4. **从 OpenClaw 迁移到 Rust**的设计决策：哪些保留了，哪些改进了，哪些被精简了——这是一场「architecture as argument」的 live demo

对于 Develata 的背景（Rust 入门 + 数学 + agent 兴趣），研究 ZeroClaw 的架构设计可能是深入 Rust 和高性能系统编程的高质量入口。
