---
title: "codebase-memory-mcp"
created: 2026-06-18
updated: 2026-09-10
type: repository-analysis
repo_url: "https://github.com/DeusData/codebase-memory-mcp"
category: "ai-programs/ai-harness/mcp"
tags: [mcp, code-intelligence, knowledge-graph, tree-sitter, c, coding-agents, local-first]
previous_repo: ""
successor: ""
primary_language: "C"
license: "MIT"
stars: 42775
forks: 3482
last_checked: 2026-09-10
last_verified: 2026-09-10
evidence: "GitHub metadata/releases/advisories and default-branch README/SECURITY/CONTRIBUTING/Makefile static review 2026-09-10; no install/index benchmark, current test run, network trace or artifact verification"
archived_reason: ""
docker_support: false
gpu_required: false
estimated_cpu: "indexing scales with corpus and passes; queries typically lighter; unmeasured"
estimated_memory: "RAM-first indexing and shared daemon; large-repository peak needs measurement"
estimated_storage: "native executable plus verified runtime assets, SQLite graphs and daemon logs"
status: active
ratings:
  capability: 4
  usability: 3
  performance: 3
  code_quality: 3
  documentation: 4
  community: 4
  maturity: 2
  extensibility: 4
  security: 3
  recommendation: 3
overall_score: 3.3
sources:
  - "[GH:api] https://api.github.com/repos/DeusData/codebase-memory-mcp checked 2026-09-10 UTC+8: canonical unchanged, archived=false, disabled=false, main, pushed_at=2026-09-09T19:01:45Z, C, MIT, stars=42775, forks=3482, created_at=2026-02-24; separate GitHub search open issues=460 and open PRs=96"
  - "[GH:readme] https://github.com/DeusData/codebase-memory-mcp/blob/main/README.md inspected via contents API 2026-09-10, tree snapshot 1db8bace03140f5793ff9205e5281732e77c2bea; current default branch claims 162 languages, 15 MCP tools and 45 automatic/conditional client surfaces, native executable plus authenticated runtime assets, shared per-account coordination daemon, exact-build/ABI/cache-root admission, account-wide activation, separate daemon-free one-shot cli mode, built-in optional local UI at port 9749. This is default-branch documentation, not an assertion all these details shipped in v0.10.8."
  - "[GH:release] https://github.com/DeusData/codebase-memory-mcp/releases/tag/v0.10.8 published 2026-08-19T02:42:10Z, inspected 2026-09-10: supersedes mis-tagged 0.10.7 whose npm/PyPI installers resolve wrong URLs; notes deprecation/yank, graph aggregate truncation fixes, truthful persisted coverage, Python alias resolution, Windows bounded/cancellable code search, FreeBSD support and fail-closed release gates"
  - "[GH:regressions] https://github.com/DeusData/codebase-memory-mcp/releases/tag/v0.10.6 published 2026-08-17; inspected 2026-09-10. Upstream reports 0.10.x indexing slowdown and Linux OOM regression, repaired corpus-proportional passes, complexity guards, config-preserving installer repairs and Windows DACL fixes. Specific reports referenced include #1669 indexing regression, #1654 Linux memory blowup, #1631 Hermes config parsing, #1601/#1620 Windows runtime-directory permissions. Claims are upstream release evidence, not local reproductions."
  - "[GH:security] https://github.com/DeusData/codebase-memory-mcp/blob/main/SECURITY.md read 2026-09-10 at same tree: reads source, writes agent config, spawns processes; claims local MCP processing with one bounded release metadata update check after initialize and separate install/update downloads; documents signatures/provenance/checksums and narrowly allowed single-Microsoft !ml verdict tolerance. No independent network or antivirus/provenance verification performed."
  - "[GH:structure] https://github.com/DeusData/codebase-memory-mcp/blob/main/CONTRIBUTING.md and Makefile.cbm inspected 2026-09-10 with recursive tree (2187 blob paths): C source, vendored grammars, graph/query/index passes, tests/build/lint/security tooling. Existence of these gates is not their execution."
  - "[GH:advisories] https://api.github.com/repos/DeusData/codebase-memory-mcp/security-advisories?per_page=100 checked 2026-09-10 returned []; no published repository GHSA found, not proof of absence of dependency or runtime vulnerabilities"
  - "[WikiLocal:comparison] Prior local analysis compares codegraph, Context7 and GitHub MCP Server for code graph versus external-context positioning; no fresh competitor ten-dimension audit"
