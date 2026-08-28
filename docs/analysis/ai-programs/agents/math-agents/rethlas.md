---
title: "Rethlas"
created: 2026-08-28
updated: 2026-08-28
type: repository-analysis
repo_url: "https://github.com/frenzymath/Rethlas"
category: "ai-programs/agents/math-agents"
tags: ["ai-for-math", "math-agent", "proof-generation", "llm-verifier", "codex", "mcp", "python"]
previous_repo: ""
successor: "https://github.com/frenzymath/Danus"
primary_language: "Python"
license: "Apache-2.0"
stars: 313
forks: 47
last_checked: 2026-08-28
last_verified: 2026-08-28
evidence: "GitHub API + repository/docs review + arXiv full-text review + compile-only smoke; no end-to-end model run"
archived_reason: ""
docker_support: false
gpu_required: false
estimated_cpu: "2-4 cores（未实测）"
estimated_memory: "1-4GB（不含远端模型；未实测）"
estimated_storage: "1-5GB+（随日志与结果增长）"
status: active
ratings:
  capability: 3
  usability: 2
  performance: 2
  code_quality: 3
  documentation: 3
  community: 2
  maturity: 2
  extensibility: 3
  security: 2
  recommendation: 3
overall_score: 2.5
sources:
  - "[GH] https://github.com/frenzymath/Rethlas"
  - "[GH:metadata] GitHub GraphQL/REST snapshot checked 2026-08-28: public active repository, default branch main, Python, Apache-2.0, 313 stars, 47 forks, 4 open issues, 2 open PRs, 8 default-branch commits, 3 contributors, and no GitHub releases."
  - "[GH:readme] README inspected at commit 887cc46427636bbdd235160a112f9a30ae81d040: generation agent writes an informal proof blueprint; verification agent exposes a local HTTP service; included shell loop resumes Codex until blueprint_verified.md appears. https://github.com/frenzymath/Rethlas/blob/887cc46427636bbdd235160a112f9a30ae81d040/README.md"
  - "[GH:generation-contract] Generation-agent contract and skills inspected at commit 887cc46427636bbdd235160a112f9a30ae81d040: https://github.com/frenzymath/Rethlas/blob/887cc46427636bbdd235160a112f9a30ae81d040/agents/generation/AGENTS.md"
  - "[GH:verification-contract] Verification-agent contract inspected at commit 887cc46427636bbdd235160a112f9a30ae81d040: https://github.com/frenzymath/Rethlas/blob/887cc46427636bbdd235160a112f9a30ae81d040/agents/verification/AGENTS.md"
  - "[GH:local-scan] Shallow local scan of commit 887cc46427636bbdd235160a112f9a30ae81d040 on 2026-08-28: 59 tracked files, 8 Python files, 2 test-related scripts; python -m py_compile passed for 8 Python files and bash -n passed for 3 shell files. This is syntax-only evidence, not dependency, service, model, benchmark, or mathematical-correctness validation. No CI workflow, pyproject/package manifest, SECURITY.md, CONTRIBUTING.md, CODE_OF_CONDUCT.md, Dockerfile, or Compose file found."
  - "[GH:api-code] Verification FastAPI service inspected at commit 887cc46427636bbdd235160a112f9a30ae81d040: it writes request material to per-run result directories and starts Codex through subprocess; README launch command binds uvicorn to 0.0.0.0:8091 and documents no authentication. https://github.com/frenzymath/Rethlas/blob/887cc46427636bbdd235160a112f9a30ae81d040/agents/verification/api/server.py"
  - "[GH:advisories] GitHub repository security-advisories endpoint returned [] on 2026-08-28. This means only that no published repository GHSA was found in this check; it is not evidence that Rethlas or its dependencies are safe."
  - "[Paper:Rethlas-Archon] Haocheng Ju et al., Automated Conjecture Resolution with Formal Verification, arXiv:2604.03789v2, full text checked 2026-08-28: https://arxiv.org/abs/2604.03789"
  - "[Paper:Danus] Jihao Liu et al., Danus: Orchestrating Mathematical Reasoning Agents with Fact-Graph Memory, arXiv:2607.06447v2, used only for successor/lineage context: https://arxiv.org/abs/2607.06447"
---

# Rethlas

> 用两个 Codex agent 完成自然语言数学证明生成—验证—修复循环的轻量研究原型。
>
> **状态**: `active` · **总分**: 2.5/5 · **推荐度**: 3/5

## 一句话总结

