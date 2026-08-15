---
title: "boss-zhipin-scraper"
created: 2026-08-15
updated: 2026-08-15
type: repository-analysis
repo_url: "https://github.com/eatmoreduck/boss-zhipin-scraper"
category: "ai-programs/agent-infrastructure"
tags: [web-scraping, job-data, browser-automation, chrome-cdp, python, hermes-skill]
previous_repo: ""
successor: ""
primary_language: "Python"
license: "MIT"
stars: 1110
forks: 138
last_checked: 2026-08-15
last_verified: 2026-08-15
evidence: "source-code review + project-declared mocked test run + GitHub metadata; no real Chrome/BOSS production run, account test, or performance benchmark"
archived_reason: ""
docker_support: false
gpu_required: false
estimated_cpu: "1 core for one serial Chrome/CDP run (heuristic; not benchmarked)"
estimated_memory: "hundreds of MB or more; Chrome/profile dominates (heuristic; not benchmarked)"
estimated_storage: "small Python package plus persistent Chrome profile and exported job data"
status: active
ratings:
  capability: 3
  usability: 3
  performance: 3
  code_quality: 3
  documentation: 3
  community: 3
  maturity: 2
  extensibility: 2
  security: 3
  recommendation: 3
overall_score: 2.8
sources:
  - "[GH] https://github.com/eatmoreduck/boss-zhipin-scraper"
  - "[GH:api] GitHub API snapshot 2026-08-15: default_branch=master, created_at=2026-06-11, pushed_at=2026-08-14, stars=1110, forks=138, primary language=Python, license=MIT, REST open_issues_count=7; GraphQL reports open issues=7, open PRs=0, merged PRs=23, releases=0; tags endpoint returned []; six listed contributors; latest commit=2bc40f56a3ca (2026-08-14)."
  - "[GH:issues] GitHub API issue snapshot 2026-08-15: seven open issues include #30 (Windows CDP detected / code 37, bug, open), #46 (macOS Chromium support, enhancement, open), and #50 (newly posted jobs, question, open)."
  - "[GH:advisory] GitHub repository security-advisories endpoint queried 2026-08-15; returned []. This is only a negative lookup result, not proof of safety."
  - "[GH:local-scan] Shallow clone /opt/data/tmp/boss-zhipin-scraper-wiki-source at master commit 2bc40f56a3ca3249ce3b98cdda0187e0bd612aa5; inspected project root, manifests, governance docs, two scripts, two test files, and source tree. Core scripts/boss_cdp_raw.py is 2,676 lines; no tracked GitHub Actions workflow or common formatter/type-checker configuration was found."
  - "[Local:README] Local README.md inspected 2026-08-15: project disclaimer; documented CLI capabilities, macOS/Linux support claim, Windows limitation note, persistent isolated profile, passive list-response capture, JSON/CSV output, and personal-use boundary."
  - "[Local:AGENTS] Local AGENTS.md inspected 2026-08-15: current architecture, one-file principle, mock-test boundary, real-browser validation requirement, and prohibition on fingerprint forgery/CAPTCHA bypass/proxy rotation."
  - "[Local:core] Local scripts/boss_cdp_raw.py inspected at 2bc40f56a3ca: loopback CDP client, Network-domain list-response capture, detail-page JavaScript extraction, page interaction/visibility emulation, request/page caps, atomic JSON writes, isolated-profile creation, optional cookie-file copy, and Chrome launch arguments."
  - "[Local:tests] Verification run 2026-08-15 in the shallow clone: python3 -m py_compile scripts/boss_cdp_raw.py scripts/job_summary.py and python3 -m unittest tests.test_chrome_setup tests.test_job_summary both exited 0; unittest ran 96 tests in 0.633s. The test modules mock requests/websocket and do not validate a real Chrome, BOSS account, network response, or account-policy outcome."
  - "[Local:changelog] Local CHANGELOG.md inspected 2026-08-15: recent core change replaced injected list XHR with passive Network capture after code-37 detection; records current limitations and 96 mocked tests."
  - "[Local:skill] Local SKILL.md inspected 2026-08-15: its Work Principle section still describes injected synchronous XHR and a different per-page behavior, conflicting with current README/AGENTS/changelog passive-capture architecture."
  - "[WikiLocal:comparisons] Local positioning references inspected 2026-08-15: ai-programs/agent-infrastructure/{scrapy,crawlee,autoscraper}.md; comparison rows use existing local-wiki category placement only, not a fresh re-audit of those projects."
---

