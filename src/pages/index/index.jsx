import { View } from '@tarojs/components'
import excellentIcon from '../../assets/images/excellentIcon.png'
import './index.scss'


export default function Index() {

  function tapImg() {
    console.log('点击图片')
  }
  const htmlContent = '<span style="color: red">我是红色文本</span><img src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"/>'

  // const htmlContent = `<span style="color: red">我是红色文本</span><img src="${excellentIcon}"/>`

  return (
    <View className='index'>
      <mp-html content={htmlContent} onImgtap={tapImg} preview-img={false} />
    </View>
  )
}
