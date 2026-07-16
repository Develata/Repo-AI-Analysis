---
title: "Hallmark"
created: 2026-07-16
updated: 2026-07-16
type: repository-analysis
repo_url: "https://github.com/Nutlope/hallmark"
category: "ai-programs/ai-harness/skills"
tags: ["agent-skills", "frontend-design", "design-system", "ui-audit", "responsive-design", "accessibility", "claude-code", "codex"]
previous_repo: ""
successor: ""
primary_language: "Markdown / CSS"
license: "MIT"
stars: 7885
forks: 416
last_checked: 2026-07-16
last_verified: 2026-07-16
evidence: "GitHub API/issues/PRs/advisories + local shallow clone static review at aeb42fb354ff4efa36ab475773a082315a3af2ce + internal-link scan and npm pack dry-run; no generated-page A/B benchmark, real-agent installation, or browser visual acceptance run"
archived_reason: ""
docker_support: false
gpu_required: false
estimated_cpu: "skill files have no standalone runtime; page generation and browser checks use the host agent/tooling"
estimated_memory: "no resident process; activation context is large because SKILL.md is about 66.6k characters before conditional references"
estimated_storage: "npm pack dry-run: 254,606-byte archive / 683,183-byte unpacked skill package; repository checkout is much larger because it includes demo images/site assets"
status: active
ratings:
  capability: 4
  usability: 3
  performance: 2
  code_quality: 3
  documentation: 3
  community: 3
  maturity: 2
  extensibility: 4
  security: 3
  recommendation: 3
overall_score: 3.0
sources:
  - "[GH] https://github.com/Nutlope/hallmark"
  - "[GH:api] GitHub REST/GraphQL snapshot 2026-07-16: created_at=2026-04-27T20:47:10Z, pushed_at=2026-06-26T10:08:58Z, default_branch=main, stars=7885, forks=416, open issues=5, open PRs=8, default-branch history=133 commits, primary API language=CSS, archived=false, root license=MIT; REST open_issues_count=13 reconciles to 5 issues + 8 PRs"
  - "[GH:readme] README.md at commit aeb42fb354ff4efa36ab475773a082315a3af2ce inspected 2026-07-16: documents default build plus audit/redesign/study verbs, 20 themes, structural variety, 57 slop-test gates, installation paths and MIT license; the current SKILL.md/slop-test contain 58 gates, so the README count is stale"
  - "[GH:skill] Local skills/hallmark/SKILL.md and references/{slop-test,anti-patterns,contract,design-md}.md inspected 2026-07-16: main SKILL.md has 558 lines / about 66,569 characters and dispatches to build, audit, redesign, study, component-scope, project memory, tokens.css and opt-in design.md flows; references contain 58 numbered gate labels (1-57 plus 38a)"
  - "[GH:local-scan] Shallow clone /opt/data/tmp/github-trending-2026-07-15/hallmark at commit aeb42fb354ff4efa36ab475773a082315a3af2ce inspected 2026-07-16: 282 tracked files, 128 Markdown/MDX files, one SKILL.md, zero GitHub workflow files, 75 test/example-ish paths by path heuristic, and 105 Markdown files under skills/hallmark/references. A mechanical check of 325 repo-local Markdown links found 22 unresolved targets, including docs/recipes.md -> ../SKILL.md; some unresolved links live in example/fixture prose, so this is documentation-drift evidence rather than a claim that all product paths fail"
  - "[GH:issues] GitHub issues/PRs checked 2026-07-16: open issue #22 says README's Cursor rule-file instructions are misleading and omit references; open PR #12 proposes a deterministic eval-driven quality harness, remains OPEN and GitHub reports mergeable=CONFLICTING; the PR self-reports heuristic eval scores but was not merged or independently rerun in this analysis. Earlier closed issues #1/#4 concerned invalid skill installation/YAML parsing, and #9 concerned irrelevant files being installed"
  - "[GH:community] Contributors/community endpoints checked 2026-07-16: contributors returned Luffixos=121, Nutlope=10, JaySmith502=1, riccardogiorato=1; community health=42%, with README and LICENSE detected but no CONTRIBUTING, CODE_OF_CONDUCT, issue template, PR template or SECURITY policy"
  - "[GH:releases] GitHub releases and tags endpoints checked 2026-07-16: no releases and no tags returned; package.json and SKILL.md identify version 1.1.0"
  - "[GH:advisories] GitHub repository security-advisories endpoint checked 2026-07-16 and returned []; this means no published repository advisory was found in this check, not that prompt instructions, URL study mode, generated code or downstream tools are audited safe"
  - "[Local:pack] npm pack --dry-run run 2026-07-16 succeeded as hallmark@1.1.0 with 254,606-byte archive, 683,183-byte unpacked size and 109 package entries; package contents are LICENSE, README, package.json and skills/, excluding the demo site and docs"
  - "[Local:workflow] Local Develata frontend workflow sources inspected 2026-07-16 for overlap/integration claims: /opt/data/skills-develata/software-development/frontend-design-taste/SKILL.md and /opt/data/skills/software-development/frontend-iteration-workflows/SKILL.md"
  - "[WikiLocal:comparisons] Local same-category analyses inspected 2026-07-16: /opt/data/wiki/github-repo-wiki/ai-programs/ai-harness/skills/{openai-skills,anthropic-skills,scientific-agent-skills}.md plus the new mattpocock-skills.md; used only for category-level positioning, not as fresh upstream verification"
