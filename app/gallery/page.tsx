import Header from "@/components/header"
import Footer from "@/components/footer"
import Gallery from "@/components/gallery"

export const metadata = {
  title: "大会結果・写真ギャラリー | 札幌卓球練習会",
  description: "札幌卓球練習会の過去の大会結果と写真ギャラリー",
}

export default function GalleryPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-24 pb-16">
        <Gallery />
      </main>
      <Footer />
    </>
  )
}
