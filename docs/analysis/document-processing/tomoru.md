---
title: "Tomoru"
created: 2026-11-24
updated: 2026-11-24
type: repository-analysis
repo_url: "https://github.com/ACAne0320/Tomoru"
category: "document-processing"
tags: [asr, live-captions, subtitle-translation, desktop, local-inference]
primary_language: "Go"
license: "GPL-3.0-or-later"
stars: 403
forks: 16
last_checked: 2026-11-24
last_verified: 2026-11-24
evidence: "GitHub metadata, release/issue sampling, pinned source and docs review; no hands-on desktop test or independent benchmark"
docker_support: false
gpu_required: false
estimated_cpu: "取决于识别与翻译后端；无统一实测门槛"
estimated_memory: "按模型而变；未测整机峰值"
estimated_storage: "安装包另计；本地模型及视觉投影文件按需下载"
status: active
ratings:
  capability: 3
  usability: 3
  performance: 3
  code_quality: 4
  documentation: 4
  community: 3
  maturity: 2
  extensibility: 3
  security: 3
  recommendation: 3
overall_score: 3.1
sources:
  - "[GH:api] https://api.github.com/repos/ACAne0320/Tomoru — 2026-11-24 快照：403 stars，16 forks，2026-10-31 创建，main，未归档，API 许可证 GPL-3.0；REST open_issues_count=9，gh repo view GraphQL 拆为 8 个 open issues + 1 个 open PR；languages 以 Go 为主，另含 C 和 Swift 等。"
  - "[GH:local-scan] https://github.com/ACAne0320/Tomoru/tree/b1c1f6f46131bf695574843ef615de2cf3631ce4 — 2026-11-24 浅克隆静态检查；app/go.mod 为 Go 1.27.3 / MyGo 0.9.2；抽查 app/layers_test.go、engine/、app/internal/{asr,provider,translate,models,history}、protocol/fixtures.json 和工作流；未执行上游代码、安装桌面包或复跑 benchmark。"
  - "[Docs:readme] https://github.com/ACAne0320/Tomoru/blob/b1c1f6f46131bf695574843ef615de2cf3631ce4/README_zh.md — 平台、音源、安装、模型、隐私与主代码许可；本地/云端分别选择，截图默认是云端但可另配。"
  - "[Docs:arch] https://github.com/ACAne0320/Tomoru/blob/b1c1f6f46131bf695574843ef615de2cf3631ce4/docs/architecture_zh.md — 引擎分工、UI 与 session 边界、提交/定稿事件、测试边界。"
  - "[Docs:protocol] https://github.com/ACAne0320/Tomoru/blob/b1c1f6f46131bf695574843ef615de2cf3631ce4/docs/engine-protocol_zh.md — 子进程 JSON Lines v1、WASAPI/Core Audio/PulseAudio 输出捕获、识别与平台引擎的分工。"
  - "[Docs:dev] https://github.com/ACAne0320/Tomoru/blob/b1c1f6f46131bf695574843ef615de2cf3631ce4/docs/development_zh.md — 开发工具、检查与端到端测试入口；同一修订下有中英 ADR、CONTRIBUTING_zh.md 和 SECURITY_zh.md。"
  - "[Docs:scenes] https://github.com/ACAne0320/Tomoru/blob/b1c1f6f46131bf695574843ef615de2cf3631ce4/docs/scenes_zh.md — 场景、专名词表、用户 API 和历史字幕学习。"
  - "[Docs:image] https://github.com/ACAne0320/Tomoru/blob/b1c1f6f46131bf695574843ef615de2cf3631ce4/docs/image-translation_zh.md — 截图单独选引擎，默认 Index-Translate 云端；本地视觉投影按需加载，兼容的自定义接口可读取图片。"
  - "[Docs:models] https://github.com/ACAne0320/Tomoru/blob/b1c1f6f46131bf695574843ef615de2cf3631ce4/docs/adr/006-user-data-and-models_zh.md — 上游 M5 Metal 模型内存例：Index-Translate 2B 1389 MiB、9B 5257 MiB；不是整机内存或最低要求。"
  - "[Docs:bench] https://github.com/ACAne0320/Tomoru/blob/b1c1f6f46131bf695574843ef615de2cf3631ce4/bench/README_zh.md — 2026-10-17 的上游 M5 基线及指标定义；直播、游戏实况等场景的人工参考字幕待补，评测媒体不进入仓库；Apple 系统识别服务未计入 CPU 秒。"
  - "[GH:release] https://github.com/ACAne0320/Tomoru/releases/tag/v0.2.3 — 2026-11-24 查询：v0.2.3 于 2026-11-23 发布，含 macOS arm64 DMG、Windows amd64 EXE、Linux amd64 DEB 及各平台归档、更新清单和 SHA256SUMS；近期 v0.2.0 发布于 2026-11-17。"
  - "[GH:changes] https://github.com/ACAne0320/Tomoru/blob/b1c1f6f46131bf695574843ef615de2cf3631ce4/app/CHANGELOG.md — 0.2.0 引入 Linux；0.2.1 加入历史文本/SRT 导出；0.2.2 包含 #72 框选重试改动；0.2.3 变更云端错误和图片引擎选择处理。"
  - "[GH:issues] 2026-11-24 采样：https://github.com/ACAne0320/Tomoru/issues/62（0.2.0 上的 Windows 10 截图无响应及退出残留；开放）、https://github.com/ACAne0320/Tomoru/pull/72（已合并，允许重按快捷键重启框选）、https://github.com/ACAne0320/Tomoru/issues/160（macOS 截图窗口选取干扰；开放）、https://github.com/ACAne0320/Tomoru/pull/161（对应修补；开放）、https://github.com/ACAne0320/Tomoru/issues/159（原文显示设置由维护者当天解答）。"
  - "[GH:contributors] https://api.github.com/repos/ACAne0320/Tomoru/contributors — 2026-11-24，端点返回 ACAne0320 162、7Mrlan 1；反映该端点的提交归属，不是社区人数。"
  - "[GH:ci] 同一 main 修订的工作流结论 success：https://github.com/ACAne0320/Tomoru/actions/runs/45324052924 和 https://github.com/ACAne0320/Tomoru/actions/runs/45324052821；Tests 按路径选择任务，上游常规检查不等于真实桌面/模型端到端。"
  - "[Docs:release] https://github.com/ACAne0320/Tomoru/blob/b1c1f6f46131bf695574843ef615de2cf3631ce4/docs/release_zh.md — macOS 自签名未公证，Windows 安装包未签名；内置更新包使用 MyGo 更新签名，Linux DEB 不自动更新。"
  - "[GH:security] https://api.github.com/repos/ACAne0320/Tomoru/security-advisories — 2026-11-24 返回空数组，只代表该端点未发现公开项目公告；https://github.com/ACAne0320/Tomoru/blob/b1c1f6f46131bf695574843ef615de2cf3631ce4/SECURITY_zh.md 记录私密报告流程。"
  - "[Docs:license] https://github.com/ACAne0320/Tomoru/blob/b1c1f6f46131bf695574843ef615de2cf3631ce4/LICENSE、同修订的 README_zh.md、TRADEMARKS_zh.md、docs/third-party-licenses_zh.md 和 third_party/REVIEW.md — LICENSE 为 GPL v3 正文，README 明示代码可选后续版本；品牌资产、模型权重、随包依赖分别按其条款处理。"
  - "[GH:live-captions] https://github.com/abb128/LiveCaptions/blob/93734270e69a9d5d8a349075604477681c308dfa/README.md — 官方 README 的定位：Linux 本地桌面/麦克风实时字幕，仅正式支持英语。"
