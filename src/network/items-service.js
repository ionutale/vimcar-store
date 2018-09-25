import fetch from '../api/mock'

export const purchaseAllItemsInCart = async () => {
  return await fetch(
    'https://example.com/-/v1/stock/reserve', {
      method: 'POST',
      body: {
        urn: 'fakeurn:asdf',
        quantity: 42,
      }
    }
  )
}

export const fetchDataFromServer = async () => {
  return await fetch(
    'https://example.com/-/v1/stock/reserve', {
      method: 'GET',
      body: {
        urn: 'fakeurn:asdf',
        quantity: 42,
      }
    }
  )
}

