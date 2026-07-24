---
title: "turbovec"
created: 2026-06-10
updated: 2026-07-24
type: repository-analysis
repo_url: "https://github.com/RyanCodrai/turbovec"
category: "programming/data/vector-search"
tags: ["vector-search", "ann", "quantization", "rust", "python", "rag", "simd"]
previous_repo: ""
successor: ""
primary_language: "Python/Rust"
license: "MIT"
stars: 13833
forks: 1235
last_checked: 2026-07-24
last_verified: 2026-07-24
evidence: "current GitHub/PyPI/crates.io metadata + release/README/security/governance review + fresh local source scan; retains 2026-06 installed-wheel smoke evidence, no current independent benchmark rerun"
archived_reason: ""
docker_support: false
gpu_required: false
estimated_cpu: "CPU-only; SIMD benefits from AVX2/AVX-512BW on x86_64 or NEON on ARM; scalar fallback exists but may be less attractive"
estimated_memory: "index storage roughly depends on bit_width, dimension, vector count, id map, and cached search layout; README claims 10M float32 corpus 31GB -> turbovec 4GB"
estimated_storage: "small library package; persisted .tv/.tvim index size grows with compressed vectors and optional id mapping"
status: active
ratings:
  capability: 4
  usability: 3
  performance: 3
  code_quality: 3
  documentation: 3
  community: 3
  maturity: 1
  extensibility: 3
  security: 2
  recommendation: 2
