---


title: Scientific Agent Skills
created: 2025-10-19
updated: 2026-07-12
type: repository-analysis
repo_url: https://github.com/K-Dense-AI/scientific-agent-skills
category: "ai-programs/ai-harness/skills"
tags:
  - agent-skills
  - scientific-computing
  - bioinformatics
  - cheminformatics
  - python
previous_repo: ""
successor: ""
primary_language: Python
license: MIT
stars: 30692
forks: 3091
last_checked: 2026-07-12
last_verified: 2026-07-12
evidence: GitHub API + README + release/docs review
archived_reason: ""
docker_support: false
gpu_required: false
estimated_cpu: N/A
estimated_memory: N/A
estimated_storage: ~35 MB (skills files) + 按需安装的 Python 包
status: active
ratings:
  capability: 5
  usability: 4
  performance: 5
  code_quality: 4
  documentation: 4
  community: 4
  maturity: 3
  extensibility: 4
  security: 3
  recommendation: 3
overall_score: 3.9
sources:
  - "[GH] https://github.com/K-Dense-AI/scientific-agent-skills"
  - "[GH:API] https://api.github.com/repos/K-Dense-AI/scientific-agent-skills"
  - "[awesome-claude-skills] https://github.com/topics/claude-skills — comparison positioning source for the broader Claude skills topic ecosystem."
  - "[Aminer] https://www.aminer.cn — comparison positioning source for academic search / literature discovery tools."
  - "[GH:releases] https://github.com/K-Dense-AI/scientific-agent-skills/releases"
  - "[GH:PR] https://github.com/K-Dense-AI/scientific-agent-skills/pulls"
  - "[Docs:examples] https://github.com/K-Dense-AI/scientific-agent-skills/blob/main/docs/examples.md"
  - "[Docs:security] https://github.com/K-Dense-AI/scientific-agent-skills/blob/main/SECURITY.md"
  - "[GH:security] https://github.com/K-Dense-AI/scientific-agent-skills/security"
  - "[Paper Digest] Paper Digest academic search / paper-digest reference site used only as comparator in positioning table: https://www.paperdigest.org"
  - "[GH:API-2026-07-12] GitHub API snapshot: active, default branch main, Python, MIT, 30,692 stars, 3,091 forks, 10 open issues, 29 open PRs, head 4d97e293 (2026-07-06), latest release v2.53.0 (2026-06-23), repository advisories endpoint returned []."
  - "[GH:v2.53.0] Official release: deterministic/provenance-rich database lookup changes, Ginkgo Cloud Lab update, transformers metadata/dependency update; https://github.com/K-Dense-AI/scientific-agent-skills/releases/tag/v2.53.0"

---

# Scientific Agent Skills

