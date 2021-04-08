import { PRODUCT_COUNT_QUERY } from '../queries'

export default function paginationField() {
  return {
    keyArgs: false, // tells apollo we will take care of everything
    read(existing = [], { args, cache }) {
      // console.log({ existing, args, cache });
      const { skip, first } = args

      // Read the number of items on the page from the cache
      const data = cache.readQuery({ query: PRODUCT_COUNT_QUERY })
      const count = data?._allProductsMeta?.count
      const page = skip / first + 1
      const pages = Math.ceil(count / first)
      const lastPage = page === pages

      // Check if we have existing items
      const items = existing.slice(skip, skip + first).filter((x) => x)
      // If there are items AND there aren't enough items to satisfy how many were requested
      // AND we are on the last page, then just send the item
      const itemsExistButNotEnoughToSatisfyPagination =
        items.length && items.length !== first

      if (itemsExistButNotEnoughToSatisfyPagination && lastPage) {
        return items
      }

      if (items.length !== first) {
        // We don't have any items, we must go to the network to fetch them
        return false
      }

      // If there are items, just reutrn them from the cache, and we don't need to go to the network
      if (items.length) {
        return items
      }

      return false // fallback to network

      // First thing it does it asks the read function for those items.
      // We can either do one of two things:
      // First things we can do is return the items because they are already in the cache
      // The other thing we can do is to return false from here, (network request)
    },
    merge(existing, incoming, { args }) {
      const { skip, first } = args
      // This runs when the Apollo client comes back from the network with our product
      // console.log(`MErging items from the network ${incoming.length}`);
      const merged = existing ? existing.slice(0) : []
      // eslint-disable-next-line no-plusplus
      for (let i = skip; i < skip + incoming.length; ++i) {
        merged[i] = incoming[i - skip]
      }
      // console.log(merged);
      // Finally we return the merged items from the cache,
      return merged
    },
  }
}
