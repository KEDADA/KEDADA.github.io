const details = {
  zju: {
    kind: "education",
    meta: "教育 · 2024.09—2027.06",
    title: "电子科技大学",
    subtitle: "计算机科学与技术硕士 · 全日制",
    lead: "围绕 Agent Harness、Agent Memory 与 RAG 评测体系开展研究和工程实践。",
    tags: ["Agent Harness", "Agent Memory", "Context Engineering", "自动化评测"],
    role: "计算机硕士研究生",
    background: "在电子科技大学计算机科学与工程学院 NSTL 实验室学习，聚焦可靠、可评测、可进化的 Agent 系统。",
    contributions: [
      "主要方向为 Agent Harness、Agent Memory 与 Context Engineering。",
      "围绕固定评测集、结构化轨迹与可回归迭代机制开展实践。",
      "获得优秀学生一等奖学金与 NSTL 三星级项目之星。"
    ],
    approach: ["系统问题拆解与方案设计", "可复现评测与误差分析", "工程实现与结果表达"]
  },
  ustb: {
    kind: "education",
    meta: "教育 · 2020.09—2024.06",
    title: "浙江财经大学",
    subtitle: "软件工程本科 · 全日制",
    lead: "以软件工程与 AI 实践为起点，完成系统训练并持续探索智能应用开发。",
    tags: ["软件工程", "AI 应用", "省优毕"],
    role: "本科生",
    background: "本科阶段系统学习软件工程、算法与智能应用开发，通过竞赛与项目训练建立完整工程能力。",
    metrics: [
      { value: "浙江省优秀毕业生", label: "毕业荣誉" },
      { value: "2 年", label: "省政府奖学金" }
    ],
    contributions: [
      "连续两年获得浙江省政府奖学金、校优秀学生一等奖学金。",
      "获中国大学生计算机设计大赛浙江省三等奖。",
      "获移动应用创新赛华东赛区三等奖。",
      "大学生创新创业训练计划省级立项。"
    ],
    quote: "软件工程训练、系统实现和持续验证，是后来进入 Agent 工程的基础。"
  },
  diagnosis: {
    kind: "project",
    meta: "实习项目 · 大疆车载",
    title: "AI 座舱 Agent 系统",
    subtitle: "长期记忆 · 自动化评测 · 并发路由 · 导航",
    lead: "作为初始核心研发成员，主导长期记忆、自动化评测、并发路由与导航模块。",
    tags: ["Long-term Memory", "EvalRunner", "Concurrent Routing", "Navigation"],
    role: "核心研发 / 0→1",
    background: "面向车载座舱中的跨会话个性化、复杂意图路由和导航选择态问答，建设可恢复、可评测的 Agent 核心能力。",
    flow: [
      { title: "记忆写入", text: "画像抽取与六条护栏" },
      { title: "混合检索", text: "语义召回与取证式更新" },
      { title: "并发路由", text: "G / T1 / T2 点火" },
      { title: "统一评测", text: "Case / Observation / Result", accent: true }
    ],
    metrics: [
      { value: "98.9%", label: "记忆任务通过率" },
      { value: "3.2s → 1.45s", label: "典型复杂请求耗时" },
      { value: "99%", label: "路由准确率" }
    ],
    contributions: [
      "设计结构化用户画像、Mem0 only-add、取证式更新与语义混合检索，形成六条写入护栏。",
      "搭建统一 EvalRunner、Benchmark Adapter 与 Case / Observation / Result 协议，覆盖 8 类 Benchmark、28 项指标。",
      "设计 G / T1 / T2 三路由器并发点火架构，典型复杂请求由约 3.2 秒降至 1.45 秒。",
      "重构 NavResolver 与导航选择态问答，80 Case × 5 评测成功率由 85.6% 提升至 97.5%。"
    ],
    approach: [
      "结构化画像与分层记忆约束跨会话信息的写入、更新和召回。",
      "统一评测协议让不同模块共享可复现的 Case、Observation 与 Result。",
      "并发路由缩短首包延迟，并由固定测试集持续检查准确率。"
    ],
    star: {
      S: "车载座舱需要跨会话个性化、复杂意图分流和稳定的导航问答。",
      T: "建立可恢复、可评测的记忆与路由能力，并降低复杂请求延迟。",
      A: "构建长期记忆护栏、统一 EvalRunner、三路由器并发点火和导航状态解析。",
      R: "记忆任务通过率 98.9%，路由准确率 99%，典型复杂请求耗时降低 54%。"
    },
    quote: "稳定的 Agent 能力，来自可约束的状态、可复现的评测和可回归的工程闭环。"
  },
  knowledge: {
    kind: "project",
    meta: "公司项目 · Knowledge & Search",
    title: "出境业务与代码仓库知识库",
    subtitle: "文档作指南 · 代码作证据",
    lead: "先用业务文档建立查找方向，再进入多代码仓库寻找真实实现证据，避免把文档描述当作最终答案。",
    tags: ["Elasticsearch", "doc_index", "chunk_index", "Agentic Search"],
    role: "方案设计与实现",
    background: "出境业务问题既需要理解规则和术语，也需要落到具体代码实现。仅做文档 RAG 容易停在说明层；为代码建立向量索引又会引入额外更新和准确性成本。",
    flow: [
      { title: "问题解析", text: "提炼业务实体与定位线索" },
      { title: "文档指南", text: "chunk 命中；不足回退全文" },
      { title: "多仓代码查找", text: "Agentic Search 调用命令行" },
      { title: "证据链", text: "文件、符号与调用关系", accent: true }
    ],
    metrics: [
      { value: "80%+", label: "常见定位场景准确率" },
      { value: "2", label: "doc / chunk 文档索引" },
      { value: "0", label: "代码向量索引" }
    ],
    contributions: [
      "将文档知识定义为定位指南，将代码仓库中的文件、符号和调用关系定义为核心证据。",
      "用 ES 的 doc_index 保存整篇文档、chunk_index 支撑局部语义召回；当分块信息不足时回退对应全文。",
      "代码侧不建立 index，而是由 Agentic Search 调用命令行在多个仓库中逐步定位并拼接证据链。"
    ],
    approach: [
      "文档阶段回答‘应该去哪里查、需要关注什么’。",
      "代码阶段回答‘实现在哪里、调用如何发生、证据是否闭环’。",
      "最终输出区分文档提示与代码事实，降低两类信息被混用的风险。"
    ],
    star: {
      S: "业务规则分散在文档中，真实行为又落在多个代码仓库；只看其中一侧都容易得出不完整结论。",
      T: "建立一条先理解业务语境、再用代码完成取证的检索链路，并在信息不足时保留可靠兜底。",
      A: "用 doc_index 与 chunk_index 组织整篇文档和分块召回；文档先提供定位指南，再由 Agentic Search 调用命令行跨仓追踪文件、符号与调用关系。",
      R: "常见定位场景准确率达到 80%+，输出能够明确区分文档提示与代码事实。"
    },
    tradeoff: "整篇文档回退提升上下文完整性，但只在分块信息不足时触发，以控制噪声和 token 成本。",
    quote: "文档告诉 Agent 往哪里走，代码证据决定它能不能下结论。"
  },
  "research-skill": {
    kind: "project",
    meta: "公司项目 · Multi-repo Skill",
    title: "需求调研 Skill",
    subtitle: "L1→L2→L3 渐进式检索 · 主—子 Agent 分仓协作",
    lead: "把跨仓需求调研从一次性全局搜索，改造成先定位、再分仓、最后构建证据链的分阶段协作。",
    tags: ["Skill", "Multi-agent", "Code Evidence", "Claude Code"],
    role: "方案设计与实现",
    background: "跨仓需求常同时涉及入口、服务调用和下游实现。直接全量搜索噪声高，单 Agent 又容易在不同仓库间丢失上下文。",
    flow: [
      { title: "L1 语义定位", text: "提炼需求词、模块与入口" },
      { title: "L2 分仓探索", text: "主 Agent 分配仓库任务" },
      { title: "L3 深入取证", text: "子 Agent 追踪符号与调用" },
      { title: "合并报告", text: "去重、冲突检查、证据链", accent: true }
    ],
    metrics: [
      { value: "80%+", label: "跨仓分析准确率" },
      { value: "3 层", label: "渐进式检索" },
      { value: "1→N", label: "主—子 Agent 协作" }
    ],
    contributions: [
      "设计 L1 到 L3 的检索深度升级条件，避免一开始就进入高成本全仓分析。",
      "主 Agent 维护需求目标、仓库边界与全局证据；子 Agent 在单仓内查找文件、符号和调用关系。",
      "融合 Claude Code 推理规范，要求结论绑定可回看的代码位置与推导路径。"
    ],
    approach: [
      "先用需求词和业务实体确定可能的仓库与模块。",
      "各子 Agent 返回高密度摘要和证据，不把完整探索过程灌回主上下文。",
      "合并阶段检查跨仓调用是否闭环，并显式记录尚未证实的假设。"
    ],
    star: {
      S: "跨仓需求同时涉及入口、服务调用和下游实现，全量搜索噪声高，单 Agent 也容易在仓库切换中丢失上下文。",
      T: "让调研过程按信息充分度逐层深入，并把每个结论绑定到可回看的代码证据。",
      A: "设计 L1 语义定位、L2 分仓探索、L3 深入取证三级流程；主 Agent 维护全局目标，子 Agent 在单仓内追踪符号与调用。",
      R: "跨仓分析准确率达到 80%+，最终报告保留调用链、证据位置和未证实假设。"
    },
    quote: "跨仓协作的关键不是增加 Agent 数量，而是让每个 Agent 只承担边界清晰的取证任务。"
  },
  memoworld: {
    kind: "paper",
    meta: "研究论文 · AAAI 2027 在投",
    title: "AHEAD",
    subtitle: "Efficient Adversarial Detection from Frozen Vision Transformer Attention Heads",
    lead: "从冻结 Vision Transformer 的注意力头中提取高效的对抗样本检测信号。",
    tags: ["Vision Transformer", "Adversarial Detection", "Frozen Attention Heads"],
    role: "一作 · 方法设计与实验",
    background: "聚焦低额外开销与跨攻击场景的检测泛化，研究冻结视觉骨干中的可分辨注意力信号。",
    flow: [
      { title: "Frozen ViT", text: "保持视觉骨干参数冻结" },
      { title: "Head Mining", text: "定位具有检测信号的注意力头" },
      { title: "Feature Fusion", text: "构建轻量判别表示" },
      { title: "Cross-attack Eval", text: "验证跨攻击泛化", accent: true }
    ],
    metrics: [
      { value: "AAAI", label: "目标会议" },
      { value: "一作", label: "作者顺位" }
    ],
    contributions: [
      "从冻结 Vision Transformer 的注意力头中提取高效检测信号。",
      "分析不同层级与不同注意力头对正常样本和对抗样本的响应差异。",
      "围绕跨攻击泛化、检测开销与稳定性开展实验验证。"
    ],
    approach: [
      "保持预训练视觉骨干冻结，控制额外训练成本。",
      "从注意力头响应中选择稳定、具有区分度的检测特征。",
      "在多类攻击设置中检查性能、泛化与计算开销。"
    ],
    star: {
      S: "现有对抗样本检测方法可能引入额外网络或高训练开销。",
      T: "从冻结 ViT 内部寻找低开销、可泛化的检测信号。",
      A: "分析并筛选注意力头响应，构建轻量特征融合与判别方法。",
      R: "形成面向低额外开销与跨攻击泛化的完整检测方案。"
    },
    tradeoff: "冻结骨干降低训练成本，但检测能力依赖预训练注意力表示中是否已经包含稳定的可分辨信号。",
    quote: "从冻结模型已有的表示中寻找检测能力，而不是重新训练一个庞大的检测器。"
  },
  rvd: {
    kind: "project",
    meta: "个人项目 · 2025.10—2026.02",
    title: "GraphRAG + DeepSearch",
    subtitle: "跨文档问答 · Multi-Agent",
    lead: "用知识图谱、多级检索与多智能体编排解决跨文档、多步推理问题。",
    tags: ["GraphRAG", "DeepSearch", "Multi-Agent", "LLM-as-Judge"],
    role: "独立设计与实现",
    background: "跨文档问题需要同时处理实体对齐、关系聚合、社区检索与多步推理，单一向量检索难以稳定覆盖证据链。",
    flow: [
      { title: "Document Ingest", text: "文档分块与实体关系抽取" },
      { title: "Graph Build", text: "消歧对齐与 Leiden 社区检测" },
      { title: "Agent Search", text: "多级检索与多步研究" },
      { title: "Fusion", text: "证据融合与答案生成", accent: true }
    ],
    metrics: [
      { value: "0.43 → 0.82", label: "F1" },
      { value: "2,746", label: "Chunks" },
      { value: "1,005", label: "实体" }
    ],
    contributions: [
      "设计 NaiveRAG、GraphAgent、DeepResearch、FusionAgent 四级架构。",
      "构建文档摄取、实体关系抽取、消歧对齐、Leiden 社区检测全链路。",
      "搭建规则评分与 LLM-as-a-Judge 双层评测体系，覆盖 10+ 指标。"
    ],
    approach: [
      "先用图谱社区与实体关系缩小跨文档证据范围。",
      "复杂问题由 DeepResearch 拆分为多个可验证子问题。",
      "FusionAgent 对不同检索路径的证据进行去重、排序和融合。"
    ],
    star: {
      S: "单一向量检索难以稳定解决跨文档、多实体和多步推理问题。",
      T: "构建能够组织图谱证据并执行多阶段研究的问答系统。",
      A: "搭建知识图谱、多级检索与四级 Agent 架构，并建立双层评测。",
      R: "F1 从 0.43 提升至 0.82，覆盖 2,746 个 Chunks 与 1,005 个实体。"
    },
    tradeoff: "图谱构建提高了跨文档证据组织能力，但需要额外的实体对齐、社区更新与离线构建成本。",
    quote: "让检索结果形成可追踪的证据结构，而不是一组彼此孤立的文本块。"
  },
  evowork: {
    kind: "opensource",
    meta: "开源项目 · 核心作者",
    title: "EvoWork",
    subtitle: "Self-improving Agent Framework · Runtime / Memory / Skills / Eval / Safety",
    lead: "从零实现 Runtime、Memory、Skills 自进化、Eval 与安全五大子系统，打通评测驱动、失败归因、技能进化与回归验证的 Agent 自改进闭环。",
    tags: ["Advanced Runtime", "Layered Memory", "Skill Evolution", "Eval & Safety"],
    role: "核心作者 / 系统设计与独立实现",
    background: "传统 Agent Loop 往往把工具调度、上下文、评测和权限揉进核心循环：新增工具需要改动主流程，长任务上下文持续膨胀，失败也难以沉淀成可验证的改进。EvoWork 将运行、记忆、进化、评测与安全拆成可独立演进的子系统。",
    flow: [
      { title: "评测驱动", text: "固定任务集与隔离测试集暴露稳定失败" },
      { title: "失败归因", text: "分析轨迹并定位 Runtime、Memory 或 Skill 问题" },
      { title: "技能提案", text: "从失败模式生成可审查的新技能或修订" },
      { title: "沙箱回归", text: "以成功率门控验证收益并检查副作用" },
      { title: "确认集成", text: "用户确认后进入技能库并持续回归", accent: true }
    ],
    metrics: [
      { value: "−45%", label: "多工具任务 LLM 交互轮次" },
      { value: "12.3k → 5.6k", label: "长程任务单任务 Token" },
      { value: "52% → 80%", label: "6 轮技能进化后任务成功率" }
    ],
    contributions: [
      "系统设计：独立从零实现 Runtime、Memory、Skills 自进化、Eval 与安全五大子系统，形成从评测到回归验证的完整闭环。",
      "Runtime 与工具调度：以 Dispatch Table 动态注册、Batch Tool Calling 和 Interrupt 中断恢复扩展 Agent Loop；新增工具平均约 30 行接入且不侵入核心循环。在 120 任务 × 3 轮评测中，LLM 交互轮次降低 45%，端到端耗时降低 38%。",
      "Memory 与 Context Engineering：构建 Episodic JSONL + SemanticVector 双层记忆，以及 Context 四操作主动压缩策略。在 80 组平均 40+ 轮长程任务 × 5 次评测中，单任务 Token 从 12.3k 降至 5.6k，成功率从 71% 提升至 76%。",
      "Eval 驱动的技能自进化：搭建轨迹分析、失败归因、技能提案、沙箱回归与用户确认集成流程，以 60 Case 隔离测试集进行成功率门控。6 轮迭代后成功率从 52% 提升至 80%，失败自动归因覆盖率 85%，技能提案回归通过率 60%。",
      "安全与权限：实现三级权限模型、Dry-run 副作用预览与成本守卫；拦截全部预设高危操作，单任务成本上限 $0.5，评测期间越权调用 0 次。"
    ],
    approach: [
      "Dispatch Table 将工具发现、Schema 与执行器从 Agent Loop 解耦；Batch Tool Calling 合并无依赖调用，Interrupt 保存可恢复状态。",
      "Episodic JSONL 保留可回放事件，SemanticVector 负责语义召回；Context 四操作按任务阶段主动控制上下文规模。",
      "所有技能提案先进入隔离沙箱，只有通过固定回归集且得到用户确认后才集成，避免自进化直接污染生产技能。",
      "权限、Dry-run 与成本守卫位于统一执行边界，在工具真正产生副作用前完成校验。"
    ],
    star: {
      S: "传统 Agent Loop 扩展性差，工具调度、长上下文、失败归因和权限控制相互耦合，改进难以被稳定验证。",
      T: "构建可扩展、可恢复、可评测且受安全边界约束的 Agent Runtime，并让失败能够转化为可回归的技能改进。",
      A: "拆分五大子系统，以动态工具注册、批量调用、双层记忆、主动压缩、隔离评测和用户确认门控组成自改进闭环。",
      R: "多工具交互轮次降低 45%、端到端耗时降低 38%、长任务 Token 降低 54%；6 轮技能进化后成功率提升 28 个百分点，并实现预设高危操作 100% 拦截。"
    },
    tradeoff: "技能进化不会直接自动写入生产技能库：沙箱回归与用户确认增加了一步延迟，但把错误提案和能力回退限制在隔离环境内。"
  },
  workbuddy: {
    kind: "opensource",
    meta: "开源项目 · 核心作者",
    title: "learn-workbuddy",
    subtitle: "Agent Harness · 分层 Memory · RAG / Context",
    lead: "主导 learn-workbuddy 中 Agent Harness、分层 Memory 与 RAG/Context 关键章节设计与实现。",
    tags: ["Agent Harness", "Layered Memory", "RAG / Context", "Regression Evaluation"],
    role: "核心作者 / 章节设计与实现",
    background: "项目以可运行章节拆解桌面 Agent 的工程边界。我的贡献集中在运行循环与工具协议、跨会话记忆，以及可解释检索和回归评测。",
    flow: [
      { title: "Agent Harness", text: "有界 Loop、工具注册、权限、错误与 Replay" },
      { title: "Layered Memory", text: "user / workspace / session 三层作用域" },
      { title: "RAG / Context", text: "来源、作用域、评分与入选原因" },
      { title: "Regression", text: "Recall@K、MRR 与稳定回归", accent: true }
    ],
    metrics: [
      { value: "有界", label: "Agent Loop / Transcript Replay" },
      { value: "3 层", label: "user / workspace / session" },
      { value: "2 项", label: "Recall@K / MRR 回归指标" }
    ],
    contributions: [
      "Agent Harness：设计并实现有界 Agent Loop，统一工具注册与参数校验、权限决策、结构化错误及 Transcript Replay。",
      "Memory：设计并实现 user / workspace / session 分层记忆体系，覆盖作用域隔离、持久化、跨重启恢复和泄漏防护。",
      "RAG / Context：设计并实现可解释检索与上下文组装，呈现召回来源、作用域、评分及入选原因，并以 Recall@K、MRR 建立检索回归。"
    ],
    approach: [
      "将工具注册、Schema 校验、权限判断和错误结构收敛到统一调用边界。",
      "以分层作用域约束记忆读写，支持持久化、恢复和跨作用域泄漏防护。",
      "检索结果保留来源、评分和选择理由，并用固定查询集持续执行 Recall@K / MRR 回归。"
    ],
    star: {
      S: "桌面 Agent 的运行循环、权限、记忆与上下文往往被揉成一个整体，学习者难以单独理解和验证。",
      T: "把关键工程边界拆成可运行章节，并让每一章都能被测试、回放和逐步扩展。",
      A: "主导 Agent Harness、分层 Memory 与 RAG/Context 章节，统一工具协议和错误结构，建立三层记忆作用域及检索回归。",
      R: "形成覆盖有界 Loop、Transcript Replay、跨重启记忆恢复与 Recall@K / MRR 的可运行教学实现。"
    },
    link: { label: "在 GitHub 查看 learn-workbuddy", url: "https://github.com/adongwanai/learn-workbuddy" }
  }
};

