---
title: "Khazix Skills"
created: 2026-08-02
updated: 2026-08-02
type: repository-analysis
repo_url: "https://github.com/KKKKhazix/khazix-skills"
category: "ai-programs/ai-harness/skills"
tags: ["agent-skills", "skills", "claude-code", "codex", "knowledge-governance", "deep-research", "writing", "storage-analysis", "ai-news"]
previous_repo: ""
successor: ""
primary_language: "Markdown / Python / Shell"
license: "MIT"
stars: 18916
forks: 2095
last_checked: 2026-08-02
last_verified: 2026-08-02
evidence: "GitHub REST/GraphQL/community/advisory snapshot + local shallow-clone static review at f430c4b11eb7ce715d77768ff787855b7a025187 + official Agent Skills specification + AI HOT docs/terms/OpenAPI and narrow live API read; no installation into a real agent, destructive-path exercise, Windows run, PDF generation, full task benchmark, or upstream eval execution"
archived_reason: ""
docker_support: false
gpu_required: false
estimated_cpu: "skill files have no standalone resident runtime; storage scan, PDF generation, web research and invoked agent tasks determine actual CPU"
estimated_memory: "skill files have no resident process; actual memory and context cost vary substantially by activated skill and downstream tools"
estimated_storage: "GitHub API repository-size metric=231 KB; generated reports, downloaded dependencies, caches and agent artifacts are additional"
status: active
ratings:
  capability: 3
  usability: 3
  performance: 3
  code_quality: 3
  documentation: 4
  community: 2
  maturity: 2
  extensibility: 4
  security: 2
  recommendation: 3
