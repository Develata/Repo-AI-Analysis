---
title: "Danus"
created: 2026-08-28
updated: 2026-08-28
type: repository-analysis
repo_url: "https://github.com/frenzymath/Danus"
category: "ai-programs/agents/math-agents"
tags: ["ai-for-math", "math-agent", "multi-agent", "fact-graph", "automated-reasoning", "codex", "python"]
previous_repo: "https://github.com/frenzymath/Rethlas"
successor: ""
primary_language: "Python"
license: "Apache-2.0"
stars: 358
forks: 53
last_checked: 2026-08-28
last_verified: 2026-08-28
evidence: "GitHub API + repository/docs review + arXiv full-text review + compile-only smoke; no end-to-end model run"
archived_reason: ""
docker_support: false
gpu_required: false
estimated_cpu: "4+ cores（多 agent 编排；未实测）"
estimated_memory: "2-8GB（不含远端模型；未实测）"
estimated_storage: "1-10GB+（随日志、fact graph 与论文产物增长）"
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
  - "[GH] https://github.com/frenzymath/Danus"
  - "[GH:metadata] GitHub GraphQL/REST snapshot checked 2026-08-28: public active repository, default branch codex, Python, Apache-2.0, 358 stars, 53 forks, 0 open issues, 0 open PRs, 21 default-branch commits, 2 contributors, 2 releases; latest listed release v0.1.0-codex is a prerelease published 2026-08-11."
  - "[GH:readme] README and architecture claims inspected at commit 6d92e8d415933ca2ef52fd1a4da73fdfcd418f1c: https://github.com/frenzymath/Danus/blob/6d92e8d415933ca2ef52fd1a4da73fdfcd418f1c/README.md"
  - "[GH:architecture] ARCHITECTURE.md inspected at commit 6d92e8d415933ca2ef52fd1a4da73fdfcd418f1c: https://github.com/frenzymath/Danus/blob/6d92e8d415933ca2ef52fd1a4da73fdfcd418f1c/ARCHITECTURE.md"
  - "[GH:trust] Security and trust model inspected at commit 6d92e8d415933ca2ef52fd1a4da73fdfcd418f1c: verifier is an LLM rather than a formal prover; worker/verifier Codex sessions bypass approvals and sandbox; services bind loopback by default; role-gated gateway is fail-closed. https://github.com/frenzymath/Danus/blob/6d92e8d415933ca2ef52fd1a4da73fdfcd418f1c/docs/security-and-trust.md"
  - "[GH:local-scan] Shallow local scan of commit 6d92e8d415933ca2ef52fd1a4da73fdfcd418f1c on 2026-08-28: 225 tracked files, 94 Python files, 46 test-related Python/shell files, CI workflow present; python -m py_compile passed for 91 implementation/script Python files and bash -n passed for 10 shell files. This is syntax/compile-only evidence, not runtime, benchmark, model, or mathematical-correctness validation. No SECURITY.md, CONTRIBUTING.md, CODE_OF_CONDUCT.md, Dockerfile, or Compose file found."
  - "[GH:advisories] GitHub repository security-advisories endpoint returned [] on 2026-08-28. This means only that no published repository GHSA was found in this check; it is not evidence that Danus or its dependencies are safe."
  - "[Paper:Danus] Jihao Liu et al., Danus: Orchestrating Mathematical Reasoning Agents with Fact-Graph Memory, arXiv:2607.06447v2, full text checked 2026-08-28: https://arxiv.org/abs/2607.06447"
  - "[Paper:Rethlas-Archon] Haocheng Ju et al., Automated Conjecture Resolution with Formal Verification, arXiv:2604.03789v2, lineage/background source checked 2026-08-28: https://arxiv.org/abs/2604.03789"
  - "[Blog:Danus] Official FrenzyMath technical report checked 2026-08-28: https://frenzymath.com/blog/danus/"
---

# Danus

> 以角色隔离、冷启动 LLM verifier 和 content-addressed fact graph 组织多智能体数学研究的实验性系统。
>
> **状态**: `active` · **总分**: 3.1/5 · **推荐度**: 4/5

## 一句话总结

Danus 把“多个 agent 找证明”收束为一条可审计的流水线：主 agent 分解问题，worker 逐条提交命题与证明，冷启动 verifier 决定是否写入 fact graph；它很适合研究 AI4Math orchestration，但 **verified 在这里仍指 LLM 审核通过，不是 Lean/Coq kernel certificate** [GH:readme][GH:trust]。

## 总体评价

Danus 的价值不只是增加 agent 数量，而是把数学搜索中的角色、权限和中间知识做成显式系统：main 不能提交事实，worker 能提交但不能直接接受，verifier 只读并逐次冷启动，fact graph 记录被接受事实及依赖边。仓库还提供 global memory、Matlas/arXiv theorem search、报告/LaTeX 输出与无人值守 tmux 脚手架 [GH:architecture][GH:readme]。

