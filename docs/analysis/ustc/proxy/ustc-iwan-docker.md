---
title: "ustc-iwan-docker"
created: 2026-08-22
updated: 2026-08-22
type: repository-analysis
repo_url: "https://github.com/Develata/ustc-iwan-docker"
category: "ustc/proxy"
tags: [ustc, iwan, proxy, socks5, docker, compose, ghcr, wrapper]
previous_repo: ""
successor: ""
primary_language: "Shell"
license: "MIT"
stars: 0
forks: 0
last_checked: 2026-08-22
last_verified: 2026-08-22
evidence: "GitHub API + README/source/workflow/local scan; sh -n, docker compose config, and public GHCR multi-arch manifest inspection passed; local Docker build was attempted but blocked by an unavailable Docker daemon; no authenticated runtime smoke test"
archived_reason: ""
docker_support: true
gpu_required: false
estimated_cpu: "about 1 core for the wrapper/upstream client under ordinary use; heuristic, not benchmarked"
estimated_memory: "small container plus upstream userspace TCP buffers; heuristic, not measured"
estimated_storage: "small Alpine wrapper image plus downloaded upstream binary and persistent /config volume; not measured locally"
status: active
ratings:
  capability: 4
  usability: 4
  performance: 3
  code_quality: 4
  documentation: 4
  community: 2
  maturity: 2
  extensibility: 3
  security: 3
  recommendation: 3
