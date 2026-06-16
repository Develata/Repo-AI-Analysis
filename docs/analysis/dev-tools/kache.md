---
title: "kache"
created: 2026-06-16
updated: 2026-06-16
type: repository-analysis
repo_url: "https://github.com/kunobi-ninja/kache"
category: "dev-tools"
tags: ["rust", "build-cache", "rustc-wrapper", "compiler-cache", "s3", "zero-copy", "developer-tools"]
previous_repo: ""
successor: ""
primary_language: "Rust"
license: "Apache-2.0"
stars: 171
forks: 6
last_checked: 2026-06-16
last_verified: 2026-06-16
evidence: "GitHub API + local repository scan + README/docs/CI/security files + release/advisory queries; no independent benchmark or production deployment in this run"
archived_reason: ""
docker_support: false
gpu_required: false
estimated_cpu: "1-2 cores for normal wrapper/daemon use; benchmark scenarios scale with the compiled workload"
estimated_memory: "low for wrapper/local cache metadata; benchmark or large workspace builds inherit the workload's memory demand"
estimated_storage: "cache store can range from hundreds of MB to tens of GB; documented Firefox benchmark scratch is about 50 GB"
status: active
sharing_candidate: false
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
  - "[GH:api] GitHub CLI/API queried 2026-06-16; repo=kunobi-ninja/kache, createdAt=2026-02-15T19:43:57Z, pushedAt=2026-06-16T07:36:40Z, stars=171, forks=6, watchers=4, open issues=38, open PRs=1, default branch=main, primary language=Rust, license=Apache-2.0, archived=false"
  - "[GH:issues] GitHub issue list sampled 2026-06-16; open issue titles sampled include #348 Windows GitHub runner prefetch slowness, #336 replay compiler diagnostics on hit, #335 cache-trust verifier, #332 local restore content verification, #326 cross-process GC lock, #324 key/fingerprint/content-hash hardening"
  - "[GH:releases] GitHub releases queried 2026-06-16; latest non-prerelease shown by API=v0.5.0 published 2026-06-05; release list includes prerelease v0.6.0-rc.1 published 2026-06-11; local Cargo.toml version=0.6.0-rc.1; git tags count=53"
  - "[GH:local-scan] Local clone /opt/data/tmp/repo_wiki_kache/kache at commit d2521f78f14016f249ecb354d25457803935589b inspected 2026-06-16; workspace packages kache, kache-core, kache-e2e, kache-service all version 0.6.0-rc.1; Rust 2024, rust-version=1.95; local line summary: Rust 92 files/58493 lines, total tracked text summary 202 files/65911 lines excluding .git/target/tmp"
  - "[GH:readme] README.md inspected locally 2026-06-16; describes zero-copy content-addressed Rust build cache, RUSTC_WRAPPER, BLAKE3 keys, reflink/hardlink/copy fallback, optional S3 sync, stable local/S3 cache, preview remote planner, experimental C/C++ caching, command list and benchmark caveats"
  - "[GH:docs] docs/how-it-works/architecture.mdx and docs/how-it-works/cache-key.mdx inspected locally 2026-06-16; docs describe wrapper/store/daemon flow, SQLite WAL store, content-addressed blobs, daemon RPC, key inputs, path normalization and why-miss debugging"
  - "[GH:ci] .github/workflows/ci.yml and Justfile inspected locally 2026-06-16; CI has Linux check, version consistency, Nix package, Linux/macOS/Windows e2e smoke, macOS tests, coverage threshold 35%, release workflows; recent GitHub Actions sampled 2026-06-16 with latest main run d2521f7 success"
  - "[GH:local-build] Local command `cargo test --workspace --no-run` completed successfully on 2026-06-16 after compiling test targets; tests were compiled but not executed"
  - "[GH:security] SECURITY.md inspected locally 2026-06-16; supports latest release only, private advisory/email reporting, claims hardened tar extraction, no credential logging, no shell invocation and atomic extraction"
  - "[GH:audit] .cargo/audit.toml inspected locally 2026-06-16; explicitly ignores RUSTSEC-2023-0071 rsa Marvin timing sidechannel via transitive deps with no fixed release, and RUSTSEC-2023-0089 atomic-polyfill unmaintained warning via surrealdb/geo/rstar/heapless"
  - "[GH:advisories] GitHub security advisories endpoint repos/kunobi-ninja/kache/security-advisories queried 2026-06-16; returned [] in this check"
  - "[GH:community] GitHub contributors endpoint queried 2026-06-16; 5 contributors sampled: jleni=266, emmanuelm41=32, ainhoa-a=3, DaniPopes=1, Karrq=1; CONTRIBUTING.md present; no CODE_OF_CONDUCT file reported by GitHub API"
  - "[Docs:kache-action] https://github.com/kunobi-ninja/kache-action extracted 2026-06-16; action installs kache, sets RUSTC_WRAPPER and persists cache via GitHub Actions cache by default or S3 when configured"
  - "[Docs:sccache] https://github.com/mozilla/sccache extracted 2026-06-16; sccache described as ccache-like shared compilation cache with local/remote storage, multiple compiler/language support and distributed compilation"
  - "[Docs:ccache] https://ccache.dev/ extracted 2026-06-16; ccache is a long-running C/C++ compiler cache with local/remote caching, BLAKE3, reflink/hardlink options and documented limitations"
