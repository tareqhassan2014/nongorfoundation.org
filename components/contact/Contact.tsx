import React from "react";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <section className=" py-10 ">
      <div className=" container mx-auto grid lg:grid-cols-2 grid-cols-1 gap-2 ">
        <ContactForm />
        <section>
          {/* map section */}
          <div className=" border rounded-lg p-2">
            <h4 className=" text-xl font-semibold mb-2">আমরা যেখানে আছি ?</h4>
            <div className=" h-56 ">
              <iframe
                className=" rounded-lg w-full min-h-full "
                title="Nongor Foundation"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3685.152620506735!2d88.9744099!3d22.535954900000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a01e34f30ebbee3%3A0x369d02891c96b91d!2sNongor%20Foundation!5e0!3m2!1sen!2sbd!4v1712719024042!5m2!1sen!2sbd"
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* contact address section */}
          <div className=" border rounded-lg p-2 flex flex-col gap-1 mt-2 ">
            <h4 className=" text-xl font-semibold">যোগাযোগের বিবরণ</h4>
            <hr className=" h-1 " />
            <div>
              <h4 className=" font-semibold">ঠিকানা</h4>
              <p className=" text-sm ">নোঙর ফাউন্ডেশন,</p>
              <p className=" text-sm ">
                নাংলা বাজার, দেবহাটা-৯৪৩০, দেবহাটা, সাতক্ষীরা।
              </p>
            </div>

            <div>
              <h4 className=" font-semibold">মোবাইল</h4>
              <p className=" text-sm ">+৮৮ ০১৭২০ ৪২৪ ২৮২, +৮৮ ০১৫৬৮ ৭৭৭ ৭৬৮</p>
            </div>
            <div>
              <h4 className=" font-semibold">ই-মেইল</h4>
              <p className=" text-sm ">nongorfoundation21@gmail.com</p>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Contact;
