## ๐ ๋ง์๋ง๋ผ

> ์ด์  ๊ณ ๋ฏผ ๊ทธ๋งํ๊ณ , ๊น๋ฐฅ์ด๋ ๋ง์. Don't worry, Just roll it!

<img src="https://user-images.githubusercontent.com/72112845/169669473-4f0909c8-aaf4-471d-b4c0-a249bc02a359.png"/>

<br/><br/>

## ๐ฏ Server Architecture
<img src="https://img.shields.io/badge/TypeScript-2d79c7?style=flat-square&logo=TypeScript&logoColor=white"/> <img src="https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=Node.js&logoColor=white"/> <img src="https://img.shields.io/badge/Express-000000?style=flat-square&logo=Express&logoColor=white"/> <img src="https://img.shields.io/badge/MongoDB-47A248?style=flat-square&logo=MongoDB&logoColor=white"/> <img src="https://img.shields.io/badge/Mongoose-47A248?style=flat-square&logo=MongoDB&logoColor=white"/>
 <img src="https://img.shields.io/badge/AWS-232F3E?style=flat-square&logo=AmazonAWS&logoColor=white"/> <br>
 <img src="https://user-images.githubusercontent.com/72112845/169669423-4f37228a-f9f7-4dd3-a7e9-0ecb3f20c3c2.png" width="700"/>


</br>

## ๐ฏ Contributors
|                             ๊นํฌ๋น                             |                            ๊น๊ฒฝ๋ฆฐ                           |
| :----------------------------------------------------------: | :----------------------------------------------------------: |
| <img src="https://user-images.githubusercontent.com/72112845/169653355-aa73030a-0213-4e85-af10-53c5cde7b8d7.PNG" width="300"/> | <img src="https://user-images.githubusercontent.com/72112845/169653384-0c089e81-a7b3-4d75-adfe-a551164190d9.png" width="300"/>  |
|              [kmebin](https://github.com/kmebin)               |             [kkl4846](https://github.com/kkl4846)              |

<hr>
<br/>

## ๐ฏ API Docs

### ๐ [API Docs](https://coordinated-vein-c40.notion.site/API-Docs-900615de4e8549918626778667fb2416)

<hr>
<br/>

## ๐ฏ Collection
<img src="https://user-images.githubusercontent.com/72112845/169666700-f2591050-bd46-451e-9edd-1234d12b22c0.png" width="700"/>

<hr>
</br>


## ๐ฏ Role

|  Route  |        Func        |  Role  | Done |
| :-----: | :----------------: | :----: | :--: |
|  USER   |  ์ ์  ๊ฒฐ์  ๋ฆฌ์คํธ ์กฐํ  | ๊นํฌ๋น, ๊น๊ฒฝ๋ฆฐ | โ |
|   QUESTION   |     ์ง๋ฌธ ๊ฒฐ๊ณผ ๊ฒฐ์       |  ๊นํฌ๋น  | โ |
|      |     ์ง๋ฌธ ํ๊ธฐ ์์ฑ      |  ๊น๊ฒฝ๋ฆฐ  |โ |



<hr>
</br>


## ๐ฏ Convention

- [Commit Convention](https://coordinated-vein-c40.notion.site/Commit-Convention-4079223cc20a46d3bab05195d590665a)
- [Code Convention](https://coordinated-vein-c40.notion.site/Code-Convention-58abe59721a94edcbf76df42e079c268)
- [Branch Strategy](https://coordinated-vein-c40.notion.site/Git-Convention-ddcff530a2394ebca57d93e7a243dbe8)



<hr>
</br>


## ๐ฏ Project Foldering
```
๐ src
    ๐ config
        - index.ts
    ๐ controllers
        - index.ts
        - questionController.ts
        - userController.ts
    ๐ interfaces
        ๐ base
        ๐ question
        ๐ user
    ๐ loaders
        - db.ts
    ๐ models
        - Question.ts
        - User.ts
    ๐ modules
        - responseMessage.ts
        - statusCode.ts
        - util.ts
    ๐ routes
        - index.ts
        - questionRouter.ts
        - userRouter.ts
    ๐ services
        - index.ts
        - questionService.ts
        - userService.ts
    - index.ts
```

  
<hr>

</br>

## ๐ฏ Dependencies Module

```json
{
  "name": "sopkathon-10",
  "version": "1.0.0",
  "main": "index.js",
  "repository": "https://github.com/The-Sopkathon-10/Server.git",
  "author": "kmebin <blowhuiee@gmail.com>",
  "license": "MIT",
  "scripts": {
    "dev": "nodemon",
    "build": "tsc && node dist"
  },
  "dependencies": {
    "dotenv": "^16.0.1",
    "express": "^4.18.1",
    "express-validator": "^6.14.0",
    "mongoose": "^6.3.3"
  },
  "devDependencies": {
    "@types/express": "^4.17.13",
    "@types/mongoose": "^5.11.97",
    "@types/node": "^17.0.34",
    "nodemon": "^2.0.16",
    "ts-node": "^10.7.0",
    "typescript": "^4.6.4"
  }
}
```
