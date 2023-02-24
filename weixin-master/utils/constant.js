/* import {
  entApplyCheck
 } from "@/config/api";
 
import request from '@/utils/request'; */

// 数字校验
const incomeTypeRules = (rule, value, callback) => {
  // 必须为数字
  if(!/^(-?\d+)(\.\d+)?$/.test(value) && value) {
    callback('格式有误');
  } else {
    callback();
  }  
};


// 数字校验
const typeRules = (rule, value, callback) => {
  if(!value) {
    callback('不能为空');
  }
  // 必须为数字
  else if(!/^[0-9]+([.]{1}[0-9]+){0,1}$/.test(value) && value) {
    callback('请输入数字');
  } else {
    callback();
  }  
};
// 社会统一代码验证
const socialUniformCodeRules = (rule, value, callback) => {
  if(!value) {
    callback('不能为空');
  }
  else if(!/[0-9A-HJ-NPQRTUWXY]{2}\d{6}[0-9A-HJ-NPQRTUWXY]{10}/.test(value)) {
    callback('社会统一代码格式有误');
  } else {
    callback();
  };
};
// 身份证
const cardCodeRules = (rule, value, callback) => {
  if(!/^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/.test(value)) {
    callback('身份证格式有误');
  } else {
    callback();
  };
};
// 手机号
const phoneRules = (rule, value, callback) => {
  if(!value) {
    callback('不能为空');
  }
  else if(!/^1([358][0-9]|4[579]|66|7[0135678]|9[89])[0-9]{8}$/.test(value)) {
    callback('手机号格式有误');
  }else {
    callback()
  }
};
//不为空
const emtyRules = (rule, value, callback) => {
  if(value) {
    callback();
  } else {
    callback('不能为空');
  }
};
const xsOptions = [
  {
    value: "china",
    label: "企事业单位",
    isSelect:　false
  },
  {
    value: "china",
    label: "服务机构",
    isSelect:　false
  }
];
const locationOptions1 = [
/*   {
    value: "国家",
    label: "国家",
    isSelect:　false,
    type: 'quxian'
  }, */

   {
    value: "beijing",
    label: "北京市",
    isSelect:　false,
    type: 'quxian'
  },
  {
    value: "shijingshan",
    label: "石景山区",
    isSelect:　false,
    type: 'quxian'
  }
];
const industrialOptions = [
  {
    value: "不符合",
    label: "不符合",
    isSelect:　false,
    type: "jigou"
  },
  {
    value: "众创空间",
    label: "众创空间",
    isSelect:　false,
    type: "jigou"
  },
  {
    value: "孵化器",
    label: "孵化器",
    isSelect:　false,
    type: "jigou"
  },
  {
    value: "加速器",
    label: "加速器",
    isSelect:　false,
    type: "jigou"
  },
  {
    value: "产业园",
    label: "产业园",
    isSelect:　false,
    type: "jigou"
  },
  {
    value: "shijingshan",
    label: "其他",
    isSelect:　false,
    type: "jigou"
  }
];
const regionOptions = [
  {
    value: "不符合",
    label: "不符合",
    isSelect:　false,
    type: "diyu"
  },
  {
    value: "中关村示范区",
    label: "中关村示范区",
    isSelect:　false,
    type: 'diyu'
  },
  {
    value: "北京经济技术开发区",
    label: "北京经济技术开发区",
    isSelect:　false,
    type: 'diyu'
  },
  {
    value: "中关村石景山园",
    label: "中关村石景山园",
    isSelect:　false,
    type: 'diyu'
  }
];
const equityMarketOptions =  [
  {
    value: "不符合",
    label: "不符合",
    isSelect:　false,
    type: "shangshi"
  },
  {
    value: "上市企业",
    label: "上市企业",
    isSelect:　false,
    type: 'shangshi'
  },
  {
    value: "非上市企业",
    label: "非上市企业",
    isSelect:　false,
    type: 'shangshi'
  }
];
const developmentOptions = [
  {
    value: "不符合",
    label: "不符合",
    isSelect:　false,
    type: "keyan"
  },
  {
    value: "研发中心",
    label: "研发中心",
    isSelect:　false,
    type: 'keyan'
  },
  {
    value: "实验室",
    label: "实验室",
    isSelect:　false,
    type: 'keyan'
  }
];
const projectOptions = [
  {
    value: "不符合",
    label: "不符合",
    isSelect:　false,
    type: "xiangmu"
  },
  {
    value: "平台项目",
    label: "平台项目",
    isSelect:　false,
    type: 'xiangmu'
  },
  {
    value: "示范项目",
    label: "示范项目",
    isSelect:　false,
    type: 'xiangmu'
  },
  {
    value: "工程项目",
    label: "工程项目",
    isSelect:　false,
    type: 'xiangmu'
  },
  {
    value: "科技创新项目",
    label: "科技创新项目",
    isSelect:　false,
    type: 'xiangmu'
  },
  {
    value: "其他",
    label: "其他",
    isSelect:　false,
    type: 'xiangmu'
  }
];

