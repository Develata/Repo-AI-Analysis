---
title: "ustcthesis"
created: 2026-07-07
updated: 2026-07-07
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
last_checked: 2026-07-07
last_verified: 2026-07-07
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
  performance: 4
  code_quality: 5
  documentation: 5
  community: 4
  maturity: 5
  extensibility: 4
  security: 5
  recommendation: 5
overall_score: 4.6
sources:
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
> **状态**: `active` · **总分**: 4.6/5 · **推荐度**: 5/5

## 一句话总结

ustcthesis 是 USTC 学位论文写作的事实标准级 LaTeX 模板，适合希望用 LaTeX 写本科毕设、硕士或博士论文的同学。

## 总体评价

ustcthesis 的价值不在“炫技”，而在把学校格式要求、LaTeX 工程结构、示例论文、说明文档和回归测试长期维护在一个可复用项目里。README 明确说明它按照研究生院 2025-03-31 学位论文模板、本科毕业论文质量标准以及 2026-04-24 本科格式式样编写，并支持当前 TeX Live、MacTeX、MiKTeX 跨平台使用 [GH:readme]。

从维护质量看，它已经不是临时模板：项目始于 2015 年，2026 年仍有 v4.0.0/v4.1.0 release，且 CI 会构建示例论文、文档、LuaTeX 路径并运行 l3build 回归测试 [GH:api][GH:releases][GH:ci]。这对后来者很重要——论文模板最怕“看起来能用，但学校格式一改就没人管”。

但它仍然不是“免读说明书”的魔法按钮。README 明确提醒 release 包附带 `ustcthesis-doc.pdf`，使用前应仔细阅读；并且不支持 CTeX 套装，要求 TeX Live/MacTeX/MiKTeX 不低于 2017 年且尽量更新 [GH:readme]。对学弟学妹的现实建议是：如果已经愿意用 LaTeX，它是第一候选；如果完全不想碰 TeX 工具链，Overleaf/TexPage/LoongTeX 入口可能更低摩擦。

## 推荐度：5/5

**目标角色**：USTC 本科高年级、硕士、博士，以及需要帮助同学维护论文模板/院系格式说明的人。对“未来的学弟学妹”而言，这是应收藏、应优先读文档、也应在写论文早期就试编译的项目。推荐度给 5，不表示它没有坑，而是因为它在 USTC 论文 LaTeX 场景里同时具备官方格式跟进、长期维护、文档、测试和社区反馈通道。

## 优势

1. **学校语境高度贴合**：README 明确跟随研究生院与教务处格式文件，v4.0.0/v4.1.0 也继续同步 2026 年本科格式变动 [GH:readme][GH:changelog]。
2. **工程化维护强**：有 Makefile、latexmk、l3build regression tests、GitHub Actions CI，而不是一个散装 `.tex` 文件 [GH:local-scan][GH:ci][GH:makefile]。
3. **入口多**：GitHub Releases、校内镜像、TexPage、LoongTeX、Overleaf 都在 README 中列出，降低不同环境同学的获取成本 [GH:readme]。
4. **成熟度高**：2015 年创建，2026 年仍在发版；stars/forks 对校内模板项目而言很高 [GH:api][GH:releases]。
5. **反馈路径清楚**：README 给出 issue 前应读学校标准、FAQ、升级模板/TeX 发行版、搜索已有 issue 的步骤 [GH:readme]。

## 劣势

1. **LaTeX 学习曲线仍在**：模板能解决格式，但不能替用户理解 TeX 编译、BibTeX/BibLaTeX、字体和宏包冲突。
2. **强依赖 TeX 发行版状态**：README 要求不低于 2017 年且尽量升级；旧系统、学校机房环境或过时 CTeX 套装会带来问题 [GH:readme][GH:class]。
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

模板版本 4.1.0 要求 LaTeX2e 2017/04/15 或更新，要求 XeLaTeX 或 LuaLaTeX；README 则给出 `latexmk -xelatex ustcthesis-doc.tex` 与 `latexmk -xelatex main.tex` 的直接命令 [GH:class][GH:readme]。