overall_score: 2.7
sources:
  - "[GH:repo] https://api.github.com/repos/RyanCodrai/turbovec checked 2026-06-10: stars=10625, forks=909, subscribers=47, created_at=2026-03-26, pushed_at=2026-06-09, open_issues_count=8 (= open issues + PRs in REST), topics include ann/faiss/quantization/rag/rust/simd/vector-search, license=MIT, has_discussions=false."
  - "[GH:readme] https://github.com/RyanCodrai/turbovec README checked via local clone fcc1eb8e06c52764907b677128845995309219e0 on 2026-06-10; claims TurboQuant-based Rust vector index with Python bindings, says it is built on Google Research's TurboQuant algorithm, no train phase, 2-4 bit compression, NEON/AVX-512BW kernels, search-time filters, Python/Rust APIs, framework integrations, and benchmark tables."
  - "[GH:local-scan] Local shallow clone /opt/data/tmp/repo_wiki_turbovec/repo at commit fcc1eb8e06c52764907b677128845995309219e0 dated 2026-06-09; root files include README.md, CHANGELOG.md, CONTRIBUTING.md, Cargo.toml/Cargo.lock, LICENSE, docs/, benchmarks/, examples/, turbovec/, turbovec-python/; no SECURITY.md found by local filename search; local counted files include 3 GitHub workflows, docs=14, benchmarks=48, tests/test-named files=75; turbovec/Cargo.toml dependencies include ndarray, rayon, ordered-float, rand, rand_chacha, rand_distr, statrs, faer."
  - "[GH:ci] https://github.com/RyanCodrai/turbovec/blob/main/.github/workflows/ci.yml checked 2026-06-10: Rust and Python jobs run on ubuntu-latest, macos-14, windows-latest; Linux installs libopenblas-dev/pkg-config; Rust runs cargo test -p turbovec --release and downstream smoke; Python builds wheel with maturin, installs integration extras, runs pytest turbovec-python/tests/ -v."
  - "[GH:docs] https://github.com/RyanCodrai/turbovec/blob/main/docs/api.md checked via local clone 2026-06-10: documents TurboQuantIndex, IdMapIndex, filtering, .tv/.tvim formats, output-shape semantics, stable-id use cases."
  - "[GH:changelog] https://github.com/RyanCodrai/turbovec/blob/main/CHANGELOG.md checked via local clone 2026-06-10: 0.7.1/0.8.1 on 2026-06-09; 0.7.0/0.8.0 on 2026-05-30; recent bug-fix/audit releases mention duplicate-id orphaning, upsert data deletion, macOS source build, input validation, scalar fallback, and integration fixes."
  - "[GH:community] GitHub community profile API checked 2026-06-10: health_percentage=71; README, LICENSE, CONTRIBUTING, PR template present; no CODE_OF_CONDUCT or issue template reported. Contributors API first page count=4; top contributor RyanCodrai=147 commits, other listed contributors=1 each."
  - "[GH:issues] GitHub issues/pulls API checked 2026-06-10: open issues separated from PRs=8, open PRs=0; sampled open issues include #106 x86_64 scalar fallback incorrect results, #105 security fixes for integer overflow on .tv load + Python NaN query validation, #104 agno duplicate doc_ids orphan vectors, #85 Node.js binding proposal."
  - "[GH:advisories] https://api.github.com/repos/RyanCodrai/turbovec/security-advisories checked 2026-06-10 returned 0 published repository advisories; GitHub Security Advisories page also states no published advisories."
  - "[PyPI] https://pypi.org/pypi/turbovec/json checked 2026-06-10: version=0.7.1, requires_python=>=3.9, license=MIT, Development Status classifier=3 - Alpha, OS classifiers include macOS and POSIX/Linux, Python classifiers include 3.9-3.14, releases_count=17."
  - "[GH:releases] https://api.github.com/repos/RyanCodrai/turbovec/releases checked 2026-06-10 returned 0 GitHub release objects; versions are tracked through PyPI/crates.io and CHANGELOG rather than GitHub Releases in this snapshot."
  - "[crates.io] https://crates.io/api/v1/crates/turbovec checked 2026-06-10: newest_version=0.8.1, versions_count=12, downloads=2901, recent_downloads=2901, created_at=2026-04-13, updated_at=2026-06-09; crate page reports minimum Rust version 1.70 and 3.0K SLoC for v0.8.0 in extractor snapshot."
  - "[arXiv] https://arxiv.org/abs/2504.19874 checked 2026-06-10: TurboQuant: Online Vector Quantization with Near-optimal Distortion Rate; subjects cs.LG/cs.AI/cs.DB/cs.DS; 25 pages; DOI 10.48550/arXiv.2504.19874."
  - "[Local:verify] Local verification on 2026-06-10: cargo check -p turbovec --all-targets PASS with two warnings (unused n_byte_groups, dead avx2_block_epilogue); cargo test -p turbovec --lib --tests failed at link because local system lacks -lopenblas, while CI installs libopenblas-dev on Linux; installed PyPI wheel turbovec==0.7.1 with uv and smoke-tested TurboQuantIndex search (2,5) and IdMapIndex allowlist search (2,3)."
  - "[GH:comparisons] GitHub API checked 2026-06-10 for positioning only: facebookresearch/faiss stars=40254 license=MIT language=C++; qdrant/qdrant stars=32002 license=Apache-2.0 language=Rust; milvus-io/milvus stars=44718 license=Apache-2.0 language=Go; lancedb/lancedb stars=10566 license=Apache-2.0."
  - "[GH:current] GitHub GraphQL/API queried 2026-07-24: repository exists at RyanCodrai/turbovec, active/non-disabled, default_branch=main, primary_language=Python, license=MIT, stars=13833, forks=1235, open issues=66, open PRs=7; default-branch head=1e7200cfd8f26c92ce2855652db64bc7f85bc039 committed 2026-06-10, while repository pushed_at=2026-07-23 reflects activity on any ref."
  - "[GH:release-current] GitHub releases remained empty in the 2026-07-24 check; PyPI JSON reported turbovec=0.8.0 uploaded 2026-06-10 with Python >=3.9, and crates.io reported newest_version=0.9.0 updated 2026-06-10. The repository CHANGELOG describes these as a security-audit release."
  - "[GH:issues-current] Open-issue/PR APIs checked 2026-07-24: 66 open issues and 7 open PRs. Sampled issues include #121 'Python bindings never release the GIL', #137 x86-64-v3 wheels defeating scalar fallback and risking SIGILL on pre-AVX2 CPUs, #160 understated integration dependency floors, #163 release-process test gaps, and #169 persisted data reappearing after Agno drop(); sampled PRs #170-#177 propose documentation, integration, I/O, input-validation and core hardening fixes. https://github.com/RyanCodrai/turbovec/issues/121 https://github.com/RyanCodrai/turbovec/issues/137 https://github.com/RyanCodrai/turbovec/issues/160 https://github.com/RyanCodrai/turbovec/issues/163 https://github.com/RyanCodrai/turbovec/issues/169"
  - "[GH:local-scan-current] Fresh shallow clone /opt/data/tmp/github-repo-wiki-freshness-audit/clones/turbovec at 1e7200cfd8f26c92ce2855652db64bc7f85bc039 inspected 2026-07-24: tracked_files=128, workflows=3, conservative path-based test/spec-ish count=23; README, CHANGELOG, CONTRIBUTING, SECURITY.md, LICENSE, Cargo workspace and Python/Rust package manifests present. No tests or benchmark were rerun in this freshness revision."
  - "[GH:advisories-current] https://api.github.com/repos/RyanCodrai/turbovec/security-advisories checked 2026-07-24 returned []; this means no published repository advisory was found in this check, not that the project or its binary/file-loading boundary is safe."
