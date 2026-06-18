---


title: "Kirara AI"
created: 2026-05-19
updated: 2026-05-21
type: repository-analysis
repo_url: "https://github.com/lss233/kirara-ai"
category: "ai-programs/assistant-agents"
tags: ["ai-chatbot", "im-bot", "workflow", "plugin-system", "multimodal", "python"]
previous_repo: "https://github.com/lss233/chatgpt-mirai-qq-bot"
successor: ""
primary_language: "Python"
license: "AGPL-3.0 / AGPL-3.0-only（GitHub API 与 pyproject 表述略有差异）"
stars: 18760
forks: 1842
last_checked: 2026-05-19
last_verified: 2026-05-19
evidence: "GitHub API + README/docs extraction + local shallow clone scan; no production deployment test"
archived_reason: ""
docker_support: true
gpu_required: false
estimated_cpu: "1-2 cores"
estimated_memory: "1-3GB baseline; more for WebUI, image/voice workflows and plugin use"
estimated_storage: "1-5GB+ depending on logs, media, plugins and container image"
status: active
ratings:
  capability: 4
  usability: 3
  performance: 4
  code_quality: 4
  documentation: 3
  community: 3
  maturity: 2
  extensibility: 4
  security: 3
  recommendation: 3
overall_score: 3.3
sources:
  - "[GH] https://github.com/lss233/kirara-ai"
  - "[GH:api] GitHub API snapshot 2026-05-19: stars=18760, forks=1842, open_issues=1, open_prs=2, contributors=40, latest_release=v3.3.0a2 prerelease=true, latest_stable_release=v3.2.0, latest_commit=8295a5deda0b289a3f70d946064b6c9a3e1b0753, pushed_at=2025-06-28T19:24:48Z"
  - "[GH:local-scan] Local shallow clone 2026-05-19 at 8295a5deda0b289a3f70d946064b6c9a3e1b0753; files=345, dependencies=35, test_files=70, workflows=7; found Dockerfile; did not find root SECURITY.md/CONTRIBUTING.md/CODE_OF_CONDUCT.md/CHANGELOG.md"
  - "[GH:community] GitHub community profile API 2026-05-19: health_percentage=57, license=AGPL-3.0, readme/license present, contributing/code_of_conduct/issue_template/pull_request_template absent"
  - "[GH:advisories] GitHub security advisories API 2026-05-19: 0 repository advisories returned"
  - "[Docs] https://kirara-docs.app.lss233.com/"
---

# Kirara AI

> 可 DIY 的多模态 AI 聊天机器人与 Agent framework，支持微信、QQ、Telegram 等聊天平台，包含 WebUI、工作流、插件市场、HTTP API、预设、语音与绘图能力。
>
> **状态**: `active` · **总分**: 3.3/5 · **推荐度**: 3/5

## 一句话总结

Kirara AI 适合想要一个可 DIY、多模态、带工作流和插件机制的聊天机器人框架，但能接受 v3 alpha/快速重构状态的个人开发者与 bot 爱好者。

## 总体评价

Kirara AI 的定位很清楚：它不是只封装一个模型 API 的轻量 bot，而是一个面向主流聊天平台的可 DIY 多模态 AI 机器人。README 明确列出微信、QQ、Telegram、OneBot 等平台接入，支持 DeepSeek、Grok、Claude、Ollama、Gemini、OpenAI 等模型方向，并提供工作流系统、网页搜索、AI 画图、人设调教、虚拟女仆、语音对话、插件市场和 WebUI [GH]。本地代码结构也显示它有 `im`、`llm`、`workflow`、`plugin_manager`、`memory`、`mcp_module`、`web`、`tracing` 等模块 [GH:local-scan]。

与 AstrBot 相比，Kirara AI 更像“DIY bot framework + WebUI + workflow engine”的组合：体量较小，依赖更少，issue backlog 很低，测试与 CI 信号不错；但文档、治理文件、社区规模和稳定性都弱一些。API 快照显示最新 release 为 `v3.3.0a2` prerelease，且当前主线 release 仍呈现 alpha/重构与多模态能力迭代信号，说明 v3 线仍处快速演进阶段 [GH:api]。

