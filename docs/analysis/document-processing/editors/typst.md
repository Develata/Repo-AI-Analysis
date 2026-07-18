---

title: "Typst"
created: 2026-05-21
updated: 2026-07-18
type: repository-analysis
repo_url: "https://github.com/typst/typst"
category: "document-processing/editors"
tags: ["typesetting", "markup", "rust", "latex-alternative", "math", "compiler", "pdf"]
previous_repo: ""
successor: ""
primary_language: "Rust"
license: "Apache-2.0"
stars: 54951
forks: 1645
last_checked: 2026-07-18
last_verified: 2026-07-18
evidence: "GitHub REST/API + official 0.15 changelog/release evidence + local shallow-clone scan; compiler and migration paths were not smoke-tested in this run"
archived_reason: ""
docker_support: true
gpu_required: false
estimated_cpu: "1-2 cores for normal documents; more cores useful only around batch/build workflows"
estimated_memory: "low, usually hundreds of MB for CLI usage; repository build may need several GB"
estimated_storage: "hundreds of MB for installed binary/packages; several GB for source build cache"
status: active
ratings:
  capability: 4
  usability: 5
  performance: 4
  code_quality: 4
  documentation: 5
  community: 5
  maturity: 4
  extensibility: 4
  security: 4
  recommendation: 5
overall_score: 4.4
sources:
  - "[GH] https://github.com/typst/typst"
  - "[GH:api] https://api.github.com/repos/typst/typst queried 2026-07-18 UTC+8; full_name=typst/typst, archived=false, disabled=false, default_branch=main, pushed_at=2026-07-17T17:14:20Z, stars=54951, forks=1645, open_issues_count=1250 where REST count includes PRs, primary_language=Rust, license=Apache-2.0"
  - "[GH:activity] GitHub issue search queried 2026-07-18 UTC+8; open issues=1182 and open PRs=68"
  - "[GH:release] Official GitHub releases checked 2026-07-18 UTC+8: latest v0.15.1 published 2026-07-17; v0.15.0 published 2026-06-15 with variable fonts, MathML equation export, experimental bundle/multi-file export, multiple bibliographies, multi-standard PDF output, typst eval, and documented breaking changes"
  - "[GH:security-release] https://api.github.com/repos/typst/typst/releases/tags/v0.14.2 checked 2026-07-18; v0.14.2 replaced the wasmi runtime used by v0.14.0/0.14.1 after a hard-to-exploit use-after-free memory-handling bug and recommended upgrading; this is a historical fixed issue, not evidence that v0.15.1 is affected"
  - "[GH:languages] https://api.github.com/repos/typst/typst/languages queried 2026-07-18 UTC+8; Rust=5188443 bytes, Typst=887163, TypeScript=20520, JavaScript=20090, CSS=13431, Dockerfile=1857"
  - "[GH:community] GitHub community profile queried 2026-07-18 UTC+8; health_percentage=62; README, CONTRIBUTING, PR template and Apache-2.0 license present; no Code of Conduct detected"
  - "[GH:advisories] https://api.github.com/repos/typst/typst/security-advisories queried 2026-07-18 UTC+8; returned [] for published repository advisories in this check"
  - "[GH:local-scan] Local shallow clone /opt/data/tmp/github-repo-wiki-freshness-audit/repos/typst at commit 89495172a5b6a697cbf2d6c560efb2da9dfd173b on 2026-07-18; git-tracked files=2848, workflows=3; Cargo workspace version=0.15.1, rust-version=1.92, edition=2024; workspace includes typst-bundle, typst-html, typst-svg and the existing CLI/eval/layout/library/PDF/render/IDE crates; tests/fuzz present; CI runs workspace tests, clippy, fmt, docs, fuzz build and miri checks"
  - "[GH:docker] README.md and .github/workflows/docker-image.yml inspected at commit 89495172a5b6a697cbf2d6c560efb2da9dfd173b; README documents the official prebuilt ghcr.io/typst/typst:latest image and workflow publishes semver-tagged multi-platform manifests"
  - "[Docs:0.15] https://typst.app/docs/changelog/0.15.0/ extracted 2026-07-18; official migration notes cover file-path backslash prohibition and HTML/layout breaking changes alongside new bundle, MathML, variable-font and CLI capabilities"
---

# Typst

> A markup-based typesetting system that aims to be as powerful as LaTeX while easier to learn and much faster to compile.
>
> **状态**: `active` · **总分**: 4.4/5 · **推荐度**: 5/5
> **核验版本**: local clone commit `89495172a5b6a697cbf2d6c560efb2da9dfd173b`；latest release `v0.15.1`；GitHub/API 快照 2026-07-18

