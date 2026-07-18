---

title: "MinerU"
created: 2026-05-21
updated: 2026-07-18
type: repository-analysis
repo_url: "https://github.com/opendatalab/MinerU"
category: "document-processing/document-conversion"
tags: ["document-processing", "pdf", "ocr", "scientific-literature", "markdown", "json", "llm", "python"]
previous_repo: ""
successor: ""
primary_language: "Python"
license: "Apache-2.0 with additional MinerU terms"
stars: 74936
forks: 6300
last_checked: 2026-07-18
last_verified: 2026-07-18
evidence: "GitHub REST/API + official release/docs evidence + local shallow-clone scan; vendor OCR/Hybrid benchmark claims were not independently reproduced"
archived_reason: ""
docker_support: false
gpu_required: false
estimated_cpu: "4+ cores for ordinary parsing; VLM/OCR modes may need accelerator for acceptable throughput"
estimated_memory: "16GB minimum and 32GB recommended for local parsing per official matrix; lightweight remote-client use is lower"
estimated_storage: "20GB minimum for local model-backed deployment; about 2GB minimum for HTTP-client use per official matrix"
status: active
ratings:
  capability: 5
  usability: 3
  performance: 3
  code_quality: 3
  documentation: 4
  community: 5
  maturity: 3
  extensibility: 3
  security: 3
  recommendation: 4
overall_score: 3.6
sources:
  - "[GH] https://github.com/opendatalab/MinerU"
  - "[GH:api] https://api.github.com/repos/opendatalab/MinerU queried 2026-07-18 UTC+8; full_name=opendatalab/MinerU, archived=false, disabled=false, default_branch=master, pushed_at=2026-07-17T07:32:08Z, stars=74936, forks=6300, open_issues_count=47 where REST count includes PRs, primary_language=Python, license.spdx_id=NOASSERTION"
  - "[GH:activity] GitHub issue search queried 2026-07-18 UTC+8; open issues=22 and open PRs=25"
  - "[GH:release] Official GitHub releases checked 2026-07-18 UTC+8: latest stable mineru-3.4.4-released published 2026-07-10; 3.3 added Hybrid effort=medium/high and upgraded MinerU2.5-Pro; 3.4 upgraded pipeline OCR to PP-OCRv6 and changed model-download/cache behavior; v4.0.0a1/a2 are prereleases and a1 notes VLM-backend removal"
  - "[GH:languages] https://api.github.com/repos/opendatalab/MinerU/languages queried 2026-07-18 UTC+8; Python=2590937 bytes, Dockerfile=16927"
  - "[GH:community] GitHub community profile queried 2026-07-18 UTC+8; health_percentage=75; README and PR template present; no CONTRIBUTING or Code of Conduct detected; license metadata is NOASSERTION and points to LICENSE.md"
  - "[GH:local-scan] Local shallow clone /opt/data/tmp/github-repo-wiki-freshness-audit/repos/MinerU at commit 79d6d8d79fb8f3ddba5cc34c07a16f0ec36f56c7 on 2026-07-18; git-tracked files=425, Markdown=60, workflows=5; checked README.md, LICENSE.md, SECURITY.md, pyproject.toml, docs/, docker/, tests/; pyproject requires Python 3.10-3.13 and exposes CLI/API/router/Gradio entry points; test configuration centers on tests/unittest/test_e2e.py"
  - "[GH:license] LICENSE.md inspected at commit 79d6d8d79fb8f3ddba5cc34c07a16f0ec36f56c7; Apache-2.0 plus extra terms: separate commercial license above 100M consolidated MAU or USD 20M monthly revenue, prominent attribution for third-party online services, and automatic termination for specified noncompliance"
  - "[GH:security] SECURITY.md inspected at commit 79d6d8d79fb8f3ddba5cc34c07a16f0ec36f56c7; private GitHub security reporting path and latest-version support are documented"
  - "[GH:advisories] https://api.github.com/repos/opendatalab/MinerU/security-advisories queried 2026-07-18 UTC+8; returned [] for published repository advisories in this check"
  - "[Docs] README.md and https://opendatalab.github.io/MinerU/ checked 2026-07-18; describe PDF/image/DOCX/PPTX/XLSX to Markdown/JSON, scientific-literature symbol conversion, CLI/FastAPI/Gradio/router surfaces, CPU/GPU/MPS paths, and an official resource matrix"
  - "[Docs:docker] https://opendatalab.github.io/MinerU/quick_start/docker_deployment/ extracted 2026-07-18; official instructions build a local mineru:latest image from the repository Dockerfile and offer compose profiles, but this audit did not verify an official prebuilt MinerU image, so docker_support remains false under repo-wiki convention"
---

# MinerU

