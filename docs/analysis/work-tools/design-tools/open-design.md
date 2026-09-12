---
title: "OpenDesign"
created: 2026-09-12
updated: 2026-09-12
type: repository-analysis
repo_url: "https://github.com/nexu-io/open-design"
category: "work-tools/design-tools"
tags: [design-tool, prototyping, local-first, desktop-app, design-systems, agent-skills, deepseek-harness, dsh-plugin, typescript]
primary_language: "TypeScript"
license: "Apache-2.0; bundled third-party materials retain their own licenses"
stars: 95705
forks: 11094
last_checked: 2026-09-12
last_verified: 2026-09-12
evidence: "GitHub REST/GraphQL + pinned source/docs review + DSH host-side plugin contract + issue/PR verification + anonymous GHCR manifest read; no installation, GUI/export/DSH runtime smoke or performance benchmark"
docker_support: true
gpu_required: false
estimated_cpu: "Not measured; depends on agent concurrency, browser rendering and media export"
estimated_memory: "Not measured; Compose default container limit is 384m with V8 old-space limit 192 MiB, not a verified end-to-end requirement"
estimated_storage: "Release installer assets about 401-438 MB; installed dependencies, project assets, exports and backups add workload-dependent storage"
status: active
ratings:
  capability: 4
  usability: 3
  performance: 3
  code_quality: 3
  documentation: 4
  community: 4
  maturity: 2
  extensibility: 4
  security: 2
  recommendation: 3