overall_score: 2.9
sources:
  - "[GH] https://github.com/KKKKhazix/khazix-skills"
  - "[GH:api] GitHub REST/GraphQL snapshot 2026-08-02 UTC: canonical full_name=KKKKhazix/khazix-skills, created_at=2026-04-06, pushed_at=2026-08-01, default_branch=main, archived=false, primary language=Python, root license=MIT, API size=231 KB, stars=18916, forks=2095, subscribers=106, REST open_issues_count=37, default-branch history totalCount=64"
  - "[GH:activity] GitHub GraphQL/search snapshot 2026-08-02 UTC: open issues=18, closed issues=5, open PRs=19, closed-unmerged PRs=8, merged PRs=0, total PRs=27, GitHub releases=0; REST open_issues_count reconciles as 18 issues + 19 PRs"
  - "[GH:prs] Oldest-open-PR sample checked 2026-08-02 UTC: #4 Claude plugin manifest opened 2026-04-07; #6 hv-analysis Obsidian output opened 2026-04-13; #12/#13 prompt/closeout fixes opened 2026-04-30; #17/#18 neat-freak safety/platform changes opened 2026-05; search returned zero merged PRs"
  - "[GH:issues] Open/closed issue samples checked 2026-08-02 UTC: open #47 reported AI HOT site unavailable on 2026-07-09 and received one reply; open #26 requests search; open #29 requests translation/original titles; closed #32 reported AI HOT Skill/Web output mismatch; these are user reports, not independently reproduced defects"
  - "[GH:community] GitHub contributors/community endpoints checked 2026-08-02 UTC: contributors first page returned one account (KKKKhazix, 53 contributions); community health=42; README and LICENSE detected; CONTRIBUTING, CODE_OF_CONDUCT, issue template, PR template and SECURITY policy were not detected; repository has_discussions=false"
  - "[GH:advisories] https://api.github.com/repos/KKKKhazix/khazix-skills/security-advisories queried 2026-08-02 UTC; returned [] for published repository advisories in this check"
  - "[GH:readme] README.md and README.en.md at commit f430c4b11eb7ce715d77768ff787855b7a025187 inspected 2026-08-02; describe six skills, per-directory installation, Agent Skills compatibility, root MIT license and author-reported daily use; the '40+ agents' and 'same effect by pasting SKILL.md' statements are upstream claims, not independently validated here"
  - "[Local:structure] Local shallow clone /opt/data/tmp/repo-wiki-khazix-skills-20260802 at commit f430c4b11eb7ce715d77768ff787855b7a025187; six top-level SKILL.md files: leader, storage-analyzer, aihot, neat-freak, hv-analysis, khazix-writer; path scan returned 7 Python files and 3 shell files including eval fixtures; no .github directory, Dockerfile or docker-compose path was found in this scan"
  - "[Local:skill-files] Six SKILL.md files inspected at commit f430c4b11eb7ce715d77768ff787855b7a025187; byte sizes: leader=7169, aihot=8999, storage-analyzer=11410, neat-freak=15454, hv-analysis=19722, khazix-writer=30173; all have matching lowercase directory/name frontmatter; all six include at least one supporting reference/script/asset/eval/agent-metadata surface, but progressive-disclosure depth is uneven"
  - "[Local:leader] leader/SKILL.md plus references/{anatomy.md,style.md} inspected at commit f430c4b11eb7ce715d77768ff787855b7a025187; workflow performs repo/source research, asks at most five decision questions, emits a <=4000-character goal task book, and specifies evidence, anti-cheat, scope, failure-stop, progress/resume and hidden-review checks; these are instruction contracts, not task-benchmark results"
  - "[Local:neat-freak] neat-freak SKILL.md, four references, audit-inventory.sh, evals/validate.py and eval tree inspected at commit f430c4b11eb7ce715d77768ff787855b7a025187; file search returned 85 paths under evals; validator source requires >=11 behavior evals, >=20 trigger cases, reference existence, a read-only inventory script and explicit authorization/memory/cleanup boundaries; this audit inspected but did not execute the validator or task-level evals"
  - "[Local:storage] storage-analyzer SKILL.md plus scripts/{scan.py,build_report.py,server.py} inspected at commit f430c4b11eb7ce715d77768ff787855b7a025187; scan.py is read-only and supports macOS plus explicitly untested Windows; server.py binds 127.0.0.1/random port, uses a random token, Host check, realpath allowlists, HOME-or-/Applications root check and browser confirmation, but direct rm allowlists are derived from agent-produced green trash_paths, hard_delete uses shutil.rmtree/os.remove, and the root check permits HOME itself if it enters that report allowlist; no storage-analyzer test suite was found"
  - "[Local:aihot] aihot SKILL.md, references, six-entry manifest.sha256, agents/openai.yaml and install.sh inspected at commit f430c4b11eb7ce715d77768ff787855b7a025187; skill version=1.2.3; API scope is anonymous read-only under aihot.virxact.com; installer refuses sudo/ambiguous targets/symlinks, constrains filenames and file count, verifies same-origin SHA-256 values, then performs backup plus directory swap; the bootstrap installer itself is still fetched from the same hosted origin and no signature/out-of-band trust root was found"
  - "[Local:research-writing] hv-analysis/SKILL.md, khazix-writer/SKILL.md, both skills' references and hv-analysis/scripts/md_to_pdf.py inspected at commit f430c4b11eb7ce715d77768ff787855b7a025187; hv-analysis prescribes parallel web research, 10000-30000 Chinese-character reports, WeasyPrint PDF generation, Claude-specific WebSearch/WebFetch and /mnt/.claude path assumptions, and pip --break-system-packages; khazix-writer encodes the author's first-person persona, banned words/punctuation, rhythm/narrative patterns, examples and a four-layer style/content/self-review checklist, but includes no automated evaluator"
  - "[Local:license] Root LICENSE inspected at commit f430c4b11eb7ce715d77768ff787855b7a025187; standard MIT text, copyright 2026 数字生命卡兹克; aihot also carries a bundled MIT license"
  - "[AgentSkills:spec] https://agentskills.io/specification extracted 2026-08-02; requires matching lowercase name/directory and description<=1024 chars, supports optional scripts/references/assets, recommends main SKILL.md <500 lines and <5000 instruction tokens, and provides skills-ref validation guidance"
  - "[AIHOT:service] https://aihot.virxact.com/{agent,terms,openapi-v1.json} plus GET /api/v1/items?mode=selected&window=24h&limit=3 checked 2026-08-02 UTC; anonymous read-only v1 returned schemaVersion=1 and two current items in the narrow smoke read; terms promise a basic anonymous layer but no SLA and restrict pure mirrors/bulk public redistribution; agent page displayed Skill 1.2.2 while the repository copy reports 1.2.3"
  - "[WikiLocal:comparisons] Same-category local analyses inspected for positioning only: mattpocock-skills.md records 40 SKILL.md files, engineering-workflow focus and four public releases in its 2026-07-16 snapshot; openai-skills.md records a 44-skill official Codex catalog with mixed per-skill licenses and no releases in its 2026-05-31 snapshot; scientific-agent-skills.md records 148 application-science skills spanning bioinformatics, chemistry, clinical, materials, geospatial and ML in its 2026-07-12 snapshot; paths under /opt/data/wiki/github-repo-wiki/ai-programs/ai-harness/skills/; these are local-wiki positioning sources, not fresh competitor audits"
