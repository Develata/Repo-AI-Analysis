---


title: "Cline"
created: 2026-05-20
updated: 2026-07-17
type: repository-analysis
repo_url: "https://github.com/cline/cline"
category: "ai-programs/agents/coding-agents"
tags: ["coding-agent", "vscode", "cli", "tui", "mcp", "sdk", "plugins", "checkpoints", "kanban", "typescript"]
previous_repo: ""
successor: ""
primary_language: "TypeScript"
license: "Apache-2.0"
stars: 64728
forks: 6926
last_checked: 2026-07-17
last_verified: 2026-07-17
evidence: "Current GitHub API/README/advisories + official docs index + npm metadata; historical 2026-05 local scan retained; no fresh production deployment test"
archived_reason: ""
docker_support: false
gpu_required: false
estimated_cpu: "low-to-moderate local CPU for IDE/CLI/TUI orchestration; spawned commands/tests and remote model calls dominate actual workload"
estimated_memory: "moderate for VS Code/webview/TUI runtime plus workspace context; large repositories and checkpoints increase memory/storage pressure"
estimated_storage: "local shallow clone 80M with 3192 tracked files; checkpoints use a shadow Git repository and may grow on large tasks"
status: active
ratings:
  capability: 4
  usability: 4
  performance: 4
  code_quality: 4
  documentation: 5
  community: 5
  maturity: 3
  extensibility: 5
  security: 2
  recommendation: 4
overall_score: 4.0
sources:
  - "[GH] https://github.com/cline/cline"
  - "[GH:api] https://api.github.com/repos/cline/cline queried 2026-07-17; canonical full_name=cline/cline, archived=false, disabled=false, stars=64728, forks=6926, created_at=2024-07-06, pushed_at=2026-07-16, primary language=TypeScript, license=Apache-2.0, default_branch=main"
  - "[GH:issues] GitHub Search API queried 2026-07-17; open issues=635 and open PRs=626 for repo:cline/cline"
  - "[GH:languages] https://api.github.com/repos/cline/cline/languages queried 2026-07-17; TypeScript=16569727, JavaScript=333510, CSS=48727, Rust=44257, HTML=35842, Shell=19413, Python=7735"
  - "[GH:releases] https://api.github.com/repos/cline/cline/releases/latest queried 2026-07-17; latest=cli-v3.0.42 published 2026-07-16; release body records an Ollama native API routing fix"
  - "[GH:contributors] https://api.github.com/repos/cline/cline/contributors?per_page=100 queried 2026-05-20; first page contributors=100; top entries include saoudrizwan=1962, abeatrix=782, celestial-vault=374"
  - "[GH:community] https://api.github.com/repos/cline/cline/community/profile queried 2026-07-17; health_percentage=100; README, license, CONTRIBUTING, CODE_OF_CONDUCT and PR template detected"
  - "[GH:advisories] https://api.github.com/repos/cline/cline/security-advisories?per_page=100 queried 2026-07-17; returned 3 published advisories: GHSA-5c57-rqjx-35g2 critical Kanban WebSocket hijack, GHSA-9ppg-jx86-fqw7 low unauthorized cline@2.3.0 publish, and new GHSA-3cj3-hqcr-g934 high Cline Hub dashboard /browser cross-origin WebSocket hijack"
  - "[GH:advisory:hub] https://github.com/cline/cline/security/advisories/GHSA-3cj3-hqcr-g934 and API metadata checked 2026-07-17; affected npm package cline <=3.0.24; GitHub API patched_versions is empty even though current cli-v3.0.42 lies above the affected range, so exact remediation semantics should be checked at advisory/release level before operation"
  - "[GH:readme] https://github.com/cline/cline/blob/main/README.md fetched through GitHub Contents API 2026-07-17 at blob 055918ffa093d18ac4876ea34dbe1a92598710d5; current product matrix covers CLI, separate cline/kanban repo, VS Code, JetBrains and SDK; README states the JetBrains plugin is currently not open-sourced and documents teams, scheduling and chat connectors"
  - "[GH:local-scan] Historical local shallow clone /tmp/repo-wiki-batch6/cline at commit 015b61924f3fe32a732e3aa390066e2d1574f53b dated 2026-05-20; git ls-files=3192; checked README.md, SECURITY.md, CONTRIBUTING.md, package.json and LICENSE; SECURITY.md points to Bugcrowd VDP and security@cline.bot; retained for structural claims, not current product-boundary/count claims"
  - "[NPM:cli] npm view cline queried 2026-07-17; version=3.0.42, license=Apache-2.0, dist.unpackedSize=33436"
  - "[NPM:sdk] npm view @cline/sdk queried 2026-07-17; version=0.0.62, engines.node=>=22, license=Apache-2.0"
  - "[Docs:index] https://docs.cline.bot/llms.txt extracted 2026-07-17; docs map now explicitly includes Agent Teams, connectors, scheduling, SDK plugin/permission APIs, MCP, IDE/CLI/TUI/Kanban, enterprise controls and observability"
  - "[Docs:install] https://docs.cline.bot/getting-started/installing-cline extracted 2026-05-20; installation paths include IDE Extension, CLI, Kanban preview and SDK"
  - "[Docs:tui] https://docs.cline.bot/usage/tui extracted 2026-05-20; TUI supports interactive terminal workflows, Plan/Act toggle, auto-approve toggle, slash commands and @file mentions; page also distinguishes TUI from headless JSON/piped stdin/stdout/CI-script workflows"
  - "[Docs:checkpoints] https://docs.cline.bot/core-workflows/checkpoints extracted 2026-05-20; checkpoints are enabled by default and use a shadow Git repository separate from the project Git history"
  - "[Docs:plugins] https://docs.cline.bot/customization/plugins extracted 2026-05-20; plugins extend Cline with tools, lifecycle hooks and slash commands for SDK/CLI/Kanban, installable from Git, npm or local paths"
