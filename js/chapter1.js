// chapter1.js
var chapter1 = {
  title: '第一章 - 刑法基础论',
  content: '刑法基础论',
  children: [
    {
      content: '一、刑法的概念',
      children: [
        {
          content:
            '定义：规定犯罪及其法律后果的法律规范总和，解决定罪与量刑问题，又称犯罪法/刑罚法',
          children: [],
          payload: {tag: 'li', lines: '2,3'},
        },
        {
          content: '制定主体：中国由全国人大及其常委会制定，体现国民意志',
          children: [],
          payload: {tag: 'li', lines: '3,4'},
        },
        {
          content: '公式：刑法 = 犯罪 + 法律后果',
          children: [],
          payload: {tag: 'li', lines: '4,5'},
        },
        {
          content: '提示：只有法律有权规定犯罪及后果（立法机关代表国民意志）',
          children: [],
          payload: {tag: 'li', lines: '5,7'},
        },
      ],
      payload: {tag: 'h2', lines: '1,2'},
    },
    {
      content: '二、刑法的形式（渊源）',
      children: [
        {
          content: '分类：刑法典、单行刑法、附属刑法',
          children: [],
          payload: {tag: 'li', lines: '8,9'},
        },
        {
          content: '刑法典',
          children: [
            {
              content: '定义：全面系统规定犯罪及后果的法典',
              children: [],
              payload: {tag: 'li', lines: '10,11'},
            },
            {
              content: '现行法：1979 年制定，1997 年全面修订《中华人民共和国刑法》',
              children: [],
              payload: {tag: 'li', lines: '11,12'},
            },
            {
              content:
                '提示：《刑法修正案》是修改方式，非形式；共 12 个，《修正案（十二）》2024 年 3 月 1 日生效',
              children: [],
              payload: {tag: 'li', lines: '12,13'},
            },
          ],
          payload: {tag: 'li', lines: '9,13'},
        },
        {
          content: '单行刑法',
          children: [
            {
              content: '定义：规定某一类犯罪/刑法某事项的法律',
              children: [],
              payload: {tag: 'li', lines: '14,15'},
            },
            {
              content: '我国实例：1998 年 12 月《关于惩治骗购外汇、逃汇和非法买卖外汇犯罪的决定》',
              children: [],
              payload: {tag: 'li', lines: '15,16'},
            },
          ],
          payload: {tag: 'li', lines: '13,16'},
        },
        {
          content: '附属刑法',
          children: [
            {
              content: '定义：经济、行政等非专门刑事法中附带规定犯罪与刑罚/刑事责任的条款',
              children: [],
              payload: {tag: 'li', lines: '17,18'},
            },
            {
              content: '我国现状：一般重申刑法典内容，无新犯罪与后果',
              children: [],
              payload: {tag: 'li', lines: '18,19'},
            },
          ],
          payload: {tag: 'li', lines: '16,19'},
        },
        {
          content: '广义/狭义刑法',
          children: [
            {
              content: '广义：刑法典 + 单行刑法 + 附属刑法',
              children: [],
              payload: {tag: 'li', lines: '20,21'},
            },
            {content: '狭义：仅刑法典', children: [], payload: {tag: 'li', lines: '21,22'}},
          ],
          payload: {tag: 'li', lines: '19,22'},
        },
        {
          content: '普通刑法与特别刑法',
          children: [
            {content: '普通：刑法典', children: [], payload: {tag: 'li', lines: '23,24'}},
            {
              content: '特别：单行刑法、附属刑法（优先适用规则：犯罪触及时特别刑法优先）',
              children: [],
              payload: {tag: 'li', lines: '24,25'},
            },
          ],
          payload: {tag: 'li', lines: '22,25'},
        },
        {
          content:
            '注意：附属刑法仅能附带规定在法律中（行政法规无此权力，因犯罪与刑罚由全国人大及其常委会规定）',
          children: [],
          payload: {tag: 'li', lines: '25,27'},
        },
      ],
      payload: {tag: 'h2', lines: '7,8'},
    },
    {
      content: '三、刑法的特征',
      children: [
        {
          content: '调整范围广泛性：保护利益/对象广（国家安全→个人权益），民法等仅涉某一方面',
          children: [],
          payload: {tag: 'li', lines: '28,29'},
        },
        {
          content: '调整对象专门性：规定犯罪及后果，用刑罚斗争、追刑责，其他法律任务/方法不同',
          children: [],
          payload: {tag: 'li', lines: '29,30'},
        },
        {
          content: '刑罚制裁严厉性：强制力度更强，含剥夺生命、自由、财产、资格等',
          children: [],
          payload: {tag: 'li', lines: '30,31'},
        },
        {
          content: '发动补充性和保障性：“最后手段”，其他部门法无法充分保护时才用，是其他法律保障法',
          children: [],
          payload: {tag: 'li', lines: '31,32'},
        },
        {
          content:
            '提示：与民法等是位阶关系（非对立），如拾得遗忘物拒不交，既涉民法不当得利，也构刑法侵占罪',
          children: [],
          payload: {tag: 'li', lines: '32,34'},
        },
      ],
      payload: {tag: 'h2', lines: '27,28'},
    },
    {
      content: '四、刑法的体系',
      children: [
        {
          content: '刑法体系',
          children: [
            {
              content: '定义：刑法的组成与结构，我国采大陆法系法典模式',
              children: [],
              payload: {tag: 'li', lines: '36,37'},
            },
            {
              content:
                '架构：分“总则”“分则”两编 + 附则；总则 5 章（犯罪与刑罚通用规则），分则 10 章（具体犯罪罪状、法定刑）',
              children: [],
              payload: {tag: 'li', lines: '37,38'},
            },
          ],
          payload: {tag: 'li', lines: '35,38'},
        },
        {
          content: '刑法条文结构',
          children: [
            {
              content: '总则条文：规定刑事法律规则（基本原则、适用范围、犯罪构成一般要件等）',
              children: [],
              payload: {tag: 'li', lines: '39,40'},
            },
            {
              content: '分则条文：前半罪状（构成要件），后半法定刑（法律后果），如第 263 条抢劫罪',
              children: [],
              payload: {tag: 'li', lines: '40,41'},
            },
            {
              content:
                '立法模式：依位阶分编、章、节、条、款、项，如《刑法》第 142 条之一（妨害药品管理罪）示例',
              children: [],
              payload: {tag: 'li', lines: '41,43'},
            },
          ],
          payload: {tag: 'li', lines: '38,43'},
        },
      ],
      payload: {tag: 'h2', lines: '34,35'},
    },
    {
      content: '五、刑法的目的',
      children: [
        {
          content: '法条依据：第 1 条（惩罚犯罪，保护人民，依宪法结合实际制定）',
          children: [],
          payload: {tag: 'li', lines: '44,45'},
        },
        {
          content: '层级分类',
          children: [
            {
              content: '整体目的：保护个人、国家、社会法益整体',
              children: [],
              payload: {tag: 'li', lines: '46,47'},
            },
            {
              content: '章节目的：分则 10 章各有独特目的（如第四章保护公民人身、民主权利 ）',
              children: [],
              payload: {tag: 'li', lines: '47,48'},
            },
            {
              content: '条文目的：分则具体条文目的（如故意杀人罪保护生命权 ）',
              children: [],
              payload: {tag: 'li', lines: '48,49'},
            },
          ],
          payload: {tag: 'li', lines: '45,49'},
        },
        {
          content:
            '提示：定罪需考虑条文目的+章节位置（如用自己头像伪造人民币，不侵犯货币公共信用，不构成伪造货币罪 ）',
          children: [],
          payload: {tag: 'li', lines: '49,51'},
        },
      ],
      payload: {tag: 'h2', lines: '43,44'},
    },
    {
      content: '六、刑法的任务',
      children: [
        {
          content:
            '法条依据：第 2 条（用刑罚同犯罪斗争，卫国安、保政权制度、护财产、保权利、维秩序、障建设 ）',
          children: [],
          payload: {tag: 'li', lines: '52,53'},
        },
        {
          content: '任务分类',
          children: [
            {
              content:
                '惩罚任务：用刑罚斗争，含一般预防（阻未犯罪者）、特殊预防（阻已犯罪者再犯 ）',
              children: [],
              payload: {tag: 'li', lines: '54,55'},
            },
            {
              content:
                '保护任务：通过惩罚犯罪保法益，分政治（卫国、保政权）、经济（护国有/集体/私有财产 ）、权利（保公民人身等权利 ）、秩序（维社会、经济秩序，障建设 ）',
              children: [],
              payload: {tag: 'li', lines: '55,56'},
            },
          ],
          payload: {tag: 'li', lines: '53,56'},
        },
        {
          content:
            '逻辑：完成任务实现目的→刑法目的决定任务（惩罚目的→惩罚任务；保护目的→保护任务 ）',
          children: [],
          payload: {tag: 'li', lines: '56,58'},
        },
      ],
      payload: {tag: 'h2', lines: '51,52'},
    },
    {
      content: '七、刑法的机能',
      children: [
        {
          content: '定义：刑法积极作用，由目的决定，作用于任务、法益保护',
          children: [],
          payload: {tag: 'li', lines: '59,60'},
        },
        {
          content: '机能分类',
          children: [
            {
              content: '规制机能：规定犯罪与刑罚，约束行为（如甲知放火最高死刑，放弃放火 ）',
              children: [],
              payload: {tag: 'li', lines: '61,62'},
            },
            {
              content:
                '保护机能：保护国家、社会、个人法益（分则章保护同类法益，具体罪名保护直接法益，如侵犯财产罪护公私财产权；强奸罪护妇女性自主权 ）',
              children: [],
              payload: {tag: 'li', lines: '62,63'},
            },
            {
              content:
                '保障机能：保公民不受国家非法刑罚，保犯罪人不受法外刑罚（刑法是“善良人、犯罪人大宪章” ）',
              children: [],
              payload: {tag: 'li', lines: '63,64'},
            },
          ],
          payload: {tag: 'li', lines: '60,64'},
        },
        {
          content: '关系：犯罪前规制、犯罪后保护，人权保障全程；对行为人有利体现保障，不利体现保护',
          children: [],
          payload: {tag: 'li', lines: '64,65'},
        },
        {
          content: '真题示例：“猎狐行动”缉拿外逃嫌犯→实现保护机能（选 C ）',
          children: [],
          payload: {tag: 'li', lines: '65,67'},
        },
      ],
      payload: {tag: 'h2', lines: '58,59'},
    },
    {
      content: '八、刑法的解释',
      children: [
        {
          content: '定义：阐明刑法条文含义（文字争议需合理解释 ）',
          children: [],
          payload: {tag: 'li', lines: '68,69'},
        },
        {
          content: '解释的效力分类',
          children: [
            {
              content:
                '立法解释：全国人大及其常委会对刑法条文的解释，含 3 种形式（起草/修订说明、专条解释、决议解释 ），主体仅限全国人大及其常委会',
              children: [],
              payload: {tag: 'li', lines: '70,71'},
            },
            {
              content:
                '司法解释：最高法、最高检对刑法条文的解释，主体仅限“两高” ，如最高法对审判、最高检对检察中刑法问题的解释',
              children: [],
              payload: {tag: 'li', lines: '71,72'},
            },
            {
              content:
                '学理解释：有权机关外的机关、团体、个人解释（无法律约束力，靠“以理服人” ），立法、司法解释冲突时，立法解释优先',
              children: [],
              payload: {tag: 'li', lines: '72,73'},
            },
          ],
          payload: {tag: 'li', lines: '69,73'},
        },
        {
          content: '解释的方法分类',
          children: [
            {
              content:
                '文理解释：依条文字面含义说明（如持枪抢劫的“枪” ，优先适用，遇歧义/不合理则用论理解释 ）',
              children: [],
              payload: {tag: 'li', lines: '74,75'},
            },
            {
              content: '论理解释：依立法精神与目的说明，含',
              children: [
                {
                  content:
                    '目的解释：按刑法规范目的解释（如甲仿人民币换头像，不侵犯货币公共信用，不构成伪造货币罪 ），分主观（明立法意图 ）、客观（应社会需要 ）、折中（兼顾二者 ）',
                  children: [],
                  payload: {tag: 'li', lines: '76,77'},
                },
                {
                  content:
                    '扩大解释：对用语作大于字面含义的解释（需考虑刑法目的，如“抢劫银行”含抢劫运钞车；常考示例：“羁押时怀孕妇女”“借记卡→信用卡”等 ）',
                  children: [],
                  payload: {tag: 'li', lines: '77,78'},
                },
                {
                  content:
                    '缩小解释：对用语作小于字面含义的解释（如为境外取情报罪，“情报”缩为关系国家安全、未公开或依法不应公开事项 ）',
                  children: [],
                  payload: {tag: 'li', lines: '78,79'},
                },
                {
                  content:
                    '当然解释：“不言自明”，依逻辑推导（如“举轻以明重、举重以明轻” ，前提是法律无明文规定，对比事项“性质同、程度异” ，入罪举轻明重，出罪举重明轻 ）',
                  children: [],
                  payload: {tag: 'li', lines: '79,80'},
                },
                {
                  content:
                    '比较解释：参考域外刑事立法、判例阐述含义（如国外盗窃含公然取财，我国理论探讨但考试未采纳 ）',
                  children: [],
                  payload: {tag: 'li', lines: '80,81'},
                },
                {
                  content:
                    '历史解释：从历史沿革角度提供合理性（如强制猥亵罪从流氓罪分解，主观需流氓动机 ）',
                  children: [],
                  payload: {tag: 'li', lines: '81,82'},
                },
              ],
              payload: {tag: 'li', lines: '75,82'},
            },
            {
              content:
                '解释方法关系：扩大解释与类推解释区别（扩大未超国民预测可能，类推超；示例：酒驾机动车≠酒驾飞机；“欺骗婴幼儿脱离监护”属扩大；“人→物”属类推 ）',
              children: [],
              payload: {tag: 'li', lines: '82,83'},
            },
            {
              content: '真题示例：全国人大常委会对“信用卡”的解释→立法解释（选 A ）',
              children: [],
              payload: {tag: 'li', lines: '83,85'},
            },
          ],
          payload: {tag: 'li', lines: '73,85'},
        },
      ],
      payload: {tag: 'h2', lines: '67,68'},
    },
    {
      content: '九、刑法的基本原则',
      children: [
        {
          content:
            '定义：刑法明文规定，刑事立法、司法应遵循的准则（罪刑法定、适用平等、罪责刑相适应，罪刑法定是核心 ）',
          children: [],
          payload: {tag: 'li', lines: '86,87'},
        },
        {
          content: '罪刑法定原则',
          children: [
            {
              content:
                '法条依据：第 3 条（法明文规定为犯罪的，依法定罪处刑；未明文规定的，不得定罪处刑 ）',
              children: [],
              payload: {tag: 'li', lines: '88,89'},
            },
            {
              content:
                '含义：无法律则无犯罪、无刑罚（法无明文不为罪、不处罚 ），限制国家权力，保国民自由人权（刑法是“犯罪清单”，清单内国家可罚，外是国民自由 ）',
              children: [],
              payload: {tag: 'li', lines: '89,90'},
            },
            {
              content: '基本内容推导（4 层 ）',
              children: [
                {
                  content: '“罪”法定：犯罪由法律明文规定',
                  children: [],
                  payload: {tag: 'li', lines: '91,92'},
                },
                {
                  content: '“刑”法定：量刑、刑种由法律明文规定',
                  children: [],
                  payload: {tag: 'li', lines: '92,93'},
                },
                {
                  content: '罪刑由法律“定”：只有法律可规定罪和刑',
                  children: [],
                  payload: {tag: 'li', lines: '93,94'},
                },
                {
                  content: '罪刑法要“定”：罪刑需法律明确规定',
                  children: [],
                  payload: {tag: 'li', lines: '94,95'},
                },
              ],
              payload: {tag: 'li', lines: '90,95'},
            },
            {
              content: '具体要求（6 点 ）',
              children: [
                {
                  content:
                    '法定化：犯罪和刑罚须事先由法律明文规定（法律指全国人大及其常委会制定的有效法律、法令 ）',
                  children: [],
                  payload: {tag: 'li', lines: '96,97'},
                },
                {
                  content:
                    '明确化：对犯罪及后果作具体、清晰文字表述；禁止习惯法、类推解释、事后重法（不利被告 ）、不确定罪状与刑罚',
                  children: [],
                  payload: {tag: 'li', lines: '97,98'},
                },
                {
                  content: '适当性：合理确定犯罪范围与惩罚程度，防滥刑；禁止过分、残酷刑罚',
                  children: [],
                  payload: {tag: 'li', lines: '98,99'},
                },
                {
                  content:
                    '禁止事后法：事后法利于被告时可适用（从旧兼从轻，行为后生效轻法，仅在其轻于行为时法才适用 ）',
                  children: [],
                  payload: {tag: 'li', lines: '99,100'},
                },
                {
                  content: '禁止类推：无明文时，不得比照类似条文推理（类推违反罪刑法定 ）',
                  children: [],
                  payload: {tag: 'li', lines: '100,101'},
                },
                {
                  content: '禁止绝对不确定刑罚：刑罚无上下限，因无确定性违反原则',
                  children: [],
                  payload: {tag: 'li', lines: '101,102'},
                },
              ],
              payload: {tag: 'li', lines: '95,102'},
            },
            {
              content: '主要体现',
              children: [
                {
                  content:
                    '刑事立法：总则定犯罪定义、要件、刑种等；分则明具体犯罪要件、法定刑；为量刑提供标准',
                  children: [],
                  payload: {tag: 'li', lines: '103,104'},
                },
                {
                  content: '刑事司法：废除类推，要求司法机关严格解释、适用刑法，依法定罪处刑',
                  children: [],
                  payload: {tag: 'li', lines: '104,105'},
                },
              ],
              payload: {tag: 'li', lines: '102,105'},
            },
            {
              content:
                '真题示例：符合罪刑法定原则的选项（ABCD，犯罪与刑由立法定；禁止重法溯及；禁止习惯法；禁止不定期刑 ）',
              children: [],
              payload: {tag: 'li', lines: '105,106'},
            },
          ],
          payload: {tag: 'li', lines: '87,106'},
        },
        {
          content: '刑法适用平等原则',
          children: [
            {
              content: '法条依据：第 4 条（对任何人犯罪，适用法律平等，不许有超越特权 ）',
              children: [],
              payload: {tag: 'li', lines: '107,108'},
            },
            {
              content: '基本内容：对所有人，不论身份等，定罪量刑、行刑标准平等，无歧视优待',
              children: [],
              payload: {tag: 'li', lines: '108,109'},
            },
            {
              content: '具体要求：平等认定犯罪、裁量刑罚、执行刑罚（同案同判，案件对比体现平等 ）',
              children: [],
              payload: {tag: 'li', lines: '109,110'},
            },
          ],
          payload: {tag: 'li', lines: '106,110'},
        },
        {
          content: '罪责刑相适应原则',
          children: [
            {
              content: '法条依据：第 5 条（刑罚轻重与犯罪行为、刑事责任相适应 ）',
              children: [],
              payload: {tag: 'li', lines: '111,112'},
            },
            {
              content: '基本内容',
              children: [
                {
                  content: '刑罚轻重与客观犯罪行为、危害结果适应（依社会危害程度定刑罚 ）',
                  children: [],
                  payload: {tag: 'li', lines: '113,114'},
                },
                {
                  content: '刑罚轻重与犯罪人主观恶性、再犯危险性适应',
                  children: [],
                  payload: {tag: 'li', lines: '114,115'},
                },
              ],
              payload: {tag: 'li', lines: '112,115'},
            },
            {
              content: '公式：刑罚轻重=社会危害性+主观恶性+再犯可能性',
              children: [],
              payload: {tag: 'li', lines: '115,116'},
            },
            {
              content: '主要体现',
              children: [
                {
                  content:
                    '总则量刑原则：依犯罪事实、性质、情节、危害程度量刑，使刑罚与社会危害性适应',
                  children: [],
                  payload: {tag: 'li', lines: '117,118'},
                },
                {
                  content:
                    '总则量刑规则：累犯从重，未成年等从宽，中止犯、过失犯处罚轻于既遂、故意犯（体现与主观恶性、人身危险性适应 ）',
                  children: [],
                  payload: {tag: 'li', lines: '118,119'},
                },
                {
                  content: '分则法定刑：对各罪依性质、情节、危害程度定法定刑，重罪重刑，轻罪轻刑',
                  children: [],
                  payload: {tag: 'li', lines: '119,120'},
                },
              ],
              payload: {tag: 'li', lines: '116,120'},
            },
            {
              content: '真题示例',
              children: [
                {
                  content: '体现原则：“放火罪与失火罪构成要件及法定刑不同”（选 D ）',
                  children: [],
                  payload: {tag: 'li', lines: '121,122'},
                },
                {
                  content: '违背原则：量刑考虑“对高铁建设贡献”（违背罪责刑相适应，选 C ）',
                  children: [],
                  payload: {tag: 'li', lines: '122,123'},
                },
                {
                  content:
                    '符合原则：气枪射钉弹案（符合罪刑法定、罪责刑相适应、主客观统一，选 ABD ）',
                  children: [],
                  payload: {tag: 'li', lines: '123,125'},
                },
              ],
              payload: {tag: 'li', lines: '120,125'},
            },
          ],
          payload: {tag: 'li', lines: '110,125'},
        },
      ],
      payload: {tag: 'h2', lines: '85,86'},
    },
    {
      content: '十、刑法的效力范围',
      children: [
        {
          content: '定义：刑法在空间、时间方面的适用范围（分空间效力、时间效力 ）',
          children: [],
          payload: {tag: 'li', lines: '126,127'},
        },
        {
          content: '刑法的空间效力',
          children: [
            {
              content:
                '定义：刑法对地域、人的效力（解决适用地域、人员范围 ），原则：属地为主，属人、保护、普遍为辅',
              children: [],
              payload: {tag: 'li', lines: '128,129'},
            },
            {
              content: '属地管辖（国内犯 ）',
              children: [
                {
                  content:
                    '法条依据：第 6 条（凡在我国领域内犯罪，除特别规定外，适用本法；领域含领土、领水、领空；犯罪地含行为地、结果地，有一项在境内即属地管辖 ）',
                  children: [],
                  payload: {tag: 'li', lines: '130,131'},
                },
                {
                  content:
                    '特别规定：外交代表刑事管辖豁免（通过外交途径解决 ）；港澳特区犯罪（由当地司法机关适用本地法 ）；民族自治地方变通规定（报全常批准 ）',
                  children: [],
                  payload: {tag: 'li', lines: '131,132'},
                },
                {
                  content:
                    '行为地/结果地细化：行为地含预备、实行、共同犯罪行为地；结果地含实害、危险结果地，共同犯罪结果地',
                  children: [],
                  payload: {tag: 'li', lines: '132,133'},
                },
              ],
              payload: {tag: 'li', lines: '129,133'},
            },
            {
              content: '属人管辖（国外犯-中国人 ）',
              children: [
                {
                  content:
                    '法条依据：第 7 条（我国公民在国外犯本法罪，适用本法；国家工作人员、军人一律追究；普通公民罪轻（最高刑 3 年以下 ）可不予追究 ）',
                  children: [],
                  payload: {tag: 'li', lines: '134,135'},
                },
              ],
              payload: {tag: 'li', lines: '133,135'},
            },
            {
              content: '保护管辖（国外犯-外国人对我国/公民犯罪 ）',
              children: [
                {
                  content:
                    '法条依据：第 8 条（外国人在国外对我国/公民犯罪，按本法最低刑 3 年以上，且犯罪地法也认为犯罪的，可适用本法 ）',
                  children: [],
                  payload: {tag: 'li', lines: '136,137'},
                },
              ],
              payload: {tag: 'li', lines: '135,137'},
            },
            {
              content: '普遍管辖（国外犯-国际犯罪 ）',
              children: [
                {
                  content:
                    '法条依据：第 9 条（我国缔结/参加国际条约规定的罪，在义务范围内行使管辖权，适用本法 ）',
                  children: [],
                  payload: {tag: 'li', lines: '138,139'},
                },
                {
                  content: '适用条件：条约规定罪；在我国领域内犯罪；可引渡或起诉',
                  children: [],
                  payload: {tag: 'li', lines: '139,140'},
                },
              ],
              payload: {tag: 'li', lines: '137,140'},
            },
            {
              content: '对外国刑事判决的消极承认',
              children: [
                {
                  content:
                    '法条依据：第 10 条（在国外犯罪虽经外国审判，仍可依本法追究；已受处罚的，可免除/减轻处罚 ）',
                  children: [],
                  payload: {tag: 'li', lines: '141,142'},
                },
              ],
              payload: {tag: 'li', lines: '140,142'},
            },
            {
              content: '真题示例',
              children: [
                {
                  content: '甲国公民在乙国飞机（飞越丙国领空 ）殴打中国乘客→保护管辖（选 B ）',
                  children: [],
                  payload: {tag: 'li', lines: '143,144'},
                },
                {
                  content:
                    '我国可依普遍管辖的毒品犯罪：A（无国籍人在外生产毒品后入境 ）、B（他国公民购毒回本国贩卖后逃至我国 ）、D（他国公民携毒乘飞机在我国机场被抓 ）（选 ABD ）',
                  children: [],
                  payload: {tag: 'li', lines: '144,145'},
                },
              ],
              payload: {tag: 'li', lines: '142,145'},
            },
          ],
          payload: {tag: 'li', lines: '127,145'},
        },
        {
          content: '刑法的时间效力',
          children: [
            {
              content: '定义：刑法生效、失效时间，及对生效前行为的溯及力',
              children: [],
              payload: {tag: 'li', lines: '146,147'},
            },
            {
              content:
                '生效时间：公布后一段时间生效（如《刑法修正案（十二）》2024 年 3 月 1 日生效 ）；自公布之日起生效（如骗购外汇等决定 ）',
              children: [],
              payload: {tag: 'li', lines: '147,148'},
            },
            {
              content:
                '失效时间：明示失效（立法机关宣布废止，如《惩治军人违反职责罪暂行条例》 ）；自然失效（新法取代旧法，或特殊立法条件消失 ）',
              children: [],
              payload: {tag: 'li', lines: '148,149'},
            },
            {
              content: '溯及力（对生效前行为的效力 ）',
              children: [
                {
                  content:
                    '学说：从旧（仅依行为时法 ）、从旧兼从轻（行为时法为主，新法轻时用新法 ）、从新（依新法 ）、从新兼从轻（新法为主，旧法轻时用旧法 ）',
                  children: [],
                  payload: {tag: 'li', lines: '150,151'},
                },
                {
                  content:
                    '我国原则：从旧兼从轻（第 12 条 ），适用于未决犯；已决犯不溯及（裁判力高于溯及力 ）',
                  children: [],
                  payload: {tag: 'li', lines: '151,152'},
                },
                {
                  content:
                    '特别情况：刑法修正案是刑法组成部分，原则从旧兼从轻；司法解释效力：针对条文含义，时间效力对新法、旧法条文均适用（有利被告时可溯及 ）',
                  children: [],
                  payload: {tag: 'li', lines: '152,153'},
                },
              ],
              payload: {tag: 'li', lines: '149,153'},
            },
            {
              content: '真题示例：刑法溯及力表述正确的→D（选 D ）；司法解释适用→A（选 A ）',
              children: [],
              payload: {tag: 'li', lines: '153,154'},
            },
          ],
          payload: {tag: 'li', lines: '145,154'},
        },
      ],
      payload: {tag: 'h2', lines: '125,126'},
    },
  ],
  payload: {tag: 'h1', lines: '0,1'},
};
