---


title: "Vibe Kanban"
created: 2026-05-20
updated: 2026-05-21
type: repository-analysis
repo_url: "https://github.com/BloopAI/vibe-kanban"
category: "ai-programs/agent-infrastructure"
tags: ["agent-infrastructure", "kanban", "coding-agents", "orchestration", "workspaces", "review", "mcp", "self-hosted", "rust", "typescript"]
previous_repo: ""
successor: ""
primary_language: "Rust"
license: "Apache-2.0"
stars: 26367
forks: 2755
last_checked: 2026-05-20
last_verified: 2026-05-20
evidence: "GitHub API + GraphQL issue/PR counts + official docs + npm metadata + repository local scan + official shutdown blog; local repo scan only, not a fresh deployment test; status means repo-active/community-maintained, not company-backed product-active"
archived_reason: ""
docker_support: true
gpu_required: false
estimated_cpu: "2+ cores for local UI/backend orchestration; agent execution cost is delegated to external coding-agent CLIs and spawned dev servers"
estimated_memory: "1-2GB for local single-user usage; 2GB minimum and 4GB recommended for Docker self-hosting per official docs"
estimated_storage: "local shallow clone 77.6MB with 2203 tracked files; plus workspaces, git worktrees, dependencies, preview builds, PostgreSQL/Electric data in self-hosted mode"
status: active
ratings:
  capability: 4
  usability: 4
  performance: 3
  code_quality: 4
  documentation: 4
  community: 3
  maturity: 2
  extensibility: 4
  security: 3
  recommendation: 3
overall_score: 3.4
sources:
  - "[GH] https://github.com/BloopAI/vibe-kanban"
  - "[GH:api] https://api.github.com/repos/BloopAI/vibe-kanban queried 2026-05-20; stars=26367, forks=2755, open_issues_count=523, created_at=2025-06-14, pushed_at=2026-04-24, license=Apache-2.0, primary_language=Rust"
  - "[GH:graphql] GitHub GraphQL queried 2026-05-20; open issues=376, open PRs=147 for BloopAI/vibe-kanban"
  - "[GH:languages] https://api.github.com/repos/BloopAI/vibe-kanban/languages queried 2026-05-20; Rust=3706548, TypeScript=3393188, JavaScript=109928, CSS=65510, HTML=37901, PLpgSQL=25019"
  - "[GH:releases] https://api.github.com/repos/BloopAI/vibe-kanban/releases?per_page=10 queried 2026-05-20; latest v0.1.44 published 2026-04-24, prior v0.1.43 published 2026-04-17"
  - "[GH:contributors] https://api.github.com/repos/BloopAI/vibe-kanban/contributors?per_page=100 queried 2026-05-20; contributors returned=61; top entries include stunningpixels=878, abcpro1=257, LSRCT=235"
  - "[GH:community] https://api.github.com/repos/BloopAI/vibe-kanban/community/profile queried 2026-05-20; health_percentage=50; README and license present, but code_of_conduct/contributing/issue_template/pull_request_template not detected by API"
  - "[GH:advisories] https://api.github.com/repos/BloopAI/vibe-kanban/security-advisories?per_page=20 queried 2026-05-20; returned []"
  - "[GH:local-scan] Local shallow clone /tmp/repo-wiki-batch7/vibe-kanban at commit 4deb7eca8f381f7cbc1f9d15515a9ab8f8009053 dated 2026-04-24; git ls-files=2203; checked README.md, Cargo.toml, package.json, npx-cli/README.md, crates/remote/README.md, AGENTS.md and LICENSE"
  - "[NPM] npm view vibe-kanban queried 2026-05-20; version=0.1.44, description='NPX wrapper around vibe-kanban and vibe-kanban-mcp', dist.unpackedSize=51516, time.modified=2026-04-24"
  - "[Docs:index] https://vibekanban.com/docs extracted 2026-05-20; docs describe Vibe Kanban as planning/review interface for coding agents and state it is not itself a coding agent"
  - "[Docs:agents] https://vibekanban.com/docs/supported-coding-agents extracted 2026-05-20; supported agents include Claude Code, OpenAI Codex, GitHub Copilot, Gemini CLI, Amp, Cursor Agent CLI, OpenCode, Droid, Claude Code Router and Qwen Code"
  - "[Docs:selfhost] https://vibekanban.com/docs/self-hosting/deploy-docker extracted 2026-05-20; Docker Compose self-hosting requires Docker/Compose v2, 2GB RAM minimum, 4GB recommended, 10GB disk, domain and SSL"
  - "[Docs:settings] https://vibekanban.com/docs/settings/general extracted 2026-05-20; settings include default coding agent/variant, editor configuration, Remote SSH editor behavior, Git settings, telemetry and prompt tags"
  - "[Blog:shutdown] https://www.vibekanban.com/blog/shutdown published 2026-04-10; bloop company shuts down, Vibe Kanban remains open source/community maintained, remote services remain 30 days then transition to fully local architecture"
