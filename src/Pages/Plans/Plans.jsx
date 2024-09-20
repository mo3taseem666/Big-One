import Header from '../../Golbal Components/Header';
import Basic from './Components/Basic';
import Free from './Components/Free';
import PlanDiv from './Components/PlanDiv';
import Premium from './Components/Premium';

export default function Plans() {
   return (
      <div className="">
         <Header header={'Plans'} />
         <div className="flex gap-5 cusT:flex-col justify-between xs:flex-col xs:w-full">
            <Free />
            <Basic />
            <Premium />
         </div>
      </div>
   );
}
