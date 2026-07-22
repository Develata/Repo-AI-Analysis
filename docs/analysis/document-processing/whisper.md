---
title: "Whisper"
created: 2026-06-07
updated: 2026-06-07
type: repository-analysis
repo_url: "https://github.com/openai/whisper"
category: "document-processing"
tags: [speech-recognition, asr, translation, openai, python, audio]
previous_repo: ""
successor: ""
primary_language: "Python"
license: "MIT"
stars: 101813
forks: 12439
last_checked: 2026-07-22
last_verified: 2026-06-07
evidence: "GitHub REST/GraphQL metadata + README snapshot + GitHub tree/local-style API scan; not installed or smoke-tested"
archived_reason: ""
docker_support: false
gpu_required: false
estimated_cpu: "CPU 可运行但慢；实用推理通常依赖 GPU/加速器"
estimated_memory: "README 给出 tiny/base ~1GB VRAM 到 large ~10GB、turbo ~6GB 的近似需求"
estimated_storage: "模型权重按尺寸下载；仓库本体小，音频输入/输出另计"
status: active
ratings:
  capability: 5
  usability: 4
  performance: 3
  code_quality: 4
  documentation: 4
  community: 5
  maturity: 5
  extensibility: 3
  security: 3
  recommendation: 5
overall_score: 4.1
sources:
  - "[GH] https://github.com/openai/whisper — GitHub REST/GraphQL snapshot 2026-06-07: created_at=2022-09-16T20:02:54Z, pushed_at=2026-04-15T16:32:15Z, default_branch=main, commit=04f449b8a437f1bbd3dba5c9f826aca972e7709a, stars=101813, forks=12439, open issues=0, open PRs=125, commits=168, license=MIT, primary_language=Python, diskUsageKB=4132"
  - "[GH:readme] Local README snapshot /opt/data/tmp/repo_wiki_trending_20260607_remaining/openai-whisper/README.md checked 2026-06-07; total_lines=160; analysis uses README-described capabilities only and did not run the project"
  - "[GH:local-scan] GitHub tree/API scan checked 2026-06-07: files=45, languages=Python=159343, workflow_count=2, workflows_sample=.github/workflows/python-publish.yml, .github/workflows/test.yml, test-ish files=7, docs-ish files=4, community_files={'code_of_conduct': None, 'code_of_conduct_file': None, 'contributing': None, 'issue_template': None, 'pull_request_template': None, 'license': 'https://api.github.com/licenses/mit', 'readme': 'https://api.github.com/repos/openai/whisper/contents/README.md'}"
  - "[GH:release] GitHub releases endpoint checked 2026-06-07: sampled latest tags=v20250625, v20240930, v20240927, v20231117, v20231106; sample_count=10"
  - "[GH:security-advisories] GitHub security-advisories endpoint checked 2026-06-07: returned 0; absence only means no advisory returned by this endpoint in this check, not proof of safety"
---

# Whisper

> Whisper 是 OpenAI 的通用语音识别模型，覆盖多语言 ASR、speech translation、language identification 和 CLI/Python 调用。
>
> **状态**: `active` · **总分**: 4.1/5 · **推荐度**: 5/5
> **验证边界**: 本轮只做 GitHub metadata、README 与 tree/API scan；未安装、未构建、未运行、未复现实测 benchmark。

## 一句话总结

Whisper 是 OpenAI 的通用语音识别模型，覆盖多语言 ASR、speech translation、language identification 和 CLI/Python 调用。 [GH:readme]

## 总体评价

Whisper 已是事实标准级 ASR baseline。README 给出模型尺寸、VRAM、相对速度和任务限制（turbo 不适合 translation）。本轮未跑音频转录，因此性能只引用 README benchmark/说明。 截至 2026-06-07 的 GitHub 快照显示：stars=101813、forks=12439、open issues=0、open PRs=125、最近采样 release=v20250625, v20240930, v20240927 [GH] [GH:release]。

评分采取保守口径：README/docs claim 只证明项目设计目标和公开描述，本轮没有实测运行效果；local scan 只证明文件结构、语言、workflow/test/docs 线索，不证明业务正确性、安全边界或性能数字 [GH:readme] [GH:local-scan]。

## 推荐度：5/5

**角色定位**：适合对 `document-processing` 方向已有明确需求、愿意按 README 与源码边界自行验证的人。

推荐理由：
- 能力面与主题匹配：README 明确多任务模型、六类尺寸、CLI/Python usage、ffmpeg 依赖和 VRAM/速度表；local scan 显示 repo 小而集中，有 release 和测试 workflow。 [GH:readme]。
- 工程可审计性：仓库结构、语言分布、workflow/test/docs 数量已记录到 source 层，便于后续深挖 [GH:local-scan]。
- 风险前置：本条不把 star 数、官方品牌或 README benchmark 当作独立生产采用证据 [GH]。

**结论**：推荐度 5/5。可收录、可跟踪；是否采用取决于你的场景是否落在它的强项内，以及能否接受未实测/权限/运维边界。

## 优势

1. **定位清晰**：Whisper 是 OpenAI 的通用语音识别模型，覆盖多语言 ASR、speech translation、language identification 和 CLI/Python 调用。 [GH:readme]
2. **工程信号可见**：本轮 tree/API scan 记录 files=45、workflow_count=2、test-ish files=7、docs-ish files=4 [GH:local-scan]。
3. **社区/关注度信号强**：截至 2026-06-07 快照 stars=101813、forks=12439；这只说明可见度，不直接证明质量或生产采用 [GH]。

## 劣势

