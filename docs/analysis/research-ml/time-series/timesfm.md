---
title: "TimesFM"
created: 2026-06-18
updated: 2026-06-18
type: repository-analysis
repo_url: "https://github.com/google-research/timesfm"
category: "research-ml/time-series"
tags: ["time-series", "forecasting", "foundation-model", "google-research", "python", "pytorch", "flax", "huggingface"]
previous_repo: ""
successor: ""
primary_language: "Python"
license: "Apache-2.0"
stars: 21772
forks: 2125
last_checked: 2026-06-18
last_verified: 2026-06-18
evidence: "GitHub API + README + pyproject + repository-bundled agent skill + releases + shallow local scan; no model download, inference smoke test, benchmark reproduction, or paper review"
archived_reason: ""
docker_support: false
gpu_required: false
estimated_cpu: "CPU inference possible for small/batch-light use but may be slow; serious workloads prefer GPU/accelerator depending on backend"
estimated_memory: "README skill states TimesFM 2.5 200M is about 800MB on disk, ~1.5GB RAM on CPU, ~1GB VRAM on GPU; archived 500M v1/v2 may need much more memory"
estimated_storage: "repository small (102 tracked files in shallow scan) but model weights download from Hugging Face cache; skill notes ~800MB for TimesFM 2.5 weights"
status: active
ratings:
  capability: 4
  usability: 3
  performance: 3
  code_quality: 3
  documentation: 4
  community: 4
  maturity: 3
  extensibility: 3
  security: 3
  recommendation: 3
overall_score: 3.3
sources:
  - "[GH] https://github.com/google-research/timesfm"
  - "[GH:api] https://api.github.com/repos/google-research/timesfm queried 2026-06-18; stars=21772, forks=2125, open_issues_count=214, created_at=2024-04-29, pushed_at=2026-06-17, default_branch=master, license=Apache-2.0, primary_language=Python"
  - "[GH:languages] https://api.github.com/repos/google-research/timesfm/languages queried 2026-06-18; Python=514,567 bytes, HTML=153,063, Jupyter Notebook=57,674, Shell=2,489"
  - "[GH:issues-prs] GitHub search API queried 2026-06-18; open issues=142, open PRs=72; REST open_issues_count=214 includes PRs"
  - "[GH:releases] https://api.github.com/repos/google-research/timesfm/releases?per_page=5 queried 2026-06-18; latest v2.0.1 published 2026-06-11; earlier v1.2.6 and v1.2.1 in sample"
  - "[GH:community] https://api.github.com/repos/google-research/timesfm/community/profile queried 2026-06-18; health_percentage=37; README and license present; no CONTRIBUTING, Code of Conduct, issue template, or PR template in community profile"
  - "[GH:advisories] https://api.github.com/repos/google-research/timesfm/security-advisories?per_page=10 queried 2026-06-18; returned []"
  - "[GH:local-scan] local shallow clone /opt/data/tmp/repo_wiki_trending_20260618/google-research-timesfm at commit 8a22ca28a0239d34c095b1eba7fea92d22198e0c; git ls-files=102, markdown files=14, test/spec-ish files=8, GitHub workflows=2; inspected README.md, pyproject.toml, AGENTS.md, timesfm-forecasting/SKILL.md"
  - "[GH:readme] /opt/data/tmp/repo_wiki_trending_20260618/google-research-timesfm/README.md inspected 2026-06-18; README states TimesFM is a pretrained time-series foundation model, paper ICML 2024, checkpoints on Hugging Face, open version not officially supported Google product, latest model TimesFM 2.5, PyPI package timesfm=2.0.0 update on 2026-06-05"
  - "[Local:pyproject] /opt/data/tmp/repo_wiki_trending_20260618/google-research-timesfm/pyproject.toml inspected 2026-06-18; package name=timesfm, version=2.0.1, Python>=3.10, dependencies include numpy, huggingface_hub[cli], safetensors; optional extras torch, flax, xreg"
  - "[Local:skill] /opt/data/tmp/repo_wiki_trending_20260618/google-research-timesfm/timesfm-forecasting/SKILL.md inspected 2026-06-18; skill states TimesFM 2.5 200M uses about 800MB disk, ~1.5GB RAM CPU, ~1GB VRAM GPU, and mandates preflight system check before loading"
  - "[Paper] https://arxiv.org/abs/2310.10688 linked from README as ICML 2024 paper; not independently reviewed in this analysis"
  - "[HF] https://huggingface.co/collections/google/timesfm-release-66e4be5fdb56e960c1e482a6 linked from README as checkpoint collection; not downloaded in this analysis"
