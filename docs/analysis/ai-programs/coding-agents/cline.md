---


title: "Cline"
created: 2026-05-20
updated: 2026-05-27
type: repository-analysis
repo_url: "https://github.com/cline/cline"
category: "ai-programs/coding-agents"
tags: ["coding-agent", "vscode", "cli", "tui", "mcp", "sdk", "plugins", "checkpoints", "kanban", "typescript"]
previous_repo: ""
successor: ""
primary_language: "TypeScript"
license: "Apache-2.0"
stars: 62072
forks: 6480
last_checked: 2026-05-20
last_verified: 2026-05-20
evidence: "GitHub API + official documentation + npm metadata + repository local scan; local repo scan only, not a fresh production deployment test"
archived_reason: ""
docker_support: false
gpu_required: false
estimated_cpu: "low-to-moderate local CPU for IDE/CLI/TUI orchestration; spawned commands/tests and remote model calls dominate actual workload"
estimated_memory: "moderate for VS Code/webview/TUI runtime plus workspace context; large repositories and checkpoints increase memory/storage pressure"
estimated_storage: "local shallow clone 80M with 3192 tracked files; checkpoints use a shadow Git repository and may grow on large tasks"
status: active
ratings:
  capability: 5
  usability: 4
  performance: 4
  code_quality: 4
  documentation: 5
  community: 5
  maturity: 3
  extensibility: 5
  security: 2
  recommendation: 4
overall_score: 4.1
sources:
  - "[GH] https://github.com/cline/cline"
  - "[GH:api] https://api.github.com/repos/cline/cline queried 2026-05-20; stars=62072, forks=6480, open_issues_count=900, created_at=2024-07-06, pushed_at=2026-05-20, license=Apache-2.0, default_branch=main"
  - "[GH:issues] GitHub Search API queried 2026-05-20; open issues=474, open PRs=426 for repo:cline/cline"
  - "[GH:languages] https://api.github.com/repos/cline/cline/languages queried 2026-05-20; TypeScript=14852005, JavaScript=212446, Rust=43944, CSS=36995, HTML=35471, Shell=20212, Python=7735"
  - "[GH:releases] https://api.github.com/repos/cline/cline/releases?per_page=10 queried 2026-05-20; latest releases include cli-v3.0.9 published 2026-05-20 and v3.84.0 published 2026-05-19"
  - "[GH:contributors] https://api.github.com/repos/cline/cline/contributors?per_page=100 queried 2026-05-20; first page contributors=100; top entries include saoudrizwan=1962, abeatrix=782, celestial-vault=374"
  - "[GH:community] https://api.github.com/repos/cline/cline/community/profile queried 2026-05-20; health_percentage=100; readme, license, contributing, code_of_conduct and pull_request_template detected"
  - "[GH:advisories] https://api.github.com/repos/cline/cline/security-advisories?per_page=20 queried 2026-05-20; returned GHSA-5c57-rqjx-35g2/CVE-2026-44211 critical Kanban cross-origin WebSocket hijack and GHSA-9ppg-jx86-fqw7 low unauthorized npm publish affecting cline@2.3.0"
  - "[GH:local-scan] Local shallow clone /tmp/repo-wiki-batch6/cline at commit 015b61924f3fe32a732e3aa390066e2d1574f53b dated 2026-05-20; git ls-files=3192; checked README.md, SECURITY.md, CONTRIBUTING.md, package.json and LICENSE; README documents zero-interaction scripting/automation with JSON output and CI/CD chaining; package.json reports extension version 3.84.0 and description as autonomous coding agent in IDE; SECURITY.md points to Bugcrowd VDP and security@cline.bot"
  - "[NPM:cli] npm view cline queried 2026-05-20; version=3.0.9, license=Apache-2.0, description='Autonomous coding agent CLI - capable of creating/editing files, running commands, using the browser, and more', dist.unpackedSize=21271"
  - "[NPM:sdk] npm view @cline/sdk queried 2026-05-20; version=0.0.41, license=Apache-2.0, description='Cline SDK - user-facing alias for @cline/core'"
  - "[Docs:index] https://docs.cline.bot/llms.txt extracted 2026-05-20; docs map lists IDE, CLI, TUI, Kanban, SDK, Cline API, MCP, rules, skills, plugins, hooks, scheduling, connectors, subagents and enterprise pages"
  - "[Docs:install] https://docs.cline.bot/getting-started/installing-cline extracted 2026-05-20; installation paths include IDE Extension, CLI, Kanban preview and SDK"
  - "[Docs:tui] https://docs.cline.bot/usage/tui extracted 2026-05-20; TUI supports interactive terminal workflows, Plan/Act toggle, auto-approve toggle, slash commands and @file mentions; page also distinguishes TUI from headless JSON/piped stdin/stdout/CI-script workflows"
  - "[Docs:checkpoints] https://docs.cline.bot/core-workflows/checkpoints extracted 2026-05-20; checkpoints are enabled by default and use a shadow Git repository separate from the project Git history"
  - "[Docs:plugins] https://docs.cline.bot/customization/plugins extracted 2026-05-20; plugins extend Cline with tools, lifecycle hooks and slash commands for SDK/CLI/Kanban, installable from Git, npm or local paths"
