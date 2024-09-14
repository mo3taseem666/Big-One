import React, { useState } from 'react';
import Btn from '../../Golbal Components/Btn';
import { btns } from '../../Files/Btns';

export default function NavList() {
  const [selected, setSelected] = useState(0);
  return (
    <div className="flex flex-col gap-2">
      {btns.map((el, idx) => (
        <Btn
          selected={selected}
          setSelected={setSelected}
          id={el.id}
          key={el.id}
          icon={<el.icon sx={{ fontSize: '20px' }} />}
          title={el.title}
        />
      ))}
    </div>
  );
}
