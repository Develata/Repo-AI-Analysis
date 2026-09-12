---
title: "Ruflo"
created: 2026-09-12
updated: 2026-09-12
type: repository-analysis
repo_url: "https://github.com/ruvnet/ruflo"
category: "ai-programs/ai-harness/ai-plugins"
tags: [agent-harness, multi-agent, orchestration, claude-code, codex, hermes, mcp, memory, typescript]
previous_repo: "https://github.com/ruvnet/claude-flow"
successor: ""
primary_language: "TypeScript"
license: "MIT"
stars: 72200
forks: 8543
last_checked: 2026-09-12
last_verified: 2026-09-12
evidence: "GitHub REST/GraphQL metadata + README/docs/releases/issues/advisories + pinned-tree source review + selected local source-level security smoke; not installed or deployed by Develata, no full build/benchmark"
archived_reason: ""
docker_support: false
gpu_required: false
estimated_cpu: "Heuristic, not measured: about 1 core for basic CLI and 1-2+ cores for CLI+MCP; multi-agent, local-model, browser and background-worker modes scale with enabled processes"
estimated_memory: "Heuristic, not measured: hundreds of MB may be a reasonable starting expectation for the Node harness before agent/model/browser processes and vector indexes"
estimated_storage: "npm package and project state are workload-dependent; source repository GitHub size snapshot about 537 MiB, excluding dependency/build caches"
status: active
ratings:
  capability: 4
  usability: 3
  performance: 3
  code_quality: 3
  documentation: 4
  community: 4
  maturity: 2
  extensibility: 5
  security: 2
  recommendation: 3
