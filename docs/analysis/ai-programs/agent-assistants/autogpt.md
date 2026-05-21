---


title: "AutoGPT"
created: 2026-05-20
updated: 2026-05-21
type: repository-analysis
repo_url: "https://github.com/Significant-Gravitas/AutoGPT"
category: "ai-programs/agent-assistants"
tags: ["autonomous-agents", "agent-history", "agent-platform", "workflow-automation", "low-code-agents", "python", "typescript"]
overall_score: 3.3
recommendation: "强烈建议作为 autonomous-agent 历史线收录；若作为今天的生产平台采用，应先审许可证边界、历史安全公告、Classic 弃用状态与 autogpt_platform 的部署复杂度。"
status: active-platform-classic-deprecated
license: "Polyform Shield + MIT"
language: "Python / TypeScript"
stars: 184425
forks: 46228
docker_support: true
self_hostable: true
enterprise_ready: false
security_score: 2
last_evaluated: 2026-05-20
evidence: "GitHub API + GraphQL issue/PR counts + releases/contributors/advisories + official docs/site + local shallow clone scan; no runtime smoke test was performed."
sources:
  - "[GH:api] GitHub REST API snapshot for Significant-Gravitas/AutoGPT on 2026-05-20: stars=184425, forks=46228, watchers=1534, open_issues_count=424, created_at=2023-03-16, pushed_at=2026-05-20, default_branch=master, language=Python, topics include autonomous-agents/agentic-ai/llm/openai, GitHub license spdx_id=NOASSERTION."
  - "[GH:graphql] GitHub GraphQL query on 2026-05-20: open issues=260, open PRs=164, releases=105, latest tag autogpt-platform-beta-v0.6.61 dated 2026-05-20."
  - "[GH:contributors] GitHub contributors API first page on 2026-05-20: 100 contributors returned; top contributor Auto-GPT-Bot with 1076 commits."
  - "[GH:releases] GitHub releases API first page on 2026-05-20: latest release autogpt-platform-beta-v0.6.61 published 2026-05-20; recent releases are autogpt-platform-beta series."
  - "[GH:community] GitHub community profile API on 2026-05-20: health_percentage=100; README, code of conduct, contributing, issue template, PR template, license files present."
  - "[GH:advisories] GitHub repository security-advisories API on 2026-05-20 returned 21 advisories; sample recent advisories include GHSA-8pjg-mfqm-vrhr medium credit bypass patched in v0.6.59, GHSA-q58p-v9r9-7gqj high session hijacking patched in 0.6.51, GHSA-rfg2-37xq-w4m9 high Redis pickle deserialization/RCE patched in 0.6.52, GHSA-4crw-9p35-9x54 critical disabled-block RCE patched in v0.6.48."
  - "[GH:local-scan] Local shallow clone /tmp/repo-wiki-batch9/autogpt at commit aa1d12ba23e3c21f9c0bad2c3bae6dfe1b2cafd5 dated 2026-05-20; git ls-files=3904; du=102M; checked README.md, LICENSE, SECURITY.md, CONTRIBUTING.md, AGENTS.md, classic/README.md, docs/integrations/README.md."
  - "[GH:readme] README.md local clone: AutoGPT is positioned as a platform to create/deploy/manage continuous AI agents; self-hosting requires Docker, Docker Compose, Git, Node/npm, VS Code or editor, 4+ CPU cores recommended, 8GB minimum/16GB recommended RAM, 10GB storage; platform frontend offers low-code agent builder/workflow management/deployment/monitoring; server runs deployed agents and triggers."
  - "[GH:license] LICENSE local clone: autogpt_platform folder is under Polyform Shield License; everything outside autogpt_platform is under MIT, including original stand-alone AutoGPT Agent, Forge, agbenchmark and Classic GUI."
  - "[GH:security] SECURITY.md local clone: latest release and development commits are supported; classic/ folder is deprecated, unsupported, out of scope for security reports, and should not be used; disclosure window asks 90 days before public disclosure and 30 days after patch."
  - "[GH:classic] classic/README.md local clone: AutoGPT Classic was an experimental project demonstrating autonomous GPT-4 operation, one of the first implementations of autonomous AI agents, now unsupported with dependencies not updated."
  - "[GH:integrations] docs/integrations/README.md local clone: modular workflow blocks; custom blocks; integrations/triggers include Airtable, Discord, GitHub, Slack, Telegram, Twitter, Stagehand web actions, webhooks and other utility blocks."
  - "[Docs:platform] https://docs.agpt.co/ extracted 2026-05-20: AutoGPT Platform creates, deploys and manages continuous AI agents; agents are workflows built from blocks; supports low-code workflows, triggers, marketplace/frontend/server concepts and wide LLM provider list."
  - "[Web:home] https://agpt.co/ extracted 2026-05-20: public site positions AutoGPT as platform for continuously running AI assistants, low-code workflows and digital-task automation."
