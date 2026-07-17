---


title: "OpenHuman"
created: 2026-05-14
updated: 2026-07-11
type: repository-analysis
repo_url: https://github.com/tinyhumansai/openhuman
category: "ai-programs/agents/assistant-agents"
tags:
  - ai-agent
  - desktop
  - personal-assistant
  - memory
  - privacy
primary_language: Rust
license: GPL-3.0
stars: 34615
forks: 3375
last_checked: 2026-07-11
last_verified: 2026-07-11
evidence: "code review + docs + community reports"
archived_reason: ""
successor: ""
docker_support: false
gpu_required: false
estimated_cpu: "2-4 cores"
estimated_memory: "2-8GB"
estimated_storage: "1-5GB"
status: active
ratings:
  capability: 5
  usability: 3
  performance: 4
  code_quality: 4
  documentation: 4
  community: 4
  maturity: 2
  extensibility: 4
  security: 4
  recommendation: 3
overall_score: 3.7
sources:
  - "[GH:refresh-2026-07-11] GitHub REST/GraphQL snapshot for tinyhumansai/openhuman on 2026-07-11: repository exists and is not archived/disabled; default_branch=main, pushed_at=2026-07-11T02:44:19Z, language=Rust, license=GPL-3.0, stars=34615, forks=3375, open issues=140, open PRs=49, discussions=27, releases=48."
  - "[GH:releases-2026-07-11] GitHub Releases checked 2026-07-11: latest v0.58.7 published 2026-06-30; recent release notes cover meeting-platform polish, MCP/skills reliability, agent-loop safeguards, memory durability, provider/channel fixes and security hardening."
  - "[GH:advisories-2026-07-11] GitHub repository security-advisories endpoint returned [] on 2026-07-11; this means no published repository advisory was found in this check, not that the local/cloud/backend trust model is risk-free."
  - "[Docs:refresh-2026-07-11] Current README and https://tinyhumans.gitbook.io/openhuman/ inspected/extracted 2026-07-11: OpenHuman remains Early Beta but now prominently includes durable tinyagents graphs, tinyflows visual workflows, sub-agent fleets, 17 messaging channels, multi-platform meeting agents, Privacy Mode and a local readable Memory Tree/Obsidian vault."
  - "[GH] https://github.com/tinyhumansai/openhuman"
  - "[Docs] https://tinyhumans.gitbook.io/openhuman/"
  - "[GH-Releases] https://github.com/tinyhumansai/openhuman/releases"
---

# OpenHuman

> Your Personal AI super intelligence. Private, Simple and extremely powerful.
>
> **状态**: `active` · **总分**: 3.7/5 · **推荐度**: 3/5

## 一句话总结

OpenHuman 是一个**本地记忆驱动的桌面 AI agent harness**：Rust + Tauri 客户端把 Memory Tree / Obsidian vault、durable agent graphs、visual workflows、sub-agent fleets、17 messaging channels 与多平台 meeting agents 放在同一产品里 [Docs:refresh-2026-07-11]。它仍是 Early Beta，适合愿意承担本地/云端混合信任和快速迭代成本的早期采用者，不适合追求稳定性的生产用户。

---

## 总体评价

OpenHuman 是 agent-assistant 品类中最「野心勃勃」的项目之一。它仍以本地 Memory Tree、20 分钟 auto-fetch 与 TokenJuice 为核心，但到 v0.58.7 已把产品边界扩到 tinyagents checkpointed graphs、tinyflows visual workflows、background/subconscious orchestration、17 channels 和 Meet/Zoom/Teams/Webex meeting agents [Docs:refresh-2026-07-11][GH:releases-2026-07-11]。Rust core + Tauri desktop 的 local-first 路线仍与 OpenClaw 的 Gateway-first 路线明显不同。

项目的核心矛盾仍是**能力广度 vs 成熟度**：2026-07-11 已到 34.6k stars、48 releases，但仍明确标为 Early Beta，且有 140 open issues / 49 open PRs [GH:refresh-2026-07-11]。最近 releases 同时增加能力并修 meeting、MCP、agent loops、memory 和 provider/channel correctness，说明体验进步很快，也说明系统尚未收敛 [GH:releases-2026-07-11]。

