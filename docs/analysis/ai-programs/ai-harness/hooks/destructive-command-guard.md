---
title: "destructive_command_guard"
created: 2026-07-12
updated: 2026-07-12
type: repository-analysis
repo_url: "https://github.com/Dicklesworthstone/destructive_command_guard"
category: "ai-programs/ai-harness/hooks"
tags: ["rust", "developer-tools", "ai-agents", "safety-hook", "command-guard", "git-safety", "shell-safety"]
previous_repo: ""
successor: ""
primary_language: "Rust"
license: "MIT License with OpenAI/Anthropic Rider (custom, non-OSI)"
stars: 2221
forks: 84
last_checked: 2026-07-12
last_verified: 2026-07-12
evidence: "GitHub API/Actions/issues/releases + local shallow clone static review at commit 10552f492e2a02fa4bf88677446143ceb9add7eb + checksum-verified v0.6.5 Linux binary smoke test; hooks were not installed into a live agent and Windows/macOS paths were not exercised"
archived_reason: ""
docker_support: false
gpu_required: false
estimated_cpu: "single-process local CLI; smoke-test process startup used one core briefly"
estimated_memory: "child max RSS about 12,300 KB in 20 Linux fresh-process smoke runs; not a resident hook/session measurement"
estimated_storage: "v0.6.5 static Linux binary 26.5 MB; downloaded tar.xz about 6.2 MB"
status: active
ratings:
  capability: 4
  usability: 4
  performance: 4
  code_quality: 3
  documentation: 4
  community: 3
  maturity: 2
  extensibility: 4
  security: 2
  recommendation: 3
overall_score: 3.3
sources:
  - "[GH] https://github.com/Dicklesworthstone/destructive_command_guard"
  - "[GH:api] GitHub REST/GraphQL/CLI snapshot 2026-07-12: created_at=2026-01-07T22:27:34Z, pushed_at=2026-07-11T21:44:17Z, default_branch=main, primary_language=Rust, stars=2221, forks=84, open issues=5, open PRs=1, closed issues=83, closed PRs=87, contributors endpoint returned Dicklesworthstone=1752 and dependabot[bot]=8, archived=false, diskUsageKB=26733; REST open_issues_count=6 reconciles to 5 issues + 1 PR"
  - "[GH:readme] Local README.md at commit 10552f492e2a02fa4bf88677446143ceb9add7eb inspected 2026-07-12; it documents core Git/filesystem guards, 50+ opt-in packs, custom YAML packs, scan/explain/allowlist flows, Linux/macOS/Windows installers, and native or community integration paths across multiple agent clients; these are repository claims, not all independently exercised"
  - "[GH:local-scan] Shallow clone /opt/data/tmp/dcg-analysis-pCKUHW/repo at commit 10552f492e2a02fa4bf88677446143ceb9add7eb inspected 2026-07-12: 541 tracked files, 190 test/fixture-ish tracked paths by git path heuristic, 10 workflow files, 73 docs Markdown files, 25 MB checkout; Cargo.toml version=0.6.5, Rust edition=2024, rust-version=1.85, release profile uses size optimization/LTO/strip; no root SECURITY.md, CONTRIBUTING.md, or CODE_OF_CONDUCT.md found in this scan"
  - "[GH:releases] GitHub release/tag endpoints checked 2026-07-12: releases.totalCount=29, tag refs totalCount=43; latest published release=v0.6.5 at 2026-07-03T09:03:36Z with 24 assets; no v0.6.6 tag or GitHub Release was found, while main CHANGELOG already contains a v0.6.6 section"
  - "[GH:issues] GitHub issue samples checked 2026-07-12: open #183 reports Codex CLI 0.144.x on Windows treating v0.6.5 deny as hook failure and executing the command; open #181 reports a heredoc false positive; open #185 reports a broken install URL in the distributed skill. Closed #174 reports wrong-architecture v0.6.4 assets that made the hook binary unable to start on affected targets, after which the client continued command execution; closed #160 records malformed-JSON fail-open bypass vectors. Main CHANGELOG says fixes are prepared for v0.6.6, but that release was not published at check time"
  - "[GH:ci] GitHub Actions checked 2026-07-12 for main commit 10552f492e2a: run 29169302391 failed (Linux check and several other jobs passed; Windows full suite and fuzz-smoke failed). Windows nextest discovered 4223 tests but ended with numerous failures, including protocol/allowlist/golden/help/performance cases; fuzz-smoke failed compiling fsqlite-pager. Bench run 29169302388 failed its regression gate, with several measured regressions and a reported >100% regression match. A newer scheduled run was still queued at check time"
  - "[GH:docs] Local docs/security.md, docs/security-model.md, docs/configuration.md, docs/agents.md and .github/workflows/{ci.yml,dist.yml} inspected 2026-07-12: heredoc parsing/timeouts are fail-open by default; docs enumerate unsupported/obfuscated/dynamic cases; config exposes bypass/allowlist/profile controls; dist workflow publishes checksums and Sigstore bundles. docs/configuration.md still described an older Codex exit-code-2 contract while README/main changelog described the newer minimal JSON/exit-0 contract"
  - "[GH:license] Local LICENSE inspected 2026-07-12: title is 'MIT License (with OpenAI/Anthropic Rider)'; rider grants no rights to OpenAI, Anthropic, affiliates, or persons/entities acting on their behalf and restricts providing the software or derivatives to them. GitHub API reports spdx_id=NOASSERTION while Cargo.toml says license=MIT; legal interpretation requires independent review"
  - "[GH:advisories] GitHub repository security-advisories endpoint checked 2026-07-12 and returned []; this means no published repository advisory was found through that endpoint in this check, not that the project, dependencies, installers, or hook protocols are audited safe"
  - "[Local:smoke] Checksum-verified v0.6.5 x86_64-unknown-linux-musl release tested in /opt/data/tmp/dcg-smoke-uYRz35 on 2026-07-12: sha256sum passed; binary version=0.6.5, size=26475896 bytes, statically linked; 20 fresh-process runs had median 49.600 ms for `dcg test 'git status'` (exit 0) and 39.204 ms for a destructive Git test string (exit 1), child max RSS about 12300 KB. Raw Claude-shaped hook input allowed `git status` silently and returned deny JSON for the destructive test string. This did not install a hook, test a real agent client, verify Windows/macOS, or benchmark internal evaluator-only latency"
  - "[GH:comparison-cc-safety-net] https://github.com/kenryu42/cc-safety-net checked 2026-07-12: TypeScript/Node destructive-command hook for multiple agent CLIs; repository license metadata=MIT; positioning only, not a 10-dimension audit"
  - "[GH:comparison-omamori] https://github.com/yottayoshida/omamori checked 2026-07-12: Rust semantic guard using macOS-focused shims/hooks and audit controls; repository offers Apache-2.0 OR MIT; positioning only, not a 10-dimension audit"
  - "[GH:comparison-slb] https://github.com/Dicklesworthstone/slb checked 2026-07-12: Go CLI implementing multi-agent two-person approval for destructive commands; repository uses a custom rider license; positioning only, not a 10-dimension audit"
