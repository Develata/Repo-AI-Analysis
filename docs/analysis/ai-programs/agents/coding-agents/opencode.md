---


title: "OpenCode"
created: 2026-05-15
updated: 2026-07-12
type: repository-analysis
repo_url: "https://github.com/anomalyco/opencode"
category: "ai-programs/agents/coding-agents"
tags: ["coding-agent", "cli", "tui", "ai-assisted-development", "typescript", "mcp", "terminal"]
previous_repo: ""
successor: ""
primary_language: "TypeScript"
license: "MIT"
stars: 184799
forks: 23057
last_checked: 2026-07-12
last_verified: 2026-07-12
evidence: "GitHub API + official docs/releases/advisories"
archived_reason: ""
docker_support: true
gpu_required: false
estimated_cpu: "低（TUI 运行）"
estimated_memory: "~200MB（Bun 运行时）"
estimated_storage: "~500MB（含 npm 依赖缓存）"
status: active
ratings:
  capability: 4
  usability: 5
  performance: 4
  code_quality: 3
  documentation: 4
  community: 4
  maturity: 2
  extensibility: 5
  security: 2
  recommendation: 3
overall_score: 3.6
sources:
  - "[GH] https://github.com/anomalyco/opencode"
  - "[Docs] https://opencode.ai/docs"
  - "[CVE] https://nvd.nist.gov/vuln/detail/CVE-2026-22812"
  - "[Infralovers] https://www.infralovers.com/blog/2026-01-29-claude-code-vs-opencode/"
  - "[Docs: Plugins] opencode plugin documentation, plugin event hooks and extension surface: https://opencode.ai/docs/plugins"
  - "[Web] opencode official website / documentation entry used for high-level positioning: https://opencode.ai"
  - "[GH:API-2026-07-12] GitHub API snapshot: active, default branch dev, TypeScript, MIT, 184,799 stars, 23,057 forks, 3,621 open issues, 1,081 open PRs, head 9976269 (2026-07-10), latest release v1.17.18 (2026-07-09)."
  - "[GH:v1.17.18] Official patch release: Copilot zero billing-batch crash/pricing fix and Meta Muse Spark prompt; https://github.com/anomalyco/opencode/releases/tag/v1.17.18"
  - "[GHSA-critical] GHSA-c83v-7274-4vgp / CVE-2026-22813, critical CVSS 4.0 9.4: malicious website/XSS path to local command execution; affected <1.1.10, patched 1.1.10; https://github.com/anomalyco/opencode/security/advisories/GHSA-c83v-7274-4vgp"
  - "[GHSA-high] GHSA-vxw4-wv6m-9hhh / CVE-2026-22812, high: unauthenticated HTTP server arbitrary command execution; opencode-ai <1.0.216, patched 1.0.216; https://github.com/anomalyco/opencode/security/advisories/GHSA-vxw4-wv6m-9hhh"
  - "[GH:issues] Sampled historical bug reports, checked 2026-07-12: #18612 'There are too many bugs...' closed 2026-03-22 https://github.com/anomalyco/opencode/issues/18612 ; #23443 desktop sidecar Bun panic/RSS report closed 2026-05-18 https://github.com/anomalyco/opencode/issues/23443"
  - "[GHCR] Official public container package checked 2026-07-12: ghcr.io/anomalyco/opencode:1.17.18 and latest, amd64/arm64 manifests; https://github.com/anomalyco/opencode/pkgs/container/opencode"

---

# OpenCode

> 开源、模型无关的终端 AI 编程 Agent——TUI 优先，插件驱动，支持 75+ LLM 提供商
>
> **状态**: `active` · **总分**: 3.6/5 · **推荐度**: 3/5

## 一句话总结

终端优先的开源 AI 编程 Agent，以模型无关性和插件生态为核心竞争力，是目前 Claude Code 之外最活跃的 CLI 编程 Agent 项目。

## 总体评价

