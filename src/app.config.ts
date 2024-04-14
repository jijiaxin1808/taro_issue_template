export default defineAppConfig({
  pages: [
    'pages/index/index'
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  usingComponents: {
    'charge-dialog-react': './native-components/recharge-dialog/index',
    'charge-dialog-native': './native-components/native-charge-dialog/index',
  },
  components: [
    'native-components/recharge-dialog/index',
  'native-components/native-charge-dialog/index'
],
})
