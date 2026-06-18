---

title: "Lean4"
created: 2026-05-21
updated: 2026-05-21
type: repository-analysis
repo_url: "https://github.com/leanprover/lean4"
category: "math-repo/machine-proving"
tags: ["lean4", "theorem-prover", "dependent-types", "formal-verification", "programming-language", "machine-proving"]
previous_repo: ""
successor: ""
primary_language: "Lean/C++"
license: "Apache-2.0"
stars: 8061
forks: 844
last_checked: 2026-05-21
last_verified: 2026-05-21
evidence: "GitHub API + official docs + local repository scan; not built locally because compiler bootstrap/build is large"
archived_reason: ""
docker_support: false
gpu_required: false
estimated_cpu: "2-4 cores for normal use; 8+ cores helpful for building from source"
estimated_memory: "4-16GB depending on IDE/build workload"
estimated_storage: "2-10GB for toolchain, source tree, Lake packages and build outputs"
status: active
ratings:
  capability: 5
  usability: 3
  performance: 3
  code_quality: 4
  documentation: 4
  community: 4
  maturity: 4
  extensibility: 5
  security: 4
  recommendation: 5
overall_score: 4.1
sources:
  - "[GH] https://github.com/leanprover/lean4"
  - "[GH:api] https://api.github.com/repos/leanprover/lean4 queried 2026-05-21; stars=8061, forks=844, open_issues_count=1475 where REST count includes PRs"
  - "[GH:graphql] GitHub GraphQL queried 2026-05-21; open issues=909, open PRs=566, releases=118, tags=127, default-branch commits=40398"
  - "[GH:languages] GitHub languages queried 2026-05-21; Lean dominant with C++ compiler/runtime components plus Python/Shell/CMake support"
  - "[GH:release] latest GitHub release sampled 2026-05-21: v4.30.0-rc2 published 2026-04-17"
  - "[GH:community] GitHub community profile queried 2026-05-21; Apache-2.0 license, README, CONTRIBUTING and PR template present; no repository Code of Conduct detected in this check"
  - "[GH:advisories] GitHub security advisories endpoint queried 2026-05-21; returned [] for repository advisories in this check"
  - "[GH:local-scan] local clone /tmp/repo-wiki-batch12/repos/lean4 at commit da8bcf79160085502377aea35b4c338cfa34a72d; files≈12671; checked README.md, CONTRIBUTING.md, LICENSE, doc/README.md; source tree has src/, stage0/, tests/, doc/; CONTRIBUTING requires issue/RFC before PR and tests/docs/performance care"
  - "[Docs] https://lean-lang.org/documentation/ extracted 2026-05-21; describes Lean as functional programming language and theorem prover for formalizing math and formal verification; lists FPIL, TPIL, MIL, language reference, Lean tools and citation entry"
---

# Lean4

> Lean 4 programming language and theorem prover — dependent type theory、interactive theorem proving 与通用函数式编程语言的统一体。
>
> **状态**: `active` · **总分**: 4.1/5 · **推荐度**: 5/5
> **核验版本**: local clone commit `da8bcf79160085502377aea35b4c338cfa34a72d`；GitHub/API 快照 2026-05-21

## 一句话总结

Lean4 是 mathlib4 之“器”：若 mathlib4 是形式化数学的图书馆，Lean4 就是定义“何为证明、何为程序、何为可检查对象”的语言与内核。

## 总体评价

Lean4 官方定位为 functional programming language and theorem prover，用于 formalizing math 与 formal verification，同时也足够灵活可作通用编程语言 [Docs]。仓库本身包含 `src/`、`stage0/`、`tests/`、`doc/` 等 compiler/toolchain 结构；语言统计显示 Lean 与 C++ 是核心，CMake/Python/Shell 等支撑构建与测试 [GH:languages][GH:local-scan]。

对 Develata 来说，Lean4 的意义有两层：

- 数学层：理解 dependent types、propositions-as-types、tactics、elaboration、typeclass inference，是进入机器证明数学的基础；
- 工程层：Lean4 也是一门自举式语言/编译器项目，展示了证明助手如何工程化。

不建议把 Lean4 repo 当成第一阅读对象。学习路线应以 TPIL、MIL、mathlib examples 和小型 Lean project 为主；repo 本身更适合在需要理解 elaborator、kernel、Lake、server 或 tactic internals 时查阅。

## 推荐度：5/5

**定位**：理论数学机器证明、形式化验证、dependent type programming、Lean 生态工具链开发的基础 repo。

推荐度给 5 是面向“长期路线”，不是面向“今天打开 repo 就能贡献”。Develata 已有 Natural Number Game 和基础 tactic/inductive 经验，继续学习 Lean4 是自然延伸；但贡献 Lean4 本体通常需要编译器、类型论和工程经验，不应早期强行进入。

## 优势

1. **语言 + theorem prover 一体**：同一系统同时支持程序与证明，适合数学形式化与 verified programming [Docs]。
2. **生态中心性极强**：mathlib4、Lake、Lean Language Server、VS Code extension、LeanSearch 等都围绕 Lean4 展开 [Docs]。
3. **文档入口丰富**：FPIL、TPIL、MIL、Language Reference、FAQ、工具文档均由官方学习页组织 [Docs]。
4. **工程活跃**：40k+ commits、118 releases、持续 rc release，说明项目快速迭代 [GH:graphql][GH:release]。
5. **可扩展性强**：macro、elaborator、tactic、metaprogramming、Lake packages 形成高度可扩展语言环境。

## 劣势

