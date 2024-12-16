import {
  IconArrowDown,
  IconArrowRight,
  IconArrowUp,
  IconCircle,
  IconCircleCheck,
  IconCircleX,
  IconExclamationCircle,
  IconStopwatch,
} from '@tabler/icons-react'

export const labels = [
  {
    value: 'bug',
    label: '缺陷',
  },
  {
    value: 'feature',
    label: '功能',
  },
  {
    value: 'documentation',
    label: '文档',
  },
]

export const statuses = [
  {
    value: 'backlog',
    label: '待处理',
    icon: IconExclamationCircle,
  },
  {
    value: 'todo',
    label: '待办',
    icon: IconCircle,
  },
  {
    value: 'in progress',
    label: '进行中',
    icon: IconStopwatch,
  },
  {
    value: 'done',
    label: '完成',
    icon: IconCircleCheck,
  },
  {
    value: 'canceled',
    label: '已取消',
    icon: IconCircleX,
  },
]

export const priorities = [
  {
    label: '低',
    value: 'low',
    icon: IconArrowDown,
  },
  {
    label: '中',
    value: 'medium',
    icon: IconArrowRight,
  },
  {
    label: '高',
    value: 'high',
    icon: IconArrowUp,
  },
]
