---
title: "Hermes Agent"
created: 2026-05-14
updated: 2026-05-14
type: repository-analysis
repo_url: https://github.com/NousResearch/hermes-agent
category: ai-agents
tags:
  - ai-agent
  - self-hosted
  - self-improving
  - multi-channel
  - python
primary_language: Python
license: MIT
stars: 148000
forks: null
last_checked: 2026-05-14
last_verified: 2026-05-14
evidence: "production use 2+ months + code review + docs + security audit reports"
archived_reason: ""
successor: ""
docker_support: true
gpu_required: false
estimated_cpu: "2-4 cores"
estimated_memory: "2-8GB"
estimated_storage: "5-20GB"
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
  extensibility: 5
  security: 2
  recommendation: 4
overall_score: 3.8
sources:
  - "[GH] https://github.com/NousResearch/hermes-agent"
  - "[Docs] https://hermes-agent.nousresearch.com/docs/"
  - "[Docs:Arch] https://github.com/NousResearch/hermes-agent/blob/main/website/docs/developer-guide/architecture.md"
  - "[GH:Audit] https://github.com/NousResearch/hermes-agent/issues/7826"
  - "[GH:Sec1] https://github.com/NousResearch/hermes-agent/issues/7071"
  - "[GH:Sec2] https://github.com/NousResearch/hermes-agent/issues/8884"
  - "[GH:Sec3] https://github.com/NousResearch/hermes-agent/issues/3968"
---

# Hermes Agent

> 自托管、自进化的 AI 代理。由 Nous Research 打造。☤
>
> **状态**: `active` · **总分**: 3.8/5 · **推荐度**: 4/5

## 一句话总结

Hermes Agent 是一个**自托管、自进化的 AI 代理框架**，内置闭环学习系统——从经验中创建技能、自我修正、跨 session 记忆、持续构建用户模型。定位：**会越用越聪明的个人 AI 助理**——适合追求长期积累效应、需要多工具统一调度的技术用户。

---

## 总体评价

Hermes Agent 是 2026 年 AI 代理浪潮中**增长最快的新星**：7 周突破 100k stars，由知名开源 AI 团队 Nous Research 打造，自带「学习闭环」这一任何竞品都没有的核心差异化能力。与 OpenClaw 同属通用型自主 agent，但定位有本质区别：OpenClaw 追求「什么都行」的广度，Hermes 追求「越用越好」的深度。

**适合**：有 Linux/Docker/CLI 经验的技术用户、希望 agent 能自我成长的研究者、需要长期积累效应（skill 自动迭代、跨 session 记忆）的人。

**不适合**：非技术用户、企业合规环境（安全审计发现 4 Critical + 9 High）、追求开箱即用的人。

> 一句话：这是目前唯一真正在「自进化」的 agent——用一个月之后，它和第一天完全不同。但你要愿意投入时间调教它，且愿意承受它偶尔的「成长痛」。

## 推荐度：4/5

**定位**：需要一个**越用越聪明**的个人 AI 助理、愿意投入时间调教的**技术用户**。Hermes 的核心价值不在于功能的广度（虽然它已经很广），而在于**时间维度上的增值**：skills 从经验中自动创建并自我改进、memory 跨 session 积累、session search 让你找回以前的对话——这些是任何竞品都没有的闭环。

**杀手锏：学习闭环**：
- Skills 系统：复杂任务完成后自动生成 SKILL.md，使用中遇到 pitfalls 自动 patch，版本迭代积累——这是真正的 procedural memory
- Memory 系统 + Honcho 用户建模：agent 自动决定什么该记住，跨 session 构建用户画像
- FTS5 Session Search：跨对话的全文搜索 + LLM 摘要，真正做到「不重复劳动」

**但闭环也是双刃剑**：
- 「自进化」意味着行为会变化——今天的 Hermes 和一个月后的 Hermes 处理同一任务的策略可能不同，这是功能而非 bug，但确实增加不确定性
- 安全审计发现默认配置是 ALLOW-ALL [GH:Audit]——agent 越自主，安全风险的放大效应越强
- Python 代码库的质量在 agent 类项目中属于上乘，但远不到「生产级」

**结论**：如果你只需要一个 agent 来「执行指令」，Hermes 不值得——用 Claude Code 或专门的工具更高效。但如果你想要一个**和你一起成长的长期 AI 伙伴**，Hermes 目前没有对手。

## 优势