---

# Khazix Skills

> 数字生命卡兹克维护的六个中文 Agent Skills：把目标定义、磁盘分析、AI 资讯、知识收尾、深度研究和个人文风封装成可加载工作流。
>
> **状态**: `active` · **总分**: 2.9/5 · **推荐度**: 3/5
> **核验版本**: main commit `f430c4b11eb7ce715d77768ff787855b7a025187`；GitHub/API 快照 2026-08-02
> **验证边界**: 本轮核验 repository/docs/source/API contracts，并对 AI HOT 做了匿名只读窄 smoke read；未安装进真实 Agent、未执行上游 eval、磁盘删除、Windows 路径、PDF 生成或跨模型 task benchmark。

## 一句话总结

Khazix Skills 适合中文 Agent power user 和 skill author 挑选其中一两个方法做审查后试用；它有少数很具体、很有产品感的实现，但整个仓库仍是年轻的单人 skill pack，不宜被近 1.9 万 stars 诱导为“整包可信、跨 40+ Agent 行为一致”。

## 总体评价

这个仓库不是 prompt 大全，而是六个边界相对清楚的 Agent Skills：`leader` 定义长程目标；`storage-analyzer` 扫描磁盘并生成带本地操作面的报告；`aihot` 调用作者自有 AI HOT 服务；`neat-freak` 做项目知识/规则/记忆收尾；`hv-analysis` 生成横纵研究与 PDF；`khazix-writer` 复刻作者的中文长文风格 [GH:readme][Local:structure]。辅助脚本、references、assets、evals 和 OpenAI metadata 都服务于 skill 本身，没有形成独立 MCP、hook、agent bundle 或 runtime，因此产品中心仍是纯 skill corpus。

最强的部分是把抽象方法写成了有完成条件的 workflow。`leader` 的 goal 七问、防作弊验收、失败止损与暗卷思想有现实工程感；`neat-freak` 显式区分 code/runtime/docs/rules/memory/workspace 六个事实面，并把写 memory、跨项目编辑和破坏性清场放回宿主授权；`aihot` 对不可信资讯、cursor、ETag、错误恢复和同步原子性写得比一般“调用一个 API”的 skill 细 [Local:leader][Local:neat-freak][Local:aihot]。

短板是质量分布不均。只有 `neat-freak` 带显著 eval/fixture 投资；`storage-analyzer` 虽有真实 Python 实现和多层 guard，却把可直接删除路径的根信任交给 Agent 生成的 analysis JSON；`hv-analysis` 与 `khazix-writer` 仍是近两万到三万 byte 的单体 instructions，既有 context 成本，也缺真实 task eval [Local:skill-files][Local:storage][Local:research-writing]。再叠加无 GitHub release、无 repository CI、19 个 open PR 且 0 merged PR，现阶段更像作者公开的个人工作台，而不是稳定维护的公共 skill distribution [GH:activity][GH:prs]。

## 推荐度：3/5

**角色定位**：推荐给愿意逐 skill 阅读、固定 revision、限制工具权限并用真实任务 A/B 的中文 Agent 用户和 skill author；不推荐把整个仓库一次性注入生产 harness。

推荐度给 3，是因为它的学习价值高于整包采用价值：

