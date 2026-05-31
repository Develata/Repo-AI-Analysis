---
title: "Agent Governance Toolkit"
created: 2026-05-31
updated: 2026-05-31
type: repository-analysis
repo_url: "https://github.com/microsoft/agent-governance-toolkit"
category: "ai-programs/agent-infrastructure"
tags: ["agent-infrastructure", "ai-safety", "governance", "policy-engine", "zero-trust", "mcp", "compliance", "microsoft", "python", "typescript"]
previous_repo: ""
successor: ""
primary_language: "Python"
license: "MIT"
stars: 3431
forks: 497
last_checked: 2026-05-31
last_verified: 2026-05-31
evidence: "GitHub API + GraphQL metadata + official docs/PyPI extraction + local shallow clone source/docs scan. No dependency installation or full test suite was executed because the monorepo is large and multi-language; claims about package behavior are based on source/docs inspection, not runtime validation. Dockerfile exists but was only verified as a dev/integrated environment path, not as a mature production deployment image."
archived_reason: ""
docker_support: true
gpu_required: false
estimated_cpu: "low for simple policy-evaluator use; medium for sidecar/gateway/dashboard/red-team/SRE workflows; depends on selected packages and deployment topology"
estimated_memory: "low to medium; Python/TypeScript/.NET/Rust/Go SDK usage varies, Docker dev image includes Python + Node + OPA"
estimated_storage: "large for source checkout and dev environment; runtime package footprint depends on extras such as [full], OPA/Cedar, dashboards and examples"
status: active
sharing_candidate: true
ratings:
  capability: 3
  usability: 3
  performance: 3
  code_quality: 3
  documentation: 3
  community: 3
  maturity: 2
  extensibility: 3
  security: 3
  recommendation: 3
overall_score: 2.9
sources:
  - "[GH] https://github.com/microsoft/agent-governance-toolkit"
  - "[GH:api] GitHub API queried 2026-05-31; stars=3431, forks=497, created_at=2026-03-02, pushed_at=2026-05-30, license=MIT, primary_language=Python, latest GitHub release=v3.7.0 published 2026-05-18, security policy enabled, code of conduct present"
  - "[GH:graphql] GitHub GraphQL queried 2026-05-31; default-branch commits=1794, releases=17, tags=21, open issues=18, open PRs=14, vulnerability alerts=0"
  - "[GH:advisories] https://api.github.com/repos/microsoft/agent-governance-toolkit/security-advisories queried 2026-05-31; returned []"
  - "[GH:local-scan] Local shallow clone /opt/data/tmp/repo-wiki-trending-2026-05-31/repos/agent-governance-toolkit at commit 3bfb7a1 dated 2026-05-30; git ls-files=4058, test-ish files=887, workflows=38; inspected Dockerfile, docs, examples, agent-governance-python, TypeScript/.NET/Go/Rust SDK manifests; Dockerfile uses python:3.11-slim digest and OPA checksum but was not built in this review"
  - "[GH:readme] README.md in local clone; marks project Public Preview, describes policy enforcement, identity, sandboxing, SRE, compliance, Agent OS/Mesh/Runtime/SRE/Compliance/Marketplace/Lightning/Hypervisor packages and multi-language SDKs"
  - "[Docs] https://microsoft.github.io/agent-governance-toolkit/ extracted 2026-05-31; navigation covers quickstart, packages, tutorials, deployment, security, compliance, specs, ADRs and benchmarks"
  - "[Docs:quickstart] docs/quickstart.md in local clone; shows pip install, govern() wrapper, YAML policy, framework integrations and agt verify examples"
  - "[Docs:owasp] docs/compliance/owasp-agentic-top10-architecture.md in local clone; explicitly labels OWASP mapping as internal self-assessment, not validated certification or third-party audit; states 8/11 full and 3/11 partial coverage"
  - "[GH:security] SECURITY.md in local clone; includes Microsoft reporting process, threat model, supported versions table, disclosure policy and in-file advisories fixed in v2.1.0"
  - "[GH:governance] GOVERNANCE.md in local clone; describes roles, maintainer path, public decision-making, succession, conflict-of-interest and release process"
  - "[PyPI] https://pypi.org/project/agent-governance-toolkit/ extracted 2026-05-31; package agent_governance_toolkit 4.0.0 released 2026-05-29, Public Preview, unified installer/runtime policy enforcement"
  - "[GH:manifests] Local manifests checked 2026-05-31: agent-governance-toolkit-core pyproject version=4.0.0 Python>=3.11; TypeScript package @microsoft/agent-governance-sdk version=4.0.0 Node>=18; .NET net8.0 package; Go module go1.25; Rust workspace version=4.0.0 rust-version=1.89"
  - "[GH:policy-evaluator] agent-governance-python/agent-os/src/agent_os/policies/evaluator.py inspected 2026-05-31; defines PolicyEvaluator and external backend registration/evaluation paths, but this code path was not executed in this review"
