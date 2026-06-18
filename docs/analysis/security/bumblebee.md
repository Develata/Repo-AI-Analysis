---
title: "Bumblebee"
created: 2026-05-31
updated: 2026-05-31
type: repository-analysis
repo_url: "https://github.com/perplexityai/bumblebee"
category: "security"
tags: ["security", "supply-chain-security", "endpoint-inventory", "developer-tools", "package-inventory", "go", "read-only-scanner"]
previous_repo: ""
successor: ""
primary_language: "Go"
license: "Apache-2.0"
stars: 3968
forks: 344
last_checked: 2026-05-31
last_verified: 2026-05-31
evidence: "GitHub API + GraphQL metadata + local shallow clone source/docs scan; Go toolchain is not installed in this environment, so go test/selftest were not independently executed."
archived_reason: ""
docker_support: false
gpu_required: false
estimated_cpu: "low; one-shot filesystem inventory scanner, CPU cost mainly depends on scanned roots and lockfile/metadata volume"
estimated_memory: "low; single Go binary with streaming NDJSON output, but not independently benchmarked in this review"
estimated_storage: "small for binary and catalogs; output NDJSON size depends on endpoint package/extension inventory"
status: active
ratings:
  capability: 3
  usability: 3
  performance: 3
  code_quality: 3
  documentation: 4
  community: 3
  maturity: 2
  extensibility: 3
  security: 3
  recommendation: 3
overall_score: 3.0
sources:
  - "[GH] https://github.com/perplexityai/bumblebee"
  - "[GH:api] GitHub API queried 2026-05-31; stars=3968, forks=344, created_at=2026-05-20, pushed_at=2026-05-29, license=Apache-2.0, primary_language=Go, latest_release=v0.1.1 published 2026-05-22, topics include package-inventory/supply-chain-security"
  - "[GH:graphql] GitHub GraphQL queried 2026-05-31; commits on default branch=8, releases=1, tags=1, open issues=10, open PRs=18, vulnerability alerts=0"
  - "[GH:advisories] https://api.github.com/repos/perplexityai/bumblebee/security-advisories queried 2026-05-31; returned []"
  - "[GH:local-scan] Local shallow clone /opt/data/tmp/repo-wiki-trending-2026-05-31/repos/bumblebee at commit 7c93206 dated 2026-05-29; git ls-files=86, Go files=51, test-ish files=26, workflows=2; inspected README.md, docs/, internal/ecosystem/*, internal/output/*, .github/workflows/ci.yml, CONTRIBUTING.md, SECURITY.md"
  - "[GH:readme] README.md in local clone; describes Bumblebee as a read-only macOS/Linux developer endpoint inventory collector for packages, extensions and MCP configs; documents profiles, NDJSON output, exposure catalog format and selftest"
  - "[GH:inventory] docs/inventory-sources.md in local clone; lists per-ecosystem sources and deliberate non-goals including no package-manager execution and no source-file reads"
  - "[GH:transport] docs/transport.md in local clone; documents stdout/file/HTTP sinks, HTTPS requirement for non-loopback by default, env-based bearer/HMAC secrets, no background retry/spool"
  - "[GH:ci] .github/workflows/ci.yml in local clone; tests ubuntu/macos, gofmt, go vet, go test -race, go build, selftest, govulncheck; Actions pinned by SHA"
---

# Bumblebee

> 面向开发者终端的 read-only package / extension / MCP config inventory scanner，用于供应链事件发生后快速回答“哪些机器暴露于这个已知恶意包/扩展/版本”。
>
> **状态**: `active` · **总分**: 3.0/5 · **推荐度**: 3/5
> **核验版本**: GitHub commit `7c93206`；GitHub API / local clone 快照 2026-05-31

## 一句话总结

Bumblebee 是一个很窄但很有价值的安全工具：它不做通用 EDR，也不做 SBOM 生成，而是用只读方式扫描开发者机器上的包管理器元数据、编辑器/浏览器扩展和 MCP 配置，在供应链攻击响应中给出可汇总的 endpoint exposure inventory [GH][GH:readme][GH:inventory]。

