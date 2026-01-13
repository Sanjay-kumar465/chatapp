import { Resend } from "resend";

export const sender = "no-reply@chatapp.dev";

export const resendClient = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;
