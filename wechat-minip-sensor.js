"use strict";

var __debug = false;

/**
 * guid生成器
 */
const guiding = () => {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (e) {
        var t = 16 * Math.random() | 0;
        return ("x" == e ? t : 3 & t | 8).toString(16);
    });
};

/**
 * 代理逻辑
 * 
 * @param {object} target 被代理实例
 * @param {string} method 被代理函数名
 * @param {function} custom 代理函数
 */
const hooking = (target, method, custom) => {
    if (target[method]) {
        let _method = target[method]
        target[method] = function (options) {
            custom.call(this, options)
            _method.call(this, options)
        }
    } else {
        target[method] = function (options) {
            custom.call(this, options)
        }
    }
}
/**
 * App代理类
 */
class SensorApp {
    /**
     * App代理构造函数
     * 
     * @param {function} _origin 原App
     */
    constructor(_origin) {
        this._origin = _origin
    }

    /**
     * 需要被代理的函数定义 名字与生命周期保持一致
     */
    handlers = {
        onError: function (options) {
            if (__debug) {
                console.log('SensorApp onError:', options)
            }
        },
        onHide: function (options) {
            if (__debug) {
                console.log('SensorApp onHide:', options)
            }
        },
        onLaunch: function (options) {
            if (__debug) {
                console.log('SensorApp onLaunch:', options)
            }
        },
        onShow: function (options) {
            if (__debug) {
                console.log('SensorApp onShow:', options)
            }
        },
        onPageNotFound: function (options) {
            if (__debug) {
                console.log('SensorApp onPageNotFound:', options)
            }
        }
    }

    /**
     * 代理入口 通过handlers中定义的函数名称决定需要代理的方法
     * @param {object} target app实例
     */
    proxy(target) {
        for (const key in this.handlers) {
            if (this.handlers.hasOwnProperty(key)) {
                hooking(target, this.handlers[key].name, this.handlers[key]);
            }
        }
        this._origin(target)
    }
}
/**
 * Page代理类
 */
class SensorPage {
    /**
     * Page代理构造函数
     * 
     * @param {function} _origin 原Page
     */
    constructor(_origin) {
        this._origin = _origin
    }
    /**
     * 需要被代理的函数定义 名字与生命周期保持一致
     */
    handlers = {
        onLoad: function (options) {
            console.log('onLoad:', this)
        },
        onShow: function (options) {
            console.log('onShow:', this)
        },
        onReady: function (options) {
            console.log('onReady:', this)
        },
        onHide: function (options) {
            console.log('onHide:', this)
        },
        onUnload: function (options) {
            console.log('onUnload:', this)
        },
        onPullDownRefresh: function (options) {
            console.log('onPullDownRefresh:', this)
        },
        onReachBottom: function (options) {
            console.log('onReachBottom:', this)
        },
        onShareAppMessage: function (options) {
            console.log('onShareAppMessage:', this)
        },
        onResize: function (options) {
            console.log('onResize:', this)
        },
        onTabItemTap: function (options) {
            console.log('onTabItemTap:', this)
        },
    }
    /**
         * 代理入口 通过handlers中定义的函数名称决定需要代理的方法
         * @param {object} target page实例
         */
    proxy(target) {
        for (const key in this.handlers) {
            if (this.handlers.hasOwnProperty(key)) {
                hooking(target, this.handlers[key].name, this.handlers[key]);
            }
        }
        this._origin(target)
    }
}
/**
 * Behavior代理类
 */
class SensorBehavior {
    constructor(_origin) {
        this._origin = _origin
    }

    handlers = {
        onLoad: function (options) {
            console.log('onLoad:', this)
        },
        onShow: function (options) {
            console.log('onShow:', this)
        },
        onReady: function (options) {
            console.log('onReady:', this)
        },
        onHide: function (options) {
            console.log('onHide:', this)
        },
        onUnload: function (options) {
            console.log('onUnload:', this)
        },
        onPullDownRefresh: function (options) {
            console.log('onPullDownRefresh:', this)
        },
        onReachBottom: function (options) {
            console.log('onReachBottom:', this)
        },
        onShareAppMessage: function (options) {
            console.log('onShareAppMessage:', this)
        },
        onResize: function (options) {
            console.log('onResize:', this)
        },
        onTabItemTap: function (options) {
            console.log('onTabItemTap:', this)
        },
    }

    proxy(target) {
        for (const key in this.handlers) {
            if (this.handlers.hasOwnProperty(key)) {
                hooking(target, this.handlers[key].name, this.handlers[key]);
            }
        }
        this._origin(target)
    }
}
/**
 * Component代理类
 */
class SensorComponent {
    constructor(_origin) {
        this._origin = _origin
    }

    handlers = {
        onLoad: function (options) {
            console.log('onLoad:', this)
        },
        onShow: function (options) {
            console.log('onShow:', this)
        },
        onReady: function (options) {
            console.log('onReady:', this)
        },
        onHide: function (options) {
            console.log('onHide:', this)
        },
        onUnload: function (options) {
            console.log('onUnload:', this)
        },
        onPullDownRefresh: function (options) {
            console.log('onPullDownRefresh:', this)
        },
        onReachBottom: function (options) {
            console.log('onReachBottom:', this)
        },
        onShareAppMessage: function (options) {
            console.log('onShareAppMessage:', this)
        },
        onResize: function (options) {
            console.log('onResize:', this)
        },
        onTabItemTap: function (options) {
            console.log('onTabItemTap:', this)
        },
    }

    proxy(target) {
        for (const key in this.handlers) {
            if (this.handlers.hasOwnProperty(key)) {
                hooking(target, this.handlers[key].name, this.handlers[key]);
            }
        }
        this._origin(target)
    }
}
/**
 * 聚合代理类
 */
class Sensor {
    constructor() {
        this._SensorApp = new SensorApp(arguments[0])
        this._SensorPage = new SensorPage(arguments[1])
        this._SensorComponent = new SensorComponent(arguments[2])
        this._SensorBehavior = new SensorBehavior(arguments[3])
        this.init()
    }

    /**
     * 初始化
     * 
     * @param {object} options 初始化参数
     */
    init(options) {
        __debug = options ? options.debug || false : false;

        var _sensor_ = wx.getStorageSync('_sensor_')
        if (!_sensor_) {
            _sensor_ = { uuid: guiding(), system: wx.getSystemInfoSync() }
            wx.setStorageSync('_sensor_', _sensor_)
        }

        /**
         * 代理并替换原生组件
         */
        App = (target) => {
            this._SensorApp.proxy(target)
        }
        Page = (target) => {
            this._SensorPage.proxy(target)
        }
        Component = (target) => {
            this._SensorComponent.proxy(target)
        }
        Behavior = (target) => {
            this._SensorBehavior.proxy(target)
        }
    }
}

new Sensor(App, Page, Component, Behavior);
