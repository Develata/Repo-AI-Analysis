---
title: "Trivy"
created: 2026-06-07
updated: 2026-06-07
type: repository-analysis
repo_url: "https://github.com/aquasecurity/trivy"
category: "security"
tags: [security, scanner, container, kubernetes, sbom, iac, go]
previous_repo: ""
successor: ""
primary_language: "Go"
license: "Apache-2.0"
stars: 35983
forks: 452
last_checked: 2026-06-07
last_verified: 2026-06-07
evidence: "GitHub REST/GraphQL metadata + README snapshot + GitHub tree/local-style API scan; not installed or smoke-tested"
archived_reason: ""
docker_support: true
gpu_required: false
estimated_cpu: "CLI 扫描随目标大小和数据库更新而变；通常适合 CI/本地开发机"
estimated_memory: "容器镜像/Kubernetes/IaC 扫描为中等占用；大型镜像和集群更高"
estimated_storage: "GitHub diskUsage≈936 MB；本地缓存漏洞数据库和镜像层另计"
status: active
ratings:
  capability: 5
  usability: 4
  performance: 4
  code_quality: 5
  documentation: 5
  community: 5
  maturity: 4
  extensibility: 4
  security: 4
  recommendation: 5
overall_score: 4.5
sources:
  - "[GH] https://github.com/aquasecurity/trivy — GitHub REST/GraphQL snapshot 2026-06-07: created_at=2019-04-11T01:01:07Z, pushed_at=2026-06-05T14:24:32Z, default_branch=main, commit=15bdd2c192636bcc1260034f392ef4322a8e8f96, stars=35983, forks=452, open issues=170, open PRs=76, commits=4095, license=Apache-2.0, primary_language=Go, diskUsageKB=935964"
  - "[GH:readme] Local README snapshot /opt/data/tmp/repo_wiki_trending_20260607_remaining/aquasecurity-trivy/README.md checked 2026-06-07; total_lines=147; analysis uses README-described capabilities only and did not run the project"
  - "[GH:local-scan] GitHub tree/API scan checked 2026-06-07: files=3444, languages=Go=6967759, Go Template=22040, Shell=14743, Mustache=1759, Yacc=1260, Dockerfile=143, workflow_count=22, workflows_sample=.github/workflows/auto-close-issue.yaml, .github/workflows/auto-ready-for-review.yaml, .github/workflows/auto-update-labels.yaml, .github/workflows/backport.yaml, .github/workflows/bypass-cla.yaml, .github/workflows/bypass-test.yaml, .github/workflows/cache-test-assets.yaml, .github/workflows/canary.yaml, test-ish files=702, docs-ish files=369, community_files={'code_of_conduct': 'https://api.github.com/repos/aquasecurity/trivy/community/code_of_conduct', 'code_of_conduct_file': 'https://api.github.com/repos/aquasecurity/.github/contents/CODE_OF_CONDUCT.md', 'contributing': 'https://api.github.com/repos/aquasecurity/trivy/contents/CONTRIBUTING.md', 'issue_template': None, 'pull_request_template': 'https://api.github.com/repos/aquasecurity/trivy/contents/.github/pull_request_template.md', 'license': 'https://api.github.com/licenses/apache-2.0', 'readme': 'https://api.github.com/repos/aquasecurity/trivy/contents/README.md'}"
  - "[GH:release] GitHub releases endpoint checked 2026-06-07: sampled latest tags=v0.71.0, v0.70.0, v0.69.3, v0.69.2, v0.26.0; sample_count=10"
  - "[GH:security-advisories] GitHub security-advisories endpoint checked 2026-06-07: returned 3; absence only means no advisory returned by this endpoint in this check, not proof of safety"
---

# Trivy

> Trivy 是综合安全扫描器，覆盖 container image、filesystem、Git repo、VM image、Kubernetes，并扫描 CVE、misconfig、secrets、SBOM 与 license。
>
> **状态**: `active` · **总分**: 4.5/5 · **推荐度**: 5/5
> **验证边界**: 本轮只做 GitHub metadata、README 与 tree/API scan；未安装、未构建、未运行、未复现实测 benchmark。