const busneissOptions = [
  {
    value: "不符合",
    label: "不符合",
    isSelect:　false,
    type: "fenlei"
  },
  {
    value: "上榜企业",
    label: "上榜企业",
    isSelect:　false,
    type: 'fenlei'
  },
  {
    value: "头部企业",
    label: "头部企业",
    isSelect:　false,
    type: 'fenlei'
  },
  {
    value: "服务机构",
    label: "服务机构",
    isSelect:　false,
    type: 'fenlei'
  },
  {
    value: "其他",
    label: "其他",
    isSelect:　false,
    type: 'fenlei'
  }
];
const locationOptions = [
/*   {
    value: "中国",
    label: "中国",
    isSelect:　false
  },
  {
    value: "北京",
    label: "北京",
    isSelect:　false
  }, */
  {
    value: "东城区",
    label: "东城区",
    isSelect:　false
  },
  {
    value: "西城区",
    label: "西城区",
    isSelect:　false
  },
  {
    value: "海淀区",
    label: "海淀区",
    isSelect:　false
  },
  {
    value: "朝阳区",
    label: "朝阳区",
    isSelect:　false
  },
  {
    value: "昌平区",
    label: "昌平区",
    isSelect:　false
  },
  {
    value: "石景山区",
    label: "石景山区",
    isSelect:　false
  },
  {
    value: "通州区",
    label: "通州区",
    isSelect:　false
  },
  {
    value: "顺义区",
    label: "顺义区",
    isSelect:　false
  },
  {
    value: "延庆区",
    label: "延庆区",
    isSelect:　false
  },
  {
    value: "平谷区",
    label: "平谷区",
    isSelect:　false
  },
  {
    value: "门头沟区",
    label: "门头沟区",
    isSelect:　false
  }
];
const organizationOptions = [
  {
    value: "不符合",
    label: "不符合",
    isSelect:　false,
    type: "zuzhi"
  },
  {
    value: "企事业单位",
    label: "企事业单位",
    isSelect:　false,
    type: 'zuzhi'
  },
  {
    value: "社会组织",
    label: "社会组织",
    isSelect:　false,
    type: 'zuzhi'
  }
];
const ywOptions = [
  {
    value: "1企业",
    label: "企事业单位",
    isSelect:　false
  },
  {
    value: "beijing",
    label: "社会组织",
    isSelect:　false
  }
];
const businessOptions = [
  {
    value: "高精尖产业",
    label: "高精尖产业",
    isSelect:　false,
    type: '"yewu'
  },
  {
    value: "现代服务业",
    label: "现代服务业",
    isSelect:　false,
    type: '"yewu'
  },
  {
    value: "新基建",
    label: "新基建",
    isSelect:　false,
    type: '"yewu'
  },
  {
    value: "商贸流通业",
    label: "商贸流通业",
    isSelect:　false,
    type: '"yewu'
  },
  {
    value: "新基建",
    label: "新基建",
    isSelect:　false,
    type: '"yewu'
  },
  {
    value: "商贸流通业",
    label: "商贸流通业",
    isSelect:　false,
    type: '"yewu'
  },
  {
    value: "数字创意",
    label: "数字创意",
    isSelect:　false,
    type: '"yewu'
  },
  {
    value: "工业互联网",
    label: "工业互联网",
    isSelect:　false,
    type: '"yewu'
  },
  {
    value: "体育运动",
    label: "体育运动",
    isSelect:　false,
    type: '"yewu'
  },
  {
    value: "文化旅游",
    label: "文化旅游",
    isSelect:　false,
    type: '"yewu'
  },
  {
    value: "智慧城市",
    label: "智慧城市",
    isSelect:　false,
    type: '"yewu'
  },
  {
    value: "其他",
    label: "其他",
    isSelect:　false,
    type: '"yewu'
  },
];
const favourablebusinessOptions1 = [
  {
    value: "奖励",
    label: "奖励",
    isSelect:　false
  },
  {
    value: "评选认定",
    label: "评选认定",
    isSelect:　false
  },
  {
    value: "资金扶持",
    label: "资金扶持",
    isSelect:　false
  },
  {
    value: "降低成本",
    label: "降低成本",
    isSelect:　false
  },
  {
    value: "规范管理",
    label: "规范管理",
    isSelect:　false
  },
  {
    value: "简化审",
    label: "简化审",
    isSelect:　false
  },
  {
    value: "其他",
    label: "其他",
    isSelect:　false
  }
];
const favourablebusinessOptions = [
/*   {
    value: "不符合",
    label: "不符合",
    isSelect:　false,
    type: "yewu"
  }, */
  {
    label: '高精尖产业',
    value: '高精尖产业',
    isSelect:　false,
    type: 'yewu'
  },
  {
    label: '现代服务业',
    value: '现代服务业',
    isSelect:　false,
    type: 'yewu'
  },
  {
    label: '新基建',
    value: '新基建',
    isSelect:　false,
    type: 'yewu'
  },
  {
    label: '商贸流通业',
    value: '商贸流通业',
    isSelect:　false,
    type: 'yewu'
  },
/*   {
    label: '文化创意',
    value: '文化创意',
    isSelect:　false,
    type: 'yewu'
  }, */
  {
    label: '数字创意',
    value: '数字创意',
    isSelect:　false,
    type: 'yewu'
  },
  {
    label: '文化旅游',
    value: '文化旅游',
    isSelect:　false,
    type: 'yewu'
  },
  {
    label: '制造业',
    value: '制造业',
    isSelect:　false,
    type: 'yewu'
  },{
    label: '企业服务',
    value: '企业服务',
    isSelect:　false,
    type: 'yewu'
  },
  {
    label: '其他',
    value: '其他',
    isSelect:　false,
    type: 'yewu'
  }
];
const zzOptions = [
/*   {
    value: "不符合",
    label: "不符合",
    isSelect:　false,
    type: "zizhi"
  }, */
  {
    value: "国家高新技术企业",
    label: "国家高新技术企业",
    isSelect:　false,
    type: 'zizhi'
  },
  {
    value: "中关村高新企业",
    label: "中关村高新企业",
    isSelect:　false,
    type: 'zizhi'
  },
  {
    value: "专精特新企业",
    label: "专精特新企业",
    isSelect:　false,
    type: 'zizhi'
  },
  {
    value: "专精特新小巨人企业",
    label: "专精特新小巨人企业",
    isSelect:　false,
    type: 'zizhi'
  },
  {
    value: "瞪羚企业",
    label: "瞪羚企业",
    isSelect:　false,
    type: 'zizhi'
  },
  {
    value: "科技型中小企业",
    label: "科技型中小企业",
    isSelect:　false,
    type: 'zizhi'
  },
  {
    value: "展翼企业",
    label: "展翼企业",
    isSelect:　false,
    type: 'zizhi'
  },
  {
    value: "隐形冠军企业",
    label: "隐形冠军企业",
    isSelect:　false,
    type: 'zizhi'
  },
  {
    value: "技术先进型服务企业",
    label: "技术先进型服务企业",
    isSelect:　false,
    type: 'zizhi'
  },
  {
    value: "独角兽企业",
    label: "独角兽企业",
    isSelect:　false,
    type: 'zizhi'
  },
  {
    value: "创新型企业",
    label: "创新型企业",
    isSelect:　false,
    type: 'zizhi'
  },
];
const themeOptions = [
  {
    value: "技能培训",
    label: "技能培训",
    isSelect:　false
  },
  {
    value: "人才支持",
    label: "人才支持",
    isSelect:　false
  },
  {
    value: "节能环保",
    label: "节能环保",
    isSelect:　false
  },
  {
    value: "金融投资",
    label: "金融投资",
    isSelect:　false
  },
  {
    value: "国际化发展",
    label: "国际化发展",
    isSelect:　false
  },
  {
    value: "创新创业",
    label: "创新创业",
    isSelect:　false
  },
  {
    value: "知识产权",
    label: "知识产权",
    isSelect:　false
  },
  {
    value: "社会保障",
    label: "社会保障",
    isSelect:　false
  },
  {
    value: "区域协同",
    label: "区域协同",
    isSelect:　false
  },
  {
    value: "招商引资",
    label: "招商引资",
    isSelect:　false
  },
  {
    value: "营商环境",
    label: "营商环境",
    isSelect:　false
  },
  {
    value: "乡村振兴",
    label: "乡村振兴",
    isSelect:　false
  },
  {
    value: "城市治理",
    label: "城市治理",
    isSelect:　false
  },
  {
    value: "产业促进",
    label: "产业促进",
    isSelect:　false
  },
  {
    value: "民生改善",
    label: "民生改善",
    isSelect:　false
  },
  {
    value: "生命健康",
    label: "生命健康",
    isSelect:　false
  },
  {
    value: "科技服务",
    label: "科技服务",
    isSelect:　false
  },
];
const businessAttributeOptions = [
 /*  {
    value: "不符合",
    label: "不符合",
    isSelect:　false,
    type: "zizhi"
  }, */
  {
    value: "特大型企业",
    label: "特大型企业",
    isSelect:　false,
    type: 'guimo'
  },
  {
    value: "大型企业",
    label: "大型企业",
    isSelect:　false,
    type: 'guimo'
  },
  {
    value: "中型企业",
    label: "中型企业",
    isSelect:　false,
    type: 'guimo'
  },
  {
    value: "小型企业",
    label: "小型企业",
    isSelect:　false,
    type: 'guimo'
  },
  {
    value: "微型企业",
    label: "微型企业",
    isSelect:　false,
    type: 'guimo'
  }
];
const createOptions = [
  {
    value: "不符合",
    label: "不符合",
    isSelect:　false,
    type: "chuangxin"
  },
  {
    value: "技术标准",
    label: "技术标准",
    isSelect:　false,
    type: 'chuangxin'
  },
  {
    value: "知识产权",
    label: "知识产权",
    isSelect:　false,
    type: 'chuangxin'
  }
];
const taxOptions = [
  {
    value: "不符合",
    label: "不符合",
    isSelect:　false,
    type: "caiwu"
  },
  {
    value: "营收",
    label: "营收",
    isSelect:　false,
    type: 'caiwu'
  },
  {
    value: "税收",
    label: "税收",
    isSelect:　false,
    type: 'caiwu'
  },
  {
    value: "注册资本",
    label: "注册资本",
    isSelect:　false,
    type: 'caiwu'
  }
];
const yearOptions = [
  {
    value: "0-3年",
    label: "0-3年",
    isSelect:　false,
    type: 'nianxian'
  },
  {
    value: "3-5年",
    label: "3-5年",
    isSelect:　false,
    type: 'nianxian'
  },
  {
    value: "5-10年",
    label: "5-10年",
    isSelect:　false,
    type: 'nianxian'
  },
  {
    value: "10年以上",
    label: "10年以上",
    isSelect:　false,
    type: 'nianxian'
  }
];
// 基本信息
const messageForm = [
  {
    prop: "entName",
    label: "企业名称",
    rules: { required: true, validator: emtyRules, trigger: 'blur'},
    showInput: true
},
{
  prop: "entCode",
  label: "统一社会信用代码",
  showInput: true,
  rules: { required: true, validator: socialUniformCodeRules, trigger: 'blur'},
  code: 10000
},
{
  prop: "contactsPerson",
  label: "联系人",
  rules: { required: true, validator: emtyRules, trigger: 'blur'},
  showInput: true,
},
{
    prop: "contactsPhone",
    label: "联系人电话",

    showInput: true,
    disabled: true
},
  {
    prop: "officeAddress",
    label: "办公地址",
    rules:[],
    showInput: true
  },
  {
    prop: "insuredNum",
    label: "参保人数",
    rules:[],
    showInput: true
  },
  {
    prop: "jigou",
    label: "产业空间",
    rules:[],
    showSelect: true,
    options: industrialOptions
  },
  {
    prop: "diyu",
    label: "地域",
    showSelect: true,
    rules:[],
    options: regionOptions
  },
  {
    prop: "shangshi",
    label: "上市状态",
    showSelect: true,
    rules:[],
    options: equityMarketOptions
  },
  {
    prop: "keyan",
    label: "研发机构",
    showSelect: true,
    rules:[],
    options: developmentOptions
  },
  {
    prop: "fenlei",
    label: "企业分类",
    showSelect: true,
    rules:[],
    options: busneissOptions
  },
  {
    prop: "xiangmu",
    label: "项目分类",
    showSelect: true,
    rules:[],
    options: projectOptions
  },
  {
    prop: "zuzhi",
    label: "组织形式",
    showSelect: true,
    rules:[],
    options: organizationOptions
  },
  {
    prop: "yewu",
    label: "业务领域",
    showSelect: true,
    rules:[],
    options: favourablebusinessOptions
  },
  {
    prop: "chuangxin",
    label: "创新成果",
    showSelect: true,
    rules:[],
    options: createOptions
  },
  {
    prop: "caiwu",
    label: "财务数据",
    showSelect: true,
    rules:[],
    options: taxOptions
  },
  {
    prop: "zizhi",
    label: "企业资质",
    showSelect: true,
    rules:[],
    options: zzOptions
  },
  {
    prop: "guimo",
    label: "企业规模",
    showSelect: true,
    rules: { required: true, validator: emtyRules, trigger: 'blur'},
    options: businessAttributeOptions
  },
  {
    prop: "nianxian",
    label: "成立年限",
    showSelect: true,
    rules: { required: true, validator: emtyRules, trigger: 'blur'},
    options: yearOptions
  },
  {
    prop: "quxian",
    label: "区县",
    rules: { required: true, validator: emtyRules, trigger: 'blur'},
    showSelect: true,
    options: locationOptions
  }
  ];
