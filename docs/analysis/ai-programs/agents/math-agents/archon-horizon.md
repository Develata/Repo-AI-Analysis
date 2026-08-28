---
title: "Archon Horizon"
created: 2026-08-28
updated: 2026-08-28
type: repository-analysis
repo_url: "https://github.com/frenzymath/Archon-Horizon"
category: "ai-programs/agents/math-agents"
tags: ["ai-for-math", "math-agent", "lean4", "long-horizon-agent", "workspace", "multi-agent", "ledger", "codex", "claude-code", "python"]
previous_repo: "https://github.com/frenzymath/Archon"
successor: ""
primary_language: "Python"
license: "Apache-2.0"
stars: 24
forks: 0
last_checked: 2026-08-28
last_verified: 2026-08-28
evidence: "GitHub API + repository/docs/announcement review + related arXiv lineage review + compile-only smoke; no independent Horizon preprint found and no end-to-end run"
archived_reason: ""
docker_support: false
gpu_required: false
estimated_cpu: "4-16+ cores（Lean checks 与并行 teams；未实测）"
estimated_memory: "8-32GB+（多项目/Mathlib/agents；未实测）"
estimated_storage: "20-100GB+（projects、ledger、logs、toolchains）"
status: active
ratings:
  capability: 4
  usability: 3
  performance: 2
  code_quality: 4
  documentation: 5
  community: 2
  maturity: 2
  extensibility: 4
  security: 3
  recommendation: 4
overall_score: 3.3
sources:
  - "[GH] https://github.com/frenzymath/Archon-Horizon"
  - "[GH:metadata] GitHub GraphQL/REST snapshot checked 2026-08-28: public active repository, default branch main, Python, Apache-2.0, 24 stars, 0 forks, 0 open issues, 0 open PRs, 84 default-branch commits, 1 contributor, no GitHub releases; package/changelog version is 0.1.3."
  - "[GH:readme] README inspected at commit 0c5d4e13bbb397d80d5cb6cfa29f2eaa1a681f1b: workspace-first long-horizon Lean orchestration, one Horizon lead with native subagents, shared state, dashboard, budgets, Claude/Codex harnesses, and explicit pre-1.0 status. https://github.com/frenzymath/Archon-Horizon/blob/0c5d4e13bbb397d80d5cb6cfa29f2eaa1a681f1b/README.md"
  - "[Docs:architecture] Official architecture guide inspected at commit 0c5d4e13bbb397d80d5cb6cfa29f2eaa1a681f1b: workspace/projects, teams, shared ledger/inbox/roadmap, synchronizer, default-deny cross-team delegation, harness seam, native subagents and skills. https://github.com/frenzymath/Archon-Horizon/blob/0c5d4e13bbb397d80d5cb6cfa29f2eaa1a681f1b/docs/architecture/README.md"
  - "[Docs:changelog] Changelog inspected at commit 0c5d4e13bbb397d80d5cb6cfa29f2eaa1a681f1b: v0.1.3 dated 2026-08-18; states that while major version is 0, APIs/on-disk formats may change between minor releases. https://github.com/frenzymath/Archon-Horizon/blob/0c5d4e13bbb397d80d5cb6cfa29f2eaa1a681f1b/docs/CHANGELOG.md"
  - "[Docs:design-review] v0.1.2 architecture review inspected at commit 0c5d4e13bbb397d80d5cb6cfa29f2eaa1a681f1b: on a 162-run, 2.4GB project workspace, the project measured the old /api/state idle poll at about 11-13s of server work every 5s and the optimized idle path at about 85ms. This is project-reported profiling, not an independent benchmark. https://github.com/frenzymath/Archon-Horizon/blob/0c5d4e13bbb397d80d5cb6cfa29f2eaa1a681f1b/docs/design/v0.1.2-architecture-review.md"
  - "[GH:vcs] Workspace ledger/git implementation inspected at commit 0c5d4e13bbb397d80d5cb6cfa29f2eaa1a681f1b: out-of-tree repository, private-index/HEAD race guard, provenance trailers, excludes, best-effort fail-open secret redaction, and nested .git neutralization. https://github.com/frenzymath/Archon-Horizon/blob/0c5d4e13bbb397d80d5cb6cfa29f2eaa1a681f1b/src/archon_horizon/vcs/git.py"
  - "[GH:local-scan] Shallow local scan of commit 0c5d4e13bbb397d80d5cb6cfa29f2eaa1a681f1b on 2026-08-28: 325 tracked files, 191 Python files, 67 test-related Python files; python -m py_compile passed for 123 implementation/script Python files. GitHub Actions CI covers Python plus frontend typecheck/build and wheel-content checks. This is compile-only/static evidence, not dependency install, pytest, frontend build, Lean/model run, benchmark, or proof validation. CONTRIBUTING.md and docs changelog exist; no SECURITY.md, CODE_OF_CONDUCT.md, Dockerfile, or Compose file found."
  - "[GH:advisories] GitHub repository security-advisories endpoint returned [] on 2026-08-28. This means only that no published repository GHSA was found in this check; it is not evidence that Archon Horizon or its dependencies are safe."
  - "[Blog:Horizon] Official FrenzyMath Archon Horizon announcement checked 2026-08-28: https://frenzymath.com/blog/archon-horizon/"
  - "[Paper:Rethlas-Archon] Haocheng Ju et al., Automated Conjecture Resolution with Formal Verification, arXiv:2604.03789v2, used for Archon/Rethlas research-lineage context, not as evidence of Horizon-specific results: https://arxiv.org/abs/2604.03789"
  - "[Paper:AI4Math] Haocheng Ju and Bin Dong, AI for Mathematics: Progress, Challenges, and Prospects, arXiv:2601.13209v5, used as field background only: https://arxiv.org/abs/2601.13209"
  - "[Paper:boundary] Repository README, official Horizon announcement, arXiv API title/author searches, and cited links were checked on 2026-08-28; no independent Archon Horizon system preprint was found. Therefore no paper-level performance/result claim is attributed to Horizon in this analysis."
