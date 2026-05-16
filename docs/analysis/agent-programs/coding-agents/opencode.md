---
title: "OpenCode"
created: 2026-05-15
updated: 2026-05-15
type: repository-analysis
repo_url: "https://github.com/anomalyco/opencode"
category: "agent-programs/coding-agents"
tags: ["coding-agent", "cli", "tui", "ai-assisted-development", "typescript", "mcp", "terminal"]
previous_repo: ""
successor: ""
primary_language: "TypeScript"
license: "MIT"
stars: 160844
forks: 18872
last_checked: 2026-05-15
last_verified: 2026-05-15
evidence: "docs review + GitHub API + community reports"
archived_reason: ""
docker_support: true
gpu_required: false
estimated_cpu: "低（TUI 运行）"
estimated_memory: "~200MB（Bun 运行时）"
estimated_storage: "~500MB（含 npm 依赖缓存）"
status: active
sharing_candidate: true
ratings:
  capability: 4
  usability: 5
  performance: 4
  code_quality: 3
  documentation: 4
  community: 4
  maturity: 2
  extensibility: 5
  security: 3
  recommendation: 4
overall_score: 3.8
sources:
  - "[GH] https://github.com/anomalyco/opencode"
  - "[Docs] https://opencode.ai/docs"
  - "[CVE] https://nvd.nist.gov/vuln/detail/CVE-2026-22812"
  - "[Infralovers] https://www.infralovers.com/blog/2026-01-29-claude-code-vs-opencode/"
---

# OpenCode

> 开源、模型无关的终端 AI 编程 Agent——TUI 优先，插件驱动，支持 75+ LLM 提供商
>
> **状态**: `active` · **总分**: 3.8/5 · **推荐度**: 4/5

## 一句话总结

终端优先的开源 AI 编程 Agent，以模型无关性和插件生态为核心竞争力，是目前 Claude Code 之外最活跃的 CLI 编程 Agent 项目。

## 总体评价

OpenCode 在一个极短的时间窗口（2025 年 4 月至今，约 13 个月）内积累了 16 万+ GitHub stars，成为开源 AI 编程 Agent 领域最受关注的项目。其核心价值主张明确：**不被单一模型提供商锁定**——支持 Anthropic、OpenAI、Google、Groq、Azure、Bedrock 等 75+ 提供商及本地模型，用户可按任务切换模型。

该项目的真正差异化在于**可扩展性**：插件系统（JS/TS，25+ 事件钩子）、MCP 服务器支持、自定义命令/工具/Skill、主题与快捷键定制，构成了对比表中编码 Agent 中目前非常丰富的扩展面。同时内置 build（全权限）和 plan（只读）两种 Agent，Tab 键切换，配合 `/undo` `/redo` `/share` 等命令，工作流设计成熟。

但**极速增长是双刃剑**：5000+ 开放 Issue、桌面端持续崩溃报告、社区反馈"bug 太多"，加上曾出现 CVSS 8.8 的未认证 RCE 漏洞（CVE-2026-22812），表明质量维护速度远落后于功能增长。适合能接受快速迭代和间歇性 bug 的开发者，不适合追求稳定性的生产环境。

## 推荐度：4/5

**定位**：面向希望自由选择/切换 LLM 提供商、且偏好终端工作流的开发者。如果你已经通过 API 使用多个模型提供商，OpenCode 是目前**模型无关 CLI 编程 Agent 中很有竞争力的选择**。

加分项：100% 开源（MIT），插件生态完善，MCP 支持，TUI 体验出色，安装极简。

减分项：仅约 13 个月历史，破坏性变更频繁；5000+ 开放 Issue 反映质量债务；桌面端尚在 beta 且有明显崩溃问题；有过高危 CVE。

**结论**：值得关注的强力工具，但用户需要了解其"快速迭代但不够稳定"的现状。对个人开发者和小团队是 4/5 推荐；对需要长期稳定性的生产环境降至 3/5。

## 优势