overall_score: 3.3
sources:
  - "[GH] https://github.com/ruvnet/ruflo — GitHub REST queried 2026-09-12: created_at=2025-06-02, pushed_at=2026-09-12, default_branch=main, commit=2821d7bb779622462c367a25bfaab41718a4b193, stars=72200, forks=8543, open_issues_count=989 (includes open PRs), size=549535 KiB, license=MIT"
  - "[GH:counts] GitHub GraphQL queried 2026-09-12 at main commit 2821d7bb779622462c367a25bfaab41718a4b193: open issues=668, open PRs=321; these reconcile to REST open_issues_count=989"
  - "[GH:release] https://api.github.com/repos/ruvnet/ruflo/releases?per_page=6 queried 2026-09-12: latest v3.41.2 published 2026-09-10; v3.39.2 release notes document the fast-uri fix and post-publish validation; v3.41.1 says the first caller could make later explicit database paths silently ignored and two interfaces could report success while writing different stores; v3.41.2 says curateIndex could shrink a 75-line/49-link hand-curated MEMORY.md to a six-line stub and names the Windows native-bridge allocation abort as still unfixed"
  - "[GH:issues] Sampled issue evidence checked 2026-09-12: #3303 https://github.com/ruvnet/ruflo/issues/3303 (Windows auto-memory path); #3189 https://github.com/ruvnet/ruflo/issues/3189 (platform witness verification); #3294 https://github.com/ruvnet/ruflo/issues/3294 (request-local MCP principal context); #704 https://github.com/ruvnet/ruflo/issues/704 (--dry-run); #697 https://github.com/ruvnet/ruflo/issues/697 (hive-mind crash); #695 https://github.com/ruvnet/ruflo/issues/695 (fragmented checkpoints); #684 https://github.com/ruvnet/ruflo/issues/684 (sessions/swarms alignment); #2948 is named unresolved in v3.41.2 release notes (Windows native-bridge allocation abort)"
  - "[GH:advisory] https://github.com/ruvnet/ruflo/security/advisories/GHSA-c4hm-4h84-2cf3 queried 2026-09-12: published critical CVE-2026-59726, CVSS 10.0; advisory states the unauthenticated default Docker Compose MCP bridge allowed tools/call → terminal_execute, provider-key reads, attacker-controlled swarms and persistent AgentDB pattern poisoning; affected npm ruflo <3.16.3, patched in 3.16.3"
  - "[GH:contributors] https://api.github.com/repos/ruvnet/ruflo/contributors?per_page=12 queried 2026-09-12: top listed account ruvnet=6972 contributions, next account=50; this point-in-time endpoint sample supports concentration but is not a complete contributor census"
  - "[GH:deepseek-plugin] https://github.com/ruvnet/ruflo/tree/2821d7bb779622462c367a25bfaab41718a4b193/plugins/ruflo-deepseek-harness — .claude-plugin/plugin.json, commands/ruflo-deepseek-harness.md and scripts/_deepseek.mjs inspected 2026-09-12: this is a Claude/Ruflo plugin calling https://api.deepseek.com/v1/chat/completions via DEEPSEEK_API_KEY; these inspected files do not implement the deepseek-ai/deepseek-harness host plugin contract"
  - "[GH:dependency-advisory] https://github.com/advisories/GHSA-5jgf-p345-68v8 queried 2026-09-12: high-severity fast-uri advisory; 3.x affected >=3.1.3,<3.1.6, first patched 3.1.6. Current pinned package manifests at commit 2821d7bb use fast-uri ^3.1.6 or >=3.1.6"
  - "[GH:security] https://github.com/ruvnet/ruflo/blob/2821d7bb779622462c367a25bfaab41718a4b193/SECURITY.md — supports only 3.5.x as written, despite current package version 3.41.2; documents private reporting, response targets, safe harbor and boundary controls"
  - "[GH:ci] https://github.com/ruvnet/ruflo/blob/2821d7bb779622462c367a25bfaab41718a4b193/.github/workflows/ci.yml — Linux test ratchet and Linux/macOS/Windows build jobs; security audit, typecheck and several binary checks are explicitly non-blocking; latest CI workflow run on this commit was successful when queried 2026-09-12"
  - "[GH:source] GitHub tree and raw-file review at commit 2821d7bb779622462c367a25bfaab41718a4b193 on 2026-09-12: README.md, package.json, ruflo/package.json, v3/@claude-flow/cli/package.json, CONTRIBUTING.md, LICENSE, Docker Compose/MCP bridge sources/tests, Hermes Tier-1 tests, auto-memory bridge and docs; languages API: TypeScript=25133198 bytes, JavaScript=3172882, Shell=1002824, Svelte=395556, Rust=289149 plus smaller languages"
  - "[GH:source-smoke] Selected source-level smoke on commit 2821d7bb: node ruflo/src/mcp-bridge/test-security-lock.js; this checks both current MCP bridge sources for loopback bind, fail-closed public bind, mounted bearer auth with constant-time compare, server-side terminal opt-in, CORS configuration, MCP session handling and Node 24 Dockerfiles. It does not check Compose's MongoDB authentication/read-only-container declarations and is not a full package build, runtime deployment, penetration test or dependency audit"
  - "[Docs] https://github.com/ruvnet/ruflo/blob/2821d7bb779622462c367a25bfaab41718a4b193/README.md — project-defined scope, two installation paths, 35 listed plugins, claimed 100+ agents, 12 workers, memory/federation/model-provider surfaces, Web UI beta and benchmark pointers; claims not independently reproduced are phrased as upstream claims"
  - "[Docs:guide] https://github.com/ruvnet/ruflo/blob/2821d7bb779622462c367a25bfaab41718a4b193/docs/ruflo-explained.md — 14-chapter conceptual and operational guide"
  - "[Docs:memory-audit] https://github.com/ruvnet/ruflo/blob/2821d7bb779622462c367a25bfaab41718a4b193/docs/reviews/intelligence-system-audit-2026-05-29.md — upstream internal audit referenced by README for vector-memory benchmark and architecture claims; not independently rerun here"
  - "[WikiLocal:comparisons] Local github-repo-wiki entries for oh-my-claudecode, Superpowers and Ponytail consulted 2026-09-12 for category-level positioning only; competitors were not freshly audited under the same 10-dimension rubric"
---

# Ruflo

> 面向 Claude Code、Codex 与其他 agent harness 的复合型 meta-harness：把 swarm 编排、skills/hooks/MCP、持久记忆、插件、跨主机 federation 与安全控制装进同一工具链。
>
> **状态**: `active` · **总分**: 3.3/5 · **推荐度**: 3/5
> **核验版本**: `v3.41.2` / main `2821d7bb`，GitHub 快照 2026-09-12