const messageForm1 = [
  {
    prop: "entName",
    label: "企业名称",
    rules: { required: true},
    disabled: true,
    showInput: true
},
{
  prop: "entCode",
  label: "统一社会信用代码",
  showInput: true,
  rules: { required: true, validator: socialUniformCodeRules, trigger: 'blur'},
  disabled: true,
  code: 10000
},
{
  prop: "contactsPerson",
  label: "联系人",
  rules: { required: true, validator: emtyRules, trigger: 'blur'},
  required: true,
  disabled: false,
  showInput: true,
},
{
    prop: "contactsPhone",
    label: "联系人电话",
    rules: { required: true, validator: phoneRules, trigger: 'blur'},

    disabled: false,
    showInput: true
},
    ];
    // 基本信息
const messageForm3 = [
  {
    prop: "jigou",
    label: "产业空间",
    showSelect: true,
    options: industrialOptions
  },
  {
    prop: "diyu",
    label: "地域",
    showSelect: true,
    options: regionOptions
  },
  {
    prop: "shangshi",
    label: "上市状态",
    showSelect: true,
    options: equityMarketOptions
  },
  {
    prop: "keyan",
    label: "研发机构",
    showSelect: true,
    options: developmentOptions
  },
  {
    prop: "fenlei",
    label: "企业分类",
    showSelect: true,
    options: busneissOptions
  },
  {
    prop: "xiangmu",
    label: "项目分类",
    showSelect: true,
    options: projectOptions
  },
  {
    prop: "zuzhi",
    label: "组织形式",
    showSelect: true,
    options: organizationOptions
  },
  {
    prop: "yewu",
    label: "业务领域",
    showSelect: true,
    options: favourablebusinessOptions
  },
  {
    prop: "chuangxin",
    label: "创新成果",
    showSelect: true,
    options: createOptions
  },
  {
    prop: "caiwu",
    label: "财务数据",
    showSelect: true,
    options: taxOptions
  },
  {
    prop: "zizhi",
    label: "企业资质",
    showSelect: true,
    options: zzOptions
  },
  {
    prop: "guimo",
    label: "企业规模",
    showSelect: true,
    options: businessAttributeOptions
  },
  {
    prop: "nianxian",
    label: "成立年限",
    showSelect: true,
    options: yearOptions
  },
  {
    prop: "quxian",
    label: "区县",
    showSelect: true,
    options: locationOptions
  }
  ];
