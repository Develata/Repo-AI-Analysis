---
title: "CopilotKit"
created: 2026-06-07
updated: 2026-07-21
type: repository-analysis
repo_url: "https://github.com/CopilotKit/CopilotKit"
category: "ai-programs/agent-frameworks"
tags: [agent-framework, generative-ui, ag-ui, react, frontend-sdk, human-in-the-loop, channels, typescript, nx]
previous_repo: ""
successor: ""
primary_language: "TypeScript"
license: "MIT"
stars: 31116
forks: 4314
last_checked: 2026-07-21
last_verified: 2026-07-21
evidence: "GitHub REST/GraphQL metadata, official docs, release/advisory APIs and local repository scan at commit d2a4beddb9a4c27f4a275ae0b40ab24d88720e2f; Node/pnpm install, build, tests, examples, Channels adapters and hosted Cloud paths were not executed"
archived_reason: ""
docker_support: false
gpu_required: false
estimated_cpu: "Heuristic: ordinary Node/TypeScript build/runtime; app-specific backend/model cost external"
estimated_memory: "Heuristic: moderate for development monorepo; runtime footprint depends on host app, agent backend, memory and channels, not measured"
estimated_storage: "Local scan: 18,381 tracked paths; checkout bytes omitted because assets/LFS materialization can distort the number"
status: active
ratings:
  capability: 4
  usability: 4
  performance: 3
  code_quality: 4
  documentation: 4
  community: 4
  maturity: 3
  extensibility: 4
  security: 3
  recommendation: 4
overall_score: 3.7
sources:
  - "[GH] https://github.com/CopilotKit/CopilotKit"
  - "[GH:api] GitHub REST/GraphQL snapshot 2026-07-21: archived=false, disabled=false, default_branch=main, head=d2a4beddb9a4c27f4a275ae0b40ab24d88720e2f, pushed_at=2026-07-20T22:00:27Z, stars=31116, forks=4314, open issues=250, open PRs=82, primary_language=TypeScript, license=MIT"
  - "[GH:languages] GitHub languages API snapshot 2026-07-21: TypeScript=26823674, Python=3970584, MDX=2335924, JavaScript=2294135, CSS=2074084, Shell=51977, Vue=14809, HTML=8965"
  - "[GH:community] GitHub community/profile and contributors endpoints queried 2026-07-21: health_percentage=100, first-page contributors=100, CONTRIBUTING/CODE_OF_CONDUCT/SECURITY/PR template/license/readme present"
  - "[GH:advisories] GitHub repository security-advisories API queried 2026-07-21; returned [] in this check"
  - "[GH:readme] README.md local scan 2026-07-21: framework centers generative/headless UI, shared state/context, frontend actions, HITL and AG-UI interoperability; README also advertises Channels beyond browser as early access"
  - "[GH:releases] GitHub releases API snapshot 2026-07-21: 562 release objects; latest core v1.63.1 published 2026-07-16; Channels v0.2.1 published 2026-07-17; v1.62.3 adds user-scoped long-term memory, stateless suggestions and Threads Drawer redesign; Channels v0.2.0 publishes synchronized Slack/Teams/Discord/Telegram/WhatsApp adapters"
  - "[GH:security-release] CopilotKit v1.61.1 release notes published 2026-06-23: react-ui sanitizes raw HTML in Markdown renderer to close an XSS injection path; current latest core release is v1.63.1"
  - "[Docs:home] https://docs.copilotkit.ai/ extracted 2026-07-21: docs cover generative UI, chat, actions, HITL, shared state, suggestions, agent integrations, self-hosting and observability"
  - "[Docs:ag-ui] https://docs.copilotkit.ai/ag-ui-protocol extracted 2026-06-07; retained as a historical protocol-definition source: AG-UI is an event-based protocol for connecting agent backends to user-facing applications; current docs home separately rechecked 2026-07-21"
  - "[Source:local-scan] Local shallow clone /opt/data/tmp/github-repo-wiki-freshness-audit/evidence/repos/CopilotKit at commit d2a4beddb9a4c27f4a275ae0b40ab24d88720e2f: git ls-files=18381, markdown/MDX=3079, workflows=43, test-ish paths=2103; inspected package.json, pnpm-workspace.yaml, SECURITY.md, packages/channels/README.md, packages/ and examples/; no build/tests executed"
  - "[Source:package] root package.json inspected 2026-07-21: Node >=18, pnpm 10.33.4, Nx 22.7.5, Vitest 4.1.3, Oxlint/Oxfmt, build/typecheck/test/storybook/package-verification and Channels verification scripts"
  - "[Source:channels] packages/channels/README.md inspected 2026-07-21: JSX-first multi-platform channel engine with adapters for Slack, Teams, Discord, Telegram and WhatsApp; core and adapters can also be installed selectively"
  - "[Source:security] SECURITY.md inspected 2026-07-21: security@copilotkit.ai disclosure path, 48-hour acknowledgement target, 5-business-day investigation target and 30-day resolution target"
  - "[L1:autogen] Local wiki comparison source: /opt/data/wiki/github-repo-wiki/ai-programs/agent-frameworks/autogen.md"
  - "[L1:crewai] Local wiki comparison source: /opt/data/wiki/github-repo-wiki/ai-programs/agent-frameworks/crewai.md"
  - "[L1:semantic-kernel] Local wiki comparison source: /opt/data/wiki/github-repo-wiki/ai-programs/agent-frameworks/semantic-kernel.md"
