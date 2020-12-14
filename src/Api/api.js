import {get,post} from './httpApi';


// 获取机械列表    
const   getMechanical = (data) =>   get( `/jixie`,data);
// 获取 组织结构
const   getOrganization = (data) =>   get( `/navigate-tree`,data);

// 获取机械详情列表    
const   getDetails= (data) =>   get( `/details`,data);

// 获取机械详情列表    
const   getcategory= (data) =>   get( `/category`,data);

export {
      getMechanical,
      getOrganization,
      getDetails,
      getcategory

}