## 一句话总结

Trivy 是综合安全扫描器，覆盖 container image、filesystem、Git repo、VM image、Kubernetes，并扫描 CVE、misconfig、secrets、SBOM 与 license。 [GH:readme]

## 总体评价

README 的 target/scanner 矩阵非常明确，release/CI/test/docs 信号强。它适合作为 DevSecOps 基础工具；但扫描结果质量仍依赖漏洞数据库、配置策略和 CI 集成纪律。 截至 2026-06-07 的 GitHub 快照显示：stars=35983、forks=452、open issues=170、open PRs=76、最近采样 release=v0.71.0, v0.70.0, v0.69.3 [GH] [GH:release]。

评分采取保守口径：README/docs claim 只证明项目设计目标和公开描述，本轮没有实测运行效果；local scan 只证明文件结构、语言、workflow/test/docs 线索，不证明业务正确性、安全边界或性能数字 [GH:readme] [GH:local-scan]。

## 推荐度：5/5

**角色定位**：适合对 `security` 方向已有明确需求、愿意按 README 与源码边界自行验证的人。

推荐理由：
- 能力面与主题匹配：README 明确列出 targets 和 scanners，GitHub local scan 显示 22 workflows、702 个 test-ish 文件和大量文档文件，支撑较高工程成熟度判断。 [GH:readme]。
- 工程可审计性：仓库结构、语言分布、workflow/test/docs 数量已记录到 source 层，便于后续深挖 [GH:local-scan]。
- 风险前置：本条不把 star 数、官方品牌或 README benchmark 当作独立生产采用证据 [GH]。

**结论**：推荐度 5/5。可收录、可跟踪；是否采用取决于你的场景是否落在它的强项内，以及能否接受未实测/权限/运维边界。

## 优势

1. **定位清晰**：Trivy 是综合安全扫描器，覆盖 container image、filesystem、Git repo、VM image、Kubernetes，并扫描 CVE、misconfig、secrets、SBOM 与 license。 [GH:readme]
2. **工程信号可见**：本轮 tree/API scan 记录 files=3444、workflow_count=22、test-ish files=702、docs-ish files=369 [GH:local-scan]。
3. **社区/关注度信号强**：截至 2026-06-07 快照 stars=35983、forks=452；这只说明可见度，不直接证明质量或生产采用 [GH]。

## 劣势

1. **验证边界**：本轮没有安装、构建、运行、benchmark 或端到端 smoke test；README 能力均按“文档声称/仓库可见设计面”处理 [GH:readme]。
2. **维护/稳定性需看上下文**：open issues=170、open PRs=76 是点时快照；大项目/语言核心仓库不能简单等同 bug 密度 [GH]。
3. **安全结论保守**：security-advisories endpoint 没返回的项目也不能视作安全；高权限、模型、浏览器、账号或文件处理场景仍需独立 threat model [GH:security-advisories]。

---

## 适合什么场景

- 容器镜像和文件系统漏洞扫描
- Kubernetes/IaC misconfiguration 检查
- CI 中生成 SBOM、license 和 secrets 风险报告

## 不适合什么场景

- 把扫描结果当作完整安全审计
- 需要业务逻辑漏洞挖掘的场景
- 不愿维护漏洞数据库缓存/误报处置流程的团队

## 与类似项目对比

| 项目 | 定位 | 相对本项目 |
|------|------|-----------|
| Grype | 容器/文件系统漏洞扫描器参照项 | Trivy 覆盖面还包括 misconfig、secrets、license、Kubernetes 等 |
| Semgrep | 静态代码/规则扫描参照项 | Semgrep 更偏代码语义规则；Trivy 更偏供应链、配置与部署对象 |
| Snyk CLI | 商业安全扫描生态参照项 | Snyk 更偏商业 SaaS 生态；Trivy 是开源 CLI/生态组件 |

上述项目按 `security` 或相邻生态做定位级对比，未在本条中按同一 10 维度框架重审；表格不构成优劣 benchmark。

---

## 它能做什么

