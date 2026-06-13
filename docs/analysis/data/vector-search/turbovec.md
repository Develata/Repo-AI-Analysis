---
title: "turbovec"
created: 2026-06-10
updated: 2026-06-10
type: repository-analysis
repo_url: "https://github.com/RyanCodrai/turbovec"
category: "data/vector-search"
tags: ["vector-search", "ann", "quantization", "rust", "python", "rag", "simd"]
previous_repo: ""
successor: ""
primary_language: "Python/Rust"
license: "MIT"
stars: 10625
forks: 909
last_checked: 2026-06-10
last_verified: 2026-06-10
evidence: "official GitHub/PyPI/crates.io metadata + local source scan + cargo check + installed-wheel smoke test; no independent benchmark rerun"
archived_reason: ""
docker_support: false
gpu_required: false
estimated_cpu: "CPU-only; SIMD benefits from AVX2/AVX-512BW on x86_64 or NEON on ARM; scalar fallback exists but may be less attractive"
estimated_memory: "index storage roughly depends on bit_width, dimension, vector count, id map, and cached search layout; README claims 10M float32 corpus 31GB -> turbovec 4GB"
estimated_storage: "small library package; persisted .tv/.tvim index size grows with compressed vectors and optional id mapping"
status: active
sharing_candidate: true
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
---

# turbovec

> TurboQuant-based compressed vector index：Rust core + Python bindings，主打本地 RAG/embedding search 的 2–4 bit quantization、低内存与 SIMD search。
>
> **状态**: `active` · **总分**: 3.4/5 · **推荐度**: 3/5

## 一句话总结

turbovec 适合想在本地或私有环境里做轻量 compressed vector search、且愿意接受早期项目风险的 RAG/embedding 工程使用者。

## 总体评价

turbovec 的吸引力非常明确：它不是完整向量数据库，而是一个小而锋利的 compressed vector index。README 将其定位为 Google Research TurboQuant 算法的工程化实现，提供 Rust crate 与 Python bindings，支持 2–4 bit compression、无训练 ingest、SIMD search、filtered search、持久化，以及 LangChain/LlamaIndex/Haystack/Agno 等框架替换层 [GH:readme][GH:docs]。

但它仍是 2026-03 才创建、PyPI classifier 仍标为 `Development Status :: 3 - Alpha` 的新项目 [GH:repo][PyPI]。近期 changelog 与 open issues 显示维护者在快速修 bug：重复 id orphan vector、upsert 失败导致旧数据删除、NaN/Inf/大数输入校验、scalar fallback 正确性、`.tv` load integer overflow 等都在近期被修复或被公开讨论 [GH:changelog][GH:issues]。这说明维护响应积极，也说明 API/实现边界仍在硬化中。

结论：如果目标是研究 TurboQuant、做本地 RAG 原型、或在内存敏感场景中试用 compressed ANN，它值得重点关注；如果目标是生产级多租户向量数据库、稳定 SLA、复杂 metadata/filter/query planner，则应优先看 Qdrant/Milvus/LanceDB 等成熟系统。

## 推荐度：3/5

推荐给 RAG/embedding 工程师、Rust/Python 性能库研究者、以及需要本地低内存向量检索的实验性项目；前提是你能接受 alpha-stage 风险，并愿意用自己的数据重跑 recall/latency benchmark。

给 3 而不是 4 的原因是：它的技术方向和工程包装值得跟踪，本轮 PyPI wheel smoke test 也可用 [Local:verify]；但作为“采用推荐”而不是“收录推荐”，它仍过早。仓库太新，PyPI classifier 仍为 Alpha，近期 correctness/data-safety/security-adjacent 修复密集，且没有独立复现 benchmark。用于研究、试验、小规模可重建索引是合理的；用于替代成熟 vector database 或进入核心生产链路，则需要更长观察期。

## 优势

1. **定位清晰**：不是包罗万象的 vector DB，而是压缩向量索引库，目标函数是 memory/latency/privacy/local deployment [GH:readme]。
2. **算法卖点强**：基于 TurboQuant paper，主张 data-oblivious quantizer、无 separate train phase，并将 2–4 bit quantization 落到 Rust/Python API [GH:readme][arXiv]。
3. **工程表面完整**：Rust core、Python bindings、PyPI/crates.io 双发布、CI matrix、docs/api、benchmark 目录、integration docs 与 changelog 都存在 [GH:local-scan][GH:ci][PyPI][crates.io]。
4. **本地验证可跑**：本轮通过 PyPI wheel 安装后，`TurboQuantIndex` 与 `IdMapIndex` 的基本 search/allowlist smoke test 成功 [Local:verify]。
5. **维护响应快**：近期 commit/release 密集，0.7.0/0.8.0 的 audit-driven release 与 0.7.1/0.8.1 bug-fix release 都直接处理 correctness 和 integration 问题 [GH:changelog]。

