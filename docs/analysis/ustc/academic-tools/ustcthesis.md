---
title: "ustcthesis"
created: 2026-07-07
updated: 2026-09-16
type: repository-analysis
repo_url: "https://github.com/ustctug/ustcthesis"
category: "ustc/academic-tools"
tags: [ustc, latex, thesis-template, academic-writing, tex]
previous_repo: ""
successor: ""
primary_language: "TeX"
license: "LPPL-1.3c"
stars: 2119
forks: 448
last_checked: 2026-09-16
last_verified: 2026-09-16
evidence: "GitHub API + README/CHANGELOG/local scan + CI workflow inspection; no local TeX build performed in this check"
archived_reason: ""
docker_support: false
gpu_required: false
estimated_cpu: "low; TeX compilation is single-machine document build work"
estimated_memory: "hundreds of MB to a few GB depending on TeX distribution and document assets"
estimated_storage: "TeX distribution dominates; repository itself is small"
status: active
ratings:
  capability: 5
  usability: 4
  performance: 3
  code_quality: 5
  documentation: 5
  community: 4
  maturity: 5
  extensibility: 4
  security: 5
  recommendation: 5
overall_score: 4.5
sources:
  - "[GH:build-current] https://github.com/ustctug/ustcthesis/blob/master/.github/workflows/test.yml and Makefile and ustcthesis.cls — fetched through GitHub contents API and read 2026-09-16: active workflow uses checkout@v7, install-texlive@v4, make main, latexmk -lualatex main.tex, make doc, make test; Makefile maps test to l3build check and uses XeLaTeX for main/doc. Older-TeX matrix is commented out. Class requires LaTeX2e 2020-10-01. This verifies configuration contents only, not workflow execution or PDF correctness."
  - "[GH:refresh] https://api.github.com/repos/ustctug/ustcthesis — checked 2026-09-16 UTC+8: canonical ustctug/ustcthesis, archived=false, disabled=false, branch=master, pushed_at=2026-08-09T14:25:35Z, language=TeX, license=LPPL-1.3c; separate Search queries: open issues=1, open PRs=0; repository security-advisories=[] (negative lookup only). README and LICENSE read through GitHub contents API; README now requires TeX distributions >=2021. Prior 2026-07 sources below are historical snapshots, not current build verification."
  - "[GH:v5] https://github.com/ustctug/ustcthesis/releases/tag/v5.0.0 and https://github.com/ustctug/ustcthesis/releases/tag/v5.0.1 — releases and CHANGELOG.md checked 2026-09-16: v5.0.0 published 2026-07-19T16:06:02Z adds declarationofaiusage, changes bibliography to GB/T 7714—2025, speciality option to discipline, numeric BibTeX style to ustcthesis-numeric.bst; deprecates English-cover options and bachelor bibliography style. Latest v5.0.1 published 2026-07-25T05:03:10Z fixes notationlist compilation. No TeX compilation performed."
  - "[GH] https://github.com/ustctug/ustcthesis"
  - "[GH:api] GitHub API snapshot 2026-07-07 via gh repo view: created_at=2015-07-07T03:24:20Z, pushed_at=2026-06-22T00:42:37Z, updated_at=2026-07-04T18:52:22Z, default_branch=master, stars=2119, forks=448, watchers=32, primary_language=TeX, license=LPPL-1.3c, latest_release=v4.1.0 published 2026-05-30T15:14:26Z, topics include latex, latex-template, thesis-template, ustc, homepage=https://gradschool.ustc.edu.cn/column/190"
  - "[GH:issues-prs] GitHub Search API queried 2026-07-07: open issues=1, open PRs=1; sampled issue #503 学位论文撰写模板版本更新历史 and PR #509 Bump actions/checkout from 6 to 7"
  - "[GH:advisories] GitHub repository security-advisories API queried 2026-07-07; returned []"
  - "[GH:releases] gh release list queried 2026-07-07; latest sampled releases: v4.1.0 2026-05-30, v4.0.0 2026-05-10, v4.0.0-beta.11 2026-04-06, v4.0.0-beta.10 2025-12-21, v4.0.0-beta.9 2025-05-25"
  - "[GH:local-scan] Local shallow clone /opt/data/tmp/repo-wiki-ustc-2026-07-07/repos/ustcthesis at commit 207b327740e64a1f1576e42cab2939c2c367f791 dated 2026-05-30; git ls-files=124, markdown/tex/rst/adoc files=53, workflows=3, test/spec-ish paths=85; root files include README.md, CHANGELOG.md, LICENSE, Makefile, latexmkrc, main.tex, ustcthesis.cls, ustcthesis-doc.tex and multiple bibliography style files; root dirs include .github, .vscode, bib, chapters, figures, test"
  - "[GH:readme] README.md local scan 2026-07-07; describes USTC thesis LaTeX template following Graduate School 2025-03-31 template, undergraduate quality standard [2025]32, and undergraduate format style dated 2026-04-24; supports current TeX Live/MacTeX/MiKTeX across platforms; requires TeX distribution not older than 2017; does not support CTeX suite; release package includes ustcthesis-doc.pdf; download links include GitHub Releases, USTC LUG mirror, TexPage, LoongTeX, Overleaf, and older Graduate School site; README also links wiki pages 新手指南, 常见问题 FAQ, and 参与开发"
  - "[GH:changelog] CHANGELOG.md local scan 2026-07-07; v4.1.0 added algorithms package support, allowed statement command optional PDF insertion, fixed extra spaces in keywords; v4.0.0 synchronized several undergraduate thesis-format changes from the 2026-04-24 official format style"
  - "[GH:ci] .github/workflows/test.yml local scan 2026-07-07; CI uses actions/checkout@v6 and zauguin/install-texlive@v4, then runs make main, LuaTeX build after clean, make doc, and make test/l3build check; failed test output is archived"
  - "[GH:makefile] Makefile local scan 2026-07-07; commands include main/doc builds via latexmk -xelatex, test via l3build check, save via test/save.sh, install into TEXMFHOME, and zip packaging"
  - "[GH:class] ustcthesis.cls local scan 2026-07-07; declares version 4.1.0 dated 2026-05-30, requires LaTeX2e 2017/04/15 or later, requires XeLaTeX or LuaLaTeX, and exposes a key-value setup pattern through \\ustcsetup / \\ustc@define@key; CHANGELOG records blind-review and statement-page related interface changes"
  - "[GH:license] LICENSE local scan 2026-07-07; LaTeX Project Public License v1.3c"
