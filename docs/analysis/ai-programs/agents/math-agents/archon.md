---
title: "Archon"
created: 2026-08-28
updated: 2026-08-28
type: repository-analysis
repo_url: "https://github.com/frenzymath/Archon"
category: "ai-programs/agents/math-agents"
tags: ["ai-for-math", "math-agent", "lean4", "autoformalization", "theorem-proving", "multi-agent", "codex", "claude-code", "python"]
previous_repo: ""
successor: ""
primary_language: "Python"
license: "Apache-2.0"
stars: 209
forks: 36
last_checked: 2026-08-28
last_verified: 2026-08-28
evidence: "GitHub API + repository/docs review + arXiv full-text review + compile-only smoke; no Lean/model end-to-end run"
archived_reason: ""
docker_support: false
gpu_required: false
estimated_cpu: "4-16 cores（Lean build 与并行 prover；未实测）"
estimated_memory: "8-32GB（Mathlib/多 agent；未实测）"
estimated_storage: "10-50GB+（Lean toolchain、Mathlib、worktrees 与日志）"
status: active
ratings:
  capability: 4
  usability: 3
  performance: 2
  code_quality: 3
  documentation: 4
  community: 3
  maturity: 2
  extensibility: 4
  security: 2
  recommendation: 4
overall_score: 3.1
sources:
  - "[GH] https://github.com/frenzymath/Archon"
  - "[GH:metadata] GitHub GraphQL/REST snapshot checked 2026-08-28: public active repository, default branch main, Python, Apache-2.0, 209 stars, 36 forks, 0 open issues, 0 open PRs, 72 default-branch commits, 5 contributors, no GitHub releases; README/package version is 0.3.3."
  - "[GH:readme] README inspected at commit 3fe2618870808d8c20912ab8b5aff80af275a1de: project-level Lean 4 formalization, plan/prover/review loop, DAG/blueprint, dashboard, Claude Code/Codex harnesses, safe-mode warning, and human role. https://github.com/frenzymath/Archon/blob/3fe2618870808d8c20912ab8b5aff80af275a1de/README.md"
  - "[GH:changelog] Project changelog inspected at commit 3fe2618870808d8c20912ab8b5aff80af275a1de: https://github.com/frenzymath/Archon/blob/3fe2618870808d8c20912ab8b5aff80af275a1de/docs/CHANGELOG.md"
  - "[GH:local-scan] Shallow local scan of commit 3fe2618870808d8c20912ab8b5aff80af275a1de on 2026-08-28: 516 tracked files, 259 Python files, 62 test-related Python/shell files; python -m py_compile passed for 202 implementation/script Python files and bash -n passed for 12 shell files. This is syntax/compile-only evidence, not dependency install, pytest, lake build, model run, benchmark, or proof validation. No GitHub Actions workflow, SECURITY.md, CONTRIBUTING.md, CODE_OF_CONDUCT.md, Dockerfile, or Compose file found."
  - "[GH:loop] Plan/prover/review/finalize phases and deterministic leanok marker sync inspected at commit 3fe2618870808d8c20912ab8b5aff80af275a1de: https://github.com/frenzymath/Archon/tree/3fe2618870808d8c20912ab8b5aff80af275a1de/src/archon/commands/loop"
  - "[GH:codex] Codex harness implementation inspected at commit 3fe2618870808d8c20912ab8b5aff80af275a1de: subprocess supervision, JSONL normalization, Lean-LSP MCP wiring, and documented no-true-resume limit. https://github.com/frenzymath/Archon/blob/3fe2618870808d8c20912ab8b5aff80af275a1de/src/archon/agents/codex.py"
  - "[GH:advisories] GitHub repository security-advisories endpoint returned [] on 2026-08-28. This means only that no published repository GHSA was found in this check; it is not evidence that Archon or its dependencies are safe."
  - "[Paper:Rethlas-Archon] Haocheng Ju et al., Automated Conjecture Resolution with Formal Verification, arXiv:2604.03789v2, full text checked 2026-08-28: https://arxiv.org/abs/2604.03789"
  - "[Paper:AI4Math] Haocheng Ju and Bin Dong, AI for Mathematics: Progress, Challenges, and Prospects, arXiv:2601.13209v5, used as field/background source rather than Archon-specific evaluation: https://arxiv.org/abs/2601.13209"
  - "[Blog:Archon] Official FrenzyMath Archon first-proof technical announcement checked 2026-08-28: https://frenzymath.com/blog/archon-firstproof/"