---

# codebase-memory-mcp

> 本地代码图谱与 MCP 查询引擎；当前安装/运行已涉及 runtime assets、共享 daemon 和账号级激活，不能再按“孤立单文件工具”理解。
>
> **状态**: `active` · **总分**: 3.3/5 · **推荐度**: 3/5

## 一句话总结

适合高级 coding-agent 用户在隔离仓库比较结构化代码探索的收益；优先验证图谱正确性、安装兼容与多会话生命周期，再讨论替代既有工具 [GH:readme][GH:regressions]。

## 总体评价

C/tree-sitter/SQLite 的本地图谱路线仍有价值，但从旧分析的 v0.8.1 到最新 release v0.10.8，已经出现影响采用的真实问题：索引复杂度/OOM、聚合计数截断、配置安装失败，以及 `0.10.7` 错误 tag 导致包管理安装 URL 无效 [GH:release][GH:regressions]。

另一方面，当前 main README 描述共享 daemon、精确 build/ABI/cache-root 准入及账号级维护激活。这些是**默认分支文档状态**，不可未经 release 对照就宣称全部属于 v0.10.8 [GH:readme]。本轮因此把上手体验与代码质量各从 4 降至 3，总分 3.3；不因更多语言、更多客户端和 CI 标识提升成熟度。

## 推荐度：3/5

**目标角色**：能审查本地安装器、MCP 配置及索引结果的高级用户和代码智能研究者。建议先选有已知答案的仓库测试调用边、聚合计数、增量覆盖和资源峰值，再纳入实际 agent 工作流。

它仍值得观察，但不应默认全局安装，更不能以 README 的高速/低 token 数字证明适合自己的代码库。对 Hermes 等宿主的兼容只记录为上游 release 修复声明，本轮未核验 Hermes 端，也未改动本机配置 [GH:regressions]。

## 优势

1. 用持久结构图取代反复逐文件探索，查询目标与 coding-agent 需求匹配 [GH:readme]。
2. 文档区分 native runtime assets、共享 daemon 与一次性 CLI，运行模型比旧“单 binary”口号具体 [GH:readme]。
3. 发布说明公开承认聚合、OOM 和配置损坏/拒绝问题，给出了修补范围 [GH:release][GH:regressions]。
4. 安全文档明确源码读写、配置修改和外部更新检查，方便审查权限 [GH:security]。

## 劣势

1. 索引结果可能“有答案但不完整”；聚合截断修复证明结果正确性不能从速度推导 [GH:release]。
2. 索引内存、复杂度和安装器跨格式兼容都出现过实质回归 [GH:regressions]。
3. 账号共享状态让安装/更新不再是单会话局部动作 [GH:readme]。
4. 高语言覆盖不等于各语言具备等距语义精度；本轮没有独立 benchmark。

## 适合什么场景

- 在非敏感仓库评估图谱探索对 token、工具调用和正确性的影响。
- 研究多语言 AST/LSP、SQLite 图存储、MCP 查询与增量索引。
- 能锁定版本、验证发布资产并安排多会话维护窗口的开发环境。

## 不适合什么场景

- 要求安装器完全不接触 agent 配置、hooks 或后台进程的环境。
- 要求图查询输出直接作为程序验证结论的场景。
- 不能容忍当前 release/config/daemon 兼容调试的核心生产流程。

## 与类似项目对比

| 项目 | 定位 | 相对本项目 |
|------|------|-----------|
| codegraph | coding-agent 代码图探索 | 与本项目问题域接近；应以相同仓库的边正确性和成本比较，不按语言数量定胜负。 |
| Context7 | 库文档上下文 MCP | 提供外部 API 文档；本项目提供本地代码结构。 |
| GitHub MCP Server | 代码托管平台 API 接口 | 处理仓库平台资源；本项目侧重本地语法和关系图。 |

这里只作 MCP/context 工具定位比较，不是同轮性能或质量排名 [WikiLocal:comparison]。

