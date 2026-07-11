---
title: "Herdr"
created: 2026-07-11
updated: 2026-07-11
type: repository-analysis
repo_url: "https://github.com/ogulcancelik/herdr"
category: "ai-programs/agent-infrastructure"
tags: ["terminal-multiplexer", "coding-agents", "tui", "rust", "pty", "agent-orchestration", "remote-ssh", "socket-api"]
previous_repo: ""
successor: ""
primary_language: "Rust"
license: "AGPL-3.0-or-later; commercial license available"
stars: 15223
forks: 1007
last_checked: 2026-07-11
last_verified: 2026-07-11
evidence: "Authenticated GitHub API + official README/docs + repository advisories + local shallow-clone static scan at 4617456 + successful offline cargo metadata validation. Recent upstream CI was green. No local compile, PTY interaction, multi-agent session, remote SSH or performance benchmark was run."
archived_reason: ""
docker_support: false
gpu_required: false
estimated_cpu: "not officially specified; Herdr itself is a native terminal process, while coding agents, builds and dev servers dominate CPU demand"
estimated_memory: "not officially specified; grows with pane scrollback, screen-history settings, images and the processes running in managed PTYs"
estimated_storage: "native binary and session/config state are modest; reviewed source checkout was 36 MB excluding .git, while Rust build artifacts and managed worktrees can reach multiple GB"
status: active
ratings:
  capability: 4
  usability: 4
  performance: 3
  code_quality: 4
  documentation: 5
  community: 4
  maturity: 2
  extensibility: 4
  security: 3
  recommendation: 3
overall_score: 3.6
sources:
  - "[GH] https://github.com/ogulcancelik/herdr — README inspected 2026-07-11"
  - "[GH:api] https://api.github.com/repos/ogulcancelik/herdr — queried 2026-07-11; created_at=2026-03-27, pushed_at=2026-07-10, default_branch=master, stars=15223, forks=1007, open_issues_count=61, language=Rust, license API=NOASSERTION"
  - "[GH:issues-prs] GitHub search API queried 2026-07-11; open issues=61, open PRs=0"
  - "[GH:releases] GitHub releases API queried 2026-07-11; releases_count=70, latest=v0.7.3 published 2026-07-07; preview builds are also published"
  - "[GH:contributors] GitHub contributors API queried 2026-07-11; contributors=45; leading human contributors include ogulcancelik=924, dmmulroy=4, LaneBirmingham=4"
  - "[GH:community] GitHub community profile queried 2026-07-11; health_percentage=57; README, license and contributing guide detected; code of conduct, issue template, PR template and SECURITY.md were not detected"
  - "[GH:advisories] GitHub repository security-advisories API queried 2026-07-11; returned [] — absence of published repository advisories is not an independent audit"
  - "[GH:local-scan] Local shallow clone /opt/data/tmp/repo_herdr at 46174563489273199a17c982356c6e4674ef00d4 dated 2026-07-11; git ls-files=1795, Rust files=231, paths containing test/spec=107, workflow files=10, checkout=36 MB excluding .git. Inspected README, Cargo.toml, CHANGELOG, agent/session/socket/plugin/remote/Windows docs and CI/release workflows"
  - "[GH:cargo-metadata] cargo metadata --locked --no-deps --offline succeeded 2026-07-11; package herdr 0.7.3, Rust 2021 edition, AGPL-3.0-or-later"
  - "[GH:ci] GitHub Actions API queried 2026-07-11; recent master and PR CI runs completed successfully; release matrix builds Linux x86_64/aarch64 and macOS x86_64/aarch64, while preview workflow also builds Windows x86_64"
  - "[Docs:agents] https://herdr.dev/docs/agents/ — repository copy inspected at local commit; agent detection, lifecycle authority, screen manifests, status rollups and supported-agent matrix"
  - "[Docs:sessions] https://herdr.dev/docs/session-state/ — repository copy inspected at local commit; detach persistence, snapshots, optional screen history, native agent resume and experimental handoff semantics"
  - "[Docs:socket] https://herdr.dev/docs/socket-api/ — repository copy inspected at local commit; local framed-JSON API, capability negotiation, mutations, subscriptions and error model"
  - "[Docs:plugins] https://herdr.dev/docs/plugins/ — repository copy inspected at local commit; plugin commands, predicates, menus, schema and security model"
  - "[Docs:remote] https://herdr.dev/docs/persistence-remote/ — repository copy inspected at local commit; SSH remote attach and client/server behavior"
  - "[Docs:windows] https://herdr.dev/docs/windows-beta/ — repository copy inspected at local commit; native Windows beta limitations"
  - "[Wiki:adjacent] Local analyses github-repo-wiki/ai-programs/agent-infrastructure/hcom.md and vibe-kanban.md read 2026-07-11 for same-category positioning"
