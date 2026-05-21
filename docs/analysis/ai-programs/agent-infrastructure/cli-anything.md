---


title: "CLI-Anything"
created: 2026-05-20
updated: 2026-05-21
type: repository-analysis
repo_url: "https://github.com/HKUDS/CLI-Anything"
category: "ai-programs/agent-infrastructure"
tags: ["agent-native", "cli", "tooling", "mcp", "skills", "python", "cli-hub", "automation"]
previous_repo: ""
successor: ""
primary_language: "Python"
license: "Apache-2.0"
stars: 37720
forks: 3615
last_checked: 2026-05-20
last_verified: 2026-05-20
evidence: "GitHub API + official CLI-Hub/docs + repository local scan + PyPI metadata; not deployed in production by Develata"
archived_reason: ""
docker_support: false
gpu_required: false
estimated_cpu: "low for CLI-Hub/metadata operations; per-harness cost depends on target software such as Blender, GIMP, LibreOffice, ffmpeg, games, APIs"
estimated_memory: "low for hub/package manager; target software dominates runtime memory"
estimated_storage: "small for CLI-Hub package itself; installed harnesses and target applications can range from MBs to many GBs"
status: active
sharing_candidate: true
ratings:
  capability: 4
  usability: 4
  performance: 4
  code_quality: 3
  documentation: 4
  community: 4
  maturity: 1
  extensibility: 5
  security: 3
  recommendation: 4
overall_score: 3.6
sources:
  - "[GH] https://github.com/HKUDS/CLI-Anything"
  - "[GH:api] https://api.github.com/repos/HKUDS/CLI-Anything queried 2026-05-20; stars=37720, forks=3615, open_issues_count=67, created_at=2026-03-08, pushed_at=2026-05-18, license=Apache-2.0"
  - "[GH:languages] https://api.github.com/repos/HKUDS/CLI-Anything/languages queried 2026-05-20; Python dominant"
  - "[GH:releases] https://api.github.com/repos/HKUDS/CLI-Anything/releases?per_page=1 queried 2026-05-20; latest=v0.3.0 published 2026-04-24"
  - "[GH:community] https://api.github.com/repos/HKUDS/CLI-Anything/community/profile queried 2026-05-20; health_percentage=75; README, CONTRIBUTING, PR template, license present"
  - "[GH:advisories] https://api.github.com/repos/HKUDS/CLI-Anything/security-advisories?per_page=5 queried 2026-05-20; returned []"
  - "[GH:issues] https://api.github.com/search/issues?q=repo%3AHKUDS%2FCLI-Anything%20type%3Aissue%20state%3Aopen queried 2026-05-20; total_count=40"
  - "[GH:prs] https://api.github.com/search/issues?q=repo%3AHKUDS%2FCLI-Anything%20type%3Apr%20state%3Aopen queried 2026-05-20; total_count=27"
  - "[GH:merged-recent] https://api.github.com/search/issues?q=repo%3AHKUDS%2FCLI-Anything%20type%3Apr%20state%3Aclosed%20merged%3A%3E%3D2026-05-01 queried 2026-05-20; total_count=16"
  - "[GH:contributors] https://api.github.com/repos/HKUDS/CLI-Anything/contributors?per_page=1&anon=false queried 2026-05-20; pagination last page 75"
  - "[GH:local-scan] local clone /tmp/repo-wiki-analysis/CLI-Anything at commit a32f11fc67052ff233dfaa5106de5bb1ccdf24ec; git ls-files=1494, Python files=1036, markdown files=345, test/spec-ish files=242, workflows=5; checked README, CONTRIBUTING, SECURITY.md"
  - "[Docs] https://clianything.cc/"
  - "[Docs:github-pages] https://hkuds.github.io/CLI-Anything/"
  - "[Docs:harness] https://github.com/HKUDS/CLI-Anything/blob/main/cli-anything-plugin/HARNESS.md"
  - "[Docs:quickstart] https://github.com/HKUDS/CLI-Anything/blob/main/cli-anything-plugin/QUICKSTART.md"
  - "[Docs:publishing] https://github.com/HKUDS/CLI-Anything/blob/main/cli-anything-plugin/PUBLISHING.md"
  - "[PyPI:cli-anything-hub] https://pypi.org/pypi/cli-anything-hub/json queried 2026-05-20; latest=0.3.0, versions=6, summary=Package manager for CLI-Anything — browse, install, and manage 40+ agent-native CLI interfaces for GUI applications"
