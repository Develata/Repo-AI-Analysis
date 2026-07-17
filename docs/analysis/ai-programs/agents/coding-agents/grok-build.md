---
title: "Grok Build"
created: 2026-07-16
updated: 2026-07-16
type: repository-analysis
repo_url: "https://github.com/xai-org/grok-build"
category: "ai-programs/agents/coding-agents"
tags: ["coding-agent", "rust", "grok", "xai", "tui", "cli", "acp", "mcp", "skills", "plugins", "sandbox"]
previous_repo: ""
successor: ""
primary_language: "Rust"
license: "Apache-2.0"
stars: 11678
forks: 1952
last_checked: 2026-07-16
last_verified: 2026-07-16
evidence: "Current GitHub GraphQL/REST metadata, advisory/tree scan, official source README/SECURITY/CONTRIBUTING and xAI docs/changelog; public snapshot not locally built and product not independently benchmarked"
archived_reason: ""
docker_support: false
gpu_required: false
estimated_cpu: "local CPU mainly handles TUI/agent orchestration and spawned tools; hosted model inference is remote"
estimated_memory: "not independently benchmarked; Rust CLI plus workspace watchers, sessions, subprocesses and previews"
estimated_storage: "official installers provide platform binaries outside GitHub Releases; installed size was not independently measured in this review"
status: active
ratings:
  capability: 4
  usability: 4
  performance: 3
  code_quality: 3
  documentation: 4
  community: 1
  maturity: 1
  extensibility: 4
  security: 3
  recommendation: 3
overall_score: 3.0
sources:
  - "[GH] https://github.com/xai-org/grok-build"
  - "[GH:api] GitHub GraphQL/REST queried 2026-07-16 UTC at 8adf9013a0929e5c7f1d4e849492d2387837a28d; created=2026-07-14, stars=11678, forks=1952, open issues=0, open PRs=0, merged PRs=0, releases=0, first contributors page=1, license=Apache-2.0"
  - "[GH:languages] GitHub GraphQL queried 2026-07-16; Rust=51701726 bytes of 51936688 measured total, plus small Python/JavaScript/Shell/PowerShell components"
  - "[GH:tree] GitHub recursive tree API scanned 2026-07-16 UTC at 8adf9013a0929e5c7f1d4e849492d2387837a28d; 2736 blobs, 81 Cargo.toml files, 0 public workflow files and 481 test-like paths by filename/directory heuristic; heuristic is not coverage"
  - "[GH:advisories] https://api.github.com/repos/xai-org/grok-build/security-advisories?per_page=100 queried 2026-07-16; returned no published repository advisories in this check"
  - "[GH:readme] https://github.com/xai-org/grok-build/blob/8adf9013a0929e5c7f1d4e849492d2387837a28d/README.md fetched 2026-07-16; states source is periodically synced from the SpaceXAI monorepo, documents build requirements/layout and says external contributions are not accepted"
  - "[GH:contributing] https://github.com/xai-org/grok-build/blob/8adf9013a0929e5c7f1d4e849492d2387837a28d/CONTRIBUTING.md; accepts issues/feedback but not external PRs because the public repository is a monorepo export"
  - "[GH:security] https://github.com/xai-org/grok-build/blob/8adf9013a0929e5c7f1d4e849492d2387837a28d/SECURITY.md; routes vulnerability reports to xAI's HackerOne program"
  - "[Docs:overview] https://docs.x.ai/build/overview extracted 2026-07-16; documents TUI, headless/streaming JSON, ACP, browser/API-key auth and custom OpenAI-compatible models"
  - "[xAI:product] https://x.ai/cli extracted 2026-07-16; lists plan mode, subagents, skills, plugins, hooks, MCP, AGENTS.md, memory, code search, git, web, headless and sandboxed execution as product capabilities"
  - "[xAI:changelog] https://x.ai/build/changelog extracted 2026-07-16; latest public product version shown is beta v0.2.101, with dense 0.1.x/0.2.x changes including ACP, sandbox profiles, plugins, hooks, headless mode and many bug fixes"
  - "[GH:third-party] https://github.com/xai-org/grok-build/blob/8adf9013a0929e5c7f1d4e849492d2387837a28d/THIRD-PARTY-NOTICES; records in-tree ports including openai/codex and sst/opencode tool implementations"
  - "[WikiLocal:comparisons] Local wiki positioning consulted 2026-07-16: ai-programs/agents/coding-agents/codex.md, gemini-cli.md, claude-code.md and opencode.md; comparison rows were not externally re-audited under the same 10 dimensions"