OpenCode 在约 15 个月内积累了 184,799 GitHub stars，成为开源 AI 编程 Agent 领域最受关注的项目之一。其核心价值主张明确：**不被单一模型提供商锁定**——支持 Anthropic、OpenAI、Google、Groq、Azure、Bedrock 等 75+ 提供商及本地模型，用户可按任务切换模型 [GH:API-2026-07-12]。

该项目的真正差异化在于**可扩展性**：插件系统（JS/TS，25+ 事件钩子）、MCP 服务器支持、自定义命令/工具/Skill、主题与快捷键定制，构成了对比表中编码 Agent 中目前非常丰富的扩展面。同时内置 build（全权限）和 plan（只读）两种 Agent，Tab 键切换，配合 `/undo` `/redo` `/share` 等命令，工作流设计成熟。

但**极速增长是双刃剑**：当前 3,621 open issues 与 1,081 open PRs；仓库还发布过一项 critical CVSS 4.0 9.4 的 XSS→本地命令执行 advisory 和一项 high 未认证 HTTP server RCE advisory，二者均已修复 [GH:API-2026-07-12] [GHSA-critical] [GHSA-high]。历史漏洞不是“当前仍易受攻击”，却证明其本地 server/web UI 信任边界曾出现基础性缺口。

## 推荐度：3/5

> 2026-06 推荐度重校准：maturity=2，backlog 大且有高危历史 CVE/快速 breaking changes；采用推荐需下调。


**定位**：面向希望自由选择/切换 LLM 提供商、且偏好终端工作流的开发者。如果你已经通过 API 使用多个模型提供商，OpenCode 是目前**模型无关 CLI 编程 Agent 中很有竞争力的选择**。

加分项：100% 开源（MIT），插件生态完善，MCP 支持，TUI 体验出色，安装极简。

减分项：约 15 个月历史，发布与行为仍高频变化；3,621 issues + 1,081 PRs 反映质量和 review 债务；桌面端仍标 BETA；存在 critical/high 历史 CVE [GH:API-2026-07-12] [GHSA-critical] [GHSA-high]。

**结论**：值得关注的强力工具，但用户需要了解其"快速迭代但不够稳定"的现状。个人开发者和小团队可重点试用，但文件级推荐度仍为 3/5；需要长期稳定性的生产环境更应保守评估。

## 优势

1. **模型无关性**：支持 75+ 提供商 + 本地模型（Ollama、LM Studio 等），可在一个会话中切换模型——用推理模型做规划，用快速模型做执行
2. **极简安装与上手**：`curl | bash` 一键安装，`/connect` 向导配置，`/init` 分析项目，<30 分钟即可获得价值
3. **插件系统完善**：JS/TS 插件支持 25+ 事件钩子（工具执行前后、会话状态、文件变更、LSP 诊断等），本地或 npm 加载，有 TypeScript 类型定义
4. **内置多 Agent 模式**：build（全权限执行）和 plan（只读分析）两种 Agent，Tab 键即时切换；支持 `@general` 子 Agent 处理复杂搜索
5. **TUI 体验出色**：终端优先设计，支持图片拖放输入、主题定制、快捷键配置、会话分享（`/share` 生成链接）
6. **客户端/服务器架构**：天然支持远程驱动，Web UI 可用，VS Code 扩展 SDK 在开发中

## 劣势

1. **稳定性不足**：3,621 open issues 与 1,081 open PRs，质量债务和 review 队列仍很大 [GH:API-2026-07-12]
2. **成熟度低**：约 15 个月历史，v1.17.x 仍可在数日内连续发布，稳定窗口短
3. **存在两项严重安全历史问题**：critical CVE-2026-22813（<1.1.10）与 high CVE-2026-22812（<1.0.216）均已修复，但暴露了 Web UI/本地 HTTP API 的复合攻击面 [GHSA-critical] [GHSA-high]
4. **桌面端不成熟**：仍标注 BETA，存在已知崩溃和功能缺失
5. **不支持 Anthropic 订阅**：只能用 Anthropic API key，无法直接使用 Claude Pro/Max 订阅
6. **与部分模型配合不稳定**：第三方评测指出 OpenCode 的内部提示工程对不同模型效果差异大，非 Anthropic 模型可能体验下降