---

# TimesFM

> Google Research 的 time-series foundation model 仓库：提供 TimesFM 2.5 / PyPI package / Hugging Face checkpoints / examples，用 foundation model 路线做 zero-shot forecasting。
>
> **状态**: `active` · **总分**: 3.3/5 · **推荐度**: 3/5

## 一句话总结

TimesFM 适合把“时间序列预测的 foundation model 路线”纳入研究和工具观察，但开放仓库不是官方支持产品，本条没有复现 benchmark 或下载模型，因此采用推荐保持 3/5。

## 总体评价

TimesFM 是很值得 repo-wiki 收录的研究型项目：README 明确它是 Google Research 开发的 pretrained time-series foundation model，论文为 ICML 2024 “A decoder-only foundation model for time-series forecasting”，checkpoint 放在 Hugging Face collection；同时说明 open version is not an officially supported Google product [GH:readme][Paper][HF]。这句话很关键：它有 Google Research 背书和产品侧连接，但开放 repo 本身不是企业支持软件。

项目在 2025-2026 仍然活跃：README 记录 TimesFM 2.5、PyPI `timesfm=2.0.0` 更新、LoRA fine-tuning example、unit tests、agent skill；GitHub API 显示 2026-06-17 仍有 push，v2.0.1 release 发布于 2026-06-11 [GH:api][GH:releases][GH:readme]。从功能看，它已经覆盖 Torch/Flax 后端、XReg covariates、Hugging Face model loading、basic forecast code example。

但 repo-wiki 的评分不能被“Google Research + 21k stars”带偏。community profile 只有 37%，缺 CONTRIBUTING/Code of Conduct/issue template/PR template；open issues 142、open PRs 72；本次没有 model download、inference smoke test、benchmark reproduction 或论文细读 [GH:community][GH:issues-prs]。所以它作为研究/试验候选很强，作为稳定工程依赖要谨慎。

## 推荐度：3/5

**定位**：推荐给做时间序列预测、统计学习、foundation model 方向研究或工具评估的人，用作“现代 forecasting foundation model”样本；不建议在未跑本地评估前直接替换经过验证的业务 forecasting pipeline。

给 3 而不是 4：TimesFM 的研究价值很高，安装说明和代码例子也清楚；但预测任务高度数据分布相关，zero-shot model 在具体业务上的误差、calibration、covariates、异常点、节假日/结构突变处理，都必须用本地数据验证 [GH:readme]。README 明确 open version is not officially supported Google product，进一步要求采用者自负验证责任 [GH:readme]。

## 优势

1. **研究价值明确**：ICML 2024 paper、Google Research blog、Hugging Face checkpoints 都在 README 中列出 [GH:readme][Paper][HF]。
2. **API 路线可用**：README 给出 `TimesFM_2p5_200M_torch.from_pretrained(...)`、`ForecastConfig`、`forecast()` 的基本代码 [GH:readme]。
3. **版本仍在演进**：2025-09 TimesFM 2.5，2026-06 PyPI update，v2.0.1 release，说明不是无人维护的论文代码 [GH:readme][GH:releases]。
4. **后端与扩展选项较多**：pyproject extras 包含 torch、flax、xreg；README 提到 XReg covariate support、LoRA fine-tuning example [Local:pyproject][GH:readme]。
5. **仓库自带 agent skill 很有趣**：仓库包含 `timesfm-forecasting/SKILL.md`，且包含 preflight checker 思路，把模型资源约束显式交给 agent workflow [Local:skill]。

## 劣势

1. **不是官方支持产品**：README 明确 open version is not an officially supported Google product [GH:readme]。
2. **本次未验证模型效果**：没有下载 checkpoint、跑 inference、复现论文 benchmark 或检查 calibration。
3. **社区治理文件弱**：community health 37%，缺 CONTRIBUTING、Code of Conduct、issue/PR templates [GH:community]。
4. **backlog 不小**：open issues 142、open PRs 72；研究 repo 的维护响应不应按商业产品期待 [GH:issues-prs]。
5. **资源与依赖仍有门槛**：torch/flax/jax/cuda/xreg extras 与 Hugging Face weights 对环境、磁盘和加速器有要求 [Local:pyproject][Local:skill]。

