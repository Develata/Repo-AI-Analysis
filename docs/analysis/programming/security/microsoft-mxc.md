---
title: "Microsoft eXecution Container"
created: 2026-06-07
updated: 2026-07-23
type: repository-analysis
repo_url: "https://github.com/microsoft/mxc"
category: "programming/security"
tags: [sandbox, containment, untrusted-code, rust, typescript, microsoft]
previous_repo: ""
successor: ""
primary_language: "Rust / TypeScript"
license: "MIT"
stars: 1144
forks: 55
last_checked: 2026-07-23
last_verified: 2026-07-23
evidence: "GitHub REST/GraphQL metadata + current README/security/contributing docs + release/compare/tree/community API scan; not installed, built, or smoke-tested"
archived_reason: ""
docker_support: false
gpu_required: false
estimated_cpu: "取决于 backend：process sandbox 轻，VM/microVM/hyperlight 更重"
estimated_memory: "取决于 backend 和 guest workload；VM/microVM 类显著高于 process sandbox"
estimated_storage: "GitHub API repository size≈9 MB；构建产物、SDK、VM/runtime 镜像另计"
status: active
ratings:
  capability: 4
  usability: 2
  performance: 3
  code_quality: 4
  documentation: 4
  community: 3
  maturity: 2
  extensibility: 4
  security: 2
  recommendation: 3
overall_score: 3.1
sources:
  - "[GH] https://github.com/microsoft/mxc — authenticated GitHub REST/GraphQL snapshot 2026-07-23: created_at=2026-02-06T20:13:08Z, pushed_at=2026-07-22T18:53:35Z, default_branch=main, commit=3fd07f5c1a81dfe8f9cc2c06e2346c78de47d5b2, stars=1144, forks=55, open issues=27, open PRs=30, license=MIT, primary_language=Rust, sizeKB=9461"
  - "[GH:readme] https://github.com/microsoft/mxc/blob/3fd07f5c1a81dfe8f9cc2c06e2346c78de47d5b2/README.md — inspected 2026-07-23: still labels MXC early preview and explicitly says no profile should currently be treated as a security boundary; lists ProcessContainer, Windows Sandbox, LXC, Bubblewrap, Seatbelt, MicroVM, Hyperlight, IsolationSession and WSLC, state-aware lifecycle, versioned schemas and TypeScript SDK; project was not run"
  - "[GH:release] GitHub releases API checked 2026-07-23: v0.7.0-rc1 (release title MXC SDK v0.7.0) published 2026-06-13 as prerelease; v0.6.1 published 2026-06-02 as prerelease; no stable GitHub release was returned"
  - "[GH:compare] https://github.com/microsoft/mxc/compare/3cb21f2ec7e6ce8aa24f78851d67811d4e035c90...3fd07f5c1a81dfe8f9cc2c06e2346c78de47d5b2 — GitHub compare API checked 2026-07-23: ahead_by=94; sampled merged work includes schema/version negotiation, macOS Seatbelt cooperative proxy, Windows Sandbox state-aware lifecycle, .NET/C ABI SDK work, LXC filesystem-policy fixes and GA networking design"
  - "[GH:local-scan] GitHub tree/languages/community API scan at 3fd07f5c1a81dfe8f9cc2c06e2346c78de47d5b2 on 2026-07-23: files=1237, Rust=3238518 bytes, TypeScript=509099, PowerShell=358890, C#=89257, workflow_count=15, test-ish files=304, docs-ish files=59, community_health=87, contributors endpoint returned 16 entries; README, SECURITY.md and CONTRIBUTING.md inspected; no build/test execution"
  - "[GH:security-advisories] GitHub repository security-advisories API checked 2026-07-23: returned []; this means no published repository advisory was found in this endpoint check, not that the preview profiles are safe"
---

# Microsoft eXecution Container

> MXC 是 Microsoft 早期预览的跨平台 untrusted code sandbox system，统一 JSON schema/TypeScript SDK 包装 ProcessContainer、LXC、Bubblewrap、Seatbelt、MicroVM 等 backend；README 明确警告当前不能当安全边界。
>
> **状态**: `active` · **总分**: 3.1/5 · **推荐度**: 3/5
> **验证边界**: 本轮只做 GitHub metadata、README 与 tree/API scan；未安装、未构建、未运行、未复现实测 benchmark。

## 一句话总结

