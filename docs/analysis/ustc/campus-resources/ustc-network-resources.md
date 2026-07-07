---
title: "USTC-Network-Resources"
created: 2026-07-07
updated: 2026-07-07
type: repository-analysis
repo_url: "https://github.com/zzh1996/USTC-Network-Resources"
category: "ustc/campus-resources"
tags: [ustc, campus-network, student-guide, documentation, resources]
previous_repo: ""
successor: ""
primary_language: "Markdown"
license: "MIT"
stars: 342
forks: 44
last_checked: 2026-07-07
last_verified: 2026-07-07
evidence: "GitHub API + README/local scan; no live verification of campus resource URLs"
archived_reason: ""
docker_support: false
gpu_required: false
estimated_cpu: "none for readers; static markdown document"
estimated_memory: "negligible"
estimated_storage: "repository is tiny; two tracked files in local scan"
status: active
ratings:
  capability: 4
  usability: 5
  performance: 5
  code_quality: 3
  documentation: 4
  community: 3
  maturity: 3
  extensibility: 4
  security: 4
  recommendation: 4
overall_score: 3.9
sources:
  - "[GH] https://github.com/zzh1996/USTC-Network-Resources"
  - "[GH:api] GitHub API snapshot 2026-07-07 via gh repo view: created_at=2019-01-09T08:18:37Z, pushed_at=2022-04-14T15:57:32Z, updated_at=2026-07-02T20:42:39Z, default_branch=master, stars=342, forks=44, watchers=12, primary_language=null, license=MIT, latest_release=null, has_issues=true, has_wiki=true"
  - "[GH:issues-prs] GitHub Search API queried 2026-07-07: open issues=3, open PRs=0; sampled issues #21 中国科大学生FTP/主页服务器不再对新用户开通, #20 vi.ustc.edu.cn（科大文化）网页无法访问, #19 开源插件-自动填写统一身份验证码-主要方便非校园网环境"
  - "[GH:advisories] GitHub repository security-advisories API queried 2026-07-07; returned []"
  - "[GH:local-scan] Local shallow clone /opt/data/tmp/repo-wiki-ustc-2026-07-07/repos/USTC-Network-Resources at commit 946814415e553e07d6c57a88941241acf507ee2e dated 2022-04-14; git ls-files=2, markdown/tex/rst/adoc files=1, workflows=0, test/spec-ish paths=0; root files are LICENSE and README.md"
  - "[GH:readme] README.md local scan 2026-07-07; states original article was published at https://sqrt-1.me/?p=282 in 2016-01, some content is outdated, and the document was migrated to GitHub so people can maintain it via Issues and PRs; sections cover network access, websites, mobile apps, education discounts, miscellaneous tips, and closed services/websites"
  - "[GH:readme-network] README.md local scan 2026-07-07; network section covers 网络通, wired/wireless access, ustcnet/USTCnet, ustc-guest, eduroam, ustc-Internet, outlet selection, hotspot map, network status and speed test links"
  - "[GH:readme-sites] README.md local scan 2026-07-07; website section lists USTC homepage, mail, 网络通 service center, library, teaching systems, passport, licensed software, REC, personal homepage/staff homepage, BBS, mirrors, GitLab services, icourse.club, ustc.life, campus portal, teaching office, Blackboard, OJ, WEB VPN, VLAB and other resources"
  - "[GH:readme-closed] README.md local scan 2026-07-07; closed-services section includes cloud.ustc.edu.cn, blog.ustc.edu.cn, bookface.ustc.edu.cn, grid.ustc.edu.cn and other historical resources; this supports treating the document as historically useful but requiring freshness checks"
  - "[GH:license] LICENSE local scan 2026-07-07; MIT License, copyright 2021 Zihan Zheng"
---

# USTC-Network-Resources

> 一份面向中国科大学生的校园网络资源清单：价值在“新生/低年级同学少走弯路”，风险在“很多校园服务会迁移、停用或只在校内可访问”。
>
> **状态**: `active` · **总分**: 3.9/5 · **推荐度**: 4/5

## 一句话总结

USTC-Network-Resources 适合作为 USTC 新生和低年级同学认识校园网络服务的索引，但使用任何具体链接前都应做当年可用性复核。

