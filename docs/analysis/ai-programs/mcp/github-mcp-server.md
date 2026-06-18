---
title: "GitHub MCP Server"
created: 2026-05-31
updated: 2026-05-31
type: repository-analysis
repo_url: "https://github.com/github/github-mcp-server"
category: "ai-programs/mcp"
tags: ["mcp", "github", "github-api", "coding-agents", "copilot", "tooling", "go", "oauth", "pat", "docker"]
previous_repo: ""
successor: ""
primary_language: "Go"
license: "MIT"
stars: 30296
forks: 4287
last_checked: 2026-05-31
last_verified: 2026-05-31
evidence: "GitHub API metadata, repository advisory API, official GitHub Docs extraction, README/docs/go.mod/security/contributing review, and local shallow clone scan at commit b0d9854388d6fb51bde7b67aa4394a5081a96988. Go toolchain was unavailable in this environment, so no go test/build, Docker pull/run, remote MCP OAuth flow, or PAT-backed tool smoke test was executed."
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
  security: 3
  recommendation: 3
overall_score: 3.6
sources:
  - "[GH] https://github.com/github/github-mcp-server"
  - "[GH:api] GitHub repo snapshot 2026-05-31: stars=30296, forks=4287, open issues=154, open PRs=119, created_at=2025-03-04, pushed_at=2026-05-30, primary_language=Go, GitHub API license=null, latest_release=v1.1.2, security_policy_url present"
  - "[GH:languages] GitHub languages API snapshot 2026-05-31: Go=2351239, TypeScript=46781, Shell=30000, Dockerfile=1633, HTML=1338, JavaScript=394"
  - "[GH:releases] GitHub releases API snapshot 2026-05-31: latest sample includes v1.1.2 published 2026-05-29, v1.1.1 published 2026-05-29, v1.1.0 published 2026-05-28; sampled releases were not prereleases"
  - "[GH:advisories] GitHub repository security-advisories API snapshot 2026-05-31: returned 0 advisories"
  - "[GH:local-scan] Local shallow clone /opt/data/tmp/repo-wiki-trending-2026-05-31/batch11/repos/github__github-mcp-server at commit b0d9854388d6fb51bde7b67aa4394a5081a96988; git ls-files=478, markdown=44, workflows=13, test-ish files=71 including 68 *_test.go files; checked README.md, docs/{installation-guides/README,server-configuration,policies-and-governance}.md, Dockerfile, go.mod, SECURITY.md, CONTRIBUTING.md, CODE_OF_CONDUCT.md, LICENSE, .github/dependabot.yml; LICENSE file is MIT License; go test was not run because go command was unavailable"
  - "[GH:readme] README.md local scan 2026-05-31: describes remote GitHub MCP Server at https://api.githubcopilot.com/mcp/ and local server via Docker image ghcr.io/github/github-mcp-server or Go build; lists use cases for repositories, issues/PRs, Actions, code security, discussions, notifications, projects and team collaboration; documents PAT handling and toolset configuration"
  - "[GH:tools] README.md generated tool/toolset section local scan 2026-05-31: toolsets include context, actions, code_security, copilot, dependabot, discussions, gists, git, issues, labels, notifications, orgs, projects, pull_requests, repos, secret_protection, security_advisories, stargazers and users; additional remote toolsets include copilot, copilot_spaces and github_support_docs_search"
  - "[GH:config] docs/server-configuration.md local scan 2026-05-31: remote and local configuration support toolsets, individual tools, exclude-tools, read-only mode, lockdown mode, insiders mode, feature flags and scope filtering; read-only disables write tools even when requested; lockdown hides public-repo content from users without push access"
  - "[GH:go-mod] go.mod local scan 2026-05-31: module github.com/github/github-mcp-server, Go 1.25.0, dependencies include github.com/modelcontextprotocol/go-sdk v1.6.1, go-github v87, githubv4, cobra/pflag/viper, bluemonday and testify"
  - "[GH:policy] docs/policies-and-governance.md local scan 2026-05-31: explains local vs remote modes, PAT/OAuth/GitHub App/SSO controls, GitHub native permission model, HTTPS/SSE, API rate limits, audit-log behavior, enterprise policies, and current limitation that MCP-specific audit logging is not yet available"
  - "[GH:install] docs/installation-guides/README.md local scan 2026-05-31: installation support matrix covers Copilot CLI/IDE, Claude, Cline, Cursor, Gemini CLI, OpenCode, Roo Code, Windsurf, Xcode, Zed and others; Docker is described as the most common/recommended local method; prebuilt binary and source build are alternatives"
  - "[GH:security] SECURITY.md local scan 2026-05-31: GitHub asks security reports for GitHub-owned repositories to be sent to opensource-security@github.com rather than public issues; open-source repos are outside the bug bounty scope but routed to maintainers"
  - "[Docs:github] https://docs.github.com/en/copilot/how-tos/provide-context/use-mcp/use-the-github-mcp-server extracted 2026-05-31; GitHub Docs describe the GitHub MCP server as provided and maintained by GitHub, available to all GitHub users, with individual tools inheriting access requirements of underlying GitHub/Copilot features"
