---
title: "OpenHuman"
created: 2026-05-14
updated: 2026-05-14
type: repository-analysis
repo_url: https://github.com/tinyhumansai/openhuman
category: ai-agents
tags:
  - ai-agent
  - desktop
  - personal-assistant
  - memory
  - privacy
primary_language: Rust
license: GPL-3.0
stars: 7277
forks: 580
last_checked: 2026-05-14
last_verified: 2026-05-14
evidence: "code review + docs + community reports"
archived_reason: ""
successor: ""
docker_support: false
gpu_required: false
estimated_cpu: "2-4 cores"
estimated_memory: "2-8GB"
estimated_storage: "1-5GB"
status: active
sharing_candidate: true
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
  recommendation: 4
overall_score: 3.8
sources:
  - "[GH] https://github.com/tinyhumansai/openhuman"
  - "[Docs] https://tinyhumans.gitbook.io/openhuman/"
  - "[GH-Releases] https://github.com/tinyhumansai/openhuman/releases"
---

# OpenHuman

> Your Personal AI super intelligence. Private, Simple and extremely powerful.
>
> **状态**: `active` · **总分**: 3.8/5 · **推荐度**: 4/5

## 一句话总结

OpenHuman 是一个**隐私优先、本地记忆驱动的桌面 AI 代理**，通过 Tauri 桌面应用 + Rust 核心提供 118+ 集成、持久记忆树、自动同步和语音/会议代理。定位：**个人生活 AI 总控台**——适合愿意为本地化 AI 助理支付订阅费用的早期采用者，不适合追求稳定性的生产用户。

---

## 总体评价

OpenHuman 是目前 agent-assistant 品类中最「野心勃勃」的项目之一——它试图解决 AI 助理最根本的问题：**无状态性**。通过本地 Memory Tree + 每 20 分钟自动同步 118+ 服务 + TokenJuice 压缩管线，它构建了一个永不遗忘的个人 AI 助理。架构上选择了 Rust 核心 + Tauri 桌面应用的本地优先路线，与 OpenClaw（服务端自托管）、Claude Cowork（云端终端）形成明确差异。

项目的核心矛盾是**能力广度 vs 成熟度**：3 个月内达到 7.3k stars 的病毒式增长证明了需求真实存在，但 Early Beta 状态、每周 2-3 个版本的高频迭代和 117 个 open issues 表明离「开箱即用」还有距离。如果你能接受「尝鲜有风险」，OpenHuman 是目前最令人兴奋的个人 AI 助理项目；如果你需要稳定可靠的工具，等 6 个月再看。

**一句话判词**：如果 OpenClaw 是「AI 助理界的 Linux 服务器」，OpenHuman 就是「AI 助理界的 macOS 桌面」——开箱即用、体验优先、但需要你信任它的封闭生态。

## 推荐度：4/5

**定位**：为愿意拥抱 Early Beta、相信本地化 AI 助理愿景的技术爱好者。订阅费用（backend 代理 LLM 调用 + OAuth 代理）换取零配置集成体验，无需自备 API key、无需搭服务器。

**扣分点**：
- Early Beta：显式声明「Expect rough edges」，实际 issues 中可见 sign-in 失败、AppImage 不启动、IME 冲突等用户面 bug
- 后端依赖：LLM 调用、OAuth 代理、搜索代理全走 OpenHuman backend，本质上是「本地客户端 + 云端代理」而非纯本地方案
- 桌面限定：无服务端部署、无移动端、无 Web 端，使用场景被锁定在个人桌面

**结论**：现阶段适合**探索和体验**，不适合**依赖和部署**。如果你需要的是「现在就稳定工作的 AI 助理」，这不是正确答案；如果你想要「看看 AI 助理应该是什么样」，这是目前最好的展示窗口。

## 优势

