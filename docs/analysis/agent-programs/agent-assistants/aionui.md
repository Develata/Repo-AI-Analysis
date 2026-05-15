---
title: "AionUi"
created: 2026-05-14
updated: 2026-05-14
type: repository-analysis
repo_url: https://github.com/iOfficeAI/AionUi
category: ai-agents
tags:
  - ai-agent
  - desktop
  - multi-agent
  - automation
  - electron
  - rust
  - office
  - cowork
primary_language: TypeScript
license: Apache-2.0
stars: 25070
forks: 2287
last_checked: 2026-05-14
last_verified: 2026-05-14
evidence: "docs review + release notes analysis + community signals"
archived_reason: ""
successor: ""
docker_support: false
gpu_required: false
estimated_cpu: "4-8 cores"
estimated_memory: "4-16GB"
estimated_storage: "2-5GB"
status: active
sharing_candidate: true
ratings:
  capability: 5
  usability: 4
  performance: 3
  code_quality: 4
  documentation: 4
  community: 4
  maturity: 3
  extensibility: 4
  security: 3
  recommendation: 4
overall_score: 3.8
sources:
  - "[GH] https://github.com/iOfficeAI/AionUi"
  - "[Docs] https://github.com/iOfficeAI/AionUi/tree/main/docs"
  - "[Wiki] https://github.com/iOfficeAI/AionUi/wiki"
  - "[Backend] https://github.com/iOfficeAI/aionui-backend"
---

# AionUi

> Free, local, open-source 24/7 Cowork app — one desktop interface for 20+ AI agents, with built-in office tools and cron automation
>
> **状态**: `active` · **总分**: 3.8/5 · **推荐度**: 4/5

## 一句话总结

面向需要同时使用多个 AI agent、希望统一界面管理、并有 24/7 自动化需求的开发者与高级用户——AionUi 是当前最完整的 AI agent 桌面工作台。

## 总体评价

AionUi 的定位不是「又一个 AI chat 客户端」，而是 AI agent 的 **Cowork 平台**：它自动检测你已安装的 CLI agent（Claude Code、Codex、Hermes Agent、OpenClaw 等 20+），统一到一个 Electron 桌面界面中，并内置了自己的 agent、Office 文档生成（PPT/Word/Excel）、定时任务（Cron）、以及 Telegram/钉钉/微信等多渠道远程控制。v2.0.0 正在将后端从 Electron 中拆出、用 Rust 重写，显示出向「server 端部署 + 多前端」架构演进的野心。

适合：多 agent 重度用户、需要定时自动化的人、想在手机/聊天软件上远程操控 desktop agent 的人。不适合：偏好极简单 CLI 工具的 minimalists、不需要多 agent 编排的轻量用户。

> AionUi is what happens when you stop asking "which agent is best" and start asking "how can I use all of them at once."

## 推荐度：4/5

**目标角色**：同时使用多个 AI agent、需要统一 workspace + 24/7 自动化 + 移动端远程控制的开发者和 power users。

AionUi 的杀手锏是「聚合」——不是造一个新的 agent，而是把现有的 20+ agent 放进同一个界面，加上自己的 built-in agent 和 office 工具链，再配上 cron 和远程控制。v2.0.0 Rust 后端的拆分是加分项：这意味着未来可以用一台服务器跑后端、多台设备通过 WebUI 接入，类似「自部署的 Claude Cowork 替代品」。

痛点是 Electron 的内存占用（4–16GB RAM 推荐配置）、仍在快速迭代（v2.0.0 标 Preview）、以及 docs 某些边缘场景覆盖不足。但考虑到它是免费开源、Apache 2.0 协议、且只有 9 个月就积累了 25k stars，这个推荐度是合理的。

**结论**：如果你已经在用 Claude Code / Codex / Hermes Agent / OpenClaw 中的任意两个，AionUi 值得立即试用。如果你只需要一个 agent，它的 overhead 可能不值得。

## 优势

