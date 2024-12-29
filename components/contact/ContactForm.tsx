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

const customErrorMap: z.ZodErrorMap = (issue, ctx) => {
  switch (issue.code) {
    case z.ZodIssueCode.invalid_type:
      if (issue.expected === "string") {
        return { message: "文字列を入力してください。" };
      }
      return { message: `無効なタイプです。期待された型: ${issue.expected}` };

    case z.ZodIssueCode.invalid_string:
      if (issue.validation === "email") {
        return { message: "有効なメールアドレスを入力してください。" };
      }
      return { message: "文字列形式が不正です。" };

    case z.ZodIssueCode.too_small:
      if (issue.type === "string") {
        return { message: `${issue.minimum}文字以上で入力してください。` };
      }
      return { message: `最小値は ${issue.minimum} です。` };

    case z.ZodIssueCode.too_big:
      if (issue.type === "string") {
        return { message: `${issue.maximum}文字以内で入力してください。` };
      }
      return { message: `最大値は ${issue.maximum} です。` };

    case z.ZodIssueCode.invalid_enum_value:
      return { message: "不正な選択肢が選ばれています。" };

    default:
      return { message: ctx.defaultError };
  }
};

z.setErrorMap(customErrorMap);

const formSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  company: z.string().optional(),
  category: z.enum(["general", "support", "sales", "other"]),
  message: z.string().min(10),
  siteUrl: z.string().optional(),
  collaboratorCode: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

export default function ContactForm() {
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
      const result = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        data,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );

      if (result.text === "OK") {
        reset();
        setSubmitSuccess(true);
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
        <Input {...register("name")} placeholder="山田 太郎" />
        {errors.name && (
          <p className="text-red-500 mt-2 text-xs">{errors.name.message}</p>
        )}
      </div>

      <div>
        <Label className="block text-xs mb-2">メールアドレス</Label>
        <Input
          {...register("email")}
          type="email"
          placeholder="your-email@example.com"
        />
        {errors.email && (
          <p className="text-red-500 mt-2 text-xs">{errors.email.message}</p>
        )}
      </div>

      <div>
        <Label className="block text-xs mb-2">会社名</Label>
        <Input {...register("company")} type="text" placeholder="会社名" />
      </div>

      <div>
        <Label className="block text-xs mb-2">お問い合わせ内容</Label>
        <Select
          {...register("category")} /* ← これがないと RHF には反映されない */
        >
          <SelectTrigger>
            <SelectValue placeholder="お問い合わせ内容" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="general">一般</SelectItem>
            <SelectItem value="support">サポート</SelectItem>
            <SelectItem value="sales">営業</SelectItem>
            <SelectItem value="other">その他</SelectItem>
          </SelectContent>
        </Select>
        {errors.category && (
          <p className="text-red-500 mt-2 text-xs">{errors.category.message}</p>
        )}
      </div>
      <div>
        <Label className="block text-xs mb-2">サイトURL</Label>
        <Input {...register("siteUrl")} placeholder="https://example.com" />
        {errors.siteUrl && (
          <p className="text-red-500 mt-2 text-xs">{errors.siteUrl.message}</p>
        )}
      </div>

      <div>
        <Label className="block text-xs mb-2">コラボレーターコード</Label>
        <Input {...register("collaboratorCode")} placeholder="1234" />
        {errors.collaboratorCode && (
          <p className="text-red-500 mt-2 text-xs">
            {errors.collaboratorCode.message}
          </p>
        )}
      </div>

      <div>
        <Label className="block text-xs mb-2">お問い合わせ内容</Label>
        <Textarea {...register("message")} placeholder="お問い合わせ内容" />
        {errors.message && (
          <p className="text-red-500 mt-2 text-xs">{errors.message.message}</p>
        )}
      </div>

      <Button className="w-full" type="submit" disabled={isSubmitting}>
        {isSubmitting ? "送信中..." : "送信する"}
      </Button>

      {submitError && (
        <p className="text-red-500">
          送信に失敗しました。時間をおいて再度お試しください。
        </p>
      )}
      {submitSuccess && (
        <p className="text-green-500">
          お問い合わせありがとうございます。担当者より連絡させていただきます。
        </p>
      )}
    </form>
  );
}