---
title: "OpenAI Plugins"
created: 2026-06-07
updated: 2026-07-22
type: repository-analysis
repo_url: "https://github.com/openai/plugins"
category: "ai-programs/ai-harness/ai-plugins"
tags: [openai, codex, plugins, marketplace, agent-skills, mcp]
previous_repo: ""
successor: ""
primary_language: "JavaScript / Python / Markdown"
license: "NOASSERTION / per-plugin license and service terms need inspection"
stars: 4650
forks: 600
last_checked: 2026-07-22
last_verified: 2026-07-22
evidence: "GitHub REST/GraphQL metadata + current README/default marketplace manifest + GitHub tree/API scan; no plugin installed or smoke-tested"
archived_reason: ""
docker_support: false
gpu_required: false
estimated_cpu: "N/A for the registry itself; runtime cost depends on each installed plugin, MCP server and external service"
estimated_memory: "N/A for the registry itself; Codex/plugin/MCP runtime cost varies by plugin"
estimated_storage: "GitHub repository diskUsage about 99 MB; selective local installs and plugin assets vary"
status: active
ratings:
  capability: 4
  usability: 4
  performance: 3
  code_quality: 3
  documentation: 2
  community: 2
  maturity: 2
  extensibility: 4
  security: 2
  recommendation: 3
overall_score: 2.9
sources:
  - "[GH] https://github.com/openai/plugins — repeated GitHub REST/GraphQL snapshot 2026-07-22: created_at=2026-03-04, pushed_at=2026-07-14, default_branch=main, commit=11c74d6ba24d3a6d48f54a194cd00ef3beea18f9, commits=299, stars=4650, forks=600, primary_language=JavaScript, license=None, diskUsageKB=98577, archived=false, disabled=false"
  - "[GH:api-conflict] Official API responses conflicted during the same 2026-07-22 run: an earlier GraphQL snapshot returned commit=058a32bcd01f6a485f8c30eb5a402326362387c5, stars=12839 and forks=1771, while later repeated REST/GraphQL returned commit=11c74d6ba24d3a6d48f54a194cd00ef3beea18f9, stars=4650 and forks=600; frontmatter follows the later repeated snapshot. Later GraphQL/search reported open issues=0/open PRs=0, while REST open_issues_count=42 and list endpoints returned 404, so this analysis makes no current backlog claim"
  - "[GH:readme] README.md at 11c74d6ba24d3a6d48f54a194cd00ef3beea18f9 checked 2026-07-22; 22 lines describe a curated collection of Codex plugin examples, required `.codex-plugin/plugin.json`, optional skills/apps/MCP/agents/commands/hooks/assets, the default marketplace, a separate API-key-login marketplace and highlighted richer examples"
  - "[GH:marketplace] `.agents/plugins/marketplace.json` at 11c74d6ba24d3a6d48f54a194cd00ef3beea18f9 checked 2026-07-22: name=openai-curated, displayName='Codex official', 180 entries across 11 categories; authentication policy counts ON_INSTALL=177 and ON_USE=3; 15 entries are explicitly products=CODEX. This proves registry metadata, not plugin runtime correctness or service trust"
  - "[GH:local-scan] GitHub recursive tree/API scan at 11c74d6ba24d3a6d48f54a194cd00ef3beea18f9 on 2026-07-22: truncated=false, files=5266, workflow files=0, test-ish files=16, docs/Markdown-ish files=3208; languages JavaScript=5135916, Python=3253550, Standard ML=169891, HTML=155190, Shell=120259, TypeScript=87860, HCL=53144 and others; docs-ish count is inflated by plugin skill/document assets and is not top-level documentation quality"
  - "[GH:release] https://api.github.com/repos/openai/plugins/releases?per_page=20 queried 2026-07-22; returned no releases"
  - "[GH:community] https://api.github.com/repos/openai/plugins/community/profile queried 2026-07-22; health_percentage=25, README surfaced; LICENSE, CONTRIBUTING, CODE_OF_CONDUCT, SECURITY, issue template and PR template were not surfaced"
  - "[GH:security-advisories] https://api.github.com/repos/openai/plugins/security-advisories?per_page=100 queried 2026-07-22; returned [] — no published repository advisory found in this check, not proof that the registry or individual plugins are safe"
---

# OpenAI Plugins

> OpenAI 的 Codex official curated plugin registry 与 example corpus：默认 marketplace 当前列出 180 个 plugin，覆盖 skills、MCP/apps、agents、commands、hooks 和 assets；适合选择性安装与格式研究，不是“全仓可信白名单”。
>
> **状态**: `active` · **总分**: 2.9/5 · **推荐度**: 3/5
> **验证边界**：本轮复核 GitHub API、README、default marketplace manifest 与 recursive tree；未安装 Codex plugin、未登录第三方服务、未运行 MCP/app/hook，也未逐插件审计 license、privacy policy 或 service terms。

