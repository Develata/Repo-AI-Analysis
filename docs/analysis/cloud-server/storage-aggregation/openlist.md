---


title: "OpenList"
created: 2026-05-19
updated: 2026-07-14
type: repository-analysis
repo_url: "https://github.com/OpenListTeam/OpenList"
category: "cloud-server/storage-aggregation"
tags: [cloud-storage, cloud-storage-aggregation, self-hosted, webdav, storage, go, alist-fork, mcp]
previous_repo: ""
successor: ""
primary_language: "Go"
license: "AGPL-3.0"
stars: 23520
forks: 2118
last_checked: 2026-07-14
last_verified: 2026-07-14
evidence: "docs review + GitHub API metadata + release review + local shallow clone scan + security advisory review"
archived_reason: ""
docker_support: true
gpu_required: false
estimated_cpu: "1-2 cores for small personal deployments"
estimated_memory: "planning estimate: 256MB-1GB for small personal deployments; higher under preview/search/transcoding/storage-heavy workloads"
estimated_storage: "binary/config small; storage depends on mounted backends, cache, thumbnails, indexes and logs"
status: active
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
  recommendation: 3
overall_score: 3.6
sources:
  - "[GH] https://github.com/OpenListTeam/OpenList — GitHub GraphQL/REST checked 2026-07-14: created_at=2025-06-11T23:35:02Z, archived=false, disabled=false, default_branch=main, pushed_at=2026-07-12T23:27:34Z, latest commit=eb48671202247406a451187a8c62fae943acfc3b, stars=23520, forks=2118, REST open_issues_count=275, GraphQL open issues=186, open PRs=89, releases=26, latest stable release=v4.2.3 published 2026-07-01, contributors≈248, primary language=Go, license=AGPL-3.0"
  - "[GH:release] https://github.com/OpenListTeam/OpenList/releases/tag/v4.2.3 — checked 2026-07-14: release notes include emby driver, Cloudflare Image Bed, DingTalk Docs driver, MCP endpoint for whole OpenList, direct redirects for OneDrive sharelink/S3, multiple driver fixes, dependency updates, Go 1.25 update, SimpleHttp temp file path traversal fix and cloud metadata endpoint blocking"
  - "[Docs] https://doc.oplist.org — extracted 2026-07-14: docs homepage describes OpenList as a file list program supporting multiple storage, powered by Gin and SolidJS"
  - "[GH:readme] https://github.com/OpenListTeam/OpenList/blob/main/README.md"
  - "[GH:contributing] https://github.com/OpenListTeam/OpenList/blob/main/CONTRIBUTING.md"
  - "[GH:security] https://github.com/OpenListTeam/OpenList/blob/main/SECURITY.md"
  - "[GH:advisories] https://github.com/OpenListTeam/OpenList/security/advisories — GitHub repository security-advisories API checked 2026-07-14: 4 published advisories: GHSA-h6cj-26g5-67fv medium arbitrary file write via SimpleHttp Content-Disposition path traversal, affected github.com/OpenListTeam/OpenList <=4.2.2, patched >=4.2.3; GHSA-qmj2-8r24-xxcq/CVE-2026-25059 high path traversal in file copy/remove, patched 4.1.10; GHSA-wf93-3ghh-h389/CVE-2026-25060 high insecure TLS default, patched 4.1.10; GHSA-2hw3-h8qx-hqqp/CVE-2025-50183 medium Markdown viewer XSS, patched 4.0.0-rc.4"
  - "[GH:local-scan] /opt/data/tmp/repo-wiki-freshness-2026-07-14-clones/OpenList at eb48671202247406a451187a8c62fae943acfc3b, cloned 2026-07-14: git ls-files=837, Go files=780, Go test files=45, driver dirs=86, workflow files=10, Dockerfile/Dockerfile.ci/docker-compose.yml present, SECURITY.md/CONTRIBUTING.md/CODE_OF_CONDUCT.md present, go.mod requires Go 1.25.0/toolchain go1.26.4"
  - "[GH:mcp] Local files inspected 2026-07-14: server/router.go registers MCP(g); server/mcp.go gates /mcp on conf.Conf.MCP.Enable and returns 403 when disabled; server/mcp/tools.go defines openlist.fs.list/openlist.fs.get/openlist.fs.link; server/mcp/call.go dispatches those tools and returns structuredContent"
  - "[GH:alist] https://github.com/AlistGo/alist — GitHub API checked 2026-05-19: stars=49501, forks=7942, language=Go, license=AGPL-3.0, pushed_at=2026-05-16T05:50:36Z, description=file list/WebDAV program supporting multiple storages"
  - "[GH:cloudreve] https://github.com/cloudreve/cloudreve — GitHub API checked 2026-05-19: stars=27780, forks=3832, language=Go, license=GPL-3.0, pushed_at=2026-05-10T02:55:43Z, description=self-hosted file management and sharing system supporting multiple storage providers"
  - "[GH:rclone] https://github.com/rclone/rclone — GitHub API checked 2026-05-19: stars=57256, forks=5098, language=Go, license=MIT, pushed_at=2026-05-18T17:34:56Z, description=rsync for cloud storage across Google Drive/S3/Dropbox/OneDrive/Azure/etc."
