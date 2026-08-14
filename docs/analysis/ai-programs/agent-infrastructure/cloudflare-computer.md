---
title: "Cloudflare Computer"
created: 2026-08-14
updated: 2026-08-14
type: repository-analysis
repo_url: "https://github.com/cloudflare/computer"
category: "ai-programs/agent-infrastructure"
tags: ["agent-infrastructure", "cloudflare-workers", "durable-objects", "virtual-filesystem", "sandbox", "code-execution", "fuse", "typescript", "capnweb", "ai-sdk"]
previous_repo: ""
successor: ""
primary_language: "TypeScript"
license: "MIT"
stars: 8045
forks: 444
last_checked: 2026-08-14
last_verified: 2026-08-14
evidence: "Current GitHub API/docs/release/community/security/workflow review; local shallow clone at main commit 356c5ad19dd193090945cdb2825b9a900d50c3cb; local npm ci --ignore-scripts, workspace-wide build/typecheck and npm test (with two environment-specific FUSE skips), and Biome check. No Cloudflare account deployment, Durable Object/Worker Loader/container/FUSE end-to-end run, external backend integration, or benchmark reproduction was performed."
archived_reason: ""
docker_support: true
gpu_required: false
estimated_cpu: "Cloudflare-hosted workload; the official FUSE benchmark uses a standard-2 container (1 vCPU), which is a measurement fixture rather than a documented minimum. Worker-isolate capacity is governed by the chosen Cloudflare plan and execution limits."
estimated_memory: "Filesystem-only and Worker-isolate paths avoid a dedicated Linux container; container-side VFS is held in memory. The official benchmark fixture has 6 GiB RAM, but this is not a minimum requirement; workload, concurrency, source/module limits, and container choice govern actual use."
estimated_storage: "About 10 GB per Workspace, shared with Durable Object storage; intended for agent-scale working trees rather than full monorepos."
status: active
ratings:
  capability: 4
  usability: 3
  performance: 3
  code_quality: 4
  documentation: 4
  community: 3
  maturity: 1
  extensibility: 4
  security: 3
  recommendation: 3
