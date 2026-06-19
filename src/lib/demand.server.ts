// Server-only: do NOT import from client modules.
// The webhook URL lives only on the server bundle.
export const MAKE_WEBHOOK_URL =
  process.env.MAKE_WEBHOOK_URL ??
  "https://hook.us2.make.com/pmm8o211erg28ga3ynnh5xc6rq3fw4l8";
