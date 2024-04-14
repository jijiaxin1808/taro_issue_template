import { PropsWithChildren } from 'react'
import { useLaunch } from '@tarojs/taro'
import './app.less'
import { utilsFunc } from './utils'

function App({ children }: PropsWithChildren<any>) {

  useLaunch(() => {
    console.log('App launched.')
    utilsFunc()
  })

  // children 是将要会渲染的页面
  return children
}

export default App
