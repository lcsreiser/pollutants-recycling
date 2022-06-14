# **Pollutants Recycling**

</br>

## Rotas

</br>

### Users

<h3>Cadastro de usuários</h3>

`POST /users - FORMATO DA REQUISIÇÃO `

```json
{
  "name": "José",
  "email": "josé@email.com",
  "password": "senhaForte",
  "address": {
    "zipCode": "11020325",
    "number": 736,
    "complement": "Apt 121" 
  }
}
```

> Em caso de sucesso, a resposta será:

`POST /users - FORMATO DA RESPOSTA - STATUS 201`

```json
{
  "userId": "29788820-4fa9-4d61-bb5c-5b8b5ac9f606",
  "name": "José",
  "email": "josé@email.com",
  "address":{
    "addressId": "29788820-4fa9-4d61-bb5c-5b8b5ac9f606",
    "zipCode": "11020325",
    "street": "AV. Afonso Pena",
    "number": 736,
    "complement": "Apt 121",
    "city": "Santos",
    "state": "SP",
    "isDumpSpot": false
  }
}
```

</br></br>

<h3> Login de usuários</h3>

`POST /login - FORMATO DA REQUISIÇÃO `

```json
{
  "email": "josé@email.com",
  "password": "senhaForte"
}
```

> Em caso de sucesso, a resposta será:

