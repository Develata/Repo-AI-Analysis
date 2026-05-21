---


title: "AGENTS.md"
created: 2026-05-20
updated: 2026-05-21
type: repository-analysis
repo_url: "https://github.com/agentsmd/agents.md"
category: "ai-programs/agent-infrastructure"
tags: ["agent-infrastructure", "repository-convention", "agent-instructions", "coding-agents", "markdown", "open-format"]
overall_score: 4.0
recommendation: "建议作为大多数 agent-facing repositories 的默认 lightweight instruction convention；它不是复杂协议，而是低摩擦、工具无关、正在被多种 coding-agent 工具识别或声明兼容的 repo-local 约定层。"
status: active
license: "MIT"
language: "TypeScript / Markdown"
stars: 21550
forks: 1575
docker_support: false
self_hostable: true
enterprise_ready: false
security_score: 4
last_evaluated: 2026-05-20
evidence: "GitHub API + GraphQL issue/PR counts + official website + repository local scan; this is a convention/static-site repo, so software-runtime dimensions are interpreted via non-software scoring adaptation."
sources:
  - "[GH:api] GitHub REST API snapshot for agentsmd/agents.md on 2026-05-20: stars=21550, forks=1575, created_at=2025-08-19, pushed_at=2026-03-12, license=MIT, language=TypeScript, open_issues_count=142."
  - "[GH:graphql] GitHub GraphQL query on 2026-05-20: open issues=77, open PRs=65, discussions=0; REST open_issues_count combines issues + PRs."
  - "[GH:contributors] GitHub contributors API first page on 2026-05-20: 20 contributors, top contributor romainhuet with 12 commits; long-tail contributor distribution."
  - "[GH:advisories] GitHub repository security-advisories API returned 0 advisories on 2026-05-20; absence of advisories is not a proof of absence of vulnerabilities."
  - "[GH:local-scan] Local shallow clone /tmp/repo-wiki-batch8/agents-md at commit d1ac7f063d20e70015ed6732664049ae4ba9d74e dated 2026-03-12; git ls-files=61; du=1.1M; checked README.md, AGENTS.md, package.json, components/HowToUseSection.tsx, components/FAQSection.tsx."
  - "[Site:agents] https://agents.md/ extracted 2026-05-20: describes AGENTS.md as a README for agents, standard Markdown with no required schema, used by over 60k open-source projects, and lists compatible/associated tools."
  - "[GH:readme] README.md in local clone: simple open format for guiding coding agents; minimal sample includes dev environment tips, testing instructions, PR instructions; site hosted at https://agents.md/."
  - "[GH:self-agents] Repository AGENTS.md in local clone: concrete example of instructing agents not to run production build during interactive Next.js development, keeping lockfiles synced, and using npm run dev/lint/test."
---

# AGENTS.md

> **一句话定位**：AGENTS.md 是 coding agents 的 repo-local instruction convention：把“这个仓库该怎么被 agent 操作”的知识从 README、prompt history 和人脑中抽出来，放到一个稳定、可发现、可版本控制的位置 [Site:agents][GH:readme]。
>
> **状态**: `active` · **总分**: 4.0/5 · **推荐度**: 4/5

## 摘要

`agentsmd/agents.md` 本身不是一个复杂软件系统，而是一个 **约定项目 + 静态说明站点**。其核心思想很简单：在仓库根目录放一个 `AGENTS.md`，作为“给 agent 读的 README”，写明 setup commands、测试命令、代码风格、PR 规则、危险操作边界等 repo-specific instructions [Site:agents][GH:readme]。

这个项目应该归入 `ai-programs/agent-infrastructure`，但更精确地说，它属于 **agent instruction / repository convention layer**。它不像 MCP 那样定义 tool protocol，也不像 CodeGraph 那样预索引代码知识图；它定义的是 agent 进入仓库后的第一层语境边界：何事可为，何事不可为，如何验证，如何提交。名不正则言不顺；AGENTS.md 正是在给 repository-agent interaction 正名。

它的优势是 adoption signal 很强：GitHub API 快照显示 21.5k stars、1.5k forks，官网声称已被 60k+ open-source projects 使用，并列出 Codex、Jules、Aider、goose、opencode、Zed、Warp、VS Code、Devin、Junie、Amp、Cursor、RooCode、Gemini CLI、GitHub Copilot coding agent 等兼容或关联工具 [GH:api][Site:agents]。这种 adoption 的意义不在于代码复杂，而在于它正在形成 **shared filename convention**。

局限也很清楚：它没有 schema、没有验证器，只有轻量的 nested-file / nearest-file precedence 说明，但缺少 formal merging/inheritance spec、兼容性测试和安全模型，也没有 official release cadence；仓库本身也很年轻，created_at 为 2025-08-19，releases 为空，GraphQL 显示 open issues=77、open PRs=65，说明治理 backlog 已经出现 [GH:api][GH:graphql][GH:local-scan]。因此推荐作为默认约定，但不应误认为它已经是完整的 agent governance protocol。