---

# Agent Governance Toolkit

> Microsoft 开源的 AI Agent Governance monorepo：试图把 policy enforcement、identity/trust、audit、sandboxing、SRE、compliance、MCP gateway 与多语言 SDK 组织成一套 agent runtime governance substrate。
>
> **状态**: `active` · **总分**: 2.9/5 · **推荐度**: 3/5
> **核验版本**: GitHub commit `3bfb7a1`；GitHub API / official docs / PyPI / local clone 快照 2026-05-31

## 一句话总结

Agent Governance Toolkit（AGT）是一个野心很大的 agent governance 基础设施仓库：它抓住了“prompt-level safety 不是控制面”这个真实问题，但当前仍是 Public Preview、快速扩张的多语言 monorepo；值得研究其架构与术语，不宜因 Microsoft 背书或 README 叙事直接高分采用 [GH:readme][PyPI]。

## 总体评价

AGT 应归入 `ai-programs/agent-infrastructure`，旁支涉及 security/compliance。它的核心主张是：agent 的工具调用、消息、委托、身份、审计和运行时约束，不应只靠 system prompt 或模型自律，而应由 deterministic application code / policy engine / sidecar / gateway 在模型意图到达外部资源前拦截 [GH:readme][Docs:quickstart]。

这个方向是对的。随着 coding agents、MCP tools、多 agent delegation 和自动化工作流进入真实工程环境，**governance layer** 会成为 agent infrastructure 的重要子层：谁能调用什么工具？什么操作需要审批？如何审计？如何发现 rogue agent？如何把 policy-as-code 接进 LangChain/OpenAI Agents/CrewAI/Claude Code/Copilot CLI/MCP？AGT 的 README、docs 和包目录都围绕这些问题组织 [GH:readme][Docs]。

但 AGT 当前的问题也明显：范围太大，营销式表述很强，仓库短时间内膨胀到 4058 个 tracked files、774 个 Markdown、38 个 workflows、Python/TypeScript/.NET/Go/Rust 多套 SDK 与大量 examples；这既是能力信号，也是复杂度与稳定性风险 [GH:local-scan]。PyPI 页面和 README 都明确标注 Public Preview，API may change before GA；GitHub latest release 仍显示 v3.7.0，而 manifests / PyPI 已到 4.0.0，说明版本与发布节奏正在高速变化 [GH:api][PyPI][GH:manifests]。

结论：AGT 值得加入 wiki，作为 agent governance 方向的重点观察对象；推荐度只给 3，是因为它更像“架构雷达 + 实验候选”，还不是可以无脑引入生产的成熟基础设施。

## 推荐度：3/5

推荐度 3/5。建议 **分析、试点、拆解学习**，不建议直接当作默认生产依赖。

推荐它的理由：

