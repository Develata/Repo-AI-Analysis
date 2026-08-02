---
title: "Zotero PDF2zh"
created: 2026-08-02
updated: 2026-08-02
type: repository-analysis
repo_url: "https://github.com/guaguastandup/zotero-pdf2zh"
category: "document-processing/document-conversion"
tags: ["document-processing", "zotero", "pdf", "translation", "pdf2zh", "llm", "python", "typescript", "plugin"]
previous_repo: ""
successor: ""
primary_language: "Python / TypeScript"
license: "AGPL-3.0"
stars: 5407
forks: 213
last_checked: 2026-08-02
last_verified: 2026-08-02
evidence: "GitHub REST/GraphQL/release/advisory metadata + README/docs evidence + local shallow-clone static scan and Python server syntax compile-only check; no Zotero runtime install, plugin build, server launch, PDF translation, Docker run, or security smoke test"
archived_reason: ""
docker_support: false
gpu_required: false
estimated_cpu: "2-4 cores for ordinary local server use; batch PDFs and local LLM/OCR paths can need more"
estimated_memory: "2-8GB heuristic depending on pdf2zh/pdf2zh_next engine, PDF size and translator; no measured runtime benchmark in this audit"
estimated_storage: "Repository diskUsage=106372KB; release server.zip=5116078 bytes and xpi=99656 bytes; runtime venvs, upstream packages, translated PDFs and optional models/cache are additional"
status: active
ratings:
  capability: 4
  usability: 3
  performance: 3
  code_quality: 2
  documentation: 4
  community: 3
  maturity: 2
  extensibility: 3
  security: 2
  recommendation: 3
