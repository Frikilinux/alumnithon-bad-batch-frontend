import {
  createUserProfile,
  getUserProfile,
} from '../../services/profileService'
import { useState, useEffect } from 'react'
import type { CreateUserProfileData } from '../../types/form'
import type { UserProfileApi } from '../../types/user'
import { useNavigate } from 'react-router'
export const useCreateProfile = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const createProfile = async (data: CreateUserProfileData) => {
    setIsLoading(true)
    setError(null)

    try {
      const profile = await createUserProfile(data)
      return profile
    } catch (err) {
      console.error('Error creating profile:', err)
      setError('No se pudo crear el perfil. Intenta nuevamente.')
      return null
    } finally {
      setIsLoading(false)
    }
  }

  return { createProfile, isLoading, error }
}

export const useMeProfile = () => {
  const [profile, setProfile] = useState<UserProfileApi | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const navigate = useNavigate()
  const fetchProfile = async () => {
    setIsLoading(true)
    setError(null)

    try {
      const userProfile = await getUserProfile()
      setProfile(userProfile)
    } catch (err) {
      console.error('Error fetching profile:', err)
      setError('No se pudo cargar el perfil. Intenta nuevamente.')
      navigate('/dashboard/crear-perfil')
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    fetchProfile()
  }, [])

  return { profile, isLoading, error, refetch: fetchProfile }
}