**一句话判词**：如果 OpenClaw 是「AI 助理界的 Linux 服务器」，OpenHuman 就是「AI 助理界的 macOS 桌面」——开箱即用、体验优先、但需要你信任它的封闭生态。

## 推荐度：3/5

> 2026-06 推荐度重校准：明确 Early Beta，maturity=2，依赖 backend 且有桌面端 rough edges；现阶段应按体验/观察处理。


**定位**：为愿意拥抱 Early Beta、相信本地化 AI 助理愿景的技术爱好者。订阅费用（backend 代理 LLM 调用 + OAuth 代理）换取零配置集成体验，无需自备 API key、无需搭服务器。

**扣分点**：
- Early Beta：显式声明「Expect rough edges」，实际 issues 中可见 sign-in 失败、AppImage 不启动、IME 冲突等用户面 bug
- 后端依赖：LLM 调用、OAuth 代理、搜索代理全走 OpenHuman backend，本质上是「本地客户端 + 云端代理」而非纯本地方案
- 桌面限定：无服务端部署、无移动端、无 Web 端，使用场景被锁定在个人桌面

**结论**：现阶段适合**探索和体验**，不适合**依赖和部署**。如果你需要的是「现在就稳定工作的 AI 助理」，这不是正确答案；如果你想要「看看 AI 助理应该是什么样」，这是目前最好的展示窗口。

## 优势

1. **记忆树是真正的差异化能力**。不是 token 窗口内的上下文，不是向量数据库的模糊检索——是分层的、可读的、本地存储的 Markdown 知识图谱，与你 Obsidian vault 实时同步。这是唯一能说「记得你六个月前的那封邮件」的 agent
2. **连接面极宽**。官方当前宣称 100+ OAuth integrations，并把 MCP 与 Skills 一并纳入扩展面；数量是官方产品声明，具体 connector/skill 的质量与权限仍需分别验证 [Docs:refresh-2026-07-11]
3. **TokenJuice 压缩管线**是经济可行的基础。扫六个月邮件只需个位数美元，这让「全天候 AI 助理」从概念变为可负担的现实
4. **架构分离清晰**。Rust 核心（业务逻辑）→ JSON-RPC → React 前端（纯展示），Tauri 壳负责桌面交付；对仍处 Early Beta 的项目而言，这是积极工程信号
5. **开箱即用的全栈工具集**。Web 搜索、文件系统、git、lint、test、语音、多平台 meeting agents——核心能力内置，并可继续通过 MCP/skills 扩展 [Docs:refresh-2026-07-11]

## 劣势

1. **Early Beta 真不是客气话**。issues 中有明确的用户面 bug（sign-in 解密失败、AppImage 在 Manjaro 上不启动、IME 组合输入冲突、Core RPC 超时），不是「基本可用、偶有小问题」
2. **后端代理是关键依赖**。OpenHuman 的 backend 挂了 = LLM 调用全停、OAuth 全停、搜索全停、TTS 全停。这不是可以自愈的退化——是单点故障
3. **桌面应用是唯一交付形态**。无 Docker、无服务端、无 Web UI、无移动端——这是架构选择而非缺陷，但限制了使用场景（不能 24/7 运行在服务器上，不能在路上用手机调）
4. **v0.58.7 与 48 releases 暴露了现实**。版本在上升，但 Early Beta、高频 release 和大量 cross-cutting fixes 仍是实验性迭代节奏，不是稳定产品节奏 [GH:refresh-2026-07-11][GH:releases-2026-07-11]
5. **订阅模式 + GPL-3.0 的张力**。代码开源（GPL-3.0），但 backend 闭源且收费。你可以 fork 代码，但你需要自己搭 backend 才能用——README 中的「one-click cloud deployment for OpenHuman Core」提到但未见详细文档

---

## 适合什么场景