## 总体评价

Bumblebee 应归入 `security`，更具体是 **developer endpoint supply-chain exposure scanner**。它回答的问题不是“软件制品里依赖了什么”，也不是“进程实际运行了什么”，而是：当已知某个 npm/PyPI/RubyGem/Homebrew 包、编辑器扩展或 MCP server 配置存在风险时，当前开发者终端磁盘上的 metadata 是否显示暴露迹象 [GH:readme][GH:inventory]。

设计取向清楚：单个 Go binary、零非标准库运行依赖、只读扫描、三类 profile（`baseline` / `project` / `deep`）、NDJSON 输出、exposure catalog 精确匹配、stderr diagnostics、scan summary 完成语义。这些是面向 incident-response collector 的设计信号，但仍需实测和长期维护来验证 [GH:readme][GH:transport]。

但成熟度必须保守。仓库创建于 2026-05-20，默认分支只有 8 个 commit，公开 release 仅 v0.1.1；当前关注度较高，但从现有证据只能确认 stars/forks 的点时数值，不能证明长期采用或社区成熟 [GH:api][GH:graphql]。所以它适合作为高价值观察对象和小规模试点工具，不应直接等同为成熟企业 endpoint security 产品。

## 推荐度：3/5

推荐度 3/5。对 Develata 的 wiki 来说，它值得收录：原因不是功能巨大，而是问题定义精确、工程边界干净，并且切中了 agent/MCP/开发工具供应链这一新风险面。但它仍是 v0.1.1 的新工具，本轮也没有运行测试或 benchmark；因此推荐是“关注与试点”，不是“默认生产采用”。

给 3 的理由：

1. 供应链事件响应场景真实，尤其适合检查 npm/PyPI/Go/Ruby/Composer/Homebrew、编辑器扩展、浏览器扩展和 MCP 配置暴露 [GH:inventory]。
2. read-only + no package-manager execution 的边界有安全价值：它避免在受污染机器上运行 `npm ls`、`pip show` 等可能触发副作用的命令 [GH:readme][GH:inventory]。
3. 输出格式面向汇总系统：NDJSON、稳定 `record_id`、`scan_summary`、HTTP HMAC/gzip 规则都写得比较具体 [GH:transport]。
4. CI 配置信号不错：Ubuntu/macOS、gofmt、go vet、race test、selftest、govulncheck，且 Actions pinned by SHA；注意本轮只审查了 workflow 配置，没有核验实际 CI run 日志 [GH:ci]。

不给 4/5 的理由：项目极新，release/commit/adoption 证据太少；当前 catalog 和 parser 覆盖仍是 v0.1 形态，生产 fleet rollout 需要自建调度、收集、去重、权限与隐私治理。

## 优势

1. **边界清楚**：只读扫描 on-disk metadata，不执行 package managers，不读源码文件；这在受污染或不可信开发环境中尤其重要 [GH:readme][GH:inventory]。
2. **覆盖面贴近现代开发终端**：npm/pnpm/Yarn/Bun、PyPI、Go modules、RubyGems、Composer、Homebrew、VS Code/Cursor/Windsurf/VSCodium 扩展、Chromium/Firefox 扩展、MCP JSON host configs 都进入视野 [GH:inventory]。
3. **输出适合自动化响应**：NDJSON 一行一对象，支持 package/finding/scan_summary，HTTP sink 明确 Content-Type、HMAC、gzip、批次成功/失败语义 [GH:transport]。
4. **工程小而可审**：本地 clone 只有 86 个 tracked files、51 个 Go 文件，核心在 `internal/ecosystem/`、`internal/scanner/`、`internal/output/`，读者可以较快完成代码审计 [GH:local-scan]。
5. **CI 与贡献规范配置比较完整**：CONTRIBUTING 要求 gofmt/go vet/go test -race/selftest；workflow 配置覆盖 ubuntu/macos、race test、selftest 和 govulncheck，但本轮没有核验 CI run 是否实际通过 [GH:ci]。

