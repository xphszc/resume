Enter file contents here// JavaScript source code

//脚本匿名函数 
(function () {
    //浏览器类型数组 
    var Browser = { IE: 0, isIE6: !1, Firefox: 0, Opera: 0, Safari: 0, Chrome: 0 };
    //浏览器类型匹配函数
    (function () {
        var e = navigator.userAgent.match(/(IE|Firefox|Opera|Safari|Chrome)[ \/](\d+(\.\d+)?)/i),
            t = /(msie\s|trident.*rv:)([\w.]+)/.exec(navigator.userAgent.toLowerCase());
        e && e.length && (Browser[e[1]] = parseInt(e[e.length - 2], 10)),
        Browser.IE == 0 && t && (Browser.IE = parseInt(t[2])),
        Browser.IE > 0 && Browser.IE < 7 && (Browser.isIE6 = !0)
    })();

    //需要打印的log信息格式
    var msg = {
        e: null,    //事件名
        text: '',   //事件信息描述
        time: null  //事件产生时间
    },

    //打印log信息执行函数
    out = function (msg) {
        console.log(msg);
    },

    //事件绑定方法函数
    bind = function (c, b, d) {
        if (!d)
            return;
        return c.addEventListener ? c.addEventListener(b, d, !1) : c.attachEvent ? c.attachEvent("on" + b, d) : c["on" + b] = d, this;
    },

    //获取父节点函数
    ancestor = function () {
        var w = null;
        return function e(t) {
            t === t.parent ? w = t : e(t.parent);
        }(window), w;
    },

    //滚动条位置信息监听函数
    scroll = function () {
        return {
            "left": document.body.scrollLeft || document.documentElement.scrollLeft,  //scrollLeft
            "top": document.body.scrollTop || document.documentElement.scrollTop //scrollTop
        };
    },

    //窗口大小信息获取函数
    windowSize = function () {
        return {
            "width": document.documentElement.clientWidth,//宽度
            "height": document.documentElement.clientHeight//高度
        };
    },

    //事件获取函数
    getSelectEventPos = function (e) {
        j = e || window.event;
        var m = {},
        o = 0,
        n = 0,
        q = scroll().left,
        p = scroll().top;
        if (j.pageX || j.pageY)
            o = j.pageX, n = j.pageY;
        else if (j.clientX || j.clientY)
            o = j.clientX + q, n = j.clientY + p;
        return m.x = o, m.y = n, m;
    },

    //事件位置
    getSelectorPos = function (o) {
        var j = o.x,
        n = o.y,
        m = scroll().left,
        l = scroll().top,
        k = windowSize().width;
        return j + 10 + 20 <= k + m ? j += 10 : j = k + m - 20, n - 20 - 20 >= l ? n -= 20 : n += 20, o.x = j, o.y = n, o;
    },

    //鼠标点击
    mousedown = function (e) {
        if (event.button != 2) {
            try {
                window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();
            } catch (e) {
            }
            ;
        }
    },

    //鼠标点击松开
    mouseup = function (e) {
        if (event.button != 2) {
            var e = e || window.event, el = e.target || e.srcElement, x = 0, Y = 0, text, p;
            text = window.getSelection ? window.getSelection().toString() : document.selection.createRange().text;
            if (text == "")
                return;
            p = getSelectEventPos(e);
            x = getSelectorPos(p).x;
            y = getSelectorPos(p).y;
            msg.e = event.type + '(' + x + ',' + y + ')';
            msg.text = '选中文字:' + text;
            msg.time = new Date();
            out(msg);
        }
    },

    //鼠标双击事件
    dblclick = function (e) {
        var e = e || window.event, el = e.target || e.srcElement;
        e.preventDefault();
        if (window.getSelection) {
            var range = document.createRange();
            range.selectNode(el);
            window.getSelection().addRange(range);
        } else if (document.selection) {
            var range = document.body.createTextRange();
            range.moveToElementText(el);
            range.select();
        }
        mouseup(e);
    },

    //按一定频率获取事件
    evts = function () {
        //行为名称表
        var evs = [
            'click',
            'dblclick',
            'mousedown',
            'mouseup',
            'mouseover',
            'mousemove',
            'mouseout',
            'keypress',
            'keydown',
            'keyup'
        ];
        //检索事件类型
        for (var i = 0, len = evs.length; i < len; i++) {
            bind(document, evs[i], function (e) {
                msg.e = event.type + '(' + event.x + ',' + event.y + ')';
                msg.text = '页面事件触发,目标元素' + event.target || event.srcElement;
                msg.time = new Date();
                out(msg);
            });
        }
    },

    //脚本初始化函数
    init = function () {
        //文字选中率
        bind(document, "mouseup", mouseup);
        Browser.IE >= 9 && bind(document, "dblclick", dblclick);
        bind(document, "mousedown", mousedown);

        //事件执行频率
        evts();

        //滚动条速度
        bind(document, 'scroll', function (e) {
            msg.e = event.type;
            msg.text = '当前滚动条位置:{top:' + scroll().top + ',left:' + scroll().left + '}';
            msg.time = new Date();
            out(msg);
        });
    };

    //将整体脚本匿名函数加载到window节点上
    window.onload = function () {
        init();
    };


})();