## 运行环境与资源占用

资源消耗主要来自 TeX 发行版，而不是这个 repo 本身。仓库浅扫只有 124 个 tracked files；但完整 TeX Live/MacTeX/MiKTeX 通常会占用较多磁盘，编译论文时还会产生 aux、log、toc、bbl 等临时文件 [GH:local-scan][GH:readme]。

性能给 4 而不是 5：文档构建属于低 CPU 风险任务，但 TeX 环境安装重、宏包多，初次配置成本明显高于纯 Markdown/HTML 模板。若使用 Overleaf/TexPage/LoongTeX，环境成本可被平台隐藏，但平台同步与限制需另看 [GH:readme]。

## 上手体验

上手体验给 4。README 已经直接列出下载地址、编译命令、清理命令和反馈问题流程；release 包附带 PDF 文档，Overleaf 等入口也降低了门槛 [GH:readme]。

扣分点是 LaTeX 本身：字体、编译引擎、参考文献、宏包版本和学校格式差异都可能卡新手。对学弟学妹更稳的路径是：先用最新版 release 建一个最小论文，确认能编译，再逐章迁移内容。

## 代码质量

代码质量给 5。对 TeX 模板项目而言，关键不是“算法复杂度”，而是结构、测试和可维护性。这里有 `ustcthesis.cls`、多套 `.bst/.bbx/.cbx`、`ustcthesis-doc.tex`、示例 `main.tex`、章节/图片/bib 目录、Makefile、latexmkrc 和 l3build test 体系 [GH:local-scan][GH:makefile]。

CI 同时覆盖 XeLaTeX 示例、LuaTeX 示例、文档构建和 regression tests，这比许多高校模板项目只靠人工试编译可靠得多 [GH:ci]。

## 可扩展性

可扩展性给 4。`ustcsetup` key-value 接口、LaTeX class 结构、声明页/盲审/参考文献样式等机制为院系差异预留了扩展空间；README 也鼓励把导师或院系额外要求反馈给作者，以便增加接口 [GH:class][GH:readme]。

没有给 5，是因为 thesis template 的扩展天然受学校格式约束；用户随意改 class 很容易偏离标准。正确扩展方式应是先读文档，再用提供的接口或向上游提 issue/PR。

## 文档质量

文档质量给 5。项目本身就是模板文档化工程：README 概述、release 附带 `ustcthesis-doc.pdf`、wiki 新手指南/FAQ/参与开发、CHANGELOG 记录格式变更，形成从用户到贡献者的完整路径 [GH:readme][GH:changelog]。

对毕业论文这种“错一处格式就很痛”的场景，CHANGELOG 中明确标出与学校格式文件同步的变更尤其有价值 [GH:changelog]。

## 社区与成熟度

| 维度 | 评分 | 说明 |
|------|------|------|
| 社区活跃度 | 4/5 | stars=2119、forks=448，对校内 LaTeX 模板很强；当前 open issues=1、open PRs=1，说明维护负担可控 [GH:api][GH:issues-prs]。 |
| 成熟度 | 5/5 | 2015 年创建，2026 年仍跟随学校格式更新并发 v4.1.0；已有 release、CI、回归测试和校内镜像 [GH:api][GH:releases][GH:ci]。 |

## 安全与风险

安全给 5，但这是静态模板/本地编译项目的低攻击面，而不是“安全机制复杂”。GitHub repository advisories 本轮返回空，只表示该接口未发现已发布项目级 GHSA [GH:advisories]。

实际风险主要在使用方式：不要从不可信来源复制 TeX 宏包或编译含恶意 shell escape 的论文源码；下载模板应优先用 GitHub Releases、校内镜像或 README 列出的可信入口 [GH:readme]。

## 学习价值

学习价值很高。对 USTC 学生，它直接服务毕业；对想学 TeX 工程的人，它也是一个好样本：如何把学校格式、class 设计、文档、示例、回归测试、release 和用户反馈组织成长期维护项目。

更广义地说，ustcthesis 展示了学生社群如何把重复痛苦沉淀成公共基础设施。利他者，亦自利也。