## 劣势

1. **成熟度低**：仓库创建于 2026-03，PyPI 仍标 Alpha，版本与边界仍在快速变化 [GH:repo][PyPI]。
2. **单核心维护者特征明显**：contributors API 显示 4 名贡献者，RyanCodrai 贡献 147 次，其余各 1 次；CONTRIBUTING 明确采用 invitation-only PR、只有作者合并到 main [GH:community]。
3. **近期 bug 暴露较多**：open issues 与 changelog 包含 scalar fallback correctness、security fixes、integration orphan vectors、upsert data-safety 等问题；这是年轻性能库常见状态，但不应忽视 [GH:issues][GH:changelog]。
4. **不是完整数据库**：没有服务端、多租户、复制、分片、复杂 metadata index、权限系统或 cloud control plane；这些要由上层系统承担 [GH:docs]。
5. **性能结论需自证**：README benchmark 很有价值，但本轮没有复现实验；生产采用前必须在目标 CPU、embedding 维度、bit_width、filter selectivity 和 recall threshold 下重测 [GH:readme][Local:verify]。

---

## 适合什么场景

- **本地/私有 RAG 原型**：希望 embeddings 不出本机/VPC，且内存预算紧张 [GH:readme]。
- **需要 compressed vector index 的 Python/Rust 应用**：想直接嵌入库，而不是部署一个独立 vector DB server。
- **混合检索 rerank**：SQL/BM25/ACL/time window 先筛候选，再用 dense vector 在 allowlist 内搜索 [GH:docs]。
- **算法/系统学习**：研究 TurboQuant 工程化、SIMD search、Rust + PyO3/maturin 发布、vector index persistence。
- **低风险试点**：离线任务、小规模内嵌索引、可重建索引的数据产品。

## 不适合什么场景

- **需要成熟向量数据库的生产系统**：例如多租户权限、分片复制、在线 schema/metadata filtering、备份恢复、observability、SLA。
- **不能容忍早期 bug 的核心链路**：近期 changelog/issue 已显示 correctness/data-safety 类问题仍在被发现和修复 [GH:issues][GH:changelog]。
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

上述项目按 `data/vector-search` 同类范围做定位级对比，竞品仅做 GitHub API 轻量核验，未按同一 10 维度框架深审 [GH:comparisons]。

## 个人主页 sharing 候选

是。它有明确 narrative：Google Research TurboQuant → Rust/Python vector index → 10M vectors memory reduction → local/private RAG。对 Develata 主页的 Coding/Sharing 或 Math Lab 都有可讲性；但分享时应把“性能 claim”写成项目报告与待复现 benchmark，而非已独立确认事实。

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

- **运行时**：Rust crate + Python extension；Python package requires `>=3.9`，本轮安装到 Python 3.13 [PyPI][Local:verify]。
- **操作系统**：PyPI classifier 包含 macOS 与 POSIX/Linux；CI 覆盖 Ubuntu、macOS、Windows [PyPI][GH:ci]。
- **Docker**：无官方 Docker 形态；作为 library 使用。
- **GPU**：不要求 GPU；性能依赖 CPU SIMD path。
- **外部依赖**：Rust crate 依赖 ndarray/rayon/faer/statrs 等；Linux 从源码测试/构建涉及 OpenBLAS link，CI 明确安装 `libopenblas-dev` [GH:ci][Local:verify]。

性能评分 4/5：设计目标、压缩率与 SIMD 路径都强，且 README benchmark 具体；但本轮未复现 FAISS 对比，且源码测试在本地因缺 OpenBLAS 未跑完，只能给 4 而非 5。

## 上手体验

评分 4/5。

Python 路径非常顺：`pip install turbovec` 后可直接 `from turbovec import TurboQuantIndex, IdMapIndex`，本轮用 `uv` 创建 venv、安装 wheel 并完成基本 search smoke test [Local:verify]。README 首屏给出 Python add/search/write/load 与 stable id 示例，docs/api 补充 method semantics、filtering 与 file formats [GH:readme][GH:docs]。

Rust 路径也有 `cargo add turbovec`，crate 标明 MSRV 1.70 [crates.io]。不过源码构建/测试在 Linux 上需要 OpenBLAS；本地没装 `-lopenblas` 时 `cargo test` 链接失败，而 CI 通过安装 `libopenblas-dev` 处理 [GH:ci][Local:verify]。这对普通 Python 用户影响不大，对源码贡献者是一个需要注意的环境坑。

## 代码质量

评分 4/5。