MXC 是 Microsoft 早期预览的跨平台 untrusted code sandbox system，统一 JSON schema/TypeScript SDK 包装 ProcessContainer、LXC、Bubblewrap、Seatbelt、MicroVM 等 backend；README 明确警告当前不能当安全边界。 [GH:readme]

## 总体评价

它非常值得跟踪，因为“模型输出/插件/工具执行隔离”正是 agent 安全核心问题；但当前 README 仍明确说 no MXC profiles should be treated as security boundaries currently。自 2026-06 初以来主线前进 94 commits，backend、schema negotiation、state-aware lifecycle 与 SDK 面明显扩张；最新 GitHub release 仍是 v0.7.0-rc1 prerelease，因此这次把成熟度从 1 调到 2，而不提高生产采用推荐 [GH:readme] [GH:compare] [GH:release]。

评分采取保守口径：README/docs claim 只证明项目设计目标和公开描述，本轮没有实测运行效果；local scan 只证明文件结构、语言、workflow/test/docs 线索，不证明业务正确性、安全边界或性能数字 [GH:readme] [GH:local-scan]。

## 推荐度：3/5

**角色定位**：适合对 `programming/security` 方向已有明确需求、愿意按 README 与源码边界自行验证的人。

推荐理由：
- 能力面与主题匹配：README 列出跨平台、多 backend、filesystem/network/UI policy、state-aware lifecycle、versioned schema 与 SDK；这些仍是文档/静态源码信号，且项目明确 early preview [GH:readme] [GH:compare]。
- 工程可审计性：仓库结构、语言分布、workflow/test/docs 数量已记录到 source 层，便于后续深挖 [GH:local-scan]。
- 风险前置：本条不把 star 数、官方品牌或 README benchmark 当作独立生产采用证据 [GH]。

**结论**：推荐度 3/5。可收录、可跟踪；是否采用取决于你的场景是否落在它的强项内，以及能否接受未实测/权限/运维边界。

## 优势

1. **定位清晰**：MXC 是 Microsoft 早期预览的跨平台 untrusted code sandbox system，统一 JSON schema/TypeScript SDK 包装 ProcessContainer、LXC、Bubblewrap、Seatbelt、MicroVM 等 backend；README 明确警告当前不能当安全边界。 [GH:readme]
2. **工程信号增强**：本轮 tree/API scan 记录 files=1237、workflow_count=15、test-ish files=304、docs-ish files=59，并已出现 Rust/TypeScript/C# 多 SDK surface [GH:local-scan]。
3. **迭代速度快**：旧核验点后主线 ahead_by=94，community health=87；这说明维护投入，不等于隔离正确性 [GH:compare] [GH:local-scan]。

## 劣势

1. **验证边界**：本轮没有安装、构建、运行、benchmark 或端到端 smoke test；README 能力均按“文档声称/仓库可见设计面”处理 [GH:readme]。
2. **预发布与主线漂移**：最新 release 是 v0.7.0-rc1，主线仍持续改 schema、backend 与 SDK；兼容性和部署路径未形成稳定承诺 [GH:release] [GH:compare]。
3. **安全边界未成立**：README 明说当前策略存在过度宽松案例，任何 profile 都不应视为 security boundary；advisory endpoint 返回空不能覆盖这项一手警告 [GH:readme] [GH:security-advisories]。

---

## 适合什么场景

- 研究 agent/tool sandbox 设计
- 早期集成反馈、backend abstraction 学习
- Rust/TypeScript 跨平台隔离系统架构阅读

## 不适合什么场景

- 生产隔离不可信代码
- 把当前 profile 当作安全边界
- 需要稳定 API/长期兼容承诺的系统

## 与类似项目对比

| 项目 | 定位 | 相对本项目 |
|------|------|-----------|
| bubblewrap | Linux userspace sandbox backend 参照项 | MXC 可把 Bubblewrap 作为 backend 之一，而不是替代其底层机制 |
| firejail | Linux sandbox 工具参照项 | MXC 更强调跨平台 schema/SDK；firejail 更偏 Linux 工具 |
| docker/containerd | 容器 runtime 参照项 | MXC 目标是 untrusted code execution containment abstraction，边界和成熟度不同 |

上述项目按 `programming/security` 或相邻生态做定位级对比，未在本条中按同一 10 维度框架重审；表格不构成优劣 benchmark。

---

## 它能做什么

