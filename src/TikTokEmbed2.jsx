import React, { useEffect } from 'react';

export default function TikTokEmbed2() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://www.tiktok.com/embed.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup if needed
      document.body.removeChild(script);
    };
  }, []);

  const tikTokEmbedCode = `
  <blockquote class="tiktok-embed" cite="https://www.tiktok.com/@henroflow/video/6903328032652676358" data-video-id="6903328032652676358" playsinline=0 style="max-width: 605px;min-width: 325px;" > <section> <a target="_blank" title="@henroflow" href="https://www.tiktok.com/@henroflow?refer=embed">@henroflow</a> i still got it on halo 5! <a title="fyp" target="_blank" href="https://www.tiktok.com/tag/fyp?refer=embed">#fyp</a> <a title="gaming" target="_blank" href="https://www.tiktok.com/tag/gaming?refer=embed">#gaming</a> <a title="gamingvideos" target="_blank" href="https://www.tiktok.com/tag/gamingvideos?refer=embed">#gamingvideos</a> <a title="viral" target="_blank" href="https://www.tiktok.com/tag/viral?refer=embed">#viral</a> <a target="_blank" title="♬ original sound - HENRO 😬" href="https://www.tiktok.com/music/original-sound-6903328053536000773?refer=embed">♬ original sound - HENRO 😬</a> </section> </blockquote> <script async src="https://www.tiktok.com/embed.js"></script>
      `;

  return <div dangerouslySetInnerHTML={{ __html: tikTokEmbedCode }} />;
}