## 劣势

1. **成熟度低**：2026-05-20 创建，1 个 release，默认分支 8 个 commit；现在更多是 early responder tool，而非长期稳定平台 [GH:api][GH:graphql]。
2. **不是 SBOM / EDR / vuln scanner 替代品**：它根据已知 exposure catalog 做精确匹配，不解决运行时行为、进程注入、网络连接、完整依赖图或漏洞数据库关联。
3. **fleet story 需要自建**：扫描器只负责一次运行并输出；调度、分发、收集、current-state 存储、权限与告警需要外部系统完成 [GH:transport]。
4. **catalog 方法依赖外部情报质量**：若 catalog 漏掉别名、版本范围、恶意扩展 ID 或生态标识，scanner 也只能给出有限结论。
5. **本轮未能跑测试**：当前环境没有 Go toolchain，无法独立执行 `go test ./...` 或 `bumblebee selftest`；只能根据源码与 CI 配置判断 [GH:local-scan][GH:ci]。

---

## 适合什么场景

- 供应链攻击爆发后，安全团队已有 advisory / IOC / package-name+version，需要快速检查开发者机器暴露情况。
- 团队使用大量 JavaScript/Python/Go/Ruby/PHP/Homebrew 工具链，且开发者终端状态无法完全由 CI SBOM 覆盖。
- 想把 MCP server config、编辑器扩展和浏览器扩展纳入 agent-era developer endpoint inventory。
- 需要一个可审计、只读、单 binary 的 collector，由 MDM、launchd、systemd、cron 或远程执行系统调度。
- 学习“安全工具如何明确 non-goals 和 wire contract”。

## 不适合什么场景

- 需要持续驻留监控、进程行为检测、网络检测或 kernel-level telemetry；那是 EDR/agent 的领域。
- 需要完整 SBOM 或依赖漏洞扫描；Bumblebee 不解析完整 artifact provenance，也不内置漏洞数据库。
- 需要开箱即用的企业控制台、fleet management、dashboard 和告警系统。
- 不能接受 v0.1 项目 API/格式变动的保守生产环境。
- Windows-only fleet；README 当前定位为 macOS 和 Linux developer endpoints [GH:readme]。

## 与类似项目对比

| 项目 | 定位 | 相对本项目 |
|------|------|-----------|
| Syft / SBOM tools | 软件制品或文件系统 SBOM 生成 | 更通用、更成熟；Bumblebee 更窄，偏 developer endpoint 暴露检查 |
| OSQuery | 通用 endpoint SQL telemetry | 覆盖远广于 Bumblebee；但需要部署/查询体系，Bumblebee 更轻、更 incident-specific |
| EDR / XDR agent | 运行时行为与威胁检测 | 能看进程/网络/行为；Bumblebee 只读 metadata，不替代 EDR |
| GitHub Dependabot / osv-scanner | 仓库依赖漏洞发现 | 更偏代码库/manifest；Bumblebee 面向终端当前 on-disk state |
| SBOM from CI | 构建产物依赖清单 | 能回答“发布了什么”；Bumblebee 回答“开发者机器现在有什么” |

---

## 它能做什么

能力评分 3/5。这里按“developer endpoint exposure inventory”这一窄定位评分，而不是按完整安全平台评分；即便在这个窄定位内，也只能基于源码/文档判断其核心能力存在，不能把 v0.1 parser 覆盖直接视为成熟能力。

- **三类扫描 profile**：`baseline` 扫全局/user package roots、toolchain、extensions、MCP configs；`project` 扫开发目录；`deep` 扫 operator 指定 root，适合 incident campaign [GH:readme][GH:inventory]。
- **多生态 metadata 解析**：覆盖 npm/pnpm/Yarn/Bun、PyPI、Go modules、RubyGems、Composer、Homebrew、MCP、editor extensions、browser extensions [GH:inventory]。
- **exposure catalog 精确匹配**：输入 catalog 后输出 finding record，可配合 `--findings-only` 只上报命中结果 [GH:readme][GH:transport]。
- **输出与传输**：stdout/file/HTTP(S) POST；HTTP 支持 bearer token、HMAC、gzip，并定义 receiver 行为和 partial acceptance 语义 [GH:transport]。
- **selftest**：二进制内置 fake package fixtures，可做安装后 smoke test [GH:readme]。