---

# Archon

> 以 blueprint/DAG、plan–prove–review 循环和 Lean toolchain 为核心的 repository-scale 自动形式化 agent 系统。
>
> **状态**: `active` · **总分**: 3.1/5 · **推荐度**: 4/5

## 一句话总结

Archon 不是做单题 benchmark 的 tactic wrapper，而是让 Claude Code 或 Codex 在完整 Lean 4 项目里规划依赖图、并行填补 proofs、运行 `lake build`、复核并持续提交；它的强项是把长程 autoformalization 工程化，代价是复杂、昂贵且默认权限很高 [GH:readme][GH:loop]。

## 总体评价

Archon 围绕 Lean repository 的生命周期组织 agent：先把非形式化 blueprint elaborated 为 DAG，再按 scaffolding/proving/polish 阶段生成 objectives，串行或并行派发 prover，运行 fresh review，机械同步 `\leanok` 标记，最后执行 git/lake/blueprint finalization。Dashboard、multi-project scope、cost tracking、subagents、Claude/Codex harness 与 Lean-LSP MCP 让它比单个 prompt 工具更接近专用自动形式化工作台 [GH:readme][GH:loop][GH:codex]。

`arXiv:2604.03789` 把 Archon 放在 Rethlas 的自然语言推理之后，用 Lean 进行形式化验证。论文显示该路径能产出正确 formalization，同时也指出生成代码可能 verbose、与 Mathlib idiom 不一致，且研究案例并不证明任意 repository 可无人值守完成 [Paper:Rethlas-Archon]。README 还明确说公开版 informal agent 是简化的一次 API call，内部实现并未完整开源，这限制了论文系统与公开仓库的一一对应 [GH:readme]。

本次没有安装 Lean/Mathlib、运行 `archon setup`、调用模型或复现实验；评分基于代码、文档、论文与 compile-only smoke [GH:local-scan]。

## 推荐度：4/5

**面向已有 Lean 4/Mathlib 工程、愿意监控长程 agent 并把 kernel compilation 作为最终证据的 AI4Math/形式化团队，Archon 值得优先试验；面向初学者、低预算用户或高合规环境，不适合直接采用。**

给 4 分，是因为项目真正处理 blueprint、依赖图、并行证明、review、build 和进度可视化这些 repository-scale 难点；没有给 5 分，是因为默认危险权限、工具链复杂、无 CI、公开/内部 informal pipeline 有边界，且仍处于快速迭代期。

## 优势

1. **最终证据可落到 Lean**：与纯 LLM verifier 不同，生成 proof 可以由 Lean elaborator/kernel 与 `lake build` 机械检查 [Paper:Rethlas-Archon][GH:loop]。
2. **repository-scale workflow**：blueprint、DAG、阶段、objectives、blocked dependency filter、并行 prover 与 fresh review 共同管理跨文件依赖 [GH:readme][GH:loop]。
3. **机械同步减少 headline laundering**：`sync_leanok` 根据实际 sorry/compile 状态更新 blueprint marker，不把这一判断完全交给 reviewer prose [GH:loop]。
4. **Claude Code / Codex 双 harness**：Codex 不是简单 shell alias，而有 JSONL normalizer、subprocess supervision、MCP wiring 与 nested runtime 处理 [GH:codex]。
5. **监控与恢复面丰富**：dashboard、JSONL logs、token/cost、static export、resume、git snapshots 和 migration docs 改善长任务可运维性 [GH:readme][GH:changelog]。