---

# destructive_command_guard

> 一个面向 AI coding agents 的本地确定性命令拦截器：覆盖面与可扩展性突出，但当前发布版、主分支 CI 和许可证边界都要求保守采用。
>
> **状态**: `active` · **总分**: 3.3/5 · **推荐度**: 3/5
> **核验版本**: main commit `10552f492e2a02fa4bf88677446143ceb9add7eb`；公开 release `v0.6.5`；GitHub/API/Actions 快照 2026-07-12
> **验证边界**: 本轮验证了 v0.6.5 Linux binary 的 checksum、CLI allow/deny 与 Claude-shaped raw hook response；未把 hook 安装进真实 agent，未运行 Windows/macOS 路径，也未执行完整源码测试套件。

## 一句话总结

`destructive_command_guard`（dcg）适合希望给 AI coding agent 增加一层低成本、可解释的 destructive-command guard 的个人开发者；它值得试用，但不能替代 sandbox、最小权限、版本控制与备份，并且截至本次检查不宜把 v0.6.5 当作所有 client/platform 上都可靠的硬安全边界 [GH:readme][GH:issues][Local:smoke]。

## 总体评价

这个项目解决的是一个真实而明确的问题：自然语言里的“不要删除文件”只是 soft constraint，hook 才能在命令进入 shell 之前提供 deterministic enforcement。README 显示，dcg 不只匹配 `git reset --hard`、`rm -rf`，还把数据库、云、Kubernetes、容器、IaC、CI/CD 等 destructive operations 组织成 50+ packs，并提供 heredoc/inline-script scanning、scan mode、explain、allowlist、agent profile 与 custom YAML packs [GH:readme][GH:docs]。

