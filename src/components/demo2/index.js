import Taro from '@tarojs/taro'
import { View } from '@tarojs/components'

export default class Demo2 extends Taro.Component {
  render () {
    return (
      <View>
        { this.props.text }
      </View>
    )
  }
}