---
title: "Bend"
created: 2026-10-11
updated: 2026-10-11
type: repository-analysis
repo_url: "https://github.com/bendlang/bend"
category: "math/machine-proving"
tags: ["bend", "dependent-types", "affine-types", "formal-verification", "parallel-computing", "gpu", "programming-language"]
previous_repo: "https://github.com/HigherOrderCO/Bend"
successor: ""
primary_language: "TypeScript；C/JavaScript 后端；Lean 内核形式化"
license: "Apache-2.0"
stars: 23535
forks: 741
last_checked: 2026-10-11
last_verified: 2026-10-11
evidence: "GitHub API + pinned source review + source CLI proof-positive/proof-negative and JavaScript execution smoke; no Lean kernel rebuild, native/GPU test, full regression or benchmark"
archived_reason: ""
docker_support: false
gpu_required: false
estimated_cpu: "小型源码 smoke 可用普通 CPU；原生并行收益取决于任务划分，未测核心需求"
estimated_memory: "未测最低或峰值内存；不能把小例子的可运行性推广到大型证明和 GPU 工作负载"
estimated_storage: "未测完整工具链占用；Bun/clang、可选 Lean 和 GPU 工具链另计"
status: active
ratings:
  capability: 3
  usability: 3
  performance: 3
  code_quality: 3
  documentation: 4
  community: 4
  maturity: 2
  extensibility: 3
  security: 3
  recommendation: 3
overall_score: 3.1
sources:
  - "[GH:api] https://api.github.com/repos/bendlang/bend queried 2026-10-11; archived=false; created_at=2023-08-29; pushed_at=2026-10-10T11:44:04Z; stars=23535; forks=741; open_issues_count=114 includes PRs; GraphQL open issues=75 and open PRs=39; https://api.github.com/repos/HigherOrderCO/Bend resolves full_name=bendlang/bend"
  - "[GH:release] https://github.com/bendlang/bend/releases/tag/v2.0.36 published 2026-10-07; also sampled v2.0.35 (2026-10-03) and v2.0.34 (2026-09-29); version dates and changelog statements, not independently reproduced benchmark evidence"
  - "[GH:readme] https://github.com/bendlang/bend/blob/2343aec043b7967f2a6f653e7f2e3bcbe55c8c9a/README.md inspected 2026-10-11; Bend 2 positioning, examples, limitations and current backend/platform claims; install.sh command, compiled CLI versus Bun .env/bunfig behavior, BendTT/BendRT paper links"
  - "[Docs:guide] https://github.com/bendlang/bend/blob/2343aec043b7967f2a6f653e7f2e3bcbe55c8c9a/guide/GUIDE.md inspected 2026-10-11; affinity, termination, LAWS/PROOF convention, verdict scope, foreigns, public permanent publishing and package licensing"
  - "[Docs:limits] https://github.com/bendlang/bend/blob/2343aec043b7967f2a6f653e7f2e3bcbe55c8c9a/WONTFIX.txt inspected 2026-10-11; evaluation costs, checker blowups, GPU dispatch, F32 NaN backend discrepancy, bounded runtime and unsupported systems"
  - "[Local:source] https://github.com/bendlang/bend/tree/2343aec043b7967f2a6f653e7f2e3bcbe55c8c9a local tracked-tree scan 2026-10-11; 2015 tracked files, 1611 tests/**/*.bend files; bend.ts=3882 lines, comp.ts=6405, main.ts=983, safe.ts=1567, bendtt.lean=3895; these are file counts/line counts, not coverage; inspected AGENTS.md, LICENSE (Apache-2.0), bend2/pack/package.json; no root SECURITY.md/CONTRIBUTING.md/CODE_OF_CONDUCT.md and no tracked path containing docker found"
  - "[Local:kernel] https://github.com/bendlang/bend/blob/2343aec043b7967f2a6f653e7f2e3bcbe55c8c9a/bend2/bendtt.lean lines 6-35 and 1662-1702 inspected; Claim.consistent, Claim.sound, Claim.halts are formalized claims; safe.ts fixes Lean 4.34.0; main.ts cli_verdict checks unsafe/foreign dependencies and optionally invokes Safe.safe_check; kernel was not recompiled or fully audited here"
  - "[Local:ci] https://github.com/bendlang/bend/blob/2343aec043b7967f2a6f653e7f2e3bcbe55c8c9a/.github/workflows/repo-gate.yml inspected; hosted PR/merge-group workflow runs main's gates/repo.ts with Bun 1.4.0 and ttok 0.3; AGENTS.md describes separate mini-cluster test/performance/safe gates, whose execution/results were not verified here"
  - "[Local:smoke] 2026-10-11 Linux source CLI at 2343aec043b7967f2a6f653e7f2e3bcbe55c8c9a via Bun 1.4.2; isolated HOME, scrubbed environment, BEND_NO_TELEMETRY=1; version returned bend 2.0.36; README add_zero law/proof --check-only exited 0 with ALL PROOFS CHECK plus Use --verdict for mathematical validity; explicit 0n==1n with {==} exited 1; IO.print(42 as a string) emitted JavaScript with exit 0 and executing that JS printed 42 with exit 0; no --verdict/native/GPU benchmark executed"
  - "[GH:issues] Open reports inspected 2026-10-11: https://github.com/bendlang/bend/issues/1483 template capture in types accepted by checker but outside BendTT translation (report v2.0.36); https://github.com/bendlang/bend/issues/1482 titled False equalities accepted by --verdict (report v2.0.32), body attributes examples to parsing/indentation interpretation; https://github.com/bendlang/bend/issues/1475 CPU fork distribution sensitivity; reports not independently reproduced here"
  - "[GH:activity] https://github.com/bendlang/bend/pull/1470 merged 2026-10-10; #1389 merged 2026-10-08; #1475 received a 2026-10-10 response inviting a test against PR #1479; sampled activity, not an aggregate response-time statistic"
  - "[GH:security] https://api.github.com/repos/bendlang/bend/security-advisories queried 2026-10-11 returned []; no published repository GHSA found in this endpoint check; no dependency CVE/RustSec/OSV audit performed"
  - "[WikiLocal:comparisons] Local canonical wiki entries math/machine-proving/lean4.md and mathlib4.md consulted 2026-10-11 for positioning only; not a fresh version/performance/security audit of those projects"
