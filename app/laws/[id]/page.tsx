"use client"

import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { notFound } from "next/navigation"
import { useLanguage } from "@/context/language-context"
import { LanguageSwitcher } from "@/components/language-switcher"
import { translations } from "@/data/translations"

export default function LawPage({ params }: { params: { id: string } }) {
  const { id } = params
  const { t } = useLanguage()

  // Check if the law exists in our translations
  if (!translations.laws[id]) {
    return notFound()
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Language switcher in the top right */}
      <div className="absolute top-4 right-4 z-10">
        <LanguageSwitcher />
      </div>

      <div className="max-w-3xl mx-auto px-4 py-12">
        <Link href="/" className="inline-flex items-center mb-8 text-gray-600 hover:text-gray-900">
          <Button variant="ghost" className="gap-2">
            <ArrowLeft size={16} />
            {t("backToHome")}
          </Button>
        </Link>

        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif font-bold">
            {t("law")} {id}.
          </h2>
          <Separator className="my-4 mx-auto w-1/2" />
          <h1 className="text-2xl font-medium">{t(`laws.${id}.title`)}</h1>
        </div>

        <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: t(`laws.${id}.content`) }} />
      </div>
    </main>
  )
}