# boss-zhipin-scraper

> 一个面向 BOSS直聘的 Chrome-CDP 职位数据采集脚本：功能已不止“抓列表”，但它仍是高摩擦、强目标站绑定、不可当作通用爬虫框架的个人研究工具。
>
> **状态**: `active` · **总分**: 2.8/5 · **推荐度**: 3/5
>
> **验证边界**：本轮完成源码审查与项目声明的 mock 测试；没有启动真实 Chrome、登录 BOSS直聘、抓取任何岗位，也没有验证目标站条款、账号风控结果或性能指标 [Local:tests]。
>
> **证据标记**：`[GH:*]` 是 2026-08-15 的 GitHub/API 快照，`[Local:*]` 是固定提交的本地源码或验证，`[WikiLocal:*]` 仅用于本地 wiki 的分类定位参照。

## 一句话总结

它只适合具备本地 Python/浏览器排障能力、已自行确认使用许可、并愿意把账号和输出数据隔离的个人做低频岗位研究；不适合做通用 scraper、无监督 Agent 能力或组织级数据管道。

## 总体评价

仓库当前的工程方向比早期“直接注入请求”更克制：列表链路改为通过 CDP `Network` 域捕获页面自行产生的响应，并在受限状态时停止；同时保留职位详情页的 JavaScript 提取、浏览器页面交互和可见性/焦点模拟 [Local:core][Local:changelog]。这能说明维护者在跟随目标站行为修复问题，却也说明其核心价值与脆弱性来自同一处：它依赖一个会持续改变的、带登录和风控的单一站点。

默认创建独立持久 Chrome profile、不默认复制主浏览器 Cookie、使用原子 JSON 写入，都是有价值的风险收敛 [Local:README][Local:core]。但这些措施不等于账号、CDP 调试接口、平台条款或导出的个人/招聘数据已经安全；尤其不能将其包装为“安全的自动求职 Agent”。

## 推荐度：3/5

**目标角色**：能自行审计本地浏览器权限、确认目标站许可、控制采集频率并承担失效/账号风险的个人求职研究者。对这一窄角色，它可以作为一个可读、活跃、功能相对齐全的实验性工具；对团队、商业数据业务、长期无人值守自动化或高价值账号，推荐度应视为 1–2/5，而非此处的 3/5。

给 3 而不是 4 的原因并非 star 数或依赖数量，而是：仓库创建于 2026-06、尚无 GitHub release 或 tag、核心列表捕获路径最近刚在出现 `code 37` 后改写，且 Windows CDP 检测故障仍是开放 issue [GH:api][GH:issues][Local:changelog]。给 3 而不是 2 的原因是：维护者近期仍在修复核心链路，README/AGENTS/测试覆盖了不少失败分支，默认隔离 profile 也比直接复用主浏览器账户更谨慎 [Local:README][Local:AGENTS][Local:tests]。

## 优势

1. **目标任务覆盖完整**：关键词/城市/筛选、列表与详情、JSON/CSV、去重、增量写入和本地岗位摘要形成了较完整的个人研究闭环 [Local:README][Local:core]。
2. **当前列表链路有明确的失败语义**：源码区分未登录、受限、空结果和响应异常；遇到已知受限状态会终止而非盲目密集重试 [Local:core]。
3. **默认账户边界优于直接复用主 profile**：专用 profile 持久化，主 Chrome Cookie 的复制是显式选项；输出写入使用临时文件加替换来避免中断时截断 JSON [Local:README][Local:core]。
4. **依赖很轻，且本轮静态验证可复现**：运行依赖仅 `requests` 与 `websocket-client`；源码通过编译，项目声明的 mock 套件实际跑过 96 个测试 [Local:tests]。

## 劣势

1. **极强的目标站耦合**：搜索页行为、API 响应、风控和浏览器特征任一变化都可能让核心路径失效；近期 Windows `code 37` 相关报告仍未关闭 [GH:issues][Local:AGENTS]。
2. **并非低权限的“读取工具”**：它管理持久登录 profile、控制浏览器 CDP、执行页面 JavaScript，并含滚动/鼠标/可见性与焦点模拟；应把它按有账号态的 browser automation 看待 [Local:core]。
3. **工程可维护性受单文件约束**：主脚本 2,676 行，项目明确要求核心逻辑继续放在同一文件；没有已核实的 CI workflow，后续改动容易把站点适配、CLI、profile 管理和数据处理缠在一起 [GH:local-scan][Local:AGENTS]。
4. **文档出现技术漂移**：README、AGENTS 和 changelog 已说明当前列表是被动捕获，但安装给 Agent 的 `SKILL.md` 仍写注入同步 XHR；这会让按 Skill 操作或审计行为的人得到过期架构图 [Local:README][Local:AGENTS][Local:changelog][Local:skill]。

