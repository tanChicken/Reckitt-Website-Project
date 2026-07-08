import type { LegalDoc } from "@/components/legal/LegalPage";

// Bilingual Terms of Use. English matches the original page; Chinese is from the
// approved T&C translation.
export const termsDoc: LegalDoc = {
  title: { en: "Terms of Use", zh: "使用条款" },
  sections: [
    {
      heading: { en: "Introduction", zh: "简介" },
      blocks: [
        {
          kind: "p",
          text: {
            en: "PLEASE READ THESE TERMS AND CONDITIONS CAREFULLY BEFORE USING THE WEBSITE",
            zh: "在使用本网站之前，请仔细阅读以下条款和条规",
          },
        },
        {
          kind: "p",
          text: {
            en: "These terms and conditions (the “Terms”) are the terms on which this website (the “Website”) is made available to you (“you”/”your”).",
            zh: "本条款和条规（“条款”）是您（“您”/“您的”）使用本网站（“网站”）所应遵守的条款。",
          },
        },
        {
          kind: "p",
          text: {
            en: "By accessing this Website you agree to be bound by these Terms.",
            zh: "游览本网站即表示您同意受本条款约束。",
          },
        },
        {
          kind: "p",
          text: {
            en: "If you do not agree to these Terms, please do not use the Website.",
            zh: "如果您不同意本条款，请勿使用本网站。",
          },
        },
      ],
    },
    {
      heading: { en: "Questions or Complaints", zh: "问题或投诉" },
      blocks: [
        {
          kind: "p",
          text: {
            en: "If you have any questions, complaints or comments about this Website, or these Terms, then please use our Contact Us page to get in touch.",
            zh: "如您对本网站或本条款有任何疑问、投诉或意见，请通过我们的“联系我们”页面与我们联系。",
          },
        },
      ],
    },
    {
      heading: {
        en: "Our copyright and other Intellectual Property Rights",
        zh: "我们的版权及其他知识产权",
      },
      blocks: [
        {
          kind: "p",
          text: {
            en: "2.1 Your use of the Website and its contents grants no rights to you in relation to any of the intellectual property rights or associated rights, including copyrights, trade marks, patents, design rights, trade names, database rights, and neighbouring rights, as well as rights to know-how (“ Intellectual Property Rights ”), related to the Website.",
            zh: "2.1 您对本网站及其内容的使用，并不授予您与本网站相关的任何知识产权或相关权利，包括版权、商标、专利、外观设计权、商号、数据库权及邻接权，以及专有技术权（“知识产权”）。",
          },
        },
        {
          kind: "p",
          text: {
            en: "All text, user interfaces, visual interfaces, graphics, illustrations, photographs, trade marks, logos, computer code and other related material (together, “ Content ”), including but not limited to the design, arrangement, structure, selection, coordination, expression and “look and feel” of the Content, contained on the Website are owned or controlled by us, or licensed to us by our third party licensors.",
            zh: "本网站上包含的所有文本、用户界面、视觉界面、图形、插图、照片、商标、标识、计算机代码及其他相关材料（统称“内容”），包括但不限于内容的设计、编排、结构、选择、协调、表达方式及“外观与风格”，均由我们拥有或控制，或由第三方许可方许可我们使用。",
          },
        },
        {
          kind: "p",
          text: {
            en: "All such rights are reserved by us or our licensors.",
            zh: "上述所有权利均由我们或我们的许可方保留。",
          },
        },
        {
          kind: "p",
          text: {
            en: "2.2 Nothing in the Terms constitutes the transfer of any Intellectual Property Rights from us to you, or any third party.",
            zh: "2.2 本条款中的任何内容均不构成我们向您或任何第三方转让任何知识产权。",
          },
        },
        {
          kind: "p",
          text: {
            en: "2.3 You may only copy, reproduce, republish, download, post, broadcast, record, transmit, commercially exploit, edit, communicate to the public or distribute in any way the Content, services, web pages or materials on the Website or the computer codes of elements comprising the Website for your own personal use.",
            zh: "2.3 您仅可出于个人使用目的，复制、转载、重新发布、下载、发布、广播、录制、传输、商业利用、编辑、向公众传播或以任何方式分发本网站上的内容、服务、网页或材料，或构成本网站元素的计算机代码。",
          },
        },
        {
          kind: "p",
          text: {
            en: "You may not use any automatic or manual device, program, algorithm or methodology, or any similar process on any portion of the Website or Content.",
            zh: "您不得对本网站或内容的任何部分使用任何自动或手动装置、程序、算法或方法，或任何类似的处理程序。",
          },
        },
        {
          kind: "p",
          text: {
            en: "Subject to the above, you may download in substantial excerpts of the Content to your device for the purpose of viewing it provided that no more than one copy of any information is made.",
            zh: "在符合上述规定的前提下，您可将内容的大量摘录下载至您的设备以供查看，但任何信息均不得复制超过一份。",
          },
        },
      ],
    },
    {
      heading: { en: "Other Reckitt Brands and Websites", zh: "其他 Reckitt 品牌及网站" },
      blocks: [
        {
          kind: "p",
          text: {
            en: "This Website is designed to provide information only, and if it provides information about healthcare products or licensed medicines, it is not intended to provide medical advice or instructions as to use, but only general information which should not be relied upon by any individual or for any specific purpose.",
            zh: "本网站仅旨在提供信息；如其提供有关保健产品或注册药品的信息，该等信息并非旨在提供医疗建议或使用说明，而仅为一般性信息，任何个人或出于任何特定目的均不应依赖该信息。",
          },
        },
        {
          kind: "p",
          text: {
            en: "Always consult your doctor or pharmacist for advice on treatment of individual circumstances and needs.",
            zh: "如需就个人具体情况及需求的治疗方案获取建议，请务必咨询您的医生或药剂师。",
          },
        },
      ],
    },
    {
      heading: { en: "Purchases", zh: "购买" },
      blocks: [
        {
          kind: "p",
          text: {
            en: "Nothing in the Website constitutes an offer to buy or sell products and/or services.",
            zh: "本网站中的任何内容均不构成购买或出售产品和/或服务的要约。",
          },
        },
        {
          kind: "p",
          text: {
            en: "All details, descriptions and prices of, and other information relating to, products and/or services appearing on the Website are of a general nature only.",
            zh: "本网站上出现的有关产品和/或服务的所有详情、描述、价格及其他相关信息，均仅具一般性质。",
          },
        },
        {
          kind: "p",
          text: {
            en: "We do not promise that any product and/or service appearing on the Website is or will be available at the location and time you wish to purchase any particular product and/or service.",
            zh: "我们不承诺本网站上出现的任何产品和/或服务，在您希望购买该特定产品和/或服务的地点及时间必定有货或将会有货。",
          },
        },
      ],
    },
    {
      heading: { en: "Links from our Sites", zh: "网站的链接" },
      blocks: [
        {
          kind: "p",
          text: {
            en: "We may provide links to other websites from time to time (via advertising or otherwise).",
            zh: "我们可能不时（通过广告或其他方式）提供指向其他网站的链接。",
          },
        },
        {
          kind: "p",
          text: {
            en: "These links are provided for your ease of reference and convenience only.",
            zh: "提供该等链接仅为方便您参考及使用。",
          },
        },
        {
          kind: "p",
          text: {
            en: "We do not control these third party websites and are not responsible for their content.",
            zh: "我们不控制该等第三方网站，亦不对其内容负责。",
          },
        },
        {
          kind: "p",
          text: {
            en: "Our inclusion of links does not imply any endorsement of the material contained in those websites or any association with their operators.",
            zh: "我们提供链接并不意味着认可该等网站所载材料，亦不意味着与其运营方存在任何关联。",
          },
        },
        {
          kind: "p",
          text: {
            en: "You acknowledge and agree that we will not be party to any transaction or contract with a third party that you may enter into, and we will not be liable to you in respect of any loss or damage which you may suffer by using those websites.",
            zh: "您确认并同意，我们不会成为您与第三方之间可能订立的任何交易或合同的一方，我们对您因使用该等网站而可能遭受的任何损失或损害概不负责。",
          },
        },
        {
          kind: "p",
          text: {
            en: "You agree that you will not involve us in any dispute between you and the third party.",
            zh: "您同意不会让我们卷入您与第三方之间的任何争议。",
          },
        },
      ],
    },
    {
      heading: { en: "Your use of the Website", zh: "您对本网站的使用" },
      blocks: [
        {
          kind: "p",
          text: {
            en: "6.1 You agree that in using the Website you will not:",
            zh: "6.1 您同意，在使用本网站时，您不会：",
          },
        },
        {
          kind: "indent",
          items: {
            en: [
              "6.1.1 use the Website in any way that may lead to the encouragement, procurement or carrying out of any activity which is criminal, fraudulent, unlawful, or prohibited by these Terms;",
              "6.1.2 use the Website for any purpose other than your personal use;",
              "6.1.3 advertise or promote third party or your own products or services including by way of the distribution of ‘spam’ email;",
              "6.1.4 transfer files that contain viruses, trojans or engage in any other activity harmful to the Website;",
              "6.1.5 link to the Website from a third party site without our prior written authorisation;",
              "6.1.6 access or attempt to gain unauthorised access to any user accounts linked or associated with the Website or to penetrate or attempt to penetrate the Website security measures;",
              "or",
              "6.1.7 interfere with any other person’s access to, use or enjoyment of, the Website.",
            ],
            zh: [
              "6.1.1 以可能导致鼓励、促成或实施任何犯罪、欺诈、违法或本条款所禁止的活动的方式使用本网站；",
              "6.1.2 将本网站用于个人使用以外的任何目的；",
              "6.1.3 宣传或推广第三方或您自己的产品或服务，包括通过发送“垃圾”电子邮件的方式；",
              "6.1.4 传输含有病毒、木马程序的文件，或从事任何其他有害于本网站的活动；",
              "6.1.5 未经我们事先书面授权，从第三方网站链接至本网站；",
              "6.1.6 游览或试图未经授权游览与本网站相关联的任何用户账户，或渗透或试图渗透本网站的安全措施；",
              "或",
              "6.1.7 干扰任何其他人游览、使用或享用本网站。",
            ],
          },
        },
        {
          kind: "p",
          text: {
            en: "6.2 You should use your own virus protection software for each and every access and use of the Website.",
            zh: "6.2 您应在每次游览及使用本网站时使用您自己的防病毒软件。",
          },
        },
        {
          kind: "p",
          text: {
            en: "6.3 You are also responsible for ensuring that all persons who access the Website through your internet connection are aware of these Terms, and that they comply with them.",
            zh: "6.3 您还有责任确保所有通过您的互联网连接游览本网站的人员知悉本条款，并遵守本条款。",
          },
        },
        {
          kind: "p",
          text: {
            en: "6.4 We reserve the right to suspend, restrict or terminate your access to this Website (or any part of it) at any time (and will give you prior notice if it is reasonable for us to do so) if we believe you have breached any of the restrictions in these Terms.",
            zh: "6.4 如我们认为您已违反本条款中的任何限制性规定，我们保留随时暂停、限制或终止您对本网站（或其任何部分）游览权限的权利（如合理可行，我们将提前通知您）。",
          },
        },
      ],
    },
    {
      heading: { en: "User uploaded content", zh: "用户上传内容" },
      blocks: [
        {
          kind: "p",
          text: { en: "7.1 Content uploaded by you:", zh: "7.1 由您上传的内容：" },
        },
        {
          kind: "p",
          text: {
            en: "7.1.1 By submitting reviews, information, text, photos, graphics or other content to us via the Website, you grant us a right to reasonably use these materials, including to edit, copy, reproduce, disclose, post and remove them from the Website.",
            zh: "7.1.1 通过网站向我们提交评论、信息、文本、照片、图形或其他内容，即表示您授予我们合理使用该等材料的权利，包括对其进行编辑、复制、转载、披露、发布及从网站上移除。",
          },
        },
        {
          kind: "p",
          text: {
            en: "7.1.2 You promise in respect of any submission:",
            zh: "7.1.2 您就任何提交内容承诺：",
          },
        },
        {
          kind: "indent",
          items: {
            en: [
              "(a) that it complies with any applicable law and these Terms;",
              "(b) that is true, accurate and up to date in all respects and at all times (note that you can request that we update or correct your personal details at any time by contacting us via the below contact details);",
              "(c) that all necessary licences and/or approvals have been obtained and you have the right to make such contribution; and",
              "(d) that it is not confidential, and you will be liable to us and compensate us for any breach of that promise.",
            ],
            zh: [
              "（a）该内容符合适用法律及本条款；",
              "（b）该内容在各方面及任何时候均真实、准确且为最新（请注意，您可随时通过下方联系方式与我们联系，要求我们更新或更正您的个人信息）；",
              "（c）已取得所有必要的许可和/或批准，且您有权作出该等贡献；及",
              "（d）该内容不具保密性，如违反上述承诺，您将对我们承担赔偿责任。",
            ],
          },
        },
        {
          kind: "p",
          text: {
            en: "This means you will be responsible for any loss or damage we suffer as a result of your breach of that promise.",
            zh: "这意味着，如因您违反上述承诺而给我们造成任何损失或损害，您将承担责任。",
          },
        },
        {
          kind: "p",
          text: {
            en: "7.1.3 We have the right to remove any submission you make to our Website.",
            zh: "7.1.3 我们有权移除您向本网站提交的任何内容。",
          },
        },
        {
          kind: "p",
          text: {
            en: "7.1.4 You are solely responsible for securing and backing up your submitted content.",
            zh: "7.1.4 您需自行负责保护及备份您所提交的内容。",
          },
        },
        {
          kind: "p",
          text: {
            en: "7.2 Content uploaded by other users:",
            zh: "7.2 由其他用户上传的内容：",
          },
        },
        {
          kind: "p",
          text: {
            en: "7.2.1 This Website may include information and materials uploaded by other users of the Website, including to bulletin boards and chat rooms (if any).",
            zh: "7.2.1 本网站可能包含由本网站其他用户上传的信息和材料，包括发布至留言板和聊天室的内容（如有）。",
          },
        },
        {
          kind: "p",
          text: {
            en: "This information and these materials have not been verified or approved by us.",
            zh: "该等信息和材料未经我们核实或批准。",
          },
        },
        {
          kind: "p",
          text: {
            en: "The views expressed by other users on our Website do not represent our views or values.",
            zh: "其他用户在本网站上表达的观点，并不代表我们的观点或价值主张。",
          },
        },
      ],
    },
    {
      heading: { en: "Your legal obligations", zh: "您的法律义务" },
      blocks: [
        { kind: "p", text: { en: "8.1 You confirm that:", zh: "8.1 您确认：" } },
        {
          kind: "p",
          text: {
            en: "8.1.1 you are over the age of majority in your jurisdiction, or you have the consent of your parent or legal guardian;",
            zh: "8.1.1 您已达到您所在司法管辖区的成年年龄，或已取得您的父母或法定监护人的同意；",
          },
        },
        { kind: "p", text: { en: "and", zh: "以及" } },
        {
          kind: "p",
          text: {
            en: "8.1.2 you will comply with the restrictions on your use of the Website as set out in these Terms.",
            zh: "8.1.2 您将遵守本条款中规定的对您使用本网站的限制。",
          },
        },
        {
          kind: "p",
          text: {
            en: "8.2 You agree to compensate us from any claim or damages (including any legal fees in relation to such claim or damages) made by a third party in respect of any matter in relation to or arising from your use of the Website, including any breach or suspected breach of these Terms, or your breach of any law or the rights of a third party.",
            zh: "8.2 您同意就第三方因您使用本网站相关的任何事项（包括任何违反或涉嫌违反本条款，或您违反任何法律或第三方权利）提出的任何索赔或损害赔偿（包括与该等索赔或损害赔偿相关的任何法律费用），对我们予以补偿。",
          },
        },
      ],
    },
    {
      heading: { en: "Reliance on information post", zh: "对网站信息的依赖" },
      blocks: [
        {
          kind: "p",
          text: {
            en: "9.1 The content on our Website is provided for general information only.",
            zh: "9.1 本网站上的内容仅供一般性信息参考。",
          },
        },
        {
          kind: "p",
          text: {
            en: "It is not intended to amount to advice on which you should rely.",
            zh: "该内容并非旨在构成您应予依赖的建议。",
          },
        },
        {
          kind: "p",
          text: {
            en: "You should obtain professional or specialist advice before taking, or refraining from, any action on the basis of the content on our Website.",
            zh: "在根据本网站内容采取或不采取任何行动之前，您应寻求专业或专家意见。",
          },
        },
        {
          kind: "p",
          text: {
            en: "9.2 Whilst we aim to ensure that the Website and its Content, are correct at the time when such Content is uploaded to the Website, it is subject to change and we make promises that the information on the Website or its Content is accurate, complete or up to date.",
            zh: "9.2 尽管我们力求确保本网站及其内容在上传至本网站时是正确的，但内容可能发生变化，我们并不承诺本网站或其内容准确、完整或为最新。",
          },
        },
        {
          kind: "p",
          text: {
            en: "9.3 All Content and services on the Website are provided on an ‘as is’ and ‘as available’ basis and made without any promises or guarantees of any kind.",
            zh: "9.3 本网站上的所有内容和服务均按“现状”及“可用”基础提供，不附带任何形式的承诺或保证。",
          },
        },
        {
          kind: "p",
          text: {
            en: "9.4 We are under no obligation to update any information contained on the Website.",
            zh: "9.4 我们没有义务更新本网站上包含的任何信息。",
          },
        },
      ],
    },
    {
      heading: {
        en: "We may suspend or withdraw our website",
        zh: "网站的暂停、终止或调整",
      },
      blocks: [
        {
          kind: "p",
          text: {
            en: "10.1 Whilst we aim to ensure that the Website, its Content, any features offered through the Website and any information contained on it, are error-free, uninterrupted and free from bugs and viruses, due to the nature of the internet, we cannot guarantee this.",
            zh: "10.1 我们致力于确保本网站及其内容、通过本网站提供的各项功能以及所载信息尽可能保持稳定、准确且安全运行，但鉴于互联网的性质，我们无法保证其完全不存在错误、中断、缺陷或病毒。",
          },
        },
        {
          kind: "p",
          text: {
            en: "10.2 We do not guarantee nor promise that the Website, or any Content on it, will always be available or be uninterrupted and in a fully operating condition.",
            zh: "10.2 本公司不保证本网站或其任何内容始终可用、不中断或处于完全正常运行状态。",
          },
        },
        {
          kind: "p",
          text: {
            en: "We may suspend or withdraw or restrict the availability of all or any part of our Website for business and operational reasons.",
            zh: "基于业务运营或内部调整需要，本公司有权随时暂停、撤回或限制本网站全部或部分内容的可游览性。",
          },
        },
        {
          kind: "p",
          text: {
            en: "10.3 Access to the Website may be suspended temporarily and without notice in the case of system failure, maintenance or repair or for reasons reasonably beyond our control.",
            zh: "10.3 在系统故障、维护升级或修复需要，或因本公司合理控制范围之外的原因所致的情况下，本网站的游览可能会在未提前通知的情况下暂时中断或暂停。",
          },
        },
      ],
    },
    {
      heading: {
        en: "Our liability if you are a consumer",
        zh: "消费者责任限制",
      },
      blocks: [
        {
          kind: "p",
          text: {
            en: "11.1 We only provide our Website for domestic and private use.",
            zh: "11.1 本网站仅面向个人及非商业用途提供。",
          },
        },
        {
          kind: "p",
          text: {
            en: "You agree not to use our Website for any commercial or business purposes, and we have no liability to you for any loss of profit, loss of business, business interruption, or loss of business opportunity.",
            zh: "您同意不得将本网站用于任何商业或经营性目的。本公司亦不就因此产生的任何利润损失、业务损失、业务中断或商机损失承担任何责任。",
          },
        },
        {
          kind: "p",
          text: {
            en: "11.2 If defective digital content that we have supplied damages a device or digital content belonging to you and this is caused by our failure to use reasonable care and skill, we will either repair the damage or pay you compensation.",
            zh: "11.2 如本公司提供的数字内容存在缺陷并对您所使用的设备或数字内容造成损害，且该等损害系因本公司未尽合理注意义务所致，本公司将视情况对相关损害进行修复或给予合理赔偿。",
          },
        },
        {
          kind: "p",
          text: {
            en: "However, we will not be liable for damage that you could have avoided by following our advice to apply an update offered to you free of charge or for damage that was caused by you failing to correctly follow installation instructions or to have in place the minimum system requirements advised by us.",
            zh: "但对于因以下情形造成的损害，本公司不承担责任：（1）您未及时安装本公司免费提供的更新而本可避免的损害；或（2）因您未正确遵循安装说明或未满足本公司建议的最低系统要求而导致的损害。",
          },
        },
        {
          kind: "p",
          text: {
            en: "11.3 We shall have no liability to you for any breach of these Terms caused by any event or circumstance beyond our reasonable control including, but not limited to, strikes, lock-outs or other industrial disputes;",
            zh: "11.3 因不可抗力或本公司合理控制范围之外的事件或情况导致未能履行本条款的，本公司不承担任何责任，包括但不限于罢工、停工或其他劳资纠纷；",
          },
        },
        {
          kind: "p",
          text: {
            en: "breakdown of systems or network access; or flood, fire, explosion or accident.",
            zh: "系统或网络中断；洪水、火灾、爆炸或事故等。",
          },
        },
        {
          kind: "p",
          text: {
            en: "11.4 We do not exclude or limit in any way our liability to you where it would be unlawful to do so (for example liability for death or personal injury caused by our negligence or for fraud or fraudulent misrepresentation).",
            zh: "11.4 在法律不允许排除或限制责任的情况下，本公司不排除或限制对您的任何责任（例如因本公司过失导致的人身伤亡责任或欺诈行为）。",
          },
        },
        {
          kind: "p",
          text: {
            en: "Nothing in these Terms will affect your legal rights.",
            zh: "本条款中的任何内容均不影响您的法定权利。",
          },
        },
      ],
    },
    {
      heading: {
        en: "Our liability if you are a business",
        zh: "业务用户责任限制",
      },
      blocks: [
        {
          kind: "p",
          text: {
            en: "12.1 We exclude all liability (including liability of our officers, directors, managers, members, shareholders, employees, agents or advisors), whether arising in contract, tort, breach of statutory duty or otherwise, arising out of or in connection with access to or use of the Website, even if foreseeable, including but not limited to:",
            zh: "12.1 在适用法律允许的最大范围内，本公司及其董事、高级管理人员、员工、代理或顾问，对于因游览或使用本网站而产生或相关的任何责任，均不承担任何责任，无论该等责任基于合同、侵权、法定义务或其他法律依据，即使该等损失具有可预见性亦同，包括但不限于：",
          },
        },
        {
          kind: "indent",
          items: {
            en: [
              "12.1.1 losses arising from inaccuracies in any information or material within or relating to the Website;",
              "12.1.2 losses not caused by any breach on our part;",
              "12.1.3 losses arising from your use of, or reliance on, the Website;",
              "12.1.4 losses arising from the unavailability of the Website for whatsoever reason;",
              "12.1.5 losses arising from any representation or statement made on the Website;",
              "12.1.6 losses resulting from technical faults with the Website or technologically harmful material;",
              "12.1.7 any business loss (including loss of profits, business, revenue, contracts, anticipated savings, data, goodwill, reputation, wasted expenditure, business interruption or loss of business opportunity);",
              "and",
              "12.1.8 any indirect or consequential losses or losses that were not foreseeable to both you and us when you commencing accessing and using the Website.",
            ],
            zh: [
              "12.1.1 因网站信息或内容不准确所造成的损失；",
              "12.1.2 非因本公司违约所导致的损失；",
              "12.1.3 因您使用或依赖本网站所造成的损失；",
              "12.1.4 因本网站不可用而导致的损失；",
              "12.1.5 因网站陈述或声明所产生的损失；",
              "12.1.6 因技术故障或恶意技术内容造成的损失；",
              "12.1.7 各类商业损失，包括利润损失、业务中断、收入损失、合同损失、预期收益损失、数据损失、商誉损失及其他间接损失；",
              "以及",
              "12.1.8 在您开始使用本网站时无法合理预见的任何间接或后果性损失。",
            ],
          },
        },
        {
          kind: "p",
          text: {
            en: "12.2 To the extent possible under applicable law, we exclude all implied conditions, warranties, representations or other terms that may apply to our Website or any content on it.",
            zh: "12.2 在适用法律允许的范围内，本公司排除所有默示的条规、保证、陈述或其他条款。",
          },
        },
        {
          kind: "p",
          text: {
            en: "12.3 You will indemnify and compensate us and our officers, directors, managers, members, employees, agents and advisors for any losses, costs, liabilities and expenses (including reasonable attorneys’ fees) relating to or arising out of:",
            zh: "12.3 如因以下原因导致本公司或其相关人员遭受任何损失、费用或责任（包括合理律师费），您同意对本公司进行赔偿并使其免受损害：",
          },
        },
        {
          kind: "indent",
          items: {
            en: [
              "12.3.1 your use of the Website (and related use of products and services);",
              "12.3.2 your breach of these Terms;",
              "12.3.3 your violation of any law or the rights of any third party; and/or",
              "12.3.4 our use of your information.",
            ],
            zh: [
              "12.3.1 您对本网站的使用（包括相关产品或服务的使用）；",
              "12.3.2 您违反本条款；",
              "12.3.3 您违反任何法律法规或第三方权利；",
              "12.3.4 本公司依据您的信息所作出的使用或处理。",
            ],
          },
        },
        {
          kind: "p",
          text: {
            en: "12.4 Notwithstanding anything to the contrary, we do not exclude or limit in any way our liability to you where it would be unlawful to do so (for example liability for death or personal injury caused by our negligence or for fraud or fraudulent misrepresentation).",
            zh: "12.4 在法律不允许的情况下，本公司不排除或限制任何责任（例如因本公司过失导致的人身伤亡或欺诈行为）。",
          },
        },
      ],
    },
    {
      heading: {
        en: "How we may use your personal information",
        zh: "个人信息使用",
      },
      blocks: [
        {
          kind: "p",
          text: {
            en: "13.1 We are committed to protecting your privacy and only use any personal data that we collect from you, or that you provide to us, in accordance with applicable data protection laws and regulations.",
            zh: "13.1 本公司高度重视您的隐私保护，并承诺仅依据适用的数据保护法律法规处理所收集或您提供的个人信息。",
          },
        },
        {
          kind: "p",
          text: {
            en: "13.2 Please read our Privacy Notice  for more information on how we use personal data and related matters.",
            zh: "13.2 有关个人信息处理的详细内容，请参阅我们的《隐私声明》。",
          },
        },
      ],
    },
    {
      heading: {
        en: "Changes to these Terms and Conditions",
        zh: "条款变更",
      },
      blocks: [
        {
          kind: "p",
          text: {
            en: "We are constantly looking for ways to improve this Website.",
            zh: "本公司持续致力于优化本网站。",
          },
        },
        {
          kind: "p",
          text: {
            en: "We therefore reserve the right to amend these Terms at any time.",
            zh: "因此，本公司保留随时修改本条款的权利。",
          },
        },
        {
          kind: "p",
          text: {
            en: "All such changes will take effect once they have been posted on the Website.",
            zh: "任何更新内容将在发布于本网站后立即生效。",
          },
        },
        {
          kind: "p",
          text: {
            en: "Please ensure that you revisit and review these Terms regularly as you will be deemed to have accepted, and will be bound by, such changes if you continue to use the Website after the posting of any changes to these Terms.",
            zh: "建议您定期查阅本条款。若您在变更发布后继续使用本网站，即视为您已接受并同意受更新后的条款约束。",
          },
        },
      ],
    },
    {
      heading: { en: "Other terms that may apply to you", zh: "其他适用条款" },
      blocks: [
        {
          kind: "p",
          text: {
            en: "15.1 The following additional policies also apply to your use of our Website:",
            zh: "15.1 以下附加政策同样适用于您对本网站的使用：",
          },
        },
        {
          kind: "p",
          text: {
            en: "15.1.1 Our Privacy Notice  which explains how your personal information is used by us and what your rights are.",
            zh: "15.1.1 《隐私声明》，说明我们如何使用您的个人信息及您的相关权利。",
          },
        },
        {
          kind: "p",
          text: {
            en: "15.2 Additional terms and conditions will apply to purchases of goods or services, and to specific portions or features of the Website, including contests, promotions or other similar features.",
            zh: "15.2 在您使用本网站特定功能、购买商品或服务，或参与促销、活动或竞赛时，可能适用额外条款与条规。",
          },
        },
        {
          kind: "p",
          text: {
            en: "We will direct you to the additional terms and conditions at the time that you interact with us and/or our brands in relation to the relevant services.",
            zh: "相关附加条款将在您使用相关服务时向您展示。",
          },
        },
        {
          kind: "p",
          text: {
            en: "Please read the applicable terms and conditions carefully. If there is a conflict between these Terms and the terms that apply to a service offered through the Website, the terms that apply to that service shall take priority to the extent of such conflict.",
            zh: "请仔细阅读适用的条款与条规。如附加条款与本条款存在不一致，以适用该特定服务的条款为准。",
          },
        },
      ],
    },
    {
      heading: { en: "General", zh: "一般条款" },
      blocks: [
        {
          kind: "p",
          text: {
            en: "16.1 If you are a business, these Terms contain the entire agreement between you and us with respect to the use of the Website.",
            zh: "16.1 如您为企业用户，本条款构成您与本公司之间关于使用本网站的完整协议。",
          },
        },
        {
          kind: "p",
          text: {
            en: "No representation, statement or inducement (whether oral or written) not contained in these Terms (as updated from time to time) shall be binding on either you or us.",
            zh: "除本条款（及其不时更新版本）外，任何其他口头或书面陈述、说明或诱因均不具有约束力。",
          },
        },
        {
          kind: "p",
          text: {
            en: "16.2 If any provision of these Terms is found by a court or a regulator to be illegal, void, invalid or unenforceable the other provisions shall continue to apply and such provision shall be replaced by another provision which, being valid in all respects, will have an effect as close as possible to that of the replaced provision.",
            zh: "16.2 如本条款任何条款被法院或监管机构认定为非法、无效或不可执行，其余条款仍然完全有效；该无效条款将由与其目的最接近且合法有效的条款替代。",
          },
        },
        {
          kind: "p",
          text: {
            en: "16.3 These Terms are not intended to give rights to anyone except you and us.",
            zh: "16.3 本条款仅对您与本公司具有约束力，不授予任何第三方权利。",
          },
        },
        {
          kind: "p",
          text: {
            en: "16.4 If we do not insist immediately that you do anything you are required to do under these Terms, or if we delay in taking steps against you in respect of your breaching these Terms, that will not mean that you do not have to do those things and it will not prevent us from taking steps against you at a later date.",
            zh: "16.4 若本公司未立即执行本条款项下的任何权利，或延迟行使相关权利，并不构成对该权利的放弃，亦不影响本公司日后继续主张该等权利。",
          },
        },
      ],
    },
  ],
  updated: {
    en: "These Terms were last updated with effect from June 2026.",
    zh: "本条款最后更新于 2026 年 6 月。",
  },
};