---

# Archon Horizon

> 面向跨 session、跨 Lean 项目的长程 agent workspace：以共享 ledger、任务/roadmap/inbox、预算、harness 和 dashboard 管理持续形式化工作。
>
> **状态**: `active` · **总分**: 3.3/5 · **推荐度**: 4/5

## 一句话总结

Archon Horizon 把 Archon 的单项目自动化扩展成“多个 team 在一个数学 workspace 中持续工作”的 orchestration layer；它最有价值的不是单轮 proof prompt，而是 durable state、provenance、budget、resume、freeze 与跨 run 协作 [GH:readme][Docs:architecture]。

## 总体评价

Horizon 的 primary object 是长程数学 agent workspace：workspace 包含多个 Lean projects，`horizon run` 是一个 team，由 Horizon lead 派发 ground/work-reviewer/janitor 等 native subagents；不同 teams 通过共享 roadmap、task、inbox、hgraph 与 out-of-tree commit ledger 异步协调，而非同步聊天 [Docs:architecture]。

工程设计有许多针对真实长任务的细节：run/session provenance、private git index 与 stale-HEAD guard、token/cost budgets、rate-limit pause/resume、live process registry、Codex nested-subagent telemetry、freeze/write-set scheduling、loopback dashboard 和 JSON CLI。v0.1.2 architecture review 还给出 dashboard 热路径从每 5 秒一次、每次约 11–13 秒 server work，降到 idle 约 85ms 的项目自测数据；这可说明团队做过 profiling，但不是独立 benchmark [Docs:design-review][GH:vcs]。

**论文边界**：截至 2026-08-28，仓库 README、官方公告和 arXiv 检索未发现 Horizon 自己的独立系统预印本。`2604.03789` 对应 Rethlas–Archon，`2601.13209` 是 AI4Math 综述；二者只能说明研究 lineage/领域背景，不能证明 Horizon 的性能或成功率 [Paper:boundary][Paper:Rethlas-Archon][Paper:AI4Math]。

本次没有创建 workspace、运行 agent、执行 Lean check 或 frontend build；评分依赖静态代码/docs/CI 结构和 compile-only smoke [GH:local-scan]。

## 推荐度：4/5

**面向已经在做多 session、多 project Lean formalization，且需要 durable governance、可恢复执行与 agent provenance 的研究团队，Horizon 值得重点试验；只做单项目固定流水线或短证明时，Archon/更小工具通常更合适。**

给 4 分是因为它系统性处理了长程 agent 的状态、并发、成本、可见性和恢复问题，且代码/文档质量高；没有给 5 分，是因为仅 v0.1.3、单一可见贡献者、无独立论文/公开 benchmark，on-disk/API 仍允许 minor breaking changes。

## 优势

