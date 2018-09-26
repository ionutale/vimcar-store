import fetch from '../api/mock'

export const purchaseAllItemsInCart = async (quantity) => {
  return await fetch(
    'https://example.com/-/v1/stock/reserve', {
      method: 'POST',
      body: {
        urn: 'fakeurn:asdf',
        quantity: quantity,
      }
    }
  )
}

// i'm asking for all the data from the server. as it seems not to be so many items
export const fetchDataFromServer = async () => {
  return await fetch(
    'https://example.com/-/v1/stock/reserve', {
      method: 'GET',
      body: {}
    }
  )
}

