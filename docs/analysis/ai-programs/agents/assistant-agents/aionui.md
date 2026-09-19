---
title: "AionUi"
created: 2026-05-14
updated: 2026-09-16
last_checked: 2026-09-16
last_verified: 2026-09-16
type: repository-analysis
repo_url: "https://github.com/iOfficeAI/AionUi"
category: "ai-programs/agents/assistant-agents"
tags: [ai-agent, desktop, multi-agent, electron, office, cowork]
primary_language: TypeScript
stars: 32952
license: Apache-2.0
status: active
docker_support: false
gpu_required: false
estimated_cpu: "desktop plus backend and invoked agents; not measured"
estimated_memory: "depends on Electron, AionCore, conversations and external agents; not measured"
estimated_storage: "application, backend, skills and user files; no verified minimum"
evidence: "Prior user deployment feedback retained; 2026-09-16 GitHub API, README, release notes, LICENSE, CONTRIBUTING, package.json and tree inspection; no fresh runtime or backend deployment test"
ratings:
  capability: 4
  usability: 3
  performance: 3
  code_quality: 3
  documentation: 4
  community: 3
  maturity: 2
  extensibility: 4
  security: 3
  recommendation: 3
overall_score: 3.2
sources:
  - "[GH:stars] https://api.github.com/repos/iOfficeAI/AionUi — queried 2026-09-19 UTC+8; stargazers_count=32952. Metadata-only repair of the omitted stars field; no new full freshness audit."
  - "[GH:current] https://api.github.com/repos/iOfficeAI/AionUi — queried 2026-09-16 UTC+8: canonical unchanged, archived=false, disabled=false, TypeScript, Apache-2.0; branch/pushed_at, community profile, tree, LICENSE checked; separate Search queries open issues=680, open PRs=228; published repository security-advisories=[] (negative lookup only)."
  - "[GH:readme] https://github.com/iOfficeAI/AionUi/blob/main/README.md — read through GitHub API 2026-09-16: built-in/external agents, office assistants, WebUI/channels, cron, skills and extensions. Development now uses AionUi Electron frontend plus AionCore backend; built-in assistant catalog/skills link to iOfficeAI/AionCore. This check did not independently deploy AionCore or audit OfficeCLI."
  - "[GH:release] https://github.com/iOfficeAI/AionUi/releases/tag/v2.2.2 — published 2026-09-09T11:29:49Z, checked 2026-09-16 along with four preceding releases; v2.2.2 adds tab-scoped explorer refresh/repo rediscovery/Collapse All (#4202). Release states installers are no longer published on GitHub and directs users to https://www.aionui.com/; current README Download Now still links GitHub Releases. Website download artifact was not tested."
  - "[GH:structure] https://github.com/iOfficeAI/AionUi — package.json, CONTRIBUTING.md, CHANGELOG.md and tree read 2026-09-16; packages/desktop, packages/web-cli, packages/web-host, packages/shared-scripts, mobile/package.json, extension example manifests, tests/e2e and build/release workflows visible. Static presence does not prove supported mobile delivery or test success."
  - "[History] Local Git revision 72fa10bef9d4175ff42f56d4824bb7ab0579b168:wiki/github-repo-wiki/ai-programs/agents/assistant-agents/aionui.md, read before editing 2026-09-16. Prior analysis dated 2026-07-11 preserved user deployment concerns: bugs/state inconsistency and multi-agent token cost; then v2.1.32, 533 open issues/139 PRs. Historical feedback/snapshots, not a fresh test of v2.2.2."
---

# AionUi

> 多 agent Cowork 桌面工作台；功能广、权限面大，当前采用判断仍是尝鲜而非关键依赖。
>
> **状态**: `active` · **总分**: 3.2/5 · **推荐度**: 3/5

> **验证边界**：本轮未下载安装包、启动桌面/backend、运行办公任务或 benchmark；既有用户反馈不等于对新版本的实测。

## 一句话总结

适合想在统一桌面界面中组合 agent、办公文件与定时任务的尝鲜者；没有足够新运行证据推翻 用户 既有稳定性与成本顾虑 [History]。

## 总体评价

本轮的实质变化不是 patch 数量，而是产品交付与后端边界：最新 v2.2.2 的 release 指向官网下载安装包，不再在 GitHub 发布 installers；README 的开发说明与助手/skills 定义指向 **AionCore**。旧条目把 `aionui-backend`、Electron/Node/Rust 三种运行方式和精确硬件门槛混作当前已验证事实，不再适用 [GH:readme][GH:release]。

AionUi 仓库本身没有迁移，仍是 TypeScript/Apache-2.0。AionCore 是当前 README 指出的另一个组件，不据此自动迁移本条目，也不从前端许可证推断所有组件许可 [GH:current][GH:readme]。

## 推荐度：3/5

**目标角色**：愿意自行验证桌面、后端、外部 CLI 和办公文件链路的个人高级用户。适合办公自动化试验与架构研究；不建议将关键账号、唯一文件副本或无人看守的高权限任务立即交给它。

没有本轮 runtime smoke，就不能因升级到 v2.2 而宣称旧 bugs 已修复；也不能断言所有旧问题在新版本必然存在。保留原有 3/5 推荐与成熟度 2/5 [History][GH:current]。

## 优势

1. README 将 built-in 与外部 agents、文件操作和定时任务放在同一工作台 [GH:readme]。
2. OfficeCLI/助手预设提供 PPT、Word、Excel 文件工作流入口；是产品声明而非本轮文件生成验收 [GH:readme]。
3. 前端、backend 与扩展定义的归属更明确，有利于分层排障 [GH:readme][GH:structure]。
4. skills/extension 示例与 e2e 结构可供开发者研究 [GH:structure]。

