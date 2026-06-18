---
title: "last30days"
created: 2026-06-07
updated: 2026-06-07
type: repository-analysis
repo_url: "https://github.com/mvanhorn/last30days-skill"
category: "ai-programs/ai-harness/skills"
tags: [agent-skills, research-agent, social-search, claude-code, codex, cursor, openclaw, non-software]
previous_repo: ""
successor: ""
primary_language: "Python"
license: "MIT"
stars: 28691
forks: 2429
last_checked: 2026-06-07
last_verified: 2026-06-07
evidence: "GitHub API metadata + README/SKILL.md/AGENTS.md/local shallow clone scan + non-software/hybrid scoring; no live /last30days research run or external API smoke test was performed"
archived_reason: ""
docker_support: false
gpu_required: false
estimated_cpu: "N/A for skill wrapper; engine is ordinary Python/Node local execution"
estimated_memory: "Heuristic: low to moderate; depends on fan-out source count and retrieved transcripts/posts, not measured"
estimated_storage: "Local clone scan: 235 files, about 19.2 MB excluding .git"
status: active
ratings:
  capability: 4
  usability: 4
  performance: 3
  code_quality: 4
  documentation: 4
  community: 4
  maturity: 2
  extensibility: 4
  security: 3
  recommendation: 3
overall_score: 3.5
sources:
  - "[GH] https://github.com/mvanhorn/last30days-skill"
  - "[GH:api] GitHub REST/GraphQL snapshot on 2026-06-07: stars=28691, forks=2429, created_at=2026-01-23, pushed_at=2026-06-06, primary language=Python, license=MIT, GraphQL open issues=63, open PRs=38, REST open_issues_count=101, commits=623, latest sampled releases include v3.3.0/v3.2.0/v3.1.0."
  - "[GH:languages] GitHub languages API on 2026-06-07: Python=1737783 bytes, Shell=19112, HTML=11344."
  - "[GH:community] GitHub community profile API on 2026-06-07: README, MIT license and PR template present; Code of Conduct, CONTRIBUTING and SECURITY policy not surfaced."
  - "[GH:advisories] GitHub repository security-advisories API returned 0 advisories on 2026-06-07; absence of advisories is not proof of absence of vulnerabilities."
  - "[GH:readme] README.md fetched/local clone checked 2026-06-07: v3 pipeline; install paths include Claude Code marketplace, npx skills add, claude.ai upload and OpenClaw; README explicitly names Codex, Cursor, Copilot and Gemini CLI under the Agent Skills install path and also makes a broad 50+ hosts claim; zero-config claim for Reddit/HN/Polymarket/GitHub; optional X/YouTube/TikTok/Instagram/Threads/Pinterest/Perplexity/etc. require credentials; v3 adds HTML briefs, intelligent search, cross-source cluster merging, comparisons, GitHub person-mode and ELI5."
  - "[Source:skill] skills/last30days/SKILL.md local clone checked 2026-06-07: version=3.3.2, allowed-tools=Bash/Read/Write/AskUserQuestion/WebSearch, optional env vars include SCRAPECREATORS_API_KEY, OPENAI_API_KEY, XAI_API_KEY, OPENROUTER_API_KEY, PARALLEL_API_KEY, BRAVE_API_KEY, APIFY_API_TOKEN, AUTH_TOKEN, CT0, BSKY_HANDLE, BSKY_APP_PASSWORD and TRUTHSOCIAL_TOKEN; requires node and python3."
  - "[Source:local-scan] Local shallow clone at /opt/data/tmp/repo_wiki_trending_20260607/repos/last30days-skill, checked 2026-06-07: 235 files, about 19.2 MB excluding .git; root files include AGENTS.md, CHANGELOG.md, CONFIGURATION.md, HERMES_SETUP.md, pyproject.toml, uv.lock, tests/, docs/, hooks/ and skills/; .github/workflows has release.yml, security.yml and validate.yml; tests directory contains 95 files."
  - "[Source:agents] AGENTS.md local clone checked 2026-06-07: project is an Agent Skills package, not a standalone CLI; product is the slash-command-invoked skill; engine is scripts/last30days.py; tests use uv run pytest and Python 3.12+."
  - "[Source:pyproject] pyproject.toml local clone checked 2026-06-07: project version=3.3.2, requires Python >=3.12, runtime dependencies list is empty, dev dependencies include pytest and pytest-cov; coverage source is skills/last30days/scripts and tests, omitting vendored code."
  - "[L1:superpowers] Local wiki comparison source: /opt/data/wiki/github-repo-wiki/ai-programs/agent-skills/superpowers.md"
  - "[L1:agent-skills] Local wiki comparison source: /opt/data/wiki/github-repo-wiki/ai-programs/agent-skills/agent-skills.md"