---

# turbovec

> TurboQuant-based compressed vector index：Rust core + Python bindings，主打本地 RAG/embedding search 的 2–4 bit quantization、低内存与 SIMD search。
>
> **状态**: `active` · **总分**: 2.7/5 · **推荐度**: 2/5

## 一句话总结

turbovec 仍是值得研究的 compressed vector index，但截至 2026-07-24 的 bug/backlog 信号使它更适合可重建数据上的实验，而非默认生产依赖。

## 总体评价

turbovec 的吸引力仍很明确：它不是完整向量数据库，而是一个小而锋利的 compressed vector index。项目 README 自述其基于 Google Research 的 TurboQuant 算法，提供 Rust crate 与 Python bindings，支持 2–4 bit compression、无训练 ingest、SIMD search、filtered search、持久化，以及 LangChain/LlamaIndex/Haystack/Agno 等框架替换层 [GH:readme][GH:docs]；本轮没有独立验证实现与论文的一致性。

但风险信号已明显变差：默认分支自 2026-06-10 的 0.8.0/0.9.0 security-audit release 后没有新提交，而 open issues 已从上次快照的 8 增至 66，并有 7 个尚未合并的 hardening PR。样本涉及 Python GIL、pre-AVX2 wheel 的 SIGILL、integration dependency floors、持久化删除语义和 release-process test gaps [GH:current][GH:release-current][GH:issues-current]。这不是普通 star 漂移，而是会改变采用边界的 correctness、portability 与维护吞吐问题。

结论：如果目标是研究 TurboQuant、验证低比特向量压缩，或在可重建索引上做隔离实验，它仍有学习价值；如果目标是生产 RAG、跨 CPU 分发 wheel、稳定 framework integration 或不可丢失的数据链路，应等待 backlog 被合并并重新做版本级回归，或优先选择成熟系统。

## 推荐度：2/5

适合 Rust/Python 性能库研究者、TurboQuant 学习者和能随时重建索引的隔离实验；不建议把当前版本直接放进核心生产检索链路。

给 2 的原因不是算法方向失去价值，而是当前 66 个 open issues 与 7 个 hardening PR 中已有多项直接触及 correctness、platform compatibility、data lifecycle 和 packaging。2026-06 的 wheel smoke test 只能证明当时的窄路径可运行，不能覆盖当前暴露出的边界 [Local:verify][GH:issues-current]。在这些修复进入正式版本并通过目标 CPU/框架/数据集回归前，采用推荐应低于“可谨慎试用”。

## 优势

1. **定位清晰**：不是包罗万象的 vector DB，而是压缩向量索引库，目标函数是 memory/latency/privacy/local deployment [GH:readme]。
2. **算法卖点强**：基于 TurboQuant paper，主张 data-oblivious quantizer、无 separate train phase，并将 2–4 bit quantization 落到 Rust/Python API [GH:readme][arXiv]。
3. **工程表面完整**：Rust core、Python bindings、PyPI/crates.io 双发布、CI matrix、docs/api、benchmark 目录、integration docs 与 changelog 都存在 [GH:local-scan][GH:ci][PyPI][crates.io]。
4. **历史窄路径验证可跑**：2026-06 通过 PyPI wheel 安装后，`TurboQuantIndex` 与 `IdMapIndex` 的基本 search/allowlist smoke test 成功；本轮没有把该结果外推为当前生产验证 [Local:verify][GH:release-current]。
5. **安全报告通道已补齐**：当前仓库有 `SECURITY.md` 与 GitHub private reporting 路径，较上次 local scan 的“未发现”状态更完整 [GH:local-scan-current]。

## 劣势

