# Kline

> 本项目基于某网站的K线插件做了一些封装和二次开发,使插件更加易用,方便后来的开发者. 修改主要涉及以下几个点:

* 删除了一些不必要的逻辑
* 把源码中可配置的部分抽出来
* 添加了对 websocket(websocket over stomp)连接方式的支持
* 用 js 创建 K 线页面元素

### Features

    ✅ 支持两种主题配色切换 
    ✅ 支持简体中文,英文,繁体中文三种语言 
    ✅ 可配置的时间聚合方式
    ✅ 支持多种画线工具
    ✅ 支持多种画图算法
    ✅ 支持深度图数据及最近成交数据展示
    ✅ 支持普通轮询和Websocket Over Stomp两种连接方式

### ScreenShot!

![](screenshot_dark.png)

![](screenshot_light.png)

### Requirements

* jquery
* jquery.mousewheel
* sockjs (仅socket方式需要)
* stomp (仅socket方式需要)

### Install & Load

安装

```bash
$ npm install kline 
```

* 使用标签引入, 在HTML页面头部加入

```html
    <link href="/js/kline.css" rel="stylesheet"/>
    <script src="/lib/sockjs.js"></script>
    <script src="/lib/stomp.js"></script>
    <script src="/lib/jquery.js"></script>
    <script src="/lib/jquery.mousewheel.js"></script>
```

* OR 使用RequireJs引入

```javascript
    require.config({
        paths: {
            "jquery": "../lib/jquery",
            "jquery.mousewheel": "../lib/jquery.mousewheel",
            "sockjs": "../lib/sockjs",
            "stomp": "../lib/stomp",
            "kline": "../js/kline"
        },
        shim: {
            "jquery.mousewheel": {
                deps: ["jquery"]
            },
            "kline": {
                deps: ["jquery.mousewheel", "sockjs", "stomp"]
            }
        }
    });

    require(['kline'], function () {
       // ...
    });
```

* 在页面中加入

```html
  <div id="kline_container"></div>
```

### Develop

* Poll(轮询)

```javascript
    var kline = new Kline({
        element: "#kline_container",
        symbol: "coin5/coin4",
        symbolName: "COIN5_COIN4",
        type: "poll", // poll/socket
        url: "http://127.0.0.1:8080/mock.json"
    });
    kline.draw();
```

* Websocket Over Stomp

```javascript
   var kline = new Kline({
        element: "#kline_container",
        symbol: "coin5/coin4",
        symbolName: "COIN5_COIN4",
        type: "socket", // poll/socket
        url: 'http://127.0.0.1:8088/socket',
        subscribePath: "/kline/push",
        sendPath: "/app/kline"       
    });
    kline.draw();
```


### Support Options

* `element`: 容器元素选择器 Default: #kline_container
* `width`: 宽度 (px) Default: 1200
* `height`: 宽度 (px) Default: 650
* `theme`: 主题 dark(暗色)/light(亮色) Default: dark
* `language`: 语言 zh-cn(简体中文)/en-us(英文)/zh-tw(繁体中文) Default: zh-cn
* `ranges`: 聚合选项 1w(1周)/1d(1天)/12h(12小时)/6h(6小时)/4h(4小时)/2h(2小时)/1h(1小时)/30m(30分钟)/15m(15分钟)/5m(5分钟)/3m(3分钟)/1m(1分钟)/line(分时) Default: ["1w", "1d", "1h", "30m", "15m", "5m", "1m", "line"]
* `symbol`: 交易代号
* `symbolName`: 交易名称
* `type`: 连接类型 socket(websocket)/poll(轮询) Default: poll
* `url`: 请求地址
* `limit`: 分页大小 Default: 1000
* `intervalTime`: 请求间隔时间(毫秒) Default: 3000
* `subscribePath`(仅socket方式需要): 订阅地址
* `sendPath`(仅socket方式需要): 发送地址
* `debug`: 调试模式 true/false Default: true
* `enableTrade`: 显示行情侧边栏 true/false Default: true


### Methods

* draw()

    画K线图

```javascript
kline.draw();
```

* setSymbol(string symbol, string symbolName)

    设置交易品种

```javascript
kline.setSymbol('usd/btc', 'USD/BTC');
```

* setTheme(string style)

    设置主题

```javascript
kline.setTheme('dark');  // dark/light
```

* setLanguage(string lang)

    设置语言

```javascript
kline.setLanguage('en-us');  // en-us/zh-ch/zh-tw
```


### Response

example: 

```json
{
  "success": true,
  "data": {
    "lines": [
      [
        1.50790476E12,
        99.30597249871,
        99.30597249871,
        99.30597249871,
        99.30597249871,
        66.9905449283
      ]
    ],
    "trades": [
      {
        "amount": 0.02,
        "price": 5798.79,
        "tid": 373015085,
        "time": 1508136949,
        "type": "buy"
      }
    ],
    "depths": {
      "asks": [
        [
          500654.27,
          0.5
        ]
      ],
      "bids": [
        [
          5798.79,
          0.013
        ]
      ]
    }
  }
}
```

说明:

* `lines`: K线图, 依次是: 时间(毫秒), 开盘价, 最高价, 最低价, 收盘价, 成交量
* `depths`(可选, enableTrade后展示): 深度图数据,  `asks`:一定比例的卖单类别, `bids`:一定比例的买单列表
* `trades`(可选, enableTrade后展示): 最近成交记录,  `amount`: 成交量, `price`:单价, `tid`:订单ID, `time`:Unix时间戳, `type`:成交类型 buy/sell