---

# Hallmark

> 一个把 frontend taste、anti-patterns、结构多样性、design tokens 与 handoff artifacts 编进单一 Agent Skill 的高密度设计 corpus；规则库值得拆解，当前整包采用则受 context bloat、流程自相矛盾和缺少已合并 eval gate 的限制。
>
> **状态**: `active` · **总分**: 3.0/5 · **推荐度**: 3/5
> **核验版本**: main commit `aeb42fb354ff4efa36ab475773a082315a3af2ce`；package/skill version `1.1.0`；GitHub/API 快照 2026-07-16

## 一句话总结

Hallmark 适合维护 frontend-design skill 或 AI-generated UI audit workflow 的工程师作为规则库和 taxonomy 参考；对已有前端 taste/QA skills 的 harness，应抽取少数缺失 gates，而不是并排加载整套 66k-character 主 skill。

## 总体评价

Hallmark 的中心命题具有合理性：anti-AI-slop 不能只换配色，还要处理反复出现的 structural fingerprint。它把 page macrostructure、nav/footer archetype、genre/theme、tokens、responsive、interaction states、honest copy、audit/redesign/study 与 `design.md` handoff 放进一个完整体系 [GH:readme][GH:skill]。其中不少规则非常具体：不伪造 metrics，不重画 browser/phone/IDE chrome，不在 theme 选定后临时内联颜色，检查 320/375/414/768 宽度，给 interactive component 建完整 states，以及把 project-level design DNA 固化为可迁移 artifact。

但仓库也呈现出典型的“规则越写越多，系统反而难以执行”的问题。主 `SKILL.md` 已达 558 行、约 66.6k characters，之后还要求按分支加载 typography、color、layout、motion、copy、anti-patterns、macrostructure/components 和体积较大的 slop-test reference [GH:skill]。它自称 short，并强调 progressive disclosure / 避免 token waste；实际入口本身已经成为最大的 context cost。

更严重的是 phase order 不自洽：Step 5 要在写代码前输出 preview，其中必须写实际 slop-test pass；同一段又说先运行 Step 7 slop test，而 Step 7 位于 Step 6 Build 之后 [GH:skill]。模型无法同时满足“build 前 preview”与“preview 中写 build 后 test 的真实结果”。这类 contract contradiction 比某条审美规则是否正确更影响 harness reliability。

## 推荐度：3/5

**角色定位**：推荐给已有 frontend implementation 与 browser QA 基础、希望拆解 anti-pattern taxonomy、design DNA artifact 和 visual-audit gates 的工程师；不建议把 Hallmark 原样作为唯一前端设计 authority。

推荐度给 3：

