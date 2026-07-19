---
title: "Schema Harness"
created: 2026-07-20
updated: 2026-07-20
type: repository-analysis
repo_url: "https://github.com/schema-harness/schema-harness.github.io"
category: "ai-programs/ai-harness/guides/agent-engineering"
tags: ["agent-harness", "world-model", "program-synthesis", "arc-agi-3", "mechanism-discovery", "non-software"]
previous_repo: ""
successor: ""
primary_language: "HTML"
license: "No license detected"
stars: 4
forks: 0
last_checked: 2026-07-20
last_verified: 2026-07-20
evidence: "official site + GitHub API/local clone + public trace-dataset score recomputation + one released trajectory deep scan; harness implementation not released; no held-out/frozen-harness result"
archived_reason: ""
docker_support: false
gpu_required: false
estimated_cpu: "N/A for reading; ordinary CPU for the released standard-library scorer"
estimated_memory: "ordinary browser/Python process; harness runtime not published or benchmarked"
estimated_storage: "6.27 MB self-contained page source; 597 MB local verification checkout with all 50 event logs materialized"
status: active
ratings:
  capability: 3
  usability: 4
  performance: 3
  code_quality: 2
  documentation: 4
  community: 1
  maturity: 1
  extensibility: 1
  security: 3
  recommendation: 4
overall_score: 2.6
sources:
  - "[GH] https://github.com/schema-harness/schema-harness.github.io"
  - "[GH:api] GitHub REST/list endpoints queried 2026-07-20: created_at=2026-07-13T23:01:55Z, pushed_at=2026-07-18T12:18:20Z, stars=4, forks=0, open_issues_count=0, size=4550 KB, language=HTML, license=null, archived=false, has_discussions=false; contributors endpoint returned one contributor"
  - "[GH:graphql] GitHub GraphQL queried 2026-07-20: commits=2, open issues=0, open PRs=0, tags=0"
  - "[GH:community] GitHub community/profile queried 2026-07-20: health_percentage=25; README present; no LICENSE, CONTRIBUTING, CODE_OF_CONDUCT, SECURITY, issue template, or PR template detected"
  - "[GH:security] GitHub repository security-advisories API queried 2026-07-20: no published repository advisories returned in this check"
  - "[GH:pages] GitHub Pages API queried 2026-07-20: built from main:/, build_type=legacy, https_enforced=true, status=built"
  - "[GH:local-scan] Local clone /opt/gitclone/schema-harness.github.io at afb182994364631713fb042d660b6eae4d730e73 inspected 2026-07-20: only .nojekyll, README.md, index.html are tracked; README.md=398 bytes/10 lines; index.html=6,270,877 bytes/2,146 lines, loads Google Fonts, embeds base64 images and interactive figure data, and exposes no form in the inspected HTML; repository has 2 commits and no project-owned CI/test workflow; local checkout=10,959,834 bytes"
  - "[Site:method] https://schema-harness.github.io/ inspected 2026-07-20: outer loop observe→deliberate→execute→record; inner loop theorize/write_code→certify/run_backtest→plan/run_bfs→commit/commit_actions; append-only interaction history; complete-history replay; discriminating experiments; abort remaining plan on one prediction mismatch"
  - "[Site:results] https://schema-harness.github.io/ inspected 2026-07-20: self-reports 98.98% Claude Opus 4.8/Fable 5 and 95.35% GPT-5.6 Sol on 25 public games; fixed fallback reruns games scoring below 80 with Fable 5 or Sol max respectively and retains the higher per-game result; states the Claude comparison is controlled at the model-pairing level, the Sol difference is contextual, neither score is ARC-Prize-verified, and no frozen-harness/held-out claim is made; explains RHAE as completion plus squared action-efficiency scoring rather than percent-games-solved"
  - "[HF:dataset] https://huggingface.co/datasets/schema-harness/arc-agi-3-schema-traces at dataset commit 0a0858a9e61a68d1e83142d9e4e3d66fc779c403 inspected 2026-07-20: 50 trajectories, event logs, sanitized session data, snapshots, evaluation manifests, and dependency-free score_trajectories.py; README recommends Python 3.10+; scorer streams JSONL and fails nonzero on malformed/non-contiguous logs, missing baselines/counts, or manifest mismatch; dataset metadata exposes no license tag in this check"
  - "[Local:score] Published event logs downloaded to /opt/data/tmp/schema-harness-traces and checked 2026-07-20 with `python3 score_trajectories.py --compact`: exit 0; gpt_5_6_sol=25 trajectories, 24 wins, 182/183 levels, 95.35%; claude_fable_opus=25 trajectories, 25 wins, 183/183 levels, 98.98%; all event-derived scores matched both manifests; partial checkout with all 50 event logs materialized measured 597 MB. This verifies release-internal score consistency, not environment authenticity, harness generalization, or held-out performance"
  - "[HF:m0r0] Released sample claude_fable_opus/claude-opus-4-8_max_m0r0_100.0 inspected 2026-07-20 via https://huggingface.co/datasets/schema-harness/arc-agi-3-schema-traces/tree/main/claude_fable_opus/claude-opus-4-8_max_m0r0_100.0 : events contain 221 action_taken and 19 model_mispredicted events; the same agent session writes/edits world_model_v5.py, invokes run_backtest/run_bfs/commit_actions, runs Python/shell-style analysis tools, and inspects read-only framework source; final world_model_v5.py is executable and heavily annotated but contains CURRENT_LEVEL-dependent behavior. These are sample-specific observations, not claims about every trajectory"
  - "[ARC:official] https://arcprize.org/results/openai-gpt-5-6 inspected 2026-07-20: ARC Prize reports Sol max at 13.33% Public and 7.78% Semi-Private"
  - "[ARC:report] https://arcprize.org/media/ARC_AGI_3_Technical_Report.pdf inspected 2026-07-20: ARC-AGI-3 evaluates exploration, modeling, goal-setting, planning/execution, and action efficiency on novel interactive environments; official success is defined on first-contact private environments"
  - "[WikiLocal:comparisons] /opt/data/wiki/github-repo-wiki/ai-programs/ai-harness/guides/agent-engineering/12-factor-agents.md inspected 2026-07-20 for category-local positioning only; comparison facts were not externally re-audited in this run"