---

# kache

> Zero-copy, content-addressed Rust build cache — 一个面向 Rust 编译产物的 `RUSTC_WRAPPER` 缓存器，重点押注 reflink/hardlink、本地去重和 S3 共享。
>
> **状态**: `active` · **总分**: 3.4/5 · **推荐度**: 3/5
> **核验版本**: local clone commit `d2521f78f14016f249ecb354d25457803935589b`；GitHub/API 快照 2026-06-16

## 一句话总结

kache 是一个很年轻但目标明确的 Rust build cache：本地 Rust 缓存和 S3 同步已经有完整形态，适合 Rust-heavy 项目试点；但 0.x/rc、远程 planner preview、C/C++ caching experimental，使它还不宜被当作保守生产默认项。

## 总体评价

kache 的核心定位是作为 `RUSTC_WRAPPER` 拦截 `rustc`/`clippy-driver` 调用，对 normalized rustc invocation、源码、依赖产物和编译环境等输入做 BLAKE3 cache key，命中时用 reflink、hardlink 或 copy 将产物恢复到 `target/`；本地 store 是 content-addressed blobs + SQLite index，daemon 负责远程检查、S3 上传和预取 [GH:readme][GH:docs]。

它与传统 `sccache` 的差别不在“也能缓存 Rust 编译”这一表层，而在更强调 Rust-specific key normalization、content-addressed local store、zero-copy restore、`why-miss` 诊断和 S3 manifest/prefetch workflow。README 明确说 local caching 和 direct S3 sync 稳定；远程 planner service 仍是 preview；C/C++ object caching 还是 experimental，并且很多复杂 invocation 会 passthrough [GH:readme]。

一句话判词：**值得作为 Rust 编译缓存新方向观察和小规模试点，但由于项目创建于 2026-02、当前主线版本仍是 0.6.0-rc.1，成熟度短板应压过 README 展示的能力。**

## 推荐度：3/5

**定位**：面向 Rust-heavy 项目、CI 时间成本明显、愿意接受 0.x 工具试点风险的开发者或团队。

推荐度给 3：如果项目大量重复 clean build、CI cache 维护成本高，kache 值得在非关键路径或单仓库 CI 中试用，尤其是希望研究 Rust artifact cache key、zero-copy restore 和 S3 shared cache 的场景。它的安装入口、`kache init`、`kache doctor`、GitHub Action 与文档都比较完整 [GH:readme][Docs:kache-action]。