论文报告六个 research-level case studies，并说明 fact-graph memory、分解和 verifier feedback 如何支撑长程探索；但论文同时把 verifier 可靠性列为核心假设，记录了文献误读、引用错误、关键人工提示和最终专家审阅等边界。因此，论文结果证明的是一套值得研究的方法与若干成功案例，不等于当前开源仓库对任意问题都能 autonomously produce correct mathematics [Paper:Danus]。

工程上，默认 `codex` 分支已有分层模块、CI 和较多测试文件；本次只做静态审阅与语法编译，没有安装模型 CLI、运行 worker swarm、复现实验或验证论文案例 [GH:local-scan]。

## 推荐度：4/5

**面向愿意隔离运行环境、能承担模型费用并亲自审阅结果的 AI4Math 研究者，Danus 值得优先试验；面向需要 machine-checked correctness 或稳定生产服务的团队，不建议直接采用。**

给 4 分的原因是它把 worker–verifier–memory–fact graph 的 authority flow 做得少见地清楚，论文、代码和安全文档也主动承认边界。没有给 5 分，是因为 verifier 本身仍是高权限 LLM、项目只有数月历史、默认分支仍有 prerelease 特征，且本次没有端到端复现。

## 优势

1. **显式 separation of powers**：工具可见性按 role 物理裁剪，未知/缺失角色回落到只读 verifier 集合，main 无法直接把自己的判断写成事实 [GH:trust]。
2. **fact graph 是可追溯的共享记忆**：事实 content-addressed，记录依赖边，撤销可级联到后继；比把所有历史塞进一个长 context 更适合长程推理 [GH:architecture]。
3. **逐事实 verify–repair loop**：worker 聚焦局部命题，verifier 新会话判定，降低同一 agent 自我确认的相关性；失败则返回修复信息 [GH:readme]。
4. **研究产物链完整**：从问题、全局记忆、fact graph 到 human report/LaTeX paper 都有对应模块和 skill [GH:readme]。
5. **边界披露诚实**：安全文档直接写明 verifier 不是 formal prover、sandbox bypass、宿主隔离要求和 loopback 网络边界 [GH:trust]。

## 劣势

1. **正确性锚点仍是 LLM judge**：`correct` verdict 是强模型判断而非可重放的 kernel check；prompt、skill、文献检索和模型本身都可能共模失效 [GH:trust][Paper:Danus]。
2. **运行成本高**：主 agent、worker swarm、每次 cold-start verifier 与可选探索 subagent 都消耗独立模型调用；论文级案例不能视作低成本默认路径。
3. **高权限宿主风险**：worker/verifier 使用 `--dangerously-bypass-approvals-and-sandbox`，项目自己也要求专用 VM/container/pod，而仓库没有官方 Docker 交付面 [GH:trust][GH:local-scan]。
4. **年轻且治理面窄**：2026-07 才创建，只有 2 名可见贡献者；未发现 CONTRIBUTING、CODE_OF_CONDUCT 或 SECURITY.md [GH:metadata][GH:local-scan]。
5. **分支与模型栈有认知成本**：默认 `codex` 分支与另一个 Claude Code orchestrator 分支共享 proof core，但入口、skills 和配置不同 [GH:readme]。

---

## 适合什么场景

- 研究“多 agent 如何积累可追溯数学事实”与 verifier-gated memory。
- 非形式化、探索性数学问题，需要并行找 lemma、counterexample、toy model 或文献线索。
- 愿意把最终结果交给领域专家再审阅的论文前期探索。
- 比较 Rethlas 的双 agent 架构与 Danus 的 orchestrator + swarm + fact graph 演进 [Paper:Rethlas-Archon][Paper:Danus]。

## 不适合什么场景

- 要求每条结论都有 Lean/Coq/Isabelle certificate 的形式化证明任务。
- 不能把代码、问题或文献上下文发送给外部模型提供商的环境。
- 与私人文件、凭据或生产密钥共处的个人工作站。
- 模型预算严格、只需一次性解答或短证明的任务。
- 需要稳定 API、长期兼容或多人治理流程的生产平台。

## 与类似项目对比

| 项目 | 定位 | 相对本项目 |
|------|------|-----------|
| Rethlas | 双 Codex agent 的自然语言证明生成—验证循环 | 更小、更容易读懂，但没有 Danus 的主 agent、fact graph authority 与完整产物链 |
| Archon | 面向 Lean 4 repository-scale formalization 的计划—证明—复核系统 | Archon 的最终证据可落到 Lean kernel；Danus 覆盖更自由的自然语言数学探索 |
| Archon Horizon | 多项目、长周期 Lean agent workspace 与共享 ledger | Horizon 更偏持续工程治理；Danus 更偏围绕单个数学研究目标积累事实 |
| Iteris | computational mathematics 的 goal-driven research workspace | Iteris 更强调任务池、实验、报告与 family/evolve；Danus 更强调 verifier-gated fact DAG |

