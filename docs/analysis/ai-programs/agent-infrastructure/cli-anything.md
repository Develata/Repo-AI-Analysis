---


title: "CLI-Anything"
created: 2026-05-20
updated: 2026-07-14
type: repository-analysis
repo_url: "https://github.com/HKUDS/CLI-Anything"
category: "ai-programs/agent-infrastructure"
tags: ["agent-native", "cli", "tooling", "mcp", "skills", "python", "cli-hub", "automation", "matrix"]
previous_repo: ""
successor: ""
primary_language: "Python"
license: "Apache-2.0"
stars: 45261
forks: 4229
last_checked: 2026-07-14
last_verified: 2026-07-14
evidence: "GitHub API + official CLI-Hub/docs + release review + repository local scan + PyPI metadata; not deployed in production by Develata"
archived_reason: ""
docker_support: false
gpu_required: false
estimated_cpu: "low for CLI-Hub/metadata operations; per-harness cost depends on target software such as Blender, GIMP, LibreOffice, ffmpeg, GIS, games, APIs"
estimated_memory: "low for hub/package manager; target software dominates runtime memory"
estimated_storage: "small for CLI-Hub package itself; installed harnesses and target applications can range from MBs to many GBs"
status: active
ratings:
  capability: 4
  usability: 4
  performance: 4
  code_quality: 3
  documentation: 4
  community: 4
  maturity: 1
  extensibility: 5
  security: 2
  recommendation: 3
overall_score: 3.4
sources:
  - "[GH] https://github.com/HKUDS/CLI-Anything — GitHub GraphQL/REST checked 2026-07-14: created_at=2026-03-08T13:52:57Z, archived=false, disabled=false, default_branch=main, pushed_at=2026-07-09T13:06:01Z, latest commit=bc536c9bebb7c3d9f7bb2736a732609139c1acdb, stars=45261, forks=4229, REST open_issues_count=71, GraphQL open issues=43, open PRs=28, releases=3, latest release=v0.4.0 published 2026-06-25, contributors≈108, primary language=Python, license=Apache-2.0"
  - "[GH:release] https://github.com/HKUDS/CLI-Anything/releases/tag/v0.4.0 — checked 2026-07-14: release highlights include CLI-Matrix / cli-hub matrix command family, cli-anything-hub 0.4.0 PyPI release, 30 new CLIs, 17 bug fixes, 4 security hardenings, German README, expanded troubleshooting, Hermes and Reasonix agent-skill adapters, and 42 new contributors"
  - "[GH:languages] https://api.github.com/repos/HKUDS/CLI-Anything/languages queried 2026-07-14: Python=10947054, C#=177101, Shell=48296, JavaScript=39992, TypeScript=16641, Swift=12212, PowerShell=4677"
  - "[GH:community] https://api.github.com/repos/HKUDS/CLI-Anything/community/profile queried 2026-07-14: health_percentage=75; README, CONTRIBUTING, PR template and license detected; CODE_OF_CONDUCT not detected"
  - "[GH:advisories] https://api.github.com/repos/HKUDS/CLI-Anything/security-advisories?per_page=100 queried 2026-07-14: returned []"
  - "[GH:merged-recent] https://api.github.com/search/issues?q=repo%3AHKUDS%2FCLI-Anything%20type%3Apr%20state%3Aclosed%20merged%3A%3E%3D2026-05-01 queried 2026-05-20; total_count=16; 2026-07 release notes additionally list v0.4.0 PRs and 42 new contributors"
  - "[GH:local-scan] /opt/data/tmp/repo-wiki-freshness-2026-07-14-clones/CLI-Anything at bc536c9bebb7c3d9f7bb2736a732609139c1acdb, cloned 2026-07-14: git ls-files=1839, Python files=1263, markdown files=434, test/spec-ish matches=301, workflows=6; SECURITY.md and CONTRIBUTING.md present"
  - "[GH:matrix] Local files inspected 2026-07-14: .github/scripts/generate_meta_skill.py documents cli-hub matrix list/info/preflight/install examples and generated Curated Matrices table; cli-hub/setup.py vendors cli-hub-matrix content into sdists; cli-hub/README says browse/install/manage 40+ CLI harnesses"
  - "[Docs] https://clianything.cc/ — extracted 2026-07-14: homepage describes agent-native CLI registry, pip install cli-anything-hub, cli-hub list/search/install/info/update/uninstall, Agent SKILL, works with OpenClaw/Nanobot/Claude Code/Codex/Antigravity, matrices as capability bundles"
  - "[Docs:github-pages] https://hkuds.github.io/CLI-Anything/"
  - "[Docs:harness] https://github.com/HKUDS/CLI-Anything/blob/main/cli-anything-plugin/HARNESS.md"
  - "[Docs:quickstart] https://github.com/HKUDS/CLI-Anything/blob/main/cli-anything-plugin/QUICKSTART.md"
  - "[Docs:publishing] https://github.com/HKUDS/CLI-Anything/blob/main/cli-anything-plugin/PUBLISHING.md"
  - "[PyPI:cli-anything-hub] https://pypi.org/pypi/cli-anything-hub/json queried via Python stdlib urllib 2026-07-14: latest=0.4.1, requires_python=>=3.10, summary=Package manager for CLI-Anything — browse, install, and manage 40+ agent-native CLI interfaces for GUI applications"
