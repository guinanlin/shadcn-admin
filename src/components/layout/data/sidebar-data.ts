import {
  IconBarrierBlock,
  IconBrowserCheck,
  IconBug,
  IconChecklist,
  IconError404,
  IconHelp,
  IconLayoutDashboard,
  IconLock,
  IconLockAccess,
  IconMessages,
  IconNotification,
  IconPackages,
  IconPalette,
  IconServerOff,
  IconSettings,
  IconTool,
  IconUserCog,
  IconUserOff,
  IconUsers,
} from '@tabler/icons-react'
import { AudioWaveform, Command, GalleryVerticalEnd } from 'lucide-react'
import { type SidebarData } from '../types'

export const sidebarData: SidebarData = {
  user: {
    name: 'satnaing',
    email: 'satnaingdev@gmail.com',
    avatar: '/avatars/shadcn.jpg',
  },
  teams: [
    {
      name: 'DTY Admin',
      logo: Command,
      plan: 'Vite + ShadcnUI',
    },
    {
      name: 'Acme 公司',
      logo: GalleryVerticalEnd,
      plan: '企业版',
    },
    {
      name: 'Acme Corp.',
      logo: AudioWaveform,
      plan: '初创版',
    },
  ],
  navGroups: [
    {
      title: '常规',
      items: [
        {
          title: '仪表盘',
          url: '/',
          icon: IconLayoutDashboard,
        },
        {
          title: '任务',
          url: '/tasks',
          icon: IconChecklist,
        },
        {
          title: '应用',
          url: '/apps',
          icon: IconPackages,
        },
        {
          title: '聊天',
          url: '/chats',
          badge: '3',
          icon: IconMessages,
        },
        {
          title: '用户',
          url: '/users',
          icon: IconUsers,
        },
      ],
    },
    {
      title: '页面',
      items: [
        {
          title: '认证',
          icon: IconLockAccess,
          items: [
            {
              title: '登录',
              url: '/sign-in',
            },
            {
              title: '登录 (2 列)',
              url: '/sign-in-2',
            },
            {
              title: '注册',
              url: '/sign-up',
            },
            {
              title: '忘记密码',
              url: '/forgot-password',
            },
            {
              title: 'OTP',
              url: '/otp',
            },
          ],
        },
        {
          title: '错误',
          icon: IconBug,
          items: [
            {
              title: '未授权',
              url: '/401',
              icon: IconLock,
            },
            {
              title: '禁止',
              url: '/403',
              icon: IconUserOff,
            },
            {
              title: '未找到',
              url: '/404',
              icon: IconError404,
            },
            {
              title: '内部服务器错误',
              url: '/500',
              icon: IconServerOff,
            },
            {
              title: '维护错误',
              url: '/503',
              icon: IconBarrierBlock,
            },
          ],
        },
      ],
    },
    {
      title: '其他',
      items: [
        {
          title: '设置',
          icon: IconSettings,
          items: [
            {
              title: '个人资料',
              url: '/settings',
              icon: IconUserCog,
            },
            {
              title: '账户',
              url: '/settings/account',
              icon: IconTool,
            },
            {
              title: '外观',
              url: '/settings/appearance',
              icon: IconPalette,
            },
            {
              title: '通知',
              url: '/settings/notifications',
              icon: IconNotification,
            },
            {
              title: '显示',
              url: '/settings/display',
              icon: IconBrowserCheck,
            },
          ],
        },
        {
          title: '帮助中心',
          url: '/help-center',
          icon: IconHelp,
        },
      ],
    },
  ],
}
