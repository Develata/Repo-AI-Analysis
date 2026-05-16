---
title: Bun
created: 2021-04-14
updated: 2026-05-16
type: repository-analysis
repo_url: https://github.com/oven-sh/bun
category: dev-tools
tags:
  - javascript
  - typescript
  - runtime
  - bundler
  - package-manager
  - zig
  - nodejs
previous_repo: ""
successor: ""
primary_language: "Zig, C++, TypeScript, Rust"
license: MIT (Bun 自身) + LGPL-2 (JavaScriptCore) + 各链接库各自许可
stars: 90755
forks: 4521
last_checked: 2026-05-16
last_verified: 2026-05-16
evidence: docs review + community signals
archived_reason: ""
docker_support: true
gpu_required: false
estimated_cpu: 2-4 cores
estimated_memory: 64MB-512MB (远低于 Node.js 同类场景)
estimated_storage: ~22MB (最小二进制) / ~534MB (开发仓库)
status: active
sharing_candidate: true
ratings:
  capability: 5
  usability: 4
  performance: 5
  code_quality: 3
  documentation: 4
  community: 4
  maturity: 4
  extensibility: 4
  security: 3
  recommendation: 3
overall_score: 3.9
sources:
  - "[GH] https://github.com/oven-sh/bun"
  - "[GH:API] https://api.github.com/repos/oven-sh/bun"
  - "[GH:releases] https://github.com/oven-sh/bun/releases"
  - "[Docs] https://bun.com/docs"
  - "[Docs:compatibility] https://bun.com/docs/runtime/nodejs-apis"
  - "[Blog] https://bun.com/blog/bun-v1.3.13"
  - "[License] https://bun.com/docs/project/license"
  - "[Security] https://github.com/oven-sh/bun/blob/main/SECURITY.md"
  - "[API:contributors] https://api.github.com/repos/oven-sh/bun/contributors"
  - "[Web] https://www.npmjs.com/package/bun"
---

# Bun

> Bun v1.3.14（最新稳定版，2026-05-13 发布），集 JavaScript 运行时、打包工具、测试运行器和包管理器于一体的 All-in-One 工具链。单个 `bun` 可执行文件替代 `node` + `npm` + `jest` + `webpack`。稳定版核心运行时以 Zig 编写（基于 Apple JavaScriptCore），main 分支正在 Rust 重写中（PR #30412 已合入）[GH][GH:releases]。

---

## 一句话总结

面向 **JavaScript/TypeScript 全栈开发者**的 All-in-One 工具链：单个 `bun` 二进制文件替代 Node.js 运行时 + npm 包管理 + Jest 测试 + webpack 打包，在官方基准测试中全面快于传统工具链，适合新项目和可接受部分 Node.js 兼容性风险的迁移场景。

## 总体评价

Bun 是近年来 JavaScript 工具链领域最有影响力的项目之一。其核心设计——将运行时、包管理器、打包器、测试运行器整合到单个原生二进制中——显著缓解了 Node.js 生态中「安装 1000 个 node_modules 才能开始工作」的工具链碎片化问题。官方基准测试显示性能优势突出：进程启动 4× 快于 Node.js，包安装最高 30× 快于 npm，v1.3.13 的流式安装将大仓库内存占用降低 17× [Blog]。

**适合**：新启动的 TypeScript 项目；需要快速包安装和测试反馈的 CI/CD 管线；对 Node.js 兼容性要求不极端（不依赖大量原生 C++ addon）的场景；用 VitePress 等构建工具的静态站点。

**不适合**：重度依赖 Node.js 原生模块（C++ addon）的遗留项目；需要 100% Node.js 兼容性的生产环境；Bun 尚未完全支持的 Node.js API 场景（需逐个检查兼容性表）。

**一句话**：在 JavaScript 工具链领域，Bun 在性能基准测试中领跑 All-in-One 方案类别；但 6,911 个 open issue、尚未 100% 的 Node.js 兼容性、以及 main 分支正在进行的 Rust 重写是生产迁移的关键风险。

## 推荐度：3/5

**角色定位**：面向 JavaScript/TypeScript 开发者——特别是新项目启动者、CI/CD 管线优化者、对工具链速度敏感的全栈工程师。

推荐度 3/5 的决定性因素是 **Develata 的技术栈不匹配**：Develata 主力语言为 Rust，JS/TS 仅在个人主页（VitePress）和少量脚本中使用。Bun 在 JS 生态中的价值极高（对 JS 开发者可达 4-5 分），但对以 Rust 和数学研究为主的 Develata 而言，受益有限。VitePress 构建加速是唯一直接受益点。