结论：Kirara AI 值得作为中文 AI bot framework 观察和试用，但推荐度应保守。若目标是个人 bot、群聊玩具、工作流实验或插件开发，它很合适；若目标是稳定生产系统，需要等 v3 线稳定、文档和治理流程更成熟，或先做小范围验证。

## 推荐度：3/5

推荐给愿意折腾、希望掌控 bot 行为、喜欢工作流/插件 DIY 的开发者。它的能力面达到 4/5，代码与测试信号也不差；但 v3.3.0a2 仍是 prerelease，root-level CONTRIBUTING/SECURITY/CODE_OF_CONDUCT/CHANGELOG 缺失，官方文档抓取不稳定且 README 把大量搭建细节外链到 docs [GH][Docs][GH:local-scan]。因此它不是“强烈推荐直接上生产”的项目，而是“可以认真评估和试用”的项目。

## 优势

1. **功能覆盖较完整**：多聊天平台、多模型、多模态、工作流、WebUI、插件市场、HTTP API、预设和 TTS 等能力都在 README 中有明确入口 [GH]。
2. **代码体量相对可读**：本地扫描显示 345 个 tracked files、35 项 pyproject dependencies、70 个测试相关文件；相比更大型平台，研究和二次开发负担更小 [GH:local-scan]。
3. **工作流与插件导向鲜明**：包结构包含 workflow、plugin_manager、mcp_module、memory、tracing 等模块，适合研究 bot framework 如何组织可扩展能力 [GH:local-scan]。
4. **issue backlog 低**：API 快照显示 open issues=1、open PRs=2，至少从 GitHub 队列看没有明显积压 [GH:api]。
5. **部署形态具备 Docker/PyPI/WebUI 基础**：README 显示 PyPI、Docker、Codecov、Mypy badge；本地也有 Dockerfile 和 CI workflows [GH][GH:local-scan]。

## 劣势

1. **成熟度偏低**：最新 release 是 `v3.3.0a2` prerelease，近版本多次 alpha/重构信号明显 [GH:api]。
2. **治理文件不足**：本地扫描未发现 root-level SECURITY.md、CONTRIBUTING.md、CODE_OF_CONDUCT.md、CHANGELOG.md；GitHub community profile 也显示相关文件缺失 [GH:local-scan][GH:community]。
3. **文档完整性一般**：README 把快速开始指向外部 docs；本次直接抓取 docs 首页失败，虽然 GitHub README 抽取到了大量功能说明，但信息结构不如成熟项目稳定 [GH][Docs]。
4. **部分平台仍在重构中**：README 的平台能力表中 Discord、飞书机器人多项为“重构中”，说明平台覆盖并非全部成熟 [GH]。
5. **AGPL 合规与 bot 安全仍需自管**：项目为 AGPL；聊天平台 token、LLM key、HTTP API、插件和 WebUI 都需要部署者自己处理权限与暴露面 [GH]。

---

## 适合什么场景

- 个人或小团队想 DIY 一个多模态聊天机器人，接入 Telegram、QQ、微信/企业微信、公众号或 OneBot。
- 希望用 WebUI 配置模型、插件和工作流，而不是完全手写 bot 逻辑。
- 研究中文 bot framework 的 workflow、plugin、memory、MCP、tracing 等模块设计。
- 社群娱乐、角色扮演、语音/绘图、轻量自动化、HTTP API 接入实验。
- 能接受 alpha 版本、阅读源码和参与问题排查的开发者。

## 不适合什么场景

- 要求稳定 LTS、严格 API 兼容、企业 SLA 的生产系统。
- 完全不懂 Docker/Python/token 配置，却希望“点一下就长期稳定运行”的用户。
- 需要 Discord/飞书等所有平台能力完全成熟的部署场景；README 显示部分平台仍在重构中 [GH]。
- 对 AGPL 网络服务合规没有准备的闭源商业场景。
- 对安全报告流程、插件权限、HTTP API 鉴权有严格审计要求但不愿自行补足治理流程的场景。

## 与类似项目对比