---

# Cline

> 多入口 autonomous coding agent：以 VS Code/IDE extension 为核心，同时提供 CLI/TUI、SDK、Kanban、MCP、plugins、checkpoints 与多模型 provider 接入。
>
> **状态**: `active` · **总分**: 4.1/5 · **推荐度**: 4/5

## 一句话总结

Cline 是当前开源 coding-agent 生态里功能面最宽的一类项目之一：它把 IDE 侧审阅/批准、CLI/TUI 自动化、MCP 工具、插件、skills、checkpoints、subagents 和 Kanban 并入同一产品线；但其权限面很大，且已有 critical security advisory，团队使用必须先做安全边界治理。

## 总体评价

`cline/cline` 的仓库描述是“Autonomous coding agent as an SDK, IDE extension, or CLI assistant”，README 与 package metadata 也明确其能力包括创建/编辑文件、运行命令、使用浏览器，并在每一步保留用户批准语义 [GH:api][GH:local-scan][NPM:cli]。官方文档进一步把 Cline 拆成 IDE、CLI、TUI、Kanban、SDK、API、MCP、plugins、hooks、skills、rules、subagents、enterprise 等多个 surface [Docs:index][Docs:install]。

这使 Cline 与 Claude Code / Codex / Gemini CLI 这种“官方模型生态 agent”不同：Cline 更像一个 multi-provider、editor-first、tool-rich 的 agent runtime。它不是单纯 chat sidebar，而是试图把文件修改、终端命令、浏览器、MCP、插件和任务编排纳入 IDE/CLI workflow [Docs:index][Docs:plugins]。

高分来自功能广度、文档、社区和扩展性：6 万+ stars、first-page contributors 达 100、GitHub community profile health 100%，官方 docs 的信息架构也很完整 [GH:api][GH:contributors][GH:community][Docs:index]。主要扣分来自成熟度和安全：项目创建于 2024-07，版本快速滚动，open PR/issue backlog 很大；同时 2026-05 有 Kanban cross-origin WebSocket hijack 的 critical advisory，另有 CLI npm unauthorized publish 事件 [GH:issues][GH:releases][GH:advisories]。

## 推荐度：4/5

**定位**：适合想在 IDE / terminal 中使用多模型 autonomous coding agent，并愿意显式治理 agent 权限、插件、MCP、自动批准策略的开发者或小团队。

推荐它，是因为 Cline 的能力面确实宽：IDE extension、CLI/TUI、headless automation、Kanban preview、SDK、MCP、plugins、checkpoints、subagents 这些组合，使它既能作为个人 coding copilot，也能作为 agent workflow 实验平台 [Docs:index][Docs:install][Docs:tui][Docs:plugins]。

不直接给 5，是因为安全风险不可忽略。Cline 会读写文件、运行命令、使用浏览器和 MCP tools，权限面天然大；Kanban server 已出现 critical advisory，CLI 包也出现过 unauthorized publish 事件 [GH:advisories]。换言之，它很有价值，但不适合无治理的团队级 rollout，也不应在敏感仓库里无边界开启 auto-approve / YOLO 式使用。

## 优势

