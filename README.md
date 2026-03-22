Você pode testar a aplicação usando:

npm run start:dev

e utilizar curls.

Exemplo:

``` -> post
curl -X POST http://localhost:3000/shopping \
  -H "Content-Type: application/json" \
  -d '{"title": "The Apothecary Diaries", "author": "Natsu Hyuuga"}'
```

``` -> get
curl http://localhost:3000/shopping
```

se tiver JQ: curl -s http://localhost:3000/shopping | jq --> (Não sei se funciona em sh-posix, testei o pipe no fish.)

