---


title: "rtk-ai/rtk"
created: 2026-05-16
updated: 2026-07-12
type: repository-analysis
repo_url: "https://github.com/rtk-ai/rtk"
category: "ai-programs/ai-harness/hooks"
tags: ["token-optimization", "cli-proxy", "rust", "claude-code", "cost-reduction"]
previous_repo: ""
successor: ""
primary_language: "Rust"
license: "Apache-2.0"
stars: 70345
forks: 4377
last_checked: 2026-07-12
last_verified: 2026-07-12
evidence: "GitHub API + README/release + issue/advisory review"
archived_reason: ""
docker_support: false
gpu_required: false
estimated_cpu: "极低（sub-10ms 代理延迟）"
estimated_memory: "< 10 MB（单二进制）"
estimated_storage: "< 50 MB（二进制 + 缓存）"
status: active
ratings:
  capability: 4
  usability: 4
  performance: 5
  code_quality: 2
  documentation: 3
  community: 3
  maturity: 2
  extensibility: 3
  security: 2
  recommendation: 2
overall_score: 3.0
sources:
  - "[GH] https://github.com/rtk-ai/rtk"
  - "[Docs] https://www.rtk-ai.app/guide/"
  - "[Discord] https://discord.gg/RySmvNF5kF"
  - "[GH:API-2026-07-12] GitHub API snapshot: active, default branch develop, Rust, Apache-2.0, 70,345 stars, 4,377 forks, 774 open issues, 792 open PRs, head 5d32d073 (2026-07-09), latest stable release v0.43.0 (2026-06-28), current prerelease dev-0.44.0-rc.316 (2026-07-09)."
  - "[GH:v0.43.0] Official release: OpenShift/Pulumi filters plus never-worse output guard and exit-code/output correctness fixes across git/grep/docker/dotnet/read; https://github.com/rtk-ai/rtk/releases/tag/v0.43.0"
  - "[GH:issue-1891] Open issue as of 2026-07-12: 'URGENT: rtk overwrite the copilot / claude.md', priority:high, needs-reproduction; https://github.com/rtk-ai/rtk/issues/1891"
  - "[GHSA-config] GHSA-fvvm-949w-qj4w / CVE-2026-45792, medium: project-local filter config could silently alter LLM-visible output; affected rtk <0.32.0, patched 0.32.0; https://github.com/rtk-ai/rtk/security/advisories/GHSA-fvvm-949w-qj4w"
  - "[GHSA-gate] GHSA-7gxq-fvfc-g327 / CVE-2026-54555, high: rewrite auto-allow permission-gate bypass; API reports affected <=0.40.0 and patched >=42.2, whose version semantics are surprising and require advisory-level verification before operations; https://github.com/rtk-ai/rtk/security/advisories/GHSA-7gxq-fvfc-g327"
  - "[GHSA-plugin] GHSA-fqgj-m2gp-mr3q / CVE-2026-55249, medium: @rtk-ai/rtk-rewrite 1.0.0 command injection; GitHub API lists no patched version; https://github.com/rtk-ai/rtk/security/advisories/GHSA-fqgj-m2gp-mr3q"
  - "[GH:LICENSE] Apache-2.0 LICENSE on develop inspected 2026-07-12; https://github.com/rtk-ai/rtk/blob/develop/LICENSE"
  - "[GH:issues] Sampled open extension requests checked 2026-07-12: #1904 systemctl/python3/ssh/adb/etc. https://github.com/rtk-ai/rtk/issues/1904 ; #1896 Crush agent support https://github.com/rtk-ai/rtk/issues/1896"
---

# rtk-ai/rtk

> CLI proxy that reduces LLM token consumption by 60-90% on common dev commands. Single Rust binary, no runtime/system dependencies.
>
> **状态**: `active` · **总分**: 3.0/5 · **推荐度**: 2/5

## 一句话总结