overall_score: 2.9
sources:
  - "[GH] https://github.com/guaguastandup/zotero-pdf2zh"
  - "[GH:api] GitHub REST/gh snapshot 2026-08-02 UTC: full_name=guaguastandup/zotero-pdf2zh, archived=false, disabled=false, default_branch=main, created_at=2025-01-14, pushed_at=2026-05-26, stars=5407, forks=213, REST open_issues_count=80, primary language=Python, license=AGPL-3.0, isFork=false, diskUsage=106372KB"
  - "[GH:activity] GitHub GraphQL snapshot 2026-08-02 UTC: open issues=67, open PRs=13, releases=55, latest release v4.0.3 published 2026-04-11, default-branch commit history totalCount=526, HEAD=fccef4bcc6b9bfcba8a8e7be818f5798b4863f55 committed 2026-05-26; REST open_issues_count reconciles as 67 issues + 13 PRs"
  - "[GH:issues] GitHub issue list sampled 2026-08-02 UTC; open issue titles include #330 LR bilingual PDF object abnormal expansion, #329 English word line breaking, #328 formulas not preserving original format, #327 openai send_temperature field mismatch with upstream, #326 pdf2zh_next DeepSeek/SiliconFlow missed translation report, #322 token/cost concern due repeated translation/retry behavior, and #317 scanned documents; these are user reports, not independently reproduced defects"
  - "[GH:release] GitHub latest release checked 2026-08-02 UTC: v4.0.3 published 2026-04-11; assets include server.zip size=5116078 bytes and zotero-pdf-2-zh.xpi size=99656 bytes; release list shows many v3.x/v4.x releases and beta releases"
  - "[GH:community] GitHub contributors/community endpoints checked 2026-08-02 UTC: contributors first page returned 14 entries; community health=57; community profile detected README and AGPL license, but no Code of Conduct, CONTRIBUTING file, issue template or pull-request template"
  - "[GH:advisories] https://api.github.com/repos/guaguastandup/zotero-pdf2zh/security-advisories queried 2026-08-02 UTC; returned [] for published repository advisories in this check"
  - "[GH:readme] README.md at fccef4bcc6b9bfcba8a8e7be818f5798b4863f55 inspected 2026-08-02; documents Zotero 7/8 badges, usage of PDF2zh and PDF2zh_next inside Zotero, current version text server.zip v4.0.4 and plugin xpi v4.0.1, PR pause for desktop rebuild, uv/conda/server.zip setup, Python server on port 8890, Zotero add-on install, engine comparison, LLM API configuration, four right-click operations, multi-select/batch PDF translation note, update notes, community Docker/Homebrew paths, FAQ and AGPL/commercial-resale warnings"
  - "[Local:scan] Local shallow clone /opt/data/tmp/repo-wiki-pdf2zh-20260802/zotero-pdf2zh at commit fccef4bcc6b9bfcba8a8e7be818f5798b4863f55; total files=221, Python files=19, TypeScript files=18, Markdown files=61, workflows=2, test-ish files=0, AST-counted Python test functions=0; python3 -m compileall -q server exited 0 on Python 3.13, which is syntax compilation only"
  - "[Local:server] server/server.py, server/requirements.txt and server/utils/config.py inspected at fccef4bcc6b9bfcba8a8e7be818f5798b4863f55: Flask server version string=4.0.4, default port=8890, routes include /translate, /crop, /crop-compare, /compare, /translatedFile/<filename>, /health, /events, /api/history and /api/config; server accepts base64 PDF JSON, writes to translated/, invokes pdf2zh/pdf2zh_next through subprocess/venv helpers, runs Flask with host='0.0.0.0', has commonpath check for translatedFile downloads, no authentication layer found, requirements are flask/toml/pypdf/argparse/PyMuPDF/packaging"
  - "[Local:plugin] plugin/package.json, manifest.json, zotero-plugin.config.ts and plugin/src/modules inspected at fccef4bcc6b9bfcba8a8e7be818f5798b4863f55: package version=4.0.3, license=AGPL-3.0-or-later, build uses TypeScript + zotero-plugin-scaffold + zotero-plugin-toolkit; manifest supports Zotero strict_min_version=6.999 and strict_max_version=9.*; plugin registers preferences and item right-click menu actions translate/crop/compare/crop-compare; processWorker builds tasks from selected Zotero items and calls FileProcessor.processBatch(tasks); plugin reads PDF attachments as base64, POSTs JSON to configured serverUrl, fetches translated files and imports them back as Zotero attachments; LLM API configs are serialized to Zotero preferences as JSON"
  - "[Local:ci] .github/workflows inspected at fccef4bcc6b9bfcba8a8e7be818f5798b4863f55: ci.yml installs plugin npm deps, runs prettier/eslint lint:check and npm run build; release.yml builds and releases the plugin XPI and uploads root server.zip; no automated Python server tests, Zotero integration tests, or end-to-end PDF translation tests were found in this scan"
  - "[Local:docs] README.md plus docs/en/guide/{quick-start,installation,configuration,faq/plugin-features}.md inspected at fccef4bcc6b9bfcba8a8e7be818f5798b4863f55: docs require Python 3.12 and Zotero 7/8, recommend uv, instruct downloading server.zip, running python server.py, installing XPI, configuring Python Server IP default http://127.0.0.1:8890, selecting pdf2zh or pdf2zh_next, configuring LLM APIs, using web progress monitor, and note scanned PDFs need OCR before translation in the English FAQ"
  - "[Docs:site-check] web_extract checks on 2026-08-02 for https://zotero-pdf2zh.github.io/, /guide/, /guide/configuration.html and /guide/usage.html returned 404 page not found; local repository docs/README were therefore used as the primary documentation evidence in this audit"
  - "[Local:license] LICENSE inspected at fccef4bcc6b9bfcba8a8e7be818f5798b4863f55; AGPL-3.0 text includes the network-interaction source-availability rationale; package.json says AGPL-3.0-or-later"
  - "[GH:pdfmathtranslate-next] https://github.com/PDFMathTranslate-next/PDFMathTranslate-next and this same-batch local wiki analysis provide upstream pdf2zh_next positioning; README in Zotero repo still links an older PDFMathTranslate/PDFMathTranslate-next path in some places"
  - "[L1:pdfmathtranslate] Local wiki comparison source: /opt/data/wiki/github-repo-wiki/document-processing/document-conversion/pdfmathtranslate.md"
  - "[L1:markitdown] Local wiki comparison source: /opt/data/wiki/github-repo-wiki/document-processing/document-conversion/markitdown.md"