不提高到 4 的原因是成熟度：仓库创建时间短，版本仍在 rc，open issues 有 38 个且近期 issue sample 包含 Windows runner prefetch slowness、diagnostics replay、cache-trust verifier、local restore verification、GC lock、key/fingerprint hardening 等议题；remote planner 和 C/C++ caching 也被项目自己标注为 preview/experimental [GH:api][GH:issues][GH:releases][GH:readme]。对 build cache 而言，false hit/under-keying/remote trust 的风险比普通 CLI 更重，采用门槛应更保守。

## 优势

1. **Rust-specific 设计明确**：围绕 `RUSTC_WRAPPER`、rustc 输入、dependency artifact hash、path normalization 和 `why-miss` 诊断设计，而非简单套用通用 C/C++ cache 模型 [GH:docs]。
2. **本地资源效率思路好**：content-addressed blob store + reflink/hardlink/copy fallback，目标是避免重复存储和重复复制 [GH:readme][GH:docs]。
3. **S3/CI 路径完整**：README 与 `kache-action` 都给出 GitHub Actions cache / S3-backed cache 的入口，适合 CI 试点 [GH:readme][Docs:kache-action]。
4. **工程验证意识强**：仓库含 e2e harness、benchmark scenarios、negative control、coverage threshold、Linux/macOS/Windows smoke paths；最近 main CI 采样为 success [GH:ci]。
5. **文档透明列出边界**：README 对 Firefox benchmark、C/C++ caching、remote planner preview 和 passthrough 范围有较诚实的 caveat，不是只写 headline speedup [GH:readme]。

## 劣势

1. **非常年轻**：GitHub 创建于 2026-02，当前 Cargo.toml 为 `0.6.0-rc.1`，release/tag 节奏很快，API 稳定性和长周期可靠性尚未证明 [GH:api][GH:releases]。
2. **cache correctness 风险天然高**：build cache 的错误不是普通失败，而可能是错误产物被复用；README 与 issue 标题也显示项目仍在修补 key、fingerprint、GC、diagnostics 等硬问题 [GH:readme][GH:api]。
3. **C/C++ 缓存仍实验性**：只覆盖 single-source `-c` object compiles，link、multi-source、response-file、PCH/modules/coverage/split-DWARF 等都 passthrough；clang-cl 还限制为 machine-local key [GH:readme]。
4. **社区和 bus factor 有限**：171 stars、5 contributors，贡献集中在核心维护者；这不否定质量，但限制了生产采用信心 [GH:api][GH:community]。
5. **远程 planner 仍 preview**：daemon 已能调用 planner，但 hosted service 和 server-side 部署模型仍在 hardening；不能把它当成成熟分布式 cache 平台 [GH:readme][GH:docs]。

---

## 适合什么场景

- Rust workspace 的本地重复构建、`cargo clean && cargo build` 后快速恢复已缓存 artifact。
- 单仓库或小团队 CI 中试点 `kunobi-ninja/kache-action@v1`，先用 GitHub Actions cache，再评估 S3 backend [Docs:kache-action]。
- 研究 Rust build cache 的 key design、path normalization、content-addressed store、reflink/hardlink 策略和 cache miss diagnostics。
- 对 remote cache 有需求，但愿意从只读/非关键 job 开始，逐步扩大到主 CI。
- 作为 `sccache`/`ccache` 之外的 Rust-specific cache 方案进行 A/B 对比。

## 不适合什么场景

- 需要“默认安全、长期稳定、无需反复 babysit”的生产构建基础设施。
- 安全/合规要求不能接受 remote build artifact trust boundary 的环境。
- C/C++ 为主要构建耗时来源、且需要成熟完整 C/C++ compiler cache 的项目；此时 ccache/sccache 的覆盖面更成熟 [Docs:sccache][Docs:ccache]。
- 需要 distributed compilation，而不只是 remote artifact cache 的场景；sccache 明确有 distributed compilation 模式，kache 的 remote planner 目前仍是 preview [Docs:sccache][GH:readme]。
- 不愿固定版本、监控 regression、保留快速回滚路径并承担持续维护成本的团队。

