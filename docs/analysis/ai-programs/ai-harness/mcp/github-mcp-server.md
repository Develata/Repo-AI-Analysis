---
title: "GitHub MCP Server"
created: 2026-05-31
updated: 2026-07-21
type: repository-analysis
repo_url: "https://github.com/github/github-mcp-server"
category: "ai-programs/ai-harness/mcp"
tags: ["mcp", "github", "github-api", "coding-agents", "copilot", "tooling", "go", "oauth", "pat", "docker"]
previous_repo: ""
successor: ""
primary_language: "Go"
license: "MIT"
stars: 31580
forks: 4623
last_checked: 2026-07-21
last_verified: 2026-07-21
evidence: "GitHub REST/GraphQL metadata, repository advisory API, official GitHub Docs, release notes, README/docs/go.mod/security review, and local shallow clone scan at commit 1338dbed4a044ee26422d4212bac3a8037fdb7ff. No go test/build, Docker pull/run, remote MCP flow, local OAuth login, or authenticated tool smoke test was executed."
archived_reason: ""
docker_support: true
gpu_required: false
estimated_cpu: "low for local stdio/HTTP server; actual GitHub API latency/rate-limit and agent workflow cost dominate"
estimated_memory: "low to moderate for the server; depends on request volume, tool output size and host/client buffering"
estimated_storage: "small binary/container footprint; logs, downloaded workflow artifacts and client-side transcripts can dominate operational storage"
status: active
ratings:
  capability: 4
  usability: 4
  performance: 3
  code_quality: 4
  documentation: 4
  community: 4
  maturity: 3
  extensibility: 4
  security: 2
  recommendation: 3