overall_score: 3.2
sources:
  - "[GH] https://github.com/Develata/ustc-iwan-docker"
  - "[GH:api] GitHub REST repository snapshot queried 2026-08-22 via gh api: created_at=2026-08-20T08:01:24Z, pushed_at=2026-08-20T08:43:15Z, updated_at=2026-08-20T08:45:39Z, default_branch=main, archived=false, language=Shell, license=MIT, stars=0, forks=0, open_issues_count=0, has_issues=true, has_wiki=true"
  - "[GH:readme] README.md local scan at commit 4e2f7c4ccd5495beb7fd400cbaee73a410e3902c on 2026-08-22: explicitly describes this as Develata's unofficial Docker wrapper for yyy1mu/ustc-iwan, documents non-TUN SOCKS5 architecture, persistent config, GHCR tags, checksum policy, Compose quickstart, external Docker network, health/watchdog behavior, license boundary, AI-generated-content disclosure, and TCP/IPv4-only inherited limits"
  - "[GH:local-scan] Shallow clone /opt/data/tmp/repo-wiki-ustc-iwan-docker-2026-08-22 at commit 4e2f7c4ccd5495beb7fd400cbaee73a410e3902c: git ls-files=9, one POSIX shell entrypoint with 190 lines, one Dockerfile, one Compose file, two workflows, no test/spec path; tracked files total 26,371 bytes"
  - "[GH:dockerfile] Dockerfile local scan 2026-08-22: Alpine 3.22 base, ca-certificates/curl/tini/unzip, /config volume, port 1080, runtime healthcheck through local SOCKS5, and tini + entrypoint process supervision; no privileged/CAP_NET_ADMIN/TUN requirement is declared"
  - "[GH:compose] compose.yaml local scan 2026-08-22: restart=unless-stopped, bind-mounts ./data/iwan to /config, publishes 127.0.0.1 host port 1080, sets the wrapper health/watchdog variables, and creates the named ustc-iwan-proxy network"
  - "[GH:entrypoint] entrypoint.sh local scan 2026-08-22: downloads architecture-specific upstream vX.Y.Z OIDC ZIP assets on first use, supports x86_64/aarch64 only, verifies extracted binary SHA-256 against image build args, persists the binary/config under /config, supports fetch/list/shell/run, and terminates the child after repeated SOCKS data-plane health failures"
  - "[GH:ci] .github/workflows/build.yml and check-release.yml local scan 2026-08-22: both request contents: read and packages: write; Build stable wrapper image runs on wrapper-file changes and publishes linux/amd64+linux/arm64 stable; scheduled Publish upstream stable release checks yyy1mu/ustc-iwan latest stable release, avoids an existing version tag, and publishes versioned plus stable tags"
  - "[GH:workflow-runs] GitHub Actions runs API queried 2026-08-22: latest scheduled upstream-release publish and latest wrapper build completed successfully on 2026-08-21/2026-08-20; sampled earlier 2026-08-20 rapid-iteration runs include failures and cancellations before later successful runs"
  - "[GHCR:stable] docker manifest inspect ghcr.io/develata/ustc-iwan-docker:stable executed 2026-08-22: public OCI index contains linux/amd64 and linux/arm64 image manifests plus attestation manifests; this verifies an actually published multi-arch stable tag"
  - "[Local:syntax] Local commands sh -n entrypoint.sh and docker compose --env-file .env.example config executed 2026-08-22: both exit code 0; compose rendered loopback host binding, persistent config bind mount, restart policy, and environment defaults"
  - "[Local:docker-build] Local docker build attempted 2026-08-22 with upstream v2.2.1 amd64/arm64 extracted binary SHA-256 values e0a3739615e89d270394bee191dadcc8dbee9db2a2e98c2331ba1c5135519804 and b79c40e8e09081e6a45b8c9a8459c3ec0a85517c46d4e330ecbd0239056a75f0; build did not start because the local Docker daemon was unavailable; podman/buildah/nerdctl were also unavailable"
  - "[GH:upstream-release] https://github.com/yyy1mu/ustc-iwan/releases/tag/v2.2.1 and its API metadata checked 2026-08-22: upstream latest stable release v2.2.1 has the x86_64-musl and aarch64-musl ZIP assets consumed by the wrapper; upstream asset ZIP digests are recorded by GitHub API, while the wrapper computes extracted-binary digests during its own build"
  - "[GH:upstream-license] Upstream GitHub API and local tracked-file scan checked 2026-08-22: yyy1mu/ustc-iwan reported license=null and its tracked root had no LICENSE file at commit 87beb829030dfea699bcfb3b0868388c3828d810; the wrapper's MIT license therefore does not resolve rights to use or redistribute the upstream binary/code"
  - "[GH:upstream] https://github.com/yyy1mu/ustc-iwan README/source checked 2026-08-22: upstream provides OIDC, TUN, native non-TUN SOCKS5, manual client, and test server; this wrapper consumes only the upstream OIDC binary in native SOCKS5 mode"
  - "[GH:adjacent-wrapper] https://github.com/TioeAre/ustc_iwan_docker README.md checked 2026-08-22: adjacent Docker approach uses an iWAN TUN container plus 3proxy and requires NET_ADMIN/TUN-related settings; it is used only for positioning, not a full re-audit"
  - "[GH:license] LICENSE local scan 2026-08-22: original Dockerfile, shell, Compose, documentation, and workflow content declares MIT License; README explicitly separates that license from upstream code/release-asset rights"
  - "[GH:advisories] GitHub repository security-advisories endpoint queried 2026-08-22 returned []; this means no published GHSA was found in that endpoint check, not that the wrapper, container boundary, credentials, or upstream binary supply chain is safe"
---

# ustc-iwan-docker

> Develata 维护的非官方 USTC iWAN Docker wrapper：不重写上游 Rust 核心，而是把上游原生 non-TUN SOCKS5 客户端包装成带持久化配置、GHCR 多架构镜像、checksum 校验、healthcheck 和自动重连的 Compose 部署入口。
>
> **状态**: `active` · **总分**: 3.2/5 · **推荐度**: 3/5
>
> **验证边界**：本轮检查了仓库源码、workflow、GitHub Actions 与公开 GHCR `stable` manifest，并通过了 `sh -n` 和 `docker compose config`；本机 Docker daemon 不可用，因此没有完成本地 `docker build`，也没有执行真实 OIDC 登录、容器内代理流量或自动重连 smoke test。

