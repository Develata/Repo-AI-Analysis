---

title: "Komari"
created: 2025-04-19
updated: 2026-05-17
type: repository-analysis
repo_url: "https://github.com/komari-monitor/komari"
category: "dev-tools/ops-monitoring/probes"
tags: [go, monitoring, server-monitor, probe, self-hosted, devops, dashboard]
previous_repo: ""
successor: ""
primary_language: "Go"
license: "MIT"
stars: 4658
forks: 438
last_checked: 2026-05-17
last_verified: 2026-05-17
evidence: "GitHub API /repos, /releases, /search/issues, /community/profile, /contents sampling + README/docs/release/issues review + local git clone source tree sampling. Local environment lacks Go toolchain and pygount, so go test and pygount LOC were not independently executed; file counts/rough LOC came from Python line counting."
archived_reason: ""
docker_support: true
gpu_required: false
estimated_cpu: "1 vCPU 足够；多节点监控建议 1-2 vCPU"
estimated_memory: "几十 MB 到数百 MB，取决于节点数、历史记录与数据库"
estimated_storage: "二进制约 32-57MB；运行数据随监控历史增长"
status: active
ratings:
  capability: 4
  usability: 4
  performance: 4
  code_quality: 3
  documentation: 4
  community: 4
  maturity: 3
  extensibility: 4
  security: 3
  recommendation: 3
overall_score: 3.6
sources:
  - "[GH] https://github.com/komari-monitor/komari"
  - "[GH:API] https://api.github.com/repos/komari-monitor/komari"
  - "[GH:README] https://github.com/komari-monitor/komari/blob/main/README.md"
  - "[GH:release] https://github.com/komari-monitor/komari/releases/tag/1.2.0"
  - "[GH:issues] https://github.com/komari-monitor/komari/issues"
  - "[GH:issue-526] https://github.com/komari-monitor/komari/issues/526"
  - "[GH:issue-524] https://github.com/komari-monitor/komari/issues/524"
  - "[GH:issue-523] https://github.com/komari-monitor/komari/issues/523"
  - "[GH:issue-508] https://github.com/komari-monitor/komari/issues/508"
  - "[GH:issue-520] https://github.com/komari-monitor/komari/issues/520"
  - "[GH:source] https://github.com/komari-monitor/komari/tree/main"
  - "[Docs] https://komari-document.pages.dev/"
  - "[Docs:install] https://komari-document.pages.dev/install/quick-start.html"
  - "[Docs:docker] https://komari-document.pages.dev/install/docker.html"
  - "[Docs:API] https://komari-document.pages.dev/dev/api.html"
  - "[Docs:RPC] https://komari-document.pages.dev/dev/rpc.html"
  - "[Docs:Agent] https://komari-document.pages.dev/dev/agent.html"
  - "[Docs:Theme] https://komari-document.pages.dev/dev/theme.html"
  - "[Docs:CommunityAgent] https://komari-document.pages.dev/community/agent.html"
---

# Komari

> 轻量级自托管服务器监控面板 + agent 探针，适合 VPS 小集群的状态展示、流量统计与基础告警。
>
> **状态**: `active` · **总分**: 3.6/5 · **推荐度**: 3/5

## 一句话总结

面向个人 VPS、小型自托管集群和轻量运维场景的服务器探针系统：部署比 Prometheus/Zabbix 简单得多，功能比纯状态页完整，但不应被理解为严肃生产监控体系的替代品。

## 总体评价

Komari 的设计目标很清楚：不是构建一个可观测性平台，而是做一个“够轻、够好看、够容易部署”的服务器监控工具。它用 Go 单体后端承载管理面板、API、WebSocket/RPC、agent 上报和数据库逻辑，提供 Docker、一键脚本和二进制部署；前端主题与 agent 协议也有相对完整的开发文档 [GH:README] [Docs]。

它最适合 Develata 这种多台轻量 VPS 的场景：想看机器在线状态、CPU/内存/磁盘/网络流量、延迟任务、流量账单和基础通知，而不想维护 Prometheus + Grafana + node_exporter 这一整套系统。Komari 的价值是“低仪式感”：快速部署、一个端口、一个 dashboard。

主要扣分点也同样清楚：项目很年轻（2025-04 创建，2026-05 最新 v1.2.0），代码与治理仍由核心维护者强主导；open issues 中能看到 agent IPv6、PVE 网卡流量识别、月流量重置、Windows agent 安装等具体 bug 报告 [GH:issue-526] [GH:issue-524] [GH:issue-523] [GH:issue-508]。同时它暴露 admin API、API Key、OAuth/2FA、远程终端、Cloudflared 集成等能力，便利性与攻击面同步上升。