---

# Zotero PDF2zh

> Zotero PDF2zh 是把 PDF2zh / PDFMathTranslate-next 接入 Zotero 的桌面插件 + 本地 Python server 组合，让用户从 Zotero 条目右键生成翻译、裁剪和双语对照 PDF。
>
> **状态**: `active` · **总分**: 2.9/5 · **推荐度**: 3/5
> **核验版本**: repository main `fccef4bcc6b9bfcba8a8e7be818f5798b4863f55`；README text `server.zip v4.0.4` / `xpi v4.0.1`；latest GitHub release `v4.0.3`；快照 2026-08-02
> **验证边界**: 本轮做了 GitHub/API、README/docs、release 与 local static scan，并完成 server syntax compile-only；未安装 Zotero、未构建 XPI、未启动 server、未翻译 PDF、未运行 Docker 或做安全 smoke test。

## 一句话总结

Zotero PDF2zh 适合已经把 Zotero 作为论文库、希望右键生成中文/双语 PDF 的个人研究者；它的价值在 Zotero 工作流集成，而不是比 PDFMathTranslate-next 本身更强的翻译内核或服务化安全。

## 总体评价

Zotero PDF2zh 的产品形态是“Zotero 插件 + 本地 Flask server”。插件在 Zotero item menu 注册 `Translate PDF`、`Crop PDF`、`Compare PDF`、`Crop-Compare` 四类操作，读取 Zotero PDF attachment 为 base64，POST 到本地 server，再把 server 输出的 PDF 拉回并导入 Zotero attachment [Local:plugin]。server 侧再根据配置调用 `pdf2zh` 或 `pdf2zh_next`，并提供 `/health`、SSE progress、history/config API 和 translated file download [Local:server]。

因此它真正解决的是论文阅读工作流摩擦：不用离开 Zotero，就能把论文翻译结果回挂到条目上；还把 LLM API 配置、engine 切换、qps/pool size、双语/裁剪选项和进度页面放到用户可见界面中 [GH:readme][Local:docs]。对个人科研阅读，这是有价值的 product glue。

但它的翻译质量、PDF 解析质量和 OCR 边界本质上来自上游 PDF2zh / PDFMathTranslate-next；插件本身又增加了本地 server、Zotero prefs、base64 PDF 传输、API key 持久化和 Flask 端口暴露等工程风险 [Local:server][Local:plugin]。当前 open issues 也集中在公式格式、漏翻译、PDF 膨胀、token cost、API 字段映射和扫描件等实际使用问题上 [GH:issues]。所以它适合“个人本地可信论文库”的 workflow enhancement，不适合未经隔离地变成团队共享服务。

## 推荐度：3/5

**目标用户**：Zotero 重度用户、个人研究者、学生，以及愿意维护本地 Python server/uv 环境并接受输出抽查的人。

推荐度给 3：如果你已经用 Zotero 管论文，它的边际收益很直接——右键翻译、裁剪、对照、批量处理、结果回挂，省掉手动导出/导入 PDF 的琐碎步骤 [Local:plugin][GH:readme]。但安装链条较长，版本信息不完全单一，server 默认绑定 `0.0.0.0` 且未见鉴权，测试覆盖弱，问题积压与上游质量风险明显，因此不能给 4/5 的“放心采用” [GH:issues][Local:server][Local:ci]。

建议把它当个人桌面增强件：只绑定 localhost 或防火墙限制端口，只处理可信 PDF，API key 使用低额度/可撤销 key，先用少量论文测通，再决定是否纳入日常阅读。团队共享、远程 server 或敏感文档处理必须先补安全设计和合规审查。

## 优势

