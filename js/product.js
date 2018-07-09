// 薪付通
var xftData = {
    title: '薪付通服务',
    code: 'xft',
    data: {
        list: [{
            icon: 'icon-01',
            title: '测试标题1',
            desc: '哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈'
        }, {
            icon: 'icon-01',
            title: '测试标题1',
            desc: '哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈'
        }, {
            icon: 'icon-01',
            title: '测试标题1',
            desc: '哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈'
        }, {
            icon: 'icon-01',
            title: '测试标题1',
            desc: '哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈'
        }, {
            icon: 'icon-01',
            title: '测试标题1',
            desc: '哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈'
        }, {
            icon: 'icon-01',
            title: '哈哈哈哈哈哈哈',
            desc: '哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈'
        }]
    }
};

// 发票通
var fptData = {
    title: '发票通服务',
    code: 'fpt',
    data: {
        list: [{
            icon: 'icon-01',
            title: '智能开风险',
            desc: '通过线下扫码实现自动开票；通过系统对接实现一键开票；通过导入信息实现批量开票；'
        }, {
            icon: 'icon-01',
            title: '智能查风险',
            desc: '纸票电票快速扫描入库；全国各地增值税发票查验真伪；'
        }, {
            icon: 'icon-01',
            title: '智能管风险',
            desc: '建立企业发票档案；异常实时监控，防控发票风险；进销项发票精细化数据分析管理；'
        }, {
            icon: 'icon-01',
            title: '智能控风险',
            desc: '常规、深度多维度风险评测；稽查风险实时预检；涉税数据可视化分析；实时分析税局端重点监控指标；'
        }]
    }
};

// 报税通
var bstData = {
    title: '报税通服务',
    code: 'bst',
    data: {}
};

// 凭证通
var pztData = {
    title: '凭证通服务',
    code: 'pzt',
    data: {
        list: [{
            icon: 'icon_pzt_01',
            title: '原始数据审计',
            desc: '机器人支持系统对接或Excel导入的方式，覆盖企业的银行数据、票据系统、业务系统等。能够根据财务逻辑主动发现业务中的问题，并向财务人员反馈结果。'
        }, {
            icon: 'icon_pzt_02',
            title: '数据修复',
            desc: '通过自动修复和人工干预两种方式，修复原始数据。'
        }, {
            icon: 'icon_pzt_03',
            title: '财务凭证',
            desc: '支持权责发生制和收付实现制两种财务记账方式。一键式生成财务凭证，支持excel和API两种方式与财务管理软件对接。'
        }, {
            icon: 'icon_pzt_04',
            title: '凭证审计',
            desc: '主动检测凭证中的数据完整性、借贷平衡等。'
        }, {
            icon: 'icon_pzt_05',
            title: '凭证审计明细',
            desc: '输出财务凭证生成过程中的明细信息，满足财务审计。'
        }, {
            icon: 'icon_pzt_06',
            title: '辅助功能',
            desc: '日常资金报告、余额日报、进销项智能计算等高效无差错的输出财务工作中管理数据。'
        }]
    }
};

fptData.data.list.forEach(function(item) {
    var title = item.title;
    item.titleLeft = title.substr(0, 2);
    item.titleCenter = title.substr(2, 1);
    item.titleRight = title.substr(3, 2);
});

var sectionList = [];
sectionList.push(xftData);
sectionList.push(fptData);
sectionList.push(bstData);
sectionList.push(pztData);

sectionList.forEach(function(sectionData) {
    var html = template('tpl-section', sectionData);
    $('main').append(html);
});

var html = template.compile(concat_template)();
$('.pzt-section').append(html);