---

# last30days

> 面向 agent harness 的“最近 30 天真实社区信号”研究技能：把 Reddit、X、YouTube、HN、Polymarket、GitHub、Web 等来源并行抓取、按互动与置信度聚类，再交给宿主模型合成 brief。
>
> **状态**: `active` · **总分**: 3.5/5 · **推荐度**: 3/5
>
> **验证边界**：本次检查了 GitHub API、README、SKILL.md、AGENTS.md、pyproject 和本地浅克隆结构；没有实际安装 Claude Code plugin / npx skill，也没有运行一次真实 `/last30days` 多源研究，因此第三方 API、浏览器 cookie、付费搜索后端和 HTML 导出未做端到端验证 [GH:api][GH:readme][Source:skill][Source:local-scan]。

## 一句话总结

last30days 是一个 agent skill 形态的 recency research engine：它不试图替代 Google，而是让 AI agent 用“最近 30 天的社区互动、社媒帖子、视频 transcript、预测市场和 GitHub 活动”来回答“现在大家真实在说什么” [GH:readme][Source:skill]。

## 总体评价

这个项目的价值在于把“搜索”重新定义为 agentic aggregation：先让模型理解 query/entity，再调用 Python engine 从多平台拉取候选，最后用宿主模型做 synthesis。README 明确列出 Reddit、X、YouTube、TikTok、Instagram、HN、Polymarket、GitHub、Digg、Threads、Pinterest、Bluesky、Perplexity、Web 等来源，并强调 v3 的 intelligent search、cluster merging、single-pass comparisons、GitHub person-mode 与 shareable HTML brief [GH:readme]。

作为 `ai-programs/ai-harness/skills`，它比一般 prompt pack 更“工程化”：有 Python engine、tests、validate/security workflows、配置文档和明确的 host 安装路径；AGENTS.md 也强调“产品是 slash-command skill，CLI 只是 fallback” [Source:agents][Source:local-scan]。这使它具备真实工具属性，而不是一份静态提示词。

主要风险也来自同一处：它要处理大量外部 API key、浏览器 cookie、社媒抓取、paid search 和 agent 自动写文件。对个人研究很有用；对企业或敏感账号，必须把 token、cookie、输出路径和提示注入风险先隔离好。项目创建于 2026-01，迭代很快，maturity 只能保守给 2/5 [GH:api][Source:skill]。

## 推荐度：3/5

> 2026-06 推荐度重校准：年轻高权限 skill，涉及社交/API token，未 live run；推荐应限于审读/小范围试用。


**目标角色**：适合需要快速追踪“最近 30 天社区真实反馈”的个人研究者、AI 工具使用者、产品/销售/投资前调研者，以及愿意在 Claude Code/Codex/Cursor/Gemini CLI/OpenClaw 等 harness 中安装 agent skill 的 power user。

推荐理由：它补的是 LLM 训练时滞与传统搜索排序的空位。对于“最近 AI 工具社区怎么评价 X”“某人最近在做什么”“两个工具最近谁更受开发者关注”这类问题，跨 Reddit/X/YouTube/HN/Polymarket/GitHub 的聚合框架确实有独特价值 [GH:readme]。