## 一句话总结

OpenAI Plugins 已不只是若干格式 examples：它同时承载 Codex official default marketplace 的 registry metadata 和 180 个可发现 plugin；官方分发降低 discovery 摩擦，但每个插件的认证、外部服务、代码与许可仍需单独审计 [GH:readme][GH:marketplace]。

## 总体评价

README 将仓库定义为 curated Codex plugin examples collection，并明确默认 marketplace 位于 `.agents/plugins/marketplace.json`，API-key-login 用户另有独立 marketplace [GH:readme]。当前 default manifest 的 `displayName` 是 `Codex official`，列出 180 个条目，横跨 productivity、developer tools、finance、communication、research 等 11 类 [GH:marketplace]。这已经实质改变了旧分析“只是 examples corpus、不是 marketplace”的定位。

但“官方 curated registry”不等于“OpenAI 为每个外部服务和权限面作全栈安全担保”。177/180 entries 的 manifest policy 是 `ON_INSTALL` authentication；许多插件会连接 SaaS、MCP server 或外部 API。仓库没有顶层 LICENSE/SECURITY/CONTRIBUTING，也没有 GitHub release；本轮更没有安装或登录任何插件 [GH:marketplace][GH:community][GH:release]。

GitHub API 在同一审计窗口还返回过互相矛盾的 head/stars/forks 与 issue/PR 可见性；本文采用后一次 REST/GraphQL 可重复快照，不以冲突的 backlog 数做质量判断 [GH:api-conflict]。

## 推荐度：3/5

**角色定位**：适合已经使用 Codex、希望从 official marketplace 选择性发现/安装集成，或研究复合 plugin packaging 的开发者与 AI-harness 维护者。

推荐度保持 3/5，而非随“official marketplace”直接升到 4：
- 对 Codex 用户，默认 registry、分类、认证时机和本地 source path 降低了 discovery/install 摩擦 [GH:marketplace]。
- 对 plugin 作者，manifest + skills/apps/MCP/agents/commands/hooks/assets 是很有价值的复合打包参考 [GH:readme]。
- 对生产采用，仍必须逐条检查第三方身份、OAuth/API scope、网络端点、license、数据流与实际代码；本轮没有 runtime 证据。
- 仓库仅约四个月历史、无 releases、顶层治理与安全说明稀薄，不适合当作稳定 API contract [GH][GH:release][GH:community]。

**结论**：值得作为 Codex 官方 discovery surface 和 packaging reference 使用；安装应按需、逐插件、最小权限进行，不建议批量启用整个 marketplace。

## 优势

1. **Codex-native discovery**：README 明确 default marketplace 与 API-key-login marketplace；default manifest 标注 `Codex official`，不是需要用户自行拼装的第三方 index [GH:readme][GH:marketplace]。
2. **覆盖面广**：default registry 当前 180 entries / 11 categories，既有 Linear、Slack、Figma、GitHub 等 service plugins，也有 Superpowers、build-ios-apps、life-science-research 等 Codex-oriented bundles [GH:marketplace]。
3. **复合 plugin 示例真实**：仓库展示 required plugin manifest 与 optional skills、app/MCP、agents、commands、hooks、assets 的组合，而非纯 Markdown skill pack [GH:readme]。
4. **认证时机显式**：manifest 对每项记录 `ON_INSTALL`/`ON_USE`，并可用 `products` 约束 CODEX；这至少让 registry 层的安装策略可机器审计 [GH:marketplace]。
5. **官方维护信号**：OpenAI organization、299 commits 和持续 plugin asset 更新是当前维护信号，但不单独证明每个 integration 的生产质量 [GH]。

## 劣势

1. **信任边界高度分散**：180 个 plugin 可能连接不同公司、MCP runtime、OAuth/API 与数据域；registry 的 official label 不能替代逐插件 threat model [GH:marketplace]。
2. **许可不可一概而论**：GitHub license metadata 为 `None`，根目录没有 LICENSE；必须检查每个 plugin 的源码/资产和第三方 service terms，不能把全仓称作 MIT/Apache 开源 [GH][GH:community]。
3. **顶层文档很薄**：README 只有 22 lines，解释结构与 richer examples，却没有统一安装、卸载、权限、review、deprecation、security-response 或 compatibility policy [GH:readme]。
4. **缺少 release contract**：无 GitHub releases；default marketplace 和 plugin payload 随 main 演进，使用者需要依赖 Codex product-side distribution/versioning，而不是这个 repo 的 semantic releases [GH:release]。
5. **静态体量不能代替测试**：tree scan 有 5266 files 和 16 个 test-ish files，但无 repository workflow；本轮未执行测试，也不把 3208 个 docs-ish assets 当作 3208 篇顶层文档 [GH:local-scan]。
6. **API 可见性冲突**：同一轮官方 API 给出不一致的 head/counts 与 issue/PR surface，影响 volatile metadata 置信度；采用判断不应建立在本次 star/backlog 数上 [GH:api-conflict]。