---

# Vibe Kanban

> AI coding agents 的 task board / workspace / review orchestration layer：它不写代码，而是把 Claude Code、Codex、Gemini CLI、OpenCode 等 agent 放进 issue、workspace、diff review、preview 与 PR flow。
>
> **状态**: `active`（repo-active / community-maintained，不是 company-backed product-active）· **总分**: 3.4/5 · **推荐度**: 3/5

## 一句话总结

Vibe Kanban 适合已经使用多个 coding-agent CLI、并想用 kanban board 管理任务、workspace、diff review 和 PR flow 的开发者；但由于 bloop 公司已关闭、项目转为 open-source/community maintained，它更适合作为 agent workflow infrastructure 样本与谨慎试用对象。

## 总体评价

`BloopAI/vibe-kanban` 的核心定位非常清楚：官方 docs 直接说“we're not a coding agent”，而是帮助工程师更快 planning and review，让 coding agents 在 workspaces 中执行；README 也强调每个 workspace 给 agent 一个 branch、terminal 和 dev server，并支持 diff review、inline comments、preview app、create PRs/merge [Docs:index][GH:local-scan]。

因此我把它归入 `ai-programs/agent-infrastructure`，不是 `coding-agents`。它本身不承担代码生成，而是为 coding agents 提供 **任务编排层**：issue / kanban board、agent selection、workspace isolation、branch/worktree、terminal/dev server、diff review、preview browser、PR handoff、remote/self-hosting、MCP integration 等 [GH:local-scan][Docs:agents][Docs:settings]。这正好补齐 agent infrastructure 的一个关键层：agent 不只需要工具和记忆，也需要“任务、尝试、反馈、review、交付”的协作界面。

但必须正视它的生命周期风险。2026-04-10 官方 shutdown blog 宣布 bloop 公司关闭，Vibe Kanban 项目将继续作为 open source/community maintained；remote services 保留 30 天后会转向 fully local architecture，remote services 包括 kanban issues、comments、projects、organisations 会被移除 [Blog:shutdown]。这不是“仓库死了”——GitHub API 显示最后 push/release 在 2026-04，仍可用——但本文的 `active` 只表示 repo-active/community-maintained，不表示 company-backed product-active；成熟度和推荐度必须打折 [GH:api][GH:releases][Blog:shutdown]。

## 推荐度：3/5

**定位**：适合已经有 Claude Code / Codex / Gemini CLI / OpenCode 等 agent 习惯，并愿意承担 self-host/local-first 变动风险的高级开发者或 agent workflow 研究者。

给 3 而不是 4，是因为它的产品 idea 很强，但组织和服务层正处于断裂后重构：bloop shutdown、remote services 下线、社区维护、local architecture 迁移，这些都会影响 adoption 风险 [Blog:shutdown]。如果只是个人本地试用、研究多 agent task-board、或者给 Hermes/Codex/Claude workflow 找 UI 灵感，它非常值得看；如果要团队生产依赖，它需要先验证社区维护状态、数据导出/迁移、local mode 能力、安全边界和 supported agents 实际可用性。

它仍然是 sharing_candidate，因为“agent task board / review interface”是一个好题目：当 coding 被 agent 自动化后，人类工作重心变成 planning、review、验收和任务分派。Vibe Kanban 正是在这个转移上做 infrastructure 化尝试 [Docs:index][Blog:shutdown]。

## 优势

