import React from 'react'
import Header from '../../Golbal Components/Header'
import Welcome from './Components/Welcome'
import QuickDraft from './Components/QuickDraft'
import YearlyTargets from './Components/YearlyTargets'
import TicketsStatistics from './Components/TicketsStatistics'
import LatestNews from './Components/LatestNews'
import LatestTasks from './Components/LatestTasks'

export default function Dashboard() {
  return (
    <div>
      <Header header={'Dashboard'} />
      <div className='grid gap-5 cus:grid-cols-1 cus2:grid-cols-2 2xl:grid-cols-3'>
        <Welcome />
        <QuickDraft />
        <YearlyTargets />
        <TicketsStatistics />
        <LatestNews />
        <LatestTasks />
      </div>
    </div>
  )
}