## 它能做什么

能力 **4/5**。main README 声称覆盖 162 种语言、15 个 MCP tools、45 个自动/条件客户端入口，并提供结构搜索、trace、impact、Cypher、覆盖检查和可选图 UI [GH:readme]。这些是当前文档的名义范围，不等于 162 种语言全面生产可用，也不等于所有宿主自动安装成功。

v0.10.8 明确修复聚合候选集被截断、增量索引 coverage 被错误清零和部分 Python aliases 关系解析；这些修复直接关系到“答案是否可信” [GH:release]。

## 运行环境与资源占用

| 项目 | 判断 |
|------|------|
| 交付 | 当前文档为 native executable 加认证 runtime assets，不再保证只复制单文件 |
| MCP/session | main 描述每账号共享 daemon、watcher/index/UI 和精确 build 准入 |
| 一次性 CLI | 文档描述不连接 daemon、不启动 watcher/UI，但仍参与准入与项目锁 |
| CPU/内存 | 索引复杂度与 corpus 大小主导，历史 OOM/减速不能被最新性能口号抹掉 |
| Docker/GPU | 未验证官方 Docker image；基础本地代码索引不要求 GPU |

资源效率 **3/5**。v0.10.6 的修复是积极信号，但它公开报告此前的显著退化；没有本轮测量，不能判定所有语言/大仓库已恢复到宣传水平 [GH:readme][GH:regressions]。

## 上手体验

**3/5**。安装入口短，实际边界却包含 config ownership、runtime assets、宿主重启和账号级激活 [GH:readme]。v0.10.7 的错误 tag 会使 npm/PyPI 安装失效，上游要求采用 v0.10.8；不能把这类发布失败当作无分析意义的 patch churn [GH:release]。

## 代码质量

**3/5**。C、vendored grammars、图存储和测试/lint/security tooling 是实质工程，不是空壳；但索引聚合、复杂度、OOM、权限和 installer 同时出现回归，负面证据高于测试 badge [GH:structure][GH:release][GH:regressions]。本轮没有运行 sanitizer/fuzz/test 或 release verification，不将文档门禁当作已通过。

## 可扩展性

**4/5**。语言提取、图 passes、MCP tools、CLI 和客户端配置入口可扩展；需要理解 parser、C 内存管理、存储和 daemon 语义 [GH:structure][GH:readme]。如果只加一个轻量 MCP tool，选择本框架的复杂度未必划算。

## 文档质量

**4/5**。README 与安全文档对 runtime、activation 和网络行为的描述很具体；release notes 能解释版本事故及修复 [GH:readme][GH:security][GH:release]。不足是宣传数字与默认分支新能力混排，使用者需要额外区分已发布版本、计划和实测。

## 社区与成熟度

社区 **4/5**，成熟度 **2/5**。快照 42775 stars、3482 forks、460 issues、96 PRs，建仓于 2026-02 [GH:api]。持续贡献并不消除维护压力；早期范围扩张和真实回归使“成熟可默认采用”的证据不足。不会因为 v0.10.x 版本号变大自动提升成熟度。

## 安全与风险

安全 **3/5**。本轮 GHSA endpoint 返回空仅是查询结果 [GH:advisories]。工具仍能读取源码、改写 agent 配置、启动进程和暴露本地 UI；本地处理不等于低权限。

SECURITY 声称 MCP 数据不外传，但 initialize 后会发起有界 GitHub release metadata 查询；install/update 另有下载。签名、provenance、checksum 和 VirusTotal 政策是上游声明，本轮没有独立验资产，不建议为消除告警就盲目放行二进制 [GH:security]。

main 所述账号级激活会协调其他 session 退出，必须在用户知道影响范围后操作。建议隔离 OS 账号/缓存与敏感代码、检查安装 diff，并验证图结果不会越出授权仓库范围 [GH:readme]。

## 学习价值

它适合研究“索引快”之外的工程难题：聚合结果的完整性、增量 coverage 的真实性、按 corpus 缩放的复杂度、共享 daemon 的 ownership 和发布资产身份。先确保结果可信与权限清晰，再优化 token，是本项目最重要的启示 [GH:release][GH:regressions]。
