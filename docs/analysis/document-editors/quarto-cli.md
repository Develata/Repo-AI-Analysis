---

title: "Quarto CLI"
created: 2026-05-21
updated: 2026-05-21
type: repository-analysis
repo_url: "https://github.com/quarto-dev/quarto-cli"
category: "document-editors"
tags: ["publishing", "markdown", "scientific-writing", "pandoc", "jupyter", "r", "typst", "technical-writing"]
previous_repo: ""
successor: ""
primary_language: "JavaScript/TypeScript/Lua"
license: "MIT"
stars: 5654
forks: 437
last_checked: 2026-05-21
last_verified: 2026-05-21
evidence: "GitHub API + official docs extraction + local repository scan; CLI not smoke-tested in this run"
archived_reason: ""
docker_support: true
gpu_required: false
estimated_cpu: "2-4 cores for normal rendering; code execution depends on notebooks/kernels"
estimated_memory: "2-8GB depending on document size and executed computations"
estimated_storage: "1-10GB including Quarto, Pandoc/LaTeX/TinyTeX/Jupyter/R dependencies"
status: active
ratings:
  capability: 5
  usability: 4
  performance: 3
  code_quality: 4
  documentation: 5
  community: 4
  maturity: 4
  extensibility: 5
  security: 4
  recommendation: 4
overall_score: 4.2
sources:
  - "[GH] https://github.com/quarto-dev/quarto-cli"
  - "[GH:api] https://api.github.com/repos/quarto-dev/quarto-cli queried 2026-05-21; stars=5654, forks=437, open_issues_count=1812 where REST count includes PRs"
  - "[GH:graphql] GitHub GraphQL queried 2026-05-21; open issues=1743, open PRs=69, releases=1000, tags=1838, commits=20458"
  - "[GH:release] latest GitHub release sampled 2026-05-21: v1.10.3 published 2026-04-10"
  - "[GH:languages] GitHub languages queried 2026-05-21; JavaScript, TypeScript and Lua dominate, with R/Python/Typst/TeX support"
  - "[GH:community] GitHub community profile queried 2026-05-21; README, Code of Conduct, CONTRIBUTING, PR template present; GitHub license API reports NOASSERTION but local COPYING.md is MIT"
  - "[GH:local-scan] local clone /tmp/repo-wiki-batch12/repos/quarto-cli at commit 36e2232273cb9de9af82f2bbb946a0a36808b425; files≈7079; checked README.md, COPYING.md, .github/CONTRIBUTING.md, tests/, src/; COPYING.md contains MIT License; CONTRIBUTING mentions DeepWiki, Context7 and https://quarto.org/llms.txt as AI-grounding aids"
  - "[GH:advisories] GitHub security advisories endpoint queried 2026-05-21; returned [] for repository advisories in this check"
  - "[Docs] https://quarto.org/docs/get-started/ extracted 2026-05-21; Quarto is scientific/technical publishing system, get-started covers install, tutorials, authoring tools; extracted docs mention Typst output improvements and llms.txt/.llms.md website outputs"
---

# Quarto CLI

> Open-source scientific and technical publishing system built on Pandoc — 用 Markdown + 计算执行 + 多格式输出组织论文、讲义、网站和书。
>
> **状态**: `active` · **总分**: 4.2/5 · **推荐度**: 4/5
> **核验版本**: local clone commit `36e2232273cb9de9af82f2bbb946a0a36808b425`；GitHub/API 快照 2026-05-21

## 一句话总结

Quarto CLI 是“研究写作发布管线”，不是单纯编辑器：当你需要 Markdown、Jupyter/R、引用、交叉引用、网站、书、PDF/HTML 多输出时，它比单一排版工具更合适。

## 总体评价

README 定位 Quarto 为 built on Pandoc 的 scientific and technical publishing system，使用 Markdown authoring，并加入 code execution、cross references、subfigures、citations、callouts、project system、websites/books 等能力 [GH]。官方 get-started 文档围绕 install、authoring tool、Hello Quarto、Computations、Authoring 展开 [Docs]。