---

# OpenList

> AList 的社区治理 fork：自托管多存储文件列表、WebDAV、预览、上传下载、分享与可选 MCP 文件访问工具，强调长期开放治理与反信任危机。
>
> **状态**: `active` · **总分**: 3.6/5 · **推荐度**: 3/5
> **核验版本**: GitHub commit `eb48671202247406a451187a8c62fae943acfc3b`；GitHub API / release / local scan 快照 2026-07-14

## 一句话总结

OpenList 是一个面向个人和小团队的 self-hosted file listing / WebDAV / multi-storage gateway：它继承 AList 的多网盘聚合能力，并以 AGPL-3.0、社区维护、治理透明作为与原项目区分的核心叙事 [GH:readme]。

## 总体评价

OpenList 的定位很清楚：不是云盘本身，而是把本地存储、对象存储、网盘、WebDAV、FTP/SFTP 等多种后端统一暴露为网页文件管理与分享体验。README 列出的 storage backends 极多，功能包括预览、图库、音视频、Office 文档、WebDAV、Docker 部署、Cloudflare Workers proxy、离线下载、跨存储复制与多线程下载加速 [GH:readme]。

它最强的价值是“可用性 + 广度”：对想把各种网盘资源聚合到一个网页入口的人，它的 capability 非常强。OpenList 还是 AList 生态 trust crisis 后的治理型 fork，明确声明独立维护、AGPL、项目自身无付费计划、且不与第三方同名商业项目关联 [GH:readme]。这让它不只是技术 fork，也是一种社区治理选择。

2026-07 核验显示，项目从 v4.2.1 推进到 v4.2.3，新增/扩展了多个 driver，并引入了可选 MCP endpoint：`/mcp` 在配置启用后暴露 `openlist.fs.list`、`openlist.fs.get`、`openlist.fs.link` 三个工具，用于列目录、取详情和生成文件链接 [GH:release] [GH:mcp]。这对 agent / automation 场景是实际能力扩展，但也扩大了文件访问面的安全要求。

风险同样真实：OpenList 是网络暴露型文件管理服务，attack surface 天然大；截至 2026-07-14，GitHub advisories API 返回 4 个公开安全公告，其中包括 path traversal、默认 TLS certificate verification disabled、Markdown preview XSS，以及 v4.2.3 修复的 SimpleHttp Content-Disposition path traversal 任意文件写入 [GH:advisories]。同时 186 open issues 与 89 open PRs、86 个 driver 目录说明维护复杂度高 [GH] [GH:local-scan]。

## 推荐度：3/5

> 2026-07 freshness update：v4.2.3 增加 MCP endpoint 与多项 driver/安全修复；security 仍维持 2，推荐采用仍需以受控部署和及时升级为前提。

**角色定位**：推荐给需要自托管多网盘聚合、文件分享、WebDAV、网页预览，并愿意把它当作高敏感文件服务维护的个人用户、家庭服务器用户、小团队管理员。

推荐理由：
- 功能广度非常强，86 个 driver 目录和 README 中的多存储列表说明覆盖面足够大 [GH:local-scan] [GH:readme]。
- Go 后端 + Docker deployment + WebDAV + preview/share/download 是成熟 self-hosted file gateway 的合理技术组合。
- v4.2.3 新增可选 MCP 工具后，OpenList 也可作为 agent 访问受控文件列表/链接的后端，但这需要额外权限审计 [GH:mcp]。
- 社区活跃，23k+ stars、约 248 contributors、2026-07 仍有 push，版本 release 持续 [GH]。
- 相比原 AList，OpenList 的治理叙事更明确，适合重视开源透明性的用户。

