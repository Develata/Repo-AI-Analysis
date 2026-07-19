---
title: "OpenFang"
created: 2026-05-31
updated: 2026-05-31
type: repository-analysis
repo_url: "https://github.com/RightNow-AI/openfang"
category: "ai-programs/agents/assistant-agents"
tags: ["ai-agent", "agent-os", "autonomous-agents", "rust", "desktop", "self-hosted", "mcp", "a2a", "multi-channel", "agent-runtime"]
previous_repo: ""
successor: ""
primary_language: "Rust"
license: "Apache-2.0 OR MIT"
stars: 17685
forks: 2255
last_checked: 2026-07-19
last_verified: 2026-05-31
evidence: "GitHub REST + GraphQL metadata, local shallow clone source/docs scan, and official repo docs. No binary install, Docker run, cargo build/test, desktop launch, or live agent execution was performed; README benchmark/test/security claims are treated as source/documentation claims unless separately verified by local file scan."
archived_reason: ""
docker_support: true
gpu_required: false
estimated_cpu: "low to medium for CLI/daemon; heavier when desktop, channels, browser automation, WASM and many agents run concurrently"
estimated_memory: "README claims ~40 MB idle and ~32 MB binary, but not measured in this review; expect higher with Tauri/WebView, SQLite/vector memory, channel gateways, Playwright/browser or local model integrations"
estimated_storage: "small for binary; grows with ~/.openfang data, SQLite/vector memory, logs, bundled skills, channel artifacts and optional Docker image"
status: active
ratings:
  capability: 4
  usability: 3
  performance: 3
  code_quality: 3
  documentation: 3
  community: 3
  maturity: 2
  extensibility: 4
  security: 3
  recommendation: 3
overall_score: 3.1
sources:
  - "[GH] https://github.com/RightNow-AI/openfang"
  - "[GH:api] GitHub REST snapshot 2026-05-31: stars=17685, forks=2255, created_at=2026-02-24, pushed_at=2026-05-14, primary_language=Rust, GitHub license detection=Apache-2.0, latest release=v0.6.9 published 2026-05-12, security policy enabled"
  - "[GH:graphql] GitHub GraphQL snapshot 2026-05-31: default branch main commit=acf2587e46be174c10200489c9a2d23a39a98aeb, commits=551, open issues=55, open PRs=22, merged PRs=151, releases=100"
  - "[GH:advisories] GitHub repository security-advisories API queried 2026-05-31; returned []"
  - "[GH:local-scan] Local shallow clone /opt/data/tmp/repo-wiki-trending-2026-05-31/batch9/repos/openfang at commit acf2587e46be174c10200489c9a2d23a39a98aeb dated 2026-05-12; git ls-files=538, workflows=2, test-ish files=21, markdown=96, Rust LOC heuristic ~198k; Dockerfile, docker-compose.yml, scripts/docker/install-smoke.Dockerfile present"
  - "[GH:readme] README.md local scan 2026-05-31: describes OpenFang as Rust Agent Operating System, pre-1.0 / feature complete but rough edges, one binary, 7 bundled Hands, 16 security systems, 14-crate architecture, channel adapters, benchmarks and comparison claims"
  - "[GH:cargo] Cargo.toml local scan 2026-05-31: workspace version=0.6.9, edition=2021, license=Apache-2.0 OR MIT, rust-version=1.75, 14 workspace members, dependencies include tokio, axum, rusqlite bundled, wasmtime, rmcp, zeroize, ed25519-dalek, hmac, governor, Tauri-related crates"
  - "[GH:ci] .github/workflows/ci.yml local scan 2026-05-31: cargo check/test on ubuntu/macos/windows, clippy -D warnings, cargo fmt --check, cargo audit, trufflehog verified-secret scan, installer syntax smoke test"
  - "[GH:security] SECURITY.md local scan 2026-05-31: report to jaber@rightnowai.co, supported version table still lists 0.3.x, scope includes auth bypass/RCE/path traversal/SSRF/agent privilege escalation/skill supply chain/WASM sandbox escapes; security architecture lists access control, SSRF, zeroization, WASM, taint tracking, rate limit and Merkle audit controls"
  - "[GH:security-doc] docs/security.md local scan 2026-05-31: detailed security architecture reference covering 16 systems, capability enum, WASM dual metering, Merkle audit trail, taint tracking, manifest signing, SSRF, subprocess sandbox and prompt-injection scanner"
  - "[GH:contributing] CONTRIBUTING.md local scan 2026-05-31: Rust 1.75+, cargo build/test, clippy -D warnings, cargo fmt, 1,744+ tests claimed, 14-crate architecture, contribution guides for agent templates/channel adapters/tools"
  - "[GH:getting-started] docs/getting-started.md local scan 2026-05-31: installation paths include desktop app, shell installer, PowerShell installer with checksum verification, cargo install/build-from-source, Docker and Compose; config requires at least one LLM provider key; first agent spawn/chat/daemon/WebChat flows documented"
  - "[GH:architecture] docs/architecture.md local scan 2026-05-31: describes 14 crates, kernel boot sequence, agent lifecycle, memory substrate, LLM drivers, capability security, channel/skill systems, MCP/A2A and OFP protocol"
  - "[GH:production-checklist] docs/production-checklist.md local scan 2026-05-31: release checklist contains BLOCKING items for Tauri signing key, updater public key, repository secrets and openfang.sh domain; this may be stale relative to v0.6.9 releases, but it is a negative maturity signal until reconciled"
