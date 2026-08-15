---
title: "DeepSeek Harness"
created: 2026-08-15
updated: 2026-08-15
type: repository-analysis
repo_url: "https://github.com/deepseek-ai/deepseek-harness"
category: "ai-programs/agents/assistant-agents"
tags:
  - ai-agent
  - agent-harness
  - plugin-architecture
  - self-hosted
  - typescript
previous_repo: ""
successor: ""
primary_language: "TypeScript"
license: "MIT"
stars: 111393
forks: 10776
last_checked: 2026-08-15
last_verified: 2026-08-15
evidence: "code review + official GitHub metadata/CI; no local install, model call, sandbox exercise, or Web UI run"
archived_reason: ""
docker_support: false
gpu_required: false
estimated_cpu: "未实测；建议隔离环境中从 2 vCPU 起评估"
estimated_memory: "未实测；建议隔离环境中从 4GiB 起评估"
estimated_storage: "未实测；Node 依赖、构建缓存与 workspace 数据取决于 profile"
status: active
ratings:
  capability: 4
  usability: 3
  performance: 3
  code_quality: 4
  documentation: 4
  community: 3
  maturity: 1
  extensibility: 5
  security: 3
  recommendation: 3
overall_score: 3.3
sources:
  - "[GH:api-2026-08-15] GitHub REST metadata for deepseek-ai/deepseek-harness queried 2026-08-15: public, not archived/disabled, default_branch=master, created_at=2026-08-13T11:56:32Z, pushed_at=2026-08-13T13:00:21Z, language=TypeScript, MIT, stars=111393, forks=10776, topics include ai-agents/cordis/dsh/dsh-plugin; https://api.github.com/repos/deepseek-ai/deepseek-harness"
  - "[GH:activity-2026-08-15] GitHub GraphQL/API queried 2026-08-15: open issues=0, open PRs=0, closed issues=0, closed PRs=0; Releases endpoint returned an empty list; contributors endpoint returned 22 entries; Discussions enabled but Issues disabled. These are point-in-time metadata, not production-adoption evidence."
  - "[GH:ci-2026-08-15] GitHub Actions queried 2026-08-15: the same master SHA 47f943859bef60e4160492346772ded9b24f765a has successful Release (dsh), Release (vendor), and Sandbox runs. E2E run 31701562200 failed before its test because DEEPSEEK_API_KEY_EXTERNAL was absent; run log explicitly says the suite would otherwise self-skip. A separate ci.yml run 31701568000 is failed with zero jobs and no retrievable log. https://github.com/deepseek-ai/deepseek-harness/actions/runs/31701562200"
  - "[GH:advisories-2026-08-15] GitHub repository security-advisories endpoint returned [] on 2026-08-15. This means only no published repository advisory was found in that endpoint check; it is not evidence that this high-permission agent runtime is safe."
  - "[Local:readme-2026-08-15] Shallow clone at 47f943859bef60e4160492346772ded9b24f765a inspected 2026-08-15: README labels DSH a developer preview with compatibility-breaking changes, documents npx @deepseek-ai/dsh web and source build paths, and directs feedback to Discussions/Discord; https://github.com/deepseek-ai/deepseek-harness/blob/47f943859bef60e4160492346772ded9b24f765a/README.md"
  - "[Local:architecture-2026-08-15] Same clone: docs/architecture.md and packages/README.md describe Cordis plugin composition, profiles/bundles/patch layers, append-only session events, tool/LLM/subprocess/filesystem/sandbox seams, and 50+ package groups; source inspection only, not a runtime validation."
  - "[Local:quality-2026-08-15] Same clone: package.json specifies version 0.1.0-rc.5, Node ^22.19 or >=24, Vitest/typecheck/lint/coverage/hygiene scripts; docs/testing.md describes a per-file coverage gate for packages/*/*/src and layered unit/snapshot/browser/real-API checks; CONTRIBUTING.md says external PRs are not currently accepted. Claimed gates were not executed locally."
  - "[Local:security-2026-08-15] Same clone: user guide says the agent can read/edit workspace files, run commands, delegate, and asks for approval under its active permission policy; sandbox and interaction package READMEs describe per-session confinement and approval/permission seams. No SECURITY.md was found in the inspected checkout; no local sandbox/approval exercise was performed."
  - "[WikiLocal:comparisons] Positioning-only comparison against current local entries /opt/data/wiki/github-repo-wiki/ai-programs/agents/assistant-agents/hermes-agent.md and openclaw.md, read 2026-08-15; those projects were not re-audited in this pass."
