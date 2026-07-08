import type { LegalDoc } from "@/components/legal/LegalPage";

// Bilingual Privacy Policy. English matches the original page; Chinese is from
// the approved translation. Nested lists in the original are flattened into the
// shared block model (callout / paragraph / list / indented sub-clauses).
export const privacyDoc: LegalDoc = {
  title: { en: "Privacy Policy", zh: "隐私政策" },
  sections: [
    {
      heading: { en: "Introduction", zh: "简介" },
      blocks: [
        {
          kind: "p",
          text: {
            en: "We want to make sure you understand what personal data we may collect about you when you interact with http://soscare.sg/, how we use your personal data, and how we keep it safe.",
            zh: "我们重视您的个人资料，并致力于让您清楚了解：当您游览或使用本网站（http://soscare.sg/）时，我们可能会收集您的个人资料、如何使用这些资料，以及我们将采取哪些措施保障您的个人资料安全。",
          },
        },
        {
          kind: "p",
          text: {
            en: "Personal data means data from which you can be identified directly (e.g. your name) or indirectly (e.g. your IP address).",
            zh: "本隐私政策所称的“个人资料”，是指能够直接或间接识别您身份的任何资料。例如，您的姓名属于可直接识别个人身份的资料，而您的 IP 地址则可能属于可间接识别个人身份的资料。",
          },
        },
        {
          kind: "p",
          text: { en: "This privacy notice applies to:", zh: "本隐私政策适用于：" },
        },
        {
          kind: "ul",
          items: {
            en: [
              "visitors to our website",
              "online customers of our products and services.",
              "individuals who contact, or are contacted by, us.",
            ],
            zh: [
              "游览本网站的访客；",
              "购买我们产品及服务的线上客户；以及",
              "与我们联系，或由我们主动联系的个人。",
            ],
          },
        },
        {
          kind: "p",
          text: {
            en: "We may change this privacy notice from time to time. This privacy notice was last updated in June 2026. We encourage you to review this privacy notice periodically.",
            zh: "我们可能会不时更新或修订本隐私政策，以反映法律法规、业务运营或服务内容的变更。本隐私政策最后更新于 2026 年 6 月。我们建议您定期查阅本隐私政策，以了解最新内容。",
          },
        },
      ],
    },
    {
      heading: {
        en: "How do we collect your personal data?",
        zh: "个人资料的收集方式",
      },
      blocks: [
        {
          kind: "callout",
          text: {
            en: "Summary: We collect your personal data in different ways, including your direct or indirect interactions with us through our website, and other sources, including public sources, our trusted business partners, our advertising partners and data brokers.",
            zh: "摘要：我们以不同方式收集您的个人资料，包括直接或间接通过本网站与我们进行互动时所提供的个人资料，以及来自其他来源的个人资料，包括公开资料、我们可信赖的业务合作伙伴、广告合作伙伴及数据服务提供商所提供的资料。",
          },
        },
        {
          kind: "p",
          text: {
            en: "We collect your personal data from different sources. We may combine information that we have about you from these different sources.",
            zh: "我们会从不同来源收集您的个人资料，并可能将从不同来源取得的相关资料进行整合，以便为您提供更完善的产品、服务及用户体验。",
          },
        },
        {
          kind: "p",
          text: {
            en: "We may collect your personal data directly from you, such as when you:",
            zh: "我们可能直接向您收集个人资料，包括但不限于您在以下情况下：",
          },
        },
        {
          kind: "ul",
          items: {
            en: [
              "visit or use our websites or mobile applications.",
              "buy one of our products online.",
              "enter a competition, promotion or complete a survey.",
              "provide it to us, or interact with us directly, e.g.",
              "when you get in touch for customer support, when you register on one of our digital platforms, sign up to our newsletters or when you indicated your profiling and targeting preferences.",
            ],
            zh: [
              "游览或使用本网站或我们的流动应用程序；",
              "在线购买我们的产品；",
              "参与比赛、推广活动或完成问卷调查；以及",
              "向我们提供个人资料，或直接与我们互动，例如：",
              "联系我们的客户服务团队寻求协助；于我们的数码平台完成注册；订阅我们的电子通讯（Newsletter）；或设定或更新您对个人化内容及定向推广的偏好。",
            ],
          },
        },
        {
          kind: "p",
          text: {
            en: "We may collect your personal data from other sources such as:",
            zh: "我们亦可能从其他来源收集您的个人资料，包括：",
          },
        },
        {
          kind: "ul",
          items: {
            en: [
              "Our trusted business partners – e.g. operators of loyalty programmes.",
              "Third party advertising partners.",
              "Data brokers.",
              "Public sources – e.g. open source, public domain registers.",
              "From third party websites that use our cookies.",
              "Social media platforms (such as Facebook, Instagram, Twitter, LinkedIn, YouTube, TikTok) where they provide us with advertising-related services.",
            ],
            zh: [
              "我们可信赖的业务合作伙伴，例如忠诚奖励计划（Loyalty Programme）的营运商；",
              "第三方广告合作伙伴；",
              "数据服务提供商；",
              "公开来源，例如开放数据资源及公共登记册；",
              "使用我们 Cookie 技术的第三方网站；以及",
              "社交媒体平台（如 Facebook、Instagram、X、LinkedIn、YouTube 及 TikTok），当该等平台向我们提供与广告相关的服务。",
            ],
          },
        },
        {
          kind: "p",
          text: {
            en: "We also collect your personal data while monitoring:",
            zh: "我们亦可能在监测以下渠道及平台时收集您的个人资料：",
          },
        },
        {
          kind: "ul",
          items: {
            en: [
              "our technology tools and services, including our websites and email communications sent to and from us.",
              "other websites – this may include your public personal data, for example when we monitor digital conversations on public platforms to understand what people are saying about us or the consumer goods industry more generally.",
            ],
            zh: [
              "我们的技术工具及服务，包括本网站，以及由我们发出或发送予我们的电子邮件通讯；以及",
              "其他网站——当我们监测公开平台上的数码互动内容，以了解公众对我们、我们的产品及服务，或整体消费品行业的看法时，可能会收集您公开披露的个人资料。",
            ],
          },
        },
      ],
    },
    {
      heading: {
        en: "What personal data do we collect about you?",
        zh: "我们收集您哪些个人数据？",
      },
      blocks: [
        {
          kind: "callout",
          text: {
            en: "Summary: We collect a range of personal data that may identify you directly (e.g. your name, contact details, and social media information) or indirectly (e.g. your IP address or cookie ID). We also collect technical information about the devices you use to access our websites and information about your interaction with our websites.",
            zh: "摘要：我们会收集各类个人资料，当中包括可直接识别您身份的资料（例如您的姓名、联络资料及社交媒体资料），以及可间接识别您身份的资料（例如您的 IP 地址或 Cookie ID）。此外，我们亦会收集您用于游览本网站的装置相关技术资料，以及您与本网站互动过程中所产生的相关资料。",
          },
        },
        {
          kind: "p",
          text: {
            en: "The personal data that we process includes:",
            zh: "我们处理的个人资料包括：",
          },
        },
        {
          kind: "ul",
          items: {
            en: [
              "Basic information – such as your name, age, date of birth, gender.",
              "Contact information – such as your postal address, email address, phone number, social media username and profile.",
              "Order information – where applicable, this may include your payment information (e.g. payment card details), your online purchase history, fulfilment and shipping related information, after-purchase related information (e.g. returns, refunds).",
              "Product use information – information related to your use of our products including opinions, reviews and feedback.",
              "Marketing and Communications information – such as your preference in receiving marketing from us and our third parties and your communication preferences, feedback and survey responses.",
              "Consumer insight information – such as your perceptions, attitudes and interests.",
              "Health information – such as health status and health conditions, medical or treatment history or health information inferred from information you have provided to us.",
              "Audio Visual information – any photographs or video recordings in which you appear and call recordings.",
            ],
            zh: [
              "基本资料——例如您的姓名、年龄、出生日期及性别。",
              "联络资料——例如您的邮寄地址、电子邮件地址、电话号码、社交媒体用户名及个人资料。",
              "订单资料——在适用情况下，可能包括您的付款资料（例如付款卡资料）、网上购买记录、订单履行及配送相关资料，以及售后服务相关资料（例如退货及退款）。",
              "产品使用资料——与您使用我们产品相关的资料，包括您的意见、评价及反馈。",
              "市场推广及通讯资料——例如您接收我们及第三方市场推广资讯的偏好、通讯偏好，以及您所提供的反馈及问卷调查回应。",
              "消费者洞察资料——例如您的看法、态度及兴趣。",
              "健康资料——例如您的健康状况、健康状况相关资料、医疗或治疗记录，或根据您向我们提供的资料所推断的健康相关资料。",
              "影音资料——包括载有您影像的照片、影片，以及通话录音。",
            ],
          },
        },
        {
          kind: "p",
          text: { en: "Technical information – such as:", zh: "技术资料——例如：" },
        },
        {
          kind: "ul",
          items: {
            en: [
              "information about the device you use to interact with us (including the type of browser and operating system and version you use, unique device identifier, hardware model and mobile network information).",
              "information from your visits to this website, including access times (including time zone settings and location), pages viewed, URLs clicked on, your IP address and the pages you visited before and after navigating to this website.",
              "when emails and messages sent by us were opened.",
              "social media tracking pixels that allow platforms such as Facebook and Twitter to interact with this website and give feedback on your actions; and",
              "other identifiers such as Google ID to allow us to carry out different marketing campaigns.",
            ],
            zh: [
              "您用于与我们互动的装置相关资料，包括您所使用的浏览器类型、操作系统及版本、装置唯一识别码（Unique Device Identifier）、硬件型号及流动网络资料；",
              "您游览本网站时所产生的资料，包括浏览时间（包括时区设定及所在地）、浏览页面、所点击的 URL、您的 IP 地址，以及进入本网站前后所浏览的网页；",
              "我们发送的电子邮件或讯息是否已被开启；",
              "社交媒体追踪像素（Tracking Pixels），使 Facebook、X（前称 Twitter）等平台能够与本网站互动，并向我们提供您于本网站活动的相关资讯；以及",
              "其他识别码（例如 Google ID），以便我们开展不同的市场推广活动。",
            ],
          },
        },
        {
          kind: "p",
          text: {
            en: "Other information you provide to us – including via:",
            zh: "您向我们提供的其他资料——包括但不限于通过以下方式提供的资料：",
          },
        },
        {
          kind: "ul",
          items: {
            en: [
              "email communications and social media direct messages.",
              "registration forms when you register for an online event.",
            ],
            zh: [
              "电子邮件通讯及社交媒体私人讯息；以及",
              "您报名参加线上活动时所填写的注册表格。",
            ],
          },
        },
      ],
    },
    {
      heading: {
        en: "How do we use your personal data?",
        zh: "个人资料的使用方式",
      },
      blocks: [
        {
          kind: "callout",
          text: {
            en: "Summary: We use your personal data for a number of reasons, including to manage our relationship with you, understand your preferences better and to provide you with products and services. We also use your personal data to improve our internal processes, business and operations and to meet our compliance needs and legal obligations. For each of our purposes, we have included the legal basis we rely upon to process your personal data.",
            zh: "摘要：我们基于多种目的使用您的个人资料，包括管理与您的关系、深入了解您的偏好，以及为您提供相关产品及服务。此外，我们亦会使用您的个人资料，以优化我们的内部流程、业务运作及营运效率，并履行适用法律法规所规定的合规要求及法律义务。针对上述各项处理目的，我们均已列明处理您个人资料所依据的法律基础。",
          },
        },
        {
          kind: "p",
          text: {
            en: "We use your personal data for the following purposes:",
            zh: "我们会基于以下目的使用您的个人资料：",
          },
        },
        {
          kind: "p",
          text: {
            en: "Providing you with customer services including:",
            zh: "提供客户服务，包括：",
          },
        },
        {
          kind: "ul",
          items: {
            en: [
              "notifying you about changes to our terms and policies, security alerts and administrative messages",
              "responding to requests and enquiries you send us",
            ],
            zh: [
              "通知您有关我们的条款及政策变更、安全警示，以及其他行政通知；",
              "回应您向我们提出的查询、要求或其他请求。",
            ],
          },
        },
        {
          kind: "indent",
          items: {
            en: [
              "Our legal basis for this processing activity is legitimate interest.",
              "We also process this data to manage any adverse events relating to our products. Our legal basis for this processing activity is consent if we collect special category data.",
            ],
            zh: [
              "我们处理上述个人资料所依据的法律基础为：合法权益（Legitimate Interest）。",
              "我们亦会处理及管理与我们的产品相关的不良事件（Adverse Events）。如处理过程中涉及收集特殊类别个人资料（Special Category Data），我们将以您的同意作为处理该等资料的法律基础。",
            ],
          },
        },
        {
          kind: "p",
          text: {
            en: "To learn about your likes, dislikes, and preferences to create profiles and personalise your experience:",
            zh: "了解您的偏好，并建立个人化档案，以提供更贴合您需求的体验，包括：",
          },
        },
        {
          kind: "ul",
          items: {
            en: [
              "we may use your personal data to learn and predict your preferences, interests or behaviour relating to our products and services.",
              "We will ask for your consent to profile you where we are required to by applicable law.",
              "we also use this information to personalise your online experience with our content and advertisements (e.g. through Custom Audiences and Lookalike Audiences), to find new audiences with similar interests and to develop internal marketing strategy and business intelligence.",
            ],
            zh: [
              "我们可能会使用您的个人资料，以了解及预测您对我们产品及服务的偏好、兴趣或使用行为。",
              "如适用法律要求，我们将在建立您的个人档案（Profiling）前征求您的同意。",
              "我们亦可能利用上述资料，为您提供更个人化的线上体验，包括向您展示更切合您兴趣的内容及广告（例如透过 Custom Audiences 及 Lookalike Audiences），发掘具有相似兴趣的新受众，以及制定内部市场推广策略及业务分析。",
            ],
          },
        },
        {
          kind: "indent",
          items: {
            en: [
              "Where required, our legal basis for this processing activity is consent. Otherwise, our legal basis for this processing activity is legitimate interest.",
            ],
            zh: [
              "如适用法律规定须取得您的同意，我们将以您的同意（Consent）作为处理您个人资料的法律基础。在其他情况下，我们将以合法权益（Legitimate Interest）作为处理您个人资料的法律基础。",
            ],
          },
        },
        {
          kind: "p",
          text: { en: "Providing you with services, such as:", zh: "提供相关服务，包括：" },
        },
        {
          kind: "ul",
          items: {
            en: [
              "sending you information about your online product purchases (e.g. order confirmation), product safety information and recalls",
              "registering and managing your account on our website",
              "providing online shopping services including order fulfilment, product delivery and product returns or refunds",
            ],
            zh: [
              "向您发送与您网上购买产品相关的资讯（例如订单确认）、产品安全资讯及产品召回通知；",
              "于本网站为您注册及管理账户；",
              "提供网上购物服务，包括订单处理、产品配送，以及退货或退款服务。",
            ],
          },
        },
        {
          kind: "indent",
          items: {
            en: ["Our legal basis for this processing activity is performance of a contract."],
            zh: ["法律基础：履行合约（Performance of a Contract）。"],
          },
        },
        {
          kind: "p",
          text: {
            en: "Sending you marketing communications, e.g.:",
            zh: "向您发送市场推广资讯，包括：",
          },
        },
        {
          kind: "ul",
          items: {
            en: [
              "about our latest offers, promotions (such as prize draws, contests, cash back initiatives and give-aways), events, polls or other information related to our products and services.",
              "to personalise online marketing communications and digital advertising content, and show you our products and services that we think you may be interested in.",
              "to show you interest-based adverts.",
            ],
            zh: [
              "向您发送有关我们最新优惠、推广活动（例如抽奖活动、比赛、现金回馈计划及赠品活动）、活动资讯、意见调查（Polls）或其他与我们的产品及服务相关的资讯；",
              "为您提供更个人化的线上市场推广资讯及数码广告内容，并向您展示我们认为您可能感兴趣的产品及服务；",
              "向您展示符合您兴趣的广告。",
            ],
          },
        },
        {
          kind: "indent",
          items: {
            en: [
              "We will always obtain consent for marketing where required by law. You can ask us to stop sending you marketing messages at any time by contacting us. Our legal basis for this processing activity is consent.",
            ],
            zh: [
              "如适用法律规定须取得您的同意，我们将在发送市场推广资讯前征求您的同意。您可随时联系我们，要求停止接收市场推广资讯。法律基础：您的同意（Consent）。",
            ],
          },
        },
        {
          kind: "p",
          text: {
            en: "To improve our business and operations, e.g.:",
            zh: "优化我们的业务及营运，包括：",
          },
        },
        {
          kind: "ul",
          items: {
            en: [
              "to send you surveys regarding your satisfaction with your online shopping experience and purchased products and/or services.",
              "to monitor and analyse trends, usage and activities in connection with testing, developing, evaluating and improving our products and services.",
              "to manage our network and information systems security, including this website.",
              "for internal purposes such as auditing, data analysis and research to help us deliver and improve our digital platforms, content and services.",
              "to improve our products and services and our communications to you.",
            ],
            zh: [
              "向您发送问卷调查，以了解您对网上购物体验，以及所购买产品及／或服务的满意度；",
              "监测及分析与产品及服务测试、开发、评估及优化相关的趋势、使用情况及活动；",
              "管理我们的网络及资讯系统安全，包括本网站的安全管理；",
              "基于内部用途进行审计、资料分析及研究，以协助我们持续优化数码平台、内容及服务；以及",
              "持续改进我们的产品、服务，以及我们与您的沟通方式。",
            ],
          },
        },
        {
          kind: "indent",
          items: {
            en: ["Our legal basis for this processing activity is legitimate interest."],
            zh: ["法律基础：合法权益（Legitimate Interest）。"],
          },
        },
        {
          kind: "p",
          text: {
            en: "For compliance, security and legal reasons, e.g. to:",
            zh: "为履行合规、安全及法律相关义务，包括：",
          },
        },
        {
          kind: "ul",
          items: {
            en: [
              "comply with applicable laws, rules, regulations, guidance, codes and industry and professional rules and regulations.",
              "comply with legal investigations or to conduct internal investigations.",
              "respond to demands or requests from regulators, governments, courts and law enforcement authorities, including any court or authority orders, subpoenas or warrants.",
              "exercise or enforce our rights, and to protect or defend against claims in legal proceedings.",
              "investigate and take action against illegal or harmful behaviour of users.",
            ],
            zh: [
              "遵守适用的法律、规则、法规、指引、守则，以及行业及专业规范；",
              "配合法律调查，或进行内部调查；",
              "回应监管机构、政府部门、法院及执法机关提出的要求或请求，包括任何法院或主管机关发出的命令、传票或搜查令；",
              "行使或维护我们的合法权利，以及在法律程序中提出、应对或抗辩任何法律申索；以及",
              "调查并对用户的非法或有害行为采取适当行动。",
            ],
          },
        },
        {
          kind: "indent",
          items: {
            en: ["Our legal basis for this processing activity is legal obligation."],
            zh: ["法律基础：履行法定义务（Legal Obligation）。"],
          },
        },
        {
          kind: "p",
          text: {
            en: "We may also anonymise your personal data so that it can no longer be associated with you, and you cannot be identified.",
            zh: "我们亦可能会将您的个人资料进行匿名化处理，使有关资料无法再与您关联，亦无法识别您的身份。",
          },
        },
        {
          kind: "p",
          text: {
            en: "We might do this, for example, to check what percentage of our users access a specific feature on our websites.",
            zh: "例如：我们可能会利用匿名化后的资料统计有多少比例的用户使用本网站的特定功能，以协助我们分析及优化产品与服务。",
          },
        },
      ],
    },
    {
      heading: {
        en: "On what basis do we use your personal data?",
        zh: "处理个人资料的法律基础",
      },
      blocks: [
        {
          kind: "callout",
          text: {
            en: "Summary: There are various reasons that we may rely on to use your personal data. Data privacy law sets out several different reasons which a company may rely on to collect and use your personal data.",
            zh: "摘要：我们基于不同的法律基础处理您的个人资料。根据适用的数据私隐法律，企业在收集及使用个人资料时，必须依据相应的法律基础进行处理。",
          },
        },
        {
          kind: "p",
          text: {
            en: "We use your personal data for the following reasons:",
            zh: "我们基于以下法律基础处理您的个人资料：",
          },
        },
        {
          kind: "ul",
          items: {
            en: [
              "To comply with legal and regulatory obligations.",
              "For legitimate business purposes. Using your personal data helps us to operate and improve our business and minimise any disruption to the services that we may offer to you.",
              "It also allows us to make our communications with you more relevant and personalised, and to make your experience of our products and services effective.",
              "Because you have given your consent. At times we may ask for your consent to allow us to use your personal data for one or more purposes.",
              "See ‘Your rights’ for information about the rights that you have if we process your personal data based on your consent.",
              "To perform a contract with you: we may need to process your personal data to provide a product or service you request.",
              "For the establishment, exercise or defence of legal claims or proceedings.",
              "Because it is necessary for reasons of substantial public interest, based on applicable laws.",
            ],
            zh: [
              "履行法律及监管义务：为遵守适用的法律、法规及监管要求，我们可能需要处理您的个人资料。",
              "合法权益（Legitimate Interest）：基于合法业务需要，处理您的个人资料有助于我们经营及持续优化业务，并尽量减少可能影响您使用产品及服务的情况。",
              "此外，这亦有助于我们为您提供更相关、更个人化的沟通内容，并提升您使用我们产品及服务的整体体验。",
              "您的同意（Consent）：在某些情况下，我们可能会征求您的同意，以便基于一个或多个特定目的处理您的个人资料。",
              "如我们基于您的同意处理个人资料，有关您所享有的相关权利，请参阅“您的权利”一节。",
              "履行合约（Performance of a Contract）：当您要求我们提供某项产品或服务时，我们可能需要处理您的个人资料，以履行我们与您之间的合约义务。",
              "提出、行使或抗辩法律申索或法律程序（Legal Claims）：在有需要时，我们可能处理您的个人资料，以提出、行使或抗辩任何法律申索，或处理相关法律程序。",
              "重大公共利益（Substantial Public Interest）：在适用法律允许或规定的情况下，如基于重大公共利益而有处理个人资料的需要，我们亦可能依法处理您的个人资料。",
            ],
          },
        },
      ],
    },
    {
      heading: {
        en: "How long will we keep your personal data?",
        zh: "个人资料的保留期限",
      },
      blocks: [
        {
          kind: "callout",
          text: {
            en: "Summary: We will retain your personal data for as long as reasonably necessary to fulfil the purposes for which we collected it. You can contact us for more information on our retention policy.",
            zh: "摘要：我们仅会在为达成收集个人资料目的所合理需要的期间内保留您的个人资料。如欲了解有关个人资料保留政策的更多详情，欢迎联系我们。",
          },
        },
        {
          kind: "p",
          text: {
            en: "We will always keep your personal data for the period required by law, to provide you with access to services you have requested, and for as long as it is necessary and relevant for our purposes of processing (see ‘How do we use your personal data?’).",
            zh: "我们将按照适用法律规定的期限保留您的个人资料，并在您使用所要求的服务期间，以及为实现相关处理目的所需及相关的合理期间内保留有关资料（请参阅“个人资料的使用方式”一节）。",
          },
        },
        {
          kind: "p",
          text: {
            en: "We will also keep your personal data where we need to do so in connection with legal action or an investigation involving us.",
            zh: "如涉及法律程序、法律行动或调查事项，而我们有需要保留您的个人资料以配合相关处理工作，我们亦会于必要期间内继续保留有关资料。",
          },
        },
        {
          kind: "p",
          text: {
            en: "When we no longer need to use your personal data, it is removed from our systems and records, or anonymised so that you can no longer be identified from it.",
            zh: "当您的个人资料已无须再用于上述目的时，我们将从系统及记录中删除有关资料，或对其进行匿名化处理，使有关资料无法再识别您的身份。",
          },
        },
      ],
    },
    {
      heading: {
        en: "With whom do we share your personal data?",
        zh: "个人资料的共享对象",
      },
      blocks: [
        {
          kind: "callout",
          text: {
            en: "Summary: We may share your personal data with third parties such as: service providers, professional advisors, business partners and public authorities.",
            zh: "摘要：在履行相关处理目的的过程中，我们可能会与以下第三方共享您的个人资料：服务提供商；专业顾问；业务合作伙伴；以及公共机构。",
          },
        },
        {
          kind: "p",
          text: { en: "We may share your personal data with:", zh: "我们可能会与以下各方共享您的个人资料：" },
        },
        {
          kind: "ul",
          items: {
            en: [
              "the following trusted third parties — selected suppliers, including:",
              "companies which we partner with to undertake marketing campaigns.",
              "marketing agencies, market research companies, social media platforms, data exchanges, data collaboration platforms and demand side platforms and advertising partners.",
              "e-commerce fulfilment partners, online payment system providers and merchants who sell our products.",
              "suppliers of technology and data services such as hosting and technical support.",
              "analytics and search engine providers that assist us in the improvement and optimisation of our websites.",
              "third parties in connection with the sale or re-organisation of all or any part of our business.",
              "our professional advisors and auditors.",
              "courts, regulators, government agencies and law enforcement authorities.",
            ],
            zh: [
              "可信赖的第三方，包括指定供应商，例如：",
              "与我们合作开展市场推广活动的合作伙伴；",
              "市场推广机构、市场研究公司、社交媒体平台、数据交换平台（Data Exchanges）、数据协作平台（Data Collaboration Platforms）、需求方平台（Demand-Side Platforms, DSP）及广告合作伙伴；",
              "电子商务履约合作伙伴、网上支付服务提供商，以及销售我们产品的商户；",
              "提供技术及数据服务的供应商，例如主机托管（Hosting）及技术支援服务提供商；以及",
              "协助我们优化及提升本网站表现的分析服务及搜索引擎服务提供商。",
              "与出售、转让、重组或以其他方式处置我们全部或部分业务有关的第三方；",
              "我们的专业顾问及审计机构；以及",
              "法院、监管机构、政府部门及执法机关。",
            ],
          },
        },
        {
          kind: "p",
          text: {
            en: "See ‘Protecting your personal data' for information on how we keep your personal data secure when sharing it with others.",
            zh: "有关我们在与第三方共享您的个人资料时如何保障资料安全的详情，请参阅“个人资料的保护措施”一节。",
          },
        },
      ],
    },
    {
      heading: { en: "Protecting your personal data", zh: "个人资料的保护措施" },
      blocks: [
        {
          kind: "callout",
          text: {
            en: "Summary: We have a variety of security measures and procedures that are designed to keep your personal data safe. Whilst we cannot guarantee your personal data will be 100% secure, we take steps to ensure it is used and stored safely on our systems.",
            zh: "摘要：我们已实施多项安全措施及程序，致力保障您的个人资料安全。虽然我们无法保证您的个人资料能够获得百分之百的安全保障，但我们会采取合理及适当的措施，确保您的个人资料在我们的系统中获得妥善使用及保存。",
          },
        },
        {
          kind: "p",
          text: {
            en: "When we use a third-party service provider, they are carefully selected and required to use appropriate measures to protect the confidentiality and security of personal data.",
            zh: "当我们委托第三方服务提供商处理您的个人资料时，我们会审慎甄选有关服务提供商，并要求其采取适当的安全措施，以保障您个人资料的保密性及安全性。",
          },
        },
        {
          kind: "p",
          text: {
            en: "We use a variety of security measures and technologies to help protect your personal data from unauthorised access, use, disclosure, alteration or destruction consistent with applicable data protection laws.",
            zh: "我们采用多项安全措施及技术，以防止您的个人资料遭未经授权的存取、使用、披露、修改或销毁，并确保相关保护措施符合适用的数据保护法律要求。",
          },
        },
        {
          kind: "p",
          text: {
            en: "The transmission to us of information via the internet or a phone network connection may not be completely secure, and any transmission is at your own risk.",
            zh: "尽管我们已采取合理措施保障资料安全，但透过互联网或电话网络传输资料仍可能存在安全风险，因此，经由该等方式向我们传送任何资料，均须由您自行承担相关风险。",
          },
        },
      ],
    },
    {
      heading: { en: "Your rights", zh: "您的权利" },
      blocks: [
        {
          kind: "callout",
          text: {
            en: "Summary: Depending on your location, data privacy laws provide you with various rights in relation to your personal data.",
            zh: "摘要：根据您所在地区适用的数据隐私法律，您就个人资料可能享有不同的权利。",
          },
        },
        {
          kind: "p",
          text: {
            en: "Depending on your location, you may be entitled to:",
            zh: "根据您所在地区适用的数据隐私法律，您可能享有以下权利：",
          },
        },
        {
          kind: "ul",
          items: {
            en: [
              "object to the processing of your personal data.",
              "opt out from processing of your personal data for direct marketing purposes.",
              "ask us about the processing of your personal data, including to be provided with a copy of your personal data.",
              "request the correction and/or deletion of your personal data.",
              "request the restriction of the processing of your personal data.",
              "withdraw your consent to the processing of your personal data (where we are processing your personal data based on your consent).",
              "request receipt or transmission to another organisation of the personal data that you have provided to us; and",
              "complain to your local supervisory authority if your privacy rights are violated, or if you have suffered because of the unlawful processing of your personal data.",
            ],
            zh: [
              "反对我们处理您的个人资料；",
              "拒绝我们将您的个人资料用于直接市场推广用途；",
              "查询我们如何处理您的个人资料，包括要求查阅及取得您个人资料的副本；",
              "要求更正及／或删除您的个人资料；",
              "要求限制我们处理您的个人资料；",
              "撤回您对处理个人资料的同意（如我们是基于您的同意处理您的个人资料）；",
              "要求取得您向我们提供的个人资料，或要求我们将有关资料传输至另一机构；以及",
              "向您所在地的监管机构提出投诉，如您认为您的隐私权受到侵犯，或因我们违法处理您的个人资料而蒙受损害。",
            ],
          },
        },
        {
          kind: "p",
          text: {
            en: "We may also need to take reasonable steps to verify your identity before responding to a request. If we are unable to verify you, we may be unable to respond to your requests.",
            zh: "在回应您的请求前，我们可能需要采取合理措施核实您的身份。如我们无法核实您的身份，可能无法处理或回应您的相关请求。",
          },
        },
        {
          kind: "p",
          text: {
            en: "In some cases, we may be able to refuse your request on the basis of applicable law, but we will let you know the reasons why.",
            zh: "在某些情况下，我们可能基于适用法律的规定而无法满足您的请求。如出现此情况，我们将向您说明相关原因。",
          },
        },
        {
          kind: "p",
          text: {
            en: "Depending on applicable law, you may have the right to appeal our decision to deny your request. We will provide information about how to exercise that right in our response denying the request.",
            zh: "根据适用法律，若我们拒绝您的请求，您亦可能有权就该决定提出申诉或寻求覆核。如适用法律赋予您就我们的决定提出申诉或寻求覆核的权利，我们将在拒绝您请求的回复中，说明有关权利的行使方式。",
          },
        },
        {
          kind: "p",
          text: {
            en: "You can contact us to exercise your rights. Where you are given the option to share your personal data with us, you can always choose not to do so.",
            zh: "如欲行使您的权利，欢迎随时联系我们。在您可自行决定是否向我们提供个人资料的情况下，您始终有权选择不提供有关资料。",
          },
        },
        {
          kind: "p",
          text: {
            en: "If you object to the processing of your personal data, or if you have provided your consent to processing and you later choose to withdraw it, we will respect that choice in accordance with our legal obligations.",
            zh: "如您反对我们处理您的个人资料，或您先前已同意我们处理您的个人资料，其后选择撤回有关同意，我们将依法尊重您的决定，并按照适用法律履行相关义务。",
          },
        },
        {
          kind: "p",
          text: {
            en: "This could mean that we are unable to perform the actions necessary to achieve the purposes of processing described (see ‘How do we use your personal data?’) or that you are unable to make use of the services and products offered by us.",
            zh: "然而，这可能导致我们无法采取必要措施以实现本隐私政策所述的处理目的（请参阅“个人资料的使用方式”一节），或使您无法继续使用我们所提供的部分产品或服务。",
          },
        },
        {
          kind: "p",
          text: {
            en: "After you have chosen to withdraw your consent we may be able to continue to process your personal data to the extent required or otherwise permitted by law.",
            zh: "在您撤回同意后，如适用法律规定或允许，我们仍可能在法律要求或许可的范围内继续处理您的个人资料。",
          },
        },
      ],
    },
  ],
};