---

# Cline

> 多入口 autonomous coding agent：以 VS Code/IDE extension 为核心，同时提供 CLI/TUI、SDK、Kanban、MCP、plugins、checkpoints 与多模型 provider 接入。
>
> **状态**: `active` · **总分**: 4.0/5 · **推荐度**: 4/5
> **核验版本**: CLI/npm `3.0.42`；GitHub API、README、advisories 与官方 docs index 快照 2026-07-17

## 一句话总结

Cline 是当前开源 coding-agent 生态里功能面最宽的一类项目之一：它把 IDE 侧审阅/批准、CLI/TUI 自动化、MCP 工具、插件、skills、checkpoints、subagents 和 Kanban 并入同一产品线；但其权限面很大，且已有 critical security advisory，团队使用必须先做安全边界治理。

## 总体评价

`cline/cline` 当前 README 将 Cline 定义为“IDE 与 terminal 中的 open source coding agent”，产品矩阵包括 CLI、VS Code、JetBrains、SDK 与独立的 `cline/kanban` 仓库；CLI/SDK 继续覆盖创建或编辑文件、执行命令、浏览器、headless automation 等能力 [GH:readme][NPM:cli]。官方文档还把它扩展为 TUI、MCP、plugins、hooks、skills、rules、agent teams、scheduling、connectors 与 enterprise controls 等多个 surface [Docs:index]。需要分清：核心仓库是 Apache-2.0，但 README 明示 JetBrains plugin 当前不开放源码，因此“Cline 产品线开源”不等于每个客户端 surface 都可审计 [GH:readme]。

这使 Cline 与 Claude Code / Codex / Gemini CLI 这种“官方模型生态 agent”不同：Cline 更像一个 multi-provider、editor-first、tool-rich 的 agent runtime。它不是单纯 chat sidebar，而是试图把文件修改、终端命令、浏览器、MCP、插件和任务编排纳入 IDE/CLI workflow [Docs:index][Docs:plugins]。

高分来自功能广度、文档、社区和扩展性：6.4 万+ stars、GitHub community profile health 100%，官方 docs 的信息架构也很完整 [GH:api][GH:community][Docs:index]。主要扣分来自成熟度和安全：项目创建于 2024-07，版本快速滚动，open issues=635、open PRs=626；除既有 Kanban critical advisory 与 npm unauthorized publish 外，2026-06 又披露 Cline Hub dashboard `/browser` 的 high severity cross-origin WebSocket hijack [GH:issues][GH:releases][GH:advisories][GH:advisory:hub]。

## 推荐度：4/5

**定位**：适合想在 IDE / terminal 中使用多模型 autonomous coding agent，并愿意显式治理 agent 权限、插件、MCP、自动批准策略的开发者或小团队。

