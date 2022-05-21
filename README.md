## 🍙 말아마라

> 이제 고민 그만하고, 김밥이나 말자. Don't worry, Just roll it!


<br/><br/>

## Server Architecture
<img src="https://img.shields.io/badge/TypeScript-2d79c7?style=flat-square&logo=TypeScript&logoColor=white"/> <img src="https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=Node.js&logoColor=white"/> <img src="https://img.shields.io/badge/Express-000000?style=flat-square&logo=Express&logoColor=white"/> <img src="https://img.shields.io/badge/MongoDB-47A248?style=flat-square&logo=MongoDB&logoColor=white"/> <img src="https://img.shields.io/badge/Mongoose-47A248?style=flat-square&logo=MongoDB&logoColor=white"/>
 <img src="https://img.shields.io/badge/AWS-232F3E?style=flat-square&logo=AmazonAWS&logoColor=white"/> 

</br>

## 🌯 Contributors
|                             김희빈                             |                            김경린                           |
| :----------------------------------------------------------: | :----------------------------------------------------------: |
| <img src="https://user-images.githubusercontent.com/72112845/169653355-aa73030a-0213-4e85-af10-53c5cde7b8d7.PNG" width="300"/> | <img src="https://user-images.githubusercontent.com/72112845/169653384-0c089e81-a7b3-4d75-adfe-a551164190d9.png" width="300"/>  |
|              [kmebin](https://github.com/kmebin)               |             [kkl4846](https://github.com/kkl4846)              |

<hr>
<br/>

## 🌯 API Docs

### 🔗 [API Docs](https://coordinated-vein-c40.notion.site/API-Docs-900615de4e8549918626778667fb2416)

<hr>
<br/>

## 🌯 Collection

이따가~

<hr>
</br>


## 🌯 Role

|  Route  |        Func        |  Role  | Done |
| :-----: | :----------------: | :----: | :--: |
|  USER   |  유저 결정 리스트 조회  | 김희빈, 김경린 | ✅ |
|   QUESTION   |     질문 결과 결정      |  김희빈  | ✅ |
|      |     질문 후기 작성      |  김경린  |✅ |



<hr>
</br>


## 🌯 Convention

- [Commit Convention](https://coordinated-vein-c40.notion.site/Commit-Convention-4079223cc20a46d3bab05195d590665a)
- [Code Convention](https://coordinated-vein-c40.notion.site/Code-Convention-58abe59721a94edcbf76df42e079c268)
- [Branch Strategy](https://coordinated-vein-c40.notion.site/Git-Convention-ddcff530a2394ebca57d93e7a243dbe8)



<hr>
</br>


## 🌯 Project Foldering
```
🗂 src
    🗂 config
        - index.ts
    🗂 controllers
        - index.ts
        - questionController.ts
        - userController.ts
    🗂 interfaces
        🗂 base
        🗂 question
        🗂 user
    🗂 loaders
        - db.ts
    🗂 models
        - Question.ts
        - User.ts
    🗂 modules
        - responseMessage.ts
        - statusCode.ts
        - util.ts
    🗂 routes
        - index.ts
        - questionRouter.ts
        - userRouter.ts
    🗂 services
        - index.ts
        - questionService.ts
        - userService.ts
    - index.ts
```

  
<hr>

</br>

## 🌯 Dependencies Module

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
