import { sendEmail } from "@/_actions";
import { useServiceContext } from "@/context/ServiceContext";
import { personal_data } from "@/data/home";
import { services } from "@/data/services";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import z from "zod";

const useContactForm = () => {
  const { serviceToggle, serviceIdx } = useServiceContext();

  const sendEmailSchema = z.object({
    name: z.string().min(3, {
      message: "Name is required",
    }),
    email: z.email({
      message: "This email is invalid",
    }),
    message: z.string().min(12, {
      message: `Message at least has 12 characters`,
    }),
  });

  const [formResponse, setFormResponse] = useState<{
    error: boolean;
    message: string;
  } | null>(null);

  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof sendEmailSchema>>({
    resolver: zodResolver(sendEmailSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const { setValue } = form;

  useEffect(() => {
    if (serviceIdx != null) {
      setValue(
        "message",
        `Hi ${personal_data.name}, I'm Looking for ( ${services[serviceIdx].title} ) service`,
        { shouldValidate: true }
      );
    }
  }, [setValue, serviceToggle]);

  const submitHandler = (values: z.infer<typeof sendEmailSchema>) => {
    setFormResponse(null);
    startTransition(() => {
      const { name, email, message } = values;

      sendEmail(name, email, message)
        .then((res) => {
          setFormResponse(res);
        })
        .catch((message) => setFormResponse({ error: true, message: message }));
    });
  };

  return {
    form,
    submitHandler,
    isPending,
    formResponse,
  };
};

export default useContactForm;
