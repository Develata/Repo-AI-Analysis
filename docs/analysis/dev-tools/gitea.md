---
title: "Gitea"
created: 2026-07-05
updated: 2026-09-10
type: repository-analysis
repo_url: "https://github.com/go-gitea/gitea"
category: "dev-tools"
tags: [git, git-hosting, self-hosted, devops, packages, ci-cd, go, docker]
previous_repo: ""
successor: ""
primary_language: "Go"
license: "MIT"
stars: 57912
forks: 7120
last_checked: 2026-09-10
last_verified: 2026-09-10
evidence: "GitHub API/releases/paginated advisories, README/security/governance/manifests and official Docker/backup docs review 2026-09-10; no build, deployment, database migration, restore drill, runner test or benchmark"
archived_reason: ""
docker_support: true
gpu_required: false
estimated_cpu: "Git traffic, indexing and enabled services dominate; runner cost separate"
estimated_memory: "instance/database/search workload dependent; unmeasured"
estimated_storage: "repositories, LFS, attachments, packages, Actions artifacts, database and backups"
status: active
ratings:
  capability: 5
  usability: 4
  performance: 4
  code_quality: 4
  documentation: 5
  community: 4
  maturity: 4
  extensibility: 4
  security: 3
  recommendation: 4
overall_score: 4.1
sources:
  - "[GH:api] https://api.github.com/repos/go-gitea/gitea checked 2026-09-10 UTC+8: canonical unchanged, archived=false, disabled=false, main, pushed_at=2026-09-09T17:58:28Z, Go, MIT, stars=57912, forks=7120, created_at=2016-11-01; separate GitHub search open issues=2266, open PRs=190"
  - "[GH:release] https://github.com/go-gitea/gitea/releases/tag/v1.27.3 published 2026-08-29T17:42:17Z, read 2026-09-10; latest stable in ten-release API sample, preceded by 1.27.2/1.27.1. Security fixes cover package/token scopes, attachment repository ownership, markup access, artifact signatures, fork PR trust, hook permissions and bounded migration/package inputs."
  - "[GH:advisories] https://api.github.com/repos/go-gitea/gitea/security-advisories?per_page=100 fully paginated 2026-09-10: 110 published entries, not 110 live vulnerabilities. Sample GHSA-hxhc-246f-rvqc (other/code.gitea.io/gitea) org repo creation token scope and GHSA-pq8x-xpgp-rvmh (go/code.gitea.io/gitea) permissive Git hook modes both list <=1.27.2 affected, patched=1.27.3; GHSA-7w2r-xwp6-mh6c (go/code.gitea.io/gitea) fork PR review-comment approval bypass lists >=1.20.0,<=1.27.1 affected, patched=1.27.3. All three published 2026-08-29. Metadata retained as reported, not extrapolated to omitted versions or every installation."
  - "[GH:security] https://github.com/go-gitea/gitea/blob/main/SECURITY.md inspected 2026-09-10: supported security fixes follow most recent major release/main policy, private advisory preferred or security@gitea.io; PGP key now documented valid until 2027-07-23, unlike old July-2026 expired-date snapshot; public key not cryptographically revalidated in this audit"
  - "[GH:source] https://github.com/go-gitea/gitea/blob/main/README.md, CONTRIBUTING.md, CODE_OF_CONDUCT.md, LICENSE, go.mod and package.json inspected via contents API 2026-09-10; tree snapshot 81dee529edf72e03c966fad1457f1f366cdac3a3, 6271 blob paths; Git/PR/issues/projects/wiki/packages/Actions, MIT; main go.mod uses module gitea.dev, go1.27/toolchain go1.27.1; frontend Node>=22.18.0, pnpm>=11.0.0, packageManager pnpm@12.2.1. Main build metadata is not asserted as 1.27.3 release requirement."
  - "[Docs:docker] https://docs.gitea.com/installation/install-with-docker read 2026-09-10: official docker.gitea.com/gitea:1.27.3 example, SQLite/MySQL/PostgreSQL, data volume and UID/GID, rootful/rootless not interchangeable; image not pulled"
  - "[Docs:backup] https://docs.gitea.com/administration/backup-and-restore read 2026-09-10: shutdown required by documented consistency procedure; dump ZIP includes config/data/repos/DB; native DB dump may be preferable; no automated restore command, manual restore and hook regeneration when paths/install method change"
  - "[WikiLocal:comparison] Prior Gitea analysis compares GitLab CE, Forgejo and SourceHut as forge-positioning alternatives; no fresh competitor ten-dimension or governance audit"