overall_score: 3.2
sources:
  - "[GH] https://github.com/cloudflare/computer"
  - "[GH:api] GitHub REST API snapshot queried 2026-08-14 UTC: public, non-fork, non-archived TypeScript repository; created_at=2026-06-05T10:38:15Z, pushed_at=2026-08-14T09:34:35Z, stars=8045, forks=444, subscribers=26, REST open_issues_count=15, MIT, Discussions enabled, pull_request_creation_policy=collaborators_only."
  - "[GH:activity] GitHub issue-search API queried 2026-08-14 UTC: open issues=7 and open PRs=8; this reconciles the REST open_issues_count=15."
  - "[GH:release] GitHub releases API queried 2026-08-14 UTC: one returned release, @cloudflare/computer@0.2.0, published 2026-08-11T16:52:44Z; npm registry checked the same day: dist-tags latest=0.2.0 and alpha=0.1.0-alpha.1."
  - "[GH:community] GitHub community-profile/contributors API queried 2026-08-14 UTC: health_percentage=87; CONTRIBUTING, MIT license, inherited Cloudflare Contributor Covenant, and PR template detected; issue template endpoint null; contributors endpoint returned 10 entries, led by aron-cf with 699 commits."
  - "[GH:advisories] https://api.github.com/repos/cloudflare/computer/security-advisories queried 2026-08-14 UTC returned []; this is a no-published-GHSA lookup result, not proof of safety."
  - "[GH:actions] GitHub Actions queried 2026-08-14 UTC: the most recent displayed PR-head CI and CodeQL runs for 292aa1447d50d5867de0eb065a212a48c2716297 completed successfully; this is workflow metadata, not an end-to-end deployment result for main."
  - "[GH:main] GitHub commits/main API and local shallow clone /opt/data/tmp/repo-wiki-cloudflare-computer-20260814 checked 2026-08-14: main=356c5ad19dd193090945cdb2825b9a900d50c3cb, committed 2026-08-12T21:44:33Z, subject Add celld example (#100)."
  - "[GH:local-scan] Local shallow-clone static scan at 356c5ad19dd193090945cdb2825b9a900d50c3cb on 2026-08-14: 600 tracked files, including 404 TypeScript and 55 Markdown files; four tracked workflows, 169 test-ish paths, and packages/dofs, packages/rpc, packages/computer, packages/computerd plus runnable examples. Static scan/code review only."
  - "[GH:ci] https://github.com/cloudflare/computer/blob/main/.github/workflows/ci.yml inspected 2026-08-14: package/example matrix runs Biome, typecheck, package tests, and extra harnesses; computer/computerd jobs install FUSE/Docker prerequisites and build the standalone binary so FUSE regressions execute in CI."
  - "[GH:contributor-guides] AGENTS.md and COLLABORATORS.md at main inspected 2026-08-14: build before test on clean checkout; fuse-native requires native toolchain/libfuse headers; real-FUSE tests require reachable /dev/fuse plus privilege, while a separate runner suite also needs Docker and the prebuilt binary; whole-workspace npm test is the documented check."
  - "[GH:readme] Root README, packages/computer/README.md, docs/README.md, and package manifests inspected at main on 2026-08-14: SQLite-backed Durable Object Workspace, container/worker-shell/worker-javascript backends, AI SDK tools, opt-in Git/Assets/Artifacts, R2 mounts, roughly 10 GB workspace limit, in-memory container-side filesystem, and preview-only/non-production disclaimer."
  - "[GH:packages] packages/computer/package.json and packages/computerd/package.json at main inspected 2026-08-14: @cloudflare/computer=0.2.0, explicit subpath exports, optional AI SDK/platformatic peers; computerd is a Node >=22 FUSE daemon distributed through the documented linux-x64 image path."
  - "[GH:runtime] docs/05_runtime_interface.md, docs/07_injected_service.md, docs/08_capnweb_interface.md, docs/12_worker_backend.md, docs/16_code_execution.md, docs/17_isolate_javascript.md, docs/18_runtime_migration.md and relevant Workspace/backend/runtime source at main inspected 2026-08-14: one routed runtime API, host SQLite authority, FUSE/sync container path, dynamic-worker paths, backend authority/egress/lifecycle limits and explicitly documented planned gaps."
  - "[GH:tools] docs/09_tool_interface.md at main inspected 2026-08-14: readonly toolsets omit write/edit/delete/exec/publish; exec is opt-in and its output must be treated as untrusted model context."
  - "[GH:performance] https://raw.githubusercontent.com/cloudflare/computer/main/docs/19_performance.md inspected 2026-08-14: official standard-2 fixture (1 vCPU, 6 GiB RAM, 12 GB disk); FUSE wins several metadata workloads against ext4 but trails it sharply on 64 MiB sequential I/O, and full sandbox-sdk npm install is 124.7 s vs 63.9 s on ext4. Benchmarks were not reproduced locally."
  - "[GH:security-policy] .github/SECURITY.md and CONTRIBUTING.md at main inspected 2026-08-14: SECURITY.md calls the project experimental with no production security guarantees and directs reports to a GitHub issue, whereas CONTRIBUTING.md says not to report security issues publicly and points to Cloudflare's disclosure process; this inconsistent reporting instruction is a documentation/security-governance defect."
  - "[Local:build-test] Local commands at /opt/data/tmp/repo-wiki-cloudflare-computer-20260814 on 2026-08-14: npm ci --ignore-scripts, npm run build, npm run typecheck, npm test, and npx biome check . all exited 0. @cloudflare/computer test configurations reported 1,013 + 6 + 5 + 23 + 4 passed tests; its 19-test cloudflare-container suite includes named ambient-egress default block, tokenized callback validation, and health/restart cases. computerd reported 139 passed and 2 skipped FUSE-oriented tests. The log also emitted a Vitest future-native-config warning and third-party MCP sourcemap warnings. No real Cloudflare deployment, Docker-container/FUSE integration, or benchmark was run."
  - "[Local:audit] npm audit --omit=dev --package-lock-only --json at main on 2026-08-14 found three indirect lockfile-wide advisories (two high, one moderate) with fixes available: fast-uri, hono, nanoid. npm explain traces at least fast-uri and hono through shipped example/agent-sandbox dependency paths rather than packages/computer direct dependencies; this is dependency metadata, not an exploit or proof that the core library runtime is exposed."
  - "[Docs:launch] https://blog.cloudflare.com/cloudflare-computer and https://developers.cloudflare.com/changelog/post/2026-08-03-cloudflare-computer inspected 2026-08-14: Cloudflare announced the project as an early preview on 2026-08-03 and positions it as a Durable Object workspace that routes agent work between isolate and container primitives."
  - "[WikiLocal:comparisons] Existing local wiki entries browser-use.md, obscura.md, and future-agi.md under /opt/data/wiki/github-repo-wiki/ai-programs/agent-infrastructure/ checked 2026-08-14 for taxonomy-level comparison only; they were not re-audited in this analysis."