> 📦 **Previously tracked as [ruvnet/claude-flow]** — repository URL now redirects to `ruvnet/ruflo`; this entry analyzes the current Ruflo project.

## 一句话总结

Ruflo 适合愿意以较高复杂度和权限风险换取「多 agent 编排 + 记忆 + 插件 + 跨主机协作」一体化能力的 agentic-engineering 研究者与 power users；它值得拆解、隔离试用，但当前不宜无边界接管敏感生产仓库。

## 总体评价

Ruflo 的中心不是一个终端 coding agent，而是包围 Claude Code、Codex 等宿主的 **agent meta-harness**。完整 CLI 路径会生成工作区配置并启用 agents、commands、skills、MCP server、hooks、daemon、memory、background workers；插件路径则允许只安装较窄的 Claude Code surface。仓库还包含 federation、Web UI、模型路由、AgentDB/RuVector、浏览器测试、安全审计和垂直领域插件。以本 wiki 的 taxonomy 看，它是组合多种一等 harness surface 的 `ai-plugins` 项目，而非纯 agent framework 或纯 MCP server。[Docs]

其主要优点是能力面极宽、扩展接口多、文档体量大且维护节奏极快。主要问题同样明显：项目只有约 15 个月，版本与架构仍在快速变化；点时快照有 668 个 open issues 与 321 个 open PRs；最新两个 patch release 仍在修复 memory 路径、后端身份和用户 `MEMORY.md` 被覆盖等 correctness 问题。[GH:counts][GH:release] CI 与安全工程正在增强，但旧默认 Docker 部署曾出现 CVSS 10.0 的 unauthenticated RCE，现有高权限 surface 又覆盖 shell/MCP、API keys、浏览器、分布式消息和持久学习状态，因此不能把“已修一个 CVE”解释成低风险。[GH:advisory][GH:source-smoke]

结论是：**研究价值高于直接采用置信度**。如果需求只是单次 review、少量 skills 或几个独立 worker，宿主原生机制通常更简单；只有确实需要长生命周期 swarm、共享/持久记忆、插件组合或跨主机 federation 时，Ruflo 的复杂度才可能值得。

## 推荐度：3/5

Ruflo 最适合 agentic-coding 基础设施研究者、Claude Code/Codex power users，以及有能力做权限收缩、版本固定、回滚和状态备份的小型团队。

给 3 而非 4 的理由不是能力不足，而是有效能力尚难与当前复杂度、bug backlog、快速变更和安全历史分开评价。建议先在 disposable repository 或独立用户/容器中固定版本试用：从 lite plugin 或少量只读能力开始，禁用 terminal/browser/federation/后台自动启动，观察写入的配置与状态，再逐项放权。若已有 Hermes、Claude Code 原生 subagents 或一套可审计的外部 agent/MCP 编排，先比较增量收益，不应因为 Ruflo 的功能清单很长就叠加第二套状态机。

## 优势

1. **复合能力完整**：upstream 列出的 surface 包括 swarm、100+ agents、memory/learning、hooks、MCP、daemon、background workers、model routing、federation 和 35 个 Claude Code plugins；广度在同类复合插件中突出，但本条是代码/文档核验，不是全功能实测。[Docs][GH:source]
2. **扩展点丰富**：仓库把插件、agents、commands、skills、MCP tools、hooks、packages 与服务作为显式目录/包，且提供 plugin creator 和多种安装路径。[Docs]
3. **近端维护活跃**：main 在核验当天仍有提交，最新 release 为 v3.41.2，最近 bug reports 能看到对应 patch 与回归测试说明。[GH][GH:release]
4. **安全修复开始形成可检查 contract**：当前 Compose 源码声明 loopback、MongoDB auth、read-only container；MCP bridge 有 bearer auth、terminal opt-in 和 source-level regression lock，且选定 source smoke 通过。[GH:source][GH:source-smoke]
5. **文档覆盖宽**：README 不只给 feature list，也区分 lite plugin 与 full CLI 路径，给出完整入门长文、插件目录、架构与 benchmark/audit 入口。[Docs][Docs:guide]

