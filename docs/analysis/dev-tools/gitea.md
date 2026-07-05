---
title: "Gitea"
created: 2026-07-05
updated: 2026-07-05
type: repository-analysis
repo_url: "https://github.com/go-gitea/gitea"
category: "dev-tools"
tags: ["git", "git-hosting", "self-hosted", "devops", "code-review", "issues", "packages", "ci-cd", "github-actions-compatible", "go", "typescript", "docker"]
previous_repo: ""
successor: ""
primary_language: "Go"
license: "MIT"
stars: 56681
forks: 6873
last_checked: 2026-07-05
last_verified: 2026-07-05
evidence: "GitHub REST/search/community/security-advisory API snapshots, official docs extraction, and local shallow clone static scan at commit 2c2691b96971eb64be047563effc2afaebf41a4a. No binary build, Docker deployment, database migration, backup/restore drill, CI runner execution, or performance benchmark was executed."
archived_reason: ""
docker_support: true
gpu_required: false
estimated_cpu: "low to moderate for small self-hosted instances; depends on Git traffic, search indexing, package registry, Actions usage, and database choice"
estimated_memory: "small instances commonly fit in modest VPS memory; production memory depends on concurrent users, Git operations, indexers, database, cache, and runner workload"
estimated_storage: "dominated by repositories, LFS objects, attachments, packages, Actions artifacts/logs, database, backups, and search indexes"
status: active
ratings:
  capability: 5
  usability: 4
  performance: 4
  code_quality: 4
  documentation: 5
  community: 5
  maturity: 4
  extensibility: 4
  security: 3
  recommendation: 4
