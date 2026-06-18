---

title: "mathlib4"
created: 2026-05-21
updated: 2026-05-21
type: repository-analysis
repo_url: "https://github.com/leanprover-community/mathlib4"
category: "math-repo/machine-proving"
tags: ["lean4", "formalization", "mathematics", "theorem-proving", "library", "mathlib"]
previous_repo: ""
successor: ""
primary_language: "Lean"
license: "Apache-2.0"
stars: 3315
forks: 1332
last_checked: 2026-05-21
last_verified: 2026-05-21
evidence: "GitHub API + official README/docs + local repository scan; not fully built locally because mathlib build is large"
archived_reason: ""
docker_support: false
gpu_required: false
estimated_cpu: "2-4 cores for browsing/small builds; large local builds benefit from more cores"
estimated_memory: "4-16GB depending on build scope; cached olean files strongly recommended"
estimated_storage: "5-20GB including Lake packages, olean cache and local clone"
status: active
ratings:
  capability: 5
  usability: 3
  performance: 3
  code_quality: 4
  documentation: 5
  community: 5
  maturity: 4
  extensibility: 5
  security: 4
  recommendation: 5
overall_score: 4.3
sources:
  - "[GH] https://github.com/leanprover-community/mathlib4"
  - "[GH:api] https://api.github.com/repos/leanprover-community/mathlib4 queried 2026-05-21; stars=3315, forks=1332, open_issues_count=2824 where REST count includes open PRs"
  - "[GH:graphql] GitHub GraphQL queried 2026-05-21; open issues=272, open PRs=2552, releases=10, tags=176, default-branch commits=31820"
  - "[GH:languages] GitHub languages queried 2026-05-21; Lean dominant, with Python/Shell/TeX support code"
  - "[GH:release] latest GitHub release sampled 2026-05-21: v4.30.0-rc2 published 2026-04-18"
  - "[GH:community] GitHub community profile queried 2026-05-21; Apache-2.0 license, README, Contributor Covenant Code of Conduct, CONTRIBUTING link and PR template present"
  - "[GH:advisories] GitHub security advisories endpoint queried 2026-05-21; returned [] for repository advisories in this check"
  - "[GH:local-scan] local clone /tmp/repo-wiki-batch12/repos/mathlib4 at commit bb1f406800817ffeed8318f246e59d991e18db72; git-tracked/non-.git files≈8746; checked README.md, LICENSE, CITATION.md, CODE_OF_CONDUCT.md, lakefile.lean, lake-manifest.json, .github/PULL_REQUEST_TEMPLATE.md; Mathlib top-level includes Combinatorics, Probability, CategoryTheory, NumberTheory, RingTheory, AlgebraicGeometry, Tactic"
  - "[Docs] https://leanprover-community.github.io/mathlib4_docs/"
  - "[Docs:community] https://leanprover-community.github.io/ — README points to get-started, learning, theories overview, contribution guide and Zulip archive"
---

# mathlib4

> Lean 4 的用户维护数学库：既是形式化数学的基础设施，也是 Lean 生态中最重要的 theorem database。
>
> **状态**: `active` · **总分**: 4.3/5 · **推荐度**: 5/5
> **核验版本**: local clone commit `bb1f406800817ffeed8318f246e59d991e18db72`；GitHub/API 快照 2026-05-21

## 一句话总结

对 Develata 而言，mathlib4 是最值得长期跟踪的数学 repo：它不是“Lean 的一个库”，而是现代 machine-proving 数学共同体的公共语料、工具层和协作制度。

## 总体评价

mathlib4 是 Lean 4 的数学库，README 明确称其包含 programming infrastructure、mathematics，以及支撑数学开发的 tactics [GH]。local scan 显示仓库主体几乎全是 Lean，`Mathlib/` 下覆盖组合、概率、范畴、数论、环论、代数几何、Condensed、Tactic 等大型数学区域 [GH:local-scan]。这类项目的价值不在“安装后获得一个 app”，而在于它把定义、定理、证明策略、命名约定和社区 review 制度沉淀为可复用的数学基础设施。

对随机图、大偏差、概率论方向，mathlib4 当前未必直接覆盖所有前沿定理；但它已经提供概率、测度、拓扑、代数、分析等 formalization substrate。若将来要做形式化概率、随机图、图论或 large deviations 的局部 formalization，mathlib4 几乎是必经之路。