- 你想体验「AI 助理应该是什么样」——一个记得你一切、主动获取信息、能在会议上代表你的代理
- 你的工作流横跨 Gmail/GitHub/Slack/Calendar 等多个服务，想要一个统一的 AI 层来理解和协调
- 你重视隐私，希望原始数据留在本地，只让 LLM 看到 Agent 检索后的结果
- 你愿意折腾、能接受每周更新、不介意偶尔遇到 bug

## 不适合什么场景

- 你需要 7×24 稳定运行的生产工具——等 1.0 再看
- 你需要服务端部署 API 供团队或下游系统调用——这是桌面应用
- 你对订阅付费 + 后端闭源不满，想要完全自托管方案——看 OpenClaw
- 你只是想要一个聊天客户端来调用多个 LLM——这个定位更接近 Cherry Studio / LobeChat

## 与类似项目对比

| 项目 | 定位 | 相对本项目 |
|------|------|-----------|
| OpenClaw | 自托管服务端 AI 代理框架 | 服务端部署、多用户可配、完全自托管但需自己搭；OpenHuman 反之——桌面应用、单用户、后端托管但零配置 |
| Hermes Agent | 终端/消息驱动的个人 AI 代理 | 轻量级、CLI 优先、无 GUI、无记忆树；OpenHuman 体验更重但功能更全 |
| Claude Cowork | Anthropic 云端终端代理 | 云端运行、Anthropic 锁定、无本地记忆；OpenHuman 本地优先 + 多模型路由 |
| Cherry Studio | 多 LLM 聊天客户端 | 聊天客户端而非代理——无记忆、无工具、无自动化；OpenHuman 是 agent 不是 chat UI |

---

## 它能做什么

OpenHuman 的核心能力线：

- **记忆与知识管理**：Memory Tree（本地 SQLite + 分层摘要树）+ Obsidian-compatible Markdown vault，每 20 分钟从所有连接服务拉取新数据自动消化
- **100+ OAuth integrations**：Gmail、GitHub、Slack、Notion、Stripe、Calendar、Drive、Linear、Jira 等；数量来自 current official docs，具体 connector 权限与可用性需逐项验证 [Docs:refresh-2026-07-11]
- **自动同步**（Auto-Fetch）：每 20 分钟遍历活跃连接，拉取增量数据，规范化、分块、评分、构建摘要树——无需手动触发 [Docs]
- **智能模型路由**：hint:reasoning → 强模型，hint:fast → 便宜模型，hint:vision → 视觉模型——按任务自动选，一个订阅覆盖 [Docs]
- **Token 压缩**（TokenJuice）：三层规则叠加（内置/用户/项目），工具输出先压缩再入 LLM 上下文，声称降低成本最高 80% [Docs]
- **多平台会议代理**：加入 Meet、Zoom、Teams、Webex，实时转录、语音参与并沉淀 summary/action items；这是当前官方能力声明，本次未做会议实测 [Docs:refresh-2026-07-11]
- **桌面 mascot**：持续在桌面的角色形象，语音对话、唇形同步、后台思考、跨周记忆 [Docs]
- **内置工具集**：Web 搜索、网页抓取、文件系统、git、lint、test、grep、浏览器控制、cron 调度、子代理协调 [GH]
- **Voice**：STT 输入 + ElevenLabs TTS 输出 + mascot 唇形同步 [Docs]
- **跨平台桌面**：macOS（aarch64/x64 DMG）、Windows（x64 MSI/setup.exe）、Linux（amd64 AppImage/deb）[GH-Releases]
- **Durable orchestration 与 workflows**：tinyagents checkpointed graphs、可暂停/恢复 sub-agents，以及 tinyflows 可视化、trigger-driven、approval-gated workflows [Docs:refresh-2026-07-11]
- **17 messaging channels**：官方当前列出 Telegram、Discord、Slack、WhatsApp、Signal、iMessage 与 native email 等；具体 channel 可靠性仍随 release 修补 [Docs:refresh-2026-07-11][GH:releases-2026-07-11]