推荐它，是因为 Cline 的能力面确实宽：IDE extension、CLI/TUI、headless automation、独立 Kanban、SDK、MCP、plugins、checkpoints、subagents/agent teams 这些组合，使它既能作为个人 coding copilot，也能作为 agent workflow 实验平台 [GH:readme][Docs:index][Docs:tui][Docs:plugins]。

不直接给 5，是因为安全风险不可忽略。Cline 会读写文件、运行命令、使用浏览器和 MCP tools，权限面天然大；Kanban 与 Hub dashboard 均出现过 cross-origin WebSocket hijack，CLI 包也发生过 unauthorized publish [GH:advisories][GH:advisory:hub]。换言之，它很有价值，但不适合无治理的团队级 rollout，也不应在敏感仓库里无边界开启 auto-approve / YOLO 式使用。

## 优势

1. **能力面极宽**：IDE、CLI、TUI、Kanban、SDK、API、MCP、plugins、hooks、skills、subagents、agent teams、scheduling 与 connectors 都在 README/docs 中形成体系 [GH:readme][Docs:index]。
2. **editor-first 体验完整**：VS Code package metadata 描述其能创建/编辑文件、运行命令、使用 browser，并强调每一步批准；walkthrough 中也强调计划、理解代码库、MCP、用户控制 [GH:local-scan]。
3. **多模型与工具生态**：package keywords 和 docs 都显示 Cline 支持 Anthropic、Gemini、OpenAI、OpenRouter、本地模型/MCP 等多种接入路径 [GH:local-scan][Docs:index]。
4. **安全回滚机制有设计**：checkpoints 默认启用，用 shadow Git repository 捕获 agent 修改后的项目状态，可 rollback 文件而保留 conversation [Docs:checkpoints]。
5. **扩展机制强**：plugins 可从 Git/npm/local path 安装，扩展 custom tools、lifecycle hooks、slash commands；MCP、rules、skills、hooks 又提供另一层定制面 [Docs:plugins][Docs:index]。
6. **社区关注度高**：6.4 万+ stars、6.9k forks，仓库在 2026-07-16 仍有 push，latest CLI release 为 3.0.42 [GH:api][GH:releases]。

## 劣势

1. **安全风险高于普通 IDE 插件**：Cline 的核心能力就是改文件、跑命令、接工具和浏览器；这意味着 prompt injection、工具误用、secret 泄露和供应链风险都更现实 [NPM:cli][GH:advisories]。
2. **已有 critical/high advisories**：GHSA-5c57-rqjx-35g2 涉及 Kanban server，GHSA-3cj3-hqcr-g934 涉及 Cline Hub dashboard `/browser`；后者 API 标记影响 `cline <=3.0.24`，但没有给出 `patched_versions`，运维时不能仅凭“当前版本号更高”替代 advisory-level 核验 [GH:advisories][GH:advisory:hub]。
3. **快速演进带来稳定性成本**：CLI release 和 extension release 高频滚动，open issues/PRs 较多；团队标准化部署需要锁版本和验证升级 [GH:issues][GH:releases]。
4. **多 surface 增加理解成本**：IDE、CLI、TUI、Kanban、SDK、API、plugins、MCP、hooks、skills 并存，初学者容易混淆哪些能力在哪个入口可用 [Docs:index][Docs:install]。
5. **checkpoints 不是万能安全边界**：shadow Git 能 rollback 文件修改，但不能撤销外部命令副作用、网络调用、数据库修改、泄露的 secrets 或第三方服务状态变化 [Docs:checkpoints]。

---

## 适合什么场景

- 想在 VS Code / Cursor / Windsurf / JetBrains 等 IDE 中使用 autonomous coding agent 的开发者 [Docs:install]。
- 希望同一 agent 同时覆盖 IDE 交互、terminal TUI、headless automation 和 SDK embedding 的用户 [Docs:index][Docs:tui]。
- 需要多模型 provider、MCP server、plugins、custom rules / skills / hooks 的团队 [Docs:index][Docs:plugins]。
- 想实验 parallel agent / Kanban / subagents / checkpoints 等 coding-agent workflow 的用户 [Docs:index][Docs:checkpoints]。
- 对 agent 输出愿意做 human-in-the-loop review，而不是默认全自动接受修改的项目。

## 不适合什么场景