1. **贴近 Zotero 工作流**：从 Zotero 条目/附件右键触发翻译，并把结果作为附件导回 Zotero [Local:plugin]。
2. **覆盖常见论文阅读输出**：翻译 PDF、裁剪 PDF、双语对照、双栏裁剪对照都在菜单和 README 中解释 [GH:readme][Local:plugin]。
3. **兼容两代上游引擎**：可选 `pdf2zh` 旧版和 `pdf2zh_next` 新版，文档列出速度、字体、glossary、table、OCR compatibility 等差异 [GH:readme][Local:docs]。
4. **普通用户引导充分**：README 从 Python/Zotero、uv/conda、server.zip、server.py、XPI 安装、插件设置到 FAQ 写得很长 [GH:readme][Local:docs]。
5. **有进度与历史页面**：本地 server 提供 Web progress monitor、SSE events、history/config API，缓解长 PDF 翻译时“无反馈”的体验问题 [GH:readme][Local:server]。
6. **发行物很轻**：latest release 的 server.zip 和 XPI 都不大，用户主要成本在 Python/venv/upstream package/assets，而不是插件包本身 [GH:release]。

## 劣势

1. **安装链条比普通 Zotero 插件重**：用户不仅安装 XPI，还要下载 server.zip、准备 Python 3.12/uv 或 conda、保持 server.py 运行并配置端口 [GH:readme][Local:docs]。
2. **质量风险来自两层**：上游 PDFMathTranslate-next 的版面/翻译问题 + 插件/server 的文件传输、配置映射、回挂附件逻辑都会影响最终体验 [GH:issues][GH:pdfmathtranslate-next]。
3. **测试覆盖薄弱**：local scan 没找到 test-ish source files；CI 只覆盖 plugin lint/build，没有 Python server 或 Zotero end-to-end tests [Local:scan][Local:ci]。
4. **安全边界偏弱**：server 使用 Flask、默认 `host='0.0.0.0'`，未见鉴权；插件会把 PDF 和 LLM API config 发给 configured serverUrl，LLM API configs 持久化在 Zotero preferences 中 [Local:server][Local:plugin]。
5. **版本叙事不完全一致**：README 写 `server.zip v4.0.4 | 插件 xpi v4.0.1`，plugin/package.json 是 4.0.3，latest GitHub release 是 v4.0.3；用户需要确认自己拿到的是哪一组 artifact [GH:readme][GH:release][Local:plugin]。
6. **维护状态有不确定性**：README 顶部说明桌面端构建中、改动较大、暂不接收新的 PR；这对 roadmap 是正信号，对外部贡献/稳定性则是采用风险 [GH:readme]。

---

## 适合什么场景

- Zotero 7/8 用户希望在文献库内直接生成中文或双语 PDF。
- 个人论文阅读、课程/组会材料、非敏感文档的本地翻译与附件回挂。
- 想把 `pdf2zh_next` 的 glossary/table/OCR compatibility/dual mode 等能力放进 Zotero UI。
- 需要处理多选 Zotero 条目，并通过 progress window / web progress monitor 看进度 [GH:readme][Local:plugin]。
- 愿意自己维护 Python server、uv/conda 环境、translator API key 和上游包版本。

## 不适合什么场景

- 不使用 Zotero，只想命令行或 WebUI 翻译 PDF；此时直接用 PDFMathTranslate-next 更简单 [GH:pdfmathtranslate-next]。
- 公网或团队共享 server，尤其接收他人 PDF/API key，但没有鉴权、TLS、端口隔离、审计和 secret 管理。
- 处理敏感论文、内部材料、未公开 manuscript，却会把内容发往第三方 LLM provider。
- 需要可靠自动化测试、企业级 release notes、稳定 API 和长期支持承诺的组织部署。
- 对扫描件/OCR、公式位置和版面一致性要求很高且不能人工校对；英文 FAQ 也提示扫描 PDF 需先 OCR [Local:docs]。
- 无法接受 AGPL 对修改、分发和网络服务场景可能带来的合规义务 [Local:license]。

## 与类似项目对比

