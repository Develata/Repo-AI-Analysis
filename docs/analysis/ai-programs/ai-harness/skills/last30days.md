---
title: "last30days"
created: 2026-06-07
updated: 2026-07-22
type: repository-analysis
repo_url: "https://github.com/mvanhorn/last30days-skill"
category: "ai-programs/ai-harness/skills"
tags: [agent-skills, research-agent, social-search, claude-code, codex, cursor, openclaw, non-software]
previous_repo: ""
successor: ""
primary_language: "Python"
license: "MIT"
stars: 52989
forks: 4586
last_checked: 2026-07-22
last_verified: 2026-07-22
evidence: "GitHub API metadata + README/SKILL.md/AGENTS.md/local shallow clone scan + non-software/hybrid scoring; no live /last30days research run or external API smoke test was performed"
archived_reason: ""
docker_support: false
gpu_required: false
estimated_cpu: "N/A for skill wrapper; engine is ordinary Python/Node local execution"
estimated_memory: "Heuristic: low to moderate; depends on fan-out source count and retrieved transcripts/posts, not measured"
estimated_storage: "Repository/API size about 49.7 MB; saved raw briefs, HTML and local library indexes grow with use"
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
  - "[GH:api] GitHub REST/GraphQL queried 2026-07-22: created_at=2026-01-23, pushed_at=2026-07-21, default_branch=main, commit=92b664e742a0310d5b675d940ec95a801da2873a, stars=52989, forks=4586, open issues=51, open PRs=32, primary_language=Python, license=MIT, diskUsageKB=49661"
  - "[GH:release] https://github.com/mvanhorn/last30days-skill/releases queried 2026-07-22; latest=v3.17.0 published 2026-07-21; releases since v3.3 add arXiv/Techmeme/LinkedIn/StockTwits/Xiaohongshu/DripStack paths, native Codex/Grok packaging, doctor/probe/postmortem, discovery/drill, versioned JSON export, local corpus, freshness verification, research library/Atom feed/full-text search, security workflows and many connector fixes"
  - "[GH:community] GitHub community profile queried 2026-07-22: README, MIT license and PR template surfaced; Code of Conduct, CONTRIBUTING and SECURITY policy not surfaced"
  - "[GH:advisories] GitHub repository security-advisories API queried 2026-07-22; returned [] — no published repository advisory found in this check, not proof of safety"
  - "[GH:readme] README.md at 92b664e742a0310d5b675d940ec95a801da2873a checked 2026-07-22: current source matrix, 50+ Agent Skills host claim, Claude/Codex/Grok/OpenClaw/Claude Desktop install paths, doctor/discovery/library/freshness features, cookie/API-key boundaries and first-party claims; no live research run was performed"
  - "[Source:skill] skills/last30days/SKILL.md checked 2026-07-22: version=3.17.0, allowed-tools=Bash/Read/Write/AskUserQuestion/WebSearch; optional credentials include X/ScrapeCreators/provider/browser and local Xiaohongshu service settings; requires node and python3"
  - "[Source:local-scan] GitHub tree/API scan at 92b664e742a0310d5b675d940ec95a801da2873a on 2026-07-22: files=407, workflows=6, test-ish files=207, docs/Markdown-ish files=32; languages Python=3757825, Go=47726, Shell=27854, HTML=11344; tree contains AGENTS.md, CHANGELOG.md, CONFIGURATION.md, pyproject.toml, uv.lock, tests/, docs/, hooks/ and skills/"
  - "[Source:agents] AGENTS.md checked 2026-07-22: project remains an Agent Skills package whose primary product is the slash-command skill; engine is skills/last30days/scripts/last30days.py; tests use uv/Python 3.12+"
  - "[Source:pyproject] pyproject.toml checked 2026-07-22: version=3.17.0, Python >=3.12, runtime dependencies list empty, pytest configuration present"
  - "[L1:superpowers] Local wiki comparison source: /opt/data/wiki/github-repo-wiki/ai-programs/ai-harness/ai-plugins/superpowers.md"
  - "[L1:agent-skills] Local wiki comparison source: /opt/data/wiki/github-repo-wiki/ai-programs/ai-harness/ai-plugins/agent-skills.md"