overall_score: 4.2
sources:
  - "[GH] https://github.com/go-gitea/gitea"
  - "[GH:api] GitHub REST snapshot 2026-07-05: repo created_at=2016-11-01, pushed_at=2026-07-05T01:02:29Z, stars=56681, forks=6873, REST open_issues_count=2753 includes issues+PRs, primary_language=Go, license=MIT, default_branch=main, homepage=https://gitea.com, archived=false, topics include cicd/devops/docker-registry-v2/git/git-lfs/git-server/github-actions/npm-registry/self-hosted/typescript/vue"
  - "[GH:languages] GitHub languages endpoint checked 2026-07-05: Go=14891073 bytes, Handlebars=1350066, TypeScript=908188, CSS=366609, JavaScript=255678, Vue=189965, Shell=46852, Makefile=28564, Jsonnet=15441, Dockerfile=4844, plus smaller Nix/Less/Jupyter Notebook"
  - "[GH:release] GitHub releases endpoint checked 2026-07-05: latest sampled releases include v1.27.0-rc0 published 2026-06-30 prerelease=true, v1.26.4 published 2026-06-21, v1.26.3 2026-06-20, v1.26.2 2026-05-20, v1.26.1 2026-04-24, v1.26.0 2026-04-18, v1.25.5 2026-03-13"
  - "[GH:community] GitHub community profile checked 2026-07-05: health_percentage=100; README, LICENSE, CODE_OF_CONDUCT.md, CONTRIBUTING.md and .github/pull_request_template.md detected; issue_template not detected by community API"
  - "[GH:issues] GitHub search checked 2026-07-05: open issues=2496, open PRs=256, closed PRs=21935; REST open_issues_count=2753 includes issues+PRs"
  - "[GH:contributors] GitHub contributors endpoint first page checked 2026-07-05: top contributors include unknwon=2635, lunny=2132, GiteaBot=1912, silverwind=1571, wxiaoguang=1417, zeripath=1187, 6543=570, techknowlogick=437, KN4CK3R=340 contributions"
  - "[GH:advisory] GitHub repository security-advisories API checked 2026-07-05: returned 28 published repository advisories; sampled advisories include GHSA-3pww-vcvm-3gmj medium, GHSA-rqhx-647v-wx32 medium, GHSA-wrf9-r3h7-7x5v high, GHSA-v73x-hx65-6pf4 medium, GHSA-44qc-pgvp-wx7v low, GHSA-gx3v-q759-g323 high, GHSA-rjvx-x5h2-6px5 high, GHSA-649p-mmhf-85c7 high. Advisory metadata alone was not expanded into per-version live-exposure claims."
  - "[GH:local-scan] Local shallow clone /opt/data/tmp/repo_wiki_gitea checked 2026-07-05 at commit 2c2691b96971eb64be047563effc2afaebf41a4a; git ls-files=6185, Go files=2979, .tmpl=575, .svg=516, TypeScript=251, CSS=92, markdown=30, workflows=16, test-ish heuristic files=2330; major dirs include modules=1278, tests=966, models=810, services=613, templates=580, routers=495, public=471, web_src=399"
  - "[GH:root] Local root files checked 2026-07-05: README.md, README.zh-cn.md, README.zh-tw.md, AGENTS.md, CLAUDE.md, CODE_OF_CONDUCT.md, CONTRIBUTING.md, DCO, Dockerfile, Dockerfile.rootless, LICENSE, MAINTAINERS, Makefile, SECURITY.md, go.mod, go.sum, package.json, pnpm-lock.yaml, vite.config.ts, playwright.config.ts, vitest.config.ts, flake.nix and lint configs present"
  - "[GH:readme] README.md local scan 2026-07-05: describes Gitea as a self-hosted all-in-one software development service including Git hosting, code management, code review, issue tracking, project kanban, wiki, team collaboration, package registry and CI/CD reusing GitHub Actions; supports Go-supported platforms/architectures; points to official Docker image, docs, go-sdk, tea CLI and act_runner"
  - "[GH:contributing] CONTRIBUTING.md local scan 2026-07-05: topic-specific docs cover build setup, development workflow, build from source, testing, frontend/backend guidelines, refactoring, governance and release management; AI-assisted contributions are allowed but must be disclosed and understood by the contributor; PR titles use Conventional Commits; DCO is present"
  - "[GH:security] SECURITY.md local scan 2026-07-05: security issues should be reported privately to security@gitea.io, previous vulnerabilities are listed at https://about.gitea.com/security, and the listed GPG key for encrypted reports expires 2026-07-04, so it appears expired as of this check unless rotated elsewhere"
  - "[GH:package] package.json local scan 2026-07-05: packageManager=pnpm@11.9.0, engines node>=22.18.0 and pnpm>=11.0.0; frontend dependencies include Vue, Vite, CodeMirror, Mermaid, KaTeX, Swagger UI, Playwright/Vitest/ESLint/Stylelint dev tooling"
  - "[GH:gomod] go.mod local scan 2026-07-05: module gitea.dev, go 1.26.4; dependencies include gitea.com/gitea/runner v1.0.8, gitea.dev/sdk, go-git, go-sql-driver/mysql, lib/pq, modernc sqlite, minio, redis, bleve, meilisearch-go, certmagic, oauth2, webauthn, ldap, prometheus, gitlab client and many storage/search/auth integrations"
  - "[GH:ci] .github/workflows local scan 2026-07-05: 16 workflows include pull-db-tests, pull-e2e-tests, pull-docker-dryrun, pull-compliance, release-nightly, release-tag-version and cron-renovate; pull-db-tests uses read-only contents permission, postgres/sqlite shards, LDAP, MinIO, Redis, Elasticsearch, Meilisearch, Azurite, pinned checkout SHA and make test-integration/test-migration paths"
  - "[Docs:docker] https://docs.gitea.com/installation/install-with-docker extracted 2026-07-05: official Docker setup uses docker.gitea.com/gitea tags including latest/1/1.26.4/nightly, Compose volume ./gitea:/data, SQLite by default, optional MySQL/PostgreSQL services, ports 3000 web and 222 SSH; rootful/rootless images are not mutually compatible and volume ownership matters"
  - "[Docs:backup] https://docs.gitea.com/administration/backup-and-restore extracted 2026-07-05: gitea dump creates ZIP backup including app.ini/custom/data/repos/db/log; consistent backups require stopping Gitea; there is no supported automatic restore command, restore is manual; native database dump may be preferred over XORM dump for DB restore reliability"
  - "[Docs:actions] https://docs.gitea.com/usage/actions/overview extracted 2026-07-05: Gitea Actions are available since 1.19, mostly compatible with GitHub Actions, use external act_runner, are described as stable enough for production and used in gitea.com/gitea repositories; runner deployment can introduce security issues"
  - "[Docs:packages] https://docs.gitea.com/usage/packages/overview extracted 2026-07-05: Package Registry available since 1.17; supports Alpine, Arch, Cargo, Chef, Composer, Conan, Conda, Container, CRAN, Debian, Generic, Go, Helm, Maven, npm, NuGet, Pub, PyPI, RPM, RubyGems, Swift, Terraform, Vagrant; package ownership is user/org scoped and package permissions use personal access tokens"
  - "[Docs:config] https://docs.gitea.com/administration/config-cheat-sheet extracted 2026-07-05: config is normally changed in custom/conf/app.ini or distribution-specific path such as /etc/gitea/conf/app.ini; docs expose versioned configuration/API docs including 1.26.4, 1.27.0-rc0 and 1.28-dev"
