import { useContext } from 'react'
import { SiteContext } from './SiteProvider.jsx'

const useSite = () => {
  const context = useContext(SiteContext)

  if (!context) {
    throw new Error('useSite must be used inside <SiteProvider>')
  }

  return context
}

export default useSite
