export const inquiryLimits = { name: 100, contact: 160, interest: 1200 } as const

export type InquiryStatus = "idle" | "sent" | "invalidContact" | "invalidFields" | "invalidPlanning" | "unavailable" | "rateLimited" | "error"