1. **仍处 alpha 风险区间**：仓库创建于 2026-03，版本与边界仍在快速变化，成熟度按评分边界降至 1/5 [GH:repo][GH:release-current]。
2. **单核心维护者特征明显**：contributors API 显示 4 名贡献者，RyanCodrai 贡献 147 次，其余各 1 次；CONTRIBUTING 明确采用 invitation-only PR、只有作者合并到 main [GH:community]。
3. **bug/backlog 已成为硬负面信号**：66 个 open issues 与 7 个 open PR 中，样本覆盖 GIL、SIGILL、input validation、integration lifecycle、dependency floors 与发布测试缺口 [GH:issues-current]。
4. **不是完整数据库**：没有服务端、多租户、复制、分片、复杂 metadata index、权限系统或 cloud control plane；这些要由上层系统承担 [GH:docs]。
5. **性能与可移植性都需自证**：README benchmark 很有价值，但本轮没有复现实验；同时 #137 指出发布 wheel 的 target-cpu 配置可能使 pre-AVX2 fallback 失效，目标 CPU 验证已成为 correctness 前置条件 [GH:readme][GH:issues-current]。

---

## 适合什么场景

- **本地/私有 RAG 原型**：希望 embeddings 不出本机/VPC，且内存预算紧张 [GH:readme]。
- **需要 compressed vector index 的 Python/Rust 应用**：想直接嵌入库，而不是部署一个独立 vector DB server。
- **混合检索 rerank**：SQL/BM25/ACL/time window 先筛候选，再用 dense vector 在 allowlist 内搜索 [GH:docs]。
- **算法/系统学习**：研究 TurboQuant 工程化、SIMD search、Rust + PyO3/maturin 发布、vector index persistence。
- **低风险试点**：离线任务、小规模内嵌索引、可重建索引的数据产品。

## 不适合什么场景

- **需要成熟向量数据库的生产系统**：例如多租户权限、分片复制、在线 schema/metadata filtering、备份恢复、observability、SLA。
- **不能容忍早期 bug 的核心链路**：当前 issue/PR 样本显示 correctness、data lifecycle、packaging 与 portability 问题尚在等待修复 [GH:issues-current]。
- **需要 GPU ANN 或分布式索引**：turbovec 是 CPU/SIMD-oriented library，不是 GPU/distributed vector database [GH:readme]。
- **非 Python/Rust 生态**：Node.js binding 仍只是 open issue/proposal，不是已发布能力 [GH:issues]。
- **必须依赖官方 release assets 的流程**：GitHub releases API 本轮返回 0；实际版本主要从 PyPI、crates.io 与 changelog 追踪 [GH:releases][PyPI][crates.io][GH:changelog]。

## 与类似项目对比

| 项目 | 定位 | 相对本项目 |
|------|------|-----------|
| FAISS | Meta/Facebook Research 的经典 C++ similarity search/clustering library | FAISS 更成熟、生态更广，是 turbovec README 的主要 benchmark baseline；turbovec 更强调 TurboQuant、Rust/Python packaging、无训练压缩与本地 RAG 友好 API [GH:readme][GH:comparisons]。 |
| Qdrant | Rust 向量数据库 / vector search engine，含 cloud 产品 | Qdrant 是服务化数据库，覆盖 HNSW、payload/filter、运维与 cloud；turbovec 更轻，是可嵌入 compressed index library，不承担数据库平台职责 [GH:comparisons]。 |
| Milvus | cloud-native high-performance vector database | Milvus 更偏大规模分布式 ANN/向量数据库；turbovec 更适合单机/内嵌/本地低内存场景 [GH:comparisons]。 |
| LanceDB | embedded retrieval / multimodal AI library | LanceDB 更偏数据管理与 retrieval stack；turbovec 更底层，核心差异在 TurboQuant compression + SIMD search [GH:comparisons]。 |

上述项目按 `programming/data/vector-search` 同类范围做定位级对比，竞品仅做 GitHub API 轻量核验，未按同一 10 维度框架深审 [GH:comparisons]。

---

## 它能做什么