overall_score: 3.2
sources:
  - "[GH] https://api.github.com/repos/nexu-io/open-design checked 2026-09-12: created_at=2026-04-28, pushed_at=2026-09-12, archived=false, default_branch=main, primary language TypeScript, stars=95705, forks=11094, REST open_issues_count=1019; source commit ad9078b87c2d08e537ca3e041c46c124e7380c9c, committed 2026-09-11"
  - "[GH:counts] GitHub GraphQL repository(nexu-io/open-design) checked 2026-09-12: open issues=489, open PRs=530, sum=1019; REST open_issues_count includes PRs, not 1019 bug reports"
  - "[GH:releases] https://api.github.com/repos/nexu-io/open-design/releases?per_page=3 checked 2026-09-12: latest open-design-v0.22.2 published 2026-09-10; mac-arm64 DMG=400920371 bytes, mac-x64 DMG=420637754, win-x64 setup.exe=438207278, each has SHA-256 sidecar. Release fixes updater shutdown/restart, explicitly does not automatically recover already-stuck restart-loop clients. 0.22.1 changes default Design Harness behavior and fixes clarification retry, failed-media completion reporting and workspace/UI recovery"
  - "[Docs] https://github.com/nexu-io/open-design/blob/ad9078b87c2d08e537ca3e041c46c124e7380c9c/README.md — describes local-first macOS/Windows app, prototypes/decks/images/video/HyperFrames, HTML/PDF/PPTX/MP4 export, DESIGN.md, skills, plugins and multiple local CLI/BYOK routes; this analysis does not verify a precise CLI support count or its compatibility matrix"
  - "[GH:architecture] https://github.com/nexu-io/open-design/blob/ad9078b87c2d08e537ca3e041c46c124e7380c9c/AGENTS.md and package.json/apps/daemon/package.json — source review: web Next.js/React, local privileged daemon owns APIs/processes/files, Electron shell and packaged sidecars, shared TypeScript contracts; root package version=0.22.1, runtime Node ~24, pnpm@10.33.2; not a runtime verification"
  - "[GH:ci] https://github.com/nexu-io/open-design/blob/ad9078b87c2d08e537ca3e041c46c124e7380c9c/.github/workflows/ci.yml and repository tree — tests/typecheck/guard and scoped CI machinery present. ci.yml runs endpoint checked 2026-09-12 returned action_required and failure on older SHA 517d64e1edc42f022382db30b7e9dcfd21b939c0 (runs 34587992212 and 34584896617); other workflow successes on current main are not proof that its complete CI passed"
  - "[GH:community] https://api.github.com/repos/nexu-io/open-design/contributors?per_page=6 checked 2026-09-12: top listed contributors lefarcen=523, PerishCode=206, Siri-Ray=181; sample also includes automation accounts. CONTRIBUTING.md and MAINTAINERS.md exist at pinned commit; not a complete human-contributor census or response-time measurement"
  - "[DSH:bundle] https://github.com/nexu-io/open-design/tree/ad9078b87c2d08e537ca3e041c46c124e7380c9c/packages/dsh-runtime — README.md, package.json, cordis.patch.yml and src/index.ts inspected: @open-design/dsh-runtime 0.1.0 declares dsh.bundle.patch; installs into open-design profile via dsh plugin; JSONL stdio process per run, probe/models/cold resume; bundle itself does not include dsh, Node or provider credentials"
  - "[DSH:host] https://github.com/deepseek-ai/deepseek-harness/blob/c291e7961a515f6d7af9304e7fd1d257929aef26/docs/user/develop/basic/publish.md checked 2026-09-12: official dsh.bundle/profile/Cordis layer and dsh plugin --profile NAME add semantics corroborate the plugin form; this is contract comparison, not a successful OpenDesign/DSH integration run"
  - "[DSH:compat] https://github.com/nexu-io/open-design/blob/ad9078b87c2d08e537ca3e041c46c124e7380c9c/apps/daemon/src/runtimes/defs/deepseek-harness.ts — supported point versions include 0.1.0-rc.8, 0.1.1-rc.2, 0.1.2-rc.1; pattern also accepts stable 0.1.x, 0.1.0-rc.6 and later RCs on that patch line, and the 0.1.1/0.1.2 RC lines. Policy acceptance is not proof every matching version was tested. https://github.com/nexu-io/open-design/issues/7992 open on 2026-09-12 reports OpenDesign 0.22.1 + dsh 0.1.5-rc.1 detects/probes successfully but returns completed without assistant text; src/index.ts still maps text through assistant/chunk, assistant/message only usage. https://github.com/nexu-io/open-design/pull/8070 checked same day: open, merged=false, proposed new stream/settlement mapping; not a shipped fix"
  - "[DSH:bootstrap] https://github.com/nexu-io/open-design/blob/ad9078b87c2d08e537ca3e041c46c124e7380c9c/docs/deepseek-harness-one-click-install.zh-CN.md — separate optional bootstrap instructions; top notice says download-address publication and macOS/Windows validation must be confirmed before promotion. This check did not verify those script URLs or run the installer"
  - "[Docs:privacy] https://github.com/nexu-io/open-design/blob/ad9078b87c2d08e537ca3e041c46c124e7380c9c/PRIVACY.md — product analytics and quality traces on by default and opt-out; conversation/tool content can be sent when metrics and content controls enabled; safety/reliability telemetry always enabled in builds configured with destinations; Delete my data rotates local ID/disables optional channels, not synchronous remote erasure; no-destination forks/dev builds send neither class"
  - "[GH:container] https://github.com/nexu-io/open-design/blob/ad9078b87c2d08e537ca3e041c46c124e7380c9c/deploy/docker-compose.yml and docs/deployment/docker.md — official image ghcr.io/nexu-io/od:latest; host publishing 127.0.0.1:7456, container bind 0.0.0.0, OD_API_TOKEN/auth opt-out configuration, read_only, no-new-privileges, mem_limit=384m, --max-old-space-size=192. apps/daemon/src/api-token-auth.ts inspected: Bearer/Basic credential matching uses timingSafeEqual; this helper alone does not prove all route authorization"
  - "[Registry] Anonymous GHCR pull-token/manifest query 2026-09-12: https://ghcr.io/v2/nexu-io/od/manifests/latest HTTP 200; OCI index digest sha256:2b1b1bf36d4ffb601525e295a0478e047913a570db635dc4c77f3e904a654343, runnable linux/amd64 and linux/arm64 descriptors. Manifest-only check: image layers were not pulled or executed, and digest was not tied to the analyzed main SHA"
  - "[GH:advisories] https://api.github.com/repos/nexu-io/open-design/security-advisories returned [] on 2026-09-12; no published repository GHSA found in this check, not evidence of safety or absence of dependency advisories"
  - "[GH:dependency] Pinned root package.json overrides fast-uri=3.1.5; pnpm-lock.yaml parsed 2026-09-12 confirms production dependency path apps/daemon -> @modelcontextprotocol/sdk 1.29.0 -> ajv 8.20.0 -> fast-uri 3.1.5. https://github.com/advisories/GHSA-5jgf-p345-68v8 checked same day: high host-confusion advisory; 3.x affected >=3.1.3,<3.1.6 and first patched 3.1.6. Lockfile/advisory match, not proof of reachable exploitation in a shipped binary; no complete package-manager advisory audit performed"
  - "[GH:issues] Additional open issue/PR samples checked 2026-09-12: https://github.com/nexu-io/open-design/issues/8077 requests per-run token/turn budget; https://github.com/nexu-io/open-design/issues/8074 discusses recovery after side-effected failures; https://github.com/nexu-io/open-design/issues/8076 discusses shared storage across daemon namespaces; these are reporter claims/design requests, not failures reproduced here"
  - "[GH:license] Pinned LICENSE is Apache-2.0; README license section says bundled components retain own LICENSE, including design-templates/guizang-ppt, design-templates/html-ppt and skills/web-clone as MIT; README separately attributes HyperFrames catalog thumbnails to HeyGen. No blanket license claim is made for all assets or hosted services"
  - "[WikiLocal:comparison] /opt/data/wiki/github-repo-wiki/work-tools/design-tools/penpot.md read 2026-09-12, last_verified=2026-07-25; used only for design-platform positioning, not a fresh competitor audit"