---

# CLI-Anything

> 把任意现有软件包装成 agent-native CLI 的方法论、harness collection 与 CLI-Hub registry：让 agent 通过结构化命令而不是脆弱 GUI/RPA 去操作真实软件。
>
> **状态**: `active` · **总分**: 3.6/5 · **推荐度**: 4/5
> **核验版本**: GitHub commit `a32f11fc67052ff233dfaa5106de5bb1ccdf24ec`；GitHub API / CLI-Hub / PyPI 快照 2026-05-20

## 一句话总结

CLI-Anything 是典型的 agent infrastructure：它解决“agent 如何可靠调用现有软件”这一 tool access layer 问题，方向非常重要，但项目只有两个多月历史，成熟度必须保守看待。

## 总体评价

Develata 的判断是对的：CLI-Anything 应归入 `ai-programs/agent-infrastructure`，而不是普通 dev-tools。它的核心对象不是人类 CLI 用户，而是 agent 与软件之间的接口层：把 GUI app、API、creative suite、developer tool、scientific tool、甚至 game 包装成具有 subcommand、REPL、JSON output、persistent state、undo/redo、SKILL.md 与安装发布流程的 agent-native command surface [GH][Docs]。

它的抽象很有价值：今天的软件默认服务人类，明天的部分用户会是 agents。若 agent 只能靠 screenshot/click/RPA，它对真实软件的操作会脆弱、不可组合、难测试；CLI-Anything 试图把这种 interface debt 压成可生成、可贡献、可注册、可安装的 CLI harness ecosystem [GH][Docs]。

但高概念不等于稳态。GitHub API 显示仓库创建于 2026-03-08，latest release 为 v0.3.0；这是典型 early-stage infrastructure，maturity 只能给 1 [GH:api][GH:releases]。它值得放进观察与分享清单，适合试验和贡献 harness；不应被当成已稳定覆盖“所有软件”的通用层。

## 推荐度：4/5

对目标用户——关注 agent tooling、愿意为真实软件写/审 CLI harness、希望让 Claude Code / Codex / OpenClaw / Nanobot 等 agent 可发现并安装工具的开发者——推荐度是 4/5，但这是 **experiment / contribution / watchlist recommendation**，不是生产采用推荐。

给 4 的理由：它在 agent infrastructure 板块中的概念位置非常准，扩展性和生态叙事强，CLI-Hub 已提供安装、搜索、管理与 agent SKILL 入口 [Docs][PyPI:cli-anything-hub]。不给 5 的理由同样明确：v0.3.0、建仓仅两个月、harness 质量必然不均匀，且“任意软件”带来的 security surface 很宽。

## 优势

1. **抽象层次正确**：不是给某个软件补 CLI，而是把“生成 agent-native CLI harness”做成方法论与 registry [GH][Docs]。
2. **agent-oriented design 清晰**：JSON 输出、subcommand、REPL、persistent state、undo/redo、SKILL.md、CLI-Hub 一键安装，都是 agent 可用性的关键元素 [GH][Docs]。
3. **扩展性极强**：项目欢迎 desktop apps、dev tools、cloud services、SaaS APIs、creative suites 等任意应用贡献 harness；CLI-Hub 作为 marketplace/registry 组织安装与发现 [Docs]。
4. **社区增长快**：GitHub API 快照显示 37.7k stars、3.6k forks、约 75 contributor pages，近期 merged PR 仍然活跃 [GH:api][GH:contributors][GH:merged-recent]。
5. **安全意识已有文档化**：SECURITY.md 明确 threat model：AI agent 可自主构造命令，因此 subprocess arguments、Script-Fu、XML/SVG、path traversal、credential exposure 都要处理 [GH:local-scan]。

## 劣势

1. **成熟度很低**：2026-03 建仓，latest release v0.3.0；API、目录结构、hub 协议、harness 规范都有继续变化的可能 [GH:api][GH:releases]。
2. **质量分布天然不均**：每个 harness 都接不同软件后端，可靠性取决于具体 adapter、target app、版本与平台，而不是 hub 本身能完全保证。
3. **安全面很宽**：agent 可以构造命令，harness 会调用 subprocess、脚本引擎、文件系统、GUI/creative tool 或 API；SECURITY.md 已识别这些风险，但实际执行质量需要逐个 harness 审查 [GH:local-scan]。
4. **性能评估需分层**：hub/package manager 自身轻，但 Blender/GIMP/LibreOffice/ffmpeg/game 等 target software 的资源占用可能很重；不能用统一资源模型描述全体 harness。
5. **营销口号强于稳定承诺**：“Making ALL Software Agent-Native”是方向性宣言，不应被解读为当前已经可靠覆盖所有软件。

