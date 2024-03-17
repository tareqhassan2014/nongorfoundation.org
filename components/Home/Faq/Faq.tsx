import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import "./Faq.css"
import React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

const Faq = () => {
    return (
        <div className="mb-36 max-w-6xl mx-auto font-serif px-1 lg:px-0">
            <h1 className="text-[#424242] text-center text-5xl font-serif font-semibold mb-4">Frequently Asked Questions</h1>
            <div className=''>
                <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                        <AccordionTrigger className='quest text-lg font-bold text-start'>
                            What is the mission or goal of your NGO?
                        </AccordionTrigger>
                        <AccordionContent>
                            Implementing welfare work and building a prosperous society in the service
                            of humanity through cooperation.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger className='quest text-lg font-bold text-start'>
                            What is the nature of your organization?
                        </AccordionTrigger>
                        <AccordionContent>
                            A non-political, non-profit and voluntary social welfare organization.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger className='quest text-lg font-bold'>
                            What is your procedure?
                        </AccordionTrigger>
                        <AccordionContent>
                            According to the Bangladesh Social Policy, 6 (six) measures will be taken to ensure
                            fairness and prosperity in the social system.like(Treatment,Essentials Triad :
                            ( Food, Shelter, Clothing),Education,Training,Culture,Awareness)
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-4">
                        <AccordionTrigger className='quest text-lg font-bold'>
                            I want to contact you?
                        </AccordionTrigger>
                        <AccordionContent>
                            Nongor foundation
                            Nangla Bazar, Debhata-9430, Debhata, Satkhira.
                            01720424282, 01568777768
                            Location: <a href="https://maps.app.goo.gl/eRRjPBov6VsydeuA8">https://maps.app.goo.gl/eRRjPBov6VsydeuA8</a>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
            <Link href={"#"}><Button variant={"custom"} className='w-full mt-10 py-8 text-xl font-semibold'>Still Have question ? Contact Us</Button></Link>
        </div>
    );
};

export default Faq;