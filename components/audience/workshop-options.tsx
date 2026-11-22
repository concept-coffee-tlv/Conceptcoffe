import { getTranslations } from "next-intl/server"
import { Link } from "@/src/i18n/navigation"

const workshopIds = ["tasting", "barista", "latteart", "cupping", "roasting", "custom"] as const
type WorkshopId = (typeof workshopIds)[number]

export async function WorkshopOptions({ options }: { options: Partial<Record<WorkshopId, string>> }) {
  const directory = await getTranslations("workshopsPage.workshops")
  return (
    <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {workshopIds.filter((id) => options[id]).map(async (id) => {
        const detail = await getTranslations(`${id}Page`)
        return (
          <li key={id} className="rounded-xl border border-border bg-card p-5 sm:p-6">
            <h3 className="font-serif text-xl font-bold">
              <Link href={`/workshops/${id}`} className="underline decoration-accent underline-offset-4 hover:text-accent">
                {detail("title")}
              </Link>
            </h3>
            <p className="mt-2 text-sm font-medium">{directory(`${id}.duration`)}</p>
            <p className="mt-3 leading-relaxed text-muted-foreground">{options[id]}</p>
          </li>
        )
      })}
    </ul>
  )
}
