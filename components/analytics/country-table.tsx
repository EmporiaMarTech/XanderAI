"use client"

const countries = [
  {
    name: "United States",
    flag: "🇺🇸",
    sales: "2500",
    value: "$239,900",
    revenue: "29.9%",
  },
  {
    name: "Germany",
    flag: "🇩🇪",
    sales: "3,900",
    value: "$440,000",
    revenue: "40.22%",
  },
  {
    name: "Great Britain",
    flag: "🇬🇧",
    sales: "1,400",
    value: "$190,700",
    revenue: "23.44%",
  },
  {
    name: "Brazil",
    flag: "🇧🇷",
    sales: "562",
    value: "$143,960",
    revenue: "32.14%",
  },
]

export function CountryTable() {
  return (
    <div className="relative overflow-x-auto">
      <table className="w-full text-sm text-left">
        <thead className="text-xs text-neutral-500 uppercase">
          <tr>
            <th scope="col" className="px-6 py-3">Country</th>
            <th scope="col" className="px-6 py-3">Sales</th>
            <th scope="col" className="px-6 py-3">Value</th>
            <th scope="col" className="px-6 py-3">Revenue</th>
          </tr>
        </thead>
        <tbody>
          {countries.map((country) => (
            <tr key={country.name} className="border-t border-neutral-800">
              <td className="px-6 py-4 font-medium whitespace-nowrap">
                <div className="flex items-center gap-2">
                  <span className="text-xl">{country.flag}</span>
                  {country.name}
                </div>
              </td>
              <td className="px-6 py-4">{country.sales}</td>
              <td className="px-6 py-4">{country.value}</td>
              <td className="px-6 py-4">{country.revenue}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}