工程投入显著：Rust 单 binary、跨平台 release assets、checksum/Sigstore、庞大测试语料、10 个 workflows、细致的 architecture/security 文档都是真实正面信号 [GH:local-scan][GH:ci][GH:docs]。但“安全工具有大量测试”不等于“当前 release 可作为可靠安全边界”：v0.6.4 曾发布 wrong-architecture binaries，使受影响目标上的 hook 无法启动，而 client 随后继续执行命令；v0.6.5 又有 Codex CLI 0.144.x on Windows deny 未生效的公开报告。main CHANGELOG 已写入 v0.6.6 修复，却尚无对应 tag/release；同时 main 的 Windows/fuzz/bench CI 仍失败 [GH:issues][GH:releases][GH:ci]。

因此本条的判词是：**设计方向强、能力面广、值得作为 defense-in-depth 试点；成熟度与 release correctness 尚不足以支撑“装上即安全”的叙事。**

## 推荐度：3/5

**角色定位**：适合会固定版本、验证 client hook contract、保留 sandbox/backup/least-privilege，并愿意维护 allowlist 与 false-positive/false-negative 回归集的个人开发者或小团队。

推荐度给 3。对 Linux/macOS 上的个人 coding-agent 工作流，dcg 的价值很直接：一个 checksum-verified static binary 即可完成命令判定，默认核心规则保守，explain/allowlist/custom packs 也降低了长期使用成本。本轮 v0.6.5 smoke test 确认 safe command 被允许、destructive Git test string 被拒绝，Claude-shaped raw hook denial 也能生成 [Local:smoke]。

不提高到 4 的理由是当前采用风险仍然实质存在：

1. **发布正确性已有严重事故**：#174 报告 v0.6.4 wrong-architecture assets 使受影响平台上的 hook binary 无法启动，而 client 随后继续执行命令，表现为“看似安装、实际放行” [GH:issues]。
2. **最新公开版仍有 client-specific blocking gap**：公开 issue #183 指向 v0.6.5 + Codex CLI 0.144.x + Windows 的 deny protocol failure；本轮未复现该 Windows 路径，main 的修复也尚未成为 v0.6.6 release [GH:issues][GH:releases]。
3. **主分支 gate 当前不绿**：最新完成的 main CI、fuzz-smoke 与 bench regression gate 均存在失败，不能用 workflow 数量替代真实 green CI [GH:ci]。
4. **许可证不是标准 MIT**：OpenAI/Anthropic Rider 构成额外限制，GitHub 也返回 `NOASSERTION`；组织采用与再分发需先做 legal review [GH:license]。

采用建议：只把 dcg 当作一层 guardrail；先在低价值 repo 用固定 release 做真实 client E2E，模拟 hook binary 缺失、协议变化、parse timeout 与 malformed input，再决定是否扩大部署。

## 优势

1. **问题边界清楚**：在 shell execution 前做 deterministic deny/allow，比只依赖 `AGENTS.md`/prompt 约束更接近真正的执行控制 [GH:readme]。
2. **规则覆盖广**：核心 Git/filesystem 之外，packs 覆盖 database、cloud、Kubernetes、containers、IaC、CI/CD、secrets、backup 等多类 destructive operations [GH:readme]。
3. **解释与治理面完整**：`test`、`explain`、scan、allow-once、分层 allowlist、agent profiles、custom packs 与 schema validation 让它不仅是“一个 regex hook” [GH:readme][GH:docs]。
4. **发布供应链意识较强**：release workflow 生成 checksum 与 Sigstore bundle；本轮下载的 v0.6.5 Linux asset checksum 校验通过 [GH:docs][Local:smoke]。
5. **测试与文档投入高**：本地扫描看到大量 test/fixture paths 与专题文档；CI run 也实际发现 4,223 tests，而非只有 README badge [GH:local-scan][GH:ci]。

## 劣势

1. **安全控制默认存在 fail-open 路径**：parse error、timeout、未知语言和某些 hook failures 可能放行；这是 availability-first trade-off，不是完备安全保证 [GH:docs]。
2. **client protocol 很脆弱**：Claude、Codex、Copilot、Cursor/Hermes 等各有 wire format 与 hook lifecycle，client 升级可使 deny 退化为 hook error；#183 正是此类事故 [GH:issues]。
3. **项目仍年轻且快速变化**：2026-01 创建、0.6.x、main/release/changelog 有短期漂移，长期兼容与稳定性尚未证明 [GH:api][GH:releases]。
4. **当前 CI 不是绿色基线**：Linux check 通过不能抵消 Windows full suite、fuzz-smoke 与 benchmark regression gate 的失败 [GH:ci]。
5. **custom license 限制明显**：其 rider 与标准 MIT 的“无差别授权”不同，尤其会影响 OpenAI/Anthropic 及相关主体 [GH:license]。