---

# Cloudflare Computer

> 面向 Cloudflare Workers / Durable Objects 的 agent workspace substrate：以 SQLite-backed durable filesystem 为唯一权威状态，再按任务在 isolate shell、isolate JavaScript 与 full Linux container 之间路由执行；概念和工程密度都很高，但官方明确仍是 preview，不可作生产安全承诺。
>
> **状态**: `active` · **总分**: 3.2/5 · **推荐度**: 3/5
> **核验版本**: main `356c5ad19dd193090945cdb2825b9a900d50c3cb`；latest npm dist-tag `0.2.0`；GitHub/docs/local clone 快照 2026-08-14 [GH:main][GH:release]
> **验证边界**: 已在本地执行 workspace-wide build、typecheck、`npm test` 与 Biome check；所有已运行测试通过，2 项 FUSE-oriented 测试跳过；未部署 Cloudflare Worker/Durable Object、未启动真实 Container/FUSE、未接入 Worker Loader/R2/Artifacts、未复现性能 benchmark [Local:build-test][GH:performance]

## 一句话总结

Cloudflare Computer 不是一个终端 agent，也不是把容器 API 包一层；它是一个 **Cloudflare-native 的持久工作区与执行路由层**：Durable Object SQLite 持有文件权威状态，`workspace.runtime.exec()` 再选择适合的 shell 或 ECMAScript backend，让 agent 能在同一文件树上做轻量 isolate 工作与必要时的 Linux 工作 [GH:readme][GH:runtime]。

## 总体评价

该仓库应归入 `ai-programs/agent-infrastructure`。它的中心对象是可嵌入 agent 的 runtime substrate：文件、执行、同步、egress、Git、资产发布和观察接口，而不是面向用户的 agent application 或 workflow product [GH:readme][GH:runtime]。

设计的要点是“**state stays put, execution moves**”：容器路径将 DO 侧 SQLite 状态投影为 FUSE mount，再通过 capnweb 同步；Worker shell 和 Worker JavaScript 则直接回到同一个 Durable Object store，避免第二份文件系统与同步往返 [GH:runtime]。这比“每个 agent 永远占一个完整容器”更适合短小、状态化、可横向扩展的 Cloudflare workload；它也意味着平台绑定、权限建模和故障语义不能被抽象宣传掩盖。

证据强度高于纯 README 阅读：本轮从 current main shallow clone 执行了 workspace build、typecheck、`npm test` 与 Biome check；`@cloudflare/computer` 的多个 Vitest config 合计 1,051 个已运行测试通过，`computerd` 139 个通过、2 个因本机缺少真实 FUSE/Docker 条件而跳过 [Local:build-test]。但这仍不是 Cloudflare deployment、FUSE mount 或真实 agent workload 的验收。

官方自己给出了最重要的边界：项目在 2026-08-03 才作为 early preview 发布，README、docs 与 SECURITY.md 均强调 API 不稳定、设计会变、不能依赖生产安全保证 [Docs:launch][GH:readme][GH:security-policy]。故其势可观，其用须审。

## 推荐度：3/5

**面向已经采用 Cloudflare Workers + Durable Objects，且想为低权限 agent POC 提供持久工作目录和分级执行 backend 的工程团队**，Cloudflare Computer 值得在隔离 workspace、显式 egress policy、最小权限 credential 下试用；对需要 vendor-neutral、自托管、长期稳定 API 或高保证生产 sandbox 的团队，不应作为默认底座。