1. **真正的多 agent 工作台**：自动检测已安装的 20+ CLI agent，不需要额外配置。一个界面切换 agent、对比输出、编排协作
2. **内置 office 工具链**：PPT（Morph 动画）、Word、Excel 的 AI 生成与编辑，直接输出可编辑的 `.pptx`/`.docx`/`.xlsx`，这是其他 agent 客户端完全没有的
3. **24/7 定时自动化**：内置 Cron 系统，支持 cron 表达式、定时间隔、一次性执行。可以设定「每周一早上 9 点生成项目周报」这种任务
4. **多渠道远程控制**：WebUI（手机/平板浏览器）+ Telegram + 钉钉 + 飞书 + 微信 + 企业微信，你不在电脑前也能操控 agent
5. **v2.0.0 架构升级**：后端从 Electron 拆出，Rust 编写，支持独立部署（NAS/树莓派/服务器），REST + WebSocket API 默认开放
6. **Apache 2.0 协议**：比 GPL 更友好的企业使用授权，没有 copyleft 顾虑

## 劣势

1. **Electron 内存重**：即便 v2.0 已经开始拆分后端，桌面端仍然是 Electron，推荐 4–16GB RAM
2. **版本仍在快速迭代**：v2.0.0 标 Preview，API/配置格式可能随时变动。生产环境部署需谨慎
3. **文档存在空白区**：Use Cases 页面大部分标 "Coming Soon"，FAQ 有标题无答案，扩展 SDK 文档浅
4. **核心贡献者集中**：@piorpua 出现在几乎每个 release 中，社区贡献虽然活跃但 bus factor 偏高
5. **505 个 open issues**：数量较高，可能意味着 issue triage 跟不上增长节奏

---

## 适合什么场景

- 同时使用多个 agent（如 Claude Code + Codex + Hermes Agent），需要一个统一界面
- 需要定时自动化（每日摘要、周报生成、备份等）
- 需要在手机上通过 Telegram/微信远程操控 desktop agent
- 需要 AI 批量生成/处理 Office 文档（PPT 大纲、Word 报告、Excel 数据分析）
- 想在本地跑 agent、用自己的 API key，不想把文件上传到云端

## 不适合什么场景

- 只用一个 agent 的轻量用户——AionUi 的桌面 overhead 不值得
- 追求极简 CLI 体验的开发者——直接用 Claude Code / Codex 更轻
- 需要稳定生产环境的团队——v2.0 架构变动大，目前不适合作为团队基础设施
- 对内存/CPU 敏感的低配机器（如 4GB RAM 笔记本）——Electron 底子决定了它不轻量

## 与类似项目对比

| 项目 | 定位 | 相对本项目 |
|------|------|-----------|
| Claude Cowork | macOS-only 官方 agent | 免费、跨平台、多 agent，但 Claude Cowork 与 Claude Code 的集成更原生 |
| OpenClaw | 自部署纯后端 agent platform | AionUi 有桌面 GUI + office 工具链，OpenClaw 生态更大(371k stars)但无前端 |
| Hermes Agent | 自进化型 CLI agent | Hermes 强在 learning loop(skills 自动创建+自修正)，AionUi 强在聚合与办公 |
| Cursor | AI IDE | Cursor 专注代码编辑，AionUi 是通用 agent workspace + 办公自动化 |
| Copilot Chat | IDE 内嵌 chat | AionUi 多 agent、有 office 能力、有 cron，但 coding 深度不如 IDE 工具 |

## 个人主页 sharing 候选

**是** — 符合 sharing 候选四个条件：

- **新颖性**：多 agent workspace + office 文档 AI 生成 + cron 的组合独一无二
- **成熟度**：25k stars、Apache 2.0、跨平台二进制发布，可放心推荐
- **实用性**：对于多 agent 用户来说，聚合界面有即时价值
- **可叙述性**：「一个界面操控所有 AI agent，还能帮你做 PPT 和 Excel」——叙事简洁有力

---

## 它能做什么

AionUi 的功能矩阵可拆为四个层 [GH]：

**Agent 层**：
- Built-in agent（零配置，安装即用）
- 自动检测 20+ CLI agent：Claude Code、Codex、Qwen Code、Goose AI、OpenClaw、Augment Code、CodeBuddy、Kimi CLI、OpenCode、Factory Droid、GitHub Copilot、Qoder CLI、Mistral Vibe、Nanobot、Aion CLI (aionrs)、Snow CLI、Kiro、Hermes Agent、Cursor Agent 等
- Team Mode：Leader agent 分解任务 → Teammate agents 并行执行 → shared task board
- ACP 2.0 协议层统一 agent 通信

