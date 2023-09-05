const Binance = require('binance-api-node').default

const client = new Binance({
  APIKEY: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
  APISECRET: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX'
})

setInterval(() => {
  client.prices().then((result) => {
    // console.log(result);
    console.log('BTCUSDT', result.BTCUSDT);
    console.log('ETHUSDT', result.ETHUSDT);
    console.log('BNBUSDT', result.BNBUSDT);
    console.log('ADAUSDT', result.ADAUSDT);
    console.log('XRPUSDT', result.XRPUSDT);
    console.log('DOGEUSDT', result.DOGEUSDT);
    console.log('DOTUSDT', result.DOTUSDT);
    console.log('ICPUSDT', result.ICPUSDT);
    console.log('UNIUSDT', result.UNIUSDT);
    console.log('BCHUSDT', result.BCHUSDT);
    console.log('LINKUSDT', result.LINKUSDT);
    console.log('LTCUSDT', result.LTCUSDT);
    console.log('MATICUSDT', result.MATICUSDT);
    console.log('XLMUSDT', result.XLMUSDT);
    console.log('ETCUSDT', result.ETCUSDT);
    console.log('SOLUSDT', result.SOLUSDT);
    console.log('VETUSDT', result.VETUSDT);
    console.log('THETAUSDT', result.THETAUSDT);
    console.log('EOSUSDT', result.EOSUSDT);
    console.log('TRXUSDT', result.TRXUSDT);
    console.log('FILUSDT', result.FILUSDT);
    console.log('XMRUSDT', result.XMRUSDT);
    console.log('DAIUSDT', result.DAIUSDT);
    console.log('AAVEUSDT', result.AAVEUSDT);
    console.log('NEOUSDT', result.NEOUSDT);
    console.log('SHIBUSDT', result.SHIBUSDT);
    console.log('MKRUSDT', result.MKRUSDT);
    console.log('ATOMUSDT', result.ATOMUSDT);
    console.log('FTTUSDT', result.FTTUSDT);
    console.log('XTZUSDT', result.XTZUSDT);
    console.log('RUNEUSDT', result.RUNEUSDT);
    console.log('CAKEUSDT', result.CAKEUSDT);
    console.log('ALGOUSDT', result.ALGOUSDT);
    console.log('BTTUSDT', result.BTTUSDT);
    console.log('KSMUSDT', result.KSMUSDT);
    console.log('LUNAUSDT', result.LUNAUSDT);
    console.log('AVAXUSDT', result.AVAXUSDT);
    console.log('COMPUSDT', result.COMPUSDT);
    console.log('DCRUSDT', result.DCRUSDT);
    console.log('DASHUSDT', result.DASHUSDT);
    console.log('HBARUSDT', result.HBARUSDT);
    console.log('SUSHIUSDT', result.SUSHIUSDT);
    console.log('ZECUSDT', result.ZECUSDT);
    console.log('EGLDUSDT', result.EGLDUSDT);
    console.log('TFUELUSDT', result.TFUELUSDT);
    console.log('XEMUSDT', result.XEMUSDT);
    console.log('HNTUSDT', result.HNTUSDT);
    console.log('CHZUSDT', result.CHZUSDT);
    console.log('YFIUSDT', result.YFIUSDT);
    console.log('HOTUSDT', result.HOTUSDT);
    console.log('WAVESUSDT', result.WAVESUSDT);
    console.log('ENJUSDT', result.ENJUSDT);
    console.log('ZILUSDT', result.ZILUSDT);
    console.log('QTUMUSDT', result.QTUMUSDT);
    console.log('BATUSDT', result.BATUSDT);
    console.log('ZENUSDT', result.ZENUSDT);
    console.log('MANAUSDT', result.MANAUSDT);
    console.log('BTGUSDT', result.BTGUSDT);
    console.log('STXUSDT', result.STXUSDT);
    console.log('NANOUSDT', result.NANOUSDT);
    console.log('ONTUSDT', result.ONTUSDT);
    console.log('BNTUSDT', result.BNTUSDT);
    console.log('ONEUSDT', result.ONEUSDT);
    console.log('OMGUSDT', result.OMGUSDT);
    console.log('DGBUSDT', result.DGBUSDT);
    console.log('UMAUSDT', result.UMAUSDT);
    console.log('ZRXUSDT', result.ZRXUSDT);
    console.log('SCUSDT', result.SCUSDT);
    console.log('GRTUSDT', result.GRTUSDT);
    console.log('FTMUSDT', result.FTMUSDT);
    console.log('RVNUSDT', result.RVNUSDT);
    console.log('ANKRUSDT', result.ANKRUSDT);
    console.log('BAKEUSDT', result.BAKEUSDT);
    console.log('ICXUSDT', result.ICXUSDT);
    console.log('IOSTUSDT', result.IOSTUSDT);
    console.log('LPTUSDT', result.LPTUSDT);
    console.log('ARUSDT', result.ARUSDT);
    console.log('CRVUSDT', result.CRVUSDT);
    console.log('WRXUSDT', result.WRXUSDT);
    console.log('IOTAUSDT', result.WRXUSDT);
  })
},500)
