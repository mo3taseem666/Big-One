import React from 'react';

export default function PicturesPart({ el }) {
    return (
        <div className="flex mt-7 relative">
            {el.Team.map((el, idx) => (
                <img
                    key={idx}
                    src={el}
                    alt="team"
                    className={`size-10 hover:z-[99] cursor-pointer rounded-full border-2 border-white`}
                    style={{
                        position: !idx ? 'static' : 'absolute',
                        left: `${idx * 20}px`,
                    }}
                />
            ))}
        </div>
    );
}