- 不能承受 agent 读写代码、执行 shell、接浏览器或 MCP tools 的高敏环境。
- 希望一个长期稳定、低变更、API/surface 很少变化的企业标准化工具。
- 没有能力治理版本锁定、provider key、MCP 权限、插件来源、auto-approve 策略的团队。
- 完全追求轻量 terminal-only code editing 的用户；Aider / Codex CLI / Gemini CLI 可能更直接。
- 希望本地离线模型完整闭环的用户；Cline 可以接本地模型，但它自身不是 local LLM runtime。

## 与类似项目对比

| 项目 | 定位 | 相对本项目 |
|------|------|-----------|
| Cline | multi-provider IDE/CLI coding agent | 本项目；功能面极宽，IDE 体验与扩展面强，但安全治理复杂 |
| Claude Code | Anthropic 官方 CLI/IDE coding agent | Claude Code 更深绑定 Claude 官方生态；Cline 更供应商中立、插件/MCP surface 更宽 |
| Codex | OpenAI 官方开源 coding agent | Codex 更贴 OpenAI/ChatGPT 生态；Cline 更偏 IDE-first、多模型和插件生态 |
| Gemini CLI | Google 官方 terminal agent | Gemini CLI 更偏 terminal-first 与 Google provider；Cline 更偏 editor-first 和多入口 agent runtime |
| Continue | 开源 AI coding assistant / checks | Continue 更偏 coding assistant + CI checks；Cline 更强调 autonomous action、commands、MCP 和 checkpoints |
| Aider | terminal pair-programming assistant | Aider 更轻、更专注 git/code editing；Cline 更重、更产品化、能力面更宽 |

上述项目按 `ai-programs/agents/coding-agents` 同类范围做定位级对比，未按同一 10 维度框架深审。

---

## 它能做什么

评分 4/5。

Cline 覆盖 coding agent 的主要能力：读写代码、运行命令、使用浏览器、多模型 provider、IDE extension、CLI、TUI、headless automation、SDK embedding、独立 Kanban、MCP、plugins、hooks、rules、skills、subagents、agent teams、scheduled agents、messaging connectors、checkpoints 和 slash commands [GH:readme][Docs:index][Docs:tui][Docs:plugins][Docs:checkpoints]。

Cline 的覆盖面在同类中仍然很高，因此 capability=4；但项目创建时间较短，各 surface 成熟度不均，Kanban 位于独立仓库，JetBrains client 又不开放源码。本轮没有对所有入口做同深度生产验证，不能把产品线广度直接等同于单一仓库的满分能力。

## 运行环境与资源占用

评分 4/5。

| 场景 | CPU | 内存 | 存储 | 说明 |
|------|-----|------|------|------|
| 最小 | 低 | 中 | 数百 MB 级 | VS Code extension / CLI 基础使用；模型多为远端 provider，local CPU 主要跑 orchestration |
| 推荐 | 中 | 中到高 | 随仓库和 checkpoints 增长 | 大仓库、多任务、checkpoints、MCP tools、browser/terminal 使用会增加资源峰值 |

- **运行时**：VS Code/IDE extension、Node.js CLI/TUI、SDK；package metadata 显示 CLI npm 包很小，但实际工作负载来自 workspace 与外部命令 [NPM:cli][GH:local-scan]。
- **操作系统**：IDE/Node 可跨平台；contributing 文档列出 Linux VS Code extension tests 所需 GUI/system libraries [GH:local-scan]。
- **Docker**：仓库主线不是 Docker-first 部署。
- **GPU**：不需要本地 GPU；若接本地模型则由外部 runtime 决定。
- **外部依赖**：模型 provider/API key、MCP servers、插件、浏览器/terminal、Git/checkpoint shadow repo 等 [Docs:index][Docs:plugins][Docs:checkpoints]。

## 上手体验

评分 4/5。

安装路径清晰：VS Code extension、JetBrains Marketplace、CLI `npm install -g cline`、SDK `npm install @cline/sdk` 与独立 `cline/kanban` 的 `npx kanban@latest` 均有明确入口；但 JetBrains plugin 当前不开放源码 [GH:readme][Docs:install]。TUI 文档给出了 `cline` / `cline -i`、slash commands、Plan/Act toggle、auto-approve toggle 和 `@file` context 入口 [Docs:tui]。