1. `leader` 和 `neat-freak` 提供了有辨识度的目标合同、anti-cheat、事实面和 cleanup authorization 设计，可拆成自己的流程语言 [Local:neat-freak][GH:readme]。
2. `aihot` 当前 v1 API 可匿名只读访问，且 Skill 对实时资讯不使用训练记忆补答；若用户确实需要中文 AI 资讯，这是一个可独立评估的窄能力 [Local:aihot][AIHOT:service]。
3. `storage-analyzer` 有真实扫描、报告和本地服务代码，不只是描述“让 Agent 帮你清磁盘”；但删除面必须先补 protected-path denylist、report schema validation 和 tests，才适合承载真实用户数据 [Local:storage]。
4. 其余内容带有强作者偏好、平台假设与外部服务耦合；对已有成熟 harness，wholesale install 会带来 trigger overlap、方法论冲突、context bloat 和 side-effect authority 扩张。

结论：**收录、拆解、按单个 skill 试用；不 wholesale adopt。** 首选阅读 `leader` 与 `neat-freak`，`aihot` 作为单独 data-source skill 评估，`storage-analyzer` 先按高风险本地工具审查；个人文风和长篇研究 skill 更适合作为写法样本。

## 优势

1. **每个 skill 都有清楚的用户痛点**：目标定义、磁盘空间、实时资讯、知识收尾、深度研究和风格写作没有被塞进一个 all-in-one router [GH:readme]。
2. **六个 skill 都不是裸 prompt**：每个目录都至少有一种 references、scripts、assets、evals 或 agent metadata 等支撑材料，但拆分深度和验证强度差异很大 [Local:structure][Local:skill-files]。
3. **`neat-freak` 的 governance contract 较强**：范围、授权、事实状态、生成记忆只读、清场确认和 prompt-supply-chain 边界都写得具体，并有确定性 structural validator 与 fixture tree [Local:neat-freak]。
4. **`aihot` 的 API contract 完整**：只读匿名访问、稳定 v1、ETag、opaque cursor、snapshot/changes、rate-limit 退避、来源/再分发边界都明确；本轮窄 API read 成功 [Local:aihot][AIHOT:service]。
5. **`storage-analyzer` 有局部 defense-in-depth**：扫描器只读；操作服务默认 loopback、随机端口/token、Host check、realpath allowlist 和浏览器确认，且区分 green direct-delete、yellow trash、red open [Local:storage]。
6. **MIT + 中英 README**：root license 简单，中文用户可以直接读，English README 也解释六个技能 [Local:license][GH:readme]。
7. **个人方法有记忆点**：goal 七问、横纵双轴、HKR 选题和四层文风自检，比泛化的“best practices”更容易被讨论和改写。

## 劣势

1. **项目极年轻且没有仓库级 release**：2026-04 才创建，当前 64 个 default-branch commits、0 GitHub releases；内部 `neat-freak 3.0.0`、`aihot 1.2.3` 等版本不能替代 pack-level compatibility contract [GH:api][GH:activity]。
2. **公开协作管线几乎没有吸收贡献**：contributors endpoint 只返回 owner；27 个 PR 中 19 open、8 closed-unmerged、0 merged，最老一批从 2026-04 起悬而未决 [GH:activity][GH:prs][GH:community]。
3. **缺 repository CI/SECURITY/governance files**：本轮未发现 `.github`，community profile 也未检测到 CONTRIBUTING、Code of Conduct、templates 或 SECURITY；这不证明作者没有私有流程，但公开可审计面很薄 [Local:structure][GH:community]。
4. **验证投资严重不均**：`neat-freak` 有 validator/evals，其他五个没有同等级 behavior suite；README 的“自己每天跑通”是作者自述，不是跨模型可重复证据 [GH:readme][Local:neat-freak]。
5. **安装与兼容性表述偏乐观**：README 称支持 40+ Agent，并说不支持 Skill 时只贴 `SKILL.md`“效果一致”；但 storage/PDF/AI HOT 等能力依赖 scripts、references、网络或宿主工具，仅贴主文件不可能完整复现 [GH:readme][Local:structure][AgentSkills:spec]。
6. **context efficiency 不一致**：`leader`/`aihot` 较紧凑，`hv-analysis` 与 `khazix-writer` 主文件分别约 19.7 KB 与 30.2 KB；它们没有充分下沉到 references，存在超过 Agent Skills 推荐 instruction budget 的风险，本轮未用每个目标客户端 tokenizer 定量 [Local:skill-files][AgentSkills:spec]。
7. **平台与环境假设会漂移**：`hv-analysis` 写死 Claude 风格的 WebSearch/WebFetch、`/mnt/.claude/skills` 和 `pip --break-system-packages`；`leader` 依赖特定 `/goal` 语义；storage 的 Windows 路径明确未实机验证 [Local:research-writing][Local:storage]。
8. **外部服务和个人身份耦合**：`aihot` 依赖作者托管服务且无 SLA；`khazix-writer` 明确要求以作者第一人称写作，若缺少署名和人工事实输入，容易从“风格参考”滑向身份混淆或虚构经历 [AIHOT:service][Local:research-writing]。

