"use client";

import Layout from "@/layout/Layout";
import { useState } from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Profile = ({ color }) => {
  if (!localStorage.getItem("loginData")) {
    window.location.href = "/login";
  }

  const logout = () => {
    localStorage.clear();
    window.location.replace("/");
  };

  const [openTab, setOpenTab] = useState(1);
  return (
    <>
      <Layout>
        <br />
        <div className="container mx-auto flex  flex-wrap gap-4">
          <div className="w-full flex justify-between">
            <ul
              className="rounded mb-0 w-[28%] space-y-3 bg-white list-none flex-wrap pt-3 pb-4 flex-row"
              role="tablist"
            >
              <li className="-mb-px mr-2 last:mr-0 flex-auto ">
                <a
                  className={
                    "text-xs font-bold uppercase px-5 py-3 rounded block leading-normal " +
                    (openTab === 1
                      ? "text-[#1FBA4A] " + color + "-600"
                      : "text-" + color + "-600 bg-white")
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab(1);
                  }}
                  data-toggle="tab"
                  href="#link1"
                  role="tablist"
                >
                  Akkaunt
                </a>
              </li>
              <li className="-mb-px mr-2 last:mr-0 flex-auto ">
                <a
                  className={
                    "text-xs font-bold uppercase px-5 py-3 rounded block leading-normal " +
                    (openTab === 2
                      ? "text-[#1FBA4A] bg-" + color + "-600"
                      : "text-" + color + "-600 bg-white")
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab(2);
                  }}
                  data-toggle="tab"
                  href="#link2"
                  role="tablist"
                >
                  Sizning buyurtmalaringiz
                </a>
              </li>
              <li className="-mb-px mr-2 last:mr-0 flex-auto ">
                <a
                  className={
                    "text-xs font-bold uppercase px-5 py-3 rounded block leading-normal " +
                    (openTab === 3
                      ? "text-[#1FBA4A] bg-" + color + "-600"
                      : "text-" + color + "-600 bg-white")
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab(3);
                  }}
                  data-toggle="tab"
                  href="#link3"
                  role="tablist"
                >
                  Sizning qurilmalaringiz
                </a>
              </li>
              <li className="-mb-px mr-2 last:mr-0 flex-auto ">
                <a
                  className={
                    "text-xs font-bold uppercase px-5 py-3 rounded block leading-normal " +
                    (openTab === 4
                      ? "text-[#1FBA4A] bg-" + color + "-600"
                      : "text-" + color + "-600 bg-white")
                  }
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab(4);
                  }}
                  data-toggle="tab"
                  href="#link4"
                  role="tablist"
                >
                  Yordam kerakmi ?
                </a>
              </li>
              <hr />
              <li className="-mb-px mr-2 last:mr-0 flex-auto ">
                
                <Dialog>
                  <DialogTrigger asChild>
                  <p className="cursor-pointer text-xs text-red-600 font-bold uppercase px-5 py-3">
                  Chiqish 
                </p>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                      <DialogTitle className="text-center">Chiqish</DialogTitle>
                      <DialogDescription>
                      Chiqishni xohlaysizmi ? <br />
Hisobingizdan chiqib ketsangiz, profilingiz va barcha ma’lumotlaringizni qayta kiritishingiz kerak bo‘ladi 
                      </DialogDescription>
                    </DialogHeader>
                    <DialogFooter>
                        <DialogClose asChild>
                            <Button className="w-full" type="submit">Yo'q</Button>
                        </DialogClose>
                      <Button onClick={logout} className="w-full bg-[#1FBA4A]" type="submit">Ha</Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </li>
            </ul>
            <div className="w-[70%] relative flex flex-col min-w-0 break-words bg-white mb-6  rounded">
              <div className="px-4 py-5 flex-auto">
                <div className="tab-content tab-space">
                  <div
                    className={openTab === 1 ? "block" : "hidden"}
                    id="link1"
                  >
                    <h1 className="text-xl font-semibold">
                      Sizning profilingiz
                    </h1>
                    <br />
                    <form action="" className="flex items-end space-x-2">
                      <label htmlFor="">
                        Ism <br />
                        <input
                          className="px-5 border-[#EFF3F8] bg-[#F6F8FA] rounded-md py-3 outline-none "
                          type="text"
                        />
                      </label>
                      <label htmlFor="">
                        Familiya <br />
                        <input
                          className="px-5 border-[#EFF3F8] bg-[#F6F8FA] rounded-md py-3 outline-none "
                          type="text"
                        />
                      </label>
                      <button className="px-5 py-3 roounded-md bg-[#0A0A0A] text-white">
                        Saqlash
                      </button>
                    </form>
                    <br />
                    <hr />
                  </div>
                  <div
                    className={openTab === 2 ? "block" : "hidden"}
                    id="link2"
                  >
                    <p>
                      Completely synergize resource taxing relationships via
                      premier niche markets. Professionally cultivate one-to-one
                      customer service with robust ideas.
                      <br />
                      <br />
                      Dynamically innovate resource-leveling customer service
                      for state of the art customer service.
                    </p>
                  </div>
                  <div
                    className={openTab === 3 ? "block" : "hidden"}
                    id="link3"
                  >
                    <p>
                      Efficiently unleash cross-media information without
                      cross-media value. Quickly maximize timely deliverables
                      for real-time schemas.
                      <br />
                      <br /> Dramatically maintain clicks-and-mortar solutions
                      without functional solutions.
                    </p>
                  </div>
                  <div
                    className={openTab === 4 ? "block" : "hidden"}
                    id="link3"
                  >
                    <h1 className="text-center text-2xl font-bold">F.A.Q</h1>
                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="item-1">
                        <AccordionTrigger>
                          Ayirboshlash siyosati
                        </AccordionTrigger>
                        <AccordionContent>
                          Yes. It adheres to the WAI-ARIA design pattern.
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-2">
                        <AccordionTrigger>
                          Pulni qaytarish siyosati
                        </AccordionTrigger>
                        <AccordionContent>
                          Yes. It comes with default styles that matches the
                          other components&apos; aesthetic.
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-3">
                        <AccordionTrigger>
                          Veb-sayt vaqt talab qilmoqda, uni qanday yaxshilash
                          kerak?
                        </AccordionTrigger>
                        <AccordionContent>
                          Yes. It&apos;s animated by default, but you can
                          disable it if you prefer.
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-4">
                        <AccordionTrigger>
                          Hisob qaydnomasini qanday yarataman?
                        </AccordionTrigger>
                        <AccordionContent>
                          Yes. It&apos;s animated by default, but you can
                          disable it if you prefer.
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default function TabsRender() {
  return (
    <>
      <Profile color="pink" />;
    </>
  );
}