1. **能力面极宽**：IDE、CLI、TUI、Kanban、SDK、API、MCP、plugins、hooks、skills、subagents 都在官方 docs 中形成体系 [Docs:index][Docs:install]。
2. **editor-first 体验完整**：VS Code package metadata 描述其能创建/编辑文件、运行命令、使用 browser，并强调每一步批准；walkthrough 中也强调计划、理解代码库、MCP、用户控制 [GH:local-scan]。
3. **多模型与工具生态**：package keywords 和 docs 都显示 Cline 支持 Anthropic、Gemini、OpenAI、OpenRouter、本地模型/MCP 等多种接入路径 [GH:local-scan][Docs:index]。
4. **安全回滚机制有设计**：checkpoints 默认启用，用 shadow Git repository 捕获 agent 修改后的项目状态，可 rollback 文件而保留 conversation [Docs:checkpoints]。
5. **扩展机制强**：plugins 可从 Git/npm/local path 安装，扩展 custom tools、lifecycle hooks、slash commands；MCP、rules、skills、hooks 又提供另一层定制面 [Docs:plugins][Docs:index]。
6. **社区关注度高**：6 万+ stars、6 千+ forks、100 个 first-page contributors，且 release 更新非常频繁 [GH:api][GH:contributors][GH:releases]。

## 劣势

1. **安全风险高于普通 IDE 插件**：Cline 的核心能力就是改文件、跑命令、接工具和浏览器；这意味着 prompt injection、工具误用、secret 泄露和供应链风险都更现实 [NPM:cli][GH:advisories]。
2. **已有 critical advisory**：GHSA-5c57-rqjx-35g2/CVE-2026-44211 涉及 Kanban server cross-origin WebSocket hijack；这会显著压低 security 评分 [GH:advisories]。
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

上述项目按 `ai-programs/coding-agents` 同类范围做定位级对比，未按同一 10 维度框架深审。

---

## 它能做什么

评分 5/5。

Cline 覆盖 coding agent 的主要能力：读写代码、运行命令、使用浏览器、多模型 provider、IDE extension、CLI、TUI、headless automation、SDK embedding、Kanban preview、MCP、plugins、hooks、rules、skills、subagents、checkpoints 和 slash commands [GH:local-scan][Docs:index][Docs:install][Docs:tui][Docs:plugins][Docs:checkpoints]。

给 5 不是说每个 surface 都成熟无缺陷，而是说“能力广度”在同类中非常高；它几乎把当前 coding-agent 产品应有的入口和扩展点都纳入了。

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

安装路径清晰：IDE extension 可从 VS Code/Cursor/Windsurf/VSCodium/Antigravity 或 JetBrains Marketplace 安装；CLI 通过 `npm install -g cline`，SDK 通过 `npm install @cline/sdk`，Kanban 通过 `npx kanban` preview 入口 [Docs:install]。TUI 文档给出了 `cline` / `cline -i`、slash commands、Plan/Act toggle、auto-approve toggle 和 `@file` context 入口 [Docs:tui]。

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
| 社区活跃度 | 5/5 | stars/forks 高，first-page contributors=100，community health=100，release 高频 [GH:api][GH:contributors][GH:community][GH:releases] |
| 成熟度 | 3/5 | 创建于 2024-07，版本和 surface 仍快速演化；CLI v3 与 extension v3.x 高频发布，Kanban 等能力仍有 preview 色彩 [GH:api][GH:releases][Docs:install] |

## 安全与风险

评分 2/5。

Cline 的安全风险来自两层：一是 coding agent 天然会读写文件、运行命令、接 browser/MCP/tools；二是项目已有明确 advisory 记录。GitHub advisories 返回 critical 的 Kanban cross-origin WebSocket hijack，以及 low severity 的 unauthorized npm publish 事件 [GH:advisories]。SECURITY.md 有 Bugcrowd VDP 和 security@cline.bot 报告路径，这是好事，但不能抵消已有高危风险 [GH:local-scan]。

使用建议：敏感仓库默认关闭高风险 auto-approve；MCP/plugin 来源白名单；锁定 CLI/extension 版本；检查 `.clineignore`、secrets、环境变量和 shell command approval；把 checkpoints 理解为 rollback 机制而非 sandbox [Docs:checkpoints][Docs:plugins]。

## 学习价值

Cline 的学习价值很高：它展示了现代 coding agent 如何从“IDE chat extension”演化为多入口 runtime。值得重点观察的主题包括：Plan/Act UX、approval policy、checkpoint shadow Git、MCP/plugin capability design、SDK embedding、TUI/headless 双模式、Kanban multi-agent 任务板、provider abstraction 与 enterprise governance。