---

# DeepSeek Harness

> DeepSeek AI 的 plugin-first agent harness：可运行的 Web/headless agent，同时把 model、tool、session、permission 与 sandbox 都暴露为可组合的插件层。
>
> **状态**: `active` · **总分**: 3.3/5 · **推荐度**: 3/5
>
> **验证边界**：本条目完成 GitHub 元数据、当前源码与 CI 记录审阅；**未**安装 DSH、未配置模型密钥、未运行 Web UI、未触发文件/终端工具，亦未实际检验 approval 或 sandbox 的隔离强度。

## 一句话总结

DeepSeek Harness 适合想在**隔离环境中试验可替换 agent runtime** 的资深开发者：其 plugin/composition 设计很强，但当前仍是 `0.1.0-rc.5` developer preview，不能把源码整洁、Release workflow 或超高 star 数误读为可默认托管真实凭据与生产 workspace 的成熟产品。[Local:readme-2026-08-15][Local:quality-2026-08-15]

## 总体评价

DSH 的分发面已经是一个可直接运行的 agent application：`npx @deepseek-ai/dsh web` 启动 Web UI，headless profile 可执行单次任务；用户文档明确列出 workspace 读写、命令执行、子代理委派与计划维护。它并非仅供 import 的 SDK，因此在本 wiki 中按 end-user assistant-agent 观察；其最显著的技术特征则是把 runtime 本身做成可配置的 harness。[Local:readme-2026-08-15][Local:security-2026-08-15]

架构和工程约束令人认真：Cordis plugin tree、profile/bundle/patch layers、durable session log、Service Definition/Provider/Consumer seams，以及分层测试和生成式文档校验，都比一般新 agent 项目更有形。但 README 同时明确预告 breaking changes；GitHub 仓库创建仅两天、没有 GitHub Releases、公共 Issues 关闭，外部 PR 也暂不接收。故应把它视为一个值得跟踪和试用的 **developer-preview runtime**，不是已完成生态治理的长期依赖。[GH:api-2026-08-15][GH:activity-2026-08-15][Local:architecture-2026-08-15][Local:quality-2026-08-15]

## 推荐度：3/5

**定位**：推荐给能够把它放进独立账号、独立目录和最小权限凭据中，专门评估 agent composition、tool policy 或插件架构的技术用户。

给 3 而不是 4 的原因不在功能少，而在采用边界还没有收敛：项目自称 developer preview 且承诺会破坏兼容；当前远程 E2E run 因缺失 `DEEPSEEK_API_KEY_EXTERNAL` 在真正执行模型测试前失败，所以无法将 CI 绿灯当成 real-model correctness 证据。另一个 `ci.yml` 失败记录没有 job/log，不能据此断言代码回归，却也说明公开 CI 信号尚不能替代独立验收。[Local:readme-2026-08-15][GH:ci-2026-08-15]

结论很简单：**可以在 sandbox 内试用与研究，不应直接接管生产仓库、云控制台、支付账户或长期高价值凭据。** 真正采用前，应亲测默认 permission preset、sandbox fallback、插件供应链和 API-key 的数据边界。

## 优势

