---
title: "UI-TARS Desktop / Agent TARS"
created: 2026-05-31
updated: 2026-05-31
type: repository-analysis
repo_url: "https://github.com/bytedance/UI-TARS-desktop"
category: "ai-programs/agent-assistants"
tags:
  - ai-agent
  - gui-agent
  - computer-use
  - browser-use
  - multimodal
  - mcp
  - desktop
  - typescript
previous_repo: ""
successor: ""
primary_language: "TypeScript"
license: "Apache-2.0"
stars: 35752
forks: 3600
last_checked: 2026-05-31
last_verified: 2026-05-31
evidence: "GitHub API metadata + local shallow clone source scan + README/docs/changelog/security review; not runtime tested"
archived_reason: ""
docker_support: false
gpu_required: false
estimated_cpu: "4-8 cores"
estimated_memory: "8-16GB"
estimated_storage: "2-10GB"
status: active
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
  - "[GH] https://github.com/bytedance/UI-TARS-desktop"
  - "[GH:API] GitHub REST/GraphQL metadata for bytedance/UI-TARS-desktop, checked 2026-05-31"
  - "[Source:local-scan] Local shallow clone at /opt/data/tmp/repo-wiki-trending-2026-05-31/repos/ui-tars-desktop, commit e9f3387288da, checked 2026-05-31: 2,491 Git-tracked files, 80 package.json files, 202 markdown files, 8 GitHub workflows, about 145 conventional test/spec/bench/e2e/snapshot files; no runtime tests executed"
  - "[Source:create-new-mcp-template] Local source file packages/agent-infra/create-new-mcp/template-default/package.json checked 2026-05-31: MCP inspector dev script still sets DANGEROUSLY_OMIT_AUTH; exact environment value is intentionally not reproduced"
  - "[GH:releases] https://github.com/bytedance/UI-TARS-desktop/releases"
  - "[Docs:quick-start] https://github.com/bytedance/UI-TARS-desktop/blob/main/docs/quick-start.md"
  - "[Docs:security] https://github.com/bytedance/UI-TARS-desktop/blob/main/SECURITY.md"
  - "[Source:root-package] https://github.com/bytedance/UI-TARS-desktop/blob/main/package.json"
  - "[Source:cli-package] https://github.com/bytedance/UI-TARS-desktop/blob/main/multimodal/agent-tars/cli/package.json"
  - "[Source:core-package] https://github.com/bytedance/UI-TARS-desktop/blob/main/multimodal/agent-tars/core/package.json"
  - "[Source:changelog] https://github.com/bytedance/UI-TARS-desktop/blob/main/multimodal/CHANGELOG.md"
---

# UI-TARS Desktop / Agent TARS

> ByteDance 的多模态 GUI / browser / computer-use agent stack：同一仓库同时承载 Agent TARS CLI/Web UI 与 UI-TARS Desktop。
>
> **状态**: `active` · **总分**: 3.2/5 · **推荐度**: 3/5

## 一句话总结

UI-TARS Desktop / Agent TARS 是一个能力很强、工程投入也真实的 **multimodal computer-use agent stack**：它把视觉定位、浏览器控制、MCP 工具、桌面 GUI 操作和 Web UI/CLI 包进一个 TypeScript monorepo；但版本仍在 0.3.0、issue 积压高、远程 operator 已有服务下线提示，适合研究和试用，不宜把它当作稳定生产基础设施。

## 总体评价

这个仓库的价值不只是「桌面应用」。README 明确把项目拆成两条线：**Agent TARS** 是通用多模态 agent stack，提供 CLI 与 Web UI；**UI-TARS Desktop** 是由 UI-TARS / Seed VLM 驱动的 native GUI agent，用于本地/远程 computer operator 与 browser operator [GH]。

从源码侧看，项目并非 README-only 热门仓库：本地 shallow clone 显示约 2,491 个 Git-tracked 文件、80 个 `package.json`、202 个 markdown 文档、8 个 GitHub workflows、约 145 个常规 test/spec/bench/e2e/snapshot 文件；根目录有 `pnpm + turbo + vitest + playwright + secretlint + scorecard` 组合，说明维护者确实投入了工程化治理 [Source:local-scan] [Source:root-package] [GH:API]。

