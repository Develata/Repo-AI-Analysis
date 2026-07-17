---
title: "Open Interpreter"
created: 2026-07-16
updated: 2026-07-16
type: repository-analysis
repo_url: "https://github.com/openinterpreter/openinterpreter"
category: "ai-programs/agents/coding-agents"
tags: ["coding-agent", "rust", "codex-fork", "terminal", "open-models", "multi-provider", "harness-emulation", "acp", "sandbox"]
previous_repo: ""
successor: ""
primary_language: "Rust"
license: "Apache-2.0"
stars: 65937
forks: 5671
last_checked: 2026-07-16
last_verified: 2026-07-16
evidence: "Current GitHub GraphQL/REST metadata, releases, advisories and repository-tree scan + official README/docs; current Rust rewrite not locally built or benchmarked"
archived_reason: ""
docker_support: false
gpu_required: false
estimated_cpu: "low local orchestration CPU with hosted models; local-provider inference is model-dependent"
estimated_memory: "not independently benchmarked; large Codex-derived Rust/V8 runtime plus spawned tools, while local-model memory is model-dependent"
estimated_storage: "rust-v0.0.26 compressed release packages are roughly 166-262 MB depending on platform and compression"
status: active
ratings:
  capability: 4
  usability: 4
  performance: 3
  code_quality: 4
  documentation: 4
  community: 3
  maturity: 1
  extensibility: 4
  security: 2
  recommendation: 3
overall_score: 3.2
sources:
  - "[GH] https://github.com/openinterpreter/openinterpreter"
  - "[GH:api] GitHub GraphQL/REST queried 2026-07-16 UTC at be37756b53f91401e13019ffce41c02a0682cd89; repository isFork=false, created=2023-07-14, stars=65937, forks=5671, open issues=265, open PRs=7, merged PRs=389, releases=57, first contributors page=100, license=Apache-2.0"
  - "[GH:languages] GitHub GraphQL queried 2026-07-16; Rust=40928124 bytes of 42435424 measured total, Python=1106913, TypeScript=86475"
  - "[GH:release] https://github.com/openinterpreter/openinterpreter/releases/tag/rust-v0.0.26 and Releases API queried 2026-07-16; latest Rust version 0.0.26 published 2026-07-16; five successive 0.0.22-0.0.26 tags were published 2026-07-14 through 2026-07-16; compressed assets roughly 166-262 MB"
  - "[GH:tree] GitHub recursive tree API scanned 2026-07-16 UTC at be37756b53f91401e13019ffce41c02a0682cd89; 5536 blobs, 137 Cargo.toml files, 25 workflow files and 988 test-like paths by filename/directory heuristic; most structure is Codex-derived and the heuristic is not coverage"
  - "[GH:advisories] https://api.github.com/repos/openinterpreter/openinterpreter/security-advisories?per_page=100 queried 2026-07-16; returned no published repository advisories in this check"
  - "[GH:readme] https://github.com/openinterpreter/openinterpreter/blob/be37756b53f91401e13019ffce41c02a0682cd89/README.md and GitHub page extracted 2026-07-16; states that current Open Interpreter is a new Rust version, a fork of OpenAI Codex, optimized for low-cost/open models"
  - "[GH:security] https://github.com/openinterpreter/openinterpreter/blob/be37756b53f91401e13019ffce41c02a0682cd89/SECURITY.md; current file still says 'keep Codex secure' and directs reports to OpenAI Bugcrowd, creating an unclear/misdirected reporting boundary for this separate project"
  - "[Docs:overview] https://www.openinterpreter.com/docs/terminal extracted 2026-07-16; describes a terminal coding agent built on Codex with provider-agnostic files/edit/command workflow and sandbox escalation"
  - "[Docs:harness] https://www.openinterpreter.com/docs/terminal/harness extracted 2026-07-16; documents native, claude-code, kimi-cli, deepseek-tui, qwen-code, swe-agent and minimal harness modes and states that it does not shell out to those external CLIs"
  - "[Docs:providers] https://www.openinterpreter.com/docs/terminal/providers extracted 2026-07-16; documents responses/chat/messages wire APIs, built-in OpenAI/Bedrock/Ollama/LM Studio providers and generated hosted-provider catalog"
  - "[WikiLocal:comparisons] Local wiki positioning consulted 2026-07-16: ai-programs/agents/coding-agents/codex.md, opencode.md, cline.md and gemini-cli.md; comparison rows were not externally re-audited under the same 10 dimensions"