1. **插件不是装饰，而是 runtime 的组织原则**：模型适配器、工具注册表、session log、agent loop 都可通过配置组合和 patch layer 替换，避免把扩展逼成 fork。[Local:architecture-2026-08-15]
2. **能力面完整且有可运行入口**：Web UI、headless runner、workspace tools、subagent、plan、sessions、Python SDK 和 ACP 等能力在当前树中都有相应的 product package 或用户入口。[Local:architecture-2026-08-15][Local:security-2026-08-15]
3. **工程纪律可见**：仓库有 typecheck、lint、coverage、snapshot、browser、real-API、hygiene 与 docs gates；测试政策明确区分 mock、真实组合、built artifact 与 real provider 的证据强度。[Local:quality-2026-08-15]
4. **扩展文档很具体**：architecture 文档不仅列功能，还解释 profile、bundle、session event、capability seam 和配置覆盖顺序，适合读者从系统边界理解项目。[Local:architecture-2026-08-15]
5. **MIT 许可**：对自行实验、二次封装和内部评估友好；但不替代模型服务、第三方插件和工具权限的合规审查。[GH:api-2026-08-15]

## 劣势

1. **pre-release 是明示契约**：README 直接写明会有 compatibility-breaking changes，根 package 仍是 `0.1.0-rc.5`，不能承诺配置、插件或 session format 稳定。[Local:readme-2026-08-15][Local:quality-2026-08-15]
2. **高权限 agent 的 blast radius 很大**：文件、命令、委派和插件在同一可组合 runtime 中相互作用；代码存在 permission/sandbox 设计，不等于本轮已验证其默认配置或所有 fallback 都 fail-closed。[Local:security-2026-08-15]
3. **real-API CI 当前不是正证据**：E2E 失败原因为 secret 缺失而非产品 assertion，故当前公开记录既不能证明模型路径失败，也不能证明它已成功覆盖。[GH:ci-2026-08-15]
4. **治理仍封闭**：公开 Issues 关闭且 external PR 暂不接收；星标和 fork 只能证明可见度，不能自动形成可响应、可共同维护的社区。[GH:activity-2026-08-15][Local:quality-2026-08-15]
5. **运行条件偏新且未量化**：要求 Node 22.19+，并混合本地进程、浏览器、模型 API 和插件；没有在本轮得到可复现实测的 RSS、冷启动或并发吞吐数据。[Local:quality-2026-08-15]

---

## 适合什么场景

- 在 disposable VM/container 中研究 **plugin-first agent runtime**、session event sourcing 或 provider seam 的实现。
- 为内部实验建立一个受控的 Web/headless agent，并愿意自行审计 tool/permission/sandbox 配置。
- 编写或评估 DSH plugin、bundle、profile patch，尤其是希望替换模型、工具、存储或子代理 provider 的场景。
- 学习怎样把 agent 的 approval、session persistence、tool schema 与 compositional configuration 写成可测试的工程系统。

## 不适合什么场景

- 需要稳定 public API、长期不迁移的 session/config format，或必须接受外部 PR 的开源协作项目。
- 把 agent 直接连到生产 secrets、财务流程、组织云控制台、企业内部网或不可逆运维入口。
- 希望零配置、无需理解 Node/API key/workspace/permission 的普通用户。
- 需要已通过独立 benchmark、稳定 release 和长周期生产使用验证的 agent platform。

## 与类似项目对比

| 项目 | 定位 | 相对本项目 |
|------|------|-----------|
| Hermes Agent | 长期运行、skills/memory/cron/channel 集成的通用 assistant agent | DSH 更突出 Cordis plugin tree、bundle/profile patch 与 agent-runtime 内部组合；Hermes 的定位更偏长期个人 agent 运行与多工具总控。 |
| OpenClaw | 多通道 Gateway / personal agent ecosystem | DSH 当前公开入口更集中于 Web/headless runtime 与可替换 capability；OpenClaw 的分析条目更强调渠道和生态面。 |

上述项目均按 `ai-programs/agents/assistant-agents` 的同类范围做**定位级**对比，依据本地既有条目的标题级定位与分类语境，不是本轮重新进行的 10 维度审计。[WikiLocal:comparisons]

---

## 它能做什么