## 一句话总结

Typst 是目前很值得数学写作者认真试用的 LaTeX 替代候选：0.15 已从高质量 PDF 排版继续推进到 MathML HTML 与实验性多文件 bundle，但它仍不是 TeX/期刊生态的完全替代。

## 总体评价

README 定位很直接：Typst 是 markup-based typesetting system，目标是具备 LaTeX 的能力但更易学、更易用；它提供常见格式 markup、函数系统、integrated scripting、数学排版、参考文献管理、增量编译和友好错误信息 [GH]。0.15.0 又加入 variable fonts、MathML equation export、实验性 bundle/multi-file export、多个 bibliography、multi-standard PDF 与更通用的 `typst eval`；workspace 也新增/明确了 `typst-bundle`、`typst-html`、`typst-svg` 等边界 [GH:release][GH:local-scan]。

对 Develata 的价值很直接：数学笔记、分享文章、讲义、主页内容导出，都可能从 Typst 获益。LaTeX 仍是论文投稿和成熟宏包生态的硬标准；但 Typst 在“写得快、编得快、模板可读、错误可懂”上非常适合个人知识生产。

## 推荐度：5/5

**定位**：数学与技术写作的现代排版系统；尤其适合个人笔记、讲义、短文、课程材料和分享输出。

推荐度给 5 的条件是：把它作为 LaTeX 的补充/替代候选，而不是强行替代所有 journal workflow。对数学写作、主页分享和文献笔记，收益路径仍很短；0.15 的 MathML/HTML 与 bundle 方向还扩大了同一源稿多输出的潜力，但已有项目升级前应先读 migration guide [Docs:0.15]。

## 优势

1. **学习曲线显著低于 LaTeX**：README 强调 easier to learn and use，并给出 common formatting markup + functions + scripting 的组合 [GH]。
2. **编译体验强**：增量编译和友好错误信息是核心卖点 [GH]。
3. **数学排版内建**：math typesetting、bibliography management 是一等功能 [GH]。
4. **Rust 工程结构清晰**：workspace crates 将 CLI、syntax、layout、render、PDF、IDE 等分层 [GH:local-scan]。
5. **输出面继续扩张**：0.15 引入 MathML equation export、实验性 bundle、多 bibliography 与多 PDF standards，使其不再只按“快速 PDF compiler”理解 [GH:release][Docs:0.15]。

## 劣势

1. **生态仍小于 LaTeX**：复杂 journal class、BibTeX/TeX 宏包、出版社模板无法完全平替。
2. **版本仍未到 1.0**：latest release v0.15.1；0.15 migration guide 包含路径、HTML 与 layout breaking changes，语法/输出生态仍在演进 [GH:release][Docs:0.15]。
3. **开放 issue 多**：本轮 open issues=1182，说明需求和边缘 case 仍很多 [GH:activity]。
4. **贡献政策对 AI 较严格**：CONTRIBUTING 明确不接受 AI 代写贡献和 AI 生成 PR 描述，这对 agent-assisted contribution 有约束 [GH:local-scan]。
5. **不是协作平台本身**：仓库提供 compiler/CLI；在线协作编辑是 typst.app 产品层，不应混同为本 repo 能力。

---

## 适合什么场景

- 数学笔记、讲义、课程材料。
- 个人主页文章导出 PDF 或书面材料。
- 需要比 LaTeX 更快反馈、更友好错误信息的写作。
- 希望模板逻辑可读、函数式排版可维护的技术文档。
- Rust compiler/typesetting 架构学习。

## 不适合什么场景

- 必须使用期刊指定 LaTeX class/macro 的投稿。
- 强依赖特定 LaTeX package 的文档。
- 多作者在线协作但不想使用 typst.app 或外部同步工具。
- 对 1.0 稳定承诺有硬要求的长期出版流水线。

## 与类似项目对比

| 项目 | 定位 | 相对本项目 |
|------|------|-----------|
| Overleaf | Web-based collaborative LaTeX editor | Overleaf 是 LaTeX 协作平台；Typst 是新的排版语言/编译器 |
| Quarto CLI | 科学/技术出版系统 | Quarto 更偏多格式发布和计算文档；Typst 更偏排版本体与 PDF 体验 |
| LaTeX ecosystem | 经典数学排版生态 | 这是 broader ecosystem 而非同类 repo；LaTeX 生态最全，Typst 的学习、编译、错误反馈体验更现代 |

上述项目按 `document-processing/editors` 同类范围做定位级对比，未按同一 10 维度框架深审。其中 LaTeX ecosystem 为生态参照项，不是单一 repo。

---

## 它能做什么