---

# Gitea

> 自托管 Git forge / software development platform：能力覆盖非常宽，部署门槛低，社区和工程治理强；但它一旦承载代码、账号、包、CI/CD 和 Webhooks，就不是“轻量小服务”，安全与运维责任必须正视。
>
> **状态**: `active` · **总分**: 4.2/5 · **推荐度**: 4/5
> **核验版本**: repo commit `2c2691b96971eb64be047563effc2afaebf41a4a`；latest stable `v1.26.4`；GitHub / docs / local clone 快照 2026-07-05
> **验证边界**: 本轮做 GitHub API、官方文档抽取和本地静态扫描；未 build Gitea、未启动 Docker 实例、未跑数据库迁移、未执行 Actions runner、未做备份恢复演练或 benchmark。

## 一句话总结

Gitea 是一个 Go 主体实现的 self-hosted GitHub-like development service：从 Git hosting、code review、issues/projects/wiki，到 package registry 和 GitHub Actions-compatible CI/CD 都在主路径里；如果 Develata 想要一个可控、轻量但功能完整的代码镜像/私有 forge，Gitea 是优先候选之一 [GH:readme][Docs:docker][Docs:actions][Docs:packages]。

## 总体评价

Gitea 的价值不只是“一个 Git Web UI”，而是把个人/小团队/中小组织常用的代码协作面收束到一个相对单体、可自托管、Go binary + database + storage 的系统中。README 明确列出 Git hosting、code management、code review、issue tracking、project kanban、wiki、team collaboration、package registry 和 CI/CD，并且强调可复用 GitHub Actions 生态 [GH:readme]。

从工程信号看，Gitea 是高度成熟且仍在活跃迭代的基础设施项目：GitHub 快照显示 56k+ stars、6.8k+ forks、2016 年创建、2026-07-05 仍有 push；2026 年 4–6 月持续发布 `v1.26.x` 和 `v1.27.0-rc0`；本地浅克隆有 6185 个 tracked files、2979 个 Go 文件、2330 个 test-ish heuristic 文件、16 个 workflows [GH:api][GH:release][GH:local-scan]。贡献结构也不是单点：top contributors 覆盖多人和 bot，closed PRs 超过 21k [GH:contributors][GH:issues]。

它的核心 tradeoff 是：Gitea 以单体形式降低了部署复杂度，但功能面很宽，安全面也宽。Git over SSH/HTTP、账号权限、OAuth/LDAP/WebAuthn、package registry、Git LFS、webhooks、Actions runner、database migration、backup/restore、attachments、object storage、search indexer，都会成为真实运维的一部分 [GH:gomod][Docs:backup][Docs:actions][Docs:packages]。故曰：器大者责重。

## 推荐度：4/5

**角色定位**：推荐给想自托管代码仓库、镜像 GitHub repos、管理私有 issues/PRs/wiki/packages，或者为小团队建立低成本 forge 的用户；尤其适合“不要 GitLab 那么重，但又不想只有 bare Git + cgit”的场景。

推荐度 4/5。Gitea 的采用价值很明确：部署路径成熟，官方 Docker 文档完备，SQLite/MySQL/PostgreSQL 都有路径；功能覆盖足够宽，社区大，文档完整，许可证友好，代码治理和测试/CI 信号强 [Docs:docker][GH:community][GH:ci][GH:release]。对 GitHub code mirror / vault 这类个人或小团队场景，它非常契合“Gitea + SQLite + Compose”的保守默认：足以承载仓库镜像、私有笔记、issue/PR 元数据和轻量协作，而不必引入 GitLab 级别的服务栈。

