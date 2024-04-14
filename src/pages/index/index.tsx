import { View, Text } from '@tarojs/components'
import { useLoad } from '@tarojs/taro'
import './index.less'

export default function Index() {

  useLoad(() => {
    console.log('Page loaded.')
  })

  return (
    <View className='index'>
        <charge-dialog-react props={{ test1: 1 }} />
      <Text>Hello world!</Text>
    </View>
  )
}
