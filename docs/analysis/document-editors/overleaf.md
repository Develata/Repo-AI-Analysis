---
title: "Overleaf"
created: 2026-05-14
updated: 2026-05-14
type: repository-analysis
repo_url: "https://github.com/overleaf/overleaf"
category: "self-hosted"
tags: ["latex", "collaboration", "self-hosted", "docker", "typesetting", "academic"]
primary_language: "JavaScript/TypeScript"
license: "AGPL-3.0"
stars: 17686
forks: 1973
last_checked: 2026-05-14
last_verified: 2026-05-14
evidence: "docs review + community reports"
archived_reason: ""
docker_support: true
gpu_required: false
estimated_cpu: "2-4 cores"
estimated_memory: "3-8GB"
estimated_storage: "5-20GB"
status: active
sharing_candidate: true
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
  - "[Docs] https://docs.overleaf.com/on-premises"
  - "[Wiki] https://github.com/overleaf/overleaf/wiki"
---

# Overleaf

> A web-based collaborative LaTeX editor — 学术界 LaTeX 协作的事实标准，Community Edition 可自托管。
>
> **状态**: `active` · **总分**: 3.4/5 · **推荐度**: 4/5

## 一句话总结

面向需要在可信环境中自托管 LaTeX 协作平台的科研团队或实验室——**自托管 LaTeX 编辑器的唯一成熟选择，但 Community Edition 的功能和安全模型有明确妥协**。

## 总体评价

Overleaf 是学术界 LaTeX 协作的绝对统治者。它的云服务（overleaf.com）拥有数百万用户，开源仓库则是整个平台的核心代码——通过 Docker Compose 即可部署 Community Edition（CE）。

这个仓库承载了 12 年的持续开发历史，包含完整的微服务架构（web、编译引擎、实时同步、文档存储、聊天等 12 个服务），代码量巨大（27,908 commits，230MB repo）。但 Community Edition 是一个**刻意功能受限**的产品——缺少评论、修订追踪、Git 集成、SSO、Sandboxed Compiles 等，这些全在 Server Pro（商业版）中。CE 的存在意义是：让信任环境中（如实验室内部）的团队免费使用核心 LaTeX 协作功能，同时作为 Server Pro 的漏斗。

**适合**：实验室自用、信任环境下的团队 LaTeX 协作、想摆脱 overleaf.com 编译时间/协作者限制的用户。

**不适合**：需要用户隔离的多租户场景、需要 SSO/LDAP 的组织、需要评论/修订追踪等高级协作功能的团队。

> 一句话：Community Edition 是「你可以免费用的 Overleaf 核心引擎」，但缺失的安全和协作功能是故意的，不是 bug。

## 推荐度：4/5

**定位**：对于需要在可信环境中自托管 LaTeX 协作的科研团队，Overleaf CE 是唯一的成熟选择。它不是最好的 LaTeX 编辑器（TeXstudio 的编辑体验更强），也不是功能最全的方案（Server Pro 才是），但它是自托管 LaTeX 协作这个细分领域中唯一真正可用的产品。

