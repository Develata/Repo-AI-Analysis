---
title: "AutoGPT"
created: 2026-05-20
updated: 2026-09-16
last_checked: 2026-09-16
last_verified: 2026-09-16
type: repository-analysis
repo_url: "https://github.com/Significant-Gravitas/AutoGPT"
category: "ai-programs/agents/assistant-agents"
tags: [autonomous-agents, agent-history, agent-platform, workflow-automation, python]
primary_language: Python
stars: 187439
license: "Polyform Shield (autogpt_platform) + MIT (rest)"
status: active
docker_support: true
gpu_required: false
estimated_cpu: "self-host workload dependent; not benchmarked"
estimated_memory: "platform services plus model/tool workload; no current measured minimum"
estimated_storage: "container images, database and workflow assets; not measured"
evidence: "2026-09-16 authenticated GitHub API, README, LICENSE, SECURITY, CONTRIBUTING, Classic README, releases and repository tree; no deployment, image pull, runtime test or dependency audit"
ratings:
  capability: 4
  usability: 3
  performance: 3
  code_quality: 3
  documentation: 4
  community: 4
  maturity: 3
  extensibility: 4
  security: 2
  recommendation: 1
overall_score: 3.1
sources:
  - "[GH:stars] https://api.github.com/repos/Significant-Gravitas/AutoGPT — queried 2026-09-19 UTC+8; stargazers_count=187439. Metadata-only repair of the omitted stars field; no new full freshness audit."
  - "[GH:current] https://api.github.com/repos/Significant-Gravitas/AutoGPT — queried 2026-09-16 UTC+8: canonical unchanged, archived=false, disabled=false, master, pushed_at=2026-09-15T18:57:54Z, Python, license API=NOASSERTION; separate Search queries open issues=312, open PRs=260; repository advisories returned 40 published records. Metadata, community profile and tree checked."
  - "[GH:readme] https://github.com/Significant-Gravitas/AutoGPT/blob/master/README.md — read 2026-09-16: four product surfaces AutoPilot/Agents/Marketplace/Build; hosted Platform publicly available and paid with usage-based runs; self-host needs own infrastructure/model keys and Docker/configuration. Marketing behavior not independently deployed."
  - "[GH:license] https://github.com/Significant-Gravitas/AutoGPT/blob/master/LICENSE and README license table — read 2026-09-16: autogpt_platform uses Polyform Shield, rest MIT; API NOASSERTION does not override the file-level license split. CONTRIBUTING.md requires a CLA for platform contributions. Polyform Shield is source-available with competitive-use restrictions, not ordinary permissive open source."
  - "[GH:release] https://github.com/Significant-Gravitas/AutoGPT/releases/tag/autogpt-platform-beta-v0.7.4 — published 2026-09-04T12:11:43Z, checked 2026-09-16. Latest product release checked separately from preview-seed-fixture; adds per-expert integration scope, workflow/expert features, activity log, Codex HTTP transport replacing bundled CLI, and auth/runtime fixes. v0.7.1 notes single-container distribution and publishing single-container images (#13758/#13994/#13995). No image pull or deployment verified."
  - "[GH:security] https://github.com/Significant-Gravitas/AutoGPT/blob/master/SECURITY.md and classic/README.md — read 2026-09-16. Classic remains unsupported/deprecated; current platform security policy, disclosure and support boundaries inspected. Do not infer Classic support from occasional dependency cleanup or new Classic advisories."
  - "[GH:webhook-advisory] https://github.com/Significant-Gravitas/AutoGPT/security/advisories/GHSA-349p-3c3r-8mjr — published 2026-08-05T04:10:41Z, updated 2026-08-11T14:30:17Z; API inspected 2026-09-16: webhook provider path confusion bypasses generic webhook secret verification; state=published, withdrawn_at=null, affected package Significant-Gravitas/AutoGPT autogpt_platform, range <autogpt-platform-beta-v0.6.70, patched autogpt-platform-beta-v0.6.70, CVSS v3 score 8.2. Historical patched exposure, not proof v0.7.4 is vulnerable."
  - "[GH:structure] https://github.com/Significant-Gravitas/AutoGPT — current recursive tree, README, LICENSE, SECURITY.md, CONTRIBUTING.md, CODE_OF_CONDUCT.md and classic/README.md inspected 2026-09-16; platform and classic remain separate areas. Release notes show runtime/dependency changes, but this is not code execution or test-coverage evidence."
