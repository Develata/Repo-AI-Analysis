---
title: "The Rust Programming Language (TRPL)"
created: 2026-05-14
updated: 2026-05-14
type: repository-analysis
repo_url: https://github.com/rust-lang/book
category: coding-languages-guides
tags:
  - rust
  - book
  - official
  - reference
  - beginners
primary_language: Rust
license: Apache-2.0 / MIT
stars: 17771
forks: 4011
last_checked: 2026-05-14
last_verified: 2026-05-14
evidence: "code review + docs review + community reports"
archived_reason: ""
successor: ""
docker_support: false
gpu_required: false
estimated_cpu: "N/A"
estimated_memory: "N/A"
estimated_storage: "N/A"
status: active
sharing_candidate: true
ratings:
  capability: 5
  usability: 4
  performance: 5
  code_quality: 4
  documentation: 4
  community: 4
  maturity: 5
  extensibility: 3
  security: 5
  recommendation: 5
overall_score: 4.4
sources:
  - "[GH] https://github.com/rust-lang/book"
  - "[Docs] https://doc.rust-lang.org/book/"
  - "[NS] https://nostarch.com/rust-programming-language-3e"
  - "[Brown] https://rust-book.cs.brown.edu/"
---

# The Rust Programming Language (TRPL)

> Rust 语言的官方权威教程——由 Rust 核心团队成员撰写，No Starch Press 出版，Rust 社区通称 "The Book"。
>
> **状态**: `active` · **总分**: 4.4/5 · **推荐度**: 5/5

## 一句话总结

对于**任何学习或使用 Rust 的人**，这是唯一不可绕过的资源——由 Steve Klabnik（前 Rust 文档团队负责人）、Carol Nichols（Rust 核心团队成员）和 Chris Krycho 撰写，覆盖从安装到高级特性的完整 Rust 语言教学，同时可作为日常参考手册。Rust 社区通称 "The Book"，是公认的 Rust 学习第一站 [Docs] [NS]。

## 总体评价

本项目是 Rust 语言官方教程 `The Rust Programming Language`（TRPL）的源码仓库，由 `rust-lang` 组织维护 [GH]。它不仅仅是一本在线教程——它有三版印刷实体书（No Starch Press 出版，最新第三版 2026 年 2 月发行，ISBN 9781718504448），是 Rust 生态中**事实上的标准教材** [NS]。

与 Brown 大学的交互增强版（`cognitive-engineering-lab/rust-book`）相比，官方 TRPL 是**内容权威性和生态定位的锚点**——Brown 版可以更互动、更可视化，但官方版是 Rust 语言团队认可的「正典」，内容与 Rust 语言规范保持同步，随 Rust Editions 周期性大修 [Brown]。

项目成熟度极高：10 年历史、17,771 stars、4,011 forks、6,264 commits。构建极简（只需 mdBook），CI 完善（rustfmt + dprint + spellcheck + 代码示例测试），贡献流程清晰。唯一的「缺点」是贡献管道慢——因为要与印刷版保持同步，非勘误性贡献可能等待数月甚至数年 [GH]。

**适合**：所有 Rust 初学者（首选入门教材）、需要权威 Rust 参考的有经验开发者、Rust 教学者、想为 Rust 语言文档做贡献的人。

**不适合**：追求纯交互式学习体验的人（用 Brown 版）、只需要快速代码示例的人（用 Rust by Example）。

> 一句话：这是 Rust 世界的「圣经」——你未必从头到尾读完，但你书架上一定有它，你的浏览器书签里一定有它，你早晚会查阅它。

## 推荐度：5/5

**定位**：需要**系统学习或权威参考 Rust 语言**的任何人。这不是「最好的」Rust 教材——在纯学习体验上 Brown 版更优——但这是最**不可替代**的 Rust 教材。

**为什么是 5/5**：

2. **不可替代的权威性**：作者包括 Rust 核心团队成员（Steve Klabnik 曾领导文档团队，Carol Nichols 曾是核心团队成员），并有来自 Rust 社区的广泛贡献。内容与 Rust 语言规范同步，由 Rust 团队正式维护 [Docs] [NS]。
2. **覆盖完整**：从安装、Cargo、基本语法到所有权、生命周期、泛型、trait、测试、并发、智能指针、高级特性、异步编程。三个实战项目（猜数字游戏、命令行工具、多线程 Web 服务器）贯穿全书 [Docs]。
3. **印刷版背书**：No Starch Press 出版第三版（2026 年 2 月），ISBN 9781718504448。印刷版的存在意味着内容经过专业编辑、技术审校和多轮校对，质量远超纯社区驱动的开源文档 [NS]。
4. **多形式分发**：在线阅读（stable/beta/nightly 三个渠道，https://doc.rust-lang.org/book/）、离线阅读（`rustup doc --book`）、印刷版、电子版。真正做到了 Everywhere [Docs]。
5. **翻译生态系统**：多个社区翻译项目进行中（中、日、韩、俄等），由官方 `Translations` label 统一追踪。虽然 mdBook 多语言支持仍在开发中，但翻译准备工作已在进行 [GH]。

