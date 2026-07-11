---


title: "Plandex"
created: 2026-05-20
updated: 2026-05-27
last_checked: 2026-07-11
type: repository-analysis
repo_url: "https://github.com/plandex-ai/plandex"
category: "ai-programs/coding-agents"
tags: ["coding-agent", "terminal-agent", "early-agent-history", "large-context", "self-hosted", "go", "diff-review"]
ratings:
  capability: 5
  usability: 3
  performance: 4
  code_quality: 4
  documentation: 4
  community: 4
  maturity: 3
  extensibility: 4
  security: 3
  recommendation: 3
overall_score: 3.7
recommendation: "适合作为 early open-source coding-agent 历史线与大任务/大上下文 agent 设计样本收录；生产采用需谨慎，因为 Plandex Cloud 已 winding down，主路径应转为 self-hosted/local mode。"
status: active-self-hosted-cloud-winding-down
license: "MIT"
language: "Go"
stars: 15384
forks: 1136
docker_support: true
self_hostable: true
enterprise_ready: false
security_score: 3
last_evaluated: 2026-05-20
evidence: "GitHub API + GraphQL issue/PR counts + local docs/source scan + README/official docs; some docs.plandex.ai paths returned 404 during this crawl, so local repo docs were used as primary documentation evidence and canonical public docs should be rechecked when adopting."
sources:
  - "[GH:api] GitHub REST API snapshot for plandex-ai/plandex on 2026-05-20: stars=15384, forks=1136, created_at=2023-10-24, pushed_at=2025-10-03, license=MIT, language=Go, topics include ai-agents/cli/developer-tools/terminal."
  - "[GH:graphql] GitHub GraphQL query on 2026-05-20: open issues=37, open PRs=21, discussions=32; REST open_issues_count=58 combines issues + PRs."
  - "[GH:contributors] GitHub contributors API first page on 2026-05-20: 22 contributors; top contributor danenania with 821 commits."
  - "[GH:releases] GitHub releases API first page on 2026-05-20: latest GitHub release marked Latest is cli/v2.2.1; matching server release server/v2.2.1 also exists; local app/cli/version.txt says 2.2.1."
  - "[GH:advisories] GitHub repository security-advisories API returned 0 advisories on 2026-05-20; absence of advisories is not a proof of absence of vulnerabilities."
  - "[GH:local-scan] Local shallow clone /tmp/repo-wiki-batch8/plandex at commit e2d772072efadbe41d2946d97d79be55532dbab5 dated 2025-10-03; git ls-files=696; du=61M; checked README.md, app/cli/version.txt, docs/docs/*.md, releases changelogs."
  - "[GH:readme] README.md local clone: terminal-based AI development tool for large tasks; 2M effective context, ~100k per file, 20M+ token directory indexing with tree-sitter project maps, cumulative diff review sandbox, configurable autonomy, command execution/debugging, git integration, one-line CLI install, local self-host mode."
  - "[Docs:quickstart] docs/docs/quick-start.md local clone: install via curl install.sh; Plandex Cloud winding down as of 2025-10-03 and no longer accepting new users; self-hosted/local mode with Docker and BYO model providers; WSL-only on Windows."
  - "[Docs:selfhost] docs/docs/hosting/self-hosting/local-mode-quickstart.md local clone: client-server architecture; local mode requires git, docker, docker-compose; start server with app/start_local.sh; default local host http://localhost:8099."
  - "[Docs:context] docs/docs/core-concepts/context-management.md local clone: automatic context loading in v2, project maps with tree-sitter, smart context, manual load of files/directories/URLs/images/notes/pipes, .gitignore/.plandexignore handling."
  - "[Docs:autonomy] docs/docs/core-concepts/autonomy.md local clone: autonomy levels none/basic/plus/semi/full; controls auto-continue, auto-build, auto-load-context, smart-context, auto-apply, can-exec, auto-exec, auto-debug, auto-commit; safety warning for full auto."
  - "[Docs:security] docs/docs/security.md local clone: respects .gitignore/.plandexignore; BYO/self-host API keys stored ephemerally in RAM while active, not written to disk/logs/database according to docs."
  - "[Docs:models] docs/docs/models/model-providers.md and docs/docs/models/ollama.md local clone: supports OpenRouter and many model providers; self-hosting can use OpenAI-compatible providers; Ollama supported for local models with explicit caveats about local model capability."
  - "[Web:home] https://plandex.ai/ extracted 2026-05-20: public site describes open-source terminal-based AI coding agent, diff review sandbox, full auto mode, smart context up to 2M tokens, tree-sitter project maps, and 14k+ stars / 1000+ forks."
---