overall_score: 3.5
sources:
  - "[GH] https://github.com/github/github-mcp-server"
  - "[GH:api] GitHub REST/GraphQL snapshot 2026-07-21: canonical repo=github/github-mcp-server, archived=false, disabled=false, default_branch=main, head=1338dbed4a044ee26422d4212bac3a8037fdb7ff, pushed_at=2026-07-20T16:24:21Z, stars=31580, forks=4623, open issues=170, open PRs=173, primary_language=Go, license=MIT, security policy present"
  - "[GH:languages] GitHub languages API snapshot 2026-07-21: Go=2934090, TypeScript=148708, Shell=30466, HTML=5621, Dockerfile=2262, JavaScript=400"
  - "[GH:releases] GitHub releases API snapshot 2026-07-21: 71 releases; latest v1.6.0 published 2026-07-15; v1.2.0-v1.6.0 highlights include MCP Apps alignment, local stdio OAuth, issue/PR reactions and selected-tool response-field filtering in Insiders"
  - "[GH:advisories] GitHub repository security-advisories API snapshot 2026-07-21: GHSA-pjp5-fpmr-3349 / CVE-2026-48529 medium, HTTP lockdown singleton cross-user GraphQL client confusion, affected >=0.22.0 <1.1.2, patched 1.1.2; GHSA-w4q6-qw23-4rg7 / CVE-2026-47427 high, nil-pointer DoS in completion/complete handler, published 2026-07-20, API vulnerable range='<=0.33.0 (also affects latest main)', patched_versions empty"
  - "[GH:local-scan] Local shallow clone /opt/data/tmp/github-repo-wiki-freshness-audit/evidence/repos/github-mcp-server at commit 1338dbed4a044ee26422d4212bac3a8037fdb7ff; git ls-files=536, markdown/MDX=45, workflows=13, test-ish paths=87; checked README.md, docs/{installation-guides/README,server-configuration,policies-and-governance,oauth-login}.md, Dockerfile, go.mod, SECURITY.md, CONTRIBUTING.md, CODE_OF_CONDUCT.md and LICENSE; no tests/build executed"
  - "[GH:readme] README.md local scan 2026-07-21: remote GitHub MCP Server at https://api.githubcopilot.com/mcp/ and local server via official GHCR image or binary/source; local github.com stdio path can use browser OAuth without a pre-created PAT; documents PAT precedence, toolsets and host matrix"
  - "[GH:tools] README.md generated tool/toolset section local scan 2026-07-21: toolsets include context, actions, code_security, copilot, dependabot, discussions, gists, git, issues, labels, notifications, orgs, projects, pull_requests, repos, secret_protection, security_advisories, stargazers and users; remote-only additions are separately marked"
  - "[GH:config] docs/server-configuration.md local scan 2026-07-21: remote and local configuration support toolsets, individual tools, exclude-tools, read-only mode, lockdown mode, insiders mode, feature flags and scope filtering; read-only disables write tools even when requested; lockdown hides public-repo content from users without push access"
  - "[GH:go-mod] go.mod local scan 2026-07-21: module github.com/github/github-mcp-server, Go 1.25.0, dependencies include modelcontextprotocol/go-sdk v1.7.0-pre.3, go-github v89, githubv4, chi, cobra/pflag/viper, bluemonday and testify"
  - "[GH:policy] docs/policies-and-governance.md local scan 2026-07-21: explains local/remote modes, PAT/OAuth/GitHub App/SSO, native permissions, HTTPS, rate limits, enterprise policies and standard audit logs; purpose-built MCP connection/tool/action audit views remain on the roadmap"
  - "[GH:oauth] docs/oauth-login.md local scan 2026-07-21: official local stdio binary/image on github.com has a registered OAuth app, keeps token in memory, prefers authorization-code+PKCE, supports URL elicitation/device-code fallback, scope-based tool filtering, and requires loopback-only Docker callback publishing"
  - "[GH:install] docs/installation-guides/README.md local scan 2026-07-21: host matrix covers Copilot/VS Code, Claude, Cline, Cursor, Gemini, OpenCode, Roo Code, Windsurf, Xcode, Zed and others; Docker, binary and source paths are documented"
  - "[GH:security] SECURITY.md local scan 2026-07-21: GitHub asks security reports for GitHub-owned repositories to be sent to opensource-security@github.com rather than public issues"
  - "[Docs:github] https://docs.github.com/en/copilot/how-tos/provide-context/use-mcp/use-the-github-mcp-server extracted 2026-07-21; GitHub Docs describe the GitHub MCP server as provided and maintained by GitHub, available to all GitHub users, with individual tools inheriting access requirements of underlying GitHub/Copilot features"
  - "[L1:mcp-servers] Local wiki comparison source: /opt/data/wiki/github-repo-wiki/ai-programs/ai-harness/mcp/mcp-servers.md"
  - "[L1:context7] Local wiki comparison source: /opt/data/wiki/github-repo-wiki/ai-programs/ai-harness/mcp/context7.md"
  - "[L1:cli-anything] Local wiki comparison source: /opt/data/wiki/github-repo-wiki/ai-programs/agent-infrastructure/cli-anything.md"
  - "[L1:chrome-devtools-mcp] Local wiki comparison source: /opt/data/wiki/github-repo-wiki/ai-programs/ai-harness/mcp/chrome-devtools-mcp.md"
  - "[L1:browser-use] Local wiki comparison source: /opt/data/wiki/github-repo-wiki/ai-programs/agent-infrastructure/browser-use.md"
---

# GitHub MCP Server

> GitHub 官方 MCP server：把 repositories、issues、PRs、Actions、security alerts、projects、notifications 等 GitHub API 能力变成 agent tools；价值极高，但本质是“给 agent 一把 GitHub 令牌”，必须按权限控制面治理。
>
> **状态**: `active` · **总分**: 3.5/5 · **推荐度**: 3/5
> **核验版本**: commit `1338dbed4a044ee26422d4212bac3a8037fdb7ff` / release `v1.6.0`；GitHub / GitHub Docs / local clone 快照 2026-07-21
> **验证边界**: 本轮未运行 `go test`/build，未拉取 Docker image、未配置 PAT/OAuth、未连 remote MCP、未执行真实 GitHub write tool。评分基于文档、源码结构与元数据，非实测生产部署。

## 一句话总结

GitHub MCP Server 是 agent 访问 GitHub 的官方 tool bridge：它覆盖 repo/issue/PR/Actions/security/project 等大量 API，并提供 read-only、toolsets、exclude-tools、lockdown、scope filtering 等治理开关；值得重点收录，但生产使用应默认最小权限、只读优先。

## 总体评价

这个仓库应归入 `ai-programs/ai-harness/mcp`。它不是 coding agent 本体，而是 agent runtime 的 **GitHub control plane connector**：让 Copilot、Claude Code、Cursor、Codex、Gemini CLI、OpenCode 等 MCP hosts 能通过自然语言调用 GitHub 平台能力，从读取仓库文件到创建 issue/PR、查看 Actions、处理 security alerts、管理 projects/notifications/discussions 等 [GH:readme][GH:tools][GH:install]。

