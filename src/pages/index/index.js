import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import Demo1 from '../../components/demo1'

export default class Index extends Taro.Component {
  render () {
    return (
      <View>
        123
        <Demo1 text="demo1 is show"/>
      </View>
    )
  }
}