---

# Grok Build

> SpaceXAI/xAI 官方 Rust terminal coding agent：TUI、headless 与 ACP 共用 agent runtime，能力面已很宽，但公开仓库只是刚开放的 monorepo snapshot，并非开放社区主仓。
>
> **状态**: `active` · **总分**: 3.0/5 · **推荐度**: 3/5
> **核验版本**: product beta `v0.2.101` · source commit `8adf901` · 2026-07-16

## 一句话总结

Grok Build 是值得观察和试用的官方 Rust coding agent，但“11.6k stars + 99% Rust”不能抵消 public repo 仅两次同步、零公开 releases/workflows、拒绝外部 PR 的证据缺口。

## 总体评价

Grok Build 的 product surface 已相当完整：full-screen TUI、headless/streaming JSON、ACP、file editing、shell、web search、long-running tasks、plan/subagents、skills/plugins/hooks、MCP、AGENTS.md、memory、git/worktrees 与 sandbox 都有官方说明 [GH:readme][Docs:overview][xAI:product]。源代码主语言约 99.5% Rust，并按 pager/TUI、shell runtime、tools、workspace、config/MCP/sandbox 等 crates 分层 [GH:languages][GH:readme]。

但应区分 **产品历史** 与 **公开仓库成熟度**。官方 changelog 已到 beta 0.2.101，显示产品在开源前经历了大量 0.1.x/0.2.x 迭代；GitHub 仓库却创建于 2026-07-14，没有 GitHub releases、issues/PR 社区历史或公开 workflows [xAI:changelog][GH:api][GH:tree]。这不是“产品只有两天”，而是“公开源码的 provenance/review history 很短”，两者皆不可混同。

README 与 CONTRIBUTING 说明源码由内部 SpaceXAI monorepo 定期同步，外部贡献不接受，公开 issue 仅用于反馈 [GH:readme][GH:contributing]。因此它是 source-available/open-source inspection surface，但不是社区共建的 canonical development repository。

## 推荐度：3/5

对 Grok 用户、ACP client 开发者和 Rust agent 架构研究者，值得试用；其功能密度、跨平台 binary、custom model 与 extensibility 很有吸引力 [Docs:overview][xAI:product]。

不给 4 的核心不是品牌判断，而是 evidence asymmetry：官方 feature/docs 很强，public repository history、CI、release artifacts、external review 和 issue triage 证据却极薄。采用者可以评估当前 snapshot，却难以从 GitHub 验证每个产品 release 与源码同步的完整链条。

## 优势

1. **能力面接近 full-stack coding agent**：interactive/headless/ACP、subagents、skills/plugins/hooks、MCP、memory、code review、git/worktrees 与 background tasks 齐全 [xAI:product][Docs:overview]。
2. **Rust 主体清晰**：约 99.5% measured language bytes 是 Rust，runtime/TUI/tools/workspace 边界明确 [GH:languages][GH:readme]。
3. **模型并非完全锁定 Grok**：官方 overview 支持 custom OpenAI-compatible model endpoint 与 API key [Docs:overview]。
4. **跨平台 product polish 信号强**：changelog 长期处理 Windows/terminal/tmux/clipboard/Wayland、ACP、session、rendering 与 compaction 等边缘问题 [xAI:changelog]。
5. **扩展 surface 丰富**：plugins/marketplaces、skills、hooks、MCP、custom agents/models、AGENTS.md 与 ACP 形成多层 extension model [xAI:product][xAI:changelog]。

## 劣势

1. **公开仓库历史极薄**：仓库创建时间很短，且没有公开 release/PR/workflow history 可用于追踪设计演化 [GH:api][GH:tree]。
2. **不接受外部 PR**：community 无法通过 GitHub code review 参与，community score 与 star velocity 必须分开 [GH:contributing]。
3. **没有公开 CI/workflows 与 GitHub releases**：源码中虽有大量 test-like paths，但本次不能看到公开 gate 或 source-to-binary provenance [GH:tree][GH:api]。
4. **仍是 beta 0.2.x**：changelog 最新到 `v0.2.101`，变更与 bugfix 很密，API/behavior 尚未稳定 [xAI:changelog]。
5. **来源复杂**：in-tree ports 包含 Codex/OpenCode tool implementations，学习与审计时需区分 first-party design、ported code 与 vendored source [GH:third-party]。
6. **本次未实际安装/benchmark**：官方 product claims 不能替代真实 coding quality、token efficiency 与 sandbox escape testing。

