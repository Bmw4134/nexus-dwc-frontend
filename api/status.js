
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.SUPABASE_PROJECT_URL,
  process.env.SUPABASE_ANON_KEY
)

export default async function handler(req, res) {
  try {
    const { data, error } = await supabase.from('status').select('*').limit(1)
    if (error) throw error
    res.status(200).json(data[0] || { message: 'No status found' })
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}
