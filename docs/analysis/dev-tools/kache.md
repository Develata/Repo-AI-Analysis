---
title: "kache"
created: 2026-06-16
updated: 2026-07-25
type: repository-analysis
repo_url: "https://github.com/kunobi-ninja/kache"
category: "dev-tools"
tags: ["rust", "build-cache", "rustc-wrapper", "compiler-cache", "s3", "zero-copy", "developer-tools"]
previous_repo: ""
successor: ""
primary_language: "Rust"
license: "Apache-2.0"
stars: 431
forks: 21
last_checked: 2026-07-25
last_verified: 2026-07-25
evidence: "GitHub authenticated API + current README/docs/releases/CI/security files + shallow local scan + primary-package compile-only check; no test execution, independent benchmark, or production deployment"
archived_reason: ""
docker_support: false
gpu_required: false
estimated_cpu: "1-2 cores for normal wrapper/daemon use; benchmark scenarios scale with the compiled workload"
estimated_memory: "low for wrapper/local cache metadata; benchmark or large workspace builds inherit the workload's memory demand"
estimated_storage: "cache store can range from hundreds of MB to tens of GB; documented Firefox benchmark scratch is about 50 GB"
status: active
ratings:
  capability: 4
  usability: 4
  performance: 4
  code_quality: 4
  documentation: 4
  community: 3
  maturity: 2
  extensibility: 3
  security: 3
  recommendation: 3
overall_score: 3.4
sources:
  - "[GH] https://github.com/kunobi-ninja/kache"
  - "[GH:api] GitHub REST/search APIs queried 2026-07-25; repo=kunobi-ninja/kache, created_at=2026-02-15T19:43:57Z, pushed_at=2026-07-24T08:25:48Z, stars=431, forks=21, subscribers=4, REST open_issues_count=55, separate search open issues=50 and open PRs=5, default branch=main, primary language=Rust, license=Apache-2.0, archived=false, disabled=false"
  - "[GH:issues] GitHub open issues sampled 2026-07-25; titles/URLs include #559 thin local-only wrapper/process weight, #552 warm-hit overhead tracking, #586 OpenDAL storage support, #565 daemon-owned local key/lookup path, #582 manifest overwrite/build-order loss, #580 unsupported --include causing passthrough, #564 remote negative-result TTL"
  - "[GH:releases] GitHub releases API queried 2026-07-25; latest stable v0.11.0 published 2026-07-21; sampled progression includes v0.8.0 Windows ReFS/self-healing, v0.9.0 read-only remote mode and supply-chain hardening, v0.10.0 download-dedup fixes, v0.11.0 broader compiler/filesystem coverage"
  - "[GH:release-0.11] https://github.com/kunobi-ninja/kache/releases/tag/v0.11.0 inspected via GitHub API 2026-07-25; notes describe target-prefixed cross-compilers and cargo-zigbuild recognition, libc-aware Linux keys, CUDA refusal instead of unsafe caching, hardlink fallback, background GC, RemoteBackend extraction, and key/cross-compilation fixes"
  - "[GH:local-scan] Local shallow clone /opt/data/tmp/github-repo-wiki-freshness-audit/repos/kache at commit 2ec52a4df1425e9a0c15c30141c4e7b65f77e049 inspected 2026-07-25; git ls-files=401, markdown/rst/adoc files=12, test/spec/bench-ish paths=50, GitHub workflows=5; Cargo.toml version=0.11.0, Rust edition=2024, rust-version=1.95"
  - "[GH:readme] README.md at commit 2ec52a4d inspected 2026-07-25; describes working local Rust and local C/C++ object caching, direct S3 sync for Rust artifacts, conservative passthrough limits, remote planner preview, package-manager installs, command surface, benchmark caveats and service/chart preview"
  - "[GH:ci] .github/workflows/ci.yml inspected 2026-07-25; CI includes Linux verification, version consistency, dependency audit, Nix packaging, Linux/macOS/Windows E2E, negative control, platform tests/clippy and an 88% line-coverage gate; latest sampled main CI run for 2ec52a4d succeeded, while a separate scheduled Bench run on 0d64702c failed"
  - "[GH:local-build] Local `CARGO_BUILD_JOBS=2 cargo test -p kache --no-run` completed successfully on 2026-07-25; primary-package unit/integration test targets compiled but tests were not executed. A preceding `cargo test --workspace --no-run` attempt was SIGKILLed while compiling surrealdb-core in this constrained environment and is not treated as a project failure or workspace-pass result"
  - "[GH:security] SECURITY.md inspected 2026-07-25; only latest release is supported, private GitHub advisory/email reporting is documented, and the file states hardened tar extraction, credential-log avoidance, no shell invocation and atomic extraction"
  - "[GH:audit] deny.toml and CI inspected 2026-07-25; cargo-deny runs per workspace member, yanked dependencies and wildcard registry dependencies are denied, and one explicit advisory ignore remains: RUSTSEC-2023-0071 for rsa 0.9.x via service dependencies with no fixed release; SurrealDB BUSL-1.1 exceptions are scoped to named service crates"
  - "[GH:advisories] GitHub security advisories endpoint repos/kunobi-ninja/kache/security-advisories queried 2026-07-25; returned [] in this check"
  - "[GH:community] Contributors/community endpoints queried 2026-07-25; contributors page returned 15 entries, led by jleni=338 and emmanuelm41=99; community health=75%, CONTRIBUTING and PR template present, Code of Conduct and issue template absent"
  - "[Docs:kache-action] https://github.com/kunobi-ninja/kache-action fetched 2026-07-25; action installs kache, sets RUSTC_WRAPPER, uses GitHub Actions cache by default or S3 when configured, verifies release checksums, and documents Linux/macOS/Windows x64/arm64 runners"
  - "[Docs:sccache] https://github.com/mozilla/sccache fetched 2026-07-25; sccache describes local/multi-level remote storage, Rust/C/C++/CUDA/HIP support and optional authenticated, encrypted, sandboxed distributed compilation"
  - "[Docs:ccache] https://ccache.dev/ fetched 2026-07-25; ccache 4.13.6 describes mature C/C++-family compiler caching, local/remote multi-level caches, BLAKE3, reflink/hardlink options and explicit correctness caveats"
