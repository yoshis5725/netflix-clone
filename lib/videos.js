

/**
 * This function returns an array of video objects from the YouTube api.
 * @returns {Promise<[]>}
 * @param url
 */
export const GetCommonVideos = async(url) => {
    const youtubeApiKey = process.env.YOUTUBE_API_KEY;
    const baseUrl = 'https://youtube.googleapis.com/youtube/v3'

    try {
        const response = await fetch(`${baseUrl}/${url}&key=${youtubeApiKey}`);
        const data = await response.json();

        if (data.error) {
            console.error(data.error);
            return [];
        }

        if (!data || !data.items) return [];

        return data.items.map(video => {
            const id = video?.id?.videoId || video?.etag

            return {
                id,
                title: video.snippet.title,
                imgUrl: video.snippet.thumbnails.high.url,
            }
        })
    } catch (error) {
        console.error(error);
        return [];
    }
};


/**
 * Get videos from the YouTube api based on the search term.
 * @param searchTerm
 * @returns {Promise<[]>}
 * @constructor
 */
export const GetVideos = async (searchTerm) => {
    const url = `search?part=snippet&maxResults=25&q=${searchTerm}&type=video`
    return await GetCommonVideos(url);
};


/**
 * Get popular videos from the YouTube api.
 * @returns {Promise<[]>}
 * @constructor
 */
export const GetPopularVideos = async () => {
    const url = 'videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=25&regionCode=US'
    return await GetCommonVideos(url);
};