---

## 适合什么场景

- 研究 time-series foundation model 与传统统计/机器学习 forecasting 的差异。
- 对 univariate forecasting、quantile forecast、zero-shot baseline 做快速实验。
- 在已有业务数据上作为候选模型，与 ARIMA/ETS/Prophet/XGBoost/DeepAR/TFT 等做本地 benchmark。
- 需要 Torch/Flax 两条后端或 XReg covariate support 的研究/原型场景 [Local:pyproject][GH:readme]。
- 研究 agent skill 如何包装 ML model workflow，包括 preflight resource check [Local:skill]。

## 不适合什么场景

- 需要可解释系数、因果解释、严格统计推断的传统时间序列分析。
- 未做本地 benchmark 就直接上生产 forecasting。
- 资源受限、不能下载 Hugging Face weights、不能安装 torch/flax/jax 依赖的环境。
- 强依赖 Google 官方支持 SLA 的企业场景；open repo 已说明不是 official supported product [GH:readme]。
- 多变量动态系统、Granger causality、结构模型或需要人工建模解释的任务。

## 与类似项目对比

| 项目 | 定位 | 相对本项目 |
|------|------|-----------|
| Prophet | 传统可解释 forecasting 工具 | Prophet 更易解释、业务友好；TimesFM 更像大规模预训练模型 baseline |
| statsmodels ARIMA/ETS/SARIMAX | 经典统计时间序列模型 | statsmodels 统计解释和诊断强；TimesFM 强调 zero-shot/foundation model 泛化 |
| GluonTS / DeepAR / TFT 类模型 | 深度学习时间序列训练框架 | 这些通常需要训练/调参；TimesFM 主打 pretrained zero-shot 与 checkpoint 复用 |
| Chronos / Lag-Llama 等 time-series foundation models | 同赛道 foundation model | TimesFM 有 Google Research 论文与产品侧连接；同赛道仍需按数据集实测比较 |

上述项目按 time-series forecasting 工具/研究同类范围做定位级对比，未按同一 10 维度框架深审。

---

## 它能做什么

capability 评分 4/5。这里的能力评分基于仓库公开提供的模型版本、Python API、后端 extras、XReg/fine-tuning 示例与 checkpoint 入口；它不表示本条已经验证预测精度或复现论文 benchmark。

TimesFM 仓库提供：

- TimesFM 2.5 200M model 的 Python package 使用入口 [GH:readme]；
- Hugging Face checkpoint collection [HF]；
- Torch 与 Flax optional backend extras [Local:pyproject]；
- XReg covariate support optional extra [Local:pyproject][GH:readme]；
- basic forecast code：加载 `google/timesfm-2.5-200m-pytorch`，配置 max context/horizon/quantile head，输出 point forecast 与 quantile forecast [GH:readme]；
- fine-tuning example using Hugging Face Transformers + PEFT/LoRA [GH:readme]；
- first-party-ish agent skill，指导 preflight system check 与 forecasting workflow [Local:skill]。

不给 5：仓库不是完整 forecasting platform；数据清洗、特征工程、回测、模型选择、监控、业务解释、生产部署仍需外部系统。

## 运行环境与资源占用

| 场景 | CPU | 内存 | 存储 | 说明 |
|------|-----|------|------|------|
| 小样本试验 | CPU 可跑但可能慢 | skill 称 2.5 约 ~1.5GB RAM | 模型权重约 ~800MB | 适合 notebooks/prototype；需下载 HF weights [Local:skill][HF] |
| GPU/加速推理 | 取决于 batch/context/horizon | skill 称约 ~1GB VRAM 起 | HF cache + env deps | serious workloads 更适合 GPU/accelerator [Local:skill] |
| v1/v2 旧模型 | CPU/GPU 压力更大 | skill 称 archived 500M 可能需 ~32GB RAM | 更大 cache | README 已将 1.0/2.0 相关代码归档到 `v1` [GH:readme][Local:skill] |