---

# CopilotKit

> Agent-native frontend stack：把 chat、Generative UI、shared state、HITL、AG-UI、memory 和 multi-platform Channels 接到真实产品界面。
>
> **状态**: `active` · **总分**: 3.7/5 · **推荐度**: 4/5
> **核验版本**: commit `d2a4beddb9a4c27f4a275ae0b40ab24d88720e2f` / core `v1.63.1` / Channels `v0.2.1`；GitHub/API 快照 2026-07-21
> **验证边界**: 本轮未运行 scaffolder、monorepo build/tests、真实 AG-UI backend、memory tenancy 或 Channels adapter；结论来自官方 source/docs/release surface。

## 一句话总结

CopilotKit 是给 agent 应用补“用户交互层”的强候选：浏览器内覆盖 chat、generative UI、shared state、frontend actions 和 HITL，浏览器外开始以 Channels 0.2.x 覆盖 Slack、Teams、Discord、Telegram、WhatsApp；能力广，但 monorepo、release line 与安全边界同样复杂 [GH:readme][GH:releases][Source:channels]。

## 总体评价

它的中心不是 AutoGen/CrewAI/LangGraph 那类“如何编排 agent reasoning”，而是 Frontend → Runtime → Agent 之间如何通信、展示、确认和接管。AG-UI 把 backend events 标准化，CopilotKit 在其上提供 React/Next 等 UI primitives、state/actions/HITL 与 agent integrations [Docs:home][Docs:ag-ui]。

2026-07 的变化具有分析后果：core v1.62.3 加入 user-scoped long-term memory、stateless suggestions 和 Threads Drawer 重构；Channels v0.2.0/0.2.1 把五个平台 adapter 统一为可发布 package family [GH:releases][Source:channels]。因此，“Slack/Teams 只是一句 early-access 宣传”的旧判断已不完整；更准确的说法是：README 仍把 beyond-browser 标为 early access，但 repo 与 registry release surface 已经公开，稳定性要按独立 0.2.x 版本线评估。

工程面很强：18,381 tracked paths、43 workflows、2,103 test-ish paths，Nx/pnpm、typecheck/test/coverage、Storybook、publint、attw 与 package verifier 都在 [Source:local-scan][Source:package]。代价是体量和集成矩阵很大，不能把“示例丰富”外推为所有 backend/channel 组合已成熟。

## 推荐度：4/5

**目标角色**：已有 agent backend、需要构建 agent-native Web/Mobile/enterprise UI，或需要把同一 agent 交互延伸到 team messaging channels 的前端/全栈团队。

推荐它作为 agent UX 层 shortlist：生态位清楚、能力完整、AG-UI 互操作和工程资产都强。生产采用需 pin core 与 Channels 两条版本线，优先 self-host runtime，给 tools/actions 做 server-side authorization 和 allowlist，为 memory 做 tenant/user isolation，为 channel identity 做绑定与审计。

