'use client'

import React, { useState } from "react";

const EngBnToggle = () => {
  const [activeBtn, setActiveBtn] = useState<string>("eng");
  const activeBtnClasses = (btnName: string) => `cursor-pointer px-2 py-1 text-sm ${activeBtn === btnName ? "text-white bg-green-700 " : " bg-slate-100 "}`

  return (
    <div>
      <section className=" flex justify-center items-center rounded-md overflow-hidden">
        <div onClick={()=>setActiveBtn('eng')} className={activeBtnClasses('eng')} >Eng</div>
        <div onClick={()=>setActiveBtn('bn')} className={activeBtnClasses('bn')} >বাংলা</div>
      </section>
    </div>
  );
};

export default EngBnToggle;