---

# last30days

> 面向 agent harness 的“最近 30 天社区与一手来源信号”研究技能：聚合 Reddit、X、YouTube、HN、GitHub、arXiv、Techmeme、Web 等来源，并提供 doctor、discovery、freshness 与本地 research library。
>
> **状态**: `active` · **总分**: 3.5/5 · **推荐度**: 3/5
>
> **验证边界**：本次检查了 GitHub API、README、SKILL.md、AGENTS.md、pyproject 和本地浅克隆结构；没有实际安装 Claude Code plugin / npx skill，也没有运行一次真实 `/last30days` 多源研究，因此第三方 API、浏览器 cookie、付费搜索后端和 HTML 导出未做端到端验证 [GH:api][GH:readme][Source:skill][Source:local-scan]。

## 一句话总结

last30days 是一个 agent skill 形态的 recency research engine：它不试图替代 Google，而是让 AI agent 用“最近 30 天的社区互动、社媒帖子、视频 transcript、预测市场和 GitHub 活动”来回答“现在大家真实在说什么” [GH:readme][Source:skill]。

## 总体评价

这个项目的价值在于把“搜索”重新定义为 agentic aggregation：先让模型理解 query/entity，再调用 Python engine 从多平台拉取候选，最后用宿主模型做 synthesis。到 v3.17，README/release notes 还加入 arXiv/Techmeme/LinkedIn/StockTwits/Xiaohongshu/DripStack 路径、doctor/probe/postmortem、discovery/drill、versioned JSON export、freshness verification 与本地 research library/Atom feed/full-text search [GH:readme][GH:release]。

作为 `ai-programs/ai-harness/skills`，它比一般 prompt pack 更“工程化”：有 Python engine、207 个 test-ish files、6 个 workflows、配置/诊断文档和明确的 host 安装路径；AGENTS.md 仍强调“产品是 slash-command skill，CLI 只是 fallback” [Source:agents][Source:local-scan]。这使它具备真实工具属性，而不是一份静态提示词。

主要风险也来自同一处：它要处理大量外部 API key、浏览器 cookie、社媒抓取、本地 companion services、paid search 与 agent 自动写文件。对个人研究很有用；对企业或敏感账号，必须把 token、cookie、输出路径和 prompt-injection 风险先隔离好。项目创建于 2026-01，已到 v3.17.0 且连接器持续增加，maturity 仍只能给 2/5 [GH:api][GH:release][Source:skill]。

## 推荐度：3/5

> 2026-07 复核：diagnostics、freshness 和 security workflows 明显改善，但它仍是年轻高权限 skill，涉及社交/API token 与 cookie，且本轮未 live run；推荐仍限于审读/隔离试用。


**目标角色**：适合需要快速追踪“最近 30 天社区真实反馈”的个人研究者、AI 工具使用者、产品/销售/投资前调研者，以及愿意在 Claude Code/Codex/Cursor/Gemini CLI/OpenClaw 等 harness 中安装 agent skill 的 power user。

推荐理由：它补的是 LLM 训练时滞与传统搜索排序的空位。对于“最近 AI 工具社区怎么评价 X”“某人最近在做什么”“两个工具最近谁更受开发者关注”这类问题，跨 Reddit/X/YouTube/HN/Polymarket/GitHub 的聚合框架确实有独特价值 [GH:readme]。

采用时要保守：不要把它当事实真理机。社媒互动代表“可见讨论”，不是客观事实；Polymarket odds 是市场信号，不是因果证据；X/TikTok/Instagram 等来源依赖第三方抓取与 token/cookie，可靠性、成本和合规性都要逐项审计 [GH:readme][Source:skill]。

结论：**值得收录；个人研究/热点扫描可试用，敏感账号和生产环境需隔离。**

## 优势

