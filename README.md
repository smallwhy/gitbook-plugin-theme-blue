# GitBook Default Theme

This is the default theme for GitBook since version `3.0.0`. It can be used as a template for theming books or can be extended.

![Image](https://raw.github.com/GitbookIO/theme-default/master/preview.png)

### 使用说明

#### 1. 配置book.json文件
```
    //添加变量
   "variables": {
   	  	"shlName": "曹妃甸职业技术学院"
   	} 
   	
   	//添加插件
   	"plugins": [
        "theme-blue@1.0.13"
    ],
    "pluginsConfig": {
        "theme-blue": {
            "url": "https://github.com/wanghaiyangithub/gitbook-plugin-theme-blue"
        }
    }
```

#### 2. 安装主题插件

```
    gitbook install
```

### 3. 初始化gitbook

```
    gitbook init
```

### 4. 启动gitbook

```
    gitbook serve
```