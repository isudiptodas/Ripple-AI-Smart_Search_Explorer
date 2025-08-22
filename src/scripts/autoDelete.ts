import { supabase } from "@/utils/supabase";
import nodeCron from "node-cron";

export const deleteFiles = async () => {
    const oldTime = new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString();

    try {
        const { data, error } = await supabase
            .from(process.env.NEXT_PUBLIC_SUPABASE_TABLE_NAME as string)
            .select()
            .lt('created_at', oldTime);

        if (error) {
            console.log(error);
        }

        if (data) {
            for (const file of data) {
                const { data, error } = await supabase
                    .storage
                    .from(process.env.NEXT_PUBLIC_SUPABASE_BUCKET_ID as string)
                    .remove([file?.path]);
            }

            for (const row of data) {
                const response = await supabase
                    .from(process.env.NEXT_PUBLIC_SUPABASE_TABLE_NAME as string)
                    .delete()
                    .eq('id', row.id)
            }
        }
    } catch (err) {
        console.log(err);
    }
}

// nodeCron.schedule("*/10 * * * *", async () => {
//     console.log("Running cleanup job at", new Date().toISOString());
//     await deleteFiles();
// });

