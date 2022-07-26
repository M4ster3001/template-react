import { useQuery } from '@apollo/client'
import INFO_EXAMPLE from 'queries'

interface IUseUser {
  GetUserDetails: () => Promise<any>
}

export default function useUser(): IUseUser {
  const GetUserDetails = async () => {
    const { loading, error, data } = useQuery(INFO_EXAMPLE)

    if (loading) console.log('do something')
    if (error) console.log('error!!!')

    return data
  }

  return { GetUserDetails }
}