## 劣势

1. 既有用户反馈中的 bug 与成本顾虑没有新实测闭环 [History]。
2. 本轮 680 issues、228 PRs，维护面较历史快照扩大；这不是“680 个 bug”的统计 [GH:current]。
3. 安装包交付转至官网，README 按钮与 release 正文指引不完全一致 [GH:release]。
4. 跨仓库 backend、外部 agents、插件、渠道与 cron 使权限/升级排障复杂 [GH:readme]。

## 适合什么场景

- 对脱敏或可恢复文件做办公自动化原型。
- 需要桌面界面统一管理多个 agent 的个人使用。
- 研究 assistant catalog、skills、扩展与前后端拆分。

## 不适合什么场景

- 仅一次 CLI 调用即可完成的简单任务。
- 对生产稳定性与审计隔离有刚性要求的无人值守平台。
- 将“本地 UI”误认为数据绝不会发往模型或工具服务。

## 与类似项目对比

| 项目 | 定位 | 相对本项目 |
|---|---|---|
| Hermes Agent | CLI-first 通用 assistant | AionUi 更偏桌面聚合与办公；这里不比较未核验的权限默认值 |
| OpenClaw | 自部署 assistant 平台 | 与 AionUi 的桌面 Cowork 交互重心不同，不据此断言其没有前端 |
| AutoGPT | 持续 agent/workflow 平台 | AionUi 更贴近个人桌面工作台，AutoGPT 更偏平台化工作流 |

仅为同类 assistant 项目的定位比较，没有本轮同等十维竞品审计，也没有验证任何双向集成。

## 它能做什么

能力 4/5。README 宣称 built-in agent 可读写文件、搜索、调用 MCP，并聚合外部 agents；办公助手输出可编辑文档，WebUI/聊天渠道提供远程入口，cron 提供定时运行 [GH:readme]。当前助手 catalog 与 built-in skills 的源码入口在 AionCore；不能把前端 repo 单独当作完整运行时。

v2.2.2 的明确新增是 tab-scoped explorer refresh、仓库重新发现和 Collapse All；这是交互改进，不构成整个系统稳定性证明 [GH:release]。

## 运行环境与资源占用

| 场景 | CPU | 内存 | 存储 | 说明 |
|---|---|---|---|---|
| Desktop | 未测量 | Electron 与本地 backend | 安装包与用户状态 | 本轮未安装 |
| Backend | 未测量 | 未测量 | 配置和运行数据 | README 指向 AionCore；未独立部署 |
| 外部 agents/office tools | 依实际任务 | 依并发和模型 | 模型、工具与文件 | 不沿用旧版硬件最低值 |

性能 3/5，无精确 CPU/RAM 最低值或基准数据。多 agent 可能重复消耗上下文，但不能统一声称成本必然按 agent 数线性增长。`docker_support: false` 指本轮未核实官方用户 Docker image；GPU 不是桌面客户端的固有要求 [GH:readme][GH:structure]。

## 上手体验

3/5。当前应从 release 正文进入官网获取安装包，不能保证 GitHub release assets 中仍有 installers；本轮未下载、校验签名或安装 [GH:release]。模型凭据、backend 与外部 CLI 的配置仍需单独处理，“零配置”不覆盖所有这些边界。

## 代码质量

3/5。package/tree 显示 desktop/web packages、扩展示例、e2e 与 CI 结构，是治理正信号，但没有执行测试或覆盖率证据 [GH:structure]。跨仓库重组与既有真实故障反馈要求继续保守，不能把静态工程规范当成质量验收 [History]。

## 可扩展性

4/5。README 提供 built-in/custom/extension skills 路线；tree 有 agents、assistants、MCP servers、settings、themes 等扩展清单示例 [GH:readme][GH:structure]。这说明存在扩展接口，不保证任意 agent 或任意 MCP server 可无配置接入。

## 文档质量

4/5。多语言 README、贡献与开发入口、release notes 能帮助定位组件；AionCore 归属也比旧 backend 命名更清楚。下载按钮仍指 GitHub、release 却指官网，是当前需要读者辨别的文档一致性问题 [GH:readme][GH:release]。不保留未经本轮核验的旧 Wiki“5/6 Coming Soon”判断。

## 社区与成熟度

| 维度 | 评分 | 说明 |
|---|---|---|
| 社区 | 3/5 | 活动持续但维护压力较大 [GH:current] |
| 成熟度 | 2/5 | 交付/组件变化与既有反馈仍需运行验证 [GH:release][History] |

社区 3/5、成熟度 2/5。持续发布和 680/228 backlog 说明活动与维护压力同时存在，不能因单次 bugfix release 升级评分 [GH:current][GH:release]。贡献者响应速度与当前用户成功率未测；用户 先前实际体验仍有优先权 [History]。

## 安全与风险

3/5。本轮 repository advisories 为空，只说明这个接口未发现发布公告 [GH:current]。文件读写、外部工具、远程渠道与定时运行组合意味着模型输出可能影响宿主数据；本地 UI 不代表隔离沙箱或无外传 [GH:readme]。

建议隔离工作目录、使用可恢复文件和低权限账号、限制模型/工具 credentials，并验证远程访问认证、TLS 和绑定地址。本轮未核验新 backend 的 auth 默认值，不沿用旧 JWT/端口/桥接数量来作安全保证，也不与其他 assistant 做无证据安全排名。官网安装包与 backend 分发还需独立做来源、签名和版本一致性校验。

## 学习价值

高。值得研究的是桌面 UI、agent runtime、助手内容与工具链各由谁负责，以及多入口如何共同处理任务状态与授权。功能越广，越应把一个真实文件任务从入口到交付完整测通，而非数 feature。
