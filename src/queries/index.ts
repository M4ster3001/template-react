import { gql } from '@apollo/client'

const INFO_EXAMPLE = gql`
  query {
    user {
      results {
        name
        age
      }
    }
  }
`

export default INFO_EXAMPLE
