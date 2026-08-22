---
title: "ustc-iwan"
created: 2026-08-22
updated: 2026-08-22
type: repository-analysis
repo_url: "https://github.com/yyy1mu/ustc-iwan"
category: "ustc/proxy"
tags: [ustc, iwan, proxy, socks5, tun, oidc, rust, networking]
previous_repo: ""
successor: ""
primary_language: "Rust"
license: "NOASSERTION"
stars: 30
forks: 7
last_checked: 2026-08-22
last_verified: 2026-08-22
evidence: "GitHub API + README/code/local scan; cargo test --locked (5 passed) and cargo fmt --check passed; cargo clippy --locked --all-targets -D warnings failed on one too-many-arguments lint; no live USTC/iWAN authentication or tunnel smoke test"
archived_reason: ""
docker_support: false
gpu_required: false
estimated_cpu: "1–2 cores under ordinary use; heuristic, not benchmarked"
estimated_memory: "tens of MB plus per-flow userspace TCP buffers; heuristic, not measured"
estimated_storage: "small release binary plus ~/.config/iwan/servers.json; latest x86_64-musl asset ZIP was 1.62 MB"
status: active
ratings:
  capability: 4
  usability: 3
  performance: 3
  code_quality: 4
  documentation: 4
  community: 3
  maturity: 2
  extensibility: 3
  security: 2
  recommendation: 3
overall_score: 3.1
sources:
  - "[GH] https://github.com/yyy1mu/ustc-iwan"
  - "[GH:api] GitHub REST repository snapshot queried 2026-08-22 via gh api: created_at=2026-06-28T10:56:46Z, pushed_at=2026-07-30T12:15:59Z, default_branch=main, archived=false, language=Rust, license=null, stars=30, forks=7, open_issues_count=1, has_issues=true, has_wiki=true"
  - "[GH:releases] GitHub releases API queried 2026-08-22: latest stable release v2.2.1 published 2026-07-30T11:41:41Z; its release body says SOCKS disconnections caused by PING_REQ/RSP were fixed by using ECHO_REQ/RES and that periodic ECHO keepalive was added for TUN mode; recent sampled releases also include v2.2.0 and v2.1.3; v2.2.1 x86_64-musl OIDC asset ZIP size=1,622,962 bytes and aarch64-musl asset ZIP size=1,531,703 bytes"
  - "[GH:issues-prs] GitHub Search API queried 2026-08-22: open issues=0 and open PRs=1; PR #6 feat: support non-interactive server selection and custom DNS resolvers, updated 2026-08-20; REST open_issues_count=1 therefore includes the open PR"
  - "[GH:contributors] GitHub contributors API queried 2026-08-22 returned one mapped contributor yyy1mu with 14 contributions; v2.2.1 release notes separately acknowledge rrtt217, idwts, and TioeAre for issue analysis/contributions"
  - "[GH:readme] README.md local scan at commit 87beb829030dfea699bcfb3b0868388c3828d810 on 2026-08-22: documents OIDC fetch/list/connect/all flow, ~/.config/iwan/servers.json, Linux TUN mode, rootless SOCKS5 mode, selective IP/domain/CIDR routing, manual client, test server, cross-platform binaries, and IPv4/TCP-only SOCKS limitations"
  - "[GH:ci] .github/workflows/release.yml local scan 2026-08-22: tag-triggered release build matrix covers Linux GNU/musl targets plus macOS and Windows client binaries, uses Rust/cargo-zigbuild, and publishes per-binary ZIP assets; workflow grants contents: write for release creation"
  - "[GH:local-scan] Shallow clone /opt/data/tmp/repo-wiki-ustc-iwan-2026-08-22 at commit 87beb829030dfea699bcfb3b0868388c3828d810: git ls-files=37, Rust files=29 with 3,329 total Rust source lines, one workflow, no dedicated test path; root contains Cargo.toml/Cargo.lock/README.md and src/bin plus src/core modules"
  - "[Local:test] Local command cargo test --locked executed 2026-08-22 with Rust 1.97.1: 5 unit tests passed, 0 failed; binary targets and doctests had 0 tests; this did not exercise real OIDC, UDP iWAN authentication, TUN, or SOCKS end-to-end traffic"
  - "[Local:fmt] Local command cargo fmt --check executed 2026-08-22: exit code 0"
  - "[Local:clippy] Local command cargo clippy --locked --all-targets -- -D warnings executed 2026-08-22: failed only on clippy::too_many_arguments for src/core/proxy.rs::run_pump with 11 arguments; compilation otherwise reached the lint stage"
  - "[Local:source] Source inspection 2026-08-22: src/core/socks.rs implements a userspace smoltcp TCP/IPv4 stack and SOCKS5 CONNECT flow; src/core/tun.rs and src/core/route.rs implement Linux TUN/routing; src/bin/oidc/main.rs handles config persistence and interactive server selection; src/bin/server provides a Linux test server with iptables NAT"
  - "[Local:protocol] Source inspection 2026-08-22: src/bin/oidc/cli.rs documents encryption modes 0=None, 1=XOR, 2=AES, while src/core/netstack/tunnel.rs sends and receives XOR whenever encryption is nonzero; this is a protocol-level behavior mismatch requiring upstream verification before treating mode 2 as AES"
  - "[Local:crypto] Source inspection 2026-08-22: data-plane code exposes no-encryption/XOR choices and uses custom MD5-derived values, XOR payload transformation, and protocol header signatures; local config password decryption uses a custom AES-GCM implementation with a key derived from a hardcoded app secret/domain/username"
  - "[Local:doc-script] doc/full_flow.py local scan 2026-08-22: credential-extraction helper sets TLS certificate verification disabled and prints a token prefix; it is not the Rust OIDC default path but is a material unsafe example in the repository"
  - "[GH:advisories] GitHub repository security-advisories endpoint queried 2026-08-22 returned []; this means no published GHSA was found in that endpoint check, not that the protocol or credential handling is safe"
  - "[GH:license] GitHub API reported license=null and the local tracked-file scan found no root LICENSE file; no explicit repository software license was verified"
  - "[GH:docker-wrapper] https://github.com/Develata/ustc-iwan-docker README.md checked 2026-08-22: describes an unofficial wrapper that consumes the upstream OIDC binary in native non-TUN SOCKS5 mode, persists config, and publishes GHCR images"
  - "[GH:adjacent-wrapper] https://github.com/TioeAre/ustc_iwan_docker README.md checked 2026-08-22: adjacent Docker path uses an iWAN TUN container plus 3proxy and requires NET_ADMIN/TUN-related deployment settings"
