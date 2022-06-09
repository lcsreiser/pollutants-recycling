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
  "zipCode": "11020004",
  "number": 736,
  "complement": "Apt 121" 
}
```

> Em caso de sucesso, a resposta será:

`POST /users - FORMATO DA RESPOSTA - STATUS 201`

```json
{
  "id": "29788820-4fa9-4d61-bb5c-5b8b5ac9f606",
  "name": "José",
  "email": "josé@email.com",
  "address":{
    "id": "29788820-4fa9-4d61-bb5c-5b8b5ac9f606",
    "zipCode": "11020-004",
    "street": "AV. Afonso Pena",
    "number": 736,
    "complement": "Apt 121",
    "latitude": -23.976815351036432,
    "longitude": -46.297928631145886,
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
            "id": "29788820-4fa9-4d61-bb5c-5b8b5ac9f606",
            "name": "José",
            "email": "josé@email.com",
            "address":{
                "id": "29788820-4fa9-4d61-bb5c-5b8b5ac9f606",
                "zipCode": "11020-004",
                "street": "AV. Afonso Pena",
                "number": 736,
                "complement": "Apt 121",
                "latitude": -23.976815351036432,
                "longitude": -46.297928631145886,
                "isDumpSpot": false
            }
        },
        {
            "id": "29788820-4fa9-4d61-bb5c-5b8b5ac9f606",
            "name": "Jpão",
            "email": "joao@email.com",
            "address":{
                "id": "29788820-4fa9-4d61-bb5c-5b8b5ac9f606",
                "zipCode": "11020-004",
                "street": "AV. Afonso Pena",
                "number": 736,
                "complement": "Apt 121",
                "latitude": -23.976815351036432,
                "longitude": -46.297928631145886,
                "isDumpSpot": false
            }
        },
        {
            "id": "29788820-4fa9-4d61-bb5c-5b8b5ac9f606",
            "name": "Maria",
            "email": "maria@email.com",
            "address":{
                "id": "29788820-4fa9-4d61-bb5c-5b8b5ac9f606",
                "zipCode": "11020-004",
                "street": "AV. Afonso Pena",
                "number": 736,
                "complement": "Apt 121",
                "latitude": -23.976815351036432,
                "longitude": -46.297928631145886,
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
    "id": "29788820-4fa9-4d61-bb5c-5b8b5ac9f606",
    "name": "José",
    "email": "josé@email.com",
    "address":{
        "id": "29788820-4fa9-4d61-bb5c-5b8b5ac9f606",
        "zipCode": "11020-004",
        "street": "AV. Afonso Pena",
        "number": 736,
        "complement": "Apt 121",
        "latitude": -23.976815351036432,
        "longitude": -46.297928631145886,
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
    "id": "29788820-4fa9-4d61-bb5c-5b8b5ac9f606",
    "name": "José Carlos",
    "email": "josé@email.com",
    "address":{
        "id": "29788820-4fa9-4d61-bb5c-5b8b5ac9f606",
        "zipCode": "11020-004",
        "street": "AV. Afonso Pena",
        "number": 732,
        "complement": "Apt 42",
        "latitude": -23.9768153510363425,
        "longitude": -46.2979286311894325,
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
    "user removed with successful"
}
```

</br>

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

`GET /categories/:categoryName - NO BODY `

**Bearer Token Required**

> Em caso de sucesso, a resposta será:

`GET /categories/:categoryName - FORMATO DA RESPOSTA - STATUS 200`

```json
{
    "id": "29788820-4fa9-4d61-bb5c-5b8b5ac9f606",
    "name": "Remédios",
    "unit": "Caixas",
    "description": "Descarte de remédios vencidos ou sem uso",
}
```

</br></br>

<h3>Atualização de categorias</h3>

`PATCH /categories/:categoryName - FORMATO DA REQUISIÇÃO `

**Bearer Token Required**

```json
{
  "unit": "Cartelas"
}
```

> Em caso de sucesso, a resposta será:

`PATCH /categories/:categoryName - FORMATO DA RESPOSTA - STATUS 200`

```json
{
    "id": "29788820-4fa9-4d61-bb5c-5b8b5ac9f606",
    "name": "Remédios",
    "unit": "Cartelas",
    "description": "Descarte de remédios vencidos ou sem uso",
}
```

</br></br>

<h3>Remoção de categorias</h3>

`DELETE /categories/:categoryName - NO BODY `

**Bearer Token Required**

> Em caso de sucesso, a resposta será:

`DELETE /categories/:categoryName - FORMATO DA RESPOSTA - STATUS 204`

```json
{
    "category removed with successful"
}
```