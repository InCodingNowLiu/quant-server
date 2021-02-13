const contract_type = {
  this_week: 'this_week',
  next_week: 'next_week',
  quarter: 'quarter',
  next_quarter: 'next_quarter',
};

// 开多：买入开多(direction用buy、offset用open)

// 平多：卖出平多(direction用sell、offset用close)

// 开空：卖出开空(direction用sell、offset用open)

// 平空：买入平空(direction用buy、offset用close)

const closeWithOffsetEnum = {
  kaikong: {
    direction: 'buy',
    offset: 'open',
  },
  pingduo: {
    direction: 'sell',
    offset: 'close',
  },
  kaikong: {
    direction: 'sell',
    offset: 'open',
  },
  pingkong: {
    direction: 'buy',
    offset: 'close',
  },
};

const orderConfig = {
  symbol: 'BTC',
  contract_type: contract_type.this_week,
  // 随机生成 客户自己填写和维护，必须为数字,请注意必须小于等于9223372036854775807
  client_order_id: '',
  // 获取当前的价格
  price: '',
  // 数量
  volume: 0,
  //"buy":买 "sell":卖
  direction: 'buy',
  //"open":开 "close":平
  offset: '',
  lever_rate: 50,
  //order_price_type 'opponent' 对手价
  order_price_type: 'opponent',
};

export { contract_type, closeWithOffsetEnum, orderConfig };