但它仍处在快速变化阶段。GitHub API 显示仓库创建于 2025-01-19，最新 release 为 `v0.3.0`，公开 open issues 为 318、open PR 为 83；本次 GraphQL 主分支提交查询口径显示近期主线提交较少，但该口径可能受 release/monorepo 工作流影响，不能单独判断项目活跃度，只能说明「热度很高」不等价于「持续高速主线迭代」[GH:API] [GH:releases]。

我的判断：它值得进入 wiki，作为 computer-use agent / multimodal agent stack 的重要观察对象；但推荐度只能给 3/5。原因是能力边界宽、攻击面大、成熟度还低。善战者无赫赫之功——真正可依赖的 GUI agent，不应只看 demo 多炫，而要看失败恢复、权限隔离、模型退化、浏览器/桌面状态漂移时的稳健性。

## 推荐度：3/5

**目标角色**：想研究 GUI agent、browser-use、MCP tool orchestration、multimodal agent UX 的开发者；或愿意承担 early-stage 风险、希望试用 ByteDance UI-TARS 系列模型生态的技术用户。

推荐理由：

- 它把 GUI agent、browser agent、MCP、CLI/Web UI、desktop app 放在同一工程体系内，横向能力强 [GH]。
- Apache-2.0 许可、公开 release、测试与 CI 文件较多，相比很多 demo repo 更像真实工程 [GH:API] [Source:root-package]。
- 对 wiki 的研究价值高：可作为 OpenClaw、AionUi、OpenHuman 等 agent-assistant 条目的 computer-use 横向对照。

保留意见：

- 仍是 `v0.3.0` 阶段，0.x 版本和密集 beta release 说明 API/UX 稳定性不足 [GH:releases]。
- open issues 318、open PR 83，积压对桌面/浏览器类 agent 尤其敏感，因为用户面 bug 往往直接阻塞使用 [GH:API]。
- Quick Start 中写明 Remote Operator service 已计划在 2025-08-20 discontinued；以本条目检查时间看，远程 operator 的官方免费路径已不适合被视为长期可用承诺 [Docs:quick-start]。
- 项目能执行浏览器、文件、shell、桌面控制等高权限动作，安全风险天然高；虽然有 SECURITY.md、secretlint、scorecard 等信号，但安全模型仍需部署者自行约束 [Docs:security] [Source:changelog]。

结论：**值得分析、值得跟踪、可小规模试用；不建议生产依赖。**

## 优势

1. **能力覆盖完整**：Agent TARS 覆盖 CLI、Web UI、hybrid browser agent、event stream、MCP integration；UI-TARS Desktop 覆盖本地/远程 computer operator、browser operator、截图视觉识别和键鼠控制 [GH]。
2. **工程化痕迹扎实**：monorepo 内有 `pnpm@9.10.0`、Turbo、Vitest、Playwright、secretlint、Scorecard workflow、release workflow 和多包 workspace，明显不是简单 demo [Source:root-package]。
3. **测试面相对可观但不夸大**：本地 clone 发现约 145 个常规 test/spec/bench/e2e/snapshot 文件，覆盖 browser control、action parser、filesystem tools、workspace path resolver 等高风险模块；这说明有测试投入，但不能推出高覆盖率 [Source:local-scan]。
4. **多模态 GUI agent 研究价值高**：README 链接 UI-TARS paper、Hugging Face model、ModelScope 与 Midscene browser integration；对研究 computer-use agent 的工程拆解很有价值 [GH]。
5. **MCP 与 sandbox 方向明确**：changelog 可见 AIO sandbox environment、MCP registry、MCP client timeout/filtering、filesystem/browser MCP servers 等持续演进 [Source:changelog]。
6. **许可证友好**：Apache-2.0，适合学习、二次开发和商业场景评估 [GH:API]。

## 劣势