Rethlas 是一套容易读懂的双 agent 数学推理原型：generation agent 生成 informal proof blueprint，verification agent 通过 HTTP 返回结构化 LLM verdict；它适合学习最小 worker–verifier loop，但不能把 `blueprint_verified.md` 理解成 Lean kernel 已检查的证明 [GH:readme][GH:verification-contract]。

## 总体评价

Rethlas 的仓库边界很窄：一边是带 direct/recursive proving、文献搜索与 verify-proof skills 的 generation agent，另一边是 FastAPI + MCP 包装的 verification agent；示例 shell 脚本反复 resume 同一 Codex session，在 search-disabled/search-enabled 回合间切换，直到出现 verified 文件 [GH:readme][GH:generation-contract]。

对应论文研究的是更大的 **Rethlas–Archon** 联合系统：Rethlas 负责自然语言 conjecture resolution，Archon 负责 Lean formalization。论文报告了成功案例，也记录了误读假设、依赖错误文献结论以及仍需人工核查自然语言论证等风险。故论文中的“formal verification”不能全部归功于本仓库的 LLM verification service；Lean 证书属于 Archon 路径 [Paper:Rethlas-Archon]。

它的优势是概念小、流程显式；短板是 packaging、CI、鉴权、测试与操作边界都像研究快照。本次只做静态代码/文档审阅和语法检查，没有启动 uvicorn、调用 Codex 或复现论文 [GH:local-scan]。

## 推荐度：3/5

**面向想快速理解数学 generation–verification loop、愿意自己补安全隔离和工程脚手架的研究者，Rethlas 值得阅读与小规模复现；面向长期研究平台或需要正式正确性证据的用户，应优先看 Danus、Archon 或 Horizon。**

给 3 分是因为它把核心实验做成了可读代码，而不是只有论文伪代码；但功能、工程成熟度和安全边界都明显不足，不宜直接作为无人值守服务。

## 优势

1. **最小架构清晰**：generator、verifier、HTTP/MCP 与 repair loop 的关系一眼可见 [GH:readme]。
2. **agent contract 具体**：generation/verification 各自有详细 AGENTS.md，说明输入、产物、搜索、递归分解和 verdict schema [GH:generation-contract][GH:verification-contract]。
3. **结构化验证结果**：verifier 不是只回一段 prose，而是写出带 critical errors、gaps、citations 等字段的结果，便于循环消费。
4. **研究 lineage 明确**：论文把 informal reasoning 与 Lean formalization 分开讨论，后续 Danus 又明确继承其 worker–verifier core [Paper:Rethlas-Archon][Paper:Danus]。

## 劣势

1. **verification 仍是另一个 Codex agent**：没有 formal kernel，也没有独立 deterministic checker；同模型 family 容易产生共模错误。
2. **服务默认暴露面过宽**：README 用 `0.0.0.0:8091`，代码会为请求启动 Codex subprocess，未见鉴权、TLS、速率限制或 network allowlist [GH:readme][GH:api-code]。
3. **工程交付不完整**：没有根 pyproject/锁文件、CI、release、Docker 或贡献/安全政策 [GH:metadata][GH:local-scan]。
4. **测试很薄**：只有少量 endpoint/example 脚本，未见系统性 unit/integration coverage。
5. **扩展时容易触碰 prompt coupling**：主要行为沉淀在 AGENTS.md 与 skills 中，缺少稳定 typed plugin/API contract。

---

## 适合什么场景

- 教学或研究最小化的 generator–verifier–repair architecture。
- 复现 `arXiv:2604.03789` 中自然语言推理侧的公开仓库路径。
- 快速试验 proof-search skills、文献搜索和结构化 LLM verdict。
- 为 Danus 的 fact graph / role-gating 演进提供 baseline。

## 不适合什么场景

- 要求 Lean/Coq/Isabelle machine certificate 的定理证明。
- 把 verification API 暴露到不可信网络。
- 无人值守生产服务、多租户环境或含敏感数据的主机。
- 需要稳定 package、版本迁移、强 CI 或长期 API 兼容的项目。
- 预算有限但需要大量 search/repair rounds 的批处理。

## 与类似项目对比

| 项目 | 定位 | 相对本项目 |
|------|------|-----------|
| Danus | orchestrator + worker swarm + LLM verifier + fact graph | 直接继承 Rethlas 核心并补上 authority、共享记忆、撤销和论文产物链；也更复杂、更昂贵 |
| Archon | Lean 4 repository-scale formalization | 最终证据更强，可由 Lean 编译器检查；上手与工具链成本也更高 |
| Archon Horizon | 长周期、多项目 Lean workspace | 更偏持续协作、ledger、budget 与 dashboard，而非最小双 agent loop |
| Iteris | computational-math research workspace | 更强调实验、任务池、facts、verification records、reports 与 evolve family |