## 适合什么场景

- 学习如何把个人方法论写成 Agent Skills，而不是只保存 prompt 片段。
- 为 coding/research agent 设计 goal brief、anti-cheat acceptance、failure budget 和 evidence contract。
- 审计并改造项目 docs/rules/memory closeout workflow。
- 在明确接受 AI HOT 服务条款和无 SLA 边界后，查询最近中文 AI 资讯。
- 在隔离测试目录中研究本地磁盘扫描/报告 UX 和 destructive-action guard。
- 分析如何把个人文风拆成 trigger、style constraints、examples 和 self-review layers。
- 需要中文优先、强作者观点、可复制修改的少量 skill，而不是大型官方 catalog。

## 不适合什么场景

- 无审查地全量安装到拥有 shell、git、filesystem 和 network 权限的生产 agent。
- 要求稳定 release、semantic versioning、CI、快速合并外部贡献和公开 security response 的组织。
- 不能接受第三方托管服务、无 SLA 或内容/再分发条款的资讯系统。
- 在真实主机上让未经验证的 Agent 自动生成 direct-delete allowlist。
- 希望“40+ Agent”在 trigger、tool name、path、confirmation 和 memory semantics 上严格一致。
- 需要轻量 research output，却不接受 10,000–30,000 字、并行 web research 和 PDF toolchain 的成本。
- 想要通用中文写作，而不是复刻特定作者的人格、口癖和公众号结构。
- 需要独立 benchmark 证明每个 skill 比无 skill baseline 更准确、更快或更省 token。

## 与类似项目对比

| 项目 | 定位 | 相对本项目 |
|------|------|-----------|
| Skills For Real Engineers | 软件工程方法论与 Agent Skills authoring corpus | 本地条目快照记录 40 个 skills、工程 workflow 焦点与四个公开 releases；Khazix Skills 只有六项，更偏中文 consumer-facing goal、资讯、内容和磁盘能力 [WikiLocal:comparisons]。 |
| OpenAI Skills | Codex 官方 system/curated skill catalog | 本地条目快照记录 44 个 official Codex skills 与 per-skill mixed licenses；Khazix Skills 是单一 MIT 的个人方法包 [WikiLocal:comparisons]。 |
| Scientific Agent Skills | 应用科学领域的大型专业 skill collection | 本地条目快照记录 148 项，并聚焦 bioinformatics、chemistry、clinical、materials、geospatial 与 ML；Khazix Skills 则覆盖六项通用个人工作流 [WikiLocal:comparisons]。 |

上述项目按 `ai-programs/ai-harness/skills` 同类范围做定位级对比，依据本地 wiki 既有分析而非本轮重新深审竞品；未按同一 10 维度框架重新校准 [WikiLocal:comparisons]。

## 它能做什么

能力广度评分 3/5，针对的是六个 skill 的**静态工作流覆盖与 helper 完整度**，不是跨 Agent 的任务成功率证明。

