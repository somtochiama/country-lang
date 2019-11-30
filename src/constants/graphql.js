import gql from 'graphql-tag'

export const ALL_COUNTRIES_QUERY = gql`
    query allCountriesQuery{
        countries {
            name
            code
        }
    }
`

export const COUNTRY_LANGUAGES_QUERY = gql`
    query countryLanguagesQuery($code: String!) {
        country(code: $code) {
            name
                languages {
            name
            code
            }
        }
    }
`