- 规则库有真实学习价值，尤其是 structural variety、honest copy、token lock、real chrome、responsive failure patterns 与 opt-in `design.md`。
- build/audit/redesign/study 四个 verb 加 component/page 分流，能力面明显超过单页 prompt [GH:readme][GH:skill]。
- 但仓库不足三个月、没有 tag/release、没有 GitHub Actions；真正的 deterministic eval harness 仍停留在冲突中的 open PR #12 [GH:api][GH:issues][GH:releases]。
- 本轮没有让不同模型对同一 brief 生成多轮页面，也没有用真实浏览器验证其声称的 58/58 gate behavior，不能把 sample gallery 当作独立 benchmark。

对我们的前端 workflow，最合理的采用方式是：**保留 `frontend-design-taste` 作为 authority，选取少数当前缺失的可测 gates，放进 browser acceptance，而不是加载 Hallmark 全量主题与宏结构 catalog。** [Local:workflow]

## 优势

1. **从视觉差异推进到结构差异**：明确反对 Hero → 3 features → CTA → footer 和连续产物复用同一 macrostructure [GH:readme][GH:skill]。
2. **failure taxonomy 具体**：58 gates 涵盖视觉、结构、motion、contrast、responsive、honest copy、token discipline 与 studied-DNA drift，许多都能落到 CSS/DOM 检查 [GH:skill]。
3. **保护既有代码边界**：redesign 默认保留 routes、component ownership、copy intent、brand 与 IA；删除文件需要显式确认 [GH:skill]。
4. **设计 artifact 有连续性**：`tokens.css`、`.hallmark/log.json` 和 opt-in `design.md` 把一次生成转成后续可读取的 project memory/design contract [GH:skill]。
5. **显式写出常被设计 prompt 忽略的安全边界**：URL study mode 把远程 HTML/CSS 当 untrusted inert data，拒绝 internal/local URL，并限制第三方 DNA 的可移植导出 [GH:skill]。
6. **包装轻量**：npm package 本体约 0.68 MB unpacked，无常驻服务或大型 runtime [Local:pack]。

## 劣势

1. **入口严重膨胀**：主 skill 约 66.6k characters，激活后再加载多份 references；其 context engineering 与“short”自我描述不一致 [GH:skill]。
2. **phase contract 自相矛盾**：preview 要先于 Build，却又必须包含 Build 后 slop test 的真实结论 [GH:skill]。
3. **自动化验证未进入主分支**：仓库无 workflow；eval harness 仍是 open/conflicting PR，现有 `_tests` 更像手工 fixture/gallery [GH:local-scan][GH:issues]。
4. **文档发生 drift**：README 仍写 57 gates，当前实际是 58；repo-local link scan 也发现多处 unresolved targets [GH:readme][GH:local-scan]。
5. **安装说明存在公开争议**：#22 指出 Cursor 路径把主 skill body 放进 rule file 会遗漏 references，并可能造成不合适的常驻规则负担 [GH:issues]。
6. **规则可能过度普遍化**：把“italic header”设为 universal auto-fail，并把 pure white、N1 nav 等设为默认强限制（虽有部分 genre/brief exceptions），有助于消灭 default attractor，也可能在有明确 brand 证据时压制合理设计；taste gate 应保留 source/brief-aware override [GH:skill]。

---

## 适合什么场景

- 审查 AI 生成 landing page 是否落入常见 structural/visual defaults。
- 为 frontend agent skill 设计可命名、可引用的 anti-pattern vocabulary。
- 研究如何把截图/URL 的 design DNA 转成 tokens、type roles、macrostructure 和 portable `design.md`。
- 从其 responsive gates 中提取真实 browser QA probes。
- 在低风险 prototype 中试验 audit/redesign，不把输出直接当 production acceptance。

## 不适合什么场景

- 已有稳定 design system，只需要一个小 component 修复；全量 Hallmark context 远大于任务本身。
- 希望无人工 taste review 地自动保证“非 AI 感”；规则 detector 不能替代审美判断。
- 需要已发布、版本化、CI-gated 的 production dependency。
- 想让它实现 auth、state、data fetching 或业务逻辑；其 contract 明确只负责 visual/interaction layer [GH:skill]。
- 品牌明确需要 Hallmark 禁止的形式，而又不愿维护 override policy。

## 与类似项目对比