---

# Tomoru

> 把电脑里正在播放的声音变成双语浮层字幕的桌面应用，可分别选择本机或云端识别与翻译。
>
> **状态**：`active` · **综合评分**：3.1/5 · **推荐度**：3/5
>
> **验证边界**：核对了 GitHub 发布资产、文档和固定修订源码；未安装桌面包、采集实际音频或独立复跑评测。[GH:release] [GH:local-scan]

## 一句话总结

给经常看没有字幕的外语直播或视频的桌面用户：不用先拿到媒体文件，直接对播放中的音频做转写和翻译。[Docs:readme]

## 总体评价

Tomoru 的价值不只是接入语音模型，而是把**系统音频捕获、增量转写、翻译和跨应用字幕浮层**装进一个工具。相比给单个播放器加字幕，它的输入跟着桌面音源走；代价是音频捕获、浮层和截图权限的问题也必须按操作系统分别处理。分析以 `v0.2.3` 的发布资产与主分支固定修订的代码、文档为依据；下文未亲测客户端，不把 README 能力或 CI 成功等同于目标桌面的实测效果。[GH:release] [GH:local-scan] [Docs:arch] [GH:ci]

## 推荐度：3/5

适合受支持桌面上经常看外语内容、能接受机器字幕延迟和误译的个人用户小范围试用。先用熟悉的片段验证音源、字幕延时和专名，再决定是否常驻；普通观看选便利的引擎，敏感内容则分别核对识别、字幕翻译和图片翻译的去向。Linux 若必须按应用隔离声音，不建议以 Tomoru 代替已有工作流；重要会议也不宜把它当成权威记录。[Docs:readme] [Docs:image] [GH:issues]