一句话判词：**Komari 是轻量 VPS 探针里的实用主义选择——用于个人 VPS 状态面板很合适，用它承载严肃 SRE 可观测性则过界。**

## 推荐度：3/5

> 2026-06 推荐度重校准：年轻 ops panel/agent，安全治理缺口，未本地测试；适合观察试点。


**定位**：面向个人开发者、自托管玩家和小规模 VPS 运维者，需要一个低成本、低维护、可视化的服务器探针系统。

推荐的理由是：Komari 的功能边界与这类场景高度契合。Docker 或一键脚本部署、Web dashboard、轻量 agent、API/RPC2、主题开发、社区 agent、1Panel 与云厂商一键部署入口，都说明它具备面向实际部署的基本工程配套 [GH:README] [Docs:install] [Docs:API] [Docs:RPC]。

不把推荐度给到 5，是因为它的成熟度、安全治理和测试证据还不够硬：没有 `SECURITY.md` / `CONTRIBUTING.md` / `CODE_OF_CONDUCT.md`，测试文件只覆盖少数 utils/API 路径，且本地环境没有 Go toolchain，无法独立跑 `go test ./...` 验证。对公网暴露的管理面板与远程终端能力，必须默认保守配置。

## 优势

1. **部署成本低**。README 与官方文档同时提供一键脚本、Docker、二进制、1Panel 等路径，默认端口 `25774`，Docker 命令清晰 [GH:README] [Docs:install] [Docs:docker]
2. **适配轻量 VPS 场景**。项目明确强调 lightweight/self-hosted/web interface；release assets 覆盖 Linux/Windows 的 amd64、arm64、386，Linux 还包含 riscv64 [GH:release]
3. **功能边界比普通状态页宽**。除基础资源监控外，源码结构显示 admin/client/public/terminal/jsonRpc 等模块；文档覆盖 API、RPC2、Agent 上报、主题开发 [GH:source] [Docs:API] [Docs:RPC] [Docs:Agent] [Docs:Theme]
4. **扩展接口实际存在**。主题包规范、Agent 协议、JSON-RPC2 与社区维护 Agent 项目构成了可扩展生态，而不是只给一个封闭 dashboard [Docs:Theme] [Docs:Agent] [Docs:CommunityAgent]
5. **社区增长快**。截至 2026-05-17 GitHub API 显示 4,658 stars、438 forks；open PR 仅 2、closed PR 189，latest release 也列出多位新贡献者，说明项目有持续贡献流入 [GH:API] [GH:release]

## 劣势

1. **项目年轻，稳定性仍需观察**。2025-04 创建，虽已到 v1.2.0，但 open issues 中仍有 agent IPv6、PVE 网卡流量、月流量重置、Windows agent 安装等具体 bug [GH:API] [GH:issue-526] [GH:issue-524] [GH:issue-523] [GH:issue-508]
2. **核心维护者强主导**。contributors 采样显示 Akizon77 贡献 536 次，明显高于后续贡献者；这不是致命问题，但 bus factor 风险需要记入成熟度判断 [GH:API]
3. **安全治理文件缺失**。GitHub community profile 未发现 SECURITY、CONTRIBUTING、CODE_OF_CONDUCT、issue template；对有远程终端能力的系统而言，这是明显短板 [GH:API]
4. **测试覆盖证据有限**。本地源码采样发现 `_test.go` 主要集中在 records/rpc/geoip/oauth/cloudflared/public login/me 等少数模块，未看到覆盖核心全链路的系统测试；本地环境也无法运行 Go 测试 [GH:source]
5. **不是可观测性平台**。它解决“看状态”和“轻量告警”，不解决 Prometheus/Grafana/Loki/Tempo 那类指标、日志、链路追踪、复杂告警规则与长期容量分析。

---

## 适合什么场景

- 个人拥有多台 VPS，需要一个统一面板看在线状态、资源占用与流量
- Homelab / self-hosted 服务，需要比 Uptime Kuma 更偏“主机监控”的工具
- 小团队临时管理边缘节点、低成本服务器、测试机
- 不想维护 Prometheus/Grafana，只想快速获得 dashboard
- 需要自定义主题、接入自定义 agent、或通过 API/RPC2 做轻量集成
- 对数据隐私敏感，希望监控系统自托管

## 不适合什么场景

- 大规模生产 SRE / observability 平台
- 需要复杂 PromQL、长期时序查询、日志检索、链路追踪的场景
- 合规要求严格、必须有正式安全响应流程的企业环境
- 不能接受年轻项目 bug 和升级变动的保守环境
- 需要 HA、分布式存储、多租户权限模型的监控系统
- 对公网暴露管理面板但没有能力做反代、TLS、访问控制和备份的人

