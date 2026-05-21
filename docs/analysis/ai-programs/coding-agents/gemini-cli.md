---


title: "Gemini CLI"
created: 2026-05-20
updated: 2026-05-21
type: repository-analysis
repo_url: "https://github.com/google-gemini/gemini-cli"
category: "ai-programs/coding-agents"
tags: ["coding-agent", "cli", "google", "gemini", "typescript", "terminal", "mcp", "sandbox", "github-actions", "gemini-md"]
previous_repo: ""
successor: ""
primary_language: "TypeScript"
license: "Apache-2.0"
stars: 104343
forks: 13725
last_checked: 2026-05-20
last_verified: 2026-05-20
evidence: "GitHub API + official documentation + npm metadata + repository local scan; local repo scan only, not a fresh production deployment test"
archived_reason: ""
docker_support: true
gpu_required: false
estimated_cpu: "low-to-moderate local CPU for TypeScript/Node CLI orchestration; model inference is remote through Gemini/Gemini API/Vertex AI paths documented here"
estimated_memory: "moderate for Node/Ink CLI, workspace scans, long sessions and spawned tools; official docs recommend 4GB+ casual and 16GB+ power usage"
estimated_storage: "npm package metadata reports ~93MB unpacked package; development clone is larger and sandbox images can dominate storage"
status: active
sharing_candidate: true
ratings:
  capability: 5
  usability: 5
  performance: 4
  code_quality: 4
  documentation: 5
  community: 4
  maturity: 2
  extensibility: 5
  security: 3
  recommendation: 4
overall_score: 4.1
sources:
  - "[GH] https://github.com/google-gemini/gemini-cli"
  - "[GH:api] https://api.github.com/repos/google-gemini/gemini-cli queried 2026-05-20; stars=104343, forks=13725, open_issues_count=1771, created_at=2025-04-17, pushed_at=2026-05-20, license=Apache-2.0, default_branch=main"
  - "[GH:issues] GitHub Search API queried 2026-05-20; open issues=1444, open PRs=327, merged PRs since 2026-05-01=204 for repo:google-gemini/gemini-cli"
  - "[GH:languages] https://api.github.com/repos/google-gemini/gemini-cli/languages queried 2026-05-20; TypeScript=19673972, JavaScript=354568, Shell=27988, C#=24798, HTML=5474, Dockerfile=3249"
  - "[GH:releases] https://api.github.com/repos/google-gemini/gemini-cli/releases/latest queried 2026-05-20; latest=v0.42.0 published 2026-05-12, prerelease=false"
  - "[GH:contributors] https://api.github.com/repos/google-gemini/gemini-cli/contributors?per_page=100 queried 2026-05-20; first page contributors=100; top entries include scidomino=388, NTaylorMullen=332, abhipatel12=273, jacob314=273"
  - "[GH:community] https://api.github.com/repos/google-gemini/gemini-cli/community/profile queried 2026-05-20; health_percentage=75; readme, license, contributing and pull_request_template detected"
  - "[GH:local-scan] Local shallow clone /tmp/repo-wiki-batch2/gemini-cli at commit ec4910f0bb6999483784fbdbdf844ae382e1251d dated 2026-05-20; git ls-files=2854; checked README.md, SECURITY.md, CONTRIBUTING.md, GEMINI.md, package.json, docs/tools/mcp-server.md, docs/cli/sandbox.md, docs/cli/headless.md, docs/cli/settings.md; repo contains 44 GitHub workflows; GEMINI.md describes packages/cli, packages/core, a2a-server, sdk, devtools, test-utils and vscode-ide-companion"
  - "[NPM] npm view @google/gemini-cli queried 2026-05-20; version=0.42.0, engines.node=>=20, dist.unpackedSize=93075617, license=Apache-2.0, modified=2026-05-19"
  - "[Docs:overview] https://www.geminicli.com/docs/ extracted 2026-05-20; docs position Gemini CLI as a terminal-based interface for Gemini models with local project context and list features including extensions, agent skills, checkpointing, headless mode, hooks, IDE integration, MCP servers, model routing, plan mode, subagents, sandboxing, telemetry and token caching"
  - "[Docs:installation] https://www.geminicli.com/docs/get-started/installation extracted 2026-05-20; docs list Node.js 20+, macOS/Windows/Ubuntu support, npm/Homebrew/MacPorts/Anaconda install paths, npx execution, Docker/Podman sandbox execution, stable/preview/nightly channels, and 4GB+/16GB+ memory guidance"
  - "[Docs:mcp] https://www.geminicli.com/docs/tools/mcp-server extracted 2026-05-20; docs describe MCP discovery/execution, stdio/SSE/Streamable HTTP transports, resources via @ syntax, settings.json mcpServers, allow/exclude lists, trust flag, includeTools/excludeTools and timeout configuration"
  - "[Docs:sandbox] Local docs/cli/sandbox.md checked 2026-05-20; sandboxing isolates shell/file operations, supports command flag/env/settings, macOS seatbelt, Docker/Podman, Windows sandbox and configurable sandbox image; default Docker image documented as ghcr.io/google/gemini-cli:latest"
  - "[Docs:headless] Local docs/cli/headless.md checked 2026-05-20; headless mode supports non-TTY/-p usage, text/json/jsonl output, usage stats, tool_use/tool_result events and exit codes 0/1/42/53"
  - "[Docs:settings] Local docs/cli/settings.md checked 2026-05-20; settings include plan mode, output format, model/session controls, MCP/resource filtering, sandbox network access default=false, tool output truncation, folder trust, YOLO disabling, permanent approval controls and environment variable redaction"
  - "[GH:advisory:trust] https://github.com/google-github-actions/run-gemini-cli/security/advisories/GHSA-wpqr-6v78-jr5g extracted 2026-05-20; advisory covers @google/gemini-cli and run-gemini-cli, hardens headless folder trust and --yolo tool allowlisting, notes RCE risk in untrusted CI/headless workflows, and states policy engine evaluates allowlists under --yolo starting 0.39.1"