不给 4/5 的原因是：它还不能覆盖所有生态、不能做语义化漏洞范围推理、不能替代 fleet receiver，也不能证明运行时 exploit 是否发生。

## 运行环境与资源占用

| 场景 | CPU | 内存 | 存储 | 说明 |
|------|-----|------|------|------|
| 最小 | 低 | 低 | 小 | 单 binary，本地 stdout/file 输出；扫描成本主要来自文件树和 lockfile 数量 |
| 推荐 | 低到中 | 低 | 输出随 endpoint inventory 增长 | 用 MDM/cron/systemd 定期执行，HTTP 发往内部 collector |
| incident deep scan | 中 | 低到中 | NDJSON 可能较大 | `--profile deep --root "$HOME"` 会遍历更广，建议配 `--exposure-catalog` 和 `--findings-only` |

- **运行时**：README 声称 Go 1.25+ 构建且零非标准库运行依赖；本轮未独立构建验证 [GH:readme]。
- **操作系统**：macOS / Linux developer endpoints [GH:readme]。
- **Docker**：未见 Dockerfile；设计上更像 endpoint-native binary，不是容器服务 [GH:local-scan]。
- **GPU**：不需要。
- **外部依赖**：扫描本身不需要网络；HTTP sink 需要内部 collector；exposure catalog 来源需要安全团队维护。

performance 给 3 是基于保守原则：只读、单 binary、无后台常驻、无 package-manager execution 的资源模型看起来很轻，但本轮不能运行 benchmark，也不能验证大规模 fleet 扫描时的延迟、内存峰值和输出体积。

## 上手体验

评分 3/5。

README 的安装和使用路径清楚：`go install ...@v0.1.1`、`go build`、`bumblebee selftest`、`scan --profile baseline/project/deep` 都有示例 [GH:readme]。如果只是本地试跑，成本很低；但本轮环境没有 Go toolchain，未独立验证这些命令。

扣一分在于生产 rollout 不只是安装二进制：你要决定 scan cadence、root policy、catalog 更新、HTTP collector、HMAC/bearer token 管理、current-state promotion 语义、隐私脱敏与 retention。这些系统性工作超出 Bumblebee 本体 [GH:transport]。

## 代码质量

评分 3/5。

本地扫描显示仓库小而结构化：`cmd/bumblebee` 放 CLI/selftest/root/sink，`internal/ecosystem/*` 分生态解析器，`internal/scanner` 管扫描，`internal/output` 管 NDJSON/HTTP sink，`docs/schema/v0.1.0` 给 record schema。86 个 tracked files 中有 51 个 Go 文件、26 个 test-ish 文件 [GH:local-scan]。

CI 配置强于一般新项目：ubuntu/macos matrix、gofmt、go vet、go test -race、go build、selftest、govulncheck；checkout/setup-go action 还 pin 到 SHA。本轮没有核验实际 workflow run，所以这里只把它作为工程治理配置证据 [GH:ci]。

不给 4/5 的原因是：项目太新，提交历史短，未看到长期维护下的复杂兼容性演化；本轮也未能在本机独立跑测试。CI 配置合理只能证明维护者设计了质量门槛，不能替代真实执行结果。

## 可扩展性

评分 3/5。

扩展路径主要是“新增生态 parser”和“新增 exposure catalog”。这种扩展对安全团队足够实用，但不是插件化架构：没有公开 plugin API，也没有动态加载 parser。若要接入新包管理器或新 metadata source，通常需要改 Go 代码并随 binary 发布 [GH:local-scan][GH:inventory]。

