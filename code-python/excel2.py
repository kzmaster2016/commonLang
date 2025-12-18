import json
import pandas as pd

# 假设这是你的 JSON 字符串（也可以是从文件或接口获取的）
json_str = '''
[
    {"sjczlxdm_cn":"新增","my_value_md5":"b05203071701abe6d3ed7821af3bf2dd1dec4f4912c909ff21a148ad4149bc57","lrrxm":"邹  刚","sfzdjsjz_cn":"否","zjhm":"44128419960211311X","jdswh":"佛公南（刑）拘字〔2025〕号","rhk_rksj":"2025-01-02 15:54:51","xgrsfzh":"430481197902199816","sjly_xt":"ZFBA","sjly":"440600","*dic_imtm":"2025-01-02","xyrxm":"程俊杰","qzcsmc":"刑事拘留","qzcsdm":"0204","flwszlmc":"拘留证","sjly_cn":"佛山市","qzcsdd":"佛山市南海区看守所","lrdwdm":"440605111800","flwszldm":"02040602","imtm":"2025-01-02 16:23:29","daso_cn":"警种业务系统","remr":"广东省公安厅执法办案系统嫌疑人被采取措施信息_汇聚库","lrdwmc":"佛山市公安局南海分局刑侦大队狮山中队","asjbh":"A4406051118002024056012","*dic_jdstfsj":"2025-01-01","my_id_hash":"73d9b153b47a9c4a391fa93dcdfa250177de10664ca2788b5b18919c4ad597a6","sbzt_cn":"未上报","daso":"142","xgsj":"2025-01-01 15:14:19","*dic_jdrq":"2025-01-01","my_create_time":"2025-01-02 16:22:49","jdstfsj":"2025-01-01 00:00:00","bjajbm":"AJBM-B1FJP3EHZ7P","xyrbh":"R4406051118002025013002","zxrq":"2025-01-01 17:00:00","zjzlmc":"居民身份证","copl":"440000","lrrsfzh":"430481197902199816","jdrq":"2025-01-01 00:00:00","*dic_zxrq":"2025-01-01","wsywxxid":"CE6C4B3D918B44C48ABCFD3FF3C02F04","resid":"R-440000140000-10000018","*dic_pzsj":"2025-01-01","*dic_xgsj":"2025-01-01","dtc":"ysk_xyrbcqcsxx","xgrxm":"邹  刚","sfzdjsjz":"0","*dic_lrsj":"2025-01-01","jdjgdm":"440605111800","zjzldm":"111","pzsj":"2025-01-01 16:24:42","*dic_catm":"2025-01-01","jdjgmc":"佛山市公安局南海分局刑侦大队狮山中队","qzcsjcyy":"该信息因业务原因暂时无法采集","*dic_my_create_time":"2025-01-02","jzptbs":"新警综","rtid":"R-440000140000-10000018|b05203071701abe6d3ed7821af3bf2dd1dec4f4912c909ff21a148ad4149bc57","xgdwdm":"440605111800","copl_cn":"广东省","xxzjbh":"2A9870E0A6B71224E06302E21D442703","lrsj":"2025-01-01 15:14:19","*dic_rhk_rksj":"2025-01-02","sjczlxdm":"1","xgdwmc":"佛山市公安局南海分局刑侦大队狮山中队","catm":"2025-01-01 15:14:19","bzjse":"0","my_update_md5":"b05203071701abe6d3ed7821af3bf2dd1dec4f4912c909ff21a148ad4149bc57","sbzt":"0"}
]
'''

# 1. 将 JSON 字符串解析为 Python 列表
data = json.loads(json_str)

# 2. 转换为 pandas DataFrame
df = pd.DataFrame(data)

# 3. 导出为 Excel 文件
df.to_excel("output98.xlsx", index=False)

print("✅ Excel 文件已保存为 output.xlsx")
 

# 提供的字段数据（已简化为一个示例）
data = [
        {
          "columnCode": "ajmc",
          "columnType": None,
          "columnZwm": "案件名称",
          "value": None,
        },
        {
          "columnCode": "badwmc",
          "columnType": None,
          "columnZwm": "办案单位名称",
          "value": None,
        },
        {
          "columnCode": "jyaq",
          "columnType": None,
          "columnZwm": "简要案情",
          "value": None,
        },
        {
          "columnCode": "asjbh",
          "columnType": None,
          "columnZwm": "案事件编号",
          "value": None,
        },
        
      ]

# 转换为 DataFrame
df = pd.DataFrame(data)

# 重命名列更清晰
df.columns = ["字段代码", "类型", "字段中文名", "示例值"]

# 保存为 Excel 文件
output_path = "./案件字段列表2.xlsx"
df.to_excel(output_path, index=False)