---

# Schema Harness

> 把 agent 的隐式“理解”强制外化为可执行世界模型：用完整历史回放证伪，用模型内搜索规划，再经唯一 action gate 执行；一旦现实与预测不符，立即废弃余下计划。
>
> **状态**: `active` · **总分**: 2.6/5 · **推荐度**: 4/5
> **核验版本**: GitHub commit `afb182994364631713fb042d660b6eae4d730e73`；Hugging Face dataset commit `0a0858a9e61a68d1e83142d9e4e3d66fc779c403`；2026-07-20

## 一句话总结

Schema Harness 适合正在设计 verification-first agent workflow、希望把“belief → prediction → falsification → planning → controlled action”做成硬约束的研究者；它当前最值得采用的是方法，不是代码，因为公开 GitHub repository 只有项目网页，真正 harness implementation 尚未发布 [GH:local-scan] [Site:method]。

## 总体评价

Schema 最有价值的判断不是“给模型更多工具”，而是把 agent 的认知状态从 context 里的自然语言印象，提升为一个可读、可 diff、可运行的 `step(state, action)` 程序。这个程序必须解释完整 interaction history，只有 backtest 通过后才允许在其中搜索；现实一旦给出反例，执行立即回到建模环节 [Site:method]。

这套结构确实把 scientific method 变成了 harness control flow：理论是程序，实验是能区分竞争假设的 action，反例是第一等 artifact，计划只是当前已认证模型中的推论。发布的 50 条 event logs 与标准库 scorer 也比只贴 leaderboard 截图更可审计；本轮实际重算得到 95.35% 与 98.98%，并与两个 manifest 一致 [HF:dataset] [Local:score]。

但必须把三种“验证”分开：

1. **已验证**：公开 event logs 的 action counts 能按发布的 scorer 重算出声明的 RHAE。
2. **未独立验证**：这些 logs 是否来自声明的完整环境运行、harness 是否按统一冻结版本执行。
3. **尚未验证**：方法对 Semi-Private / private held-out games、其他交互环境或数学研究是否泛化。

