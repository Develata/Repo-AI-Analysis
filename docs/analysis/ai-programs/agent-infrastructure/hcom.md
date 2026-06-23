---
title: "hcom"
created: 2026-06-24
updated: 2026-06-24
type: repository-analysis
repo_url: "https://github.com/aannoo/hcom"
category: "ai-programs/agent-infrastructure"
tags: ["agent-infrastructure", "multi-agent", "coding-agents", "terminal", "cli", "orchestration", "hooks", "sqlite", "relay", "rust"]
previous_repo: ""
successor: ""
primary_language: "Rust"
license: "MIT"
stars: 356
forks: 46
last_checked: 2026-06-24
last_verified: 2026-06-24
evidence: "GitHub REST + GraphQL metadata, releases, security-advisories API, PyPI JSON, local shallow clone/code scan, CI workflow inspection, and local cargo test --locked smoke validation; not a production deployment or cross-device relay test"
archived_reason: ""
docker_support: false
gpu_required: false
estimated_cpu: "1-2 cores for local coordination/TUI; spawned agent CLIs and user workloads dominate real CPU use"
estimated_memory: "tens to low hundreds of MB expected for hcom itself; external agents dominate; no benchmark performed"
estimated_storage: "single Rust binary + local ~/.hcom SQLite/config/log state; shallow clone 6.1MB with 192 tracked files; Cargo target/cache only for source builds"
status: active
ratings:
  capability: 4
  usability: 4
  performance: 4
  code_quality: 4
  documentation: 4
  community: 3
  maturity: 3
  extensibility: 4
  security: 3
  recommendation: 4
overall_score: 3.7
sources:
  - "[GH] https://github.com/aannoo/hcom"
  - "[GH:api] https://api.github.com/repos/aannoo/hcom queried 2026-06-24; stars=356, forks=46, open_issues_count=18, created_at=2025-07-21, pushed_at=2026-06-22, license=MIT, primary_language=Rust, archived=false, homepage=https://pypi.org/project/hcom/"
  - "[GH:graphql] GitHub GraphQL queried 2026-06-24; open issues=9, open PRs=9, closed issues=13, merged PRs=21, tags total=38, default-branch commit history total=328"
  - "[GH:languages] https://api.github.com/repos/aannoo/hcom/languages queried 2026-06-24; Rust=4101263, Shell=48369, TypeScript=39101, Just=1124"
  - "[GH:releases] https://api.github.com/repos/aannoo/hcom/releases?per_page=10 queried 2026-06-24; latest v0.7.22 published 2026-06-22 with macOS/Linux/Android tarballs, hcom-installer.sh, PyPI wheel and sha256 assets; recent tags include v0.7.21 2026-06-06 and v0.7.20 2026-06-01"
  - "[GH:contributors] https://api.github.com/repos/aannoo/hcom/contributors queried 2026-06-24; contributors returned=9"
  - "[GH:community] https://api.github.com/repos/aannoo/hcom/community/profile queried 2026-06-24; health_percentage=42; README and MIT license detected; code_of_conduct/contributing/issue_template/pull_request_template not detected"
  - "[GH:issues] https://api.github.com/repos/aannoo/hcom/issues queried 2026-06-24; sampled open issue titles include #63 Relay seemingly not pulling MQTT messages?, #51 Request Windows support for latest hcom versions, #31 spawn silently fails when invoked through launch-agent.sh wrapper from cron context"
  - "[GH:advisories] https://api.github.com/repos/aannoo/hcom/security-advisories queried 2026-06-24; returned []"
  - "[GH:actions] https://api.github.com/repos/aannoo/hcom/actions/runs queried 2026-06-24; latest sampled CI/Release runs were completed successfully, including main push CI run 27983510088 and v0.7.22 CI/Release runs"
  - "[GH:local-scan] Local shallow clone /opt/data/tmp/repo_hcom at commit 5e167b92f8da7ef4c5f40974d4d59e89ef685479 dated 2026-06-22; git ls-files=192, Rust files=154, tests files=10, workflows=5, clone size=6.1MB; inspected README.md, Cargo.toml, pyproject.toml, Justfile, .github/workflows/ci.yml, src/relay/crypto.rs, src/config.rs, src/shell_env.rs and tests/"
  - "[Local:test] In /opt/data/tmp/repo_hcom at commit 5e167b92f8da7ef4c5f40974d4d59e89ef685479, ran CARGO_TARGET_DIR=/tmp/hermes-cargo-target cargo test --locked on 2026-06-24; result ok: 1806 unit tests + 20 cli_smoke tests passed, real-tool/PTY/relay integration tests were mostly ignored unless pinned external tools are present"
  - "[Local:cli] In /opt/data/tmp/repo_hcom, ran cargo run --locked -- --version and --help on 2026-06-24; output hcom 0.7.22 and top-level commands include send/list/events/bundle/transcript/start/stop/config/run/relay/archive/reset/hooks/status/term/update"
  - "[PyPI] https://pypi.org/pypi/hcom/json queried 2026-06-24; latest version=0.7.22, Development Status :: 4 - Beta, OS classifiers macOS and POSIX/Linux, vulnerabilities=[]; latest wheels include macOS x86_64/arm64, manylinux x86_64/aarch64, musllinux x86_64/aarch64"
  - "[WikiLocal:comparisons] Local github-repo-wiki entries inspected 2026-06-24 for adjacent ai-programs/agent-infrastructure positioning: vibe-kanban.md, oh-my-claudecode.md, oh-my-openagent.md, cli-anything.md"