给 3/5 而非 4/5 的原因不是能力单薄，而是采用前提很重：Cloudflare binding、Durable Object、Worker Loader/compatibility flags、容器镜像和权限策略都属于产品集成；同时其 preview API 已出现显式 runtime migration，文档也反复区分 shipped code、planned behavior 与 forward-looking specification [GH:readme][GH:runtime]。

加分点是架构并非空想：官方有多组 runnable examples、每 package 的 CI matrix、current release `0.2.0`，本地 workspace build/typecheck、Biome check 与所有已运行 npm tests 也均通过（2 项环境相关 FUSE tests 跳过）[GH:release][GH:ci][Local:build-test]。不升到 4/5 是因为成熟度为 1、真实 deployment 未验、container daemon 的跨提供商 auth/进程用户等关键问题仍被官方列为 open questions [GH:runtime][GH:security-policy]。

## 优势

1. **单一权威状态而非多副本拼接**：DO SQLite 是 filesystem authority；container sync 有明确 push/pull bracket，Worker backends 则复用 host store，避免把“文件同步正确性”留给每个 agent application 重造 [GH:runtime]。
2. **执行模型分层且接口统一**：同一 `runtime.exec()` 可以路由到 real Linux container、受限 just-bash Worker shell 或有 structured input/result 的 Dynamic Worker JavaScript；backend 连接按首次使用惰性建立 [GH:readme][GH:runtime]。
3. **agent 所需表面不是只有 shell**：`fs`、AI SDK tools、可选 Git、R2 read-only mount、Artifacts、Assets 和 observer 都已拆为显式模块/入口，而不是把 host secret 直接塞给执行环境 [GH:readme][GH:packages][GH:tools]。
4. **安全默认值有可见的工程承载**：egress 示例将 `none` 设为三种 backend 的默认网络策略；Worker JavaScript 默认 `globalOutbound: null`，readonly toolset 直接去掉 mutation 与 exec surfaces [GH:runtime][GH:tools]。
5. **可运行的质量信号扎实**：本地 workspace build/typecheck、Biome check 和所有已运行测试均通过（2 项 FUSE-oriented cases 跳过）；仓库 CI 将 package 与 example 分矩阵验证，FUSE/Docker prerequisite 也在 CI 中显式安装而非假装普通 unit test 足够 [GH:ci][Local:build-test]。

## 劣势

1. **成熟度不是“0.x 小瑕疵”而是第一约束**：官方持续标为 preview、API unstable、not suitable for production；2026-08-03 才公开宣布，当前刚到 `0.2.0` [Docs:launch][GH:readme][GH:release]。
2. **Cloudflare-native 是优势也是锁定**：核心抽象依赖 Durable Objects、Workers RPC、Dynamic Worker Loader 和 Cloudflare Containers；它不是可直接搬到任意 Kubernetes/VPS 的通用 sandbox SDK [GH:readme][GH:runtime]。
3. **FUSE 不会魔法般消除 I/O 代价**：metadata-heavy 工作有优势，但官方 benchmark 中 64 MiB sequential read/copy/write 明显落后 ext4，完整 `npm install` 也约为 ext4 的两倍；文件系统更适合 agent-scale tree，不适合 full monorepo 或 bulk artifact pipeline [GH:performance][GH:readme]。
4. **路由不是授权**：backend id 只是选择器；官方明确要求 public gateway 用 host-owned allowlist，而不能接受 model-supplied backend id。命令失败/取消后的已完成 filesystem side effect 也不会自动 rollback [GH:runtime]。
5. **container 侧仍有待解决的安全/运维边界**：非 Cloudflare provider 的 `computerd` RPC endpoint 目前信任任何能到达端口者；文档还把 daemon 以 root entrypoint 运行列为未解决问题，而非已完成 hardening [GH:runtime]。
6. **治理与文档有可证瑕疵**：公开 PR 默认只接受 collaborator，限制外部 code contribution；更严重的是 `.github/SECURITY.md` 与 `CONTRIBUTING.md` 对漏洞报告渠道给出相互冲突的指引 [GH:api][GH:community][GH:security-policy]。

---

## 适合什么场景

