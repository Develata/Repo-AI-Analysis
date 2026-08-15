---
title: "LaTeXSnipper"
created: 2026-08-15
updated: 2026-08-15
type: repository-analysis
repo_url: "https://github.com/SakuraMathcraft/LaTeXSnipper"
category: "document-processing/editors"
tags: ["latex", "math-ocr", "desktop", "office", "mathlive", "onnx"]
previous_repo: ""
successor: ""
primary_language: "Python / C#"
license: "GPL-3.0-only (root; MathCraft docs conflict)"
stars: 845
forks: 44
last_checked: 2026-08-15
last_verified: 2026-08-15
evidence: "GitHub API/release/issues/workflow data + shallow source scan; no desktop/OCR/Office installation, model benchmark, or end-user workflow was run"
archived_reason: ""
docker_support: false
gpu_required: false
estimated_cpu: "2-4 cores（heuristic；OCR、PDF rendering 与 model warm-up workload-dependent）"
estimated_memory: "4-8 GB（heuristic；PyQt WebEngine、ONNX model 和 external-runtime choice-dependent）"
estimated_storage: "1-5 GB（heuristic；desktop runtime/dependency environment/model cache-dependent）"
status: stable
ratings:
  capability: 4
  usability: 3
  performance: 3
  code_quality: 3
  documentation: 4
  community: 3
  maturity: 3
  extensibility: 3
  security: 3
  recommendation: 3
overall_score: 3.2
sources:
  - "[GH] https://github.com/SakuraMathcraft/LaTeXSnipper"
  - "[GH:api] GitHub REST/GraphQL/contributors endpoints queried 2026-08-15: public, archived=false, default branch main, created_at=2025-10-01T06:54:46Z, pushed_at=2026-08-01T08:38:45Z, 845 stars, 44 forks, 4 listed contributors, 2 open issues, 0 open PRs, 291 merged PRs, 1 release, languages led by Python (1,988,911 bytes) and C# (690,503 bytes); API license=GPL-3.0."
  - "[GH:release] https://github.com/SakuraMathcraft/LaTeXSnipper/releases/tag/v2.6.0-LTS queried 2026-08-15: v2.6.0-LTS published 2026-08-01 and described by its author as the final version; six assets include Windows app installer, Office installer, amd64 Debian package, arm64 macOS .dmg/.app.zip, and user manual. No public checksum asset appeared in that release asset list."
  - "[GH:issues] GitHub issue API queried 2026-08-15: #343 is an open report that OfficePluginSetup-2.6.0 stalls at preparation on Microsoft 365; #342 is an open formatting/enhancement report about inline-equation alignment and styling; no open PRs in the GraphQL snapshot. https://github.com/SakuraMathcraft/LaTeXSnipper/issues/343 ; https://github.com/SakuraMathcraft/LaTeXSnipper/issues/342"
  - "[GH:community] https://api.github.com/repos/SakuraMathcraft/LaTeXSnipper/community/profile queried 2026-08-15: health_percentage=42; README and GPL license detected, but no CONTRIBUTING, CODE_OF_CONDUCT, issue template, or PR template detected."
  - "[GH:advisories] https://api.github.com/repos/SakuraMathcraft/LaTeXSnipper/security-advisories queried 2026-08-15; returned [] for published repository advisories in this check."
  - "[GH:workflows] GitHub Actions API queried 2026-08-15: the final-head regular CI run and Release Build run for aa234c5ec2c7 both concluded success on 2026-08-01; the manually dispatched macOS CI at an earlier 2026-07-27 head also concluded success."
  - "[Local:scan] Shallow clone /opt/data/tmp/latexsnipper-wiki-source at aa234c5ec2c7f11aa14a952149eaad5a4e331202, checked 2026-08-15: 722 files, including 245 Python and 143 C# files; src/, mathcraft_ocr/, office_plugin/, test/, test_pdf/, docs/, and user_manual/ were inspected. No build, installation, benchmark, or application launch was performed."
  - "[Local:README] Local source readme.md at aa234c5ec2c7, lines 27-96: feature and platform claims, 20 export formats, Office-plugin scope, and Linux/macOS Python/venv requirements."
  - "[Local:manual] Local source user_manual/user_manual.md at aa234c5ec2c7, version v2.6.0-LTS: first-run dependency wizard, local/external-model boundary, PDF/export dependencies, platform limitations, logs, and model-download operational guidance."
  - "[Local:office] Local source office_plugin/README.md at aa234c5ec2c7: Windows VSTO scope, Word/PowerPoint feature boundary, .NET/WebView2 requirements, module layout, deterministic metadata tests, and real-Word parsing E2E entry point."
  - "[Local:ci] Local source .github/workflows/ci.yml and macos-ci-artifact.yml at aa234c5ec2c7: regular CI byte-compiles Python, builds managed Office projects, and executes test/test_office_bridge.py; manual macOS CI runs full pytest, shell syntax checks, package build, and an app-launch smoke path."
  - "[Local:release-workflow] Local source .github/workflows/release.yml at aa234c5ec2c7: SignPath Windows signing is conditional; when signing configuration is unavailable, the workflow explicitly permits publishing an unsigned Windows installer fallback. This workflow was inspected statically, not executed in this review."
  - "[Local:security] Local source src/runtime/secret_store.py, src/integration/office/bridge_server.py, mathcraft_ocr/manifest.py, and mathcraft_ocr/manifests/models.v1.json at aa234c5ec2c7: Windows secrets use DPAPI; non-Windows uses an app-state local key; Office Bridge is restricted to loopback and bearer-authenticated POSTs with a size limit; model manifests pin SHA-256 values for separate MathCraft-Models release downloads."
  - "[Local:privacy] Local source PRIVACY.md at aa234c5ec2c7: local files stay local for local processing, while user-selected external OCR/API/translation providers receive the submitted content under their own policies."
  - "[Local:license] Local root LICENSE is GPLv3 and pyproject.toml declares GPL-3.0-only, while README_MATHCRAFT_OCR.md says MIT despite no separate MathCraft package license file in this checkout; this documentation contradiction was observed 2026-08-15."
  - "[WikiLocal:comparisons] Existing same-category local analyses inspected 2026-08-15: document-processing/editors/overleaf.md, typst.md, and quarto-cli.md. Used only for taxonomy-level positioning, not a new 10-dimension audit of those projects."
