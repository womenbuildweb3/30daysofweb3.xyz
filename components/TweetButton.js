const TweetButton = ({copy}) => {
    const tweet = encodeURIComponent(copy)
    const url = `https://twitter.com/intent/tweet?text=${tweet}`
    return (
        <a href={url} target="_blank" rel="noreferrer">
          <button className="flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-royal-600 hover:bg-royal-700 md:py-3 md:text-lg md:px-8">
            Tweet about this lesson
          </button>
        </a>
    )
}

export default TweetButton