本表中的项目在本批次按同一评分框架审阅，但未进行统一 benchmark 复现。

---

## 它能做什么

- 从 Markdown 问题生成 informal proof blueprint。
- 在 direct proving 与 recursive decomposition 间切换。
- 搜索数学结果并记录引用线索。
- 把 statement + proof 发送给本地 verification service。
- 让 verifier 通过新 Codex run 产生结构化 verdict，并据此继续 repair。
- 把结果和日志写入固定目录，使用 Zola 静态站浏览产物 [GH:readme][GH:generation-contract]。

以上是仓库声明与静态实现面；本次未运行模型或服务 [GH:local-scan]。

## 运行环境与资源占用

| 场景 | CPU | 内存 | 存储 | 说明 |
|------|-----|------|------|------|
| 示例运行 | 2 cores | 1-2GB | 1-2GB | 单 generator + verifier service；主要推理在远端 Codex |
| 多轮研究 | 4+ cores | 2-4GB+ | 2-5GB+ | 日志、memory、results 与反复 Codex session 持续增长 |

- **运行时**：Python、Codex CLI、FastAPI/Uvicorn、FastMCP；generation 侧有 shell 脚本。
- **操作系统**：Linux/macOS shell 路径最自然；Windows 原生未验证。
- **Docker**：未发现官方镜像、Dockerfile 或 Compose，故 `docker_support: false` [GH:local-scan]。
- **GPU**：不要求本地 GPU；依赖远端模型。
- **外部依赖**：Codex 登录/API、可选网络搜索、Zola（浏览结果时）。

资源数字是依赖与进程模型的启发式估计，不是实测 benchmark。

## 上手体验

评分 2/5。

README 把安装、启动 verifier、运行 example 的命令写得直接；但用户要分别创建环境、安装两组 requirements、启动 HTTP service、准备 Codex，再理解 AGENTS/skills 与文件约定。没有单一 package/CLI 或 doctor 命令，失败诊断主要靠日志和源码 [GH:readme]。

## 代码质量

评分 3/5。

代码量小、职责分离清楚，subprocess 参数使用 list 而非 `shell=True`，verdict 有 schema；但没有 CI、锁文件和完整自动化测试。本地 8 个 Python 文件通过 `py_compile`、3 个 shell 文件通过 `bash -n`，只证明语法可解析 [GH:api-code][GH:local-scan]。

## 可扩展性

评分 3/5。

MCP tools、skills 和分离的 HTTP verifier 提供了实际扩展点，替换搜索工具或增加 proving skill 不难；但稳定 SDK、provider abstraction、typed plugin lifecycle 和版本契约都缺失，深改通常要 fork prompt/脚本。

## 文档质量

评分 3/5。

README 的端到端步骤和两份长 AGENTS.md 足以理解实验；verdict schema 与示例也有帮助。欠缺架构图、正式 API reference、security model、故障排查、版本/迁移与 contribution docs [GH:readme][GH:local-scan]。

## 社区与成熟度

| 维度 | 评分 | 说明 |
|------|------|------|
| 社区活跃度 | 2/5 | 2026-08-28 快照有 313 stars、47 forks、3 名可见贡献者和少量 open issues/PR；缺少治理文件与 release 社区面 [GH:metadata] |
| 成熟度 | 2/5 | 2026-04 创建，仅 8 个 default-branch commits、无 release/package contract，明显是研究原型 [GH:metadata] |

## 安全与风险

评分 2/5。

最大风险不是某个已知 CVE，而是组合边界：无鉴权的 FastAPI endpoint、默认 `0.0.0.0` 监听、请求触发高权限模型 CLI subprocess、模型可读写工作目录。即使服务只在可信网络使用，也应至少改成 loopback、增加鉴权/速率限制，并放进隔离 VM/container [GH:api-code][GH:readme]。

GHSA 查询为空只表示本次没有发现已发布仓库 advisory；仓库未提供 SECURITY.md，也没有依赖锁定与安全更新流程 [GH:advisories][GH:local-scan]。

## 学习价值

Rethlas 的学习价值在“小而全”：它展示了如何用两个独立会话、MCP/HTTP、结构化 verdict 与 shell resume loop 拼出数学 agent 的最小闭环。更重要的反面教材是：**LLM verifier 的文件名叫 verified，不会自动把自然语言证明变成 formal verification**；论文必须按 Rethlas 与 Archon 两条证据链来读 [Paper:Rethlas-Archon]。