## 与类似项目对比

| 项目 | 定位 | 相对本项目 |
|------|------|-----------|
| sccache | ccache-like shared compilation cache，支持 Rust、C/C++、CUDA/HIP 等，多 remote backend 与 distributed compilation | sccache 更成熟、覆盖语言更多；kache 更 Rust-specific，突出 zero-copy/content-addressed store、Rust key normalization 与 S3 manifest/prefetch 路径 [Docs:sccache] |
| ccache | 长期维护的 C/C++ compiler cache，支持 GCC/Clang/MSVC、BLAKE3、remote storage、reflink/hardlink | ccache 是 C/C++ 生态老牌工具；kache 主要解决 Rust artifact cache，C/C++ 路径仍 experimental [Docs:ccache][GH:readme] |
| GitHub Actions cache / cargo cache | CI cache primitives，通常缓存 `target/` 或 registry/git cache | 原生 cache 更简单但粒度粗；kache 试图缓存编译 artifact 并解释 miss/hit，更精细但风险和复杂度更高 [GH:readme][Docs:kache-action] |
| sccache-action / mozilla-actions/sccache-action | 在 CI 中安装和配置 sccache | kache-action 更贴合 kache 的 S3 manifest/prefetch 与 PR comment workflow；生态成熟度仍弱于 sccache 方向 [Docs:kache-action][Docs:sccache] |

上述项目按 `dev-tools` 同类范围做定位级对比，未按同一 10 维度框架深审；比较仅用于说明采用边界。

## 个人主页 sharing 候选

否。理由是项目技术点有趣，但成熟度仍低、release 节奏很快、很多强价值点还处在 preview/experimental 或未独立 benchmark 复现阶段。更适合作为“Rust build cache 试验记录”或“CI cache A/B test 笔记”，而不是面向普通读者的稳定工具推荐。

---

## 它能做什么

capability 评分 4/5。

kache 当前覆盖的核心能力包括：

- 作为 `RUSTC_WRAPPER` 缓存 Rust 编译 artifact；
- local cache hit/miss/dup 记录，命中后通过 reflink/hardlink/copy restore；
- content-addressed blob store + SQLite index；
- optional daemon，负责 S3 remote checks、async uploads、prefetch；
- `kache init`、`doctor`、`monitor`、`stats`、`list`、`why-miss`、`report`、`sync`、`gc`、`clean`、`config`、`daemon` 等 CLI；
- GitHub Action 集成；
- C/C++ single-source object compile caching 的实验路径；
- remote planner service preview 与 Helm chart [GH:readme][GH:docs][Docs:kache-action]。

扣到 4 而非 5：Rust local/S3 主线功能完整，但 C/C++、planner、server-side 还不是成熟全覆盖；与 sccache/ccache 相比，语言覆盖和生态验证仍窄 [GH:readme][Docs:sccache][Docs:ccache]。

## 运行环境与资源占用

| 场景 | CPU | 内存 | 存储 | 说明 |
|------|-----|------|------|------|
| 最小本地使用 | 1-2 cores | 低 | 数百 MB 起 | wrapper/daemon 本身轻，实际编译资源由 cargo/rustc 决定 |
| Rust-heavy workspace | 2-8 cores | 随项目增长 | 数 GB 到数十 GB | cache store、target 和 dependency graph 决定实际占用 |
| 大型 benchmark | 8+ cores | 大 | 20-50 GB+ | README 的 substrate/firefox scenario 明示 tens of min 到 hours、20-50 GB scratch [GH:readme] |

