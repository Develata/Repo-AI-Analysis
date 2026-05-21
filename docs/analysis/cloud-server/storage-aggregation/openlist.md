---


title: "OpenList"
created: 2026-05-19
updated: 2026-05-21
type: repository-analysis
repo_url: "https://github.com/OpenListTeam/OpenList"
category: "cloud-server/storage-aggregation"
tags: [cloud-storage, cloud-storage-aggregation, self-hosted, webdav, storage, go, alist-fork]
previous_repo: ""
successor: ""
primary_language: "Go"
license: "AGPL-3.0"
stars: 22586
forks: 1974
last_checked: 2026-05-19
last_verified: 2026-05-19
evidence: "docs review + GitHub API metadata + local shallow clone scan + security advisory review"
archived_reason: ""
docker_support: true
gpu_required: false
estimated_cpu: "1-2 cores for small personal deployments"
estimated_memory: "256MB-1GB for small personal deployments; higher under preview/search/transcoding/storage-heavy workloads"
estimated_storage: "binary/config small; storage depends on mounted backends and cache"
status: active
sharing_candidate: true
ratings:
  capability: 5
  usability: 4
  performance: 4
  code_quality: 3
  documentation: 4
  community: 4
  maturity: 3
  extensibility: 4
  security: 2
  recommendation: 4
overall_score: 3.7
sources:
  - "[GH] https://github.com/OpenListTeam/OpenList — GitHub API checked 2026-05-19: created_at=2025-06-13T05:29:49Z, stars=22586, forks=1974, open_issues_count=258, open_issues=205, open_prs=53, pushed_at=2026-05-19T07:55:52Z, latest stable release=v4.2.1, releases=24, contributors=237, languages=Go/Shell/Dockerfile/Makefile"
  - "[Docs] https://doc.oplist.org"
  - "[GH:readme] https://github.com/OpenListTeam/OpenList/blob/main/README.md"
  - "[GH:contributing] https://github.com/OpenListTeam/OpenList/blob/main/CONTRIBUTING.md"
  - "[GH:security] https://github.com/OpenListTeam/OpenList/blob/main/SECURITY.md"
  - "[GH:advisories] https://github.com/OpenListTeam/OpenList/security/advisories — checked 2026-05-19: GHSA-qmj2-8r24-xxcq/CVE-2026-25059 high patched in 4.1.10, GHSA-wf93-3ghh-h389/CVE-2026-25060 high patched in 4.1.10, GHSA-2hw3-h8qx-hqqp/CVE-2025-50183 medium patched in 4.0.0-rc.4"
  - "[GH:local-scan] /tmp/repo-analysis-spec-openlist/OpenList at 31b41f99f8ac0c11f7f5b0aef6dce251eb69ee62, cloned 2026-05-19: 786 git-tracked files, 737 Go files, 32 Go test files, 83 driver dirs, 9 workflow files, Dockerfile + docker-compose.yml present, go.mod requires Go 1.24/toolchain 1.24.13"
  - "[GH:alist] https://github.com/AlistGo/alist — GitHub API checked 2026-05-19: stars=49501, forks=7942, language=Go, license=AGPL-3.0, pushed_at=2026-05-16T05:50:36Z, description=file list/WebDAV program supporting multiple storages"
  - "[GH:cloudreve] https://github.com/cloudreve/cloudreve — GitHub API checked 2026-05-19: stars=27780, forks=3832, language=Go, license=GPL-3.0, pushed_at=2026-05-10T02:55:43Z, description=self-hosted file management and sharing system supporting multiple storage providers"
  - "[GH:rclone] https://github.com/rclone/rclone — GitHub API checked 2026-05-19: stars=57256, forks=5098, language=Go, license=MIT, pushed_at=2026-05-18T17:34:56Z, description=rsync for cloud storage across Google Drive/S3/Dropbox/OneDrive/Azure/etc."
---

# OpenList

> AList 的社区治理 fork：自托管多存储文件列表、WebDAV、预览、上传下载与分享平台，强调长期开放治理与反信任危机。
>
> **状态**: `active` · **总分**: 3.7/5 · **推荐度**: 4/5

## 一句话总结

OpenList 是一个面向个人和小团队的 self-hosted file listing / WebDAV / multi-storage gateway：它继承 AList 的多网盘聚合能力，并以 AGPL-3.0、社区维护、治理透明作为与原项目区分的核心叙事 [GH:readme]。

## 总体评价

