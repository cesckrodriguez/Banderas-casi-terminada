import { useEffect, useState } from 'react'

const useGetData = (url) => {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([] || {})

  const getData = async () => {
    try {
      const req = await window.fetch(url)
      const resp = await req.json()
      setData(resp)
      setLoading(false)
    } catch (error) {
      setLoading(true)
    }
  }

  useEffect(() => {
    getData()
  }, [])

  return { data, loading }
}

export default useGetData