---

# Bend

> 面向可证明程序与并行执行的依赖类型、仿射语言；值得做小规模研究实验，不宜把宣传中的“AI 不再犯错”当作完整软件保证。
>
> **状态**：`active` · **总分**：3.1/5 · **推荐度**：3/5
> **核验对象**：Bend 2；主分支 `2343aec043b7967f2a6f653e7f2e3bcbe55c8c9a`，CLI 自报 2.0.36。不是对早期 Bend 1/HVM 的沿用评价。
> **验证边界**：仅做固定提交静态阅读、普通检查正负例及 JS smoke；未执行 `--verdict`、Lean 内核重建、原生/GPU 测试、全量回归或 benchmark。

## 一句话总结

Bend 2 把“用依赖类型描述程序定律、交付证明，再把计算编译到 CPU/GPU”放入同一语言；对研究证明与执行如何衔接的人很有吸引力，但证明链和执行链尚有明确缺口。[GH:readme][Local:kernel]

## 总体评价

**先纠正对象：这已不是只靠 HVM 交互网自动并行的旧 Bend。** 旧地址 HigherOrderCO/Bend 现指向 bendlang/bend；当前 README 明确说 Bend 1 程序与 HVM 不沿用。Bend 2 的中心是依赖类型、仿射使用约束、终止检查，以及 C/Metal/CUDA/JavaScript 编译目标。[GH:api][GH:readme]

它最值得看的不是 README 的速度图，而是两条链之间的关系：

- **证明链**：Bend 源码 → TypeScript 检查器 → `safe.ts` 翻译 → Lean 实现的 BendTT 内核。
- **执行链**：Bend 源码 → `comp.ts` → 原生 C、GPU 或 JavaScript。

仓库公开承认解析器和内核翻译未获形式化证明，后端也可能偏离 Bend 语义。因此，“内核中有一致性证明”不等于“从用户意图到机器码端到端已验证”。本轮只抽读关键声明，未重新核验整个 Lean 证明。[GH:readme][Local:kernel][Docs:limits]

## 推荐度：3/5

**适合已有类型论或形式化验证基础、愿意接受语言快速变化的研究者和工具开发者。** 推荐先用一个小算法验证学习收益，而不是把它直接替换为已有生产栈或成熟数学证明环境。

对数学工作，关注点是：仿射约束怎样支持活跃计算终止、擦除项与活跃项怎样分离、定律怎样经过翻译进入小内核；这比“AI 自动保证没有 bug”的叙事更有价值。作为研究对象值得跟踪；作为新项目的主语言，生态、诊断、数值类型和证明覆盖面仍需谨慎评估。[Docs:guide][Local:kernel][GH:issues]

