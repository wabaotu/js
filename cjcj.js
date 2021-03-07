var dcys = {
	'advs': {
		'head': '本插件由『蓝猫资源网』提供 >>> 官方网站：<a href="//www.lmzy.cc">www.lmzy.cc</a> >>> 广告投放 >> 咨询QQ：<a href="http://wpa.qq.com/msgrd?v=3&uin=188810296&site=qq&menu=yes" class="layui-badge layui-bg-red">188810296</a> >>>',
		'tips': '',
		'rows': [{
			'name': '广告位招租',
			'rema': '文字广告位',
			'urls': 'http://wpa.qq.com/msgrd?v=3&uin=188810296&site=qq&menu=yes',
			'tips': '<span class="layui-badge layui-bg-red">吐血推荐</span>',
			'tip1': '<b style="color:red" class="dp">官方地址<br>//www.lmzy.cc</b>',
			'url1': '//www.lmzy.cc',
			'tip2': '<b style="color:blue;font-size:20px">蓝猫资源网</b>',
			'url2': 'http://www.lmzy.cc',
			'tip3': '<b style="color:#FF5722;font-size:18px">蓝猫资源网</b>',
			'url3': 'http://www.lmzy.cc',
			'tip4': '<b style="color:#5FB878">阿里云 爆款优惠券 限时领取</b>',
			'url4': 'https://www.aliyun.com/minisite/goods?userCode=99999'
		}, {
			'name': '采集常见问题',
			'rema': '无法播放等问题',
			'urls': 'http://www.lmzy.cc/cjwt/',
			'tips': '<span class="layui-badge layui-bg-green">常见问题</span>',
			'tip1': '<font color="red">采集无法绑定分类的解决办法</font>',
			'url1': 'http://www.lmzy.cc/cjwt/5.html',
			'tip2': '<font color="red">V10定时任务自动采集教程</font>',
			'url2': 'http://www.lmzy.cc/cjwt/4.html',
			'tip3': '采集后没有播放数据的解决办法',
			'url3': 'http://www.lmzy.cc/cjwt/6.html',
			'tip4': '采集后无法播放的解决办法',
			'url4': 'http://www.lmzy.cc/cjwt/8.html'
		}]
	},
	'zanzhu': {
		'head': '优质资源专区',
		'tips': '<font color="red">资源站置顶推荐</font> 如有需要情咨询QQ：<a href="http://wpa.qq.com/msgrd?v=3&uin=188810296&site=qq&menu=yes" class="layui-badge layui-bg-red">188810296</a> ',
		'rows': [
		 {
                     'flag': 'dbm3u8',
                     'name': '百度云资源站',
                     'rema': 'HTTPS资源M3u8直链',
                     'apis': 'https://m3u8.apibdzy.com/api.php/provide/vod/?ac=list',
                     'tips': '<span class="layui-badge layui-bg-red">推荐采集 </span>',
                     'coll': '百度云,dbm3u8,976,1',
             		'zylink': 'http://www.bdzy.com'
                 },
				 {
                     'flag': 'tkm3u8',
                     'name': '天空资源站',
                     'rema': 'HTTPS资源M3u8直链',
                     'apis': 'https://m3u8.tiankongapi.com/api.php/provide/vod/at/xml/ ',
                     'tips': '<span class="layui-badge ">国内节点 </span>',
                     'coll': '天空资源,tkm3u8,976,1',
             		'zylink': 'http://tiankongzy.com/'
                 },
				 {
                     'flag': 'bjm3u8',
                     'name': '八戒资源网',
                     'rema': '国内CDN',
                     'apis': 'http://cj.bajiecaiji.com/inc/seabjm3u8.php',
                     'tips': '<span class="layui-badge layui-bg-green">正常采集 </span>',
                     'coll': '八戒资源,bjm3u8,976,1',
             		'zylink': 'http://bajiezy.cc/'
                 },{
                     'flag': 'zuidam3u8',
                     'name': '最大资源站',
                     'rema': 'HTTP资源M3u8直链',
                     'apis': 'http://www.zdziyuan.com/inc/s_api_zuidam3u8.php',
                     'tips': '<span class="layui-badge layui-bg-green">正常采集 </span>',
                     'coll': '最大资源,zuidam3u8,976,1',
             		'zylink': 'http://www.zuidazy5.com//'
                 }
                 ]
	},
	'guanfang': {
		'head': '官方采集专区',
		'tips': '<font color="red">官方采集专区，综合腾讯,优酷,爱奇艺,芒果,搜狐,哔哩哔哩等等</font>  ',
		'rows': [
		{
                     'flag': 'qq',
                     'name': '蘑菇资源网',
                     'rema': '综合腾讯,优酷,爱奇艺,芒果,搜狐,哔哩哔哩',
                     'apis': 'http://www.moguzyw.com:520/moguzy.php/provide/vod/?ac=list',
                     'tips': '<span class="layui-badge layui-bg-red">推荐采集</span>',
                     'coll': '腾讯,qq,976,1|优酷,youku,798,1|爱奇艺,qiyi,797,1|芒果,mgtv,796,1|搜狐,sohu,795,1|乐视,letv,794,1|PPTV,pptv,793,1|咪咕,migu,793,1|央视网,cntv,793,1|哔哩哔哩,bilibili,793,1|华数视频,wasu,793,1',
             		'zylink': 'https://tv.lmzy.cc/'
                 }, {
                     'flag': 'qq',
                     'name': '1717资源站',
                     'rema': 'HTTPS资源综合腾讯,优酷,爱奇艺,芒果,搜狐,乐视,PP',
                     'apis': 'https://zy.itono.cn/inc/api.php',
                     'tips': '<span class="layui-badge layui-bg-green">正常采集 </span>',
                     'coll': '腾讯,qq,976,1|优酷,youku,798,1|爱奇艺,qiyi,797,1|芒果,mgtv,796,1|搜狐,sohu,795,1|乐视,letv,794,1|PPTV,pptv,793,1|咪咕,migu,793,1|央视网,cntv,793,1|哔哩哔哩,bilibili,793,1|华数视频,wasu,793,1',
             		'zylink': 'https://zy.itono.cn/'
                 },	{
                     'flag': 'qq',
                     'name': '欧宝资源站',
                     'rema': 'HTTP资源',
                     'apis': 'http://zy.266sc.cn/api.php/provide/vod/at/xml/',
                     'tips': '<span class="layui-badge layui-bg-green">正常采集 </span>',
                     'coll': '腾讯,qq,976,1|优酷,youku,798,1|爱奇艺,qiyi,797,1|芒果,mgtv,796,1|搜狐,sohu,795,1|乐视,letv,794,1|PPTV,pptv,793,1|咪咕,migu,793,1|央视网,cntv,793,1|哔哩哔哩,bilibili,793,1|华数视频,wasu,793,1',
             		'zylink': 'https://zy.266sc.cn/'
                 },{
                     'flag': 'qq',
                     'name': '8090资源站',
                     'rema': 'HTTPS资源',
                     'apis': 'https://zy.yilans.net/api.php/provide/vod/at/xml/',
                     'tips': '<span class="layui-badge layui-bg-green">正常采集 </span>',
                     'coll': '腾讯,qq,976,1|优酷,youku,798,1|爱奇艺,qiyi,797,1|芒果,mgtv,796,1|搜狐,sohu,795,1|乐视,letv,794,1|PPTV,pptv,793,1|咪咕,migu,793,1|央视网,cntv,793,1|哔哩哔哩,bilibili,793,1|华数视频,wasu,793,1',
             		'zylink': 'https://zy.yilans.net/'
                 },{
                     'flag': 'qq',
                     'name': '恐怖鸭资源站',
                     'rema': 'HTTPS资源',
                     'apis': 'https://ya.kongbuya.com/api.php/provide/vod/at/xml/',
                     'tips': '<span class="layui-badge layui-bg-green">正常采集 </span>',
                     'coll': '腾讯,qq,976,1|优酷,youku,798,1|爱奇艺,qiyi,797,1|芒果,mgtv,796,1|搜狐,sohu,795,1|乐视,letv,794,1|PPTV,pptv,793,1|咪咕,migu,793,1|央视网,cntv,793,1|哔哩哔哩,bilibili,793,1|华数视频,wasu,793,1',
             		'zylink': 'http://ya.kongbuya.com'
                 },{
                     'flag': 'qq',
                     'name': '乐喵资源站',
                     'rema': 'HTTP资源',
                     'apis': 'http://zy.singlive.cn/api.php/provide/vod/?ac=list',
                     'tips': '<span class="layui-badge layui-bg-green">正常采集 </span>',
                     'coll': '腾讯,qq,976,1|优酷,youku,798,1|爱奇艺,qiyi,797,1|芒果,mgtv,796,1|搜狐,sohu,795,1|乐视,letv,794,1|PPTV,pptv,793,1|咪咕,migu,793,1|央视网,cntv,793,1|哔哩哔哩,bilibili,793,1|华数视频,wasu,793,1',
             		'zylink': 'http://zy.singlive.cn/'
                 }
				 ,
		{
                     'flag': 'qq',
                     'name': '梦兰资源站倒闭',
                     'rema': '综合腾讯,优酷,爱奇艺,芒果,搜狐,哔哩哔哩',
                     'apis': 'https://www.mlzy.cc/api.php/provide/vod/at/xml/',
                     'tips': '<span class="layui-badge layui-bg-red">推荐采集</span>',
                     'coll': '腾讯,qq,976,1|优酷,youku,798,1|爱奇艺,qiyi,797,1|芒果,mgtv,796,1|搜狐,sohu,795,1|乐视,letv,794,1|PPTV,pptv,793,1|咪咕,migu,793,1|央视网,cntv,793,1|哔哩哔哩,bilibili,793,1|华数视频,wasu,793,1',
             		'zylink': 'https://ziyuan.nuoxun.net/'
                 },
		{
			'flag': 'lbzy',
			'name': '萝卜资源站倒闭',
			'rema': "综合腾讯,优酷,爱奇艺,芒果,搜狐等等",
			'apis': 'http://cj.lby.pet/api.php/provide/vod/?ac=list',
			'tips': '<span class="layui-badge layui-bg-green">正常采集 </span>',
            'coll': '腾讯,qq,976,1|优酷,youku,798,1|爱奇艺,qiyi,797,1|芒果,mgtv,796,1|搜狐,sohu,795,1|乐视,letv,794,1|PPTV,pptv,793,1|咪咕,migu,793,1|央视网,cntv,793,1|哔哩哔哩,bilibili,793,1|华数视频,wasu,793,1',
		}
                 ]
	},
	'm3u8': {
		'head': 'M3u8直链资源专区',
		'tips': '<font color="red" class="dplayer">推荐采集本专区，全部m3u8直链地址</font> ',
		'rows': [   
		{
                     'flag': 'dbm3u8',
                     'name': '百度云资源站',
                     'rema': 'HTTPS资源M3u8直链',
                     'apis': 'https://m3u8.apibdzy.com/api.php/provide/vod/?ac=list',
                     'tips': '<span class="layui-badge layui-bg-red">国内节点</span>',
                     'coll': '百度云,dbm3u8,976,1',
             		'zylink': 'http://www.bdzy.com'
                 },		{
                     'flag': 'tkm3u8',
                     'name': '天空资源站',
                     'rema': 'HTTPS资源M3u8直链',
                     'apis': 'https://m3u8.tiankongapi.com/api.php/provide/vod/at/xml/ ',
                     'tips': '<span class="layui-badge ">国内节点 </span>',
                     'coll': '天空资源,tkm3u8,976,1',
             		'zylink': 'http://tiankongzy.com/'
                 },	{
                     'flag': 'kyyun',
                     'name': '酷云资源站',
                     'rema': 'CDN加速',
                     'apis': 'http://caiji.kuyun98.com/inc/ldg_kkm3u8.php',
                     'tips': '<span class="layui-badge ">推荐采集 </span>',
                     'coll': 'ZYM采集插件,kkm3u8,798,1',
             		'zylink': 'http://www.kuyunzy.tv/'
                 },	{
                     'flag': 'kbm3u8',
                     'name': '快播资源站',
                     'rema': 'HTTPS资源M3u8直链',
                     'apis': 'http://www.kuaibozy.com/api.php/provide/vod/from/kbm3u8/at/xml/',
                     'tips': '<span class="layui-badge ZYM采集插件">推荐采集 </span>',
                     'coll': '快播播放器,kbm3u8,976,1kB m3u8推荐采集',
             		'zylink': 'http://www.kuaibozy.com/'
                 },		{
                     'flag': 'ckm3u8',
                     'name': 'OK资源站',
                     'rema': 'HTTPS资源M3u8直链',
                     'apis': 'https://cj.okzy.tv/inc/apickm3u8s.php',
                     'tips': '<span class="layui-badge layui-bg-green">正常采集 </span>',
                     'coll': 'OK资源,ckm3u8,976,1',
             		'zylink': 'https://cj.okzy.tv/'
                 },	{
                     'flag': '123kum3u8',
                     'name': '123资源站',
                     'rema': 'HTTPS资源M3u8直链',
                     'apis': 'https://www.123ku.com/inc/123kum3u8.php',
                     'tips': '<span class="layui-badge layui-bg-green">正常采集 </span>',
                     'coll': '123资源,123kum3u8,976,1',
             		'zylink': 'https://www.123ku.com'
                 },{
                     'flag': 'zuidam3u8',
                     'name': '最大资源站',
                     'rema': 'HTTP资源M3u8直链',
                     'apis': 'http://www.zdziyuan.com/inc/s_api_zuidam3u8.php',
                     'tips': '<span class="layui-badge layui-bg-green">正常采集 </span>',
                     'coll': '最大资源,zuidam3u8,976,1',
             		'zylink': 'http://www.zuidazy5.com//'
                 },	{
                     'flag': 'mhm3u8',
                     'name': '麻花资源网',
                     'rema': 'HTTPS资源M3u8直链',
                     'apis': 'https://www.mhapi123.com/inc/api.php',
                     'tips': '<span class="layui-badge layui-bg-green">正常采集 </span>',
                     'coll': '麻花资源,mahua,976,1',
             		'zylink': 'http://www.mahuazy.net/'
                 },	{
                     'flag': 'bjm3u8',
                     'name': '八戒资源网',
                     'rema': '国内CDN',
                     'apis': 'http://cj.bajiecaiji.com/inc/seabjm3u8.php',
                     'tips': '<span class="layui-badge layui-bg-green">正常采集 </span>',
                     'coll': '八戒资源,bjm3u8,976,1',
             		'zylink': 'http://bajiezy.cc/'
                 },{
                     'flag': '33uu',
                     'name': '156资源站',
                     'rema': '云播资源、M3u8直链',
                     'apis': 'http://cj.1156zy.com/inc/api.php',
                     'tips': '<span class="layui-badge layui-bg-green">正常采集 </span>',
                     'coll': '156云播,33uuck,798,1',
             		'zylink': 'http://www.209zy.net/'
                 },	{
                     'flag': 'xinyun',
                     'name': '最新资源站',
                     'rema': 'M3u8直链',
                     'apis': 'http://api.zuixinapi.com/inc/apixinm3u8.php',
                     'tips': '<span class="layui-badge layui-bg-green">正常采集 </span>',
                     'coll': '最新云,xinm3u8,798,1',
             		'zylink': 'https://api.zuixinapi.com/'
                 },
                 {
                     'flag': 'mbckm3u8',
                     'name': '秒播资源网',
                     'rema': 'HTTPS资源M3u8直链',
                     'apis': 'https://caiji.mb77.vip/inc/mbckm3u8.php',
                     'tips': '<span class="layui-badge layui-bg-green">正常采集 </span>',
                     'coll': '秒播资源,mbckm3u8,976,1',
             		'zylink': 'https://caiji.mb77.vip/'
                 },	{
                     'flag': 'kakam3u8',
                     'name': '酷播资源站',
                     'rema': 'HTTP资源M3u8直链',
                     'apis': 'http://api.kbzyapi.com/inc/s_api_kakam3u8.php',
                     'tips': '<span class="layui-badge layui-bg-green">正常采集 </span>',
                     'coll': '酷播资源,kakam3u8,976,1',
             		'zylink': 'http://api.kbzyapi.com/'
                 },		{
                     'flag': '605m3u8',
                     'name': '605资源站',
                     'rema': 'HTTPS资源M3u8直链',
                     'apis': 'http://www.605zy.co/inc/605m3u8.php',
                     'tips': '<span class="layui-badge layui-bg-green">正常采集 </span>',
                     'coll': '605资源,605m3u8,976,1',
             		'zylink': 'http://www.605zy.co//'
                 },	{
                     'flag': 'wokull',
                     'name': '沃酷资源网',
                     'rema': 'HTTPS资源M3u8直链',
                     'apis': 'http://api.wokuzy.com/api/xml/wokum3u8',
                     'tips': '<span class="layui-badge layui-bg-green">正常采集 </span>',
                     'coll': '沃酷资源,wokull,976,1',
             		'zylink': 'http://www.wokuzy.com/'
                 },		{
                     'flag': 'juhem3u8',
                     'name': '聚合资源站',
                     'rema': 'HTTPS资源M3u8直链',
                     'apis': 'https://cj.cbi88.com/inc/api_juhem3u8.php',
                     'tips': '<span class="layui-badge layui-bg-green">正常采集 </span>',
                     'coll': '聚合资源,juhem3u8,976,1juhem3u8推荐采集',
             		'zylink': 'http://www.juhezyw.com/'
                 },
                 {
                     'flag': 'rrm3u8',
                     'name': '爱美剧不可用',
                     'rema': 'HTTPS资源M3u8直链，需要专用解析接口https://www.rrzyw.cc/rrm3u8/index.php?url=',
                     'apis': 'https://www.rrzyw.cc/api.php/provide/vod/from/rrm3u8/at/xml/',
                     'tips': '<span class="layui-badge layui-bg-green">正常采集 </span>',
                     'coll': '爱美剧,rrm3u8,976,1',
             		'zylink': 'https://www.rrzyw.cc/'
                 },	{
                     'flag': 'lbm3u8',
                     'name': '萝卜资源站m3u8',
                     'rema': 'HTTPS资源M3u8直链，需要专用解析接口https://dm.lby.pet/?url=',
                     'apis': 'http://zy.lby.pet/api.php/provide/vod/from/lbm3u8/?ac=list',
                     'tips': '<span class="layui-badge layui-bg-green">正常采集 </span>',
                     'coll': '萝卜资源站m3u8,lbm3u8,976,1',
             		'zylink': 'http://cj.lby.pet/'
                 }	
                 ]
	},
	'play': {
		'head': '云播资源专区',
		'tips': '',
		'rows': [{
			'flag': 'mahuayun',
			'name': '麻花云资源',
			'rema': '跑马灯,右下角水印',
			'apis': 'https://www.mhapi123.com/inc/api_kuyun.php',
			'tips': '<span class="layui-badge layui-bg-red">推荐采集</span>',
			'coll': '麻花云,kuyun,1031,1'
		}, {
			'flag': 'suboyun',
			'name': '速播云资源',
			'rema': '跑马灯,右下角水印',
			'apis': 'https://www.subo988.com/inc/maccms_suboyun.php',
			'tips': '<span class="layui-badge layui-bg-red">推荐采集</span>',
			'coll': '速播云,suboyun,1031,1'
		}, {
			'flag': 'wolong',
			'name': '卧龙云资源',
			'rema': '跑马灯,右下角水印',
			'apis': 'https://cj.wlzy.tv/inc/s_api_mac_kuyun.php',
			'tips': '<span class="layui-badge layui-bg-red">推荐采集</span>',
			'coll': '卧龙云播,wlzy,1076,1'
		}, {
			'flag': '189yun',
			'name': '189资源站',
			'rema': '精品国外电影 右上角水印',
			'apis': 'https://189.es/api.php/provide/vod/?ac=list',
			'tips': '<span class="layui-badge layui-bg-red">国内CDN</span>',
			'coll': '189在线,189pan,1089,1'
		}, {
			'flag': '123yun',
			'name': '123资源站',
			'rema': '顶部跑马灯,右下角水印',
			'apis': 'http://www.123ku.com/inc/123kuyun.php',
			'tips': '<span class="layui-badge layui-bg-red">国内CDN</span>',
			'coll': '123在线,123kuyun,1082,1'
		}, {
			'flag': '398yun',
			'name': '398资源站',
			'rema': '顶部跑马灯',
			'apis': 'https://www.398zy.com/inc/mac_yunbo.php',
			'tips': '<span class="layui-badge layui-bg-red">国内CDN</span>',
			'coll': '398在线,398yun,1084,1'
		}, {
			'flag': 'yiqier',
			'name': '172云资源',
			'rema': '右下角常驻水印',
			'apis': 'http://api.172zy.xyz/inc/172zy.php',
			'tips': '<span class="layui-badge layui-bg-green">国外节点</span>',
			'coll': '172云播,172zy,1068,1'
		}, {
			'flag': 'gaoqing',
			'name': '高清云资源',
			'rema': '右下角短时出现水印',
			'apis': 'http://cj.gaoqingzyw.com/inc/gqyun.php',
			'tips': '<span class="layui-badge layui-bg-green">国外节点</span>',
			'coll': '高清云播,gqyun,1072,1'
		}, {
			'flag': 'dbzyz',
			'name': '豆瓣云资源',
			'rema': '跑马灯,右下角水印',
			'apis': 'http://v.1988cj.com/inc/dbyun.php',
			'tips': '<span class="layui-badge layui-bg-green">国外节点</span>',
			'coll': '豆瓣云播,dbyun,1074,1'
		}, {
			'flag': 'zuikuai',
			'name': '最快云资源',
			'rema': '右下角短时出现水印',
			'apis': 'http://cj.zuikzy.co/inc/zkyun.php ',
			'tips': '<span class="layui-badge layui-bg-green">国外节点</span>',
			'coll': '最快云播,zkyun,1070,1'
		}, {
			'flag': 'bajie',
			'name': '八戒云资源',
			'rema': '顶部跑马灯水印',
			'apis': 'http://zy.bajieziyuan.com/inc/bjyun.php',
			'tips': '<span class="layui-badge layui-bg-green">国外节点</span>',
			'coll': '八戒云播,bjyun,1066,1'
		}, {
			'flag': 'zuida',
			'name': '最大云资源',
			'rema': '顶部跑马灯水印',
			'apis': 'http://www.zdziyuan.com/inc/s_api_zuidall.php',
			'tips': '<span class="layui-badge layui-bg-green">国外节点</span>',
			'coll': '最大云播,zuidall,1009,1'
		}, {
			'flag': 'kuku',
			'name': '酷酷云资源',
			'rema': '顶部跑马灯水印',
			'apis': 'http://www.kuyun9.com/inc/s_ldg_kkyun.asp',
			'tips': '<span class="layui-badge layui-bg-green">国外节点</span>',
			'coll': '酷酷云播,kkyun,1018,1'
		}, {
			'flag': 'haku',
			'name': '哈酷云资源',
			'rema': '顶部跑马灯水印',
			'apis': 'http://api.666zy.com/inc/hkzy.php',
			'tips': '<span class="layui-badge layui-bg-green">国外节点</span>',
			'coll': '哈酷云播,hkzy,1028,1'
		}, {
			'flag': 'yongjiu',
			'name': '永久云资源',
			'rema': '顶部跑马灯水印',
			'apis': 'http://cj.yongjiuzyw.com/inc/s_yjyun.php',
			'tips': '<span class="layui-badge layui-bg-green">国外节点</span>',
			'coll': '永久云播,yjyun,1011,1'
		}, {
			'flag': 'yijiuqiqi',
			'name': '1977云资源',
			'rema': '右下角常驻水印',
			'apis': 'http://www.1977zy.com/inc/1977zy.php',
			'tips': '<span class="layui-badge layui-bg-green">国外节点</span>',
			'coll': '1977云播,1977zy,1049,1'
		}, {
			'flag': 'yisanyiy',
			'name': '131云资源',
			'rema': '顶部跑马灯水印',
			'apis': 'http://kankanzy.com/inc/zy131.php',
			'tips': '<span class="layui-badge layui-bg-green">国外节点</span>',
			'coll': '131云播,131zy,1054,1'
		}, {
			'flag': 'yisanwuy',
			'name': '135云资源',
			'rema': '顶部跑马灯水印',
			'apis': 'http://cj.135zy.co/inc/135zy.php',
			'tips': '<span class="layui-badge layui-bg-green">国外节点</span>',
			'coll': '135云播,135zy,1052,1'
		}, {
			'flag': 'sanu',
			'name': '156云资源',
			'rema': '右下角常驻水印',
			'apis': 'http://cj.1156zy.com/inc/33uu.php',
			'tips': '<span class="layui-badge layui-bg-green">国外节点</span>',
			'coll': '156云播,33uu,1048,1'
		}, {
			'flag': 'okzy',
			'name': 'OK云资源',
			'rema': '顶部跑马灯水印',
			'apis': 'http://api.iokzy.com/inc/apikuyuns.php',
			'tips': '<span class="layui-badge layui-bg-green">国外节点</span>',
			'coll': '酷云云播,kuyun,1017,1'
		}, {
			'flag': '398yun',
			'name': '398资源站',
			'rema': '顶部跑马灯水印',
			'apis': 'https://www.398zy.com/inc/mac_yunbo.php',
			'tips': '<span class="layui-badge layui-bg-green">国外节点</span>',
			'coll': '398云播,398yun,1083,1'
		}, {
			'flag': 'miaobo',
			'name': '秒播云资源',
			'rema': '不支持https,底部,右下',
			'apis': 'http://caiji.mb77.vip/inc/api.php',
			'tips': '<span class="layui-badge layui-bg-green">国外节点</span>',
			'coll': '秒播云播,mbyun,1087,1'
		}, {
			'flag': 'zuixin',
			'name': '最新云资源',
			'rema': '屏幕中间常驻水印',
			'apis': 'http://api.zuixinapi.com/inc/apixinyun.php',
			'tips': '<span class="layui-badge layui-bg-gray">水印太多</span>',
			'coll': '最新云播,xinyun,1013,1'
		}, {
			'flag': 'jisu',
			'name': '极速云资源',
			'rema': '右下角短时出现水印',
			'apis': 'http://yun.caijizy.vip/api.php/provide/vod/at/xml/',
			'tips': '<span class="layui-badge layui-bg-gray">水印太多</span>',
			'coll': '极速云播,jsyun,1025,1'
		}, {
			'flag': 'kubo',
			'name': '酷播云资源',
			'rema': '顶部跑马灯水印',
			'apis': 'http://api.kbzyapi.com/inc/s_api_kuyun.php',
			'tips': '<span class="layui-badge layui-bg-gray">龟速播放</span>',
			'coll': '酷云云播,kuyun,1017,1'
		}]
	},
	'offi': {
		'head': '视频独立采集',
		'tips': '腾讯、优酷、爱奇艺、芒果TV、搜狐、乐视、PPTV等独立采集',
		'rows': [            
		     {
                     'flag': 'pptv',
                     'name': '萝卜资源站',
                     'rema': 'PPTV视频',
                     'apis': 'https://cj.lby.pet/api.php/provide/vod/from/pptv/?ac=list',
                     'tips': '<span class="layui-badge layui-bg-red">推荐采集 </span>',
                     'coll': 'PPTV,pptv,976,1',
             		'zylink': 'http://cj.lby.pet/'
                 },	{
                     'flag': 'letv',
                     'name': '萝卜资源站',
                     'rema': '乐视视频',
                     'apis': 'https://cj.lby.pet/api.php/provide/vod/from/letv/?ac=list',
                     'tips': '<span class="layui-badge layui-bg-red">推荐采集 </span>',
                     'coll': '乐视,letv,976,1',
             		'zylink': 'http://cj.lby.pet/'
                 },	{
                     'flag': 'sohu',
                     'name': '萝卜资源站',
                     'rema': '搜狐视频',
                     'apis': 'https://cj.lby.pet/api.php/provide/vod/from/sohu/?ac=list',
                     'tips': '<span class="layui-badge layui-bg-red">推荐采集 </span>',
                     'coll': '搜狐,sohu,976,1',
             		'zylink': 'http://cj.lby.pet/'
                 },	{
                     'flag': 'mgtv',
                     'name': '萝卜资源站',
                     'rema': '芒果视频',
                     'apis': 'https://cj.lby.pet/api.php/provide/vod/from/mgtv/?ac=list',
                     'tips': '<span class="layui-badge layui-bg-red">推荐采集 </span>',
                     'coll': '芒果,mgtv,976,1',
             		'zylink': 'http://cj.lby.pet/'
                 },	{
                     'flag': 'qq',
                     'name': '萝卜资源站',
                     'rema': '腾讯视频',
                     'apis': 'https://cj.lby.pet/api.php/provide/vod/from/qq/?ac=list',
                     'tips': '<span class="layui-badge layui-bg-red">推荐采集 </span>',
                     'coll': '腾讯,qq,976,1',
             		'zylink': 'http://cj.lby.pet/'
                 },	{
                     'flag': 'qiyi',
                     'name': '萝卜资源站',
                     'rema': '爱奇艺视频',
                     'apis': 'https://cj.lby.pet/api.php/provide/vod/from/qiyi/?ac=list',
                     'tips': '<span class="layui-badge layui-bg-red">推荐采集 </span>',
                     'coll': '爱奇艺,qiyi,976,1',
             		'zylink': 'http://cj.lby.pet/'
                 },	{
                     'flag': 'youku',
                     'name': '萝卜资源站',
                     'rema': '优酷视频',
                     'apis': 'https://cj.lby.pet/api.php/provide/vod/from/youku/?ac=list',
                     'tips': '<span class="layui-badge layui-bg-red">推荐采集 </span>',
                     'coll': '优酷,youku,976,1',
             		'zylink': 'http://cj.lby.pet/'
                 },		 
		    
		    
		    
		    
		    
		    {
                     'flag': 'pptv',
                     'name': '恐怖鸭资源站',
                     'rema': 'PPTV视频',
                     'apis': 'https://ya.kongbuya.com/api.php/provide/vod/from/pptv/at/xml/',
                     'tips': '<span class="layui-badge layui-bg-red">推荐采集 </span>',
                     'coll': 'PPTV,pptv,976,1',
             		'zylink': 'http://ya.kongbuya.com/'
                 },	{
                     'flag': 'letv',
                     'name': '恐怖鸭资源站',
                     'rema': '乐视视频',
                     'apis': 'https://ya.kongbuya.com/api.php/provide/vod/from/letv/at/xml/',
                     'tips': '<span class="layui-badge layui-bg-red">推荐采集 </span>',
                     'coll': '乐视,letv,976,1',
             		'zylink': 'http://ya.kongbuya.com/'
                 },	{
                     'flag': 'sohu',
                     'name': '恐怖鸭资源站',
                     'rema': '搜狐视频',
                     'apis': 'https://ya.kongbuya.com/api.php/provide/vod/from/sohu/at/xml/',
                     'tips': '<span class="layui-badge layui-bg-red">推荐采集 </span>',
                     'coll': '搜狐,sohu,976,1',
             		'zylink': 'http://ya.kongbuya.com/'
                 },	{
                     'flag': 'mgtv',
                     'name': '恐怖鸭资源站',
                     'rema': '芒果视频',
                     'apis': 'https://ya.kongbuya.com/api.php/provide/vod/from/mgtv/at/xml/',
                     'tips': '<span class="layui-badge layui-bg-red">推荐采集 </span>',
                     'coll': '芒果,mgtv,976,1',
             		'zylink': 'http://ya.kongbuya.com/'
                 },	{
                     'flag': 'qq',
                     'name': '恐怖鸭资源站',
                     'rema': '腾讯视频',
                     'apis': 'https://ya.kongbuya.com/api.php/provide/vod/from/qq/at/xml/',
                     'tips': '<span class="layui-badge layui-bg-red">推荐采集 </span>',
                     'coll': '腾讯,qq,976,1',
             		'zylink': 'http://ya.kongbuya.com/'
                 },	{
                     'flag': 'qiyi',
                     'name': '恐怖鸭资源站',
                     'rema': '爱奇艺视频',
                     'apis': 'https://ya.kongbuya.com/api.php/provide/vod/from/qiyi/at/xml/',
                     'tips': '<span class="layui-badge layui-bg-red">推荐采集 </span>',
                     'coll': '爱奇艺,qiyi,976,1',
             		'zylink': 'http://ya.kongbuya.com/'
                 },	{
                     'flag': 'youku',
                     'name': '恐怖鸭资源站',
                     'rema': '优酷视频',
                     'apis': 'https://ya.kongbuya.com/api.php/provide/vod/from/youku/at/xml/',
                     'tips': '<span class="layui-badge layui-bg-red">推荐采集 </span>',
                     'coll': '优酷,youku,976,1',
             		'zylink': 'http://ya.kongbuya.com'
                 },	{
                     'flag': 'qq',
                     'name': '恐怖鸭资源站',
                     'rema': 'HTTPS资源',
                     'apis': 'https://ya.kongbuya.com/api.php/provide/vod/at/xml/',
                     'tips': '<span class="layui-badge layui-bg-red">推荐采集 </span>',
                     'coll': '腾讯,qq,976,1|优酷,youku,798,1|爱奇艺,qiyi,797,1|芒果视频,mgtv,796,1|搜狐视频,sohu,795,1|乐视视频,letv,794,1|PPTV视频,pptv,793,1|咪咕,migu,793,1|央视网,cntv,793,1|哔哩哔哩,bilibili,793,1|华数视频,wasu,793,1|ZYM采集插件,funshion,793,1',
             		'zylink': 'http://ya.kongbuya.com'
                 },	{
                     'flag': 'funshion',
                     'name': '乐喵资源站',
                     'rema': '风行视频',
                     'apis': 'http://zy.singlive.cn/api.php/provide/vod/from/funshion/at/xml/',
                     'tips': '<span class="layui-badge layui-bg-green">正常采集 </span>',
                     'coll': '风行视频,funshion,976,1',
             		'zylink': 'http://zy.singlive.cn/'
                 },	{
                     'flag': 'wasu',
                     'name': '乐喵资源站',
                     'rema': '华数视频',
                     'apis': 'http://zy.singlive.cn/api.php/provide/vod/from/wasu/at/xml/',
                     'tips': '<span class="layui-badge layui-bg-green">正常采集 </span>',
                     'coll': '华数视频,wasu,976,1',
             		'zylink': 'http://zy.singlive.cn/'
                 },	{
                     'flag': 'migu',
                     'name': '乐喵资源站',
                     'rema': '咪咕视频',
                     'apis': 'http://zy.singlive.cn/api.php/provide/vod/from/migu/at/xml/',
                     'tips': '<span class="layui-badge layui-bg-green">正常采集 </span>',
                     'coll': 'ZYM采集插件,migu,976,1',
             		'zylink': 'http://zy.singlive.cn/'
                 },	{
                     'flag': 'm1905',
                     'name': '乐喵资源站',
                     'rema': '1905视频',
                     'apis': 'http://zy.singlive.cn/api.php/provide/vod/from/m1905/at/xml/',
                     'tips': '<span class="layui-badge layui-bg-green">正常采集 </span>',
                     'coll': 'ZYM采集插件,m1905,976,1',
             		'zylink': 'http://zy.singlive.cn/'
                 },	{
                     'flag': 'pptv',
                     'name': '乐喵资源站',
                     'rema': 'PPTV视频',
                     'apis': 'http://zy.singlive.cn/api.php/provide/vod/from/pptv/at/xml/',
                     'tips': '<span class="layui-badge layui-bg-green">正常采集 </span>',
                     'coll': 'ZYM采集插件,pptv,976,1',
             		'zylink': 'http://zy.singlive.cn/'
                 },	{
                     'flag': 'letv',
                     'name': '乐喵资源站',
                     'rema': '乐视视频直链',
                     'apis': 'http://zy.singlive.cn/api.php/provide/vod/from/letv/at/xml/',
                     'tips': '<span class="layui-badge layui-bg-green">正常采集 </span>',
                     'coll': 'ZYM采集插件,letv,976,1',
             		'zylink': 'http://zy.singlive.cn/'
                 },	{
                     'flag': 'sohu',
                     'name': '乐喵资源站',
                     'rema': '搜狐视频直链',
                     'apis': 'http://zy.singlive.cn/api.php/provide/vod/from/sohu/at/xml/',
                     'tips': '<span class="layui-badge layui-bg-green">正常采集 </span>',
                     'coll': 'ZYM采集插件,sohu,976,1',
             		'zylink': 'http://zy.singlive.cn/'
                 },	{
                     'flag': 'mgtv',
                     'name': '乐喵资源站',
                     'rema': '芒果视频直链',
                     'apis': 'http://zy.singlive.cn/api.php/provide/vod/from/mgtv/at/xml/',
                     'tips': '<span class="layui-badge layui-bg-green">正常采集 </span>',
                     'coll': 'ZYM采集插件,mgtv,976,1',
             		'zylink': 'http://zy.singlive.cn/'
                 },	{
                     'flag': 'qq',
                     'name': '乐喵资源站',
                     'rema': '腾讯视频直链',
                     'apis': 'http://zy.singlive.cn/api.php/provide/vod/from/qq/at/xml/',
                     'tips': '<span class="layui-badge layui-bg-green">正常采集 </span>',
                     'coll': 'ZYM采集插件,qq,976,1',
             		'zylink': 'http://zy.singlive.cn/'
                 },	{
                     'flag': 'qiyi',
                     'name': '乐喵资源站',
                     'rema': '爱奇艺视频直链',
                     'apis': 'http://zy.singlive.cn/api.php/provide/vod/from/qiyi/at/xml/',
                     'tips': '<span class="layui-badge layui-bg-green">正常采集 </span>',
                     'coll': 'ZYM采集插件,qiyi,976,1',
             		'zylink': 'http://zy.singlive.cn/'
                 },	{
                     'flag': 'youku',
                     'name': '乐喵资源站',
                     'rema': '优酷视频直链',
                     'apis': 'http://zy.singlive.cn/api.php/provide/vod/from/youku/at/xml/',
                     'tips': '<span class="layui-badge layui-bg-green">正常采集 </span>',
                     'coll': 'ZYM采集插件,youku,976,1',
             		'zylink': 'http://zy.singlive.cn/'
                 },	{
                     'flag': 'qq',
                     'name': '乐喵资源站',
                     'rema': 'HTTP资源',
                     'apis': 'http://zy.singlive.cn/api.php/provide/vod/?ac=list',
                     'tips': '<span class="layui-badge layui-bg-green">正常采集 </span>',
                     'coll': 'ZYM采集插件,qq,976,1|ZYM采集插件,youku,798,1|ZYM采集插件,qiyi,797,1|ZYM采集插件,mgtv,796,1|ZYM采集插件,sohu,795,1|ZYM采集插件,letv,794,1|ZYM采集插件,pptv,793,1|ZYM采集插件,migu,793,1|ZYM采集插件,cntv,793,1|ZYM采集插件,bilibili,793,1|ZYM采集插件,wasu,793,1|ZYM采集插件,funshion,793,1|ZYM采集插件,y3600,793,1|ZYM采集插件,kankan,7',
             		'zylink': 'http://zy.singlive.cn/'
                 },		{
                     'flag': 'funshion',
                     'name': '8090资源站',
                     'rema': '风行视频网直链',
                     'apis': 'https://zy.yilans.net/api.php/provide/vod/from/funshion/at/xml/',
                     'tips': '<span class="layui-badge layui-bg-green">正常采集 </span>',
                     'coll': 'ZYM采集插件,funshion,976,1',
             		'zylink': 'https://zy.yilans.net/'
                 },	{
                     'flag': 'wasu',
                     'name': '8090资源站',
                     'rema': '华硕视频网直链',
                     'apis': 'https://zy.yilans.net/api.php/provide/vod/from/wasu/at/xml/',
                     'tips': '<span class="layui-badge layui-bg-green">正常采集 </span>',
                     'coll': 'ZYM采集插件,wasu,976,1',
             		'zylink': 'https://zy.yilans.net/'
                 },	{
                     'flag': 'migu',
                     'name': '8090资源站',
                     'rema': '咪咕视频网直链',
                     'apis': 'https://zy.yilans.net/api.php/provide/vod/from/migu/at/xml/',
                     'tips': '<span class="layui-badge layui-bg-green">正常采集 </span>',
                     'coll': 'ZYM采集插件,migu,976,1',
             		'zylink': 'https://zy.yilans.net/'
                 },	{
                     'flag': 'm1905',
                     'name': '8090资源站',
                     'rema': 'M1905视频网直链',
                     'apis': 'https://zy.yilans.net/api.php/provide/vod/from/m1905/at/xml/',
                     'tips': '<span class="layui-badge layui-bg-green">正常采集 </span>',
                     'coll': 'ZYM采集插件,m1905,976,1',
             		'zylink': 'https://zy.yilans.net/'
                 },	{
                     'flag': 'pptv',
                     'name': '8090资源站',
                     'rema': 'PPTV视频直链',
                     'apis': 'https://zy.yilans.net/api.php/provide/vod/from/pptv/at/xml/',
                     'tips': '<span class="layui-badge layui-bg-green">正常采集 </span>',
                     'coll': 'ZYM采集插件,pptv,976,1',
             		'zylink': 'https://zy.yilans.net/'
                 },	{
                     'flag': 'letv',
                     'name': '8090资源站',
                     'rema': '乐视视频直链',
                     'apis': 'https://zy.yilans.net/api.php/provide/vod/from/letv/at/xml/',
                     'tips': '<span class="layui-badge layui-bg-green">正常采集 </span>',
                     'coll': 'ZYM采集插件,letv,976,1',
             		'zylink': 'https://zy.yilans.net/'
                 },	{
                     'flag': 'sohu',
                     'name': '8090资源站',
                     'rema': '搜狐视频直链',
                     'apis': 'https://zy.yilans.net/api.php/provide/vod/from/sohu/at/xml/',
                     'tips': '<span class="layui-badge layui-bg-green">正常采集 </span>',
                     'coll': 'ZYM采集插件,sohu,976,1',
             		'zylink': 'https://zy.yilans.net/'
                 },	{
                     'flag': 'mgtv',
                     'name': '8090资源站',
                     'rema': '芒果视频直链',
                     'apis': 'https://zy.yilans.net/api.php/provide/vod/from/mgtv/at/xml/',
                     'tips': '<span class="layui-badge layui-bg-green">正常采集 </span>',
                     'coll': 'ZYM采集插件,mgtv,976,1',
             		'zylink': 'https://zy.yilans.net/'
                 },	{
                     'flag': 'qq',
                     'name': '8090资源站',
                     'rema': '腾讯视频直链',
                     'apis': 'https://zy.yilans.net/api.php/provide/vod/from/qq/at/xml/',
                     'tips': '<span class="layui-badge layui-bg-green">正常采集 </span>',
                     'coll': 'ZYM采集插件,qq,976,1',
             		'zylink': 'https://zy.yilans.net/'
                 },	{
                     'flag': 'qiyi',
                     'name': '8090资源站',
                     'rema': '爱奇艺视频直链',
                     'apis': 'https://zy.yilans.net/api.php/provide/vod/from/qiyi/at/xml/',
                     'tips': '<span class="layui-badge layui-bg-green">正常采集 </span>',
                     'coll': 'ZYM采集插件,qiyi,976,1',
             		'zylink': 'https://zy.yilans.net/'
                 },	{
                     'flag': 'youku',
                     'name': '8090资源站',
                     'rema': '优酷视频直链',
                     'apis': 'https://zy.yilans.net/api.php/provide/vod/from/youku/at/xml/',
                     'tips': '<span class="layui-badge layui-bg-green">正常采集 </span>',
                     'coll': 'ZYM采集插件,youku,976,1',
             		'zylink': 'https://zy.yilans.net/'
                 },	{
                     'flag': 'qq',
                     'name': '明日资源站',
                     'rema': '综合api，播放器比较杂乱,HTTPS资源',
                     'apis': 'https://zy.zcocc.com/api.php/provide/vod/at/xml/',
                     'tips': '<span class="layui-badge layui-bg-green">正常采集 </span>',
                     'coll': 'ZYM采集插件,qq,976,1|ZYM采集插件,youku,798,1|ZYM采集插件,qiyi,797,1|ZYM采集插件,mgtv,796,1|ZYM采集插件,sohu,795,1|ZYM采集插件,letv,794,1|ZYM采集插件,pptv,793,1|ZYM采集插件,migu,793,1|ZYM采集插件,cntv,793,1|ZYM采集插件,bilibili,793,1|ZYM采集插件,wasu,793,1|ZYM采集插件,funshion,793,1|ZYM采集插件,y3600,793,1|ZYM采集插件,kankan,7',
             		'zylink': 'https://zy.zcocc.com/'
                 },	{
                     'flag': 'qq',
                     'name': '1717资源站',
                     'rema': 'HTTPS资源综合腾讯,优酷,爱奇艺,芒果,搜狐,乐视,PP',
                     'apis': 'https://zy.itono.cn/inc/api.php',
                     'tips': '<span class="layui-badge layui-bg-green">正常采集 </span>',
                     'coll': 'ZYM采集插件,qq,976,1|ZYM采集插件,youku,798,1|ZYM采集插件,qiyi,797,1|ZYM采集插件,mgtv,796,1|ZYM采集插件,sohu,795,1|ZYM采集插件,letv,794,1|ZYM采集插件,pptv,793,1|ZYM采集插件,migu,793,1|ZYM采集插件,cntv,793,1|ZYM采集插件,bilibili,793,1|ZYM采集插件,wasu,793,1|ZYM采集插件,funshion,793,1|ZYM采集插件,y3600,793,1|ZYM采集插件,kankan,7',
             		'zylink': 'https://zy.itono.cn/'
                 },	{
                     'flag': 'qq',
                     'name': '8090资源站',
                     'rema': 'HTTPS资源',
                     'apis': 'https://zy.yilans.net/api.php/provide/vod/at/xml/',
                     'tips': '<span class="layui-badge layui-bg-green">正常采集 </span>',
                     'coll': 'ZYM采集插件,qq,976,1|ZYM采集插件,youku,798,1|ZYM采集插件,qiyi,797,1|ZYM采集插件,mgtv,796,1|ZYM采集插件,sohu,795,1|ZYM采集插件,letv,794,1|ZYM采集插件,pptv,793,1|ZYM采集插件,migu,793,1|ZYM采集插件,cntv,793,1|ZYM采集插件,bilibili,793,1|ZYM采集插件,wasu,793,1|ZYM采集插件,funshion,793,1|ZYM采集插件,y3600,793,1|ZYM采集插件,kankan,7',
             		'zylink': 'https://zy.yilans.net/'
                 },	{
                     'flag': 'pptv',
                     'name': '明日资源站',
                     'rema': 'PPTV视频直链',
                     'apis': 'https://zy.zcocc.com/api.php/provide/vod/from/pptv/at/xml/',
                     'tips': '<span class="layui-badge layui-bg-green">正常采集 </span>',
                     'coll': 'ZYM采集插件,pptv,976,1',
             		'zylink': 'https://zy.zcocc.com/'
                 },	{
                     'flag': 'sohu',
                     'name': '明日资源站',
                     'rema': '搜狐视频直链',
                     'apis': 'https://zy.zcocc.com/api.php/provide/vod/from/sohu/at/xml/',
                     'tips': '<span class="layui-badge layui-bg-green">正常采集 </span>',
                     'coll': 'ZYM采集插件,sohu,976,1',
             		'zylink': 'https://zy.zcocc.com/'
                 },	{
                     'flag': 'letv',
                     'name': '明日资源站',
                     'rema': '乐视视频直链',
                     'apis': 'https://zy.zcocc.com/api.php/provide/vod/from/letv/at/xml/',
                     'tips': '<span class="layui-badge layui-bg-green">正常采集 </span>',
                     'coll': 'ZYM采集插件,letv,976,1',
             		'zylink': 'https://zy.zcocc.com/'
                 },	{
                     'flag': 'mgtv',
                     'name': '明日资源站',
                     'rema': 'HTTPS资源芒果tv视频直链',
                     'apis': 'http://zy.zcocc.com/api.php/provide/vod/from/mgtv/at/xml/',
                     'tips': '<span class="layui-badge layui-bg-green">正常采集 </span>',
                     'coll': 'ZYM采集插件,mgtv,976,1',
             		'zylink': 'https://zy.zcocc.com/'
                 },	{
                     'flag': 'youku',
                     'name': '明日资源站',
                     'rema': 'HTTPS资源优酷视频直链',
                     'apis': 'https://zy.zcocc.com/api.php/provide/vod/from/youku/at/xml/',
                     'tips': '<span class="layui-badge layui-bg-green">正常采集 </span>',
                     'coll': 'ZYM采集插件,youku,976,1',
             		'zylink': 'https://zy.zcocc.com/'
                 },	{
                     'flag': 'qq',
                     'name': '明日资源站',
                     'rema': 'HTTPS资源,腾讯视频直链',
                     'apis': 'https://zy.zcocc.com/api.php/provide/vod/from/qq/at/xml/',
                     'tips': '<span class="layui-badge layui-bg-green">正常采集 </span>',
                     'coll': 'ZYM采集插件,qq,976,1',
             		'zylink': 'https://zy.zcocc.com/'
                 },	{
                     'flag': 'qiyi',
                     'name': '明日资源站',
                     'rema': '爱奇艺视频直链',
                     'apis': 'https://zy.zcocc.com/api.php/provide/vod/from/qiyi/at/xml/',
                     'tips': '<span class="layui-badge layui-bg-green">正常采集 </span>',
                     'coll': 'ZYM采集插件,qiyi,976,1',
             		'zylink': 'https://zy.zcocc.com/'
                 },	]
	},
// 	'fuck': {
// 		'head': 'AV资源专区',
// 		'tips': '<font color="red">X站</font>',
// 		'rows': [{
// 			'flag': 'botian',
// 			'name': '博天堂资源站 HTTPS资源',
// 			'rema': "切片资源",
// 			'apis': 'http://bttcj.com/inc/sapi.php',
// 			'tips': '<span class="layui-badge layui-bg-red">推荐采集</span>',
// 			'coll': 'CK在线,ckplayer,1080,1'
// 		}, {
// 			'flag': 'huanya',
// 			'name': '环亚资源站 HTTPS资源',
// 			'rema': "切片资源",
// 			'apis': 'http://wmcj8.com/inc/sapi.php',
// 			'tips': '<span class="layui-badge layui-bg-red">推荐采集</span>',
// 			'coll': 'CK在线,ckplayer,1080,1'
// 		}, {
// 			'flag': 'lajiao',
// 			'name': '辣椒资源站 HTTPS资源',
// 			'rema': '速度全网最快',
// 			'apis': 'https://apilj.com/api.php/provide/vod/at/xml/ ',
// 			'tips': '<span class="layui-badge layui-bg-red">推荐采集</span>',
// 			'coll': '辣椒在线,lajiao,1030,1'
// 		}, {
// 			'flag': 'dadiapi',
// 			'name': '大地云资源',
// 			'rema': '叉站资源 支持https',
// 			'apis': 'https://dadiapi.com/api.php',
// 			'tips': '<span class="layui-badge layui-bg-green">速度最快</span>',
// 			'coll': '大地在线,dadim3u8,1032,1|大地云播,dadi,1033,1'
// 		}, {
// 			'flag': 'liujiu',
// 			'name': '1769云资源',
// 			'rema': '叉站资源  支持https',
// 			'apis': 'http://cj.vod1769.com/zyapimacc_1769.php',
// 			'tips': '<span class="layui-badge layui-bg-green">国外节点</span>',
// 			'coll': '91云播,91yun,1042,1'
// 		}, {
// 			'flag': 'huagua',
// 			'name': '小黄瓜资源',
// 			'rema': '叉站资源  支持https',
// 			'apis': 'http://cj.xhgcjym.com/inc/api.php',
// 			'tips': '<span class="layui-badge layui-bg-green">国外节点</span>',
// 			'coll': '黄瓜云播,xhgzy,1015,1'
// 		}, {
// 			'flag': 'ue',
// 			'name': 'UE云资源',
// 			'rema': '云播,https资源',
// 			'apis': 'https://uezyapi.com/api.php/provide/vod/from/uezym3u8/at/xml/',
// 			'tips': '<span class="layui-badge layui-bg-green">国外节点</span>',
// 			'coll': '九州云播,uezym3u8,1038,1'
// 		}, {
// 			'flag': 'ixx',
// 			'name': 'IXX云资源',
// 			'rema': 'M3U8,不支持https',
// 			'apis': 'http://api.iixxzyapi.com/inc/api.php',
// 			'tips': '<span class="layui-badge layui-bg-green">国外节点</span>',
// 			'coll': '酷云在线,ckm3u8,1035,1|IXX云播,ixx,1027,1'
// 		}, {
// 			'flag': 'babai',
// 			'name': '800资源',
// 			'rema': '切片m3u8,https资源',
// 			'apis': 'http://cj.809zy.com/inc/zyapimac.php',
// 			'tips': '<span class="layui-badge layui-bg-green">国外节点</span>',
// 			'coll': 'CK在线,ckplayer,1080,1'
// 		}, {
// 			'flag': 'sszyz',
// 			'name': '色色在线HTTP资源',
// 			'rema': '切片资源,http资源',
// 			'apis': 'http://sscj8.com/inc/api.php',
// 			'tips': '<span class="layui-badge layui-bg-green">国外节点</span>',
// 			'coll': 'CK在线,ckplayer,1080,1'
// 		}, {
// 			'flag': 'lsn',
// 			'name': '撸死你在线HTTP资源',
// 			'rema': '切片资源,http资源',
// 			'apis': 'http://lsnzxcj.com/inc/api.php',
// 			'tips': '<span class="layui-badge layui-bg-green">国外节点</span>',
// 			'coll': 'CK在线,ckplayer,1080,1'
// 		}, {
// 			'flag': 'fu2d',
// 			'name': '富二代在线HTTP资源',
// 			'rema': '切片资源,http资源',
// 			'apis': 'http://f2dcj6.com/Api',
// 			'tips': '<span class="layui-badge layui-bg-green">国外节点</span>',
// 			'coll': 'CK在线,ckplayer,1080,1'
// 		}, {
// 			'flag': 'nyg',
// 			'name': '女优在线HTTP资源',
// 			'rema': '切片资源,http资源',
// 			'apis': 'http://nygcj.com/api.php',
// 			'tips': '<span class="layui-badge layui-bg-green">国外节点</span>',
// 			'coll': 'CK在线,ckplayer,1080,1'
// 		}, {
// 			'flag': 'lsn',
// 			'name': '利来在线资源',
// 			'rema': '切片资源,http资源',
// 			'apis': 'http://llzxcj.com/inc/ck.php',
// 			'tips': '<span class="layui-badge layui-bg-green">国外节点</span>',
// 			'coll': 'CK在线,ckplayer,1080,1'
// 		}, {
// 			'flag': 'xgzyz',
// 			'name': '西瓜资源站 HTTP资源',
// 			'rema': '切片资源,云转码资源',
// 			'apis': 'https://api.xgzy1.com/api.php',
// 			'tips': '<span class="layui-badge layui-bg-green">国外节点</span>',
// 			'coll': '西瓜云播,xgzyz,1022,1'
// 		}, {
// 			'flag': 'feiji',
// 			'name': '飞机馆资源站 HTTP资源',
// 			'rema': '切片资源,云转码资源',
// 			'apis': 'http://cj.fjgzycj.com/api.php/provide/vod/at/json',
// 			'tips': '<span class="layui-badge layui-bg-green">国外节点</span>',
// 			'coll': 'CK在线,ckplayer,1080,1'
// 		}]
// 	},
	'news': {
		'head': '娱乐资讯专区',
		'tips': '娱乐新闻、小说、图片写真等资源',
		'rows': [{
                     'flag': 'kbym3u8',
                     'name': '恐怖鸭资源站',
                     'rema': 'HTTPS资源',
                     'apis': 'https://ya.kongbuya.com/api.php/provide/art/?ac=list',
                     'tips': '<span class="layui-badge layui-bg-green">正常采集 </span>',
                     'coll': 'LMZY采集插件,kbym3u8,976,1',
             		'zylink': 'http://ya.kongbuya.com/'
                 },	{
                     'flag': 'mkm3u8',
                     'name': '蘑菇资源网',
                     'rema': '影视娱乐资讯',
                     'apis': 'http://zy.mgys8.com/api.php/provide/art/at/xmI',
                     'tips': '<span class="layui-badge layui-bg-green">正常采集 </span>',
                     'coll': 'LMZY采集插件,mkm3u8,976,1',
             		'zylink': 'http://zy.mgys8.com/'
                },	{
                     'flag': 'alizy',
                     'name': '阿里云资源站',
                     'rema': '叉站小说图片',
                     'apis': 'http://www.cqzyw.net:88/api.php/provide/art/?ac=list',
                     'tips': '<span class="layui-badge layui-bg-green">正常采集 </span>',
                     'coll': 'LMZY采集插件,alizy,976,1',
             		'zylink': 'http://www.cqzyw.net:88/'
                },]
	},
	'star': {
		'head': '明星资源专区',
		'tips': '',
		'rows': [{
			'flag': 'mogu',
			'name': '蘑菇资源网演员库',
			'rema': '明星资料',
			'apis': 'http://zy.mgys8.com/api.php/provide/actor/?ac=list',
			'tips': '<span class="layui-badge layui-bg-green">明星演员</span>',
			'coll': ''
		}]
	},
	'down': {
		'head': '下载资源专区',
		'tips': '',
		'rows': [{
			'flag': 'zuida',
			'name': '最大云资源',
			'rema': '迅雷下载',
			'apis': 'http://www.zdziyuan.com/inc/s_apidown.php',
			'tips': '<span class="layui-badge layui-bg-green">国外节点</span>',
			'coll': '迅雷下载,xunlei,99,1'
		}, {
			'flag': 'diguo',
			'name': '帝国云资源',
			'rema': '迅雷下载',
			'apis': 'http://www.yszydg.com/inc/apidown.php',
			'tips': '<span class="layui-badge layui-bg-green">国外节点</span>',
			'coll': '迅雷下载,xunlei,99,1'
		}, {
			'flag': 'okzy',
			'name': 'OK云资源',
			'rema': '迅雷下载',
			'apis': 'http://api.iokzy.com/inc/apidown.php',
			'tips': '<span class="layui-badge layui-bg-green">国外节点</span>',
			'coll': '迅雷下载,xunlei,99,1'
		}]
	}
};