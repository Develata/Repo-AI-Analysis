---
title: "Career-Ops"
created: 2026-06-07
updated: 2026-06-07
type: repository-analysis
repo_url: "https://github.com/santifer/career-ops"
category: "ai-programs/agent-assistants"
tags: [career, job-search, claude-code, agent-skills, automation, resume]
previous_repo: ""
successor: ""
primary_language: "JavaScript / Go"
license: "MIT"
stars: 49236
forks: 10192
last_checked: 2026-06-07
last_verified: 2026-06-07
evidence: "GitHub REST/GraphQL metadata + README snapshot + GitHub tree/local-style API scan; not installed or smoke-tested"
archived_reason: ""
docker_support: false
gpu_required: false
estimated_cpu: "Node/Go/Playwright + agent CLI；批量评估成本主要来自 LLM/API token 和浏览器自动化"
estimated_memory: "普通开发机可运行；批量 Playwright/agent worker 会增加占用"
estimated_storage: "简历、PDF、tracker、浏览器缓存和日志随使用增长"
status: active
sharing_candidate: true
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
  - "[GH] https://github.com/santifer/career-ops — GitHub REST/GraphQL snapshot 2026-06-07: created_at=2026-04-04T18:21:18Z, pushed_at=2026-06-03T06:17:55Z, default_branch=main, commit=4c415a9128c2ecaf2150e6e484324bc53a524dc6, stars=49236, forks=10192, open issues=91, open PRs=59, commits=221, license=MIT, primary_language=JavaScript, diskUsageKB=29520"
  - "[GH:readme] Local README snapshot /opt/data/tmp/repo_wiki_trending_20260607_remaining/santifer-career-ops/README.md checked 2026-06-07; total_lines=339; analysis uses README-described capabilities only and did not run the project"
  - "[GH:local-scan] GitHub tree/API scan checked 2026-06-07: files=195, languages=JavaScript=235460, Go=108267, Shell=18017, HTML=8484, TeX=3847, Nix=1168, workflow_count=8, workflows_sample=.github/workflows/codeql.yml, .github/workflows/dependency-review.yml, .github/workflows/labeler.yml, .github/workflows/release.yml, .github/workflows/sbom.yml, .github/workflows/stale.yml, .github/workflows/test.yml, .github/workflows/welcome.yml, test-ish files=3, docs-ish files=42, community_files={'code_of_conduct': 'https://api.github.com/repos/santifer/career-ops/community/code_of_conduct', 'code_of_conduct_file': 'https://api.github.com/repos/santifer/career-ops/contents/CODE_OF_CONDUCT.md', 'contributing': 'https://api.github.com/repos/santifer/career-ops/contents/CONTRIBUTING.md', 'issue_template': None, 'pull_request_template': 'https://api.github.com/repos/santifer/career-ops/contents/.github/PULL_REQUEST_TEMPLATE.md', 'license': 'https://api.github.com/licenses/mit', 'readme': 'https://api.github.com/repos/santifer/career-ops/contents/README.md'}"
  - "[GH:release] GitHub releases endpoint checked 2026-06-07: sampled latest tags=career-ops-v1.8.0, career-ops-v1.7.1, career-ops-v1.7.0, v1.6.0, v1.5.0; sample_count=8"
  - "[GH:security-advisories] GitHub security-advisories endpoint checked 2026-06-07: returned 0; absence only means no advisory returned by this endpoint in this check, not proof of safety"
---

# Career-Ops

> Career-Ops 把 Claude Code/OpenCode/Gemini CLI 变成 job-search command center：职位评估、定制 CV、portal scan、batch processing 和 dashboard。
>
> **状态**: `active` · **总分**: 3.3/5 · **推荐度**: 3/5
> **验证边界**: 本轮只做 GitHub metadata、README 与 tree/API scan；未安装、未构建、未运行、未复现实测 benchmark。

## 一句话总结

Career-Ops 把 Claude Code/OpenCode/Gemini CLI 变成 job-search command center：职位评估、定制 CV、portal scan、batch processing 和 dashboard。 [GH:readme]

## 总体评价