1. **切中 agent workflow 的真实痛点**：不是再做一个 coding agent，而是做 planning/review/workspace/task orchestration，这比“多一个聊天框”更接近 agent-native engineering interface [Docs:index]。
2. **文档列出多个主流 coding agents**：官方 supported agents 包括 Claude Code、OpenAI Codex、GitHub Copilot、Gemini CLI、Amp、Cursor Agent CLI、OpenCode、Droid、CCR、Qwen Code；本次没有逐一安装认证并实测 [Docs:agents]。
3. **workspace 抽象清楚**：README 描述每个 workspace 给 agent branch、terminal、dev server；这对应 agent execution isolation 和 review handoff 的关键工程需求 [GH:local-scan]。
4. **review/preview/PR flow 完整**：支持 diff review、inline comments、built-in browser/devtools/device emulation、AI-generated PR descriptions、GitHub review/merge [GH:local-scan]。
5. **Rust + TypeScript 工程栈较硬**：Cargo workspace 包含 server、mcp、executors、worktree-manager、workspace-manager、git、git-host、review、tauri-app 等 crate，说明架构围绕 agent execution/workspace 管理展开 [GH:local-scan]。
6. **自托管路径存在**：官方 docs 提供 Docker Compose self-hosting，包含 PostgreSQL/Electric/Caddy/remote-server 等组件；注意 Docker support 指官方 self-host/cloud deployment 路径，不代表本地 npx/desktop 路径也依赖 Docker [Docs:selfhost]。

## 劣势

1. **公司已关闭，维护模式变化大**：bloop shutdown 后项目转 community maintained，这会影响 roadmap、服务可用性、响应速度和企业信心 [Blog:shutdown]。
2. **remote services 将被移除/转 local-first**：官方说明 remote services 30 天后会移除，并转向 fully local architecture；这意味着旧云端团队/组织/issue/comment/project 语义会变化 [Blog:shutdown]。
3. **项目很年轻且仍是 0.1.x**：创建于 2025-06，release 仍为 v0.1.44，maturity 不宜高估 [GH:api][GH:releases]。
4. **backlog 较大**：GraphQL 显示 376 open issues、147 open PRs；对一个不到一年历史的项目，这是明显维护压力 [GH:graphql]。
5. **安全面不小**：它管理 git worktrees、terminals、dev servers、remote SSH/editor URLs、MCP server、OAuth/self-host credentials、reverse proxy origins；虽无公开 advisories，但 attack surface 高 [GH:local-scan][Docs:selfhost][Docs:settings]。

---

## 适合什么场景

- 同时使用 Claude Code、Codex、Gemini CLI、OpenCode 等多个 coding-agent CLI，需要统一 task/attempt/workspace/review UI 的用户 [Docs:agents]。
- 想把 agent 工作从“单个终端会话”提升为 kanban issues、branch/workspace、diff review、preview、PR handoff 的团队 [GH:local-scan]。
- 个人本地运行 agent workbench，用于并行尝试、review agent diff、给 agent 留 inline feedback。
- 研究 agent infrastructure 的人，尤其关注 human-in-the-loop planning/review、multi-agent task orchestration、workspace isolation。
- 能接受 local-first/community-maintained 风险，并愿意 pin 版本、备份数据、审查 self-host 配置的高级用户 [Blog:shutdown]。

## 不适合什么场景

- 需要 company-backed SaaS SLA、稳定云端组织/项目/评论服务的团队；bloop 已关闭，remote services 会下线 [Blog:shutdown]。
- 还没有稳定使用任何 coding-agent CLI 的用户；Vibe Kanban 不是 coding agent，必须先安装/authenticate 外部 agent [Docs:index][Docs:agents]。
- 无法接受本地 agent 执行、git worktree、terminal、dev server、preview browser 等综合权限面的安全敏感环境。
- 不愿意维护 Docker Compose、PostgreSQL/Electric、domain/SSL/OAuth/env secrets 的 self-host 用户 [Docs:selfhost]。
- 只需要一个最轻量 TODO/kanban board 的用户；Vibe Kanban 的价值来自 agent workspace/review integration，而非普通任务管理。

## 与类似项目对比

| 项目 | 定位 | 相对本项目 |
|------|------|-----------|
| cal.diy | scheduling / booking substrate | cal.diy 解决时间协调；Vibe Kanban 解决 coding-agent task/workspace/review 协调 |
| CLI-Anything | 让任意 CLI agent-native 的工具接入层 | CLI-Anything 偏 tool wrapping / CLI discoverability；Vibe Kanban 偏多个 coding-agent CLI 的任务编排 UI |
| CodeGraph | 代码知识图谱 / context optimization | CodeGraph 优化 agent 读代码的上下文；Vibe Kanban 优化 agent 执行任务后的 review/attempt 管理 |
| mcp-servers | MCP server 集合 / tool ecosystem | MCP servers 提供工具集合；Vibe Kanban 可连接 MCP，但核心是 workspace/task orchestration |
| mem0 | agent memory layer | mem0 解决记忆持久化；Vibe Kanban 解决人类与 coding agents 的任务流和评审流 |