## 一句话总结

ustc-iwan-docker 适合希望用 Docker Compose 在宿主机或其他容器旁边提供一个本地 SOCKS5 入口的 USTC/iWAN 用户，但它是个人维护的非官方部署封装，安全与兼容性最终受上游 `yyy1mu/ustc-iwan` 约束 [GH:readme][GH:upstream]。

## 总体评价

这个 repo 的边界写得很清楚：原创部分是 Dockerfile、POSIX shell entrypoint、Compose、文档和 GitHub Actions；核心 iWAN/OIDC/SOCKS5 实现来自上游，不修改上游 Rust 源码，也不声称上游内容属于本仓库的 MIT 授权 [GH:readme][GH:license]。还必须明确：上游 GitHub API 报告 `license=null`，本地 tracked root 也没有 `LICENSE`，因此 wrapper 的 MIT 许可证并不能自动授予上游 binary/code 的使用或再分发权；实际采用前需要单独确认权利边界 [GH:upstream-license]。这使它不是“又一个 iWAN client”，而是一个 deployment adapter。

它的工程价值在于把一次性二进制运行变成长期容器服务：第一次启动时从构建镜像时选定的上游 stable Release 下载对应架构的 OIDC binary，校验 SHA-256 后保存到 `/config`；`fetch`/`list`/`run` 三种入口分别处理登录、线路查看和守护式 SOCKS5；Compose 默认只把 1080 绑定到宿主机 loopback，容器间则通过命名 network 暴露 [GH:entrypoint][GH:compose]。公开 GHCR `stable` manifest 已经有 amd64/arm64 变体，说明发布路径不只是 README 设计 [GHCR:stable]。

但这是 2026 年 8 月刚创建的单人 wrapper。它依赖上游 release API、GitHub asset、GHCR、Docker network 和外部健康检查 URL；本轮没有真实凭据/代理流量验证，且 workflow 在快速迭代中出现过失败与取消记录。更重要的是，wrapper 会下载、缓存并围绕一个当前未核实软件许可证的上游 binary 组织分发流程；MIT 只覆盖 wrapper 原创部分，不能替代上游权利确认。它适合作为个人/实验室低敏感流量的方便入口，不应把 `stable` 滚动 tag、AI-generated 声明或 checksum 机制误解成完整的供应链审计 [GH:api][GH:workflow-runs][GH:readme][GH:upstream-license]。

## 推荐度：3/5

**目标角色**：已经能运行 Docker Compose、拥有合法 USTC/iWAN 访问权限、希望让本机或指定其他容器通过一个 SOCKS5 端口访问校园网络的个人用户。推荐度给 3：它在部署摩擦、持久化和自动恢复上明显优于手动下载 binary，但项目非常年轻、没有真实链路 smoke evidence，且上游 binary 的软件许可证/再分发权尚未核实，本质上还带有“自己审查并自己承担风险”的个人基础设施属性。建议固定 `vX.Y.Z`，限制暴露范围，审阅镜像来源、config volume 和 upstream rights，再用于非敏感场景；不要直接把 `stable` 当作高可信生产供应链 [GH:readme][GH:entrypoint][GHCR:stable][GH:upstream-license]。

## 优势

1. **职责边界干净**：不 fork/重写上游 Rust 核心，只包装 upstream OIDC binary，后续上游 release 与 wrapper 变更可以分别追踪 [GH:readme][GH:upstream]。
2. **部署入口短**：`.env.example`、Compose、`fetch`、`list`、`up -d` 形成清楚的首次配置和长期运行路径 [GH:readme][GH:compose]。
3. **适合无 TUN 权限的容器环境**：使用上游 native non-TUN SOCKS5，不要求 `privileged`、`CAP_NET_ADMIN` 或 `/dev/net/tun`；默认宿主机端口也只绑定 loopback [GH:readme][GH:dockerfile][GH:compose]。
4. **有持久化与恢复机制**：线路配置、缓存 binary 存在 `/config`；Docker restart policy、tini、child cleanup 和连续数据面失败 watchdog 共同处理常见断线 [GH:entrypoint][GH:compose]。
5. **release tracking 有明确模型**：版本化 tag 对应上游 stable release，`stable` 是滚动推荐 tag；workflow 会下载 amd64/arm64 assets、计算 digest 并发布 GHCR multi-arch image [GH:readme][GH:ci][GHCR:stable]。

