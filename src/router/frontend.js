//系统路由
const routes = [
	{
    path: '/message',
    children: [{ path: '', component: () => import( '@/views/message') }],
  }
]

export default routes;