> 面向 LLM/RAG 的复杂文档解析工具，尤其强调科学文献中的符号转换与 PDF/Office 到 Markdown/JSON。
>
> **状态**: `active` · **总分**: 3.6/5 · **推荐度**: 4/5
> **核验版本**: local clone commit `79d6d8d79fb8f3ddba5cc34c07a16f0ec36f56c7`；latest stable `mineru-3.4.4-released`；GitHub/API 快照 2026-07-18

## 一句话总结

MinerU 很值得放入 document-processing 板块并实测，尤其适合科学文献解析；但它的自定义许可证和模型/部署复杂度，使其更适合作为“强候选”，不是默认无脑依赖。

## 总体评价

官方文档称 MinerU 将 PDF、image、DOCX、PPTX、XLSX 转为 Markdown/JSON，服务 retrieval、extraction、LLM workflows；项目诞生于 InternLM 预训练过程，并特别关注 scientific literature 的 symbol conversion [Docs]。稳定版 3.3/3.4 又加入 Hybrid `effort` 档位、VLM 模型升级、PP-OCRv6 与模型下载/cache 优化；这些是实质能力演进，但性能和精度数字仍是项目方 benchmark，本轮未独立复现 [GH:release]。

它的社区可见度极高：本轮为 74.9k stars、6.3k forks，仓库仍在持续推送 [GH:api]。但 adoption 风险也要写在明处：LICENSE.md 不是纯 Apache-2.0，而是 Apache-2.0 加商业阈值、在线服务 attribution 和自动终止条款 [GH:license]。此外 v4.0 alpha 已出现并明确记录 VLM-backend removal；生产采用应 pin 稳定 3.x，并把 4.x 迁移作为独立验证事项 [GH:release]。

## 推荐度：4/5

**定位**：科学文献/复杂 PDF 到 LLM-ready Markdown/JSON 的高能力解析工具。

推荐 4：对 Develata 的文献处理需求很相关，尤其值得拿数学论文 PDF 和扫描材料做 A/B 测试。3.3/3.4 改善了性能调节与模型获取，但许可证、资源需求、测试面和 v4 alpha 的后端迁移仍使它不适合作为未经 pinning 的默认基础层。

## 优势

1. **科学文献取向明确**：官方直接说明关注 scientific literature symbol conversion [Docs]。
2. **输入/输出贴合 RAG**：PDF/image/Office 到 Markdown/JSON，面向 retrieval/extraction/processing [Docs]。
3. **稳定版能力继续推进**：3.3 提供 Hybrid `medium/high` 权衡，3.4 升级 PP-OCRv6 并优化模型下载/cache；这比单纯版本号增长更有分析意义 [GH:release]。
4. **中英文资料和在线 demo 丰富**：docs、官网、Hugging Face、ModelScope、Colab 等入口 [Docs]。
5. **OpenDataLab/InternLM 生态背景**：适合中文科技文献和大模型预训练语境 [Docs]。

## 劣势

1. **许可证非标准 Apache-2.0**：额外商业阈值、在线服务 attribution 与自动终止条款必须重视 [GH:license]。
2. **治理文件仍不完整**：已有 SECURITY.md 和 PR template，但本次 community check 仍未发现 CONTRIBUTING / Code of Conduct [GH:community][GH:security]。
3. **资源与模型复杂度较高**：官方矩阵对本地模式给出至少 16GB RAM、推荐 32GB、至少 20GB 磁盘；VLM/Hybrid 本地推理还要求加速器 [Docs]。
4. **能力强 claim 需本地实测**：本次未独立复现 OmniDocBench 或真实数学论文解析质量。
5. **迁移面仍在变化**：v4.0 alpha 已出现且记录移除 VLM backend；不能把 alpha 变化提前当作稳定版行为，也不能忽略未来 pinning/migration 成本 [GH:release]。

---

## 适合什么场景

- 数学/科学论文 PDF 转 Markdown/JSON。
- 中文或中英混合科研文档解析。
- 构建 RAG/知识库前的批量文档预处理。
- 对公式、表格、版面识别有较高要求的实验性 pipeline。
- 想比较 Docling/Marker/MinerU 哪个对数学论文更好的场景。

## 不适合什么场景

- 对开源许可证有严格 Apache/MIT-only 要求的商业项目。
- 低资源 VPS 上大批量 OCR/VLM。
- 不愿处理模型下载、加速器、版本 pinning 的用户。
- 在线服务给第三方使用但未审查 license attribution/commercial terms。

## 与类似项目对比

| 项目 | 定位 | 相对本项目 |
|------|------|-----------|
| Docling | 通用 document intelligence framework | Docling 许可更宽松、框架集成更稳；MinerU 科学文献/符号转换叙事更强 |
| Marker | PDF/多格式转 Markdown/JSON | Marker 代码 GPL+模型许可限制；MinerU 也是自定义限制，但更强调科学文献与 InternLM 背景 |
| Mathpix | 商业数学 OCR/API | Mathpix 产品成熟但闭源/付费；MinerU 可本地/开源使用但需部署和许可审查 |