## 劣势

1. **不能脱离上游独立提供能力**：上游的 TCP/IPv4、CONNECT、线路、OIDC、DNS 与协议限制都会原样继承；wrapper 只增加部署，不修复核心行为 [GH:upstream][GH:readme]。
2. **项目与维护历史极短**：仓库创建于 2026-08-20，stars/forks 都是 0，只有 owner 贡献；workflow 早期已有失败/取消记录，暂时没有独立用户反馈面 [GH:api][GH:workflow-runs]。
3. **本地 runtime 验证受限**：本轮没有完成 Docker build，也没有容器内 OIDC、代理流量、网络断开和自动重连测试；GHCR 发布成功不等于每一种 Compose 环境都可用 [Local:docker-build][GHCR:stable]。
4. **默认滚动 tag 有变更面**：`stable` 会跟随上游 stable release 或 wrapper 变更，生产环境如果不显式 pin 版本，就会把上游升级纳入下一次部署 [GH:readme][GH:ci]。
5. **checksum 不是独立 provenance**：workflow 对从 GitHub Release 下载的 binary 计算 SHA-256，并把该值写入 image build args；它能防止下载后缓存损坏或运行时替换，但没有解决“上游 release 本身是否可信/是否签名”的问题 [GH:ci][GH:entrypoint]。
6. **上游 binary 的权利未核实**：上游 GitHub API 报告 `license=null`，tracked root 没有 `LICENSE`；wrapper 的 MIT 许可证只覆盖自己的 Dockerfile、shell、Compose、文档和 workflow，不能自动解决上游 binary 的使用或再分发授权 [GH:upstream-license][GH:license]。

---

## 适合什么场景

- 个人 VPS、开发机或实验室机器上，需要一个 `socks5h://127.0.0.1:1080` 的 USTC/iWAN 出口。
- 其他 Docker Compose 项目只需把特定请求加入 `ustc-iwan-proxy` external network，并使用 `socks5h://ustc-iwan:1080` [GH:readme][GH:compose]。
- 不希望为 iWAN TUN 容器开放 `NET_ADMIN`、挂载 `/dev/net/tun`，而是接受应用显式使用 SOCKS5 的场景。
- 希望把登录后的 `servers.json` 保存在宿主机、让容器重启后复用线路配置，并用 watchdog 发现数据面失效。
- 个人维护者需要一个相对小的 wrapper 作为学习 Docker multi-arch、GHCR、release tracking、checksum 和 process supervision 的样例 [GH:ci][GH:entrypoint]。

## 不适合什么场景

- 需要把宿主机或整个 Docker 网络透明地接入 iWAN 的场景；本项目只提供显式 SOCKS5 代理，不修改宿主机默认路由 [GH:readme][GH:compose]。
- 需要 IPv6、UDP、SOCKS5 `BIND`/`UDP ASSOCIATE` 或非 TCP/IPv4 服务的场景；这些是上游限制，不是 wrapper 可自动补齐的功能 [GH:readme][GH:upstream]。
- 需要官方学校/运营方支持、商业 SLA、审计过的供应链或高敏感凭据长期托管的生产环境。
- 不能接受容器运行时访问 GitHub Release、把认证线路信息放在 bind-mounted `/config`，或不能审查个人维护的 AI-generated wrapper 的用户 [GH:readme][GH:entrypoint]。
- 需要 ARMv7、riscv64 或 macOS/Windows binary 的容器镜像；当前 entrypoint 只选择 x86_64 和 aarch64 Linux upstream assets [GH:entrypoint][GH:ci]。