- 已有 Durable Object agent state，需要一个 durable working directory 存放小型代码库、文档、中间文件或 agent artifacts，并让它跨 DO restart 存活 [GH:readme][GH:runtime]。
- 绝大多数任务只是文本处理、Git、文件变换或受限 JavaScript，只有少数需要 `npm`、native binary 或完整 Linux userland；此时可以把 heavy work 明确升级到 container backend [Docs:launch][GH:runtime]。
- 想给 AI SDK / `@cloudflare/think` 一类 agent 提供 `read`、`find`、`grep`、`write`、`edit`、可选 `exec` 等工作区工具，并在 host 侧保留 credential/binding authority [GH:readme][GH:tools]。
- 需要研究 durable filesystem、FUSE sync、object-capability RPC、isolated module execution、agent tool surface 与 egress policy 如何共同组成一套 runtime [GH:runtime]。
- 以 Cloudflare Container + official `computerd` image 做实验性 build/test/document-generation task，且愿意分别验证 Container、FUSE、egress 与错误恢复 [GH:readme][GH:packages]。

## 不适合什么场景

- 任何要求稳定 API、长期升级承诺、可审计生产安全保证或跨云可移植性的核心生产 runtime；官方已经明确说当前不适合 production [GH:readme][GH:security-policy]。
- 大型 monorepo、频繁大文件复制、模型 checkpoint、视频/压缩包批处理或主要由 sequential I/O 决定吞吐的作业 [GH:performance][GH:readme]。
- 把用户输入或网页 prompt 直接转成 `backend`/shell source 并公开暴露的多租户 gateway；必须先做 host-side backend allowlist、auth、egress restriction、output sanitization 与 credential scoping [GH:runtime][GH:tools]。
- 需要“failed/cancelled task 自动事务回滚”的 agent workflow；文档明确 completed filesystem/provider side effects 不会因 execution failure/cancellation 回滚 [GH:runtime]。
- 不能接受 Cloudflare account/binding/runtime 依赖，或需要离线/私有 VPC/on-premises sandbox 的团队。

## 与类似项目对比

| 项目 | 定位 | 相对本项目 |
|------|------|-----------|
| Browser Use | agent browser-control layer | Browser Use 的中心是让 agent 观察和操控真实网页/浏览器；Cloudflare Computer 的中心是工作区 state 与任务 execution，浏览器最多是其上层 agent 可调用的 workload。 |
| Obscura | lightweight browser engine / CDP/MCP substrate | Obscura 用 browser-like engine 解决网页 JS/DOM/CDP；Cloudflare Computer 不试图成为浏览器，而是为这类工具或其他 agent tasks 提供 durable filesystem 与 execution routing。 |
| Future AGI | agent evaluation / observability / gateway platform | Future AGI 聚合 evaluation、tracing、guardrail 与 provider gateway；Cloudflare Computer 处在更低层，主要处理 workspace files、runtime backend 与同步边界。 |

上述项目按 `ai-programs/agent-infrastructure` 同类范围做定位级对比，依据本地 wiki 既有条目的标题、分类和已写结论，而非本轮重新抓取外部事实；不比较未归一化的质量、速度或安全性 [WikiLocal:comparisons]。

---

## 它能做什么

评分 4/5。

- **Durable filesystem**：在 Durable Object SQLite 中提供 `workspace.fs`，支持读写、目录、删除、grep 等；Workspace 也可以完全不配置 backend，只把它用作持久文件系统 [GH:readme][GH:runtime]。
- **三个 shipped execution backend**：container-shell 使用 FUSE + `computerd` 获得 real Linux；worker-shell 运行 just-bash Dynamic Worker；worker-javascript 运行 fresh ECMAScript Dynamic Worker，后者支持 structured input/result、durable relative import 与 Workspace-backed `node:fs/promises` [GH:readme][GH:runtime]。
- **统一 execution lifecycle**：`runtime.exec/getExec/killExec/disposeExec` 为不同 backend 统一事件/结果接口；但 worker-shell 的 one-call lifecycle 与 container/worker-javascript 的 replay/reattach 能力并不完全同构 [GH:runtime]。
- **Agent-ready tools**：AI SDK toolset 覆盖 read、list、find、grep、write、edit、delete，按配置再出现 exec 和 publish；read-only mode 只暴露不可变工具 [GH:tools]。
- **可选工作区能力**：Git client、R2 read-only mounts、Cloudflare Artifacts、R2-backed asset sharing 与 observer 都是 opt-in，减少默认 package graph 与 authority [GH:readme][GH:packages][GH:runtime]。
- **按 backend 的网络策略**：官方 example 演示 `none`、`direct`、`http-gateway` 三种统一 egress mode；开启 `curl` module 不自动开放网络 [GH:runtime]。