---

# Gemini CLI

> Google 官方开源 terminal AI agent：把 Gemini 模型带进命令行，覆盖代码理解、文件/命令工具、MCP、headless automation、sandbox、GitHub Action/headless workflow 与 IDE 伴随能力。
>
> **状态**: `active` · **总分**: 4.1/5 · **推荐度**: 4/5

## 一句话总结

Gemini CLI 是 Google/Gemini 生态的官方 coding agent，能力面和文档非常强，但项目仍年轻、版本仍在 0.x、高速迭代且存在 headless/CI 信任模型安全历史，因此适合积极试用和学习，不宜无治理地生产放权。

## 总体评价

`google-gemini/gemini-cli` 是 Google 官方开源的终端 AI agent。README 将其定义为“brings the power of Gemini directly into your terminal”，并强调免费额度、Gemini 3、1M token context、内置 Google Search grounding、文件操作、shell commands、web fetching、MCP support、checkpointing、GEMINI.md 与 GitHub Action 集成 [GH][GH:local-scan]。

它与 `openai/codex`、Claude Code 的同类竞争非常直接：都是官方模型厂商推出的 terminal/coding agent。Gemini CLI 的特点是 TypeScript/Node/Ink 生态、Google OAuth/API key/Vertex AI 三种认证路径、官方文档覆盖面极宽，并且在仓库内可见 SDK、A2A server、VS Code companion、devtools、sandbox、headless JSON/JSONL 输出等工程面 [GH:local-scan][Docs:overview][Docs:installation][Docs:headless]。

但它不能被 star 数和 Google 品牌直接推成“成熟稳定”。GitHub API 显示项目创建于 2025-04，NPM 当前版本为 0.42.0，latest release 为 v0.42.0，open issues 超过 1400、open PRs 超过 300；这是高速迭代项目，而不是慢速稳定 infra [GH:api][GH:releases][GH:issues][NPM]。所以整体评价是：能力覆盖面强、生态入口清楚、文档强；成熟度与安全治理必须保守。

## 推荐度：4/5

**定位**：面向已经使用 Gemini / Google Cloud / Vertex AI 生态、希望在终端中使用官方 agent 完成代码理解、修改、自动化、MCP 集成和 CI/GitHub workflow 的开发者与团队。

推荐它，是因为它具备官方模型生态、开源仓库、快速安装、免费额度、完整文档、MCP、sandbox、headless JSON/JSONL 和 GitHub Action 这些关键要素 [Docs:overview][Docs:installation][Docs:mcp][Docs:headless]。不给 5，是因为它仍是 0.x young project，issue/PR backlog 较大，并且已有关于 headless folder trust / `--yolo` allowlist bypass 的安全 advisory；agent 一旦进入 CI 或自动化流水线，风险会上一个量级 [GH:issues][GH:advisory:trust]。