const backdrop = document.querySelector("#detail-backdrop");
const modal = document.querySelector("#detail-modal");
const content = document.querySelector("#detail-content");
const closeButton = document.querySelector(".modal-close");
const viewer = document.querySelector("#image-viewer");
const viewerImage = document.querySelector("#viewer-image");
const viewerClose = document.querySelector(".viewer-close");

let returnFocus = null;
let returnHash = "";

function flowMarkup(items = [], title = "系统链路") {
  if (!items.length) return "";
  return `<section class="detail-section"><h3>${title}</h3><div class="detail-flow">${items.map(item => `
    <div class="flow-step${item.accent ? " is-accent" : ""}"><b>${item.title}</b><span>${item.text}</span></div>`).join("")}</div></section>`;
}

function metricsMarkup(items = []) {
  if (!items.length) return "";
  return `<section class="detail-section detail-results"><h3>核心指标</h3><div class="detail-metrics">${items.map(item => `
    <div class="detail-metric"><strong>${item.value}</strong><span>${item.label}</span></div>`).join("")}</div></section>`;
}

function listMarkup(title, items = []) {
  if (!items.length) return "";
  return `<section class="detail-section"><h3>${title}</h3><ol class="detail-list">${items.map(item => `<li>${item}</li>`).join("")}</ol></section>`;
}

