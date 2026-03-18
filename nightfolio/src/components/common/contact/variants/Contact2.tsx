"use client";

import useContactForm from "@/hooks/useContactForm";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../../../shadcn/form";
import { ReactNode, useRef } from "react";
import { Input } from "@/components/shadcn/input";
import { Textarea } from "@/components/shadcn/textarea";
import FormResponse from "../FormResponse";
import Button from "@/components/ui/Button";
import { contact_info } from "@/data/contact";
import ContactInfo from "../ContactInfo";
import MaxWidthWrapper from "../../global/MaxWidthWrapper";
import { cn } from "@/lib/utils";
import ButtonArrowUpRight from "../../global/ButtonArrowUpRight";
import ClickableText from "../../global/ClickableText";

const FormInputWrapper = ({
  children,
  label,
  className,
}: {
  children: ReactNode;
  label: string;
  className?: string;
}) => {
  return (
    <label
      className={cn(
        "border-2 border-(--border) dark:bg-(--color-landing) focus-within:border-(--text-primary) rad padding-query space-y-8 block duration",
        className
      )}
    >
      <h1 className="text-3xl">{label} *</h1>
      {children}
    </label>
  );
};

const Contact2 = () => {
  const { form, submitHandler, isPending, formResponse } = useContactForm();

  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleInput = () => {
    const textarea = textareaRef.current;
    if (!textarea) return;

    textarea.style.height = "auto"; // reset first
    textarea.style.height = textarea.scrollHeight + "px"; // set based on content
  };

  return (
    <MaxWidthWrapper className="space-y-16">
      <div className="flex lg:flex-row flex-col gap-8 justify-between">
        <div className="flex gap-8 flex-wrap justify-query">
          {contact_info.map((item, i) => (
            <ContactInfo key={i} {...item} />
          ))}
        </div>

        <h1 className="text-5xl text-query">
          ✺ Interested in <br /> working with me ?
        </h1>
      </div>

      <div id="contact-form">
        <Form {...form}>
          <form
            className="lg:space-y-16 space-y-8"
            id="contact-form"
            onSubmit={form.handleSubmit(submitHandler)}
          >
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-8">
              <FormInputWrapper label="Your Name">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="John Alex"
                          type="text"
                          disabled={isPending}
                          autoComplete="on"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </FormInputWrapper>

              <FormInputWrapper label="Your Email">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="john.example@gmail.com"
                          type="text"
                          disabled={isPending}
                          autoComplete="on"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </FormInputWrapper>

              <FormInputWrapper label="Your Message" className="lg:col-span-2">
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Textarea
                          {...field}
                          ref={textareaRef}
                          rows={1}
                          onInput={handleInput}
                          placeholder="Hi, I'm Looking for..."
                          autoComplete="on"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </FormInputWrapper>
            </div>

            <FormResponse
              error={formResponse?.error}
              message={formResponse?.message}
            />

            <div className="lg:w-70 w-full mx-auto">
              <Button
                className="flex-center lg:w-60 w-full bg-(--bg-primary-inverse) text-(--text-primary-inverse) py-10 group"
                type="submit"
                variant="default"
                disabled={
                  isPending || (formResponse !== null && !formResponse.error)
                }
                MagneticClassName="lg:w-60 w-full"
              >
                {isPending ? (
                  <span className="spinner" />
                ) : (
                  <div className="flex-center font-medium text-2xl">
                    <ClickableText text="Send Message" /> <ButtonArrowUpRight />
                  </div>
                )}
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </MaxWidthWrapper>
  );
};

export default Contact2;