# Plandex

## 一句话总结

Plandex 是一条较早公开并获得显著关注的 open-source terminal coding-agent 历史线：它把大任务规划、上下文管理、diff sandbox、可调 autonomy、本地/自托管 server 组合成完整 CLI workflow [GH:api][GH:readme][Docs:autonomy]。

## 总体评价

`plandex-ai/plandex` 是 Go 写的 terminal-based AI coding agent，面向 large projects / real world tasks。README 说它可以 plan and execute 多步骤、多文件任务，支持 2M effective context window、约 100k tokens per file、20M+ token directories 的 tree-sitter project map indexing，并用 cumulative diff review sandbox 将 AI edits 与工作区隔离，直到用户 review/apply [GH:readme]。

它应该归入 `ai-programs/coding-agents`，但历史意义比当前实用推荐更突出。Plandex 很早就明确了后来 coding agents 都在追的设计线：长任务 planning/execution、大仓库 context selection、diff sandbox / review before apply、可调 autonomy levels、多模型/多 provider 组合，以及 self-hosted server + CLI client 架构 [GH:readme][Docs:context][Docs:autonomy]。

必须强调 caveat：官方 quickstart 与 README 都说明 **Plandex Cloud is winding down as of 2025-10-03 and no longer accepting new users**，推荐路径转向 self-hosted/local mode；本次抓取 docs.plandex.ai 若干页面返回 404，本文主要以本地 repo docs 作为 evidence [Docs:quickstart][GH:local-scan]。

## 推荐度：3/5

作为 early open-source coding-agent 历史线与设计样本，Plandex 值得收录；作为今天的新生产项目默认选择，需要谨慎。若要采用，应接受 self-host/local Docker 运维、较小维护面和 Cloud winding down 后的 onboarding 成本 [Docs:quickstart][Docs:selfhost]。

## 优势

1. **能力面完整**：planning/execution、diff sandbox、context maps、autonomy levels、command execution/debugging、git integration、多模型、自托管 [GH:readme][Docs:autonomy]。
2. **大上下文设计早**：project map、tree-sitter、smart context 展示了大仓库 context selection 的一条路线 [Docs:context]。
3. **diff sandbox 安全意识强**：AI changes 先进入 cumulative diff review sandbox，review 后再 apply [GH:readme]。
4. **autonomy matrix 细腻**：none/basic/plus/semi/full，而不是简单 auto/ask 二分 [Docs:autonomy]。
5. **保留 self-host/local path**：Cloud winding down 后仍可通过本地 server + CLI 使用 [Docs:quickstart][Docs:selfhost]。

## 劣势

1. **Cloud winding down 是硬风险**：hosted onboarding 和商业可持续性被削弱 [Docs:quickstart]。
2. **self-host 门槛高**：local mode 需要 git、docker、docker-compose 和 server/CLI sign-in flow [Docs:selfhost]。
3. **public docs 可访问性需复查**：本次若干 docs.plandex.ai 页面返回 404，采用前应复核当前文档入口 [GH:local-scan]。
4. **full auto 风险真实存在**：auto-apply、auto-exec、auto-debug、auto-commit 可能快速造成 destructive changes；docs 自身给出 warning [Docs:autonomy]。
5. **维护集中度较高**：contributors first page 显示 top contributor danenania 821 commits，bus factor 风险较高 [GH:contributors]。

## 适合什么场景

- 研究 early open-source coding-agent 设计史。
- 对比 plan-centric vs chat-centric agent workflow。
- 学习 diff sandbox / pending updates / autonomy matrix 设计。
- 能接受 self-host/local Docker 的团队或个人。
- 大仓库、多文件、多步骤任务的 agent workflow 实验。

## 不适合什么场景

- 想要开箱即用的 hosted cloud coding agent。
- 不愿维护 Docker/local server 的个人用户。
- 对长期商业支持有强要求的企业。
- 对 command execution 安全边界要求极高但缺乏 sandbox 的环境。
- 只需要轻量 editor-native 或单 CLI 工具的日常 pair programming。

## 与类似项目对比

这里按 `ai-programs/coding-agents` 同类/相邻项目做定位级对比；部分项目能力随时间快速变化，未在本表做同一 10 维度深审，比较结论仅用于 positioning。

