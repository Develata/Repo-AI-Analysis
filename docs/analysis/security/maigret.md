---
title: "Maigret"
created: 2026-06-10
updated: 2026-06-10
type: repository-analysis
repo_url: "https://github.com/soxoj/maigret"
category: "security"
tags: [security, osint, username, python, cli, scraping, investigation]
previous_repo: ""
successor: ""
primary_language: "Python"
license: "MIT"
stars: 31791
forks: 2318
last_checked: 2026-06-10
last_verified: 2026-06-10
evidence: "GitHub REST metadata + README snapshot + shallow clone/local scan; not installed, built, or smoke-tested"
archived_reason: ""
docker_support: true
gpu_required: false
estimated_cpu: "Python CLI/network-bound OSINT 工具；CPU 通常不是瓶颈"
estimated_memory: "中低；大规模站点查询时主要受并发、网络和报告生成影响"
estimated_storage: "源码 156 files；报告输出、缓存和站点数据库另计"
status: active
ratings:
  capability: 4
  usability: 4
  performance: 3
  code_quality: 4
  documentation: 4
  community: 4
  maturity: 4
  extensibility: 4
  security: 3
  recommendation: 3
overall_score: 3.7
sources:
  - "[GH] https://github.com/soxoj/maigret — GitHub REST snapshot 2026-06-10: created_at=2020-06-27T14:16:42Z, pushed_at=2026-06-08T06:03:41Z, default_branch=main, commit=4b9b4689e930891fc1dbfd972bf8f1541d212f62, stars=31791, forks=2318, open issues=45, open PRs=7, license=MIT, primary_language=Python, topics=cli, cybersecurity, identification, information-gathering, infosec, investigation, open-source, osint, osint-framework, osint-python, pentesting, python, python3, reconnaissance, redteam, scraping, sherlock, social-network, socmint, username"
  - "[GH:readme] Local README snapshot /opt/data/tmp/repo_wiki_trending_2026-06-10/maigret/README.md checked 2026-06-10; analysis uses README-described capabilities only and did not install or run the project"
  - "[GH:local-scan] Shallow clone/local scan checked 2026-06-10: files=156, docs-ish files=47, test-ish files=30, root_files=['.dockerignore', '.gitignore', '.readthedocs.yaml', 'CHANGELOG.md', 'CODE_OF_CONDUCT.md', 'CONTRIBUTING.md', 'Dockerfile', 'Installer.bat', 'LICENSE', 'Makefile', 'README.md', 'README.zh-CN.md', 'TROUBLESHOOTING.md', 'cloudshell-tutorial.md', 'cookies.txt', 'example.ipynb', 'opensuse.txt', 'poetry.lock', 'pyproject.toml', 'pytest.ini', 'sites.md', 'snapcraft.yaml', 'wizard.py'], root_dirs=['.githooks', '.github', 'docs', 'maigret', 'pyinstaller', 'static', 'tests', 'utils'], manifests=['.github/workflows/build-docker-image.yml', '.github/workflows/codeql-analysis.yml', '.github/workflows/pyinstaller.yml', '.github/workflows/python-package.yml', '.github/workflows/python-publish.yml', '.github/workflows/update-site-data.yml', 'CODE_OF_CONDUCT.md', 'CONTRIBUTING.md', 'Dockerfile', 'LICENSE', 'README.md', 'README.zh-CN.md', 'pyproject.toml'], community_health=85, contributors_first_page=56"
  - "[GH:release] GitHub releases endpoint checked 2026-06-10: sampled latest tags=v0.6.1, main, dev, v0.6.0, v0.5.0"
  - "[GH:security-advisories] GitHub security-advisories endpoint checked 2026-06-10: returned 0; absence only means no advisory returned by this endpoint in this check, not proof of safety"
---

# Maigret

> Maigret 是 username-based OSINT 工具，用一个用户名在 3000+ sites 上收集公开账号线索并生成 dossier。
>
> **状态**: `active` · **总分**: 3.7/5 · **推荐度**: 3/5
> **验证边界**: 本轮只做 GitHub metadata、README 与 shallow clone/local scan；未安装、未构建、未运行、未复现实测 benchmark。

## 一句话总结

Maigret 是 username-based OSINT 工具，用一个用户名在 3000+ sites 上收集公开账号线索并生成 dossier。 [GH:readme]

## 总体评价

它是成熟度较高的 OSINT CLI，Docker/pyproject/CI/docs/tests 信号都在；但用途天然接近 scraping、reconnaissance 和个人信息聚合，推荐度必须被伦理、合规与授权边界压住。 截至 2026-06-10 的 GitHub 快照显示：stars=31791、forks=2318、open issues=45、open PRs=7、最近 pushed_at=2026-06-08T06:03:41Z [GH]。

评分采取保守口径：README/docs claim 只证明项目设计目标和公开描述，本轮没有实测运行效果；local scan 只证明文件结构、语言、workflow/test/docs 线索，不证明业务正确性、安全边界或性能数字 [GH:readme] [GH:local-scan]。

## 推荐度：3/5

**角色定位**：适合安全研究、CTF/授权调查、个人暴露面自查；不适合未经授权的人肉搜索、骚扰或批量画像。推荐度 3/5：作为 security 工具值得收录，但采用条件是合法授权和最小化数据处理。

**结论**：推荐度 3/5。可收录、可跟踪；是否采用取决于你的场景是否落在它的强项内，以及能否接受本轮未实测与项目自身边界。

## 优势

