---

title: "Overleaf"
created: 2026-05-14
updated: 2026-07-12
type: repository-analysis
repo_url: "https://github.com/overleaf/overleaf"
category: "document-processing/editors"
tags: ["latex", "collaboration", "self-hosted", "docker", "typesetting", "academic"]
primary_language: "JavaScript/TypeScript"
license: "AGPL-3.0"
stars: 17915
forks: 2026
last_checked: 2026-07-12
last_verified: 2026-07-12
evidence: "GitHub API + official on-premises docs/advisories + issue verification"
archived_reason: ""
docker_support: true
gpu_required: false
estimated_cpu: "2-4 cores（reviewer estimate; workload-dependent）"
estimated_memory: "3-8 GB（reviewer estimate; workload-dependent）"
estimated_storage: "5-20 GB typical（reviewer estimate; TeX/project data-dependent）"
status: active
ratings:
  capability: 3
  usability: 3
  performance: 4
  code_quality: 3
  documentation: 4
  community: 4
  maturity: 4
  extensibility: 2
  security: 3
  recommendation: 4
overall_score: 3.4
sources:
  - "[GH] https://github.com/overleaf/overleaf"
  - "[Docs] Official on-premises docs inspected 2026-07-12: CE/Server Pro Docker deployment, air-gap operation, trusted-user boundary and lack of Sandbox Compiles in CE; https://docs.overleaf.com/on-premises"
  - "[Docs:Toolkit] Official Toolkit configuration docs inspected 2026-07-12; https://docs.overleaf.com/on-premises/configuration/overleaf-toolkit"
  - "[Wiki] https://github.com/overleaf/overleaf/wiki"
  - "[GH Security] GitHub security overview for overleaf/overleaf: https://github.com/overleaf/overleaf/security"
  - "[GH:Issue-1441] overleaf/overleaf#1441 about docker-compose/MongoDB compatibility; closed 2026-05-18, verified 2026-07-12: https://github.com/overleaf/overleaf/issues/1441"
  - "[GHSA-m95q-g8qg-wgj4] CVE-2024-45313 high: insecure defaults in Toolkit before 2024-07-17 and docker-compose before 2024-08-28; patched by those dated versions; https://github.com/overleaf/overleaf/security/advisories/GHSA-m95q-g8qg-wgj4"
  - "[GHSA-pxm4-p454-vppg] CVE-2024-45312 medium: aspell language-parameter issue; CE/Server Pro 4.x <4.2.7 and 5.x <5.0.7 affected, patched 4.2.7/5.0.7; https://github.com/overleaf/overleaf/security/advisories/GHSA-pxm4-p454-vppg"
  - "[GH:API-2026-07-12] GitHub API snapshot: active, default branch main, JavaScript, AGPL-3.0, 17,915 stars, 2,026 forks, 143 open issues, 20 open PRs, default-branch head 28ad3b03 (2026-06-26), repository pushed_at 2026-07-10; repository advisories endpoint returned the same two published 2024 advisories cited above."
  - "[GH:issues] Long-lived feature requests checked 2026-07-12: #198, #520 and #1400 remain open; https://github.com/overleaf/overleaf/issues/198 ; https://github.com/overleaf/overleaf/issues/520 ; https://github.com/overleaf/overleaf/issues/1400"
---

# Overleaf

> Web-based collaborative LaTeX editor；Community Edition 可通过官方 Docker/Toolkit 路径自托管，但只适用于全员可信环境。
>
> **状态**: `active` · **总分**: 3.4/5 · **推荐度**: 4/5

## 一句话总结

对需要自托管协作式 LaTeX、且所有用户都可信的实验室或研究团队，Overleaf Community Edition 是本次评估中最成熟的开源选择之一；若需要用户隔离、Sandbox Compiles 或企业身份治理，应评估 Server Pro 或 SaaS，而不是把 CE 暴露给不可信用户 [Docs]。

## 总体评价

Overleaf 仓库承载 web-based collaborative LaTeX editor 的开源代码；官方把 Community Edition（CE）和 Server Pro 都定义为 on-premises Docker deployments [GH] [Docs]。其优势不是“单机编辑器功能最多”，而是把浏览器编辑、协作与 LaTeX 编译放到一套长期维护的自托管产品中。

核心边界必须先说清：官方明确说明 CE 只适合**所有用户可信**的环境，因为 CE 不提供 Sandbox Compiles；非沙箱编译以 container 权限运行，可接触 container filesystem、network 与 environment variables [Docs]。因此 recommendation=4 只针对可信内网团队，不适用于公共多租户服务。