| 项目 | 定位 | 相对本项目 |
|---|---|---|
| Plandex | terminal plan-centric coding agent | 本项目更强调大任务计划、diff sandbox、self-host server、可调 autonomy；当前 Cloud winding down 是主要劣势 |
| Claude Code | terminal coding agent | Claude Code 商业闭源/模型一体化更强；Plandex 更开源、自托管，但维护面弱 |
| OpenAI Codex CLI | terminal coding agent | Codex CLI 更轻、更主流；Plandex 的 plan/version/diff sandbox 设计更重 |
| Cline | editor-first coding agent | Cline 更贴近 VS Code UX；Plandex 更终端/计划驱动 |
| Continue | IDE/CLI/checks workflow | Continue 更强调 repo-local checks/config；Plandex 更强调 autonomous plan execution |
| Aider | terminal pair-programming agent | Aider 更轻量、git-centric；Plandex 更复杂、更注重大上下文和 sandbox |


## 它能做什么

- 围绕 plan 组织 context、conversation、branch、version-control 与 pending updates [Docs:context][GH:readme]。
- 将 AI-generated changes 放进 cumulative diff review sandbox，用户 review 后 apply [GH:readme]。
- 通过 project map、tree-sitter、smart context 处理大仓库上下文选择 [Docs:context]。
- 支持 files / directories / directory trees / project maps / URLs / images / notes / piped command output 等 context 类型 [Docs:context]。
- 提供 none/basic/plus/semi/full autonomy levels，控制 auto-continue、auto-build、auto-load-context、auto-apply、auto-exec、auto-debug、auto-commit 等行为 [Docs:autonomy]。
- 通过 local/self-host server + CLI client 在 Cloud winding down 后继续运行 [Docs:quickstart][Docs:selfhost]。

## 运行环境与资源占用

local mode 要求 git、docker、docker-compose，启动 server 后 CLI 通过 `plandex sign-in` 选择 `Local mode host`，默认 `http://localhost:8099` [Docs:selfhost]。

Plandex 不是单 binary 的纯本地工具，而是 client-server architecture。Go CLI/server 与 tree-sitter project maps 对大仓库 context 有设计投入；但大模型调用成本和 latency 取决于 provider，本次未跑 benchmark [Docs:context][Docs:models]。

## 上手体验

CLI 一行安装本身简单，但 Cloud winding down 后主路径转向 Docker local mode/self-host，Windows 仅 WSL；门槛高于 editor-native agents [Docs:quickstart][Docs:selfhost]。

如果真的要试用，建议走 local mode，在 disposable repo 或 clean git branch 中测试，从 `none/basic/plus` autonomy 开始，不要直接 full auto [Docs:autonomy]。

## 代码质量

代码质量 4/5。Go monorepo、docs/release changelogs、client-server 架构清楚；local scan 显示 git ls-files=696，version 为 2.2.1 [GH:local-scan][GH:releases]。

扣分来自主要贡献集中在 founder，且本次未运行测试；Cloud winding down 也会影响长期维护预期 [GH:contributors][Docs:quickstart]。

## 可扩展性

可扩展性 4/5。Plandex 支持多 provider、OpenAI-compatible self-host providers、Ollama/local models、roles/model packs、config/autonomy 等 [Docs:models][Docs:autonomy]。

但它不是 plugin marketplace 型扩展；扩展更多体现在模型/provider、自托管部署和 autonomy/context 配置上。

## 文档质量

文档质量 4/5。repo 内 docs 覆盖 quickstart、context、autonomy、security、self-hosting、models；README 也清楚解释 large-task workflow 与 diff review sandbox [GH:readme][GH:local-scan]。

主要扣分来自 public docs 可访问性：本次抓取部分 docs.plandex.ai path 返回 404，采用前应复查当前 canonical docs 入口 [GH:local-scan]。

## 社区与成熟度

社区活跃度 4/5：15.3k stars、1.1k forks、32 discussions、22 first-page contributors；但 open PR/issue backlog 存在，核心贡献集中 [GH:api][GH:graphql][GH:contributors]。

成熟度 3/5：v2.2.1 release、2023 创建，设计成熟；但 Cloud winding down、latest commit 2025-10-03，商业服务路径收缩 [GH:api][GH:releases][Docs:quickstart]。

## 安全与风险

安全性 3/5。有 `.gitignore` / `.plandexignore`、ephemeral API key storage 声明、diff sandbox；但 full auto 可执行命令且 docs 自带强 warning，advisories=0 不等于安全证明 [Docs:security][Docs:autonomy][GH:advisories]。

采用时要对命令执行、API key、secret files 做额外 sandbox 和审查，尤其不要把 diff sandbox 误解为外部副作用 sandbox。

## 学习价值

Plandex 的学习价值在于展示早期 open-source coding agents 如何处理大任务、大上下文、review sandbox 和 autonomy。它是理解 plan-centric coding agent workflow 的好样本，也能帮助比较后来的 Codex CLI、Claude Code、Cline、Continue、Aider 等路线。
