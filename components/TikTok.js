import react from "react";

export default function TikTok({ vidLink, videoID }) {
    return (
        <div className="rounded-lg px-1 bg-gradient-to-r from-teal-400 to-purple-500 ">
            <blockquote
                class='tiktok-embed'
                cite={vidLink}
                data-video-id={videoID}
                style={{ "max-width": "605px", "min-width": "325px" }}
                className="py-2"
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
            <script async src='https://www.tiktok.com/embed.js'></script>
        </div>
    );
}