1. **模型无关性**：支持 75+ 提供商 + 本地模型（Ollama、LM Studio 等），可在一个会话中切换模型——用推理模型做规划，用快速模型做执行
2. **极简安装与上手**：`curl | bash` 一键安装，`/connect` 向导配置，`/init` 分析项目，<30 分钟即可获得价值
3. **插件系统完善**：JS/TS 插件支持 25+ 事件钩子（工具执行前后、会话状态、文件变更、LSP 诊断等），本地或 npm 加载，有 TypeScript 类型定义
4. **内置多 Agent 模式**：build（全权限执行）和 plan（只读分析）两种 Agent，Tab 键即时切换；支持 `@general` 子 Agent 处理复杂搜索
5. **TUI 体验出色**：终端优先设计，支持图片拖放输入、主题定制、快捷键配置、会话分享（`/share` 生成链接）
6. **客户端/服务器架构**：天然支持远程驱动，Web UI 可用，VS Code 扩展 SDK 在开发中

## 劣势

1. **稳定性不足**：5000+ 开放 Issue，社区反馈"bug 太多"（#18612），桌面端 Bun panic 频繁崩溃（#23443），质量债务积累速度超过清理速度
2. **成熟度低**：仅约 13 个月历史，800+ release 意味着几乎每天发布，破坏性变更难以避免
3. **存在安全历史问题**：CVE-2026-22812（CVSS 8.8）——未认证 HTTP 服务器允许任意 shell 命令执行，虽已在 1.0.216 修复，但暴露出安全设计未前置的问题
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

## 个人主页 sharing 候选

**是**。理由：作为当前最活跃的开源 AI 编程 Agent，技术方案有独特价值（TUI 优先、client/server 架构、插件系统），符合 sharing 区"值得分享给技术社区"的标准。适合写一篇对比评测或上手体验分享。

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
| 最小（CLI 模式） | 低 | ~200MB | ~500MB | TUI 运行，Bun 运行时 + npm 依赖缓存 |
| 推荐 | 低 | ~500MB | ~1GB | 含桌面端或 Web 界面时占用增加 |

- **运行时**：Bun（JavaScript/TypeScript 运行时）
- **操作系统**：macOS、Linux、Windows（推荐 WSL，原生支持 Chocolatey/Scoop/npm）
- **Docker**：✅ `ghcr.io/anomalyco/opencode`
- **GPU**：不需要（本地模型推理时按所选模型需求）
- **外部依赖**：现代终端模拟器（WezTerm/Alacritty/Ghostty/Kitty 之一）、LLM API key

资源占用合理，TUI 模式明显比 Electron 类工具轻量。以上内存和存储数据为基于 Bun 运行时典型开销的估算，非压力测试实测值。桌面端处于 beta，有内存泄漏和崩溃报告。

## 上手体验

评分 5/5。

安装体验极简：`curl -fsSL https://opencode.ai/install | bash` 一条命令完成。随后 `/connect` 引导式配置 API key，`/init` 自动分析项目结构。从零到第一次有效交互 <30 分钟。

支持 npm、Bun、pnpm、Yarn、Homebrew、Pacman、AUR、Scoop、Chocolatey 等多种安装方式，覆盖主流平台和包管理器 [Docs]。内置的 `/models` 命令列出可用模型，模型切换自然（`/model <name>`）[Docs]。

TUI 交互设计成熟：Tab 切换 Agent 模式、`@` 模糊文件搜索、拖放图片输入、快捷键体系清晰。文档中有完整的使用流程引导（提问 → 规划 → 构建）[Docs]。

唯一摩擦点：首次配置非 Anthropic 提供商时，需手动填写 API key 和 base URL，步骤比 `/connect` 引导稍多，但对比同类的配置复杂度仍在可接受范围。

## 代码质量

评分 3/5。

采用 Turborepo monorepo 架构，CI 有 publish workflow，代码组织合理 [GH]。TypeScript 全栈，Bun 运行时，Nix flake 提供可复现构建环境。

但以下信号拉低评分：

- **5000+ 开放 Issue**：在 16 万 star 的项目中这远超正常比例（通常健康项目开放 Issue 在 1–5% 的 star 数），表明 bug 报告速度远大于修复速度
- **社区明确反馈**：#18612 "There are too many bugs"，指出基本功能存在持续性问题，开发团队响应不足 [GH]
- **桌面端崩溃**：#23443 桌面 sidecar 因 Bun panic 反复崩溃，每天产生 20+ 崩溃日志 [GH]
- **无可见测试覆盖率报告**：尽管有 CI，未找到公开的测试覆盖率指标，也未在 README 中强调测试策略