- **运行时**：Python >=3.10；核心依赖 numpy、huggingface_hub、safetensors；optional torch/flax/xreg [Local:pyproject]。
- **操作系统**：未在本条中系统验证；通常受 Python backend、PyTorch/JAX/CUDA 安装支持约束。
- **Docker**：README 提到 Vertex Model Garden dockerized endpoint，但本仓库未验证官方用户可用 Docker image；本条按 repo-wiki 规则设为 `docker_support: false` [GH:readme]。
- **GPU**：不是绝对必需，但实际性能和 batch 大小会强烈受加速器影响 [Local:skill]。
- **外部依赖**：Hugging Face model download/cache、torch/flax/jax/scikit-learn 等 optional extras [Local:pyproject][HF]。

performance 评分 3/5。模型参数量相对可控，但实际性能依赖 backend、硬件、context/horizon、batch size；本次没有 benchmark。

## 上手体验

评分 3/5。

README 安装路径清楚：可安装 torch、flax 或 xreg extras；local install 推荐 `uv venv` 和 editable install；代码例子短而可读 [GH:readme]。对熟悉 Python ML 的用户，上手不难。

扣分点：PyTorch/JAX/CUDA/Hugging Face 权重下载仍是常见故障源；预测数据形状、frequency、normalization、quantile crossing、covariates 的语义也需要阅读示例和论文。它不是“上传 CSV 自动出可靠 forecast”的产品。

## 代码质量

评分 3/5。

local scan 显示仓库规模较小：102 tracked files、8 个 test/spec-ish 文件、2 个 GitHub workflows；pyproject 简洁，optional deps 分组明确 [GH:local-scan][Local:pyproject]。README 的更新记录显示 unit tests、community fixes、LoRA fine-tuning example 等持续补强 [GH:readme]。

不给 4/5：community profile 缺贡献治理文件，本次未跑测试；研究 repo 通常以论文/模型为中心，不一定追求工程平台级代码治理 [GH:community]。

## 可扩展性

评分 3/5。

可扩展性主要在使用层：Torch/Flax backend、XReg、LoRA fine-tuning example、agent skill workflow [GH:readme][Local:pyproject][Local:skill]。研究者可以基于它做 forecast experiments、covariate experiments 或 workflow 封装。

限制是核心模型和 checkpoint 不是普通 plugin architecture；若要深改模型结构、训练流程或生产服务，需要进入 ML research/infra 层面，而不只是改配置。

## 文档质量

评分 4/5。

README 虽短，但包含论文、checkpoint、Google Research blog、Google 产品入口、official-support caveat、version history、install、local install、code example [GH:readme]。`timesfm-forecasting/SKILL.md` 对 agent 使用场景、system preflight、资源门槛、何时不用该模型写得很具体 [Local:skill]。

扣分点：repo docs 更偏 quickstart/update log；要严肃判断模型能力，仍要读论文、benchmark、examples 和 issue 讨论。

## 社区与成熟度

| 维度 | 评分 | 说明 |
|------|------|------|
| 社区活跃度 | 4/5 | 21.7k stars、2.1k forks、Google Research 可见度高；但 open issues/PRs 不少，治理文件弱 [GH:api][GH:issues-prs][GH:community] |
| 成熟度 | 3/5 | ICML 2024 + TimesFM 2.5 + PyPI/release 活跃；但 open version 非官方支持产品，工程成熟度不等于产品成熟度 [GH:readme][GH:releases] |

## 安全与风险

评分 3/5。

本次 GitHub Security Advisories endpoint 返回 `[]`，只表示未查到 published GHSA [GH:advisories]。TimesFM 的安全风险不像 agent 工具那样来自 shell/文件系统权限，而主要来自 ML supply chain 与数据治理：Hugging Face checkpoint 下载、Python package dependencies、GPU/JAX/PyTorch install、输入数据隐私、模型输出被误当确定性预测。

更大的风险是 epistemic risk：forecast 看起来有数值、有置信区间，但业务结构突变、节假日、regime shift、稀疏数据、异常点、外生变量遗漏都可能使预测失真。不能把 foundation model 的“zero-shot”理解成“免验证”。

## 学习价值

TimesFM 很适合作为 Develata 研究视野中的交叉样本：一边是经典时间序列统计与大偏差/随机过程背景，一边是 foundation model 的经验主义路线。它值得用来问几个问题：预训练在时间序列中到底学到了什么？quantile calibration 如何评价？zero-shot 与 domain-specific model 的边界在哪里？这些问题比“能否 pip install 后直接预测”更有长期价值。