上述项目属于同一 `ai-programs/agent-infrastructure` 大板块，但功能子层不同；这里是 adjacent infrastructure 定位对比，不把它们当成 Vibe Kanban 的直接竞品，也未按同一 10 维度框架深审。

---

## 它能做什么

- 创建、优先级排序和分配 kanban issues [GH:local-scan][Docs:index]。
- 为 coding agents 创建 workspaces，每个 workspace 有 branch、terminal、dev server [GH:local-scan]。
- 在创建 task attempt 时按官方文档选择不同 coding agents，包括 Claude Code、Codex、Gemini CLI、OpenCode 等；本次未逐一实测每个 agent integration [Docs:agents]。
- 审查 agent 生成的 diff，并通过 inline comments 把反馈送回 agent [GH:local-scan]。
- 内置 browser / devtools / inspect mode / device emulation 用于 preview app [GH:local-scan]。
- 创建 PR、生成 PR description，并在 GitHub 上 review/merge [GH:local-scan]。
- 配置 default coding agent / variant、editor integration、Remote SSH、Git settings、telemetry、prompt tags [Docs:settings]。
- 通过 Docker Compose self-host Vibe Kanban Cloud，包括 PostgreSQL、ElectricSQL、Caddy、remote-server 等组件 [Docs:selfhost]。

## 运行环境与资源占用

| 场景 | CPU | 内存 | 存储 | 说明 |
|------|-----|------|------|------|
| 本地 npx | 2 cores | 1-2GB | 数百 MB 起 | `npx vibe-kanban` 启动本地 UI/backend；实际占用取决于 workspace、dev server 和 agent CLI；本次未做性能 benchmark [GH:local-scan][NPM] |
| 多 workspace / dev server | 4+ cores | 4GB+ | 多个 git worktrees + deps | agent 执行、测试、preview build 和依赖安装才是主要资源消耗 [GH:local-scan] |
| Docker self-host | 2+ cores | 2GB minimum, 4GB recommended | 10GB+ | 官方 self-host docs 要求 Docker/Compose v2、2GB RAM minimum、4GB recommended、10GB disk、domain、SSL [Docs:selfhost] |
| 团队/远程 | 4+ cores | 4GB+ | DB + workspaces + logs | 还涉及 OAuth/local auth、PostgreSQL logical WAL、ElectricSQL、Caddy、remote-server [Docs:selfhost] |

- **运行时**：Rust backend + TypeScript frontend + npm wrapper；开发需要 Rust latest stable、Node.js >=20、pnpm >=8 [GH:local-scan]。
- **操作系统**：本地 npx 与源码开发面向常见开发机；remote/self-host 面向 Linux server [Docs:selfhost]。
- **Docker**：`docker_support: true` 仅指官方 Docker Compose self-host/cloud deployment 路径；本地 npx/desktop 使用不要求 Docker [Docs:selfhost][GH:local-scan]。
- **GPU**：不需要 GPU；模型推理和 coding agent 能力来自外部 CLI / provider。
- **外部依赖**：必须先安装并认证 coding-agent CLI；self-host 还需要 domain、SSL、OAuth 或 bootstrap local auth、数据库 secret 等 [Docs:agents][Docs:selfhost]。

## 上手体验

评分 4/5。

本地入口非常直接：README 和 docs 都给出 `npx vibe-kanban`；使用前只需先 authenticate preferred coding agent [GH:local-scan][Docs:agents]。这对已经装好 Claude Code / Codex / Gemini CLI 的用户很友好：它不是要求重建 agent stack，而是包一层 task/review UI。

扣 1 分来自两个方面：第一，它的价值依赖外部 agent 的安装与认证；第二，自托管 Cloud 路径并不轻，需要 Docker Compose、domain、SSL、OAuth/local auth、PostgreSQL/Electric/Caddy/env secrets [Docs:selfhost]。另外 shutdown 后 remote services/local architecture 转换也会影响新用户预期 [Blog:shutdown]。

## 代码质量

评分 4/5。

本地扫描显示项目不是原型级前端玩具：Cargo workspace 划分出 server、mcp、executors、worktree-manager、workspace-manager、git、git-host、review、embedded-ssh、tauri-app、remote/deployment 等 crate；前端 TypeScript 也占相当比例，README/AGENTS.md 给出 Rust + web 的 format/lint/check/test 命令 [GH:local-scan][GH:languages]。