---

# OpenFang

> Rust 写的“Agent Operating System”：把 daemon、CLI、desktop、channels、skills、MCP/A2A、memory、security controls 和 7 个 autonomous Hands 打包成一个 pre-1.0 agent assistant/runtime；野心很大，工程信号不错，但成熟度必须下修。
>
> **状态**: `active` · **总分**: 3.1/5 · **推荐度**: 3/5
> **核验版本**: commit `acf2587e46be174c10200489c9a2d23a39a98aeb`；GitHub / local clone 快照 2026-05-31
> **验证边界**: 本轮未安装二进制、未跑 Docker、未执行 `cargo build/test`、未启动 desktop/daemon、未实测 agent 行为；性能、安全与能力结论按“源码/文档可见但未运行验证”处理。

## 一句话总结

OpenFang 是 OpenClaw / ZeroClaw 这一类自托管个人 agent assistant 的 Rust-heavy 变体：它把 autonomous scheduled agents、multi-channel adapters、skills、desktop app、MCP/A2A 和安全控制面整合成一个“Agent OS”，值得收录跟踪；但 README 自承 pre-1.0 / rough edges，且 release checklist 与 release 状态存在张力，不宜按营销口径高分采用 [GH:readme][GH:production-checklist]。

## 总体评价

OpenFang 应归入 `ai-programs/agents/assistant-agents`，而不是纯 `agent-infrastructure`：它的核心交付对象不是一个被其他 agent framework 嵌入的小库，而是一个用户可安装、可启动 daemon/dashboard/desktop、可激活 Hands 并通过多通道持续工作的自托管 agent system [GH:getting-started][GH:architecture]。

它的亮点是把“personal agent”做得很工程化：14 个 Rust crate、SQLite memory、capability-based security、WASM sandbox、MCP/A2A、40 channel adapters、OpenAI-compatible API、desktop Tauri app、FangHub skills、7 个 Hands 这些模块都有文档和目录层证据 [GH:architecture][GH:readme]。相较 OpenClaw 这类 hypergrowth TypeScript 平台，它试图用 Rust workspace 和 explicit security architecture 获得更强的可维护性与安全基线。

但 OpenFang 仍处在早期。仓库创建于 2026-02-24，README 明确说 feature complete but pre-1.0、expect rough edges、production use should pin specific commit [GH:readme]。GraphQL 显示 releases=100、open issues=55、open PRs=22；短时间内频繁 release 是活跃信号，也是稳定性风险 [GH:graphql]。此外 `docs/production-checklist.md` 仍列出 Tauri signing key、updater key、GitHub secrets、openfang.sh domain 等 blocking items；即使这些文档可能滞后于 v0.6.9 release，它仍说明 release/production readiness 文档需要 reconciliation [GH:production-checklist]。