---

# ustcthesis

> 中国科学技术大学学位论文 LaTeX 模板。对 USTC 本科、硕博毕业论文写作而言，这是应优先考虑的社区维护模板；使用前仍必须核对当年学院/导师/教务处细则。
>
> **状态**: `active` · **总分**: 4.5/5 · **推荐度**: 5/5

## 一句话总结

ustcthesis 是长期维护的 USTC 学位论文社区 LaTeX 模板，适合希望用 LaTeX 写本科毕设、硕士或博士论文的同学；不把模板受欢迎程度当成学校强制标准。

## 总体评价

ustcthesis 的价值不在“炫技”，而在把学校格式要求、LaTeX 工程结构、示例论文、说明文档和回归测试长期维护在一个可复用项目里。README 明确说明它按照研究生院 2025-03-31 学位论文模板、本科毕业论文质量标准以及 2026-04-24 本科格式式样编写，并支持当前 TeX Live、MacTeX、MiKTeX 跨平台使用 [GH:readme]。

从维护质量看，它已经不是临时模板：项目始于 2015 年，最新 release 为 v5.0.1；v5 增加 AI 工具使用声明，并调整参考文献标准、配置选项和样式名称，是需要迁移检查的实质升级 [GH:api][GH:v5]。既有 CI 检查记录包含示例、文档与 l3build 回归测试，但本轮没有重跑构建 [GH:ci]。

但它仍然不是“免读说明书”的魔法按钮。当前 README 要求 TeX Live/MacTeX/MiKTeX 不低于 **2021 年**，不支持 CTeX 套装；旧分析中的 2017 年门槛已失效 [GH:refresh]。应先阅读 release 附带的 `ustcthesis-doc.pdf`，再迁移正文；在线入口的模板版本与隐私边界需要单独确认。

## 推荐度：5/5

**目标角色**：USTC 本科高年级、硕士、博士，以及需要帮助同学维护论文模板/院系格式说明的人。对“未来的学弟学妹”而言，这是应收藏、应优先读文档、也应在写论文早期就试编译的项目。推荐度给 5，不表示它没有坑，而是因为它在 USTC 论文 LaTeX 场景里同时具备官方格式跟进、长期维护、文档、测试和社区反馈通道。

## 优势