// 招商申请
const applyMessageForm = [
{
  prop: "entName",
  label: "企业名称",
  rules: { required: true, validator: emtyRules, trigger: 'blur'},
/*   rules: { required: true, validator: async (rule, value, callback) => {
    let data = await request({
      url: `${entApplyCheck}`,
      method: 'post',
      data: {
        entName: value
      }
    });
    if(data.msg === '该企业已申请过') {
      callback(data.msg);
    };
  }, trigger: 'blur'}, */
  showInput: true
},
{
  prop: "entCode",
  label: "企业社会统一代码",
  rules: { required: true, validator: socialUniformCodeRules, trigger: 'blur'},
  showInput: true
},
{
  prop: "legalPerson",
  label: "法人",
  rules: { required: true, validator: emtyRules, trigger: 'blur'},
  showInput: true
},
{
  prop: "legalId",
  label: "法人联系方式",
  rules: { required: true, validator: phoneRules, trigger: 'blur'},
  showInput: true
},
{
  prop: "contactsName",
  rules: [],
  label: "联系人",
  showInput: true
},
{
  prop: "contactsPhone",
  rules: [],
  label: "联系方式",
  showInput: true
},
{
  prop: "registerDistrict",
  label: "公司地址",
  rules: [],
  showInput: true
},
{
  prop: "entIndustry",
  label: "所在行业",
  rules: [],
  showInput: true
},
{
  prop: "businessIncome",
  label: "上一年度营业收入(万元)",
  rules: [],
  showInput: true
},
{
  prop: "applyInfo",
  label: "备注",
  rules: [],
  showTextarea: true
},
];
//活动报名
const activtyForm = [
  {
    prop: "personName",
    label: "联络人",
    rules: { required: true, validator: emtyRules, trigger: 'blur'},
    showInput: true,   
  },
  {
    prop: "telPhone",
    label: "联络人电话",
    rules: { required: true, validator: phoneRules, trigger: 'blur'},
    showInput: true,    
  },
  {
    prop: "duties",
    label: "职务",
    rules: { required: true, validator: emtyRules, trigger: 'blur'},
    showInput: true    
  },
  {
    prop: "applyCount",
    label: "参加人数",
    rules: { required: true, validator: typeRules, trigger: 'blur'},
    showInput: true    
  }
];

