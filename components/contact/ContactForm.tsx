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

const ContactForm = () => {
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
        <Label className="block text-xs mb-2">お名前</Label>
        <Input {...register("name")} placeholder="Name" />
        {errors.name && <p className="text-red-500">{errors.name.message}</p>}
      </div>
      <div>
        <Label className="block text-xs mb-2">メールアドレス</Label>
        <Input {...register("email")} placeholder="Email" type="email" />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
      </div>
      <div>
        <Label className="block text-xs mb-2">会社名</Label>
        <Input {...register("company")} placeholder="Company (optional)" />
      </div>
      <div>
        <Label className="block text-xs mb-2">お問い合わせカテゴリ</Label>
        <Select
          onValueChange={(value) => {
            register("category").onChange({
              target: { name: "category", value },
            });
          }}
        >
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select a category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="general">General</SelectItem>
            <SelectItem value="support">Support</SelectItem>
            <SelectItem value="sales">Sales</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </Select>
        {errors.category && (
          <p className="text-red-500">{errors.category.message}</p>
        )}
      </div>

      <div>
        <div>
          <Label className="block text-xs mb-2">サイトURL</Label>
          <Input
            {...register("siteUrl")}
            placeholder="https://test.myshopify.com"
          />
          {errors.siteUrl && (
            <p className="text-red-500">{errors.siteUrl.message}</p>
          )}
        </div>
        <div className="mt-6">
          <Label className="block text-xs mb-2">コラボレーターコード</Label>
          <Input {...register("collaboratorCode")} placeholder="8931" />
          {errors.collaboratorCode && (
            <p className="text-red-500">{errors.collaboratorCode.message}</p>
          )}
        </div>
      </div>

      <div>
        <Label className="block text-xs mb-2">お問い合わせ内容</Label>
        <Textarea
          {...register("message")}
          placeholder="Your message"
          rows={5}
        />
        {errors.message && (
          <p className="text-red-500">{errors.message.message}</p>
        )}
      </div>
      {submitError && <p className="text-red-500">{submitError}</p>}
      {submitSuccess && (
        <p className="text-green-500">
          Thank you for your message. Well get back to you soon!
        </p>
      )}
      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
};

export default ContactForm;
