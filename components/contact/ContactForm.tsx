"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import emailjs from "@emailjs/browser";
import { z } from "zod";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "../ui/label";
import { useTranslation } from "@/app/i18n";

const formSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  company: z.string().optional(),
  category: z.enum(["general", "support", "sales", "other"]),
  message: z.string().min(10),
  siteUrl: z.string().url(),
  collaboratorCode: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

const validateForm = async (formData: FormData) => {
  const result = formSchema.safeParse(formData);

  if (!result.success) {
    return { success: false, errors: result.error.flatten().fieldErrors };
  }

  return { success: true, data: result.data };
};

const ContactForm = async ({ lang }: { lang: string }) => {
  const { t } = await useTranslation(lang, "common");
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      category: "general",
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setSubmitError(null);
    setSubmitSuccess(false);

    try {
      console.log("Form data:", data); // デバッグ用
      const validationResult = await validateForm(data);
      if (!validationResult.success) {
        setSubmitError("Validation failed. Please check your inputs.");
        console.error("Validation error:", validationResult.errors);
        return;
      }

      var templateParams = {
        ...data,
      };

      const result = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );

      if (result.text === "OK") {
        reset();
        setSubmitSuccess(true);
        console.log("Email sent successfully");
      } else {
        throw new Error("Failed to send email");
      }
    } catch (error) {
      setSubmitError("An unexpected error occurred. Please try again later.");
      console.error("Unexpected error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div>
        <Label className="block text-xs mb-2">{t("contact.name")}</Label>
        <Input
          {...register("name")}
          placeholder={t("contact.name_placeholder")}
        />
        {errors.name && <p className="text-red-500">{errors.name.message}</p>}
      </div>
      <div>
        <Label className="block text-xs mb-2">{t("contact.email")}</Label>
        <Input
          {...register("email")}
          placeholder={t("contact.email_placeholder")}
          type="email"
        />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
      </div>
      <div>
        <Label className="block text-xs mb-2">{t("contact.company")}</Label>
        <Input
          {...register("company")}
          placeholder={t("contact.company_placeholder")}
        />
      </div>
      <div>
        <Label className="block text-xs mb-2">{t("contact.category")}</Label>
        <Select
          onValueChange={(value) => {
            register("category").onChange({
              target: { name: "category", value },
            });
          }}
        >
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder={t("contact.category_placeholder")} />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="general">
              {t("contact.category_general")}
            </SelectItem>
            <SelectItem value="support">
              {t("contact.category_support")}
            </SelectItem>
            <SelectItem value="sales">{t("contact.category_sales")}</SelectItem>
            <SelectItem value="other">{t("contact.category_other")}</SelectItem>
          </SelectContent>
        </Select>
        {errors.category && (
          <p className="text-red-500">{errors.category.message}</p>
        )}
      </div>

      <div>
        <div>
          <Label className="block text-xs mb-2">{t("contact.site_url")}</Label>
          <Input
            {...register("siteUrl")}
            placeholder={t("contact.site_url_placeholder")}
          />
          {errors.siteUrl && (
            <p className="text-red-500">{errors.siteUrl.message}</p>
          )}
        </div>
        <div className="mt-6">
          <Label className="block text-xs mb-2">
            {t("contact.collaborator_code")}
          </Label>
          <Input
            {...register("collaboratorCode")}
            placeholder={t("contact.collaborator_code_placeholder")}
          />
          {errors.collaboratorCode && (
            <p className="text-red-500">{errors.collaboratorCode.message}</p>
          )}
        </div>
      </div>

      <div>
        <Label className="block text-xs mb-2">{t("contact.message")}</Label>
        <Textarea
          {...register("message")}
          placeholder={t("contact.message_placeholder")}
          rows={5}
        />
        {errors.message && (
          <p className="text-red-500">{errors.message.message}</p>
        )}
      </div>
      {submitError && (
        <p className="text-red-500">{t("contact.error_message")}</p>
      )}
      {submitSuccess && (
        <p className="text-green-500">{t("contact.success_message")}</p>
      )}
      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? t("contact.sending") : t("contact.send")}
      </Button>
    </form>
  );
};

export default ContactForm;