// 灵活用工申请
const applyMessageForm1 = [
  {
    prop: "companyPerson",
    label: "联系人",
    rules: { required: true, validator: emtyRules, trigger: 'blur'},
    showInput: true
  },
  {
    prop: "companyContact",
    label: "联系方式",
    rules: { required: true, validator: phoneRules, trigger: 'blur'},
    showInput: true
  }
  ];

// 贷款信息
const applyMessageForm2 = [
  {
    prop: "companyPerson",
    label: "联系人",
    rules: { required: true, validator: emtyRules, trigger: 'blur'},

    showInput: true
  },
  {
    prop: "companyContact",
    label: "联系方式",

    rules: { required: true, validator: phoneRules, trigger: 'blur'},
    showInput: true
  }
  ];
// 宣传资料
const propagandaForm = [
  {
    prop: "busneissDesc",
    label: "企业简介",
    rules: [],
    showTextarea: true
  },
  {
      prop: "bgImg",
      label: "背景图",
      rules: [],
      upload: true
  },
  {
      prop: "logoImg",
      label: "企业logo",
      rules: [],
      upload: true
  },{
    prop: "honorImg",
    label: "荣誉资质",
    rules: [],
    zlupload: true
},{
  prop: "productDesc",
  label: "产品介绍",
  rules: [],
  showWangEditor: true
},];
// 备案信息
const baForm = [
  {
    prop: "entname",
    label: "企业名称",
    rules: { required: true, validator: emtyRules, trigger: 'blur'},

    showInput: true
  },
  {
    prop: "shxydm",
    label: "社会统一代码",
    rules: { required: true, validator: socialUniformCodeRules, trigger: 'blur'},
    showInput: true
  },
  {
    prop: "frdb",
    label: "法人",
    rules: { required: true, validator: emtyRules, trigger: 'blur'},

    showInput: true
  },
  {
    prop: "frdbPhone",
    label: "法人手机号",
    rules: { required: true, validator: phoneRules, trigger: 'blur'},
    showInput: true
  },
  {
    prop: "frdbCard",
    label: "法人身份证",
    rules: { required: true, validator: cardCodeRules, trigger: 'blur'},
    showInput: true
  },
  {
    prop: "tel",
    label: "手机号",
    rules: { required: true, validator: phoneRules, trigger: 'blur'},
    tel: 111,
    disabled: true,
    showInput: true,
  },
  {
    prop: "verCode",
    label: "验证码",
    rules: { required: true},
    showInput: true,
    telIndex: 5,
    codeCount: true
  },
/*   {
    prop: "authenticationData",
    label: "认证资料",
    rules: [],
    zlupload: true
  } */
];