---

## 适合什么场景

- 在 Codex 中按需发现并安装官方 registry 暴露的第三方 service/plugin。
- 学习 `.codex-plugin/plugin.json` 与 skills、MCP/app、agents、commands、hooks、assets 的组合方式。
- 参考 Figma、Notion、iOS/macOS/Web、Expo、Netlify、Remotion 等 richer examples 的目录组织 [GH:readme]。
- 为内部 plugin registry 设计 category、authentication timing、product constraint 与 local-source metadata。

## 不适合什么场景

- 把 `Codex official` 理解成 180 个 plugin 均已通过独立安全/隐私/许可审计。
- 在高敏 Codex session 中批量安装、批量 OAuth、授予宽 scope。
- 需要稳定 semantic release、统一 SLA、顶层兼容性或 deprecation policy 的生产依赖。
- 不愿逐插件检查外部服务条款、数据驻留、MCP endpoint 与代码执行权限的组织。

## 与类似项目对比

| 项目 | 定位 | 相对本项目 |
|------|------|-----------|
| openai/skills | Codex Agent Skills catalog | skills 更偏 procedure/workflow 单一 surface；本项目是 registry + skills/MCP/apps/hooks/agents 等复合 plugin 分发 |
| anthropics/claude-plugins-official | Claude Code official plugin marketplace | 同为 vendor-owned marketplace；runtime、manifest、认证与客户端治理模型不同 |
| cursor/plugins | Cursor plugin marketplace | 同为 agent-client discovery surface；本项目绑定 Codex plugin schema 与 Codex-side marketplace |

上述项目按 `ai-programs/ai-harness/ai-plugins` 同类范围做定位级对比，未在本条中重新按同一 10 维度框架深审；表格不构成安全或质量 benchmark。

---

## 它能做什么

仓库在 registry 与 payload 两层工作：

- **Registry**：default marketplace 记录 plugin name、local source path、category、authentication timing 和可选 product constraint [GH:marketplace]。
- **Plugin payload**：每个 plugin 需要 `.codex-plugin/plugin.json`，还可包含 skills、`.app.json`、`.mcp.json`、agents、commands、`hooks.json` 和 assets [GH:readme]。
- **服务集成**：default registry 覆盖 productivity、communication、developer tools、finance、data/analytics、research、security 等 11 类 [GH:marketplace]。
- **Codex-specific bundles**：15 个条目显式设为 `products=CODEX`；其余 registry entries 未显式限制 product，这只是 manifest metadata，不等于其他 runtime 一定兼容 [GH:marketplace]。
- **Examples/reference**：README 突出 Figma、Notion、build-ios/macOS/web、Expo、Netlify、Remotion、Google Slides 等 richer examples [GH:readme]。

能力给 4/5：分发面和 plugin breadth 已经很广，但单个 plugin 的深度、可用性和第三方服务质量并未在本轮验证。

## 运行环境与资源占用

| 场景 | CPU | 内存 | 存储 | 说明 |
|------|-----|------|------|------|
| Registry/源码阅读 | 很低 | 很低 | repo API size 约 99 MB | 静态 JSON/Markdown/code assets；非 runtime benchmark [GH] |
| 单 plugin | 依 plugin | 依 plugin | 依 payload/cache | 可能只加载 skill，也可能启动 MCP/app、调用 browser/API |
| 多 service plugins | 取决于并发与 Codex runtime | 取决于 MCP/app/process 数 | 凭证、缓存、日志另计 | 不建议只按 repo 大小估算运行成本 |

- **运行时**：registry 本身是静态 metadata；实际执行由 Codex 与各 plugin 的 skill/MCP/app/hook surface 决定。
- **操作系统**：仓库没有统一 OS guarantee；每个 plugin 的 binaries、scripts 和 service integration 需单独检查。
- **Docker**：没有统一官方 Docker 主路径；个别 plugin 内出现容器资产不改变全仓 `docker_support: false`。
- **GPU**：registry 不要求 GPU；个别 AI/plugin backend 是否需要 GPU 另论。
- **外部依赖**：Codex，以及每个 plugin 所需的 OAuth、API、MCP endpoint、CLI、账号或付费服务。

performance=3 是未运行时的中性分，不表示 180 个 plugin 具有一致 latency 或 resource efficiency。

## 上手体验

评分 4/5。

作为 Codex 用户，default official marketplace 加上 machine-readable category/auth policy，是比手工 clone/fetch 明显更顺的入口 [GH:readme][GH:marketplace]。README 又能让开发者快速找到 richer examples。