评分 5/5。作为桌面个人 AI 助理，功能集合在当前市场上无出其右。覆盖了从记忆、集成、通信、编码到会议代理的完整能力域。桌面限定是架构选择而非能力缺口。

## 运行环境与资源占用

| 场景 | CPU | 内存 | 存储 | 说明 |
|------|-----|------|------|------|
| 最小 | 2 cores | 2GB | 1GB | 轻量集成，本地 AI 关闭 |
| 推荐 | 4 cores | 4-8GB | 2-5GB | 多集成 + auto-fetch + 本地 embedding |

- **运行时**：Tauri v2 桌面壳 + Rust 核心 sidecar（`openhuman-core` 二进制）[GH]
- **操作系统**：macOS（aarch64/x64）、Windows（x64）、Linux（amd64）[GH-Releases]
- **Docker**：不适用——纯桌面应用
- **GPU**：非必需；可选本地 AI（Ollama）时可利用 GPU
- **外部依赖**：Ollama（可选本地 AI）；OpenHuman backend（必需——LLM 代理、OAuth 代理）

**重要说明**：OpenHuman 不是纯本地应用。核心逻辑（Memory Tree、分块、压缩）跑在本地，但 LLM 调用必须经过 OpenHuman backend（订阅制）。没有这个 backend，Agent 无法产生智能响应。评测场景下未实际运行，资源估算基于架构分析——Rust 核心 + SQLite + 20 分钟间隔同步的架构设计在桌面环境中资源友好。

评分 4/5。Rust 核心 + 间隔同步 + TokenJuice 压缩 = 架构上效率良好。无实测数据，但同等品类中 Rust 桌面应用通常优于 Electron/Node.js 方案。

## 上手体验

安装路径：`curl | bash`（macOS/Linux）或 PowerShell 一行（Windows），也提供 DMG/EXE/AppImage 安装包 [GH]。首次启动有 guided tour walkthrough，10 秒后可将 profile 构建移至后台 [GH-Releases]。

OAuth 集成设计出色：点击 Connect → 浏览器 OAuth → 连接激活 → 下一个 20 分钟 tick 开始同步。全程无需复制粘贴 token 或 API key [Docs]。

**但实际体验受 Early Beta 影响**。2026-07-11 仍有 140 open issues 与 49 open PRs；近期 release notes 继续修 meeting state、MCP re-spawn loops、session timeouts、cross-host vault paths、provider routing 与 channel OAuth roundtrips [GH:refresh-2026-07-11][GH:releases-2026-07-11]。这比只看早期 issue 样本更能说明：能装上不等于所有路径已经可靠。

评分 3/5。设计意图是 4（guided tour + 一键 OAuth 的体验在同类中领先），但实际 bug 密度把体验拉到 3。Boundary：「需阅读文档上手，有一定学习曲线但可接受」——这里的「学习曲线」不是配置复杂，而是需要容忍和绕过 bugs。

## 代码质量

**可信信号**：
- AGENTS.md 结构完善，明确架构分层（Rust=业务逻辑，Tauri=窗口，React=纯展示）[GH]
- CONTRIBUTING.md 详尽，包含 Windows/macOS/Linux 三平台搭建指南 + 独立初学者文档 [GH]
- CI 覆盖：Vitest（单元）+ WDIO（E2E）+ Rust tests（`cargo test`），80% diff-cover 强制门禁 [GH]
- 共享 mock backend 用于测试（`scripts/mock-api-*.mjs`），E2E 在 Linux（tauri-driver）和 macOS（Appium Mac2）上运行 [GH]
- 合并前 8 项检查的 pre-merge gate（`scripts/merge.sh`）[GH-Releases]
- Rust 侧有模块化的清晰组织（`src/openhuman/{providers,tokenjuice,agent,memory,...}`）
- 详尽的版本发布记录（每版列出所有 PR，含贡献者归属）

