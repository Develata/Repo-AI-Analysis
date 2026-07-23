---
title: "Trivy"
created: 2026-06-07
updated: 2026-07-23
type: repository-analysis
repo_url: "https://github.com/aquasecurity/trivy"
category: "programming/security"
tags: [security, scanner, container, kubernetes, sbom, iac, go]
previous_repo: ""
successor: ""
primary_language: "Go"
license: "Apache-2.0"
stars: 37021
forks: 548
last_checked: 2026-07-23
last_verified: 2026-07-23
evidence: "GitHub REST/GraphQL metadata + current README/changelog/security/governance/manifests + release/advisory/tree/community API scan; not installed, built, or smoke-tested"
archived_reason: ""
docker_support: true
gpu_required: false
estimated_cpu: "CLI 扫描随目标大小和数据库更新而变；通常适合 CI/本地开发机"
estimated_memory: "容器镜像/Kubernetes/IaC 扫描为中等占用；大型镜像和集群更高"
estimated_storage: "GitHub API repository size≈938 MB；本地缓存漏洞数据库和镜像层另计"
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
  security: 3
  recommendation: 4
overall_score: 4.3
sources:
  - "[GH] https://github.com/aquasecurity/trivy — authenticated GitHub REST/GraphQL snapshot 2026-07-23: created_at=2019-04-11T01:01:07Z, pushed_at=2026-07-22T15:09:31Z, default_branch=main, commit=2c64b8f58b63dfd33f4bec32fc001662c705c002, stars=37021, forks=548, open issues=165, open PRs=73, license=Apache-2.0, primary_language=Go, sizeKB=937840"
  - "[GH:readme] https://github.com/aquasecurity/trivy/blob/2c64b8f58b63dfd33f4bec32fc001662c705c002/README.md — inspected 2026-07-23; target/scanner matrix covers container images, filesystems, Git repositories, VM images and Kubernetes, with vulnerability, misconfiguration, secret, SBOM and license scanning; project was not run"
  - "[GH:changelog] https://github.com/aquasecurity/trivy/blob/2c64b8f58b63dfd33f4bec32fc001662c705c002/CHANGELOG.md — inspected 2026-07-23: v0.72.0 has a breaking migration to dockers_v2 and adds Bottlerocket matching, self-contained .NET runtime detection, JAR license extraction, CloudFront logging v2 and OpenAI/GitHub App secret rules, plus parser/scanner fixes"
  - "[GH:local-scan] GitHub tree/languages/community API scan at 2c64b8f58b63dfd33f4bec32fc001662c705c002 on 2026-07-23: files=3483, Go=7108526 bytes, workflow_count=22, test-ish files=755, docs-ish files=234, community_health=87, contributors endpoint returned 100 entries; README, CHANGELOG.md, go.mod, SECURITY.md, CONTRIBUTING.md and LICENSE inspected; no test execution"
  - "[GH:release] GitHub releases API checked 2026-07-23: latest release=v0.72.0 published 2026-06-30; v0.71.2 published 2026-06-19 and v0.71.1 published 2026-06-15"
  - "[GH:security-advisories] GitHub repository security-advisories API checked 2026-07-23: returned five published advisories. Current-relevant history: GHSA-69fq-xp46-6x23 critical supply-chain compromise affected Trivy v0.69.4, trivy-action <0.35.0 and setup-trivy <0.2.6 (advisory also records malicious Docker Hub v0.69.5/v0.69.6 images during a bounded March 2026 window); GHSA-q3fv-x8vg-qqm4 medium <0.71.0 patched 0.71.0; GHSA-mcj4-mphf-j9ff high <0.71.1 patched 0.71.1; GHSA-8rc5-4fr6-64pw medium <0.72.0 patched 0.72.0; GHSA-xcq4-m2r3-cmrj medium <0.51.2 patched 0.51.2. These are returned advisory metadata and historical attack-surface evidence, not a claim that v0.72.0 is currently vulnerable"
---

# Trivy

> Trivy 是综合安全扫描器，覆盖 container image、filesystem、Git repo、VM image、Kubernetes，并扫描 CVE、misconfig、secrets、SBOM 与 license。
>
> **状态**: `active` · **总分**: 4.3/5 · **推荐度**: 4/5
> **验证边界**: 本轮只做 GitHub metadata、README 与 tree/API scan；未安装、未构建、未运行、未复现实测 benchmark。

## 一句话总结

Trivy 是综合安全扫描器，覆盖 container image、filesystem、Git repo、VM image、Kubernetes，并扫描 CVE、misconfig、secrets、SBOM 与 license。 [GH:readme]

## 总体评价

README 的 target/scanner 矩阵、release/CI/test/docs 信号都很强，v0.72.0 还扩展了 Bottlerocket、.NET/JAR license、CloudFront 与 secret rules。但 2026 年曾发生 critical supply-chain compromise，随后又披露 artifact/plugin path traversal；最新稳定版已越过这些 advisory 返回的 patched version，仍应把 pinning、来源校验和最小权限视为采用前提 [GH:changelog] [GH:security-advisories]。

评分采取保守口径：README/docs claim 只证明项目设计目标和公开描述，本轮没有实测运行效果；local scan 只证明文件结构、语言、workflow/test/docs 线索，不证明业务正确性、安全边界或性能数字 [GH:readme] [GH:local-scan]。

## 推荐度：4/5

**角色定位**：适合需要在 CI、本地开发或集群流程中做供应链与配置扫描，并愿意固定版本/摘要、验证分发来源和维护数据库策略的 DevSecOps 团队。

