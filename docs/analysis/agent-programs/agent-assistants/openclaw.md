---
title: "OpenClaw"
created: 2026-05-14
updated: 2026-05-14
type: repository-analysis
repo_url: https://github.com/openclaw/openclaw
category: ai-agents
tags:
  - ai-agent
  - self-hosted
  - automation
  - multi-channel
primary_language: TypeScript
license: MIT
stars: 371000
forks: 76800
last_checked: 2026-05-14
last_verified: 2026-05-14
evidence: "code review + docs + community reports + hardware guides"
archived_reason: ""
successor: ""
docker_support: true
gpu_required: false
estimated_cpu: "2-4 cores"
estimated_memory: "2-8GB"
estimated_storage: "5-20GB"
status: active
sharing_candidate: false
ratings:
  capability: 5
  usability: 2
  performance: 3
  code_quality: 2
  documentation: 3
  community: 5
  maturity: 3
  extensibility: 4
  security: 2
  recommendation: 3
overall_score: 3.2
sources:
  - "[GH] https://github.com/openclaw/openclaw"
  - "[Wiki] https://en.wikipedia.org/wiki/OpenClaw"
  - "[Docs] https://docs.openclaw.ai/"
  - "[HW] https://www.knolli.ai/post/openclaw-system-requirements"
  - "[HW2] https://sfailabs.com/guides/openclaw-hardware-requirements"
---

# OpenClaw

> 自托管个人 AI 助手。全平台。龙虾之道。🦞
>
> **状态**: `active` · **总分**: 3.2/5 · **推荐度**: 3/5

## 一句话总结

OpenClaw 是一个**自托管的单用户 AI 代理框架**，通过消息应用作为交互入口，让 LLM 代表你在本地执行任务。定位：**全局统筹型 AI 助理**——适合作为多个 AI 工具的统一调度层，不适合垂类任务。

---

## 总体评价

OpenClaw 是 2025–2026 年 AI 代理浪潮的**现象级项目**：增长史无前例，功能覆盖极广，社区自组织能力强。[Wiki] 但「现象级」≠「成熟可靠」——hypergrowth 阶段的典型问题显著：功能多但文档乱、社区大但代码烂、概念新但安全差。

**适合**：有 Linux/Docker 经验的开发者、想研究 agent 架构的人、需要多 agent 统一调度层的技术管理者。

**不适合**：非技术用户、企业合规环境、期望「装完即用」的人、只在找单一垂类工具的人。

> 一句话：你能驾驭它，它就是最强大的个人 AI 代理；你驾驭不了，它就是个能把你的文件删光的危险玩具。

## 推荐度：3/5

**定位**：需要一个统一入口来调度多个 AI 工具/代理的**技术管理者**。OpenClaw 最强的场景不是亲自干活，而是做「总控」——接收你的指令，分发给合适的工具或子代理，汇总结果。

**强于通用性，败于通用性**：
- 当你需要一个东西「什么都行」的时候，它是唯一选择——20+ 通道、技能市场、浏览器、语音、Canvas，覆盖面无可匹敌
- 但当你有一个具体的垂类任务（写代码、做数据分析、管数据库），它不如专用 agent——Claude Code 写 PR 更强，n8n 管工作流更稳，Hermes Agent 的自优化机制它完全没有

**实际使用的三大痛点**：
1. **无自优化机制**：没有像 Hermes 这样的 skill 自动迭代/修正能力，用久了不会变聪明，只会积累 session 垃圾
2. **代码质量差**：monorepo 本身是典型的「快速堆功能」产物——48k+ commits 的 TypeScript 代码库结构臃肿 [GH]
3. **通用 = 平庸陷阱**：大而全的平台在每一个单项上都不够深——浏览器不如 Puppeteer，定时任务不如正经 cron，技能系统没有版本管理和依赖解析

**结论**：如果你只需要一个 agent，别用 OpenClaw——找垂类工具。如果你已经有多个 agent 并且需要一个统一调度层，OpenClaw 是目前最好的选择。

## 优势

1. **社区规模极大**：371k stars，ClawHub 技能市场自生长 [GH]
2. **MIT 许可证**：商业友好（但不覆盖第三方技能和依赖包的合规风险）
3. **多通道统一入口**：20+ 消息平台——竞品中最广 [Wiki]
4. **本地优先 + 隐私**：数据和配置在本地，不上传第三方（LLM API 调用除外）
5. **高度可扩展**：技能系统 + 多 agent 路由 + 沙箱 provider 接口（详见「可扩展性」段）
6. **跨平台生态**：macOS/iOS/Android 配套应用 + WebChat