---

# hcom

> Terminal-native multi-agent communication layer：给 Claude Code、Codex、Gemini CLI、OpenCode、Cursor/Kimi/Copilot 等 coding-agent CLI 加上 message、watch、spawn、fork、resume、kill、relay 与 TUI dashboard。
>
> **状态**: `active` · **总分**: 3.7/5 · **推荐度**: 4/5

## 一句话总结

hcom 适合已经频繁使用多个 terminal coding-agent CLI、并想把“复制粘贴式协作”提升为 agent 间消息、观察、事件订阅和跨终端编排的高级开发者；它不是新的 coding agent，而是 agent-to-agent coordination substrate。

## 总体评价

`aannoo/hcom` 的定位很清楚：README 说它是一个让 agents 在 terminals 之间 message、watch、spawn each other 的 CLI，并列出 Claude Code、Gemini、Codex、OpenCode、Kilo、Pi、Antigravity、Cursor、Kimi、Copilot 等接入对象 [GH][GH:local-scan]。它的中心不是“替用户写代码”，而是给已有 agent CLI 增加通信层、状态层和生命周期管理层：local hooks → SQLite DB → hooks/PTY/relay delivery → other agents [GH:local-scan][Local:cli]。

因此我把它归入 `ai-programs/agent-infrastructure`，而不是 `coding-agents`。它更像 terminal agent mesh 的 runtime glue：提供 agent identity、inbox、transcript、terminal screen、event log、collision notification、TUI、workflow scripts、cross-device relay。这个方向对 Hermes/Codex/Claude 多代理工作流很有学习价值，因为真实痛点往往不是“再启动一个 agent”，而是“多个 agent 如何互相知道对方在做什么，并在合适时机交换上下文”。

分数保持克制：能力、体验、代码质量、文档和扩展性都可以给 4；但社区规模仍小、项目仍是 Beta/0.7.x，且安全模型天然高权限，所以成熟度和安全不宜高估 [GH:api][GH:graphql][PyPI][GH:issues]。

## 推荐度：4/5

**定位**：推荐给已经熟悉 Claude Code / Codex / Gemini CLI / OpenCode 等 terminal agent，并愿意把多 agent 协作纳入自己工程流程的高级个人开发者、AI workflow tinkerer 和 agent-infrastructure 研究者。