- **运行时**：Rust CLI + optional daemon；daemon down 时 local cache 仍可工作，remote/prefetch 降级 [GH:readme][GH:docs]。
- **操作系统**：CI/e2e workflow 覆盖 Linux、macOS、Windows；README 也描述 APFS、btrfs、XFS-with-reflink 等平台差异 [GH:ci][GH:readme]。
- **Docker**：仓库含 service Dockerfile、docker-bake 和 Helm chart；这主要服务 remote planner/service preview，不是普通本地 wrapper 必需。本次检查未确认有官方发布的 Docker image，因此 frontmatter `docker_support` 记为 `false` [GH:local-scan][GH:readme]。
- **GPU**：不需要。
- **外部依赖**：Rust toolchain；S3 backend 需要 AWS/S3-compatible credentials；benchmark scenarios 可能需要 clang、cmake、pkg-config、protoc 等 workload-specific 工具 [GH:readme]。

performance 评分 4/5。zero-copy restore、content-addressed dedup 和 BLAKE3 key 设计在资源效率上有明确优势方向；但本轮没有复现实测 benchmark，也未验证它实际优于 sccache/ccache 等同类工具，且 README 自己承认 Firefox 端到端 speedup 受 C/C++ 未成熟路径限制，因此只能评价为“设计上资源效率较好”，不评 5 [GH:readme]。

## 上手体验

评分 4/5。

安装路径清楚：mise、cargo install、cargo-binstall 都被 README 列出；`kache init` 可以交互式或 `-y` 非交互式配置 `~/.cargo/config.toml`、安装/启动 daemon，`kache doctor` 用于验证 [GH:readme]。CI 路径也比较顺：`- uses: kunobi-ninja/kache-action@v1` 是非常低摩擦的试点入口 [Docs:kache-action]。

扣 1 分主要因为 adoption 前必须理解 `RUSTC_WRAPPER`、daemon、cache store、S3 credentials、incremental compilation disabled、remote trust boundary 等概念。对普通 Rust 初学者，它不是“装了就无脑永远更快”的工具；对需要诊断 miss 的团队，仍需要阅读 cache-key/why-miss 文档 [GH:readme][GH:docs]。

## 代码质量

评分 4/5。

本地扫描显示仓库是 Rust 2024 workspace，含 `kache`、`kache-core`、`kache-e2e`、`kache-service` 四个 workspace package；代码规模约 92 个 Rust 文件/58493 行，配有 integration tests、scenario harness、benchmark scenarios、CI workflows、Justfile、CONTRIBUTING、SECURITY 和 docs [GH:local-scan][GH:ci]。

CI 设计比较认真：Linux check、version consistency、Nix package、Linux/macOS/Windows e2e smoke、negative control、sccache fallback check、macOS test、coverage threshold 35% 等都有显式 workflow；最近 main run 采样为 success [GH:ci]。本轮本地 `cargo test --workspace --no-run` 能完成编译，但没有执行测试断言 [GH:local-build]。Cargo.toml 也显式处理 rustls provider、cross-compile、RUSTSEC 注释等 dependency/security 细节 [GH:local-scan]。

不评 5 的原因：项目仍很年轻，coverage threshold 35% 不是高覆盖；issue sample 中仍有 cache key、GC、diagnostics、Windows runner slowness 等近期 hardening 项；贡献集中度也使长期维护质量尚待观察 [GH:api][GH:issues][GH:community]。

## 可扩展性

评分 3/5。

kache 的扩展性主要体现在配置、CLI、scenario benchmark、remote service 与 S3-compatible backend，而不是传统 plugin API。用户可以通过环境变量/config、`.kache.toml` extra inputs、S3 endpoint、manifest key、scenario TOML 等方式调整行为 [GH:readme][GH:docs]。

但若要支持新的 compiler family、复杂 flag classifier、remote planner 策略或 artifact layout，基本需要改源码而不是加载插件。因此作为开发者工具可定制性尚可，作为框架式扩展平台只属中等。

## 文档质量

评分 4/5。

