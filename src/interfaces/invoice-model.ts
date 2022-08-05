export interface IInvoice {
  id: string;
  user_id: string;
  description: string;
  expiry_date: string;
  external_id: string;
  invoice_url: string;
  payer_email: string;
}