## 劣势

1. **可靠性债务显著**：668 open issues 与 321 open PRs 是沉重的维护队列；样本涉及 Windows memory 同步、hive-mind crash、checkpoint/session alignment 与 `--dry-run` 语义，近期 release 也承认多个 silent-success / wrong-store 问题。[GH:counts][GH:issues][GH:release]
2. **权限和状态面过宽**：完整安装会写入 workspace、运行 hooks/daemon/MCP、访问 provider keys，并可启用 terminal、browser、memory learning 与 federation；最坏影响不止生成错误代码，还包括凭据泄露与持久状态污染。[Docs][GH:advisory]
3. **仍处高变更期**：创建仅约 15 个月、当前 v3.x 内部仍含多个 alpha 依赖，近期发布密度很高，不能从 `3.41.2` 的版本号推断稳定 API。[GH][GH:source][GH:release]
4. **CI 有明显软门禁**：security audit、typecheck 与部分 binary checks 使用 `continue-on-error` 或显式容错；测试采用历史失败 ratchet。核验 commit 的最新 CI run 成功，但这仍不是“全套质量门禁严格通过”的证明。[GH:ci]
5. **文档/元数据有漂移**：`SECURITY.md` 写“仅支持 3.5.x”，而当前 package/release 已是 3.41.2；仓库内还能看到旧 `claude-flow` 名称与不同世代的描述，增加辨识成本。[GH:security][GH:source]

---

## 适合什么场景

- 在隔离环境中研究 multi-agent topology、任务拆分、共享 memory、learning loop 与长期 orchestration。
- Claude Code/Codex power user 需要组合 agents、skills、hooks、MCP 与 background workers，并愿意治理它们的生命周期。
- 多台机器或多个长生命周期 agent session 确需 discover、watch、wait、wake、claim、resume 或交换已签名事件，而不是一次 controller-to-tool 调用。
- 希望通过一个可 fork 的 MIT monorepo 学习 agent harness、MCP bridge、vector memory、plugin marketplace 与 federation 的集成方式。
- 团队能固定版本、隔离凭据、备份 workspace/memory 状态，并对升级做 canary 与回滚验证。

## 不适合什么场景

- 只需调用一次 reviewer、一次 coding agent 或少量独立 shell task；宿主原生 subagent/profile 更直接。
- 敏感生产仓库、长期密钥或高价值基础设施，却没有 sandbox、network policy、审计和状态恢复能力。
- 希望“安装即稳定”、不愿读 release notes，也无法承受 hooks/daemon/memory 行为变化。
- 资源和 token 预算严格，且不能限制 agent 数、后台 worker、browser/local model 或向量索引。
- 把 README 中所有 agents、性能数字或“self-learning”叙述都当成已独立验证能力。

## 与类似项目对比

| 项目 | 定位 | 相对本项目 |
|------|------|-----------|
| Ruflo | 多宿主 agent meta-harness，组合 swarm、memory、plugins、MCP、hooks、federation | 当前分析对象；surface 最宽，但状态、安全和运维复杂度也最高 |
| oh-my-claudecode | Claude Code teams-first orchestration plugin | 更聚焦 Claude Code 本地开发流与 tmux workers；Ruflo 更平台化，memory/federation/插件生态更重 |
| Superpowers | 跨 harness 的软件工程方法论与 skill workflow | 更轻、更重工程纪律；Ruflo 更像运行时与基础设施，能力更多但采用边界更难治理 |
| Ponytail | 为既有 agent 客户端提供多 surface 增强的插件层 | 通常比 Ruflo 窄；Ruflo 进一步承担 swarm runtime、持久学习与跨主机协作 |

上述项目仅依据本地 `ai-plugins` 分类与既有条目做定位级对比，未在本轮按同一 10 维度框架重新深审。[WikiLocal:comparisons]

---

## 它能做什么

按 README 与 pinned tree，Ruflo 主要覆盖：[Docs][GH:source]