OpenList 的定位很清楚：不是云盘本身，而是把本地存储、对象存储、网盘、WebDAV、FTP/SFTP 等多种后端统一暴露为网页文件管理与分享体验。README 列出的 storage backends 极多，功能包括预览、图库、音视频、Office 文档、WebDAV、Docker 部署、Cloudflare Workers proxy、离线下载、跨存储复制与多线程下载加速 [GH:readme]。

它最强的价值是“可用性 + 广度”：对想把各种网盘资源聚合到一个网页入口的人，它的 capability 非常强。OpenList 还是 AList 生态 trust crisis 后的治理型 fork，明确声明独立维护、AGPL、项目自身无付费计划、且不与第三方同名商业项目关联 [GH:readme]。这让它不只是技术 fork，也是一种社区治理选择。

风险也同样真实：OpenList 是网络暴露型文件管理服务，attack surface 天然大；截至 2026-05-19，GitHub advisories 页面列出 3 个公开安全公告，其中包括 path traversal、默认 TLS certificate verification disabled、Markdown preview XSS 等问题 [GH:advisories]。同时 258 个 open issues/PRs 和大量存储 driver 说明维护复杂度高 [GH] [GH:local-scan]。

## 推荐度：4/5

**角色定位**：推荐给需要自托管多网盘聚合、文件分享、WebDAV 与网页预览的个人用户、家庭服务器用户、小团队管理员；前提是以 private/controlled deployment 为默认边界，愿意持续更新、正确配置 HTTPS/反代/权限，并接受 AGPL 约束。

推荐理由：
- 功能广度非常强，83 个 driver 目录和 README 中的多存储列表说明覆盖面足够大 [GH:local-scan] [GH:readme]。
- Go 后端 + Docker deployment + WebDAV + preview/share/download 是成熟 self-hosted file gateway 的合理技术组合。
- 社区活跃，22k+ stars、237 contributors、2026-05-19 仍有 push，版本 release 持续 [GH]。
- 相比原 AList，OpenList 的治理叙事更明确，适合重视开源透明性的用户。

主要顾虑：
- 安全评分不能高：文件管理 + 外部存储 token + WebDAV + 公开访问组合本身敏感，且已有多个公开 advisories [GH:advisories]。
- 多后端意味着兼容性 bug 常态化，258 open issues/PRs 对维护者是持续压力 [GH]。
- AGPL-3.0 对二次开发和网络服务分发有强 copyleft 约束，商业闭源改造不友好。

**结论**：个人/小团队自托管值得试用；推荐度 4/5 只在私有/受控部署、及时升级和严格反代权限配置下成立，公网部署必须按安全服务看待，而不是“随手起一个网盘网页”。

## 优势

1. **多存储覆盖极广**：README 列出本地、Aliyundrive、OneDrive/SharePoint、Google Drive、S3、FTP/SFTP、WebDAV、BaiduNetdisk、115、Dropbox、Azure Blob 等大量后端 [GH:readme]。
2. **自托管体验完整**：文件预览、图片图库、音视频、Office 文档、README 渲染、permalink、上传删除移动复制、WebDAV、离线下载等能力齐全 [GH:readme]。
3. **部署路径明确**：README 明确支持 Docker Deploy；仓库含 `Dockerfile`、`Dockerfile.ci`、`docker-compose.yml` [GH:readme] [GH:local-scan]。
4. **治理叙事强**：项目明确标识为 community-driven AList fork，并声明 AGPL、项目自身无付费计划、且反对同名项目混淆 [GH:readme]。
5. **扩展入口自然**：`drivers/template` 与 83 个 driver 目录说明新增 storage driver 是主要扩展路径 [GH:contributing] [GH:local-scan]。
6. **社区活跃**：22586 stars、1974 forks、237 contributors、24 releases、2026-05-19 有最新 push [GH]。

## 劣势

1. **安全风险显著**：公开 advisories 包含 path traversal、insecure TLS default、Markdown viewer XSS；即使部分已修复，也说明安全边界复杂 [GH:advisories]。
2. **维护面极宽**：83 个 driver + 大量第三方存储 API，任何平台接口变化都可能导致用户侧功能破损 [GH:local-scan]。
3. **issue/PR backlog 不低**：`open_issues_count=258`，其中 `gh issue list` 与 `gh pr list` 分别得到 205 open issues 与 53 open PRs [GH]。
4. **依赖很重**：`go.mod` 直接/间接依赖大量云 SDK、压缩/索引/数据库/网络库，供应链审计成本较高 [GH:local-scan]。
5. **AGPL 约束强**：对个人自托管友好，对希望闭源商业化二开的团队不友好。
6. **fork 治理背景本身是一种风险信号**：它解决 trust crisis，但也意味着生态存在分裂、命名混淆与用户迁移成本。