README 有强烈个人 case-study 色彩，功能定位清晰且 human-in-the-loop 写得明白；但项目极新，推荐用于个人实验/定制，不宜当作稳定招聘自动化产品。 截至 2026-06-07 的 GitHub 快照显示：stars=49236、forks=10192、open issues=91、open PRs=59、最近采样 release=career-ops-v1.8.0, career-ops-v1.7.1, career-ops-v1.7.0 [GH] [GH:release]。

评分采取保守口径：README/docs claim 只证明项目设计目标和公开描述，本轮没有实测运行效果；local scan 只证明文件结构、语言、workflow/test/docs 线索，不证明业务正确性、安全边界或性能数字 [GH:readme] [GH:local-scan]。

## 推荐度：3/5

**角色定位**：适合对 `ai-programs/agent-assistants` 方向已有明确需求、愿意按 README 与源码边界自行验证的人。

推荐理由：
- 能力面与主题匹配：README 声称 A-F scoring、ATS PDF、portal scanner、batch processing、TUI 和 integrity checks；local scan 显示 8 workflows 但 tests_count 仅 3，本轮未实际跑求职 pipeline。 [GH:readme]。
- 工程可审计性：仓库结构、语言分布、workflow/test/docs 数量已记录到 source 层，便于后续深挖 [GH:local-scan]。
- 风险前置：本条不把 star 数、官方品牌或 README benchmark 当作独立生产采用证据 [GH]。

**结论**：推荐度 3/5。可收录、可跟踪；是否采用取决于你的场景是否落在它的强项内，以及能否接受未实测/权限/运维边界。

## 优势

1. **定位清晰**：Career-Ops 把 Claude Code/OpenCode/Gemini CLI 变成 job-search command center：职位评估、定制 CV、portal scan、batch processing 和 dashboard。 [GH:readme]
2. **工程信号可见**：本轮 tree/API scan 记录 files=195、workflow_count=8、test-ish files=3、docs-ish files=42 [GH:local-scan]。
3. **社区/关注度信号强**：截至 2026-06-07 快照 stars=49236、forks=10192；这只说明可见度，不直接证明质量或生产采用 [GH]。

## 劣势

1. **验证边界**：本轮没有安装、构建、运行、benchmark 或端到端 smoke test；README 能力均按“文档声称/仓库可见设计面”处理 [GH:readme]。
2. **维护/稳定性需看上下文**：open issues=91、open PRs=59 是点时快照；大项目/语言核心仓库不能简单等同 bug 密度 [GH]。
3. **安全结论保守**：security-advisories endpoint 没返回的项目也不能视作安全；高权限、模型、浏览器、账号或文件处理场景仍需独立 threat model [GH:security-advisories]。

---

## 适合什么场景

- 个人求职 pipeline、职位筛选、简历定制和面试故事库
- 学习“agent + domain workflow files”如何落地到具体生活任务
- 愿意把个人背景持续喂给 agent 的用户

## 不适合什么场景

- 自动海投或绕过人工审核的求职流程
- 不愿交给 agent 处理 CV/职业隐私的用户
- 企业招聘/HR 生产系统

## 与类似项目对比

| 项目 | 定位 | 相对本项目 |
|------|------|-----------|
| personal-ai-infrastructure | 个人 AI workflow/assistant stack | Career-Ops 更垂直于求职，PAI 更泛化 |
| superpowers | agentic skills methodology | Career-Ops 是领域 workflow 应用；Superpowers 是软件工程方法论框架 |
| open-notebook | 研究/资料 assistant | 二者都是 end-user AI assistant，任务域不同 |

上述项目按 `ai-programs/agent-assistants` 或相邻生态做定位级对比，未在本条中按同一 10 维度框架重审；表格不构成优劣 benchmark。

## 个人主页 sharing 候选

**是**。

理由：题材清晰，能形成分享线索；但若涉及高权限 agent、账号/cookie、模型生成或安全扫描，应把风险边界写在正文开头。

---

## 它能做什么