README 列出跨平台 backend abstraction、versioned JSON schema、filesystem/network/UI policy、one-shot 与 state-aware lifecycle、TypeScript SDK 和 diagnostics；主线还在扩展 Windows Sandbox、Seatbelt、LXC 与 .NET/C ABI surfaces [GH:readme] [GH:compare]。

可见的仓库层面能力线索包括：primary_language=Rust、files=1237、docs-ish files=59、test-ish files=304、workflow_count=15 [GH] [GH:local-scan]。

## 运行环境与资源占用

| 场景 | CPU | 内存 | 存储 | 说明 |
|------|-----|------|------|------|
| 最小 | 取决于 backend：process sandbox 轻，VM/microVM/hyperlight 更重 | 取决于 backend 和 guest workload；VM/microVM 类显著高于 process sandbox | GitHub API repository size≈9 MB；构建产物、SDK、VM/runtime 镜像另计 | 基于 README/依赖栈和仓库规模的启发式估计，非实测 |
| 推荐 | 按生产输入规模预留余量 | 按模型/浏览器/数据库/worker 数调整 | 数据、缓存、模型权重或构建产物另计 | 本轮未跑 benchmark |

- **运行时**：以 README/项目类型为准；本轮未实际启动。
- **操作系统**：未逐平台验证；以官方 README/文档声明为边界。
- **Docker**：frontmatter `docker_support=false` 只表示 README/local scan 有足够线索支持或不支持主路径，未 build image。
- **GPU**：frontmatter `gpu_required=false`；模型类项目即使 CPU 可跑，也可能需要 GPU 才有实用价值。
- **外部依赖**：依赖、账号、模型权重、数据库、浏览器、代理或云服务需求需按实际安装路径复核。

## 上手体验

评分 2/5。

依据：README 是否给出 quick start、安装/配置路径是否清晰，以及本轮是否看到 release、docs 和 workflow 线索 [GH:readme] [GH:release] [GH:local-scan]。未实装，因此不把“README 写得容易”当作真实零摩擦体验。

## 代码质量

评分 4/5。

依据：语言/文件结构、workflow_count=15、test-ish files=304、docs-ish files=59、SECURITY/CONTRIBUTING 与 compare 中的 policy/schema/backend work [GH:local-scan] [GH:compare]。这个 4 只评价静态工程组织，不证明 sandbox enforcement 正确。

## 可扩展性

评分 4/5。

依据：README 暴露的 API/plugin/module/model/config/workflow 扩展面，以及仓库结构是否支持二次开发 [GH:readme] [GH:local-scan]。没有运行扩展示例，因此只评价设计面和可见结构。

## 文档质量

评分 4/5。

README 与 59 个 docs-ish 文件覆盖 platform matrix、schema、build/test、SDK、debug/audit 和 telemetry；early-preview warning 也足够醒目 [GH:readme] [GH:local-scan]。但文档不能替代每个 backend 的隔离验证。

## 社区与成熟度

| 维度 | 评分 | 说明 |
|------|------|------|
| 社区活跃度 | 3/5 | stars=1144、forks=55、open issues=27、open PRs=30，contributors endpoint 返回 16 条且 community health=87；维护活跃，但项目年龄与外部采用证据仍有限 [GH] [GH:local-scan] |
| 成熟度 | 2/5 | 仓库创建于 2026-02；v0.7.0-rc1、稳定/开发 schema 分层和快速工程扩张比首次核验更完整，但 README 仍称 early preview 且不承诺 security boundary，故只升到 2 [GH:readme] [GH:release] [GH:compare] |

## 安全与风险

评分 2/5。

GitHub repository security-advisories endpoint 本轮返回空；这只表示本次未查到公开 repository advisory [GH:security-advisories]。更强的一手负面信号来自 README：当前 SDK policy 有已知过度宽松案例，任何 profile 都不应当作 security boundary；`--audit` 还会显式放宽限制 [GH:readme]。因此 security 保持 2/5：可用于研究、集成反馈和隔离层原型，不可单独承载生产 untrusted-code trust boundary。

## 学习价值

学习价值主要在三个层面：一是理解 `programming/security` 这一类项目当前如何组织能力；二是用 README claim 与 local scan 对照，训练“文档声称 vs 可审计事实”的边界感；三是把它与同类项目做定位级 comparison，而不是被 star 数或品牌牵引 [GH] [GH:readme] [GH:local-scan]。