---

# CLI-Anything

> 把任意现有软件包装成 agent-native CLI 的方法论、harness collection、CLI-Hub registry 与 CLI-Matrix：让 agent 通过结构化命令而不是脆弱 GUI/RPA 去操作真实软件。
>
> **状态**: `active` · **总分**: 3.4/5 · **推荐度**: 3/5
> **核验版本**: GitHub commit `bc536c9bebb7c3d9f7bb2736a732609139c1acdb`；GitHub API / CLI-Hub / PyPI / local scan 快照 2026-07-14

## 一句话总结

CLI-Anything 是典型的 agent infrastructure：它解决“agent 如何可靠调用现有软件”这一 tool access layer 问题，方向非常重要；GitHub release 线最新为 v0.4.0，PyPI `cli-anything-hub` 包已到 0.4.1，但项目仍只有数月历史，成熟度必须保守看待 [GH][PyPI:cli-anything-hub]。

## 总体评价

Develata 的判断是对的：CLI-Anything 应归入 `ai-programs/agent-infrastructure`，而不是普通 dev-tools。它的核心对象不是人类 CLI 用户，而是 agent 与软件之间的接口层：把 GUI app、API、creative suite、developer tool、scientific tool、甚至 game 包装成具有 subcommand、REPL、JSON output、persistent state、undo/redo、SKILL.md 与安装发布流程的 agent-native command surface [GH][Docs]。

它的抽象很有价值：今天的软件默认服务人类，明天的部分用户会是 agents。若 agent 只能靠 screenshot/click/RPA，它对真实软件的操作会脆弱、不可组合、难测试；CLI-Anything 试图把这种 interface debt 压成可生成、可贡献、可注册、可安装的 CLI harness ecosystem [GH][Docs]。

2026-07 核验显示，项目已经从 v0.3.0 推进到 v0.4.0，并加入 CLI-Matrix：`cli-hub matrix list/search/info/doctor/preflight/install` 这类命令把多个 CLI harness 组合成面向任务的 capability bundle [GH:release] [GH:matrix]。这让它从“单个 harness marketplace”向“agent 工具组合规划”前进一步。

但高概念不等于稳态。GitHub API 显示仓库创建于 2026-03-08，latest release 为 v0.4.0；这是典型 early-stage infrastructure，maturity 只能给 1 [GH] [GH:release]。它值得放进观察与分享清单，适合试验和贡献 harness；不应被当成已稳定覆盖“所有软件”的通用层。

## 推荐度：3/5

> 2026-07 freshness update：v0.4.0 增加 CLI-Matrix、30 个新 CLI、Hermes/Reasonix adapters 与若干安全 hardening；但 maturity=1、harness 质量异质、任意软件操作面宽，仍只能建议研究/谨慎试点。

**角色定位**：推荐给关注 agent tooling、愿意为真实软件写/审 CLI harness、希望让 Claude Code / Codex / OpenClaw / Nanobot / Hermes 等 agent 可发现并安装工具的开发者。