1. **学校语境高度贴合**：README 说明跟随研究生院与教务处格式文件，v5 又调整参考文献格式并新增 AI 工具使用声明；这不替代学院当年的最终要求 [GH:refresh][GH:v5]。
2. **工程化维护强**：当前 Makefile/workflow 配置了 latexmk、l3build regression tests 和 CI 构建入口，而非只有散装 `.tex` 文件；本轮只核验配置，没有执行测试 [GH:build-current]。
3. **入口多**：GitHub Releases、校内镜像、TexPage、LoongTeX、Overleaf 都在 README 中列出，降低不同环境同学的获取成本 [GH:readme]。
4. **成熟度高**：2015 年创建，2026 年仍在发版；stars/forks 对校内模板项目而言很高 [GH:api][GH:releases]。
5. **反馈路径清楚**：README 给出 issue 前应读学校标准、FAQ、升级模板/TeX 发行版、搜索已有 issue 的步骤 [GH:readme]。

## 劣势

1. **LaTeX 学习曲线仍在**：模板能解决格式，但不能替用户理解 TeX 编译、BibTeX/BibLaTeX、字体和宏包冲突。
2. **工具链与模板需要一起迁移**：当前 README 要求发行版不低于 2021 年；v5 的配置项、参考文献样式和弃用选项需要逐项核对，不宜在提交论文前直接覆盖旧工程 [GH:refresh][GH:v5]。
3. **格式合规仍需最终自查**：学校、学院、导师可能有额外要求；README 也要求将导师或院系额外格式要求反馈给作者考虑接口支持 [GH:readme]。
4. **本轮没有本地 TeX smoke build**：本次 wiki 检查只做 repo/API/local scan，没有实际安装 TeX Live 并编译示例 PDF；运行正确性主要引用项目 CI 设计而非本机复现 [GH:ci]。

## 适合什么场景

- USTC 本科毕业论文、硕士论文、博士论文用 LaTeX 写作。
- 已经会或愿意学习 LaTeX，希望避免从零调封面、页眉、目录、声明页、参考文献格式。
- 学院/课题组想维护统一论文写作建议，可以把它作为模板基础。
- 学弟学妹提前试写论文骨架：先跑通 `main.tex`，再迁移正文，而不是答辩前一周才处理格式。

## 不适合什么场景

- 完全不愿意接触 TeX 工具链、只想使用 Word/WPS 官方模板。
- 需要保证“当前学院秘书一定接受”的最终格式审查；这种场景仍要对照当年学校/学院通知。
- 旧 CTeX 套装环境；README 明确不支持 [GH:readme]。
- 把模板当作论文内容管理系统、文献管理系统或协作平台；它主要解决排版模板与构建问题。

## 与类似项目对比

| 项目 | 定位 | 相对本项目 |
|------|------|------------|
| USTC 官方 Word/格式文件 | 学校最终格式依据 | 权威性最高，但不提供 LaTeX 工程体验；ustcthesis 应持续对照它们 |
| Overleaf 上的 ustcthesis 模板 | 在线 LaTeX 入口 | 更适合零安装用户；底层模板仍可追溯到本项目 [GH:readme] |
| TexPage / LoongTeX 入口 | 中文 TeX 在线/平台化使用 | 降低环境配置成本，但版本同步与平台能力需单独确认 [GH:readme] |
| 其他高校 thesis LaTeX 模板 | 学校专属模板 | 可学习工程结构，但不能替代 USTC 格式约束 |

这些对比是定位对比，并未按 repo-wiki 的 10 维评分逐一审计。

## 它能做什么

ustcthesis 提供 USTC 学位论文 LaTeX class、示例主文档、章节/图片/bibliography 结构、参考文献样式、文档源码和 release 打包流程。Makefile 支持编译 `main.pdf`、`ustcthesis-doc.pdf`、清理临时文件、运行 l3build 测试、安装到本地 TEXMFHOME 和 zip 打包 [GH:makefile]。

v5 提供 `\declarationofaiusage`；“学科专业”选项改为 `discipline`，BibTeX 顺序编码样式改为 `ustcthesis-numeric.bst`，参考文献格式改为 GB/T 7714—2025，旧的英文封面选项与本科专用 bibliography 样式被标为过时。v5.0.1 修复 `notationlist` 编译错误 [GH:v5]。当前 README 的入口仍是 `latexmk -xelatex main.tex`；本轮没有编译验证 [GH:refresh]。

## 运行环境与资源占用