---

# AutoGPT

## 一句话总结

AutoGPT 是 autonomous-agent 史上必须收录的项目：Classic 把“让 GPT-4 自主拆解并执行任务”的想象推到大众视野，今天的仓库则转向带低代码 workflow、blocks、server/frontend、marketplace 设想的 AutoGPT Platform [GH:classic][GH:readme][Docs:platform]。

## 总体评价

它的历史价值远高于今天的默认生产推荐。`Significant-Gravitas/AutoGPT` 拥有 18.4 万 stars、4.6 万 forks，是 2023 年自主智能体热潮的标志物；但当前主线已不是原来的 Classic agent，而是 `autogpt_platform`：一个连续运行 agent/workflow 的平台 [GH:api][GH:readme]。

这个转向带来两重判断：

- 作为 **agent history / 2023 autonomous-agent wave landmark**：分量很重。
- 作为 **today's deployable platform**：要非常谨慎，因为 autogpt_platform 使用 Polyform Shield，Classic 已明确 deprecated/unsupported，且仓库有 21 条 GitHub Security Advisories 历史记录，其中包括 RCE、session hijacking、SSRF、secret logging 等平台级风险 [GH:license][GH:security][GH:advisories]。

因此我把它放在 `ai-programs/agent-assistants`，并明确状态为 `active-platform-classic-deprecated`：这是按 Classic/agent-history lineage 归类，不表示当前 AutoGPT Platform 只是简单 assistant；当前 product surface 已明显接近 workflow automation / agent platform。

## 收录推荐度：3/5；生产采用推荐度：1/5

推荐收录和研究；不推荐未经审查直接作为生产平台采用。评分表中的“推荐度”按生产采用推荐度计算。

适合的推荐语是：**读 AutoGPT 是为了理解 agent 史；用 AutoGPT Platform 是另一个更重、更有许可证和安全边界的工程决策。**

## 优势

1. **历史地位极高**：Classic 明确是早期 autonomous GPT-4 agent 实验，README 称其为 one of the first implementations of autonomous AI agents [GH:classic]。
2. **生态可见度巨大**：18.4 万 stars、4.6 万 forks，远超多数 agent 项目 [GH:api]。
3. **平台化能力广**：低代码 agent builder、workflow blocks、triggers、monitoring、marketplace/server/frontend 结构完整 [GH:readme][Docs:platform]。
4. **集成面很宽**：docs/integrations 覆盖 Slack、Telegram、Discord、GitHub、Airtable、Stagehand web actions、webhooks 等 [GH:integrations]。
5. **治理文件齐全**：community profile 100% 表示 README/SECURITY/CONTRIBUTING/CODE_OF_CONDUCT/issue-PR templates 等文件存在，不等同于治理质量无风险 [GH:community]。

## 劣势

1. **Classic 已弃用且不受安全支持**：SECURITY 明确 classic/ deprecated、unsupported、out of scope for security reports [GH:security]。
2. **混合许可证影响采用**：autogpt_platform 是 Polyform Shield，其余为 MIT；这不是简单的 MIT 项目 [GH:license]。
3. **安全历史很重**：21 条 advisories，样本包括 critical RCE、high session hijacking、SSRF、secret logging、DoS 等；虽然多有 patched version，但这是攻击面强信号 [GH:advisories]。
4. **复杂度高**：self-host 推荐 4+ cores、8GB minimum RAM、Docker/Compose/Node/npm；不是轻量 CLI agent [GH:readme]。
5. **issue/PR backlog 不低**：GraphQL 显示 open issues=260、open PRs=164 [GH:graphql]。

## 适合什么场景

- 写 agent 史、2023 autonomous-agent 热潮综述。
- 分析从 single autonomous agent 到 low-code continuous-agent platform 的演化。
- 研究 blocks/triggers/workflow 化 agent 产品设计。
- 研究 agent 平台的安全失败模式与治理压力。
- 在充分隔离的环境中评估 self-host platform。

## 不适合什么场景