---

# Gitea

> 功能完整的自托管 Git forge；1.27.3 已取代旧 1.26.4 基线，安全升级、runner 隔离和一致性备份仍是采用前提。
>
> **状态**: `active` · **总分**: 4.1/5 · **推荐度**: 4/5

## 一句话总结

Gitea 适合愿意承担升级和备份责任的个人/小团队，统一管理 Git、PR、issues、packages 与 CI；它不是装好就能长期忽略的代码保险箱 [GH:source][GH:release]。

## 总体评价

Go 服务、数据库和存储组合让完整 forge 的自托管路径相对清晰。但账号权限、token、Git hooks、包上传、Actions 和 webhook 都处理高价值资产；功能集中也集中安全责任。

当前 stable 已到 **1.27.3**，并包含多项权限/输入边界修补。本轮完整分页取得 110 条公开 GHSA，不能与旧快照的 28 条直接作“漏洞恶化倍数”比较，更不能全部视为现存漏洞 [GH:release][GH:advisories]。旧分析中报告加密密钥“已过期”的提示也应撤下：当前 SECURITY 文档给出的到期日为 2027-07-23，但本轮未做密钥签名校验 [GH:security]。

## 推荐度：4/5

**目标角色**：希望控制代码与协作数据、可维护 VPS/数据库/TLS 的个人和小团队。Git hosting 为主的私有实例很值得评估；开放注册、公共 CI 和大量包上传则应单独做 threat model、quota 和 runner 隔离。

推荐不等于本轮已完成部署。升级前备份并验证恢复路径，确认实际安装版本受安全支持；不要把“1.x”理解为整个大系列无限期获得安全补丁 [GH:security][Docs:backup]。

## 优势

1. Git/PR/issues/wiki/projects/packages/CI 覆盖同一协作域的主要需求 [GH:source]。
2. 官方容器和数据库组合说明具体，适合逐步从小实例扩展 [Docs:docker]。
3. MIT 许可明确，Go/前端工程有分层和独立依赖管理 [GH:source]。
4. release notes 和 GHSA 可关联安全修复，不必只依赖口头“最新版安全” [GH:release][GH:advisories]。

## 劣势

1. forge 与 CI/registry 不是同一风险等级；启用新功能需要重新划权限。
2. 备份要处理数据库、仓库和文件一致性，官方恢复仍为手工过程 [Docs:backup]。
3. 配置、外部数据库、索引、认证和 runner 扩展会逐步增加运维复杂度。
4. 1.27.3 仍有多类安全修补，不能只按常规功能发布安排低频升级 [GH:release]。

## 适合什么场景

- 私有 Git forge、个人代码协作与受控镜像。
- 小团队统一 repo、issue、PR 和轻量包分发。
- 有独立执行环境、最小权限 secret 的内部 Actions。

## 不适合什么场景

- 不愿处理备份、恢复演练、安全公告和数据库升级的用户。
- 直接在主服务宿主上运行陌生用户的 CI。
- 只需 bare Git/read-only 浏览，却不需要完整账号协作系统的极简场景。

## 与类似项目对比

| 项目 | 定位 | 相对本项目 |
|------|------|-----------|
| GitLab CE | 一体化 DevOps 平台 | 通常选择于更完整的平台需求；Gitea 更聚焦较轻的自托管 forge。 |
| Forgejo | 与 Gitea 有代码亲缘的 forge | 应分别评估治理、发布和兼容，不把二者版本/安全状态互相套用。 |
| SourceHut | 邮件/Unix 工作流中心的 forge | 协作方式不同；Gitea 更接近常见 Web PR/issues 模型。 |

仅沿用 forge 邻域定位，不作本轮治理优劣或资源 benchmark 结论 [WikiLocal:comparison]。

## 它能做什么

