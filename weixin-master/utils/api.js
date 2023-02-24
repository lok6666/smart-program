//const host = 'http://172.16.4.62:28182';
const host = 'http://enterprise.bjwcxf.com:28191';
//export const policyHost = 'http://172.16.4.62:5000/match';
//export const host =  process.env.NODE_ENV === 'development'? "http://192.168.10.17:28182": "http://enterprise.bjwcxf.com:28191";
export const policyHost = `${host}/policyMatch/get`;
// 登录接口
export const login = `${host}/auth/entLogin`
export const authSendVerCode = `${host}/auth/sendVerCode`; // 注册验证码
export const authSendRegVerCode = `${host}/auth/sendRegVerCode`; // 注册验证码
export const authGetCode = `${host}/auth/getCode`; // 图形验证码
export const authVerify = `${host}/auth/verify`; // 校验
export const authRegister = `${host}/auth/register`; // 注册
export const upload = `${host}/upload`; // 注册
/*首页-招商申请*/
export  const entApplyInsert = `${host}/entApply/insert` // 插入
export  const entApplyCheck = `${host}/entApply/check` // 插入
export  const articleList = `${host}/article/list` // 最新新闻
export  const articleGet = `${host}/article/get` // 获取文章数据
export  const policyList = `${host}/policyTags/list` // 政策列表
export  const indexPolicyList = `${host}/policyTags/listByHome` // 首页政策列表
export  const collagePolicyList = `${host}/policyTags/listByCollect` // 收藏政策列表
export  const policyDetail = `${host}/policyTags/get` //  政策详情
export  const policyRelationList = `${host}/policyRelation/list` // 关联信息
export  const policyListByRecommend = `${host}/article/listByRecommend` // 政策推荐
export  const entPolicyCollectInsert = `${host}/entPolicyCollect/insert` // 收藏政策
export  const entPolicyCollectDelete = `${host}/entPolicyCollect/deleteByEntity` // 取消收藏政策
export  const entPolicyCollectList = `${host}/entPolicyCollect/list` // 收藏政策列表
export  const entServiceDockingList = `${host}/entServiceDocking/list` // 申请服务列表
export  const activityApplyList = `${host}/activityApply/list` // 活动报名列表
export  const recruitServiceDockingApply = `${host}/recruitServiceDocking/insert` // 灵活用工报名
export const dictionariesGetByCode = `${host}/dictionariesBranch/getByCode` // 一级列表
/*企业首页*/
export  const entPropagateGet = `${host}/entPropagate/get` // 插入

/*企业基本信息 列表*/
export  const entTagsInfoList = `${host}/entTagsInfo/list` // 插入

/*个人中心-企业基本信息*/
export  const entInfoList = `${host}/entUser/homeList` // 信息列表
export  const entInfoUpdate = `${host}/entUser/update` // 信息更新
export  const entInfoDelete = `${host}/entUser/delete` // 信息删除
export  const entInfoInsert = `${host}/entUser/insert` // 信息插入
export  const entInfoGetById = `${host}/entUser/get` // 信息插入

/*个人中心-企业宣传资料*/
export  const entPropagateList = `${host}/entPropagate/list` // 角色管理列表
export  const entPropagateUpdate = `${host}/entPropagate/update` // 角色更新
export  const entPropagateDelete = `${host}/entPropagate/delete` // 角色删除
export  const entPropagateInsert = `${host}/entPropagate/insert` // 角色插入
export  const entPropagateGetById = `${host}/entPropagate/get` // 角色插入
export  const entPropagateTemplateUpdate = `${host}/entPropagateTemplate//update` // 角色更新
export  const entPropagateTemplateDelete = `${host}/entPropagateTemplate//delete` // 角色删除
export  const entPropagateTemplateInsert = `${host}/entPropagateTemplate//insert` // 角色插入
export  const entPropagateTemplateGetById = `${host}/entPropagateTemplate//get` // 角色插入