// 备案信息
const baForm1 = [
  {
    prop: "entname",
    label: "企业名称",
    rules: { required: true, validator: emtyRules, trigger: 'blur'},

    showInput: true
  },
  {
    prop: "shxydm",
    label: "社会统一代码",
    rules: { required: true, validator: socialUniformCodeRules, trigger: 'blur'},
    showInput: true
  },
  {
    prop: "frdb",
    label: "法人",
    rules: { required: true, validator: emtyRules, trigger: 'blur'},

    showInput: true
  },
  {
    prop: "authData",
    label: "认证时间",
    rules: { required: true, validator: emtyRules, trigger: 'blur'},

    showInput: true
  },
/*   {
    prop: "authenticationData",
    label: "认证资料",
    rules: [],
    zlupload: true
  } */
];

  // 备案信息
const accountForm = [
  {
      prop: "username",
      label: "用户名",
      showInput: true,
      rules: { required: true, validator: emtyRules, trigger: 'blur'},
      placeholder: '用户名字母开头, 允许2-16字节'
  },
  {
    prop: "password",
    label: "新密码",
    rules: { required: true, validator: emtyRules, trigger: 'blur'},
    placeholder: '修改密码',
    showPassWord: true
  },
  {
      prop: "verCode",
      label: "验证码",
      showCode: true
  }
];
// 财税数据
const priceForm = [{
  prop: "businessIncome",
  label: "营业收入",
  rules: { required: false, validator: incomeTypeRules, trigger: 'blur'},
  showInput: true,
},{
  prop: "cultureIncome",
  label: "文化产业相关营业收入",
  rules: { required: false, validator:incomeTypeRules, trigger: 'blur'},
  showInput: true,

},{
  prop: "totalProfit",
  label: "利润总额",
  rules: { required: false, validator:incomeTypeRules, trigger: 'blur'},
  showInput: true,

},{
  prop: "netProfit",
  label: "净利润",
  rules: { required: false, validator:incomeTypeRules, trigger: 'blur'},
  showInput: true,

},{
  prop: "totalAssets",
  label: "资产总额",
  rules: { required: false, validator:incomeTypeRules, trigger: 'blur'},
  showInput: true,

},{
  prop: "netAssets",
  label: "净资产",
  rules: { required: false, validator:incomeTypeRules, trigger: 'blur'},
  showInput: true,

},{
  prop: "totalLiability",
  label: "负债总额",
  rules: { required: false, validator:incomeTypeRules, trigger: 'blur'},
  showInput: true,

},{
  prop: "equity",
  label: "所有者权益",
  rules: { required: false, validator:incomeTypeRules, trigger: 'blur'},
  showInput: true,

},{
  prop: "payTaxes",
  label: "纳税额(不含个税)",
  rules: { required: false, validator:incomeTypeRules, trigger: 'blur'},
  showInput: true,

},{
  prop: "addedTax",
  label: "增值税",
  rules: { required: false, validator:incomeTypeRules, trigger: 'blur'},
  showInput: true,

},{
  prop: "corporateIncomeTax",
  label: "企业所得税",
  rules: { required: false, validator:incomeTypeRules, trigger: 'blur'},
  showInput: true,

},{
  prop: "individualIncomeTax",
  label: "个人所得税",
  rules: { required: false, validator:incomeTypeRules, trigger: 'blur'},
  showInput: true,
}];
const payTaxesForm = [{
  prop: "nsze",
  label: "纳税总额(不含个人所得税)",
  rules: { required: true, validator:incomeTypeRules, trigger: 'blur'},
  showSelect: true,
  nsze: 1
},{
  prop: "zzs",
  label: "增值税",
  rules: { required: true, validator:incomeTypeRules, trigger: 'blur'},
  showSelect: true,
  zzs: 1
},{
  prop: "csss",
  label: "城市维护建设税",
  rules: { required: true, validator:incomeTypeRules, trigger: 'blur'},
  showSelect: true,
  ns: 1
},{
  prop: "njyf",
  label: "纳教育费附加",
  rules: { required: true, validator:incomeTypeRules, trigger: 'blur'},
  showSelect: true,
  njyf: 1
},{
  prop: "qysds",
  label: "企业所得税",
  rules: { required: true, validator:incomeTypeRules, trigger: 'blur'},
  showSelect: true,
  qysds: 1
},{
  prop: "gs",
  label: "关税",
  rules: { required: true, validator:incomeTypeRules, trigger: 'blur'},
  showSelect: true,
  gs: 1
},{
  prop: "yhs",
  label: "印花税",
  rules: { required: true, validator:incomeTypeRules, trigger: 'blur'},
  showSelect: true,
  yhs: 1
},{
  prop: "other",
  label: "其他",
  rules: { required: true, validator:incomeTypeRules, trigger: 'blur'},
  showSelect: true,
  other: 1
}];
const createForm = [
  {
    prop: "csze",
    label: "创汇总额",
    rules: { required: true, validator:incomeTypeRules, trigger: 'blur'},
    showSelect: true,
    options: [{
        label: '100万-400万',
        value: '100万-400万'
    },
    {
        label: '400万-900万',
        value: '400万-900万'
    }],
    csze: 1
  },{
    prop: "zsbl",
    label: "占收入比例(%)",
    rules: { required: true, validator:incomeTypeRules, trigger: 'blur'},
    showSelect: true,
    options: [{
        label: '100万-400万',
        value: '100万-400万'
    },
    {
        label: '400万-900万',
        value: '400万-900万'
    }],
    zsbl: 1
  }
];