结论：OpenFang 是值得分析的热门 repo，尤其适合观察 Rust agent runtime / personal agent OS 的方向；推荐度保守给 3，而不是 4。

## 推荐度：3/5

推荐度 3/5。建议作为 **试用与研究对象**，不建议当作生产个人助理的唯一依赖，更不建议接入真实支付、云控制台、生产账号或高权限浏览器自动化。

推荐它的理由：

1. Rust workspace 架构清晰，14 crate 分层明确 [GH:cargo][GH:architecture]。
2. agent assistant 能力面很完整：daemon、CLI、desktop、Hands、channels、skills、memory、MCP/A2A、OpenAI-compatible API 都有入口 [GH:getting-started][GH:readme]。
3. 安全意识强于多数同类：capability、WASM metering、SSRF protection、taint tracking、Merkle audit、zeroization、cargo audit / trufflehog CI 均有文档或 workflow 证据 [GH:security][GH:security-doc][GH:ci]。
4. 社区可见度高：17.7k stars、2.3k forks、100 releases，说明它已获得较大关注 [GH:api][GH:graphql]。

限制推荐的理由：pre-1.0、rough edges、生产 checklist 张力、release 频繁、本文未实际 build/run/test。对能读 Rust、愿意 pin commit 和做沙箱隔离的技术用户，它值得试；对普通用户，它还太早。

## 优势

1. **架构分层明确**：types/memory/runtime/kernel/api/channels/wire/skills/hands/desktop 等 crate 边界清晰 [GH:cargo][GH:architecture]。
2. **能力面宽**：7 bundled Hands、40 channel adapters、60 bundled skills、MCP/A2A、OpenAI-compatible API、Tauri desktop、daemon/WebChat/CLI 都有文档证据 [GH:readme][GH:architecture]。
3. **Rust 实现选择有利于资源控制和内存安全基线**：single binary、SQLite、Wasmtime、Axum、zeroize、ed25519、HMAC 等技术选择比较适合 agent runtime；但这不是对整体性能或整体安全性的实测证明 [GH:cargo]。
4. **CI 质量门槛较完整**：三平台 cargo check/test、clippy -D warnings、fmt、cargo audit、trufflehog secret scan、installer smoke test [GH:ci]。
5. **安全文档非常详细**：SECURITY.md 与 docs/security.md 明确列出威胁面、控制点和 security-critical dependencies [GH:security][GH:security-doc]。

## 劣势

1. **pre-1.0 且文档自承 rough edges**：README 明确建议生产 pin commit [GH:readme]。
2. **release 速度过快**：100 releases、短期多个 v0.6.x release，说明项目仍在快速成形 [GH:graphql]。
3. **生产 readiness 文档有未闭合项**：production checklist 仍有 blocking 项，需确认是否过时；在未确认前应视为成熟度风险 [GH:production-checklist]。
4. **大量 README 性能/比较 claim 未复现**：冷启动、内存、安装体积、security systems 与竞品对比都需实测；本轮仅做源码/文档审查 [GH:readme]。
5. **高权限 agent 风险很大**：Browser Hand、channels、shell/tools、MCP/A2A、credential vault、WhatsApp gateway 都会触及敏感账号和外部系统 [GH:readme][GH:getting-started]。

---

## 适合什么场景

- 研究 Rust agent runtime / personal agent OS 的架构设计。
- 对比 OpenClaw、ZeroClaw、Hermes Agent 的 agent assistant 边界与安全模型。
- 在隔离机器上试用 autonomous Hands，例如 researcher / collector / lead / browser，但只用低权限测试账号。
- 构建自托管、多通道、CLI/desktop 都可用的个人 agent 原型 [GH:getting-started]。
- 学习 capability-based security、WASM sandbox、Merkle audit、prompt-injection scanner 在 agent runtime 中的组织方式 [GH:security-doc]。