README 明确列出 targets 和 scanners，GitHub local scan 显示 22 workflows、702 个 test-ish 文件和大量文档文件，支撑较高工程成熟度判断。 [GH:readme]

可见的仓库层面能力线索包括：primary_language=Go、topics=security, security-tools, docker, containers, vulnerability-scanners, vulnerability-detection, vulnerability, golang, go, kubernetes, hacktoberfest, devsecops, misconfiguration, infrastructure-as-code, iac、files=3444、docs-ish files=369、test-ish files=702 [GH] [GH:local-scan]。

## 运行环境与资源占用

| 场景 | CPU | 内存 | 存储 | 说明 |
|------|-----|------|------|------|
| 最小 | CLI 扫描随目标大小和数据库更新而变；通常适合 CI/本地开发机 | 容器镜像/Kubernetes/IaC 扫描为中等占用；大型镜像和集群更高 | GitHub diskUsage≈936 MB；本地缓存漏洞数据库和镜像层另计 | 基于 README/依赖栈和仓库规模的启发式估计，非实测 |
| 推荐 | 按生产输入规模预留余量 | 按模型/浏览器/数据库/worker 数调整 | 数据、缓存、模型权重或构建产物另计 | 本轮未跑 benchmark |

- **运行时**：以 README/项目类型为准；本轮未实际启动。
- **操作系统**：未逐平台验证；以官方 README/文档声明为边界。
- **Docker**：frontmatter `docker_support=true` 只表示 README/local scan 有足够线索支持或不支持主路径，未 build image。
- **GPU**：frontmatter `gpu_required=false`；模型类项目即使 CPU 可跑，也可能需要 GPU 才有实用价值。
- **外部依赖**：依赖、账号、模型权重、数据库、浏览器、代理或云服务需求需按实际安装路径复核。

## 上手体验

评分 4/5。

依据：README 是否给出 quick start、安装/配置路径是否清晰，以及本轮是否看到 release、docs 和 workflow 线索 [GH:readme] [GH:release] [GH:local-scan]。未实装，因此不把“README 写得容易”当作真实零摩擦体验。

## 代码质量

评分 5/5。

依据：语言/文件结构、workflow_count=22、test-ish files=702、docs-ish files=369、release 信号和项目年龄 [GH:local-scan] [GH:release]。这个分数是静态仓库质量判断，不等于功能正确性或覆盖率实测。

## 可扩展性

评分 4/5。

依据：README 暴露的 API/plugin/module/model/config/workflow 扩展面，以及仓库结构是否支持二次开发 [GH:readme] [GH:local-scan]。没有运行扩展示例，因此只评价设计面和可见结构。

## 文档质量

评分 5/5。

README/docs-ish files=369；README 对核心定位、安装或功能说明的清晰度支撑该评分 [GH:readme] [GH:local-scan]。若项目另有外部文档，本轮未系统抓取完整站点，后续深审可补。

## 社区与成熟度

| 维度 | 评分 | 说明 |
|------|------|------|
| 社区活跃度 | 5/5 | stars=35983、forks=452、open issues=170、open PRs=76 是点时可见度和维护负载信号，不单独证明质量 [GH] |
| 成熟度 | 4/5 | created_at=2019-04-11T01:01:07Z，sampled releases=v0.71.0, v0.70.0, v0.69.3, v0.69.2, v0.26.0；成熟度按项目年龄、release/CI/test/docs 和稳定性声明综合判断 [GH] [GH:release] |

## 安全与风险

评分 4/5。

GitHub security-advisories endpoint 本轮返回结果已记录，但“无 advisory 返回”不是安全证明 [GH:security-advisories]。实际采用时至少检查：权限范围、账号/cookie/token 暴露面、依赖供应链、模型/文档数据上传路径、sandbox/隔离边界、license 与商业使用限制。

## 学习价值

学习价值主要在三个层面：一是理解 `security` 这一类项目当前如何组织能力；二是用 README claim 与 local scan 对照，训练“文档声称 vs 可审计事实”的边界感；三是把它与同类项目做定位级 comparison，而不是被 star 数或品牌牵引 [GH] [GH:readme] [GH:local-scan]。