---

# ustc-iwan

> 面向 USTC iWAN 的 Rust 客户端与兼容测试服务端：同时提供 Linux TUN 路由和跨平台、rootless 的 SOCKS5 路径，但仍应视为年轻的专用网络工具，而不是通用安全 VPN。
>
> **状态**: `active` · **总分**: 3.1/5 · **推荐度**: 3/5
>
> **验证边界**：本轮检查了 GitHub API、README、源码、release workflow，并在本地执行了 Rust 单元测试与格式检查；没有执行真实 OIDC 登录、USTC/iWAN UDP 认证、TUN 配置或端到端 SOCKS5 流量测试。

## 一句话总结

ustc-iwan 适合有授权 USTC iWAN 账号、希望在 Linux 上做选择性 TUN 路由，或在 macOS/Windows/Linux 上以 rootless SOCKS5 方式访问指定 TCP/IPv4 目标的用户 [GH:readme]。

## 总体评价

这是一个把 USTC iWAN 接入流程重新做成 Rust CLI 的年轻项目。`iwan-client-oidc` 负责浏览器 OIDC 登录、线路配置保存、线路选择和连接；`iwan-client` 允许手工指定服务器与凭据；`iwan-server` 则用于自建兼容测试环境。Linux 还能创建 TUN 设备并按 IP、域名或 CIDR 设置路由；三种桌面平台则以 SOCKS5 为主要跨平台入口 [GH:readme][Local:source]。

项目的有效价值已经超过“README 概念演示”：v2.2.1 release 修复了 SOCKS/TUN keepalive 相关问题，并提供多平台构建产物；本地 5 个单元测试也能通过。但它创建于 2026 年 6 月，当前仍有非交互选择与自定义 DNS 的开放 PR，代码还使用专用协议、legacy-style XOR/自定义加密路径，且仓库没有明确软件许可证 [GH:releases][GH:issues-prs][GH:license][Local:crypto]。因此，适合 USTC 场景中的试用与学习，不宜未经额外审计就承载敏感流量或作为通用 VPN。

## 推荐度：3/5

**目标角色**：需要合法访问 USTC iWAN 线路的学生、研究人员、校园网络维护者，以及想研究用户态 TCP/IP、TUN 和专用 UDP 隧道的人。推荐度给 3，是因为功能覆盖已经相当完整，rootless SOCKS5 也降低了跨平台使用门槛；但项目年龄短、真实链路未在本轮复现、协议安全边界不透明，且没有明确 license。更稳妥的路径是先使用低敏感场景，固定 release 版本，审阅源码与上游服务规则，再决定是否长期运行 [GH:readme][GH:releases][Local:test][GH:license]。