**核心痛点**：(1) 6,911 个 open issue——虽然部分来自「Node.js 兼容性持续追赶」，但这个数量级说明产品在边缘场景的成熟度仍有差距；(2) Node.js 兼容性非 100%，迁移可能踩坑；(3) 核心维护者 Jarred-Sumner 贡献量（8,262）远超其他人，关键人物风险存在；(4) main 分支正在进行的 Rust 重写（PR #30412，2026-05-14 合入）引入了语言层面和稳定性的不确定性，虽然当前稳定版仍以 Zig 构建。

**结论**：了解 Bun 的价值主张和生态位置**是必要的技术视野**，但无需主动迁移现有工作流。如果未来 VitePress 构建速度成为瓶颈，Bun 是首选的 npm/pnpm 替代。

## 优势

1. **速度领先** — 进程启动 4× 快于 Node.js，包安装最高 30× 快于 npm，测试执行显著加速。v1.3.13 引入的流式安装和并行测试（`--parallel`）将性能优势进一步扩大 [Blog]
2. **All-in-One 设计** — 单个二进制文件替代 `node` + `npm`/`yarn`/`pnpm` + `jest`/`vitest` + `webpack`/`esbuild`，消除工具链碎片化
3. **TypeScript/JSX 原生支持** — `.ts`、`.tsx` 文件直接执行，无需额外转译配置，开发体验极简
4. **内建功能丰富** — SQLite、Redis、S3、WebSocket、Cron、FFI、HTMLRewriter 等 API 内建在运行时中，无需第三方包
5. **文档质量高** — bun.com/docs 覆盖全面，每次 release 附带详细博客文章，提供 LLM 友好的文档索引（`bun.com/docs/llms.txt`）[Docs]
6. **五年持续开发** — 2021 年创建至今持续活跃，已发布至 v1.3.x（latest v1.3.14），每周 npm 下载量超 200 万——已从实验项目成长为有实质用户基础的工具

## 劣势

1. **Node.js 兼容性非 100%** — 仍在追赶中，依赖原生 C++ addon 或冷门 Node.js API 的项目可能遇到兼容性问题 [Docs:compatibility]
2. **6,911 个 open issue** — 高 issue 数量反映边缘场景和兼容性问题的长期积压，部分 issue 可能长期未得到响应 [GH:API]
3. **核心维护者集中** — Jarred-Sumner 贡献 8,262 次，远超第二名 dylan-conway（1,004 次）和 bot robobun（859 次），关键人物风险显著 [API:contributors]
4. **许可证复杂性** — Bun 自身采用宽松许可，但静态链接的 JavaScriptCore 使用 LGPL-2，对嵌入式分发和闭源商业化有限制 [License]
5. **非 JS 生态无直接价值** — 对 Rust/Python/Go 开发者不提供直接生产力提升
6. **Windows 支持相对较新** — 初始专注 macOS/Linux，Windows 支持虽已推出但成熟度低于 Unix 平台
7. **main 分支不稳定** — PR #30412 的 Rust 重写已合入 main（2026-05-14），稳定版仍为 Zig 但未来技术栈和 API 可能存在变动

## 适合什么场景

- TypeScript 全栈项目的新建和开发
- CI/CD 管线中的 `npm install` 加速（直接替代 npm/pnpm）
- VitePress、Astro 等静态站点构建工具的运行时加速
- 需要內建 SQLite/Redis/Cron 的轻量级后端服务
- 追求极致开发体验和工具链简洁性的个人项目
- 学习现代 JavaScript 工具链的工程设计参考

## 不适合什么场景

- 重度 Node.js 遗留项目（大量 C++ addon、冷门 API 依赖）
- Develata 主力工作流（Rust 项目、数学研究、随机图模拟）——直接受益有限
- 对 LGPL-2 许可证敏感的嵌入式或闭源商业分发场景
- 需要 100% Node.js 生产环境兼容性、零风险的保守迁移场景
- Windows 独占开发环境（支持存在但成熟度不如 Unix）

## 与类似项目对比