项目页面自己明确承认结果只覆盖 25 个 public games、未获 ARC Prize 独立验证，也不作 frozen-harness 或 held-out claim [Site:results]。因此，近 99% 是值得进一步验证的 public-set result，不是已经成立的 general-agent 结论。

## 推荐度：4/5

**定位**：适合 harness architect、agent-research engineer、verification-first 数学/科学 workflow 设计者作为优先研究对象；不适合现在就作为可安装基础设施采用。

研究与方法吸收推荐度 4/5。Schema 把四个常被混在 prompt 里的动作——提出理论、全历史检验、模型内规划、现实执行——变成不同权限的工具与状态转移，且让现实具有最高优先级。这比“请谨慎验证”之类软提示更接近工程 contract [Site:method]。

直接部署推荐度只能给 1/5：GitHub repo 没有 harness source、API/spec、release、license 或运行说明；外部用户只能读网页、审计 traces、重算 score，不能构建或修改同一系统 [GH:local-scan] [GH:community] [HF:dataset]。

## 优势

1. **把 belief 变成 executable artifact**：`world_model.py` 同时承载 state grounding、transition rule 与 goal predicate，理论可以被读取、diff、执行和反驳 [Site:method]。
2. **完整历史回放，而非 context recollection**：append-only Timeline 保留所有真实 action/observation，`run_backtest` 每次都对整个历史做回归检查，context compaction 不再抹去已知反例 [Site:method]。
3. **明确的 effect boundary**：只有 `commit_actions` 能改变环境；模型内分析、backtest 与 BFS 都是无外部副作用的 deliberation [Site:method]。
4. **fail-fast execution**：一处 prediction mismatch 即丢弃剩余 plan，避免错误模型把一个坏动作扩大成长串副作用 [Site:method]。
5. **主动实验设计**：不是随机探索，而是选择能让竞争假设产生不同预测的 action，以较少真实交互最大化信息增益 [Site:method]。
6. **发布了可审计 traces 与 scorer**：50 条轨迹、manifest 和 dependency-free scorer 允许第三方检查 release 内部一致性；本轮真实执行通过 [HF:dataset] [Local:score]。
7. **作者主动限制结论强度**：页面区分 controlled Claude comparison 与 contextual Sol reference，并明确标注 public-only、self-reported、no held-out claim [Site:results]。

## 劣势

1. **真正 harness 未开源**：GitHub 只有 3 个 tracked files；核心 framework、tool implementation、prompt contract、sandbox 与 model adapter 都不在 repo 中 [GH:local-scan]。
2. **无 license**：GitHub 未检测到 LICENSE，Hugging Face dataset metadata 本轮也未见 license tag；在没有许可澄清前，不应复制代码、重分发 dataset 或把实现纳入生产系统 [GH:api] [HF:dataset]。
3. **只有 public-set 证据**：页面明确没有 frozen harness 或 held-out 结果；public games 可被反复研究，无法排除方法、prompt、工具和 per-game heuristics 对公开集合的适配 [Site:results] [ARC:report]。
4. **fallback 不是单次同预算结果**：低于阈值的 games 会由第二模型/effort 重跑并保留更高 per-game score。这个 protocol 可以是预先固定的，但比较时必须把额外 inference、selection 与开发预算写入 cost model，不能把它当成单模型单次运行 [Site:results]。
5. **作者与 certifier 未分离**：抽样 M0R0 session 中，同一 agent 写 world model、跑 backtest、解释 mismatch 并继续规划；这能发现 observational inconsistency，却不是 independent verification，更不能排除共同盲点 [HF:m0r0]。
6. **exact replay 可能奖励错误抽象层**：抽样 M0R0 trace 中，agent 多次为纯 HUD/bar 的像素级误差修模；这提高 full-frame exactness，却不总是提高 goal-relevant causal understanding [HF:m0r0]。
7. **样本暴露 harness artefact 与 public-level special case**：M0R0 session 显示 agent 读取 read-only framework source并围绕首 transition 的 replay artefact修补模型；最终 world model 还含 `CURRENT_LEVEL` 条件行为。这是极有价值的可审计证据，也说明 public-set near-ceiling 不能直接解释为 domain-general mechanism discovery [HF:m0r0]。
8. **repo 工程形态不利维护**：6.27 MB 单文件 HTML、两次 commit、无项目自有 CI/test、无贡献与安全治理文档，适合发布文章，不适合承载长期可协作的 harness codebase [GH:local-scan] [GH:community]。