## 不适合什么场景

- 普通非技术用户的长期主力 AI 助手。
- 生产账号、支付流程、云控制台、公司内部系统、真实社媒账号的自动化操作。
- 需要稳定 API、低维护成本、v1.0+ 语义版本承诺的环境。
- 不能接受 `curl | sh`、桌面 auto-update、Docker、LLM API key、本地 daemon 等综合安全审查负担的用户。
- 只需要轻量 coding agent 或单点工具调用；OpenFang 的概念面和部署面都偏大。

## 与类似项目对比

| 项目 | 定位 | 相对本项目 |
|------|------|-----------|
| OpenClaw | 自托管通用 AI agent assistant | 这里只作为同文件夹已收录项目/生态参照；OpenFang 的差异是更强调 Rust runtime、daemon/desktop 与 security architecture，而非重新审计 OpenClaw |
| ZeroClaw | 轻量 Rust agent runtime | 这里只作为同文件夹已收录项目/生态参照；OpenFang 的差异是功能面与控制面更宽，ZeroClaw 的 footprint claim 未在本条目复测 |
| Hermes Agent | 自托管、自进化 agent | 这里只作为同文件夹已收录项目/本地生态参照；Hermes 的长期学习闭环与 OpenFang 的 Rust Agent OS 不是同一评价轴 |
| OpenHuman | 桌面 personal AI assistant | 这里只作为同文件夹已收录项目参照；OpenHuman 更偏桌面产品体验，OpenFang 更偏自托管 runtime / Agent OS |
| AutoGPT | 早期 autonomous agent 项目 | 这里只作为同文件夹已收录项目参照；用于标定 autonomous-agent 历史位置，不代表本轮重新评价 AutoGPT |

定位摘要：OpenFang 的最近参照不是单一竞品，而是“个人 agent assistant + Rust runtime + 安全控制面”的交叉点。

上述项目按 `ai-programs/agents/assistant-agents` 同类范围做定位级对比，未按同一 10 维度框架深审；表格用于定位，不是完整 benchmark，也不比较 star/release 等未按项目年龄归一化的指标。

---

## 它能做什么

能力评分 4/5。

OpenFang 可见能力包括：

- **Agent runtime / kernel**：agent spawn、message dispatch、workflow/trigger、scheduler、supervisor、quota、event bus、background loops [GH:architecture]。
- **Hands**：7 个 bundled autonomous capability packages，包括 Clip、Lead、Collector、Predictor、Researcher、Twitter、Browser [GH:readme]。
- **Memory**：SQLite-backed memory substrate、vector embeddings、knowledge graph、canonical sessions、usage events [GH:architecture]。
- **LLM / providers**：Anthropic、Gemini、OpenAI-compatible，20 providers / aliases 等文档描述 [GH:architecture][GH:getting-started]。
- **Tools / skills**：built-in tools、60 bundled skills、SKILL.md parser、FangHub / ClawHub client、prompt injection scanner [GH:architecture]。
- **Channels**：Telegram、Discord、Slack、WhatsApp、Signal、Matrix、Email 等 40 adapters 的文档描述 [GH:readme][GH:architecture]。
- **Protocols**：MCP client/server、A2A endpoints、OFP P2P wire protocol [GH:architecture]。
- **Interfaces**：CLI、daemon HTTP API、WebChat/dashboard、Tauri desktop app、Docker [GH:getting-started]。

不给 5 的原因：这些能力多数未运行验证；README 与 architecture 文档之间也有少量数量差异（例如 tools count），应按“能力面广但需实测”处理。

## 运行环境与资源占用

