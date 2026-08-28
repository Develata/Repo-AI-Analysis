---
title: "Iteris"
created: 2026-08-28
updated: 2026-08-28
type: repository-analysis
repo_url: "https://github.com/frenzymath/iteris"
category: "ai-programs/agents/math-agents"
tags: ["ai-for-math", "math-agent", "computational-mathematics", "research-agent", "long-horizon-agent", "codex", "claude-code", "python"]
previous_repo: ""
successor: ""
primary_language: "Python"
license: "Apache-2.0"
stars: 53
forks: 12
last_checked: 2026-08-28
last_verified: 2026-08-28
evidence: "GitHub API + repository/docs review + arXiv full-text review + compile-only smoke; no end-to-end model/computation reproduction"
archived_reason: ""
docker_support: false
gpu_required: false
estimated_cpu: "4-16+ cores（实验/并行 agent；未实测）"
estimated_memory: "4-16GB+（PDF、dashboard、计算进程；未实测）"
estimated_storage: "5-50GB+（references、logs、facts、reports、实验 artifacts）"
status: active
ratings:
  capability: 4
  usability: 3
  performance: 2
  code_quality: 4
  documentation: 4
  community: 2
  maturity: 2
  extensibility: 4
  security: 2
  recommendation: 4
overall_score: 3.1
sources:
  - "[GH] https://github.com/frenzymath/iteris"
  - "[GH:metadata] GitHub GraphQL/REST snapshot checked 2026-08-28: public active repository, default branch main, Python, Apache-2.0, 53 stars, 12 forks, 0 open issues, 1 open PR, 2 default-branch commits, 1 contributor, no GitHub releases; package/README version is 0.2.0."
  - "[GH:readme] README inspected at commit a82213ef6247b551ddd19b413b06266e841d2375: goal-driven research workspace, monitor/run/dashboard, Codex/Claude Code, project layout, reports/evolve family, requirements, and explicit broad-permission security model. https://github.com/frenzymath/iteris/blob/a82213ef6247b551ddd19b413b06266e841d2375/README.md"
  - "[Docs:user-guide] User guide inspected at commit a82213ef6247b551ddd19b413b06266e841d2375: https://github.com/frenzymath/iteris/blob/a82213ef6247b551ddd19b413b06266e841d2375/docs/user-guide.md"
  - "[GH:verification] Local and agentic verification implementations inspected at commit a82213ef6247b551ddd19b413b06266e841d2375: typed records, evidence files/commands, panel consensus, and model-verifier paths. https://github.com/frenzymath/iteris/tree/a82213ef6247b551ddd19b413b06266e841d2375/src/iteris/verification"
  - "[GH:local-scan] Shallow local scan of commit a82213ef6247b551ddd19b413b06266e841d2375 on 2026-08-28: 249 tracked files, 159 Python files, 43 test-related Python files; python -m py_compile passed for 116 implementation/script Python files and bash -n passed for 1 shell file. GitHub Actions CI covers Python 3.10-3.12 and frontend checks. This is syntax/compile-only evidence, not dependency install, pytest, frontend build, model run, numerical reproduction, benchmark, or mathematical validation. No SECURITY.md, CONTRIBUTING.md, CODE_OF_CONDUCT.md, Dockerfile, or Compose file found."
  - "[GH:advisories] GitHub repository security-advisories endpoint returned [] on 2026-08-28. This means only that no published repository GHSA was found in this check; it is not evidence that Iteris or its dependencies are safe."
  - "[Paper:Iteris] Leheng Chen et al., Iteris: Agentic Research Loops for Computational Mathematics, arXiv:2606.02484v1, full text checked 2026-08-28: https://arxiv.org/abs/2606.02484"
  - "[Blog:Iteris] Official FrenzyMath Iteris technical report checked 2026-08-28: https://frenzymath.com/blog/iteris/"
---

# Iteris

> 把 source、任务池、计算实验、durable facts、verification records、日志与论文报告放进同一 project-local workspace 的 computational-math research agent。
>
> **状态**: `active` · **总分**: 3.1/5 · **推荐度**: 4/5

## 一句话总结

Iteris 面向的不是单次“请证明”，而是计算数学研究循环：agent 读文献、提出/执行实验、沉淀 facts、分派后续任务、做多种 verification，再把结果组织成报告；它的研究方法很有启发，但最终正确性仍要求专家审查，且运行 agent 默认拥有广泛 workspace 权限 [GH:readme][Paper:Iteris]。

## 总体评价

Iteris 以项目目录为 durable research state：`sources/` 和 `references/` 保存问题与论文，`TASK_POOL.json` 管研究前沿，`memory/facts/` 保存带状态的事实，logs/results/reports 保留过程和产物，family/evolve 支持从一个研究根分叉多个 sibling workers。日常入口是 `iteris monitor`、`iteris run` 和 local dashboard [GH:readme][Docs:user-guide]。