仓库结构清晰：`turbovec/` 为 Rust core，`turbovec-python/` 为 PyO3/maturin bindings，`docs/`、`benchmarks/`、`examples/`、CI workflows 与 changelog 分工明确 [GH:local-scan]。源码中可见对并发 search、OnceLock cache、NaN/Inf/大数输入、file format version、SIMD path 与 scalar fallback 的显式注释和错误建模 [GH:local-scan][GH:changelog]。CI 覆盖三大 OS，Python wheel build、integration extras、pytest 与 downstream smoke 都在流程内 [GH:ci]。

扣分点也明确：本轮 `cargo check -p turbovec --all-targets` 虽通过，但仍有 unused variable/dead code warning；`cargo test` 未能在当前环境完成，因为缺系统 OpenBLAS [Local:verify]。此外近期 changelog 集中修复多个 correctness/data-safety bug，说明测试体系正在快速补强，但不能视为已完全成熟 [GH:changelog]。

## 可扩展性

评分 3/5。

turbovec 的扩展性主要体现在 library API 和 integration wrappers：Python/Rust 两侧有核心 index 类型、stable id wrapper、filtering、persistence，且已有 LangChain/LlamaIndex/Haystack/Agno 适配层 [GH:readme][GH:docs]。这对上层 RAG pipeline 已够用。

但它没有插件系统、server extension API、query planner hook 或 storage backend abstraction。Node.js binding 仍是 issue/proposal，不是现成扩展面 [GH:issues]。因此它是“可嵌入、可包一层”的库，而不是高度可插拔平台。

## 文档质量

评分 4/5。

README、docs/api、integration docs、benchmark 目录、CONTRIBUTING、CHANGELOG 都存在，且 API semantics 写得比较具体：例如 `swap_remove`、`IdMapIndex`、allowlist/mask output shape、`.tv/.tvim` file formats 都有明确说明 [GH:docs][GH:local-scan]。CHANGELOG 也记录了 bug-fix release 的背景与影响，便于判断版本风险 [GH:changelog]。

不足是文档仍偏项目内自述，独立部署/production hardening 指南较少；性能 benchmark 虽详，但本轮未看到可直接替代生产评估的外部复现实验。对 alpha library 来说已经优秀，但不是成熟数据库级别的完整运维文档。

## 社区与成熟度

| 维度 | 评分 | 说明 |
|------|------|------|
| 社区活跃度 | 3/5 | stars/forks 增长很强，GitHub API 本轮为 10625 stars、909 forks；维护者响应快，open PR=0。但 contributors 仍明显集中，Discussions 未开启，CONTRIBUTING 采用 invitation-only PR，community health=71 [GH:repo][GH:community]。 |
| 成熟度 | 2/5 | 仓库创建于 2026-03，PyPI classifier 为 Alpha，近期仍有 correctness/security-fix 相关 issues 和 bug-fix releases；适合 tracking/trial，不宜视为长期稳定基础设施 [GH:repo][PyPI][GH:issues][GH:changelog]。 |

社区与成熟度必须分开看：可见度很高，但制度化社区与生产成熟度仍早。所谓“名满天下者，未必器成也”；stars 是发现信号，不是质量证明。

## 安全与风险

评分 3/5。

正面信号：无网络服务端、无托管控制面，作为本地 library 使用时攻击面小；MIT license 简单；GitHub repository security advisories 本轮查询为 0；代码近期加入/讨论了非有限输入、大数输入、`.tv` load overflow 等安全/数据完整性修复 [GH:advisories][GH:changelog][GH:issues]。

风险点：它处理二进制索引文件 `.tv/.tvim`、NumPy buffers、SIMD unsafe code、Python extension 边界和外部输入向量；open issue #105 标题直接指向 `.tv` load integer overflow 与 Python NaN query validation，说明安全边界仍在硬化 [GH:issues]。没有 SECURITY.md；无 published advisory 只能说明本轮没查到公开 advisory，不能说明没有漏洞 [GH:advisories][GH:community]。

生产建议：不要加载不可信 `.tv/.tvim` 文件；对输入 embedding 做 finite/shape/dim 校验；固定版本并跑回归；如果用于多租户服务，把 turbovec 放在外层权限与资源限制之后。

## 学习价值

学习价值高。它把一个较新的 quantization paper 工程化到 Rust/Python bindings、SIMD kernels、file format、integration wrappers、CI/release pipeline 中，适合看以下主题：

- TurboQuant / vector quantization 如何从论文落到 ANN library [arXiv][GH:readme]；
- Rust performance crate 如何组织 core、SIMD path、OnceLock cache、typed errors；
- PyO3/maturin 如何发布 Python wheel，同时保留 Rust crate；
- RAG framework integrations 如何模仿 in-tree reference store 的 public surface；
- alpha project 如何通过 changelog 与 audit-driven releases 快速补 correctness。

若 Develata 想做随机图/统计物理之外的工程小实验，它也可作为“高维向量压缩 + approximate search + benchmark methodology”的读源码对象。器虽新，观其筋骨，已有可学之处。