---

# Open Interpreter

> 基于 OpenAI Codex 分叉的新 Rust coding agent：重点不是重造全部 runtime，而是让低成本/开放模型获得可切换的 provider 与 harness-shaped behavior。
>
> **状态**: `active` · **总分**: 3.2/5 · **推荐度**: 3/5
> **核验版本**: `rust-v0.0.26` · commit `be37756` · 2026-07-16

## 一句话总结

Open Interpreter 适合研究“同一模型在不同 coding-agent harness 下为何表现不同”，但当前 Rust rewrite 只有 `0.0.26`，其 6.6 万 stars 主要代表长期项目品牌与历史积累，不能当作新 Rust 版本已经成熟的证明。

## 总体评价

当前 `openinterpreter/openinterpreter` 已不是人们熟悉的旧 Python computer-use project 的简单延续。官方 README 与 docs 明确把它定义为 **built on / fork of Codex** 的 terminal coding agent，目标是对低成本与开放模型优化，并通过 harness mode 改变 model-facing prompt、tool schema、message conversion 与 response handling [GH:readme][Docs:overview][Docs:harness]。

它最有辨识度的能力是 harness emulation：native/Codex-compatible、Claude Code、Kimi CLI、DeepSeek TUI、Qwen Code、SWE-agent 与 minimal 模式都在同一 runtime 内映射；文档明确说明这不是 shell out 到真实外部 CLI，而是 Open Interpreter 自己构造兼容 prompt/tools/transport [Docs:harness]。这使它既是 coding agent，也是研究 harness–model interaction 的实验平台。

但 provenance 必须说清。GitHub API 的 `isFork=false` 只是平台关系字段；项目自己的 README 明说是 Codex fork，仓库仍保留 `codex-rs` 命名与大量 Codex-derived crates [GH:api][GH:readme][GH:tree]。因此其代码质量很大程度继承 Codex 基础，而 stars、issues 和历史记录也混合了 2023 年以来旧 Open Interpreter 与新 Rust 版本的不同阶段。

## 推荐度：3/5

推荐度是“值得研究和小范围试用”，不是默认替代 Codex。对希望用 Kimi/Qwen/DeepSeek/Anthropic/OpenRouter 等不同模型、比较 harness 影响或开发 provider compatibility 的用户，它有独特价值 [Docs:harness][Docs:providers]。

不给 4 的原因有三：新 Rust 版本仍是 0.0.x，短时间连续发布多个版本；大部分架构来自快速追随的 Codex fork，长期 merge/update burden 尚未证明；SECURITY.md 仍指向 OpenAI Bugcrowd 且使用 Codex 名称，说明独立项目的安全治理边界尚未收拢 [GH:release][GH:security]。

## 优势

1. **Harness 研究价值独特**：把 prompt、tools、wire API 与 response conversion 作为显式可切换层，而不是只换 model name [Docs:harness]。
2. **Provider surface 很广**：支持 Responses、Chat Completions、Anthropic Messages，内置 hosted/local provider catalog [Docs:providers]。
3. **继承规模较大、结构完整的 Codex 工程骨架**：Rust workspace、sandbox、TUI、App Server、tools 与大量 tests/workflows 提供了很强的结构基础 [GH:tree]。
4. **跨平台 binary 交付**：macOS、Windows 与 Linux musl assets 都存在，安装入口直接 [GH:release]。
5. **Apache-2.0 且主体确为 Rust**：当前语言统计约 96% Rust，可审计性强 [GH:api][GH:languages]。

## 劣势

1. **Rust rewrite 极新**：当前版本 `0.0.26`，2026-07-14 至 07-16 连发 0.0.22-0.0.26，稳定性尚不能由 release 速度证明 [GH:release]。
2. **stars 有 lineage contamination**：仓库创建于 2023，6.6 万 stars 包含旧 Python Open Interpreter 的品牌/社区历史，不是当前 Rust fork 的独立采用量 [GH:api][GH:readme]。
3. **fork maintenance burden 大**：Codex-derived workspace 有 137 个 manifests、5536 blobs；上游高速变化时，保持差异可维护并不容易 [GH:tree]。
4. **安全报告路径不清**：SECURITY.md 仍要求向 OpenAI Bugcrowd 报告“Codex”问题，未清楚说明 Open Interpreter 自身负责的 disclosure process [GH:security]。
5. **大型 binary 与 runtime**：release packages 约 166-262 MB compressed，远非轻量单 binary 的典型印象 [GH:release]。
6. **本次没有真实模型/harness benchmark**：官方称为低成本模型优化，但本文未独立复现其 quality/cost improvement。

