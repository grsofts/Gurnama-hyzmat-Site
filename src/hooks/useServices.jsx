import { useEffect, useState } from 'react'
import hyzmatService from '../api/hyzmat.service'

const useServices = () => {
  const [services, setServices] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let isMounted = true

    const loadServices = async () => {
      try {
        const data = await hyzmatService.getServices()
        if (isMounted) {
          setServices(data)
        }
      } catch (e) {
        if (isMounted) {
          setError(e)
        }
      } finally {
        if (isMounted) {
          setLoading(false)
        }
      }
    }

    loadServices()

    return () => {
      isMounted = false
    }
  }, [])

  return { services, loading, error }
}

export default useServices