## 总体评价

这个 repo 本质上是一篇校园生活/网络资源 guide，而不是软件项目。README 自述原文发表于 2016 年 1 月，部分内容已经过时，因此迁移到 GitHub，希望大家通过 Issue 和 PR 共同维护 [GH:readme]。这种边界说明很诚实：它不是官方实时门户，而是学生经验沉淀。

内容覆盖面相当广：网络通、有线/无线、eduroam、出口选择、热点统计、测速；官网、邮箱、图书馆、教务、统一身份认证、正版软件、REC、个人主页、BBS、镜像站、GitLab、评课社区、USTC 导航、VLAB 等；还列出若干已经关闭的服务和网站 [GH:readme-network][GH:readme-sites][GH:readme-closed]。对“刚来科大，不知道有哪些资源”的同学，这类列表的边际效用很高。

主要问题是 freshness。GitHub API 显示最近一次 push 在 2022-04-14；当前 open issues 里已有“学生 FTP/主页服务器不再对新用户开通”“科大文化网页无法访问”等过时信号 [GH:api][GH:issues-prs]。因此它适合被收录在 `ustc` 分支下帮助学弟学妹，但推荐语必须保守：把它当资源发现入口，不要当官方状态源。

## 推荐度：4/5

**目标角色**：USTC 新生、低年级本科生、刚入学研究生，以及想补齐校园网络服务常识的人。推荐度给 4，因为它非常适合“先知道有这些东西”，尤其是网络通、eduroam、镜像、图书馆数据库、正版软件、REC、评课社区等；但不能给 5，因为很多服务的 URL、权限、开放状态和政策都可能已经变化。

## 优势

1. **校园语境强**：不是泛泛的学生资源清单，而是 USTC 具体服务、域名、使用方式和历史经验 [GH:readme]。
2. **覆盖面广**：网络、网站、移动应用、教育优惠、其他技巧、已关闭服务都有章节 [GH:readme-network][GH:readme-sites][GH:readme-closed]。
3. **零门槛阅读**：一个 README 即可读，不需要安装、编译或账号登录才能先了解 [GH:local-scan]。
4. **维护入口开放**：迁移到 GitHub 的目的就是让读者通过 issue/PR 更新过时信息 [GH:readme]。
5. **历史价值**：即便某些服务关闭，仍能帮助理解 USTC 校园信息基础设施的演化。

## 劣势

1. **更新不够活跃**：最近 push 为 2022-04-14，对校园服务这种高变内容偏旧 [GH:api]。
2. **可用性未自动验证**：repo 只有 README 和 LICENSE，没有 link checker、CI 或定期抓取 [GH:local-scan]。
3. **部分内容已明确过时**：README 开头已说部分内容过时；open issues 也报告了若干服务变化 [GH:readme][GH:issues-prs]。
4. **不是官方来源**：它能提示“可能有这个资源”，但最终政策、费用、权限、入口必须以学校或服务运营方现行页面为准。

## 适合什么场景

- 新生入学前后建立校园网络服务地图。
- 不知道 USTC 有哪些镜像、GitLab、BBS、评课、图书馆数据库、正版软件和校内服务时，快速扫一遍关键词。
- 老生/校友回忆或核对过去校园服务演化。
- 社群维护：发现链接失效或政策变化后开 issue/PR。

## 不适合什么场景

- 查询当前网络通资费、账号政策、校内系统权限等需要实时准确的信息。
- 安全敏感操作，例如统一身份认证、校园网账号、VPN、邮箱等；这些应直接看官方入口。
- 需要完整覆盖所有 USTC 服务的官方导航。
- 把文中“已关闭/历史服务”当作仍可申请的新生福利。

## 与类似项目对比

| 项目 | 定位 | 相对本项目 |
|------|------|------------|
| USTC 官方门户 / i.ustc.edu.cn | 官方服务入口 | 权威性与实时性更强，但不一定有学生经验解释 [GH:readme-sites] |
| ustc.life | 学生运营常用网址导航 | 更像导航页；本项目更像解释型长文 [GH:readme-sites] |
| LUG wiki / mirrors / GitLab 说明 | 技术服务专项文档 | 单项更准确；本项目胜在把多个校园资源放到一张地图里 [GH:readme-sites] |
| 新生群/论坛帖子 | 当年经验交流 | 更新可能更快但分散；本项目更适合沉淀结构化清单 |

