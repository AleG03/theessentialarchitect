"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Separator } from "@/components/ui/separator"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/context/language-context"

export default function AdminPage() {
  const { t } = useLanguage()
  const [lawId, setLawId] = useState("")
  const [titleEn, setTitleEn] = useState("")
  const [titleIt, setTitleIt] = useState("")
  const [summaryEn, setSummaryEn] = useState("")
  const [summaryIt, setSummaryIt] = useState("")
  const [contentEn, setContentEn] = useState("")
  const [contentIt, setContentIt] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const lawCode = `
  "${lawId}": {
    title: {
      en: "${titleEn}",
      it: "${titleIt}"
    },
    summary: {
      en: "${summaryEn}",
      it: "${summaryIt}"
    },
    content: {
      en: \`
        ${contentEn}
      \`,
      it: \`
        ${contentIt}
      \`
    }
  }
`
    // Display the code or do something with it
    //console.log(lawCode)
    // You could add functionality here to copy to clipboard or show a modal
  }

  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-3xl mx-auto px-4 py-12">
        <Link href="/" className="inline-flex items-center mb-8 text-gray-600 hover:text-gray-900">
          <Button variant="ghost" className="gap-2">
            <ArrowLeft size={16} />
            {t("backToHome")}
          </Button>
        </Link>

        <div className="text-center mb-12">
          <h1 className="text-3xl font-serif font-bold">{t("documentation.addNewLaw")}</h1>
          <Separator className="my-4 mx-auto w-1/2" />
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div>
            <label className="block text-sm font-medium mb-2">Law ID</label>
            <Input
              type="text"
              value={lawId}
              onChange={(e) => setLawId(e.target.value)}
              placeholder="e.g., 2"
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-2">Title (English)</label>
              <Input
                type="text"
                value={titleEn}
                onChange={(e) => setTitleEn(e.target.value)}
                placeholder="Law title in English"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Title (Italian)</label>
              <Input
                type="text"
                value={titleIt}
                onChange={(e) => setTitleIt(e.target.value)}
                placeholder="Law title in Italian"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-2">Summary (English)</label>
              <Textarea
                value={summaryEn}
                onChange={(e) => setSummaryEn(e.target.value)}
                placeholder="Brief summary in English"
                rows={3}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Summary (Italian)</label>
              <Textarea
                value={summaryIt}
                onChange={(e) => setSummaryIt(e.target.value)}
                placeholder="Brief summary in Italian"
                rows={3}
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium mb-2">Content (English)</label>
              <Textarea
                value={contentEn}
                onChange={(e) => setContentEn(e.target.value)}
                placeholder="Full HTML content in English"
                rows={10}
                required
              />
              <p className="text-xs text-gray-500 mt-1">HTML content is supported</p>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Content (Italian)</label>
              <Textarea
                value={contentIt}
                onChange={(e) => setContentIt(e.target.value)}
                placeholder="Full HTML content in Italian"
                rows={10}
                required
              />
              <p className="text-xs text-gray-500 mt-1">HTML content is supported</p>
            </div>
          </div>

          <Button type="submit" className="w-full">
            Add New Law
          </Button>
        </form>
      </div>
    </main>
  )
}