---

## 适合什么场景

- 设计 agent 的 hypothesis → experiment → verification → action control loop。
- 研究如何把 world model 从 latent vector / prose memory 外化为程序。
- 为高代价环境设计“先在模型内搜索，再执行现实动作”的 architecture。
- 设计 append-only evidence ledger 与 revision-triggered regression checks。
- 研究 active experiment selection：优先寻找能区分竞争理论的最小反例。
- 用公开 traces 教学 agent 如何从 representation error 而不只是 rule error 中恢复。
- 作为 verification-first mathematical/scientific harness 的设计样本，但需重新定义数学语境中的 oracle。

## 不适合什么场景

- 寻找可直接安装、部署、fork 或二次开发的开源 harness。
- 把 public-set 98.98% 外推为 Semi-Private、private 或一般环境能力。
- 需要官方 ARC Prize verified score、冻结 harness、预注册 protocol 或等计算预算 ablation。
- 把像素级 complete-history fit 当成因果正确性、数学证明或未来泛化的充分条件。
- 高风险生产 agent 直接采用“同一模型生成并认证自身理论”的单通道设计。
- 在许可未澄清前复制、再发布或商业集成其代码/数据。

## 与类似项目对比

| 项目 | 定位 | 相对本项目 |
|------|------|-----------|
| 12-Factor Agents | 面向 production LLM application 的 agent-engineering 方法论与 workshop | 12-Factor Agents 更广泛讨论 context ownership、control flow、human approval 与 stateless reducer；Schema 更窄、更实验化，重点是 executable world model、complete-history replay、discriminating experiment 与 fail-fast action gate [WikiLocal:comparisons]。 |

上述项目按 `ai-programs/ai-harness/guides/agent-engineering` 同类范围做 taxonomy positioning，依据本地 wiki 既有条目的分类语境，而非本轮重新抓取外部事实；这一行不表示 12-Factor Agents 是方法上最近的 peer，且未按同一 10 维度框架重审 [WikiLocal:comparisons]。

---

## 它能做什么

能力评分 3/5。这里评价公开 repository + released research artifact 的能力，不把未发布实现按网页宣称计入可采用功能。

以下 1–8 项由项目页描述；公开 traces/scorer 支持 event/artifact 与 score-replay 层，但本轮只深审一条 trajectory，不能把每项都解释为跨 50 runs 的独立复核 [Site:method] [HF:dataset] [HF:m0r0]：

1. **Observe**：接收 64×64 grid、legal actions 与环境状态。
2. **Record**：把 action、observation、tool call、mismatch 与 run state 写入 append-only event timeline。
3. **Theorize**：编辑 `step()` / `predict()`、state representation 与 `is_goal()`。
4. **Certify**：用 `run_backtest` 回放全部已记录 transitions，并报告精确 mismatch。
5. **Plan**：在当前 world model 中用 BFS 搜索，不消耗真实 environment actions。
6. **Commit**：通过唯一 `commit_actions` effect channel 执行计划。
7. **Interrupt**：一旦真实 transition 与 prediction 不同，丢弃余下 plan 并把 mismatch 作为反例返回。
8. **Persist**：`world_model.py`、`notes.md` 与 timeline 跨 turn/context compaction 保留。
9. **Audit release**：用标准库 scorer 从 event logs 重算 50 条轨迹的 RHAE。

给 3 而不是 4：这些能力在文章与 release artifacts 中可观察，但核心 harness source、tool schema、运行入口、tests、sandbox 和 adapter 没有公开，外部用户无法复现同一系统。

## 运行环境与资源占用