---

# kache

> Zero-copy, content-addressed build cache — 一个以 Rust 为主、已扩展到本地 C/C++ object compile 的编译缓存器，重点押注正确的 cache key、reflink/hardlink、内容去重与 S3 共享。
>
> **状态**: `active` · **总分**: 3.4/5 · **推荐度**: 3/5
> **核验版本**: `v0.11.0`；local clone commit `2ec52a4df1425e9a0c15c30141c4e7b65f77e049`；GitHub/API 快照 2026-07-25

## 一句话总结

kache 是一个进展很快、工程验证意识强的 Rust/C/C++ build cache；适合 Rust-heavy 项目和愿意固定版本、做 A/B 验证的团队试点，但项目只有数月历史、仍处 0.x，远程 planner 也仍是 preview。

## 总体评价

kache 作为 `RUSTC_WRAPPER` 拦截 Rust 编译，同时可作为 `cc` / `c++` wrapper 缓存单源 C/C++ object compile。它对 normalized compiler inputs 做 BLAKE3 key，命中时按文件系统能力使用 reflink、hardlink 或 copy 恢复；本地 store 是 content-addressed blobs + SQLite index，daemon 处理 S3 检查、异步上传与 prefetch [GH:readme]。

与 2026-06 的 0.6.0-rc.1 快照相比，变化已经具有分析意义：v0.8 增加 Windows ReFS block cloning 与 index self-healing，v0.9 增加 remote read-only consumer mode 和 supply-chain hardening，v0.10 修复并发下载去重，v0.11 扩大 cross-compiler/zigcc 与非 reflink 文件系统覆盖，并补 libc-aware keys、CUDA refusal 和多项 key correctness 修复 [GH:releases][GH:release-0.11]。C/C++ 路径现在由 README 表述为 working today，而非简单的 experimental headline；但它仍是 local-only、只缓存受支持的单源 object compile，未分类形态会保守 passthrough [GH:readme]。

一句话判词：**能力增长是真实的，但版本号跃迁与修复密度同时说明系统仍在快速硬化；对 build cache 这种会复用编译产物的基础设施，成熟度应继续从严。**

## 推荐度：3/5

**定位**：面向 Rust-heavy 项目、CI 编译成本明显、愿意固定版本并验证 hit correctness/rollback 的开发者或团队。

推荐度维持 3。kache 已有 `kache init`、`doctor`、monitor/report、GitHub Action、S3、跨平台 E2E 与多种包管理器入口，试点摩擦比一个月前更低 [GH:readme][GH:ci][Docs:kache-action]。如果团队大量重复 clean build，或希望研究 Rust artifact key、跨 worktree 复用和 zero-copy restore，它值得进入候选集。