1. **成熟度低**：最新 release 为 `v0.3.0`，版本序列中存在大量 beta release；GUI agent stack 这种高状态复杂度项目，0.x 风险不能忽略 [GH:releases]。
2. **问题积压高**：GitHub API 显示 318 open issues 与 83 open PR；这对桌面自动化工具意味着用户面不确定性较大 [GH:API]。
3. **上手依赖重**：CLI 需要 Node.js >= 22.15.0；Desktop 需要浏览器、系统 Accessibility/Screen Recording 权限、VLM provider/base URL/API key/model name 配置；不是「下载即稳定可用」 [Docs:quick-start] [Source:cli-package]。
4. **远程 operator 可持续性弱**：Quick Start 写明官方 Remote Operator service 已计划在 2025-08-20 discontinued；以本条目检查时间看，后续需转向火山引擎 OS Agent Services 或自部署方案 [Docs:quick-start]。
5. **安全攻击面大**：浏览器、文件系统、shell、桌面输入输出、MCP server 都是高权限边界；changelog 中曾出现 “RCE Vuln: Remove `DANGEROUSLY_OMIT_AUTH=true` from dev scripts” 记录，应视为风险信号而非仅看作已修复项 [Source:changelog]。
6. **文档站抓取不稳定**：外部 docs 站 `agent-tars.com` 在本次 web_extract 中未能直接抓取，wiki 条目主要依赖 GitHub README 与仓库内文档；这降低了外部可验证性。

---

## 适合什么场景

- 研究 GUI agent / computer-use agent 的工程实现。
- 对比不同 agent-assistant：AionUi 偏 agent workspace，OpenHuman 偏个人记忆助理，UI-TARS/Agent TARS 偏视觉驱动的桌面与浏览器控制。
- 需要一个可读源码的 multimodal agent stack，学习 MCP、browser control、event stream、snapshot tests、action parser。
- 在隔离环境中试用 UI-TARS/Seed VLM 的桌面自动化能力。
- 做论文/技术分享中关于 computer-use agent 的案例分析。

## 不适合什么场景

- 生产环境自动操作真实账号、支付、云控制台、公司内网后台。
- 需要稳定 API、长期兼容、低维护成本的团队基础设施。
- 非技术用户开箱即用：模型端点、API key、系统权限、浏览器依赖都会构成门槛。
- 对安全边界要求极高但没有 sandbox/最小权限策略的环境。
- 低资源桌面机器：Electron/浏览器/视觉模型调用/录屏权限组合会带来明显资源和权限成本。

## 与类似项目对比

| 项目 | 定位 | 相对本项目 |
|------|------|-----------|
| AionUi | 多 agent desktop workspace + office + cron | AionUi 更像聚合工作台；UI-TARS/Agent TARS 更聚焦视觉 GUI/browser 操作与 multimodal agent stack |
| OpenHuman | 本地记忆驱动的个人 AI 桌面助理 | OpenHuman 强在个人记忆与集成；UI-TARS 强在直接操控 GUI/浏览器 |
| OpenClaw | 自托管通用 AI 代理框架 | OpenClaw 强在多通道/自托管总控；UI-TARS 强在 VLM-driven computer-use 研究价值 |
| browser-use / Midscene | 浏览器自动化 agent/tooling | UI-TARS 覆盖桌面 GUI + 浏览器 + MCP，范围更宽但也更重 |
| Claude Computer Use | Anthropic 模型能力/产品接口 | Claude Computer Use 是闭源模型/产品参照项；UI-TARS/Agent TARS 更适合作为开源工程样本拆解 |

上述项目按 `ai-programs/agent-assistants` 同类范围做定位级对比，未按同一 10 维度框架深审；`browser-use / Midscene` 与 `Claude Computer Use` 是相邻生态/产品参照项，不是同目录 wiki 条目的直接竞品。

---

## 它能做什么

**Agent TARS 线** [GH]：

- CLI：`npx @agent-tars/cli@latest` 或全局安装后运行 `agent-tars`。
- Web UI：headful 使用方式，面向浏览器可视化 agent workflow。
- Hybrid Browser Agent：支持 GUI visual grounding、DOM 与混合策略。
- Event Stream：用于驱动 context engineering 与 Agent UI。
- MCP Integration：内核构建在 MCP 上，并可挂载外部 MCP servers。
- AIO sandbox / filesystem / browser / command tools：changelog 和源码包中可见持续演进 [Source:changelog] [Source:core-package]。

**UI-TARS Desktop 线** [GH] [Docs:quick-start]：

