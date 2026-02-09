import React, { createContext, useEffect, useState } from 'react'
import contactService from '../api/contacts.service'
import aboutService from '../api/about.service'

// eslint-disable-next-line react-refresh/only-export-components
export const SiteContext = createContext(null)

export const SiteProvider = ({ children }) => {
  const [contacts, setContacts] = useState([])
  const [about, setAbout] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    loadSiteData()
  }, [])

  const loadSiteData = async () => {
    try {
      const contactsRes = await contactService.getContacts()
      const aboutRes = await aboutService.getAboutInfo()
      setContacts(contactsRes)
      setAbout(aboutRes)
    } catch (e) {
      console.error('Ошибка загрузки данных сайта', e)
    } finally {
      setLoading(false)
    }
  }

  return (
    <SiteContext.Provider value={{ contacts, about, loading }}>
      {children}
    </SiteContext.Provider>
  )
}