1. **recency-first 定位清楚**：专门解决“最近 30 天发生了什么、社区怎么说”的问题，而不是泛化成普通 web search [GH:readme]。
2. **多源覆盖强**：README 列出 Reddit、X、YouTube、TikTok、Instagram、HN、Polymarket、GitHub、Digg、Threads、Pinterest、Bluesky、Perplexity、Web 等来源；部分可零配置，部分通过 optional env 解锁 [GH:readme][Source:skill]。
3. **agent skill + engine 结合**：SKILL.md 负责宿主模型行为契约，Python engine 负责聚合与渲染，比纯 Markdown skill 更可验证 [Source:skill][Source:agents]。
4. **测试与工作流存在**：当前 tree scan 识别 207 个 test-ish files 与 6 个 workflows，pyproject 配置 pytest；本轮没有执行 test suite [Source:local-scan][Source:pyproject]。
5. **安装面广**：README 给出 Claude Code marketplace、Agent Skills hosts、Claude Desktop、OpenClaw，以及 v3.17 的 native Codex/Grok plugin paths，并声称覆盖 50+ Agent Skills hosts [GH:readme][GH:release]。
6. **运维与输出面增强**：doctor/probe/postmortem、freshness verification、HTML/JSON export、discovery/drill 与 local research library 让它从一次性 skill 向可维护 research workflow 演进 [GH:release]。

## 劣势

1. **项目非常年轻**：2026-01 创建，六周内从 v3.3 快速推进到 v3.17；长期稳定性、host 兼容性和外部 API 变动耐受尚未经过时间验证 [GH:api][GH:release]。
2. **外部依赖和 credential surface 大**：可选 env 涵盖 ScrapeCreators/provider keys、X cookie/token、浏览器 session、Bluesky 与本地 Xiaohongshu companion service 等，使用前必须逐项管理密钥、cookie、端口和合规风险 [Source:skill][GH:readme]。
3. **没有 SECURITY.md/CONTRIBUTING.md 信号**：GitHub community profile 未显示 Code of Conduct、CONTRIBUTING 或 Security policy；对一个会读取网络内容并让 agent 写文件的工具，这是治理短板 [GH:community]。
4. **性能无法从 README 直接验证**：多源并行和 comparisons 听起来强，但本次没有跑真实查询；资源效率只能按架构与本地体量保守评分 [GH:readme][Source:local-scan]。
5. **社媒信号天然偏差**：upvotes、likes、views、market odds 是 engagement signal，不是 truth signal；用于判断“大家在说什么”很好，用于严肃事实判断要回到 primary sources。

---

## 适合什么场景

- AI 工具、开发者社区、产品口碑的最近 30 天扫描。
- 为论文/技术发布追踪增加 arXiv 与 Techmeme 信号，并用 freshness verification 检查引用时效 [GH:release]。
- 会前人物/公司调研：看最近 PR、tweets、YouTube/podcast、Reddit 讨论，而不是只看 LinkedIn 或官网 [GH:readme]。
- 比较两个或多个工具的社区讨论热度与痛点。
- 生成可分享的 HTML brief，给 Slack、Notion、email 或个人知识库使用 [GH:readme]。
- 研究“agent skill 如何把宿主模型和本地 engine 组合成产品”。

## 不适合什么场景

- 严肃事实核查的最终来源；它更像 discovery 和 synthesis layer。
- 无法接受把 cookie/API key 暴露给本地 agent/runtime 的环境。
- 不能隔离本地 companion service、research library 文件和浏览器 session 的敏感终端。
- 对成本高度敏感但又要开 X/TikTok/Instagram/Perplexity/paid search 的场景。
- 需要长期稳定 API 或企业 SLA 的生产工作流。
- 不使用 agent harness、只想要传统 CLI 工具的用户；项目主路径是 slash-command skill [Source:agents]。

## 与类似项目对比