- 启动本地 Web UI 或 headless profile，并让 agent 在选定 workspace 中读写文件、运行命令、委派任务和维护计划；哪些操作需要确认由 active permission policy 决定。[Local:readme-2026-08-15][Local:security-2026-08-15]
- 用 profiles、bundles、`cordis.patch.yml` 和 CLI overlay 在启动时改变 agent composition；同一 capability 可替换 provider，而不必改动 agent loop。[Local:architecture-2026-08-15]
- 组合 LLM、tool registry、filesystem、subprocess、terminal、LSP、sandbox、skill、web、subagent、session、settings/credentials、approval/interaction 等 package families。[Local:architecture-2026-08-15]
- 以 append-only session event log 为会话事实源，派生 transcript、telemetry、fork/resume、persistence 与模型可见 history。[Local:architecture-2026-08-15]
- 通过 Python SDK 和 automation-oriented ACP/JSON-RPC surfaces 接入其它 client；这些 surface 在源码中存在，但本轮没有运行互操作测试。[Local:architecture-2026-08-15]

能力评分 4/5：覆盖面已经很广，但没有把 README 的功能清单直接等同为已被本轮验证的 production behavior。

## 运行环境与资源占用

| 场景 | CPU | 内存 | 存储 | 说明 |
|------|-----|------|------|------|
| 最小 | 未实测 | 未实测 | 未实测 | Node 22.19+ / 24+、模型 API 与一个受控 workspace；适合先跑最小 profile。 |
| 推荐 | 2 vCPU（启发式） | 4GiB（启发式） | 5GiB+（启发式） | 预留 pnpm 依赖、构建缓存、agent process 与浏览器/工具并发的余量；不是 benchmark。 |

- **运行时**：Node.js `^22.19.0 || >=24.0.0`，pnpm workspace；根 package 版本为 `0.1.0-rc.5`。[Local:quality-2026-08-15]
- **操作系统**：本轮只确认 Linux/Windows CI paths 与本地 Node tooling，未取得官方完整 support matrix，故不把所有平台视为等价已验证。[Local:quality-2026-08-15]
- **Docker**：`false`。本轮源码扫描未找到 Dockerfile，README 的官方运行路径是 `npx`/source checkout；不能因项目含 sandbox 概念就推定存在正式 container image。[Local:readme-2026-08-15]
- **GPU**：不要求。官方用户入口要求配置 DeepSeek API key 或其它兼容 provider；本条目不把远端模型算作本机 GPU 需求。[Local:security-2026-08-15]
- **外部依赖**：模型 provider/API key；filesystem、shell、浏览器、subagent 等能力还会放大宿主环境的权限与运维成本。[Local:architecture-2026-08-15]

## 上手体验

评分 3/5。

`npx @deepseek-ai/dsh web` 是很好的首个入口，Web guide 也按「配置模型 → 选择 workspace → 运行任务」给出最短路径。问题在于，首次获得价值仍需要新版本 Node、模型 API key、可被 agent 操作的目录，以及理解 permission policy；这不是普通桌面聊天应用的零配置体验。[Local:readme-2026-08-15][Local:security-2026-08-15]

此外，开发者预览的 breaking-change 预告意味着今天能跑的 profile/patch 并不能自动成为明天可迁移的工作流。对技术用户而言这可接受；对需要稳定日常工具的人则是实质成本。

## 代码质量

评分 4/5（限于源码与 CI 证据）。

- 在由 50+ package groups 组成的大型 monorepo 中，package family、Service Definition/Provider/Consumer、session event 与生成式 catalog 的边界仍可追踪；这比把所有 agent behavior 塞进单一 loop 更易维护。[Local:architecture-2026-08-15]
- `package.json` 和 testing policy 展示了可观的质量门：Vitest、类型检查、lint、clone detection、documentation checks、built-artifact smoke、browser snapshot 与 real-API e2e 均有明确职责；测试文档也明确承认 line coverage 不能证明 shipping behavior。[Local:quality-2026-08-15]
- GitHub CI 同一 SHA 上有成功的 release/sandbox workflow，说明至少部分 artifact/automation lane 在运行；但 real-API lane 因仓库 secret 缺失没有执行模型测试，不能将其计为 E2E success。[GH:ci-2026-08-15]

