import type { Job } from "../server/db";

export async function fetchUrl<T>(url: string): Promise<T> {
  const response = await fetch(url);
  return await response.json();
}

export async function fetchJobs(): Promise<Job[]> {
  return await fetchUrl("/api/jobs");
}