若只需简单 streaming chat，或者需求核心是 multi-agent planning/runtime，它偏重且不在中心位置。

## 优势

1. **生态位明确**：专注 agent UX/frontend，而非重复造 orchestration runtime [Docs:home][Docs:ag-ui]。
2. **UI primitives 完整**：chat/headless UI、Generative UI、shared state、frontend actions、HITL 都是产品级高频需求 [GH:readme][Docs:home]。
3. **backend 互操作广**：AG-UI 对接多种 agent framework，降低前端与特定 runtime 的耦合 [Docs:home][Docs:ag-ui]。
4. **新增 memory 与 channels**：user-scoped long-term memory 进入 core；Channels 同步发布五个平台 adapter [GH:releases][Source:channels]。
5. **工程治理强**：大型 monorepo 具备丰富 tests/workflows、package verification、SECURITY 与社区文件 [Source:local-scan][Source:package][GH:community]。

## 劣势

1. **backlog 仍高**：当前 250 open issues、82 open PRs；活跃维护不能抹去 triage/compatibility 压力 [GH:api]。
2. **monorepo 与产品边界复杂**：OSS SDK、AG-UI、Cloud/Enterprise/Intelligence、memory 与 Channels 混在同一生态叙事中。
3. **两条 release line**：core v1.63.x 与 Channels v0.2.x 需分别 pin、升级和回归；Channels 0.2.0 还包含 clean-break rename [GH:releases]。
4. **性能未实测**：bundle、SSE、state sync、memory 和各 channel adapter 的运行成本取决于实际 app/backend。
5. **安全面大**：LLM output、dynamic UI、tools/actions、state、memory、channel identity 与 observability 都跨越 trust boundary。

---

## 适合什么场景

- 已有 LangGraph/CrewAI/Mastra/PydanticAI 等 backend，需要接入用户界面。
- React/Next 项目要加入 chat、headless UI、generative UI、shared state 与 HITL。
- 要用统一 channel abstraction 接 Slack、Teams、Discord、Telegram、WhatsApp。
- 研究 AG-UI、agent UX、memory 和 human-control patterns。

## 不适合什么场景

- 只构建底层 multi-agent planner/runtime，没有用户交互面。
- 极简 chatbot，无法接受 SDK/protocol/monorepo 复杂度。
- 无法建立 action allowlist、server authorization、memory tenancy 与 channel identity policy 的高安全系统。
- 不愿维护 Node/TypeScript/Nx/pnpm 工程栈的团队。

## 与类似项目对比

| 项目 | 定位 | 相对本项目 |
|------|------|------------|
| AutoGen | conversational/multi-agent runtime | AutoGen 更偏 agent runtime；CopilotKit 更偏最终用户 UI 与 interaction protocol [L1:autogen] |
| CrewAI | role-based agents + Crews/Flows | CrewAI 管 team/workflow；CopilotKit 管这些 agent 如何进入产品交互面 [L1:crewai] |
| Semantic Kernel | enterprise agent/application SDK | Semantic Kernel 更偏 backend orchestration/connectors；CopilotKit 更偏 frontend/AG-UI interaction [L1:semantic-kernel] |

以上为同类目录内的定位级比较，三项均使用本地 wiki 条目；本轮没有重新按同一 10 维框架审计比较对象，表格不构成相对质量 benchmark。

---

## 它能做什么

capability 评分 4/5：

- 提供 chat/headless/generative UI components [GH:readme][Docs:home]。
- 让 agent 读取/修改 shared state，调用 frontend actions，并插入 HITL checkpoints [GH:readme][Docs:home]。
- 通过 AG-UI 接多种 agent backend [Docs:ag-ui]。
- 提供 user-scoped long-term memory 的 runtime endpoints、React hook 与 inspector surface [GH:releases]。
- 通过 Channels 用 JSX-first API 接 Slack、Teams、Discord、Telegram、WhatsApp [Source:channels]。
- 提供 examples、self-hosting、Cloud/observability 路径 [Docs:home]。