---

# AutoGPT

> 自主 agent 历史的重要项目，当前已是持续运行的 agent/workflow 平台。收录价值与生产采用价值严格分开。
>
> **状态**: `active` · **总分**: 3.1/5 · **生产采用推荐度**: 1/5

> **验证边界**：本轮未部署 Docker stack、拉取镜像、运行 agent 或测试 hosted service；Polyform Shield 平台许可与 MIT 历史部分须分开审查。

## 一句话总结

适合研究 autonomous-agent 向 workflow 产品演化的人；对于寻求低维护、低权限风险生产依赖的用户，仍不推荐直接采用 [GH:readme][GH:security]。

## 总体评价

当前产品 release 是 `autogpt-platform-beta-v0.7.4`，不是列表中的 `preview-seed-fixture`。后者是预览数据库测试素材，不是用户平台版本。README 已将 AutoPilot、Agents、Marketplace、Build 列为四个产品入口，并明确 hosted Platform 公开可用且收费；旧条目的 waitlist 叙述已失效 [GH:readme][GH:release]。

单容器分发与新的 expert/integration 模型改变了部署和能力边界，但不自动解决凭据、租户授权、webhook 或升级运维风险。当前仍有 Classic 弃用线与 Polyform Shield/MIT 混合许可 [GH:license][GH:security]。能力从 5 调为 4：广泛产品声明尚没有代表性端到端验证；社区从 5 调为 4，不再用 stars 和文件齐全替代响应质量。

## 推荐度：1/5

**目标角色**：研究 agent 史和平台安全的人可优先阅读；需要可靠生产自动化的个人或团队应避免未经隔离、许可审查和版本安全核验就采用。这里的 1/5 是默认生产采用建议，不是否认研究价值，也不声称已证明最新版本有未修高危漏洞。

## 优势

1. Classic 到 Platform 的演变提供完整研究对象 [GH:security][GH:readme]。
2. README 描述自然语言入口、可视化 builder、agent 管理与 marketplace 的组合 [GH:readme]。
3. 新 release 持续扩充 expert/integration 与部署路径 [GH:release]。
4. 公布安全政策和 GHSA，使历史攻击面可以核查，而非只能依赖营销声明 [GH:security][GH:webhook-advisory]。

## 劣势

1. Classic 不受支持，不能当作当前维护的轻量 agent [GH:security]。
2. Polyform Shield 的竞争用途限制影响商业选择；“可查看源码”不等于全 MIT [GH:license]。
3. webhook、credentials、外部工具与多租户逻辑有真实历史安全缺陷 [GH:webhook-advisory]。
4. 单容器降低安装形式复杂度，不消除内部服务、数据库、备份和升级责任 [GH:release]。

## 适合什么场景

- agent 史、角色/工作流产品化与权限边界研究。
- 在独立账号、脱敏数据和可丢弃环境里评估平台。
- 研究 webhook 验签、凭据与租户隔离的失败模式。

## 不适合什么场景

- 需要无额外许可限制的竞争性托管产品。
- 将已弃用 Classic 用于生产。
- 没有运维、安全升级或秘密管理能力的团队。
- 将平台广泛功能宣传等同于已经通过业务验收。

## 与类似项目对比

| 项目 | 定位 | 相对本项目 |
|---|---|---|
| BabyAGI | 早期自主任务循环实验 | 更适合观察最小循环；AutoGPT 已扩展为平台 |
| AionUi | 个人桌面 Cowork 工作台 | 更偏桌面与办公；AutoGPT 更偏持续工作流服务 |
| Hermes Agent | CLI-first 通用 assistant | 更偏个人 agent 执行；AutoGPT 更强调平台管理与 builder |

仅为 assistant/agent-history 同类定位比较，竞品未做本轮同等十维审计，不比较未经验证的安全默认值。