**疑虑**：
- 48 releases 且仍在高频扩展/修补，代码与架构文档同步压力很大 [GH:refresh-2026-07-11][GH:releases-2026-07-11]
- 140 open issues、49 open PRs；近期 release notes 仍有多类用户路径修复 [GH:refresh-2026-07-11]
- GPL-3.0 许可对商业 fork 有限制

评分 4/5。CI 基础设施、架构分层、AGENTS.md + CONTRIBUTING.md + diff-cover 门禁仍是正面信号；扣一分是因为 140 issues 与高频 cross-cutting fixes 表明技术债仍在累积，且「好的 CI 不等于好的代码」[GH:refresh-2026-07-11][GH:releases-2026-07-11]。

## 可扩展性

- **Skills 系统**：QuickJS 沙箱化的技能模块，独立安装、资源限制强制执行、托管在独立仓库 `tinyhumansai/openhuman-skills` [GH]
- **TokenJuice 规则覆盖**：三层规则（内置 → 用户级 `~/.config/tokenjuice/rules/` → 项目级 `.tokenjuice/rules/`），JSON 文件热加载无需重编译 [Docs]
- **Model Routing 配置**：TOML 配置文件中的 route table 可自定义 `hint:reasoning` 等映射到任意 provider/model 组合 [Docs]
- **集成连接器**：native provider（Rust 模块直接接入 Memory Tree）和 proxied tool（agent 可调用但无自动同步）两层 [Docs]
- **无传统插件市场**：Skills 就是插件机制，但生态极早期（独立仓库目前基本是官方维护）

评分 4/5。Skills 系统 + 规则覆盖 + 路由配置提供了良好的扩展面，但生态尚在萌芽期。Boundary：「有插件机制或良好设计的 API，可定制但不完美」——Skills 就是插件机制，但丰富度不及 OpenClaw 的插件生态。

## 文档质量

**文档矩阵**：
- GitBook（`tinyhumans.gitbook.io/openhuman/`）：完整的产品文档——Welcome → Architecture → Features（Memory Tree、Integrations、Auto-Fetch、Token Compression、Model Routing、Voice、Privacy）→ Developing——结构清晰、含架构图 [Docs]
- AGENTS.md：贡献者入口文档，含仓库结构、命令速查、测试指南、配置说明 [GH]
- CONTRIBUTING.md + CONTRIBUTING-BEGINNERS.md：开发环境搭建详尽到平台级步骤 [GH]
- `docs/` 目录：15+ 个专项文档（prompt injection guard、agent subagent flow、memory sync、WhatsApp data flow 等）[GH]
- 版本发布记录：每个 release 列出所有 PR，含分类标签和贡献者归属 [GH-Releases]
- SECURITY.md：清晰的安全漏洞报告流程，含范围界定和安全实践说明 [GH]

**瑕疵**：
- 部分架构文档 404（如 `docs/ARCHITECTURE.md` → 内容移至 GitBook，但 repo 内引用可能未完全更新）
- GitBook 的 Developing 部分偏浅，深度架构参考指向 repo 内的 `gitbooks/developing/architecture.md`

评分 4/5。current docs 已覆盖 memory、orchestration、workflows、meetings、channels、privacy 与开发架构，覆盖率很强；但 Early Beta 的 feature surface 扩张很快，边缘行为仍需对照 release notes [Docs:refresh-2026-07-11][GH:releases-2026-07-11]。

## 社区与成熟度

| 维度 | 评分 | 说明 |
|------|------|------|
| 社区活跃度 | 4/5 | 34.6k stars、3.4k forks、27 discussions，增长与参与信号强；不据此推断生产采用率 [GH:refresh-2026-07-11] |
| 成熟度 | 2/5 | v0.58.7、48 releases，但 README 仍显式声明 Early Beta，近期 releases 仍同时扩功能和修 agent/memory/MCP/channel 基础路径 [GH:refresh-2026-07-11][GH:releases-2026-07-11][Docs:refresh-2026-07-11] |