个人开发者可以作为 Claude Code / Codex 之外的重点候选工具试用；团队采用时，应默认启用 sandbox、限制 workspace trust、限制 `--yolo`、明确 MCP server trust 策略，并对 GitHub Action/headless workflow 单独建模。

## 优势

1. **官方 Gemini 生态入口**：Google 官方维护，支持 Google OAuth、Gemini API key、Vertex AI 等认证路径，适合 Google Cloud/Gemini 用户 [GH:local-scan][Docs:installation]。
2. **能力面完整**：代码理解与生成、文件操作、shell commands、web fetch/search grounding、checkpointing、GEMINI.md、GitHub workflows、headless automation、MCP、IDE companion、extensions/skills/subagents 等都有文档或仓库证据 [GH:local-scan][Docs:overview]。
3. **MCP 集成细**：文档明确 discovery/execution layer、stdio/SSE/Streamable HTTP transport、resources、`mcpServers`、allow/exclude lists、`trust`、`includeTools`/`excludeTools` 等配置 [Docs:mcp]。
4. **自动化友好**：headless mode 提供 JSON/JSONL 输出、tool_use/tool_result events 和 exit codes，适合脚本与 CI 集成 [Docs:headless]。
5. **文档与工程组织强**：官方 docs 覆盖 installation、features、configuration、reference、sandbox、settings；仓库 GEMINI.md 说明 monorepo package 边界与开发约定 [Docs:overview][GH:local-scan]。

## 劣势

1. **成熟度不足**：项目创建于 2025-04，当前 NPM 版本 0.42.0；release channel 包含 stable/preview/nightly，说明仍在快速演化 [GH:api][NPM][Docs:installation]。
2. **issue/PR backlog 大**：open issues=1444、open PRs=327，维护压力不小；这会影响 bug 修复、triage 和行为稳定性 [GH:issues]。
3. **Node/TypeScript runtime 较重**：NPM unpacked size 约 93MB，官方对 power usage 建议 16GB+ RAM；相比 Rust 单 binary agent，本地依赖与包体更重 [NPM][Docs:installation]。
4. **安全面宽**：工具会读写文件、执行 shell、访问 web、接 MCP，并可进入 GitHub Actions/headless automation；安全设置虽丰富，但配置错误代价大 [Docs:settings][Docs:sandbox][GH:advisory:trust]。
5. **生态绑定明显**：完整体验默认依赖 Gemini/Google 账户、区域可用性、Gemini Code Assist/Google Cloud/Vertex AI 政策与额度 [GH:local-scan][Docs:installation]。

## 适合什么场景

- 已经在使用 Gemini、Google AI Studio、Gemini Code Assist 或 Vertex AI 的个人开发者和团队。
- 需要 terminal-first coding agent，且希望支持 MCP、sandbox、GEMINI.md、headless automation 与 JSON/JSONL 输出。
- 希望在 GitHub workflow 中使用官方 Gemini agent 进行 PR review、issue triage、scheduled/on-demand automation 的团队。
- 想研究 TypeScript/Node/Ink 形态官方 coding agent 实现的人。
- 对 Google 账户、网络调用和远端模型依赖可接受的工程环境。

## 不适合什么场景

- 需要长期稳定 API/行为、低变更频率的企业基线环境。
- 不能接受 Google/Gemini/Vertex AI 生态绑定或所在地区不受支持的用户。
- 希望本地离线 LLM 完整闭环的场景；Gemini CLI 不是本地模型 runtime。
- 没有能力治理 shell/file/MCP/CI/headless 权限，却想让 agent 自动处理 untrusted PR/issues 的环境。
- 极度关注轻量单 binary、本地最小依赖和低存储占用的用户。

## 与类似项目对比

| 项目 | 定位 | 相对本项目 |
|------|------|-----------|
| Gemini CLI | Google/Gemini 官方开源 terminal AI agent | 本项目；Gemini 生态、TypeScript/Node、MCP/headless/sandbox/GitHub workflow 能力完整，但仍年轻 |
| Codex | OpenAI 官方开源 coding agent | Codex 更贴 OpenAI/ChatGPT 生态；Gemini CLI 更贴 Google/Gemini/Vertex AI，headless JSON/JSONL 与 Google Action 文档更突出 |
| Claude Code | Anthropic 官方 coding agent | Claude Code 更贴 Anthropic/Claude 生态；Gemini CLI 源码更开放，Google 生态/免费额度/Vertex AI 路径明显 |
| OpenCode | 模型无关开源 terminal agent | OpenCode 更偏供应商中立；Gemini CLI 更偏 Google 官方 Gemini/Cloud 入口 |
| Aider | CLI code editing assistant | Aider 更偏轻量 code-editing workflow；Gemini CLI 更偏完整 agent platform surface |