它的关键价值不是“又一个 GitHub API wrapper”，而是官方把 GitHub API 的权限、OAuth/PAT/GitHub App、企业 policy、SSO、scope filtering、read-only、lockdown 等治理机制放进 MCP 形态中。GitHub Docs 明确称其由 GitHub provided and maintained，且所有用户可用；具体工具继承底层 GitHub/Copilot feature 的访问要求 [Docs:github]。

工程信号较强：当前扫描有 536 个 tracked files、13 个 workflows、87 个 test-ish paths；README 与 docs 完整，go.mod 使用 MCP Go SDK、go-github 等主流依赖 [GH:local-scan][GH:go-mod]。项目已推进到 v1.6.0，并加入 local stdio OAuth 与 MCP Apps 等能力；同时 MCP-specific audit logging 仍在路线中，且 2026-07-20 新披露的 high advisory 尚无 patched version 元数据 [GH:releases][GH:policy][GH:advisories]。

## 推荐度：3/5

**定位**：面向希望让 coding agents / IDE agents 安全访问 GitHub 上下文和执行 GitHub 操作的开发者、团队、agent-infra 构建者与平台治理者。

推荐度 3/5。它很值得重点跟踪和小范围试点：这是官方 GitHub MCP server，能力覆盖 GitHub agent workflow 的核心 surface；远程/本地两种部署路径、Docker/二进制/源码构建、多 host 安装文档、toolsets/read-only/lockdown/scope filtering 都很完整 [GH:readme][GH:config][GH:install][Docs:github]。

但评分表中的推荐度不按“研究价值”给高分，而按 adoption/use 风险给分。它掌握 GitHub 权限面，误授权或误调用会直接影响 repo、PR、issue、workflow 与 security alerts；MCP-specific audit logging 仍未完成 [GH:policy]。更重要的是，本轮存在一个 2026-07-20 发布、patched version 为空的 high nil-pointer DoS advisory；其 API range 同时写着 `<=0.33.0` 与“also affects latest main”，版本语义存在张力，运维前必须打开 advisory 逐版本核验，不能仅凭 `v1.6.0 > 0.33.0` 推断无影响 [GH:advisories]。生产使用应默认只读、最小 toolsets/授权，并在 advisory 明确修复前避免把不受信输入暴露给 completion endpoint。

## 优势

1. **官方维护与生态入口**：GitHub Docs 称其由 GitHub provided and maintained，并接入 Copilot/IDE 工作流 [Docs:github]。
2. **能力面很全**：toolsets 覆盖 repos、issues、pull_requests、actions、code_security、secret_protection、security_advisories、projects、notifications、orgs、users、dependabot、copilot 等 [GH:tools]。
3. **部署路径完整**：remote server、local Docker image、prebuilt binary/source build、stdio/HTTP、多个 MCP host 安装指南均有说明；official local build 在 github.com 还可直接发起 OAuth，不再强制用户预先准备 PAT [GH:readme][GH:install][GH:oauth]。
4. **治理开关明确**：支持 toolsets、individual tools、exclude tools、read-only、lockdown、insiders、feature flags、scope filtering；read-only 会覆盖显式写工具请求 [GH:config]。
5. **安全/企业文档质量高**：policies-and-governance 文档把 PAT/OAuth/GitHub App/SSO、enterprise policy、audit log、rate limit 和 remote/local 差异都讲清楚 [GH:policy]。

## 劣势

1. **令牌权限面极高**：一旦给了 broad PAT 或过宽 OAuth/GitHub App 权限，agent 能触达大量 GitHub 资源与写操作；prompt 约束不能替代权限最小化。
2. **仍年轻且快速迭代**：仓库创建于 2025-03，至 2026-07 已到 v1.6.0；版本和 MCP spec/tool surface 仍快速演进 [GH:api][GH:releases]。
3. **当前有未闭合的 high advisory**：completion handler nil-pointer DoS 的 API patched_versions 为空，且 affected-version 描述内部需要逐 advisory 解释；这是当前生产采用的硬约束 [GH:advisories]。
4. **审计粒度尚有限**：文档说明当前 MCP traffic 主要表现为标准 GitHub audit/API log，尚无 MCP-specific real-time connection list、tool/dashboard/action-level audit log [GH:policy]。
5. **本轮未实测**：未跑 Go tests/build，也未配置 OAuth/PAT、Docker 或 remote server，因此不能声称实际部署路径已验证。
6. **GitHub API/计划限制仍在**：工具能力继承底层 feature 的权限、license 与 rate limit；部分 Copilot/cloud-agent 工具需要对应付费许可 [Docs:github][GH:policy]。