---

## 适合什么场景

- 在个人或小团队 coding-agent 工作流中，阻止常见 destructive Git/filesystem commands。
- 为数据库、Kubernetes、cloud、Terraform 等高后果 CLI 增加 opt-in pattern guard。
- 在 CI/pre-commit 中扫描脚本、Dockerfile、GitHub Actions 等文本里的危险命令。
- 为内部 CLI 编写 organization-specific custom packs，并用 regression corpus 管理误报/漏报。
- 研究 agent hook protocols、command normalization、context classification 与 fail-open/fail-closed trade-off。

## 不适合什么场景

- 把它当作 sandbox、OS permission boundary、transaction/rollback system 或通用 malware detector。
- 无法固定版本、无法做真实 client E2E，却要求“任何 destructive command 都绝不放行”的环境。
- 高价值 production credentials、cloud root account、支付或核心数据库直接暴露给 agent 的环境；pattern guard 不能弥补权限设计错误。
- OpenAI、Anthropic、其 affiliates，或可能落入 rider 定义的相关主体，在未完成独立法律审查与授权前使用或接收该软件 [GH:license]。
- 对 false positive 零容忍，且不愿维护 scoped allowlist 与回归样例的团队。

## 与类似项目对比

| 项目 | 定位 | 相对本项目 |
|------|------|-----------|
| CC Safety Net | TypeScript/Node 的多-agent destructive-command hook | 与 dcg 最接近；CC Safety Net 更集中于 Git/filesystem semantic guard，dcg 的 domain packs 与 Rust static-binary 路径更突出 [GH:comparison-cc-safety-net] |
| omamori | macOS-focused Rust guard，结合 PATH shims、hooks、trash/stash 与 tamper-evident audit | omamori 更强调 self-disablement protection 与 macOS defense layers；dcg 平台面更广、pack catalog 更大 [GH:comparison-omamori] |
| slb | 为 destructive commands 引入 multi-agent two-person approval 的 Go CLI | slb 解决“谁批准执行”，dcg 解决“本地规则是否直接阻断”；前者流程更重，后者更适合低延迟 inline hook [GH:comparison-slb] |

上述项目按 `ai-programs/ai-harness/hooks` 中的 agent command-safety 工具做定位级对比；仅核验了官方 repo metadata/README 级信息，未按同一 10 维度框架深审，表格不构成质量或安全性 benchmark [GH:comparison-cc-safety-net][GH:comparison-omamori][GH:comparison-slb]。

---

## 它能做什么

能力广度评分 4/5。

dcg 的主路径包括：

- 在 agent shell hook 中解析命令并返回 allow/deny/warn；
- 对 Git、filesystem 与大量 opt-in domain packs 做 pattern/context evaluation；
- 检查 heredoc、here-string、inline interpreter 与部分 AST-visible payload；
- 通过 `test` / `explain` 给出 rule ID、原因和 safer alternative；
- 通过 project/user/system configuration、agent profiles、allowlist、allow-once 与 bypass controls 调整策略；
- 加载 custom YAML packs，并提供 schema/validation；
- 以 scan mode 检查 repo 文件和 CI/pre-commit input；
- 输出 human-readable、JSON、robot/hook protocol 等多种格式 [GH:readme][GH:docs]。

不给 5，是因为能力广不等于语义完备：dynamic command construction、unsupported interpreters、obfuscation、timeout/parse failure 与 client-specific protocol drift 仍可能绕过或削弱保护；部分 agent 也只是 community integration、limited support 或 detection-only [GH:readme][GH:docs]。

## 运行环境与资源占用

| 场景 | CPU | 内存 | 存储 | 说明 |
|------|-----|------|------|------|
| 单次 v0.6.5 CLI smoke | one short-lived process | 20 次 Linux fresh-process smoke 的 child max RSS 约 12,300 KB | static binary 26.5 MB | 中位数约 39–50 ms；含 process startup/CLI rendering，不是内部 evaluator-only benchmark，也不代表常驻 hook/session [Local:smoke] |
| 常驻 agent hook | 每次 shell tool call 启动/调用 guard | 预期低，但未测完整 session | binary + config/log/history | 真实开销取决于 client hook model、enabled packs、history 与 input complexity |
| 源码构建/完整测试 | Rust compile/test 负载 | 明显高于运行时 | checkout、Cargo cache、target 可达数 GB | 本轮未本地构建；main CI 的 test/fuzz/bench gate 状态见 [GH:ci] |