不给 5 的原因：

1. **安全面天然大**：Gitea 暴露代码、账号、token、webhook、package、CI runner、SSH/HTTP Git 等多个高价值入口；GitHub advisory API 返回 28 条已发布 repository advisories，本轮未逐条展开为 live exposure，但足以说明它是需要认真 patch 的互联网服务 [GH:advisory][GH:security]。
2. **运维责任不是零**：官方 backup 文档要求一致性备份时停止 Gitea，且没有自动 restore command；恢复是手工过程，数据库还可能更适合用原生工具 dump [Docs:backup]。
3. **issue backlog 大**：搜索快照有 2496 个 open issues、256 个 open PRs；大型活跃项目可以接受这种数量，但它提示边缘 bug、迁移问题和需求积压会长期存在 [GH:issues]。
4. **Actions runner 要单独建安全边界**：Gitea Actions 使用外部 `act_runner`，官方 docs 自身提醒 runner deployment 可能有 security issues [Docs:actions]。

所以：用于个人/小团队 self-hosted forge，我推荐；用于公网多人开放注册、承载不可信 CI、或替代大型企业 DevSecOps 平台，必须先做权限、备份、升级、runner 隔离和审计设计。

## 优势

1. **能力覆盖宽**：Git hosting、PR/code review、issues/projects/wiki、packages、CI/CD、LFS、team collaboration 都是一体化主线能力 [GH:readme][Docs:packages][Docs:actions]。
2. **部署路径清楚**：官方 Docker/Compose 文档给出 rootful image、端口、volume、SQLite 默认路径，以及 MySQL/PostgreSQL 配置；小规模实例可很快落地 [Docs:docker]。
3. **成熟社区和贡献治理**：GitHub community profile 100%，CONTRIBUTING、CODE_OF_CONDUCT、DCO、PR template、governance/release/testing docs 都存在 [GH:community][GH:contributing][GH:root]。
4. **工程规模和测试信号强**：本地扫描显示 2979 个 Go 文件、2330 个 test-ish heuristic 文件、16 个 workflows；CI 覆盖 DB tests、E2E、Docker dry-run、compliance、release、renovate 等 [GH:local-scan][GH:ci]。
5. **生态接口丰富**：Go module 依赖显示 Git、DB、OAuth、LDAP、WebAuthn、object storage、Redis、Bleve/Meilisearch、Prometheus、GitLab/GitHub API 等多类集成 [GH:gomod]。
6. **许可证友好**：MIT license，适合内部部署、改造和再分发评估 [GH:api][GH:root]。

## 劣势

1. **安全与升级不能偷懒**：作为代码托管和 CI/CD 平台，Gitea 本质上处理 secret、token、webhook、SSH key、package credentials 和 untrusted input；28 条已发布 repository advisories 是明确的维护提醒 [GH:advisory][GH:security]。
2. **备份恢复路径偏 manual**：`gitea dump` 可用，但一致性备份要求停机，没有自动 restore command；恢复涉及 app.ini、data、repos、database、hooks regeneration 等多步 [Docs:backup]。
3. **功能宽导致配置面宽**：config cheat sheet 很大，`app.ini` 静态配置、数据库、索引、邮件、SSH、LFS、packages、Actions、auth 都可能需要单独理解 [Docs:config][GH:gomod]。
4. **CI runner 是额外系统**：Gitea Actions 可生产使用，但 runner 是独立程序；一旦跑不可信 workflow，需要比普通 Git hosting 更强的 sandbox/网络/secret 隔离 [Docs:actions]。
5. **大型项目积压客观存在**：2496 open issues、256 open PRs 说明社区活跃，但也说明需求和 bug backlog 不小 [GH:issues]。

---

## 适合什么场景

- 个人或小团队自托管 GitHub-like forge：repo、issues、PR、wiki、project board 一站式。
- GitHub 仓库镜像、代码 vault、私有项目归档、低成本内网代码托管。
- 需要 package registry 但不想部署一堆独立 registry 的小组织。
- 希望复用 GitHub Actions 语法，但 runner 和执行环境由自己控制的场景。
- 教学/实验/小型开源社区：功能完整，运行与运维预算倾向比 GitLab-style full platform 更可控。
- Gitea + SQLite + Compose 式低维护 self-hosted code mirror。