1. **验证边界**：本轮没有安装、构建、运行、benchmark 或端到端 smoke test；README 能力均按“文档声称/仓库可见设计面”处理 [GH:readme]。
2. **维护/稳定性需看上下文**：open issues=0、open PRs=125 是点时快照；大项目/语言核心仓库不能简单等同 bug 密度 [GH]。
3. **安全结论保守**：security-advisories endpoint 没返回的项目也不能视作安全；高权限、模型、浏览器、账号或文件处理场景仍需独立 threat model [GH:security-advisories]。

---

## 适合什么场景

- 本地/服务器语音转写、字幕生成、音频资料处理
- 需要多语言识别和翻译 baseline
- 研究 weak supervision 大规模语音模型

## 不适合什么场景

- 严格实时低延迟生产系统且无 GPU 优化
- 高隐私场景但无法审计模型/依赖链
- 需要说话人分离/精细时间戳的完整会议系统

## 与类似项目对比

| 项目 | 定位 | 相对本项目 |
|------|------|-----------|
| paddleocr | 文档 OCR/解析 | 同属 document-processing，但 Whisper 处理音频，PaddleOCR 处理图像/PDF |
| microsoft/VibeVoice | 语音 AI 模型家族 | Whisper 更成熟聚焦 ASR；VibeVoice 同时覆盖 ASR/TTS 但更年轻 |
| faster-whisper | Whisper 加速实现参照项 | faster-whisper 偏推理优化，本条只分析 OpenAI 原始仓库 |

上述项目按 `document-processing` 或相邻生态做定位级对比，未在本条中按同一 10 维度框架重审；表格不构成优劣 benchmark。

---

## 它能做什么

README 明确多任务模型、六类尺寸、CLI/Python usage、ffmpeg 依赖和 VRAM/速度表；local scan 显示 repo 小而集中，有 release 和测试 workflow。 [GH:readme]

可见的仓库层面能力线索包括：primary_language=Python、topics=无公开 topics、files=45、docs-ish files=4、test-ish files=7 [GH] [GH:local-scan]。

## 运行环境与资源占用

| 场景 | CPU | 内存 | 存储 | 说明 |
|------|-----|------|------|------|
| 最小 | CPU 可运行但慢；实用推理通常依赖 GPU/加速器 | README 给出 tiny/base ~1GB VRAM 到 large ~10GB、turbo ~6GB 的近似需求 | 模型权重按尺寸下载；仓库本体小，音频输入/输出另计 | 基于 README/依赖栈和仓库规模的启发式估计，非实测 |
| 推荐 | 按生产输入规模预留余量 | 按模型/浏览器/数据库/worker 数调整 | 数据、缓存、模型权重或构建产物另计 | 本轮未跑 benchmark |

- **运行时**：以 README/项目类型为准；本轮未实际启动。
- **操作系统**：未逐平台验证；以官方 README/文档声明为边界。
- **Docker**：frontmatter `docker_support=false` 只表示 README/local scan 有足够线索支持或不支持主路径，未 build image。
- **GPU**：frontmatter `gpu_required=false`；模型类项目即使 CPU 可跑，也可能需要 GPU 才有实用价值。
- **外部依赖**：依赖、账号、模型权重、数据库、浏览器、代理或云服务需求需按实际安装路径复核。

## 上手体验

评分 4/5。

依据：README 是否给出 quick start、安装/配置路径是否清晰，以及本轮是否看到 release、docs 和 workflow 线索 [GH:readme] [GH:release] [GH:local-scan]。未实装，因此不把“README 写得容易”当作真实零摩擦体验。

## 代码质量

评分 4/5。

依据：语言/文件结构、workflow_count=2、test-ish files=7、docs-ish files=4、release 信号和项目年龄 [GH:local-scan] [GH:release]。这个分数是静态仓库质量判断，不等于功能正确性或覆盖率实测。

## 可扩展性

评分 3/5。

依据：README 暴露的 API/plugin/module/model/config/workflow 扩展面，以及仓库结构是否支持二次开发 [GH:readme] [GH:local-scan]。没有运行扩展示例，因此只评价设计面和可见结构。

## 文档质量

评分 4/5。

README/docs-ish files=4；README 对核心定位、安装或功能说明的清晰度支撑该评分 [GH:readme] [GH:local-scan]。若项目另有外部文档，本轮未系统抓取完整站点，后续深审可补。

## 社区与成熟度

| 维度 | 评分 | 说明 |
|------|------|------|
| 社区活跃度 | 5/5 | stars=101813、forks=12439、open issues=0、open PRs=125 是点时可见度和维护负载信号，不单独证明质量 [GH] |
| 成熟度 | 5/5 | created_at=2022-09-16T20:02:54Z，sampled releases=v20250625, v20240930, v20240927, v20231117, v20231106；成熟度按项目年龄、release/CI/test/docs 和稳定性声明综合判断 [GH] [GH:release] |

## 安全与风险

评分 3/5。

GitHub security-advisories endpoint 本轮返回结果已记录，但“无 advisory 返回”不是安全证明 [GH:security-advisories]。实际采用时至少检查：权限范围、账号/cookie/token 暴露面、依赖供应链、模型/文档数据上传路径、sandbox/隔离边界、license 与商业使用限制。

## 学习价值

学习价值主要在三个层面：一是理解 `document-processing` 这一类项目当前如何组织能力；二是用 README claim 与 local scan 对照，训练“文档声称 vs 可审计事实”的边界感；三是把它与同类项目做定位级 comparison，而不是被 star 数或品牌牵引 [GH] [GH:readme] [GH:local-scan]。