| 项目 | 定位 | 相对本项目 |
|------|------|-----------|
| Anthropic Agent Skills | 官方 Agent Skills 样例集合，包含 frontend-design 类型参考 | Anthropic 仓库的官方格式地位更强；Hallmark 对视觉 anti-pattern、结构 catalog 与 handoff artifact 更专门、更 opinionated |
| Skills For Real Engineers | 通用软件工程方法 skill pack | Matt Pocock 仓库强调 engineering process 与 skill authoring；Hallmark 聚焦 frontend taste，单 skill 深度和 context 体积都更大 |
| OpenAI Skills | Codex 官方 system/curated skills catalog | OpenAI Skills 更像官方分发目录；Hallmark 是第三方单领域方法 corpus，设计规则更密但治理和验证更年轻 |

上述项目按 `ai-programs/ai-harness/skills` 同类范围做定位级对比，依据本地 wiki 既有条目的标题级定位与分类语境，而非本轮重新抓取竞品全部外部事实；未按同一 10 维度框架重审 [WikiLocal:comparisons]。

---

## 它能做什么

能力广度评分 4/5。

Hallmark 提供：

- greenfield page/component build；
- existing code audit（只报告、不编辑）；
- redesign（保留 copy/IA/brand/implementation boundary）；
- screenshot/URL study 与 design DNA extraction；
- 20 themes、21 macrostructures 与多个 nav/footer/component archetypes；
- typography/color/layout/motion/copy/anti-pattern references；
- tokens、project rotation log、portable `design.md`；
- post-build 58-gate slop test 与 six-axis self-critique [GH:readme][GH:skill]。

不给 5，因为代码生成、browser rendering、visual judgment 与 eval 都由外部 agent/tool 完成；仓库没有完成态的 automated quality harness，也没有证明这些分支在不同模型上都能按 contract 稳定执行 [GH:issues][GH:local-scan]。

## 运行环境与资源占用

| 场景 | CPU | 内存 | 存储 | 说明 |
|------|-----|------|------|------|
| skill package 本体 | 无独立 runtime | 无常驻进程 | 约 0.68 MB unpacked | npm pack dry-run 点时结果 [Local:pack] |
| 单次 activation | 由 agent/model 决定 | context cost 高 | 读取主 skill + 分支 refs | 主 skill 自身约 66.6k characters [GH:skill] |
| page generation + QA | 由 build/browser/vision 决定 | 取决于框架和 browser | 生成代码、tokens、screenshots | 仓库未提供完成态 CI/eval runtime |

- **运行时**：Claude Code、Cursor、Codex 或兼容 Agent Skills 的 coding assistant。
- **操作系统**：skill 文件跨平台；真实 build/browser 环境取决于目标项目。
- **Docker**：`docker_support=false`；不是服务端产品。
- **GPU**：不需要；外部图片生成可另有需求，但不属于当前 package 主路径。
- **外部依赖**：目标 agent、代码库、可选 web/image access 与真实 browser/build tooling [GH:readme][GH:skill]。

资源效率评分 2/5。文件存储小不代表 context 高效：66k-character 入口及按分支加载的多份 references 对短 frontend task 明显偏重；没有 token/latency/task-success benchmark 支撑这种成本。

## 上手体验

评分 3/5。

`npx skills add nutlope/hallmark` 简单，README 也把四个 verbs 讲得直观 [GH:readme]。对已有 coding agent 的用户，运行 audit 或给新页面套用规则的入口明确。

扣分来自巨大的隐性学习和执行面：主题、genre、macrostructure、archetype、rotation、preflight、preview、build、slop test、design.md 构成复杂 state machine。#22 还指出 Cursor 手工安装说明会遗漏 references [GH:issues]。真正可靠使用需要理解这些边界，而不是只执行一条 install command。

## 代码质量

评分 3/5。

正面部分是目录拆分细、references 命名清楚、macrostructure/component 采用 index-then-pick，package 通过 npm dry-run；主 skill 也显式定义既有代码保护、prompt-injection boundary 和 output contract [GH:skill][Local:pack]。

不给 4 的原因是验证机制和契约一致性不足：零 GitHub workflows，eval PR 尚未合并且有冲突，README gate count 漂移，link scan 有 22 个 unresolved targets，Step 5/6/7 的 preview-test-build 顺序无法同时满足 [GH:local-scan][GH:issues][GH:readme][GH:skill]。这不是单纯文案瑕疵，而是 agent 执行正确性问题。