---

## 适合什么场景

- 家庭服务器/NAS/VPS 上统一管理多个网盘和对象存储。
- 需要 WebDAV 暴露、网页分享、预览和上传下载入口的个人或小团队。
- 重视开源透明性，希望避开闭源同名商业衍生项目的用户。
- 希望基于 existing driver system 添加新存储后端的开发者。
- 需要快速搭建文件列表页面、媒体预览、轻量下载入口的场景。

## 不适合什么场景

- 不懂公网安全配置、反向代理、权限隔离，却打算直接暴露到互联网的用户。
- 需要企业级 DLP、审计、细粒度 RBAC、合规认证的组织。
- 不愿持续更新的用户：OpenList 的安全策略明确只支持 latest stable [GH:security]。
- 希望闭源商业分发或 SaaS 二开的团队：AGPL-3.0 约束不可忽略。
- 对第三方网盘 API 稳定性有强 SLA 要求的生产场景。

## 与类似项目对比

| 项目 | 定位 | 相对本项目 |
|------|------|-----------|
| AList | 原始多存储文件列表/WebDAV 项目 | OpenList 是治理型 fork，功能路径接近但更强调社区开放、AGPL 与反 trust crisis；AList star 更多但 issue backlog 也更高 [GH:alist]。 |
| Cloudreve | 自托管网盘/文件管理系统，多存储支持 | Cloudreve 更像完整网盘产品；OpenList 更像多存储统一列表与 WebDAV gateway，driver 覆盖和 AList 兼容生态是重点 [GH:cloudreve]。 |
| Rclone | 多云存储同步、挂载与管理 CLI | Rclone 更偏底层 CLI/同步工具，适合脚本化和服务器间数据迁移；OpenList 更偏网页入口、WebDAV、分享和预览，面向日常浏览与轻团队使用 [GH:rclone]。 |

上述项目按 `cloud-server/storage-aggregation` 同类范围做定位级对比，未按同一 10 维度框架深审。

## 个人主页 sharing 候选

**是**。

- novelty：不是技术上全新，但“治理 fork + 自托管多存储”的故事线有现实意义。
- maturity：功能成熟度可用，但安全与维护复杂度需明确提醒。
- practicality：对 VPS/NAS/家庭服务器用户很实用。
- shareability：可以写成“自托管文件入口如何在能力、便利与安全之间权衡”。

---

## 它能做什么

OpenList 提供一个网页与 WebDAV 入口，把多种存储后端统一管理 [GH:readme]：

- 多存储挂载：本地、主流网盘、对象存储、FTP/SFTP、WebDAV、SMB、GitHub 等。
- 文件管理：上传、删除、mkdir、rename、move、copy、跨存储复制。
- 预览能力：PDF、Markdown、代码、纯文本、图片图库、音视频、字幕歌词、Office 文档。
- 下载能力：直接下载、permalink、文件夹打包下载、离线下载、多线程加速。
- 部署与代理：Docker Deploy、Cloudflare Workers proxy。
- 协议支持：WebDAV。

能力评分 5/5。对“多存储文件列表/网盘聚合 gateway”这个定位，它覆盖非常完整；扣分不放在 capability，而放在 security/maturity/code_quality 的维护风险上。

## 运行环境与资源占用

| 场景 | CPU | 内存 | 存储 | 说明 |
|------|-----|------|------|------|
| 最小 | 1 core | 256MB-512MB | 配置/缓存少量 | 小型个人部署、少量用户、轻预览 |
| 推荐 | 1-2+ cores | 512MB-1GB+ | 随缓存/索引/临时下载增长 | 多用户、多个 storage backend、预览/下载/搜索较多 |

- **运行时**：Go 后端；仓库 `go.mod` 要求 Go 1.24 / toolchain 1.24.13 [GH:local-scan]。
- **操作系统**：Linux/macOS/Windows 理论可编译运行；自托管通常部署在 Linux VPS/NAS。
- **Docker**：支持，仓库含 Dockerfile 与 docker-compose [GH:readme] [GH:local-scan]。
- **GPU**：不需要。
- **外部依赖**：大量第三方存储 SDK、数据库驱动、压缩/索引/网络库 [GH:local-scan]。

性能评分 4/5。Go 单体服务对个人部署较友好；真正资源压力来自预览、搜索、压缩、离线下载和第三方存储 IO，而非基础网页列表。

## 上手体验

评分 4/5。