---

## 适合什么场景

- 需要自由切换 LLM 提供商的开发者（今天用 Claude，明天用 GPT，后天用本地模型）
- 偏好终端工作流、Neovim/Helix 用户
- 需要高度定制化编程 Agent 的团队（插件、自定义命令、MCP 集成）
- 希望使用本地/离线 LLM 进行编码（通过 Ollama 等）
- 成本敏感：可混合使用便宜模型处理简单任务，昂贵模型处理复杂推理
- 愿意接受快速迭代的早期采用者

## 不适合什么场景

- 需要长期稳定 API/行为的生产环境
- 深度绑定 Anthropic 生态且使用 Claude Pro/Max 订阅的用户（Claude Code 更合适）
- 偏好 IDE 集成而非终端工作流的开发者（Cursor 更合适）
- 对安全要求极高的环境（有过高危 CVE 历史）
- 需要开箱即用零 bug 体验的场景

## 与类似项目对比

| 项目 | 定位 | 相对本项目 |
|------|------|-----------|
| Claude Code | Anthropic 官方 CLI Agent | 模型锁定 Anthropic，但 Claude 模型体验更好、更稳定；来源可用但非开源 |
| Codex CLI | OpenAI 官方 CLI Agent | 模型锁定 OpenAI，功能更精简；100% 开源 |
| Cursor | AI-first IDE | IDE 集成而非终端 Agent，学习曲线更低，但灵活性不如终端工具 |
| Aider | 开源 CLI 编程助手 | 同样模型无关，但功能面窄（专注代码编辑），插件系统不如 OpenCode 完善 |
| pi (earendil-works) | 实验性 Rust 编程 Agent | 更偏向实验/学术，社区规模远小于 OpenCode |

相较于对比表所列项目，OpenCode 在**可扩展性**（插件 + MCP + 自定义工具）和**模型无关性**（75+ 提供商）两个维度上覆盖面最广。

---

## 它能做什么

- **多模型编码辅助**：支持 75+ LLM 提供商，包括 Anthropic、OpenAI、Google Gemini、Groq、Azure OpenAI、AWS Bedrock、Cerebras、Cloudflare AI Gateway 等，以及通过 Ollama/LM Studio 的本地模型 [Docs]
- **双 Agent 模式**：build（可读写执行）和 plan（只读分析），Tab 键切换 [GH]
- **子 Agent**：`@general` 调用子 Agent 处理复杂搜索和多步骤任务 [GH]
- **项目初始化**：`/init` 分析项目结构，生成 `AGENTS.md` 项目上下文文件 [Docs]
- **文件编辑**：通过自然语言指令添加功能、修改代码、重构 [Docs]
- **撤销/重做**：`/undo` `/redo` 支持多步回退 [Docs]
- **会话分享**：`/share` 生成可分享链接 [Docs]
- **自定义命令**：创建项目级或全局自定义命令 [Docs]
- **LSP 集成**：内置 LSP 支持，AI 可访问语言服务器的诊断信息 [GH]
- **桌面应用**（Beta）：macOS/Windows/Linux 桌面客户端 [GH]
- **Web 界面**：通过 client/server 架构提供 Web 访问 [GH]
- **Docker 运行**：`docker run -it --rm ghcr.io/anomalyco/opencode` [Docs]

## 运行环境与资源占用

| 场景 | CPU | 内存 | 存储 | 说明 |
|------|-----|------|------|------|
| 最小（CLI 估算） | 低 | ~200 MB | ~500 MB | 基于 Bun/TUI 架构估算，非本次实测 |
| 推荐（估算） | 低 | ~500 MB | ~1 GB | desktop/Web 会增加占用，非本次实测 |