---

# Herdr

> Agent-aware terminal multiplexer：在真实 PTY panes 中运行多个 coding agents、shells、tests 与 servers，并把 agent 的 `idle/working/blocked/done` 状态汇总到 workspace/sidebar。
>
> **状态**: `active` · **总分**: 3.6/5 · **推荐度**: 3/5

## 一句话总结

Herdr 把 tmux/Zellij 式持久终端与 coding-agent 状态、session resume、worktree、socket automation 结合得很完整；适合人工同时管理多个 CLI agents 的 power user，但它创建仅约四个月、仍是 0.7.x，Windows 和 live handoff 仍在 beta/experimental，不应过早当作关键生产基础设施。

## 总体评价

Herdr 的核心不是“再造一个聊天 agent”，而是改造 agent 运行的 terminal substrate。每个 agent 仍运行在真实 PTY pane 中，保留原始 TUI、shell、logs、approval prompts 和子进程；Herdr 在其外层提供 workspaces、tabs、splits、sidebar、notifications、git worktree、remote SSH、session persistence 与 programmable socket API [GH][Docs:agents][Docs:sessions]。

它最有差异化的部分是 agent state model。Herdr 先识别 foreground process，再根据 lifecycle hooks/plugins 或 bottom-buffer screen manifests 判定 `idle`、`working`、`blocked`；状态向 pane/tab/workspace 汇总，使用户不必轮询每个终端 [Docs:agents]。对 Claude Code、Codex 等 lifecycle hooks 不完整的工具，Herdr明确继续以 screen manifest 为 authority，以避免错误地把局部 hook 当作完整状态机 [Docs:agents]。

这是一种务实但非形式可靠的设计：screen shape 会随着 agent UI 更新而漂移，unknown prompt 可能被降级成 `idle`，而不是 `blocked`；remote manifests 可以热更新规则，但新增 agent process identity 仍需 binary update [Docs:agents]。因此它是 human attention router，不是可证明正确的 autonomous scheduler。

## 推荐度：3/5

**定位**：适合已经习惯在终端里同时运行 Claude Code、Codex、Hermes Agent、OpenCode、Kimi 等多个 CLI agents，并且希望统一看状态、恢复会话和自动化 pane 操作的高级用户。

给 3 的理由是“功能已强，生命周期未稳”。2026-03-27 才建仓，2026-07 已到 15.2k stars、v0.7.3 和 45 contributors，增长与迭代极快 [GH:api][GH:releases][GH:contributors]；但这也意味着 keybindings、Windows process detection、session identity、remote handshake、handoff 和 detection rules 仍持续变化 [GH:local-scan]。maturity 只能给 2。

对当前以 Hermes delegation/process 为主的自动化流程，Herdr 不是立即必装：Hermes 已承担后台 agent dispatch、completion notification 和 session management。只有当工作重心转为“人在 SSH/本地终端中手动并行看管多个 interactive CLI agents”时，Herdr 才真正补位。不要为了多一层 UI 同时维护两套 orchestration semantics。

## 优势

1. **保留原生 terminal UI**：agent、shell、test 和 server 都在 PTY 中真实运行，不要求 agent 改成 web wrapper [GH][Docs:agents]。
2. **agent-aware 状态汇总**：识别 18 类常见 coding agents，区分 lifecycle authority 与 screen-manifest fallback，把 blocked/working/done 汇总到 workspace [Docs:agents]。
3. **session persistence 语义清楚**：文档明确区分 detach 保活、snapshot restore、screen-history replay、native agent resume 与 experimental live handoff，避免把“恢复布局”误说成“进程仍活着” [Docs:sessions]。
4. **Hermes/Codex/Claude 等原生 resume**：集成可记录 native session reference，并在 server restart 后用各 agent 的 resume command 恢复会话 [Docs:sessions]。
5. **remote-first 能力**：可通过 SSH 启动/连接远端 Herdr server，把本地 client 作为 thin terminal client，适合长期 SSH 开发 [Docs:remote]。
6. **可编程控制面**：local socket API 支持 list/read/send/wait/split/run/workspace/tab/plugin 等操作，并有 schema/version/capability negotiation [Docs:socket]。
7. **Rust single-binary 工程路线**：release matrix 提供 Linux/macOS 多架构 binaries，Windows preview 也有构建；offline cargo metadata 验证了 package/lock 基线 [GH:ci][GH:cargo-metadata]。
8. **文档异常完整**：agents、integrations、socket API、plugins、session semantics、remote attach、Windows beta 与 troubleshooting 均有专门说明 [Docs:agents][Docs:socket][Docs:plugins][Docs:sessions][Docs:windows]。