---

# OpenDesign

> 用既有 coding agent 驱动设计工作室：把需求、设计系统、生成文件、实时预览和导出放在同一产品中。
>
> **状态**：`active` · **总分**：3.2/5 · **推荐度**：3/5
> **核验范围**：main `ad9078b8`；最新 desktop release `0.22.2`。未安装、未实测 GUI、导出或 DSH 生成。

## 一句话总结

OpenDesign 面向希望借助已有 agent/model 制作原型、落地页、演示稿和媒体素材的开发者与产品设计者；它含真实 DeepSeek Harness 插件接入，但当前 DSH 版本兼容性不能仅凭“已连接”判断。[Docs][DSH:bundle][DSH:compat]

## 总体评价

**这是设计产品，不只是一个 prompt 包，也不只是给 DeepSeek API 加 UI。** 用户输入 brief，选择设计系统和 agent，daemon 驱动本地运行时生成实际文件，再由 Studio 预览、调整并导出。其主要价值是把文件、对话、设计规则和交付物组织成可继续编辑的工作区，而非声称模型突然具备稳定设计能力。[Docs][GH:architecture]

范围覆盖原型、slides、图片和视频，且有桌面安装器、Web/容器入口及插件体系；但创建仅约四个半月，最新 release 仍在修复升级退出、错误完成状态和恢复体验。489 个 open issues、530 个 open PRs 是维护负载，不可直接解释成 1019 个已确认 bug。[GH][GH:counts][GH:releases]

综合判断：**值得在非敏感项目试用，尚不足以无条件替代成熟设计协作平台。** “local-first”不等于完全离线或默认不上传对话；而“支持 DSH”也不等于支持任意新版 DSH。[Docs:privacy][DSH:compat]

## 推荐度：3/5

对需要用 coding agent 快速生成可运行原型、演示稿及品牌化素材，且能人工复核产出并管理运行时/隐私设置的开发者和产品设计者，推荐度为 **3/5**。

它的增量价值是设计工作室与文件交付闭环，不是取代所有 agent。如果只要一次生成 HTML，已有 agent 加模板往往更简单；若需要反复预览、设计系统复用、多格式交付，产品层才值得引入。[Docs]

**若采用前提是最新 DSH 即装即用，目前建议先等兼容修复或在隔离环境验证明确版本组合。** #7992 报告 `dsh 0.1.5-rc.1` 连接探测正常但正文丢失；#8070 尚未合并。本文不把报告中的旧版本 workaround 提升为已独立验证的推荐安装方案。[DSH:compat]

## 优势