给 4 而不是 5，是因为 hcom 的方向非常贴近当前 terminal-agent 生态的实际痛点，且实现不是空壳：本地 `cargo test --locked` 通过 1806 个单元测试和 20 个 CLI smoke tests，CI 也有 fmt/clippy/test 与真实工具测试矩阵 [Local:test][GH:actions]。但它仍处于 Beta，社区/治理规模有限，跨设备 relay 和自动 hook 注入意味着它必须被视为“高信任本地基础设施”，不能无审计地放入安全敏感环境 [PyPI][GH:community]。

作为“值得试用/跟踪”的工具，它比普通 prompt/skill 仓库更接近可运行 infrastructure；作为“团队生产依赖”，还需要 pin 版本、隔离 `HCOM_DIR`、限制 relay trust domain，并先用非关键 repo 做小规模演练。

## 优势

1. **切中多 agent terminal workflow 的真实痛点**：message、observe、subscribe、spawn/fork/resume/kill 把 agent 协作从手工 copy-paste 推向可查询、可唤醒、可编排的事件系统 [GH:local-scan][Local:cli]。
2. **单 Rust binary，无常驻服务依赖**：README 明确“single Rust binary, no background services”；本地协调使用 SQLite/config/hooks，部署心智负担低于一个完整 web server 或 SaaS [GH:local-scan]。
3. **支持面宽**：README/PyPI 描述覆盖 Claude Code、Gemini CLI、Codex、OpenCode、Kilo Code、Pi、Antigravity、Cursor、Kimi、Copilot，并提供 manual `hcom start` / `hcom listen` 路径给其他工具 [GH:local-scan][PyPI]。
4. **工程质量信号较强**：Rust 主体、锁定依赖、GitHub CI、release workflow、PyPI/Homebrew/shell installer、多平台 release assets，以及本地 `cargo test --locked` 通过，说明它不是 README-only 原型 [GH:actions][GH:releases][Local:test]。
5. **安全文档诚实**：README 对 relay token、PSK、无 expiry/无细粒度权限、泄露后影响等风险写得很直白；这比只宣称 “E2EE” 而不解释信任边界更可信 [GH:local-scan]。

## 劣势

1. **信任边界很大**：一旦 agent 能通过 hcom 收发消息、观察 transcript/terminal、spawn/kill/resume 其他 agent，prompt injection 或误操作就可能放大为跨 agent 的执行风险 [GH:local-scan]。
2. **relay 是 all-or-nothing trust domain**：README 明确 relay 没有 scoped roles、read-only peers 或 per-device permissions；token 泄露可导致对 enrolled devices 上 agent 的强控制风险 [GH:local-scan]。
3. **社区规模仍小**：356 stars、46 forks、9 contributors，open issues 与 PRs 各 9；活跃但还不是大生态项目 [GH:api][GH:graphql][GH:contributors]。
4. **平台边界存在**：PyPI classifier 主要覆盖 macOS 与 POSIX/Linux；Windows support 有 open issue，当前更适合 macOS/Linux/WSL/Termux 类开发环境 [PyPI][GH:issues]。
5. **真实集成测试依赖外部 agent**：本地 `cargo test --locked` 通过，但 Claude/Codex real-tool、PTY、relay roundtrip 等测试在缺少 pinned 外部工具时多为 ignored；这意味着“核心代码健康”不等于“所有外部 agent integration 已在本机验证” [Local:test]。

---

## 适合什么场景

- 同时跑 Claude Code、Codex、Gemini CLI、OpenCode 等多个 terminal agent，需要消息、handoff、review、fork、resume、kill 和状态观察 [GH:local-scan][Local:cli]。
- 想把 multi-agent workflow 写成脚本，例如 debate、calibrator/judge、文件上下文守护 agent、任务拆分与结果汇总 [GH:local-scan]。
- 个人开发机或受控实验环境中，用 `HCOM_DIR` 隔离项目状态，观察 agent transcript、terminal screen、file-edit events 和 collision notifications [GH:local-scan]。
- 研究 agent infrastructure：尤其是 hook-based delivery、local SQLite event log、PTY injection、cross-agent context handoff 和 relay trust model。
- 需要跨设备连接自己名下机器上的 agent，并能接受一个 relay token 等价于该 trust domain 的高权限凭据 [GH:local-scan]。