- 想快速获得轻量本地个人 agent。
- 希望全 MIT / Apache-2.0 permissive license 的项目。
- 没有 Docker/Node/平台运维能力的个人用户。
- 对安全边界要求高、但不愿跟踪 advisories 和版本迁移的生产系统。
- 继续使用 Classic 作为生产依赖；官方明确不建议 [GH:security]。

## 与类似项目对比

上述项目按 `ai-programs/agent-assistants` 同类/相邻范围做定位级对比，未按同一 10 维度框架深审；这里主要用于 agent 史定位。

| 项目 | 定位 | 相对本项目 |
|---|---|---|
| AutoGPT | autonomous-agent history + continuous-agent platform | 历史可见度最高之一；当前 platform 化、许可证与安全复杂度也最高 |
| BabyAGI | early task-loop autonomous-agent experiment | 更轻、更像概念原型；AutoGPT 更产品化、平台化 |
| OpenDevin / OpenHands | software-engineering agent | 更偏 coding agent；AutoGPT 更偏 general digital-task automation |
| Flowise | visual LLM/agent builder | Flowise 更明确是 visual builder；AutoGPT 更强调 continuous agents 与平台/server/frontend |
| LangGraph apps | agent workflow orchestration | LangGraph 更偏 framework/runtime；AutoGPT 更偏 end-user/platform product |

## 个人主页 sharing 候选

适合作为“Agent 史”分享候选，而不是工具推荐文。

可写主题：**《AutoGPT 的启示：自主智能体热潮如何从魔法叙事走向 workflow platform》**。重点不是复述 stars，而是讨论为什么 Classic 弃用、为什么平台化、为什么 advisories 与许可证边界成为真实工程问题。

## 它能做什么

当前 README/docs 描述的 AutoGPT Platform 能做：

- 创建、部署、管理 continuous AI agents [GH:readme]。
- 用低代码界面连接 blocks 形成 workflow [GH:readme][Docs:platform]。
- 让 server 持续运行 agents，并由外部 trigger 触发 [GH:readme]。
- 接入 marketplace/prebuilt agents 的产品形态 [GH:readme]。
- 使用多类 integration blocks，包括通信、GitHub、webhook、Stagehand web actions 等 [GH:integrations]。
- Classic 侧曾提供 Forge、benchmark、Classic GUI、agent protocol 相关组件，但现在应视为历史/教育材料 [GH:classic][GH:security]。

## 运行环境与资源占用

README 给出的 self-host 要求较重：

- CPU：4+ cores recommended。
- RAM：minimum 8GB，recommended 16GB。
- Storage：at least 10GB。
- OS：Linux、macOS、Windows with WSL2。
- Software：Docker Engine、Docker Compose、Git、Node.js、npm、VS Code 或现代编辑器 [GH:readme]。

Docker support: `docker_support: true` 指 self-host/development stack 路径；这说明它不是“一条 pip install 就跑”的轻量 agent，而是一个 Docker 化平台栈。

frontmatter 中 `enterprise_ready: false` 是针对 AutoGPT Platform 当前 beta release line、Polyform Shield 边界、高严重度历史 advisories、未做 smoke test 与部署复杂度的保守判断，不是对其历史价值的否定 [GH:releases][GH:license][GH:advisories][GH:readme]。

## 上手体验

README 提供一行安装脚本：macOS/Linux 下 `curl -fsSL https://setup.agpt.co/install.sh -o install.sh && bash install.sh`，Windows PowerShell 也有对应脚本 [GH:readme]。

但我仍只给 3/5：

- 一行脚本降低入口门槛；
- 平台依赖 Docker/Compose/Node/npm；
- 还要理解 frontend/server/blocks/triggers；
- Cloud beta/waitlist 与 self-host 路径会让用户预期复杂化 [GH:readme][Docs:platform]。

## 代码质量

代码规模大，本地 shallow clone 3904 tracked files、102M，语言以 Python/TypeScript 为主 [GH:local-scan][GH:api]。

正面：

- 前后端、docs、integrations、security/contribution 文件齐全。
- AGENTS.md 给出较具体的 backend/frontend/testing/conventional commits 规则 [GH:local-scan]。
- release 节奏仍活跃，latest beta release 为 2026-05-20 [GH:releases]。

负面：

- Classic deprecated 与 platform 主线共存，历史包袱重。
- 安全 advisories 多，说明复杂平台曾暴露多处严重问题 [GH:advisories]。
- 本次未运行测试，不能验证当前 master 的 runtime health。

## 可扩展性

可扩展性很强但代价高。AutoGPT Platform 采用 blocks/integrations/triggers 思路，docs 提供 custom blocks 指引，现有 integrations 覆盖通信、GitHub、web、webhook、数据处理等 [GH:integrations][Docs:platform]。