对 Develata 来说，Quarto 的价值与 Typst 不同：Typst 是更现代的排版本体；Quarto 是更完整的知识发布系统。数学讲义、课程笔记、研究报告、个人主页技术文章、带代码/图表的 notebook-to-web，都可以用 Quarto 管理。它也在增强 Typst 输出、LLM-friendly website outputs（`llms.txt` / `.llms.md`）等功能 [Docs]。

缺点是依赖栈复杂：Pandoc、Jupyter、R/Knitr、Observable、LaTeX/TinyTeX、Typst、Lua filters、extensions。能力广即意味着故障面广。

## 推荐度：4/5

**定位**：需要多格式、可执行、可发布的科研/技术文档项目。

推荐 4 而不是 5：如果只写数学 PDF，Typst/LaTeX 更轻；如果维护个人主页和 notebook/report pipeline，Quarto 非常值得。对 Develata，Quarto 应作为 document-publishing backbone 候选，而非所有写作的默认入口。

## 优势

1. **多格式发布能力强**：websites、books、PDF、HTML 等项目型输出是核心能力 [GH][Docs]。
2. **计算文档支持好**：集成 Jupyter、Knitr、Observable，适合有代码/图表的研究报告 [GH]。
3. **技术写作功能完整**：cross-references、subfigures、hoverable citations/footnotes、callouts 等内建 [GH]。
4. **文档和生态成熟**：官方 docs 结构清楚；release/tag 数量大，说明长期高频维护 [GH:graphql][Docs]。
5. **AI-grounding 意识强**：CONTRIBUTING 明确建议用 DeepWiki、Context7、`llms.txt` 和本地 clone 给 AI assistant grounding [GH:local-scan]。

## 劣势

1. **依赖复杂**：Pandoc、LaTeX/Typst、Jupyter/R/Julia/Observable 等组合会带来环境问题。
2. **issue backlog 大**：GraphQL 快照显示 open issues=1743 [GH:graphql]。
3. **性能取决于执行引擎**：渲染本身之外，notebook/code execution 可能成为瓶颈。
4. **不是数学排版语言本体**：复杂排版细节仍要落到 LaTeX/Typst/Pandoc filters。
5. **仓库大且多语言**：JS/TS/Lua/R/Python/Typst/TeX 混合，贡献需要理解较多层。

---

## 适合什么场景

- 个人主页/课程网站/技术博客的统一发布。
- 含代码、图表、notebook 的研究报告。
- 将 Markdown/qmd 生成 HTML、PDF、book、slides。
- 需要 citation、cross-reference、callout、project-level config 的文档。
- 想为 LLM/agent 提供 `llms.txt` 风格文档索引的网站。

## 不适合什么场景

- 只写单篇数学 PDF，且不需要计算执行/网站输出。
- 期刊投稿强制 LaTeX class 的论文终稿。
- 不愿管理 Python/R/LaTeX/Jupyter 环境的人。
- 对渲染可复现性要求极高但不愿 pin 全套工具链的场景。

## 与类似项目对比

| 项目 | 定位 | 相对本项目 |
|------|------|-----------|
| Typst | 现代排版语言与 compiler | Typst 更偏 PDF/排版本体；Quarto 更偏多格式 publishing pipeline |
| Overleaf | Web LaTeX 协作编辑器 | Overleaf 管协作写 LaTeX；Quarto 管 Markdown/计算文档到多格式发布 |
| Jupyter Book | Jupyter/Markdown 书籍发布系统 | 这是 publishing-system 相邻项目而非纯 editor；Quarto 覆盖更广的语言/输出和 Pandoc 生态 |

上述项目按 `document-editors` 同类范围做定位级对比，未按同一 10 维度框架深审。

---

## 它能做什么

capability 评分 5/5。

Quarto 能：

