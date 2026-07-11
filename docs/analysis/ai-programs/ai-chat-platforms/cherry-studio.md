---


title: "Cherry Studio"
created: 2026-05-14
updated: 2026-07-11
type: repository-analysis
repo_url: https://github.com/CherryHQ/cherry-studio
category: "ai-programs/ai-chat-platforms"
tags:
  - ai-chat
  - desktop
  - electron
  - multi-provider
  - llm-client
  - rag
primary_language: TypeScript
license: AGPL-3.0
stars: 48423
forks: 4598
last_checked: 2026-07-11
last_verified: 2026-07-11
evidence: "code review + docs + community reports + issue analysis"
archived_reason: ""
successor: ""
docker_support: false
gpu_required: false
estimated_cpu: "2-4 cores"
estimated_memory: "1-4GB"
estimated_storage: "1-5GB"
status: active
ratings:
  capability: 4
  usability: 4
  performance: 2
  code_quality: 3
  documentation: 4
  community: 5
  maturity: 3
  extensibility: 3
  security: 2
  recommendation: 4
overall_score: 3.4
sources:
  - "[GH:refresh-2026-07-11] GitHub REST/GraphQL snapshot for CherryHQ/cherry-studio on 2026-07-11: canonical repository exists and is not archived/disabled; default_branch=main, pushed_at=2026-07-11T02:56:20Z, language=TypeScript, license=AGPL-3.0, stars=48423, forks=4598, open issues=937, open PRs=293, discussions=723, releases=263."
  - "[GH:releases-2026-07-11] GitHub Releases checked 2026-07-11: latest v1 release v1.9.12 published 2026-07-05; notes are mainly provider/model compatibility and agent/tool fixes. Current CONTRIBUTING.md says the v2 refactor has merged into main, where v1/v2 coexist with large, frequent and breaking changes; v1 is maintained on the v1 branch."
  - "[GH:advisories-2026-07-11] GitHub repository security-advisories endpoint returned four published critical advisories on 2026-07-11: GHSA-hh6w-rmjc-26f6 (custom-protocol command execution, patched 1.6.4), GHSA-gjp6-9cvg-8w93 and GHSA-8xr5-732g-84px (malicious MCP OAuth/server command injection, patched 1.5.2), and GHSA-p6vw-w3p8-4g72 (one-click custom-URL RCE, patched 1.5.1). These are historical fixed-version records, not evidence that v1.9.12 is currently vulnerable."
  - "[Docs:refresh-2026-07-11] https://docs.cherry-ai.com/ extracted 2026-07-11: current docs describe multi-model chat, Cherry Agent with file/command/multistep actions, Skills, MCP, IM channels, scheduled tasks, knowledge base, translation, image generation and backups."
  - "[GH] https://github.com/CherryHQ/cherry-studio"
  - "[Docs] https://docs.cherry-ai.com"
  - "[GH API] https://api.github.com/repos/CherryHQ/cherry-studio"
  - "[PulseMCP] https://www.pulsemcp.com/clients/cherryhq-cherry-studio"
  - "[GH: #12304] GitHub issue CherryHQ/cherry-studio#12304, idle CPU/performance report: https://github.com/CherryHQ/cherry-studio/issues/12304"
  - "[GH: #14276] GitHub issue CherryHQ/cherry-studio#14276, memory growth/leak report: https://github.com/CherryHQ/cherry-studio/issues/14276"
  - "[GH: #14624] GitHub issue CherryHQ/cherry-studio#14624, multi-agent IPC/UI blocking report: https://github.com/CherryHQ/cherry-studio/issues/14624"
  - "[GH: #14276, #14624] Combined issue references for memory growth and IPC/UI blocking: https://github.com/CherryHQ/cherry-studio/issues/14276 and https://github.com/CherryHQ/cherry-studio/issues/14624"
  - "[GH: #15051] GitHub issue CherryHQ/cherry-studio#15051, CherryClaw custom-model selection problem: https://github.com/CherryHQ/cherry-studio/issues/15051"
  - "[GH: #15055] GitHub issue CherryHQ/cherry-studio#15055, macOS/V8 SIGTRAP crash report: https://github.com/CherryHQ/cherry-studio/issues/15055"
  - "[GH: #15058] GitHub issue CherryHQ/cherry-studio#15058, CherryClaw wrong-model/random-request report: https://github.com/CherryHQ/cherry-studio/issues/15058"
  - "[GH: #15051, #15058] Combined issue references for CherryClaw custom-model and wrong-model reports: https://github.com/CherryHQ/cherry-studio/issues/15051 and https://github.com/CherryHQ/cherry-studio/issues/15058"
  - "[GH: #15071] GitHub issue CherryHQ/cherry-studio#15071, CherryClaw agent routing bug report: https://github.com/CherryHQ/cherry-studio/issues/15071"
  - "[GH: CLAUDE.md] Local shallow clone checked CLAUDE.md for Electron/Node/runtime and CI/development notes during original audit."
  - "[GH: CONTRIBUTING.md] Local shallow clone checked CONTRIBUTING.md for main-branch freeze / v2 hotfix and contribution-policy notes during original audit."