- 本地 computer operator：通过 VLM 看屏幕、输出动作、控制鼠标键盘。
- Browser Operator：依赖 Chrome/Edge/Firefox 等浏览器。
- 远程 operator：早期提供免费 remote operator，但文档已写明该服务已计划 discontinued；以本条目检查时间看，后续需自部署或使用火山引擎 OS Agent Services。
- 模型接入：支持 Hugging Face endpoint / VolcEngine Ark 等，需要 Base URL、API Key、Model Name。
- 跨平台：README 声称 Windows/macOS/browser 场景支持，但 Desktop 文档重点仍在 macOS/Windows 权限配置。

## 运行环境与资源占用

| 场景 | CPU | 内存 | 存储 | 说明 |
|------|-----|------|------|------|
| Agent TARS CLI / Web UI | 2-4 cores | 4-8GB | 1-3GB | Node.js >= 22.15.0，依赖浏览器/模型 API；未本地实测 |
| UI-TARS Desktop | 4-8 cores | 8-16GB | 2-10GB | 桌面权限 + 浏览器 + 视觉模型 API；Electron/浏览器类负载估计 |
| 本地 VLM 部署 | 8+ cores | 16GB+ | 10GB+ | 若自行部署 UI-TARS-1.5-7B 等模型，GPU/显存需求取决于推理后端；本条目未验证 |

- **运行时**：Node.js monorepo；Agent TARS CLI 包要求 Node.js >= 22.15.0；根项目 engines 写 Node.js >=20.x [Source:cli-package] [Source:root-package]。
- **操作系统**：README/Quick Start 覆盖 macOS、Windows、Browser；Linux 支持需以 release/源码构建为准 [GH]。
- **Docker**：没有发现面向整个产品的一键 `docker-compose`；但仓库内有 browser/filesystem MCP server Dockerfiles，属于组件级 Docker 支持，不等同于完整部署支持。
- **GPU**：调用远程 VLM API 时不需要本机 GPU；自部署视觉模型时可能需要 GPU。
- **外部依赖**：VLM/LLM provider、浏览器、系统辅助功能权限、MCP servers、可能的云端 sandbox/remote operator 服务。

评分 3/5。自身并非异常臃肿，但 desktop + browser + VLM + high-permission tool stack 天然不轻；未进行真实 runtime benchmark，因此保持中位评分。

## 上手体验

评分 3/5。

Quick Start 路径清晰：下载 release 或 Homebrew cask 安装 Desktop；macOS 需 Accessibility 与 Screen Recording 权限；Browser Operator 需 Chrome/Edge/Firefox；模型端需要配置 provider、base URL、API key、model name [Docs:quick-start]。

Agent TARS CLI 的命令也简单：

```bash
npx @agent-tars/cli@latest
npm install @agent-tars/cli@latest -g
agent-tars --provider volcengine --model doubao-1-5-thinking-vision-pro-250428 --apiKey your-api-key
```

但「能启动」不等于「能可靠完成任务」。GUI agent 的失败模式包含：浏览器版本差异、屏幕布局变化、权限弹窗、模型动作解析错误、远程服务不可用、API key 配置错误、多显示器限制。Quick Start 明确写着 UI-TARS Desktop currently only available for single monitor setup，多显示器可能导致任务失败 [Docs:quick-start]。

## 代码质量

评分 3/5。

正面信号：

- TypeScript monorepo 结构明确，根项目用 pnpm workspace + turbo [Source:root-package]。
- 8 个 GitHub workflows，包括 test、benchmark、e2e、release、scorecard、secret-scan、secretlint、agent-tars-build [Source:local-scan] [GH:API]。
- 本地 clone 统计到约 145 个常规 test/spec/bench/e2e/snapshot 文件，涉及 browser control、action parser、filesystem tools、workspace path resolver 等核心风险点；相对 2,491 个 Git-tracked 文件并不算高覆盖，只能作为“有测试投入”的证据 [Source:local-scan]。
- 有 `SECURITY.md`、`CODE_OF_CONDUCT.md`、`CONTRIBUTING.md`，community profile health 87% [GH:API]。

保守扣分：

- 80 个 `package.json` 与多个 lockfile 暗示 monorepo 复杂度高，理解和维护成本不低。
- 0.x 快速迭代，API/包边界还不算稳定。
- 本条目未运行测试，评分基于静态源码扫描与 GitHub metadata，不能等同于测试通过率。