上述项目按 `ai-programs/coding-agents` 同类范围做定位级对比，未按同一 10 维度框架深审。

## 个人主页 sharing 候选

是。Gemini CLI 很适合写成“官方模型厂商如何把 terminal agent 产品化”的 sharing：它把 OAuth/API key/Vertex AI、MCP、sandbox、headless JSONL、GEMINI.md、GitHub Action、IDE companion、extensions/skills/subagents 放进一个官方 CLI 体系。

尤其值得讲的是：Gemini CLI 说明 coding agent 正从“交互式写代码工具”变成“可进入 CI/CD、可被脚本驱动、可接外部工具协议、可被 policy 管控的 agent runtime”。一旦 agent 进入自动化流水线，权限模型便不是附属品，而是核心前提。

## 它能做什么

评分 5/5。

Gemini CLI 的能力覆盖典型 coding agent 主线：理解/编辑大型代码库、生成应用、debug/troubleshoot、执行 shell、文件读写、web fetch/search grounding、MCP 扩展、checkpointing、GEMINI.md 项目上下文、GitHub Action 自动 review/triage、headless automation、settings/policy、sandbox 与 IDE companion [GH:local-scan][Docs:overview][Docs:mcp][Docs:headless]。

给 5 的理由是能力面不是单点功能，而是完整 agent surface；但这里的 5 是“能力广度与官方产品面”评分，不意味着每个能力在所有平台和团队环境中都已达到长期稳定生产级。

## 运行环境与资源占用

评分 4/5。

官方安装文档要求 Node.js 20+，支持 npm、Homebrew、MacPorts、Anaconda、npx、Docker/Podman sandbox 和源码运行；推荐内存为 casual 4GB+、power usage 16GB+ [Docs:installation]。模型推理主要发生在远端 Gemini/Vertex AI，本地 CPU 主要消耗在 Node/Ink UI、workspace scan、tool execution、sandbox 和被 agent 启动的项目命令上。

不给 5，是因为 NPM package unpacked size 约 93MB，Node/TypeScript runtime 与 sandbox image 都比轻量 Rust single-binary agent 更重；同时长上下文、大型 repo、tests/builds、MCP servers 会把实际资源开销转移到 workspace 和外部工具 [NPM][GH:local-scan]。

## 上手体验

评分 5/5。

README 首屏直接给出 `npx @google/gemini-cli`、`npm install -g @google/gemini-cli`、Homebrew、MacPorts、Anaconda 等路径，并清楚列出 Google OAuth、Gemini API key、Vertex AI 三种认证方式 [GH:local-scan]。官方 docs 的 installation / authentication / CLI cheatsheet / tutorials / reference 结构完整 [Docs:overview][Docs:installation]。

对个人用户而言，上手门槛很低；真正复杂的是团队安全治理、MCP trust、headless CI、folder trust、approval mode、quota 和 Google Cloud billing，但这些属于进阶部署，不影响基础体验给高分。

## 代码质量

评分 4/5。

local scan 显示仓库是大型 TypeScript monorepo：2854 tracked files、TypeScript 为主、44 个 GitHub workflows、GEMINI.md 描述 `packages/cli`、`packages/core`、`packages/a2a-server`、`packages/sdk`、`packages/devtools`、`packages/test-utils`、`packages/vscode-ide-companion` 等模块 [GH:languages][GH:local-scan]。package.json 也定义了 build、bundle、lint、typecheck、unit/integration/sandbox/perf/memory tests 和 `preflight` [GH:local-scan]。

不给 5，是因为本次没有跑全量 tests/coverage；项目变更速度快，open issues/PR backlog 大；同时 Node/TS monorepo、sandbox、A2A、SDK、VS Code companion、GitHub workflows 并行扩展会提升复杂度 [GH:issues][GH:local-scan]。

## 可扩展性

评分 5/5。

