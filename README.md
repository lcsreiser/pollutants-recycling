# **Pollutants Recycling**

<h4>Documentação no Swagger: /api-documentation, com as rotas de criação de usuários, categorias, itens e pontos de coleta</h4>

</br>

## Rotas

</br>

### Users

<h3>Cadastro de usuários</h3>

`POST /users/signup - FORMATO DA REQUISIÇÃO `

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

`POST /users/signup - FORMATO DA RESPOSTA - STATUS 201`

```json
{
  "userId": "29788820-4fa9-4d61-bb5c-5b8b5ac9f606",
  "name": "José",
  "email": "josé@email.com",
  "address":{
    "address_id": "29788820-4fa9-4d61-bb5c-5b8b5ac9f606",
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

`POST /users/signin - FORMATO DA REQUISIÇÃO `

```json
{
  "email": "josé@email.com",
  "password": "senhaForte"
}
```

> Em caso de sucesso, a resposta será:

`POST /users/signin - FORMATO DA RESPOSTA - STATUS 200`

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImU0NWFiMTBkLTJmZjUtNDRmYy1hMzM0LWQ3ZGZkMzk4OTJiYiIsImlhdCI6MTY1Mzc2MDMzNywiZXhwIjoxNjUzNzYzOTM3fQ.ECH1rK8WvGkzY2ghEP5TJW4ZD8cOjeGfyvgSwn9ZAfs"
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
  "categoryId": "29788820-4fa9-4d61-bb5c-5b8b5ac9f606",
  "name": "Óleo",
  "unit": "Litros",
  "description": "Óleo de cozinha usado",
}
```

</br></br>

<h3>Busca de todas as categorias</h3>

`GET /categories - NO BODY `

**Bearer Token Required**

> Em caso de sucesso, a resposta será:

`GET /categories - FORMATO DA RESPOSTA - STATUS 200`

```json
{
    "categories":[
        {
            "categoryId": "29788820-4fa9-4d61-bb5c-5b8b5ac9f606",
            "name": "óleo",
            "unit": "Litros",
            "description": "Óleo de cozinha usado",
        },
        {
            "categoryId": "29788820-4fa9-4d61-bb5c-5b8b5ac9f606",
            "name": "eletrônico",
            "unit": "Quilos",
            "description": "Equipmentos eletrônicos quebrados ou inutilizados",
        },
        {
            "categoryId": "29788820-4fa9-4d61-bb5c-5b8b5ac9f606",
            "name": "remédios",
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
    "categoryId": "29788820-4fa9-4d61-bb5c-5b8b5ac9f606",
    "name": "óleo",
    "unit": "Litros",
    "description": "Óleo de cozinha usado",
}
```

</br></br>

<h3>Atualizaçõa de uma categoria</h3>

`PATCH /categories/:id`

```json
{
  "name": "lixo",
  "unit": "galão",
  "description": "qualquer lixo"
}
```

> em caso de sucesso a resposta será:

`PATCH /categories/:id - FORMATO DA RESPOSTA - STATUS 200`

```json
{
  "categoryId": "29788820-4fa9-4d61-bb5c-5b8b5ac9f606",
  "description": "qualquer lixo",
  "unit": "galão",
  "name": "lixo"
}

```

<br></br>

### Itens

<h3>Cadastro de item</h3>

**Bearer Token Required**

`POST /items - FORMATO DA REQUISIÇÃO `

```json
{
  "name": "Garrafa de óleo",
  "description": "Garrafa de óleo usado",
  "quantity": 3,
  "category": "Óleo" 
}
```

> Em caso de sucesso, a resposta será:

`POST /items - FORMATO DA RESPOSTA - STATUS 20`

```json
{
  "itemId": "29788820-4fa9-4d61-bb5c-5b8b5ac9f606",
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
  "itemId": "29788820-4fa9-4d61-bb5c-5b8b5ac9f606",
  "name": "Garrafa de óleo",
  "description": "Garrafa de óleo usado",
  "quantity": "3 Litros",
  "category": {
    "categoryId": "29788820-4fa9-4d61-bb5c-5b8b5ac9f606",
    "name": "Óleo",
    },
  "owner": {
		"userId": "1061c3c3-18d0-4c5c-9d4e-bc09266382d7",
		"name": "Thiago",
		"email": "thiago@kenzie.com",
	}, 
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
  "itemId": "29788820-4fa9-4d61-bb5c-5b8b5ac9f606",
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
  "name": "Ong Nature",
	"address": {
		"zipCode": "09210300",
		"number": 359,
  	"complement": "Casa 5",
		"isDumpSpot": true
	} 
}
```

> Em caso de sucesso, a resposta será:

`POST /dumpSpot - FORMATO DA RESPOSTA - STATUS 201`

```json
{
  "dumpSpot_id": "29788820-4fa9-4d61-bb5c-5b8b5ac9f606",
  "name": "ONG NatureLive",
  "address":{
    "address_id": "29788820-4fa9-4d61-bb5c-5b8b5ac9f606",
    "zipCode": "11020004",
    "street": "AV. Afonso Pena",
    "number": 736,
    "complement": "Apt 31",
    "latitude": -23.976815351036432,
    "longitude": -46.297928631145886,
    "isDumpSpot": true
  }
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
    "dumpSpot_id": "29788820-4fa9-4d61-bb5c-5b8b5ac9f606",
    "name": "ONG NatureLive",
    "address":{
        "address_id": "29788820-4fa9-4d61-bb5c-5b8b5ac9f606",
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
    "dumpSpot_id": "29788820-4fa9-4d61-bb5c-5b8b5ac9f606",
    "name": "ONG NatLive",
    "address":{
        "address_id": "29788820-4fa9-4d61-bb5c-5b8b5ac9f606",
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