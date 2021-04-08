export default function formatMoney(amountInCents = 0): string {
  const currencyFormatter = ((amountInCents * 1) / 100).toLocaleString(
    'en-US',
    {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 2,
      minimumFractionDigits: 0,
    }
  )

  return currencyFormatter
}