**痛处**：Sandboxed Compiles 缺失意味着 CE 中的任何用户都可以通过 LaTeX 编译访问容器文件系统、网络和环境变量。这在所有用户可信的实验室内部不是问题，但在任何需要用户隔离的场景中都是硬伤。此外，社区安装体验有摩擦——docker-compose.yml 存在已知的 MongoDB 版本兼容问题 [GH: Issue #1441]，Toolkit 的文档也假定用户有 Docker/Linux 经验。

**结论**：愿意接受「全用户可信」的安全模型和「无高级协作功能」的前提下，CE 值得部署。如果这两个前提不成立，要么上 Server Pro，要么用云版 overleaf.com。

## 优势

1. **自托管 LaTeX 协作的唯一成熟方案**：12 年开发历史，与 overleaf.com 共享核心代码库，功能经过大规模生产验证。
2. **完整的 LaTeX 编译环境**：内嵌 TeX Live，编译体验与云版一致。
3. **Docker 一键部署**：通过 Toolkit 的 `bin/init && bin/up` 即可启动，官方维护 Docker 镜像。
4. **无使用限制**：自托管版本无编译时间、协作者数量、项目数限制——这正是很多人从 overleaf.com 逃到 CE 的核心动机。
5. **官方文档体系完善**：docs.overleaf.com 有结构化的 On-premises 文档，Server Pro vs CE 对比清晰。

## 劣势

1. **Sandboxed Compiles 仅 Server Pro 可用**：CE 中 LaTeX 编译以容器权限运行，用户可访问文件系统、网络、环境变量。这是 CE 最大的安全边界。
2. **高级协作功能全部缺失**：评论、修订追踪（Track Changes）、Git 集成、模板管理系统、Symbol Palette 均为 Server Pro 专属 [Docs]。
3. **无 SSO/LDAP**：CE 的用户管理极简陋，无企业级认证集成。
4. **安装有隐性障碍**：Toolkit 文档假定 Docker/Linux 知识；`docker-compose.yml` 存在已知的 MongoDB 版本兼容问题 [GH: Issue #1441]；第三方安装指南作者反映「官方文档很难实施」。
5. **无插件/扩展系统**：除了环境变量和源码修改，几乎没有设计的扩展点。
6. **AGPL-3.0 强 Copyleft**：修改代码后如对外提供服务，必须开源。对商业使用有限制。

---

## 适合什么场景

- 实验室内 5-50 人的 LaTeX 协作（所有人可信）
- 大量编译、大文档（PhD 论文、书籍），不受 overleaf.com 编译时间限制
- 需要完全控制数据和隐私的科研环境
- 作为评估 Server Pro 前的试用

## 不适合什么场景

- 多用户不可信的环境（如为不特定用户提供 LaTeX 服务）
- 需要评论/修订追踪等高级协作功能的团队
- 需要 SSO/LDAP 集成的组织
- 缺少 Docker/Linux 运维能力的个人
- 只是个人写作、不需要协作（直接用 TeXstudio 等本地编辑器更轻量）

## 与类似项目对比

| 项目 | 定位 | 相对本项目 |
|------|------|-----------|
| Overleaf Server Pro | Overleaf 商业自托管版 | 功能完整（Sandboxed Compiles、修订追踪、SSO），但需付费 |
| overleaf.com（云版） | SaaS LaTeX 协作 | 零运维，但有编译时间/协作者限制 |
| TeXstudio | 本地 LaTeX IDE | 编辑体验更强，无协作功能，无自托管需求 |
| ShareLaTeX | （已被 Overleaf 合并） | 2017 年合并进入 Overleaf，原代码即为本仓库前身 |

## 个人主页 sharing 候选

**是**。Overleaf CE 是每个 LaTeX 用户都可能感兴趣的部署方案——「搭建一个没有编译时间限制的私人 Overleaf」具有强的叙事性。成熟度（12 年）和新颖性（对不熟悉自托管的人来说）都满足分享条件。

---

## 它能做什么

- **实时协作 LaTeX 编辑**：多用户同时编辑同一文档，WebSocket 驱动的实时同步
- **LaTeX 编译**：内嵌 TeX Live，支持完整 LaTeX 编译管线
- **项目历史**：完整的项目版本历史与回滚
- **文件管理**：上传图片、参考文献、样式文件等
- **基本的项目共享**：项目链接分享
- **编译输出下载**：生成 PDF 并下载

**CE 不具备（Server Pro 专属）**：评论、修订追踪（Track Changes）、Git 集成、Symbol Palette、模板管理系统、SSO/LDAP、Sandboxed Compiles [Docs]。

## 运行环境与资源占用

| 场景 | CPU | 内存 | 存储 | 说明 |
|------|-----|------|------|------|
| 最小（~5 并发） | 2 cores | 3 GB | ~10 GB | 基础运行，包含 TeX Live |
| 推荐（10-20 并发） | 4 cores | 8 GB | ~20 GB | 日常实验室使用 |
| 大规模（100+ 并发） | 8+ cores | 32 GB | ~50 GB | 需调优 Nginx worker |

- **运行时**：Docker Compose（sharelatex + mongo + redis 三个容器，CE 不含 Sandboxed Compiles 的 sibling containers）
- **操作系统**：推荐 Ubuntu/Debian；官方仅支持 Docker 25.0–29、MongoDB 7.0–8.0、Redis 6.2–7.5 [Docs]
- **Docker**：官方镜像 `sharelatex/sharelatex`，通过 Toolkit 管理
- **GPU**：不需要
- **外部依赖**：Docker、git（仅安装时）。部署后可完全离线运行
- **关键性能特征**：LaTeX 编译为单线程——单核性能比多核更重要。多核仅在并发编译超过空闲核心数时有价值 [Wiki]

## 上手体验

评分 3/5。

Toolkit 的 Quick Start Guide 将安装简化为三步：`git clone` → `bin/init` → `bin/up`，之后通过 `/launchpad` 创建管理员账户。从零到使用 <30 分钟在理想情况下可行 [Docs]。

但现实中有摩擦：
- **Docker/Linux 前置知识**：文档假定用户熟悉 Docker 命令和 Linux 运维
- **MongoDB 兼容性问题**：Issue #1441 报告 `docker-compose.yml` 存在 MongoDB 版本与 sharelatex 镜像不兼容的问题，不能开箱即用
- **Sandbox 配置陷阱**：`docker-compose.yml` 中默认启用了 Sandboxed Compiles 相关变量，CE 用户必须注释掉，否则编译报错
- **第三方指南作者反馈**：「官方指南很难实施」[第三方指南]

对于有 Docker 经验的用户，CE 部署是可控的。对于没有运维背景的 LaTeX 用户，可能需要半天时间排错。

## 代码质量

评分 3/5。

**架构**：12 个微服务（web、clsi、document-updater、real-time、filestore、docstore、chat、contacts、notifications、git-bridge、history-v1、project-history）+ MongoDB + Redis。模块边界清晰，服务职责单一。

**测试**：有 Cypress E2E 测试框架（repo 中有 `dockerfiles/cypress/`），但未公开测试覆盖率数据。Issue 列表中常见与部署兼容性相关的问题（MongoDB 版本、docker-compose 配置），表明集成测试可能有盲区。

**维护性**：12 年历史的代码库（2014 年起），经历 ShareLaTeX 合并（2017），代码中至今仍有大量 `sharelatex` 命名遗留。TypeScript 逐步引入但仍以 JavaScript 为主。贡献者需要签 CLA。

**问题**：
- 已知 docker-compose.yml 开箱不可用 [GH: Issue #1441]
- 服务间耦合较重——CE 设计上是把所有微服务打包进单个 sharelatex 容器（实际仍是微服务但部署为 monolithic container）

并非混乱的代码库，但 12 年的技术债和合并历史是真实存在的。

## 可扩展性

评分 2/5。

Overleaf CE **没有设计的插件或扩展系统**。定制只能通过：

- **环境变量**：`variables.env` 中暴露了品牌、SMTP、LDAP（仅 Pro）等配置
- **源码修改**：AGPL-3.0 许可，可以 fork 后修改，但需开源
- **外部代理**：可前置 nginx 实现 TLS 终止、访问控制

对比典型的可扩展系统（VS Code 的插件市场、Discourse 的 Plugin API），Overleaf CE 的扩展面积极窄。深度定制基本等于维护一个 fork。

Server Pro 通过 Sandboxed Compiles 的 sibling containers 提供了编译环境隔离，但这属于安全边界，不是"可扩展性"范畴。

## 文档质量

评分 4/5。

- **官方 On-premises 文档**（docs.overleaf.com/on-premises）：Gitbook 托管，结构清晰。涵盖安装、配置、升级、故障排查、Server Pro vs CE 对比
- **GitHub Wiki**：开发者文档，包含硬件要求、Release Notes、Sandboxed Compiles 指南 [Wiki]
- **Toolkit Quick Start Guide**：简洁三步部署流程，关键路径覆盖
- **docker-compose.yml 注释**：内嵌大量环境变量说明和 CE/Pro 差异说明，相当于配置文档即代码

扣分点：
- 文档假定 Docker/Linux 知识，对非技术用户不友好
- Wiki 中有大量 `sharelatex` 遗留命名未更新 [Wiki]
- 社区部署常见问题（MongoDB 兼容性、sandbox 变量注释）未在 Quick Start 中预警

## 社区与成熟度

| 维度 | 评分 | 说明 |
|------|------|------|
| 社区活跃度 | 4/5 | 17,686 stars，1,973 forks，活跃维护（最后 push 为当天），157 open issues 对于此规模的项目偏低；Toolkit 仓库有 1,216 stars 和 119 issues。未开启 GitHub Discussions，部分 feature request 停留多年未关闭（#198, #520, #1400） |
| 成熟度 | 4/5 | 12 年历史（2014.2–至今），overleaf.com 服务数百万用户。但 Community Edition 跟踪 main 分支而非结构化发布，CE 的成熟度不等同于 SaaS 版本的生产稳定性。Server Pro 有 v5/v6 系列版本管理，CE 部署体验中仍存在开箱不可用的问题 |

Overleaf 的成熟度无可争议——它是 LaTeX 协作编辑器的品类定义者。社区的活跃度良好但并非爆炸式：issue 数偏低暗示维护团队在持续处理，但 issue 中也有 feature request 停留多年未关闭（#198, #520, #1400 等）的情况。

## 安全与风险

评分 3/5。

**已知 CVE**：
- CVE-2024-45312（2024.9）：拼写检查中的 aspell 可执行文件允许任意语言参数传递 [GHSA-pxm4-p454-vppg]
- CVE-2024-45313（2024.9）：Server Pro 旧版 Toolkit 和 docker-compose 的默认配置不安全 [GHSA-m95q-g8qg-wgj4]
- 两个 CVE 均已修复

**CE 特有安全风险**：
- **无 Sandboxed Compiles**：LaTeX 编译以容器权限运行。取决于 TeX 发行版的 shell-escape 配置，恶意 LaTeX 文档可能通过 `\write18` 执行任意 shell 命令。官方明确声明 CE「仅适用于所有用户可信的环境」[Docs]
- 这意味着在未配置 shell-escape 限制的 CE 部署中，用户权限等同于容器级别

**许可风险**：
- AGPL-3.0：强 Copyleft，修改后如对外提供网络服务，必须公开源码
- 内含大量 GPL 依赖（TeX Live 等）

**正面**：
- 官方有安全策略和披露流程 [GH Security]
- Docker 容器化本身提供了一层隔离（应用与宿主机之间）
- 支持完全离线/气隙部署，减少外部攻击面

评分 3 而非更低，因为：安全边界被**清晰文档化**，CE 的设计意图就是信任环境，不是安全漏洞。对于目标场景（实验室内部可信用户），风险可控。

## 学习价值

**高**。Overleaf 的代码库是学习大型 Node.js/TypeScript 微服务架构的绝佳案例：

- **微服务拆分**：12 个服务的职责划分、通信模式值得研究
- **实时协作**：WebSocket + document-updater 的 OT/CRDT 实现
- **Docker 化部署**：Toolkit 的 bin/ 脚本展示了生产级 Docker Compose 编排
- **商业化开源**：Studying Overleaf 的 CE/Pro 分化策略对理解开源商业模式有启发
- **LaTeX 编译管线**：clsi（Core LaTeX Service Instance）服务是 LaTeX 编译引擎封装的好例子

即使不部署，阅读 Overleaf 的架构设计和 `docker-compose.yml` 也是值得的。