Gemini CLI 的扩展面很强：MCP server、extensions、agent skills、hooks、GEMINI.md、settings、custom commands、headless JSON/JSONL、SDK、A2A server、VS Code companion 等共同构成扩展体系 [Docs:overview][Docs:mcp][GH:local-scan]。MCP 文档还提供 allow/exclude、trust、includeTools/excludeTools、timeout、env、cwd、headers 等细粒度配置 [Docs:mcp]。

这种扩展性既是优点也是治理负担。对团队而言，它可以成为 policy-governed agent runtime；对个人而言，它容易从“一个 CLI”膨胀成“一个能触达本机、网络、MCP 和 CI 的执行体”。

## 文档质量

评分 5/5。

官方 docs 信息架构完整，覆盖 get started、tutorials、features、configuration、reference、sandbox、settings、MCP、headless、telemetry、token caching 等主题 [Docs:overview]。README 与 local docs 之间也有良好衔接：README 给快速安装和功能概览，docs 给深入配置，GEMINI.md 给 contributor/agent 项目上下文 [GH:local-scan][Docs:installation]。

文档不是问题；风险在于文档覆盖的 product surface 很大，用户容易误以为“能配置”即“已安全配置”。因此安全相关文档必须被当成部署前提，而不是附录。

## 社区与成熟度

社区评分 4/5，成熟度评分 2/5。

社区层面，GitHub API 显示 10 万+ stars、1.3 万+ forks、contributors first page 有 100 人，且 2026-05 以来已有 204 个 merged PR，说明关注度和维护速度都非常强 [GH:api][GH:contributors][GH:issues]。不给 5，是因为 repo 年轻、open issues/PRs 压力显著，community profile health 为 75%，且大型厂商官方项目的社区治理不等于完全开放共建 [GH:community][GH:issues]。

成熟度必须单独压低。项目创建于 2025-04，NPM 版本 0.42.0，官方仍提供 stable/preview/nightly 三轨 release，说明行为和接口还在高速收敛 [GH:api][NPM][Docs:installation]。这不是“不能用”，而是“不能当成稳定平台基石无条件放权”。

## 安全与风险

评分 3/5。

正面：Gemini CLI 明确提供 sandboxing，隔离 shell commands/file modifications，支持 macOS Seatbelt、Docker/Podman、Windows sandbox、custom image；settings 中也有 folder trust、YOLO disable、permanent approval、sandbox network access 默认 false、environment variable redaction、context-aware security 等选项 [Docs:sandbox][Docs:settings]。MCP 配置还有 `trust`、allow/exclude、includeTools/excludeTools 等控制 [Docs:mcp]。

但风险同样实在。GitHub advisory GHSA-wpqr-6v78-jr5g 发布在 `google-github-actions/run-gemini-cli` 仓库下，但内容明确覆盖 `@google/gemini-cli` 与 `run-gemini-cli`，指出旧行为中 headless mode 自动信任 workspace、`--yolo` 忽略细粒度 tool allowlist，可能在 untrusted CI/headless workflow 中通过 prompt injection 或恶意 `.gemini`/env 导致 RCE；advisory 说明 0.39.1 起 policy engine 会在 `--yolo` 下评估 allowlist [GH:advisory:trust]。当前 NPM 版本 0.42.0 高于该修复点，因此这不是当前版本必然仍受同一漏洞影响的证据，而是说明 agent+CI+trust model 的攻击面真实存在 [NPM][GH:advisory:trust]。

实际使用建议：不要在 untrusted PR/issues 上无审查地运行 `--yolo`；headless/GitHub Action 单独建 trust policy；默认 sandbox；默认禁用 sandbox 网络；MCP server 不设盲目信任；敏感 repo 先跑 read-only/plan，再人工审批写操作。

## 学习价值

Gemini CLI 的学习价值很高。它展示了官方模型厂商如何把 terminal agent 工程化：TypeScript/Ink CLI、core tool execution、MCP discovery/execution、headless JSONL event stream、sandbox、settings/policy、GEMINI.md、GitHub workflows、SDK/A2A/IDE companion、release channels 等都在一个 repo 和 docs 体系内可观察 [GH:local-scan][Docs:overview]。

对 Develata 来说，它尤其适合作为“agent infrastructure meets coding agent”的案例：表面是 coding agent，深层是权限、工具、上下文、自动化、CI、MCP 与模型生态的结合。此中关节在 trust boundary；边界若不清，风险会迅速放大。