本次 material change 是旧安装问题的状态修正：#1441 曾报告 docker-compose/MongoDB 不兼容，但已于 2026-05-18 关闭。它不能再作为当前 compose 必然不可用的证据 [GH:Issue-1441]。

## 推荐度：4/5

**适用角色**：有 Docker/Linux 运维能力、所有用户都可信、需要数据驻留或离线部署的实验室/科研团队。

推荐理由：

- 官方维护 CE/Server Pro 的 Docker 与 Toolkit 文档，部署路径不是社区 fork [Docs] [Docs:Toolkit]。
- 可在 air-gapped server 运行；初次下载后可不依赖 Internet [Docs]。
- 仓库长期维护，当前仍有提交、issues 与 PR 活动 [GH:API-2026-07-12]。

硬前提：CE 缺少 Sandbox Compiles，不得把 4/5 解读为公共多租户推荐。若用户不互信，应使用提供 sandboxing 的产品线或其他隔离方案 [Docs]。

## 优势

1. **官方自托管产品线**：CE 与 Server Pro 都有官方 on-premises 文档和 Docker 路径 [Docs]。
2. **协作式 LaTeX 定位明确**：项目本身就是浏览器协作 LaTeX editor，而非需自行拼装的通用文本编辑器 [GH]。
3. **支持气隙环境**：官方文档说明下载后可在无 Internet 的 air-gapped server 运行 [Docs]。
4. **持续维护**：2026-07-12 有 143 open issues、20 open PRs，repository 仍活跃 [GH:API-2026-07-12]。
5. **安全边界写得清楚**：官方没有把 CE 包装成安全多租户；trusted-user requirement 与 Sandbox Compiles 缺失均明确披露 [Docs]。

## 劣势

1. **CE 无 Sandbox Compiles**：用户编译可接触 container filesystem、network 与 environment variables [Docs]。
2. **只适合全员可信环境**：公共服务、跨租户组织或不可信学生/外部用户场景不应直接采用 CE [Docs]。
3. **运维负担不低**：Docker、Toolkit、数据库与持久化数据都需要管理员维护；不能把“有官方容器”写成“一键、零运维” [Docs:Toolkit]。
4. **扩展机制有限**：深度定制通常依赖配置或维护 fork，而不是稳定插件 API。
5. **AGPL 合规要求**：若修改后通过网络向用户提供服务，需按 AGPL 条款向这些交互用户提供对应源码；这不是禁止商业使用，但会影响闭源修改的合规路径。

## 适合什么场景

- 可信实验室或研究团队的内部 LaTeX 协作
- 需要数据驻留、自主管理备份或 air-gap 的机构
- 有 Docker/Linux 管理能力，并愿意维护升级与持久化数据
- 评估 Overleaf on-premises 产品线的团队

> 团队规模与硬件需求取决于并发编译和项目大小；本文不把某个“5–50 人”数字当作官方支持范围。

## 不适合什么场景

- 任何需要隔离不可信用户的多租户服务 [Docs]
- 无法承担 Docker/数据库/升级运维的个人
- 只需单人 LaTeX 编辑、不需要协作的场景
- 要求插件市场或低成本深度定制的部署
- 不能接受 AGPL 网络交互源码义务的闭源修改方案

## 与类似项目对比

> 以下仅作定位；竞品未在本次 audit 中按同一 10 维框架复核。

| 项目 | 定位 | 相对本项目 |
|------|------|-----------|
| Overleaf Server Pro | 商业 on-premises 产品 | 与 CE 同属官方 on-premises 产品线，并提供 CE 缺失的 Sandbox Compiles 路径 [Docs] |
| overleaf.com | 官方 SaaS | 无自托管运维，但数据驻留、账户与服务边界由 SaaS 决定 |
| TeXstudio | 本地 LaTeX editor | 个人本地编辑更轻；不提供同类 self-hosted web collaboration 定位 |
| ShareLaTeX | 历史项目/品牌 | 已并入 Overleaf 历史，不应作为当前独立维护替代项 |

## 它能做什么

评分 3/5。

- 在浏览器中编辑 LaTeX 项目
- 多用户协作与项目共享
- 在 on-premises deployment 中编译 LaTeX
- 由机构自行管理项目数据、备份与网络边界
- 在 air-gapped server 上运行 [Docs]

扣分不来自核心协作编辑能力，而来自 CE 产品边界：Sandbox Compiles 不可用，因此 capability 不能按完整 Server Pro 或 SaaS 功能外推 [Docs]。