## 可扩展性

评分 4/5。

扩展点主要来自：

- MCP server 挂载与 MCP client/tool filtering [GH] [Source:changelog]。
- Agent TARS CLI / Web UI / server / event stream 架构。
- Workspace packages：`@agent-tars/core`、`@tarko/*`、`@gui-agent/*`、`@agent-infra/*` 等模块化包 [Source:core-package]。
- Browser/Filesystem MCP server Dockerfiles，说明部分工具可独立容器化。

扣分点是扩展能力仍随 monorepo 快速变化，不是稳定插件 API；深度定制需要读源码和跟随版本。

## 文档质量

评分 4/5。

README 对两个子项目的定位、showcase、quick start 和资源链接写得比较清楚；仓库内有 `docs/quick-start.md`、`setting.md`、deployment 相关链接、中文 README，适合初步理解 [GH] [Docs:quick-start]。

扣分点：

- 外部 docs 站本次抓取失败，独立文档可访问性未完全验证。
- 远程 operator discontinued 的说明很关键，但容易被 README demo 的热度掩盖 [Docs:quick-start]。
- 桌面 GUI agent 的失败恢复、安全边界、sandbox 最小权限策略没有在 README 层给出足够系统的部署指南。

## 社区与成熟度

| 维度 | 评分 | 说明 |
|------|------|------|
| 社区活跃度 | 3/5 | 35.7k stars、3.6k forks、约 48 contributors sample、58 mentionable users；但 318 open issues / 83 open PR 积压明显，本轮未审查响应速度。高可见度不等于健康社区治理 [GH:API] |
| 成熟度 | 2/5 | 创建于 2025-01-19，latest release `v0.3.0`，仍有大量 beta 版本与远程 operator 服务变更；不宜视作稳定基础设施 [GH:releases] |

## 安全与风险

评分 3/5。

正面信号：

- 有 SECURITY.md，说明漏洞报告路径，并承诺对 latest version 发布 security advisories [Docs:security]。
- workflow 包含 secret-scan、secretlint、scorecard；根项目依赖中也有 secretlint [Source:root-package]。
- GitHub security advisories API 本次查询返回 0 个公开 advisory；但这只是本次查询未发现公开 advisory，不等于没有漏洞历史，因为 changelog 中的 RCE 修复是以常规 PR/changelog 形式暴露的 [GH:API] [Source:changelog]。

关键风险：

- GUI/browser/computer-use agent 的权限边界天然危险：看屏幕、操作鼠标键盘、读写文件、执行 shell、连接 MCP 工具。
- changelog 中出现过 RCE 相关修复：“Remove `DANGEROUSLY_OMIT_AUTH=true` from dev scripts”，说明开发脚本/工具链确实触碰到高风险边界 [Source:changelog]。
- 本地源码中 `packages/agent-infra/create-new-mcp/template-default/package.json` 的 MCP inspector dev script 仍设置 `DANGEROUSLY_OMIT_AUTH`，说明这类危险开发模式尚未完全根除；具体环境值不在条目中复写 [Source:create-new-mcp-template]。
- LLM/VLM 代理容易被 prompt injection、网页恶意内容、屏幕内容诱导；README demo 场景越接近真实网站操作，越需要 sandbox 和人工确认。
- 使用 API key 配置模型端点时，日志、截图、event stream、generated files sharing 都需要额外隐私审计。

建议只在隔离 workspace、测试账号、最小权限 API key、可回滚环境中试用；不要连接真实账号、支付路径、云控制台或生产内网后台。

## 学习价值

高。它是研究 **computer-use agent 从 demo 走向工程系统** 的好材料：

- 如何把 VLM action parser 接到浏览器/桌面控制。
- 如何在 Agent UI 中呈现 event stream 与 replay。
- 如何把 MCP tools、filesystem、browser、sandbox 纳入统一 agent runtime。
- 如何设计 GUI agent 的测试：snapshot、action parser tests、browser strategy tests、e2e。
- 如何暴露 high-permission agent 的安全边界和版本成熟度问题。

对 Develata 的 wiki 体系而言，它应被视为 **agent-assistants / computer-use stack 的重要观察样本**，而非日常推荐工具。
