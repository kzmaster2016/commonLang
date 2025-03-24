
# 运行根目录判断
if [!-f ".env"]; then
    echo "请在项目根目录下运行"
    exit 1
fi

# 应用名称
APP_NAME=$(cat .env | grep APP_NAME | awk -F '=' '{print $2}')
# APP_NAME=`cat .env | grep APP_NAME | awk -F '=' '{print $2}'` #两种写法都行

# 进程搜索(通用写法)
APP_PID=$(ps -aux|grep ${APP_NAME}.Master|grep -v grep|awk '{print $2}')

# 进程判断,重启应用
if [ $APP_PID ]; then
    kill -15 $APP_PID
    echo "关闭进程: $APP_PID"
fi

if [ "$1" == 'stop' ];  then  
    echo "已关闭关闭进程"
    exit 1
fi


# 缓存文件清理
rm -rf ./runtime/container
nohup php bin/hyperf.php start > /dev/null 2>&1 &