---

## 适合什么场景

- 已确认合规边界后的个人、低频职位市场观察，且使用专用低价值浏览器 profile。
- 对已合法获得的 JSON 结果做薪资区间、技能词频和职位描述聚合；`job_summary.py` 不读取本地简历，也不生成个人匹配分 [Local:README]。
- 学习原始 CDP 事件缓冲、站点响应的被动捕获、原子输出和“mock 测试不能替代真实浏览器验证”的工程教训 [Local:AGENTS][Local:tests]。

## 不适合什么场景

- 商业转售、批量人才画像、线索采集、招聘外包或任何未经目标站明确许可的规模化数据业务。
- 把它安装给一个可接收任意自然语言输入的无监督 Agent，再让该 Agent 操作持久登录态或在后台连续抓取。
- 需要跨网站通用抽取、队列/调度/观测/多租户隔离的生产 crawler；它没有这些框架层能力。
- 无法自行处理 Chrome、登录、风控、站点改版或操作系统差异的用户；README 把 macOS/Linux列为支持平台，而 Windows 的真实抓取链路仍需要外部反馈 [Local:README][GH:issues]。

## 与类似项目对比

| 项目 | 定位 | 相对本项目 |
|------|------|-----------|
| Scrapy | Python 通用 crawler framework | Scrapy 面向可组合的 spider/pipeline；本项目是单站、账号态和浏览器 CDP 绑定的脚本。 |
| Crawlee | JS/TS browser/web-data crawling framework | Crawlee 的中心是通用 crawler 生命周期；本项目的中心是 BOSS直聘岗位数据与本地摘要。 |
| AutoScraper | 样例驱动的轻量网页字段抽取库 | AutoScraper 从示例学习静态/半静态页面规则；本项目依赖一个特定登录站点和其浏览器行为。 |

上述项目按 `ai-programs/agent-infrastructure` 同类范围做定位级对比，依据本地 wiki 既有条目的标题级定位与分类语境，而非本轮重新抓取外部事实；这不是功能、速度或安全性的横向 benchmark [WikiLocal:comparisons]。

---

## 它能做什么

- 通过本地 Chrome CDP 获取职位列表的页面自身响应，提取明文薪资、职位、公司、地点、筛选字段及链接等结构化字段 [Local:README][Local:core]。
- 按关键词、城市及多类条件筛选；本地城市码表加运行时回退支持更多城市解析 [Local:README][Local:core]。
- 选择性获取职位详情，导出 JSON/CSV，按职位标识去重，并从既有数据生成薪资/技能/岗位文本的聚合摘要 [Local:README][Local:core]。
- 诊断本地运行环境、管理专用 Chrome profile、识别若干登录或受限状态；这些功能只改善可诊断性，不保证目标站继续允许或稳定提供数据 [Local:README][Local:core]。

能力评分 **3/5**：对“个人职位研究”这一窄目标，能力已超过最小 PoC；但单站绑定、平台限制和不可验证的实时成功率使它不能得到通用 crawler 的高分。

## 运行环境与资源占用

| 场景 | CPU | 内存 | 存储 | 说明 |
|------|-----|------|------|------|
| 仅处理已有结果 | 1 core | 很低 | 输入/输出文件为主 | `job_summary.py` 只做本地 JSON 聚合。 |
| 单次浏览器采集 | 1 core | 数百 MB+（估计） | Chrome profile + 导出数据 | 一个 GUI Chrome 和 CDP 会话主导资源；源码按序处理并主动等待。 |

- **运行时**：Python >=3.10；依赖 `requests` 与 `websocket-client` [Local:README][GH:local-scan]。
- **操作系统**：README 主张 macOS/Linux；Windows 已有 unit/basic CLI 验证，但真实抓取兼容性没有同等证据 [Local:README][GH:issues]。
- **Docker**：未发现官方用户向 Docker image 或容器使用路径，设为 false [GH:local-scan]。
- **GPU**：不需要。
- **外部依赖**：本地 Chrome、用户自行建立的登录态、目标站网络响应和当前页面行为；这些都是成功运行的外部前提 [Local:README][Local:core]。