**办公层**：
- PPT Assistant：生成带 Morph 动画的可编辑 `.pptx`
- Word Assistant：生成论文/报告 `.docx`
- Excel Assistant：数据分析与图表 `.xlsx/.xlsm/.csv`
- Preview Panel：直接在应用内预览 10+ 格式（doc/xls/ppt/md/html/diff 等）

**自动化层**：
- Cron 定时任务：cron 表达式 / 每 N 分钟 / 一次性
- 执行策略：续写已有对话 或 每次新对话
- 智能文件管理：AI 批量重命名、自动分类、重复清理

**接入层**：
- 25+ LLM 平台（Gemini、OpenAI、Anthropic、AWS Bedrock、Ollama、国内 Dashscope/智谱/Moonshot 等）
- NewAPI 统一网关，支持多 API key 轮转
- WebUI 远程访问（浏览器，手机可用）
- Telegram / Lark / DingTalk / WeChat / WeCom 集成

## 运行环境与资源占用

| 场景 | CPU | 内存 | 存储 | 说明 |
|------|-----|------|------|------|
| 最小（desktop） | 4 核 | 8GB | 2GB | 仅 built-in agent，不做多 agent 并行 |
| 推荐（desktop） | 8 核 | 16GB | 5GB | 多 agent + office + WebUI |
| 服务器模式 | 4 核 | 4GB | 2GB | Rust 后端独立部署，无 Electron overhead |
| v2.0 后端 | 2 核 | 1GB | 500MB | Rust 单文件服务 (aionui-backend)，树莓派可用 |

- **运行时**：Electron (desktop) / Node.js (server mode) / Rust binary (v2.0 backend)
- **操作系统**：macOS / Windows / Linux，均提供二进制安装包 (.dmg, .exe, .deb)
- **Docker**：未官方提供，但有 2,287 fork 中存在社区 Docker 方案
- **GPU**：不需要
- **外部依赖**：Bun（开发时），Node.js 22+（开发时）；用户侧只需安装二进制

## 上手体验

评分 4/5。

Built-in agent 确实做到了「安装即用」——下载 dmg/exe/deb，启动，Google 登录或用 API key，立即可以对话。但其他价值的兑现需要配置：LLM 平台选择、MCP server 配置、chat platform bot token、cron 任务编写……这些都有文档引导，但不是「零配置」。

多 agent 的自动检测是个亮点——如果你的机器上已经装了 Claude Code 或 Codex，启动后自动出现在 agent 列表中，无需任何手动配置 [GH]。

远程访问的配置相对复杂：需要设置密码、配置 WebUI 端口、如果要从公网访问还需要端口转发或反向代理。Wiki 中有「Remote Internet Access Guide」专门覆盖这一流程，但步骤不少。

## 代码质量

评分 4/5。

几个正面信号 [GH]：

- **AGENTS.md** 非常详细：代码规范、架构说明、测试要求、PR 流程、skills index 一应俱全
- **三进程架构**（main / renderer / worker）定义清晰，IPC bridge 通信路径明确
- **测试体系完整**：vitest 单元测试 + contract test + integration test + e2e (Playwright) + i18n 专项测试
- **CI/CD 成熟**：prek 预检工具、oxlint + oxfmt、PR automation bot（自动 review → fix → merge）
- **代码规范严格**：TypeScript 禁用 `any`、路径别名 `@/*`、CSS Modules、组件 PascalCase、原子 PR 要求

不给出 5 分的原因是：(1) ≥80% 的覆盖率目标是声明而非已验证事实；(2) v2.0.0 架构大改（Rust 后端拆分）意味着大量代码正在重写，当前 codebase 处于过渡期；(3) 没有独立的 security audit。

## 可扩展性

评分 4/5。

三层 skill/扩展体系 [GH]：