不打 5，是因为本次没有运行测试或审计覆盖率；项目仍然年轻，0.1.x release、open issue/PR backlog 较大，公司 shutdown 后维护资源不确定 [GH:api][GH:graphql][Blog:shutdown]。这些不是代码结构本身的否定，但足以使 code_quality 保守。

## 可扩展性

评分 4/5。

Vibe Kanban 的扩展性主要体现在“接入外部 coding agents 与 workflow hooks”，而不是传统 plugin marketplace。官方 supported agents 文档覆盖 10 类 coding-agent CLI，但这些是文档列出的 integration surface，本次没有逐一认证/运行；settings 支持 default agent/variant、editor integration、Remote SSH、Git settings、prompt tags；README env table 包含 MCP_HOST/MCP_PORT，docs 也列出 MCP server 相关集成 [Docs:agents][Docs:settings][GH:local-scan]。

扣 1 分是因为外部扩展 API/plugin contract 没有像 Continue/Cline 那样成为非常清晰的一等公民。若要深度接入新 agent、改 workspace lifecycle 或 review flow，仍可能需要读源码或 fork executor 层 [GH:local-scan]。

## 文档质量

评分 4/5。

官方 docs 信息架构完整：getting started、workspaces、cloud、settings、self-hosting、integrations、help；README 也覆盖 overview、installation、self-hosting、development、env variables、reverse proxy、remote deployment [Docs:index][GH:local-scan]。self-host docs 对 Docker Compose、环境变量、OAuth/local auth、Caddy/PostgreSQL/ElectricSQL 也写得较具体 [Docs:selfhost]。

扣分点是 shutdown 带来的文档时效风险：remote services、cloud、organisations、projects、comments 等部分在 2026-04 blog 后会发生结构性变化，现有 docs 可能在 local-first 迁移期间局部过时 [Blog:shutdown]。

## 社区与成熟度

| 维度 | 评分 | 说明 |
|------|------|------|
| 社区活跃度 | 3/5 | stars/forks 很高，contributors=61，但 company shutdown 后转 community maintained；open issue/PR backlog 对响应速度形成压力 [GH:api][GH:contributors][GH:graphql][Blog:shutdown] |
| 成熟度 | 2/5 | 项目创建于 2025-06，仍为 0.1.x，且 remote services 正从 company-backed cloud 转 local architecture；不满足稳定生产工具标准 [GH:api][GH:releases][Blog:shutdown] |

这里必须克制：26k stars 是强信号，但生命周期事件比 stars 更重要。Vibe Kanban 的方向和工程实现很值得研究；但组织维护和服务架构正在迁移，maturity 不宜高于 2。

## 安全与风险

评分 3/5。

正面信号：GitHub Security Advisories API 返回空列表；README 明确 `VK_ALLOWED_ORIGINS`，在 reverse proxy/custom domain 下必须设置 allowed origins，否则会 403，这说明至少对 browser origin 边界有显式配置 [GH:advisories][GH:local-scan]。self-host docs 也强调 JWT secret、DB password、OAuth credentials、local auth password 等关键 secret [Docs:selfhost]。这里的 advisories 结论只表示查询时没有 repo-published advisories 返回，不表示漏洞不存在。

风险面同样真实：Vibe Kanban 会管理 workspaces、git branches/worktrees、terminal/dev server、remote SSH editor links、MCP server、agent CLI execution、OAuth/local auth、PostgreSQL/ElectricSQL 等。任何 agent prompt injection、shell misuse、workspace 泄漏、origin misconfig、secret exposure 都可能跨越普通 kanban app 的风险边界 [GH:local-scan][Docs:selfhost][Docs:settings]。因此 security 给 3：可用，但需要沙箱、权限、网络和 secret 治理。

## 学习价值

Vibe Kanban 的学习价值很高，甚至高于它的直接采用价值。它提出了一个非常重要的工程命题：

> 当 coding agent 负责写代码时，人类开发者真正需要的界面，可能不是 chat，而是 task board + workspace + diff review + preview + feedback loop。

这对 agent infrastructure 分类非常关键。Cline / Codex / Claude Code 解决“agent 如何写代码”；CodeGraph / Context7 / mem0 解决“agent 如何获得上下文/记忆”；Vibe Kanban 解决“人类如何组织、审查和交付 agent 的工作”。其得失俱可观：方向正确，但商业形态未稳；项目虽活，组织已变。