README 非常长而信息密度高，覆盖安装、quick start、CI、C/C++ caching、benchmarks、commands、remote cache/configuration、architecture、remote service；`docs/how-it-works/cache-key.mdx` 与 `architecture.mdx` 对 key 输入、path normalization、wrapper/store/daemon 流程解释清楚 [GH:readme][GH:docs]。虽然文档把 roadmap、benchmark caveat 与 reference 混在一起，但核心路径和风险边界均有说明，因此保留 4 而不降到 3。

优点是 caveat 诚实：C/C++ caching 的不支持范围、Firefox benchmark 的结构性瓶颈、remote planner preview 都写得很明白 [GH:readme]。不足是项目变化很快，README 同时承载产品文档、benchmark notes、roadmap 和 caveats，新用户可能需要较长时间消化；正式 API/reference 信息仍在快速演进。

## 社区与成熟度

| 维度 | 评分 | 说明 |
|------|------|------|
| 社区活跃度 | 3/5 | 171 stars、6 forks、38 open issues、1 open PR；contributors endpoint 显示 5 名贡献者，贡献集中在 jleni=266 与 emmanuelm41=32。维护活跃，但社区规模仍小 [GH:api][GH:community]。 |
| 成熟度 | 2/5 | 仓库创建于 2026-02，当前 Cargo.toml 为 0.6.0-rc.1，GitHub release list 仍有大量 rc/prerelease；README 将 remote planner 标注为 preview、C/C++ caching 标注为 experimental。作为 build cache 基础设施，成熟度不能只看 release 频率 [GH:api][GH:releases][GH:readme]。 |

## 安全与风险

评分 3/5。

安全正面信号：仓库有 SECURITY.md，支持 GitHub Security Advisories 私密报告；文档声称 tar extraction hardened against path traversal/absolute paths/symlinks，S3 credentials 不记录日志，subprocess 调用不用 shell，artifact extraction 采用 temp dir + atomic rename [GH:security]。本次 GitHub security advisories endpoint 查询返回 []，表示本次检查未发现已发布的 GitHub Security Advisory [GH:advisories]。

安全负面/限制信号：仓库存在 `.cargo/audit.toml`，显式 ignore `RUSTSEC-2023-0071`（rsa Marvin timing sidechannel，transitive deps，当前无 fixed release）和 `RUSTSEC-2023-0089`（atomic-polyfill unmaintained warning）。这不是本项目自身已发布 GHSA，但说明依赖面并非“无 advisory/无风险” [GH:audit]。

主要风险来自项目类型本身：build cache 处理的是编译产物、dependency artifacts、remote S3 blobs 和 restore path。false positive cache hit、under-keying、remote artifact poisoning、credential handling、tar extraction、GC race 都可能造成比普通 CLI 更隐蔽的后果。issue sample 和 README 也显示项目仍在围绕 key hardening、fingerprint、restore verification、remote trust 做持续 work [GH:issues][GH:readme]。

因此安全不给 4：不是因为本次 GitHub advisory 查询发现了项目自身公开严重 GHSA；相反，本次只确认 GitHub Security Advisory endpoint 返回空列表。扣分来自依赖 audit ignore 项存在、攻击面和正确性风险高、项目年龄短、远程共享 cache 的信任边界需要使用者额外治理。

## 学习价值

学习价值较高。kache 是研究 Rust 构建缓存的好样本：它把 cache key correctness、path normalization、artifact hashing、SQLite WAL 并发、content-addressed blob store、reflink/hardlink restore、daemon/IPC、S3 remote sync、CI e2e negative control 等工程问题集中在一个较小但真实的 repo 中 [GH:docs][GH:ci]。

即使不立刻采用，它也值得作为“怎样设计 build cache 才不容易错”的案例阅读。尤其适合对比 sccache/ccache：前者展示成熟通用缓存器，kache 展示 Rust-specific path 的新尝试；两者优劣之辨，正在“广覆盖但通用”与“窄领域但深入”之间。