本表中的五个项目在本批次按同一 10 维框架审阅；相对定位仍不是跨项目 benchmark 复现。

---

## 它能做什么

- 让 main agent 分解研究目标并调度多个 Codex worker。
- 让 worker 搜索文献/已有事实、提交单条命题及证明、根据 verifier 意见修复。
- 仅在 verifier 返回 `correct` 时把事实写入 content-addressed graph。
- 搜索、撤销和追踪 fact dependencies；保存不具 correctness authority 的 global memory。
- 调用 Matlas/arXiv theorem search 辅助文献定位。
- 将累积结果渲染成人类报告或 LaTeX 论文 [GH:readme][GH:architecture]。

这些能力来自仓库结构、文档与论文描述；本次没有运行真实模型或复现 case study [GH:local-scan][Paper:Danus]。

## 运行环境与资源占用

| 场景 | CPU | 内存 | 存储 | 说明 |
|------|-----|------|------|------|
| 最小试验 | 4 cores | 2-4GB | 1-5GB | 单机、少量 worker；主要推理在远端模型 |
| 长程研究 | 8+ cores | 4-8GB+ | 5-10GB+ | 多 worker、tmux、日志、fact graph、论文产物；模型调用成本可能远高于本地资源 |

- **运行时**：Python 3.10+、Codex CLI；另一个 `main` 分支使用 Claude Code orchestrator。
- **操作系统**：文档与脚本明显偏 Linux/macOS shell/tmux；Windows 原生未验证。
- **Docker**：未发现官方镜像、Dockerfile 或 Compose，故 `docker_support: false` [GH:local-scan]。
- **GPU**：不要求本地 GPU；使用远端模型时成本转移到 provider。
- **外部依赖**：模型 CLI、tmux、HTTP services、可选 Matlas/arXiv 网络访问。

资源数字是依赖栈与并发结构的启发式估计，不是 benchmark。

## 上手体验

评分 3/5。

仓库提供 getting-started、service launcher、角色配置、示例项目和架构图，入口比典型 research code 清楚；但真正获得价值需要配置 Codex、理解多个 service/role、准备隔离宿主，并接受高模型调用量。默认分支与 Claude 分支的差异也要求用户先做技术选择 [GH:readme][GH:trust]。

## 代码质量

评分 4/5。

核心、gateway、verification、execution 与 integrations 分层明确，schema/role/write-gate 有机械约束，CI 覆盖 Python 版本并运行 offline tests。本地扫描的 91 个实现/脚本 Python 文件通过 `py_compile`，10 个 shell 文件通过 `bash -n`；但这只是 syntax/compile-only，不能替代依赖安装、pytest、真实 Codex 流程或数学验证 [GH:architecture][GH:local-scan]。

## 可扩展性

评分 4/5。

角色工具、skills、gateway、search integration、rendering 和 execution loop 都有清晰 seam；fact graph schema也便于添加新的 search/verifier/renderer。扣分在于 orchestrator/worker/verifier 与 Codex CLI 及 prompt contracts 耦合较深，替换模型或引入 formal kernel 并非简单配置切换 [GH:architecture]。

## 文档质量

评分 4/5。

README、ARCHITECTURE、OPERATOR、getting-started、security-and-trust、模块级 README 与 examples 形成了较完整的 operator + developer 路径。尤其 trust model 对“verified”的语义、sandbox bypass 和 human review 讲得清楚。尚缺成熟的 API reference、版本迁移史和贡献/治理文档 [GH:trust][GH:local-scan]。

## 社区与成熟度

| 维度 | 评分 | 说明 |
|------|------|------|
| 社区活跃度 | 2/5 | 2026-08-28 快照有 358 stars、53 forks，但只有 2 名可见贡献者且无公开治理文件；可见度不等于贡献生态 [GH:metadata] |
| 成熟度 | 2/5 | 2026-07 创建，默认分支有 prerelease release，尚无长期兼容与广泛生产验证 [GH:metadata] |

## 安全与风险

评分 2/5。

正面信号是 role-gated gateway、fail-closed default、verifier read-only、write-gate 和 loopback service defaults；负面信号更关键：worker/verifier 明确绕过 approvals 与 sandbox，prompt/skills 等同高权限代码，LLM verifier 又同时承担数学 truth authority。项目文档要求使用隔离/可丢弃宿主，这应被视为前置条件而非可选优化 [GH:trust]。

GitHub advisory 查询未发现已发布 GHSA，但这不证明依赖、模型 CLI 或部署安全；仓库也没有 SECURITY.md [GH:advisories][GH:local-scan]。

## 学习价值

Danus 最值得学习的是 **authority design for non-formal mathematical agents**：把“agent 说它证明了”拆成 submit、verify、write gate、fact identity、dependency 和 revoke；同时诚实承认最后的 authority 仍是 LLM。对研究 long-horizon reasoning、event-sourced memory、agent permission surfaces 和 formal/non-formal verification 边界的人，价值很高 [Paper:Danus][GH:trust]。