---

# Cherry Studio

> 全能桌面端 AI 聊天平台——多模型聚合、知识库、AI 绘画、翻译、Agent 功能一站集成。
>
> **状态**: `active` · **总分**: 3.4/5 · **推荐度**: 4/5

## 一句话总结

Cherry Studio 是一个**跨平台桌面 AI 聊天客户端**，聚合 300+ LLM 模型与多种 AI 服务，面向「想要一个统一 AI 入口」的普通用户和轻度开发者。定位：**AI 聚合聊天平台**，不是 agent 框架——其 CherryClaw Agent 是附加功能而非核心身份。

---

## 总体评价

Cherry Studio 是 2024–2026 年中国开源 AI 工具中增长最快的桌面应用之一；2026-07-11 快照为 48.4k stars、263 releases、937 open issues 与 293 open PRs [GH:refresh-2026-07-11]。它成功地将「多模型聊天」做成桌面端一站式体验，但快速增长伴随工程债：性能/内存报告、agent 功能仍在修补，以及已并入 `main`、让 v1/v2 共存并明确允许频繁 breaking changes 的 v2 重构 [GH:releases-2026-07-11]。

**适合**：需要一个桌面端统一 AI 聊天入口的普通用户、想对比多个 LLM 输出的研究者、用本地模型（Ollama/LM Studio）的隐私敏感用户。

**不适合**：需要可靠的自主 agent 能力的人（CherryClaw 太新且 buggy）、想深度定制插件系统的人（plugins 在 roadmap 上但未交付）、企业合规环境（AGPL-3.0）。

> 一句话：作为 AI 聊天客户端，它是目前桌面端最全面的选择之一；作为 agent 平台，它还没到可以认真对待的阶段。

## 推荐度：4/5

**定位**：需要一个**桌面端统一入口**来使用多种 LLM 和 AI 服务的普通用户或轻度开发者。如果你的核心需求是「在一个应用里跟 GPT、Claude、Gemini 同时聊天，偶尔查知识库、画个图」，Cherry Studio 是目前最好的免费选择。