README 声称 A-F scoring、ATS PDF、portal scanner、batch processing、TUI 和 integrity checks；local scan 显示 8 workflows 但 tests_count 仅 3，本轮未实际跑求职 pipeline。 [GH:readme]

可见的仓库层面能力线索包括：primary_language=JavaScript、topics=ai-agent, anthropic, automation, career, claude, claude-code, cli, golang, interview-prep, job-search, open-source, resume, careerops、files=195、docs-ish files=42、test-ish files=3 [GH] [GH:local-scan]。

## 运行环境与资源占用

| 场景 | CPU | 内存 | 存储 | 说明 |
|------|-----|------|------|------|
| 最小 | Node/Go/Playwright + agent CLI；批量评估成本主要来自 LLM/API token 和浏览器自动化 | 普通开发机可运行；批量 Playwright/agent worker 会增加占用 | 简历、PDF、tracker、浏览器缓存和日志随使用增长 | 基于 README/依赖栈和仓库规模的启发式估计，非实测 |
| 推荐 | 按生产输入规模预留余量 | 按模型/浏览器/数据库/worker 数调整 | 数据、缓存、模型权重或构建产物另计 | 本轮未跑 benchmark |

- **运行时**：以 README/项目类型为准；本轮未实际启动。
- **操作系统**：未逐平台验证；以官方 README/文档声明为边界。
- **Docker**：frontmatter `docker_support=false` 只表示 README/local scan 有足够线索支持或不支持主路径，未 build image。
- **GPU**：frontmatter `gpu_required=false`；模型类项目即使 CPU 可跑，也可能需要 GPU 才有实用价值。
- **外部依赖**：依赖、账号、模型权重、数据库、浏览器、代理或云服务需求需按实际安装路径复核。

## 上手体验

评分 3/5。

依据：README 是否给出 quick start、安装/配置路径是否清晰，以及本轮是否看到 release、docs 和 workflow 线索 [GH:readme] [GH:release] [GH:local-scan]。未实装，因此不把“README 写得容易”当作真实零摩擦体验。

## 代码质量

评分 3/5。

依据：语言/文件结构、workflow_count=8、test-ish files=3、docs-ish files=42、release 信号和项目年龄 [GH:local-scan] [GH:release]。这个分数是静态仓库质量判断，不等于功能正确性或覆盖率实测。

## 可扩展性

评分 4/5。

依据：README 暴露的 API/plugin/module/model/config/workflow 扩展面，以及仓库结构是否支持二次开发 [GH:readme] [GH:local-scan]。没有运行扩展示例，因此只评价设计面和可见结构。

## 文档质量

评分 4/5。

README/docs-ish files=42；README 对核心定位、安装或功能说明的清晰度支撑该评分 [GH:readme] [GH:local-scan]。若项目另有外部文档，本轮未系统抓取完整站点，后续深审可补。

## 社区与成熟度

| 维度 | 评分 | 说明 |
|------|------|------|
| 社区活跃度 | 4/5 | stars=49236、forks=10192、open issues=91、open PRs=59 是点时可见度和维护负载信号，不单独证明质量 [GH] |
| 成熟度 | 2/5 | created_at=2026-04-04T18:21:18Z，sampled releases=career-ops-v1.8.0, career-ops-v1.7.1, career-ops-v1.7.0, v1.6.0, v1.5.0；成熟度按项目年龄、release/CI/test/docs 和稳定性声明综合判断 [GH] [GH:release] |

## 安全与风险

评分 3/5。

GitHub security-advisories endpoint 本轮返回结果已记录，但“无 advisory 返回”不是安全证明 [GH:security-advisories]。实际采用时至少检查：权限范围、账号/cookie/token 暴露面、依赖供应链、模型/文档数据上传路径、sandbox/隔离边界、license 与商业使用限制。

## 学习价值

学习价值主要在三个层面：一是理解 `ai-programs/agent-assistants` 这一类项目当前如何组织能力；二是用 README claim 与 local scan 对照，训练“文档声称 vs 可审计事实”的边界感；三是把它与同类项目做定位级 comparison，而不是被 star 数或品牌牵引 [GH] [GH:readme] [GH:local-scan]。