README 对核心能力和文档入口说明清楚，文档站、demo、Docker deployment 都降低了试用成本 [GH:readme] [Docs]。对会用 Docker 的用户，OpenList 属于可快速跑起来的 self-hosted 服务。

但上手后的配置复杂度不低：每个 storage backend 都有各自 token、权限、API 限制和风控；公网部署还要配置 HTTPS、反向代理、访问控制和备份。也就是说，它“安装容易”，但“安全可靠地长期使用”并不简单。

## 代码质量

评分 3/5。

本地扫描显示仓库有 786 个 git-tracked files、737 个 Go files、32 个 Go test files、9 个 workflow files；结构按 `cmd/`、`internal/`、`server/`、`drivers/`、`pkg/`、`wrapper/` 分层，Go 项目组织基本清楚 [GH:local-scan]。

扣分原因：
- driver 面太宽，83 个 driver 目录意味着维护负担非常大 [GH:local-scan]；
- `go.mod` 依赖体量大，供应链与兼容性压力高 [GH:local-scan]；
- 已出现多个安全 advisory，说明关键路径输入校验与默认安全配置曾有问题 [GH:advisories]；
- 测试文件数量相对功能面不算高。

因此代码质量不是“差”，而是“能用但复杂度已经很高”。

## 可扩展性

评分 4/5。

OpenList 的主要扩展点是 storage driver。贡献文档明确说新增 driver 可以复制 `drivers/template` 并按注释实现 [GH:contributing]。这对多存储平台非常关键：只要 driver interface 稳定，社区就可以持续补充新的网盘/对象存储/协议。

此外，WebDAV、Cloudflare Workers proxy、Docker deployment 都给运维和接入方式留出空间 [GH:readme]。限制在于扩展基本仍需 Go 代码贡献；没有独立插件 marketplace 或沙箱化 driver 机制，新增 driver 会进入主程序信任边界。

## 文档质量

评分 4/5。

README 清楚列出项目定位、治理 disclaimer、功能矩阵、文档站、demo、讨论区、联系方式与 license [GH:readme]。`SECURITY.md` 有中英双语安全政策，明确只支持 latest stable、建议 HTTPS/反代/访问控制、避免 root container [GH:security]。`CONTRIBUTING.md` 给出了 Go/SolidJS 开发前置条件、fork、preview、driver 添加、PR review 要求 [GH:contributing]。

不足是 docs 首页抓取到的信息较简，很多具体 driver 配置需要进入文档深层页；对新用户而言，“哪个网盘该怎么安全配置”仍然需要逐项学习。

## 社区与成熟度

| 维度 | 评分 | 说明 |
|------|------|------|
| 社区活跃度 | 4/5 | 22586 stars、1974 forks、237 contributors、2026-05-19 最新 push，Discussions/Telegram/多语言 README 俱全 [GH] [GH:readme]。 |
| 成熟度 | 3/5 | v4.2.1 release 和 24 releases 表明可用性较强；但项目作为 2025-06 创建的 fork 仍年轻，258 open issues/PRs 与安全 advisory 说明稳定性仍需观察 [GH] [GH:advisories]。 |

这是一个功能成熟但治理与安全仍在爬坡的项目。

## 安全与风险

评分 2/5。

安全是 OpenList 最大扣分点。它处理用户文件、外部存储 token、下载/预览、WebDAV、上传和公网访问，attack surface 天然高。公开 advisories 至少包括 [GH:advisories]：

- GHSA-qmj2-8r24-xxcq / CVE-2026-25059：high，file copy/remove handlers path traversal，patched in 4.1.10；
- GHSA-wf93-3ghh-h389 / CVE-2026-25060：high，insecure TLS default configuration，patched in 4.1.10；
- GHSA-2hw3-h8qx-hqqp / CVE-2025-50183：medium，built-in Markdown viewer XSS，patched in 4.0.0-rc.4。

项目有 `SECURITY.md`，也给出用户安全最佳实践：强密码、HTTPS、反向代理限制端口、访问控制、审查 storage permissions、Docker 避免 root [GH:security]。但因为已经存在多类高敏感漏洞，且项目本身常被公网部署，security 不能给 3 以上。

## 学习价值

OpenList 值得学习两件事。

第一是技术层面：Go 单体服务如何组织大量 storage driver，如何在文件预览、WebDAV、下载、对象存储之间做统一抽象。第二是治理层面：当原项目出现 trust crisis 后，社区 fork 如何通过 license、README disclaimer、组织化维护、security policy 与多语言文档重新建立信任。

它也提醒我们：功能越广，风险越广；自托管不是“自己部署所以安全”，而是“你继承了服务端软件的全部安全责任”。
