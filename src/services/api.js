export async function getAnimeInfos(text) {
    return fetch(`https://kitsu.io/api/edge/anime?filter[text]=${text}&page[limit]=20`)
}
