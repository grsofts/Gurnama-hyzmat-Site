import React, { createContext, useEffect, useState } from 'react'
import contactService from '../api/contacts.service'

// eslint-disable-next-line react-refresh/only-export-components
export const SiteContext = createContext(null)

export const SiteProvider = ({ children }) => {
  const [contacts, setContacts] = useState([])
//   const [about, setAbout] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    loadSiteData()
  }, [])

  const loadSiteData = async () => {
    try {
      const contactsRes = await contactService.getContacts()
      setContacts(contactsRes)
    } catch (e) {
      console.error('Ошибка загрузки данных сайта', e)
    } finally {
      setLoading(false)
    }
  }

  return (
    <SiteContext.Provider value={{ contacts,  loading }}>
      {children}
    </SiteContext.Provider>
  )
}
