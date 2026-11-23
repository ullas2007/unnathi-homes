import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://gcjpevzgxbddqdnqycmh.supabase.co";

const supabaseAnonKey = "sb_publishable_0i8QXMNpw_lXbn0NwD7Yrw_cC-R_IXM";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