---

## 适合什么场景

- agent infrastructure 研究：如何把传统软件变成可发现、可调用、可测试的 agent tool。
- 为特定软件贡献 CLI harness，尤其是 GUI/creative/scientific/dev tools。
- 给 Claude Code、Codex、OpenClaw、Nanobot 等 agent 安装可组合工具集 [Docs]。
- 需要 registry/package-manager 风格发现 agent-native CLIs 的个人实验。
- 分析“CLI as universal interface for agents”的工程方法论。

## 不适合什么场景

- 要求 enterprise-stable、长期兼容、统一质量保证的生产平台。
- 对每个 harness 的安全边界没有审查能力，却打算让 agent 自动操作敏感文件/API 的环境。
- 只需要某个单一工具的稳定 CLI，不需要 agent registry 或自动发现层。
- 不能接受 target software 安装、版本兼容和平台差异的人。
- 认为 GUI 自动化已经足够，不愿为结构化 CLI interface 投资的场景。

## 与类似项目对比

| 项目 | 定位 | 相对本项目 |
|------|------|-----------|
| cal.diy | scheduling / booking infrastructure | cal.diy 提供时间协调 primitive；CLI-Anything 提供软件操作 primitive |
| CodeGraph | 本地代码知识图谱 / context infrastructure | CodeGraph 优化 agent 理解代码；CLI-Anything 扩展 agent 可操作的软件边界 |
| RTK | agent shell 输出 token 压缩代理 | RTK 处理已有 CLI 输出效率；CLI-Anything 让更多软件先拥有 agent-friendly CLI |
| oh-my-openagent | coding-agent orchestration harness | oh-my-openagent 组织多 agent workflow；CLI-Anything 提供可被这些 agent 调用的工具生态 |

上述项目按 `ai-programs/agent-infrastructure` 同类范围做定位级对比，未按同一 10 维度框架深审。

## 个人主页 sharing 候选

是。它非常适合做一篇“Agent-native software interface”的 sharing：为什么 CLI 比 GUI/RPA 更适合作为 agent 操作层，为什么 JSON output、state、undo/redo、SKILL.md 和 registry 会成为 agent infrastructure 的基本构件。

---

## 它能做什么

capability 评分 4/5。

CLI-Anything 覆盖的是横向能力，而非单一应用能力：

- 分析目标软件并生成 Python/Click CLI harness [GH]；
- 支持 subcommand mode、stateful REPL、JSON output、人类可读输出、persistent state、undo/redo、安装包与 SKILL.md [GH]；
- CLI-Hub 提供 `cli-hub list/search/install/info/update/uninstall` 等 package-manager 操作 [Docs][PyPI:cli-anything-hub]；
- agent 侧可以通过 SKILL 发现并安装合适 CLI，然后完成任务 [Docs]；
- 贡献流程覆盖 HARNESS、QUICKSTART、PUBLISHING 与 PR template [Docs:harness][Docs:quickstart][Docs:publishing]。

这里的 4 是“能力广度与抽象目标很强”评分；不给 5，是因为“包装任何软件”目前更多是 methodology / extensibility，而不是每一类软件都已经有稳定、等质量、生产可用的 harness。

## 运行环境与资源占用

| 场景 | CPU | 内存 | 存储 | 说明 |
|------|-----|------|------|------|
| CLI-Hub / registry | 低 | 低 | 小 | package manager、metadata、安装管理本身较轻 [PyPI:cli-anything-hub] |
| 具体 harness | 取决于 target app | 取决于 target app | 从 MB 到 GB | GIMP、Blender、LibreOffice、ffmpeg、games、cloud APIs 的成本完全不同 |

- **运行时**：Python 为主；仓库 local scan 显示 Python files 1036，另有少量 C#/Shell/JS/TS/Swift [GH:languages][GH:local-scan]。
- **操作系统**：取决于 harness 与 target software；CLI-Hub 本身更轻，GUI/desktop apps 受平台限制。
- **Docker**：未按 server app 方式提供统一 Docker；项目形态是 CLI/harness registry。
- **GPU**：hub 不需要；个别图形/AI/video harness 可能由目标软件决定。
- **外部依赖**：目标软件本身、Python 包、系统 CLI、API credentials 等。

