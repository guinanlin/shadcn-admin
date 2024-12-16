import {
  IconBrandDiscord,
  IconBrandDocker,
  IconBrandFigma,
  IconBrandGithub,
  IconBrandGitlab,
  IconBrandGmail,
  IconBrandMedium,
  IconBrandNotion,
  IconBrandSkype,
  IconBrandSlack,
  IconBrandStripe,
  IconBrandTelegram,
  IconBrandTrello,
  IconBrandWhatsapp,
  IconBrandZoom,
} from '@tabler/icons-react'

export const apps = [
  {
    name: 'Telegram',
    logo: <IconBrandTelegram />,
    connected: false,
    desc: '与Telegram连接以进行实时通信。',
  },
  {
    name: 'Notion',
    logo: <IconBrandNotion />,
    connected: true,
    desc: '轻松同步Notion页面以实现无缝协作。',
  },
  {
    name: 'Figma',
    logo: <IconBrandFigma />,
    connected: true,
    desc: '在一个地方查看和协作Figma设计。',
  },
  {
    name: 'Trello',
    logo: <IconBrandTrello />,
    connected: false,
    desc: '同步Trello卡片以简化项目管理。',
  },
  {
    name: 'Slack',
    logo: <IconBrandSlack />,
    connected: false,
    desc: '集成Slack以实现高效的团队沟通。',
  },
  {
    name: 'Zoom',
    logo: <IconBrandZoom />,
    connected: true,
    desc: '直接从仪表板主持Zoom会议。',
  },
  {
    name: 'Stripe',
    logo: <IconBrandStripe />,
    connected: false,
    desc: '轻松管理Stripe交易和支付。',
  },
  {
    name: 'Gmail',
    logo: <IconBrandGmail />,
    connected: true,
    desc: '轻松访问和管理Gmail消息。',
  },
  {
    name: 'Medium',
    logo: <IconBrandMedium />,
    connected: false,
    desc: '在您的仪表板上探索和分享Medium故事。',
  },
  {
    name: 'Skype',
    logo: <IconBrandSkype />,
    connected: false,
    desc: '无缝连接Skype联系人。',
  },
  {
    name: 'Docker',
    logo: <IconBrandDocker />,
    connected: false,
    desc: '轻松管理仪表板上的Docker容器。',
  },
  {
    name: 'GitHub',
    logo: <IconBrandGithub />,
    connected: false,
    desc: '通过GitHub集成简化代码管理。',
  },
  {
    name: 'GitLab',
    logo: <IconBrandGitlab />,
    connected: false,
    desc: '通过GitLab集成高效管理代码项目。',
  },
  {
    name: 'Discord',
    logo: <IconBrandDiscord />,
    connected: false,
    desc: '与Discord连接以实现无缝团队沟通。',
  },
  {
    name: 'WhatsApp',
    logo: <IconBrandWhatsapp />,
    connected: false,
    desc: '轻松集成WhatsApp以进行直接消息传递。',
  },
]
