# **S.P.O.T**

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
  "name": "óleo",
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
	"owner": {
		"email": "josé@kenzie.com",
		"name": "José",
		"userId": "955f7010-e2f0-4cc6-b50c-3d802cd751c3"
	},
	"category": {
		"name": "óleo",
		"categoryId": "091ac44a-27c4-4e26-967b-9dcf08b4d90f"
	},
	"description": "Garrafa de óleo usado",
	"name": "Garrafa de óleo",
	"itemId": "1b758975-13d5-4bb4-93fe-a23483296c09"
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
	"categories": "óleo",
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
	"address": {
		"isDumpSpot": true,
		"longitude": -46.529671,
		"latitude": -23.6369123,
		"number": 359,
		"complement": "Casa 5",
		"city": "Santo André",
		"street": "Avenida Estados Unidos",
		"zipCode": "09210300"
	},
	"categories": [
		{
			"categoryId": "091ac44a-27c4-4e26-967b-9dcf08b4d90f",
			"name": "óleo",
			"unit": "Litros",
			"description": "Óleo usado"
		}
	],
	"name": "Ong Nature",
	"dumpSpot_id": "1b83215d-b2bf-4891-9eb0-f02d3f5bb0bd"
}
```
</br></br>

<h3>Busca de um ponto de coleta pelo cep</h3>

`GET /dumpSpot/free - NO BODY `

```json
{
	"zipCode": "09210300"
}
```

> Em caso de sucesso, a resposta será:

`GET /dumpSpot/free - FORMATO DA RESPOSTA - STATUS 200`

```json
[
	{
		"dumpSpot_id": "1b83215d-b2bf-4891-9eb0-f02d3f5bb0bd",
		"name": "Ong Nature",
		"address": {
			"addressId": "2ada2ae0-2abe-43e0-885c-1c12fafb38ce",
			"zipCode": "09210300",
			"street": "Avenida Estados Unidos",
			"complement": "Casa 5",
			"state": "SP",
			"city": "Santo André",
			"number": 359,
			"latitude": -23.6369123,
			"longitude": -46.529671,
			"isDumpSpot": true
		}
	}
]
```

</br></br>

<h3>Busca de um ponto de coleta pelo cep do usuário</h3>

`GET /dumpSpot/free - NO BODY `

**Bearer Token Required**

> Em caso de sucesso, a resposta será:

`GET /dumpSpot/free - FORMATO DA RESPOSTA - STATUS 200`

```json
[
	{
		"dumpSpot_id": "1b83215d-b2bf-4891-9eb0-f02d3f5bb0bd",
		"name": "Ong Nature",
		"address": {
			"addressId": "2ada2ae0-2abe-43e0-885c-1c12fafb38ce",
			"zipCode": "09210300",
			"street": "Avenida Estados Unidos",
			"complement": "Casa 5",
			"state": "SP",
			"city": "Santo André",
			"number": 359,
			"latitude": -23.6369123,
			"longitude": -46.529671,
			"isDumpSpot": true
		}
	}
]
```

</br></br>

<h3>Busca de um ponto de coleta pela distância</h3>

`GET /dumpSpot/byDistance - NO BODY `

```json
{
	"zipCode": "09210300"
}
```

> Em caso de sucesso, a resposta será:

`GET /dumpSpot/byDistance - FORMATO DA RESPOSTA - STATUS 200`

```json
{
	"origin_addresses": "AV. UNITED STATES, 1 101 - Parque das Nações, Santo André - SP, 09210-300, Brazil",
	"route": [
		{
			"destination_address": "R. Ana Neri, 365 - Vila Metalurgica, Santo André - SP, 09220-030, Brazil",
			"distance": "1.1 km",
			"duration": "4 mins"
		},
		{
			"destination_address": "Av. Estados Unidos, 359 - Parque das Nações, Santo André - SP, 09210-300, Brazil",
			"distance": "0.2 km",
			"duration": "1 min"
		}
	]
}
```

</br></br>

<h3>Busca de um ponto de coleta pela distância do usuário</h3>

`GET /dumpSpot/byDistance - NO BODY `

**Bearer Token Required**

> Em caso de sucesso, a resposta será:

`GET /dumpSpot/byDistance - FORMATO DA RESPOSTA - STATUS 200`

```json
{
	"origin_addresses": "AV. UNITED STATES, 1 101 - Parque das Nações, Santo André - SP, 09210-300, Brazil",
	"route": [
		{
			"destination_address": "R. Ana Neri, 365 - Vila Metalurgica, Santo André - SP, 09220-030, Brazil",
			"distance": "1.1 km",
			"duration": "4 mins"
		},
		{
			"destination_address": "Av. Estados Unidos, 359 - Parque das Nações, Santo André - SP, 09210-300, Brazil",
			"distance": "0.2 km",
			"duration": "1 min"
		}
	]
}
```