这类扩展性更像 Zapier/n8n-style workflow builder，而不是 library-style SDK。优点是非开发者也可能组合 agent workflow；缺点是每个 block 都是潜在权限与安全边界。

## 文档质量

README、docs site、integrations docs、SECURITY、CONTRIBUTING 都存在且信息量充足 [GH:readme][Docs:platform][GH:integrations]。

扣分点主要是：

- 历史线、Classic、Platform、Cloud beta/self-host 之间对新用户可能混淆。
- README 有明显 typo，例如 in-developlemt；这不是大问题，但反映文档 polish 不完美 [GH:readme]。
- 平台 claim 很多，本次未逐一部署验证。

## 社区与成熟度

社区可见度是 5/5 级别：18.4 万 stars、4.6 万 forks、100 first-page contributors、community profile 100%（文件存在性信号）[GH:api][GH:contributors][GH:community]。

成熟度只给 3/5：原因是成熟不是 stars。AutoGPT 经历了从 Classic 到 Platform 的大转向，当前 releases 是 `autogpt-platform-beta` 系列；GraphQL open issues=260/open PRs=164；安全公告历史重 [GH:graphql][GH:releases][GH:advisories]。

## 安全与风险

历史 advisories 数量与 platform attack surface 是 AutoGPT 当前生产采用最大的风险项。

正面：有 SECURITY.md、私密报告路径、支持版本说明、disclosure policy、GitHub advisories 公开透明 [GH:security][GH:advisories]。

负面：

- 21 条 advisories，且样本中有 critical RCE、高危 session hijacking、SSRF、secret logging、DoS、Redis pickle deserialization/RCE 等 [GH:advisories]。
- Classic 被明确标为 deprecated/unsupported/out of scope [GH:security]。
- workflow blocks 与外部 credentials、webhooks、browser/web actions 的组合天然扩大攻击面 [GH:integrations]。
- Polyform Shield 对商业竞争场景有许可证风险 [GH:license]。

因此 security_score 只给 2/5。不是说当前 latest 必然有已知未修漏洞，而是历史攻击面和平台权限模型要求很高。

## 学习价值

学习价值很高，主要在三点：

1. agent 史：为什么 2023 年 AutoGPT 能成为象征。
2. 产品演化：从 autonomous task loop 到 continuous workflow platform。
3. 工程教训：agent 平台一旦连接 credentials、webhooks、browser actions、blocks，就进入严肃安全工程，而非 prompt demo。

## 评分

| 维度 | 分数 | 理由 |
|---|---:|---|
| 能力广度 | 5/5 | continuous agents、frontend/server、blocks、triggers、marketplace、Classic/Forge/benchmark 历史组件，能力面极广 [GH:readme][GH:integrations] |
| 上手体验 | 3/5 | 有一行脚本，但 self-host 要 Docker/Compose/Node/npm/8GB+ RAM，平台概念复杂 [GH:readme] |
| 性能 | 3/5 | 平台化架构能力强但资源要求不轻；本次未跑 benchmark 或部署测试 [GH:readme] |
| 代码质量 | 3/5 | 文件/治理结构完整且 release 活跃；但 Classic deprecated 与 platform 转型并存，历史包袱和 advisories 多 [GH:local-scan][GH:advisories] |
| 文档质量 | 4/5 | README/docs/integrations/security/contribution 齐全；但 Classic/Platform/Cloud/self-host 叙事复杂 [GH:readme][Docs:platform] |
| 社区活跃度 | 5/5 | stars/forks 极高、contributors 多、community profile 文件齐全；但 backlog 也高，文件齐全不等于治理无风险 [GH:api][GH:graphql][GH:community] |
| 成熟度 | 3/5 | 历史影响成熟，但当前 autogpt-platform-beta 与大转向使生产成熟度不能按 stars 高估 [GH:releases][GH:security] |
| 可扩展性 | 4/5 | blocks/triggers/custom blocks/integrations 扩展面强，但每个扩展也是权限与维护成本 [GH:integrations] |
| 安全性 | 2/5 | advisories 历史重，Classic unsupported，agent workflow 平台攻击面大 [GH:advisories][GH:security] |
| 推荐度 | 1/5 | 作为历史研究强烈推荐；作为默认生产采用不推荐，除非专门审许可证、版本、安全与部署 |

**Overall score**: (5+3+3+3+4+5+3+4+2+1)/10 = **3.3**