实现不只是 prompt 集：有 Codex/Claude executors、tmux/foreground lifecycle、arXiv/PDF/theorem-search tools、structured fact store、local command/file verification、agent verifier、panel consensus、supervision engine、LaTeX report workspace 和 React/Fastify dashboard。它比 Danus 更强调 computation/experiment 与 research artifact，比 Archon 更少绑定 Lean [GH:verification][GH:local-scan]。

论文给出两个 computational-math case studies，并公开说明最终结果经过 expert verification、repair 与 exposition reorganization。这个边界很重要：论文支持“agentic loop 能推动真实研究”，不支持“当前开源仓库可无人工产出可发表结论” [Paper:Iteris]。

本次没有安装 dependencies、运行模型、执行数值实验或复现论文案例；评分来自静态实现、CI/docs 与论文全文 [GH:local-scan]。

## 推荐度：4/5

**面向会编程、能审查数值/符号实验、愿意隔离 agent 权限并把专家复核留在闭环内的 computational mathematics 研究者，Iteris 值得重点试验；面向只需聊天问答或要求自动形式化证书的用户，不应直接采用。**

给 4 分是因为它把研究过程的材料、任务、facts、verification、logs 和 reports 做成一套完整 workspace，且公开论文与代码可相互参照；没有给 5 分，是因为项目只有 2 个 default-branch commits、单一可见贡献者，权限激进，论文成果仍有人类 repair，且本次未复现。

## 优势

1. **research lifecycle 完整**：从 source ingestion、任务选择、agent execution、fact memory、verification 到 LaTeX report 都有一等目录/命令 [GH:readme]。
2. **verification 不止一个布尔值**：支持 local evidence/commands、agent verifier、panel 与 typed record，能记录 accepted/rejected/uncertain 及证据 [GH:verification]。
3. **适配 computational mathematics**：允许代码、数值试验、PDF/arXiv 文献和 theorem search 同处一个可追踪 project，而非强迫所有结果立即 formalize。
4. **family/evolve 适合探索分支**：多个 sibling paths 可并行探索不同假设/参数，再共享 family memory [GH:readme]。
5. **supervision 与可视化较完整**：monitor、tmux、dashboard、live logs、facts/artifacts/reports 让人类能观察长任务 [GH:readme][Docs:user-guide]。
6. **论文主动保留 human role**：最终 expert verification/repair 的披露，比把 agent output 直接包装成 autonomous discovery 更可信 [Paper:Iteris]。

## 劣势

1. **权限面很宽**：README 明示 Codex 使用 approval-bypass，Claude Code 使用 `--dangerously-skip-permissions`；agent 可读写、运行工具并管理项目状态 [GH:readme]。
2. **正确性是混合证据**：local checks、LLM verifier、panel 和专家 review 的强度不同；用户必须区分“命令执行成功”“模型同意”和“数学上成立”。
3. **资源与成本难控**：长程模型会话、多个 sibling、数值实验、PDF、dashboard 与 reports 会同时耗费 tokens、CPU、内存和磁盘。
4. **极年轻的仓库历史**：249 个 tracked files 压在 2 个 default-branch commits 和 1 名贡献者上，难以从历史评估演进质量 [GH:metadata][GH:local-scan]。
5. **平台依赖较多**：tmux、ripgrep、Node 20、Git、模型 CLI、Python 与可选计算工具组成较重的本地栈。

---

## 适合什么场景

- 数值分析、动力系统、优化、PDE、symbolic/numeric 混合研究的长程探索。
- 需要把论文/PDF、代码实验、facts、任务与报告放在统一 workspace。
- 希望 agent 能并行探索多个 hypothesis/parameter family，同时保留人类 oversight。
- 研究“LLM + tools + durable memory + evidence records”的科研工作流。
- 在最终专家复核前生成 conjectures、实验结果和 exposition drafts。

## 不适合什么场景

- 只需一次问答、短证明或简单文献摘要。
- 要求 Lean/Coq kernel certificate 的形式化验证。
- 不能把项目材料发送给外部模型 provider 的保密环境。
- 存放凭据、私人文件或其他项目数据的共享 home/workstation。
- 资源极小、不能运行 Node dashboard/tmux/多进程实验的主机。
- 把 agent consensus 当成独立数学证明的流程。

## 与类似项目对比

| 项目 | 定位 | 相对本项目 |
|------|------|-----------|
| Danus | verifier-gated natural-language facts 与 fact DAG | Danus authority 更集中、fact dependency 更强；Iteris 的实验/报告/workspace surface 更广 |
| Rethlas | 最小自然语言 generation–verification loop | Rethlas 更轻；Iteris 多出 durable task/fact/report/supervision 体系 |
| Archon | repository-scale Lean autoformalization | Archon 最终 proof 可由 Lean 检查；Iteris 更适合非形式化/计算型研究 |
| Archon Horizon | 多项目长程 Lean workspace 与共享 ledger | Horizon 更偏跨 team provenance/governance；Iteris 更偏 research loop、实验和 evolve families |