| 项目 | 定位 | 相对本项目 |
|------|------|-----------|
| Kirara AI | DIY 多模态聊天机器人 / Agent framework | 体量中等，强调工作流、插件、WebUI、预设和多平台聊天接入 |
| AstrBot | 一站式 Agentic IM assistant/runtime | AstrBot 更平台化、社区可见度更高、文档更完整；Kirara AI 更轻，更适合读源码和 DIY |
| LangBot | 多平台 AI ChatBot | 同属中文 AI bot 生态；此处只做定位级对比，未按同一 10 维度深审 |
| Koishi + ChatLuna | 通用 bot framework + LLM 插件 | Koishi 生态更通用；Kirara AI 更聚焦 AI 聊天机器人与内置工作流 |
| NoneBot 生态 | Python bot framework | NoneBot 更底层、更通用；Kirara AI 提供更面向最终用户的 WebUI/工作流/AI 能力组合 |

上述项目只做定位级对比，未按同一 10 维度框架深审。

---

## 它能做什么

Kirara AI 的 capability 评分为 4/5。README 中可确认的能力包括 [GH]：

- 聊天平台：Telegram、QQ 机器人、企业微信应用、微信公众号、OneBot 等；Discord、飞书机器人处于重构中。
- 模型接入：README 描述支持 DeepSeek、Grok、Claude、Ollama、Gemini、OpenAI 等。
- 多模态：绘图、语音回复/语音对话、图片发送等。
- WebUI：模型管理、工作流、插件市场。
- 插件机制：README 标注支持插件机制，项目关联 Kirara Registry 插件市场。
- 自定义工作流：README 标注支持自定义工作流，代码包中有 workflow 模块 [GH:local-scan]。
- HTTP API：README 展开了 `/v1/chat`、`/v2/chat`、`/v2/chat/response` 等接口说明 [GH]。
- 预设系统与角色调教：README 展示猫娘/正常等预设方向 [GH]。

扣到 4 而非 5，是因为平台能力表中仍有“重构中”项，且与 AstrBot 这类更平台化项目相比，其 agent runtime、插件生态、知识库/沙箱等能力的公开材料弱一些。

## 运行环境与资源占用

| 场景 | CPU | 内存 | 存储 | 说明 |
|------|-----|------|------|------|
| 最小 | 1 core | 1GB 左右 | 1GB+ | 单平台、少插件、外部 LLM provider；未做实测 benchmark，仅为依赖面估计 |
| 推荐 | 2 cores | 2-3GB+ | 2-5GB+ | WebUI、插件、媒体处理、语音/绘图、Docker image 与日志会增加资源需求 |

- **运行时**：Python 项目；pyproject 要求 Python >=3.10，当前版本 3.3.0a2 [GH:local-scan]。
- **操作系统**：跨平台 Python；Dockerfile 使用 python:3.11-slim-bullseye 并安装 wkhtmltopdf、ffmpeg、libmagic 等系统依赖 [GH:local-scan]。
- **Docker**：仓库提供 Dockerfile，README 有 Docker badge [GH][GH:local-scan]。
- **GPU**：不要求 GPU；绘图/本地模型是否需要 GPU 取决于外部模型或插件。
- **外部依赖**：聊天平台 token、LLM API keys、本地/远程模型服务、Redis/数据库/插件与媒体处理依赖。

performance 评分为 4/5。它比大型一站式平台更轻：本地扫描只有 345 个 tracked files、35 项依赖，核心是 Python 服务加 WebUI/媒体依赖 [GH:local-scan]。没有实测 benchmark，因此评分基于 operational cost 与依赖面；若启用大量插件、语音/绘图和本地模型，资源需求会显著上升。

## 上手体验

评分 3/5。

README 给出了清晰的功能展示、平台能力表、WebUI 截图、HTTP API、预设系统和社区入口 [GH]；但搭建部分主要指向外部快速开始文档，本次 `https://kirara-docs.app.lss233.com/` 直接抓取失败，说明文档可访问性/可抽取性不够稳定 [Docs]。实际部署仍需处理 config.yaml、IM 平台 token、模型供应商配置、Docker/Python 环境和插件启用。

因此它不是“几乎零配置”的 5，也不到“<1 小时稳定获得价值”的 4；对有 Python/Docker 基础的用户可接受，对纯新手仍有学习曲线。

## 代码质量

评分 4/5。