## 优势

1. **定律是语言对象，而非注释。** `law` 声明性质，`def` 提供证明；LAWS/PROOF 文件组织让规格与实现的审查责任能够分开。[Docs:guide]
2. **把可信边界摆出来了。** README、WONTFIX 和 `--verdict` 明确区分普通检查、内核复核与后端行为；限制说明比口号更有决策价值。[GH:readme][Docs:limits]
3. **证明与计算共用语言。** 小型归纳证明能与可编译程序放在同一工程；本轮实际确认了正例通过、显式假等式被拒绝和一个 JS 输出程序可运行。[Local:smoke]
4. **有实质性开发与回归材料。** 源码中有大量 Bend 测试文件、运行时和检查器 benchmark 目录，近期仍有合并与问题讨论；但这不代表全部门禁本轮通过。[Local:source][Local:ci][GH:activity]

## 劣势

1. **端到端保证尚未建立。** 规格可能写错，解析/翻译未证明，编译后端和外部效果仍有各自可信边界；形式证明不自动覆盖这些层。[GH:readme][Docs:guide]
2. **语言与生态约束明显。** 缺少类型类、traits、通用宏、tactics；大量显式类型标注，基础库较小，完整调试器、profiler、REPL 也未提供。[GH:readme]
3. **数值与运行时不是无边界数学对象。** 当前主要数值为 Nat/U32/F32，没有 U64/F64；F32 操作的证明能力受公理化边界限制，运行时 Nat、数组和共享计数存在上限。[GH:readme][Docs:limits]
4. **并行性依赖程序形状。** 平衡分叉较适合当前调度；JS 单核，GPU 调用位置和设备能力也有限制，不能把潜在并行度等同实测加速比。[GH:readme][Docs:limits][GH:issues]

## 适合什么场景

- 用小型纯函数和归纳性质体验 dependent types、affinity、termination 的联动。
- 为 AI 生成代码尝试“先固定定律、后修改实现、提交前复核”的工作流，且由人审查规格与覆盖范围。
- 用独立 benchmark 研究分治结构在多核或 GPU 上何时获益。
- 阅读检查器、翻译器和 Lean 内核之间的接口，研究可信计算基如何拆分。[Docs:guide][Local:kernel]

## 不适合什么场景

- 将“证明通过”当成业务需求正确、安全无漏洞或部署无故障的证明。
- 需要成熟 F64 科学计算、完整网络/密码学库、原生 Windows 或多机执行的生产系统。
- 把 Bend 当成已有大量数学库与自动化 tactics 的成熟证明助手的直接替代品。
- 把不可信 `.bend`、foreign C/JS 或远程包当成沙箱内的无害数据来运行。[GH:readme][Docs:guide][Docs:limits]

## 与类似项目对比

| 项目 | 定位 | 相对本项目 |
|------|------|-----------|
| Lean4 | 依赖类型语言、交互式定理证明与可扩展 elaboration/tactics | 更适合作为系统学习形式化数学与构建证明工具的入口；Bend 更强调定律与并行执行结合，不能据此推断速度普遍领先 |
| mathlib4 | Lean 上的形式化数学库 | 是数学内容与现成定理基础，不是另一套编译器；Bend 的语言和小型 Base 库不能替代这种数学积累 |

上述项目按 `math/machine-proving` 同类范围做定位级对比，依据本地 wiki 既有条目而非本轮重新抓取外部事实；未按同一 10 维度框架重审，也未作同机性能比较。[WikiLocal:comparisons]

## 它能做什么

**能力广度：3/5。** 当前文档与源码提供定律/证明、代数数据类型、仿射值、显式并行调用、C/JS 代码生成及 Metal/CUDA 路径；还包含文件、计时、通道和 TCP/UDP 等效果。后端能力主要是源码和文档证据，本轮只执行了 JS 小例子。[GH:readme][Docs:guide][Local:source][Local:smoke]

- `bend file.bend --check-only` 走普通检查，不运行程序；**输出 ALL PROOFS CHECK 也不等于已经调用 Lean 内核**，本轮输出还明确提示使用 `--verdict`。[Local:smoke][Local:kernel]
- `bend PROOF.bend --verdict` 追加 BendTT 复核；主 CLI 会拒绝非 Base 定义对 unsafe/foreign 的相关依赖。翻译覆盖范围仍有限，不能保证所有被普通检查器接受的证明都能通过它。[Local:kernel][GH:issues]
- `-o file.js`、`-o file.c`、原生可执行目标分别服务不同执行路径；BendHub 发布与 BendAI 登录是另一个服务边界，不是本地检查所必需。[Docs:guide][GH:release]