能力 **5/5** 指 Git forge 主域覆盖：仓库管理、PR/code review、issues/project/wiki、团队协作、packages 和 Actions [GH:source]。并不意味着企业合规、CI 隔离或灾备自动完成。

1.27.3 对 token scope、fork PR 审批和 artifact signature 的修复提醒：功能“存在”与每一条权限路径正确是不同问题 [GH:release]。

## 运行环境与资源占用

| 项目 | 判断 |
|------|------|
| 运行 | Gitea 服务、Git、数据库与数据目录 |
| 数据库 | 官方 Docker 文档给出 SQLite、MySQL、PostgreSQL |
| CPU/内存 | Git 并发、索引、数据库与启用服务主导；runner 另算 |
| 存储 | repo/LFS/attachments/packages/artifacts/DB/backup |
| 构建 | main 当前 Go1.27/toolchain1.27.1；Node/pnpm 是前端构建工具，不是每次运行都要安装 |
| Docker/GPU | 官方 image 已核验文档；不要求 GPU |

资源效率 **4/5** 是单体 forge 架构判断，非本轮实测。不要把 main 工具链要求误写成 release 二进制部署依赖，也不要忽视 Actions 与大包数据增长 [GH:source][Docs:docker]。

## 上手体验

**4/5**。官方 Compose 示例可快速建立实例，但 volume UID/GID、ROOT_URL、SSH/TLS 和数据库仍需正确配置；rootful/rootless 不能只换 image 名称就迁移 [Docs:docker]。

起服务不等于完成上线：应验证 Git push/pull、账号权限、备份与恢复，尤其不能把成功生成 dump ZIP 当作已经证明恢复可用 [Docs:backup]。

## 代码质量

**4/5**。Go 主体、前端和数据/服务/路由分层，以及依赖/贡献文档能支持维护判断 [GH:source]。本轮没有 build、数据库 migration 或测试执行；大量权限相关修补说明不能按规模与 CI 存在打 5 [GH:release]。

## 可扩展性

**4/5**。API、webhook、Git、packages、Actions 与可选存储/认证构成外部扩展面 [GH:source]。深度改 UI、权限或工作流可能需要维护 fork，不是无边界的插件内核；外部执行器的权限必须独立管理。

## 文档质量

**5/5**。Docker 文档具体到 rootful/rootless 与数据权限，backup 文档明确一致性、原生数据库 dump 和手工恢复限制，而不是只展示成功命令 [Docs:docker][Docs:backup]。README/贡献与安全文档覆盖操作和治理入口 [GH:source][GH:security]。

## 社区与成熟度

社区 **4/5**，成熟度 **4/5**。2016 年创建，当前持续发布；快照 57912 stars、7120 forks、2266 issues、190 PRs [GH:api]。长期维护明确，但本轮没有对 contributor 响应速度/治理作充分核验，社区从旧 5 校准到 4，不把关注度直接当开放治理满分。

成熟度维持 4：已是完整平台，但稳定维护仍包含数据库、Actions 和权限行为变更，不能视为不再需要升级的完成态系统。

## 安全与风险

安全 **3/5**。抽样官方公告给出：org repository creation token scope 与 Git hook 权限问题影响 `<=1.27.2`，修复于 `1.27.3`；fork PR review-comment 审批绕过公告列 `>=1.20.0,<=1.27.1`，patched 仍为 `1.27.3`。严格保留这些 API 元数据，不推断未列版本必定安全，也不把 110 个历史条目等同当前暴露 [GH:advisories]。

当前 SECURITY 首选私有 GitHub advisory，邮件为可选入口，密钥文档已更新；实际提交敏感报告前仍应验证接收密钥 [GH:security]。

部署应限制注册、PAT scope、webhook 出口和 package 配额；隔离 runner 与主服务/数据库/备份凭据。根据当前支持政策和实际版本安排补丁，而不是只读 README。备份须覆盖与 Git 数据一致的数据库和附件，并执行独立恢复演练 [Docs:backup]。

## 学习价值

值得研究长期 Go 单体如何容纳 Git、数据库、Web 权限、包仓库与 CI；也值得研究同一权限策略在多个 API 路径怎样漏校验。功能越集中，越需要跨路由一致性与可恢复性测试，而不是只测每个页面能够打开 [GH:release][GH:advisories]。