上述项目按 `document-processing/document-conversion` 同类范围做定位级对比，未按同一 10 维度框架深审。其中 Mathpix 是商业产品/API 参照项，不是同类 GitHub repo。

---

## 它能做什么

capability 评分 5/5。

MinerU 能将 PDF、image、DOCX、PPTX、XLSX 转成 Markdown/JSON，目标是 downstream retrieval、extraction、processing 和 LLM workflows [Docs]。README/pyproject 显示依赖 OCR、PDF、Office、VLM、FastAPI 等组件，说明既可 CLI/SDK，也有服务化倾向 [GH:local-scan]。

## 运行环境与资源占用

| 场景 | CPU | 内存 | 存储 | 说明 |
|------|-----|------|------|------|
| pipeline / 普通 PDF/Office | 4 cores 起 | 16GB minimum，32GB recommended | 20GB minimum | 官方矩阵允许 CPU；GPU 加速最低显存 4GB [Docs] |
| 本地 Hybrid/VLM | 8 cores 起 | 16-32GB+ | 20GB+ | 官方矩阵最低显存 8GB；`effort` 影响速度、精度与 image analysis [Docs][GH:release] |
| HTTP client / 远端服务 | 2-4 cores | 16GB minimum | 2GB minimum | 推理资源转移到 OpenAI-compatible server [Docs] |

- **运行时**：Python package/CLI/API；pyproject 依赖 PDF/OCR/Office/VLM/FastAPI 相关库 [GH:local-scan]。
- **操作系统**：主要按 Python/Linux GPU/CPU 环境理解；官方也提供在线/客户端/API 入口 [Docs]。
- **Docker**：官方文档提供 Dockerfile 与 Compose 部署，但要求用户本地构建 `mineru:latest`；本轮未核实官方发布的预构建 MinerU image，故按 wiki 约定设 `docker_support: false` [Docs:docker]。
- **GPU**：基础路径不必然要求；VLM/OCR heavy 使用 GPU 更现实。
- **外部依赖**：模型下载、PDF/Office parser、OCR/VLM stack、可能的在线服务。

## 上手体验

评分 3/5。

入口很多：官网在线版、web app、Hugging Face、ModelScope、Colab、PyPI、GitHub docs [Docs]。3.4 增加模型源自动选择与本地 cache 优先复用，改善首次安装和多环境部署；但本地模式仍涉及大模型、16-32GB 内存和 backend/version pinning [GH:release][Docs]。

## 代码质量

评分 3/5。

当前 shallow clone 有 425 个 tracked files、5 个 workflows；pyproject 配有 pytest/coverage，但核心测试配置主要落在单个 end-to-end test 路径，本轮没有安装模型依赖或执行测试 [GH:local-scan]。项目活跃且新增 SECURITY.md，但模型效果、跨硬件兼容和快速 backend 演进仍使代码质量保持 3。

## 可扩展性

评分 3/5。

MinerU 可通过 Python/CLI/API 组合进 pipeline，服务化也可行；但本次未看到像 Docling 那样清晰的插件/统一 document schema 扩展叙事。深度定制可能需要读源码和跟随内部版本变化。

## 文档质量

评分 4/5。

官方 docs、README、中文 README、在线 demo 和技术报告入口较多 [Docs][GH:local-scan]。扣分点是：快速演进项目的文档可能滞后；许可证/部署/模型边界需要读多个入口才能清楚。

## 社区与成熟度

| 维度 | 评分 | 说明 |
|------|------|------|
| 社区活跃度 | 5/5 | 74.9k stars、6.3k forks，仓库持续推送；可见度极高，但 stars 只代表 visibility [GH:api]。 |
| 成熟度 | 3/5 | 稳定版已到 3.4.4，部署矩阵更完整；同时 v4 alpha 已开始改变 backend 边界，版本/模型/安装路径仍在快速演进 [GH:release][Docs]。 |

## 安全与风险

评分 3/5。

本次 repository advisory 查询为空，仅表示此检查未发现 published GHSA，不是安全证明 [GH:advisories]。仓库现有 SECURITY.md 与私密报告路径 [GH:security]；主要风险仍是不可信 PDF/Office/XML/图片解析、模型与 Python 依赖供应链、API/Gradio 暴露、在线服务上传隐私，以及自定义许可证。额外许可条款是 adoption 风险而非漏洞，但会影响大规模商业和第三方在线服务 [GH:license]。

## 学习价值

高。MinerU 可作为“科学文献解析如何服务大模型预训练/RAG”的案例。对 Develata 最好的使用方式是实测：选 10 篇数学/概率论文，比较公式、定理环境、参考文献、表格、双栏的转换质量。