1. **围绕交付物而不是聊天堆功能**：按文档设计，项目同时保留生成文件、对话与 live preview，支持继续迭代和导出，而非只能取走一段模型回复。[Docs]
2. **设计知识可组合**：`DESIGN.md`、skills、templates、plugins 提供文件级复用与定制入口，适合建立自己的品牌约束。[Docs]
3. **DSH 是实际插件组件**：存在 `@open-design/dsh-runtime`、`dsh.bundle` 和 Cordis patch，不只是 topics 或营销文字。[DSH:bundle][DSH:host]
4. **产品分发存在真实产物**：查到 macOS/Windows release assets，以及可匿名读取的官方 GHCR 镜像 manifest；这只证明分发入口存在，不证明所有功能可用。[GH:releases][Registry]
5. **隐私边界披露较具体**：PRIVACY 区分可关闭的内容/指标与不能由总开关关闭的可靠性遥测，比一句“数据在本地”更有判断价值。[Docs:privacy]

## 劣势

1. **基础用户体验仍在快速修补**：升级重启、失败媒体显示完成、澄清回答重试等问题见近期 release；已有 restart-loop 客户端不保证被 0.22.2 自动恢复。[GH:releases]
2. **多运行时兼容成本高**：DSH 的 probe、models 成功与真实 text delivery 可以脱节；支持的 CLI 数量不是同等兼容质量的证明。[DSH:compat][Docs]
3. **隐私默认值并非最小上传**：可选产品分析/质量 traces 默认开，某些构建还有始终启用的安全可靠性通道。[Docs:privacy]
4. **依赖和高权限面需要额外审计**：root override 的 `fast-uri 3.1.5` 命中已公开 high advisory 范围；daemon 又掌握进程和文件操作，不能只检查项目 GHSA 页面。[GH:dependency][GH:architecture]
5. **自动化不能替代交付验收**：代码生成、布局、可访问性、素材授权和导出质量仍需人工检查；本轮没有测量它们。[Docs]

## 适合什么场景

- 有明确 brief 与品牌规则，需要快速反复调整的网页/移动端视觉原型、落地页和演示稿。[Docs]
- 设计者与开发者希望直接交付 HTML 等可运行文件，而不是只交一张截图。[Docs]
- 研究“高权限本地 daemon + 薄 UI + 多 agent adapter + artifact preview”的产品结构。[GH:architecture]
- 想研究 DSH plugin 的 profile/JSONL 接入，并能接受版本固定与真实生成测试。[DSH:bundle][DSH:compat]

## 不适合什么场景

- 必须开箱即用、严禁上传任何对话/诊断数据，却不愿逐项检查构建和遥测配置。[Docs:privacy]
- 需要成熟多人像素级编辑、复杂设计文件兼容和稳定团队治理，且准备仅凭“Figma alternative”替换现有工具。[Docs]
- 将最新版 DSH 自动升级后仅跑 `--probe` 就当作兼容验收。[DSH:compat]
- 没有权限隔离、数据备份或费用监控，却把自动生成接到敏感文件和高权密钥；有关运行预算、部分产物失败后的恢复仍有公开讨论。[GH:issues]

## 与类似项目对比

| 项目 | 定位 | 相对本项目 |
|------|------|-----------|
| OpenDesign | Agent 驱动的文件型设计工作室 | 从 brief 出发生成代码/媒体交付物，再预览、迭代和导出 |
| Penpot | 开放标准与设计系统导向的协作设计平台 | 更偏画布编辑、设计团队协作及设计—代码衔接；OpenDesign 更偏 agent 生成与现有 CLI 的编排 |

按 `work-tools/design-tools` 同类范围做定位级对比；Penpot 依据本地既有条目，未在本轮重做相同 10 维度审计，不能从表格推导质量高低。[Docs][WikiLocal:comparison]

## 它能做什么

能力广度 **4/5**。README 所述主要产物包括原型、live dashboards/artifacts、decks、images、video 与 HyperFrames motion graphics；宣称可导出 HTML/PDF/PPTX/MP4，并用设计系统与技能约束生成过程。这是产品能力摘要，不与 UI 内部的产物类型枚举等同。[Docs]

需要区分三个层次：

- **设计内容层**：skills/templates/design systems 提供方法、样式和资源。
- **执行层**：已有 CLI、DSH 或 BYOK/model 服务实际调用模型与工具。
- **产品层**：daemon/UI 管理工作区、运行状态、预览及交付。