| 项目 | 定位 | 相对本项目 |
|------|------|-----------|
| [Node.js](https://github.com/nodejs/node) | 行业标准 JS 运行时，V8 引擎 | 兼容性最全、生态最大，但工具链碎片化，性能落后 Bun |
| [Deno](https://github.com/denoland/deno) | 安全优先的现代 JS/TS 运行时 | 同样追求现代化，但定位为「安全的 Node.js 替代」而非 All-in-One；包管理更接近 URL import 模式 |
| [pnpm](https://github.com/pnpm/pnpm) | 高效的 Node.js 包管理器 | 仅做包管理，但磁盘效率和严格模式在 monorepo 场景优于 Bun；非运行时 |
| [esbuild](https://github.com/evanw/esbuild) | 极速 JS/TS 打包器 | 打包速度接近 Bun，但不含运行时和包管理器；更专注单一职责 |

> Bun vs Deno：两者都是 Node.js 的现代替代方案，但 Bun 侧重「全工具链整合 + 极致速度」，Deno 侧重「安全默认 + Web 标准」。Bun 的包管理器和测试运行器集成度更高；Deno 的权限模型更安全。

## 个人主页 sharing 候选

**候选：是。**

理由：(1) **新颖性高** — All-in-One JavaScript 工具链的工程实践值得分享；(2) **实用性强** — 对 JS/TS 开发者是直接生产力提升工具；(3) **叙事清晰** — 「如何用一个二进制文件替代半个 node_modules」是极佳的分享主题；(4) **成熟度可接受** — 5 年历史、v1.3.x 版本、200 万周下载量，已非实验项目。

分享时需标注：(1) 6,911 open issue 的事实；(2) Node.js 兼容性非 100%；(3) 许可证复杂性（LGPL-2 的 JSC）。

## 它能做什么

**JavaScript/TypeScript 运行时**：以 Zig 编写，基于 Apple JavaScriptCore 引擎 [Docs]。作为 Node.js 的 drop-in 替代，支持直接执行 `.js`、`.ts`、`.jsx`、`.tsx` 文件。内置 Web 标准 API（`fetch`、`WebSocket`、`ReadableStream`、`URL`）和 Node.js 兼容层（`fs`、`path`、`http` 等）[Docs]。

**包管理器**：`bun install`、`bun add`、`bun remove`、`bun update`、`bun publish`、`bun audit` 等完整命令集。支持 workspace、`.npmrc`、overrides、global cache。实测安装速度最高 30× 快于 npm [Docs][GH]。v1.3.13 引入流式下载安装，大仓库内存占用降低 17× [Blog]。

**测试运行器**：`bun test` 兼容 Jest API，支持 TypeScript、snapshot、DOM testing、watch mode、coverage（LCOV）、JUnit 输出。v1.3.13 新增 `--isolate`（文件级全局环境隔离）、`--parallel`（多进程并行执行）、`--shard`（CI 矩阵分片）、`--changed`（仅运行受 git 变更影响的测试）[Blog]。

**打包器**：`Bun.build` 和 `bun build` 命令，支持 JS/TS/JSX/CSS 打包、code splitting、插件系统、HTML imports。生成浏览器和服务器端 bundle。

**转译器**：自动将 TypeScript/JSX 转译为 JavaScript，零配置。

**内建 API**：`Bun.serve`（HTTP 服务器）、`bun:sqlite` / `Bun.sql`（SQLite 客户端）、`Bun.redis`（Redis 客户端）、`Bun.s3`（S3 客户端）、`bun:ffi`（调用原生 C 库）、`Bun.cron`（定时任务）、`Bun.Glob`（文件匹配）、`Bun.TOML` / `Bun.YAML`（配置文件解析）、`HTMLRewriter`（HTML 流式转换）等 [Docs]。

## 运行环境与资源占用

| 场景 | CPU | 内存 | 存储 | 说明 |
|------|-----|------|------|------|
| 最小（CLI 运行） | 2 cores | 64 MB | ~22 MB | 单文件二进制，基础运行时 |
| 日常开发 | 2-4 cores | 128-512 MB | ~22 MB + 项目依赖 | 替代 Node.js 的常规开发工作 |
| CI/CD / 并行任务 | 4+ cores | 256 MB-1 GB | ~22 MB + 项目依赖 | 并行测试、打包峰值 |

- **运行时**：单一原生二进制文件，Zig + JavaScriptCore
- **操作系统**：Linux (x64/arm64, kernel 5.6+), macOS (x64/Apple Silicon), Windows (x64/arm64) [GH]
- **Docker**：支持，官方提供 `oven/bun` Docker 镜像
- **GPU**：不需要
- **外部依赖**：无——`curl -fsSL https://bun.sh/install | bash` 安装，或 `npm install -g bun` [GH]

**性能评价**：5/5。Bun 在启动速度、包安装速度、测试执行速度、内存占用四个维度均显著优于 Node.js 生态传统方案，性能优势有官方基准测试和版本发布博客的持续验证 [Blog]。v1.3.13 的流式安装和并行测试将性能领先进一步扩大。评分反映的是相对于同类工具（Node.js + npm + Jest + webpack）的资源效率优势，非绝对意义上的「零开销」。注意：性能数据主要来自官方测试，独立第三方基准对比相对有限。

## 上手体验

**安装**：`curl -fsSL https://bun.sh/install | bash`，约 30 秒内完成。或通过 `npm install -g bun` 安装 [GH]。

**首次体验**（Node.js 开发者视角）：

```bash
bun init                    # 初始化项目，生成 package.json + tsconfig.json
bun run index.ts            # 直接执行 TypeScript 文件，零配置
bun add express             # 安装包（比 npm install 快 10-30×）
bun test                    # 运行测试（Jest 兼容）
```

从零到运行第一个 TypeScript HTTP 服务器（`Bun.serve`）：< 5 分钟。

**入门时间**：
- 安装到 Hello World：~2 分钟
- 理解核心功能并用 Bun 替代 npm：~15 分钟
- 迁移现有 Node.js 项目并处理兼容性问题：取决于项目复杂度，简单项目 < 1 小时，复杂项目可能数天

**学习曲线**：对 Node.js 开发者极低——CLI 命令高度对应（`bun run` ≈ `node`，`bun install` ≈ `npm install`，`bun test` ≈ `jest`），TypeScript 原生支持省去配置步骤。真正的障碍在于 Node.js 兼容性边界——何时遇到不支持的 API 或行为差异是不确定的。评分 4/5 反映「< 1 小时获得价值」，扣除因兼容性问题导致的不确定性。

## 代码质量

**代码库规模**：~534 MB 开发仓库，Zig + C++ + TypeScript + Rust 多语言混合 [GH:API]。稳定版核心运行时以 Zig 编写，JavaScriptCore 集成层为 C++，CLI 和部分工具链使用 TypeScript。**重要变更**：main 分支已于 2026-05-14 合入 Rust 重写的 PR #30412（6,755 commits），这意味着未来版本的技术栈将发生根本性变化，当前代码库处于 Zig→Rust 迁移过渡期 [GH]。

**CI/CD**：每 commit 自动发布 canary build，稳定版发布附带详细博客文章和 28 个平台二进制文件 [GH:releases]。`robobun` bot（859 次贡献）负责自动化任务 [API:contributors]。

**贡献者结构**：Jarred-Sumner（8,262 次贡献）占绝对主导，dylan-conway（1,004）、robobun bot（859）、nektro（704）等辅助。每 release 有 4-23 名贡献者被感谢，但核心决策高度集中。

**测试覆盖**：自带的 `bun test` 用于项目自身测试，CI 在每次 commit 运行。但未公开具体的测试覆盖率数据、测试套件规模和 CI 通过率。

**issue 积压**：6,911 open issues [GH:API]——代码质量评估中最显著的负信号。其中包含大量 Node.js 兼容性报告（行为差异），不完全等同于 bug，但积压规模仍说明质量维护能力承压。

**架构与迁移风险**：单体二进制设计降低系统复杂度，但正在进行的大规模语言迁移（Zig→Rust）增加了短期内的代码稳定性和可维护性风险。过渡期可能出现双语言维护成本、CI 复杂度上升、以及社区贡献者的适应成本。

评分 3/5：积极面（活跃 CI、定期 release、每 commit canary）被多重负面信号压制——(1) 6,911 issue 积压且无公开覆盖率数据；(2) 贡献者高度集中；(3) 多语言混合代码库提升贡献门槛；(4) 正在进行的 Zig→Rust 迁移引入额外的不确定性。3 反映「代码可读但结构面临变动，测试覆盖证据不足，存在显著可维护性风险」。

## 可扩展性

**插件系统**：`Bun.plugin` API 支持自定义模块加载器和解析器，可用于虚拟模块、非标准文件格式加载等场景。

**原生扩展**：`bun:ffi` 允许直接调用 C ABI 函数，无需 node-gyp 编译步骤——比 Node.js 原生 addon 开发更轻量。Node-API（napi）兼容层支持部分现有原生模块。

**构建输出**：`bun build --compile` 生成独立可执行文件，可脱离 Bun 运行时分发。

**包管理**：完整支持 npm 生态和 workspace，`.npmrc` 配置兼容。

**局限性**：与 webpack 的 loader/plugin 生态或 esbuild 的 plugin API 相比，Bun 的插件系统仍较基础。深度定制打包行为或测试框架可能需要 fallback 到传统工具链。评分 4/5——有扩展机制且设计良好，但插件生态丰富度不及 webpack。

## 文档质量

**官方文档**（bun.com/docs）：覆盖全面，从入门到 API 参考结构清晰。包含运行时、打包器、测试运行器、包管理器的完整指南 [Docs]。提供 LLM 友好的索引文件（`bun.com/docs/llms.txt`），便于 AI 工具导航 [Docs]。

**发布文档**：每次版本发布附带详细博客文章（bun.com/blog），包含性能基准测试、API 变更说明、新增功能演示、贡献者致谢 [Blog]。远超多数仅自动生成 commit list 的 release note。

**Node.js 兼容性**：有 Node.js 兼容性对照页面，但非 API 级别穷举。这是文档最薄弱的环节——用户不知道「哪些能用」时，只能通过实验或搜索 issue 来确定。

**缺失**：无架构设计文档（解释 Zig + JSC 的选择理由、内存管理策略等）；贡献者上手文档较简要。

评分 4/5：面向用户的使用文档和 release blog 质量高，但 Node.js 兼容性文档的精度不足和架构文档的缺失是扣分项。

## 社区与成熟度

| 维度 | 评分 | 说明 |
|------|------|------|
| 社区活跃度 | 4/5 | 90,755 stars，4,521 forks，每周 >200 万 npm 下载量 [Web]。Active Discord 社区，每 release 4-23 位社区贡献者参与。但 6,911 open issues 说明社区反馈量大而处理能力有限，核心维护者 Jarred-Sumner 贡献占绝对主导 |
| 成熟度 | 4/5 | 5 年开发历史（2021-04-14 至今），v1.3.14 稳定版线，2-4 周 release 周期，破坏性变更罕见且有 blog 文档记录。但 6,911 open issues、未 100% 达成的 Node.js 兼容性、以及 main 分支的 Zig→Rust 迁移是「成熟但面临变动」的矛盾体现 |

## 安全与风险

**安全策略**：`SECURITY.md` 明确说明漏洞报告流程（`security@bun.com`，5 日内确认），当前支持的版本线为 1.x.x [Security]。

**攻击面**：All-in-One 设计意味着单个二进制暴露更大的攻击面——运行时 + 包管理器 + 打包器 + HTTP 客户端/服务器的代码全部在一个进程中运行。相比 Node.js 生态各工具独立运行的模式，Bun 的单体模型从进程边界角度看缺少隔离——但需要说明，进程边界本身不自动构成安全边界（传统工具分进程运行并非安全沙箱设计）。

**依赖安全**：`bun audit` 提供漏洞扫描。但静态链接的 JavaScriptCore（LGPL-2）和 19+ 个链接库的许可证矩阵增加了合规复杂性 [License]。

**供应链风险**：包管理器的速度优化（并行下载、流式提取）引以为傲，但也意味着更复杂的包安装代码路径——历史上 npm/pnpm 均有过包安装环节的安全漏洞，Bun 的包管理器相对年轻，尚未经历同等级别的安全审计。

**许可证风险**：LGPL-2 的 JavaScriptCore 静态链接意味着分发 Bun 或其嵌入版本时需遵守 LGPL 条款（提供重新链接的途径）。对大多数终端用户无影响，但对嵌入式分发和闭源商业产品有合规限制。

评分 3/5：有基本安全流程（漏洞报告、版本策略、audit 命令），但单体攻击面、许可证复杂性、供应链审计成熟度不足是明确关注点。

## 学习价值

**值得学习**：
- **All-in-One 工具链的工程实现**：如何将运行时、包管理器、打包器、测试运行器整合到单个二进制中——Zig + JSC 的技术选型、内存管理策略、跨平台构建系统
- **性能优化的工程实践**：进程启动 4× 加速、流式包安装（17× 内存降低）、并行测试调度——每个优化都有 blog 详述思路，是性能工程的优质案例
- **Node.js 兼容性工程**：如何在不使用 V8 的前提下实现 Node.js API 兼容——这对理解 JavaScript 运行时的底层抽象极有价值
- **Zig 语言的大型项目实战**：Bun 是 Zig 语言最大的生产项目之一，展示了 Zig 在系统编程（特别是与 C/C++ 代码集成）中的优势

**适合阅读的受众**：对 JavaScript 运行时底层实现感兴趣的开发者；研究构建工具和包管理器设计的工程师；想学习 Zig 语言在大型项目中应用的系统程序员。

**不适合**：仅关注应用层开发的 JS 开发者——学习价值在于底层工程，非应用开发技巧。