不给 5 的原因：能力面广，但不是“任意 agent computer”标准；它没有脱离 Cloudflare runtime 的 portability，而且 preview docs 本身说明部分 specification 是未来意图、部分行为仍 planned。container 的同步、authority 和 FUSE semantics 也远比普通 `fs/promises` 多一层 failure model [GH:readme][GH:runtime]。

## 运行环境与资源占用

| 场景 | CPU | 内存 | 存储 | 说明 |
|------|-----|------|------|------|
| filesystem only | 由 Durable Object workload 决定 | 无专属 Linux container | 约 10 GB/workspace 上限 | 可不配置 execution backend；storage 与 DO 共享 [GH:readme][GH:runtime] |
| Worker shell / JavaScript | Cloudflare isolate 配额与 task complexity 决定 | 无专属 container；JavaScript backend 有 source/module/concurrency/output caps | durable Workspace storage | shell 不是完整 Linux；JS backend 默认无 ambient outbound network [GH:runtime] |
| container backend | 官方 benchmark fixture 为 1 vCPU | 官方 fixture 为 6 GiB，但非最低要求 | 官方 fixture 为 12 GB；workspace 仍约 10 GB | 真实 Linux/FUSE 适合 native tools，但 container-side VFS 在内存中 [GH:performance][GH:readme] |
| large sequential I/O | 不宜按 CPU 弥补 | chunk hashing/sync 也会占用资源 | 随 data 增长 | 64 MiB copy/read/write 明显慢于 ext4；应改用适当 object/blob pipeline [GH:performance] |

- **运行时**：TypeScript/npm monorepo；consumer 使用 Workers/Durable Objects，Worker shell/JavaScript backend 还需要 Worker Loader 与对应 compatibility configuration。`computerd` 为 Node SEA/FUSE daemon，source package声明 Node >=22 [GH:readme][GH:packages][GH:runtime]。
- **操作系统**：核心 product 不是一般本机 daemon；container backend 面向 Linux/FUSE。官方文档给出 linux-x64 `computerd` image/binary recipe，FUSE setup 与 image 用户/ownership 尚需部署者关注 [GH:packages][GH:runtime]。
- **Docker**：`docker_support: true`。官方 docs 将 public `ghcr.io/cloudflare/computer-computerd-linux-x64` image 作为 `computerd` source，并提供 canonical container Dockerfile；这不等于该库能在普通 Docker host 上脱离 Cloudflare binding 获得同样安全/运维语义 [GH:readme][GH:runtime]。
- **GPU**：不要求 GPU；若 workspace 中运行模型、browser 或 media workload，其硬件需求另计。
- **外部依赖**：Cloudflare account/Workers/Durable Objects；按 backend 选择 Worker Loader、Cloudflare Containers、R2、Artifacts、AI SDK、Git 或 egress gateway [GH:readme][GH:runtime]。

性能评分 3/5。官方 benchmark 不是只写 marketing：它明确公开标准-2 fixture、workload 与负面结果，metadata-heavy path 对 ext4 有多项优势，large sequential I/O 则有明显代价 [GH:performance]。但本轮没有复跑，也没有测 Cloudflare isolate startup/cost、真实 agent end-to-end latency 或不同 workspace size，因此不能给 4/5。

## 上手体验

评分 3/5。

正面是快速路径完整：`npm install @cloudflare/computer`、filesystem-only quick start、worker shell/JavaScript/container examples、Think/MCP/tutorial/example projects 都存在，当前 npm `latest` 指向 `0.2.0` [GH:readme][GH:release]。对已经熟悉 Durable Object 的 TypeScript developer，最小 filesystem path 可以很短。

