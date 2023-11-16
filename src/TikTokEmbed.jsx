import React, { useEffect } from 'react';

const TikTokEmbed = () => {
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
    <blockquote class="tiktok-embed" cite="https://www.tiktok.com/@henroflow/video/6846042177450102022" data-video-id="6846042177450102022" style="max-width: 605px;min-width: 325px;"  >
      <section>
        <a target="_blank" title="@henroflow" href="https://www.tiktok.com/@henroflow?refer=embed">@henroflow</a>
        <a title="greenscreen" target="_blank" href="https://www.tiktok.com/tag/greenscreen?refer=embed">#greenscreen</a> 😂 GameStop be doing us wrong!!
        <a title="gaming" target="_blank" href="https://www.tiktok.com/tag/gaming?refer=embed">#gaming</a>
        <a title="gamestop" target="_blank" href="https://www.tiktok.com/tag/gamestop?refer=embed">#gamestop</a>
        <a title="xyzbca" target="_blank" href="https://www.tiktok.com/tag/xyzbca?refer=embed">#xyzbca</a>
        <a title="fyp" target="_blank" href="https://www.tiktok.com/tag/fyp?refer=embed">#fyp</a>
        <a title="undercoverboss" target="_blank" href="https://www.tiktok.com/tag/undercoverboss?refer=embed">#undercoverboss</a>
        <a target="_blank" title="♬ original sound - ︎" href="https://www.tiktok.com/music/original-sound-6766745498801031942?refer=embed">♬ original sound - ︎</a>
      </section>
    </blockquote>
    <script async src="https://www.tiktok.com/embed.js"></script>
  `;

  return <div dangerouslySetInnerHTML={{ __html: tikTokEmbedCode }} />;
};

export default TikTokEmbed;