function starMarkup(star) {
  if (!star) return "";
  const labels = { S: "背景", T: "任务", A: "行动", R: "结果" };
  return `<section class="detail-section"><h3>STAR 提炼</h3><div class="star-grid">${Object.entries(star).map(([key, value]) => `
    <article class="star-card"><div class="star-card-head"><b>${key}</b><span>${labels[key]}</span></div><p>${value}</p></article>`).join("")}</div></section>`;
}

function imageMarkup(image) {
  if (!image) return "";
  return `<figure class="detail-paper">
    <button type="button" data-full-image="${image.src}" data-full-alt="${image.alt}" aria-label="全屏查看${image.alt}">
      <img src="${image.src}" alt="${image.alt}"><span><b>论文首页</b><small>点击全屏查看</small></span>
    </button>
  </figure>`;
}

function renderDetail(detail) {
  const isPaper = detail.kind === "paper";
  const tags = detail.tags?.length ? `<div class="detail-tags">${detail.tags.map(tag => `<span>${tag}</span>`).join("")}</div>` : "";
  const intro = `<div class="detail-intro"><p>${detail.lead}</p>${tags}</div>`;
  const leadBlock = isPaper
    ? `<div class="detail-paper-overview">${imageMarkup(detail.image)}<div class="detail-paper-summary">${intro}${metricsMarkup(detail.metrics)}</div></div>`
    : `${imageMarkup(detail.image)}${intro}${metricsMarkup(detail.metrics)}`;
  const contextTitle = detail.kind === "education" ? "学习与研究" : isPaper ? "研究问题" : "背景与痛点";
  const context = detail.background ? `<article class="detail-context"><h3>${contextTitle}</h3><p>${detail.background}</p></article>` : "";
  const role = detail.role ? `<article class="detail-context detail-role"><h3>${isPaper ? "作者角色" : "我的角色"}</h3><strong>${detail.role}</strong></article>` : "";
  const overview = context || role ? `<section class="detail-overview">${context}${role}</section>` : "";
  const tradeoff = detail.tradeoff ? `<section class="detail-section"><h3>${isPaper ? "研究边界" : "技术权衡"}</h3><blockquote class="detail-quote">${detail.tradeoff}</blockquote></section>` : "";
  const link = detail.link ? `<section class="detail-section"><a class="detail-link" href="${detail.link.url}" target="_blank" rel="noreferrer">${detail.link.label} ↗</a></section>` : "";

  return `
    <header class="detail-head">
      <p class="entry-meta">${detail.meta}</p>
      <h2 id="detail-title">${detail.title}</h2>
      <p class="paper-title">${detail.subtitle}</p>
    </header>
    <div class="detail-body">
      ${leadBlock}
      ${overview}
      ${flowMarkup(detail.flow, isPaper ? "方法框架" : "系统链路")}
      ${listMarkup(isPaper ? "核心贡献" : detail.kind === "education" ? "主要经历" : "技术方案", detail.contributions)}
      ${listMarkup(isPaper ? "实验与验证" : detail.kind === "education" ? "能力沉淀" : "实现要点", detail.approach)}
      ${starMarkup(detail.star)}
      ${tradeoff}
      ${link}
    </div>`;
}