资源消耗主要来自 TeX 发行版，而不是这个 repo 本身。仓库浅扫只有 124 个 tracked files；但完整 TeX Live/MacTeX/MiKTeX 通常会占用较多磁盘，编译论文时还会产生 aux、log、toc、bbl 等临时文件 [GH:local-scan][GH:readme]。

性能由 4 调为 3：此维度主要衡量 TeX 构建成本，适用性较弱；未运行构建，就不以“静态模板”推断高效率。在线平台可隐藏本地安装成本，但版本同步、上传隐私与资源限制仍需另查 [GH:readme]。

| 场景 | CPU | 内存 | 存储 | 说明 |
|---|---|---|---|---|
| 本地论文编译 | 未测量 | 取决于宏包与图片 | TeX 发行版和论文素材 | 本轮只读构建配置 |
| 在线平台 | 由平台提供 | 由平台限制 | 平台配额 | 未测试平台版本或配额 |

## 上手体验

上手体验给 4。README 已经直接列出下载地址、编译命令、清理命令和反馈问题流程；release 包附带 PDF 文档，Overleaf 等入口也降低了门槛 [GH:readme]。

扣分点是 LaTeX 本身：字体、编译引擎、参考文献、宏包版本和学校格式差异都可能卡新手。对学弟学妹更稳的路径是：先用最新版 release 建一个最小论文，确认能编译，再逐章迁移内容。

## 代码质量

代码质量给 5，按文档模板工程的结构、构建与回归设计评价，不是已测覆盖率。2026-07 历史扫描记录了 class、bibliography、示例和文档结构；本轮另外读取当前 class、Makefile 和 workflow，确认构建/回归入口仍在 [GH:local-scan][GH:build-current]。

当前 CI 配置了 XeLaTeX 示例、LuaTeX 示例、文档构建和 l3build regression tests，但旧版 TeX 的矩阵已注释。本轮没有运行 CI 或本地编译，不宣称这些路径已通过，也不据此比较其他模板的可靠性 [GH:build-current]。

## 可扩展性

可扩展性给 4。`ustcsetup` key-value 接口、LaTeX class 结构、声明页/盲审/参考文献样式等机制为院系差异预留了扩展空间；README 也鼓励把导师或院系额外要求反馈给作者，以便增加接口 [GH:class][GH:readme]。

没有给 5，是因为 thesis template 的扩展天然受学校格式约束；用户随意改 class 很容易偏离标准。正确扩展方式应是先读文档，再用提供的接口或向上游提 issue/PR。

## 文档质量

文档质量给 5。项目本身就是模板文档化工程：README 概述、release 附带 `ustcthesis-doc.pdf`、wiki 新手指南/FAQ/参与开发、CHANGELOG 记录格式变更，形成从用户到贡献者的完整路径 [GH:readme][GH:changelog]。

对毕业论文这种“错一处格式就很痛”的场景，CHANGELOG 中明确标出与学校格式文件同步的变更尤其有价值 [GH:changelog]。

## 社区与成熟度

| 维度 | 评分 | 说明 |
|------|------|------|
| 社区活跃度 | 4/5 | 本轮 open issues=1、open PRs=0，近期有 v5 发版；低 backlog 不是快速响应或无 bug 的独立证明 [GH:refresh][GH:v5]。 |
| 成熟度 | 5/5 | 按学校专属文档工程的长期维护与格式覆盖评价，而非承诺 API 两年不变；2015 年以来的沉淀仍在，但 v5 确实要求迁移旧配置 [GH:api][GH:v5]。 |

## 安全与风险

安全给 5，限定为可信模板、本地受控编译的相对低攻击面，不适用于执行陌生 TeX 源码的服务。GitHub repository advisories 本轮返回空，只表示该接口未发现已发布项目级 GHSA；未执行依赖安全审计 [GH:refresh]。

实际风险主要在使用方式：不要从不可信来源复制 TeX 宏包或编译含恶意 shell escape 的论文源码；下载模板应优先用 GitHub Releases、校内镜像或 README 列出的可信入口 [GH:readme]。

## 学习价值

学习价值很高。对 USTC 学生，它直接服务毕业；对想学 TeX 工程的人，它也是一个好样本：如何把学校格式、class 设计、文档、示例、回归测试、release 和用户反馈组织成长期维护项目。

更广义地说，ustcthesis 展示了学生社群如何把重复痛苦沉淀成公共基础设施。利他者，亦自利也。