| 场景 | CPU | 内存 | 存储 | 说明 |
|------|-----|------|------|------|
| CLI / daemon 最小试用 | 低 | 低到中 | 小 | 需要至少一个 LLM provider key，`openfang init` 后可启动本地配置 [GH:getting-started] |
| Desktop app | 中 | 中 | 中 | Tauri/WebView + kernel in-process + system tray/notifications；本轮未启动桌面 app [GH:architecture] |
| Multi-channel / Hands | 中到高 | 中到高 | 随数据增长 | channels、browser、skills、SQLite/vector memory、logs 和 artifacts 会增加开销 |
| Docker | 中 | 中 | 中 | Dockerfile / docker-compose 存在，docs 给出 ghcr image run path；本轮未实际 pull/run [GH:getting-started][GH:local-scan] |

- **运行时**：Rust 1.75+ workspace；Tauri desktop；部分 gateway/skill path 可能需要 Python/Node/浏览器/外部服务 [GH:cargo][GH:getting-started]。
- **操作系统**：docs 覆盖 Windows/macOS/Linux desktop、shell installer、PowerShell、cargo install、Docker [GH:getting-started]。
- **Docker**：支持；`Dockerfile`、`docker-compose.yml` 和 docs Docker run/compose 均存在，但未实测 [GH:local-scan][GH:getting-started]。
- **GPU**：不需要；本地 LLM 另计。
- **外部依赖**：LLM provider keys、channel credentials、MCP servers、浏览器/Playwright bridge、可选本地模型服务。
- **许可证字段**：frontmatter 采用 Cargo workspace 的 `Apache-2.0 OR MIT`；GitHub REST 只检测到 Apache-2.0，应以本地 `Cargo.toml` 为准 [GH:api][GH:cargo]。

performance 给 3：Rust single-binary 路线和 README benchmark 指向潜在资源效率，但本轮没有实测冷启动/RSS/二进制大小；desktop/WebView/browser/channels 又会显著改变实际资源曲线。因此这里不给 4，只按“可能较好但未验证”保守计分 [GH:readme]。

## 上手体验

评分 3/5。

安装入口丰富：desktop installer、shell installer、PowerShell installer、cargo install/build、Docker/Compose 都有文档 [GH:getting-started]。`openfang init`、设置 LLM API key、`openfang doctor`、spawn hello-world agent 的路径也清楚。

扣分点是概念和权限面很大：provider keys、daemon、agents、capabilities、memory、skills、channels、Hands、MCP/A2A、desktop auto-update、Docker 都可能进入第一周学习曲线。对于懂 Rust/CLI 的用户，上手可能是 4；对于普通用户，pre-1.0 + 多概念 + 高权限自动化更接近 2–3，综合给 3。

## 代码质量

评分 3/5。

正面：Cargo workspace 清楚，14 crate 职责在 docs/architecture 和 CONTRIBUTING 中都有描述；CI 覆盖三平台 check/test、clippy、fmt、audit、secret scan；Cargo.toml 使用 workspace dependencies，安全相关依赖如 wasmtime、zeroize、ed25519-dalek、hmac、governor 等集中可见 [GH:cargo][GH:ci][GH:contributing]。

但本轮未运行 `cargo build/test/clippy/audit`；tracked files 不多但 docs 声称测试数、LOC、tool count 与不同文档之间存在差异；项目仍 pre-1.0，架构稳定性未被长期验证。因此只能说结构与治理信号不错，不能按“代码结构良好且 CI 基本可用已验证”的 4 计。

## 可扩展性

评分 4/5。

扩展性来自多个层面：agent manifest、capabilities、skills、Hands、channel adapters、MCP/A2A、OFP、OpenAI-compatible API、migration engine、desktop/API/CLI 多入口 [GH:architecture][GH:contributing]。CONTRIBUTING 也有添加 agent template、channel adapter、tool 的章节 [GH:contributing]。

不给 5 是因为生态仍早，FangHub/marketplace 的真实第三方质量未审计；深度扩展需要 Rust workspace 能力，而非简单写几个配置文件。

## 文档质量

评分 3/5。

文档数量和深度都不错：README、getting-started、architecture、security、production checklist、configuration、providers、workflows、skill development 等都有本地文档；security.md 达到近 1500 行，architecture.md 近 900 行 [GH:local-scan][GH:architecture][GH:security-doc]。