**唯一的不适合场景**：如果你是一个纯自学的初学者，在所有权/借用/生命周期章节卡住了——这时候 Brown 版的交互测验和 Aquascope 可视化比官方版的纯文字描述更有效。建议：先用 Brown 版学习核心概念，再用官方版作为权威参考。

## 优势

1. **权威性**——Rust 核心团队维护，内容与 Rust 语言规范保持同步。印刷版经过专业编辑和三方审校 [Docs] [NS]。
2. **内容极其成熟**——10 年打磨，6,264 commits，三版印刷实体书。每一个章节都是 Rust 社区集体智慧的结晶 [GH] [NS]。
3. **构建极简**——只需 mdBook，无其他依赖。`mdbook build` 即可生成完整站点。CI 管线完善（rustfmt + dprint + spellcheck + `mdbook test`）[GH]。
4. **多形式分发**——在线（三个 Rust 发布渠道）、离线（`rustup doc --book`）、印刷、电子书。无可比拟的可达性 [Docs]。
5. **翻译生态**——活跃的社区翻译项目，由官方追踪。中、日、韩等主要语言均有翻译 [GH]。
6. **贡献流程清晰**——CONTRIBUTING.md 详细，style-guide.md 定义写作规范，ADMIN_TASKS.md 指导维护者。`E-help-wanted` label 指引新手贡献 [GH]。

## 劣势

1. **贡献节奏慢**——为与印刷版同步，非勘误性贡献可能等待数月到数年（下一次 Rust Edition）才能被合并。对新贡献者的耐心是考验 [GH]。
2. **纯文本，无交互**——没有测验、没有代码可视化、没有互动练习。与 Brown 版相比，学习体验偏被动。官方 TRPL 首页直接推荐了 Brown 版作为「更互动的学习体验」[Docs]。
3. **内容更新滞后**——因为印刷版约束，在线版内容更新必须等待印刷版定稿。`main` 分支的修复到 `stable` 上线需要经过 nightly → beta → stable 的发布流程 [GH]。
4. **issue 积压**——426 open issues，其中许多是改进建议而非 bug。由于非 Rust Edition 期间只接受勘误，大量 suggestion 类 issue 长期积累 [GH]。
5. **所有权教学方式传统**——官方版 Chapter 4 以「规则」为中心（"你只能有一个可变引用"），缺乏 Brown 版的「权限模型」心智框架和可视化支持。对自学初学者不够友好 [Docs] [Brown]。

---

## 适合什么场景

- **Rust 入门的第一站**：Rust 社区共识——先读 TRPL 前 5-6 章获取基础理解，然后动手写代码
- **作为权威参考手册**：遇到不确定的语法或语义，查 TRPL。它是比 Stack Overflow 更可靠的 Rust 知识来源
- **Rust 教学**：TRPL 的组织结构（从简单到复杂，三个实战项目贯穿）天然适合教学设计
- **离线/无网环境**：`rustup doc --book` 在安装 Rust 时即内置，不依赖网络
- **想为 Rust 文档做贡献**：CONTRIBUTING.md + style-guide.md + `E-help-wanted` issues 提供了清晰的入门路径
- **购买正版 Rust 教材**：No Starch Press 印刷版支持出版商和作者，适合机构采购或个人收藏

## 不适合什么场景

- **纯交互式学习**：Brown 版有测验、可视化、高亮批注——如果互动对你很重要，直接用 Brown 版
- **所有权/借用概念困难**：Brown 版的「权限模型」+ Aquascope 可视化比纯文字描述更直观
- **需要快速代码示例**：Rust by Example 比 TRPL 更适合「看代码学 Rust」
- **中文读者**：虽然社区有翻译，但质量参差。英文阅读能力是充分利用 TRPL 的前提
- **已熟悉 Rust、只想深入特定主题**：《Rust for Rustaceans》、《Zero to Production in Rust》等进阶书籍更合适

## 与类似项目对比