RTK（Rust Token Killer）是一个 CLI 输出代理：拦截 coding agent 发出的 shell 命令并压缩结果，README 宣称常见开发命令节省 60–90% token、代理开销 <10 ms。项目已发布到 v0.43.0，但 774 open issues、792 open PRs、仍开放的数据覆盖 bug 与三项已发布 security advisories，使其依然属于高风险早期工具 [GH:API-2026-07-12] [GH:issue-1891]。

## 总体评价

想法极好——用透明中间层解决 agent 编码中最直观的 token 浪费。实现路径也优雅：hook/plugin rewrite、Rust 单 binary、100+ command adapters。相比 5 月，稳定版从 v0.40.0 推进到 v0.43.0，并加入 never-worse output guard 与多项 exit-code/原始输出正确性修复 [GH:v0.43.0]。

但风险没有消失：项目约 6 个月，仍有 774 issues / 792 PRs；#1891 的配置覆盖报告保持 open。更重要的是，仓库现有三项已发布 advisory，涵盖不可信 project-local filter、permission-gate bypass 与 rewrite plugin command injection [GH:API-2026-07-12] [GHSA-config] [GHSA-gate] [GHSA-plugin]。

**适合**：愿意接受不稳定性的早期采用者，使用 Claude Code/Cursor 且 token 成本敏感。

**不适合**：需要稳定工具链的生产环境，对数据安全零容忍的用户（存在覆盖配置文件的已知 bug）。

**一句话**：潜力巨大但成熟度严重不足，建议 watch 而非 adopt。

## 推荐度：2/5

**定位**：面向使用 AI coding agent 且对 token 成本敏感的开发者，提供透明的 CLI 输出压缩。

**选 2 而非 3 的核心理由**：
1. **仍是 0.x + 高频 RC**——最新稳定版 v0.43.0，develop 上已有大量 `dev-0.44.0-rc.*` 构建 [GH:API-2026-07-12]。
2. **数据覆盖报告仍未关闭**——Issue #1891 仍为 open、priority:high、needs-reproduction [GH:issue-1891]。
3. **安全边界发生过多类失效**——三项 advisory 覆盖输出完整性、permission gate 与 plugin command injection [GHSA-config] [GHSA-gate] [GHSA-plugin]。
4. **维护仍跟不上**——774 open issues 与 792 open PRs [GH:API-2026-07-12]。

**正面信号**：70k+ stars 与持续 release 说明需求真实，v0.43.0 的 never-worse guard 也直接回应“过滤不能比原输出更差”的核心可靠性问题 [GH:v0.43.0]。

**结论**：目前不建议在生产或关键工作流中 adopt。关注、试用、贡献 issue，等 stable release。

## 优势

1. **Token 节省有具体估算**——README 给出典型 30 分钟 Claude Code 会话的逐命令节省表，总计 ~118k → ~23.9k tokens（估算 -80%），非独立测试但数值合理。
2. **零侵入设计**——hook 机制透明拦截 shell 命令，agent 无需感知 rtk 存在。也可显式调用 `rtk read`/`rtk grep`。
3. **性能极优**——Rust 单二进制，无运行时/系统依赖，代理延迟 sub-10ms（README 宣称）。内存占用极低。
4. **多平台 + 多安装方式**——Homebrew / curl 一键脚本 / Cargo / 预编译二进制。macOS (x86+ARM)、Linux (musl+glibc)、Windows。
5. **命令覆盖面广**——文件操作、git、gh CLI、测试框架、构建工具、包管理器、AWS CLI、Docker/k8s，100+ 命令。

## 劣势

1. **仍不成熟**——约 6 个月、v0.43.0；develop 上继续生成密集 0.44 RC，行为仍快速变化 [GH:API-2026-07-12]。
2. **backlog 严重**——774 open issues 与 792 open PRs，review 队列尤其突出 [GH:API-2026-07-12]。
3. **数据覆盖 bug 仍 open**——#1891 尚未关闭，不能按“已修复”处理 [GH:issue-1891]。
4. **安全历史较重**——三项 advisory 中有 permission-gate bypass 和 plugin command injection；plugin advisory 未列 patched version [GHSA-gate] [GHSA-plugin]。
5. **过滤天然有信息损失风险**——即使 v0.43.0 加入 never-worse guard，各 command adapter 仍需逐类验证 exit code、错误详情与原始输出保真。