---

# GitHub MCP Server

> GitHub 官方 MCP server：把 repositories、issues、PRs、Actions、security alerts、projects、notifications 等 GitHub API 能力变成 agent tools；价值极高，但本质是“给 agent 一把 GitHub 令牌”，必须按权限控制面治理。
>
> **状态**: `active` · **总分**: 3.6/5 · **推荐度**: 3/5
> **核验版本**: commit `b0d9854388d6fb51bde7b67aa4394a5081a96988`；GitHub / GitHub Docs / local clone 快照 2026-05-31
> **验证边界**: 本轮未运行 `go test`/build，因为环境无 `go`；未拉取 Docker image、未配置 PAT/OAuth、未连 remote MCP、未执行真实 GitHub write tool。评分基于文档、源码结构与元数据，非实测生产部署。

## 一句话总结

GitHub MCP Server 是 agent 访问 GitHub 的官方 tool bridge：它覆盖 repo/issue/PR/Actions/security/project 等大量 API，并提供 read-only、toolsets、exclude-tools、lockdown、scope filtering 等治理开关；值得重点收录，但生产使用应默认最小权限、只读优先。

## 总体评价

这个仓库应归入 `ai-programs/mcp`。它不是 coding agent 本体，而是 agent runtime 的 **GitHub control plane connector**：让 Copilot、Claude Code、Cursor、Codex、Gemini CLI、OpenCode 等 MCP hosts 能通过自然语言调用 GitHub 平台能力，从读取仓库文件到创建 issue/PR、查看 Actions、处理 security alerts、管理 projects/notifications/discussions 等 [GH:readme][GH:tools][GH:install]。

它的关键价值不是“又一个 GitHub API wrapper”，而是官方把 GitHub API 的权限、OAuth/PAT/GitHub App、企业 policy、SSO、scope filtering、read-only、lockdown 等治理机制放进 MCP 形态中。GitHub Docs 明确称其由 GitHub provided and maintained，且所有用户可用；具体工具继承底层 GitHub/Copilot feature 的访问要求 [Docs:github]。

工程信号较强：本地扫描有 478 个 tracked files、13 个 workflows、71 个 test-ish 文件，其中 68 个 `*_test.go`；README 与 docs 很完整，go.mod 使用官方/主流 Go 依赖和 MCP Go SDK [GH:local-scan][GH:go-mod]。不过项目创建于 2025-03，v1.1.2 刚在 2026-05 发布；功能面仍高速扩展，MCP-specific audit logging 仍在路线中而非已完成 [GH:api][GH:releases][GH:policy]。

## 推荐度：3/5

