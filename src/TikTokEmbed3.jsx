import React, { useEffect } from 'react';

export default function TikTokEmbed3() {
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
  <blockquote class="tiktok-embed" cite="https://www.tiktok.com/@henroflow/video/6913253969565404421" data-video-id="6913253969565404421" style="max-width: 605px;min-width: 325px;" > <section> <a target="_blank" title="@henroflow" href="https://www.tiktok.com/@henroflow?refer=embed">@henroflow</a> Better more edited version 😂😂 <a title="fyp" target="_blank" href="https://www.tiktok.com/tag/fyp?refer=embed">#fyp</a> <a title="timetotakeabreak" target="_blank" href="https://www.tiktok.com/tag/timetotakeabreak?refer=embed">#timetotakeabreak</a> <a title="siblings" target="_blank" href="https://www.tiktok.com/tag/siblings?refer=embed">#siblings</a> <a title="viral" target="_blank" href="https://www.tiktok.com/tag/viral?refer=embed">#viral</a> <a target="_blank" title="♬ time to take a break - Ethan Fields" href="https://www.tiktok.com/music/time-to-take-a-break-6869199890992417542?refer=embed">♬ time to take a break - Ethan Fields</a> </section> </blockquote> <script async src="https://www.tiktok.com/embed.js"></script>
      `;

  return <div dangerouslySetInnerHTML={{ __html: tikTokEmbedCode }} />;
  return <div>TikTokEmbed3</div>;
}