| 项目 | 定位 | 相对本项目 |
|------|------|-----------|
| last30days | 多源 recency research skill | 更偏“最近 30 天社区/社媒/预测市场信号聚合”，是研究工具而非通用 SDLC 流程包 |
| Superpowers | agentic SDLC / engineering discipline skills | Superpowers 管 agent 如何做工程流程；last30days 管 agent 如何做近期信息收集，两者问题域不同 [L1:superpowers] |
| Agent Skills | production-oriented engineering skills pack | Agent Skills 是通用工程 workflow 资产；last30days 是一个带 Python engine 的垂直 research skill [L1:agent-skills] |

上述项目跨 `ai-programs/ai-harness/skills` 与相邻 `ai-programs/ai-harness/ai-plugins` 做定位级对比；Superpowers 与 Agent Skills 基于本地 wiki 已收录 plugin 条目作参照，本条目未重新按同一 10 维度深审它们。

---

## 它能做什么

- 用 `/last30days <topic>` 触发近期研究，并由宿主模型生成 synthesis [GH:readme][Source:skill]。
- 从 Reddit、HN、Polymarket、GitHub 等零配置或低配置来源开始；X、YouTube、TikTok、Instagram、Threads、Pinterest、Perplexity 等通过可选 API key/cookie 解锁 [GH:readme][Source:skill]。
- 为 named entity 做预研究与 handle/subreddit/channel resolution；README 说明 v3 engine 会先理解 topic 再搜 [GH:readme]。
- 合并跨来源 story clusters，避免同一事件在 Reddit/X/YouTube 中重复出现 [GH:readme]。
- 做 tool/person/topic comparisons、GitHub person-mode、ELI5 rewriting、HTML brief export [GH:readme]。
- 运行 `--doctor` / source probe / postmortem 诊断连接器；用 discovery/drill 追踪新线索，并把 JSON/HTML 保存进带 feed 与 full-text search 的本地 library [GH:release]。

## 运行环境与资源占用

| 场景 | CPU | 内存 | 存储 | 说明 |
|------|-----|------|------|------|
| 最小 | 本地普通 CPU | 低到中等，未实测 | GitHub diskUsage≈49.7 MB | Skill/engine 本体较小；真实资源取决于查询 fan-out [GH:api] |
| 推荐 | 本地普通 CPU + 稳定网络 | 中等，取决于 transcript/posts 数量 | 需要保存 brief/raw 输出空间 | 多源并行、视频 transcript 和 HTML/raw brief 会增加 I/O 与网络成本 |

- **运行时**：Python 3.12+，node/python3；pyproject 运行时 dependencies 列表为空，dev 依赖 pytest/pytest-cov [Source:pyproject][Source:skill]。
- **性能评分边界**：3/5 是未实测时的中性分，不表示多源并行已经被本次验证为高效；真实耗时取决于启用 source、第三方 API 延迟和 transcript/post 数量。
- **操作系统**：未见 OS 专属路径；作为 agent skill 和 Python engine，主要依赖宿主 harness 与网络 API。
- **Docker**：未验证官方 Docker 路径；本条设为 `docker_support: false`。
- **GPU**：不需要。
- **外部依赖**：多种可选 API key/cookie/local companion service；这是能力来源，也是安全、可靠性与成本来源 [Source:skill][GH:readme]。

## 上手体验

评分 4/5。

README 给出 Claude Code marketplace、Agent Skills、Claude Desktop、OpenClaw 和 native Codex/Grok 等安装路径，并提供 `--doctor`、source probe、postmortem 与 setup guidance [GH:readme][GH:release]。这对目标用户是好的 first-run/diagnostic UX，但本轮没有实际安装验证。

扣分点在于它并非单纯 npm/CLI：真实体验取决于宿主 agent 是否正确加载 SKILL.md、是否遵守输出契约、是否能安全传递计划与 flags。SKILL.md 自身长达 1700+ 行，说明行为契约复杂；越复杂，越可能在不同 harness 上出现边界差异 [Source:skill]。

## 代码质量

评分 4/5。