本地扫描给出较好的工程信号：345 个 tracked files、70 个测试相关文件、7 个 GitHub workflow，包含 run-tests、project_check、PR review、Docker latest/tag 等；pyproject 有 pytest、pytest-asyncio、pre-commit，README 展示 Codecov 与 Mypy checked badge [GH][GH:local-scan]。模块划分也较清楚：config、database、events、im、llm、mcp_module、media、memory、plugin_manager、plugins、tracing、web、workflow 等 [GH:local-scan]。

保守点：root-level CONTRIBUTING、SECURITY、CHANGELOG 缺失；v3 线仍在 alpha/重构阶段，长期维护规范不如更成熟平台 [GH:community][GH:api]。但按评分边界，它有测试、有 CI、结构可读，给 4 比 3 更符合证据。

## 可扩展性

评分 4/5。

Kirara AI 明确支持插件机制、自定义工作流、HTTP API、WebUI 配置、预设系统，并在代码结构中保留 plugin_manager、workflow、mcp_module、im adapters、llm adapters 等模块 [GH][GH:local-scan]。这说明扩展性是项目核心设计之一。

未给 5 的原因是：公开材料中插件生态规模、稳定 API/hooks、开发者文档与治理流程不如最成熟平台；部分平台仍在重构，扩展点稳定性需要进一步验证。

## 文档质量

评分 3/5。

README 信息量很大：功能展示、社区入口、平台能力表、HTTP API、预设系统、TTS 说明、相关生态链接都有覆盖 [GH]。但它把快速开始转移到外部 docs，本次 docs 首页抓取失败 [Docs]；GitHub community profile 也显示 contributing、issue template、PR template 等治理文档缺失 [GH:community]。这使文档在“能了解项目”层面不错，但在“系统性指导部署、开发、贡献、排错”层面仍不足。

## 社区与成熟度

| 维度 | 评分 | 说明 |
|------|------|------|
| 社区活跃度 | 3/5 | 18,760 stars、1,842 forks、40 contributors 是强可见度信号；但 GitHub community profile 只有 57%，治理文档缺失，且近期主仓库 pushed_at 停留在 2025-06-28，不能按 5 的“高活跃+快速响应+生态丰富”评分 [GH:api][GH:community] |
| 成熟度 | 2/5 | v3.3.0a2 是 prerelease，v3.0/v3.2/v3.3 多次 alpha/重构信号明显；虽然已有历史版本和稳定 release，但当前主线仍处快速变化阶段 [GH:api] |

需要注意：open issues=1 是好信号，但也可能受到 issue 管理策略影响，不能单独证明生产成熟。maturity 的核心是稳定 API、迁移保证和破坏性变更频率；Kirara AI 目前证据不足以给 3 或 4。

## 安全与风险

评分 3/5。

GitHub security advisories API 返回 0 条 repository advisories [GH:advisories]，这只能说明该渠道未发现公开 advisory，不等于项目经过独立安全审计。主要风险包括：

1. **HTTP API 与 WebUI 暴露面**：README 提供 `/v1/chat`、`/v2/chat` 等接口，部署者需要处理鉴权、反代、访问控制和日志敏感信息 [GH]。
2. **聊天平台 token 与 LLM key**：配置中会包含 IM 平台和模型服务凭据；泄露风险与所有 bot 项目相同。
3. **插件与工作流执行风险**：插件机制、自定义工作流、媒体处理、语音/绘图都可能引入第三方代码与外部服务风险 [GH]。
4. **安全治理文件缺失**：本地扫描未发现 root-level SECURITY.md；GitHub community profile 也未显示安全报告文档 [GH:local-scan][GH:community]。

没有公开严重 advisory，所以不应低于 3；但由于安全流程、权限模型和插件审计证据不足，也不能给 4。

## 学习价值

Kirara AI 的学习价值主要在“中等体量 AI bot framework”这个层面：它不像 AstrBot 那样平台化到复杂，也不是最底层 bot framework。适合研究：

- 聊天平台 adapter 如何抽象；
- LLM adapter、workflow executor、plugin manager、memory、MCP 模块如何组合；
- WebUI 如何服务于模型、插件和工作流配置；
- 一个由旧 ChatGPT bot 生态演化来的项目如何进入多模态和 Agent framework 方向。

对 Develata 而言，它可作为“可读性较强的中文 AI bot framework 样本”；但若研究目标是严肃生产级 agent platform，AstrBot 或更底层/更成熟框架可能提供更多治理与安全样本。