---

# LaTeXSnipper

> A cross-platform desktop math workspace that joins screenshot/PDF/handwriting recognition, formula editing, export, computation, and a Windows Office add-in around local or user-configured OCR backends.
>
> **状态**: `stable` · **总分**: 3.2/5 · **推荐度**: 3/5
>
> **核验版本**: source commit `aa234c5ec2c7f11aa14a952149eaad5a4e331202`；latest release `v2.6.0-LTS`（2026-08-01）。该 release 自称最终版本；GitHub 目前尚未将仓库 archived [GH:api] [GH:release]。
>
> **验证边界**: 本轮只审阅 GitHub/API、release、issues、workflow 与 shallow source checkout；未安装桌面端、未下载模型、未运行 OCR/PDF/Office workflow，也未复现项目方 benchmark。

## 一句话总结

对愿意先试跑、尤其使用 Windows desktop Office 的数学写作者，LaTeXSnipper 是少见地把“截图/手写/PDF → LaTeX/Markdown → 编辑/导出/Office”串成单机 workflow 的开源候选；但最终 LTS、首次依赖与模型准备、当前 Office installer 报错，以及许可证文档冲突，意味着它更适合受控试用，而不是无备份地锁进唯一生产链路 [GH:release] [GH:issues] [Local:manual] [Local:license]。

## 总体评价

它的核心不是又一个 formula OCR library，而是一个桌面 product glue：截图、图片/PDF、手写画布、MathLive 编辑、计算工作台、二十种导出格式与 Office add-in 被放在同一用户路径中 [Local:README] [Local:manual]。这对“把讲义、课堂板书、论文截图迅速转成可编辑数学内容”的个人生产力很有吸引力。

不过，功能面宽也使运行边界变多：本地 MathCraft 初次需要下载模型与准备 Python dependency layer；扩展导出依赖 Pandoc，PDF 还需要 LaTeX engine；外部 OCR 模型、MinerU Local 或 remote API 又各有连接与数据边界 [Local:manual]。项目方已把 `v2.6.0-LTS` 描述为最后一个版本，因此本文用 `stable` 表示“功能冻结的可用客户端”，不是“持续有新 feature/长期维护承诺” [GH:release]。

## 推荐度：3/5

