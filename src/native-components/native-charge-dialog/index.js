// const plugin = requirePlugin('playlet-plugin');

Component({
    options: {
        multipleSlots: true, // 在组件定义时的选项中启用多slot支持
    },
    /**
     * 组件的属性列表
     */
    properties: {
        novelManagerId: {
            // novelManager句柄 用来get实例使用
            type: Number,
            value: -1,
        },
        bookId: {
            // 书籍id
            type: String,
            value: '',
        },
        chapterIndex: {
            // 拉起收费框的章节下标(从0开始)
            type: Number,
            value: -1,
        },
    },

    /**
     * 组件的初始数据
     */
    data: {
        _isInitChargeDialog: false,
        chargeList: [],
        selectIndex: -1,
        testObj: {
            test: 1,
        },
        properties: {},
    },
    lifetimes: {
        attached() {
            this.initChargeDialog();
        },
    },
    observers: {},
    /**
     * 组件的方法列表
     */
    methods: {
        initChargeDialog() {},
        getPlayerManager() {},
        onShowChargeDialog(xx) {},
        onHideChargeDialog(xx) {},
        onSelectChargeItem(e) {},
        onClose() {},
        onCharge(e) {},
        consoleProperties() {
            // this.properties =
            console.log('info-properties', this.properties);
        },
    },
});