| 场景 | CPU | 内存 | 存储 | 说明 |
|------|-----|------|------|------|
| 阅读项目页 | 定性预期：普通浏览器 CPU | 定性预期：普通浏览器内存 | `index.html` 6,270,877 bytes | 单文件静态页面，内嵌大量图像/交互数据，并加载 Google Fonts [GH:local-scan] |
| 重算公开 scores | 普通 CPU | 流式读取 JSONL；本轮未做峰值测量 | 本轮 partial checkout 597 MB | Python 3 标准库；50 条 `events.jsonl` 全部 materialize 后，scorer exit 0 [Local:score] |
| 运行 Schema harness | 未公开 | 未公开 | 未公开 | 没有可安装 runtime、dependency manifest、container 或 hardware contract [GH:local-scan] |

- **运行时**：网页为静态 HTML；scorer 推荐 Python 3.10+ 且仅用标准库 [HF:dataset]。
- **操作系统**：阅读跨平台；scorer 仅依赖标准库，跨平台属于定性预期，未做多操作系统 smoke test。
- **Docker**：无官方 Docker support。
- **GPU**：阅读与 scorer 不需要；完整模型推理依赖未披露。
- **外部依赖**：网页使用 Google Fonts；完整运行显然需要模型提供商与 ARC environment，但公开 repo 未给出配置 contract。

性能评分 3/5。静态服务与流式 scorer 都很直接，但 6.27 MB 单页并不轻；更重要的是完整 harness 的 token、latency、model-call、BFS memory 与多次 fallback 成本均未知，不能因 action efficiency 高就推断 compute efficiency 高。

## 上手体验

评分 4/5。

作为研究说明页，上手体验优秀：读者可以滚动理解 outer/inner loop、查看 case studies、切换结果图，并直接进入公开 dataset。score recomputation 只需 Python 3 标准库，本轮实际运行成功 [Site:method] [HF:dataset] [Local:score]。

保留一分，因为“理解”与“复现”断裂：没有 install command、harness source、API reference、prompt/tool schema、sandbox contract 或最小 demo。读者能在半小时内获得设计价值，却不能在一小时内跑起 Schema。

## 代码质量

评分 2/5。

按 non-software / research-site rubric，页面内容与交互设计完成度高，README 也准确说明它是单个 self-contained `index.html`。但 repository 工程质量很弱：3 个 tracked files、2 次 commit、6.27 MB 单文件 HTML、无项目自有 test/CI、无 source/content/data 分层、无构建脚本与 contributor guide [GH:local-scan] [GH:community]。

Hugging Face scorer 本身比网站 repo 更工程化：标准库、streaming parse、manifest cross-check、malformed log 与 non-contiguous action checks都做了 fail-closed 处理 [HF:dataset]。但它位于外部 dataset repo，不能补足 GitHub project 对核心 harness implementation 的缺失。

## 可扩展性

评分 1/5。

概念容易迁移，代码却不可扩展。公开 GitHub repo 没有 harness modules、plugin points、tool interfaces、event schema spec、model provider abstraction 或 stable API；也没有 license 允许第三方放心 fork 核心方法的实现 [GH:local-scan] [GH:community]。

公开 traces 能帮助逆向理解，但“从 logs 猜 framework”不是可维护扩展接口。除非作者发布 implementation + license + spec，否则任何复刻都应被视为独立重实现。

## 文档质量

评分 4/5。

项目页作为 research communication artifact 很强：概念动机、control loop、metric、controlled/contextual comparison 边界、case studies、self-report caveat 与 held-out limitation 都写得清楚 [Site:method] [Site:results]。尤其可取的是，它没有把 98.98% 写成“98.98% games solved”，而是解释 RHAE 同时衡量 completion 与 action efficiency。

不足在 implementation documentation：GitHub README 只有 10 行，只说明 Pages 部署；没有 architecture spec、event/tool schema、prompt contract、environment adapter、reproduction guide、ablation protocol 或 privacy/redaction说明 [GH:local-scan]。因此是“论文式说明 4/5，工程文档 1/5”的混合结果，综合给 4。

## 社区与成熟度