---

## 适合什么场景

- 让 coding agent 读取 GitHub repo 文件、搜索代码、理解 issues/PRs/Actions 状态。
- 在 IDE/Copilot/Claude/Cursor/Codex/Gemini/OpenCode 等 MCP hosts 中接入 GitHub 上下文 [GH:install]。
- 用 read-only mode 做安全默认配置，让 agent 先观察再由人类确认写操作 [GH:config]。
- 团队治理 MCP access：按 toolsets、exclude-tools、lockdown、PAT/OAuth/GitHub App/SSO 和 org policy 管控 [GH:policy]。
- 学习官方 MCP server 如何组织大规模 SaaS API tool surface、权限过滤和文档生成。

## 不适合什么场景

- 把高权限 classic PAT 直接交给任意 agent，尤其是可自动执行 write tools 的配置。
- 缺少审计/审批的生产写操作，例如自动 merge、改 workflow、创建 release、操作 security alerts。
- 需要完全离线的 GitHub workflow；无论 remote/local server，实际 GitHub API 调用都依赖网络与 GitHub 可用性。
- 需要细粒度 MCP-specific 行为审计的强合规环境；当前文档明确此类审计仍未完成 [GH:policy]。
- 以为 remote server 对 GitHub Enterprise Server 全支持；政策文档说明 remote hosting 当前只支持 GHEC，GHES 需看 local path [GH:policy]。

## 与类似项目对比

| 项目 | 定位 | 相对本项目 |
|------|------|-----------|
| MCP Servers | MCP reference server 集合 | MCP Servers 偏通用样板；GitHub MCP Server 是 GitHub 平台 connector [L1:mcp-servers] |
| Context7 | 文档上下文 grounding layer | Context7 偏库/API 文档；GitHub MCP Server 偏 GitHub 平台资源与操作 [L1:context7] |
| CLI-Anything | agent tool-access harness | CLI-Anything 偏通用 CLI wrapping；GitHub MCP Server 封装 GitHub 权限面 [L1:cli-anything] |
| Chrome DevTools MCP | Chrome/DevTools browser debugging bridge | 前者面向 browser runtime；本项目面向 GitHub control plane [L1:chrome-devtools-mcp] |
| Browser Use | browser automation library/cloud product | Browser Use 偏网页状态；本项目偏 GitHub objects/workflows [L1:browser-use] |

上述项目按 `ai-programs/ai-harness/mcp` 同类或相邻 agent infrastructure 范围做粗略定位级对比，未按同一 10 维度框架深审。比较行只表达功能层位置，不比较未重新审计的质量、速度、安全性或社区规模。

---

## 它能做什么

评分 4/5。

- **GitHub context**：获取当前用户、repo 内容、文件、搜索、提交、分支等上下文 [GH:tools]。
- **Issues / PRs**：读写 issues、pull requests、labels、reviews、comments 等协作对象 [GH:tools]。
- **Actions / CI/CD**：查看 workflows、runs、jobs、logs、artifacts，部分工具可触发 workflow actions [GH:tools]。
- **Security tooling**：code scanning、Dependabot、secret protection、security_advisories 相关工具集 [GH:tools]。
- **Org/team/project/notification**：组织、团队、projects、notifications、discussions、gists、stargazers、users 等 GitHub surface [GH:tools]。
- **Copilot 相关工具**：remote server 还包含 Copilot、Copilot Spaces、GitHub support docs search 等额外 toolsets [GH:tools]。
- **治理配置**：toolsets、individual tools、exclude-tools、read-only、lockdown、scope filtering、feature flags [GH:config]。

能力给 4 是因为它覆盖 GitHub 平台 agent access 的主要面，已经足够全面；但本轮没有实际执行工具调用，也没有验证每个 toolset 在真实 OAuth/PAT/enterprise policy 下的表现。按评分边界，不能只因官方 tool surface 宽就给“覆盖所有预期场景且成熟”的 5。

