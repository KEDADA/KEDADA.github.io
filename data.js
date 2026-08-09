/**
 * 网站内容集中配置文件
 * 后续更新个人信息、指标、经历、技能或荣誉时，只需要修改本文件。
 */
window.PORTFOLIO_DATA = {
  profile: {
    name: "汪柯廷",
    label: "INTERVIEW PORTFOLIO · 2026",
    tagline: "Agent Harness × Agent Memory",
    summary:
      "电子科技大学计算机硕士｜聚焦 Agent Harness、长期记忆、自动化评测",
    github: "https://github.com/KEDADA?tab=repositories",
    email: "wangketing0513@163.com",
    phone: "18358268740",
  },

  metrics: [
    { value: "98.9%", label: "Memory Pass Rate", note: "车载长期记忆评测" },
    { value: "-54%", label: "Route Latency", note: "3.2s → 1.45s" },
    { value: "223", label: "Subscribers", note: "AI News 资讯系统" },
    { value: "+28pp", label: "Agent Evolution", note: "52% → 80%" },
  ],

  filters: [
    { id: "all", label: "全部", icon: "" },
    { id: "education", label: "教育", icon: "🎓" },
    { id: "experience", label: "实习经历", icon: "💼" },
    { id: "project", label: "个人项目", icon: "✦" },
    { id: "paper", label: "论文", icon: "▤" },
  ],

  timeline: [
    {
      id: "zufe",
      date: "2020.09–2024.06",
      category: "education",
      title: "浙江财经大学 · 软件工程本科",
      organization: "信息技术与人工智能学院",
      badge: "浙江省优秀毕业生",
      description: "以软件工程与 AI 实践为起点，完成系统训练并持续探索智能应用开发。",
      metrics: [
        { value: "省优毕", label: "毕业荣誉" },
        { value: "2 年", label: "省政府奖学金" },
      ],
      details: [
        "连续两年获得浙江省政府奖学金、校优秀学生一等奖学金。",
        "获中国大学生计算机设计大赛浙江省三等奖、移动应用创新赛华东赛区三等奖。",
      ],
    },
    {
      id: "uestc",
      date: "2024.09–2027.06",
      category: "education",
      title: "电子科技大学 · 计算机硕士",
      organization: "计算机科学与工程学院 · NSTL 实验室",
      badge: "项目之星",
      description: "围绕 Agent Harness、Agent Memory 与 RAG 评测体系开展研究和工程实践。",
      metrics: [
        { value: "一等", label: "优秀学生奖学金" },
        { value: "三星", label: "项目之星最高级" },
      ],
      details: [
        "主要方向为 Agent Harness、Agent Memory 与 Context Engineering。",
        "重视可复现评测、可归因迭代与工程闭环。",
      ],
    },
    {
      id: "graphrag",
      date: "2025.10–2026.02",
      category: "project",
      title: "GraphRAG + DeepSearch · 跨文档问答",
      organization: "独立项目",
      badge: "Multi-Agent",
      description: "用知识图谱、多级检索与多智能体编排解决跨文档、多步推理问题。",
      metrics: [
        { value: "0.43→0.82", label: "F1" },
        { value: "2,746", label: "Chunks" },
        { value: "1,005", label: "实体" },
      ],
      details: [
        "设计 NaiveRAG、GraphAgent、DeepResearch、FusionAgent 四级架构。",
        "构建文档摄取、实体关系抽取、消歧对齐、Leiden 社区检测全链路。",
        "搭建规则评分与 LLM-as-a-Judge 双层评测体系，覆盖 10+ 指标。",
      ],
    },
    {
      id: "dji-cockpit",
      date: "2026.03–2026.08",
      category: "experience",
      title: "大疆车载 · AI 座舱 Agent 系统",
      organization: "智研软件部 · 大模型 Agent 应用实习生",
      badge: "0 → 1",
      description: "作为初始核心研发成员，主导长期记忆、自动化评测、并发路由与导航模块。",
      metrics: [
        { value: "98.9%", label: "记忆任务通过率" },
        { value: "-54%", label: "路由耗时" },
        { value: "99%", label: "路由准确率" },
      ],
      details: [
        "设计结构化用户画像、Mem0 only-add、取证式更新与语义混合检索，形成六条写入护栏。",
        "搭建统一 EvalRunner、Benchmark Adapter 与 Case / Observation / Result 协议，覆盖 8 类 Benchmark、28 项指标。",
        "设计 G / T1 / T2 三路由器并发点火架构，典型复杂请求由约 3.2 秒降至 1.45 秒。",
        "重构 NavResolver 与导航选择态问答，80 Case × 5 评测成功率由 85.6% 提升至 97.5%。",
      ],
    },
    {
      id: "ai-news",
      date: "2026.03–2026.08",
      category: "experience",
      title: "大疆车载 · AI News 智能资讯系统",
      organization: "多源采集、分级路由、个性化精选与飞书推送",
      badge: "223 订阅用户",
      description: "主导 AI 资讯日报全链路，将模型能力转化为稳定、可解释的内部资讯产品。",
      metrics: [
        { value: "178", label: "DAU" },
        { value: "98.4%", label: "AI 内容召回率" },
        { value: "-75%", label: "推理成本" },
      ],
      details: [
        "采用确定性规则、轻量模型预筛、灰区强模型复核的 route-first 架构。",
        "五维得分结合用户偏好、时间衰减与信源等级，Precision@10 由 0.72 提升至 0.86。",
        "Embedding 事件聚类与 Human-in-the-loop 去重将同事件重复率从 16.7% 降至 3.8%。",
      ],
    },
    {
      id: "evowork",
      date: "2026.04–至今",
      category: "project",
      title: "EvoWork · 自进化桌面 Agent Harness",
      organization: "独立从零实现",
      badge: "Self-Evolving",
      description: "贯通 Runtime、Memory、Skills 自进化、Eval 与安全五大子系统的 Agent 自改进闭环。",
      metrics: [
        { value: "-45%", label: "LLM 交互轮次" },
        { value: "-54%", label: "Token" },
        { value: "+28pp", label: "任务成功率" },
      ],
      details: [
        "设计 Dispatch Table 动态注册、Batch Tool Calling 与 Interrupt 中断恢复的高级 Runtime。",
        "构建 Episodic JSONL + Semantic Vector 双层记忆，以及 Context 四操作主动压缩策略。",
        "以 60 Case 隔离测试集门控技能进化；六轮迭代后任务成功率由 52% 提升至 80%。",
        "实现三级权限、Dry-run 副作用预览与成本守卫，预设高危操作拦截率 100%。",
      ],
    },
    {
      id: "ahead",
      date: "2026–至今",
      category: "paper",
      title: "AHEAD · ViT 对抗样本检测",
      organization: "AAAI 2027 · 一作在投",
      badge: "Paper",
      description: "Efficient Adversarial Detection from Frozen Vision Transformer Attention Heads。",
      metrics: [
        { value: "AAAI", label: "目标会议" },
        { value: "一作", label: "作者顺位" },
      ],
      details: [
        "从冻结 Vision Transformer 的注意力头中提取高效检测信号。",
        "聚焦低额外开销与跨攻击场景的检测泛化。",
      ],
    },
  ],

  skills: [
    {
      title: "Agent & Harness",
      items: ["Agent Loop", "ReAct", "Plan-and-Execute", "Tool Use", "Multi-Agent"],
    },
    {
      title: "Memory & Context",
      items: ["Long-term Memory", "Episodic / Semantic", "Hybrid Retrieval", "Prompt Split", "Context Compression"],
    },
    {
      title: "RAG & Evaluation",
      items: ["GraphRAG", "RRF / Rerank", "Ragas", "LLM-as-Judge", "Neo4j / Qdrant"],
    },
    {
      title: "Engineering",
      items: ["Python", "FastAPI", "LangGraph", "Docker", "Git"],
    },
  ],

  achievements: [
    { icon: "🏆", text: "研究生网络安全创新大赛国家一等奖" },
    { icon: "⭐", text: "NSTL 实验室三星级“项目之星”" },
    { icon: "🎓", text: "电子科技大学优秀学生一等奖学金" },
    { icon: "🥇", text: "浙江省优秀毕业生" },
    { icon: "📄", text: "AAAI 2027 一作在投" },
    { icon: "🚗", text: "大疆车载 AI 座舱 Agent 核心研发" },
  ],
};
