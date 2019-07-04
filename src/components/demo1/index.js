import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'
import Demo2 from '../demo2'

export default class Demo1 extends Taro.Component {
  render () {
    return (
      <View>
        { this.props.text }
        <Demo2 text='demo2 is show'/>
      </View>
    )
  }
}