## 与类似项目对比

| 项目 | 定位 | 相对本项目 |
|------|------|------------|
| `ustc-iwan` | USTC iWAN Rust 核心 client/server 与 native binaries | 能直接使用 TUN、手工 client、server 和跨平台 binary；本项目则把其中 OIDC + native SOCKS5 路径变成长期 Docker deployment surface [GH:upstream] |
| `TioeAre/ustc_iwan_docker` | Docker + iWAN TUN + 3proxy 的相邻封装 | README 所示路径需要 `NET_ADMIN`、`/dev/net/tun` 和 3proxy；本项目减少容器权限与组件数量，但只覆盖 SOCKS5、并继承上游 native SOCKS 限制 [GH:adjacent-wrapper][GH:readme] |

上述项目按 `ustc/proxy` 同类范围做定位级对比，未按同一 10 维度框架深审；`TioeAre/ustc_iwan_docker` 只作为相邻方案参照，不代表本轮对其代码、镜像或安全性做了同等审计。

## 它能做什么

wrapper 的核心流程是：读取构建时注入的 `IWAN_VERSION` 与架构对应 SHA-256；首次运行从 `yyy1mu/ustc-iwan` release 下载 `iwan-client-oidc-<arch>-musl.zip`，解压并校验 binary；校验通过后保存到 `/config/bin`，后续执行 `--fetch`、`--list` 或 `--connect --socks` [GH:entrypoint][GH:upstream-release]。

Compose 默认启动一个叫 `ustc-iwan` 的容器，监听容器内 `0.0.0.0:1080`，向宿主机只发布 `127.0.0.1:1080`，并创建 `ustc-iwan-proxy` network。应用可以显式使用 `socks5h://...`，把域名解析交给 SOCKS server；wrapper 不会把宿主机或其他容器的默认路由强行送入 iWAN [GH:compose][GH:readme]。

健康逻辑不是简单检查进程存在：entrypoint 周期性通过 SOCKS 数据面访问配置的 URL，连续失败达到阈值就终止 upstream child，让 `restart: unless-stopped` 重新建立会话。HTTP status 本身不作为失败条件，重点是 DNS、SOCKS、TCP/TLS 和响应传输是否完成 [GH:entrypoint][GH:readme]。

## 运行环境与资源占用

| 场景 | CPU | 内存 | 存储 | 说明 |
|------|-----|------|------|------|
| 单容器 SOCKS5 | 约 1 个核心作为起点 | small container + userspace flow buffers | Alpine wrapper image + upstream binary + `/config` | 轻量估计，未实测 RSS/吞吐 |
| 多应用共享 | 视并发 TCP flows 增长 | 由上游 smoltcp flows 与 连接缓冲主导 | 共享 config volume 与 binary cache | 只建议让需要校园网的请求显式走 proxy |

- **运行时**：Docker/Compose；Alpine 3.22、`curl`、`ca-certificates`、`tini`、`unzip`，加上运行时下载的上游 `iwan-client-oidc` [GH:dockerfile][GH:entrypoint]。
- **操作系统**：镜像发布 linux/amd64 与 linux/arm64；宿主机需能运行对应 Docker/Compose，容器自身不需要 TUN [GH:ci][GHCR:stable]。
- **Docker**：`docker_support: true`。仓库直接提供 Dockerfile、Compose、GHCR stable/versioned tag 和 multi-arch manifest；但本轮没有在本机完成 image build [GH:dockerfile][GH:compose][GHCR:stable][Local:docker-build]。
- **GPU**：不需要。
- **外部依赖**：GitHub Release/API 与 asset 下载、公开或可拉取的 GHCR image、合法 USTC OIDC/iWAN 服务、宿主机 Docker network；健康检查默认访问 `https://api.llm.ustc.edu.cn/`，可通过环境变量替换 [GH:ci][GH:entrypoint][GH:readme]。

