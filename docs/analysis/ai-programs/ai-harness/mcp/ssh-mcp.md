---
title: "ssh-mcp"
created: 2026-10-16
updated: 2026-10-16
type: repository-analysis
repo_url: "https://github.com/tufantunc/ssh-mcp"
category: "ai-programs/ai-harness/mcp"
tags: [mcp, ssh, remote-execution, policy, audit, typescript]
primary_language: "TypeScript"
license: "MIT"
stars: 808
forks: 128
last_checked: 2026-10-16
last_verified: 2026-10-16
evidence: "源码抽查 + GitHub 元数据与安全公告 + 本地 build/typecheck、单元及属性测试、纯策略探针；未连接真实 SSH 主机，未运行集成测试"
docker_support: false
gpu_required: false
estimated_cpu: "未测量；本地 Node.js 进程，无 GPU 需求"
estimated_memory: "未测量；受连接、会话与输出上限影响"
estimated_storage: "未测量；依赖、审计日志与传输文件需单独预算"
status: active
ratings:
  capability: 4
  usability: 3
  performance: 3
  code_quality: 4
  documentation: 3
  community: 3
  maturity: 3
  extensibility: 4
  security: 2
  recommendation: 3
overall_score: 3.2
sources:
  - "[GH] https://github.com/tufantunc/ssh-mcp ; gh repo view/API checked 2026-10-16: 808 stars, 128 forks, 1 open issue, 1 open PR, created 2025-04-26, pushed 2026-10-14, archived=false, TypeScript, MIT; HEAD 58b03f10b0d184fa31573b2ea79f378aa8285ff2."
  - "[GH:release] https://github.com/tufantunc/ssh-mcp/releases ; checked 2026-10-16: latest v2.19.1 published 2026-10-14; sampled v2.19.0 Oct 12, v2.18.0/v2.17.0 Oct 4, v2.16.0 Oct 3."
  - "[GH:community] https://api.github.com/repos/tufantunc/ssh-mcp/contributors?per_page=8 ; checked 2026-10-16: leading contributor tufantunc 227 contributions, github-actions bot 42, dependabot bot 24, other sampled human contribution counts 4/2/1/1/1; PRs 262–267 sampled merged on Oct 14. Not a full contributor census."
  - "[GH:issues] https://github.com/tufantunc/ssh-mcp/issues/198 ; open run-script proposal, maintainer comment says embedded newlines now rejected, issue remains open for new tool design. Closed sampled issues: #253 HTTP session exhaustion, #230 synthetic-command denylist matching, #223 upload overwrite semantics, #217 read-only SFTP classification; closure alone is not verification of fixes. Checked 2026-10-16."
  - "[Docs] https://github.com/tufantunc/ssh-mcp/blob/58b03f10b0d184fa31573b2ea79f378aa8285ff2/README.md ; inspected tools table (14 tools), profiles, transfers, ProxyJump, CA certificates, OPA, transports, Docker, migration. package.json version 2.19.1, engines ^18.19.0 || >=20.6.0; Docker instructions build locally, no official published application image verified."
  - "[Docs:security] https://github.com/tufantunc/ssh-mcp/blob/58b03f10b0d184fa31573b2ea79f378aa8285ff2/SECURITY.md ; inspected threat model, process-local TOFU, ask-destructive limitations, interactive shell state, residual egress/UNC/write-path risks, OPA and deployment guidance. Its awk-not-read claim is stale relative to this revision's source/probe."
  - "[GH:advisories] https://api.github.com/repos/tufantunc/ssh-mcp/security-advisories ; checked 2026-10-16 returned 10 published advisories. npm ssh-mcp samples: GHSA-rrxj-hcj2-vwm6 medium <2.19.0 patched >=2.19.0; GHSA-972x-g47g-3922 high <=2.13.0 patched 2.14.0; GHSA-mwmj-jr2h-q546 high <=2.12.0 patched 2.13.0; GHSA-qvx5-rxrj-9vfh critical <=2.5.1 patched 2.6.0. All ten returned patched-version boundaries precede or equal 2.19.0. This is project advisory metadata, not a claim of exhaustive vulnerability clearance."
  - "[Local:source] https://github.com/tufantunc/ssh-mcp/tree/58b03f10b0d184fa31573b2ea79f378aa8285ff2/src ; inspected policy/engine.ts, classifier.ts, awk.ts, tools/pipeline.ts, guard/elicitation.ts; also package.json, Dockerfile, .github/workflows/ci.yml, LICENSE. Policy pipeline separates classification, RBAC, approval and audit; OPA defaults to local fallback; approval errors fail closed. Docker final stage copies builder node_modules including dev dependencies; HEALTHCHECK only runs node -e process.exit(0)."
  - "[Local:test] 2026-10-16 Linux Node v26.7.0/npm 12.0.2 at HEAD 58b03f10b0d184fa31573b2ea79f378aa8285ff2: npm ci --ignore-scripts --no-audit --no-fund, npm run build, npm run typecheck passed; npm run test:unit => 67 passed/1 skipped files, 1946 passed/20 skipped tests, 49.32s. npm audit --omit=dev => 0 reported vulnerabilities. No SSH integration/e2e, coverage measurement, Docker build or real client approval test run."
  - "[Local:probe] 2026-10-16 built policy modules, pure local evaluation only, no shell/SSH execution: operator/prod/ask-destructive gives rm -f /tmp/wiki-probe=safe/allow, systemctl stop nginx=safe/allow, ls /tmp=read-only/allow; ask-all changes these three to require-approval. awk 'BEGIN{system(\"sudo id\")}'=privileged/deny under both modes due to role-binding."
  - "[GH:alternatives] https://github.com/AiondaDotCom/mcp-ssh and https://github.com/classfang/ssh-mcp-server ; gh repo view description/url checked 2026-10-16, positioning-only comparison, not security or feature-parity audit."