// 申报政策
const applyPolicyForm = [{
  prop: "businessIncome",
  label: "营业收入",
  rules: { required: false, validator:incomeTypeRules, trigger: 'blur'},
  showInput: true,
},{
  prop: "cultureIncome",
  label: "文化产业相关营业收入",
  rules: { required: false, validator:incomeTypeRules, trigger: 'blur'},
  showInput: true,

},{
  prop: "totalProfit",
  label: "利润总额",
  rules: { required: false, validator:incomeTypeRules, trigger: 'blur'},
  showInput: true,

},{
  prop: "netProfit",
  label: "净利润",
  rules: { required: false, validator:incomeTypeRules, trigger: 'blur'},
  showInput: true,

},{
  prop: "totalAssets",
  label: "资产总额",
  rules: { required: false, validator:incomeTypeRules, trigger: 'blur'},
  showInput: true,

},{
  prop: "netAssets",
  label: "净资产",
  rules: { required: false, validator:incomeTypeRules, trigger: 'blur'},
  showInput: true,

},{
  prop: "totalLiability",
  label: "负债总额",
  rules: { required: false, validator:incomeTypeRules, trigger: 'blur'},
  showInput: true,

},{
  prop: "equity",
  label: "所有者权益",
  rules: { required: false, validator:incomeTypeRules, trigger: 'blur'},
  showInput: true,

},{
  prop: "payTaxes",
  label: "纳税额(不含个人所得税)",
  rules: { required: false, validator:incomeTypeRules, trigger: 'blur'},
  showInput: true,

},{
  prop: "addedTax",
  label: "增值税",
  rules: { required: false, validator:incomeTypeRules, trigger: 'blur'},
  showInput: true,

},{
  prop: "corporateIncomeTax",
  label: "企业所得税",
  rules: { required: false, validator:incomeTypeRules, trigger: 'blur'},
  showInput: true,

},{
  prop: "individualIncomeTax",
  label: "个人所得税",
  rules: { required: false, validator:incomeTypeRules, trigger: 'blur'},
  showInput: true,
}];