加分理由：它在 agent infrastructure 板块中的概念位置非常准，扩展性和生态叙事强，CLI-Hub 已提供安装、搜索、管理、agent SKILL 与 matrix 入口 [Docs][GH:matrix][PyPI:cli-anything-hub]。维持 3 而非 4 的理由同样明确：v0.4.0、建仓仅数月、harness 质量必然不均匀，且“任意软件”带来的 security surface 很宽。

## 优势

1. **抽象层次正确**：不是给某个软件补 CLI，而是把“生成 agent-native CLI harness”做成方法论、registry 与 matrix 组合层 [GH][Docs][GH:matrix]。
2. **agent-oriented design 清晰**：JSON 输出、subcommand、REPL、persistent state、undo/redo、SKILL.md、CLI-Hub 一键安装，都是 agent 可用性的关键元素 [GH][Docs]。
3. **CLI-Matrix 提升组合能力**：matrix 将多 CLI workflow 打包成 capability-driven install，支持 list/info/preflight/install 等动作 [GH:release][GH:matrix]。
4. **扩展性极强**：项目欢迎 desktop apps、dev tools、cloud services、SaaS APIs、creative suites 等任意应用贡献 harness；CLI-Hub 作为 marketplace/registry 组织安装与发现 [Docs]。
5. **社区增长快**：GitHub API 快照显示 45.3k stars、4.2k forks、约 108 contributors；v0.4.0 release notes 记录 42 位新贡献者 [GH][GH:release]。
6. **安全意识已有文档化**：SECURITY.md 存在，v0.4.0 release notes 明确列出 defusedxml、owner-only token/config permissions、限制 token-file resolution 等安全 hardening [GH:local-scan][GH:release]。

## 劣势

1. **成熟度很低**：2026-03 建仓，latest release v0.4.0；API、目录结构、hub 协议、matrix 语义、harness 规范都有继续变化的可能 [GH][GH:release]。
2. **质量分布天然不均**：每个 harness 都接不同软件后端，可靠性取决于具体 adapter、target app、版本与平台，而不是 hub 本身能完全保证。
3. **安全面很宽**：agent 可以构造命令，harness 会调用 subprocess、脚本引擎、文件系统、GUI/creative tool 或 API；实际执行质量需要逐个 harness 审查 [GH:local-scan][GH:release]。
4. **性能评估需分层**：hub/package manager 自身轻，但 Blender/GIMP/LibreOffice/ffmpeg/GIS/game 等 target software 的资源占用可能很重；不能用统一资源模型描述全体 harness。
5. **营销口号强于稳定承诺**：“Making ALL Software Agent-Native”是方向性宣言，不应被解读为当前已经可靠覆盖所有软件。
6. **CODE_OF_CONDUCT 未被 community profile 检出**：项目有 CONTRIBUTING 与 PR template，但社区治理仍不满格 [GH:community]。

---

## 适合什么场景

- agent infrastructure 研究：如何把传统软件变成可发现、可调用、可测试的 agent tool。
- 为特定软件贡献 CLI harness，尤其是 GUI/creative/scientific/dev tools。
- 给 Claude Code、Codex、OpenClaw、Nanobot、Hermes 等 agent 安装可组合工具集 [Docs][GH:release]。
- 需要 registry/package-manager 风格发现 agent-native CLIs 的个人实验。
- 需要把多个工具组合为一个任务能力包时，试验 CLI-Matrix 的 capability bundle [GH:matrix]。
- 分析“CLI as universal interface for agents”的工程方法论。

## 不适合什么场景

- 要求 enterprise-stable、长期兼容、统一质量保证的生产平台。
- 对每个 harness 的安全边界没有审查能力，却打算让 agent 自动操作敏感文件/API 的环境。
- 只需要某个单一工具的稳定 CLI，不需要 agent registry、matrix 或自动发现层。
- 不能接受 target software 安装、版本兼容和平台差异的人。
- 认为 GUI 自动化已经足够，不愿为结构化 CLI interface 投资的场景。