**适用角色**：愿意维护本地依赖、能接受先做小样本验证的个人数学写作者、教师或 Office-heavy 用户，尤其是要把截图与公式快速变成可编辑 LaTeX/OMML 的人。

推荐为 3 而非 4：它有明确的端到端价值和多平台 release artifacts，但目前 adoption 需要自担三类不确定性：final-version 后的维护窗口、平台/依赖/模型缓存摩擦，以及尚未厘清的 MathCraft package license 文档矛盾 [GH:release] [Local:manual] [Local:license]。Windows + Word/PowerPoint 是最清晰的 product surface；Linux/macOS 应先用自己的桌面、Python/venv、截图权限与模型网络条件做 smoke test [Local:README] [Local:manual] [Local:office]。

建议采用方式是：先在非关键文档上试跑截图、PDF、导出和恢复路径；保留原图/PDF 与 LaTeX/Markdown/OMML 导出物；不要把不可逆的唯一副本只留在应用历史记录中。若需要长期协作、浏览器入口或持续演进的 publish pipeline，应另看同类目录下的协作编辑/排版系统，而不是把此桌面 client 当作通用文档平台 [WikiLocal:comparisons]。

## 优势

1. **工作流闭环完整**：capture → recognize → handwrite → edit → compute 不只是单点 OCR；截图、PDF、手写、编辑、计算与导出都被纳入同一桌面产品路径 [Local:README] [Local:manual]。
2. **数学输出面宽**：内置 LaTeX、Markdown、MathML、HTML、OMML、SVG，以及经 Pandoc 的 Office/PDF/Typst 等导出入口，适合在不同写作工具间保留可编辑中间表示 [Local:README] [Local:manual]。
3. **本地优先的可选路径**：MathCraft OCR 是 ONNX runtime，支持 CPU/GPU provider 选择、manifest 驱动的缓存和 SHA-256 模型文件核验；不使用外部 provider 时，项目隐私政策承诺本地文件不由应用上传 [Local:security] [Local:privacy]。
4. **Office 场景有专门实现**：Windows VSTO plugin 覆盖 Word OMML/OLE 与 PowerPoint OLE/PNG，并把公式 metadata、编号与更新作为一等功能，而非简单粘贴图片 [Local:office]。
5. **发布与资料相对齐**：最新 release 给出 Windows、amd64 Debian、arm64 macOS、Office installer 与用户手册；长用户手册也覆盖依赖向导、日志、平台差异和常见故障 [GH:release] [Local:manual]。

## 劣势

1. **生命周期已冻结**：最新 LTS 的 release notes 明说这是最终版本；短期可用不等于未来依赖、平台与 bug 的长期维护仍有保证 [GH:release]。
2. **初始运行不是零配置**：模型下载、Python/venv、GPU/CPU backend、Pandoc/LaTeX engine、Wayland/macOS 权限都会影响“安装后即可用”的体验 [Local:manual] [Local:README]。
3. **Office 仍有现实摩擦**：当前 open #343 报告 Microsoft 365 上 OfficePluginSetup-2.6.0 卡在安装准备阶段；#342 仍追踪 inline formula 对齐与样式需求。两条 issue 不能推出系统性不可靠，却足以否定“final LTS 已零故障”的叙述 [GH:issues]。
4. **平台边界必须读细**：当前 release 是 Windows installer、Linux `amd64` `.deb` 与 macOS `arm64` artifact；Office plugin 只面向 Windows desktop Office。这是桌面产品边界，不应误写成服务端或通用 web collaboration 缺陷 [GH:release] [Local:office]。
5. **许可资料自相矛盾**：root `LICENSE`/`pyproject.toml` 指向 GPLv3/GPL-3.0-only，但 `README_MATHCRAFT_OCR.md` 写 MIT；fork、重新分发或与闭源 Office workflow 集成前，应向 maintainer 确认准确定义 [Local:license]。

---

## 适合什么场景

- 将论文截图、课堂板书或手写公式快速转为可编辑 LaTeX/Markdown，并愿意人工校对识别结果。
- Windows desktop Office 写作：需要 OMML/OLE/PNG 公式插入、更新、编号或重排的个人/小团队 [Local:office]。
- 希望本地运行 OCR，并接受首次下载模型、保留模型缓存与设置 dependency environment 的用户 [Local:manual] [Local:security]。
- 需要从同一公式中导出 LaTeX、Markdown、MathML、SVG、OMML 或 Pandoc 支持的文档格式的个人工作流 [Local:README]。
- 想研究 PyQt desktop app、ONNX math OCR、MathLive/MathJax 与 VSTO/COM glue 如何组合的人 [Local:scan] [Local:office]。