CPU、内存和存储均为基于 Alpine + shell wrapper + 上游 userspace SOCKS 的 heuristic estimate，不是本轮测量结果；公开 manifest 只证明 stable multi-arch tag 存在，不等于性能 benchmark [GHCR:stable]。

## 上手体验

上手体验给 4/5。README 给出 `cp .env.example .env`、`docker compose pull`、`docker compose run --rm iwan fetch`、`list`、设置 `IWAN_SERVER_INDEX` 和 `docker compose up -d` 的完整路径；还解释了 `socks5h`、其他容器加入 external network、Mihomo/Clash fake-IP 注意事项以及健康检查逻辑 [GH:readme][GH:compose]。

首次登录仍需要在终端完成浏览器 OIDC 回调粘贴，且必须正确理解 `/config` 的敏感数据、线路序号和容器网络；如果只想临时连一次，直接下载 upstream binary 可能更少一层包装。对已经熟悉 Docker Compose 的用户，它的配置复杂度是可接受的；对没有容器经验的 USTC 新生，则不能称为零配置 [GH:readme][GH:entrypoint]。

## 代码质量

代码质量给 4/5。实现面很窄但关注了几个容易被忽略的运维细节：POSIX `sh` 的 `set -eu`、child cleanup、`tini`、缓存 binary 校验、架构分派、重试下载、Compose restart policy、workflow concurrency，以及 `contents: read`/`packages: write` 的权限边界 [GH:entrypoint][GH:dockerfile][GH:compose][GH:ci]。本地 `sh -n` 与 Compose 展开检查均通过，公开 GHCR stable 发布也可观察到 amd64/arm64 manifest [Local:syntax][GHCR:stable]。

仍不能给 5/5：仓库没有自动化单元/集成测试或 shellcheck，local Docker build 因 daemon 不可用而未完成；GitHub Actions 早期快速修改曾出现失败/取消，后续才出现成功构建。更重要的是，checksum、watchdog 和发布逻辑虽有静态证据，却没有本轮真实网络故障注入或容器重启验证 [GH:local-scan][GH:workflow-runs][Local:docker-build]。

## 可扩展性

可扩展性给 3/5。环境变量已经覆盖 image tag、server index、SOCKS MTU、health URL、timeout、watchdog interval/failure threshold/startup grace；Compose 还允许宿主机端口、config volume 和 external network 调整 [GH:readme][GH:compose][GH:entrypoint]。

但它的扩展面是 deployment configuration，而不是插件/API：要支持更多架构、TUN、HTTP proxy、非 SOCKS upstream、独立 resolver 或更复杂的 secret backend，通常仍需修改 entrypoint/Compose/workflow 并重新发布镜像。这个取舍保持了 wrapper 的简洁，却限制了泛化能力。

## 文档质量

文档质量给 4/5。README 不仅有 quickstart，还解释了 wrapper/upstream 的 license split、AI-generated 内容范围、stable/version tag 语义、上游 release 检查周期、Compose network、fake-IP/DNS、healthcheck、watchdog 和权限建议；对“这个 repo 到底改了什么”交代得比很多 Docker wrapper 清楚。但 license split 不能被读成上游权利已解决：上游当前没有已验证的软件许可证，读者仍需自行确认 binary 的使用与再分发边界 [GH:readme][GH:upstream-license]。

扣分点是文档还没有实际运行矩阵、镜像 digest/rollback 操作手册、备份与权限建议的可执行清单、故障注入结果，以及从空目录到真实 OIDC 成功的录屏/日志证据。`stable` 是滚动 tag，读者需要自己把“方便更新”与“可复现部署”之间的取舍落实为 version pin [GH:readme][GH:workflow-runs]。

## 社区与成熟度