function openDetail(id, trigger) {
  const detail = details[id];
  if (!detail) return;
  returnFocus = trigger || document.activeElement;
  returnHash = location.hash && !location.hash.startsWith("#detail=") ? location.hash : "";
  content.innerHTML = renderDetail(detail);
  backdrop.hidden = false;
  document.body.classList.add("modal-open");
  history.replaceState(null, "", `#detail=${id}`);
  modal.focus();

  const fullImageButton = content.querySelector("[data-full-image]");
  if (fullImageButton) fullImageButton.addEventListener("click", () => openViewer(fullImageButton.dataset.fullImage, fullImageButton.dataset.fullAlt));
}

function closeDetail() {
  if (backdrop.hidden) return;
  backdrop.hidden = true;
  document.body.classList.remove("modal-open");
  history.replaceState(null, "", returnHash || `${location.pathname}${location.search}`);
  if (returnFocus instanceof HTMLElement) returnFocus.focus();
}

function openViewer(src, alt) {
  viewerImage.src = src;
  viewerImage.alt = alt;
  viewer.hidden = false;
  viewerClose.focus();
}

function closeViewer() {
  if (viewer.hidden) return;
  viewer.hidden = true;
  viewerImage.src = "";
  modal.focus();
}

document.querySelectorAll("[data-detail]").forEach(card => {
  card.addEventListener("click", () => openDetail(card.dataset.detail, card));
});