- **Compressed vector indexing**：支持 2、3、4 bit quantization，面向 high-dimensional embeddings [GH:docs]。
- **Online ingest**：README 声称 add vectors 即 indexed，无 separate train phase、无参数调优、无随 corpus 增长而 rebuild 的训练阶段 [GH:readme]。
- **Top-k search**：Python API 暴露 `TurboQuantIndex.search(queries, k)`，Rust API mirrored [GH:docs]。
- **Stable id wrapper**：`IdMapIndex` 提供外部 `u64` ids、`remove(id)`、`.tvim` persistence；适合文档 id 与向量 slot 分离 [GH:docs]。
- **Filtered search**：`TurboQuantIndex` 支持 bool mask，`IdMapIndex` 支持 allowlist；输出 shape 为 `min(k, allowed)`，避免 post-filter 结果不足 [GH:docs]。
- **Persistence**：`.tv` 与 `.tvim` 文件格式有 magic/version/header/trailer 说明，v2 load 兼容、v1 拒绝 [GH:docs]。
- **Framework integrations**：README 列出 LangChain、LlamaIndex、Haystack、Agno 替换层与 extras install [GH:readme]。

能力评分 4/5：对“内嵌 compressed vector index”这一目标覆盖较完整；扣分在于它不是完整 vector DB，跨语言生态与生产运维能力有限。

## 运行环境与资源占用

| 场景 | CPU | 内存 | 存储 | 说明 |
|------|-----|------|------|------|
| 最小 | 普通 CPU；无 GPU | 随向量数、维度、bit_width 线性增长 | wheel/crate 很小，索引文件随数据增长 | 本轮 PyPI wheel smoke test 在 Linux/Python 3.13 成功 [Local:verify]。 |
| 推荐 | 支持 AVX2/AVX-512BW 的 x86_64 或 NEON ARM | 按目标 recall/bit_width 预算；README 声称 10M float32 31GB 可压到约 4GB | `.tv`/`.tvim` 按压缩向量、scale、id map 增长 | README benchmark claim 未在本轮复现，应按目标机器重测 [GH:readme]。 |

- **运行时**：Rust crate + Python extension；当前官方 registry 版本为 PyPI 0.8.0、crates.io 0.9.0，Python requires `>=3.9` [GH:release-current]。
- **操作系统**：PyPI classifier 包含 macOS 与 POSIX/Linux；CI 覆盖 Ubuntu、macOS、Windows [PyPI][GH:ci]。
- **Docker**：无官方 Docker 形态；作为 library 使用。
- **GPU**：不要求 GPU；性能依赖 CPU SIMD path。
- **外部依赖**：Rust crate 依赖 ndarray/rayon/faer/statrs 等；Linux 从源码测试/构建涉及 OpenBLAS link，CI 明确安装 `libopenblas-dev` [GH:ci][Local:verify]。

性能评分 3/5：设计目标、压缩率与 SIMD 路径有吸引力，但本轮未复现 FAISS 对比；#121 报告 Python bindings 不释放 GIL，意味着并行 Python workload 可能无法充分利用 native kernels。#137 的 CPU compatibility 报告计入 correctness/portability，而不作为资源效率证据 [GH:issues-current]。

## 上手体验

评分 3/5。

Python 的 happy path 仍短：`pip install turbovec` 后可直接导入核心类型，2026-06 的基本 search smoke test 成功 [Local:verify]。但当前 issues 表明 framework integration 的依赖下限、示例 API、GIL 与参数校验存在多处落差，因此不能再给“少量配置即可稳定获得价值”的 4 分 [GH:issues-current]。

Rust 路径也有 `cargo add turbovec`，crate 标明 MSRV 1.70 [crates.io]。不过源码构建/测试在 Linux 上需要 OpenBLAS；本地没装 `-lopenblas` 时 `cargo test` 链接失败，而 CI 通过安装 `libopenblas-dev` 处理 [GH:ci][Local:verify]。这对普通 Python 用户影响不大，对源码贡献者是一个需要注意的环境坑。

## 代码质量

评分 3/5。

仓库结构仍清晰：Rust core、PyO3/maturin bindings、docs、benchmarks、examples、3 个 workflows 与 changelog 分工明确 [GH:local-scan-current]。但代码质量评分必须受真实 bug density 约束：当前样本中的 GIL、SIGILL、panic/input validation、integration persistence 与 release-process gaps，说明 CI 和 audit release 尚未把关键边界压住 [GH:issues-current]。

2026-06 的 `cargo check` 通过和 wheel smoke 仍是正面历史证据，但本轮没有重跑；在 7 个 hardening PR 合并并形成新版本前，不能让静态结构和 CI theater 覆盖当前缺陷信号 [Local:verify][GH:issues-current]。