## 评分

| 维度 | 分数 | 理由 |
|---|---:|---|
| 能力广度 | 3/5 | 覆盖 agent instruction 的核心场景：setup、testing、style、PR、gotchas；但 intentionally schema-less，没有验证、继承、scope resolution、tool capability declaration [Site:agents][GH:readme] |
| 上手体验 | 5/5 | 直接创建 Markdown 文件即可；无需安装 runtime，也不绑定任何厂商工具 [Site:agents] |
| 性能 | 5/5 | 作为 convention 是 plain Markdown；仓库站点为小型 Next.js app，本地 clone 仅 61 tracked files / 1.1M；性能负担近乎为零 [GH:local-scan] |
| 代码质量 | 3/5 | 网站实现很小，Next.js/TypeScript/pnpm 结构清晰；但没有 releases、测试体系和工程治理信号有限 [GH:local-scan][GH:api] |
| 文档质量 | 4/5 | 官网解释清楚，示例直接；README 与自身 AGENTS.md 提供 minimal 与 real-world examples；但缺少 formal spec、版本策略和兼容性测试 [Site:agents][GH:readme][GH:self-agents] |
| 社区活跃度 | 5/5 | 21.5k stars、1.5k forks、官网称 60k+ projects 使用；但 open issues/PR backlog 需要注意 [GH:api][GH:graphql][Site:agents] |
| 成熟度 | 3/5 | Adoption 很快，但 repo 创建于 2025-08，暂无 releases；更像 emerging convention，而非多年稳定标准 [GH:api] |
| 可扩展性 | 4/5 | Markdown 天然可扩展、forkable、tool-agnostic；但无 schema 意味着扩展会靠自然语言约定，机器可验证性弱 [Site:agents] |
| 安全性 | 4/5 | 作为非执行性 Markdown 没有传统 runtime attack surface；但它是 agent instruction input，本身仍有 prompt-injection / policy-bypass / stale-instruction 风险 [GH:advisories] |
| 推荐度 | 4/5 | 建议大多数 agent-facing repo 默认加入；enterprise/regulated repos 还需要配套 policy、lint/validation、secret-handling rules、sandbox 和 review controls |

**Overall score**: (3+5+5+3+4+5+3+4+4+4)/10 = **4.0**

## 为什么它属于 Agent Infrastructure

AGENTS.md 的价值不在“软件功能”，而在 **降低 agent 进入仓库时的信息熵**。

一个 coding agent 在新仓库中通常首先需要回答：

1. 依赖怎么装？
2. 测试怎么跑？
3. 哪些命令危险？
4. 哪些目录不能动？
5. PR/commit 约定是什么？
6. 这个仓库的 hidden convention 是什么？

如果这些信息分散在 README、CONTRIBUTING、CI workflow、Slack 历史和 maintainer 经验里，agent 就会浪费 token 与 tool calls 去猜。AGENTS.md 提供了一个低技术门槛但高收益的 rendezvous point：agent 先读这里，再行动 [Site:agents][GH:self-agents]。

因此它应归类为：

```text
ai-programs/agent-infrastructure
└── repository convention / instruction layer
```

它与之前的 `cal.diy`、`vibe-kanban`、`codegraph` 处于同一大板块，但子层不同：

| 项目 | 子层 | 解决的问题 |
|---|---|---|
| AGENTS.md | instruction convention | agent 进仓库后应该遵循哪些 repo-local 规则 |
| vibe-kanban | orchestration/task board | 多 coding agents / task attempts 如何组织与复盘 |
| codegraph | code knowledge/cache | agent 如何更低成本理解代码结构 |
| cal.diy | scheduling primitive | agent 如何进行时间协调与预约 |

## 核心能力拆解

### 1. Plain Markdown convention

官网明确说 AGENTS.md 使用 standard Markdown with no required schema，这既是优点也是缺点 [Site:agents]。

优点：

- 对人类和 agent 都可读。
- 不需要新的 parser 或 toolchain。
- 任何仓库可以今天就加。
- 不绑定 OpenAI、Anthropic、Cursor 或任何具体 IDE。

缺点：

- closest-file precedence 只有轻量说明，缺少 formal merging/inheritance spec；
- 不同工具对 section 的解释可能不同；
- 没有兼容性测试来保证各工具行为一致 [GH:local-scan][Site:agents]。

### 2. README-for-agents 的边界清晰

README 中的最小示例包括：

- dev environment tips；
- testing instructions；
- PR instructions；
- commands such as `pnpm install`, `pnpm dev`, `pnpm test` [GH:readme]。

这说明 AGENTS.md 的 target 不是一般文档，而是 **operational guidance**。它应该写“agent 做事时需要知道的东西”，而不是重复产品介绍。

