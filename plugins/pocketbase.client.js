// plugins/pocketbase.client.ts
import PocketBase from "pocketbase";

export default defineNuxtPlugin((nuxtApp) => {
  const pb = new PocketBase("http://pocketbase-a0w0cgcggcc8kws004cco4g8.88.99.84.185.sslip.io");

  return {
    provide: {
      pb,
    },
  };
});