- **运行时**：Bun（JavaScript/TypeScript 运行时）
- **操作系统**：macOS、Linux、Windows（推荐 WSL，原生支持 Chocolatey/Scoop/npm）
- **Docker**：✅ 官方 GHCR package `ghcr.io/anomalyco/opencode`；v1.17.18 有 amd64/arm64 manifests [GHCR]
- **GPU**：不需要（本地模型推理时按所选模型需求）
- **外部依赖**：现代终端模拟器（WezTerm/Alacritty/Ghostty/Kitty 之一）、LLM API key

资源占用合理，TUI 模式明显比 Electron 类工具轻量。以上内存和存储数据为基于 Bun 运行时典型开销的估算，非压力测试实测值。桌面端处于 beta，有内存泄漏和崩溃报告。

## 上手体验

评分 5/5。

安装体验极简：`curl -fsSL https://opencode.ai/install | bash` 一条命令完成。随后 `/connect` 引导式配置 API key，`/init` 自动分析项目结构。对熟悉 CLI/API key 的用户，预计可在约 30 分钟内完成首次有效交互；这是体验估算，不是实测 SLA。

支持 npm、Bun、pnpm、Yarn、Homebrew、Pacman、AUR、Scoop、Chocolatey 等多种安装方式，覆盖主流平台和包管理器 [Docs]。内置的 `/models` 命令列出可用模型，模型切换自然（`/model <name>`）[Docs]。

TUI 交互设计成熟：Tab 切换 Agent 模式、`@` 模糊文件搜索、拖放图片输入、快捷键体系清晰。文档中有完整的使用流程引导（提问 → 规划 → 构建）[Docs]。

唯一摩擦点：首次配置非 Anthropic 提供商时，需手动填写 API key 和 base URL，步骤比 `/connect` 引导稍多，但对比同类的配置复杂度仍在可接受范围。

## 代码质量

评分 3/5。

采用 Turborepo monorepo 架构，CI 有 publish workflow，代码组织合理 [GH]。TypeScript 全栈，Bun 运行时，Nix flake 提供可复现构建环境。

但以下信号拉低评分：

- **3,621 open issues + 1,081 open PRs**：绝对队列仍很大，表明 bug/feature/review 输入持续高于稳定项目水平 [GH:API-2026-07-12]
- **历史社区反馈**：#18612 曾集中反馈 existing-function bugs；该 issue 已于 2026-03-22 关闭，故只作为历史质量信号 [GH:issues]
- **历史桌面崩溃报告**：#23443 报告 Bun panic 与异常 RSS；已于 2026-05-18 关闭，不应写成当前未修复问题 [GH:issues]
- **无可见测试覆盖率报告**：尽管有 CI，未找到公开的测试覆盖率指标，也未在 README 中强调测试策略

架构设计的清晰度和迭代速度值得肯定，但质量债务积累严重。约 15 个月达到 18 万+ stars，同时维持四位数 PR 队列，说明增长速度仍在挤压稳定性与 review 吞吐 [GH:API-2026-07-12]。

## 可扩展性

评分 5/5。

OpenCode 提供了对比表中编码 Agent 中非常丰富的扩展面：

- **插件系统**：JS/TS 模块，支持 25+ 事件钩子（`tool.execute.before/after`、`session.created/compacted/deleted`、`file.edited`、`lsp.client.diagnostics`、`message.updated`、`shell.env` 等），覆盖工具执行、会话生命周期、文件变更、TUI 交互等完整事件流 [Docs: Plugins]
- **插件加载路径**：本地（`.opencode/plugins/`、`~/.config/opencode/plugins/`）或 npm 包（`opencode.json` 中声明），自动通过 Bun 安装 [Docs]
- **TypeScript 支持**：`@opencode-ai/plugin` 提供完整类型定义 [Docs]
- **插件依赖管理**：支持本地 `package.json` 声明外部依赖，启动时自动 `bun install` [Docs]
- **MCP 服务器**：原生支持，可连接外部工具和数据源 [Docs]
- **自定义命令**：定义项目级或全局命令 [Docs]
- **自定义工具**：通过插件或配置注册新工具 [Docs]
- **Skill 系统**：加载 `SKILL.md` 文件注入上下文 [Docs]
- **主题系统**：自定义 TUI 外观 [Docs]
- **快捷键配置**：完整可配置的键位绑定 [Docs]
- **代码格式化器**：自定义格式化行为 [Docs]