## 劣势

1. **项目过于年轻**：0.7.x 与四个月历史不足以证明长期兼容性、跨终端稳定性和数据迁移可靠性 [GH:api][GH:releases]。
2. **screen detection 有先天脆弱性**：agent UI 改版、主题、localization 或新 approval prompt 都可能造成误判；文档承认 known agent 无规则命中时会 fall back to `idle` [Docs:agents]。
3. **Windows 仍是 beta**：ConPTY、process-tree detection、shell/SSH/clipboard/notifications 等边缘行为不能按 Linux/macOS 同等成熟理解 [Docs:windows][GH:ci]。
4. **live handoff 仍 experimental**：普通 server restart 不保留任意运行进程；handoff 只是受支持环境的 best effort [Docs:sessions]。
5. **plugin 与 socket 权限面很大**：插件 command 可执行 shell；socket client 可读 pane output、发送按键、启动进程和改变布局，必须按 local code execution boundary 管理 [Docs:plugins][Docs:socket]。
6. **自动更新 detection manifests 是供应链入口**：默认会从 herdr.dev 检查并应用已知 agent 的 manifest 更新；可关闭或用 local overrides 固定 [Docs:agents]。
7. **许可证可能限制集成方式**：AGPL-3.0-or-later 对分发/网络使用修改版有义务；闭源或商业嵌入需评估官方 commercial license [GH:cargo-metadata]。

---

## 适合什么场景

- 人工同时启动多个 Claude Code/Codex/Hermes/OpenCode sessions，需要看到哪个 blocked、哪个 done。
- SSH 到开发机/HPC 前端或 home server，detach 后希望 PTY processes 继续运行，再从本地重连。
- 需要把 agent terminal、普通 shell、tests 和 dev servers 放进同一 workspace/tab/pane hierarchy。
- 用 worktrees 给不同 agent 分隔 git branch，同时仍保留人类 terminal control。
- 编写脚本通过 socket API 等待 agent 状态、读取 output、发送输入或创建 panes。
- 研究 terminal emulator、PTY actor、agent UI state detection、session restore 和 human-in-the-loop orchestration。

## 不适合什么场景

- 只运行单个 agent，普通 terminal/tmux 已足够。
- 已由 Hermes/Vibe Kanban 等系统完整承担 task dispatch、workspace 与 completion tracking，不想维护重复 control plane。
- 要求 agent state detection 具有形式正确性、无误判或 machine-safety guarantee。
- 不能接受 AGPL，且没有 commercial license 方案。
- 要在多租户、不可信用户共享的主机上开放 socket/plugin 控制面。
- Windows-first 且不能接受 beta regressions 的生产环境 [Docs:windows]。
- 把 snapshot restore 误认为任意进程可跨 server restart 存活的场景 [Docs:sessions]。

## 与类似项目对比

| 项目 | 定位 | 相对 Herdr |
|------|------|-----------|
| Hcom | coding agents 间的 mailbox/message bus 与生命周期工具 | Hcom 让 agents 交换消息、claim tasks；Herdr 管理运行这些 agents 的 PTYs、布局、状态与人类注意力，两者可互补 [Wiki:adjacent] |
| Vibe Kanban | coding-agent task board/workspace/review UI | Vibe Kanban 以 issue/attempt/diff/preview/PR 为中心；Herdr 以 terminal panes、persistent processes 和 direct input 为中心 [Wiki:adjacent] |

上述比较限定在 `ai-programs/agent-infrastructure/` 的 agent execution/orchestration 邻域。tmux、Zellij 与 GNU screen 仍是理解 detach/split/pane substrate 的通用参照，但不作为本目录的 repo-wiki 同类评分对象；Herdr 的差异点是额外叠加 agent state、resume、worktree 与 socket semantics [GH][Docs:agents][Docs:sessions]。

---

## 它能做什么

capability 评分 4/5。