这些对比是定位对比，没有逐一按 10 维评分审计。

## 它能做什么

它能提供 USTC 校园网络与资源的索引。网络部分解释网络通、有线/无线、eduroam、出口选择、热点统计、测速；网站部分列出官网、邮箱、网络通服务中心、图书馆、教务系统、统一身份认证、正版软件、REC、主页服务、BBS、镜像、GitLab、评课社区、USTC 导航、教学平台、OJ、VLAB 等 [GH:readme-network][GH:readme-sites]。

它还把若干已关闭或历史服务单列出来，提醒读者不要把旧文章中的所有链接都当成当前可用资源 [GH:readme-closed]。

## 运行环境与资源占用

这是静态 Markdown 文档，读者只需要浏览器或 GitHub 页面；本地浅扫显示 repo 只有 `README.md` 和 `LICENSE` 两个 tracked files [GH:local-scan]。资源效率自然是 5/5。

如果未来要提高质量，最值得加的不是复杂软件栈，而是轻量 link checker 或定期人工审计清单。

## 上手体验

上手体验给 5。打开 README 即可读，目录按“网络接入 / 网站 / 手机 APP / 教育优惠 / 其他 / 已关闭服务”组织，适合新生粗读 [GH:readme]。

真正的使用门槛不在 repo，而在校园服务本身：很多服务需要校内网、统一身份认证、学生身份或特定账号权限。

## 代码质量

代码质量按非软件文档项目解释，给 3。优点是结构简单、纯 Markdown、MIT license，任何人都能 fork 或 PR；缺点是没有自动链接检查、没有数据结构化、没有 CI、没有更新时间字段到条目级别 [GH:local-scan][GH:license]。

对未来维护者来说，最小改进是给每条资源增加“最后核验日期 / 是否官方 / 是否校内访问 / 适用人群”这样的轻量字段。

## 可扩展性

可扩展性给 4。Markdown + MIT license 使得 fork、复制、改写和 PR 都很容易 [GH:license]。作为社区资源索引，这种低技术门槛本身就是优点。

没有给 5，因为内容目前是长文列表，不是结构化数据；当条目继续增多时，分类、去重、过期标记和链接检查会变困难。

## 文档质量

文档质量给 4。作为读者文档，它覆盖广、解释口吻接近学生经验，很多条目不仅给 URL，还说明“什么时候有用”；README 开头也明确警告部分内容已过时 [GH:readme]。

扣分点是缺少逐项 freshness 标记。校园服务生命周期短，单靠一篇长文很难让读者区分“仍强推荐”“需要校内访问”“已迁移”“只具历史价值”。

## 社区与成熟度

| 维度 | 评分 | 说明 |
|------|------|------|
| 社区活跃度 | 3/5 | stars=342、forks=44，对校园资源文档不低；但 open PRs=0，open issues=3，维护节奏较慢 [GH:api][GH:issues-prs]。 |
| 成熟度 | 3/5 | 原始文章历史长，GitHub repo 创建于 2019；但最近 push 停在 2022，且校园服务变化快 [GH:api][GH:readme]。 |

## 安全与风险

安全给 4。作为静态文档本身攻击面很小，GitHub repository advisories 本轮返回空只表示未发现项目级 GHSA [GH:advisories]。

实际风险在读者点击和账号操作：网络通、统一身份认证、邮箱、VPN、校园软件等都涉及账号或网络权限。应优先从学校官方域名进入，不要在第三方页面输入密码；对 README 中的历史链接尤其要核验域名与证书 [GH:readme-sites]。

## 学习价值

学习价值主要是校园生存指南式的。对后来学弟学妹，它能把“原来科大有这么多资源”这件事提前显影；对维护者，它也提醒我们：校园公共知识如果只散落在群聊和旧博客里，很快会失传。把它放进 `ustc` 分支，是给未来的人留一盏灯。