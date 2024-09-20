import React from 'react'
import ReminderDiv from '../mini components/Reminders/ReminderDiv'

export default function Reminders() {
  return (
    <div className='p-5 rounded-[10px] bg-white '>
        <p className='text-2xl mb-5 font-semibold'>Reminders</p>
        <div className='flex flex-col gap-5'>
            <ReminderDiv bgColor={'bg-[#0075ff]'} text={'Check My Tasks List'} date={'28/09/2024 - 12:00am'} />
            <ReminderDiv bgColor={'bg-[#22c55e]'} text={'Check My Projects'} date={'26/10/2024 - 12:00am'} />
            <ReminderDiv bgColor={'bg-[#f59e0b]'} text={'Call All My Clients'} date={'05/11/2024 - 12:00am'} />
            <ReminderDiv bgColor={'bg-[#f44336]'} text={'Finish The Development Workshop'} date={'20/12/2022 - 12:00am'} />
        </div>
    </div>
  )
}