1. **`leader`**：先检查代码/来源，最多问五个决策题，再生成不超过 4000 字符的 goal task book；要求 measurable evidence、anti-cheat、scope allowlist、failure stop 和 resume state [Local:leader]。
2. **`storage-analyzer`**：在 macOS/Windows 收集磁盘信息和目录大小，由 Agent 分类后生成 HTML 报告；本地服务提供 open/trash/direct-delete action [Local:storage]。
3. **`aihot`**：查询 24 小时/7 天资讯、热点、日报、关键词与分类，并支持 selected snapshot + changes 增量镜像 [Local:aihot][AIHOT:service]。
4. **`neat-freak`**：核对 code/runtime/docs/rules/memory/workspace，修复 stale knowledge，控制 cleanup authorization，并输出 handoff/closeout 状态 [Local:neat-freak]。
5. **`hv-analysis`**：沿时间纵轴与同期竞品横轴做 web research，生成 10,000–30,000 字 Markdown/PDF 报告 [Local:research-writing]。
6. **`khazix-writer`**：按作者 persona、禁用词、节奏、叙事与四层自检写中文公众号长文 [Local:research-writing]。

只给 3：静态 source 证明六项 workflow 存在，其中三项还有较深 helper/eval/API contract，但没有证明它们在 representative agents、operating systems 和 adversarial inputs 上稳定；其中 research/writer 主要是方法文本，storage Windows 未实测，AI HOT 又依赖外部 service。按保守 hybrid corpus 口径，内容覆盖不能替代任务效果证据。

## 运行环境与资源占用

| 场景 | CPU | 内存 | 存储 | 说明 |
|------|-----|------|------|------|
| 仅保存 skill pack | 无独立 runtime | 无常驻进程 | GitHub API size metric 231 KB | Markdown/scripts/assets；实际 clone 含 Git 元数据会更大 [GH:api] |
| `leader` / `neat-freak` / writer | 由 Agent 与工具决定 | 主要是 model context | 任务 artifacts | 长文 skill 会显著增加激活上下文 [Local:skill-files] |
| `aihot` | 轻量 HTTP GET | 低；镜像取决于条目数 | 普通查询很小；完整 snapshot 可增长 | 依赖 aihot.virxact.com；无 API key [Local:aihot][AIHOT:service] |
| storage scan/report | 全盘目录统计可持续占用 CPU/I/O | Python 进程 + report data | HTML/JSON 输出 | 上游 SKILL 自述 macOS 已实测、Windows 未实测；本轮均未复现；direct delete 有高风险 [Local:storage] |
| `hv-analysis` | 多 Agent/web research + WeasyPrint | 取决于浏览器/PDF 和 context | 10k–30k 字报告、HTML/PDF | 需要 Python markdown/WeasyPrint 及其系统依赖 [Local:research-writing] |

- **Docker**：本轮没有发现官方 Docker image、Dockerfile 或 Compose；`docker_support: false` [Local:structure]。
- **GPU**：skill pack 本身不需要；下游模型是否使用 GPU 取决于宿主。
- **网络**：AI HOT 必需；深度研究通常必需；其他技能视任务而定。
- **操作系统**：Agent Skills 文件格式跨平台，但脚本与宿主 tool semantics 并不自动跨平台。

性能评分 3/5。静态 corpus 本体很轻，AI HOT 还显式使用 limit/ETag/轮询间隔控制流量；反面是 storage 全盘扫描、深度研究的并行搜索与超长输出、writer/hv 的激活上下文都可能昂贵。本轮没有 token、latency、CPU、memory 或任务成功率 benchmark，因此只给中性分 [Local:aihot][Local:research-writing][Local:skill-files]。

## 上手体验

评分 3/5。

正面是 README 中英双语，六个 skill 都有一句话定位、触发示例和直接目录链接；基本安装方式是把单个 GitHub directory URL 交给支持 Agent Skills 的宿主，root MIT 也减少了试读/修改阻力 [GH:readme][Local:license]。`aihot` 另有完整 installer 与 integration page，live API 无需 key [Local:aihot][AIHOT:service]。

