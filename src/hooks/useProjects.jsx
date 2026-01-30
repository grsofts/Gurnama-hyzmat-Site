import { useEffect, useState } from 'react'
import projectService from '../api/project.service'

const useProjects = () => {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let isMounted = true

    const loadProjects = async () => {
      try {
        const data = await projectService.getProjects()
        if (isMounted) {
          setProjects(data)
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

    loadProjects()

    return () => {
      isMounted = false
    }
  }, [])

  return { projects, loading, error }
}

export default useProjects