## 运行环境与资源占用

**资源效率：3/5；没有本轮 benchmark 支撑更高分。** 官方“接近 C/CUDA”与检查器速度图是项目方选择的负载，不能外推到随机程序、所有证明或跨语言资源效率。[GH:readme]

| 场景 | CPU | 内存 | 存储 | 说明 |
|------|-----|------|------|------|
| 小型普通检查与 JS 运行 | 普通 Linux CPU | 未测峰值 | 未测 | Bun 1.4.2 正负例与 JS smoke 通过；无需 GPU |
| 原生 C | 未测核心需求 | 未测 | clang、编译产物另计 | 文档要求 clang 14+；`!` 路径要求 clang 19+、Metal 或 CUDA 12；本轮未构建 |
| GPU | 未测 | 主存/显存未测 | GPU 工具链另计 | Metal 或 CUDA，README 列 CUDA 12；本轮未运行 |
| 内核复核 | 未测 | 未测 | 内核首次构建和缓存另计 | `safe.ts` 指定 Lean 4.34.0；未执行 `--verdict` |

官方主要支持 Linux/macOS；Windows 走 WSL，但 WSL2 的 GPU 路径还受统一内存能力限制。没有核验到官方用户 Docker 镜像，本条 `docker_support=false`；这不是语言质量扣分项。[GH:readme][Docs:limits][Local:source][Local:kernel]

性能风险包括：文本以字符链表表示，检查器某些项会指数展开或栈溢出，单文件原生编译无增量构建。#1475 的用户报告进一步表明 CPU 分叉前工作可能影响负载分布；该报告及修复 PR 的存在不构成本轮加速比实测。[GH:readme][Docs:limits][GH:issues][GH:activity]

## 上手体验

**3/5。** Python 风格语法降低表面门槛，但显式类型、数量标注、终止要求和证明写法不等于 Python 使用体验。建议先读 guide，再做最小定律，不从 GPU 大例子起步。[Docs:guide]

本轮从固定源码通过 Bun 启动 CLI，在独立 HOME、去除继承凭据并关闭遥测的环境下执行：

1. `Nat.add(x, 0n) == x` 的归纳证明：普通检查退出 0。
2. `0n == 1n` 配 `{==}`：普通检查退出 1。
3. 输出字符串 `42` 的 IO 程序：生成 JS 并执行，得到 `42`。

这只是入口与最小正负例检查，**不是正式安装体验、全测试集或内核可靠性验收**。[Local:smoke]

官方推荐 `curl | sh` 安装，但安全实践应先检查脚本或选择固定 Release 校验资产。源码入口会读取项目的 Bun 配置与 `.env`，官方编译版 CLI 则声称忽略它们；检查陌生工程时不要把两种入口等同。[GH:readme]

## 代码质量

**3/5。** 职责可识别：`bend.ts` 为语言/检查器，`comp.ts` 为编译器和运行时，`main.ts` 为入口，`safe.ts` 为内核翻译，`bendtt.lean` 为形式化。代码阅读有清晰主线，但核心复杂性集中在少数大文件中，跨层修复仍要求较强专业知识。[Local:source]

固定提交有 **1611 个 `tests/**/*.bend` 文件**，不能把这个数量写成覆盖率或已通过的测试数。公开 GitHub workflow 本轮只确认运行仓库文件/大小约束门禁；另有 mini-cluster 测试、性能和内核一致性 gates 的说明，但没有核验其完整运行结果。[Local:source][Local:ci]

README 自述 compiler（非 kernel）大量由 AI 编写且未完整审计；这是项目披露而非自动扣分依据。更直接的风险证据是检查器/翻译不一致与后端边界问题，不能由“测试很多”抵消。[GH:readme][GH:issues]

## 可扩展性

**3/5。** 支持模块、模板、包发布以及 foreign C/JS，源码还提供 Bun/Node 的 `.bend` 加载入口；足以构建小型外围工具。但没有成熟的类型类、traits 或 tactic 扩展层，深层语言/后端扩展需要修改核心。[Docs:guide][GH:readme][Local:source]

