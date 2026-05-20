import { httpClient } from "@/services/httpClient"

export async function loginRequest(payload) {
  return httpClient("/api/login", {
    method: "POST",
    body: JSON.stringify(payload),
  })
}