---

## 适合什么场景

- 已使用 Grok 4.5/xAI，想要官方 terminal harness、browser/API-key auth 与统一 TUI。
- 需要 headless JSON、ACP 或多 agent/worktree automation 的团队原型。
- 想研究大规模 Rust TUI/agent runtime、hooks/plugins/skills/MCP/ACP 如何组合。
- 愿意把 public repo 当可审计 snapshot，而不是开放开发主仓。
- 能 pin product version，并在 disposable branch/container 中验证升级行为。

## 不适合什么场景

- 需要开放 PR、公开 design review、可追溯 source release tag 与 reproducible build provenance 的组织。
- 把 GitHub stars 当作长期稳定/社区共建证明的选型流程。
- 需要稳定 1.x API 与低频行为变化的企业基线。
- 无法隔离高权限 agent 的 secrets、network、shell 与 filesystem access。
- 希望完全离线：custom local endpoint 可配置，但 product auth、updates 或其他 services 的离线边界需另行实测。

## 与类似项目对比

| 项目 | 定位 | 相对本项目 |
|---|---|---|
| Grok Build | xAI 官方 Rust coding agent | 本项目；功能面强、Rust 比例高，但 public repo 是封闭 monorepo 的新 snapshot |
| Codex | OpenAI 官方 Rust coding agent | Codex 的 open repo history、releases、App Server 与 community evidence 更完整；Grok Build 的 TUI/plugins/subagents product 面很强 |
| Claude Code | Anthropic 官方 coding agent | Claude Code 的模型整合与产品成熟度更强，但核心闭源；Grok Build 提供大量 Rust source inspection surface |
| Gemini CLI | Google 官方开源 terminal agent | Gemini CLI 社区开发路径更开放；Grok Build 当前不接受外部代码贡献 |
| OpenCode | 多模型开源 coding agent | OpenCode 更 community/vendor-neutral；Grok Build 有 xAI model–product co-design 与官方服务支持 |

上述项目依据本地 wiki 既有条目的定位与分类语境做 comparison，未在本轮按同一 10 维度重新抓取外部事实 [WikiLocal:comparisons]。

---

## 它能做什么

评分 4/5。

官方资料覆盖 interactive TUI、headless prompt/streaming JSON、ACP stdio、files/edit/shell/web、long-running/background tasks、plan mode、subagents、skills、plugins/marketplaces、hooks、MCP、AGENTS.md、memory、code search、git/worktrees、review 与 sandbox [Docs:overview][xAI:product][xAI:changelog]。这已覆盖主流 coding agent 的主要场景。

不给 5，是因为完整能力来自 product docs/changelog，而本轮未逐项运行；public snapshot 与当前 released binary 的精确对应关系也缺少 GitHub tag/release chain。功能广度 4，不能把 claims 提升成全场景 verified 5。

## 运行环境与资源占用

评分 3/5。

| 场景 | CPU / GPU | 内存 | 存储 | 说明 |
|---|---|---|---|---|
| released CLI + hosted Grok | 本地主要做 TUI/orchestration；GPU 不需要 | 未独立 benchmark | 官方外部 installer，未测 installed size | 模型推理主要远端 [Docs:overview] |
| headless/ACP | 关闭不必要 UI 路径可能更轻 | 未独立 benchmark | 同一 binary/runtime | changelog 显示曾专门减少 headless watchers 的 CPU/IO [xAI:changelog] |
| source build | Rust compile CPU/内存较高 | 未测 | 2736 blobs、81 manifests，workspace closure 较大 | README 明说 full-workspace build 慢，建议 per-crate [GH:readme][GH:tree] |

Rust runtime 有潜在效率优势，但 repo 自己承认 full workspace 较重，changelog 也记录过 multi-GB image/session memory bug 与 output caps 等资源问题，虽已修复仍说明 workload surface 复杂 [xAI:changelog]。无 fresh benchmark，给 3。

## 上手体验

评分 4/5。

官方提供 macOS/Linux shell installer 与 Windows PowerShell installer；首次运行 browser auth，非浏览器环境可用 `XAI_API_KEY`，headless 与 custom model 配置也有短例 [GH:readme][Docs:overview]。这些使首次获得价值的路径很短。