foreign 是能力出口，也是可信边界：不能把外部代码的类型声明当作实现证明。BendHub 与本仓库编译器不是同一个审计对象；本轮未登录、发布包或调用 BendAI，也未审计这些在线服务。[Docs:guide][Local:kernel]

## 文档质量

**4/5。** README、语言 guide、WONTFIX、两个论文入口、Lean 源码和 demos 构成较好的入门—语义—限制链条。尤其 WONTFIX 对终止、NaN、数组布局、GPU 条件的说明能直接改变采用决策。[GH:readme][Docs:guide][Docs:limits]

不足是宣传承诺强于实际可信边界，普通检查成功文案容易与 `--verdict` 混淆；证明能力、编译器和服务的边界必须交叉阅读。论文存在不代表本轮已独立复核其中所有定理或性能实验。[GH:readme][Local:kernel][Local:smoke]

## 社区与成熟度

| 维度 | 评分 | 说明 |
|------|------|------|
| 社区活跃度 | 4/5 | 近期有合并、回归修复和用户复现讨论；仅据抽样，不承诺普遍响应速度 |
| 成熟度 | 2/5 | Bend 2 仍快速变化，和 Bend 1 不兼容；证明覆盖、数值与执行边界持续修补 |

2026-10-11 API 快照为 **23535 stars、741 forks、75 个 open issues、39 个 open PRs**。REST 的 114 是后两者之和，不是 114 个独立 issue。仓库创建于 2023 年不能当作 Bend 2 已有多年稳定兼容性的证明。[GH:api][GH:readme]

最新 Release 为 v2.0.36（2026-10-07）；本轮还抽查了 v2.0.35/34 与近期合并 PR。这说明维护活跃，也说明采用者仍需固定版本、维护自己的回归集。根目录未发现 SECURITY/CONTRIBUTING/CODE_OF_CONDUCT，不等于社区完全无规范；AGENTS 和 WONTFIX 对开发限制有说明。[GH:release][GH:activity][Local:source]

## 安全与风险

**3/5。** 最重要的风险是误读证明的范围，其次才是传统执行攻击面。

1. **规格是前提。** 即使一个性质证明成立，也只覆盖实际写下且被正确解析的性质；AI 同时修改定律和实现可能让原目标消失，应单独审查定律变更。[Docs:guide]
2. **Type : Type 不是可随意外推的可靠性结论。** BendTT 注释把 dead/type 部分与 live 部分分开，并用活跃项的仿射与终止约束建立结论；`Claim.consistent` 针对通过 `Book.check` 的定义不能具有 Empty 类型。不要把它简化成“不受约束的 Type : Type 已被证明一致”，也不要跳过前提宣称存在逻辑矛盾。[Local:kernel]
3. **问题报告不等于已证实内核不一致。** #1483 报告普通检查与内核翻译覆盖不一致；#1482 虽标题为“false equalities”，正文解释涉及算术/缩进解析，不能仅凭标题判定 BendTT 能推出 False。本轮均未独立复现。[GH:issues]
4. **证明与执行语义需分开。** WONTFIX 明示 F32 NaN 在 JS/C 可能走不同分支，以及理论无限对象在运行时存在上限。后端正确性和资源耗尽不由定律文件自动兜底。[Docs:limits]
5. **执行与供应链。** IO/foreign、远程包和安装脚本具有宿主权限风险，不能当沙箱。BendHub 发布公开且永久，guide 还规定缺少许可证的包采用 MIT-0；这与编译器仓库的 Apache-2.0 是不同许可对象，发布前应检查许可证和敏感内容。[Docs:guide][Local:source]

本次仓库 GHSA API 返回空，只表示该入口未发现已发布公告；未做依赖漏洞审计，也不据此声称“没有漏洞”。[GH:security]

## 学习价值

学习价值高于当前生产采用强度。建议按 **guide 的 law/def 与数量标注 → `bend.ts` 检查逻辑 → `safe.ts` 翻译限制 → `bendtt.lean` 的 Claim 与证明结构 → `comp.ts` 后端** 阅读，不把 README 的速度图当作前提。[Docs:guide][Local:source][Local:kernel]

一个值得亲手做的实验是：给同一小算法写定律，分别运行普通检查、内核复核、JS 和原生执行，再故意引入假等式、unsafe 依赖及后端边界值，观察各层究竟承诺什么。**把“被证明的对象”和“实际执行的对象”逐层对齐，才是这个项目最有启发性的部分。**