## 劣势

1. **默认权限危险**：README 明示默认 `archon loop` 使用 Claude Code `--dangerously-skip-permissions`；safe mode 需显式开启 [GH:readme]。
2. **本地资源与模型成本高**：Mathlib build、多个 prover/reviewer、worktree/snapshot 和长 context 同时消耗 CPU、内存、磁盘与 tokens。
3. **工程 surface 很大**：500+ tracked files、259 Python files及多条 workflow，配置、迁移、dashboard、MCP、provider 和 Lean toolchain 的故障面广 [GH:local-scan]。
4. **无仓库 CI**：虽然测试文件多，本次未发现 GitHub Actions；没有持续证明 pytest/packaging/Lean fixtures 在干净环境可复现 [GH:local-scan]。
5. **公开实现与研究系统不完全等价**：README 承认 informal agent 公开版是简化 demo；论文结果不能直接当成当前 checkout 的 benchmark [GH:readme][Paper:Rethlas-Archon]。

---

## 适合什么场景

- 多文件、互相依赖的 Lean 4 research formalization。
- 已有 blueprint/非形式化材料，需要持续转成 declarations 与 proofs。
- 需要 plan/prover/reviewer 角色分离、并行 lane 和可视化进度。
- 比较 Claude Code 与 Codex 在相同 formalization workflow 中的行为。
- 希望把数学结果从 LLM prose 提升到可编译 Lean artifact。

## 不适合什么场景

- 单个短 olympiad problem 或只需一次 tactic suggestion 的任务。
- 没有 Lean/Mathlib 基础、不能诊断 lake/build/environment 问题的用户。
- 不允许 agent 执行 shell、网络或广泛写文件的主机。
- 小内存、低 token budget、短时间 SLA 环境。
- 需要稳定 API/磁盘格式、官方 release artifact 与严格 CI 证明的生产平台。

## 与类似项目对比

| 项目 | 定位 | 相对本项目 |
|------|------|-----------|
| Rethlas | 自然语言证明 generation–verification loop | 更小、更容易复现；Archon 多了 Lean kernel path 与 repository-scale 工程 |
| Danus | 非形式化多 agent research + fact graph | Danus 更适合开放式数学探索；Archon 的最终 proof artifact 可以由 Lean 检查 |
| Archon Horizon | workspace-first、跨 session/项目的长程 Lean agent orchestration | Horizon 更偏共享 ledger、teams、budget 与 workspace governance；Archon 的固定 plan–prove–review pipeline 更具体 |
| Iteris | computational mathematics 的实验/报告 research workspace | Iteris 不局限于 Lean，强调 computation 与 research artifacts；Archon 更专注 formalization |

本表中的项目在本批次按同一 10 维框架审阅，但没有统一复现论文 benchmark。

---

## 它能做什么

- 初始化/诊断 Lean + Mathlib + agent CLI 环境。
- 从 informal blueprint 构建、审阅和修复 declaration DAG。
- 规划阶段 objectives，串行或按文件并行派发 prover。
- 调用 Lean-LSP MCP、`lake build` 和 sorry analysis 进行反馈。
- 派发 review/subagents，机械同步 blueprint 的 `\leanok` 状态。
- 管理 multi-lane/worktree、project scope、peer projects 与 progress state。
- 在 dashboard 中查看 logs、cost、commits、DAG/blueprint，并可生成 static export [GH:readme][GH:loop]。

这些是文档和静态实现能力；本次没有真实 Lean/model run [GH:local-scan]。

## 运行环境与资源占用

| 场景 | CPU | 内存 | 存储 | 说明 |
|------|-----|------|------|------|
| 小型试验 | 4 cores | 8GB | 10-20GB | 单 project、低并行；Lean/Mathlib cache 占主要本地资源 |
| 长程项目 | 8-16+ cores | 16-32GB+ | 20-50GB+ | 多 lane、worktrees、build、logs、dashboard；模型费用另计 |