capability 评分 4/5。

Typst 能：

- 用 markup + scripting 编写文档；
- 本地 CLI 编译 PDF，并可导出 PNG/SVG/HTML；
- 支持数学排版、多个 bibliography、模板、函数化样式与 variable fonts；
- 在 HTML 中原生输出 MathML equation，并通过实验性 bundle 生成多文件项目；
- 提供 IDE 相关能力、`typst eval` 和文档构建基础 [GH][GH:release][GH:local-scan]。

不给 5：相对 LaTeX 的宏包/期刊生态仍有缺口；repo 本体不是完整在线协作产品。

## 运行环境与资源占用

| 场景 | CPU | 内存 | 存储 | 说明 |
|------|-----|------|------|------|
| CLI 写作 | 1-2 cores | 低 | 百 MB 级 | 已发布 binary/package 通常很轻 |
| 大文档/批量编译 | 2-4 cores | 中等 | 百 MB-数 GB | 取决于图片、字体、依赖包 |
| 源码构建 | 4+ cores | 数 GB | 数 GB | Rust workspace build cache 较大 |

- **运行时**：Typst CLI / compiler。
- **操作系统**：README 面向本地编译；Rust 项目通常覆盖主流平台，release binary 以官方发布为准 [GH]。
- **Docker**：README 明确提供官方 `ghcr.io/typst/typst:latest`，release workflow 发布 semver-tagged multi-platform manifests；日常写作仍不必 Docker-first [GH:docker]。
- **GPU**：不需要。
- **外部依赖**：字体、图片资源、bibliography 数据；源码构建需 Rust toolchain。

performance 评分 4/5。Rust/incremental-compiler 设计、官方 release binaries 与本地可运行 CLI 都支持“资源效率较好”的判断 [GH][GH:local-scan]；但本轮没有执行编译、基准或峰值内存测量，因此不以项目方“much faster”口径给满分。

## 上手体验

评分 5/5。

Typst 的核心强项就是上手：语法比 LaTeX 直观，错误信息友好，CLI 快速，官方 docs 和 tutorial 入口清楚 [GH]。对已有 LaTeX 背景的人，Typst 的成本主要在重新学习 idioms，而不是被宏包和 TeX 错误折磨。

## 代码质量

评分 4/5。

Rust workspace 分层明确：除 `typst-cli`、syntax/eval/layout/render/pdf/ide 外，0.15 当前树还含 `typst-bundle`、`typst-html`、`typst-svg` 等输出层 crate [GH:local-scan]。CI 实际配置 workspace test、clippy、fmt、docs、fuzz build 与 miri；本轮未在本机重复执行这些任务。

不给 5：未见公开覆盖率；open issues 多；项目仍在快速演进。

## 可扩展性

评分 4/5。

Typst 的扩展性主要来自语言本身：函数、模板、packages、scripting 和 custom elements。对用户文档层很强；对 compiler internals 也可通过 Rust crates 扩展/贡献。但它不是传统 plugin marketplace，因此不给 5。

## 文档质量

评分 5/5。

README 清楚解释定位、功能、安装、文档入口；仓库 `docs/` 本身包含官方文档源，并说明可构建 website/PDF、支持 watch mode [GH:local-scan]。对排版语言来说，文档即产品的一部分，Typst 在这点上很强。

## 社区与成熟度

| 维度 | 评分 | 说明 |
|------|------|------|
| 社区活跃度 | 5/5 | 54.9k stars、1.6k forks、open issues=1182、open PRs=68；用户关注度与维护活动都高 [GH:api][GH:activity]。 |
| 成熟度 | 4/5 | v0.15.1 已提供成熟日常排版能力，但仍未 1.0，且 0.15 有明确 migration/breaking-change 清单 [GH:release][Docs:0.15]。 |

## 安全与风险

评分 4/5。

本次 repository advisory 查询为空，只表示此检查未发现 published GHSA [GH:advisories]。官方 v0.14.2 release 曾披露并修复 v0.14.0/0.14.1 所用 `wasmi` 的 hard-to-exploit use-after-free，并明确建议升级；当前 v0.15.1 不在该受影响版本范围内 [GH:security-release]。作为本地文档编译器，主要风险仍是处理不可信文档、字体/图片/PDF/插件与第三方 package；应把模板和 WebAssembly plugin 视作供应链输入，而不是因为没有 GHSA 就视为无风险。

## 学习价值

高。Typst 同时值得从两个角度学习：

- 数学写作生产力：如何更快、更可靠地表达公式、定理、结构；
- Rust 工程：一个现代排版系统如何拆分 syntax/eval/layout/render/pdf/ide。