扣分来自 product complexity：plugins、hooks、MCP、skills、sandbox profile、ACP、自定义模型与内部/外部 auth 的组合需要文档；source build 还依赖 pinned Rust、DotSlash 与 protoc，Windows source build 仅 best-effort [GH:readme]。

## 代码质量

评分 3/5。

源树的 crate decomposition 清晰：binary composition root、TUI、shell runtime、tools、workspace 与其他 config/MCP/sandbox crates；2736 blobs 中有 481 个 test-like paths，Rust 占比极高 [GH:readme][GH:tree][GH:languages]。根 workspace 统一 lints/profiles，README 给出 per-crate check/test/clippy/fmt commands。

但按统一边界只能给 3：本轮没有 coverage 数据或实际 build；GitHub 没有公开 workflows；两次 snapshot commit 不能展示 review history；root Cargo.toml 是内部生成物且 public repo 非 canonical development repo [GH:tree][GH:readme][GH:contributing]。

## 可扩展性

评分 4/5。

Grok Build 提供 plugins/marketplaces、skills、hooks、MCP、custom agents/models、AGENTS.md、ACP 与 headless structured output，多数还进入 inspect/config/changelog 主线 [Docs:overview][xAI:product][xAI:changelog]。这不只是几个 flags，而是完整 extension surface；但 public repo 缺少稳定 plugin API/compatibility policy 与外部集成实测，因此保守给 4。

风险是扩展越多越难审计：plugin/hooks/MCP/custom endpoint 都可能引入执行与数据外流边界。这里的 4 分描述“可扩展”，不是“默认安全”。

## 文档质量

评分 4/5。

公开 README 说明 install/build/layout/development/contribution/license；online overview 给 quickstart、headless、ACP、custom models；product page 和长 changelog 能追踪功能与大量边缘修复 [GH:readme][Docs:overview][xAI:product][xAI:changelog]。仓库还包含 user-guide subtree [GH:readme]。

不给 5，是因为 public source 与 released product 的 mapping、reproducible build、公开 CI/release artifacts 和 external contribution workflow 不完整。用户文档强，开源工程文档边界较弱。

## 社区与成熟度

社区评分 1/5，成熟度评分 1/5。

11.6k stars 在数日内形成，说明 attention 极强；但这里的 community score 限定为 **public development community**：仓库创建时间很短、0 merged/open PR，external contributions 明确不接受 [GH:api][GH:contributing]。社区不能仅用 stars 评分，所以按“无法参与且无公开 interaction history”给 1。

产品 beta changelog 很长，说明它并非刚写出来；但当前仍是 0.2.x、dense bugfix/feature cadence，公开源码又没有长期 tag/review history [xAI:changelog][GH:api]。按项目成熟度边界仍给 1，而不是因 vendor 背书上调。

## 安全与风险

评分 3/5。

正面信号包括：product 明确提供 sandboxed execution，changelog 记录 custom sandbox profiles、kernel-level read/write deny、folder trust 与 glob deny lists；SECURITY.md 把私密漏洞报告指向 xAI HackerOne [xAI:product][xAI:changelog][GH:security]。本次 advisories API 未返回 repository advisory，但空结果不是无漏洞证明 [GH:advisories]。

不给 4 的原因是公开 security history 太短、没有 public CI/release chain，且 agent 同时拥有 shell、files、network、plugins/hooks/MCP 等高风险 surface。应以 restricted workspace、deny secrets、network control、plugin review、human approvals 与 version pinning 作为采用前提。

## 学习价值

Grok Build 值得学，但要带着 provenance map：

1. **产品代码切片如何开源**：`SOURCE_REV` + generated workspace + periodic sync 如何暴露 inspectable closure，同时保留内部 monorepo 为 canonical source [GH:readme][GH:contributing]。
2. **大规模 Rust agent UX**：TUI、ACP/headless、background tasks、subagents、session persistence 与 terminal edge cases 的工程处理 [xAI:changelog]。
3. **代码复用边界**：THIRD-PARTY-NOTICES 明示 Codex/OpenCode ports，适合研究兼容实现与 Apache notice obligations [GH:third-party]。

其最重要的判断课不是“stars 是否高”，而是：**source available、open license、open development、reproducible release 是四个不同命题**。Grok Build 当前明确满足前两者，后两者证据不足。