## 与类似项目对比

| 项目 | 定位 | 相对本项目 |
|------|------|-----------|
| cal.diy | scheduling / booking infrastructure | cal.diy 提供时间协调 primitive；CLI-Anything 提供软件操作 primitive |
| CodeGraph | 本地代码知识图谱 / context infrastructure | CodeGraph 优化 agent 理解代码；CLI-Anything 扩展 agent 可操作的软件边界 |
| RTK | agent shell 输出 token 压缩代理 | RTK 处理已有 CLI 输出效率；CLI-Anything 让更多软件先拥有 agent-friendly CLI |
| oh-my-openagent | coding-agent orchestration harness | oh-my-openagent 组织多 agent workflow；CLI-Anything 提供可被这些 agent 调用的工具生态 |

上述项目跨 `ai-programs/agent-infrastructure` 与相邻 AI harness categories 做定位级对比，未按同一 10 维度框架深审。

---

## 它能做什么

capability 评分为 4/5。CLI-Anything 覆盖的是横向能力，而非单一应用能力：

- 分析目标软件并生成 Python/Click CLI harness [GH]；
- 支持 subcommand mode、stateful REPL、JSON output、人类可读输出、persistent state、undo/redo、安装包与 SKILL.md [GH]；
- CLI-Hub 提供 `cli-hub list/search/install/info/update/uninstall` 等 package-manager 操作 [Docs][PyPI:cli-anything-hub]；
- CLI-Matrix 提供 `matrix list/search/info/doctor/preflight/install`，把 curated multi-CLI workflow 变成一键能力安装 [GH:release][GH:matrix]；
- agent 侧可以通过 SKILL 发现并安装合适 CLI，然后完成任务 [Docs]；
- 贡献流程覆盖 HARNESS、QUICKSTART、PUBLISHING 与 PR template [Docs:harness][Docs:quickstart][Docs:publishing]。

这里的 4 是“能力广度与抽象目标很强”评分；不给 5，是因为“包装任何软件”目前更多是 methodology / extensibility，而不是每一类软件都已经有稳定、等质量、生产可用的 harness。

## 运行环境与资源占用

| 场景 | CPU | 内存 | 存储 | 说明 |
|------|-----|------|------|------|
| CLI-Hub / registry | 低 | 低 | 小 | package manager、metadata、安装管理本身较轻 [PyPI:cli-anything-hub] |
| Matrix install | 低到中 | 低到中 | 取决于所选 matrix | matrix 本身是组合/安装规划层，实际成本来自成员 CLI 与目标软件 [GH:matrix] |
| 具体 harness | 取决于 target app | 取决于 target app | 从 MB 到 GB | GIMP、Blender、LibreOffice、ffmpeg、games、cloud APIs 的成本完全不同 |

- **运行时**：Python 为主；仓库 local scan 显示 Python files 1263，另有少量 C#/Shell/JS/TS/Swift [GH:languages][GH:local-scan]。
- **操作系统**：取决于 harness 与 target software；CLI-Hub 本身更轻，GUI/desktop apps 受平台限制。
- **Docker**：未按 server app 方式提供统一 Docker；项目形态是 CLI/harness registry。
- **GPU**：hub 不需要；个别图形/AI/video harness 可能由目标软件决定。
- **外部依赖**：目标软件本身、Python 包、系统 CLI、API credentials 等。

performance 评分 4/5。作为接口层，它避免 GUI automation 的高成本与脆弱性；但整体资源效率必须按具体 harness / matrix 成员评估，不能给绝对 5。

## 上手体验

评分 4/5。

CLI-Hub 对用户侧路径很清楚：`pip install cli-anything-hub` 后可 list/search/install/info/update/uninstall；agent 侧则通过 SKILL 让 agent 自主发现与安装 [Docs][PyPI:cli-anything-hub]。CLI-Matrix 又把“找多个工具并组合”这件事进一步收敛为 matrix list/preflight/install [GH:matrix]。这比“让 agent 看 README 自己猜命令”强很多。

扣分原因：贡献新 harness 的成本仍然不低；用户需要理解目标软件安装、CLI harness 的能力边界、JSON 输出语义、状态文件与潜在权限风险。早期项目也意味着文档与命令行为可能继续变化。