1. **唯一具备真正学习闭环的 agent**：skills 自动创建 + 使用中自我 patch + memory 跨 session 积累——其他 agent（包括 OpenClaw）的「skills」本质是静态配置文件，Hermes 的 skills 是活的
2. **架构设计干净**：AIAgent 核心 → Prompt Builder + Provider Resolution + Tool Dispatch 三层分离清晰 [Docs:Arch]；SQLite + FTS5 的 session 存储设计合理；3 种 API mode（chat_completions / codex_responses / anthropic_messages）统一抽象
3. **极佳的可扩展性**：skills + MCP + plugin + toolsets + provider 五大扩展体系，每个都设计为可独立插拔
4. **文档一流**：从 quickstart 到架构内部到 llms.txt 机器可读入口，文档质量是同类中最高的
5. **模型无关**：任何 API provider 都可接入，`/model` 实时切换无需重启
6. **部署灵活性极高**：7 种 terminal backend（local / Docker / SSH / Singularity / Modal / Daytona / Vercel Sandbox），serverless 休眠零成本
7. **研究工具链完整**：batch trajectory generation + Atropos RL environments + trajectory compression——不仅是工具，还是研究平台

## 劣势

1. **安全默认值过于宽松**：社区安全审计发现 4 Critical + 9 High [GH:Audit]，YOLO mode 关闭所有安全检查、write_safe_root 需手动 opt-in、plugin 系统加载任意代码无沙箱
2. **自进化 = 行为不确定**：skill 自动 patch 是好机制，但也意味着 agent 的行为会随时间漂移——今天的配置明天可能被自己的 skill 修改
3. **Python 运行时开销**：同样是 agent runtime，Hermes 的资源效率不如 OpenClaw 的 Node.js——Python 的内存占用和启动开销显著
4. **成熟度仍不足**：v0.11.0，日历化版本号，周级发布，API 偶尔有 breaking change
5. **社区规模虚高**：148k stars 的增长速度可能包含大量观望者，实际生产用户占比未知（与 OpenClaw 同病）
6. **学习曲线存在**：setup wizard 降低了门槛，但要真正发挥「自进化」能力需要理解 skills/memory/session search 的交互逻辑

---

## 适合什么场景

- 想要一个**越用越好**的长期 AI 伙伴，愿意投入时间调教的技术用户
- 已有多个 AI 工具/代理，需要一个**能自我优化调度策略**的统一层
- 研究 AI agent 的工程架构——skills 的自动创建/迭代机制、memory 的自动管理、session search 的设计都值得学习
- 需要 agent 在云上 24/7 运行，从 Telegram 等消息平台交互（serverless 休眠模式成本极低）
- 想用自然语言写定时任务（built-in cron）的场景

## 不适合什么场景

- **一次性的垂类任务**：写一个 PR 不如 Claude Code，做一次数据分析不如 Jupyter agent。Hermes 的价值在长期积累，短期回报不明显
- **非技术用户**：要真正安全使用需要配置 DM policy、沙箱、文件系统限制、工具白名单——这些不是「装完即用」
- **企业合规环境**：默认 ALLOW-ALL 的安全姿态不适合生产部署（除非你做深度安全加固）
- **不喜欢 agent 行为变化的用户**：自进化意味着不可预测——如果你期望每次相同输入得到相同输出，Hermes 不适合你

## 与类似项目对比

| 项目 | 定位 | 相对 Hermes |
|------|------|------------|
| OpenClaw | 通用自托管 agent | 社区更大（371k vs 148k），但无学习闭环；TypeScript vs Python；Hermes 的 skills 是活的，OpenClaw 的 skills 是静态配置 |
| Claude Code / Codex CLI | 专用代码 agent | 代码能力更强，但无记忆/自进化/跨 session 能力；定位完全不同 |
| n8n / LangChain | 工作流自动化 | 可视化编排更强，但无自主学习和记忆；Hermes 更「agent」，n8n 更「automation」|

## 个人主页 sharing 候选

**是**。Hermes Agent 满足 novelty（唯一具备学习闭环的 agent）、maturity（12 releases、Nous Research 团队维护）、practicality（对技术用户有实际价值）、shareability（「会自己成长的 AI」是强有力的叙事）。适合在个人主页的 AI 工具推荐或技术观察类文章中出现。

---

## 它能做什么

- **学习闭环（核心差异）**：Skills 自动创建（复杂任务后生成 SKILL.md）→ 使用中自我 patch（遇到 pitfalls 自动修正）→ Memory 自动管理（agent 自主决定该记住什么）→ Session Search（FTS5 + LLM 摘要的跨对话召回）→ Honcho 辩证用户建模 [Docs]
- **多通道交互**：Telegram、Discord、Slack、WhatsApp、Signal、Email、CLI——统一 gateway 进程
- **全功能 TUI**：多行编辑、slash command 自动补全、对话历史、中断重定向、streaming tool output
- **70+ 工具、28 个 toolsets**：terminal（7 种 backend）、browser、web、file、vision、MCP、delegation、cron、memory、skills 等 [Docs:Arch]
- **子代理委派**：delegate_task 可 spawn 独立 subagent 处理并行任务，无上下文污染
- **代码执行**：execute_code 用 Python 脚本以 RPC 调用工具，将多步 pipeline 压缩为零上下文开销
- **内置 cron**：自然语言描述定时任务，结果投递到任意平台
- **模型无关**：Nous Portal、OpenRouter（200+ 模型）、NVIDIA NIM、Xiaomi MiMo、Kimi、MiniMax、Hugging Face、OpenAI、自定义 endpoint——`/model` 实时切换
- **研究工具链**：batch trajectory generation、Atropos RL environments、trajectory compression
- **7 种 terminal backend**：local、Docker、SSH、Singularity、Modal、Daytona、Vercel Sandbox——Serverless 休眠零成本