performance 评分 4/5。作为接口层，它避免 GUI automation 的高成本与脆弱性；但整体资源效率必须按具体 harness 评估，不能给绝对 5。

## 上手体验

评分 4/5。

CLI-Hub 对用户侧路径很清楚：`pip install cli-anything-hub` 后可 list/search/install/info/update/uninstall；agent 侧则通过 SKILL 让 agent 自主发现与安装 [Docs][PyPI:cli-anything-hub]。这比“让 agent 看 README 自己猜命令”强很多。

扣分原因：贡献新 harness 的成本仍然不低；用户需要理解目标软件安装、CLI harness 的能力边界、JSON 输出语义、状态文件与潜在权限风险。早期项目也意味着文档与命令行为可能继续变化。

## 代码质量

评分 3/5。

正面：local scan 显示 1494 tracked files、1036 个 Python 文件、242 个 test/spec-ish 文件、5 个 workflows；SECURITY.md、CONTRIBUTING.md、PR template、release/publish 相关文档齐备 [GH:local-scan][GH:community]。项目不是单 README 概念 repo。

不给 4 的原因：harness collection 的代码质量天然异质；不同贡献者为不同软件写 adapter，测试深度、错误处理、跨平台处理、安全验证很难完全一致。仓库建成时间很短，本次也未运行全量测试，所以 code_quality 只能保守给 3。

## 可扩展性

评分 5/5。

可扩展性是项目核心：任何软件、代码库或 Web API 都可以被包装成 agent-native CLI；CLI-Hub 提供 registry；HARNESS/QUICKSTART/PUBLISHING 指导贡献；SECURITY.md 也为 harness developer 提供安全规则 [Docs][Docs:harness][Docs:quickstart][Docs:publishing][GH:local-scan]。

这类系统的上限不在单个 repo 功能，而在生态供给。只要规范稳定，它天然适合扩展。

## 文档质量

评分 4/5。

README / GitHub Pages / CLI-Hub 对愿景、quickstart、CLI-Hub、agent SKILL、贡献入口解释较完整 [GH][Docs][Docs:github-pages]。HARNESS、QUICKSTART、PUBLISHING 等文档说明它不只是展示页面，而有面向贡献者的流程文档 [Docs:harness][Docs:quickstart][Docs:publishing]。

扣分点：文档带有强营销叙事，且早期项目在规范稳定性与逐 harness 质量说明上仍需更细的成熟案例、兼容矩阵和安全审计说明。

## 社区与成熟度

| 维度 | 评分 | 说明 |
|------|------|------|
| 社区活跃度 | 4/5 | 37.7k stars、3.6k forks、约 75 contributor pages，open issues/PRs 还处于可管理范围，近期有 merged PR [GH:api][GH:contributors][GH:issues][GH:prs][GH:merged-recent]。 |
| 成熟度 | 1/5 | 2026-03-08 建仓，latest release v0.3.0；按评分边界属于预发布/alpha 级别，不能因为 star 增长快而提高成熟度 [GH:api][GH:releases]。 |

## 安全与风险

评分 3/5。

正面：SECURITY.md 明确 threat model，并给出 subprocess argument allowlist、Script-Fu escape、XML/SVG escaping、path normalization、credential file permission、never `shell=True` 等原则 [GH:local-scan]。GitHub Security Advisories 查询未发现已发布 advisory；这只能说明本次未检出公开 advisory，不能证明生态安全 [GH:advisories]。

风险：项目的本质就是让 agent 调用真实软件；如果 harness 参数验证不严，prompt injection 可以转化为 shell/subprocess/file/API 级风险。由于 harness 众多且异质，安全性必须逐个 harness 审查，不能从 hub 文档自动推出全生态安全。

## 学习价值

CLI-Anything 很值得研究：

- 它把“agent tool interface”问题从单个 MCP server 扩展到任意软件生态。
- 它提供了 CLI、JSON、state、undo/redo、SKILL.md、registry 的组合范式。
- 它提醒我们：Agent infrastructure 不只有 memory/context/scheduler，也包括“现有软件如何变成 agent-operable”。
- 它也是早期高热项目的治理样本：概念正确，但质量、规范、安全和兼容性要靠时间检验。