## 代码质量

评分 3/5。

正面：local scan 显示 1839 tracked files、1263 个 Python 文件、301 个 test/spec-ish matches、6 个 workflows；SECURITY.md、CONTRIBUTING.md、PR template、release/publish 相关文档齐备或由 community profile 检出 [GH:local-scan][GH:community]。项目不是单 README 概念 repo。

不给 4 的原因：harness collection 的代码质量天然异质；不同贡献者为不同软件写 adapter，测试深度、错误处理、跨平台处理、安全验证很难完全一致。仓库建成时间很短，本次也未运行全量测试，所以 code_quality 只能保守给 3。

## 可扩展性

评分 5/5。

可扩展性是项目核心：任何软件、代码库或 Web API 都可以被包装成 agent-native CLI；CLI-Hub 提供 registry；CLI-Matrix 提供多 CLI workflow 组合；HARNESS/QUICKSTART/PUBLISHING 指导贡献；SECURITY.md 与 v0.4.0 hardening 也为 harness developer 提供安全规则 [Docs][Docs:harness][Docs:quickstart][Docs:publishing][GH:matrix][GH:release]。

这类系统的上限不在单个 repo 功能，而在生态供给。只要规范稳定，它天然适合扩展。

## 文档质量

评分 4/5。

README / GitHub Pages / CLI-Hub 对愿景、quickstart、CLI-Hub、agent SKILL、matrix、贡献入口解释较完整 [GH][Docs][Docs:github-pages][GH:matrix]。HARNESS、QUICKSTART、PUBLISHING 等文档说明它不只是展示页面，而有面向贡献者的流程文档 [Docs:harness][Docs:quickstart][Docs:publishing]。

扣分点：文档带有强营销叙事，且早期项目在规范稳定性与逐 harness 质量说明上仍需更细的成熟案例、兼容矩阵和安全审计说明。

## 社区与成熟度

| 维度 | 评分 | 说明 |
|------|------|------|
| 社区活跃度 | 4/5 | 45.3k stars、4.2k forks、约 108 contributors，open issues/PRs 还处于可管理范围，v0.4.0 release notes 记录大量新增 harness 与 42 位新贡献者 [GH][GH:release]。 |
| 成熟度 | 1/5 | 2026-03-08 建仓，latest release v0.4.0；按评分边界属于预发布/alpha 级别，不能因为 star 增长快或 matrix 概念正确而提高成熟度 [GH][GH:release]。 |

## 安全与风险

评分 2/5。

正面：SECURITY.md 存在；v0.4.0 release notes 记录了 4 项安全 hardening，包括用 `defusedxml` 处理不可信 XML、owner-only token/config permissions、限制 token-file resolution 防止 arbitrary file access 等 [GH:local-scan][GH:release]。GitHub Security Advisories 查询未发现已发布 advisory；这只能说明本次未检出公开 repo advisory，不能证明生态安全 [GH:advisories]。

风险：项目的本质就是让 agent 调用真实软件；如果 harness 参数验证不严，prompt injection 可以转化为 shell/subprocess/file/API 级风险。由于项目 maturity=1、harness 众多且异质，安全性必须逐个 harness 审查，不能从 hub 文档自动推出全生态安全。Matrix install 还会一次性安装多个 CLI，组织内使用时应先跑 preflight、审查 matrix 成员、固定版本并限制可访问凭据 [GH:matrix]。因此 security 从 3 下调到 2：不是因为发现公开 advisory，而是因为早期生态 + 高权限工具调用面的系统性风险。

## 学习价值

CLI-Anything 很值得研究：

- 它把“agent tool interface”问题从单个 MCP server 扩展到任意软件生态。
- 它提供了 CLI、JSON、state、undo/redo、SKILL.md、registry、matrix 的组合范式。
- 它提醒我们：Agent infrastructure 不只有 memory/context/scheduler，也包括“现有软件如何变成 agent-operable”。
- 它也是早期高热项目的治理样本：概念正确，但质量、规范、安全和兼容性要靠时间检验。