## 运行环境与资源占用

| 场景 | CPU | 内存 | 存储 | 说明 |
|------|-----|------|------|------|
| 最小（CLI only） | 1 vCPU | 512MB | 1GB | 基础对话，无 gateway |
| 标准（+gateway） | 1-2 vCPU | 1-3GB | 5GB | 日常单用户 + Telegram/Discord |
| 生产（+沙箱+多通道） | 2-4 vCPU | 4-8GB | 20GB+ | 完整功能、Docker 沙箱 |

- **运行时**：Python 3.11+，uv 包管理器
- **操作系统**：Linux / macOS / WSL2 / Windows (early beta) / Termux (Android)
- **Docker**：沙箱和部分部署需要；非必须
- **GPU**：不需要
- **外部依赖**：LLM API（任何 provider）——token 费用是唯一长期隐性成本
- **ARM64 支持**：✅（Apple Silicon、树莓派、AWS Graviton）

## 上手体验

评分 4/5。一键安装 + `hermes setup` 向导可在 2 分钟内开始对话 [Docs]。TUI 体验在同类产品中最好——slash command 自动补全、streaming tool output、中断重定向都很流畅。

但「能用」到「安全地用」之间有差距：默认配置是 ALLOW-ALL——文件系统全开、命令自动审批、write_safe_root 未启用。要真正安全使用需要配置 DM policy、沙箱模式、文件系统限制、工具白名单。这不是 setup wizard 能解决的问题——需要阅读安全文档并主动 hardening。

此外，要发挥「自进化」的最大价值，需要理解 skills/memory/session search 的交互逻辑——这部分的学习曲线不是零。

## 代码质量

评分 4/5。8,191 commits 的 Python 代码库，架构设计在 agent 类项目中属于上乘 [Docs:Arch]：

- **架构清晰**：AIAgent 核心（`run_agent.py`）→ agent/ 子系统（prompt_builder.py、context_engine.py、context_compressor.py、memory_manager.py）→ 工具层（70+ tools、28 toolsets）→ 存储层（`hermes_state.py`，SQLite + FTS5）。分层明确，职责分离
- **Provider 抽象优秀**：3 种 API mode 统一了不同 LLM provider 的差异，新增 provider 有清晰的模式
- **文档即代码**：架构文档（9 篇 developer guide）与代码结构一一对应，便于贡献者理解
- **测试**：有测试基础设施但覆盖率未知。快速发布节奏（周级）下测试可能跟不上功能迭代

扣分项：社区安全审计暴露出实现层面的粗糙——PYTHONPATH 注入 [GH:Sec1]、skills guard 是纯正则（可绕过）[GH:Audit]、plugin 系统加载任意代码无沙箱 [GH:Audit]。这些不是架构设计问题，是工程实现的债务。

## 可扩展性

评分 5/5。Hermes 的可扩展性是其架构设计的核心亮点，五大体系独立可插拔：

- **Skills 系统**：SKILL.md + agentskills.io 开放标准 + 自动创建/迭代 + 三级优先级（bundled / global / workspace）+ 使用中自我 patch——不仅是扩展机制，还是自进化引擎
- **MCP 集成**：原生 MCP client，动态发现并注册 MCP server 工具，支持工具过滤和权限控制
- **Plugin 系统**：PluginManager + registry 架构，通过 importlib 加载——虽然安全审计指出了沙箱缺失的问题，但从扩展设计的角度是完善的
- **Toolsets 体系**：28 个 toolsets 按功能分组，可按需启用/禁用——细粒度控制
- **Provider 抽象**：3 种 API mode（chat_completions / codex_responses / anthropic_messages），新增 provider 只需实现对应接口
- **7 种 Terminal Backend**：local / Docker / SSH / Singularity / Modal / Daytona / Vercel Sandbox——统一的终端抽象层

扣分项：skills 系统缺少版本管理和依赖解析（与 OpenClaw 同病），社区 skills 的安全审查仅靠正则 static analysis（易绕过）。

## 文档质量

评分 4/5。Hermes 的文档在同类项目中**遥遥领先**，但并非完美：

