/**
 * 网站内容集中配置文件。
 * 后续更新个人信息、指标、经历、项目、技能或荣誉时，只需要修改本文件。
 */
window.PORTFOLIO_DATA = {
  profile: {
    name: "汪柯廷",
    label: "AGENT ENGINEERING PORTFOLIO · 2026",
    tagline: "Agent Harness × Agent Memory",
    summary: "电子科技大学计算机硕士｜聚焦 Agent Harness、长期记忆、自动化评测",
    github: "https://github.com/KEDADA?tab=repositories",
    email: "wangketing0513@163.com",
    phone: "18358268740"
  },

  proof: [
    { label: "车载长期记忆", value: "98.9%", title: "任务通过率", note: "结构化画像 · 取证式更新 · 混合检索", tone: "blue", target: "dji-cockpit" },
    { label: "EvoWork · Skills Evolution", value: "52→80%", title: "任务成功率", note: "6 轮进化 · 60 Case 隔离门控 · 点击查看", tone: "teal", target: "evowork" },
    { label: "并发路由", value: "−54%", title: "典型请求耗时", note: "3.2s → 1.45s · 99% 路由准确率", tone: "coral", target: "dji-cockpit" },
    { label: "AI News", value: "223", title: "订阅用户", note: "178 DAU · Precision@10 0.72 → 0.86", tone: "amber", target: "ai-news" }
  ],

  filters: [
    { id: "all", label: "全部" },
    { id: "education", label: "教育" },
    { id: "work", label: "实习经历" },
    { id: "research", label: "研究论文" },
    { id: "opensource", label: "开源项目" },
    { id: "project", label: "个人项目" }
  ],

  timeline: [
    {
      id: "zufe", date: "2020.09—2024.06", kind: "education", category: "教育 · 本科",
      title: "浙江财经大学", subtitle: "软件工程 · 信息技术与人工智能学院",
      lead: "以软件工程与 AI 实践为起点，完成系统训练并持续探索智能应用开发。",
      tags: ["软件工程", "AI 应用", "浙江省优秀毕业生"],
      role: "本科生",
      background: "本科阶段建立软件工程、算法与智能应用开发基础，并通过竞赛与项目训练形成完整的工程实践能力。",
      metrics: [{ value: "省优毕", label: "毕业荣誉" }, { value: "2 年", label: "省政府奖学金" }],
      contributions: ["连续两年获得浙江省政府奖学金、校优秀学生一等奖学金。", "获中国大学生计算机设计大赛浙江省三等奖、移动应用创新赛华东赛区三等奖。"]
    },
    {
      id: "uestc", date: "2024.09—2027.06", kind: "education", category: "教育 · 硕士",
      title: "电子科技大学", subtitle: "计算机科学与工程学院 · NSTL 实验室",
      lead: "围绕 Agent Harness、Agent Memory 与 RAG 评测体系开展研究和工程实践。",
      tags: ["Agent Harness", "Agent Memory", "Context Engineering"],
      role: "计算机硕士研究生",
      background: "研究生阶段聚焦可靠、可评测、可进化的 Agent 系统，强调可复现评测、可归因迭代与工程闭环。",
      metrics: [{ value: "一等", label: "优秀学生奖学金" }, { value: "三星", label: "项目之星最高级" }],
      contributions: ["主要方向为 Agent Harness、Agent Memory 与 Context Engineering。", "在项目中建立固定评测集、结构化轨迹与可回归的迭代机制。"]
    },
    {
      id: "graphrag", date: "2025.10—2026.02", kind: "project", category: "个人项目",
      title: "GraphRAG + DeepSearch", subtitle: "跨文档问答 · Multi-Agent",
      lead: "用知识图谱、多级检索与多智能体编排解决跨文档、多步推理问题。",
      tags: ["GraphRAG", "DeepSearch", "Multi-Agent", "LLM-as-Judge"],
      role: "独立设计与实现",
      background: "跨文档问题需要同时处理实体对齐、关系聚合、社区检索与多步推理，单一向量检索难以稳定覆盖证据链。",
      metrics: [{ value: "0.43→0.82", label: "F1" }, { value: "2,746", label: "Chunks" }, { value: "1,005", label: "实体" }],
      contributions: ["设计 NaiveRAG、GraphAgent、DeepResearch、FusionAgent 四级架构。", "构建文档摄取、实体关系抽取、消歧对齐与 Leiden 社区检测全链路。", "搭建规则评分与 LLM-as-a-Judge 双层评测体系，覆盖 10+ 指标。"]
    },
    {
      id: "dji-cockpit", date: "2026.03—2026.08", kind: "work", category: "实习经历",
      title: "大疆车载 · AI 座舱 Agent 系统", subtitle: "智研软件部 · 大模型 Agent 应用实习生",
      lead: "作为初始核心研发成员，主导长期记忆、自动化评测、并发路由与导航模块。",
      tags: ["Long-term Memory", "EvalRunner", "Concurrent Routing", "Navigation"],
      role: "核心研发 / 0→1",
      background: "面向车载座舱中的跨会话个性化、复杂意图路由和导航选择态问答，建设可恢复、可评测的 Agent 核心能力。",
      flow: [{ title: "记忆写入", text: "画像抽取与六条护栏" }, { title: "混合检索", text: "语义召回与取证式更新" }, { title: "并发路由", text: "G / T1 / T2 点火" }, { title: "统一评测", text: "Case / Observation / Result", accent: true }],
      metrics: [{ value: "98.9%", label: "记忆任务通过率" }, { value: "−54%", label: "路由耗时" }, { value: "99%", label: "路由准确率" }],
      contributions: ["设计结构化用户画像、Mem0 only-add、取证式更新与语义混合检索，形成六条写入护栏。", "搭建统一 EvalRunner、Benchmark Adapter 与 Case / Observation / Result 协议，覆盖 8 类 Benchmark、28 项指标。", "设计 G / T1 / T2 三路由器并发点火架构，典型复杂请求由约 3.2 秒降至 1.45 秒。", "重构 NavResolver 与导航选择态问答，80 Case × 5 评测成功率由 85.6% 提升至 97.5%。"]
    },
    {
      id: "ai-news", date: "2026.03—2026.08", kind: "work", category: "实习经历",
      title: "大疆车载 · AI News", subtitle: "多源采集 · 分级路由 · 个性化精选 · 飞书推送",
      lead: "主导 AI 资讯日报全链路，将模型能力转化为稳定、可解释的内部资讯产品。",
      tags: ["Route-first", "Personalization", "Clustering", "Human-in-the-loop"],
      role: "项目主导",
      background: "多源资讯需要在成本、时效、质量与个性化之间平衡，并控制同事件重复与强模型调用规模。",
      metrics: [{ value: "223", label: "订阅用户" }, { value: "178", label: "DAU" }, { value: "−75%", label: "推理成本" }],
      contributions: ["采用确定性规则、轻量模型预筛、灰区强模型复核的 route-first 架构。", "五维得分结合用户偏好、时间衰减与信源等级，Precision@10 由 0.72 提升至 0.86。", "Embedding 事件聚类与 Human-in-the-loop 去重将同事件重复率从 16.7% 降至 3.8%。"]
    },
    {
      id: "evowork", date: "2026.04—至今", kind: "opensource", category: "开源项目 · 核心作者",
      meta: "开源项目 · 核心作者", cardDate: "开源项目", cardCategory: "核心作者",
      title: "EvoWork", subtitle: "Self-improving Agent Framework · Runtime / Memory / Skills / Eval / Safety",
      lead: "从零实现 Runtime、Memory、Skills 自进化、Eval 与安全五大子系统，打通评测驱动、失败归因、技能进化与回归验证的 Agent 自改进闭环。",
      tags: ["Advanced Runtime", "Layered Memory", "Skill Evolution", "Eval & Safety"],
      cardTags: ["Runtime", "Memory", "Skill Evolution", "Eval & Safety"],
      cardMetrics: [{ value: "−45%", label: "LLM 轮次" }, { value: "−54%", label: "Token" }, { value: "+28pp", label: "成功率" }],
      role: "核心作者 / 系统设计与独立实现",
      background: "传统 Agent Loop 往往把工具调度、上下文、评测和权限揉进核心循环。EvoWork 将运行、记忆、进化、评测与安全拆成可独立演进的子系统。",
      mini: "evo",
      flow: [{ title: "评测驱动", text: "固定任务集与隔离集" }, { title: "失败归因", text: "轨迹分析定位问题" }, { title: "技能提案", text: "生成可审查修订" }, { title: "沙箱回归", text: "成功率门控与副作用检查" }, { title: "确认集成", text: "用户确认后进入技能库", accent: true }],
      metrics: [{ value: "−45%", label: "多工具任务 LLM 交互轮次" }, { value: "12.3k→5.6k", label: "长程任务 Token" }, { value: "52%→80%", label: "6 轮进化成功率" }],
      contributions: ["系统设计：独立从零实现 Runtime、Memory、Skills 自进化、Eval 与安全五大子系统，形成从评测到回归验证的完整闭环。", "Runtime 与工具调度：以 Dispatch Table 动态注册、Batch Tool Calling 和 Interrupt 中断恢复扩展 Agent Loop；新增工具平均约 30 行接入且不侵入核心循环。在 120 任务 × 3 轮评测中，LLM 交互轮次降低 45%，端到端耗时降低 38%。", "Memory 与 Context Engineering：构建 Episodic JSONL + SemanticVector 双层记忆，以及 Context 四操作主动压缩策略。在 80 组平均 40+ 轮长程任务 × 5 次评测中，单任务 Token 从 12.3k 降至 5.6k，成功率从 71% 提升至 76%。", "Eval 驱动的技能自进化：搭建轨迹分析、失败归因、技能提案、沙箱回归与用户确认集成流程，以 60 Case 隔离测试集进行成功率门控。6 轮迭代后成功率从 52% 提升至 80%，失败自动归因覆盖率 85%，技能提案回归通过率 60%。", "安全与权限：实现三级权限模型、Dry-run 副作用预览与成本守卫；拦截全部预设高危操作，单任务成本上限 $0.5，评测期间越权调用 0 次。"],
      approach: ["Dispatch Table 将工具发现、Schema 与执行器从 Agent Loop 解耦；Batch Tool Calling 合并无依赖调用，Interrupt 保存可恢复状态。", "Episodic JSONL 保留可回放事件，SemanticVector 负责语义召回；Context 四操作按任务阶段主动控制上下文规模。", "所有技能提案先进入隔离沙箱，只有通过固定回归集且得到用户确认后才集成，避免自进化直接污染生产技能。", "权限、Dry-run 与成本守卫位于统一执行边界，在工具真正产生副作用前完成校验。"],
      star: { S: "传统 Agent Loop 扩展性差，工具调度、长上下文、失败归因和权限控制相互耦合，改进难以被稳定验证。", T: "构建可扩展、可恢复、可评测且受安全边界约束的 Agent Runtime，并让失败能够转化为可回归的技能改进。", A: "拆分五大子系统，以动态工具注册、批量调用、双层记忆、主动压缩、隔离评测和用户确认门控组成自改进闭环。", R: "多工具交互轮次降低 45%、端到端耗时降低 38%、长任务 Token 降低 54%；6 轮技能进化后成功率提升 28 个百分点，并实现预设高危操作 100% 拦截。" },
      tradeoff: "技能进化不会直接自动写入生产技能库：沙箱回归与用户确认增加了一步延迟，但把错误提案和能力回退限制在隔离环境内。"
    },
    {
      id: "workbuddy", date: "持续维护", kind: "opensource", category: "开源项目 · 核心作者",
      meta: "开源项目 · 核心作者", cardDate: "持续维护", cardCategory: "开源项目 · 核心作者",
      title: "learn-workbuddy", subtitle: "Agent Harness · 分层 Memory · RAG / Context",
      cardSubtitle: "adongwanai / learn-workbuddy",
      lead: "主导 learn-workbuddy 中 Agent Harness、分层 Memory 与 RAG/Context 关键章节设计与实现。",
      tags: ["Agent Harness", "Layered Memory", "RAG / Context", "Regression Evaluation"],
      cardTags: ["Harness", "Memory", "RAG / Context"],
      cardMore: "查看我的贡献与仓库链接",
      role: "核心作者 / 章节设计与实现",
      background: "项目以可运行章节拆解桌面 Agent 的工程边界。我的贡献集中在运行循环与工具协议、跨会话记忆，以及可解释检索和回归评测。",
      mini: "architecture",
      flow: [{ title: "Agent Harness", text: "有界 Loop、工具注册、权限、错误与 Replay" }, { title: "Layered Memory", text: "user / workspace / session 三层作用域" }, { title: "RAG / Context", text: "来源、作用域、评分与入选原因" }, { title: "Regression", text: "Recall@K、MRR 与稳定回归", accent: true }],
      metrics: [{ value: "有界", label: "Agent Loop / Transcript Replay" }, { value: "3 层", label: "user / workspace / session" }, { value: "2 项", label: "Recall@K / MRR" }],
      contributions: ["Agent Harness：设计并实现有界 Agent Loop，统一工具注册与参数校验、权限决策、结构化错误及 Transcript Replay。", "Memory：设计并实现 user / workspace / session 分层记忆体系，覆盖作用域隔离、持久化、跨重启恢复和泄漏防护。", "RAG / Context：设计并实现可解释检索与上下文组装，呈现召回来源、作用域、评分及入选原因，并以 Recall@K、MRR 建立检索回归。"],
      approach: ["将工具注册、Schema 校验、权限判断和错误结构收敛到统一调用边界。", "以分层作用域约束记忆读写，支持持久化、恢复和跨作用域泄漏防护。", "检索结果保留来源、评分和选择理由，并用固定查询集持续执行 Recall@K / MRR 回归。"],
      star: { S: "桌面 Agent 的运行循环、权限、记忆与上下文往往被揉成一个整体，学习者难以单独理解和验证。", T: "把关键工程边界拆成可运行章节，并让每一章都能被测试、回放和逐步扩展。", A: "主导 Agent Harness、分层 Memory 与 RAG/Context 章节，统一工具协议和错误结构，建立三层记忆作用域及检索回归。", R: "形成覆盖有界 Loop、Transcript Replay、跨重启记忆恢复与 Recall@K / MRR 的可运行教学实现。" },
      link: { label: "在 GitHub 查看 learn-workbuddy", url: "https://github.com/adongwanai/learn-workbuddy" }
    },
    {
      id: "ahead", date: "2026—至今", kind: "research", category: "研究论文 · 一作在投",
      title: "AHEAD", subtitle: "Efficient Adversarial Detection from Frozen Vision Transformer Attention Heads",
      lead: "从冻结 Vision Transformer 的注意力头中提取高效的对抗样本检测信号。",
      tags: ["Vision Transformer", "Adversarial Detection", "Frozen Attention Heads"],
      role: "AAAI 2027 · 一作",
      background: "聚焦低额外开销与跨攻击场景的检测泛化，研究冻结视觉骨干中的可分辨注意力信号。",
      metrics: [{ value: "AAAI", label: "目标会议" }, { value: "一作", label: "作者顺位" }],
      contributions: ["从冻结 Vision Transformer 的注意力头中提取高效检测信号。", "围绕跨攻击泛化、检测开销与稳定性开展实验验证。"]
    }
  ],

  skills: [
    { eyebrow: "Agent & Harness", title: "Agent 与 Harness 工程", items: ["Agent Loop", "ReAct", "Plan-and-Execute", "Tool Use", "Multi-Agent", "MCP"] },
    { eyebrow: "Memory & Context", title: "Memory 与 Context Engineering", items: ["Long-term Memory", "Episodic / Semantic", "Hybrid Retrieval", "Prompt Split", "Context Compression"] },
    { eyebrow: "RAG & Evaluation", title: "RAG 与评测", items: ["GraphRAG", "RRF / Rerank", "Ragas", "LLM-as-Judge", "Recall@K / MRR"] },
    { eyebrow: "Engineering", title: "工程能力", items: ["Python", "FastAPI", "LangGraph", "Docker", "Git", "Neo4j / Qdrant"] }
  ],

  achievements: [
    { label: "竞赛", text: "研究生网络安全创新大赛国家一等奖" },
    { label: "实验室", text: "NSTL 三星级“项目之星”" },
    { label: "奖学金", text: "电子科技大学优秀学生一等奖学金" },
    { label: "本科", text: "浙江省优秀毕业生" },
    { label: "研究论文", text: "AAAI 2027 一作在投" },
    { label: "工程实践", text: "大疆车载 AI 座舱 Agent 核心研发" }
  ]
};
