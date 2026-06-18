---

title: "MinerU"
created: 2026-05-21
updated: 2026-05-21
type: repository-analysis
repo_url: "https://github.com/opendatalab/MinerU"
category: "document-processing"
tags: ["document-processing", "pdf", "ocr", "scientific-literature", "markdown", "json", "llm", "python"]
previous_repo: ""
successor: ""
primary_language: "Python"
license: "Apache-2.0 with additional MinerU terms"
stars: 64181
forks: 5424
last_checked: 2026-05-21
last_verified: 2026-05-21
evidence: "GitHub API + official docs extraction + local repository scan; parsing quality not independently benchmarked in this run"
archived_reason: ""
docker_support: true
gpu_required: false
estimated_cpu: "4+ cores for ordinary parsing; VLM/OCR modes may need accelerator for acceptable throughput"
estimated_memory: "8-24GB depending on model mode and document size"
estimated_storage: "5-30GB+ depending on model/cache/client use"
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
  - "[GH:api] https://api.github.com/repos/opendatalab/MinerU queried 2026-05-21; stars=64181, forks=5424, open_issues_count=14 where REST count includes PRs"
  - "[GH:graphql] GitHub GraphQL queried 2026-05-21; open issues=8, open PRs=6, releases=168, commits=5467"
  - "[GH:release] latest GitHub release sampled 2026-05-21: mineru-3.1.15-released published 2026-05-19"
  - "[GH:languages] GitHub languages queried 2026-05-21; Python dominant with Dockerfile support"
  - "[GH:community] GitHub community profile queried 2026-05-21; README and PR template present; no CONTRIBUTING/Code of Conduct detected; GitHub license API reports NOASSERTION with LICENSE.md"
  - "[GH:local-scan] local clone /tmp/repo-wiki-batch12/repos/MinerU at commit 1d154853a98426adefa558d13e9cbe943295a451; files≈422; checked README.md, README_zh-CN.md, LICENSE.md, pyproject.toml, docs/, tests/; LICENSE.md says Apache-2.0 plus additional terms including commercial thresholds and online-service attribution"
  - "[GH:advisories] GitHub security advisories endpoint queried 2026-05-21; returned [] for repository advisories in this check"
  - "[Docs] https://opendatalab.github.io/MinerU/ extracted 2026-05-21; describes PDF/image/DOCX/PPTX/XLSX to Markdown/JSON for retrieval, extraction and LLM workflows; born during InternLM pre-training; focuses on scientific literature symbol conversion; links technical reports and demos"
---

# MinerU

> 面向 LLM/RAG 的复杂文档解析工具，尤其强调科学文献中的符号转换与 PDF/Office 到 Markdown/JSON。
>
> **状态**: `active` · **总分**: 3.6/5 · **推荐度**: 4/5
> **核验版本**: local clone commit `1d154853a98426adefa558d13e9cbe943295a451`；GitHub/API 快照 2026-05-21

## 一句话总结

MinerU 很值得放入 document-processing 板块并实测，尤其适合科学文献解析；但它的自定义许可证和模型/部署复杂度，使其更适合作为“强候选”，不是默认无脑依赖。

## 总体评价

官方文档称 MinerU 将 PDF、image、DOCX、PPTX、XLSX 转为 Markdown/JSON，服务 retrieval、extraction、LLM workflows；项目诞生于 InternLM 预训练过程，并特别关注 scientific literature 的 symbol conversion [Docs]。这正好击中数学/科研文献 ingestion 的痛点：公式、版面、多栏、表格和符号转换。

它的社区可见度极高：64k stars、5.4k forks、168 releases [GH:api][GH:graphql]。但 adoption 风险也要写在明处：LICENSE.md 不是纯 Apache-2.0，而是 Apache-2.0 加额外条款，包括商业阈值和在线服务 attribution obligation [GH:local-scan]。对个人学习/研究通常不是问题；对产品化或在线服务要谨慎审查。

## 推荐度：4/5

**定位**：科学文献/复杂 PDF 到 LLM-ready Markdown/JSON 的高能力解析工具。

推荐 4：对 Develata 的文献处理需求很相关，尤其值得拿数学论文 PDF 和扫描材料做 A/B 测试。但许可证、模型依赖、资源需求和治理文件缺失，使它不如 Docling 那样适合作为默认基础层。

## 优势

1. **科学文献取向明确**：官方直接说明关注 scientific literature symbol conversion [Docs]。
2. **输入/输出贴合 RAG**：PDF/image/Office 到 Markdown/JSON，面向 retrieval/extraction/processing [Docs]。
3. **社区关注度极高**：64k stars、5.4k forks、release 频繁 [GH:api][GH:graphql]。
4. **中英文资料和在线 demo 丰富**：docs、官网、Hugging Face、ModelScope、Colab 等入口 [Docs]。
5. **OpenDataLab/InternLM 生态背景**：适合中文科技文献和大模型预训练语境 [Docs]。