## 不适合什么场景

- 大企业需要完整 DevSecOps、合规审计、复杂权限流、内建高级 CI/CD、SAST/DAST/portfolio 管理的场景；GitLab 或商业平台可能更完整。
- 公开注册、跑任意用户 CI workflow、允许任意 package upload 的公网平台，除非 runner、secret、network、quota、abuse handling 已经系统设计。
- 对零停机备份/自动灾备恢复有强 SLA 的部署；官方文档明确 restore 仍是手工过程 [Docs:backup]。
- 只需要 bare Git over SSH 或 read-only mirror 的极简场景；`git`, `cgit`, `stagit`, `git-http-backend` 可能更轻。
- 不愿意维护升级 cadence、安全公告、数据库备份和反向代理/TLS/邮件配置的用户。

## 与类似项目对比

| 项目 | 定位 | 相对本项目 |
|------|------|-----------|
| GitLab CE | 重型一体化 DevOps platform | GitLab 功能更全、企业 DevSecOps 面更强；按定位判断，它通常需要比 Gitea 更重的运行与运维预算，Gitea 更适合轻量 self-hosted forge |
| Forgejo | Gitea fork / community forge | Forgejo 与 Gitea 历史和代码亲缘很近；Gitea 当前官方品牌、商业云和原项目生态更强，Forgejo 更偏社区治理路线 |
| Gogs | 早期轻量 Go Git service | Gitea 源自 Gogs fork 后发展为更活跃、更完整的 all-in-one dev service；Gogs 更轻但生态活跃度和功能广度通常不如 Gitea |
| SourceHut | email/Unix-philosophy oriented forge | SourceHut 工作流更极简、邮件中心、理念鲜明；Gitea 更接近 GitHub UI/PR/issues/package/actions 的大众协作模型 |

上述项目按 Git forge / developer platform 邻域做定位级对比，未在本轮按同一 10 维度框架重审；表格不构成完整 benchmark。

---

## 它能做什么

能力广度评分 5/5。

Gitea 的能力已经超出单纯 Git hosting：README 把 code management、code review、issue tracking、project kanban、wiki、team collaboration、package registry 和 CI/CD 都列为目标能力 [GH:readme]。官方 Package Registry 文档显示它支持 Alpine、Arch、Cargo、Composer、Conan、Conda、Container、Debian、Go、Helm、Maven、npm、NuGet、PyPI、RPM、RubyGems、Swift、Terraform、Vagrant 等大量包类型 [Docs:packages]。

CI/CD 方面，Gitea Actions 自 1.19 起可用，语法上类似并大体兼容 GitHub Actions；执行交给独立 `act_runner` [Docs:actions]。这使它在小团队中可以承担“代码托管 + issue + package + CI”的统一入口。

给 5 的边界是“self-hosted Git forge 主域能力极全”，不是说它在每个子域都超过专用系统：大型 CI/CD、复杂 artifact governance、企业级 compliance、advanced DevSecOps 仍可能需要外部系统或 GitLab/Jenkins/Harbor/SonarQube 等组合。

## 运行环境与资源占用

资源效率评分 4/5。

| 场景 | CPU | 内存 | 存储 | 说明 |
|------|-----|------|------|------|
| 最小个人实例 | 低 | 低到中 | SQLite DB + repos + attachments | 官方 Docker 文档默认可用 SQLite；适合个人/小团队起步 [Docs:docker] |
| 小团队生产 | 中 | 中 | repos/LFS/packages/indexes/backups 增长明显 | 推荐关注数据库、备份、搜索索引、对象存储和反向代理/TLS |
| 启用 Actions / packages | 中到高 | 中到高 | artifacts/logs/packages 占用可能迅速增长 | runner 独立部署；CI job 成本由 workflow 决定 [Docs:actions][Docs:packages] |