- 用 Markdown/qmd 写科学和技术文档；
- 嵌入 Python/R/Julia/JavaScript 等代码与输出 [GH]；
- 生成 websites、books、PDF、HTML、slides 等多种形态 [GH][Docs]；
- 管理 project-level config 和多文档渲染 [GH]；
- 使用 Pandoc extensions、filters、templates、engine extensions；
- 输出 LLM-friendly `llms.txt` / `.llms.md` 网站材料 [Docs]。

## 运行环境与资源占用

| 场景 | CPU | 内存 | 存储 | 说明 |
|------|-----|------|------|------|
| 静态 Markdown 渲染 | 2 cores | 2GB | 1GB+ | Quarto + Pandoc 即可 |
| Notebook/计算报告 | 2-4 cores | 4-8GB | 2-10GB | 取决于 Python/R/Julia 环境 |
| PDF/书籍/网站管线 | 4+ cores | 8GB+ | 5-10GB+ | LaTeX/TinyTeX/Typst 和缓存占空间 |

- **运行时**：Quarto CLI；底层依赖 Pandoc 和可选执行引擎。
- **操作系统**：主流桌面/服务器系统，官方 get-started 提供安装入口 [Docs]。
- **Docker**：可容器化使用，但仓库核心是 CLI；CI/workflows 覆盖测试与 release [GH:local-scan]。
- **GPU**：不需要；除非文档中执行 GPU 代码。
- **外部依赖**：Jupyter、R/Knitr、Julia、LaTeX/TinyTeX、Typst、浏览器/渲染依赖等按输出而定。

## 上手体验

评分 4/5。

官方 get-started 明确让用户 install、选择 authoring tool、跑 Hello/Computations/Authoring tutorial [Docs]。基础 Markdown 到 HTML/PDF 很快；复杂项目、PDF、notebook execution、R/Python 环境则会出现依赖管理问题。

## 代码质量

评分 4/5。

local scan 显示 `src/`、`tests/`、大量 workflows；多语言实现与 20k+ commits 说明工程规模成熟 [GH:local-scan][GH:graphql]。CONTRIBUTING 对 issue、MRE、AI grounding 给出明确建议 [GH:local-scan]。

不给 5：多语言、多执行后端、多输出格式导致复杂度高；open issues 很多。

## 可扩展性

评分 5/5。

Quarto 的扩展性来自 Pandoc filters、Lua、templates、shortcodes、extensions、execution engines、project config。它不是一个轻量编辑器，而是 publishing framework；扩展面非常大。

## 文档质量

评分 5/5。

官方文档覆盖 get-started、tutorials、authoring、computations、project/publish 等路径 [Docs]。README 精炼地说明核心能力 [GH]。`llms.txt` 的存在也说明项目在机器可读文档索引方面走在前面 [GH:local-scan][Docs]。

## 社区与成熟度

| 维度 | 评分 | 说明 |
|------|------|------|
| 社区活跃度 | 4/5 | 5.6k stars、437 forks、open issues 多但 release 频繁；Posit 背后维护 [GH:api][GH:graphql]。 |
| 成熟度 | 4/5 | release/tag 数量极高，v1.10.3；作为 publishing tool 已成熟，但功能演进仍快 [GH:release][GH:graphql]。 |

## 安全与风险

评分 4/5。

本次 repository advisory 查询为空 [GH:advisories]。主要风险来自执行文档中的代码：Quarto 可以运行 Python/R/Julia/JS chunks，因此不可信 qmd/ipynb 应视作可执行代码。Pandoc filters、Lua、LaTeX 编译也都是执行面。用于可信个人文档风险低；用于在线接收用户文档渲染必须隔离。

## 学习价值

高。Quarto 教会的不是单个语法，而是科研发布管线：内容、计算、引用、交叉引用、多格式输出、网站结构、机器可读文档索引如何合为一体。对 develata.me 的长期维护有实际参考价值。
