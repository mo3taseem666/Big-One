import React from 'react';
import Header from '../../Golbal Components/Header';
import Welcome from './Components/Welcome';
import QuickDraft from './Components/QuickDraft';
import YearlyTargets from './Components/YearlyTargets';
import TicketsStatistics from './Components/TicketsStatistics';
import LatestNews from './Components/LatestNews';
import LatestTasks from './Components/LatestTasks';
import TopSearchItems from './Components/TopSearchItems';
import LatestUploads from './Components/LatestUploads';
import LastProjectProgress from './Components/LastProjectProgress';
import Reminders from './Components/Reminders';
import LatestPost from './Components/LatestPost';
import SocialMediaStats from './Components/SocialMediaStats';
import Projects from './Components/Projects';

export default function Dashboard() {
   return (
      <div>
         <Header header={'Dashboard'} />
         <div className="grid gap-5 cus:grid-cols-1 cus2:grid-cols-2 cus3:grid-cols-3">
            <Welcome />
            <QuickDraft />
            <YearlyTargets />
            <TicketsStatistics />
            <LatestNews />
            <LatestTasks />
            <TopSearchItems />
            <LatestUploads />
            <LastProjectProgress />
            <Reminders />
            <LatestPost />
            <SocialMediaStats />
            <Projects />
         </div>
      </div>
   );
}