不提高到 4 的原因不是功能不足，而是风险与时间：仓库创建于 2026-02，当前仍为 0.11.0；remote planner 明示 preview，C/C++ remote sharing 尚未提供；50 个 open issues 中仍有 warm-hit overhead、wrapper process weight、manifest overwrite、S3 negative-result TTL 和 flag passthrough 等基础问题 [GH:api][GH:issues][GH:readme]。采用时应先在非关键 CI job 中记录 hit/miss、错误回退和磁盘行为，再决定是否扩大。

## 优势

1. **Rust 主线与 C/C++ 本地路径都已成形**：Rust local/S3、C/C++ local object cache、保守 passthrough 和跨平台 wrapper 入口有明确边界 [GH:readme]。
2. **cache correctness 被当作一等问题**：v0.11 对 libc、CUDA、多种 wrapper/cross-compiler、target/workspace roots 与 key locking 做专门修复，而不是只追求 hit rate [GH:release-0.11]。
3. **本地资源效率思路清楚**：content-addressed dedup + reflink/hardlink/copy fallback，Windows ReFS 与非 reflink 文件系统也有专门路径 [GH:readme][GH:releases]。
4. **CI 与可证伪测试较强**：平台 E2E、negative control、dependency audit、coverage gate 和当前成功 main CI 都是正面工程信号 [GH:ci]。
5. **安装与 CI 分发已显著完善**：mise、Cargo、Homebrew、APT、winget、Scoop、Chocolatey、AUR 与 `kache-action@v1` 降低试点门槛 [GH:readme][Docs:kache-action]。

## 劣势

1. **项目仍非常年轻且版本变化快**：五个月左右从早期 rc 演进到 0.11.0，长期兼容与生产稳定性没有时间证明 [GH:api][GH:releases]。
2. **cache correctness 的失败代价高**：false hit、under-keying、remote artifact trust 或恢复竞态可能生成“看似成功”的错误产物；近期 release 仍持续修 key correctness [GH:release-0.11]。
3. **C/C++ 覆盖仍有限**：local-only；link、multi-source、response file、PCH/modules、coverage、split-DWARF 等会 passthrough [GH:readme]。
4. **远程产品面尚未成熟**：S3 direct sync 可用，但 hosted planner/service、部署/auth/HA 仍被 README 标成 preview/soon [GH:readme]。
5. **社区规模仍小**：贡献者已从早期少数人扩到 15 个，但提交仍高度集中在两位核心维护者 [GH:community]。

---

## 适合什么场景

- Rust workspace 的本地重复构建与 clean-build artifact 恢复。
- 在非关键 GitHub Actions job 中试点 `kunobi-ninja/kache-action@v1`，先用 GHA cache，再按需要评估 S3 [Docs:kache-action]。
- 需要 remote read-only consumer 的 fork/PR CI，或希望避免让低权限 job 上传 cache 的场景 [GH:releases]。
- C/C++ 单源 object compile 的本地缓存实验，且能接受不支持形态自动 passthrough。
- 研究 compiler cache key、path normalization、content-addressed store、zero-copy restore、diagnostics 与 falsifiable E2E。

## 不适合什么场景

- 需要长期稳定、低变更、无持续 babysitting 的生产构建基础设施。
- 无法接受 remote artifact trust boundary，或没有 cache purge/rollback/固定版本策略的环境。
- C/C++ 为主且需要成熟 remote cache、response files、完整 compiler family 或 distributed compilation；sccache/ccache 的覆盖更成熟 [Docs:sccache][Docs:ccache]。
- 想把 preview planner/service 当成成熟多租户远程 cache 平台的团队。
- 不愿监控命中正确性、passthrough 原因、磁盘增长和 benchmark regression 的用户。

## 与类似项目对比