1. 问题方向正确：agent tool-use 的真正控制面应在 prompt 之外，由策略、身份、审计、执行边界承担 [GH:readme][Docs:quickstart]。
2. 能力图谱完整：policy engine、Agent OS、Agent Mesh、Runtime、SRE、Compliance、Marketplace、Hypervisor、MCP Security Gateway、多语言 SDK 和大量 framework integrations 都有对应目录或文档入口；但这仍是源码/文档存在性证据，不等于本轮运行时验证 [GH:readme][Docs]。
3. 治理文件很全：SECURITY、GOVERNANCE、CODE_OF_CONDUCT、MAINTAINERS、AGENTS.md、CODEOWNERS、CI 等信号齐备 [GH:security][GH:governance][GH:local-scan]。
4. 作为研究样本，它展示了 agent governance 领域正在形成的一组 primitive：policy-as-code、DID/trust、tamper-evident audit、human approval、SLO/kill switch、MCP gateway、compliance self-check。

不把推荐度给 4/5 的原因：Public Preview、范围过大、版本节奏快、部分 compliance/coverage 表述属于 self-assessment；本轮没有运行完整测试或实测核心包。对安全基础设施而言，证据不足则宁可下修。

## 优势

1. **抽象层有价值**：把 agent safety 从“提示词请求”提升到 policy enforcement / audit / identity / sidecar / gateway 的工程控制面 [GH:readme][Docs:quickstart]。
2. **生态入口多**：Python unified installer、TypeScript SDK、.NET、Go、Rust、Claude Code / Copilot CLI / OpenCode 等目录或 package manifest 均存在 [GH:manifests][GH:local-scan]。
3. **文档和规范意识强**：官方 docs 覆盖 quickstart、packages、tutorials、deployment、security、compliance、specs、ADRs；repo 内也有 OWASP mapping、SECURITY、GOVERNANCE [Docs][Docs:owasp][GH:security][GH:governance]。
4. **CI / 工程治理信号强**：本地扫描有 38 个 workflows、887 个 test-ish files；主 CI 做 path filtering，覆盖 Python/.NET/TypeScript/Rust/Go/docs/docker 等区域 [GH:local-scan]。
5. **安全威胁模型写得明确**：SECURITY.md 把 trust boundary、policy bypass、identity spoofing、audit tampering、tool-call injection、supply chain compromise 等威胁列出来，并给出 operator guidance [GH:security]。

## 劣势

1. **范围过大，复杂度高**：4058 个 tracked files、852 个目录、多语言 SDK、大量 examples 和 docs；采用者很难一次性判断哪些能力稳定、哪些只是示例或 preview [GH:local-scan]。
2. **Public Preview**：README 与 PyPI 都写明 APIs may change before GA；安全/治理基础设施最怕控制面本身频繁破坏性变更 [GH:readme][PyPI]。
3. **自评与认证必须分开**：OWASP mapping 文档明确说这是 internal self-assessment，不是 validated certification 或 third-party audit；README badge/claim 不能被当成合规证明 [Docs:owasp]。
4. **文档营销语气较强**：例如“ship agents to production without losing sleep”“10/10 covered”等表达需要回到源码和可运行证据核验 [GH:readme][Docs:owasp]。
5. **本轮未做 runtime validation**：没有安装 `agent-governance-toolkit` 的 full extra、没有执行 `agt verify`、没有跑 monorepo CI；因此不能声称功能实测通过。

---

## 适合什么场景

- 研究 agent governance / agent security control plane 的架构与术语。
- 在实验项目中验证 policy-as-code 如何包装 tool function，例如 `govern(my_tool, policy="policy.yaml")` [Docs:quickstart]。
- 给 Claude Code、Copilot CLI、OpenCode、MCP gateway 等 agent tooling 做治理层概念验证。
- 企业安全团队评估 agent runtime controls，需要一个 Microsoft-backed preview project 作为参考样本。
- 编写自己的 agent infrastructure 时，借鉴 policy evaluator、audit chain、trust identity、approval workflow、SRE kill switch 等模块划分。

## 不适合什么场景

- 需要稳定 API、长期兼容承诺和第三方审计证据的生产安全控制面。
- 想找一个小而清晰的 library，只解决单点 policy evaluation；AGT 体量和概念面都偏大。
- 不能接受多语言 monorepo、preview packages、快速版本迭代和潜在 breaking changes 的保守环境。
- 希望 OWASP/合规 claim 直接替代内部审计；官方文档已明确自评不是认证 [Docs:owasp]。
- 缺乏安全工程能力的团队直接把 governance sidecar / gateway 放进敏感生产链路。