## 它能做什么

能力 4/5。按 README，AutoPilot 从自然语言任务开始，Agents 展示运行/成本/待处理动作，Marketplace 提供可复用 agents，Build 提供 blocks 编排 [GH:readme]。v0.7.4 涉及 expert 的 integration scope 与工作流安装等功能；这些是 release 声明，本轮没有验证托管服务和自托管在所有功能上等价 [GH:release]。

## 运行环境与资源占用

| 场景 | CPU | 内存 | 存储 | 说明 |
|---|---|---|---|---|
| Hosted Platform | 服务端承担 | 服务端承担 | 服务配额 | 付费/用量声明；未测试或审价 |
| Self-host | 未测量 | 未测量 | Docker、数据库和任务数据 | 自有模型 key；未执行安装脚本 |
| Single-container | 未测量 | 未测量 | 镜像与持久化卷 | 官方发布记录；未拉取或测试恢复 |

性能 3/5。旧分析的精确 CPU/RAM 数值不作为当前单容器最低要求；实际开销取决于数据库、工具、并发与模型。`docker_support: true` 由官方 single-container image 发布记录支持，而不只是发现 Dockerfile [GH:release]。GPU 非平台调用远端模型的固有要求，本地推理另计。

## 上手体验

3/5。当前 README 明确公开 hosted signup 与自托管的区别，自托管仍提供下载后执行安装脚本的入口 [GH:readme]。脚本简短不等于部署简单，执行前应审查来源和权限。没有本轮安装结果，不能承诺零配置或运行耗时。

## 代码质量

3/5。platform/classic 分区、测试/发布工程及治理文件提供结构线索，但持续的 auth/runtime/dependency 修复与较大维护面要求保守 [GH:structure][GH:release]。未运行测试或计算覆盖率；release 完成不等于 master 或用户部署健康。

## 可扩展性

4/5。blocks、integrations、triggers、expert/workflow 组合形成应用扩展面 [GH:readme][GH:release]。每个外部连接同时增加凭据和授权边界；插件丰富不代表可无审查运行任意第三方逻辑。

## 文档质量

4/5。README 对 hosted/self-host、产品入口与许可证的分隔比旧版明确，SECURITY 和贡献文档也提供支持边界 [GH:readme][GH:license][GH:security]。但产品页声明、版本化 release 与 rolling preview 工件仍容易混淆，操作时要核对真实产品 tag。

## 社区与成熟度

| 维度 | 评分 | 说明 |
|---|---|---|
| 社区 | 4/5 | 活跃但不以受众规模证明响应质量 [GH:current] |
| 成熟度 | 3/5 | beta 平台与部署路径仍在演进 [GH:release] |

社区 4/5、成熟度 3/5。本轮 312 open issues、260 open PRs 与持续 beta release 说明维护活跃但不能证明快速响应或兼容稳定 [GH:current][GH:release]。平台贡献需要 CLA，README 的广泛受众也不是开放治理或生产采用率的证据 [GH:license]。

## 安全与风险

2/5，反映高权限平台的历史攻击面和持续审查成本，不把 40 条发布公告读作 40 个当前漏洞 [GH:current]。

本轮样本 GHSA-349p-3c3r-8mjr 是 webhook provider 路径混淆导致验签绕过；API 标记平台版本低于 v0.6.70 受影响，v0.6.70 修复，CVSS v3 为 8.2。它不能证明 v0.7.4 仍受该缺陷影响，却说明只验证“有 webhook secret”不足以验证所有请求路径 [GH:webhook-advisory]。

部署前应逐公告匹配实际 tag、固定镜像、限制出站网络与工具凭据，并核验租户、webhook 和数据库权限。Classic 仍不应使用；新发布的 Classic 公告或依赖清理不等于恢复支持 [GH:security]。Polyform Shield 的商业用途边界另行审查 [GH:license]。

## 学习价值

很高。AutoGPT 展示了自主循环如何发展成有数据、触发器、凭据、计费和用户权限的平台；真正值得研究的是这一步为何把 prompt 演示变成严肃系统与安全工程，而非只看 agent 能调用多少工具。