| 项目 | 定位 | 相对本项目 |
|------|------|-----------|
| PDFMathTranslate-next | 上游 v2/BabelDOC PDF 翻译工具 | PDFMathTranslate-next 是翻译内核/CLI/WebUI；Zotero PDF2zh 是把它接入 Zotero 的 workflow layer [GH:pdfmathtranslate-next] |
| PDFMathTranslate | 上游 v1 PDF 翻译工具 | PDFMathTranslate v1 是 legacy engine 选择；Zotero PDF2zh 同时照顾 v1 的字体/速度等旧能力和 v2 的 glossary/table/OCR compatibility [L1:pdfmathtranslate][GH:readme] |
| MarkItDown | 多格式转 Markdown 的轻量 ingestion utility | MarkItDown 面向 LLM/RAG text ingestion；Zotero PDF2zh 面向论文阅读与 PDF 翻译结果回挂，不是 Markdown extraction [L1:markitdown] |

上述项目按 `document-processing/document-conversion` 同类范围做定位级对比；Zotero PDF2zh 与前两者更像“上游内核 vs Zotero workflow wrapper”的相邻关系，不是同一层的一对一竞品。

---

## 它能做什么

capability 评分 4/5。

Zotero PDF2zh 能：

- 在 Zotero item menu 中注册 PDF2zh 菜单，支持 translate、crop、compare、crop-compare 四类操作 [Local:plugin]；
- 读取 Zotero 条目或附件中的 PDF，转为 base64 发给 configured Python server，并把翻译结果重新导入 Zotero attachment [Local:plugin]；
- 在 server 端调用 `pdf2zh` 或 `pdf2zh_next`，生成 mono、dual、mono-cut、dual-cut、compare、crop-compare 等结果 [GH:readme][Local:server]；
- 在插件设置中配置 server URL、engine、source/target language、qps、pool size、输出选项、字体路径和 LLM API 配置 [Local:docs][Local:plugin]；
- 通过本地 web 页面查看 server 配置、实时进度、历史记录、预览和下载翻译文件 [GH:readme][Local:server]；
- 使用 uv/conda 管理两个上游 engine 的虚拟环境，也可走 Windows EXE、community Docker 或 Homebrew/Linuxbrew 路径 [GH:readme][Local:docs]。

不给 5：它的核心翻译能力依赖上游，自己主要是 workflow glue；OCR/版面/公式/表格质量不能由插件层保证，且 issue 样本显示仍有实际失败模式 [GH:issues][Local:docs]。

## 运行环境与资源占用

以下为容量规划估计，不是 measured benchmark。实际资源取决于 PDF 页数、图片分辨率、上游 engine、BabelDOC assets、translator provider、本地模型和并发设置。

| 场景 | CPU | 内存 | 存储 | 说明 |
|------|-----|------|------|------|
| 个人本地单 PDF / 云端 translator | 2-4 cores | 2-4GB | server.zip + XPI 很小，venv/assets/output 另计 | latest release server.zip=5116078 bytes, XPI=99656 bytes [GH:release] |
| 批量 Zotero 条目 / 大 PDF | 4-8 cores | 4-8GB+ | translated/、temp、history 和多个输出 PDF 会增长 | plugin 传 base64，server 调用上游 engine；本轮未测峰值 [Local:plugin][Local:server] |
| 本地 LLM/Ollama/Xinference | 取决于模型 | 取决于模型 | 模型权重另计 | 插件/server 不强制 GPU，但本地 translator 的实用速度可能需要 GPU |
| Docker/community 部署 | 2-4+ cores | 4-8GB | 取决于社区镜像/compose | README 有 Docker 路径，但本轮未验证 repository-owner official image，frontmatter 不计 official docker_support [GH:readme] |