## 与类似项目对比

| 项目 | 定位 | 相对本项目 |
|------|------|-----------|
| AGENTS.md | repo-local instruction convention | AGENTS.md 是轻量文本约定；AGT 是 runtime governance / policy enforcement 基础设施 |
| MCP Servers / MCP Gateway | tool protocol / gateway | MCP 解决 tool connection；AGT 试图给 MCP tool calls 加 policy、trust、audit 和 security gateway |
| Open Policy Agent / Cedar | 通用 policy engine | OPA/Cedar 是底层策略语言/引擎；AGT 是 agent-specific wrapper + SDK + docs/examples |
| LangChain / CrewAI / AutoGen | agent framework | 这些框架构建 agent；AGT 试图治理 agent 的工具、身份、审计和可靠性 |
| Enterprise EDR/SIEM/GRC | 安全运营与合规平台 | 更成熟、更重；AGT 更偏开发者/agent runtime 侧的 governance library/toolkit |

## 个人主页 sharing 候选

是，但适合写成“趋势分析”而非“工具推荐”。主题可以是：**Agent governance 的控制面正在从 prompt 迁移到 runtime policy**。AGT 的价值在于把这个趋势显性化；它的风险也在于想一次性覆盖过多层，从而需要保守地拆开验证。

---

## 它能做什么

能力评分 3/5。按 repo/docs/manifests 可见范围，它覆盖面很广；但本轮没有安装依赖或运行核心路径，因此只能按“能力表面存在且需验证”处理：

- **Policy enforcement**：YAML policy、`govern()` wrapper、PolicyEvaluator API、OPA/Rego 与 Cedar backend 入口 [Docs:quickstart][GH:manifests]。
- **Identity / trust / mesh**：Agent Mesh、DID/trust scoring、mTLS/encrypted channels 等文档和 package 描述存在 [GH:readme][GH:manifests]。
- **Audit / compliance**：tamper-evident audit log、OWASP self-assessment、`agt verify`、policy lint、red-team scan 等 CLI/docs 入口 [Docs:quickstart][Docs:owasp]。
- **Runtime / sandbox / SRE**：Agent Runtime、Agent SRE、kill switch、rate limiting、chaos testing、dashboard/examples 等目录和文档入口存在 [GH:readme][GH:local-scan]。
- **Multi-language SDKs**：Python core/unified installer、TypeScript SDK、.NET net8.0 package、Go module、Rust workspace 均有 manifests [GH:manifests]。

不给 4/5 的原因：能力过广但未全部实测；部分模块可能是 preview、deprecated redirect、examples 或文档驱动能力。比如 `agent-os` 与 `agent-mesh` manifests 已标明 deprecated，指向 `agent-governance-toolkit-core` [GH:manifests]。

## 运行环境与资源占用

| 场景 | CPU | 内存 | 存储 | 说明 |
|------|-----|------|------|------|
| 最小 policy wrapper | 低 | 低 | 小到中 | Python package + YAML policy；适合本地试验 `govern()` / PolicyEvaluator |
| SDK / framework integration | 低到中 | 中 | 中 | 取决于 LangChain/OpenAI Agents/CrewAI/MCP 等外部 framework |
| sidecar/gateway/dashboard/dev image | 中 | 中到高 | 大 | Dockerfile 安装 Python、Node、OPA，并构建多语言/dev 环境；monorepo checkout 本身较大 |

- **运行时**：Python package 要求 Python>=3.11（core），TypeScript SDK Node>=18，.NET net8.0，Go 1.25，Rust 1.89 [GH:manifests]。
- **操作系统**：主要是跨平台 library/SDK；Dockerfile 基于 Python 3.11 slim + Node 22 + OPA [GH:manifests]。
- **Docker**：存在 Dockerfile，偏 dev / integrated environment；不是单一轻量服务镜像，也未在本轮 build 验证 [GH:local-scan][GH:manifests]。
- **GPU**：不需要。
- **外部依赖**：pydantic、cryptography、httpx/aiohttp、FastAPI/uvicorn、OPA/Cedar 相关、各 agent frameworks、Node/npm/.NET/Rust/Go 工具链等，按 extras/SDK 不同而变 [GH:manifests]。