以上来自源码结构和文档，不是本轮全功能实测。多种文件格式、CLI 名称或模型入口并列，不足以支持能力 5/5；DSH 新版事件映射问题尤其说明“接入存在”和“稳定完成任务”是两回事。[GH:architecture][DSH:compat]

## 运行环境与资源占用

| 场景 | CPU | 内存 | 存储 | 证据边界 |
|------|-----|------|------|---------|
| macOS/Windows desktop | 未测 | 未测，包含 Electron、sidecars 与所选 agent | 安装器约 401–438 MB，安装后更大 | 查到 release assets，未安装运行 |
| 官方 Docker | 随并发/渲染变化 | Compose 限制 384m，V8 old-space 192 MiB | 镜像、持久 volume、产物 | 配置值，不是通过压测的最低需求 |
| 本地源码/复杂媒体生成 | 依赖运行时、浏览器与媒体工具 | 需另做容量测试 | workspace、依赖与媒体素材增长 | 不从 repository size 推算生产空间 |

- **源码工具链**：root 要求 Node `~24`、pnpm `10.33.2`；这与 DSH component 自身的 Node `>=24` 不同，不宜据组件要求随意放宽整个项目。[GH:architecture][DSH:bundle]
- **平台**：本轮最新 release assets 有 macOS arm64/x64、Windows x64；Linux 可研究源码或官方容器，不声称存在同版 Linux desktop installer。[GH:releases][Registry]
- **Docker**：`docker_support: true` 基于官方文档、Compose 与匿名 registry manifest read，而非仅发现一个 Dockerfile。[GH:container][Registry]
- **GPU**：这里的 `gpu_required: false` 指所查 CLI/远端模型与容器基础路径未要求本机 CUDA；本地模型或特殊媒体后端需另外核验，不是所有可选流程的硬件保证。[Docs][GH:container]

资源效率 **3/5**，置信度有限。小容器 limit 不能证明端到端省内存；多进程、渲染/编码和模型 token 成本应分别测量。未复现 README 或发布材料中的模型质量/成本 benchmark，亦不据此排名。

## 上手体验

评分 **3/5**。桌面安装器、Quickstart 与本地 agent 检测降低了入口成本；但用户仍需区分 Cloud/BYOK/local CLI、运行时版本、授权、插件组件、模板及可选媒体服务。[Docs][GH:releases]

DSH 更体现了这种复杂度：接入包安装到独立 `open-design` profile，首次修改需确认；包本身不安装 dsh 或接管其凭据。另有独立 bootstrap 宣发指南，但文件仍带“发布前确认下载地址与各平台验证”的提示，因此这里不提供未经核验的一键执行命令。[DSH:bundle][DSH:bootstrap]

## 代码质量

评分 **3/5**。明确的 privileged daemon、web/desktop、sidecar、shared contracts、运行时 adapter 分层，是值得研究的模块边界；源码中有 tests、guards、typecheck 与复杂的按改动范围运行 CI 的机制。[GH:architecture][GH:ci]

本轮未构建或执行其测试，不能报告“全部 CI 绿”。所查 ci.yml 最近记录在较旧 SHA 上为 failure/action_required；当前 main 其他自动化 workflow 的成功不能替代完整 CI 证据。[GH:ci]

DSH adapter 的现行代码把 text 聚合限定于 `assistant/chunk`，`assistant/message` 只记 usage；这与 #7992 的空输出报告相符。未合并 PR 是维护进展，不是 main 已修复或已交付的证据。[DSH:compat]

## 可扩展性

评分 **4/5**。文件型设计系统、skills/templates/plugins 与多运行时 adapter 提供较多扩展面；但深度适配需要处理模型发现、事件语义、取消、恢复与权限，不是给 CLI 增加名字即可。[Docs][GH:architecture]

**DeepSeek Harness / DSH plugin**：本仓库确有 `@open-design/dsh-runtime` bundle，通过 `dsh plugin --profile open-design add ...` 接入官方 DSH composition，再以 JSONL stdio 将模型/工具事件接入设计工作室。项目 manifest 与官方宿主文档相互印证，所以可标记 `deepseek-harness`、`dsh-plugin`；标签表示该扩展接口存在，**不保证最新版兼容，本轮也未做端到端运行验证**。[DSH:bundle][DSH:host]