## 运行环境与资源占用

| 场景 | CPU | 内存 | 存储 | 说明 |
|------|-----|------|------|------|
| Remote MCP | 本地很低 | 本地很低 | 很小 | 通过 `https://api.githubcopilot.com/mcp/` 使用 GitHub hosted service [GH:readme] |
| Local Docker | 低 | 低到中 | 小 | 文档将 Docker image `ghcr.io/github/github-mcp-server` 描述为常见/推荐本地路径，需要 PAT 或相应 auth [GH:readme][GH:install] |
| Local binary/source | 低 | 低到中 | 小 | Go binary / source build；本轮未执行 build [GH:readme][GH:local-scan] |
| 大输出/复杂 agent workflow | 取决于调用量 | 取决于输出与 client | 取决于日志/工件 | Actions logs、artifacts、large repo search、agent transcript 会增加实际资源和 token 成本 |

- **运行时**：Go server；remote HTTP/SSE 或 local stdio/HTTP；Docker / binary / source build 路径 [GH:readme][GH:install][GH:go-mod]。
- **操作系统**：Docker 或 Go binary 理论跨平台；安装指南覆盖多 IDE/host [GH:install]。
- **Docker**：`docker_support: true`，README 和 installation guide 明确记录 `ghcr.io/github/github-mcp-server` 这一官方 image，并把 Docker 描述为常见/推荐的本地方法 [GH:readme][GH:install]。
- **GPU**：不需要 GPU。
- **外部依赖**：GitHub API、GitHub auth/PAT/OAuth/GitHub App/SSO、MCP host、可能的 Copilot license、GitHub rate limits [Docs:github][GH:policy]。

performance 给 3：服务端用 Go，主要是 API bridge，设计上应相对轻；但本轮未 build/run/压测，且大输出和高频 API 调用会受 GitHub rate limit 与 agent transcript 成本影响。按 wiki 评分规则，未实测资源效率时不因架构预期给 4。

## 上手体验

评分 4/5。

上手路径非常清楚：支持 remote GitHub MCP Server、一键/手动 IDE 配置、本地 Docker、prebuilt binary、source build，多 host installation guide 覆盖 Copilot CLI/IDE、Claude、Cursor、Gemini CLI、OpenCode、Windsurf、Zed、Xcode 等 [GH:readme][GH:install]。对已熟悉 MCP 和 GitHub token 的开发者，POC 很快。

扣一分来自权限配置复杂度：生产可用不是“填一个 token”而已，而是要决定 remote/local、OAuth/PAT/GitHub App、toolsets、read-only、exclude-tools、lockdown、SSO、org policy 和 secret storage。易用性很好，但正确安全地用需要治理知识。

## 代码质量

评分 4/5。

正面信号：Go 主体清晰，本地扫描显示 536 个 tracked files、13 个 workflows、87 个 test-ish paths；go.mod 包含 MCP Go SDK、go-github、githubv4、chi、cobra/pflag/viper、bluemonday、testify 等 [GH:local-scan][GH:go-mod]。仓库有 SECURITY、CONTRIBUTING、CODE_OF_CONDUCT 和 MIT license [GH:local-scan][GH:security]。

不给 5 的原因：本轮未运行 Go tests/build；工具面极广，涉及 REST/GraphQL、OAuth/PAT/scope filtering、HTTP middleware、UI capabilities、lockdown、sanitization 等复杂边界。代码质量证据强，但未达到“本轮可验证极佳”的程度。

## 可扩展性

评分 4/5。

它的扩展性主要体现在 configuration surface，而不只是代码插件：toolsets、individual tools、exclude-tools、read-only、lockdown、insiders、feature flags、scope filtering 让同一 server 能按环境裁剪 tool surface [GH:config]。同时支持 remote/local、HTTP/stdio、Docker/binary/source，多 host 安装路径也非常广 [GH:install]。

不给 5 的原因是：这不是一个面向第三方自由扩展 GitHub tool plugin 的成熟平台；本轮也没有验证自定义扩展、enterprise policy、OAuth/PAT scope filtering 在真实环境中的组合行为。因此按“良好且可裁剪”给 4，而非“完善插件系统/高度模块化”的满分。

