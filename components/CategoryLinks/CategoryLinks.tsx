import { db } from "@/lib/data/db"

export async function CategoryLinks() {
    const categories = await db.selectFrom('category').selectAll().execute();
    console.log(categories)
    return <h1>CategoryLinks</h1>
}