- **运行时**：文档推荐 Python 3.12、Zotero 7/8；plugin manifest strict range 为 Zotero `6.999` 到 `9.*` [Local:docs][Local:plugin]。
- **操作系统**：面向 Zotero 桌面端；README 给 Windows/macOS/Linux 终端说明，Windows 用户还被建议管理员运行且不要放 C 盘 [GH:readme][Local:docs]。
- **Docker**：`docker_support: false` 按 repo-wiki 口径表示“未验证 repository-owner official Docker image”。README 有 community DockerHub/目录方法，可作为替代部署线索但不等同于主线官方 image [GH:readme]。
- **GPU**：不要求；上游本地模型路径另算。
- **外部依赖**：Zotero、Python/uv 或 conda、Flask/PyMuPDF/pypdf、pdf2zh/pdf2zh_next、translation provider API、本地或云端 LLM 服务 [Local:server][Local:docs]。

performance 评分 3/5。插件包本身轻，但整体路径会复制/编码 PDF、启动 Flask server、调用上游 translation pipeline、等待 provider/network 和回写附件；issue 中也有 token/cost、重复翻译和 PDF 膨胀类报告。本轮未跑 benchmark，按中性分处理 [GH:issues][Local:plugin][Local:server]。

## 上手体验

评分 3/5。

README 对新手非常友好，几乎把安装 Python、打开终端、安装 uv/conda、下载 server.zip、启动 server.py、安装 XPI、检查连接、配置 LLM API、选择翻译选项都写了一遍 [GH:readme][Local:docs]。对中文 Zotero 用户，这种“保姆级文档”是优势。

但上手复杂度客观存在：普通 Zotero 插件通常安装 XPI 即可；这里还要维护 Python server、venv、上游 engine、端口、防火墙、API key、qps/pool size 和版本更新。README/文档还存在 v4.0.4/v4.0.3/v4.0.1 的 artifact 描述差异，外部 docs site root 在本轮 extractor 中返回 404，只能依赖 repo-local docs [GH:readme][GH:release][Docs:site-check]。因此 usability 是 3：文档努力抵消复杂性，但不能消除复杂性。

## 代码质量

评分 2/5。

有一些正信号：插件基于 zotero-plugin-scaffold / zotero-plugin-toolkit，TypeScript build/lint workflow 存在；server.py 在本机 Python 3.13 上 syntax compile-only 通过；server 的 `/translatedFile/<filename>` 有 commonpath 防目录穿越检查 [Local:plugin][Local:ci][Local:scan][Local:server]。

但按 repo-wiki 评分边界，代码质量只能给 2：local scan 没有发现 test-ish source files 或 Python test functions；CI 没有 server tests、Zotero integration tests 或 end-to-end PDF translation tests；`server.py` 是 1160 行级 monolithic Flask/script 混合文件，直接处理路由、配置、venv、subprocess、输出和启动检查；插件端把 LLM API configs 写入 Zotero prefs，server 端再写入 config JSON/TOML，跨层 contract 靠约定而非强 schema/test 约束 [Local:scan][Local:server][Local:plugin][Local:ci]。这对个人项目可接受，但对长期维护和生产可靠性偏弱。

## 可扩展性

评分 3/5。

扩展点主要来自配置和上游：用户可以配置不同 LLM service、API URL/key/model、qps/pool size、pdf2zh vs pdf2zh_next、字体、OCR compatibility、table translation 等；server 侧有 config_map 把插件参数映射到上游配置 [Local:docs][Local:server]。Zotero 插件本身也可通过 TypeScript 修改菜单、偏好页和文件处理流程 [Local:plugin]。

不给 4/5：它没有独立稳定 plugin API 或第三方扩展机制；新增 provider/选项通常需要同时改 UI、prefs、config_map、server 和上游配置；深度定制更像 fork。README 还写明桌面端重构中暂不接收新 PR，外部扩展协作面有限 [GH:readme]。

## 文档质量

评分 4/5。

文档对目标用户足够详细：README 和 docs/en/guide 覆盖 quick start、installation、configuration、FAQ、engine 对比、translation service、qps/pool size、server progress monitor、四个右键操作和多种安装方法 [GH:readme][Local:docs]。中文 README 尤其面向真实用户，把 QQ 群提问规则、常见报错、更新和服务选择写得很细。