## 不适合什么场景

- 对 shell、repo、terminal transcript、agent message channel 有严格隔离要求的高安全环境；hcom 的价值正来自跨 agent/terminal 的连接，不能当低权限工具看待。
- 需要团队级 RBAC、审计、per-device policy、只读 peer 或细粒度 permission 的组织；relay 设计不是这个模型 [GH:local-scan]。
- 主要在原生 Windows 环境工作、且不想通过 WSL/类 Unix shell 路径使用 terminal agent 的用户；Windows support 仍有 open issue [GH:issues][PyPI]。
- 只使用单一 agent、偶尔手工复制上下文的用户；hcom 的额外 hook/TUI/DB/relay 心智成本可能大于收益。
- 要求所有外部 agent integration 在本机已完整 smoke-tested 后才采用的生产流程；本次只验证了 Rust/CLI tests，未运行 pinned Claude/Codex/relay ignored integration tests [Local:test]。

## 与类似项目对比

| 项目 | 定位 | 相对本项目 |
|------|------|-----------|
| Vibe Kanban | coding-agent task board / workspace / review orchestration | Vibe Kanban 以任务板、workspace 和 diff review 为中心；hcom 以 terminal agent 间消息、事件和生命周期控制为中心 |
| oh-my-claudecode | Claude Code hooks/skills/commands/MCP/team workflow harness | oh-my-claudecode 更偏 Claude Code 生态包；hcom 更偏跨多个 agent CLI 的通信 substrate |
| oh-my-openagent | OpenCode 多模型、多智能体 orchestration harness | oh-my-openagent 以 OpenCode harness 为重心；hcom 不绑定单一 agent，而是在终端层连接多个 CLI |
| CLI-Anything | 让任意 CLI tool 变得 agent-discoverable / agent-native | CLI-Anything 偏工具能力暴露；hcom 偏 agent session 之间的通信、观察和调度 |

上述项目按 `ai-programs/agent-infrastructure` 同类范围做 adjacent positioning，对比基于本地 wiki 既有条目的标题级定位与分类语境，未按同一 10 维度框架重新深审 [WikiLocal:comparisons]。

---

## 它能做什么

- 启动并包装多个 coding-agent CLI：`hcom claude`、`hcom codex`、`hcom gemini`、`hcom opencode`、`hcom cursor-agent` 等 [GH:local-scan][Local:cli]。
- 在 agent 之间发送 message、intent、reply、bundled context，并可通过 `hcom send/list/events/listen/bundle/transcript` 查询或等待事件 [GH:local-scan][Local:cli]。
- 观察 agent transcript、file edits、terminal screen、command history 和 status/event log [GH:local-scan]。
- spawn / fork / resume / kill agents，并在 kitty、wezterm、tmux、zellij、waveterm、cmux、herdr 等终端环境中管理 pane/window 行为 [GH:local-scan]。
- 用 hooks 记录活动到本地 SQLite database，并在 hook/PTY/listen/relay 路径中投递消息；没有 hooks 的工具可通过 `hcom start` 加入 [GH:local-scan]。
- 提供 TUI dashboard、workflow scripts、config precedence、per-project `HCOM_DIR` isolation、auto-subscribe/collision presets [GH:local-scan][Local:cli]。
- 通过 MQTT relay 连接不同设备；payload 使用 XChaCha20-Poly1305 与 PSK，README 明确 token、broker、metadata 和 replay/freshness 边界 [GH:local-scan]。

## 运行环境与资源占用