**定位**：面向希望让 coding agents / IDE agents 安全访问 GitHub 上下文和执行 GitHub 操作的开发者、团队、agent-infra 构建者与平台治理者。

推荐度 3/5。它很值得重点跟踪和小范围试点：这是官方 GitHub MCP server，能力覆盖 GitHub agent workflow 的核心 surface；远程/本地两种部署路径、Docker/二进制/源码构建、多 host 安装文档、toolsets/read-only/lockdown/scope filtering 都很完整 [GH:readme][GH:config][GH:install][Docs:github]。

但评分表中的推荐度不按“研究价值”给高分，而按 adoption/use 风险给分。它掌握的是 GitHub 权限面，误授权或误调用会直接影响 repo、PR、issue、workflow、security alerts；项目仍年轻，本轮未实测；MCP-specific audit logging 仍未完成，只能通过标准 GitHub API/audit log 侧面观察 [GH:policy]。生产使用应默认 `read-only`，只启用必要 toolsets，使用 fine-grained PAT 或 OAuth/GitHub App，避免把高权限 classic PAT 暴露给通用 agent，并优先在测试 repo / 低权限 org scope 中验证。

## 优势

1. **官方维护与生态入口**：GitHub Docs 称其由 GitHub provided and maintained，并接入 Copilot/IDE 工作流 [Docs:github]。
2. **能力面很全**：toolsets 覆盖 repos、issues、pull_requests、actions、code_security、secret_protection、security_advisories、projects、notifications、orgs、users、dependabot、copilot 等 [GH:tools]。
3. **部署路径完整**：remote server、local Docker image、prebuilt binary/source build、stdio/HTTP、多个 MCP host 安装指南均有说明 [GH:readme][GH:install]。
4. **治理开关明确**：支持 toolsets、individual tools、exclude tools、read-only、lockdown、insiders、feature flags、scope filtering；read-only 会覆盖显式写工具请求 [GH:config]。
5. **安全/企业文档质量高**：policies-and-governance 文档把 PAT/OAuth/GitHub App/SSO、enterprise policy、audit log、rate limit 和 remote/local 差异都讲清楚 [GH:policy]。

## 劣势

1. **令牌权限面极高**：一旦给了 broad PAT 或过宽 OAuth/GitHub App 权限，agent 能触达大量 GitHub 资源与写操作；prompt 约束不能替代权限最小化。
2. **仍年轻且快速迭代**：仓库创建于 2025-03，v1.1.2 发布于 2026-05；版本稳定年限不足 [GH:api][GH:releases]。
3. **审计粒度尚有限**：文档说明当前 MCP traffic 主要表现为标准 GitHub audit/API log，尚无 MCP-specific real-time connection list、tool/dashboard/action-level audit log [GH:policy]。
4. **本轮未实测**：环境没有 Go，未跑测试；也未配置 PAT/OAuth、Docker 或 remote server，因此不能声称实际部署路径已验证。
5. **GitHub API/计划限制仍在**：工具能力继承底层 feature 的权限、license 与 rate limit；部分 Copilot/cloud-agent 工具需要对应付费许可 [Docs:github][GH:policy]。

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
| MCP Servers | MCP reference server 集合 | MCP Servers 偏通用/样板集合；GitHub MCP Server 是单一 GitHub 平台的官方完整 connector |
| Context7 | 文档上下文 grounding layer | Context7 给 agent 当前库/API 文档；GitHub MCP Server 给 agent GitHub 平台资源与操作能力 |
| CLI-Anything | agent tool-access harness | CLI-Anything 让 agent 包装任意 CLI；GitHub MCP Server 专门封装 GitHub API 权限面 |
| Chrome DevTools MCP | Chrome/DevTools browser debugging bridge | Chrome DevTools MCP 让 agent 看浏览器 runtime；GitHub MCP Server 让 agent 操作 GitHub control plane |
| Browser Use | browser automation library/cloud product | Browser Use 操作网页状态；GitHub MCP Server 操作 GitHub 平台对象和协作流 |

