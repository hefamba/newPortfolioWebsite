import React, { useEffect } from 'react';

export default function TikTokEmbed4() {
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
  <blockquote class="tiktok-embed" cite="https://www.tiktok.com/@henroflow/video/6970444659390729477" data-video-id="6970444659390729477" style="max-width: 605px;min-width: 325px;" > <section> <a target="_blank" title="@henroflow" href="https://www.tiktok.com/@henroflow?refer=embed">@henroflow</a> Love this trend...and also sorry I’m not posting as much but I’m focusing on myself improvement right now. Love y’all and the vibes <a title="adultswim" target="_blank" href="https://www.tiktok.com/tag/adultswim?refer=embed">#adultswim</a> <a title="bump" target="_blank" href="https://www.tiktok.com/tag/bump?refer=embed">#bump</a> <a target="_blank" title="♬ Running Away - VANO 3000 &#38; BADBADNOTGOOD &#38; Samuel T. Herring" href="https://www.tiktok.com/music/Running-Away-6965640046342867717?refer=embed">♬ Running Away - VANO 3000 &#38; BADBADNOTGOOD &#38; Samuel T. Herring</a> </section> </blockquote> <script async src="https://www.tiktok.com/embed.js"></script>
      `;

  return <div dangerouslySetInnerHTML={{ __html: tikTokEmbedCode }} />;
  return <div>TikTokEmbed4</div>;
}