1. **durable workspace model**：roadmap、tasks、inboxes、reports、events、memory、hgraph 与 ledger 都是显式文件/记录，不依赖 agent context 存活 [Docs:architecture]。
2. **provenance-first Git**：共享 out-of-tree repository 保存实际文件快照，commit trailers 绑定 run/role/session/task，stale base 通过 compare-and-swap guard 拒绝 [GH:vcs]。
3. **长任务运行控制**：预算、pause/resume、process registry、rate-limit 分类、usage gauge 与 dashboard 让无人值守更可观察 [Docs:changelog]。
4. **多 harness 与 native subagents**：Claude Code、Codex、generic command/external-agent seam；Codex child rollout 可在 parent 运行时被归并进 transcript [Docs:architecture][Docs:changelog]。
5. **治理默认较克制**：跨 team 创建 task/run 的 delegation 默认 deny，read-only review subagents 使用 engine-enforced restrictions，freeze 在 dispatch 前机械检查 [Docs:architecture]。
6. **文档和 CI 完整**：主题化 docs、changelog、contribution guide、Python/frontend/wheel CI 对一个年轻研究工具很少见 [GH:local-scan]。

## 劣势

1. **抽象面很大**：workspace、projects、teams、runs、sessions、tasks、roadmap、inbox、hgraph、ledger、harness、freeze、budget 同时存在，学习和迁移成本高。
2. **仍是 pre-1.0**：changelog明确允许 minor release 改 API/on-disk format；长期 workspace 必须保留备份和 migration plan [Docs:changelog]。
3. **形式化质量仍依赖底层 agent/Lean workflow**：Horizon 管理 execution 与 evidence carrier，不自动保证题目选得对、proof idiomatic 或所有语义约束正确。
4. **资源/模型成本高**：多项目 Lean checkout、build cache、并行 teams、subagents、dashboard 和长日志会持续增长。
5. **尚无独立论文级评估**：官方 announcement 不是同行评审或可复现实验，不能用 Archon 论文替 Horizon 背书 [Paper:boundary][Blog:Horizon]。

---

## 适合什么场景

- 多个互相依赖的 Lean projects 需要长期、可恢复 agent work。
- 多支 agent teams 共用 roadmap/inbox/graph，但需要 provenance 与 write-set 冲突控制。
- 需要追踪 token/cost、rate limit、process status 和每次 commit 的来源。
- 需要在 Claude Code/Codex/自定义 CLI harness 之间切换。
- 希望 human supervisor 通过 dashboard、freeze、tasks 与 reports 而非持续盯 terminal。

## 不适合什么场景

- 单个 theorem、短 session 或一次性 code completion。
- 资源紧张、难以同时承载 Mathlib、多 project、agent processes 与 dashboard 的机器。
- 不愿维护 workspace state/migration/backup 的个人用户。
- 把“orchestration 完整”误当成“数学结果自动可靠”的项目。
- 需要已发表 Horizon-specific benchmark、稳定 v1 API 或多组织生产案例的采购决策。

## 与类似项目对比

| 项目 | 定位 | 相对本项目 |
|------|------|-----------|
| Archon | 单/多项目监控下的固定 DAG + plan–prove–review Lean pipeline | Archon 的 formalization phases 更具体；Horizon 的 workspace/teams/ledger 治理更通用、更长程 |
| Danus | 自然语言多 agent research + verifier-gated fact graph | Danus authority 集中在事实接受；Horizon authority 集中在 workspace state、commit 与 task provenance |
| Rethlas | 最小 generator–verifier proof loop | Rethlas 更易理解和复现；Horizon 多出完整长期运维面，也重得多 |
| Iteris | computational-math research workspace | 两者都重 durable state；Iteris 更偏实验/facts/reports/evolve，Horizon 更偏 Lean 多项目与共享 ledger |

本表中的项目在本批次按同一评分框架审阅；没有统一执行 benchmark。

---

## 它能做什么

- 初始化/更新包含多个 Lean projects 的 workspace。
- 管理 roadmap、tasks、inboxes、reports、memory、hgraph 和 external libraries。
- 用 Claude Code、Codex 或 generic command harness 运行 focused/supervisor sessions。
- 派发 native subagents，并把 parent/child telemetry 汇入 transcript。
- 用 freeze/write sets 调度非冲突工作，用 default-deny delegation 管理跨 team 扩张。
- 记录 token/cost、budget、rate-limit pause 与 resume state。
- 将每次 agent/integration change 写入带 provenance trailers 的共享 ledger。
- 通过 local dashboard/JSON CLI 检索运行、提交、图、blueprint、usage 与性能状态 [GH:readme][Docs:architecture][Docs:changelog]。