1. **记忆树是真正的差异化能力**。不是 token 窗口内的上下文，不是向量数据库的模糊检索——是分层的、可读的、本地存储的 Markdown 知识图谱，与你 Obsidian vault 实时同步。这是唯一能说「记得你六个月前的那封邮件」的 agent
2. **118+ 一键 OAuth 集成**。无需手配 API key、无需搭 webhook、无需写连接器代码。连接即工具、连接即记忆源、连接即触发起点
3. **TokenJuice 压缩管线**是经济可行的基础。扫六个月邮件只需个位数美元，这让「全天候 AI 助理」从概念变为可负担的现实
4. **架构分离清晰**。Rust 核心（业务逻辑）→ JSON-RPC → React 前端（纯展示），Tauri 壳只做窗口管理。这种分层在 3 个月大的项目中少见，说明团队有架构意识
5. **开箱即用的全栈工具集**。Web 搜索、文件系统、git、lint、test、语音、Google Meet 代理——全内置，无需插件市场

## 劣势

1. **Early Beta 真不是客气话**。issues 中有明确的用户面 bug（sign-in 解密失败、AppImage 在 Manjaro 上不启动、IME 组合输入冲突、Core RPC 超时），不是「基本可用、偶有小问题」
2. **后端代理是关键依赖**。OpenHuman 的 backend 挂了 = LLM 调用全停、OAuth 全停、搜索全停、TTS 全停。这不是可以自愈的退化——是单点故障
3. **桌面应用是唯一交付形态**。无 Docker、无服务端、无 Web UI、无移动端——这是架构选择而非缺陷，但限制了使用场景（不能 24/7 运行在服务器上，不能在路上用手机调）
4. **v0.53 的版本号暴露了现实**。3 个月、34 个 release、每周 ~2.6 个版本——这是实验性迭代节奏，不是稳定产品节奏
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

## 个人主页 sharing 候选

**是**。理由：
- **新颖性**（4/4）：记忆树 + 118+ 集成 + Meet agent 的组合在当前市场上没有对等产品
- **成熟度**（2/4）：Early Beta 扣分明显，但「早期但可用」本身有传播价值（"look what's coming"）
- **实用性**（3/4）：对多服务重度用户确实有用，但仅限桌面场景
- **可分享性**（4/4）：视觉化的 mascot + Google Meet agent + Obsidian vault 的画面感强，适合作为「AI 助理的未来」展品

---

## 它能做什么

OpenHuman 的核心能力线：

- **记忆与知识管理**：Memory Tree（本地 SQLite + 分层摘要树）+ Obsidian-compatible Markdown vault，每 20 分钟从所有连接服务拉取新数据自动消化
- **118+ 第三方集成**：Gmail、GitHub、Slack、Notion、Stripe、Calendar、Drive、Linear、Jira 等——一键 OAuth 连接，连接即工具 [Docs]
- **自动同步**（Auto-Fetch）：每 20 分钟遍历活跃连接，拉取增量数据，规范化、分块、评分、构建摘要树——无需手动触发 [Docs]
- **智能模型路由**：hint:reasoning → 强模型，hint:fast → 便宜模型，hint:vision → 视觉模型——按任务自动选，一个订阅覆盖 [Docs]
- **Token 压缩**（TokenJuice）：三层规则叠加（内置/用户/项目），工具输出先压缩再入 LLM 上下文，声称降低成本最高 80% [Docs]
- **Google Meet 代理**：加入会议、实时转录到 Memory Tree、可通过 TTS 发言——代理以虚拟摄像头 + 音频参与 [GH-Releases]
- **桌面 mascot**：持续在桌面的角色形象，语音对话、唇形同步、后台思考、跨周记忆 [Docs]
- **内置工具集**：Web 搜索、网页抓取、文件系统、git、lint、test、grep、浏览器控制、cron 调度、子代理协调 [GH]
- **Voice**：STT 输入 + ElevenLabs TTS 输出 + mascot 唇形同步 [Docs]
- **跨平台桌面**：macOS（aarch64/x64 DMG）、Windows（x64 MSI/setup.exe）、Linux（amd64 AppImage/deb）[GH-Releases]

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