catalog 层则相对简单：JSON schema、entries、source、severity 等机制清楚，适合安全团队快速把 advisory 转成扫描输入 [GH:readme][GH:local-scan]。

## 文档质量

评分 4/5。

README 不只是安装说明，还解释了为什么 SBOM/EDR之外需要 endpoint metadata inventory，列出 coverage、profiles、output、exposure catalog、自测和 operator semantics [GH:readme]。`docs/inventory-sources.md` 对每个生态写明读什么、不读什么；`docs/transport.md` 明确 HTTP wire contract、HMAC/gzip、scan_summary completion semantics [GH:inventory][GH:transport]。

扣一分是因为 v0.1 阶段缺少大规模部署 playbook、collector reference implementation、隐私/合规建议、版本兼容策略和真实 incident case study。

## 社区与成熟度

| 维度 | 评分 | 说明 |
|------|------|------|
| 社区活跃度 | 3/5 | stars/forks 的点时数值较高，open issues=10、open PRs=18；但项目仅 8 个 default-branch commits、1 个 release，还不足以证明社区治理成熟或长期采用 [GH:api][GH:graphql] |
| 成熟度 | 2/5 | v0.1.1，2026-05-20 创建；适合试点和观察，不适合无评估直接进入强 SLA 生产环境 [GH:api][GH:graphql] |

## 安全与风险

评分 3/5。

正面安全信号：

- read-only scanner，不执行 package-manager commands，不读源码文件，这显著降低在受污染环境中触发副作用的风险 [GH:readme][GH:inventory]。
- HTTP sink 要求非 loopback 默认 HTTPS；bearer/HMAC secrets 从环境变量读取，不建议 CLI literal；HMAC 签名规则明确 [GH:transport]。
- CI 配置包含 govulncheck，GitHub vulnerability alerts 本轮为 0，repository security advisories API 返回空；这不是第三方审计，也不是实际 CI run 证明 [GH:graphql][GH:advisories][GH:ci]。
- SECURITY.md 存在，说明仓库提供了安全报告入口；本轮未把它视为安全审计证明 [GH:local-scan]。

风险也要明说：

1. 输出本身可能包含 hostname、username、uid、project_path、source_file 等 endpoint metadata；这些是安全资产，也可能是隐私/组织结构信息 [GH:readme]。
2. MCP config 解析要非常谨慎；README 声称不会 emit env 值，但配置文件可能含 credentials，部署前仍需自行审计输出字段 [GH:readme]。
3. HTTP collector 若设计不当，会成为全公司开发者资产清单集中点；应使用 TLS、HMAC、最小权限、retention 和访问审计 [GH:transport]。
4. “未发现 advisory”不是安全证明；项目本身还处于 v0.1，解析器边界和 schema 仍可能变化 [GH:advisories][GH:api]。
5. 扫描器自身也可能成为攻击面：若 binary、release 或内部分发链路被篡改，它天然具备 filesystem reconnaissance 与 HTTP exfiltration 的形态。生产试点应固定版本、校验 checksum/signature、限制 HTTP sink 目标并审计 collector 访问。
6. exposure catalog 也有信任模型：catalog 被投毒会制造假阳性或假阴性，进而误导 incident response。catalog 来源、签名、review 和回滚流程应独立治理。
7. 在员工终端部署 inventory scanner 还涉及隐私/合规：hostname、username、uid、project path、source file 等字段应按最小化原则收集，并明确 retention、跨区域传输与访问控制。

## 学习价值

Bumblebee 的学习价值在于安全工具的“窄而硬”：

- 如何把 incident response 问题定义成可运行的 collector，而不是泛泛喊“做供应链安全”。
- 如何用 read-only/no-exec/no-source-read 的边界降低工具自身风险。
- 如何设计 NDJSON record identity、scan summary、diagnostics 和 HTTP receiver semantics。
- 如何把 MCP config、editor extension、browser extension 纳入 agent-era supply-chain inventory。

对 Develata 而言，它是一个有参考价值的工程样本：边界明确、输出契约清楚、适合作为 incident-response collector 设计参考。