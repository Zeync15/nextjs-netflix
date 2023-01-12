export interface VideoDataProps {
  snippet: {
    title: string;
    thumbnails: {
      high: {
        url: string;
      };
    };
  };
  id: {
    channelId: string;
    videoId: string;
  };
}

export const getCommonVideos = async (url: string) => {
  const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY;

  try {
    const BASE_URL = "youtube.googleapis.com/youtube/v3";

    const response = await fetch(
      `https://${BASE_URL}/${url}&maxResults=25&key=${YOUTUBE_API_KEY}`
    );

    const data = await response.json();

    if (data.error) {
      console.error("Youtube API error", data.error);

      return [];
    }

    const videoDataUrl = data.items.map((item: VideoDataProps) => {
      const id = item.id?.videoId || item.id;
      return {
        title: item.snippet.title,
        imgUrl: item.snippet.thumbnails.high.url,
        id,
      };
    });

    return videoDataUrl;
  } catch (error) {
    console.log("Something went wrong", error);

    return [];
  }
};

export const getVideos = async (searchQuery: string) => {
  const URL = `search?part=snippet&type=video&q=${searchQuery}`;
  return getCommonVideos(URL);
};

export const getPopularVideos = () => {
  const URL =
    "videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US";
  return getCommonVideos(URL);
};