---

# ssh-mcp

> 面向希望给 MCP 客户端接入远程 SSH、同时保留策略和审计的运维开发者；它是受控执行适配器，不是安全沙箱。
>
> **状态**：active · **综合评分**：3.2/5 · **推荐度**：3/5

## 一句话总结

把 SSH 命令、SFTP 和持久会话暴露为 MCP 工具，并在执行链上加入命令分类、角色授权、人工批准和审计；适合隔离环境试用，不宜将其文本分类器当作生产主机的最终权限边界。[Docs][Local:source]

## 总体评价

比“把 SSH exec 包成一个工具”更完整：多主机 profile、文件传输、跳板机、会话生命周期和外部策略接口构成实用的远程操作层。但项目的困难恰好在安全承诺上：命令字符串的分类不等于远端 shell 的实际语义，`safe` 也不等于无损操作。[Docs][Docs:security]

本地构建、类型检查及单元/属性测试通过，是可维护性的正证据；历史授权绕过公告、默认审批范围较窄、文档与源码漂移，则限制安全与采用评分。建议作为有明确 SSH 账号隔离与人工审批的辅助层，而非自动授予 agent 生产管理员权限的依据。[Local:test][GH:advisories][Local:probe]

## 推荐度

**3/5。**

**面向能管理 SSH 账号、sudoers、主机指纹和 MCP 审批客户端的开发者及小团队运维人员**，可以在开发机或隔离主机试用。[Docs:security]

采用的前提是专用低权限账号、显式 `group`、固定 `trustedHostKey`，有写权限的敏感 profile 使用 `ask-all`，并在实际客户端验证 elicitation。OPA 若承担必要授权，必须启用 `--opaFailClosed`。仅查看信息时可用 `readOnly`，但它并不保证数据不能外传。[Docs][Docs:security]

不应仅因“security-first”、测试数量或安全徽章就提高采用强度。本次没有做真实 SSH 端到端部署或客户端兼容性验证，亦不据通用 MCP 协议推定某个客户端已经能正确处理审批。[Local:test]

## 优势