- **运行时**：Go service + database + Git + optional cache/search/object storage；前端 toolchain 用 Node/pnpm，当前 package metadata 要求 Node `>=22.18.0`、pnpm `>=11.0.0` [GH:package]。
- **操作系统**：README 说支持 Go 支持的平台/架构，包括 Linux、macOS、FreeBSD/OpenBSD、Windows，以及 x86/amd64/ARM/RISC-V64/PowerPC 等 [GH:readme]。
- **Docker**：`docker_support=true`，因为官方文档提供 `docker.gitea.com/gitea` image、Compose 示例和 rootless/rootful 说明 [Docs:docker]。
- **GPU**：`gpu_required=false`。
- **外部依赖**：数据库、Git、SSH、邮件、反向代理/TLS、object storage、search indexer、cache、Actions runner、backup storage 视配置而定 [GH:gomod][Docs:config]。

给 4 而不是 5：Gitea 对功能宽度而言资源效率很好，Go 单体也让部署相对轻；但 package registry、search index、Actions runner、大仓库 Git operations 和备份会把资源模型推向“平台服务”，不能按普通小 Web app 估算。

## 上手体验

评分 4/5。

Gitea 的上手路径是它的强项之一：官方 Docker 文档给出一个 Compose 文件即可起步，默认 SQLite，挂载 `./gitea:/data`，暴露 Web `3000` 和 SSH `222`，也给出 MySQL/PostgreSQL 扩展路径 [Docs:docker]。README 还直接指向 demo、免费 gitea.com 服务、Gitea Cloud、官方 image 和 docs [GH:readme]。

扣 1 分主要来自真实部署细节：rootful/rootless image 不兼容，volume ownership 可能导致容器无法启动；`app.ini` 静态配置、SSH domain/port、ROOT_URL、邮件、OAuth、LFS、package registry、reverse proxy/TLS 都需要认真配置 [Docs:docker][Docs:config]。换言之，起步快，稳态运维仍要读文档。

## 代码质量

评分 4/5。

静态工程信号很强：Go 为主、TypeScript/Vue 前端，本地扫描有 6185 个 tracked files、2979 个 Go 文件、2330 个 test-ish heuristic 文件、16 个 GitHub workflows；根目录包含 lint configs、Makefile、go.mod、pnpm-lock、Playwright/Vitest/Vite/ESLint/Stylelint 配置等 [GH:local-scan][GH:root][GH:package]。`pull-db-tests` 覆盖 PostgreSQL shards、SQLite migration/integration tests、LDAP、MinIO、Redis、Elasticsearch、Meilisearch、Azurite 等服务，并使用 read-only contents permission 和 pinned checkout SHA [GH:ci]。

不给 5 的原因是代码库非常大且历史包袱不可避免：Git forge 涉及模型层、服务层、routers、templates、frontend、migrations、存储和大量外部集成；本轮没有 build/test，因此不能把 CI 与文件数量直接等同于无缺陷。大 issue backlog 也提示边缘行为和迁移问题持续存在 [GH:issues]。

## 可扩展性

评分 4/5。

Gitea 的扩展性来自几个层面：一是配置面和 deployment topology 很宽，支持 SQLite/MySQL/PostgreSQL、不同 search/cache/storage/auth 组合；二是 API/SDK、webhook、Actions、package registry、Git protocol 和 runner 构成了外部集成边界；三是官方提到 go-sdk、tea CLI、act_runner 和 awesome-gitea 生态 [GH:readme][GH:gomod][Docs:actions]。

没有给 5，是因为 Gitea 不是插件内核优先的产品：深度 UI/权限/流程定制常常需要 fork、维护模板/custom 目录、或在外部用 API/webhook/runner 组合完成。它适合“按 Gitea 的模型扩展”，不适合无限制改造成完全不同的 forge。

## 文档质量

评分 5/5。

文档质量是 Gitea 的强项。README 指向官方 docs，并说明 docs 覆盖 installation、administration、usage、development、contributing 等；本轮抽取的 Docker、backup/restore、Actions、Package Registry、config cheat sheet 都是具体可操作文档，不只是营销页 [GH:readme][Docs:docker][Docs:backup][Docs:actions][Docs:packages][Docs:config]。

CONTRIBUTING 也很完整：它把 build setup、development workflow、source build、testing、frontend/backend guidelines、refactoring、governance、release management 分拆到主题文档，并规定 Conventional Commits、DCO、AI contribution disclosure 等协作规则 [GH:contributing]。这类文档密度对大型开源基础设施很重要。