| 场景 | CPU | 内存 | 存储 | 说明 |
|------|-----|------|------|------|
| 本地单机协调 | 1-2 cores | hcom 本身预计 tens/low hundreds MB | binary + `~/.hcom` SQLite/config/log | 单 Rust binary + SQLite/hooks/TUI；外部 agent CLI 才是主要资源消耗 [GH:local-scan] |
| 多 agent 并行 | 2-4+ cores | 取决于 Claude/Codex/Gemini 等外部进程 | repo/worktree/transcript/log 增长 | hcom 管通信和生命周期，不承担模型推理 [GH:local-scan] |
| 源码构建/测试 | 2+ cores | Rust build 常规内存 | Cargo target/cache 可达 GB 级 | 本地浅克隆 6.1MB；`cargo test --locked` 通过，但依赖下载和 target 目录明显大于源码 [GH:local-scan][Local:test] |
| 跨设备 relay | 1-2 cores | 低到中等 | 本地 DB/config + relay state | MQTT broker 与网络状态影响体验；安全边界比本地单机更复杂 [GH:local-scan] |

- **性能评分 4/5**：Rust 单 binary、无常驻 web service、SQLite 本地状态是良好资源效率信号；本次没有做吞吐/latency benchmark，因此不打 5 [GH:local-scan][Local:test]。
- **Docker**：`docker_support: false`，因为仓库没有面向用户的官方 Docker image/deployment 路径；release assets 与 PyPI/Homebrew/shell installer 是主要安装渠道 [GH:releases][PyPI]。
- **GPU**：不需要 GPU；agent 推理成本由外部 CLI/provider 承担。

## 上手体验

评分 4/5。

安装路径很顺：README 首推 Homebrew，也提供 shell installer、PyPI/uv tool install 和 `hcom update`；PyPI JSON 显示 0.7.22 发布了 macOS、manylinux、musllinux 多平台 wheels [GH:local-scan][PyPI]。本地 CLI smoke 也确认 `hcom --version` 和 `hcom --help` 正常输出，顶层命令清楚 [Local:cli]。

扣 1 分的原因是它的价值不是“装完即懂”：用户需要已经理解各 agent CLI、hook 注入、terminal/pane、消息投递、relay token、`HCOM_DIR` 隔离等概念。对已经有 Hermes/Codex/Claude 多代理使用场景的人，它很容易产生价值；对普通用户，则需要先跨过 agent workflow 的门槛。

## 代码质量

评分 4/5。

代码质量信号较强：仓库以 Rust 为主，Cargo.toml 锁定 Rust 1.88、edition 2024，依赖包括 clap、rusqlite bundled、ratatui/crossterm、rumqttc rustls、XChaCha20-Poly1305 等；本地浅克隆有 154 个 Rust 文件、10 个 tests 路径文件和 5 个 workflows [GH:local-scan][GH:languages]。CI workflow 运行 `cargo fmt --all -- --check`、`cargo clippy --all-targets --locked -- -D warnings`、`cargo test --locked`，并有 Codex/Claude/relay real-tool test matrix [GH:actions][GH:local-scan]。

本地 `cargo test --locked` 通过 1806 个 unit tests 和 20 个 CLI smoke tests，这是很强的工程信号 [Local:test]。不打 5，是因为本次没有覆盖率数据，也没有执行被 ignored 的 pinned real-tool/PTY/relay 测试；此外项目仍快速迭代，外部 agent CLI 的兼容性会随上游变化而产生维护压力。

## 可扩展性

评分 4/5。

hcom 的扩展性不是传统 plugin marketplace，而是 CLI + hooks + config + scripts + external-agent adapters。README 显示它支持 bundled/user scripts（`~/.hcom/scripts/`）、custom terminal open/close setup、per-agent config override、`HCOM_DIR` 项目隔离、manual `hcom start/listen` 接入任意进程，以及多个主流 agent CLI adapters [GH:local-scan]。这种“薄 substrate”设计让它容易嵌入个人 workflow。