- **完整覆盖**：Quickstart → User Guide（CLI / gateway / configuration / features / security）→ Developer Guide（architecture / agent-loop / prompt-assembly / provider-runtime / tools-runtime / session-storage / gateway-internals / context-compression / ACP）→ Reference（FAQ / troubleshooting）
- **结构清晰**：Learning Path 按经验水平引导读者到正确的文档入口 [Docs]
- **机器可读**：`/llms.txt` 和 `/llms-full.txt` 为 LLM 和 coding agent 提供结构化文档入口，每次部署自动生成——这个设计本身就是 brilliant [Docs]
- **架构文档特别出色**：9 篇 developer guide 不仅说「是什么」，还说「为什么这么设计」——System Overview 的 ASCII 图、Directory Structure、Data Flow（CLI session / Gateway message / Cron job 三条路径）[Docs:Arch]

**扣分项**：
- **安全加固路径缺失**：audit 发现 4 Critical + 9 High，但文档里没有「从默认不安全到生产安全」的分步 hardening guide——直接跳到参考级 security 页面
- **Skill 生命周期边缘 case**：skill 自动 patch 的边界行为（什么条件触发？冲突怎么解决？skill 退化/废弃怎么处理？）文档未覆盖，需读源码
- **Plugin 开发指南浅**：contributing guide 覆盖了基本流程，但相比架构文档的深度明显不足

与 OpenClaw 文档的「博客文章合集」风格形成鲜明对比——Hermes 的文档像一个有架构师的产品，OpenClaw 的文档像快速堆起来的 wiki。

## 社区与成熟度

| 维度 | 评分 | 说明 |
|------|------|------|
| 社区活跃度 | 4/5 | 148k stars，7 周突破 100k（最快增长纪录）。Nous Research 团队活跃维护，Discord 和 Reddit（r/hermesagent）社区活跃。定期举办 Hermes Agent Jam。但 star 增长速度可能部分来自 Nous Research 的品牌效应——实际 DAU 未知 |
| 成熟度 | 3/5 | v0.11.0，日历化版本号（2026.4.23），周级发布。API 偶尔有 breaking change，但每个版本都有详细 changelog。项目年龄约 8 个月——仍在 rapid growth 阶段 |

社区和成熟度存在**不对称**——社区规模是 v4.0 级别的，成熟度是 v0.3 级别的。但不同于 OpenClaw 的担忧（作者离职、移交基金会），Hermes 由 Nous Research 团队持续主导，项目治理更稳定。

## 安全与风险

评分 2/5。这是 Hermes 最大的短板——不是因为设计上不安全，而是**默认配置过于宽松**。社区安全审计（v0.8.0，812 Python 文件，~364K 行代码）发现 4 Critical + 9 High [GH:Audit]：

**关键风险**：
1. **ALLOW-ALL 默认姿态**：YOLO mode 关闭所有安全检查、write_safe_root 需手动 opt-in、non-interactive mode 自动批准所有命令——不主动做安全配置的用户面临极高风险 [GH:Audit]
2. **Plugin 系统无沙箱**：通过 importlib 加载任意代码，插件可获得 Hermes 进程的所有权限 [GH:Audit]
3. **execute_code 非真沙箱**：作为普通 subprocess 运行 Python，社区发现 PYTHONPATH 注入可泄露 API key 和安全规则 [GH:Sec1]
4. **Skills guard 只做静态正则**：技能描述中的 prompt injection 可绕过——攻击者通过恶意 skill 实现持久化 prompt injection [GH:Sec2] [GH:Sec3]
5. **Tool output 无 prompt injection 防御**：`browser_navigate`、`terminal(curl)`、`read_file` 等工具返回的外部内容直接注入 agent 上下文 [GH]

**好消息**：这些是「默认不安全」而非「设计不健全」——通过配置 DM policy、沙箱模式、工具白名单、write_safe_root 可以显著降低风险。问题在于：有多少用户会做？

**License**：MIT——商用友好。

## 学习价值

**极高**——即使你不打算长期使用 Hermes，以下设计值得深入学习：

- **Skills 系统的自进化机制**：自动创建 + 使用中 patch 的闭环是目前 agent 领域最先进的 procedural memory 设计。SKILL.md 格式简单但设计精妙——它是一个 agent 写给自己的「操作手册」
- **Memory 系统的自动管理**：agent 自主决定什么该记住（而非用户手动管理），加上 Honcho 的辩证用户建模——这个方向是 agent 长期记忆的正确解法
- **Session Search 的设计**：FTS5 全文搜索 + LLM 摘要的混合方案——性能和语义理解的工程权衡做得很好
- **Provider 抽象层**：3 种 API mode 统一 200+ 模型的接口——如果你需要构建模型无关的 agent，这是最佳参考
- **文档工程**：`/llms.txt` + 9 篇 developer guide 的文档结构——如果你的项目也有 LLM 作为用户/贡献者，值得借鉴