---

## 适合什么场景

- 使用 Claude Code、Cursor 等 AI coding agent 的日常开发
- Token 成本敏感的个人开发者或小团队
- 愿意接受 pre-release 软件风险的早期采用者
- 对 CLI 输出过滤有简单需求（标准 git/docker/npm 等工作流）

## 不适合什么场景

- 生产环境或关键工作流（无 stable release + 数据丢失 bug）
- 需要 SLA 或稳定行为的团队
- 非标准 CLI 工具重度用户（需等待命令支持）
- 对 agent 行为可预测性要求极高的场景（过滤可能丢失上下文）

## 与类似项目对比

未发现直接竞品——RTK 的「CLI 代理透明压缩」模式在 AI harness hooks 中较新颖。间接替代方案：

| 项目 | 定位 | 相对本项目 |
|------|------|-----------|
| 手动 shell alias/wrapper | 自写脚本包装命令输出 | 灵活但不通用，维护成本高 |
| LLM 内置截断 | Claude Code 等自动截断长输出 | 无成本但丢失信息不可控 |
| `mods` (Charmbracelet) | LLM 管道工具 | 不同定位，RTK 社区要求支持 |

---

## 它能做什么

以代理模式透明拦截 AI coding agent 发出的 shell 命令，对输出做四种策略处理：
- **Filtering**：只保留失败、关键行、结构
- **Compression**：将冗余输出替换为摘要
- **Formatting**：使用紧凑表示（tree view、one-liner）
- **Caching**：保存完整输出，失败时可检查

支持 100+ 命令，覆盖文件操作（`ls`/`cat`/`tree`/`find`）、git（全系列）、gh CLI、测试框架（`cargo test`/`pytest`/`jest`/`go test`）、构建工具（`cargo build`/`make`/`cmake`）、包管理器（`npm`/`pip`/`cargo`）、AWS CLI、Docker/k8s、数据库 CLI 等 [GH]。

提供 `rtk gain` 子命令展示累计 token/费用节省。全局 `--verbose` 可查看未过滤输出，`--quiet` 抑制非错误输出。

## 运行环境与资源占用

| 场景 | CPU | 内存 | 存储 | 说明 |
|------|-----|------|------|------|
| 最小 | 极低 | < 5 MB | ~10 MB | 单二进制 + 无缓存 |
| 推荐 | 极低 | < 10 MB | ~50 MB | 含失败缓存 + 日志 |

- **运行时**：Rust 编译单二进制，sub-10ms 代理延迟 [GH]
- **操作系统**：macOS (x86_64 + ARM64)、Linux (musl + glibc)、Windows（推荐 WSL）
- **Docker**：无官方镜像，单二进制不需要容器化
- **GPU**：不需要
- **外部依赖**：无运行时/系统依赖——单二进制。Cargo 层面有常规 Rust crate 依赖（clap、serde、regex 等）
- **资源估算来源**：内存/存储为基于单二进制架构的估算，非实测

## 上手体验

评分 4/5。

安装路径极简：`brew install rtk` 一行，或 `curl | bash` 一键脚本。安装后 hook 机制自动生效——agent 发出的 `git status` 等命令自动经 rtk 过滤，用户零感知。`rtk version` 验证安装 [GH]。

扣 1 分：hook/plugin rewrite 会改变 agent 实际执行路径；Windows 与多 agent 集成仍需单独验证。`rtk init -g` 提供 Claude/Copilot/Gemini/Codex 等入口，但易安装不等于行为无风险 [GH]。

## 代码质量

评分 2/5。

**正面**：Rust 单 binary，仓库有自动化 CI/release 流程；v0.43.0 的 never-worse guard 与多项 exit-code/raw-output 修复直接针对核心正确性边界 [GH:v0.43.0]。

**负面信号极强**：
- 774 open issues 与 792 open PRs——维护与 review 压力仍高 [GH:API-2026-07-12]
- #1891 的配置覆盖报告仍为 open；v0.43.0 release 同时列出大量 exit-code、raw fallback 与 failure-detail 修复 [GH:issue-1891] [GH:v0.43.0]
- 代码仓库无测试覆盖率数据可见
- 高频 RC 与 large PR queue 增加 release gate 的验证压力