/*个人中心-财税数据*/
export  const entIncomeList = `${host}/entIncome/list` // 角色管理列表
export  const entIncomeUpdate = `${host}/entIncome/update` // 角色更新
export  const entIncomeDelete = `${host}/entIncome/delete` // 角色删除
export  const entIncomeInsert = `${host}/entIncome/insert` // 角色插入
export  const entIncomeGetById = `${host}/entIncome/get` // 角色插入

/*个人中心-备案信息*/
export  const entFilingList = `${host}/entFiling/list` // 角色管理列表
export  const entFilingUpdate = `${host}/entFiling/update` // 角色更新
export  const entFilingDelete = `${host}/entFiling/delete` // 角色删除
export  const entFilingInsert = `${host}/entFiling/insert` // 角色插入
export  const entFilingGetById = `${host}/entFiling/getAuth` // 角色插入

export  const locatiion = `${host}/activity/getCoordinate` // 角色插入

/*楼宇信息*/
export  const buildings = `${host}/buildings/list`
export  const buildingsGet = `${host}/buildings/get`

/*个人中心-站内信*/
export  const messageList = `${host}/message/list` // 角色管理列表

/*个人中心-财税数据*/
export  const fincialDataStatisticsGetByEntId = `${host}/fincialDataStatistics/getByEntId` // 角色管理列表

/*个人中心-账户管理*/
export  const entReset = `${host}/auth/entReset` // 角色管理列表

/*个人中心-政策标签新增*/
export  const policyMatchTagsGet = `${host}/policyMatchTags/get` // 政策匹配企业标签列表
export  const policyMatchTagsInsert = `${host}/policyMatchTags/insert` // 政策匹配企业标签新增
export  const policyMatchTagsUpdate = `${host}/policyMatchTags/update` // 政策匹配企业标签更新
export  const policyMatchCount = `${host}/policyMatch/count` // 政策计算器


/*行业培训-培训课程*/
export  const trainingServicesList = `${host}/trainingServices/list` // 角色插入

/*政策申报-课程报名*/
export const policyApplyById = `${host}/policyApply/get`// 获取活动详情
export const policyApplyUpdateOne = `${host}/policyApply/update`//  更新
export const policyApplyInsert = `${host}/policyApply/insert`//  插入

/*行业培训-课程报名*/
export const actionAll = `${host}/activity/list` // 列表
export const actionGetById = `${host}/activity/get`// 获取活动详情
export const activityApplyAddOne = `${host}/activityApply/insert`//  活动报名

/*企业服务*/
export const entServiceDockingAll = `${host}/entServices/list` // 列表
export const entServiceUpdate = `${host}/entServices/updateHits` // 列表
/*企业服务-对接*/
export const entServiceDockingInsert = `${host}/entServiceDocking/insert` // 企业对接申请

/*金融服务*/
export const financialServicesAll = `${host}/financialServices/list` // 列表

export const financialServicesUpdate = `${host}/financialServices/updateHits` // 金融服务申请
/*金融服务-对接*/
export const financialServiceDockingAll = `${host}/financialServiceDocking/list` //  金融服务申请列表
export const financialServicesInsert = `${host}/financialServiceDocking/insert` // 金融服务申请

// 系统管理-系统日志
export  const sysLogSelectAll = `${host}/sysLog/selectAll` // 系统日志

// 系统管理-资源管理
export  const sysResourceList = `${host}/sysResource/list` // 资源管理列表 todo 接口返回有问题
export const treeTable = `${host}/sysResource/treeTable` // 树形结构
export const sysResourceInsert = `${host}/sysResource/insert` // 插入
export const sysResourceUpdate = `${host}/sysResource/update` // 更新
export const sysResourceDelete = `${host}/sysResource/delete` // 删除
// 轮播图
export const industryDataList = `${host}/banner/list` //  数据表格