1. **README 定位明确**：按 username 从大量站点收集公开线索。 [GH:readme] [GH:local-scan]
2. Dockerfile、pyproject、CodeQL workflow、tests/docs 和中英文 README 可见。 [GH:readme] [GH:local-scan]
3. created_at=2020-06-27，近期仍有 v0.6.1 release，成熟度优于许多 trending 项目。 [GH:readme] [GH:local-scan]

## 劣势

1. OSINT 工具存在天然滥用风险，不能按普通 CLI 工具推荐。 [GH] [GH:readme]
2. 结果质量依赖目标站点规则、网络状态、rate limit 和误报处理。 [GH] [GH:readme]
3. 本轮未运行查询，不能验证 3000+ sites 覆盖质量。 [GH] [GH:readme]

---

## 适合什么场景

- 授权安全调查、CTF、红队/蓝队演练中的公开账号枚举。
- 个人 username 暴露面自查。
- 研究 OSINT 工具的数据源组织、报告生成与站点规则维护。

## 不适合什么场景

- 未经授权的人肉搜索、骚扰、批量画像。
- 需要法律证据级准确性的调查。
- 不能处理误报、隐私和合规边界的团队。

## 与类似项目对比

| 项目 | 定位 | 相对本项目 |
|------|------|-----------|
| Sherlock | 经典 username OSINT 工具 | Maigret 与 Sherlock 定位接近，Maigret 强调更多站点与 dossier/report 组织。 |
| WhatsMyName | OSINT username 枚举参照项目 | WhatsMyName 更偏数据源/枚举框架；Maigret 更偏可直接运行的 CLI/report 工具。 |
| SpiderFoot | 自动化 OSINT 平台 | SpiderFoot 更平台化、更宽；Maigret 更窄、更轻，聚焦 username。 |

上述项目按相邻生态做定位级对比，未在本条中按同一 10 维度框架重审；表格不构成优劣 benchmark。

---

## 它能做什么

按 username 查询大量站点，生成 dossier/report；topics 包含 osint、reconnaissance、scraping、username。 [GH:readme] [GH]

可见的仓库层面能力线索包括：primary_language=Python, files=156, docs-ish files=47, test-ish files=30, manifests 已记录在 source 层 [GH] [GH:local-scan]。

## 运行环境与资源占用

| 场景 | CPU | 内存 | 存储 | 说明 |
|------|-----|------|------|------|
| 最小 | Python CLI/network-bound OSINT 工具；CPU 通常不是瓶颈 | 中低；大规模站点查询时主要受并发、网络和报告生成影响 | 源码 156 files；报告输出、缓存和站点数据库另计 | 基于 README/依赖栈和仓库规模的启发式估计，非实测 |
| 推荐 | 按真实输入规模预留余量 | 按数据、索引、模型或 VM/container workload 调整 | 数据、缓存、构建产物或用户库另计 | 本轮未跑 benchmark |

- **运行时**：Python CLI；Dockerfile 与 pyproject 可见，网络 I/O 与目标站点可用性是关键。 [GH:readme]
- **操作系统**：未逐平台验证；以官方 README/文档声明为边界。
- **Docker**：frontmatter `docker_support=true` 表示 README/local scan 有 Dockerfile 或容器化线索支持该路径；本轮未 build image。
- **GPU**：frontmatter `gpu_required=false`；即便项目本身不要求 GPU，下游模型/数据处理仍可能需要 GPU。
- **外部依赖**：依赖、账号、模型权重、数据库、浏览器、代理或云服务需求需按实际安装路径复核。

## 上手体验

评分 4/5。

README 与中英文说明可见，CLI 工具属性强；真实使用需理解代理、rate limit 和误报。 依据：README 是否给出 quick start、安装/配置路径是否清晰，以及本轮是否看到 release、docs 和 workflow 线索 [GH:readme] [GH:release] [GH:local-scan]。

## 代码质量

评分 4/5。

Python 包结构、tests、CodeQL workflow、Dockerfile 与发布 workflow 可见；本轮未运行测试。 本分数是静态仓库质量判断，不等于功能正确性或覆盖率实测 [GH:local-scan]。

## 可扩展性

评分 4/5。

站点规则/数据源维护和报告链路使其具备扩展空间，但深度扩展仍要理解项目内部数据模型。 [GH:readme] [GH:local-scan]

## 文档质量

评分 4/5。

README、README.zh-CN、TROUBLESHOOTING、docs 和 sites.md 可见，文档信号较好。 [GH:readme] [GH:local-scan]

## 社区与成熟度

| 维度 | 评分 | 说明 |
|------|------|------|
| 社区活跃度 | 4/5 | stars=31791、forks=2318、open issues=45、open PRs=7 是点时可见度和维护负载信号，不单独证明质量 [GH] |
| 成熟度 | 4/5 | created_at=2020-06-27T14:16:42Z，sampled releases=v0.6.1, main, dev, v0.6.0, v0.5.0；成熟度按项目年龄、release/CI/test/docs 和稳定性声明综合判断 [GH] [GH:release] |

## 安全与风险

评分 3/5。

GitHub security-advisories endpoint 本轮返回 0 条；“无 advisory 返回”不是安全证明 [GH:security-advisories]。实际采用时至少检查：权限范围、账号/cookie/token 暴露面、依赖供应链、网络/文件访问边界、sandbox/隔离边界、license 与商业使用限制。

## 学习价值

适合学习 OSINT 工具如何组织站点规则、请求验证、报告生成和伦理边界。 学习时应保持“README claim vs 可审计事实”的边界感：star 数、trending 热度和组织品牌都不是生产采用证明 [GH] [GH:readme] [GH:local-scan]。