## 不适合什么场景

- 不能接受 final-version / LTS 后维护不确定性的关键生产流程 [GH:release]。
- 需要多人实时协作、浏览器端项目管理、服务端权限治理或公共多租户文档平台的组织。
- 没有时间处理 Python/venv、模型下载、Pandoc/LaTeX engine、Wayland/macOS 权限或网络访问问题的纯零配置用户 [Local:manual]。
- 无法接受 GPL 义务，或在法律/商业上不能容忍当前 MathCraft license documentation conflict 的采用方 [Local:license]。
- 对远程 OCR/translation 的数据出境没有完成供应商审查，却计划把敏感讲义、作业或论文交给 external provider 的用户 [Local:privacy]。

## 与类似项目对比

| 项目 | 定位 | 相对本项目 |
|------|------|-----------|
| Overleaf | 协作式 web LaTeX editor | Overleaf 从浏览器协作与项目编译开始；LaTeXSnipper 从 capture/OCR/handwriting 和本地 Office glue 开始，不替代其协作治理面。 |
| Typst | 新式排版语言与本地 compiler | Typst 的核心是从源稿到排版；LaTeXSnipper 更偏从图片/手写/Office 输入到可编辑数学表示，虽可导出 Typst，却不是同类 compiler ecosystem。 |
| Quarto CLI | 技术/科学发布 workflow | Quarto 偏 source-driven multi-format publishing；LaTeXSnipper 偏采集、识别和公式编辑前端，两者可在 Markdown/LaTeX 导出处衔接。 |

上述项目按 `document-processing/editors` 同类范围做定位级对比，基于本地既有条目的标题级定位与分类语境，而非本轮重新抓取或按同一 10 维框架深审；表格不表示性能、安全或成熟度的已核验优劣 [WikiLocal:comparisons]。

---

## 它能做什么

评分 4/5。

- 对截图、图片、手写与 PDF 页面执行公式、文字或混合识别；本地 MathCraft 可输出结构化 block，external model path 可接 OpenAI-compatible、Ollama 或 MinerU Local [Local:README] [Local:manual]。
- 在 MathLive math-field 中编辑并预览公式；在 math workbench 中计算、化简、展开、因式分解或求解 [Local:README] [Local:manual]。
- 将内容导出为 LaTeX、Markdown、MathML、HTML、OMML、SVG，及配置 Pandoc 后的 docx/ODT/pptx/EPUB/PDF/Typst/plain text [Local:README]。
- 通过 Windows Office plugin 插入、加载、更新、删除和编号 Word/PowerPoint 公式；桥接服务只服务于 screenshot OCR [Local:office]。
- 以 standalone Python package 的形式使用 MathCraft OCR 的 CLI/library/JSONL worker；这是一项 repo-auditable surface，不等同于桌面 app 已被本轮实测 [Local:README] [Local:scan]。

不给 5：核心 feature list 主要来自 docs/source review，未复现识别精度、复杂 PDF、手写质量、Office round-trip 或各平台运行；Windows Office 和 macOS/Linux release artifact 也不是对所有 Office/硬件/desktop environment 的等价保证。

## 运行环境与资源占用

| 场景 | CPU | 内存 | 存储 | 说明 |
|------|-----|------|------|------|
| 最小试用 | 2 cores | 4 GB | 约 1 GB 起 | Windows desktop app 或对应 release；实际还取决于依赖向导与模型缓存。 |
| 推荐本地 OCR/PDF | 2-4 cores | 8 GB | 1-5 GB | ONNX model、PyQt WebEngine、PDF rendering 与导出工具会叠加；这些是 heuristic，不是项目方实测最低规格。 |
| GPU 加速 | 4+ cores | 8 GB+ | 1-5 GB | GPU 不是必需；使用 CUDA/onnxruntime-gpu 时还受 GPU/driver/toolkit 组合影响。 |