| 维度 | 评分 | 说明 |
|------|------|------|
| 社区活跃度 | 2/5 | GitHub API snapshot 显示 stars=0、forks=0、open issues=0，contributors 只有 owner；当前没有外部 issue/PR/生态证据，但 owner 在短时间内持续推进 workflow 与文档 [GH:api][GH:workflow-runs]。 |
| 成熟度 | 2/5 | 仓库创建于 2026-08-20，暂无 GitHub Release，只有刚发布的 GHCR stable/version tracking surface；workflow 早期失败/取消和未完成本地 runtime smoke 说明仍处于 trial 阶段 [GH:api][GH:workflow-runs][GHCR:stable]。 |

## 安全与风险

安全性给 3/5：wrapper 做了若干实际的 least-privilege 与 integrity 处理，但它扩大了“运行一个本地 binary”到“容器、GitHub Release、GHCR、持久化凭据和自动重启”这一整条供应链的信任范围。

1. **正面硬化**：Compose 默认只发布宿主机 loopback；正常路径不需要 privileged、`CAP_NET_ADMIN` 或 `/dev/net/tun`；Dockerfile 使用 `tini`，workflow 只请求 `contents: read` 与 `packages: write`，entrypoint 对下载后的 binary 做 SHA-256 校验 [GH:dockerfile][GH:compose][GH:ci][GH:entrypoint]。
2. **凭据持久化风险**：`/config` 同时保存 upstream binary cache 与 `servers.json`，后者包含敏感线路/认证信息；bind mount 的宿主机权限、备份、日志和其他可访问该 volume 的进程都必须纳入威胁模型 [GH:readme][GH:compose]。
3. **代理暴露边界**：容器内 SOCKS 默认监听 `0.0.0.0:1080`，虽然宿主机 publish 只绑定 `127.0.0.1`，但同一 Docker network 上的容器可访问它。不能把 loopback host binding 误解为整个 network 的认证隔离 [GH:compose][GH:entrypoint]。
4. **供应链边界**：wrapper 在 runtime 从 GitHub Release 下载上游 binary；build workflow 计算的 digest 能防止传输后篡改和缓存错配，但不是 upstream 签名、可复现构建或独立 provenance 证明 [GH:ci][GH:entrypoint][GH:upstream-release]。
5. **上游权利与风险继承**：native SOCKS 的协议、加密、DNS、OIDC token 与 TCP/IPv4 限制属于上游；同时，上游 GitHub API 报告 `license=null` 且 tracked root 没有 `LICENSE`，wrapper 不对这些技术与权利边界重新审计或修复，MIT 只覆盖 wrapper 自身 [GH:upstream][GH:upstream-license][GH:license]。
6. **AI-generated disclosure 应被当作审查提示**：README 明确说明 wrapper 原创实现由 ChatGPT 构造并由 owner 授权写入；这不是安全缺陷的自动证明，但意味着使用者应像审查其他自动生成 shell/CI 一样，检查 quoting、重启、权限、输入边界和异常路径 [GH:readme]。

本轮 GitHub advisories endpoint 没有发现 GHSA，但该结果不能推出容器、上游 binary 或配置数据安全 [GH:advisories]。高敏感账号、支付、生产 cloud console 和内部生产系统不应仅凭这份 wrapper 的默认配置接入。

## 学习价值

学习价值是中高的。对于“如何把一个快速迭代的 native client 变成可维护的容器服务”，这个小 repo 的状态流很清楚：构建时选择 upstream release → asset download → extracted-binary checksum → persistent config/cache → SOCKS child → data-plane watchdog → Docker restart；同时包含 GHCR multi-arch、版本化 tag（workflow 会避免覆盖已存在的版本 tag）与 rolling stable tag 的发布取舍 [GH:readme][GH:entrypoint][GH:ci]。

它尤其适合学习 deployment glue 与供应链边界，而不适合作为“安全容器模板”直接复制。后续若要提高生产可信度，最有价值的工作不是增加更多 wrapper features，而是补齐可重复 build/runtime smoke、故障注入、固定 digest/rollback、volume 权限说明和独立 upstream provenance 验证。