不给 5，是因为 Cline 的产品面非常大，用户必须理解 provider、approval、MCP、plugins、rules、skills、hooks、checkpoints、Kanban、TUI/headless 等差异。基础上手快，但安全/治理正确上手不轻。

## 代码质量

评分 4/5。

local scan 显示仓库以 TypeScript 为主，含 JavaScript、少量 Rust、CSS/HTML/Shell/Python；有 README、SECURITY.md、CONTRIBUTING.md、CODE_OF_CONDUCT、PR template，community profile health 100% [GH:languages][GH:local-scan][GH:community]。CONTRIBUTING.md 说明了开发 setup、protos、lint、format、unit/integration/E2E tests 和 Linux GUI libs [GH:local-scan]。

不给 5，是因为本次没有跑完整测试/覆盖率；同时 repo size 较大、surface 多、open PR/issue backlog 大，长期维护复杂度高 [GH:issues][GH:local-scan]。

## 可扩展性

评分 5/5。

Cline 的扩展面非常强：MCP、plugins、hooks、rules、skills、connectors、SDK、API、subagents 都在文档 index 中出现 [Docs:index]。plugins 文档说明插件可以扩展 custom tools、lifecycle hooks、slash commands，并支持 Git/npm/local path 安装；manifest 可声明 capabilities，且有 project/global 两层插件目录 [Docs:plugins]。

这使 Cline 不只是一个 coding UI，而可以被当作 agent runtime / tool-host 来改造。但扩展性越强，权限治理越重要。

## 文档质量

评分 5/5。

官方 docs 有 `llms.txt` 索引，清楚列出 Cline、SDK、Enterprise、API、getting started、usage interfaces、tools/rules/skills/plugins/MCP/hooks、features 和 troubleshooting 等模块 [Docs:index]。安装、TUI、checkpoints、plugins 等关键能力均有单页说明 [Docs:install][Docs:tui][Docs:checkpoints][Docs:plugins]。

README 较短但足够定位，仓库内 SECURITY/CONTRIBUTING 也齐全 [GH:local-scan]。对用户、插件作者和团队治理者而言，文档质量是明显优势。

## 社区与成熟度

| 维度 | 评分 | 说明 |
|------|------|------|
| 社区活跃度 | 5/5 | 64k+ stars、6.9k forks、community health=100、仓库与 release 高频更新；但 635 open issues / 626 open PRs 说明治理压力很高 [GH:api][GH:issues][GH:community][GH:releases] |
| 成熟度 | 3/5 | 创建于 2024-07，版本和 surface 仍快速演化；CLI 3.0.42、独立 Kanban、agent teams、scheduling、connectors 与 SDK surfaces 同时推进 [GH:api][GH:releases][GH:readme][Docs:index] |

## 安全与风险

评分 2/5。

Cline 的安全风险来自两层：一是 coding agent 天然会读写文件、运行命令、接 browser/MCP/tools；二是项目已有明确 advisory 记录。本轮 endpoint 返回 3 条：critical Kanban WebSocket hijack、high Hub dashboard WebSocket hijack、low unauthorized npm publish [GH:advisories]。其中 Hub advisory 的 API metadata 给出受影响范围 `<=3.0.24` 却未给 patched version；latest 3.0.42 高于该范围，但 branch/package 语义仍需按 advisory 核验，不能写成“已明确在 3.0.25 修复” [GH:advisory:hub]。SECURITY.md 有 Bugcrowd VDP 和 security@cline.bot 报告路径，这是好事，但不能抵消已有高危风险 [GH:local-scan]。

使用建议：敏感仓库默认关闭高风险 auto-approve；MCP/plugin 来源白名单；锁定 CLI/extension 版本；检查 `.clineignore`、secrets、环境变量和 shell command approval；把 checkpoints 理解为 rollback 机制而非 sandbox [Docs:checkpoints][Docs:plugins]。

## 学习价值

Cline 的学习价值很高：它展示了现代 coding agent 如何从“IDE chat extension”演化为多入口 runtime。值得重点观察的主题包括：Plan/Act UX、approval policy、checkpoint shadow Git、MCP/plugin capability design、SDK embedding、TUI/headless 双模式、独立 Kanban worktree 任务板、agent teams、scheduling/connectors、provider abstraction 与 enterprise governance；同时也要研究为何 dashboard/WebSocket 与 auto-approve 的组合会放大本地攻击面 [GH:advisory:hub]。
