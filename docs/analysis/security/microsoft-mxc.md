---
title: "Microsoft eXecution Container"
created: 2026-06-07
updated: 2026-06-07
type: repository-analysis
repo_url: "https://github.com/microsoft/mxc"
category: "security"
tags: [sandbox, containment, untrusted-code, rust, typescript, microsoft]
previous_repo: ""
successor: ""
primary_language: "Rust / TypeScript"
license: "MIT"
stars: 549
forks: 24
last_checked: 2026-06-07
last_verified: 2026-06-07
evidence: "GitHub REST/GraphQL metadata + README snapshot + GitHub tree/local-style API scan; not installed or smoke-tested"
archived_reason: ""
docker_support: false
gpu_required: false
estimated_cpu: "取决于 backend：process sandbox 轻，VM/microVM/hyperlight 更重"
estimated_memory: "取决于 backend 和 guest workload；VM/microVM 类显著高于 process sandbox"
estimated_storage: "仓库约3 MB；构建产物、SDK、VM/runtime 镜像另计"
status: active
ratings:
  capability: 4
  usability: 2
  performance: 3
  code_quality: 4
  documentation: 4
  community: 3
  maturity: 1
  extensibility: 4
  security: 2
  recommendation: 3
overall_score: 3.0
sources:
  - "[GH] https://github.com/microsoft/mxc — GitHub REST/GraphQL snapshot 2026-06-07: created_at=2026-02-06T20:13:08Z, pushed_at=2026-06-05T22:23:12Z, default_branch=main, commit=3cb21f2ec7e6ce8aa24f78851d67811d4e035c90, stars=549, forks=24, open issues=12, open PRs=4, commits=11, license=MIT, primary_language=Rust, diskUsageKB=3139"
  - "[GH:readme] Local README snapshot /opt/data/tmp/repo_wiki_trending_20260607_remaining/microsoft-mxc/README.md checked 2026-06-07; total_lines=245; analysis uses README-described capabilities only and did not run the project"
  - "[GH:local-scan] GitHub tree/API scan checked 2026-06-07: files=1061, languages=Rust=1949285, TypeScript=437292, PowerShell=273723, HTML=24111, CSS=23297, Shell=21024, workflow_count=4, workflows_sample=.github/workflows/build.yml, .github/workflows/hyperlight-e2e.yml, .github/workflows/microvm-e2e.yml, .github/workflows/publish.yml, test-ish files=791, docs-ish files=72, community_files={'code_of_conduct': 'https://api.github.com/repos/microsoft/mxc/community/code_of_conduct', 'code_of_conduct_file': 'https://api.github.com/repos/microsoft/.github/contents/CODE_OF_CONDUCT.md', 'contributing': 'https://api.github.com/repos/microsoft/mxc/contents/CONTRIBUTING.md', 'issue_template': None, 'pull_request_template': 'https://api.github.com/repos/microsoft/mxc/contents/.github/PULL_REQUEST_TEMPLATE.md', 'license': 'https://api.github.com/licenses/mit', 'readme': 'https://api.github.com/repos/microsoft/mxc/contents/README.md'}"
  - "[GH:release] GitHub releases endpoint checked 2026-06-07: sampled latest tags=v0.6.1; sample_count=1"
  - "[GH:security-advisories] GitHub security-advisories endpoint checked 2026-06-07: returned 0; absence only means no advisory returned by this endpoint in this check, not proof of safety"
---

# Microsoft eXecution Container

> MXC 是 Microsoft 早期预览的跨平台 untrusted code sandbox system，统一 JSON schema/TypeScript SDK 包装 ProcessContainer、LXC、Bubblewrap、Seatbelt、MicroVM 等 backend；README 明确警告当前不能当安全边界。
>
> **状态**: `active` · **总分**: 3.0/5 · **推荐度**: 3/5
> **验证边界**: 本轮只做 GitHub metadata、README 与 tree/API scan；未安装、未构建、未运行、未复现实测 benchmark。

## 一句话总结

MXC 是 Microsoft 早期预览的跨平台 untrusted code sandbox system，统一 JSON schema/TypeScript SDK 包装 ProcessContainer、LXC、Bubblewrap、Seatbelt、MicroVM 等 backend；README 明确警告当前不能当安全边界。 [GH:readme]

## 总体评价

它非常值得跟踪，因为“模型输出/插件/工具执行隔离”正是 agent 安全核心问题；但 README 第一个 warning 已经说 no MXC profiles should be treated as security boundaries currently。 截至 2026-06-07 的 GitHub 快照显示：stars=549、forks=24、open issues=12、open PRs=4、最近采样 release=v0.6.1 [GH] [GH:release]。

评分采取保守口径：README/docs claim 只证明项目设计目标和公开描述，本轮没有实测运行效果；local scan 只证明文件结构、语言、workflow/test/docs 线索，不证明业务正确性、安全边界或性能数字 [GH:readme] [GH:local-scan]。

## 推荐度：3/5