采用时要保守：不要把它当事实真理机。社媒互动代表“可见讨论”，不是客观事实；Polymarket odds 是市场信号，不是因果证据；X/TikTok/Instagram 等来源依赖第三方抓取与 token/cookie，可靠性、成本和合规性都要逐项审计 [GH:readme][Source:skill]。

结论：**值得收录；个人研究/热点扫描可试用，敏感账号和生产环境需隔离。**

## 优势

1. **recency-first 定位清楚**：专门解决“最近 30 天发生了什么、社区怎么说”的问题，而不是泛化成普通 web search [GH:readme]。
2. **多源覆盖强**：README 列出 Reddit、X、YouTube、TikTok、Instagram、HN、Polymarket、GitHub、Digg、Threads、Pinterest、Bluesky、Perplexity、Web 等来源；部分可零配置，部分通过 optional env 解锁 [GH:readme][Source:skill]。
3. **agent skill + engine 结合**：SKILL.md 负责宿主模型行为契约，Python engine 负责聚合与渲染，比纯 Markdown skill 更可验证 [Source:skill][Source:agents]。
4. **测试与工作流存在**：本地扫描显示 tests/ 下 95 个文件，GitHub workflows 包含 release、security、validate；pyproject 配置 pytest 与 coverage [Source:local-scan][Source:pyproject]。
5. **安装面广**：README 给出 Claude Code marketplace、npx skills、claude.ai 上传、OpenClaw 等路径，并声称支持 50+ Agent Skills hosts [GH:readme]。
6. **输出形态实用**：v3 支持 self-contained HTML brief、comparison、GitHub person-mode、ELI5 等，适合分享和会前准备 [GH:readme]。

## 劣势

1. **项目非常年轻**：2026-01 创建，虽已有 623 commits 和多次 release，但长期稳定性、host 兼容性和 API 变动耐受还未经过多年验证 [GH:api]。
2. **外部依赖和 credential surface 大**：可选 env 包括 ScrapeCreators、OpenAI、xAI、OpenRouter、Parallel、Brave、Apify、X cookie/token、Bluesky、Truth Social 等，使用前必须管理密钥和 cookie 风险 [Source:skill]。
3. **没有 SECURITY.md/CONTRIBUTING.md 信号**：GitHub community profile 未显示 Code of Conduct、CONTRIBUTING 或 Security policy；对一个会读取网络内容并让 agent 写文件的工具，这是治理短板 [GH:community]。
4. **性能无法从 README 直接验证**：多源并行和 comparisons 听起来强，但本次没有跑真实查询；资源效率只能按架构与本地体量保守评分 [GH:readme][Source:local-scan]。
5. **社媒信号天然偏差**：upvotes、likes、views、market odds 是 engagement signal，不是 truth signal；用于判断“大家在说什么”很好，用于严肃事实判断要回到 primary sources。

---

## 适合什么场景

- AI 工具、开发者社区、产品口碑的最近 30 天扫描。
- 会前人物/公司调研：看最近 PR、tweets、YouTube/podcast、Reddit 讨论，而不是只看 LinkedIn 或官网 [GH:readme]。
- 比较两个或多个工具的社区讨论热度与痛点。
- 生成可分享的 HTML brief，给 Slack、Notion、email 或个人知识库使用 [GH:readme]。
- 研究“agent skill 如何把宿主模型和本地 engine 组合成产品”。

## 不适合什么场景

- 严肃事实核查的最终来源；它更像 discovery 和 synthesis layer。
- 无法接受把 cookie/API key 暴露给本地 agent/runtime 的环境。
- 对成本高度敏感但又要开 X/TikTok/Instagram/Perplexity/paid search 的场景。
- 需要长期稳定 API 或企业 SLA 的生产工作流。
- 不使用 agent harness、只想要传统 CLI 工具的用户；项目主路径是 slash-command skill [Source:agents]。