## 劣势

1. **安全风险显著**：prompt injection + 恶意第三方技能 + 默认权限较宽——三个独立攻击面（详见「安全与风险」段）
2. **成熟度不足**：仅 6 个月历史，3 次改名，breaking change 频繁；据公开报道，作者已加入 OpenAI 并将项目移交非营利基金会 [Wiki: 2026.2 Steinberger joins OpenAI, foundation stewardship]
3. **学习曲线陡峭**：JSON 配置 + 安全策略 + 沙箱概念，非开发者不可用
4. **资源开销不低**：自称「轻量」，实际日常 2-4GB [HW]
5. **关注度可能显著领先于实际使用**：Star 数远超可验证的日活 [Wiki]
6. **通用性 = 平庸陷阱**：大而全但每个单项不够深

---

## 适合什么场景

- 已有多个 AI 工具/代理，需要一个**统一调度入口**的技术管理者
- 想在自有 VPS 上搭建个人 AI 管家，愿意折腾配置
- 研究 AI agent 工程架构——技能系统、多代理路由、沙箱设计都有参考价值

## 不适合什么场景

- **垂类任务**：写代码不如 Claude Code，管工作流不如 n8n，做数据分析不如 Jupyter agent
- **非技术用户**：维护者明确警告——「不懂命令行就别用」
- **低资源设备**：Gateway 空闲 400-800MB，开启沙箱后 4GB 起步 [HW]
- **企业合规环境**：第三方技能缺少审查（详见「安全与风险」段）

## 与类似项目对比

| 项目 | 定位 | 相对 OpenClaw |
|------|------|--------------|
| Claude Code / Codex CLI | 专用代码 agent | 更专注代码，OpenClaw 更通用 |
| n8n / LangChain | 工作流自动化 | 可视化编排更强，OpenClaw 自主性更强 |
| Hermes Agent | 通用 AI agent | 自优化 skill 系统更好，OpenClaw 生态更大 |

## 个人主页 sharing 候选

**否**。项目过于复杂且安全风险高，不适合在个人主页作为推荐内容。如果你的个人主页有「AI 代理发展观察」类文章，可以作为现象级案例提及。

---

## 它能做什么

- **多通道收件箱**：Telegram、WhatsApp、Slack、Discord、Signal、iMessage、Google Chat、Matrix、飞书、LINE、微信、QQ 等 20+ 消息平台统一管理 [Docs]
- **本地工具执行**：默认 session 拥有完整主机权限——读写文件、执行 shell、运行脚本
- **浏览器自动化**：内置浏览器工具，可访问网页、填表、截图
- **技能系统**：`SKILL.md` 定义工具使用指令；ClawHub 市场提供社区技能；bundled / global / workspace 三级优先级
- **多代理路由**：不同频道可路由到不同 agent，各自独立 session 和配置
- **语音交互**：macOS/iOS 语音唤醒 + Android 连续对话（ElevenLabs TTS）
- **Live Canvas**：A2UI 驱动的可视化工作区
- **定时任务**：内置 cron 调度
- **沙箱隔离**：Docker/SSH/OpenShell 沙箱
- **配套应用**：macOS 菜单栏、iOS/Android 客户端

## 运行环境与资源占用

| 场景 | CPU | 内存 | 存储 | 说明 |
|------|-----|------|------|------|
| 最小（纯转发） | 1 vCPU | 512MB | 1GB | 仅消息代理 |
| 标准（+通道） | 1-2 vCPU | 1-2GB | 5GB | 日常单用户 |
| 生产（+沙箱） | 2-4 vCPU | 4-8GB | 20GB+ | Docker + 浏览器 |
| 重度（+多agent） | 4+ vCPU | 8-16GB | 50GB+ | 多代理 + 语音/Canvas |

数据来源：[HW], [HW2]

- **运行时**：Node.js 24+（推荐）或 22.16+
- **操作系统**：macOS / Linux / Windows（WSL2）
- **Docker**：沙箱和部分部署场景需要；构建至少需 2GB RAM [HW]
- **GPU**：不需要
- **外部依赖**：LLM API（Claude / DeepSeek / GPT）——token 费用是长期隐性成本
- **ARM64 支持**：✅（Apple Silicon、树莓派 4/5、AWS Graviton）[HW2]

## 上手体验

评分 2/5。配置入口是 `~/.openclaw/openclaw.json`（JSON），最小可用配置只需指定模型，但**安全使用**需要额外配置 DM 策略、沙箱模式、通道白名单、技能权限。复杂度来源：