上述项目按 `ai-programs/mcp` 同类或相邻 agent infrastructure 范围做粗略定位级对比，未按同一 10 维度框架深审。比较行只表达功能层位置，不比较未重新审计的质量、速度、安全性或社区规模。

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
| Local binary/source | 低 | 低到中 | 小 | Go binary / source build；本轮未 build，因为环境无 Go [GH:readme][GH:local-scan] |
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

正面信号：Go 主体清晰，本地扫描显示 478 个 tracked files、13 个 workflows、71 个 test-ish 文件，其中 68 个 `*_test.go`；go.mod 依赖较标准，包含 MCP Go SDK、go-github、githubv4、cobra/pflag/viper、bluemonday、testify 等 [GH:local-scan][GH:go-mod]。仓库有 SECURITY、CONTRIBUTING、CODE_OF_CONDUCT、Dependabot 和 MIT license 文件 [GH:local-scan][GH:security]。

不给 5 的原因：本轮无法运行 Go tests/build；工具面极广，涉及 REST/GraphQL、OAuth/PAT/scope filtering、HTTP middleware、UI capabilities、lockdown、sanitization 等复杂边界。代码质量证据强，但未达到“本轮可验证极佳”的程度。

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
| 社区活跃度 | 4/5 | GitHub 快照显示 30k+ stars、4.2k+ forks、154 open issues、119 open PRs；repo 近期 push 和 release 活跃，且由 GitHub 官方维护 [GH:api][GH:releases][Docs:github] |
| 成熟度 | 3/5 | 仓库创建于 2025-03，v1.1.2 发布于 2026-05；能力面很强，但 MCP/Copilot/remote server/governance surface 仍快速演化，MCP-specific audit logging 仍未完成 [GH:api][GH:releases][GH:policy] |

community 不给 5 的原因是：高星和官方维护不等于开放社区响应速度满分；open issues/PRs 数量不低，且本轮未审查 issue response latency。

## 安全与风险

评分 3/5。

本轮 GitHub repository security-advisories API 未发现 advisory；这只说明本次未查到公开 GitHub advisory，不等于独立安全审计 [GH:advisories]。

安全正面信号很强：

- 支持 read-only mode，且会禁用写工具，即使写工具被显式请求也优先生效 [GH:config]。
- 支持 toolsets、individual tools、exclude-tools，可最小化 tool surface [GH:config]。
- 支持 lockdown mode，限制 public repo 中无 push 权限用户产生的内容进入 server surface [GH:config]。
- 文档明确 local/remote、PAT/OAuth/GitHub App/SSO、GitHub native permission model、rate limiting、audit log 等边界 [GH:policy]。
- 有 SECURITY policy 和 GitHub 官方安全报告路径 [GH:security]。

不能给更高：它处理的是 GitHub token 和写操作；PATs 尤其是 classic PAT 可能绕开部分 OAuth/GitHub App 治理；文档也说明 MCP-specific audit logging 尚未完成 [GH:policy]。实际建议：默认 remote/local 都启用 read-only；只开必要 toolsets；用 fine-grained PAT 或 OAuth/GitHub App；为自动写操作增加人工确认和审计。

## 学习价值

学习价值很高。GitHub MCP Server 是研究 official MCP connector、agent permission surface 和 enterprise governance 的重要样本。它把 API wrapper、tool taxonomy、OAuth scopes、read-only、lockdown、scope filtering、remote/local deployment、host support matrix 和 policy docs 组织成一个相对完整的 control-plane tool。

对 Develata 的 wiki 来说，它尤其适合作为“agent tool/server 不只是能力，更是权限边界”的案例。给 agent 工具，实即给 agent 可能性；给 agent token，实即给 agent 权力。权不可以无名，器不可以无制。