`POST /login - FORMATO DA RESPOSTA - STATUS 200`

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImU0NWFiMTBkLTJmZjUtNDRmYy1hMzM0LWQ3ZGZkMzk4OTJiYiIsImlhdCI6MTY1Mzc2MDMzNywiZXhwIjoxNjUzNzYzOTM3fQ.ECH1rK8WvGkzY2ghEP5TJW4ZD8cOjeGfyvgSwn9ZAfs"
}
```

</br></br>

<h3>Busca de todos os usuários</h3>

`GET /users - NO BODY `

**Bearer Token Required**

> Em caso de sucesso, a resposta será:

`GET /users - FORMATO DA RESPOSTA - STATUS 200`

```json
{
    "users":[
        {
          "userId": "29788820-4fa9-4d61-bb5c-5b8b5ac9f606",
          "name": "José",
          "email": "josé@email.com",
          "address":{
            "addressId": "29788820-4fa9-4d61-bb5c-5b8b5ac9f606",
            "zipCode": "11020325",
            "street": "AV. Afonso Pena",
            "number": 736,
            "complement": "Apt 121",
            "city": "Santos",
            "state": "SP",
            "isDumpSpot": false
          }
        },
        {
          "userId": "29788820-4fa9-4d61-bb5c-5b8b5ac9f606",
          "name": "Gustavo",
          "email": "gustavo3@email.com",
          "address":{
            "addressId": "29788820-4fa9-4d61-bb5c-5b8b5ac9f606",
            "zipCode": "91350160",
            "street": "Rua Guilherme Klippel",,
            "number": 305,
            "complement": "casas",
            "city": "Porto Alegre",
            "state": "RS",
            "isDumpSpot": false
          }
        }
    ]
}
```

</br></br>

<h3>Busca de um usuário</h3>

`GET /users/:id - NO BODY `

**Bearer Token Required**

> Em caso de sucesso, a resposta será:

`GET /users/:id - FORMATO DA RESPOSTA - STATUS 200`

```json
{
  "userId": "29788820-4fa9-4d61-bb5c-5b8b5ac9f606",
  "name": "José",
  "email": "josé@email.com",
  "address":{
    "addressId": "29788820-4fa9-4d61-bb5c-5b8b5ac9f606",
    "zipCode": "11020325",
    "street": "AV. Afonso Pena",
    "number": 736,
    "complement": "Apt 121",
    "city": "Santos",
    "state": "SP",
    "isDumpSpot": false
  }
}
```

</br></br>

<h3>Atualização de usuários</h3>

`PATCH /users/:id - FORMATO DA REQUISIÇÃO `

**Bearer Token Required**

```json
{
  "name": "José Carlos",
  "number": 732,
  "complement": "Apt 42"
}
```

> Em caso de sucesso, a resposta será:

`PATCH /users/:id - FORMATO DA RESPOSTA - STATUS 200`

```json
{
  "userId": "29788820-4fa9-4d61-bb5c-5b8b5ac9f606",
  "name": "José Carlos",
  "email": "josé@email.com",
  "address":{
    "addressId": "29788820-4fa9-4d61-bb5c-5b8b5ac9f606",
    "zipCode": "11020325",
    "street": "AV. Afonso Pena",
    "number": 732,
    "complement": "Apt 42",
    "city": "Santos",
    "state": "SP",
    "isDumpSpot": false
  }
}
```

</br></br>

<h3>Remoção de usuários</h3>

`DELETE /users/:id - NO BODY `

**Bearer Token Required**

> Em caso de sucesso, a resposta será:

`DELETE /users/:id - FORMATO DA RESPOSTA - STATUS 204`

```json
{
  "message": "user successfully deleted""
}
```

</br></br>

### Categories

<h3>Cadastro de categorias</h3>

`POST /categories - FORMATO DA REQUISIÇÃO `

**Bearer Token Required**

```json
{
  "name": "Óleo",
  "unit": "Litros",
  "description": "Óleo de cozinha usado",
}
```

> Em caso de sucesso, a resposta será:

`POST /categories - FORMATO DA RESPOSTA - STATUS 201`

```json
{
  "id": "29788820-4fa9-4d61-bb5c-5b8b5ac9f606",
  "name": "Óleo",
  "unit": "Litros",
  "description": "Óleo de cozinha usado",
}
```

</br></br>

<h3>Busca de todoas as categorias</h3>

`GET /categories - NO BODY `

**Bearer Token Required**

> Em caso de sucesso, a resposta será:

`GET /categories - FORMATO DA RESPOSTA - STATUS 200`

```json
{
    "categories":[
        {
            "id": "29788820-4fa9-4d61-bb5c-5b8b5ac9f606",
            "name": "Óleo",
            "unit": "Litros",
            "description": "Óleo de cozinha usado",
        },
        {
            "id": "29788820-4fa9-4d61-bb5c-5b8b5ac9f606",
            "name": "Eletrônico",
            "unit": "Quilos",
            "description": "Equipmentos eletrônicos quebrados ou inutilizados",
        },
        {
            "id": "29788820-4fa9-4d61-bb5c-5b8b5ac9f606",
            "name": "Remédios",
            "unit": "Caixas",
            "description": "Descarte de remédios vencidos ou sem uso",
        }
    ]
}
```

</br></br>

<h3>Busca de uma categoria</h3>

`GET /categories/:name - NO BODY `

**Bearer Token Required**

> Em caso de sucesso, a resposta será:

`GET /categories/:name - FORMATO DA RESPOSTA - STATUS 200`

```json
{
    "id": "29788820-4fa9-4d61-bb5c-5b8b5ac9f606",
    "name": "Remédios",
    "unit": "Caixas",
    "description": "Descarte de remédios vencidos ou sem uso",
}
```

</br></br>

### Itens

<h3>Cadastro de item</h3>

**Bearer Token Required**

`POST /items - FORMATO DA REQUISIÇÃO `

```json
{
  "name": "Garrafa de óleo",
  "description": "Garrafa de óleo usado",
  "quantity": "3 Litros",
  "category": "Óleo" 
}
```

> Em caso de sucesso, a resposta será:

`POST /items - FORMATO DA RESPOSTA - STATUS 201`

```json
{
  "id": "29788820-4fa9-4d61-bb5c-5b8b5ac9f606",
  "name": "Garrafa de óleo",
  "description": "Garrafa de óleo usado",
  "quantity": "3 Litros",
  "category": {
    "id": "29788820-4fa9-4d61-bb5c-5b8b5ac9f606",
    "name": "Óleo",
    "unit": "Litros",
    "description": "Óleo de cozinha usado",
    } 
}
```

</br></br>

<h3>Busca de um item</h3>

`GET /items/:id - NO BODY `

**Bearer Token Required**

> Em caso de sucesso, a resposta será:

`GET /items/:id - FORMATO DA RESPOSTA - STATUS 200`

```json
{
  "id": "29788820-4fa9-4d61-bb5c-5b8b5ac9f606",
  "name": "Garrafa de óleo",
  "description": "Garrafa de óleo usado",
  "quantity": "3 Litros",
  "category": {
    "id": "29788820-4fa9-4d61-bb5c-5b8b5ac9f606",
    "name": "Óleo",
    "unit": "Litros",
    "description": "Óleo de cozinha usado",
    } 
}
```

</br></br>

<h3>Atualização de itens</h3>

`PATCH /items/:id - FORMATO DA REQUISIÇÃO `

**Bearer Token Required**

```json
{
  "name": "Galão de óleo",
  "description": "Galão de óleo usado",
}
```

> Em caso de sucesso, a resposta será:

`PATCH /items/:id - FORMATO DA RESPOSTA - STATUS 200`

```json
{
  "id": "29788820-4fa9-4d61-bb5c-5b8b5ac9f606",
  "name": "Galão de óleo",
  "description": "Galão de óleo usado",
  "quantity": "3 Litros",
  "category": {
    "id": "29788820-4fa9-4d61-bb5c-5b8b5ac9f606",
    "name": "Óleo",
    "unit": "Litros",
    "description": "Óleo de cozinha usado",
    } 
}
```

</br></br>

<h3>Remoção de items</h3>

`DELETE /items/:id - NO BODY `

**Bearer Token Required**

> Em caso de sucesso, a resposta será:

`DELETE /items/:id - FORMATO DA RESPOSTA - STATUS 204`

```json
{
    "message": "item successfully deleted""
}
```

</br></br>

### DumpSpot

<h3>Cadastro de pontos de coleta</h3>

**Bearer Token Required**

`POST /dumpSpot - FORMATO DA REQUISIÇÃO `

```json
{
  "name": "ONG NatureLive",
  "zipCode": "11020325",
  "number": 736,
  "complement": "Apt 121" 
}
```

> Em caso de sucesso, a resposta será:

`POST /dumpSpot - FORMATO DA RESPOSTA - STATUS 201`

```json
{
  "id": "29788820-4fa9-4d61-bb5c-5b8b5ac9f606",
  "name": "ONG NatureLive",
  "address":{
    "id": "29788820-4fa9-4d61-bb5c-5b8b5ac9f606",
    "zipCode": "11020325",
    "street": "AV. Afonso Pena",
    "number": 736,
    "complement": "Apt 121",
    "latitude": -23.976815351036432,
    "longitude": -46.297928631145886,
    "isDumpSpot": true
  }
}
```
</br></br>

<h3>Busca de todos os pontos de coleta</h3>

`GET /dumpSpot - NO BODY `

**Bearer Token Required**

> Em caso de sucesso, a resposta será:

`GET /dumpSpot - FORMATO DA RESPOSTA - STATUS 200`

```json
{
  "dumpSpots":[
    {
      "id": "29788820-4fa9-4d61-bb5c-5b8b5ac9f606",
      "name": "ONG NatureLive",
      "address":{
          "id": "29788820-4fa9-4d61-bb5c-5b8b5ac9f606",
          "zipCode": "11020325",
          "street": "AV. Afonso Pena",
          "number": 736,
          "complement": "Apt 121",
          "latitude": -23.976815351036432,
          "longitude": -46.297928631145886,
          "isDumpSpot": true
      }
    },
    {
      "id": "29788820-4fa9-4d61-bb5c-5b8b5ac9f606",
      "name": "Prefeitura de Santo André",
      "address":{
          "id": "29788820-4fa9-4d61-bb5c-5b8b5ac9f606",
          "zipCode": "09210-500",
          "street": "AV. Estados Unidos",
          "number": 736,
          "complement": "Apt 121",
          "latitude": -23.976815351036432,
          "longitude": -46.297928631145886,
          "isDumpSpot": true
      }
    }
  ]
}