**作为聊天客户端很强，作为 agent 平台还早**：
- 核心价值——多模型聚合聊天 + 知识库 RAG + 翻译 + AI 绘画——已经成熟可用，体验流畅
- CherryClaw Agent（v1.9.1 引入）名义上支持自主代理、定时任务、Telegram 集成，但实际使用中问题明显：无法选择自定义模型 [GH: #15051]、随机请求错误模型 [GH: #15058]、agent 路由 bug [GH: #15071]
- Skills 系统同步引入，但目前远不如 OpenClaw 的技能市场成熟——没有社区生态，没有版本管理

**实际使用的三大痛点**：
1. **Electron 内存问题**：长时间使用后内存占用逐渐升高且不释放 [GH: #14276]，空闲时 CPU 异常飙升 [GH: #12304]
2. **Agent 功能不可靠**：v1.9.1 引入的 CherryClaw Agent 仍处于早期阶段，多个核心 workflow（模型选择、路由、cron）有已知 bug
3. **v2 重构期的稳定性风险**：v2 已并入 `main`，当前贡献指南明确说 v1/v2 共存且会有 large/frequent/breaking changes；已发布 v1 则留在 `v1` 分支维护 [GH:releases-2026-07-11]

**结论**：作为聊天客户端强烈推荐；如果你是因为「agent」关键词被吸引来的，建议等 v2 稳定后再评估——或者直接找专门做 agent 的工具。

## 优势

1. **模型覆盖面极广**：OpenAI、Anthropic、Gemini、DeepSeek 等云端模型 + Ollama/LM Studio 本地模型，300+ 预配置助手 [Docs]
2. **零门槛上手**：下载安装 → 填 API key → 开始对话，非技术用户可独立完成
3. **知识库 RAG 实用**：支持 PDF、DOCX、PPTX、URL、站点地图导入，本地嵌入 + 检索测试 [Docs]
4. **跨平台 + 活跃社区**：Win/Mac/Linux 全覆盖，中文社区（QQ、微信、小红书、B站）+ 国际社区（Telegram、Discord）并行
5. **开箱即用的集成功能**：AI 绘画、翻译、全局搜索、WebDAV 备份——不需要额外配置
6. **MCP 支持**：可接入 MCP 工具扩展，Cherry Studio 作为 MCP client 已在 PulseMCP 收录 [PulseMCP]

## 劣势

1. **内存泄漏和性能问题**：Electron 框架叠加快速迭代，内存逐渐升高、IPC 阻塞 UI 线程 [GH: #14276, #14624]
2. **Agent 功能不成熟**：CherryClaw Agent 名义上对标 OpenClaw 式能力，实际处于 alpha 质量——核心 workflow 有多个未解决 bug
3. **AGPL-3.0 许可证**：强 copyleft，网络使用即触发开源义务，商用需谨慎
4. **937 个 open issue + 293 个 open PR**：积压仍然严重，不能用 release 频率替代稳定性判断 [GH:refresh-2026-07-11]
5. **纯桌面应用，无服务端部署**：无 Web/CLI 版本，无法在无 GUI 的服务器上使用——适合个人桌面，不适合团队共享
6. **v2 重构不确定性**：main 已进入 v1/v2 共存的 breaking-change 过渡期，v1 维护线与 main 需要分别 forward-port fixes [GH:releases-2026-07-11]

---

## 适合什么场景

- 日常使用多个 LLM 提供商，想在一个应用里切换而不装多个客户端
- 需要本地知识库（RAG）辅助日常研究或写作
- 使用本地模型（Ollama/LM Studio），需要一个美观的 GUI 前端
- 对比不同模型的输出质量——一问多答功能天然适合
- 想做 AI 工具入门体验的小白用户

## 不适合什么场景

- **需要可靠的自主 agent**：CherryClaw Agent 不可靠，请用 OpenClaw 或专门 agent 框架
- **服务器/无头环境**：纯桌面端应用，无 Docker/Web 部署
- **需要深度插件定制**：目前仅有 MCP 扩展和 skills 系统，完整插件系统在 roadmap 上
- **企业合规/闭源商用**：AGPL-3.0 + 内存安全问题不适合企业大规模部署

## 与类似项目对比

| 项目 | 定位 | 相对本项目 |
|------|------|-------------------|
| LobeChat | Web 端多模型聊天平台 | Web 部署，有插件市场，更开发者友好；Cherry Studio 桌面原生体验更好 |
| Open WebUI | 自托管 Web LLM 前端 | Docker 部署，企业级功能更全；Cherry Studio 上手更简单 |
| ChatBox | 轻量桌面 AI 聊天客户端 | 更轻量、资源占用更低；Cherry Studio 功能多得多 |
| AnythingLLM | 桌面 RAG + 聊天 | RAG 能力更强；Cherry Studio 多模型聚合和特色功能更丰富 |
| OpenClaw | 自托管自主 agent 框架 | 定位完全不同——OpenClaw 做任务执行，Cherry Studio 做聊天交互 |

---

## 它能做什么

- **多模型聚合聊天**：OpenAI、Anthropic、Gemini、DeepSeek、通义千问等云端模型 + Ollama/LM Studio 本地模型统一管理，支持同一问题多模型同时回答对比 [Docs]
- **知识库 RAG**：支持 PDF、DOCX、PPTX、XLSX、TXT、MD、URL、站点地图导入；本地嵌入处理 + 检索测试；知识库可导出分享 [Docs]
- **AI 绘画**：内置绘画面板，自然语言生成图像 [Docs]
- **翻译**：专用翻译面板、对话翻译、划词翻译 [Docs]
- **300+ 预配置助手**：覆盖翻译、编程、写作等垂类，支持自定义创建 [GH]
- **AI 小程序**：集成多种免费 Web 端 AI 工具
- **文件管理**：对话、绘画、知识库文件统一分类管理 + WebDAV 云备份 [Docs]
- **CherryClaw Agent**（v1.9.1）：自主代理 + 技能系统 + cron 任务 + Telegram 通道——但当前质量不稳定 [GH: #15051, #15058]
- **MCP 支持**：可作为 MCP client 接入外部工具
- **全局搜索**：跨对话历史和知识库检索

## 运行环境与资源占用

| 场景 | CPU | 内存 | 存储 | 说明 |
|------|-----|------|------|------|
| 基础聊天 | 2 核 | 1-2GB | 500MB | 单一模型对话 |
| 多模型 + 知识库 | 2-4 核 | 2-4GB | 2-5GB | 多 provider + RAG 索引 |

- **运行时**：Electron 37.x + Node.js ≥22 [GH: CLAUDE.md]
- **操作系统**：Windows / macOS (Intel + Apple Silicon) / Linux (AppImage, deb, AUR)
- **Docker**：不支持——纯桌面应用
- **GPU**：不需要（本地模型推理由 Ollama/LM Studio 处理，Cherry Studio 本身不推理）
- **外部依赖**：LLM API key（云端模型）或本地推理服务（Ollama/LM Studio）
- **⚠️ 已知性能问题**：长时间使用内存泄漏 [GH: #14276]、空闲 CPU 飙升 [GH: #12304]、多 Agent 并发时 IPC 阻塞 UI [GH: #14624]、macOS 上 V8 SIGTRAP 崩溃 [GH: #15055]

## 上手体验

评分 4/5。

- **安装**：官网下载安装包，支持 Win/Mac/Linux 三大平台。AppImage、deb、AUR、Homebrew 多分发渠道
- **首次使用**：打开 → 设置 → 填入 API key → 选择模型 → 开始对话。整个流程 < 5 分钟
- **高级功能**：知识库配置需理解 embedding 概念，但文档引导清晰；CherryClaw Agent 配置复杂且文档不足
- **中文体验**：UI 中文完善，文档以中文为主，英文翻译完整度 4,016 个 key [GH]

扣分项：CherryClaw Agent 上手曲线陡峭——配置 cron、Telegram 集成需要理解 agent 概念和 YAML 配置，文档覆盖不足。

## 代码质量

评分 3/5。

**正面信号**：
- TypeScript monorepo，Electron + React 架构清晰，主进程/渲染进程/preload 分离 [GH: CLAUDE.md]
- CI 规范：`pnpm lint`（oxlint + eslint + typecheck）+ `pnpm test`（Vitest 单测 + Playwright e2e）[GH: CLAUDE.md]
- 代码规范明确：统一 `loggerService` 日志、禁止 `console.log`、Conventional Commits、强制 signoff
- 有专门开发的 `@cherrystudio/ai-core` 包做 AI SDK 中间层抽象

**负面信号**：
- 937 个 open issue、293 个 open PR——维护压力和 bug surface 仍高 [GH:refresh-2026-07-11]
- v2 已并入 main、与 v1 共存且贡献指南明确预告 breaking changes——架构迁移风险仍在 [GH:releases-2026-07-11]
- CherryClaw Agent（v1.9.1）发布即带多 bug——模型选择、路由等基础 workflow 有问题
- 发布节奏极快（复核时 263 releases）——质量优先于速度的证据不足 [GH:refresh-2026-07-11]

## 可扩展性

评分 3/5。

- **MCP 支持**：可作为 MCP client 接入外部工具，是当前主要扩展方式
- **自定义服务商**：支持符合 OpenAI/Gemini/Anthropic 规范的第三方 API 接入 [Docs]
- **Skills 系统**（v1.9.1）：允许定义可复用的 AI 能力模板——但社区生态空白，无市场机制
- **自定义 CSS + 头像 + 侧边栏**：UI 层面的定制空间较大
- **插件系统**：在 roadmap 上但未交付
- **缺少稳定 API**：无面向外部程序的 HTTP API 或 CLI 接口

深度定制需 fork——当前扩展点足够满足「配置型」需求，但满足不了「开发型」需求。

## 文档质量

评分 4/5。

- **docs.cherry-ai.com**：结构清晰，按功能模块组织——对话、知识库、绘画、翻译、Agent、开发指南
- **内容覆盖**：覆盖所有主要功能的使用说明，有截图和分步指引
- **多语言**：目标用户以中文为主，UI 和文档以中文为第一语言；英文翻译覆盖 4,016 个 key——对非中文用户是本地化限制而非质量缺陷
- **开发文档**：CLAUDE.md 提供完整的架构概览、命令参考、开发工作流 [GH]
- **常见问题**：有 FAQ 和故障排查手册

扣分项：
- CherryClaw Agent 和 Skills 系统的文档显著薄弱——这些是 v1.9.1 才引入的新功能
- GitHub releases 页面渲染异常，release notes 经常加载失败

## 社区与成熟度

| 维度 | 评分 | 说明 |
|------|------|------|
| 社区活跃度 | 5/5 | 48.4k stars、4.6k forks、723 discussions，中文与国际社区双轨并行；这些是可见度/参与信号，不是质量证明 [GH:refresh-2026-07-11] |
| 成熟度 | 3/5 | 263 releases，但 v2 已并入 main、v1/v2 共存且预告频繁 breaking changes；仍是「快速迭代但尚未稳定」 [GH:refresh-2026-07-11][GH:releases-2026-07-11] |

社区规模属于顶流，但成熟度滞后——这是中国开源项目的常见模式：社区驱动的高速增长带来了功能广度，但工程深度需要时间沉淀。v2 重构是团队承认并解决这个问题的积极信号。

## 安全与风险

评分 2/5。

- **API key 管理**：本地存储，无云端传输——符合桌面应用标准实践
- **本地数据**：支持全本地场景（本地模型 + 本地知识库），数据不出设备
- **AGPL-3.0 许可证**：强 copyleft。个人使用无影响；商用或闭源派生需注意合规 [GH]
- **CherryClaw Agent 风险**：agent 可执行 shell 命令、调用 MCP 工具——如果 agent 配置失当，存在与任何自主 agent 相同的误操作风险
- **Electron 安全**：使用了 preload + contextBridge 做 IPC 隔离——符合 Electron 安全最佳实践
- **历史安全公告**：2026-07-11 查询到四条 published critical GHSA，均涉及 custom URL/MCP 路径导致命令执行或 RCE，并分别列出 1.5.1、1.5.2、1.6.4 patched versions [GH:advisories-2026-07-11]

安全评分降为 2/5：这些公告是历史已修记录，不能据此断言 v1.9.12 仍有同一漏洞；但 Electron custom protocol、MCP、shell/tool 执行组合已经实际产生过 critical RCE，生产使用必须保持更新并限制不可信 MCP/链接。AGPL-3.0 是另一个独立的合规边界 [GH:advisories-2026-07-11]。

## 学习价值

**中高**——推荐关注以下几点：

- **AI 聊天客户端的架构设计**：Electron 主进程/渲染进程分离 + AI SDK 中间层抽象（`@cherrystudio/ai-core`）有参考价值
- **多模型聚合的设计模式**：如何在统一 UI 层抽象不同 provider 的 API 差异
- **知识库 RAG 的本地实现**：嵌入、分段、检索的一体化方案
- **开源项目的「社区驱动 + 商业版」双轨模式**：社区版 AGPL-3.0 + 企业版私有化部署的变现策略

不适合作为 Electron 或 TypeScript 工程范本学习——工程债和 issue 积压表明这不是「怎么写好代码」的教材。