- 为 Claude Code/Codex 提供专用 agents、commands、skills、hooks 与 MCP tools；
- 以 hierarchical、mesh、adaptive 等 topology 编排多个 agents；
- 通过 AgentDB/RuVector 做持久 memory、hybrid/vector retrieval 与学习 pattern；
- 运行 background workers、daemon、cost tracking、observability、test generation 与 browser testing；
- 通过插件 marketplace 组合 core、swarm、memory、security、workflow、local LLM 等模块；
- 通过 federation/claims/channels 协调跨机器 agent；
- 提供 Web UI beta、多模型路由与可自托管 Compose stack。

能力广度评分 **4/5**。没有给 5，是因为本轮未部署或端到端复现这些 surface，且 issue/release 证据显示 memory、Windows、federation 和 session 路径仍有有效性缺口；“名义上存在”不等于“代表性平台上稳定可用”。[GH:issues][GH:release]

## 运行环境与资源占用

| 场景 | CPU | 内存 | 存储 | 说明 |
|------|-----|------|------|------|
| Lite plugin / 基本 CLI | 启发式估计约 1 core | 启发式估计数百 MB 起 | npm 包 + 少量配置/状态 | 未做本地安装测量；取决于宿主 Claude Code/Codex 与 project size |
| Full CLI + MCP/memory | 启发式估计 1-2+ cores | 启发式估计数百 MB 至数 GB | dependency cache、workspace state、memory/vector index | Node 20+；原生/可选依赖与索引规模会改变占用 |
| 多 agent/browser/local model/federation | 启发式估计多核 | 启发式估计数 GB 至显著更高 | project clone、worktrees、models、telemetry/state | 成本主要由 agent 进程、LLM context、browser/local model 放大 |

- **运行时**：Node.js 20+；仓库还含 TypeScript/JavaScript 主体、少量 Rust/WASM 与可选 native dependencies。[GH:source]
- **操作系统**：文档覆盖 macOS、Linux、WSL、Git-Bash 与 native Windows；当前 issues/releases 说明 Windows 路径仍需额外谨慎。[Docs][GH:issues][GH:release]
- **Docker**：仓库有自建 Compose/Dockerfiles，但本轮未验证官方发布的 ready-to-pull Ruflo image，故 `docker_support: false`；这不等于没有容器化源码。[GH:source]
- **GPU**：基本 harness 不要求；local-model/GPU-vector 插件可选。
- **外部依赖**：Claude Code/Codex 或其他宿主、LLM provider、npm ecosystem；不同插件还可引入 browser、database、relay 与 local model。

资源效率评分 **3/5**。没有端到端 benchmark，故不采用 README 所引内部 audit 的加速数字给高分；架构可按插件裁剪是加分项，但多 agent、background workers、向量 memory 和 browser/local models 天然会放大进程、token 与状态成本。[Docs][Docs:memory-audit]

## 上手体验

Lite plugin 路径可以只装 commands/agents，full CLI 则可由 `npx ruflo@latest init wizard` 引导；README 明确解释两条路径，这是良好 onboarding。[Docs]

但“会安装什么”和“各层权限如何叠加”并不简单。full path 涉及 workspace files、hooks、MCP、daemon、几十个 plugins、众多 commands/agents；品牌迁移与代际元数据也会让搜索结果、包名和文档出现 `claude-flow`/`ruflo` 混用。上手体验评分 **3/5**：基本启动不难，安全而可预测地用好并不属于一小时内的低认知负担任务。

## 代码质量

仓库是大型 TypeScript/JavaScript monorepo，目录分层覆盖 packages、plugins、services、tests、docs/ADR 与 CI；pinned tree 有专门 security regression test、Windows regression 与 memory tests。最新 patch release 对具体报告描述根因、回归测试和未解决边界，这比只给营销式 changelog 更可信。[GH:release][GH:source]

扣分来自三方面：一是高 issue/PR backlog；二是近期仍出现 wrong-store silent success、自动 memory overwrite 与 Windows path 错误；三是 CI 的 audit/typecheck/部分 smoke 有软失败路径，历史 test debt 以 ratchet 管理。[GH:counts][GH:ci][GH:release] 代码质量评分 **3/5**：存在实质工程治理，但不足以由仓库规模和 CI 数量推到 4。

## 可扩展性