扣分来自“能 import”和“能安全上线”之间的距离：需要正确配置 Durable Object migration、`nodejs_compat`/experimental/Worker Loader、backend identity、egress、container image、R2/Artifacts 与 host-side authorization；FUSE/native integration 还需要与本机/CI 设备条件相配。官方 AGENTS.md 专门提醒 clean checkout 先 build，real FUSE 需要权限，部分 suite 在缺少 `/dev/fuse` 或 Docker/预构建 binary 时会 skip [GH:contributor-guides][Local:build-test]。

因此 demo/POC 接近 4，跨 backend 的可托付生产 integration 目前远低于 4，综合给 3。

## 代码质量

评分 4/5。

源码结构相当清楚：`dofs` 处理 SQLite filesystem，`rpc` 处理 capnweb wire types/driver，`computerd` 处理 FUSE 与 container daemon，`computer` 提供 Workspace facade/backends/tools；`Workspace` 维护 backend registry、lazy connection、per-backend mutation serialization、read-only mount enforcement 与 optional Git/Artifacts/observer，而 runtime router 只负责选择和包装 exec handles [GH:local-scan][GH:runtime]。

质量信号也不是单纯 CI theater。本地 build/typecheck/Biome check 与所有已运行 tests 均成功；`@cloudflare/computer` 的 unit/proxy/worker/script/stub-soak configs 通过，19-test container suite 包含 ambient egress 默认阻断、tokenized callback validation 与 health/restart cases，`computerd` 报告 139 个通过和 2 个真实 FUSE-oriented skips [Local:build-test]。CI 还将 package 与 examples 单独 matrix，避免一个 test lane 掩盖另一个 typecheck failure [GH:ci]。

不给 5 的原因：项目极年轻且接口正在迁移；缺少可见 coverage threshold；本地没有执行真实 Cloudflare Container/FUSE integration；test log 也有 Vitest future-config warning 与第三方 sourcemap warning。更关键的是，文档明确承认 protocol version negotiation、connection auth、cross-provider hardening 等尚未完成，良好模块化不能自动替代长期生产验证 [GH:runtime][Local:build-test]。

## 可扩展性

评分 4/5。

扩展面具有清晰的契约边界：`WorkspaceBackend` 以 stable id + lazy `connect()` 提供 narrow backend interface，应用可注册多个 command/module backend；JavaScript backend 可在 construction 时配置 trusted modules、read/read-write authority、resource limits 和 egress；AI toolset、Git、R2 mount、Assets、Artifacts 与 observer 也都是可选择的 extension points [GH:runtime][GH:packages][GH:tools]。

这不是一个成熟“plugin marketplace”，也不是任意 backend 自动安全兼容：backend source language、sync model、lifecycle 和 authority 都不同；host 必须保有 backend allowlist，custom remote runtime 本身也要执行 egress policy [GH:runtime]。因此给 4 而非 5。

## 文档质量

评分 4/5。

文档深度明显高于普通 preview repo：根 README、每 package README、多篇主题文档、architecture diagrams、API code snippets、container/worker/MCP/think/egress/tutorial/artifacts/examples，连 FUSE benchmark 的 fixture 和负面性能都公开说明 [GH:readme][GH:performance][GH:runtime]。AGENTS.md 与 COLLABORATORS.md 还把 install traps、build-before-test、FUSE skips、CI/test contracts 写得具体 [GH:contributor-guides]。

扣一分因为官方反复提示 `docs/` 有 forward-looking 内容，不能机械视作 main 的现状；多个 docs section 也明确标记 planned/open questions。安全报告指引在 `.github/SECURITY.md` 和 CONTRIBUTING.md 之间冲突，更说明文档尚未达到“读者无需自行交叉验证”的满分状态 [GH:readme][GH:runtime][GH:security-policy]。

## 社区与成熟度