## 社区与成熟度

| 维度 | 评分 | 说明 |
|------|------|------|
| 社区活跃度 | 5/5 | 56k+ stars、6.8k+ forks、21k+ closed PRs、top contributors 多人、community profile 100%，并有 Discord/forum/Crowdin/OpenCollective 等社区面 [GH:api][GH:issues][GH:contributors][GH:community][GH:readme] |
| 成熟度 | 4/5 | 2016 年创建，持续发布 stable/RC，功能已覆盖完整 forge；但 1.x 仍活跃演进，open issues/PRs 大，CI/actions/packages 等面向持续迭代 [GH:release][GH:issues][Docs:actions][Docs:packages] |

成熟度不给 5 的理由是：Gitea 是成熟系统，但不是“变化很少的完成态工具”。它处在 GitHub-like forge、package registry、CI/CD、现代 auth/storage/search 的交叉点，既要追随 Git/Go/Node/Web 安全更新，又要持续处理迁移和功能演进。

## 安全与风险

评分 3/5。

这个分数不是说 Gitea 不可信，而是说它的 attack surface 与资产价值都高。GitHub repository security-advisories API 本轮返回 28 条 published repository advisories，样本里包含 high/medium/low；本轮没有逐条展开 affected version 和 patched version，因此不能把这些 advisory 直接改写成当前 `v1.26.4` 的 live vulnerability，但它们足以证明 Gitea 必须纳入常规 patch cadence [GH:advisory]。

项目自身安全流程是存在的：SECURITY.md 要求不要公开提 issue，而是私信 `security@gitea.io`，并列出用于加密报告的 GPG key；但该 key 在 SECURITY.md 中标注的过期日是 2026-07-04，本轮 2026-07-05 核验时它已显得过期，实际报告前应确认项目是否已在其他渠道轮换密钥。README FAQ 也提示可在 release log / changelog 搜索 `SECURITY` 找安全补丁 [GH:security][GH:readme]。

主要风险面：

- **身份与权限**：用户、组织、repo 权限、PAT、SSH keys、OAuth/LDAP/WebAuthn 等配置错误会造成代码和包泄漏 [GH:gomod][Docs:packages]。
- **CI runner**：Actions runner 独立部署，官方 docs 明确提醒 runner deployment 可能有 security issues；公共实例跑不可信 workflow 尤其危险 [Docs:actions]。
- **备份恢复**：不一致备份可能导致 database 和 repositories 状态不一致；restore 手工执行，容易在压力场景出错 [Docs:backup]。
- **Web 与 supply-chain 面**：Markdown/rendering、attachments、webhooks、package registry、Git LFS、object storage、邮件通知、反向代理都可能成为攻击路径。

生产建议：固定版本、订阅安全公告、自动化备份并定期 restore drill、禁用不需要的 packages/actions/registration、runner 与主服务隔离、最小权限 PAT、强制 HTTPS/SSH policy、限制 webhook egress，并把 `app.ini` 和 secret 纳入配置审计。

## 学习价值

Gitea 很适合作为“现代自托管开发平台”的工程样本。它展示了如何用 Go 组织一个长期演化的 Web platform：domain models、services、routers、templates、frontend build、DB migrations、Git operations、package registry、CI runner integration、文档和社区治理都在同一仓库中呈现 [GH:local-scan][GH:gomod][GH:contributing]。

对 Develata 特别有价值的学习点：

1. **轻量平台的边界设计**：为什么 Gitea 比 GitLab 轻，但仍然足以覆盖个人/小团队 forge。
2. **self-hosted 运维的 failure modes**：备份一致性、手工 restore、SSH/ROOT_URL/TLS/邮件、volume ownership、runner 隔离 [Docs:docker][Docs:backup][Docs:actions]。
3. **大 Go monolith 的治理**：Makefile、CI shards、多数据库测试、frontend toolchain、社区贡献规范如何共同维持长期项目 [GH:ci][GH:contributing][GH:package]。
4. **代码镜像/私有 vault 的现实选型**：Gitea + SQLite + Compose 可以作为低维护默认；当规模和风险上升，再考虑 PostgreSQL、object storage、external search/cache、runner isolation 和更严格备份策略。