## 优势

1. **同一项目覆盖两种接入形态**：Linux 可以选择 TUN 与精确路由，三种桌面平台可以使用不需要 root/CAP_NET_ADMIN 的 SOCKS5 模式 [GH:readme]。
2. **OIDC 流程相对完整**：支持 `--fetch`、`--list`、`--connect`、`--all`，线路配置可落盘，后续列举线路不必重复登录 [GH:readme]。
3. **用户态 SOCKS5 设计有实际价值**：源码以 smoltcp 构造用户态 TCP/IPv4 栈，不创建网卡，也不修改宿主机业务路由 [Local:source]。
4. **发布覆盖面较广**：release workflow 同时构建 Linux 多架构、macOS 和 Windows 客户端，适合不同终端架构下载使用 [GH:ci]。
5. **核心模块边界清楚**：认证、协议、加密、TUN、路由、userspace netstack 和三个 binary 目录分离，便于继续修复或替换局部实现 [GH:local-scan][Local:source]。

## 劣势

1. **项目记录仍很短**：仓库创建于 2026 年 6 月，当前只有很小的 mapped contributor footprint，尚不足以证明长期稳定性 [GH:api][GH:contributors]。
2. **连接流程仍偏交互式**：`--connect` 需要人工选择线路；面向 systemd/容器的非交互选择和自定义 DNS 仍在开放 PR 中 [GH:issues-prs]。
3. **协议与安全实现需要谨慎对待**：数据面非零加密选项在源码中走 XOR，CLI 注释却将 `2` 写成 AES；配置密码解密和专用协议也不是可替代成熟 VPN 的标准安全模型 [Local:protocol][Local:crypto]。
4. **真实运行依赖较多外部条件**：OIDC、控制器、UDP 线路、DNS、Linux TUN 和权限任一环节异常，都可能让“编译成功”与“可用”之间出现较大差距 [GH:readme][Local:test]。
5. **许可证边界不清**：GitHub API 没有识别到 license，仓库也没有根目录 LICENSE；二次分发、闭源集成和长期依赖前应先取得权利人确认 [GH:license]。

---

## 适合什么场景

- 有合法 USTC/iWAN 访问权限，需要访问校园内 TCP/IPv4 服务或指定域名。
- Linux 用户希望只把选定 IP、域名或 CIDR 送入 iWAN，而不把所有宿主机流量改走隧道。
- macOS、Windows 或无权创建 TUN 的环境，只需要一个本地 SOCKS5 入口。
- 研究 OIDC + PKCE、原始 UDP 协议、Linux TUN、smoltcp userspace stack 和跨平台 Rust release 的工程实现。
- 维护兼容测试环境时使用 `iwan-server`；普通 iWAN 用户不需要自建该服务端 [GH:readme][Local:source]。

## 不适合什么场景

- 把它当作面向任意网络、任意协议和敏感生产流量的通用 VPN；当前 SOCKS5 路径明确限制为 TCP/IPv4 `CONNECT`，不支持 IPv6、BIND 或 UDP ASSOCIATE [GH:readme]。
- 在没有确认校园网络、Panabit/iWAN 服务条款和账号授权的情况下使用。
- 希望直接部署到 systemd、无人值守容器或复杂 DNS/fake-IP 环境，却不愿等待或审阅当前开放 PR 的场景 [GH:issues-prs]。
- 需要成熟的标准加密、细粒度密钥托管、审计报告或明确开源许可证的长期生产依赖。
- 直接运行 `doc/full_flow.py` 处理真实凭据；该 helper 关闭 TLS 证书校验并输出 token 片段，不能当作安全登录工具 [Local:doc-script]。

## 与类似项目对比

| 项目 | 定位 | 相对本项目 |
|------|------|------------|
| `ustc-iwan-docker` | 面向 GHCR/Compose 的非官方 Docker wrapper | 复用本项目的 OIDC 二进制和原生 non-TUN SOCKS5；更适合长期容器运行，但只包装其中一条部署路径，不替代本项目的 TUN、手工 client 或 server 能力 [GH:docker-wrapper] |
| `TioeAre/ustc_iwan_docker` | 以 Docker + iWAN TUN + 3proxy 暴露宿主机代理的相邻方案 | 更依赖 `NET_ADMIN`、`/dev/net/tun` 和额外代理层；本项目本身提供的 rootless SOCKS5 则可绕开这套容器网络权限 [GH:adjacent-wrapper] |