> 148 个即用型科学 Agent Skills，覆盖生物信息学、化学信息学、临床研究、材料科学、地理空间科学、机器学习等领域，基于开放的 [Agent Skills](https://agentskills.io/) 标准。由 [K-Dense Inc.](https://k-dense.ai) 维护。
>
> **状态**: `active` · **总分**: 3.9/5 · **推荐度**: 3/5

## 一句话总结

面向**生物医药/化学/材料/地理空间/数据科学研究者**的 Agent Skills 集合：通过 148 个技能文档，为支持 Agent Skills 标准的 AI agent 提供科学工具、数据库与工作流的结构化操作知识。

## 总体评价

Scientific Agent Skills 是目前开源生态中覆盖面最广的科学 Agent Skills 合集之一。其核心价值不在于提供新运行时，而在于用 148 个结构化 skill 整理科学 Python 库、数据库、研究平台与工作流的操作知识；v2.53.0 又强化了数据库查询的确定性、分页、来源记录与不可信响应处理 [GH:v2.53.0]。

**适合**：使用 Cursor/Claude Code/Codex 等现代 agent 进行科学计算的研究者；需要快速搭建药物发现、基因组分析、材料筛选等管线的团队。

**不适合**：不使用 Agent Skills 生态的研究者（需先采纳支持该标准的 agent）；研究领域偏纯数学/理论物理（当前 skills 偏应用科学）。

**一句话**：若你的研究落在其覆盖的应用科学领域且使用现代 AI agent，这是值得优先了解的技能包之一；但项目仍年轻，维护集中与 skill 供应链风险决定了它更适合审查后按需采用。

## 推荐度：3/5

> 2026-06 推荐度重校准：采用证据弱，skill/code-execution 模型有指令供应链风险，维护集中；阅读价值高但采用推荐应保守。


**角色定位**：面向使用 Claude Code、Cursor、Codex 或 Gemini CLI 进行科学计算的研究者，特别是生物信息学、药物发现、化学信息学、临床研究、材料科学、单细胞组学等领域的从业者。

推荐度 3/5 的核心正面理由是**领域匹配度**：对上述应用科学领域的研究者而言，这是一套覆盖面极广、文档质量优秀的即用技能集；但对于纯数学、理论物理或随机图方向，受益有限。项目约 9 个月历史且维护仍集中于 K-Dense，中期可持续性仍需观察。

**核心痛点**：约 9 个月历史，尚未经历长期压力测试；版本迭代快但迁移信息仍弱；高度依赖 K-Dense 组织，关键人物风险显著。

**结论**：值得**了解、跟踪并尝试安装几个与你研究相关的 skill**，但不应将其视为不可替代的基础设施。将关键人物/组织集中风险纳入依赖评估。

## 优势

1. **领域覆盖极广** — 148 个 skill、100+ 数据库入口、70+ 优化的 Python 包 skill，并新增地理空间、实验室自动化与 agent infrastructure 等覆盖 [GH]
2. **文档质量高** — 每个 skill 包含完整的使用指南、代码示例、最佳实践章节和常见陷阱，远超市面上大多数「只给 prompt 模板」的 skill 项目；23 个完整工作流示例展示了多 skill 编排能力
3. **基于开放标准** — 遵循 Agent Skills 开放标准（agentskills.io），不限特定 agent 平台，Cursor、Claude Code、Codex、Gemini CLI 均可使用
4. **安装简便** — `npx skills add` 或 `gh skill add` 一键安装，agent 自动发现可用 skill
5. **安全流程** — 明确的安全免责声明 + 每周 LLM 安全扫描（Cisco AI Defense Skill Scanner）+ 用户自查指引

## 劣势

1. **项目仍年轻** — 创建于 2025 年 10 月，约 9 个月历史，尚未经历足够长的时间检验和社区压力测试
2. **维护高度集中** — 组织账号 K-Dense-AI 维护，顶级贡献者 TKassis（105 次贡献）远超其他贡献者（38-9 次），关键人物风险显著
3. **领域偏应用科学** — 对纯数学、理论物理、计算理论等方向覆盖不足；Develata 的随机图研究方向受益有限
4. **安全模型依赖用户自查** — skill 可执行任意代码、安装包、网络请求、修改文件，安全最终责任在用户侧，skill 审查机制无法完全消除供应链风险
5. **无清晰稳定性承诺** — 当前已到 v2.53.0，release note 仍以提交摘要为主，缺少版本策略和迁移指南；skill 内容与依赖可随版本快速变化 [GH:v2.53.0]
6. **生态系统依赖** — 当前仓库 tooling 要求 Python 3.13+、uv，以及支持 Agent Skills 标准的 client；各 skill 依赖可有不同 Python 范围 [GH]

## 适合什么场景

- 使用 Claude Code/Cursor/Codex 等现代 agent 进行生物信息学或化学信息学研究
- 需要快速搭建药物发现管线（ChEMBL → RDKit → DiffDock → AlphaFold → PubMed）
- 单细胞 RNA-seq 分析（Scanpy → Cellxgene → PyDESeq2 → Reactome/KEGG）
- 临床变异解读（VCF → Ensembl VEP → ClinVar → COSMIC → 临床报告）
- 材料科学计算、量子化学、分子动力学模拟
- 研究 grant 写作、科学海报/幻灯片制作、文献综述（附带的分析与写作工具）
- 需要一键接入 78+ 科学数据库（ChEMBL、PubChem、ClinVar、COSMIC 等）

## 不适合什么场景

- 纯数学/随机图/统计物理研究 — 当前 skill 覆盖不足，受益有限
- 不使用 Agent Skills 标准 agent 的研究者 — 需先采纳支持该标准的工具
- 对供应链安全要求极高的环境 — skill 执行任意代码，安全最终依赖用户审查
- 需要长期稳定 skill contract 的项目 — 项目约 9 个月历史，仍缺少清晰稳定性承诺
- 希望「all-in-one」工具而非 skill 集合的场景 — 这只是给 agent 的提示/文档，不提供独立的 GUI 或运行时

## 与类似项目对比

| 项目 | 定位 | 相对本项目 |
|------|------|-----------|
| [Claude Scientific Writer](https://github.com/K-Dense-AI/claude-scientific-writer) | K-Dense 的科学写作专用技能集 | 本项目覆盖科学分析到写作的更宽范围；对方聚焦写作定位 |
| [awesome-claude-skills](https://github.com/topics/claude-skills) 生态 | 多仓库、多维护者的 skill 发现入口 | 本项目统一收录科学 skills；topic 生态更分散，未按同一评分框架审计 |
| [Aminer](https://www.aminer.cn) / [Paper Digest](https://www.paperdigest.org) | 学术搜索引擎/文献综述 | 本项目是 agent 技能文档，不是搜索服务；可与搜索服务互补 |
| 各库官方文档 | RDKit、Scanpy 等科学库的官方文档 | 本项目提供「让 agent 可靠使用这些库」的结构化指导，与官方文档互补而非替代 |

> 与 Claude Scientific Writer 的区别：CSW 专注科学写作（论文、审稿、海报），Scientific Agent Skills 涵盖从实验到写作的全流程。两者出自同一组织，可配合使用。


## 它能做什么

**科学数据库查询**：通过统一的 `database-lookup` skill 接入 78 个公共数据库，并由专用 skill 与多数据库 Python 包扩展到 100+ 数据源入口。v2.53.0 增加了更明确的检索契约、分页、来源记录和不可信响应处理 [GH:v2.53.0]。

**Python 科学计算**：70+ 优化的 Python 包 skill，包括 RDKit（化学信息学）、Scanpy（单细胞分析）、PyTorch Lightning（深度学习）、BioPython、OpenMM（分子动力学）、PennyLane/Qiskit（量子计算）、TimesFM（时间序列预测）、scVelo（RNA 速度）等。每个 skill 包含文档和使用示例，目标是提升 agent 在对应库上的代码生成可靠性和上下文感知能力。

**分析工具与科学写作**：30+ 分析/写作工具涵盖文献综述、科学写作、同行评审、海报生成、幻灯片制作、Mermaid 图表、文档处理等。另有 10+ 研究/临床工具：假设生成、grant 写作、临床决策支持、治疗方案制定、法规合规检查、情景分析等。

**科学平台集成**：Benchling、DNAnexus、LatchBio、OMERO、Protocols.io 等科学平台的专用集成 skill。

**完整工作流**：23 个工作流示例展示多 skill 编排，详见 [docs/examples.md](https://github.com/K-Dense-AI/scientific-agent-skills/blob/main/docs/examples.md) [Docs:examples]。

## 运行环境与资源占用

| 场景 | CPU | 内存 | 存储 | 说明 |
|------|-----|------|------|------|
| 最小（仅 skill 文件） | N/A | N/A | ~35 MB | 纯 markdown 文件，零运行时 |
| 日常使用 | 2-4 cores | 按 Python 科学包 | ~35 MB + pip 包 | 按需安装依赖，非一次性全量 |

- **运行时**：Skill 文件本身为纯 markdown，运行时由 agent（Claude Code / Codex 等）驱动，Python 包按需安装
- **操作系统**：macOS、Linux、Windows WSL2 [GH]
- **Docker**：无
- **GPU**：不需要（skill 集合本身，底层科学包可能用到 GPU）
- **外部依赖**：仓库 tooling 当前要求 Python 3.13+ 与 uv；单个 skill 的依赖/兼容范围以其 `SKILL.md` 为准 [GH]

**性能评价**：Skill 文件本身是纯 markdown，零运行时开销。资源占用的主体是各 skill 引用的 Python 科学包，但这些包的安装是**按需触发**的——只有被激活的 skill 才会安装对应依赖。与「一次性安装全量依赖」的方案相比，这种设计在磁盘和内存占用上更高效。评分 5/5 反映的是 skill 集合本身的设计效率，而非底层科学包的性能特征。

## 上手体验

**安装路径**：

```bash
# 通用方式
npx skills add K-Dense-AI/scientific-agent-skills

# 或通过 GitHub CLI (v2.90.0+)
gh skill install K-Dense-AI/scientific-agent-skills

# 锁定特定版本
gh skill install K-Dense-AI/scientific-agent-skills --pin
```

安装后 agent 自动发现 skill，也可在 prompt 中显式调用。

**入门时间估算**：
- 安装到首次使用：5-10 分钟（需预装 Python 3.11+ 和 uv）
- 读懂 README 并运行第一个示例工作流：30-60 分钟
- 为特定研究问题编排自定义多 skill 管线：需领域知识 + 2-4 小时实验

**文档引导**：README 包含 4 个代表性工作流（药物发现、单细胞 RNA-seq、虚拟筛选、临床变异解读）[GH]，23 个完整示例在 docs/examples.md [Docs:examples]，`scientific-skills.md` 提供完整 skill 目录。

**学习曲线**：技能本身不陡——本质上就是让 agent 读文档后写代码。实际门槛在于：(1) 理解何时激活哪个 skill；(2) 编排多 skill 管线；(3) 领域知识（需要懂得该领域的分析流程才能有效指挥 agent）。

## 代码质量

**项目结构**：`scientific-skills/` 目录按领域组织，每个 skill 为独立子目录，包含 `SKILL.md`（主文档）及可选的 `references/` 和 `scripts/` 子目录。结构一致性好。

**SKILL.md 质量**：以 RDKit skill 为例 [GH]，包含 12 个核心能力章节、工作流示例、最佳实践、常见陷阱、参考文件链接和示例脚本。代码示例丰富且可执行。minor 问题：社区 PR 中曾出现内部链接断裂（`reference/` → `references/`），属于模板批量生成中的路径不一致 [GH:PR]。

**CI/CD**：自动化 release（github-actions 自动发布，无人工撰写 release note），社区 PR 有社区审查流程，但未见正式的 CI 测试覆盖（如 skill 示例代码的自动化测试）。

**维护模式**：高度自动化 + 社区贡献，但核心维护精力高度集中于 TKassis。贡献者多样性偏低（top 贡献者 105 次，第二仅 38 次）。

**总体**：结构良好，skill 文档质量一致；minor 链接断裂问题可修但非致命；测试覆盖不足和贡献者集中是长期隐忧。评分 4/5 反映结构质量和一致性，减去测试和贡献者分散度的扣分。

## 可扩展性

**添加自定义 skill**：遵循 Agent Skills 开放标准，用户可在同一目录下创建自定义 SKILL.md 文件，agent 自动发现。Skill 格式有明确规范，RDKit 等示例可作为模板参考 [GH]。

**Fork 开发**：仓库级 LICENSE 为 MIT，允许 fork 仓库框架与其覆盖内容；但每个 skill 另有 `SKILL.md` license metadata，复用前必须逐项核对。高频更新也会增加同步成本 [GH]。

**社区贡献**：通过 PR 贡献新的 skill 或修复，流程清晰 [GH:PR]，社区已有多个贡献者提交 skill 优化。

**局限性**：没有正式的「插件注册系统」或「skill 市场」— 添加 skill 就是提交 PR 或在本地 fork。对于组织级使用场景，缺少 skill 版本管理和依赖解析。

评分 4/5：技能添加机制清晰、MIT 许可开放、fork-friendly，但缺少组织级的 skill 管理和版本控制工具。

## 文档质量

文档分为两层：

**产品文档（skill 作为文档产品）**：
- 23 个完整工作流示例 [Docs:examples]，覆盖从药物发现到量子计算的多领域
- README 质量高：功能列表、安装说明、安全警告、代表性示例 [GH]
- 每个 SKILL.md 结构一致，包含能力说明、代码示例、最佳实践、陷阱、参考资料
- 代码示例丰富且贴近实际使用场景

**项目文档**：
- README 详尽，in-code 注释充分
- 无 CHANGELOG——release note 为自动化生成的提交列表，无人工撰写的变更摘要 [GH:releases]
- 无架构文档（说明为什么 skill 按此方式组织，设计原则等）
- 无迁移指南（版本间变更无记录）

**总体**：产品层 skill 文档较强，项目层仍缺 versioning/migration 说明。评分 4/5；该权重偏向 skill 使用体验，但不假设具体用户比例。

## 社区与成熟度

| 维度 | 评分 | 说明 |
|------|------|------|
| 社区活跃度 | 4/5 | 30,692 stars、3,091 forks；2026-07-12 有 10 个 open issues 与 29 个 open PRs，外部参与可见，但维护中心仍在 K-Dense [GH:API-2026-07-12]。 |
| 成熟度 | 3/5 | 约 9 个月历史，已到 v2.53.0 且仍高频变化；未发现仓库级已发布 GHSA，但版本策略和迁移指南仍不足，尚不宜视为稳定基础设施 [GH:API-2026-07-12]。 |

## 安全与风险

**代码执行风险**：skill 本质上是给 agent 的操作指南，agent 会根据 skill 指令执行任意 Python 代码、安装包、发起网络请求、修改文件。项目明确声明用户需自行审查 skill 内容后才使用 [GH]。每周通过 Cisco AI Defense Skill Scanner 进行 LLM 安全扫描 [GH:security]。

**供应链风险**：148 个 skill 涉及大量第三方 Python 包（RDKit、Scanpy、PyTorch 等），供应链攻击面广。按需安装可以在只启用少量 skill 时减少不必要依赖，但实际暴露取决于用户安装与执行路径，不能视为已证明的安全缓解。

**许可风险**：仓库级 LICENSE 为 MIT；但官方 README 明确说明每个 skill 在 `SKILL.md` 的 `license` metadata 中可声明不同条款，商业复用必须逐 skill 审查，不能把仓库 MIT 外推到全部 skill 内容 [GH]。

**数据隐私**：科学数据库查询通过公共 API 进行，谨慎处理敏感研究数据（如患者 VCF 文件）的用户应注意网络传输和数据驻留。

**总体**：攻击面由设计决定（skill = 指令与代码执行入口），已有持续安全扫描但不能替代人工审查。GitHub repository advisories endpoint 在本次检查返回 `[]`，仅表示此次未发现已发布仓库级 GHSA，不证明 148 个 skill 及其依赖安全 [GH:API-2026-07-12]。评分维持 3/5。

## 学习价值

**值得学习**：
- **Skill 工程化**：如何将科学 Python 库的使用模式系统化为结构化的 agent skill 文档。RDKit skill 是一个优秀的参考样本 [GH]——从能力说明到代码模式到最佳实践到常见陷阱的完整结构
- **工作流编排**：23 个示例展示了多 skill 的链式编排模式，对设计自己的 agent skill 或工具链有参考价值
- **科学 agent 设计模式**：如何平衡 skill 的「通用性」（让 agent 理解何时用）和「具体性」（提供足够细节让 agent 不出错）
- **安全模型**：明确的安全边界声明（用户最终负责）和安全扫描集成是 agent skill 安全设计的务实参考

**局限性**：项目的学习价值在于「如何写好的 agent skill」，而非「如何构建 agent infrastructure」。它是一个应用案例，而非架构参考。

**适合阅读的受众**：想为自己的研究领域编写 agent skills 的研究者；对科学 agent 管线设计感兴趣的工具开发者；想理解 agent skill 最佳实践的 AI 工程师。
