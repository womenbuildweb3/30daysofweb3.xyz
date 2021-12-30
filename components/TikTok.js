import react from "react";

export default function TikTok({ vidLink, videoID }) {
    return (
        <div className="rounded-lg px-1 ">
            {/* <blockquote
                class='tiktok-embed'
                cite={vidLink}
                data-video-id={videoID}
                style={{ "max-width": "605px", "min-width": "325px", "min-height": "320px", }}
                className="mt-2"
            >
                <section>
                    <a
                        target='_blank'
                        title='@camiinthisthang'
                        href='https://www.tiktok.com/@camiinthisthang'
                    >
                        @camiinthisthang
                    </a>
                </section>
            </blockquote>
            <script async src='https://www.tiktok.com/embed.js'></script> */}
            <iframe
        height={760}
        width={325}
        src={`https://tiktok.com/embed/v2/${videoID}`}
        videoID={videoID}
      />
        </div>
    );
}
