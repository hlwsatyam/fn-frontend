'use server';

import { cookies } from 'next/headers';

export async function createCookies(name, token) {
  // Function to calculate the timestamp for the expiration date

  // Set the cookie with a maxAge of 7 days from now
  const OneDay = 24 * 60 * 60 * 1000; // 7 days in milliseconds

  cookies().set(name, token, { maxAge: OneDay });
}

export async function deleteCookies(name) {
  cookies().delete(name);
}