## 劣势

1. **许可证非标准 Apache-2.0**：额外商业阈值和在线服务 attribution 义务必须重视 [GH:local-scan]。
2. **治理文件不足**：本次 GitHub community check 未发现 CONTRIBUTING / Code of Conduct [GH:community]。
3. **资源与模型复杂度较高**：OCR/VLM pipeline 对 CPU/内存/模型缓存要求高。
4. **能力强 claim 需本地实测**：本次未独立 benchmark 文档解析质量。
5. **成熟度有不确定性**：release 很频繁，说明活跃，也意味着接口/模型/安装路径可能变化。

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

上述项目按 `document-processing` 同类范围做定位级对比，未按同一 10 维度框架深审。其中 Mathpix 是商业产品/API 参照项，不是同类 GitHub repo。

---

## 它能做什么

capability 评分 5/5。

MinerU 能将 PDF、image、DOCX、PPTX、XLSX 转成 Markdown/JSON，目标是 downstream retrieval、extraction、processing 和 LLM workflows [Docs]。README/pyproject 显示依赖 OCR、PDF、Office、VLM、FastAPI 等组件，说明既可 CLI/SDK，也有服务化倾向 [GH:local-scan]。

## 运行环境与资源占用

| 场景 | CPU | 内存 | 存储 | 说明 |
|------|-----|------|------|------|
| 普通 PDF/Office | 4 cores | 8GB | 5GB+ | 基础解析和依赖缓存 |
| OCR/科学论文批量 | 8 cores | 16GB+ | 10-30GB | OCR/VLM 模型和中间文件明显增加 |
| 服务化/API | 8+ cores | 16-24GB+ | 30GB+ | 取决于并发、模型和文件大小 |

- **运行时**：Python package/CLI/API；pyproject 依赖 PDF/OCR/Office/VLM/FastAPI 相关库 [GH:local-scan]。
- **操作系统**：主要按 Python/Linux GPU/CPU 环境理解；官方也提供在线/客户端/API 入口 [Docs]。
- **Docker**：仓库含 Dockerfile，适合容器化服务尝试 [GH:languages]。
- **GPU**：基础路径不必然要求；VLM/OCR heavy 使用 GPU 更现实。
- **外部依赖**：模型下载、PDF/Office parser、OCR/VLM stack、可能的在线服务。

## 上手体验

评分 3/5。

入口很多：官网在线版、web app、Hugging Face、ModelScope、Colab、PyPI、GitHub docs [Docs]。这降低了试用门槛。但本地部署涉及模型和依赖，且版本变化快；对个人研究可控，对生产 pipeline 需更多 pinning。

## 代码质量

评分 3/5。

local scan 文件数约 422，tests 存在但规模有限；workflow 有 python package/cli/mkdocs 等 [GH:local-scan]。项目活跃、release 频繁，但治理文件不足、未跑测试、质量评估更多依赖模型效果，因此给 3。

## 可扩展性

评分 3/5。

MinerU 可通过 Python/CLI/API 组合进 pipeline，服务化也可行；但本次未看到像 Docling 那样清晰的插件/统一 document schema 扩展叙事。深度定制可能需要读源码和跟随内部版本变化。

## 文档质量

评分 4/5。

官方 docs、README、中文 README、在线 demo 和技术报告入口较多 [Docs][GH:local-scan]。扣分点是：快速演进项目的文档可能滞后；许可证/部署/模型边界需要读多个入口才能清楚。

## 社区与成熟度

| 维度 | 评分 | 说明 |
|------|------|------|
| 社区活跃度 | 5/5 | 64k stars、5.4k forks、release 高频；可见度极高 [GH:api][GH:graphql]。 |
| 成熟度 | 3/5 | release 多且活跃，但项目 2024 年创建，版本/模型/部署路径仍在快速变化 [GH:api][GH:release]。 |

## 安全与风险

评分 3/5。

本次 repository advisory 查询为空 [GH:advisories]。主要风险：不可信文档解析攻击面、模型/依赖供应链、在线服务上传隐私，以及自定义许可证。LICENSE.md 的额外条款是 adoption 风险，不是漏洞，但会影响商业/服务化使用 [GH:local-scan]。

## 学习价值

高。MinerU 可作为“科学文献解析如何服务大模型预训练/RAG”的案例。对 Develata 最好的使用方式是实测：选 10 篇数学/概率论文，比较公式、定理环境、参考文献、表格、双栏的转换质量。