---

## 适合什么场景

- 比较同一 open/cheap model 在 native、Kimi、Qwen、DeepSeek、SWE-agent 或 Claude-shaped harness 下的表现。
- 需要 provider-agnostic terminal coding agent，同时愿意接受 pre-1.0 快速变化。
- 想研究 Codex fork 如何加入 wire-protocol 与 harness compatibility layer。
- 使用 Ollama/LM Studio 或多个 hosted gateways，希望从统一 TUI 切换。
- 愿意在 disposable branch/container 中做小规模试验并保留人工 review。

## 不适合什么场景

- 需要稳定 API、企业级安全 reporting、长期兼容承诺的生产标准工具。
- 仅因“65k stars”就希望获得同等规模 Rust 用户验证的场景。
- 不愿承担 Codex fork 与 fast-moving upstream 的升级/差异风险。
- 希望一个独立原创 runtime，而不是 Codex-derived harness laboratory。
- 无法对 shell/file/network 权限建立 sandbox、approval 与 secret isolation 的环境。

## 与类似项目对比

| 项目 | 定位 | 相对本项目 |
|---|---|---|
| Open Interpreter | Codex-derived multi-provider/harness coding agent | 本项目；harness emulation 与低成本模型适配是核心差异 |
| Codex | OpenAI 官方 Rust coding agent | Codex 有官方 model–harness co-design 与更清晰安全治理；Open Interpreter 更 provider/harness-neutral |
| OpenCode | 模型无关 terminal coding agent | OpenCode 是独立产品路线；Open Interpreter 更明确继承 Codex runtime 并模拟多个 harness |
| Cline | VS Code/CLI 多模型 coding agent | Cline 更偏编辑器 product/UX；Open Interpreter 更偏 terminal 与 harness experiments |
| Gemini CLI | Google 官方 terminal agent | Gemini CLI 与 Gemini ecosystem 联合优化；Open Interpreter 强调跨 provider 与 open/cheap models |

上述项目依据本地 wiki 既有条目的定位与分类语境做 comparison，未在本轮按同一 10 维度重新抓取外部事实 [WikiLocal:comparisons]。

---

## 它能做什么

评分 4/5。

当前 docs 说明它能读取/编辑文件、执行命令、管理 sessions、通过 ACP 接入 editor，并在多种 provider/wire API/harness 之间切换 [Docs:overview][Docs:harness][Docs:providers]。各 harness 还映射 Bash/PowerShell、Read/Write/Edit、Glob/Grep、web、todo、plan、subagents 或 discussion/command loop 等不同 tool surface [Docs:harness]。

不给 5，是因为能力声明与实现结构未在本轮逐项运行；尤其不同 provider 的兼容性、local model quality、computer-use/QA skill 与 sandbox platform behavior 需要实际测试。功能面全面，可靠性证据不足。

## 运行环境与资源占用

评分 3/5。

| 场景 | CPU / GPU | 内存 | 存储 | 说明 |
|---|---|---|---|---|
| hosted model | 本地主要 orchestration；GPU 不需要 | 未独立 benchmark | release package 约 166-262 MB compressed | 大包与 Codex/V8-derived runtime 有关 [GH:release][GH:tree] |
| Ollama/LM Studio | 由本地模型决定，GPU 可选 | 模型权重/context 主导 | binary + model weights | provider docs 只证明接口，不证明任一模型可在低配置流畅运行 [Docs:providers] |
| source development | Rust/Bazel/Node mixed workspace | build 峰值预计较高，未测 | 5536 tracked blobs，workspace 很大 | contributor 成本远高于普通 CLI [GH:tree] |

Rust 主体不等于小体积；当前 release package 明显偏大，完整 source build 也复杂。云模型时 runtime 尚可，local model 与 spawned build/test 可能主导资源，因此给 3。

## 上手体验

评分 4/5。