| 维度 | 评分 | 说明 |
|------|------|------|
| 社区活跃度 | 3/5 | 2026-08-14 snapshot 为 8,045 stars、444 forks、7 open issues、8 open PRs、Discussions enabled，近期 CI/CodeQL runs 也可见；但 contributors endpoint 仅返回 10 entries、699 commits 高度集中于首位 author，且 unsolicited PR 默认关闭/需 collaborator 或 allow-pr，因此不能按 vendor brand 和 stars 升到 4/5 [GH:api][GH:activity][GH:community][GH:actions] |
| 成熟度 | 1/5 | 仓库创建于 2026-06-05、公开 early preview 在 2026-08-03、latest 为 0.2.0；官方明确 API unstable、not for production，并记录 breaking preview migration。该状态正落在“预发布/接口可变”的 1/5 边界 [GH:api][Docs:launch][GH:release][GH:readme][GH:runtime] |

Stars 是可见度，CI success 是工程信号，二者都不能替代“稳定运行多年、API 很少破坏、生产 user base 可证”的成熟度证据。

## 安全与风险

评分 3/5。

**正面设计信号**：Worker JavaScript 默认不拿 ambient network 或 host environment；host bridge 固定 read/read-write authority，Workspace path confinement/restricted modules/resource caps 都有文档；readonly toolset 可以从 agent surface 直接移除 mutation/exec；egress example 以 `none` 为默认 [GH:runtime][GH:tools]。GitHub repository-advisories endpoint 本轮未返回公开 GHSA，近期 CodeQL workflow metadata 也成功 [GH:advisories][GH:actions]。

**但安全结论必须保守**：

1. **官方不提供 production security guarantee**：SECURITY.md 直接要求把部署视为 experimental。这个前提本身足以阻止任何“安全评分 4/5”的解释 [GH:security-policy]。
2. **权限升级在 host，而不在 routing 参数**：docs 明确说 backend selection is not authorization；若把 model-controlled backend id 直接传入，agent 可从低权限 shell 误升级到更大 authority 的 backend [GH:runtime]。
3. **side effect 不是事务**：execution failure/cancellation 不 rollback 已完成 filesystem/provider operations；这要求应用层把 approval、idempotency、audit 和 recovery 设计在调用边界，而不能只相信 task status [GH:runtime]。
4. **container RPC 与运行用户模型仍有未解决问题**：在 Cloudflare Container 内，owner DO 的网络边界可限制 port reachability；但通用 provider 路径目前没有 RPC handshake auth，daemon 常以 image entrypoint user（通常 root）运行的问题也仍未闭合 [GH:runtime]。
5. **security disclosure 文档互相矛盾**：`.github/SECURITY.md` 叫用户开公开 GitHub issue，CONTRIBUTING.md 却说不要公开报告并指向 Cloudflare disclosure process。这会损害真实漏洞的正确披露路径 [GH:security-policy]。
6. **依赖 hygiene 仍需修补**：lockfile-wide `npm audit --omit=dev` 有 2 high + 1 moderate indirect advisories；其中至少 fast-uri/hono 可追到 example/agent-sandbox graph，尚不能推导为 core `@cloudflare/computer` runtime exploitable，但发布这些 examples 前应升级/复核 [Local:audit]。

因此 3/5 表示“有意识的 capability/egress/readonly design 与测试，但仍是高权限 preview substrate”。最低采用线应是：readonly-first toolset、server-side backend allowlist、egress default deny、短寿命低权限 credentials、container/port private reachability、explicit approval/audit、按 release 更新依赖；任何高价值账户、内网、生产写操作都先做独立 threat model。

## 学习价值

学习价值很高。Cloudflare Computer 把 agent runtime 的关键分层写得很清楚：

- durable state 应与 compute placement 解耦；
- “fast isolate / rich container” 不必意味着两份文件状态；
- backend routing、authority、egress、mount semantics、event replay、retry 与 cancellation 都是独立 contract；
- 安全不能停留在 prompt/tool description，必须落到 read-only capability、network boundary、host-owned allowlist 和可验证的 state transition；
- performance 也没有单向答案：metadata-heavy 小文件工作和 large sequential I/O 的最优结构不同 [GH:runtime][GH:performance][GH:tools]。

从系统设计学习的角度，它尤其适合作为“agent computer”这一抽象的反例与正例同时学习：正例是状态与执行分离、backend 语义显式、测试/文档密度高；反例是 preview 期再优雅的 capability language，也不能替代 auth、container user、跨提供商 network exposure、rollback 与 lifecycle 的实际验收。知其可为，亦知其不可妄为。