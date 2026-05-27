---


title: "AGENTS.md"
created: 2026-05-20
updated: 2026-05-27
type: repository-analysis
repo_url: "https://github.com/agentsmd/agents.md"
category: "ai-programs/agent-infrastructure"
tags: ["agent-infrastructure", "repository-convention", "agent-instructions", "coding-agents", "markdown", "open-format"]
ratings:
  capability: 3
  usability: 5
  performance: 5
  code_quality: 3
  documentation: 4
  community: 5
  maturity: 3
  extensibility: 4
  security: 4
  recommendation: 4
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

## 一句话总结

AGENTS.md 是 coding agents 的 repo-local instruction convention：把“这个仓库该怎么被 agent 操作”的知识从 README、prompt history 和人脑中抽出来，放到一个稳定、可发现、可版本控制的位置 [Site:agents][GH:readme]。

## 总体评价

`agentsmd/agents.md` 本身不是复杂软件系统，而是一个 **约定项目 + 静态说明站点**。核心思想很简单：在仓库根目录放一个 `AGENTS.md`，作为“给 agent 读的 README”，写明 setup commands、测试命令、代码风格、PR 规则、危险操作边界等 repo-specific instructions [Site:agents][GH:readme]。

这个项目应归入 `ai-programs/agent-infrastructure`，更精确地说属于 **agent instruction / repository convention layer**。它不像 MCP 那样定义 tool protocol，也不像 CodeGraph 那样预索引代码知识图；它定义的是 agent 进入仓库后的第一层语境边界：何事可为，何事不可为，如何验证，如何提交。

它的 adoption signal 很强：GitHub API 快照显示 21.5k stars、1.5k forks，官网称已被 60k+ open-source projects 使用，并列出多种 coding-agent 工具兼容或关联 [GH:api][Site:agents]。这种 adoption 的意义不在于代码复杂，而在于它正在形成 **shared filename convention**。

## 推荐度：4/5

建议大多数 agent-facing repositories 默认加入 AGENTS.md。它不是 enterprise policy engine，也不是 sandbox；但作为轻量、工具无关、可版本控制的 instruction convention，收益很高、成本极低。

## 优势

1. **摩擦极低**：直接创建 Markdown 文件即可，无需安装 runtime，也不绑定厂商工具 [Site:agents]。
2. **解决真实上下文问题**：agent 进入仓库前需要 setup、test、style、PR、danger-zone 等 repo-local rules；AGENTS.md 给出稳定入口 [GH:readme][GH:self-agents]。
3. **生态采用信号强**：stars/forks 高，官网称 60k+ projects 使用，并列出多类工具兼容 [GH:api][Site:agents]。
4. **非执行性文本安全面小**：作为 plain Markdown，本身没有传统 runtime attack surface [GH:advisories]。
5. **自然适合版本控制**：instruction 与代码同仓库演化，能记录长期 agent gotchas。

## 劣势

1. **无 schema 是双刃剑**：低摩擦 adoption 换来低机器可验证性 [Site:agents]。
2. **标准化边界尚弱**：没有 release version、formal RFC、compatibility test suite；不同 agent 对读取、合并和优先级的解释可能不一致 [GH:api][Site:agents]。
3. **年轻项目已有 backlog**：GraphQL 显示 open issues=77、open PRs=65 [GH:graphql]。
4. **容易写成口号**：如果只写抽象原则而无具体命令、路径、禁忌和验证步骤，实际收益会大幅下降。
5. **不能替代 enforcement**：secret scanning、command sandboxing、CI/policy/review controls 仍需其他基础设施。

## 适合什么场景

- 会被 Codex / Claude Code / Cursor / Gemini CLI / OpenCode 等 agent 操作的仓库。
- monorepo，尤其需要告诉 agent 如何定位 package、筛选测试、避免全量 build。
- 有危险命令或 fragile dev server 的前端项目。
- 有严格 commit / PR / testing convention 的开源项目。
- 需要长期积累 agent gotchas 的项目。

## 不适合什么场景

- 需要 enterprise policy enforcement 的场景。
- secret scanning、command sandboxing、formal compliance。
- workflow orchestration 或多 agent task board。
- code knowledge graph / RAG。
- 希望靠一个 Markdown 文件保证 agent 安全的高风险生产环境。

## 与类似项目对比

这里按 `ai-programs/agent-infrastructure` 的 adjacent infrastructure 做定位级对比；它们不是同一种产品，不做直接竞品排序，比较对象来自既有 wiki 归类/待收录候选，未在本条目中重新深审。