1. **能力链完整**：命令执行、SFTP 内联/流式传输、交互/后台会话与连接发现，覆盖主要 SSH 运维接口。[Docs]
2. **策略可解释、可配置**：角色 × 主机分组 × 命令类别，另有 denylist、配额、审批与 OPA 收窄层。[Docs][Local:source]
3. **可测试而非只有宣言**：本次实际跑通单元和属性测试；源码将策略、传输、SSH、审计分开，便于定位问题。[Local:test][Local:source]
4. **愿意披露边界**：安全文档明确讨论 TOFU 不持久、会话状态与出站风险，历史公告也给出修复版本。[Docs:security][GH:advisories]

## 劣势

1. **分类名称易造成错误预期**：实测删除普通文件、停止服务均可落入 `safe`，默认 `ask-destructive` 不提示。[Local:probe]
2. **安全语义持续修补**：历史公告涵盖只读参数白名单、Windows 路径解析和禁止写入目标识别；已修复不等于结构性问题消失。[GH:advisories]
3. **审批依赖客户端**：不支持 elicitation 时需要审批的调用拒绝执行，而不是自动弹出服务器终端确认；部署前必须验证。[Local:source]
4. **文档有已证实漂移**：README/SECURITY 仍说 awk 程序未被读取，但当前源码已有专用解析器，本地策略探针也识别了其中的 sudo。[Docs][Docs:security][Local:probe]
5. **不是任意脚本执行器**：多行 `run-script` 仍是开放提案，不能把单行命令工具当作透明脚本通道。[GH:issues]

## 适合什么场景

- 在隔离开发主机上，用支持审批的 MCP 客户端执行可人工核验的操作。
- 用专用只读账号做日志和状态查询，同时在主机侧约束敏感路径及网络出口。
- 将文件流式传输留在本地磁盘与远端之间，不让大文件内容经过模型上下文。
- 研究“分类—授权—审批—执行—审计”如何组合，以及组合仍留下哪些缺口。[Docs][Docs:security][Local:source]

## 不适合什么场景

- 给不可信输入驱动的 agent 开 root、通配 sudo 或生产全自动写权限。
- 把 `readOnly` 理解为隔离、保密或防外传保证。
- 把文本 denylist 当成完整文件系统访问控制或 shell 沙箱。
- 要求严格合规认证、多租户身份隔离已经得到独立证明的环境；文档的合规映射为自评，不是认证。[Docs:security]

## 与类似项目对比

