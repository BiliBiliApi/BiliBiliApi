# 获取用户置顶视频

**必选参数** : `mid` : 用户mid

**接口地址** : `/get/top/video`

**可选参数** : `无`

**调用例子** : `/get/top/video`

**说明** : 无

**响应说明** :

根对象：

| 字段      | 类型  | 内容   | 备注                                    |
|---------|-----|------|---------------------------------------|
| code    | num | 返回值  | 0：成功<br />-400：请求错误<br />53016：没有置顶视频 |
| message | str | 错误信息 | 默认为0                                  |
| ttl     | num | 1    |                                       |
| data    | obj | 信息本体 |                                       |

`data`对象：

| 字段          | 类型   | 内容              | 备注                                                                |
|-------------|------|-----------------|-------------------------------------------------------------------|
| aid         | num  | 稿件avid          |                                                                   |
| videos      | num  | 视频分P总数          | 默认为1                                                              |
| tid         | num  | 分区tid           |                                                                   |
| tname       | str  | 子分区名称           |                                                                   |
| copyright   | num  | 是否转载            | 1：原创<br />2：转载                                                    |
| pic         | str  | 视频封面图片url       |                                                                   |
| title       | str  | 稿件标题            |                                                                   |
| pubdate     | num  | 稿件发布时间          | 时间戳                                                               |
| ctime       | num  | 用户提交稿件的时间       | 时间戳                                                               |
| desc        | str  | 视频简介            |                                                                   |
| state       | num  | 视频状态            | 略，见[获取视频详细信息]()中的`state`备注     |
| attribute   | num  | 稿件属性位配置         | 略，见[获取视频详细信息]()中的`attribute`备注 |
| duration    | num  | 视频总计持续时长（所有分P）  | 单位为秒                                                              |
| rights      | obj  | 视频属性标志          | 略，见[获取视频详细信息]()中的`rights`对象    |
| owner       | obj  | 视频UP主信息         | 略，见[获取视频详细信息]()中的`owner`对象     |
| stat        | obj  | 视频状态数           | 略，见[获取视频详细信息]()中的`stat`对象      |
| dynamic     | str  | 视频同步发布的的动态的文字内容 | 无为空                                                               |
| cid         | num  | 视频1P cid        |                                                                   |
| dimension   | obj  | 视频1P分辨率         | 略，见[获取视频详细信息]()中的`dimension`对象 |
| bvid        | str  | 稿件bvid          |                                                                   |
| reason      | str  | 置顶视频备注          |                                                                   |
| inter_video | bool | 是否为合作视频         | false：否<br />true：是                                               |