主要顾虑：
- 安全评分不能高：文件管理 + 外部存储 token + WebDAV + MCP + 公开访问组合本身敏感，且已有多个公开 advisories [GH:advisories]。
- 多后端意味着兼容性 bug 常态化，275 个 REST open_issues_count / 186 open issues + 89 open PRs 对维护者是持续压力 [GH]。
- AGPL-3.0 对修改版网络服务和分发有源码可用性义务，闭源商业改造需要单独评估合规边界。

**结论**：个人/小团队自托管值得试用；推荐度 3/5 只在私有/受控部署、及时升级和严格反代权限配置下成立，公网部署必须按安全服务看待，而不是“随手起一个网盘网页”。

## 优势

1. **多存储覆盖极广**：README 列出本地、Aliyundrive、OneDrive/SharePoint、Google Drive、S3、FTP/SFTP、WebDAV、BaiduNetdisk、115、Dropbox、Azure Blob 等大量后端 [GH:readme]。
2. **自托管体验完整**：文件预览、图片图库、音视频、Office 文档、README 渲染、permalink、上传删除移动复制、WebDAV、离线下载等能力齐全 [GH:readme]。
3. **部署路径明确**：README 明确支持 Docker Deploy；仓库含 `Dockerfile`、`Dockerfile.ci`、`docker-compose.yml` [GH:readme] [GH:local-scan]。
4. **治理叙事强**：项目明确标识为 community-driven AList fork，并声明 AGPL、项目自身无付费计划、且反对同名项目混淆 [GH:readme]。
5. **扩展入口自然**：`drivers/template` 与 86 个 driver 目录说明新增 storage driver 是主要扩展路径 [GH:contributing] [GH:local-scan]。
6. **MCP/agent 自动化入口出现**：`/mcp` 可在配置启用后暴露 list/get/link 文件工具，为 agent 或自动化调用提供结构化入口 [GH:mcp]。
7. **社区活跃**：23520 stars、2118 forks、约 248 contributors、26 releases、2026-07 有最新 push [GH]。

## 劣势

1. **安全风险显著**：公开 advisories 包含 path traversal、insecure TLS default、Markdown viewer XSS、SimpleHttp 任意文件写入；即使部分已修复，也说明安全边界复杂 [GH:advisories]。
2. **维护面极宽**：86 个 driver + 大量第三方存储 API，任何平台接口变化都可能导致用户侧功能破损 [GH:local-scan]。
3. **issue/PR backlog 不低**：REST `open_issues_count=275`，GraphQL 拆分为 186 open issues 与 89 open PRs [GH]。
4. **依赖很重**：`go.mod` 直接/间接依赖大量云 SDK、压缩/索引/数据库/网络库，供应链审计成本较高 [GH:local-scan]。
5. **MCP 扩展了文件访问边界**：endpoint 需要配置启用；agent 工具一旦接入文件列表和链接生成，权限、路径、密码保护与审计都必须重新检查 [GH:mcp]。
6. **AGPL 约束强**：对个人自托管友好；对修改版网络服务、分发或闭源商业改造，需要按 AGPL 源码可用性义务单独评估。
7. **fork 治理背景本身是一种风险信号**：它解决 trust crisis，但也意味着生态存在分裂、命名混淆与用户迁移成本。

---

## 适合什么场景

- 家庭服务器/NAS/VPS 上统一管理多个网盘和对象存储。
- 需要 WebDAV 暴露、网页分享、预览和上传下载入口的个人或小团队。
- 重视开源透明性，希望避开闭源同名商业衍生项目的用户。
- 希望基于 existing driver system 添加新存储后端的开发者。
- 需要快速搭建文件列表页面、媒体预览、轻量下载入口的场景。
- 在受控账号和路径范围内，为 agent / automation 暴露文件列表、详情或下载链接的实验场景 [GH:mcp]。

## 不适合什么场景

- 不懂公网安全配置、反向代理、权限隔离，却打算直接暴露到互联网的用户。
- 需要企业级 DLP、审计、细粒度 RBAC、合规认证的组织。
- 不愿持续更新的用户：OpenList 的安全策略明确只支持 latest stable [GH:security]。
- 计划闭源商业分发或修改版 SaaS 二开的团队：AGPL-3.0 的源码可用性义务不可忽略。
- 对第三方网盘 API 稳定性有强 SLA 要求的生产场景。
- 希望让 agent 直接访问高权限网盘根目录、私密存储 token 或生产文件系统且缺少最小权限隔离的场景。

## 与类似项目对比