性能评分 **3/5**：相较完整 browser-automation framework，原始 CDP 和少量 Python 依赖可能较轻；但它仍必须维持真实 Chrome，并故意使用串行等待与人机交互节奏。本轮未跑 benchmark，不能把这一设计推演成高吞吐或低内存结论。

## 上手体验

评分 **3/5**。README 给出了安装、隔离 profile、环境检查和输出说明，普通 CLI 路径可理解 [Local:README]；但获得首次价值仍取决于浏览器、手动登录、CDP 调试端口、站点响应和可能的受限状态。对会排障的个人属于可接受学习曲线，对普通求职者则远非“装完即用”。

## 代码质量

评分 **3/5**。优点是源码中能看到错误分类、原子落盘、profile 精确匹配以及较多 mock 回归测试；本轮实际通过了语法检查和 96 个测试 [Local:core][Local:tests]。扣分来自核心逻辑集中于 2,676 行单文件、没有本轮可核实的 CI workflow、且项目自己的 AGENTS 已明说 mock 测试覆盖不了真实浏览器焦点、SPA 和风控行为，必须另做真机验证 [GH:local-scan][Local:AGENTS]。

## 可扩展性

评分 **2/5**。CLI 参数、可读的 Python 脚本和 JSON 输出足以支持个人 fork 或外部后处理；但没有插件、hook、稳定 API 或模块化 crawler 生命周期。仓库明示“单文件原则”，所以跨浏览器、跨站点、并发调度或持久存储的深度改造大概率需要 fork 核心脚本，而不是组合扩展 [Local:AGENTS][Local:core]。

## 文档质量

评分 **3/5**。README 中英版本、CHANGELOG、CONTRIBUTING、AGENTS 和可安装的 Skill 都比普通小脚本丰富，且关于 profile、限制状态和输出的说明相对具体 [Local:README][Local:AGENTS]。但关键技术模型在 `SKILL.md` 与当前实现之间不一致：Skill 仍叙述注入 XHR，当前 README/AGENTS/changelog 则已转为被动捕获；这类 drift 对一个可能被 Agent 直接执行的工具是实质性缺陷 [Local:skill][Local:changelog]。

## 社区与成熟度

| 维度 | 评分 | 说明 |
|------|------|------|
| 社区活跃度 | 3/5 | 2026-08-15 快照为 1,110 stars、138 forks、六名列出贡献者、23 个已合并 PR；仓库在快照前一天仍有提交。它已有互动，但仍是很年轻的小型项目 [GH:api]。 |
| 成熟度 | 2/5 | 仓库 2026-06 才创建，尚无 GitHub release/tag，近期又改写了最关键的列表捕获机制；当前开放 issue 仍涉及 Windows 风控与浏览器兼容性 [GH:api][GH:issues][Local:changelog]。 |

## 安全与风险

评分 **3/5**。正面措施包括默认隔离 profile、明确把主 Cookie 复制设为 opt-in、对请求页数/总量设上限、在若干受限状态下中止，以及原子落盘 [Local:README][Local:core]。GitHub 的 repository-advisories 端点本轮返回空，但这不构成“无漏洞”证明 [GH:advisory]。

真正的风险面在于它持久保存登录态并连接完整 CDP：任何能够连接该端点的不可信本地进程都可能获得远高于普通 HTTP scraper 的浏览器权限。源码的客户端访问 loopback，但启动 Chrome 时传入调试端口和 `--remote-allow-origins=*`，且未在命令行中显式指定调试监听地址；本轮没有验证网页或非本机主体能否连接，也没有验证实际监听范围，因此不能把“本机使用”当成已证明的隔离边界 [Local:core]。此外，源码仍含页面 JavaScript、滚动/鼠标及可见性/焦点模拟；即便项目声明拒绝指纹伪造、验证码绕过和代理轮换，也不消除账号、平台条款、数据最小化和站点策略风险 [Local:AGENTS][Local:core]。

实践上应使用独立低价值 profile、最小权限账户、受控输出目录与人工确认；不要让通用 Agent、共享工作站或生产浏览器复用该 profile，更不要把该仓库的存在视为目标站许可的替代品。

## 学习价值

中高。它是一个很具体的案例：为何“单元测试全绿”仍不足以证明浏览器自动化可用；为何页面自身请求的观察与主动请求并非同一行为；以及 profile 隔离、写盘原子性、失败状态设计怎样影响实际工具质量 [Local:AGENTS][Local:changelog][Local:tests]。但学习其 CDP/站点适配技巧时，应把重点放在边界、可观测性与合规设计，而不是把它当作绕过目标站防护的通用模板。