不打 5 的原因是：仓库顶层没有完整 user quickstart、权限解释、卸载/回滚、service compatibility 或故障排查；真实体验取决于 Codex product UI 和每个第三方插件。本轮也没有安装验证。

## 代码质量

评分 3/5。

recursive tree scan 为 5266 files，以 JavaScript/Python 为主；结构按 `plugins/<name>/` 和 per-plugin manifest 分隔，registry metadata 可机器读取 [GH:local-scan][GH:readme]。这有利于自动 materialization 与 selective review。

保守点在于：仓库没有 GitHub Actions workflow，test-ish=16 只是启发式文件计数；数千个 skill/docs/assets 与多语言 runtime 增加一致性验证面。当前 299 commits 证明维护活动，不证明所有第三方 payload 都经过统一测试 [GH][GH:local-scan]。

## 可扩展性

评分 4/5。

扩展合同同时包含 registry metadata 与复合 payload：manifest、skills、app/MCP、agents、commands、hooks、assets；default manifest 还提供 category、authentication 与 product fields [GH:readme][GH:marketplace]。这种组合能力正是其进入 `ai-plugins` 而非纯 `skills`/`mcp` 的原因。

不打 5：未见顶层 CONTRIBUTING、schema versioning、compatibility/deprecation policy；第三方扩展如何提交、验证和长期维护，从当前公开顶层文档看并不充分 [GH:community][GH:readme]。

## 文档质量

评分 2/5。

README 用 22 lines 说明了仓库定位、目录 schema、两个 marketplace 与 richer examples，信息准确但只够 orientation [GH:readme]。tree 中 3208 个 docs/Markdown-ish 文件主要是各 plugin 的 skills/reference/assets，不能当作统一的顶层用户/开发者文档 [GH:local-scan]。

缺失面包括统一安装/卸载、权限与认证、review bar、license policy、security reporting、compatibility/deprecation、schema reference 和 troubleshooting；因此官方身份与文件数量不足以上调 documentation。

## 社区与成熟度

| 维度 | 评分 | 说明 |
|------|------|------|
| 社区活跃度 | 2/5 | later repeated snapshot 为 4.65k stars / 600 forks；但 issue/PR API visibility 冲突，且未见 CONTRIBUTING/Code of Conduct，不能按品牌或 star 推断开放社区治理 [GH][GH:api-conflict][GH:community] |
| 成熟度 | 2/5 | 2026-03 创建，299 commits、default marketplace 和 180 entries 显示已进入真实分发面；但无 releases、公开稳定性/deprecation contract，仍是年轻且 product-coupled 的 registry [GH][GH:release][GH:marketplace] |

同一轮 API 的 volatile count 冲突是额外提醒：这里的 star/fork 只作 snapshot，不参与能力或安全证明 [GH:api-conflict]。

## 安全与风险

评分 2/5。

GitHub repository security-advisories endpoint 本轮返回 `[]`，只表示此次没有找到仓库发布的 GHSA；仓库又没有 surfaced SECURITY policy，不能据此推断安全 [GH:security-advisories][GH:community]。

主要风险在 plugin trust chain：
- 177/180 registry entries 标记 `ON_INSTALL` authentication，意味着 credential/OAuth 与第三方账号边界是常态而非例外 [GH:marketplace]。
- plugin 可包含 MCP/app、hooks、commands 与 agents，攻击面可能涵盖网络、文件、shell、browser 和账号数据 [GH:readme]。
- `Codex official` 是 registry identity；不能从 manifest 推导 OpenAI 已独立审计每个外部 service 的代码、隐私、数据驻留、scope 或 license。
- 根目录无统一 LICENSE；每项源码、资产和第三方 terms 需单独核对 [GH][GH:community]。

采用时应逐插件阅读 manifest/payload，使用最小 OAuth/API scope、隔离高敏 workspace、记录安装版本与来源，并对 MCP/app endpoint 和 data egress 做独立验证。

## 学习价值

学习价值高于综合采用分：

- **Marketplace as code**：default registry 把分类、source、认证时机和 product constraint 变成可审计 JSON [GH:marketplace]。
- **复合 plugin packaging**：一个 distributable unit 可组合 skills、MCP/apps、agents、commands、hooks 与 assets [GH:readme]。
- **官方 registry ≠ 全栈信任**：它是学习 supply-chain/trust-boundary 分层的好案例。
- **统计边界**：API snapshot 冲突、tree heuristic 与 runtime evidence 的区分，提醒分析者不要把 volatile counts 或文件体量写成质量结论 [GH:api-conflict][GH:local-scan]。

一句话：值得研究、值得按需用；不可因“official marketplace”四字而免去逐插件审计。