扣分不是否定架构，而是证据边界：本轮未构建、未运行测试，且开发阶段的大 monorepo 正在快速收敛。`4/5` 表示结构与测试意图良好，不表示已获得长期生产可靠性证明。

## 可扩展性

评分 5/5。

这是项目最强的一维。Cordis 使 model adapter、tool、session、agent loop 与 policy 处在同一种 plugin/context/effect 模型内；profile/bundle/patch 能按层叠加或替换配置，Service Definition/Provider/Consumer seam 避免 consumer 绑死具体 implementation。文档还具体列出如何添加 model provider、model-facing tool、shell/terminal/filesystem/sandbox、human command、background job、UI/client 与 durable session state。[Local:architecture-2026-08-15]

代价也很明确：可替换的能力越多，组合状态、兼容性和供给链的审计面越大。高可扩展性不是默认安全性。

## 文档质量

评分 4/5。

README 提供英文/中文入口、最小启动命令、community/contributing 边界；architecture 文档解释 composition、turn flow、session log 和 extension points；testing policy 区分 unit、coverage、real API、snapshot、browser 与 built-artifact 的证据角色。对贡献者和插件作者而言，信息架构明显强于多数同龄 agent repo。[Local:readme-2026-08-15][Local:architecture-2026-08-15][Local:quality-2026-08-15]

仍扣一分：用户侧 Web guide 很短，且项目预览期变化速度很快；本轮没有完成安装或文档命令 smoke，所以不能把文档完整性提升为 5/5。

## 社区与成熟度

| 维度 | 评分 | 说明 |
|------|------|------|
| 社区活跃度 | 3/5 | 2026-08-15 快照有 111,393 stars、10,776 forks、22 个 contributors endpoint 条目、Discussions 与 Discord；但 Issues 关闭、外部 PR 暂不接收，无法把高可见度等同为开放且经验证的协作社区。[GH:api-2026-08-15][GH:activity-2026-08-15][Local:quality-2026-08-15] |
| 成熟度 | 1/5 | GitHub 创建于 2026-08-13，根包仍为 `0.1.0-rc.5`，README 明示 developer preview 和 breaking changes，且 GitHub Releases endpoint 为空；这正是 pre-release 级成熟度。[GH:api-2026-08-15][GH:activity-2026-08-15][Local:readme-2026-08-15] |

## 安全与风险

评分 3/5。

正面信号是源码明确提供 per-session sandbox policy、human approval、permission presets 和 session-persistent interaction surfaces；Web guide 也说明受 policy 约束的操作会要求确认。[Local:security-2026-08-15]

但该分数不能更高：

1. agent 被设计为能读写 workspace、执行命令并委派工作，天然拥有远超普通聊天客户端的攻击面；恶意 prompt、插件、网页/tool output、错误的 permission preset 都可能改变 blast radius。
2. 本轮没有实际运行 sandbox、没有验证 sandbox unavailable 时的 fail-closed 行为，也没有验证 approval bypass、凭据隔离或 plugin installation 的供应链控制。
3. 未发现 `SECURITY.md`；GitHub advisories endpoint 的空数组只是一次负向查询，不能证明没有逻辑漏洞、依赖漏洞或操作配置风险。[GH:advisories-2026-08-15][Local:security-2026-08-15]

因此实际试用应使用独立 OS account/container、非生产 API key、目录 allowlist 与明确的人工确认，而不是把 preview agent 当作可信自动运维主体。

## 学习价值

**很高。** 即使暂不部署，DSH 也值得作为 agent runtime 的架构样本：

- 以 plugin composition 而不是 privileged core 组织模型、工具和状态；
- 用 append-only session events 约束「model-visible means logged」；
- 将 capability 拆成 definition/provider/consumer，避免基础设施抽象与具体工具耦合；
- 在测试政策中明确区分 mock、real composition、built artifact 和 live-provider 证据。

其中最值得借鉴的不是“everything is a plugin”这句口号，而是它把替换、卸载、session persistence、approval 与测试证据放入同一个可追踪的系统模型。[Local:architecture-2026-08-15][Local:quality-2026-08-15]