架构设计的清晰度和迭代速度值得肯定，但质量债务积累严重。极速增长（13 个月 16 万 star）可能让团队选择"先 ship 再修"，导致稳定性让步于功能。

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

缺失或不足：
- 安全文档页面返回 404（`/docs/security`），对于有过高危 CVE 的项目这是显著缺口
- 部分文档章节为占位/概要状态（如 Providers 目录中某些提供商的详细配置被截断）
- 缺少架构设计文档——虽然有 client/server 的承诺，但无公开的架构图或设计决策记录
- 错误排查指南有限——面对社区反馈的"太多 bug"，缺乏体系化的故障排除文档

文档的完整性和多语言支持在早期项目中属于上乘，但安全文档的缺失和高频更新带来的文档滞后是明显短板。

## 社区与成熟度

| 维度 | 评分 | 说明 |
|------|------|------|
| 社区活跃度 | 4/5 | 16 万 star、1.9 万 fork、Discord 社区活跃、Issue 和 PR 更新频繁、800+ release；但 5000+ 开放 Issue 与 #18612 反馈表明维护者响应速度未能匹配社区规模 |
| 成熟度 | 2/5 | 仅约 13 个月历史；800+ release（约 2.2/天）意味着几乎无稳定窗口；项目无公开的 API 稳定性承诺或语义化版本策略；有过高危 CVE |

社区数据极其亮眼：在 coding-agent 类别中 star 数远超 Claude Code（约 7 万），在所有 GitHub 仓库中排名前列。Discord 社区、X.com 账号活跃，第三方评测和对比文章频出 [Infralovers]。以上 Issue 和 PR 活跃度数据为审查时的观察性判断，基于 Issues 页面中高频率的新增 Issue 和时间戳密度。

但成熟度是该项目最弱维度。800+ release 对应 ~2.2 release/天——这不是稳定迭代，是持续高频变更。CVE-2026-22812（CVSS 8.8）的出现在一定程度上是这种极速推进的副作用：安全审查未跟上发布节奏。项目在功能增长和稳定性维护之间存在明显失衡。

## 安全与风险

评分 3/5。

**已知问题**：
- **CVE-2026-22812**（CVSS 8.8 HIGH）：OpenCode 自动启动未认证 HTTP 服务器，允许任意本地进程（或通过宽松 CORS 的任何网站）以用户权限执行任意 shell 命令。影响版本 < 1.0.216，已于 2026-01 修复 [CVE]。涉及的 CWE 包括 CWE-306（关键功能缺失认证）、CWE-749（暴露危险方法）、CWE-942（宽松跨域策略）
- **Issue #6355**：报告"RCE and file read vulnerability"，指向服务端缺乏 CORS 验证 [GH]
- **安全文档缺失**：`opencode.ai/docs/security` 返回 404，安全策略仅以 SECURITY.md 形式存在于仓库根目录 [GH]

**缓解因素**：
- CVE 在披露后迅速修复（1.0.216 发布）
- GitHub Security Advisory 页面维护完整，有明确的漏洞报告流程 [GH]
- MIT 许可证意味着社区可以审计代码

总体而言，项目安全设计尚未成熟——本地 HTTP 服务器未加认证是基础性疏忽，暴露出当时安全设计不足。3/5 反映了漏洞已修复但安全实践仍需加强的现状。

## 学习价值

- **插件架构设计**：25+ 事件钩子的插件系统是事件驱动架构在 Agent 工具中的优秀案例
- **TUI 工程实践**：使用现代终端能力（图片拖放、Tab 切换、快捷键系统）构建复杂交互界面
- **多模型编排**：如何在一个 Agent 框架中抽象 75+ 不同提供商的 API 差异
- **Monorepo 工程化**：Turborepo + Bun + Nix 的现代 TypeScript monorepo 实践
- **Agent 设计模式**：build/plan 双 Agent + subagent 的职责分离设计值得借鉴
- **客户端/服务器分离**：TUI 只是客户端之一——这种架构思维对设计可扩展 Agent 系统有启发