官方 docs 给出 terminal quickstart、provider setup、sandbox/config 与 `interpreter` 入口；release 同时提供三大平台 packages [Docs:overview][GH:release]。TUI 里可通过 `/model` 与 `/harness` 切换，概念入口清楚 [GH:readme][Docs:harness]。

但用户必须理解 provider、wire API 与 harness compatibility；例如 `messages` 只适配 Claude-shaped harness，Responses 与 chat harness 的 route 不同 [Docs:harness][Docs:providers]。这不是零认知配置，故给 4 而非 5。

## 代码质量

评分 4/5。

固定 commit tree 显示 5536 blobs、25 workflow files、988 test-like paths 与 137 个 Cargo manifests [GH:tree]。这些是很强的结构与工程纪律信号。

不过绝大部分骨架来自 Codex，不能把所有质量 credit 当作 Open Interpreter 自己重新建立；当前 fork-specific harness/provider changes 的覆盖率未单独核验，也未运行 tests。大型 fork 的同步复杂度与 0.0.x 节奏使 code_quality 保守停在 4。

## 可扩展性

评分 4/5。

Provider catalog、custom endpoints、三种 wire API 与 multiple harness modes 提供广泛定制面 [Docs:harness][Docs:providers]。对实验者而言，模型、transport 与 harness 是可组合变量。

不给 5，因为这更像“丰富 configuration/compatibility surface”，而不是一个有稳定第三方 plugin ABI、独立治理与长期兼容承诺的成熟 extension ecosystem。深改仍可能要求维护 fork。

## 文档质量

评分 4/5。

官方 terminal docs 已覆盖 overview、install、quickstart、config、CLI、harness、providers、sandbox 等，harness 与 provider 页面尤其具体，列出 route compatibility、default inference 与 tool mapping [Docs:overview][Docs:harness][Docs:providers]。

扣分来自 fork 后治理文档尚未完全收拢：SECURITY.md 明显保留 OpenAI/Codex 文案与 reporting path [GH:security]。用户文档强，但项目治理文档尚未完全完成独立项目化。

## 社区与成熟度

社区评分 3/5，成熟度评分 1/5。

社区指标看似巨大：65937 stars、5671 forks、265 open issues；品牌自 2023 年延续，仍有 active release 和 docs [GH:api][GH:release]。但 current Rust version 的独立社区规模无法从累积 stars 分离，open PR 仅 7，也不能把 legacy issues/usage 直接映射成 Rust fork adoption。因此社区按当前 Rust rewrite 证据保守给 3。

成熟度则明确为 1：当前 `0.0.26`，数日内连续发布多个 0.0.x 版本，fork-specific API/behavior 随时可能变化 [GH:release]。Codex 底座成熟度不能替代 Open Interpreter 差异层的成熟度。

## 安全与风险

评分 2/5。

正面是 Codex-derived runtime 包含 sandbox/approval 等安全结构，docs 也把 sandbox escalation 纳入产品行为 [Docs:overview][GH:tree]。本次 GitHub advisories API 未返回已发布 repository advisory，但这只代表当前查询为空 [GH:advisories]。

主要扣分是 disclosure ownership 不清：Open Interpreter 的 SECURITY.md 仍写“keep Codex secure”，把 validated vulnerabilities 指向 OpenAI Bugcrowd，并链接 OpenAI Codex security docs [GH:security]。对一个独立 fork，这可能让 fork-specific vulnerability 被错误路由。加之 agent 可执行 shell、读写文件并接触 untrusted content，当前不应给 3/4。部署时应使用 disposable workspace/container、最小凭证、网络限制和强制 human review。

## 学习价值

Open Interpreter 的学习价值高于其当前采用推荐度：

1. **Harness 不只是 system prompt**：它同时涉及 wire API、tool schema、message conversion、response parser 与 model defaults [Docs:harness]。
2. **Fork economics**：复用 Codex 可快速获得大量能力，却同时继承庞大 workspace、upstream velocity、security process 与 merge burden [GH:tree][GH:security]。
3. **Stars 的时间结构**：repository-level stars 是整个 lineage 的积分，不自动等于某次 rewrite 的 adoption。评价 agent 时必须把 brand、code generation 与 current release 分开 [GH:api][GH:readme]。

它值得作为 research object 与 low-cost-model harness lab；若要成为默认生产 agent，还需时间证明独立治理、稳定性与安全响应。