1. **学习曲线陡峭**：dependent type theory、elaboration、unification、typeclass inference 对初学者有实质门槛。
2. **仓库本体复杂**：compiler/bootstrap/stage0/tests 混合，不适合作为 Lean 入门读物 [GH:local-scan]。
3. **issue/PR 压力不低**：GraphQL 快照显示 open issues=909、open PRs=566 [GH:graphql]。
4. **贡献门槛高**：CONTRIBUTING 明确要求先开 issue/RFC、关注 UX、受益者、社区反馈、维护性、测试、文档和性能 [GH:local-scan]。
5. **性能评价需分场景**：日常 proof checking 可接受，但大型库 elaboration/build 成本明显。

---

## 适合什么场景

- 学习 theorem proving、dependent type theory 和 tactic-based proof。
- 使用 mathlib4 做理论数学 formalization。
- 构建 Lean package、Lean DSL、tactic、metaprogramming 工具。
- 研究 proof assistant 的内核、elaborator、server 和 compiler architecture。
- 形式化验证课程、论文实验和长期数学工程项目。

## 不适合什么场景

- 只需要传统自动定理证明器 SAT/SMT 的场景。
- 没有类型论基础却直接阅读 compiler internals。
- 需要短期快速工程产出的普通脚本项目。
- 把 Lean 当成“自动证明按钮”的场景；大量证明仍需人工结构化。

## 与类似项目对比

| 项目 | 定位 | 相对本项目 |
|------|------|-----------|
| mathlib4 | Lean 4 数学库 | mathlib4 是内容层；Lean4 是语言、内核、编译器和工具链本体 |
| Coq | 经典交互式定理证明器 | Coq 生态成熟且历史深；Lean4 更强调现代元编程、数学库协作和函数式语言体验 |
| Isabelle/HOL | 高自动化交互式证明环境 | Isabelle/HOL 更偏 HOL 与 proof automation；Lean4 更偏 dependent type theory 与程序/证明统一 |

上述项目按 `math-repo/machine-proving` 同类范围做定位级对比，未按同一 10 维度框架深审。

---

## 它能做什么

capability 评分 5/5。

Lean4 提供：

- dependent type theory theorem prover；
- functional programming language；
- tactic framework 与 metaprogramming；
- Lake package/build system；
- language server / IDE integration；
- 与 mathlib4 结合的数学 formalization 工作流 [Docs][GH]。

## 运行环境与资源占用

| 场景 | CPU | 内存 | 存储 | 说明 |
|------|-----|------|------|------|
| 学习/小项目 | 2 cores | 4GB | 2GB+ | VS Code + elan + Lean toolchain |
| mathlib 项目 | 4-8 cores | 8-16GB | 5-20GB | 主要成本来自依赖和 olean cache |
| 编译 Lean4 本体 | 8+ cores | 16GB+ | 10GB+ | compiler/bootstrap/build/test 成本更高 |

- **运行时**：Lean toolchain；通常通过 elan 安装。
- **操作系统**：Linux/macOS/Windows；官方安装文档覆盖主流系统 [GH][Docs]。
- **Docker**：未作为主要使用路径核实；日常使用以 elan/Lean toolchain 为主。
- **GPU**：不需要。
- **外部依赖**：构建本体需要 C++/CMake/编译器工具链；普通使用只需 Lean toolchain。

## 上手体验

评分 3/5。

安装和第一个 proof 的体验已经较好：官方 Learn 页列出 Natural Number Game、TPIL、MIL、FPIL、Language Reference 等路径 [Docs]。但从“会写 tactic”到“能写自然数学证明”仍需跨越 abstraction gap；错误信息、typeclass search、rewrite/simp normal forms 都需要时间。

## 代码质量

评分 4/5。

Lean4 是大型自举式语言项目，仓库结构包含 source、stage0、tests 和文档；CI/workflows 存在，release 节奏稳定 [GH:local-scan][GH:release]。CONTRIBUTING 对 issue/RFC、测试、文档、性能提出明确要求 [GH:local-scan]。

不给 5：compiler/theorem-prover 本体天然复杂；open issues/PRs 较多；本次未本地 build/test。

## 可扩展性

评分 5/5。

Lean4 的 macro/elaborator/tactic/metaprogramming 能力非常强。它允许用户在语言内部构建 DSL、自动化证明工具、语法扩展和 domain-specific tactics。对数学 formalization 来说，这种扩展性是生态增长的关键。

## 文档质量

评分 4/5。

官方 Learn 页组织了 FPIL、TPIL、MIL、Language Reference、FAQ、工具文档、Loogle/LeanSearch/LeanDojo/Pantograph 等资源 [Docs]。这比多数 theorem prover 的入口更友好。

扣分点：documentation 分散在多个站点、书、工具页面和 repo doc 中；深入 compiler internals 仍需读源码和社区讨论。

## 社区与成熟度

| 维度 | 评分 | 说明 |
|------|------|------|
| 社区活跃度 | 4/5 | 8k stars、844 forks、40k+ commits、900+ open issues、500+ open PRs；生态围绕 mathlib 和 Zulip 活跃 [GH:api][GH:graphql][Docs]。 |
| 成熟度 | 4/5 | 118 releases，Lean4 已是当前 Lean 主线；仍保持快速演进和 rc 发布节奏 [GH:release]。 |

## 安全与风险

评分 4/5。

本次 repository advisory 查询为空 [GH:advisories]。Lean 作为本地编译/证明工具，主要风险来自执行不可信项目中的 build scripts、Lake dependencies、tactics/metaprograms 和 CI 配置，而非网络服务暴露。对个人学习和数学研究使用，风险较低；对自动批量运行第三方 Lean 项目，应使用隔离环境。

## 学习价值

极高。Lean4 直接连接三条线：基础数学、逻辑/类型论、编译器工程。对 Develata 而言，Lean4 不是短期工具，而是能长期改变数学表达方式的语言。所谓“工欲善其事，必先利其器”；Lean4 即此器。