核验 snapshot 的明确列举版本止于 `0.1.2-rc.1`；策略还接受稳定 `0.1.x`、`0.1.0-rc.6` 起的该线 RC 以及 `0.1.1/0.1.2` RC，不代表所有匹配版本都经过实测。`0.1.5-rc.1` 故障报告与待合并 #8070 应优先阅读。也不能把 OpenDesign 宣称支持其他宿主，自动解释成本轮已验证 Hermes 等每个宿主的端到端兼容。[DSH:compat][Docs]

## 文档质量

评分 **4/5**。README 的 product tour、Quickstart、架构/插件文档、单独 PRIVACY 与 DSH README 提供了较完整的判断入口；DSH 文档尤其明确区分用户安装的 runtime 和 OpenDesign 安装的连接 bundle。[Docs][GH:architecture][Docs:privacy][DSH:bundle]

不足在于营销面、产品发布版本、main root package 版本和 bootstrap 发布准备状态不是同一件事：latest desktop 为 0.22.2，pinned main root manifest 仍写 0.22.1；“一键接入”也必须与版本兼容报告一并读。本文分别记录，不推断哪个文件代表全部组件版本。[GH:releases][GH:architecture][DSH:bootstrap]

## 社区与成熟度

| 维度 | 评分 | 理由 |
|------|------|------|
| 社区活跃度 | 4/5 | 95,705 stars、11,094 forks 是高可见度快照，contributors 样本有多个活跃贡献者；489 issues/530 PRs 说明参与和维护压力并存，未测响应速度，不给 5。[GH][GH:counts][GH:community] |
| 成熟度 | 2/5 | 创建于 2026-04-28，仅约四个半月，仍是 0.x 且运行时/default harness/升级恢复快速变化，不以 release 页面未标 prerelease 推导成熟。[GH][GH:releases][DSH:compat] |

## 安全与风险

评分 **2/5**，主要受当前依赖风险信号、较广执行权限和隐私默认值约束；不是宣称已经复现远程攻击。

1. **依赖 GHSA 与项目 GHSA 分开**：仓库 advisory API 返回空，但 root `fast-uri=3.1.5` override 命中 high advisory GHSA-5jgf-p345-68v8 的 3.x 受影响范围，修复起点为 3.1.6。未证明已分发 binary 中的可达攻击路径，也未完成整个依赖图审计，不能反向宣称“只有这一个风险”。[GH:advisories][GH:dependency]
2. **预览隔离不等于执行隔离**：文档的 sandboxed iframe 约束预览；高权限 daemon 与它启动的 agent 是另一权限面。Compose 的 loopback 发布、read-only、no-new-privileges 和 token 配置是积极信号，但并非整机/多租户隔离证明。[Docs][GH:architecture][GH:container]
3. **local-first 不等于 no-upload**：可选内容 traces 可包含 prompts、assistant responses、tool I/O 和 prompt-stack context；可靠性遥测在配置了 destination 的构建中不能由通用 analytics 开关关闭。“Delete my data”也不保证历史远端记录立即删除。[Docs:privacy]
4. **插件安装也是授权动作**：DSH bundle 修改 profile 的配置层；官方文档明确 Git 源码安装可能需要允许 build script，其执行发生在 agent sandbox 之外。本文没有安装它或调整现有 DSH/Hermes 环境。[DSH:host][DSH:bundle]
5. **许可分层**：主仓库 Apache-2.0，所列第三方模板/skill 保留 MIT 等原许可，图片缩略图另有署名；代码许可不自动覆盖品牌素材、第三方媒体、云服务条款或生成内容权利。[GH:license]

## 学习价值

值得研究的是从 agent 到可交付设计产品的连接：将生成文件视作真实工作对象，以 daemon 统一管理执行、状态与预览，将品牌规范做成可读写的设计系统。[Docs][GH:architecture]

对 DSH 集成最有价值的教训则是：**安装成功、probe 成功、模型列表正常，仍不等于正文和交付物成功。** 真实接入验收需要覆盖一轮生成、文本/工具事件、终止状态以及恢复，而不能停在检测 CLI 存在。[DSH:compat]