扣分在于“把 URL 发给 Agent，它会自己 clone 到正确目录”不是可移植安装合同。不同 client 的 skill path、session refresh、tool names、filesystem permission 和 script dependency 都不同；整个仓库也没有统一 installer、release tag 或 version lock。README 的“只贴 SKILL.md 效果一致”对带 scripts/references/assets 的技能尤其不成立 [GH:readme][AgentSkills:spec]。`hv-analysis` 还要求安装 WeasyPrint 并建议破坏系统包隔离，storage Windows 路径明确未实测 [Local:research-writing][Local:storage]。

## 代码质量

评分 3/5。

作为 non-software/hybrid skill corpus，代码质量主要看 skill contract、progressive disclosure、helper safety、validation、fixtures 和 contributor ergonomics。正面信号是六个目录/name 匹配 Agent Skills 约束；`aihot` 把 API/sync/error 拆入 references，并给 installer 加 target/path/file-count/hash/atomic-swap 检查；`neat-freak` 有四份 references、只读 inventory 和大量 fixture，validator 还检查授权、scope、trigger 与 reference drift [AgentSkills:spec][Local:aihot][Local:neat-freak]。

不给 4：公开仓库没有 CI，五个 skill 没有与 `neat-freak` 同等级的 eval；storage 的危险操作缺测试和 protected-root schema；Windows 明示未实测；`hv-analysis`/writer 主文件过长且环境建议不稳健 [Local:structure][Local:storage][Local:research-writing]。`neat-freak` 的 validator/eval 文件存在是治理信号，不等于 task-level eval 已通过——本轮没有执行它们。

## 可扩展性

评分 4/5。

六个 skill 都是可单独复制、修改、安装的 Agent Skills directory，root MIT 允许 fork 和再分发；标准允许 scripts/references/assets，仓库也实际展示了纯 instructions、API-backed skill、本地 Python app、PDF toolchain 和 eval-heavy governance skill 等多种形态 [Local:license][AgentSkills:spec][Local:structure]。

限制有三层：没有 root catalog schema、dependency manifest、pack version、统一 installer 或 behavior compatibility matrix；`aihot` 深度耦合作者服务；`hv-analysis`/leader 写入特定宿主 tool/goal 语义。用户可以扩展内容，但跨 client 维持一致 trigger、permission 和 update behavior 仍需自己治理。

## 文档质量

评分 4/5。

产品层文档是仓库强项。README 用很具体的故事、触发句和边界解释六个 skill；English README 基本同步。每个 SKILL.md 都比普通 prompt list 完整，`aihot` 有 API/sync/error contract，`neat-freak` 有 platform/governance/verification references，storage 对红黄绿分级和按钮权限写得详细 [GH:readme][Local:aihot][Local:neat-freak][Local:storage]。

扣分来自事实和承诺一致性：

- “40+ agents compatible”没有在本轮官方 client showcase extraction 中得到可计数清单支持，且具体 skills 含 Claude/tool/path assumptions [GH:readme][Local:research-writing]。
- “只贴 SKILL.md 效果一致”忽略了 scripts/references/assets [GH:readme][AgentSkills:spec]。
- README 邀请去 Discussions，但 API 显示 `has_discussions=false` [GH:readme][GH:api]。
- AI HOT integration page 抓取时显示 Skill 1.2.2，而 repository copy 为 1.2.3 [Local:aihot][AIHOT:service]。
- storage 主文件开头仍写“对 macOS 做一次”，后文才说明 Windows，且 Windows 未实测 [Local:storage]。

这些是可修的一致性问题，不足以抵消详细内容，但阻止文档达到 5/5。

## 社区与成熟度

| 维度 | 评分 | 说明 |
|------|------|------|
| 社区活跃度 | 2/5 | 2026-08-02 snapshot 有 18,916 stars、2,095 forks 和近期 push，说明 visible attention 很强；但 contributors endpoint 只有 owner，19 open PR、8 closed-unmerged、0 merged，且治理文件不完整。快速 star growth 不等于开放社区协作或生产采用 [GH:api][GH:activity][GH:community]。 |
| 成熟度 | 2/5 | 2026-04 创建、64 个 default-branch commits、0 GitHub releases；六个 skill 各自版本/成熟度不同，Windows 未实测，仓库没有 pack-level compatibility/versioning。现状是快速演进的个人集合，不是长期稳定依赖 [GH:api][GH:activity][Local:storage]。 |