## 与类似项目对比

| 项目 | 定位 | 相对本项目 |
|------|------|-----------|
| Uptime Kuma | 服务可用性/状态页监控 | 更成熟，适合 HTTP/TCP uptime；Komari 更偏主机资源与探针面板 |
| Nezha | VPS 探针/服务器监控 | 同类直接竞品；Komari 代码与 UI 较新，并提供 Nezha 兼容入口，但成熟度需要继续观察 |
| Beszel | 轻量服务器监控 | 同属 self-hosted 轻量监控；Komari 的中文社区与主题/agent 文档更突出 |
| Prometheus + Grafana + node_exporter | 标准指标监控栈 | 能力和成熟度远高于 Komari；部署、维护和学习成本也远高于 Komari |
| Zabbix | 企业级监控平台 | 功能完整但重；Komari 是个人/小规模场景的低仪式感替代 |

---

## 它能做什么

Komari 的核心能力可以分成五层：

1. **服务器状态监控**：通过 agent 上报 CPU、内存、磁盘、网络、系统信息等基础指标；文档说明 agent 通过 WebSocket 和 HTTP 与 server 交互 [Docs:Agent]
2. **Web 管理面板**：提供浏览器 dashboard，README 将其作为主要使用入口 [GH:README]
3. **安装与部署**：支持一键脚本、Docker、二进制、1Panel 应用商店等部署方式 [GH:README] [Docs:install] [Docs:docker]
4. **集成与扩展**：提供 REST API、JSON-RPC2、主题开发规范、agent 开发文档 [Docs:API] [Docs:RPC] [Docs:Theme] [Docs:Agent]
5. **运维辅助能力**：源码中存在 OAuth/2FA、通知、Cloudflared、terminal、Nezha compat、ping task 等模块，说明它已从单纯状态面板扩展到轻量运维入口 [GH:source]

评分 4/5。它在“轻量探针”这个定位内功能完整，但不能按企业级监控平台标准给 5。

## 运行环境与资源占用

| 场景 | CPU | 内存 | 存储 | 说明 |
|------|-----|------|------|------|
| 最小 | 1 vCPU | 几十 MB 到数百 MB | 二进制约 32-57MB + SQLite 数据 | 单机/少量节点，Docker 或二进制部署 |
| 推荐 | 1-2 vCPU | 256MB-1GB | 预留数 GB 给数据库与历史记录 | 多 VPS 节点、保留历史数据、启用通知/代理等功能 |

- **运行时**：Go 编译二进制；Docker 镜像基于 Alpine，并包含 ca-certificates、curl、tzdata、cloudflared [GH:source]
- **操作系统**：release assets 覆盖 Linux/Windows amd64、arm64、386；Linux 另有 riscv64 [GH:release]
- **Docker**：支持，官方 README 与 docs 给出 `ghcr.io/komari-monitor/komari:latest` 部署命令 [GH:README] [Docs:docker]
- **GPU**：不需要
- **外部依赖**：默认 SQLite；源码配置支持 MySQL/其他数据库参数；Dockerfile 会拉取 cloudflared 二进制 [GH:source]

评分 4/5。这里评的是**资源效率/运行开销**：相对 Prometheus/Grafana/Zabbix 很轻，但 Go server + Web 面板 + 数据库 + cloudflared 集成不是极限轻量；社区 issue #520 也有人提出 Zig agent 可将 agent 占用降到 Go 版本的十分之一，说明 agent 侧仍有优化空间 [GH:issue-520]。

## 上手体验

评分 4/5。

README 的 quick start 很直接：一键脚本、Docker、二进制三条路径都能在数分钟内启动；文档站还提供快速安装、Docker 教程、1Panel 部署和 FAQ [GH:README] [Docs:install] [Docs:docker]。对 Develata 这种 VPS 集群管理场景，它的上手成本显著低于传统监控栈。

扣 1 分是因为 agent/面板/数据库/反代/安全配置仍然需要一点运维常识；一些文档页虽然内容丰富，但信息量较大，新手仍可能在公网暴露、默认凭据、反代 HTTPS、agent token 等问题上犯错。

## 代码质量

评分 3/5。

正面信号：项目结构清楚，后端按 `api/admin`、`api/client`、`api/public`、`api/terminal`、`cmd`、`database`、`utils`、`ws` 等分层；GitHub Actions 覆盖 main push/PR build、多架构 release、Docker 发布；本地 `git clone` 后用 Python 按扩展名粗略统计，发现 166 个 Go 文件，约 22k 行 Go 文本 [GH:source]。