- **运行时**：Python 3.10+、Lean 4/Lake/Mathlib、Git、uv、Claude Code 或 Codex。
- **操作系统**：Linux/macOS 路径最成熟；脚本和 sandbox 行为在 Windows 未验证。
- **Docker**：未发现官方镜像、Dockerfile 或 Compose，故 `docker_support: false` [GH:local-scan]。
- **GPU**：不要求本地 GPU；模型通常远端调用。
- **外部依赖**：`leandag`、`claude-p` 等 Git dependencies，Lean-LSP MCP、模型 provider credentials。

资源数字为工具链/并发面的启发式估计，不是 benchmark。

## 上手体验

评分 3/5。

`curl | bash`、`archon setup/doctor/init` 与 README walkthrough 降低了首次安装门槛，dashboard 也利于观察；但真正运行前仍需正确的 Lean project、Mathlib cache、模型 CLI、权限选择、project config 和可能的 provider keys。README 本身建议先备份再升级，说明 on-disk workflow 仍在变化 [GH:readme][GH:changelog]。

## 代码质量

评分 3/5。

代码按 commands/phases/tooling/agents/state/dashboard 分层，测试文件数量可观，关键 failure path（sandbox、subprocess、resume、blocked deps、marker sync）有显式处理。本地 202 个 Python 文件和 12 个 shell 文件通过语法检查；但没有仓库 CI，本次也没执行 pytest/lake build，因此不能升到“持续验证充分”的 4/5 [GH:loop][GH:codex][GH:local-scan]。

## 可扩展性

评分 4/5。

HarnessDescriptor、Claude/Codex runners、MCP bundles、skills、subagent descriptors、prover modes、multi-lane config 和 dashboard export 都是实质扩展面。限制在于许多扩展仍依赖 Archon 特定目录、prompt contracts、LeanDAG/Mathlib 与 agent CLI semantics，第三方稳定 SDK 尚不成熟 [GH:codex][GH:readme]。

## 文档质量

评分 4/5。

README 很长但覆盖 install、usage、security、human role、customization 和 monitoring；另有 migration、changelog、skills/tool docs。扣分在于庞大 surface 仍需读源码理解边缘行为，且没有与 CI/release 对齐的正式 API/version support matrix [GH:readme][GH:changelog]。

## 社区与成熟度

| 维度 | 评分 | 说明 |
|------|------|------|
| 社区活跃度 | 3/5 | 2026-08-28 快照有 209 stars、36 forks、5 名可见贡献者；有持续提交和完整 docs，但未见 CONTRIBUTING/CODE_OF_CONDUCT，且无 open issue 不代表生态成熟 [GH:metadata][GH:local-scan] |
| 成熟度 | 2/5 | 2026-03 创建、版本 0.3.3、无 GitHub releases，changelog 与 migration 仍记录快速结构演进 [GH:metadata][GH:changelog] |

## 安全与风险

评分 2/5。

项目有 safe mode、sandbox checks、project scoping、git snapshots 和 deterministic guards 等积极措施；但默认路径仍会跳过 Claude Code permissions，使模型能执行 shell、读写文件和联网。Safe mode 是 opt-in，模型 provider、MCP server、Git dependencies 与 installer 又扩大供应链/credential surface [GH:readme][GH:codex]。

GHSA 查询为空只表示本次未发现已发布仓库 advisory；仓库没有 SECURITY.md，也没有 CI 中的 dependency/security audit 证据 [GH:advisories][GH:local-scan]。

## 学习价值

Archon 很适合研究“如何把 agent 从单次 proof completion 提升到 repository-scale formalization”：DAG planning、objective slicing、fresh review、compiler feedback、marker synchronization、worktree isolation 与 human oversight 都是可复用设计。论文则提醒，**formal correctness 与 idiomatic/maintainable formalization 是两件事**；Lean 通过不代表代码已经适合 Mathlib [Paper:Rethlas-Archon][GH:loop]。
