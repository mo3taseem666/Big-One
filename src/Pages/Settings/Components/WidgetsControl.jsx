import DivHeader from '../../../Golbal Components/DivHeader';
import { GlobalClasses } from '../../../Golbal Components/GlobalClasses';
import CustomCheckbox from '../Mini Components/Widgets Control/CustomCheckbox';

export default function WidgetsControl() {
    const { mainDiv } = GlobalClasses();

    return (
        <div className={mainDiv}>
            <DivHeader title="Widgets Control" details="Show/Hide Widgets" />
            <div className="flex flex-col gap-4">
                <CustomCheckbox isChecked={true} label='Quick Draft' />
                <CustomCheckbox isChecked={true} label='Yearly Targets' />
                <CustomCheckbox isChecked={false} label='Tickets Statistics' />
                <CustomCheckbox isChecked={true} label='Latest News' />
                <CustomCheckbox isChecked={false} label='Latest Tasks' />
                <CustomCheckbox isChecked={true} label='Top Search Items' />
            </div>
        </div>
    );
}