| 项目 | 定位 | 相对本项目 |
|------|------|-----------|
| AList | 原始多存储文件列表/WebDAV 项目 | OpenList 是治理型 fork，功能路径接近但更强调社区开放、AGPL 与反 trust crisis；AList 在 2026-05 快照中的 star/fork 可见度更高 [GH:alist]。 |
| Cloudreve | 自托管网盘/文件管理系统，多存储支持 | Cloudreve 更像完整网盘产品；OpenList 更像多存储统一列表与 WebDAV gateway，driver 覆盖和 AList 兼容生态是重点 [GH:cloudreve]。 |
| Rclone | 多云存储同步、挂载与管理 CLI | Rclone 更偏底层 CLI/同步工具，适合脚本化和服务器间数据迁移；OpenList 更偏网页入口、WebDAV、分享和预览，面向日常浏览与轻团队使用 [GH:rclone]。 |

上述项目按 `cloud-server/storage-aggregation` 同类范围做定位级对比，未按同一 10 维度框架深审。

---

## 它能做什么

OpenList 提供一个网页、WebDAV 与可选 MCP 入口，把多种存储后端统一管理 [GH:readme] [GH:mcp]：

- 多存储挂载：本地、主流网盘、对象存储、FTP/SFTP、WebDAV、SMB、GitHub 等。
- 文件管理：上传、删除、mkdir、rename、move、copy、跨存储复制。
- 预览能力：PDF、Markdown、代码、纯文本、图片图库、音视频、字幕歌词、Office 文档。
- 下载能力：直接下载、permalink、文件夹打包下载、离线下载、多线程加速。
- 部署与代理：Docker Deploy、Cloudflare Workers proxy。
- 协议支持：WebDAV。
- MCP 工具：启用后提供 `openlist.fs.list`、`openlist.fs.get`、`openlist.fs.link`，输出结构化结果供 agent/tool client 调用 [GH:mcp]。

能力评分 5/5。这个 5 只衡量“多存储文件列表/网盘聚合 gateway”的功能覆盖广度，不表示 86 个 driver 都有同等可靠性或企业控制能力；扣分放在 security/maturity/code_quality 的维护风险上。

## 运行环境与资源占用

| 场景 | CPU | 内存 | 存储 | 说明 |
|------|-----|------|------|------|
| 最小 | 1 core | 256MB-512MB（规划估计） | 配置/缓存少量 | 小型个人部署、少量用户、轻预览 |
| 推荐 | 1-2+ cores | 512MB-1GB+（规划估计） | 随缓存/索引/临时下载增长 | 多用户、多个 storage backend、预览/下载/搜索/MCP 较多 |

- **运行时**：Go 后端；仓库 `go.mod` 要求 Go 1.25.0 / toolchain go1.26.4 [GH:local-scan]。
- **操作系统**：Linux/macOS/Windows 理论可编译运行；自托管通常部署在 Linux VPS/NAS。
- **Docker**：支持，仓库含 Dockerfile 与 docker-compose [GH:readme] [GH:local-scan]。
- **GPU**：不需要。
- **外部依赖**：大量第三方存储 SDK、数据库驱动、压缩/索引/网络库 [GH:local-scan]。

性能评分 4/5。Go 单体服务对个人部署较友好；真正资源压力来自预览、搜索、压缩、离线下载、第三方存储 IO 和 MCP/agent 调用频率，而非基础网页列表。

## 上手体验

评分 4/5。

README 对核心能力和文档入口说明清楚，文档站、demo、Docker deployment 都降低了试用成本 [GH:readme] [Docs]。对会用 Docker 的用户，OpenList 属于可快速跑起来的 self-hosted 服务。

但上手后的配置复杂度不低：每个 storage backend 都有各自 token、权限、API 限制和风控；公网部署还要配置 HTTPS、反向代理、访问控制和备份。若启用 MCP，还要额外考虑 agent client 的身份、路径权限和审计 [GH:mcp]。也就是说，它“安装容易”，但“安全可靠地长期使用”并不简单。

## 代码质量

评分 3/5。

本地扫描显示仓库有 837 个 git-tracked files、780 个 Go files、45 个 Go test files、10 个 workflow files；结构按 `cmd/`、`internal/`、`server/`、`drivers/`、`pkg/`、`wrapper/` 分层，Go 项目组织基本清楚 [GH:local-scan]。v4.2.3 release 还包含多项 driver、依赖、atomic、缓存、路径 sanitization 和 workflow 修复 [GH:release]。