## 文档质量

评分 4/5。

README 极长但信息完整：remote/local server、PAT handling、Docker/source build、toolsets、tools、OAuth scopes、server configuration、host-specific installation 都有入口 [GH:readme][GH:tools]。`docs/installation-guides/README.md` 给出 host support matrix，`docs/server-configuration.md` 系统解释配置机制，`docs/policies-and-governance.md` 则补足企业治理与安全边界 [GH:install][GH:config][GH:policy]。

文档的强点是把产品、安全和组织治理放在一起讲，而不仅是列命令。不给 5 的原因是：MCP-specific audit logging 等关键治理能力仍在限制说明中，本轮也没有按每个 host 安装路径逐项实测；因此文档质量为“好”，不是“几乎无缺口”。

## 社区与成熟度

| 维度 | 评分 | 说明 |
|------|------|------|
| 社区活跃度 | 4/5 | GitHub 快照显示 31.5k+ stars、4.6k+ forks、170 open issues、173 open PRs；repo 近期 push/release 活跃，且由 GitHub 官方维护 [GH:api][GH:releases][Docs:github] |
| 成熟度 | 3/5 | 仓库创建于 2025-03，当前 v1.6.0；能力面很强，但 MCP/Copilot/remote server/governance surface 仍快速演化，审计缺口与新 advisory 都表明不能按稳定控制面满分处理 [GH:api][GH:releases][GH:policy][GH:advisories] |

community 不给 5 的原因是：高星和官方维护不等于开放社区响应速度满分；open issues/PRs 数量不低，且本轮未审查 issue response latency。

## 安全与风险

评分 2/5。

本轮查到两个 published advisories [GH:advisories]：

- `GHSA-pjp5-fpmr-3349` / `CVE-2026-48529`（medium）：HTTP server 的 lockdown singleton 造成跨用户 GraphQL client confusion；affected `>=0.22.0, <1.1.2`，patched `1.1.2`，属于已修历史漏洞。
- `GHSA-w4q6-qw23-4rg7` / `CVE-2026-47427`（high）：`completion/complete` handler nil-pointer DoS；2026-07-20 发布，API `patched_versions` 为空。其 `vulnerable_version_range` 同时写 `<=0.33.0` 与“also affects latest main”，看起来与当前 v1.6.0 版本线存在语义张力；本文保留 API 原文，不把它改写成“v1.6.0 已确定安全”或“v1.6.0 已确定受影响”。运维者应以 advisory 后续版本说明为准。

安全正面信号很强：

- 支持 read-only mode，且会禁用写工具，即使写工具被显式请求也优先生效 [GH:config]。
- 支持 toolsets、individual tools、exclude-tools，可最小化 tool surface [GH:config]。
- 支持 lockdown mode，限制 public repo 中无 push 权限用户产生的内容进入 server surface [GH:config]。
- 文档明确 local/remote、PAT/OAuth/GitHub App/SSO、GitHub native permission model、rate limiting、audit log 等边界 [GH:policy]。
- 有 SECURITY policy 和 GitHub 官方安全报告路径 [GH:security]。

安全正面信号仍然存在：read-only/toolset/lockdown/scope filtering、local OAuth 的 PKCE/elicitation/device-flow 设计、GitHub 原生授权与 SECURITY policy 都有明确文档 [GH:config][GH:oauth][GH:policy][GH:security]。但 high advisory 尚无修复版本元数据，加上 token/write 权限与 MCP-specific audit logging 缺口，足以把本轮 security 从 3 下调到 2。实际建议：默认 read-only，只开必要 toolsets，采用短期/细粒度授权，为写操作加人工确认；在 advisory 明确修复并完成版本核验前，不把 completion endpoint 暴露给不可信输入。

## 学习价值

学习价值很高。GitHub MCP Server 是研究 official MCP connector、agent permission surface 和 enterprise governance 的重要样本。它把 API wrapper、tool taxonomy、OAuth scopes、read-only、lockdown、scope filtering、remote/local deployment、host support matrix 和 policy docs 组织成一个相对完整的 control-plane tool。

对 Develata 的 wiki 来说，它尤其适合作为“agent tool/server 不只是能力，更是权限边界”的案例。给 agent 工具，实即给 agent 可能性；给 agent token，实即给 agent 权力。权不可以无名，器不可以无制。