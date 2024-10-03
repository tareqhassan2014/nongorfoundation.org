"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().min(2, {
    message: "Enter a valid email address. ",
  }),
  number: z.string().min(11, {
    message: "Enter 11 digits phone numebr. ",
  }),
  message: z.string(),
});

const formFieldData = [
  { fieldName: 'name', label: "Your Name", placeholder: "Latent Talent" },
  { fieldName: 'email', label: "Email", placeholder: "example@gmail.com" },
  { fieldName: 'number', label: "Phone Number", placeholder: "Phone Number" },
];


interface formDataType {
  name: string;
  email: string;
  number: string;
  message: string;
}
const ContactForm = () => {
  const [formData, setFormData] = useState<formDataType>({
    name: "",
    email: "",
    number: "",
    message: "",
  });

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      number: "",
      message: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    setFormData(values);
  }

  return (
    <div className=" border p-2 rounded-md">
      <h1 className=" text-xl font-semibold">
        Feel free to contact us
      </h1>
      <hr className=" h-1 my-5" />

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className=" flex flex-col gap-2 w-full"
        >
          {formFieldData.map((fieldData, index) => (
            <FormField
              key={index}
              control={form.control}
              name={fieldData.fieldName as 'name'}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className=" text-sm text-slate-500">
                    {fieldData.label} <span className=" text-red-500 ">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder={fieldData.placeholder}
                      {...field}
                      className=" text-sm focus-visible:outline-none"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          ))}

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem className=" flex flex-col">
                <FormLabel className=" text-sm text-slate-500">
                  Message
                </FormLabel>
                <FormControl>
                  <textarea
                    placeholder="Type your message here."
                    rows={5}
                    {...field}
                    className=" text-sm border rounded-md p-2 focus-visible:outline-none"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div>
            <button
              type="submit"
              className="py-1 px-3 text-white bg-green-700 rounded-md "
            >
              Sent
            </button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default ContactForm;