社区已涌现出丰富的第三方插件（Helicone、WakaTime 等），npm 上有专门针对 OpenCode 插件开发的 Skill 指导 [Web]。

## 文档质量

评分 4/5。

官方文档站点 opencode.ai/docs 结构清晰，覆盖入门、配置、提供商、工具、插件、主题等主要模块 [Docs]。README 提供 18+ 种语言版本 [GH]。安装指南覆盖所有主流包管理器。使用流程有完整示例（从连接到初始化的端到端引导）。

缺失或不足：当前文档更偏使用与扩展说明，公开的系统架构决策、长期兼容策略和覆盖大 backlog 的体系化 troubleshooting 仍有限。高频 release 也增加文档与行为漂移风险。

文档的完整性和多语言支持在早期项目中属于上乘；评分维持 4/5，但不再沿用未在本次复核的 404/占位页断言。

## 社区与成熟度

| 维度 | 评分 | 说明 |
|------|------|------|
| 社区活跃度 | 4/5 | 184,799 stars、23,057 forks，Discord/Issue/PR/release 活跃；但 3,621 issues 与 1,081 PRs 表明维护吞吐仍未匹配社区规模 [GH:API-2026-07-12]。 |
| 成熟度 | 2/5 | 约 15 个月历史，v1.17.x 仍高频发布；桌面端 BETA，且有 critical/high 历史 advisories [GHSA-critical] [GHSA-high]。 |

社区数据极其亮眼，但 stars 是可见度而非质量证明。更关键的维护信号是四位数 PR 队列与数千 issues；这支持 community=4，却不支持 maturity 上调 [GH:API-2026-07-12]。

成熟度仍是弱项。版本进入 1.x 不代表攻击面、桌面端或兼容边界已经稳定；两项已修复严重 advisory 与持续高频 patch 说明安全/质量仍在追赶功能增长。

## 安全与风险

评分 2/5。

**已发布 advisories**：
- **GHSA-c83v-7274-4vgp / CVE-2026-22813（critical，CVSS 4.0 9.4）**：恶意网站可借 server URL override 与未充分隔离的 markdown/Web UI 获得 localhost origin 脚本执行，再调用 `/pty/` API 执行本地命令。影响 `<1.1.10`，patched `1.1.10` [GHSA-critical]。
- **GHSA-vxw4-wv6m-9hhh / CVE-2026-22812（high）**：未认证 HTTP server 暴露任意命令执行。影响 `opencode-ai <1.0.216`，patched `1.0.216` [GHSA-high]。

**缓解因素**：两项 advisory 都给出了 patched versions，当前 v1.17.18 已高于修复线；项目公开 advisory 与 SECURITY 流程，MIT 源码可审计 [GH:v1.17.18]。

但不能把“已修复”改写为“历史无关”：两项漏洞都把 Web/HTTP 面连接到本地高权限工具，且其中一项为 critical。评分下调到 2/5，反映 broad attack surface 与安全设计曾出现基础性缺口；这不是声称当前最新版仍受上述漏洞影响。

## 学习价值

- **插件架构设计**：25+ 事件钩子的插件系统是事件驱动架构在 Agent 工具中的优秀案例
- **TUI 工程实践**：使用现代终端能力（图片拖放、Tab 切换、快捷键系统）构建复杂交互界面
- **多模型编排**：如何在一个 Agent 框架中抽象 75+ 不同提供商的 API 差异
- **Monorepo 工程化**：Turborepo + Bun + Nix 的现代 TypeScript monorepo 实践
- **Agent 设计模式**：build/plan 双 Agent + subagent 的职责分离设计值得借鉴
- **客户端/服务器分离**：TUI 只是客户端之一——这种架构思维对设计可扩展 Agent 系统有启发
