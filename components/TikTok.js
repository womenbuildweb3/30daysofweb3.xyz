import react from "react";

export default function TikTok({ vidLink, videoID }) {
    return (
        <div>
            <blockquote
                class='tiktok-embed'
                cite={vidLink}
                data-video-id={videoID}
                style={{ "max-width": "605px", "min-width": "325px" }}
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