### 3. 自身仓库的 AGENTS.md 是一个好样例

`agentsmd/agents.md` 自己的 `AGENTS.md` 明确要求 agent 在 Next.js 迭代时使用 `npm run dev`，不要在 agent session 中运行 `npm run build`，因为 production build 会切换 `.next` assets，破坏 hot reload；它还提醒修改依赖要同步 lockfile，新增组件优先 TypeScript [GH:self-agents]。

这类 instruction 的价值非常具体：它不是“请写高质量代码”这种空话，而是“不要运行某个会破坏开发态的命令”。这正是 agent instruction file 应该承载的内容。

## 适合场景

强烈适合：

- 所有会被 Codex / Claude Code / Cursor / Gemini CLI / OpenCode 等 agent 操作的仓库。
- monorepo：尤其需要告诉 agent 如何定位 package、如何筛选测试、如何避免全量 build。
- 有危险命令或 fragile dev server 的前端项目。
- 有严格 commit / PR / testing convention 的开源项目。
- 需要长期积累 agent gotchas 的项目。

不适合单独承担：

- enterprise policy enforcement；
- secret scanning；
- command sandboxing；
- formal compliance；
- workflow orchestration；
- code knowledge graph / RAG。

这些应由 CI、policy engine、sandbox、MCP tools、CodeGraph 等基础设施配合完成。

## 与同类项目的对比

这里按 `ai-programs/agent-infrastructure` 的 adjacent infrastructure 做定位级对比；它们不是同一种产品，不做直接竞品排序，比较对象来自既有 wiki 归类/待收录候选，未在本条目中重新深审。

| 项目 | 子层 | 相对 AGENTS.md 的差异 |
|---|---|---|
| AGENTS.md | repository instruction convention | 最轻量；用文件名和 Markdown 约定建立 shared convention |
| MCP servers | tool protocol / integration | 解决 agent 调工具的问题；AGENTS.md 解决 agent 读规则的问题 |
| CodeGraph | code knowledge graph | 解决上下文压缩与代码理解；AGENTS.md 解决操作规约 |
| vibe-kanban | task orchestration | 解决多 agent attempts 的看板与 review；AGENTS.md 解决单仓库规则入口 |
| cal.diy | scheduling primitive | 解决 calendar/scheduling；AGENTS.md 解决 repo-local instructions |

## 风险与不足

1. **无 schema 是双刃剑**：低摩擦 adoption 换来低机器可验证性 [Site:agents]。
2. **年轻项目的治理 backlog 已出现**：GraphQL 显示 open issues=77、open PRs=65；对于一个 convention repo，这说明社区参与很热，但维护节奏也面临压力 [GH:graphql]。
3. **标准化边界尚弱**：没有 release version、formal RFC、compatibility test suite；不同 agent 对 AGENTS.md 的读取、合并和优先级可能不一致 [GH:api][Site:agents]。
4. **容易被写成“愿望清单”**：如果 AGENTS.md 只写抽象原则而没有具体命令、路径、禁忌和验证步骤，实际收益会大幅下降；自身仓库的 AGENTS.md 好在给出了具体命令边界 [GH:self-agents]。
5. **安全不是靠文件名保证**：AGENTS.md 可以提醒 agent 不读 secret、不跑危险命令，但真正 enforcement 仍需 sandbox、permissions、CI 和 code review。

## 推荐使用方式

对 Develata 的 repo/wiki/agent workflow，建议把 AGENTS.md 作为默认 convention：

```md
# AGENTS.md

## Project map
- Source: `src/`
- Tests: `tests/`
- Docs: `docs/`

## Commands
- Install: `pnpm install`
- Typecheck: `pnpm typecheck`
- Unit tests: `pnpm test -- --run`
- Do not run: `pnpm deploy` unless explicitly requested.

## Coding rules
- Prefer small patches.
- Preserve public API unless task explicitly asks otherwise.
- Add tests for behavior changes.

## Verification
- Before final answer, run the narrowest relevant test first.
- If full test suite is expensive, explain what was and was not run.

## Safety
- Never print secrets from `.env`.
- Never modify generated files unless source generator is unavailable.
```

关键是：写事实、命令和边界；少写口号。

## 结论

AGENTS.md 是一个“轻而正”的 agent infrastructure primitive。它没有复杂技术护城河，但它抓住了 agentic coding 的一个真实痛点：agent 不缺能力，缺的是进入具体仓库后的上下文纪律。

我的判断：

- **作为 repository convention：推荐大多数 agent-facing repo 默认采用。**
- **作为 formal agent governance protocol：还不够。**
- **作为 agent infrastructure 目录的一员：应当收录。**

它的位置不是“又一个文档站”，而是 agent时代的 `.editorconfig + CONTRIBUTING + runbook` 的交集。