performance 给 3：核心 policy evaluation 可以很轻，但完整 AGT stack 不是轻量单库；多语言、多 package、sidecar/gateway/dashboard/examples 带来的运行与维护成本需要按实际采用范围拆分评估。

## 上手体验

评分 3/5。

正面是 quickstart 做得很顺：安装 `agent-governance-toolkit` 的 full extra、两行 `govern(my_tool, policy="policy.yaml")`、YAML policy 示例、framework adapters、`agt verify` 都很直观 [Docs:quickstart]。

扣分在真实采用：

- `agent-governance-toolkit` 的 full extra 可能拉入较大依赖面；
- README 同时列出大量 package/SDK/CLI，初学者不容易判断最小 adoption path；
- policy、identity、audit、MCP gateway、sidecar、approval、compliance 是多层概念，不是 5 分钟真正掌握；
- Public Preview 意味着上手后还要跟踪 API/版本变化 [GH:readme][PyPI]。

所以“demo 上手”接近 4，但“工程采用上手”只能给 3。

## 代码质量

评分 3/5。

正面信号很多：887 个 test-ish files、38 个 workflows、AGENTS.md 分区指导、SECURITY/GOVERNANCE/CODEOWNERS/MAINTAINERS、主 CI path filtering、多语言 package manifests、Dockerfile pin Python base image digest 和 OPA checksum [GH:local-scan][GH:security][GH:governance][GH:manifests]。

但代码质量不能给 4/5：

1. monorepo 非常大，本轮只做抽样阅读，不能确认各包测试质量和覆盖率；
2. 部分 package 是 deprecated redirect 或 migration 状态，例如 `agent_os_kernel`、`agentmesh_platform` 指向 core [GH:manifests]；
3. README/文档覆盖的能力远多于本轮能审计的实现；
4. 当前环境未安装依赖、未运行 CI、未验证 packages 是否能完整安装。

因此给 3：工程治理信号强，但复杂度和未实测面积也大。

## 可扩展性

评分 3/5。

AGT 的扩展面很丰富：YAML policy、OPA/Rego、Cedar、framework adapters、MCP governance、multi-language SDK、examples、CLI、dashboard、docs/specs/ADRs 都为外部集成预留空间 [Docs:quickstart][GH:manifests][Docs]。PolicyEvaluator 源码也显示支持注册 external policy backend，并在没有 YAML rule match 时按顺序查询后端；但该路径本轮只读源码，未运行验证 [GH:policy-evaluator]。

不给 4/5 的原因：扩展面多不等于稳定插件系统。Public Preview 下，API、package layout、语言 SDK 对齐与版本兼容仍需观察；对生产系统而言，扩展点必须绑定稳定性承诺，而不仅是目录存在。

## 文档质量

评分 3/5。

文档是 AGT 的强项之一：README 信息密度高，官方 docs navigation 覆盖 Getting Started、Packages、Tutorials、Deployment、Security、Compliance、Specs、ADRs、Reference；本地 docs 也有 quickstart、OWASP mapping、workshop、policy-as-code、MCP governance、red-team testing 等大量页面 [GH:readme][Docs][Docs:quickstart][Docs:owasp]。

扣分点是文档有明显 marketing pressure：强烈的生产叙事和 badge/coverage 表述容易让读者高估成熟度。好在 OWASP 文档自己写明 internal self-assessment / not certification，这是诚实信号；但文档可信度仍应因 preview 状态和营销口径下修 [Docs:owasp]。

## 社区与成熟度