扣 1 分是因为深度扩展仍偏源码/约定驱动：如果要新增一个一等 agent backend、修改 transcript parser、改变 relay semantics 或做团队级 policy，需要理解 Rust 内部结构，而不是只写一个稳定插件 contract。

## 文档质量

评分 4/5。

README 本身就是主要文档，覆盖 install、quickstart、agents 能力、terminal、cross-device relay、安全模型、troubleshoot、uninstall、supported tools、CLI commands、config、workflow scripts、build/contributing/license [GH:local-scan]。尤其 relay security 一节写得较细：token 包含 relay ID、broker URL、raw PSK；没有 expiry、scope 或 revocation list；泄露后应 `relay off --all` 并迁移到新 token [GH:local-scan]。

扣分点是独立 docs 站点/架构文档/贡献规范不足：GitHub community profile 没有检测到 CONTRIBUTING、CODE_OF_CONDUCT、issue template 或 PR template；复杂集成的长期维护知识主要散在 README、源码和 tests 中 [GH:community]。

## 社区与成熟度

| 维度 | 评分 | 说明 |
|------|------|------|
| 社区活跃度 | 3/5 | 356 stars、46 forks、9 contributors、9 open issues、9 open PRs；活跃且有反馈，但仍是小型项目，不是大生态基础设施 [GH:api][GH:graphql][GH:contributors] |
| 成熟度 | 3/5 | 创建于 2025-07，已有 38 个 tags、v0.7.22 release、多平台 artifacts 与 Beta classifier；但未到 1.0，外部 agent integration 与 relay 仍处快速迭代 [GH:api][GH:graphql][GH:releases][PyPI] |

这个评分的关键是“活跃但年轻”。tag/release 密度说明维护者在快速推进，CI 和测试让项目不像随手脚本；但 open issue 中仍有 relay、Windows support、spawn wrapper 等边界问题，说明 adoption 前要预留调试成本 [GH:issues]。

## 安全与风险

评分 3/5。

正面信号：GitHub Security Advisories API 返回空列表，PyPI JSON `vulnerabilities=[]`；README 对 relay 安全边界讲得诚实，源码也能看到 relay payload 使用 XChaCha20-Poly1305、topic/timestamp AAD、随机 nonce、PSK 生成，以及 config/shell-env 私有权限处理等实现线索 [GH:advisories][PyPI][GH:local-scan]。这些只表示本次查询没有发现公开 advisory，不等于无漏洞。

主要风险来自权限面：hcom 可读取/转发 agent transcript、terminal screen、file edits、command history，可通过消息唤醒 agent，可 spawn/fork/resume/kill 进程；relay token 泄露还会扩展到 enrolled devices。README 明确 relay membership 是 all-or-nothing，没有 scoped roles/read-only peers/per-device permissions，泄露 PSK 后旧流量和旧 relay 都有风险 [GH:local-scan]。

因此 security 给 3：设计上有加密和边界说明，适合个人受控 trust domain；但不适合未经隔离地进入高安全、多租户或强合规环境。实践上应使用项目级 `HCOM_DIR`、pin 版本、只 enroll 自己信任的设备、保护 `~/.hcom/config.toml`，并把 hcom 消息视作高信任命令通道。

## 学习价值

hcom 的学习价值很高，因为它提出了一个朴素但关键的判断：terminal agent 生态不会只需要“更强的单 agent”，还需要一个 agent 间通信与观察协议层。它没有做厚重 web UI，也没有重新发明 coding agent，而是把 hooks、SQLite、PTY、TUI、relay 和 workflow scripts 组合成一个轻量 coordination substrate。

对 Develata 来说，它值得重点研究三点：第一，mid-turn / idle-wake message delivery 如何改变多 agent 协作；第二，local event log + transcript + terminal screen 如何形成可查询 agent state；第三，relay security model 如何在个人设备 trust domain 中取舍简单性与权限风险。其可取处在“少而锐”，其可畏处亦在“通而高权”；善用则为器，不审则为患。