上述项目按 `ustc/proxy` 同类范围做定位级对比，未按同一 10 维度框架深审；两类 Docker 项目与本核心客户端属于“核心实现—部署封装”的边界关系，不是完全对等竞品。

## 它能做什么

`iwan-client-oidc` 可以打开 OIDC 登录链接，接收用户粘贴的回调 URL，向控制器注册设备并抓取线路配置，保存到 `~/.config/iwan/servers.json`；之后可以列出线路并交互式选择连接 [GH:readme][Local:source]。

连接模式分为两类。Linux TUN 模式创建默认名为 `iwan0` 的 TUN 设备，并可把 IP、域名解析结果或 CIDR 路由到隧道；SOCKS5 模式监听本地 TCP 端口，通过 smoltcp 在用户态构造 IPv4 TCP 流，不创建 TUN。`iwan-client` 还提供 ping、认证检查、手工 TUN 和手工 SOCKS5；`iwan-server` 负责兼容测试服务端 [GH:readme][Local:source]。

当前 SOCKS5 只处理 `CONNECT`、IPv4 和域名目标；域名解析路径默认查询 `114.114.114.114:53`，开放 PR #6 正在讨论自定义 DNS 及非交互选择 [GH:readme][GH:issues-prs]。

## 运行环境与资源占用

| 场景 | CPU | 内存 | 存储 | 说明 |
|------|-----|------|------|------|
| SOCKS5 客户端 | 1 个普通核心即可作为起点 | tens of MB + 每条 flow 的 userspace buffers | 小型 release binary + 配置文件 | 纯用户态 TCP/IPv4，未做本轮 benchmark |
| Linux TUN 客户端 | 1–2 个核心作为起点 | 随流量和 MTU 增长 | binary + 系统 TUN/route 状态 | 需要 `/dev/net/tun`、`ip` 和 root 或 `CAP_NET_ADMIN` |
| 测试服务端 | 1–2 个核心作为起点 | 随并发 session 增长 | binary + users file | Linux；需要 IPv4 forwarding、iptables NAT 和 TUN |

- **运行时**：Rust native binaries；SOCKS5 内含 smoltcp userspace TCP/IPv4 stack，TUN 模式使用 Linux device/routing APIs [Local:source]。
- **操作系统**：SOCKS5 支持 Linux、macOS、Windows；TUN 与 `iwan-server` 仅 Linux [GH:readme]。
- **Docker**：`docker_support: false`。上游仓库没有 Dockerfile、Compose 或官方镜像；Docker 化属于另一个 wrapper repo [GH:local-scan][GH:docker-wrapper]。
- **GPU**：不需要。
- **外部依赖**：USTC OIDC 与 controller、iWAN UDP endpoint；SOCKS5 域名解析默认依赖 `114.114.114.114:53`；TUN/server 还依赖 Linux `/dev/net/tun`、`ip`、root/CAP_NET_ADMIN 与 iptables [GH:readme][Local:source]。

以上 CPU、内存和存储是基于代码路径与小型 native binary 的工程估计，不是实测 benchmark；本轮只测了编译/单元测试，没有测吞吐、并发或 RSS。

## 上手体验

上手体验给 3/5。README 给出了从 release 下载、OIDC 回调复制、配置保存、线路列举、TUN/SOCKS5 连接到交叉编译的完整命令路径，并专门解释了浏览器误触 `iWAN.app` 时如何复制回调 URL [GH:readme]。

扣分来自环境门槛而非命令数量：首次使用需要浏览器认证和手工粘贴回调，TUN 需要 Linux 权限，连接仍然要交互选择线路，域名解析/fake-IP 环境也可能需要等待自定义 DNS 支持。对只需本地代理且能访问 USTC 服务的用户，SOCKS5 模式是较低摩擦入口；对无人值守部署则还不够顺滑 [GH:issues-prs]。

## 代码质量

代码质量给 4/5。项目把 `src/core` 的协议/认证/加密/TUN/路由/netstack 与 `src/bin` 的 OIDC client、手工 client、server 分开；本地 `cargo test --locked` 的 5 个单元测试覆盖了 GCM base64、DNS 消息、IPv4/MTU 过滤和 SOCKS 初始 TCP SYN，`cargo fmt --check` 也通过 [Local:test][Local:fmt][Local:source]。

这还不是 5/5：release workflow 的主要职责是构建和发布，并没有看到独立的测试/集成 smoke job；测试没有覆盖真实 OIDC、协议认证、路由回滚或跨平台 runtime；严格 `cargo clippy -D warnings` 还会因 `src/core/proxy.rs::run_pump` 的 11 参数设计失败 [GH:ci][Local:test][Local:clippy]。因此结构良好，但维护质量仍应以实际链路反馈继续校准。