## 可扩展性

评分 4/5。

themes、genres、macrostructures、component archetypes、custom theme、study DNA 与 `design.md` 都提供清晰 extension surface；MIT 许可和纯文件结构也便于 fork [GH:skill][GH:api]。

不给 5，因为“可添加的内容 surface 很多”不等于“扩展后容易维护”：新增规则会进一步放大主 skill、catalog 与 slop-test drift；缺少合并后的 schema/link/eval gate，使扩展成本主要依赖人工同步。

## 文档质量

评分 3/5。

文档覆盖极广，anti-patterns、responsive、interaction states、tokens 与 examples 都能提供具体实现线索；README 的视觉展示也便于快速理解目标 [GH:readme][GH:skill]。

但“文档多”不等于“文档系统可靠”。README 的 57 与实际 58 不一致，repo-local links 有已验证 drift，主 skill 内 phase ordering 还存在硬矛盾 [GH:readme][GH:local-scan][GH:skill]。因此只能给 3：内容密度高，信息架构和一致性仍需治理。

## 社区与成熟度

| 维度 | 评分 | 说明 |
|------|------|------|
| 社区活跃度 | 3/5 | 2026-07-16 快照为 7,885 stars、416 forks、5 open issues、8 open PRs；有外部贡献，但主要贡献集中于 Luffixos，且社区治理文件不完整 [GH:api][GH:community]。 |
| 成熟度 | 2/5 | 2026-04 创建，无 tags/releases，version 1.1.0 仅存在于 package/skill metadata；安装、eval 与 cross-generation similarity 仍在快速讨论 [GH:api][GH:issues][GH:releases]。 |

Trending 热度表明“反 AI 模板化”问题获得了显著关注，但不能证明跨模型输出质量、长期需求或兼容性。

## 安全与风险

评分 3/5。

Hallmark 主要是 instructions，不包含常驻 daemon；MIT root license 清楚，repository advisories endpoint 本轮为空 [GH:api][GH:advisories]。主 skill 还主动限制删除文件，要求 redesign 保留 route/component ownership，并把远程 study 内容视作 untrusted data，这些是正面信号 [GH:skill]。

风险仍在 agent control plane：skill 会读项目文件、写 CSS/components/tokens/project memory、可抓取外部 URL，并影响 production UI。错误 scope routing、恶意 `design.md`、remote prompt injection、过度 rewrite 或虚假的 58/58 self-report 都可能造成损失。虽然文档写了 guardrails，本轮没有 adversarial execution 或 real-agent E2E；无公开 SECURITY policy，空 advisories 也不是安全审计 [GH:community][GH:advisories]。

采用时应把它限制为设计建议/审查层，真实文件修改仍服从项目 plan、diff scope、build、browser QA 和 human approval。

## 学习价值

高，但应拆而学之。对我们的 harness/workflow，最值得吸收的是：

1. **Honest-copy gate**：没有来源的 metric/testimonial/logo 不得为了填 layout 而生成；这应是内容正确性 gate，不只是审美建议 [GH:skill]。
2. **Token-lock gate**：方向选定后，颜色和 font 必须通过 semantic tokens，减少多轮 agent 修改中的 design drift [GH:skill]。
3. **真实 responsive failure patterns**：`minmax(0,1fr)`、long-word wrap、nested sticky offsets、single-line clickable labels 等可转成 DOM/CSS checks [GH:skill]。
4. **Portable design artifact**：settled 之后才 opt-in 生成 `design.md`，避免首稿就冻结系统；这一时机设计比“每次自动写 design system”更合理 [GH:skill]。
5. **Generation 与 acceptance 分离的反例**：Hallmark 自己把 preview、build、slop test 排成矛盾顺序，提醒我们必须让 browser evidence 在生成之后、交付之前发生，不能让模型预报尚未执行的 pass [GH:skill]。

不建议吸收的是 20 themes + 21 macrostructures 的整套 catalog、所有绝对审美禁令，以及 66k-character monolithic entry。我们的 `frontend-design-taste` 已把 direction、HIG factual layer、implementation 与 browser acceptance 分层；Hallmark 更适合作为局部 gate mine，而不是新的并列 authority [Local:workflow]。