- **运行时**：Windows bundled Python 3.11 path；Linux/macOS 需要可用的 system Python `>=3.10,<3.13`、venv/pip 支持，并在用户状态目录建立可写 dependency environment [Local:README] [Local:manual]。
- **操作系统**：current release 的可核验 artifacts 为 Windows、Linux `amd64` Debian package、macOS `arm64` `.dmg`/`.app.zip`；不要把它泛化成任意 Linux distribution 或 Intel macOS support [GH:release]。
- **Docker**：`false`。本轮未发现官方面向用户的 Docker image/Compose path；这是 desktop application 的部署形态，并非通用缺陷 [Local:README] [Local:scan]。
- **GPU**：不需要；MathCraft 可选择 CPU/GPU ONNX Runtime provider，GPU 仍会带来 CUDA/driver compatibility risk [Local:manual] [Local:README]。
- **外部依赖**：local model cache；Pandoc（部分 export）；PDF export 的 LaTeX engine；可选 external model/API/MinerU runtime；Windows Office plugin 还需 .NET Framework 4.8、WebView2 与 supported desktop Office [Local:manual] [Local:office]。

performance 评分 3/5：它没有要求 GPU，ONNX path 和 CPU fallback 是正面信号；但桌面 GUI/embedded web engine/PDF/OCR/model cache 是叠加栈，且本轮没有运行 latency、RSS 或 benchmark，不能把项目 README 的功能广度误写为轻量或高吞吐 [Local:README]。

## 上手体验

评分 3/5。

优点是可下载的 platform artifacts、依赖向导、日志路径、错误排查、PDF DPI、模型缓存、Linux/Wayland/macOS troubleshooting 都有具体说明 [GH:release] [Local:manual]。对于已经使用 LaTeX、Pandoc、Office 或本地模型的人，这些指导足够将问题定位为环境、模型或 export layer。

扣分也正来自同一份手册：first run 需要完成 dependency wizard；本地 model 可能下载/repair；Linux/macOS 需要 Python/venv；可选 formats 和 PDF 又增添 Pandoc/TeX requirements；external model 还需 Base URL、model name、API key 与 timeout 配置 [Local:manual]。这不是“30 分钟无条件得到价值”的产品，必须按自己的平台和目标格式试跑。

## 代码质量

评分 3/5。

静态结构并非单一巨型脚本：Python desktop code 按 runtime、UI、recognition、handwriting、exporting、integration 等目录拆分；MathCraft OCR 又独立为 package；Office plugin 有 Abstractions、Bridge、Rendering、Editor、Word/PowerPoint hosts 与 C++ OLE handler 的明确边界 [Local:scan] [Local:office]。repo 还含 32 个 Python test files、Office metadata safety tests 和 real-Word parsing E2E entry point [Local:scan] [Local:office]。

CI 是实质正信号：final-head 的 regular CI 与 Release Build 均成功；regular CI 的 source 内容包括 Python byte-compile、.NET Office project build 和 Office Bridge test [GH:workflows] [Local:ci]。但不要把它夸大为全系统 coverage：regular CI 没有执行 full pytest；full pytest + macOS packaging/app-launch smoke 存在于手动触发的 macOS workflow，最近一次可见成功早于 final release head [GH:workflows] [Local:ci]。在未跑 desktop/OCR/Office E2E 的本轮证据下，模块化和 CI 支持 3 分，不足以支撑 4/5。

## 可扩展性

评分 3/5。

面向用户的可配置面并不小：选择 MathCraft local runtime，或接 OpenAI-compatible/Ollama/MinerU Local；选择 prompt template、model cache、provider、export format 与 Office bridge [Local:manual] [Local:security]。面向开发者，MathCraft 提供 library、CLI 与 JSONL worker，Office plugin 也显式区分 contracts、renderer、editor 与 hosts [Local:README] [Local:office]。

但这些是 configuration、source-level modularity 与 protocol integration，不是稳定 plugin marketplace 或公开 extension API。深度定制仍可能要求 fork Python/C#/C++ code 并承担 GPL obligations；final-version 状态也降低了上游协作扩展的长期确定性 [GH:release] [Local:license]。

## 文档质量

评分 4/5。

文档是该项目的强项之一：English README 提供 feature/platform/export overview；近 2,000 行中文用户手册按初次使用、OCR/PDF、外部 provider、安装、网络、平台差异、Office、mobile/product context 和 MathCraft 分卷，并给出日志/命令/故障现象级说明 [Local:README] [Local:manual]。Office plugin README 也把 supported Office、dependency、layout、build、deterministic test 和 real-Word E2E 分开写明 [Local:office]。