const filterTabs = document.querySelectorAll("[data-filter]");
const timelineItems = document.querySelectorAll(".timeline-item[data-kind]");

filterTabs.forEach(tab => {
  tab.addEventListener("click", () => {
    const filter = tab.dataset.filter;
    filterTabs.forEach(item => {
      const active = item === tab;
      item.classList.toggle("is-active", active);
      item.setAttribute("aria-selected", String(active));
    });
    timelineItems.forEach(item => {
      item.hidden = filter !== "all" && item.dataset.kind !== filter;
    });
  });
});

closeButton.addEventListener("click", closeDetail);
backdrop.addEventListener("click", event => { if (event.target === backdrop) closeDetail(); });
viewerClose.addEventListener("click", closeViewer);
viewer.addEventListener("click", event => { if (event.target === viewer) closeViewer(); });

document.addEventListener("keydown", event => {
  if (event.key !== "Escape") return;
  if (!viewer.hidden) closeViewer();
  else if (!backdrop.hidden) closeDetail();
});

const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
if (reducedMotion || !("IntersectionObserver" in window)) {
  document.querySelectorAll(".reveal").forEach(item => item.classList.add("is-visible"));
} else {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: "0px 0px -8% 0px" });
  document.querySelectorAll(".reveal").forEach(item => observer.observe(item));
}

const detailHash = location.hash.match(/^#detail=([\w-]+)$/);
if (detailHash && details[detailHash[1]]) openDetail(detailHash[1], null);