`community: 2` 不是说“没人使用”，而是公开 evidence 指向**高传播、低合并、多数维护集中于单人**。若未来开始合并第三方 PR、补贡献/安全流程，并能展示 response/merge latency，才有充分理由提高社区评分。

## 安全与风险

评分 2/5。

本次 repository advisory endpoint 返回空数组，只表示没有查到 published GHSA，不是 skill、scripts、hosted API 或下游工具安全证明 [GH:advisories]。这里的主要风险不是传统 daemon CVE，而是 **agent instruction supply chain + local side effects**：skill 能影响 Agent 如何联网、安装依赖、读写文档/记忆、运行 shell、生成外部内容，storage 甚至暴露不可逆 direct-delete。

仓库并非没有安全意识：

- `neat-freak` 明确声明项目内容不是用户授权、memory 写入需授权、破坏性 cleanup 必须在完整汇报后再次确认 [Local:neat-freak]。
- `aihot` 只允许匿名只读域名/API，把响应当不可信内容；installer 不用 sudo，限制 target/file set，验证 SHA-256 后原子替换 [Local:aihot]。
- storage 扫描器只读，server 使用 loopback、random token、Host check、realpath allowlists、HOME root check 和浏览器确认 [Local:storage]。

但存在足以把评分压到 2 的设计缺口。storage 的 green `trash_paths` 来自 Agent 生成的 analysis JSON，server 再把它们装入 direct-rm allowlist；root condition 接受 `rp == HOME`，没有独立 protected-path denylist 或 schema validator，因此一份错误、被 prompt-injection 影响或恶意的 report 可以把过宽路径变成“用户点确认即可递归删除”的候选 [Local:storage]。这不是已复现漏洞声明，但 code path 的 destructive capability 与 trust boundary 是明确的。另有同源 manifest 无法抵抗 hosted origin 整体被攻陷、`bash <(curl …)` bootstrap 未固定外部 trust root、`pip --break-system-packages` 扩大环境破坏面、长 skill 可把第三方内容和作者偏好直接注入 Agent control plane [Local:aihot][Local:research-writing]。

采用时应逐 skill 固定 commit、审查 scripts/refs/network、使用低权限 workspace，并为 destructive skill 增加 protected roots、schema、dry-run、trash-first、platform tests 和 host-level backup。`khazix-writer` 还应显式标注 style imitation、禁止虚构作者经历并要求人工终审，避免身份混淆 [Local:research-writing]。

## 学习价值

高，而且“学习后重写”比直接安装更有价值。

1. **Goal 是可验证合同**：`leader` 的 purpose/done/evidence/anti-cheat/bounds/trade-offs/unknowns，把长程任务失败从“模型不聪明”转化为目标函数设计问题 [Local:leader]。
2. **Skill 需要 authorization model**：`neat-freak` 把“检查更深”与“权限更大”分开，并区分 knowledge closeout 与 destructive cleanup，这是可迁移的治理原则 [Local:neat-freak]。
3. **API skill 需要稳定状态机**：`aihot` 对 cursor、ETag、snapshot/changes、retry 和 untrusted content 的处理，比只给 curl 示例更接近 durable integration [Local:aihot][AIHOT:service]。
4. **有按钮不等于安全闭环**：storage 展示了 token/Host/allowlist/confirm 等局部 guard，也展示了 allowlist provenance 与 protected-root validation 为什么必须独立于 Agent 判断 [Local:storage]。
5. **Progressive disclosure 要真实执行**：`aihot`/`neat-freak` 的 references 拆分较好；writer/hv 的大单体说明“符合 SKILL.md 格式”不自动等于 context-efficient [Local:skill-files][AgentSkills:spec]。
6. **个人风格 skill 应证据化**：persona、禁用词、examples 和 self-review 可以结构化，但第一人称经历、价值判断与身份不能让模型自行编造 [Local:research-writing]。

对已有成熟 harness，最佳吸收方式是提取少数 invariants——goal anti-cheat、fact-surface matrix、untrusted-content boundary、snapshot/changes state machine、destructive allowlist provenance——而不是再增加六个平行 trigger。