**角色定位**：适合对 `security` 方向已有明确需求、愿意按 README 与源码边界自行验证的人。

推荐理由：
- 能力面与主题匹配：README 列出跨平台、多 backend、filesystem/network/UI policy、session lifecycle 和 SDK；local scan 有大量 tests，但项目仅 11 commits 且明确 early preview。 [GH:readme]。
- 工程可审计性：仓库结构、语言分布、workflow/test/docs 数量已记录到 source 层，便于后续深挖 [GH:local-scan]。
- 风险前置：本条不把 star 数、官方品牌或 README benchmark 当作独立生产采用证据 [GH]。

**结论**：推荐度 3/5。可收录、可跟踪；是否采用取决于你的场景是否落在它的强项内，以及能否接受未实测/权限/运维边界。

## 优势

1. **定位清晰**：MXC 是 Microsoft 早期预览的跨平台 untrusted code sandbox system，统一 JSON schema/TypeScript SDK 包装 ProcessContainer、LXC、Bubblewrap、Seatbelt、MicroVM 等 backend；README 明确警告当前不能当安全边界。 [GH:readme]
2. **工程信号可见**：本轮 tree/API scan 记录 files=1061、workflow_count=4、test-ish files=791、docs-ish files=72 [GH:local-scan]。
3. **社区/关注度信号强**：截至 2026-06-07 快照 stars=549、forks=24；这只说明可见度，不直接证明质量或生产采用 [GH]。

## 劣势

1. **验证边界**：本轮没有安装、构建、运行、benchmark 或端到端 smoke test；README 能力均按“文档声称/仓库可见设计面”处理 [GH:readme]。
2. **维护/稳定性需看上下文**：open issues=12、open PRs=4 是点时快照；大项目/语言核心仓库不能简单等同 bug 密度 [GH]。
3. **安全结论保守**：security-advisories endpoint 没返回的项目也不能视作安全；高权限、模型、浏览器、账号或文件处理场景仍需独立 threat model [GH:security-advisories]。

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

上述项目按 `security` 或相邻生态做定位级对比，未在本条中按同一 10 维度框架重审；表格不构成优劣 benchmark。

---

## 它能做什么

README 列出跨平台、多 backend、filesystem/network/UI policy、session lifecycle 和 SDK；local scan 有大量 tests，但项目仅 11 commits 且明确 early preview。 [GH:readme]

可见的仓库层面能力线索包括：primary_language=Rust、topics=无公开 topics、files=1061、docs-ish files=72、test-ish files=791 [GH] [GH:local-scan]。

## 运行环境与资源占用

| 场景 | CPU | 内存 | 存储 | 说明 |
|------|-----|------|------|------|
| 最小 | 取决于 backend：process sandbox 轻，VM/microVM/hyperlight 更重 | 取决于 backend 和 guest workload；VM/microVM 类显著高于 process sandbox | 仓库约3 MB；构建产物、SDK、VM/runtime 镜像另计 | 基于 README/依赖栈和仓库规模的启发式估计，非实测 |
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

依据：语言/文件结构、workflow_count=4、test-ish files=791、docs-ish files=72、release 信号和项目年龄 [GH:local-scan] [GH:release]。这个分数是静态仓库质量判断，不等于功能正确性或覆盖率实测。

## 可扩展性

评分 4/5。

依据：README 暴露的 API/plugin/module/model/config/workflow 扩展面，以及仓库结构是否支持二次开发 [GH:readme] [GH:local-scan]。没有运行扩展示例，因此只评价设计面和可见结构。

## 文档质量

评分 4/5。

README/docs-ish files=72；README 对核心定位、安装或功能说明的清晰度支撑该评分 [GH:readme] [GH:local-scan]。若项目另有外部文档，本轮未系统抓取完整站点，后续深审可补。

## 社区与成熟度

| 维度 | 评分 | 说明 |
|------|------|------|
| 社区活跃度 | 3/5 | stars=549、forks=24、open issues=12、open PRs=4 是点时可见度和维护负载信号，不单独证明质量 [GH] |
| 成熟度 | 1/5 | created_at=2026-02-06T20:13:08Z，sampled releases=v0.6.1；成熟度按项目年龄、release/CI/test/docs 和稳定性声明综合判断 [GH] [GH:release] |

## 安全与风险

评分 2/5。

GitHub security-advisories endpoint 本轮返回结果已记录，但“无 advisory 返回”不是安全证明 [GH:security-advisories]。实际采用时至少检查：权限范围、账号/cookie/token 暴露面、依赖供应链、模型/文档数据上传路径、sandbox/隔离边界、license 与商业使用限制。

## 学习价值

学习价值主要在三个层面：一是理解 `security` 这一类项目当前如何组织能力；二是用 README claim 与 local scan 对照，训练“文档声称 vs 可审计事实”的边界感；三是把它与同类项目做定位级 comparison，而不是被 star 数或品牌牵引 [GH] [GH:readme] [GH:local-scan]。