推荐理由：
- 能力面与主题匹配：README 明确列出 targets/scanners，v0.72.0 又增加多类生态检测和修复；静态 scan 显示 22 workflows 与 755 个 test-ish 文件 [GH:readme] [GH:changelog] [GH:local-scan]。
- 工程可审计性：仓库结构、语言分布、workflow/test/docs 数量已记录到 source 层，便于后续深挖 [GH:local-scan]。
- 风险前置：critical supply-chain compromise 虽是已处置的历史事件，但足以否定“默认无条件采用”；应避免浮动 tag，核验 checksum/digest，并及时升级 [GH:security-advisories]。

**结论**：推荐度 4/5。能力面仍值得采用，但生产 CI 必须把 Trivy 自身当作高权限供应链工具治理，而不是只把它当“检查别人的安全工具”。

## 优势

1. **定位清晰**：Trivy 是综合安全扫描器，覆盖 container image、filesystem、Git repo、VM image、Kubernetes，并扫描 CVE、misconfig、secrets、SBOM 与 license。 [GH:readme]
2. **版本能力持续扩展**：v0.72.0 增加 Bottlerocket、self-contained .NET、JAR license 与新 secret rules，同时修复多个 parser/scanner 路径 [GH:changelog]。
3. **工程信号可见**：本轮 tree/API scan 记录 files=3483、workflow_count=22、test-ish files=755、docs-ish files=234，community health=87 [GH:local-scan]。

## 劣势

1. **验证边界**：本轮没有安装、构建、运行、benchmark 或端到端 smoke test；README 能力均按“文档声称/仓库可见设计面”处理 [GH:readme]。
2. **升级可能有迁移成本**：v0.72.0 明确包含 `dockers_v2` breaking migration；CI 升级不能只替换版本号 [GH:changelog]。
3. **供应链信任边界真实存在**：2026-03 critical compromise 涉及二进制、action/setup tags 与部分容器镜像；后续 path-traversal advisories 又说明自定义 artifact/plugin 输入必须视为不可信 [GH:security-advisories]。

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

上述项目按 `programming/security` 或相邻生态做定位级对比，未在本条中按同一 10 维度框架重审；表格不构成优劣 benchmark。

---

## 它能做什么

README 明确列出 targets 和 scanners；v0.72.0 在原有 container/filesystem/Git/VM/Kubernetes 与 CVE/misconfig/secrets/SBOM/license 覆盖上，继续增加 Bottlerocket、.NET runtime、JAR license 和 secret-rule 能力 [GH:readme] [GH:changelog]。

可见的仓库层面能力线索包括：primary_language=Go、files=3483、docs-ish files=234、test-ish files=755、workflow_count=22 [GH] [GH:local-scan]。

## 运行环境与资源占用

| 场景 | CPU | 内存 | 存储 | 说明 |
|------|-----|------|------|------|
| 最小 | CLI 扫描随目标大小和数据库更新而变；通常适合 CI/本地开发机 | 容器镜像/Kubernetes/IaC 扫描为中等占用；恶意 archive 也可能触发资源风险，因此应设置 runner limits | GitHub API repository size≈938 MB；本地缓存漏洞数据库和镜像层另计 | 基于 README/依赖栈和仓库规模的启发式估计，非实测 |
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

依据：语言/文件结构、workflow_count=22、test-ish files=755、docs-ish files=234、release 信号和项目年龄 [GH:local-scan] [GH:release]。这个分数是静态仓库质量判断，不等于功能正确性或供应链免疫。

## 可扩展性

评分 4/5。

依据：README 暴露的 API/plugin/module/model/config/workflow 扩展面，以及仓库结构是否支持二次开发 [GH:readme] [GH:local-scan]。没有运行扩展示例，因此只评价设计面和可见结构。

## 文档质量

评分 5/5。

README、CHANGELOG、SECURITY policy 与 234 个 docs-ish 文件覆盖主要能力和版本迁移；v0.72.0 的 breaking change 与 feature/fix 列表也清晰 [GH:readme] [GH:changelog] [GH:local-scan]。

## 社区与成熟度

| 维度 | 评分 | 说明 |
|------|------|------|
| 社区活跃度 | 5/5 | stars=37021、forks=548、open issues=165、open PRs=73 是点时信号；contributors endpoint 首页已满 100 条且 community health=87 [GH] [GH:local-scan] |
| 成熟度 | 4/5 | 项目创建于 2019 年，当前 v0.72.0，release/CI/tests/docs 稳定；但 breaking migration 与 2026 供应链事件要求运维成熟度，故不升 5 [GH:release] [GH:changelog] [GH:security-advisories] |

## 安全与风险

评分 3/5。

GitHub repository advisory API 本轮返回五条，其中三条直接影响 2026 年版本线：critical supply-chain compromise、artifact path traversal 与 plugin-manager arbitrary file write；另有 Helm chart tar-bomb OOM 和较早 registry credential leakage [GH:security-advisories]。返回元数据表明 v0.72.0 已越过这些条目的 patched version，因此不能把它们写成当前 v0.72.0 的活跃漏洞；但 critical compromise 证明分发链、floating action tags、镜像 tag 与缓存都属于真实 attack surface。生产 CI 应固定可信版本或 digest、验证 checksums/provenance、限制 scanner 账号和 runner 权限、只用可信 DB/plugin repository，并给扫描进程设置资源边界。

## 学习价值

学习价值主要在三个层面：一是理解 `programming/security` 这一类项目当前如何组织能力；二是用 README claim 与 local scan 对照，训练“文档声称 vs 可审计事实”的边界感；三是把它与同类项目做定位级 comparison，而不是被 star 数或品牌牵引 [GH] [GH:readme] [GH:local-scan]。