## 优势

1. **输入独立于播放器。** 文档列出系统播放声音输入、macOS/Windows 按应用捕获，以及独立可调的字幕浮层；对直播与普通网页视频尤其有用。[Docs:readme] [Docs:protocol]
2. **翻译不必等到整句结束。** 流水线区分临时识别、先出的翻译和最后定稿；场景词表能给特定节目或游戏统一人名、地名和译名。[Docs:arch] [Docs:scenes]
3. **能分别选本机和云端。** 桌面字幕和图片翻译不是同一个引擎开关，可按负载与数据敏感度搭配；历史默认关闭，开启后可导出文本或 SRT。[Docs:readme] [Docs:image] [GH:changes]

## 劣势

1. **三平台不等价。** Linux 没有按应用捕获，GNOME/KDE 与 X11/Wayland 的托盘、置顶、框选权限各有条件；macOS 仅支持 Apple 芯片且要求 macOS 26 起，Windows 官方要求 Windows 11 x64。[Docs:readme] [Docs:arch]
2. **浮层仍可能干扰系统工作流。** macOS 截图窗口选取冲突已有开放报告和未合并 PR。另有 Windows 10 上旧版框选卡死报告，0.2.2 的更新记录列出了重按快捷键可重新框选的修补；不能据此断言 Windows 11 最新版仍有同一故障，也没有证据说退出残留已完整解决。[GH:issues] [GH:changes]
3. **离线配置有实际成本。** 要预先下载相应模型；大型本地翻译模型的内存和计算成本不能用云端配置的数据外推。自定义图片接口还得实际支持视觉输入。[Docs:models] [Docs:image] [Docs:bench]

## 适合什么场景

- 看日语番剧、韩语直播或外语访谈，只需边看边理解大意；固定节目反复出现的专名可维护在专用场景里。[Docs:readme] [Docs:scenes]
- 给已有播放器、桌面会议客户端或游戏加个人字幕辅助，不要求修改源文件；需要回看时再主动开启历史。[Docs:readme] [GH:changes]
- 一边听视频，一边偶尔翻译无声画面中的字，例如游戏对话框；在用云端图片引擎前先确认框选区域不含敏感内容。[Docs:image]

## 不适合什么场景

- 医疗、法律、评审等讲错一句就会造成后果、或必须逐字可靠留档的场景；机器识别、断句和翻译误差会叠加。[Docs:bench]
- 要求 Linux 仅捕获会议客户端而不混入其他程序声音，或要求全平台都经过组织的安装签名与权限审查。[Docs:readme] [Docs:release]
- 离线批量制作用于公开发布的精校双语成片。历史导出是按实时会话整理的文本或 SRT，不等于完整的字幕制作、校对和烧录流水线。[GH:changes] [Docs:readme]

## 与类似项目对比