扣分原因：
- driver 面太宽，86 个 driver 目录意味着维护负担非常大 [GH:local-scan]；
- `go.mod` 依赖体量大，供应链与兼容性压力高 [GH:local-scan]；
- 已出现多个安全 advisory，说明关键路径输入校验与默认安全配置曾有问题 [GH:advisories]；
- 测试文件数量相对功能面不算高。

因此代码质量不是“差”，而是“能用但复杂度已经很高”。

## 可扩展性

评分 4/5。

OpenList 的主要扩展点是 storage driver。贡献文档明确说新增 driver 可以复制 `drivers/template` 并按注释实现 [GH:contributing]。这对多存储平台非常关键：只要 driver interface 稳定，社区就可以持续补充新的网盘/对象存储/协议。

此外，WebDAV、Cloudflare Workers proxy、Docker deployment 与 MCP endpoint 都给运维和接入方式留出空间 [GH:readme] [GH:mcp]。限制在于扩展基本仍需 Go 代码贡献；没有独立插件 marketplace 或沙箱化 driver 机制，新增 driver 与 MCP 文件工具都会进入主程序信任边界。

## 文档质量

评分 4/5。

README 清楚列出项目定位、治理 disclaimer、功能矩阵、文档站、demo、讨论区、联系方式与 license [GH:readme]。`SECURITY.md` 有中英双语安全政策，明确只支持 latest stable、建议 HTTPS/反代/访问控制、避免 root container [GH:security]。`CONTRIBUTING.md` 给出了 Go/SolidJS 开发前置条件、fork、preview、driver 添加、PR review 要求 [GH:contributing]。

不足是 docs 首页抓取到的信息较简，很多具体 driver 配置需要进入文档深层页；对新用户而言，“哪个网盘该怎么安全配置”仍然需要逐项学习。MCP 入口目前主要从代码和 release note 确认，本轮未看到足够完整的用户级 MCP 安全/配置文档 [GH:mcp] [GH:release]。

## 社区与成熟度

| 维度 | 评分 | 说明 |
|------|------|------|
| 社区活跃度 | 4/5 | 23520 stars、2118 forks、约 248 contributors、2026-07 最新 push，Discussions/Telegram/多语言 README 俱全 [GH] [GH:readme]。 |
| 成熟度 | 3/5 | v4.2.3 和 26 releases 表明可用性较强；但项目作为 2025-06 创建的 fork 仍年轻，275 REST open_issues_count 与 4 个公开 advisory 说明稳定性仍需观察 [GH] [GH:advisories]。 |

这是一个功能成熟但治理与安全仍在爬坡的项目。

## 安全与风险

评分 2/5。

安全是 OpenList 最大扣分点。它处理用户文件、外部存储 token、下载/预览、WebDAV、上传、MCP 文件工具和公网访问，attack surface 天然高。公开 advisories 至少包括 [GH:advisories]：

- GHSA-h6cj-26g5-67fv：medium，SimpleHttp offline-download tool 中通过 Content-Disposition path traversal 造成 authenticated arbitrary file write，影响 `<=4.2.2`，patched `>=4.2.3`；
- GHSA-qmj2-8r24-xxcq / CVE-2026-25059：high，file copy/remove handlers path traversal，patched in 4.1.10；
- GHSA-wf93-3ghh-h389 / CVE-2026-25060：high，insecure TLS default configuration，patched in 4.1.10；
- GHSA-2hw3-h8qx-hqqp / CVE-2025-50183：medium，built-in Markdown viewer XSS，patched in 4.0.0-rc.4。

项目有 `SECURITY.md`，也给出用户安全最佳实践：强密码、HTTPS、反向代理限制端口、访问控制、审查 storage permissions、Docker 避免 root [GH:security]。但因为已经存在多类高敏感漏洞，且项目本身常被公网部署，security 不能给 3 以上。

MCP 需要额外强调：`openlist.fs.link` 这类工具会把“agent 的文本调用”转换为文件路径访问和链接生成。部署时应限制账号权限、路径范围、外部分享策略和 agent 可达网络，不应把高权限管理员会话直接给不受信任 agent 使用 [GH:mcp]。

## 学习价值

OpenList 值得学习两件事。

第一是技术层面：Go 单体服务如何组织大量 storage driver，如何在文件预览、WebDAV、下载、对象存储、MCP 工具之间做统一抽象。第二是治理层面：当原项目出现 trust crisis 后，社区 fork 如何通过 license、README disclaimer、组织化维护、security policy 与多语言文档重新建立信任。

它也提醒我们：功能越广，风险越广；自托管不是“自己部署所以安全”，而是“你继承了服务端软件的全部安全责任”。