| 项目 | 定位 | 相对本项目 |
|---|---|---|
| AGENTS.md | repository instruction convention | 最轻量；用文件名和 Markdown 约定建立 shared convention |
| MCP servers | tool protocol / integration | MCP 解决 agent 调工具的问题；AGENTS.md 解决 agent 读规则的问题 |
| CodeGraph | code knowledge graph | CodeGraph 解决上下文压缩与代码理解；AGENTS.md 解决操作规约 |
| vibe-kanban | task orchestration | vibe-kanban 解决多 agent attempts 的看板与 review；AGENTS.md 解决单仓库规则入口 |
| cal.diy | scheduling primitive | cal.diy 解决 calendar/scheduling；AGENTS.md 解决 repo-local instructions |

## 个人主页 sharing 候选

是。可写主题：**《AGENTS.md：agent 时代的 .editorconfig + CONTRIBUTING + runbook》**。

分享重点不是“又多了一个 Markdown 文件”，而是 agentic coding 为什么需要可发现、可版本控制、仓库局部的操作纪律。名不正则言不顺；AGENTS.md 的价值正在于给 repository-agent interaction 正名。

## 它能做什么

AGENTS.md 能承载 agent 操作仓库所需的 operational guidance：

- dev environment tips；
- testing instructions；
- PR / commit instructions；
- commands such as `pnpm install`, `pnpm dev`, `pnpm test` [GH:readme]；
- repo-local gotchas，例如自身仓库要求 agent 在 Next.js 迭代时用 `npm run dev`，不要在 session 中运行会破坏 hot reload 的 production build [GH:self-agents]。

它应该写事实、命令和边界；少写口号。

## 运行环境与资源占用

作为 convention，AGENTS.md 是 plain Markdown，性能负担近乎为零。仓库站点本身是小型 Next.js/TypeScript 项目；本地 clone 仅 61 tracked files / 1.1M [GH:local-scan]。

因此 `docker_support: false`，`self_hostable: true` 仅表示官网/说明站点可自行托管；AGENTS.md 文件本身不需要服务端。

## 上手体验

上手体验 5/5：创建一个 Markdown 文件即可，无需 parser、runtime、账号或云服务 [Site:agents]。

真正的成本在内容质量：你需要把仓库 hidden convention 写成具体、可执行的指令，例如目录、命令、禁忌、验证路径和 PR 规则。自身仓库的 AGENTS.md 是好样例，因为它给出具体命令边界，而不是泛泛要求“写高质量代码” [GH:self-agents]。

## 代码质量

代码质量按 convention/static-site repo 适配后给 3/5。正面是网站实现很小，Next.js/TypeScript/pnpm 结构清楚；负面是没有 releases、测试体系和工程治理信号有限 [GH:local-scan][GH:api]。

对此类项目，代码复杂度不是核心评价对象；更重要的是 convention 是否清晰、稳定、被工具接受。

## 可扩展性

可扩展性 4/5。Markdown 天然可扩展、forkable、tool-agnostic，任何团队都能加入自己的 sections [Site:agents]。

但无 schema 意味着扩展会靠自然语言约定：机器可验证性弱，不同工具对 nested-file / nearest-file precedence 的合并语义也可能漂移。

## 文档质量

文档质量 4/5。官网解释清楚，示例直接；README 与自身 AGENTS.md 提供 minimal 与 real-world examples [Site:agents][GH:readme][GH:self-agents]。

扣分点是缺少 formal spec、版本策略和兼容性测试；这使它更像 emerging convention，而不是成熟标准。

## 社区与成熟度

社区活跃度 5/5：21.5k stars、1.5k forks、官网称 60k+ projects 使用，说明 shared filename convention 已有明显扩散 [GH:api][Site:agents]。

成熟度 3/5：项目创建于 2025-08，暂无 releases，GraphQL 显示 open issues=77、open PRs=65；它是快速成形的 convention，而不是多年稳定标准 [GH:api][GH:graphql]。

## 安全与风险

安全性 4/5。作为非执行性 Markdown，AGENTS.md 没有传统 runtime attack surface；GitHub advisories 本次查询为 0，但这不构成安全证明 [GH:advisories]。

实际风险在 agent instruction input：过期、恶意或过宽的 AGENTS.md 可能诱导 agent 跑危险命令、忽略测试、泄露 secrets 或绕过 policy。因此 AGENTS.md 只能提醒 agent，不应替代 sandbox、permissions、CI 和 code review。

## 学习价值

AGENTS.md 是一个“轻而正”的 agent infrastructure primitive。它没有复杂技术护城河，但抓住了 agentic coding 的真实痛点：agent 不缺能力，缺的是进入具体仓库后的上下文纪律。

它的位置不是“又一个文档站”，而是 agent 时代的 `.editorconfig + CONTRIBUTING + runbook` 的交集。