不给 5：这些代表广度，不代表每个 backend/channel/memory boundary 都已稳定并实测。

## 运行环境与资源占用

| 场景 | CPU | 内存 | 存储 | 说明 |
|------|-----|------|------|------|
| SDK 使用 | 普通 Node/前端环境 | 随宿主 app/backend | npm/pnpm 依赖未实测 | 模型成本通常外置 |
| Monorepo 开发 | 建议多核 | 中等至偏高 | 18,381 tracked paths | packages/examples/docs 很大 [Source:local-scan] |

- **运行时**：Node >=18，packageManager `pnpm@10.33.4` [Source:package]。
- **Docker**：仓库虽含 Docker-related files，但本轮未验证官方 published image 为主用户路径，故 `docker_support: false`。
- **GPU**：SDK 不需要；模型推理由 backend/provider 决定。
- **存储口径**：不使用当前 clone bytes，因为 assets/LFS materialization 会扭曲比较 [Source:local-scan]。

## 上手体验

评分 4/5。scaffolder、prebuilt UI、docs 和 examples 提供清楚入口 [GH:readme][Docs:home]。真实产品仍要设计 AG-UI transport、tools/actions、auth、state/memory ownership 与 error recovery；对前端团队是合理复杂度，对 demo 用户可能偏重。本轮未实际运行 quick start。

## 代码质量

评分 4/5。Nx/pnpm、typed packages、Vitest、typecheck/lint/format/coverage、Storybook、publint/attw、Channels verification、43 workflows 和 2,103 test-ish paths构成较强静态工程信号 [Source:package][Source:local-scan]。不给 5：未执行 build/tests，跨语言和 18k+ path 的维护复杂度高，backlog 仍显著 [GH:api][GH:languages]。

## 可扩展性

评分 4/5。AG-UI 抽象 backend，headless/components 抽象 frontend，custom state/actions/HITL/memory 扩展应用行为，Channels core/adapters 允许整体或 selective install [Docs:ag-ui][GH:readme][Source:channels]。扩展面很宽，但 Channels 仍是 0.2.x，本轮也未运行任何 adapter/backend integration；因此不按 5 计。

## 文档质量

评分 4/5。README、docs、examples、AG-UI protocol、SECURITY 与 Channels README 覆盖了从概念到 integration 的主要路径 [GH:readme][Docs:home][Docs:ag-ui][Source:channels]。扣分点是 OSS/Cloud/Enterprise/early-access 与多版本线叙事混杂，读者必须核对具体 package/release。

## 社区与成熟度

| 维度 | 评分 | 说明 |
|------|------|------|
| 社区活跃度 | 4/5 | 31,116 stars、4,314 forks、first-page contributors=100、community profile=100%，250 open issues、82 open PRs；可见度和维护活动强，但 backlog 真实 [GH:api][GH:community] |
| 成熟度 | 3/5 | 2023 年创建、562 个 release objects、core v1.63.1；已非 early toy，但 core/Channels/memory surface 仍快速扩张 [GH:releases] |

## 安全与风险

评分 3/5。本轮 repository advisory endpoint 返回空，只是负面查找结果 [GH:advisories]。v1.61.1 release notes 则明确记录 `react-ui` Markdown renderer 的 raw-HTML XSS 修复；这是已修历史漏洞，生产至少应使用 `>=1.61.1`，当前 latest core 为 v1.63.1 [GH:security-release][GH:releases]。

主要风险包括 dynamic UI/Markdown XSS、prompt injection 诱导 tools/actions、state/memory 跨 tenant 泄漏、channel identity spoofing、Cloud telemetry/trace retention。建议 self-host runtime、server-side authorize 每个 action、schema validate/escape output、隔离 memory tenant/user、绑定 channel identity、限制 telemetry，并按 SECURITY policy 报告漏洞 [Source:security]。

## 学习价值

很高。它适合学习 Frontend–Runtime–Agent 分层、event protocol、Generative UI、HITL、state/memory ownership，以及如何把同一 agent interaction model 扩展到 browser 与 messaging channels。可与 MCP（agent-to-tool）和 A2A（agent-to-agent）分层比较。