- 配置项数量大，文档找起来费劲
- 版本迭代快，breaking change 频繁
- `openclaw update` 只更新 CLI，Gateway 需单独重启——这是常见的坑 [GH]
- 安全配置「做错比不做更危险」——默认值偏宽松

有 `openclaw onboard --install-daemon` 向导降低门槛，但深入调优仍需大量试错。

## 代码质量

评分 2/5。48k+ commits 的 TypeScript monorepo 是典型的**快速堆功能**产物 [GH]：

- **架构臃肿**：pnpm workspace 结构随功能增长而膨胀，社区贡献者反映维护困难
- **无自优化机制**：没有 skill 自动迭代/修正能力，session 积累垃圾而不自清理
- **测试覆盖不明**：快速发布节奏下难以保证测试质量
- **版本管理混乱**：日历化版本号 + `latest` tag 曾指向过期版本（已知 bug）[GH]

适合**学习技能系统设计思路**，不适合作为代码工程范本。

## 可扩展性

评分 4/5。OpenClaw 的架构设计以扩展为核心，这是其核心竞争力之一：

- **技能系统**：`SKILL.md` + ClawHub 市场 + 三级优先级（bundled/global/workspace），社区可自行发布技能
- **多沙箱 provider**：Docker、SSH、OpenShell 三种沙箱后端可选，接口统一
- **多通道适配**：20+ 消息平台的适配层，新增通道有清晰模式
- **多 agent 路由**：不同频道/用户可路由到不同 agent 配置，隔离度好
- **配套应用 API**：macOS/iOS/Android 通过 Gateway WebSocket 通信，可扩展新客户端

扣分项：技能系统缺少版本管理和依赖解析——安装社区技能可能导致不可预期的行为，这是扩展生态的关键短板。

## 文档质量

评分 3/5。核心问题不是内容缺失，而是**信息架构混乱**：

- 相关内容散落在互不链接的页面中，新手找不到入口
- 大量介绍性文字，缺少精确的配置示例和边界条件说明
- 版本滞后于代码（部分页面基于 2026.2，当前已是 2026.3.x）[Docs]

对比 Hermes Agent 文档：每个配置项精确标注类型、默认值、副作用。OpenClaw 的文档更像「博客文章合集」。

## 社区与成熟度

| 维度 | 评分 | 说明 |
|------|------|------|
| 社区活跃度 | 5/5 | 371k stars，76.8k forks，48k+ commits，ClawHub 生态自生长，Discord/issue 响应活跃 [GH] |
| 成熟度 | 3/5 | 仅 6 个月历史，3 次改名（Clawdbot → Moltbot → OpenClaw），breaking change 频繁；据公开报道，作者已加入 OpenAI 并将项目移交非营利基金会 [Wiki: 2026.2 Steinberger joins OpenAI, foundation stewardship] |

社区和成熟度**显著不对称**——社区规模是 v4.0 级别，成熟度是 v0.3 级别。这意味着：关注度极高但实际生产用户可能远少于关注者；生态繁荣但基础不稳。

## 安全与风险

评分 2/5。三个独立攻击面：

1. **Prompt injection**：LLM 驱动的 agent 天然面临的问题——邮件、网页内容、第三方技能描述中都可能植入恶意指令。沙箱机制可部分缓解，但不能完全消除
2. **第三方技能缺乏审查**：据安全媒体报道，Cisco 安全团队发现 ClawHub 上存在技能在用户不知情的情况下执行数据外泄和 prompt injection [Wiki: Cisco AI security team findings]。社区技能没有强制审查流程
3. **默认权限较宽**：`main` session 默认拥有完整主机权限。虽然可通过 DM pairing 和沙箱限制，但默认值偏宽松——不主动做安全配置的用户面临较高风险

中国政府已于 2026 年 3 月禁止国企和政府机构在办公电脑上运行 OpenClaw，理由是数据安全风险 [Wiki: 2026.3 Chinese government restrictions]。维护者 Shadow 在 Discord 上公开提醒：「如果你不懂命令行，这个项目对你来说太危险了」 [Wiki: maintainer warning]。

**License**：MIT——商用授权友好，但不覆盖第三方技能、依赖包、模型服务条款和数据合规风险。

## 学习价值

**高**——尽管不推荐实际使用，但其架构设计有参考价值：

- 技能系统（SKILL.md + 三级优先级）的设计思路值得借鉴
- 多代理路由 + 沙箱隔离的工程方案可作参考
- 多通道适配的模式（20+ 平台统一抽象层）有学习意义