不给 5：项目缺少 CONTRIBUTING、security policy 与 governance templates，且 MathCraft README 的 MIT 声明与 root/pyproject 的 GPL 资料相冲突。对 fork、package redistribution 与商业集成而言，这不是可忽略的 documentation typo [GH:community] [Local:license]。

## 社区与成熟度

| 维度 | 评分 | 说明 |
|------|------|------|
| 社区活跃度 | 3/5 | 2026-08-15 snapshot 为 845 stars、44 forks、4 listed contributors、291 merged PRs、2 open issues、0 open PRs；issues/discussions surface 存在，但 GitHub community health 只有 42，且没有 CONTRIBUTING/CODE_OF_CONDUCT/PR-or-issue templates [GH:api] [GH:community]。 |
| 成熟度 | 3/5 | 2025-10 创建，2026-08 发布 v2.6.0-LTS，具备多平台 artifacts、Office installer 与长手册；但 release 被明确定位为最终版本，仓库还未 accumulated a long post-LTS maintenance record [GH:api] [GH:release]。 |

这里不能让“LTS”自动等于高成熟度：它说明作者希望冻结一套最终使用面，却不等于已经观察到多年维护、依赖升级或兼容性修复。反过来，当前只剩两条 open issues 也不能证明整个产品无 bug，尤其 #343 恰好命中 Office installation 这一高价值路径 [GH:issues]。

## 安全与风险

评分 3/5。

正面设计可见但范围有限：privacy policy 明确区分 local processing 与 user-configured external provider；Windows API key 使用 DPAPI；Office Bridge 强制 loopback binding，POST 要 Bearer token，且有 JSON body size limit；MathCraft manifest 给 model artifact 文件保存 SHA-256 值 [Local:privacy] [Local:security]。这些都是可审阅的防护点，不等于本轮已完成 cryptographic、installer 或 OCR parser security audit。

主要风险面仍须在采用前处理：

- **内容与网络**：截图、PDF、图像与手写数据若走 external OCR/API/translation，会被发送到用户选择的 endpoint；对敏感课件、未发表论文或作业，先完成 provider/retention/region 审查 [Local:privacy] [Local:manual]。
- **解析与桌面攻击面**：PyQt WebEngine、MathJax/MathLive assets、PDF/image parsing、Pandoc/TeX export、model download 与 Office COM/VSTO/localhost bridge 都是输入或执行边界；只应从官方 releases 下载、保留备份，并在非关键文档上先试 [Local:scan] [Local:office] [Local:security]。
- **发布链路**：release workflow 有 SignPath signing path，但签名配置缺失时允许 unsigned Windows installer fallback；current v2.6.0 release asset list 也没有公开 checksum asset。不要把“workflow exists”当成已独立验证的 end-user artifact integrity [GH:release] [Local:release-workflow]。
- **密钥与 host compromise**：non-Windows path 使用 app-state local key 文件保护配置中的 secret，而非经过本轮核验的 OS keychain integration；其权限与 host-account compromise boundary 仍应由部署者评估 [Local:security]。
- **advisory 与许可**：repository advisory endpoint 本轮返回空数组，只代表未发现 published GHSA，不能推导安全；与此同时，GPL/MIT documentation conflict 是采用与再分发的合规风险 [GH:advisories] [Local:license]。

## 学习价值

**高，但更适合解剖而非照搬。**

- 可学习如何把 OCR runtime、desktop capture、手写画布、structured export 和 formula editor 组织成面向数学写作的用户流 [Local:README] [Local:manual]。
- MathCraft 的 manifest/model-cache/CPU-GPU provider/JSONL worker 设计，是把模型资产与桌面 client 解耦的一条具体路线 [Local:security] [Local:scan]。
- Office plugin 的 contracts/rendering/host separation、metadata safety tests 与 real-Word E2E entry point，适合研究 desktop Office integration 如何避免只靠复制粘贴图片 [Local:office]。
- 也值得反向学习：final-version 的维护交接、source vs package license 一致性、常规 CI 与 full desktop E2E 的差距、release signing/checksum evidence，都是把个人项目升级为长期可采用工具时必须补齐的工程证据 [GH:release] [Local:ci] [Local:license]。