- 创建 workspaces、tabs、panes、splits，并在真实 PTYs 中运行任意 command [GH]。
- 自动检测主流 coding agents，展示 `idle/working/blocked/done`，并向 sidebar/workspace roll up [Docs:agents]。
- 为 supported agents 安装 integration，记录 session identity，server restart 后调用 native resume command [Docs:sessions]。
- detach/reattach 保持 server 与 pane processes；保存 layout/cwd/focus；可选保存 screen history [Docs:sessions]。
- 通过 `herdr --remote` 经 SSH 连接远端 server，并桥接 local terminal/clipboard 能力 [Docs:remote]。
- 管理 git worktrees，使多个 agent 在分离 branch/worktree 中工作 [GH]。
- 通过 framed JSON socket API 做查询、mutation、wait、subscription 与 capability negotiation [Docs:socket]。
- 通过 TOML plugins 增加 commands、keybindings、menus 和 context predicates [Docs:plugins]。
- 通过 notifications、sounds、done/blocked rollups 把人类注意力导向需要处理的 pane [Docs:agents]。

不给 5：它不是完整 project/task/review/PR platform，也不负责 agent model/provider、sandbox、permission policy 或最终代码验收；state detection 还存在 UI heuristic 边界。

## 运行环境与资源占用

| 场景 | CPU | 内存 | 存储 | 说明 |
|------|-----|------|------|------|
| 单 workspace / 少量 panes | 未官方量化；Herdr 本体预计低于 agents | 未官方量化 | binary + config/session | 本次没有 benchmark，不能给具体 MB 数字 |
| 多 agent sessions | 主要由 agent CLIs、tests 和 dev servers 决定 | 随 panes、scrollback、processes 增长 | worktrees、dependencies、logs 可达数 GB | Herdr 是承载层，不是主要 compute consumer |
| remote attach | 本地 thin client + 远端 server | 两端均有终端状态 | 远端 workspace 为主 | SSH latency 与 terminal render 影响体验 [Docs:remote] |
| screen history enabled | CPU 增量通常次要 | history/scrollback 增长 | `session-history.json` 保存 pane 内容 | 可能持久化 secrets/tokens，默认关闭 [Docs:sessions] |

- **运行时**：native Rust binary；Linux/macOS 为正式 release targets，Windows x86_64 在 preview/beta 路径 [GH:ci][Docs:windows]。
- **Docker**：`docker_support: false`；terminal multiplexer 需要直接控制 PTY、process tree、shell 与 SSH，容器不是官方主要运行方式。
- **GPU**：Herdr 不需要 GPU；agent/provider 和用户任务另计。
- **外部依赖**：shell、git/SSH、要运行的 coding-agent CLIs；部分 integrations 需要写 agent-specific hook/plugin config。
- **本地验证**：只运行了 offline `cargo metadata`，未编译；source checkout 36 MB（不含 `.git`），Rust target artifacts 未生成 [GH:local-scan][GH:cargo-metadata]。

performance 给 3/5：native Rust + PTY architecture 是正信号，changelog 也持续修复 render、URL scan、memory 和 handshake 问题 [GH:local-scan]；但没有官方 benchmark，也未在本机测 pane 数、scrollback、remote latency 或长期 memory，按证据不足规则不能给 4。

## 上手体验

评分 4/5。README 提供 install script、Homebrew、mise、Nix、binary 等入口；启动 `herdr` 即获得默认 workspace，keybindings 基于 tmux-style prefix。对熟悉 terminal multiplexer 的用户，上手路径短 [GH]。

Agent integration 也给出统一命令：`herdr integration install <agent>`、`herdr integration status`；即便没有 integration，known agent 仍可用 process/screen manifest 检测 [Docs:agents]。这比要求每个 agent 改 API 更实用。

扣分来自 terminal substrate 的复杂性：shell frameworks 自动嵌套 tmux 会遮蔽真实 agent process；Windows beta、SSH、clipboard、kitty graphics、key encoding 和 agent TUI 改版都可能制造边缘问题 [Docs:agents][Docs:windows]。它是 power-user tool，而不是零认知负担 GUI。

## 代码质量

评分 4/5。本地 scan 显示 231 个 Rust files、107 个路径名含 test/spec 的文件与 10 个 workflow files；测试覆盖 terminal parser、PTY、server/headless、detach/reattach、multi-client、live handoff、socket API、agent detection、worktrees、Windows input 等关键边界 [GH:local-scan]。CI/release matrix 对 Linux/macOS 多架构构建，preview 还覆盖 Windows；review 时近期 CI 成功 [GH:ci]。

代码组织体现明确边界：PTY actor/backend、terminal state/input/render、server/client protocol、persistence、agent detection/integration、socket API、plugins、remote、workspace/worktree 与 platform-specific modules 分离 [GH:local-scan]。`cargo metadata --locked --no-deps --offline` 成功，lock/manifest 自洽 [GH:cargo-metadata]。