## 运行环境与资源占用

评分 4/5。

- **运行方式**：官方 Docker/Toolkit on-premises deployment [Docs] [Docs:Toolkit]
- **GPU**：不需要
- **网络**：初次获取 artifacts 后可 air-gap；这降低外部网络暴露，但不会防住恶意或被入侵的“可信用户” [Docs]
- **资源估算**：frontmatter 的 2–4 cores、3–8 GB RAM、5–20 GB typical storage 是 reviewer estimate，不是官方最低配置；实际值受 TeX distribution、项目数据、并发编译和备份策略影响
- **Docker support**：`true`，因为 CE/Server Pro 的官方用户路径就是 Docker deployment，而不只是仓库存在 Dockerfile [Docs]

## 上手体验

评分 3/5。

官方 Toolkit 给出了持续维护的配置入口 [Docs:Toolkit]。不过管理员仍需理解 Docker、持久化、数据库、反向代理、备份与升级；故这里只评价为“官方路径清晰”，不声称“一键”或“30 分钟必然完成”。

旧 #1441 已关闭是正面变化，但单个 issue 的关闭不等于所有环境组合都无安装摩擦 [GH:Issue-1441]。

## 代码质量

评分 3/5。

这是长期演化的大型 JavaScript/TypeScript repository，而非小型 standalone app。持续提交、20 open PRs 与公开 issue tracker 表明维护仍在进行 [GH:API-2026-07-12]。同时，大型 web/collaboration/compile surface 和历史兼容负担会增加测试与重构成本；本次未做 local build、coverage audit 或 service-count scan，因此不写精确 service/commit 数字。

## 可扩展性

评分 2/5。

CE 的主要定制面是 Toolkit/configuration 与源码修改 [Docs:Toolkit]。本文未验证稳定的第三方 plugin API 或 marketplace；深度定制通常意味着维护 fork，并承担 AGPL 与上游同步成本。Server Pro-only configuration 不计入 CE 的 extensibility 得分。

## 文档质量

评分 4/5。

官方 on-premises docs 清楚区分 CE 的 trusted-user boundary、Docker deployment、air-gap 与 Sandbox Compiles 缺失 [Docs]；Toolkit 也有独立配置文档 [Docs:Toolkit]。扣分在于：运维者仍需跨安装、配置、安全与升级页面理解完整系统，文档不能消除产品本身的部署复杂度。

## 社区与成熟度

| 维度 | 评分 | 说明 |
|------|------|------|
| 社区活跃度 | 4/5 | 17,915 stars、2,026 forks、143 open issues、20 open PRs，仓库仍活跃；#198、#520、#1400 等 feature requests 长期开放 [GH:API-2026-07-12] [GH:issues]。 |
| 成熟度 | 4/5 | 仓库长期维护，官方有 on-premises 产品与运维文档；但 CE 的成熟度不能从 SaaS/Server Pro 无条件外推，且自托管升级仍需运维验证。 |

公司主导治理和长期 feature requests 使 community 不到 5；稳定产品历史与官方部署路径支持 maturity=4。

## 安全与风险

评分 3/5。

**已发布且已修复 advisories**：

- CVE-2024-45312：CE/Server Pro 4.x <4.2.7、5.x <5.0.7 affected；patched 4.2.7/5.0.7 [GHSA-pxm4-p454-vppg]。
- CVE-2024-45313：Toolkit before 2024-07-17 与 docker-compose before 2024-08-28 affected；patched by those dated versions [GHSA-m95q-g8qg-wgj4]。

这些是历史攻击面证据，不表示当前 patched deployment 仍受同一漏洞影响。

**当前固有边界**：CE 无 Sandbox Compiles；非沙箱编译可访问 container filesystem、network、environment variables，因此只适用于全员可信环境 [Docs]。Docker 对 host 上其他应用提供一定 cross-application isolation，但**不隔离 CE 用户与 sharelatex container 内资源**，不能替代 Sandbox Compiles [Docs]。Air-gap 可减少外部网络威胁，同样不能防范恶意/被入侵的内部用户。

## 学习价值

**高**，但应聚焦可验证主题：

- 大型 collaborative editor 的开源仓库组织
- 官方 Docker/Toolkit 运维文档如何表达产品边界
- CE/商业产品线如何划分 security features
- 为什么 container isolation 与 per-user compile sandbox 是不同层级
- AGPL 网络服务义务如何影响 self-hosted software 的修改与分发

本次未核验具体 OT/CRDT 实现、精确 service count 或“production-grade orchestration”，故不把这些当作学习结论。