| 项目 | 定位 | 相对本项目 |
|---|---|---|
| [Live Captions](https://github.com/abb128/LiveCaptions) | Linux 本地实时英文字幕，支持桌面声或麦克风 | 只要 Linux 的本地英文转写时更对题；Tomoru 强调多语双语字幕和本机/云端翻译，采集的是播放声，不是麦克风。[GH:live-captions] [Docs:readme] |

以上是 `document-processing` 下桌面音频处理的定位对比，未对 Live Captions 做同一套 10 维审查，也未横测准确率或资源消耗。

## 它能做什么

**功能广度 3/5。** 仓库中可以找到采集引擎、识别适配器、翻译构造器和浮层页面，并非只有演示；但平台输入差异和开放问题限制了有效覆盖面，本次未做桌面验证。[GH:local-scan] [Docs:arch] [GH:issues]

- **音频 → 字幕**：macOS 的 Core Audio、Windows 的 WASAPI、Linux 的 PulseAudio 兼容路径把播放音频交给识别；再由 Go 会话层断句、翻译和派发字幕。识别可选 Apple（macOS）、SenseVoice、Qwen3-ASR 等，支持组合取决于平台和后端。[Docs:protocol] [Docs:arch]
- **字幕 → 历史或术语**：可用场景词表纠正已知的近音错词，并为译文提供术语约束；可选历史记录并导出 SRT/文本，也可手动触发自配对话 API 从历史学习专名。接入学习 API 会改变历史数据的传输边界。[Docs:scenes] [GH:changes]
- **图像 → 浮动译卡**：剪贴板截图或一键框选后调用单独配置的图像后端，不是持续 OCR；本机图片翻译需可读图的模型配置。[Docs:image]

## 运行环境与资源占用

**资源效率 3/5（暂评）。** 没有本轮实测；资源差别主要由识别、翻译及是否加载视觉投影决定。上游在 M5 上报告 Index-Translate 2B 和 9B 的 Metal 模型内存分别为 1389 MiB、5257 MiB；不含整套桌面栈，不能当作 RAM 门槛。上游基准的 Apple 路径还不把系统识别服务计入 CPU 秒，不能用它给整机功耗背书。[Docs:models] [Docs:image] [Docs:bench]

| 场景 | CPU | 内存 | 存储 | 备注 |
|---|---|---|---|---|
| 先试：云端翻译和适合平台的识别后端 | 未实测 | 未实测 | 安装包；识别组件视选项而定 | 云端路径依赖网络、有数据出站 |
| 需离线：本机识别 + 小型本机翻译模型 | 取决于模型与硬件加速 | 需要为模型和应用留余量 | 另留权重、可选引擎与视觉投影空间 | 大模型、读图应分别验证峰值和延迟 |

- **平台与运行时**：macOS 26+ arm64、Windows 11 x64、Linux x64（Ubuntu 22.04 或相近环境，GNOME/KDE）；从源码构建另需 Go 1.27.3、MyGo 与对应平台原生工具链。Windows/Linux 不自带可用的应用内系统识别路径，首次需选择本机模型或云端识别。[Docs:readme] [Docs:arch] [GH:local-scan]
- **Docker / GPU / 外部依赖**：未见官方桌面 Docker 镜像；没有统一的独显要求。平台音频栈和窗口环境不可省，本地推理路径可能用 sherpa-onnx 或 llama.cpp；云端配置则需要网络，部分服务还需用户自配密钥。[Docs:readme] [Docs:bench] [GH:release]

## 上手体验

**3/5。** 安装包、首次引导和几种可选后端都有文档，但不同平台需要分别处理来源信任、音源、权限和模型。建议从官方 Release 固定版本下载，先核对资产与校验文件，在不敏感的短片上跑通系统声音 → 原文 → 译文，再决定是否启用截图、历史或自定义 API。macOS 的系统音频权限与可选的截图录屏权限不是同一项；Linux 的 DEB 更新要另行跟进。[GH:release] [Docs:readme] [Docs:image] [Docs:release]

## 代码质量

**4/5。** `core` 管命令和各服务状态，`live` 管会话、断句与翻译队列，平台进程用 JSON Lines 与 Go 应用通信。显示用的短字幕快照不当历史记录：历史与评测消费有提交、进度和完成区分的事件。这些边界有实际维护价值，也有分层检查与协议 fixtures 对应；不是单靠目录命名判分。[Docs:arch] [Docs:protocol] [GH:local-scan]

同一修订的上游 Checks/Tests 有成功记录，但按路径选择任务；不证明所有平台的真实捕获、模型和浮层已被覆盖。代码层得到较高分，不抵消开放的桌面集成问题；没有覆盖率或本地执行证据支撑 5 分。[GH:ci] [GH:issues]

## 可扩展性

**3/5。** 使用者可加场景术语、兼容的自定义接口与模型组合；开发者可参考识别适配层及 v1 子进程协议来改造采集或识别。两者不同：已文档化的内部协议不等于对用户开放、具有兼容承诺的插件市场；新增平台和不兼容后端仍可能要改源码。[Docs:arch] [Docs:protocol] [Docs:scenes] [Docs:image]

## 文档质量

**4/5。** 中文、英文 README 都能作为入口；架构、协议、开发、发布、截图、场景和 ADR 把贡献者关心的边界写得较清楚。用户能查到平台与权限差异，但对设备性能的判断还是得在自己的后端配置上测；上游 benchmark 有用，却不能给新设备、新语言与低质量直播源提供同等置信度。[Docs:readme] [Docs:dev] [Docs:arch] [Docs:bench]

## 社区与成熟度

| 维度 | 评分 | 理由 |
|---|---|---|
| 社区活跃度 | 3/5 | 2026-11-24 快照为 403 stars、16 forks、8 open issues、1 open PR。采样中能看到维护者答疑；贡献端点明显集中在主维护者，热度不等于有持续独立维护生态。[GH:api] [GH:issues] [GH:contributors] |
| 成熟度 | 2/5 | 仓库于 2026-10-31 创建，已快速发到 v0.2.3，但 Linux 刚在 v0.2.0 进入发布范围，浮层兼容问题仍在修补。快速发布说明反馈在进入开发流，不说明跨版本、跨桌面稳定性已经建立。[GH:api] [GH:release] [GH:changes] [GH:issues] |

## 安全与风险

**3/5。** 主要风险是捕获的数据去了哪里，以及用户把什么二进制装进桌面环境。云识别会发送音频，云翻译会处理文本。截图交给单独配置的图片引擎处理，文档称应用不会保留截图或译文；把字幕改成本机不一定会改变图片引擎（文档所列默认值是 Index-Translate 云端，首次引导也可随兼容的翻译引擎设定）。主动用自配 API 从历史学习专名也会把内容发给该接口。文档称历史默认关闭，开启后保存在本机；本轮未验证实际网络流量或权限边界，机密资料应先逐条确认配置、供应商政策和本机落盘策略。[Docs:readme] [Docs:image] [Docs:scenes]

安装与更新是两条信任链：上游记录 macOS 有自签名但未获 Apple 公证、Windows 安装包未签名；内置更新使用独立的 MyGo 签名校验，不能拿后者替代安装包的发行者身份验证，DEB 也不走自动更新。本轮未发现项目公开 GHSA，不代表依赖、随包原生程序或模型下载已经审计。[Docs:release] [GH:release] [GH:security]

上游 README 明示代码为 `GPL-3.0-or-later`，GitHub API 给出 `GPL-3.0`。二次分发时还需分别查品牌/吉祥物、权重以及随包原生依赖的条款和来源；上游也注明已收集的依赖声明不是完整的二进制物料清单，不能替代对具体产物的来源核查。[GH:api] [Docs:license]

## 学习价值

值得读的是**显示快照和完整事件流的分离**，以及用共享 fixtures 校验跨平台子进程协议。前者解释了实时字幕为什么可以丢弃过去的显示行，却仍须给已提交的句子确定的最终结果；后者让平台采集实现可分别演化而不把系统细节带进 Go 会话层。做类似产品时，也可借鉴上游评测把首次出字、定稿、完整译文和改写率分开，而不只报一个平均延迟。[Docs:arch] [Docs:protocol] [Docs:bench]