- **运行时**：预编译 Rust CLI；Linux x86_64 v0.6.5 asset 为 static musl binary [Local:smoke]。
- **操作系统**：README/release 提供 Linux、macOS、native Windows/WSL 路径；本轮只运行 Linux x86_64 [GH:readme][GH:releases]。
- **Docker**：`docker_support=false`；这是本地 CLI/hook，不需要把缺少 Docker 当作产品缺陷。
- **GPU**：不需要。
- **外部依赖**：预编译 binary 主路径无 model/network inference；安装、update、release verification 与某些 client integration 依赖 GitHub/network/client config。

资源效率评分 4/5。运行时 footprint 低，且 release binary 可静态链接；但 README 的 sub-millisecond claim 主要描述 evaluator path，本轮 fresh-process CLI 观察到的是约 39–50 ms 中位数，不能混为同一指标。main bench gate 当前还报告 regression，因此不给 5 [GH:readme][GH:ci][Local:smoke]。

## 上手体验

评分 4/5。

README 把 Unix/WSL 与 native Windows 安装入口放在最前，并提供 easy mode、agent auto-detection、`doctor`、`test`、`explain`、config schema 与 uninstall/update 路径；对个人用户，首次获得价值的路径确实较短 [GH:readme][GH:docs]。本轮无需安装即可运行 release binary，allow/deny CLI 行为也直观 [Local:smoke]。

扣分来自安全工具特有的 verification burden：用户必须确认 binary/checksum、hook 实际被 client 调用、deny wire format 被 client 识别、fail-open 时有可观测性，并维护 allowlist。尤其在 v0.6.5 + Codex/Windows 已出现“hook 运行但命令仍执行”的报告后，`install succeeded` 不能等价于 `protection works` [GH:issues]。

## 代码质量

评分 3/5。

正面信号很强：Rust 2024 单 crate，模块拆分覆盖 evaluator/context/heredoc/packs/hooks/history/update 等领域；仓库有 541 tracked files、190 个 test/fixture-ish paths、73 个 docs Markdown、10 个 workflow files，CI 还实际发现 4,223 tests [GH:local-scan][GH:ci]。release workflow 对多架构、checksum、Sigstore、binary magic/architecture 与 smoke behavior 有显式 gate [GH:docs]。

但本维度评价的是当前可维护性与真实质量结果，而不是 CI theater。最新完成的 main CI 中，Windows full suite 有大量失败，fuzz-smoke 编译失败，独立 bench workflow 也触发 regression failure；此前 wrong-architecture release 与 hook protocol regression 又说明 gate 曾未能阻止高后果问题进入发布版 [GH:ci][GH:issues]。因此只能给 3：工程结构与测试意识良好，但当前 green baseline 和 release correctness 不足以支持 4。

## 可扩展性

评分 4/5。

扩展面是项目的明显强项：builtin packs 按 domain 分层，用户可通过 TOML 启停 pack；project/user/system 配置有优先级；agent profiles 可追加/禁用 packs 与 allowlist；custom YAML pack 有 schema 与 validator；scan、robot、MCP/agent hook 等表面也给上层系统留出组合空间 [GH:readme][GH:docs]。

不给 5，因为新 shell grammar、client protocol、AST language 或深层 context semantics 仍需要改 Rust 源码；custom pack 主要扩展 pattern catalog，不能把 parser/hook correctness 完全外部化。agent-client 快速演化还会让这些 extension points 承担持续兼容成本。

## 文档质量

评分 4/5。

README、configuration、agents、custom packs、security model、heredoc threat model、Windows、Codex integration、pack authoring 与大量 architecture/ADR 文档构成了相当完整的信息面 [GH:readme][GH:local-scan][GH:docs]。尤其值得肯定的是，文档明确写出 fail-open、unsupported languages、dynamic/obfuscated payload 与“不是 malware detector”等边界，而不是只展示成功案例 [GH:docs]。

扣分点是信息过长且存在快速演进造成的 drift：本轮看到 `docs/configuration.md` 仍描述旧的 Codex exit-code-2 contract，而 README/main changelog 已转向 minimal JSON + exit 0；main CHANGELOG 也已经写 v0.6.6 release section，但 GitHub 尚无 v0.6.6 tag/release [GH:docs][GH:releases]。对 hook protocol 这种安全关键接口，文档版本错位会直接误导诊断。