1. **Built-in skills**：随应用发布（pptx, docx, pdf, xlsx, mermaid 等）
2. **Custom skills**：用户在 `skills/` 目录自定义，支持按 assistant 启用/禁用
3. **Extension SDK**：加载外部扩展，但目前文档浅

其他扩展点：
- **Custom agent**：通过 ACP 2.0 协议接入任意 agent
- **Custom platform**：任何 OpenAI-compatible 的 API 端点均可配置 [Wiki: LLM Configuration]
- **MCP integration**：配置一次，所有 agent 自动同步 MCP tools
- **v2.0 REST + WebSocket API**：后端暴露 `/api/*` 和 `/ws`，可编程调用

差距在于 Extension SDK 文档尚浅（Contributing guide 中无详细说明），以及目前没有类似 VS Code 扩展市场的分发渠道。4 分代表「有插件机制且设计良好，但生态尚未形成」。

## 文档质量

评分 4/5。

文档覆盖了主要功能路径 [Docs][Wiki]：

- **架构文档**：`docs/architecture/overview.md` 覆盖进程模型、IPC 通信、运行模式、Cron 系统
- **开发指南**：`docs/contributing/development.md` 有完整的 scripts 参考表和 multi-instance 说明
- **LLM 配置**：Wiki 中有详细的多平台配置指南，含 base URL 列表和 API key rotation
- **用例概览**：Wiki 有 Use Cases 页面，但标注为 "Available" 的只有 File Management，其余五个全部 "Coming Soon"

缺失项与 4 分的边界吻合：
- Use Cases 大面积空白（Coming Soon 占 5/6）
- LLM FAQ 只有标题没有答案
- Extension SDK 缺少开发文档
- 没有安全加固指南

## 社区与成熟度

| 维度 | 评分 | 说明 |
|------|------|------|
| 社区活跃度 | 4/5 | 25k stars（9 个月），2,287 forks，Discussions 活跃，PR 有自动化 bot 响应，每个 release 有多个贡献者。505 open issues 偏高但说明用户参与度高 |
| 成熟度 | 3/5 | 2025 年 8 月创建，仅 9 个月历史。已发布 25+ 版本，迭代极快。v2.0.0 标 Preview 且有重大架构变更（Rust 后端拆分），API/配置格式不稳定 |

社区贡献者分布：@piorpua（核心，几乎每次 release）、@IceyLiu、@TCP404、@kaizhou-lab、@JerryLiu369 等为核心贡献者，整体呈现「一个 lead + 稳定 committer 群」的结构。Bus factor 风险存在，但对一个新项目来说属正常。

## 安全与风险

评分 3/5。

已有的安全措施 [GH]：
- JWT 认证（WebUI / server 模式）
- 密码保护 + QR code 登录（远程访问）
- 多实例隔离（`AIONUI_MULTI_INSTANCE` 使用独立的 user data 目录）
- API key 本地存储（标准桌面应用做法）

风险点：
- WebUI 模式下 REST + WebSocket 端点暴露，默认无 HTTPS（需反向代理）
- Server 模式失去 Electron 的 10 个 sandbox bridge（fs/dialog/shell 等），攻击面变化未充分文档化
- 无安全审计记录
- API key 多轮转时黑名单机制的细节未公开
- Cron 系统可执行任意命令——等于给 agent 用户的文件系统权限

3 分代表「有基本安全措施，正常使用风险可控，但生产环境部署需要自行加固」。这比 OpenClaw/Hermes 的 2 分（ALLOW-ALL 默认无权限模型）要好一些，但远不到安全完善的水平。

## 学习价值

**高**。即使不部署，AionUi 的以下设计值得学习：

- **ACP 2.0 协议**：一个统一 20+ agent 通信的抽象层，设计思路清晰
- **多进程 Electron 架构**：main/renderer/worker 三层分离 + IPC bridge 的工程实践
- **PR automation bot**：label-driven state machine 实现自动化 review → fix → merge 流程
- **Rust 后端拆分策略**：从 Electron monolith 到独立 Rust 服务的迁移路径（v1.9 → v2.0 Preview）
- **三模式运行**：Desktop / WebUI (Electron no-window) / Server (pure Node.js)，同一代码库支撑不同部署形态