const applyForm = [
  {
    prop: "individualIncomeTax1",
    label: "项目奖励类材料",
    required: false,
    file: true,
    disabled: false
  },{
    prop: "individualIncomeTax2",
    label: "项目贷款贴息类材料",
    required: false,
    file: true,
    disabled: false
  },{
    prop: "individualIncomeTax3",
    label: "项目贴租类材料",
    required: false,
    file: true,
    disabled: false
  },{
    prop: "individualIncomeTax4",
    label: "项目贴保类材料",
    required: false,
    file: true,
    disabled: false
  },{
    prop: "individualIncomeTax5",
    label: "项目保险贴费类材料",
    required: false,
    file: true,
    disabled: false
  },{
    prop: "individualIncomeTax6",
    label: "企业奖励类材料",
    required: false,
    file: true,
    disabled: false
  },{
    prop: "individualIncomeTax7",
    label: "项目补助类材料",
    required: false,
    file: true,
    disabled: false
  },{
    prop: "individualIncomeTax",
    label: "疫情期间企业贷款材料",
    required: false,
    file: true,
    disabled: false
  },
];
// 申报政策
// const applyForm = [{
//   prop: "entName",
//   label: "企业名称",
//   required: true,
//   showInput: true,
// },
// {
//   prop: "entOrigin",
//   label: "申报附件",
//   upload: true
// },
// {
//   prop: "entOrigin",
//   label: "企业组织形式",
//   options: [
//     {
//       label: '数字创意',
//       value: '数字创意'
//     },
//     {
//       label: '文化旅游',
//       value: '文化旅游'
//     },
//     {
//       label: '高精尖产业',
//       value: '高精尖产业'
//     },
//     {
//       label: '现代服务业',
//       value: '现代服务业'
//     },
//     {
//       label: '商贸流通业',
//       value: '商贸流通业'
//     },
//     {
//       label: '企业服务',
//       value: '企业服务'
//     },
//     {
//       label: '其他',
//       value: '其他'
//     }
//   ],
//   showSelect: true,

// },{
//   prop: "registerDate",
//   label: "注册日期",
//   required: true,
//   showDatePicker: true,
// },{
//   prop: "registerCapital",
//   label: "注册资本(万元)",
//   required: true,
//   showInput: true,

// },{
//   prop: "registerAddress",
//   label: "注册地址",
//   required: true,
//   showInput: true,

// },{
//   prop: "projectPerson",
//   label: "项目联系人",
//   required: true,
//   showInput: true,

// },{
//   prop: "projectPerson",
//   label: "项目联系人",
//   required: true,
//   showInput: true,

// },,{
//   prop: "enterPerson",
//   label: "项目联系人",
//   required: true,
//   showInput: true,

// },{
//   prop: "projectPerson",
//   label: "项目联系人",
//   required: true,
//   showInput: true,

// },{
//   prop: "projectTelephone",
//   label: "项目联系人电话",
//   required: true,
//   showInput: true,

// },{
//   prop: "payTaxes",
//   label: "纳税额(不含个人所得税)",
//   required: false,
//   showInput: true,

// },{
//   prop: "addedTax",
//   label: "增值税",
//   required: false,
//   showInput: true,

// },{
//   prop: "corporateIncomeTax",
//   label: "企业所得税",
//   required: false,
//   showInput: true,

// },{
//   prop: "individualIncomeTax",
//   label: "个人所得税",
//   required: false,
//   showInput: true,
// }];

module.exports = {
  xsOptions,
  locationOptions,
  organizationOptions,
  ywOptions,
  industrialOptions,
  equityMarketOptions,
  developmentOptions,
  busneissOptions,
  projectOptions,
  regionOptions,
  locationOptions1,
  createOptions,
  taxOptions,
  businessOptions,
  zzOptions,
  businessAttributeOptions,
  favourablebusinessOptions,
  favourablebusinessOptions1,
  yearOptions,
  themeOptions,
  messageForm,
  messageForm1,
  messageForm3,
  applyMessageForm,
  applyMessageForm1,
  applyMessageForm2,
  baForm,
  baForm1,
  accountForm,
  propagandaForm,
  priceForm,
  applyPolicyForm,
  payTaxesForm,
  createForm,
  activtyForm,
  applyForm
}