Ruflo 同时暴露 plugins、skills、commands、agent definitions、hooks、MCP、package APIs、model providers、memory backends 和 federation surfaces；README 还列有 plugin creator。深度定制不必都通过 fork。[Docs][GH:source]

可扩展性评分 **5/5**。这里的 5 只表示 extension surface 极完整，不表示每种扩展都同样稳定、安全或文档充分。

**DeepSeek 接入边界**：虽然仓库有名为 `ruflo-deepseek-harness` 的插件，但本轮检查到的是 Claude/Ruflo 插件 manifest 与直接调用 DeepSeek Chat Completions API 的脚本，不是 DeepSeek AI 官方 Harness 的插件接入证明。因此本条不据这个名称标注 `deepseek-harness` 或 `dsh-plugin`；也不由该局部检查断言整个仓库绝无其他适配。[GH:deepseek-plugin]

## 文档质量

README 对项目定位、两种安装路径、主要能力、插件目录、MCP 与 Web UI 都有可操作说明；`Ruflo Explained` 提供从概念到成本/验证的长篇路线，仓库另有大量 ADR、reviews 与插件文档。[Docs][Docs:guide][GH:source]

文档质量评分 **4/5**。扣分点是体量和营销强度提高了检索成本，部分数字/能力需要跳到内部 audit 才能理解证据，且 `SECURITY.md` 支持版本已经与 v3.41.2 漂移。[GH:security]

## 社区与成熟度

| 维度 | 评分 | 说明 |
|------|------|------|
| 社区活跃度 | 4/5 | 72,200 stars、8,543 forks、核验当天 push、近期密集 releases；contributors API 的点时样本高度集中于主要维护者，321 open PRs 与 668 open issues 也显示 review/维护压力，不能仅凭可见度给 5。[GH][GH:contributors][GH:counts] |
| 成熟度 | 2/5 | 仓库约 15 个月，功能与版本高速推进，内部仍有 alpha dependencies；近期 patch 持续修复基础 memory/runtime correctness，尚不符合“稳定且破坏性变更罕见”。[GH:source][GH:release] |

## 安全与风险

安全评分 **2/5**。核心依据不是“发现过一个 CVE 就永久判死刑”，而是攻击面和历史故障的组合：GHSA-c4hm-4h84-2cf3 / CVE-2026-59726 记载旧版默认 Docker Compose MCP bridge 可被未认证远程调用 `terminal_execute`，进而读取 provider keys、启动攻击者 swarm，并向 AgentDB 写入持久污染；受影响 `<3.16.3`，3.16.3 已修。[GH:advisory]

当前 main 已有实质缓解：MCP bridge 的 loopback bind、public bind without token fail-closed、constant-time bearer check、server-side terminal opt-in 和 source regression lock 由选定 source-level test 覆盖；authenticated MongoDB 与 read-only container 来自 Compose 源码检查。另一个 high-severity `fast-uri` dependency advisory 的当前 manifests 已提高到已修版本范围。[GH:source][GH:source-smoke][GH:dependency-advisory] 但这不是完整部署/渗透/依赖审计，且当前 surface 仍能接触 shell、browser、keys、跨主机消息和 persistent learning store；`SECURITY.md` 支持矩阵漂移也会影响运维判断。[GH:security] 对外暴露前必须固定已修版本、最小化工具、隔离用户/容器/网络、使用短期低权 token，并把 memory/workspace restoration 纳入 incident response。

## 学习价值

学习价值很高。值得重点阅读的不是“100+ agents”数量，而是：复合插件如何拆 surface；swarm 与 memory 如何进入 coding harness；MCP bridge 怎样从一次严重默认配置漏洞演化出可机械检查的 security contract；以及为什么高自动化系统必须区分 tool result、untrusted relay data 与 operator instruction。[GH:source][GH:advisory]

反面教材同样重要：功能/插件扩张速度、文档营销强度和 star 增长都不能替代 state correctness、Windows 路径、版本支持矩阵和 fail-closed CI。若 Develata 要借鉴，优先摘取窄而可验的 contract（tool annotations、loop breaker、memory non-destructive update、review packet、权限默认值），不宜整体照搬其规模。
