import React from 'react';
import NewsDiv from '../mini components/Latese News/NewsDiv';
import news1 from '../.././../assets/imgs/news-01.png';
import news2 from '../.././../assets/imgs/news-02.png';
import news3 from '../.././../assets/imgs/news-03.png';
import news4 from '../.././../assets/imgs/news-04.png';

export default function LatestNews() {
  return (
    <div className="bg-white rounded-[10px] p-5">
      <p className="text-2xl mb-5 font-semibold">Latest News</p>
      <div className="flex gap-9 flex-col">
        <NewsDiv
          src={news1}
          title={'Created SASS Section'}
          details={'New SASS Examples & Tutorials'}
          days={3}
        />
        <NewsDiv
          src={news2}
          title={'Changed The Design'}
          details={'A Brand New Website Design'}
          days={5}
        />
        <NewsDiv
          src={news3}
          title={'Team Increased'}
          details={'3 Developers Joined The Team'}
          days={7}
        />
        <NewsDiv
          src={news4}
          title={'Added Payment Gateway'}
          details={'Many New Payment Gateways Added'}
          days={9}
        />
      </div>
    </div>
  );
}