## 与类似项目对比

| 项目 | 定位 | 相对本项目 |
|------|------|-----------|
| last30days | 多源 recency research skill | 更偏“最近 30 天社区/社媒/预测市场信号聚合”，是研究工具而非通用 SDLC 流程包 |
| Superpowers | agentic SDLC / engineering discipline skills | Superpowers 管 agent 如何做工程流程；last30days 管 agent 如何做近期信息收集，两者问题域不同 [L1:superpowers] |
| Agent Skills | production-oriented engineering skills pack | Agent Skills 是通用工程 workflow 资产；last30days 是一个带 Python engine 的垂直 research skill [L1:agent-skills] |

上述项目按 `ai-programs/ai-harness/skills` 同类范围做定位级对比；Superpowers 与 Agent Skills 基于本地 wiki 已收录条目作参照，本条目未重新按同一 10 维度深审它们。

---

## 它能做什么

- 用 `/last30days <topic>` 触发近期研究，并由宿主模型生成 synthesis [GH:readme][Source:skill]。
- 从 Reddit、HN、Polymarket、GitHub 等零配置或低配置来源开始；X、YouTube、TikTok、Instagram、Threads、Pinterest、Perplexity 等通过可选 API key/cookie 解锁 [GH:readme][Source:skill]。
- 为 named entity 做预研究与 handle/subreddit/channel resolution；README 说明 v3 engine 会先理解 topic 再搜 [GH:readme]。
- 合并跨来源 story clusters，避免同一事件在 Reddit/X/YouTube 中重复出现 [GH:readme]。
- 做 tool/person/topic comparisons、GitHub person-mode、ELI5 rewriting、HTML brief export [GH:readme]。

## 运行环境与资源占用

| 场景 | CPU | 内存 | 存储 | 说明 |
|------|-----|------|------|------|
| 最小 | 本地普通 CPU | 低到中等，未实测 | 约 19.2 MB clone excluding .git | Skill/engine 本体很小；真实资源取决于查询 fan-out [Source:local-scan] |
| 推荐 | 本地普通 CPU + 稳定网络 | 中等，取决于 transcript/posts 数量 | 需要保存 brief/raw 输出空间 | 多源并行、视频 transcript 和 HTML/raw brief 会增加 I/O 与网络成本 |

- **运行时**：Python 3.12+，node/python3；pyproject 运行时 dependencies 列表为空，dev 依赖 pytest/pytest-cov [Source:pyproject][Source:skill]。
- **性能评分边界**：3/5 是未实测时的中性分，不表示多源并行已经被本次验证为高效；真实耗时取决于启用 source、第三方 API 延迟和 transcript/post 数量。
- **操作系统**：未见 OS 专属路径；作为 agent skill 和 Python engine，主要依赖宿主 harness 与网络 API。
- **Docker**：未验证官方 Docker 路径；本条设为 `docker_support: false`。
- **GPU**：不需要。
- **外部依赖**：多种可选 API key/cookie；这是能力来源，也是安全与成本来源 [Source:skill]。

## 上手体验

评分 4/5。

README 给了非常直接的安装路径：Claude Code marketplace 两行命令、`npx skills add`、claude.ai upload、OpenClaw install；并声称 Reddit/HN/Polymarket/GitHub 可零配置运行，X/YouTube/TikTok 等通过 30 秒 setup wizard 解锁 [GH:readme]。这对目标用户是很好的 first-run UX。

扣分点在于它并非单纯 npm/CLI：真实体验取决于宿主 agent 是否正确加载 SKILL.md、是否遵守输出契约、是否能安全传递计划与 flags。SKILL.md 自身长达 1700+ 行，说明行为契约复杂；越复杂，越可能在不同 harness 上出现边界差异 [Source:skill]。