**社区深度分析**：
- 34.6k stars / 3.4k forks 与 27 discussions 显示强关注和参与，但不能由此推出 DAU 或 production depth [GH:refresh-2026-07-11]
- 贡献者生态以核心团队为主（senamakel 主导），但有明显的外部贡献者流入（graycyrus、M3gA-Mind、iuyup、honor2030 等）
- 第三方生态：有 `agentconn.com` 的外部评测，但无知名第三方插件或衍生项目

**成熟度深度分析**：
- v0.58.7 仍明确 Early Beta；不能把 `0.58` 机械解释为“完成 58%” [Docs:refresh-2026-07-11]
- recent releases 同时扩展 meetings/orchestration 和修 agent loops、memory、MCP、channels、provider routing，仍未进入稳定收敛期 [GH:releases-2026-07-11]
- 不适用 Docker、不适用 Web 部署、不适用服务端——桌面单用户定位让「生产广泛使用」的评判标准需要调整

## 安全与风险

**正面信号**：
- 本地化设计理念：Memory Tree (SQLite)、Obsidian vault、audio buffer 均在本地 [Docs]
- OAuth token 由 backend 持有，不在本地磁盘明文存储；本地使用 OS 级凭证存储（Keychain/Credential Manager）[Docs]
- Skills 沙箱化：QuickJS 隔离执行，不能互相访问数据或访问宿主机文件系统 [GH]
- 文件系统工具 workspace-scoped——只能操作用户打开的工作目录 [Docs]
- 全部 backend 通信 TLS 加密 [Docs]
- 有 PROMPT_INJECTION_GUARD.md 专项文档 [GH]
- SECURITY.md 规范安全漏洞报告流程，含 Safe Harbor 条款 [GH]

**风险点**：
- **Backend 单点**：所有 LLM 调用、OAuth 代理、搜索代理走同一个 backend。这既是便利也是集中式风险——backend 被攻破 = 所有用户的 agent 会话暴露
- **订阅模式**：当前只有托管方案，无自部署 backend 路径（文档中 "one-click cloud deployment" 提及但未详述）
- **GPL-3.0** 不限制使用但限制分发：fork 修改后重新分发必须同样 GPL-3.0
- 本轮未找到独立安全审计；repo advisories endpoint 为 `[]` 也不能替代审计 [GH:advisories-2026-07-11]

评分 4/5。设计层面的隐私保护思路清晰（本地记忆、OS keyring、approval gate、可选 sandbox、Rust-core-enforced Privacy Mode）[Docs:refresh-2026-07-11]；本次 repo-advisories endpoint 未发现 published GHSA，但这不是安全证明 [GH:advisories-2026-07-11]。扣一分仍因缺少独立审计，且托管 inference/OAuth/backend 与 wide connector/channel surface 构成集中式信任边界。

## 学习价值

**高**。

从一个仍处 Early Beta、但能力快速扩张的项目中可以学到：

1. **记忆树架构**：确定性管线（ingest → canonicalize → chunk → score → summarize）的设计思路可迁移到任何需要长程记忆的 AI 系统。<3k token 分块 + 分层摘要树的组合比纯向量检索更可解释
2. **TokenJuice 规则系统**：三层 JSON 规则覆盖的工具输出压缩方案，简单但有效。这个模式适用于任何需要控制 LLM 上下文成本的产品
3. **Tauri + Rust core sidecar 架构**：桌面壳（Tauri/React）通过 HTTP JSON-RPC 与 Rust 核心通信——这是桌面 AI 应用的一个参考架构，避免了 Electron 的资源开销
4. **Agent 自学习的工程实践**：docs/ 中有 AGENT_SELF_LEARNING.md、DELEGATION_POLICY.md 等文档，可了解团队对 agent 自我改进的设计思路
5. **快速迭代 vs 质量控制的张力**：48 releases、34.6k stars、140 issues、49 PRs——这是研究 hypergrowth open-source quality evolution 的活案例 [GH:refresh-2026-07-11]

即使不部署，阅读其架构文档和代码组织也对理解「AI 桌面代理应该怎么建」有参考价值。