| 维度 | 评分 | 说明 |
|------|------|------|
| 社区活跃度 | 1/5 | 2026-07-20 快照只有 4 stars、0 forks、1 contributor、0 open issues/PRs；没有贡献治理文件或讨论区。项目传播热度不能替代 repo collaboration [GH:api] [GH:graphql] [GH:community]。 |
| 成熟度 | 1/5 | repository 创建于 2026-07-13，只有 2 commits、0 tags/releases；核心 implementation 未发布，且没有 held-out/frozen-harness 证据 [GH:api] [GH:graphql] [Site:results]。 |

`status: active` 只表示 repo 当前未归档且刚有提交，不表示 API、结果或实现已经稳定。

## 安全与风险

评分 3/5。

GitHub repo 本身是 HTTPS-enforced static Pages，检查到的 HTML 没有 form，服务器端攻击面因项目形态而较小；但页面会向 Google Fonts 发起第三方请求，可能披露常规网络 metadata，本轮没有做浏览器 network/privacy audit [GH:pages] [GH:local-scan]。这不是深度安全设计。advisory API 没有发现已发布 GHSA，也只是一项 negative lookup [GH:security]。

主要风险不在网页 RCE，而在研究与数据边界：

- **License risk**：GitHub 与 dataset 都未在本轮检查中给出明确许可，复制/再发布边界不清 [GH:api] [HF:dataset]。
- **Trace privacy / redaction risk**：dataset 包含 sanitized sessions、tool calls、working files 与 snapshots；抽样 session 仍能看到 framework-source inspection 与大量内部 reasoning artifacts。大规模二次利用前应独立审计脱敏质量 [HF:dataset] [HF:m0r0]。
- **Prompt/tool supply chain**：抽样 session 已展示 executable Python world model、Python/shell-style analysis tools 与外部 environment actions；此类实现需要 sandbox、resource limits、dependency policy 与 audit log。当前公开 repo没有这些安全 contract [HF:m0r0]。
- **Benchmark leakage**：允许 agent 读取 framework source有助 debug，却也可能让它适配 replay artefacts；评估 generalization 时应隔离 implementation quirks 与 task semantics [HF:m0r0]。

## 学习价值

学习价值很高。Schema 提供了一个少见的、足够具体的 harness thesis：**不要只要求模型“解释它相信什么”，而要让它提交一个能预测、能回放、能被现实反驳的构造规则。**

对 verification-first 数学/科学 harness，值得吸收以下六点：

1. **Hypothesis-prediction ledger**：每个 approach 除了 statement / proof，还应列出它对边界案例、有限实例、可观测量与 competing hypotheses 的不同预测。
2. **Discriminating-test selection**：counterexample/computation lane 不只“多跑一些例子”，而应优先选择能区分仍存活候选的最小、低成本实验。
3. **Revision-triggered replay**：candidate 或 representation 一旦 material revision，自动重跑所有可机械重现的 computation、formal checks、source-hypothesis checks；旧 green verdict 不应静默继承。
4. **Effect gate + fail-fast**：昂贵 computation、外部 action 或长计划必须经单一 gate；新反例出现后，立即取消依赖旧假设的剩余计划。
5. **Representation revision 一等化**：mismatch 不只说明“某个 lemma 错了”，也可能说明 object/state definition 不对；应允许 representation 与 mechanism 联动修订。
6. **Frozen/held-out evaluation**：任何 harness optimization 都应在预注册、冻结版本、未参与调参的新问题上评估，并记录总模型调用、重试与选择预算。

但不应照搬三点：

- 不把 BFS/`step()` 当成所有数学任务的统一形式；数学对象未必有有限、可模拟 transition system。
- 不把 raw exact match 当成唯一 oracle；应分层区分 syntax/schema、goal-relevant invariants、semantic claims、formal proof 与 human acceptance，避免为无关 HUD 式细节过拟合。
- 不用同一模型的 complete-history fit 取代 blind verifier 与 adversarial auditor。Schema 的 replay verification 与独立证明验证是互补关系，不是替代关系。

总之，Schema 的真正贡献不是“ARC-AGI-3 public 近 99%”这个数字本身，而是展示了一个更一般的工程命题：**harness 应把认知承诺变成可执行、可证伪、可回归的 artifact，并让现实拥有中断计划的最高权限。** 至于它是否已经找到可泛化的 mechanism-discovery architecture，仍须等开源实现、冻结 protocol 与 held-out 结果回答。