## 代码质量

评分 4/5。

本分数评价的是 repo hygiene 与可维护结构，不是端到端搜索质量。本地扫描显示项目不只是 README：有 `skills/last30days/scripts/` engine、`tests/`、`docs/`、`hooks/`、`CONFIGURATION.md`、`AGENTS.md`、`CHANGELOG.md`、`uv.lock`、pytest/coverage 配置和 GitHub workflows [Source:local-scan][Source:pyproject]。AGENTS.md 对产品边界、engine fallback、测试命令、配置维护都有清楚规范 [Source:agents]。

保守不打 5：本次没有运行 test suite；README 的“1,012 tests passing”未在本地复现。项目大量功能依赖外部平台和抓取后端，测试覆盖能证明本地逻辑，但不能完全证明端到端搜索质量。

## 可扩展性

评分 4/5。

作为 skill package，它的扩展面主要是：新增 source connector、调整 ranking/synthesis、增加 host 安装路径、增加输出格式或 query mode。SKILL.md metadata 明确列出 tags、env、bins 和 files；AGENTS.md 要求新增 env/flag/host pattern 时同步 CONFIGURATION.md [Source:skill][Source:agents]。

它不是一个通用 plugin framework，因此不打 5。扩展者仍需理解很长的 SKILL.md 契约和 Python engine 内部结构；新增平台 source 还牵涉 API 合规、付费与反爬边界。

## 文档质量

评分 4/5。

README 是强产品文档：定位、使用场景、source list、v3 changes、install table、配置入口都很清楚 [GH:readme]。AGENTS.md 与 CONFIGURATION.md 则给维护者/开发者补充项目结构与规则 [Source:agents][Source:local-scan]。

扣分在信息量过大：SKILL.md 很长，且包含大量历史 failure mode 与输出 law；这对 agent 行为约束有用，但对人类快速审阅并不轻。没有独立 hosted docs 也让深层资料主要留在 repo 内。

## 社区与成熟度

| 维度 | 评分 | 说明 |
|------|------|------|
| 社区活跃度 | 4/5 | 2026-06-07 snapshot 显示 28.7k stars、2.4k forks、63 open issues、38 open PRs、623 commits；热度很强，但 star spike 不能等同长期生产采用 [GH:api] |
| 成熟度 | 2/5 | 2026-01 创建，v3.3.x 快速演进；功能发展快但 API/host 行为稳定性仍需时间证明 [GH:api][Source:skill] |

REST `open_issues_count=101` 与 GraphQL open issues=63/open PRs=38 可对上：REST 将 open PRs 计入 open issues count [GH:api]。

## 安全与风险

评分 3/5。

GitHub repository security-advisories API 在本次检查返回 0；这只表示“本次未发现仓库发布的 advisory”，不是无漏洞证明 [GH:advisories]。真正的风险来自权限模型：skill 允许 Bash/Read/Write/WebSearch，且可接入大量 API key、X cookie、auth token、app password；一旦 query 或网页内容带 prompt injection，agent synthesis 与写文件路径都需要边界控制 [Source:skill]。

Community profile 未显示 SECURITY.md/CONTRIBUTING.md/Code of Conduct，对高权限 agent skill 来说是扣分项 [GH:community]。个人隔离环境可以试；不要在生产账号、企业内部资料、云控制台或支付相关 workflow 中裸跑。

## 学习价值

很高。last30days 是研究 agent productization 的好案例：它展示了如何把一份很强的 SKILL.md 行为契约、一个实际 Python engine、多源 API、host-specific install 和 shareable artifact 组合成一个“不是网页、不是 CLI、而是 agent-native tool”的产品。

对 Develata 尤其有两个可学点：其一，recency research 的 source fusion/ranking/synthesis 思路；其二，长 SKILL.md 中用 failure-mode laws 约束模型输出的工程经验。但要取其义，不必全盘照搬其复杂度。
