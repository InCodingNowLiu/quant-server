const hbsdk = require('../sdk/hbsdk');

/**
 * 交割合约下单
 * /api/v1/contract_order
    倍数 50x
    当前价格下单, 然后默认对手价
    多少张数
    仓位方向
    开平方向
 * @param count 开仓数量
  * @param direction 开仓方向 - kaiduo/开多  pingduo/平多 pingkong平空 kaikong/开空

 */
const createOrder = async (count, direction, lever_rate = 50) => {
  const directionConfig = closeWithOffsetEnum[direction];
  const result = await hbsdk.post_intf({
    tip: 'POST_交割合约下单',
    path: '/api/v1/contract_order',
    req_body: {
      symbol: 'BTC',
      // 合约类型
      contract_type: contract_type.this_week,
      // 随机生成 客户自己填写和维护，必须为数字,请注意必须小于等于9223372036854775807
      client_order_id: 1,
      // 获取当前的价格 - TODO: 获取当前的合约价格
      price: '',
      // 数量
      volume: count,
      // direction 跟offset 做成配置项
      direction: 'buy', // "buy":买 "sell":卖
      offset: '', //"open":开 "close":平
      // 倍数, 默认50, 可修改
      lever_rate: lever_rate,
      //order_price_type 'opponent' 对手价
      order_price_type: 'opponent',
      ...directionConfig,
    },
  });
  console.log(`======交割合约开仓请求结果=======:`, result);
};