| 项目 | 定位 | 相对本项目 |
|------|------|-----------|
| [AiondaDotCom/mcp-ssh](https://github.com/AiondaDotCom/mcp-ssh) | SSH 连接管理与控制的 MCP server | 同属 SSH MCP 候选；选型时需要进一步核对其授权、凭据和会话语义，不能凭简介认定更简单或更安全 |
| [classfang/ssh-mcp-server](https://github.com/classfang/ssh-mcp-server) | 基于 SSH 的 MCP 服务 | 同类候选；本次只核对项目定位，未验证与本项目在工具和策略上的等价性 |

竞争项目只做定位核验，未进行同等十维审查或测试，表格不构成安全排名。[GH:alternatives]

若现有 agent 已有受控终端，单次 SSH 操作未必值得引入另一个常驻 MCP 层；本项目的额外价值主要是多客户端可复用的远程操作协议面与统一策略，而不是让 SSH 本身变得不可绕过。

## 它能做什么

**能力 4/5。** README 列出 14 个工具，覆盖连接发现、命令/提权命令、会话开关与输出读取、SFTP、进程信号。还提供 ProxyJump、SSH CA 证书、多 profile、配额及审批短期授权配置。[Docs]

其中流式文件工具避免把文件正文送入模型上下文；但下载到本地本身仍是写操作，上传覆盖、目标路径和审计记录必须逐项理解。交互会话保存 shell 状态，功能上方便，安全上也使“本次字符串看起来只读”更加不充分。[Docs][Docs:security]

这些能力由文档与源码确认存在，并非本次全部端到端验收。运行证据限于单元/属性测试与策略求值，未验证真实连接、跳板链路或远端信号终止效果。[Local:test]

## 运行环境与资源占用

**资源效率 3/5，保守暂评；没有 CPU/RSS、吞吐量或并发基准。**

| 场景 | CPU | 内存 | 存储 | 说明 |
|------|-----|------|------|------|
| 本地 stdio | 未测量 | 未测量 | Node 依赖和审计日志 | 无入站 HTTP 服务需求 |
| HTTP 与多会话 | 未测量 | 随连接/会话增加，未实测 | 日志、上传下载文件需预算 | 增加认证、代理及会话管理成本 |

- **运行时**：TypeScript 编译到 Node.js；包声明 `^18.19.0 || >=20.6.0`，本次使用 Node 26.7.0，不据此验证整个声明版本范围。[Docs][Local:test]
- **平台**：文档涉及 Linux、macOS、Windows 本地配置与 Linux/Windows 远端；本次只在 Linux 验证本地测试。[Docs][Local:test]
- **Docker**：有 Dockerfile 与自建运行说明，但未核验官方已发布应用镜像，因此 `docker_support: false` 不表示不能容器化。[Docs]
- **容器细节**：最终阶段复制全部 builder `node_modules`，未裁剪开发依赖；HEALTHCHECK 仅执行 `node -e "process.exit(0)"`，不能证明 MCP 已配置或 SSH 可用。[Local:source]
- **GPU**：不需要；目标机器上的任务耗费应与 MCP server 自身分开计算。

## 上手体验

**3/5。** 安装命令短，安全配置并不短：TOML profile、认证来源、配置目录权限、角色矩阵、主机指纹和审批客户端均需理解。无配置时能完成 MCP 握手和发现工具，但拒绝工具调用；“连上了 MCP”不等于“可操作主机”。[Docs]

建议固定已核验版本开始，先验证只读命令、审批拒绝及身份错误，再开放写操作。配置目录及文件的 POSIX 权限要求分别为 0700/0600；Windows 使用 ACL 检查，默认报告问题，需 `--strictConfigAcl` 才强制。[Docs:security]

本次 npm 安装、build 和 typecheck 成功，但没有把它加入现有 MCP 配置、提供真实凭据或启动连接。[Local:test]

## 代码质量

**4/5。** `policy`、`guard`、`ssh`、`tools`、`audit`、`transport` 分层清晰；统一 pipeline 将策略、审批和审计串联，审批异常拒绝执行。CI 文件包括源/测试类型检查、Linux SSH 容器测试及 Windows 单元测试配置，但本次不以配置文件代替远端 CI 结果。[Local:source]

实际 `npm run test:unit` 为 **67 个文件通过、1 个跳过；1946 项测试通过、20 项跳过**。没有运行 coverage，也没有真实 SSH integration/e2e，因此不写“全测试通过”或推定覆盖率。[Local:test]

分类器及 awk 词法处理承载复杂语义，回归测试有价值，却不能证明穷尽所有 shell 方言和远端环境。历史问题涉及真正的权限与数据完整性边界，不是仅有格式瑕疵，故不评 5。[GH:advisories][GH:issues]

## 可扩展性

**4/5。** 自定义 role/group 绑定、denylist、profile 选项和 OPA 提供不必 fork 的策略扩展面；OPA 请求包含角色、命令类别、主机与部分规范化路径字段，适合已有 Rego 策略的团队。[Docs][Local:source]

OPA 只能进一步拒绝本地已允许的请求，不能扩大本地权限；默认不可用时退回本地决定，不是全局 fail-closed。把 OPA 当必要安全边界时应显式启用 `--opaFailClosed`。这不是任意工具插件市场，新工具和新的分类语义仍需代码改动。[Docs]

## 文档质量

**3/5。** README 覆盖配置、工具、传输、安全与 v1 迁移，SECURITY 说明比常见宣传页具体，尤其坦承残余风险。[Docs][Docs:security]

但关键语义漂移需要查源码纠正：两份文档均仍称 awk 不被解析，而当前 `policy/awk.ts` 已做词法/行为提取；`awk 'BEGIN{system("sudo id")}'` 实测为 `privileged`，非文档所称 `safe`。这是安全选型依赖的信息，不宜只因篇幅完整给 4 或 5。[Local:source][Local:probe]

## 社区与成熟度

| 维度 | 评分 | 判断 |
|------|------|------|
| 社区活跃度 | 3/5 | 维护活跃，但样本以主维护者和自动化账号贡献为主，不能推出广泛生态 |
| 成熟度 | 3/5 | 已有稳定版本编号和迁移文档，仍密集修订权限边界，缺少本次可核验的大规模生产稳定性证据 |

2026-10-16 快照为 **808 stars、128 forks、1 个开放 issue、1 个开放 PR**；仓库创建于 2025-04-26，最新 release 为 2026-10-14 的 v2.19.1。最近版本与合并活动说明有人持续维护，不代表成熟度已达长期稳定。[GH][GH:release][GH:community]

开放 #198 是多行脚本工具提案，维护者已解释换行拒绝行为；近期关闭样本包含 HTTP 会话耗尽、SFTP 覆盖语义和只读分类问题。低开放数量是快照，不能抹去这些历史质量信号，也不能把已关闭的问题全部写成当前未修复缺陷。[GH:issues]

## 安全与风险

**2/5。扣分针对当前默认语义和信任边界，不是将历史已修复漏洞冒充最新版漏洞。**

1. **默认审批不覆盖所有危险写操作。** 在当前构建上，`operator/prod/ask-destructive` 对 `rm -f /tmp/wiki-probe` 与 `systemctl stop nginx` 返回 `safe/allow`；改为 `ask-all` 后才要求审批。探针仅做本地策略求值，没有执行这些命令。这说明 `safe` 是类别名，而非无害证明。[Local:probe]
2. **主机信任默认不持久。** TOFU 仅存在进程内，不读取 `~/.ssh/known_hosts`；重启后重新接受首次连接。重要主机应固定 `trustedHostKey`，并使用 strict 使缺少 pin 成为拒绝，而非依赖每次新启动的 TOFU。[Docs:security]
3. **只读不等于防外传。** 文档承认 DNS/ICMP 出站、Windows UNC 认证及远端 shell 状态等边界；远端低权限账号、sudoers、出站控制和系统隔离不可被文本分类器替代。[Docs:security]
4. **审批和外部授权各有失败语义。** elicitation 错误拒绝执行，这是正向控制；OPA 默认退回本地允许结果则须运营者主动改成 fail-closed。HTTP 另需 bearer、正确代理信任和 TLS 终止，不能直接把 stdio 的信任假设搬到公网。[Docs][Local:source]
5. **历史公告确实存在。** 本次项目 API 返回 10 条 published GHSA。例：禁止写路径缺口（GHSA-rrxj-hcj2-vwm6，medium）在 2.19.0 修复；Windows 解释器路径绕过（GHSA-972x-g47g-3922，high）在 2.14.0 修复；只读白名单参数绕过（GHSA-mwmj-jr2h-q546，high）在 2.13.0 修复；分类器与 shell 读取不同命令的问题（GHSA-qvx5-rxrj-9vfh，critical）在 2.6.0 修复。按所查询版本元数据，本次 2.19.1 在这些已公布修复边界之后；这既不能证明没有新漏洞，也不应被写成“当前仍有这十个漏洞”。[GH:advisories]
6. **依赖与许可证分别判断。** 本次 `npm audit --omit=dev` 报告 0 个依赖漏洞，只涵盖该时刻生产依赖数据库扫描，不证明分类器安全或开发依赖无问题。MIT 授权宽松，保留版权与许可文本即可；许可证并不担保运行安全。[Local:test][Local:source]

## 学习价值

值得研究其统一审计 pipeline、MCP elicitation 的 fail-closed 路径、参数语法白名单、外部授权收窄层，以及安全公告如何转化成回归测试。[Local:source][GH:advisories]

更重要的反面教材是：**识别字符串不是约束实际执行环境，工具只读标注不是权限证明，测试很多也不是安全边界完备。** 研究和收录价值较高，但不应因此抬高生产采用推荐度。