| 维度 | 评分 | 说明 |
|------|------|------|
| 社区活跃度 | 3/5 | 3.4k stars、497 forks、open issues=18、open PRs=14、commit/release 活跃；但仓库创建于 2026-03，外部长期社区和第三方采用证据有限 [GH:api][GH:graphql] |
| 成熟度 | 2/5 | Public Preview，PyPI 4.0.0 于 2026-05-29 发布，GitHub latest release 仍 v3.7.0；版本节奏快且 API may change before GA [GH:api][PyPI] |

社区给 3 而不是 4，是因为 Microsoft org + star 增长 + commit 数不能直接等价于健康外部生态。成熟度给 2，是因为安全基础设施在 Preview 阶段必须保守。

## 安全与风险

评分 3/5。

AGT 是安全/治理工具，但“安全工具”本身不自动获得高 security score。它坐在 agent 与资源之间，是控制面；一旦 policy engine、sidecar、gateway 或 audit store 配置错误，影响会非常大。

正面信号：

- SECURITY.md 有 Microsoft 报告流程、threat model、scope、severity、90-day disclosure、supported versions 和历史 in-file advisories [GH:security]。
- GitHub repository advisories 本轮返回空，vulnerability alerts 为 0；但这不是独立安全审计 [GH:advisories][GH:graphql]。
- 文档明确建议 policy engine 作为独立进程/sidecar、audit log 外部 append-only、使用 MCP Security Gateway、pin versions / verify provenance [GH:security]。
- Dockerfile 对 Python base image 使用 digest，对 OPA binary 校验 sha256；但它只是本轮源码检查到的 dev/integrated environment 配置，不代表生产镜像已实测可用 [GH:local-scan]。

风险：

1. **控制面风险**：AGT 若被嵌入 agent 同进程，compromised agent 可能影响 policy path；SECURITY.md 自己也建议 sidecar/独立进程 [GH:security]。
2. **Preview API 风险**：安全控制面频繁变化会带来误配置、绕过和升级事故 [PyPI]。
3. **合规 claim 风险**：OWASP mapping 是自评，不是第三方认证；生产/审计必须自行验证 [Docs:owasp]。
4. **依赖面和语言面大**：Python/Node/.NET/Go/Rust/OPA/Cedar/framework adapters 增大供应链审计范围；每个生态的漏洞披露、lockfile、签名和发布链路都需要单独治理 [GH:manifests]。
5. **本轮未运行安全测试**：未执行 `agt verify`、red-team scan、policy bypass tests 或 dependency audit。
6. **版本漂移运营风险**：GitHub latest release 为 v3.7.0，而 PyPI/manifest 已显示 4.0.0；如果 tag、package 和 docs 对齐不清，用户在 CI/CD 中 pin 版本会遇到溯源歧义 [GH:api][PyPI][GH:manifests]。
7. **遥测/数据路径未审计**：AGT 位于 tool call / policy / audit 路径，本轮没有系统搜索是否存在 telemetry、remote reporting 或默认外发行为；生产采用前必须审查数据流。
8. **供应商与项目方向风险**：MIT 开源降低法律锁定，但 Microsoft 项目方向、包名迁移、preview API 和未来商业/生态路线仍可能造成迁移成本。
9. **OWASP 自评时效性风险**：self-assessment 对应的具体 commit/版本未在本轮完全追踪；在快速 release 节奏下，coverage mapping 可能落后于代码或包版本 [Docs:owasp]。

security 给 3：不是因为发现严重漏洞，而是因为控制面重要、preview 状态、attack surface 大，必须谨慎。

## 学习价值

AGT 很值得学习，尤其适合抽象 agent governance 的分层模型：

- prompt 不是 enforcement；policy path 必须 deterministic；
- agent identity / trust / delegation chain 是新控制面；
- tool calls、MCP servers、approval workflows、audit logs、rate limits、kill switches 应该成为 agent runtime 的一等对象；
- compliance mapping 必须区分 self-assessment、evidence 和 third-party audit。

对 Develata 而言，AGT 的最大价值不是“马上用”，而是提供一张高密度地图：agentic systems 一旦进入生产，安全边界会从模型输出扩展到工具、身份、网络、审计、供应链和组织流程。观其大略，取其骨架；至于采用，当以实测为准。