本分数评价 repo hygiene 与可维护结构，不是端到端搜索质量。当前 scan 为 files=407、workflows=6、test-ish files=207；结构包含 Python engine、tests/docs/hooks、CONFIGURATION/AGENTS/CHANGELOG、uv lock 和 pytest 配置 [Source:local-scan][Source:pyproject]。AGENTS.md 对产品边界、engine fallback、测试命令、配置维护仍有清楚规范 [Source:agents]。

保守不打 5：本次没有运行 test suite；项目大量功能依赖外部平台、cookie、API 与 companion services，静态 test 文件和 workflow 能证明工程投入，不能完全证明端到端检索质量或合规性。

## 可扩展性

评分 4/5。

作为 skill package，它的扩展面主要是：新增 source connector、调整 ranking/synthesis、增加 host 安装路径、输出格式、query mode、freshness check 或 library backend。SKILL.md metadata 明确列出 tools/env/bins；AGENTS.md 要求新增 env/flag/host pattern 时同步配置文档 [Source:skill][Source:agents]。

它不是一个通用 plugin framework，因此不打 5。扩展者仍需理解很长的 SKILL.md 契约和 Python engine 内部结构；新增平台 source 还牵涉 API 合规、付费与反爬边界。

## 文档质量

评分 4/5。

README 是强产品文档：定位、source matrix、install table、doctor/discovery/library/freshness、provider costs 和 credential boundaries 都较清楚 [GH:readme]。AGENTS.md 与 CONFIGURATION.md 给维护者补充项目结构与规则 [Source:agents][Source:local-scan]。

扣分在信息量过大：SKILL.md 很长，且包含大量历史 failure mode 与输出 law；这对 agent 行为约束有用，但对人类快速审阅并不轻。没有独立 hosted docs 也让深层资料主要留在 repo 内。

## 社区与成熟度

| 维度 | 评分 | 说明 |
|------|------|------|
| 社区活跃度 | 4/5 | 2026-07-22 snapshot 显示 53.0k stars、4.6k forks、51 open issues、32 open PRs；热度很强，但 star spike 不能等同长期生产采用 [GH:api] |
| 成熟度 | 2/5 | 2026-01 创建，当前 v3.17.0；连接器、host packaging、diagnostics 与 library 功能快速扩张，稳定性仍需时间证明 [GH:api][GH:release] |

本次 GraphQL 将 open issues 与 open PRs 分开记录为 51/32；不使用会把 PR 计入的 REST `open_issues_count` 作 bug-backlog 结论 [GH:api]。

## 安全与风险

评分 3/5。

GitHub repository security-advisories API 在本次检查返回 `[]`；这只表示“本次未发现仓库发布的 advisory”，不是无漏洞证明 [GH:advisories]。真正的风险来自权限模型：skill 允许 Bash/Read/Write/WebSearch，且可接入 API key、X/browser cookie、auth token、本地 companion service 和 research-library 文件；一旦 query 或网页内容带 prompt injection，agent synthesis、shell 调用与写文件路径都需要边界控制 [Source:skill][GH:readme]。

Community profile 仍未显示 SECURITY.md/CONTRIBUTING.md/Code of Conduct；release notes 虽显示新增 CodeQL、secret scanning、dependency review、artifact signing/SBOM 等 workflows，这些是正面工程信号，却不能替代公开 security policy 和运行时隔离 [GH:community][GH:release]。个人隔离环境可以试；不要在生产账号、企业内部资料、云控制台或支付相关 workflow 中裸跑。

## 学习价值

很高。last30days 是研究 agent productization 的好案例：它展示了如何把一份很强的 SKILL.md 行为契约、一个实际 Python engine、多源 API、host-specific install 和 shareable artifact 组合成一个“不是网页、不是 CLI、而是 agent-native tool”的产品。

对 Develata 尤其有两个可学点：其一，recency research 的 source fusion/ranking/synthesis 思路；其二，长 SKILL.md 中用 failure-mode laws 约束模型输出的工程经验。但要取其义，不必全盘照搬其复杂度。