本表中的项目在本批次按同一评分框架审阅，未统一复现论文实验。

---

## 它能做什么

- 初始化 research project 并保存 source/reference/PDF。
- 用 monitor 诊断状态、给出 next step、恢复中断任务。
- 在 foreground 或 tmux 中运行 Codex/Claude Code research loop。
- 管理 task pool、durable facts、verification records、logs 与 final artifacts。
- 搜索 arXiv、提取 PDF、调用 theorem search 或项目自定义工具。
- 执行 local checks、agent verification 与 panel review。
- 分叉/schedule family siblings 并共享 evolve memory。
- 生成与迭代 LaTeX report workspace，通过 dashboard 查看全过程 [GH:readme][Docs:user-guide][GH:verification]。

这些是代码/文档能力；本次未执行真实 research run [GH:local-scan]。

## 运行环境与资源占用

| 场景 | CPU | 内存 | 存储 | 说明 |
|------|-----|------|------|------|
| 小型项目 | 4 cores | 4-8GB | 5-10GB | 单 agent、少量 PDF/实验，dashboard 可选 |
| 多分支研究 | 8-16+ cores | 8-16GB+ | 20-50GB+ | 多 sibling/tmux、数值进程、logs、facts、reports；模型费用另计 |

- **运行时**：Python 3.10+、Git、ripgrep、Codex 或 Claude Code；detached run 需 tmux。
- **操作系统**：README主支持 Linux/macOS；Windows 未列为 primary platform [GH:readme]。
- **Docker**：未发现官方镜像、Dockerfile 或 Compose，故 `docker_support: false` [GH:local-scan]。
- **GPU**：核心不要求本地 GPU；具体研究代码可能另有需求。
- **外部依赖**：Node.js 20+/npm 用于 dashboard，requests/pdfminer/FastAPI 等用于文献和服务面。

资源数字是依赖栈与并发方式的启发式估计，不是实测。

## 上手体验

评分 3/5。

`bash install.sh`、`iteris init/monitor/run/dashboard` 与中英 README 给出了连续路径，项目目录也较直观；但要正确使用 verification、family/evolve、report、tmux 与模型权限仍需读 user guide，并自行准备 provider login 与隔离 workspace [GH:readme][Docs:user-guide]。

## 代码质量

评分 4/5。

159 个 Python 文件按 agents/tools/memory/verification/supervision/commands/project 分层，typed Pydantic records、CI、43 个 test-related files 和前端检查显示出工程结构。本地 116 个 Python 文件及 1 个 shell 文件通过语法检查；因未跑 pytest/frontend/真实 executor，仅能说明静态可解析 [GH:verification][GH:local-scan]。

## 可扩展性

评分 4/5。

Executor、tools、verification backend、facts、supervision、report 与 family 都是独立模块，project-local files 也允许研究者加入自定义代码/命令。扣分在于缺少稳定 plugin API/version guarantees，许多扩展仍需理解内部目录和 prompt contract。

## 文档质量

评分 4/5。

英文/中文 README、quick start、security model、project layout 与 user guide 覆盖主流程，论文补充设计动机与案例。尚缺完整 developer/API docs、migration/changelog、contribution/security policy 和可复现实验说明 [GH:readme][Paper:Iteris][GH:local-scan]。

## 社区与成熟度

| 维度 | 评分 | 说明 |
|------|------|------|
| 社区活跃度 | 2/5 | 2026-08-28 快照有 53 stars、12 forks、1 名贡献者；没有 contribution/code-of-conduct 治理面 [GH:metadata][GH:local-scan] |
| 成熟度 | 2/5 | 2026-06 创建、版本 0.2.0、仅 2 个 default-branch commits、无 GitHub releases，长期兼容/生产采用未知 [GH:metadata] |

## 安全与风险

评分 2/5。

README 对风险披露很明确：两类 engine 都以 bypass permissions 模式运行，可读写项目、执行命令并把 sources/references 发给 provider。项目级目录能缩小数据面，但不是 OS sandbox；用户必须用专用账户/VM/container、最小 credentials 和可恢复备份 [GH:readme]。

Verification panel 也不是安全边界：多个模型意见不能消除 prompt injection、恶意论文内容、共模推理或危险 command evidence。GHSA 查询为空不证明安全；仓库没有 SECURITY.md [GH:verification][GH:advisories][GH:local-scan]。

## 学习价值

Iteris 展示了如何把科研 agent 从“长聊天”重构为 **stateful research process**：task frontier、facts、evidence、artifacts、reports 与 branch families 都可单独检查。论文最重要的 lesson 不是 agent 已替代数学家，而是 agent 可以扩大探索带宽，而 expert verification、repair 和 exposition 仍是结果成为数学知识的必要步骤 [Paper:Iteris]。