| 项目 | 定位 | 相对本项目 |
|------|------|-----------|
| [Brown Experimental](https://github.com/cognitive-engineering-lab/rust-book) | TRPL 的交互增强 fork | 有测验、Aquascope 可视化、高亮批注、自定义所有权章节。学习体验更好，但非官方、非印刷版 |
| [Rust by Example](https://github.com/rust-lang/rust-by-example) | 代码驱动的 Rust 学习 | 侧重"看代码学 Rust"，无系统讲解。与 TRPL 互补——先读 TRPL 理解概念，再查 RbE 看代码 |
| [Rustlings](https://github.com/rust-lang/rustlings) | 小型 Rust 练习集 | 侧重动手编码，非教材。与 TRPL 互补 |
| [Comprehensive Rust](https://github.com/google/comprehensive-rust) | Google 的 Rust 培训（4 天） | 面向有 C++/Java 背景的工程师，节奏更快。适合企业培训，不适合零基础自学 |
| [Rust Reference](https://doc.rust-lang.org/reference/) | Rust 语言参考手册 | 不是教材，是语言规范。TRPL 更侧重教学，Reference 更侧重精确定义 |
| [The Cargo Book](https://doc.rust-lang.org/cargo/) | Cargo 包管理器文档 | 与 TRPL 互补——TRPL 教语言，Cargo Book 教构建工具 |

## 个人主页 sharing 候选

**是**。满足四个标准：

- **novelty**：虽然不是新项目，但「Rust 官方教材 10 年进化史」或「TRPL vs Brown 版：该用哪个？」都是独特的分享角度
- **maturity**：极高。10 年历史，三版印刷，17.7k stars，无可争议的成熟度
- **practicality**：对所有 Rust 学习者有直接实用价值
- **shareability**：「每个 Rust 程序员都读过的一本书」——天然的高传播叙事

---

## 它能做什么

评分 5/5。

TRPL 覆盖 Rust 语言学习的整个生命周期：

| 阶段 | 覆盖内容 | 说明 |
|------|---------|------|
| 入门（Ch1-3） | 安装、Hello World、Cargo、基本语法 | 零基础可读，30 分钟可跑通第一个程序 [Docs] |
| 核心概念（Ch4-10） | 所有权、结构体、枚举、错误处理、泛型、trait、生命周期 | 覆盖 Rust 最独特和最难的概念。约 200 页 [Docs] |
| 实战项目（Ch2, 12, 20） | 猜数字游戏、grep 命令行工具、多线程 Web 服务器 | 三个项目由浅入深，覆盖 CLI、网络、并发 [Docs] |
| 进阶（Ch11-19） | 测试、I/O、函数式、智能指针、并发、OOP、模式匹配、高级特性 | 覆盖 Rust 的深度特性 [Docs] |
| 异步（Ch20+） | async/await、Future、tokio | 第三版新增章节（Chris Krycho 撰写）[Docs] [NS] |
| 附录（A-G） | 关键字、运算符、可派生 trait、版本、翻译 | 快速参考 [Docs] |

**功能缺失**：
- 无交互式测验或练习（官方推荐 Brown 版弥补）
- 无代码可视化（静态文本和代码示例）
- 无学习进度追踪
- 无内置搜索（依赖浏览器或 mdBook 的搜索功能）

**注**：capability 评 5/5 是因为作为一本教材，它覆盖了 Rust 语言学习所需的**全部主题**，且多形式分发（在线 + 离线 + 印刷）。缺失的交互功能不是「教材」维度的缺陷——那是 Brown 版的加分项，不是 TRPL 的扣分项。

## 运行环境与资源占用

评分 5/5。

| 场景 | CPU | 内存 | 存储 | 说明 |
|------|-----|------|------|------|
| 在线阅读 | 任意 | 任意 | 0（浏览器缓存） | 纯静态站点，零 JS 交互，极快 |
| 离线阅读 | 任意 | 任意 | Rust 安装自带 | `rustup doc --book` 无需网络 |
| 本地构建 | 低 | ~500MB（Rust 编译） | ~100MB（源码 + 构建产物） | 只需 mdBook，无其他依赖 |
| 印刷版 | N/A | N/A | 实体书约 500 页 | 从 No Starch Press 或 Amazon 购买 [NS] |

- **运行时**：纯静态 HTML（mdBook 渲染），页面加载极快。无第三方 JS，仅 mdBook 内置的搜索和键盘导航脚本
- **操作系统**：任意有浏览器的 OS。离线版随 `rustup` 支持所有 Rust 支持平台
- **Docker**：不需要。如需自托管，`mdbook build` 生成静态文件放入任意 Web 服务器即可
- **GPU**：不需要
- **外部依赖**：在线阅读零依赖。本地构建只需 mdBook（`cargo install mdbook`）[GH]

性能评 5/5：极轻量。纯静态 HTML（仅 mdBook 内置搜索脚本），比 Brown 版的 JS 交互层快得多，是当前最快的 Rust 教材。

## 上手体验

评分 4/5。

| 维度 | 体验 |
|------|------|
| 在线阅读 | 零配置。访问 `doc.rust-lang.org/book/` 即开始。键盘快捷键完备（← → S ?）[Docs] |
| 离线阅读 | 已安装 Rust 则零配置。`rustup doc --book` 在本地浏览器打开 |
| 印刷版 | 从 No Starch Press / Amazon 购买，约 500 页实体书 [NS] |
| 本地构建 | 简单。`cargo install mdbook && mdbook build`。比 Brown 版简单得多（无 pnpm/Miri/自定义预处理器）[GH] |

**评 4/5 而非 5/5 的原因**：缺少交互式学习元素。纯文本阅读对自学者不如有测验 + 可视化的 Brown 版高效。对于被所有权概念卡住的初学者，可能需要额外查阅 Brown 版或其他资源（Rustlings 练习等）才能突破。这是学习体验的瓶颈，而非使用体验的瓶颈。

**评 4/5 而非 3/5 的原因**：对于有经验的程序员，前 5-6 章可以在 2-3 小时内读完并建立 Rust 的基本心智模型。结构清晰，示例典型，文笔流畅。

## 代码质量

评分 4/5。

这是一个 mdBook 项目（Markdown + 少量 Rust 工具），评估维度需调整：

| 维度 | 评价 | 说明 |
|------|------|------|
| 内容结构 | 优秀 | `src/` 按章节组织，`listings/` 独立管理可编译代码示例，`nostarch/` 管理印刷版快照。多版本归档清晰（`first-edition/`、`2018-edition/`、`second-edition/`）[GH] |
| 构建工具链 | 极简 | 只需 mdBook。不需要自定义预处理器、不需要 JS 工具链、不需要 nightly Rust [GH] |
| CI | 完善 | GitHub Actions：rustfmt（Rust 代码格式）+ dprint（Markdown 格式）+ spellcheck + `mdbook test`（代码示例编译和运行测试）。CI badge 绿色 [GH] |
| 代码示例测试 | 有 | `mdbook test` 验证所有代码示例可编译、可通过测试 |
| 贡献辅助 | 良好 | `E-help-wanted` label 标记新手友好 issue。style-guide.md 定义写作规范。dprint 自动格式化 Markdown [GH] |
| 可维护性 | 优秀 | 官方 rust-lang 组织维护，非 fork。无 upstream 同步问题。提交历史清晰，commit 信息规范 |

扣分原因：评分 4/5 而非 5/5，因为项目没有自动化测试来验证**教学内容的正确性**（概念解释、措辞准确性等）。`mdbook test` 验证代码示例可编译可运行，spellcheck 和 dprint 保证格式规范，但对「这个概念解释是否准确」缺乏自动化验证。这并非缺陷——内容审校依赖人工（Rust 核心团队 + No Starch 专业编辑），而非自动化测试环境所能替代。

## 可扩展性

评分 3/5。

TRPL 是一本 mdBook 教材，不是可扩展平台。扩展主要通过 fork 实现：

| 扩展方式 | 可行性 | 说明 |
|----------|--------|------|
| Fork + 自定义 | ✅ 最佳路径 | MIT/Apache-2.0 许可。Brown 版是最成功的 fork 案例——增加了测验、可视化、自定义章节 [Brown] |
| 翻译 | ✅ 可行（进行中） | 官方 `Translations` label 追踪，多个语言进行中。合并等待 mdBook 多语言支持（[mdBook#5](https://github.com/rust-lang/mdBook/issues/5)）[GH] |
| 添加章节 | ⚠️ 贡献管道慢 | 非勘误性内容变更需等待下一次 Rust Edition（可能数年）[GH] |
| 修改内容结构 | ⚠️ 受印刷版约束 | 在线版需与印刷版保持一致，重大结构调整机会极少 [GH] |

「有扩展点但有限，深度定制需 fork」——评分 3/5。这与 Brown 版得分相同，因为两者的扩展性是等价的——都是 mdBook 项目，核心扩展方式都是 fork + 自定义。区别在于官方的贡献管道更受约束（印刷版同步），fork 的必要性更高。

## 文档质量

评分 4/5。

这里的「文档」有两层含义：

| 层次 | 评价 | 说明 |
|------|------|------|
| **产品本身即为文档**（教材质量） | 5/5 | Rust 语言最权威的教材。内容经过 10 年打磨、三次印刷版迭代、Rust 核心团队审校。文笔清晰、结构合理、示例典型 [Docs] [NS] |
| **项目开发文档**（贡献指南） | 4/5 | CONTRIBUTING.md 详细（贡献流程、格式工具、翻译指引），style-guide.md 定义了写作规范，ADMIN_TASKS.md 指导维护者。唯一扣分：README 简短，没有架构文档 [GH] |

综合评分 4/5：产品端 5/5，项目端 4/5。加权偏向产品端，因为 99% 的用户是读者而非贡献者。

与 Brown 版（同样 4/5）对比：官方版的教材质量和项目文档都更优，但得分相同的原因是——Brown 版的教材同样优秀（只是方式不同），两者在这一维度的可比性不强。

## 社区与成熟度

| 维度 | 评分 | 说明 |
|------|------|------|
| 社区活跃度 | 4/5 | 17,771 stars / 4,011 forks，Rust 社区最知名的仓库之一。核心维护团队稳定（rust-lang 组织，多位 Rust 团队成员参与）。翻译社区活跃。但贡献管道受印刷版约束，非勘误 PR 响应慢。426 open issues 部分长期积压 [GH] |
| 成熟度 | 5/5 | 2015 年 12 月创建，10 年+ 历史。三版印刷实体书（2018、2023、2026）。内容随 Rust Editions 周期性大修（约每 3 年），中间只接受勘误。极致稳定——不可替代 [GH] [NS] |

**社区评 4/5 而非 5/5 的原因**：17.7k stars 和官方身份自然带来大量关注，但「active community engagement」和「passive user base」不是一回事。426 open issues 和「只接受勘误」的政策意味着社区贡献者的体验是：打开一个改进 PR → 被告知等待下一个 Rust Edition → 数月/数年无进展。这不是一个「community-driven」项目——它是一个「official-maintained」项目，这既是优势也是限制。

**成熟度评 5/5 的原因**：无可挑剔。10 年历史 + 三版印刷 + 官方身份 + Rust Editions 对齐的发布节奏。它是 Rust 生态中最成熟的文档项目，没有之一。

## 安全与风险

评分 5/5。

作为纯静态站点 + rust-lang 官方基础设施：

- **服务端**：托管于 Rust 官方基础设施（doc.rust-lang.org），由 Rust 基金会维护
- **客户端**：纯静态站点（mdBook 渲染，含少量 JS 用于搜索和键盘导航），无用户数据、无认证、无数据库。攻击面接近于零
- **依赖健康**：构建仅依赖 mdBook（Rust 官方工具），供应链攻击面极小
- **已知 CVE**：无
- **许可证**：Apache-2.0 / MIT 双许可，使用和 fork 无法律风险 [GH]

安全评 5/5 的原因：纯文本 + 无交互 = 天然安全。与 Brown 版（也是 5/5）相比，官方版甚至更安全——没有 JavaScript 意味着没有 XSS 风险。但这种评分对教材类项目的实际参考价值有限——教材天然安全，不是因为安全设计好，而是因为没有可攻击面。

## 学习价值

极高。即使不用于学习 Rust，以下方面也值得研究：

1. **开源文档的最佳实践**：如何管理一个 10 年历史的、有印刷版同步约束的开源教材项目？CONTRIBUTING.md + style-guide.md + `E-help-wanted` label + dprint 自动格式化的组合是一个成熟的贡献者体验设计案例 [GH]。
2. **多形式分发策略**：在线（多版本）+ 离线（嵌入 Rust 安装）+ 印刷（No Starch Press）+ 电子书。如何设计一个内容源、多渠道产出的文档工程管线？TRPL 是一个范例。
3. **Rust Editions 对齐的文档更新模型**：每 3 年一次大修，中间只接受勘误。这是一种权衡——牺牲贡献即时性换取内容稳定性和印刷版可行性。
4. **Fork 作为创新试验场**：TRPL → Brown 版的分叉路径展示了「官方权威版本 + 社区实验 fork」的共生模式——官方版保持稳定和权威，fork 承担交互式教学的实验风险。这种模式对编程语言文档项目有普遍参考价值。