扣分点是信息架构和版本同步：README 指向 GitHub Pages，但本轮 extractor 对 root/old guide URLs 返回 404；local docs 英文页也有 “Coming Soon” 或旧 v4.0.0 下载链接；version 文本在 README、package.json、latest release 之间不完全一致 [Docs:site-check][Local:docs][GH:readme][GH:release][Local:plugin]。因此文档覆盖主要功能，但不是可审计、单一、完全同步的 5/5。

## 社区与成熟度

| 维度 | 评分 | 说明 |
|------|------|------|
| 社区活跃度 | 3/5 | 5,407 stars、213 forks、contributors first page 14、67 open issues、13 open PRs，中文用户群和 issue 反馈很多；但 community health=57，未检测到 Code of Conduct/CONTRIBUTING/templates，README 又说明桌面端重构中暂不接收新 PR，不能按“高响应多贡献者社区”给 4 [GH:api][GH:activity][GH:community][GH:readme]。 |
| 成熟度 | 2/5 | 仓库创建于 2025-01，release 数多且已到 v4.x，但版本/文档叙事仍在快速变化，当前还有大量实际使用 bug，desktop rewrite coming，测试覆盖薄弱。按“活跃但破坏性/重构风险仍高”的 2 分处理 [GH:activity][GH:issues][GH:readme][Local:ci]。 |

该项目的 maturity 不应由 star 数或 release 数直接抬高。对采用者，真正重要的是“我的 Zotero + server + 上游 engine + provider 配置”是否稳定，而这需要本机试运行和小 corpus 回归。

## 安全与风险

评分 2/5。

repository advisory endpoint 返回 `[]` 只表示本次未查到 published GHSA，不是安全证明 [GH:advisories]。主要风险来自本地 server 与凭据/文档流：server 默认 `host='0.0.0.0'`，没有发现认证层；插件会把 PDF base64、server config 和激活的 LLM API 配置发送到 configured serverUrl；LLM API configs 被序列化保存到 Zotero preferences；server 再把相关配置写入 JSON/TOML 给上游 engine 使用 [Local:server][Local:plugin]。

项目也有局部防护：download translatedFile 使用 commonpath 防目录穿越，插件检查 PDF attachment 是否存在且扩展名为 `.pdf`，server 有端口/目录权限检查和 `/health` [Local:server][Local:plugin]。但这些不足以支撑多人/公网/敏感材料场景。只要 server 绑定到非 loopback 或被同网段访问，未授权用户就可能调用 translation endpoints、消耗 API quota、读取可下载输出或提交恶意/巨大 PDF；PDF parser 与 PyMuPDF/pypdf 也天然需要 hostile-document isolation。

建议：只监听 `127.0.0.1` 或由防火墙限制端口；不要把 serverUrl 指向不可信远端；API key 使用低额度可撤销 key；敏感论文不要发云端 translator；定期清理 `translated/` 和配置文件；如要共享，先加认证、TLS、大小/页数/并发限制、任务 timeout、日志脱敏、secret store、容器低权限和 AGPL 合规审查 [Local:license]。

## 学习价值

较高。Zotero PDF2zh 很适合学习“科研桌面工作流胶水层”的工程取舍：如何在不重写 PDF translation engine 的情况下，把 Zotero attachment、Python server、LLM provider、进度回传、历史记录、文件回挂和用户文档接起来；也能看到缺测试、跨层配置映射、端口安全和版本同步如何成为真实采用风险。

对 Develata，建议把它和 PDFMathTranslate-next 分开评价：PDFMathTranslate-next 决定翻译内核质量，Zotero PDF2zh 决定 Zotero workflow 摩擦。最有价值的实验是选一组真实 Zotero 条目，比较“直接用 PDFMathTranslate-next WebUI/CLI”与“Zotero 插件右键”在安装耗时、失败恢复、附件命名、输出质量、token 成本、隐私边界和后续笔记工作流上的差异。