不给 5：本次未本地编译或运行 tests；项目极年轻，changelog 中仍频繁修复 process detection、input encoding、restore、render、memory 和 remote handshake。结构好不等于边缘条件已穷尽。

## 可扩展性

评分 4/5。

Herdr 有三层扩展面：

1. **agent integrations/manifests**：hooks/plugins 报告 lifecycle/session，screen manifests 做 detection；local overrides 可以替换规则 [Docs:agents]；
2. **socket API**：用 framed JSON 控制 panes/workspaces/tabs/agents，读 output、send input、wait state、订阅 events；schema/version/capabilities 允许 clients 协商 [Docs:socket]；
3. **TOML plugins**：定义 shell commands、keybindings、command palette/menu 与 context predicates [Docs:plugins]。

不给 5，因为 plugin API v1 本质上执行本地 shell command，没有 sandbox；新增完整 agent identity 仍需 binary update，remote manifest 只能更新已有 agent 的规则 [Docs:agents][Docs:plugins]。

## 文档质量

评分 5/5。官方文档不仅列功能，还澄清容易混淆的 semantics：

- detach 与 restart 的进程存活区别；
- layout snapshot、screen replay、native resume、live handoff 的不同保证；
- lifecycle hooks 与 screen manifests 谁拥有状态 authority；
- blocked detection 何时会保守降级；
- socket framing、errors、capability negotiation；
- plugins 的 shell execution 风险；
- Windows beta 和 remote attach 限制 [Docs:sessions][Docs:agents][Docs:socket][Docs:plugins][Docs:windows]。

这种 failure semantics 文档比营销 feature list 更有价值。唯一风险是项目迭代太快，docs 需要跟随 0.x release 频繁校验；本次使用的是与 local commit 同步的 repository docs。

## 社区与成熟度

| 维度 | 评分 | 说明 |
|------|------|------|
| 社区活跃度 | 4/5 | 15.2k stars、1,007 forks、45 contributors、61 open issues/0 PRs、近期密集 release/CI；但贡献仍高度集中于作者 [GH:api][GH:issues-prs][GH:contributors][GH:ci] |
| 成熟度 | 2/5 | 2026-03 建仓，review 时仅约四个月、v0.7.3；Windows beta、handoff experimental、agent UI/detection 持续变化 [GH:api][GH:releases][Docs:sessions][Docs:windows] |

Stars 是 adoption interest，不是运行年限。Herdr 的维护速度令人信服，但尚无跨年度兼容、长期 session durability 或大规模团队使用证据。

## 安全与风险

评分 3/5。GitHub advisories API 为空，但项目没有被 community profile 检测到 SECURITY.md；不能把“0 advisories”当作安全审计 [GH:advisories][GH:community]。

主要风险边界：

- **socket API = local control plane**：client 可读 terminal output、发 keys/text、spawn commands、改变 workspace；socket 文件权限就是安全边界 [Docs:socket]；
- **plugins = arbitrary local shell**：plugin commands 在用户权限下执行，安装第三方 plugin 等同于信任代码 [Docs:plugins]；
- **screen history 会落盘敏感信息**：可能包含 tokens、prompts 和 command output，因此默认关闭 [Docs:sessions]；
- **agent integrations 修改第三方配置**：hooks/plugins 需要被审计并可回滚 [Docs:agents]；
- **remote manifests 自动更新 detection rules**：虽不是任意新 agent binary，但仍是 remote data affecting local state classification 的供应链入口，可关闭 [Docs:agents]；
- **SSH remote attach**：继承 SSH host trust、agent forwarding、remote filesystem 和 server binary 的风险 [Docs:remote]。

建议把 Herdr 运行在单用户账号；不共享 socket/config directory；screen history 仅按需开启；plugins/integrations 逐个审计；远端主机使用独立 SSH key 与最小权限；不要让 untrusted tenant 进入同一 Herdr server。

## 学习价值

Herdr 是研究 agent-native terminal infrastructure 的好样本。它面对的不是 LLM 算法，而是一组很“系统”的问题：PTY ownership、terminal parser/render、multi-client protocol、process-tree detection、session semantics、remote SSH、input encoding、cross-platform ConPTY、local socket API，以及如何把不完整的 agent lifecycle signals 组合成可理解的人类状态。

最值得学习的设计不是彩色 sidebar，而是它对保证强度的分层：live process、snapshot、history replay、native resume、best-effort handoff 各自不混淆；screen heuristic 只决定 visible state，不自动执行破坏性动作。名分既定，而后可用。它尚年轻，但对“Agent 应运行在什么 substrate 上”给出了比聊天窗口更严肃的答案。