但文档一致性和时效性有明显扣分：README 写 137K LOC / 1767+ tests / 2696+ passing，CONTRIBUTING 写 1744+ tests，本地 LOC 粗略统计也不同；production checklist 仍有 blocking 项。文档丰富，但 claim 之间未完全对齐，按评分边界不宜给 4 [GH:readme][GH:contributing][GH:production-checklist]。

## 社区与成熟度

| 维度 | 评分 | 说明 |
|------|------|------|
| 社区活跃度 | 3/5 | 17.7k stars、2.3k forks、open issues=55、open PRs=22、merged PRs=151、100 releases，短期 visibility 很强 [GH:api][GH:graphql]；但项目很新，本轮未审查 issue response latency，不能把 star spike 视为成熟社区。 |
| 成熟度 | 2/5 | 2026-02 创建，v0.6.9，README 自承 pre-1.0 / rough edges，production checklist 有待对齐；不宜按生产成熟项目看待 [GH:readme][GH:production-checklist] |

社区分仍高于成熟度：很多人关注和快速 release 不等于稳定。尤其 agent assistant 涉及本地文件、账号、浏览器和消息渠道，成熟度必须按风险下修。

## 安全与风险

评分 3/5。

OpenFang 的安全意识很强，但安全工具/安全文档不等于真实安全。

正面信号：

- SECURITY.md 明确报告流程和 scope，包含 RCE、SSRF、agent privilege escalation、skill supply chain、WASM sandbox escapes 等威胁 [GH:security]。
- docs/security.md 细到 capability enum、WASM dual metering、Merkle audit、taint tracking、Ed25519 manifest signing、SSRF、subprocess sandbox、prompt injection scanner [GH:security-doc]。
- CI 包含 cargo audit 和 trufflehog verified-secret scan [GH:ci]。
- repository advisories 本轮返回空 [GH:advisories]。

风险：

1. **高权限 agent 面**：Browser Hand、Twitter/WhatsApp/channel adapters、shell/tools、MCP/A2A 都可能触及真实账号和外部系统 [GH:readme]。
2. **技能供应链**：FangHub / ClawHub / SKILL.md parser 是生态入口，也可能成为 prompt injection / tool abuse / malicious code 的入口 [GH:architecture][GH:security]。
3. **WASM / subprocess / browser sandbox 需实测**：文档存在不代表无法绕过；本轮没有运行 sandbox escape / path traversal / SSRF tests。
4. **Security policy supported versions 可能滞后**：SECURITY.md supported table 仍列 0.3.x，而仓库 release 到 v0.6.9；这是文档同步风险 [GH:security][GH:api]。
5. **Desktop updater / signing checklist 张力**：production checklist 的 blocking items 若仍有效，则影响供应链安全；若已过时，也说明 release 文档需要清理 [GH:production-checklist]。
6. **默认配置未知**：本轮未执行 `openfang init`，没有检查默认 capabilities、network bind、API auth、channel credential storage 的实际行为。

security 给 3：不是因为发现公开漏洞，而是因为 attack surface 大且未实测。生产使用前必须低权限账号、隔离目录、网络 allowlist、禁止支付/云控制台操作，并 pin release/commit。

## 学习价值

OpenFang 的学习价值很高，尤其适合拆解“agent assistant 变成 OS”时必须面对的工程问题：

- kernel / runtime / API / channels / desktop / skills 如何分层；
- capability-based security 如何落到 agent manifest；
- memory substrate 与 canonical sessions 如何支持跨渠道 agent；
- skill marketplace 与 prompt injection scanner 如何共同设计；
- 多协议时代，MCP、A2A、OpenAI-compatible API、P2P wire protocol 如何共存；
- Rust workspace 能否为 agent assistant 提供比 JS/Python 更好的资源与安全基线。

对 Develata 而言，OpenFang 不宜“全盘安装信任”，但很值得“抽骨架”：它把 personal agent 从 chat UI 推向常驻 runtime 的方向展示得非常清楚。器未必成，势已可观。