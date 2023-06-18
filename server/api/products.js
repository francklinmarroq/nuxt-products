export default defineEventHandler(async (event) => {

    const {data} = await $fetch('https://api.currencyapi.com/v3/latest?apikey=j22MAIN49W8zytXZ4rlgxShdD3eSHA5ZsKH2QWyb')

    return {
        data
    }
})