**注意**：项目已有 v0.43.0 stable release，但版本仍为 0.x 且 develop 上 RC 密集；这些信号计入成熟度 2/5，此处聚焦代码级证据。

**判断**：项目处于快速迭代期，large backlog 和 v0.43.0 的多项 correctness fixes 说明稳定性仍受压。按评分规则，bug/回归证据优先于 CI 表面信号。

## 可扩展性

评分 3/5。

**已有**：100+ 命令支持，显然有内部命令注册/适配机制。社区持续提交新命令支持请求（#1904 systemctl/python3/ssh/adb，#1896 Crush agent，均为 open）[GH:issues]。

**缺失**：无正式插件系统。虽有 `.rtk/filters.toml` 配置文件支持 TOML DSL 自定义过滤规则 [Docs]，但用户无法自行添加全新命令的 handler——必须等上游支持。对于非标准/内部 CLI 工具，基本不可用。

**判断**：覆盖面广但不开放。对比真正的可扩展系统（插件、hook API），定制能力有限。

## 文档质量

评分 3/5。

README 质量高——清晰的 token 节省表、安装说明、架构图、示例。官网有分语言的 /guide/ 文档（EN FR ES DE ZH JA）[Docs]。有 CHANGELOG、CONTRIBUTING。

扣分项：多语言文档质量和同步程度不易核验；0.x 高频 RC 使文档持续追赶行为；每种 command filter 的保真边界仍需更系统的契约说明。

## 社区与成熟度

| 维度 | 评分 | 说明 |
|------|------|------|
| 社区活跃度 | 3/5 | 70,345 stars、4,377 forks，需求与参与度高；但 774 issues / 792 PRs 说明维护吞吐仍不足 [GH:API-2026-07-12]。 |
| 成熟度 | 2/5 | 约 6 个月、稳定版 v0.43.0，已不再是“只有一个 stable tag”；但仍为 0.x，高频 0.44 RC、开放严重 bug 与多项 advisory 阻止更高评分 [GH:API-2026-07-12]。 |

## 安全与风险

评分 2/5。

**正面**：核心 Rust binary 可本地运行且依赖面相对集中；但 rewrite plugins、hooks、project-local config 与包分发形成额外 trust boundaries，不能概括为“攻击面极小”。

**风险点**：
- #1891：覆盖 `copilot/claude.md` 的报告仍 open，影响配置完整性 [GH:issue-1891]
- CVE-2026-45792：project-local filter 可篡改 LLM 所见输出，`<0.32.0`，patched `0.32.0` [GHSA-config]
- CVE-2026-54555：rewrite auto-allow permission-gate bypass。API 的 `patched >=42.2` 与 0.x 版本线表述异常，运维前必须逐 advisory/版本核对，不能直接强化成“v0.42.2 已修复” [GHSA-gate]
- CVE-2026-55249：`@rtk-ai/rtk-rewrite` 1.0.0 command injection；API 未列 patched version [GHSA-plugin]

许可证冲突现已消除：GitHub metadata、README badge 与仓库 LICENSE 均为 Apache-2.0 [GH:LICENSE]。但三类 advisory 与开放配置覆盖 bug 表明 rewrite/filter 处在真实 trust boundary 上，security 下调至 2/5。

## 学习价值

- **Rust CLI 设计参考**：无系统依赖单二进制、跨平台 CI/CD、Homebrew 分发——小而美的工程实践
- **AI harness hook 思维**：透明代理模式可推广到其他 agent command-interception 场景（safety、context、output filtering）
- **反面教材**：约 6 个月 70k+ stars，但 issues 与 PRs 均达数百，展示超速增长下的治理与 review 瓶颈

---

*2026-07-12 复核：稳定版已到 v0.43.0，因此 maturity 从 1 上调到 2；但 #1891、backlog 与三项 advisory 使 recommendation 维持 2。*
