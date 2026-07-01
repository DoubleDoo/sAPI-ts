# sAPI-ts

TypeScript библиотека для работы с [Seller API](https://meshok.net/help_api.php) аукциона Мешок (sAPIv2).

## Установка

```bash
npm install sapi-ts
```

## Использование

```typescript
import { MeshokAPI, MeshokAPIError } from 'sapi-ts'

const api = new MeshokAPI({ token: 'ваш_токен' })

// Получить информацию об аккаунте
const account = await api.getAccountInfo()
console.log(account.balance) // остаток баланса
console.log(account.result?.checkedSeller) // "Y" | "N"

// Получить список лотов на продаже
const list = await api.getItemList()
for (const lot of list.result ?? []) {
  if (lot.saleType === 'Auction') {
    console.log(lot.id, lot.currentPrice, lot.bids)
  } else {
    console.log(lot.id, lot.price, lot.sold)
  }
}

// Получить детальную информацию о лоте
const info = await api.getItemInfo({ id: 290730300 })

// Выставить лот (фиксированная цена)
const created = await api.listItem({
  saleType: 'Sale',
  name: 'Красный пингвин',
  category: 1488,
  longevity: 30,
  curencyId: 2,
  price: 100,
  quantity: 1,
  payment: 'CASH,CARD',
  delivery: 'WORLD',
  localDelivery: 'CHARGE',
  city: 32,
  description: 'Описание лота',
})
console.log(created.result?.id) // id нового лота

// Выставить лот (аукцион)
await api.listItem({
  saleType: 'Auction',
  name: 'Червяк Анатолий',
  category: 12455,
  longevity: 7,
  curencyId: 2,
  startPrice: 45,
  payment: 'CASH,DESC',
  delivery: 'NO',
  localDelivery: 'SELF',
  city: 32,
  description: 'Описание',
})
```

## Конфигурация

```typescript
const api = new MeshokAPI({
  token: 'ваш_токен',   // обязательно
  baseURL: 'https://meshok.net/sAPIv2', // по умолчанию
  timeout: 15000,       // мс, по умолчанию
})
```

## Обработка ошибок

Если API возвращает `success < 0`, выбрасывается `MeshokAPIError`:

```typescript
import { MeshokAPI, MeshokAPIError } from 'sapi-ts'

try {
  const info = await api.getItemInfo({ id: 999 })
} catch (err) {
  if (err instanceof MeshokAPIError) {
    console.error(err.message)   // текст ошибки от API
    console.error(err.code)      // отрицательный код (значение success)
    console.error(err.balance)   // баланс на момент ошибки
    console.error(err.details)   // errorDetails из ответа
  }
}
```

## Все методы

Все методы возвращают `Promise`. Каждый ответ содержит поля: `account`, `cost`, `balance`, `expire`, `success`, `result`, `error`, `errorDetails`.

### Account

| Метод | Стоимость | Описание |
|-------|-----------|----------|
| `getAccountInfo()` | 1 pt | Информация об аккаунте |

### Dictionaries

| Метод | Стоимость | Описание |
|-------|-----------|----------|
| `getCategoryInfo({ id })` | 1 pt | Информация о категории и её параметры |
| `getSubCategory({ id })` | 1 pt | Список подкатегорий для указанной категории |
| `getCountryList()` | 1 pt | Список стран |
| `getCitiesList({ id })` | 1 pt | Список городов в стране (`id` — ID страны) |
| `getCurencyList()` | 1 pt | Список валют |

### Lots

| Метод | Стоимость | Описание |
|-------|-----------|----------|
| `getItemList()` | 10 pt | Список лотов на продаже |
| `getItemInfo({ id })` | 1 pt | Детальная информация о лоте |
| `getFinishedItemList()` | 10 pt | Завершённые лоты |
| `getSoldFinishedItemList()` | 10 pt | Завершённые лоты со сделкой |
| `getUnsoldFinishedItemList()` | 10 pt | Завершённые лоты без сделки |
| `getCommonDescriptionList()` | 1 pt | Список стандартных описаний |
| `listItem(params)` | 10 pt | Выставить лот (Sale или Auction) |
| `updateItem(params)` | 1 pt | Изменить параметры лота |
| `relistItem({ id })` | 2 pt | Повторно выставить завершённый лот |
| `stopSale({ id })` | 0 pt | Снять лот с продажи |
| `deleteItem({ id })` | 0 pt | Удалить завершённый лот из списка |

## Типы

Все TypeScript-типы генерируются из OpenAPI-спека и доступны для импорта:

```typescript
import type { Schemas, components } from 'sapi-ts'

// Удобный алиас для всех схем
type LotOnSale = Schemas['LotOnSale']
type NewLotSale = Schemas['NewLotSale']
type NewLotAuction = Schemas['NewLotAuction']
type LotAuctionInfo = Schemas['LotAuctionInfo']
type LotFixedInfo = Schemas['LotFixedInfo']

// Или через components напрямую
type YesOrNo = components['schemas']['YesOrNo'] // "Y" | "N"
```

## Обновление типов из нового спека

Если API обновился и вы получили новый OpenAPI JSON-файл:

```bash
# Из файла по умолчанию (api-1.json в корне проекта)
npm run generate

# Из указанного файла
npm run generate -- --path=./api-2.json

# После генерации пересобрать библиотеку
npm run build
```

Команда перезапишет `src/generated/schema.ts` — все изменения в API автоматически отразятся в типах.

## Разработка

```bash
npm run generate    # сгенерировать типы из api-1.json
npm run build       # собрать dist/
npm run typecheck   # только проверка типов без сборки
```
