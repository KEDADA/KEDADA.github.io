const details = {
  zju: {
    kind: "education",
    meta: "教育 · 2024.09—2027.06",
    title: "电子科技大学",
    subtitle: "计算机科学与技术硕士 · 全日制",
    lead: "围绕 Agent Harness、Agent Memory 与 Agent 评测体系开展研究和工程实践，聚焦 ViT 对抗样本攻击检测展开科研工作。",
    tags: ["Agent Harness", "Agent Memory", "Agent 评测", "ViT 对抗样本检测"],
    role: "计算机硕士研究生 / 班级团支书",
    background: "在电子科技大学计算机科学与工程学院 NSTL 实验室学习，围绕 Agent Harness、Agent Memory 与 Agent 评测体系开展研究和工程实践，并聚焦 ViT 对抗样本攻击检测展开科研工作。",
    contributions: [
      "主要方向为 Agent Harness、Agent Memory 与 Context Engineering。",
      "围绕固定评测集、结构化轨迹与可回归迭代机制开展实践。",
      "聚焦 ViT 对抗样本攻击检测开展科研工作，研究冻结注意力头中的高效检测信号。",
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
    role: "软件工程本科生 / 班长",
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
    meta: "实习项目 · 大疆车载",
    title: "AI News 智能资讯聚合系统",
    subtitle: "多源采集 · 分级路由 · 个性化精选 · 飞书推送",
    lead: "主导 AI 资讯日报从内容采集、AI 识别、语义分析、个性化排序到飞书推送的完整链路，将分散资讯转化为稳定、低成本、可解释的内部信息服务。",
    tags: ["Route-first", "轻量模型", "Embedding 聚类", "Human-in-the-loop"],
    role: "项目主导 · 全链路设计与实现",
    background: "AI 资讯来源分散、内容质量参差且同一事件重复报道频繁；如果所有内容都交给强模型处理，成本与延迟难以控制，统一榜单也无法兼顾不同用户的兴趣偏好。",
    flow: [
      { title: "多源采集", text: "汇聚资讯并标准化内容" },
      { title: "分级路由", text: "规则预判、轻量预筛、强模型复核" },
      { title: "个性精选", text: "五维得分完成 Top 100→Top 10" },
      { title: "聚类去重", text: "Embedding 聚类结合人工闭环" },
      { title: "飞书推送", text: "生成并交付个性化 AI 日报", accent: true }
    ],
    metrics: [
      { value: "223", label: "订阅用户" },
      { value: "178", label: "当前 DAU" },
      { value: "-75%", label: "推理成本" }
    ],
    contributions: [
      "主导多源采集、分级路由、语义分析、个性化精选与飞书推送全链路，上线面向公司内部的 AI 资讯日报。",
      "设计“确定性规则 + 轻量模型预筛 + 灰区强模型复核”的 route-first 架构；在 500 Case 上实现 98.4% AI 内容召回率。",
      "将单篇平均 Token 从约 3.26K 降至 1.72K（-47.3%），整体推理成本降低约 75%。",
      "以五维得分、用户偏好、时间衰减与信源等级完成 Top 100→Top 10 的可解释排序。",
      "结合 Embedding 事件聚类与 Human-in-the-loop 去重，使 Precision@10 从 0.72 提升至 0.86，同事件重复率从 16.7% 降至 3.8%，人工介入率仅 3.59%。"
    ],
    approach: [
      "确定性规则优先处理边界清晰的内容，减少不必要的模型调用。",
      "轻量模型完成大规模预筛，仅将置信度灰区交给强模型复核，在召回率、成本和时延之间取得平衡。",
      "排序阶段将内容质量与用户兴趣显式拆分，通过五维得分、偏好、时间衰减和信源等级形成可解释结果。",
      "事件级聚类先合并同源与跨源重复信息，再通过少量人工反馈持续修正聚类与去重边界。"
    ],
    star: {
      S: "AI 资讯信源分散、噪声与重复内容多，统一推荐难以匹配用户兴趣；全量使用强模型还会带来较高推理成本。",
      T: "从零搭建可稳定交付的 AI 资讯日报，在保证内容召回和推荐质量的同时控制模型成本与人工负担。",
      A: "主导多源采集与飞书推送链路，设计 route-first 分级内容路由、五维个性化排序，并用 Embedding 聚类和 Human-in-the-loop 完成事件级去重。",
      R: "服务 223 名订阅用户、当前 DAU 178；500 Case 上 AI 内容召回率 98.4%，推理成本下降约 75%，Precision@10 提升至 0.86，同事件重复率降至 3.8%。"
    },
    tradeoff: "分级路由刻意保留强模型复核通道：确定性规则与轻量模型承担大部分流量，灰区内容才升级处理，以 98.4% 的召回率换取约 75% 的成本下降。",
    quote: "先用路由把算力花在真正需要判断的内容上，再用可解释排序把资讯送给真正关心它的人。"
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
    kind: "project",
    meta: "个人项目 · 独立实现",
    title: "EvoWork",
    subtitle: "Self-improving Agent Framework · Runtime / Memory / Skills / Eval / Safety",
    lead: "从零实现 Runtime、Memory、Skills 自进化、Eval 与安全五大子系统，打通评测驱动、失败归因、技能进化与回归验证的 Agent 自改进闭环。",
    tags: ["Advanced Runtime", "Layered Memory", "Skill Evolution", "Eval & Safety"],
    role: "独立开发者 / 系统设计与实现",
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
      "独立实现 Runtime、Memory、Skills 自进化、Eval 与安全五大子系统。",
      "以动态工具注册、批量调用与中断恢复构建可扩展 Agent Runtime。",
      "通过失败归因、技能提案、沙箱回归和用户确认形成自改进闭环。"
    ],
    approach: [
      "Dispatch Table 解耦工具发现与执行，Batch Tool Calling 合并无依赖调用。",
      "双层记忆结合主动压缩，控制长任务上下文规模。",
      "技能变更先通过隔离回归与安全检查，再由用户确认集成。"
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