## 社区与成熟度

| 维度 | 评分 | 说明 |
|------|------|------|
| 社区活跃度 | 3/5 | 2026-07-12 快照有 2,221 stars、84 forks、5 open issues、1 open PR；近期 issue 往往很快出现 main fix，但 contributors endpoint 只返回一名主要人类作者与 Dependabot，且未发现 CONTRIBUTING/CODE_OF_CONDUCT，社区治理与 bus factor 仍有限 [GH:api][GH:issues][GH:local-scan]。 |
| 成熟度 | 2/5 | 项目创建约半年、版本仍为 0.6.x、client protocol 与 release packaging 仍发生高后果回归，main/release/changelog 与 CI 状态也在快速变化；高 release 频率不能替代长期稳定性 [GH:api][GH:releases][GH:issues][GH:ci]。 |

stars 说明它迅速获得关注，不证明生产采用或安全可靠性。相反，对 safety control 而言，hook 无法启动后 client 仍继续执行、wrong-architecture asset 与 protocol mismatch 都应比热度权重更高。

## 安全与风险

评分 2/5。

这不是说 dcg “没有安全价值”；相反，它能挡住一类常见且高后果的 agent mistakes，本轮 v0.6.5 Linux smoke 也验证了基础 allow/deny [Local:smoke]。低分来自它承担的是 security-control role，而当前仍有会让控制静默失效的已证实问题：

1. **fail-open 是显式设计选择**：heredoc parse error、timeout、unknown language 等路径可能允许执行；这保护 availability，却削弱 enforcement completeness [GH:docs]。
2. **release/platform correctness 曾失守**：#174 报告 v0.6.4 wrong-architecture binaries 在受影响目标上无法启动，而 client 仍继续执行命令，形成“guard dead but workflow continues”的危险模式 [GH:issues]。
3. **最新 release 有公开 client gap**：#183 报告 v0.6.5 在 Codex CLI 0.144.x on Windows 上 deny 被当作 hook failure，命令仍执行；main fix 尚未发布为 v0.6.6 [GH:issues][GH:releases]。
4. **bypass/allowlist 本身是高权限面**：`DCG_BYPASS`、allow-once、永久 allowlist、agent profile 与 config layering 都需要严格文件权限、审计和变更治理 [GH:docs]。
5. **公开 advisory 为空不是审计结论**：本轮 GitHub endpoint 返回 `[]`，不能覆盖 dependency、installer、release supply chain、parser 或 client protocol 风险 [GH:advisories]。

实际部署至少应做：固定 checksum-verified version；对每个 client/platform 运行 destructive-command canary；让 hook 缺失/崩溃可观测；保留 sandbox、只读 mount、least-privilege credentials、frequent commits/backups；对 production/cloud/database packs 用真实命令 corpus 做误报/漏报测试。安全工具之安全，不在“它宣称阻断”，而在“它失效时是否仍被看见并被第二道边界承接”。

许可证也是采用风险：repo 的 LICENSE 不是标准 MIT，而是带 OpenAI/Anthropic Rider 的 custom license；Cargo.toml 的 `MIT` 与 GitHub `NOASSERTION` 不能消解该 rider。组织使用、hosting、distribution、derivative work 与 automated analysis 的适用性需要独立法律判断 [GH:license]。

## 学习价值

学习价值很高，即使暂不部署也值得读。它把几个困难问题集中在一个现实项目中：

- 怎样把自然语言 safety policy 下沉为 deterministic execution guard；
- 怎样在 fast path、regex、context classifier、AST inspection 之间分配成本；
- 怎样设计 stable rule IDs、pack registry、custom schema 与 regression corpus；
- 怎样处理 Claude/Codex/Copilot/Hermes 等 client 的不同 hook protocol；
- 怎样权衡 fail-open 与 fail-closed；
- 怎样让 release artifacts、checksums、signatures、architecture verification 和 E2E 共同组成 supply-chain gate [GH:readme][GH:docs][GH:ci]。

它也提供了一个反面同样重要的 lesson：**安全控制的 feature breadth、test count 与文档长度，都不能抵消真实发布事故和非绿色 gate。** 对此类工具，最有价值的阅读方式不是数 packs，而是追踪一次 false negative、protocol drift 或 wrong-architecture release 如何穿过整个系统，以及下一层 defense 是否仍在。