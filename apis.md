---
title: 示例项目 v1.0.0
language_tabs:
  - shell: Shell
  - http: HTTP
  - javascript: JavaScript
  - ruby: Ruby
  - python: Python
  - php: PHP
  - java: Java
  - go: Go
toc_footers: []
includes: []
search: true
code_clipboard: true
highlight_theme: darkula
headingLevel: 2
generator: "@tarslib/widdershins v4.0.17"

---

# 示例项目

> v1.0.0

Base URLs:

* <a href="https://huv3z8uax1.execute-api.us-east-1.amazonaws.com/dev/">正式环境: https://huv3z8uax1.execute-api.us-east-1.amazonaws.com/dev/</a>

# Default

## GET 获取github信息

GET /github/me

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|token|query|string| 否 |none|

> 返回示例

> 200 Response

```json
{
  "success": true,
  "githubUser": {
    "id": 0,
    "login": "string",
    "name": "string",
    "email": "string",
    "avatar_url": "string",
    "html_url": "string"
  }
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

状态码 **200**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» success|boolean|true|none||none|
|» githubUser|object|true|none||none|
|»» id|integer|true|none||none|
|»» login|string|true|none||none|
|»» name|string|true|none||none|
|»» email|string|true|none||none|
|»» avatar_url|string|true|none||none|
|»» html_url|string|true|none||none|

## POST 创建/更新用户

POST /github/login-by-token

> Body 请求参数

```json
{
  "token": "string"
}
```

### 请求参数

|名称|位置|类型|必选|说明|
|---|---|---|---|---|
|body|body|object| 否 |none|
|» token|body|string| 是 |none|

> 返回示例

> 201 Response

```json
{
  "success": true,
  "user": {
    "id": "string",
    "name": "string",
    "email": "string",
    "github_name": "string",
    "github_profile_url": "string",
    "avatar_url": "string"
  }
}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|201|[Created](https://tools.ietf.org/html/rfc7231#section-6.3.2)|成功|Inline|

### 返回数据结构

状态码 **201**

|名称|类型|必选|约束|中文名|说明|
|---|---|---|---|---|---|
|» success|boolean|true|none||none|
|» user|object|true|none||none|
|»» id|string|true|none||none|
|»» name|string|true|none||none|
|»» email|string|true|none||none|
|»» github_name|string|true|none||none|
|»» github_profile_url|string|true|none||none|
|»» avatar_url|string|true|none||none|

# 数据模型