负面信号：测试文件数量有限，主要覆盖部分 utility、records、RPC、OAuth、Cloudflared 与 public login/me；没有看到足以支撑“高测试覆盖”的证据。本地环境没有 Go toolchain，`go test ./...` 无法运行，因此不能声称测试通过。release workflow 还依赖在 CI 中 clone `komari-web` 并构建前端，这让 server repo 与 frontend repo 之间存在构建耦合 [GH:source]。

所以给 3：可维护，但未达到“架构/测试/CI 都很硬”的 4 或 5。

## 可扩展性

评分 4/5。

Komari 的扩展性强于一般轻量监控工具：

- 主题开发文档定义主题 zip 包结构、`komari-theme.json`、动态配置等 [Docs:Theme]
- Agent 文档说明 WebSocket/HTTP 上报机制、基础信息上传、事件处理 [Docs:Agent]
- API 文档覆盖后台认证、API Key、用户信息等接口 [Docs:API]
- RPC2 文档提供 JSON-RPC2 over WebSocket/POST，并建议新功能优先走 RPC2 [Docs:RPC]
- 社区 agent 页面收录 Rust agent、Android 包装、旧 Windows agent、Mikrotik 接入等项目 [Docs:CommunityAgent]

不给 5 的原因：插件/扩展生态还年轻，更多是协议与主题层面的扩展；核心系统的深度定制仍可能需要读源码或 fork。

## 文档质量

评分 4/5。

文档站是 Komari 的强项。它有 VitePress 风格的信息架构，覆盖安装、Docker、二进制、手动编译、更新、agent 自动发现、API、RPC、Agent 开发、主题开发、FAQ、社区文档等；README 也有英文入口和中繁日多语言 README 链接 [GH:README] [Docs]。

扣分点在于：部分路线对新手仍偏“命令堆叠”，安全部署/生产暴露/备份恢复/升级策略的系统性说明不如企业级项目；GitHub repo 自身只有 docs 下的多语言 README，主要文档实际托管在外部站点。

## 社区与成熟度

这个 H2 按 repo-wiki 模板合并呈现两项指标；评分时二者分开判断：

| 维度 | 评分 | 说明 |
|------|------|------|
| 社区活跃度 | 4/5 | 4,658 stars、438 forks、closed PR 189、open PR 2；latest release 1.2.0 包含多位新贡献者 PR，说明社区活跃，但 closed PR 数不单独等价于高治理质量 [GH:API] [GH:release] |
| 成熟度 | 3/5 | 2025-04 创建，2026-05 已有 v1.2.0 与 47 个 release；但项目年龄短，且 open issues 中仍有 agent/网络/流量 bug，稳定性未到长期验证阶段 [GH:API] [GH:issue-526] [GH:issue-524] [GH:issue-523] |

社区给 4，因为它增长快且已有持续贡献流入；成熟度给 3，因为“活跃迭代”不等于“稳定成熟”。

## 安全与风险

评分 3/5。

安全正面信号：项目提供 OAuth/2FA、API Key 认证、session 管理等功能；API 文档明确后台接口认证方式，RPC2 也区分登录状态与受限方法 [Docs:API] [Docs:RPC]。自托管模式让数据不必交给第三方 SaaS。

主要风险：

1. **攻击面不小**。admin API、remote terminal、任务调度/下发、Cloudflared 集成、agent token、WebSocket/RPC 都需要严肃边界控制 [GH:source]
2. **治理文件缺失**。GitHub community profile 没有 SECURITY.md，公开漏洞报告流程不明确 [GH:API]
3. **默认部署容易公网暴露**。README 主要强调快速部署，生产环境还需用户自行补 TLS、反代、访问控制、备份与最小权限 [GH:README]
4. **依赖面中等**。`go.mod` 包含 Gin、Gorm、SQLite driver、OIDC、goja、gRPC、x/crypto/x/net 等依赖；不是极简二进制 [GH:source]

结论：个人 VPS 使用可接受，但建议至少做到 HTTPS、强密码、关闭不必要远程终端/执行能力、定期升级、备份数据库，并避免把管理面板裸露给全网。

## 学习价值

Komari 的学习价值主要在工程整合，而非某个算法：

- 如何用 Go 单体应用组织监控 server、agent 上报、WebSocket、RPC、数据库与管理 API
- 如何把一个轻量工具做成“可部署产品”：Docker、release assets、1Panel、文档站、主题系统、社区 agent
- 如何在个人运维场景中做取舍：不用追求 Prometheus 级别的完整性，而是用足够小的系统解决足够明确的问题

对 Develata 而言，它可以作为“个人基础设施工具选型”的正例：如果目标是管理 8 台轻量 VPS，Komari 的优点正是小而精；若目标变成正式 observability，则应及时升级到 Prometheus/Grafana 或云监控体系。