| 项目 | 定位 | 相对本项目 |
|------|------|-----------|
| sccache | 多语言 shared compilation cache，可使用多级 remote storage 和 distributed compilation | sccache 语言/backend/分布式覆盖更成熟；kache 更强调 Rust-specific normalization、content-addressed local store、zero-copy restore 与 `why-miss`/trace 可观测性 [Docs:sccache] |
| ccache | 长期维护的 C/C++ compiler cache，支持 direct/depend mode、本地与多级 remote cache | ccache 是 C/C++ 老牌方案；kache 的 Rust 主线更强，但 C/C++ 仍只覆盖保守的本地 object compile 子集 [Docs:ccache][GH:readme] |
| GitHub Actions cache / cargo cache | 对 `target/`、registry 或 git cache 做目录级持久化 | 原生 cache 更简单、粒度粗；kache 做 compiler-artifact key 与诊断，潜在复用更精细，但正确性与运维复杂度更高 [Docs:kache-action] |
| sccache-action / kache-action | 在 CI 中安装 compiler cache 并持久化状态 | kache-action 对 kache 的 manifest/shard/S3/report workflow 更贴合；成熟生态与广泛验证仍偏向 sccache [Docs:kache-action][Docs:sccache] |

上述项目按 `dev-tools` 同类范围做定位级对比，未按同一 10 维度框架深审；比较仅用于说明采用边界。

---

## 它能做什么

capability 评分 4/5。

kache 当前覆盖：

- Rust `RUSTC_WRAPPER` artifact cache，本地 content-addressed store 与 S3 sharing；
- 本地 C/C++ single-source object compile cache，识别 gcc/clang/clang-cl、versioned 和 target-prefixed compiler、cargo-zigbuild wrapper；
- reflink、hardlink、copy fallback，含 Windows ReFS block cloning；
- daemon remote checks/uploads/prefetch，以及 remote read-only consumer mode；
- `init`、`doctor`、`monitor`、`stats`、`list`、`why-miss`、`report`、`sync`、`gc`、`clean`、`config`、`daemon` 等 CLI；
- GitHub Action、S3-compatible backend、build manifest/shards 和多种包管理器安装；
- scenario/E2E/Firefox/Substrate/LLVM benchmark harness；
- preview remote planner service 与 Helm chart [GH:readme][GH:releases][Docs:kache-action]。

不给 5：C/C++ remote sharing、link/multi-source/response-file 等形态未覆盖，planner/service 仍 preview，也没有本轮独立 benchmark 或生产验证。

## 运行环境与资源占用

| 场景 | CPU | 内存 | 存储 | 说明 |
|------|-----|------|------|------|
| 最小本地使用 | 1-2 cores | 低 | 数百 MB 起 | wrapper/daemon 本身较轻，编译资源主要由 workload 决定 |
| Rust-heavy workspace | 2-8 cores | 随项目增长 | 数 GB 到数十 GB | cache store、`target/` 与 dependency graph 决定实际占用 |
| 大型 benchmark | 8+ cores | 高 | 20-50 GB+ | README 的 Substrate/Firefox scenario 明示大 scratch 与长运行时间 [GH:readme] |

- **运行时**：Rust CLI + optional daemon；daemon 不运行时 local cache 仍工作，remote/prefetch 降级 [GH:readme]。
- **操作系统**：CI/E2E 明确覆盖 Linux、macOS、Windows；不同文件系统决定 reflink/hardlink/copy 路径 [GH:ci][GH:readme]。
- **Docker**：仓库有 remote service image/chart 路径，但它服务 preview planner，不是普通 wrapper 的官方用户-facing 容器分发；因此 `docker_support: false`。
- **GPU**：不需要。
- **外部依赖**：Rust toolchain；S3 路径需要 AWS/S3-compatible credentials；大型 scenario 需要 workload-specific 编译工具 [GH:readme]。

performance 评分 4/5。zero-copy restore、content-addressed dedup、read-only remote mode 与 v0.10 并发下载去重都指向合理资源效率；但本轮未复现项目 benchmark，且 open issues 仍跟踪 warm-hit process/pre-pass overhead，因此不能评 5 [GH:issues][GH:releases]。

## 上手体验

评分 4/5。

安装入口已经很完整：README 提供 mise、Cargo、Homebrew、APT、winget、Scoop、Chocolatey、AUR；`kache init` 支持交互和 `-y`，`doctor` 可检查配置，GitHub Action 一行即可试点 [GH:readme][Docs:kache-action]。

扣 1 分是因为正确采用仍需理解 `RUSTC_WRAPPER`、daemon、S3 credentials、local/remote trust、incremental compilation、C/C++ passthrough 和版本固定。它比一个月前更易安装，不等于可以无条件替换成熟 build cache。

## 代码质量

评分 4/5。