它的代价也清楚：数学库巨大，编译成本高；贡献需要学习 naming/style/doc conventions；PR 往往要经过 CI、review、Zulip 讨论和社区规范。这不是“轻工具”，而是“数学共同体的基础设施”。

## 推荐度：5/5

**定位**：理论数学、基础数学、形式化验证、Lean tactic/库开发的核心依赖。

推荐度给 5，不是因为它易用，而是因为它在目标领域具有近乎不可替代性。对 Develata 的路线——数学研究 + Lean4 初步基础 + 可能的随机图/概率形式化——mathlib4 的学习价值和未来复用价值都很高。

建议采用方式不是“马上贡献大定理”，而是：先用 Mathematics in Lean / Natural Number Game 后续材料补 tactic fluency，再围绕概率、图论、组合和测度相关 namespaces 做阅读式学习。先读定理组织、命名和 tactic 风格，再决定是否进入贡献。

## 优势

1. **数学覆盖广**：`Mathlib/` 覆盖 algebra、analysis、topology、probability、combinatorics、category theory 等大量基础数学区域 [GH:local-scan]。
2. **与 Lean 4 同步演进**：最新 release 与 Lean 4 v4.30.0-rc2 同步，说明库紧贴上游 theorem prover [GH:release]。
3. **社区协作制度成熟**：Contributor guide、PR template、Zulip、style/naming/doc guides 形成稳定协作流程 [GH][GH:community]。
4. **研究引用明确**：CITATION.md 指向 *The Lean Mathematical Library* CPP 2020，可作为学术引用入口 [GH:local-scan]。
5. **扩展性本质上极强**：新增理论就是新增 Lean declarations、instances、simp lemmas、tactics 和 files；库结构支持持续生长。

## 劣势

1. **上手门槛高**：要同时理解 Lean tactic、dependent type theory、mathlib 命名、typeclass inference 和社区风格。
2. **编译成本高**：README 明确建议先 `lake exe cache get` 获取预编译 olean，否则 build 会很慢 [GH]。
3. **PR backlog 大**：GraphQL 快照显示 open PRs=2552；这更像大型数学库的协作吞吐压力，而非普通软件 bug backlog [GH:graphql]。
4. **文档与源码强耦合**：API 文档生成自 `.lean` 源文件；很多理解仍需读源码和 Zulip 讨论。
5. **数学覆盖不等于前沿研究即刻可用**：随机图大偏差等具体方向仍可能需要大量自建 definitions 和 lemmas。

---

## 适合什么场景

- 学习 Lean 中真实数学 formalization 的组织方式。
- 为理论数学项目寻找 definitions / lemmas / tactics。
- 做概率论、图论、组合、代数、分析等基础数学的机器证明探索。
- 研究大规模形式化数学社区如何协作、review 和维护一致性。
- 构建自己的 Lean 项目并依赖 mathlib4。

## 不适合什么场景

- 希望短时间内获得“应用软件式”产出的用户。
- 完全没有 Lean 基础、只想查一个定理证明的用户。
- 需要所有现代概率/随机图前沿结果都已形式化的研究。
- 低资源机器上从零全量编译且不使用 cache 的场景。

## 与类似项目对比

| 项目 | 定位 | 相对本项目 |
|------|------|-----------|
| Lean4 | theorem prover 与语言本体 | Lean4 是内核/语言/工具链；mathlib4 是其上最大的数学内容层 |
| Coq Mathematical Components | Coq 生态经典数学库 | MathComp 更偏 Coq/SSReflect 风格；mathlib4 更贴 Lean 4 typeclass/tactic 生态 |
| Isabelle AFP | Isabelle 生态 formal proof archive | AFP 更像论文/证明档案库；mathlib4 更像统一命名和依赖结构下的核心数学库 |

上述项目按 `math-repo/machine-proving` 同类范围做定位级对比，未按同一 10 维度框架深审。

---

## 它能做什么

capability 评分 5/5。

mathlib4 提供：

- Lean 4 的大规模数学定义和定理库；
- 支撑数学证明的 tactics、simp lemmas、instances 和 programming infrastructure [GH]；
- 自动生成 API 文档和理论覆盖概览 [Docs]；
- Lake 依赖方式，可作为下游 Lean 项目的 dependency [GH]；
- 贡献流程、style guide、naming convention、documentation style 等社区规范入口 [GH]。