## 可扩展性

评分 3/5。

turbovec 的扩展性主要体现在 library API 和 integration wrappers：Python/Rust 两侧有核心 index 类型、stable id wrapper、filtering、persistence，且已有 LangChain/LlamaIndex/Haystack/Agno 适配层 [GH:readme][GH:docs]。这对上层 RAG pipeline 已够用。

但它没有插件系统、server extension API、query planner hook 或 storage backend abstraction。Node.js binding 仍是 issue/proposal，不是现成扩展面 [GH:issues]。因此它是“可嵌入、可包一层”的库，而不是高度可插拔平台。

## 文档质量

评分 3/5。

README、docs/api、integration docs、benchmark 目录、CONTRIBUTING、SECURITY 与 CHANGELOG 都存在 [GH:local-scan-current]。但 #160、#162、#164、#168 分别指出 dependency floors、rustdoc、Agno 示例与 API semantics 漂移；文档已经不再满足“只缺少边缘场景”的 4 分边界 [GH:issues-current]。

不足是文档仍偏项目内自述，独立部署/production hardening 指南较少；性能 benchmark 虽详，但本轮未看到可直接替代生产评估的外部复现实验。对 alpha library 来说已经优秀，但不是成熟数据库级别的完整运维文档。

## 社区与成熟度

| 维度 | 评分 | 说明 |
|------|------|------|
| 社区活跃度 | 3/5 | 2026-07-24 快照为 13833 stars、1235 forks、66 open issues、7 open PRs；外部报告/补丁活跃，但合并权集中且默认分支自 2026-06-10 未推进，响应吞吐尚不足以升至 4 [GH:current][GH:issues-current]。 |
| 成熟度 | 1/5 | 2026-03 创建、当前版本仍处早期，且 0.8.0/0.9.0 后迅速累积多类 correctness/packaging/compatibility 问题；符合“alpha/API 与行为边界随时可能变化”的 1 分边界 [GH:current][GH:release-current][GH:issues-current]。 |

社区与成熟度必须分开看：可见度很高，但制度化社区与生产成熟度仍早。所谓“名满天下者，未必器成也”；stars 是发现信号，不是质量证明。

## 安全与风险

评分 2/5。

正面信号：无网络服务端、无托管控制面，本仓库代码标为 MIT，且当前已有 `SECURITY.md` 与 private reporting 路径；依赖、集成框架、数据/模型与上层产品仍适用各自条款，不能由该 MIT 字段一并推出。2026-07-24 未查到 published repository advisory [GH:local-scan-current][GH:advisories-current]。

风险点：它处理二进制索引文件、NumPy buffers、SIMD/CPU feature 边界和 Python extension 输入；当前 open issue/PR 样本报告 malformed input panic、pre-AVX2 SIGILL、持久化数据生命周期问题，并提出 I/O hardening 修复 [GH:issues-current]。这些尚待确认或合并的安全相关报告足以把未经独立审计的 alpha native extension 压到 2 分，但不等于本轮已复现漏洞。无 published advisory 只表示本轮未查到公开 GHSA，不能证明安全 [GH:advisories-current]。

生产建议：不要加载不可信 `.tv/.tvim` 文件；对输入 embedding 做 finite/shape/dim 校验；固定版本并跑回归；如果用于多租户服务，把 turbovec 放在外层权限与资源限制之后。

## 学习价值

学习价值高。它把一个较新的 quantization paper 工程化到 Rust/Python bindings、SIMD kernels、file format、integration wrappers、CI/release pipeline 中，适合看以下主题：

- TurboQuant / vector quantization 如何从论文落到 ANN library [arXiv][GH:readme]；
- Rust performance crate 如何组织 core、SIMD path、OnceLock cache、typed errors；
- PyO3/maturin 如何发布 Python wheel，同时保留 Rust crate；
- RAG framework integrations 如何模仿 in-tree reference store 的 public surface；
- alpha project 如何通过 changelog 与 audit-driven releases 快速补 correctness。

若 Develata 想做随机图/统计物理之外的工程小实验，它也可作为“高维向量压缩 + approximate search + benchmark methodology”的读源码对象。器虽新，观其筋骨，已有可学之处。