当前 shallow scan 是 Rust 2024 workspace，401 个 tracked files、50 个 test/spec/bench-ish paths、5 个 workflows；CI 中有 dependency audit、88% line-coverage gate、跨平台 E2E、negative control、version consistency 与 platform tests [GH:local-scan][GH:ci]。本轮 `cargo test -p kache --no-run` 成功编译 primary package 的测试 targets，但没有执行测试；完整 workspace compile-only 尝试在本地编译 `surrealdb-core` 时被 SIGKILL，故不能表述为 workspace pass [GH:local-build]。

不给 5：项目仍快速变化，最新 issue 继续跟踪 wrapper overhead、manifest correctness、remote request amplification 与 compiler flag coverage；CI/coverage 是强信号，但不替代长期生产反馈 [GH:issues]。

## 可扩展性

评分 3/5。

可扩展面主要是配置、CLI、scenario harness、S3-compatible storage 和 remote transport abstraction。v0.11 抽出了 `RemoteBackend` trait，为 filesystem 等 backend 留出结构性入口；`.kache.toml`、环境变量、manifest/shard 和 scenario TOML 也提供可配置面 [GH:release-0.11][GH:readme]。

但它不是 plugin platform。新 compiler family、复杂 flag classifier、artifact layout、远程 planner policy 仍多半需要修改源码；因此是“可二次开发”，不是“用户无 fork 扩展”。

## 文档质量

评分 4/5。

README 覆盖安装、quick start、CI、C/C++ scope、benchmark methodology、commands、remote cache/config、架构和 service preview；并且明确列出 passthrough、C/C++ local-only、planner preview 与 benchmark caveat [GH:readme]。这种边界透明度比单纯展示 hit-rate headline 更重要。

不足是项目变化极快，README 同时承担 product page、reference、benchmark guide 与 roadmap；用户仍需沿 docs 查 key/config/sync 细节，且 release 之间的行为变化需要持续跟踪。

## 社区与成熟度

| 维度 | 评分 | 说明 |
|------|------|------|
| 社区活跃度 | 3/5 | 431 stars、21 forks、50 open issues、5 open PRs；contributors endpoint 返回 15 个条目，但贡献仍集中在 jleni 与 emmanuelm41。活跃且正在扩展，规模仍有限 [GH:api][GH:community]。 |
| 成熟度 | 2/5 | 仓库创建于 2026-02，仍为 0.x，并在一个月内从 0.6 rc 快速推进到 0.11；remote planner/service 仍 preview，release 也持续修 key correctness。局部能力已可试点，不等于基础设施已获得长期稳定性 [GH:api][GH:releases][GH:readme]。 |

## 安全与风险

评分 3/5。

正面信号：SECURITY.md 有私密报告路径和响应目标；CI 按 workspace member 运行 cargo-deny；v0.9 开始 immutable GitHub release、SHA-pinned Actions 与 supply-chain hardening；v0.11 遇到 CUDA key 不可靠时选择拒绝缓存，而非冒险命中 [GH:security][GH:audit][GH:releases][GH:release-0.11]。GitHub repository advisories endpoint 本次返回 `[]`，只表示本次未查到已发布的项目 GHSA [GH:advisories]。

限制信号：`deny.toml` 仍显式 ignore `RUSTSEC-2023-0071`，原因是 service 路径的 rsa 0.9.x transitive dependency 尚无 fixed release；planner service 还引入 SurrealDB BUSL-1.1 的 scoped license/trust boundary [GH:audit]。这不是 kache 自身公开 GHSA，也不能被“endpoint 为空”抹去。

更根本的风险来自 build cache 类型：key under-modeling、remote artifact poisoning、credential handling、archive extraction、GC/download race 都可能影响构建可信度。安全给 3，表示项目已有认真 hardening，但年龄、远程信任面和仍在修正的 key/transport 边界不足以支持 4。

## 学习价值

kache 很适合研究“compiler cache 为什么难”：cache key 必须建模哪些输入、怎样在错误命中与保守 passthrough 之间取舍、如何跨 path/worktree 归一化、如何用 content-addressed store 与 reflink/hardlink 降低复制、怎样让 E2E 具有 negative control，以及 remote cache 如何引入供应链与凭据边界 [GH:ci][GH:release-0.11]。

即使不立刻采用，它也值得与 sccache/ccache 对照阅读：成熟通用方案展示长期兼容面，kache 展示 Rust-specific 深挖和快速实验。其可贵处不只在“更快”，更在于把 miss、passthrough、key correctness 和 benchmark 可证伪性摆到台面上。
