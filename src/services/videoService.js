import { createClient } from "@supabase/supabase-js";

const PROJECT_URL = "https://nktzvychpauiudnbvrrl.supabase.co";
const PUBLIC_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5rdHp2eWNocGF1aXVkbmJ2cnJsIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgyODAzNzIsImV4cCI6MTk4Mzg1NjM3Mn0.iCOC-KeW7JZ3BbJ-RQVHW5Pu4w4yn7U6BLw9IpflK5k";
const supabase = createClient(PROJECT_URL, PUBLIC_KEY);

export function videoService() {
    return {
        getAllVideos() {
            return supabase.from("video")
                .select("*");
        }
    }
}