**但实际体验受 Early Beta 影响**。117 个 open issues 中可见多个用户面问题：Windows sign-in 解密失败（#1742）、Core RPC 超时（#1728）、IME 组合输入冲突（#1718）、AppImage 在 Manjaro 不启动（#1697）、Calendar 时区偏移（#1714）等。这些都是「能装上但未必能用顺」的信号。

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
- 3 个月、34 个 release 的迭代节奏意味着代码库在快速膨胀——架构文档能不能跟上存疑
- 117 个 open issues（bug 标签因 GitHub 登录墙无法精确统计，但可见 issue 中有多个 bug 级别的用户报告）
- GPL-3.0 许可对商业 fork 有限制

评分 4/5。对于一个 3 个月的项目，CI 基础设施和架构文档的成熟度超出预期。AGENTS.md + CONTRIBUTING.md + 80% diff-cover 的组合在同年龄项目中罕见。扣一分是因为 issue 积压表明快速迭代在堆积技术债，且「好的 CI 不等于好的代码」。

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

评分 4/5。对于一个 3 个月的项目，文档覆盖率和结构质量超常。Boundary：「覆盖主要功能，有基本示例，边缘场景偶有缺失」——主要功能文档齐全，开发文档的深层架构部分有少量空白。

## 社区与成熟度

| 维度 | 评分 | 说明 |
|------|------|------|
| 社区活跃度 | 4/5 | 7.3k stars/3 个月 = 病毒级增长；580 forks；~10+ 活跃贡献者（release notes 可见）；Discord + Reddit + X 社区存在；Discussions 启用 |
| 成熟度 | 2/5 | 创建于 2026-02-18（~3 个月）；v0.53.x 版本号；34 releases / ~90 天 = 每周 2.6 个版本；README 显式声明 "Early Beta — Expect rough edges" |

**社区深度分析**：
- star 增长是真实的——3 个月内 7.3k 在 AI 代理品类中属第一梯队（对比 Hermes Agent 同期 ~4k）
- 但 watchers 仅 40，说明大部分 star 是「书签式关注」而非「持续跟踪」
- 贡献者生态以核心团队为主（senamakel 主导），但有明显的外部贡献者流入（graycyrus、M3gA-Mind、iuyup、honor2030 等）
- 第三方生态：有 `agentconn.com` 的外部评测，但无知名第三方插件或衍生项目

**成熟度深度分析**：
- 版本号 v0.53 暗示距离 1.0 尚远（项目自己估算的进度约 53%）
- 每版 release notes 中「fix」类 PR 占比高（如 v0.53.35 的 62 个 PR 中大量是 Sentry noise 抑制、platform crash fix），说明仍在修基建
- Gmail sync 优化（#1404）、WhatsApp 数据管线、Meet agent——每个 release 都在加新功能，而非收敛稳定
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
- 无安全审计记录（3 个月项目合理，但应标注）

评分 4/5。设计层面的隐私保护思路清晰且执行良好（本地优先、token 隔离、沙箱化），backend 依赖是必要的架构取舍。扣一分是因为缺少独立安全审计，且 backend 作为集中式单点的风险未被充分缓解文档覆盖。

## 学习价值

**高**。

从一个 3 个月的项目中可以学到：

1. **记忆树架构**：确定性管线（ingest → canonicalize → chunk → score → summarize）的设计思路可迁移到任何需要长程记忆的 AI 系统。<3k token 分块 + 分层摘要树的组合比纯向量检索更可解释
2. **TokenJuice 规则系统**：三层 JSON 规则覆盖的工具输出压缩方案，简单但有效。这个模式适用于任何需要控制 LLM 上下文成本的产品
3. **Tauri + Rust core sidecar 架构**：桌面壳（Tauri/React）通过 HTTP JSON-RPC 与 Rust 核心通信——这是桌面 AI 应用的一个参考架构，避免了 Electron 的资源开销
4. **Agent 自学习的工程实践**：docs/ 中有 AGENT_SELF_LEARNING.md、DELEGATION_POLICY.md 等文档，可了解团队对 agent 自我改进的设计思路
5. **快速迭代 vs 质量控制的张力**：3 个月 34 个 release、7.3k stars、117 open issues——这是一个研究「hypergrowth 开源项目的质量演变」的活案例

即使不部署，阅读其架构文档和代码组织也对理解「AI 桌面代理应该怎么建」有参考价值。