```

</br></br>

<h3>Busca de um ponto de coleta</h3>

`GET /dumpSpot/:dumpSpot_id - NO BODY `

**Bearer Token Required**

> Em caso de sucesso, a resposta será:

`GET /dumpSpot/:dumpSpot_id - FORMATO DA RESPOSTA - STATUS 200`

```json
{
    "id": "29788820-4fa9-4d61-bb5c-5b8b5ac9f606",
    "name": "ONG NatureLive",
    "address":{
        "id": "29788820-4fa9-4d61-bb5c-5b8b5ac9f606",
        "zipCode": "11020325",
        "street": "AV. Afonso Pena",
        "number": 736,
        "complement": "Apt 121",
        "latitude": -23.976815351036432,
        "longitude": -46.297928631145886,
        "isDumpSpot": true
    }
}
```

</br></br>

<h3>Atualização de um ponto de coleta</h3>

`PATCH /dumpSpot/:dumpSpot_id - FORMATO DA REQUISIÇÃO `

**Bearer Token Required**

```json
{
  "name": "ONG NatLive"
}
```

> Em caso de sucesso, a resposta será:

`PATCH /dumpSpot/:dumpSpot_id - FORMATO DA RESPOSTA - STATUS 200`

```json
{
    "id": "29788820-4fa9-4d61-bb5c-5b8b5ac9f606",
    "name": "ONG NatLive",
    "address":{
        "id": "29788820-4fa9-4d61-bb5c-5b8b5ac9f606",
        "zipCode": "11020325",
        "street": "AV. Afonso Pena",
        "number": 736,
        "complement": "Apt 121",
        "latitude": -23.976815351036432,
        "longitude": -46.297928631145886,
        "isDumpSpot": true
    }
}
```

</br></br>

<h3>Remoção de um ponto de coleta</h3>

`DELETE /dumpSpot/:dumpSpot_id - FORMATO DA REQUISIÇÃO `

**Bearer Token Required**

```json
{
  "name": "ONG NatLive"
}
```

> Em caso de sucesso, a resposta será:

`DELETE /dumpSpot/:dumpSpot_id - FORMATO DA RESPOSTA - STATUS 200`

```json
{
  "message": "dumpSpot successfully deleted""
}
```

</br></br>