## 可扩展性

可扩展性给 3/5。CLI 暴露了 server、port、MTU、TUN 名称、IP/domain/CIDR 路由、监听地址和加密模式；core 也把 protocol、route、TUN 和 userspace stack 分成独立模块，适合通过 fork 或局部替换继续演化 [GH:readme][Local:source]。

但项目没有插件机制、稳定 library API 或外部 resolver/transport 抽象，深度定制仍需要修改 Rust 源码。当前开放的非交互 server selection 与 custom DNS PR 正好说明这些扩展点仍在形成中 [GH:issues-prs]。

## 文档质量

文档质量给 4/5。README 对三个 binary、系统要求、下载文件名、OIDC 交互、配置位置、SOCKS5 参数、路由规则、手工 client、源码构建和 server 运行都有直接示例，并说明了 IPv6、UDP、BIND 与域名解析限制；两个 OIDC 截图也降低了首次登录的认知成本 [GH:readme]。

扣分点是文档仍以用户操作为主，缺少正式协议说明、威胁模型、密钥/加密模式解释、systemd/非交互部署说明和端到端故障排查；`--encrypt=2` 的 CLI 说明与实际非零 XOR data-plane 路径还需要上游澄清 [Local:protocol]。

## 社区与成熟度

| 维度 | 评分 | 说明 |
|------|------|------|
| 社区活跃度 | 3/5 | 仓库近期有 release，GitHub contributors endpoint 映射出 yyy1mu，另有一个由外部账号提交的开放 PR；但 stars=30、forks=7，规模与反馈面仍小 [GH:api][GH:contributors][GH:issues-prs]。 |
| 成熟度 | 2/5 | 项目创建于 2026-06-28，最近 release 为 2026-07-30，且 v2.2.1 刚修复过关键 keepalive 行为；当前没有足够长的稳定运行记录，仍有 API/部署方向开放变更 [GH:api][GH:releases][GH:issues-prs]。 |

## 安全与风险

安全性给 2/5，且这是推荐度的主要扣分项。

正面因素是 Rust OIDC path 使用 PKCE，HTTPS 请求由 `ureq` agent 发出，配置文件中的线路密码不是直接明文保存，协议也有 session id/token 与基本 header 校验 [Local:source][Local:crypto]。但这些因素不足以把它当成熟 VPN：

1. **data-plane 的加密边界不清**：源码对任意非零 `encryption` 都做 XOR payload transformation；CLI 注释把 `2` 描述为 AES，但本轮没有找到对应 AES data-plane 处理 [Local:protocol][Local:crypto]。
2. **自定义密码/协议密码学需要审计**：配置密码的 GCM 解密使用硬编码 app secret 派生 key；data-plane 还暴露 none/XOR 选择和自定义 MD5/XOR 结构。密码“加密存盘”不等于具备 OS keyring 或独立密钥托管 [Local:crypto]。
3. **权限与凭据风险真实存在**：TUN/server 需要 root 或 `CAP_NET_ADMIN`；手工 client 通过命令行接收密码；OIDC 过程处理 access token。应避免在共享 shell、生产账号和高敏感流量上直接试验 [GH:readme][Local:source]。
4. **仓库 helper 有危险示范**：`doc/full_flow.py` 明确关闭 TLS 证书校验并打印 token 片段，不应复制其网络安全做法 [Local:doc-script]。
5. **没有发现 GHSA 不等于安全**：GitHub advisories endpoint 本轮为空，只能说明没有查到已发布的项目级 GHSA；自定义协议、依赖与外部认证服务仍需单独评估 [GH:advisories]。

此外，仓库没有明确软件 license，会同时带来合规与供应链采用风险 [GH:license]。

## 学习价值

学习价值是中高的。它把现实校园网络接入问题压缩成一个相对紧凑的 Rust 工程：可以研究 OIDC PKCE 与 controller 签名、TLV/UDP session 协议、Linux TUN/route 操作、smoltcp 用户态 TCP、SOCKS5 状态机、keepalive 和跨平台 release matrix [GH:ci][Local:source]。

最值得学习的不是照抄它的密码学，而是观察一个专用网络协议客户端如何从“能连通”逐步补齐 keepalive、跨平台构建、DNS 与非交互部署。若用于教学或二次实现，应把 crypto/protocol 做独立 threat-model 与互操作测试，并优先解决 license、mode semantics 和真实链路测试缺口。