这些是文档与实现面能力，不代表本次已成功跑过实际 workspace [GH:local-scan]。

## 运行环境与资源占用

| 场景 | CPU | 内存 | 存储 | 说明 |
|------|-----|------|------|------|
| 单 project 试验 | 4 cores | 8GB | 20GB | 单 team、低并行、一个 Lean checkout |
| 多 project 长程运行 | 8-16+ cores | 16-32GB+ | 50-100GB+ | 多 teams、Mathlib caches、ledger、logs、frontend；模型费用另计 |

- **运行时**：Python 3.11+、Git、Lean/Lake/Mathlib、Claude Code 或 Codex；dashboard 还需 Node frontend artifacts/build path。
- **操作系统**：Linux/macOS 路径最自然；Windows 原生未验证。
- **Docker**：未发现官方镜像、Dockerfile 或 Compose，故 `docker_support: false` [GH:local-scan]。
- **GPU**：不要求本地 GPU；模型通常由外部 provider 承担。
- **外部依赖**：GitHub integration 可用 `gh`，external libraries 可能 clone 额外 Lean repositories。

资源数字是多项目/进程结构的启发式估计，不是实测。

## 上手体验

评分 3/5。

`horizon init/run/dashboard/check/usage/ps` 与主题化 docs 给出了完整路径，JSON 输出和 config validation 也利于自动化；但概念密度高，真正安全运行前要理解 workspace ledger、nested git neutralization、freeze vs advisory protection、budget、harness homes 与 project dependencies [GH:readme][Docs:architecture][GH:vcs]。

## 代码质量

评分 4/5。

模块边界清楚，typed dataclasses/schema、append-only transcript、private-index Git、freeze-aware scheduler、timeout/coalescing、CI 和 67 个 test-related files 体现了工程投入。本地 123 个实现/脚本 Python 文件通过 `py_compile`；因未运行 pytest/frontend build/Lean workflow，仍不能宣称 runtime verified [GH:local-scan][GH:vcs]。

## 可扩展性

评分 4/5。

Harness interface、generic command/external-agent、native subagent compiler、skills、inbox providers、external libraries、JSON CLI 与 workspace config 都是清晰扩展点。扣分在于 0.x 磁盘格式和内部对象仍快速变化，第三方扩展需要跟随核心 lifecycle [Docs:architecture][Docs:changelog]。

## 文档质量

评分 5/5。

README之外，architecture、configuration、workspaces/projects、orchestration/roadmap、inboxes、dashboard/search、blueprint/graph、design review 与 changelog 均有专门文档，并链接到实现文件。文档还明确版本迁移、performance measurements 与 security/governance semantics；对年轻项目而言属于优秀 [Docs:architecture][Docs:changelog]。

## 社区与成熟度

| 维度 | 评分 | 说明 |
|------|------|------|
| 社区活跃度 | 2/5 | 2026-08-28 快照仅 24 stars、0 forks、1 名可见贡献者；有 CONTRIBUTING 但尚未形成外部生态 [GH:metadata][GH:local-scan] |
| 成熟度 | 2/5 | v0.1.3、2026-07 创建，明确允许 minor breaking changes，且无 GitHub release artifacts [GH:metadata][Docs:changelog] |

## 安全与风险

评分 3/5。

正面：cross-team delegation 默认 deny、review subagents 可 engine-enforced read-only、freeze/write-set 在 dispatch 前检查、dashboard 默认本地、ledger 有 stale-HEAD/deletion guard、常见 secret paths 被排除 [Docs:architecture][GH:vcs]。

限制：Horizon lead 仍是能在 project/workspace 执行工具的 coding agent；permission record 只约束跨 team delegation，不等于全面 host sandbox。secret hook 是 best-effort、会 fail open，且只覆盖高置信 pattern；raw transcripts 也可能含敏感内容。应在隔离账户/VM 内运行并最小化 credentials [GH:vcs]。

GHSA 查询为空不证明安全；仓库没有 SECURITY.md [GH:advisories][GH:local-scan]。

## 学习价值

Horizon 是研究 **long-horizon agent operating system** 的好样本：它把 context 外的 durable coordination、shared authority、git provenance、budget exhaustion、resume、concurrency conflict 与 observability 都做成一等对象。最值得借鉴的判断是：多 agent 不应靠“彼此聊天”维持一致性，而应通过可检查的 state/ledger/scheduler 协调；同时也要看到，这些治理层不能替代 Lean kernel 与人类数学判断 [Docs:architecture][GH:vcs]。