## 运行环境与资源占用

| 场景 | CPU | 内存 | 存储 | 说明 |
|------|-----|------|------|------|
| 阅读/小文件验证 | 2 cores | 4GB | 5GB+ | VS Code + Lean server + cache 即可 |
| 中型本地开发 | 4-8 cores | 8-16GB | 10-20GB | 依赖 `.lake`、olean cache、局部 build |
| 全量构建/CI 类 | 8+ cores | 16GB+ | 20GB+ | 不用 cache 会非常慢 |

- **运行时**：Lean 4 + Lake；mathlib README 推荐 `lake exe cache get` 后再 build [GH]。
- **操作系统**：Linux/macOS/Windows 均可通过 Lean 工具链使用；Codespaces/Gitpod 入口存在 [GH]。
- **Docker**：未作为主要使用路径核实；日常使用以 Lean/Lake 本地工具链为主。
- **GPU**：不需要。
- **外部依赖**：Lean toolchain、Lake packages、Git；在线 cache 可显著降低 build 成本。

## 上手体验

评分 3/5。

作为用户依赖 mathlib4 不算难：README 给出安装、Codespaces/Gitpod、tutorial project 和 dependency 指南入口 [GH]。但作为数学开发者真正使用它，需要掌握 Lean tactic、search 工具、namespace、typeclass、simp normal form、import 粒度和 naming convention。

因此“能跑起来”是 3-4 分，“能自然贡献数学”是长期训练。综合给 3。

## 代码质量

评分 4/5。

mathlib4 的质量主要体现为：大规模 Lean 代码可持续通过 CI；库结构清晰；lakefile 中启用 mathlib linters、header/style/documentation 相关检查 [GH:local-scan]。这类库的质量不是传统单元测试覆盖率，而是 theorem kernel checking + linter + review 制度。

不给 5 的原因：仓库极大，局部风格和历史遗留不可避免；大量 open PR 也意味着 review 和 merge 压力很高。

## 可扩展性

评分 5/5。

mathlib4 的扩展机制就是 Lean 本身：definitions、theorems、instances、attributes、tactics、notation、modules 都是扩展点。`lakefile.lean` 还依赖 aesop、Qq、proofwidgets、LeanSearchClient、importGraph 等 supporting packages [GH:local-scan]，说明 tactic/search/UI 辅助层也在持续扩展。

## 文档质量

评分 5/5。

README 指向安装、learning、mathlib docs、covered theories、overview for mathematicians、contribution guide、Zulip archive 等多层文档 [GH]。对数学库而言，这种“API docs + 学习材料 + 理论概览 + 贡献规范 + 社区讨论归档”的组合非常强。

不足是：高阶使用仍需读源码和 Zulip；但这对大型 formal math library 几乎不可避免。

## 社区与成熟度

| 维度 | 评分 | 说明 |
|------|------|------|
| 社区活跃度 | 5/5 | 3.3k stars、1.3k forks、31k+ commits、open PRs=2552；Zulip 是核心协作场 [GH:api][GH:graphql][GH]。 |
| 成熟度 | 4/5 | Lean 4/mathlib4 仍随上游快速演进，但已是 Lean 4 数学 formalization 的事实核心库；release/tag 与上游同步 [GH:release]。 |

## 安全与风险

评分 4/5。

正面：Apache-2.0；Lean theorem checking 的核心可信基比普通动态插件系统更清晰；本次 GitHub repository advisory 查询为空 [GH:advisories]。风险主要不是传统 Web 安全，而是供应链和工具链：Lake 依赖、cache、GitHub Actions、以及从不可信代码运行 Lean elaboration/tactics 的边界。对个人学习和研究使用，风险低；对隔离环境中批量运行第三方 Lean 项目，仍应按代码执行处理。

## 学习价值

极高。mathlib4 能让 Develata 同时学习三件事：

- 数学对象在 dependent type theory 中如何被编码；
- 大型理论库如何通过命名、simp、typeclass 和 import graph 维持可组合性；
- 形式化数学共同体如何把“证明”转化为可 review、可复用、可搜索的公共基础设施。
