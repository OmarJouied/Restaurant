"use server"

import { redirect } from "next/navigation";

export const order = async (orderData: any) => {
  const res = await fetch(`${process.env.BACKEND_HOST}/order`, {
    method: "POST",
    body: JSON.stringify(orderData)
  })
  const { error }: { error: boolean } = await res.json();

  if (error) redirect('/error');
  redirect('/success');
}